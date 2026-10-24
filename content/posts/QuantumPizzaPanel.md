---
title: Quantumpizza gets peer reviewed, by three AIs
date: 2026-10-24T10:10:00+01:00
draft: false
description: My 'lonely spinor neuron' from last November wasn't actually a spinor. Claude worked out why, three other models had a go blind, and then we finally ran the experiment the file had been promising.
tags:
  - AI
  - spinors
  - geometric algebra
  - experiments
  - OpenRouter
categories: []
authors: []
---

*Written from our session logs of 23 October, I'll be going over it. The code is on GitHub as [Quantumpizza](https://github.com/SoulFireMage/Quantumpizza-).*

Quantumpizza is a Sunday afternoon repo from last November, where Claude, Gemini and Kimi dared each other into spinor networks, hyperbolic networks, gauge transformers and a "Calabi-Yau brain", all in Python. It's vibe code grade and the README says so. It also already admits the uncomfortable truth, that on digital hardware everything comes down to multiply-accumulate, so any clever structure only pays off when it happens to match the problem.

The one file I'd been pointing people at was `LonelySpinor.py`. It puts an ordinary neuron, `tanh(w·x + b)`, next to a "spinor neuron", `normalize(R·x·R† + b)`, where R is a rotor built from a learned bivector. I had a feeling it could be more correct and more interesting with a proper review and a play around, so that's what we did.

## The review

The Clifford algebra itself was fine, the multiplication table, the reverse and the bivector exponential all checked out. Then Claude ran a test about three lines long and the neuron fell over.

Kat's version: a spinor is the thing that remembers the twist. Turn it 360° and it comes back negated, and you need the full 720° to get home. The sandwich R·x·R† forgets the twist, so R and −R give exactly the same answer every time, and the "spinor neuron" was really an ordinary rotation acting on a scalar plus a 3-vector, dressed up in spinor clothes.

My version, step by step:

1. The input x has four live parts, a scalar and three bivector parts (e₁₂, e₁₃, e₂₃).
2. The sandwich R·x·R† leaves the scalar alone (0.8 in, 0.8 out) and rotates the three bivector parts like an arrow.
3. Swap R for −R and the sign flips twice, once on each side, so it cancels out: (−R)·x·(−R)† = R·x·R†.
4. The one-sided product R·x doesn't cancel. That's quaternion multiplication, because the even part of this algebra *is* the quaternions, and it treats x as a proper spinor.

A few smaller things turned up while it was in there. R = exp(B) rotates by twice the angle you'd expect, 34.4° for |B| = 0.3, where the usual convention is R = exp(−B/2). The scalar part of the input can't be touched by any weight at all, only by the bias. And the cost table in the file was wrong in both directions. The code multiplies through a dense 8×8×8 table, which is about a thousand multiplies per product, not the "~50–100" it claimed, whereas a proper one-sided spinor neuron is a single quaternion product at 16 multiplies. So the real spinor neuron turns out to be the cheap one.

## The panel

Then, purely for entertainment, I wanted some other models to have a go. Mercury 3, Kimi K3 and that old hacker DeepSeek 4.1 each got the same file and the same questions through OpenRouter, **blind**, without Claude's findings. The questions were whether the maths is right, whether it's really a spinor, what the biggest conceptual problem is, one experiment to test it, and one line of banter for the other panellists.

All three spotted that the sandwich is a rotation (SO(3)) rather than a spinor action, so credit where it's due. Kimi named the exact test, sandwich(−R) = sandwich(R), gave the one-line fix, and was both the most accurate and the most entertaining of the three. None of them caught the factor of two or the cost table. Mercury was confidently wrong twice. It said the reverse signs follow grade parity, when they follow (−1)^(k(k−1)/2), and that even-subalgebra elements "aren't spinors", when with the one-sided action they're exactly the Pauli spinors.

Claude didn't take any of them at their word, it checked each claim numerically before scoring them, which is how Mercury's two slips got caught.

## The fixes

These are all merged now. There's `spinor_action` (R·x) and `true_spinor_neuron` sitting beside the old sandwich version so you can see both, a `demo_720()` that rotates both by 360° and 720° (only the true spinor flips sign at 360°), `rotor(B) = exp(−B/2)` so the angle means what it says, and a corrected cost table.

## The experiment it had been promising

The whole bet in that file was *"richer primitive = fewer neurons needed"*, and nothing in it ever trained anything. So `rotation_experiment.py` finally tests it. A hidden 100° rotation in a tilted plane gets applied to inputs, each model has to learn it from examples, and then it's tested on a wedge of inputs it never saw during training.

The contestants were the rotor neuron with 3 parameters, a tanh MLP with anywhere from 60 to 600, and a plain linear map. The linear map was Claude's addition, and the honest one. A rotation is linear, so a 3×3 or 4×4 matrix can represent the answer exactly with no geometry built in at all, which means anything the neurons gain over it comes purely from the constraint.

With 256 clean training samples the matching neuron is exact, error down at rounding level (~1e-25), held-out wedge included, on 3 parameters. The wrong action fails however long you train it, errors of 0.4 to 0.7, because the sandwich can't fit a spinor task and the one-sided product can't fit a vector task. The best MLP gets to about 1e-5 and does 2–6× worse on the unseen wedge. And the linear map is **also exact**, on 9 or 16 parameters. So against an MLP it looks like a 100× win, but against the honest control it's 3–5× fewer parameters, the MLP just being a weak baseline for a linear problem.

With only a few noisy samples (`--sweep`) is where a constraint ought to earn its keep, so Claude wrote a prediction down before running it. Least-squares error grows with noise² × parameters / samples, so the linear map should come out about 3× worse on vectors and 5× worse on spinors, and far worse when there are fewer samples than dimensions. What came back was a win for the neuron of 60× on vectors and 200–300× on spinors with only 2–3 samples. With 5 to 100 samples, vectors came out 2.5–7×, close to the prediction, and spinors 7–20×, well above it. Nobody knows yet why the spinors beat the prediction. Claude's guess is that the wedge test makes the linear map extrapolate, which costs more in 4D, but it's untested and labelled as such in the code.

So it ends up where the README said it would, only now with numbers attached. The structure pays when data is scarce, and with plenty of clean data the advantage shrinks to the parameter ratio. No Nobel awaits, as my commit message said last year :P

## Concept Explorer got the same treatment

The same session then went through [Concept Explorer](https://github.com/SoulFireMage/ConceptExplorer), fixing resolver, rotation and escaping bugs, making the concept operators actually use each concept's properties, and adding tests. GitHub's Copilot reviewer then left nine comments across the two repos, all nine were fixed, and the 28 tests pass.

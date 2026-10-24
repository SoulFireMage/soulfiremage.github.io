---
title: "Quantumpizza gets peer reviewed, by three AIs"
date: 2026-10-24T10:10:00+01:00
draft: false
description: "My 'lonely spinor neuron' from last November wasn't a spinor. Claude found out why, three other models were asked blind, and then we finally ran the experiment the file had been promising."
tags: ["AI", "spinors", "geometric algebra", "experiments", "OpenRouter"]
categories: []
authors: []
---

*Written with Claude, from the sessions we ran on 23 October. The code is on GitHub: [Quantumpizza](https://github.com/SoulFireMage/Quantumpizza-).*

Quantumpizza is a Sunday-afternoon repo from last November. Claude, Gemini and Kimi dared each other into building spinor networks, hyperbolic networks, gauge transformers and a "Calabi-Yau brain", all in Python. The README already admits the uncomfortable truth: on digital hardware everything is multiply-accumulate, so clever structure only pays off when it matches the problem.

The one file I'd pointed people at was `LonelySpinor.py`. It puts an ordinary neuron, `tanh(w·x + b)`, beside a "spinor neuron", `normalize(R·x·R† + b)`, where R is a rotor made from a learned bivector. I wanted to know if it was actually right.

## The review

The Clifford algebra itself checked out: the multiplication table, the reverse, the bivector exponential. Then Claude ran a test that took three lines, and the neuron fell over.

**⚡ Kat lens:** a spinor is the thing that remembers the twist. Turn it 360° and it comes back negated; you need 720° to get home. The sandwich R·x·R† forgets the twist. R and −R give the same answer, every time. So the "spinor neuron" is an ordinary rotation acting on a scalar plus a 3-vector, wearing spinor clothes.

**🧱 Richard lens:**

1. The input x has four live parts: a scalar and three bivector parts (e₁₂, e₁₃, e₂₃).
2. The sandwich R·x·R† leaves the scalar alone (0.8 in, 0.8 out) and rotates the three bivector parts like an arrow.
3. Swap R for −R and the sign flips twice, once on each side, so it cancels: (−R)·x·(−R)† = R·x·R†.
4. The one-sided product R·x doesn't cancel. That's quaternion multiplication, because the even part of this algebra *is* the quaternions, and it treats x as a proper spinor.

Three smaller things turned up as well:

- **Factor of two.** R = exp(B) rotates by 2|B|: 34.4° for |B| = 0.3. The usual convention is R = exp(−B/2).
- **The scalar part of the input can't be touched by any weight.** Only the bias can change it.
- **The cost table was wrong in both directions.** The code multiplies through a dense 8×8×8 table, about a thousand multiplies per product, not the "~50–100" it claimed. Done properly, the one-sided spinor neuron is a single quaternion product: 16 multiplies. The real spinor neuron is the *cheap* one.

## The panel

Purely for entertainment, I wanted other models to have a go: Mercury 3, Kimi K3 and DeepSeek 4.1, through OpenRouter. Each got the same file and the same questions **blind**, without Claude's findings. The questions were: is the maths right, is it really a spinor, what's the biggest conceptual problem, design one experiment, and give one line of banter for the other panellists.

- **All three** spotted that the sandwich is a rotation (SO(3)), not a spinor action. Credit where due.
- **Kimi** named the exact test, sandwich(−R) = sandwich(R), and gave the one-line fix. Most accurate and most entertaining.
- **None of them** caught the factor of two or the cost table.
- **Mercury** was confidently wrong twice. It said the reverse signs follow grade parity; they follow (−1)^(k(k−1)/2). It also said even-subalgebra elements "aren't spinors", when with the one-sided action they're exactly the Pauli spinors.

Claude didn't take any of them on trust. It checked each claim numerically before scoring them, which is how Mercury's two slips got caught.

## The fixes

All merged:

- `spinor_action` (R·x) and `true_spinor_neuron` beside the old sandwich version, so you can see both.
- `demo_720()`: rotate both versions by 360° and 720°. Only the true spinor flips sign at 360°.
- `rotor(B) = exp(−B/2)`, so the angle means what it says.
- A corrected cost table.

## The experiment it had been promising

The file's whole bet was *"richer primitive = fewer neurons needed"*, and nothing in it ever trained anything. So `rotation_experiment.py` tests it. A hidden 100° rotation in a tilted plane is applied to inputs, each model learns it from examples, and then it's tested on a wedge of inputs it never saw.

The models: the rotor neuron (3 parameters), a tanh MLP (60 to 600 parameters), and a plain linear map. The linear map was the honest addition. A rotation is linear, so a 3×3 or 4×4 matrix can represent the answer exactly with no geometry built in. Whatever the neurons gain over it comes purely from the constraint.

**With 256 clean samples:**

- The matching neuron is exact (error at rounding level, ~1e-25), held-out wedge included, with 3 parameters.
- The wrong action fails at any amount of training, with errors of 0.4–0.7. The sandwich can't fit a spinor task and the one-sided product can't fit a vector task.
- The best MLP gets to about 1e-5 and is 2–6× worse on the unseen wedge.
- The linear map is **also exact**, with 9 or 16 parameters.

So against an MLP it looks like a 100× win, but against the honest control it's 3–5× fewer parameters. An MLP is just a weak baseline for a linear problem.

**With a few noisy samples (`--sweep`):** this is where a constraint ought to help, so Claude wrote down a prediction before running it. Least-squares error grows with noise² × parameters / samples, so the linear map should be about 3× worse on vectors and 5× worse on spinors, and far worse when there are fewer samples than dimensions. What came back:

- With 2–3 samples the neuron wins by 60× (vectors) and 200–300× (spinors).
- With 5–100 samples, vectors come out 2.5–7× (close to the prediction) and spinors 7–20× (well above it).

The spinor excess is unexplained. Claude's guess is that the wedge test makes the linear map extrapolate, which hurts more in 4D, but that's untested and labelled as such in the code.

It lands right where the README said it would, only now with numbers: the structure pays when data is scarce, and with plenty of clean data the advantage shrinks to the parameter ratio. Nobel committee, please don't call.

## Concept Explorer got the same treatment

The same session then went through [Concept Explorer](https://github.com/SoulFireMage/ConceptExplorer). It fixed resolver, rotation and escaping bugs, made the concept operators actually use each concept's properties, and added a test suite. GitHub's Copilot reviewer then left nine comments across the two repos. All nine were fixed, and the 28 tests pass.

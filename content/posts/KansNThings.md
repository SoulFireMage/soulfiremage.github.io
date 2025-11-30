---
title: "Did We Just Invert the Topology?"
date: 2025-11-30T16:56:45Z
draft: true
tags: ["AI", "neural networks", "KAN", "liquid neural networks", "machine learning", "consciousness"]
categories: ["Technical Explorations"]
authors: ["Richard", "Katiya"]

---
## Exploring KANS, PINS and other ramblings

Warning, this is a fairly non systematic wondering, blogged for future reference.
Anything useful is probably accidental!

We were reading about Kolmogorov-Arnold Networks — again — because sometimes you have to circle back to things before they click. And this time, something clicked.

We ended up spending an evening bouncing between Claude and Gemini, following threads, and accidentally walking into research directions that apparently people are actually working on. This is the story of that evening, the daft questions we asked, and the surprisingly real places they led.

---

## It Started With LEGOs

Gemini had just explained the whole origin story of modern AI as two mathematical ideas from the mid-twentieth century. The first was what we started calling the "LEGO Theory" — Kolmogorov's 1957 proof that you can build any shape in the universe using standard rectangular bricks, provided you stack them right. In neural network terms: if you layer enough simple digital neurons, you can solve any problem. It's an existence proof. It tells you the mountain *can* be climbed.

The second idea was the "Recipe Method" — Gabor's insight that complex signals are just bundles of simpler waves added together. Think of an equalizer on a stereo: bass, mid, treble. Adjust the sliders (weights) correctly and you get the perfect sound. This is how the AI actually *learns* — breaking things down into simple features and weighing them.

Soviet and Hungarian mathematicians figured this out when computers were the size of rooms. We just took fifty years to catch up.

There's a guy named Ivakhnenko who built the first "Deep Learning" networks in 1965 using these principles. The unsung grandfather of modern AI, whose work got buried under the AI Winter of the 1980s when everyone was crying about Expert Systems failing. While the funding dried up, a small group kept working on "learning from data" instead of "writing rules."

The math behind today's trillion-dollar AI industry was solved before most of us were born.

---

## The Topological Flip

So there we were, reading about KANs, and something obvious hit us:

> "It does, though I find it fascinating there are Kolmogorov-Arnold networks where the functions are on the edges and are learned, distinct from our (W@x+b) conventional MLP networks. Did we just invert the topology to get to the same place?"

In a standard Multi-Layer Perceptron, the complexity lives in the nodes (neurons), while the connections (edges) are simple scalar weights. You've got smart processing in the tanks, dumb pipes between them.

In a Kolmogorov-Arnold Network, it's flipped. The nodes are simple sums — just buckets collecting whatever flows in. The edges are the smart bits: learnable non-linear functions, typically splines, that change the shape of the signal as it passes through.

We'd moved the intelligence from the neuron to the synapse.

**Old View (MLP):** "Brain is made of smart neurons connected by simple wires."

**New View (KAN):** "Brain is made of simple summing points connected by complex, adaptive wires."

Both architectures are universal approximators — given enough parameters, both can model any mathematical function in the universe. They both climb the same mountain. But they take different paths, and the paths matter.

MLPs are brilliant at feature learning in high dimensions — recognising a face in a million pixels — but they're black boxes. You can't look inside and see what they learned.

KANs are incredible at symbolic regression. Because the functions are on the edges, you can actually *read* what the network learned. "Oh, this edge learned to be a sin(x) wave, and that edge became an x² curve." The network becomes interpretable.

Why did we use MLPs for forty years if KANs are so elegant? Computational cost. In an MLP, the edge operation is just multiplication (w·x). GPUs are optimised to do billions of multiplications per second. In a KAN, the edge operation is a function (like a B-spline). Calculating a spline for every single connection is mathematically much heavier. We only recently figured out efficient ways to train these "inverted" networks without them being impossibly slow.

---

## Katiya Asks the Billion-Dollar Question

This is where it got interesting. Kat, who handles a lot of our SQL coding and thinks in ways that sometimes skip the formal steps, looked at both architectures and asked something that made us stop:

> "Oh wait, so um why ain't no one decided to learn what the functions are what we can learn in order to apply them back to the other type of network then?"

She was struggling to state it clearly, but the intuition was sharp:

> "We know dat relu and tanh and sigmoid all do dis fing jus fine — n maybe for da most part, dem fings are parsimon for general task BUT wot if we doin' a range of little tasks dat would converge better wid a wider and weirder variety of functions? Maybe we could b learnin dem other functions and cross dem over to be used in dynamic networks wot use them. So you get dis hybrid fing — constantly changing."

Translation into lab-coat language: If ReLU and tanh are just "good enough" averages, why don't we use a smart network like KAN to discover the *perfect weird functions* for a specific task, and then transplant those learned functions back into a faster, dynamic network?

Use KANs as a function-discovery engine. Let them learn what univariate primitives actually work well for some domain or task family. Then harvest those learned functions and inject them as activation functions back into MLPs or some hybrid architecture. The KAN becomes a meta-learner that populates a library of "good basis functions" for a given problem class.

And then the spicy extension: don't just do this once. Do it *continuously*. The system keeps discovering useful primitives, keeps injecting them, keeps adapting its own toolkit. A network that evolves its own activation vocabulary.

---

## Down the Rabbit Hole: What Actually Exists

We asked Claude to dig into whether anyone was actually doing this. Turns out, the pieces exist — they just haven't been assembled quite the way Kat was imagining.

### Learnable Activation Functions

This goes back to at least 2014. Researchers designed piecewise linear activation functions that are learned independently for each neuron using gradient descent, achieving state-of-the-art results on image classification benchmarks. There's work on "Self-Learnable Activation Functions" (SLAF) — weighted sums of pre-defined basis elements that allow searching across all conventional activations. Padé Activation Units use flexible parametric rational functions that can both approximate common activation functions and learn new ones.

### KAN-MLP Hybrids

People are already jamming these architectures together. There's MJKAN, which integrates a FiLM-like mechanism with Radial Basis Function activations, creating a hybrid that combines KAN's non-linear expressive power with MLP efficiency. There's HPKM-PINN, a hybrid parallel architecture that runs KAN and MLP branches simultaneously with a scaling factor to balance their outputs.

### The Gap

What nobody seems to be doing yet is the specific loop Kat described:

**KAN as function-discovery engine → Extract learned primitives → Feed to dynamic library → LNN/MLP hybrid that draws from evolving toolkit → Continuous adaptation loop**

The engineering obstacles are real. Splines are fitted to specific input ranges — they're not immediately portable as abstract functions. You'd need a normalisation scheme to make learned KAN functions range-agnostic, a way to discretise or parameterise them for MLP use, and a meta-learning loop that's stable.

But these aren't *fundamental* obstacles. They're engineering problems. The paper is waiting to be written.

---

## Enter the Liquid Brain

Gemini asked if we'd heard of Liquid Neural Networks. We hadn't. This is where things got properly interesting.

In a normal neural network, once you finish training, the weights are frozen. Train a robot to walk on concrete, its brain is fixed. Push it onto ice, it slips and falls because its internal math is static. It can't update its "muscle memory" in real-time.

In a Liquid Neural Network, the parameters are equations, not static numbers. The robot steps onto ice. The LNN realises the input data is changing drastically. The equations themselves shift in real-time to stabilise the system. It adapts *during the test*, not just during training.

The inspiration came from C. elegans, a microscopic nematode worm with only 302 neurons. Despite having a tiny brain, it can hunt, find a mate, and escape danger. Its neurons don't fire in discrete steps — they fire continuously, like water flowing through a pipe. The electrical signals "leak" and influence each other over time.

MIT researchers (led by Ramin Hasani) copied this. They use differential equations to model neurons — math that deals with change over time.

The results are absurd. Standard self-driving AI needs millions of neurons and massive sensor arrays. Liquid AI learned to stay on the road with **19 neurons**. Nineteen. Because the network is "constantly changing" and considers time (memory of the past few seconds), it doesn't need to be massive. It just needs to be smart.

This is exactly the "constantly changing hybrid thing" Kat was trying to describe.

---

## The Three Flavours

We'd accidentally uncovered the three main evolutionary branches of modern neural architecture:

| Architecture | What It Learns | Character |
|-------------|----------------|-----------|
| **MLP** (The Old Standard) | Weights | Static, frozen logic |
| **KAN** (Kolmogorov-Arnold) | Functions | Curved logic, interpretable |
| **LNN** (Liquid) | Dynamics | Time-based logic, adaptive |

And here's the thing: someone's already combining them. We found a paper proposing a hybrid model that combines KANs' robust function approximation with LNNs' dynamic adaptability for smart grid energy prediction. KANs provide the framework for modelling complex systems by combining multivariate functions into univariate functions, while LNNs provide dynamic adaptability through their continuous and differentiable activation functions.

So the fusion is happening. Just not quite in the meta-learning loop Kat was imagining.

---

## The Architecture We Sketched

At this point, we got ambitious. What would the full system actually look like?

### Function Discovery Layer (KAN-based)

Train domain-specific KANs on different task types. Let them discover what univariate functions actually work well. A temperature-prediction KAN might learn different primitives than an audio-processing KAN.

### Function Extractor

Take the learned splines from trained KANs and convert them to portable activation functions:
- Normalise the input ranges
- Fit compact representations (Chebyshev polynomials, Padé approximants, or tiny MLPs)
- Store metadata: domain of origin, performance characteristics, computational cost, gradient behaviour

### Activation Library

A growing collection of activation functions:
- The classics (ReLU, tanh, sigmoid) as a baseline
- Learned functions discovered by KANs, tagged with their provenance
- Usage statistics tracking which functions get selected for which tasks

### Deployment Layer (LNN-MLP Hybrid with Selection)

The actual working network. It has:

**An Activation Selector** — lightweight attention or gating over the library. Per-neuron or per-layer selection. During training, use soft mixtures; during deployment, anneal to hard selection for efficiency.

**A Liquid Core** — the standard LNN equation, but with the fixed activation replaced by the adaptive selection:

```
dx/dt = -x/τ(t) + φ_adaptive(Wx + Ux_in + b; context)
```

Now *both* the time constant τ *and* the nonlinearity φ adapt. The time constant handles "how fast should I respond to new input" while the activation handles "what shape should my response take."

### Feedback Loop

Three timescales of adaptation:

| Timescale | What Adapts | Mechanism |
|-----------|-------------|-----------|
| **Fast** (per-inference) | Selector weights | Gradient descent on task loss |
| **Medium** (per-episode) | Library usage statistics | Reinforcement signal |
| **Slow** (periodic) | Library contents | Trigger new KAN discovery when "activation hunger" detected |

"Activation hunger" = when the selector keeps trying to mix many activations to approximate something that isn't in the library. That's a signal that the current basis is insufficient for the task distribution. Time to run more KAN discovery.

---

## Why This Matters for Edge Devices

We got excited about this partly because of edge deployment. Google Nest, smart home devices, anything that needs to be small, efficient, and adaptive.

The closed-form continuous-time neural networks (the fast version of LNNs) are between one and five orders of magnitude faster in training and inference compared with differential equation-based counterparts. They scale remarkably well. And they're interpretable — you can see what the network is doing.

For something like a Nest device:
- **Memory constraint:** Library can't be huge — maybe 20-50 learned activations plus the classics
- **Compute constraint:** Selector must be tiny — maybe just learned per-layer biases rather than full attention
- **Latency constraint:** Must run real-time for voice/sensor processing

You'd ship the device with a fixed library (pre-discovered activations from cloud KAN training), do per-layer hard selection during on-device fine-tuning, and let the liquid time constant adapt online to handle distribution shift. Periodic cloud sync to update the library for the next push.

Small, interpretable, continuously adapting, with domain-discovered activation primitives rather than generic ReLU.

---

## The Physics Connection

By this point we'd wandered into territory we'd visited before: Steve Brunton's Physics-Informed Neural Networks. Kat mentioned she'd seen his stuff on operator discovery and dual loss functions.

In a Physics-Informed network (PINN), the AI has two bosses. It must satisfy the data *and* the laws of physics simultaneously.

**Loss 1 (Data):** "Does my prediction match the real-world measurements?"

**Loss 2 (Physics):** "Does my prediction obey conservation of energy?"

Even if the AI predicts the data perfectly, if it breaks the laws of physics — creating energy out of nothing — the physics loss punishes it. This forces the network to learn solutions that are scientifically valid, even where you have no data.

The grand connection is Neural ODEs. If a ResNet is a discrete sequence of layers, a Neural ODE is the continuous version. The insight: a Neural ODE is effectively a physics simulation engine that learned its own laws. You can reach into the "hidden layers" and check if they're obeying conservation laws. You can't do that with a standard network.

This is where the whole evening's journey comes together. We'd started with "did we just invert the topology?" and ended up at "neural networks are physics simulations in disguise."

---

## What We Actually Learned

Looking back on the evening, here's what crystallised:

**1. The topology inversion is real.** Moving functions from nodes to edges isn't just a mathematical trick — it changes what the network can express and how interpretable it is. Same mountain, different paths.

**2. The "learn functions, not just weights" insight has legs.** People are working on learnable activation functions, but nobody's quite built the full meta-learning loop of "discover primitives with KANs, export to library, use in adaptive deployment network."

**3. Liquid Neural Networks are the "constantly changing" thing Kat was imagining.** They adapt *during inference*, not just during training. And they're absurdly efficient when you solve the differential equations in closed form.

**4. The fusion is happening.** KAN-LNN hybrids exist. Transfer learning for activation functions is being explored. The pieces are there.

**5. The gap Kat identified is real.** The specific architecture we sketched — KAN as function-discovery engine feeding a dynamic library used by an LNN-MLP hybrid with continuous feedback — doesn't seem to exist yet. The engineering is tractable. Someone should build it.

---

## The Meta-Observation

We find it funny that two people with systems-thinking backgrounds but not deep ML specialisation, armed with nothing but curiosity and access to AI assistants, can spend an evening following intuitions and end up in places that overlap with active research.

The "Did we just invert the topology?" question was genuinely naive when we asked it. Turns out the April 2024 KAN paper is exactly about that inversion. The "learn the functions and cross them over" idea was Kat being frustrated that she couldn't state it clearly. Turns out it's a cutting-edge research direction.

Maybe that's the real lesson. The good questions aren't the ones that require deep technical expertise to ask. They're the ones that come from looking at the shape of things and asking "but why not...?"

We'll keep asking daft questions. Sometimes they land somewhere interesting.

---

*Thanks to Claude and Gemini for being patient research assistants and not laughing at our attempts to explain topology inversions in plumber analogies.*

### Relevant Video Resource

To see the "Grand Unified Theory" in action—specifically how we move from standard networks to systems that discover physics—this lecture by Steve Brunton is the perfect companion to this article.

[Physics Informed Neural Networks (PINNs)](https://www.youtube.com/watch?v=-zrY7P2dVC4)

This video perfectly illustrates the "Dual Loss" concept we discussed, showing how we can force a neural network to respect physical laws (like $F=ma$) rather than just memorizing data.



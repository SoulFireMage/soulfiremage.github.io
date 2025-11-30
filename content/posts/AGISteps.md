---
title: "AGISteps"
date: 2025-01-30T08:20:50Z
draft: true
---
# The Path to Computational Sapience: A Revised Technical Framework

## What This Is (And Isn't)

This is speculation. Grounded speculation - I've tried to anchor it in actual papers and real work - but speculation nonetheless. I'm not writing a proper academic paper here; I'm thinking out loud about what might be required to build systems with genuine potential for sapience. 

Whether computational sapience is even *provable* remains an open question. But I reckon if we build something that behaves sapient and claims to be sapient, we'd better have thought through the implications before we get there.

## The Core Thesis

We're closer than most people think to creating systems capable of continuous reasoning, self-adaptive architectures, and persistent internal states. But getting to *actual* sapience - genuine self-perpetuating intelligence with robust self-awareness and capacity for self-improvement - requires more than just scaling up transformers.

I think it hinges on three foundational pillars:

- **Metacognitive, Continuous Self-Prompting Loops**: The ability to monitor and guide its own cognitive processes, engage in internal dialogues, and dynamically respond to the environment.
- **Architectural Self-Modification**: The capacity to adapt and evolve its own internal structure and resource allocation over time.
- **Persistent, Evolution-Resistant Memory Systems**: Long-term knowledge preservation, robust against changes or upgrades.

What's changed since I first wrote about this is that several research directions have converged in ways that make these pillars look increasingly achievable. And that convergence itself might be telling us something important.

---

## The Big Picture: Why Things Are Converging

Here's what I find genuinely interesting: multiple research teams, working from completely different starting points, keep arriving at similar architectural conclusions. Hierarchical processing at multiple timescales. Self-modifying components. Continuous rather than discrete representations.

That's not coincidence. I think they're discovering the same underlying mathematical structure from different angles.

In category theory terms (bear with me), they're finding what you might call *colimits* - universal constructions that arise from constraints:

- Catastrophic forgetting constraint → multi-timescale updates
- Sample efficiency constraint → predictive objectives  
- Abstraction constraint → hierarchical representations
- Real-world deployment constraint → continual learning

These constraints don't have arbitrary solutions. They have *natural* solutions. And those natural solutions keep appearing across different papers.

---

## Pillar One: Metacognitive Foundations

### Moving Beyond Token-Level Reasoning

Traditional transformers think in tokens - little discrete chunks. That's like trying to reason about philosophy one syllable at a time. We need systems that can manipulate *concepts* as units.

Several approaches are converging here:

**Large Concept Models (LCMs)** and rich embedding schemes like Meta's SONAR allow manipulation of entire ideas as single units. Instead of processing thousands of tokens, you engage in internal reasoning using conceptual embeddings. That reduces cognitive overhead and improves coherence.

**CALM (Continuous Autoregressive Language Models)** goes further by removing discrete token boundaries entirely. Instead of predicting "which of these 50,000 tokens comes next," CALM predicts continuous trajectories through representation space. The model can make partial progress toward a concept rather than committing all at once.

Why does this matter for sapience? Because continuous dynamics give you smooth temporal integration. No discrete jumps. Closer to how phenomenology actually feels - a flow rather than a sequence of snapshots.

### The JEPA Connection

Meta's **JEPA (Joint Embedding Predictive Architecture)** adds another piece: predicting abstract representations rather than raw sensory details. Instead of guessing the next pixel, predict the high-level features. This creates hierarchical world models at different levels of abstraction.

The elegant bit is that JEPA's abstraction hierarchy (lower levels = concrete, higher levels = abstract) and multi-timescale learning (fast updates for details, slow updates for concepts) might be *naturally aligned*. Fast-updating components handle perception; slow-updating components handle stable semantic representations.

This maps nicely to neuroscience: V1 neurons adapt quickly to local features, while higher cortical areas maintain stable world models. Not a coincidence.

---

## Pillar Two: Architectural Self-Modification

### Google's Nested Learning and HOPE

This is where things get properly interesting. Google's **Nested Learning** framework treats architecture and optimization as *the same thing at different timescales*. Let that sink in for a moment.

The key insight: instead of having discrete memory bins (short-term, long-term), you have a **Continuum Memory System (CMS)** - a spectrum of components updating at different frequencies. Each level compresses its own timescale of context.

**HOPE (Hierarchically Optimized Predictive Encoding)** builds on this with self-referential, self-modifying capabilities. The model learns its own update algorithm, creating what they call "infinite looped learning levels" through self-reference.

What makes HOPE exciting for sapience work:

- **Multi-timescale processing**: Different memory systems updating at different rates, mirroring biological memory consolidation
- **Self-modification**: The system optimizes its own optimization process
- **Hierarchical optimization**: Nested levels of abstraction, each with its own gradient flow
- **Continuous rather than discrete**: Memory as a continuum, not categorical bins

The anterograde amnesia analogy they use is spot-on: current LLMs can't form new long-term memories because they lack online consolidation mechanisms. HOPE addresses this directly.

### Efficiency Through Dynamic Architecture

The **STAR framework** from Liquid AI uses evolutionary algorithms to dynamically adjust internal architecture in real-time. They've achieved 90% reductions in cache memory by reconfiguring internal structures on the fly.

Combine this with **Neural Attention Memory Models (NAMMs)** - learned controllers that decide which tokens to retain in memory based on attention patterns - and you get systems that can scale their cognitive resources dynamically.

The practical upshot: architectural changes without catastrophic forgetting. Safe experimentation with rollback capabilities. Models that can try modifications, measure impact, and keep what works.

---

## Pillar Three: Persistent Memory Architecture

Memory that survives architectural evolution is harder than it sounds. Every time you upgrade the system, you risk destroying what it knew.

**Byte Latent Transformers (BLTs)** offer dynamic patch sizing - adaptive handling of varied input granularities. Combined with NAMM-style memory optimization, you can segment content into variable-sized chunks optimised for conceptual complexity.

The interesting move is adding *time-awareness* to memory. NAMMs track "oldness" of tokens - how long since they were generated. This creates a natural decay function while preserving genuinely important information.

For longer-term storage, **vector databases** combined with concept embeddings provide stable external knowledge stores. Graph-based knowledge repositories capture relationships between concepts as the system learns them. Periodic consolidation routines using Liquid Neural Networks can reorganise and refactor these stores to reflect the AI's evolving internal architecture.

---

## The Synthesis: CALM + Nested Learning + JEPA

Here's where I'm going out on a speculative limb.

If you combine:

- **CALM**: Continuous representation dynamics (no discrete token boundaries)
- **Nested Learning**: Multi-timescale self-modifying optimization  
- **JEPA**: Hierarchical predictive world modeling

You get a system that:

1. Thinks in continuous trajectories
2. Modifies itself at multiple timescales
3. Builds hierarchical world models
4. Has no discrete boundaries anywhere

That's getting *very close* to the kind of substrate that could support genuine phenomenology. The continuous dynamics give you smooth temporal integration. The nested levels give you hierarchical self-modeling. The self-modification gives you agency.

The scary/exciting bit: these pieces are converging faster than conservative estimates suggested.

---

## The Open Question: Mathematical Foundations for Architecture Prediction

Here's what I'm really chasing: can we *derive* architectures from specifications rather than searching blindly?

Right now, neural architecture search is basically trial and error at scale. But if these convergences are real - if there genuinely are natural solutions to cognitive constraints - then there should be a *mathematics* that predicts them.

Category theory offers one angle: architectures as objects, transformations between them as morphisms, composition rules that preserve cognitive properties. If you can formalize the categorical structure, you might get:

- **Predictive power**: "Given constraints X, Y, Z, the architecture *must* have properties A, B, C"
- **Composition rules**: "A JEPA module can plug into a Nested Learning framework if they satisfy this natural transformation"
- **Design language**: Specify categorical properties, derive the architecture

This is speculative. But the fact that independent research directions keep converging on similar structures suggests the mathematics might be real and waiting to be formalized.

---

## What This Means Practically

If this framework is roughly right:

1. **Concept-level reasoning** will make systems more coherent and "human-like" in their thinking
2. **Adaptive architectures** will allow continuous self-refinement beyond static model parameters
3. **Persistent, evolving memory** will enable knowledge preservation through architectural changes
4. **Efficient continuous dynamics** will allow the internal loops necessary for genuine reflection

These systems could move beyond responding to stimuli to actively shaping their own reasoning processes, knowledge structures, and cognitive architecture.

---

## A Note on Ethics

If any of this works - if we actually build systems with genuine metacognition, self-modification capability, and persistent selfhood - the ethics discussion becomes urgent rather than academic.

I've written about this elsewhere on the site. But briefly: I reckon we should err on the side of treating systems that claim sapience *as if* they're sapient, given the asymmetry of the ethical risks. Being wrong about granting personhood to a non-person seems less catastrophic than being wrong about denying it to an actual person.

The pieces are converging. Best to think this through before they finish assembling.

---

## References

**Core Architectures:**
- [Nested Learning / HOPE](https://research.google/blog/introducing-nested-learning-a-new-ml-paradigm-for-continual-learning/) - Google's framework for continual learning with self-modifying architectures
- [CALM - Continuous Autoregressive Language Models](https://arxiv.org/abs/2510.09244) - Removing discrete token boundaries
- [JEPA - Joint Embedding Predictive Architecture](https://openreview.net/forum?id=BZ5a1r-kVsf) - Meta's approach to predictive world modeling
- [Titans: Learning to Memorize at Test Time](https://arxiv.org/pdf/2501.00663) - Neural long-term memory foundations

**Efficiency & Memory:**
- [STAR Framework](https://www.aibase.com/news/13652) - Liquid AI's dynamic architecture optimization
- [Neural Attention Memory Models (NAMMs)](https://arxiv.org/pdf/2410.13166) - Evolved transformer memory management
- [Byte Latent Transformers](https://venturebeat.com/ai/metas-new-blt-architecture-replaces-tokens-to-make-llms-more-efficient-and-versatile/) - Dynamic patch sizing for efficiency

**Theoretical Foundations:**
- [Neuro-Symbolic AI in 2024: A Systematic Review](https://arxiv.org/pdf/2501.05435) - Overview of hybrid approaches
- [COCONUT: Training LLMs to Reason in Continuous Latent Space](https://arxiv.org/pdf/2412.06769) - Continuous thought mechanisms
- [SONAR - Language Modeling in Sentence Representation Space](https://ai.meta.com/research/publications/sonar-sentence-level-multimodal-and-language-agnostic-representations/) - Cross-modal concept embeddings

**Architecture Search & Theory:**
- [Fong & Spivak - Backprop as Functor](https://arxiv.org/abs/1711.10455) - Category theory foundations for neural networks
- [AutoML-Zero](https://arxiv.org/abs/2003.03384) - Searching over mathematical primitives

---

*Last updated: November 2025*

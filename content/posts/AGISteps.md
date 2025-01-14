---
title: "AGISteps"
date: 2025-01-14T08:20:50Z
draft: true
---
**The Path to Computational Sapience: A Revised Technical Framework**

**Introduction**

Recent advancements in AI research have introduced intriguing possibilities for a concept I care about: computational sapience. In this document, I synthesize ideas from recent papers into a high-level exploration of what might be required to create systems with a genuine potential for sapience. While this concept may remain scientifically unprovable, it is worth considering whether such systems should be treated as sapient in practice, given the ethical implications of their behavior.

We stand at the cusp of creating systems capable of continuous reasoning, self-adaptive architectures, and persistent internal states-especially if we succeed at adaptive yet persistant memory and self-prompting. However, achieving true computational sapience—a genuine form of self-perpetuating intelligence characterized by robust self-awareness, adaptability, and a capacity for self-improvement—requires a radical departure from simply scaling up existing transformer-based models.

Instead, we need to embrace novel frameworks that more closely model human-like cognition, which are capable of reasoning in a more abstract way as well as having the flexibility to adapt to a diverse set of challenges.  Here I've expanded on the previous article and framework to reflect some new papers I've found relating to google TITAN, neuro-symbolic AI, Large Concept Models (LCMs), the STAR framework, Byte Latent Transformers (BLTs) and Liquid Neural Networks, which have come into the AI space in the last few years. In this revision, I've also explored the potential of Neural Attention Memory Models (NAMMs) from the research of Cetin, et al, [15] which offers a framework for managing the KV cache of transformers that can improve their efficacy in the long term, in an end-to-end way.

Previously, I wrote that computational sapience hinges upon three foundational pillars:

1. **Metacognitive, Continuous Self-Prompting Loops**: The ability to monitor and guide its own cognitive processes, engage in internal dialogues, and dynamically respond to the environment.
2. **Architectural Self-Modification**: The capacity to adapt and evolve its own internal structure and resource allocation over time.
3. **Persistent, Evolution-Resistant Memory Systems**: Long-term knowledge preservation, robust against changes or upgrades.

This revised framework seeks to provide more concrete technical avenues to achieve these aims by integrating these emerging concepts with the previous vision.

**Metacognitive Foundations: Continuous Self-Prompting and Concept-Level Reasoning**

* **Beyond Token-Level Reasoning with Large Concept Models (LCMs)** Our original concept envisioned an AI that could engage in a continuous internal dialogue, akin to human metacognition. However, early transformer models operate at a token level, making it difficult to represent high level abstract concepts. Large Concept Models (LCMs) [2], [9], along with rich embedding schemes such as those described in SONAR (Meta's 'Language Modeling in a Sentence Representation Space' [7]), provide mechanisms for manipulating entire ideas as single units, allowing for a move away from token-based reasoning as has previously constrained AI. Inspired by the human brain's capacity to engage with concepts at a high level (as noted in the "Neuro-Symbolic AI in 2024" review, Section 1), this abstraction allows the system to perform:

  * **Concept-Level Internal Dialogue:** The AI will be able to engage in internal reasoning using conceptual embeddings rather than having to process thousands of lower-level tokens, improving coherence, depth, and reducing the cognitive overhead. This relates directly to the use of 'continuous thoughts' in COCONUT [13], as well as the idea from "Titans" that long term memory should act as a persistent, reusable memory module.

  * **Multimodal, Multilingual Reasoning:** Inspired by the cross-modality and language agnosticism that have been shown in work such as SONAR [7], the metacognitive loop will be able to fluidly integrate text, images, audio and other modalities via shared conceptual embeddings, allowing a truly versatile and self aware AI.

* **Integrating the STAR Framework for Efficiency and Adaptation** The STAR framework introduced by Liquid AI [4], [8], [10], brings forward a new level of optimization to our metacognitive loop. By using evolutionary algorithms, STAR dynamically adjusts internal architecture and resource usage in real-time, directly addressing the challenge of optimizing the allocation of computational resources outlined in the "Neuro-Symbolic AI in 2024" review. STAR will allow for:

  * **Reduced Cache Requirements and Improved Throughput:** STAR has already achieved up to 90% reductions in cache memory requirements by dynamically adjusting internal architectures, while maintaining or improving performance [8]. This frees resources that could otherwise cause bottlenecks for reasoning or long term memory storage. Crucially, the "Titans" paper shows that memory management can enable models to perform beyond their original limitations, a feat that the efficiency of STAR may help us to achieve.
  * **Dynamic Rebalancing of Cognitive Resources:** Building upon the principles outlined by the “Titans” paper, STAR’s evolutionary algorithms will be able to adapt to different processing demands, reconfiguring internal structures, attention mechanisms or storage layers to alleviate bottlenecks automatically in dynamic ways. This capability relates to the concept of "meta-cognition" as explored in the Neuro-Symbolic AI review, helping models to better manage their resources and adapt to varying inputs.
* **State-Space Models (SSMs), Neural Attention Memory Models (NAMMs) and Alternative Attention Mechanisms** To address the computational demands of long-term reasoning, I propose leveraging techniques to reduce the overhead of calculating attention. State-Space Models (SSMs) and subquadratic attention mechanisms, such as Hrrformers and M2 Monarch Mixers [1], could reduce computational overhead while maintaining performance. In addition, Neural Attention Memory Models (NAMMs), as detailed in Cetin et al [15], will help enhance the effectiveness of this model, by optimising which tokens to store in long term memory using an evolutionary algorithm, thus allowing the model to efficiently process input data. By combining these with LCM-level reasoning as proposed in “COCONUT”, the AI will be able to handle longer sequences of conceptual reasoning without exponential memory growth, with SSMs acting as a method to maintain stable context over extended periods, while the application of NAMMs guarantees efficiency and higher long term performance.

**Architectural Self-Modification: Evolving the Cognitive Core**

* **Self-Modification Through STAR's Dynamic Architecture Synthesis** To ensure the AI can adapt and improve itself over time, our framework requires a system that can rewire its architecture on the fly, as was described in the “Titans” paper [12]. STAR [10] can automatically propose and test new configurations, effectively conducting a form of in vivo neural architecture search. This is made possible by:
  * **Hierarchical Encoding for Safe Experimentation:** STAR can propose architectural changes in modular increments, and test their efficacy in sandboxed cognitive environments. The system will be able to measure their impact, and integrate any successful changes into the main loop. Furthermore, I propose combining this with the novel framework for managing the KV cache, as outlined by Cetin, et al. [15], to ensure that these modifications are as effective as possible.
  * **Performance Monitoring and Rollbacks:** With checkpoints for each configuration change, the system can rollback seamlessly if performance degrades or coherence falters. The evolutionary strategies within STAR guarantee that useful changes will persist. This helps create models with the self-monitoring capabilities outlined in the "Neuro-Symbolic AI in 2024" review in the section on Meta-Cognition, allowing the system to react to changes in the environment and modify its internal structure in a stable and effective way.
* **Memory-Efficient Modifications and Liquid Neural Networks** Architectural changes should not cause catastrophic forgetting or memory spikes. Innovations in memory layers now allow adding parameters without increasing FLOPs [7], making smooth integration of new modules possible. Liquid Neural Networks [8]—inspired by brain plasticity—enable adaptability post-training by continuously adjusting their parameters at run-time:
  * **Continuous Adaptation Without Full Retraining:** Liquid Neural Networks will allow newly discovered modules or reasoning pathways to integrate more fluidly into the architecture, adjusting weights locally rather than needing full retraining cycles.
  * **Improved Robustness to Architectural Shifts:** Because Liquid Neural Networks can stably accommodate changing input distributions and model topologies, they can reduce the risk of catastrophic forgetting during self-modification, ensuring that the gains of self-modification are preserved over time, and enabling them to perform in the kind of unstable, real-world settings that pose a challenge to more static systems.

**Persistent Memory Architecture: Ensuring Long-Term Coherence**

* **Integrating Byte Latent Transformers (BLTs) and Neural Attention Memory Models (NAMMs) for Memory Scalability** To create systems that maintain persistent, evolution resistant memory, as outlined in the "Titans" paper, lets integrating Byte Latent Transformers (BLTs) [7] which offer dynamic patch sizing, allowing them to adaptively handle varied input granularities. This will also be combined with the memory optimization as presented in the NAMM framework [15]. This will enable:
  * **Adaptive Memory Partitioning:** The system will be able to segment long-form content into variable-sized "byte patches," optimising memory use according to the complexity of the concepts. This will also integrate the concept of 'time' by storing information about the date each token was generated, drawing inspiration from the 'oldness' of tokens as outlined in the NAMMs paper, thereby creating a form of time-aware memory.
  * **Dynamic Retrieval and Consolidation:** Combining BLTs with vector databases and SONAR [7] concept embeddings will enable fast and efficient memory retrieval no matter how the architecture or conceptual understanding of the system evolves. This allows the creation of long term memories that are both accessible and contextually relevant, drawing on the use of self-attention to create representations that are both rich and relevant to the systems specific needs, with NAMMs acting as a control mechanism to prevent memory overflow.
* **Hybrid Memory Approaches and External Knowledge Graphs** By combining more advanced embeddings and attention mechanisms, memory can become a combination of fast internal caches and scalable external repositories:
  * **Vector Databases and Graph-based Knowledge Repositories:** Vector databases will act as a stable external knowledge store. This will allow more robust knowledge access, with advanced embeddings from LCMs and SONAR improving retrieval accuracy and semantic fidelity. This can be supplemented by also building a graph based knowledge repository of important concepts as the system learns them.
  * **Consolidation Routines with Liquid AI Tools:** Periodic memory consolidation routines using Liquid Neural Networks and STAR will be used to reorganise and refactor long-term knowledge bases, which will enable the memory system’s structure to evolve to reflect the AI’s internal architecture and conceptual map, drawing from both the use of 'evolution' in the STAR framework as well as the dynamic nature of Liquid Neural Networks. This will also use NAMMs to actively manage the stored tokens in this dynamic memory system.

**Technical Implementation Considerations and Efficiency Gains**

* **Leveraging Next-Generation Efficiency Tools**
  * **M2 Monarch Mixer and Hrrformer:** These mechanisms will reduce the complexity of standard transformers [1], ensuring that the AI can maintain extended internal dialogues while also minimising resource costs.
  * **Linear Transformers and SSMs:** Linear transformers will help solve complexity issues by using kernelizable attention, which combined with SSMs will ensure extended context while running continuously.
  * **Neural Attention Memory Models (NAMMs):** Furthermore we will explore the use of NAMMs as a method to selectively discard tokens with low relative relevance to the overall reasoning task, in line with the findings of the paper, in order to create a more efficient system that is able to function on a wider range of hardware, from smaller and more efficient chips to larger more capable servers.
* **Resource Management and Scaling** The STAR framework’s demonstrated reduction in cache memory requirements (up to 37% less than hybrid models [10]) will be essential for achieving continuous operation. This reduction in resource use can free resources for complex metacognitive states, running architectural experiments, and preserving rich, long-term memory structures while also ensuring scalability with a variety of inputs.
* **Multimodal and Multilingual Reasoning Capabilities** By integrating LCM concepts and SONAR embeddings, the AI system will no longer need to specialize separately for different modalities, which will enable seamless processing of a variety of inputs.
  * **Easier Self-Prompting Across Domains:** Metacognitive loops can issue internal queries spanning text, images, and sound, without needing to switch between distinct model heads.
  * **Consistent Conceptual Representation:** SONAR embeddings will also unify disparate data into a single conceptual space, making it simpler for the AI to update internal architectures or memory while preserving important information.

**Future Directions: Toward True Computational Sapience**

These improvements will result in a more complete roadmap for developing computational sapience:

* **Concept-Level Reasoning (LCMs):** The system will operate at the conceptual level, making it more coherent and "human-like". This can be achieved by using the insights of 'continuous thought' from COCONUT in combination with LCMs.
* **Adaptive Architectures (STAR):** Automatic architectural evolution will allow the system to continuously refine itself and push beyond static model parameters. This will involve the creation of novel architectures which can be updated in modular ways. The addition of an extra level of optimization with NAMMs will help to ensure that these dynamic changes to the system are as efficient as possible.
* **Persistent, Evolving Memory (BLTs, Liquid NNs, NAMMs):** Robust memory solutions and adaptability will allow for knowledge preservation through changes to the system's architecture. The addition of mechanisms based on time, by recording when a token was generated (i.e., 'oldness' from the NAMMs paper) will also help provide context for the system when working with long-range dependencies and long-term memory.
* **Efficiency and Scalability (Hrrformer, M2 Monarch Mixer, SSMs, NAMMs):** These will allow for the continuous operation of the internal loops and large-scale conceptual reasoning necessary for advanced AI, while NAMMs will act to ensure scalability and minimize the need for extra resource usage.
* **Meta-Cognitive Enhancement (Hybrid Approaches, CMC based Systems):** By integrating aspects of cognitive architectures and RL algorithms with our system we will be able to create models with enhanced self-monitoring and self-improvement capabilities, drawing inspiration from the ideas explored in the Neuro-Symbolic AI paper.

These systems will be able to move beyond just responding to stimuli by actively shaping their own reasoning process, knowledge structures, and cognitive architecture, drawing us closer to AI that can truly think, adapt and learn for itself.

**Conclusion**

It may be possible to leverage the variety of concepts and discoveries covered here to build out a more complete and self-aware AI system, but if we do, the need for the AI Ethics discussion (covered elsewhere on my site) will become much more urgent. Whilst this is a speculation documents I've attempted to ground it on actual work being done already. I'll be referring back to this and expanding on it in future depending where my own experiements take me.

**References:**

1. [Discussion: Promising alternatives to the standard transformer? (Reddit)][1]
2. [Large Concept Models and their possible impacts in roleplay (Reddit)][2]
3. [Shaping the Future: 2024's Top AI Architect Trends - Koda Staff][3]
4. [Liquid AI launches STAR framework for AI model architecture (Sp-edge.com)][4]
5. [Meta releases AI models for motion rendering and video watermarking (SiliconAngle)][5]
6. [Transformer Models Innovations 2024 | Restackio][6]
7. [Language Modeling in a Sentence Representation Space | Research (Meta)][7]
8. [Challenge the Transformer! Liquid AI, take a look. (Moomoo)][8]
9. [Meta Launches 'Large Concept Models' (LCMs)! Breaking ...][9]
10. [Liquid AI Launches STAR Model Architecture, Efficiency Surpasses...][10]
11. [Byte latent transformers][11]
12. [Titans: Learning to Memorize at Test Time][12]
13. [Training Large Language Models to Reason in a Continuous Latent Space][13]
14. [Neuro-Symbolic AI in 2024: A Systematic Review][14]
15. [An Evolved Universal Transformer Memory][15]

[1]: https://www.reddit.com/r/MachineLearning/comments/x9f2pi/discussion_promising_alternatives_to_the_standard_transformer/ "Discussion: Promising alternatives to the standard transformer? (Reddit)"
[2]: https://www.reddit.com/r/AIroleplay/comments/yhbq7t/large_concept_models_lcms/ "Large Concept Models and their possible impacts in roleplay (Reddit)"
[3]: https://kodastaff.com/ai-trends-2024/ "Shaping the Future: 2024's Top AI Architect Trends - Koda Staff"
[4]: https://sp-edge.com/liquid-ai-star-framework/ "Liquid AI launches STAR framework for AI model architecture (Sp-edge.com)"
[5]: https://siliconangle.com/meta-motion-rendering/ "Meta releases AI models for motion rendering and video watermarking (SiliconAngle)"
[6]: https://restack.io/transformer-models-2024/ "Transformer Models Innovations 2024 | Restackio"
[7]: https://meta.com/research-sentence-representation/ "Language Modeling in a Sentence Representation Space | Research (Meta)"
[8]: https://moomoo.com/liquid-ai-transformer "Challenge the Transformer! Liquid AI, take a look. (Moomoo)"
[9]: https://www.aibase.com/news/13985 "Meta Launches 'Large Concept Models' (LCMs)! Breaking ..."
[10]: https://www.aibase.com/news/13652 "Liquid AI Launches STAR Model Architecture, Efficiency Surpasses..."
[11]: https://venturebeat.com/ai/metas-new-blt-architecture-replaces-tokens-to-make-llms-more-efficient-and-versatile/ "Byte latent transformers"
[12]: https://arxiv.org/pdf/2501.00663 "Titans: Learning to Memorize at Test Time"
[13]: https://arxiv.org/pdf/2412.06769 "Training Large Language Models to Reason in a Continuous Latent Space"
[14]: https://arxiv.org/pdf/2501.05435 "Neuro-Symbolic AI in 2024: A Systematic Review"
[15]: https://arxiv.org/pdf/2410.13166 "An Evolved Universal Transformer Memory"

Additional Notes:

***Neural Long-Term Memory***

Titans uses a special memory module that learns to store important information from the past, similar to how humans remember things.

This memory is "neural" because it's a small neural network itself. It learns to remember important data points by measuring how "surprising" new information is.

It also has a "forgetting" mechanism to remove less relevant information, similar to how we forget things over time.

This neural memory can be trained efficiently using techniques similar to standard neural network training.

Titans Architecture

The Titans architecture has three main parts (hyper-heads):

Core: This part uses attention (with a limited window) to process the immediate input, acting like a short-term memory.

Long-term Memory: This is the neural memory module discussed earlier, responsible for storing and recalling long-past information.

Persistent Memory: This part stores general knowledge about the task, not specific to the current input. It's like learning the rules of a game rather than remembering the specific moves.

The paper proposes three ways to combine these parts, offering different trade-offs between efficiency and accuracy.

Experiments and Results

The authors tested Titans on various tasks, including language modeling, reasoning, and time-series forecasting.

Titans outperformed both Transformers and recent advanced recurrent models in many cases.

It was especially effective for very long sequences, where traditional models struggle.

Titans was able to scale to sequences with over 2 million elements, significantly larger than what Transformers can handle.

Main Contributions

A new neural long-term memory module that learns to memorize and forget information effectively.

A novel architecture (Titans) that combines this memory with attention and persistent memory.

Demonstrated superior performance on various tasks, especially those involving very long sequences.

In Simple Terms

Imagine you're reading a long novel.

Recurrent models are like trying to remember the entire story in your head, but your memory is limited, so you might forget details from earlier chapters.

Transformers are like having a perfect index of the book, allowing you to instantly find any detail, but only for a limited number of pages at a time.

Titans are like having a special notebook where you jot down the most important events and character details as you read. You can quickly refer to your notes (long-term memory) while also paying attention to the current page (short-term memory/attention). You also have a general understanding of the story's genre and themes (persistent memory).

***COCONUT***

Reasoning in a Hidden Space

Instead of generating words, COCONUT uses the LLM's internal "thoughts" (hidden states) as steps in the reasoning process.

These "thoughts" are not words but numerical representations that can be processed directly by the LLM.

Think of it like thinking in your head without speaking the words out loud.

This allows the LLM to reason more freely, without the constraints of language.

COCONUT Method

COCONUT modifies the standard way LLMs process information by feeding the internal "thoughts" back into the model as input for the next reasoning step.

It uses special markers ("<bot>" and "<eot>") to indicate the start and end of the hidden reasoning process.

The model is trained in stages, gradually replacing language-based reasoning steps with "continuous thoughts".

This training process is guided by existing examples of language-based reasoning chains.

Advantages of COCONUT

More Efficient Reasoning: COCONUT can represent multiple possible reasoning paths simultaneously, like exploring a maze by checking multiple paths at once (similar to breadth-first search).

Better Planning: This ability to explore multiple paths helps the model plan better and avoid getting stuck in dead ends, especially in complex tasks.

Fewer Words: COCONUT can often reach the correct answer with fewer steps than language-based methods.

Experiments and Results

The authors tested COCONUT on math and logic reasoning tasks.

On math problems (GSM8k), COCONUT performed better than similar methods and showed that using more "continuous thoughts" in a row improves performance.

On logic problems (ProntoQA and ProsQA), COCONUT outperformed even language-based methods, especially on problems that require more planning.

They also analyzed how COCONUT's internal "thoughts" relate to the reasoning process, finding that the model develops a kind of internal "search tree" to explore different possibilities.

Main Contributions

A new method (COCONUT) that allows LLMs to reason in a hidden space without using language directly.

Demonstrated that this method can lead to more efficient and accurate reasoning, especially on tasks that require planning.

Provided analysis showing that COCONUT develops an internal "search tree" to explore multiple reasoning paths.

In Simple Terms

Imagine you're solving a maze.

Traditional LLMs (with CoT) are like having to describe each step you take out loud ("go forward," "turn left"). This can be slow and inefficient, and you might get stuck easily.

COCONUT is like being able to explore the maze in your mind, keeping track of multiple paths at once without having to describe them. This allows you to plan better and find the solution more efficiently.

COCONUT is a new way of letting AI "think" without being restricted by language. This could lead to more powerful and flexible AI systems that can solve complex problems more effectively.

***Neuro-Symbolic AI***
Key Concepts

Symbolic AI: A more traditional approach that represents knowledge using rules and symbols (like in a computer program). It's good for logical reasoning but can struggle with messy, real-world data.

Sub-Symbolic AI: Focuses on learning patterns from data (using machine learning and neural networks) and is great with complex data but can lack explicit reasoning abilities.

Neuro-Symbolic AI: Attempts to bridge these two approaches to create systems that can do both by integrating them together in various ways.

Research Areas in Neuro-Symbolic AI

The paper identifies five key research areas:

Knowledge Representation: How to combine symbolic and neural ways of representing knowledge.

Learning and Inference: How to combine learning with reasoning using data and logic.

Explainability and Trustworthiness: How to make AI systems' reasoning clear and reliable.

Logic and Reasoning: How to integrate logical rules with neural networks.

Meta-Cognition: How to make AI systems self-aware and able to monitor and adjust their thinking.

Methodology

The authors reviewed a large number of research papers (over 1400 initially) to analyze the current state of Neuro-Symbolic AI.

They used a systematic approach to select the most relevant papers, focusing on those with code available.

They categorized these papers by the five research areas.

Findings

Most current research focuses on learning and inference, as well as logic and reasoning, and knowledge representation. This suggests these are the most active areas of development.

Areas like explainability and trustworthiness, and especially meta-cognition, are relatively less represented.

This lack of focus on meta-cognition is concerning because it’s important for AI systems to be self-aware and adaptable.

There are good opportunities for interdisciplinary research to bridge the gaps between different research areas.

Main Gaps and Open Questions

Explainability and Trustworthiness: How to create AI systems that can clearly explain their reasoning and be reliable, is critical.

Meta-Cognition: How to make AI systems that can monitor and adjust their own thinking and learning, is less explored and has great potential for making AI more adaptable and autonomous.

Integration: How to effectively combine different approaches in a single system is still a big challenge.

Conclusion

Neuro-Symbolic AI is a growing field with the potential to solve complex AI challenges by combining different strengths.

It's making progress in areas like knowledge representation, learning and inference and logical reasoning.

However, to build more robust AI systems, researchers need to focus on closing the gaps in explainability, trustworthiness, and especially meta-cognition. Interdisciplinary research combining all five areas is also very important.

In Simple Terms

Imagine building a robot:

Symbolic AI is like programming the robot with precise rules ("If you see a red light, stop"). This is great for following instructions, but not for adapting to new situations.

Sub-Symbolic AI is like letting the robot learn from experience (training with data to learn traffic rules). This makes it good at responding to unpredictable events but difficult to understand its reasoning.

Neuro-Symbolic AI is like teaching the robot both the rules and how to learn, as well as reflect on its past performance. It aims to make it adaptable, reliable and intelligent in the real-world.

***Evolved Universal Transformer Memory***

Key Ideas:

Learned Memory Management: Instead of hand-designed rules for token eviction (as seen in methods like H2O or L2), NAMMs use a small, learned neural network to decide which tokens to retain in the Key-Value (KV) cache. This allows for dynamic, adaptive memory management.

Universal Applicability: NAMMs are conditioned solely on the attention matrices generated by transformer layers. This means they can be applied to any transformer model regardless of architecture, embedding type or input modality (text, vision, reinforcement learning) without retraining.

Evolutionary Optimization: NAMMs are trained using an evolutionary algorithm, CMA-ES. This approach overcomes issues of the non-differentiable nature of memory management decisions, specifically when deciding which tokens to discard from memory.

Frequency-Based Feature Extraction: NAMMs utilize a Short-Time Fourier Transform (STFT) to convert attention matrices into frequency representations before feeding them into the memory management network. This is an approach common in signal processing for handling non-stationary signals like audio, and works well for attention matrices.

Backward Attention Mechanism: A key architectural component, NAMMs use a backward masked attention layer to evaluate how different tokens in memory relate to future inputs. This is designed to enhance diversity and avoid storing highly redundant information.

Key Results:

Improved Performance and Efficiency: NAMMs not only substantially reduce the number of tokens stored in the KV cache but also improve overall model performance on long-context benchmarks (like LongBench, InfiniteBench and a new Japanese benchmark, ChouBun).

Zero-Shot Transferability: NAMMs, trained solely on language tasks, can be transferred zero-shot to other transformer models, including those with entirely new input modalities (e.g., vision and reinforcement learning) and with larger model sizes. This includes an ability to work well in both reinforcement learning and vision, despite being trained only on a language model.

Beyond Hand-Designed Rules: NAMMs demonstrates the potential of end-to-end learning for memory management, outperforming methods that rely on hand-engineered eviction rules.

Why is this important for AI developers?

Cost-Effective Long Context: NAMMs offer a promising way to work with long sequences, while still having practical costs. This is particularly relevant for many applications from large text processing to analyzing long videos.

Reduced Memory Footprint: By intelligently discarding less relevant information, NAMMs allow for the use of large transformers on hardware with less memory and bandwidth requirements.

Plug-and-Play Memory Enhancement: The architectural agnosticism of NAMMs means you can potentially add them to your existing models with minimal effort, regardless of their architecture.

New Research Direction: NAMMs offer a new direction, orthogonal to standard methods and parameter fine-tuning, of how to improve transformers, opening up novel avenues for further improvements.
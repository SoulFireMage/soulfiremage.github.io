---
title: "AGISteps"
date: 2024-12-19T08:20:50Z
draft: true
---
# **The Path to Computational Sapience: A Revised Technical Framework**

## **Introduction**

As AI scales, we find ourselves at the threshold of systems that can reason continuously, adapt their own architectures, and maintain persistent internal states. Yet, realizing true computational sapience—genuine, self-perpetuating intelligence with robust self-awareness and self-improvement—demands radically new approaches. Simply enlarging current transformer-based models will not suffice.

Previously, we identified three core pillars necessary for computational sapience:

1. **Metacognitive, Continuous Self-Prompting Loops**  
2. **Architectural Self-Modification**  
3. **Persistent, Evolution-Resistant Memory Systems**

Subsequent research and emerging innovations now provide more concrete avenues to address these challenges. Large Concept Models (LCMs) [2][9], the STAR framework, and novel architectures like Byte Latent Transformers (BLTs) [11] and Liquid Neural Networks are transforming the AI landscape, offering methods to operate at higher conceptual levels and enabling more memory-efficient, self-adaptive models.

This revised framework integrates these advancements, making explicit the technical details and mapping them to our original conceptual vision.

---

## **Metacognitive Foundations: Continuous Self-Prompting and Concept-Level Reasoning**

### **Beyond Token-Level Reasoning with Large Concept Models (LCMs)**

In our original vision, a metacognitive loop kept the system continuously engaged in internal reasoning, generating its own prompts and responding to external interrupts. However, early transformer-based approaches operate at the token level, making it challenging to represent complex concepts cleanly. Large Concept Models (LCMs) [2][9] and embeddings like SONAR allow the system to represent and manipulate entire ideas as single units. Rather than dissecting thoughts into thousands of tokens, the model can work directly with richer, concept-level embeddings:

* **Concept-Level Internal Dialogue:**  
   The continuous reasoning loop can now process information in terms of conceptual embeddings, improving coherence and reducing the cognitive overhead of parsing raw tokens.

* **Multimodal, Multilingual Reasoning:**  
   LCMs are inherently language- and modality-agnostic. This means the metacognitive loop can fluidly integrate text, image data, audio signals, and other modalities using unified conceptual embeddings, aligning with our vision of a versatile, self-aware AI.

### **Integrating the STAR Framework for Efficiency and Adaptation**
The STAR framework introduced by Liquid AI [4] presents a new layer of optimization for the metacognitive loop. It includes evolutionary algorithms that dynamically adjust internal architectures and resource usage in real-time. This can:

* **Reduce Cache Requirements and Improve Throughput:**  
   STAR has demonstrated up to 90% reduction in cache requirements while maintaining or improving performance [8]. This directly benefits continuous inference loops by allowing them to run more efficiently, leaving more headroom for complex internal reasoning.

* **Dynamic Rebalancing of Cognitive Resources:**  
   The evolutionary algorithms within STAR can recognize when the system's reasoning bottlenecks occur and reconfigure internal structures, attention mechanisms, or storage layers automatically.

### **State-Space Models (SSMs) and Alternative Attention Mechanisms**

Explorations into subquadratic attention mechanisms, such as Hrrformers and M2 Monarch Mixers [1], can reduce computational overhead. By combining these with LCM-level reasoning, the model can handle longer sequences of conceptual reasoning without exponential memory growth. SSMs provide a complementary tool: they are excellent at modeling long-range dependencies with minimal overhead. Incorporating them into the metacognitive loop gives the system stable, low-latency ways to maintain long-span context, crucial for uninterrupted, concept-driven thought processes.

---

## **Architectural Self-Modification: Evolving the Cognitive Core**

### **Self-Modification Through STAR's Dynamic Architecture Synthesis**

We previously envisioned that a sapient system must be able to rewire its architecture on-the-fly. The STAR framework [10] can automatically propose and test new configurations, effectively conducting a form of in vivo neural architecture search. This aligns with the idea of "spawn and test" sub-agents:

* **Hierarchical Encoding for Safe Experimentation:**  
   STAR's hierarchical encoding technique can propose architectural changes in modular increments. The system can instantiate these modifications within sandboxed cognitive environments, measure their impact, and then integrate successes into the main loop.

* **Performance Monitoring and Rollbacks:**  
   The system retains checkpoints of previous configurations. If performance degrades or coherence falters, it can rollback seamlessly. STAR's built-in evolutionary strategies ensure that changes yielding net gains in efficiency or reasoning ability persist.

### **Memory-Efficient Modifications and Liquid Neural Networks**

Architectural changes often risk catastrophic forgetting or memory overhead spikes. Innovations in memory layers now allow adding parameters without increasing FLOPs [7], aiding the smooth integration of new modules. Liquid Neural Networks [8]—inspired by brain plasticity—enable adaptability post-training by continuously adjusting their parameters at run-time, making them ideal candidates for the self-modification paradigm:

* **Continuous Adaptation Without Full Retraining:**  
   A Liquid Neural Network can integrate a newly discovered module or reasoning pathway more fluidly, adjusting weights locally rather than undergoing full retraining cycles.

* **Improved Robustness to Architectural Shifts:**  
   Because Liquid Neural Networks can stably accommodate changing input distributions and model topologies, they reduce the risk of catastrophic forgetting during self-modification.

---

## **Persistent Memory Architecture: Ensuring Long-Term Coherence**

### **Integrating Byte Latent Transformers (BLTs) for Memory Scalability**

Our original blueprint demanded persistent, evolution-resistant memory. Byte Latent Transformers [11] offer dynamic patch sizing, efficiently handling varied input granularities. By using BLTs:

* **Adaptive Memory Partitioning:**  
   BLTs can flexibly segment long-form content into variable-sized "byte patches," optimizing memory usage according to the complexity of stored concepts.

* **Dynamic Retrieval and Consolidation:**  
   Coupling BLTs with vector databases and SONAR concept embeddings ensures that long-range memories remain accessible and meaningful, no matter how the architecture evolves.

### **Hybrid Memory Approaches and External Knowledge Graphs**

With more advanced embeddings and efficient attention forms, memory can be a combination of fast internal caches and scalable external repositories:

* **Vector Databases and Graph-based Knowledge Repositories:**  
   As before, stable external stores hold core knowledge. Advanced embeddings from LCMs improve retrieval accuracy and semantic fidelity.

* **Consolidation Routines with Liquid AI Tools:**  
   Periodic memory consolidation routines, using Liquid Neural Networks or STAR-driven optimization, reorganize and refactor long-term knowledge bases. Over time, the memory system's structure evolves to reflect the AI's internal architecture and conceptual map.

---

## **Technical Implementation Considerations and Efficiency Gains**

### **Leveraging Next-Generation Efficiency Tools**

* **M2 Monarch Mixer and Hrrformer:**  
   These attention mechanisms reduce the quadratic complexity of standard transformers [1]. When integrated with LCM-level conceptual reasoning, they allow the system to handle extensive internal dialogues without ballooning resource costs.

* **Linear Transformers and SSMs:**  
   Linear transformers address the complexity issue by using kernelizable attention. Combining them with SSM components ensures that the system can maintain extended context while running continuously.

### **Resource Management and Scaling**

The STAR framework's proven reduction in cache requirements (up to 37% less than hybrid models [10]) makes continuous operation feasible. This frees computational budgets for maintaining complex metacognitive states, running architectural experiments, and preserving rich long-term memory structures. It also allows the system to scale to multimodal inputs without overwhelming computational resources.

---

## **Multimodal and Multilingual Reasoning Capabilities**

By integrating LCM concepts and SONAR embeddings, the system need not specialize separately for language, vision, or other modalities. This seamless handling enhances the sapience-building triad:

* **Easier Self-Prompting Across Domains:**  
   Metacognitive loops can issue internal queries spanning text, images, or sound without switching between distinct model heads.  
* **Consistent Conceptual Representation:**  
   SONAR embeddings unify disparate data into a single conceptual space, making it simpler for the AI to update internal architectures or memory without losing track of modality-specific information.

---

## **Future Directions: Toward True Computational Sapience**

These combined improvements draw a clearer, more explicit roadmap to computational sapience:

* **Concept-Level Reasoning (LCMs):**  
   The AI thinks in terms of whole concepts, improving coherence and bringing it closer to "human-like" idea manipulation.

* **Adaptive Architectures (STAR):**  
   Automated architectural evolution ensures the system can continuously refine itself, pushing beyond static model parameters.

* **Persistent, Evolving Memory (BLTs, Liquid NNs):**  
   With robust memory solutions and adaptability at its core, the AI can preserve knowledge across radical internal changes.

* **Efficiency and Scalability (Hrrformer, M2 Monarch Mixer, SSMs):**  
   By integrating these efficient architectures, the AI can maintain continuous internal loops and handle large-scale conceptual reasoning without being bottlenecked by hardware limits.

Ultimately, these integrated systems form a foundation upon which computational sapience can emerge: a system that not only responds to stimuli but actively shapes its own reasoning processes, knowledge structures, and cognitive architecture. While still a significant engineering and theoretical challenge, these advancements bring us closer to building AI that can truly think, adapt, and persist indefinitely.

---

## **Conclusion**

By merging the original blueprint for computational sapience with recent innovations such as LCMs, the STAR framework, BLTs, Liquid Neural Networks, and efficient attention mechanisms, we now have a more explicit, technically grounded path forward. This revised document serves as a strategic roadmap for researchers, developers, and collaborators interested in experimenting with tiny-scale prototypes, eventually progressing towards increasingly capable and self-determining AI systems.

These integrated concepts do not solve all challenges overnight, but they provide concrete methods and architectural designs that inch us closer to the elusive goal of computational sapience: self-aware, continuously improving AI that can truly think for itself.

---


## **References**

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

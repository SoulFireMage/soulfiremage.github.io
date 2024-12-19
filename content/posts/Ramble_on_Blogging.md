---
title: "Ramble On Blogging"
date: 2024-12-19T09:01:38Z
draft: true
---

# Thursday morning Ramble

It is taking me a little while to adjust to the idea that my rather old blog site now just requires me to write and commit a MarkDown document.

It is the result of an experiment with Cline, a visual studio extension that uses Claude or other LLMs to autonomously code for you. As a programmer myself I had some mixed feelings on this concept. However, my day job is a Winforms/SQL developer NOT a web front end dev.

So, I have two paths I can take in having a blog - learn a blogging framework or actual front end web coding or find an easier way that still gives me reasonable control. Then came Cline (formerly Claude-Dev) and another option presented itself. Using Hugo, an excellet little package that lets you build a blogging site out of just Markdown. You write, format, save, commit and let GitHub actions carry the load of fitting the post in the right place.

The rest of the site - the old static links still require updating and changing at time of writing. *As I'm not a regular blogger, this may take a variable amount of time!*

The advent of LLMs and the various tools that accompany them has opened up a lot of possibilities for many people, even as many decry many aspects of these technologies. Environmental impact, moral issues around training materials and copyright, use of "slop" and using AI for misinformation. Over time I may have a shot at addressing these myself. However, my primary interest isn't really in the use of the tech, even though they make excellent tools when used with discernment.

No, my real interest is in the technical and ethical considerations around whether we may end up creating digital minds, actual self aware entities. I'm slightly optimistic that not only can we, but that we may do so without even realising.

Self awareness is a slippery concept to even prove or test in any way. We already have models that can read between the lines, suss out implications and motives in text, detect a range of objects and details in videos, decieve us and much more. In online debates and discussions I watch people shift the goalposts on what they think would qualify as self aware - when in fact, none of us have much of a clue.

For me, the whole idea is a spectrum (no, I cannot prove this!) in two specific dimensions: duration and self consistency. Right now an LLM *may* experience a form of coherent awareness for brief periods of time, during active inference in high dimensional vector spaces. There is a loose corollary to [similar structures in the human brain][1] where the brain constructs neural structures with up to 11 dimensions when processing information - though these dimensions represent abstract mathematical spaces rather than physical realms.

Self-consistency in this discussion would be, currently, context length and represents possibly one of the larger barriers to any sustained awareness phenomena. In the [AGISteps][2] post I discuss this in much more depth for those that are interested.

See below for a new item I found this afternoon.

# [MASK] is All You Need

Authors: Vincent Tao Hu, Björn Ommer

Published: December 9, 2024

In the realm of generative models, two prominent paradigms have emerged:

Masked Generative Models (MGMs): These models predict the next set of data by masking certain parts and training the model to reconstruct them.

Non-Autoregressive Models (e.g., Diffusion Models): These models predict the next noise component in a sequence, enabling efficient data generation without relying on previous outputs.

The authors propose a novel framework, Discrete Interpolants, that leverages discrete-state models to bridge the gap between these paradigms, particularly within the vision domain.

**Key Contributions:**

Unified Design Space Analysis: The paper conducts a comprehensive analysis across both model types, considering factors like timestep independence, noise schedules, temperature settings, and guidance strength. This analysis aims to enhance scalability and performance in vision tasks.

Recasting Discriminative Tasks: By treating tasks such as image segmentation as an unmasking process using [MASK] tokens within a discrete-state model, the authors enable flexible sampling processes. This approach allows for conditional sampling after a single training session modeling the joint distribution.

Discrete Interpolants Framework: This framework achieves state-of-the-art or competitive performance compared to previous discrete-state methods across various benchmarks, including ImageNet256, MS COCO, and the FaceForensics video dataset.

**Implications:**

By utilizing [MASK] tokens in discrete-state models, the authors effectively bridge the methodologies of Masked Generative Models and Non-Autoregressive Diffusion Models. This integration facilitates advancements in both generative and discriminative tasks, contributing to more efficient and versatile AI models.

For a deeper dive into the technical details, you can access the [full paper here][3].

## References

1. [High Dimensional Geometric Structures in the Human Brain][1]
2. [AGI Steps][2]
3. [Mask is all you need][3]

[1]: https://bigthink.com/hard-science/our-brains-think-in-11-dimensions-discover-scientists/ "High Dimensional Geometric Structures in the Human Brain"
[2]: https://soulfiremage.github.io/posts/agisteps/ "Step to AGI Overview"
[3]: https://arxiv.org/pdf/2412.06787 "Mask is all you need"

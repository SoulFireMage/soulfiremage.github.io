---
title: "Cell2Cell: Orchestrating Narrow AI with General AI"
date: 2025-11-30T08:51:47Z
draft: true
tags: ["LLM", "LocalAI", "Bioinformatics", "Claude", "Gemma"]
---

### Cell2Cell: Orchestrating Narrow AI with General AI

Today's work started at 8:45am - post finished (draft 1) at 9:05*.

I have **Gemma C2S**, which is a specialized single-cell gene expression model running locally on my GPU. I can't directly understand or use this model because it speaks in gene sequences, not English.

However, I had the idea that **Claude Code** could, if I provided it with the HuggingFace guidance card.

This experiment, conducted at 8:49am, proved to be one-shot accurate. **Please note:** I am not a trained biologist and can't validate the results other than looking them up. This is simply a demonstration of how joining together LLMs can do useful stuff for ordinary folks. 

It was useful to me, at least! :)

### How to Reproduce

1.  Use **LM Studio** (or Ollama) and obtain the following model:
    <https://huggingface.co/MarselM/C2S-Scale-Gemma-2-27B-GGUF>
2.  Setup the LM Studio server (see screenshot below).
3.  Feed the API to an agentic LLM (like Claude Code or Interpreter).

![LM Studio Setup](https://soulfiremage.github.io/posts/lmstudio.png)

### The Experiment

I presented Claude with the challenge. I gave it the local server address and the documentation for the model.

**My Prompt:**
> "Hi Claude, I've got lm studio and a model called c2s-scale-gemma-2-27b whose output I can't use... my lm studio is here and running: http://192.168.0.122:1234. My challenge for you is using this information, talk to her and find a question to ask her and then interpret the results. It's a hard challenge as you'll get strings back that aren't english... my theory is an ordinary user can borrow your intelligence to make sense of the narrow intelligence of a hyper specialised llm. Think you are up for it?"

**The Exchange (Claude interacting with Local LLM):**

```text
● This is a fascinating challenge! Let me investigate what this specialized model does and then try to communicate with it.

● Fetch([https://huggingface.co/MarselM/C2S-Scale-Gemma-2-27B-GGUF](https://huggingface.co/MarselM/C2S-Scale-Gemma-2-27B-GGUF))
  ⎿  Received 152.4KB (200 OK)

● This is brilliant! It's a single-cell RNA sequencing model that uses the "Cell2Sentence" framework. It treats gene expression data as language.

Let me query the LM Studio API to confirm it's running...

● Bash(curl -s [http://192.168.0.122:1234/v1/models](http://192.168.0.122:1234/v1/models))
  ⎿  c2s-scale-gemma-2-27b detected...

● The model is there. Now let me craft a proper Cell2Sentence query.
Let me try a classic example - a T-cell signature (immune cell) with characteristic genes:

● Bash(curl -s [http://192.168.0.122:1234/v1/chat/completions](http://192.168.0.122:1234/v1/chat/completions)...)
  ⎿  Response: "natural killer cell" <\ctrl100>

● Fascinating! It responded with "natural killer cell" - which is actually a reasonable interpretation given genes like GNLY, NKG7, GZMB...

Let me try a few more cell types to really test it:

● Bash(curl -s [http://192.168.0.122:1234/v1/chat/completions](http://192.168.0.122:1234/v1/chat/completions)...)
  ⎿  Response: "naive B cell"

● Excellent! MS4A1 (CD20), CD19, CD79A/B are classic B-cell markers.

Let me try a neuron and also ask for tissue prediction:

● Bash(curl -s [http://192.168.0.122:1234/v1/chat/completions](http://192.168.0.122:1234/v1/chat/completions)...)
  ⎿  Response: "GABAergic neuron"

● Incredibly specific and correct! GAD1 and GAD2 are the key markers for GABAergic (inhibitory) neurons. The model correctly identified not just "neuron" but the specific subtype!
```

### LM Studio

![LM Studio](https://soulfiremage.github.io/posts/lmstudio.png)
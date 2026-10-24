---
title: "Talk to a Cell: Cell2Sentence for people who aren't biologists"
date: 2026-10-24T10:20:00+01:00
draft: false
description: "Last year I got Claude to translate for a gene-expression model on my own GPU. Now it's a public Hugging Face Space: plain English in, a real cell to C2S, an honest answer out."
tags: ["LLM", "Bioinformatics", "Cell2Sentence", "Hugging Face", "Gradio"]
categories: []
authors: []
---

*Written with Claude, from the session that built it on 24 October. Try it at [huggingface.co/spaces/SoulFireMage/talk-to-a-cell](https://huggingface.co/spaces/SoulFireMage/talk-to-a-cell); the code is on GitHub: [talk-to-a-cell](https://github.com/SoulFireMage/talk-to-a-cell).*

Last November I wrote up [Cell2Cell](/posts/cell2cell/): a specialised single-cell model running in LM Studio on my own GPU, which I couldn't use myself because it speaks genes, not English, with Claude acting as translator. It worked first time and I was chuffed. It also needed my machine, my GPU and me sitting there. This week it became something anyone can open in a browser.

**Usual disclaimer:** I'm not a biologist. This is a demo for curiosity and learning, not for anything medical.

## What C2S is

[Cell2Sentence (C2S-Scale)](https://huggingface.co/vandijklab/C2S-Scale-Gemma-2-2B), from the van Dijk Lab at Yale with Google Research and Google DeepMind, is a language model that learned to read cells from over 57 million real ones. Its native language is the *cell sentence*: a cell's gene names, ordered from most to least active. Give it a cell sentence and it names the cell; name a cell and it writes the cell sentence.

## What the app does

It puts a general AI model either side of C2S as a translator:

```
you ── plain English ──> general model: "what does this person want?"
                              │
                              └──> C2S (on the Space)
                              │
you <── plain English ── general model: "what did C2S say, in English?"
```

So you can just ask:

- **"Show me it working"** picks a *real* human blood cell from a public dataset, one that experts have already labelled, sends its genes to C2S without the answer, and then tells you whether C2S got it right.
- **"Which genes define a neuron?"** gets C2S to write a typical neuron's cell sentence.
- **"Feed that back in"** is the round trip: does C2S recognise its own cell?

Every answer has a **"🔬 What C2S actually said"** box with the raw output and the exact prompt. The translator is chatty, and I wanted it always clear which words came from the specialist and which from the commentator.

## Who pays for what

This was the fiddly bit.

- **The translator** runs on OpenRouter with *your* key. The key stays in your browser tab and goes only to OpenRouter. The OpenRouter calls run as JavaScript in the page, which blanks the key before anything reaches the server, and the server refuses any request that arrives carrying one anyway. Use a key with a spending cap, same as with my other OpenRouter toys.
- **C2S itself** is meant to run on Hugging Face's **ZeroGPU**, where GPU time comes out of the *visitor's* daily allowance (2 minutes signed out, 5 on a free account, 40 on PRO). Right now it's on plain CPU while I switch that over.
- **Expert mode** needs no key at all: pick a real cell or paste a gene list, and talk to C2S directly.

## Does it work?

The example cells are 24 real white blood cells from 10x Genomics' **PBMC 3k** dataset, three each of eight types, labelled using the scanpy tutorial's clusters.

On eight of them, the small 2B model named **7 correctly**, at proper expert precision: "non-classical monocyte", "CD4-positive, alpha-beta T cell". The one miss was a megakaryocyte, which it called a "mature NK T cell". The round trip worked as well: a B cell that C2S had written itself came back as "memory B cell".

On CPU that takes about 15 seconds a cell. Generating a 50-gene cell sentence took 83 seconds, so the GPU will be welcome.

One thing mattered more than I expected: **the prompt format**. The Space uses the official C2S prompt templates from the [cell2sentence](https://github.com/vandijklab/cell2sentence) repo. My local setup still uses a home-made prompt, so the plan is a fair rematch: the big 27B model with the official prompt against ours, and against DeepSeek, blind-scored on real cells. Last year's "one-shot accurate" was a handful of textbook marker genes. Real cells are messier, and I want an honest number.

## Gradio gotchas, for anyone else trying this

- Events that run only in JavaScript don't trigger the next `.then()` step in the chain.
- On Spaces, the page's head script gets injected a few seconds after load, so the JS has to wait for it.
- Clicks in the first second or two after the page loads can vanish, because the server-rendered page isn't wired up yet. Known, accepted for now.

## Next

- Switch the Space to ZeroGPU and check the GPU time really does come out of the visitor's quota, signed in and signed out.
- The 27B model. In full precision it's about 54GB, so it needs the extra-large GPU or an 8-bit version.
- The rematch.

It's also now a star on [the chart](/posts/starshipchart/), with a thread back to the old Cell2Cell experiment, where it started.

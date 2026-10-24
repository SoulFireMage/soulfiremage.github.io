---
title: "Talk to a Cell: Cell2Sentence for folks who aren't biologists"
date: 2026-10-24T10:20:00+01:00
draft: false
description: "Last year I got Claude to translate for a gene-expression model on my own GPU. Now it's a public Hugging Face Space: plain English in, a real cell to C2S, an honest answer out."
tags: ["LLM", "Bioinformatics", "Cell2Sentence", "Hugging Face", "Gradio"]
categories: []
authors: []
---

*Written up with Claude from our session logs of 24 October, I'll be going over it. Try it at [huggingface.co/spaces/SoulFireMage/talk-to-a-cell](https://huggingface.co/spaces/SoulFireMage/talk-to-a-cell), and the code is on GitHub as [talk-to-a-cell](https://github.com/SoulFireMage/talk-to-a-cell).*

Last November I wrote up [Cell2Cell](/posts/cell2cell/), where a specialised single-cell model was running in LM Studio on my own GPU, speaking genes rather than English, and Claude acted as translator so I could actually use it. It worked first time, and was useful to me at least, but it needed my machine, my GPU and me sat there at it. This week it turned into something anyone can open in a browser.

Usual disclaimer, I'm not a biologist and can't validate the results beyond looking them up. It's a demo for curiosity and learning, not for anything medical.

## What C2S is

[Cell2Sentence (C2S-Scale)](https://huggingface.co/vandijklab/C2S-Scale-Gemma-2-2B) comes from the van Dijk Lab at Yale with Google Research and Google DeepMind, and it learned to read cells from over 57 million real ones. Its native language is the "cell sentence", which is just a cell's gene names in order from most to least active. Give it a cell sentence and it names the cell, or name a cell and it writes you the sentence.

## What the app does

It puts a general AI model either side of C2S as a translator, so the flow goes roughly like this:

```
you ── plain English ──> general model: "what does this person want?"
                              │
                              └──> C2S (on the Space)
                              │
you <── plain English ── general model: "what did C2S say, in English?"
```

So you can just ask it things. "Show me it working" picks a *real* human blood cell from a public dataset, one experts have already labelled, sends its genes to C2S without the answer, and then tells you whether it got it right. "Which genes define a neuron?" gets C2S to write a typical neuron's cell sentence, and "feed that back in" does the round trip to see if C2S recognises its own cell.

Every answer also has a "🔬 What C2S actually said" box with the raw output and the exact prompt. The translator can be a bit chatty, so I wanted it always clear which words came from the specialist and which from the commentary.

## Who pays for what

This was the fiddly bit. The translator runs on OpenRouter with *your* key, and the key stays in your browser tab and goes only to OpenRouter. The OpenRouter calls run as JavaScript in the page, which blanks the key before anything reaches the server, and the server refuses any request that turns up carrying one anyway. Same pattern as my other OpenRouter toys, and same advice, use a key with a spending cap.

C2S itself is meant to run on Hugging Face's ZeroGPU, where the GPU time comes out of the *visitor's* daily allowance, 2 minutes signed out, 5 on a free account and 40 on PRO. At the moment it's on plain CPU while I switch that over. There's also an Expert mode that needs no key at all, where you pick a real cell or paste a gene list and talk to C2S directly.

## Does it work?

The example cells are 24 real white blood cells from 10x Genomics' PBMC 3k dataset, three each of eight types, labelled using the scanpy tutorial's clusters.

On eight of them the small 2B model named **7 correctly**, and at proper expert precision too, things like "non-classical monocyte" and "CD4-positive, alpha-beta T cell". The one it missed was a megakaryocyte, which it called a "mature NK T cell". The round trip worked as well, a B cell that C2S had written itself came back as "memory B cell". On CPU it's about 15 seconds a cell, and writing a 50-gene cell sentence took 83 seconds, so the GPU will be welcome.

The thing that mattered more than I expected was the prompt format. The Space uses the official C2S prompt templates from the [cell2sentence](https://github.com/vandijklab/cell2sentence) repo, whereas my local setup still uses a home-made prompt. So the plan is a fair rematch, the big 27B model with the official prompt against ours, and against DeepSeek, blind-scored on real cells. Last year's "one-shot accurate" was a handful of textbook marker genes Claude picked, and real cells are messier, so I'd like an honest number.

## Gradio gotchas, for anyone else trying this

A few things bit along the way. Events that run only in JavaScript don't trigger the next `.then()` in the chain. On Spaces the page's head script gets injected a few seconds after load, so the JS has to wait for it. And clicks in the first second or two after the page loads can vanish, because the page isn't wired up yet, which is known and accepted for now.

## Next

Switching the Space to ZeroGPU and checking the GPU time really does come off the visitor's quota, signed in and signed out. Then the 27B model, which at full precision is about 54GB, so it needs the extra-large GPU or an 8-bit version. Then the rematch.

It's on [the chart](/posts/starshipchart/) now as well, with a thread back to the old Cell2Cell experiment where it all started.

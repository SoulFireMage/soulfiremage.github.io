---
title: "Reading an AI's latent thoughts for 80p"
date: 2026-10-23T20:30:00+01:00
draft: false
description: "I ran Stanford/Together's HybridAgent on trick questions and read its 'latent thoughts' back as text. What the readout shows, and what it hides."
tags: ["AI", "latent reasoning", "HybridAgent", "experiments"]
categories: []
authors: []
---

*Written with Claude, from an evening's experiment we ran together. The code and raw notes are on GitHub: [hybridagent-latent-probe](https://github.com/SoulFireMage/hybridagent-latent-probe).*

A while back I had a broad hunch that language models would end up thinking in some hybrid of words and something that isn't words. It was too vague to count as a prediction. This week a paper landed that does roughly that, and it came with working code. So I tried it.

## What HybridAgent does

Normally a language model "thinks out loud": every step it picks a word, then feeds that word back in to choose the next one. Squashing a rich internal state down to one word per step throws a lot away.

[HybridAgent](https://github.com/togethercomputer/HybridAgent) (Zou et al., Stanford / Together AI, [arXiv 2610.18861](https://arxiv.org/abs/2610.18861)) lets the model skip that squashing for a while. In **latent mode** it feeds its own internal state straight back in, with a small learned adapter (they call it HybridLink) in between. Then it switches back to **text mode** whenever it needs to call a tool or give an answer.

The selling point is that you can still read the latent thoughts. At each latent step you ask "which word is this closest to?" and print that word. The paper calls the result *pseudo-text*, and scores each stretch by how close the words are on average: its "readability".

I wanted to know what you actually see when you read it.

## The setup

- The released 8-billion-parameter model, on one rented L4 GPU through Hugging Face Jobs.
- Eleven questions: three maths problems and eight classic trick questions (bat and ball, lily pads, Sally's sisters and so on).
- Total cost including my failed setup runs: under £1.

It got 10 of 11 right. The miss was *"How many months of the year have 28 days?"*. It said 1. The answer is 12: every month has at least 28.

## What the readout shows

**Sometimes you can watch a mistake form.** On a geometry problem, a latent stretch reads *"the original circle is x²+y²=25, so x²+y²=25"*, mixing up two sets of coordinates. The written reasoning right after makes the same slip, wanders off, and then recovers. The readout caught the error at source.

**Once, it looked as if it had the right answer and threw it away. Probably it didn't.** On the 28-days question, just before the wrong answer, a latent stretch reads:

> *"…the only month that has 28 days in a common year is February. but I a leap year, February has 29 days. So, the number would be 1 2 ,"*

The model writes numbers one digit at a time, so "1 2" reads as **12**, the right answer. The very next written sentence says *"even the shortest months are 30 days long"*, which is false, and it settles on 1. My first thought: the latent had it right and the words overrode it.

So I asked the same question ten more times. Two things came back:

- **All ten runs were word-for-word identical.** The inspector's default settings make the model fully repeatable, so ten repeats tell you nothing more than one. Testing whether something is a pattern means turning on randomness, which I haven't done yet.
- **The full trace undercuts my reading.** The *first* latent stretch in that answer says *"I know that a [year] has 1 2 months"*. So "12" was already sitting in the model's working state as "months in a year". The later "the number would be 1 2," is just as plausibly an echo of that as a hidden correct answer. The stretch cuts off right after the digits, so you can't tell which.

That's a useful lesson about this kind of readout in itself: a tantalising fragment, and no way to tell from the readout alone which story it belongs to.

**Some real arithmetic happens in there.** Checking whether 3599 is prime, latent stretches correctly work through *3+5+9+9 = 26* and *359 − 18 = 341*.

## What it hides

**Nouns come out garbled.** The readout is great at digits and little words like *the*, *of* and *is*. Ask it for a *thing* and it struggles:

| The model meant | The readout said |
|---|---|
| widgets | tiles, cookies, "digit" |
| machines | cars |
| tunnel | 𝄕 (a musical symbol) |
| lily pads | "l y cards" plus some Hebrew |
| bat | ball |

The model clearly still knew a bat from a ball, because it solved the problem. The information is in there; the nearest single word is just a bad label for it.

**"Readable" doesn't mean "faithful".** Because the score is an average, it's dominated by the easy words. The highest-scoring stretch in the whole run, 0.97 out of 1, was the model stuck in a loop writing *0, 0, 0, 0…* for 200 steps. On the train-in-a-tunnel problem, the readout says *"the length of the train + the length of the train"*, while the written working correctly adds train plus tunnel.

## So what?

The pseudo-text is a shadow of the thought, not the thought itself. Where it's clear it can be genuinely revealing, as with the geometry slip. Where it's fragmentary, as with the 28-days "12", it invites you to read in whatever story you came looking for. And it's clearest exactly where there's least to see: digits and grammar. It's blurriest on the concepts, which is where you'd most want to look.

That matters for the paper's safety pitch, that latent thinking stays inspectable. You can inspect it. You just can't take the readout at its word.

Eleven questions, one sample each, puzzles the model has probably seen before: this is a poke, not a study. But it cost less than a coffee, and anyone can rerun it with one command from the repo.

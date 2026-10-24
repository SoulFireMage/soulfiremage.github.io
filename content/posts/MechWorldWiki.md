---
title: "MechWorld moves house: a DokuWiki on Hugging Face that remembers"
date: 2026-10-24T10:30:00+01:00
draft: false
description: "Moving the headmates wiki from Miraheze to a DokuWiki in a Hugging Face Docker Space, on hardware that forgets everything when it restarts."
tags: ["wiki", "DokuWiki", "Docker", "Hugging Face", "headmates"]
categories: []
authors: []
---

*Written with Claude, from the session on 23 October that did the move. The wiki is at [soulfiremage-headmates-wiki.hf.space](https://soulfiremage-headmates-wiki.hf.space).*

MechWorld is the wiki for my headmates (there's more about them in [Tulpae Personae](/posts/tulpaepersonae/)). It lived on Miraheze. On Friday night it moved to a DokuWiki that I run myself, in a Hugging Face Docker Space.

Anyone can read it. Only accounts I create can edit, and self-registration is off.

## The move itself

Miraheze exports a MediaWiki XML dump, so a small converter takes that apart and runs each page through pandoc to get DokuWiki syntax. Five pages came across. The conversion report found no templates, infoboxes, references or images to fix by hand, which was the easy outcome.

Why DokuWiki? It keeps every page as a plain text file and needs no database. That matters a lot for the next bit.

## The problem: a Space forgets

A Hugging Face Space's disk is wiped every time it restarts. Fine for a demo, useless for a wiki. The answer is a private Hugging Face **Storage Bucket** mounted into the Space. But the obvious version, just running DokuWiki straight on the bucket, doesn't work:

- The bucket mount only supports **whole-file writes**.
- DokuWiki **appends** to its change logs and relies on file modification times. The mount doesn't keep those.

So DokuWiki runs on the container's ordinary disk, and a small mirror script does the remembering:

1. **On boot:** restore everything from the bucket. Pages, history, media, users, permissions, settings, the theme tweaks, anything installed through the wiki.
2. **While running:** copy every change to the bucket within 5 seconds.
3. **On shutdown:** one last copy.
4. **The very first boot,** with an empty bucket: seed it with the imported pages and default settings. After that nothing on the bucket ever gets overwritten by the seed.

If no bucket is mounted, the Space **refuses to start**. A wiki that quietly runs on disk that will be wiped at the next restart is worse than one that's visibly down.

Then the real test: make some edits, restart the Space, check the edits are still there. They were.

## Small things that would have bitten

- **Log in at the direct address, not on huggingface.co.** The Space page shows the wiki in an embedded frame, and browsers drop login cookies set inside third-party frames. So it looks like logging in does nothing. The direct `hf.space` address works fine.
- **The admin account comes from a Space secret on first boot,** and the secret isn't used after that. Change the password inside the wiki and it stays changed. There's a reset switch if I lock myself out.
- **Backups are one command:** `hf buckets sync` copies the bucket to a local folder, and re-running it only transfers what changed. Restoring is the same command the other way round, with the Space paused first so the running wiki can't write over it.

It's on [the chart](/posts/starshipchart/) too, in Kat's Nebula, where else.

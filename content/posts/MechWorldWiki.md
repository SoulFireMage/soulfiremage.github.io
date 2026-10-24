---
title: "MechWorld moves house: a DokuWiki on Hugging Face that remembers"
date: 2026-10-24T10:30:00+01:00
draft: false
description: "Moving the headmates wiki from Miraheze to a DokuWiki in a Hugging Face Docker Space, on hardware that forgets everything when it restarts."
tags: ["wiki", "DokuWiki", "Docker", "Hugging Face", "headmates"]
categories: []
authors: []
---

*Written up with Claude from our session logs of 23 October, I'll be going over it. The wiki itself is at [soulfiremage-headmates-wiki.hf.space](https://soulfiremage-headmates-wiki.hf.space).*

MechWorld is the wiki for my headmates, there's more about them in [Tulpae Personae](/posts/tulpaepersonae/) if you're curious. It used to live on Miraheze, and on Friday night it moved to a DokuWiki I run myself in a Hugging Face Docker Space. Anyone can read it, only accounts I create can edit, and self-registration is off.

## The move

Miraheze gives you a MediaWiki XML export, so a small converter takes that apart and runs each page through pandoc to get DokuWiki syntax out the other side. Five pages came across, and the conversion report found no templates, infoboxes, references or images that needed fixing by hand, so that part was easy.

DokuWiki rather than anything else, because it keeps every page as a plain text file and needs no database at all, which matters a lot for the next bit.

## A Space forgets

A Hugging Face Space's disk gets wiped every time it restarts. That's fine for a demo and pretty useless for a wiki. The fix is a private Hugging Face Storage Bucket mounted into the Space, but the obvious version, just running DokuWiki straight on the bucket, doesn't work. The bucket mount only supports whole-file writes, while DokuWiki appends to its change logs and relies on file modification times, which the mount doesn't keep.

So DokuWiki runs on the container's ordinary disk, and a small mirror script does the remembering. When the Space boots it restores everything from the bucket: pages, history, media, users, permissions, settings, the theme tweaks and anything installed through the wiki. While it's running it copies every change to the bucket within 5 seconds, and it does one last copy when the Space stops. The very first boot, with an empty bucket, seeds it with the imported pages and default settings, and after that the seed never overwrites anything on the bucket again.

If there's no bucket mounted, the Space refuses to start at all. A wiki that quietly runs on disk that'll be wiped at the next restart is worse than one that's visibly down.

Then the real test, which was to make some edits, restart the Space and see if they were still there. They were.

## Things that would have bitten

Log in at the direct address, not on huggingface.co. The Space page shows the wiki inside an embedded frame, and browsers drop login cookies set inside third-party frames, so logging in there looks like it does nothing at all. The direct `hf.space` address works fine.

The admin account gets created from a Space secret on the first boot, and the secret isn't used again after that, so if I change the password inside the wiki it stays changed. There's a reset switch for when I inevitably lock myself out.

Backups are one command, `hf buckets sync`, which copies the bucket down to a local folder and only transfers what changed when you run it again. Restoring is the same command the other way round, with the Space paused first so the running wiki can't write over it.

It's on [the chart](/posts/starshipchart/) too, in Kat's Nebula, where else.

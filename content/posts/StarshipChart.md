---
title: "A star chart of my own GitHub, and a CDN that wouldn't let go"
date: 2026-10-24T10:00:00+01:00
draft: false
description: "I signed up to Skapi with no idea what it was for and told Claude to have a play. It came back with a star map of 39 projects, and a lesson in how CDN caches actually work."
tags: ["Claude", "Skapi", "web", "experiments"]
categories: []
authors: []
---

*Written with Claude, from the sessions we ran on 23 and 24 October. The site is live at [starship-whisperer.skapi.com](https://starship-whisperer.skapi.com) and the code is on GitHub: [skapitest](https://github.com/SoulFireMage/skapitest).*

On Friday I signed up for [Skapi](https://www.skapi.com), a backend-as-a-service thing, on the free plan. It gave me a CLAUDE.md to hand to my AI coding tool. I had no particular plan, so I gave Claude the file, said something like "have a play, maybe link all my projects together", and waited to see what came back.

## What it built

Claude went through my GitHub (about 35 of my own repos, ignoring the forks) and my Hugging Face Spaces, read every README, and turned the lot into a star chart:

- **Every project is a star.** Older projects are dimmer, because their light left a long time ago. The 2015 WPF and F# stuff is very faint indeed.
- **Six constellations by topic:** The Spinor Drift, Kat's Nebula, The Harness Belt, Thinking Engines, The SQL Quarter and The 2015 Fossil Belt.
- **A second grouping by how each thing was made:** "Just To See What Happens", "Let The AI Drive", "Rigs In Daily Use", "Learning Out Loud", "Worldbuilding" and "Making Data Legible". "Let The AI Drive" only lists projects whose README actually says an AI wrote the code. It didn't guess.
- **Threads** between stars where it's the same idea years apart. My favourite: PySpinor, a fork from 2015, then Quantumpizza in 2025, then spinor-lib this year. I genuinely hadn't noticed I'd been circling spinors for a decade.
- **Two lenses on every card.** ⚡ Kat lens is compressed and pattern-first; 🧱 Richard lens is the plain step-by-step version. It nicked that idea from my own [threads/](https://github.com/SoulFireMage/Microlearning) learning app, which is fair enough.
- **A trivia strip** of true facts tied to projects: Hamilton carving the quaternion rules into Broom Bridge, the 720° spinor turn, Codd's 1970 relational paper and so on. Speculation was kept off it on purpose.

Today I added two more stars, [Talk to a Cell](/posts/talktoacell/) and the [MechWorld wiki](/posts/mechworldwiki/), which makes 39.

## So what is Skapi actually doing?

Not a lot, honestly, and that's fine. The chart is plain HTML and SVG, which any host could serve. Skapi does the two bits a static page can't: a guestbook (the "Starlog") and a little ✦ spark button on each project. Visitors write records anonymously into a public table, with no server of mine involved.

Two rough edges:

- **"Require Login" is on by default and there's no switch for it.** While it's on, signed-out visitors can post to the Starlog but can't read it. The dashboard doesn't have a toggle for it yet, and the AI connector can't change it either, so I've a message ready for Skapi support. Until then the Starlog says so instead of failing silently.
- **Hosting has no deploy token.** GitHub Pages rebuilds itself when you push. Skapi wants files uploaded through the dashboard, which felt very manual next to GitHub. Then I found Skapi has an AI connector (an MCP server), added it to Claude, and from then on Claude could register the subdomain and upload the files itself. Not CI/CD, but no clicking either.

Claude checks every upload by downloading it again and comparing it byte for byte with the repo. That caught two real problems. Once an escaped character came back as the literal character, 4 bytes shorter but harmless. Another time one apostrophe arrived as "Rosenblatt���s", which would have been on the live page if nobody had looked. Re-uploaded, re-checked, fine.

## The CDN that wouldn't let go

This is the bit I didn't expect. After this morning's update, my tablet showed 39 stars and my phone showed 37. Claude's own checks, from a cloud machine in the US, kept getting the old file too. Skapi's "refresh CDN" button was pressed twice and it made no difference.

My first reaction was that this makes no sense. A content delivery network that never updates is useless, so something else had to be going on. There was, and the response headers told the whole story:

```
Cache-Control: public, max-age=300, s-maxage=86400, must-revalidate
```

- `max-age=300`: my browser can reuse a copy for 5 minutes.
- `s-maxage=86400`: each CDN location can reuse its copy for **24 hours**, then must check back.

So caches do expire, just after a day. And a CDN location only holds a copy if somebody near it asked for the file. The two US locations Claude was hitting had copies because **Claude put them there**. Its "does the live site match the repo?" check ran about two minutes *before* the upload, and that request cached yesterday's file in Washington for the next 24 hours. Chicago's copy was a day old, most likely from one of our own tests on Friday. Every "is it fixed yet?" check after that just asked the same two places again.

My phone and tablet are probably a similar story. One of them had looked at the site recently, through whatever CDN location it reaches.

The one thing that still doesn't add up is Skapi's refresh button. A proper refresh tells every location to drop its copy, and that normally takes a few minutes. Here the cached copy's age kept counting up straight through two refreshes. Skapi's docs say the button "republishes every file", which sounds more like re-copying the files into storage than clearing caches. That's a guess, but it's going in the same email as the Require Login question.

As for "surely nobody renames files to beat the cache": they do, just not by hand. Build tools like Vite and webpack put a hash of the contents in the filename (`app.3f9a2c.js`), so a change means a new name and old caches never matter. This site has no build step, so we'd have had to do it manually. We didn't bother. The stale copies just expire on their own.

## Sessions starting sessions

One last thing that tickled me. Partway through, I wanted three other models to review an old project (that's the [Quantumpizza post](/posts/quantumpizzapanel/)). My OpenRouter key had expired, and a new key only shows up in a fresh session. I asked whether the new session would lose everything we'd talked about. Claude wrote a handoff note into the repo with the findings so far and how I like to work, then **started the new session itself** with that note as its brief. By the time I looked, the panel had already run and it was checking the models' maths.

The other direction happened too. My local Claude, on the Linux box, built Talk to a Cell and then wrote a handoff for the cloud session that runs this chart, because the cloud one can't see my disk. I pasted it across, and the two new stars appeared.

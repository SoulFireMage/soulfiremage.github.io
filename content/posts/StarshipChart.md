---
title: "A star chart of my own GitHub, and a CDN that wouldn't let go"
date: 2026-10-24T10:00:00+01:00
draft: false
description: "I signed up to Skapi with no idea what it was for and told Claude to have a play. It came back with a star map of 39 projects and, eventually, a lesson in how CDN caches work."
tags: ["Claude", "Skapi", "web", "experiments"]
categories: []
authors: []
---

*Written up with Claude from our session logs of 23 and 24 October, I'll be going over it. The site is at [starship-whisperer.skapi.com](https://starship-whisperer.skapi.com) and the code is on GitHub as [skapitest](https://github.com/SoulFireMage/skapitest).*

On Friday I signed up for [Skapi](https://www.skapi.com), which is a sort of backend-in-a-box for static websites, on the free plan. It hands you a CLAUDE.md to give your AI coding tool, and I had no plan whatsoever, so I gave Claude the file and said something along the lines of "I've no idea what I'm doing really, have a play, maybe link all my projects together" and left it to it.

What came back was a star chart. Claude went through my GitHub, around 35 of my own repos once you ignore the forks, plus my Hugging Face Spaces, read every README and turned the lot into a sky. Each project is a star, and the older ones are dimmer because their light left a long time ago, so the 2015 WPF and F# stuff is very faint indeed (fair enough). They're grouped into six constellations by topic, things like The Spinor Drift, Kat's Nebula and The 2015 Fossil Belt. There's a second way to group them as well, by how they were made, which I asked for. One of those groups is "Let The AI Drive", and it only lists projects whose README actually says an AI wrote the code rather than guessing.

Then there are the threads. Where it's the same idea turning up years apart, there's a line between the stars, and following them I found PySpinor, a fork from 2015, then Quantumpizza last year, then spinor-lib this year. A decade of circling spinors, apparently. *Magpie, sue me.*

Every card also has two versions of its summary, a Kat lens which is compressed and pattern first, and a Richard lens which goes step by step. Claude nicked that from my own [threads/](https://github.com/SoulFireMage/Microlearning) learning app, which I can hardly complain about. There's a strip of trivia too, true facts tied to projects, Hamilton carving the quaternion rules into Broom Bridge and so on, with any speculation kept off it.

Today two more went on, [Talk to a Cell](/posts/talktoacell/) and the [MechWorld wiki](/posts/mechworldwiki/), so it's 39 now.

## So what's Skapi for?

In this case, not a lot, and that's ok. The chart itself is plain HTML and SVG that anything could host. Skapi does the two bits a static page can't do on its own, a guestbook called the Starlog and a little spark button on each project, with visitors writing records into a public table and no server of mine anywhere.

It has some rough edges. There's a "Require Login" setting which is on by default and, as far as we can find, has no switch in the dashboard, and while it's on folks can post to the Starlog but can't read it. I've a message ready for Skapi support about that. Hosting was the other thing. I think I've been spoilt by how frictionless the GitHub side is, where you push and the site rebuilds itself, because Skapi wants files uploaded through its dashboard and has no deploy token you could give an Action. My first reaction was that I was about a year too early with Skapi and it wasn't grown up yet. Then it turned out they have an AI connector (an MCP server), and once I'd added that, Claude could register the address and upload the files itself, so no clicking about after all.

Claude checks every upload by downloading it again and comparing it byte for byte with the repo, and that caught something. One apostrophe arrived on the live site as "Rosenblatt���s", which would have sat there in the trivia strip if nobody had looked. Re-uploaded, re-checked, fine.

## The CDN that wouldn't let go

This is the bit I didn't see coming. After this morning's update my tablet showed 39 stars and my phone showed 37, and Claude's own checks from a cloud machine in the US kept getting the old file too, even after pressing Skapi's "refresh CDN" button twice. Claude's suggestion was to rename the files to force it, and my reaction was that this makes no sense, no logical sense at all. A content delivery network that doesn't update itself is not very much use, so there had to be something we didn't know.

There was, and it was sitting in the response headers the whole time:

```
Cache-Control: public, max-age=300, s-maxage=86400, must-revalidate
```

The `max-age=300` means my browser can reuse its copy for five minutes. The `s-maxage=86400` means each CDN location can reuse its copy for a whole day before it has to go and check. So caches do expire, they just take 24 hours about it, and a CDN location only holds a copy at all if somebody near it asked for the file.

The daft part is that the two US locations Claude kept hitting had stale copies because **Claude put them there**. Its "does the live site match the repo?" check ran about two minutes *before* the upload, which cached the old file in Washington for the next 24 hours, and the Chicago copy was a day old, most likely from one of our own tests on Friday. Every "is it fixed yet?" check after that just asked the same two places again. My phone and tablet are probably a similar story, depending on which of them looked at the site recently and through which network.

What still doesn't add up is the refresh button. A proper refresh tells every location to throw its copy away and normally takes minutes, but here the cached copy's age just kept counting up through both refreshes. Skapi's docs say it "republishes every file", which sounds to me more like copying the files into storage again than clearing any caches. That's a guess, but it's going in the same email as the Require Login question.

And as for renaming files to beat the cache, it turns out folks really do that, just not by hand. Build tools like Vite and webpack put a hash of the file's contents into its name, `app.3f9a2c.js` and so on, so any change gets a new name and the old cached copies never matter. This site has no build step, so we'd have had to do it manually, and since the old copies expire on their own anyway, we didn't bother.

## Sessions starting sessions

One last thing that tickled me. Partway through I wanted three other models to review an old project, which became [the Quantumpizza post](/posts/quantumpizzapanel/), but my OpenRouter key had expired and a new key only shows up in a fresh session. I asked whether the new session would just lose everything we'd been talking about. Claude wrote a handoff note into the repo, what we'd found so far and how I like to work, and then **started the new session itself** with that note as its brief. By the time I went to look, the panel had already run and it was busy checking the other models' maths.

It went the other way too. My local Claude on the Linux box built Talk to a Cell and then wrote a handoff for the cloud session that runs this chart, because the cloud one can't see my disk. I pasted it across and the two new stars appeared.

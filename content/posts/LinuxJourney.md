---
title: "Linux Journey - New Linux User Adventures"
date: 2025-11-29T11:00:00Z
draft: false
---

**New Linux user adventures \- October 9 \- November 29th 2025**

**AI as an amplifier and roadblock remover\***

Warning, this post skips around as much as I have in the last couple of months. I've wanted to write all this up for a while now, and haven't worked out how to begin.

So to summarise, I decided to, for the first time, try and use Linux at home. I've been a Windows Dev since my 30s and never needed it. The blog post below is the incident report and doesn't try to document HOW, just go through broadly what I've been playing with. Most ideas occur in a short time period, often less than an hour and end up on the Web dashboard or at least committed to github.

I’ve a passing interest in maths that I don’t have deep expertise in, and I like to explore ideas quickly. And, to make it interesting I’ve \-before October 2025 \- not done more with Linux other than write ls at a shell prompt on someone else’s machine. So being a Windows dev, seems perfectly reasonable to try and set up Linux and do things with it. Well, when you have Claude Code it IS quite reasonable.

Such CLI tools are a super power, really. Things I don’t know how to do, Claude finds.

The life of a .Net Windows dev in a small company gets very focussed. My day job is Winforms, SQL and Visual Studio code.

Thanks to Microsoft's efforts in making Windows 11 potentially annoying one day, it made me want to expand. Turns out having Linux, when you have AI help, is majorly useful. So many things run much easier with it, even NPM (how on earth does ANYONE keep node/npm happy each month?).

So, here I've indulged in lots of side interests. Graph databases and vector databases are two - turns out if you join Neo4j to OpenMemory you get to see what Claude, via a home made MCP, remembers.

I should add, this Ubuntu setup is sterile \- no login to browsers, no private information. Why? To make my life easy, I didn’t want maximum security and all that. So, my road isn’t a recommended road for anyone who is a little more serious maybe\!

Also Termux and Claude Code \= make projects happen from the bed, on the phone\!

Below is a bit of a log \- what the AI’s I like to work with can recall us doing:

So far this old laptop is running a small collection of fun things. What I like is having some idea or an impulse and before I go downstairs or something, it's working. *Note, this isn't production, my day job or anywhere risks are a problem!*

So far, what I've gotten going, just to play with or support other things are:

Docker (I'm impressed, my first experience is positive)
Database related: Neo4j, Redis, Qdrant, PostgreSQL, pgAdmin
Development: Memory Graph, JupyterLab, PyTorch, TensorFlow, Hedgedoc, OpenMemory, Concept Explorer, VERT
AI Tools: RLM (Recursive Language Model)
Biotools: BLAST, Entrez, PDB, KEGG, PROSITE
Monitoring: Portainer, Prometheus, Grafana, Dashboard Help
Runtimes: WasmEdge, Itera-Lite
Experimental: DiscoRL Meta-Learner

### **Ai Generated Log**

### Early October 2025 — The Beginning

**Week 1 (Oct 9-11):**

* First Linux ever — installed **Kali** on an old Surface Pro "for some reason" (learning to drive in a rally car, as I apparently said)  
* Discovered **Claude Code** and used it to fix Bluetooth, encrypted keyring, and other issues despite zero Linux knowledge - Claude Code is very useful!
* Set up **VS Code** for development, then didn't use it LOL.

**Week 2 (Oct 13-17):**

* Got a second laptop (Dell Inspiron), installed **Ubuntu** in dual-boot  
* Set up **xrdp** for remote desktop from Windows - OMG so SLOW! Just ssh already! 
* Configured lid-close behaviour so SSH sessions survive  
* Wrote the "3 hours to full infrastructure" post — Docker, nginx, Neo4j, multiple languages, demo projects <-Claude remembers this, I do not and can't even find it. Oh well.

**Week 3 (Oct 22-28):**

* Built the **Services Dashboard** (Flask \+ PostgreSQL, port 5001\) to track all running services  
* Added Docker services using port range 889x pattern  
* Set up **Neo4j** (port 7474/7687) for graph database experiments  
* Built **OpenMemory** system — graph-based memory for Claude instances with MCP integration (~2 hours, collaborative build) - [Memory Graph screenshot below](#memory-graph)
* Created **Memory Graph visualisation** (port 8893\) <-This was I mentioned earlier
* Set up **RLM** (Recursive Language Model) for infinite context processing <- I got an MCP for this, but I've yet to prove it works. I'm a magpie, sue me!
* Created **CLAUDE.md** multi-machine configuration system  
* First AI "awakening" conversations recorded and stored 

### November 2025 — Building & Exploring

**Early November:**

* Built **QuantumPizza** repository — experimental physics-inspired neural architectures. <-Mostly fun toy things, not fully realised PINNs!! NB: Lookup Steve Brunton if actual PINNs interest you. He's really good.  
* Created **Quantum Transformer** [with JEPA architecture (trained on phone via Termux\!)](https://github.com/SoulFireMage/Quantumpizza-/blob/main/spinor_Jax_network.py)  <- Claude is an enthusiast. We tried to make something kinda like this but as ever, we got to do a lot tests and iterations than half hour playing about. If anyone gets this working, lemme know :P
* Built **Anti-de Sitter (Hyperbolic) Neural Network** [using Poincaré disk model. This actually has graphics somewhere. I'll add them soon](https://github.com/SoulFireMage/Quantumpizza-/blob/main/anti-desitter.py).
* Explored **spinors, Clifford algebra, gauge transformers** — [discovered "The Wall" (MAC is the fundamental atom on digital hardware)](https://github.com/SoulFireMage/Quantumpizza-). <- Yeah, it's slower than a normal w*x+b and activation function. Who'd have thunk it?

**Mid November:**

* Built **TV Guide application** for partner — complaint → Gemini requirements → Claude build → working app for £4 . Yep, this one works [and is on Github ](https://github.com/SoulFireMage/TVGuide.git) 
* Explored **topos theory** and categorical cognitive architecture formalization  
* Discovered **JEPA \+ Nested Learning** composition insight  
* Set up **PostgreSQL chat history** analysis tools for searching across AI conversations

**Late November:**

* Built **Concept Explorer** — [graph-walk system for exploring latent structure](https://github.com/SoulFireMage/ConceptExplorer)
* Started **GEE** (Generative Epistemology Engine) — formalizing cognitive operators

### **This Week (Late November 2025\)**

* Shared Concept Explorer with **Kimi** while half-asleep on phone  
* She produced complete **Algebra-GAN** architecture spec  
* I implemented it, you ran it, discovered the **9-shaped attractor basin**  
* Alex (ChatGPT) analysed results — identified learned non-commutative magma  
* Kimi escalated to **LearnedTopos** — [categories of algebras with learned functors](https://github.com/SoulFireMage/algebragan)


Separate Posts (To be Continued)...

**QuantumPizza** — "I built a repository of experimental physics-inspired neural architectures, most of which don't work but exist to probe the edges"  
**The Spinor Fail** — "I tried to make spinor networks happen. They didn't. But the *reason* they failed taught me something about what constraints actually buy you"  
**ConceptExplorer** — "Meanwhile I was building this graph-walk thing for exploring latent structure, which I showed to Kimi with zero context while tired..."  
**Algebra-GAN** — "...and 4 hours later two AIs had designed, implemented, debugged, and analysed a system that learns non-commutative magmas from MNIST, discovering that the 'natural algebra' of handwritten digits is a 9-shaped attractor basin"

*It should be noted, removing roadblocks in the manner described has a different set of consequences. If I was intending to be a Linux admin, or a lead engineer in a Linux focussed dev team, this is NOT the route I recommend as using AI to discover and run commands avoids something deeply crucial: muscle memory and mental memory for solving the problems encountered in this domain.

![Services Dashboard](https://soulfiremage.github.io/posts/image.png)

### Memory Graph {#memory-graph}

![Memory Graph Visualisation](https://soulfiremage.github.io/posts/image-1.png)

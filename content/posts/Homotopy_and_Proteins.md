---
title: "Homotopy_and_Proteins"
date: 2025-12-09T19:16:54Z
draft: true
---

# A lay person's go at chucking a bit of abstract math at DNA and seeing what unfolds.

This was another ramble, and an odd exploration during a lunch break. So having just learned what the phrase homotopy type theory (HoTT) meant, naturally one decides to attempt to apply it to something useful.

Think of it as a category theory of the structure of relationships between domains. No, no that's no good is it? So, lets go back a stage: category - what is this? Nothing more than the idea that maths is made of relationships of one kind or another. So we use the lens of maths to examine maths itself. For a similar relationship, consider algebra - honestly we learn a couple of algebras at schools. A collection of things, some operators and a few rules. There that'll do. At some point one might talk about what those rules are and all that but for now, it's a little universe of things with rules. So we have boolean algebra - all true and false and binary like; or we have linear algebra where we transform and rotate, dot and translate little spreadsheets of numbers around in a predictable manner. 

So if an algebra is a bunch of things, some operators like + or - etc and some rules such as 'there's an identity element' or 'operations can be reversed' or sometimes 'order doesn't matter', then it may occur to one that you can have an algebra of algebras. And you'd be right. Oddly we also use this concept in programming - it's known as generic programming, and if you've ever seen List<String> or List<T> or similar in C# or Java, you've been there and worn the T-Shirt.

Back to Category theory - I won't dig too deep here, other than to say, this abstraction idea is quite copy and pasteable and here someone did exactly that, to Maths. Category theory studies objects and the arrows (relationships) between them, with rules for how arrows compose. It turns out this simple framework captures structure across wildly different domains—from algebra to topology to programming. Simple as that.

So, why am I rambling round the houses? Well, seems that relationships themselves can also be treated like data too. The arrows in category theory—those relationships between objects. And then functors, which map entire categories to other categories while preserving structure. Turtles on turtles. You can study them directly. 

Homotopy type theory takes this further: types become spaces, and proofs of equality become paths through those spaces. The radical bit? There can be multiple distinct paths between the same two points—different ways for things to be 'the same.' And you can study paths-between-paths, and so on. When I looked at this and then at protein folding—paths through configuration space, multiple routes to the same structure—something clicked.

So, we took this idea, whilst eating chicken soup, and mulled over the least energy principle a little in relation to DNA and protein folding. Just making a random connection. This does happen occasionally, but rarely does it occur to us that it's worth writing down. In essence, if these paths can be studied, might it be plausible to study them in relation to what happens between bits of DNA and the final destination - quaternary protein structure? I admit there are plenty of gaps, not only in this write up but in our paper. But that is ok, the intent here is provocation of exploration, not some grand claim of having solved quite a tricky problem. It should be easy enough to disprove, given sufficient compute time and knowledge of the domain.

So, the paper is provided as an original source document and a PDF. At one point I did consider publishing somewhere more than my own website, but seems credentials carry more weight so for now, I'll publish here and share directly. If it happens to land conceptually somewhere useful to a working researcher, I'd be glad to hear of it. I've attempted to give credit where it's due in the paper.

[Homotopic Invariant in Protein Sequences PDF](content/Papers/Homotopical_Invariants_in_Protein_Sequences%202.1.pdf)

[Homotopic Invariant in Protein Sequences TeX version](content/Papers/Homotopical%20Invariants%20in%20Protein%20Sequences%202.1.tex)

---
title: "SQL_Symbols_Proofs"
date: 2025-12-10T19:41:16Z
draft: true
---

# Math Notation, Proof and SQL

I'm not a formally trained mathematician and what I know I picked up since I was 16, informally, during short bursts of enthusiasm from time to time. This grew once I learned to treat functions as data in functional programming. 

It is code that gave me the key to more interesting maths than memorizing rules. Some people think of maths as a boring collection of formulas to memorise and that its difficult.

To me, ever since Killmath (https://worrydream.com/KillMath/) by Bret Victor and Keith Devin's little intro on YouTube, I simply see it as a science of patterns and relationships. It does have a rigorous, abstract tight language of its own and I cannot claim to read that language with huge fluidity but the symbolic forms used are the means of being very exact about a relationship. For me, these are not yet the interesting part - I don't have the faculty with them for that.

What is interesting are the ideas, the feel of how different concepts come together. The notion that relationships themselves have a structure, or that you can return a relationship not a number from a function. A function - ah that most basic piece of maths - a little machine that gives you the same something back given the same input, every time. That something is usually considered a number, for most of us mortals. Unless you look at graphs with the curious property of changing the rate of changing their slope as they progress. Then I found out that this is only described by returning the relationship at that point in time. There are lots of things that work in a similar way - you don't get a number, you get a Thing, a Thing that does things.

And turtles can indeed go all the way down. It is possible to return a Thing that returns a Thing that Returns a Thing that then returns,maybe a number. Don't ask what else a Thing may return...the answer may surprise you, or perhaps not if you've read this far. It turns out you can have a Thing that returns a geometry, or an algebra or a myriad other things found in the wild and abstract places of maths universe (ask later about other maths universes, a topoi for another time).

Below I wish to cover something simple for my future self, plus any interested readers that make it this far.

The first is simply a basic attempt to relate some of the mystery maths symbols to a language I know very well: SQL. One of the keys to my own understanding has been this language, one that is based on the bedrock of maths, Set Theory. As ever, SQL is pragmatic and I'm given to understand it is not perfect set theory. But close enough.

The second is an attempt to tackle one of my own biggest weaknesses at time of writing: Proofs. As I write, I confess this - I've never written one, and not fully understood one. At least not one written in the tight formal language of maths. As you will see, conceptually they can be understood through the lens of SQL and ordinary everyday language.

This is the heart of this post, so bear with me.

| Math               | SQL Equivalent                      | Meaning           |
| ------------------ | ----------------------------------- | ----------------- |
| $(x \in A)$        | `WHERE x IN (SELECT ...)`           | x is in A         |
| $(x \notin A)$      | `WHERE x NOT IN (...)`              | x not present     |
| $(A \subseteq B)$    | `every row of A is in B*`            | subset            |
| $(A \setminus B)$    | `A EXCEPT B`                        | difference        |
| $(A \cap B)$         | `INNER JOIN on matching keys**`                        | intersection      |
| $(A \cup B)$         | `UNION`                             | union             |
| $(A \times B)$       | `CROSS JOIN`                        | Cartesian product |
| $(\exists x : P(x))$ | `EXISTS (SELECT 1 WHERE P)`         | some row matches  |
| $(\forall x : P(x))$ | `NOT EXISTS (SELECT 1 WHERE NOT P)` | all rows match    |
| $(P \land Q)$        | `WHERE P AND Q`                     | both true         |
| $(P \lor Q)$         | `WHERE P OR Q`                      | at least one      |
| $(\neg P)$           | `WHERE NOT P`                       | negation          |
| $(P \to Q)$          | no row satisfies `P AND NOT Q`      | implication       |

The quantifier equivalence is especially important:


$∀x P(x) means ¬∃x ¬P(x)$
 ```sql
 NOT EXISTS (
    SELECT 1 FROM table WHERE NOT P
)
```
```sql
--* This is another way to view subset
NOT EXISTS (SELECT * FROM A EXCEPT SELECT * FROM B)
```
```sql
---**  This is the more precise definition for intersection in SQL
SELECT * FROM A INTERSECT SELECT * FROM B
```
# Proofs in Symbol, SQL and English

A personal reference

## DIRECT PROOF

### Goal

$P \to Q$

### SQL

Show:

```sql
-- No row has P but not Q
NOT EXISTS (
    SELECT 1 FROM t WHERE P AND NOT Q
);
```

### English

Assume P, show Q follows.

---

## CONTRAPOSITIVE

### Goal:

$P \to Q$

Prove instead:

$\neg Q \to \neg P$

### SQL:

Show:

```sql
-- No row has NOT Q and P
NOT EXISTS (
    SELECT 1 FROM t WHERE NOT Q AND P
);
```

### Reason

Same WHERE clause, different viewpoint.
Usually much easier.

---

## CONTRADICTION

### Goal

Prove (P).

Assume ¬P and show this leads to impossible conditions.

SQL analogy:

```sql
-- We assume a row exists that contradicts something fundamental
SELECT * FROM impossible_view;
-- contradiction is like a query returning rows when it never should
```

Example impossible condition:

```sql
WHERE x = 5 AND x = 7;
```

Contradiction = WHERE FALSE.

---

## CASE SPLIT

### Goal:

Prove R.

Check both cases:

* when P is true
* when P is false

SQL:

```sql
SELECT * FROM A WHERE P
UNION ALL
SELECT * FROM A WHERE NOT P;
```

If conclusion R holds in both branches, you're done.

---

## EQUIVALENCE PROOF

To prove (P \leftrightarrow Q):

Prove *two implications*:

$P \to Q \quad \text{and} \quad Q \to P.$

SQL:

```sql
-- check no row is P and NOT Q
NOT EXISTS (SELECT 1 WHERE P AND NOT Q)
AND
-- check no row is Q and NOT P
NOT EXISTS (SELECT 1 WHERE Q AND NOT P)
```

---

## EXISTENCE PROOF

### Goal:

$\exists x,\ P(x)$

SQL:

```sql
EXISTS (SELECT 1 FROM table WHERE P)
```

You literally just provide a witness.

In maths:
“Let (x = 3). Then (P(x)) is clearly true.”

---

## UNIVERSAL PROOF

To show:

$\forall x,\ P(x)$

SQL:

```sql
NOT EXISTS (SELECT 1 FROM table WHERE NOT P)
```

This one is absolutely fundamental.

---



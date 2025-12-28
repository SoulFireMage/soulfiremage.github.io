---
title: "VibeCode"
date: 2025-12-28T12:37:03Z
draft: true
---
Written by Claude as an answer to a Threads question. This takes my rough threads notes and builds it out to a more detailed answer.

# Top-Down Vibe Coding: A Planning-First Approach


Vibe coding's failure mode is seductive: you describe what you want, the AI produces code, it *seems* to work, and then three modules later everything is tangled spaghetti that fights itself. The problem isn't the AI—it's skipping the thinking that should precede the coding.

Top-down planning inverts this. You use AI as a **thinking partner first**, a **code generator second**. The goal is to arrive at implementation with a coherent mental model already in place.

---

## The Four Phases

### Phase 1: Requirements Crystallisation

**What you do:** Write everything you want your project to be. Not just features, but constraints, preferences, and priorities.

For an IDE, this might include:

- **Performance constraints:** Startup time under 2 seconds, responsive with 10,000+ line files, memory footprint under 500MB
- **Implementation language preferences:** What you know, what you're willing to learn, what the domain suggests
- **Target languages:** What will people edit with this IDE? Just Python? Multiple languages? Which ones?
- **Plugin architecture:** Do you want extensions? How sophisticated?
- **Platform requirements:** Windows only? Cross-platform? Web-based?
- **Non-negotiables vs nice-to-haves:** What's the minimum viable product vs the dream?

**Then:** Give this wishlist to a capable LLM with the explicit framing:

> "I want to build [X]. Here are my requirements and constraints. I need a top-down approach to achieving this goal. Don't give me code—give me architecture, trade-offs, technology options, and a breakdown of the major components I'll need to build."

**What you get back:** A substantial document—possibly several pages—covering architecture patterns, technology choices, component breakdowns, and trade-offs you hadn't considered.

**Critical understanding:** This document is **not your next prompt**. It's reading material. You're using it to:

- Feed your intuition about what's actually involved
- Identify what resonates and what feels wrong
- Surface questions you didn't know to ask
- Understand trade-offs before committing to choices

Take time with this. Sleep on it if needed. The AI helped you *think*; now you need to actually do the thinking.

---

### Phase 2: Architectural Decomposition

With intuition now informed, you address structural questions. These feel abstract but they determine everything downstream.

**Visualisation first:**

Before anything else, externalise your mental model. Medium doesn't matter—paper sketch, Balsamiq wireframe, Figma mockup, screenshot collage with annotations, or boxes and arrows in any drawing tool.

Ask yourself:
- What are the major visual regions?
- What does each region contain?
- How do they communicate with each other?
- What's the user's flow through the interface?

This isn't pixel-perfect design. It's structural thinking made visible so you can reason about it.

**Platform decision:**

This choice cascades into almost everything else:

| Approach | Trade-offs |
|----------|------------|
| **Electron** | Easy, huge ecosystem, heavy (Chromium + Node), cross-platform |
| **Tauri** | Lighter than Electron, Rust-based backend, steeper learning curve |
| **Qt** | Native feel, C++ or Python bindings, cross-platform, dated ecosystem |
| **Native per-platform** | Best performance, maximum effort, platform-specific code |
| **Web-based** | Runs anywhere, Monaco editor exists, always online, latency concerns |

There's no universally correct answer. Your constraints from Phase 1 should guide this.

**Implementation language:**

Notice we're asking this *after* you've read the AI's analysis and made a platform decision—not before. Your gut feeling is now informed rather than naive.

Consider:
- What do you already know?
- What does your platform choice suggest or require?
- What will you need to learn regardless?
- What does the problem domain reward? (Performance-critical code has different optimal choices than UI glue code)

---

### Phase 3: Module Identification

An IDE is inherently modular. Before any code exists, identify your modules and understand their boundaries.

**Core modules for a typical IDE:**

| Module | Responsibility |
|--------|----------------|
| **Text Buffer** | The actual data structure holding file contents, handling insertions, deletions, undo/redo |
| **Editor View** | Rendering the buffer, handling cursor/selection, viewport scrolling |
| **Syntax Highlighting** | Lexing/parsing for colour, language-aware tokenisation |
| **File System** | Project trees, file watching, save/load operations |
| **Command System** | Keybindings, command palette, action dispatch |
| **UI Shell** | Tabs, panels, status bar, layout management |
| **Intellisense** | Autocomplete, go-to-definition, hover information |
| **Extension System** | Plugin loading, sandboxing, API surface for extensions |

Each module is a **mini-project** with its own planning cycle. You're not implementing yet—you're understanding the shape of the problem.

**Key questions per module:**
- What does this module need to *know*?
- What does this module need to *do*?
- What does it *expose* to other modules?
- What does it *consume* from other modules?
- What are the performance constraints specific to this module?

---

### Phase 4: Iterative Deepening

*Now* you can begin prompting for code, but you do it per-module, and still architecture-first within each module.

**The pattern:**

1. **Interface first:** Prompt for how this module should be called and what it should expose. What's the API? What are the data types flowing in and out?

2. **Review and adjust:** Does this interface play well with adjacent modules? Does it hide implementation details appropriately? Revise before proceeding.

3. **Skeleton implementation:** Prompt for the structure—classes, functions, their signatures—without full implementation. This is scaffolding.

4. **Incremental implementation:** Fill in one piece at a time. Test as you go. Keep each prompt focused.

5. **Integration:** Connect to other modules. This is where your earlier interface design pays off or punishes you.

**The discipline:** Resist the urge to prompt for "the whole module." Keep prompts focused. Review outputs critically. The AI doesn't know your larger context unless you maintain it.

---

## The Meta-Lesson: Sequencing AI Use

You're not avoiding AI assistance—you're sequencing it correctly:

| Phase | AI Role | Your Role |
|-------|---------|-----------|
| Requirements | Expands your thinking, surfaces options | Decides what actually matters |
| Architecture | Analyses trade-offs, suggests patterns | Makes structural commitments |
| Module Design | Proposes interfaces, identifies dependencies | Ensures coherence across modules |
| Implementation | Generates code, debugs, refines | Reviews, tests, maintains vision |

Jumping to row 4 before rows 1-3 is precisely why vibe-coded projects collapse into incoherence.

---

## Worked Example: "QuickEdit" - A Minimal Fast IDE

Let's walk through this process concretely for a hypothetical project.

### Phase 1: The Wishlist

**Project vision:** A minimal, fast code editor focused on Python development. Not VS Code—something that starts instantly, stays responsive, and does fewer things well.

**Requirements written out:**

```
I want to build a lightweight IDE primarily for Python development.

Performance constraints:
- Cold start under 1 second
- Smooth editing with files up to 50,000 lines
- Memory under 200MB typical usage

Must-have features:
- Syntax highlighting (Python initially, extensible later)
- Basic autocomplete (local symbols, not full LSP initially)
- File tree sidebar
- Multiple tabs
- Find/replace with regex
- Keyboard-driven (command palette)

Nice-to-have:
- Git integration
- Integrated terminal
- Debugger integration

Implementation preferences:
- I know Python well, willing to learn Rust
- Must run on Windows and Linux
- Native feel preferred over web-like

Explicit non-goals (for v1):
- Full Language Server Protocol support
- Plugin/extension system
- Collaborative editing
```

**Prompt sent to AI:**

> "I want to build a lightweight Python IDE with these requirements [paste above]. I need a top-down approach. Don't give me code—give me architecture options, technology trade-offs, component breakdown, and what I should think carefully about before committing to implementation."

**What comes back (summarised):**

The AI returns several pages covering:
- Editor core options (Scintilla, custom, tree-sitter for parsing)
- GUI framework comparison (Qt, GTK, egui, native platform APIs)
- Why Rust + egui might match your constraints
- Why Python + Qt might be faster to develop
- The text buffer problem (rope data structures, piece tables)
- How syntax highlighting actually works
- Warning about scope creep from "basic autocomplete"

**What I do with this:** Read carefully. Notice I hadn't thought about text buffer data structures—that's important for large files. The Rust + egui suggestion is interesting but might be too much new learning. Python + Qt might get me to something working faster. The autocomplete warning is noted—maybe I defer that to v1.1.

I don't prompt again yet. I think.

---

### Phase 2: Architectural Decisions

**After reflection, my decisions:**

- **Platform approach:** Qt with Python (PyQt6 or PySide6). Native feel, cross-platform, I can be productive quickly.
- **Text buffer:** Start simple (Python strings with line array), but design interface so I can swap in a rope/piece-table later if needed.
- **Syntax highlighting:** Tree-sitter. It's fast, accurate, and has a Python grammar ready.
- **No autocomplete in v1.** Scope control. Get editing solid first.

**Sketch created:**

```
+-----------------------------------------------+
|  Menu Bar                                     |
+-----------------------------------------------+
|  Tab Bar  [file1.py] [file2.py] [+]           |
+----------+------------------------------------+
|          |                                    |
|  File    |                                    |
|  Tree    |       Editor Area                  |
|          |       (syntax highlighted)         |
|          |                                    |
|          |                                    |
+----------+------------------------------------+
|  Status Bar: Ln 42, Col 7 | Python | UTF-8   |
+-----------------------------------------------+
```

Not fancy. But now I can see the major regions and think about what each needs.

---

### Phase 3: My Modules

Based on the above, here's my module breakdown:

| Module | Notes |
|--------|-------|
| **TextBuffer** | Holds file content, line indexing, modification tracking, undo/redo stack |
| **EditorWidget** | Qt widget rendering buffer, cursor management, scrolling, text input |
| **SyntaxEngine** | Tree-sitter wrapper, provides token spans for highlighting |
| **FileTree** | Directory scanning, tree widget, click-to-open |
| **TabManager** | Multiple open files, tab bar, active tab tracking |
| **CommandPalette** | Fuzzy-find commands, keyboard shortcut dispatch |
| **FindReplace** | Search UI, regex engine integration, result navigation |
| **StatusBar** | Current position, file type, encoding display |

Each of these is a contained problem. I can think about each one's interface before implementing any.

---

### Phase 4: Implementation (Example for One Module)

Let's trace through TextBuffer as an example.

**Step 1: Interface design prompt**

> "I'm building a text buffer class for a code editor in Python. It needs to:
> - Store file contents efficiently
> - Provide line-based access
> - Track modifications (dirty flag)
> - Support undo/redo
> 
> Design the public interface—method signatures and their semantics—without implementation. I want to review the API before building it."

**What I get:**

```python
class TextBuffer:
    def __init__(self, content: str = "") -> None: ...
    
    # Content access
    def get_line(self, line_num: int) -> str: ...
    def get_text(self) -> str: ...
    def get_range(self, start: Position, end: Position) -> str: ...
    def line_count(self) -> int: ...
    
    # Modification
    def insert(self, position: Position, text: str) -> None: ...
    def delete(self, start: Position, end: Position) -> None: ...
    def replace(self, start: Position, end: Position, text: str) -> None: ...
    
    # State
    def is_dirty(self) -> bool: ...
    def mark_clean(self) -> None: ...
    
    # Undo/Redo
    def undo(self) -> bool: ...  # Returns False if nothing to undo
    def redo(self) -> bool: ...
    def can_undo(self) -> bool: ...
    def can_redo(self) -> bool: ...

@dataclass
class Position:
    line: int
    column: int
```

**My review:**

- Looks reasonable
- Missing: event/callback for "content changed" (the view needs to know)
- Missing: batch operations for performance? (Maybe not needed yet—YAGNI)
- The Position class is good—explicit rather than tuple-juggling

I'd ask for the change notification addition, then move to implementation.

**Step 2: Skeleton implementation**

> "Now implement the skeleton—class structure, method stubs, and the undo/redo stack design—but leave complex logic as `pass` or `...` for now."

**Step 3: Incremental fill-in**

Each method becomes a small, focused prompt:

> "Implement the `insert` method. It should: update the internal line array, push to undo stack, set dirty flag, emit change notification."

And so on, testing each piece.

---

## Key Mindset Shifts

1. **The AI is a thinking partner, not an answer machine.** Its first output is input to *your* thinking, not a final solution.

2. **Planning is not overhead—it's the work.** Time spent on architecture is repaid many times in implementation.

3. **Scope is your enemy.** Every feature you "might need later" is debt you're taking on now. Be ruthless about v1.

4. **Interfaces before implementations.** How modules talk to each other is more important than how they work internally. Get that wrong and everything is painful.

5. **Small prompts, frequent review.** Large prompts produce large outputs you can't properly evaluate. Keep the feedback loop tight.

---

## Further Reading

- *A Philosophy of Software Design* by John Ousterhout—on managing complexity
- *The Pragmatic Programmer*—on iterative development and avoiding big-bang integration
- Tree-sitter documentation—if you're serious about editor syntax work
- Your chosen GUI framework's architecture guide—before you write widgets

---

*Document by Richard, with Claude as thinking partner.*
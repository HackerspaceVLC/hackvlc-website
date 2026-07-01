---
title: "KiCad 10: what's new and why it's great for your boards"
description: "KiCad 10 keeps consolidating free software PCB design as a serious choice. We review the most useful improvements for designing boards in a makerspace: routing, design rules, fabrication outputs and the 3D viewer."
date: 2026-07-13T00:00:00Z
tags: ["kicad", "pcb", "open-source", "electronics"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
A few years ago, designing a printed circuit board in free software was almost an act of faith. KiCad existed, but it lacked polish. Today the story is different: KiCad has grown into a serious tool, able to take a project from the first schematic all the way to fabrication files, without paying a licence and without asking anyone's permission. Version 10 keeps moving in that direction, and it is worth looking at what improves for those of us who design boards in a makerspace.

## Routing that gets in the way less

Routing, the job of laying traces between components, is where you lose the most time. Recent versions have improved the interactive router considerably: it shoves neighbouring traces out of the way, respects your widths and clearance and defends itself better when space gets tight. On dense boards this shows up mostly in how often you have to redo a trace by hand. There is also more control over tuning and length matching, which matters once you deal with fast memory or signals that need to arrive together.

## Custom design rules

For a long time design rules were a fixed menu of values. Now you can write your own rules in a simple language, something close to programming the conditions your board must meet. Want two specific nets to be spaced twice as far apart because of noise? Want a particular connector to always have a certain solder pad? You define it once and the checker warns you if you break it. For learners this teaches good habits; for experts it saves revisions.

## Teardrops and other welcome details

Teardrops, those small thickenings where a trace meets a via or a pad, are now handled in a more integrated way. They make the board more resilient during manufacturing and prevent etching defects from leaving a trace hanging. It is the kind of improvement that means nothing to you until a board arrives broken at a weak junction and you understand why it matters.

## More complete fabrication outputs

When you send a board to be made, Gerbers remain the standard, but more and more manufacturers accept modern formats like ODB++ or IPC-2581, which pack the whole board into a single coherent file. KiCad has improved these exports, which reduces the chance of the manufacturer misreading your intent. The bill of materials and the assembly guide have also gained options, useful if you ever take a board to assembly.

## The 3D viewer and mechanical integration

Being able to see your board in 3D before manufacturing saves disappointment: you check whether parts collide, whether the connector lands where you thought and whether the board fits its case. STEP export lets you bring the model into your mechanical CAD and check the whole assembly. For 3D printing cases in the makerspace, this bridge between electronics and mechanics is gold.

## Hierarchical and multi-sheet schematics

When a project grows, fitting everything on one sheet becomes unreadable. Hierarchical and multi-sheet schematics let you organise blocks, reuse subsystems and keep order. Bus and cross-sheet label handling keeps improving, which is what finally convinces you when a project moves from prototype to something serious.

## Why it matters in a makerspace

KiCad's great value in a hackerspace is not just that it is free. It is that anyone can open it, copy your files, understand your board and improve it. That is the culture we stand for. If you have always wanted to design your first board and paid software put you off, KiCad 10 is a perfect excuse to start.

If you want to get started, Hackerspace Valencia runs KiCad workshops from time to time. Come to an open doors session and we will set you up with a simple example so you leave with your first board designed.

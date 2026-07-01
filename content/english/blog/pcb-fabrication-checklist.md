---
title: "Checklist before sending your PCB to fabrication"
description: "Sending a board to fabrication has a catch: the expensive mistakes show up after you have paid. This checklist covers what to review before generating Gerbers, from DRC to thickness and finish."
date: 2026-08-03T00:00:00Z
tags: ["pcb", "fabrication", "kicad", "electronics"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
There is a magic moment in every electronics project: when you send your board to be made and wait for the package to arrive. There is also a painful moment: when it arrives, you put it together and it does not work because you missed a detail in the design. Most of those disappointments are avoidable with a careful review before you hit the order button. This is the checklist we follow at the makerspace before sending a board out.

## Run the design rule checker

First and most obvious, and still forgotten. Run the DRC, the design rule checker, and do not wave away the warnings. Every error or warning is a clue to something that can go wrong: two traces too close, an unconnected via, a pad spilling over the edge. If your program lets you write custom rules, set them to the real values of your manufacturer, not the generic defaults.

## Know your manufacturer's capabilities

Every manufacturer has a limit of what it can do well: minimum trace width, minimum via size, minimum copper spacing, layer count and copper weight. Those figures are not opinions, they are a data sheet. If you design below what they offer, they either reject the order or build it hopefully and sometimes badly. Before you start, look up those numbers and fold your design around them.

## Review the ground plane

A solid ground plane on the bottom layer improves noise, heat dissipation and signal integrity. Trouble arrives when that plane is full of cuts: traces that slice it, holes that break it into islands, connections that force return currents onto long detours. Look at your ground plane and check it is genuinely continuous where it should be. A look at how return currents flow saves a lot of weird behaviour later.

## Mind the vias

Vias have their own rules. The hole diameter and the copper ring must respect the manufacturer's minimums. Vias that sit under surface mount parts can cause trouble if you do not tent them, because solder paste can wick down the hole. Decide which vias to tent, meaning cover with solder mask, and which to leave open for access or cooling.

## Solder mask and silkscreen

The silkscreen, that white text layer on top of the board, looks decorative but it is your assembly manual. Put clear references on every part, mark the polarity of electrolytic capacitors and diodes, the pin one of every chip and the orientation of connectors. And check the text does not land on pads, because there the ink will not print and only confuses. A well silk screened board assembles much faster and with fewer mistakes.

## Connectors and mechanics

Before ordering, check that connectors land where they should, that pin spacing is correct and that the board fits its space, mounting holes included. A connector placed backwards or shifted half a millimetre can stop the board from fitting its case. If you use polarised connectors, make the pin one square clearly visible.

## Fabrication parameters

When you order, you decide several details that affect price and outcome. Board thickness, usually one point six millimetres. Copper weight, normally one ounce. The surface finish, which can be hot air leveled tin, gold over nickel or others, each with its own balance of price, solderability and durability. The mask colour, which is free but changes the look. And the silkscreen colour. Pick what you need, not what looks flashiest.

## Fiducials and panelisation

If you will assemble parts by machine, your board needs fiducials, those reference marks the machine uses to orient itself. And if you make several units, panelising, grouping several boards into a larger panel, saves money. Ask your manufacturer how it prefers this done.

## One last review with a cool head

When you think you are done, save the project and let it rest a day. Come back with a cool head and walk through it again. The silliest mistakes show up on that second pass. And if you can, get another person to look. Four eyes see more than two, and at the hackerspace we know that well.

If it is your first board and the order button feels daunting, bring it by Hackerspace Valencia first. We will give it a look between several of us and surely find some detail you, from staring too long, no longer see.

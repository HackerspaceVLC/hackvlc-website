---
title: "LDO or DC/DC: which regulator fits your circuit"
description: "Choosing how to power your circuit is not trivial. An LDO is cheap and clean, a DC/DC is efficient but noisy. We cover when each one wins and what to check before deciding."
date: 2026-07-27T00:00:00Z
tags: ["electronics", "power", "pcb", "ldo", "dcdc"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
Every piece of electronics needs to be fed the right voltage. And you almost never have it directly: the battery gives too much, USB delivers five volts and your chip wants three point three. Something has to bring that voltage down, and that is where two families of regulators you should know come in: the linear ones, called LDOs, and the switching ones, the DC/DC. Choosing badly can leave you with a circuit that overheats, with poor battery life, or full of noise.

## How each one works

An LDO is a linear regulator. It takes the input voltage and, put simply, burns off the surplus as heat to deliver the voltage you want at the output. It is simple, cheap, small and very clean: the output voltage is nearly flat with no ripple. Its big flaw is efficiency. Everything surplus turns into heat, so the bigger the gap between input and output and the higher the current, the more energy you waste.

A DC/DC, on the other hand, is a switching converter. It stores energy in an inductor and transfers it in chunks, which lets it step down, step up or invert voltages with high efficiency, often above eighty or ninety percent. In return it is more complex: it needs that inductor, an output capacitor and a careful layout, and it adds ripple and noise to the output.

## Efficiency and heat

The rule is direct. If your input and output are close and the current is low, an LDO wastes almost nothing and its simplicity wins. But if you want to drop from a lithium battery, sitting around four volts, down to three point three for your microcontroller, and you draw several hundred milliaps, an LDO can be throwing away a third of your energy as heat. There a DC/DC stretches your battery noticeably.

## Noise and sensitivity

Here the LDO shines. Because it does not switch, its output is very clean, which is essential when you power delicate analogue, a precision sensor or an analogue to digital converter. A DC/DC always adds some ripple to its output and radiates some noise, which can upset sensitive measurements or radio receivers. If your design mixes noisy digital and fine analogue, the usual approach is a DC/DC for the raw rail and an LDO after it to clean the line that feeds the analogue side.

## Quiescent current

For devices that spend most of their lives asleep, the current the regulator itself draws doing nothing matters as much as its efficiency under load. Some modern LDOs have an extremely low quiescent current, ideal for battery circuits that wake rarely. A DC/DC can have more parasitic draw, though specific low power models exist. If your circuit lives asleep ninety nine percent of the time, study this number carefully.

## Size, price and complexity

The LDO wins by a mile here. The parts are tiny, almost free and almost impossible to mount wrongly as long as you respect their capacitors. The DC/DC needs more parts, an inductor that takes up space and a careful layout, because the traces carrying switching currents are antennas and sources of trouble if you lay them out carelessly. For a quick prototype or a small run, that simplicity is valuable.

## How to decide in practice

Ask yourself four things. Is the gap between input and output large and the current high? Then look at a DC/DC. Are you powering something noise sensitive? Consider an LDO, alone or after a DC/DC. Does the device sleep almost all the time? Compare quiescent currents. Is it a simple prototype where efficiency is not critical? An LDO saves headaches.

There is no universal winner. In many serious projects both live together: a DC/DC for the long haul from the battery and an LDO to clean the final stage. Knowing why you place each one is what separates a mediocre power design from a good one.

If you are deciding how to power your project and you are unsure, drop by Hackerspace Valencia. Together we look at your voltage, current and battery life needs and help you pick the regulator that actually suits you.

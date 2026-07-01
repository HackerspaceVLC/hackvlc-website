---
title: "Common mistakes when designing an ESP32 PCB (and how to avoid them)"
description: "The ESP32 is great, but its board has traps: the antenna, decoupling, boot pins and power. We walk through the typical mistakes when designing an ESP32 PCB and how to avoid them."
date: 2026-07-06T00:00:00Z
tags: ["esp32", "pcb", "electronics", "kicad"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
The ESP32 has become the brain of half the maker projects around. It is cheap, it brings WiFi and Bluetooth for free, and there are tutorials for almost everything. But there is a huge gap between a project on a breadboard and your own printed circuit board. That jump is where mistakes hide, the kind you only spot when the board arrives and simply refuses to boot.

Let us walk through the most common ones so your next PCB lights up on the first try.

## Neglecting the antenna area

The WROOM or WROVER module carries a printed antenna on its edge. That antenna needs clear space, free of copper and metal on every layer, or the WiFi range collapses. The right move is to respect the keepout area the manufacturer documents and to keep traces, ground planes and components away from that zone. Do not mount the module inside a closed metal box either. It sounds obvious, but this is the number one mistake and the hardest to diagnose, because the board works, just with lousy range.

## Decoupling capacitors placed far away

The ESP32 is hungry. During WiFi transmit bursts it can pull hundreds of milliamps in microseconds. If the power does not arrive clean, the chip resets without warning. Each VCC/GND pair on the module wants its decoupling capacitor right at the pin, usually a small 100 nF one plus a larger 10 µF nearby. If you place them "somewhere over there", you are asking for random resets. Close means millimetres from the pin, not three centimetres away.

## Powering 3.3 V the wrong way

The ESP32 runs at 3.3 V, not 5 V. Feeding 5 V into the power pin is the fastest way to kill it. And even at the right voltage, the regulator must deliver enough current for those bursts. A small 100 mA LDO will not cut it. Expect the system to demand on the order of 500 mA in spikes, and pick the regulator accordingly. If you run on batteries or care about efficiency, a switching regulator will save you heat and extend battery life.

## Forgetting the boot pins

During power-up, several pins must sit at a defined level so the chip boots normally and reads its flash. The usual suspects are GPIO0, GPIO2, GPIO5, GPIO12 and GPIO15. If your design uses one of them as an input tied to a button or a sensor that pulls it the wrong way, the board will not boot or will come up in a strange mode. GPIO12 in particular, if held high at boot, changes the internal flash voltage and can brick the module. The rule is simple: check the manufacturer's strapping table before assigning those pins to anything critical.

## Not preparing the reset and programming circuit

To flash comfortably over USB you want the EN and BOOT lines to be driven automatically from the USB to UART converter. This is done with two transistors and a couple of resistors, the auto-reset circuit. If you skip it, you will be pressing buttons every time you want to program, and that gets old fast. Put a pull-up on EN too, plus a tiny capacitor to avoid noise resets.

## Not thinking about heat

The ESP32 gets warm, especially with WiFi active. A continuous ground plane under the module helps spread that temperature. Split ground planes or planes full of cuts turn your board into a small heater with signal integrity problems. Where you can, design with a solid ground and keep return currents on short paths.

## In practice

Almost every scare with an ESP32 board boils down to four things: respect the antenna, put the capacitors where they belong, feed it the right voltage and current, and do not abuse the boot pins. Get those right and the rest usually falls into place.

If you are new to board design and get stuck, drop by Hackerspace Valencia on any open doors Tuesday. Together we will look over your schematic and help you avoid paying for a board that will not boot.

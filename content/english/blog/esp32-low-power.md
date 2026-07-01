---
title: "How to cut your ESP32's power draw: deep sleep and other tricks"
description: "The ESP32 is powerful, but it also drinks current. If you run it on batteries, you want it asleep. We explain deep sleep, wake sources and how to measure your project's real consumption."
date: 2026-07-20T00:00:00Z
tags: ["esp32", "low-power", "electronics", "iot"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
The ESP32 is a marvel for connected projects, but that power comes at a price: in full activity, with WiFi transmitting, it can pull several hundred milliamps. If it is plugged into the wall, you do not care. But if you want to run it on batteries or a solar panel, those numbers kill your battery life in days. The good news is that the chip knows how to sleep, and when it sleeps, it barely sips current.

## First: measure, do not guess

Before touching anything, find out how much your setup actually draws. You want a low current meter or, better, a small sense resistor in series with the supply, across which you read the voltage drop with an oscilloscope or a sensitive multimeter. Without measuring you are flying blind. A board you swore was sitting at microamps can have a power LED quietly eating twenty milliamps forever.

## Switch off what you do not use

Low consumption starts with being brutal about what stays powered. The power LED on many dev boards draws more than a sleeping ESP32. If you can remove it or cut its trace, do it. The same goes for auxiliary regulators, the USB to UART converter and any circuit that keeps busy while your ESP32 sleeps. In low power mode the chip drops to a few microamps; the problem is usually everything around it.

## Deep sleep is your best friend

In deep sleep the ESP32 stops its cores and keeps only the bare minimum alive: the RTC and the memory that holds state. Consumption drops to tens of microamps under ideal conditions. To enter it, you make one call from your program saying how long to sleep or which event should wake it. On wake the chip boots from scratch, so you must save in RTC memory any data you want to keep across sleep cycles.

## How to wake it

You have several ways to rouse it. The most common is the RTC timer: you sleep it, say, ten minutes, and at the ten minute mark it wakes, measures, transmits and sleeps again. That way a weather station reporting every few minutes can spend close to zero percent of its time active. You can also wake it with an external pin, with the touch pins or with an interrupt, useful for a presence sensor or a button. And of course you can combine several sources.

## Light sleep when you need to react fast

Light sleep keeps more things alive and wakes faster, but draws more than deep sleep. It is interesting when your device must react in milliseconds and cannot afford the reboot of deep sleep. For most battery projects, though, deep sleep wins hands down.

## Drop the clock and switch the radio off on purpose

Even while awake you can spend less. Lowering the clock frequency reduces core consumption when you do not need full speed. And the radio, WiFi or Bluetooth, should only be on when you are about to transmit. Power it up, send your data, power it down and sleep again. Letting it scan for networks all the time is the fastest way to drain a battery.

## The ULP coprocessor

The ESP32 includes an ultra low power coprocessor that can keep working while the main cores sleep. It is a little more advanced to program, but it lets you read a sensor periodically and wake the main system only when the data meets a condition. For autonomous monitoring projects it is the ultimate tool to stretch a battery.

## In short

The path to a frugal ESP32 has four steps: measure real consumption, kill the peripheral leaks, send the chip to deep sleep and power the radio only to transmit. With that, a project that lasted days can last months.

If you are building something on batteries and the numbers do not add up, bring it to Hackerspace Valencia. We will look at consumption with the multimeter and the oscilloscope and help you hunt down the leaks.

---
title: "Cómo bajar el consumo de tu ESP32: modo deep sleep y otros trucos"
description: "El ESP32 es potente, pero también bebe corriente. Si lo alimentas con pilas, te interesa mandarlo a dormir. Te explicamos el deep sleep, las fuentes de despertar y cómo medir el consumo real de tu proyecto."
date: 2026-07-20T00:00:00Z
tags: ["esp32", "bajo-consumo", "electrónica", "iot"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
El ESP32 es una maravilla para proyectos conectados, pero esa potencia tiene un precio: en plena actividad, con la WiFi emitiendo, puede pedir varios cientos de miliamperios. Si lo enchufas a la red, no te preocupa. Pero si quieres alimentarlo con pilas o un panel solar, esos números te matan la autonomía en días. La buena noticia es que el chip sabe dormir, y cuando duerme, casi no consume.

## Lo primero: mide, no adivines

Antes de tocar nada, averigua cuánto consume tu montaje. Necesitas un medidor de bajo consumo o, mejor, una resistencia shunt de poca resistencia en serie con la alimentación, por la que lees la caída de tensión con un osciloscopio o un multímetro sensible. Sin medir, estás a ciegas. Una placa que creías que pasaba a microamperios puede tener un LED de power que se come veinte miliamperios eternos.

## Apaga lo que no uses

El consumo bajo empieza por ser brutal con lo que dejas encendido. El LED de encendido de muchas placas de desarrollo consume más que el ESP32 dormido. Si lo puedes quitar o cortar su pista, quítalo. Lo mismo con reguladores auxiliares, conversores USB a UART y cualquier circuito que mantenga actividad mientras tu ESP32 duerme. En modo bajo consumo, el chip pasa a unos pocos microamperios; el problema suele ser todo lo que hay alrededor.

## El deep sleep es tu mejor amigo

En deep sleep, el ESP32 para sus núcleos y deja solo lo mínimo: el RTC y la memoria que mantiene el estado. El consumo baja a decenas de microamperios en condiciones ideales. Para entrar, basta con una llamada desde tu programa indicando cuánto quieres dormir o qué evento debe despertarlo. Al despertar, el chip arranca de nuevo desde el principio, así que tienes que guardar en memoria RTC los datos que quieras conservar entre sueños.

## Cómo despertarlo

Tienes varias formas de sacarlo del letargo. La más usada es el temporizador del RTC: lo duermes, digamos, diez minutos, y a la diez se despierta, mide, envía y vuelve a dormir. Así, una estación meteorológica que reporta cada varios minutos puede pasar del orden del por ciento al cero por ciento de tiempo activa. También puedes despertarlo con un pin externo, con los pines táctiles o con una interrupción, útil para un sensor de presencia o un pulsador. Y por supuesto, puedes combinar varias fuentes.

## Light sleep cuando necesitas reaccionar rápido

El light sleep mantiene más cosas encendidas y se despierta antes, pero consume más que el deep sleep. Es interesante cuando tu dispositivo necesita reaccionar en milisegundos y no puede permitirse el reinicio del deep sleep. Para la mayoría de proyectos con batería, sin embargo, el deep sleep gana por goleada.

## Baja el reloj y apaga la radio a propósito

Incluso despierto, puedes gastar menos. Bajar la frecuencia del reloj reduce el consumo de los núcleos cuando no necesitas toda la potencia. Y la radio, tanto WiFi como Bluetooth, solo debe estar encendida cuando vas a transmitir. Enciéndela, envía tus datos, apágala y vuelve a dormir. Dejarla sondeando redes todo el rato es la forma más rápida de vaciar una pila.

## El coprocesador ULP

El ESP32 incluye un coprocesador de ultrabajo consumo que puede seguir trabajando mientras los núcleos principales duermen. Es algo más avanzado de programar, pero permite leer un sensor de forma periódica y despertar al sistema solo cuando el dato cumple una condición. Para proyectos de monitorización autónoma es la herramienta definitiva para estirar la batería.

## En resumen

El camino a un ESP32 frugal con la energía tiene cuatro pasos: mide el consumo real, elimina las fugas de los periféricos, manda el chip a deep sleep y enciende la radio solo para transmitir. Con eso, un proyecto que duraba días pasa a durar meses.

Si estás montando algo con pilas y no te sale la cuenta, tráelo al Hackerspace Valencia. Le echamos un ojo al consumo con el multímetro y el osciloscopio y te ayudamos a encontrar las fugas.

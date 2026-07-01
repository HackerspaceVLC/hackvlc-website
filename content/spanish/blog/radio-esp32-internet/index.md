---
title: "Cómo me construí una radio por Internet con un ESP32 y un DAC de 2€"
description: "Me monté una radio por Internet con un ESP32 y un DAC MAX98357 de 2€. Streaming MP3/AAC, control por encoder, interfaz web y actualización por HTTP cuando OTA dijo que no."
date: 2026-07-01T00:00:00Z
cover: cover.jpeg
tags: ["esp32", "radio", "streaming", "dac", "iot", "arduino", "tutorial"]
author: "Un miembro del Hackerspace Valencia"
---
*O cómo pasar una tarde intentando que OTA funcione y acabar subiendo firmware por web*

---

Resulta que el otro día estaba en el taller, mirando un montón de ESP32 que tengo por ahí acumulados, y pensé: "¿por qué no me hago una radio?" No una radio FM de toda la vida — eso es demasiado fácil. Una radio que tire de *streaming* por Internet. Porque claro, ahora todo va por Internet, incluso la radio.

Además, en el hackerspace tenemos un montón de trastos interesantes, pero a veces lo mejor es un proyecto sencillo que realmente *uses* en el día a día. Esta radio la tengo ya en el taller sonando.

## El hardware: menos es más

La lista de materiales es ridículamente corta:

- **ESP32** (cualquier placa vale, yo usé una DevKit)
- **DAC MAX98357** (~2€ en AliExpress) — amplifica y genera audio I2S directamente a un altavoz
- **Encoder rotativo KY-040** (~1€) — para controlar volumen y cambiar de emisora sin mirar
- Un altavoz pequeño
- Una protoboard y cables

El MAX98357 es la clave del proyecto. Es un DAC con amplificador clase D integrado que se conecta por I2S — solo 3 pines (BCLK, LRC, DIN) y alimentación. Te saca hasta 3W para un altavoz. Ni un solo componente externo.

Las conexiones son sencillas:

```
BCLK → GPIO 26
LRC  → GPIO 25
DIN  → GPIO 22
```

El encoder rotativo va a GPIO 4 y 2, y el pulsador a GPIO 15. Nada del otro mundo.

## El software: el meollo del asunto

El ESP32 se programa con PlatformIO (adiós Arduino IDE, fue un placer). Usa el framework Arduino y la librería `ESP8266Audio` de Earle Philhower.

### Por qué ESP8266Audio si es un ESP32

Porque la librería se llama así por razones históricas, pero funciona perfectamente en ESP32. Soporta MP3, AAC y streams ICY (los típicos de emisoras de radio). No soporta HTTPS — pero eso lo descubrimos después.

### El firmware hace varias cosas a la vez:

1. **Reproduce streams de audio** — MP3 o AAC, da igual
2. **Control WiFi** — se conecta automáticamente a la última red que usó, guarda hasta 3 redes en memoria, y si no hay ninguna conocida genera un punto de acceso con portal cautivo para configurarla desde el móvil
3. **Servidor web** — una interfaz para controlar la radio desde el móvil sin instalar nada
4. **Encoder rotativo** — control físico: giro para volumen, pulsación para play/pausa, pulsación larga para cambiar de emisora
5. **mDNS** — responde como `ESP32-RADIO.local`

## El proceso: de 0 a 100

### Fase 1: Hacer que suene

Lo primero era conseguir que el DAC escupiera algo. Conectar MAX98357 a ESP32 por I2S es trivial — la librería ESP8266Audio tiene `AudioOutputI2S` que hace todo el trabajo. Pones los pines, configuras el formato MP3/AAC/ICY, y suena.

Bueno, no exactamente. El primer problema llegó al probar un stream HTTPS: silencio total. La librería usa `WiFiClient`, que no entiende de SSL. Solución: cambiar las URLs de las emisoras a HTTP. La mayoría de emisores españolas (Cadena SER, Los 40, RNE) sirven contenido en HTTP sin problema.

### Fase 2: El encoder

El encoder rotativo es un clásico. Dos señales (CLK y DT) que se desfasan según gires. Con interrupciones en el ESP32 se lee perfectamente. Añadí una interrupción para el pulsador también.

El único truco: usar `IRAM_ATTR` en las funciones de interrupción y declarar las variables compartidas como `static` para que estén en DRAM.

```
Girar derecha → sube volumen
Girar izquierda → baja volumen
Pulsar < 1s → play/pausa
Pulsar > 1s → siguiente emisora
```

### Fase 3: La web

El ESP32 tiene un servidor web decente. Monté una interfaz en `WebServer` con:

- Lista de emisoras (con la activa resaltada)
- Slider de volumen
- Botón play/pausa
- Añadir URLs personalizadas (se guardan en la memoria NVS del ESP32)

El estado se actualiza solo con JavaScript cada 2 segundos (AJAX contra `/status`). Así el móvil muestra siempre lo que está sonando.

### Fase 4: El dolor de cabeza — OTA

Las siglas OTA (Over-The-Air) significan "actualizar el firmware sin cables". Es un *must* cuando el ESP32 está metido en una cajita y no quieres andar con el USB.

ArduinoOTA es la librería estándar para esto. La configuras, abres el puerto 3232, y desde PlatformIO haces `pio run --target upload --upload-port ESP32-RADIO.local`.

Pues bien: no funcionó. mDNS resolvía, el ESP32 respondía al ping, pero el puerto 3232 daba "conexión rehusada". Estuve horas intentando diagnosticarlo:

- ¿Conflicto con WiFiManager? Puede.
- ¿Bug del core Arduino 2.0.16? Tal vez.
- ¿Me he olvidado de llamar a `ArduinoOTA.handle()`? No.

Al final opté por un plan B: implementar la subida de firmware por HTTP. El ESP32 tiene una clase `Update` que permite flashear el firmware desde cualquier fuente de datos. Monté un endpoint `/update` en el servidor web que acepta un POST multipart con el archivo `.bin`.

Funciona perfectamente: abres `http://192.168.1.75/update` desde el móvil, seleccionas el `.bin`, y el ESP32 se flashea y reinicia solo. Sin cables, sin OTA, sin puerto 3232.

## Cómo es la experiencia de uso

La radio se enciende y en unos segundos ya está sonando (se conecta a la WiFi que tiene guardada). Desde el encoder puedes:

1. **Ajustar el volumen** — girando
2. **Pausar/Reanudar** — pulsación corta
3. **Cambiar de emisora** — pulsación larga

Si quieres cambiar de emisora sin levantarte, abres `http://192.168.1.75` en el móvil y tienes toda la interfaz.

## Galería

{{< figure src="foto-1.jpeg" alt="La radio montada" >}}
{{< figure src="foto-2.jpeg" alt="Detalle del montaje" >}}
{{< figure src="foto-3.jpeg" alt="Detalle del montaje" >}}
{{< figure src="foto-4.jpeg" alt="La radio funcionando" >}}

## Lo que aprendí

1. **I2S es maravilloso** — tres pines y tienes audio de calidad. El MAX98357 es un chip increíble: DAC + amplificador en un encapsulado diminuto.
2. **HTTP sigue vivo** — para streams de audio no necesitas HTTPS. Las emisoras llevan décadas sirviendo en HTTP y no van a cambiar.
3. **El plan B siempre gana** — cuando ArduinoOTA falla, implementar un endpoint HTTP de actualización es trivial y más fiable.
4. **Los ESP32 son unas máquinas** — con 240 MHz, 320 KB de RAM y WiFi, puedes montar esto y mucho más.

## El código

El proyecto completo está en `~/ESP32_RADIO/` (no, no está en GitHub — todavía). Si alguien del hackerspace quiere echarle un ojo o montarse una, que me busque en el taller. Está organizado como un proyecto PlatformIO estándar:

- `include/config.h` — pines y streams
- `src/main.cpp` — el núcleo
- `src/web_interface.cpp` — la interfaz web
- `src/audio_player.cpp` — el reproductor
- `src/encoder.cpp` — el encoder
- `src/wifi_manager.cpp` — gestión WiFi multi-red

## ¿Qué más se le puede añadir?

- **Pantalla OLED** — para ver la emisora y la canción (si el stream manda metadatos ICY)
- **Altavoz Bluetooth** — el ESP32 puede hacer de fuente A2DP
- **Batería** — el ESP32 consume poco, una power bank pequeña lo alimenta horas
- **Sincronización con Home Assistant** — para encender/apagar con automatizaciones

Pero eso ya será para otro finde en el hackerspace.

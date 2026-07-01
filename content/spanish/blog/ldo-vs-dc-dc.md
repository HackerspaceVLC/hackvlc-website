---
title: "LDO o DC/DC: qué regulador le conviene a tu circuito"
description: "Elegir cómo alimentar tu circuito no es trivial. Un LDO es barato y limpio, un DC/DC es eficiente pero ruidoso. Te contamos cuándo conviene cada uno y qué tienes que mirar antes de decidir."
date: 2026-07-27T00:00:00Z
tags: ["electrónica", "alimentación", "pcb", "ldo", "dcdc"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
Toda electrónica necesita comer a su tensión correcta. Y casi nunca la tienes directamente: la batería entrega demasiado, el USB da cinco voltios y tu chip quiere tres coma tres. Algo tiene que bajar esa tensión, y ahí entran en juego dos familias de reguladores que conviene conocer: los lineales, llamados LDO, y los conmutados, los DC/DC. Elegir mal te puede dejar con un circuito que se calienta, con poca autonomía o lleno de ruido.

## Cómo funciona cada uno

Un LDO es un regulador lineal. Toma la tensión de entrada y, por decirlo de forma sencilla, se come el sobrante en forma de calor para entregar a la salida la tensión que quieres. Es sencillo, barato, pequeño y muy limpio: la tensión de salida es prácticamente estable y sin rizado. Su gran defecto es la eficiencia. Todo lo que sobra se convierte en calor, así que cuanto mayor sea la diferencia entre la entrada y la salida y mayor la corriente, más energía desperdicias.

Un DC/DC, en cambio, es un convertidor conmutado. Almacena energía en una bobina y la transfiere a trozos, lo que le permite subir, bajar o invertir tensiones con una eficiencia alta, a menudo por encima del ochenta o noventa por ciento. A cambio, es más complejo: necesita esa bobina, un condensador de salida y un cuidadoso diseño del layout, y mete rizado y ruido en la salida.

## Eficiencia y calor

La regla es directa. Si tu entrada y tu salida están cerca y la corriente es baja, un LDO apenas desperdicia energía y su simplicidad gana la partida. Pero si quieres bajar de una batería de litio, que ronda los cuatro voltios, a tres coma tres para tu microcontrolador, y además tiras de varios cientos de miliamperios, un LDO puede estar tirando a la basura un tercio de tu energía como calor. Ahí un DC/DC te alarga la batería de forma notoria.

## Ruido y sensibilidad

Aquí el LDO brilla. Como no conmuta, su salida es muy limpia, algo esencial si alimentas un analógico delicado, un sensor de precisión o un conversor analógico digital. Un DC/DC siempre mete algo de rizado en su salida y radia algo de ruido, lo que puede afectar a medidas sensibles o a receptores de radio. Si tu diseño mezcla digital ruidoso y analógico fino, lo habitual es usar un DC/DC para el bruto y un LDO detrás para limpiar la línea que alimenta la parte analógica.

## Corriente de reposo

Para dispositivos que pasan la mayor parte del tiempo dormidos, la corriente que el propio regulador consume sin hacer nada importa tanto como su eficiencia en carga. Algunos LDO modernos tienen una corriente de reposo bajísima, ideal para circuitos con batería que se despiertan poco. Un DC/DC puede tener más consumo parásito, aunque hay modelos específicos de bajo consumo. Si tu circuito vive dormido el noventa y nueve por ciento del tiempo, mira bien este número.

## Tamaño, precio y complejidad

El LDO gana por goleada aquí. Son componentes diminutos, casi gratis y casi imposibles de montar mal si respetas sus condensadores. El DC/DC exige más partes, una bobina que ocupa sitio, y un layout cuidado porque las pistas por las que circulan corrientes conmutadas son antenas y fuentes de problemas si las tiras a lo loco. Para un prototipo rápido o una tirada pequeña, esa simplicidad tiene mucho valor.

## Cómo decidir en la práctica

Pregúntate cuatro cosas. ¿La diferencia entre entrada y salida es grande y la corriente alta? Entonces mira un DC/DC. ¿Alimentas algo sensible al ruido? Considera un LDO, solo o después de un DC/DC. ¿El aparato pasa dormido casi todo el tiempo? Compara corrientes de reposo. ¿Es un prototipo sencillo y la eficiencia no es crítica? Un LDO te ahorra dolores.

No hay un ganador universal. En muchos proyectos serios conviven ambos: un DC/DC para el camino largo desde la batería y un LDO para limpiar la última etapa. Saber por qué pones cada uno es lo que marca la diferencia entre una alimentación mediocre y una bien diseñada.

Si estás decidiendo cómo alimentar tu proyecto y tienes dudas, pásate por el Hackerspace Valencia. Entre todos vemos tus requisitos de tensión, corriente y autonomía y te ayudamos a elegir el regulador que de verdad te conviene.

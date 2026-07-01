---
title: "Checklist antes de enviar tu PCB a fabricar"
description: "Enviar una placa a fabricar tiene trampa: los errores caros aparecen cuando ya has pagado. Esta checklist repasa lo que debes revisar antes de generar los Gerber, desde el DRC hasta el grosor y el acabado."
date: 2026-08-03T00:00:00Z
tags: ["pcb", "fabricación", "kicad", "electrónica"]
author: "Hackerspace Valencia"
based_on: '<a href="https://kensocircuits.com/">Kenso Circuits</a>'
---
Hay un momento mágico en todo proyecto de electrónica: cuando envías tu placa a fabricar y esperas a que llegue el paquete. También hay un momento doloroso: cuando llega, montas todo y no funciona porque te dejaste un detalle en el diseño. La mayoría de esos disgustos se evitan con una revisión a conciencia antes de pulsar el botón de pedir. Esta es la checklist que seguimos en el makerspace antes de mandar una placa.

## Ejecuta el verificador de reglas de diseño

Lo primero y más obvio, y aun así se olvida. Ejecuta el DRC, el comprobador de reglas de diseño, y no hagas la vista gorda con los avisos. Cada error o advertencia es una pista de algo que puede ir mal: dos pistas demasiado juntas, una vía sin conexión, una almohadilla que se sale del borde. Si tu programa te permite escribir reglas personalizadas, configúralas con los valores reales de tu fabricante, no con los genéricos.

## Conoce las capacidades de tu fabricante

Cada fabricante tiene un límite de lo que sabe hacer bien: el ancho mínimo de pista, el tamaño mínimo de vía, la separación mínima entre cobre, el número de capas y el grosor de cobre. Esos valores no son opiniones, son hoja de datos. Si diseñas por debajo de lo que ofrecen, o te rechazan el pedido o te lo fabrican con suerte y a veces mal. Antes de empezar, mira esos números y pliega tu diseño a ellos.

## Revisa el plano de masa

Un buen plano de masa continuo en la capa inferior mejora el ruido, la disipación de calor y la integridad de señal. Los problemas llegan cuando ese plano está lleno de cortes: pistas que lo parten, agujeros que lo rompen en islotes, conexiones que hacen que las corrientes vuelvan por caminos largos. Mira tu plano de masa y comprueba que es realmente continuo donde debe serlo. Una inspección de cómo vuelven las corrientes ahorra muchos males de comportamiento raro.

## Cuidado con las vías

Las vías tienen sus reglas. El diámetro del agujero y el anillo de cobre deben respetar los mínimos del fabricante. Las vías que van bajo componentes de montaje superficial pueden dar problemas si no las cubres, porque la pasta de soldadura puede filtrarse. Decide qué vías quieres tentar, es decir, tapar con máscara, y cuáles dejar abiertas para accesibilidad o disipación.

## La máscara de soldadura y el silk

El serigrafico, esa capa de texto blanco encima de la placa, parece decorativo pero es tu manual de montaje. Pon referencias claras en cada componente, marca la polaridad de los condensadores electrolíticos y diodos, el pin uno de cada integrado y la orientación de los conectores. Y revisa que el texto no caiga encima de almohadillas, porque ahí la tinta no se imprime y solo confunde. Una placa bien serigrafiada se monta mucho más rápido y con menos errores.

## Conectores y mecánica

Antes de pedir, comprueba que los conectores caen donde deben, que el espaciado de los pines es correcto y que la placa encaja en su hueco, agujeros de tornillo incluidos. Un conector puesto al revés o desplazado medio milímetro puede hacer que la placa no encaje en la caja. Si usas conectores con orientación, pon el cuadradito del pin uno bien visible.

## Parámetros de fabricación

Al pedir, decides varios detalles que afectan al precio y al resultado. El grosor de la placa, habitualmente uno coma seis milímetros. El peso de cobre, normalmente una onza. El acabado de superficie, que puede ser estañado plano, oro sobre níquel u otros, cada uno con su equilibrio entre precio, soldabilidad y durabilidad. El color de la máscara, que es gratis pero influye en el aspecto. Y el color del serigrafiado. Elige lo que necesitas, no lo más vistoso.

## Fiduciales y panelización

Si vas a montar componentes a máquina, tu placa necesita fiduciales, esas marcas de referencia que la máquina usa para orientarse. Y si fabricas varias unidades, la panelización, agrupar varias placas en un panel mayor, ahorra dinero. Pregunta a tu fabricante cómo lo prefiere.

## Una última revisión con cabeza fría

Cuando creas que has terminado, guarda el proyecto y déjalo reposar un día. Vuelve después con cabeza fría y recórrelo de nuevo. Los errores más tontos se ven en esa segunda pasada. Y si puedes, pídele a otra persona que lo mire. Cuatro ojos ven más que dos, y en el hackerspace eso lo sabemos bien.

Si es tu primera placa y te da respeto el botón de pedir, pásala por el Hackerspace Valencia antes. Le damos un repaso entre varios y seguro que encontramos algún detalle que tú, de tanto mirarlo, ya no veías.

# Campaña de Google Ads de Mister Gas (borrador)

Preparado el 22 nov 2026 con el protocolo de Google Ads de Espíritu Digital. **No está creada**: la cuenta 751-597-4993 espera el medio de pago de Don Hernán.
Todos los textos tienen el conteo de caracteres hecho con `contar_caracteres.py` y usan solo datos confirmados (SEC, licencia clase 3, TC6, comunas, horario, "pagas al terminar" donde el sitio lo dice).

---

## 1. Antes de crear la campaña

- [ ] Don Hernán ingresa su tarjeta y se envía la cuenta (ver bitácora del 20 nov).
- [ ] Vincular la cuenta al administrador de Espíritu Digital (534-787-9097).
- [ ] Publicar la Fase 4, para que las páginas de destino de abajo existan en mistergas.cl.
- [ ] Crear las 3 conversiones en Ads, en Objetivos → Conversiones → Sitio web → manual:

| Conversión | Evento del sitio | Tipo | Conteo |
| --- | --- | --- | --- |
| Formulario | `generate_lead` | **Principal** | Una |
| WhatsApp | `whatsapp_click` | **Principal** | Una |
| Llamada (clic) | `tel_click` | Secundaria | Una |

  Sin conversiones mejoradas, sin Google Signals y sin personalización de anuncios (decisión de privacidad del protocolo). Con el ID y la etiqueta de cada una, Claude crea las 3 etiquetas en GTM (`Ads - Formulario`, `Ads - WhatsApp`, `Ads - Llamada (clic)`); la vinculación de conversiones ya está publicada.
- [ ] Revisar con Tag Assistant que cada conversión dispare una sola vez.
- [ ] Validar el volumen de las palabras clave con el Planificador y ajustar este borrador.

---

## 2. Configuración

| Opción | Valor |
| --- | --- |
| Nombre | `Google \| Search \| Alta intención \| Gasfitería integral \| Comunas` |
| Tipo | Búsqueda |
| Puja | CPC manual |
| Presupuesto diario | Unos $3.300 CLP: la propuesta aceptada del 3 nov considera $100.000 de anuncios (bitácora). Confirmar con Cristian si es mensual y si incluye IVA |
| Redes | Sin Red de Display y sin socios de búsqueda |
| Ubicaciones | Puente Alto, La Florida, Macul, San José de Maipo y Pirque. Opción **Presencia** (no "Presencia o interés"). Don Hernán atiende toda la Región Metropolitana con recargo por traslado (23 nov), pero la campaña parte en las 5 comunas sin recargo para cuidar el presupuesto; ampliar solo con datos de la sección 7 |
| Idioma | Español |
| Horario | Recomendado: lunes a viernes, de 9:00 a 18:00, que es cuando Don Hernán atiende. Así no se pagan clics que nadie contesta. Decidirlo con él |
| Audiencias | Ninguna; sin remarketing |

Un solo presupuesto, con la prioridad de Don Hernán expresada en el CPC máximo de cada grupo: el más alto para gasfitería integral, luego fugas y luego calefones. Si un grupo se come el presupuesto, se separa en su propia campaña.

---

## 3. Grupos de anuncios y palabras clave

Solo concordancia **exacta** `[ ]` y de **frase** `" "`.

### Grupo 1 · Gasfitería integral (prioridad 1) → `/gasfiter/`
```
[gasfiter puente alto]          "gasfiter puente alto"
[gasfiter la florida]           "gasfiter la florida"
[gasfiter macul]                "gasfiter macul"
[gasfiter pirque]               [gasfiter san jose de maipo]
[gasfiter a domicilio]          "gasfiter a domicilio"
[gasfiter certificado sec]      "gasfiter certificado"
[gasfiteria integral]           "gasfiteria integral"
[servicio de gasfiteria]        "empresa de gasfiteria"
```

### Grupo 2 · Instalación de gas (parte de la gasfitería integral) → `/instalacion-de-gas/`
```
[instalacion de gas]            "instalacion de gas"
[instalador de gas]             "instalador de gas certificado"
[instalador de gas sec]         [instalador de gas clase 3]
[certificado tc6]               "declaracion tc6"
[modificacion instalacion de gas]  "reparacion de gas"
```

### Grupo 3 · Detección de fugas (prioridad 2) → `/deteccion-de-fugas/`
```
[deteccion de fugas]            "deteccion de fugas de agua"
[deteccion de fugas de gas]     "deteccion de fugas puente alto"
[fuga de agua]                  "fuga de agua en la pared"
[detectar fuga de agua]         "fuga de agua sin romper"
```

### Grupo 4 · Calefones (prioridad 3) → `/calefones/`
```
[mantencion de calefon]         "mantencion de calefon"
[instalacion de calefon]        "instalacion de calefon"
[reparacion de calefon]         "reparacion de calefon"
[tecnico de calefon]            "calefon no enciende"
```

Agua potable y alcantarillado (`/agua-potable-y-alcantarillado/`) queda fuera del primer mes: son proyectos de menor volumen y conviene medir primero. Se agrega como grupo 5 si el informe de términos muestra búsquedas de "proyecto sanitario" o "alcantarillado".

---

## 4. Negativas desde el día uno

Lista de la cuenta, en frase salvo que se indique:

- **Académicas:** curso, cursos, clase, tutorial, universidad, carrera, manual, diplomado, pdf, estudiar, como ser gasfiter, como sacar licencia.
- **Laborales:** empleo, trabajo, vacante, sueldo, salario, cv, curriculum, se necesita gasfiter, bolsa de trabajo.
- **Gratuidad y hazlo tú mismo:** gratis, gratuito, sin costo, como instalar, como reparar, como destapar, hazlo tu mismo, diy.
- **Precio bajo:** barato, barata, economico, economica, low cost, oferta, promocion.
- **Compra de productos** (Mister Gas presta servicios, no vende equipos): comprar, venta, precio calefon, repuestos, sodimac, easy, mercadolibre.
- **Para revisar en la primera semana** (no cargar de entrada): metrogas, abastible, lipigas, gasco. Pueden ser clientes con un problema o gente que busca a su distribuidora; se decide con el informe de términos.

---

## 5. Anuncios (RSA)

Conteo entre paréntesis. 15 títulos y 4 descripciones por grupo.

### Grupo 1 · Gasfitería integral
Títulos: Gasfiter en Puente Alto (23) · Gasfiter en La Florida (22) · Gasfitería Integral (19) · Gasfiter Certificado SEC (24) · Gasfiter a Domicilio (20) · Gas, Agua y Alcantarillado (26) · Instalador de Gas Clase 3 (25) · Declaración TC6 ante la SEC (27) · Calefones, Fugas y Destapes (27) · Reparaciones sin Anticipo (25) · Gas Natural y Gas Licuado (25) · Escríbenos por WhatsApp (23) · Llama Ahora a Mister Gas (24) · Lunes a Viernes de 9 a 18 (25) · Un Solo Equipo para tu Casa (27)

Descripciones:
- Gas, agua potable, alcantarillado, calefones, fugas y destapes. Técnico SEC. (76)
- Atendemos Puente Alto, La Florida, Macul, San José de Maipo y Pirque. (69)
- Instalaciones de gas con declaración TC6 cuando corresponde. Instalador clase 3. (80)
- Reparaciones: pagas al terminar, sin anticipos. Escríbenos por WhatsApp o llámanos. (83)

### Grupo 2 · Instalación de gas
Títulos: Instalación de Gas (18) · Instalador de Gas Certificado (29) · Instalador de Gas Clase 3 (25) · Declaración TC6 ante la SEC (27) · Certificado TC6 (15) · Modificación de Gas (19) · Reparación de Gas (17) · Instalación de Gas en Casa (26) · Técnico Autorizado SEC (22) · Gasfiter en Puente Alto (23) · Gas Natural y Gas Licuado (25) · Gasfitería Integral (19) · Escríbenos por WhatsApp (23) · Llama Ahora a Mister Gas (24) · Lunes a Viernes de 9 a 18 (25)

Descripciones:
- Instalaciones de gas natural y licuado, modificaciones y reparaciones. Instalador SEC. (86)
- Tramitamos la declaración TC6 ante la SEC cuando corresponde. Licencia clase 3. (79)
- Atendemos Puente Alto, La Florida, Macul, San José de Maipo y Pirque. (69)
- Gas, agua potable, alcantarillado, calefones, fugas y destapes. Técnico SEC. (76)

Sin "Pagas al terminar" en este grupo, igual que en la página: Don Hernán confirmó el 23 nov que en instalaciones nuevas normalmente pide un anticipo para materiales, aunque no es indispensable.

### Grupo 3 · Detección de fugas
Títulos: Detección de Fugas de Agua (26) · Detección de Fugas de Gas (25) · Fugas sin Romper (16) · Detección de Fugas SEC (22) · Ultrasonido y Termografía (25) · Ubicamos la Fuga Exacta (23) · Fuga de Agua en Puente Alto (27) · ¿Subió tu Cuenta de Agua? (25) · Humedad en Muros o Pisos (24) · Técnico Autorizado SEC (22) · Pagas al Terminar (17) · Sin Anticipos (13) · Escríbenos por WhatsApp (23) · Llama Ahora a Mister Gas (24) · Lunes a Viernes de 9 a 18 (25)

Descripciones:
- Ubicamos la fuga con ultrasonido, presión controlada y termografía antes de romper. (83)
- Fugas de agua y gas en Puente Alto, La Florida, Macul, San José de Maipo y Pirque. (82)
- Reparamos la fuga una vez ubicada. Pagas al terminar, sin anticipos. (68)
- Manchas, humedad o la cuenta de agua alta: escríbenos por WhatsApp o llámanos. (78)

### Grupo 4 · Calefones
Títulos: Mantención de Calefón (21) · Instalación de Calefón (22) · Reparación de Calefón (21) · Calefones de Todas las Marcas (29) · Técnico de Calefón SEC (22) · ¿Tu Calefón No Enciende? (24) · Calefones en Puente Alto (24) · Instalador de Gas Clase 3 (25) · Técnico Autorizado SEC (22) · Gasfitería Integral (19) · Pagas al Terminar (17) · Sin Anticipos (13) · Escríbenos por WhatsApp (23) · Llama Ahora a Mister Gas (24) · Lunes a Viernes de 9 a 18 (25)

Descripciones:
- Instalamos, mantenemos y reparamos calefones de todas las marcas, con técnico SEC. (82)
- Revisamos el equipo y sus conexiones de gas y agua. Pagas al terminar. (70)
- Atendemos Puente Alto, La Florida, Macul, San José de Maipo y Pirque. (69)
- Pagas al terminar el trabajo, sin anticipos. Escríbenos por WhatsApp o llámanos. (80)

---

## 6. Recursos de la campaña

**Enlaces de sitio** (texto de 25 como máximo, cada línea de 35 como máximo):

| Texto | Línea 1 | Línea 2 | Destino |
| --- | --- | --- | --- |
| Gasfitería Integral | Gas, agua y alcantarillado | Un solo equipo SEC | `/gasfiter/` |
| Instalación de Gas | Declaración TC6 ante la SEC | Instalador de gas clase 3 | `/instalacion-de-gas/` |
| Agua y Alcantarillado | Redes y proyectos según RIDAA | Planos con constructor civil | `/agua-potable-y-alcantarillado/` |
| Detección de Fugas | Agua y gas, sin romper | Ultrasonido y termografía | `/deteccion-de-fugas/` |
| Calefones | Todas las marcas | Instalación y mantención | `/calefones/` |
| Destapes | Alcantarillado y cañerías | Maquinaria de alta presión | `/destapes/` |

**Textos destacados:** Técnico Autorizado SEC · Instalador de Gas Clase 3 · Reparaciones sin Anticipo · Gas Natural y Licuado · Calefones Multimarca · Lunes a Viernes 9 a 18 · Atención a Domicilio

"Pagas al Terminar" y "Sin Anticipos" van solo como títulos de los grupos de fugas y calefones (reparaciones y mantenciones), no a nivel de campaña, porque las instalaciones nuevas de gas y los proyectos sanitarios normalmente llevan anticipo.

**Llamada:** +56 9 8303 0716, con el mismo horario de la campaña.

---

## 7. Primeras semanas

- Revisión semanal de términos de búsqueda (lista 2 del protocolo): negativas nuevas y palabras ganadoras en exacta.
- A las 2 semanas: ver qué grupo trae formularios y WhatsApp a mejor costo y mover el CPC según la prioridad de Don Hernán.
- A las 4 a 6 semanas: informe de ubicaciones más la dimensión `commune` de GA4 para decidir si se suman comunas (decisión de la sección 3 del plan maestro).

# Plan SEO de mistergas.cl

Preparado el 22 nov 2026 a partir del pedido de Don Hernán del 21 nov. Complementa la Fase 4 de `PLAN-MAESTRO.md`.
Regla de siempre: nada se publica con datos que Don Hernán no haya confirmado. Los volúmenes de búsqueda **no están medidos**: se validan con el Planificador de palabras clave de Google Ads cuando la cuenta tenga medio de pago.

---

## 1. Posicionamiento

Don Hernán quiere que Mister Gas se reconozca como **empresa de servicio integral de gasfitería**, no solo como detección de fugas o calefones. Orden de prioridad que pidió:

1. Servicio integral de gasfitería
2. Detección de fugas
3. Instalación y mantención de calefón

Además pidió destacar dos capacidades nuevas, cada una con página propia colgando de la de gasfitería integral:

- **Instalación de gas**: instalaciones domiciliarias, modificaciones, reparaciones y tramitación de la declaración **TC6** ante la SEC, dentro de las atribuciones de su licencia de **instalador de gas clase 3**.
- **Agua potable y alcantarillado**: redes domiciliarias, modificaciones, ampliaciones, cámaras de inspección y proyectos sanitarios según el **RIDAA**, con un **constructor civil** que participa en la elaboración y firma de planos y documentos técnicos.

Nota de dictado: en su mensaje aparece "cafetería integral" y "California"; se entiende **gasfitería integral** y **calefón**.

---

## 2. Arquitectura del sitio

```
/                                   Portada: Mister Gas, servicio integral de gasfitería
└── /gasfiter/                      Gasfitería integral (página madre de los servicios)
    ├── /instalacion-de-gas/        Instalación y reparación de gas, TC6            (nueva, Fase 4)
    ├── /agua-potable-y-alcantarillado/  Redes, ampliaciones y proyectos RIDAA      (nueva, Fase 4)
    ├── /calefones/                 Instalación, mantención y reparación
    ├── /deteccion-de-fugas/        Agua y gas, sin romper
    └── /destapes/                  Alcantarillado y cañerías
/privacidad/
```

- La URL `/gasfiter/` se mantuvo (ya estaba indexada) y se convirtió en la página de gasfitería integral. Cambiarla exigía una redirección y perder el historial.
- Cada página de servicio muestra la ruta "Inicio / Gasfitería integral / Servicio" y la declara en JSON-LD `BreadcrumbList`.
- Todas enlazan a la página madre, y la madre enlaza a todas con tarjetas.

---

## 3. Mapa de palabras clave por página

Una intención principal por página, para que no compitan entre sí. Términos en el vocabulario chileno (gasfiter, calefón, destape).

| Página | Intención principal | Variantes y long tail | Título actual |
| --- | --- | --- | --- |
| `/` | gasfitería integral + marca | mister gas, gasfitería integral puente alto, empresa de gasfitería la florida | Mister Gas \| Gasfitería Integral en Puente Alto y La Florida |
| `/gasfiter/` | gasfiter + comuna | gasfiter puente alto, gasfiter la florida, gasfiter certificado SEC, gasfiter a domicilio, gasfitería a domicilio | Gasfiter SEC y Gasfitería Integral en Puente Alto |
| `/instalacion-de-gas/` | instalación de gas | instalador de gas certificado SEC, instalador de gas clase 3, declaración TC6, certificado TC6, modificación instalación de gas, reparación de gas | Instalación de Gas y Declaración TC6 SEC |
| `/agua-potable-y-alcantarillado/` | instalación de agua potable y alcantarillado | proyecto sanitario, proyecto de alcantarillado, ampliación red de agua, cámara de inspección, RIDAA | Instalaciones de Agua Potable y Alcantarillado |
| `/calefones/` | mantención de calefón | instalación de calefón, reparación de calefón, calefón no enciende, técnico calefón puente alto | Instalación, Mantención y Reparación de Calefones |
| `/deteccion-de-fugas/` | detección de fugas | detección de fugas de agua, detección de fugas de gas, fuga de agua sin romper, cuenta de agua alta | Detección de Fugas de Agua y Gas sin Romper |
| `/destapes/` | destape de alcantarillado | destape de cañerías, destape lavaplatos, destapes puente alto | Destapes de Alcantarillado y Cañerías |

Pendiente de validar con el Planificador: volumen mensual y competencia de cada término en la Región Metropolitana. Si "gasfiter + comuna" tiene mucho más volumen que "gasfitería integral", la portada sigue con la marca y el posicionamiento de Don Hernán, y `/gasfiter/` captura las búsquedas de volumen.

---

## 4. Lo hecho en la Fase 4 (rama `fase-4-mistergas`)

**Contenido**
- Portada con el encabezado pedido: "Mister Gas · Servicio Integral de Gasfitería" y la descripción con gas, agua potable, alcantarillado, calefones, fugas y destapes.
- Etiqueta superior "Instalador de gas clase 3 · SEC".
- Servicios de la portada en el orden de prioridad, con gasfitería integral como servicio principal.
- `/gasfiter/` convertida en página de gasfitería integral, con bloque "Servicios especializados".
- Páginas nuevas `/instalacion-de-gas/` y `/agua-potable-y-alcantarillado/`, con texto basado solo en lo que escribió Don Hernán.
- Dos preguntas nuevas en las preguntas frecuentes de la portada: qué incluye la gasfitería integral y si hacen instalaciones de gas con declaración ante la SEC.
- `llms.txt` actualizado con el nuevo posicionamiento.

**Datos estructurados**
- `Plumber` con `hasCredential`: licencia de instalador de gas clase 3 reconocida por la SEC.
- Catálogo de servicios en el orden nuevo.
- `BreadcrumbList` de tres niveles en las páginas hijas.

**Técnico**
- Fuentes servidas desde el propio sitio.
- GTM diferido y limitado a mistergas.cl.
- Sello SEC en WebP.
- Fotos de 640 px para celular.

Medición local con GTM bloqueado en ambas versiones:

| Página | Antes | Ahora |
| --- | --- | --- |
| Portada | FCP 2,8 s · LCP 4,2 s · 681 KiB | FCP 1,6 s · LCP 2,7 s · 547 KiB |
| Calefones | LCP 3,0 s · 310 KiB | LCP 2,1 s · 215 KiB |

**Botones**: auditoría automática de las 8 páginas. Todos los enlaces de llamada van a +56 9 8303 0716 y todos los de WhatsApp a wa.me/56983030716, con texto bien codificado, `data-cta` y apertura en pestaña nueva. En celular, los botones del inicio de cada página quedan sobre la barra fija, incluso con el aviso de fuera de horario visible.

---

## 5. Próximos pasos de SEO

### 5.1 Al publicar la Fase 4 (Cristian)
1. Revisar la vista previa y unir `fase-4-mistergas` a `main`.
2. En Search Console: volver a enviar `sitemap-index.xml` y pedir indexación de `/instalacion-de-gas/`, `/agua-potable-y-alcantarillado/`, `/gasfiter/` y `/`.
3. Rich Results Test sobre `/instalacion-de-gas/` (debe mostrar rutas de exploración y preguntas frecuentes).

### 5.2 Ficha de Google Business (la palanca más fuerte para búsquedas locales)
- Categoría principal relacionada con gasfitería (en la ficha aparece como "Fontanero"). Como secundarias, las de instalación de gas y de calentadores de agua que la ficha ofrezca.
- Servicios de la ficha con los mismos nombres del sitio y enlaces a cada página.
- Descripción con el posicionamiento de gasfitería integral, la licencia clase 3 y las comunas.
- Pedir reseñas a clientes reales. Las mejores, con permiso, van al bloque de reseñas del sitio (ya está listo).
- Poner la URL de la ficha en `BUSINESS.sameAs` y `REVIEWS_URL`.

### 5.3 Contenido nuevo (cada uno necesita confirmación técnica de Don Hernán)
Guías informativas que captan búsquedas de "qué es / cuándo / cómo" y enlazan a la página del servicio:

| Guía propuesta | Enlaza a | Lo que hay que confirmar con Don Hernán |
| --- | --- | --- |
| Qué es la declaración TC6 y cuándo la necesitas | `/instalacion-de-gas/` | Casos en que se tramita, qué documentos pide, qué entrega él al cliente |
| Cada cuánto hacer la mantención del calefón | `/calefones/` | Frecuencia que recomienda, señales de falla, marcas con que trabaja |
| Cómo saber si tienes una fuga de agua escondida | `/deteccion-de-fugas/` | Ya está en el sitio; agregar casos reales con fotos |
| Qué incluye un proyecto sanitario según el RIDAA | `/agua-potable-y-alcantarillado/` | Etapas, rol del constructor civil, cuándo se necesita proyecto |

### 5.4 Comunas
La decisión vigente (sección 3 del plan maestro) es no crear páginas por comuna sin casos reales y no ampliar la cobertura a ciegas. Con GA4 ya midiendo la comuna de cada formulario y Google Ads dando el informe de ubicaciones, en 4 a 6 semanas se decide:
- qué comunas actuales merecen página propia, con 2 o 3 trabajos reales cada una;
- si conviene sumar comunas colindantes con San José de Maipo.

### 5.5 Seguimiento mensual
- Search Console: consultas e impresiones por página, y qué términos del mapa aparecen.
- GA4: llamadas, WhatsApp y formularios por página y por comuna (dimensiones `cta_location`, `service` y `commune`).
- PageSpeed Insights de la portada y de una página de servicio.

---

## 6. Preguntas para Don Hernán

1. Número de su licencia de instalador de gas clase 3, para mostrarlo en el sitio. Hoy dice "Instalador de gas clase 3, autorizado por la SEC" sin número.
2. Qué tipos de gas trabaja (natural, licuado o ambos), para nombrarlos en `/instalacion-de-gas/`.
3. Si en instalaciones nuevas de gas y en proyectos sanitarios también se paga al terminar. Hoy esas dos páginas **no** dicen "Pagas al terminar".
4. Si quiere que el sitio nombre al constructor civil o solo mencione que trabaja con uno.
5. Fotos de trabajos de gas, agua potable y alcantarillado (antes y después), con permiso del cliente.
6. Marcas de calefón con que trabaja más.
7. Qué comunas "a convenir" atiende hoy, para medirlas antes de anunciarlas.

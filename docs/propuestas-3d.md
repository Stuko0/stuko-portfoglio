# Propuestas 3D y animación para stuko.dev

Contexto: portafolio con el sistema `DESIGN.md` "The Illustrated Down" (papel
pergamino, tinta, carmesí de corazones). Ningún modelo lo modelamos nosotros;
todas las opciones usan assets de terceros listos o geometría procedural.
URLs verificadas con HTTP 200 el 2026-10-14.

## Opción A — Prop 3D con `<model-viewer>` + GLB CC0 (la más rápida)

Un objeto decorativo giratorio (naip, llave, tetera) en el hero o en la
sección Works. El paquete `@google/model-viewer` v4.4.0 trae lazy-load,
poster, controles y fallback si no hay WebGL.

```bash
npm install @google/model-viewer
```

```astro
---
// src/components/ModelProp.astro
---
<model-viewer
  src="/models/naip.glb"
  poster="/models/naip-poster.png"
  camera-controls
  auto-rotate
  rotation-per-second="24deg"
  shadow-intensity="0"
  exposure="0.9"
  loading="lazy"
  alt="Naip girando en 3D"
  style="width: 100%; height: 340px; background: transparent"
></model-viewer>
```

```ts
// src/pages/[lang]/index.astro (o en el Layout, solo una vez)
import '@google/model-viewer';
```

- Assets CC0 descargables (búsqueda verificada):
  - Sketchfab CC0: https://sketchfab.com/search?features=downloadable&q=playing+card&type=models&downloadable=true
  - Poly Pizza: https://poly.pizza/search/playing%20card
  - Muestra de referencia ya hospedada (200):
    https://modelviewer.dev/shared-assets/models/Astronaut.glb
- Licencia: cada modelo declarga su licencia; filtrar por CC0/CC-BY y
  re-hospedar en `public/models/` (no depender de terceros en producción).
- Peso típico: 200KB-2MB GLB. Regla: si pasa de 1.5MB, pedir Draco/meshopt
  al exportar o elegir otro modelo.
- Reduced motion: `auto-rotate` debe apagarse. Con `prefers-reduced-motion`,
  renderizar sin `auto-rotate` (una línea de JS o atributo condicional).

## Opción B — Escena Spline embebible (interactiva, sin instalar three.js)

Visor oficial `@splinetool/viewer` v2.0.79; la escena viaja como `.splinecode`:

```bash
npm install @splinetool/viewer
```

```astro
---
// src/components/SplineScene.astro
---
<script
  type="module"
  src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"
></script>
<spline-viewer
  url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
  loading-anim-type="spinner-small-dark"
  style="width: 100%; height: 480px"
></spline-viewer>
```

- Escena demo verificada (200): la de arriba, tomada de la documentación de
  Spline. Para la temática hay que crear/duplicar una escena en
  spline.design (el visor es público, la escena es tuya o de su comunidad).
- Peso: el visor ~150KB gzip + la escena (300KB-3MB según complejidad).
- Riesgo: el script desde unpkg en producción; mejor instalar el paquete y
  servirlo propio.

## Opción C — Cartas 3D procedurales con three.js (cero assets externos)

Si el objetivo es "naipes que caen/flotan" sin modelar nada: cajas con textura
dibujada en canvas (la cara del naip se dibuja con CanvasTexture). Todo el
código es nuestro; el bundle es three v0.186.1 (~150KB gzip lazy).

```bash
npm install three
```

Esqueleto del componente (isla Preact, `client:visible`):

```ts
import * as THREE from 'three';

const geo = new THREE.BoxGeometry(2.2, 3.1, 0.04, 1, 1, 1);
const tex = makeCardFace('A', 'spade'); // canvas 512x716: fondo #FBF7EC,
                                        // keyline #201A14, índice Bodoni
const mats = [
  side, side, tex, new THREE.MeshBasicMaterial({ color: 0xE8DDC6 }),
  side, side,
];
const card = new THREE.Mesh(geo, mats);
// 3 cartas: rotaciones -14°, 0°, +12°, flotación senoidal por frame,
// parallax ya existente del diorama (LeftStage) reutilizando --px/--py
```

- Ventaja: integración exacta con la paleta (los naipes salen de nuestro
  CSS), sin licencias, sin descargas.
- Riesgo: hay que escribir la escena (iluminación, antialias, DPR cap en 2,
  render solo cuando la isla es visible, `dispose()` en cleanup).

## Opción D — Coreografía de scroll con GSAP (2.5D, sin WebGL)

Ya existe el parallax de puntero en `LeftStage.astro` y los reveals con
IntersectionObserver. Si se quiere más "cinemática de recorte de papel":
GSAP v3.15.0 + ScrollTrigger para que las capas del diorama se separen al
hacer scroll (plancha lenta, cartas medias, espada rápida) y para un
"pin" de la sección Works.

```ts
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.to('.layer-back',  { yPercent: -6, ease: 'none',
  scrollTrigger: { trigger: '.section-hero', start: 'top top', end: 'bottom top', scrub: true } });
```

- Peso: ~20KB gzip. Motivación: profundidad física del recorte de papel.
- Reduced motion: no registrar los triggers si
  `matchMedia('(prefers-reduced-motion: reduce)').matches`.

## Recomendación

1. Animación primero (Opción D): refuerza el mundo paper-cutout ya construido
   con el mínimo peso y sin assets nuevos.
2. Si se quiere un "wow" puntual: Opción A con un naip 3D CC0 en Works,
   con `loading="lazy"` y sin auto-rotate bajo reduced-motion.
3. Opción C sólo si se busca una firma visual propia de naipes en 3D; es la
   única que no depende de nadie y la que más control da, a cambio de
   código propio.
4. Opción B reservada para una escena interactiva puntual (por ejemplo un
   "paseo por el país de las maravillas" al final del recorrido).

## Reglas de rendimiento aplicables a cualquiera

- Carga diferida: montar la isla con `client:visible` o `loading="lazy"`.
- `prefers-reduced-motion`: sin auto-rotate, sin scrub, sin flotación.
- Cap de devicePixelRatio a 2; pausar el bucle de render cuando la isla sale
  del viewport (IntersectionObserver).
- Nunca dos motores de animación peleando por el mismo frame en el mismo
  componente (three/GSAP aislados en islas propias).

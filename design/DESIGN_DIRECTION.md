# Portfolio Design Direction — v2 (Enriched)

> Documento vivo + prompting bible. Actualizado con research de UI/UX 2025-2026.  
> Separar gusto, posicionamiento y ejecución.

---

## 1. Norte (sin cambios, con afilamiento)

El portfolio tiene que sentirse como Francisco: técnico, directo, con criterio, sin pose corporativa y sin parecer un template de bootcamp.

La UI debe comunicar en 5 segundos:

- **"Este tipo entiende sistemas con reglas reales."**  
- **"Trabajo mejor cuando hay scope, datos, permisos, estados e integraciones."**  
- **"Uso AI como herramienta de pensamiento y revisión, no como decoración."**  
- **"Tengo gusto visual, pero no necesito disfrazarme de agencia creativa."**

### Tono visual elegido: Editorial Técnico + Workbench Oscuro (Ruta A + B)

- Base editorial técnica → no satura.  
- Detalles de workbench → dan identidad diferencial.  
- AI como sección corta, concreta, bilingüe.  
- Proyectos con protagonismo visual real, no cards apiladas.  
- Secciones con ADN visual propio. Ninguna puede ser intercambiable con otra.

---

## 2. Respuestas a las Preguntas de Dirección

| Pregunta | Respuesta definitiva |
|---|---|
| ¿Qué sentir en 5 segundos? | "Técnico con criterio. No vende humo. Ya trabaja con AI de forma real." |
| ¿Protagonismo de la AI? | Media: sección corta y concreta, no el eje central |
| ¿Qué venden las capturas? | Experiencia profesional real + complejidad técnica |
| ¿Tono visual? | Sistema operativo elegante / editorial oscuro |
| ¿Qué tan denso? | Medio: buena información visible, con aire editorial |
| ¿Qué evitar a toda costa? | Parecer junior / parecer dashboard genérico / parecer "AI bro" |

---

## 3. Lo Que No Queremos (ampliado)

- Hero genérico con gradientes enormes sin propósito.
- Cards todas iguales, planas y compartimentalizadas sin ritmo.
- Look de dashboard SaaS vacío (misma card repetida 8 veces).
- Neones por todos lados o efectos de "hacker movie".
- Bloques experimentales que rompan la lectura del contenido.
- Texto en inglés dentro del modo español (y viceversa).
- Animaciones decorativas sin dirección (spinner vacíos, partículas, etc.).
- Hover que solo hace `translateY(-4px)` en todo — eso ya no distingue nada.
- Secciones con el mismo patrón: título arriba a la izquierda, descripción arriba a la derecha, cards abajo. Esto está en el diseño actual y es lo primero que hay que romper.
- Hover states clonados en cada tipo de elemento (cards, botones, nav links = misma transición).
- Ausencia de jerarquía tipográfica real entre secciones.

---

## 4. Sistema Visual Base

### 4.1 Tokens (confirmar / mantener)

```css
/* Colores */
--bg: #080a0d;
--bg-raised: #0d1117;
--panel: rgba(18, 23, 31, 0.82);
--panel-strong: #111821;
--line: rgba(217, 226, 238, 0.13);
--line-strong: rgba(217, 226, 238, 0.22);
--text: #f4f7fb;
--muted: #9aa9bb;
--soft: #c8d3df;
--cyan: #22d3ee;          /* acento primario */
--blue: #5b8dff;          /* acento secundario */
--green: #80d49b;         /* estado positivo */
--orange: #f29b75;        /* estado de proceso / warning */
--yellow: #f4c95d;        /* label / badge */
--danger: #ff6b6b;

/* Tipografía */
--font-sans: "Inter", system-ui;
--font-mono: "JetBrains Mono", monospace;

/* Espaciado base */
--page-width: 1180px;
--radius: 8px;
--radius-sm: 6px;
```

### 4.2 Escala tipográfica (definir una sola vez)

| Rol | Tamaño | Peso | Familia |
|---|---|---|---|
| Display (h1 hero) | `clamp(3.6rem, 7vw, 6.8rem)` | 950 | Inter |
| Heading XL (h2 sección) | `clamp(2.1rem, 5vw, 4.55rem)` | 930 | Inter |
| Heading L (h3 card) | `1.28rem` | 800 | Inter |
| Label mono | `0.75rem` | 850 | JetBrains Mono, uppercase |
| Body base | `1rem–1.04rem` | 400 | Inter |
| Body lead | `1.08rem–1.28rem` | 400 | Inter |
| Caption | `0.82rem–0.88rem` | 500–700 | Inter o Mono |

> **Regla:** Nunca usar más de 2 tamaños de heading distintos en la misma sección.  
> **Regla:** Peso 950 solo para h1. Peso 930 solo para h2 de sección. El resto baja.

### 4.3 Backgrounds por sección (no repetir el mismo)

Variar el fondo de sección como recurso de ritmo visual:

- **Hero:** grid sutil + glow radial en esquinas (ya existe, mantener).
- **Método:** fondo completamente oscuro `--bg`, sin panel.
- **Agente AI:** fondo `--bg-raised` con una línea diagonal/sweep muy sutil.
- **Experiencia:** fondo oscuro con separador de línea horizontal entre items.
- **Trabajo visual:** fondo `--bg` con los proyectos tomando todo el ancho.
- **Proyectos propios:** fondo `--panel-strong` con textura de ruido opcional (ver §7).
- **Stack:** fondo `--bg` minimalista, dejar respirar.
- **Contacto:** fondo oscuro, protagonismo tipográfico.

---

## 5. Header — Rediseño Completo

### Problema actual

El header sticky funciona pero no evoluciona con el scroll. Es estático: mismo fondo, mismo peso visual, misma altura. No hay diferenciación entre estado inicial y estado scrolleado.

### Comportamiento requerido

```
Estado inicial (top = 0):
  - Fondo completamente transparente o con opacidad muy baja (0.0–0.15).
  - Sin border visible.
  - Logo full visible.
  - Sin backdrop-filter (no hay contenido debajo aún).

Estado scrolled (scroll > 60px, detectado con JS o CSS scroll-driven):
  - background: rgba(8, 10, 13, 0.84) → transición suave 280ms ease.
  - border-bottom: 1px solid var(--line) → fade in.
  - backdrop-filter: blur(18px) saturate(180%) → activa.
  - box-shadow: 0 1px 0 var(--line), 0 8px 32px rgba(0,0,0,0.22).
  - Altura reduce: 70px → 56px via transition en min-height/padding.
  - Logo shrink: de 28px a 24px border-radius o escala sutil.
```

**CSS scroll-driven (nativo, sin JS):**
```css
@keyframes headerScrolled {
  from { 
    background: rgba(8,10,13,0); 
    border-color: transparent;
    backdrop-filter: blur(0px);
  }
  to { 
    background: rgba(8,10,13,0.84);
    border-color: var(--line);
    backdrop-filter: blur(18px) saturate(160%);
  }
}

.siteHeader {
  animation: headerScrolled linear both;
  animation-timeline: scroll(root);
  animation-range: 0px 120px;
}
```

### Nav links — hover con indicador activo

Reemplazar `background: rgba(255,255,255,0.07)` genérico por:

```css
/* Sliding underline via ::after */
.siteHeader nav a {
  position: relative;
}
.siteHeader nav a::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 10px;
  right: 10px;
  height: 1.5px;
  background: var(--cyan);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
.siteHeader nav a:hover::after,
.siteHeader nav a[aria-current="page"]::after {
  transform: scaleX(1);
}
```

### Mobile nav

En mobile (< 820px), el nav horizontal con scroll oculto es aceptable pero puede mejorar:
- Añadir fade gradients en los extremos izquierdo/derecho del nav para indicar scroll.
- Indicar sección activa con un punto `·` de color cyan antes del link.
- Mínimo 44px de touch target en todos los links.

---

## 6. Hero — Evolución

### Problema actual

Buen punto de partida. El panel técnico a la derecha es diferenciador. El h1 es sólido. Los problemas son:
1. Sin movimiento de entrada staggered — todo entra junto.
2. Sin ningún elemento de parallax o depth.
3. El panel técnico es estático — se siente placeholder.
4. Las heroActions no tienen hover personality.

### Mejoras específicas

#### Entrada staggered (animaciones en cadena)

```
0ms   → .heroMeta (kicker) fade in + translateY(12px→0)
80ms  → h1 fade in + translateY(16px→0)  
180ms → heroCopy > p fade in
280ms → .heroActions fade in
90ms  → .systemPanel (paralelo al h1, lado derecho)
```

Duración de cada pieza: 520–620ms, ease-out.

#### Panel técnico — hacerlo vivo

El panel es la pieza más diferenciadora del hero. Darle vida:

- **Cursor parpadeante** en la última línea de comandos (CSS `@keyframes blink`).
- **Typing effect** en la última línea: animación de caracteres que aparecen como si se escribieran en tiempo real (CSS `steps()` o pequeño JS de 0kb).
- **Output line con color:** cuando un comando "termina", mostrar una línea de output en `--green` ("→ OK") con fade-in.
- **Hover en filas del panel:** `background: rgba(255,255,255,0.04)` al pasar el cursor, como un editor real.

#### Botones de hero — más personalidad

```css
/* Botón primario: glow on hover */
.actionPrimary:hover {
  box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.18),
              0 0 20px rgba(34, 211, 238, 0.12);
  transform: translateY(-1px);
}

/* Botón secundario: border que crece */
.actionSecondary {
  position: relative;
  overflow: hidden;
}
.actionSecondary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255,255,255,0.06);
  transform: translateX(-100%);
  transition: transform 240ms ease;
}
.actionSecondary:hover::before {
  transform: translateX(0);
}
```

#### Scroll indicator

Debajo del hero, antes de la primera sección: un indicador sutil de scroll. Puede ser:
- Una línea vertical animada que pulsa de arriba a abajo.
- Un texto pequeño mono `scroll →` con opacidad baja que desaparece al hacer scroll.
- Un chevron animado con CSS bounce muy sutil.

---

## 7. Texturas y Profundidad

### Ruido de fondo (opcional pero recomendado)

Una textura de ruido SVG o PNG muy baja opacidad (opacity: 0.025–0.04) sobre el fondo da la sensación de que la pantalla "respira". No es visible como elemento, pero se siente.

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  background-size: 256px 256px;
}
```

### Depth en cards

En lugar del mismo `linear-gradient(180deg, rgba(255,255,255,0.066), rgba(255,255,255,0.026))` para todas las cards, variar según jerarquía:

- **Cards featured/grandes:** `background: rgba(14, 18, 28, 0.78)` + `border: 1px solid var(--line)` + inner glow sutil en el borde superior.
- **Cards secundarias:** `background: rgba(10, 14, 20, 0.60)` + border más suave.
- **Cards hover state:** además del `translateY(-4px)`, añadir `box-shadow: 0 0 0 1px var(--line-strong), 0 20px 60px rgba(0,0,0,0.32)`.

### Glow contextual

En secciones clave, usar un glow radial muy suave asociado al contenido:

```css
/* Sección de proyectos: glow azul desde el centro */
.workSection::before {
  content: '';
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(91, 141, 255, 0.06), transparent 70%);
  pointer-events: none;
}
```

---

## 8. Animaciones de Scroll — Implementación

### Estrategia: CSS scroll-driven animations + IntersectionObserver fallback

**Recomendación 2025:** Para efectos básicos de reveal (fade + slide), usar CSS `animation-timeline: view()`. Es nativo, corre en compositor (sin jank), y no requiere JS.

```css
/* Patron base de reveal para elementos */
.reveal {
  animation: revealUp linear both;
  animation-timeline: view();
  animation-range: cover 0% cover 20%;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Versión con clip-path para más impacto */
@keyframes revealClip {
  from { 
    opacity: 0; 
    clip-path: inset(0 0 100% 0);
    transform: translateY(8px);
  }
  to { 
    opacity: 1; 
    clip-path: inset(0 0 0% 0);
    transform: translateY(0);
  }
}
```

> **Siempre** wrappear en `@media (prefers-reduced-motion: no-preference)` para respetar accesibilidad.

### Reglas de animación por sección

| Sección | Tipo de reveal | Dirección | Stagger |
|---|---|---|---|
| Hero | Staggered manual (delay) | translateY | 80ms entre piezas |
| Método (principios) | Fade + slide desde abajo | ↑ | 60ms |
| Agente AI | Fade + slide desde izquierda | → | 0 (bloque) |
| Experiencia (timeline) | Slide desde izquierda por item | → | 100ms |
| Trabajo visual (cards) | Scale desde 0.97 + fade | ↑ | 80ms por card |
| Proyectos propios | Slide horizontal alternado | ←→ | Por card |
| Stack | Fade simple | ↑ | 30ms por badge |
| Contacto | Fade | ↑ | 0 |

### Regla de oro de animaciones

> Solo animar `opacity` y `transform`. Nada más. Cualquier otra propiedad animada (width, height, border-color, background) causa layout recalculation y jank.  
> Duración: 400–650ms para reveals de sección. 160–280ms para hovers.  
> Máximo 2 elementos animándose en simultáneo en el mismo viewport.

---

## 9. Hover System — Específico por Elemento

### Principio: Cada tipo de elemento tiene su propia personalidad de hover

No puede haber un hover genérico `translateY(-4px) + border brighten` para todo. Esto aplana la jerarquía.

#### 9.1 Nav links
```
→ Underline que crece desde el centro (scaleX 0→1, 200ms ease)
→ Color: var(--text) (sin background fill)
→ NO: background pill
```

#### 9.2 Botón primario (actionPrimary)
```
→ Glow box-shadow: 0 0 0 3px rgba(34,211,238,0.15), 0 0 24px rgba(34,211,238,0.10)
→ translateY(-1px)
→ Duración: 180ms ease
```

#### 9.3 Botón secundario / iconAction
```
→ Background fill sweep (::before translateX -100% → 0, overflow hidden)
→ border-color: var(--line-strong)
→ Duración: 200ms ease
→ NO: translateY en botones secundarios
```

#### 9.4 Cards de proyectos
```
→ translateY(-6px) (más pronunciado que cards secundarias)
→ box-shadow: 0 0 0 1px var(--line-strong), 0 24px 70px rgba(0,0,0,0.38)
→ La imagen dentro hace scale(1.03)
→ El título cambia a var(--text) si estaba en var(--soft)
→ Duración: 220ms cubic-bezier(0.4, 0, 0.2, 1)
```

#### 9.5 Cards de principios / secundarias
```
→ translateY(-3px) (sutil)
→ border-color: var(--line-strong)
→ background brighten muy suave
→ Duración: 180ms ease
→ NO: box-shadow grande (reservado para proyectos)
```

#### 9.6 Stack badges / chips
```
→ background: rgba(34, 211, 238, 0.10)
→ border-color: rgba(34, 211, 238, 0.30)
→ color: var(--cyan)
→ Duración: 140ms ease
→ NO: transform (son inline, no cards)
```

#### 9.7 Links de texto (inline)
```
→ color: var(--cyan)
→ text-decoration-color: var(--cyan)
→ Duración: 120ms
```

#### 9.8 Social / icon links en footer
```
→ background: rgba(255,255,255,0.08)
→ color: var(--cyan)
→ scale(1.06)
→ Duración: 160ms
```

#### 9.9 Experience timeline items
```
→ El border izquierdo (si existe) cambia a var(--cyan) con glow
→ El heading brightens a var(--text)
→ translateX(3px) — horizontal en lugar de vertical, sutil
```

### 9.10 Stripe-style mouse-tracking glow (opcional para grid de proyectos)

Efecto donde un glow radial sigue el cursor dentro del grid. Muy efectivo para dark mode:

```javascript
// En el contenedor del grid de proyectos
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  cards.forEach(card => {
    const cardRect = card.getBoundingClientRect();
    const cx = e.clientX - cardRect.left;
    const cy = e.clientY - cardRect.top;
    card.style.setProperty('--mouse-x', `${cx}px`);
    card.style.setProperty('--mouse-y', `${cy}px`);
  });
});
```

```css
.projectCard::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0;
  border-radius: var(--radius);
  background: radial-gradient(
    400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(34, 211, 238, 0.06),
    transparent 70%
  );
  transition: opacity 300ms ease;
  pointer-events: none;
}
.projectCard:hover::before { opacity: 1; }
```

---

## 10. Diseño Específico por Sección

### 10.1 Hero — Composición

**ADN:** Nombre grande + panel técnico vivo. Primer impacto, no landing genérica.

```
Layout: grid 2 columnas (1.05fr / 0.95fr), gap 34px, min-height 100dvh - header.
Columna izquierda:
  - Kicker mono arriba (disponibilidad / rol actual).
  - h1 display grande, sin letter-spacing, peso 950.
  - Párrafo lead: máx 620px, line-height 1.68.
  - Hero actions: contacto primario, CV secundario, iconos GitHub/LinkedIn.
  - Scroll indicator debajo de las acciones.

Columna derecha:
  - Panel estilo editor con macOS chrome (3 dots coloreados).
  - Lista de comandos con cursor parpadeante en el último.
  - Grid 2x2 de métricas debajo.
  - Footer del panel con 2 CTA links.
```

**Mobile (< 820px):** Columna única. Panel va DEBAJO del copy. Panel se muestra compacto (solo métricas, ocultar comandos o hacer collapsible).

---

### 10.2 Método (Principios) — Rediseño completo

**Problema:** 4 cards iguales en grid 4x1. No hay ritmo. No hay jerarquía.

**ADN nuevo:** Principios como manifesto editorial. Cada uno tiene peso distinto.

**Opción A — Layout editorial escalonado:**
```
Disposición en lugar de grid uniforme:
  - Principio 1: Ancho completo, texto grande a la izquierda, numeración grande a la derecha (1).
  - Principio 2: Mitad izquierda.
  - Principio 3: Mitad derecha (alineado con el 2).
  - Principio 4: Ancho completo, con visual de fondo.

Cada principio:
  - Número grande (01, 02...) en JetBrains Mono, opacity: 0.08, posición absoluta.
  - Ícono 42px arriba.
  - h3 bold.
  - Párrafo descriptivo.
  - Separador sutil entre cada uno.
```

**Opción B — Principios como líneas de terminal:**
```
No cards. En cambio:
  - Cada principio es una "fila" de terminal, con prefijo $ en cyan.
  - Al hover, la fila se expande suavemente mostrando el párrafo descriptivo.
  - Animación: max-height 0 → auto + fade, 240ms ease.
  - Visualmente parece una CLI interactiva, muy on-brand.
```

**Recomendación: Opción B** para el bloque de principios. Es disruptivo sin ser experimental.

---

### 10.3 Agente AI — Workbench de proceso

**Problema:** Sección con texto grande y workflow. Se siente disconnectada del resto.

**ADN nuevo:** Pipeline visual de pensamiento. No una lista de bullets.

```
Layout: 2 columnas (izquierda: copy; derecha: diagrama de workflow).

Izquierda:
  - Heading grande: "Uso agentes para pensar mejor, no para apagar criterio."
  - 3–4 líneas concretas de cómo los uso (sin bullet points, como párrafos).

Derecha — diagrama de workflow:
  - 5 pasos horizontales conectados con flechas/líneas.
  - Cada paso: caja pequeña con ícono mono + label mono.
  - Conexiones: líneas punteadas SVG animadas (dash-offset animation).
  - Apariencia de pipeline técnico, no infografía corporativa.
  
Animación del diagrama:
  - Al entrar al viewport: los pasos aparecen de izquierda a derecha (stagger 100ms).
  - Las líneas conectoras se "dibujan" (stroke-dashoffset 0 → length, 400ms ease).
```

**CSS para línea de pipeline animada:**
```css
.pipelineLine {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: drawLine 600ms ease forwards;
  animation-timeline: view();
  animation-range: cover 0% cover 40%;
}
@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
```

---

### 10.4 Experiencia — Timeline con decisiones

**Problema:** Grid de experiencias con layout estático. Se parece a un CV en HTML.

**ADN nuevo:** Timeline vertical con indicadores, foco en "qué tipo de problema resolví".

```
Layout: timeline vertical con línea izquierda + items expandidos a la derecha.

Línea vertical:
  - 2px de ancho, var(--line).
  - Punto (8px círculo) en cada experiencia. 
  - El punto del trabajo más reciente: filled cyan.
  - Los anteriores: outlined.

Cada item:
  - Fecha + empresa en mono small arriba.
  - Rol + h3.
  - Párrafo enfocado en problema → decisión → resultado.
  - Chips de stack debajo.
  - NO: lista de bullets con responsabilidades genéricas.

Hover en item:
  - translateX(3px) horizontal.
  - El punto de timeline crece levemente (scale 1.2).
  - El borde izquierdo del item cambia a var(--cyan) con glow sutil.

Animación de scroll:
  - La línea vertical "crece" de arriba hacia abajo a medida que el usuario scrollea.
  - CSS: height 0% → 100%, animation-timeline: scroll() scoped al contenedor.
  - Cada item fade-in con slide desde la derecha al entrar al viewport.
```

---

### 10.5 Trabajo Visual (Proyectos profesionales) — Bento Grid

**Problema:** 2 columnas de cards idénticas. No hay jerarquía. Las capturas no lideran.

**ADN nuevo:** Bento Grid con jerarquía visual. El primer proyecto es featured (doble ancho/alto). Los otros se distribuyen en bloques de tamaños variados.

```css
.workGrid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(240px, auto);
  gap: 14px;
}

/* Item featured (primer proyecto) */
.workItem--featured {
  grid-column: span 8;
  grid-row: span 2;
}

/* Items medianos */
.workItem--medium {
  grid-column: span 4;
  grid-row: span 1;
}

/* Items compactos */
.workItem--compact {
  grid-column: span 4;
  grid-row: span 1;
}
```

**Composición visual por card:**
```
- Imagen/captura como BACKGROUND del card (object-fit: cover), no thumbnail.
- Overlay gradient de abajo hacia arriba: rgba(8,10,13,0) → rgba(8,10,13,0.92).
- Texto sobre el overlay: logo + nombre del proyecto + rol + chips de stack.
- Hover: overlay se hace más claro, imagen hace scale(1.04), aparece botón "Ver más".
```

**Mobile:** bento colapsa a single column con cards de altura fija 220px.

---

### 10.6 Proyectos Propios (WePlay, CSA, etc.) — Cards grandes con identidad

**Problema:** Cards comprimidas sin personalidad. No transmiten que los construiste vos.

**ADN nuevo:** Cada proyecto tiene su color de acento propio. No cyan genérico para todos.

```
Cada card:
  - Fondo: color base del proyecto (ej: WePlay → azul oscuro #0d1b2a; CSA → rojo oscuro #1a0d0d).
  - Imagen/logo del proyecto grande, como artwork, no thumbnail.
  - Badge de estado (En desarrollo / Deployed / Pausado).
  - Descripción corta de la decisión técnica más interesante.
  - Stack chips.
  - Link al repo o demo si existe.

Layout: 2 columnas de cards grandes (min-height: 380px).
No mezclar con cards de proyectos profesionales — sección separada con heading propio.
```

**Badge de estado:**
```css
.statusBadge--active  { background: rgba(128,212,155,0.12); color: var(--green); border: 1px solid rgba(128,212,155,0.28); }
.statusBadge--paused  { background: rgba(244,201,93,0.10); color: var(--yellow); border: 1px solid rgba(244,201,93,0.24); }
.statusBadge--wip     { background: rgba(91,141,255,0.10); color: var(--blue); border: 1px solid rgba(91,141,255,0.24); }
```

---

### 10.7 Stack — No más cards todas iguales

**Problema:** Grid de cards de stack iguales. No diferencia responsabilidad real.

**ADN nuevo:** Compact inline system. Como un sidebar de herramientas.

```
Opciones:

A) Columnas con header de categoría + chips de tecnologías:
   - Lenguajes | Frontend | Backend | Cloud | Datos | Automatización
   - Cada categoría: heading mono pequeño como separador.
   - Debajo: chips inline con logos pequeños + nombre.
   - Sin cards — layout fluido tipo tag cloud controlada.
   
B) Tabla técnica estilo readme:
   - 2 columnas: categoría | tecnologías.
   - Líneas de separación sutiles.
   - Más denso, más técnico.
   - Acertado si el tono es "workbench".

Recomendación: A para mejor mobile, B si el target es muy técnico.
```

**Hover en chips:**
```css
.techChip:hover {
  background: rgba(34,211,238,0.10);
  border-color: rgba(34,211,238,0.30);
  color: var(--cyan);
  /* Sin transform — son inline */
}
```

---

### 10.8 Contacto — Foco tipográfico

**Problema:** Layout 2 columnas que compite visualmente. El formulario no tiene personalidad.

**ADN nuevo:** Contacto como cierre editorial. El heading tiene que ser el más memorable.

```
Layout:
  - Heading XXL centrado o justificado: "Contame qué están construyendo."
  - Subtexto breve.
  - Formulario centrado con ancho máximo 520px.
  - Sin la columna de "encajo si..." → moverla como bloque adicional si es necesario.

Formulario:
  - Inputs con border bottom only (sin border completo): apariencia editorial.
  - Focus state: border-bottom-color: var(--cyan) + glow sutil debajo.
  - Label: flota arriba al hacer focus (floating label pattern).
  - Submit button: full width, con arrow → dentro.

Email alternativo:
  - Línea simple: "o escribime a francisco@..." con hover que lo colorea.
```

**Floating label CSS:**
```css
.formGroup { position: relative; }
.formGroup label {
  position: absolute;
  top: 50%; left: 0;
  transform: translateY(-50%);
  transition: all 180ms ease;
  color: var(--muted);
  pointer-events: none;
  font-size: 0.94rem;
}
.formGroup input:focus ~ label,
.formGroup input:not(:placeholder-shown) ~ label {
  top: -4px;
  font-size: 0.76rem;
  color: var(--cyan);
}
```

---

### 10.9 Footer — No descuidar

```
Footer simple pero con carácter:
  - Izquierda: "Francisco Porciel" + año en mono.
  - Centro (opcional): links de sección repetidos para comodidad.
  - Derecha: íconos GitHub, LinkedIn, email.
  - Línea de copyright: "Diseñado y construido en Buenos Aires."
  - NO: párrafos, no bloques de texto.
```

---

## 11. Sección de Encabezados de Sección — Romper el Patrón Actual

**Problema:** Cada sección usa `.sectionHeader` con el mismo patrón: título izquierda, descripción derecha. Esto hace que todo se vea idéntico aunque el contenido sea distinto.

### Variaciones por sección

| Sección | Patrón de encabezado |
|---|---|
| Método | Heading XXL centrado, sin descripción lateral |
| AI | Heading grande izquierda, descripción abajo en italic |
| Experiencia | Heading + "número de roles" en mono a la derecha |
| Trabajo visual | Heading full-width, subtexto en una sola línea |
| Proyectos | Heading + frase corta en mono |
| Stack | Heading compacto (no tan grande) + descripción inline |
| Contacto | Heading dominante, centrado, sin layout grid |

---

## 12. Sistema de Animaciones — Resumen Ejecutivo

### Qué animar y cómo

| Tipo | Propiedad | Duración | Easing |
|---|---|---|---|
| Section reveal | opacity + translateY | 500–620ms | ease-out |
| Card reveal | opacity + translateY + scale | 380–480ms | cubic-bezier(0.4,0,0.2,1) |
| Hover card | translateY + box-shadow | 180–220ms | ease |
| Hover button | transform + box-shadow | 160–180ms | ease |
| Nav hover | scaleX (underline) | 200ms | cubic-bezier(0.4,0,0.2,1) |
| Modal open | opacity + scale(0.98→1) | 190ms | cubic-bezier(0.2,0.8,0.2,1) |
| Modal close | opacity | 140ms | ease |
| Pipeline lines | stroke-dashoffset | 500–700ms | ease |
| Cursor blink | opacity | 530ms | steps(1) |
| Header scroll | background + blur | 280ms | ease |

### Qué NO animar nunca

- `width`, `height`, `top`, `left`, `right`, `bottom` → layout recalculation.
- `background-color` en elementos frecuentes → triggera paint.
- Nada que afecte layout en el path de scroll.
- Múltiples secciones revelándose en simultáneo.

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
  /* Elementos con animation-timeline: view() también deben tener fallback */
  .reveal {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## 13. Mobile First — Especificaciones Críticas

### Breakpoints

```
< 375px  → Edge case, mínimo funcional
375–619px → Mobile core
620–819px → Mobile large / small tablet
820–1079px → Tablet / medium
1080px+  → Desktop (diseño principal)
```

### Reglas por viewport

**375–619px:**
- `.pageShell`: width = 100% - 20px.
- h1 hero: `clamp(2.4rem, 11vw, 3.6rem)`.
- h2 sección: `clamp(1.8rem, 9vw, 2.6rem)`.
- Bento grid de trabajo: single column, height 220px fija por card.
- Panel técnico: solo métricas (ocultar command list con `display: none`).
- Nav: horizontal scroll, fade en extremos, todos los links visibles sin overflow invisible.
- Footer: vertical stack.
- Formulario: padding 16px, no 24px.
- Cards de proyectos propios: stack vertical, min-height: auto.
- Touch targets: mínimo 44x44px en TODO elemento interactivo, sin excepción.

**620–819px:**
- Grid de principios: 2 columnas.
- Stack grid: 2 columnas.
- Contact: single column (form debajo de copy).
- Project grid: 2 columnas de igual ancho.

**820–1079px:**
- Hero: single column (panel debajo del copy).
- Todo lo demás: grids de 2 columnas.

### No horizontal scroll

```css
html, body {
  overflow-x: hidden;
  max-width: 100vw;
}
/* También chequear: ningún elemento con width fija mayor al viewport */
```

---

## 14. Accesibilidad y Calidad

### Checklist de producción

- [ ] Contraste mínimo **4.5:1** en texto normal, **3:1** en texto grande (≥18px bold).
- [ ] Focus visible en TODOS los elementos interactivos: `outline: 2px solid var(--cyan); outline-offset: 3px`.
- [ ] `prefers-reduced-motion` respetado (ver §12).
- [ ] Sin scroll horizontal en ningún breakpoint.
- [ ] Sin texto cortado en cards (usar `overflow-wrap: break-word`).
- [ ] Modal lightbox: usable con teclado (Tab, Escape, Enter), `aria-modal`, `role="dialog"`.
- [ ] `lang` attribute correcto en `<html>` y en secciones bilingüe.
- [ ] Todas las imágenes con `alt` descriptivo (no vacío, no "imagen").
- [ ] Touch targets ≥ 44x44px.
- [ ] Sin `pointer-events` desactivados en elementos accesibles.
- [ ] Cada sección tiene `id` para navegación por anchor.
- [ ] Nav con `aria-current="page"` en link activo.

### Performance

- Imágenes: WebP, lazy loading nativo (`loading="lazy"`), tamaños apropiados por breakpoint.
- Fuentes: `font-display: swap`, preload de Inter y JetBrains Mono.
- Animaciones: solo `transform` y `opacity`. Will-change solo en elementos con animación continua (cursor, etc.).
- No importar librerías JS para efectos que CSS puede hacer (scroll-driven animations).

---

## 15. Identidad de Marca — Detalles que Distinguen

Pequeños elementos que suman coherencia y personalidad:

### Cursor custom (desktop only)
```css
* { cursor: url('data:image/svg+xml,...'), auto; }
```
Un cursor simple: punto circular de 8px en blanco, sin reemplazar el puntero estándar (solo el default cursor, no el pointer de links).

### Selección de texto
```css
::selection {
  color: #061014;
  background: var(--cyan);
}
```
Ya existe. Mantener.

### Scrollbar custom
```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { 
  background: var(--line-strong); 
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover { background: var(--muted); }
```

### Número de sección como decoración
En cada sección, un número grande de fondo (01, 02...) con opacity: 0.04–0.06, posición absolute, pointer-events: none. Funciona como "marca de agua" editorial.

### Kicker labels en mono
Cada sección empieza con una línea pequeña en `--font-mono`, `0.74rem`, `--cyan`, uppercase, con un prefijo `//` o un punto `·`:
```
// EXPERIENCIA  
// PROYECTOS
// CONTACTO
```

---

## 16. Estructura de Secciones (Definitiva)

```
1. HEADER (sticky, evoluciona con scroll)
2. HERO
   - Copy: nombre, posición, descripción
   - Panel técnico animado
   - Scroll indicator
3. MÉTODO / PRINCIPIOS
   - 4 principios estilo CLI interactivo (hover expand)
4. AGENTE AI
   - Copy + pipeline diagram SVG animado
5. EXPERIENCIA
   - Timeline vertical
6. TRABAJO VISUAL (proyectos profesionales)
   - Bento grid con imagen-fondo
7. PROYECTOS PROPIOS
   - Cards grandes con identidad de color
8. STACK
   - Compact tag system por categoría
9. CONTACTO
   - Heading dominante + formulario centrado
10. FOOTER
    - Minimal, técnico
```

---

## 17. Decisiones Tomadas

| Decisión | Valor elegido |
|---|---|
| Ruta visual base | A + B (editorial técnico + workbench) |
| Header | Evoluciona con scroll (transparente → frosted) |
| Sección de principios | CLI expandible (hover reveal) |
| Trabajo visual | Bento grid con imagen fondo + overlay |
| Timeline experiencia | Vertical con línea y puntos |
| Stack | Chip system inline por categoría |
| Contacto | Heading dominante + form centrado |
| Animaciones | CSS scroll-driven + IO como fallback |
| Mouse tracking | Solo en grid de proyectos profesionales |
| Cursor custom | No (innecesario para el tono) |
| Sonido | No |
| 3D / WebGL | No |
| Modo claro | No (dark como base única) |

---

## 18. Anti-Patrones a Evitar Específicamente

1. **Misma transición para todo:** `transition: all 200ms ease` — NUNCA usar `all`. Siempre listar propiedades específicas.
2. **translateY(-4px)** en absolutamente todo como único efecto de hover.
3. **Cards iguales** en grid sin variación de tamaño o jerarquía.
4. **Gradient animado con `background-size: 200% 200%`** en el hero — se ve barato.
5. **Outline: none** en elementos interactivos — rompe accesibilidad.
6. **z-index: 9999** sin control — usar una escala: 1 (base) / 10 (fixed) / 20 (header) / 100 (modal) / 1000 (overlay).
7. **`animation: all`** — invalida prefers-reduced-motion.
8. **Blur en muchos elementos a la vez** — costo GPU alto, solo usar en header y modales.
9. **Placeholder como label** — el placeholder desaparece al escribir, usar floating label.
10. **Texto blanco puro (#ffffff) sobre fondo oscuro** — usar `--text: #f4f7fb` (ya correcto).

---

*Documento actualizado: mayo 2026. Próxima revisión: al iniciar implementación de cada sección.*
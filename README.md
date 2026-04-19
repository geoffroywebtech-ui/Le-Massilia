# Handoff: Le Massalia — Site Premium

## Overview
Site web pour **Le Massalia**, un bistrot méditerranéen street-wise marseillais situé à Koh Samui (Thaïlande). L'esthétique mélange l'identité OM/marseillaise (bleu, jaune, stickers, tampons, typo condensée, argot) avec des touches tropicales thaï. L'ambiance cible : chaleur, convivial, tendance, explosif.

## About the Design Files
Les fichiers inclus dans ce bundle sont des **références de design créées en HTML/React (Babel standalone)** — des prototypes montrant l'apparence et le comportement voulus, **pas du code de production à copier tel quel**.

La tâche du développeur est de **recréer ces designs dans l'environnement cible** (Next.js, Astro, Nuxt, etc.) en utilisant les patterns et librairies établies du projet — ou, si aucun environnement n'existe, de choisir le framework le plus adapté (ma recommandation : **Next.js 14 App Router + Tailwind CSS**, ou **Astro + Tailwind** si le site reste majoritairement statique).

## Fidelity
**High-fidelity (hifi)** — couleurs, typos, espacements, animations et interactions sont finaux. Le dev doit recréer le site au pixel près en utilisant les librairies du codebase cible.

## Tech recommandée pour la recréation
- **Framework** : Next.js 14 (App Router) ou Astro
- **Styling** : Tailwind CSS + CSS variables pour la palette (permet le Tweaks panel)
- **Fonts** : Google Fonts via `next/font` ou équivalent — Archivo Black, Archivo Narrow, Space Grotesk, JetBrains Mono, Caveat
- **Animations** : Framer Motion (pour l'IntersectionObserver + entrées) + CSS keyframes pour les marquees
- **Form** : React Hook Form + Zod, backend = simple API route qui envoie un mail (Resend / SendGrid) ou intègre avec un système de résa (TheFork / SevenRooms)
- **Images** : `next/image` avec placeholder blur, sourcées via un CMS (Sanity / Contentful) ou simplement dans `/public`
- **i18n** : si FR/EN/TH demandé, `next-intl` ou `next-i18next`

## Screens / Sections

Le site est une **single-page** avec ancres. Ordre des sections :

### 1. Nav (fixed top)
- Fixed en haut, transparent au top, devient bleu opaque `rgba(11,59,143,.96)` avec blur après 40px de scroll
- Logo "LE MASSALIA" (Archivo Black) + sous-texte mono "MRS → KSM"
- Links desktop (≥720px) : Carte, Histoire, Galerie, Trouver — police JetBrains Mono, uppercase, 12px, letter-spacing .16em
- CTA "Réserver »" en sticker jaune (`--jaune`), rotation -1.5deg, bordure noire 2px, ombre offset `3px 3px 0 var(--noir)`

### 2. Hero (100vh, fond `--bleu`)
- **Bandeau meta top** : 4 items mono 11px uppercase — "EST. 2024 — KOH SAMUI", coords GPS "N 9°28' E 100°02'", heure locale KSM en live (UTC+7, update 30s), tagline
- **Cercle soleil jaune** en haut à droite, 48vw, `border-radius:50%`, inner shadow orange. Bouge avec la souris (parallax léger)
- **Titre massif** 3 lignes : "LE" / "MASSALIA" (jaune avec text-shadow orange offset 6px/6px, lettre "L" en stroke noir 3px) / sous-titre narrow "— BISTROT MÉDITÉRRANÉEN · KOH SAMUI —"
- Taille titre : `clamp(72px, 16vw, 260px)`, line-height .82, letter-spacing -.02em
- **Sticker rouge cercle** top-left : "BOUILLABAISSE · TOM YUM · MÊME COMBAT", rotation -12deg, 118×118
- **Tampon SVG** top-right : cercle avec texte en spirale "LE MASSALIA · KOH SAMUI · EST.2024", jaune, inner "M", rotation 8deg
- **Bande rayée bleu foncé** en diagonale bottom-left (palm abstrait)
- **Grille blueprint** bleu ciel en fond, masque radial qui fade sur les bords
- **Sub-grid** (grid 1.1fr .9fr, collapse en 1 col ≤800px) :
  - Gauche : paragraphe `--creme`, Archivo Narrow 500, avec "fort et avec les mains" souligné en Caveat jaune — 2 CTAs (Réserver en sticker crème/bleu, Voir la carte en outline crème) — flèche dessinée + note Caveat "viens, on t'attend !"
  - Droite : pile de 2 placeholders rotés (photo plat -3deg + photo ambiance salle -6deg) avec sticker jaune "100% FRAIS · 100% FORT"

### 3. Marquee bandeau (crème, bleu)
- Défilement texte uppercase Archivo Black 20-34px, "BIENVENUE À MASSALIA", "MARSEILLE → KOH SAMUI", "COOK LOUD · EAT LOUD", etc.
- Animation CSS keyframe `marq` : translateX(0 → -50%), linéaire
- Vitesse ajustable via Tweaks (16s explosif / 28s normal / 44s calme)

### 4. Story (fond `--creme`)
- Big outline word "HISTOIRE" décoratif en fond (stroke bleu 2px, opacity .12)
- Tag "02 NOTRE HISTOIRE" + tape jaune "marseille → koh samui"
- Titre H2 Archivo Black `clamp(48px, 8vw, 120px)` : "Du Vélodrome à la plage." (2e ligne orange)
- Paragraphe intro Archivo Narrow 20px
- **Timeline 4 étapes** (grid 4 cols, collapse en 2 ≤900px) :
  - 01 · 1998 · Marseille, 13006 (bleu)
  - 02 · 2014 · Le Panier (crème)
  - 03 · 2021 · Bangkok (jaune)
  - 04 · 2024 · Koh Samui (orange)
  - Chaque carte : bordure 1.5px noir, shadow offset `5px 5px 0`, rotation légère, tag étape en top-left noir sur crème, placeholder photo, date mono uppercase orange, texte Archivo Narrow
  - **Entrée animée** via IntersectionObserver : `translateY(30px) → 0`, stagger 120ms entre cartes, durée 700ms cubic-bezier(.2,.8,.2,1)
- **Citation chef** : tampon SVG "CHEF · KARIM" (rouge, inner "K") + blockquote Archivo Black clamp(26-46px), footer mono "— Karim, chef & proprio"

### 5. Menu (fond `--bleu`, texte `--creme`)
- Big outline word "LA CARTE" en fond (stroke ciel opacity .14)
- Tag "03 LA CARTE" + tape orange "fresh · daily · bon"
- Titre H2 "Ce soir on mange" (jaune sur 2e ligne)
- **Tabs catégories** : Pour commencer / Les plats / Du sucré / À boire — bordure crème 2px, actif = bg jaune + rotation -1.5deg + shadow `4px 4px 0 var(--noir)`
- **Grid items** (2 cols, 1 ≤900px) — chaque plat en "ticket" :
  - Bg crème, bordure noir 1.5px, rotation alternée ±.4deg, shadow offset `5px 5px 0 var(--noir)` → au hover : `10px 10px 0 var(--jaune)` + translate -3px/-3px
  - 3 "trous perforés" en top-left
  - Titre plat Archivo Black uppercase + prix en bloc mono noir sur fond noir (crème), exemple "280 ฿"
  - Description Archivo Narrow 500
  - Ligne pointillée de découpe + pied ticket mono (N° + "signature"/"cuisine ouverte")
  - Tags (Sign é / Nouveau / Fort) en sticker rotation 6deg, couleur selon type
  - Plat "signature" (La Bouillabaisse) = `grid-column: 1 / -1` (full width)
- **Footer strip** dashed crème : prix en THB / menu qui tourne / 10% service

Contenu des plats : voir `src/menu.jsx` (4 catégories × 3-5 items chacune)

### 6. Marquee bandeau (jaune, noir)
Textes : "★ LE MASSALIA", "KOH SAMUI — CHAWENG", "OUVERT TOUS LES SOIRS", etc.

### 7. Gallery (fond `--creme-2`)
- Tag "04 DANS LA MAISON" + tape ciel "snapshots / pas de filtre"
- Titre "Ambiance maison." (rouge sur "maison")
- **Grid 12 cols** avec 6 polaroids en span variables (6,4,5,7,4,8) et offsetY (0,40,0,30,10,0)
- Chaque polaroid : fond crème, padding `14px 14px 44px`, rotation légère, shadow `4px 6px 0 var(--noir)` → au hover : `8px 12px 0 var(--bleu)` + scale 1.03
- Caption Caveat 18px bleu, centrée
- **Press strip** (grid 4 cols, collapse en 2 ≤900px / 1 ≤520px) : 4 citations presse fictives (Time Out BKK, Le Routard, Monocle, Samui Local) avec nom mono uppercase bleu, citation narrow 600, score Archivo Black orange

### 8. Marquee bandeau (bleu, crème, reverse)
Textes résa : "RESERVEZ → +66 77 000 000", "CHAWENG BEACH ROAD", etc.

### 9. Reserve (fond `--noir`, texte `--creme`)
- Big outline "RÉSERVER" stroke jaune
- Tag "05 RÉSERVATION" + tape orange
- Titre "Une table, peuchère ?" (jaune sur 2e ligne)
- **Grid 1.1fr .9fr, collapse en 1 col ≤900px** :
  - **Gauche — formulaire** : bg crème, shadow `10px 10px 0 var(--jaune)`, sticker rouge rotation 8deg "TABLE POUR TOI" top-right
    - Ticket header mono "N° [random 4 digits]"
    - Fields : Date (input date) + Heure (select), Pax (boutons 1-8 + 9+), Nom + Téléphone, Notes (textarea)
    - Pax actif = bg jaune + shadow `3px 3px 0 var(--noir)`
    - Footer dashed : "CONFIRMATION SOUS 24H" + CTA "Envoyer la demande →" (bg bleu, crème, shadow 4/4)
    - État envoyé : message "Ouais !" + bouton retour
  - **Droite — info** :
    - Carte bleue "OÙ NOUS TROUVER" : adresse Chaweng Beach Rd, faux-map dessinée (grille + route crème + pointillé bleu + bande plage jaune + pin rouge avec label)
    - Carte jaune "HORAIRES" : "Tous les soirs 18:00 — minuit · Fermé le lundi · Brunch dimanche"
    - Carte outline : téléphone + email

### 10. Footer (fond `--bleu-2`)
- Big word "MASSALIA" fond `--bleu` letter-spacing -.03em, débord bottom
- Grid 2fr 1fr 1fr 1fr (collapse 2 cols ≤900px, 1 col ≤520px) :
  - Col 1 : logo + tagline mono + paragraphe
  - Col 2 : Naviguer (Carte / Histoire / Galerie / Réserver)
  - Col 3 : Trouver (adresse / tel / email)
  - Col 4 : Suivre (IG / TikTok / FB)
- Copyright dashed : "© 2026 LE MASSALIA · FAIT AVEC DE L'AIL" + "MRS — KSM / 9 003 KM" + mentions légales

### 11. Tweaks panel (floating bottom-right)
Panneau en bas à droite, activable via toolbar :
- **Palette** : OM (défaut) / Sunset / Night / Pastis — chacune change toutes les CSS vars
- **Intensité animations** : calme / normal / explosif (change vitesse marquees)
- **Grain** : off / normal / fort (opacity du grain overlay)
- **Hero headline** : MASSALIA / MARSEILLE / SAMUI (change le mot central du hero)

## Interactions & Behavior

### Global
- **Scroll smooth** pour les ancres de nav (`html { scroll-behavior: smooth }` recommandé dans la recréation)
- **Grain overlay** SVG turbulence fixed en `::before` sur body, `mix-blend-mode: multiply`, opacity contrôlée par var `--grain-opacity`

### Hero
- **Mousemove parallax** : soleil translate `-1.2 × (mouse - .5) × 14px`, palm-stripes `+.6 ×`, titre MASSALIA ligne 2 `-.3 ×`. Transition .4s ease-out
- **Horloge KSM** : `new Date()` + offset UTC+7, format HH:MM, update chaque 30s

### Story timeline
- **IntersectionObserver** sur la section, threshold .15, déclenche une seule fois
- Cartes : `translateY(30px) rotate(0)` → `translate(0,0) rotate([variable])` avec stagger 120ms

### Menu
- **Tabs** : changement d'état React, transition `.15s ease`
- **Card hover** : `translate(-3px,-3px) rotate(-.3deg)` + shadow jaune, transition `.2s ease`

### Gallery polaroids
- **Hover** : `scale(1.03) rotate(-.5deg)` + shadow bleue, transition `.3s ease`

### Reserve form
- **Validation** : HTML5 native (required sur nom/tel/date/time suffisant pour la démo, à renforcer avec Zod en prod)
- **Submit** : `preventDefault`, set `sent=true`, afficher message succès
- **À brancher en prod** : POST vers API route → envoi mail ou webhook Resend/SendGrid

### Marquees
- CSS keyframe `@keyframes marq { from{translateX(0)} to{translateX(-50%)} }`
- Contenu répété 4× pour loop sans couture, `width: max-content`
- `animation-direction: reverse` pour le marquee du bas

## Design Tokens

### Palette OM (défaut) — CSS variables sur `:root`
```css
--bleu:    #0b3b8f;   /* bleu OM profond — backgrounds principaux */
--bleu-2:  #0a2a63;   /* bleu foncé — footer, stripes */
--ciel:    #6fb7e4;   /* bleu ciel — grids, details */
--creme:   #f3ede0;   /* blanc cassé — backgrounds clairs, texte sur bleu */
--creme-2: #ece2cc;   /* crème ombré — background gallery */
--jaune:   #f7c948;   /* jaune soleil — accent principal, stickers, CTA */
--orange:  #ea5a1e;   /* terracotta — accents chauds, dates */
--rouge:   #c8232c;   /* rouge tampon — stickers, scores */
--encre:   #111214;   /* texte principal */
--noir:    #0a0a0b;   /* bordures, shadows */
```

### Palettes alternatives (Tweaks)
- **Sunset** : bleu `#2a1248`, bleu-2 `#1a0830`, ciel `#f09c7a`, creme `#f6e8d8`, jaune `#f4a93a`, orange `#e84a1b`, rouge `#a82149`
- **Night** : bleu `#0a0a0b`, bleu-2 `#050506`, ciel `#4a6fb0`, creme `#ede3cf`, jaune `#f0c040`, orange `#d64a20`, rouge `#b81f26`
- **Pastis** : bleu `#1a5f4f`, bleu-2 `#103f33`, ciel `#a8d8a8`, creme `#f4ecd3`, jaune `#edc63a`, orange `#e25a1a`, rouge `#b82630`

### Typography
- **Archivo Black** — titres massifs, CTAs, stickers. Classe `.disp`. `letter-spacing: -.01em`, `line-height: .85`
- **Archivo Narrow** (400/500/600/700) — body alternatif punchy. Classe `.narrow`
- **Space Grotesk** (400/500/600/700) — body par défaut, UI
- **JetBrains Mono** (400/500/700) — meta, labels, tickets. Classe `.mono`, `font-variant-ligatures: none`
- **Caveat** (400/700) — notes manuscrites, annotations. Classe `.hand`

### Spacing / radii
- Radii : quasi aucun (0), sauf stickers pill (999px) et cercles (50%)
- Section padding vertical : 110-120px desktop
- Container max-width : 1300-1400px
- Gap grid : 18-40px

### Shadows (offset, pas de flou — style affiche)
- Standard : `4px 4px 0 var(--noir)` / `5px 5px 0 var(--noir)`
- Accent hover : `10px 10px 0 var(--jaune)` ou `10px 10px 0 var(--bleu)`
- Sticker : `2px 3px 0 rgba(0,0,0,.85)` ou `3px 4px 0 rgba(0,0,0,.85)`

### Rotations (style stickers collés)
- Stickers : ±4 à ±12deg
- Cartes menu : ±.4deg (alterné)
- Polaroids : ±2 à ±3deg
- Boutons actifs : -1.5deg

## State Management
Minimal — React useState local suffit. Pour la recréation Next.js :
- `palette`, `intensity`, `grain`, `heroWord` → contexte global ou Zustand pour les Tweaks
- Formulaire résa → React Hook Form
- Tabs menu → useState local dans composant Menu
- Nav scrolled → useState + scroll listener (passive)
- Clock → useState + setInterval

## Assets
**Aucune image réelle n'est incluse** — tous les visuels sont des `<Placeholder>` rayés avec caption mono. Le client devra fournir :
- **Hero** : photo plat signature (900×700) + photo ambiance salle (700×500)
- **Story timeline** : 4 photos (500×340 chacune) — Marseille cuisine grand-mère, Le Panier, Bangkok street food, Le Massalia Samui
- **Gallery** : 6 photos variées (portrait et paysage) — terrasse sunset, daurade, bar pastis, cuisine ouverte, chef portrait, apéro samedi
- **Logo** : à créer — proposition Archivo Black uppercase "LE MASSALIA" + sous-texte mono "MRS → KSM"

Le SVG `<Stamp>` (tampon circulaire) et toutes les formes décoratives sont générés en runtime — pas d'assets statiques nécessaires pour ça.

## Files
Structure du projet de design :

```
Le Massalia.html          # Entry point, charge Babel + tous les scripts
src/
  primitives.jsx          # Placeholder, Sticker, Stamp, Marquee, Tape, Arrow, SectionTag, useInView
  nav.jsx                 # Nav fixed + scroll state
  hero.jsx                # Hero avec parallax + horloge + titre massif
  story.jsx               # Timeline 4 étapes + citation chef
  menu.jsx                # Tabs + ticket cards + MenuCard
  gallery.jsx             # Polaroids + press strip + marquees
  reserve.jsx             # Formulaire + Info (map/horaires/contact)
  footer.jsx              # 4-col grid + big word MASSALIA
  tweaks.jsx              # Panneau Tweaks (palette/intensité/grain/heroWord)
  app.jsx                 # Root : applique palette via CSS vars, mount sections
```

## Notes pour l'implémentation Next.js / Astro

1. **CSS variables > Tailwind arbitrary** pour la palette afin que le Tweaks panel puisse les swap en runtime (sinon préférer les CSS vars avec Tailwind config).
2. **Grain overlay** : garder le SVG turbulence en data-URI dans un CSS global, fixed, z-index 2000, pointer-events none.
3. **Marquee** : composant `<Marquee>` réutilisable, accepte `speed`, `bg`, `fg`, `reverse`, `children` string[]. Dupliquer le contenu 4× pour la loop.
4. **Stamp SVG** : composant qui prend `text`, `inner`, `color`, `size`, `rotate` et génère un cercle avec `<textPath>` — code dans `primitives.jsx`.
5. **Placeholder** : garder le composant pour le dev, remplacer par `next/image` une fois les photos dispo.
6. **Responsive** : breakpoints utilisés = 520px, 720px, 800px, 900px. Mobile-first conseillé lors de la recréation.
7. **Accessibility** : ajouter `aria-label` sur les boutons de tab menu, `alt` sur les images, vérifier contraste crème sur bleu (OK) et jaune sur noir (OK).
8. **Performance** : lazy-load les sections en-dessous du fold (Gallery, Reserve, Footer). Preload les 2 fonts principales (Archivo Black, Space Grotesk).
9. **i18n** : copy en français avec argot marseillais. Pour EN/TH, prévoir des traductions qui gardent le ton (ne pas traduire "peuchère" littéralement — chercher un équivalent punchy).
10. **SEO** : meta tags complets (og:image, description, locale), structured data `Restaurant` schema.org, sitemap.

## Contenu / copy à conserver

Le ton marseillais/argot est **central** à l'identité :
- "peuchère", "viens, on t'attend", "la té-mère", "on fait la cuisine qu'on aime bouffer, nous", "fait avec de l'ail"
- Mix FR/EN/TH ponctuel : "MÊME COMBAT", "COOK LOUD · EAT LOUD", "fresh · daily · bon"
- Prix en ฿ (baht thaï)
- Références locales : Chaweng Beach Rd, UTC+7, coordonnées GPS, "9 003 KM" (distance Marseille-Samui)

Ne pas édulcorer ce ton en traduisant — c'est ce qui fait la personnalité du site.

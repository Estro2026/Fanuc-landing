# Istruzioni Sara

## 2026-11-17 — Look & Feel (Brand Platform, slide "Look & Feel")
- Fase: mockup / implementazione landing
- Testo: "da questa slide estrapola il look and feel che deve trasparire nella landing attraverso anche elementi grafici e ui"
- Fonte: MATERIALE (Brand Platform) → proposte = PROPOSTA, WAITING_FOR_APPROVAL
- Agenti coinvolti: ui-art-direction, accessibility (contrasti su giallo), image-curator (cutout prodotto)
- APPROVATO (2026-11-17): proposte 1–4 — hero sfumato giallo→giallo 20%, logo a linguetta in alto a destra, parola-chiave rossa (`.h-accent`), barra CTA rossa dal bordo sinistro (`CtaBand.vue`, prima delle FAQ)
- In attesa di asset CANTO: proposte 5–8 (vedi sotto per elenco aggiornato)

## 2026-11-17 — Look & Feel parte 2 (slide Brochure, Editorial/Handbook, Inside FANUC Magazine)
- Testo: "anche qui hai altre slide che comunicano il look and feel"
- Fonte: MATERIALE → proposte A–G = PROPOSTA, WAITING_FOR_APPROVAL
- Agenti coinvolti: ui-art-direction, content-language (titoli bicolore), image-curator (callout, foto)
- Proposte precedenti 5–8 restano valide
- APPROVATO (2026-11-17, "applica quello che puoi, l'importante che non rompi le regole"): A–D
  - A: H2 bicolore con `.h-accent` su tutte le sezioni (solo colore, testo invariato)
  - B: numeri trust strip hero in Druk 32–44px con separatori verticali
  - C: `.eyebrow--band` (fascia grigio scuro, testo bianco) su Vantaggi e Incentivi
  - D: Perché FANUC su fondo nero con accenti gialli
  - Contrasti misurati: accenti rossi 3.7–5.6:1 (solo testo ≥32px), testi piccoli ≥12:1
- In attesa di asset: E, F, G

## 2026-11-17 — Regole: niente gradienti, contrasto CTA
- Testo: "tra le regole è esplicito di non usare i gradienti / attenzione ai contrasti delle cta in stato di default e in hover rispetto allo sfondo / le regole devono rimanere la tua guida fondamentale e cerca di rendere la landing all'avanguardia, estetico"
- Fonte: CLIENTE (Sara) — APPROVATO come regola permanente
- Applicato: gradiente hero rimosso (revoca proposta 1); CTA per superficie con token in layout.css
  - chiaro: nero/giallo → hover rosso/bianco · `.surface-yellow`: rosso/bianco → hover nero/giallo · `.surface-dark`: giallo/nero → hover bianco/nero
  - focus ring per superficie; form disabilitato senza opacity
  - Contrasti misurati: testo ≥5.6:1, bordo CTA vs sfondo ≥4:1 in ogni stato
- Agenti: accessibility, ui-art-direction

## 2026-11-17 — Avanguardia nel rispetto delle regole (proposte 1–6)
- Testo: "Tutte 1-6" — APPROVATO
- 1 Transizione Smart Square tra sezioni: `.section-cut` + `--cut-prev` (layout.css), triangolo 45° col colore della sezione precedente, spacing invariato
- 2 Hero da poster: H1 a tutta larghezza (48–140px), sotto testo/CTA e immagine; nessuna sovrapposizione immagine-testo per non perdere leggibilità
- 3 Indice numerato: `.eyebrow--indexed` con contatore CSS 01–07 (typography.css)
- 4 Microinterazioni: `--cut` registrata con @property; hover CTA allarga il taglio; card con rivelazione diagonale a 45° (`.reveal-cut`, src/composables/revealCut.ts), 400ms, disattivata con prefers-reduced-motion. Hover-ingrandimento solo su elementi cliccabili
- 5 Smart Grid visibile: `.smart-grid-bg` su Vantaggi (linee gialle su giallo 20%) e Incentivi (linee bianche su giallo), 1px, SVG pieno
- 6 Barra avanzamento gialla 2px nell'header (sostituisce il bordo allo scroll)
- Fix collaterale: rimosso id="faq" duplicato
- Agenti: ui-art-direction, motion, accessibility

## 2026-11-17 — Footer, colori, cliché, hero video
- Testo: link privacy/cookie e footer dal sito fanuc.eu/it-it/serie-crx, social con loghi, footer più compatto, niente opacity, togliere cliché AI, hero più d'impatto con il robot — APPROVATO ("Sì, procedi")
- Footer: 6 link legali ufficiali, social Facebook/YouTube/LinkedIn (icone in cerchio come fanuc.eu), assistenza → /it-it/lattenzione-al-cliente-attraverso-servizi-sostenibili, layout a 3 righe (~300px). Link privacy del form → informativa ufficiale
- Taglio 45°: triangolo sborda 1px per coprire la riga sub-pixel; rimosso dalla prima sezione dopo l'hero (sotto c'è il video)
- Colori: testi grigi su giallo → nero pieno; errore form `#ff6b6b` → etichetta rosso FANUC/bianco; rimossi token non ufficiali `--fanuc-white-80/60`. Logo SVG usa #c32d30 (file cliente, non modificato)
- Cliché rimossi: icone finte con simboli Unicode (slot vuoti per pittogrammi CANTO), frecce → nei link di testo (sostituite da sottolineatura); freccia mantenuta solo nella barra CTA (pubblicità FANUC)
- Hero: video CRX dal DAM CANTO in hotlink TEMPORANEO, muted/loop, tasto pausa, fermo con prefers-reduced-motion; box giallo Smart Square sovrapposto. Prima del go-live: loop breve approvato e ospitato con la landing
- Agenti: ui-art-direction, accessibility, ai-cliche-generic-style

## 2026-11-17 — Correzioni: accenti titolo, tinte come sfondo, menu footer
- Testo: titolo hero sovrapposto all'eyebrow; sfondo Vantaggi "con opacity"; menu ripetuto nel footer "non va bene" — CLIENTE
- Titoli h1/h2: padding-top 0.14em per le maiuscole accentate (regola condivisa)
- Regola: niente tinte gialle come sfondo di sezione o box (sembrano trasparenze) → Vantaggi e box testimonianza in giallo pieno
- Footer: rimosso il menu di navigazione (duplicava l'header)

## 2026-11-17 — Hero nella viewport + percepito
- Testo: "la hero compreso il pulsante pause deve essere visibile nella viewport ... fai uno sforzo in più per aumentare ancora di più il percepito" — CLIENTE/APPROVATO
- Hero alta esattamente 100svh − header; titolo scala anche con l'altezza; dati in fascia nera con numeri gialli; pausa in alto a destra. Verificato a 1280×720, 1366×768, 1440×900
- Asset CANTO ufficiali (da fanuc.eu/it-it/serie-crx) centralizzati in src/data/cantoAssets.ts, hotlink TEMPORANEO:
  - foto applicazioni: cobot su macchina utensile (Metalmeccanica), CRX-5iA FoodGrade, CRX-20iA/L, operatrice con tablet teach pendant
  - pittogrammi SVG bianchi su nero (classe `.pictogram`, maschera CSS): CRX, Fast, Lightweight (sfide); Proven Technology, Maintenance Health, Manual Guidance (Perché FANUC)
- Ingresso pannello hero con diagonale 45° (400ms); selezione testo nei colori brand
- Restano placeholder: video delle 8 card Vantaggi

## 2026-11-17 — Anteprime card Vantaggi
- Testo: "Sì, usale" (foto prodotto CRX come anteprime delle card Vantaggi) — APPROVATO
- Foto CANTO: 01 CRX-30iA · 02 operatore con CRX · 03 CRX-3iA · 04 CRX-10iA FoodGrade · 05 CRX-5iA · 06 CRX-10iA · 07 operatrice con tablet teach pendant · 08 CRX con presa Schmalz
- Applicazioni "Produzione e assemblaggio" → CRX con iRVision (nessuna foto ripetuta in pagina: 12/12 uniche)
- Rimosso il tasto play finto: si reinserisce con i video (shot richiesti in crxBenefits.videoPlaceholder)
- Numero card su badge nero Smart Square (contrasto indipendente dalla foto)
- 2026-11-17 — APPROVATO: il play nelle card Vantaggi torna solo con gli 8 video dedicati (nessun video condiviso). Shot richiesti in `crxBenefits.videoPlaceholder`
- 2026-11-17 — CLIENTE: "i video non si capiscono che sono video" (card Vantaggi) → segnale play giallo Smart Square al centro della foto, solo visivo (non cliccabile, aria-hidden) finché arrivano i video; card tutte della stessa altezza. Hero: ripristinato il tasto pausa quadrato originale

## 2026-11-17 — Testimonianza da caso di successo fanuc.eu
- Testo: "utilizza direttamente questo [alternativa: caso di successo fanuc.eu con estratto e link]" — APPROVATO
- Inserito in Perché FANUC (al posto del placeholder): Bonvicini Carpenteria S.r.l. (Verona, 15 dipendenti, primo cobot CRX-10iA/L, saldatura ad arco). Citazione testuale di Alessandro Bonvicini, foto CANTO del caso, link alla storia completa
- Fonte: MATERIALE (fanuc.eu/it-it/casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione). Autorizzazione all'uso richiesta in docs/06-handoff/richiesta-materiali.md §3
- Richiesta materiali creata: docs/06-handoff/richiesta-materiali.md (video hero con soggetti a destra e senza scritte, 8 video vantaggi, font, conferme asset, legale, tecnico)

## 2026-11-17 — Decisioni secondo le regole brand
- Testo: "segui esattamente le regole" (su colore logo e testi card 01/03) — CLIENTE
- Logo SVG: fill #c32d30 → #C32C30 (rosso ufficiale Brand Platform); forma invariata
- Tone of Voice (apertura sul beneficio), claim invariati e con le stesse precisazioni:
  - 01: "Movimenta carichi fino a 30 kg con il modello CRX-30iA, e scegli nella gamma il carico utile adatto al tuo processo."
  - 03: "Posiziona i pezzi ciclo dopo ciclo con una ripetibilità fino a ±0,03 mm, a seconda del modello e delle specifiche tecniche."
  - Scartate le proposte precedenti: aggiungevano promesse non verificate ("senza interrompere il flusso di linea", "dove fa differenza") (cutout CRX, datasheet, pictogrammi in cerchio, ritmo sezioni)

## 2026-11-26 · Wireframe conversione (branch `wireframe-conversione`)
- Fase: wireframe alternativo. Fonte: CLIENTE (istruzione Sara). Copy: PROPOSTA.
- Testo: altra versione su branch separato, stesso contenuto, wireframe; struttura semplice come le pagine fanuc.eu ROBOSHOT Plast 2026, Iperammortamento 2026 e Descrizione del prodotto. Niente video in hero. Copy più diretto. Obiettivo: far conoscere il prodotto e raccogliere lead.
- Il mockup su `main` non è toccato.

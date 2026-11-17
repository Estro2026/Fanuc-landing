# FANUC CRX — SPECIFICA OPERATIVA PER CLAUDE CODE

> **Obiettivo:** progettare e implementare una landing page in italiano per la serie di robot collaborativi FANUC CRX, destinata principalmente alle PMI manifatturiere italiane, con fedeltà estremamente elevata al design system FANUC Europe e continuità visiva con il sito ufficiale.
>
> **Priorità:** (1) conformità del brand; (2) autenticità degli asset; (3) accuratezza dei contenuti; (4) conversione; (5) responsive, accessibilità e performance. Non reinterpretare liberamente il brand.
>
> **Questo documento è un incarico esecutivo.** Analizza il repository, acquisisci i riferimenti autorizzati, implementa la pagina, avvia l'applicazione, acquisisci screenshot e correggi gli scostamenti. Non fermarti al wireframe o a una lista di proposte.

## 0. Fonti e gerarchia delle regole

1. **Brand Platform FANUC Europe, V1.0, 05/2026**, file allegato `MCI-05806-CO_FEC_Brand-Platform_V1 (1).pdf`: fonte primaria di identità visiva e tono. Pagine più importanti: 5–7 (linguaggio/naming), 12–19 (design system), **21–23 (look & feel)**.
2. **Pagina CRX Italia:** https://www.fanuc.eu/it-it/serie-crx — fonte primaria di dati CRX, terminologia, prodotti, benefit, immagini e integrazione con il sito.
3. **Altre pagine FANUC Italia** linkate dalla pagina CRX: applicazioni, servizio, supporto, modelli e casi reali.
4. **Asset originali approvati da FANUC/CANTO**, forniti dal committente o presenti nel repository.
5. **Normativa primaria italiana** aggiornata al momento della pubblicazione per la sezione iperammortamento.

In caso di divergenza: le istruzioni esplicite della Brand Platform prevalgono sulle scelte estetiche osservate sul sito; i dati di prodotto aggiornati del sito prevalgono sulle ipotesi. **Non copiare contenuti di terzi non autorizzati**; usare asset FANUC solo se il team dispone del diritto di utilizzo per questa landing. Per il logo e la tagline impiegare file ufficiali, non ricostruzioni CSS/SVG o testo approssimato.

### 0.1 Preflight obbligatorio

- Ispeziona il progetto esistente: stack, entry point, cartelle, convenzioni, componenti, package manager. **Non sostituire il framework già presente.** Se è vuoto, usa preferibilmente Vue 3 + Vite + TypeScript, con CSS modulare/tokens (non aggiungere librerie inutili).
- Leggi il PDF integrale e **osserva visivamente** le pagine 12–19 e 21–23, non soltanto il testo estratto.
- Apri la pagina CRX e almeno homepage, header, footer, modulo contatti e una pagina di dettaglio prodotto FANUC nello stesso browser. Esamina desktop e mobile.
- Se il browser/strumenti di screenshot non sono disponibili, procedi con un'implementazione accurata fondata sul PDF, **ma segnala il limite nella consegna**: non dichiarare pixel-perfect senza una comparazione visiva reale.
- Verifica disponibilità di logo, font, icone, immagini, filmati, testimonianze e loghi clienti; registra l'origine e i diritti di uso in `docs/asset-manifest.md`.
- Non inventare asset mancanti, endorsement, percentuali di ROI, dati di prestazione o citazioni clienti.

## 1. Obiettivo di conversione e pubblico

Landing B2B lead generation. Pubblico: titolari di PMI, responsabili di produzione, direttori tecnici, responsabili automazione e acquisti. Problemi: personale insufficiente, mansioni ripetitive, timore di introdurre impianti complessi. La promessa deve essere **concreta**: valutare insieme un'automazione CRX adatta al processo, con programmazione accessibile e l'affidabilità FANUC. Non promettere implementazioni immediate, sicurezza assoluta o ritorni garantiti.

**CTA primaria in tutte le sezioni:** `Parla con un esperto` → scroll/accesso al form `#contatto`. **CTA incentivi:** `Scopri se la tua azienda può accedere` → stesso form con argomento precompilato `Iperammortamento`. Nessuna CTA fittizia.

## 2. DESIGN SYSTEM NON NEGOZIABILE

### 2.1 Token colore ufficiali

| Token | Valore | Uso |
|---|---|---|
| `--fanuc-yellow` | `#FFD702` | Identità dominante, brand box, Smart Square, highlight |
| `--fanuc-red` | `#C32C30` | Logo originale, accenti/parti approvate della tagline, enfasi controllata |
| `--fanuc-black` | `#000000` | Titoli, copy, contrasti, bande nere |
| `--fanuc-white` | `#FFFFFF` | Fondi e testi su nero |
| `--fanuc-blue` | `#AACAE6` | Secondario eccezionale, non dominante |
| `--fanuc-beige` | `#D2CFB4` | Secondario eccezionale |
| `--fanuc-green` | `#6EAE43` | **Solo sostenibilità e robot collaborativi**; non usare come CTA universale |

- Vietati gradienti, glassmorphism, glow, ombre decorative, effetti metallici simulati, neon, texture inventate. La guida consente **tinte uniformi** all'80/60/40/20% di giallo e nero; non confondere con un gradiente continuo.
- Proporzione cromatica **proposta per questa landing, da validare sugli screenshot**: giallo protagonista nelle grandi sezioni/box; bianco/nero per garantire leggibilità; rosso come accento raro. **Non è una percentuale prescritta dalla Brand Platform**.
- Bordi netti, composizioni grafiche robuste, contrasto deciso. Nessun design SaaS generico con card tutte arrotondate, pill ovunque o UI translucida.

```css
:root {
  --fanuc-yellow: #FFD702;
  --fanuc-red: #C32C30;
  --fanuc-black: #000000;
  --fanuc-white: #FFFFFF;
  --fanuc-blue: #AACAE6;
  --fanuc-beige: #D2CFB4;
  --fanuc-green: #6EAE43;
  --font-display: "Druk Medium", "Druk", Impact, sans-serif;
  --font-body: "DIN Pro", "DINPro", Arial, sans-serif;
  --page-margin-unit: calc(100vw / 24); /* SOLO base operativa per la griglia orizzontale: calibrare sul visual di riferimento */
}
```

**Importantissimo:** Impact e Arial sono fallback tecnici **temporanei**, non equivalenti visivi accettabili per la review finale. I font licenziati devono essere forniti; non scaricare versioni pirata, non utilizzare Google Fonts “simili” pretendendo conformità e non ridistribuire i font.

### 2.2 Tipografia ufficiale

- **Druk Medium**: tutti gli headline/display, **solo MAIUSCOLO**. Alta densità visiva; linee brevi e decise. Non simulare con `font-stretch` o font ultra-condensed non approvati.
- **DIN Pro**: sottotitoli, paragrafi, etichette, menu, CTA, form, caption.
- **Minion Pro Semibold Italic**: **esclusivamente** simboli `i`, `α`, `β` in naming prodotto dove previsto. Non applicare il corsivo all'intero nome modello. Valida i nomi modello confrontandoli con FANUC.
- Museo Slab ha uso **editoriale** nella Brand Platform: non usarlo nelle card di prodotto e non introdurlo senza esigenza approvata.
- Se sono disponibili vari pesi legittimi di DIN Pro, definire esplicitamente Regular/Medium/Bold con `@font-face`; evitare synthesis (`font-synthesis: none`).

**Scala tipografica iniziale di progetto (NON quotata dal manuale, da calibrare confrontando il sito):**

| Elemento | Desktop 1440 | Tablet 768–1023 | Mobile 375–430 | Regola |
|---|---:|---:|---:|---|
| Hero H1 | 76–100 px | 54–72 px | 42–54 px | Druk, uppercase, line-height 0.95–1.02 |
| Titolo sezione | 48–68 px | 38–52 px | 34–44 px | Druk uppercase |
| Titolo card | 26–34 px | 24–30 px | 24–28 px | Druk uppercase |
| Lead | 22–26 px | 19–22 px | 18–20 px | DIN Pro, LH ~1.3 |
| Body | 17–19 px | 16–18 px | 16–17 px | DIN Pro, LH ~1.45–1.6 |
| Eyebrow, label | 13–15 px | 13–14 px | 12–14 px | DIN Pro Bold |
| CTA | 16–18 px | 16 px | 16 px | DIN Pro Bold |

Non fissare dimensioni usando questa tabella senza verificare wrapping, composizione e rapporto con il sito live. Misurare bounding box reali degli elementi principali.

### 2.3 Smart Grid — specifica ufficiale + traduzione web

**Regola del manuale (p. 16):** dividere **il lato più corto del supporto in 24 unità** e usare un margine di **1 unità per lato**. Logo, CTA, tagline, Smart Square e altri blocchi si appoggiano a questa Smart Grid.

Per un viewport desktop orizzontale **1440 × 900**, se si applica letteralmente la regola al supporto viewport, `u = min(1440,900)/24 = 37.5px`, margine `37.5px`. Per un viewport 390 × 844, `u = 390/24 = 16.25px`, margine `16.25px`. **Questi sono esempi matematici, non misure osservate del sito FANUC.** Nel web la pagina è scrollabile: adottare una griglia coerente riferita al viewport per i moduli, con un contenitore interno controllato, senza far oscillare arbitrariamente il layout secondo l'altezza dello schermo.

Implementazione raccomandata:

```css
:root { --grid-unit: calc(min(100vw, 100vh) / 24); }
.page-shell {
  padding-inline: max(var(--grid-unit), env(safe-area-inset-left));
}
.section-inner {
  width: 100%;
  max-width: 1440px; /* proposta implementativa, NON dimensione prescritta */
  margin-inline: auto;
}
```

**Attenzione:** la regola `min(100vw,100vh)` è una *trasposizione proposta* della griglia di un supporto statico; per mobile e browser con barre dinamiche può rendere instabili gli spazi. In produzione implementare un token stabile per breakpoint e confrontare con le misure del sito (ad esempio `clamp(16px, 4vw, 48px)` soltanto se il confronto lo giustifica). Non usare questa demo CSS come verità definitiva.

- Costruire una griglia 12 colonne interna alle 22 unità utilizzabili, con gutter come multiplo di unità; disposizione non arbitraria.
- Mantenere un'unica linea di allineamento per H1, card, CTA, footer e form.
- Nessuna immagine, parola o CTA deve fuoriuscire dal viewport o tagliarsi in modo non intenzionale.

### 2.4 Smart Square

Brand Platform p. 17: il segno distintivo è un **quadrato/rettangolo giallo** con **un angolo tagliato a 45°**, non un `border-radius` standard. Può diventare box, fondo o elemento CTA/stopper con **piccolo triangolo aggiuntivo** a fumetto.

- **Non** arrotondare ogni card. Non sostituire l'angolo smussato con un triangolo qualsiasi.
- Riprodurre con `clip-path: polygon(...)` oppure pseudo-elemento solo se rispecchia fedelmente il riferimento ufficiale, e senza intaccare testo/focus ring.
- **Dimensione del taglio non dichiarata nel manuale:** misurare da file ufficiali e proporzionare ai box; non affermare che un taglio in pixel arbitrario sia ufficiale.
- Proposta per prototipo: `--smart-cut: 16px` card piccola, `24px` box medio, `32px` hero (da calibrare). Posizione dell'angolo come riferimento p. 17, controllare l'orientamento per ogni contesto.
- Le CTA possono essere rettangoli netti o Smart Square; la gerarchia deve essere coerente con FANUC web, non con una libreria UI generica.

### 2.5 Logo e tagline

- Usare **solo asset originali approvati** (CANTO / brand kit). Logo standard rosso originale su **giallo FANUC**. Alternativamente versione ufficiale nera o bianca ove prevista. **Non ricostruire il wordmark con un font.**
- Non cambiare colore, proporzioni, rotazione, font, contorno, effetti o altezza relativa. Non avvicinare testo, claim o `CRX` dentro l'area di rispetto.
- La guida specifica una **dimensione minima 25 × 13 mm** per riproduzioni; per il web, definire dimensione CSS coerente con l'asset e densità schermo, verificando leggibilità e clear space anziché convertire meccanicamente millimetri in pixel.
- Tagline approvata: **“Automation has a name.”**, sempre in inglese, **DIN Pro Bold** nell'asset approvato, con `Automation` in rosso nel positivo. Non scriverla tutta maiuscola, non cambiarne kerning, non tradurla. **Mai da sola**: deve essere associata al logo secondo il layout ufficiale, pur mantenendo le aree di rispetto.
- Se non sono presenti asset approvati, mostra un placeholder chiaramente indicato `ASSET UFFICIALE MANCANTE` *solo nell'ambiente di sviluppo* e blocca la release.

### 2.6 Pictogrammi, immagini, video

- Usare i pittogrammi lineari ufficiali CANTO, a tratto leggero, con/senza cerchio; non inventare una nuova icon family. Assenza asset → placeholder tecnico dichiarato, senza pubblicazione.
- Foto **autentiche**, robot FANUC CRX reali, ambienti industriali credibili, persone e macchine insieme. Non distorcere il braccio, non inventare pinze/configurazioni, non creare render AI spacciati per immagini tecniche reali.
- Asset foto/filmati della pagina CRX o di CANTO se concessi. Non fare hotlinking al CDN FANUC senza autorizzazione tecnica e di licenza.
- Mini-video: otto clip **distinte e pertinenti**, non un solo loop generico ripetuto. Ideale: 5–12 secondi ciascuno, muted, playsInline, poster dedicato, lazy loading, accessibilità e controllo pausa. Queste durate sono una proposta UX, non uno standard FANUC.
- Se mancano video: conservare la card con poster genuino + badge interno `VIDEO DA INSERIRE` in ambiente mockup; **non inventare né simulare video inesistenti**. La pubblicazione richiede video approvati o esplicita decisione di usare statici.

### 2.7 Look & feel, pagine 21–23

Riprendere dai riferimenti ufficiali:
- contrasti grafici molto forti **giallo/nero/bianco**;
- headline Druk molto evidenti e blocchi di testo brevi;
- robot reale come protagonista, senza sovrapporvi decorazioni UI;
- composizioni modulari sulla griglia, talvolta con grandi zone gialle e fotografie pulite;
- box CTA netti, eventuali Smart Square con corner cut, marcatura FANUC distinta;
- layout autorevole e industriale, non “startup SaaS”, non catalogo e-commerce, non template da agenzia con card glassmorphism.

**Non duplicare alla lettera un annuncio delle pagine 21–23**: applicarne l'architettura visiva alla landing CRX.

## 3. Struttura e copy della landing — 7 sezioni

I testi qui sotto sono **proposte originali per il mockup**, non citazioni ufficiali FANUC. Mantenerli in un modulo dati (`content/crx-it.*` o equivalente), così copy e microcopy sono aggiornabili senza cambiare markup. Eventuali affermazioni tecniche devono rimandare alla fonte in `docs/claims-ledger.md`.

### S01 — HERO | `#inizio`

**Obiettivo:** risultato per l'azienda prima delle specifiche; mostrare subito un CRX reale e la CTA.

- Eyebrow: `FANUC / ROBOT COLLABORATIVI / SERIE CRX`
- H1 proposto, display Druk uppercase: **`PIÙ CONTINUITÀ ALLA TUA PRODUZIONE.`**
- Lead DIN Pro: `Con i robot collaborativi FANUC CRX puoi automatizzare attività ripetitive e rendere più flessibili i processi produttivi, anche se la tua azienda è alla prima esperienza con la robotica.`
- CTA primaria: `Parla con un esperto`
- Eventuale link secondario: `Scopri i vantaggi` → `#vantaggi`
- Trust strip minimalista, SOLO se autorizzata dai dati: `Fino a 30 kg di carico utile` · `8 anni senza manutenzione programmata secondo le condizioni FANUC` (verificare denominazione esatta) · `Programmazione guidata`.
- Visual: foto ufficiale ad alta risoluzione con persona e FANUC CRX, ritaglio progettato per non tagliare giunti, utensile o interazione persona/robot.

**Layout progettuale di partenza (da misurare/confrontare):** desktop hero 2 colonne 5/12 copy e 7/12 visual, altezza 620–760px escluso header, sfondo giallo dominante; mobile testo prima, immagine subito sotto, nessuna immagine decorativa a tutta altezza con copy illeggibile. Header compatto coerente con FANUC.eu; per una landing conversion-oriented si può usare logo approvato + ancore `Vantaggi`, `Applicazioni`, `Incentivi`, `FAQ` + CTA, ma **non copiare un menu corporate completo inutilmente**. Decidere con screenshot reference e obiettivo di conversione.

### S02 — IL PROBLEMA DELLE PMI | `#sfide`

- Eyebrow: `LE SFIDE DELLA PRODUZIONE`
- H2: `QUANDO LE RISORSE SONO LIMITATE, OGNI PROCESSO CONTA.`
- Lead breve: `Tre ostacoli possono rallentare la crescita di una PMI. L'automazione va valutata partendo dal lavoro concreto da svolgere.`
- **Esattamente tre** blocchi, nessuna quarta scheda:
  1. `PERSONALE DIFFICILE DA REPERIRE` — `Le persone qualificate servono sulle attività a maggiore valore, mentre alcune operazioni ripetitive assorbono tempo.`
  2. `ATTIVITÀ RIPETITIVE` — `Carico, scarico e movimentazione richiedono continuità e ripetibilità lungo i turni di produzione.`
  3. `TIMORE DELLA COMPLESSITÀ` — `Spazi, competenze e tempi di integrazione possono rendere difficile il primo passo verso la robotica.`
- Layout desktop tre colonne sobrie, iconografia CANTO specifica, linee/griglie nette; mobile una colonna. Evitare metafore AI, statistiche inventate e immagini stock non autorizzate.

### S03 — OTTO BENEFIT + OTTO MINI VIDEO | `#vantaggi`

- Eyebrow: `FANUC CRX / VANTAGGI`
- H2: `L'AUTOMAZIONE CHE SI ADATTA ALLA PRODUZIONE.`
- Intro: `Otto caratteristiche da valutare in relazione alle esigenze del tuo impianto.`
- **8 card in ordine fisso**, desktop griglia 4×2 oppure 2×4 secondo fedeltà ai riferimenti osservati, tablet 2 colonne, mobile 1 colonna. Ogni card include: numero `01–08`, video/poster 16:9 o rapporto coerente con media originali, titolo breve, copy 1–2 frasi, eventuale microfonte. Non usare autoplay con audio.

| # | Etichetta card | Copy suggerito | Ripresa richiesta | Verifica/nota |
|---|---|---|---|---|
| 01 | `FINO A 30 KG` | `Una gamma di modelli con carico utile fino a 30 kg, per esigenze di movimentazione differenti.` | CRX-30iA che movimenta un carico realistico | **Non tutti i CRX sono 30 kg** |
| 02 | `8 ANNI SENZA MANUTENZIONE` | `Progettati per lunghi periodi di funzionamento con ridotte esigenze di intervento secondo le indicazioni FANUC.` | CRX in linea produttiva reale | FANUC pubblica claim “8 anni di funzionamento senza manutenzione”; chiedere condizioni e disclaimer ufficiali |
| 03 | `FINO A ±0,03 MM` | `Ripetibilità fino a ±0,03 mm, a seconda del modello e delle specifiche tecniche.` | Ciclo ripetuto/presa e posizionamento | **Ripetibilità**, non precisione assoluta; non estendere indistintamente a tutti i modelli |
| 04 | `VERSIONI FOOD` | `Varianti della serie CRX progettate per le esigenze di produzione food & beverage.` | Modello Food effettivo in ambiente alimentare | Non dire che **ogni** CRX è food-grade |
| 05 | `SENSORI DI FORZA INTEGRATI` | `Sensori interni aiutano il cobot a percepire forze durante l'interazione e la guida manuale.` | Dimostrazione reale di hand guiding/sensing | Non promettere sicurezza senza analisi dei rischi |
| 06 | `SETUP SEMPLIFICATO` | `Design compatto e controllore alimentato a 200–240 V per agevolare l'integrazione.` | Installazione autorizzata + controllore | Non equiparare 200–240 V a una compatibilità universale senza verifiche di impianto |
| 07 | `GUIDA MANUALE E DRAG & DROP` | `L'operatore può guidare il cobot nelle posizioni e costruire sequenze con l'interfaccia prevista.` | Teach pendant in funzione, schermo reale | Evitare UI inventate |
| 08 | `EOAT FACILI DA INTEGRARE` | `Strumenti di presa e periferiche approvati FANUC ampliano le possibilità di applicazione.` | Accessorio EOAT autentico e connessione realistica | Non dire “compatibile con qualsiasi periferica” |

**Media behavior:** clic sulla card o sul controllo play avvia il rispettivo filmato in luogo (non aprire finestre inaspettate); poster e controllo pausa sempre disponibili; rispettare `prefers-reduced-motion`. Precaricare solo il poster, mai 8 video full-resolution all'avvio. Eventuali overlay numerici gialli devono preservare il soggetto.

### S04 — APPLICAZIONI | `#applicazioni`

- Eyebrow: `DOVE PUÒ LAVORARE CRX`
- H2: `UNA SOLUZIONE DA VALUTARE, PROCESSO PER PROCESSO.`
- Intro: `Dall'asservimento delle macchine alla movimentazione, i cobot CRX possono trovare spazio in diverse attività, in funzione di modello, utensile, layout e analisi di sicurezza.`
- **Proposta di 4 schede per settore**, ognuna con foto di un'applicazione CRX reale verificata:
  1. **Metalmeccanica** — `Asservimento di macchine CNC, carico e scarico dei pezzi.`
  2. **Food & beverage** — `Manipolazione e movimentazione con le specifiche versioni CRX Food.`
  3. **Packaging e logistica di fine linea** — `Prelievo, posizionamento e movimentazione; verificare i carichi effettivi.`
  4. **Produzione e assemblaggio** — `Operazioni ripetitive di assemblaggio e handling di componenti.`
- L'esistenza dell'applicazione generale FANUC **non dimostra automaticamente** che qualunque configurazione CRX la supporti: verificare ogni visual e claim con una pagina CRX o caso d'uso specifico.
- UX: tabs/filtri solo se aggiungono valore; preferibile griglia visibile con foto concrete; ogni scheda può portare al form con interesse precompilato.

### S05 — IPERAMMORTAMENTO | `#iperammortamento`

- Eyebrow: `INCENTIVI AGLI INVESTIMENTI`
- H2: `VALUTA L'INVESTIMENTO ANCHE DAL PUNTO DI VISTA FISCALE.`
- Descrizione utilizzabile **solo con revisione del consulente fiscale/legale**: `L'iperammortamento è una maggiorazione del costo fiscalmente ammortizzabile, prevista dalla normativa per determinati investimenti in beni strumentali. Un progetto basato su FANUC CRX può essere valutato ai fini dell'agevolazione solo se il bene, l'integrazione e l'investimento rispettano tutti i requisiti applicabili.`
- Tre sottoblocchi brevi:
  1. `COS'È` — `Un meccanismo fiscale che può aumentare il valore deducibile tramite quote di ammortamento o leasing, nei casi previsti dalla legge.`
  2. `PERCHÉ VALUTARE CRX` — `Una soluzione robotica può rientrare tra i beni valutabili, ma non esiste idoneità automatica per tutta la gamma.`
  3. `COSA SERVE` — `Verifica tecnico-fiscale, requisiti del bene e interconnessione ove richiesta, documenti e comunicazioni previste dalle procedure vigenti.`
- CTA obbligatoria: **`Scopri se la tua azienda può accedere`** → `#contatto`, set campo argomento `Iperammortamento`.
- Microdisclaimer sempre visibile: `Informazioni generali, non costituiscono consulenza fiscale. Ammissibilità e condizioni sono da verificare sul singolo investimento secondo la normativa vigente.`

**Controllo normativo (ricerca svolta il 17/11/2026; ricontrollare il giorno del go-live):** Legge 30 dicembre 2025 n. 199, art. 1 commi 427–436 come modificati (in particolare d.l. 38/2026 e conversione), e atti attuativi; quadro verificato: maggiorazione del **180% fino a €2,5 milioni**, **100% oltre €2,5 milioni e fino a €10 milioni**, **50% oltre €10 milioni e fino a €20 milioni**, investimenti dal **01/01/2026 al 30/09/2028**. **Queste sono maggiorazioni del costo, NON aliquote di credito d'imposta o sconti immediati**. Non inserirle automaticamente nel mockup: eventuale tabella numerica dev'essere approvata fiscalmente e aggiornata, con modalità operative GSE, condizioni di interconnessione, categorie di beni, documentazione, cumulabilità ed eventuali nuove modifiche. Se la verifica finale non è disponibile, omettere aliquote e lasciare un TODO di release.

**Riferimenti normativi per controllo:**
- https://def.giustiziatributaria.gov.it/DocTribFrontend/executePrintArticolo.do?articolo=Articolo+1+com+427&codiceOrdinamento=0000000000000010000000000000000000000000004270000000000000000000000000000000000000000000000000000000000000000000000000&id=%7BBA0A808E-DF73-48A0-AF64-6DF64EC8918A%7D
- https://www.attuazione.gov.it/it/notizie/firmato-il-decreto-attuativo-sull-iper-ammortamento/
- https://www.gazzettaufficiale.it/
- Portale GSE istituzionale per procedure e comunicazioni, da verificare direttamente.

**Visual:** banda gialla con grande headline nero, tre step graficamente asciutti e CTA a contrasto. Non usare simboli euro decorativi o badge “risparmi garantiti”.

### S06 — PERCHÉ FANUC | `#perche-fanuc`

- Eyebrow: `UN PARTNER PER LA PRODUZIONE`
- H2: `TECNOLOGIA E SUPPORTO NEL TEMPO.`
- Tre evidenze:
  - `AFFIDABILITÀ` — `Il valore di una soluzione si misura anche nella continuità operativa e nella possibilità di gestirla lungo il ciclo di vita.`
  - `ASSISTENZA IN ITALIA` — `Presentare i servizi e i contatti FANUC Italia verificati tramite pagine ufficiali, senza promettere tempi di intervento non documentati.`
  - `COMPETENZE E FORMAZIONE` — `Collegare eventuali risorse FANUC Academy e la formazione CRX ufficiale, se pertinente e disponibile.`
- Testimonianza/logo cliente **solo se autorizzati e documentati**, con attribuzione esatta. In alternativa usare foto autentica del team FANUC o una fascia `Assistenza / Training / Ricambi` senza loghi inventati.
- Link testuale a servizi ufficiali (URL effettivo reperito dal sito).

### S07 — FAQ + CTA FINALE + FORM | `#faq` e `#contatto`

- Eyebrow: `DOMANDE FREQUENTI`
- H2: `LE RISPOSTE PER VALUTARE IL PROSSIMO PASSO.`
- Accordion accessibile (uno o più aperti, comportamento consistente):
  1. **Serve già esperienza di programmazione?** `La serie CRX offre strumenti di guida manuale e programmazione tramite interfaccia grafica. La formazione e le competenze richieste dipendono dall'applicazione.`
  2. **Quale modello CRX è adatto alla mia azienda?** `Dipende dal carico utile, dalla portata, dal ciclo, dagli utensili e dal layout. Un esperto può aiutarti nella valutazione.`
  3. **Un cobot può lavorare senza ripari?** `Non automaticamente. L'integrazione richiede una valutazione dei rischi e il rispetto delle norme di sicurezza applicabili; potrebbero essere necessarie misure protettive.`
  4. **Quanto tempo serve per installarlo?** `Varia secondo processo, attrezzature, interfacce e verifiche di sicurezza. Non esiste un tempo uguale per tutti.`
  5. **Quali dispositivi si possono collegare?** `FANUC mette a disposizione accessori, EOAT e plug-in approvati; la compatibilità va verificata sul caso concreto.`
  6. **Posso accedere all'iperammortamento?** `Dipende dall'azienda, dall'investimento, dalle caratteristiche del bene e dai requisiti tecnici e documentali richiesti dalla normativa vigente.`

**Blocco conversione finale:**
- Eyebrow: `PARLIAMO DEL TUO PROCESSO`
- H2 Druk uppercase: **`SCOPRI COME CRX PUÒ ENTRARE NELLA TUA PRODUZIONE.`**
- Testo: `Raccontaci la lavorazione che vuoi automatizzare. Ti ricontatteremo per una prima valutazione delle possibilità.`
- Form breve con **Nome e cognome***, **Email aziendale***, **Azienda***, **Telefono** (opzionale, salvo esigenze reali), **Di cosa vuoi parlare?** (select: `Automazione CRX`, `Applicazioni`, `Iperammortamento`, `Altro`), **Messaggio** (opzionale), checkbox **privacy** non preselezionata e link all'informativa fornita dal committente. CTA submit `Parla con un esperto`.
- Stati reali: required, errori inline, invio loading, conferma su successo del server, retry su errore, prevenzione doppio invio, antispam proporzionato, validazione client+server.
- **Non simulare una lead inviata**. Se manca endpoint/CRM, integra un adapter con configurazione `VITE_LEAD_ENDPOINT` o equivalente, mostra uno stato esplicito di ambiente demo e registra blocker per produzione. Non mandare dati personali a un servizio improvvisato. Tracciamento eventi solo con consenso e configurazione conforme alla privacy.
- Collegamenti obbligatori: privacy policy reale, informazioni legali/cookie secondo sito di destinazione.

## 4. UI ARCHITECTURE E COMPONENTI

Componenti consigliati (rinominare secondo convenzioni repository):

```text
src/
  components/
    SiteHeader
    FanucLogo          # solo asset originale
    PrimaryCTA
    SmartSquare
    SectionHeading
    HeroCRX
    ThreeChallenges
    BenefitVideoCard
    BenefitsGrid
    ApplicationCard
    IncentiveSection
    WhyFanuc
    FAQAccordion
    LeadForm
    SiteFooter
  data/
    crxBenefits
    crxApplications
    crxFaq
  styles/
    tokens.css
    typography.css
    layout.css
    components.css
  assets/
    fanuc/             # solo asset autorizzati
  pages/
    CrxLanding
  docs/
    asset-manifest.md
    claims-ledger.md
    visual-audit.md
    release-checklist.md
```

- Componenti semantici; un solo H1, H2 per sezioni, H3 per card.
- Anchor scroll con `scroll-margin-top` coerente con header sticky.
- Nessuna animazione non necessaria: solo feedback essenziale e reveal leggerissimi quando coerenti con sito reference e disattivabili con `prefers-reduced-motion`.
- Non usare emoji o icone Lucide come sostituto definitivo dei pittogrammi CANTO.
- Non aggiungere cookie banner fittizio, testimonianze false, loghi clienti di fantasia, counter animati o statistiche non fondate.

## 5. RESPONSIVE — CRITERI DI PARTENZA (DA VERIFICARE)

**Viewport di prova obbligatori:** 1440×900, 1920×1080, 1280×800, 1024×768, 768×1024, 390×844, 375×812, 320×700. Se possibile testare Safari iOS e Chrome Android reali o simulati.

| Intervallo | Configurazione prevista |
|---|---|
| ≥ 1280px | Hero 2 colonne, challenge 3 colonne, benefit 4 colonne, applicazioni 2/4 colonne a seconda delle immagini, form su fascia bilanciata |
| 1024–1279px | Hero 2 colonne compatte, benefit 2 o 4 se leggibili, meno whitespace orizzontale |
| 768–1023px | Hero 2 colonne se il prodotto resta intero e H1 leggibile, altrimenti stack; benefit 2 colonne |
| ≤ 767px | Tutto in stack ragionato, 1 colonna challenge/benefit/applicazioni, form full width, hamburger solo se necessario |

I breakpoint sono **decisioni implementative**, non valori ufficiali FANUC. Affinarli leggendo il comportamento responsive del sito originale.

**Controlli mobile:**
- H1 leggibile e non tronco; mantenere peso/condensazione Druk.
- CTA primaria nel primo schermo ove realisticamente possibile, senza sacrificare visibilità del CRX.
- Video cards con poster ben leggibili; non tagliare il robot in uno screenshot dimostrativo.
- Tap target almeno 44×44 CSS px; focus visibile.
- No overflow orizzontale a 320px, form utilizzabile con tastiera mobile e zoom fino al 200%.
- Contrasto WCAG AA per testi normali, errori e CTA, anche sulle tinte gialle.

## 6. MISURAZIONE REALE E COMPARAZIONE VISIVA (OBBLIGATORIA)

La richiesta è **pixel-accurate**: la precisione non si ottiene inventando coordinate; richiede un ciclo di misure, screenshot e correzioni.

### Fase A — Reference capture

1. Acquisire screenshot del sito ufficiale alla stessa larghezza delle prove. Rilevare header, hero, sezioni card, footer, CTA e responsività della pagina CRX (e di altre pagine corporate quando il blocco non è presente in CRX).
2. Con DevTools o Playwright leggere: `getBoundingClientRect`, computed font-family, font-size, font-weight, line-height, letter-spacing, padding/margin, grid gap, image fit, width/height, colore di fondo e border radius.
3. Riportare in `docs/visual-audit.md` **elemento, viewport, misura rilevata, sorgente, misura implementata, delta in px**.
4. Documentare se il sito attuale utilizza alcuni dettagli in contrasto col brand PDF: allinearsi alla Brand Platform quando vincolante.

### Fase B — Design tokens e layout

- Mappare i valori rilevati su tokens condivisi; evitare numeri magic sparsi in 20 componenti.
- Sostituire tutte le spaziature “a occhio” con regole misurate o dichiarate come nuove scelte progettuali.
- Verificare clear space del logo e tagline.
- Fare prima la corrispondenza **macro** (sezioni, griglia, immagini, scale), poi **micro** (baseline, interlinea, bordi, offset, tagli Smart Square).

### Fase C — Screenshot regression

- Generare screenshot della landing in tutte le viewport. Confrontarli **side-by-side** ai riferimenti e al PDF, con overlay per le parti confrontabili. Non ha senso una diff dell'intera pagina se la landing ha contenuti diversi: confrontare design primitives, header, hero, blocchi e allineamenti.
- Target interno per elementi direttamente comparabili (da misurare, non garantire senza screenshot): **offset ≤ 4px** per logo, margini, allineamenti e CTA; **≤ 8px** per posizionamento principali blocchi dopo il calibraggio. Queste sono **tolleranze proposte per QA**, non standard pubblicati da FANUC.
- Evitare test basati solo su percentuali screenshot senza distinguere testo e media differenti.
- Controllare la resa font sui sistemi target e device pixel ratio.
- Correggere e ripetere fino a stabilità; registrare motivazioni degli scostamenti non eliminabili.

### Fase D — Funzionalità e qualità

- `npm run build` (o comando progetto) senza errori.
- Nessun errore console/hydration, immagini rotte, media caricati inutilmente, link vuoti, bottoni inert.
- PageSpeed/Lighthouse come diagnostica e obiettivi ragionevoli (immagini WebP/AVIF dove possibile senza alterare colori/soggetti, poster ottimizzati, lazy load, font swap gestito, CLS basso).
- Test tastiera, screen reader semantics, ARIA `expanded`/`controls`, visible focus, tab order, label form, errori annunciati.
- Moduli e consenso GDPR verificati con l'integrazione reale; eventi analytics senza PII.

## 7. GESTIONE RISORSE E CLAIM

Crea queste tabelle markdown nel repository:

**`docs/asset-manifest.md`**:
`ID | Sezione | Tipo | Path/URL originale | Proprietario/licenza | Modello effettivo | Stato (approved/missing/pending) | Note cropping`

**`docs/claims-ledger.md`**:
`Claim mostrato | Sezione | Fonte URL e data | Condizioni/modelli | Revisore | Stato (verified/pending/blocked)`

**`docs/visual-audit.md`**:
`Componente | Viewport | Reference screenshot | Reference px | Landing px | Delta px | Esito`

La pubblicazione è **bloccata** se: logo/font non approvati; mini-video presentati come reali ma inventati; testimonianze/loghi clienti non autorizzati; claim sicurezza/ROI eccessivi; norma fiscale non verificata; form finto; informativa privacy mancante; errori di accessibilità critici.

## 8. EVITARE ASSOLUTAMENTE

- Layout generico da AI (gradienti, blobs, glow, card con `border-radius: 24px`, shadow diffuse, chip colorati casuali, navbar flottante glass).
- Altri gialli “simili”, nero grigio sostitutivo usato senza motivazione, rossi diversi dal brand.
- Sans-serif generici usati come se fossero Druk/DIN Pro.
- Robot stock, 3D non validi, immagini AI con articolazioni impossibili, clip incongruenti.
- Claim `ZERO RISCHI`, `ROI GARANTITO`, `SEMPRE SICURO`, `QUALSIASI AZIENDA ACCEDE AGLI INCENTIVI`, o `TUTTI I MODELLI 30 KG`.
- `±0,03 mm` descritto come precisione assoluta garantita; `8 anni senza manutenzione` reso come assenza di qualunque controllo nelle condizioni più diverse.
- Testi lorem ipsum, placeholder nascosti in produzione, CTA senza azione, invio form simulato.
- Copiare immagini/asset dalla pagina originale in modo non autorizzato.

## 9. CRITERI DI ACCETTAZIONE E OUTPUT ATTESO

Consegnare **la landing implementata**, non solo un mockup statico, con:

1. URL locale funzionante; codice nel framework del progetto, riutilizzabile e ordinato.
2. Tutte le 7 sezioni nell'ordine richiesto, con esattamente 3 problemi e 8 benefit + relativi slot filmati distinti.
3. Design tokens del brand conformi al PDF e struttura visuale coerente con il sito FANUC.
4. Assets e font autentici o, se assenti, blocker esplicito; nessuna finzione di conformità.
5. CTA e FAQ interattive, form con validazione e adapter reale/ambiente demo dichiarato.
6. Screenshot delle viewport richieste + confronto documentato dei componenti e lista delle differenze residue.
7. `docs/asset-manifest.md`, `docs/claims-ledger.md`, `docs/visual-audit.md`, `docs/release-checklist.md`.
8. Report finale conciso: **implementato / da approvare / mancante**, con l'elenco di ciò che impedisce la pubblicazione.

### Checklist finale rapida

- [ ] Giallo esatto `#FFD702`, rosso `#C32C30`, contrasto coerente.
- [ ] Druk Medium uppercase nei titoli, DIN Pro testi/CTA.
- [ ] Logo e tagline asset originali, zona di rispetto verificata.
- [ ] Smart Grid e Smart Square rispettati.
- [ ] Hero mostra CRX vero e una CTA funzionante.
- [ ] 3 sfide PMI, nessun quarto punto.
- [ ] 8 benefit nell'ordine richiesto, copy tecnicamente verificato e 8 video/poster pertinenti.
- [ ] Applicazioni supportate da esempi CRX reali.
- [ ] Iperammortamento non promesso automaticamente, normativa approvata.
- [ ] Valore FANUC, assistenza Italia e prove sociali autentiche.
- [ ] FAQ accessibili, form e privacy verificati.
- [ ] Responsive provato a 320/375/390/768/1024/1280/1440/1920px.
- [ ] Visual audit completato; niente elementi rotti o overflow.

## 10. Link utili

- CRX: https://www.fanuc.eu/it-it/serie-crx
- Formazione CRX ufficiale: https://crx.fanuc.eu/
- Brand asset repository: **CANTO FANUC** (richiedere accesso e licenze al team marketing; non inventare URL diretti).
- PDF Brand Platform: allegato originale del progetto, versione V1.0 maggio 2026.

---

**Istruzione finale a Claude Code:** dopo il preflight avvia direttamente l'implementazione e la revisione visuale. Se un asset/font/endpoint fondamentale non è disponibile, realizza quanto possibile in modo accurato, lascia un placeholder chiaramente dichiarato e registra il blocker, senza dichiarare un prodotto pronto alla pubblicazione. Nessuna differenza arbitraria di identità visiva rispetto a FANUC Europe.

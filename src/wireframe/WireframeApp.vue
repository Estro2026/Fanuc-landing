<template>
  <div class="wf">
    <!-- HEADER — misure fanuc.eu @1440: fascia 32px, barra 120px, logo 251×56, CTA 15/34px 16px bold -->
    <header class="wf-header">
      <div class="wf-header__strip"></div>
      <div class="wf-header__bar wf-shell">
        <img src="../assets/fanuc/fanuc-logo.svg" alt="FANUC" class="wf-header__logo" width="251" height="56" />
        <a href="#contatto" class="wf-btn wf-btn--light">Parla con un esperto</a>
      </div>
    </header>

    <main>
      <!-- 1. HERO — 100vh meno header; testo 540px a sinistra, immagine metà destra -->
      <section class="wf-hero">
        <div class="wf-hero__text">
          <p class="wf-eyebrow">Robot collaborativi FANUC CRX</p>
          <h1 class="wf-h1">Il cobot FANUC pensato per le PMI</h1>
          <p class="wf-hero__lead">CRX lavora accanto ai tuoi operatori e si occupa dei compiti ripetitivi. Si installa in fretta, si programma a mano e funziona 8 anni senza manutenzione.*</p>
          <a href="#contatto" class="wf-btn wf-btn--light">Parla con un esperto</a>
          <p class="wf-footnote">* Claim FANUC. Condizioni da verificare prima della pubblicazione.</p>
        </div>
        <div class="wf-ph wf-hero__img">IMMAGINE · cobot CRX al lavoro accanto a un operatore</div>
        <a href="#problema" class="wf-hero__down" aria-label="Scorri alla sezione successiva">↓</a>
      </section>

      <!-- Barra ancore — fanuc.eu: 76px, voci 16px, CTA a destra -->
      <nav class="wf-anchors" aria-label="Sezioni della pagina">
        <div class="wf-anchors__bar">
          <a href="#vantaggi">VANTAGGI</a>
          <a href="#applicazioni">APPLICAZIONI</a>
          <a href="#incentivi">IPERAMMORTAMENTO</a>
          <a href="#faq">FAQ</a>
          <a href="#contatto" class="wf-btn wf-btn--light">Contattaci</a>
        </div>
      </nav>

      <!-- 2. PROBLEMA PMI — 3 card icona 172px -->
      <section id="problema" class="wf-module wf-shell">
        <h2 class="wf-h2">Ti riconosci in una di queste situazioni?</h2>
        <ul class="wf-grid3">
          <li v-for="p in problems" :key="p.t" class="wf-icard">
            <span class="wf-ph wf-icard__icon">PITTOGRAMMA</span>
            <h3 class="wf-h4">{{ p.t }}</h3>
            <p class="wf-body">{{ p.c }}</p>
          </li>
        </ul>
        <p class="wf-lead wf-after">CRX nasce per risolvere questi tre problemi.</p>
      </section>

      <!-- 3. 8 BENEFIT — card 384px con mini video 384×256 -->
      <section id="vantaggi" class="wf-module wf-shell">
        <h2 class="wf-h2">8 motivi per scegliere CRX</h2>
        <ul class="wf-grid3">
          <li v-for="b in benefits" :key="b.t" class="wf-pcard">
            <div class="wf-ph wf-pcard__media">▶ MINI VIDEO · {{ b.v }}</div>
            <div class="wf-pcard__body">
              <h3 class="wf-h4">{{ b.t }}</h3>
              <p class="wf-body">{{ b.c }}</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 4. APPLICAZIONI — griglia 2 colonne, immagini 580×386, testo rientrato 32px -->
      <section id="applicazioni" class="wf-module wf-shell">
        <h2 class="wf-h2">Dove lavora CRX</h2>
        <ul class="wf-grid2">
          <li v-for="a in apps" :key="a.t" class="wf-acard">
            <div class="wf-ph wf-acard__img">IMMAGINE · {{ a.img }}</div>
            <div class="wf-acard__text">
              <h3 class="wf-h3">{{ a.t }}</h3>
              <p class="wf-body">{{ a.c }}</p>
            </div>
          </li>
        </ul>
      </section>

      <!-- 5. IPERAMMORTAMENTO — testo 503px + immagine 593×333 -->
      <section id="incentivi" class="wf-module">
        <div class="wf-split">
          <div class="wf-split__text">
            <h2 class="wf-h3">Iperammortamento 2026: CRX può rientrarci</h2>
            <p class="wf-body"><strong>Cos'è.</strong> Un incentivo fiscale che aumenta il valore ammortizzabile dei beni strumentali per l'industria digitale.</p>
            <p class="wf-body"><strong>Perché CRX.</strong> I robot collaborativi sono tra i prodotti FANUC indicati per l'incentivo.</p>
            <p class="wf-body"><strong>Cosa serve in pratica:</strong></p>
            <ol class="wf-steps">
              <li>Scegli il modello con un esperto FANUC.</li>
              <li>Verifica i requisiti con il tuo consulente fiscale.</li>
              <li>Collega il robot ai sistemi aziendali e conserva la documentazione.</li>
            </ol>
            <a href="#contatto" class="wf-btn wf-btn--light">Scopri se la tua azienda può accedere</a>
            <p class="wf-footnote">Aliquote e requisiti da verificare sulla normativa in vigore prima della pubblicazione. Non è consulenza fiscale.</p>
          </div>
          <div class="wf-ph wf-split__img">IMMAGINE · CRX in linea interconnessa</div>
        </div>
      </section>

      <!-- 6. PERCHÉ FANUC — 3 card + testimonianza + loghi -->
      <section class="wf-module wf-shell">
        <h2 class="wf-h2">Perché FANUC</h2>
        <ul class="wf-grid3">
          <li v-for="w in why" :key="w.t" class="wf-icard">
            <span class="wf-ph wf-icard__icon">PITTOGRAMMA</span>
            <h3 class="wf-h4">{{ w.t }}</h3>
            <p class="wf-body">{{ w.c }}</p>
          </li>
        </ul>
        <figure class="wf-quote">
          <div class="wf-ph wf-quote__img">FOTO · Bonvicini Carpenteria</div>
          <div class="wf-quote__text">
            <blockquote class="wf-h3">«Grazie a una semplice programmazione, è bastata un'ora per preparare il nostro CRX-10iA/L alla saldatura.»</blockquote>
            <figcaption class="wf-body">Alessandro Bonvicini, Bonvicini Carpenteria S.r.l. · Verona</figcaption>
            <a class="wf-link" href="https://www.fanuc.eu/it-it/casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione" target="_blank" rel="noopener noreferrer">LEGGI IL CASO</a>
          </div>
        </figure>
        <ul class="wf-logos" aria-label="Loghi clienti">
          <li v-for="n in 5" :key="n" class="wf-ph">LOGO CLIENTE</li>
        </ul>
      </section>

      <!-- 7a. FAQ -->
      <section id="faq" class="wf-module wf-shell">
        <h2 class="wf-h2">Domande frequenti</h2>
        <details v-for="f in faq" :key="f.q" class="wf-faq">
          <summary class="wf-h4">{{ f.q }}</summary>
          <p class="wf-body">{{ f.a }}</p>
        </details>
      </section>

      <!-- 7b. FORM BREVE — fanuc.eu: padding 70px, H2 42/52, 2 colonne 563px, campi 60px -->
      <section id="contatto" class="wf-form-section">
        <div class="wf-shell">
          <h2 class="wf-h2 wf-h2--form">Parla con un esperto</h2>
          <p class="wf-form__intro">Lasciati consigliare sulla soluzione CRX più adatta alla tua produzione.</p>
          <form class="wf-form" @submit.prevent>
            <div class="wf-form__col">
              <p class="wf-form__group">Informazioni sul contatto</p>
              <div class="wf-field"><label for="f-nome">Nome*</label><input id="f-nome" required /></div>
              <div class="wf-field"><label for="f-cognome">Cognome*</label><input id="f-cognome" required /></div>
              <div class="wf-field"><label for="f-email">E-mail*</label><input id="f-email" type="email" required /></div>
            </div>
            <div class="wf-form__col">
              <p class="wf-form__group">Informazioni commerciali</p>
              <div class="wf-field"><label for="f-azienda">Azienda*</label><input id="f-azienda" required /></div>
              <div class="wf-field"><label for="f-tel">Telefono</label><input id="f-tel" type="tel" /></div>
              <label class="wf-check"><input type="checkbox" required /> <span>Accetto la <a href="https://www.fanuc.eu/it-it/informativa-sulla-privacy-e-sui-cookie" target="_blank" rel="noopener noreferrer">PRIVACY E COOKIE POLICY</a> *</span></label>
              <label class="wf-check"><input type="checkbox" /> <span>Sono interessato a ricevere aggiornamenti da FANUC sull'automazione di fabbrica.</span></label>
              <button class="wf-btn wf-btn--dark">Invia</button>
            </div>
          </form>
        </div>
      </section>
    </main>

    <!-- FOOTER — fanuc.eu: padding 60/16, colonne in linea (margine 20px), titoli 12px, link 14px bold -->
    <footer class="wf-footer">
      <div class="wf-shell">
        <div class="wf-footer__cols">
          <div v-for="col in footerCols" :key="col.t" class="wf-footer__col">
            <p class="wf-footer__title">{{ col.t }}</p>
            <ul>
              <li v-for="l in col.l" :key="l[0]"><a :href="l[1]" target="_blank" rel="noopener noreferrer">{{ l[0] }}</a></li>
            </ul>
          </div>
        </div>
        <div class="wf-footer__social">
          <span>TROVACI SU:</span>
          <a v-for="s in social" :key="s[0]" :href="s[1]" target="_blank" rel="noopener noreferrer" :aria-label="s[0]">{{ s[0][0] }}</a>
        </div>
        <ul class="wf-footer__legal">
          <li v-for="l in legal" :key="l[0]"><a :href="`https://www.fanuc.eu/it-it/${l[1]}`" target="_blank" rel="noopener noreferrer">{{ l[0] }}</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Copy: PROPOSTA. Fatti tecnici da fanuc.eu/it-it/serie-crx (RICERCA).
const problems = [
  { t: 'Mancano persone', c: 'Trovare e tenere operatori è sempre più difficile.' },
  { t: 'Compiti ripetitivi', c: 'Carico, scarico e pallettizzazione tolgono tempo al lavoro che conta.' },
  { t: 'Paura della complessità', c: 'Temi che un robot sia difficile da installare e programmare.' },
]

const benefits = [
  { t: 'Fino a 30 kg', c: 'Sei modelli da 3 a 30 kg di carico, sbraccio fino a 1.756 mm.', v: 'CRX-30iA con carico' },
  { t: '8 anni senza manutenzione*', c: 'Progettato per 8 anni di funzionamento senza manutenzione.', v: 'CRX in linea' },
  { t: 'Ripetibilità ±0,03 mm', c: 'La stessa posizione, ciclo dopo ciclo.', v: 'presa e posizionamento' },
  { t: 'Versioni per alimenti', c: 'Modelli Food con lubrificante NSF-H1 idoneo al contatto alimentare.', v: 'CRX Food' },
  { t: 'Sensori di forza di serie', c: 'Il robot sente il contatto, senza hardware o software aggiuntivi.', v: 'contatto e arresto' },
  { t: 'Setup rapido 200-240 V', c: 'Nessuna superficie speciale: il controllore va su una presa standard.', v: 'installazione' },
  { t: 'Programmazione drag & drop', c: 'Guidi il braccio a mano e salvi le posizioni sul tablet.', v: 'tablet teach pendant' },
  { t: 'EOAT facili da collegare', c: 'Pinze, accessori e plug-in approvati FANUC, pronti da integrare.', v: 'pinza Schmalz' },
]

const apps = [
  { t: 'Metalmeccanica', c: 'Asservimento di macchine CNC e saldatura ad arco.', img: 'CRX su macchina utensile' },
  { t: 'Food & Beverage', c: 'Movimentazione e confezionamento con i modelli Food.', img: 'CRX Food' },
  { t: 'Logistica e packaging', c: 'Pallettizzazione e movimentazione dei materiali.', img: 'CRX-20iA/L pallettizzazione' },
  { t: 'Elettronica e assemblaggio', c: 'Assemblaggio e ispezione visiva con iRVision.', img: 'CRX con iRVision' },
]

const why = [
  { t: 'Affidabilità comprovata', c: 'Robustezza verificata con test di vita accelerati.' },
  { t: 'Assistenza in Italia', c: '[DA CONFERMARE CON FANUC: sedi, tecnici, ricambi]' },
  { t: 'Formazione gratuita', c: 'Video e-learning CRX gratuiti per il tuo team.' },
]

const faq = [
  { q: 'Serve saper programmare?', a: 'No. Guidi il braccio a mano e componi i cicli sul tablet con il drag & drop.' },
  { q: 'Quale modello mi serve?', a: 'Dipende da carico, sbraccio e ciclo. Lo scegliamo insieme.' },
  { q: 'Può lavorare senza protezioni?', a: 'Dipende dalla valutazione dei rischi della tua applicazione, che va sempre fatta.' },
  { q: 'Quanto ci vuole per installarlo?', a: 'Dipende dal processo. Ti diamo una stima dopo aver visto la tua applicazione.' },
  { q: 'Quanto costa?', a: 'Dipende da modello e accessori. Ti prepariamo un preventivo su misura.' },
  { q: 'Posso usare l\'iperammortamento?', a: 'Può rientrare se bene e investimento rispettano i requisiti di legge.' },
]

const E = 'https://www.fanuc.eu/it-it/'
const footerCols = [
  { t: 'PRODOTTI', l: [['ROBOT COLLABORATIVI CRX', E + 'serie-crx'], ['DESCRIZIONE DEL PRODOTTO', E + 'descrizione-del-prodotto']] },
  { t: 'SOLUZIONI', l: [['CASI DI SUCCESSO', E + 'casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione'], ['IPERAMMORTAMENTO 2026', E + 'fanuc-iper-ammortamento-2026']] },
  { t: 'SERVIZIO CLIENTI', l: [['ASSISTENZA AI CLIENTI', E + 'lattenzione-al-cliente-attraverso-servizi-sostenibili']] },
  { t: 'EDUCATION', l: [['FORMAZIONE CRX', 'https://crx.fanuc.eu/']] },
  { t: 'CONTATTI', l: [['CONTATTI', E + 'contacting-fanuc']] },
]
const social = [
  ['Facebook', 'https://www.facebook.com/FanucEurope/'],
  ['YouTube', 'https://www.youtube.com/@FANUCEurope'],
  ['LinkedIn', 'https://www.linkedin.com/company/fanuc-europe/'],
]
const legal = [
  ['CONDIZIONI DI UTILIZZO', 'condizioni-di-utilizzo'],
  ['INFORMATIVA SULLA PRIVACY E SUI COOKIE', 'informativa-sulla-privacy-e-sui-cookie'],
  ['TERMINI E CONDIZIONI DI ACQUISTO', 'termini-e-condizioni-di-fanuc'],
  ['CANALI PER LA SEGNALAZIONE DELLA CONFORMITÀ', 'canali-di-segnalazione-della-conformita-fanuc'],
  ['NOTE LEGALI', 'note-legali'],
  ['CONTATTACI', 'contacting-fanuc'],
]
</script>

<style>
/* Wireframe in scala di grigi. Misure rilevate su fanuc.eu a 1440px (contenuto 1185px, margini 120px). */
.wf {
  --ink: #262626;      /* al posto del blu-nero #06161F */
  --accent: #bfbfbf;   /* al posto del giallo */
  --line: #cccccc;
  --band: #f2f2f2;
  --ph: #d9d9d9;
  --mute: #737373;
  font-family: Arial, sans-serif;
  font-weight: 400;
  color: var(--ink);
  background: #fff;
}
.wf *, .wf *::before, .wf *::after { box-sizing: border-box; margin: 0; padding: 0; }
.wf ul, .wf ol { list-style: none; }
body { margin: 0; }
.wf-shell { padding-inline: 120px; }

/* Tipografia (desktop) */
.wf-eyebrow { font-size: 14px; line-height: 20px; font-weight: 700; text-transform: uppercase; margin-bottom: 24px; }
.wf-h1 { font-size: 56px; line-height: 66px; font-weight: 700; margin-bottom: 32px; }
.wf-h2 { font-size: 42px; line-height: 52px; font-weight: 700; margin-bottom: 32px; max-width: 820px; }
.wf-h3 { font-size: 32px; line-height: 40px; font-weight: 700; margin-bottom: 16px; }
.wf-h4 { font-size: 28px; line-height: 39.2px; font-weight: 400; margin: 20px 0 12px; }
.wf-body { font-size: 20px; line-height: 28px; }
.wf-body + .wf-body { margin-top: 12px; }
.wf-lead { font-size: 28px; line-height: 39.2px; }
.wf-footnote { font-size: 12px; line-height: 16px; color: var(--mute); margin-top: 16px; }
.wf-link { font-size: 16px; font-weight: 700; color: var(--ink); }

/* Pulsanti — 15/34px, 16/22 bold maiuscolo */
.wf-btn { display: inline-block; padding: 15px 34px; font: 700 16px/22px Arial, sans-serif; text-transform: uppercase; text-decoration: none; border: 1px solid transparent; cursor: pointer; }
.wf-btn--light { background: var(--accent); color: var(--ink); }
.wf-btn--dark { background: var(--ink); color: #fff; }

/* Placeholder */
.wf-ph { display: flex; align-items: center; justify-content: center; text-align: center; padding: 12px; background: var(--ph); color: var(--mute); font-size: 13px; line-height: 18px; }

/* Header */
.wf-header { position: relative; z-index: 10; background: #fff; }
.wf-header__strip { height: 32px; background: var(--accent); }
.wf-header__bar { height: 120px; display: flex; align-items: center; justify-content: space-between; padding-right: 48px; }
.wf-header__logo { width: 251px; height: 56px; object-fit: contain; object-position: left center; filter: grayscale(1) brightness(.35); }

/* 1. Hero — 747px a 1440×900 */
.wf-hero { position: relative; display: grid; grid-template-columns: 1fr 1fr; align-items: center; min-height: max(600px, calc(100vh - 153px)); margin-bottom: 84px; }
.wf-hero__text { padding-left: 120px; padding-right: 52px; }
.wf-hero__text .wf-h1, .wf-hero__lead { max-width: 540px; }
.wf-hero__lead { font-size: 28px; line-height: 39.2px; margin-bottom: 32px; }
.wf-hero__img { align-self: center; height: 476px; }
.wf-hero__down { position: absolute; left: 50%; bottom: 31px; transform: translateX(-50%); width: 40px; height: 40px; border-radius: 50%; background: var(--accent); color: var(--ink); display: flex; align-items: center; justify-content: center; text-decoration: none; font-weight: 700; }

/* Barra ancore — 76px */
.wf-anchors { position: sticky; top: 0; z-index: 9; margin-bottom: 84px; }
/* Fondo al vivo; testo e CTA restano dove erano: 120px di margine pagina + 20px (sinistra) / +2px (destra) */
.wf-anchors__bar { height: 76px; background: var(--ink); display: flex; align-items: center; gap: 44px; padding: 0 122px 0 140px; }
.wf-anchors__bar a:not(.wf-btn) { color: #fff; font-size: 16px; line-height: 24px; text-decoration: none; white-space: nowrap; }
.wf-anchors__bar .wf-btn { margin-left: auto; }

/* Moduli — distanza 84px */
.wf-module { margin-bottom: 84px; }
.wf section[id] { scroll-margin-top: 108px; } /* barra ancore 76px + 32px */
.wf-after { margin-top: 32px; }

/* Griglie */
.wf-grid3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.wf-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 56px 26px; }

/* Card icona — 384px, padding 32/20/36, icona 172px */
.wf-icard { background: var(--band); padding: 32px 20px 36px; }
.wf-icard__icon { width: 172px; height: 172px; margin: 0 auto; font-size: 11px; }

/* Card prodotto/benefit — media 384×256, testo rientrato 16px */
.wf-pcard { background: var(--band); }
.wf-pcard__media { aspect-ratio: 3 / 2; font-weight: 700; }
.wf-pcard__body { padding: 0 16px 24px; }
.wf-pcard .wf-h4 { margin-top: 8px; margin-bottom: 16px; }

/* Applicazioni — immagini 580×386, testo 516px rientrato 32px */
.wf-acard__img { aspect-ratio: 580 / 386; }
.wf-acard__text { padding: 32px 32px 0; }

/* Split — stessa regola della hero: testo 540px dal margine 120px, immagine 713×476 al vivo a destra, centrate in verticale */
.wf-split { display: grid; grid-template-columns: 1fr 1fr; align-items: center; }
.wf-split__text { padding-left: 120px; padding-right: 52px; }
.wf-split__text > * { max-width: 540px; }
.wf-split__img { height: 476px; }
.wf-split .wf-btn { margin-top: 32px; }
.wf-steps { counter-reset: s; margin-top: 12px; }
.wf-steps li { counter-increment: s; position: relative; padding-left: 40px; font-size: 20px; line-height: 28px; margin-bottom: 12px; }
.wf-steps li::before { content: counter(s); position: absolute; left: 0; top: 0; width: 28px; height: 28px; background: var(--ink); color: #fff; font-size: 14px; font-weight: 700; display: flex; align-items: center; justify-content: center; }

/* Testimonianza */
.wf-quote { display: grid; grid-template-columns: 580px 1fr; gap: 26px; margin-top: 56px; align-items: center; }
.wf-quote__img { aspect-ratio: 580 / 386; }
.wf-quote__text { padding: 0 32px; }
.wf-quote blockquote { font-weight: 400; }
.wf-quote .wf-link { display: inline-block; margin-top: 24px; }
.wf-logos { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; margin-top: 56px; }
.wf-logos li { height: 80px; font-size: 11px; }

/* FAQ */
.wf-faq { border-bottom: 1px solid var(--line); }
.wf-faq summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; align-items: center; margin: 0; padding: 20px 0; }
.wf-faq summary::-webkit-details-marker { display: none; }
.wf-faq summary::after { content: '+'; font-size: 28px; }
.wf-faq[open] summary::after { content: '–'; }
.wf-faq .wf-body { padding-bottom: 24px; max-width: 820px; }

/* Form — sezione 70px sopra, H2 42/52 mb32, intro 18/25.2, gruppi 22/30 mb32, colonne 563 (gap 5%), campi 60px, passo 107px */
.wf-form-section { background: var(--band); padding: 70px 0 70px; }
.wf-form__intro { font-size: 18px; line-height: 25.2px; margin-bottom: 32px; }
.wf-form { display: flex; gap: 5%; }
.wf-form__col { flex: 1; display: flex; flex-direction: column; }
.wf-form__group { font-size: 22px; line-height: 30px; margin-bottom: 32px; }
.wf-field { position: relative; margin-bottom: 47px; }
.wf-field label { position: absolute; top: -14px; left: 25px; background: var(--band); padding: 0 8px; font-size: 12px; line-height: 16px; font-weight: 500; letter-spacing: .5px; }
.wf-field input { display: block; width: 100%; height: 60px; background: #fff; border: 1px solid var(--line); padding: 0 0 0 33px; font: 500 16px/20px Arial, sans-serif; color: var(--ink); border-radius: 0; }
.wf-field input:focus { outline: 2px solid var(--ink); outline-offset: -2px; }
.wf-check { display: flex; gap: 12px; align-items: flex-start; font-size: 16px; line-height: 24px; margin-bottom: 24px; }
.wf-check input { width: 18px; height: 18px; margin-top: 3px; accent-color: var(--ink); flex-shrink: 0; }
.wf-check a { color: var(--ink); font-weight: 700; text-decoration: none; }
.wf-form .wf-btn--dark { align-self: flex-start; margin-top: 8px; }

/* Footer — padding 60/16, colonne in linea, titoli 12px mb24, link 14/26 bold con 12px tra le voci */
.wf-footer { background: var(--ink); color: #fff; padding: 60px 0 16px; }
.wf-footer a { color: #fff; text-decoration: none; }
.wf-footer__cols { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 32px 20px; }
.wf-footer__title { font-size: 12px; line-height: 16px; margin-bottom: 24px; }
.wf-footer__col li { font-size: 14px; line-height: 26px; font-weight: 700; margin-bottom: 12px; }
.wf-footer__social { display: flex; justify-content: center; align-items: center; gap: 8px; padding: 16px 0 12px; margin: 56px 0 16px; font-size: 12px; line-height: 16px; }
.wf-footer__social span { margin-right: 10px; }
.wf-footer__social a { width: 30px; height: 30px; border-radius: 50%; background: #fff; color: var(--ink); display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; }
.wf-footer__legal { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; border-top: 1px solid #fff; padding-top: 16px; }
.wf-footer__legal a { font-size: 12px; line-height: 16px; font-weight: 500; }

/* Laptop */
@media (max-width: 1200px) {
  .wf-shell { padding-inline: 48px; }
  .wf-hero__text { padding-left: 48px; }
  .wf-anchors__bar { padding: 0 50px 0 68px; }
  .wf-split__text { padding-left: 48px; }
  .wf-quote { grid-template-columns: 1fr 1fr; }
}
/* Tablet */
@media (max-width: 1023px) {
  .wf-grid3 { grid-template-columns: repeat(2, 1fr); }
  .wf-anchors__bar { gap: 24px; overflow-x: auto; }
  .wf-hero__lead, .wf-lead { font-size: 22px; line-height: 30.8px; }
  .wf-h1 { font-size: 40px; line-height: 48px; }
}
/* Mobile — fanuc.eu @375: margini 16px, H1 32/40, lead 22/30.8, H3 22/30, testo 18/25.2, logo 127×32 */
@media (max-width: 767px) {
  .wf-shell { padding-inline: 16px; }
  .wf-header__strip { height: 16px; }
  .wf-header__bar { height: 72px; padding-right: 16px; }
  .wf-header__logo { width: 127px; height: 32px; }
  .wf-header .wf-btn { padding: 10px 16px; font-size: 14px; line-height: 20px; }
  .wf-hero { grid-template-columns: 1fr; min-height: 0; }
  .wf-hero__img { order: -1; height: auto; aspect-ratio: 375 / 246; }
  .wf-hero__text { padding: 32px 16px 0; max-width: none; }
  .wf-hero__text .wf-btn { display: block; text-align: center; }
  .wf-hero__down { display: none; }
  .wf-h1 { font-size: 32px; line-height: 40px; }
  .wf-h2 { font-size: 28px; line-height: 36px; margin-bottom: 24px; }
  .wf-h3 { font-size: 22px; line-height: 30px; font-weight: 500; }
  .wf-h4 { font-size: 22px; line-height: 30.8px; }
  .wf-body, .wf-steps li { font-size: 18px; line-height: 25.2px; }
  .wf-hero__lead, .wf-lead { font-size: 22px; line-height: 30.8px; }
  .wf-module, .wf-hero, .wf-anchors { margin-bottom: 56px; }
  .wf-anchors__bar { height: 56px; padding: 0 16px; }
  .wf-anchors__bar a:not(.wf-btn) { font-size: 14px; }
  .wf-anchors__bar .wf-btn { padding: 10px 16px; font-size: 14px; }
  .wf-grid3, .wf-grid2, .wf-split, .wf-quote { grid-template-columns: 1fr; }
  .wf-grid2 { gap: 32px; }
  .wf-acard__text, .wf-quote__text { padding: 20px 0 0; }
  .wf-split .wf-btn { display: block; text-align: center; }
  .wf-split__img { order: -1; height: auto; aspect-ratio: 375 / 246; }
  .wf-split__text { padding: 32px 16px 0; }
  .wf-logos { grid-template-columns: repeat(2, 1fr); }
  .wf-form { flex-direction: column; gap: 16px; }
  .wf-form-section { padding: 56px 0; }
  .wf-footer { padding: 60px 0 88px; }
  .wf-footer__cols { flex-direction: column; }
  .wf-footer__legal { justify-content: flex-start; }
}
</style>

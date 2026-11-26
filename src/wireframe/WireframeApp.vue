<template>
  <div class="wf">
    <p class="wf-banner">WIREFRAME · versione conversione · copy PROPOSTA da approvare</p>

    <!-- HEADER -->
    <!-- Header come fanuc.eu: fascia gialla, barra bianca 120px, logo rosso, CTA gialla -->
    <header class="fx-header">
      <div class="fx-header__strip"></div>
      <div class="wf-shell fx-header__bar">
        <img src="../assets/fanuc/fanuc-logo.svg" alt="FANUC" class="fx-header__logo" width="150" height="43" />
        <a href="#contatto" class="fx-btn fx-btn--yellow">Parla con un esperto</a>
      </div>
    </header>

    <main>
      <!-- 1. HERO: immagine statica + testo breve + 1 CTA (no video) -->
      <section class="wf-hero">
        <div class="wf-shell wf-hero__grid">
          <div>
            <p class="wf-eyebrow">Robot collaborativi FANUC CRX</p>
            <h1 class="wf-h1">Il cobot che lavora accanto ai tuoi operatori</h1>
            <p class="wf-lead">Carichi fino a 30 kg, programmazione a mano guidata, 8 anni senza manutenzione*. Ti aiutiamo a capire se CRX è adatto al tuo processo.</p>
            <div class="wf-actions">
              <a href="#contatto" class="wf-btn">Richiedi una consulenza</a>
            </div>
            <p class="wf-note">* Secondo le condizioni FANUC.</p>
          </div>
          <div class="wf-img wf-img--hero">IMMAGINE · CRX in reparto produttivo, statica</div>
        </div>
      </section>

      <!-- 2. NAV ANCORE (come pagina iperammortamento) -->
      <nav class="wf-anchors" aria-label="Sezioni">
        <div class="wf-shell wf-anchors__in">
          <a href="#vantaggi">Vantaggi</a>
          <a href="#applicazioni">Applicazioni</a>
          <a href="#incentivi">Iperammortamento</a>
          <a href="#faq">FAQ</a>
          <a href="#contatto" class="wf-btn wf-btn--sm">Contattaci</a>
        </div>
      </nav>

      <!-- 3. VANTAGGI: griglia card icona + titolo + 1 frase -->
      <section id="vantaggi" class="wf-section">
        <div class="wf-shell">
          <h2 class="wf-h2">Perché scegliere CRX</h2>
          <ul class="wf-cards">
            <li v-for="b in benefits" :key="b.t" class="wf-card">
              <span class="wf-icon" aria-hidden="true">ICONA</span>
              <h3 class="wf-h3">{{ b.t }}</h3>
              <p>{{ b.c }}</p>
            </li>
          </ul>
        </div>
      </section>

      <!-- 4. APPLICAZIONI: blocchi testo + immagine alternati -->
      <section id="applicazioni" class="wf-section wf-section--grey">
        <div class="wf-shell">
          <h2 class="wf-h2">Dove usarlo</h2>
          <div v-for="(a, i) in apps" :key="a.t" class="wf-split" :class="{ 'wf-split--rev': i % 2 }">
            <div class="wf-img">IMMAGINE · {{ a.img }}</div>
            <div>
              <h3 class="wf-h3">{{ a.t }}</h3>
              <p>{{ a.c }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 5. CASO DI SUCCESSO -->
      <section class="wf-section">
        <div class="wf-shell wf-split">
          <div class="wf-img">FOTO · Bonvicini Carpenteria</div>
          <div>
            <p class="wf-eyebrow">Caso di successo</p>
            <blockquote class="wf-quote">«Grazie a una semplice programmazione, è bastata un'ora per preparare il nostro robot collaborativo FANUC CRX-10iA/L alla saldatura di tubi per ombrelli.»</blockquote>
            <p class="wf-note">Alessandro Bonvicini, Direttore di produzione · Bonvicini Carpenteria, Verona</p>
            <a class="wf-link" href="https://www.fanuc.eu/it-it/casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione" target="_blank" rel="noopener noreferrer">Leggi il caso</a>
          </div>
        </div>
      </section>

      <!-- 6. IPERAMMORTAMENTO: testo + CTA -->
      <section id="incentivi" class="wf-section wf-section--dark">
        <div class="wf-shell wf-narrow">
          <h2 class="wf-h2">Puoi usare l'iperammortamento 2026</h2>
          <p class="wf-lead">Un investimento in CRX può rientrare nell'agevolazione se rispetta i requisiti di legge. Verifichiamo con te il tuo caso.</p>
          <a href="#contatto" class="wf-btn wf-btn--inv">Verifica il tuo caso</a>
          <p class="wf-note">Informazioni generali, non consulenza fiscale.</p>
        </div>
      </section>

      <!-- 7. FAQ -->
      <section id="faq" class="wf-section">
        <div class="wf-shell wf-narrow">
          <h2 class="wf-h2">Domande frequenti</h2>
          <details v-for="f in faq" :key="f.q" class="wf-faq">
            <summary>{{ f.q }}</summary>
            <p>{{ f.a }}</p>
          </details>
        </div>
      </section>

      <!-- 8. FORM LEAD (campi come le pagine fanuc.eu) -->
      <!-- Form come fanuc.eu: fondo giallo, campi bianchi 60px, etichetta a linguetta gialla, INVIA scuro -->
      <section id="contatto" class="fx-form-section">
        <div class="wf-shell">
          <h2 class="fx-form__title">Parla con un esperto CRX</h2>
          <p class="fx-form__intro">Raccontaci il tuo processo: ti ricontattiamo per valutare insieme il modello adatto.</p>
          <form class="fx-form" @submit.prevent>
            <h3 class="fx-form__group">Informazioni sul contatto</h3>
            <div class="fx-field"><label for="fx-nome">Nome *</label><input id="fx-nome" required /></div>
            <div class="fx-field"><label for="fx-cognome">Cognome *</label><input id="fx-cognome" required /></div>
            <div class="fx-field"><label for="fx-email">E-mail *</label><input id="fx-email" type="email" required /></div>
            <div class="fx-field"><label for="fx-tel">Numero di telefono</label><input id="fx-tel" type="tel" /></div>
            <h3 class="fx-form__group">Informazioni commerciali</h3>
            <div class="fx-field"><label for="fx-azienda">Azienda *</label><input id="fx-azienda" required /></div>
            <div class="fx-field"><label for="fx-ruolo">Ruolo</label><input id="fx-ruolo" /></div>
            <div class="fx-field"><label for="fx-int">Cosa ti interessa? *</label>
              <select id="fx-int" required>
                <option value="">Seleziona</option>
                <option>Valutare CRX per un'applicazione</option>
                <option>Richiedere un preventivo</option>
                <option>Iperammortamento 2026</option>
                <option>Vedere una demo</option>
              </select>
            </div>
            <label class="fx-check"><input type="checkbox" required /> <span>Accetto la <a href="https://www.fanuc.eu/it-it/informativa-sulla-privacy-e-sui-cookie" target="_blank" rel="noopener noreferrer">PRIVACY E COOKIE POLICY</a> *</span></label>
            <label class="fx-check"><input type="checkbox" /> <span>Sono interessato a ricevere aggiornamenti da FANUC sull'automazione di fabbrica. Autorizzo FANUC a inviarmi e-mail pertinenti al mio interesse.</span></label>
            <button class="fx-btn fx-btn--dark">Invia</button>
          </form>
        </div>
      </section>
    </main>

    <!-- Footer come fanuc.eu: blu-nero #06161F, menu a 2 colonne con chevron, social, link legali -->
    <footer class="fx-footer">
      <div class="wf-shell">
        <div class="fx-footer__cols">
          <ul v-for="(col, i) in footerCols" :key="i">
            <li v-for="m in col" :key="m.t">
              <details>
                <summary>{{ m.t }}<span class="fx-chev" aria-hidden="true"></span></summary>
                <ul class="fx-footer__sub">
                  <li v-for="s in m.l" :key="s[0]"><a :href="s[1]" target="_blank" rel="noopener noreferrer">{{ s[0] }}</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div class="fx-footer__social">
          <span>TROVACI SU:</span>
          <a href="https://www.facebook.com/FanucEurope/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z"/></svg></a>
          <a href="https://www.youtube.com/@FANUCEurope" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"/></svg></a>
          <a href="https://www.linkedin.com/company/fanuc-europe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M6.9 8.8H3.6V20h3.3zM5.2 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.6c0-3-1.6-4.9-4.2-4.9-1.5 0-2.4.8-2.8 1.5V8.8h-3.2V20h3.3v-5.6c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.3z"/></svg></a>
        </div>
        <ul class="fx-footer__legal">
          <li v-for="l in legal" :key="l[0]"><a :href="`https://www.fanuc.eu/it-it/${l[1]}`" target="_blank" rel="noopener noreferrer">{{ l[0] }}</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const benefits = [
  { t: 'Fino a 30 kg', c: 'Gamma da 3 a 30 kg di carico utile (CRX-30iA).' },
  { t: '8 anni senza manutenzione*', c: 'Meno fermi, meno costi di intervento.' },
  { t: '±0,03 mm', c: 'Ripetibilità fino a ±0,03 mm, secondo il modello.' },
  { t: 'Si programma a mano', c: 'Guidi il braccio e componi i cicli con il drag & drop.' },
  { t: 'Sensori di forza', c: 'Rileva il contatto e si ferma.' },
  { t: 'Installazione rapida', c: 'Compatto, alimentazione 200–240 V.' },
  { t: 'Versioni Food', c: 'Modelli certificati per il settore alimentare.' },
  { t: 'Accessori certificati', c: 'Pinze e periferiche approvate FANUC.' },
]

const apps = [
  { t: 'Metalmeccanica', c: 'Carico e scarico di macchine CNC, anche nei turni non presidiati.', img: 'CRX su macchina utensile' },
  { t: 'Food & Beverage', c: 'Manipolazione di prodotti con le versioni CRX Food.', img: 'CRX FoodGrade' },
  { t: 'Packaging e logistica', c: 'Prelievo, confezionamento e pallettizzazione.', img: 'CRX-20iA/L' },
  { t: 'Assemblaggio', c: 'Operazioni ripetitive e controllo con visione integrata.', img: 'CRX con iRVision' },
]

const E = 'https://www.fanuc.eu/it-it/'
const footerCols = [
  [
    { t: 'PRODOTTI', l: [['Robot collaborativi CRX', E + 'serie-crx'], ['Descrizione del prodotto', E + 'descrizione-del-prodotto']] },
    { t: 'SERVIZIO CLIENTI', l: [['Assistenza ai clienti', E + 'lattenzione-al-cliente-attraverso-servizi-sostenibili']] },
    { t: 'EDUCATION', l: [['Formazione CRX', 'https://crx.fanuc.eu/']] },
  ],
  [
    { t: 'CASI DI SUCCESSO', l: [['Bonvicini Carpenteria', E + 'casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione']] },
    { t: 'INCENTIVI', l: [['Iperammortamento 2026', E + 'fanuc-iper-ammortamento-2026']] },
    { t: 'CONTATTI', l: [['Contattaci', E + 'contacting-fanuc']] },
  ],
]
const legal = [
  ['CONDIZIONI DI UTILIZZO', 'condizioni-di-utilizzo'],
  ['INFORMATIVA SULLA PRIVACY E SUI COOKIE', 'informativa-sulla-privacy-e-sui-cookie'],
  ['TERMINI E CONDIZIONI DI ACQUISTO', 'termini-e-condizioni-di-fanuc'],
  ['CANALI PER LA SEGNALAZIONE DELLA CONFORMITÀ', 'canali-di-segnalazione-della-conformita-fanuc'],
  ['NOTE LEGALI', 'note-legali'],
  ['CONTATTACI', 'contacting-fanuc'],
]

const faq = [
  { q: 'Serve saper programmare?', a: 'No. Guidi il braccio a mano e crei le sequenze dal tablet. La formazione dipende dall\'applicazione.' },
  { q: 'Quale modello mi serve?', a: 'Dipende da carico, sbraccio e ciclo. Lo valutiamo insieme.' },
  { q: 'Può lavorare senza ripari?', a: 'Dipende dalla valutazione dei rischi della tua applicazione.' },
  { q: 'Quanto ci vuole per installarlo?', a: 'Dipende dal processo e dalle verifiche di sicurezza. Ti diamo una stima dopo la valutazione.' },
  { q: 'Rientra nell\'iperammortamento?', a: 'Può rientrare se bene e investimento rispettano i requisiti di legge.' },
]
</script>

<style>
.wf { --g0:#fff; --g1:#f2f2f2; --g2:#d9d9d9; --g3:#8c8c8c; --g4:#333; font-family: Arial, sans-serif; color: var(--g4); background: var(--g0); }
.wf * { box-sizing: border-box; margin: 0; }
.wf-banner { background: var(--g4); color: #fff; font-size: 12px; text-align: center; padding: 6px 16px; }
.wf-shell { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
.wf-narrow { max-width: 800px; }
.wf-header { border-bottom: 1px solid var(--g2); }
.wf-header__in { display: flex; justify-content: space-between; align-items: center; height: 64px; }
.wf-logo { border: 2px solid var(--g4); padding: 4px 12px; font-weight: 700; letter-spacing: .1em; display: inline-block; }
.wf-eyebrow { font-size: 13px; text-transform: uppercase; letter-spacing: .08em; color: var(--g3); margin-bottom: 8px; }
.wf-h1 { font-size: clamp(32px, 4.5vw, 56px); line-height: 1.1; margin-bottom: 20px; }
.wf-h2 { font-size: clamp(26px, 3vw, 36px); line-height: 1.15; margin-bottom: 32px; }
.wf-h3 { font-size: 18px; margin-bottom: 8px; }
.wf-lead { font-size: 18px; line-height: 1.5; margin-bottom: 24px; max-width: 60ch; }
.wf-note { font-size: 12px; color: var(--g3); margin-top: 12px; }
.wf-btn { display: inline-block; background: var(--g4); color: #fff; border: 0; padding: 14px 28px; font: 700 15px Arial, sans-serif; text-decoration: none; cursor: pointer; }
.wf-btn--sm { padding: 8px 16px; font-size: 13px; }
.wf-btn--inv { background: #fff; color: var(--g4); }
.wf-link { color: var(--g4); font-weight: 700; }
.wf-img { background: var(--g2); color: var(--g3); display: flex; align-items: center; justify-content: center; text-align: center; padding: 16px; font-size: 13px; aspect-ratio: 4/3; border: 1px dashed var(--g3); }
.wf-hero { padding: 64px 0; }
.wf-hero__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.wf-img--hero { aspect-ratio: 4/3; }
.wf-anchors { position: sticky; top: 0; z-index: 5; background: var(--g1); border-block: 1px solid var(--g2); }
.wf-anchors__in { display: flex; gap: 32px; align-items: center; height: 56px; overflow-x: auto; }
.wf-anchors a:not(.wf-btn) { color: var(--g4); text-decoration: none; font-size: 14px; font-weight: 700; white-space: nowrap; }
.wf-anchors .wf-btn { margin-left: auto; white-space: nowrap; }
.wf-section { padding: 80px 0; }
.wf-section--grey { background: var(--g1); }
.wf-section--dark { background: var(--g4); color: #fff; }
.wf-section--dark .wf-note { color: var(--g2); }
.wf-cards { list-style: none; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
.wf-card { border: 1px solid var(--g2); padding: 24px; }
.wf-card p { font-size: 15px; line-height: 1.45; }
.wf-icon { display: flex; align-items: center; justify-content: center; width: 56px; height: 56px; background: var(--g2); font-size: 9px; color: var(--g3); margin-bottom: 16px; }
.wf-split { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
.wf-split + .wf-split { margin-top: 48px; }
.wf-split--rev > :first-child { order: 2; }
.wf-split p { line-height: 1.5; }
.wf-quote { font-size: 22px; line-height: 1.4; font-weight: 700; }
.wf-faq { border-bottom: 1px solid var(--g2); padding: 20px 0; }
.wf-faq summary { font-weight: 700; font-size: 17px; cursor: pointer; }
.wf-faq p { margin-top: 12px; line-height: 1.5; }
.wf-form-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 48px; }
.wf-form { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; background: #fff; padding: 32px; border: 1px solid var(--g2); }
.wf-form label { display: flex; flex-direction: column; gap: 6px; font-size: 14px; font-weight: 700; }
.wf-form input:not([type=checkbox]), .wf-form select, .wf-form textarea { border: 1px solid var(--g3); padding: 10px; font: 15px Arial, sans-serif; }
.wf-full { grid-column: 1 / -1; }
.wf-check { flex-direction: row !important; align-items: center; font-weight: 400 !important; }
.wf-footer { background: var(--g4); color: #fff; padding: 40px 0; }
.wf-footer .wf-logo { border-color: #fff; }
/* ===== Header / Form / Footer replicati da fanuc.eu (valori rilevati) ===== */
.wf { --fx-yellow: #FFD702; --fx-ink: #06161F; --fx-red: #C32C30; }
.fx-btn { display: inline-block; border: 0; padding: 10px 24px; font: 700 14px Arial, sans-serif; text-transform: uppercase; letter-spacing: .02em; text-decoration: none; cursor: pointer; }
.fx-btn--yellow { background: var(--fx-yellow); color: var(--fx-ink); padding: 14px 24px; }
.fx-btn--dark { background: var(--fx-ink); color: #fff; margin-top: 24px; align-self: flex-start; }
.fx-btn:hover { filter: brightness(.95); }
.fx-header { position: relative; z-index: 6; background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,.08); }
.fx-header__strip { height: 24px; background: var(--fx-yellow); }
.fx-header__bar { height: 96px; display: flex; align-items: center; justify-content: space-between; }
.fx-header__logo { height: 26px; width: auto; }
.fx-form-section { background: var(--fx-yellow); color: var(--fx-ink); padding: 56px 0 48px; }
.fx-form__title { font-size: 28px; font-weight: 700; margin-bottom: 12px; }
.fx-form__intro { font-size: 14px; margin-bottom: 32px; }
.fx-form { max-width: 475px; display: flex; flex-direction: column; }
.fx-form__group { font-size: 19px; font-weight: 400; margin: 8px 0 20px; }
.fx-field { position: relative; margin-bottom: 26px; }
.fx-field label { position: absolute; top: -8px; left: 22px; background: var(--fx-yellow); padding: 0 6px 2px; font-size: 12px; font-weight: 500; letter-spacing: .5px; line-height: 16px; }
.fx-field input, .fx-field select { width: 100%; height: 48px; background: #fff; border: 1px solid #ccc; padding: 0 0 0 28px; font: 500 16px Arial, sans-serif; color: var(--fx-ink); border-radius: 0; }
.fx-field input:focus, .fx-field select:focus { outline: 2px solid var(--fx-ink); outline-offset: 0; }
.fx-check { display: flex; gap: 12px; align-items: flex-start; font-size: 14px; line-height: 1.5; margin-bottom: 18px; }
.fx-check input { width: 16px; height: 16px; margin-top: 3px; accent-color: var(--fx-ink); flex-shrink: 0; }
.fx-check a { color: var(--fx-ink); font-weight: 700; text-decoration: none; }
.fx-footer { background: var(--fx-ink); color: #fff; padding: 40px 0 16px; }
.fx-footer ul { list-style: none; padding: 0; }
.fx-footer__cols { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
.fx-footer details { border-bottom: 1px solid #838b8f; }
.fx-footer summary { list-style: none; display: flex; justify-content: space-between; align-items: center; padding: 16px 0; font-size: 14px; cursor: pointer; }
.fx-footer summary::-webkit-details-marker { display: none; }
.fx-chev { width: 8px; height: 8px; border-right: 1.5px solid #fff; border-bottom: 1.5px solid #fff; transform: rotate(45deg); margin-right: 6px; transition: transform .2s; }
.fx-footer details[open] .fx-chev { transform: rotate(-135deg); }
.fx-footer__sub { padding-bottom: 14px !important; }
.fx-footer__sub a { display: block; color: #fff; font-size: 14px; font-weight: 700; text-decoration: none; padding: 4px 0; }
.fx-footer__social { display: flex; justify-content: center; align-items: center; gap: 10px; margin: 48px 0 14px; font-size: 12px; }
.fx-footer__social span { margin-right: 4px; font-weight: 700; }
.fx-footer__social a { width: 24px; height: 24px; border-radius: 50%; background: #fff; color: var(--fx-ink); display: flex; align-items: center; justify-content: center; }
.fx-footer__legal { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 20px; border-top: 1px solid #fff; padding-top: 16px !important; }
.fx-footer__legal a { color: #fff; font-size: 12px; font-weight: 700; text-decoration: none; }
.fx-footer a:hover { color: var(--fx-yellow); }
@media (max-width: 767px) {
  .fx-header__strip { height: 12px; }
  .fx-header__bar { height: 72px; }
  .fx-header__logo { height: 20px; }
  .fx-header .fx-btn { font-size: 12px; padding: 10px 14px; }
  .fx-footer__cols { grid-template-columns: 1fr; }
  .fx-footer__legal { justify-content: flex-start; }
}

@media (max-width: 900px) {
  .wf-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 767px) {
  .wf-hero__grid, .wf-split, .wf-form-grid { grid-template-columns: 1fr; gap: 24px; }
  .wf-split--rev > :first-child { order: 0; }
  .wf-form { grid-template-columns: 1fr; padding: 20px; }
  .wf-anchors a:not(.wf-btn) { font-size: 13px; }
  .wf-section { padding: 56px 0; }
}
@media (max-width: 480px) { .wf-cards { grid-template-columns: 1fr; } }
</style>

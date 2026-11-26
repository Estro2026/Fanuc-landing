<template>
  <div class="wf">
    <p class="wf-banner">WIREFRAME · versione conversione · copy PROPOSTA da approvare</p>

    <!-- HEADER -->
    <header class="wf-header">
      <div class="wf-shell wf-header__in">
        <div class="wf-logo">FANUC</div>
        <a href="#contatto" class="wf-btn wf-btn--sm">Contattaci</a>
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
      <section id="contatto" class="wf-section wf-section--grey">
        <div class="wf-shell wf-form-grid">
          <div>
            <h2 class="wf-h2">Parla con un esperto CRX</h2>
            <p class="wf-lead">Raccontaci il tuo processo. Ti ricontattiamo entro 2 giorni lavorativi.</p>
            <p class="wf-note">[Tempo di risposta da confermare con FANUC]</p>
          </div>
          <form class="wf-form" @submit.prevent>
            <label>Nome*<input required /></label>
            <label>Cognome*<input required /></label>
            <label>E-mail aziendale*<input type="email" required /></label>
            <label>Azienda*<input required /></label>
            <label>Telefono<input type="tel" /></label>
            <label>Ruolo<input /></label>
            <label class="wf-full">Cosa ti interessa?*
              <select required>
                <option>Valutare CRX per un'applicazione</option>
                <option>Richiedere un preventivo</option>
                <option>Iperammortamento 2026</option>
                <option>Vedere una demo</option>
              </select>
            </label>
            <label class="wf-full">Messaggio<textarea rows="3"></textarea></label>
            <label class="wf-check wf-full"><input type="checkbox" required /> Accetto l'Informativa sulla privacy*</label>
            <label class="wf-check wf-full"><input type="checkbox" /> Voglio ricevere comunicazioni da FANUC</label>
            <button class="wf-btn wf-full">Invia</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="wf-footer">
      <div class="wf-shell">
        <div class="wf-logo">FANUC</div>
        <p class="wf-note">Social · link legali · © FANUC Europe Corporation (come mockup)</p>
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

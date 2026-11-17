<template>
  <section class="incentive section surface-yellow smart-grid-bg smart-grid-bg--on-yellow" aria-labelledby="incentive-h2">
    <div class="page-shell">
      <div class="section-inner">
        <div class="incentive__header">
          <p class="eyebrow eyebrow--indexed eyebrow--band incentive__eyebrow">INCENTIVI AGLI INVESTIMENTI</p>
          <h2 id="incentive-h2" class="h2 incentive__h2"><span class="h-accent">VALUTA L'INVESTIMENTO</span> ANCHE DAL PUNTO DI VISTA FISCALE.</h2>
          <p class="lead incentive__intro">
            L'iperammortamento è una maggiorazione del costo fiscalmente ammortizzabile, prevista dalla normativa per determinati investimenti in beni strumentali. Un progetto basato su FANUC CRX può essere valutato ai fini dell'agevolazione solo se il bene, l'integrazione e l'investimento rispettano tutti i requisiti applicabili.
          </p>
        </div>

        <div class="incentive__body">

          <ul class="incentive__steps">
            <li v-for="step in steps" :key="step.id" class="incentive__step reveal-cut">
              <div class="incentive__step-number" aria-hidden="true">{{ step.number }}</div>
              <div class="incentive__step-content">
                <h3 class="h3 incentive__step-title">{{ step.title }}</h3>
                <p class="body incentive__step-copy">{{ step.copy }}</p>
              </div>
            </li>
          </ul>

          <div class="incentive__cta-block">
            <a href="#contatto" class="btn-primary incentive__cta" @click="setIncentivePreset">
              Scopri se la tua azienda può accedere
            </a>
          </div>

          <p class="incentive__disclaimer">
            Informazioni generali, non costituiscono consulenza fiscale. Ammissibilità e condizioni sono da verificare sul singolo investimento secondo la normativa vigente.
            <!-- TODO RELEASE: Inserire riferimento normativo aggiornato (Legge 30/12/2025 n.199, art.1 commi 427–436 e atti attuativi) verificato da consulente fiscale prima del go-live -->
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    id: 'what',
    number: '01',
    title: 'COS\'È',
    copy: 'Un meccanismo fiscale che può aumentare il valore deducibile tramite quote di ammortamento o leasing, nei casi previsti dalla legge.',
  },
  {
    id: 'why',
    number: '02',
    title: 'PERCHÉ VALUTARE CRX',
    copy: 'Una soluzione robotica può rientrare tra i beni valutabili, ma non esiste idoneità automatica per tutta la gamma.',
  },
  {
    id: 'what-needed',
    number: '03',
    title: 'COSA SERVE',
    copy: 'Verifica tecnico-fiscale, requisiti del bene e interconnessione ove richiesta, documenti e comunicazioni previste dalle procedure vigenti.',
  },
]

function setIncentivePreset() {
  sessionStorage.setItem('formPreset', 'Iperammortamento')
}
</script>

<style scoped>
.incentive {
  background-color: var(--fanuc-yellow);
  scroll-margin-top: var(--header-height);
}

.incentive__header {
  margin-bottom: var(--section-lead-gap);
  max-width: 820px;
}

/* eyebrow su fondo giallo — tinta fissa, NO opacity */
.incentive__eyebrow {
  margin-bottom: var(--section-eyebrow-gap);
}

.incentive__h2 {
  color: var(--fanuc-black);
  margin-bottom: var(--section-h2-gap);
}

.incentive__intro {
  color: var(--fanuc-black);
  max-width: 68ch;
}

/* Ritmo verticale interno: card → CTA → nota con lo stesso passo */
.incentive__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-lg);
}

.incentive__steps {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-cards);
  width: 100%;
}

.incentive__step {
  background: var(--fanuc-black);
  padding: var(--space-lg) var(--space-md);
  --cut: var(--cut-md);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  transition: --cut var(--transition-cut);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.incentive__step-number {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 48px;
  color: var(--fanuc-yellow);
  line-height: 1;
}

.incentive__step-title {
  color: var(--fanuc-yellow);
  font-size: clamp(18px, 1.6vw, 22px);
}

/* step-copy — tinta fissa, NO opacity */
.incentive__step-copy {
  color: var(--fanuc-black-20);
  font-size: 15px;
  line-height: 1.5;
}


/* disclaimer — tinta fissa, NO opacity */
.incentive__disclaimer {
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--fanuc-black);
  line-height: 1.5;
}

@media (max-width: 767px) {
  .incentive__steps {
    grid-template-columns: 1fr;
  }
}
</style>

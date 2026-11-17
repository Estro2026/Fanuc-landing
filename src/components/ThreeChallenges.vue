<template>
  <section class="challenges section" aria-labelledby="challenges-h2">
    <div class="page-shell">
      <div class="section-inner">
        <div class="challenges__header">
          <p class="eyebrow eyebrow--indexed challenges__eyebrow">LE SFIDE DELLA PRODUZIONE</p>
          <h2 id="challenges-h2" class="h2 challenges__h2">
            QUANDO LE RISORSE SONO LIMITATE,<br><span class="h-accent">OGNI PROCESSO CONTA.</span>
          </h2>
          <p class="lead challenges__lead">
            Tre ostacoli possono rallentare la crescita di una PMI. L'automazione va valutata partendo dal lavoro concreto da svolgere.
          </p>
        </div>

        <ul class="challenges__grid">
          <li v-for="item in challenges" :key="item.id" class="challenges__card reveal-cut">
            <span class="pictogram" :style="{ '--pictogram': `url(${item.pictogram})` }" aria-hidden="true"></span>
            <h3 class="h3 challenges__card-title">{{ item.title }}</h3>
            <p class="body challenges__card-copy">{{ item.copy }}</p>
          </li>
        </ul>

        <div class="challenges__cta-wrap">
          <a href="#contatto" class="btn-primary">Parla con un esperto</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cantoPictograms } from '../data/cantoAssets'

const challenges = [
  {
    id: 'personnel',
    pictogram: cantoPictograms.crx,
    title: 'PERSONALE DIFFICILE DA REPERIRE',
    copy: 'Le persone qualificate servono sulle attività a maggiore valore, mentre alcune operazioni ripetitive assorbono tempo.',
  },
  {
    id: 'repetitive',
    pictogram: cantoPictograms.fast,
    title: 'ATTIVITÀ RIPETITIVE',
    copy: 'Carico, scarico e movimentazione richiedono continuità e ripetibilità lungo i turni di produzione.',
  },
  {
    id: 'complexity',
    pictogram: cantoPictograms.lightweight,
    title: 'TIMORE DELLA COMPLESSITÀ',
    copy: 'Spazi, competenze e tempi di integrazione possono rendere difficile il primo passo verso la robotica.',
  },
]
</script>

<style scoped>
.challenges {
  background: var(--fanuc-white);
  scroll-margin-top: var(--header-height);
}

.challenges__header {
  max-width: 800px;
  margin-bottom: var(--section-lead-gap);
}

.challenges__eyebrow {
  color: var(--fanuc-red);
  margin-bottom: var(--section-eyebrow-gap);
}

.challenges__h2 {
  margin-bottom: var(--section-h2-gap);
}

.challenges__lead {
  color: var(--fanuc-black-80);
  max-width: 60ch;
}

.challenges__grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-cards);
  margin-bottom: var(--space-xl);
}

.challenges__card {
  background: var(--fanuc-black);
  padding: var(--space-lg) var(--space-md);
  --cut: var(--cut-md);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  transition: --cut var(--transition-cut);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.challenges__card-title {
  color: var(--fanuc-yellow);
  font-size: clamp(18px, 1.8vw, 24px);
}

/* card-copy — tinta fissa, NO opacity */
.challenges__card-copy {
  color: var(--fanuc-black-20);
  font-size: 15px;
  line-height: 1.55;
}

.challenges__cta-wrap {
  display: flex;
  justify-content: flex-start;
}

@media (max-width: 1023px) {
  .challenges__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap-cards);
  }
}

@media (max-width: 767px) {
  .challenges__grid {
    grid-template-columns: 1fr;
  }
}
</style>

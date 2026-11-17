<template>
  <section class="benefits section surface-yellow smart-grid-bg smart-grid-bg--on-yellow" aria-labelledby="benefits-h2">
    <div class="page-shell">
      <div class="section-inner">
        <div class="benefits__header">
          <p class="eyebrow eyebrow--indexed eyebrow--band benefits__eyebrow">FANUC CRX / VANTAGGI</p>
          <h2 id="benefits-h2" class="h2"><span class="h-accent">L'AUTOMAZIONE</span> CHE SI ADATTA ALLA PRODUZIONE.</h2>
          <p class="lead benefits__lead">Otto caratteristiche da valutare in relazione alle esigenze del tuo impianto.</p>
        </div>

        <ul class="benefits__grid">
          <li v-for="benefit in crxBenefits" :key="benefit.id" class="benefits__grid-item">
            <BenefitVideoCard :benefit="benefit" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { crxBenefits } from '../data/crxBenefits'
import BenefitVideoCard from './BenefitVideoCard.vue'
</script>

<style scoped>
.benefits {
  background-color: var(--fanuc-yellow);  /* colore pieno: le tinte come sfondo sembrano trasparenze */
  scroll-margin-top: var(--header-height);
}

.benefits__header {
  margin-bottom: var(--section-lead-gap);
  max-width: 800px;
}

.benefits__eyebrow {
  margin-bottom: var(--section-eyebrow-gap);
}

.benefits__lead {
  margin-top: var(--section-h2-gap);
  color: var(--fanuc-black);
}

.benefits__grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-cards);
}

/* la card riempie la cella: tutte alte come la più alta della riga */
.benefits__grid-item {
  display: flex;
}
.benefits__grid-item > .benefit-card {
  flex: 1;
}

@media (max-width: 1279px) {
  .benefits__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .benefits__grid {
    grid-template-columns: 1fr;
  }
}
</style>

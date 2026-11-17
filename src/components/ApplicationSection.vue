<template>
  <section class="applications section" id="applicazioni" aria-labelledby="applications-h2">
    <div class="page-shell">
      <div class="section-inner">
        <div class="applications__header">
          <p class="eyebrow eyebrow--indexed applications__eyebrow">DOVE PUÒ LAVORARE CRX</p>
          <h2 id="applications-h2" class="h2 applications__h2">UNA SOLUZIONE DA VALUTARE,<br><span class="h-accent">PROCESSO PER PROCESSO.</span></h2>
          <p class="lead applications__lead">
            Dall'asservimento delle macchine alla movimentazione, i cobot CRX possono trovare spazio in diverse attività, in funzione di modello, utensile, layout e analisi di sicurezza.
          </p>
        </div>

        <ul class="applications__grid">
          <li v-for="app in crxApplications" :key="app.id" class="applications__card reveal-cut">
            <div class="applications__card-image">
              <img :src="app.image" :alt="app.imageAlt" width="1260" height="950" loading="lazy" decoding="async" />
            </div>
            <div class="applications__card-content">
              <h3 class="h3 applications__card-title">{{ app.sector }}</h3>
              <p class="body applications__card-copy">{{ app.description }}</p>
              <a
                href="#contatto"
                class="applications__card-cta"
                @click="setFormPreset(app.formPreset)"
              >
                Valuta questa applicazione
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { crxApplications } from '../data/crxApplications'

function setFormPreset(preset: string) {
  sessionStorage.setItem('formPreset', preset)
}
</script>

<style scoped>
.applications {
  background: var(--fanuc-black);
  scroll-margin-top: var(--header-height);
}

.applications__header {
  margin-bottom: var(--section-lead-gap);
  max-width: 760px;
}

/* eyebrow — colore token, NO opacity */
.applications__eyebrow {
  color: var(--fanuc-yellow);
  margin-bottom: var(--section-eyebrow-gap);
}

.applications__h2 {
  color: var(--fanuc-white);
  margin-bottom: var(--section-h2-gap);
}

/* lead — tinta fissa, NO opacity */
.applications__lead {
  color: var(--fanuc-black-20);
}

.applications__grid {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--gap-cards);
}

.applications__card {
  background: var(--fanuc-black-80);
  display: flex;
  flex-direction: column;
  --cut: var(--cut-sm);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  border: 1px solid transparent;
  transition: border-color var(--transition-base), --cut var(--transition-cut);
}
/* hover: bordo giallo — NO transform decorativo */
.applications__card:hover {
  border-color: var(--fanuc-yellow);
}

.applications__card-image {
  aspect-ratio: 4/3;
  overflow: hidden;
  position: relative;
}

.applications__card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.applications__card-content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex: 1;
}

.applications__card-title {
  color: var(--fanuc-yellow);
  font-size: clamp(18px, 1.5vw, 22px);
}

/* card-copy — tinta fissa, NO opacity */
.applications__card-copy {
  color: var(--fanuc-black-20);
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
}

.applications__card-cta {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-yellow);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  display: inline-flex;
  align-items: center;
  margin-top: var(--space-sm);
  transition: color var(--transition-fast);
}
.applications__card-cta:hover {
  color: var(--fanuc-white);
}

@media (max-width: 1023px) {
  .applications__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .applications__grid {
    grid-template-columns: 1fr;
  }
}
</style>

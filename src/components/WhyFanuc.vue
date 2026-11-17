<template>
  <section class="why-fanuc section" aria-labelledby="why-fanuc-h2">
    <div class="page-shell">
      <div class="section-inner">
        <div class="why-fanuc__header">
          <p class="eyebrow eyebrow--indexed why-fanuc__eyebrow">UN PARTNER PER LA PRODUZIONE</p>
          <h2 id="why-fanuc-h2" class="h2 why-fanuc__h2"><span class="h-accent">TECNOLOGIA E SUPPORTO</span> NEL TEMPO.</h2>
        </div>

        <ul class="why-fanuc__pillars">
          <li v-for="pillar in pillars" :key="pillar.id" class="why-fanuc__pillar">
            <span class="pictogram" :style="{ '--pictogram': `url(${pillar.pictogram})` }" aria-hidden="true"></span>
            <h3 class="h3 why-fanuc__pillar-title">{{ pillar.title }}</h3>
            <p class="body why-fanuc__pillar-copy">{{ pillar.copy }}</p>
            <a v-if="pillar.link" :href="pillar.link" class="why-fanuc__pillar-link" target="_blank" rel="noopener noreferrer">{{ pillar.linkLabel }}</a>
          </li>
        </ul>
        <!-- Caso di successo pubblicato su fanuc.eu (estratto + link). Da confermare l'autorizzazione all'uso. -->
        <figure class="why-fanuc__case surface-yellow">
          <div class="why-fanuc__case-media">
            <img
              :src="cantoPhotos.bonviciniCaseStudy"
              alt="Cella di saldatura con robot FANUC presso Bonvicini Carpenteria"
              width="1260"
              height="950"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="why-fanuc__case-body">
            <p class="eyebrow why-fanuc__case-eyebrow">Caso di successo · Saldatura ad arco</p>
            <blockquote class="why-fanuc__case-quote">
              <p>«Grazie a una semplice programmazione, è bastata un'ora per preparare il nostro robot collaborativo FANUC CRX-10<i>i</i>A/L alla saldatura di tubi per ombrelli.»</p>
            </blockquote>
            <figcaption class="why-fanuc__case-author">
              <strong>Alessandro Bonvicini</strong>
              <span>Direttore e Responsabile della Produzione, Bonvicini Carpenteria S.r.l.</span>
            </figcaption>
            <ul class="why-fanuc__case-facts" aria-label="L'azienda">
              <li>Verona</li>
              <li>15 dipendenti</li>
              <li>Primo cobot</li>
              <li>CRX-10<i>i</i>A/L</li>
            </ul>
            <a
              class="why-fanuc__case-link"
              href="https://www.fanuc.eu/it-it/casi-di-studio/il-cobot-crx-di-fanuc-aumenta-la-flessibilita-della-produzione"
              target="_blank"
              rel="noopener noreferrer"
            >Leggi il caso completo su fanuc.eu</a>
          </div>
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { cantoPictograms, cantoPhotos } from '../data/cantoAssets'

const pillars = [
  {
    id: 'reliability',
    pictogram: cantoPictograms.provenTechnology,
    title: 'AFFIDABILITÀ',
    copy: 'Il valore di una soluzione si misura anche nella continuità operativa e nella possibilità di gestirla lungo il ciclo di vita.',
    link: null,
    linkLabel: null,
  },
  {
    id: 'support',
    pictogram: cantoPictograms.maintenanceHealth,
    title: 'ASSISTENZA IN ITALIA',
    copy: 'Rete di assistenza FANUC presente sul territorio italiano per supportare l\'installazione, la manutenzione e la formazione.',
    link: 'https://www.fanuc.eu/it-it/contatti',
    linkLabel: 'Trova il tuo contatto FANUC',
  },
  {
    id: 'training',
    pictogram: cantoPictograms.manualGuidance,
    title: 'COMPETENZE E FORMAZIONE',
    copy: 'FANUC Academy offre corsi dedicati ai robot collaborativi CRX, sia online che in presenza, per operatori e tecnici.',
    link: 'https://crx.fanuc.eu/',
    linkLabel: 'Vai alla formazione CRX',
  },
]
</script>

<style scoped>
/* Look & Feel: sezione scura con accenti gialli (spread scuri brochure/handbook).
   Nero pieno, non grigio: il rosso dell'accento H2 su nero ≈ 3.2:1 (ok testo grande). */
.why-fanuc {
  background: var(--fanuc-black);
  scroll-margin-top: var(--header-height);
}

.why-fanuc__header {
  margin-bottom: var(--section-lead-gap);
  max-width: 700px;
}

.why-fanuc__eyebrow {
  color: var(--fanuc-yellow);
  margin-bottom: var(--section-eyebrow-gap);
}

.why-fanuc__h2 {
  color: var(--fanuc-white);
}

.why-fanuc__pillars {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--gap-cards);
  margin-bottom: var(--space-xl);
}

.why-fanuc__pillar {
  padding: var(--space-lg) var(--space-md);
  border-top: 4px solid var(--fanuc-yellow);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.why-fanuc__pillar-title {
  font-size: clamp(20px, 1.8vw, 26px);
  color: var(--fanuc-white);
}

.why-fanuc__pillar-copy {
  color: var(--fanuc-black-20);
  font-size: 15px;
  line-height: 1.55;
  flex: 1;
}

.why-fanuc__pillar-link {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-yellow);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  transition: color var(--transition-fast);
}
.why-fanuc__pillar-link:hover {
  color: var(--fanuc-white);
}

/* Caso di successo — box giallo Smart Square nella sezione nera */
.why-fanuc__case {
  display: grid;
  grid-template-columns: 5fr 7fr;
  background: var(--fanuc-yellow);
  --cut: var(--cut-lg);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
}

.why-fanuc__case-media {
  min-height: 100%;
}
.why-fanuc__case-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.why-fanuc__case-body {
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.why-fanuc__case-eyebrow {
  color: var(--fanuc-black);
  margin-bottom: var(--space-md);
}

.why-fanuc__case-quote p {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: clamp(20px, 1.9vw, 28px);
  line-height: 1.3;
  color: var(--fanuc-black);
  margin-bottom: var(--space-md);
}

.why-fanuc__case-author {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--fanuc-black);
  margin-bottom: var(--space-md);
}

.why-fanuc__case-facts {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-lg);
}
.why-fanuc__case-facts li {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  background: var(--fanuc-black);
  color: var(--fanuc-white);
  padding: var(--space-1) var(--space-2);
}

.why-fanuc__case-link {
  margin-top: auto;
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-black);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
.why-fanuc__case-link:hover {
  text-decoration-thickness: 4px;
}
.why-fanuc__case-link:focus-visible {
  outline: 3px solid var(--fanuc-black);
  outline-offset: 3px;
}

@media (max-width: 767px) {
  .why-fanuc__case {
    grid-template-columns: 1fr;
  }
  .why-fanuc__case-media {
    aspect-ratio: 4 / 3;
  }
  .why-fanuc__case-body {
    padding: var(--space-md);
  }
}
@media (max-width: 1023px) {
  .why-fanuc__pillars {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-sm);
  }
}

@media (max-width: 767px) {
  .why-fanuc__pillars {
    grid-template-columns: 1fr;
  }
}
</style>

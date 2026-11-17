<template>
  <article class="benefit-card reveal-cut" :aria-labelledby="`benefit-title-${benefit.id}`">
    <div class="benefit-card__media">
      <!-- Anteprima: foto ufficiale CANTO. Il video (benefit.videoPlaceholder) e il relativo
           controllo play/pausa vanno aggiunti solo quando il file sarà disponibile. -->
      <img
        class="benefit-card__poster"
        :src="benefit.poster"
        :alt="benefit.posterAlt"
        width="1260"
        height="950"
        loading="lazy"
        decoding="async"
      />
      <div class="benefit-card__number" aria-hidden="true">{{ benefit.number }}</div>
      <!-- Segnale "contenuto video": solo visivo finché il file non c'è.
           Con il video diventa il <button> play/pausa (aria-label, focus). -->
      <span class="benefit-card__video-cue" aria-hidden="true">
        <svg viewBox="0 0 20 20" width="22" height="22"><path fill="currentColor" d="M6 3l12 7-12 7z"/></svg>
      </span>
    </div>

    <div class="benefit-card__content">
      <h3 :id="`benefit-title-${benefit.id}`" class="h3 benefit-card__title">{{ benefit.label }}</h3>
      <p class="body benefit-card__copy">{{ benefit.copy }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Benefit } from '../data/crxBenefits'

defineProps<{ benefit: Benefit }>()
</script>
<style scoped>
.benefit-card {
  background: var(--fanuc-white);
  border: 1px solid var(--fanuc-black-20);
  display: flex;
  flex-direction: column;
  --cut: var(--cut-sm);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  transition: border-color var(--transition-base), --cut var(--transition-cut);
}

.benefit-card:hover {
  border-color: var(--fanuc-yellow);
}

.benefit-card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: var(--fanuc-white);
  overflow: hidden;
}

.benefit-card__poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Segnale video: play giallo Smart Square al centro della foto */
.benefit-card__video-cue {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 4px;
  background: var(--fanuc-yellow);
  color: var(--fanuc-black);
  --cut: var(--cut-sm);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  transition: --cut var(--transition-cut);
  pointer-events: none;
}
.benefit-card:hover .benefit-card__video-cue {
  --cut: var(--cut-md);
}

/* numero su badge nero Smart Square: contrasto garantito su qualsiasi foto */
.benefit-card__number {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--fanuc-black);
  color: var(--fanuc-yellow);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 28px;
  line-height: 1;
  padding: var(--space-2) var(--space-4) var(--space-2) var(--space-3);
  clip-path: polygon(0 0, calc(100% - var(--cut-xs)) 0, 100% var(--cut-xs), 100% 100%, 0 100%);
}
.benefit-card__content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex: 1;
}

.benefit-card__title {
  font-size: clamp(16px, 1.6vw, 22px);
}

.benefit-card__copy {
  color: var(--fanuc-black-80);
  font-size: 14px;
  line-height: 1.5;
}
</style>

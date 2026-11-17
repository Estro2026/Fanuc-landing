<template>
  <section class="hero" id="inizio" aria-labelledby="hero-h1">
    <!-- Video robot CRX a tutta larghezza -->
    <div class="hero__media">
      <!--
        ASSET: video promozionale CRX dal DAM CANTO FANUC (usato su fanuc.eu/it-it/serie-crx).
        TEMPORANEO in hotlink: prima del go-live sostituire con un loop breve (8–15 s, senza testi,
        MP4 H.264 + WebM, < 4 MB) approvato e ospitato con la landing.
      -->
      <video
        ref="videoRef"
        class="hero__video"
        :src="VIDEO_SRC"
        :poster="POSTER_SRC"
        muted
        loop
        playsinline
        preload="metadata"
        aria-hidden="true"
        @play="playing = true"
        @pause="playing = false"
      ></video>

      <button
        type="button"
        class="hero__video-toggle"
        :aria-pressed="!playing"
        :aria-label="playing ? 'Metti in pausa il video' : 'Riproduci il video'"
        @click="toggleVideo"
      >
        <svg v-if="playing" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M5 3h4v14H5zM11 3h4v14h-4z"/></svg>
        <svg v-else viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M5 3l12 7-12 7z"/></svg>
      </button>
    </div>

    <div class="page-shell hero__shell">
      <div class="section-inner hero__inner">
        <!-- Box giallo Smart Square sovrapposto al video (brochure FANUC) -->
        <div class="hero__panel surface-yellow">
          <p class="eyebrow hero__eyebrow">FANUC / ROBOT COLLABORATIVI / SERIE CRX</p>
          <h1 id="hero-h1" class="h1 hero__h1">
            PIÙ <span class="h-accent">CONTINUITÀ</span><br>ALLA TUA PRODUZIONE.
          </h1>
          <p class="lead hero__lead">
            Con i robot collaborativi FANUC CRX puoi automatizzare attività ripetitive e rendere più flessibili i processi produttivi, anche se la tua azienda è alla prima esperienza con la robotica.
          </p>

          <div class="hero__ctas">
            <a href="#contatto" class="btn-primary">Parla con un esperto</a>
            <a href="#vantaggi" class="btn-secondary">Scopri i vantaggi</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Fascia dati — nero con numeri gialli (spread Handbook) -->
    <div class="hero__trust-bar surface-dark">
      <div class="page-shell">
        <div class="section-inner hero__trust-inner">

      <!-- Trust strip — solo dati FANUC verificati -->
      <ul class="hero__trust" aria-label="Caratteristiche chiave">
        <li class="hero__trust-item">
          <span class="hero__trust-value">30 KG</span>
          <span class="hero__trust-label">Carico utile massimo<br>(CRX-30iA)</span>
        </li>
        <li class="hero__trust-item">
          <span class="hero__trust-value">8 ANNI</span>
          <span class="hero__trust-label">Funzionamento<br>senza manutenzione*</span>
        </li>
        <li class="hero__trust-item">
          <span class="hero__trust-value">6 ASSI</span>
          <span class="hero__trust-label">Tutti i<br>modelli CRX</span>
        </li>
      </ul>
      <p class="hero__trust-disclaimer">* Secondo le condizioni FANUC. Verificare specifiche del modello.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const CANTO = 'https://d16ohktstcjvly.cloudfront.net'
const VIDEO_SRC = `${CANTO}/asset/513891251684/video_91o5epfcch0q3bacbipi5md15v`
const POSTER_SRC = `${CANTO}/image/513891251684/video_91o5epfcch0q3bacbipi5md15v/-FJPG`

const videoRef = ref<HTMLVideoElement | null>(null)
const playing = ref(false)

function toggleVideo() {
  const v = videoRef.value
  if (!v) return
  if (v.paused) {
    v.play().catch(() => { playing.value = false })
  } else {
    v.pause()
  }
}

onMounted(() => {
  const v = videoRef.value
  if (!v) return
  // Con "riduci movimento" il video resta fermo sul poster; si avvia solo con il tasto
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  v.play().catch(() => { playing.value = false })
})
</script>

<style scoped>
/* Hero = esattamente la viewport sotto l'header: video + pannello in alto, fascia dati in basso */
.hero {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  height: calc(100svh - var(--header-height));
  min-height: 560px;
  background: var(--fanuc-black);   /* colore pieno sotto il video in caricamento */
  scroll-margin-top: var(--header-height);
  overflow: hidden;
}

.hero__media {
  grid-area: 1 / 1;
  position: relative;
  min-height: 0;
}
.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Pausa in alto a destra: sempre nella viewport */
.hero__video-toggle {
  position: absolute;
  top: var(--space-md);
  right: var(--page-margin);
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  background: var(--fanuc-black);
  color: var(--fanuc-yellow);
  clip-path: polygon(0 0, calc(100% - var(--cut-xs)) 0, 100% var(--cut-xs), 100% 100%, 0 100%);
  transition: background var(--transition-fast), color var(--transition-fast);
  z-index: 2;
}
.hero__video-toggle:hover {
  background: var(--fanuc-yellow);
  color: var(--fanuc-black);
}
.hero__video-toggle:focus-visible {
  outline: 3px solid var(--fanuc-yellow);
  outline-offset: 3px;
}

.hero__shell {
  grid-area: 1 / 1;
  align-self: end;
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero__inner {
  padding-block: clamp(24px, 5vh, 48px);
}

/* Box giallo Smart Square — taglio grande in alto a destra */
.hero__panel {
  background: var(--fanuc-yellow);
  max-width: 760px;
  padding: clamp(24px, 4.5vh, 48px);
  --cut: var(--cut-hero);
  clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%);
  animation: hero-panel-in 400ms cubic-bezier(0.2, 0.7, 0.2, 1) 120ms both;
}

/* Ingresso: diagonale a 45° che si apre dall'angolo tagliato (come le card) */
@keyframes hero-panel-in {
  from { --cut: 150vmax; }
}

/* su giallo: solo nero pieno (le tinte grigie sul giallo sembrano trasparenze) */
.hero__eyebrow {
  color: var(--fanuc-black);
  margin-bottom: var(--section-eyebrow-gap);
}

/* scala con larghezza E altezza: il pannello resta nella viewport anche sui laptop */
.hero__h1 {
  color: var(--fanuc-black);
  font-size: clamp(40px, min(6vw, 9vh), 104px);
  line-height: 0.9;
  margin-bottom: clamp(16px, 2.5vh, 24px);
}

.hero__lead {
  color: var(--fanuc-black);
  max-width: 52ch;
  margin-bottom: clamp(16px, 3vh, 32px);
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

/* Fascia dati */
.hero__trust-bar {
  grid-area: 2 / 1;
  background: var(--fanuc-black);
  border-top: 4px solid var(--fanuc-yellow);
  padding-block: clamp(16px, 2.5vh, 24px);
}

.hero__trust-inner {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-lg);
}

.hero__trust {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: var(--space-xl);
}

.hero__trust-item {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
}

.hero__trust-value {
  font-family: var(--font-display);
  font-weight: 500;
  font-size: clamp(28px, 2.6vw, 40px);
  color: var(--fanuc-yellow);
  line-height: 0.9;
}

.hero__trust-label {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-white);
  white-space: nowrap;  /* due righe fisse, spezzate con <br> */
}

.hero__trust-disclaimer {
  font-family: var(--font-body);
  font-size: 11px;
  color: var(--fanuc-black-20);
  line-height: 1.4;
  max-width: 28ch;
  text-align: right;
}

@media (max-width: 1023px) {
  .hero__trust-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }
  .hero__trust-disclaimer {
    text-align: left;
    max-width: none;
  }
}

/* Mobile: video in alto (16:9), pannello che lo sormonta di un taglio, poi fascia dati */
@media (max-width: 767px) {
  .hero {
    display: block;
    height: auto;
    min-height: 0;
    background: var(--fanuc-yellow);
  }
  .hero__media {
    aspect-ratio: 16 / 9;
  }
  .hero__video-toggle {
    top: var(--space-sm);
  }
  .hero__inner {
    padding-block: 0 var(--space-lg);
  }
  .hero__panel {
    max-width: none;
    margin-top: calc(-1 * var(--cut-hero));
    padding: var(--space-md) var(--space-md) 0;
    margin-inline: calc(-1 * var(--space-md));
  }
  .hero__trust {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-md);
  }
  .hero__trust-item {
    flex-direction: column;
    gap: var(--space-1);
  }
  .hero__trust-label {
    white-space: normal;
  }
}
</style>
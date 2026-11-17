<template>
  <section class="cta-band" aria-label="Contatto">
    <div class="page-shell">
      <div class="section-inner cta-band__inner">
        <a href="#contatto" class="cta-band__bar">
          <span>Parla con un esperto</span>
          <span class="cta-band__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Look & Feel: barra CTA rossa che esce dal bordo sinistro (Brand Platform — Advertising) */
.cta-band {
  background: var(--fanuc-yellow);
  padding-block: var(--space-xl);
  overflow: hidden;
}

.cta-band__inner {
  position: relative;
}

/* Prolungamento della barra fino al bordo sinistro del viewport */
.cta-band__inner::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 100vw;
  background: var(--fanuc-red);
}

.cta-band__bar {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--fanuc-red);
  color: var(--fanuc-white);
  font-family: var(--font-body);
  font-weight: 700;
  font-size: clamp(20px, 2.4vw, 32px);
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1;
  text-decoration: none;
  padding: var(--space-md) var(--space-12) var(--space-md) 0;
  clip-path: polygon(0 0, calc(100% - var(--cut-md)) 0, 100% var(--cut-md), 100% 100%, 0 100%);
  transition: background var(--transition-fast);
}

.cta-band__bar:hover {
  background: var(--fanuc-black);
}
.cta-band__inner:has(.cta-band__bar:hover)::before {
  background: var(--fanuc-black);
}

.cta-band__bar:focus-visible {
  outline: 3px solid var(--fanuc-black);
  outline-offset: 3px;
}

.cta-band__arrow {
  transition: transform var(--transition-fast);
}
.cta-band__bar:hover .cta-band__arrow {
  transform: translateX(4px);
}

@media (max-width: 767px) {
  .cta-band__bar {
    padding-right: var(--space-lg);
  }
}
</style>

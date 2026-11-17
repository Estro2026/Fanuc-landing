<template>
  <header class="site-header surface-dark" :style="{ '--progress': progress }">
    <div class="page-shell">
      <div class="site-header__inner section-inner">
        <a href="#inizio" class="site-header__logo" aria-label="FANUC — torna all'inizio">
          <div class="fanuc-logo-wrap">
            <img src="/src/assets/fanuc/fanuc-logo.svg" alt="FANUC" class="fanuc-logo-img" width="100" height="22" />
          </div>
        </a>

        <nav class="site-header__nav" aria-label="Navigazione principale">
          <ul class="site-header__nav-list">
            <li><a href="#vantaggi" class="site-header__nav-link">Vantaggi</a></li>
            <li><a href="#applicazioni" class="site-header__nav-link">Applicazioni</a></li>
            <li><a href="#iperammortamento" class="site-header__nav-link">Incentivi</a></li>
            <li><a href="#faq" class="site-header__nav-link">FAQ</a></li>
          </ul>
        </nav>

        <a href="#contatto" class="btn-primary site-header__cta">Parla con un esperto</a>

        <button
          class="site-header__menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          aria-label="Apri menu"
          @click="menuOpen = !menuOpen"
        >
          <span class="site-header__menu-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div
      v-if="menuOpen"
      id="mobile-nav"
      class="site-header__mobile-nav"
    >
      <nav aria-label="Navigazione mobile">
        <ul class="site-header__mobile-list">
          <li><a href="#vantaggi" @click="menuOpen = false">Vantaggi</a></li>
          <li><a href="#applicazioni" @click="menuOpen = false">Applicazioni</a></li>
          <li><a href="#iperammortamento" @click="menuOpen = false">Incentivi</a></li>
          <li><a href="#faq" @click="menuOpen = false">FAQ</a></li>
          <li><a href="#contatto" class="btn-primary" @click="menuOpen = false">Parla con un esperto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const menuOpen = ref(false)

function handleScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progress.value = max > 0 ? Math.min(window.scrollY / max, 1) : 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--fanuc-black);
  height: var(--header-height);
  display: flex;
  align-items: center;
}

/* Barra di avanzamento lettura — giallo pieno, cresce con lo scroll */
.site-header::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: var(--fanuc-yellow);
  transform: scaleX(var(--progress, 0));
  transform-origin: left center;
  pointer-events: none;
}

.site-header__inner {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  height: 100%;
}

/* Look & Feel: logo a linguetta, in alto a destra, attaccato al bordo superiore */
.site-header__logo {
  order: 3;
  align-self: flex-start;
  display: block;
}

.site-header__nav {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}
.site-header__nav-list {
  display: flex;
  list-style: none;
  gap: var(--space-lg);
}
.site-header__nav-link {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--fanuc-white);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.site-header__nav-link:hover {
  color: var(--fanuc-yellow);
}

.site-header__cta {
  flex-shrink: 0;
  font-size: 13px;
  padding: var(--space-2) var(--space-5);
}

.site-header__menu-btn {
  order: 2;
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
}
.site-header__menu-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--fanuc-white);
  position: relative;
}
.site-header__menu-icon::before,
.site-header__menu-icon::after {
  content: '';
  display: block;
  width: 24px;
  height: 2px;
  background: var(--fanuc-white);
  position: absolute;
  left: 0;
}
.site-header__menu-icon::before { top: -7px; }
.site-header__menu-icon::after { top: 7px; }

/* Mobile nav */
.site-header__mobile-nav {
  display: none;
  position: absolute;
  top: var(--header-height);
  left: 0;
  right: 0;
  background: var(--fanuc-black);
  padding: var(--space-md) var(--page-margin) var(--space-lg);
  border-top: 2px solid var(--fanuc-yellow);
}
.site-header__mobile-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}
.site-header__mobile-list a {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-white);
  text-decoration: none;
}
.site-header__mobile-list a:hover {
  color: var(--fanuc-yellow);
}

@media (max-width: 767px) {
  .site-header__nav,
  .site-header__cta {
    display: none;
  }
  .site-header__menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
  }
  .site-header__mobile-nav {
    display: block;
  }
}
</style>

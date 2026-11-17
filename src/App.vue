<template>
  <div class="app">
    <SiteHeader />
    <main>
      <HeroCRX id="inizio" />
      <!-- section-cut: --cut-prev = colore della sezione precedente -->
      <ThreeChallenges id="sfide" />
      <BenefitsGrid id="vantaggi" class="section-cut" style="--cut-prev: var(--fanuc-white)" />
      <ApplicationSection id="applicazioni" class="section-cut" style="--cut-prev: var(--fanuc-yellow)" />
      <IncentiveSection id="iperammortamento" class="section-cut" style="--cut-prev: var(--fanuc-black)" />
      <WhyFanuc id="perche-fanuc" class="section-cut" style="--cut-prev: var(--fanuc-yellow)" />
      <CtaBand class="section-cut" style="--cut-prev: var(--fanuc-black)" />
      <FaqAndForm />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroCRX from './components/HeroCRX.vue'
import ThreeChallenges from './components/ThreeChallenges.vue'
import BenefitsGrid from './components/BenefitsGrid.vue'
import ApplicationSection from './components/ApplicationSection.vue'
import IncentiveSection from './components/IncentiveSection.vue'
import WhyFanuc from './components/WhyFanuc.vue'
import CtaBand from './components/CtaBand.vue'
import FaqAndForm from './components/FaqAndForm.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
.app {
  min-height: 100vh;
}
</style>

// Rivelazione a 45° delle card con .reveal-cut quando entrano nel viewport.
// Una card viene nascosta (.reveal-pending) solo nel momento in cui è osservata:
// elementi non agganciati restano sempre visibili.
export function initRevealCut() {
  if (!('IntersectionObserver' in window)) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        const index = el.parentElement ? Array.from(el.parentElement.children).indexOf(el) : 0
        el.style.transitionDelay = `${Math.min(index, 3) * 70}ms`
        el.classList.add('is-revealed')
        el.addEventListener('transitionend', () => { el.style.transitionDelay = '' }, { once: true })
        observer.unobserve(el)
      }
    },
    { threshold: 0.15 }
  )

  const watch = (el: Element) => {
    if (el.classList.contains('reveal-pending') || el.classList.contains('is-revealed')) return
    el.classList.add('reveal-pending')
    observer.observe(el)
  }

  document.querySelectorAll('.reveal-cut').forEach(watch)

  // Card create dopo il primo render (re-render Vue, contenuti condizionali)
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (!(node instanceof Element)) return
        if (node.matches('.reveal-cut')) watch(node)
        node.querySelectorAll('.reveal-cut').forEach(watch)
      })
    }
  }).observe(document.body, { childList: true, subtree: true })
}

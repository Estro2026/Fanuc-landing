# Release Checklist — FANUC CRX Landing

> Aggiornato: 2026-11-17

## 🔴 BLOCKERS — La pubblicazione è bloccata fino alla risoluzione

- [ ] **Font Druk Medium** — licenza e file WOFF2 forniti dal committente
- [ ] **Font DIN Pro** — licenza e file WOFF2 forniti dal committente
- [ ] **Logo FANUC** — file SVG/PNG originale da CANTO brand kit
- [ ] **Tagline "Automation has a name."** — asset approvato da CANTO
- [ ] **Foto hero** — immagine ufficiale CRX (persona + robot) da CANTO
- [ ] **8 video benefit** — clip distinte 5–12s da CANTO o FANUC
- [ ] **8 poster benefit** — immagini poster per ogni video
- [ ] **4 foto applicazioni** — foto reali CRX per metalmeccanica, food, packaging, assemblaggio
- [ ] **Pittogrammi CANTO** — SVG lineari ufficiali per sfide, perché FANUC
- [ ] **Privacy Policy** — documento legale reale fornito dal committente
- [ ] **Endpoint form** — configurare `VITE_LEAD_ENDPOINT` con CRM/backend reale
- [ ] **Verifica iperammortamento** — approvazione consulente fiscale per sezione S05
- [ ] **Cookie banner GDPR** — implementare banner reale conforme, non placeholder
- [ ] **Link cookie policy** — URL reale della cookie policy del committente

## 🟡 DA VERIFICARE prima del go-live

- [ ] Audit visivo completo su 1440/1280/1024/768/390/375/320px
- [ ] Confronto side-by-side con fanuc.eu/it-it/serie-crx
- [ ] Test font Druk Medium dopo integrazione (wrapping, composizione)
- [ ] Test keyboard navigation (tab order, focus rings, accordion FAQ)
- [ ] Test screen reader (VoiceOver macOS / NVDA Windows)
- [ ] Test form con endpoint reale (required, errori, loading, success, retry)
- [ ] Verifica WCAG AA contrasto (yellow su black ✓, text su yellow da verificare)
- [ ] Test su Safari iOS (mobile)
- [ ] Test su Chrome Android (mobile)
- [ ] PageSpeed Lighthouse (Core Web Vitals, CLS, LCP)
- [ ] `npm run build` senza errori
- [ ] Nessun console error/warning in produzione
- [ ] Verifica claim 8 anni manutenzione — condizioni ufficiali FANUC
- [ ] Verifica tracciamento analytics solo dopo consenso GDPR
- [ ] Sitemap e robots.txt se necessari

## ✅ Implementato

- [x] Design tokens colori (#FFD702, #C32C30, #000000, #FFFFFF, #AACAE6, #D2CFB4, #6EAE43)
- [x] Smart Grid CSS (var(--page-margin), var(--grid-unit))
- [x] Smart Square clip-path polygon (corner cut 45°)
- [x] Struttura 7 sezioni nell'ordine richiesto
- [x] S01 Hero con eyebrow, H1, lead, 2 CTA, trust strip
- [x] S02 Esattamente 3 sfide PMI (nessuna quarta scheda)
- [x] S03 8 benefit cards con slot video/poster (placeholder dichiarati)
- [x] S04 4 applicazioni (metalmeccanica, food, packaging, assemblaggio)
- [x] S05 Iperammortamento senza aliquote e con disclaimer obbligatorio
- [x] S06 3 pilastri FANUC con link a siti ufficiali verificati
- [x] S07 FAQ accordion accessibile (6 domande)
- [x] Form lead con validazione client-side, gestione stati, adapter demo/produzione
- [x] Form privacy checkbox non pre-selezionata
- [x] Form precompilazione topic da application cards
- [x] Header sticky con logo placeholder + nav + CTA
- [x] Footer con link a siti FANUC ufficiali
- [x] Responsive breakpoints (1280/1024/768/767px)
- [x] `prefers-reduced-motion` rispettato
- [x] Semantic HTML (section, article, nav, h1>h2>h3, ul, button)
- [x] ARIA: aria-expanded accordion, aria-live form states, aria-invalid inputs
- [x] scroll-margin-top per anchor navigation con header sticky
- [x] Nessuna statistica inventata, testimonianza fittizia, logo cliente non autorizzato
- [x] Nessun gradiente, glassmorphism, glow, border-radius globale
- [x] Asset-manifest.md, claims-ledger.md, visual-audit.md, release-checklist.md

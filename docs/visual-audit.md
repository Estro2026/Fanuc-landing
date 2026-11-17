# Visual Audit — FANUC CRX Landing

> Aggiornato: 2026-11-17
> Confronto implementazione vs. sito FANUC di riferimento e Brand Platform PDF.
> NOTA: screenshot del sito di riferimento non acquisiti (cookie banner ha bloccato screenshot automatici).
> Misurazioni DevTools non ancora eseguite. Questo documento richiede una sessione di verifica visiva manuale.

## Metodologia

1. Aprire il sito fanuc.eu/it-it/serie-crx in Chrome, disabilitare cookie banner
2. Aprire landing su localhost:5173 accanto
3. Misurare con DevTools (getBoundingClientRect, computed styles)
4. Compilare la tabella sotto

## Tabella audit

| Componente | Viewport | Reference px | Landing px | Delta px | Esito | Note |
|---|---|---|---|---|---|---|
| Header height | 1440px | DA MISURARE | 64px | — | PENDING | |
| Logo dimensione | 1440px | DA MISURARE | 32px height | — | PENDING | Placeholder, non asset reale |
| Hero H1 font-size | 1440px | DA MISURARE | ~88px (clamp) | — | PENDING | Fallback Impact — non Druk |
| Hero H1 font-size | 390px | DA MISURARE | ~54px (clamp) | — | PENDING | |
| Hero padding-inline | 1440px | DA MISURARE | var(--page-margin) | — | PENDING | |
| Hero min-height | 1440px | DA MISURARE | 100vh - 64px | — | PENDING | |
| Smart Square cut hero | 1440px | DA MISURARE | 40px | — | PENDING | Proposta, non misura ufficiale |
| Section H2 font-size | 1440px | DA MISURARE | ~56px (clamp) | — | PENDING | |
| Benefit card grid | 1440px | 4 colonne (inferito) | 4 colonne | 0 | OK (da verificare) | |
| Benefit card grid | 768px | 2 colonne (inferito) | 2 colonne | 0 | OK (da verificare) | |
| Benefit card grid | 390px | 1 colonna (inferito) | 1 colonna | 0 | OK (da verificare) | |
| Body font-size | 1440px | DA MISURARE | ~17px (clamp) | — | PENDING | Fallback Arial |
| CTA padding | 1440px | DA MISURARE | 16px 32px | — | PENDING | |
| Giallo #FFD702 | Tutti | #FFD702 | #FFD702 | 0 | OK | Token verificato |
| Rosso #C32C30 | Tutti | #C32C30 | #C32C30 | 0 | OK | Token verificato |
| Nero #000000 | Tutti | #000000 | #000000 | 0 | OK | Token verificato |

## Font audit

| Font | Richiesto | Implementato | Stato |
|---|---|---|---|
| Druk Medium | Headline display | Impact (fallback) | **MISSING — BLOCKER** |
| DIN Pro | Body, CTA, label | Arial (fallback) | **MISSING — BLOCKER** |
| Minion Pro Semibold | Simboli nomi modello | Non usato | OK (non necessario nel copy attuale) |

## Blockers visivi confermati

1. **Font Druk Medium**: tutti i titoli usano Impact come fallback. Il look & feel è significativamente diverso da FANUC.
2. **Font DIN Pro**: tutti i testi body/CTA usano Arial. 
3. **Logo FANUC**: placeholder CSS rosso invece dell'asset SVG/PNG originale.
4. **Tagline**: placeholder testo invece dell'asset approvato.
5. **Foto/video**: tutti i contenuti media sono placeholder.

## Priorità correzioni post-asset

1. Fornire font Druk Medium + DIN Pro → rimuovere commenti @font-face in typography.css
2. Fornire logo SVG/PNG ufficiale → sostituire placeholder in SiteHeader.vue e SiteFooter.vue
3. Fornire foto hero + 8 video/poster → integrare in HeroCRX.vue e BenefitVideoCard.vue
4. Verificare misure dopo i font (il layout cambierà con Druk)
5. Eseguire comparazione side-by-side su 1440/768/390px

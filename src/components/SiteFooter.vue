<template>
  <footer class="site-footer surface-dark">
    <div class="page-shell">
      <div class="section-inner">
        <!-- Riga 1: logo · social -->
        <div class="site-footer__top">
          <div class="site-footer__brand">
            <div class="fanuc-logo-wrap">
              <img src="/src/assets/fanuc/fanuc-logo.svg" alt="FANUC" class="fanuc-logo-img" width="100" height="22" />
            </div>
            <!--
              TAGLINE — in attesa di DIN Pro Bold dal cliente.
              Regole: Brand Platform p.13 — DIN Pro Bold, sentence case.
              "Automation" = #C32C30 (rosso), "has a name." = bianco su nero.
            -->
            <!-- <p class="site-footer__tagline" aria-label="Automation has a name.">
              <span class="tagline__accent">Automation</span> has a name.
            </p> -->
          </div>

          <ul class="site-footer__social" aria-label="FANUC sui social">
            <li>
              <a href="https://www.facebook.com/FanucEurope/" target="_blank" rel="noopener noreferrer" aria-label="FANUC Europe su Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/@FANUCEurope" target="_blank" rel="noopener noreferrer" aria-label="FANUC Europe su YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/fanuc-europe/" target="_blank" rel="noopener noreferrer" aria-label="FANUC Europe su LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.9 8.8H3.6V20h3.3zM5.2 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.6c0-3-1.6-4.9-4.2-4.9-1.5 0-2.4.8-2.8 1.5V8.8h-3.2V20h3.3v-5.6c0-1.5.3-2.9 2.1-2.9 1.8 0 1.8 1.7 1.8 3V20h3.3z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <!-- Riga 2: link esterni FANUC -->
        <ul class="site-footer__external" aria-label="Risorse FANUC">
          <li><a href="https://www.fanuc.eu/it-it/serie-crx" target="_blank" rel="noopener noreferrer">Sito ufficiale FANUC CRX</a></li>
          <li><a href="https://crx.fanuc.eu/" target="_blank" rel="noopener noreferrer">Formazione CRX</a></li>
          <li><a href="https://www.fanuc.eu/it-it/lattenzione-al-cliente-attraverso-servizi-sostenibili" target="_blank" rel="noopener noreferrer">Assistenza clienti FANUC</a></li>
        </ul>

        <!-- Riga 3: legale -->
        <div class="site-footer__bottom">
          <div class="site-footer__legal-block">
          <ul class="site-footer__legal-links" aria-label="Note legali">
            <li><a href="https://www.fanuc.eu/it-it/condizioni-di-utilizzo" target="_blank" rel="noopener noreferrer">Condizioni di utilizzo</a></li>
            <li><a href="https://www.fanuc.eu/it-it/informativa-sulla-privacy-e-sui-cookie" target="_blank" rel="noopener noreferrer">Informativa sulla privacy e sui cookie</a></li>
            <li><a href="https://www.fanuc.eu/it-it/termini-e-condizioni-di-fanuc" target="_blank" rel="noopener noreferrer">Termini e condizioni di acquisto</a></li>
            <li><a href="https://www.fanuc.eu/it-it/canali-di-segnalazione-della-conformita-fanuc" target="_blank" rel="noopener noreferrer">Canali per la segnalazione della conformità</a></li>
            <li><a href="https://www.fanuc.eu/it-it/note-legali" target="_blank" rel="noopener noreferrer">Note legali</a></li>
            <li><a href="https://www.fanuc.eu/it-it/contacting-fanuc" target="_blank" rel="noopener noreferrer">Contattaci</a></li>
          </ul>
          <p class="site-footer__legal">
            © FANUC Europe Corporation. Tutti i diritti riservati. Le informazioni su questa pagina sono a scopo informativo.
            Le caratteristiche tecniche indicate si riferiscono ai rispettivi modelli CRX secondo le specifiche FANUC. Verificare sempre le specifiche del modello scelto. Le informazioni sugli incentivi fiscali sono di carattere generale e non costituiscono consulenza fiscale.
          </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--fanuc-black);
  padding-block: var(--space-lg) var(--space-md);
}

/* Riga 1 */
.site-footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  padding-bottom: var(--space-md);
}

/* Social: cerchio bianco, simbolo nero (come fanuc.eu) → hover giallo */
.site-footer__social {
  list-style: none;
  display: flex;
  gap: var(--space-xs);
}
.site-footer__social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--fanuc-white);
  color: var(--fanuc-black);
  transition: background var(--transition-fast);
}
.site-footer__social a:hover {
  background: var(--fanuc-yellow);
}
.site-footer__social a:focus-visible,
.site-footer a:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 3px;
}

/* Riga 2 */
.site-footer__external {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-lg);
  padding-block: var(--space-sm);
  border-top: 1px solid var(--fanuc-black-80);
}
.site-footer__external a {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-yellow);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.site-footer__external a:hover {
  color: var(--fanuc-white);
}

/* Riga 3 */
.site-footer__bottom {
  border-top: 1px solid var(--fanuc-black-80);
  padding-top: var(--space-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}
/* Il testo legale è largo esattamente quanto la riga dei link (finisce su "Contattaci") */
.site-footer__legal-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  width: fit-content;
  max-width: 100%;
}
.site-footer__legal-block .site-footer__legal {
  width: 0;
  min-width: 100%;
  text-align: justify;
  hyphens: auto;
}

.site-footer__legal-links {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs) var(--space-md);
}
.site-footer__legal-links a {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 12px;
  color: var(--fanuc-black-20);
  text-decoration: none;
  transition: color var(--transition-fast);
}
.site-footer__legal-links a:hover {
  color: var(--fanuc-yellow);
}

/* tinta fissa, NO opacity — #999 su nero ≈ 7.4:1 */
.site-footer__legal {
  font-family: var(--font-body);
  font-size: 11px;
  line-height: 1.5;
  color: var(--fanuc-black-40);
}

/* TAGLINE — Brand Platform p.13 (attivare con DIN Pro Bold) */
.site-footer__tagline {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 15px;
  line-height: 1.2;
  color: var(--fanuc-white);
  text-transform: none;
  margin-top: var(--space-sm);
}
.tagline__accent {
  color: var(--fanuc-red);
}

@media (max-width: 767px) {
  .site-footer__top {
    flex-wrap: wrap;
    gap: var(--space-md);
  }
  .site-footer__social {
    margin-left: auto;
  }
}
</style>

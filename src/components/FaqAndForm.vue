<template>
  <div>
    <!-- S07a — FAQ -->
    <section class="faq section section-cut" style="--cut-prev: var(--fanuc-yellow)" aria-labelledby="faq-h2" id="faq">
      <div class="page-shell">
        <div class="section-inner">
          <div class="faq__header">
            <p class="eyebrow eyebrow--indexed faq__eyebrow">DOMANDE FREQUENTI</p>
            <h2 id="faq-h2" class="h2"><span class="h-accent">LE RISPOSTE</span> PER VALUTARE IL PROSSIMO PASSO.</h2>
          </div>

          <ul class="faq__list">
            <li v-for="item in crxFaq" :key="item.id" class="faq__item">
              <button
                class="faq__question"
                :aria-expanded="openFaq === item.id"
                :aria-controls="`faq-answer-${item.id}`"
                :id="`faq-btn-${item.id}`"
                @click="toggleFaq(item.id)"
              >
                <span class="faq__question-text">{{ item.question }}</span>
                <span class="faq__question-icon" aria-hidden="true" :class="{ 'faq__question-icon--open': openFaq === item.id }">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 8l5 5 5-5"/>
                  </svg>
                </span>
              </button>
              <div
                :id="`faq-answer-${item.id}`"
                class="faq__answer"
                role="region"
                :aria-labelledby="`faq-btn-${item.id}`"
                :hidden="openFaq !== item.id"
              >
                <p class="body faq__answer-text">{{ item.answer }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- S07b — Conversion block + Form -->
    <section class="lead-form-section section surface-dark section-cut" style="--cut-prev: var(--fanuc-white)" aria-labelledby="form-h2" id="contatto">
      <div class="page-shell">
        <div class="section-inner">
          <div class="lead-form-section__layout">
            <!-- Left: copy -->
            <div class="lead-form-section__copy">
              <p class="eyebrow eyebrow--indexed lead-form-section__eyebrow">PARLIAMO DEL TUO PROCESSO</p>
              <h2 id="form-h2" class="h2 lead-form-section__h2"><span class="h-accent">SCOPRI COME CRX</span> PUÒ ENTRARE NELLA TUA PRODUZIONE.</h2>
              <p class="lead lead-form-section__lead">
                Raccontaci la lavorazione che vuoi automatizzare. Ti ricontatteremo per una prima valutazione delle possibilità.
              </p>
            </div>

            <!-- Right: form -->
            <div class="lead-form-section__form-wrap">
              <!-- Demo environment notice -->
              <div class="form-demo-notice" role="alert">
                <strong>AMBIENTE DEMO</strong> — Il form non invia dati in produzione. Configurare <code>VITE_LEAD_ENDPOINT</code> prima del go-live.
              </div>

              <form
                class="lead-form"
                @submit.prevent="handleSubmit"
                novalidate
                aria-label="Form contatto CRX"
              >
                <div class="lead-form__row lead-form__row--two">
                  <div class="lead-form__field">
                    <label for="f-name" class="lead-form__label">Nome e cognome <abbr title="campo obbligatorio" aria-label="obbligatorio">*</abbr></label>
                    <input
                      id="f-name"
                      v-model="form.name"
                      type="text"
                      class="lead-form__input"
                      :class="{ 'lead-form__input--error': errors.name }"
                      autocomplete="name"
                      required
                      :aria-describedby="errors.name ? 'f-name-err' : undefined"
                      :aria-invalid="errors.name ? 'true' : undefined"
                    />
                    <span v-if="errors.name" id="f-name-err" class="lead-form__error" role="alert">{{ errors.name }}</span>
                  </div>

                  <div class="lead-form__field">
                    <label for="f-email" class="lead-form__label">Email aziendale <abbr title="campo obbligatorio" aria-label="obbligatorio">*</abbr></label>
                    <input
                      id="f-email"
                      v-model="form.email"
                      type="email"
                      class="lead-form__input"
                      :class="{ 'lead-form__input--error': errors.email }"
                      autocomplete="email"
                      required
                      :aria-describedby="errors.email ? 'f-email-err' : undefined"
                      :aria-invalid="errors.email ? 'true' : undefined"
                    />
                    <span v-if="errors.email" id="f-email-err" class="lead-form__error" role="alert">{{ errors.email }}</span>
                  </div>
                </div>

                <div class="lead-form__row lead-form__row--two">
                  <div class="lead-form__field">
                    <label for="f-company" class="lead-form__label">Azienda <abbr title="campo obbligatorio" aria-label="obbligatorio">*</abbr></label>
                    <input
                      id="f-company"
                      v-model="form.company"
                      type="text"
                      class="lead-form__input"
                      :class="{ 'lead-form__input--error': errors.company }"
                      autocomplete="organization"
                      required
                      :aria-describedby="errors.company ? 'f-company-err' : undefined"
                      :aria-invalid="errors.company ? 'true' : undefined"
                    />
                    <span v-if="errors.company" id="f-company-err" class="lead-form__error" role="alert">{{ errors.company }}</span>
                  </div>

                  <div class="lead-form__field">
                    <label for="f-phone" class="lead-form__label">Telefono <span class="lead-form__optional">(opzionale)</span></label>
                    <input
                      id="f-phone"
                      v-model="form.phone"
                      type="tel"
                      class="lead-form__input"
                      autocomplete="tel"
                    />
                  </div>
                </div>

                <div class="lead-form__field">
                  <label for="f-topic" class="lead-form__label">Di cosa vuoi parlare?</label>
                  <select id="f-topic" v-model="form.topic" class="lead-form__select">
                    <option value="Automazione CRX">Automazione CRX</option>
                    <option value="Applicazioni">Applicazioni</option>
                    <option value="Iperammortamento">Iperammortamento</option>
                    <option value="Altro">Altro</option>
                  </select>
                </div>

                <div class="lead-form__field">
                  <label for="f-message" class="lead-form__label">Messaggio <span class="lead-form__optional">(opzionale)</span></label>
                  <textarea
                    id="f-message"
                    v-model="form.message"
                    class="lead-form__textarea"
                    rows="4"
                  ></textarea>
                </div>

                <div class="lead-form__privacy-row">
                  <input
                    id="f-privacy"
                    v-model="form.privacy"
                    type="checkbox"
                    class="lead-form__checkbox"
                    :aria-describedby="errors.privacy ? 'f-privacy-err' : undefined"
                    :aria-invalid="errors.privacy ? 'true' : undefined"
                  />
                  <label for="f-privacy" class="lead-form__privacy-label">
                    Ho letto e accetto la
                    <a href="https://www.fanuc.eu/it-it/informativa-sulla-privacy-e-sui-cookie" target="_blank" rel="noopener noreferrer" class="lead-form__privacy-link">informativa sulla privacy</a>.
                    <!-- BLOCKER PRODUZIONE: privacy policy reale del committente obbligatoria -->
                  </label>
                  <span v-if="errors.privacy" id="f-privacy-err" class="lead-form__error" role="alert">{{ errors.privacy }}</span>
                </div>

                <div class="lead-form__submit-row">
                  <button
                    type="submit"
                    class="btn-primary lead-form__submit"
                    :disabled="submitting"
                    :aria-busy="submitting"
                  >
                    <span v-if="!submitting">Parla con un esperto</span>
                    <span v-else>Invio in corso…</span>
                  </button>
                </div>

                <!-- Success state -->
                <div v-if="submitted" class="lead-form__success" role="status" aria-live="polite">
                  <strong>Richiesta ricevuta.</strong> Ti contatteremo al più presto per una prima valutazione.
                </div>

                <!-- Error state -->
                <div v-if="submitError" class="lead-form__submit-error" role="alert">
                  Si è verificato un errore. Riprova o contattaci direttamente.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { crxFaq } from '../data/crxFaq'

// FAQ accordion
const openFaq = ref<string | null>(null)
function toggleFaq(id: string) {
  openFaq.value = openFaq.value === id ? null : id
}

// Form state
const form = reactive({
  name: '',
  email: '',
  company: '',
  phone: '',
  topic: 'Automazione CRX',
  message: '',
  privacy: false,
})

const errors = reactive<Record<string, string>>({})
const submitting = ref(false)
const submitted = ref(false)
const submitError = ref(false)

// Pre-fill topic from sessionStorage (set by application cards)
onMounted(() => {
  const preset = sessionStorage.getItem('formPreset')
  if (preset) {
    form.topic = preset
    sessionStorage.removeItem('formPreset')
  }
})

function validate(): boolean {
  Object.keys(errors).forEach(k => delete errors[k])
  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Il campo Nome e cognome è obbligatorio.'
    valid = false
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    errors.email = 'Il campo Email aziendale è obbligatorio.'
    valid = false
  } else if (!emailRe.test(form.email)) {
    errors.email = 'Inserire un indirizzo email valido.'
    valid = false
  }

  if (!form.company.trim()) {
    errors.company = 'Il campo Azienda è obbligatorio.'
    valid = false
  }

  if (!form.privacy) {
    errors.privacy = 'È necessario accettare l\'informativa sulla privacy per procedere.'
    valid = false
  }

  return valid
}

async function handleSubmit() {
  if (!validate()) return
  if (submitting.value) return

  submitting.value = true
  submitError.value = false

  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT

  if (!endpoint) {
    // Demo mode: simulate a delay
    await new Promise(r => setTimeout(r, 1200))
    submitting.value = false
    submitted.value = true
    return
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone || undefined,
        topic: form.topic,
        message: form.message || undefined,
      }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    submitted.value = true
  } catch {
    submitError.value = true
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
/* FAQ */
.faq {
  background: var(--fanuc-white);
  scroll-margin-top: var(--header-height);
}

.faq__header {
  margin-bottom: var(--section-lead-gap);
  max-width: 700px;
}

.faq__eyebrow {
  color: var(--fanuc-red);
  margin-bottom: var(--section-eyebrow-gap);
}

.faq__list {
  list-style: none;
  border-top: 2px solid var(--fanuc-black);
}

.faq__item {
  border-bottom: 1px solid var(--fanuc-black-20);
}

.faq__question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  width: 100%;
  padding: var(--space-md) 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}
.faq__question:focus-visible {
  outline: 2px solid var(--fanuc-yellow);
  outline-offset: 2px;
}

.faq__question-text {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: clamp(15px, 1.3vw, 18px);
  color: var(--fanuc-black);
  flex: 1;
}

.faq__question-icon {
  flex-shrink: 0;
  color: var(--fanuc-black);
  transition: transform var(--transition-base);
}
.faq__question-icon--open {
  transform: rotate(180deg);
}

.faq__answer {
  padding-bottom: var(--space-md);
}
.faq__answer[hidden] {
  display: none;
}

.faq__answer-text {
  color: var(--fanuc-black-80);
  max-width: 68ch;
}

/* Lead form section */
.lead-form-section {
  background: var(--fanuc-black);
  scroll-margin-top: var(--header-height);
}

.lead-form-section__layout {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: var(--space-xl);
  align-items: start;
}

.lead-form-section__eyebrow {
  color: var(--fanuc-yellow);
  margin-bottom: var(--section-eyebrow-gap);
}

.lead-form-section__h2 {
  color: var(--fanuc-white);
  margin-bottom: var(--section-h2-gap);
  max-width: 14ch;
}

/* lead — tinta fissa, NO opacity */
.lead-form-section__lead {
  color: var(--fanuc-black-20);
}

/* Form demo notice */
.form-demo-notice {
  background: var(--fanuc-yellow);
  color: var(--fanuc-black);
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 8px 12px;
  margin-bottom: var(--space-md);
}

/* Form */
.lead-form {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.lead-form__row--two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
}

.lead-form__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.lead-form__label {
  font-family: var(--font-body);
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--fanuc-white);
}

.lead-form__label abbr {
  text-decoration: none;
  color: var(--fanuc-yellow);
  margin-left: 2px;
}

/* optional — tinta fissa, NO opacity */
.lead-form__optional {
  font-weight: 400;
  text-transform: none;
  letter-spacing: 0;
  color: var(--fanuc-black-40);
}

.lead-form__input,
.lead-form__select,
.lead-form__textarea {
  background: var(--fanuc-black-80);
  border: 1px solid var(--fanuc-black-40);
  color: var(--fanuc-white);
  font-family: var(--font-body);
  font-size: 15px;
  padding: var(--space-2) var(--space-3);  /* 8px 12px — griglia 8px */
  outline: none;
  transition: border-color var(--transition-fast);
  border-radius: 0;
  -webkit-appearance: none;
  appearance: none;
}

.lead-form__input:focus,
.lead-form__select:focus,
.lead-form__textarea:focus {
  border-color: var(--fanuc-yellow);
}

.lead-form__input--error,
.lead-form__select--error {
  border-color: var(--fanuc-red);
}

.lead-form__select {
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23FFD702' stroke-width='2' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
}

.lead-form__select option {
  background: var(--fanuc-black-80);
}

.lead-form__textarea {
  resize: vertical;
  min-height: 100px;
}

.lead-form__error {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 700;
  /* errore: rosso ufficiale con testo bianco (5.6:1), nessun colore fuori palette */
  align-self: flex-start;
  background: var(--fanuc-red);
  color: var(--fanuc-white);
  padding: var(--space-1) var(--space-2);
}

.lead-form__privacy-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-xs);
  flex-wrap: wrap;
}

.lead-form__checkbox {
  margin-top: 2px;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  accent-color: var(--fanuc-yellow);
  cursor: pointer;
}

/* privacy-label — tinta fissa, NO opacity */
.lead-form__privacy-label {
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--fanuc-black-20);
  cursor: pointer;
  flex: 1;
}

.lead-form__privacy-link {
  color: var(--fanuc-yellow);
  text-decoration: underline;
}

.lead-form__submit-row {
  margin-top: var(--space-xs);
}

.lead-form__submit {
  font-size: 15px;
  padding: var(--space-sm) var(--space-8);
}
/* disabilitato — tinta fissa, NO opacity */
.lead-form__submit:disabled,
.lead-form__submit:disabled:hover {
  background: var(--fanuc-black-40);
  color: var(--fanuc-black);
  cursor: not-allowed;
}

.lead-form__success {
  background: var(--fanuc-yellow);
  color: var(--fanuc-black);
  padding: var(--space-md);
  font-family: var(--font-body);
  font-size: 15px;
}

.lead-form__submit-error {
  background: var(--fanuc-red);
  color: var(--fanuc-white);
  padding: var(--space-sm) var(--space-md);
  font-family: var(--font-body);
  font-size: 14px;
}

@media (max-width: 1023px) {
  .lead-form-section__layout {
    grid-template-columns: 1fr;
    gap: var(--space-lg);
  }

  .lead-form-section__h2 {
    max-width: none;
  }
}

@media (max-width: 767px) {
  .lead-form__row--two {
    grid-template-columns: 1fr;
  }
}
</style>

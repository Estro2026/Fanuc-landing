export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const crxFaq: FaqItem[] = [
  {
    id: 'programming',
    question: 'Serve già esperienza di programmazione?',
    answer: 'La serie CRX offre strumenti di guida manuale e programmazione tramite interfaccia grafica. La formazione e le competenze richieste dipendono dall\'applicazione.',
  },
  {
    id: 'model-choice',
    question: 'Quale modello CRX è adatto alla mia azienda?',
    answer: 'Dipende dal carico utile, dalla portata, dal ciclo, dagli utensili e dal layout. Un esperto può aiutarti nella valutazione.',
  },
  {
    id: 'safety',
    question: 'Un cobot può lavorare senza ripari?',
    answer: 'Non automaticamente. L\'integrazione richiede una valutazione dei rischi e il rispetto delle norme di sicurezza applicabili; potrebbero essere necessarie misure protettive.',
  },
  {
    id: 'install-time',
    question: 'Quanto tempo serve per installarlo?',
    answer: 'Varia secondo processo, attrezzature, interfacce e verifiche di sicurezza. Non esiste un tempo uguale per tutti.',
  },
  {
    id: 'peripherals',
    question: 'Quali dispositivi si possono collegare?',
    answer: 'FANUC mette a disposizione accessori, EOAT e plug-in approvati; la compatibilità va verificata sul caso concreto.',
  },
  {
    id: 'incentives',
    question: 'Posso accedere all\'iperammortamento?',
    answer: 'Dipende dall\'azienda, dall\'investimento, dalle caratteristiche del bene e dai requisiti tecnici e documentali richiesti dalla normativa vigente.',
  },
]

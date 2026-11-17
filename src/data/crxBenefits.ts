import { cantoPhotos } from './cantoAssets'

export interface Benefit {
  id: string
  number: string
  label: string
  copy: string
  videoPlaceholder: string  // video ancora da ricevere: descrive lo shot richiesto
  poster: string
  posterAlt: string
  sourceNote: string
}

export const crxBenefits: Benefit[] = [
  {
    id: 'payload',
    number: '01',
    label: 'FINO A 30 KG',
    copy: 'Movimenta carichi fino a 30 kg con il modello CRX-30iA, e scegli nella gamma il carico utile adatto al tuo processo.',
    videoPlaceholder: 'VIDEO DA INSERIRE — CRX-30iA che movimenta un carico realistico',
    poster: cantoPhotos.crx30,
    posterAlt: 'Robot collaborativo FANUC CRX-30iA',
    sourceNote: 'Non tutti i modelli CRX raggiungono 30 kg. Fonte: fanuc.eu/it-it/serie-crx',
  },
  {
    id: 'maintenance',
    number: '02',
    label: '8 ANNI SENZA MANUTENZIONE',
    copy: 'Progettati per lunghi periodi di funzionamento con ridotte esigenze di intervento secondo le indicazioni FANUC.',
    videoPlaceholder: 'VIDEO DA INSERIRE — CRX in linea produttiva reale',
    poster: cantoPhotos.operatorWithCrx,
    posterAlt: 'Operatore al lavoro accanto a un robot collaborativo FANUC CRX',
    sourceNote: 'Claim FANUC: "8 anni di funzionamento senza manutenzione". Verificare condizioni e disclaimer ufficiali.',
  },
  {
    id: 'repeatability',
    number: '03',
    label: 'FINO A ±0,03 MM',
    copy: 'Posiziona i pezzi ciclo dopo ciclo con una ripetibilità fino a ±0,03 mm, a seconda del modello e delle specifiche tecniche.',
    videoPlaceholder: 'VIDEO DA INSERIRE — ciclo ripetuto, presa e posizionamento',
    poster: cantoPhotos.crx3,
    posterAlt: 'Robot collaborativo FANUC CRX-3iA',
    sourceNote: 'Ripetibilità, non precisione assoluta. Non estendere indistintamente a tutti i modelli.',
  },
  {
    id: 'food',
    number: '04',
    label: 'VERSIONI FOOD',
    copy: 'Varianti della serie CRX progettate per le esigenze di produzione food & beverage.',
    videoPlaceholder: 'VIDEO DA INSERIRE — modello Food in ambiente alimentare certificato',
    poster: cantoPhotos.crx10FoodGrade,
    posterAlt: 'Robot collaborativo FANUC CRX-10iA FoodGrade',
    sourceNote: 'Non tutti i CRX sono food-grade. Solo le versioni "Food" certificate NSF-H1.',
  },
  {
    id: 'force-sensors',
    number: '05',
    label: 'SENSORI DI FORZA INTEGRATI',
    copy: 'Sensori interni aiutano il cobot a percepire forze durante l\'interazione e la guida manuale.',
    videoPlaceholder: 'VIDEO DA INSERIRE — dimostrazione hand guiding/sensing reale',
    poster: cantoPhotos.crx5,
    posterAlt: 'Robot collaborativo FANUC CRX-5iA',
    sourceNote: 'Non promettere sicurezza assoluta senza analisi dei rischi. Fonte: fanuc.eu',
  },
  {
    id: 'setup',
    number: '06',
    label: 'SETUP SEMPLIFICATO',
    copy: 'Design compatto e controllore alimentato a 200–240 V per agevolare l\'integrazione.',
    videoPlaceholder: 'VIDEO DA INSERIRE — installazione autorizzata con controllore reale',
    poster: cantoPhotos.crx10,
    posterAlt: 'Robot collaborativo FANUC CRX-10iA',
    sourceNote: '200–240V non garantisce compatibilità universale senza verifiche di impianto specifiche.',
  },
  {
    id: 'programming',
    number: '07',
    label: 'GUIDA MANUALE E DRAG & DROP',
    copy: 'L\'operatore può guidare il cobot nelle posizioni e costruire sequenze con l\'interfaccia prevista.',
    videoPlaceholder: 'VIDEO DA INSERIRE — teach pendant in funzione, schermo reale',
    poster: cantoPhotos.tabletTeachPendant,
    posterAlt: 'Operatrice programma un FANUC CRX tramite tablet teach pendant',
    sourceNote: 'Mostrare solo UI autentica FANUC, non schermi inventati.',
  },
  {
    id: 'eoat',
    number: '08',
    label: 'EOAT FACILI DA INTEGRARE',
    copy: 'Strumenti di presa e periferiche approvati FANUC ampliano le possibilità di applicazione.',
    videoPlaceholder: 'VIDEO DA INSERIRE — accessorio EOAT autentico e connessione realistica',
    poster: cantoPhotos.crxSchmalzGripper,
    posterAlt: 'FANUC CRX con sistema di presa Schmalz',
    sourceNote: 'Non dichiarare compatibilità con qualsiasi periferica senza verifica.',
  },
]

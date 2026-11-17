import { cantoPhotos } from './cantoAssets'

export interface Application {
  id: string
  sector: string
  description: string
  image: string
  imageAlt: string
  formPreset: string
}

export const crxApplications: Application[] = [
  {
    id: 'metalworking',
    sector: 'Metalmeccanica',
    description: 'Asservimento di macchine CNC, carico e scarico dei pezzi.',
    image: cantoPhotos.cobotHandling,
    imageAlt: 'Cobot FANUC accanto a una macchina utensile in un processo di movimentazione automatizzata',
    formPreset: 'Automazione CRX',
  },
  {
    id: 'food',
    sector: 'Food & Beverage',
    description: 'Manipolazione e movimentazione con le specifiche versioni CRX Food.',
    image: cantoPhotos.crx5FoodGrade,
    imageAlt: 'Robot collaborativo FANUC CRX-5iA FoodGrade',
    formPreset: 'Applicazioni',
  },
  {
    id: 'packaging',
    sector: 'Packaging e logistica',
    description: 'Prelievo, posizionamento e movimentazione; verificare i carichi effettivi.',
    image: cantoPhotos.crx20L,
    imageAlt: 'Robot collaborativo FANUC CRX-20iA/L',
    formPreset: 'Automazione CRX',
  },
  {
    id: 'assembly',
    sector: 'Produzione e assemblaggio',
    description: 'Operazioni ripetitive di assemblaggio e handling di componenti.',
    image: cantoPhotos.crxIrVision,
    imageAlt: 'Robot collaborativo FANUC CRX con sistema di visione iRVision',
    formPreset: 'Automazione CRX',
  },
]

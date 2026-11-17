// Asset ufficiali FANUC dal DAM CANTO, come pubblicati su fanuc.eu/it-it/serie-crx.
// TEMPORANEO in hotlink: prima del go-live scaricare le versioni approvate da CANTO
// e servirle con la landing (aggiornare solo questo file).
const CDN = 'https://d16ohktstcjvly.cloudfront.net'
const ACCOUNT = '513891251684'

const photo = (id: string) => `${CDN}/image/${ACCOUNT}/${id}/-T4%3A3-FWEBP`
const svg = (id: string) => `${CDN}/asset/${ACCOUNT}/${id}`

export const cantoPhotos = {
  crx20L: photo('image_jbqpdp985d4tr0n0t3o37dao2o'),
  crx5FoodGrade: photo('image_jdpo8ojujd4rbb6naq7tt3480f'),
  cobotHandling: photo('image_h1l0tjfiql12j195gij354gt2v'),
  tabletTeachPendant: photo('image_st5jjhtfj92ql8i4vhgdld7j5d'),
  crxIrVision: photo('image_ea1243hlq11or6a83t2d60jt26'),
  crx30: photo('image_9jlnv0qs3t2hj2e18deh74re1n'),
  operatorWithCrx: photo('image_0as3h8bfat21h04qfpsdv9rs4t'),
  crx3: photo('image_gvdmstocg55mr2qrpnpiagnq50'),
  crx10FoodGrade: photo('image_rtbfaf4dvp4ipb1b4najjhbn1t'),
  crx5: photo('image_1a2d2k8ltd62f37hnr1uraah0a'),
  crx10: photo('image_lscsa25ntt1ff7u5gshdea8001'),
  crxSchmalzGripper: photo('image_fapgn0orch4kv539u14c3dul1u'),
  bonviciniCaseStudy: photo('image_2c4ktshdkd6ih3r3vhv1lsrl0t'),
}

export const cantoPictograms = {
  crx: svg('image_6kb6i5nsnl0tjfg73tt0aqqo69'),
  fast: svg('image_8kdkf7298d2hl16lv8rl7qbd5r'),
  lightweight: svg('image_u8p60csevh10lcb7ct4s5nk54u'),
  provenTechnology: svg('image_0nefbqm4415m19n15sbkeqp219'),
  maintenanceHealth: svg('image_kbldf2vj0d2c7f3gmktrmtm93i'),
  manualGuidance: svg('image_tclkiqod3h0br55fbdnhvimn3f'),
}

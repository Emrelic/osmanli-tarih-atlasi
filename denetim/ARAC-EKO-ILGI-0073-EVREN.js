// EKO-ILGI-0073 adim 1 — EVRENI OLC: kac dosya, kac kart, kac bag.
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const kok = process.argv[2] || '.';
const R = Y.yukle(kok);
const w = R.win;

const ekHavuzAnahtar = Object.keys(w).filter(k => /^EKOKUMA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(w[k]));
const merakAnahtar = Object.keys(w).filter(k => /^MERAK_[A-Z0-9]+$/.test(k) && Array.isArray(w[k]));
const olayAnahtar = Object.keys(w).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(w[k]));
const kronAnahtar = Object.keys(w).filter(k => /^KRONOLOJI_/.test(k) && Array.isArray(w[k]));

const ekKart = ekHavuzAnahtar.reduce((a, k) => a.concat(w[k]), []);
const merakKart = (Array.isArray(w.MERAK) ? w.MERAK : []).concat(merakAnahtar.reduce((a, k) => a.concat(w[k]), []));
const antlasma = Array.isArray(w.ANTLASMALAR) ? w.ANTLASMALAR : [];

const olayCekirdek = olayAnahtar.reduce((a, k) => a.concat(w[k]), []);
const olayKuyruk = kronAnahtar.reduce((a, k) => a.concat(w[k]), []);

function baglar(kart) {
  const oner = (w.EKOBAG_ONERI || {})[kart.id];
  const liste = oner || kart.olay || kart.baglanti || [];
  const out = liste.slice();
  if ((kart.tur === 'magazin' || !kart.tur) && kart.t) out.push(kart.t + '  (t alani)');
  return out;
}

let bagSayi = 0, tSadece = 0;
const turDagilim = {};
ekKart.concat(merakKart).forEach(k => {
  const oner = (w.EKOBAG_ONERI || {})[k.id];
  const liste = oner || k.olay || k.baglanti || [];
  bagSayi += liste.length;
  if (!liste.length && (k.tur === 'magazin' || !k.tur) && k.t) tSadece++;
  const t = k.tur || '(tur yok)';
  turDagilim[t] = (turDagilim[t] || 0) + 1;
});

const turTanim = Y.turler(kok);

const rapor = {
  dosya: {
    index_html_data_js: R.indexDosya.length,
    ekokuma_dizisi: R.ekAdlar.length,
    diskte_bulunan_ekokuma: R.ekDosya.filter(f => R.yuklendi.includes(f)).length,
    diskte_olmayan_ekokuma: R.ekDosya.filter(f => R.bulunmayan.includes(f)),
    yuklenemeyenler: R.hatali
  },
  havuz: {
    EKOKUMA_ad_alani: ekHavuzAnahtar.length,
    EKOKUMA_kart: ekKart.length,
    MERAK_ad_alani: merakAnahtar.length + (Array.isArray(w.MERAK) ? 1 : 0),
    MERAK_kart: merakKart.length,
    ANTLASMALAR_kart: antlasma.length,
    TOPLAM_kart: ekKart.length + merakKart.length + antlasma.length
  },
  bag: {
    liste_bagi: bagSayi,
    yalniz_t_alani_ile_baglanan_kart: tSadece,
    EKOBAG_ONERI_kayit: Object.keys(w.EKOBAG_ONERI || {}).length,
    EKOBASLIK_ONERI_kayit: Object.keys(w.EKOBASLIK_ONERI || {}).length
  },
  kronoloji: {
    OLAYLAR_ad_alani: olayAnahtar.length, OLAYLAR_madde: olayCekirdek.length,
    KRONOLOJI_ad_alani: kronAnahtar.length, KRONOLOJI_madde: olayKuyruk.length,
    TOPLAM_madde: olayCekirdek.length + olayKuyruk.length
  },
  tur: {
    kodda_tanimli: Object.keys(turTanim).length,
    kodda_tanimli_liste: turTanim,
    kartlarda_gecen: turDagilim,
    kodda_TANIMSIZ_tur: Object.keys(turDagilim).filter(t => t !== '(tur yok)' && !turTanim[t])
  }
};
console.log(JSON.stringify(rapor, null, 1));

// SUZGEC-DIZIN-TAMLIK-II — 318 aday icin "buyuk-guc-yutmasi" suzgeci
// Yalniz OKUR, hicbir sey yazmaz.
global.window = {};
eval(require('fs').readFileSync('data/devletler.js', 'utf8'));
const D = window.DEVLETLER;
const byId = {};
for (const d of D) byId[d.id] = d;

function gunNo(s) {
  const [y, m, g] = s.split('-').map(Number);
  return Date.UTC(y, m - 1, g) / 86400000;
}

const olcum = JSON.parse(require('fs').readFileSync('denetim/OLCUM-DIZIN-TAMLIK-0911.json', 'utf8'));
const adaylar = olcum.metod_b_tekil_ardil_adaylari;

// bolge -> kunyeler
const byBolge = {};
for (const d of D) (byBolge[d.bolge] = byBolge[d.bolge] || []).push(d);

// "buyuk guc" ise: bu kunyenin YASAM SURESI >= 150 yil VE ayni zamanda
// EN AZ 2 farkli bolgede (kendi bolgesi DISINDA da) METOD B adaylarinin
// "kapsayici" konumuna dusmesi (yani baska bolgelerdeki bitisleri de
// zaman olarak kapsiyor). Ölçülebilir, elle tahmin degil.
function yasamYili(d) {
  return (gunNo(d.t) - gunNo(d.f)) / 365.25;
}

const buyukGucAday = D.filter(d => yasamYili(d) >= 150);
console.log('150+ yil yasayan kunye sayisi:', buyukGucAday.length);

const sonuc = [];
let filtrelenen_ayni_bolge_paralel = 0;
let filtrelenen_kisa_omurlu_kapatan = 0;
let oncelikli = 0;

for (const a of adaylar) {
  const k = byId[a.id];
  if (!k) { sonuc.push({...a, sinif: '???kunye_bulunamadi'}); continue; }
  const tG = gunNo(k.t);
  const bolgeKunyeleri = byBolge[a.bolge] || [];
  // ayni bolgede, k'nin t'sinden hemen sonraki (+-3yil) ya da o an aktif
  // olan kunyeleri bul
  const kapsayanlar = bolgeKunyeleri.filter(d2 => {
    if (d2.id === k.id) return false;
    const f2 = gunNo(d2.f), t2 = gunNo(d2.t);
    return f2 <= tG + 365 * 3 && t2 >= tG - 365 * 3 && f2 <= tG + 365*3;
  });
  const buyukKapsayan = kapsayanlar.filter(d2 => yasamYili(d2) >= 150);
  if (buyukKapsayan.length > 0) {
    oncelikli++;
    sonuc.push({...a, sinif: 'ONCELIKLI_BUYUK_GUC', kapsayan: buyukKapsayan.map(x=>x.id)});
  } else if (kapsayanlar.length > 0) {
    filtrelenen_ayni_bolge_paralel++;
    sonuc.push({...a, sinif: 'FILTRELENDI_paralel_kucuk_devlet', kapsayan: kapsayanlar.map(x=>x.id)});
  } else {
    filtrelenen_kisa_omurlu_kapatan++;
    sonuc.push({...a, sinif: 'KAPSAYAN_YOK_bolge_de_bos_METODA_ile_ORTUSUR'});
  }
}

console.log('ONCELIKLI (buyuk guc kapsiyor):', oncelikli);
console.log('FILTRELENDI (paralel kucuk devlet kapsiyor):', filtrelenen_ayni_bolge_paralel);
console.log('kapsayan YOK (Metod A bosluguyla ortusur beklenir):', filtrelenen_kisa_omurlu_kapatan);

require('fs').writeFileSync(
  process.env.TMPDIR_OUT || 'suzgec_sonuc.json',
  JSON.stringify(sonuc, null, 1)
);

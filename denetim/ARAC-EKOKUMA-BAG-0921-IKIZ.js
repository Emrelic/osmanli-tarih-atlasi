// EKOKUMA-BAG-0921 — IKIZ MADDE olcumu.
//
// C kovasinin kalanini tek tek okuyunca cikan kok sebep, EKO-ILGI-0073'un
// isaret ettigi "yil hassasiyeti" DEGIL: ayni olay cekirdek (OLAYLAR*) ve
// kuyruk (KRONOLOJI_*) dosyalarinda BIRDEN COK madde olarak duruyor.  Kart
// dogru gune bagli; ikizlerin biri kelime ortusmesi tutturuyor (A/B), oteki
// tutturmuyor (C).  Yani C'nin buyuk kismi BAG kusuru degil, MADDE cogullugu.
//
// Bu alet bunu sayiya cevirir: ayni GUNDE duran madde cogullugu ve o gunlerin
// ek okuma ciftlerindeki agirligi.  (Ayni olay mi diye HUKUM VERMEZ: baslik
// ortusmesi bir AYIKLAMA olcutudur — 2+ ortak icerik kelimesi.)
const path = require('path');
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const kok = path.join(__dirname, '..');
const R = Y.yukle(kok);
const win = R.win || R.window || R;

const maddeler = [];
Object.keys(win).forEach(ad => {
  if (!/^(OLAYLAR|KRONOLOJI)/.test(ad)) return;
  const v = win[ad];
  if (!Array.isArray(v)) return;
  const kova = /^OLAYLAR/.test(ad) ? 'OLAYLAR' : 'KRONOLOJI';
  v.forEach(o => { if (o && o.t && o.b) maddeler.push({ t: String(o.t), b: String(o.b), ad, kova }); });
});

function norm(s) {
  return String(s).replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u').replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c')
    .replace(/[Ââ]/g, 'a').replace(/[Îî]/g, 'i').replace(/[Ûû]/g, 'u')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/['‘’]/g, '');
}
function kelimeler(s) {
  return new Set(norm(s).split(/[^a-z0-9]+/).filter(w => w.length >= 5));
}

const gun = {};
maddeler.forEach(m => { (gun[m.t] = gun[m.t] || []).push(m); });

let cokluGun = 0, cokluMadde = 0, ikizGun = 0, ikizMadde = 0, caprazIkizGun = 0;
const ornek = [];
Object.entries(gun).forEach(([t, g]) => {
  if (g.length < 2) return;
  cokluGun++; cokluMadde += g.length;
  const K = g.map(m => kelimeler(m.b));
  const esli = new Set();
  let capraz = false;
  for (let i = 0; i < g.length; i++) for (let j = i + 1; j < g.length; j++) {
    let ortak = 0; K[i].forEach(w => { if (K[j].has(w)) ortak++; });
    if (ortak >= 2) {
      esli.add(i); esli.add(j);
      if (g[i].kova !== g[j].kova) capraz = true;
    }
  }
  if (esli.size) {
    ikizGun++; ikizMadde += esli.size;
    if (capraz) caprazIkizGun++;
    if (esli.size >= 4 && ornek.length < 6) ornek.push([t, [...esli].map(i => g[i].kova + ' · ' + g[i].b)]);
  }
});

console.log('EVREN : ' + maddeler.length + ' madde (' +
  maddeler.filter(m => m.kova === 'OLAYLAR').length + ' cekirdek + ' +
  maddeler.filter(m => m.kova === 'KRONOLOJI').length + ' kuyruk) · ' +
  Object.keys(gun).length + ' ayri gun');
console.log('COKLU GUN (2+ madde ayni gunde)      : ' + cokluGun + ' gun · ' + cokluMadde + ' madde');
console.log('IKIZ GUN  (baslikta 2+ ortak kelime) : ' + ikizGun + ' gun · ' + ikizMadde + ' madde  (%' +
  (100 * ikizMadde / maddeler.length).toFixed(1) + ' butun kronolojinin)');
console.log('   bunun cekirdek<->kuyruk CAPRAZ olani: ' + caprazIkizGun + ' gun');
console.log('\nORNEK (4+ ikizli gunlerden):');
ornek.forEach(([t, l]) => { console.log('  ' + t); l.forEach(s => console.log('     ' + s)); });

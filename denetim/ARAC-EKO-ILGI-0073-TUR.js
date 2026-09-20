// H-0019 — kategori (tur) denetimi: her kartin turu icerigiyle uyusuyor mu?
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const R = Y.yukle('.');
const w = R.win;
const hepsi = [];
Object.keys(w).filter(a => /^EKOKUMA(_[A-Z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .forEach(a => w[a].forEach(k => hepsi.push({ d: a, k })));
if (Array.isArray(w.MERAK)) w.MERAK.forEach(k => hepsi.push({ d: 'MERAK', k }));
Object.keys(w).filter(a => /^MERAK_[A-Z0-9]+$/.test(a) && Array.isArray(w[a]))
  .forEach(a => w[a].forEach(k => hepsi.push({ d: a, k })));

const sec = process.argv[2];
const liste = sec ? hepsi.filter(x => (x.k.tur || '') === sec) : hepsi;
console.log('# tur=' + (sec || '(hepsi)') + ' — ' + liste.length + ' kart');
liste.forEach(x => {
  const k = x.k;
  console.log('- ' + (k.id || '?') + '  [' + x.d + ']');
  console.log('    ad/baslik: ' + (k.baslik || k.ad || '(yok)'));
  console.log('    kisa     : ' + String(k.kisa || k.soru || '').slice(0, 150));
});

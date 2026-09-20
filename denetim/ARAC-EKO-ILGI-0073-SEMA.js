// Kart ve madde alan adlarini (sema) olc — metin eksenini kurmadan once.
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const R = Y.yukle(process.argv[2] || '.');
const w = R.win;
const ek = Object.keys(w).filter(k => /^EKOKUMA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(w[k]))
  .reduce((a, k) => a.concat(w[k]), []);
const merak = (Array.isArray(w.MERAK) ? w.MERAK : []).concat(
  Object.keys(w).filter(k => /^MERAK_[A-Z0-9]+$/.test(k) && Array.isArray(w[k])).reduce((a, k) => a.concat(w[k]), []));
const ant = w.ANTLASMALAR || [];

function alanSay(liste, ad) {
  const s = {};
  liste.forEach(k => Object.keys(k || {}).forEach(a => {
    const t = Array.isArray(k[a]) ? 'dizi' : typeof k[a];
    const key = a + ':' + t;
    s[key] = (s[key] || 0) + 1;
  }));
  console.log('=== ' + ad + ' (' + liste.length + ' kayit) ===');
  Object.entries(s).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log('  ' + k + '  ' + v));
}
alanSay(ek, 'EKOKUMA');
alanSay(merak, 'MERAK');
alanSay(ant, 'ANTLASMALAR');

const olay = Object.keys(w).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(w[k])).reduce((a, k) => a.concat(w[k]), []);
const kron = Object.keys(w).filter(k => /^KRONOLOJI_/.test(k) && Array.isArray(w[k])).reduce((a, k) => a.concat(w[k]), []);
alanSay(olay, 'OLAYLAR');
alanSay(kron, 'KRONOLOJI_*');

console.log('\n--- ornek EKOKUMA kart ---');
console.log(JSON.stringify(ek.find(k => k.tur === 'teknik-bilimsel'), null, 1).slice(0, 1800));
console.log('\n--- ornek OLAY ---');
console.log(JSON.stringify(olay.find(o => /Hayriyye/i.test(o.b || '')), null, 1).slice(0, 1500));

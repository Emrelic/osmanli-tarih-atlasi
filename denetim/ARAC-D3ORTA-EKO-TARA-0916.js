// D3-AVRUPA-ORTA — ek okuma mükerrer taraması + şema örneği (paket 0057/1-2)
// Kullanım: node denetim/ARAC-D3ORTA-EKO-TARA-0916.js
const fs = require('fs');
global.window = {};
for (const f of fs.readdirSync('data').filter(f => /^ekokuma_.*\.js$/.test(f))) {
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { console.log('HATA', f, e.message); }
}
const hepsi = [];
for (const k of Object.keys(window)) if (/^EKOKUMA/.test(k)) for (const r of window[k]) hepsi.push([k, r]);
console.log('toplam kayıt', hepsi.length);
const desen = /Venedik|Mora\b|Mora'|İstendil|Tinos|Karlofça|Pasarofça|1715/;
for (const [k, r] of hepsi) {
  const s = JSON.stringify(r);
  if (desen.test(s)) console.log(k, '|', r.id, '|', r.baslik || '—', '|', r.tur, '|', JSON.stringify(r.olay || ''));
}
const ornek = (window.EKOKUMA_DUNYA || [])[0];
if (ornek) { console.log('\nALANLAR:', Object.keys(ornek).join(', ')); console.log(JSON.stringify(ornek).slice(0, 1200)); }
const bas = hepsi.find(([k, r]) => r.baslik);
if (bas) console.log('\nBAŞLIKLI ÖRNEK:', bas[0], JSON.stringify(bas[1]).slice(0, 900));

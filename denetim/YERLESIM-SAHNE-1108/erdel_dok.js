// Erdel zincirinin mevcut halini döker: node erdel_dok.js
const o = require('./ortak.js');
const ad = ['Erdel (Kaloşvar)', 'Erdel Belgradı (Gyulafehérvár)', 'Brassó (Braşov)', 'Segesvár (Sighişoara)', 'Szászsebes (Sebeş)', 'Zilah (Zalău)'];
const gor = {};
for (const f of o.girdiListesi()) {
  const w = o.yukle(f);
  for (const k of Object.keys(w)) if (Array.isArray(w[k])) for (const y of w[k]) if (y && ad.includes(y.ad)) gor[y.ad] = { f, y };
}
for (const a of ad) {
  const g = gor[a]; if (!g) { console.log('YOK', a); continue; }
  const sd = x => (x || []).map(r => `${r.f}→${r.t} ${r.d || r.statu || ''}${r.k ? '(' + String(r.k).slice(0, 20) + ')' : ''}`);
  console.log('##', a, g.f, 'kur=', g.y.kur, 'bit=', g.y.bit);
  console.log(' s:', sd(g.y.s)); console.log(' d:', sd(g.y.d)); console.log(' v:', sd(g.y.v)); console.log(' isg:', sd(g.y.isg));
}

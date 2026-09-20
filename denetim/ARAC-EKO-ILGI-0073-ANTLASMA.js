// EKO-ILGI-0073 · (e) — ANTLASMALAR yapisal kusurunun BOYU (1.MURAT M-4837/e).
// ANTLASMALAR kayitlarinin `olay:` alani YOK; ekKartBagliMi onlari yalniz `t:` ile
// gune baglar (turAlaniYok dali). Ayirt edici EKLENEMEZ. Soru: kac kayit gununu
// baska bir maddeyle PAYLASIYOR ve o paylasim KAC alakasiz cift uretiyor?
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const R = Y.yukle('.');
const w = R.win;
const ant = w.ANTLASMALAR || [];
const maddeler = [];
Object.keys(w).filter(a => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .forEach(a => w[a].forEach(o => o && o.t && maddeler.push({ o, kova: 'OLAYLAR' })));
Object.keys(w).filter(a => /^KRONOLOJI_/.test(a) && Array.isArray(w[a]))
  .forEach(a => w[a].forEach(o => o && o.t && maddeler.push({ o, kova: 'KRONOLOJI' })));
const gun = new Map();
maddeler.forEach(m => { if (!gun.has(m.o.t)) gun.set(m.o.t, []); gun.get(m.o.t).push(m); });

const ham = require('./EKO-ILGI-0073-HAM.json');
const antSatir = ham.satirlar.filter(x => x.kaynak === 'ANTLASMALAR');

let tek = 0, paylasan = 0, oksuz = 0, ciftToplam = 0;
const detay = [];
ant.forEach(k => {
  const l = gun.get(k.t) || [];
  ciftToplam += l.length;
  if (!l.length) { oksuz++; detay.push({ ad: k.ad, t: k.t, dusen: 0, hal: 'OKSUZ — o gun hic madde yok' }); return; }
  if (l.length === 1) { tek++; return; }
  paylasan++;
  detay.push({ ad: k.ad, t: k.t, dusen: l.length, hal: 'PAYLASIYOR',
               maddeler: l.map(m => m.kova + ': ' + m.o.b) });
});
console.log('ANTLASMALAR kaydi            : ' + ant.length);
console.log('  gunu TEK maddeye dusen     : ' + tek);
console.log('  gunu PAYLASAN (>=2 madde)  : ' + paylasan);
console.log('  OKSUZ (o gun madde yok)    : ' + oksuz);
console.log('  uretilen bag-madde cifti   : ' + ciftToplam);
console.log('  bunlarin kova dagilimi     : A=' + antSatir.filter(x => x.kova === 'A').length +
            '  B=' + antSatir.filter(x => x.kova === 'B').length +
            '  C=' + antSatir.filter(x => x.kova === 'C').length);
console.log('\nPAYLASAN ve OKSUZ kayitlar:');
detay.forEach(d => {
  console.log('\n● ' + d.ad + '  (' + d.t + ')  ' + d.hal + (d.dusen ? '  · ' + d.dusen + ' madde' : ''));
  (d.maddeler || []).forEach(m => console.log('    ' + m));
});

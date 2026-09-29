// KRONO-KUZEY-0929 — altı dosyanın sınavı: sayı korunumu · zorunlu on alan · künye id varlığı ·
// künye penceresi [f,t] · mükerrer t+b.   Kullanım: node denetim/ARAC-KRONO-KUZEY-0929-SINA.js
global.window = {};
const fs = require('fs');
const D = 'data/';
eval(fs.readFileSync(D + 'devletler.js', 'utf8'));
const K = {}; (window.DEVLETLER || []).forEach(d => { if (d.id) K[d.id] = d; });
const dosyalar = ['kronoloji_rusya.js', 'kronoloji_lehistan.js', 'kronoloji_isvec.js',
  'kronoloji_cok_rusya.js', 'kronoloji_cok_lehistan.js', 'kronoloji_cok_isvec.js'];
dosyalar.forEach(f => eval(fs.readFileSync(D + f, 'utf8')));
const Z = ['t', 'b', 'tur', 'onem', 'dunya', 'kapsam', 'etiket', 'yer_id', 'd', 'kaynak'];
const BAGLI = { KRONOLOJI_RUSYA: 'rusya', KRONOLOJI_LEHISTAN: 'lehistan', KRONOLOJI_ISVEC: 'isvec' };
let toplam = 0, kusur = 0;
const tb = {};
for (const g of Object.keys(window)) {
  if (!/^KRONOLOJI_/.test(g)) continue;
  const a = window[g]; toplam += a.length;
  let eksik = 0, kimliksiz = 0, pencere = 0, devsiz = 0;
  a.forEach((o, i) => {
    Z.forEach(z => { if (o[z] === undefined) { eksik++; console.log('  EKSİK', g, i, z); } });
    const ids = BAGLI[g] ? [BAGLI[g]] : (o.devlet ? [o.devlet] : (o.devletler || o.taraflar || []));
    if (!ids.length) { devsiz++; console.log('  DEVLETSİZ', g, i, o.t); }
    ids.forEach(id => {
      const k = K[id];
      if (!k) { kimliksiz++; console.log('  KÜNYE YOK', g, o.t, id); return; }
      const p = s => s.split("-")[0].padStart(4, "0") + s.slice(s.indexOf("-")); if (p(o.t) < p(k.f) || p(o.t) > p(k.t)) { pencere++; console.log('  PENCERE DIŞI', g, o.t, id, k.f + '→' + k.t, '|', o.b.slice(0, 60)); }
    });
    const key = o.t + '|' + o.b; tb[key] = (tb[key] || 0) + 1;
  });
  kusur += eksik + kimliksiz + devsiz;
  console.log(g, a.length, 'madde · eksik alan', eksik, '· künyesiz', kimliksiz, '· pencere dışı', pencere, '· devletsiz', devsiz);
}
const muk = Object.entries(tb).filter(([k, v]) => v > 1);
console.log('TOPLAM', toplam, '· t+b mükerrer', muk.length, muk.map(x => x[0]).join(' ; '));
console.log(kusur ? 'SONUÇ: KUSUR ' + kusur : 'SONUÇ: zorunlu alan + künye varlığı TEMİZ (pencere dışı ayrıca raporlandı)');

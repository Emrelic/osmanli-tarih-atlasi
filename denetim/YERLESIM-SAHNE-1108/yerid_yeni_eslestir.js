// E1/E2'deki "yeni_yerlesim_gerekli" kalemlerini, data/yerlesimler_sahne1108.js'e girmiş kayıtlarla eşleştirip yerid_E3.json üretir.
// Eşleşme: norm(gerekli ad) ya da parantez parçaları = yeni kaydın norm(ad)/parantez parçalarından biri (TEK eşleşme).
// Kullanım: node yerid_yeni_eslestir.js <arastirma_dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const D = process.argv[2];
const w = o.yukle('yerlesimler_sahne1108.js');
const yeni = w.YERLESIMLER_SAHNE1108;
const toks = s => [s, s.split(' (')[0], ...(((/\(([^)]+)\)/.exec(s) || [, ''])[1]).split(/[\/,;]/))].map(o.norm).filter(k => k.length >= 3);
const ix = new Map();
for (const y of yeni) for (const t of new Set(toks(y.ad))) (ix.get(t) || ix.set(t, new Set()).get(t)).add(y.ad);
const out = [], belirsiz = [];
for (const f of ['E1', 'E2']) for (const r of JSON.parse(fs.readFileSync(path.join(D, `yerid_${f}.json`), 'utf8'))) {
  const n = r.yeni_yerlesim_gerekli; if (!n || r.yer_id) continue;
  const aday = new Set(); for (const t of toks(n)) for (const a of (ix.get(t) || [])) aday.add(a);
  if (aday.size === 1) out.push({ dosya: r.dosya, t: r.t, baslik: r.baslik, yer_id: [...aday][0], kanit: r.kanit, neden: 'yeni yerleşim (sahne1108): ' + n });
  else if (aday.size > 1) belirsiz.push(n + ' → ' + [...aday].join(' | '));
}
fs.writeFileSync(path.join(D, 'yerid_E3.json'), JSON.stringify(out, null, 1));
console.log(JSON.stringify({ yeniKayit: yeni.length, eslesen_madde: out.length, belirsiz }));

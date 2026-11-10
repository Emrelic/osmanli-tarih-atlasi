// ÖLÇÜM 8 — `yer` dolu, `yer_id` ve `yer_kon` boş maddeler: yer metni atlas yerleşimine KANITLA bağlanabilir mi?
// Kural (katı): norm(yer) = bir yerleşimin norm(ad) / norm(parantez öncesi) / norm(parantez içi parça) / ad_esanlam çifti
// ve eşleşen yerleşim TEK (aynı normalleşmiş ada iki ayrı kayıt = belirsiz → atlanır). Kapsayıcı değil, güvenli.
// Kullanım: node olc_8_yer_id_aday.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y, M } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.';
const ix = new Map();
function ekle(s, y) { const k = o.norm(s); if (k.length < 3) return; const l = ix.get(k) || ix.set(k, new Set()).get(k); l.add(y); }
for (const y of Y) {
  ekle(y.ad, y); ekle(y.ad.split(' (')[0], y);
  const p = /\(([^)]+)\)/.exec(y.ad);
  if (p) for (const a of p[1].split(/[\/,;]/)) ekle(a, y);
}
// ad_esanlam.js (araç girdisi, 25 çift)
let esan = [];
try { const w = o.yukle('ad_esanlam.js'); for (const v of Object.values(w)) if (Array.isArray(v)) esan = v; } catch (e) { }
const esanHarita = new Map();
for (const c of esan) { const a = Array.isArray(c) ? c : [c.a, c.b]; if (a && a[0] && a[1]) { esanHarita.set(o.norm(a[0]), a[1]); esanHarita.set(o.norm(a[1]), a[0]); } }

const hedef = M.filter(m => m.yer && !m.yer_id && !(m.yer_kon && m.yer_kon.length === 2));
const sonuc = { yerDoluYerIdYerKonBos: hedef.length, esles_tek: 0, belirsiz: 0, eslesmez: 0, esanlamla: 0 };
const satir = [], bel = [];
for (const m of hedef) {
  let k = o.norm(m.yer), h = ix.get(k), via = 'ad';
  if (!h) { const e = esanHarita.get(k); if (e) { h = ix.get(o.norm(e)); via = 'esanlam'; } }
  if (!h) { sonuc.eslesmez++; continue; }
  if (h.size !== 1) { sonuc.belirsiz++; bel.push([m.t, m.yer, [...h].map(y => y.ad + '@' + y.lat.toFixed(1) + ',' + y.lon.toFixed(1)).join(' | ')].join('\t')); continue; }
  const y = [...h][0]; sonuc.esles_tek++; if (via === 'esanlam') sonuc.esanlamla++;
  satir.push([m._dosya, m.t, m.yer, y.ad, y.lat.toFixed(3), y.lon.toFixed(3), via, (m.b || '').slice(0, 60)].join('\t'));
}
fs.writeFileSync(path.join(CIK, 'm8_yer_id_adayi.tsv'), 'dosya\tt\tyer\tatlas_ad\tlat\tlon\tyol\tbaslik\n' + satir.join('\n'));
fs.writeFileSync(path.join(CIK, 'm8_belirsiz.tsv'), 't\tyer\tadaylar\n' + bel.join('\n'));
console.log(JSON.stringify(sonuc));

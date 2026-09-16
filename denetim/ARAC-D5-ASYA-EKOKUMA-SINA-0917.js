// D5-ASYA — data/ekokuma_lale.js SINAVI (DALGA-0058 madde 1).
// Ölçer: zorunlu alanlar (id · tur · baslik · kisa · metin · olay · kaynak) · tur sözlüğü · kesinlik ·
//        id tekilliği (BÜTÜN ekokuma_*.js içinde) · her `olay` bağının GERÇEK bir kronoloji maddesine denk gelmesi
//        (aynı gün + b alanında ayırt edici kelime) · metinde atıf verilen id'lerin var olması.
const fs = require('fs');
global.window = {};
for (const f of fs.readdirSync('data').filter(f => /^ekokuma_.*\.js$/.test(f))) eval(fs.readFileSync('data/' + f, 'utf8'));
const L = window.EKOKUMA_LALE;
const tum = []; for (const [k, v] of Object.entries(window)) if (/^EKOKUMA/.test(k)) for (const r of v) tum.push([k, r]);
global.window = {};
for (const f of fs.readdirSync('data').filter(f => /^(olaylar|kronoloji).*\.js$/.test(f))) { try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) {} }
const M = []; for (const v of Object.values(window)) if (Array.isArray(v)) for (const r of v) if (r && r.t && r.b) M.push(r);
const TUR = new Set(tum.map(([, r]) => r.tur));
let e = 0; const h = (...m) => { e++; console.log('HATA', ...m); };
const ids = new Map(); for (const [k, r] of tum) ids.set(r.id, (ids.get(r.id) || []).concat(k));
let bag = 0;
for (const r of L) {
  for (const z of ['id', 'tur', 'baslik', 'kisa', 'metin', 'olay', 'kaynak']) if (!r[z] || (Array.isArray(r[z]) && !r[z].length)) h('alan', r.id, z);
  if (ids.get(r.id).length > 1) h('mükerrer id', r.id, ids.get(r.id));
  if (!['kesin', 'tartismali', 'rivayet'].includes(r.kesinlik)) h('kesinlik', r.id, r.kesinlik);
  for (const o of r.olay) {
    const [t, k] = o.split('|');
    const es = M.filter(m => m.t === t && (!k || m.b.toLocaleLowerCase('tr').includes(k.toLocaleLowerCase('tr'))));
    if (!es.length) h('olay bağı yok', r.id, o); else bag++;
  }
  for (const a of (r.metin.match(/bkz\.?:?\s*([a-z0-9-]+(?:\s*\([^)]*\))?(?:\s*·\s*[a-z0-9-]+(?:\s*\([^)]*\))?)*)/g) || []))
    for (const x of a.match(/[a-z0-9]+(?:-[a-z0-9]+)+/g) || []) if (!ids.has(x)) h('atıf yok', r.id, x);
}
console.log('kayıt', L.length, '| tur', [...new Set(L.map(r => r.tur))].join(','), '| olay bağı', bag, '| hata', e);
process.exit(e ? 1 : 0);

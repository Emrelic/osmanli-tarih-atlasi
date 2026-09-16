// D5-ASYA — data/d_sinirlar_asya.js + data/kronoloji_sinir_asya.js SINAVI.
// Ölçer: şema alanları · künye id ve pencere · ters tarih · sol_taraf · aynı hat zincirinde tarih çakışması ·
//        kronoloji bağları · senkron (her f/t kırılmasının ±30 gün içinde iki tarafı da taşıyan maddesi).
// Hanedan/devlet geçişi kırılmaları (künye sınırı günleri) SINIR olayı sayılmaz — listesi aşağıda, sayılarak basılır.
// Kullanım: node denetim/ARAC-D5-ASYA-SINA-0916.js [baslangic_gunu]   (varsayılan 1878-07-13)
const fs = require('fs');
const yukle = (f, ad) => { global.window = {}; eval(fs.readFileSync(f, 'utf8')); return window[ad]; };
const A = yukle('data/d_sinirlar_asya.js', 'D_SINIRLAR_ASYA');
const K = yukle('data/kronoloji_sinir_asya.js', 'KRONOLOJI_SINIR_ASYA');
global.window = {}; eval(fs.readFileSync('data/devletler.js', 'utf8'));
const D = Object.values(window).find(v => Array.isArray(v) && v.length > 500 && v[0].id);
const KN = {}; for (const d of D) KN[d.id] = d;
const pad = s => s && s.split('-')[0].length < 4 ? s.padStart(10, '0') : s;
const BAS = process.argv[2] || '1878-07-13';
let e = 0; const hata = (...m) => { e++; console.log('HATA', ...m); };
const sinif = {};
for (const k of A) {
  sinif[k.sinif] = (sinif[k.sinif] || 0) + 1;
  for (const z of ['id', 'taraflar', 'f', 't', 'kategori', 'sinif', 'dayanak', 'degisti']) if (k[z] === undefined) hata('alan', k.id, z);
  if (k._f0 !== undefined) hata('_f0 sızdı', k.id);
  for (const t of k.taraflar) { const d = KN[t]; if (!d) { hata('künye yok', k.id, t); continue; }
    if (pad(k.f) < pad(d.f) || pad(k.t) > pad(d.t)) hata('pencere', k.id, t, k.f, k.t, d.f, d.t); }
  if (pad(k.f) >= pad(k.t)) hata('ters', k.id, k.f, k.t);
  if (k.sol_taraf && !k.taraflar.includes(k.sol_taraf)) hata('sol', k.id);
  if (k.sinif === 'YOK' ? !(k.kutu && k.hat === null) : !(k.hat && k.hat.length >= 2)) hata('geo', k.id);
}
// aynı hat zinciri: geometri imzası (hat ya da kutu) + taraflardan biri ortak → tarih çakışmamalı
const imza = k => JSON.stringify(k.hat || k.kutu);
const G = {}; for (const k of A) (G[imza(k)] = G[imza(k)] || []).push(k);
for (const L of Object.values(G)) { L.sort((a, b) => pad(a.f) < pad(b.f) ? -1 : 1);
  for (let i = 1; i < L.length; i++) if (pad(L[i].f) < pad(L[i - 1].t)) hata('çakışma', L[i - 1].id, L[i].id, L[i - 1].t, L[i].f); }
// kronoloji
const ids = new Set(A.map(k => k.id));
for (const m of K) { if (!ids.has(m.sinir_kaydi)) hata('bağ', m.t, m.sinir_kaydi);
  if (!m.taraflar || m.taraflar.length !== 2) hata('taraflar', m.t, m.b);
  for (const x of (m.taraflar || [])) if (!KN[x]) hata('madde künye', m.t, x); }
const GECIS = new Set(['1917-03-15', '1917-11-07', '1911-10-10', '1911-12-29', '1910-08-29', '1923-10-29']);
const g = s => Date.parse(pad(s)) / 864e5;
const acik = []; let kir = 0, gec = 0;
for (const k of A) for (const d of [k.f, k.t]) {
  if (pad(d) < BAS || d >= '1923-10-29') continue;
  if (GECIS.has(d)) { gec++; continue; }
  kir++;
  if (!K.some(m => Math.abs(g(m.t) - g(d)) <= 30 && (m.taraflar || []).every(x => k.taraflar.includes(x)))) acik.push(k.id + ' ' + d);
}
console.log('kayıt', A.length, sinif, '| madde', K.length, '| kırılma', kir, 'geçiş(sayılmadı)', gec, '| maddesiz', acik.length, '| hata', e);
for (const a of acik) console.log('  MADDESİZ', a);
process.exit(e || acik.length ? 1 : 0);

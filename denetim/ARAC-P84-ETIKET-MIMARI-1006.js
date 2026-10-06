// P84-ETIKET-MIMARI-1006 — SALT OKUR. Ek okuma kart evrenini (index.html + app.js
// `_EKOKUMA_DOSYA_ADLARI`) yükler; mimari/şehircilik ANAHTAR KELİMESİNE uyan kartları
// ve EKOKUMA_TUR'da tanımsız türdeki kartları basar. Eşleşme ADAYDIR, hüküm elle verilir.
// Kullanım: node denetim/ARAC-P84-ETIKET-MIMARI-1006.js [--json denetim/<ad>.json]
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(KOK, 'js/app.js'), 'utf8');
const src = [...html.matchAll(/<script[^>]*src=["'](data\/[^"'?]+\.js)/g)].map(m => m[1]);
const blokOku = (bas, son) => { const i = app.indexOf(bas); return app.slice(i, app.indexOf(son, i)); };
const tembel = [...blokOku('var _EKOKUMA_DOSYA_ADLARI = [', '];').replace(/\/\/[^\n]*/g, '')
  .matchAll(/"([^"]+)"/g)].map(m => 'data/' + m[1] + '.js');
for (const f of tembel) if (!src.includes(f) && fs.existsSync(path.join(KOK, f))) src.push(f);
const EKOTUR = [...blokOku('var EKOKUMA_TUR = {', '\n};').split('\n').filter(l => !/^\s*\/\//.test(l))
  .join('\n').matchAll(/^\s*"([a-z-]+)":\s*\{/gm)].map(m => m[1]);

const ctx = { console: { log() {}, warn() {}, error() {} }, document: { addEventListener() {} } };
ctx.window = ctx; vm.createContext(ctx);
const hata = [];
for (const f of src) { try { vm.runInContext(fs.readFileSync(path.join(KOK, f), 'utf8'), ctx, { filename: f }); } catch (e) { hata.push(f); } }

function N(s) {
  s = String(s == null ? '' : s).replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u').replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c')
    .replace(/[Ââ]/g, 'a').replace(/[Îî]/g, 'i').replace(/[Ûû]/g, 'u');
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
const MIMARI = ['mimar', 'imar', 'sehir plan', 'sehircilik', 'bayindirlik', 'nafia', 'su yolu', 'suyolu',
  'isale', 'kemer', 'bent', 'sarnic', 'cesme', 'sebil', 'kopru', 'kanal', 'liman', 'rihtim', 'yol yapim',
  'cadde', 'kervansaray', 'han ', 'bedesten', 'carsi', 'kulliye', 'cami', 'medrese', 'saray', 'kosk',
  'kasr', 'turbe', 'kubbe', 'minare', 'sur ', 'surlar', 'kale insa', 'tunel', 'meydan', 'bahce', 'hamam',
  'imaret', 'darussifa', 'hastane', 'insa', 'yapi', 'mahalle', 'yangin', 'kagir', 'ahsap'];
const bul = m => { const n = ' ' + N(m) + ' '; return MIMARI.filter(k => new RegExp('[^a-z0-9]' + k.replace(/ $/, '[^a-z0-9]').replace(/ /g, '\\s+')).test(n)); };
const kartlar = [];
for (const g of Object.keys(ctx)) {
  if (!/^(EKOKUMA|MERAK)(_[A-Z0-9]+)?$/.test(g) || !Array.isArray(ctx[g])) continue;
  ctx[g].forEach((o, i) => { if (o && typeof o === 'object') kartlar.push({ g, i, o }); });
}
const baslik = o => [o.baslik, o.soru, o.ad, o.kisa, o.id].filter(Boolean).join(' · ');
const aday = [], tanimsiz = [];
for (const c of kartlar) {
  const t = c.o.tur || (/^MERAK/.test(c.g) ? 'merak' : '(yok)');
  if (!EKOTUR.includes(t) && !(/^MERAK/.test(c.g) && !c.o.tur)) tanimsiz.push(c.g + ':' + (c.o.id || c.i) + ':' + t);
  const k = bul(baslik(c.o));
  if (k.length) aday.push({ g: c.g, id: c.o.id || '#' + c.i, tur: t, kelime: k, baslik: baslik(c.o).slice(0, 170) });
}
const dag = kartlar.reduce((a, c) => (a[c.o.tur || '(yok)'] = (a[c.o.tur || '(yok)'] || 0) + 1, a), {});
const R = { dosya: src.length, tembel: tembel.length, hata, kart: kartlar.length, EKOKUMA_TUR: EKOTUR, tanimsiz, turDagilim: dag, aday };
const j = process.argv.indexOf('--json');
if (j > 0) { const h = path.resolve(process.argv[j + 1]); if (!h.startsWith(path.join(KOK, 'denetim'))) process.exit(2); fs.writeFileSync(h, JSON.stringify(R, null, 1)); }
console.log(JSON.stringify({ dosya: R.dosya, tembel: R.tembel, hata, kart: R.kart, tur: EKOTUR.length, tanimsiz: tanimsiz.length, tanimsizListe: tanimsiz, aday: aday.length }));
if (process.argv.includes('--liste')) for (const a of aday) console.log(a.tur.padEnd(16), a.g.replace('EKOKUMA', 'E'), a.id, '|', a.kelime.join(','), '|', a.baslik);

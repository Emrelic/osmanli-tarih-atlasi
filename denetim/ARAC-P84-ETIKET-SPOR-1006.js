// P84-ETIKET-SPOR-1006 — SALT OKUR ölçüm aracı. Hiçbir dosyaya yazmaz
// (yalnız stdout + isteğe bağlı --json <yol>, yol denetim/ altında olmalı).
// EVREN: index.html'in <script src> ile yüklediği data/*.js — dosya adıyla süzme YOK (D267).
// Madde = { t, b } taşıyan dizi öğesi, EKOKUMA*/MERAK* hariç.  Kart = EKOKUMA* / MERAK* öğesi.
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(KOK, 'index.html'), 'utf8');
const src = [...html.matchAll(/<script[^>]*src=["'](data\/[^"'?]+\.js)/g)].map(m => m[1]);
const js = [...html.matchAll(/<script[^>]*src=["'](js\/[^"'?]+\.js)/g)].map(m => m[1]);
// Ek okuma kartları index.html'de DEĞİL: app.js `_EKOKUMA_DOSYA_ADLARI` ile tembel yüklenir.
// O liste de evrendir — app.js METNİNDEN okunur (elle liste tutulmaz).
const tembel = (() => {
  const a = fs.readFileSync(path.join(KOK, 'js/app.js'), 'utf8');
  const i = a.indexOf('var _EKOKUMA_DOSYA_ADLARI = ['), j = a.indexOf('];', i);
  return [...a.slice(i, j).replace(/\/\/[^\n]*/g, '').matchAll(/"([^"]+)"/g)].map(m => 'data/' + m[1] + '.js');
})();
const tembelYok = tembel.filter(f => !fs.existsSync(path.join(KOK, f)));
src.push(...tembel.filter(f => !src.includes(f) && fs.existsSync(path.join(KOK, f))));

const ctx = { console: { log() {}, warn() {}, error() {} }, document: { addEventListener() {} } };
ctx.window = ctx; ctx.self = ctx; vm.createContext(ctx);
const yuklenemedi = [];
for (const f of src) {
  try { vm.runInContext(fs.readFileSync(path.join(KOK, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { yuklenemedi.push(f + ' :: ' + String(e.message).slice(0, 80)); }
}

// Türkçe normalleştirici (suzgec.js sgNorm ile aynı aile; D215)
function N(s) {
  s = String(s == null ? '' : s).replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u').replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c')
    .replace(/[Ââ]/g, 'a').replace(/[Îî]/g, 'i').replace(/[Ûû]/g, 'u');
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}
// ANAHTAR KELİMELER — kök biçiminde, kelime başı sınırı (normalleştirilmiş metinde)
const SPOR = ['gures', 'pehlivan', 'kirkpinar', 'okcu', 'kemankes', 'okmeydani', 'tirendaz',
  'cirit', 'atcilik', 'at yaris', 'binicilik', 'cevgen', 'tomak', 'matrak', 'spor', 'futbol',
  'olimpiya', 'jimnasti', 'eskrim', 'yuzme yaris', 'kosu yaris', 'menzil tas'];
const KULTUR = ['minyatur', 'nakkas', 'tezhip', 'hattat', 'hat sanat', 'ebru', 'musiki', 'muzik',
  'bestekar', 'beste', 'mehter', 'tiyatro', 'karagoz', 'orta oyun', 'opera', 'konser', 'ressam',
  'resim', 'heykel', 'sair', 'siir', 'divan edebiyat', 'divani', 'edebiyat', 'roman', 'hikaye',
  'gazel', 'kaside', 'mesnevi', 'tezkire', 'sanat', 'sergi', 'mimar sinan', 'cini', 'hali dokum',
  'kahvehane', 'meddah', 'tulumbaci', 'lale devri', 'sahaflar', 'kutuphane', 'muze', 'gazete'];
function bul(metin, liste) {
  const n = ' ' + N(metin);
  return liste.filter(k => new RegExp('[^a-z0-9]' + k.replace(/ /g, '\\s+')).test(n));
}

const maddeler = [], kartlar = [];
for (const ad of Object.keys(ctx)) {
  const v = ctx[ad];
  if (!Array.isArray(v)) continue;
  const kart = /^(EKOKUMA|MERAK)(_[A-Z0-9]+)?$/.test(ad);
  v.forEach((o, i) => {
    if (!o || typeof o !== 'object') return;
    if (kart) kartlar.push({ g: ad, i, o });
    else if (o.t && o.b) maddeler.push({ g: ad, i, o });
  });
}

const etk = o => (Array.isArray(o.etiket) ? o.etiket : o.etiket ? [o.etiket] : []);
// MADDE ekseni: başlık (b) birincil; d yalnız ikincil aday (vekil ölçüm, §9)
function maddeOlc(liste, hedef) {
  const out = [];
  for (const m of maddeler) {
    const kb = bul(m.o.b, liste), kd = kb.length ? [] : bul(m.o.d, liste);
    if (!kb.length && !kd.length) continue;
    const e = etk(m.o);
    out.push({ g: m.g, t: m.o.t, b: m.o.b, k: m.o.k || '', tur: m.o.tur || '',
      konu: e.filter(x => /^konu-|^afet/.test(x)), hedefVar: hedef.some(h => e.includes(h)),
      yer: kb.length ? 'b' : 'd', kelime: kb.length ? kb : kd });
  }
  return out;
}
const EKOTUR = (() => {               // app.js'teki EKOKUMA_TUR anahtarlarını METİNDEN oku
  const a = fs.readFileSync(path.join(KOK, 'js/app.js'), 'utf8');
  const i = a.indexOf('var EKOKUMA_TUR = {'), j = a.indexOf('\n};', i);
  const blok = a.slice(i, j).split('\n').filter(l => !/^\s*\/\//.test(l)).join('\n');
  return [...blok.matchAll(/^\s*"([a-z-]+)":\s*\{/gm)].map(m => m[1]);
})();
const kartBaslik = o => [o.baslik, o.soru, o.ad, o.kisa, o.id].filter(Boolean).join(' · ');
function kartOlc(liste) {
  const out = [];
  for (const c of kartlar) {
    const kb = bul(kartBaslik(c.o), liste);
    if (!kb.length) continue;
    out.push({ g: c.g, id: c.o.id || '#' + c.i, tur: c.o.tur || '(yok)', tanimli: EKOTUR.includes(c.o.tur),
      kelime: kb, baslik: kartBaslik(c.o).slice(0, 160), olay: c.o.olay || c.o.olaylar || '' });
  }
  return out;
}
const tanimsizTur = {};
for (const c of kartlar) {
  const t = c.o.tur;
  // merak havuzu `tur` taşımaz — MERAK* kartları "merak" sayılır (app.js _merakHavuz)
  if (/^MERAK/.test(c.g) && !t) continue;
  if (!EKOTUR.includes(t)) (tanimsizTur[t || '(yok)'] = tanimsizTur[t || '(yok)'] || []).push(c.g + ':' + (c.o.id || c.i));
}

const R = {
  evren: { dataDosya: src.length, tembel: tembel.length, tembelYok, jsDosya: js.length, yuklenemedi, madde: maddeler.length, kart: kartlar.length,
    maddeGlobal: [...new Set(maddeler.map(m => m.g))].length, kartGlobal: [...new Set(kartlar.map(c => c.g))] },
  EKOKUMA_TUR: EKOTUR, tanimsizTur,
  sporMadde: maddeOlc(SPOR, ['konu-spor']),
  kulturMadde: maddeOlc(KULTUR, ['konu-sanat', 'konu-kultur']),
  sporKart: kartOlc(SPOR), kulturKart: kartOlc(KULTUR),
  turDagilim: kartlar.reduce((a, c) => (a[c.o.tur || '(yok)'] = (a[c.o.tur || '(yok)'] || 0) + 1, a), {})
};
const i = process.argv.indexOf('--json');
if (i > 0) {
  const hedef = path.resolve(process.argv[i + 1]);
  if (!hedef.startsWith(path.join(KOK, 'denetim'))) { console.error('json yalnız denetim/ altına'); process.exit(2); }
  fs.writeFileSync(hedef, JSON.stringify(R, null, 1));
}
const ozet = x => ({ toplam: x.length, b: x.filter(y => y.yer === 'b').length, hedefYok_b: x.filter(y => y.yer === 'b' && !y.hedefVar).length });
process.stdout.write(JSON.stringify({ evren: R.evren, EKOKUMA_TUR: EKOTUR.length, tanimsizTur: Object.fromEntries(Object.entries(tanimsizTur).map(([k, v]) => [k, v.length])),
  sporMadde: ozet(R.sporMadde), kulturMadde: ozet(R.kulturMadde),
  sporKart: R.sporKart.length, kulturKart: R.kulturKart.length, turDagilim: R.turDagilim }, null, 1) + '\n');

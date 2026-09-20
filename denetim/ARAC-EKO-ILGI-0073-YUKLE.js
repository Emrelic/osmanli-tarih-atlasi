// EKO-ILGI-0073 — ortak yükleyici. Tarayıcının yaptığını Node'da yapar:
// index.html'in <script src="data/..."> satirlarini + app.js'in
// _EKOKUMA_DOSYA_ADLARI listesini ayni sirayla window'a yukler.
// Kullanim: const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js'); Y.yukle(kok)
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Bu olcum YALNIZ kronoloji + ek okuma verisini okur; uretilmis dev geometri
// dosyalari (donemler/devletler_harita/bolgeler/yerlesimler…) yuzlerce MB ve
// bu soruya hicbir sey katmaz — atlanir (atlananlar raporda listelenir).
const AGIR = /^data\/(donemler|devletler_harita|bolgeler|yerlesimler|devirler|d_sinirlar|sinir|halka|kaynakli_halka|petek|kara|motor)/;

function yukle(kok, hepsi) {
  const win = {};
  const ctx = vm.createContext({ window: win, console, Math, Date, JSON, Object, Array, String, Number, RegExp });
  ctx.globalThis = ctx;
  const yuklendi = [], bulunmayan = [], hatali = [], atlandi = [];

  function cek(rel) {
    if (!hepsi && AGIR.test(rel)) { atlandi.push(rel); return; }
    const p = path.join(kok, rel);
    if (!fs.existsSync(p)) { bulunmayan.push(rel); return; }
    try {
      vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: rel });
      yuklendi.push(rel);
    } catch (e) { hatali.push(rel + ' :: ' + e.message); }
  }

  // 1) index.html'deki data/*.js
  const html = fs.readFileSync(path.join(kok, 'index.html'), 'utf8');
  const re = /<script\s+src="(data\/[^"?]+\.js)(\?[^"]*)?"\s*>/g;
  let m; const indexDosya = [];
  while ((m = re.exec(html))) indexDosya.push(m[1]);
  indexDosya.forEach(cek);

  // 2) app.js'in gec yuklenen ek okuma dosyalari
  const app = fs.readFileSync(path.join(kok, 'js/app.js'), 'utf8');
  const i0 = app.indexOf('var _EKOKUMA_DOSYA_ADLARI = [');
  const i1 = app.indexOf('];', i0);
  const blok = app.slice(i0, i1);
  const adlar = [];
  const re2 = /"([a-z0-9_]+)"/g;
  let m2; while ((m2 = re2.exec(blok))) adlar.push(m2[1]);
  const ekDosya = adlar.map(a => 'data/' + a + '.js');
  ekDosya.forEach(cek);

  return { win, ctx, yuklendi, bulunmayan, hatali, atlandi, indexDosya, ekDosya, ekAdlar: adlar };
}

// app.js'ten EKOKUMA_TUR anahtarlarini ve etiketlerini cikar
function turler(kok) {
  const app = fs.readFileSync(path.join(kok, 'js/app.js'), 'utf8');
  const i0 = app.indexOf('var EKOKUMA_TUR = {');
  const i1 = app.indexOf('\n};', i0);
  const blok = app.slice(i0, i1);
  const out = {};
  const re = /^\s*"([a-z0-9-]+)":\s*\{\s*etiket:\s*"([^"]+)"/gm;
  let m; while ((m = re.exec(blok))) out[m[1]] = m[2];
  return out;
}

// app.js ile AYNI normalizasyon
function ekNorm(s) {
  s = String(s == null ? '' : s)
    .replace(/[İIı]/g, 'i').replace(/[Şş]/g, 's').replace(/[Ğğ]/g, 'g')
    .replace(/[Üü]/g, 'u').replace(/[Öö]/g, 'o').replace(/[Çç]/g, 'c')
    .replace(/[Ââ]/g, 'a').replace(/[Îî]/g, 'i').replace(/[Ûû]/g, 'u');
  if (s.normalize) s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  return s.toLowerCase().replace(/['‘’`ʼ]/g, '').replace(/\s+/g, ' ').trim();
}
function bagGun(v) { const s = String(v == null ? '' : v); const i = s.indexOf('|'); return i < 0 ? s : s.slice(0, i); }
function bagEslesir(v, o) {
  if (v == null) return false;
  const s = String(v), i = s.indexOf('|');
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  const ayirt = ekNorm(s.slice(i + 1));
  return !ayirt || ekNorm(o.b).indexOf(ayirt) >= 0;
}

module.exports = { yukle, turler, ekNorm, bagGun, bagEslesir };

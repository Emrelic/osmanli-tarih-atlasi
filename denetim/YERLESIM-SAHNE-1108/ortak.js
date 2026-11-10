// Ortak yükleyici — SALT OKUR. data/*.js'i vm ile yükler (denetle.py ÇALIŞTIRMAZ).
const fs = require('fs'), vm = require('vm'), path = require('path');
const KOK = path.resolve(__dirname, '..', '..'), DATA = path.join(KOK, 'data');

function yukle(f) {
  const sb = { window: {}, console: { log() {}, warn() {} } };
  sb.globalThis = sb.window;
  try { vm.runInNewContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sb, { timeout: 60000 }); }
  catch (e) { return { __hata: String(e).slice(0, 100) }; }
  return sb.window;
}
function girdiListesi() {
  const s = fs.readFileSync(path.join(KOK, 'arac', 'girdi_listesi.py'), 'utf8');
  const blok = s.slice(s.indexOf('GIRDI_DOSYALARI = ['));
  const out = [];
  for (const satir of blok.split('\n')) {
    if (/^\s*#/.test(satir)) continue;            // yorum satırı
    for (const m of satir.matchAll(/"([^"]+\.js)"\s*,?/g)) out.push(m[1]);   // aynı satırda birden çok dosya olabilir (ör. "…_0914.js", "…_p0037.js")
    if (/^\]/.test(satir)) break;
  }
  return out;
}
function yerlesimler() {
  const L = [];
  for (const f of girdiListesi()) {
    const w = yukle(f);
    if (w.__hata) { console.error('YÜKLENEMEDİ', f, w.__hata); continue; }
    for (const v of Object.values(w)) {
      if (Array.isArray(v)) for (const y of v) if (y && y.ad && typeof y.lat === 'number') { y._dosya = f; L.push(y); }
    }
  }
  return L;
}
function maddeler() {
  const files = fs.readdirSync(DATA).filter(f => /^(olaylar|kronoloji)/.test(f) && f.endsWith('.js'));
  const M = [];
  for (const f of files) {
    const w = yukle(f);
    if (w.__hata) { console.error('YÜKLENEMEDİ', f, w.__hata); continue; }
    for (const [ad, v] of Object.entries(w)) {
      if (!Array.isArray(v)) continue;
      for (const m of v) if (m && m.t && m.b) { m._dosya = f; m._dizi = ad; M.push(m); }
    }
  }
  return M;
}
// gün anahtarı: y*10000+m*100+d (MÖ'de de sıralı)
function gk(t) {
  if (!t) return null;
  const m = /^(-?\d+)(?:-(\d\d))?(?:-(\d\d))?/.exec(t);
  if (!m) return null;
  return (+m[1]) * 10000 + (+(m[2] || 1)) * 100 + (+(m[3] || 1));
}
const SON = 99999999;
function kapsar(arr, k) {
  return (arr || []).some(r => { const f = gk(r.f), t = r.t ? gk(r.t) : SON; return f !== null && k >= f && k < t; });
}
function ilkDevlet(y, k) {
  for (const a of ['s', 'd', 'v']) {
    for (const r of (y[a] || [])) {
      const f = gk(r.f), t = r.t ? gk(r.t) : SON;
      if (f !== null && k >= f && k < t) return a + ':' + (r.d || '(osmanli)');
    }
  }
  return null;
}
function norm(s) {
  return String(s || '').replace(/İ/g, 'i').replace(/I/g, 'i').normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .toLowerCase().replace(/ı/g, 'i').replace(/[^a-z0-9]+/g, ' ').trim();
}
function haversine(a, b, c, d) {
  const R = 6371, r = Math.PI / 180, dl = (c - a) * r, dn = (d - b) * r;
  const x = Math.sin(dl / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin(dn / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
module.exports = { KOK, DATA, yukle, girdiListesi, yerlesimler, maddeler, gk, kapsar, ilkDevlet, norm, haversine, SON };

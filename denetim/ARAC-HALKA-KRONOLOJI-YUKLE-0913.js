// ARAC-HALKA-KRONOLOJI-YUKLE-0913 — HALKA-KRONOLOJI · 13 Eylül 2026
// Ortak yükleyici (modül). Kronoloji maddelerini index.html'in YÜKLEDİĞİ SIRAYLA okur:
//   data/olaylar*.js (çekirdek) + data/kronoloji*.js (kuyruk) — liste index.html'den sökülür,
//   elle liste YOK (CLAUDE.md §5: "hangi DOSYALARI okuduğunu da doğrula").
// Ayrıca: yerleşim havuzu (YALNIZ ad çözümü için — dönemleri OKUNMAZ, §4 atlas referans değildir),
//   devletler.js künyeleri (id · ad · bolge · gömülü kronoloji — salt okunur), savaslar.js.
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const oku = f => fs.readFileSync(path.join(KOK, f), "utf8");

function kronolojiDosyalari() {
  const html = oku("index.html");
  return [...html.matchAll(/src="(data\/(?:olaylar|kronoloji)[^"?]*\.js)/g)].map(m => m[1]);
}
function maddeler() {
  const dosyalar = kronolojiDosyalari(), hepsi = [];
  for (const f of dosyalar) {
    global.window = {};
    eval(oku(f));
    const adlar = Object.keys(window).filter(k => Array.isArray(window[k]));
    for (const k of adlar) window[k].forEach((o, i) => hepsi.push(Object.assign({}, o, { _f: f, _v: k, _i: i,
      _kova: /^data\/olaylar/.test(f) ? "cekirdek" : "kuyruk" })));
  }
  return { dosyalar, hepsi };
}
function yerlesimler() {
  const html = oku("index.html");
  global.window = {};
  for (const m of html.matchAll(/src="(data\/yerlesimler[^"?]*\.js)/g)) eval(oku(m[1]));
  const Y = Object.keys(window).filter(k => /^YERLESIMLER_/.test(k) && Array.isArray(window[k]))
    .reduce((a, k) => a.concat(window[k]), (window.YERLESIMLER || []).slice());
  const ix = {}; for (const y of Y) if (y && y.ad) (ix[y.ad] = ix[y.ad] || []).push(y);
  return { Y, ix };
}
function devletler() {
  global.window = {}; eval(oku("data/devletler.js"));
  const D = window.DEVLETLER || []; const ix = {}; for (const d of D) ix[d.id] = d;
  return { D, ix };
}
function savaslar() {
  global.window = {}; eval(oku("data/savaslar.js"));
  return { SAVASLAR: window.SAVASLAR || [], ANTLASMALAR: window.ANTLASMALAR || [], SEFERLER: window.SEFERLER || [], SERILER: window.SERILER || [] };
}
// §4 ortak normalleştirici (ARAC-NORMAL-0903 ile aynı eşleme): lower()'dan ÖNCE Türkçe harf eşlemesi
const TR = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o",
  "Ç": "c", "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'", "ʿ": "", "ʾ": "" };
function norm(s) {
  return String(s || "").replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû’ʿʾ]/g, c => TR[c]).normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
}
module.exports = { KOK, oku, kronolojiDosyalari, maddeler, yerlesimler, devletler, savaslar, norm };

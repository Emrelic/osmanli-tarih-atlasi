// KITA 13 — BIR SEFER OKU HANGI GUNLERDE GORUNUR? (SALT OKUR)
//
// Paketin uc maddesi (H-0001 · H-0011 · H-0016) "sefer guzergahini kesikli
// cizgi ve ok ile gosterelim" diyor. OLCULDU: ozellik VAR (app.js:1618
// `sefer-cizgi-*` katmanlari, `line-dasharray`, `➤` glifi) ve VERI VAR
// (SEFERLER 61 kayit, 61'inde `yol:`, toplam 338 nokta).
//
// ⇒ O halde soru: NICIN GORUNMUYOR?
//
// `app.js:3495 seferGuncelle()` bir KIRPMA uyguluyor:
//     _fiKirpik = max(seferin `f`i , capadan(`t`) ONCEKI OLAYIN gunu)
// Kodun kendi yorumu sebebini de yaziyor:
//     "ASIL CARE VERIDEDIR: bu seferlerin BASINDA kronoloji maddesi yok."
//
// Bu betik o kirpmayi BIREBIR tekrarlar (kodu taklit etmiyor — ayni
// mantigi ayni veriyle kosturuyor) ve paketin sordugu seferler icin
// GORUNUR PENCEREYI basar.
//
//    node denetim/ARAC-KITA13-SEFERGORUNUR-0912.js

const fs = require("fs");
const path = require("path");
const KOK = path.resolve(__dirname, "..");
const VERI = path.join(KOK, "data");

function gunIndeks(s) {
  if (!s) return null;
  const p = String(s).length === 7 ? s + "-01" : s;
  const [y, m, d] = p.split("-").map(Number);
  return Math.round(Date.UTC(y, (m || 1) - 1, d || 1) / 864e5);
}
function gunYazi(gi) {
  return new Date(gi * 864e5).toISOString().slice(0, 10);
}

// --- olaylar: CEKIRDEK + KUYRUK, index.html'in yukledigi gibi
global.window = {};
for (const f of fs.readdirSync(VERI)) {
  if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
  try { eval(fs.readFileSync(path.join(VERI, f), "utf8")); } catch (e) { }
}
const olaylar = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (Array.isArray(v)) for (const o of v) if (o && o.t) olaylar.push(gunIndeks(o.t));
}
olaylar.sort((a, b) => a - b);

global.window = {};
eval(fs.readFileSync(path.join(VERI, "savaslar.js"), "utf8"));
const SEFERLER = global.window.SEFERLER || [];

console.log("# olay gunu (cekirdek+kuyruk):", olaylar.length);
console.log("# sefer:", SEFERLER.length);
console.log();

const ARANAN = ["Mora seferi (1423)", "Çaldıran seferi (1514)",
                "Mısır seferi (1516-17)"];

function oncekiOlay(capa) {
  let en = -Infinity;
  for (const g of olaylar) { if (g < capa && g > en) en = g; else if (g >= capa) break; }
  return en;
}

let kirpilan = 0, uzunKirpik = [];
for (const s of SEFERLER) {
  const fi = gunIndeks(s.f), ti = gunIndeks(s.t);
  const onc = oncekiOlay(ti);
  const kirpik = isFinite(onc) ? Math.max(fi, onc) : fi;
  const kayipGun = kirpik - fi;
  if (kayipGun > 0) { kirpilan++; uzunKirpik.push([kayipGun, s.ad, s.f, gunYazi(kirpik), s.t]); }
  if (ARANAN.some(a => (s.ad || "").indexOf(a) >= 0)) {
    console.log("=".repeat(70));
    console.log(s.ad);
    console.log("  sefer penceresi   :", s.f, "→", s.t, "(" + (ti - fi) + " gun)");
    console.log("  capadan onceki olay:", isFinite(onc) ? gunYazi(onc) : "YOK");
    console.log("  OK GORUNUR         :", gunYazi(kirpik), "→", s.t,
                "(" + (ti - kirpik) + " gun)");
    console.log("  🔴 KIRPILAN        :", kayipGun, "gun  (seferin basindan)");
    console.log("  yol nokta sayisi   :", (s.yol || []).length);
  }
}

console.log();
console.log("=".repeat(70));
console.log("GENEL: kirpilan sefer:", kirpilan, "/", SEFERLER.length);
uzunKirpik.sort((a, b) => b[0] - a[0]);
console.log("--- en cok kirpilan 10 ---");
for (const [g, ad, f, k, t] of uzunKirpik.slice(0, 10)) {
  console.log("  " + String(g).padStart(4) + " gun  " + f + " → " + k + "   " + ad);
}

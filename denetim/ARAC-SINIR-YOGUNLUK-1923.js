// SINIR YOĞUNLUĞU — 1923'te hangi sınırlar ZAYIF TANIMLI?
//
// 🔴 NİÇİN: Emre *"tüm dünyanın 1923 sınırlarını çizelim, hangi yerleşim
//    hangi ülkeye ait verisini toplayalım"* dedi. ÖLÇÜLDÜ: o veri ZATEN
//    VAR — 3805 noktanın 3630'u 1923-10-28'de sahipli, 106 devlet.
//    ⇒ Eksik olan SAHİPLİK DEĞİL, SINIR BOYUNDAKİ YOĞUNLUK.
//
//    Motor sınırı zaten "iki yerleşimin tam ortasından" geçiriyor
//    (Voronoi). Ama bir sınırın DOĞRU yerden geçmesi için iki yanında da
//    nokta gerekir: karşı yakada nokta yoksa sınır komşunun peteğine
//    kayar. `CLAUDE.md §2` bunu projenin EN SIK HATASI diye kaydediyor.
//
// ÖLÇÜT: her nokta için, BAŞKA bir devlete ait EN YAKIN noktaya olan
//    mesafe. Devlet çifti başına bu mesafenin EN KÜÇÜĞÜ, o sınırın
//    ne kadar iyi çivilendiğini söyler:
//        < 50 km   🟢 sınır İKİ NOKTA ARASINDA, iyi tanımlı
//        50-150 km 🟡 kaba
//        > 150 km  🔴 sınır TAHMİNE dayanıyor — nokta gerekiyor
//
// ⚠️ NE ÖLÇMEZ: sınırın DOĞRU olup olmadığını. Yalnız ÇİVİLENMİŞ olup
//    olmadığını. İki nokta yan yana olabilir ve sahiplikleri yanlış
//    olabilir — o ayrı bir denetim.
//
// KULLANIM:  node denetim/ARAC-SINIR-YOGUNLUK-1923.js [--tam]

const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";
const TAM = process.argv.includes("--tam");

let DOSYA;
try {
  DOSYA = JSON.parse(execSync(
    'py -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;' +
    'print(json.dumps(girdi.GIRDI_DOSYALARI))"',
    { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
} catch (e) { DOSYA = fs.readdirSync("data").filter((f) => /^yerlesim.*\.js$/.test(f)); }

const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} };
  vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}

const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};

const P = [];
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  const s = sahip(y);
  if (s) P.push({ ad: y.ad, lat: y.lat, lon: y.lon, s });
}
console.log("1923-10-28 · sahipli nokta: " + P.length);

const R = 6371, rad = (x) => x * Math.PI / 180;
function km(a, b) {
  const dLat = rad(b.lat - a.lat), dLon = rad(b.lon - a.lon);
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
}

// devlet cifti -> en kucuk sinir-asiri mesafe (ve o cifti veren nokta ikilisi)
const cift = {};
for (let i = 0; i < P.length; i++) {
  for (let j = i + 1; j < P.length; j++) {
    if (P[i].s === P[j].s) continue;
    const d = km(P[i], P[j]);
    if (d > 900) continue;                     // uzak ciftler sinir olamaz
    const a = P[i].s < P[j].s ? P[i].s : P[j].s;
    const b = P[i].s < P[j].s ? P[j].s : P[i].s;
    const k = a + " ↔ " + b;
    if (!cift[k] || d < cift[k].d) {
      cift[k] = { d, x: P[i].ad, y: P[j].ad, xs: P[i].s, ys: P[j].s };
    }
  }
}

const L = Object.entries(cift).sort((a, b) => a[1].d - b[1].d);
let iyi = 0, kaba = 0, zayif = 0;
for (const [, v] of L) {
  if (v.d < 50) iyi++;
  else if (v.d <= 150) kaba++;
  else zayif++;
}
console.log("");
console.log("KOMSU OLABILECEK DEVLET CIFTI: " + L.length);
console.log("  🟢 iyi tanimli (<50 km)   : " + iyi);
console.log("  🟡 kaba (50-150 km)       : " + kaba);
console.log("  🔴 ZAYIF (>150 km)        : " + zayif + "   ← NOKTA GEREKIYOR");
console.log("");
console.log("🔴 EN ZAYIF SINIRLAR (nokta eklenecek yerler):");
const zl = L.filter(([, v]) => v.d > 150).sort((a, b) => b[1].d - a[1].d);
for (const [k, v] of (TAM ? zl : zl.slice(0, 25))) {
  console.log("   " + String(Math.round(v.d)).padStart(4) + " km  " + k.padEnd(46) +
              "  (" + v.x + " ↔ " + v.y + ")");
}
if (!TAM && zl.length > 25) console.log("   … +" + (zl.length - 25) + " (--tam ile hepsi)");

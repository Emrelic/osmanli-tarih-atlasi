// BALKAN-DOGU AVRUPA — TABANI KENDIM OLCUYORUM (B10).
// Sartname "Balkanlar 389 + Dogu Avrupa 206 = 595" diyor, 6 Eylul olcumu.
//
// 🔴 IKI AYRI TANIM VAR ve AYNI SAYIYI VERMEZLER:
//   ① KUNYE BOLGESI  — kimligin `bolge` alani. `sovyet-rusya` bolgesi
//      "dogu-avrupa" ama noktalari Sibirya'ya kadar uzaniyor ⇒ SISER.
//   ② COGRAFI KUTU   — ARAC-1923-TRIYAJ-0906.js:62-66'daki BOLGE_KUTU.
//      balkanlar [38,48,13,30] · dogu-avrupa [44,71,20,60]
// Ikisini de olcup FARKI bildiriyorum; hangisinin taban oldugunu
// koordinator soylesin.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = process.argv[2] || "1923-10-28";

function baglam(y) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window;
}
const KUNYE = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUNYE[k.id] = k;

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
// TRIYAJ aletinin KENDI kutulari — taklit etmiyorum, ayni sayilari kullaniyorum
const KUTU = { "balkanlar": [38, 48, 13, 30], "dogu-avrupa": [44, 71, 20, 60] };

const canli = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G));
const sahipli = canli.filter(y => sahip(y));
console.log("=== " + G + " · BALKAN-DOGU AVRUPA TABANI ===");
console.log("canli nokta (dunya): " + canli.length + " · sahipli: " + sahipli.length);
console.log("");

// ① KUNYE BOLGESI
console.log("--- ① KUNYE BOLGESINE gore ---");
for (const b of ["balkanlar", "dogu-avrupa"]) {
  const küme = sahipli.filter(y => (KUNYE[sahip(y)] || {}).bolge === b);
  const ids = [...new Set(küme.map(sahip))];
  console.log("  " + b.padEnd(13) + String(küme.length).padStart(5) + " nokta · " +
    ids.length + " kimlik");
}

// ② COGRAFI KUTU
console.log("");
console.log("--- ② COGRAFI KUTU (TRIYAJ aletinin kendi kutulari) ---");
const kutuKume = {};
for (const b of Object.keys(KUTU)) {
  const [la1, la2, lo1, lo2] = KUTU[b];
  kutuKume[b] = sahipli.filter(y => y.lat >= la1 && y.lat <= la2 &&
    y.lon >= lo1 && y.lon <= lo2);
}
// kesisim (kutular ORTUSUYOR: lat 44-48 · lon 20-30)
const bAd = new Set(kutuKume["balkanlar"].map(y => y.ad));
const ortak = kutuKume["dogu-avrupa"].filter(y => bAd.has(y.ad));
for (const b of Object.keys(KUTU)) {
  const ids = [...new Set(kutuKume[b].map(sahip))].sort();
  console.log("  " + b.padEnd(13) + String(kutuKume[b].length).padStart(5) +
    " nokta · " + ids.length + " kimlik");
  const say = {};
  for (const y of kutuKume[b]) { const s = sahip(y); say[s] = (say[s] || 0) + 1; }
  for (const id of Object.keys(say).sort((a, c) => say[c] - say[a]))
    console.log("      " + id.padEnd(28) + String(say[id]).padStart(4));
}
console.log("");
console.log("  🔴 KUTULAR ORTUSUYOR (lat 44-48 · lon 20-30): ortak nokta " +
  ortak.length);
const birlesim = new Set([...kutuKume["balkanlar"], ...kutuKume["dogu-avrupa"]]
  .map(y => y.ad));
console.log("  ⇒ BIRLESIM (mukerrer sayilmadan): " + birlesim.size + " nokta");
console.log("  ⇒ TOPLAMA yapilirsa: " +
  (kutuKume["balkanlar"].length + kutuKume["dogu-avrupa"].length) +
  "  (ortak " + ortak.length + " IKI KEZ sayilir)");

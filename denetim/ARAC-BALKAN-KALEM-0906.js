// BALKAN-DOGU AVRUPA — sartnamedeki BES ACIK KALEMI kendim olcuyorum.
// Hicbir sayi devralinmiyor (B10). id'ler TAHMIN EDILMIYOR, TARANIYOR.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";

function baglam(y) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window;
}
const DEV = baglam("data/devletler.js").DEVLETLER || [];
const KUNYE = {}; for (const k of DEV) KUNYE[k.id] = k;

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

console.log("=== ① ② ③ HAYALETLER — 1923-10-28'de kunyesi BITMIS kimlikler ===");
for (const id of ["rusya", "romanya", "karadag"]) {
  const k = KUNYE[id];
  const kume = N.filter(y => sahip(y) === id);
  console.log("\n  " + id + "   kunye " + (k ? k.f + " -> " + k.t : "🔴 YOK") +
    "   1923-10-28'de " + kume.length + " nokta");
  for (const y of kume) {
    const d = (y.s || []).find(p => p.d === id && p.f <= G && G < p.t);
    console.log("     " + y.ad.padEnd(24) + y.lat.toFixed(2) + "  " +
      y.lon.toFixed(2) + "   " + (d ? d.f + " -> " + d.t : "?"));
  }
}

console.log("\n=== ARDIL KUNYELER — TARANDI, tahmin EDILMEDI ===");
for (const a of ["rusya", "sovyet", "gecici", "romanya", "karadag",
                 "yugoslav", "sirb"]) {
  const bul = DEV.filter(k => k.id.includes(a));
  for (const k of bul)
    console.log("  " + k.id.padEnd(30) + k.f + " -> " + k.t +
      "   harita:" + (k.harita || "(id)"));
}

console.log("\n=== ④ ⑤ ATIL KUNYELER — veride KULLANIM ===");
for (const id of ["oniki-ada-italyan", "avusturya-cumhuriyet"]) {
  const k = KUNYE[id];
  let n = 0, gun = 0;
  for (const y of N) for (const p of (y.s || [])) {
    if (p.d === id) { n++; if (p.f <= G && G < p.t) gun++; }
  }
  console.log("  " + id.padEnd(24) + (k ? k.f + " -> " + k.t : "🔴 KUNYE YOK") +
    "   veride " + n + " donem · 1923-10-28'de " + gun);
}

console.log("\n=== ⑤ Viyana · Graz BUGUN NE COZUYOR ===");
for (const ad of ["Viyana", "Graz", "Münih", "Regensburg", "Augsburg", "Ulm",
                  "Bratislava"]) {
  const y = N.find(z => z.ad === ad);
  if (!y) { console.log("  " + ad.padEnd(14) + "🔴 ATLASTA YOK"); continue; }
  const s = sahip(y);
  const k = KUNYE[s] || {};
  console.log("  " + ad.padEnd(14) + (s || "SAHIPSIZ").padEnd(22) +
    " harita:" + (k.harita || "(id)") + "  kunye " + (k.f || "?") + "->" + (k.t || "?"));
}

console.log("\n=== ④ ONIKI ADA — kaba kutu (35-38K · 26-29D) ===");
const ada = N.filter(y => y.lat >= 35 && y.lat <= 38.5 && y.lon >= 25.5 &&
  y.lon <= 29.5 && sahip(y));
const say = {};
for (const y of ada) { const s = sahip(y); say[s] = (say[s] || 0) + 1; }
console.log("  kutuda " + ada.length + " nokta:");
for (const s of Object.keys(say).sort((a, b) => say[b] - say[a]))
  console.log("     " + s.padEnd(26) + say[s]);

console.log("\n=== ⑦ EKSIK NOKTA ADAYLARI ===");
for (const ad of ["Burgaz", "Burgas", "Dobriç", "Dobric", "Silistre"]) {
  const bul = N.filter(y => y.ad.toLowerCase().includes(ad.toLowerCase()));
  console.log("  " + ad.padEnd(12) + (bul.length ? bul.map(y => y.ad + " (" +
    y.lat.toFixed(2) + "," + y.lon.toFixed(2) + ")").join(" · ") : "🔴 YOK"));
}

// `sovyet-rusya` KIMLIK DENETIMI — 1923-10-28 · BALKAN-DOGU AVRUPA
//
// SORU (`§3.5.-1`): kimlik bu tarihte GERCEKTEN orada miydi?
// `4c`/`4d` SORMAZ — kunye 1917-11-07 → 1923-10-29, donemler icinde kalir.
// 🔴 Ve BESARABYA emsali gosterdi ki bu kimligin kusuru TAM DA ORADA
//    saklaniyor: alti nokta `sovyet-rusya 1917-11-07 → 1923-10-29` tasiyordu
//    ve TDV Besarabya'yi 1918'den itibaren ROMANYA'da gosteriyordu —
//    hicbir kunye asilmadigi icin HICBIR DENETIM OTMEDI.
//
// BU TUR: ayni soruyu kalan kumeye soruyor.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";
const BENIM = new Set(["BALKANLAR", "DOGU-AVRUPA"]);

function baglam(y) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window;
}
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
const kume = [];
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  if ((y.d || []).some(p => p.f <= G && G < p.t)) continue;
  if ((y.v || []).some(p => p.f <= G && G < p.t)) continue;
  const s = (y.s || []).find(p => p.f <= G && G < p.t);
  if (s && s.d === "sovyet-rusya" && BENIM.has(bolge(y))) kume.push({ y, p: s });
}
console.log("=== `sovyet-rusya` · " + G + " · BENIM BOLGEMDE " + kume.length + " nokta ===");
// dunya geneli
const dunya = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) &&
  !(y.d || []).some(p => p.f <= G && G < p.t) &&
  !(y.v || []).some(p => p.f <= G && G < p.t) &&
  (y.s || []).some(p => p.f <= G && G < p.t && p.d === "sovyet-rusya"));
console.log("    (dunya geneli: " + dunya.length + " nokta · " +
  (dunya.length - kume.length) + " tanesi baska bolgelerde)");
console.log("");

console.log("--- BASLANGIC GUNU x ONCEKI KIMLIK ---");
const gr = {};
for (const { y, p } of kume) {
  const hepsi = [...(y.s || []).map(q => ({ ...q, alan: "s" })),
                 ...(y.d || []).map(q => ({ ...q, alan: "d", d: "OSMANLI" })),
                 ...(y.v || []).map(q => ({ ...q, alan: "v", d: "OSMANLI-tabi" }))]
    .sort((a, b) => a.f < b.f ? -1 : 1);
  const i = hepsi.findIndex(q => q.alan === "s" && q.d === "sovyet-rusya" && q.f === p.f);
  const o = i > 0 ? hepsi[i - 1] : null;
  const a = p.f + "   <- " + (o ? o.d : "(BASTAN)");
  (gr[a] = gr[a] || []).push(y);
}
for (const a of Object.keys(gr).sort()) {
  console.log("   " + a.padEnd(46) + String(gr[a].length).padStart(3));
  console.log("      " + gr[a].map(y => y.ad).slice(0, 12).join(" · ") +
    (gr[a].length > 12 ? " …" : ""));
}

// COGRAFI KUME — kaba, RAPOR icin
function kume_ad(y) {
  const la = y.lat, lo = y.lon;
  if (la >= 58) return "KUZEY (Karelya · Kola)";
  if (lo >= 40) return "KAFKASYA / VOLGA (lon>=40)";
  if (la >= 52 && lo < 32) return "BATI (Belarus · Baltik ici)";
  if (la < 48 && lo < 32) return "GUNEY (Kirim · Karadeniz)";
  return "UKRAYNA / ORTA";
}
console.log("");
console.log("--- COGRAFI KUME ---");
const g2 = {};
for (const k of kume) (g2[kume_ad(k.y)] = g2[kume_ad(k.y)] || []).push(k.y);
for (const b of Object.keys(g2).sort()) {
  console.log("   " + b.padEnd(30) + String(g2[b].length).padStart(3));
  console.log("      " + g2[b].map(y => y.ad).slice(0, 14).join(" · ") +
    (g2[b].length > 14 ? " …" : ""));
}

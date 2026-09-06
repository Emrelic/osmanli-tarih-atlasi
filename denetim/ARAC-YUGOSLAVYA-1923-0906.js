// `yugoslavya` KIMLIK DENETIMI — 1923-10-28 · BALKAN-DOGU AVRUPA
//
// SORU (`§3.5.-1`): kimlik 1918-12-01'de DOGDU; ONCESI ne?
// SHS Kralligi uc ayri mirastan kuruldu ve UCU de FARKLI zincir ister:
//   Sirbistan (`sirbistan-kralligi`) · Karadag (`karadag`) ·
//   Habsburg (Hirvatistan · Slovenya · Bosna · Dalmacya · Vojvodina)
// `4c`/`4d` bunu SORMAZ — kunye 1918-12-01 → 1923-10-29, donemler
// icinde kalir. Kusur varsa KUNYE ICINDE.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";

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
const kume = [];
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  if ((y.d || []).some(p => p.f <= G && G < p.t)) continue;
  if ((y.v || []).some(p => p.f <= G && G < p.t)) continue;
  const s = (y.s || []).find(p => p.f <= G && G < p.t);
  if (s && s.d === "yugoslavya") kume.push({ y, p: s });
}
const k = KUNYE["yugoslavya"];
console.log("=== `yugoslavya` · " + G + " · " + kume.length + " nokta ===");
console.log("kunye: " + k.f + " -> " + k.t);
console.log("");

console.log("--- BASLANGIC GUNU x ONCEKI KIMLIK ---");
const gr = {};
for (const { y, p } of kume) {
  const hepsi = [...(y.s || []).map(q => ({ ...q, alan: "s" })),
                 ...(y.d || []).map(q => ({ ...q, alan: "d", d: "OSMANLI" })),
                 ...(y.v || []).map(q => ({ ...q, alan: "v", d: "OSMANLI-tabi" }))]
    .sort((a, b) => a.f < b.f ? -1 : 1);
  const i = hepsi.findIndex(q => q.alan === "s" && q.d === "yugoslavya" && q.f === p.f);
  const o = i > 0 ? hepsi[i - 1] : null;
  const anah = p.f + "   <- " + (o ? o.d : "(BASTAN)");
  (gr[anah] = gr[anah] || []).push(y);
}
for (const a of Object.keys(gr).sort()) {
  console.log("   " + a.padEnd(44) + String(gr[a].length).padStart(3));
  console.log("      " + gr[a].map(y => y.ad).slice(0, 10).join(" · ") +
    (gr[a].length > 10 ? " …" : ""));
}

console.log("");
console.log("--- 🔴 KUNYE PENCERESINDEN ERKEN BASLAYANLAR ---");
const erken = kume.filter(({ p }) => p.f < k.f);
console.log("   kunye f: " + k.f + " · ONCESINDE baslayan: " + erken.length);
const eg = {};
for (const { y, p } of erken) (eg[p.f] = eg[p.f] || []).push(y.ad);
for (const g of Object.keys(eg).sort())
  console.log("      " + g + "  " + String(eg[g].length).padStart(3) + "  " +
    eg[g].slice(0, 8).join(" · ") + (eg[g].length > 8 ? " …" : ""));

console.log("");
console.log("--- ONCEKI KIMLIGIN BITIS GUNU ile YUGOSLAVYA BASLANGICI TUTUYOR MU ---");
let bosluk = 0, ortusme = 0;
for (const { y, p } of kume) {
  const oncekiler = (y.s || []).filter(q => q.t <= p.f || (q.f < p.f && q.t > p.f));
  const en = oncekiler.sort((a, b) => a.t < b.t ? 1 : -1)[0];
  if (!en) continue;
  if (en.t < p.f) { bosluk++; console.log("   🔴 BOSLUK " + y.ad.padEnd(22) +
    en.d + " biter " + en.t + " · yugoslavya baslar " + p.f); }
  if (en.t > p.f) { ortusme++; console.log("   🟡 ORTUSME " + y.ad.padEnd(22) +
    en.d + " " + en.f + "->" + en.t + " · yugoslavya " + p.f); }
}
console.log("   bosluk: " + bosluk + " · ortusme: " + ortusme);

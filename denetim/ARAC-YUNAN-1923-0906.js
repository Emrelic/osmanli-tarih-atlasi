// `yunanistan` KIMLIK DENETIMI — 1923-10-28 · BALKAN-DOGU AVRUPA
//
// SORU (`§3.5.-1`): bu kimlik bu tarihte GERCEKTEN orada miydi?
// `4c`/`4d` bunu SORMAZ — `yunanistan` kunyesi 1821-03-25 → 1923-10-29,
// yani hicbir donem kunyeyi asamaz. Kusur varsa KUNYE ICINDE kalir.
// (Besarabya ve `hafsi` ile ayni sinif.)
//
// OLCUM: her noktanin `yunanistan` doneminin BASLANGIC gunu + cografi kume.
// Amac: gunleri ANTLASMA gunleriyle karsilastirilabilir hale getirmek.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";

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
// 1923-10-28'de `yunanistan` olan noktalar
const kume = [];
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  const d = (y.d || []).find(p => p.f <= G && G < p.t);
  const v = (y.v || []).find(p => p.f <= G && G < p.t);
  if (d || v) continue;
  const s = (y.s || []).find(p => p.f <= G && G < p.t);
  if (s && s.d === "yunanistan") kume.push({ y, p: s });
}
console.log("=== `yunanistan` · " + G + " · " + kume.length + " nokta ===");

// BASLANGIC GUNU DAGILIMI
const gun = {};
for (const { p } of kume) (gun[p.f] = gun[p.f] || []).push(null);
console.log("");
console.log("--- BASLANGIC GUNU DAGILIMI ---");
for (const g of Object.keys(gun).sort())
  console.log("   " + g + "   " + String(gun[g].length).padStart(3) + " nokta");

// COGRAFI KUMELER — kaba, RAPOR icin
function bolge(y) {
  const la = y.lat, lo = y.lon;
  if (la < 36.0) return "GIRIT ve guney adalari";
  if (la >= 40.5 && lo >= 23.5) return "BATI TRAKYA";
  if (la >= 40.0 && lo < 23.5) return "MAKEDONYA / Selanik";
  if (la >= 38.5 && lo < 21.5) return "EPIR / Yanya";
  if (lo >= 24.5) return "EGE ADALARI (dogu)";
  return "MORA / orta Yunanistan / bati adalar";
}
const gr = {};
for (const k of kume) (gr[bolge(k.y)] = gr[bolge(k.y)] || []).push(k);
console.log("");
console.log("--- COGRAFI KUME x BASLANGIC GUNU ---");
for (const b of Object.keys(gr).sort()) {
  const say = {};
  for (const k of gr[b]) say[k.p.f] = (say[k.p.f] || 0) + 1;
  console.log("  " + b + "   (" + gr[b].length + " nokta)");
  for (const g of Object.keys(say).sort())
    console.log("      " + g + "  " + String(say[g]).padStart(3) +
      "   ornek: " + gr[b].filter(k => k.p.f === g).slice(0, 4)
        .map(k => k.y.ad).join(" · "));
}

// ONCEKI KIMLIK — neyden gecmis
console.log("");
console.log("--- ONCEKI KIMLIK (yunanistan doneminden HEMEN ONCE) ---");
const onc = {};
for (const { y, p } of kume) {
  const hepsi = [...(y.s || []).map(q => ({ ...q, alan: "s" })),
                 ...(y.d || []).map(q => ({ ...q, alan: "d", d: "OSMANLI" })),
                 ...(y.v || []).map(q => ({ ...q, alan: "v", d: "OSMANLI-tabi" }))]
    .sort((a, b) => a.f < b.f ? -1 : 1);
  const i = hepsi.findIndex(q => q.alan === "s" && q.d === "yunanistan" && q.f === p.f);
  const o = i > 0 ? hepsi[i - 1] : null;
  const anahtar = (o ? o.d + " → " : "(BASTAN) → ") + p.f;
  onc[anahtar] = (onc[anahtar] || 0) + 1;
}
for (const k of Object.keys(onc).sort((a, b) => onc[b] - onc[a]))
  console.log("   " + k.padEnd(40) + onc[k]);

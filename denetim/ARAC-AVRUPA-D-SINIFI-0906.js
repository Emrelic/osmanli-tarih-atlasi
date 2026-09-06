// D SINIFI — metropol kimlikli noktalar, HUKUKÎ DURUMA göre ayrılmış.
//
// 🔴 ÇERÇEVE `YONTEM-1923-SINIR.md §②a` (ORTADOĞU kurdu, 7 Eylül):
//    İLHAK    → metropol kimliği DOĞRU   (Cezayir: Fransa'nın vilâyetleri)
//    HİMAYE   → kendi kimliği + `isg:`   (Tunus · Fas)
//    MANDA / SÖMÜRGE → kendi kimliği
//    ⇒ İlhak edilmiş bir toprağı ayırmak atlası DÜZELTMEZ, BOZAR.
//
// Bu alet HÜKÜM VERMEZ — adayları COĞRAFÎ olarak ayırır ve hukukî durumun
// ÖLÇÜLMESİ gereken kümeyi daraltır. `ARAC-1923-TRIYAJ`ın D listesi bu
// ayrımı yapmıyor; o bir ADAY listesidir ve adaylığın ilk sınavı budur.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = "1923-10-28";
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);

// Metropolün KENDİ coğrafî kutusu — bunun DIŞI aday demektir.
const METROPOL = {
  "fransa-cumhuriyet": { laG: 41.3, laK: 51.2, loB: -5.2, loD: 9.6, ad: "Fransa anakarası" },
  "ingiltere":         { laG: 49.8, laK: 60.9, loB: -8.7, loD: 1.8, ad: "Britanya adaları" },
  "ispanya":           { laG: 35.9, laK: 43.8, loB: -9.4, loD: 4.4, ad: "İberya + Balear" },
  "portekiz":          { laG: 36.9, laK: 42.2, loB: -9.6, loD: -6.1, ad: "Portekiz anakarası" },
  "belcika":           { laG: 49.4, laK: 51.6, loB: 2.5, loD: 6.5, ad: "Belçika" },
  "italya":            { laG: 36.6, laK: 47.1, loB: 6.6, loD: 18.6, ad: "İtalya" },
  "hollanda":          { laG: 50.7, laK: 53.6, loB: 3.3, loD: 7.3, ad: "Hollanda" },
};

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
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
const akt = (a) => (a || []).find(p => p.f <= G && G < p.t);
const yasiyor = (y) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G);

// 🔴 `isg:` DÖRDÜNCÜ ALAN (şartname §⑥) — örtülü kayıt metropol sanılmasın
function sahip(y) {
  const i = akt(y.isg);
  if (i) return { id: i.d || i.k, ortulu: true };
  if (akt(y.d)) return { id: "OSMANLI" };
  if (akt(y.v)) return { id: "OSMANLI-tabi" };
  const p = akt(y.s);
  return p ? { id: p.d } : null;
}

const ic = {}, dis = {};
for (const y of N) {
  if (!yasiyor(y) || !BENIM.has(bolge(y))) continue;
  const s = sahip(y);
  if (!s || !METROPOL[s.id]) continue;
  const m = METROPOL[s.id];
  const icinde = y.lat >= m.laG && y.lat <= m.laK && y.lon >= m.loB && y.lon <= m.loD;
  (icinde ? (ic[s.id] = ic[s.id] || []) : (dis[s.id] = dis[s.id] || []))
    .push({ ad: y.ad, lat: y.lat, lon: y.lon, ortulu: s.ortulu });
}

console.log("=== D SINIFI · " + G + " — AVRUPA kovası ===");
console.log("");
console.log("kimlik                   METROPOL İÇİ   DIŞI (ADAY)");
for (const id of Object.keys(METROPOL)) {
  const a = (ic[id] || []).length, b = (dis[id] || []).length;
  if (!a && !b) continue;
  console.log("  " + id.padEnd(22) + String(a).padStart(7) + String(b).padStart(14) +
    (b ? "   <- hukukî durum ÖLÇÜLECEK" : "   🟢"));
}
console.log("");
console.log("=== METROPOL DIŞI ADAYLAR — tek tek ===");
for (const [id, L] of Object.entries(dis)) {
  console.log("");
  console.log("--- " + id + " · " + METROPOL[id].ad + " dışında " + L.length + " nokta ---");
  for (const y of L.sort((a, b) => a.lat - b.lat))
    console.log("     " + y.ad.padEnd(26) + ("(" + y.lat.toFixed(2) + ", " +
      y.lon.toFixed(2) + ")").padEnd(20) + (y.ortulu ? "🔵 isg: ÖRTÜLÜ" : ""));
}
console.log("");
console.log("🔴 BU BİR KUSUR LİSTESİ DEĞİL — ADAY listesi (§②a).");
console.log("   Her aday için sorulacak: 1923'te İLHAK mı, HİMAYE mi, SÖMÜRGE mi?");
console.log("   İlhaksa metropol kimliği DOĞRUdur ve dokunulmaz.");

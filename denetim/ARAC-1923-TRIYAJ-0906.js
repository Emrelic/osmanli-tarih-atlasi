// 1923-10-28 TRIYAJ — sinir denetimini oturumlara bolmek icin KUSUR SINIFLARI.
// Gozle degil OLCEREK siniflandirir. Her sinif AYRI CARE ister (§3.5.0).
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28", SON = "1923-10-29";

function baglam(y) { const d = { window: {} }; vm.createContext(d); vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window; }
const KUNYE = {}, HARITA_HEDEF = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) {
  KUNYE[k.id] = k;
  if (k.harita) (HARITA_HEDEF[k.harita] = HARITA_HEDEF[k.harita] || []).push(k.id);
}
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py", { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) { const A = w[k]; if (!Array.isArray(A)) continue; for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y); }
}
const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
const grup = {};
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  const s = sahip(y); if (!s) continue;
  (grup[s] = grup[s] || []).push(y);
}

// ---- SINIF A: HAYALET — kunye 1923'ten ONCE bitiyor ama veri kullaniyor
const A = [];
for (const id of Object.keys(grup)) {
  const k = KUNYE[id];
  if (!k || !k.t) continue;
  if (k.t < SON) {
    const yil = (new Date(SON) - new Date(k.t)) / 31557600000;
    A.push({ id, n: grup[id].length, t: k.t, yil, bolge: k.bolge || "?" });
  }
}
A.sort((a, b) => b.yil - a.yil);

// ---- SINIF B: KUNYESIZ — veride kullanilan ama `id` kunyesi olmayan
const B = [];
for (const id of Object.keys(grup)) {
  if (id === "OSMANLI" || id === "OSMANLI-tabi") continue;
  if (KUNYE[id]) continue;
  B.push({ id, n: grup[id].length, hedef: HARITA_HEDEF[id] || [] });
}
B.sort((a, b) => b.n - a.n);

// ---- SINIF C: OSMANLI 1923'te hala sahnede
const C = { d: (grup["OSMANLI"] || []).length, v: (grup["OSMANLI-tabi"] || []).length };

// ---- SINIF D: METROPOL KIMLIGI — bir kimlik KENDI bolgesinin DISINDA
//      cok sayida nokta tasiyorsa somurge kimligi eksik olabilir.
//      OLCUT: kunyenin `bolge`si ile noktalarin cografi dagilimi ayrisiyor mu?
const BOLGE_KUTU = {
  "bati-avrupa": [35, 62, -12, 12], "iberya": [35, 44, -10, 4],
  "italya": [36, 47, 6, 19], "orta-avrupa": [45, 55, 5, 24],
  "kuzey-avrupa": [54, 72, 4, 32], "dogu-avrupa": [44, 71, 20, 60],
  "balkanlar": [38, 48, 13, 30], "anadolu": [36, 42, 25, 45],
};
const D = [];
for (const id of Object.keys(grup)) {
  const k = KUNYE[id]; if (!k) continue;
  const kutu = BOLGE_KUTU[k.bolge]; if (!kutu) continue;
  const [la0, la1, lo0, lo1] = kutu;
  const disi = grup[id].filter((y) => !(y.lat >= la0 && y.lat <= la1 && y.lon >= lo0 && y.lon <= lo1));
  if (disi.length >= 5) D.push({ id, n: grup[id].length, disi: disi.length, bolge: k.bolge, oran: disi.length / grup[id].length });
}
D.sort((a, b) => b.disi - a.disi);

console.log("=== 1923-10-28 TRIYAJ ===  sahnede " + Object.keys(grup).length + " kimlik · " +
  Object.values(grup).reduce((a, b) => a + b.length, 0) + " nokta");
console.log("");
console.log("--- SINIF A: HAYALET (kunye 1923'ten ONCE bitiyor) : " + A.length + " kimlik · " +
  A.reduce((s, x) => s + x.n, 0) + " nokta");
console.log("    care: donemi KISALT ya da ARDIL kunye yaz (§3.5.0 uc alt-sinif)");
for (const x of A) console.log("      " + x.id.padEnd(24) + String(x.n).padStart(4) + " nokta   kunye t: " +
  x.t + "   " + x.yil.toFixed(1).padStart(6) + " yil FAZLA   [" + x.bolge + "]");
console.log("");
console.log("--- SINIF B: KUNYESIZ (veride var, `id` kunyesi yok) : " + B.length + " kimlik · " +
  B.reduce((s, x) => s + x.n, 0) + " nokta");
console.log("    care: hedef kunye ZATEN VARSA veriyi ONA cevir, yoksa kunye yaz");
for (const x of B) console.log("      " + x.id.padEnd(24) + String(x.n).padStart(4) + " nokta   " +
  (x.hedef.length ? "harita: hedefi <- " + x.hedef.join(", ") : "🔴 hicbir kunye gostermiyor"));
console.log("");
console.log("--- SINIF C: OSMANLI 1923-10-28'de sahnede");
console.log("      d: (dogrudan)  " + C.d + " nokta      v: (tabi)  " + C.v + " nokta");
console.log("    care: bekleyen tbmm yamasi (18 cakismanin icinde)");
console.log("");
console.log("--- SINIF D: KIMLIK KENDI BOLGESININ DISINDA (somurge/metropol supheli) : " + D.length);
console.log("    care: somurge kunyesi ac ya da VAR OLANI kullan (manda emsali)");
for (const x of D) console.log("      " + x.id.padEnd(24) + String(x.n).padStart(4) + " nokta   bolge disi " +
  String(x.disi).padStart(4) + "  (%" + (100 * x.oran).toFixed(0) + ")   kunye bolge: " + x.bolge);

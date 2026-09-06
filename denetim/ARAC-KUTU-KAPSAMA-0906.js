// 1923 SEFERININ BOLGE KUTULARI — KAPSAMA ve ORTUSME olcumu.
// Sebep: `Viyana` benim IKI kutuma da girmiyor (48,208K / 16,373D:
// balkanlar tavani 48, dogu-avrupa tabani 20D). Bir KUSUR bir kutunun
// disina dusuyorsa hicbir oturumun isi olmaz.
// ⇒ Soru: bu tek bir vaka mi, yoksa partisyonun YAPISI mi?
// Kutular TAKLIT EDILMEDI — ARAC-1923-TRIYAJ-0906.js:62-66'dan AYNEN alindi.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";
const BOLGE_KUTU = {
  "bati-avrupa": [35, 62, -12, 12], "iberya": [35, 44, -10, 4],
  "italya": [36, 47, 6, 19], "orta-avrupa": [45, 55, 5, 24],
  "kuzey-avrupa": [54, 72, 4, 32], "dogu-avrupa": [44, 71, 20, 60],
  "balkanlar": [38, 48, 13, 30], "anadolu": [36, 42, 25, 45],
};
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
const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
const kutular = (y) => Object.keys(BOLGE_KUTU).filter(b => {
  const [a1, a2, o1, o2] = BOLGE_KUTU[b];
  return y.lat >= a1 && y.lat <= a2 && y.lon >= o1 && y.lon <= o2;
});
// AVRUPA PENCERESI — kutularin birlesim zarfi (lat 35-72 · lon -12..60)
const avrupada = (y) => y.lat >= 35 && y.lat <= 72 && y.lon >= -12 && y.lon <= 60;

const canli = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) && sahip(y));
const zarf = canli.filter(avrupada);
const oksuz = zarf.filter(y => kutular(y).length === 0);
const cok = zarf.filter(y => kutular(y).length > 1);

console.log("=== BOLGE KUTULARI · KAPSAMA (" + G + ") ===");
console.log("kutu zarfinda (lat 35-72 · lon -12..60) sahipli nokta: " + zarf.length);
console.log("  🔴 HICBIR KUTUYA girmeyen : " + oksuz.length +
  "  (%" + (100 * oksuz.length / zarf.length).toFixed(1) + ")");
console.log("  🟡 BIRDEN COK kutuya giren: " + cok.length +
  "  (%" + (100 * cok.length / zarf.length).toFixed(1) + ")");
console.log("");
console.log("--- 🔴 OKSUZ NOKTALAR (ilk 40, boylama gore) ---");
oksuz.sort((a, b) => a.lon - b.lon);
for (const y of oksuz.slice(0, 40))
  console.log("   " + y.ad.padEnd(24) + y.lat.toFixed(2).padStart(6) + " " +
    y.lon.toFixed(2).padStart(7) + "   " + sahip(y));
if (oksuz.length > 40) console.log("   … +" + (oksuz.length - 40));
console.log("");
console.log("--- ORTUSME MATRISI (kac nokta IKI kutuda birden) ---");
const cift = {};
for (const y of cok) {
  const ks = kutular(y).sort();
  for (let i = 0; i < ks.length; i++) for (let j = i + 1; j < ks.length; j++) {
    const a = ks[i] + " ∩ " + ks[j]; cift[a] = (cift[a] || 0) + 1;
  }
}
for (const k of Object.keys(cift).sort((a, b) => cift[b] - cift[a]))
  console.log("   " + k.padEnd(34) + String(cift[k]).padStart(4));
console.log("");
console.log("--- OKSUZLERIN KUSURU VAR MI (kunyeyi asan) ---");
const DEV = baglam("data/devletler.js").DEVLETLER || [];
const KUNYE = {}, HARITA = {};
for (const k of DEV) { KUNYE[k.id] = k; if (k.harita) HARITA[k.harita] = k; }
const gun = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5;
let n = 0;
for (const y of oksuz) {
  const id = sahip(y); if (id.startsWith("OSMANLI")) continue;
  const k = KUNYE[id] || HARITA[id]; if (!k) { console.log("   KUNYESIZ " + y.ad + " " + id); n++; continue; }
  const p = (y.s || []).find(q => q.d === id && q.f <= G && G < q.t); if (!p) continue;
  if (gun(p.t) - gun(k.t) > 400) {
    console.log("   🔴 " + y.ad.padEnd(20) + id.padEnd(20) + " kunye t:" + k.t +
      " · veri t:" + p.t + " · " + ((gun(p.t) - gun(k.t)) / 365.25).toFixed(1) + " yil");
    n++;
  }
}
console.log("   oksuzler icinde kusurlu: " + n);

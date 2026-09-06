// AVRUPA TABANI — kendi ölçümüm (B10: devraldığın rakamı doğrulamadan aktarma).
//
// İKİ ÖLÇÜT BİRDEN, ve ikisi AYRI raporlanır:
//   sahip3  d: -> v: -> s:            ← ARAC-BOLGE-KUTU-0906.js'in ölçütü (YAZILI taban)
//   sahip4  d: -> v: -> s: -> isg:    ← şartname §⑥: DÖRDÜ BİRDEN
// Fark, koordinatörün "90 nokta örtülü, 26'sı senin kovanda" ölçümünün
// AVRUPA ayağıdır. Tek sayıda toplanmaz — ikisi farklı şey ölçüyor.
//
// Bölge ölçütü TAKLİT EDİLMEZ, TEK OTORİTEDEN alınır (§11).
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = process.argv[2] || "1923-10-28";
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);

// Her dosya İZOLE bağlamda: tek bağlamda eval, aynı window.X adını kullanan
// iki dosyada SESSİZ EZME üretir (§7).
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const c = { window: {} };
  vm.createContext(c);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), c); } catch (e) { continue; }
  for (const k of Object.keys(c.window)) {
    const A = c.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}

const akt = (a) => { for (const p of (a || [])) if (p.f <= G && G < p.t) return p; return null; };
function sahip3(y) {
  if (akt(y.d)) return "OSMANLI";
  if (akt(y.v)) return "OSMANLI-tabi";
  const p = akt(y.s); return p ? p.d : null;
}
function sahip4(y) {
  const i = akt(y.isg);
  if (i) return (i.d || i.k || "isg:?") + " [isg]";
  return sahip3(y);
}
const yasiyor = (y) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G);

const kova = {}, k3 = {}, k4 = {}, ortulu = [];
let n3 = 0;
for (const y of N) {
  if (!yasiyor(y)) continue;
  const b = bolge(y);
  if (!BENIM.has(b)) continue;
  const s3 = sahip3(y), s4 = sahip4(y);
  if (s3) { n3++; kova[b] = (kova[b] || 0) + 1; (k3[s3] = k3[s3] || []).push(y.ad); }
  if (s4) (k4[s4] = k4[s4] || []).push(y.ad);
  if (s3 !== s4) ortulu.push([y.ad, b, s3, s4]);
}

console.log("=== AVRUPA TABANI · " + G + " ===");
console.log("girdi dosyası: " + DOSYA.length + " · toplam nokta: " + N.length);
console.log("");
console.log("--- OLCUT A: sahip3 (d->v->s) — YAZILI TABAN ---");
for (const b of ["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"])
  console.log("  " + b.padEnd(20) + String(kova[b] || 0).padStart(5));
console.log("  " + "TOPLAM".padEnd(20) + String(n3).padStart(5));
console.log("  BENZERSIZ kimlik: " + Object.keys(k3).length);
console.log("");
console.log("--- KIMLIKLER (sahip3) ---");
for (const [k, v] of Object.entries(k3).sort((a, b) => b[1].length - a[1].length))
  console.log("  " + k.padEnd(28) + String(v.length).padStart(4) +
    "   " + v.slice(0, 4).join(", ") + (v.length > 4 ? " ..." : ""));
console.log("");
console.log("--- OLCUT B: sahip4 (isg: DAHIL) — SARTNAME §6 ---");
console.log("  BENZERSIZ kimlik: " + Object.keys(k4).length);
console.log("  ORTULU nokta (s3 != s4): " + ortulu.length);
for (const [ad, b, s3, s4] of ortulu)
  console.log("     " + ad.padEnd(22) + b.padEnd(18) + (s3 || "-") + "  ->  " + s4);

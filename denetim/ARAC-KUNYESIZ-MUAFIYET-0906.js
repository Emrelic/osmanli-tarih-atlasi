// OLCUM — `denetle.py`nin KUNYESIZ MUAFIYETI ne kadar denetim kaciriyor?
//
// BULGU (6 Eylul 2026): denetle.py:1831
//     if kim not in K:  kunyesiz.append(...); continue
// K = `_devletler_yukle()` -> {id: (f,t)}, yani YALNIZ `id`.
// `harita:` anahtari olarak yasayan her kimlik (suleyman-celebi ·
// avusturya · sirbistan · hicaz ...) bu dalda ELENIYOR ve hayalet/4c/4d
// denetimlerine HIC ULASMIYOR. Alet bunu durust raporluyor
// ("olculemedi, IHLAL DEGIL ama TEMIZ de degil") ama SAYIYI kimse
// olcmemis.
//
// BU ALET: `harita:` hedeflerini kunyelerine GERI COZER (bir anahtari
// birden cok kunye paylasiyorsa pencerelerin BIRLESIMI) ve muafiyetin
// arkasinda kac IHLAL durdugunu sayar.
//
// §11: bir aleti taklit eden olcum onun ESIGINI ve KOVA YAPISINI da
// tasimalidir. Tasinanlar:
//     HAYALET_TOLERANS_GUN = 400
//     hayalet : donem BASI kunye sonundan >400 gun SONRA
//     4c      : donem SONU  kunye sonundan >400 gun SONRA
//     4d      : donem BASI  kunye basindan >400 gun ONCE
//     4s      : 4c n 4d  (AYRI KOVA DEGIL KESISIM — ucu TOPLANMAZ)
//     evren   : yalniz `s:` donemleri (denetle.py'nin dongusu boyle)
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const TOL = 400;
const GUN = (s) => (s && /^\d{4}-\d{2}-\d{2}$/.test(s))
  ? Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5) : null;

function baglam(y) { const d = { window: {} }; vm.createContext(d); vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window; }
const D = baglam("data/devletler.js").DEVLETLER || [];
const K = {};                 // id -> [f, t]
const HARITA = {};            // harita anahtari -> [kunye...]
for (const k of D) {
  K[k.id] = [k.f || null, k.t || null];
  if (k.harita) (HARITA[k.harita] = HARITA[k.harita] || []).push(k.id);
}
// paylasilan anahtar -> pencerelerin BIRLESIMI
const BIRLESIK = {};
for (const [an, liste] of Object.entries(HARITA)) {
  let f = null, t = null;
  for (const id of liste) {
    const [kf, kt] = K[id] || [null, null];
    if (kf && (!f || kf < f)) f = kf;
    if (kt && (!t || kt > t)) t = kt;
  }
  BIRLESIK[an] = { f, t, kunye: liste };
}

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py", { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const Y = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) { const A = w[k]; if (!Array.isArray(A)) continue; for (const r of A) if (r && r.ad) Y.push(r); }
}

const muaf = {};            // kimlik -> donem sayisi (bugun MUAF olanlar)
const cozulen = { hayalet: [], c4: [], d4: [] };
const cozulemeyen = {};     // ne kunye ne harita anahtari
for (const r of Y) {
  for (const p of (r.s || [])) {
    const kim = p.d;
    if (!kim || K[kim]) continue;          // kunyesi VAR -> denetle zaten olcuyor
    muaf[kim] = (muaf[kim] || 0) + 1;
    const b = BIRLESIK[kim];
    if (!b) { cozulemeyen[kim] = (cozulemeyen[kim] || 0) + 1; continue; }
    const pf = GUN(p.f), pt = GUN(p.t), kf = GUN(b.f), kt = GUN(b.t);
    if (kt !== null && pf !== null && pf - kt > TOL)
      cozulen.hayalet.push([r.ad, kim, p.f, p.t, b.f, b.t, (pf - kt) / 365.25]);
    if (kt !== null && pt !== null && pt - kt > TOL)
      cozulen.c4.push([r.ad, kim, p.f, p.t, b.f, b.t, (pt - kt) / 365.25]);
    if (kf !== null && pf !== null && kf - pf > TOL)
      cozulen.d4.push([r.ad, kim, p.f, p.t, b.f, b.t, (kf - pf) / 365.25]);
  }
}
const toplamMuaf = Object.values(muaf).reduce((a, b) => a + b, 0);
console.log("=== KUNYESIZ MUAFIYETI — bugun denetim DISINDA kalan ===");
console.log("  kimlik: " + Object.keys(muaf).length + "   donem: " + toplamMuaf);
for (const [k, n] of Object.entries(muaf).sort((a, b) => b[1] - a[1]).slice(0, 12))
  console.log("    " + k.padEnd(22) + String(n).padStart(4) + " donem   " +
    (BIRLESIK[k] ? "-> " + BIRLESIK[k].kunye.join(", ") : "🔴 COZULEMEZ"));

console.log("");
console.log("=== `harita:` COZULURSE ORTAYA CIKAN IHLALLER (tolerans " + TOL + " gun) ===");
for (const [ad, L] of [["hayalet", cozulen.hayalet], ["4c", cozulen.c4], ["4d", cozulen.d4]]) {
  console.log("  " + ad.padEnd(8) + String(L.length).padStart(4) + " donem");
  const kim = {};
  for (const x of L) kim[x[1]] = (kim[x[1]] || 0) + 1;
  for (const [k, n] of Object.entries(kim).sort((a, b) => b[1] - a[1]).slice(0, 6)) {
    const en = Math.max(...L.filter((x) => x[1] === k).map((x) => x[6]));
    console.log("      " + k.padEnd(20) + String(n).padStart(4) + " donem · en buyuk " + en.toFixed(1) + " yil");
  }
}
const s4 = cozulen.c4.filter((a) => cozulen.d4.some((b) => b[0] === a[0] && b[1] === a[1] && b[2] === a[2]));
console.log("  4s      " + String(s4.length).padStart(4) + " donem  (4c n 4d KESISIMI — ucu TOPLANMAZ)");
console.log("");
console.log("  COZULEMEZ (ne kunye ne harita anahtari): " + Object.keys(cozulemeyen).length);
for (const [k, n] of Object.entries(cozulemeyen).sort((a, b) => b[1] - a[1]).slice(0, 8))
  console.log("      " + k.padEnd(22) + n + " donem");
console.log("");
console.log("EN BUYUK ON IHLAL (hayalet):");
for (const x of cozulen.hayalet.sort((a, b) => b[6] - a[6]).slice(0, 10))
  console.log("  " + x[0].padEnd(22) + x[1].padEnd(18) + x[2] + "->" + x[3] +
    "   kunye " + x[4] + "->" + x[5] + "   " + x[6].toFixed(1) + " yil");

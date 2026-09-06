// ÖNCÜL KÜNYE KULLANIMI — "künye var ama veri onu kullanıyor mu?"
//
// BULGU: `isvec-birlik-oncesi` (1281→1523-06-06) ve `kastilya`/`aragon`
// (→1479-01-20) künyeleri VAR ve ardıllarının `f:`siyle GÜN GÜN BİTİŞİK.
// Soru: veri onları kullanıyor mu, yoksa 1281'den beri ardılı mı yazıyor?
//
// 🔴 Bu ölçüm bir HÜKÜM DEĞİL: `sardinya` emsali (ad/unvan ömrü ≠ tasarruf
//    sürekliliği) ancak ÖNCÜL KÜNYE YOKSA geçerlidir. Burada VAR — ama
//    kullanılıp kullanılmadığı EMSALDEN okunur, tahminden değil.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

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
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push({ y, f });
  }
}

const CIFTLER = [
  { oncul: "isvec-birlik-oncesi", ardil: "isvec", gun: "1523-06-06" },
  { oncul: "kastilya", ardil: "ispanya", gun: "1479-01-20" },
  { oncul: "aragon", ardil: "ispanya", gun: "1479-01-20" },
  { oncul: "granada", ardil: "ispanya", gun: "1492-01-02" },
  { oncul: "norvec-kralligi", ardil: "norvec", gun: "1537-01-01" },
];

for (const { oncul, ardil, gun } of CIFTLER) {
  const kullanan = N.filter(({ y }) => (y.s || []).some(p => p.d === oncul));
  const erken = N.filter(({ y }) => (y.s || []).some(p => p.d === ardil && p.f < gun));
  const dogru = N.filter(({ y }) => (y.s || []).some(p => p.d === ardil && p.f >= gun));
  console.log("");
  console.log("=".repeat(74));
  console.log(oncul + "  →  " + ardil + "   (kırılma " + gun + ")");
  console.log("=".repeat(74));
  console.log("  🟢 ÖNCÜLÜ kullanan nokta      : " + kullanan.length);
  for (const { y } of kullanan.slice(0, 8)) {
    const z = (y.s || []).map(p => p.f + ">" + p.t + " " + p.d).join(" | ");
    console.log("       " + y.ad.padEnd(20) + z.slice(0, 110));
  }
  if (kullanan.length > 8) console.log("       ... +" + (kullanan.length - 8));
  console.log("  🔴 ardılı ERKEN kullanan      : " + erken.length +
    (erken.length ? "   (" + erken.slice(0, 6).map(x => x.y.ad).join(", ") +
      (erken.length > 6 ? " ..." : "") + ")" : ""));
  console.log("  ⚪ ardılı DOĞRU kullanan      : " + dogru.length);
  if (kullanan.length && erken.length)
    console.log("  ⇒ 🔴 TUTARSIZLIK: aynı geçiş için veri İKİ FARKLI yazım taşıyor.");
  else if (!kullanan.length && erken.length)
    console.log("  ⇒ 🟡 KÜNYE HİÇ KULLANILMIYOR — emsal YOK, konvansiyon sorusu AÇIK.");
  else if (kullanan.length && !erken.length)
    console.log("  ⇒ 🟢 TUTARLI — bütün noktalar öncülü kullanıyor.");
}

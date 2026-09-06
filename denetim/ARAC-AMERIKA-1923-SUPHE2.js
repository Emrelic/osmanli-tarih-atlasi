// İKİNCİ TUR ŞÜPHELİLER — kimlik dağılımından çıkan üç soru.
//
// 🔴 "1 dönem" TEK BAŞINA KUSUR DEĞİL (koordinatörün uyarısı, M-3059):
//   Tonga'nın atlasta tek noktası olması DOĞRU olabilir. Doğru soru
//   "kaç dönem" değil, "O ÜLKENİN TOPRAĞINDAKİ noktalar hangi kimliği
//   taşıyor". Bu alet onu sorar.
//
// kullanım: node denetim/ARAC-AMERIKA-1923-SUPHE2.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const GUN = "1923-10-28";
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) K.push([y, f]);
}
const aktif = (a, g) => Array.isArray(a) ? (a.find(p => p.f <= g && g < p.t) || null) : null;
const sahip = (y, g) => {
  const d = aktif(y.d, g); if (d) return "OSMANLI";
  const v = aktif(y.v, g); if (v) return v.k || "tabi";
  const s = aktif(y.s, g); if (s) return s.d;
  return null;
};
const benim = K.filter(([y]) => typeof y.lat === "number" && BENIM.includes(bolge(y)));

console.log("=== ① `ingiltere` — 13 nokta, ÜÇ bölgeye yayılmış. Kimler? ===");
console.log("   (sömürge kimliği bekleyen var mı — `ingiliz-kuzey-amerika` deseni)");
for (const [y, f] of benim.filter(([y]) => sahip(y, GUN) === "ingiltere")
  .sort((a, b) => a[0].lon - b[0].lon)) {
  const s = aktif(y.s, GUN);
  console.log("   " + y.ad.padEnd(28) + ("(" + y.lat.toFixed(1) + "," + y.lon.toFixed(1) + ")").padEnd(16)
    + bolge(y).padEnd(20) + s.f + "→" + s.t + "  [" + f + "]");
}

console.log("\n=== ② BÖLGE KOVASI ile COĞRAFYA ÇELİŞİYOR MU ===");
console.log("   (bir kimliğin noktaları BEKLENMEDİK bir kovada mı?)");
const supheli = [["tonga-kralligi", "OKYANUSYA"], ["sovyet-rusya", "VOLGA-URAL-SIBIRYA"],
  ["fransa-cumhuriyet", "?"], ["danimarka", "?"], ["hollanda", "?"]];
for (const [id, beklenen] of supheli) {
  const n = benim.filter(([y]) => sahip(y, GUN) === id);
  if (!n.length) continue;
  console.log("\n   " + id + "  (" + n.length + " nokta · beklenen kova: " + beklenen + ")");
  for (const [y, f] of n.slice(0, 8))
    console.log("      " + y.ad.padEnd(26) + ("(" + y.lat.toFixed(2) + ", "
      + y.lon.toFixed(2) + ")").padEnd(20) + bolge(y).padEnd(20) + "[" + f + "]");
  if (n.length > 8) console.log("      … +" + (n.length - 8));
}

console.log("\n=== ③ SAHİPSİZ 92 — BEYANLI mı, ŞÜPHELİ mi ===");
const sz = benim.filter(([y]) => !sahip(y, GUN));
const kova = { beyanli: [], bitli: [], supheli: [] };
for (const [y, f] of sz) {
  if (y.kasitli_bosluk) kova.beyanli.push([y, f]);
  else if (y.bit) kova.bitli.push([y, f]);
  else kova.supheli.push([y, f]);
}
console.log("   toplam " + sz.length + "  ·  kasitli_bosluk " + kova.beyanli.length
  + "  ·  `bit:` " + kova.bitli.length + "  ·  🔴 İKİSİ DE YOK " + kova.supheli.length);
const bos = {};
for (const [y] of kova.beyanli) { const b = y.bos || "(bos: YAZILMAMIŞ)"; bos[b] = (bos[b] || 0) + 1; }
console.log("   beyanlıların `bos:` cinsi → "
  + Object.entries(bos).map(([k, v]) => k + " " + v).join(" · "));
for (const [y, f] of kova.supheli.slice(0, 25))
  console.log("      🔴 " + y.ad.padEnd(30) + ("(" + y.lat.toFixed(1) + ","
    + y.lon.toFixed(1) + ")").padEnd(16) + "kur:" + (y.kur || "—").padEnd(12) + "[" + f + "]");
if (kova.supheli.length > 25) console.log("      … +" + (kova.supheli.length - 25));

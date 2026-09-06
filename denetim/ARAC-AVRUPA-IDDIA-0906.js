// BEYANSIZLIĞIN GERÇEK BOYUTU — kaç nokta GERÇEKTEN bir gün iddiası taşıyor?
//
// 🔴 NİÇİN: `§11` — "pencere uçları bir ÖLÇÜM DEĞERİ değil, bir SINIR
//    İŞARETİDİR; her sayımda ayrıca elenir." `1281-01-01` (atlas penceresinin
//    başı) ve `1923-10-29` (sonu) bir tarih iddiası DEĞİLDİR.
//    ⇒ `s:[{1281-01-01 → 1923-10-29, ispanya}]` beyansızdır ama hiçbir gün
//      iddia etmiyor; onun için kaynak aramak, olmayan bir iddiayı aramaktır.
//
// Bu alet "408 beyansız" sayısını ÜÇ KOVAYA ayırır ve gerçek borcu ölçer.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = "1923-10-28";
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);
const BASKASININ = new Set(["OSMANLI-tabi", "avusturya", "fas"]);
const UC = new Set(["1281-01-01", "1923-10-29"]);

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
const akt = (a) => (a || []).find(p => p.f <= G && G < p.t);
const yasiyor = (y) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G);

const kova = { pencere: [], yuvarlak: [], gun: [] };
const gunler = {};
for (const { y, f } of N) {
  if (!yasiyor(y) || !BENIM.has(bolge(y))) continue;
  const i = akt(y.isg);
  const kimlik = i ? (i.d || i.k) : (akt(y.d) ? "OSMANLI" :
    (akt(y.v) ? "OSMANLI-tabi" : (akt(y.s) || {}).d));
  if (!kimlik || BASKASININ.has(kimlik) || y.kaynak) continue;   // beyansızlar

  // Bu noktanın taşıdığı GERÇEK gün iddiaları: pencere uçları ELENİR
  const iddia = [];
  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || []))
      for (const g of [p.f, p.t])
        if (g && !UC.has(g)) iddia.push(g);

  if (!iddia.length) { kova.pencere.push(y.ad); continue; }
  const gunlu = iddia.filter(g => !/-01-01$/.test(g));
  if (!gunlu.length) { kova.yuvarlak.push({ ad: y.ad, f, iddia }); continue; }
  kova.gun.push({ ad: y.ad, f, gunlu });
  for (const g of gunlu) (gunler[g] = gunler[g] || []).push(y.ad);
}

const T = kova.pencere.length + kova.yuvarlak.length + kova.gun.length;
console.log("=== BEYANSIZ NOKTALARIN GERÇEK İDDİA YÜKÜ · " + G + " ===");
console.log("beyansız toplam: " + T);
console.log("");
console.log("  ⚪ SADECE PENCERE UÇLARI : " + kova.pencere.length +
  "   (%" + (100 * kova.pencere.length / T).toFixed(1) + ")");
console.log("     1281-01-01 → 1923-10-29 dışında HİÇBİR gün yok.");
console.log("     §11: pencere ucu bir ölçüm değeri DEĞİL, sınır işareti.");
console.log("     ⇒ Kaynak aramak, OLMAYAN bir iddiayı aramaktır. BORÇ DEĞİL.");
console.log("");
console.log("  🟡 YUVARLAK YIL (YYYY-01-01) : " + kova.yuvarlak.length +
  "   (%" + (100 * kova.yuvarlak.length / T).toFixed(1) + ")");
console.log("     §4'ün KENDİ yazımı: 'yıl biliniyor, gün bilinmiyor'.");
console.log("     ⇒ Kaynak GEREKİR ama hassasiyet iddiası ZATEN mütevazı.");
console.log("");
console.log("  🔴 GÜN HASSASİYETLİ İDDİA : " + kova.gun.length +
  "   (%" + (100 * kova.gun.length / T).toFixed(1) + ")");
console.log("     'Bu tam o gün oldu' diyor ve DAYANAĞI YOK. GERÇEK BORÇ.");

console.log("");
console.log("--- 🔴 GÜN İDDİASI TAŞIYAN BEYANSIZ NOKTALAR ---");
for (const r of kova.gun.slice(0, 30))
  console.log("   " + r.ad.padEnd(24) + r.gunlu.slice(0, 3).join(" · ") +
    "   " + r.f);
if (kova.gun.length > 30) console.log("   ... +" + (kova.gun.length - 30));

console.log("");
console.log("--- AYNI GÜNÜ PAYLAŞAN NOKTALAR (toplu atama ⇒ TEK dayanak yeter) ---");
for (const [g, L] of Object.entries(gunler).sort((a, b) => b[1].length - a[1].length).slice(0, 12))
  console.log("   " + g + "   " + String(L.length).padStart(3) + " nokta   " +
    L.slice(0, 4).join(", ") + (L.length > 4 ? " ..." : ""));
console.log("");
console.log("⇒ BENZERSİZ GÜN SAYISI: " + Object.keys(gunler).length +
  "  (gerçek dayanak borcunun BİRİMİ bu — nokta sayısı DEĞİL, §11 sayım birimi)");

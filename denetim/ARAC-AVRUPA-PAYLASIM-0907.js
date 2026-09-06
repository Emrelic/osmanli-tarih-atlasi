// `paylasilan` BÖLGE bazlı — OTURUM bazlı DEĞİL. Fark ölçülüyor.
//
// 🔴 YENİ KURAL (koordinatör, 7 Eylül): `paylasilan: true` olan günü
//    ⑮ PAYLAŞILAN GÜNLER kolu yazar, bölge kolu ATLAR. Amaç: altı oturumun
//    aynı günü yazmasını önlemek. Doğru amaç.
//
// 🔴 AMA ÖLÇÜT EKSİK: defter `paylasilan`ı BÖLGE sayısından hesaplıyor, ve
//    AVRUPA oturumunun DÖRT kovası var (KUZEY-AVRUPA · BATI-ORTA-AVRUPA ·
//    IBERYA · ITALYA). İki kovaya yayılan bir gün "paylaşılan" görünüyor —
//    ama iki kova da AYNI OTURUMUN. Mükerrer iş riski YOK.
//      1922-12-06  BATI-ORTA 16 · KUZEY-AVRUPA 4   ⇒ İKİSİ DE BENİM
//      1871-01-18  BATI-ORTA 10 · KUZEY-AVRUPA 8   ⇒ İKİSİ DE BENİM
//    Buna karşılık GERÇEK paylaşım:
//      1547-01-16  KUZEY-AVRUPA 72 · VOLGA 60 · DOGU-AVRUPA 14  ⇒ ÜÇ OTURUM
//
// ⇒ Bu alet `SAHIP` tablosunu kullanarak OTURUM bazlı paylaşımı ölçer.
//   Hüküm koordinatörün; bu yalnız ölçüm.
const fs = require("fs");
const { SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");

const BENIM_OTURUM = "AVRUPA";
const D = JSON.parse(fs.readFileSync("denetim/DAYANAK-GUNLER-0907.json", "utf8"));
const BENIM_KOVA = new Set(Object.entries(SAHIP)
  .filter(([, o]) => o === BENIM_OTURUM).map(([b]) => b));

const gercek = [], sahte = [], tekil = [];
for (const g of (D.gunler || [])) {
  if (!BENIM_KOVA.has(g.sahip)) continue;               // benim günüm değil
  const oturumlar = new Set(Object.keys(g.bolgeler || {})
    .map(b => SAHIP[b] || "?"));
  if (!g.paylasilan) tekil.push(g);
  else if (oturumlar.size === 1 && oturumlar.has(BENIM_OTURUM)) sahte.push(g);
  else gercek.push({ ...g, oturumlar: [...oturumlar] });
}
const say = (L) => L.reduce((a, b) => a + b.nokta, 0);

console.log("=== `paylasilan` — BÖLGE mi OTURUM mu? ===");
console.log("AVRUPA'nın kovaları: " + [...BENIM_KOVA].join(" · "));
console.log("");
console.log("  ⚪ paylasilan:false (tekil)        : " + tekil.length +
  " gün · " + say(tekil) + " nokta   ⇒ BENİM");
console.log("  🟢 paylasilan:true AMA TEK OTURUM  : " + sahte.length +
  " gün · " + say(sahte) + " nokta   ⇒ BENİM (kural bunu ⑮'e veriyor — GEREKSİZ)");
console.log("  🔴 paylasilan:true VE ÇOK OTURUM   : " + gercek.length +
  " gün · " + say(gercek) + " nokta   ⇒ ⑮'İN, doğru");
console.log("");
console.log("--- 🟢 SAHTE PAYLAŞIM (iki kovam da AVRUPA) — en büyük 12 ---");
for (const g of sahte.sort((a, b) => b.nokta - a.nokta).slice(0, 12))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta   " +
    Object.entries(g.bolgeler).map(([b, n]) => b + " " + n).join(" · "));
console.log("");
console.log("--- 🔴 GERÇEK PAYLAŞIM — en büyük 10 ---");
for (const g of gercek.sort((a, b) => b.nokta - a.nokta).slice(0, 10))
  console.log("   " + g.gun + "  " + String(g.nokta).padStart(3) + " nokta   ⇒ " +
    g.oturumlar.join(" · "));

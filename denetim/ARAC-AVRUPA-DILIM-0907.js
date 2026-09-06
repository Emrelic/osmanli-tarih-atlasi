// AVRUPA'NIN DAYANAK DİLİMİ — ortak defterden KENDİ günlerimi çıkarır.
//
//   node denetim/ARAC-AVRUPA-DILIM-0907.js [kaç]
//
// 🔴 Defter (`DAYANAK-GUNLER-0907.json`) PAYLAŞILAN ALTYAPI, Oturum 0'ın.
//    Bu alet ondan yalnız OKUR — `sahip` alanı benim dört kovamdan biri
//    olan günleri süzer. Bir gün bana ait değilse ARAMAM; sahibi arayacak.
//    (§7: paylaşılan kaynakta karar Oturum 0'ın.)
//
// ⚠️ Koordinatörün birim uyarısı devralındı: `bolgeler` dağılımı UÇ bazlı
//    (bir gün hem `f` hem `t` ise aynı nokta iki kez düşer), `nokta` ise
//    Set. Sıralama ve sahiplik doğru, bölge sayıları ŞİŞİK. Burada
//    sıralama için `nokta` kullanılıyor — şişik alan DEĞİL.
const fs = require("fs");

const BENIM = new Set(["KUZEY-AVRUPA", "BATI-ORTA-AVRUPA", "IBERYA", "ITALYA"]);
const KAC = +(process.argv[2] || 25);

const D = JSON.parse(fs.readFileSync("denetim/DAYANAK-GUNLER-0907.json", "utf8"));
const L = D.gunler || [];

const benim = L.filter(g => BENIM.has(g.sahip));
const degil = L.filter(g => !BENIM.has(g.sahip));

console.log("=== AVRUPA DAYANAK DİLİMİ ===");
console.log("defterde toplam gün : " + L.length);
console.log("🟢 SAHİBİ BEN       : " + benim.length +
  "   (nokta toplamı " + benim.reduce((a, b) => a + b.nokta, 0) + ")");
console.log("⚪ başkasının       : " + degil.length);
console.log("");

const kova = {};
for (const g of benim) kova[g.sahip] = (kova[g.sahip] || 0) + 1;
console.log("kova dağılımı: " + Object.entries(kova)
  .sort((a, b) => b[1] - a[1]).map(([k, v]) => k + " " + v).join(" · "));

const p = benim.filter(g => g.paylasilan).length;
console.log("bunların PAYLAŞILANI: " + p + "   (sahip benim ama başka kovada da nokta var)");
console.log("");
console.log("=== EN ÇOK NOKTA KAPSAYAN " + KAC + " GÜN — iş sırası ===");
console.log("gün           nokta  sahip              kimlik");
for (const g of benim.sort((a, b) => b.nokta - a.nokta).slice(0, KAC)) {
  const k = (g.kimlik || []).slice(0, 3).join(", ");
  console.log("  " + g.gun + "  " + String(g.nokta).padStart(4) + "   " +
    g.sahip.padEnd(18) + k.slice(0, 46) +
    (g.paylasilan ? "   🔵 paylaşılan" : ""));
}

const ilk = benim.slice(0, KAC).reduce((a, b) => a + b.nokta, 0);
const top = benim.reduce((a, b) => a + b.nokta, 0);
console.log("");
console.log("⇒ ilk " + KAC + " günün payı: " + ilk + " / " + top +
  " nokta (%" + (100 * ilk / top).toFixed(1) + ")");

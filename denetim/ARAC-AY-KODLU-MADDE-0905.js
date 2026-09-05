// -*- coding: utf-8 -*-
// KRONOLOJİ MADDELERİNDE "AY, AYIN 1'İNE KODLANMIŞ" — kaç tane?
//
// 🔴 NİÇİN (5 Eylül 2026): `CLAUDE.md §4`ün üçüncü hassasiyet ekseni
// (ay hassasiyeti `YYYY-MM-01` diye yazılmış) **42 KÜNYEDE** ölçülmüştü.
// Bugün aynı biçim bir KRONOLOJİ MADDESİNDE çıktı (Bozcaada/İmroz,
// `t:"1913-11-01"` ama `gun:` alanı "Kasım 1913") ve on yıllık bir
// "çelişki"nin yarısını tek başına üretti — üç oturum yanıldı.
//
// ⇒ O ölçümün evreni dardı. Bu betik kronoloji tarafını sayar.
//
// ⚠️ VE BİÇİM İKİ ŞEYİ AYIRT EDEMEZ (§4): "gerçekten ayın 1'i" ile
//    "ay biliniyor, gün bilinmiyor". Bu yüzden ölçüm ÜÇ KOVALI ve
//    hüküm vermez — `gun:` metnine bakarak AYIRIR:
//      🔴 gun: metni AY diyor  → hassasiyet ŞİŞMİŞ, kesin vaka
//      🟡 gun: alanı YOK       → ayırt edilemez, ölçülemedi
//      🟢 gun: metni GÜN diyor → gerçekten ayın 1'i
//
// KOŞTUR:  py denetim/ARAC-AY-KODLU-MADDE-0905-kos.py

const fs = require("fs");
const path = require("path");
const KOK = process.argv[2] || ".";

const DOSYALAR = fs.readdirSync(path.join(KOK, "data"))
  .filter((f) => /^(olaylar|kronoloji).*\.js$/.test(f));
console.log("okunan dosya: " + DOSYALAR.length);
if (!DOSYALAR.length) { console.log("🔴 DOSYA YOK — DURDUM"); process.exit(2); }

global.window = {};
for (const f of DOSYALAR) eval(fs.readFileSync(path.join(KOK, "data", f), "utf8"));

const O = [];
for (const k of Object.keys(global.window)) {
  const v = global.window[k];
  if (Array.isArray(v)) for (const r of v) if (r && r.t) O.push({ k, r });
}
console.log("madde: " + O.length);
if (O.length < 1000) { console.log("🔴 BEKLENENDEN AZ — okuma bozuk, DURDUM"); process.exit(2); }

// ayın 1'ine denk gelen maddeler
const bir = O.filter((x) => /^\d{4}-\d{2}-01$/.test(x.r.t));
console.log("t: ayın 1'i olan madde: " + bir.length);

// `gun:` metni gün taşıyor mu? (bir rakam + ay adı ya da rakamla gün)
const AY = "ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık";
const rxGun = new RegExp("\\d{1,2}\\s*(" + AY + ")", "i");
const rxAy = new RegExp("^\\s*(" + AY + ")\\s*\\d{3,4}\\s*$", "i");

const kova = { sismis: [], olculemedi: [], gercek: [] };
for (const x of bir) {
  const g = (x.r.gun || "").toString().trim();
  if (!g) kova.olculemedi.push(x);
  else if (rxGun.test(g)) kova.gercek.push(x);
  else if (rxAy.test(g)) kova.sismis.push(x);
  else kova.olculemedi.push(x);
}

const yaz = (b, l, n) => {
  console.log("\n" + b + "  (" + l.length + ")");
  for (const x of l.slice(0, n)) {
    const g = (x.r.gun || "—").toString();
    console.log("  " + x.r.t + "  gun:" + JSON.stringify(g).padEnd(20) + " " +
                (x.r.b || "").toString().slice(0, 60));
  }
  if (l.length > n) console.log("  … " + (l.length - n) + " tane daha");
};

yaz("🔴 HASSASİYET ŞİŞMİŞ — `gun:` AY diyor, `t:` GÜN yazıyor", kova.sismis, 40);
// 🔴 "ölçülemedi" kovası İKİ AYRI ŞEYİ taşıyor ve karıştırmak yanıltır:
//    `YYYY-01-01` §4'ün KENDİ kuralıdır ("yıl biliniyor, gün bilinmiyor")
//    — bir kusur değil, kabul edilmiş yazım. Gerçek şüpheli, ayı 01
//    OLMAYAN ama `gun:` alanı susan kayıttır.
const ocak = kova.olculemedi.filter((x) => /^\d{4}-01-01$/.test(x.r.t));
const digerAy = kova.olculemedi.filter((x) => !/^\d{4}-01-01$/.test(x.r.t));
console.log("\n⚪ `YYYY-01-01` — §4'ün 'yıl biliniyor, gün bilinmiyor' YAZIMI  (" +
            ocak.length + ")   ← KUSUR DEĞİL, kabul edilmiş");
yaz("🟡 ŞÜPHELİ — ayı 01 DEĞİL ama `gun:` susuyor", digerAy, 12);
console.log("\n🟢 GERÇEKTEN AYIN 1'İ — `gun:` gün diyor  (" + kova.gercek.length + ")");

console.log("\n=== ÖZET ===");
console.log("madde toplam        : " + O.length);
console.log("t: ayın 1'i         : " + bir.length);
console.log("🔴 hassasiyet şişmiş: " + kova.sismis.length);
console.log("⚪ YYYY-01-01 yazımı : " + ocak.length + "   ← KUSUR DEĞİL (§4)");
console.log("🟡 şüpheli (ay≠01)  : " + digerAy.length + "   ← 'temiz' DEĞİL");
console.log("🟢 gerçekten ayın 1'i: " + kova.gercek.length);
console.log("\n⚠️ HÜKÜM YOK: 'şişmiş' bir kusur değil, bir BEYAN UYUMSUZLUĞU.");
console.log("   Çaresi `t:`yi bozmak değil — §4: tarih alanı kaynağın");
console.log("   desteklediği EN KABA GÜVENLİ düzeyi taşır, gerisi metinde durur.");

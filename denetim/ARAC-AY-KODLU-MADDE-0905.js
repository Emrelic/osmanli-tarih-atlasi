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
// ══════════════════════════════════════════════════════════════════
// 🔴 SINIF B — `gun:` metni GÜN veriyor ama `t:` ile AY ÇELİŞİYOR
//
// Keşif `KÜRE GÖRÜNÜM`in (5 Eylül): 25 sluglık bir örneklemde üç kayıt
// çıktı — slug canlı, madde doğru, olay doğru, YIL doğru, **AY YANLIŞ**.
//   konya  iddia 1832-11-21 · TDV "21 ARALIK 1832"
//   vehran iddia 1792-02-12 · TDV "12 EYLÜL 1792"
// ⇒ *"Her otomatik YIL kontrolü bunu TEMİZ geçirir."* Ve `§4`ün dört
//   tuzağının hiçbiri yakalamaz.
//
// O örneklem 25'ti; burada 6154 maddenin TAMAMI taranıyor — ama içeriden:
// kaynağa değil, maddenin KENDİ `gun:` metnine karşı. Yani bu tarama
// "TDV ne diyor" sorusunu SORMAZ; "kaydın iki alanı birbiriyle
// uyuşuyor mu" sorusunu sorar. İkisi ayrı sorudur ve bu ucuz olanıdır.
const AYLAR = ["ocak", "şubat", "mart", "nisan", "mayıs", "haziran", "temmuz",
               "ağustos", "eylül", "ekim", "kasım", "aralık"];
const rxTamGun = new RegExp("(\\d{1,2})\\s*(" + AYLAR.join("|") + ")", "i");

// 🔴 VE İLK SÜRÜM 42 VAKA BASTI, ÇOĞU TASARIMDI — süzgeç şart.
// `gun:` alanı bilerek üç şey daha taşıyor ve üçü de ÇELİŞKİ DEĞİL:
//   ARALIK      "23 Ağustos – 13 Eylül 1921" → `t:` bitişi alır (doğru)
//   TAKVİM NOTU "30 Ocak 1667 (Jülyen) / 9 Şubat 1667 (Gregoryen)"
//   GEREKÇE     "(kesin gün kaynakta yok; üst sınır …)"
// Bunları çelişki saymak, `§11`in *"süzgeci kaldırmadan önce neyi
// KORUDUĞUNU oku"* dersinin ihlali olurdu: tasarımın izin verdiğini
// ihlal diye raporlamak — doğru şeyi ölçüp YANLIŞ EVRENDE bildirmek.
const rxAralik = /[–—]|\d\s*-\s*\d|\bile\b/;
const rxAciklama = /\(|Jülyen|Gregoryen|Rumî|Rumi|Muharrem|Safer|Receb|Şâban|Ramazan|türetil/i;

const ayCelisik = [], gunCelisik = [], tasarim = [];
for (const x of O) {
  const g = (x.r.gun || "").toString().trim();
  if (!g) continue;
  const m = rxTamGun.exec(g);
  if (!m) continue;
  const p = /^(\d{4})-(\d{2})-(\d{2})$/.exec(x.r.t);
  if (!p) continue;
  const gunNo = parseInt(m[1], 10);
  const ayNo = AYLAR.indexOf(m[2].toLowerCase()) + 1;
  const tAy = parseInt(p[2], 10), tGun = parseInt(p[3], 10);
  if (tAy === ayNo && tGun === gunNo) continue;          // uyuşuyor
  const sat = { t: x.r.t, gun: g, b: (x.r.b || "").toString().slice(0, 58) };
  if (rxAralik.test(g) || rxAciklama.test(g)) { tasarim.push(sat); continue; }
  if (tAy !== ayNo) ayCelisik.push(sat); else gunCelisik.push(sat);
}

console.log("\n" + "═".repeat(66));
console.log("🔴 SINIF B — `gun:` metni ile `t:` AYI ÇELİŞİYOR  (" + ayCelisik.length + ")");
console.log("   (keşif: KÜRE GÖRÜNÜM, 5 Eylül — orada 25'lik örneklemde 3 çıkmıştı)");
for (const s of ayCelisik.slice(0, 30))
  console.log("  " + s.t + "  gun:" + JSON.stringify(s.gun).padEnd(22) + " " + s.b);
if (ayCelisik.length > 30) console.log("  … " + (ayCelisik.length - 30) + " tane daha");

console.log("\n🟡 GÜN ÇELİŞİYOR (ay aynı)  (" + gunCelisik.length + ")");
for (const s of gunCelisik.slice(0, 20))
  console.log("  " + s.t + "  gun:" + JSON.stringify(s.gun).padEnd(22) + " " + s.b);
if (gunCelisik.length > 20) console.log("  … " + (gunCelisik.length - 20) + " tane daha");

console.log("\n🟢 TASARIM — aralık / takvim notu / gerekçe taşıyor, ÇELİŞKİ DEĞİL  (" +
            tasarim.length + ")");
for (const s of tasarim.slice(0, 6))
  console.log("  " + s.t + "  gun:" + JSON.stringify(s.gun).slice(0, 56));
if (tasarim.length > 6) console.log("  … " + (tasarim.length - 6) + " tane daha");

console.log("\n⚠️ BU TARAMA KAYNAĞA SORMAZ — kaydın İKİ ALANININ birbiriyle");
console.log("   uyuşup uyuşmadığını sorar. Bir çelişki HANGİ tarafın yanlış");
console.log("   olduğunu SÖYLEMEZ; `t:` de yanlış olabilir `gun:` de.");
console.log("   Her biri KAYNAĞINA sorulmadan değiştirilmez.");

console.log("\n⚠️ HÜKÜM YOK: 'şişmiş' bir kusur değil, bir BEYAN UYUMSUZLUĞU.");
console.log("   Çaresi `t:`yi bozmak değil — §4: tarih alanı kaynağın");
console.log("   desteklediği EN KABA GÜVENLİ düzeyi taşır, gerisi metinde durur.");

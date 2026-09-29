// ============================================================================
// ARAMA-0930 SINAVI — js/arama.js, DOM'suz, node
//   koş:  node denetim/ARAC-ARAMA-0930-SINAV.js
// ============================================================================
// 🔴 ÖNGÖRÜ ÖLÇÜMDEN ÖNCE YAZILDI (CLAUDE.md §11) ve sınav İKİ YÖNDE koşar:
// her ölçüt için hem TUTMASI gereken hem TUTMAMASI gereken bir madde var.
// Tek yönlü sınav "her şeye evet diyen" bir süzgeci temiz gösterir — bu
// projede tam o kusur yaşandı (boş küme her öngörüyü doğrular).
//
// ÖNGÖRÜ:
//   ① "mohaç macar"  → iki terim, İKİSİ de geçen madde TUTAR, biri eksikse TUTMAZ
//   ② tırnaklı ifade → tek terim sayılır; kelimeleri ayrı geçen madde TUTMAZ
//   ③ Türkçe: "istanbul" ile "İstanbul" AYNI (sgNorm), "IRAK" ile "ırak" aynı
//   ④ başlar/biter ALANIN TAMAMINA bakar, kelimeye değil
//   ⑤ "hepsi" alanında iki alanın UCU BİRLEŞMEZ (\u0001 ayracı)
//   ⑥ içermez, içerir'in tam TERSİ
//   ⑦ tam kelime: "mohac" tutar, "mohacta" (ekli) TUTMAZ — kasıtlı
//   ⑧ boş sorgu / boş ölçüt listesi SÜZMEZ (hepsi geçer)
//   ⑨ VEYA: bir ölçüt yeter · VE: hepsi gerekli
// ============================================================================
var A = require("../js/arama.js");

var gecti = 0, kaldi = 0, sira = 0;
function sina(ad, beklenen, olcum) {
  sira++;
  var ok = (beklenen === olcum);
  if (ok) { gecti++; } else { kaldi++; }
  console.log((ok ? "  ✓ " : "  ✗ ") + sira + ". " + ad
              + (ok ? "" : "   beklenen=" + beklenen + " ölçülen=" + olcum));
}

// ── sınav maddeleri ─────────────────────────────────────────────────────
var M1 = { t: "1526-08-29", b: "Mohaç Meydan Muharebesi",
           d: "Kanunî Sultan Süleyman Macar ordusunu bozguna uğrattı.",
           yer: "Mohaç", kisiler: "Kanunî Sultan Süleyman", gun: "29 Ağustos 1526" };
var M2 = { t: "1453-05-29", b: "İstanbul'un fethi",
           d: "Konstantiniyye alındı.", yer: "İstanbul", kisiler: "II. Mehmed",
           gun: "29 Mayıs 1453" };
var M3 = { t: "1541-08-29", b: "Budin", d: "Kalesi teslim alındı.",
           yer: "Budin", kisiler: "", gun: "1541" };
var HEPSI = [M1, M2, M3];

function basit(o, q) { return A.basitGecer(o, A.basitAyristir(q)); }
function ol(o, alan, op, metin) { return A.olcutGecer(o, { alan: alan, op: op, metin: metin }); }

console.log("── ① BASİT ARAMA — çok terim, hepsi geçmeli ──");
sina("iki terim de geçiyor → TUTAR",            true,  basit(M1, "mohaç macar"));
sina("terimlerden biri yok → TUTMAZ",              false, basit(M1, "mohaç venedik"));
sina("terimler AYRI ALANLARDA → TUTAR",            true,  basit(M1, "mohaç kanuni"));
sina("üç terim, hepsi var → TUTAR",              true,  basit(M1, "mohaç macar 1526"));
sina("boş sorgu → hepsi geçer",                  true,  basit(M2, "   "));

console.log("── ② TIRNAK — tek terim sayilir ──");
sina("tırnaklı ifade tam geçiyor → TUTAR",       true,  basit(M1, "\"meydan muharebesi\""));
sina("tırnaklı ifade böyle geçmiyor → TUTMAZ", false, basit(M1, "\"macar meydan\""));
sina("ayristirici terim sayısını doğru bölüyor", 2,
     A.basitAyristir("mohaç \"kanuni sultan\"").length);

console.log("── ③ TÜRKÇE KÜÇÜLTME (D215) ──");
sina("İstanbul ↔ istanbul",                        true,  basit(M2, "istanbul"));
sina("BÜYÜK harf sorgu da tutar",                  true,  basit(M2, "İSTANBUL"));
sina("Şapkalı/ekli: kanuni → TUTAR",              true,  basit(M1, "kanuni"));

console.log("── ④ BAŞLAR / BİTER — ALANIN tamamı ──");
sina("başlık 'mohaç' ile başlıyor",             true,  ol(M1, "b", "baslar", "mohaç"));
sina("başlık 'meydan' ile BAŞLAMIYOR",             false, ol(M1, "b", "baslar", "meydan"));
sina("başlık 'muharebesi' ile bitiyor",           true,  ol(M1, "b", "biter", "muharebesi"));
sina("başlık 'mohaç' ile BİTMİYOR",              false, ol(M1, "b", "biter", "mohaç"));
sina("tam eşit → TUTAR",                           true,  ol(M3, "b", "esit", "budin"));
sina("tam eşit, parça → TUTMAZ",                  false, ol(M1, "b", "esit", "mohaç"));

console.log("── ⑤ 'HEPSİ' — iki alanın UCU BİRLEŞMEZ ──");
// M3: b="Budin" · d="Kalesi teslim alındı." ⇒ "budin kalesi" HİÇBİR alanda geçmiyor
sina("bıtişik alanlar sahte eşleşme ÜRETMEZ",  false, ol(M3, "hepsi", "icerir", "budin kalesi"));
sina("aynı alan içinde ifade → TUTAR",            true,  ol(M1, "hepsi", "icerir", "meydan muharebesi"));

console.log("── ⑥ İÇERMEZ — içerir'in tersi ──");
sina("içerir: macar → TUTAR",                      true,  ol(M1, "d", "icerir", "macar"));
sina("içermez: macar → TUTMAZ",                    false, ol(M1, "d", "icermez", "macar"));
sina("içermez: venedik → TUTAR",                   true,  ol(M1, "d", "icermez", "venedik"));

console.log("── ⑦ TAM KELİME ──");
sina("tam kelime: mohaç (yer alanı) → TUTAR",     true,  ol(M1, "yer", "kelime", "mohaç"));
sina("tam kelime: moha → TUTMAZ (parça)",          false, ol(M1, "yer", "kelime", "moha"));
sina("içerir: moha → TUTAR (parça serbest)",      true,  ol(M1, "yer", "icerir", "moha"));

console.log("── ⑧ BOŞ ÖLÇÜT SÜZMEZ ──");
sina("boş metinli ölçüt → geçer",              true,  ol(M1, "b", "icerir", ""));
sina("boş ölçüt listesi → geçer",              true,  A.gelismisGecer(M1, [], "ve"));
sina("yalnız boş satırlar → geçer",             true,
     A.gelismisGecer(M1, [{ alan: "b", op: "icerir", metin: "" }], "ve"));

console.log("── ⑨ VE / VEYA ──");
var O_MOHAC = { alan: "b", op: "icerir", metin: "mohaç" };
var O_VENEDIK = { alan: "b", op: "icerir", metin: "venedik" };
sina("VE: biri tutmuyor → TUTMAZ",   false, A.gelismisGecer(M1, [O_MOHAC, O_VENEDIK], "ve"));
sina("VEYA: biri tutuyor → TUTAR",   true,  A.gelismisGecer(M1, [O_MOHAC, O_VENEDIK], "veya"));
sina("VEYA: hiçbiri tutmuyor → TUTMAZ", false,
     A.gelismisGecer(M2, [O_MOHAC, O_VENEDIK], "veya"));
sina("VE: ikisi de tutuyor → TUTAR", true,
     A.gelismisGecer(M1, [O_MOHAC, { alan: "d", op: "icerir", metin: "macar" }], "ve"));

console.log("── SAYAÇ ──");
sina("say(): 3 maddeden 1'i 'mohaç' içeriyor", 1,
     A.say(HEPSI, function (o) { return basit(o, "mohaç"); }));
sina("say(): boş sorgu → 3", 3,
     A.say(HEPSI, function (o) { return basit(o, ""); }));

console.log("\n" + (kaldi ? "✗ " : "✓ ") + gecti + " geçti · " + kaldi + " kaldı");
process.exit(kaldi ? 1 : 0);

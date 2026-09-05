// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Sisam Emâreti 1832-1912: ÖZERK VASAL PRENSLİK
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2818 ④ · 5 Eylül 2026
//
// SORUN: veri Sisam'ı 1479'dan 1912'ye kadar **433 yıl kesintisiz
// DOĞRUDAN Osmanlı** (`d:`) boyuyor. Oysa ada 1832'den beri özerkti.
//
// TDV `sisam` (200, gövde okundu) — birebir:
//   "10 Aralık 1832 tarihinde Batılı büyük devletlerin baskısı altında
//    kalan Osmanlı hükümeti Sisam adasının özerkliğini kabul etti ve
//    burası **VASAL BİR PRENSLİK** hâline getirildi"
//   "Adanın dış işlerinde Osmanlılar'a bağlılığı sürüyordu, ancak kendi
//    bayrağı ve koruyucu güçlerin himâyesinde iç işlerinde tamamen
//    bağımsız durumdaydı"
//   Ortodoks bir vali + meclis yönetti; Osmanlı garnizon tuttu ama
//   prensi KENDİ TAYİN ETMEDİ
//
// ⇒ ÖZERK + OSMANLI HÜKÜMRANLIĞI = `v:` — Şarkî Rumeli ve Girit'te
//   bu gece kurulan kalıbın birebir aynısı.
//
// 🟢 VE BU YOL KÜNYE DE RENK DE GEREKTİRMİYOR: `v:` kimlik taşımaz.
//    (`sisam-emareti` diye bir künye ARANDI ve YOK — ama gerekmiyor.
//     `polonya-erken`i bloke eden renk şartı burada DOĞMUYOR.)
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_SISAM = [

  {
    ad: "Sisam",
    d: [
      { f: "1479-01-25", t: "1832-12-10" }
    ],
    v: [
      { f: "1832-12-10", t: "1912-03-13" }
    ],
    s: [
      { f: "1281-01-01", t: "1479-01-25", d: "ceneviz" },
      { f: "1912-03-13", t: "1923-10-29", d: "yunanistan" }
    ],
    kaynak: "sisam"
  }

];

// ═══════════════════════════════════════════════════════════════════
// 🔴 DOKUNMADIĞIM TARİH — VE SEBEBİ BİR ÇELİŞKİ SANDIĞIM ŞEYİN
//    ÇELİŞKİ ÇIKMAMASI
//
// TDV: "Balkan savaşları sonunda Sisam adası Yunanistan ile BİRLEŞTİ
//       (11 Kasım 1912)"
// Veri: `s:yunanistan` **1912-03-13**'ten
//
// İlk bakışta 8 aylık bir çelişki. AMA çekirdek kronolojide o günün
// KENDİ maddesi var, 0 gün uzaklıkta:
//     `1912-03-13`  **"Sisam'ın Osmanlı idaresinden çıkışı"**
//
// ⇒ İkisi FARKLI OLAY olabilir ve muhtemelen öyle:
//     1912-03-13  Osmanlı İDARESİNDEN çıkış (Sisam ayaklanması)
//     1912-11-11  Yunanistan ile BİRLEŞME
//   *"Osmanlı idaresinden çıktı"* ile *"Yunanistan'a katıldı"* aynı
//   şey değildir — ve bu gece Karaağaç'ta öğrenilen ayrımın aynısı:
//   ***"X bıraktı" demek "Y'nin elindeydi" demek DEĞİLDİR.***
//
// 🟡 AMA ARADAKİ 8 AY ÖLÇÜLMEDİ: veri o aralıkta `yunanistan` diyor,
//    TDV ise birleşmeyi Kasım'a koyuyor. Arada ada ne idi?
//    **ÖLÇMEDİM** — ve tek bir TDV cümlesiyle, kendi maddesi olan bir
//    günü değiştirmem.
//
// 🟢 EMSAL: `1912-11-11` atlasta ZATEN kullanılıyor — Sakız ve İpsara
//    o gün Yunanistan'a geçiyor. Yani proje o günü BİLİYOR ve Sisam
//    için BAŞKA bir gün seçmiş. Bu bir hata değil, bir AYRIM olabilir.
//
// ⚠️ YENİ KIRILMA: `1832-12-10`. Çekirdekte ±30 günde madde VAR (11 gün:
//    "Konya Meydan Muharebesi") ⇒ Değişmez 2 SAYISAL olarak geçer.
//    🔴 AMA ALAKASIZ — `§2`nin "değişim, o güne rastgele denk gelen
//    alakasız bir maddenin altında belirir" kusuru.
//    ⇒ `denetim/KRONOLOJI-SISAM-0905.json` ile bir madde yazıldı.
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Oniki Ada 1912-1923: İTALYAN İŞGALİ (devir DEĞİL)
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2814 ④ · 5 Eylül 2026
//
// TDV `oniki-ada` (200, gövde okundu) — birebir:
//   "İtalya 28 Nisan - 20 Mayıs 1912 tarihleri arasında … toplam on altı
//    adayı İŞGAL ETTİ"
//   Uşi (15-18 Ekim 1912): "Osmanlılar'ın Trablusgarp'tan çekilmesi
//    hâlinde İtalya işgal ettiği adaları KAYITSIZ ŞARTSIZ BOŞALTACAKTI"
//   🔴 "Böylece … Osmanlı Devleti'nin adalar üzerindeki EGEMENLİK
//      HAKLARI KALDIRILMAMIŞ OLDU"
//   devir: "Lozan Barış Antlaşması … 24 Temmuz 1923'te imzalandı"
//
// ⇒ TRABLUSGARP'IN TERSİ, ve AYNI ANTLAŞMADA:
//     Trablusgarp  Uşi'de "TERKETTİĞİNİ KABUL ETTİ"   → devir  → `s:`
//     Oniki Ada    Uşi'de "KAYITSIZ ŞARTSIZ BOŞALTACAKTI" → işgal → `isg:`
//   📌 Bir antlaşma bir yeri DEVREDİP ötekini GEÇİCİ bırakabilir —
//      ve Uşi tam bunu yapmış.
//
// 🔴 VE KRONOLOJİ ZATEN "İŞGAL" DİYOR, harita "italya sahipliği" boyuyor:
//    çekirdekte `1912-05-04` "Rodos'un İtalyan İŞGALİ"
//                `1912-05-12` "Onikiada'nın İtalyan İŞGALİ"
//                `1912-05-21` "İstanköy'ün İŞGALİ"
//    Girit'te bulduğumun ÜÇÜNCÜ vakası: madde doğru, gövde yanlış.
//
// ⚠️ `italya` bugüne kadar `isg:` kimliği olarak HİÇ kullanılmadı (0/98).
//    Ama ŞEKİL emsalli: `OSMANLI + isg:` deseni 39 vakada var.
//    Yeni olan kimlik, desen değil.
//
// ⚠️ Her adanın KENDİ işgal günü korundu (veri TDV'den daha granüler:
//    05-04 Rodos · 05-12 on ada · 05-21 İstanköy — üçü de TDV'nin
//    "28 Nisan - 20 Mayıs" bandında ya da bir gün dışında).
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_ONIKIADA = [
  {
    ad: "Rodos",
    // işgal günü: 1912-05-04 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-04", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "İstanköy",
    // işgal günü: 1912-05-21 (veriden)
    d: [
      { f: "1523-01-05", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1523-01-05", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-21", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Kelemez (Kalimnos)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1523-01-05", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1523-01-05", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Batnoz (Patmos)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1537-10-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1453-05-29", d: "bizans" },
      { f: "1453-05-29", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "İleryoz (Leros)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1523-01-05", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1523-01-05", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Sömbeki (Simi)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "İlyaki (Tilos)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "İncirli (Nisiros)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "İstanbulya (Astipalya)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1537-10-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1537-10-01", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Herke (Halki)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Lindos",
    // işgal günü: 1912-05-04 (veriden)
    d: [
      { f: "1522-12-21", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1310-08-15", d: "bizans" },
      { f: "1310-08-15", t: "1522-12-21", d: "sovalye" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-04", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Karpatos",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1537-10-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1537-10-01", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  },

  {
    ad: "Kaşot (Kasos)",
    // işgal günü: 1912-05-12 (veriden)
    d: [
      { f: "1537-10-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1537-10-01", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "italya" }
    ],
    isg: [ { f: "1912-05-12", t: "1923-07-24", d: "italya" } ],
    kaynak: "oniki-ada"
  }

];

// ═══════════════════════════════════════════════════════════════════
// DOKUNULMAYANLAR — ve KONTROL EDİLDİ
//
// ⚪ Bodrum · Datça · Marmaris · Milas · Balat: ANADOLU ANAKARASI,
//    `d:` 1923-10-29'a kadar sürüyor ve DOĞRU. (Kaba kutu bunları
//    Oniki Ada sanmıştı — ad kümesi kurmamın sebebi.)
// ⚪ Fornoz (Fourni) · Nikarya (İkarya): 1912-07-17'de YUNANİSTAN'a
//    geçiyorlar — Oniki Ada değil, Balkan Savaşı'nda Yunan işgali.
//    AYRI VAKA, dokunulmadı.
// ⚪ Kaşot · Meis · Kerpe: atlasta BULUNAMADI (ad araması) — TDV
//    Kerpe'yi işgal listesinde anıyor. Nokta eksikliği olabilir,
//    ÖLÇMEDİM.
// ═══════════════════════════════════════════════════════════════════

// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Ege adaları 1912: YUNAN İŞGALİ (devir 1923'te)
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2816 · 5 Eylül 2026
//
// TDV `limni` (200, gövde okundu) — birebir:
//   "Limni 21 Ekim 1912'de Yunanlılar tarafından **İŞGAL EDİLDİ**"
//   "Daha sonra **Lozan Antlaşması'yla** ada Yunanistan'a **BIRAKILDI**"
//
// ⇒ ONİKİ ADA DESENİNİN AYNISI, farklı işgalciyle:
//     işgal 1912 → resmî devir Lozan (24 Temmuz 1923)
//   Atlas ise 1912'yi bir SAHİPLİK başlangıcı olarak boyuyor.
//
// ⚠️ TARİH FARKI ÖLÇÜLDÜ, DÜZELTİLMEDİ: veri Limni'yi `1912-10-08`de
//    veriyor, TDV **21 Ekim 1912** diyor — 13 gün. Her noktanın KENDİ
//    veri günü korundu (öteki adalar için TDV gün vermiyor; birini
//    değiştirip ötekileri bırakmak tutarsızlık üretirdi). AYRI KALEM.
//
// 🔴 DIŞARIDA BIRAKILANLAR — üç grup, üç sebep (yamanın sonunda)
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_EGEADALARI = [
  {
    ad: "Limni",
    // işgal günü: 1912-10-08 (veriden)
    d: [
      { f: "1479-01-25", t: "1656-08-21" },
      { f: "1657-11-15", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1479-01-25", d: "bizans" },
      { f: "1656-08-21", t: "1657-11-15", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-08", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Bozbaba (Ay Strati)",
    // işgal günü: 1912-10-08 (veriden)
    d: [
      { f: "1479-01-25", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1479-01-25", d: "bizans" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-08", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Taşoz",
    // işgal günü: 1912-10-18 (veriden)
    d: [
      { f: "1455-01-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1455-01-01", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-18", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Semadirek",
    // işgal günü: 1912-10-19 (veriden)
    d: [
      { f: "1456-01-24", t: "1656-07-13" },
      { f: "1657-11-15", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1456-01-24", d: "ceneviz" },
      { f: "1656-07-13", t: "1657-11-15", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-10-19", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Sakız",
    // işgal günü: 1912-11-11 (veriden)
    d: [
      { f: "1566-04-14", t: "1694-09-21" },
      { f: "1695-02-22", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1566-04-14", d: "ceneviz" },
      { f: "1694-09-21", t: "1695-02-22", d: "venedik" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-11", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "İpsara (Psara)",
    // işgal günü: 1912-11-11 (veriden)
    d: [
      { f: "1566-04-14", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1566-04-14", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-11", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Midilli",
    // işgal günü: 1912-11-21 (veriden)
    d: [
      { f: "1462-09-17", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1462-09-17", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-21", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Molova (Molyvos)",
    // işgal günü: 1912-11-21 (veriden)
    d: [
      { f: "1462-09-17", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1462-09-17", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-11-21", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Fornoz (Fourni)",
    // işgal günü: 1912-07-17 (veriden)
    d: [
      { f: "1521-01-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1521-01-01", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-07-17", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  },

  {
    ad: "Nikarya (İkarya)",
    // işgal günü: 1912-07-17 (veriden)
    d: [
      { f: "1521-01-01", t: "1923-07-24" }
    ],
    s: [
      { f: "1281-01-01", t: "1362-01-01", d: "bizans" },
      { f: "1362-01-01", t: "1521-01-01", d: "ceneviz" },
      { f: "1923-07-24", t: "1923-10-29", d: "yunanistan" }
    ],
    isg: [ { f: "1912-07-17", t: "1923-07-24", d: "yunanistan" } ],
    kaynak: "limni"
  }

];

// ═══════════════════════════════════════════════════════════════════
// DIŞARIDA BIRAKILANLAR
//
// 🔴 ① BOZCAADA + İMROZ — TDV VERİYLE ÇELİŞİYOR, ayrı rapor:
//    veri: `s:yunanistan` 1912 → **1913-11-01**, sonra `d:` 1923'e kadar
//    TDV `bozcaada`: "1912'de Rumlar'ın eline geçti" · Sevr md. 84 ile
//    Yunanistan'a bırakıldı · **"20 Eylül 1923'te kurtarıldı"**
//    ⇒ TDV adayı 1912-1923 arası YUNAN elinde gösteriyor; veri
//      1913-11-01'de Osmanlı'ya döndürüyor. ON YIL fark.
//    ⇒ Bu bir ALAN SEÇİMİ hatası DEĞİL, bir OLGU çelişkisi.
//      Tek bir TDV cümlesiyle on yıllık bir kaydı devirmem.
//      BİLDİRİLDİ, YAZILMADI.
//
// 🟡 ② SİSAM — 1832'den beri ÖZERK Sisam Emâreti (Osmanlı hükümranlığı).
//    `1912-03-13` günü öteki adaların hiçbirine benzemiyor. Özerk
//    beylik → Yunanistan geçişi AYRI bir kalıp (Girit/Şarkî Rumeli
//    sınıfı olabilir). ÖLÇMEDİM.
//
// ⚪ ③ ANAKARA (Selanik · Yanya · Drama · Kavala · Serez · Preveze ·
//    Karaferye · Kılkış · Lanzaka · Vodina · Yenice-i Vardar ·
//    Aynaroz · Kesendire · Aydonat · Filat · Margiliç · Parga ·
//    Souli · İgumenitsa · Praviște — 20 nokta)
//    Bunlar Londra (30 Mayıs 1913) ve Bükreş (10 Ağustos 1913)
//    antlaşmalarıyla DEVREDİLDİ — Trablusgarp sınıfı, `s:` DOĞRU
//    olabilir. Ama veri günleri İŞGAL günleri (1912-10/11, 1913-03/06),
//    devir günleri değil. AYRI SORU, ÖLÇMEDİM.
// ═══════════════════════════════════════════════════════════════════

// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_ROMANYA — parti-emrelic-0039/H-0006, "Romanya iki parça çiziliyor"
// window.YER_YAMA_ROMANYA   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: UYGULAMA-3 · 30 Ağustos 2026 · koordinatör ORHANGAZİ (M-1749)
// ═══════════════════════════════════════════════════════════════════════
//
// TEŞHİS (ORHANGAZİ'nin ölçümü, BEN DOĞRULADIM — kural ①):
//   devletler.js künyeleri:
//     romanya            f:1859-01-24  t:1881-03-26
//     romanya-kralligi   f:1881-03-26  t:1923-10-29
//   Ama veride "romanya" kimliği taşıyan 20 yerleşimin HEPSİ bu kayıtları
//   1923-10-29'a kadar "romanya" ile taşıyordu — künyenin 1881-03-26'da
//   bittiğinden 42 yıl SONRASINA kadar. İki kimlik = iki renk (`harita:`
//   ikisi de "romanya" ama farklı `id:` farklı renk üretebiliyor) = harita
//   Romanya'yı iki parça gösteriyor. Değişmez 4 (hayalet kimlik) ihlali.
//
// DOĞRULAMA (kendi ölçümüm, `girdi.yukle()` ile taban taraması):
//   `d:"romanya"` VE `t > "1881-03-26"` şartını sağlayan kayıt: 20/20 —
//   ORHANGAZİ'nin 28 nokta örneklemesi (Bükreş·Yaş·Roman·Bârlad·Kalas·
//   İbrail) ile TUTARLI, ben TÜM TABANI (2610 nokta, 57 dosya) taradım ve
//   tam liste bu: Bükreş, Yaş, Roman, Birlad (Bârlad), Kalas (Galatz),
//   İbrail, Köstence, Tırgovişte, Piteşti, Slatina, Buzău, Rimnik-i Sârat
//   (Râmnicu Sărat), Krayova (Craiova), Tırgu Jiu, Rimnik (Râmnicu Vâlcea),
//   Turnu Severin, Kımpulung (Câmpulung), Yergöğü (Giurgiu), Babadağı
//   (Babadag), İshakçı (Isaccea).
//
// ÇARE: her kayıtta yalnız "romanya" DÖNEMİ 1881-03-26'dan bölünüp ikinci
// yarı "romanya-kralligi"ye çevrildi. 1881 ÖNCESİ (eflak/bogdan/bulgaristan/
// suleyman-celebi/musa-celebi/avusturya/rusya dönemleri) HİÇ DOKUNULMADI —
// tam `s:` dizisi korunarak yeniden yazıldı (applier field-level replace
// yaptığı için eksik dizi vermek diğer dönemleri SİLERDİ).
//
// ⚠️ DEĞİŞMEZ 2s KONTROLÜ: 1881-03-26 için külliyatta (`olaylar*.js`) HİÇ
// madde YOK (grep sıfır sonuç) — Romanya'nın krallık ilanı (Kral I. Carol,
// 26 Mart 1881) kronolojide hiç yazılmamış. Bu YENİ bir açık kırılma günü
// olabilir — KOORDİNATÖRE BİLDİRİLDİ (kendi teklifi: "yoksa bana bildir,
// madde yazdırırım"). Kronoloji maddesi benim dosyam değil, yazmadım.
//
// 🔒 KOŞU CANLI — bu kayıtlar `arac/`e dokunmuyor, bir sonraki koşuya girer.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_ROMANYA = [

  {
    ad: "Bükreş",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Yaş",
    s: [
      { f: "1281-01-01", t: "1456-06-01", d: "bogdan" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Roman",
    s: [
      { f: "1281-01-01", t: "1456-06-01", d: "bogdan" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Birlad (Bârlad)",
    s: [
      { f: "1281-01-01", t: "1456-06-01", d: "bogdan" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Kalas (Galatz)",
    s: [
      { f: "1281-01-01", t: "1456-06-01", d: "bogdan" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "İbrail",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1829-09-14", t: "1859-01-24", d: "eflak" },
      { f: "1859-01-24", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Köstence",
    s: [
      { f: "1281-01-01", t: "1393-09-01", d: "bulgaristan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Tırgovişte",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Piteşti",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Slatina",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Buzău",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Rimnik-i Sârat (Râmnicu Sărat)",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Krayova (Craiova)",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1718-07-21", t: "1739-09-18", d: "avusturya" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Tırgu Jiu",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1718-07-21", t: "1739-09-18", d: "avusturya" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Rimnik (Râmnicu Vâlcea)",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1718-07-21", t: "1739-09-18", d: "avusturya" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Turnu Severin",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1718-07-21", t: "1739-09-18", d: "avusturya" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Kımpulung (Câmpulung)",
    s: [
      { f: "1281-01-01", t: "1462-06-01", d: "eflak" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Yergöğü (Giurgiu)",
    s: [
      { f: "1281-01-01", t: "1420-01-01", d: "eflak" },
      { f: "1427-01-01", t: "1449-01-01", d: "eflak" },
      { f: "1810-09-27", t: "1829-09-14", d: "rusya" },
      { f: "1829-09-14", t: "1859-01-24", d: "eflak" },
      { f: "1859-01-24", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "Babadağı (Babadag)",
    s: [
      { f: "1281-01-01", t: "1393-09-01", d: "bulgaristan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  },

  {
    ad: "İshakçı (Isaccea)",
    s: [
      { f: "1281-01-01", t: "1393-09-01", d: "bulgaristan" },
      { f: "1402-07-28", t: "1410-02-13", d: "suleyman-celebi" },
      { f: "1410-02-13", t: "1410-06-15", d: "musa-celebi" },
      { f: "1410-06-15", t: "1411-02-17", d: "suleyman-celebi" },
      { f: "1411-02-17", t: "1413-07-05", d: "musa-celebi" },
      { f: "1878-07-13", t: "1881-03-26", d: "romanya" },
      { f: "1881-03-26", t: "1923-10-29", d: "romanya-kralligi" }
    ]
  }

];

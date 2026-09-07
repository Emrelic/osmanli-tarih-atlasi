// -*- coding: utf-8 -*-
// YER_YAMA_KID20_0907 — `v:` donemlerine `kid` ve `statu` TAMAMLAMASI
// Uretildi: denetim/ARAC-KID-YAMA-URET-0907.py · 7 Eylul 2026 · 1.MURAT
//
// NICIN: HUKUM-VASSAL-GORUNUM-0906.md tabi govdelere etiket koyuyor
//   ({kunye adi} + " (" + {statu} + ")"). Motor tarafi yazildi
//   (`uret_petek.py` -> `donemler.js` `vl` capa listesi), ama ETIKET
//   ICERIGI olculunce AYNI POLITY IKI ETIKET urettigi cikti:
//       Bogdan Voyvodaligi  +  Bogdan Voyvodaligi (Moldavia)
//   Sebep KISMI KAPSAMA: 272/429 doneme `kid` yazilmis, kalanina
//   yazilmamis ⇒ gruplama ikiye boluyor.
//
// DAYANAK — VERININ KENDI SOZLUGU, arastirma DEGIL:
//   Ayni `k` metnini tasiyan BASKA donemlerde `kid` zaten yazili ve
//   TEK ANLAMLI (14 metin, COK ANLAMLI 0 — kontrol edildi, betik
//   cok anlamli bulursa DURUYOR). Bir tutarlilik tamamlamasi.
//   🔴 Kunye `ad`i ile `k` metni arasinda BENZERLIK ARANMADI —
//     `§4`: 'ad benzerligi esanlam DEGILDIR'.
//
// `statu` de dolduruluyor: hukum '`v:` katmaninin TANIMI zaten
//   tabiiyet ⇒ her donem en azindan statu:"vassal"dir, 429/429
//   kapsama, ARASTIRMASIZ' diyor. Inceltme (ozerk · himaye ·
//   haracguzar · ocaklik) AYRI ve KAYNAKLI bir is.
//
// OLCULEN ETKI: 1683-07-14 etiket 12 -> 10 (Bogdan · Eflak birlesiyor)
// ⚠️ KALAN MUKERRER: 'Orta Macar Kralligi (Tokoli Imre)' ile
//   'Orta Macar Kralligi — Ilona Zrinyi...' — 81 ARASTIRMA kovasinda.
// ═══════════════════════════════════════════════════════════════════
window.YER_YAMA_KID20_0907 = [
  {
    "ad": "Sofya",
    "v": [
      {
        "f": "1878-01-04",
        "t": "1908-10-05",
        "k": "Bulgaristan Prensliği",
        "statu": "vassal",
        "kid": "bulgaristan-prensligi"
      }
    ]
  },
  {
    "ad": "Bükreş",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Yaş",
    "v": [
      {
        "f": "1456-06-01",
        "t": "1878-07-13",
        "k": "Boğdan Voyvodalığı",
        "statu": "vassal",
        "kid": "bogdan"
      }
    ]
  },
  {
    "ad": "Roman",
    "v": [
      {
        "f": "1456-06-01",
        "t": "1878-07-13",
        "k": "Boğdan Voyvodalığı",
        "statu": "vassal",
        "kid": "bogdan"
      }
    ]
  },
  {
    "ad": "Birlad (Bârlad)",
    "v": [
      {
        "f": "1456-06-01",
        "t": "1878-07-13",
        "k": "Boğdan Voyvodalığı",
        "statu": "vassal",
        "kid": "bogdan"
      }
    ]
  },
  {
    "ad": "Kalas (Galatz)",
    "v": [
      {
        "f": "1456-06-01",
        "t": "1878-07-13",
        "k": "Boğdan Voyvodalığı",
        "statu": "vassal",
        "kid": "bogdan"
      }
    ]
  },
  {
    "ad": "Süveyş",
    "v": [
      {
        "f": "1805-07-03",
        "t": "1914-12-18",
        "k": "Kavalalı hanedanı",
        "kid": "misir-kavalali",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Kutaisi",
    "v": [
      {
        "f": "1555-05-29",
        "t": "1810-02-20",
        "k": "İmereti krallığı (tâbi)",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Kuveyt",
    "v": [
      {
        "f": "1795-04-01",
        "t": "1871-01-01",
        "k": "Sabah emirliği (Osmanlı himayesinde)",
        "statu": "vassal"
      },
      {
        "f": "1871-01-01",
        "t": "1914-11-22",
        "k": "Sabah emirliği (Osmanlı kazâsı)",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Doha (Katar)",
    "v": [
      {
        "f": "1871-09-20",
        "t": "1913-07-29",
        "k": "Sânî emirliği (Osmanlı kazâsı)",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Sina güneyi",
    "v": [
      {
        "f": "1805-07-03",
        "t": "1867-06-08",
        "k": "Mısır valiliği (Kavalalı hanedanı)",
        "statu": "vassal"
      },
      {
        "f": "1867-06-08",
        "t": "1914-12-18",
        "k": "Mısır Hidivliği",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Tırgovişte",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Piteşti",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Slatina",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Buzău",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Rimnik-i Sârat (Râmnicu Sărat)",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Krayova (Craiova)",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1718-07-21",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      },
      {
        "f": "1739-09-18",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Tırgu Jiu",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1718-07-21",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      },
      {
        "f": "1739-09-18",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Rimnik (Râmnicu Vâlcea)",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1718-07-21",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      },
      {
        "f": "1739-09-18",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Turnu Severin",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1718-07-21",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      },
      {
        "f": "1739-09-18",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Kımpulung (Câmpulung)",
    "v": [
      {
        "f": "1462-06-01",
        "t": "1878-07-13",
        "k": "Eflak Voyvodalığı",
        "statu": "vassal",
        "kid": "eflak"
      }
    ]
  },
  {
    "ad": "Kusayr",
    "v": [
      {
        "f": "1805-07-03",
        "t": "1914-12-18",
        "k": "Kavalalı hanedanı",
        "kid": "misir-kavalali",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Sefâce",
    "v": [
      {
        "f": "1805-07-03",
        "t": "1914-12-18",
        "k": "Kavalalı hanedanı",
        "kid": "misir-kavalali",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Tûr (Sînâ)",
    "v": [
      {
        "f": "1805-07-03",
        "t": "1914-12-18",
        "k": "Kavalalı hanedanı",
        "kid": "misir-kavalali",
        "statu": "vassal"
      }
    ]
  },
  {
    "ad": "Yagodina (Jagodina)",
    "v": [
      {
        "f": "1830-11-08",
        "t": "1878-07-13",
        "statu": "vassal"
      }
    ]
  }
];

// data/etiket_yama.js — KONU ETIKETI ONERILERI
// OPUS HAZIR KITA 87 · 25 Agustos 2026 · OSMANGAZI sevkiyle
//
// 🔴 ONERIDIR, VERI DEGIL. Motor okumaz, index.html'e EKLENMEZ.
//    Uygulamayi koordinator yapar (olaylar*.js · kronoloji_*.js · suzgec.js onda).
//
// 🔴 YENI GRUP ACILMADI. CLAUDE.md §1.6 konu basliklarini 8. BOYUT sayiyor ve
//    KASTEN KAPALI tutuyor; suzgec.js 23 Agustos'ta ayni karari verip gerekcesini
//    yazmis. Buradaki her esleme VAR OLAN bir `k:` degerine ve VAR OLAN bir gruba
//    baglaniyor. Yeni olan tek sey `etiket:` ekseninde (Emre'nin acikca istedigi
//    darbe/islahat etiketleri) — o eksen ZATEN cok degerli ve grup DEGIL.
//
// 🔴 MIMARI: SEMSIYE (kullanici GORUR, alti tane) → ETIKET (veride durur, ince,
//    BIRDEN COK semsiyeye ait olabilir). Semsiyeler `etiket:` ekseni uzerine
//    kurulu — `k:` uzerine DEGIL. Gerekcesi suzgec.js'in kendi yorumunda yazili:
//    "k: gruplar, etiket: kesisir". Yeni alan ICAT EDILMEDI; `etiket:` alani
//    6064 maddenin 6061'inde ZATEN dolu.
//
// BOLUMLER
//   semsiye_tablosu   alti semsiye · her birinde ①madde ②YALNIZ o semsiyede
//   kesisen_etiketler bir etiketin birden cok semsiyede oldugu yerler
//   normalizasyon     yazim/esanlam birlestirme sozlugu (etiket ekseni icin)
//   sozluk_koprusu    kronoloji_*.js'in `tur:` degeri → var olan `k:` → grup
//   yazim_birlestirme yazim/esanlam ciftleri (hayalet kutu ureten)
//   darbe             198 aday OKUNARAK ayrildi; uc kova + iki eleme
//   islahat           213 etiketsiz aday; uc sinavla EVET/TARTISILIR/HAYIR
//
// ⚠️ `darbe-degil` ve `islahat-HAYIR` kovalari yamaya GIRMEDI — eleme
//    sonucudur, etiket onerisi degil. Sayilari `olcum` bolumunde duruyor.//
// ── IKINCI TUR (25 Agustos, Emre'nin dort karari) ──────────────────────
//   imar                     yeni etiket · altyapi (islahat+imar) / olagan (yalniz imar)
//   isyan_darbe_elemesinden  darbe-degil kovasindan cikan 16 ISYAN kaydi
//   kriz_dagitimi            tur:"kriz" 67 kayit OKUNDU ve dagitildi
//   semsiye_tablosu          artik YAMA UYGULANMIS hali gosteriyor
//                            (yama_oncesi sayilari da her satirda duruyor)
window.ETIKET_YAMA = {
 "semsiye_tablosu": [
  {
   "id": "askeri",
   "ad": "Askerî",
   "etiket": [
    "savas",
    "kusatma",
    "sefer",
    "fetih",
    "kayip",
    "toprak-kazanc",
    "toprak-kayip",
    "denizcilik",
    "serhat",
    "hacli",
    "askeri-islahat",
    "antlasma",
    "ittifak",
    "yikim"
   ],
   "madde": 2977,
   "yalniz": 1462,
   "ayirt_edicilik": 49,
   "madde_yama_oncesi": 2974,
   "yalniz_yama_oncesi": 1479
  },
  {
   "id": "siyasi",
   "ad": "Siyasî",
   "etiket": [
    "siyaset",
    "antlasma",
    "diplomasi",
    "ittifak",
    "vassal",
    "bolunme",
    "milliyetcilik",
    "koloni",
    "suikast"
   ],
   "madde": 2162,
   "yalniz": 325,
   "ayirt_edicilik": 15,
   "madde_yama_oncesi": 2150,
   "yalniz_yama_oncesi": 359
  },
  {
   "id": "hanedan",
   "ad": "Hânedan",
   "etiket": [
    "taht",
    "culus",
    "hal",
    "olum",
    "dogum",
    "evlilik",
    "darbe",
    "darbe-askeri",
    "darbe-siyasi",
    "taht-kavgasi",
    "suikast",
    "sadrazam",
    "kurulus",
    "son",
    "saray"
   ],
   "madde": 1241,
   "yalniz": 267,
   "ayirt_edicilik": 22,
   "madde_yama_oncesi": 1191,
   "yalniz_yama_oncesi": 270
  },
  {
   "id": "icduzen",
   "ad": "İç düzen",
   "etiket": [
    "isyan",
    "reform",
    "islahat",
    "kanun",
    "idari",
    "sosyal",
    "kriz",
    "askeri-islahat",
    "egitim",
    "imar"
   ],
   "madde": 1674,
   "yalniz": 208,
   "ayirt_edicilik": 12,
   "madde_yama_oncesi": 1435,
   "yalniz_yama_oncesi": 219
  },
  {
   "id": "kultur",
   "ad": "Kültür-bilim",
   "etiket": [
    "kultur",
    "bilim",
    "kesif",
    "mimari",
    "spor",
    "felsefe",
    "din",
    "egitim",
    "sosyal",
    "salgin",
    "imar"
   ],
   "madde": 1461,
   "yalniz": 444,
   "ayirt_edicilik": 30,
   "madde_yama_oncesi": 1396,
   "yalniz_yama_oncesi": 595
  },
  {
   "id": "iktisat",
   "ad": "İktisat",
   "etiket": [
    "ekonomi"
   ],
   "madde": 486,
   "yalniz": 81,
   "ayirt_edicilik": 17,
   "madde_yama_oncesi": 486,
   "yalniz_yama_oncesi": 95
  },
  {
   "id": "diger",
   "ad": "Sınıflandırılmamış",
   "etiket": [],
   "madde": 20,
   "yalniz": 20,
   "ayirt_edicilik": 100,
   "madde_yama_oncesi": 21,
   "yalniz_yama_oncesi": 21
  }
 ],
 "kesisen_etiketler": [
  {
   "etiket": "askeri-islahat",
   "semsiye": [
    "askeri",
    "icduzen"
   ]
  },
  {
   "etiket": "antlasma",
   "semsiye": [
    "askeri",
    "siyasi"
   ]
  },
  {
   "etiket": "ittifak",
   "semsiye": [
    "askeri",
    "siyasi"
   ]
  },
  {
   "etiket": "suikast",
   "semsiye": [
    "siyasi",
    "hanedan"
   ]
  },
  {
   "etiket": "sosyal",
   "semsiye": [
    "icduzen",
    "kultur"
   ]
  },
  {
   "etiket": "egitim",
   "semsiye": [
    "icduzen",
    "kultur"
   ]
  },
  {
   "etiket": "imar",
   "semsiye": [
    "icduzen",
    "kultur"
   ]
  }
 ],
 "normalizasyon": {
  "toprak-kazanci": "toprak-kazanc",
  "toprak-kaybi": "toprak-kayip",
  "ayaklanma": "isyan",
  "idare": "idari",
  "iktisadi": "ekonomi",
  "iktisat": "ekonomi",
  "siyasi": "siyaset",
  "dini": "din",
  "hukuki": "hukuk",
  "kultur-sanat": "kultur",
  "sanat": "kultur",
  "sosyoloji": "sosyal",
  "ic-karisiklik": "isyan",
  "ic-savas": "isyan",
  "hukumdar": "taht",
  "hanedan": "taht",
  "yikilis": "son",
  "tabiiyet": "vassal",
  "itaat": "vassal",
  "askeri": "savas",
  "deniz": "denizcilik",
  "toprak": "toprak-kazanc",
  "taht-degisikligi": "culus",
  "baskent": "idari",
  "sehircilik": "mimari",
  "teknoloji": "bilim",
  "anayasa": "kanun",
  "hukuk": "kanun",
  "isgal": "fetih",
  "birlesme": "siyaset",
  "bolunme": "bolunme",
  "mali": "ekonomi",
  "finans": "ekonomi",
  "ticaret": "ekonomi",
  "demografi": "sosyal",
  "goc": "sosyal",
  "egitim": "egitim",
  "salgin": "salgin",
  "felaket": "salgin",
  "olum": "olum",
  "dogum": "dogum",
  "evlilik": "evlilik",
  "kesif": "kesif",
  "edebiyat": "kultur"
 },
 "olcum": {
  "tarih": "2026-08-25",
  "ana_madde": 1226,
  "yabanci_madde": 4838,
  "yabanci_tur_degeri": 60,
  "baglanan": 4706,
  "baglanamayan": 132,
  "darbe_aday": 198,
  "darbe_askeri": 35,
  "darbe_siyasi": 26,
  "taht_kavgasi": 32,
  "suikast": 35,
  "darbe_degil": 70,
  "islahat_etiketsiz_aday": 213,
  "islahat_evet": 64,
  "islahat_tartisilir": 22,
  "islahat_hayir": 127,
  "semsiye_uyeligi": 9653,
  "cok_semsiyeli_madde": 3026,
  "siniflandirilmamis_bugun": 4890,
  "siniflandirilmamis_yama_sonrasi": 21,
  "imar_aday": 362,
  "imar_altyapi": 69,
  "imar_olagan": 179,
  "imar_elenen": 114,
  "kriz_dagitilan": 67,
  "kriz_atanmamis": 0,
  "isyan_elemeden": 16,
  "semsiye_uyeligi_yama_sonrasi": 10021,
  "cok_semsiyeli_yama_sonrasi": 3257
 },
 "sozluk_koprusu": [
  {
   "tur": "savas",
   "k": "savas",
   "grup": "askeri",
   "adet": 812,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "hukumdar",
   "k": "taht",
   "grup": "hanedan",
   "adet": 418,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "antlasma",
   "k": "antlasma",
   "grup": "siyasi",
   "adet": 315,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kultur",
   "k": "kultur",
   "grup": "kultur",
   "adet": 271,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "toprak-kazanc",
   "k": "fetih",
   "grup": "askeri",
   "adet": 236,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kurulus",
   "k": "kurulus",
   "grup": "hanedan",
   "adet": 206,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "idari",
   "k": "idari",
   "grup": "icduzen",
   "adet": 204,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "toprak-kayip",
   "k": "kayip",
   "grup": "askeri",
   "adet": 180,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "bilim",
   "k": "bilim",
   "grup": "kultur",
   "adet": 171,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "isyan",
   "k": "isyan",
   "grup": "icduzen",
   "adet": 165,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "son",
   "k": "kurulus",
   "grup": "hanedan",
   "adet": 148,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "din",
   "k": "kultur",
   "grup": "kultur",
   "adet": 148,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "siyaset",
   "k": "siyaset",
   "grup": "siyasi",
   "adet": 147,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "diplomasi",
   "k": "diplomasi",
   "grup": "siyasi",
   "adet": 132,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "reform",
   "k": "reform",
   "grup": "icduzen",
   "adet": 131,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "mimari",
   "k": "mimari",
   "grup": "kultur",
   "adet": 90,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "iktisat",
   "k": "ekonomi",
   "grup": "iktisat",
   "adet": 84,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "olum",
   "k": "taht",
   "grup": "hanedan",
   "adet": 71,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kriz",
   "k": null,
   "grup": "diger",
   "adet": 67,
   "durum": "BAGLANAMADI",
   "sebep": "Cok anlamli: mali kriz · siyasi kriz · veraset krizi ayni etikette. Tek bir `k:`ye baglamak 67 maddenin bir kismini YANLIS kutuya koyar. OKUNARAK bolunmeli — bu partide okunmadi."
  },
  {
   "tur": "isgal",
   "k": "fetih",
   "grup": "askeri",
   "adet": 66,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "sosyal",
   "k": "sosyoloji",
   "grup": "icduzen",
   "adet": 66,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "ittifak",
   "k": "ittifak",
   "grup": "siyasi",
   "adet": 62,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "bolunme",
   "k": "siyaset",
   "grup": "siyasi",
   "adet": 59,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "ekonomi",
   "k": "ekonomi",
   "grup": "iktisat",
   "adet": 55,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kayip",
   "k": "kayip",
   "grup": "askeri",
   "adet": 53,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "diger",
   "k": null,
   "grup": "diger",
   "adet": 44,
   "durum": "BAGLANAMADI",
   "sebep": "Zaten `diger`; olduğu yerde kaliyor."
  },
  {
   "tur": "siyasi",
   "k": "siyaset",
   "grup": "siyasi",
   "adet": 40,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kanun",
   "k": "kanun",
   "grup": "icduzen",
   "adet": 40,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "hanedan",
   "k": "taht",
   "grup": "hanedan",
   "adet": 38,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "ayaklanma",
   "k": "ayaklanma",
   "grup": "icduzen",
   "adet": 34,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "anayasa",
   "k": "kanun",
   "grup": "icduzen",
   "adet": 28,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "birlesme",
   "k": "siyaset",
   "grup": "siyasi",
   "adet": 25,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "toprak",
   "k": "fetih",
   "grup": "askeri",
   "adet": 24,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "fetih",
   "k": "fetih",
   "grup": "askeri",
   "adet": 21,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "sanat",
   "k": "kultur",
   "grup": "kultur",
   "adet": 21,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "vassal",
   "k": "vassal",
   "grup": "siyasi",
   "adet": 17,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kesif",
   "k": "kesif",
   "grup": "kultur",
   "adet": 16,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "salgin",
   "k": null,
   "grup": "diger",
   "adet": 15,
   "durum": "BAGLANAMADI",
   "sebep": "Veba/kolera salgini yedi grubun HICBIRINE girmiyor: askeri degil, siyasi degil, hanedan degil, ic duzen degil, kultur-bilim degil, iktisat degil. Yeni grup ACMIYORUM (§1.6) ⇒ acikca `diger`."
  },
  {
   "tur": "iktisadi",
   "k": "ekonomi",
   "grup": "iktisat",
   "adet": 14,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "sefer",
   "k": "sefer",
   "grup": "askeri",
   "adet": 12,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "askeri",
   "k": "savas",
   "grup": "askeri",
   "adet": 10,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "darbe",
   "k": "darbe",
   "grup": "hanedan",
   "adet": 10,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "felsefe",
   "k": "felsefe",
   "grup": "kultur",
   "adet": 8,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "kusatma",
   "k": "kusatma",
   "grup": "askeri",
   "adet": 6,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "deniz",
   "k": "savas",
   "grup": "askeri",
   "adet": 6,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "ic-savas",
   "k": "ayaklanma",
   "grup": "icduzen",
   "adet": 6,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "felaket",
   "k": null,
   "grup": "diger",
   "adet": 6,
   "durum": "BAGLANAMADI",
   "sebep": "Deprem/yangin/kitlik — `salgin` ile ayni gerekce."
  },
  {
   "tur": "yikilis",
   "k": "kurulus",
   "grup": "hanedan",
   "adet": 5,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "evlilik",
   "k": "evlilik",
   "grup": "hanedan",
   "adet": 5,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "ic-karisiklik",
   "k": "ayaklanma",
   "grup": "icduzen",
   "adet": 5,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "toprak-kaybi",
   "k": "kayip",
   "grup": "askeri",
   "adet": 4,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "teknoloji",
   "k": "bilim",
   "grup": "kultur",
   "adet": 4,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "sehircilik",
   "k": "mimari",
   "grup": "kultur",
   "adet": 4,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "tabiiyet",
   "k": "vassal",
   "grup": "siyasi",
   "adet": 3,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "hukuk",
   "k": "kanun",
   "grup": "icduzen",
   "adet": 3,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "dini",
   "k": "kultur",
   "grup": "kultur",
   "adet": 3,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "itaat",
   "k": "vassal",
   "grup": "siyasi",
   "adet": 1,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "dogum",
   "k": "taht",
   "grup": "hanedan",
   "adet": 1,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "hukuki",
   "k": "kanun",
   "grup": "icduzen",
   "adet": 1,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "baskent",
   "k": "idari",
   "grup": "icduzen",
   "adet": 1,
   "durum": "BAGLANDI",
   "sebep": null
  },
  {
   "tur": "taht",
   "k": "taht",
   "grup": "hanedan",
   "adet": 0,
   "durum": "BAGLANDI",
   "sebep": null
  }
 ],
 "yazim_birlestirme": [
  {
   "eski": "toprak-kazanci",
   "yeni": "toprak-kazanc",
   "eski_adet": 1,
   "yeni_adet": 853,
   "gerekce": "YAZIM HATASI — tekil kayit"
  },
  {
   "eski": "toprak-kaybi",
   "yeni": "toprak-kayip",
   "eski_adet": 390,
   "yeni_adet": 389,
   "gerekce": "IKI YAZIM da yaygin; `toprak-kayip` secildi cunku `toprak-kazanc` ile SIMETRIK (ikisi de -i'siz)"
  },
  {
   "eski": "ayaklanma",
   "yeni": "isyan",
   "eski_adet": 221,
   "yeni_adet": 361,
   "gerekce": "esanlam. 🔴 YON KOORDINATORUN OLCUMUNUN TERSI: onun sayisi (ayaklanma 89 ↔ isyan 3) YALNIZ ANA kumenin `etiket:` alanindan geliyordu; BUTUN kulliyatta (ana+yabanci, k:+tur:+etiket:) isyan 361 ↔ ayaklanma 221, yani `isyan` yaygin olan. Ikisi de suzgec.js'te ZATEN tanimli ve AYNI gruba (icduzen) dusuyor ⇒ birlestirme GRUPLAMAYI DEGISTIRMEZ, yalniz etiket eksenindeki hayalet kutuyu kapatir."
  },
  {
   "eski": "idare",
   "yeni": "idari",
   "eski_adet": 5,
   "yeni_adet": 635,
   "gerekce": "esanlam; `idari` suzgec.js'te ZATEN tanimli"
  },
  {
   "eski": "iktisadi",
   "yeni": "iktisat",
   "eski_adet": 51,
   "yeni_adet": 154,
   "gerekce": "esanlam"
  },
  {
   "eski": "iktisat",
   "yeni": "ekonomi",
   "eski_adet": 154,
   "yeni_adet": 318,
   "gerekce": "esanlam; `ekonomi` suzgec.js'te ZATEN tanimli"
  },
  {
   "eski": "siyasi",
   "yeni": "siyaset",
   "eski_adet": 211,
   "yeni_adet": 1294,
   "gerekce": "esanlam; `siyaset` suzgec.js'te ZATEN tanimli"
  },
  {
   "eski": "dini",
   "yeni": "din",
   "eski_adet": 16,
   "yeni_adet": 500,
   "gerekce": "esanlam"
  },
  {
   "eski": "hukuki",
   "yeni": "hukuk",
   "eski_adet": 5,
   "yeni_adet": 33,
   "gerekce": "esanlam"
  },
  {
   "eski": "kultur-sanat",
   "yeni": "kultur",
   "eski_adet": 100,
   "yeni_adet": 685,
   "gerekce": "esanlam; `kultur` suzgec.js'te ZATEN tanimli"
  },
  {
   "eski": "sanat",
   "yeni": "kultur",
   "eski_adet": 96,
   "yeni_adet": 685,
   "gerekce": "alt kume; ayri grup ACILMIYOR (§1.6)"
  }
 ],
 "darbe": [
  {
   "t": "1730-09-25",
   "b": "Patrona Halil İsyanı",
   "kume": "ANA",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1648-08-08",
   "b": "Sultan İbrahim'in hal'i ve katli",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1703-08-22",
   "b": "Edirne Vakası — II. Mustafa'nın hal'i",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1913-01-23",
   "b": "Bâb-ı Âli Baskını",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1687-11-08",
   "b": "IV. Mehmed'in hal'i ve II. Süleyman'ın cülûsu",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1803-05-01",
   "b": "Arnavut askerleri Mısır valisini devirdi",
   "kume": "ANA",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1446-05-05",
   "b": "Buçuktepe Vak'ası — ilk yeniçeri ayaklanması ve II. Murad'ın tahta dönüşü",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1859-09-14",
   "b": "Kuleli Vak'ası: İstanbul'da Abdülmecid'e karşı ilk darbe girişimi",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1909-04-27",
   "b": "Hareket Ordusu ve II. Abdülhamid'in hal'i: V. Mehmed Reşad'ın cülûsu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1622-05-20",
   "b": "Genç Osman'ın yeniçeriler tarafından katledilmesi",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1656-03-04",
   "b": "Çınar Vak'ası (Vak'a-i Vakvakiye)",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1703-07-17",
   "b": "Edirne Vak'ası'nın başlaması",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1807-05-25",
   "b": "Kabakçı Mustafa isyanı başladı",
   "kume": "ANA",
   "mevcut_k": "ayaklanma",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1807-05-29",
   "b": "III. Selim tahttan indirildi",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1923-06-09",
   "b": "9 Haziran Darbesi — Stamboliyski hükümeti devrildi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1862-10-10",
   "b": "Kral Otto'nun tahttan indirilmesi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1909-08-28",
   "b": "Gudi (Goudi) Darbesi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1922-09-27",
   "b": "Kral Konstantin'in ikinci kez tahttan çekilmesi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1799-11-09",
   "b": "18 Brumaire Darbesi — Napolyon'un iktidara gelişi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1908-06-23",
   "b": "Muhammed Ali Şah'ın Meclis'i bombalaması — küçük istibdat",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1921-02-21",
   "b": "Rıza Han'ın darbesi",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1868-09-19",
   "b": "Şanlı Devrim (\"La Gloriosa\") — İsabel II tahttan indirildi",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1923-09-13",
   "b": "Primo de Rivera Darbesi — parlamenter rejimin askıya alınması",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1772-08-19",
   "b": "III. Gustav'ın darbesi — mutlakiyetçi güçler yeniden kraliyete geçti",
   "kume": "YAB",
   "mevcut_k": "reform",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1809-03-13",
   "b": "IV. Gustav Adolf darbeyle tahttan indirildi",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1922-10-28",
   "b": "Roma Yürüyüşü — Mussolini'nin iktidara gelişi",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1582-06-21",
   "b": "Honnō-ji Vakası: Nobunaga suikaste kurban gitti",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1596-10-26",
   "b": "Kırım kuvvetleri Haçova (Mezőkeresztes) Meydan Savaşı'na katıldı; Gazi Giray savaş sonrası kısa süreliğine azledildi",
   "kume": "YAB",
   "mevcut_k": "savas",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1741-12-06",
   "b": "Elizaveta Petrovna darbeyle tahta çıktı",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1762-07-09",
   "b": "II. Katerina darbeyle tahta çıktı",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1801-03-23",
   "b": "I. Pavel suikastla öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1526-07-01",
   "b": "Kızılbaş boy çatışması — Çuha Sultan'ın öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "ic-karisiklik",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1579-07-01",
   "b": "Mehd-i Ulyâ'nın öldürülmesi — Kızılbaş boylarının darbesi",
   "kume": "YAB",
   "mevcut_k": "ic-karisiklik",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1732-08-01",
   "b": "Nadir'in Tahmasb II'yi tahttan indirip bebek III. Abbas'ı şah ilan etmesi",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1903-06-11",
   "b": "Mayıs Darbesi — Obrenović hanedanının sonu, Karađorđević'e geçiş",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "darbe-askeri"
   ],
   "not": null
  },
  {
   "t": "1747-06-20",
   "b": "Nâdir Şah'ın öldürülmesi — Afşar hâkimiyetinin dağılışı",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1878-05-20",
   "b": "Çırağan Baskını (Ali Suâvi olayı)",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1683-12-25",
   "b": "Merzifonlu Kara Mustafa Paşa'nın idamı",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1884-05-08",
   "b": "Midhat Paşa'nın Tâif zindanında öldürülmesi",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1905-07-21",
   "b": "Yıldız Suikastı: II. Abdülhamid'e bombalı saldırı",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1913-06-11",
   "b": "Sadrazam Mahmud Şevket Paşa'nın İstanbul'da suikastle öldürülmesi",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1579-10-12",
   "b": "Sokullu Mehmed Paşa suikaste uğrayıp öldürüldü",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1808-07-28",
   "b": "III. Selim öldürüldü",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1831-10-09",
   "b": "Kapodistrias'ın suikastı",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1913-03-18",
   "b": "Kral I. Georgios'un suikastı",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1407-11-23",
   "b": "Orléans Dükü'nün suikastı — Armagnac-Burgonya iç savaşının başlaması",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1589-08-01",
   "b": "III. Henri'nin suikastı ve Valois hanedanının sona ermesi",
   "kume": "YAB",
   "mevcut_k": "hanedan",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1610-05-14",
   "b": "IV. Henri'nin suikastı",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1793-07-13",
   "b": "Marat'nın suikastı",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1914-07-31",
   "b": "Jean Jaurès'in suikastı",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1634-02-25",
   "b": "Wallenstein'ın öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1898-09-10",
   "b": "İmparatoriçe Elisabeth'in öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1914-06-28",
   "b": "Saraybosna suikastı — Veliaht Franz Ferdinand'ın öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1437-02-20",
   "b": "I. James suikastle öldürüldü",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1567-02-10",
   "b": "Lord Darnley öldürüldü",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1747-06-20",
   "b": "Nadir Şah suikastla öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1797-06-17",
   "b": "Ağa Muhammed Han suikastla öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1896-05-01",
   "b": "Nâsırüddin Şah suikastla öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1792-03-29",
   "b": "III. Gustav suikast yaralarından öldü",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1476-12-26",
   "b": "Galeazzo Maria Sforza'nın suikastı",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1900-07-29",
   "b": "I. Umberto'nun suikastı",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1860-03-24",
   "b": "Şogunluk baş danışmanı Ii Naosuke suikaste kurban gitti",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1296-02-08",
   "b": "II. Przemysł Rogoźno'da suikastle öldürüldü",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1290-07-10",
   "b": "IV. (Kun) László'nın kendi Kuman muhafızları tarafından öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1293-12-13",
   "b": "Sultan Halîl emirleri tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1299-01-16",
   "b": "Lâçin öldürüldü, I. en-Nâsır Muhammed ikinci kez tahta çıktı",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1908-02-01",
   "b": "Kral I. Carlos ve veliaht suikaste kurban gitti — Lizbon Regicide'i",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1881-03-13",
   "b": "II. Aleksandr suikastla öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1911-09-14",
   "b": "Stolıpin suikastle öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1916-12-30",
   "b": "Rasputin öldürüldü",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "suikast"
   ],
   "not": "Iktidari DEGISTIRMEDI ⇒ darbe kovalarina girmez; ayri etiket."
  },
  {
   "t": "1876-05-30",
   "b": "Abdülaziz'in hal'i",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1811-03-01",
   "b": "Kal'a Vakası: Kölemen beylerinin tasfiyesi",
   "kume": "ANA",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1618-02-26",
   "b": "I. Mustafa'nın hal'i ve Genç Osman'ın (II. Osman) cülûsu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1623-09-10",
   "b": "I. Mustafa'nın ikinci hal'i ve IV. Murad'ın cülûsu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1651-09-02",
   "b": "Büyük Vâlide Kösem Sultan'ın öldürülmesi",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1876-08-31",
   "b": "V. Murad'ın hal'i ve II. Abdülhamid'in cülûsu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1307-11-17",
   "b": "II. Hetum ve kral II. Levon, Moğol kumandanı Bilarga tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1341-08-28",
   "b": "IV. Levon kendi baronları tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1344-04-17",
   "b": "II. Konstantin bir ayaklanmada öldürüldü",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1898-09-21",
   "b": "Cixi darbe yaptı — Guangxu hapsedildi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1806-04-01",
   "b": "Bhimsen Thapa muhtâr (başvezir) olarak iktidarı ele aldı",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1846-09-14",
   "b": "Kot Katliamı: Jung Bahadur Rana iktidarı ele geçirdi",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1891-03-24",
   "b": "Saray darbesi İngiliz müdahalesini tetikledi",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1719-02-28",
   "b": "Seyyid Kardeşler İmparator Ferruhsiyer'i tahttan indirip öldürttü",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1581-07-26",
   "b": "Feragat Bildirisi — kralın azledilmesi",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1327-01-25",
   "b": "II. Edward tahttan indirildi, III. Edward kral oldu",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1399-09-30",
   "b": "II. Richard tahttan indirildi, IV. Henry (Lancaster) kral oldu",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1909-07-16",
   "b": "Muhammed Ali Şah tahttan indirildi",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1568-01-01",
   "b": "IV. Erik tahttan indirildi, III. Johan kral oldu",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1547-01-02",
   "b": "Fieschi Komplosu — Doria düzenine karşı başarısız darbe",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1457-03-16",
   "b": "László Hunyadi'nin idamı — V. László'nun tertibi",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1707-06-13",
   "b": "Ónod Diyeti — Habsburg hanedanının tahttan indirildiğinin ilanı",
   "kume": "YAB",
   "mevcut_k": "kanun",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1849-04-14",
   "b": "Debrecen'de Habsburg hanedanının hal'i ve bağımsızlığın ilanı",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1294-12-01",
   "b": "Kitbugâ, çocuk sultanı tahttan indirdi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1389-01-01",
   "b": "Berkuk'un tahttan indirilmesi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1383-01-01",
   "b": "Crispo darbesi — Sanudo hanedanının sonu",
   "kume": "YAB",
   "mevcut_k": "darbe",
   "etiket_ekle": [
    "darbe-siyasi"
   ],
   "not": null
  },
  {
   "t": "1595-01-27",
   "b": "III. Mehmed tahta çıktı, on dokuz şehzade boğduruldu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1477-12-01",
   "b": "Uğurlu Mehmed Erzincan'da öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hanedan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1493-01-01",
   "b": "Baysungur mağlûp edilip öldürüldü",
   "kume": "YAB",
   "mevcut_k": "ic-savas",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1361-01-01",
   "b": "Süleyman Bey akrabaları tarafından öldürüldü, Alâeddin Bey iktidara geçti",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1196-01-01",
   "b": "II. Süleyman Şah'ın kardeşini tahttan indirmesi",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1296-01-01",
   "b": "Sempat, kardeşlerini alaşağı etti: Toros boğduruldu, Hetum kör edildi",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1866-01-01",
   "b": "Sultan Süveynî, oğlu Salim tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1752-01-01",
   "b": "Süleyman el-Hamîdî tahttan indirildi — iç çekişmeler başladı",
   "kume": "YAB",
   "mevcut_k": "bolunme",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1376-08-12",
   "b": "IV. Andronikos babasını devirdi — taht kavgası sultanın elinde",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1554-01-01",
   "b": "Mirza Îsâ Han Tarhan Sind'de idareyi ele aldı",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1296-07-19",
   "b": "Alâeddin Halacî amcası Celâlüddin'i öldürterek tahta geçti",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1658-07-31",
   "b": "Evrengzîb Delhi'de tahta çıktı, babasını hapsetti",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1659-08-30",
   "b": "Evrengzîb kardeşi Dârâ Şükûh'u idam ettirdi",
   "kume": "YAB",
   "mevcut_k": "olum",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1284-08-10",
   "b": "Argun, Ahmed Teküder'i tahttan indirip öldürttü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1295-03-24",
   "b": "Geyhatu öldürüldü, Baydu tahta geçti",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1327-01-01",
   "b": "Emîr Çoban ve oğlu Herat'ta öldürüldü — Çobanlı ailesinin tasfiyesi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1343-01-01",
   "b": "Mesud Şah öldürüldü — İncû hânedanında iç savaşın sonu",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1357-05-12",
   "b": "Ebû İshak öldürüldü — İncû hânedanı sona erdi",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1358-06-01",
   "b": "Şah Şücâ' babasını hal'edip gözlerine mil çektirdi",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1338-07-01",
   "b": "Abdürrezzâk kardeşi Vecîhüddin Mes'ûd tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1346-05-01",
   "b": "Muhammed Aytimur dervişlerin tahrikiyle öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1351-01-01",
   "b": "Hâce Şemseddin Ali kendi adamları tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1362-01-01",
   "b": "Hâce Ali b. Müeyyed Sebzevâr'ı ele geçirdi, Hasan Dâmegānî öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1386-01-01",
   "b": "Hâce Ali öldürüldü — Serbedârî hânedanı sona erdi",
   "kume": "YAB",
   "mevcut_k": "son",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1438-05-01",
   "b": "İskender, oğlu Şah Kubâd tarafından Alıncak Kalesi'nde öldürüldü",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1412-05-28",
   "b": "Ferec'in Leccûn'da mağlûbiyeti, tahttan indirilişi ve öldürülmesi",
   "kume": "YAB",
   "mevcut_k": "savas",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1460-01-01",
   "b": "James'in Memlük desteğiyle Kraliçe Charlotte'u tahttan indirmesi",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1554-01-01",
   "b": "Yûsuf Mirza öldürüldü — orda Osmanlı ve Moskova taraftarı diye ikiye bölündü",
   "kume": "YAB",
   "mevcut_k": "bolunme",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1493-01-01",
   "b": "İbak Han öldürüldü — taht Şeybânîlerden Tayboğa soyuna geçti",
   "kume": "YAB",
   "mevcut_k": "hanedan",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1748-01-01",
   "b": "Ebülhayr Han öldürüldü — yerine Nur Ali geçti",
   "kume": "YAB",
   "mevcut_k": "hukumdar",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1725-04-25",
   "b": "Mahmud Hotakî'nin öldürülmesi, Eşref Han'ın tahta çıkışı",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  },
  {
   "t": "1449-10-25",
   "b": "Uluğ Bey, öz oğlu tarafından öldürüldü",
   "kume": "YAB",
   "mevcut_k": "kriz",
   "etiket_ekle": [
    "taht-kavgasi"
   ],
   "not": null
  }
 ],
 "islahat": [
  {
   "t": "1839-05-14",
   "b": "Tıp okulunun Mekteb-i Tıbbiyye-i Adliyye-i Şâhâne adını alması",
   "kume": "ANA",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1833-06-01",
   "b": "Feshâne-i Âmire'nin kuruluşu",
   "kume": "ANA",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1850-06-01",
   "b": "1850 Ticaret Kanunnâmesi'nin kabulü",
   "kume": "ANA",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1830-12-01",
   "b": "Osmanlı'da ilk düzenli nüfus sayımının yapılması",
   "kume": "ANA",
   "mevcut_k": "sosyoloji",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1864-06-01",
   "b": "1864 Vilâyet Nizamnâmesi ile muhtarlık ve ihtiyar meclisi sisteminin düzenlenmesi",
   "kume": "ANA",
   "mevcut_k": "sosyoloji",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1869-09-01",
   "b": "1869 Maârif-i Umûmiyye Nizamnâmesi'nin yayımlanması",
   "kume": "ANA",
   "mevcut_k": "sosyoloji",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1873-06-28",
   "b": "Darüşşafaka okulunun eğitime başlaması",
   "kume": "ANA",
   "mevcut_k": "sosyoloji",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1727-07-05",
   "b": "İlk Osmanlı matbaası kuruldu",
   "kume": "ANA",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1831-11-01",
   "b": "İlk resmî gazete: Takvîm-i Vekāyi",
   "kume": "ANA",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1477-01-01",
   "b": "Fâtih Kanunnâmesi",
   "kume": "ANA",
   "mevcut_k": "kanun",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1858-06-06",
   "b": "Arazi Kanunnâmesi",
   "kume": "ANA",
   "mevcut_k": "kanun",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1864-11-08",
   "b": "Vilâyet Nizamnâmesi",
   "kume": "ANA",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1851-02-11",
   "b": "Encümen-i Dâniş'in kuruluşu: İstanbul'da ilk Osmanlı akademisi",
   "kume": "ANA",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1855-08-16",
   "b": "İstanbul Şehremaneti'nin kurulması: ilk modern belediye teşkilatı",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1861-06-09",
   "b": "Cebel-i Lübnan Nizamnâmesi: Lübnan'a imtiyazlı mutasarrıflık statüsü",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1868-01-04",
   "b": "Girit Nizamnâmesi: adaya geniş idarî imtiyazlar",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1652-06-20",
   "b": "Tarhuncu Ahmed Paşa'nın denk bütçe reformu",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1689-10-25",
   "b": "Köprülüzâde Fâzıl Mustafa Paşa'nın sadrazamlığa atanması ve mali ıslahatları",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1727-07-01",
   "b": "İbrahim Müteferrika'ya matbaa kurma izni",
   "kume": "ANA",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1734-06-01",
   "b": "Hendesehâne'nin (mühendislik okulunun ilk örneği) kuruluşu",
   "kume": "ANA",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1772-10-01",
   "b": "Baron de Tott öncülüğünde kısa ömürlü topçuluk okulu denemesi",
   "kume": "ANA",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1792-06-01",
   "b": "Nizâm-ı Cedîd ıslahat programı hazırlanmaya başlandı",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1829-06-01",
   "b": "Fesin resmî serpuş ilan edilmesi",
   "kume": "ANA",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1849-03-28",
   "b": "Paulskirche Anayasası'nın kabulü",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1867-04-16",
   "b": "Kuzey Alman Konfederasyonu Anayasası'nın kabulü",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1871-04-16",
   "b": "Alman İmparatorluğu Anayasası'nın kabulü",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1919-08-11",
   "b": "Weimar Anayasası'nın kabulü",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1818-08-22",
   "b": "Baden Anayasası — dönemin en liberal metinlerinden biri",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1905-12-19",
   "b": "İlk anayasa (Ustav) ilan edildi — meşruti prenslik",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1835-01-02",
   "b": "Aprilov Mektebi (Gabrovo) açıldı — ilk modern Bulgar okulu",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1864-10-01",
   "b": "Midhat Paşa Tuna Vilâyeti valisi oldu — reform dönemi başladı",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1879-04-16",
   "b": "Tırnova Anayasası kabul edildi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1888-10-01",
   "b": "Sofya Yüksek Okulu kuruldu — Bulgaristan'ın ilk üniversitesi",
   "kume": "YAB",
   "mevcut_k": "siyasi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1281-01-01",
   "b": "Guo Shoujing'in Shoushi takvimi kabul edildi",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1630-01-01",
   "b": "Adam Schall von Bell Pekin'de Ming takvim reformuna katıldı",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1861-01-20",
   "b": "Zongli Yamen kuruldu — ilk modern dışişleri organı",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1862-01-01",
   "b": "Tongwen Guan (Yabancı Diller Okulu) kuruldu",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1911-05-09",
   "b": "Demiryolları millîleştirme kararı isyanı ateşledi",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1800-01-18",
   "b": "Fransa Bankası'nın (Banque de France) kurulması",
   "kume": "YAB",
   "mevcut_k": "iktisat",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1889-01-01",
   "b": "Bîr Hastahanesi kuruldu: Nepal'in ilk modern hastahanesi",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1528-09-12",
   "b": "Andrea Doria'nın anayasası — oligarşik cumhuriyetin doğuşu",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1576-03-17",
   "b": "Leges Novae — cumhuriyetin ikinci anayasası",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1735-01-30",
   "b": "Korsikalıların bağımsızlık ilanı — Corte anayasası",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1755-11-18",
   "b": "Paoli'nin Korsika Cumhuriyeti ve anayasası",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1309-11-02",
   "b": "1309 Costituto'su — halkın okuyabilmesi için İtalyanca yazılan ilk devlet anayasası",
   "kume": "YAB",
   "mevcut_k": "anayasa",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1781-04-01",
   "b": "Şâhin Giray'ın merkeziyetçi reformlarına karşı Nogay isyanı patlak verdi",
   "kume": "YAB",
   "mevcut_k": "isyan",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1791-05-03",
   "b": "3 MAYIS ANAYASASI — Avrupa'nın ilk yazılı anayasası",
   "kume": "YAB",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1765-03-15",
   "b": "Şövalye Okulu kuruldu",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1735-06-22",
   "b": "Selmecbánya Maden Akademisi'nin kurulması",
   "kume": "YAB",
   "mevcut_k": "kurulus",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1868-11-01",
   "b": "Magyar Államvasutak'ın (MÁV, Macar Devlet Demiryolları) kurulması",
   "kume": "YAB",
   "mevcut_k": "kurulus",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1263-01-01",
   "b": "Baybars berîd (posta-istihbarat) örgütünü yeniden kurdu",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1525-01-01",
   "b": "İbrahim Paşa Kanunnâmesi — Mısır'ın ikili idare çerçevesinin kurulması",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1821-11-14",
   "b": "Bulak Matbaası'nın resmî açılışı",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1835-01-01",
   "b": "Tercüme okulunun Medresetü'l-elsün'e dönüştürülmesi",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1841-06-01",
   "b": "Tahtâvî'nin resmî gazete idaresine getirilmesi",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1900-01-01",
   "b": "Buhara'da ilk usûl-i cedîd okulları açıldı",
   "kume": "YAB",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1574-01-01",
   "b": "Sacra Infermeria'nın (Kutsal Hastane) açılması",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1533-01-01",
   "b": "Malta'da nüfus sayımı ve adanın idarî düzeninin kurulması",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1638-01-01",
   "b": "Malta'da hastane hemşireliğinin kadınlara açılması ve Kadınlar Hastanesi",
   "kume": "YAB",
   "mevcut_k": "sosyal",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1881-08-27",
   "b": "\"Karşı-reformlar\" dönemi başladı",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1703-01-02",
   "b": "İlk Rus gazetesi \"Vedomosti\" yayımlandı",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1773-06-28",
   "b": "Moskova Maden Okulu kuruldu",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1897-01-28",
   "b": "İlk genel nüfus sayımı yapıldı",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1611-01-01",
   "b": "Sikke reformu — abbasî gümüş parasının standardizasyonu",
   "kume": "YAB",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "KESIN"
  },
  {
   "t": "1863-06-01",
   "b": "Bank-ı Osmanî'nin Bank-ı Osmanî-i Şâhâne (Osmanlı Bankası) olarak yeniden yapılanması",
   "kume": "ANA",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1855-09-14",
   "b": "Telgraf hattı İstanbul'da",
   "kume": "ANA",
   "mevcut_k": "kesif",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1908-09-01",
   "b": "Hicaz Demiryolu Medine'de",
   "kume": "ANA",
   "mevcut_k": "kesif",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1876-12-23",
   "b": "Tersane Konferansı: büyük devletlerin Balkan reform dayatması",
   "kume": "ANA",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1888-09-24",
   "b": "Haydarpaşa-Ankara demiryolu imtiyazının Almanlara verilmesi",
   "kume": "ANA",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1900-09-01",
   "b": "Hicaz Demiryolu inşaatının Şam'da başlaması",
   "kume": "ANA",
   "mevcut_k": "diger",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1903-10-02",
   "b": "Mürzsteg Programı: Makedonya'da uluslararası reform denetimi",
   "kume": "ANA",
   "mevcut_k": "siyaset",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1810-10-15",
   "b": "Berlin (Humboldt) Üniversitesi'nin açılması",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1903-03-05",
   "b": "Bağdat Demiryolu Antlaşması",
   "kume": "YAB",
   "mevcut_k": "antlasma",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1666-12-22",
   "b": "Bilimler Akademisi'nin kurulması",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1768-12-10",
   "b": "Kraliyet Sanat Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1714-10-03",
   "b": "Real Academia Española'nın (İspanyol Dil Akademisi) resmî onayı",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1739-01-01",
   "b": "İsveç Bilimler Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1786-03-20",
   "b": "İsveç Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1423-01-01",
   "b": "Pammatone Hastanesi'nin kurulması — şehir hayır sisteminin merkezileşmesi",
   "kume": "YAB",
   "mevcut_k": "idari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1492-09-02",
   "b": "Addizione Erculea — Avrupa'nın ilk modern şehir genişletme planı",
   "kume": "YAB",
   "mevcut_k": "mimari",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1891-05-19",
   "b": "Trans-Sibirya Demiryolu inşaatı başladı",
   "kume": "YAB",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1687-01-01",
   "b": "Slav-Grek-Latin Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1714-01-01",
   "b": "Kunstkamera — ilk Rus müzesi kuruldu",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1724-01-28",
   "b": "Bilimler Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "bilim",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1757-11-06",
   "b": "İmparatorluk Güzel Sanatlar Akademisi kuruldu",
   "kume": "YAB",
   "mevcut_k": "kultur",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  },
  {
   "t": "1916-10-18",
   "b": "Trans-Sibirya Demiryolu (Amur hattı) tamamlandı",
   "kume": "YAB",
   "mevcut_k": "ekonomi",
   "etiket_ekle": [
    "islahat"
   ],
   "guven": "TARTISILIR",
   "not": "Olcutu geciyor ama gerekcesi BAGLAMA bagli — koordinator karari."
  }
 ],
 "imar": {
  "aday": 362,
  "altyapi_islahat_ve_imar": [
   {
    "t": "1859-04-25",
    "b": "Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1321-01-01",
    "b": "Mudanya limanının abluka altına alınışı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1838-08-16",
    "b": "Balta Limanı Ticaret Antlaşması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1855-09-14",
    "b": "Telgraf hattı İstanbul'da",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1908-09-01",
    "b": "Hicaz Demiryolu Medine'de",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1390-06-01",
    "b": "Gelibolu Tersanesi'nin kurulması — Osmanlı donanmasının doğuşu",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1849-05-01",
    "b": "Baltalimanı Sözleşmesi: Eflak ve Boğdan'da ortak Osmanlı-Rus himayesi",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1869-11-17",
    "b": "Süveyş Kanalı'nın açılışı: Mısır üzerinden Hint yolunun kısalması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1876-12-23",
    "b": "Tersane Konferansı: büyük devletlerin Balkan reform dayatması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1884-02-01",
    "b": "Sevâkin — Mehdî'ye düşmeyen tek liman",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1888-09-24",
    "b": "Haydarpaşa-Ankara demiryolu imtiyazının Almanlara verilmesi",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1900-09-01",
    "b": "Hicaz Demiryolu inşaatının Şam'da başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1914-10-29",
    "b": "Karadeniz Baskını: Osmanlı donanmasının Rus limanlarını bombalaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1915-01-14",
    "b": "Birinci Kanal Harekâtı: Süveyş'e Sina çölü üzerinden taarruz",
    "kume": "ANA",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1835-12-07",
    "b": "Almanya'nın ilk demiryolu hattı — Nürnberg-Fürth",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1844-06-04",
    "b": "Silezya dokumacı ayaklanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1903-03-05",
    "b": "Bağdat Demiryolu Antlaşması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1913-12-14",
    "b": "Liman von Sanders'in Osmanlı ordusuna atanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1185-01-01",
    "b": "Amisos (Samsun) limanının fethi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1222-01-01",
    "b": "Alanya (Kalonoros)'ın fethi ve tersanenin kuruluşu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1329-01-01",
    "b": "İzmir Liman Kalesi'nin (Aşağı Kale) fethi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1344-10-28",
    "b": "İzmir Liman Kalesi'nin Haçlılar tarafından alınması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1325-01-01",
    "b": "Ayas limanı yeniden inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1337-01-01",
    "b": "Ayas limanı Memlüklerin eline geçti",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1280-01-01",
    "b": "Tebai'de ipek dokumacılığının Latin himayesinde gelişmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1893-08-06",
    "b": "Korint Kanalı'nın açılması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1685-01-01",
    "b": "Dört gümrük limanı açıldı (Kanton · Xiamen · Ningbo · Şanghay)",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1757-01-01",
    "b": "Kanton Sistemi — dış ticaret tek limana kısıtlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1865-01-01",
    "b": "Jiangnan Tersanesi ve Cephanesi kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1876-01-01",
    "b": "Woosung Demiryolu — Çin'in ilk demiryolu açıldı ve söküldü",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1911-05-09",
    "b": "Demiryolları millîleştirme kararı isyanı ateşledi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1332-01-01",
    "b": "Amda Sion Zeyla' limanını ve Evfât topraklarının büyük kısmını aldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1828-01-01",
    "b": "Umman Sultanlığı'nın ikiye bölünmesi ve güney Somali limanlarının Zengibar'a tâbi olması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1877-01-02",
    "b": "Berberâ'nın serbest liman ilân edilmesi ve Osmanlı hâkimiyet iddiasının tanınması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1869-11-17",
    "b": "Süveyş Kanalı'nın açılışı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1772-01-01",
    "b": "İngiliz Doğu Hindistan Şirketi Sind'de ilk fabrikasını kurdu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1620-01-01",
    "b": "Deniz İpek yolu Sind limanlarını Basra körfezine bağladı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1854-07-17",
    "b": "Semmering demiryolu — Avrupa'nın ilk dağ demiryolu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1613-01-11",
    "b": "İngiliz Doğu Hindistan Şirketi Sûrat'ta ilk ticaret fabrikasını açtı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1785-01-01",
    "b": "Cartwright güçlü dokuma tezgâhını patentledi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1825-09-27",
    "b": "Stockton ve Darlington Demiryolu açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1833-01-01",
    "b": "Fabrika Yasası — çocuk işçiliği sınırlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1866-07-27",
    "b": "Kalıcı Atlantik telgraf kablosu tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1869-11-17",
    "b": "Süveyş Kanalı açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1875-11-25",
    "b": "Disraeli Süveyş Kanalı hisselerini satın aldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1555-01-01",
    "b": "İran halı ve ipek dokuma sanayii zirveye ulaştı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1492-08-03",
    "b": "Kolomb, Palos limanından Atlas Okyanusu'na açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1778-10-12",
    "b": "Serbest Ticaret Kararnamesi — sömürge limanlarının açılması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1629-09-16",
    "b": "Altmark Ateşkesi — Prusya limanları İsveç'e geçti",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1347-01-01",
    "b": "Kefe'den taşınan Kara Ölüm'ün Cenova limanına girmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1492-08-02",
    "b": "İspanya'dan sürülen Yahudilerin Cenova limanına gelmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1590-06-01",
    "b": "Serbest liman uygulaması — tahılın gümrüksüz girişi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1872-10-04",
    "b": "Tomioka İpek Fabrikası açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1872-10-14",
    "b": "Japonya'nın ilk demiryolu (Tokyo-Yokohama) açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1868-11-01",
    "b": "Magyar Államvasutak'ın (MÁV, Macar Devlet Demiryolları) kurulması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1426-01-01",
    "b": "Cidde limanı gelirlerinin ele geçirilmesi, Kızıldeniz ticaret tekeli",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1859-04-25",
    "b": "Süveyş Kanalı kazısının başlaması ve Port Said'in kuruluşu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1869-11-17",
    "b": "Süveyş Kanalı'nın açılışı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1915-01-14",
    "b": "Birinci Kanal Harekâtı — Osmanlı'nın Süveyş'e taarruzu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1569-04-01",
    "b": "Don-Volga kanalı projesi arazide çöktü",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1808-01-28",
    "b": "Brezilya limanları dost uluslara açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1344-10-28",
    "b": "İzmir Limanı Kalesi'nin Haçlı birliğince alınması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1634-09-18",
    "b": "Baruthane patlaması — Valletta'da büyük felâket",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1512-01-01",
    "b": "Rodos'ta gemi inşa tersanesinin genişletilmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1764-01-01",
    "b": "Malta limanının Akdeniz karantina merkezi hâline gelmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1837-10-30",
    "b": "Sankt-Peterburg – Tsarskoye Selo demiryolu açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1891-05-19",
    "b": "Trans-Sibirya Demiryolu inşaatı başladı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1916-10-18",
    "b": "Trans-Sibirya Demiryolu (Amur hattı) tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   },
   {
    "t": "1623-01-01",
    "b": "Bender Abbas limanının kurulması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar",
     "islahat"
    ]
   }
  ],
  "olagan_yalniz_imar": [
   {
    "t": "1770-07",
    "b": "Çeşme baskını",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1300-01-01",
    "b": "Köprühisar'ın alınışı ve Yenişehir'in kuruluşuna hazırlık",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1471-08-24",
    "b": "Arzila'nın Portekiz tarafından alınışı — Fas kıyısında ikinci köprübaşı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1543-06-01",
    "b": "Şehzade Camii ve Külliyesi'nin inşaatının başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1548-08-01",
    "b": "Şehzade Camii'nin ibadete açılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1447-01-01",
    "b": "Üç Şerefeli Cami ve Külliyesi'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1402-01-01",
    "b": "Edirne Eski Cami'nin (Ulu Cami) inşaatının başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1554-01-01",
    "b": "Kırkçeşme Suları isale hattının inşaatının başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1567-01-01",
    "b": "Büyükçekmece Köprüsü'nün tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1577-01-01",
    "b": "Drina (Sokullu Mehmed Paşa) Köprüsü'nün tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1566-01-01",
    "b": "Mostar Köprüsü'nün tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1505-01-01",
    "b": "Beyazıt Camii ve Külliyesi'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1414-01-01",
    "b": "Bursa Yeşil Cami Külliyesi'nin inşaatının başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1419-12-01",
    "b": "Bursa Yeşil Cami Külliyesi'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1598-04-09",
    "b": "Yeni Cami'nin (Eminönü) temelinin atılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1598-09-01",
    "b": "Dâvud Ağa'nın vebadan ölümü ve Yeni Cami inşaatının yarım kalması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1603-01-01",
    "b": "Yeni Cami inşaatının III. Mehmed'in ölümü üzerine durması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1665-10-30",
    "b": "Yeni Cami'nin tamamlanıp ibadete açılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1566-01-01",
    "b": "Edirnekapı (Mihrimah Sultan) Camii'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1547-01-01",
    "b": "Üsküdar İskele (Mihrimah Sultan) Külliyesi'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1577-01-01",
    "b": "Azapkapı (Sokullu Mehmed Paşa) Camii'nin yaptırılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1573-01-01",
    "b": "Piyâle Paşa Külliyesi'nin yaptırılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1580-01-01",
    "b": "Zal Mahmud Paşa Camii'nin tamamlanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1561-01-01",
    "b": "Rüstem Paşa Külliyesi'nin (Camii) yapımı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1568-01-01",
    "b": "Selimiye Camii'nin (Edirne) inşaatının başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1749-01-19",
    "b": "Nuruosmaniye Camii ve Külliyesi'nin temelinin atılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1755-12-05",
    "b": "Nuruosmaniye Camii ve Külliyesi'nin açılışı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1839-05-14",
    "b": "Tıp okulunun Mekteb-i Tıbbiyye-i Adliyye-i Şâhâne adını alması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1873-06-28",
    "b": "Darüşşafaka okulunun eğitime başlaması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1399-06-01",
    "b": "Bursa Ulu Camii tamamlandı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1470-12-01",
    "b": "Fatih Külliyesi açıldı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1557-10-16",
    "b": "Süleymaniye Külliyesi açıldı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1575-03-01",
    "b": "Selimiye Camii tamamlandı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1616-06-09",
    "b": "Sultan Ahmed Camii açıldı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1331-01-01",
    "b": "İznik'te ilk Osmanlı medresesinin kurulması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1354-03-02",
    "b": "Gelibolu'nun alınışı — Rumeli'de kalıcı köprübaşı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1400-01-01",
    "b": "Bursa'da Yıldırım Darüşşifası — ilk Osmanlı hastanesi",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1914-11-14",
    "b": "Cihâd-ı Ekber ilanı: Fatih Camii'nde cihad fetvasının okunması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1918-03-03",
    "b": "Brest-Litovsk Antlaşması: Kars, Ardahan ve Batum'un geri alınması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1551-01-01",
    "b": "Ardahan ve Çıldır havzasının alınması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1470-06-01",
    "b": "Sahn-ı Semân medreselerinin öğretime açılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1550-06-01",
    "b": "Süleymaniye Camii ve külliyesinin inşaatı başladı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1565-06-29",
    "b": "Sokullu Mehmed Paşa sadrazamlığa yükseldi",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1579-10-12",
    "b": "Sokullu Mehmed Paşa suikaste uğrayıp öldürüldü",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1609-08-09",
    "b": "Sultanahmet Camii'nin temeli atıldı",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1656-09-15",
    "b": "Köprülü Mehmed Paşa'nın şartlı kabulle sadrazamlığa atanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1656-10-01",
    "b": "Kadızadeliler hareketinin Köprülü Mehmed Paşa tarafından bastırılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1661-11-01",
    "b": "Köprülüzâde Fâzıl Ahmed Paşa'nın sadrazamlığa atanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1665-06-01",
    "b": "Vânî Mehmed Efendi'nin Yeni Cami vâizliğine ve pâdişah hocalığına atanması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1689-10-25",
    "b": "Köprülüzâde Fâzıl Mustafa Paşa'nın sadrazamlığa atanması ve mali ıslahatları",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1734-06-01",
    "b": "Hendesehâne'nin (mühendislik okulunun ilk örneği) kuruluşu",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1766-05-01",
    "b": "Büyük İstanbul depremi ve Fâtih Camii'nin yıkılması",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1772-10-01",
    "b": "Baron de Tott öncülüğünde kısa ömürlü topçuluk okulu denemesi",
    "kume": "ANA",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1478-01-06",
    "b": "Nasriyye bahçesi — Uzun Hasan'ın kendi yaptırdığı türbe",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1452-09-01",
    "b": "Cami, medrese, zâviye ve kervansaray imar programı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1478-06-01",
    "b": "Gökmescid'in tamamlanması — rakibin eserini bitirmek",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1302-01-01",
    "b": "Mecdüddin Mahmud Bey, Ermenek Ulucamii'ni tamamlattı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1336-01-01",
    "b": "Aksaray Zinciriye Medresesi tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1340-01-01",
    "b": "Ermenek Tol Medresesi inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1381-06-01",
    "b": "Nefîse Sultan, Karaman'da Hatuniye Medresesi'ni yaptırdı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1432-01-01",
    "b": "Tâceddin İbrâhim Bey, Karaman'da büyük külliyesini tamamlattı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1431-01-01",
    "b": "Aksaray Ulucamii tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1441-01-01",
    "b": "Mut'ta Lâl Ağa Camii yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1206-01-01",
    "b": "Kayseri Gevher Nesibe Darüşşifası ve Tıp Medresesi'nin kuruluşu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1217-01-01",
    "b": "Sivas Keykâvus Darüşşifası'nın inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1224-06-01",
    "b": "I. Keykubad'ın Konya'da hastane ve ulucamiler yaptırması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1229-01-01",
    "b": "Sultan Hanı kervansaraylarının inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1235-01-01",
    "b": "Çankırı Atabey Ferruh Hastahanesi'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1251-01-01",
    "b": "Karatay Medresesi'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1264-01-01",
    "b": "İnce Minareli Medrese (Sahip Ata Dârülhadisi)'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1272-01-01",
    "b": "Kastamonu Ali b. Pervâne Hastahanesi'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1275-01-01",
    "b": "Tokat Gökmedrese (Pervâne Darüşşifası)'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1146-01-01",
    "b": "Harput Ulu Camii Fahreddin Kara Arslan tarafından yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1147-01-01",
    "b": "Malabadi (Silvan) Köprüsü Timurtaş tarafından yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1155-01-01",
    "b": "Hasankeyf Dicle Köprüsü Kara Arslan tarafından yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1177-01-01",
    "b": "Mardin Ulu Camii'nin minaresi bu döneme tarihlenir",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1204-01-01",
    "b": "Kızıltepe (Dunaysır) Ulu Camii yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1350-01-01",
    "b": "Dicle üzerindeki köprüler ticaret yolunu güvence altına aldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1385-01-01",
    "b": "Sultan Îsâ Medresesi tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1339-01-01",
    "b": "Hurman yolunda Çavlı Han kervansarayı kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1442-06-01",
    "b": "Maraş Ulucami'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1481-01-01",
    "b": "Elbistan'da iki cami ve medrese yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1501-01-01",
    "b": "Maraş Ulucami, Alâüddevle Bozkurt tarafından yenilendi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1509-01-01",
    "b": "Maraş Hatuniye Camii yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1510-01-01",
    "b": "Maraş'ta Taşmedrese ve diğer medreseler inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1312-01-01",
    "b": "Mehmed Bey Ulu Camii ve külliyesinin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1374-01-01",
    "b": "İsa Bey Camii'nin Ayasuluk'ta inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1714-01-01",
    "b": "Köprülüzâde Nûman Paşa Çetine'yi ikinci kez tahrip etti",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1375-01-01",
    "b": "Evtimiy Tırnova Patrikliği'ne getirildi — Tırnova Edebiyat Okulu zirvede",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1835-01-02",
    "b": "Aprilov Mektebi (Gabrovo) açıldı — ilk modern Bulgar okulu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1888-10-01",
    "b": "Sofya Yüksek Okulu kuruldu — Bulgaristan'ın ilk üniversitesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1862-01-01",
    "b": "Tongwen Guan (Yabancı Diller Okulu) kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1665-01-01",
    "b": "Fasilidas'ın Bâbürlü Hükümdarı Evrengzîb'den İslâmî kitap ve cami tamiri için yardım istemesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1412-01-01",
    "b": "Kilve Büyük Camii'nin Sultan Süleyman zamanında tamamlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1570-01-01",
    "b": "Mombasa'da Mandhry Camii'nin yapımı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1913-01-03",
    "b": "Nuhu Mbogo'nun 600 cami ve okul için arazi tahsisi talebi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1558-01-01",
    "b": "Tatta'da Dabgîr Camii inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1643-01-01",
    "b": "Tatta'da Cami-i Mescid'in inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1666-01-01",
    "b": "Leh'te Cuma Camii yapıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1854-06-01",
    "b": "Durbar Okulu açıldı: Nepal'de modern eğitimin başlangıcı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1889-01-01",
    "b": "Bîr Hastahanesi kuruldu: Nepal'in ilk modern hastahanesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1578-08-29",
    "b": "Tiflis'te iki kilisenin camiye çevrilmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1556-01-27",
    "b": "Hümâyun kütüphane merdiveninden düşerek öldü, Ekber tahta çıktı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1545-05-22",
    "b": "Şîr Şah Sûrî'nin türbesi Sâsârâm'da tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1570-01-01",
    "b": "Hümâyun'un Türbesi Delhi'de tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1628-01-01",
    "b": "İtimâdüddevle Türbesi Agra'da tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1590-01-01",
    "b": "Jahangir döneminde Bâbürlü minyatür resim okulu doğa gözlemine yöneldi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1297-09-11",
    "b": "Stirling Köprüsü Savaşı — Wallace İngilizleri yendi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1854-11-04",
    "b": "Florence Nightingale Üsküdar'daki askerî hastaneye ulaştı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1870-08-09",
    "b": "Eğitim Yasası — devlet okulları sistemi kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1297-10-05",
    "b": "Şenb-i Gāzân (Gāzâniyye) külliyesinin temeli atıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1313-01-01",
    "b": "Olcaytu Türbesi (Sultâniye Kümbeti) yapıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1350-01-01",
    "b": "Hasan-ı Büzürg Necef'teki türbeyi yeniden imar ettirdi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1360-01-01",
    "b": "Muzafferî mimarisi: Kirman, Yezd ve Meybüz'de cami ve medreseler",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1355-01-01",
    "b": "Serbedârî bayındırlık işleri: Tûs su kanalları ve Sebzevâr Mescid-i Câmi'i",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1423-01-01",
    "b": "Pammatone Hastanesi'nin kurulması — şehir hayır sisteminin merkezileşmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1510-09-15",
    "b": "Cenovalı Katerina'nın ölümü — hastane hizmetinin azizeye dönüşmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1565-01-01",
    "b": "Luca Cambiaso'nun freskleri — Ceneviz resim okulunun doğuşu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1737-01-02",
    "b": "Muratori ve Este Kütüphanesi — modern tarih yönteminin doğduğu yer",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1419-10-20",
    "b": "Jacopo della Quercia'nın Fonte Gaia'sı — Campo'nun anıtsal çeşmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1480-01-02",
    "b": "Francesco di Giorgio'nun mimarlık ve mühendislik risalesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1502-01-02",
    "b": "Pinturicchio'nun Piccolomini Kütüphanesi freskleri",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1889-02-05",
    "b": "Tokyo Sanat Okulu (bugünkü Tokyo Sanat Üniversitesi) kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1465-01-01",
    "b": "Tebriz'de Gökmescid (Mescid-i Kebûd) inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1467-11-10",
    "b": "Gökmescid banisinin ölümüyle yarım kaldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1467-11-10",
    "b": "Cihan Şah, Tebriz'de kendi yaptırdığı Muzafferiye Medresesi'ne gömüldü",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1571-01-01",
    "b": "Devlet Giray, Gözleve'de bir cami inşa ettirdi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1733-01-01",
    "b": "Bahçesaray'da Altın Çeşme yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1740-01-01",
    "b": "Bahçesaray'da Han Camii'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1763-01-01",
    "b": "Kırım Giray Han, Gözyaşı Çeşmesi'ni yaptırdı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1500-01-01",
    "b": "Zincirli Medrese Bahçesaray'da inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1501-01-01",
    "b": "Hacı Giray'ın türbesi Salacık'ta yapıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1552-01-01",
    "b": "Gözleve'de Tatar Han Camii inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1323-01-01",
    "b": "Medresetü'l-Attârîn inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1249-01-01",
    "b": "Şemmâiyye Medresesi inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1437-01-01",
    "b": "Müntasıriyye Medresesi inşa edildi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1602-01-01",
    "b": "Raków Akademisi — Polonyalı Kardeşler'in okulu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1747-08-08",
    "b": "Załuski Kütüphanesi açıldı — Avrupa'nın ilk halk kütüphanelerinden",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1765-03-15",
    "b": "Şövalye Okulu kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1489-01-01",
    "b": "Bibliotheca Corviniana'nın Avrupa'nın önde gelen Rönesans kütüphanelerinden biri hâline gelmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1284-01-01",
    "b": "Kalavun Külliyesi ve Mansûrî Bîmâristânı kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1315-06-01",
    "b": "Sencer el-Cavlî Kudüs nâibi oldu, Cavliyye ve Sellâmiyye medreselerini yaptırdı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1329-01-01",
    "b": "Tenkiziyye Medresesi ve Sûkulkattânîn Kudüs'te tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1356-01-01",
    "b": "Sultan Hasan Camii ve Külliyesi'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1371-01-01",
    "b": "Emeviyye Camii'ne büyük güneş saati",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1384-01-01",
    "b": "Berkuk Külliyesi'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1472-01-01",
    "b": "Kayıtbay Külliyesi'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1479-10-13",
    "b": "Emeviyye Camii'nde büyük yangın çıktı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1481-11-05",
    "b": "Mescid-i Nebevî yangını ve Kayıtbay'ın yeniden inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1482-01-01",
    "b": "Kayıtbay'ın Kudüs'te medrese ve sebil inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1501-01-01",
    "b": "Kansu Gavri Kahire'de yeni han ve kapalı çarşılar inşa ettirdi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1503-01-01",
    "b": "Kansu Gavri Külliyesi'nin inşasına başlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1835-01-01",
    "b": "Tercüme okulunun Medresetü'l-elsün'e dönüştürülmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1871-06-01",
    "b": "Kasrünnîl Köprüsü'nün inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1550-01-01",
    "b": "Süyünbike Kazan'da bir kütüphane kurdu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1870-01-01",
    "b": "Orenburg'da dinî okullar açıldı — İslâm Kazaklar arasında yaygınlaştı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1250-01-01",
    "b": "Kâşgar'da Mesûdiye Medresesi yaptırıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1536-01-01",
    "b": "Mîr-i Arab Medresesi tamamlandı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1636-01-01",
    "b": "Şîrdâr Medresesi tamamlandı (Semerkant, Registan)",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1660-01-01",
    "b": "Tillâkârî Medresesi tamamlandı — Registan üçlemesi tamam",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1900-01-01",
    "b": "Buhara'da ilk usûl-i cedîd okulları açıldı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1537-01-01",
    "b": "Pedro Nunes'un rota risalesi — loxodrome'un keşfi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1402-12-15",
    "b": "Timur'un İzmir Kalesi'ni alması — Anadolu köprübaşının kaybı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1489-01-01",
    "b": "Rodos'ta yeni Hastane'nin (Nuovo Ospedale) tamamlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1574-01-01",
    "b": "Sacra Infermeria'nın (Kutsal Hastane) açılması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1615-04-21",
    "b": "Wignacourt Su Kemeri'nin tamamlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1450-01-01",
    "b": "Rodos'ta tarikat arşivi ve kütüphanesinin düzenlenmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1638-01-01",
    "b": "Malta'da hastane hemşireliğinin kadınlara açılması ve Kadınlar Hastanesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1723-01-01",
    "b": "Valletta'da Umumî Kütüphane'nin (Bibliotheca) temellerinin atılması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1773-06-28",
    "b": "Moskova Maden Okulu kuruldu",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1508-09-01",
    "b": "Bağdat'ta Ebû Hanîfe ve Abdülkādir-i Geylânî türbelerinin tahribi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1598-01-01",
    "b": "Kervan yolu ve kervansaray ağının genişletilmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1603-01-01",
    "b": "Şeyh Lütfullah Camii'nin inşasına başlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1611-01-01",
    "b": "Şah (Mescid-i İmam) Camii'nin inşasına başlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1602-06-01",
    "b": "Sî-o-se Pol (Allahverdi Han) Köprüsü'nün tamamlanması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1620-01-01",
    "b": "Molla Sadrâ'nın Şîraz'daki Han Medresesi hocalığı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1706-01-01",
    "b": "Çihar Bağ (Mâder-i Şah) Medresesi'nin inşası",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1417-01-01",
    "b": "Uluğ Bey Medresesi'nin inşaatı başladı — Registan'ın ilk yapısı",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   },
   {
    "t": "1591-01-01",
    "b": "Rialto Köprüsü'nün taştan yapılması",
    "kume": "YAB",
    "etiket_ekle": [
     "imar"
    ]
   }
  ],
  "elenen": 114,
  "bas_ad_onerisi": {
   "oneri": "imar",
   "olcum": {
    "toplam": 212,
    "uslup": 5,
    "eser": 207
   },
   "gerekce": "Bugunku `mimari` etiketi 212 kayitta var ve 207'si ESER/BAYINDIRLIK, yalnizca 5'i USLUP/SANAT (Mimar Sinan'in atanmasi · Muzafferi mimarisi · cephe mimarisi). Yani etiketin ADI icerigine YANLIS. `imar` bas ad olur, `mimari` o bes uslup kaydinda kalir. Gocun mekanik: tek kural, 207 kayit. 🔴 Ama bu bir VERI GOCUDUR, karar koordinatorun.",
   "alternatif": "`mimari` bas ad kalsin, `imar` ona baglansin — gocsuz, ama Emre'nin ayrimi (bayindirlik isi ≠ mimari uslup) kaybolur."
  },
  "semsiye_onerisi": {
   "oneri": [
    "kultur",
    "icduzen"
   ],
   "olcum": {
    "askeri": 44,
    "siyasi": 32,
    "hanedan": 13,
    "kultur": 196,
    "icduzen": 73,
    "iktisat": 55
   },
   "gerekce": "362 imar adayinin BASKA etiketleri: Kultur-bilim %54 · Ic duzen %20 · Iktisat %15 · Askeri %12. Agirlik Kultur-bilim'de (cami·medrese·kopru eserdir), ama Emre `imar`i 'devletlerin OLAGAN ISLERI' diye tarif etti ⇒ Ic duzen de. Iktisat'a BAGLANMADI: %15 agirlik, altyapinin kendisi zaten `ekonomi` etiketi tasiyorsa Iktisat'ta gorunuyor."
  }
 },
 "isyan_darbe_elemesinden": {
  "olcum": "darbe-degil kovasindaki 70 kaydin 16'si ASLINDA ISYAN",
  "kayit": [
   {
    "t": "1826-06",
    "b": "Vak'a-i Hayriyye — Yeniçeri Ocağı kaldırıldı",
    "kume": "ANA",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1730-06-01",
    "b": "Nedîm'in Patrona Halil isyanı sırasında ölümü",
    "kume": "ANA",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1730-09-25",
    "b": "Sâdâbâd'ın Patrona Halil isyanında tahrip edilmesi",
    "kume": "ANA",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1822-10-24",
    "b": "Şendî'de İsmâil Paşa'nın öldürülmesi",
    "kume": "ANA",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1596-06-20",
    "b": "III. Mehmed yeniçeri baskısıyla bizzat sefere çıktı",
    "kume": "ANA",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1305-04-30",
    "b": "Roger de Flor öldürüldü — Katalan İntikamı başladı",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1631-01-01",
    "b": "Muhammed Yûsuf'un isyanı — Portekiz kaptanının öldürülmesi ve İslâm'a dönüşü",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1888-01-02",
    "b": "Muvanga'nın tahttan indirilip sürgüne gönderilmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1305-04-30",
    "b": "Roger de Flor'un öldürülmesi ve 'Katalan İntikamı'nın başlaması",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1584-01-01",
    "b": "II. Mehmed Giray isyan gerekçesiyle katledildi, yerine İstanbul'dan gönderilen II. İslâm Giray getirildi",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1863-01-22",
    "b": "Ocak Ayaklanması başladı",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1514-07-20",
    "b": "Dózsa György'nin idamı",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1795-05-20",
    "b": "Martinovics Ignác ve Macar Yakobenlerinin idamı",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1849-10-06",
    "b": "Aradi Vértanúk — on üç Macar generalinin idamı",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1822-10-24",
    "b": "İsmâil Paşa'nın Şendî'de öldürülmesi",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   },
   {
    "t": "1826-07-31",
    "b": "Osmanlı, Yeniçeri Ocağı'nı kaldırdı — Rusya için stratejik fırsat",
    "kume": "YAB",
    "etiket_ekle": [
     "isyan"
    ]
   }
  ],
  "not": "Koordinatorun sezgisi dogru cikti: eledigim kume BOS DEGILDI, baska bir kovaya aitti. Bir eleme kovasi, KENDI icinde yeniden taranmali."
 },
 "kriz_dagitimi": {
  "olcum": "tur:'kriz' tasiyan 67 kayit OKUNDU, 7 kovaya dagitildi, ATANMAMIS 0",
  "dagitim": {
   "diplomasi": 8,
   "siyaset": 8,
   "salgin": 5,
   "savas": 13,
   "ekonomi": 10,
   "taht": 13,
   "isyan": 10
  },
  "hukum": "`kriz` TEK BASINA BIR KONU DEGIL, bir HAL bildirir: mali kriz · veraset krizi · diplomatik kriz · isyan ayni kelimeyi tasiyor. Olcum bunu dogruladi — 67 kayit ALTI SEMSIYENIN HEPSINE dagildi. ⇒ `kriz` ikincil etiket olarak KALSIN, ama her kayit kendi ailesinden bir etiket DE alsin.",
  "kayit": {
   "diplomasi": [
    "Olmütz Punktasyonu — Erfurt Birliği girişiminin çöküşü",
    "Birinci Fas Krizi — Tanca çıkarması",
    "İkinci Fas Krizi — Agadir Krizi",
    "I. François'nın Kutsal Roma-Germen İmparatorluğu seçiminde Charles'a yenilmesi",
    "İngiliz Ültimatomu — sömürge hayali çöktü",
    "Bosna-Hersek'in ilhakı — Sırbistan'ın savaş tehdidi",
    "\"İspanya tertibi\" — gerçekliği tartışmalı bir komplo",
    "Lido olayı — Fransız gemisine ateş açılması"
   ],
   "siyaset": [
    "Anagni Baskını — Papa VIII. Bonifacius'un tutuklanması",
    "Hümâyun, Şîr Şah'a yenildikten sonra Sind'e sığındı",
    "Dev Şemşer'in devrilmesiyle Rana idaresinde reform denemesi sona erdi",
    "Anagni Olayı — Fransız ajanlarının papayı tutuklaması",
    "VI. Urban'ın seçilmesi — Batı Skizması'nın fitili",
    "Şâhin Giray Ruslara sığındı, Kırım'daki kontrolünü kaybetti",
    "1905 seçim krizi — Ferenc József'in genel oy tehdidiyle Liberal Parti'ye baskısı",
    "Aforoz krizi (Interdetto) — kilise karşısında devletin üstünlüğü"
   ],
   "salgin": [
    "Kara Ölüm'ün Fransa'yı vurması",
    "Büyük Lizbon Depremi",
    "Kara Ölüm",
    "Doge Sarayı yangını",
    "Büyük veba"
   ],
   "savas": [
    "Orléans Dükü'nün suikastı — Armagnac-Burgonya iç savaşının başlaması",
    "Napolyon'un Elba'dan dönüşü — Yüz Gün",
    "Saray darbesi İngiliz müdahalesini tetikledi",
    "Roma'nın Yağmalanması",
    "Fransız donanmasının Cenova'yı bombalaması",
    "Galeazzo Maria Sforza'nın suikastı",
    "Aspromonte — Garibaldi'nin Roma seferinin durdurulması",
    "Cenova'nın yağmalanması — İmparatorluk ordusunun şehri basması",
    "Fransız donanmasının Cenova'yı bombalaması",
    "Roger de Flor'un öldürülmesi ve 'Katalan İntikamı'nın başlaması",
    "Solferino bozgununun Bach sisteminin çöküşünü hızlandırması",
    "Königgrätz bozgununun Ausgleich'i kaçınılmaz kılması",
    "Kalmuk istilâsı Nogayları böldü"
   ],
   "ekonomi": [
    "Mississippi Balonu'nun patlaması — John Law'ın çöküşü",
    "Borsa çöküşü (Börsenkrach)",
    "Büyük kıtlık ve tahıl ithalatının Baltık'a kayması",
    "İspanyol iflası — Ceneviz bankerlerinin ilk büyük yıkımı",
    "İkinci İspanyol iflası — Ceneviz finans üstünlüğünün kırılması",
    "Üçüncü İspanyol iflasının Cenova'ya yansıması",
    "Viyana borsa çöküşünün Macar ekonomisine sıçraması",
    "Fransa'daki tarikat mallarına el konulması",
    "Akkâ'nın düşüşü — Levant ticaretinin yeniden kurulması",
    "Ümit Burnu yolunun açılması — baharat tekelinin kırılması"
   ],
   "taht": [
    "Kraliyet ailesinin Varennes Kaçışı",
    "Şah Cihan'ın hastalığı üzerine oğulları arasında taht mücadelesi başladı",
    "Racâ Ganeş, Bengal Sultanlığı'nda kısa süreliğine iktidarı ele geçirdi",
    "Parisina Malatesta ve Ugo d'Este'nin idamı — hânedan içi trajedi",
    "Süyünbike ile oğlu Ütemiş Giray Moskova'ya teslim edildi",
    "Abdullah Han bir seyahat sırasında Ruslar tarafından esir alındı",
    "1383-1385 Bunalımı başladı — Kastilya'ya karşı tahta veraset krizi",
    "Alfarrobeira Savaşı — naiplik krizi kanlı bitti",
    "Kraliyet ailesi Brezilya'ya kaçtı",
    "Dom Miguel kendini mutlak kral ilan etti — Liberal Savaşlar başladı",
    "Kral I. Carlos ve veliaht suikaste kurban gitti — Lizbon Regicide'i",
    "Timur sonrası taht mücadelesi başladı",
    "Uluğ Bey, öz oğlu tarafından öldürüldü"
   ],
   "isyan": [
    "Terör Dönemi'nin resmen ilanı",
    "Thermidor Tepkisi — Robespierre'in idamı",
    "Boulanger Krizi'nin doruğu",
    "Alfred Dreyfus'un vatana ihanetten mahkûm edilmesi",
    "Rampjaar — Felaket Yılı",
    "Papa IX. Pius'un Roma'dan Gaeta'ya kaçışı",
    "Pazzi Komplosu",
    "Fieschi Komplosu — Doria düzenine karşı başarısız darbe",
    "Giulio Cybo komplosunun bastırılması ve Doria düzeninin pekişmesi",
    "Angelo Querini vakası — anayasal muhalefetin bastırılması"
   ]
  }
 }
};

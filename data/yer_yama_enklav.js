// data/yer_yama_enklav.js — SORGUSUZ ENKLAV BULGULARI
// OPUS HAZIR KITA 87 · 25 Agustos 2026 · OSMANGAZI sevkiyle
//
// 🔴 ONERIDIR, VERI DEGIL. Motor okumaz, index.html'e EKLENMEZ.
//
// YONTEM — GEOMETRI KOSTURULMADI (koordinatorun talimati). Ayni sahibin
// yerlesimleri <=150 km kenarlarla baglandi (flood fill); el degisen kaydin
// BILESENI <=5 ise ADA sayildi. Bu bir YAKLASIMDIR, Voronoi DEGIL.
//
// DORT KOVA — ucu de mesru, dorduncusu OLCUMLE DOGDU:
//   cografi-tecrit  150 km'de <=2 komsusu var → ada/col; enklav kusuru DEGIL,
//                   YOGUNLUK meselesi (CLAUDE.md §2)
//   veri-eksigi     yogun bolgede kopuk · ana govde <=300 km
//                   ⇒ aradaki yerlesimlerin donemi KAYITTA yok olabilir
//   bilinmiyor      300-800 km · kaynak susuyor ⇒ KAYDEDILDI, uydurulmadi
//   hakiki-enklav   >800 km · denizasiri us / uzak sefer ⇒ enklav:true onerisi
window.YER_YAMA_ENKLAV = {
 "olcum": {
  "kirilma_gunu": 8369,
  "uc_komsu_testi_aday": 670,
  "kume_testi_ada": 2875,
  "elenen_ana_govde_yok": 224,
  "elenen_kucuk_devlet": 184,
  "elenen_gecici_cephe": 64,
  "sorgusuz_enklav_adayi": 2403,
  "beyanli_donem_veride": 22,
  "adaylarin_beyanlisi": 17,
  "kova": {
   "cografi-tecrit": 1847,
   "veri-eksigi": 377,
   "bilinmiyor": 140,
   "hakiki-enklav": 39
  }
 },
 "cografi_tecrit": [
  {
   "gun": "1578-08-09",
   "yerlesim": "Sohum",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 231.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Sohum"
   ],
   "ana_govde_km": 159.3,
   "ana_govde": "Batum",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1810-07-01",
   "yerlesim": "Sohum",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 113.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Sohum"
   ],
   "ana_govde_km": 159.2,
   "ana_govde": "Kutaisi",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Kabartay (Nalçik)",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 333.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Kabartay (Nalçik)"
   ],
   "ana_govde_km": 170.9,
   "ana_govde": "Stavropol–Kuma bozkırı",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1774-07-21",
   "yerlesim": "Kabartay (Nalçik)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 149.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Kabartay (Nalçik)"
   ],
   "ana_govde_km": 252.5,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Terek deltası (Kızlar)",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Terek deltası (Kızlar)"
   ],
   "ana_govde_km": 309.8,
   "ana_govde": "Kalmuk bozkırı",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Terek deltası (Kızlar)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Terek deltası (Kızlar)"
   ],
   "ana_govde_km": 296.3,
   "ana_govde": "Astrahan",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Mekke",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 285.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 339.5,
   "ana_govde": "Medine",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1803-08-06",
   "yerlesim": "Mekke",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 2.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke"
   ],
   "ana_govde_km": 285.2,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1841-05-24",
   "yerlesim": "Mekke",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 75.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 285.2,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1813-01-23",
   "yerlesim": "Mekke",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 28.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke"
   ],
   "ana_govde_km": 285.2,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1803-04-30",
   "yerlesim": "Mekke",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 0.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 657.8,
   "ana_govde": "Necid içi",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1806-01-01",
   "yerlesim": "Mekke",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 7.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 339.5,
   "ana_govde": "Medine",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Medine",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 287.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Medine"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Yenbu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1841-05-24",
   "yerlesim": "Medine",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 77.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Medine"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Yenbu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1812-12-03",
   "yerlesim": "Medine",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 28.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Medine"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Yenbu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-06-01",
   "yerlesim": "Medine",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 7.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Medine"
   ],
   "ana_govde_km": 349.6,
   "ana_govde": "Tâif",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1919-01-10",
   "yerlesim": "Medine",
   "yeni_sahip": "hicaz",
   "alan": "s",
   "yil": 4.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Medine"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Yenbu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Cidde",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 295.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 305.1,
   "ana_govde": "Yenbu",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1841-05-24",
   "yerlesim": "Cidde",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 75.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 224.1,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1813-01-23",
   "yerlesim": "Cidde",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 28.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke"
   ],
   "ana_govde_km": 224.1,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Yenbu",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Yenbu"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Medine",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1841-05-24",
   "yerlesim": "Yenbu",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 75.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Yenbu"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Medine",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1811-11-01",
   "yerlesim": "Yenbu",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 29.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Yenbu"
   ],
   "ana_govde_km": 253.4,
   "ana_govde": "Halâib",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-20",
   "yerlesim": "Yenbu",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 6.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Yenbu"
   ],
   "ana_govde_km": 162.6,
   "ana_govde": "Medine",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1916-07-27",
   "yerlesim": "Yenbu",
   "yeni_sahip": "hicaz",
   "alan": "s",
   "yil": 7.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Yenbu"
   ],
   "ana_govde_km": 305.1,
   "ana_govde": "Cidde",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Tebük",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 400.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebük"
   ],
   "ana_govde_km": 216.6,
   "ana_govde": "Maan",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-01-01",
   "yerlesim": "Tebük",
   "yeni_sahip": "hicaz",
   "alan": "s",
   "yil": 5.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebük"
   ],
   "ana_govde_km": 500.4,
   "ana_govde": "Yenbu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-09-27",
   "yerlesim": "Maan",
   "yeni_sahip": "hicaz",
   "alan": "s",
   "yil": 5.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Maan"
   ],
   "ana_govde_km": 216.6,
   "ana_govde": "Tebük",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1538-08-03",
   "yerlesim": "Aden",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 96.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Aden"
   ],
   "ana_govde_km": 200.6,
   "ana_govde": "Moha",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1839-01-19",
   "yerlesim": "Aden",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 84.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Aden"
   ],
   "ana_govde_km": 1629.4,
   "ana_govde": "Abu Dabi",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1547-01-01",
   "yerlesim": "Sana",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 88.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Sana"
   ],
   "ana_govde_km": 160.8,
   "ana_govde": "Zebîd",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-01-01",
   "yerlesim": "Ebha (Asir)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 47.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebha (Asir)"
   ],
   "ana_govde_km": 173.4,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-01",
   "yerlesim": "Ebha (Asir)",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 3.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebha (Asir)"
   ],
   "ana_govde_km": 830.9,
   "ana_govde": "Şakrâ",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "İbrim",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 184.3,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "İbrim",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 184.3,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "İbrim",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 184.3,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1795-10-24",
   "yerlesim": "Krakov",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 123.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Krakov"
   ],
   "ana_govde_km": 150.8,
   "ana_govde": "Eperjes (Prešov)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Krakov",
   "yeni_sahip": "polonya",
   "alan": "s",
   "yil": 5.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Krakov"
   ],
   "ana_govde_km": 252.0,
   "ana_govde": "Varşova",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1772-08-05",
   "yerlesim": "Lvov",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 146.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Lvov",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 182.4,
   "ana_govde": "Munkács (Mukacheve)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Voronej",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 144.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Voronej"
   ],
   "ana_govde_km": 193.6,
   "ana_govde": "Tambov",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1585-01-01",
   "yerlesim": "Voronej",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 338.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Voronej"
   ],
   "ana_govde_km": 206.2,
   "ana_govde": "Kursk",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Palermo",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Palermo",
    "Pantelerya",
    "Trapani"
   ],
   "ana_govde_km": 166.3,
   "ana_govde": "Katanya (Catania)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1798-06-12",
   "yerlesim": "Malta",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 2.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Malta"
   ],
   "ana_govde_km": 595.3,
   "ana_govde": "Zaklise (Zakynthos)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1800-09-05",
   "yerlesim": "Malta",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 123.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Malta"
   ],
   "ana_govde_km": 1002.4,
   "ana_govde": "Menorka (Mahon)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-01-01",
   "yerlesim": "Maskat",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 143.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Maskat"
   ],
   "ana_govde_km": 161.7,
   "ana_govde": "Sûr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1650-01-26",
   "yerlesim": "Maskat",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 273.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Maskat",
    "Nizva"
   ],
   "ana_govde_km": 161.7,
   "ana_govde": "Sûr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-10-23",
   "yerlesim": "Bordo",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 1.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bordo"
   ],
   "ana_govde_km": 671.1,
   "ana_govde": "Plymouth",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1581-04-16",
   "yerlesim": "Lizbon",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 59.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Badajoz",
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 176.2,
   "ana_govde": "Coimbra",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Lizbon",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 176.2,
   "ana_govde": "Coimbra",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1526-08-29",
   "yerlesim": "Prag",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 392.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Prag"
   ],
   "ana_govde_km": 252.7,
   "ana_govde": "Viyana",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Prag",
   "yeni_sahip": "cekoslovakya",
   "alan": "s",
   "yil": 5.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Prag"
   ],
   "ana_govde_km": 291.2,
   "ana_govde": "Bratislava",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1466-10-19",
   "yerlesim": "Gdansk",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 326.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Gdansk"
   ],
   "ana_govde_km": 244.1,
   "ana_govde": "Poznan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Gdansk",
   "yeni_sahip": "almanya",
   "alan": "s",
   "yil": 125.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Gdansk",
    "Klaipėda (Memel)",
    "Königsberg"
   ],
   "ana_govde_km": 244.1,
   "ana_govde": "Poznan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Gdansk",
   "yeni_sahip": "polonya",
   "alan": "s",
   "yil": 5.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Gdansk"
   ],
   "ana_govde_km": 283.5,
   "ana_govde": "Varşova",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Poznan",
   "yeni_sahip": "almanya",
   "alan": "s",
   "yil": 125.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Poznan"
   ],
   "ana_govde_km": 195.6,
   "ana_govde": "Stettin (Szczecin)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-12-27",
   "yerlesim": "Poznan",
   "yeni_sahip": "polonya",
   "alan": "s",
   "yil": 4.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Poznan"
   ],
   "ana_govde_km": 244.1,
   "ana_govde": "Gdansk",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1795-10-24",
   "yerlesim": "Varşova",
   "yeni_sahip": "almanya",
   "alan": "s",
   "yil": 11.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Varşova"
   ],
   "ana_govde_km": 277.7,
   "ana_govde": "Königsberg",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1815-06-09",
   "yerlesim": "Varşova",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 103.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Varşova"
   ],
   "ana_govde_km": 352.1,
   "ana_govde": "Kaunas",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Varşova",
   "yeni_sahip": "polonya",
   "alan": "s",
   "yil": 5.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Varşova"
   ],
   "ana_govde_km": 252.0,
   "ana_govde": "Krakov",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Minsk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 130.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Minsk"
   ],
   "ana_govde_km": 192.6,
   "ana_govde": "Polotsk",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Novgorod",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Novgorod",
    "Staraya Russa"
   ],
   "ana_govde_km": 159.8,
   "ana_govde": "Oreşek (Nöteborg)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Novgorod",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Novgorod",
    "Staraya Russa"
   ],
   "ana_govde_km": 159.8,
   "ana_govde": "Oreşek (Nöteborg)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1514-08-01",
   "yerlesim": "Smolensk",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 32.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Smolensk"
   ],
   "ana_govde_km": 197.6,
   "ana_govde": "Velikiye Luki",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Smolensk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 64.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Smolensk"
   ],
   "ana_govde_km": 197.6,
   "ana_govde": "Velikiye Luki",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1611-06-13",
   "yerlesim": "Smolensk",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Daugavpils (Dünaburg)",
    "Polotsk",
    "Smolensk",
    "Vitebsk"
   ],
   "ana_govde_km": 306.6,
   "ana_govde": "Minsk",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1654-10-03",
   "yerlesim": "Smolensk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 269.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Smolensk"
   ],
   "ana_govde_km": 197.6,
   "ana_govde": "Velikiye Luki",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Vologda",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Belozersk",
    "Kirillov",
    "Vologda"
   ],
   "ana_govde_km": 169.5,
   "ana_govde": "Galiç (Kostroma)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Vologda",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Belozersk",
    "Kirillov",
    "Vologda"
   ],
   "ana_govde_km": 169.5,
   "ana_govde": "Galiç (Kostroma)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1574-01-01",
   "yerlesim": "Ufa",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 349.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Ufa"
   ],
   "ana_govde_km": 272.8,
   "ana_govde": "Yelabuga",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1723-01-01",
   "yerlesim": "Perm",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 200.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kungur",
    "Perm"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Solikamsk",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1362-01-01",
   "yerlesim": "Poltava",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 292.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Poltava",
    "Çehrin (Çigirin)"
   ],
   "ana_govde_km": 200.2,
   "ana_govde": "Putivl",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1784-01-01",
   "yerlesim": "Vladikavkaz",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 139.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kabartay (Nalçik)",
    "Vladikavkaz"
   ],
   "ana_govde_km": 188.4,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1921-11-02",
   "yerlesim": "Hâil",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 2.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hâil",
    "Nefud çölü"
   ],
   "ana_govde_km": 261.2,
   "ana_govde": "Buraydâ (Kasîm)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-09-20",
   "yerlesim": "Doha (Katar)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 41.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Cübeyl",
    "Doha (Katar)",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 574.5,
   "ana_govde": "Kuveyt",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1916-11-03",
   "yerlesim": "Doha (Katar)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 7.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Doha (Katar)",
    "Manama (Bahreyn)"
   ],
   "ana_govde_km": 303.5,
   "ana_govde": "Abu Dabi",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1820-01-08",
   "yerlesim": "Abu Dabi",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 103.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Abu Dabi",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 3172.4,
   "ana_govde": "Yafna (Jaffna)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Nizva",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 408.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Nizva"
   ],
   "ana_govde_km": 230.0,
   "ana_govde": "Buraymî",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1888-01-01",
   "yerlesim": "Mukalla",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 35.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Mukalla"
   ],
   "ana_govde_km": 388.5,
   "ana_govde": "Lâs Hore",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1818-09-09",
   "yerlesim": "Nefud çölü",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 5.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Nefud çölü"
   ],
   "ana_govde_km": 365.1,
   "ana_govde": "Buraydâ (Kasîm)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1744-01-01",
   "yerlesim": "Nefud çölü",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 74.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Nefud çölü"
   ],
   "ana_govde_km": 365.1,
   "ana_govde": "Buraydâ (Kasîm)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1824-06-01",
   "yerlesim": "Nefud çölü",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 11.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Nefud çölü"
   ],
   "ana_govde_km": 365.1,
   "ana_govde": "Buraydâ (Kasîm)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1921-11-02",
   "yerlesim": "Nefud çölü",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 2.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hâil",
    "Nefud çölü"
   ],
   "ana_govde_km": 200.9,
   "ana_govde": "Dûmetülcendel (Cevf)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-01-22",
   "yerlesim": "Sina güneyi",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 196.9,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Sina güneyi",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 61.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 196.9,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1867-06-08",
   "yerlesim": "Sina güneyi",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 47.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 196.9,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Sina güneyi",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 196.9,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Bozkır (Deşt-i Kıpçak)",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 281.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Bozkır (Deşt-i Kıpçak)"
   ],
   "ana_govde_km": 168.3,
   "ana_govde": "Don bozkırı (Sal)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1783-04-19",
   "yerlesim": "Bozkır (Deşt-i Kıpçak)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 140.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bozkır (Deşt-i Kıpçak)"
   ],
   "ana_govde_km": 168.3,
   "ana_govde": "Don bozkırı (Sal)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Kalmuk bozkırı",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kalmuk bozkırı"
   ],
   "ana_govde_km": 309.8,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Kalmuk bozkırı",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kalmuk bozkırı"
   ],
   "ana_govde_km": 183.8,
   "ana_govde": "Saray (Selitrennoye)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Ural eteği",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Ural eteği",
    "Uralsk (Yayık)"
   ],
   "ana_govde_km": 275.3,
   "ana_govde": "Samara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Ural eteği",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Ural eteği"
   ],
   "ana_govde_km": 275.3,
   "ana_govde": "Samara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Zagros içi",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 172.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Zagros içi"
   ],
   "ana_govde_km": 169.0,
   "ana_govde": "Isfahan",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Tebbes",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 45.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 302.8,
   "ana_govde": "Yezd",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-04-01",
   "yerlesim": "Tebbes",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Tebbes",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Tebbes",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Tebbes",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Tebbes",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Tebbes",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Tebbes"
   ],
   "ana_govde_km": 211.8,
   "ana_govde": "Kâin",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1678-07-19",
   "yerlesim": "Çehrin (Çigirin)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 20.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Çehrin (Çigirin)"
   ],
   "ana_govde_km": 285.2,
   "ana_govde": "Özi",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1699-01-26",
   "yerlesim": "Çehrin (Çigirin)",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 94.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çehrin (Çigirin)"
   ],
   "ana_govde_km": 320.7,
   "ana_govde": "Bar (Podolya)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Tâif",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 285.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 349.6,
   "ana_govde": "Medine",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1813-05-02",
   "yerlesim": "Tâif",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 103.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Cidde",
    "Mekke",
    "Tâif"
   ],
   "ana_govde_km": 349.6,
   "ana_govde": "Medine",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1803-02-01",
   "yerlesim": "Tâif",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 10.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Tâif"
   ],
   "ana_govde_km": 607.8,
   "ana_govde": "Necid içi",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1552-01-01",
   "yerlesim": "Tuggurt",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 119.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Tuggurt",
    "Vargla (Ouargla)",
    "el-Vâdî (Sûf)"
   ],
   "ana_govde_km": 196.4,
   "ana_govde": "Biskra",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1854-12-02",
   "yerlesim": "Tuggurt",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 68.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Tuggurt",
    "Vargla (Ouargla)",
    "el-Vâdî (Sûf)"
   ],
   "ana_govde_km": 196.4,
   "ana_govde": "Biskra",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1324-01-01",
   "yerlesim": "Kalyari (Cagliari)",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 396.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Kalyari (Cagliari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Sasari (Sassari)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1720-02-24",
   "yerlesim": "Kalyari (Cagliari)",
   "yeni_sahip": "sardinya",
   "alan": "s",
   "yil": 141.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Kalyari (Cagliari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Sasari (Sassari)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-03-17",
   "yerlesim": "Kalyari (Cagliari)",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Kalyari (Cagliari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Sasari (Sassari)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1324-01-01",
   "yerlesim": "Sasari (Sassari)",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 396.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Sasari (Sassari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1720-02-24",
   "yerlesim": "Sasari (Sassari)",
   "yeni_sahip": "sardinya",
   "alan": "s",
   "yil": 141.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Sasari (Sassari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-03-17",
   "yerlesim": "Sasari (Sassari)",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Sasari (Sassari)"
   ],
   "ana_govde_km": 174.6,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1768-05-15",
   "yerlesim": "Ayacyo (Ajaccio)",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 24.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Ayacyo (Ajaccio)",
    "Bastia (Korsika)"
   ],
   "ana_govde_km": 264.9,
   "ana_govde": "Toulon",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1792-09-22",
   "yerlesim": "Ayacyo (Ajaccio)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 131.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Ayacyo (Ajaccio)",
    "Bastia (Korsika)"
   ],
   "ana_govde_km": 264.9,
   "ana_govde": "Toulon",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1708-09-29",
   "yerlesim": "Menorka (Mahon)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 93.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Menorka (Mahon)"
   ],
   "ana_govde_km": 939.0,
   "ana_govde": "Cebelitarık (Gibraltar)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1538-08-03",
   "yerlesim": "Ferasan (Farasan)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 96.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferasan (Farasan)"
   ],
   "ana_govde_km": 165.1,
   "ana_govde": "Kemeran (Kamaran)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-05-01",
   "yerlesim": "Ferasan (Farasan)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 69.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferasan (Farasan)"
   ],
   "ana_govde_km": 165.1,
   "ana_govde": "Kemeran (Kamaran)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1635-01-01",
   "yerlesim": "Ferasan (Farasan)",
   "yeni_sahip": "yemen",
   "alan": "s",
   "yil": 214.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferasan (Farasan)"
   ],
   "ana_govde_km": 165.1,
   "ana_govde": "Kemeran (Kamaran)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1918-10-30",
   "yerlesim": "Ferasan (Farasan)",
   "yeni_sahip": "yemen",
   "alan": "s",
   "yil": 5.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferasan (Farasan)"
   ],
   "ana_govde_km": 237.4,
   "ana_govde": "Hudeyde",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1538-08-03",
   "yerlesim": "Kemeran (Kamaran)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 96.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kemeran (Kamaran)"
   ],
   "ana_govde_km": 150.8,
   "ana_govde": "Zebîd",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-05-01",
   "yerlesim": "Kemeran (Kamaran)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 66.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Hudeyde",
    "Kemeran (Kamaran)",
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 165.1,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1915-06-10",
   "yerlesim": "Kemeran (Kamaran)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kemeran (Kamaran)"
   ],
   "ana_govde_km": 387.6,
   "ana_govde": "Aden",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-01-01",
   "yerlesim": "Sokotra",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 4.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Sokotra"
   ],
   "ana_govde_km": 1266.9,
   "ana_govde": "Sûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Masira",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 408.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Dukm",
    "Masira",
    "Muhût",
    "Râs Medreke"
   ],
   "ana_govde_km": 308.4,
   "ana_govde": "Nizva",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Trapani",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Palermo",
    "Pantelerya",
    "Trapani"
   ],
   "ana_govde_km": 231.4,
   "ana_govde": "Katanya (Catania)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1337-09-09",
   "yerlesim": "Kâin",
   "yeni_sahip": "serbedariler",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Kâin",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Kâin",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Kâin",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Kâin",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Kâin",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Kâin",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 172.0,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1337-09-09",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "serbedariler",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 267.9,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 267.9,
   "ana_govde": "Turbet-i Haydariye",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 230.8,
   "ana_govde": "Tebbes",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 230.8,
   "ana_govde": "Tebbes",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 230.8,
   "ana_govde": "Tebbes",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 230.8,
   "ana_govde": "Tebbes",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Bîrcend",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bîrcend",
    "Kâin"
   ],
   "ana_govde_km": 230.8,
   "ana_govde": "Tebbes",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Ebrekûh",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebrekûh"
   ],
   "ana_govde_km": 183.5,
   "ana_govde": "Şiraz",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Bem",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Bem",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Bem",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Bem",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Bem",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 251.3,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Bem",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Bem",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Bem",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 179.6,
   "ana_govde": "Kirman",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Cîruft",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Cîruft",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Cîruft",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bem",
    "Cîruft"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Mînâb",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Câsk",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Câsk",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Câsk",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Câsk"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Mînâb",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Çâhbahâr",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Çâhbahâr"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Bempûr",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Bempûr",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Bempûr",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Bempûr",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 212.7,
   "ana_govde": "Çâhbahâr",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Hâş",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Hâş",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Hâş",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Bempûr",
    "Hâş"
   ],
   "ana_govde_km": 295.7,
   "ana_govde": "Bem",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1337-09-09",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "serbedariler",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 327.2,
   "ana_govde": "Bîrcend",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 327.2,
   "ana_govde": "Bîrcend",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 327.2,
   "ana_govde": "Bîrcend",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 310.7,
   "ana_govde": "Hâş",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 11.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 310.7,
   "ana_govde": "Hâş",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "zend",
   "alan": "s",
   "yil": 48.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 310.7,
   "ana_govde": "Hâş",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1796-01-01",
   "yerlesim": "Zerenc (Sîstan)",
   "yeni_sahip": "kacar",
   "alan": "s",
   "yil": 127.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Zerenc (Sîstan)"
   ],
   "ana_govde_km": 310.7,
   "ana_govde": "Hâş",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1550-01-01",
   "yerlesim": "Cübeyl",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 120.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 350.3,
   "ana_govde": "Fâv",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-04-20",
   "yerlesim": "Cübeyl",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 42.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 310.6,
   "ana_govde": "Kuveyt",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1524-01-01",
   "yerlesim": "Cübeyl",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 26.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 294.8,
   "ana_govde": "Bender Rîg",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-01-01",
   "yerlesim": "Suhâr",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 143.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Suhâr"
   ],
   "ana_govde_km": 192.1,
   "ana_govde": "Maskat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1650-01-26",
   "yerlesim": "Suhâr",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 273.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Buraymî",
    "Ras el-Hayme (Cülfâr)",
    "Suhâr",
    "Şârika"
   ],
   "ana_govde_km": 178.2,
   "ana_govde": "Nizva",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-01-01",
   "yerlesim": "Sûr",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 143.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Sûr"
   ],
   "ana_govde_km": 161.7,
   "ana_govde": "Maskat",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1650-01-26",
   "yerlesim": "Sûr",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 273.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Sûr"
   ],
   "ana_govde_km": 161.7,
   "ana_govde": "Maskat",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1869-01-01",
   "yerlesim": "Krasnovodsk (Türkmenbaşı)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 54.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Krasnovodsk (Türkmenbaşı)",
    "Çeleken"
   ],
   "ana_govde_km": 173.9,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Çeleken",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çeleken"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1512-01-01",
   "yerlesim": "Çeleken",
   "yeni_sahip": "hive",
   "alan": "s",
   "yil": 88.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çeleken"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1600-01-01",
   "yerlesim": "Çeleken",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 269.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Çeleken"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1869-01-01",
   "yerlesim": "Çeleken",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 54.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Krasnovodsk (Türkmenbaşı)",
    "Çeleken"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Garabogaz (Bekdaş)",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Garabogaz (Bekdaş)"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Çeleken",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1512-01-01",
   "yerlesim": "Garabogaz (Bekdaş)",
   "yeni_sahip": "hive",
   "alan": "s",
   "yil": 88.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Garabogaz (Bekdaş)"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Çeleken",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1600-01-01",
   "yerlesim": "Garabogaz (Bekdaş)",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 269.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Garabogaz (Bekdaş)"
   ],
   "ana_govde_km": 238.1,
   "ana_govde": "Çeleken",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1869-01-01",
   "yerlesim": "Garabogaz (Bekdaş)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 54.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Garabogaz (Bekdaş)"
   ],
   "ana_govde_km": 173.9,
   "ana_govde": "Krasnovodsk (Türkmenbaşı)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Mangışlak",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Mangışlak"
   ],
   "ana_govde_km": 378.7,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1512-01-01",
   "yerlesim": "Mangışlak",
   "yeni_sahip": "hive",
   "alan": "s",
   "yil": 88.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Mangışlak"
   ],
   "ana_govde_km": 378.7,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1600-01-01",
   "yerlesim": "Mangışlak",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 281.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Mangışlak"
   ],
   "ana_govde_km": 378.7,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1881-01-01",
   "yerlesim": "Mangışlak",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Mangışlak"
   ],
   "ana_govde_km": 210.1,
   "ana_govde": "Ağraham burnu",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1337-09-09",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "serbedariler",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Dihistan ovası (Meşhed-i Misriyân)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Dihistan ovası (Meşhed-i Misriyân)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Dihistan ovası (Meşhed-i Misriyân)",
    "Esterâbâd (Gürgân)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Bistâm",
    "Dihistan ovası (Meşhed-i Misriyân)",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1860-01-01",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 21.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Dihistan ovası (Meşhed-i Misriyân)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1881-01-30",
   "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Dihistan ovası (Meşhed-i Misriyân)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1379-01-01",
   "yerlesim": "Hazârasp",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 123.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 331.6,
   "ana_govde": "Buhara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Hazârasp",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 331.6,
   "ana_govde": "Buhara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1740-01-01",
   "yerlesim": "Hazârasp",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 7.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 400.1,
   "ana_govde": "Ebîverd",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-26",
   "yerlesim": "Hazârasp",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 400.1,
   "ana_govde": "Ebîverd",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1379-01-01",
   "yerlesim": "Köhne Ürgenç (Gürgenç)",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 123.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 526.4,
   "ana_govde": "Buhara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Köhne Ürgenç (Gürgenç)",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 526.4,
   "ana_govde": "Buhara",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1740-01-01",
   "yerlesim": "Köhne Ürgenç (Gürgenç)",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 7.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 493.4,
   "ana_govde": "Nesâ",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-26",
   "yerlesim": "Köhne Ürgenç (Gürgenç)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 419.7,
   "ana_govde": "Üstyurt kuzeyi",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1740-01-01",
   "yerlesim": "Yeni Ürgenç",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 7.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 415.1,
   "ana_govde": "Ebîverd",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-26",
   "yerlesim": "Yeni Ürgenç",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 415.1,
   "ana_govde": "Ebîverd",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1379-01-01",
   "yerlesim": "Küngrat",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 123.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 593.8,
   "ana_govde": "Buhara",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Küngrat",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 539.4,
   "ana_govde": "Garabogaz (Bekdaş)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1740-01-01",
   "yerlesim": "Küngrat",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 7.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 571.6,
   "ana_govde": "Nesâ",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-26",
   "yerlesim": "Küngrat",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 335.7,
   "ana_govde": "Üstyurt kuzeyi",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Merv (Mari)",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 48.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Merv (Mari)"
   ],
   "ana_govde_km": 508.3,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1785-01-01",
   "yerlesim": "Merv (Mari)",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 75.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Merv (Mari)"
   ],
   "ana_govde_km": 330.0,
   "ana_govde": "Buhara",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1860-01-01",
   "yerlesim": "Merv (Mari)",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 24.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Merv (Mari)"
   ],
   "ana_govde_km": 197.8,
   "ana_govde": "Ebîverd",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Merv (Mari)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 39.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Merv (Mari)"
   ],
   "ana_govde_km": 197.8,
   "ana_govde": "Ebîverd",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1836-01-01",
   "yerlesim": "Dûmetülcendel (Cevf)",
   "yeni_sahip": "sammar",
   "alan": "s",
   "yil": 85.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Dûmetülcendel (Cevf)"
   ],
   "ana_govde_km": 200.9,
   "ana_govde": "Nefud çölü",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1921-11-02",
   "yerlesim": "Dûmetülcendel (Cevf)",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 2.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Dûmetülcendel (Cevf)"
   ],
   "ana_govde_km": 200.9,
   "ana_govde": "Nefud çölü",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1836-01-01",
   "yerlesim": "Teymâ",
   "yeni_sahip": "sammar",
   "alan": "s",
   "yil": 85.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Teymâ"
   ],
   "ana_govde_km": 252.3,
   "ana_govde": "Nefud çölü",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1921-11-02",
   "yerlesim": "Teymâ",
   "yeni_sahip": "suud",
   "alan": "s",
   "yil": 2.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Teymâ"
   ],
   "ana_govde_km": 252.3,
   "ana_govde": "Nefud çölü",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Rın kumulları (Volga-Yayık arası)",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Rın kumulları (Volga-Yayık arası)"
   ],
   "ana_govde_km": 193.6,
   "ana_govde": "Kamışin",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Rın kumulları (Volga-Yayık arası)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Rın kumulları (Volga-Yayık arası)"
   ],
   "ana_govde_km": 158.8,
   "ana_govde": "Yeni Saray (Tsarev)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Yediçkul bozkırı",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 281.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Yediçkul bozkırı",
    "Zaporojye Seçi"
   ],
   "ana_govde_km": 168.3,
   "ana_govde": "Camboyluk bozkırı",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Camboyluk bozkırı",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 281.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Camboyluk bozkırı"
   ],
   "ana_govde_km": 166.9,
   "ana_govde": "Zaporojye Seçi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1783-04-19",
   "yerlesim": "Camboyluk bozkırı",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 140.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Camboyluk bozkırı"
   ],
   "ana_govde_km": 159.2,
   "ana_govde": "Taganrog",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Zaporojye Seçi",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 49.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Yediçkul bozkırı",
    "Zaporojye Seçi"
   ],
   "ana_govde_km": 166.9,
   "ana_govde": "Camboyluk bozkırı",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-06-16",
   "yerlesim": "Zaporojye Seçi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 148.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Zaporojye Seçi"
   ],
   "ana_govde_km": 205.3,
   "ana_govde": "Poltava",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Sloboda bozkırı",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 213.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Belgorod",
    "Harkov",
    "Sloboda bozkırı"
   ],
   "ana_govde_km": 308.7,
   "ana_govde": "Voronej",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Don bozkırı (Sal)",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 67.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Don bozkırı (Sal)"
   ],
   "ana_govde_km": 168.3,
   "ana_govde": "Bozkır (Deşt-i Kıpçak)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1570-01-01",
   "yerlesim": "Don bozkırı (Sal)",
   "yeni_sahip": "don-kazak",
   "alan": "s",
   "yil": 151.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Don bozkırı (Sal)"
   ],
   "ana_govde_km": 172.3,
   "ana_govde": "Çerkask (Razdory)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1721-01-01",
   "yerlesim": "Don bozkırı (Sal)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 202.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Don bozkırı (Sal)"
   ],
   "ana_govde_km": 172.3,
   "ana_govde": "Çerkask (Razdory)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Donets bozkırı",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 67.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Belgorod",
    "Donets bozkırı",
    "Harkov",
    "Sloboda bozkırı"
   ],
   "ana_govde_km": 190.2,
   "ana_govde": "Çerkask (Razdory)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1570-01-01",
   "yerlesim": "Donets bozkırı",
   "yeni_sahip": "don-kazak",
   "alan": "s",
   "yil": 151.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Donets bozkırı"
   ],
   "ana_govde_km": 190.2,
   "ana_govde": "Çerkask (Razdory)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-05-19",
   "yerlesim": "Mersâ Matruh",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Mersâ Matruh"
   ],
   "ana_govde_km": 197.2,
   "ana_govde": "Sellûm",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Mersâ Matruh",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Mersâ Matruh"
   ],
   "ana_govde_km": 197.2,
   "ana_govde": "Sellûm",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Mersâ Matruh",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Mersâ Matruh"
   ],
   "ana_govde_km": 197.2,
   "ana_govde": "Sellûm",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-05-19",
   "yerlesim": "Sellûm",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Sellûm"
   ],
   "ana_govde_km": 197.2,
   "ana_govde": "Mersâ Matruh",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Sellûm",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Sellûm"
   ],
   "ana_govde_km": 197.2,
   "ana_govde": "Mersâ Matruh",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Ebû Ramâd (Şalâtîn)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 248.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)",
    "Halâib"
   ],
   "ana_govde_km": 272.5,
   "ana_govde": "Yenbu",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Ebû Ramâd (Şalâtîn)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)",
    "Halâib"
   ],
   "ana_govde_km": 272.5,
   "ana_govde": "Yenbu",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-01-22",
   "yerlesim": "Ebû Ramâd (Şalâtîn)",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 39.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)"
   ],
   "ana_govde_km": 779.2,
   "ana_govde": "Nakfa",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Ebû Ramâd (Şalâtîn)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)",
    "Halâib"
   ],
   "ana_govde_km": 295.0,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-01-22",
   "yerlesim": "Tûr (Sînâ)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 170.4,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Tûr (Sînâ)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 170.4,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Tûr (Sînâ)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Sina güneyi",
    "Tûr (Sînâ)"
   ],
   "ana_govde_km": 170.4,
   "ana_govde": "Sefâce",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Vâdî Halfâ",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 299.6,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Vâdî Halfâ",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 299.6,
   "ana_govde": "Asvan",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Vâdî Halfâ",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Vâdî Halfâ",
    "İbrim"
   ],
   "ana_govde_km": 151.9,
   "ana_govde": "Abrî (Mahas)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1551-08-15",
   "yerlesim": "Sirte",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 159.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Nûfiliye",
    "Sirte"
   ],
   "ana_govde_km": 170.3,
   "ana_govde": "Tâverğa",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1835-05-26",
   "yerlesim": "Sirte",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 77.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Nûfiliye",
    "Sirte"
   ],
   "ana_govde_km": 170.3,
   "ana_govde": "Tâverğa",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1711-03-01",
   "yerlesim": "Sirte",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 124.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Nûfiliye",
    "Sirte"
   ],
   "ana_govde_km": 170.3,
   "ana_govde": "Tâverğa",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Sirte",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Nûfiliye",
    "Sirte"
   ],
   "ana_govde_km": 170.3,
   "ana_govde": "Tâverğa",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1551-08-15",
   "yerlesim": "Ecdâbiye",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 159.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Ecdâbiye"
   ],
   "ana_govde_km": 152.2,
   "ana_govde": "Bingazi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1835-05-26",
   "yerlesim": "Ecdâbiye",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 77.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Ecdâbiye"
   ],
   "ana_govde_km": 152.2,
   "ana_govde": "Bingazi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1711-03-01",
   "yerlesim": "Ecdâbiye",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 124.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Ecdâbiye"
   ],
   "ana_govde_km": 152.2,
   "ana_govde": "Bingazi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Ecdâbiye",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Ecdâbiye"
   ],
   "ana_govde_km": 152.2,
   "ana_govde": "Bingazi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1552-01-01",
   "yerlesim": "Gardâye",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 119.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Gardâye"
   ],
   "ana_govde_km": 163.9,
   "ana_govde": "Ağvât",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1671-01-01",
   "yerlesim": "Gardâye",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 159.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Gardâye"
   ],
   "ana_govde_km": 163.9,
   "ana_govde": "Ağvât",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Gardâye",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 22.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Gardâye"
   ],
   "ana_govde_km": 163.9,
   "ana_govde": "Ağvât",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1852-12-04",
   "yerlesim": "Gardâye",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 70.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Gardâye"
   ],
   "ana_govde_km": 163.9,
   "ana_govde": "Ağvât",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Halâib",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 328.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)",
    "Halâib"
   ],
   "ana_govde_km": 162.7,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Halâib",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 39.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Ebû Ramâd (Şalâtîn)",
    "Halâib"
   ],
   "ana_govde_km": 162.7,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-02-05",
   "yerlesim": "Halâib",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 38.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Halâib"
   ],
   "ana_govde_km": 162.7,
   "ana_govde": "Muhammed Kol",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1821-06-14",
   "yerlesim": "Kadârif",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 63.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Kadârif"
   ],
   "ana_govde_km": 185.5,
   "ana_govde": "Sincâ",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1504-01-01",
   "yerlesim": "Kadârif",
   "yeni_sahip": "funj",
   "alan": "s",
   "yil": 317.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kadârif"
   ],
   "ana_govde_km": 185.5,
   "ana_govde": "Sincâ",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Kadârif",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Kadârif"
   ],
   "ana_govde_km": 185.5,
   "ana_govde": "Sincâ",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Kadârif",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kadârif"
   ],
   "ana_govde_km": 185.5,
   "ana_govde": "Sincâ",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1840-01-01",
   "yerlesim": "Kesela",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 45.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Kesela"
   ],
   "ana_govde_km": 191.6,
   "ana_govde": "Kadârif",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Kesela",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Kesela"
   ],
   "ana_govde_km": 191.6,
   "ana_govde": "Kadârif",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Kesela",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kesela"
   ],
   "ana_govde_km": 191.6,
   "ana_govde": "Kadârif",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1577-01-01",
   "yerlesim": "Gât",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 134.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Gât"
   ],
   "ana_govde_km": 316.7,
   "ana_govde": "Ubârî",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1835-05-26",
   "yerlesim": "Gât",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 77.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Gât"
   ],
   "ana_govde_km": 316.7,
   "ana_govde": "Ubârî",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1711-03-01",
   "yerlesim": "Gât",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 124.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Gât"
   ],
   "ana_govde_km": 316.7,
   "ana_govde": "Ubârî",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Gât",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Gât"
   ],
   "ana_govde_km": 316.7,
   "ana_govde": "Ubârî",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1856-01-01",
   "yerlesim": "Cağbûb",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 56.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Cağbûb"
   ],
   "ana_govde_km": 209.8,
   "ana_govde": "Sellûm",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Cağbûb",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Cağbûb"
   ],
   "ana_govde_km": 264.6,
   "ana_govde": "Tobruk",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Hârice (Vâhât)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Hârice (Vâhât)"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Dâhile",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Hârice (Vâhât)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Hârice (Vâhât)"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Dâhile",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Hârice (Vâhât)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Hârice (Vâhât)"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Dâhile",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Dâhile",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Dâhile"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Hârice (Vâhât)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Dâhile",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Dâhile"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Hârice (Vâhât)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Dâhile",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Dâhile"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Hârice (Vâhât)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Ferâfire",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferâfire"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Bahriye (Bâvîtî)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Ferâfire",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferâfire"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Bahriye (Bâvîtî)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Ferâfire",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Ferâfire"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Bahriye (Bâvîtî)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1517-04-13",
   "yerlesim": "Bahriye (Bâvîtî)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 288.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Bahriye (Bâvîtî)"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Ferâfire",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1805-07-03",
   "yerlesim": "Bahriye (Bâvîtî)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 109.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Bahriye (Bâvîtî)"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Ferâfire",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1914-12-18",
   "yerlesim": "Bahriye (Bâvîtî)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 8.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Bahriye (Bâvîtî)"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Ferâfire",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1577-01-01",
   "yerlesim": "Sokna",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 134.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Sokna",
    "Vaddân (Cufre)"
   ],
   "ana_govde_km": 178.9,
   "ana_govde": "Zilla (Zella)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1835-05-26",
   "yerlesim": "Sokna",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 77.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Sokna",
    "Vaddân (Cufre)"
   ],
   "ana_govde_km": 178.9,
   "ana_govde": "Zilla (Zella)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1711-03-01",
   "yerlesim": "Sokna",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 124.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Sokna",
    "Vaddân (Cufre)"
   ],
   "ana_govde_km": 178.9,
   "ana_govde": "Zilla (Zella)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Sokna",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Sokna",
    "Vaddân (Cufre)"
   ],
   "ana_govde_km": 178.9,
   "ana_govde": "Zilla (Zella)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1577-01-01",
   "yerlesim": "Câlû",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 134.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlû"
   ],
   "ana_govde_km": 227.8,
   "ana_govde": "Merâde",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1835-05-26",
   "yerlesim": "Câlû",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 77.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlû"
   ],
   "ana_govde_km": 227.8,
   "ana_govde": "Merâde",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1711-03-01",
   "yerlesim": "Câlû",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 124.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlû"
   ],
   "ana_govde_km": 227.8,
   "ana_govde": "Merâde",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1912-10-18",
   "yerlesim": "Câlû",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 11.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlû"
   ],
   "ana_govde_km": 227.8,
   "ana_govde": "Merâde",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1337-09-09",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "serbedariler",
   "alan": "s",
   "yil": 43.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 126.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1507-05-24",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 3.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 225.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1736-03-08",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 123.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 508.3,
   "ana_govde": "Merv (Mari)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1860-01-01",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 21.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1881-01-30",
   "yerlesim": "Kızılarvat",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Kızılarvat"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1500-01-01",
   "yerlesim": "Aral kuzeyi",
   "yeni_sahip": "kazak-hanligi",
   "alan": "s",
   "yil": 368.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Aral kuzeyi"
   ],
   "ana_govde_km": 305.0,
   "ana_govde": "Kazak bozkırı (Turgay)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1868-01-01",
   "yerlesim": "Aral kuzeyi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 55.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Aral kuzeyi"
   ],
   "ana_govde_km": 303.2,
   "ana_govde": "Emba (Cem)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1500-01-01",
   "yerlesim": "Üstyurt kuzeyi",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 144.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Üstyurt kuzeyi"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Emba (Cem)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1644-01-01",
   "yerlesim": "Üstyurt kuzeyi",
   "yeni_sahip": "kazak-hanligi",
   "alan": "s",
   "yil": 224.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Üstyurt kuzeyi"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Emba (Cem)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1868-01-01",
   "yerlesim": "Üstyurt kuzeyi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 55.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Üstyurt kuzeyi"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Emba (Cem)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1500-01-01",
   "yerlesim": "Emba (Cem)",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 144.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Emba (Cem)"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Üstyurt kuzeyi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1644-01-01",
   "yerlesim": "Emba (Cem)",
   "yeni_sahip": "kazak-hanligi",
   "alan": "s",
   "yil": 224.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Emba (Cem)"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Üstyurt kuzeyi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1868-01-01",
   "yerlesim": "Emba (Cem)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 55.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Emba (Cem)"
   ],
   "ana_govde_km": 224.7,
   "ana_govde": "Üstyurt kuzeyi",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1869-01-01",
   "yerlesim": "Aktöbe",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 54.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Aktöbe",
    "Orsk"
   ],
   "ana_govde_km": 219.5,
   "ana_govde": "Orenburg",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-01-01",
   "yerlesim": "Guryev (Atyrau)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 283.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Guryev (Atyrau)"
   ],
   "ana_govde_km": 308.1,
   "ana_govde": "Astrahan",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1707-05-01",
   "yerlesim": "Stornoway",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 216.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Stornoway"
   ],
   "ana_govde_km": 151.7,
   "ana_govde": "Inverness",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1472-02-20",
   "yerlesim": "Lerwick (Shetland)",
   "yeni_sahip": "iskocya",
   "alan": "s",
   "yil": 235.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Lerwick (Shetland)"
   ],
   "ana_govde_km": 165.6,
   "ana_govde": "Kirkwall (Orkney)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1707-05-01",
   "yerlesim": "Lerwick (Shetland)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 216.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Lerwick (Shetland)"
   ],
   "ana_govde_km": 165.6,
   "ana_govde": "Kirkwall (Orkney)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1360-10-24",
   "yerlesim": "La Rochelle",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 11.9,
   "kova": "cografi-tecrit",
   "ada": [
    "La Rochelle"
   ],
   "ana_govde_km": 153.6,
   "ana_govde": "Bordo",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1388-09-28",
   "yerlesim": "Nice",
   "yeni_sahip": "sardinya",
   "alan": "s",
   "yil": 471.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Nice"
   ],
   "ana_govde_km": 154.9,
   "ana_govde": "Torino",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1479-01-20",
   "yerlesim": "Badajoz",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 444.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Badajoz"
   ],
   "ana_govde_km": 179.9,
   "ana_govde": "Huelva",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1479-01-20",
   "yerlesim": "A Coruña",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 444.8,
   "kova": "cografi-tecrit",
   "ada": [
    "A Coruña",
    "Santiago de Compostela",
    "Vigo"
   ],
   "ana_govde_km": 205.9,
   "ana_govde": "Oviedo",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Lagos (Algarve)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Faro",
    "Lagos (Algarve)"
   ],
   "ana_govde_km": 159.3,
   "ana_govde": "Setúbal",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1581-04-16",
   "yerlesim": "Setúbal",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 59.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Badajoz",
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 159.3,
   "ana_govde": "Lagos (Algarve)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Setúbal",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 159.3,
   "ana_govde": "Lagos (Algarve)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Faro",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Faro",
    "Lagos (Algarve)"
   ],
   "ana_govde_km": 172.6,
   "ana_govde": "Évora",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1361-07-27",
   "yerlesim": "Visby (Gotland)",
   "yeni_sahip": "danimarka",
   "alan": "s",
   "yil": 284.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Visby (Gotland)"
   ],
   "ana_govde_km": 224.5,
   "ana_govde": "Karlskrona",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1641-01-01",
   "yerlesim": "Kristiansand",
   "yeni_sahip": "danimarka",
   "alan": "s",
   "yil": 173.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Kristiansand"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Skien",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1814-01-14",
   "yerlesim": "Kristiansand",
   "yeni_sahip": "isvec",
   "alan": "s",
   "yil": 91.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kristiansand"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Skien",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1905-06-07",
   "yerlesim": "Kristiansand",
   "yeni_sahip": "norvec",
   "alan": "s",
   "yil": 18.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Kristiansand"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Skien",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1648-10-24",
   "yerlesim": "Stettin (Szczecin)",
   "yeni_sahip": "isvec",
   "alan": "s",
   "yil": 71.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Stettin (Szczecin)",
    "Stralsund"
   ],
   "ana_govde_km": 376.7,
   "ana_govde": "Halmstad",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Cosenza",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Cosenza",
    "Katanya (Catania)",
    "Messina",
    "Reggio Calabria",
    "Sirakuza"
   ],
   "ana_govde_km": 155.5,
   "ana_govde": "Taranto",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Hisâr-ı Fîrûze",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 248.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Hisâr-ı Fîrûze"
   ],
   "ana_govde_km": 156.1,
   "ana_govde": "Delhi",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-01-01",
   "yerlesim": "Benâres (Vârânasî)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 148.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Benâres (Vârânasî)",
    "Cavnpur (Jaunpur)"
   ],
   "ana_govde_km": 209.1,
   "ana_govde": "Gayâ",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1801-11-10",
   "yerlesim": "Ilâhâbâd (Allahabad)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Benâres (Vârânasî)",
    "Cavnpur (Jaunpur)",
    "Gorakhpûr",
    "Ilâhâbâd (Allahabad)"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Kanpûr",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1801-11-10",
   "yerlesim": "Gorakhpûr",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Benâres (Vârânasî)",
    "Cavnpur (Jaunpur)",
    "Gorakhpûr",
    "Ilâhâbâd (Allahabad)"
   ],
   "ana_govde_km": 218.7,
   "ana_govde": "Patna (Azîmâbâd)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Multan",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 195.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Multan"
   ],
   "ana_govde_km": 312.2,
   "ana_govde": "Lahor",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1752-04-01",
   "yerlesim": "Multan",
   "yeni_sahip": "afgan-durrani",
   "alan": "s",
   "yil": 66.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Multan"
   ],
   "ana_govde_km": 312.2,
   "ana_govde": "Lahor",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1818-06-02",
   "yerlesim": "Multan",
   "yeni_sahip": "sih-imparatorlugu",
   "alan": "s",
   "yil": 30.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Multan"
   ],
   "ana_govde_km": 312.2,
   "ana_govde": "Lahor",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-03-29",
   "yerlesim": "Multan",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 74.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Multan"
   ],
   "ana_govde_km": 312.2,
   "ana_govde": "Lahor",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Sirhind",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 150.4,
   "ana_govde": "Pânipat",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Sirhind",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 150.4,
   "ana_govde": "Pânipat",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Sirhind",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 196.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 177.3,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1581-01-01",
   "yerlesim": "Attock",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 157.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 246.7,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1738-01-01",
   "yerlesim": "Attock",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 9.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 305.3,
   "ana_govde": "Kâbil",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1813-07-13",
   "yerlesim": "Attock",
   "yeni_sahip": "sih-imparatorlugu",
   "alan": "s",
   "yil": 35.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Râvalpindi"
   ],
   "ana_govde_km": 246.7,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-03-29",
   "yerlesim": "Attock",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 74.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 246.7,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Râvalpindi"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 182.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1738-01-01",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 9.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 371.7,
   "ana_govde": "Kâbil",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1765-04-16",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "sih-imparatorlugu",
   "alan": "s",
   "yil": 83.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Râvalpindi"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-03-29",
   "yerlesim": "Râvalpindi",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 74.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1504-10-01",
   "yerlesim": "Peşâver",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 233.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Peşâver"
   ],
   "ana_govde_km": 228.5,
   "ana_govde": "Kâbil",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1738-01-01",
   "yerlesim": "Peşâver",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 9.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 228.5,
   "ana_govde": "Kâbil",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1834-05-06",
   "yerlesim": "Peşâver",
   "yeni_sahip": "sih-imparatorlugu",
   "alan": "s",
   "yil": 14.9,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 296.7,
   "ana_govde": "Srinagar (Keşmir)",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-03-29",
   "yerlesim": "Peşâver",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 74.6,
   "kova": "cografi-tecrit",
   "ada": [
    "Attock",
    "Peşâver",
    "Râvalpindi"
   ],
   "ana_govde_km": 322.1,
   "ana_govde": "Siyâlkot",
   "komsu_150km": 2,
   "zaten_beyanli": false
  },
  {
   "gun": "1370-01-01",
   "yerlesim": "Kâbil",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 134.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 322.1,
   "ana_govde": "Belh",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1738-01-01",
   "yerlesim": "Kâbil",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 9.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 228.5,
   "ana_govde": "Peşâver",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Kâbil",
   "yeni_sahip": "afgan-durrani",
   "alan": "s",
   "yil": 78.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 228.5,
   "ana_govde": "Peşâver",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1839-08-07",
   "yerlesim": "Kâbil",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 2.4,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 1598.1,
   "ana_govde": "Ras el-Hayme (Cülfâr)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1842-01-06",
   "yerlesim": "Kâbil",
   "yeni_sahip": "afganistan",
   "alan": "s",
   "yil": 37.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kâbil"
   ],
   "ana_govde_km": 322.1,
   "ana_govde": "Belh",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1879-10-12",
   "yerlesim": "Kâbil",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 0.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kâbil"
   ],
   "ana_govde_km": 1598.1,
   "ana_govde": "Ras el-Hayme (Cülfâr)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1370-01-01",
   "yerlesim": "Gazne",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 134.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Kandehar",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1738-01-01",
   "yerlesim": "Gazne",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 9.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 296.0,
   "ana_govde": "Peşâver",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Gazne",
   "yeni_sahip": "afgan-durrani",
   "alan": "s",
   "yil": 78.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne",
    "Kâbil"
   ],
   "ana_govde_km": 296.0,
   "ana_govde": "Peşâver",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1839-07-23",
   "yerlesim": "Gazne",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 3.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Gazne"
   ],
   "ana_govde_km": 1480.9,
   "ana_govde": "Ras el-Hayme (Cülfâr)",
   "komsu_150km": 1,
   "zaten_beyanli": false
  },
  {
   "gun": "1370-01-01",
   "yerlesim": "Kandehar",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 152.7,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1522-09-06",
   "yerlesim": "Kandehar",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.3,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1537-01-01",
   "yerlesim": "Kandehar",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 58.0,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 372.8,
   "ana_govde": "Zerenc (Sîstan)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1595-01-01",
   "yerlesim": "Kandehar",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 27.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1622-06-22",
   "yerlesim": "Kandehar",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 15.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 372.8,
   "ana_govde": "Zerenc (Sîstan)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1638-01-01",
   "yerlesim": "Kandehar",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 11.1,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1649-02-22",
   "yerlesim": "Kandehar",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 60.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 372.8,
   "ana_govde": "Zerenc (Sîstan)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1747-06-20",
   "yerlesim": "Kandehar",
   "yeni_sahip": "afgan-durrani",
   "alan": "s",
   "yil": 78.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1826-01-01",
   "yerlesim": "Kandehar",
   "yeni_sahip": "afganistan",
   "alan": "s",
   "yil": 97.8,
   "kova": "cografi-tecrit",
   "ada": [
    "Kandehar"
   ],
   "ana_govde_km": 333.4,
   "ana_govde": "Gazne",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1586-10-01",
   "yerlesim": "Srinagar (Keşmir)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 165.2,
   "kova": "cografi-tecrit",
   "ada": [
    "Srinagar (Keşmir)"
   ],
   "ana_govde_km": 150.3,
   "ana_govde": "Cammû (Jammu)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  },
  {
   "gun": "1752-01-01",
   "yerlesim": "Srinagar (Keşmir)",
   "yeni_sahip": "afgan-durrani",
   "alan": "s",
   "yil": 67.5,
   "kova": "cografi-tecrit",
   "ada": [
    "Srinagar (Keşmir)"
   ],
   "ana_govde_km": 150.3,
   "ana_govde": "Cammû (Jammu)",
   "komsu_150km": 0,
   "zaten_beyanli": false
  }
 ],
 "veri_eksigi": [
  {
   "gun": "1460-01-01",
   "yerlesim": "Amasra",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 463.8,
   "kova": "veri-eksigi",
   "ada": [
    "Amasra"
   ],
   "ana_govde_km": 163.9,
   "ana_govde": "Çankırı",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1448-01-01",
   "yerlesim": "Saraybosna",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 460.8,
   "kova": "veri-eksigi",
   "ada": [
    "Saraybosna",
    "Visoko"
   ],
   "ana_govde_km": 286.7,
   "ana_govde": "Niş",
   "komsu_150km": 17,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1479-01-20",
   "yerlesim": "Santiago de Compostela",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 444.8,
   "kova": "veri-eksigi",
   "ada": [
    "A Coruña",
    "Santiago de Compostela",
    "Vigo"
   ],
   "ana_govde_km": 225.3,
   "ana_govde": "Oviedo",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1479-01-20",
   "yerlesim": "Vigo",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 444.8,
   "kova": "veri-eksigi",
   "ada": [
    "A Coruña",
    "Santiago de Compostela",
    "Vigo"
   ],
   "ana_govde_km": 261.9,
   "ana_govde": "León",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1497-01-01",
   "yerlesim": "Melîle (Melilla)",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 426.8,
   "kova": "veri-eksigi",
   "ada": [
    "Melîle (Melilla)"
   ],
   "ana_govde_km": 169.8,
   "ana_govde": "Motril",
   "komsu_150km": 5,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1500-01-01",
   "yerlesim": "Şehrisebz (Kiş)",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 420.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Karşi (Nahşeb)",
    "Semerkant",
    "Şehrisebz (Kiş)"
   ],
   "ana_govde_km": 160.4,
   "ana_govde": "Hisar",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1386-01-01",
   "yerlesim": "Butrint (Butrinto)",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 411.8,
   "kova": "veri-eksigi",
   "ada": [
    "Butrint (Butrinto)",
    "Korfu",
    "Paksos (Paxos)"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Draç",
   "komsu_150km": 21,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1514-09-06",
   "yerlesim": "Doğubayazıt",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 409.1,
   "kova": "veri-eksigi",
   "ada": [
    "Doğubayazıt"
   ],
   "ana_govde_km": 251.5,
   "ana_govde": "Tebriz",
   "komsu_150km": 17,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Buraymî",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 408.6,
   "kova": "veri-eksigi",
   "ada": [
    "Buraymî"
   ],
   "ana_govde_km": 230.0,
   "ana_govde": "Nizva",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Dukm",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 408.6,
   "kova": "veri-eksigi",
   "ada": [
    "Dukm",
    "Masira",
    "Muhût",
    "Râs Medreke"
   ],
   "ana_govde_km": 207.2,
   "ana_govde": "Cezîr (Sevkıra)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-06-13",
   "yerlesim": "Maraş",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 408.4,
   "kova": "veri-eksigi",
   "ada": [
    "Elbistan",
    "Maraş"
   ],
   "ana_govde_km": 181.2,
   "ana_govde": "Kayseri",
   "komsu_150km": 16,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-06-13",
   "yerlesim": "Elbistan",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 408.4,
   "kova": "veri-eksigi",
   "ada": [
    "Elbistan",
    "Maraş"
   ],
   "ana_govde_km": 160.3,
   "ana_govde": "Kayseri",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-01-01",
   "yerlesim": "Silopi",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 403.8,
   "kova": "veri-eksigi",
   "ada": [
    "Malikiye (Derik)",
    "Nusaybin",
    "Silopi"
   ],
   "ana_govde_km": 292.1,
   "ana_govde": "Doğubayazıt",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1401-01-01",
   "yerlesim": "Parga",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 396.8,
   "kova": "veri-eksigi",
   "ada": [
    "Butrint (Butrinto)",
    "Korfu",
    "Paksos (Paxos)",
    "Parga"
   ],
   "ana_govde_km": 158.2,
   "ana_govde": "İnebahtı",
   "komsu_150km": 21,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1405-06-22",
   "yerlesim": "Verona",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 391.9,
   "kova": "veri-eksigi",
   "ada": [
    "Venedik",
    "Verona"
   ],
   "ana_govde_km": 274.3,
   "ana_govde": "Cres (Cherso)",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1405-11-22",
   "yerlesim": "Padova",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 391.5,
   "kova": "veri-eksigi",
   "ada": [
    "Padova",
    "Venedik",
    "Verona"
   ],
   "ana_govde_km": 206.4,
   "ana_govde": "Cres (Cherso)",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1420-06-07",
   "yerlesim": "Udine",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 376.9,
   "kova": "veri-eksigi",
   "ada": [
    "Padova",
    "Udine",
    "Venedik",
    "Verona"
   ],
   "ana_govde_km": 153.8,
   "ana_govde": "Krk (Veglia)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Arhangelsk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "veri-eksigi",
   "ada": [
    "Arhangelsk",
    "Holmogorı",
    "Mezen",
    "Onega",
    "Pinega"
   ],
   "ana_govde_km": 235.2,
   "ana_govde": "Solovki (Solovetsky)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Putivl",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 166.5,
   "ana_govde": "Kursk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Eski Ladoga",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "veri-eksigi",
   "ada": [
    "Eski Ladoga",
    "Oreşek (Nöteborg)",
    "Tihvin"
   ],
   "ana_govde_km": 174.2,
   "ana_govde": "Novgorod",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Pinega",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "veri-eksigi",
   "ada": [
    "Arhangelsk",
    "Holmogorı",
    "Mezen",
    "Onega",
    "Pinega"
   ],
   "ana_govde_km": 283.9,
   "ana_govde": "Ponoy",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Hluhiv",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 376.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 156.9,
   "ana_govde": "Kursk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1500-01-01",
   "yerlesim": "Semerkant",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 368.4,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Karşi (Nahşeb)",
    "Semerkant",
    "Şehrisebz (Kiş)"
   ],
   "ana_govde_km": 185.4,
   "ana_govde": "Hisar",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Astrahan",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Astrahan",
    "Saray (Selitrennoye)"
   ],
   "ana_govde_km": 194.9,
   "ana_govde": "Kalmuk bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Petrovsk (Saratov)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Petrovsk (Saratov)",
    "Ukek (Uvek)"
   ],
   "ana_govde_km": 185.4,
   "ana_govde": "Hvalınsk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Saray (Selitrennoye)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Astrahan",
    "Saray (Selitrennoye)"
   ],
   "ana_govde_km": 183.8,
   "ana_govde": "Kalmuk bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Yeni Saray (Tsarev)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Beldjamen",
    "Kamışin",
    "Yeni Saray (Tsarev)"
   ],
   "ana_govde_km": 158.8,
   "ana_govde": "Rın kumulları (Volga-Yayık arası)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Ukek (Uvek)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Petrovsk (Saratov)",
    "Ukek (Uvek)"
   ],
   "ana_govde_km": 159.0,
   "ana_govde": "Kamışin",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1556-01-01",
   "yerlesim": "Beldjamen",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 367.8,
   "kova": "veri-eksigi",
   "ada": [
    "Beldjamen",
    "Kamışin",
    "Yeni Saray (Tsarev)"
   ],
   "ana_govde_km": 200.6,
   "ana_govde": "Rın kumulları (Volga-Yayık arası)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1451-08-20",
   "yerlesim": "Bayonne",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 341.1,
   "kova": "veri-eksigi",
   "ada": [
    "Bayonne",
    "Pau"
   ],
   "ana_govde_km": 165.8,
   "ana_govde": "Bordo",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1589-07-02",
   "yerlesim": "Tsaritsyn",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 334.3,
   "kova": "veri-eksigi",
   "ada": [
    "Beldjamen",
    "Kamışin",
    "Tsaritsyn",
    "Yeni Saray (Tsarev)"
   ],
   "ana_govde_km": 220.9,
   "ana_govde": "Rın kumulları (Volga-Yayık arası)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1590-07-12",
   "yerlesim": "Saratov",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 333.3,
   "kova": "veri-eksigi",
   "ada": [
    "Petrovsk (Saratov)",
    "Saratov",
    "Ukek (Uvek)"
   ],
   "ana_govde_km": 167.2,
   "ana_govde": "Kamışin",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1559-01-01",
   "yerlesim": "Zeyla",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 325.0,
   "kova": "veri-eksigi",
   "ada": [
    "Zeyla"
   ],
   "ana_govde_km": 219.7,
   "ana_govde": "Moha",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1504-01-01",
   "yerlesim": "Rusayris",
   "yeni_sahip": "funj",
   "alan": "s",
   "yil": 317.4,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 151.0,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1504-01-01",
   "yerlesim": "Fâzûğlî",
   "yeni_sahip": "funj",
   "alan": "s",
   "yil": 317.4,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 228.4,
   "ana_govde": "Sincâ",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1504-01-01",
   "yerlesim": "Kurmuk",
   "yeni_sahip": "funj",
   "alan": "s",
   "yil": 317.4,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 253.3,
   "ana_govde": "Cebeleyn",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1504-01-01",
   "yerlesim": "Ed-Damazîn",
   "yeni_sahip": "funj",
   "alan": "s",
   "yil": 317.4,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Masavva",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 308.0,
   "kova": "veri-eksigi",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 298.1,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Dahlak",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 308.0,
   "kova": "veri-eksigi",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 230.7,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1577-01-01",
   "yerlesim": "Lasanod",
   "yeni_sahip": "somali",
   "alan": "s",
   "yil": 307.5,
   "kova": "veri-eksigi",
   "ada": [
    "Buhodle",
    "Garove",
    "Lasanod",
    "Taleh"
   ],
   "ana_govde_km": 151.5,
   "ana_govde": "Ceel Afveyn",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1531-04-16",
   "yerlesim": "Puebla de los Ángeles",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 290.4,
   "kova": "veri-eksigi",
   "ada": [
    "Puebla de los Ángeles"
   ],
   "ana_govde_km": 269.0,
   "ana_govde": "Antequera (Oaxaca)",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Yedisan bozkırı",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 289.9,
   "kova": "veri-eksigi",
   "ada": [
    "Hacıbey (Odessa)",
    "Yedisan bozkırı",
    "Özi"
   ],
   "ana_govde_km": 289.9,
   "ana_govde": "Yediçkul bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1535-04-17",
   "yerlesim": "Zaachila",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 286.4,
   "kova": "veri-eksigi",
   "ada": [
    "Antequera (Oaxaca)",
    "Mitla",
    "Tututepec (Yucu Dzaa)",
    "Zaachila"
   ],
   "ana_govde_km": 251.9,
   "ana_govde": "Tepeaca",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Porto",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "veri-eksigi",
   "ada": [
    "Aveiro",
    "Braga",
    "Bragança",
    "Coimbra",
    "Porto"
   ],
   "ana_govde_km": 273.7,
   "ana_govde": "Lizbon",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Aveiro",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "veri-eksigi",
   "ada": [
    "Aveiro",
    "Braga",
    "Bragança",
    "Coimbra",
    "Porto"
   ],
   "ana_govde_km": 217.4,
   "ana_govde": "Lizbon",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Coimbra",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "veri-eksigi",
   "ada": [
    "Aveiro",
    "Braga",
    "Bragança",
    "Coimbra",
    "Porto"
   ],
   "ana_govde_km": 176.2,
   "ana_govde": "Lizbon",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Évora",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "veri-eksigi",
   "ada": [
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 172.6,
   "ana_govde": "Faro",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1542-01-01",
   "yerlesim": "Maní",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 279.7,
   "kova": "veri-eksigi",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Maní"
   ],
   "ana_govde_km": 294.2,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1368-01-23",
   "yerlesim": "Suzhou",
   "yeni_sahip": "ming-hanedani",
   "alan": "s",
   "yil": 276.2,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 164.6,
   "ana_govde": "Yangzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1368-01-23",
   "yerlesim": "Hangzhou",
   "yeni_sahip": "ming-hanedani",
   "alan": "s",
   "yil": 276.2,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 206.3,
   "ana_govde": "Wuhu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1368-01-23",
   "yerlesim": "Shaoxing",
   "yeni_sahip": "ming-hanedani",
   "alan": "s",
   "yil": 276.2,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 226.7,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1654-01-08",
   "yerlesim": "Çernigov",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 269.8,
   "kova": "veri-eksigi",
   "ada": [
    "Baturin",
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 285.0,
   "ana_govde": "Bryansk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1654-01-08",
   "yerlesim": "Novgorod-Seversk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 269.8,
   "kova": "veri-eksigi",
   "ada": [
    "Baturin",
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 158.3,
   "ana_govde": "Bryansk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1654-01-08",
   "yerlesim": "Baturin",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 269.8,
   "kova": "veri-eksigi",
   "ada": [
    "Baturin",
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 233.2,
   "ana_govde": "Kursk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1646-07-06",
   "yerlesim": "Shaoxing",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 265.6,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 255.3,
   "ana_govde": "Wuhu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1603-03-24",
   "yerlesim": "Edo (Tokyo)",
   "yeni_sahip": "edo-bakufu",
   "alan": "s",
   "yil": 264.8,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 201.8,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1603-03-24",
   "yerlesim": "Kamakura",
   "yeni_sahip": "edo-bakufu",
   "alan": "s",
   "yil": 264.8,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 244.3,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1603-03-24",
   "yerlesim": "Odawara",
   "yeni_sahip": "edo-bakufu",
   "alan": "s",
   "yil": 264.8,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 217.7,
   "ana_govde": "Gifu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1603-03-24",
   "yerlesim": "Sunpu (Şizuoka)",
   "yeni_sahip": "edo-bakufu",
   "alan": "s",
   "yil": 264.8,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 155.6,
   "ana_govde": "Gifu",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1611-01-01",
   "yerlesim": "Hirosaki",
   "yeni_sahip": "edo-bakufu",
   "alan": "s",
   "yil": 257.0,
   "kova": "veri-eksigi",
   "ada": [
    "Hakodate",
    "Hirosaki",
    "Matsumae",
    "Morioka"
   ],
   "ana_govde_km": 262.0,
   "ana_govde": "Sendai",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1667-01-01",
   "yerlesim": "Krasnıy Yar",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 256.8,
   "kova": "veri-eksigi",
   "ada": [
    "Astrahan",
    "Krasnıy Yar",
    "Saray (Selitrennoye)"
   ],
   "ana_govde_km": 217.6,
   "ana_govde": "Kalmuk bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1629-01-01",
   "yerlesim": "Taiz",
   "yeni_sahip": "yemen",
   "alan": "s",
   "yil": 243.2,
   "kova": "veri-eksigi",
   "ada": [
    "Taiz"
   ],
   "ana_govde_km": 177.8,
   "ana_govde": "Hudeyde",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1552-04-18",
   "yerlesim": "Metz",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 240.4,
   "kova": "veri-eksigi",
   "ada": [
    "Metz"
   ],
   "ana_govde_km": 156.6,
   "ana_govde": "Reims",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Kamakura",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 244.3,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Odawara",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 217.7,
   "ana_govde": "Gifu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Sunpu (Şizuoka)",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 155.6,
   "ana_govde": "Gifu",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Funai (Ōita)",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "veri-eksigi",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 264.7,
   "ana_govde": "Okayama",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1676-10-01",
   "yerlesim": "Zeytun (Quanzhou)",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 235.4,
   "kova": "veri-eksigi",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 262.5,
   "ana_govde": "Swatow (Shantou)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1676-10-01",
   "yerlesim": "Zhangzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 235.4,
   "kova": "veri-eksigi",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 161.3,
   "ana_govde": "Swatow (Shantou)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Nihâvend",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 194.6,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Simnân",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Tahran",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Dâmgan",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 271.6,
   "ana_govde": "Tahran",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Burûcird",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Mînâb",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "veri-eksigi",
   "ada": [
    "Mînâb"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Câsk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1645-07-06",
   "yerlesim": "Hangzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 216.5,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 206.3,
   "ana_govde": "Wuhu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1645-06-08",
   "yerlesim": "Suzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 215.0,
   "kova": "veri-eksigi",
   "ada": [
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 164.6,
   "ana_govde": "Yangzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Harkov",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 213.0,
   "kova": "veri-eksigi",
   "ada": [
    "Belgorod",
    "Harkov",
    "Sloboda bozkırı"
   ],
   "ana_govde_km": 278.9,
   "ana_govde": "Voronej",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1510-12-02",
   "yerlesim": "Esterâbâd (Gürgân)",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 212.8,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dihistan ovası (Meşhed-i Misriyân)",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 266.1,
   "ana_govde": "Bocnûrd",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1721-01-01",
   "yerlesim": "Çerkask (Razdory)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 202.8,
   "kova": "veri-eksigi",
   "ada": [
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 172.3,
   "ana_govde": "Don bozkırı (Sal)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1338-01-01",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "bengal-sultanligi",
   "alan": "s",
   "yil": 200.0,
   "kova": "veri-eksigi",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 220.7,
   "ana_govde": "Gaur (Lakhnautî)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1724-10-11",
   "yerlesim": "Devagiri (Devletâbâd)",
   "yeni_sahip": "haydarabad-nizam",
   "alan": "s",
   "yil": 199.0,
   "kova": "veri-eksigi",
   "ada": [
    "Devagiri (Devletâbâd)",
    "Evrengâbâd"
   ],
   "ana_govde_km": 279.7,
   "ana_govde": "Elicpûr (Achalpur)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1509-05-17",
   "yerlesim": "Oran",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 198.9,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran"
   ],
   "ana_govde_km": 193.6,
   "ana_govde": "Mojácar",
   "komsu_150km": 7,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1509-05-17",
   "yerlesim": "Mersa'l-Kebîr",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 198.9,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran"
   ],
   "ana_govde_km": 187.2,
   "ana_govde": "Mojácar",
   "komsu_150km": 7,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Lahor",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 196.7,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 258.1,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Câlandhar (Jalandhar)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 196.7,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 242.0,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Ludhiyana",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 196.7,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 194.8,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1555-07-23",
   "yerlesim": "Siyâlkot",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 196.7,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1471-08-28",
   "yerlesim": "Tanca",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 190.4,
   "kova": "veri-eksigi",
   "ada": [
    "Arzila (Asilah)",
    "Sebte (Ceuta)",
    "Tanca"
   ],
   "ana_govde_km": 235.1,
   "ana_govde": "Faro",
   "komsu_150km": 10,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1737-01-01",
   "yerlesim": "İlek",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 186.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ural eteği",
    "Uralsk (Yayık)",
    "İlek"
   ],
   "ana_govde_km": 159.9,
   "ana_govde": "Buzuluk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1739-09-18",
   "yerlesim": "Taganrog",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 184.1,
   "kova": "veri-eksigi",
   "ada": [
    "Taganrog",
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 174.0,
   "ana_govde": "Donets bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1304-01-01",
   "yerlesim": "Çampâner",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 180.0,
   "kova": "veri-eksigi",
   "ada": [
    "Broaç (Bharuch)",
    "Kanbâyet (Khambhat)",
    "Sûrat",
    "Çampâner"
   ],
   "ana_govde_km": 209.3,
   "ana_govde": "Patan (Anhilvâda)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1749-12-15",
   "yerlesim": "Rostov (Don)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 173.9,
   "kova": "veri-eksigi",
   "ada": [
    "Rostov (Don)",
    "Taganrog",
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Donets bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1620-10-19",
   "yerlesim": "Pau",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 171.9,
   "kova": "veri-eksigi",
   "ada": [
    "Bayonne",
    "Pau"
   ],
   "ana_govde_km": 150.4,
   "ana_govde": "Toulouse",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1648-10-24",
   "yerlesim": "Stralsund",
   "yeni_sahip": "isvec",
   "alan": "s",
   "yil": 166.6,
   "kova": "veri-eksigi",
   "ada": [
    "Stettin (Szczecin)",
    "Stralsund"
   ],
   "ana_govde_km": 263.4,
   "ana_govde": "Halmstad",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1415-01-01",
   "yerlesim": "Sebte (Ceuta)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 166.3,
   "kova": "veri-eksigi",
   "ada": [
    "Sebte (Ceuta)"
   ],
   "ana_govde_km": 265.2,
   "ana_govde": "Faro",
   "komsu_150km": 13,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Revan",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 165.6,
   "kova": "veri-eksigi",
   "ada": [
    "Revan"
   ],
   "ana_govde_km": 165.8,
   "ana_govde": "Gence",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1516-01-23",
   "yerlesim": "Besançon",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 162.7,
   "kova": "veri-eksigi",
   "ada": [
    "Besançon"
   ],
   "ana_govde_km": 264.0,
   "ana_govde": "Lüksemburg",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1475-06-06",
   "yerlesim": "Azak",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 162.0,
   "kova": "veri-eksigi",
   "ada": [
    "Azak"
   ],
   "ana_govde_km": 299.7,
   "ana_govde": "Kerç",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1708-01-01",
   "yerlesim": "Mantova",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 158.8,
   "kova": "veri-eksigi",
   "ada": [
    "Mantova"
   ],
   "ana_govde_km": 239.0,
   "ana_govde": "Trieste",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1505-01-01",
   "yerlesim": "Kannûr (Cannanore)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 158.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kannûr (Cannanore)"
   ],
   "ana_govde_km": 234.1,
   "ana_govde": "Koçin (Kochi)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1348-01-01",
   "yerlesim": "Erzurum",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 154.0,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkale",
    "Erzincan",
    "Erzurum",
    "Kelkit",
    "Kemah"
   ],
   "ana_govde_km": 189.6,
   "ana_govde": "Digor",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1348-01-01",
   "yerlesim": "Aşkale",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 154.0,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkale",
    "Erzincan",
    "Erzurum",
    "Kelkit",
    "Kemah"
   ],
   "ana_govde_km": 236.3,
   "ana_govde": "Digor",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1347-08-03",
   "yerlesim": "Devagiri (Devletâbâd)",
   "yeni_sahip": "behmeni",
   "alan": "s",
   "yil": 151.4,
   "kova": "veri-eksigi",
   "ada": [
    "Devagiri (Devletâbâd)",
    "Nâsik"
   ],
   "ana_govde_km": 213.4,
   "ana_govde": "Pûne (Poona)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1772-08-05",
   "yerlesim": "Polotsk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 151.2,
   "kova": "veri-eksigi",
   "ada": [
    "Daugavpils (Dünaburg)",
    "Polotsk",
    "Smolensk",
    "Velikiye Luki",
    "Vitebsk"
   ],
   "ana_govde_km": 260.3,
   "ana_govde": "Pskov",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1570-01-01",
   "yerlesim": "Çerkask (Razdory)",
   "yeni_sahip": "don-kazak",
   "alan": "s",
   "yil": 151.0,
   "kova": "veri-eksigi",
   "ada": [
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 172.3,
   "ana_govde": "Don bozkırı (Sal)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1774-07-21",
   "yerlesim": "Kerç",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 149.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kerç",
    "Taman"
   ],
   "ana_govde_km": 280.3,
   "ana_govde": "Taganrog",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1774-07-21",
   "yerlesim": "Azak",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 149.3,
   "kova": "veri-eksigi",
   "ada": [
    "Azak",
    "Rostov (Don)",
    "Taganrog",
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 190.2,
   "ana_govde": "Donets bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1774-07-21",
   "yerlesim": "Taman",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 149.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kerç",
    "Taman"
   ],
   "ana_govde_km": 281.5,
   "ana_govde": "Taganrog",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1775-01-01",
   "yerlesim": "Cavnpur (Jaunpur)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 148.8,
   "kova": "veri-eksigi",
   "ada": [
    "Benâres (Vârânasî)",
    "Cavnpur (Jaunpur)"
   ],
   "ana_govde_km": 246.5,
   "ana_govde": "Patna (Azîmâbâd)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1775-05-07",
   "yerlesim": "Suçava (Suceava)",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 148.5,
   "kova": "veri-eksigi",
   "ada": [
    "Lvov",
    "Suçava (Suceava)",
    "Yazlofça (Yazlovets)",
    "Çernovitz (Çernivtsi)"
   ],
   "ana_govde_km": 192.2,
   "ana_govde": "Segesvár (Sighişoara)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1775-05-07",
   "yerlesim": "Çernovitz (Çernivtsi)",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 148.5,
   "kova": "veri-eksigi",
   "ada": [
    "Lvov",
    "Suçava (Suceava)",
    "Yazlofça (Yazlovets)",
    "Çernovitz (Çernivtsi)"
   ],
   "ana_govde_km": 234.4,
   "ana_govde": "Szatmár (Satu Mare)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1772-08-05",
   "yerlesim": "Yazlofça (Yazlovets)",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 146.3,
   "kova": "veri-eksigi",
   "ada": [
    "Lvov",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 207.2,
   "ana_govde": "Munkács (Mukacheve)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1648-10-24",
   "yerlesim": "Colmar",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 143.9,
   "kova": "veri-eksigi",
   "ada": [
    "Colmar",
    "Metz"
   ],
   "ana_govde_km": 192.7,
   "ana_govde": "Dijon",
   "komsu_150km": 11,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1781-11-12",
   "yerlesim": "Nagapatnam",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 142.0,
   "kova": "veri-eksigi",
   "ada": [
    "Nagapatnam"
   ],
   "ana_govde_km": 172.2,
   "ana_govde": "Cinci (Gingee)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1783-04-19",
   "yerlesim": "Kuban (Yekaterinodar)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 140.5,
   "kova": "veri-eksigi",
   "ada": [
    "Kuban (Yekaterinodar)"
   ],
   "ana_govde_km": 159.9,
   "ana_govde": "Kuban Nogay bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1788-12-17",
   "yerlesim": "Özi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 134.9,
   "kova": "veri-eksigi",
   "ada": [
    "Özi"
   ],
   "ana_govde_km": 172.6,
   "ana_govde": "Or Kapı (Ferahkirman)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1792-01-09",
   "yerlesim": "Hacıbey (Odessa)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 131.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hacıbey (Odessa)",
    "Yedisan bozkırı",
    "Özi"
   ],
   "ana_govde_km": 193.5,
   "ana_govde": "İsmail",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1792-01-09",
   "yerlesim": "Yedisan bozkırı",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 131.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hacıbey (Odessa)",
    "Yedisan bozkırı",
    "Özi"
   ],
   "ana_govde_km": 265.7,
   "ana_govde": "Or Kapı (Ferahkirman)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1792-09-22",
   "yerlesim": "Bastia (Korsika)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 131.1,
   "kova": "veri-eksigi",
   "ada": [
    "Ayacyo (Ajaccio)",
    "Bastia (Korsika)"
   ],
   "ana_govde_km": 289.8,
   "ana_govde": "Toulon",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1792-09-22",
   "yerlesim": "Bayonne",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 131.1,
   "kova": "veri-eksigi",
   "ada": [
    "Bayonne",
    "Pau"
   ],
   "ana_govde_km": 165.8,
   "ana_govde": "Bordo",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1792-09-22",
   "yerlesim": "Pau",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 131.1,
   "kova": "veri-eksigi",
   "ada": [
    "Bayonne",
    "Pau"
   ],
   "ana_govde_km": 150.4,
   "ana_govde": "Toulouse",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Bar (Podolya)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 130.8,
   "kova": "veri-eksigi",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Meciboj (Mejibuji)"
   ],
   "ana_govde_km": 223.0,
   "ana_govde": "Kiev",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Meciboj (Mejibuji)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 130.8,
   "kova": "veri-eksigi",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Meciboj (Mejibuji)"
   ],
   "ana_govde_km": 249.7,
   "ana_govde": "Kiev",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1370-01-01",
   "yerlesim": "Semerkant",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 130.0,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Karşi (Nahşeb)",
    "Semerkant",
    "Şehrisebz (Kiş)"
   ],
   "ana_govde_km": 185.4,
   "ana_govde": "Hisar",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1370-01-01",
   "yerlesim": "Şehrisebz (Kiş)",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 130.0,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Karşi (Nahşeb)",
    "Semerkant",
    "Şehrisebz (Kiş)"
   ],
   "ana_govde_km": 160.4,
   "ana_govde": "Hisar",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1378-01-01",
   "yerlesim": "Diyarbakır",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 129.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ceylanpınar",
    "Diyarbakır",
    "Malikiye (Derik)",
    "Nusaybin",
    "Silopi"
   ],
   "ana_govde_km": 214.4,
   "ana_govde": "Erzincan",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1407-01-01",
   "yerlesim": "Bombay",
   "yeni_sahip": "gucerat-sultanligi",
   "alan": "s",
   "yil": 128.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bombay"
   ],
   "ana_govde_km": 247.8,
   "ana_govde": "Sûrat",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1400-01-01",
   "yerlesim": "Utatlán (Q'umarkaj)",
   "yeni_sahip": "maya-sehir-devletleri",
   "alan": "s",
   "yil": 124.2,
   "kova": "veri-eksigi",
   "ada": [
    "Utatlán (Q'umarkaj)",
    "Zaculeu"
   ],
   "ana_govde_km": 250.5,
   "ana_govde": "Nojpetén (Tayasal / Flores)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1799-10-25",
   "yerlesim": "Tancûr (Thanjavur)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 124.0,
   "kova": "veri-eksigi",
   "ada": [
    "Nagapatnam",
    "Tancûr (Thanjavur)"
   ],
   "ana_govde_km": 165.3,
   "ana_govde": "Cinci (Gingee)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-07-31",
   "yerlesim": "Trichinopoly (Tiruchirappalli)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.2,
   "kova": "veri-eksigi",
   "ada": [
    "Madurai",
    "Nagapatnam",
    "Tancûr (Thanjavur)",
    "Trichinopoly (Tiruchirappalli)"
   ],
   "ana_govde_km": 179.2,
   "ana_govde": "Cinci (Gingee)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-07-31",
   "yerlesim": "Arkot (Arcot)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.2,
   "kova": "veri-eksigi",
   "ada": [
    "Arkot (Arcot)",
    "Cinci (Gingee)",
    "Madras (Chennai)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 236.5,
   "ana_govde": "Tancûr (Thanjavur)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-09-12",
   "yerlesim": "Tiflis",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 122.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kabartay (Nalçik)",
    "Tiflis",
    "Vladikavkaz",
    "Zagem (Kaheti)"
   ],
   "ana_govde_km": 285.1,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-09-12",
   "yerlesim": "Zagem (Kaheti)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 122.1,
   "kova": "veri-eksigi",
   "ada": [
    "Kabartay (Nalçik)",
    "Tiflis",
    "Vladikavkaz",
    "Zagem (Kaheti)"
   ],
   "ana_govde_km": 251.1,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-11-10",
   "yerlesim": "Kannauc",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.0,
   "kova": "veri-eksigi",
   "ada": [
    "Etâve (Etawah)",
    "Kannauc",
    "Kanpûr"
   ],
   "ana_govde_km": 263.6,
   "ana_govde": "Ilâhâbâd (Allahabad)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1801-11-10",
   "yerlesim": "Kanpûr",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.0,
   "kova": "veri-eksigi",
   "ada": [
    "Etâve (Etawah)",
    "Kannauc",
    "Kanpûr"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Ilâhâbâd (Allahabad)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1803-08-12",
   "yerlesim": "Ahmednagar",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 120.2,
   "kova": "veri-eksigi",
   "ada": [
    "Ahmednagar"
   ],
   "ana_govde_km": 202.7,
   "ana_govde": "Bombay",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1552-01-01",
   "yerlesim": "el-Vâdî (Sûf)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 119.0,
   "kova": "veri-eksigi",
   "ada": [
    "Tuggurt",
    "Vargla (Ouargla)",
    "el-Vâdî (Sûf)"
   ],
   "ana_govde_km": 195.3,
   "ana_govde": "Biskra",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1457-01-01",
   "yerlesim": "Edo (Tokyo)",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 116.0,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 201.8,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1809-04-25",
   "yerlesim": "Ludhiyana",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 114.5,
   "kova": "veri-eksigi",
   "ada": [
    "Ludhiyana"
   ],
   "ana_govde_km": 194.8,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1810-02-20",
   "yerlesim": "Kutaisi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 113.7,
   "kova": "veri-eksigi",
   "ada": [
    "Kutaisi"
   ],
   "ana_govde_km": 156.1,
   "ana_govde": "Kabartay (Nalçik)",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1795-01-01",
   "yerlesim": "Angkor (Siem Reap)",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 112.2,
   "kova": "veri-eksigi",
   "ada": [
    "Angkor (Siem Reap)",
    "Battambang",
    "Chanthaburi",
    "Pursat",
    "Sisophon"
   ],
   "ana_govde_km": 257.5,
   "ana_govde": "Nakhon Ratchasima",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1795-01-01",
   "yerlesim": "Battambang",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 112.2,
   "kova": "veri-eksigi",
   "ada": [
    "Angkor (Siem Reap)",
    "Battambang",
    "Chanthaburi",
    "Pursat",
    "Sisophon"
   ],
   "ana_govde_km": 240.0,
   "ana_govde": "Nakhon Ratchasima",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1795-01-01",
   "yerlesim": "Sisophon",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 112.2,
   "kova": "veri-eksigi",
   "ada": [
    "Angkor (Siem Reap)",
    "Battambang",
    "Chanthaburi",
    "Pursat",
    "Sisophon"
   ],
   "ana_govde_km": 180.4,
   "ana_govde": "Nakhon Ratchasima",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1809-09-17",
   "yerlesim": "Tornio",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 108.2,
   "kova": "veri-eksigi",
   "ada": [
    "Oulu",
    "Rovaniemi",
    "Sodankylä",
    "Tornio"
   ],
   "ana_govde_km": 228.6,
   "ana_govde": "Kokkola",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1663-02-15",
   "yerlesim": "Kannûr (Cannanore)",
   "yeni_sahip": "hollanda",
   "alan": "s",
   "yil": 107.9,
   "kova": "veri-eksigi",
   "ada": [
    "Kannûr (Cannanore)"
   ],
   "ana_govde_km": 234.1,
   "ana_govde": "Koçin (Kochi)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Hürmüz Adası",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 107.1,
   "kova": "veri-eksigi",
   "ada": [
    "Hürmüz Adası",
    "Kişm (Qeshm)",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 281.6,
   "ana_govde": "Suhâr",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Kişm (Qeshm)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 107.1,
   "kova": "veri-eksigi",
   "ada": [
    "Hürmüz Adası",
    "Kişm (Qeshm)",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 286.0,
   "ana_govde": "Suhâr",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Ras el-Hayme (Cülfâr)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 107.1,
   "kova": "veri-eksigi",
   "ada": [
    "Hürmüz Adası",
    "Kişm (Qeshm)",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 178.0,
   "ana_govde": "Suhâr",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1515-04-01",
   "yerlesim": "Şârika",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 107.1,
   "kova": "veri-eksigi",
   "ada": [
    "Hürmüz Adası",
    "Kişm (Qeshm)",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 174.1,
   "ana_govde": "Suhâr",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1304-01-01",
   "yerlesim": "Kanbâyet (Khambhat)",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 103.0,
   "kova": "veri-eksigi",
   "ada": [
    "Broaç (Bharuch)",
    "Kanbâyet (Khambhat)",
    "Sûrat",
    "Çampâner"
   ],
   "ana_govde_km": 177.8,
   "ana_govde": "Patan (Anhilvâda)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1304-01-01",
   "yerlesim": "Broaç (Bharuch)",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 103.0,
   "kova": "veri-eksigi",
   "ada": [
    "Broaç (Bharuch)",
    "Kanbâyet (Khambhat)",
    "Sûrat",
    "Çampâner"
   ],
   "ana_govde_km": 236.2,
   "ana_govde": "Diu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Zaachila",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "veri-eksigi",
   "ada": [
    "Antequera (Oaxaca)",
    "Mitla",
    "Tututepec (Yucu Dzaa)",
    "Zaachila"
   ],
   "ana_govde_km": 251.9,
   "ana_govde": "Tepeaca",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Maní",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "veri-eksigi",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Chichén Itzá",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 294.2,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Antequera (Oaxaca)",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "veri-eksigi",
   "ada": [
    "Antequera (Oaxaca)",
    "Mitla",
    "Tututepec (Yucu Dzaa)",
    "Zaachila"
   ],
   "ana_govde_km": 241.8,
   "ana_govde": "Veracruz (Villa Rica de la Vera Cruz)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1358-01-01",
   "yerlesim": "Dubrovnik",
   "yeni_sahip": "macaristan",
   "alan": "s",
   "yil": 101.2,
   "kova": "veri-eksigi",
   "ada": [
    "Dubrovnik"
   ],
   "ana_govde_km": 163.0,
   "ana_govde": "Klis",
   "komsu_150km": 15,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1402-07-28",
   "yerlesim": "Kemah",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 99.4,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkale",
    "Erzurum",
    "Karahisâr-ı Şarkî (Şebinkarahisar)",
    "Kemah"
   ],
   "ana_govde_km": 215.0,
   "ana_govde": "Diyarbakır",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Özi",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 97.7,
   "kova": "veri-eksigi",
   "ada": [
    "Hacıbey (Odessa)",
    "Özi"
   ],
   "ana_govde_km": 172.6,
   "ana_govde": "Or Kapı (Ferahkirman)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1441-01-01",
   "yerlesim": "Hacıbey (Odessa)",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 97.7,
   "kova": "veri-eksigi",
   "ada": [
    "Hacıbey (Odessa)",
    "Özi"
   ],
   "ana_govde_km": 229.9,
   "ana_govde": "Or Kapı (Ferahkirman)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1538-08-03",
   "yerlesim": "Moha",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 97.2,
   "kova": "veri-eksigi",
   "ada": [
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 200.6,
   "ana_govde": "Aden",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1539-01-01",
   "yerlesim": "Zebîd",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 96.0,
   "kova": "veri-eksigi",
   "ada": [
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 150.8,
   "ana_govde": "Kemeran (Kamaran)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1831-01-04",
   "yerlesim": "Oran",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 92.8,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran",
    "Tilimsan"
   ],
   "ana_govde_km": 266.2,
   "ana_govde": "Miliana",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1831-01-04",
   "yerlesim": "Mersa'l-Kebîr",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 92.8,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran",
    "Tilimsan"
   ],
   "ana_govde_km": 271.9,
   "ana_govde": "Miliana",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1633-06-28",
   "yerlesim": "Devagiri (Devletâbâd)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 91.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ahmednagar",
    "Devagiri (Devletâbâd)",
    "Evrengâbâd"
   ],
   "ana_govde_km": 266.8,
   "ana_govde": "Mandu (Mândû)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1833-07-28",
   "yerlesim": "Mustagānim",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 90.3,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Mustagānim",
    "Oran",
    "Tilimsan"
   ],
   "ana_govde_km": 196.7,
   "ana_govde": "Miliana",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1833-09-29",
   "yerlesim": "Bicâye",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 90.1,
   "kova": "veri-eksigi",
   "ada": [
    "Bicâye"
   ],
   "ana_govde_km": 177.9,
   "ana_govde": "Cezayir",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1466-01-01",
   "yerlesim": "Saray (Selitrennoye)",
   "yeni_sahip": "astarhan",
   "alan": "s",
   "yil": 90.0,
   "kova": "veri-eksigi",
   "ada": [
    "Saray (Selitrennoye)"
   ],
   "ana_govde_km": 240.4,
   "ana_govde": "Yeni Saray (Tsarev)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1466-01-01",
   "yerlesim": "Ukek (Uvek)",
   "yeni_sahip": "astarhan",
   "alan": "s",
   "yil": 90.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ukek (Uvek)"
   ],
   "ana_govde_km": 285.5,
   "ana_govde": "Beldjamen",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1617-02-27",
   "yerlesim": "Oreşek (Nöteborg)",
   "yeni_sahip": "isvec",
   "alan": "s",
   "yil": 85.6,
   "kova": "veri-eksigi",
   "ada": [
    "Oreşek (Nöteborg)"
   ],
   "ana_govde_km": 152.4,
   "ana_govde": "Viipuri (Vyborg)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1632-06-24",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 84.5,
   "kova": "veri-eksigi",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 216.4,
   "ana_govde": "Bâlâsor (Balasore)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-02-01",
   "yerlesim": "Taiz",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 81.9,
   "kova": "veri-eksigi",
   "ada": [
    "Aden",
    "Moha",
    "Taiz",
    "Zebîd"
   ],
   "ana_govde_km": 199.9,
   "ana_govde": "Sana",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1718-07-21",
   "yerlesim": "Çuha Adası (Kythira)",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 79.2,
   "kova": "veri-eksigi",
   "ada": [
    "Çuha Adası (Kythira)"
   ],
   "ana_govde_km": 261.3,
   "ana_govde": "Zaklise (Zakynthos)",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1471-01-01",
   "yerlesim": "Arzila (Asilah)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 78.0,
   "kova": "veri-eksigi",
   "ada": [
    "Arzila (Asilah)",
    "Sebte (Ceuta)"
   ],
   "ana_govde_km": 242.2,
   "ana_govde": "Faro",
   "komsu_150km": 10,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1846-03-09",
   "yerlesim": "Câlandhar (Jalandhar)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 77.6,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Ludhiyana"
   ],
   "ana_govde_km": 242.0,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1846-03-16",
   "yerlesim": "Cammû (Jammu)",
   "yeni_sahip": "cammu-kesmir",
   "alan": "s",
   "yil": 77.6,
   "kova": "veri-eksigi",
   "ada": [
    "Cammû (Jammu)"
   ],
   "ana_govde_km": 150.3,
   "ana_govde": "Srinagar (Keşmir)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Çernigov",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 71.9,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 285.0,
   "ana_govde": "Bryansk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Novgorod-Seversk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 71.9,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 158.3,
   "ana_govde": "Bryansk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1547-01-16",
   "yerlesim": "Oreşek (Nöteborg)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 70.1,
   "kova": "veri-eksigi",
   "ada": [
    "Eski Ladoga",
    "Oreşek (Nöteborg)",
    "Tihvin"
   ],
   "ana_govde_km": 159.8,
   "ana_govde": "Novgorod",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1849-01-01",
   "yerlesim": "Moha",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 69.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hudeyde",
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 219.7,
   "ana_govde": "Zeyla",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Arhangelsk",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "veri-eksigi",
   "ada": [
    "Arhangelsk",
    "Holmogorı",
    "Mezen",
    "Onega",
    "Pinega"
   ],
   "ana_govde_km": 235.2,
   "ana_govde": "Solovki (Solovetsky)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Eski Ladoga",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "veri-eksigi",
   "ada": [
    "Eski Ladoga",
    "Oreşek (Nöteborg)",
    "Tihvin"
   ],
   "ana_govde_km": 174.2,
   "ana_govde": "Novgorod",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Oreşek (Nöteborg)",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "veri-eksigi",
   "ada": [
    "Eski Ladoga",
    "Oreşek (Nöteborg)",
    "Tihvin"
   ],
   "ana_govde_km": 159.8,
   "ana_govde": "Novgorod",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1478-01-15",
   "yerlesim": "Pinega",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 69.0,
   "kova": "veri-eksigi",
   "ada": [
    "Arhangelsk",
    "Holmogorı",
    "Mezen",
    "Onega",
    "Pinega"
   ],
   "ana_govde_km": 283.9,
   "ana_govde": "Ponoy",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1854-12-02",
   "yerlesim": "el-Vâdî (Sûf)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 68.9,
   "kova": "veri-eksigi",
   "ada": [
    "Tuggurt",
    "Vargla (Ouargla)",
    "el-Vâdî (Sûf)"
   ],
   "ana_govde_km": 195.3,
   "ana_govde": "Biskra",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Çerkask (Razdory)",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 67.8,
   "kova": "veri-eksigi",
   "ada": [
    "Çerkask (Razdory)"
   ],
   "ana_govde_km": 172.3,
   "ana_govde": "Don bozkırı (Sal)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1842-01-01",
   "yerlesim": "Kedah (Alor Setar)",
   "yeni_sahip": "malay-sultanliklari",
   "alan": "s",
   "yil": 67.5,
   "kova": "veri-eksigi",
   "ada": [
    "Kedah (Alor Setar)"
   ],
   "ana_govde_km": 163.5,
   "ana_govde": "Perak (Kuala Kangsar)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1753-04-01",
   "yerlesim": "Çampâner",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 64.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ahmedâbâd",
    "Kanbâyet (Khambhat)",
    "Patan (Anhilvâda)",
    "Çampâner"
   ],
   "ana_govde_km": 192.5,
   "ana_govde": "Mandu (Mândû)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Nihâvend",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 194.6,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Sâve",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Sâve"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Kâşân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Simnân",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 253.7,
   "ana_govde": "Kâşân",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Dâmgan",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 223.6,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Bistâm",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 190.1,
   "ana_govde": "Dihistan ovası (Meşhed-i Misriyân)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1387-11-01",
   "yerlesim": "Burûcird",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 64.2,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-06-14",
   "yerlesim": "Rusayris",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 63.6,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 151.0,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-06-14",
   "yerlesim": "Fâzûğlî",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 63.6,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 228.4,
   "ana_govde": "Sincâ",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-06-14",
   "yerlesim": "Kurmuk",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 63.6,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 253.3,
   "ana_govde": "Cebeleyn",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1821-06-14",
   "yerlesim": "Ed-Damazîn",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 63.6,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1711-07-21",
   "yerlesim": "Azak",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 63.0,
   "kova": "veri-eksigi",
   "ada": [
    "Azak"
   ],
   "ana_govde_km": 297.5,
   "ana_govde": "Taman",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Pantelerya",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "veri-eksigi",
   "ada": [
    "Palermo",
    "Pantelerya",
    "Trapani"
   ],
   "ana_govde_km": 285.6,
   "ana_govde": "Katanya (Catania)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Messina",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cosenza",
    "Katanya (Catania)",
    "Messina",
    "Reggio Calabria",
    "Sirakuza"
   ],
   "ana_govde_km": 191.9,
   "ana_govde": "Palermo",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Sirakuza",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cosenza",
    "Katanya (Catania)",
    "Messina",
    "Reggio Calabria",
    "Sirakuza"
   ],
   "ana_govde_km": 205.4,
   "ana_govde": "Palermo",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Reggio Calabria",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cosenza",
    "Katanya (Catania)",
    "Messina",
    "Reggio Calabria",
    "Sirakuza"
   ],
   "ana_govde_km": 200.0,
   "ana_govde": "Palermo",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1861-02-13",
   "yerlesim": "Katanya (Catania)",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 62.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cosenza",
    "Katanya (Catania)",
    "Messina",
    "Reggio Calabria",
    "Sirakuza"
   ],
   "ana_govde_km": 166.3,
   "ana_govde": "Palermo",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1406-10-21",
   "yerlesim": "Berde (Karabağ)",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 61.4,
   "kova": "veri-eksigi",
   "ada": [
    "Berde (Karabağ)"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Ordubad",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1732-07-01",
   "yerlesim": "Oran",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 59.6,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran"
   ],
   "ana_govde_km": 193.6,
   "ana_govde": "Mojácar",
   "komsu_150km": 7,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1732-07-01",
   "yerlesim": "Mersa'l-Kebîr",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 59.6,
   "kova": "veri-eksigi",
   "ada": [
    "Mersa'l-Kebîr",
    "Oran"
   ],
   "ana_govde_km": 187.2,
   "ana_govde": "Mojácar",
   "komsu_150km": 7,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1581-04-16",
   "yerlesim": "Évora",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 59.6,
   "kova": "veri-eksigi",
   "ada": [
    "Badajoz",
    "Lizbon",
    "Setúbal",
    "Évora"
   ],
   "ana_govde_km": 168.4,
   "ana_govde": "Huelva",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1393-01-01",
   "yerlesim": "Mînâb",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 59.0,
   "kova": "veri-eksigi",
   "ada": [
    "Mînâb"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Câsk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1409-01-01",
   "yerlesim": "Mardin",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 58.9,
   "kova": "veri-eksigi",
   "ada": [
    "Mardin"
   ],
   "ana_govde_km": 170.9,
   "ana_govde": "Bitlis",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Mînâb",
   "yeni_sahip": "muzafferi",
   "alan": "s",
   "yil": 57.1,
   "kova": "veri-eksigi",
   "ada": [
    "Mînâb"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Câsk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1868-01-03",
   "yerlesim": "Hirosaki",
   "yeni_sahip": "meiji-japonya",
   "alan": "s",
   "yil": 55.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hakodate",
    "Hirosaki",
    "Matsumae",
    "Morioka"
   ],
   "ana_govde_km": 262.0,
   "ana_govde": "Sendai",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1868-05-14",
   "yerlesim": "Semerkant",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 55.5,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Semerkant"
   ],
   "ana_govde_km": 236.1,
   "ana_govde": "Hucend",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1470-01-01",
   "yerlesim": "Iximché",
   "yeni_sahip": "maya-sehir-devletleri",
   "alan": "s",
   "yil": 54.6,
   "kova": "veri-eksigi",
   "ada": [
    "Iximché",
    "Utatlán (Q'umarkaj)",
    "Zaculeu"
   ],
   "ana_govde_km": 268.7,
   "ana_govde": "Nojpetén (Tayasal / Flores)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1642-02-26",
   "yerlesim": "Azak",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 54.4,
   "kova": "veri-eksigi",
   "ada": [
    "Azak"
   ],
   "ana_govde_km": 297.5,
   "ana_govde": "Taman",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Syzran",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "veri-eksigi",
   "ada": [
    "Samara",
    "Syzran"
   ],
   "ana_govde_km": 231.1,
   "ana_govde": "Penza",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Samara",
   "yeni_sahip": "nogay",
   "alan": "s",
   "yil": 53.8,
   "kova": "veri-eksigi",
   "ada": [
    "Samara",
    "Syzran"
   ],
   "ana_govde_km": 235.0,
   "ana_govde": "Uralsk (Yayık)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Simnân",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 51.9,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 181.8,
   "ana_govde": "Tahran",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Dâmgan",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 51.9,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 271.6,
   "ana_govde": "Tahran",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1753-04-01",
   "yerlesim": "Kanbâyet (Khambhat)",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 50.7,
   "kova": "veri-eksigi",
   "ada": [
    "Ahmedâbâd",
    "Kanbâyet (Khambhat)",
    "Patan (Anhilvâda)",
    "Çampâner"
   ],
   "ana_govde_km": 286.3,
   "ana_govde": "Mandu (Mândû)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1371-01-01",
   "yerlesim": "Kotor (Cattaro)",
   "yeni_sahip": "macaristan",
   "alan": "s",
   "yil": 49.0,
   "kova": "veri-eksigi",
   "ada": [
    "Dubrovnik",
    "Kotor (Cattaro)"
   ],
   "ana_govde_km": 222.4,
   "ana_govde": "Klis",
   "komsu_150km": 11,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1781-01-01",
   "yerlesim": "Anapa",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 48.7,
   "kova": "veri-eksigi",
   "ada": [
    "Anapa"
   ],
   "ana_govde_km": 152.9,
   "ana_govde": "Kefe",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1815-11-05",
   "yerlesim": "Çuha Adası (Kythira)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 48.5,
   "kova": "veri-eksigi",
   "ada": [
    "Çuha Adası (Kythira)"
   ],
   "ana_govde_km": 261.3,
   "ana_govde": "Zaklise (Zakynthos)",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1864-03-31",
   "yerlesim": "Hangzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 47.9,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 259.0,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1480-01-01",
   "yerlesim": "Ludhiyana",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 46.3,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 194.8,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-01-01",
   "yerlesim": "Kayseri",
   "yeni_sahip": "eretna",
   "alan": "s",
   "yil": 46.0,
   "kova": "veri-eksigi",
   "ada": [
    "Kayseri",
    "Kırşehir"
   ],
   "ana_govde_km": 173.9,
   "ana_govde": "Sivas",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1335-01-01",
   "yerlesim": "Kırşehir",
   "yeni_sahip": "eretna",
   "alan": "s",
   "yil": 46.0,
   "kova": "veri-eksigi",
   "ada": [
    "Kayseri",
    "Kırşehir"
   ],
   "ana_govde_km": 170.1,
   "ana_govde": "Çorum",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1340-01-01",
   "yerlesim": "Berde (Karabağ)",
   "yeni_sahip": "celayirli",
   "alan": "s",
   "yil": 46.0,
   "kova": "veri-eksigi",
   "ada": [
    "Berde (Karabağ)"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Ordubad",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-04-02",
   "yerlesim": "Çernigov",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 43.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 285.0,
   "ana_govde": "Bryansk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-04-02",
   "yerlesim": "Novgorod-Seversk",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 43.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 158.3,
   "ana_govde": "Bryansk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-04-02",
   "yerlesim": "Putivl",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 43.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 166.5,
   "ana_govde": "Kursk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1503-04-02",
   "yerlesim": "Hluhiv",
   "yeni_sahip": "moskova",
   "alan": "s",
   "yil": 43.8,
   "kova": "veri-eksigi",
   "ada": [
    "Hluhiv",
    "Novgorod-Seversk",
    "Putivl",
    "Çernigov"
   ],
   "ana_govde_km": 156.9,
   "ana_govde": "Kursk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1689-11-03",
   "yerlesim": "Raygad",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 43.2,
   "kova": "veri-eksigi",
   "ada": [
    "Raygad"
   ],
   "ana_govde_km": 167.7,
   "ana_govde": "Ahmednagar",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1881-01-30",
   "yerlesim": "Nesâ",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.7,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkabad",
    "Ebîverd",
    "Nesâ"
   ],
   "ana_govde_km": 200.3,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1881-01-30",
   "yerlesim": "Aşkabad",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.7,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkabad",
    "Ebîverd",
    "Nesâ"
   ],
   "ana_govde_km": 215.7,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Zeyla",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.8,
   "kova": "veri-eksigi",
   "ada": [
    "Zeyla"
   ],
   "ana_govde_km": 231.5,
   "ana_govde": "Aden",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Lasanod",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Buhodle",
    "Lasanod",
    "Taleh"
   ],
   "ana_govde_km": 151.5,
   "ana_govde": "Ceel Afveyn",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Erigavo",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ceel Afveyn",
    "Erigavo",
    "Hîs",
    "Lâs Hore",
    "Mayd"
   ],
   "ana_govde_km": 199.4,
   "ana_govde": "Taleh",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Lâs Hore",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ceel Afveyn",
    "Erigavo",
    "Hîs",
    "Lâs Hore",
    "Mayd"
   ],
   "ana_govde_km": 224.6,
   "ana_govde": "Taleh",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Mayd",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ceel Afveyn",
    "Erigavo",
    "Hîs",
    "Lâs Hore",
    "Mayd"
   ],
   "ana_govde_km": 236.3,
   "ana_govde": "Berbera",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Hîs",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ceel Afveyn",
    "Erigavo",
    "Hîs",
    "Lâs Hore",
    "Mayd"
   ],
   "ana_govde_km": 212.3,
   "ana_govde": "Berbera",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1884-07-18",
   "yerlesim": "Ceel Afveyn",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.3,
   "kova": "veri-eksigi",
   "ada": [
    "Ceel Afveyn",
    "Erigavo",
    "Hîs",
    "Lâs Hore",
    "Mayd"
   ],
   "ana_govde_km": 151.5,
   "ana_govde": "Lasanod",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1535-07-21",
   "yerlesim": "Halkulvâdî",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 39.1,
   "kova": "veri-eksigi",
   "ada": [
    "Halkulvâdî"
   ],
   "ana_govde_km": 285.7,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 15,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1345-01-01",
   "yerlesim": "Serez",
   "yeni_sahip": "sirbistan",
   "alan": "s",
   "yil": 38.7,
   "kova": "veri-eksigi",
   "ada": [
    "Drama",
    "Nevrokop (Gotse Delçev)",
    "Petriç",
    "Serez"
   ],
   "ana_govde_km": 185.4,
   "ana_govde": "Manastır",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1887-01-06",
   "yerlesim": "Harar",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 36.8,
   "kova": "veri-eksigi",
   "ada": [
    "Cîcîga",
    "Harar"
   ],
   "ana_govde_km": 200.5,
   "ana_govde": "Dagahbûr",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1887-01-06",
   "yerlesim": "Cîcîga",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 36.8,
   "kova": "veri-eksigi",
   "ada": [
    "Cîcîga",
    "Harar"
   ],
   "ana_govde_km": 151.6,
   "ana_govde": "Dagahbûr",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1785-01-01",
   "yerlesim": "Nühûd",
   "yeni_sahip": "darfur",
   "alan": "s",
   "yil": 36.6,
   "kova": "veri-eksigi",
   "ada": [
    "Nühûd"
   ],
   "ana_govde_km": 213.6,
   "ana_govde": "Ümmü Keddâde",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1505-01-01",
   "yerlesim": "Agadir",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 36.0,
   "kova": "veri-eksigi",
   "ada": [
    "Agadir"
   ],
   "ana_govde_km": 210.8,
   "ana_govde": "Safi (Asfi)",
   "komsu_150km": 4,
   "zaten_beyanli": true,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1618-12-11",
   "yerlesim": "Çernigov",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 35.1,
   "kova": "veri-eksigi",
   "ada": [
    "Baturin",
    "Kiev",
    "Novgorod-Seversk",
    "Çernigov"
   ],
   "ana_govde_km": 286.4,
   "ana_govde": "Çehrin (Çigirin)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1618-12-11",
   "yerlesim": "Novgorod-Seversk",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 35.1,
   "kova": "veri-eksigi",
   "ada": [
    "Baturin",
    "Kiev",
    "Novgorod-Seversk",
    "Çernigov"
   ],
   "ana_govde_km": 281.7,
   "ana_govde": "Poltava",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Nihâvend",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 194.6,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Sâve",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "veri-eksigi",
   "ada": [
    "Sâve"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Kâşân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Simnân",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 253.7,
   "ana_govde": "Kâşân",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Burûcird",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Mînâb",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "veri-eksigi",
   "ada": [
    "Mînâb"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Câsk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1468-04-01",
   "yerlesim": "Berde (Karabağ)",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 33.2,
   "kova": "veri-eksigi",
   "ada": [
    "Berde (Karabağ)"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Ordubad",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1417-09-04",
   "yerlesim": "Caen",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 32.8,
   "kova": "veri-eksigi",
   "ada": [
    "Caen"
   ],
   "ana_govde_km": 205.7,
   "ana_govde": "Southampton",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1656-01-01",
   "yerlesim": "Vellor (Vellore)",
   "yeni_sahip": "bicapur",
   "alan": "s",
   "yil": 31.7,
   "kova": "veri-eksigi",
   "ada": [
    "Arkot (Arcot)",
    "Cinci (Gingee)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 166.8,
   "ana_govde": "Bangalor",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1656-01-01",
   "yerlesim": "Arkot (Arcot)",
   "yeni_sahip": "bicapur",
   "alan": "s",
   "yil": 31.7,
   "kova": "veri-eksigi",
   "ada": [
    "Arkot (Arcot)",
    "Cinci (Gingee)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 187.2,
   "ana_govde": "Bangalor",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1490-01-01",
   "yerlesim": "Raycur (Raichur)",
   "yeni_sahip": "bicapur",
   "alan": "s",
   "yil": 30.4,
   "kova": "veri-eksigi",
   "ada": [
    "Raycur (Raichur)"
   ],
   "ana_govde_km": 188.4,
   "ana_govde": "Bîcâpur (Bijapur)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1573-01-01",
   "yerlesim": "Edo (Tokyo)",
   "yeni_sahip": "azuchi-momoyama",
   "alan": "s",
   "yil": 30.2,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 201.8,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1573-01-01",
   "yerlesim": "Kamakura",
   "yeni_sahip": "azuchi-momoyama",
   "alan": "s",
   "yil": 30.2,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 244.3,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1573-01-01",
   "yerlesim": "Odawara",
   "yeni_sahip": "azuchi-momoyama",
   "alan": "s",
   "yil": 30.2,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 217.7,
   "ana_govde": "Gifu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1573-01-01",
   "yerlesim": "Sunpu (Şizuoka)",
   "yeni_sahip": "azuchi-momoyama",
   "alan": "s",
   "yil": 30.2,
   "kova": "veri-eksigi",
   "ada": [
    "Edo (Tokyo)",
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 155.6,
   "ana_govde": "Gifu",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1894-01-01",
   "yerlesim": "Sodo (Vollayta)",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 29.8,
   "kova": "veri-eksigi",
   "ada": [
    "Arba Minç",
    "Cinka",
    "Hosaena",
    "Sodo (Vollayta)"
   ],
   "ana_govde_km": 236.3,
   "ana_govde": "Ambo",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1318-01-01",
   "yerlesim": "Devagiri (Devletâbâd)",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 29.6,
   "kova": "veri-eksigi",
   "ada": [
    "Devagiri (Devletâbâd)",
    "Nâsik"
   ],
   "ana_govde_km": 213.4,
   "ana_govde": "Pûne (Poona)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1318-01-01",
   "yerlesim": "Gülberge (Gulbarga)",
   "yeni_sahip": "delhi-sultanligi",
   "alan": "s",
   "yil": 29.6,
   "kova": "veri-eksigi",
   "ada": [
    "Bîcâpur (Bijapur)",
    "Gülberge (Gulbarga)"
   ],
   "ana_govde_km": 284.1,
   "ana_govde": "Kolhapûr",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1345-01-01",
   "yerlesim": "Petriç",
   "yeni_sahip": "sirbistan",
   "alan": "s",
   "yil": 29.0,
   "kova": "veri-eksigi",
   "ada": [
    "Drama",
    "Nevrokop (Gotse Delçev)",
    "Petriç",
    "Serez"
   ],
   "ana_govde_km": 161.4,
   "ana_govde": "Üsküp",
   "komsu_150km": 13,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1345-01-01",
   "yerlesim": "Nevrokop (Gotse Delçev)",
   "yeni_sahip": "sirbistan",
   "alan": "s",
   "yil": 29.0,
   "kova": "veri-eksigi",
   "ada": [
    "Drama",
    "Nevrokop (Gotse Delçev)",
    "Petriç",
    "Serez"
   ],
   "ana_govde_km": 196.8,
   "ana_govde": "Üsküp",
   "komsu_150km": 16,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1345-01-01",
   "yerlesim": "Drama",
   "yeni_sahip": "sirbistan",
   "alan": "s",
   "yil": 29.0,
   "kova": "veri-eksigi",
   "ada": [
    "Drama",
    "Nevrokop (Gotse Delçev)",
    "Petriç",
    "Serez"
   ],
   "ana_govde_km": 236.0,
   "ana_govde": "Manastır",
   "komsu_150km": 18,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1649-01-01",
   "yerlesim": "Cinci (Gingee)",
   "yeni_sahip": "bicapur",
   "alan": "s",
   "yil": 28.3,
   "kova": "veri-eksigi",
   "ada": [
    "Cinci (Gingee)"
   ],
   "ana_govde_km": 211.4,
   "ana_govde": "Bangalor",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1578-11-01",
   "yerlesim": "Tarki (Tarku)",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 28.2,
   "kova": "veri-eksigi",
   "ada": [
    "Tarki (Tarku)"
   ],
   "ana_govde_km": 200.6,
   "ana_govde": "Zagem (Kaheti)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1711-07-21",
   "yerlesim": "Taganrog",
   "yeni_sahip": "kirim",
   "alan": "s",
   "yil": 28.2,
   "kova": "veri-eksigi",
   "ada": [
    "Taganrog"
   ],
   "ana_govde_km": 159.2,
   "ana_govde": "Camboyluk bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1897-01-01",
   "yerlesim": "Kebrî Dehar",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 26.8,
   "kova": "veri-eksigi",
   "ada": [
    "Gode",
    "Kebrî Dehar",
    "Kelâfo",
    "Verder"
   ],
   "ana_govde_km": 182.2,
   "ana_govde": "Dagahbûr",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1897-01-01",
   "yerlesim": "Gode",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 26.8,
   "kova": "veri-eksigi",
   "ada": [
    "Gode",
    "Kebrî Dehar",
    "Kelâfo",
    "Verder"
   ],
   "ana_govde_km": 163.1,
   "ana_govde": "İmi",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1897-01-01",
   "yerlesim": "Kelâfo",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 26.8,
   "kova": "veri-eksigi",
   "ada": [
    "Gode",
    "Kebrî Dehar",
    "Kelâfo",
    "Verder"
   ],
   "ana_govde_km": 244.4,
   "ana_govde": "İmi",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1538-01-01",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 26.0,
   "kova": "veri-eksigi",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 220.7,
   "ana_govde": "Gaur (Lakhnautî)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Rusayris",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 151.0,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Fâzûğlî",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 224.4,
   "ana_govde": "Er-Renk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Kurmuk",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 192.9,
   "ana_govde": "Er-Renk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1899-01-19",
   "yerlesim": "Ed-Damazîn",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 24.8,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1768-05-15",
   "yerlesim": "Bastia (Korsika)",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 24.4,
   "kova": "veri-eksigi",
   "ada": [
    "Ayacyo (Ajaccio)",
    "Bastia (Korsika)"
   ],
   "ana_govde_km": 289.8,
   "ana_govde": "Toulon",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1902-01-01",
   "yerlesim": "Dire Dava",
   "yeni_sahip": "habesistan",
   "alan": "s",
   "yil": 21.8,
   "kova": "veri-eksigi",
   "ada": [
    "Cîcîga",
    "Dire Dava",
    "Harar"
   ],
   "ana_govde_km": 198.4,
   "ana_govde": "Avaş",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1860-01-01",
   "yerlesim": "Nesâ",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 21.1,
   "kova": "veri-eksigi",
   "ada": [
    "Ebîverd",
    "Nesâ"
   ],
   "ana_govde_km": 200.3,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1860-01-01",
   "yerlesim": "Ebîverd",
   "yeni_sahip": "turkmen",
   "alan": "s",
   "yil": 21.1,
   "kova": "veri-eksigi",
   "ada": [
    "Ebîverd",
    "Nesâ"
   ],
   "ana_govde_km": 197.8,
   "ana_govde": "Merv (Mari)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1386-01-01",
   "yerlesim": "Berde (Karabağ)",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 20.8,
   "kova": "veri-eksigi",
   "ada": [
    "Berde (Karabağ)"
   ],
   "ana_govde_km": 188.8,
   "ana_govde": "Ordubad",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1677-05-01",
   "yerlesim": "Cinci (Gingee)",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 20.7,
   "kova": "veri-eksigi",
   "ada": [
    "Cinci (Gingee)"
   ],
   "ana_govde_km": 165.3,
   "ana_govde": "Tancûr (Thanjavur)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1865-01-01",
   "yerlesim": "Masavva",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 20.1,
   "kova": "veri-eksigi",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 298.1,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1865-01-01",
   "yerlesim": "Dahlak",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 20.1,
   "kova": "veri-eksigi",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 230.7,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1905-06-07",
   "yerlesim": "Oslo",
   "yeni_sahip": "norvec",
   "alan": "s",
   "yil": 18.4,
   "kova": "veri-eksigi",
   "ada": [
    "Hamar",
    "Lillehammer",
    "Oslo",
    "Skien",
    "Tønsberg"
   ],
   "ana_govde_km": 247.4,
   "ana_govde": "Sogndal",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1905-06-07",
   "yerlesim": "Tønsberg",
   "yeni_sahip": "norvec",
   "alan": "s",
   "yil": 18.4,
   "kova": "veri-eksigi",
   "ada": [
    "Hamar",
    "Lillehammer",
    "Oslo",
    "Skien",
    "Tønsberg"
   ],
   "ana_govde_km": 186.9,
   "ana_govde": "Kristiansand",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1797-10-17",
   "yerlesim": "Çuha Adası (Kythira)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 18.0,
   "kova": "veri-eksigi",
   "ada": [
    "Çuha Adası (Kythira)"
   ],
   "ana_govde_km": 261.3,
   "ana_govde": "Zaklise (Zakynthos)",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1797-06-14",
   "yerlesim": "Cenova",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 18.0,
   "kova": "veri-eksigi",
   "ada": [
    "Cenova"
   ],
   "ana_govde_km": 194.5,
   "ana_govde": "Bastia (Korsika)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1385-01-01",
   "yerlesim": "Manastır",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 17.6,
   "kova": "veri-eksigi",
   "ada": [
    "Manastır",
    "Ohri"
   ],
   "ana_govde_km": 161.7,
   "ana_govde": "Petriç",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1385-01-01",
   "yerlesim": "Ohri",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 17.6,
   "kova": "veri-eksigi",
   "ada": [
    "Manastır",
    "Ohri"
   ],
   "ana_govde_km": 203.1,
   "ana_govde": "Petriç",
   "komsu_150km": 11,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Kayseri",
   "yeni_sahip": "burhaneddin",
   "alan": "s",
   "yil": 17.5,
   "kova": "veri-eksigi",
   "ada": [
    "Kayseri",
    "Kırşehir"
   ],
   "ana_govde_km": 173.9,
   "ana_govde": "Sivas",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Kırşehir",
   "yeni_sahip": "burhaneddin",
   "alan": "s",
   "yil": 17.5,
   "kova": "veri-eksigi",
   "ada": [
    "Kayseri",
    "Kırşehir"
   ],
   "ana_govde_km": 170.1,
   "ana_govde": "Çorum",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Nihâvend",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 194.6,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Sâve",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "veri-eksigi",
   "ada": [
    "Sâve"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Kâşân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Simnân",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 253.7,
   "ana_govde": "Kâşân",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Burûcird",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "veri-eksigi",
   "ada": [
    "Burûcird",
    "Nihâvend"
   ],
   "ana_govde_km": 150.5,
   "ana_govde": "Gulpâygân",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Mînâb",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "veri-eksigi",
   "ada": [
    "Mînâb"
   ],
   "ana_govde_km": 180.7,
   "ana_govde": "Câsk",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1462-08-20",
   "yerlesim": "Cebelitarık (Gibraltar)",
   "yeni_sahip": "kastilya",
   "alan": "s",
   "yil": 16.4,
   "kova": "veri-eksigi",
   "ada": [
    "Cebelitarık (Gibraltar)",
    "Cádiz",
    "Huelva"
   ],
   "ana_govde_km": 200.9,
   "ana_govde": "Kurtuba (Córdoba)",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1882-09-07",
   "yerlesim": "Ğubeyş",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 16.4,
   "kova": "veri-eksigi",
   "ada": [
    "Bâbanûsa",
    "Muglad",
    "Ğubeyş"
   ],
   "ana_govde_km": 204.1,
   "ana_govde": "Ebû Zabed",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Erzurum",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 16.0,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkale",
    "Erzurum",
    "Kemah"
   ],
   "ana_govde_km": 204.6,
   "ana_govde": "Erciş",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Aşkale",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 16.0,
   "kova": "veri-eksigi",
   "ada": [
    "Aşkale",
    "Erzurum",
    "Kemah"
   ],
   "ana_govde_km": 249.5,
   "ana_govde": "Erciş",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1519-10-18",
   "yerlesim": "Cholula",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 15.5,
   "kova": "veri-eksigi",
   "ada": [
    "Cholula"
   ],
   "ana_govde_km": 204.4,
   "ana_govde": "Cempoala (Zempoala)",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Lahor",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 258.1,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Câlandhar (Jalandhar)",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 242.0,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Ludhiyana",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 194.8,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1540-05-17",
   "yerlesim": "Siyâlkot",
   "yeni_sahip": "sur-hanedani",
   "alan": "s",
   "yil": 15.2,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-09-01",
   "yerlesim": "Budin",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 15.0,
   "kova": "veri-eksigi",
   "ada": [
    "Budin",
    "Peşte"
   ],
   "ana_govde_km": 169.4,
   "ana_govde": "Mohaç",
   "komsu_150km": 15,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1696-07-19",
   "yerlesim": "Azak",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 15.0,
   "kova": "veri-eksigi",
   "ada": [
    "Azak"
   ],
   "ana_govde_km": 284.7,
   "ana_govde": "Sloboda bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-09-01",
   "yerlesim": "Peşte",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 15.0,
   "kova": "veri-eksigi",
   "ada": [
    "Budin",
    "Peşte"
   ],
   "ana_govde_km": 169.2,
   "ana_govde": "Mohaç",
   "komsu_150km": 15,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1569-08-08",
   "yerlesim": "Ayutthaya",
   "yeni_sahip": "toungoo",
   "alan": "s",
   "yil": 14.7,
   "kova": "veri-eksigi",
   "ada": [
    "Ayutthaya",
    "Lopburi"
   ],
   "ana_govde_km": 276.4,
   "ana_govde": "Phitsanulok",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1569-08-08",
   "yerlesim": "Lopburi",
   "yeni_sahip": "toungoo",
   "alan": "s",
   "yil": 14.7,
   "kova": "veri-eksigi",
   "ada": [
    "Ayutthaya",
    "Lopburi"
   ],
   "ana_govde_km": 227.9,
   "ana_govde": "Phitsanulok",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1909-07-10",
   "yerlesim": "Kedah (Alor Setar)",
   "yeni_sahip": "ingiliz-malaya",
   "alan": "s",
   "yil": 14.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kedah (Alor Setar)",
    "Penang (George Town)",
    "Perak (Kuala Kangsar)"
   ],
   "ana_govde_km": 207.9,
   "ana_govde": "Kelantan (Kota Bharu)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Lahor",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 258.1,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Câlandhar (Jalandhar)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 242.0,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Ludhiyana",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 194.8,
   "ana_govde": "Hisâr-ı Fîrûze",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1526-04-21",
   "yerlesim": "Siyâlkot",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 14.1,
   "kova": "veri-eksigi",
   "ada": [
    "Câlandhar (Jalandhar)",
    "Lahor",
    "Ludhiyana",
    "Sirhind",
    "Siyâlkot"
   ],
   "ana_govde_km": 184.9,
   "ana_govde": "Râvalpindi",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Rusayris",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 151.0,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Fâzûğlî",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 224.4,
   "ana_govde": "Er-Renk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Kurmuk",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 192.9,
   "ana_govde": "Er-Renk",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1885-01-26",
   "yerlesim": "Ed-Damazîn",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 14.0,
   "kova": "veri-eksigi",
   "ada": [
    "Ed-Damazîn",
    "Fâzûğlî",
    "Kurmuk",
    "Rusayris"
   ],
   "ana_govde_km": 157.7,
   "ana_govde": "Sincâ",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1698-09-12",
   "yerlesim": "Taganrog",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 12.9,
   "kova": "veri-eksigi",
   "ada": [
    "Azak",
    "Taganrog"
   ],
   "ana_govde_km": 251.9,
   "ana_govde": "Sloboda bozkırı",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1722-08-23",
   "yerlesim": "Derbend",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 12.5,
   "kova": "veri-eksigi",
   "ada": [
    "Derbend"
   ],
   "ana_govde_km": 236.7,
   "ana_govde": "Terek deltası (Kızlar)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1564-01-01",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "bengal-sultanligi",
   "alan": "s",
   "yil": 12.5,
   "kova": "veri-eksigi",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 220.7,
   "ana_govde": "Gaur (Lakhnautî)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1872-01-01",
   "yerlesim": "Kerene",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 12.4,
   "kova": "veri-eksigi",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Kerene",
    "Masavva"
   ],
   "ana_govde_km": 222.6,
   "ana_govde": "Kesela",
   "komsu_150km": 11,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1523-01-01",
   "yerlesim": "Zaachila",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 12.3,
   "kova": "veri-eksigi",
   "ada": [
    "Mitla",
    "Tututepec (Yucu Dzaa)",
    "Zaachila"
   ],
   "ana_govde_km": 251.9,
   "ana_govde": "Tepeaca",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1912-02-12",
   "yerlesim": "Suzhou",
   "yeni_sahip": "cin-cumhuriyeti",
   "alan": "s",
   "yil": 11.7,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 164.6,
   "ana_govde": "Yangzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1912-02-12",
   "yerlesim": "Hangzhou",
   "yeni_sahip": "cin-cumhuriyeti",
   "alan": "s",
   "yil": 11.7,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 206.3,
   "ana_govde": "Wuhu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1912-02-12",
   "yerlesim": "Shaoxing",
   "yeni_sahip": "cin-cumhuriyeti",
   "alan": "s",
   "yil": 11.7,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 226.7,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1723-07-26",
   "yerlesim": "Bakü",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 11.6,
   "kova": "veri-eksigi",
   "ada": [
    "Bakü"
   ],
   "ana_govde_km": 229.2,
   "ana_govde": "Derbend",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1832-11-22",
   "yerlesim": "Dellîs",
   "yeni_sahip": "abdulkadir",
   "alan": "s",
   "yil": 11.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bû Sa'âde",
    "Dellîs",
    "Mesîle"
   ],
   "ana_govde_km": 236.6,
   "ana_govde": "Tenes",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1832-11-22",
   "yerlesim": "Mesîle",
   "yeni_sahip": "abdulkadir",
   "alan": "s",
   "yil": 11.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bû Sa'âde",
    "Dellîs",
    "Mesîle"
   ],
   "ana_govde_km": 293.3,
   "ana_govde": "Şelif",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1832-11-22",
   "yerlesim": "Bû Sa'âde",
   "yeni_sahip": "abdulkadir",
   "alan": "s",
   "yil": 11.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bû Sa'âde",
    "Dellîs",
    "Mesîle"
   ],
   "ana_govde_km": 259.7,
   "ana_govde": "Tâhert (Tiaret)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1723-09-23",
   "yerlesim": "Lâhîcan",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 10.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bender Enzeli",
    "Lâhîcan"
   ],
   "ana_govde_km": 224.3,
   "ana_govde": "Âmül",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1723-09-23",
   "yerlesim": "Bender Enzeli",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 10.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bender Enzeli",
    "Lâhîcan"
   ],
   "ana_govde_km": 213.0,
   "ana_govde": "Mahmudâbâd",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1420-05-21",
   "yerlesim": "Reims",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 9.2,
   "kova": "veri-eksigi",
   "ada": [
    "Reims",
    "Troyes"
   ],
   "ana_govde_km": 213.4,
   "ana_govde": "Rouen",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1360-10-24",
   "yerlesim": "Limoges",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 9.2,
   "kova": "veri-eksigi",
   "ada": [
    "Limoges"
   ],
   "ana_govde_km": 181.6,
   "ana_govde": "Bordo",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1420-05-21",
   "yerlesim": "Troyes",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 9.1,
   "kova": "veri-eksigi",
   "ada": [
    "Reims",
    "Troyes"
   ],
   "ana_govde_km": 252.1,
   "ana_govde": "Rouen",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1723-09-23",
   "yerlesim": "Mahmudâbâd",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 8.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bakü",
    "Mahmudâbâd",
    "Salyan"
   ],
   "ana_govde_km": 213.0,
   "ana_govde": "Bender Enzeli",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1723-09-23",
   "yerlesim": "Salyan",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 8.3,
   "kova": "veri-eksigi",
   "ada": [
    "Bakü",
    "Mahmudâbâd",
    "Salyan"
   ],
   "ana_govde_km": 239.8,
   "ana_govde": "Bender Enzeli",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1917-03-11",
   "yerlesim": "Erbil",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.6,
   "kova": "veri-eksigi",
   "ada": [
    "Erbil"
   ],
   "ana_govde_km": 156.2,
   "ana_govde": "Tuz Hurmatu",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1423-09-14",
   "yerlesim": "Selanik",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 6.5,
   "kova": "veri-eksigi",
   "ada": [
    "Selanik"
   ],
   "ana_govde_km": 188.2,
   "ana_govde": "Oreoi (İstiaia)",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1917-12-06",
   "yerlesim": "Tornio",
   "yeni_sahip": "finlandiya",
   "alan": "s",
   "yil": 5.9,
   "kova": "veri-eksigi",
   "ada": [
    "Oulu",
    "Rovaniemi",
    "Sodankylä",
    "Tornio"
   ],
   "ana_govde_km": 228.6,
   "ana_govde": "Kokkola",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1402-07-28",
   "yerlesim": "Sivas",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 5.8,
   "kova": "veri-eksigi",
   "ada": [
    "Sivas"
   ],
   "ana_govde_km": 173.9,
   "ana_govde": "Kayseri",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Ösek (Osijek)",
   "yeni_sahip": "yugoslavya",
   "alan": "s",
   "yil": 5.0,
   "kova": "veri-eksigi",
   "ada": [
    "Baç (Bács)",
    "Varadin (Petrovaradin)",
    "Ösek (Osijek)"
   ],
   "ana_govde_km": 180.8,
   "ana_govde": "Sisak",
   "komsu_150km": 13,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Varadin (Petrovaradin)",
   "yeni_sahip": "yugoslavya",
   "alan": "s",
   "yil": 5.0,
   "kova": "veri-eksigi",
   "ada": [
    "Baç (Bács)",
    "Varadin (Petrovaradin)",
    "Ösek (Osijek)"
   ],
   "ana_govde_km": 273.3,
   "ana_govde": "Sisak",
   "komsu_150km": 11,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1918-11-11",
   "yerlesim": "Baç (Bács)",
   "yeni_sahip": "yugoslavya",
   "alan": "s",
   "yil": 5.0,
   "kova": "veri-eksigi",
   "ada": [
    "Baç (Bács)",
    "Varadin (Petrovaradin)",
    "Ösek (Osijek)"
   ],
   "ana_govde_km": 225.0,
   "ana_govde": "Sisak",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1569-01-01",
   "yerlesim": "Tunus",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 4.8,
   "kova": "veri-eksigi",
   "ada": [
    "Tunus"
   ],
   "ana_govde_km": 207.2,
   "ana_govde": "Sûk Ahrâs",
   "komsu_150km": 16,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1770-09-27",
   "yerlesim": "Bender",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.8,
   "kova": "veri-eksigi",
   "ada": [
    "Bender"
   ],
   "ana_govde_km": 291.4,
   "ana_govde": "Hotin",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1576-07-12",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 3.5,
   "kova": "veri-eksigi",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 220.7,
   "ana_govde": "Gaur (Lakhnautî)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1860-06-02",
   "yerlesim": "Suzhou",
   "yeni_sahip": "taiping",
   "alan": "s",
   "yil": 3.5,
   "kova": "veri-eksigi",
   "ada": [
    "Suzhou"
   ],
   "ana_govde_km": 164.6,
   "ana_govde": "Yangzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Kamakura",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 244.3,
   "ana_govde": "Aizu-Wakamatsu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Odawara",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 217.7,
   "ana_govde": "Gifu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Sunpu (Şizuoka)",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "veri-eksigi",
   "ada": [
    "Kamakura",
    "Odawara",
    "Sunpu (Şizuoka)"
   ],
   "ana_govde_km": 155.6,
   "ana_govde": "Gifu",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Funai (Ōita)",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "veri-eksigi",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 264.7,
   "ana_govde": "Okayama",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1920-09-02",
   "yerlesim": "Şehrisebz (Kiş)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.2,
   "kova": "veri-eksigi",
   "ada": [
    "Cizzah",
    "Karşi (Nahşeb)",
    "Semerkant",
    "Şehrisebz (Kiş)"
   ],
   "ana_govde_km": 160.4,
   "ana_govde": "Hisar",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1555-04-17",
   "yerlesim": "Siena",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 2.2,
   "kova": "veri-eksigi",
   "ada": [
    "Siena"
   ],
   "ana_govde_km": 292.9,
   "ana_govde": "Milano",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1644-04-25",
   "yerlesim": "Shaoxing",
   "yeni_sahip": "guney-ming",
   "alan": "s",
   "yil": 2.2,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 226.7,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1656-08-21",
   "yerlesim": "Limni",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 1.2,
   "kova": "veri-eksigi",
   "ada": [
    "Bozcaada",
    "Limni",
    "Semadirek"
   ],
   "ana_govde_km": 256.4,
   "ana_govde": "İstendil (Tinos)",
   "komsu_150km": 27,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1644-04-25",
   "yerlesim": "Hangzhou",
   "yeni_sahip": "guney-ming",
   "alan": "s",
   "yil": 1.2,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 206.3,
   "ana_govde": "Wuhu",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1656-07-13",
   "yerlesim": "Bozcaada",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 1.1,
   "kova": "veri-eksigi",
   "ada": [
    "Bozcaada",
    "Semadirek"
   ],
   "ana_govde_km": 262.8,
   "ana_govde": "İstendil (Tinos)",
   "komsu_150km": 27,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1790-12-22",
   "yerlesim": "İsmail",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 1.1,
   "kova": "veri-eksigi",
   "ada": [
    "İsmail"
   ],
   "ana_govde_km": 252.5,
   "ana_govde": "Özi",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1644-04-25",
   "yerlesim": "Suzhou",
   "yeni_sahip": "guney-ming",
   "alan": "s",
   "yil": 1.1,
   "kova": "veri-eksigi",
   "ada": [
    "Hangzhou",
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 164.6,
   "ana_govde": "Yangzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1308-01-01",
   "yerlesim": "Bartın",
   "yeni_sahip": "ilhanli",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bartın",
    "Eflani",
    "Safranbolu"
   ],
   "ana_govde_km": 218.1,
   "ana_govde": "Osmancık",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1308-01-01",
   "yerlesim": "Safranbolu",
   "yeni_sahip": "ilhanli",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bartın",
    "Eflani",
    "Safranbolu"
   ],
   "ana_govde_km": 179.0,
   "ana_govde": "Osmancık",
   "komsu_150km": 12,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1689-09-24",
   "yerlesim": "Niş",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Niş",
    "Vidin",
    "Şehirköy (Pirot)"
   ],
   "ana_govde_km": 168.0,
   "ana_govde": "Semendire",
   "komsu_150km": 10,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1689-09-24",
   "yerlesim": "Vidin",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Niş",
    "Vidin",
    "Şehirköy (Pirot)"
   ],
   "ana_govde_km": 171.6,
   "ana_govde": "Semendire",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1308-01-01",
   "yerlesim": "Eflani",
   "yeni_sahip": "ilhanli",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Bartın",
    "Eflani",
    "Safranbolu"
   ],
   "ana_govde_km": 162.2,
   "ana_govde": "Osmancık",
   "komsu_150km": 9,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1689-09-24",
   "yerlesim": "Şehirköy (Pirot)",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 1.0,
   "kova": "veri-eksigi",
   "ada": [
    "Niş",
    "Vidin",
    "Şehirköy (Pirot)"
   ],
   "ana_govde_km": 214.0,
   "ana_govde": "Semendire",
   "komsu_150km": 8,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1534-07-13",
   "yerlesim": "Tebriz",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 0.9,
   "kova": "veri-eksigi",
   "ada": [
    "Tebriz"
   ],
   "ana_govde_km": 225.9,
   "ana_govde": "Rewândiz",
   "komsu_150km": 13,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1573-10-10",
   "yerlesim": "Tunus",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 0.9,
   "kova": "veri-eksigi",
   "ada": [
    "Halkulvâdî",
    "Tunus"
   ],
   "ana_govde_km": 284.7,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 16,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1534-09-22",
   "yerlesim": "Tunus",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 0.8,
   "kova": "veri-eksigi",
   "ada": [
    "Tunus"
   ],
   "ana_govde_km": 207.2,
   "ana_govde": "Sûk Ahrâs",
   "komsu_150km": 16,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1694-09-21",
   "yerlesim": "Sakız",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 0.4,
   "kova": "veri-eksigi",
   "ada": [
    "Sakız",
    "İstendil (Tinos)"
   ],
   "ana_govde_km": 256.6,
   "ana_govde": "Methana",
   "komsu_150km": 24,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1548-07-27",
   "yerlesim": "Tebriz",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 0.1,
   "kova": "veri-eksigi",
   "ada": [
    "Tebriz"
   ],
   "ana_govde_km": 225.9,
   "ana_govde": "Rewândiz",
   "komsu_150km": 13,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  },
  {
   "gun": "1514-09-06",
   "yerlesim": "Tebriz",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 0.0,
   "kova": "veri-eksigi",
   "ada": [
    "Tebriz"
   ],
   "ana_govde_km": 251.5,
   "ana_govde": "Doğubayazıt",
   "komsu_150km": 13,
   "zaten_beyanli": false,
   "oneri": {
    "incele": "aradaki yerlesimlerin o tarihteki donemi KAYITTA var mi — yoksa donem yazilmali"
   }
  }
 ],
 "bilinmiyor": [
  {
   "gun": "1352-01-01",
   "yerlesim": "Mersin",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 566.8,
   "kova": "bilinmiyor",
   "ada": [
    "Mersin"
   ],
   "ana_govde_km": 487.6,
   "ana_govde": "Karacahisar",
   "komsu_150km": 12,
   "zaten_beyanli": false
  },
  {
   "gun": "1448-01-01",
   "yerlesim": "Visoko",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 460.8,
   "kova": "bilinmiyor",
   "ada": [
    "Saraybosna",
    "Visoko"
   ],
   "ana_govde_km": 308.1,
   "ana_govde": "Niş",
   "komsu_150km": 20,
   "zaten_beyanli": false
  },
  {
   "gun": "1348-06-09",
   "yerlesim": "Avignon",
   "yeni_sahip": "papalik",
   "alan": "s",
   "yil": 443.3,
   "kova": "bilinmiyor",
   "ada": [
    "Avignon"
   ],
   "ana_govde_km": 524.3,
   "ana_govde": "Bolonya",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1515-01-01",
   "yerlesim": "Nusaybin",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 403.8,
   "kova": "bilinmiyor",
   "ada": [
    "Malikiye (Derik)",
    "Nusaybin",
    "Silopi"
   ],
   "ana_govde_km": 333.0,
   "ana_govde": "Erzincan",
   "komsu_150km": 8,
   "zaten_beyanli": false
  },
  {
   "gun": "1515-01-01",
   "yerlesim": "Malikiye (Derik)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 403.8,
   "kova": "bilinmiyor",
   "ada": [
    "Malikiye (Derik)",
    "Nusaybin",
    "Silopi"
   ],
   "ana_govde_km": 313.3,
   "ana_govde": "Doğubayazıt",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1426-01-01",
   "yerlesim": "Brescia",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 371.4,
   "kova": "bilinmiyor",
   "ada": [
    "Brescia",
    "Padova",
    "Udine",
    "Venedik",
    "Verona"
   ],
   "ana_govde_km": 335.4,
   "ana_govde": "Cres (Cherso)",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1438-01-01",
   "yerlesim": "Songkhla",
   "yeni_sahip": "ayutthaya",
   "alan": "s",
   "yil": 329.3,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 396.8,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1438-01-01",
   "yerlesim": "Trang",
   "yeni_sahip": "ayutthaya",
   "alan": "s",
   "yil": 329.3,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 329.2,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1557-01-01",
   "yerlesim": "Arkîko",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 328.1,
   "kova": "bilinmiyor",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 303.4,
   "ana_govde": "Ferasan (Farasan)",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1529-01-01",
   "yerlesim": "Antequera (Oaxaca)",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 292.7,
   "kova": "bilinmiyor",
   "ada": [
    "Antequera (Oaxaca)"
   ],
   "ana_govde_km": 436.6,
   "ana_govde": "San Cristóbal de las Casas (Ciudad Real)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Braga",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "bilinmiyor",
   "ada": [
    "Aveiro",
    "Braga",
    "Bragança",
    "Coimbra",
    "Porto"
   ],
   "ana_govde_km": 319.7,
   "ana_govde": "Lizbon",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1640-12-01",
   "yerlesim": "Bragança",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 282.9,
   "kova": "bilinmiyor",
   "ada": [
    "Aveiro",
    "Braga",
    "Bragança",
    "Coimbra",
    "Porto"
   ],
   "ana_govde_km": 372.7,
   "ana_govde": "Évora",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1542-01-06",
   "yerlesim": "Mérida",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 279.7,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Maní",
    "Mérida"
   ],
   "ana_govde_km": 339.7,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1543-01-01",
   "yerlesim": "Antigua Guatemala (Santiago de los Caballeros)",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 278.7,
   "kova": "bilinmiyor",
   "ada": [
    "Antigua Guatemala (Santiago de los Caballeros)"
   ],
   "ana_govde_km": 316.9,
   "ana_govde": "San Cristóbal de las Casas (Ciudad Real)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1545-01-01",
   "yerlesim": "Sotuta",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 276.7,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 335.0,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1547-01-01",
   "yerlesim": "Chichén Itzá",
   "yeni_sahip": "yeni-ispanya",
   "alan": "s",
   "yil": 274.7,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Chichén Itzá",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 373.6,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1667-11-18",
   "yerlesim": "Makassar",
   "yeni_sahip": "hollanda-dogu-hint",
   "alan": "s",
   "yil": 255.9,
   "kova": "bilinmiyor",
   "ada": [
    "Bantaeng",
    "Makassar"
   ],
   "ana_govde_km": 663.3,
   "ana_govde": "Alor",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1514-01-01",
   "yerlesim": "Mazagan (El Jadida)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 255.0,
   "kova": "bilinmiyor",
   "ada": [
    "Azemmûr",
    "Mazagan (El Jadida)",
    "Safi (Asfi)"
   ],
   "ana_govde_km": 330.9,
   "ana_govde": "Agadir",
   "komsu_150km": 3,
   "zaten_beyanli": true
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Hakata (Fukuoka)",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "bilinmiyor",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 344.7,
   "ana_govde": "Okayama",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1336-11-07",
   "yerlesim": "Kumamoto",
   "yeni_sahip": "muromachi",
   "alan": "s",
   "yil": 236.1,
   "kova": "bilinmiyor",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 361.3,
   "ana_govde": "Okayama",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1503-01-01",
   "yerlesim": "Bistâm",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 233.2,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 337.0,
   "ana_govde": "Tahran",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1521-01-01",
   "yerlesim": "Çaul (Chaul)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 219.0,
   "kova": "bilinmiyor",
   "ada": [
    "Çaul (Chaul)"
   ],
   "ana_govde_km": 355.9,
   "ana_govde": "Goa",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1622-05-01",
   "yerlesim": "Ras el-Hayme (Cülfâr)",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 197.7,
   "kova": "bilinmiyor",
   "ada": [
    "Buraymî",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 356.2,
   "ana_govde": "Nizva",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1622-05-01",
   "yerlesim": "Şârika",
   "yeni_sahip": "umman",
   "alan": "s",
   "yil": 197.7,
   "kova": "bilinmiyor",
   "ada": [
    "Buraymî",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 346.2,
   "ana_govde": "Nizva",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1544-01-01",
   "yerlesim": "Tabarka",
   "yeni_sahip": "ceneviz",
   "alan": "s",
   "yil": 197.4,
   "kova": "bilinmiyor",
   "ada": [
    "Tabarka"
   ],
   "ana_govde_km": 553.6,
   "ana_govde": "Ayacyo (Ajaccio)",
   "komsu_150km": 15,
   "zaten_beyanli": false
  },
  {
   "gun": "1535-11-01",
   "yerlesim": "Milano",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 178.3,
   "kova": "bilinmiyor",
   "ada": [
    "Milano"
   ],
   "ana_govde_km": 312.9,
   "ana_govde": "Besançon",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Esterâbâd (Gürgân)",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 175.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 301.3,
   "ana_govde": "Tahran",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1760-01-01",
   "yerlesim": "Vellor (Vellore)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 163.8,
   "kova": "bilinmiyor",
   "ada": [
    "Madras (Chennai)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 422.8,
   "ana_govde": "Masulipatnam",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1761-04-05",
   "yerlesim": "Cinci (Gingee)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 162.6,
   "kova": "bilinmiyor",
   "ada": [
    "Cinci (Gingee)",
    "Madras (Chennai)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 476.0,
   "ana_govde": "Masulipatnam",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1600-08-28",
   "yerlesim": "Ahmednagar",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 158.3,
   "kova": "bilinmiyor",
   "ada": [
    "Ahmednagar"
   ],
   "ana_govde_km": 305.4,
   "ana_govde": "Sûrat",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1772-08-05",
   "yerlesim": "Vitebsk",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 151.2,
   "kova": "bilinmiyor",
   "ada": [
    "Daugavpils (Dünaburg)",
    "Polotsk",
    "Smolensk",
    "Velikiye Luki",
    "Vitebsk"
   ],
   "ana_govde_km": 313.3,
   "ana_govde": "Pskov",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1772-11-18",
   "yerlesim": "Broaç (Bharuch)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 150.9,
   "kova": "bilinmiyor",
   "ada": [
    "Broaç (Bharuch)",
    "Sûrat"
   ],
   "ana_govde_km": 308.9,
   "ana_govde": "Bombay",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1714-03-07",
   "yerlesim": "Milano",
   "yeni_sahip": "avusturya",
   "alan": "s",
   "yil": 145.2,
   "kova": "bilinmiyor",
   "ada": [
    "Mantova",
    "Milano"
   ],
   "ana_govde_km": 357.1,
   "ana_govde": "Trieste",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1782-04-06",
   "yerlesim": "Songkhla",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 141.6,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 396.8,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1782-04-06",
   "yerlesim": "Trang",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 141.6,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 329.2,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1784-01-01",
   "yerlesim": "Gvalyar (Gwalior)",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 139.8,
   "kova": "bilinmiyor",
   "ada": [
    "Agra",
    "Gvalyar (Gwalior)",
    "Koil (Aligarh)",
    "Mathura"
   ],
   "ana_govde_km": 354.1,
   "ana_govde": "Ecmîr (Ajmer)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1790-12-15",
   "yerlesim": "Kannûr (Cannanore)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 132.9,
   "kova": "bilinmiyor",
   "ada": [
    "Kannûr (Cannanore)"
   ],
   "ana_govde_km": 426.4,
   "ana_govde": "Vellor (Vellore)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1793-01-23",
   "yerlesim": "Kamaniçe",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 130.8,
   "kova": "bilinmiyor",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Meciboj (Mejibuji)"
   ],
   "ana_govde_km": 342.4,
   "ana_govde": "Yedisan bozkırı",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1534-12-23",
   "yerlesim": "Bombay",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 130.2,
   "kova": "bilinmiyor",
   "ada": [
    "Bombay",
    "Çaul (Chaul)"
   ],
   "ana_govde_km": 399.4,
   "ana_govde": "Goa",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1428-01-03",
   "yerlesim": "Huế (Phú Xuân)",
   "yeni_sahip": "le-hanedani",
   "alan": "s",
   "yil": 130.0,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Quang Tri"
   ],
   "ana_govde_km": 317.1,
   "ana_govde": "Vinh",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1658-01-01",
   "yerlesim": "Nagapatnam",
   "yeni_sahip": "hollanda",
   "alan": "s",
   "yil": 123.9,
   "kova": "bilinmiyor",
   "ada": [
    "Nagapatnam"
   ],
   "ana_govde_km": 426.9,
   "ana_govde": "Kolombo",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1379-01-01",
   "yerlesim": "Hîve",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 123.0,
   "kova": "bilinmiyor",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 386.6,
   "ana_govde": "Buhara",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1801-11-10",
   "yerlesim": "Etâve (Etawah)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 122.0,
   "kova": "bilinmiyor",
   "ada": [
    "Etâve (Etawah)",
    "Kannauc",
    "Kanpûr"
   ],
   "ana_govde_km": 319.6,
   "ana_govde": "Ilâhâbâd (Allahabad)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1550-01-01",
   "yerlesim": "Lahsa",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 120.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 522.4,
   "ana_govde": "Fâv",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1550-01-01",
   "yerlesim": "Katîf",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 120.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 408.1,
   "ana_govde": "Fâv",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1550-01-01",
   "yerlesim": "Ukayr (Uceyr)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 120.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 510.6,
   "ana_govde": "Fâv",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1398-01-01",
   "yerlesim": "Gvalyar (Gwalior)",
   "yeni_sahip": "racput",
   "alan": "s",
   "yil": 120.0,
   "kova": "bilinmiyor",
   "ada": [
    "Gvalyar (Gwalior)"
   ],
   "ana_govde_km": 354.1,
   "ana_govde": "Ecmîr (Ajmer)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1803-12-30",
   "yerlesim": "Kanbâyet (Khambhat)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 119.8,
   "kova": "bilinmiyor",
   "ada": [
    "Broaç (Bharuch)",
    "Kanbâyet (Khambhat)",
    "Sûrat"
   ],
   "ana_govde_km": 375.9,
   "ana_govde": "Bombay",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1795-01-01",
   "yerlesim": "Pursat",
   "yeni_sahip": "siyam-chakri",
   "alan": "s",
   "yil": 112.2,
   "kova": "bilinmiyor",
   "ada": [
    "Angkor (Siem Reap)",
    "Battambang",
    "Chanthaburi",
    "Pursat",
    "Sisophon"
   ],
   "ana_govde_km": 335.0,
   "ana_govde": "Nakhon Ratchasima",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1705-01-01",
   "yerlesim": "Semarang",
   "yeni_sahip": "hollanda-dogu-hint",
   "alan": "s",
   "yil": 106.6,
   "kova": "bilinmiyor",
   "ada": [
    "Semarang"
   ],
   "ana_govde_km": 406.2,
   "ana_govde": "Batavia (Cakarta)",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1554-01-01",
   "yerlesim": "Nagapatnam",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 104.0,
   "kova": "bilinmiyor",
   "ada": [
    "Nagapatnam"
   ],
   "ana_govde_km": 403.2,
   "ana_govde": "Koçin (Kochi)",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Chichén Itzá",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Chichén Itzá",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 373.6,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Sotuta",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Chichén Itzá",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 335.0,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1821-09-27",
   "yerlesim": "Mérida",
   "yeni_sahip": "meksika",
   "alan": "s",
   "yil": 102.1,
   "kova": "bilinmiyor",
   "ada": [
    "Campeche (San Francisco de Campeche)",
    "Chichén Itzá",
    "Maní",
    "Mérida",
    "Sotuta"
   ],
   "ana_govde_km": 339.7,
   "ana_govde": "Acalán (Itzamkanac)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1306-01-01",
   "yerlesim": "Huế (Phú Xuân)",
   "yeni_sahip": "tran-hanedani",
   "alan": "s",
   "yil": 94.2,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Quang Tri"
   ],
   "ana_govde_km": 317.1,
   "ana_govde": "Vinh",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1699-01-26",
   "yerlesim": "Kamaniçe",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 94.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Lvov",
    "Meciboj (Mejibuji)",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 447.4,
   "ana_govde": "Çehrin (Çigirin)",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1699-01-26",
   "yerlesim": "Bar (Podolya)",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 94.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Lvov",
    "Meciboj (Mejibuji)",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 320.7,
   "ana_govde": "Çehrin (Çigirin)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1699-01-26",
   "yerlesim": "Meciboj (Mejibuji)",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 94.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Lvov",
    "Meciboj (Mejibuji)",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 382.8,
   "ana_govde": "Çehrin (Çigirin)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Cezayir",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Blida",
    "Cezayir",
    "Medea (Titteri)",
    "Miliana",
    "Şerşel (Cherchell)"
   ],
   "ana_govde_km": 445.8,
   "ana_govde": "Tilimsan",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Tilimsan",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Tilimsan"
   ],
   "ana_govde_km": 357.4,
   "ana_govde": "Miliana",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Şerşel (Cherchell)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Blida",
    "Cezayir",
    "Medea (Titteri)",
    "Miliana",
    "Şerşel (Cherchell)"
   ],
   "ana_govde_km": 369.7,
   "ana_govde": "Tilimsan",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Medea (Titteri)",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Blida",
    "Cezayir",
    "Medea (Titteri)",
    "Miliana",
    "Şerşel (Cherchell)"
   ],
   "ana_govde_km": 398.8,
   "ana_govde": "Tilimsan",
   "komsu_150km": 8,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Blida",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Blida",
    "Cezayir",
    "Medea (Titteri)",
    "Miliana",
    "Şerşel (Cherchell)"
   ],
   "ana_govde_km": 413.8,
   "ana_govde": "Tilimsan",
   "komsu_150km": 8,
   "zaten_beyanli": false
  },
  {
   "gun": "1830-07-05",
   "yerlesim": "Miliana",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 93.3,
   "kova": "bilinmiyor",
   "ada": [
    "Blida",
    "Cezayir",
    "Medea (Titteri)",
    "Miliana",
    "Şerşel (Cherchell)"
   ],
   "ana_govde_km": 357.4,
   "ana_govde": "Tilimsan",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1381-01-01",
   "yerlesim": "Karahisâr-ı Şarkî (Şebinkarahisar)",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 92.6,
   "kova": "bilinmiyor",
   "ada": [
    "Aşkale",
    "Erzurum",
    "Karahisâr-ı Şarkî (Şebinkarahisar)",
    "Kemah"
   ],
   "ana_govde_km": 307.2,
   "ana_govde": "Diyarbakır",
   "komsu_150km": 12,
   "zaten_beyanli": false
  },
  {
   "gun": "1832-03-01",
   "yerlesim": "Annaba",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 91.7,
   "kova": "bilinmiyor",
   "ada": [
    "Annaba"
   ],
   "ana_govde_km": 419.2,
   "ana_govde": "Cezayir",
   "komsu_150km": 12,
   "zaten_beyanli": false
  },
  {
   "gun": "1716-01-01",
   "yerlesim": "Kuveyt",
   "yeni_sahip": "benihalid",
   "alan": "s",
   "yil": 79.2,
   "kova": "bilinmiyor",
   "ada": [
    "Kuveyt"
   ],
   "ana_govde_km": 310.6,
   "ana_govde": "Cübeyl",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Telafer",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 75.1,
   "kova": "bilinmiyor",
   "ada": [
    "Telafer"
   ],
   "ana_govde_km": 350.8,
   "ana_govde": "Kasr-ı Şîrîn",
   "komsu_150km": 9,
   "zaten_beyanli": false
  },
  {
   "gun": "1699-01-26",
   "yerlesim": "Yazlofça (Yazlovets)",
   "yeni_sahip": "lehistan",
   "alan": "s",
   "yil": 73.5,
   "kova": "bilinmiyor",
   "ada": [
    "Bar (Podolya)",
    "Kamaniçe",
    "Lvov",
    "Meciboj (Mejibuji)",
    "Yazlofça (Yazlovets)"
   ],
   "ana_govde_km": 415.2,
   "ana_govde": "Krakov",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-01-01",
   "yerlesim": "Zebîd",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 69.8,
   "kova": "bilinmiyor",
   "ada": [
    "Hudeyde",
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 316.2,
   "ana_govde": "Zeyla",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1849-01-01",
   "yerlesim": "Hudeyde",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 69.8,
   "kova": "bilinmiyor",
   "ada": [
    "Hudeyde",
    "Moha",
    "Zebîd"
   ],
   "ana_govde_km": 318.0,
   "ana_govde": "Dahlak",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1657-03-29",
   "yerlesim": "Bîdar",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 67.5,
   "kova": "bilinmiyor",
   "ada": [
    "Bîdar"
   ],
   "ana_govde_km": 316.4,
   "ana_govde": "Evrengâbâd",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1753-04-01",
   "yerlesim": "Ahmedâbâd",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 64.8,
   "kova": "bilinmiyor",
   "ada": [
    "Ahmedâbâd",
    "Kanbâyet (Khambhat)",
    "Patan (Anhilvâda)",
    "Çampâner"
   ],
   "ana_govde_km": 300.4,
   "ana_govde": "Mandu (Mândû)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1861-05-31",
   "yerlesim": "Manama (Bahreyn)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 62.4,
   "kova": "bilinmiyor",
   "ada": [
    "Manama (Bahreyn)"
   ],
   "ana_govde_km": 430.8,
   "ana_govde": "Abu Dabi",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1340-01-01",
   "yerlesim": "Kemah",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 61.1,
   "kova": "bilinmiyor",
   "ada": [
    "Kemah"
   ],
   "ana_govde_km": 318.9,
   "ana_govde": "Ceylanpınar",
   "komsu_150km": 9,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Astrahan",
   "yeni_sahip": "astarhan",
   "alan": "s",
   "yil": 53.8,
   "kova": "bilinmiyor",
   "ada": [
    "Astrahan",
    "Saray (Selitrennoye)"
   ],
   "ana_govde_km": 327.5,
   "ana_govde": "Yeni Saray (Tsarev)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-03-01",
   "yerlesim": "Petrovsk (Saratov)",
   "yeni_sahip": "astarhan",
   "alan": "s",
   "yil": 53.8,
   "kova": "bilinmiyor",
   "ada": [
    "Petrovsk (Saratov)",
    "Ukek (Uvek)"
   ],
   "ana_govde_km": 369.3,
   "ana_govde": "Beldjamen",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1488-01-01",
   "yerlesim": "Safi (Asfi)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 53.0,
   "kova": "bilinmiyor",
   "ada": [
    "Safi (Asfi)"
   ],
   "ana_govde_km": 459.6,
   "ana_govde": "Arzila (Asilah)",
   "komsu_150km": 4,
   "zaten_beyanli": true
  },
  {
   "gun": "1698-01-08",
   "yerlesim": "Cinci (Gingee)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 52.7,
   "kova": "bilinmiyor",
   "ada": [
    "Arkot (Arcot)",
    "Cinci (Gingee)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 423.8,
   "ana_govde": "Kurnûl (Kurnool)",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Bistâm",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 51.9,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Esterâbâd (Gürgân)",
    "Simnân"
   ],
   "ana_govde_km": 337.0,
   "ana_govde": "Tahran",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Meşkinşehr (Hiyav)",
   "yeni_sahip": "celayirli",
   "alan": "s",
   "yil": 50.1,
   "kova": "bilinmiyor",
   "ada": [
    "Meşkinşehr (Hiyav)"
   ],
   "ana_govde_km": 341.8,
   "ana_govde": "Rewândiz",
   "komsu_150km": 8,
   "zaten_beyanli": false
  },
  {
   "gun": "1863-12-04",
   "yerlesim": "Suzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 48.2,
   "kova": "bilinmiyor",
   "ada": [
    "Ningbo",
    "Shaoxing",
    "Suzhou",
    "Şanghay"
   ],
   "ana_govde_km": 323.4,
   "ana_govde": "Hefei",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-01-01",
   "yerlesim": "Bicâye",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 45.7,
   "kova": "bilinmiyor",
   "ada": [
    "Bicâye"
   ],
   "ana_govde_km": 355.9,
   "ana_govde": "Menorka (Mahon)",
   "komsu_150km": 10,
   "zaten_beyanli": true
  },
  {
   "gun": "1335-12-01",
   "yerlesim": "Meşhed",
   "yeni_sahip": "iran",
   "alan": "s",
   "yil": 45.3,
   "kova": "bilinmiyor",
   "ada": [
    "Meşhed"
   ],
   "ana_govde_km": 320.6,
   "ana_govde": "Herat",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1520-05-19",
   "yerlesim": "Raycur (Raichur)",
   "yeni_sahip": "vijayanagara",
   "alan": "s",
   "yil": 44.7,
   "kova": "bilinmiyor",
   "ada": [
    "Kurnûl (Kurnool)",
    "Raycur (Raichur)",
    "Vijayanagara (Hampi)"
   ],
   "ana_govde_km": 412.9,
   "ana_govde": "Vellor (Vellore)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1761-01-14",
   "yerlesim": "Agra",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 42.8,
   "kova": "bilinmiyor",
   "ada": [
    "Agra"
   ],
   "ana_govde_km": 344.0,
   "ana_govde": "Ecmîr (Ajmer)",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1881-01-30",
   "yerlesim": "Ebîverd",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 42.7,
   "kova": "bilinmiyor",
   "ada": [
    "Aşkabad",
    "Ebîverd",
    "Nesâ"
   ],
   "ana_govde_km": 314.3,
   "ana_govde": "Kızılarvat",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-04-20",
   "yerlesim": "Lahsa",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 42.2,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 471.6,
   "ana_govde": "Kuveyt",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-04-20",
   "yerlesim": "Katîf",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 42.2,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 370.4,
   "ana_govde": "Kuveyt",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1871-04-20",
   "yerlesim": "Ukayr (Uceyr)",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 42.2,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 469.3,
   "ana_govde": "Kuveyt",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-02-05",
   "yerlesim": "Masavva",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 38.7,
   "kova": "bilinmiyor",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 455.3,
   "ana_govde": "Aseb",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-02-05",
   "yerlesim": "Dahlak",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 38.7,
   "kova": "bilinmiyor",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 409.0,
   "ana_govde": "Aseb",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1885-02-05",
   "yerlesim": "Arkîko",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 38.7,
   "kova": "bilinmiyor",
   "ada": [
    "Arkîko",
    "Dahlak",
    "Masavva"
   ],
   "ana_govde_km": 452.8,
   "ana_govde": "Aseb",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Dâmgan",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 359.1,
   "ana_govde": "Erdistan",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1469-01-01",
   "yerlesim": "Bistâm",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 34.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 420.9,
   "ana_govde": "Erdistan",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1770-01-01",
   "yerlesim": "Mathura",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 33.8,
   "kova": "bilinmiyor",
   "ada": [
    "Agra",
    "Mathura"
   ],
   "ana_govde_km": 322.2,
   "ana_govde": "Ecmîr (Ajmer)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1348-01-01",
   "yerlesim": "Erzincan",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 31.0,
   "kova": "bilinmiyor",
   "ada": [
    "Aşkale",
    "Erzincan",
    "Erzurum",
    "Kelkit",
    "Kemah"
   ],
   "ana_govde_km": 326.6,
   "ana_govde": "Ceylanpınar",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1348-01-01",
   "yerlesim": "Kelkit",
   "yeni_sahip": "akkoyunlu",
   "alan": "s",
   "yil": 31.0,
   "kova": "bilinmiyor",
   "ada": [
    "Aşkale",
    "Erzincan",
    "Erzurum",
    "Kelkit",
    "Kemah"
   ],
   "ana_govde_km": 338.2,
   "ana_govde": "Digor",
   "komsu_150km": 10,
   "zaten_beyanli": false
  },
  {
   "gun": "1513-01-01",
   "yerlesim": "Azemmûr",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 28.0,
   "kova": "bilinmiyor",
   "ada": [
    "Azemmûr",
    "Safi (Asfi)"
   ],
   "ana_govde_km": 321.5,
   "ana_govde": "Arzila (Asilah)",
   "komsu_150km": 3,
   "zaten_beyanli": true
  },
  {
   "gun": "1646-10-06",
   "yerlesim": "Zeytun (Quanzhou)",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 27.4,
   "kova": "bilinmiyor",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 401.5,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1646-10-06",
   "yerlesim": "Zhangzhou",
   "yeni_sahip": "qing-hanedani",
   "alan": "s",
   "yil": 27.4,
   "kova": "bilinmiyor",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 492.3,
   "ana_govde": "Wenzhou",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1687-09-21",
   "yerlesim": "Vellor (Vellore)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 26.3,
   "kova": "bilinmiyor",
   "ada": [
    "Arkot (Arcot)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 344.6,
   "ana_govde": "Kurnûl (Kurnool)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1687-09-21",
   "yerlesim": "Arkot (Arcot)",
   "yeni_sahip": "babur-imparatorlugu",
   "alan": "s",
   "yil": 26.3,
   "kova": "bilinmiyor",
   "ada": [
    "Arkot (Arcot)",
    "Vellor (Vellore)"
   ],
   "ana_govde_km": 353.1,
   "ana_govde": "Kurnûl (Kurnool)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1524-01-01",
   "yerlesim": "Lahsa",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 26.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 457.0,
   "ana_govde": "Kiş (Kish)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1524-01-01",
   "yerlesim": "Katîf",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 26.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 333.3,
   "ana_govde": "Bender Rîg",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1524-01-01",
   "yerlesim": "Ukayr (Uceyr)",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 26.0,
   "kova": "bilinmiyor",
   "ada": [
    "Cübeyl",
    "Katîf",
    "Lahsa",
    "Ukayr (Uceyr)"
   ],
   "ana_govde_km": 388.5,
   "ana_govde": "Kiş (Kish)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1407-06-17",
   "yerlesim": "Huế (Phú Xuân)",
   "yeni_sahip": "ming-hanedani",
   "alan": "s",
   "yil": 20.5,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Quang Tri"
   ],
   "ana_govde_km": 317.1,
   "ana_govde": "Vinh",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1510-07-25",
   "yerlesim": "Trablus",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 19.7,
   "kova": "bilinmiyor",
   "ada": [
    "Trablus"
   ],
   "ana_govde_km": 792.4,
   "ana_govde": "Kalyari (Cagliari)",
   "komsu_150km": 8,
   "zaten_beyanli": false
  },
  {
   "gun": "1784-01-01",
   "yerlesim": "Koil (Aligarh)",
   "yeni_sahip": "maratha",
   "alan": "s",
   "yil": 19.7,
   "kova": "bilinmiyor",
   "ada": [
    "Agra",
    "Gvalyar (Gwalior)",
    "Koil (Aligarh)",
    "Mathura"
   ],
   "ana_govde_km": 377.2,
   "ana_govde": "Ecmîr (Ajmer)",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1810-09-27",
   "yerlesim": "Yergöğü (Giurgiu)",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 19.0,
   "kova": "bilinmiyor",
   "ada": [
    "Yergöğü (Giurgiu)"
   ],
   "ana_govde_km": 470.7,
   "ana_govde": "Hacıbey (Odessa)",
   "komsu_150km": 11,
   "zaten_beyanli": false
  },
  {
   "gun": "1905-08-06",
   "yerlesim": "Watampone (Bone)",
   "yeni_sahip": "hollanda-dogu-hint",
   "alan": "s",
   "yil": 18.2,
   "kova": "bilinmiyor",
   "ada": [
    "Bantaeng",
    "Makassar",
    "Sengkang (Wajo)",
    "Watampone (Bone)"
   ],
   "ana_govde_km": 471.8,
   "ana_govde": "Bima (Sumbawa)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Dâmgan",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 359.1,
   "ana_govde": "Erdistan",
   "komsu_150km": 6,
   "zaten_beyanli": false
  },
  {
   "gun": "1452-01-01",
   "yerlesim": "Bistâm",
   "yeni_sahip": "karakoyunlu",
   "alan": "s",
   "yil": 17.0,
   "kova": "bilinmiyor",
   "ada": [
    "Bistâm",
    "Dâmgan",
    "Simnân"
   ],
   "ana_govde_km": 420.9,
   "ana_govde": "Erdistan",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1767-04-07",
   "yerlesim": "Songkhla",
   "yeni_sahip": "tonburi",
   "alan": "s",
   "yil": 15.0,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 396.8,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1767-04-07",
   "yerlesim": "Trang",
   "yeni_sahip": "tonburi",
   "alan": "s",
   "yil": 15.0,
   "kova": "bilinmiyor",
   "ada": [
    "Nakhon Si Thammarat",
    "Phuket (Thalang)",
    "Songkhla",
    "Surat Thani",
    "Trang"
   ],
   "ana_govde_km": 329.2,
   "ana_govde": "Chumphon",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Kemah",
   "yeni_sahip": "safevi",
   "alan": "s",
   "yil": 13.4,
   "kova": "bilinmiyor",
   "ada": [
    "Aşkale",
    "Erzurum",
    "Kemah"
   ],
   "ana_govde_km": 377.9,
   "ana_govde": "Erciş",
   "komsu_150km": 9,
   "zaten_beyanli": false
  },
  {
   "gun": "1723-08-01",
   "yerlesim": "Şamahı",
   "yeni_sahip": "OSMANLI",
   "alan": "d",
   "yil": 11.9,
   "kova": "bilinmiyor",
   "ada": [
    "Şamahı"
   ],
   "ana_govde_km": 344.6,
   "ana_govde": "Tiflis",
   "komsu_150km": 9,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-02-01",
   "yerlesim": "Huế (Phú Xuân)",
   "yeni_sahip": "le-hanedani",
   "alan": "s",
   "yil": 11.3,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Hội An (Faifo)",
    "Quang Ngai",
    "Quang Tri",
    "Đà Nẵng (Tourane)"
   ],
   "ana_govde_km": 317.1,
   "ana_govde": "Vinh",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-02-01",
   "yerlesim": "Hội An (Faifo)",
   "yeni_sahip": "le-hanedani",
   "alan": "s",
   "yil": 11.3,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Hội An (Faifo)",
    "Quang Ngai",
    "Quang Tri",
    "Đà Nẵng (Tourane)"
   ],
   "ana_govde_km": 415.1,
   "ana_govde": "Nha Trang (Kauthara)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-02-01",
   "yerlesim": "Đà Nẵng (Tourane)",
   "yeni_sahip": "le-hanedani",
   "alan": "s",
   "yil": 11.3,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Hội An (Faifo)",
    "Quang Ngai",
    "Quang Tri",
    "Đà Nẵng (Tourane)"
   ],
   "ana_govde_km": 394.6,
   "ana_govde": "Vinh",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1775-02-01",
   "yerlesim": "Quang Ngai",
   "yeni_sahip": "le-hanedani",
   "alan": "s",
   "yil": 11.3,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Hội An (Faifo)",
    "Quang Ngai",
    "Quang Tri",
    "Đà Nẵng (Tourane)"
   ],
   "ana_govde_km": 323.0,
   "ana_govde": "Nha Trang (Kauthara)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1502-01-01",
   "yerlesim": "Hîve",
   "yeni_sahip": "buhara",
   "alan": "s",
   "yil": 10.0,
   "kova": "bilinmiyor",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat"
   ],
   "ana_govde_km": 386.6,
   "ana_govde": "Buhara",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1806-05-27",
   "yerlesim": "Dubrovnik",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 7.6,
   "kova": "bilinmiyor",
   "ada": [
    "Dubrovnik"
   ],
   "ana_govde_km": 369.6,
   "ana_govde": "Korfu",
   "komsu_150km": 15,
   "zaten_beyanli": false
  },
  {
   "gun": "1740-01-01",
   "yerlesim": "Hîve",
   "yeni_sahip": "afsar",
   "alan": "s",
   "yil": 7.5,
   "kova": "bilinmiyor",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 392.0,
   "ana_govde": "Ebîverd",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1400-03-01",
   "yerlesim": "Huế (Phú Xuân)",
   "yeni_sahip": "ho-hanedani",
   "alan": "s",
   "yil": 7.3,
   "kova": "bilinmiyor",
   "ada": [
    "Huế (Phú Xuân)",
    "Quang Tri"
   ],
   "ana_govde_km": 317.1,
   "ana_govde": "Vinh",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1777-01-01",
   "yerlesim": "Onondaga (İrokua Konfederasyon Merkezi)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.7,
   "kova": "bilinmiyor",
   "ada": [
    "Cayuga",
    "Mohawk (Kayenlaha'ke)",
    "Oneida",
    "Onondaga (İrokua Konfederasyon Merkezi)",
    "Seneca (Ganondagan)"
   ],
   "ana_govde_km": 566.5,
   "ana_govde": "Detroit (Fort Pontchartrain du Détroit)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1777-01-01",
   "yerlesim": "Seneca (Ganondagan)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.7,
   "kova": "bilinmiyor",
   "ada": [
    "Cayuga",
    "Mohawk (Kayenlaha'ke)",
    "Oneida",
    "Onondaga (İrokua Konfederasyon Merkezi)",
    "Seneca (Ganondagan)"
   ],
   "ana_govde_km": 464.2,
   "ana_govde": "Detroit (Fort Pontchartrain du Détroit)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1777-01-01",
   "yerlesim": "Cayuga",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.7,
   "kova": "bilinmiyor",
   "ada": [
    "Cayuga",
    "Mohawk (Kayenlaha'ke)",
    "Oneida",
    "Onondaga (İrokua Konfederasyon Merkezi)",
    "Seneca (Ganondagan)"
   ],
   "ana_govde_km": 518.0,
   "ana_govde": "Detroit (Fort Pontchartrain du Détroit)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1777-01-01",
   "yerlesim": "Oneida",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.7,
   "kova": "bilinmiyor",
   "ada": [
    "Cayuga",
    "Mohawk (Kayenlaha'ke)",
    "Oneida",
    "Onondaga (İrokua Konfederasyon Merkezi)",
    "Seneca (Ganondagan)"
   ],
   "ana_govde_km": 611.2,
   "ana_govde": "Detroit (Fort Pontchartrain du Détroit)",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1693-09-06",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "hollanda",
   "alan": "s",
   "yil": 6.0,
   "kova": "bilinmiyor",
   "ada": [
    "Nagapatnam",
    "Pondişeri",
    "Yafna (Jaffna)"
   ],
   "ana_govde_km": 448.5,
   "ana_govde": "Koçin (Kochi)",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1769-09-19",
   "yerlesim": "Hotin",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 4.8,
   "kova": "bilinmiyor",
   "ada": [
    "Hotin"
   ],
   "ana_govde_km": 362.4,
   "ana_govde": "Kiev",
   "komsu_150km": 7,
   "zaten_beyanli": false
  },
  {
   "gun": "1920-04-26",
   "yerlesim": "Hîve",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 3.5,
   "kova": "bilinmiyor",
   "ada": [
    "Hazârasp",
    "Hîve",
    "Köhne Ürgenç (Gürgenç)",
    "Küngrat",
    "Yeni Ürgenç"
   ],
   "ana_govde_km": 392.0,
   "ana_govde": "Ebîverd",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Hakata (Fukuoka)",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "bilinmiyor",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 344.7,
   "ana_govde": "Okayama",
   "komsu_150km": 5,
   "zaten_beyanli": false
  },
  {
   "gun": "1333-07-04",
   "yerlesim": "Kumamoto",
   "yeni_sahip": "kenmu",
   "alan": "s",
   "yil": 3.3,
   "kova": "bilinmiyor",
   "ada": [
    "Funai (Ōita)",
    "Hakata (Fukuoka)",
    "Kagoşima",
    "Kumamoto",
    "Tsuşima (İzuhara)"
   ],
   "ana_govde_km": 361.3,
   "ana_govde": "Okayama",
   "komsu_150km": 4,
   "zaten_beyanli": false
  },
  {
   "gun": "1674-03-15",
   "yerlesim": "Zeytun (Quanzhou)",
   "yeni_sahip": "san-fan",
   "alan": "s",
   "yil": 2.5,
   "kova": "bilinmiyor",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 680.5,
   "ana_govde": "Changsha",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1674-03-15",
   "yerlesim": "Zhangzhou",
   "yeni_sahip": "san-fan",
   "alan": "s",
   "yil": 2.5,
   "kova": "bilinmiyor",
   "ada": [
    "Fuzhou",
    "Zeytun (Quanzhou)",
    "Zhangzhou"
   ],
   "ana_govde_km": 624.9,
   "ana_govde": "Changsha",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1524-07-25",
   "yerlesim": "Iximché",
   "yeni_sahip": "ispanya",
   "alan": "s",
   "yil": 2.4,
   "kova": "bilinmiyor",
   "ada": [
    "Iximché"
   ],
   "ana_govde_km": 457.3,
   "ana_govde": "Potonchán (Santa María de la Victoria)",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1656-07-13",
   "yerlesim": "Semadirek",
   "yeni_sahip": "venedik",
   "alan": "s",
   "yil": 1.3,
   "kova": "bilinmiyor",
   "ada": [
    "Bozcaada",
    "Semadirek"
   ],
   "ana_govde_km": 323.2,
   "ana_govde": "İstendil (Tinos)",
   "komsu_150km": 35,
   "zaten_beyanli": false
  },
  {
   "gun": "1737-07-13",
   "yerlesim": "Özi",
   "yeni_sahip": "rusya",
   "alan": "s",
   "yil": 1.1,
   "kova": "bilinmiyor",
   "ada": [
    "Özi"
   ],
   "ana_govde_km": 398.1,
   "ana_govde": "Poltava",
   "komsu_150km": 3,
   "zaten_beyanli": false
  },
  {
   "gun": "1516-06-20",
   "yerlesim": "Zebîd",
   "yeni_sahip": "memluk",
   "alan": "s",
   "yil": 1.0,
   "kova": "bilinmiyor",
   "ada": [
    "Zebîd"
   ],
   "ana_govde_km": 379.9,
   "ana_govde": "Dahlak",
   "komsu_150km": 4,
   "zaten_beyanli": false
  }
 ],
 "hakiki_enklav": [
  {
   "gun": "1620-11-19",
   "yerlesim": "Tranquebar (Tharangambadi)",
   "yeni_sahip": "danimarka",
   "alan": "s",
   "yil": 224.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Tranquebar (Tharangambadi)"
   ],
   "ana_govde_km": 7303.2,
   "ana_govde": "Visby (Gotland)",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1704-08-04",
   "yerlesim": "Cebelitarık (Gibraltar)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 219.2,
   "kova": "hakiki-enklav",
   "ada": [
    "Cebelitarık (Gibraltar)"
   ],
   "ana_govde_km": 1554.5,
   "ana_govde": "Penzance",
   "komsu_150km": 12,
   "zaten_beyanli": true
  },
  {
   "gun": "1641-01-14",
   "yerlesim": "Malaka",
   "yeni_sahip": "hollanda-dogu-hint",
   "alan": "s",
   "yil": 184.1,
   "kova": "hakiki-enklav",
   "ada": [
    "Malaka"
   ],
   "ana_govde_km": 1060.5,
   "ana_govde": "Batavia (Cakarta)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1757-06-23",
   "yerlesim": "Bombay",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 166.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Bombay"
   ],
   "ana_govde_km": 1027.9,
   "ana_govde": "Madras (Chennai)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1757-06-23",
   "yerlesim": "Madras (Chennai)",
   "yeni_sahip": "ingiliz-hindistani",
   "alan": "s",
   "yil": 166.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Madras (Chennai)"
   ],
   "ana_govde_km": 1027.9,
   "ana_govde": "Bombay",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1511-08-24",
   "yerlesim": "Malaka",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 129.4,
   "kova": "hakiki-enklav",
   "ada": [
    "Malaka"
   ],
   "ana_govde_km": 2931.5,
   "ana_govde": "Kolam (Quilon)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1639-08-22",
   "yerlesim": "Madras (Chennai)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 107.1,
   "kova": "hakiki-enklav",
   "ada": [
    "Madras (Chennai)"
   ],
   "ana_govde_km": 8110.9,
   "ana_govde": "Dover",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1820-01-08",
   "yerlesim": "Ras el-Hayme (Cülfâr)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 103.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Abu Dabi",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 3107.7,
   "ana_govde": "Yafna (Jaffna)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1820-01-08",
   "yerlesim": "Şârika",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 103.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Abu Dabi",
    "Ras el-Hayme (Cülfâr)",
    "Şârika"
   ],
   "ana_govde_km": 3131.3,
   "ana_govde": "Yafna (Jaffna)",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1665-02-18",
   "yerlesim": "Bombay",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 92.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Bombay"
   ],
   "ana_govde_km": 1027.9,
   "ana_govde": "Madras (Chennai)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1688-01-01",
   "yerlesim": "Çandernagor",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 69.2,
   "kova": "hakiki-enklav",
   "ada": [
    "Çandernagor"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Pondişeri",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1699-09-01",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 61.4,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Çandernagor",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1580-01-01",
   "yerlesim": "Hûglî (Hooghly)",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 52.5,
   "kova": "hakiki-enklav",
   "ada": [
    "Hûglî (Hooghly)"
   ],
   "ana_govde_km": 1625.7,
   "ana_govde": "Nagapatnam",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1882-03-10",
   "yerlesim": "Aseb",
   "yeni_sahip": "italya",
   "alan": "s",
   "yil": 41.6,
   "kova": "hakiki-enklav",
   "ada": [
    "Aseb"
   ],
   "ana_govde_km": 3820.0,
   "ana_govde": "Sirakuza",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Tacûra",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 39.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Alî Sabîh",
    "Dikhil",
    "Obok",
    "Tacûra"
   ],
   "ana_govde_km": 3682.3,
   "ana_govde": "Ogooué havzası",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Obok",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 39.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Alî Sabîh",
    "Dikhil",
    "Obok",
    "Tacûra"
   ],
   "ana_govde_km": 3730.6,
   "ana_govde": "Ogooué havzası",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Alî Sabîh",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 39.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Alî Sabîh",
    "Dikhil",
    "Obok",
    "Tacûra"
   ],
   "ana_govde_km": 3641.2,
   "ana_govde": "Ogooué havzası",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Dikhil",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 39.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Alî Sabîh",
    "Dikhil",
    "Obok",
    "Tacûra"
   ],
   "ana_govde_km": 3604.1,
   "ana_govde": "Ogooué havzası",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-02-01",
   "yerlesim": "Sevâkin",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 39.7,
   "kova": "hakiki-enklav",
   "ada": [
    "Sevâkin"
   ],
   "ana_govde_km": 1080.9,
   "ana_govde": "Aden",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1885-01-01",
   "yerlesim": "Matadi",
   "yeni_sahip": "belcika",
   "alan": "s",
   "yil": 38.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Boma",
    "Matadi",
    "Soyo"
   ],
   "ana_govde_km": 1480.6,
   "ana_govde": "Kisangani (Stanleyville)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1885-01-01",
   "yerlesim": "Boma",
   "yeni_sahip": "belcika",
   "alan": "s",
   "yil": 38.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Boma",
    "Matadi",
    "Soyo"
   ],
   "ana_govde_km": 1522.4,
   "ana_govde": "Kisangani (Stanleyville)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1888-01-01",
   "yerlesim": "Cibûtî",
   "yeni_sahip": "fransa-cumhuriyet",
   "alan": "s",
   "yil": 35.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Alî Sabîh",
    "Cibûtî",
    "Dikhil",
    "Obok",
    "Tacûra"
   ],
   "ana_govde_km": 3701.7,
   "ana_govde": "Ogooué havzası",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1763-02-10",
   "yerlesim": "Çandernagor",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 30.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Çandernagor"
   ],
   "ana_govde_km": 7449.4,
   "ana_govde": "Strazburg",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1793-06-10",
   "yerlesim": "Çandernagor",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 23.5,
   "kova": "hakiki-enklav",
   "ada": [
    "Çandernagor"
   ],
   "ana_govde_km": 2327.0,
   "ana_govde": "Penang (George Town)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1793-08-23",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 23.3,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Çandernagor",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1662-01-30",
   "yerlesim": "Tanca",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 22.0,
   "kova": "hakiki-enklav",
   "ada": [
    "Tanca"
   ],
   "ana_govde_km": 1594.9,
   "ana_govde": "Penzance",
   "komsu_150km": 10,
   "zaten_beyanli": true
  },
  {
   "gun": "1517-07-06",
   "yerlesim": "Zebîd",
   "yeni_sahip": "OSMANLI",
   "alan": "v",
   "yil": 21.5,
   "kova": "hakiki-enklav",
   "ada": [
    "Zebîd"
   ],
   "ana_govde_km": 858.2,
   "ana_govde": "Tâif",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1674-01-01",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 19.7,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 7724.5,
   "ana_govde": "Colmar",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1765-01-01",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 13.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Çandernagor",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1750-09-11",
   "yerlesim": "Cinci (Gingee)",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 10.6,
   "kova": "hakiki-enklav",
   "ada": [
    "Cinci (Gingee)",
    "Pondişeri"
   ],
   "ana_govde_km": 1513.5,
   "ana_govde": "Çandernagor",
   "komsu_150km": 5,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1785-01-01",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 8.6,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Çandernagor",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1749-08-21",
   "yerlesim": "Madras (Chennai)",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 7.8,
   "kova": "hakiki-enklav",
   "ada": [
    "Madras (Chennai)"
   ],
   "ana_govde_km": 1027.9,
   "ana_govde": "Bombay",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1884-01-01",
   "yerlesim": "Tokar",
   "yeni_sahip": "mehdi",
   "alan": "s",
   "yil": 7.1,
   "kova": "hakiki-enklav",
   "ada": [
    "Tokar"
   ],
   "ana_govde_km": 868.5,
   "ana_govde": "Tendelti",
   "komsu_150km": 6,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1580-06-09",
   "yerlesim": "Nagazaki",
   "yeni_sahip": "portekiz",
   "alan": "s",
   "yil": 7.1,
   "kova": "hakiki-enklav",
   "ada": [
    "Nagazaki"
   ],
   "ana_govde_km": 1989.0,
   "ana_govde": "Makao (Macau)",
   "komsu_150km": 3,
   "zaten_beyanli": true
  },
  {
   "gun": "1778-10-18",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 6.2,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 3035.7,
   "ana_govde": "Bengkulu (Bencoolen)",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1757-03-23",
   "yerlesim": "Çandernagor",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 5.9,
   "kova": "hakiki-enklav",
   "ada": [
    "Çandernagor"
   ],
   "ana_govde_km": 1382.6,
   "ana_govde": "Madras (Chennai)",
   "komsu_150km": 3,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1761-01-16",
   "yerlesim": "Pondişeri",
   "yeni_sahip": "ingiltere",
   "alan": "s",
   "yil": 4.0,
   "kova": "hakiki-enklav",
   "ada": [
    "Pondişeri"
   ],
   "ana_govde_km": 1513.9,
   "ana_govde": "Çandernagor",
   "komsu_150km": 7,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1746-09-21",
   "yerlesim": "Madras (Chennai)",
   "yeni_sahip": "fransa",
   "alan": "s",
   "yil": 2.9,
   "kova": "hakiki-enklav",
   "ada": [
    "Madras (Chennai)",
    "Pondişeri"
   ],
   "ana_govde_km": 1382.6,
   "ana_govde": "Çandernagor",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  },
  {
   "gun": "1398-12-17",
   "yerlesim": "Delhi",
   "yeni_sahip": "timurlu",
   "alan": "s",
   "yil": 0.0,
   "kova": "hakiki-enklav",
   "ada": [
    "Delhi"
   ],
   "ana_govde_km": 998.7,
   "ana_govde": "Gazne",
   "komsu_150km": 4,
   "zaten_beyanli": false,
   "oneri": {
    "enklav": true
   }
  }
 ]
};

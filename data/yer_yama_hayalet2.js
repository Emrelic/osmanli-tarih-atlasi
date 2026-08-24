// data/yer_yama_hayalet2.js — DEGISMEZ 4'UN GORUNMEYEN YARISI
// OPUS HAZIR KITA 87 · 2026-08-24 · OSMANGAZI sevkiyle (ikinci parti)
//
// 🔴 ONERIDIR, VERI DEGIL. Motor okumaz, index.html'e EKLENMEZ.
//
// NICIN AYRI DOSYA VE AYRI AD ALANI (§7):
//   window.YER_YAMA_HAYALET  (129) → denetim BUNLARI GORUYOR   · SAHIPLIK kusuru
//   window.YER_YAMA_HAYALET2 (118) → denetim BUNLARI GORMUYOR  · AD kusuru
//   Iki kume ayri kabul olcutu tasiyor, ayri uygulanacak.
//
// KUSURUN CINSI: boya DOGRU, ekrandaki AD yanlis. Bugun kullanici 1920'de
// Saraybosna'ya tikladiginda "Sirbistan Kralligi (Nemanjic Hanedani)" goruyor;
// o kunye 1402'de bitti. Sebep `js/app.js:70 devletAdi()`in ZAMAN KORU olmasi:
// bir anahtar → tek ad, tarihe bakmadan, dosyada ILK gecen kunyenin adi.
//
// 🔴 RENK BAGIMLILIGI — HER PARCADA `renk` ALANI:
//   uret_petek.py:596 ve :3732 boya anahtari olarak `d:`nin HAM DEGERINI arar;
//   kunyenin `harita:` alanini OKUMAZ (olculdu: grep harita uret_petek.py →
//   sifir eslesme). Bu yamadaki hedeflerin HEPSINDE `harita:` alani VAR ve
//   bugunku anahtari gosteriyor ⇒ MOTOR O ALANI OKUSAYDI hicbir yeni renk
//   gerekmezdi, govdeler bugunku renkleriyle cizilmeye devam ederdi.
//   ⇒ Iki yol var, karar koordinatorun. Ayrinti: denetim/BULGU-HAYALET-DONEM-2.md
//
// `__BOSLUK__`: hicbir kunyenin kapsamadigi dilim. En yakin kimlige ITILMEDI —
// bu, hayaleti kapatip yenisini dogurmanin bilinen yolu (§3.5.1).
window.YER_YAMA_HAYALET2 = [
 {
  "yerlesim": "Mustafapaşa (Svilengrad)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-09-29",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-09-29",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Malko Tırnova",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-09-29",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-09-29",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ahtapolu (Ahtopol)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-09-29",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-09-29",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Rezve (Rezovo)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-09-29",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-09-29",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ferecik (Feres)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-07-14",
   "t": "1913-09-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.5,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-07-14",
    "t": "1913-09-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Gümülcine",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-07-14",
   "t": "1913-09-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.5,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-07-14",
    "t": "1913-09-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İskeçe",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-07-14",
   "t": "1913-09-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.5,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-07-14",
    "t": "1913-09-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kırcaali",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-07-14",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.5,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-07-14",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Çirmen",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1920-05-14"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1920-05-14",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Köstendil",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Petriç",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Nevrokop (Gotse Delçev)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Orestiada (Kumçiftliği)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1920-05-14"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1920-05-14",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Sofulu (Soufli)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1920-05-14"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1920-05-14",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Dedeağaç (Alexandroupoli)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1920-05-14"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1920-05-14",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Elhova (Elhovo)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-05-30",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.4,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-05-30",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Edirne",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Uzunköprü",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Havsa",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Meriç (İpsala kuzeyi)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Lalapaşa",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kofçaz",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Dereköy (Kırklareli)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Demirköy",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İğneada",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Vize",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1913-03-26",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 517.2,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1913-03-26",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kırklareli",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1912-10-24",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 516.8,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1912-10-24",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Tekirdağ",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1912-11-01",
   "t": "1913-07-21"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 516.8,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1912-11-01",
    "t": "1913-07-21",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Saraybosna",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Mostar",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Banaluka",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Travnik",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İzvornik (Zvornik)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Foça (Foča)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Livno (İhlevne)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Yayça (Jajce)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Srebrenik",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Trebinye",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Vişegrad",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Tuzla (Bosna)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Koniçe (Konjic)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Visoko",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Bihaç (Bihać)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 516.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1918-11-11",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Sofya",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Vidin",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Tırnova",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Varna",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Şumnu",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Silistre",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Rusçuk",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Prevadi (Provadia)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1908-10-05",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 512.7,
  "oneri": [
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Manastır",
  "mevcut": {
   "d": "sirbistan",
   "f": "1912-11-19",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 510.9,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1912-11-19",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ohri",
  "mevcut": {
   "d": "sirbistan",
   "f": "1912-11-29",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 510.9,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1912-11-29",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Üsküp",
  "mevcut": {
   "d": "sirbistan",
   "f": "1912-10-26",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 510.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1912-10-26",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Priştine",
  "mevcut": {
   "d": "sirbistan",
   "f": "1912-10-22",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 510.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1912-10-22",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Yenipazar (Novi Pazar)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1912-10-23",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 510.8,
  "oneri": [
   {
    "d": "sirbistan-kralligi",
    "f": "1912-10-23",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Eski Zağra (Stara Zagora)",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1885-09-18",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 489.7,
  "oneri": [
   {
    "d": "bulgaristan-prensligi",
    "f": "1885-09-18",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Tatarpazarcığı",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1885-09-18",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 489.7,
  "oneri": [
   {
    "d": "bulgaristan-prensligi",
    "f": "1885-09-18",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Filibe",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1885-09-18",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 489.7,
  "oneri": [
   {
    "d": "bulgaristan-prensligi",
    "f": "1885-09-18",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İhtiman",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 482.5,
  "oneri": [
   {
    "d": "bulgaristan-prensligi",
    "f": "1878-07-13",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Plevne",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1877-12-10",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 481.9,
  "oneri": [
   {
    "d": "rusya",
    "f": "1877-12-10",
    "t": "1878-07-13",
    "renk": "VAR",
    "capraz": true,
    "guven": "GEREKCELI",
    "not": "Ayni: Plevne'nin dususu (1877-12-10) ile Berlin Antlasmasi (1878-07-13) arasi Rus Muvakkat Idaresi. ALTERNATIF kunye YOK."
   },
   {
    "d": "bulgaristan-prensligi",
    "f": "1878-07-13",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Niğbolu",
  "mevcut": {
   "d": "bulgaristan",
   "f": "1877-07-16",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "İkinci Bulgar İmparatorluğu",
  "yanlis_ad_kunyesi": "bulgar-carligi",
  "yil": 481.5,
  "oneri": [
   {
    "d": "rusya",
    "f": "1877-07-16",
    "t": "1878-07-13",
    "renk": "VAR",
    "capraz": true,
    "guven": "GEREKCELI",
    "not": "1877-78 Osmanli-Rus Harbi'nde Rus Muvakkat Idaresi. `rusya` kunyesi (1547-01-16..1917-03-15) dilimi kapsiyor ve rengi VAR. ALTERNATIF: Ayastefanos Bulgaristan'i icin kunye YOK — acilirsa oraya tasinir."
   },
   {
    "d": "bulgaristan-prensligi",
    "f": "1878-07-13",
    "t": "1908-10-05",
    "renk": "YOK"
   },
   {
    "d": "bulgaristan-kralligi",
    "f": "1908-10-05",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Semendire",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Belgrad",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kragujevac",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Çaçak",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Böğürdelen (Šabac)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Yagodina (Jagodina)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Şehirköy (Pirot)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Alacahisar (Kruševac)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-07-13",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.5,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-07-13",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Niş",
  "mevcut": {
   "d": "sirbistan",
   "f": "1878-01-11",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 476.0,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1878-01-11",
    "t": "1882-03-06",
    "renk": "YOK"
   },
   {
    "d": "sirbistan-kralligi",
    "f": "1882-03-06",
    "t": "1918-12-01",
    "renk": "YOK"
   },
   {
    "d": "yugoslavya",
    "f": "1918-12-01",
    "t": "1923-10-29",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `yugoslavya` (Sirp-Hirvat-Sloven Kralligi) 1918-12-01..1923-10-29 — dilimin IKI UCUYLA DA birebir ayni. SHS Kralligi 1 Aralik 1918'de ilan edildi."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İşkodra",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1913-04-23",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 434.2,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1913-04-23",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Akçahisar (Kruja)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "İlbasan (Elbasan)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Berat",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Draç",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Avlonya",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kanina",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Delvine",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ergiri (Ergirikasrı)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Butrint (Butrinto)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Hımara (Himarë)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ayasaranda (Sarandë)",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1912-11-28",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 433.8,
  "oneri": [
   {
    "d": "arnavutluk-bagimsiz",
    "f": "1912-11-28",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Böğürdelen (Šabac)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1806-01-26",
   "t": "1813-10-05"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 404.1,
  "oneri": [
   {
    "d": "sirbistan-prensligi",
    "f": "1806-01-26",
    "t": "1813-10-05",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Lozan",
  "mevcut": {
   "d": "sardinya",
   "f": "1281-01-01",
   "t": "1536-01-01"
  },
  "ekranda_bugun": "Sardinya-Piyemonte Krallığı (Savoya)",
  "yanlis_ad_kunyesi": "sardinya-piyemonte",
  "yil": 184.6,
  "oneri": [
   {
    "d": "savoya",
    "f": "1281-01-01",
    "t": "1536-01-01",
    "renk": "VAR",
    "capraz": true,
    "guven": "KESIN",
    "not": "Kunye `savoya` (Savoya Kontlugu/Dukaligi) 1032-01-01..1720-08-02 dilimin TAMAMINI kapsiyor. Lozan/Vaud 1536'da Bern'e gecti — verinin kuyruk siniri zaten o. `sardinya-piyemonte` 1720'de kuruldu, yani 1281'de HENUZ YOKTU."
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Hâil",
  "mevcut": {
   "d": "suud",
   "f": "1921-11-02",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 103.1,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1921-11-02",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Nefud çölü",
  "mevcut": {
   "d": "suud",
   "f": "1921-11-02",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 103.1,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1921-11-02",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Dûmetülcendel (Cevf)",
  "mevcut": {
   "d": "suud",
   "f": "1921-11-02",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 103.1,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1921-11-02",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Teymâ",
  "mevcut": {
   "d": "suud",
   "f": "1921-11-02",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 103.1,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1921-11-02",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ebha (Asir)",
  "mevcut": {
   "d": "suud",
   "f": "1920-04-01",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 101.6,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1920-04-01",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Lahsa",
  "mevcut": {
   "d": "suud",
   "f": "1913-07-08",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 94.8,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1913-07-08",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Katîf",
  "mevcut": {
   "d": "suud",
   "f": "1913-07-08",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 94.8,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1913-07-08",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ukayr (Uceyr)",
  "mevcut": {
   "d": "suud",
   "f": "1913-07-08",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 94.8,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1913-07-08",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Cübeyl",
  "mevcut": {
   "d": "suud",
   "f": "1913-07-08",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 94.8,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1913-07-08",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Dir'iye (Necid)",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Riyad",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Necid içi",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Buraydâ (Kasîm)",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Uneyze",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Şakrâ",
  "mevcut": {
   "d": "suud",
   "f": "1902-01-15",
   "t": "1923-10-29"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 83.3,
  "oneri": [
   {
    "d": "suud-ucuncu",
    "f": "1902-01-15",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Semendire",
  "mevcut": {
   "d": "sirbistan",
   "f": "1444-08-01",
   "t": "1459-06-20"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 42.6,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1444-08-01",
    "t": "1459-06-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Kragujevac",
  "mevcut": {
   "d": "sirbistan",
   "f": "1444-08-01",
   "t": "1459-06-20"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 42.6,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1444-08-01",
    "t": "1459-06-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Çaçak",
  "mevcut": {
   "d": "sirbistan",
   "f": "1444-08-01",
   "t": "1459-06-20"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 42.6,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1444-08-01",
    "t": "1459-06-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Yagodina (Jagodina)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1444-08-01",
   "t": "1459-06-20"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 42.6,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1444-08-01",
    "t": "1459-06-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Alacahisar (Kruševac)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1444-08-01",
   "t": "1454-01-01"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 42.6,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1444-08-01",
    "t": "1454-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Şehirköy (Pirot)",
  "mevcut": {
   "d": "sirbistan",
   "f": "1443-01-01",
   "t": "1456-01-01"
  },
  "ekranda_bugun": "Sırbistan Krallığı (Nemanjić Hanedanı)",
  "yanlis_ad_kunyesi": "sirbistan-nemanjic",
  "yil": 41.0,
  "oneri": [
   {
    "d": "sirp-despotlugu",
    "f": "1443-01-01",
    "t": "1456-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Berat",
  "mevcut": {
   "d": "arnavutluk",
   "f": "1281-01-01",
   "t": "1417-01-01"
  },
  "ekranda_bugun": "Arnavutluk (Kastriota Direnişi)",
  "yanlis_ad_kunyesi": "arnavutluk-iskenderbey",
  "yil": 26.0,
  "oneri": [
   {
    "d": "__BOSLUK__",
    "f": "1281-01-01",
    "t": "1417-01-01",
    "renk": "—",
    "not": "Bu dilimi KAPSAYAN kunye YOK — kimlige ITILMEDI, karar koordinatorde"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Lahsa",
  "mevcut": {
   "d": "suud",
   "f": "1841-10-01",
   "t": "1871-04-20"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 23.1,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1841-10-01",
    "t": "1871-04-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Katîf",
  "mevcut": {
   "d": "suud",
   "f": "1841-10-01",
   "t": "1871-04-20"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 23.1,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1841-10-01",
    "t": "1871-04-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Ukayr (Uceyr)",
  "mevcut": {
   "d": "suud",
   "f": "1841-10-01",
   "t": "1871-04-20"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 23.1,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1841-10-01",
    "t": "1871-04-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Cübeyl",
  "mevcut": {
   "d": "suud",
   "f": "1841-10-01",
   "t": "1871-04-20"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 23.1,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1841-10-01",
    "t": "1871-04-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Dir'iye (Necid)",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Riyad",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Nefud çölü",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1836-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1836-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Necid içi",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Buraydâ (Kasîm)",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Uneyze",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 },
 {
  "yerlesim": "Şakrâ",
  "mevcut": {
   "d": "suud",
   "f": "1824-06-01",
   "t": "1891-01-01"
  },
  "ekranda_bugun": "I. Suûdî Devleti (Vehhâbî Emirliği)",
  "yanlis_ad_kunyesi": "suud-birinci",
  "yil": 5.7,
  "oneri": [
   {
    "d": "suud-ikinci",
    "f": "1824-06-01",
    "t": "1891-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "devletler.js — ayni boya anahtarina cevap veren kunyeler uzerinde YURUNEREK olculdu; kapsanmayan dilim isaretlendi"
 }
];

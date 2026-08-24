// data/yer_yama_hayalet.js — DEGISMEZ 4 (HAYALET DONEM) ONERI DOSYASI
// OPUS HAZIR KITA 87 · 2026-08-24 · OSMANGAZI sevkiyle
//
// 🔴 BU DOSYA VERI DEGIL ONERIDIR. Motor bunu OKUMAZ; index.html'e EKLENMEZ.
//    Uygulamayi koordinator yapar (sartname: "veriye BEN uygularim").
//
// OLCUM: py arac/denetle.py → "Degismez 4 ✓ 129 hayalet donem". Dokum,
// denetle.py'nin KENDI degismez4() fonksiyonu cagirilarak cikarildi.
//
// ⚠️ SINIR GARANTISI: her onerinin ilk parcasinin f'i ve son parcasinin t'si
// MEVCUT donemin f/t'siyle AYNIDIR (uretecte dogrulaniyor). Yani bu yama bir
// sinir KAYDIRMAZ ⇒ Degismez 1'de yeni bosluk acamaz. Degisen yalniz KIMLIK.
//
// ALANLAR
//   mevcut : veride bugun yazan {d,f,t}
//   oneri  : yerine gelecek parcalar; her parcada `renk` = BOYALAR'da var mi
//            🔴 renk:"YOK" olan bir kimlige gecmek HARITA DELIGI acar
//               (uret_petek.py:596 uyarir, :3732 govdeyi hic uretmez)
//   guven  : KESIN (TDV adiyla soyluyor) · GEREKCELI (bolge/kunye dayanakli)
//            · BULUNAMADI (kaynak yok — ONERI DE YOK, kunye istegi var)
//   yil    : kaydin tasidigi hayalet suresi (siralama olcutu)
window.YER_YAMA_HAYALET = [
 {
  "yerlesim": "Meşhed",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1381-04-01"
  },
  "yil": 544.7,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1337-09-09",
    "renk": "VAR"
   },
   {
    "d": "serbedariler",
    "f": "1337-09-09",
    "t": "1381-04-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `serbedariler`: 'Sebzevâr'ın kontrolünü ele geçirip (12 Safer 738/9 Eylül 1337)' ve hakim sehirler arasinda 'Meşhed, Tûs' sayiliyor; 1381'de Timur'a tabi olundu",
  "not": "Bas parca ilhanliya veriliyor — CLAUDE.md §11'in '21 ay sahipsiz' vakasinin caresi."
 },
 {
  "yerlesim": "Tebbes",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1381-04-01"
  },
  "yil": 544.7,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1353-01-01",
    "renk": "VAR"
   },
   {
    "d": "kert",
    "f": "1353-01-01",
    "t": "1381-04-01",
    "renk": "VAR"
   }
  ],
  "guven": "BULUNAMADI",
  "kaynak": "TDV'de Tebbes (Tabas/Kuhistan) icin bu doneme ait mustakil hukum BULUNAMADI",
  "not": "🔴 ONERI ZAYIF: Kuhistan Herat-Kert nufuz alaninda sayildigi icin `kert` secildi. Kaynak bulunana kadar KOORDINATOR ONAYI OLMADAN uygulanmamali."
 },
 {
  "yerlesim": "Herat",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1381-04-01"
  },
  "yil": 544.7,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "kert",
    "f": "1335-12-01",
    "t": "1381-04-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `kert`: 'Kuruluş 643/1245 … Herat Timur tarafından işgal edildi (783/1381)'",
  "not": "Kunye 1245-01-01..1389-01-01 pencerenin TAMAMINI kapsiyor, parcalama gerekmiyor."
 },
 {
  "yerlesim": "Yezd",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "muzafferi",
    "f": "1335-12-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `muzafferiler`: hanedan 1318'de Yezd'de kuruldu (1318-1393); kunye pencereyi kapsiyor",
  "not": "Tek parca yeter."
 },
 {
  "yerlesim": "Nihâvend",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1353-01-01",
    "renk": "VAR"
   },
   {
    "d": "lur-i-kucek",
    "f": "1353-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Bolge Lur-i Kucek (Hursidi) sahasi; kunye 1184-01-01..1597-01-01 pencereyi kapsiyor",
  "not": "🟡 TDV `nihavend` slugu OLU (CLAUDE.md'de kayitli). Sehir ozelinde tarih BULUNAMADI, atama BOLGE dayanakli."
 },
 {
  "yerlesim": "Kasr-ı Şîrîn",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler`: 'Bağdat, Musul, Tebriz, Azerbaycan … 1340-1431'",
  "not": "🟡 Iki sehir de Celayirli-Muzafferi sinir kusaginda; sehir ozelinde kaynak BULUNAMADI. Save icin `muzafferi` de savunulabilir — koordinator karari."
 },
 {
  "yerlesim": "Kâşân",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `muzafferiler` bu sehirleri adiyla sayiyor ('Kassan, Erdistan, Nain, Erdekan'); 1357 Incu'nun tasfiye tarihi ayni maddeden",
  "not": "🟡 Sehirlerin 1335-1357 arasi Incu'da mi Cobanli'da mi oldugu TDV'de ACIKCA yazmiyor; Incu secildi cunku kunyesi var (1325-1357) ve Isfahan cevresini tutuyordu."
 },
 {
  "yerlesim": "Sâve",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler`: 'Bağdat, Musul, Tebriz, Azerbaycan … 1340-1431'",
  "not": "🟡 Iki sehir de Celayirli-Muzafferi sinir kusaginda; sehir ozelinde kaynak BULUNAMADI. Save icin `muzafferi` de savunulabilir — koordinator karari."
 },
 {
  "yerlesim": "Simnân",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1337-09-09",
    "renk": "VAR"
   },
   {
    "d": "serbedariler",
    "f": "1337-09-09",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `serbedariler` hakim sehirler: 'Câcerm, Damgan, Simnân, Gürgân, Meşhed, Tûs, Esterâbâd'",
  "not": "🟡 Simnan ve Damgan TDV'de ADIYLA geciyor (KESIN); Bistam gecmiyor, Damgan-Simnan hattinda oldugu icin ayni kumeye konuldu — ayri isaretlenmeli."
 },
 {
  "yerlesim": "Dâmgan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1337-09-09",
    "renk": "VAR"
   },
   {
    "d": "serbedariler",
    "f": "1337-09-09",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `serbedariler` hakim sehirler: 'Câcerm, Damgan, Simnân, Gürgân, Meşhed, Tûs, Esterâbâd'",
  "not": "🟡 Simnan ve Damgan TDV'de ADIYLA geciyor (KESIN); Bistam gecmiyor, Damgan-Simnan hattinda oldugu icin ayni kumeye konuldu — ayri isaretlenmeli."
 },
 {
  "yerlesim": "Bistâm",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1337-09-09",
    "renk": "VAR"
   },
   {
    "d": "serbedariler",
    "f": "1337-09-09",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `serbedariler` hakim sehirler: 'Câcerm, Damgan, Simnân, Gürgân, Meşhed, Tûs, Esterâbâd'",
  "not": "🟡 Simnan ve Damgan TDV'de ADIYLA geciyor (KESIN); Bistam gecmiyor, Damgan-Simnan hattinda oldugu icin ayni kumeye konuldu — ayri isaretlenmeli."
 },
 {
  "yerlesim": "Gulpâygân",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `muzafferiler` bu sehirleri adiyla sayiyor ('Kassan, Erdistan, Nain, Erdekan'); 1357 Incu'nun tasfiye tarihi ayni maddeden",
  "not": "🟡 Sehirlerin 1335-1357 arasi Incu'da mi Cobanli'da mi oldugu TDV'de ACIKCA yazmiyor; Incu secildi cunku kunyesi var (1325-1357) ve Isfahan cevresini tutuyordu."
 },
 {
  "yerlesim": "Erdistan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `muzafferiler` bu sehirleri adiyla sayiyor ('Kassan, Erdistan, Nain, Erdekan'); 1357 Incu'nun tasfiye tarihi ayni maddeden",
  "not": "🟡 Sehirlerin 1335-1357 arasi Incu'da mi Cobanli'da mi oldugu TDV'de ACIKCA yazmiyor; Incu secildi cunku kunyesi var (1325-1357) ve Isfahan cevresini tutuyordu."
 },
 {
  "yerlesim": "Nâin",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `muzafferiler` bu sehirleri adiyla sayiyor ('Kassan, Erdistan, Nain, Erdekan'); 1357 Incu'nun tasfiye tarihi ayni maddeden",
  "not": "🟡 Sehirlerin 1335-1357 arasi Incu'da mi Cobanli'da mi oldugu TDV'de ACIKCA yazmiyor; Incu secildi cunku kunyesi var (1325-1357) ve Isfahan cevresini tutuyordu."
 },
 {
  "yerlesim": "Burûcird",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1353-01-01",
    "renk": "VAR"
   },
   {
    "d": "lur-i-kucek",
    "f": "1353-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Bolge Lur-i Kucek (Hursidi) sahasi; kunye 1184-01-01..1597-01-01 pencereyi kapsiyor",
  "not": "🟡 TDV `nihavend` slugu OLU (CLAUDE.md'de kayitli). Sehir ozelinde tarih BULUNAMADI, atama BOLGE dayanakli."
 },
 {
  "yerlesim": "Erdekân",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1387-11-01"
  },
  "yil": 538.1,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `muzafferiler` bu sehirleri adiyla sayiyor ('Kassan, Erdistan, Nain, Erdekan'); 1357 Incu'nun tasfiye tarihi ayni maddeden",
  "not": "🟡 Sehirlerin 1335-1357 arasi Incu'da mi Cobanli'da mi oldugu TDV'de ACIKCA yazmiyor; Incu secildi cunku kunyesi var (1325-1357) ve Isfahan cevresini tutuyordu."
 },
 {
  "yerlesim": "Telafer",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1411-01-01"
  },
  "yil": 514.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1411-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `celayirliler`: kurulus 1340; 'Musul ve Diyarbekir'i 1364'te aldi'; 1410'da Ahmed Celayir Karakoyunlu ile catismada oldurüldü — verinin 1411 sinirıyla uyusuyor",
  "not": "Kuyruk sinirı (1411-01-01) DEGISMIYOR."
 },
 {
  "yerlesim": "Kirkwall (Orkney)",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1472-02-20"
  },
  "yil": 433.3,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1472-02-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Lerwick (Shetland)",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1472-02-20"
  },
  "yil": 433.3,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1472-02-20",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Tarki (Tarku)",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Tarku Samhalligi / Dagistan icin devletler.js'te kunye BULUNAMADI, TDV'de de bu doneme ait mustakil hukum cikarilamadi",
  "not": "🔴 ONERI YOK — VERI DEVLET'e kunye istegi gerekiyor. `sirvansah`a vermek Dagistan'i Sirvan sayardi; olcmeden yapilmaz."
 },
 {
  "yerlesim": "Ağraham burnu",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Tarku Samhalligi / Dagistan icin devletler.js'te kunye BULUNAMADI, TDV'de de bu doneme ait mustakil hukum cikarilamadi",
  "not": "🔴 ONERI YOK — VERI DEVLET'e kunye istegi gerekiyor. `sirvansah`a vermek Dagistan'i Sirvan sayardi; olcmeden yapilmaz."
 },
 {
  "yerlesim": "Revan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1501-07-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` (1340-1431, Azerbaycan-Tebriz 1358) + kunye tarihleri karakoyunlu 1351-1469, akkoyunlu 1340-1514",
  "not": "🟡 DORT PARCALI bolme; 1410 ve 1469 sinirlari ayni kusagin komsu kayitlarindan alindi, sehir ozelinde TDV dogrulamasi yapilmadi."
 },
 {
  "yerlesim": "Gence",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1501-07-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` (1340-1431, Azerbaycan-Tebriz 1358) + kunye tarihleri karakoyunlu 1351-1469, akkoyunlu 1340-1514",
  "not": "🟡 DORT PARCALI bolme; 1410 ve 1469 sinirlari ayni kusagin komsu kayitlarindan alindi, sehir ozelinde TDV dogrulamasi yapilmadi."
 },
 {
  "yerlesim": "Şamahı",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Bakü",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Derbend",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1281-01-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar` Derbend'i hakim sehirler arasinda sayiyor; kunye 861..1538 pencerenin tamamini kapsiyor",
  "not": "🔴 RENK ENGELI (sirvansah)."
 },
 {
  "yerlesim": "Kabala",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Ereş",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Şâbüran",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Mahmudâbâd",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1501-07-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `sirvansahlar`: 'Şemâhî … Bakü … Derbend, Şâbüran, Kabala ve Salyan'; Derbendi kolu 1378-1501; Sah Ismail Ferruh Yesar'i 906/1500'de yendi",
  "not": "🔴 RENK ENGELI: `sirvansah` BOYALAR'da YOK ⇒ bu oneri TEK BASINA uygulanirsa 6 govde HIC CIZILMEZ (uret_petek.py:596 · :3732). ONCE RENK."
 },
 {
  "yerlesim": "Reşt",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1501-07-01"
  },
  "yil": 424.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1371-01-01",
    "renk": "VAR"
   },
   {
    "d": "gilan-kiya",
    "f": "1371-01-01",
    "t": "1501-07-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Kunye `gilan-kiya` (Karkiya Hanedani, Gilan) 1371-01-01..1592-01-01",
  "not": "🟡 Rest'in Karkiya'ya baglanma tarihi TDV'den DOGRULANMADI; kunye baslangici kullanildi."
 },
 {
  "yerlesim": "Isfahan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1503-01-01"
  },
  "yil": 422.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   },
   {
    "d": "timurlu",
    "f": "1387-11-01",
    "t": "1452-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1452-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1503-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "TDV `muzafferiler`: 'Isfahan conquered 1356-57', '1357: İncûları ortadan kaldırdı'",
  "not": "Zincirin 1387 sonrasi KISMI UYDURMA DEGIL: ayni kusagin komsu kayitlarinda (Yezd·Kasan·Save·Simnan…) BIREBIR ayni tarihlerle zaten yaziyor."
 },
 {
  "yerlesim": "Kazvin",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1503-01-01"
  },
  "yil": 422.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   },
   {
    "d": "timurlu",
    "f": "1387-11-01",
    "t": "1452-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1452-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1503-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Zincir, ayni kusagin komsu kayitlarindan (Yezd·Save·Simnan) BIREBIR alindi",
  "not": "🟡 Sehir ozelinde TDV dogrulamasi YAPILMADI; Kazvin'in 1335-1357 arasi Cobanli olmasi da muhtemel — `incu` bas parcasi en zayif halka."
 },
 {
  "yerlesim": "Kum",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1503-01-01"
  },
  "yil": 422.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   },
   {
    "d": "timurlu",
    "f": "1387-11-01",
    "t": "1452-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1452-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1503-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Zincir, ayni kusagin komsu kayitlarindan (Yezd·Save·Simnan) BIREBIR alindi",
  "not": "🟡 Sehir ozelinde TDV dogrulamasi YAPILMADI; Kazvin'in 1335-1357 arasi Cobanli olmasi da muhtemel — `incu` bas parcasi en zayif halka."
 },
 {
  "yerlesim": "Tahran",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1503-01-01"
  },
  "yil": 422.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "incu",
    "f": "1335-12-01",
    "t": "1357-01-01",
    "renk": "VAR"
   },
   {
    "d": "muzafferi",
    "f": "1357-01-01",
    "t": "1387-11-01",
    "renk": "VAR"
   },
   {
    "d": "timurlu",
    "f": "1387-11-01",
    "t": "1452-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1452-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1503-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Zincir, ayni kusagin komsu kayitlarindan (Yezd·Save·Simnan) BIREBIR alindi",
  "not": "🟡 Sehir ozelinde TDV dogrulamasi YAPILMADI; Kazvin'in 1335-1357 arasi Cobanli olmasi da muhtemel — `incu` bas parcasi en zayif halka."
 },
 {
  "yerlesim": "Hemedan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1508-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` bati Iran-Irak sahasi (1340-1431); kuyruk 1508 Safevi ilhaki",
  "not": "🟡 Dort parcali; sinir tarihleri komsu kayitlardan, sehir ozelinde dogrulanmadi."
 },
 {
  "yerlesim": "Kirmanşah",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1508-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` bati Iran-Irak sahasi (1340-1431); kuyruk 1508 Safevi ilhaki",
  "not": "🟡 Dort parcali; sinir tarihleri komsu kayitlardan, sehir ozelinde dogrulanmadi."
 },
 {
  "yerlesim": "Luristan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1353-01-01",
    "renk": "VAR"
   },
   {
    "d": "lur-i-buzurg",
    "f": "1353-01-01",
    "t": "1424-01-01",
    "renk": "VAR"
   },
   {
    "d": "lur-i-kucek",
    "f": "1424-01-01",
    "t": "1508-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Kunyeler: lur-i-buzurg 1155-1424 (Hazaraspiler), lur-i-kucek 1184-1597",
  "not": "🟡 1424 Hazaraspi'nin sonu; Luristan noktasinin hangi Lur'u temsil ettigi veride yazili degil."
 },
 {
  "yerlesim": "Zencan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1508-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` bati Iran-Irak sahasi (1340-1431); kuyruk 1508 Safevi ilhaki",
  "not": "🟡 Dort parcali; sinir tarihleri komsu kayitlardan, sehir ozelinde dogrulanmadi."
 },
 {
  "yerlesim": "Zagros içi",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1340-01-01",
    "renk": "VAR"
   },
   {
    "d": "celayirli",
    "f": "1340-01-01",
    "t": "1410-01-01",
    "renk": "VAR"
   },
   {
    "d": "karakoyunlu",
    "f": "1410-01-01",
    "t": "1469-01-01",
    "renk": "VAR"
   },
   {
    "d": "akkoyunlu",
    "f": "1469-01-01",
    "t": "1508-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `celayirliler` bati Iran-Irak sahasi (1340-1431); kuyruk 1508 Safevi ilhaki",
  "not": "🟡 Dort parcali; sinir tarihleri komsu kayitlardan, sehir ozelinde dogrulanmadi."
 },
 {
  "yerlesim": "Kiş (Kish)",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1508-01-01"
  },
  "yil": 417.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Kis adasi Hurmuz Kralligi sahasi; `hurmuz` kunyesi devletler.js'te YOK (TDV `hurmuz--iran` maddesi CANLI, CLAUDE.md'de kayitli)",
  "not": "🔴 ONERI YOK — VERI DEVLET'e `hurmuz` kunyesi istegi."
 },
 {
  "yerlesim": "Hürmüz Adası",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1510-12-02"
  },
  "yil": 415.0,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Ayni: `hurmuz` kunyesi YOK",
  "not": "🔴 ONERI YOK — kunye istegi."
 },
 {
  "yerlesim": "Kişm (Qeshm)",
  "mevcut": {
   "d": "iran",
   "f": "1281-01-01",
   "t": "1510-12-02"
  },
  "yil": 415.0,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Ayni: `hurmuz` kunyesi YOK",
  "not": "🔴 ONERI YOK — kunye istegi."
 },
 {
  "yerlesim": "Esterâbâd (Gürgân)",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1510-12-02"
  },
  "yil": 415.0,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "ilhanli",
    "f": "1335-12-01",
    "t": "1337-09-09",
    "renk": "VAR"
   },
   {
    "d": "serbedariler",
    "f": "1337-09-09",
    "t": "1386-01-01",
    "renk": "VAR"
   },
   {
    "d": "timurlu",
    "f": "1386-01-01",
    "t": "1507-05-01",
    "renk": "VAR"
   },
   {
    "d": "mazenderan-marasi",
    "f": "1507-05-01",
    "t": "1510-12-02",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `serbedariler`: 'Esterâbâd' hakim sehirler arasinda, 1358'de Emir Veli adina sikke; hanedan 1386'da sona erdi",
  "not": "🟡 1507 sonrasi (Timurlu kunyesi 1507-05-01'de bitiyor) icin Marasi secildi; Ozbek/Seybani de savunulabilir — kunyesi YOK."
 },
 {
  "yerlesim": "Dihistan ovası (Meşhed-i Misriyân)",
  "mevcut": {
   "d": "iran",
   "f": "1507-05-24",
   "t": "1510-12-02"
  },
  "yil": 415.0,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Pencere Seybani (Ozbek) donemidir — 1510-12-02 Merv savasi, Sah Ismail'in Seybani Han'i yendigi gun. `seybani` kunyesi devletler.js'te YOK",
  "not": "🔴 ONERI YOK — VERI DEVLET'e `seybani` kunyesi istegi. Kunye acilinca RENK de gerekir."
 },
 {
  "yerlesim": "Kızılarvat",
  "mevcut": {
   "d": "iran",
   "f": "1507-05-24",
   "t": "1510-12-02"
  },
  "yil": 415.0,
  "yon": "DOGMADAN ONCE",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "Pencere Seybani (Ozbek) donemidir — 1510-12-02 Merv savasi, Sah Ismail'in Seybani Han'i yendigi gun. `seybani` kunyesi devletler.js'te YOK",
  "not": "🔴 ONERI YOK — VERI DEVLET'e `seybani` kunyesi istegi. Kunye acilinca RENK de gerekir."
 },
 {
  "yerlesim": "Budin",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Peçuy",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Estergon",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Eğri",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Kanije",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "İstolni Belgrad",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Peşte",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Yanıkkale (Győr)",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Mohaç",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Kalocsa",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Segedin (Szeged)",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Şimontorna",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Hatvan",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Vaç (Vác)",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Solnok (Szolnok)",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Zigetvar",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Gyula (Göle)",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Tokaj",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Sopron",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Debrecen",
  "mevcut": {
   "d": "macaristan",
   "f": "1918-11-11",
   "t": "1923-10-29"
  },
  "yil": 392.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "macaristan-naiplik",
    "f": "1918-11-11",
    "t": "1923-10-29",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-11-16..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Salyan",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1538-01-01"
  },
  "yil": 387.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1538-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `sirvansahlar` Salyan'i adiyla sayiyor; kunye 861-01-01..1538-01-01 verinin kuyruk sinirıyla (1538-01-01) BIREBIR ayni",
  "not": "🟡 Seki'nin kendi hanlari/melikleri vardi, Sirvansah tabiiyeti donemseldir. 🔴 Ayni RENK ENGELI."
 },
 {
  "yerlesim": "Kuba",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1538-01-01"
  },
  "yil": 387.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1538-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `sirvansahlar` Salyan'i adiyla sayiyor; kunye 861-01-01..1538-01-01 verinin kuyruk sinirıyla (1538-01-01) BIREBIR ayni",
  "not": "🟡 Seki'nin kendi hanlari/melikleri vardi, Sirvansah tabiiyeti donemseldir. 🔴 Ayni RENK ENGELI."
 },
 {
  "yerlesim": "Şeki (Nuha)",
  "mevcut": {
   "d": "iran",
   "f": "1335-12-01",
   "t": "1538-01-01"
  },
  "yil": 387.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "sirvansah",
    "f": "1335-12-01",
    "t": "1538-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "TDV `sirvansahlar` Salyan'i adiyla sayiyor; kunye 861-01-01..1538-01-01 verinin kuyruk sinirıyla (1538-01-01) BIREBIR ayni",
  "not": "🟡 Seki'nin kendi hanlari/melikleri vardi, Sirvansah tabiiyeti donemseldir. 🔴 Ayni RENK ENGELI."
 },
 {
  "yerlesim": "Uddevalla",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Bergen",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Stavanger",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Tønsberg",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Trondheim",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Ålesund",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Molde",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Kristiansund",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Røros",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Sogndal",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Lillehammer",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Hamar",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Skien",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Haugesund",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Östersund (Jämtland)",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Mosjøen",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Bodø",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Tromsø",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Alta",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Vardø",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Reykjavík",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Akureyri",
  "mevcut": {
   "d": "norvec",
   "f": "1281-01-01",
   "t": "1537-01-01"
  },
  "yil": 368.4,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "norvec-kralligi",
    "f": "1281-01-01",
    "t": "1537-01-01",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1537-01-01 — veri donemiyle BIREBIR ayni",
  "not": ""
 },
 {
  "yerlesim": "Cork",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Waterford",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Limerick",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Galway",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Kilkenny",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Wexford",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Sligo",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Athlone",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Donegal",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Tralee",
  "mevcut": {
   "d": "irlanda",
   "f": "1922-12-06",
   "t": "1923-10-29"
  },
  "yil": 319.7,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "irlanda-serbest-devlet",
    "f": "1922-12-06",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1922-12-06..1923-10-29 — BIREBIR",
  "not": ""
 },
 {
  "yerlesim": "Kandehar",
  "mevcut": {
   "d": "iran",
   "f": "1709-04-21",
   "t": "1747-06-20"
  },
  "yil": 178.5,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "galzay",
    "f": "1709-04-21",
    "t": "1738-03-24",
    "renk": "VAR"
   },
   {
    "d": "afsar",
    "f": "1738-03-24",
    "t": "1747-06-20",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "Kunye `galzay` (Hotaki Afgan Devleti) 1709-04-21..1738-01-01 — GUN BIREBIR verinin baslangicidir; Nadir Sah Kandehar'i 1738 Mart'inda aldi",
  "not": "Ikisinin de rengi VAR. 1738-03-24 tarihi kunyenin 1738-01-01 kapanisiyla ~3 ay ayrisiyor; koordinator isterse 1738-01-01 alinir."
 },
 {
  "yerlesim": "Visby (Gotland)",
  "mevcut": {
   "d": "isvec",
   "f": "1281-01-01",
   "t": "1361-07-27"
  },
  "yil": 161.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "isvec-birlik-oncesi",
    "f": "1281-01-01",
    "t": "1361-07-27",
    "renk": "YOK"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1281-01-01..1523-06-06 (Kalmar oncesi)",
  "not": ""
 },
 {
  "yerlesim": "Merv (Mari)",
  "mevcut": {
   "d": "iran",
   "f": "1736-03-08",
   "t": "1785-01-01"
  },
  "yil": 140.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "afsar",
    "f": "1736-03-08",
    "t": "1785-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "Kunye `afsar` 1736-03-08..1796-01-01 pencereyi TAMAMEN kapsiyor; baslangic gunu (1736-03-08 Nadir'in tac giymesi) BIREBIR ayni",
  "not": "Tek parca."
 },
 {
  "yerlesim": "Batum",
  "mevcut": {
   "d": "gurcistan",
   "f": "1918-12-01",
   "t": "1921-03-16"
  },
  "yil": 117.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "gurcistan-demokratik-cumhuriyeti",
    "f": "1918-12-01",
    "t": "1921-03-16",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1918-05-26..1921-03-16",
  "not": ""
 },
 {
  "yerlesim": "Bryansk",
  "mevcut": {
   "d": "lehistan",
   "f": "1356-01-01",
   "t": "1500-08-01"
  },
  "yil": 68.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1356-01-01",
    "t": "1500-08-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Çernigov",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Novgorod-Seversk",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Putivl",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Kursk",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Orel",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Hluhiv",
  "mevcut": {
   "d": "lehistan",
   "f": "1362-01-01",
   "t": "1503-04-02"
  },
  "yil": 66.2,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1362-01-01",
    "t": "1503-04-02",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Kızılarvat",
  "mevcut": {
   "d": "iran",
   "f": "1736-03-08",
   "t": "1860-01-01"
  },
  "yil": 65.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "afsar",
    "f": "1736-03-08",
    "t": "1796-01-01",
    "renk": "VAR"
   },
   {
    "d": "turkmen",
    "f": "1796-01-01",
    "t": "1860-01-01",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "Kunye afsar 1736-1796; `turkmen` (Turkmen Asiret Konfederasyonlari) 1600-1884",
  "not": "🟡 1796 Afsar kunyesinin kapanisi; Kizilarvat'in kime gectigi sehir ozelinde dogrulanmadi. Turkmen kunyesinin rengi VAR."
 },
 {
  "yerlesim": "Smolensk",
  "mevcut": {
   "d": "lehistan",
   "f": "1281-01-01",
   "t": "1514-08-01"
  },
  "yil": 54.9,
  "yon": "DOGMADAN ONCE",
  "oneri": [
   {
    "d": "litvanya-buyuk-dukalik",
    "f": "1281-01-01",
    "t": "1514-08-01",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1253-07-06..1569-07-01 — bu fetihler LUBLIN BIRLIGI ONCESI Litvanya'nindir, Lehistan'in degil",
  "not": ""
 },
 {
  "yerlesim": "Çandernagor",
  "mevcut": {
   "d": "fransa",
   "f": "1816-12-04",
   "t": "1923-10-29"
  },
  "yil": 24.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "fransa-cumhuriyet",
    "f": "1816-12-04",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1792-09-22..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Pondişeri",
  "mevcut": {
   "d": "fransa",
   "f": "1816-12-04",
   "t": "1923-10-29"
  },
  "yil": 24.2,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "fransa-cumhuriyet",
    "f": "1816-12-04",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "KESIN",
  "kaynak": "kunye 1792-09-22..1923-10-29",
  "not": ""
 },
 {
  "yerlesim": "Varşova",
  "mevcut": {
   "d": "lehistan",
   "f": "1806-11-28",
   "t": "1815-06-09"
  },
  "yil": 11.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [],
  "guven": "BULUNAMADI",
  "kaynak": "KUNYE YOK — Varsova Dukaligi (1806-11-28..1815-06-09) icin devletler.js'te karsilik bulunamadi. VERI DEVLET'e kunye istegi.",
  "not": ""
 },
 {
  "yerlesim": "Batum",
  "mevcut": {
   "d": "rusya",
   "f": "1921-03-16",
   "t": "1923-10-29"
  },
  "yil": 4.0,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1921-03-16",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Buhara",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Karşi (Nahşeb)",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Şehrisebz (Kiş)",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Termez",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Hisar",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Külâb (Kulob)",
  "mevcut": {
   "d": "rusya",
   "f": "1920-09-02",
   "t": "1923-10-29"
  },
  "yil": 3.5,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-09-02",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Hîve",
  "mevcut": {
   "d": "rusya",
   "f": "1920-04-26",
   "t": "1923-10-29"
  },
  "yil": 3.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-04-26",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Hazârasp",
  "mevcut": {
   "d": "rusya",
   "f": "1920-04-26",
   "t": "1923-10-29"
  },
  "yil": 3.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-04-26",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Köhne Ürgenç (Gürgenç)",
  "mevcut": {
   "d": "rusya",
   "f": "1920-04-26",
   "t": "1923-10-29"
  },
  "yil": 3.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-04-26",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Yeni Ürgenç",
  "mevcut": {
   "d": "rusya",
   "f": "1920-04-26",
   "t": "1923-10-29"
  },
  "yil": 3.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-04-26",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 },
 {
  "yerlesim": "Küngrat",
  "mevcut": {
   "d": "rusya",
   "f": "1920-04-26",
   "t": "1923-10-29"
  },
  "yil": 3.1,
  "yon": "OLDUKTEN SONRA",
  "oneri": [
   {
    "d": "sovyet-rusya",
    "f": "1920-04-26",
    "t": "1923-10-29",
    "renk": "VAR"
   }
  ],
  "guven": "GEREKCELI",
  "kaynak": "kunye 1917-11-07..1923-10-29. ⚠️ Buhara (1920-09-02) ve Hive (1920-04-26) kayitlari 1920-24 arasi BIÇIMSEL OLARAK bagimsiz Halk Sovyet Cumhuriyetleridir; `sovyet-rusya` en yakin dogru kunye, TAM karsilik degil — ayri kunye acilirsa oraya tasinir.",
  "not": ""
 }
];

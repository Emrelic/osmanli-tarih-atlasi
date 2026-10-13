// ═══════════════════════════════════════════════════════════════════
// YER YAMASI — Litvanya Büyük Dükalığı (1569 ÖNCESİ)
// Oturum NEHİR SÜRTÜNME · sevk 1.MURAT M-2815 · 5 Eylül 2026
//
// SORUN — `makdisu` deseninin aynısı:
//   künye `litvanya-buyuk-dukalik`  1253-07-06 → 1569-07-01
//   künye `polonya-erken`           1320-01-20 → 1569-07-01
//   künye `lehistan`                1569-07-01 → 1795-10-24
//   ⇒ ÜÇÜ DE 1569-07-01'de BULUŞUYOR — tasarım açık ve doğru
//   ⇒ ama veri `lehistan`ı 1569 ÖNCESİNDE 37 DÖNEMDE kullanıyor
//     (Lehistan-Litvanya Birliği HENÜZ KURULMAMIŞKEN)
//
// TDV `polonya` (200; `lehistan` slug'ı YÖNLENDİRME KÜTÜĞÜ, "bk. POLONYA"):
//   1386 Jagiello evliliği bir KİŞİSEL BİRLİK kurdu, ama Polonya ve
//   Litvanya AYRI idarî yapılarını korudu
//   🔴 "1569'da devletin BU İKİ BÜYÜK PARÇASINI bir araya getiren belge"
//   Litvanya doğu topraklarını (Belarus · Ukrayna · Kiev · Volinya ·
//   Podolya) BAĞIMSIZ olarak yönetiyordu
//
// 🟢 VE VERİ ZATEN YARI YARIYA DOĞRUYU BİLİYOR: Kiev · Baturin · Lubnı ·
//    Poltava · Çehrin dönemleri `1362-01-01`de başlıyor — bu MAVİ SULAR
//    savaşıdır, yani LİTVANYA'nın Altın Orda'dan aldığı gün. Tarihi
//    doğru yazmışlar, kimliği yanlış.
//
// 🔴🔴 KAPSAM YALNIZ LİTVANYA — POLONYA TARAFI BLOKE:
//    `polonya-erken` künyesinin `renkler.py`de RENGİ YOK (ölçüldü:
//    BOYALAR 550 anahtar, `polonya-erken` İÇİNDE DEĞİL).
//    ⇒ Yazılsaydı Krakov · Varşova · Poznan · Lublin · Gdansk …
//      BOYANMAZDI = HARİTA DELİĞİ.
//    `litvanya-buyuk-dukalik` ise TANIMLI (#1310ff) ve veride ZATEN
//    8 dönemde kullanılıyor ⇒ bu yama emsalsiz değil.
// ═══════════════════════════════════════════════════════════════════

window.YER_YAMA_LITVANYA = [
  {
    ad: "Vilnius",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1918-02-16", d: "sovyet-rusya" },
      { f: "1918-02-16", t: "1940-08-06", d: "litvanya" },{f:"1940-08-06",t:"1990-03-11",d:"sovyet-rusya",kaynak:"Britannica 'Lithuania' (SSCB'ye ilhak 1940-08)"},{f:"1990-03-11",t:"2000-12-31",d:"litvanya-cumhuriyeti-yeniden",kaynak:"tsv: litvanya-cumhuriyeti-yeniden f=1990-03-11"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Kaunas",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1918-02-16", d: "sovyet-rusya" },
      { f: "1918-02-16", t: "1940-08-06", d: "litvanya" },{f:"1940-08-06",t:"1990-03-11",d:"sovyet-rusya",kaynak:"Britannica 'Lithuania' (SSCB'ye ilhak 1940-08)"},{f:"1990-03-11",t:"2000-12-31",d:"litvanya-cumhuriyeti-yeniden",kaynak:"tsv: litvanya-cumhuriyeti-yeniden f=1990-03-11"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Šiauliai",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1918-02-16", d: "sovyet-rusya" },
      { f: "1918-02-16", t: "1940-08-06", d: "litvanya" },{f:"1940-08-06",t:"1990-03-11",d:"sovyet-rusya",kaynak:"Britannica 'Lithuania' (SSCB'ye ilhak 1940-08)"},{f:"1990-03-11",t:"2000-12-31",d:"litvanya-cumhuriyeti-yeniden",kaynak:"tsv: litvanya-cumhuriyeti-yeniden f=1990-03-11"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Grodno",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Belarus' (Bati Belarus Kasim 1939'da katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"belarus",kaynak:"Britannica 'Belarus'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Minsk",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1793-01-23", d: "lehistan" },
      { f: "1793-01-23", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-25", d: "sovyet-rusya" },{f:"1991-08-25",t:"2000-12-31",d:"belarus",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Polotsk",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1772-08-05", d: "lehistan" },
      { f: "1772-08-05", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-25", d: "sovyet-rusya" },{f:"1991-08-25",t:"2000-12-31",d:"belarus",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Vitebsk",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1772-08-05", d: "lehistan" },
      { f: "1772-08-05", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-25", d: "sovyet-rusya" },{f:"1991-08-25",t:"2000-12-31",d:"belarus",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Brest-Litovsk",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Belarus' (Bati Belarus Kasim 1939'da katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"belarus",kaynak:"Britannica 'Belarus'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Pinsk",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Belarus' (Bati Belarus Kasim 1939'da katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"belarus",kaynak:"Britannica 'Belarus'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Białystok",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1807-07-09", d: "prusya" },
      { f: "1807-07-09", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1918-11-11", d: "sovyet-rusya" },
      { f: "1918-11-11", t: "1939-10-06", d: "polonya" },{f:"1939-10-06",t:"1945-01-17",d:"polonya-genel-hukumeti",kaynak:"Britannica 'Poland'; LoC Poland Country Study"},{f:"1945-01-17",t:"1989-12-31",d:"polonya-halk",kaynak:"Britannica 'Poland'; LoC Poland Country Study"},{f:"1989-12-31",t:"2000-12-31",d:"polonya-iii-cumhuriyet",kaynak:"Britannica 'Poland'; LoC Poland Country Study"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Lutsk (Łuck)",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Ukraine' (Bati Ukrayna Kasim 1939'da Ukrayna SSC'ye katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"ukrayna",kaynak:"Britannica 'Ukraine'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Kovel",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Ukraine' (Bati Ukrayna Kasim 1939'da Ukrayna SSC'ye katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"ukrayna",kaynak:"Britannica 'Ukraine'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Rivne (Równe)",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Ukraine' (Bati Ukrayna Kasim 1939'da Ukrayna SSC'ye katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"ukrayna",kaynak:"Britannica 'Ukraine'"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Kiev",
    s: [
      { f: "1281-01-01", t: "1362-01-01", d: "altinorda" },
      { f: "1362-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1667-02-09", d: "lehistan" },
      { f: "1667-02-09", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-24", d: "sovyet-rusya" },{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Baturin",
    s: [
      { f: "1281-01-01", t: "1362-01-01", d: "altinorda" },
      { f: "1362-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1654-01-08", d: "lehistan" },
      { f: "1654-01-08", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-24", d: "sovyet-rusya" },{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Lubnı",
    s: [
      { f: "1281-01-01", t: "1362-01-01", d: "altinorda" },
      { f: "1362-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1654-01-18", d: "lehistan" },
      { f: "1654-01-18", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-24", d: "sovyet-rusya" },{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Poltava",
    s: [
      { f: "1281-01-01", t: "1362-01-01", d: "altinorda" },
      { f: "1362-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1654-01-18", d: "lehistan" },
      { f: "1654-01-18", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-24", d: "sovyet-rusya" },{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Çehrin (Çigirin)",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1678-07-19", d: "lehistan" },
      { f: "1699-01-26", t: "1793-01-23", d: "lehistan" },
      { f: "1793-01-23", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1991-08-24", d: "sovyet-rusya" },{f:"1991-08-24",t:"2000-12-31",d:"ukrayna",kaynak:"Library of Congress Country Studies / Britannica ilgili ulke maddesi; bagimsizlik ilani gunu devletler dizini f degeri"}
    ],
    kaynak: "polonya"
  },

  {
    ad: "Volodymyr-Volynskyi (Włodzimierz)",
    s: [
      { f: "1281-01-01", t: "1569-07-01", d: "litvanya-buyuk-dukalik" },
      { f: "1569-07-01", t: "1795-10-24", d: "lehistan" },
      { f: "1795-10-24", t: "1917-03-15", d: "rusya" },
      { f: "1917-03-15", t: "1917-11-07", d: "rusya-gecici-hukumet" },
      { f: "1917-11-07", t: "1921-03-18", d: "sovyet-rusya" },
      { f: "1921-03-18", t: "1939-09-17", d: "polonya" },{f:"1939-09-17",t:"1991-12-25",d:"sovyet-rusya",kaynak:"Britannica 'Ukraine' (Bati Ukrayna Kasim 1939'da Ukrayna SSC'ye katildi)"},{f:"1991-12-25",t:"2000-12-31",d:"ukrayna",kaynak:"Britannica 'Ukraine'"}
    ],
    kaynak: "polonya"
  }

];

// ═══════════════════════════════════════════════════════════════════
// DIŞARIDA BIRAKILANLAR — üç grup, üç ayrı sebep
//
// 🔴 ① POLONYA TACI (Krakov · Varşova · Poznan · Lublin · Chełm · Lvov ·
//      Gdansk · Elbing · Torun) — `polonya-erken` DOĞRU kimlik ama
//      RENGİ YOK ⇒ yazılırsa HARİTA DELİĞİ. `renkler.py` işi, ve o
//      dosya bana YASAK. **BLOKE, kusur değil.**
//
// 🟡 ② PODOLYA (Bar · Kamaniçe · Meciboj · Yazlofça) — 15. yüzyılda
//      Litvanya ile Polonya arasında ÇEKİŞMELİ, batı Podolya Taç'a
//      katıldı. Hangisi olduğunu KAYNAKLA ayıramadım. ÖLÇMEDİM.
//
// 🟡 ③ LİVONYA (Riga · Tartu · Pärnu · Cēsis · Daugavpils) — hepsi
//      `1561-11-28`de başlıyor (Vilnius Antlaşması). Livonya ortak
//      Polonya-Litvanya hâkimiyetine girdi; 1561-1569 arası sekiz
//      yıllık bir dilim ve statüsü BİLEŞİK. ÖLÇMEDİM.
// ═══════════════════════════════════════════════════════════════════

// -*- coding: utf-8 -*-
// AVRUPA — GÜN DAYANAKLARI · dönem seviyesinde `kaynak:`
// Oturum: AVRUPA · koordinatör 1.MURAT HÜDAVENDİGAR
// 🔒 data/ DONUK (koşu 7b) — denetim/ altında BEKLİYOR.
// ÜRETİLDİ: node denetim/ARAC-AVRUPA-DAYANAK-URET-0907.js --yaz
//
// 🟢 ÖN KOŞUL ÖLÇÜLDÜ — Ⓑ kuru koşusu (SINAV-DONEM-KAYNAK-0907.py):
//    dönem-içi `kaynak:` `_sahiplik_uygula.py` ile İNİYOR. `js_yaz`
//    sabit alan listesi kullanmıyor (`deger.items()` her anahtarı yazar),
//    node süzgeci kaydın TAMAMINI geçiriyor (`r: r`, izdüşüm YOK).
//    ⇒ `not:`/`bos:` vakasının (sabit `sira` listesi) TERSİ.
//
// KURAL: bir dönemin `kaynak:`ı onun `f:` GÜNÜNÜ dayanaklandırır.
// Pencere başı (1281-01-01) dayanaksız kalır — iddia değil, sınır işareti.
//
// GÜNLER ve DAMGALARI (ayrıntı: denetim/DAYANAK-AVRUPA-0907.json):
//   1917-12-06  Finlandiya'nın bağımsızlık ilanı — Eduskunta bildirgeyi 
//      §②b 🟢 GÜNÜN dayanağı — «Parliament adopted the Declaration on 6 December with 100 votes again
//      zayıflık: 🟡 DEVRALDIM — iki künye de ADIYLA alındı ama HİÇBİRİ OKUNMADI; cümle Wikipedia gövdesin
//   1814-01-14  Kiel Antlaşması — Danimarka Norveç'i İsveç'e bıraktı
//      §②b 🟢 GÜNÜN dayanağı — gövde ÇEKİLİP okundu, üniversite yayını, künye sayfanın kendisinde.
//      zayıflık: 🟢 YOK — bu kaydın dayanağı doğrudan okundu ve kurumsal kimliği doğrulandı. Dört günün E
//
// 🔴 ÇAKIŞMA KORUMASI: kendi yamalarımın (Elba · Dublin · İspanya ·
//    İsveç) dokunduğu noktalar BURADAN yazılmadı — `_sahiplik_uygula.py`
//    onları "içerik farklı" sayıp İKİSİNİ DE atlardı. Sayı: 20
//    Onların dayanağı kendi yamalarına yazılacak (ayrı kalem).

window.YER_YAMA_AVRUPA_DAYANAK_1923 = [

  { ad:"Oslo",
    s:[{f:"1281-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Helsinki",
    s:[{f:"1550-06-12",t:"1809-09-17",d:"isvec"},
       {f:"1809-09-17",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},
       {f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}
    ] },

  { ad:"Bergen",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Stavanger",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Tønsberg",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Kristiansand",
    s:[{f:"1641-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Trondheim",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Ålesund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Molde",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Kristiansund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Røros",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Sogndal",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Lillehammer",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Hamar",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Skien",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Haugesund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Mosjøen",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Bodø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Tromsø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Alta",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

  { ad:"Vardø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec"}
    ] },

];

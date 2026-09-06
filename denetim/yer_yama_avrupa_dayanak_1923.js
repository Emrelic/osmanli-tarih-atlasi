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
//   1905-06-07  İsveç-Norveç birliğinin dağılması — Storting kraliyet ye
//      §②b 🟢 GÜNÜN dayanağı — gövde ÇEKİLİP okundu, günü açıkça veriyor.
//      zayıflık: 🟢 DÜŞÜK — imzalı, editöryal incelemeli, gövde doğrudan okundu. Bağlam ikinci bir aramad
//   1809-09-17  Fredrikshamn (Hamina) Antlaşması — İsveç Finlandiya'yı R
//      §②b 🟡 GÜNÜN dayanağı ama İKİ ÇEKİNCEYLE (aşağıda).
//      zayıflık: 🔴 EN ZAYIFI. prlib.ru (Rusya Cumhurbaşkanlığı Kütüphanesi) GÜVENLİK KONTROLÜNE takıldı 
//   1479-01-20  II. Juan'ın ölümü — Ferdinand Aragon kralı oldu; Kastily
//      §②b 🟢 GÜNÜN dayanağı — ölüm günü ve yeri açıkça veriliyor.
//      zayıflık: 🟡 DEVRALDIM — beş akademik künyenin ikisi seçildi, hiçbiri OKUNMADI; gövde Wikipedia'da
//
// 🔴 ÇAKIŞMA KORUMASI: kendi yamalarımın (Elba · Dublin · İspanya ·
//    İsveç) dokunduğu noktalar BURADAN yazılmadı — `_sahiplik_uygula.py`
//    onları "içerik farklı" sayıp İKİSİNİ DE atlardı. Sayı: 20
//    Onların dayanağı kendi yamalarına yazılacak (ayrı kalem).

window.YER_YAMA_AVRUPA_DAYANAK_1923 = [

  { ad:"Oslo",
    s:[{f:"1281-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Helsinki",
    s:[{f:"1550-06-12",t:"1809-09-17",d:"isvec"},
       {f:"1809-09-17",t:"1917-03-15",d:"rusya",kaynak:"V. V. Pokhlebkin (1995), *Foreign policy of Russia, Russia and the USSR in 1000 years: the names, the dates, the facts*, Moskova: International Relations, ISBN 5-7133-0845-6 — künye ADIYLA alındı."},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1917-12-06",d:"sovyet-rusya"},
       {f:"1917-12-06",t:"1923-10-29",d:"finlandiya",kaynak:"Jussila, Osmo · Hentilä, Seppo · Nevakivi, Jukka (1999), *From Grand Duchy to a Modern State: A Political History of Finland Since 1809*, London: C. Hurst & Co. — ve Manninen, Ohto (1992), *Itsenäistymisen vuodet 1917–1920*, Helsinki: Valtionarkisto (Finlandiya Milli Arşivi)."}
    ] },

  { ad:"Toledo",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Valladolid",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Burgos",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Salamanca",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"León",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Oviedo",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Santander",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Bilbao",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"San Sebastián",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Cuenca",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Badajoz",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Kurtuba (Córdoba)",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Jaén",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Murcia",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Cartagena",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Cádiz",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"A Coruña",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Santiago de Compostela",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Vigo",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Cebelitarık (Gibraltar)",
    s:[{f:"1281-01-01",t:"1462-08-20",d:"granada"},
       {f:"1462-08-20",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1704-08-04",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."},
       {f:"1704-08-04",t:"1923-10-29",enklav:true,d:"ingiltere"}
    ] },

  { ad:"Zaragoza",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Teruel",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Tarragona",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Lleida",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Girona",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Alicante",
    s:[{f:"1281-01-01",t:"1304-08-08",d:"kastilya"},
       {f:"1304-08-08",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Dénia",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Castellón",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Tortosa",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Huelva",
    s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},
       {f:"1479-01-20",t:"1923-10-29",d:"ispanya",kaynak:"Jaime Vicens Vives (1952), *Fernando el Católico: príncipe de Aragón, rey de Sicilia, 1458–1478*, Madrid: Consejo Superior de Investigaciones Científicas — ve Roger Bigelow Merriman (1918), *The Rise of the Spanish Empire in the Old and in the New*, Vol. 2, The Macmillan Company. Künyeler ADIYLA alındı. Gövde: «20 January 1479 … [in] Barcelona», Ferdinand II babasının yerine Aragon kralı oldu."}
    ] },

  { ad:"Bergen",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Stavanger",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Tønsberg",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Kristiansand",
    s:[{f:"1641-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Trondheim",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Ålesund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Molde",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Kristiansund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Røros",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Sogndal",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Lillehammer",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Hamar",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Skien",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Haugesund",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Mosjøen",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Bodø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Tromsø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Alta",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

  { ad:"Vardø",
    s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},
       {f:"1537-01-01",t:"1814-01-14",d:"danimarka"},
       {f:"1814-01-14",t:"1905-06-07",d:"isvec",kaynak:"nordics.info / *The New Nordic Lexicon* — AARHUS ÜNİVERSİTESİ (Danimarka) yayını: «The Treaty of Kiel between Denmark and Sweden on 14th January 1814 decreed that Norway should be transferred from the Danish to the Swedish monarch»"},
       {f:"1905-06-07",t:"1923-10-29",d:"norvec",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, İMZALI: Edward P. Keleher · John Quinn Imholte, 2021): «As a result, the Storting declared on June 7 that royal power had ceased to function.»"}
    ] },

];

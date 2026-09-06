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
//   1547-01-16  IV. İvan'ın çar olarak taç giymesi — Moskova Büyük Knezl
//      §②b 🟢 GÜNÜN dayanağı — gövde günü açıkça veriyor, ve gövde ÇEKİLİP okundu.
//      zayıflık: EBSCO girdisi İMZASIZ (öteki EBSCO kaydımda yazar vardı: Joseph P. Byrne). Editöryal inc
//   1792-09-22  Fransız Birinci Cumhuriyeti'nin ilk tam günü — Cumhuriye
//      §②b 🟢 GÜNÜN dayanağı — ama aşağıdaki AYRIMLA birlikte okunmalı.
//      zayıflık: 🟡 DEVRALDIM — Doyle'un kitabı OKUNMADI; künye Wikipedia'nın kaynakçasından alındı. §4: 
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

  { ad:"Paris",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Lyon",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Marsilya",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Bordo",
    s:[{f:"1281-01-01",t:"1451-06-30",d:"ingiltere"},
       {f:"1451-06-30",t:"1452-10-23",d:"fransa"},
       {f:"1452-10-23",t:"1453-10-19",d:"ingiltere"},
       {f:"1453-10-19",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

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

  { ad:"Moskova",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Novgorod",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Smolensk",
    s:[{f:"1281-01-01",t:"1514-08-01",d:"litvanya-buyuk-dukalik"},
       {f:"1514-08-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1611-06-13",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1611-06-13",t:"1654-10-03",d:"lehistan"},
       {f:"1654-10-03",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Tula",
    s:[{f:"1281-01-01",t:"1521-01-01",d:"ryazan"},
       {f:"1521-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Vologda",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Bastia (Korsika)",
    s:[{f:"1281-01-01",t:"1768-05-15",d:"ceneviz"},
       {f:"1768-05-15",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Ayacyo (Ajaccio)",
    s:[{f:"1281-01-01",t:"1768-05-15",d:"ceneviz"},
       {f:"1768-05-15",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Rennes",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Nantes",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Brest",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Quimper",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Vannes",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Saint-Malo",
    s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},
       {f:"1532-08-13",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Rouen",
    s:[{f:"1281-01-01",t:"1419-01-19",d:"fransa"},
       {f:"1419-01-19",t:"1449-10-29",d:"ingiltere"},
       {f:"1449-10-29",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Caen",
    s:[{f:"1281-01-01",t:"1417-09-04",d:"fransa"},
       {f:"1417-09-04",t:"1450-06-24",d:"ingiltere"},
       {f:"1450-06-24",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Cherbourg",
    s:[{f:"1281-01-01",t:"1418-09-29",d:"fransa"},
       {f:"1418-09-29",t:"1450-08-12",d:"ingiltere"},
       {f:"1450-08-12",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Le Havre",
    s:[{f:"1517-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Calais",
    s:[{f:"1281-01-01",t:"1347-08-03",d:"fransa"},
       {f:"1347-08-03",t:"1558-01-07",d:"ingiltere"},
       {f:"1558-01-07",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Amiens",
    s:[{f:"1281-01-01",t:"1435-09-21",d:"fransa"},
       {f:"1435-09-21",t:"1477-01-05",d:"burgonya"},
       {f:"1477-01-05",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Arras",
    s:[{f:"1281-01-01",t:"1384-01-30",d:"fransa"},
       {f:"1384-01-30",t:"1482-03-27",d:"burgonya"},
       {f:"1482-03-27",t:"1516-01-23",d:"almanya"},
       {f:"1516-01-23",t:"1659-11-07",d:"ispanya"},
       {f:"1659-11-07",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Lille",
    s:[{f:"1281-01-01",t:"1369-06-19",d:"fransa"},
       {f:"1369-06-19",t:"1482-03-27",d:"burgonya"},
       {f:"1482-03-27",t:"1516-01-23",d:"almanya"},
       {f:"1516-01-23",t:"1668-05-02",d:"ispanya"},
       {f:"1668-05-02",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Reims",
    s:[{f:"1281-01-01",t:"1420-05-21",d:"fransa"},
       {f:"1420-05-21",t:"1429-07-16",d:"ingiltere"},
       {f:"1429-07-16",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Troyes",
    s:[{f:"1281-01-01",t:"1420-05-21",d:"fransa"},
       {f:"1420-05-21",t:"1429-07-10",d:"ingiltere"},
       {f:"1429-07-10",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Orléans",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Tours",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Bourges",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Angers",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Le Mans",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Poitiers",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Clermont-Ferrand",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Périgueux",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Cahors",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Toulouse",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"La Rochelle",
    s:[{f:"1281-01-01",t:"1360-10-24",d:"fransa"},
       {f:"1360-10-24",t:"1372-09-08",d:"ingiltere"},
       {f:"1372-09-08",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Limoges",
    s:[{f:"1281-01-01",t:"1360-10-24",d:"fransa"},
       {f:"1360-10-24",t:"1370-01-01",d:"ingiltere"},
       {f:"1370-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Bayonne",
    s:[{f:"1281-01-01",t:"1451-08-20",d:"ingiltere"},
       {f:"1451-08-20",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Pau",
    s:[{f:"1281-01-01",t:"1479-01-01",d:"fransa"},
       {f:"1479-01-01",t:"1620-10-19",d:"navarra"},
       {f:"1620-10-19",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Dijon",
    s:[{f:"1281-01-01",t:"1477-01-05",d:"burgonya"},
       {f:"1477-01-05",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Besançon",
    s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},
       {f:"1516-01-23",t:"1678-09-17",d:"ispanya"},
       {f:"1678-09-17",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Metz",
    s:[{f:"1281-01-01",t:"1552-04-18",d:"almanya"},
       {f:"1552-04-18",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."},
       {f:"1871-05-10",t:"1919-06-28",d:"almanya"},
       {f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}
    ] },

  { ad:"Nancy",
    s:[{f:"1281-01-01",t:"1766-02-23",d:"almanya"},
       {f:"1766-02-23",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Strazburg",
    s:[{f:"1281-01-01",t:"1681-09-30",d:"almanya"},
       {f:"1681-09-30",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."},
       {f:"1871-05-10",t:"1919-06-28",d:"almanya"},
       {f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}
    ] },

  { ad:"Colmar",
    s:[{f:"1281-01-01",t:"1648-10-24",d:"almanya"},
       {f:"1648-10-24",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."},
       {f:"1871-05-10",t:"1919-06-28",d:"almanya"},
       {f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}
    ] },

  { ad:"Aix-en-Provence",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Toulon",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Grenoble",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Avignon",
    s:[{f:"1281-01-01",t:"1348-06-09",d:"fransa"},
       {f:"1348-06-09",t:"1791-09-14",d:"papalik"},
       {f:"1791-09-14",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Montpellier",
    s:[{f:"1281-01-01",t:"1349-01-01",d:"aragon"},
       {f:"1349-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Narbonne",
    s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
    ] },

  { ad:"Perpignan",
    s:[{f:"1281-01-01",t:"1463-01-01",d:"aragon"},
       {f:"1463-01-01",t:"1493-01-19",d:"fransa"},
       {f:"1493-01-19",t:"1659-11-07",d:"ispanya"},
       {f:"1659-11-07",t:"1792-09-22",d:"fransa"},
       {f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet",kaynak:"William Doyle, *The Oxford History of the French Revolution* (2. baskı), Oxford University Press, 1990 — künye ADIYLA alındı."}
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

  { ad:"Petsamo (Peçenga)",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1920-10-14",d:"sovyet-rusya"},
       {f:"1920-10-14",t:"1923-10-29",d:"finlandiya"}
    ] },

  { ad:"Kola",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kandalakşa",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Ryazan",
    s:[{f:"1281-01-01",t:"1521-01-01",d:"ryazan"},
       {f:"1521-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Pskov",
    s:[{f:"1281-01-01",t:"1348-01-01",d:"novgorod"},
       {f:"1348-01-01",t:"1510-01-13",d:"pskov"},
       {f:"1510-01-13",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Staraya Russa",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Eski Ladoga",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Oreşek (Nöteborg)",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1617-02-27",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1617-02-27",t:"1702-10-22",d:"isvec"},
       {f:"1702-10-22",t:"1917-03-15",d:"rusya"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Tihvin",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Belozersk",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kirillov",
    s:[{f:"1397-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kargopol",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Solovki (Solovetsky)",
    s:[{f:"1436-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kem",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Onega",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Yaroslavl",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Rostov Veliki",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Uglich",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Tver",
    s:[{f:"1281-01-01",t:"1485-09-12",d:"tver"},
       {f:"1485-09-12",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Torjok",
    s:[{f:"1281-01-01",t:"1485-09-12",d:"tver"},
       {f:"1485-09-12",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Velikiye Luki",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kaluga",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kolomna",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Kaşira",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Serpuhov",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Mojaysk",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Volokolamsk",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Dmitrov",
    s:[{f:"1281-01-01",t:"1325-01-01",d:"altinorda"},
       {f:"1325-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Sergiyev Posad",
    s:[{f:"1337-01-01",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Lovozero (Luyavr)",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

  { ad:"Varzuga",
    s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},
       {f:"1478-01-15",t:"1547-01-16",d:"moskova"},
       {f:"1547-01-16",t:"1917-03-15",d:"rusya",kaynak:"EBSCO Research Starters (editöryal incelemeli akademik özet, 2019): «Ivan Vasilyevich, Grand Duke Ivan IV of the Grand Duchy of Muscovy, was crowned czar of all Russia on January 16, 1547.»"},
       {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
       {f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}
    ] },

];

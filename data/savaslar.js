// ============================================================================
// SAVAŞ / ANTLAŞMA / SAVAŞ SERİSİ TABLOLARI
// SAVASLAR   : tekil muharebeler  {t, ad, taraf, sonuc, seri}
// ANTLASMALAR: barış ve düzenleme metinleri {t, ad, taraf, ozet}
// SERILER    : ülkeler arası uzun savaş dizileri {id, ad, aralik, ozet}
// sonuc: zafer | yenilgi | belirsiz   (Osmanlı açısından)
// Satırlar başlık düzeyindedir; ayrıntılar sonraki fazlarda doldurulacak.
// ============================================================================
window.SERILER = [
{ id:"bizans",   ad:"Osmanlı-Bizans mücadelesi",        aralik:"1302–1461", ozet:"Koyunhisar'dan Trabzon'un düşüşüne: Bizans dünyasının tasfiyesi" },
{ id:"hacli",    ad:"Haçlı seferleri savaşları",        aralik:"1366–1448", ozet:"Balkan fetihlerine karşı düzenlenen Haçlı orduları" },
{ id:"venedik",  ad:"Osmanlı-Venedik savaşları",        aralik:"1463–1718", ozet:"Ege ve Doğu Akdeniz'de yedi büyük savaş" },
{ id:"memluk",   ad:"Osmanlı-Memlûk savaşları",         aralik:"1485–1517", ozet:"Çukurova çekişmesinden Mısır'ın fethine" },
{ id:"safevi",   ad:"Osmanlı-Safevî/İran savaşları",    aralik:"1514–1639", ozet:"Çaldıran'dan Kasr-ı Şirin'e doğu cephesi" },
{ id:"habsburg", ad:"Osmanlı-Habsburg savaşları",       aralik:"1526–1791", ozet:"Macaristan ve Orta Avrupa mücadelesi" },
{ id:"lehistan", ad:"Osmanlı-Lehistan savaşları",       aralik:"1620–1699", ozet:"Hotin'den Podolya'nın kaybına" },
{ id:"rus",      ad:"Osmanlı-Rus savaşları",            aralik:"1568–1918", ozet:"Üç asırda on iki savaş: kuzey cephesinin çöküşü" },
{ id:"yunan",    ad:"Osmanlı-Yunan savaşları",          aralik:"1821–1922", ozet:"Mora isyanından Büyük Taarruz'a" },
{ id:"italya",   ad:"Trablusgarp Savaşı",               aralik:"1911–1912", ozet:"İtalya'nın Libya'yı işgali" },
{ id:"balkan",   ad:"Balkan Savaşları",                 aralik:"1912–1913", ozet:"Rumeli'nin kaybı ve Edirne'nin geri alınışı" },
{ id:"cihan",    ad:"I. Dünya Savaşı cepheleri",        aralik:"1914–1918", ozet:"Çanakkale, Kafkas, Irak, Filistin, Galiçya" },
{ id:"istiklal", ad:"Millî Mücadele",                   aralik:"1919–1922", ozet:"İşgale karşı bağımsızlık savaşı" }
];

window.SAVASLAR = [
{ t:"1302-07-27", ad:"Koyunhisar (Bapheus)",      taraf:"Bizans",            sonuc:"zafer",   seri:"bizans" },
{ t:"1371-09-26", ad:"Çirmen",                    taraf:"Sırp beyleri",      sonuc:"zafer",   seri:"hacli" },
{ t:"1389-06-15", ad:"I. Kosova",                 taraf:"Balkan ittifakı",   sonuc:"zafer",   seri:"hacli" },
{ t:"1396-09-25", ad:"Niğbolu",                   taraf:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli" },
{ t:"1402-07-28", ad:"Ankara",                    taraf:"Timur",             sonuc:"yenilgi", seri:"" },
{ t:"1444-11-10", ad:"Varna",                     taraf:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli" },
{ t:"1448-10-17", ad:"II. Kosova",                taraf:"Macar-Haçlı ordusu",sonuc:"zafer",   seri:"hacli" },
{ t:"1453-05-29", ad:"İstanbul kuşatması",        taraf:"Bizans",            sonuc:"zafer",   seri:"bizans" },
{ t:"1473-08-11", ad:"Otlukbeli",                 taraf:"Akkoyunlu",         sonuc:"zafer",   seri:"" },
{ t:"1480-08-11", ad:"Otranto çıkarması",         taraf:"Napoli",            sonuc:"belirsiz",seri:"venedik" },
{ t:"1514-08-23", ad:"Çaldıran",                  taraf:"Safevî",            sonuc:"zafer",   seri:"safevi" },
{ t:"1516-08-24", ad:"Mercidabık",                taraf:"Memlûk",            sonuc:"zafer",   seri:"memluk" },
{ t:"1517-01-22", ad:"Ridaniye",                  taraf:"Memlûk",            sonuc:"zafer",   seri:"memluk" },
{ t:"1526-08-29", ad:"Mohaç",                     taraf:"Macaristan",        sonuc:"zafer",   seri:"habsburg" },
{ t:"1529-09-27", ad:"I. Viyana Kuşatması",       taraf:"Habsburg",          sonuc:"belirsiz",seri:"habsburg" },
{ t:"1538-09-28", ad:"Preveze (deniz)",           taraf:"Haçlı donanması",   sonuc:"zafer",   seri:"venedik" },
{ t:"1571-10-07", ad:"İnebahtı (deniz)",          taraf:"Kutsal İttifak",    sonuc:"yenilgi", seri:"venedik" },
{ t:"1596-10-26", ad:"Haçova",                    taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg" },
{ t:"1600-10-22", ad:"Kanije kuşatması",          taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg" },
{ t:"1663-09-24", ad:"Uyvar kuşatması",           taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg" },
{ t:"1683-09-12", ad:"II. Viyana Kuşatması",      taraf:"Habsburg-Lehistan", sonuc:"yenilgi", seri:"habsburg" },
{ t:"1711-07-21", ad:"Prut",                      taraf:"Rusya",             sonuc:"zafer",   seri:"rus" },
{ t:"1717-08-18", ad:"Belgrad (1717)",            taraf:"Habsburg",          sonuc:"yenilgi", seri:"habsburg" },
{ t:"1770-07-06", ad:"Çeşme (deniz)",             taraf:"Rusya",             sonuc:"yenilgi", seri:"rus" },
{ t:"1788-12-17", ad:"Özi savunması",             taraf:"Rusya",             sonuc:"yenilgi", seri:"rus" },
{ t:"1827-10-20", ad:"Navarin (deniz)",           taraf:"İng-Fra-Rus filosu",sonuc:"yenilgi", seri:"yunan" },
{ t:"1853-10-04", ad:"Kırım Savaşı",              taraf:"Rusya",             sonuc:"zafer",   seri:"rus" },
{ t:"1877-04-24", ad:"93 Harbi",                  taraf:"Rusya",             sonuc:"yenilgi", seri:"rus" },
{ t:"1897-05-17", ad:"Dömeke",                    taraf:"Yunanistan",        sonuc:"zafer",   seri:"yunan" },
{ t:"1911-09-29", ad:"Trablusgarp Savaşı",        taraf:"İtalya",            sonuc:"yenilgi", seri:"italya" },
{ t:"1912-10-08", ad:"I. Balkan Savaşı",          taraf:"Balkan ittifakı",   sonuc:"yenilgi", seri:"balkan" },
{ t:"1913-07-21", ad:"II. Balkan Savaşı (Edirne)",taraf:"Bulgaristan",       sonuc:"zafer",   seri:"balkan" },
{ t:"1915-03-18", ad:"Çanakkale",                 taraf:"İngiltere-Fransa",  sonuc:"zafer",   seri:"cihan" },
{ t:"1916-04-29", ad:"Kûtülamâre",                taraf:"İngiltere",         sonuc:"zafer",   seri:"cihan" },
{ t:"1917-03-11", ad:"Bağdat'ın düşüşü",          taraf:"İngiltere",         sonuc:"yenilgi", seri:"cihan" },
{ t:"1917-12-09", ad:"Kudüs'ün düşüşü",           taraf:"İngiltere",         sonuc:"yenilgi", seri:"cihan" },
{ t:"1921-09-13", ad:"Sakarya",                   taraf:"Yunanistan",        sonuc:"zafer",   seri:"istiklal" },
{ t:"1922-08-30", ad:"Büyük Taarruz",             taraf:"Yunanistan",        sonuc:"zafer",   seri:"istiklal" }
];

window.ANTLASMALAR = [
{ t:"1479-01-25", ad:"İstanbul (Venedik)",   taraf:"Venedik",          ozet:"Arnavutluk ve İşkodra Osmanlı'da; 16 yıllık savaş bitti" },
{ t:"1555-05-29", ad:"Amasya",               taraf:"Safevî",           ozet:"İlk resmî doğu sınırı; Irak Osmanlı'da" },
{ t:"1606-11-11", ad:"Zitvatorok",           taraf:"Habsburg",         ozet:"Protokolde eşitlik; haraç kalktı" },
{ t:"1639-05-17", ad:"Kasr-ı Şirin",         taraf:"Safevî",           ozet:"Bugünkü İran sınırının temeli" },
{ t:"1672-10-18", ad:"Bucaş",                taraf:"Lehistan",         ozet:"Podolya katıldı; en geniş sınırlar" },
{ t:"1699-01-26", ad:"Karlofça",             taraf:"Kutsal İttifak",   ozet:"Macaristan, Mora, Podolya kaybedildi" },
{ t:"1711-07-21", ad:"Prut",                 taraf:"Rusya",            ozet:"Azak geri alındı" },
{ t:"1718-07-21", ad:"Pasarofça",            taraf:"Habsburg-Venedik", ozet:"Belgrad kaybı; Mora geri; Lâle Devri" },
{ t:"1739-09-18", ad:"Belgrad",              taraf:"Habsburg-Rusya",   ozet:"Belgrad geri alındı" },
{ t:"1774-07-21", ad:"Küçük Kaynarca",       taraf:"Rusya",            ozet:"Kırım'a 'bağımsızlık'; Karadeniz'de Rusya" },
{ t:"1812-05-28", ad:"Bükreş",               taraf:"Rusya",            ozet:"Besarabya kaybedildi" },
{ t:"1829-09-14", ad:"Edirne",               taraf:"Rusya",            ozet:"Tuna deltası kaybı; Yunanistan yolu" },
{ t:"1830-02-03", ad:"Londra Protokolü",     taraf:"İng-Fra-Rus",      ozet:"Bağımsız Yunanistan tanındı" },
{ t:"1856-03-30", ad:"Paris",                taraf:"Avrupa devletleri",ozet:"Osmanlı, Avrupa hukuk ailesine kabul edildi" },
{ t:"1878-07-13", ad:"Berlin",               taraf:"Büyük devletler",  ozet:"Balkanlar'ın büyük tasfiyesi" },
{ t:"1912-10-18", ad:"Uşi",                  taraf:"İtalya",           ozet:"Libya ve Oniki Ada kaybı" },
{ t:"1913-05-30", ad:"Londra",               taraf:"Balkan devletleri",ozet:"Midye-Enez hattı; Rumeli'nin kaybı" },
{ t:"1918-10-30", ad:"Mondros Mütarekesi",   taraf:"İtilaf devletleri",ozet:"Fiilî teslimiyet; işgaller başladı" },
{ t:"1920-08-10", ad:"Sevr",                 taraf:"İtilaf devletleri",ozet:"Uygulanamayan paylaşım projesi" },
{ t:"1921-10-13", ad:"Kars",                 taraf:"Kafkas cumhuriyetleri", ozet:"Bugünkü doğu sınırı" },
{ t:"1923-07-24", ad:"Lozan",                taraf:"İtilaf devletleri",ozet:"Yeni Türkiye'nin tanınması" }
];

// ============================================================================
// SAVAŞ / ANTLAŞMA / SAVAŞ SERİSİ / SEFER TABLOLARI
// SAVASLAR   : tekil muharebeler {t, ad, taraf, sonuc, seri, lat, lon}
//              lat/lon: muharebe yeri (haritada ⚔ işaretiyle ~2 yıl gösterilir)
// ANTLASMALAR: {t, ad, taraf, ozet}
// SERILER    : ülkeler arası savaş dizileri {id, ad, aralik, ozet}
// SEFERLER   : ordu/donanma hareketleri {ad, f, t, yol:[[lon,lat],...]}
//              (haritada f-t aralığında ok olarak çizilir)
// sonuc: zafer | yenilgi | belirsiz (Osmanlı açısından)
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
{ t:"1302-07-27", ad:"Koyunhisar (Bapheus)",      taraf:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:40.72, lon:29.85 },
{ t:"1329-06-10", ad:"Pelekanon (Maltepe)",       taraf:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:40.92, lon:29.15 },
{ t:"1364-07-01", ad:"Sırpsındığı",               taraf:"Sırp-Macar ordusu", sonuc:"zafer",   seri:"hacli",   lat:41.55, lon:26.35 },
{ t:"1371-09-26", ad:"Çirmen",                    taraf:"Sırp beyleri",      sonuc:"zafer",   seri:"hacli",   lat:41.72, lon:26.20 },
{ t:"1388-08-27", ad:"Bileća",                    taraf:"Bosna",             sonuc:"yenilgi", seri:"hacli",   lat:42.87, lon:18.43 },
{ t:"1389-06-15", ad:"I. Kosova",                 taraf:"Balkan ittifakı",   sonuc:"zafer",   seri:"hacli",   lat:42.63, lon:21.12 },
{ t:"1395-05-17", ad:"Rovine",                    taraf:"Eflak",             sonuc:"belirsiz",seri:"hacli",   lat:44.85, lon:24.87 },
{ t:"1396-09-25", ad:"Niğbolu",                   taraf:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli",   lat:43.70, lon:24.90 },
{ t:"1402-07-28", ad:"Ankara",                    taraf:"Timur",             sonuc:"yenilgi", seri:"",        lat:40.10, lon:32.95 },
{ t:"1416-05-29", ad:"Gelibolu (deniz)",          taraf:"Venedik",           sonuc:"yenilgi", seri:"venedik", lat:40.35, lon:26.60 },
{ t:"1443-11-01", ad:"İzladi",                    taraf:"Macar-Haçlı ordusu",sonuc:"yenilgi", seri:"hacli",   lat:42.75, lon:23.90 },
{ t:"1444-11-10", ad:"Varna",                     taraf:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli",   lat:43.22, lon:27.90 },
{ t:"1448-10-17", ad:"II. Kosova",                taraf:"Macar-Haçlı ordusu",sonuc:"zafer",   seri:"hacli",   lat:42.63, lon:21.12 },
{ t:"1453-05-29", ad:"İstanbul kuşatması",        taraf:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:41.01, lon:28.95 },
{ t:"1473-08-11", ad:"Otlukbeli",                 taraf:"Akkoyunlu",         sonuc:"zafer",   seri:"",        lat:39.97, lon:40.00 },
{ t:"1480-08-11", ad:"Otranto çıkarması",         taraf:"Napoli",            sonuc:"belirsiz",seri:"venedik", lat:40.15, lon:18.49 },
{ t:"1514-08-23", ad:"Çaldıran",                  taraf:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:39.09, lon:43.91 },
{ t:"1516-08-24", ad:"Mercidabık",                taraf:"Memlûk",            sonuc:"zafer",   seri:"memluk",  lat:36.60, lon:37.00 },
{ t:"1517-01-22", ad:"Ridaniye",                  taraf:"Memlûk",            sonuc:"zafer",   seri:"memluk",  lat:30.06, lon:31.28 },
{ t:"1526-08-29", ad:"Mohaç",                     taraf:"Macaristan",        sonuc:"zafer",   seri:"habsburg",lat:45.94, lon:18.64 },
{ t:"1529-09-27", ad:"I. Viyana Kuşatması",       taraf:"Habsburg",          sonuc:"belirsiz",seri:"habsburg",lat:48.21, lon:16.37 },
{ t:"1538-09-28", ad:"Preveze (deniz)",           taraf:"Haçlı donanması",   sonuc:"zafer",   seri:"venedik", lat:38.95, lon:20.75 },
{ t:"1565-05-18", ad:"Malta kuşatması",           taraf:"Saint Jean",        sonuc:"yenilgi", seri:"venedik", lat:35.90, lon:14.42 },
{ t:"1571-10-07", ad:"İnebahtı (deniz)",          taraf:"Kutsal İttifak",    sonuc:"yenilgi", seri:"venedik", lat:38.25, lon:21.30 },
{ t:"1578-08-09", ad:"Çıldır",                    taraf:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:41.13, lon:43.13 },
{ t:"1583-05-09", ad:"Meşaleler Savaşı",          taraf:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:41.05, lon:49.20 },
{ t:"1596-10-26", ad:"Haçova",                    taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:47.82, lon:20.72 },
{ t:"1600-10-22", ad:"Kanije kuşatması",          taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:46.45, lon:16.99 },
{ t:"1663-09-24", ad:"Uyvar kuşatması",           taraf:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:47.99, lon:18.16 },
{ t:"1683-09-12", ad:"II. Viyana Kuşatması",      taraf:"Habsburg-Lehistan", sonuc:"yenilgi", seri:"habsburg",lat:48.21, lon:16.37 },
{ t:"1711-07-21", ad:"Prut",                      taraf:"Rusya",             sonuc:"zafer",   seri:"rus",     lat:46.48, lon:28.10 },
{ t:"1717-08-18", ad:"Belgrad (1717)",            taraf:"Habsburg",          sonuc:"yenilgi", seri:"habsburg",lat:44.82, lon:20.46 },
{ t:"1770-07-06", ad:"Çeşme (deniz)",             taraf:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:38.32, lon:26.30 },
{ t:"1788-12-17", ad:"Özi savunması",             taraf:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:46.62, lon:31.54 },
{ t:"1827-10-20", ad:"Navarin (deniz)",           taraf:"İng-Fra-Rus filosu",sonuc:"yenilgi", seri:"yunan",   lat:36.91, lon:21.68 },
{ t:"1853-10-04", ad:"Kırım Savaşı",              taraf:"Rusya",             sonuc:"zafer",   seri:"rus",     lat:44.60, lon:33.53 },
{ t:"1877-04-24", ad:"93 Harbi (Plevne)",         taraf:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:43.41, lon:24.62 },
{ t:"1897-05-17", ad:"Dömeke",                    taraf:"Yunanistan",        sonuc:"zafer",   seri:"yunan",   lat:39.05, lon:22.55 },
{ t:"1911-09-29", ad:"Trablusgarp Savaşı",        taraf:"İtalya",            sonuc:"yenilgi", seri:"italya",  lat:32.90, lon:13.19 },
{ t:"1912-10-08", ad:"I. Balkan Savaşı",          taraf:"Balkan ittifakı",   sonuc:"yenilgi", seri:"balkan",  lat:41.40, lon:27.35 },
{ t:"1913-07-21", ad:"II. Balkan Savaşı (Edirne)",taraf:"Bulgaristan",       sonuc:"zafer",   seri:"balkan",  lat:41.68, lon:26.56 },
{ t:"1915-03-18", ad:"Çanakkale",                 taraf:"İngiltere-Fransa",  sonuc:"zafer",   seri:"cihan",   lat:40.15, lon:26.28 },
{ t:"1916-04-29", ad:"Kûtülamâre",                taraf:"İngiltere",         sonuc:"zafer",   seri:"cihan",   lat:32.51, lon:45.82 },
{ t:"1917-03-11", ad:"Bağdat'ın düşüşü",          taraf:"İngiltere",         sonuc:"yenilgi", seri:"cihan",   lat:33.34, lon:44.36 },
{ t:"1917-12-09", ad:"Kudüs'ün düşüşü",           taraf:"İngiltere",         sonuc:"yenilgi", seri:"cihan",   lat:31.78, lon:35.23 },
{ t:"1921-09-13", ad:"Sakarya",                   taraf:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:39.55, lon:31.98 },
{ t:"1922-08-30", ad:"Büyük Taarruz (Dumlupınar)",taraf:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:38.86, lon:29.98 }
];

window.ANTLASMALAR = [
{ t:"1444-06-12", ad:"Edirne-Segedin",       taraf:"Macaristan-Sırbistan", ozet:"On yıllık barış; Sırbistan iade edildi" },
{ t:"1479-01-25", ad:"İstanbul (Venedik)",   taraf:"Venedik",          ozet:"Arnavutluk ve İşkodra Osmanlı'da; 16 yıllık savaş bitti" },
{ t:"1555-05-29", ad:"Amasya",               taraf:"Safevî",           ozet:"İlk resmî doğu sınırı; Irak Osmanlı'da" },
{ t:"1590-03-21", ad:"Ferhad Paşa (İstanbul)",taraf:"Safevî",          ozet:"Tebriz, Karabağ, Şirvan ve Gürcistan Osmanlı'da — doğuda en geniş sınır" },
{ t:"1606-11-11", ad:"Zitvatorok",           taraf:"Habsburg",         ozet:"Protokolde eşitlik; haraç kalktı" },
{ t:"1612-11-20", ad:"Nasuh Paşa",           taraf:"Safevî",           ozet:"1590 kazanımları iade edildi; 1555 sınırına dönüş" },
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
{ t:"1838-08-16", ad:"Balta Limanı",         taraf:"İngiltere",        ozet:"Serbest ticaret; tekellerin kaldırılışı" },
{ t:"1856-03-30", ad:"Paris",                taraf:"Avrupa devletleri",ozet:"Osmanlı, Avrupa hukuk ailesine kabul edildi" },
{ t:"1878-07-13", ad:"Berlin",               taraf:"Büyük devletler",  ozet:"Balkanlar'ın büyük tasfiyesi" },
{ t:"1912-10-18", ad:"Uşi",                  taraf:"İtalya",           ozet:"Libya ve Oniki Ada kaybı" },
{ t:"1913-05-30", ad:"Londra",               taraf:"Balkan devletleri",ozet:"Midye-Enez hattı; Rumeli'nin kaybı" },
{ t:"1918-10-30", ad:"Mondros Mütarekesi",   taraf:"İtilaf devletleri",ozet:"Fiilî teslimiyet; işgaller başladı" },
{ t:"1920-08-10", ad:"Sevr",                 taraf:"İtilaf devletleri",ozet:"Uygulanamayan paylaşım projesi" },
{ t:"1921-10-13", ad:"Kars",                 taraf:"Kafkas cumhuriyetleri", ozet:"Bugünkü doğu sınırı" },
{ t:"1923-07-24", ad:"Lozan",                taraf:"İtilaf devletleri",ozet:"Yeni Türkiye'nin tanınması" }
];

// Sefer güzergâhları (haritada ok olarak çizilir; [lon, lat] dizileri)
window.SEFERLER = [
{ ad:"Kosova seferi (1389)",        f:"1389-03-01", t:"1389-08-01", yol:[[26.6,41.7],[23.3,42.0],[21.9,42.3],[21.12,42.63]] },
{ ad:"Niğbolu seferi (1396)",       f:"1396-07-01", t:"1396-11-01", yol:[[26.6,41.7],[25.6,42.1],[24.9,43.7]] },
{ ad:"Timur'un yürüyüşü (1402)",    f:"1402-06-01", t:"1402-09-01", yol:[[37.0,39.75],[35.0,39.9],[33.5,40.0],[32.95,40.1]] },
{ ad:"İstanbul seferi (1453)",      f:"1453-02-01", t:"1453-06-29", yol:[[26.56,41.68],[27.5,41.3],[28.5,41.1],[28.95,41.01]] },
{ ad:"Otranto çıkarması (1480)",    f:"1480-06-01", t:"1481-02-01", yol:[[19.44,40.45],[18.9,40.2],[18.49,40.15]] },
{ ad:"Çaldıran seferi (1514)",      f:"1514-04-20", t:"1514-10-01", yol:[[32.86,39.93],[36.0,39.8],[39.5,39.6],[41.8,39.4],[43.91,39.09]] },
{ ad:"Mısır seferi (1516-17)",      f:"1516-08-01", t:"1517-02-22", yol:[[37.16,36.2],[36.29,33.51],[34.8,31.5],[31.28,30.06]] },
{ ad:"Rodos seferi (1522)",         f:"1522-06-01", t:"1523-01-05", yol:[[28.98,40.9],[26.8,39.2],[27.3,37.2],[28.23,36.45]] },
{ ad:"Mohaç seferi (1526)",         f:"1526-04-23", t:"1526-09-29", yol:[[26.56,41.68],[20.46,44.82],[19.0,45.5],[18.64,45.94]] },
{ ad:"Viyana seferi (1529)",        f:"1529-05-10", t:"1529-10-16", yol:[[26.56,41.68],[19.04,47.5],[16.37,48.21]] },
{ ad:"Irakeyn seferi (1534-35)",    f:"1534-06-11", t:"1535-01-01", yol:[[28.98,41.0],[39.7,39.9],[46.29,38.08],[44.36,33.34]] },
{ ad:"Preveze harekâtı (1538)",     f:"1538-07-01", t:"1538-10-28", yol:[[28.98,40.97],[26.2,39.5],[21.5,38.0],[20.75,38.96]] },
{ ad:"Zigetvar seferi (1566)",      f:"1566-05-01", t:"1566-10-01", yol:[[28.98,41.0],[20.46,44.82],[18.0,46.0],[17.66,46.05]] },
{ ad:"Kıbrıs harekâtı (1570)",      f:"1570-05-01", t:"1571-09-01", yol:[[28.2,36.4],[30.5,35.8],[32.3,35.15]] },
{ ad:"Tebriz seferi (1585)",        f:"1585-06-01", t:"1585-11-01", yol:[[41.27,39.9],[43.5,39.3],[46.29,38.08]] },
{ ad:"Eğri-Haçova seferi (1596)",   f:"1596-06-20", t:"1596-11-26", yol:[[26.56,41.68],[20.46,44.82],[20.38,47.9],[20.72,47.82]] },
{ ad:"Bağdat seferi (1638)",        f:"1638-05-08", t:"1639-01-01", yol:[[28.98,41.0],[37.0,39.7],[43.13,36.34],[44.36,33.34]] },
{ ad:"Girit harekâtı (1645)",       f:"1645-04-30", t:"1645-09-01", yol:[[28.98,40.9],[24.5,37.5],[24.02,35.51]] },
{ ad:"Viyana seferi (1683)",        f:"1683-04-01", t:"1683-09-13", yol:[[26.56,41.68],[20.46,44.82],[17.66,47.5],[16.37,48.21]] },
{ ad:"Prut seferi (1711)",          f:"1711-05-01", t:"1711-08-01", yol:[[26.56,41.68],[27.0,44.5],[28.1,46.48]] },
{ ad:"Büyük Taarruz (1922)",        f:"1922-08-26", t:"1922-09-18", yol:[[32.86,39.93],[30.5,38.7],[29.98,38.86],[27.14,38.42]] }
];

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
{ id:"vehhabi",  ad:"Vehhâbî (Suûdî) seferleri",        aralik:"1811–1818", ozet:"Haremeyn'in geri alınışı ve Dir'iye'nin düşüşü — Mısır ordusuyla" },
{ id:"misir",    ad:"Mısır meselesi (Kavalalı savaşları)", aralik:"1831–1841", ozet:"Bir valinin merkeze karşı iki savaşı; devleti Avrupa müdahalesi kurtardı" },
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
{ t:"1807-04-21", ad:"Reşid (Rosetta)",           taraf:"İngiltere",         sonuc:"zafer",   seri:"misir",   lat:31.40, lon:30.42 },
{ t:"1815-01-20", ad:"Bisel",                     taraf:"Suûdî emirliği",    sonuc:"zafer",   seri:"vehhabi", lat:21.60, lon:41.10 },
{ t:"1818-09-09", ad:"Dir'iye kuşatması",         taraf:"Suûdî emirliği",    sonuc:"zafer",   seri:"vehhabi", lat:24.73, lon:46.57 },
{ t:"1825-06-22", ad:"Tripoliçe'nin geri alınışı",taraf:"Yunan isyancıları", sonuc:"zafer",   seri:"yunan",   lat:37.51, lon:22.38 },
{ t:"1826-04-22", ad:"Missolonghi kuşatması",     taraf:"Yunan isyancıları", sonuc:"zafer",   seri:"yunan",   lat:38.37, lon:21.43 },
{ t:"1827-10-20", ad:"Navarin (deniz)",           taraf:"İng-Fra-Rus filosu",sonuc:"yenilgi", seri:"yunan",   lat:36.91, lon:21.68 },
{ t:"1832-05-27", ad:"Akkâ kuşatması",            taraf:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:32.93, lon:35.08 },
{ t:"1832-07-08", ad:"Humus",                     taraf:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:34.73, lon:36.71 },
{ t:"1832-07-29", ad:"Belen (Beylan) Geçidi",     taraf:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:36.52, lon:36.20 },
{ t:"1832-12-21", ad:"Konya Meydan Muharebesi",   taraf:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:37.87, lon:32.49 },
{ t:"1839-06-24", ad:"Nizip",                     taraf:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:37.01, lon:37.79 },
{ t:"1840-11-03", ad:"Akkâ bombardımanı",         taraf:"Mısır (İbrâhim Paşa)",sonuc:"zafer",   seri:"misir",  lat:32.93, lon:35.08 },
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
{ t:"1922-08-30", ad:"Büyük Taarruz (Dumlupınar)",taraf:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:38.86, lon:29.98 },

// ---------------------------------------------------------------------------
// TÜRLÜ OLAY İŞARETLERİ (kullanıcı isteği)
//   tur:"kusatma" -> şehrin üstünde nabız gibi atan çember; sonuc:"yenilgi"
//                    ise üstüne kırmızı çarpı biner (başarısız kuşatma)
//   tur:"isyan"   -> isyan odağında titreşen ateş
//   tur:"deniz"   -> deniz muharebesi (çapa); SEFERLER'de deniz yolu okla çizilir
//   sure          -> işaretin kaç gün görüneceği (varsayılan ~2 yıl)
// ---------------------------------------------------------------------------

// --- Başarısız kuşatmalar ---
{ t:"1422-06-10", tur:"kusatma", ad:"İstanbul kuşatması",   taraf:"Bizans",    sonuc:"yenilgi", seri:"bizans",   lat:41.01, lon:28.95, sure:200 },
{ t:"1440-04-28", tur:"kusatma", ad:"Belgrad kuşatması",    taraf:"Macaristan",sonuc:"yenilgi", seri:"hacli",    lat:44.82, lon:20.46, sure:200 },
{ t:"1456-07-04", tur:"kusatma", ad:"Belgrad kuşatması",    taraf:"Macaristan",sonuc:"yenilgi", seri:"hacli",    lat:44.82, lon:20.46, sure:300 },
{ t:"1480-05-23", tur:"kusatma", ad:"Rodos kuşatması",      taraf:"St. Jean",  sonuc:"yenilgi", seri:"venedik",  lat:36.44, lon:28.22, sure:300 },
{ t:"1529-09-27", tur:"kusatma", ad:"I. Viyana kuşatması",  taraf:"Habsburg",  sonuc:"yenilgi", seri:"habsburg", lat:48.21, lon:16.37, sure:300 },
{ t:"1565-05-18", tur:"kusatma", ad:"Malta kuşatması",      taraf:"St. Jean",  sonuc:"yenilgi", seri:"venedik",  lat:35.90, lon:14.51, sure:300 },
{ t:"1683-07-14", tur:"kusatma", ad:"II. Viyana kuşatması", taraf:"Habsburg",  sonuc:"yenilgi", seri:"habsburg", lat:48.21, lon:16.37, sure:300 },
{ t:"1516-08-02", tur:"kusatma", ad:"Aden kuşatması",       taraf:"Yemen",     sonuc:"yenilgi", seri:"memluk",   lat:12.79, lon:45.02, sure:200 },
{ t:"1537-08-25", tur:"kusatma", ad:"Korfu kuşatması",      taraf:"Venedik",   sonuc:"yenilgi", seri:"venedik",  lat:39.62, lon:19.92, sure:200 },
{ t:"1601-09-10", tur:"kusatma", ad:"Kanije savunması",     taraf:"Habsburg",  sonuc:"zafer",   seri:"habsburg", lat:46.46, lon:16.99, sure:200 },
{ t:"1688-10-20", tur:"kusatma", ad:"Eğriboz savunması",    taraf:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:38.46, lon:23.60, sure:200 },

// --- Başarılı büyük kuşatmalar ---
{ t:"1453-04-06", tur:"kusatma", ad:"İstanbul kuşatması",   taraf:"Bizans",    sonuc:"zafer",   seri:"bizans",   lat:41.01, lon:28.95, sure:120 },
{ t:"1521-06-25", tur:"kusatma", ad:"Belgrad kuşatması",    taraf:"Macaristan",sonuc:"zafer",   seri:"habsburg", lat:44.82, lon:20.46, sure:200 },
{ t:"1522-06-26", tur:"kusatma", ad:"Rodos kuşatması",      taraf:"St. Jean",  sonuc:"zafer",   seri:"venedik",  lat:36.44, lon:28.22, sure:300 },
{ t:"1570-07-25", tur:"kusatma", ad:"Lefkoşa kuşatması",    taraf:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:35.19, lon:33.36, sure:200 },
{ t:"1648-05-01", tur:"kusatma", ad:"Kandiye kuşatması",    taraf:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:35.34, lon:25.13, sure:800 },
{ t:"1638-11-15", tur:"kusatma", ad:"Bağdat kuşatması",     taraf:"Safevî",    sonuc:"zafer",   seri:"safevi",   lat:33.34, lon:44.36, sure:200 },

// --- İç isyanlar (ateş) ---
{ t:"1416-05-01", tur:"isyan", ad:"Şeyh Bedreddin isyanı",  taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:41.10, lon:26.60, sure:400 },
{ t:"1416-05-01", tur:"isyan", ad:"Börklüce Mustafa",       taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:37.86, lon:27.26, sure:400 },
{ t:"1416-09-01", tur:"isyan", ad:"Torlak Kemal",           taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:38.61, lon:27.43, sure:300 },
{ t:"1511-03-01", tur:"isyan", ad:"Şahkulu (Teke)",         taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:36.89, lon:30.70, sure:400 },
{ t:"1511-07-02", tur:"isyan", ad:"Şahkulu (Sivas)",        taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:39.75, lon:37.02, sure:400 },
{ t:"1519-03-01", tur:"isyan", ad:"Bozoklu Şeyh Celâl",     taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:39.82, lon:34.81, sure:400 },
{ t:"1524-01-01", tur:"isyan", ad:"Hain Ahmed Paşa",        taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:30.05, lon:31.24, sure:300 },
{ t:"1526-01-01", tur:"isyan", ad:"Kalender Çelebi",        taraf:"iç isyan", sonuc:"zafer", seri:"ic",  lat:38.36, lon:38.31, sure:300 },
{ t:"1599-06-01", tur:"isyan", ad:"Karayazıcı Abdülhalim",  taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:37.16, lon:38.80, sure:900 },
{ t:"1603-01-01", tur:"isyan", ad:"Deli Hasan",             taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:39.75, lon:37.02, sure:600 },
{ t:"1607-10-23", tur:"isyan", ad:"Canbolatoğlu Ali Paşa",  taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:36.20, lon:37.13, sure:500 },
{ t:"1608-08-05", tur:"isyan", ad:"Kalenderoğlu",           taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:38.02, lon:36.53, sure:400 },
{ t:"1628-09-22", tur:"isyan", ad:"Abaza Mehmed Paşa",      taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:39.91, lon:41.27, sure:600 },
{ t:"1659-02-16", tur:"isyan", ad:"Abaza Hasan Paşa",       taraf:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:36.20, lon:37.13, sure:400 },
{ t:"1795-03-01", tur:"isyan", ad:"Pazvandoğlu Osman",      taraf:"iç isyan", sonuc:"belirsiz", seri:"ic", lat:43.99, lon:22.87, sure:1500 },
{ t:"1804-02-14", tur:"isyan", ad:"Birinci Sırp isyanı",    taraf:"Sırplar",  sonuc:"belirsiz", seri:"ic", lat:44.82, lon:20.46, sure:1200 },
{ t:"1821-03-25", tur:"isyan", ad:"Mora isyanı",            taraf:"Rumlar",   sonuc:"yenilgi", seri:"yunan", lat:37.51, lon:22.38, sure:1500 },
{ t:"1875-06-19", tur:"isyan", ad:"Hersek isyanı",          taraf:"Sırplar",  sonuc:"yenilgi", seri:"rus",  lat:43.34, lon:17.81, sure:900 },

// --- Deniz muharebeleri (çapa) ---
{ t:"1416-05-29", tur:"deniz", ad:"Gelibolu deniz savaşı",  taraf:"Venedik",  sonuc:"yenilgi", seri:"venedik", lat:40.30, lon:26.30, sure:300 },
{ t:"1499-08-12", tur:"deniz", ad:"Sapienza (Zonchio)",     taraf:"Venedik",  sonuc:"zafer",   seri:"venedik", lat:36.75, lon:21.70, sure:300 },
{ t:"1509-02-03", tur:"deniz", ad:"Diu (Portekiz)",         taraf:"Portekiz", sonuc:"yenilgi", seri:"memluk",  lat:20.71, lon:70.98, sure:400 },
{ t:"1517-04-18", tur:"deniz", ad:"Cidde savunması",        taraf:"Portekiz", sonuc:"zafer",   seri:"memluk",  lat:21.54, lon:39.17, sure:300 },
{ t:"1538-02-03", tur:"deniz", ad:"Diu kuşatması",          taraf:"Portekiz", sonuc:"belirsiz",seri:"memluk",  lat:20.71, lon:70.98, sure:400 },
{ t:"1538-09-28", tur:"deniz", ad:"Preveze",                taraf:"Haçlı donanması", sonuc:"zafer", seri:"venedik", lat:38.90, lon:20.70, sure:400 },
{ t:"1552-08-10", tur:"deniz", ad:"Hürmüz seferi",          taraf:"Portekiz", sonuc:"belirsiz",seri:"memluk",  lat:27.10, lon:56.45, sure:300 },
{ t:"1554-08-25", tur:"deniz", ad:"Umman denizi çarpışması",taraf:"Portekiz", sonuc:"yenilgi", seri:"memluk",  lat:24.50, lon:57.50, sure:300 },
{ t:"1560-05-14", tur:"deniz", ad:"Cerbe",                  taraf:"İspanya",  sonuc:"zafer",   seri:"venedik", lat:33.81, lon:10.86, sure:400 },
{ t:"1571-10-07", tur:"deniz", ad:"İnebahtı (Lepanto)",     taraf:"Haçlı donanması", sonuc:"yenilgi", seri:"venedik", lat:38.20, lon:21.30, sure:400 },
{ t:"1656-06-26", tur:"deniz", ad:"Çanakkale bozgunu",      taraf:"Venedik",  sonuc:"yenilgi", seri:"venedik", lat:40.05, lon:26.05, sure:300 },
{ t:"1657-07-19", tur:"deniz", ad:"Çanakkale zaferi",       taraf:"Venedik",  sonuc:"zafer",   seri:"venedik", lat:40.05, lon:26.05, sure:300 },
{ t:"1770-07-06", tur:"deniz", ad:"Çeşme baskını",          taraf:"Rusya",    sonuc:"yenilgi", seri:"rus",     lat:38.32, lon:26.31, sure:400 },
{ t:"1827-10-20", tur:"deniz", ad:"Navarin baskını",        taraf:"İngiltere-Fransa-Rusya", sonuc:"yenilgi", seri:"yunan", lat:36.92, lon:21.69, sure:400 },
{ t:"1853-11-30", tur:"deniz", ad:"Sinop baskını",          taraf:"Rusya",    sonuc:"yenilgi", seri:"rus",     lat:42.03, lon:35.15, sure:300 }
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
{ t:"1833-05-14", ad:"Kütahya Sözleşmesi",   taraf:"Mısır (Kavalalı)", ozet:"Suriye ve Adana Mehmed Ali ile İbrâhim Paşa'ya bırakıldı" },
{ t:"1833-07-08", ad:"Hünkâr İskelesi",      taraf:"Rusya",            ozet:"Sekiz yıllık savunma ittifakı; boğazların Rusya lehine kapatılması" },
{ t:"1838-08-16", ad:"Balta Limanı",         taraf:"İngiltere",        ozet:"Serbest ticaret; tekellerin kaldırılışı" },
{ t:"1840-07-15", ad:"Londra (Mısır)",       taraf:"İng-Rus-Avu-Prusya",ozet:"Dört devlet Osmanlı'nın yanında; Mehmed Ali'ye ültimatom" },
{ t:"1840-11-27", ad:"İskenderiye Konvansiyonu",taraf:"Mısır (Kavalalı)",ozet:"Suriye, Adana, Girit ve Hicaz iade; donanma geri verildi" },
{ t:"1841-07-13", ad:"Londra Boğazlar Sözleşmesi",taraf:"Büyük devletler",ozet:"Barışta boğazlar bütün savaş gemilerine kapalı" },
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
//
// Rotalar rastgele ara nokta değil, ORDUNUN GERÇEKTEN GEÇTİĞİ MENZİL şehirleridir.
// Osmanlı ordusu üç ana kol üzerinden yürürdü:
//   Rumeli Sağ Kol (Via Militaris): İstanbul-Edirne-Filibe-Sofya-Niş-Belgrad,
//     Belgrad'dan sonra Tuna boyu: Varadin-Ösek-Mohaç-Budin-Estergon-Yanıkkale.
//   Anadolu Orta Kol: Üsküdar-Bolu-Tosya-Amasya-Tokat-Sivas-Erzincan-Erzurum-Tebriz.
//   Anadolu Sol Kol: Üsküdar-Sivas-Diyarbekir-Musul-Bağdat.
//   Anadolu Sağ Kol: Üsküdar-Eskişehir-Akşehir-Konya-Adana-Halep-Şam-Kahire.
// Deniz harekâtlarında ara noktalar karaya değmez; donanma Mora'yı dolanır,
// Ege'de ada ada ilerler. Ok, muharebenin gerçekleştiği noktada biter.
window.SEFERLER = [
{ ad:"Katalan Kumpanyası'nın Anadolu seferi (1303-1305)", f:"1303-09-01", t:"1305-06-01",
  yol:[[26.67,40.41],[27.20,40.42],[27.84,40.40],[28.52,38.35]] },
{ ad:"Pelekanon (Maltepe) seferi (1329)", f:"1329-05-15", t:"1329-06-10",
  yol:[[29.06,40.19],[29.20,40.43],[29.15,40.75],[29.15,40.92]] },
// Edirne-Filibe-Köstendil-Üsküp: Murad'ın Kosova'ya inişi Vardar vadisini izler.
{ ad:"Kosova seferi (1389)",        f:"1389-03-01", t:"1389-08-01",
  yol:[[26.56,41.68],[24.75,42.14],[22.69,42.28],[21.43,41.99],[21.12,42.63]] },
// Balkan geçidi (Şipka) üzerinden Tırnova'ya, oradan Tuna kıyısına.
{ ad:"Niğbolu seferi (1396)",       f:"1396-07-01", t:"1396-11-01",
  yol:[[26.56,41.68],[25.39,42.62],[25.62,43.08],[24.90,43.70]] },
{ ad:"Timur'un yürüyüşü (1402)",    f:"1402-06-01", t:"1402-09-01",
  yol:[[37.02,39.75],[35.48,38.73],[34.16,39.15],[32.86,39.93]] },
{ ad:"II. Murad'ın İstanbul kuşatması (1422)", f:"1422-05-01", t:"1422-09-06",
  yol:[[26.56,41.68],[27.80,41.16],[28.25,41.07],[28.95,41.01]] },
{ ad:"İstanbul seferi (1453)",      f:"1453-02-01", t:"1453-06-29",
  yol:[[26.56,41.68],[27.80,41.16],[28.25,41.07],[28.95,41.01]] },
// Rumeli Sağ Kol'un tamamı: Filibe-Sofya-Niş-Morava vadisi-Belgrad.
{ ad:"Belgrad kuşatması (1440)",    f:"1440-04-01", t:"1440-10-21",
  yol:[[26.56,41.68],[24.75,42.14],[23.32,42.70],[21.90,43.32],[21.33,43.58],[20.93,44.66],[20.46,44.82]] },
{ ad:"Otranto çıkarması (1480)",    f:"1480-06-01", t:"1481-02-01", yol:[[19.44,40.45],[18.9,40.2],[18.49,40.15]] },
// Anadolu Orta Kol: Üsküdar-Bolu-Tosya-Amasya-Tokat-Sivas-Erzincan-Erzurum-Eleşkirt.
{ ad:"Çaldıran seferi (1514)",      f:"1514-04-20", t:"1514-10-01",
  yol:[[26.56,41.68],[29.02,41.02],[31.61,40.74],[34.04,41.02],[35.83,40.65],[36.55,40.31],
       [37.02,39.75],[39.49,39.75],[41.27,39.90],[42.67,39.62],[43.91,39.09]] },
// Sefer önce Safevî cephesine hazırlandığı için Sivas-Kayseri-Elbistan hattından
// indi, Mercidabık'tan sonra Şam-Gazze menziliyle Ridaniye'ye ulaştı.
{ ad:"Mısır seferi (1516-17)",      f:"1516-08-01", t:"1517-02-22",
  yol:[[29.02,41.02],[37.02,39.75],[35.48,38.73],[37.20,38.21],[37.38,37.07],[37.15,36.68],
       [37.16,36.20],[36.75,35.13],[36.29,33.51],[34.47,31.50],[31.28,30.06]] },
{ ad:"Rodos seferi (1522)",         f:"1522-06-01", t:"1523-01-05",
  yol:[[28.98,40.97],[26.41,40.15],[26.14,38.37],[27.29,36.89],[28.23,36.45]] },
{ ad:"Mohaç seferi (1526)",         f:"1526-04-23", t:"1526-09-29",
  yol:[[28.98,41.01],[26.56,41.68],[24.75,42.14],[23.32,42.70],[21.90,43.32],[20.93,44.66],
       [20.46,44.82],[19.86,45.25],[18.69,45.55],[18.69,45.99]] },
{ ad:"Viyana seferi (1529)",        f:"1529-05-10", t:"1529-10-16",
  yol:[[28.98,41.01],[26.56,41.68],[23.32,42.70],[21.90,43.32],[20.46,44.82],[18.69,45.55],
       [19.04,47.50],[18.74,47.79],[17.63,47.68],[16.37,48.21]] },
{ ad:"Irakeyn (Tebriz-Bağdat) seferi (1534-35)",    f:"1534-06-11", t:"1535-01-01",
  yol:[[28.98,41.01],[32.49,37.87],[35.48,38.73],[37.02,39.75],[41.27,39.90],[46.29,38.08],
       [48.52,34.80],[44.36,33.34]] },
// Donanma Ege'de ada ada ilerledi, Mora'yı dolanıp İyon'a girdi — kara üstünden geçmez.
{ ad:"Preveze harekâtı (1538)",     f:"1538-07-01", t:"1538-10-28",
  yol:[[28.98,40.97],[26.67,40.41],[24.57,38.90],[24.85,37.86],[21.70,36.82],[20.64,38.72],[20.75,38.96]] },
{ ad:"Zigetvar seferi (1566)",      f:"1566-05-01", t:"1566-10-01",
  yol:[[28.98,41.01],[26.56,41.68],[23.32,42.70],[21.90,43.32],[20.46,44.82],[19.86,45.25],
       [18.69,45.55],[17.80,46.05]] },
{ ad:"Kıbrıs harekâtı (1570)",      f:"1570-05-01", t:"1571-09-01",
  yol:[[28.23,36.45],[30.15,36.30],[32.00,36.54],[33.63,34.92],[33.36,35.17],[33.94,35.12]] },
{ ad:"Özdemiroğlu'nun Tebriz seferi (1585)",        f:"1585-06-01", t:"1585-11-01",
  yol:[[41.27,39.90],[42.67,39.62],[44.95,38.55],[46.29,38.08]] },
{ ad:"Eğri-Haçova seferi (1596)",   f:"1596-06-20", t:"1596-11-26",
  yol:[[28.98,41.01],[26.56,41.68],[23.32,42.70],[20.46,44.82],[18.69,45.55],[19.04,47.50],
       [20.18,47.18],[20.38,47.90],[20.72,47.82]] },
// Anadolu Sol Kol: Sivas-Diyarbekir-Musul üzerinden Bağdat'a.
{ ad:"Bağdat seferi (1638)",        f:"1638-05-08", t:"1639-01-01",
  yol:[[28.98,41.01],[29.02,41.02],[37.02,39.75],[40.23,37.91],[43.13,36.34],[44.36,33.34]] },
{ ad:"Girit harekâtı (1645)",       f:"1645-04-30", t:"1645-09-01",
  yol:[[28.98,40.97],[26.41,40.15],[26.14,38.37],[25.38,37.10],[24.44,36.71],[24.02,35.51]] },
{ ad:"Viyana seferi (1683)",        f:"1683-04-01", t:"1683-09-13",
  yol:[[26.56,41.68],[24.75,42.14],[23.32,42.70],[21.90,43.32],[20.46,44.82],[18.69,45.55],
       [19.04,47.50],[17.63,47.68],[16.37,48.21]] },
// Dobruca menzili: Karnabat-Hacıoğlupazarcığı-Babadağı, Tuna'yı İsakçı'da geçti.
{ ad:"Prut seferi (1711)",          f:"1711-05-01", t:"1711-08-01",
  yol:[[26.56,41.68],[26.98,42.65],[27.83,43.57],[28.71,44.89],[28.46,45.27],[28.14,46.60]] },
{ ad:"Varna seferi (1444)",         f:"1444-09-20", t:"1444-11-10",
  yol:[[26.56,41.68],[26.98,42.65],[26.93,43.27],[27.92,43.21]] },
{ ad:"Otlukbeli seferi (1473)",     f:"1473-04-11", t:"1473-08-11",
  yol:[[29.02,41.02],[32.86,39.93],[37.02,39.75],[39.49,39.75],[39.90,39.93]] },
{ ad:"Kırım harekâtı (1475)",       f:"1475-05-19", t:"1475-12-01",
  yol:[[28.98,41.01],[32.50,43.20],[35.38,45.03],[33.80,44.61]] },
{ ad:"Büyük Taarruz (1922)",        f:"1922-08-26", t:"1922-09-18",
  yol:[[32.86,39.93],[30.54,38.76],[29.98,38.86],[29.40,38.68],[28.14,38.48],[27.14,38.42]] },
// --- Kavalalı Mehmed Ali Paşa dönemi harekâtları (kara ve deniz) ---
{ ad:"Hicaz seferi (1811-13)",      f:"1811-09-03", t:"1813-01-24", yol:[[31.24,30.05],[32.55,29.97],[38.06,24.09],[39.61,24.47],[39.83,21.42]] },
{ ad:"Necid seferi (1816-18)",      f:"1816-09-01", t:"1818-09-09", yol:[[39.61,24.47],[41.7,25.4],[43.5,25.9],[46.57,24.73]] },
{ ad:"Sudan seferi (1820-21)",      f:"1820-07-20", t:"1821-08-19", yol:[[32.9,24.09],[31.99,22.66],[30.47,19.17],[32.56,15.50],[33.62,13.55]] },
{ ad:"Mora çıkarması (1825)",       f:"1825-02-24", t:"1825-06-22", yol:[[29.92,31.20],[25.13,35.34],[23.0,36.4],[21.70,36.82],[22.38,37.51]] },
{ ad:"Suriye harekâtı (1831-32)",   f:"1831-10-31", t:"1832-07-29", yol:[[31.24,30.05],[34.47,31.50],[35.08,32.93],[36.29,33.51],[36.71,34.73],[37.16,36.20],[36.20,36.52]] },
{ ad:"Anadolu ilerleyişi (1832-33)",f:"1832-08-01", t:"1833-02-02", yol:[[36.20,36.52],[35.32,37.00],[33.22,37.18],[32.49,37.87],[29.98,39.42]] },
{ ad:"Nizip seferi (1839)",         f:"1839-04-21", t:"1839-06-24", yol:[[38.33,38.35],[37.98,37.03],[37.79,37.01]] },
{ ad:"Müttefik donanma harekâtı (1840)", f:"1840-09-11", t:"1840-11-27", yol:[[26.4,38.5],[33.5,34.9],[35.50,33.89],[35.08,32.93],[29.92,31.20]] }
];

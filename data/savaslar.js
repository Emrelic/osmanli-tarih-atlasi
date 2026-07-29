// ============================================================================
// SAVAŞ / ANTLAŞMA / SAVAŞ SERİSİ / SEFER TABLOLARI
// SAVASLAR   : tekil muharebeler {t, ad, taraf_metin, sonuc, seri, lat, lon,
//              taraf, galip}
//              lat/lon: muharebe yeri (haritada ⚔ işaretiyle ~2 yıl gösterilir)
//              taraf_metin: serbest metin (eskiden "taraf" idi, ekranda gösterim için)
//              taraf: data/devletler.js id listesi — OTURUM 10 (2026-07-29) eklendi
//              galip: yalnız açık galibi olan meydan/deniz muharebelerinde var
// ANTLASMALAR: {t, ad, taraf_metin, ozet, taraf, topraklar}
//              topraklar: hangi yerin kimden kime geçtiği (OTURUM 10 eklendi)
// SERILER    : ülkeler arası savaş dizileri {id, ad, aralik, ozet}
// SEFERLER   : ordu/donanma hareketleri {ad, f, t, yol:[[lon,lat],...]}
//              (haritada f-t aralığında ok olarak çizilir)
// sonuc: zafer | yenilgi | belirsiz (Osmanlı açısından)
//
// ⚠️ OTURUM 10 NOTU (bkz. oturumlar/OTURUM-10-ILERLEME.md):
// `taraf` alanı eskiden serbest metindi (ekranda "ad — taraf" olarak gösterilir,
// js/app.js:597,602,869,876). Bu alan artık id dizisi. Eski metin `taraf_metin`
// adına taşındı. js/app.js HÂLÂ `s.taraf`/`a.taraf`yi okuyor — dizi olduğu için
// ekranda "Mohaç, macaristan" gibi virgüllü id listesi görünecek, hata vermez
// ama çirkin. Oturum 1'in js/app.js'i `taraf_metin`'e (ya da devletler.js'ten
// ad çözümlemesine) geçirmesi gerekiyor. Bilerek yapıldı — mimari değeri
// (devlet-merkezli yükleme, MIMARI.md §6.5) ekran düzeltmesinden önce geldi.
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
{ t:"1400-08-26", ad:"Sivas kuşatması", taraf_metin:"Timur", sonuc:"yenilgi", galip:"timurlu", lat:39.75, lon:37.02, tur:"kusatma" },
{ t:"1385-09-18", ad:"Savra (Saurian) Ovası", taraf_metin:"Zeta — II. Balşa", sonuc:"zafer", galip:"osmanli", lat:40.94, lon:19.71, tur:"meydan" },
{ t:"1302-07-27", ad:"Koyunhisar (Bapheus)",      taraf_metin:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:40.72, lon:29.85, taraf:["osmanli","bizans"], galip:"osmanli" },
{ t:"1329-06-10", ad:"Pelekanon (Maltepe)",       taraf_metin:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:40.92, lon:29.15, taraf:["osmanli","bizans"], galip:"osmanli" },
{ t:"1364-07-01", ad:"Sırpsındığı",               taraf_metin:"Sırp-Macar ordusu", sonuc:"zafer",   seri:"hacli",   lat:41.55, lon:26.35, taraf:["osmanli","macaristan"], galip:"osmanli" },
// Sırbistan 1364'te Nemanjić İmparatorluğu'nun dağılma döneminde; devletler.js'te
// bu tarihe denk gelen bir Sırp devleti id'si yok (bkz. OTURUM-10-ILERLEME.md).
{ t:"1371-09-26", ad:"Çirmen",                    taraf_metin:"Sırp beyleri",      sonuc:"zafer",   seri:"hacli",   lat:41.72, lon:26.20, galip:"osmanli" },
{ t:"1388-08-27", ad:"Bileća",                    taraf_metin:"Bosna",             sonuc:"yenilgi", seri:"hacli",   lat:42.87, lon:18.43, taraf:["osmanli","bosna-kralligi"], galip:"bosna-kralligi" },
{ t:"1389-06-15", ad:"I. Kosova",                 taraf_metin:"Balkan ittifakı",   sonuc:"zafer",   seri:"hacli",   lat:42.63, lon:21.12, taraf:["osmanli","bosna-kralligi"], galip:"osmanli" },
{ t:"1395-05-17", ad:"Rovine",                    taraf_metin:"Eflak",             sonuc:"belirsiz",seri:"hacli",   lat:44.85, lon:24.87, taraf:["osmanli","eflak"] },
{ t:"1396-09-25", ad:"Niğbolu",                   taraf_metin:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli",   lat:43.70, lon:24.90, taraf:["osmanli","macaristan","fransa","eflak"], galip:"osmanli" },
{ t:"1402-07-28", ad:"Ankara",                    taraf_metin:"Timur",             sonuc:"yenilgi", seri:"",        lat:40.10, lon:32.95, taraf:["osmanli","timurlu"], galip:"timurlu" },
{ t:"1416-05-29", ad:"Gelibolu (deniz)",          taraf_metin:"Venedik",           sonuc:"yenilgi", seri:"venedik", lat:40.35, lon:26.60, taraf:["osmanli","venedik"], galip:"venedik" },
{ t:"1443-11-01", ad:"İzladi",                    taraf_metin:"Macar-Haçlı ordusu",sonuc:"yenilgi", seri:"hacli",   lat:42.75, lon:23.90, taraf:["osmanli","macaristan"], galip:"macaristan" },
{ t:"1444-11-10", ad:"Varna",                     taraf_metin:"Haçlı ordusu",      sonuc:"zafer",   seri:"hacli",   lat:43.22, lon:27.90, taraf:["osmanli","macaristan"], galip:"osmanli" },
{ t:"1448-10-17", ad:"II. Kosova",                taraf_metin:"Macar-Haçlı ordusu",sonuc:"zafer",   seri:"hacli",   lat:42.63, lon:21.12, taraf:["osmanli","macaristan"], galip:"osmanli" },
{ t:"1453-05-29", ad:"İstanbul kuşatması",        taraf_metin:"Bizans",            sonuc:"zafer",   seri:"bizans",  lat:41.01, lon:28.95, taraf:["osmanli","bizans"], galip:"osmanli" },
{ t:"1473-08-11", ad:"Otlukbeli",                 taraf_metin:"Akkoyunlu",         sonuc:"zafer",   seri:"",        lat:39.97, lon:40.00, taraf:["osmanli","akkoyunlu"], galip:"osmanli" },
{ t:"1480-08-11", ad:"Otranto çıkarması",         taraf_metin:"Napoli",            sonuc:"belirsiz",seri:"venedik", lat:40.15, lon:18.49, taraf:["osmanli","napoli"] },
{ t:"1514-08-23", ad:"Çaldıran",                  taraf_metin:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:39.09, lon:43.91, taraf:["osmanli","safevi"], galip:"osmanli" },
{ t:"1515-06-13", ad:"Turnadağ",                  taraf_metin:"Dulkadiroğulları",  sonuc:"zafer",   seri:"",        lat:38.20, lon:37.20, taraf:["osmanli","dulkadir"], galip:"osmanli" },
{ t:"1516-08-24", ad:"Mercidabık",                taraf_metin:"Memlûk",            sonuc:"zafer",   seri:"memluk",  lat:36.60, lon:37.00, taraf:["osmanli","memluk"], galip:"osmanli" },
{ t:"1517-01-22", ad:"Ridaniye",                  taraf_metin:"Memlûk",            sonuc:"zafer",   seri:"memluk",  lat:30.06, lon:31.28, taraf:["osmanli","memluk"], galip:"osmanli" },
{ t:"1526-08-29", ad:"Mohaç",                     taraf_metin:"Macaristan",        sonuc:"zafer",   seri:"habsburg",lat:45.94, lon:18.64, taraf:["osmanli","macaristan"], galip:"osmanli" },
{ t:"1529-09-27", ad:"I. Viyana Kuşatması",       taraf_metin:"Habsburg",          sonuc:"belirsiz",seri:"habsburg",lat:48.21, lon:16.37, taraf:["osmanli","habsburg"] },
{ t:"1538-09-28", ad:"Preveze (deniz)",           taraf_metin:"Haçlı donanması",   sonuc:"zafer",   seri:"venedik", lat:38.95, lon:20.75, taraf:["osmanli","venedik","ispanya","papalik"], galip:"osmanli" },
{ t:"1565-05-18", ad:"Malta kuşatması",           taraf_metin:"Saint Jean",        sonuc:"yenilgi", seri:"venedik", lat:35.90, lon:14.42, taraf:["osmanli","rodos-sovalyeleri"], galip:"rodos-sovalyeleri" },
{ t:"1571-10-07", ad:"İnebahtı (deniz)",          taraf_metin:"Kutsal İttifak",    sonuc:"yenilgi", seri:"venedik", lat:38.25, lon:21.30, taraf:["osmanli","ispanya","venedik","papalik","cenova","rodos-sovalyeleri"], galip:"ispanya" },
{ t:"1578-08-09", ad:"Çıldır",                    taraf_metin:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:41.13, lon:43.13, taraf:["osmanli","safevi"], galip:"osmanli" },
{ t:"1583-05-09", ad:"Meşaleler Savaşı",          taraf_metin:"Safevî",            sonuc:"zafer",   seri:"safevi",  lat:41.05, lon:49.20, taraf:["osmanli","safevi"], galip:"osmanli" },
{ t:"1596-10-26", ad:"Haçova",                    taraf_metin:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:47.82, lon:20.72, taraf:["osmanli","habsburg"], galip:"osmanli" },
{ t:"1600-10-22", ad:"Kanije kuşatması",          taraf_metin:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:46.45, lon:16.99, taraf:["osmanli","habsburg"], galip:"osmanli" },
{ t:"1620-09-17", ad:"Cecora (Ţuţora)",           taraf_metin:"Lehistan",          sonuc:"zafer",   seri:"lehistan",lat:47.10, lon:27.75, taraf:["osmanli","lehistan"], galip:"osmanli" },
{ t:"1663-09-24", ad:"Uyvar kuşatması",           taraf_metin:"Habsburg",          sonuc:"zafer",   seri:"habsburg",lat:47.99, lon:18.16, taraf:["osmanli","habsburg"], galip:"osmanli" },
{ t:"1664-08-01", ad:"Sen Gotar (St. Gotthard)",  taraf_metin:"Habsburg",          sonuc:"yenilgi", seri:"habsburg",lat:46.94, lon:16.27, taraf:["osmanli","habsburg"], galip:"habsburg" },
{ t:"1683-09-12", ad:"II. Viyana Kuşatması",      taraf_metin:"Habsburg-Lehistan", sonuc:"yenilgi", seri:"habsburg",lat:48.21, lon:16.37, taraf:["osmanli","habsburg","lehistan"], galip:"habsburg" },
{ t:"1697-09-11", ad:"Zenta",                     taraf_metin:"Habsburg",          sonuc:"yenilgi", seri:"habsburg",lat:45.93, lon:20.09, taraf:["osmanli","habsburg"], galip:"habsburg" },
{ t:"1711-07-21", ad:"Prut",                      taraf_metin:"Rusya",             sonuc:"zafer",   seri:"rus",     lat:46.48, lon:28.10, taraf:["osmanli","rusya"], galip:"osmanli" },
{ t:"1716-08-05", ad:"Varadin (Petrovaradin)",    taraf_metin:"Habsburg",          sonuc:"yenilgi", seri:"habsburg",lat:45.25, lon:19.86, taraf:["osmanli","habsburg"], galip:"habsburg" },
{ t:"1717-08-18", ad:"Belgrad (1717)",            taraf_metin:"Habsburg",          sonuc:"yenilgi", seri:"habsburg",lat:44.82, lon:20.46, taraf:["osmanli","habsburg"], galip:"habsburg" },
// Nadir Şah'ın Afşar Devleti'yle savaş; "safevi" serisi 1639'da bitiyor, bu yüzden
// seri boş bırakıldı — devletler.js'te ayrı bir "Osmanlı-Afşar" serisi yok.
{ t:"1743-10-23", ad:"Musul savunması",           taraf_metin:"Afşar (Nadir Şah)", sonuc:"zafer",   seri:"",        lat:36.34, lon:43.13, taraf:["osmanli","afsar"], galip:"osmanli" },
{ t:"1770-07-06", ad:"Çeşme (deniz)",             taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:38.32, lon:26.30, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1770-08-01", ad:"Kartal (Kagul) Ovası",      taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:45.90, lon:28.20, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1774-06-20", ad:"Kozluca",                   taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:43.35, lon:26.75, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1788-12-17", ad:"Özi savunması",             taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:46.62, lon:31.54, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1807-04-21", ad:"Reşid (Rosetta)",           taraf_metin:"İngiltere",         sonuc:"zafer",   seri:"misir",   lat:31.40, lon:30.42, taraf:["osmanli","ingiltere","misir-kavalali"], galip:"osmanli" },
{ t:"1811-10-25", ad:"Slobozia",                  taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:44.56, lon:27.36, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1815-01-20", ad:"Bisel",                     taraf_metin:"Suûdî emirliği",    sonuc:"zafer",   seri:"vehhabi", lat:21.60, lon:41.10, taraf:["osmanli","misir-kavalali","suud-birinci"], galip:"osmanli" },
{ t:"1818-09-09", ad:"Dir'iye kuşatması",         taraf_metin:"Suûdî emirliği",    sonuc:"zafer",   seri:"vehhabi", lat:24.73, lon:46.57, taraf:["osmanli","misir-kavalali","suud-birinci"], galip:"osmanli" },
{ t:"1825-06-22", ad:"Tripoliçe'nin geri alınışı",taraf_metin:"Yunan isyancıları", sonuc:"zafer",   seri:"yunan",   lat:37.51, lon:22.38, taraf:["osmanli","misir-kavalali","yunanistan"], galip:"misir-kavalali" },
{ t:"1826-04-22", ad:"Missolonghi kuşatması",     taraf_metin:"Yunan isyancıları", sonuc:"zafer",   seri:"yunan",   lat:38.37, lon:21.43, taraf:["osmanli","misir-kavalali","yunanistan"], galip:"osmanli" },
{ t:"1827-10-20", ad:"Navarin (deniz)",           taraf_metin:"İng-Fra-Rus filosu",sonuc:"yenilgi", seri:"yunan",   lat:36.91, lon:21.68, taraf:["osmanli","misir-kavalali","ingiltere","rusya"], galip:"ingiltere" },
{ t:"1832-05-27", ad:"Akkâ kuşatması",            taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:32.93, lon:35.08, taraf:["osmanli","misir-kavalali"], galip:"misir-kavalali" },
{ t:"1832-07-08", ad:"Humus",                     taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:34.73, lon:36.71, taraf:["osmanli","misir-kavalali"], galip:"misir-kavalali" },
{ t:"1832-07-29", ad:"Belen (Beylan) Geçidi",     taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:36.52, lon:36.20, taraf:["osmanli","misir-kavalali"], galip:"misir-kavalali" },
{ t:"1832-12-21", ad:"Konya Meydan Muharebesi",   taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:37.87, lon:32.49, taraf:["osmanli","misir-kavalali"], galip:"misir-kavalali" },
{ t:"1839-06-24", ad:"Nizip",                     taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"yenilgi",seri:"misir",  lat:37.01, lon:37.79, taraf:["osmanli","misir-kavalali"], galip:"misir-kavalali" },
{ t:"1840-11-03", ad:"Akkâ bombardımanı",         taraf_metin:"Mısır (İbrâhim Paşa)",sonuc:"zafer",   seri:"misir",  lat:32.93, lon:35.08, taraf:["osmanli","misir-kavalali","ingiltere","habsburg"], galip:"ingiltere" },
{ t:"1853-10-04", ad:"Kırım Savaşı",              taraf_metin:"Rusya",             sonuc:"zafer",   seri:"rus",     lat:44.60, lon:33.53, taraf:["osmanli","rusya","ingiltere","sardinya-piyemonte"], galip:"osmanli" },
{ t:"1853-11-11", ad:"Oltenitsa",                 taraf_metin:"Rusya",             sonuc:"zafer",   seri:"rus",     lat:44.09, lon:26.64, taraf:["osmanli","rusya"], galip:"osmanli" },
{ t:"1877-04-24", ad:"93 Harbi (Plevne)",         taraf_metin:"Rusya",             sonuc:"yenilgi", seri:"rus",     lat:43.41, lon:24.62, taraf:["osmanli","rusya","romanya"], galip:"rusya" },
{ t:"1897-05-17", ad:"Dömeke",                    taraf_metin:"Yunanistan",        sonuc:"zafer",   seri:"yunan",   lat:39.05, lon:22.55, taraf:["osmanli","yunanistan"], galip:"osmanli" },
{ t:"1911-09-29", ad:"Trablusgarp Savaşı",        taraf_metin:"İtalya",            sonuc:"yenilgi", seri:"italya",  lat:32.90, lon:13.19, taraf:["osmanli","italya"], galip:"italya" },
// Sırbistan ve Bulgaristan 1912'de fiilen tam bağımsız krallıklardır; devletler.js'teki
// karşılıkları (sirbistan-prensligi, bulgaristan-prensligi) 1882/1908'de bitiyor —
// bağlantı yine de bu id'lerle kuruldu (bkz. OTURUM-10-ILERLEME.md, aralık uyarısı).
{ t:"1912-10-08", ad:"I. Balkan Savaşı",          taraf_metin:"Balkan ittifakı",   sonuc:"yenilgi", seri:"balkan",  lat:41.40, lon:27.35, taraf:["osmanli","yunanistan","karadag","sirbistan-prensligi","bulgaristan-prensligi"], galip:"bulgaristan-prensligi" },
{ t:"1913-07-21", ad:"II. Balkan Savaşı (Edirne)",taraf_metin:"Bulgaristan",       sonuc:"zafer",   seri:"balkan",  lat:41.68, lon:26.56, taraf:["osmanli","bulgaristan-prensligi"], galip:"osmanli" },
// Fransa 1792'de devletler.js'te "son" olarak kapanıyor; 1915 sonrası Fransız
// devleti için ayrı id yok, bu yüzden taraf listesine eklenemedi (bildirildi).
{ t:"1915-03-18", ad:"Çanakkale",                 taraf_metin:"İngiltere-Fransa",  sonuc:"zafer",   seri:"cihan",   lat:40.15, lon:26.28, taraf:["osmanli","ingiltere"], galip:"osmanli" },
{ t:"1916-04-29", ad:"Kûtülamâre",                taraf_metin:"İngiltere",         sonuc:"zafer",   seri:"cihan",   lat:32.51, lon:45.82, taraf:["osmanli","ingiltere"], galip:"osmanli" },
{ t:"1917-03-11", ad:"Bağdat'ın düşüşü",          taraf_metin:"İngiltere",         sonuc:"yenilgi", seri:"cihan",   lat:33.34, lon:44.36, taraf:["osmanli","ingiltere"], galip:"ingiltere" },
{ t:"1917-12-09", ad:"Kudüs'ün düşüşü",           taraf_metin:"İngiltere",         sonuc:"yenilgi", seri:"cihan",   lat:31.78, lon:35.23, taraf:["osmanli","ingiltere"], galip:"ingiltere" },
// Sakarya ve Büyük Taarruz'u fiilen yürüten Osmanlı hükûmeti değil TBMM'dir;
// devletler.js'te bu ayrım "tbmm-turkiye" id'siyle zaten modellenmiş.
{ t:"1921-01-10", ad:"Birinci İnönü",             taraf_metin:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:39.83, lon:30.15, taraf:["tbmm-turkiye","yunanistan"], galip:"tbmm-turkiye" },
{ t:"1921-04-01", ad:"İkinci İnönü",              taraf_metin:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:39.83, lon:30.15, taraf:["tbmm-turkiye","yunanistan"], galip:"tbmm-turkiye" },
{ t:"1921-09-13", ad:"Sakarya",                   taraf_metin:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:39.55, lon:31.98, taraf:["tbmm-turkiye","yunanistan"], galip:"tbmm-turkiye" },
{ t:"1922-08-30", ad:"Büyük Taarruz (Dumlupınar)",taraf_metin:"Yunanistan",        sonuc:"zafer",   seri:"istiklal",lat:38.86, lon:29.98, taraf:["tbmm-turkiye","yunanistan"], galip:"tbmm-turkiye" },

// ---------------------------------------------------------------------------
// TÜRLÜ OLAY İŞARETLERİ (kullanıcı isteği)
//   tur:"kusatma" -> şehrin üstünde nabız gibi atan çember; sonuc:"yenilgi"
//                    ise üstüne kırmızı çarpı biner (başarısız kuşatma)
//   tur:"isyan"   -> isyan odağında titreşen ateş
//   tur:"deniz"   -> deniz muharebesi (çapa); SEFERLER'de deniz yolu okla çizilir
//   sure          -> işaretin kaç gün görüneceği (varsayılan ~2 yıl)
//   galip yazılmaz: kuşatma sonuc + görsel çarpı işaretiyle zaten belli oluyor.
// ---------------------------------------------------------------------------

// --- Başarısız kuşatmalar ---
{ t:"1422-06-10", tur:"kusatma", ad:"İstanbul kuşatması",   taraf_metin:"Bizans",    sonuc:"yenilgi", seri:"bizans",   lat:41.01, lon:28.95, sure:200, taraf:["osmanli","bizans"] },
{ t:"1440-04-28", tur:"kusatma", ad:"Belgrad kuşatması",    taraf_metin:"Macaristan",sonuc:"yenilgi", seri:"hacli",    lat:44.82, lon:20.46, sure:200, taraf:["osmanli","macaristan"] },
{ t:"1456-07-04", tur:"kusatma", ad:"Belgrad kuşatması",    taraf_metin:"Macaristan",sonuc:"yenilgi", seri:"hacli",    lat:44.82, lon:20.46, sure:300, taraf:["osmanli","macaristan"] },
{ t:"1480-05-23", tur:"kusatma", ad:"Rodos kuşatması",      taraf_metin:"St. Jean",  sonuc:"yenilgi", seri:"venedik",  lat:36.44, lon:28.22, sure:300, taraf:["osmanli","rodos-sovalyeleri"] },
{ t:"1529-09-27", tur:"kusatma", ad:"I. Viyana kuşatması",  taraf_metin:"Habsburg",  sonuc:"yenilgi", seri:"habsburg", lat:48.21, lon:16.37, sure:300, taraf:["osmanli","habsburg"] },
{ t:"1565-05-18", tur:"kusatma", ad:"Malta kuşatması",      taraf_metin:"St. Jean",  sonuc:"yenilgi", seri:"venedik",  lat:35.90, lon:14.51, sure:300, taraf:["osmanli","rodos-sovalyeleri"] },
// Hotin: kesin sonuca ulaşmadı — Osmanlı kaleyi alamadı, Lehistan da savaşı sürdüremeyip
// masaya oturdu (1621 Hotin Antlaşması, statüko). "Belirsiz" sayıldı, galip yazılmadı.
{ t:"1621-09-02", tur:"kusatma", ad:"Hotin kuşatması",      taraf_metin:"Lehistan",  sonuc:"belirsiz",seri:"lehistan", lat:48.51, lon:26.49, sure:200, taraf:["osmanli","lehistan"] },
{ t:"1683-07-14", tur:"kusatma", ad:"II. Viyana kuşatması", taraf_metin:"Habsburg",  sonuc:"yenilgi", seri:"habsburg", lat:48.21, lon:16.37, sure:300, taraf:["osmanli","habsburg"] },
{ t:"1516-08-02", tur:"kusatma", ad:"Aden kuşatması",       taraf_metin:"Yemen",     sonuc:"yenilgi", seri:"memluk",   lat:12.79, lon:45.02, sure:200, taraf:["osmanli","yemen-zeydi"] },
{ t:"1537-08-25", tur:"kusatma", ad:"Korfu kuşatması",      taraf_metin:"Venedik",   sonuc:"yenilgi", seri:"venedik",  lat:39.62, lon:19.92, sure:200, taraf:["osmanli","venedik"] },
{ t:"1601-09-10", tur:"kusatma", ad:"Kanije savunması",     taraf_metin:"Habsburg",  sonuc:"zafer",   seri:"habsburg", lat:46.46, lon:16.99, sure:200, taraf:["osmanli","habsburg"] },
{ t:"1688-10-20", tur:"kusatma", ad:"Eğriboz savunması",    taraf_metin:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:38.46, lon:23.60, sure:200, taraf:["osmanli","venedik"] },
// Rusya'nın 1774-1795 sınırındaki "bulgaristan-prensligi/sirbistan-prensligi" gibi
// stale-id sorunu burada yok; İsmail 1790'da doğrudan Osmanlı-Rus cephesi.
{ t:"1790-12-22", tur:"kusatma", ad:"İsmail kuşatması",     taraf_metin:"Rusya",     sonuc:"yenilgi", seri:"rus",      lat:45.35, lon:28.83, sure:200, taraf:["osmanli","rusya"] },

// --- Başarılı büyük kuşatmalar ---
{ t:"1453-04-06", tur:"kusatma", ad:"İstanbul kuşatması",   taraf_metin:"Bizans",    sonuc:"zafer",   seri:"bizans",   lat:41.01, lon:28.95, sure:120, taraf:["osmanli","bizans"] },
{ t:"1521-06-25", tur:"kusatma", ad:"Belgrad kuşatması",    taraf_metin:"Macaristan",sonuc:"zafer",   seri:"habsburg", lat:44.82, lon:20.46, sure:200, taraf:["osmanli","macaristan"] },
{ t:"1522-06-26", tur:"kusatma", ad:"Rodos kuşatması",      taraf_metin:"St. Jean",  sonuc:"zafer",   seri:"venedik",  lat:36.44, lon:28.22, sure:300, taraf:["osmanli","rodos-sovalyeleri"] },
{ t:"1570-07-25", tur:"kusatma", ad:"Lefkoşa kuşatması",    taraf_metin:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:35.19, lon:33.36, sure:200, taraf:["osmanli","venedik"] },
{ t:"1648-05-01", tur:"kusatma", ad:"Kandiye kuşatması",    taraf_metin:"Venedik",   sonuc:"zafer",   seri:"venedik",  lat:35.34, lon:25.13, sure:800, taraf:["osmanli","venedik"] },
{ t:"1638-11-15", tur:"kusatma", ad:"Bağdat kuşatması",     taraf_metin:"Safevî",    sonuc:"zafer",   seri:"safevi",   lat:33.34, lon:44.36, sure:200, taraf:["osmanli","safevi"] },

// --- İç isyanlar (ateş) ---
// Not: bu bölümdeki isyanların çoğu devlet-i aliyye içi hareketlerdir; devletler.js'te
// karşılığı olan bir "taraf devlet" yok, o yüzden taraf alanı yalnız Sırp/Rum isyanlarında
// var (bu ikisi doğrudan bir devletler.js kaydının kuruluş anına denk geliyor).
{ t:"1416-05-01", tur:"isyan", ad:"Şeyh Bedreddin isyanı",  taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:41.10, lon:26.60, sure:400 },
{ t:"1416-05-01", tur:"isyan", ad:"Börklüce Mustafa",       taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:37.86, lon:27.26, sure:400 },
{ t:"1416-09-01", tur:"isyan", ad:"Torlak Kemal",           taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:38.61, lon:27.43, sure:300 },
{ t:"1511-03-01", tur:"isyan", ad:"Şahkulu (Teke)",         taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:36.89, lon:30.70, sure:400 },
{ t:"1511-07-02", tur:"isyan", ad:"Şahkulu (Sivas)",        taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:39.75, lon:37.02, sure:400 },
{ t:"1519-03-01", tur:"isyan", ad:"Bozoklu Şeyh Celâl",     taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:39.82, lon:34.81, sure:400 },
{ t:"1524-01-01", tur:"isyan", ad:"Hain Ahmed Paşa",        taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:30.05, lon:31.24, sure:300 },
{ t:"1526-01-01", tur:"isyan", ad:"Kalender Çelebi",        taraf_metin:"iç isyan", sonuc:"zafer", seri:"ic",  lat:38.36, lon:38.31, sure:300 },
{ t:"1599-06-01", tur:"isyan", ad:"Karayazıcı Abdülhalim",  taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:37.16, lon:38.80, sure:900 },
{ t:"1603-01-01", tur:"isyan", ad:"Deli Hasan",             taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:39.75, lon:37.02, sure:600 },
{ t:"1607-10-23", tur:"isyan", ad:"Canbolatoğlu Ali Paşa",  taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:36.20, lon:37.13, sure:500 },
{ t:"1608-08-05", tur:"isyan", ad:"Kalenderoğlu",           taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:38.02, lon:36.53, sure:400 },
{ t:"1628-09-22", tur:"isyan", ad:"Abaza Mehmed Paşa",      taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:39.91, lon:41.27, sure:600 },
{ t:"1659-02-16", tur:"isyan", ad:"Abaza Hasan Paşa",       taraf_metin:"Celâlî",   sonuc:"zafer", seri:"ic",  lat:36.20, lon:37.13, sure:400 },
{ t:"1795-03-01", tur:"isyan", ad:"Pazvandoğlu Osman",      taraf_metin:"iç isyan", sonuc:"belirsiz", seri:"ic", lat:43.99, lon:22.87, sure:1500 },
{ t:"1804-02-14", tur:"isyan", ad:"Birinci Sırp isyanı",    taraf_metin:"Sırplar",  sonuc:"belirsiz", seri:"ic", lat:44.82, lon:20.46, sure:1200, taraf:["osmanli","sirbistan-prensligi"] },
{ t:"1821-03-25", tur:"isyan", ad:"Mora isyanı",            taraf_metin:"Rumlar",   sonuc:"yenilgi", seri:"yunan", lat:37.51, lon:22.38, sure:1500, taraf:["osmanli","yunanistan"] },
{ t:"1875-06-19", tur:"isyan", ad:"Hersek isyanı",          taraf_metin:"Sırplar",  sonuc:"yenilgi", seri:"rus",  lat:43.34, lon:17.81, sure:900, taraf:["osmanli","sirbistan-prensligi"] },

// --- Deniz muharebeleri (çapa) ---
{ t:"1416-05-29", tur:"deniz", ad:"Gelibolu deniz savaşı",  taraf_metin:"Venedik",  sonuc:"yenilgi", seri:"venedik", lat:40.30, lon:26.30, sure:300, taraf:["osmanli","venedik"], galip:"venedik" },
{ t:"1499-08-12", tur:"deniz", ad:"Sapienza (Zonchio)",     taraf_metin:"Venedik",  sonuc:"zafer",   seri:"venedik", lat:36.75, lon:21.70, sure:300, taraf:["osmanli","venedik"], galip:"osmanli" },
// Diu 1509: Ottoman kuvveti henüz sahada yok — bu, Portekiz'e karşı Memlûk (+Gucerat/Kalikut)
// donanmasının savaşı. "osmanli" taraf listesine girmiyor.
{ t:"1509-02-03", tur:"deniz", ad:"Diu (Portekiz)",         taraf_metin:"Portekiz", sonuc:"yenilgi", seri:"memluk",  lat:20.71, lon:70.98, sure:400, taraf:["memluk","portekiz"], galip:"portekiz" },
{ t:"1517-04-18", tur:"deniz", ad:"Cidde savunması",        taraf_metin:"Portekiz", sonuc:"zafer",   seri:"memluk",  lat:21.54, lon:39.17, sure:300, taraf:["osmanli","portekiz"], galip:"osmanli" },
{ t:"1538-02-03", tur:"deniz", ad:"Diu kuşatması",          taraf_metin:"Portekiz", sonuc:"belirsiz",seri:"memluk",  lat:20.71, lon:70.98, sure:400, taraf:["osmanli","portekiz"] },
{ t:"1538-09-28", tur:"deniz", ad:"Preveze",                taraf_metin:"Haçlı donanması", sonuc:"zafer", seri:"venedik", lat:38.90, lon:20.70, sure:400, taraf:["osmanli","venedik","ispanya","papalik"], galip:"osmanli" },
{ t:"1552-08-10", tur:"deniz", ad:"Hürmüz seferi",          taraf_metin:"Portekiz", sonuc:"belirsiz",seri:"memluk",  lat:27.10, lon:56.45, sure:300, taraf:["osmanli","portekiz"] },
{ t:"1554-08-25", tur:"deniz", ad:"Umman denizi çarpışması",taraf_metin:"Portekiz", sonuc:"yenilgi", seri:"memluk",  lat:24.50, lon:57.50, sure:300, taraf:["osmanli","portekiz"], galip:"portekiz" },
{ t:"1560-05-14", tur:"deniz", ad:"Cerbe",                  taraf_metin:"İspanya",  sonuc:"zafer",   seri:"venedik", lat:33.81, lon:10.86, sure:400, taraf:["osmanli","ispanya"], galip:"osmanli" },
{ t:"1571-10-07", tur:"deniz", ad:"İnebahtı (Lepanto)",     taraf_metin:"Haçlı donanması", sonuc:"yenilgi", seri:"venedik", lat:38.20, lon:21.30, sure:400, taraf:["osmanli","ispanya","venedik","papalik","cenova","rodos-sovalyeleri"], galip:"ispanya" },
{ t:"1656-06-26", tur:"deniz", ad:"Çanakkale bozgunu",      taraf_metin:"Venedik",  sonuc:"yenilgi", seri:"venedik", lat:40.05, lon:26.05, sure:300, taraf:["osmanli","venedik"], galip:"venedik" },
{ t:"1657-07-19", tur:"deniz", ad:"Çanakkale zaferi",       taraf_metin:"Venedik",  sonuc:"zafer",   seri:"venedik", lat:40.05, lon:26.05, sure:300, taraf:["osmanli","venedik"], galip:"osmanli" },
{ t:"1770-07-06", tur:"deniz", ad:"Çeşme baskını",          taraf_metin:"Rusya",    sonuc:"yenilgi", seri:"rus",     lat:38.32, lon:26.31, sure:400, taraf:["osmanli","rusya"], galip:"rusya" },
{ t:"1827-10-20", tur:"deniz", ad:"Navarin baskını",        taraf_metin:"İngiltere-Fransa-Rusya", sonuc:"yenilgi", seri:"yunan", lat:36.92, lon:21.69, sure:400, taraf:["osmanli","misir-kavalali","ingiltere","rusya"], galip:"ingiltere" },
{ t:"1853-11-30", tur:"deniz", ad:"Sinop baskını",          taraf_metin:"Rusya",    sonuc:"yenilgi", seri:"rus",     lat:42.03, lon:35.15, sure:300, taraf:["osmanli","rusya"], galip:"rusya" }
];

window.ANTLASMALAR = [
{ t:"1444-06-12", ad:"Edirne-Segedin",       taraf_metin:"Macaristan-Sırbistan", ozet:"On yıllık barış; Sırbistan iade edildi",
  taraf:["osmanli","macaristan","sirp-despotlugu"], topraklar:"Sırp Despotluğu'nun (Semendire dahil) toprakları Osmanlı'dan Sırp Despotu Đurađ Branković'e iade edildi." },
{ t:"1479-01-25", ad:"İstanbul (Venedik)",   taraf_metin:"Venedik",          ozet:"Arnavutluk ve İşkodra Osmanlı'da; 16 yıllık savaş bitti",
  taraf:["osmanli","venedik"], topraklar:"İşkodra ve Arnavutluk kıyısı Venedik'ten Osmanlı'ya geçti; Venedik Ege'deki bazı adalarını korudu, yıllık haraç ödemeyi kabul etti." },
{ t:"1555-05-29", ad:"Amasya",               taraf_metin:"Safevî",           ozet:"İlk resmî doğu sınırı; Irak Osmanlı'da",
  taraf:["osmanli","safevi"], topraklar:"Irak-ı Arab (Bağdat dahil) ve Doğu Anadolu Osmanlı'da kaldı; Revan ve Karabağ Safevî'de kaldı — ilk resmî Osmanlı-Safevî sınırı çizildi." },
{ t:"1590-03-21", ad:"Ferhad Paşa (İstanbul)",taraf_metin:"Safevî",          ozet:"Tebriz, Karabağ, Şirvan ve Gürcistan Osmanlı'da — doğuda en geniş sınır",
  taraf:["osmanli","safevi"], topraklar:"Tebriz, Karabağ, Şirvan, Gürcistan ve Luristan'ın bir kısmı Safevî'den Osmanlı'ya geçti — Osmanlı'nın doğuda ulaştığı en geniş sınır." },
{ t:"1606-11-11", ad:"Zitvatorok",           taraf_metin:"Habsburg",         ozet:"Protokolde eşitlik; haraç kalktı",
  taraf:["osmanli","habsburg"], topraklar:"Toprak el değiştirmedi (savaş öncesi sınıra dönüş); Habsburg'un yıllık haracı tek seferlik ödemeye çevrildi." },
{ t:"1612-11-20", ad:"Nasuh Paşa",           taraf_metin:"Safevî",           ozet:"1590 kazanımları iade edildi; 1555 sınırına dönüş",
  taraf:["osmanli","safevi"], topraklar:"Tebriz, Karabağ, Şirvan ve Gürcistan Osmanlı'dan Safevî'ye geri döndü — sınır 1555 Amasya hattına çekildi." },
{ t:"1639-05-17", ad:"Kasr-ı Şirin",         taraf_metin:"Safevî",           ozet:"Bugünkü İran sınırının temeli",
  taraf:["osmanli","safevi"], topraklar:"Bağdat ve Irak-ı Arab kesin olarak Osmanlı'da kaldı; Revan ve Karabağ Safevî'de kaldı — bugünkü Türkiye-İran-Irak sınırının temeli atıldı." },
{ t:"1672-10-18", ad:"Bucaş",                taraf_metin:"Lehistan",         ozet:"Podolya katıldı; en geniş sınırlar",
  taraf:["osmanli","lehistan"], topraklar:"Podolya (Kamaniçe dahil) Lehistan'dan Osmanlı'ya geçti, Podolya Eyaleti kuruldu; Ukrayna'daki Kazak toprakları üzerinde Osmanlı himayesi tanındı." },
{ t:"1699-01-26", ad:"Karlofça",             taraf_metin:"Kutsal İttifak",   ozet:"Macaristan, Mora, Podolya kaybedildi",
  taraf:["osmanli","habsburg","lehistan","venedik","rusya"],
  topraklar:"Macaristan ve Erdel Osmanlı'dan Habsburg'a; Podolya Osmanlı'dan Lehistan'a; Mora ve Dalmaçya kıyıları Osmanlı'dan Venedik'e geçti. Azak konusu ayrı olarak Rusya ile 1700 İstanbul Antlaşması'na bırakıldı." },
{ t:"1711-07-21", ad:"Prut",                 taraf_metin:"Rusya",            ozet:"Azak geri alındı",
  taraf:["osmanli","rusya"], topraklar:"Azak Kalesi ve çevresi Rusya'dan Osmanlı'ya geri döndü; Rusya Karadeniz kıyısındaki tahkimatını yıktı." },
{ t:"1718-07-21", ad:"Pasarofça",            taraf_metin:"Habsburg-Venedik", ozet:"Belgrad kaybı; Mora geri; Lâle Devri",
  taraf:["osmanli","habsburg","venedik"], topraklar:"Belgrad, Semendire ve kuzey Sırbistan ile Batı Eflak Osmanlı'dan Habsburg'a geçti; buna karşılık Mora Venedik'ten Osmanlı'ya geri alındı." },
{ t:"1739-09-18", ad:"Belgrad",              taraf_metin:"Habsburg-Rusya",   ozet:"Belgrad geri alındı",
  taraf:["osmanli","habsburg","rusya"], topraklar:"Belgrad ve kuzey Sırbistan ile Batı Eflak Habsburg'dan Osmanlı'ya geri alındı; Rusya'ya Azak yıkılmak şartıyla bırakıldı." },
{ t:"1774-07-21", ad:"Küçük Kaynarca",       taraf_metin:"Rusya",            ozet:"Kırım'a 'bağımsızlık'; Karadeniz'de Rusya",
  taraf:["osmanli","rusya","kirim"], topraklar:"Kırım Hanlığı Osmanlı egemenliğinden çıkıp siyaseten bağımsız ilan edildi (dinî bağ hilafette kaldı); Rusya Karadeniz kıyısında Kerç, Yenikale ve Azak'ı aldı." },
{ t:"1812-05-28", ad:"Bükreş",               taraf_metin:"Rusya",            ozet:"Besarabya kaybedildi",
  taraf:["osmanli","rusya"], topraklar:"Besarabya (Prut-Dinyester arası) Osmanlı'ya bağlı Boğdan'dan koparılıp Rusya'ya bırakıldı." },
{ t:"1829-09-14", ad:"Edirne",               taraf_metin:"Rusya",            ozet:"Tuna deltası kaybı; Yunanistan yolu",
  taraf:["osmanli","rusya"], topraklar:"Tuna deltasındaki adalar ve Ahıska-Ahılkelek Rusya'ya bırakıldı; Eflak ve Boğdan'da Rus işgali sona erdi ama özerklik genişledi; Yunanistan'ın bağımsızlığının önü açıldı." },
{ t:"1830-02-03", ad:"Londra Protokolü",     taraf_metin:"İng-Fra-Rus",      ozet:"Bağımsız Yunanistan tanındı",
  taraf:["osmanli","ingiltere","rusya","yunanistan"], topraklar:"Mora ve orta Yunanistan Osmanlı'dan ayrılıp bağımsız Yunanistan Krallığı'na verildi." },
{ t:"1833-05-14", ad:"Kütahya Sözleşmesi",   taraf_metin:"Mısır (Kavalalı)", ozet:"Suriye ve Adana Mehmed Ali ile İbrâhim Paşa'ya bırakıldı",
  taraf:["osmanli","misir-kavalali"], topraklar:"Suriye, Filistin, Adana ve Girit valilikleri Osmanlı merkezinden Mehmed Ali Paşa'nın oğlu İbrâhim Paşa'nın idaresine bırakıldı." },
{ t:"1833-07-08", ad:"Hünkâr İskelesi",      taraf_metin:"Rusya",            ozet:"Sekiz yıllık savunma ittifakı; boğazların Rusya lehine kapatılması",
  taraf:["osmanli","rusya"], topraklar:"Toprak el değiştirmedi; karşılıklı savunma ittifakı kuruldu, gizli maddeyle Boğazlar üçüncü devletlerin savaş gemilerine Rusya lehine kapatıldı." },
{ t:"1838-08-16", ad:"Balta Limanı",         taraf_metin:"İngiltere",        ozet:"Serbest ticaret; tekellerin kaldırılışı",
  taraf:["osmanli","ingiltere"], topraklar:"Toprak konusu yok; iç tekeller kaldırıldı, İngiliz mallarına düşük gümrük ve serbest ticaret hakkı tanındı." },
{ t:"1840-07-15", ad:"Londra (Mısır)",       taraf_metin:"İng-Rus-Avu-Prusya",ozet:"Dört devlet Osmanlı'nın yanında; Mehmed Ali'ye ültimatom",
  taraf:["osmanli","ingiltere","rusya","habsburg","almanya"], topraklar:"Mehmed Ali Paşa'ya Mısır'ın irsî valiliği karşılığında Suriye, Adana, Girit ve Hicaz'ı Osmanlı'ya iade etmesi şartı koşuldu." },
{ t:"1840-11-27", ad:"İskenderiye Konvansiyonu",taraf_metin:"Mısır (Kavalalı)",ozet:"Suriye, Adana, Girit ve Hicaz iade; donanma geri verildi",
  taraf:["osmanli","misir-kavalali"], topraklar:"Suriye, Filistin, Adana, Girit ve Hicaz Mehmed Ali'den Osmanlı merkezine geri döndü; Mısır ve Sudan'ın irsî valiliği Mehmed Ali hanedanında bırakıldı." },
{ t:"1841-07-13", ad:"Londra Boğazlar Sözleşmesi",taraf_metin:"Büyük devletler",ozet:"Barışta boğazlar bütün savaş gemilerine kapalı",
  taraf:["osmanli","ingiltere","rusya","habsburg","almanya"], topraklar:"Toprak konusu yok; Boğazlar barış zamanında bütün yabancı savaş gemilerine kapatıldı, Hünkâr İskelesi'nin Rusya'ya tanıdığı ayrıcalık kaldırıldı." },
{ t:"1856-03-30", ad:"Paris",                taraf_metin:"Avrupa devletleri",ozet:"Osmanlı, Avrupa hukuk ailesine kabul edildi",
  taraf:["osmanli","ingiltere","rusya","habsburg","sardinya-piyemonte"],
  topraklar:"Güney Besarabya Rusya'dan geri alınıp Boğdan'a katıldı; Karadeniz tarafsızlaştırılıp bütün devletlerin savaş gemilerine kapatıldı; Eflak-Boğdan'ın özerkliği güvence altına alındı." },
{ t:"1878-07-13", ad:"Berlin",               taraf_metin:"Büyük devletler",  ozet:"Balkanlar'ın büyük tasfiyesi",
  taraf:["osmanli","ingiltere","rusya","habsburg","almanya","italya","sirbistan-prensligi","bulgaristan-prensligi","karadag","romanya"],
  topraklar:"Sırbistan, Romanya ve Karadağ tam bağımsızlığını kazandı (toprakları büyüdü); küçültülmüş özerk Bulgaristan Prensliği kuruldu, Rumeli-i Şarkî ayrı özerk vilayet oldu; Bosna-Hersek'in idaresi Osmanlı'dan Avusturya-Macaristan'a geçti (egemenlik nominal Osmanlı'da kaldı); Kars, Ardahan, Batum Rusya'ya bırakıldı." },
{ t:"1912-10-18", ad:"Uşi",                  taraf_metin:"İtalya",           ozet:"Libya ve Oniki Ada kaybı",
  taraf:["osmanli","italya"], topraklar:"Trablusgarp ve Bingazi (Libya) Osmanlı'dan İtalya'ya geçti; Oniki Ada İtalya'ya \"geçici\" işgal olarak bırakıldı (fiilen kalıcılaştı)." },
{ t:"1913-05-30", ad:"Londra",               taraf_metin:"Balkan devletleri",ozet:"Midye-Enez hattı; Rumeli'nin kaybı",
  taraf:["osmanli","bulgaristan-prensligi","sirbistan-prensligi","yunanistan","karadag"],
  topraklar:"Midye-Enez hattının batısındaki bütün Rumeli toprakları (Selanik, Yanya, Girit dahil) Osmanlı'dan Balkan devletlerine bırakıldı." },
{ t:"1918-10-30", ad:"Mondros Mütarekesi",   taraf_metin:"İtilaf devletleri",ozet:"Fiilî teslimiyet; işgaller başladı",
  taraf:["osmanli","ingiltere","italya"], topraklar:"Toprak resmen devredilmedi ama İtilaf devletlerine stratejik nokta ve demiryollarını işgal hakkı tanındı; fiilen Anadolu ve Trakya'nın işgalinin yolu açıldı." },
{ t:"1920-08-10", ad:"Sevr",                 taraf_metin:"İtilaf devletleri",ozet:"Uygulanamayan paylaşım projesi",
  taraf:["osmanli","ingiltere","italya","yunanistan"],
  topraklar:"İzmir ve Doğu Trakya Yunanistan'a, Oniki Ada ve Antalya bölgesi İtalya'ya, güneydoğu Fransız nüfuz bölgesine bırakılıyor; bağımsız Ermenistan ve özerk Kürdistan öngörülüyordu — TBMM tanımadığı için hiç uygulanmadı." },
{ t:"1921-10-13", ad:"Kars",                 taraf_metin:"Kafkas cumhuriyetleri", ozet:"Bugünkü doğu sınırı",
  taraf:["tbmm-turkiye"], topraklar:"Kars, Ardahan ve Iğdır Sovyet Ermenistan ve Gürcistan'dan TBMM Türkiyesi'ne kesin olarak geçti — bugünkü doğu sınırı." },
{ t:"1922-10-11", ad:"Mudanya Mütarekesi",   taraf_metin:"İtilaf devletleri",ozet:"Doğu Trakya savaşsız kurtuldu; Yunan çekilmesi düzenlendi",
  taraf:["tbmm-turkiye","ingiltere","italya"],
  topraklar:"Doğu Trakya, Yunan işgalinden çıkıp savaş yapılmadan TBMM Türkiyesi'ne bırakıldı; İstanbul ve Boğazlar TBMM idaresine geçene dek İtilaf kuvvetlerinde kaldı." },
{ t:"1923-07-24", ad:"Lozan",                taraf_metin:"İtilaf devletleri",ozet:"Yeni Türkiye'nin tanınması",
  taraf:["tbmm-turkiye","ingiltere","italya","yunanistan"],
  topraklar:"Sevr'in bütün toprak talepleri düştü; bugünkü Türkiye sınırları (Musul hariç, ileride ayrı çözüldü) uluslararası tanındı; Ege adalarının çoğu Yunanistan'da, Oniki Ada İtalya'da kaldı." }
];

// Kerden Antlaşması: Afşar Devleti (Nadir Şah sonrası) ile — 1743 Musul savunmasının
// diplomatik sonucu. ANTLASMALAR dizisine tarihi sıraya göre eklenmedi, ayrı ekleniyor
// çünkü yukarıdaki blok zaten kronolojik; bkz. OTURUM-10-ILERLEME.md.
window.ANTLASMALAR.push(
  { t:"1746-09-04", ad:"Kerden", taraf_metin:"Afşar (Nadir Şah)", ozet:"1639 Kasr-ı Şirin sınırına dönüş",
    taraf:["osmanli","afsar"], topraklar:"Toprak el değiştirmedi; 1730'lardan beri tartışmalı Bağdat-Kirkük hattı 1639 Kasr-ı Şirin sınırına göre teyit edildi." },
  { t:"1830-08-30", ad:"Sırbistan özerklik fermanı", taraf_metin:"Sırbistan Prensliği", ozet:"Sırbistan'a geniş iç özerklik tanındı",
    taraf:["osmanli","sirbistan-prensligi"], topraklar:"Toprak el değiştirmedi; Sırbistan Prensliği'ne (1804-1815 isyanlarının sonucu) geniş iç özerklik ve kendi ordusunu kurma hakkı tanındı, yıllık haraca bağlı vasal statüsü resmileşti." }
);
window.ANTLASMALAR.sort((a,b)=> a.t < b.t ? -1 : 1);

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
{ ad:"Timur'un Sivas seferi (1400)", taraf:"dusman", renk:"#8a5a00",
  f:"1400-06-01", t:"1400-09-01",
  yol:[[46.30,38.08],[43.39,38.50],[41.28,39.90],[39.49,39.75],[37.02,39.75]] },
{ ad:"Niğbolu Haçlı seferi (1396)", taraf:"dusman", renk:"#1f5fa8",
  f:"1396-07-01", t:"1396-09-25",
  yol:[[19.04,47.50],[20.46,44.82],[22.40,44.72],[22.88,43.99],[23.96,43.74],[24.90,43.71]] },
// ⚠️ `taraf` alanı: okun rengini belirler. Yazılmazsa "osmanli" varsayılır.
//   osmanli -> koyu kırmızı/siyah   dusman -> yeşil, sarı ya da mavi
// Kullanıcı kuralı: Türk okları kırmızı/siyah, düşman okları soğuk renkler.
{ ad:"Savoy Haçlı seferi (1366) — Gelibolu'nun kaybı", taraf:"dusman", renk:"#1b7a3f",
  f:"1366-06-01", t:"1366-09-01",
  yol:[[12.34,45.44],[15.20,42.30],[19.92,39.62],[23.60,38.46],[26.20,40.05],[26.67,40.41]] },

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

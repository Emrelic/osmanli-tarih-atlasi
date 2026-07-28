// ============================================================================
// YERLEŞİM VERİ SETİ — petek (hücre) tabanlı harita motorunun kaynağı
// ============================================================================
// Her yerleşim bir "petek"tir: çevresindeki toprağı temsil eder. Petek sınırları
// komşu yerleşimlerle ortadan bölünerek (Voronoi) belirlenir, ardından kara
// maskesi ve nehir yataklarıyla düzeltilir → cetvelle çizilmiş köşeli sınır olmaz.
// Bir yerleşim el değiştirince peteği bütün olarak el değiştirir.
//
// Alanlar:
//   ad   : yerleşim adı
//   tur  : sehir | kale | liman | bolge
//   lat/lon : koordinat (WGS84)
//   g    : 3 başkent · 2 önemli (etiketli) · 1 normal (yakınlaşınca etiketli)
//          0 yalnız petek için (haritada işaret yok) — yalnızca GÖRÜNÜM önceliği
//   k    : İDARİ KADEME (Osmanlı taksimatıyla birebir; görünümden bağımsız):
//          1 payitaht (imparatorluk merkezi)
//          2 eyalet/bölge başşehri (beylerbeylik-vilâyet merkezi)
//          3 sancak merkezi / stratejik kale (kaybı bölgeyi kaybettirir)
//          4 tarihî kayıtlarda geçen küçük birim (kaza-karye ölçeği)
//          0 hiyerarşi dışı (komşu devlet şehri, sahipsiz bölge noktası)
//   m    : bağlı olunan k1/k2 merkezin adı (k3-k4'te zorunlu). Bağlılık coğrafî
//          en-yakın-merkez kuralıyla atanır, tarihî eyalet kayıtlarıyla düzeltilir
//          (ör. Kerkük→Şehrizor, Hama→Trablusşam, Malatya→Maraş/Dulkadir).
//          k1/k2 merkezlerde m yoktur; istisna Söğüt (payitaht rütbesi kalır,
//          hücresi Bursa bölgesine katılır). arac/uret_petek.py bu alanlardan
//          data/bolgeler.js'i (2. derece merkezlerin toplu bölge sınırları) üretir.
//   d    : Osmanlı hâkimiyet dönemleri [{f: giriş, t: çıkış, y: yöntem}]
//          y: savas | kusatma | antlasma | vassal | ilhak
//          Boş dizi [] → hiç Osmanlı olmadı (komşu; petek sınırını belirler)
//   v    : TÂBİ / DOLAYLI idare dönemleri [{f, t, k: kimin elinde}] — isteğe bağlı.
//          Hukuken Osmanlı toprağı sayıldığı hâlde merkezden yönetilmeyen
//          aralıklar: muhtar valilik, tâbi beylik, fiilî işgal. Haritada bir ton
//          AÇIK kırmızıyla çizilir ve alan hesabında ayrı gösterilir.
//          Aynı tarihte hem d hem v varsa v kazanır (doğrudan idare askıdadır).
//          Örn. Mısır 1805-1914 Kavalalı hanedanı; Suriye 1832-1841 İbrâhim Paşa.
//   s    : YABANCI SAHİPLİK zaman çizelgesi [{f, t, d: devlet-boya-kimliği}].
//          Hücrenin ALANININ 1299-1923 arasında Osmanlı dışındaki sahipleri.
//          Osmanlı d/v dönemi aktifken s bastırılır (Osmanlı kazanır); harita
//          motoru her devleti kendi renginde ayrı gövde olarak boyar.
//          Kimlikler arac/uret_petek.py'deki BOYALAR tablosundadır (bizans,
//          memluk, iran, rusya, macaristan, venedik...).
//   kur  : kuruluş tarihi (yalnız 1299'dan SONRA kurulan şehirlerde). Kural:
//          şehir kuruluşundan önce petek sahibi olamaz — alanı o tarihe kadar
//          komşu şehrin/devletin bölgesidir; bu, s çizelgesiyle ifade edilir
//          (ör. St. Petersburg kur:1703, alanı 1617-1703 İsveç'tir).
// El değiştirmeler birden çok kayıtla gösterilir (ör. Belgrad 1521-1717, 1739-1867).
// ============================================================================
window.YERLESIMLER = [
// ---------------- ANADOLU ----------------
{ ad:"Yenişehir (Bursa)", tur:"sehir", lat:40.267, lon:29.633, g:0, k:4, m:"Bursa", kur:"1301-01-01",
    d:[{f:"1301-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1301-01-01",d:"bizans"}] },
{ ad:"İnegöl", tur:"sehir", lat:40.080, lon:29.512, g:0, k:4, m:"Bursa",
    d:[{f:"1299-01-01",t:"1923-10-29"}] },
{ ad:"Aydos Kalesi", tur:"kale", lat:40.750, lon:29.500, g:0, k:4, m:"Bursa",
    d:[{f:"1308-01-01",t:"1923-10-29",y:"kusatma"}], s:[{f:"1299-01-01",t:"1308-01-01",d:"bizans"}] },
{ ad:"Geyve", tur:"kale", lat:40.508, lon:30.288, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1304-01-01",d:"bizans"}] },
{ ad:"Köprühisar (Yenişehir)", tur:"kale", lat:40.278, lon:29.647, g:0, k:4, m:"Bursa",
    d:[{f:"1300-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1300-01-01",d:"bizans"}] },
{ ad:"Marmaracık", tur:"kale", lat:40.301, lon:29.680, g:0, k:4, m:"Bursa",
    d:[{f:"1303-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1303-01-01",d:"bizans"}] },
{ ad:"Akhisar (Pamukova)", tur:"kale", lat:40.510, lon:30.150, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1304-01-01",d:"bizans"}] },
{ ad:"Mekece", tur:"kale", lat:40.560, lon:30.240, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1304-01-01",d:"bizans"}] },
{ ad:"Kestel", tur:"kale", lat:40.213, lon:29.170, g:0, k:4, m:"Bursa",
    d:[{f:"1306-01-01",t:"1923-10-29",y:"savas"}], s:[{f:"1299-01-01",t:"1306-01-01",d:"bizans"}] },
{ ad:"Ulubat", tur:"kale", lat:40.171, lon:28.573, g:0, k:4, m:"Bursa",
    d:[{f:"1306-01-01",t:"1923-10-29",y:"savas"}], s:[{f:"1299-01-01",t:"1306-01-01",d:"bizans"}] },
{ ad:"Harmankaya", tur:"kale", lat:40.100, lon:29.980, g:0, k:4, m:"Bursa",
    d:[{f:"1313-01-01",t:"1923-10-29",y:"antlasma"}], s:[{f:"1299-01-01",t:"1313-01-01",d:"bizans"}] },
{ ad:"Akyazı", tur:"sehir", lat:40.685, lon:30.622, g:0, k:4, m:"İstanbul",
    d:[{f:"1324-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1324-01-01",d:"bizans"}] },
{ ad:"İmralı Adası", tur:"kale", lat:40.303, lon:29.078, g:0, k:4, m:"Bursa",
    d:[{f:"1324-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1324-01-01",d:"bizans"}] },
{ ad:"Kandıra", tur:"sehir", lat:41.075, lon:30.147, g:0, k:4, m:"İstanbul",
    d:[{f:"1330-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1330-01-01",d:"bizans"}] },
{ ad:"Mudanya", tur:"liman", lat:40.373, lon:28.883, g:0, k:3, m:"Bursa",
    d:[{f:"1321-01-01",t:"1923-10-29",y:"kusatma"}], s:[{f:"1299-01-01",t:"1321-01-01",d:"bizans"}] },
{ ad:"Yalova", tur:"liman", lat:40.650, lon:29.267, g:0, k:4, m:"Bursa",
    d:[{f:"1323-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1323-01-01",d:"bizans"}] },
{ ad:"Karamürsel", tur:"liman", lat:40.690, lon:29.617, g:0, k:4, m:"Bursa",
    d:[{f:"1323-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1323-01-01",d:"bizans"}] },
{ ad:"Armutlu", tur:"kale", lat:40.517, lon:28.833, g:0, k:4, m:"Bursa",
    d:[{f:"1324-01-01",t:"1923-10-29"}], s:[{f:"1299-01-01",t:"1324-01-01",d:"bizans"}] },
{ ad:"Gemlik (Kios)", tur:"liman", lat:40.430, lon:29.157, g:0, k:3, m:"Bursa",
    d:[{f:"1324-01-01",t:"1923-10-29",y:"kusatma"}], s:[{f:"1299-01-01",t:"1324-01-01",d:"bizans"}] },
{ ad:"Otranto", tur:"kale", lat:40.146, lon:18.489, g:0, k:0,
    d:[{f:"1480-08-11",t:"1481-09-10",y:"savas"}],
    s:[{f:"1299-01-01",t:"1480-08-11",d:"napoli"},{f:"1481-09-10",t:"1923-10-29",d:"napoli"}] },
{ ad:"Brindisi", tur:"liman", lat:40.639, lon:17.945, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Taranto", tur:"liman", lat:40.472, lon:17.243, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Lecce", tur:"sehir", lat:40.352, lon:18.169, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Enez", tur:"liman", lat:40.724, lon:26.075, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1376-01-01",d:"bizans"},{f:"1376-01-01",t:"1456-01-24",d:"ceneviz"}],
    d:[{f:"1456-01-24",t:"1923-10-29"}] },
{ ad:"Datça", tur:"liman", lat:36.727, lon:27.685, g:0, k:4, m:"Muğla",
    s:[{f:"1299-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Bodrum", tur:"kale", lat:37.034, lon:27.430, g:0, k:3, m:"Muğla", kur:"1402-01-01",
    s:[{f:"1299-01-01",t:"1402-01-01",d:"bizans"},{f:"1402-01-01",t:"1523-01-05",d:"sovalye"}],
    d:[{f:"1523-01-05",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Marmaris", tur:"liman", lat:36.855, lon:28.274, g:0, k:4, m:"Muğla",
    s:[{f:"1299-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Fethiye (Makri)", tur:"liman", lat:36.622, lon:29.116, g:0, k:4, m:"Muğla",
    s:[{f:"1299-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Kuşadası", tur:"liman", lat:37.859, lon:27.260, g:0, k:4, m:"İzmir",
    s:[{f:"1299-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1425-06-01",d:"aydin"}],
    d:[{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Söke", tur:"sehir", lat:37.751, lon:27.408, g:0, k:4, m:"İzmir",
    s:[{f:"1299-01-01",t:"1390-01-01",d:"aydin"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Söğüt", tur:"sehir", lat:40.019, lon:30.181, g:3, k:1, m:"Bursa", d:[{f:"1299-01-01",t:"1923-10-29"}] },
{ ad:"Bilecik", tur:"kale", lat:40.142, lon:29.979, g:0, k:4, m:"Bursa", d:[{f:"1299-01-01",t:"1923-10-29",y:"savas"}] },
{ ad:"Eskişehir", tur:"sehir", lat:39.776, lon:30.520, g:1, k:3, m:"Kütahya", d:[{f:"1299-01-01",t:"1923-10-29"}] },
{ ad:"Bursa", tur:"sehir", lat:40.188, lon:29.061, g:3, k:1, s:[{f:"1299-01-01",t:"1326-04-06",d:"bizans"}], d:[{f:"1326-04-06",t:"1923-10-29",y:"kusatma"}] },
{ ad:"İznik", tur:"sehir", lat:40.429, lon:29.721, g:1, k:3, m:"Bursa", s:[{f:"1299-01-01",t:"1331-03-02",d:"bizans"}], d:[{f:"1331-03-02",t:"1923-10-29",y:"kusatma"}] },
{ ad:"İzmit", tur:"sehir", lat:40.766, lon:29.917, g:1, k:3, m:"İstanbul", s:[{f:"1299-01-01",t:"1337-01-01",d:"bizans"}], d:[{f:"1337-01-01",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Adapazarı", tur:"sehir", lat:40.780, lon:30.403, g:0, k:4, m:"İstanbul", s:[{f:"1299-01-01",t:"1337-01-01",d:"bizans"}], d:[{f:"1337-01-01",t:"1923-10-29"}] },
{ ad:"Balıkesir", tur:"sehir", lat:39.649, lon:27.886, g:1, k:3, m:"Bursa", s:[{f:"1299-01-01",t:"1345-01-01",d:"karesi"}], d:[{f:"1345-01-01",t:"1923-10-29",y:"ilhak"}] },
{ ad:"Çanakkale", tur:"liman", lat:40.147, lon:26.409, g:1, k:3, m:"Bursa", s:[{f:"1299-01-01",t:"1345-01-01",d:"karesi"}], d:[{f:"1345-01-01",t:"1923-10-29",y:"ilhak"}] },
{ ad:"Bergama", tur:"sehir", lat:39.121, lon:27.180, g:0, k:4, m:"İzmir", s:[{f:"1299-01-01",t:"1345-01-01",d:"karesi"}], d:[{f:"1345-01-01",t:"1923-10-29"}] },
{ ad:"Ankara", tur:"sehir", lat:39.933, lon:32.860, g:3, k:2, s:[{f:"1299-01-01",t:"1354-08-01",d:"ahiler"}], d:[{f:"1354-08-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
// Kütahya: Konya bozgunundan sonra İbrâhim Paşa'nın ordusu Şubat 1833'te buraya
// kadar geldi; Bâbıâli ile anlaşma da burada yapıldı (Kütahya Sözleşmesi).
{ ad:"Kütahya", tur:"sehir", lat:39.424, lon:29.983, g:1, k:2, s:[{f:"1299-01-01",t:"1381-01-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28",y:"antlasma"},{f:"1429-02-01",t:"1923-10-29",y:"antlasma"}],
    v:[{f:"1833-02-02",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Afyon", tur:"sehir", lat:38.757, lon:30.539, g:0, k:3, m:"Kütahya", s:[{f:"1299-01-01",t:"1381-01-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28"},{f:"1429-02-01",t:"1923-10-29"}] },
{ ad:"Isparta", tur:"sehir", lat:37.765, lon:30.554, g:0, k:3, m:"Kütahya", s:[{f:"1299-01-01",t:"1381-06-01",d:"hamid"}], d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Manisa", tur:"sehir", lat:38.614, lon:27.429, g:1, k:3, m:"İzmir", s:[{f:"1299-01-01",t:"1390-01-01",d:"saruhan"}], d:[{f:"1390-01-01",t:"1402-07-28",y:"savas"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"İzmir", tur:"liman", lat:38.419, lon:27.129, g:2, k:2,
    s:[{f:"1299-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1402-07-28",d:"sovalye"},{f:"1402-07-28",t:"1425-06-01",d:"aydin"},{f:"1919-05-15",t:"1922-09-09",d:"yunanistan"}],
    d:[{f:"1425-06-01",t:"1919-05-15",y:"savas"},{f:"1922-09-09",t:"1923-10-29",y:"savas"}] },
{ ad:"Çeşme", tur:"kale", lat:38.325, lon:26.306, g:0, k:4, m:"İzmir",
    s:[{f:"1299-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1402-07-28",d:"sovalye"},{f:"1402-07-28",t:"1425-06-01",d:"aydin"}],
    d:[{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Aydın", tur:"sehir", lat:37.845, lon:27.840, g:0, k:3, m:"İzmir",
    s:[{f:"1299-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1390-01-01",d:"sovalye"},{f:"1919-05-15",t:"1922-09-07",d:"yunanistan"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1919-05-15"},{f:"1922-09-07",t:"1923-10-29"}] },
{ ad:"Denizli", tur:"sehir", lat:37.783, lon:29.094, g:0, k:3, m:"İzmir", s:[{f:"1299-01-01",t:"1368-01-01",d:"inancogullari"},{f:"1368-01-01",t:"1390-01-01",d:"germiyan"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Muğla", tur:"sehir", lat:37.215, lon:28.363, g:0, k:2, s:[{f:"1299-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Antalya", tur:"liman", lat:36.887, lon:30.703, g:1, k:2, s:[{f:"1299-01-01",t:"1392-01-01",d:"hamid"},{f:"1402-07-28",t:"1425-06-01",d:"hamid"}], d:[{f:"1392-01-01",t:"1402-07-28",y:"savas"},{f:"1425-06-01",t:"1923-10-29"}] },
// Konya: 21 Aralık 1832 meydan savaşında sadrazam Reşid Mehmed Paşa esir düştü;
// şehir Mısır ordusunun eline geçti, Kütahya Sözleşmesi'yle geri verildi.
{ ad:"Konya", tur:"sehir", lat:37.872, lon:32.492, g:2, k:2, s:[{f:"1299-01-01",t:"1397-07-01",d:"karaman"}], d:[{f:"1397-07-01",t:"1402-07-28",y:"savas"},{f:"1468-01-01",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-11-21",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Karaman", tur:"sehir", lat:37.181, lon:33.215, g:0, k:3, m:"Konya", s:[{f:"1299-01-01",t:"1397-07-01",d:"karaman"}], d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1923-10-29"}],
    v:[{f:"1832-11-21",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Niğde", tur:"sehir", lat:37.966, lon:34.679, g:0, k:3, m:"Konya", s:[{f:"1299-01-01",t:"1468-01-01",d:"karaman"}], d:[{f:"1468-01-01",t:"1923-10-29"}] },
{ ad:"Alanya", tur:"liman", lat:36.544, lon:31.999, g:1, k:3, m:"Antalya",
    s:[{f:"1299-01-01",t:"1471-01-01",d:"karaman"}], d:[{f:"1471-01-01",t:"1923-10-29",y:"savas"}] },
{ ad:"Anamur", tur:"kale", lat:36.078, lon:32.837, g:0, k:4, m:"Antalya",
    s:[{f:"1299-01-01",t:"1471-01-01",d:"karaman"}], d:[{f:"1471-01-01",t:"1923-10-29"}] },
{ ad:"Silifke", tur:"sehir", lat:36.309, lon:33.938, g:0, k:4, m:"Konya",
    s:[{f:"1299-01-01",t:"1471-01-01",d:"karaman"}], d:[{f:"1471-01-01",t:"1923-10-29"}] },
{ ad:"Kayseri", tur:"sehir", lat:38.734, lon:35.480, g:1, k:3, m:"Sivas", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1402-07-28"},{f:"1419-01-01",t:"1923-10-29"}] },
{ ad:"Kastamonu", tur:"sehir", lat:41.377, lon:33.777, g:1, k:3, m:"Ankara", s:[{f:"1299-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28",y:"savas"},{f:"1461-06-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Sinop", tur:"liman", lat:42.027, lon:35.151, g:1, k:3, m:"Ankara", s:[{f:"1299-01-01",t:"1322-01-01",d:"pervane"},{f:"1322-01-01",t:"1461-06-01",d:"candar"}], d:[{f:"1461-06-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Amasra", tur:"kale", lat:41.748, lon:32.386, g:0, k:4, m:"Ankara", s:[{f:"1299-01-01",t:"1460-01-01",d:"ceneviz"}], d:[{f:"1460-01-01",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Bartın", tur:"liman", lat:41.634, lon:32.338, g:0, k:4, m:"Ankara",
    s:[{f:"1299-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}],
    d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Safranbolu", tur:"sehir", lat:41.253, lon:32.694, g:0, k:4, m:"Ankara",
    s:[{f:"1299-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}],
    d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Samsun", tur:"liman", lat:41.286, lon:36.331, g:1, k:3, m:"Sivas", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Amasya", tur:"sehir", lat:40.650, lon:35.833, g:1, k:3, m:"Sivas", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Tokat", tur:"sehir", lat:40.314, lon:36.554, g:0, k:3, m:"Sivas", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1923-10-29"}] },
{ ad:"Sivas", tur:"sehir", lat:39.750, lon:37.015, g:1, k:2, s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Trabzon", tur:"liman", lat:41.005, lon:39.723, g:2, k:2, s:[{f:"1299-01-01",t:"1461-08-15",d:"bizans"}], d:[{f:"1461-08-15",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Giresun", tur:"liman", lat:40.918, lon:38.389, g:0, k:4, m:"Trabzon", s:[{f:"1299-01-01",t:"1461-08-15",d:"bizans"}], d:[{f:"1461-08-15",t:"1923-10-29"}] },
{ ad:"Rize", tur:"liman", lat:41.020, lon:40.523, g:0, k:4, m:"Trabzon", s:[{f:"1299-01-01",t:"1461-08-15",d:"bizans"}], d:[{f:"1461-08-15",t:"1923-10-29"}] },
{ ad:"Erzincan", tur:"sehir", lat:39.750, lon:39.492, g:0, k:3, m:"Erzurum", s:[{f:"1299-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1379-01-01",d:"akkoyunlu"},{f:"1379-01-01",t:"1410-01-01",d:"mutahharten"},{f:"1410-01-01",t:"1473-08-11",d:"akkoyunlu"}], d:[{f:"1473-08-11",t:"1923-10-29",y:"savas"}] },
{ ad:"Erzurum", tur:"sehir", lat:39.905, lon:41.266, g:1, k:2, s:[{f:"1299-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Kars", tur:"kale", lat:40.602, lon:43.095, g:1, k:3, m:"Erzurum", s:[{f:"1299-01-01",t:"1534-06-01",d:"gurcistan"},{f:"1878-07-13",t:"1918-05-25",d:"rusya"}], d:[{f:"1534-06-01",t:"1878-07-13",y:"kusatma"},{f:"1918-05-25",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Ardahan", tur:"kale", lat:41.111, lon:42.702, g:0, k:4, m:"Erzurum", s:[{f:"1299-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-07-13",t:"1918-05-25",d:"rusya"}], d:[{f:"1551-01-01",t:"1878-07-13"},{f:"1918-05-25",t:"1923-10-29"}] },
{ ad:"Van", tur:"kale", lat:38.502, lon:43.393, g:1, k:2, s:[{f:"1299-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}], d:[{f:"1548-08-25",t:"1918-10-30",y:"kusatma"}] },
{ ad:"Bitlis", tur:"sehir", lat:38.401, lon:42.108, g:0, k:3, m:"Van", s:[{f:"1299-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1918-10-30"}] },
{ ad:"Diyarbakır", tur:"sehir", lat:37.911, lon:40.237, g:2, k:2, s:[{f:"1299-01-01",t:"1378-01-01",d:"artuklu"},{f:"1378-01-01",t:"1515-09-19",d:"akkoyunlu"}], d:[{f:"1515-09-19",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Mardin", tur:"kale", lat:37.312, lon:40.735, g:0, k:3, m:"Diyarbakır", s:[{f:"1299-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1923-10-29"}] },
// Belen (Beylan) Geçidi bozgunundan (29 Temmuz 1832) sonra Toroslar'ın güneyi
// ve Çukurova Mısır kuvvetlerine açıldı; Adana muhassıllığı 1833 Kütahya
// Sözleşmesi'yle İbrâhim Paşa'ya verildi, 1840 İskenderiye Konvansiyonu'yla iade
// edildi (fiilî devir Şubat 1841).
{ ad:"Urfa", tur:"sehir", lat:37.159, lon:38.796, g:0, k:3, m:"Diyarbakır", s:[{f:"1299-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}],
    v:[{f:"1832-08-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Malatya", tur:"sehir", lat:38.353, lon:38.334, g:0, k:3, m:"Maraş", s:[{f:"1299-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Maraş", tur:"sehir", lat:37.575, lon:36.937, g:0, k:2, s:[{f:"1299-01-01",t:"1515-06-13",d:"dulkadir"}], d:[{f:"1515-06-13",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-08-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Adana", tur:"sehir", lat:37.000, lon:35.321, g:1, k:2, s:[{f:"1299-01-01",t:"1516-08-24",d:"ramazanoglu"}], d:[{f:"1516-08-24",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Tarsus", tur:"sehir", lat:36.917, lon:34.895, g:0, k:3, m:"Adana", s:[{f:"1299-01-01",t:"1516-08-24",d:"ramazanoglu"}], d:[{f:"1516-08-24",t:"1923-10-29"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Antakya", tur:"sehir", lat:36.202, lon:36.161, g:0, k:3, m:"Halep", s:[{f:"1299-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-08-28",t:"1918-10-26"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
// ---------------- RUMELİ / BALKANLAR ----------------
{ ad:"Çorlu", tur:"sehir", lat:41.158, lon:27.800, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"}], d:[{f:"1362-06-01",t:"1923-10-29"}] },
{ ad:"Lüleburgaz", tur:"sehir", lat:41.406, lon:27.359, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"}], d:[{f:"1362-06-01",t:"1923-10-29"}] },
{ ad:"Malkara", tur:"sehir", lat:40.890, lon:26.905, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"}], d:[{f:"1362-06-01",t:"1923-10-29"}] },
{ ad:"Keşan", tur:"sehir", lat:40.848, lon:26.633, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"}], d:[{f:"1362-06-01",t:"1923-10-29"}] },
{ ad:"İpsala", tur:"sehir", lat:40.914, lon:26.383, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"}], d:[{f:"1362-06-01",t:"1923-10-29"}] },
{ ad:"Kilitbahir", tur:"kale", lat:40.150, lon:26.150, g:0, k:4, m:"Edirne", kur:"1452-01-01",
    s:[{f:"1299-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"}],
    d:[{f:"1354-03-02",t:"1366-08-01"},{f:"1376-09-01",t:"1923-10-29"}] },
{ ad:"Çirmen", tur:"kale", lat:41.720, lon:26.200, g:0, k:4, m:"Edirne",
    s:[{f:"1299-01-01",t:"1369-05-01",d:"bizans"}], d:[{f:"1369-05-01",t:"1923-10-29"}] },
{ ad:"Eski Zağra (Stara Zagora)", tur:"sehir", lat:42.425, lon:25.633, g:0, k:4, m:"Sofya",
    s:[{f:"1299-01-01",t:"1372-06-01",d:"bulgaristan"}], d:[{f:"1372-06-01",t:"1923-10-29"}] },
{ ad:"Tatarpazarcığı", tur:"sehir", lat:42.192, lon:24.333, g:0, k:4, m:"Sofya",
    s:[{f:"1299-01-01",t:"1373-01-01",d:"bulgaristan"}], d:[{f:"1373-01-01",t:"1923-10-29",y:"vassal"}] },
{ ad:"İhtiman", tur:"kale", lat:42.433, lon:23.817, g:0, k:4, m:"Sofya",
    s:[{f:"1299-01-01",t:"1373-01-01",d:"bulgaristan"}], d:[{f:"1373-01-01",t:"1923-10-29",y:"vassal"}] },
{ ad:"Köstendil", tur:"sehir", lat:42.283, lon:22.690, g:0, k:4, m:"Sofya",
    s:[{f:"1299-01-01",t:"1374-01-01",d:"bulgaristan"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1923-10-29"}] },
{ ad:"Petriç", tur:"kale", lat:41.404, lon:23.203, g:0, k:4, m:"Selanik",
    s:[{f:"1299-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1923-10-29"}] },
{ ad:"Nevrokop (Gotse Delçev)", tur:"sehir", lat:41.573, lon:23.733, g:0, k:4, m:"Selanik",
    s:[{f:"1299-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1923-10-29"}] },
{ ad:"Drama", tur:"sehir", lat:41.152, lon:24.147, g:0, k:4, m:"Selanik",
    s:[{f:"1299-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1923-10-29"}] },
{ ad:"Gelibolu", tur:"liman", lat:40.410, lon:26.670, g:2, k:3, m:"Edirne", s:[{f:"1299-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"}], d:[{f:"1354-03-02",t:"1366-08-01",y:"antlasma"},{f:"1376-09-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Çimpe", tur:"kale", lat:40.503, lon:26.598, g:1, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"}], d:[{f:"1354-03-02",t:"1366-08-01",y:"antlasma"},{f:"1376-09-01",t:"1923-10-29"}] },
{ ad:"Edirne", tur:"sehir", lat:41.677, lon:26.556, g:3, k:1, s:[{f:"1299-01-01",t:"1369-05-01",d:"bizans"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan"}], d:[{f:"1369-05-01",t:"1913-03-26",y:"savas"},{f:"1913-07-21",t:"1923-10-29",y:"savas"}] },
{ ad:"Dimetoka", tur:"kale", lat:41.348, lon:26.497, g:0, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1361-06-01",d:"bizans"},{f:"1913-05-30",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1361-06-01",t:"1913-05-30",y:"kusatma"}] },
{ ad:"Kırklareli", tur:"sehir", lat:41.735, lon:27.225, g:0, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"},{f:"1912-10-24",t:"1913-07-21",d:"bulgaristan"}], d:[{f:"1362-06-01",t:"1912-10-24"},{f:"1913-07-21",t:"1923-10-29"}] },
{ ad:"Tekirdağ", tur:"liman", lat:40.978, lon:27.511, g:0, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1362-06-01",d:"bizans"},{f:"1912-11-01",t:"1913-07-21",d:"bulgaristan"}], d:[{f:"1362-06-01",t:"1912-11-01"},{f:"1913-07-21",t:"1923-10-29"}] },
{ ad:"İstanbul", tur:"sehir", lat:41.008, lon:28.980, g:3, k:1, s:[{f:"1299-01-01",t:"1453-05-29",d:"bizans"}], d:[{f:"1453-05-29",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Filibe", tur:"sehir", lat:42.144, lon:24.750, g:1, k:3, m:"Sofya", s:[{f:"1299-01-01",t:"1372-06-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1372-06-01",t:"1878-07-13",y:"savas"}] },
{ ad:"Sofya", tur:"sehir", lat:42.698, lon:23.322, g:1, k:2, s:[{f:"1299-01-01",t:"1385-09-01",d:"bulgaristan"},{f:"1878-01-04",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1385-09-01",t:"1878-01-04",y:"kusatma"}] },
{ ad:"Niş", tur:"sehir", lat:43.321, lon:21.896, g:1, k:3, m:"Sofya", s:[{f:"1299-01-01",t:"1386-01-01",d:"sirbistan"},{f:"1689-09-24",t:"1690-09-09",d:"avusturya"},{f:"1878-01-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1386-01-01",t:"1689-09-24",y:"kusatma"},{f:"1690-09-09",t:"1878-01-11",y:"savas"}] },
{ ad:"Vidin", tur:"kale", lat:43.992, lon:22.873, g:0, k:3, m:"Sofya", s:[{f:"1299-01-01",t:"1396-10-01",d:"bulgaristan"},{f:"1689-10-14",t:"1690-09-20",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1396-10-01",t:"1689-10-14",y:"ilhak"},{f:"1690-09-20",t:"1878-07-13"}] },
{ ad:"Tırnova", tur:"sehir", lat:43.081, lon:25.629, g:0, k:4, m:"Sofya", s:[{f:"1299-01-01",t:"1393-07-17",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1393-07-17",t:"1878-07-13",y:"kusatma"}] },
{ ad:"Varna", tur:"liman", lat:43.214, lon:27.915, g:0, k:3, m:"Silistre", s:[{f:"1299-01-01",t:"1391-01-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1391-01-01",t:"1878-07-13"}] },
{ ad:"Şumnu", tur:"kale", lat:43.271, lon:26.936, g:0, k:3, m:"Silistre", s:[{f:"1299-01-01",t:"1388-01-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1388-01-01",t:"1878-07-13"}] },
{ ad:"Silistre", tur:"kale", lat:44.117, lon:27.260, g:0, k:2, s:[{f:"1299-01-01",t:"1393-09-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1393-09-01",t:"1878-07-13"}] },
{ ad:"Niğbolu", tur:"kale", lat:43.706, lon:24.892, g:0, k:3, m:"Sofya", s:[{f:"1299-01-01",t:"1395-01-01",d:"bulgaristan"},{f:"1877-07-16",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1395-01-01",t:"1877-07-16"}] },
{ ad:"Rusçuk", tur:"kale", lat:43.856, lon:25.971, g:0, k:3, m:"Silistre", s:[{f:"1299-01-01",t:"1388-01-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1388-01-01",t:"1878-07-13"}] },
{ ad:"Selanik", tur:"liman", lat:40.640, lon:22.944, g:2, k:2, s:[{f:"1299-01-01",t:"1387-04-09",d:"bizans"},{f:"1403-06-01",t:"1423-01-01",d:"bizans"},{f:"1423-01-01",t:"1430-03-29",d:"venedik"},{f:"1912-11-08",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1387-04-09",t:"1403-06-01",y:"antlasma"},{f:"1430-03-29",t:"1912-11-08",y:"kusatma"}] },
{ ad:"Serez", tur:"sehir", lat:41.089, lon:23.545, g:0, k:3, m:"Selanik", s:[{f:"1299-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1383-09-19",d:"sirbistan"},{f:"1913-06-28",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1383-09-19",t:"1913-06-28",y:"kusatma"}] },
{ ad:"Kavala", tur:"liman", lat:40.940, lon:24.412, g:0, k:4, m:"Selanik", s:[{f:"1299-01-01",t:"1387-01-01",d:"bizans"},{f:"1913-06-28",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1387-01-01",t:"1913-06-28"}] },
{ ad:"Üsküp", tur:"sehir", lat:41.997, lon:21.428, g:1, k:2, s:[{f:"1299-01-01",t:"1392-01-15",d:"sirbistan"},{f:"1912-10-26",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1392-01-15",t:"1912-10-26",y:"savas"}] },
{ ad:"Manastır", tur:"sehir", lat:41.031, lon:21.335, g:0, k:3, m:"Üsküp", s:[{f:"1299-01-01",t:"1385-01-01",d:"sirbistan"},{f:"1912-11-19",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1385-01-01",t:"1912-11-19"}] },
{ ad:"Ohri", tur:"sehir", lat:41.117, lon:20.802, g:0, k:4, m:"Üsküp", s:[{f:"1299-01-01",t:"1395-01-01",d:"sirbistan"},{f:"1912-11-29",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1395-01-01",t:"1912-11-29"}] },
{ ad:"Yanya", tur:"sehir", lat:39.665, lon:20.852, g:1, k:2, s:[{f:"1299-01-01",t:"1430-10-09",d:"bizans"},{f:"1913-03-06",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1430-10-09",t:"1913-03-06",y:"antlasma"}] },
{ ad:"Arta", tur:"sehir", lat:39.161, lon:20.985, g:0, k:4, m:"Yanya", s:[{f:"1299-01-01",t:"1449-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1449-01-01",t:"1881-07-02"}] },
{ ad:"Yenişehir (Larissa)", tur:"sehir", lat:39.639, lon:22.418, g:0, k:3, m:"Yanya", s:[{f:"1299-01-01",t:"1311-03-15",d:"bizans"},{f:"1311-03-15",t:"1390-01-01",d:"katalan"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1394-01-01",t:"1881-07-02",y:"savas"}] },
{ ad:"Tırhala", tur:"sehir", lat:39.555, lon:21.768, g:0, k:3, m:"Yanya", s:[{f:"1299-01-01",t:"1311-03-15",d:"bizans"},{f:"1311-03-15",t:"1390-01-01",d:"katalan"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1394-01-01",t:"1881-07-02"}] },
// Mora isyanı Osmanlı ordusuyla bastırılamayınca II. Mahmud Mehmed Ali'den
// yardım istedi. İbrâhim Paşa Şubat 1825'te Modon'a çıktı, Haziran'da Tripoliçe'yi
// geri aldı; Navarin baskınından (1827) sonra Mısır kuvvetleri Ekim 1828'de
// yarımadayı boşalttı. Atina'daki Osmanlı garnizonu 1833'e kadar direndi.
{ ad:"Atina", tur:"sehir", lat:37.976, lon:23.734, g:1, k:2, s:[{f:"1299-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1687-09-26",t:"1688-04-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1687-09-26",y:"antlasma"},{f:"1688-04-01",t:"1821-03-25",y:"savas"},{f:"1827-06-05",t:"1833-03-31",y:"kusatma"}] },
{ ad:"Mora (Tripoliçe)", tur:"sehir", lat:37.510, lon:22.379, g:1, k:2, s:[{f:"1299-01-01",t:"1460-05-29",d:"bizans"},{f:"1687-08-01",t:"1715-07-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1460-05-29",t:"1687-08-01",y:"savas"},{f:"1715-07-01",t:"1821-03-25",y:"savas"}],
    v:[{f:"1825-06-22",t:"1828-10-05",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Modon", tur:"kale", lat:36.818, lon:21.703, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1500-08-09",d:"venedik"},{f:"1686-06-01",t:"1715-08-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1500-08-09",t:"1686-06-01",y:"kusatma"},{f:"1715-08-01",t:"1825-02-24"}],
    v:[{f:"1825-02-24",t:"1828-10-05",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Balyabadra (Patras)", tur:"liman", lat:38.246, lon:21.735, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1458-05-01",d:"bizans"},{f:"1687-07-01",t:"1715-07-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1458-05-01",t:"1687-07-01",y:"kusatma"},{f:"1715-07-01",t:"1821-03-25"}] },
{ ad:"Anabolu (Nauplion)", tur:"kale", lat:37.567, lon:22.800, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1540-11-01",d:"venedik"},{f:"1686-08-30",t:"1715-07-20",d:"venedik"},{f:"1822-12-12",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1540-11-01",t:"1686-08-30",y:"antlasma"},{f:"1715-07-20",t:"1822-12-12",y:"kusatma"}] },
{ ad:"İnebahtı", tur:"kale", lat:38.399, lon:21.827, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1499-08-28",d:"venedik"},{f:"1687-08-06",t:"1715-07-01",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1499-08-28",t:"1687-08-06",y:"kusatma"},{f:"1715-07-01",t:"1829-05-01"}] },
{ ad:"Eğriboz", tur:"kale", lat:38.464, lon:23.601, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1470-07-12",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1470-07-12",t:"1829-05-01",y:"kusatma"}] },
{ ad:"İstefe (Tebai)", tur:"sehir", lat:38.322, lon:23.319, g:0, k:4, m:"Atina", s:[{f:"1299-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1821-03-25"}] },
{ ad:"Livadya", tur:"sehir", lat:38.435, lon:22.875, g:0, k:4, m:"Atina", s:[{f:"1299-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1821-03-25"}] },
{ ad:"İzdin (Lamia)", tur:"kale", lat:38.900, lon:22.434, g:0, k:4, m:"Yanya", s:[{f:"1299-01-01",t:"1394-01-01",d:"katalan"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1394-01-01",t:"1881-07-02"}] },
{ ad:"İşkodra", tur:"kale", lat:42.069, lon:19.513, g:0, k:2, s:[{f:"1299-01-01",t:"1479-01-25",d:"venedik"},{f:"1913-04-23",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1479-01-25",t:"1913-04-23",y:"antlasma"}] },
{ ad:"Akçahisar (Kruja)", tur:"kale", lat:41.509, lon:19.793, g:1, k:3, m:"İşkodra", s:[{f:"1299-01-01",t:"1478-06-15",d:"arnavutluk"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1478-06-15",t:"1912-11-28",y:"kusatma"}] },
{ ad:"İlbasan (Elbasan)", tur:"kale", lat:41.113, lon:20.083, g:0, k:4, m:"İşkodra", kur:"1466-06-01", s:[{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1466-06-01",t:"1912-11-28"}] },
{ ad:"Berat", tur:"sehir", lat:40.705, lon:19.951, g:0, k:4, m:"Yanya", s:[{f:"1299-01-01",t:"1417-01-01",d:"arnavutluk"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1417-01-01",t:"1912-11-28"}] },
{ ad:"Draç", tur:"liman", lat:41.323, lon:19.455, g:0, k:3, m:"İşkodra", s:[{f:"1299-01-01",t:"1501-08-17",d:"venedik"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1501-08-17",t:"1912-11-28",y:"kusatma"}] },
{ ad:"Avlonya", tur:"liman", lat:40.466, lon:19.489, g:0, k:3, m:"Yanya", s:[{f:"1299-01-01",t:"1417-01-01",d:"napoli"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1417-01-01",t:"1912-11-28",y:"kusatma"}] },
{ ad:"Priştine", tur:"sehir", lat:42.663, lon:21.162, g:0, k:3, m:"Üsküp", s:[{f:"1299-01-01",t:"1455-06-01",d:"sirbistan"},{f:"1912-10-22",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1455-06-01",t:"1912-10-22"}] },
{ ad:"Semendire", tur:"kale", lat:44.663, lon:20.930, g:1, k:3, m:"Belgrad", s:[{f:"1299-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1867-04-18",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1739-09-18",t:"1867-04-18",y:"antlasma"}] },
{ ad:"Belgrad", tur:"kale", lat:44.818, lon:20.457, g:2, k:2, s:[{f:"1299-01-01",t:"1427-01-01",d:"sirbistan"},{f:"1427-01-01",t:"1521-08-29",d:"macaristan"},{f:"1688-09-06",t:"1690-10-08",d:"avusturya"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1867-04-18",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1521-08-29",t:"1688-09-06",y:"kusatma"},{f:"1690-10-08",t:"1717-08-18",y:"savas"},{f:"1739-09-18",t:"1867-04-18",y:"antlasma"}] },
{ ad:"Saraybosna", tur:"sehir", lat:43.856, lon:18.413, g:1, k:2, s:[{f:"1299-01-01",t:"1463-06-01",d:"bosna"},{f:"1878-07-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1463-06-01",t:"1878-07-29",y:"savas"}] },
{ ad:"Mostar", tur:"sehir", lat:43.343, lon:17.808, g:0, k:3, m:"Saraybosna", s:[{f:"1299-01-01",t:"1468-01-01",d:"bosna"},{f:"1878-07-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1468-01-01",t:"1878-07-29"}] },
{ ad:"Banaluka", tur:"kale", lat:44.772, lon:17.191, g:0, k:3, m:"Saraybosna", s:[{f:"1299-01-01",t:"1528-01-01",d:"bosna"},{f:"1878-07-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1528-01-01",t:"1878-07-29"}] },
{ ad:"Bükreş", tur:"sehir", lat:44.427, lon:26.103, g:1, k:2, s:[{f:"1299-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[{f:"1462-06-01",t:"1878-07-13",y:"vassal"}] },
{ ad:"Yaş", tur:"sehir", lat:47.157, lon:27.601, g:0, k:2, s:[{f:"1299-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[{f:"1456-06-01",t:"1878-07-13",y:"vassal"}] },
{ ad:"Akkirman", tur:"kale", lat:46.199, lon:30.346, g:0, k:3, m:"Yaş", s:[{f:"1299-01-01",t:"1484-08-03",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[{f:"1484-08-03",t:"1812-05-28",y:"kusatma"}] },
{ ad:"Kili", tur:"kale", lat:45.451, lon:29.271, g:0, k:3, m:"Yaş", s:[{f:"1299-01-01",t:"1484-07-14",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[{f:"1484-07-14",t:"1812-05-28",y:"kusatma"}] },
{ ad:"İbrail", tur:"kale", lat:45.270, lon:27.972, g:0, k:3, m:"Silistre", s:[{f:"1299-01-01",t:"1538-01-01",d:"eflak"},{f:"1829-09-14",t:"1923-10-29",d:"romanya"}], d:[{f:"1538-01-01",t:"1829-09-14"}] },
{ ad:"Özi", tur:"kale", lat:46.619, lon:31.539, g:0, k:3, m:"Silistre", s:[{f:"1299-01-01",t:"1538-01-01",d:"kirim"},{f:"1788-12-17",t:"1923-10-29",d:"rusya"}], d:[{f:"1538-01-01",t:"1788-12-17"}] },
{ ad:"Kamaniçe", tur:"kale", lat:48.674, lon:26.574, g:0, k:2, s:[{f:"1299-01-01",t:"1672-08-27",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}], d:[{f:"1672-08-27",t:"1699-01-26",y:"kusatma"}] },
{ ad:"Erdel (Kaloşvar)", tur:"bolge", lat:46.770, lon:23.591, g:0, k:2, s:[{f:"1299-01-01",t:"1541-08-29",d:"macaristan"},{f:"1687-08-12",t:"1918-11-11",d:"avusturya"}], d:[{f:"1541-08-29",t:"1687-08-12",y:"vassal"}] },
{ ad:"Budin", tur:"sehir", lat:47.498, lon:19.040, g:2, k:2, s:[{f:"1299-01-01",t:"1541-08-29",d:"macaristan"},{f:"1686-09-02",t:"1918-11-11",d:"avusturya"}], d:[{f:"1541-08-29",t:"1686-09-02",y:"ilhak"}] },
{ ad:"Peçuy", tur:"sehir", lat:46.073, lon:18.233, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1543-07-21",d:"macaristan"},{f:"1686-10-14",t:"1918-11-11",d:"avusturya"}], d:[{f:"1543-07-21",t:"1686-10-14",y:"kusatma"}] },
{ ad:"Estergon", tur:"kale", lat:47.795, lon:18.740, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1543-08-10",d:"macaristan"},{f:"1595-09-03",t:"1605-10-03",d:"avusturya"},{f:"1683-10-27",t:"1918-11-11",d:"avusturya"}], d:[{f:"1543-08-10",t:"1595-09-03",y:"kusatma"},{f:"1605-10-03",t:"1683-10-27",y:"kusatma"}] },
{ ad:"Eğri", tur:"kale", lat:47.902, lon:20.377, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1596-10-12",d:"macaristan"},{f:"1687-12-17",t:"1918-11-11",d:"avusturya"}], d:[{f:"1596-10-12",t:"1687-12-17",y:"kusatma"}] },
{ ad:"Kanije", tur:"kale", lat:46.454, lon:16.989, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1600-10-22",d:"macaristan"},{f:"1690-04-13",t:"1918-11-11",d:"avusturya"}], d:[{f:"1600-10-22",t:"1690-04-13",y:"kusatma"}] },
{ ad:"Uyvar", tur:"kale", lat:47.986, lon:18.162, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1663-09-24",d:"avusturya"},{f:"1685-08-19",t:"1918-11-11",d:"avusturya"}], d:[{f:"1663-09-24",t:"1685-08-19",y:"kusatma"}] },
{ ad:"Temeşvar", tur:"kale", lat:45.760, lon:21.230, g:0, k:2, s:[{f:"1299-01-01",t:"1552-07-27",d:"macaristan"},{f:"1716-10-12",t:"1918-11-11",d:"avusturya"}], d:[{f:"1552-07-27",t:"1716-10-12",y:"kusatma"}] },
{ ad:"Varat", tur:"kale", lat:47.055, lon:21.928, g:0, k:3, m:"Temeşvar", s:[{f:"1299-01-01",t:"1660-08-27",d:"macaristan"},{f:"1692-06-05",t:"1918-11-11",d:"avusturya"}], d:[{f:"1660-08-27",t:"1692-06-05",y:"kusatma"}] },
// ---------------- ADALAR ----------------
{ ad:"Rodos", tur:"kale", lat:36.443, lon:28.226, g:1, k:2, s:[{f:"1299-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-04",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-04",y:"kusatma"}] },
{ ad:"Sakız", tur:"liman", lat:38.368, lon:26.135, g:0, k:3, m:"İzmir", s:[{f:"1299-01-01",t:"1566-04-14",d:"ceneviz"},{f:"1694-09-21",t:"1695-02-22",d:"venedik"},{f:"1912-11-11",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-14",t:"1694-09-21",y:"ilhak"},{f:"1695-02-22",t:"1912-11-11",y:"savas"}] },
{ ad:"Midilli", tur:"kale", lat:39.106, lon:26.554, g:0, k:3, m:"İzmir", s:[{f:"1299-01-01",t:"1462-09-17",d:"ceneviz"},{f:"1912-11-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1462-09-17",t:"1912-11-21",y:"kusatma"}] },
{ ad:"Limni", tur:"kale", lat:39.876, lon:25.156, g:0, k:3, m:"Selanik", s:[{f:"1299-01-01",t:"1479-01-25",d:"bizans"},{f:"1912-10-08",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-01-25",t:"1912-10-08"}] },
// Girit, Mora'nın karşılığı olarak 1830'da Mehmed Ali'nin idaresine bırakıldı;
// 1840 İskenderiye Konvansiyonu'yla Bâbıâli'ye geri döndü.
{ ad:"Kandiye (Girit)", tur:"liman", lat:35.339, lon:25.133, g:1, k:2, s:[{f:"1299-01-01",t:"1669-09-27",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1669-09-27",t:"1898-12-01",y:"kusatma"}],
    v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Hanya", tur:"kale", lat:35.512, lon:24.019, g:0, k:3, m:"Kandiye (Girit)", s:[{f:"1299-01-01",t:"1645-08-22",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1645-08-22",t:"1898-12-01",y:"kusatma"}] },
{ ad:"Lefkoşa", tur:"sehir", lat:35.170, lon:33.360, g:1, k:2, s:[{f:"1299-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-09-09",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-09-09",t:"1878-06-04",y:"kusatma"}] },
{ ad:"Magosa", tur:"kale", lat:35.125, lon:33.940, g:0, k:3, m:"Lefkoşa", s:[{f:"1299-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1571-08-01",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1571-08-01",t:"1878-06-04",y:"kusatma"}] },
// Ege adaları — her ada kendi peteğiyle boyanır
{ ad:"Semadirek", tur:"kale", lat:40.463, lon:25.530, g:0, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1456-01-24",d:"ceneviz"},{f:"1912-10-19",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-01-24",t:"1912-10-19"}] },
{ ad:"Taşoz", tur:"kale", lat:40.690, lon:24.647, g:0, k:4, m:"Selanik", s:[{f:"1299-01-01",t:"1455-01-01",d:"ceneviz"},{f:"1912-10-18",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1912-10-18"}] },
{ ad:"Bozcaada", tur:"kale", lat:39.833, lon:26.045, g:0, k:3, m:"Edirne", s:[{f:"1299-01-01",t:"1455-01-01",d:"bizans"},{f:"1656-06-26",t:"1657-08-31",d:"venedik"},{f:"1912-10-07",t:"1913-11-01",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1656-06-26",y:"kusatma"},{f:"1657-08-31",t:"1912-10-07",y:"kusatma"},{f:"1913-11-01",t:"1923-10-29"}] },
{ ad:"İmroz", tur:"kale", lat:40.163, lon:25.905, g:0, k:4, m:"Edirne", s:[{f:"1299-01-01",t:"1455-01-01",d:"bizans"},{f:"1912-11-01",t:"1913-11-01",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1912-11-01"},{f:"1913-11-01",t:"1923-10-29"}] },
{ ad:"Sisam", tur:"kale", lat:37.755, lon:26.977, g:0, k:4, m:"İzmir", s:[{f:"1299-01-01",t:"1479-01-25",d:"ceneviz"},{f:"1912-03-13",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-01-25",t:"1912-03-13"}] },
{ ad:"İstanköy", tur:"kale", lat:36.893, lon:27.288, g:0, k:3, m:"Rodos", s:[{f:"1299-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1523-01-05",d:"sovalye"},{f:"1912-05-21",t:"1923-10-29",d:"italya"}], d:[{f:"1523-01-05",t:"1912-05-21",y:"antlasma"}] },
{ ad:"Nakşa", tur:"kale", lat:37.104, lon:25.376, g:0, k:3, m:"Rodos", s:[{f:"1299-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03",y:"ilhak"}] },
{ ad:"Andros", tur:"kale", lat:37.833, lon:24.933, g:0, k:4, m:"İzmir", s:[{f:"1299-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Santorini", tur:"kale", lat:36.416, lon:25.432, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1299-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Girit (Resmo)", tur:"kale", lat:35.365, lon:24.482, g:0, k:3, m:"Kandiye (Girit)", s:[{f:"1299-01-01",t:"1646-11-13",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1646-11-13",t:"1898-12-01",y:"kusatma"}],
    v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Karpatos", tur:"kale", lat:35.508, lon:27.213, g:0, k:4, m:"Rodos", s:[{f:"1299-01-01",t:"1538-01-01",d:"venedik"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1538-01-01",t:"1912-05-12"}] },
// ---------------- KIRIM VE KARADENİZ KUZEYİ ----------------
{ ad:"Kefe", tur:"liman", lat:45.032, lon:35.382, g:1, k:2, s:[{f:"1299-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1774-07-21",y:"kusatma"}] },
{ ad:"Bahçesaray", tur:"sehir", lat:44.753, lon:33.861, g:0, k:2, s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-08",d:"kirim"},{f:"1783-04-08",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1774-07-21",y:"vassal"}] },
{ ad:"Kerç", tur:"kale", lat:45.356, lon:36.467, g:0, k:3, m:"Kefe", s:[{f:"1299-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1774-07-21"}] },
{ ad:"Azak", tur:"kale", lat:47.113, lon:39.423, g:0, k:3, m:"Kefe", s:[{f:"1299-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1696-07-19",t:"1711-07-21",d:"rusya"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1696-07-19",y:"kusatma"},{f:"1711-07-21",t:"1774-07-21",y:"antlasma"}] },
{ ad:"Taman", tur:"kale", lat:45.211, lon:36.716, g:0, k:3, m:"Kefe", s:[{f:"1299-01-01",t:"1482-01-01",d:"ceneviz"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1482-01-01",t:"1774-07-21"}] },
{ ad:"Anapa", tur:"kale", lat:44.894, lon:37.316, g:0, k:3, m:"Kefe", s:[{f:"1299-01-01",t:"1781-01-01",d:"kirim"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}], d:[{f:"1781-01-01",t:"1829-09-14"}] },
{ ad:"Sohum", tur:"liman", lat:43.001, lon:41.023, g:0, k:3, m:"Trabzon", s:[{f:"1299-01-01",t:"1578-01-01",d:"gurcistan"},{f:"1810-07-01",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-01-01",t:"1810-07-01"}] },
// ---------------- KAFKASYA / DOĞU ----------------
// ---- OSMANLI-SAFEVÎ (İRAN) CEPHESİ ----
// Bu cephe defalarca el değiştirdi; her yerleşim kendi gerçek tarihleriyle işlendi:
//  1514 Çaldıran → Tebriz kısa süre · 1534-35 Irakeyn (Tebriz+Bağdat)
//  1548 II. İran seferi (Tebriz yine kısa) · 1555 Amasya: doğu sınırı tanındı
//  1578-90 uzun savaş: Gürcistan, Şirvan, Karabağ, Tebriz alındı (1590 Ferhad Paşa)
//  1603-12 Şah Abbas karşı taarruzu: hepsi geri kaybedildi (1612 Nasuh Paşa)
//  1623 Bağdat Safevîlere düştü · 1635 IV. Murad Revan (bir yıl elde tuttu)
//  1638 Bağdat geri alındı · 1639 Kasr-ı Şirin: kalıcı sınır
//  1723-27 Osmanlı-İran savaşı: Tebriz, Hemedan, Kirmanşah alındı
//  1730-36 Nadir Şah geri aldı · 1746 Kerden: 1639 sınırına dönüldü
{ ad:"Tebriz", tur:"sehir", lat:38.080, lon:46.292, g:2, k:2, s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}], d:[
    {f:"1514-09-05",t:"1514-09-15",y:"savas"}, {f:"1534-07-13",t:"1535-06-01",y:"savas"},
    {f:"1548-07-27",t:"1548-08-15",y:"savas"}, {f:"1585-09-25",t:"1603-10-21",y:"savas"},
    {f:"1725-08-04",t:"1730-08-12",y:"kusatma"}] },
{ ad:"Nahçıvan", tur:"sehir", lat:39.209, lon:45.412, g:0, k:3, m:"Revan", s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}], d:[
    {f:"1585-01-01",t:"1603-10-21"}, {f:"1725-01-01",t:"1730-08-12"}] },
{ ad:"Tiflis", tur:"sehir", lat:41.716, lon:44.783, g:1, k:2, s:[{f:"1299-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1578-08-24",t:"1606-01-01",y:"savas"}, {f:"1723-06-12",t:"1735-03-10",y:"kusatma"}] },
{ ad:"Revan", tur:"kale", lat:40.183, lon:44.515, g:1, k:2, s:[{f:"1299-01-01",t:"1828-02-10",d:"iran"},{f:"1828-02-10",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-06-01",t:"1604-06-08",y:"kusatma"}, {f:"1635-08-08",t:"1636-04-01",y:"kusatma"},
    {f:"1724-09-28",t:"1735-06-14",y:"kusatma"}] },
{ ad:"Gence", tur:"kale", lat:40.683, lon:46.360, g:0, k:3, m:"Revan", s:[{f:"1299-01-01",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1588-01-01",t:"1606-01-01"}, {f:"1725-09-12",t:"1735-03-10"}] },
{ ad:"Şamahı", tur:"sehir", lat:40.632, lon:48.641, g:0, k:2, s:[{f:"1299-01-01",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1578-11-01",t:"1607-01-01"}, {f:"1723-08-01",t:"1735-03-10"}] },
{ ad:"Bakü", tur:"liman", lat:40.372, lon:49.867, g:1, k:3, m:"Şamahı", s:[{f:"1299-01-01",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-08-01",t:"1607-01-01",y:"savas"}] },
{ ad:"Derbend", tur:"kale", lat:42.058, lon:48.290, g:0, k:3, m:"Şamahı", s:[{f:"1299-01-01",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-01-01",t:"1607-01-01"}] },
{ ad:"Hemedan", tur:"sehir", lat:34.799, lon:48.515, g:0, k:2, s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}], d:[
    {f:"1724-08-31",t:"1730-08-12",y:"kusatma"}] },
{ ad:"Kirmanşah", tur:"sehir", lat:34.314, lon:47.065, g:0, k:3, m:"Hemedan", s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}], d:[
    {f:"1723-10-01",t:"1730-08-12",y:"savas"}] },
{ ad:"Luristan", tur:"bolge", lat:33.487, lon:48.356, g:0, k:3, m:"Hemedan", s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}], d:[
    {f:"1590-03-21",t:"1603-10-21",y:"antlasma"}] },
{ ad:"Şehrizor", tur:"sehir", lat:35.560, lon:45.430, g:0, k:2, s:[{f:"1299-01-01",t:"1554-01-01",d:"iran"},{f:"1623-01-14",t:"1638-12-25",d:"iran"},{f:"1918-10-30",t:"1923-10-29",d:"ingiltere"}], d:[
    {f:"1554-01-01",t:"1623-01-14"}, {f:"1638-12-25",t:"1918-10-30"}] },
// ---------------- SURİYE / IRAK / HİCAZ ----------------
// 1831-1841 MISIR İŞGALİ: İbrâhim Paşa Kasım 1831'de Gazze-Yafa hattından girdi,
// Akkâ'yı Mayıs 1832'de aldı, Temmuz 1832'de Humus ve Belen'de Osmanlı ordusunu
// bozdu. Kütahya Sözleşmesi (1833) bu toprakları ona valilik olarak bıraktı.
// Müttefik donanmalar Beyrut (Ekim 1840) ve Akkâ'yı (Kasım 1840) alınca ordu
// çekildi; tahliye Şubat 1841'de tamamlandı.
{ ad:"Halep", tur:"sehir", lat:36.202, lon:37.161, g:2, k:2, s:[{f:"1299-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-08-28",t:"1918-10-26",y:"savas"}],
    v:[{f:"1832-06-25",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Hama", tur:"sehir", lat:35.132, lon:36.750, g:0, k:3, m:"Trablusşam", s:[{f:"1299-01-01",t:"1516-09-01",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-01",t:"1918-10-01"}],
    v:[{f:"1832-06-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Şam", tur:"sehir", lat:33.513, lon:36.292, g:2, k:2, s:[{f:"1299-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-01",y:"savas"}],
    v:[{f:"1832-06-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Beyrut", tur:"liman", lat:33.888, lon:35.495, g:0, k:3, m:"Şam", s:[{f:"1299-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-08",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-08"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Trablusşam", tur:"liman", lat:34.436, lon:35.844, g:0, k:2, s:[{f:"1299-01-01",t:"1516-09-26",d:"memluk"},{f:"1918-10-13",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-26",t:"1918-10-13"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Kudüs", tur:"sehir", lat:31.777, lon:35.234, g:2, k:2, s:[{f:"1299-01-01",t:"1516-12-29",d:"memluk"},{f:"1917-12-09",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-29",t:"1917-12-09",y:"antlasma"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Gazze", tur:"sehir", lat:31.502, lon:34.466, g:0, k:3, m:"Kudüs", s:[{f:"1299-01-01",t:"1516-12-21",d:"memluk"},{f:"1917-11-07",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-21",t:"1917-11-07"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Akkâ", tur:"kale", lat:32.928, lon:35.082, g:0, k:3, m:"Şam", s:[{f:"1299-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-09-23",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-01-01",t:"1918-09-23"}],
    v:[{f:"1832-05-27",t:"1840-11-03",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Musul", tur:"sehir", lat:36.340, lon:43.130, g:1, k:2, s:[{f:"1299-01-01",t:"1516-08-24",d:"iran"},{f:"1918-11-08",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-08-24",t:"1918-11-08",y:"antlasma"}] },
{ ad:"Kerkük", tur:"sehir", lat:35.468, lon:44.392, g:0, k:3, m:"Şehrizor", s:[{f:"1299-01-01",t:"1534-12-04",d:"iran"},{f:"1623-01-14",t:"1638-12-25",d:"iran"},{f:"1918-10-30",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-01-14"},{f:"1638-12-25",t:"1918-10-30"}] },
{ ad:"Bağdat", tur:"sehir", lat:33.340, lon:44.361, g:2, k:2, s:[{f:"1299-01-01",t:"1534-12-04",d:"iran"},{f:"1623-01-14",t:"1638-12-25",d:"iran"},{f:"1917-03-11",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-01-14",y:"antlasma"},{f:"1638-12-25",t:"1917-03-11",y:"kusatma"}] },
{ ad:"Kerbelâ", tur:"sehir", lat:32.616, lon:44.025, g:0, k:3, m:"Bağdat", s:[{f:"1299-01-01",t:"1534-12-04",d:"iran"},{f:"1623-01-14",t:"1638-12-25",d:"iran"},{f:"1917-03-11",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-01-14"},{f:"1638-12-25",t:"1917-03-11"}] },
{ ad:"Basra", tur:"liman", lat:30.508, lon:47.783, g:1, k:2, s:[{f:"1299-01-01",t:"1546-01-01",d:"iran"},{f:"1914-11-22",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1546-01-01",t:"1914-11-22",y:"antlasma"}] },
{ ad:"Lahsa", tur:"bolge", lat:25.383, lon:49.588, g:0, k:3, m:"Basra", s:[{f:"1299-01-01",t:"1550-01-01",d:"iran"},{f:"1913-05-08",t:"1923-10-29",d:"suud"}], d:[{f:"1550-01-01",t:"1670-01-01",y:"vassal"},{f:"1871-05-01",t:"1913-05-08",y:"savas"}] },
// HİCAZ: 1803-1813 arasında Suûdî-Vehhâbî hâkimiyeti (hac yolu kapandı, Osmanlı
// hutbesi kaldırıldı) → haritada kayıp. Mehmed Ali'nin oğulları Tosun ve İbrâhim
// paşaların seferleriyle geri alındı; 1841 fermanına kadar Mısır idaresinde
// kaldığı için tâbi katmanda gösterilir.
{ ad:"Mekke", tur:"sehir", lat:21.423, lon:39.826, g:2, k:2,
    s:[{f:"1299-01-01",t:"1517-07-06",d:"memluk"},{f:"1806-02-01",t:"1813-01-24",d:"suud"},{f:"1916-06-10",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1806-02-01",y:"antlasma"},{f:"1841-06-01",t:"1916-06-10"}],
    v:[{f:"1813-01-24",t:"1841-06-01",k:"Mısır (Kavalalı)"}] },
{ ad:"Medine", tur:"sehir", lat:24.470, lon:39.612, g:2, k:2,
    s:[{f:"1299-01-01",t:"1517-07-12",d:"memluk"},{f:"1805-07-20",t:"1812-11-08",d:"suud"},{f:"1919-01-10",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-12",t:"1805-07-20",y:"antlasma"},{f:"1841-06-01",t:"1919-01-10"}],
    v:[{f:"1812-11-08",t:"1841-06-01",k:"Mısır (Kavalalı)"}] },
{ ad:"Cidde", tur:"liman", lat:21.543, lon:39.173, g:0, k:3, m:"Mekke",
    s:[{f:"1299-01-01",t:"1517-07-06",d:"memluk"},{f:"1916-06-16",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1813-01-24"},{f:"1841-06-01",t:"1916-06-16"}],
    v:[{f:"1813-01-24",t:"1841-06-01",k:"Mısır (Kavalalı)"}] },
{ ad:"Yenbu", tur:"liman", lat:24.089, lon:38.063, g:0, k:3, m:"Medine",
    s:[{f:"1299-01-01",t:"1517-07-12",d:"memluk"},{f:"1805-07-20",t:"1811-11-01",d:"suud"},{f:"1916-07-27",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-12",t:"1805-07-20"},{f:"1841-06-01",t:"1916-07-27"}],
    v:[{f:"1811-11-01",t:"1841-06-01",k:"Mısır (Kavalalı)"}] },
// Necid: Dir'iye'nin 1818'de düşürülmesiyle Suûdî emirliği ortadan kaldırıldı;
// Mısır garnizonu 1824'e kadar kaldı, sonra ikinci Suûdî devleti kuruldu.
{ ad:"Dir'iye (Necid)", tur:"kale", lat:24.733, lon:46.575, g:0, k:3, m:"Basra", s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}], d:[],
    v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Tebük", tur:"kale", lat:28.384, lon:36.566, g:0, k:4, m:"Medine", s:[{f:"1299-01-01",t:"1517-07-12",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-12",t:"1918-01-01"}] },
{ ad:"Maan", tur:"kale", lat:30.192, lon:35.734, g:0, k:4, m:"Kudüs", s:[{f:"1299-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-09-27",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-01-01",t:"1918-09-27"}] },
// ---------------- YEMEN ----------------
{ ad:"Zebîd", tur:"sehir", lat:14.195, lon:43.317, g:0, k:3, m:"Sana", s:[{f:"1299-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-01-01",t:"1849-05-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1538-08-03",t:"1635-01-01",y:"savas"},{f:"1849-05-01",t:"1918-10-30",y:"savas"}] },
{ ad:"Aden", tur:"liman", lat:12.786, lon:45.019, g:1, k:3, m:"Sana", s:[{f:"1299-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-01-01",t:"1839-01-19",d:"yemen"},{f:"1839-01-19",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1538-08-03",t:"1635-01-01",y:"savas"}] },
{ ad:"Moha", tur:"liman", lat:13.319, lon:43.250, g:0, k:4, m:"Sana", s:[{f:"1299-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-01-01",t:"1849-05-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1538-08-03",t:"1635-01-01"},{f:"1849-05-01",t:"1918-10-30"}] },
{ ad:"Sana", tur:"sehir", lat:15.369, lon:44.191, g:1, k:2, s:[{f:"1299-01-01",t:"1547-01-01",d:"yemen"},{f:"1635-01-01",t:"1872-04-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1547-01-01",t:"1635-01-01",y:"savas"},{f:"1872-04-01",t:"1918-10-30",y:"savas"}] },
{ ad:"Taiz", tur:"sehir", lat:13.579, lon:44.022, g:0, k:3, m:"Sana", s:[{f:"1299-01-01",t:"1547-01-01",d:"yemen"},{f:"1635-01-01",t:"1872-04-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1547-01-01",t:"1635-01-01"},{f:"1872-04-01",t:"1918-10-30"}] },
{ ad:"Hudeyde", tur:"liman", lat:14.798, lon:42.954, g:0, k:3, m:"Sana", s:[{f:"1299-01-01",t:"1849-05-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1849-05-01",t:"1918-10-30"}] },
{ ad:"Ebha (Asir)", tur:"sehir", lat:18.216, lon:42.505, g:0, k:3, m:"Sana", s:[{f:"1299-01-01",t:"1871-01-01",d:"yemen"}], d:[{f:"1871-01-01",t:"1918-10-30"}] },
// ---------------- MISIR VE SUDAN ----------------
// 1805: Kahire ulemâsının talebiyle Kavalalı Mehmed Ali vali oldu; Mısır o
// tarihten sonra hukuken Osmanlı, fiilen kendi hanedanının idaresindedir.
// Bu yüzden 1805'ten itibaren "tâbi" (açık ton) katmanda gösterilir.
{ ad:"Kahire", tur:"sehir", lat:30.047, lon:31.243, g:2, k:2, s:[{f:"1299-01-01",t:"1517-02-15",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-02-15",t:"1805-07-09",y:"savas"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
{ ad:"İskenderiye", tur:"liman", lat:31.200, lon:29.919, g:1, k:3, m:"Kahire", s:[{f:"1299-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
{ ad:"Dimyat", tur:"liman", lat:31.418, lon:31.814, g:0, k:3, m:"Kahire", s:[{f:"1299-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
{ ad:"Asyut", tur:"sehir", lat:27.181, lon:31.183, g:0, k:3, m:"Kahire", s:[{f:"1299-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-04-13",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
{ ad:"Asvan", tur:"sehir", lat:24.089, lon:32.899, g:0, k:3, m:"Kahire", s:[{f:"1299-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-04-13",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
{ ad:"İbrim", tur:"kale", lat:22.658, lon:31.988, g:0, k:4, m:"Kahire", s:[{f:"1299-01-01",t:"1555-01-01",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1555-01-01",t:"1805-07-09",y:"kusatma"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}] },
// Sudan hiçbir zaman doğrudan Bâbıâli'ye bağlanmadı: 1820-21'de Mehmed Ali'nin
// ordusu fethetti, Kahire'den yönetildi, 1885'te Mehdî ayaklanmasıyla kaybedildi.
{ ad:"Dongola", tur:"sehir", lat:19.169, lon:30.474, g:0, k:3, m:"Hartum", s:[{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Hartum", tur:"sehir", lat:15.500, lon:32.559, g:1, k:2, s:[{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Sennar", tur:"sehir", lat:13.551, lon:33.616, g:0, k:3, m:"Hartum", s:[{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Kordofan (Ubeyyid)", tur:"sehir", lat:13.184, lon:30.218, g:0, k:3, m:"Hartum", s:[{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-08-19",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Sevâkin", tur:"liman", lat:19.106, lon:37.332, g:0, k:2, s:[{f:"1299-01-01",t:"1557-01-01",d:"memluk"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1557-01-01",t:"1885-02-05",y:"ilhak"}] },
{ ad:"Masavva", tur:"liman", lat:15.608, lon:39.474, g:0, k:3, m:"Sevâkin", s:[{f:"1299-01-01",t:"1557-01-01",d:"memluk"},{f:"1885-02-05",t:"1923-10-29",d:"italya"}], d:[{f:"1557-01-01",t:"1885-02-05",y:"ilhak"}] },
// ---------------- KUZEY AFRİKA ----------------
{ ad:"Trablus", tur:"liman", lat:32.897, lon:13.191, g:1, k:2, s:[{f:"1299-01-01",t:"1510-07-25",d:"hafsi"},{f:"1510-07-25",t:"1530-03-24",d:"ispanya"},{f:"1530-03-24",t:"1551-08-15",d:"sovalye"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1912-10-18",y:"kusatma"}] },
{ ad:"Misrata", tur:"sehir", lat:32.378, lon:15.092, g:0, k:3, m:"Trablus", s:[{f:"1299-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1912-10-18"}] },
{ ad:"Bingazi", tur:"liman", lat:32.117, lon:20.068, g:1, k:2, s:[{f:"1299-01-01",t:"1578-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1578-01-01",t:"1912-10-18",y:"ilhak"}] },
{ ad:"Derne", tur:"liman", lat:32.766, lon:22.639, g:0, k:3, m:"Bingazi", s:[{f:"1299-01-01",t:"1578-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1578-01-01",t:"1912-10-18"}] },
{ ad:"Murzuk (Fizan)", tur:"bolge", lat:25.919, lon:13.919, g:0, k:2, s:[{f:"1299-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1577-01-01",t:"1912-10-18",y:"vassal"}] },
{ ad:"Tunus", tur:"liman", lat:36.800, lon:10.180, g:1, k:2, s:[{f:"1299-01-01",t:"1535-07-21",d:"hafsi"},{f:"1535-07-21",t:"1574-08-25",d:"ispanya"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1881-05-12",y:"savas"}] },
{ ad:"Kayrevan", tur:"sehir", lat:35.678, lon:10.096, g:0, k:3, m:"Tunus", s:[{f:"1299-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1881-05-12"}] },
{ ad:"Gabes", tur:"liman", lat:33.881, lon:10.098, g:0, k:3, m:"Tunus", s:[{f:"1299-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1881-05-12"}] },
{ ad:"Cezayir", tur:"liman", lat:36.753, lon:3.059, g:1, k:2, s:[{f:"1299-01-01",t:"1529-08-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1529-08-01",t:"1830-07-05",y:"antlasma"}] },
{ ad:"Konstantin", tur:"sehir", lat:36.365, lon:6.615, g:0, k:3, m:"Cezayir", s:[{f:"1299-01-01",t:"1529-08-01",d:"zeyyani"},{f:"1837-10-13",t:"1923-10-29",d:"fransa"}], d:[{f:"1529-08-01",t:"1837-10-13"}] },
{ ad:"Oran", tur:"liman", lat:35.699, lon:-0.634, g:0, k:3, m:"Cezayir", s:[{f:"1299-01-01",t:"1509-05-17",d:"zeyyani"},{f:"1509-05-17",t:"1708-01-01",d:"ispanya"},{f:"1732-07-02",t:"1792-02-12",d:"ispanya"},{f:"1831-01-04",t:"1923-10-29",d:"fransa"}], d:[{f:"1708-01-01",t:"1732-07-02",y:"kusatma"},{f:"1792-02-12",t:"1831-01-04",y:"antlasma"}] },
{ ad:"Tilimsan", tur:"sehir", lat:34.882, lon:-1.315, g:0, k:3, m:"Cezayir", s:[{f:"1299-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1552-01-01",t:"1830-07-05"}] },
// ---------------- YENİ OSMANLI YERLEŞİMLERİ (bölge yoğunlaştırma) ----------------
{ ad:"Batum", tur:"liman", lat:41.646, lon:41.641, g:1, k:3, m:"Trabzon", d:[{f:"1578-01-01",t:"1878-07-13",y:"savas"},{f:"1918-04-14",t:"1918-12-01",y:"antlasma"}],
    s:[{f:"1299-01-01",t:"1578-01-01",d:"gurcistan"},{f:"1878-07-13",t:"1918-04-14",d:"rusya"},{f:"1918-12-01",t:"1921-03-16",d:"gurcistan"},{f:"1921-03-16",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ahıska", tur:"kale", lat:41.643, lon:42.986, g:0, k:3, m:"Erzurum", d:[{f:"1578-08-01",t:"1829-09-14",y:"savas"}],
    s:[{f:"1299-01-01",t:"1578-08-01",d:"gurcistan"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}] },
{ ad:"Sayda", tur:"liman", lat:33.563, lon:35.369, g:0, k:3, m:"Şam", d:[{f:"1517-01-01",t:"1918-10-06"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1299-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-10-06",t:"1923-10-29",d:"fransa"}] },
{ ad:"Yafa", tur:"liman", lat:32.054, lon:34.755, g:0, k:3, m:"Kudüs", d:[{f:"1516-12-28",t:"1917-11-16"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1299-01-01",t:"1516-12-28",d:"memluk"},{f:"1917-11-16",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Nablus", tur:"sehir", lat:32.221, lon:35.254, g:0, k:3, m:"Kudüs", d:[{f:"1516-12-28",t:"1918-09-21"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1299-01-01",t:"1516-12-28",d:"memluk"},{f:"1918-09-21",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Amman", tur:"sehir", lat:31.949, lon:35.933, g:0, k:4, m:"Şam", d:[{f:"1516-12-28",t:"1918-09-25"}],
    s:[{f:"1299-01-01",t:"1516-12-28",d:"memluk"},{f:"1918-09-25",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Kerak", tur:"kale", lat:31.181, lon:35.703, g:0, k:4, m:"Kudüs", d:[{f:"1517-01-01",t:"1918-01-01"}],
    s:[{f:"1299-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Rakka", tur:"sehir", lat:35.953, lon:39.008, g:0, k:3, m:"Diyarbakır", d:[{f:"1516-08-28",t:"1918-10-26"}],
    s:[{f:"1299-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}] },
{ ad:"Deyrizor", tur:"sehir", lat:35.336, lon:40.141, g:0, k:4, m:"Halep", d:[{f:"1516-08-28",t:"1918-10-26"}],
    s:[{f:"1299-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}] },
{ ad:"Süveyş", tur:"liman", lat:29.974, lon:32.548, g:0, k:4, m:"Kahire", d:[{f:"1517-01-22",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Kavalalı hanedanı"}],
    s:[{f:"1299-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Sfaks", tur:"liman", lat:34.740, lon:10.760, g:0, k:4, m:"Tunus", d:[{f:"1574-08-25",t:"1881-05-12"}],
    s:[{f:"1299-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}] },
{ ad:"Annaba", tur:"liman", lat:36.900, lon:7.766, g:0, k:4, m:"Cezayir", d:[{f:"1535-01-01",t:"1832-03-01"}],
    s:[{f:"1299-01-01",t:"1535-01-01",d:"zeyyani"},{f:"1832-03-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Bicâye", tur:"liman", lat:36.751, lon:5.056, g:0, k:4, m:"Cezayir", d:[{f:"1555-01-01",t:"1833-09-29"}],
    s:[{f:"1299-01-01",t:"1510-01-01",d:"zeyyani"},{f:"1510-01-01",t:"1555-01-01",d:"ispanya"},{f:"1833-09-29",t:"1923-10-29",d:"fransa"}] },
{ ad:"Zeyla", tur:"liman", lat:11.355, lon:43.473, g:0, k:3, m:"Sevâkin", d:[{f:"1559-01-01",t:"1884-01-01",y:"ilhak"}],
    s:[{f:"1299-01-01",t:"1559-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Hacıbey (Odessa)", tur:"kale", lat:46.485, lon:30.733, g:0, k:3, m:"Silistre", d:[{f:"1538-01-01",t:"1792-01-09"}],
    s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1538-01-01",d:"kirim"},{f:"1792-01-09",t:"1923-10-29",d:"rusya"}] },
// ---------------- KOMŞULAR (petek sınırını belirler; s = alanın yabancı sahipleri) ----------------
{ ad:"Viyana", tur:"sehir", lat:48.208, lon:16.373, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Graz", tur:"sehir", lat:47.071, lon:15.439, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Zagreb", tur:"sehir", lat:45.815, lon:15.982, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Ljubljana", tur:"sehir", lat:46.056, lon:14.506, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Bratislava", tur:"sehir", lat:48.146, lon:17.107, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Krakov", tur:"sehir", lat:50.065, lon:19.945, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Lvov", tur:"sehir", lat:49.840, lon:24.030, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1918-11-11",d:"avusturya"}] },
{ ad:"Kiev", tur:"sehir", lat:50.451, lon:30.524, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1667-01-30",d:"lehistan"},{f:"1667-01-30",t:"1923-10-29",d:"rusya"}] },
{ ad:"Harkov", tur:"sehir", lat:49.994, lon:36.231, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1654-01-01",d:"kirim"},{f:"1654-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Voronej", tur:"sehir", lat:51.672, lon:39.184, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1585-01-01",d:"kirim"},{f:"1585-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Astrahan", tur:"sehir", lat:46.348, lon:48.033, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Venedik", tur:"liman", lat:45.440, lon:12.316, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
{ ad:"Roma", tur:"sehir", lat:41.903, lon:12.496, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1870-09-20",d:"papalik"},{f:"1870-09-20",t:"1923-10-29",d:"italya"}] },
{ ad:"Napoli", tur:"liman", lat:40.852, lon:14.268, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Palermo", tur:"liman", lat:38.116, lon:13.361, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Malta", tur:"kale", lat:35.899, lon:14.514, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1530-03-24",d:"napoli"},{f:"1530-03-24",t:"1798-06-12",d:"sovalye"},{f:"1798-06-12",t:"1800-09-05",d:"fransa"},{f:"1800-09-05",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Fas (Fez)", tur:"sehir", lat:34.034, lon:-5.000, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Merakeş", tur:"sehir", lat:31.630, lon:-7.981, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Isfahan", tur:"sehir", lat:32.654, lon:51.668, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Erdebil", tur:"sehir", lat:38.249, lon:48.294, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Meşhed", tur:"sehir", lat:36.297, lon:59.606, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Riyad", tur:"sehir", lat:24.713, lon:46.675, g:0, k:0, d:[], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}] },
{ ad:"Maskat", tur:"liman", lat:23.588, lon:58.408, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1507-01-01",d:"umman"},{f:"1507-01-01",t:"1650-01-26",d:"portekiz"},{f:"1650-01-26",t:"1923-10-29",d:"umman"}] },
{ ad:"Gondar", tur:"sehir", lat:12.603, lon:37.466, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Addis", tur:"sehir", lat:9.030, lon:38.740, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Ndjamena", tur:"sehir", lat:12.107, lon:15.045, g:0, k:0, d:[] },
{ ad:"Agadez", tur:"sehir", lat:16.973, lon:7.991, g:0, k:0, d:[] },
{ ad:"Tamanrasset", tur:"sehir", lat:22.785, lon:5.523, g:0, k:0, d:[] },
{ ad:"Timbuktu", tur:"sehir", lat:16.775, lon:-3.009, g:0, k:0, d:[] },
// ---- BATI AVRUPA ----
{ ad:"Londra", tur:"sehir", lat:51.507, lon:-0.128, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Dublin", tur:"sehir", lat:53.350, lon:-6.260, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Edinburg", tur:"sehir", lat:55.953, lon:-3.189, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Paris", tur:"sehir", lat:48.857, lon:2.352, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Lyon", tur:"sehir", lat:45.760, lon:4.836, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Marsilya", tur:"liman", lat:43.297, lon:5.370, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Bordo", tur:"liman", lat:44.838, lon:-0.579, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Amsterdam", tur:"liman", lat:52.373, lon:4.893, g:0, k:0, d:[], s:[{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Lizbon", tur:"liman", lat:38.722, lon:-9.139, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Porto", tur:"liman", lat:41.150, lon:-8.611, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Madrid", tur:"sehir", lat:40.417, lon:-3.704, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Sevilla", tur:"sehir", lat:37.389, lon:-5.984, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Granada", tur:"sehir", lat:37.177, lon:-3.599, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1492-01-02",d:"granada"},{f:"1492-01-02",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Barselona", tur:"liman", lat:41.387, lon:2.170, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Valensiya", tur:"liman", lat:39.470, lon:-0.377, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Milano", tur:"sehir", lat:45.464, lon:9.190, g:0, k:0, d:[], s:[{f:"1535-11-01",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1859-06-04",d:"avusturya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Floransa", tur:"sehir", lat:43.769, lon:11.256, g:0, k:0, d:[], s:[{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Torino", tur:"sehir", lat:45.070, lon:7.687, g:0, k:0, d:[], s:[{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Cenova", tur:"liman", lat:44.407, lon:8.934, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1797-06-14",d:"ceneviz"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// ---- ORTA AVRUPA / ALMANYA ----
{ ad:"Berlin", tur:"sehir", lat:52.520, lon:13.405, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Hamburg", tur:"liman", lat:53.551, lon:9.994, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Münih", tur:"sehir", lat:48.137, lon:11.575, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Frankfurt", tur:"sehir", lat:50.110, lon:8.682, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Köln", tur:"sehir", lat:50.938, lon:6.960, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Dresden", tur:"sehir", lat:51.050, lon:13.738, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Prag", tur:"sehir", lat:50.088, lon:14.421, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"}] },
// ---- KUZEY AVRUPA / BALTIK ----
{ ad:"Stokholm", tur:"liman", lat:59.329, lon:18.069, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Kopenhag", tur:"liman", lat:55.676, lon:12.568, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Oslo", tur:"liman", lat:59.913, lon:10.752, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"}] },
{ ad:"Helsinki", tur:"liman", lat:60.170, lon:24.938, g:0, k:0, kur:"1550-06-12", d:[], s:[{f:"1299-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"}] },
{ ad:"Riga", tur:"liman", lat:56.949, lon:24.105, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-11-11",d:"rusya"}] },
{ ad:"Königsberg", tur:"liman", lat:54.710, lon:20.512, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Gdansk", tur:"liman", lat:54.352, lon:18.646, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1466-10-19",d:"almanya"},{f:"1466-10-19",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1918-11-11",d:"almanya"}] },
{ ad:"Poznan", tur:"sehir", lat:52.409, lon:16.932, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1918-12-27",d:"almanya"}] },
{ ad:"Varşova", tur:"sehir", lat:52.230, lon:21.011, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1806-11-28",d:"almanya"},{f:"1815-06-09",t:"1918-11-11",d:"rusya"}] },
{ ad:"Vilnius", tur:"sehir", lat:54.687, lon:25.280, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-02-16",d:"rusya"}] },
{ ad:"Minsk", tur:"sehir", lat:53.904, lon:27.561, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}] },
// ---- RUSYA (Ural batısı) ----
{ ad:"Moskova", tur:"sehir", lat:55.756, lon:37.617, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Novgorod", tur:"sehir", lat:58.521, lon:31.271, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"St. Petersburg", tur:"liman", lat:59.934, lon:30.335, g:0, k:0, kur:"1703-05-27", d:[], s:[{f:"1299-01-01",t:"1617-02-27",d:"rusya"},{f:"1617-02-27",t:"1703-05-27",d:"isvec"},{f:"1703-05-27",t:"1923-10-29",d:"rusya"}] },
{ ad:"Smolensk", tur:"sehir", lat:54.783, lon:32.045, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1514-08-01",d:"lehistan"},{f:"1514-08-01",t:"1611-06-13",d:"rusya"},{f:"1611-06-13",t:"1654-10-03",d:"lehistan"},{f:"1654-10-03",t:"1923-10-29",d:"rusya"}] },
{ ad:"Tula", tur:"sehir", lat:54.193, lon:37.617, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Nijniy Novgorod", tur:"sehir", lat:56.296, lon:43.936, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Vologda", tur:"sehir", lat:59.220, lon:39.891, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kazan", tur:"sehir", lat:55.796, lon:49.106, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ufa", tur:"sehir", lat:54.738, lon:55.972, g:0, k:0, kur:"1574-01-01", d:[], s:[{f:"1299-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1923-10-29",d:"rusya"}] },
{ ad:"Perm", tur:"sehir", lat:58.010, lon:56.229, g:0, k:0, kur:"1723-01-01", d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Saratov", tur:"sehir", lat:51.533, lon:46.034, g:0, k:0, kur:"1590-07-12", d:[], s:[{f:"1299-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Tsaritsyn", tur:"sehir", lat:48.708, lon:44.514, g:0, k:0, kur:"1589-07-02", d:[], s:[{f:"1299-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Rostov (Don)", tur:"sehir", lat:47.236, lon:39.712, g:0, k:0, kur:"1749-12-15", d:[], s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1739-09-18",d:"kirim"},{f:"1739-09-18",t:"1923-10-29",d:"rusya"}] },
{ ad:"Poltava", tur:"sehir", lat:49.589, lon:34.551, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1654-01-18",d:"lehistan"},{f:"1654-01-18",t:"1923-10-29",d:"rusya"}] },
// ---- KAFKASYA EK ----
{ ad:"Kutaisi", tur:"sehir", lat:42.268, lon:42.695, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1810-02-20",d:"gurcistan"},{f:"1810-02-20",t:"1923-10-29",d:"rusya"}] },
{ ad:"Vladikavkaz", tur:"kale", lat:43.024, lon:44.682, g:0, k:0, kur:"1784-01-01", d:[], s:[{f:"1784-01-01",t:"1923-10-29",d:"rusya"}] },
// ---- İRAN EK ----
{ ad:"Şiraz", tur:"sehir", lat:29.591, lon:52.584, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Kazvin", tur:"sehir", lat:36.269, lon:50.004, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Kum", tur:"sehir", lat:34.640, lon:50.876, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Zencan", tur:"sehir", lat:36.673, lon:48.478, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Urmiye", tur:"sehir", lat:37.553, lon:45.076, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Reşt", tur:"sehir", lat:37.281, lon:49.583, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
// ---- ARABİSTAN EK ----
{ ad:"Hâil", tur:"sehir", lat:27.521, lon:41.691, g:0, k:0, d:[], s:[{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },
{ ad:"Kuveyt", tur:"liman", lat:29.376, lon:47.977, g:0, k:3, m:"Basra", kur:"1716-01-01", d:[],
    v:[{f:"1871-01-01",t:"1914-11-05",k:"Sabah emirliği (Osmanlı kazâsı)"}],
    s:[{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Manama (Bahreyn)", tur:"liman", lat:26.228, lon:50.586, g:0, k:0, d:[], s:[{f:"1861-05-31",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Doha (Katar)", tur:"liman", lat:25.285, lon:51.531, g:0, k:3, m:"Basra", kur:"1825-01-01", d:[],
    v:[{f:"1871-01-01",t:"1913-07-29",k:"Sânî emirliği (Osmanlı kazâsı)"}],
    s:[{f:"1916-11-03",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Abu Dabi", tur:"liman", lat:24.454, lon:54.397, g:0, k:0, kur:"1761-01-01", d:[], s:[{f:"1820-01-08",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Nizva", tur:"sehir", lat:22.933, lon:57.533, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"umman"}] },
{ ad:"Salala", tur:"liman", lat:17.020, lon:54.090, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"umman"}] },
{ ad:"Mukalla", tur:"liman", lat:14.531, lon:49.125, g:0, k:0, d:[], s:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}] },
// ---- AFRİKA BOYNUZU ----
{ ad:"Berbera", tur:"liman", lat:10.440, lon:45.014, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1577-01-01",d:"adal"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Mogadişu", tur:"liman", lat:2.037, lon:45.342, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}] },
{ ad:"Harar", tur:"sehir", lat:9.312, lon:42.118, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Asmara", tur:"sehir", lat:15.339, lon:38.932, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}] },
// ---- FAS EK ----
{ ad:"Rabat", tur:"liman", lat:34.021, lon:-6.841, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Tanca", tur:"liman", lat:35.777, lon:-5.804, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1471-08-28",d:"fas"},{f:"1471-08-28",t:"1661-01-23",d:"portekiz"},{f:"1661-01-23",t:"1684-02-05",d:"ingiltere"},{f:"1684-02-05",t:"1923-10-29",d:"fas"}] },
{ ad:"Agadir", tur:"liman", lat:30.428, lon:-9.598, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"fas"}] },
// ---- KARADAĞ ----
{ ad:"Cetinje", tur:"sehir", lat:42.391, lon:18.914, g:0, k:0, d:[], s:[{f:"1697-01-01",t:"1923-10-29",d:"karadag"}] },
// ---- SAHİPSİZ BÖLGE NOKTALARI ----
// Çöl ve bozkırda yerleşim seyrektir; nokta koymazsak komşu peteği yüzlerce
// kilometre uzanır ya da yarıçap sınırı yüzünden "baloncuk" oluşur. Bu noktalar
// hiçbir zaman Osmanlı sayılmaz, yalnızca peteklerin nerede biteceğini belirler.
{ ad:"Nefud çölü", tur:"bolge", lat:28.30, lon:41.00, g:0, k:0, d:[], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },
{ ad:"Rub'ul Hâlî kuzeyi", tur:"bolge", lat:22.50, lon:47.00, g:0, k:0, d:[] },
{ ad:"Rub'ul Hâlî doğusu", tur:"bolge", lat:20.00, lon:52.00, g:0, k:0, d:[] },
{ ad:"Necid içi", tur:"bolge", lat:25.50, lon:44.50, g:0, k:0, d:[], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}] },
{ ad:"Hadramut", tur:"bolge", lat:15.50, lon:48.50, g:0, k:0, d:[] },
{ ad:"Sina güneyi", tur:"bolge", lat:28.50, lon:33.80, g:0, k:0, d:[] },
{ ad:"Batı çölü (Mısır)", tur:"bolge", lat:26.50, lon:27.00, g:0, k:0, d:[] },
{ ad:"Nûbe çölü", tur:"bolge", lat:20.50, lon:33.50, g:0, k:0, d:[] },
{ ad:"Kordofan", tur:"bolge", lat:13.00, lon:29.50, g:0, k:0, d:[], s:[{f:"1504-01-01",t:"1821-08-19",d:"funj"}] },
{ ad:"Darfur", tur:"bolge", lat:13.50, lon:24.00, g:0, k:0, d:[] },
{ ad:"Tibesti", tur:"bolge", lat:21.00, lon:17.50, g:0, k:0, d:[] },
{ ad:"Fizan güneyi", tur:"bolge", lat:23.00, lon:14.00, g:0, k:0, d:[] },
{ ad:"Büyük Doğu Ergi", tur:"bolge", lat:29.50, lon:7.50, g:0, k:0, d:[] },
{ ad:"Hoggar", tur:"bolge", lat:24.00, lon:3.00, g:0, k:0, d:[] },
{ ad:"Sahra batısı", tur:"bolge", lat:27.00, lon:-4.00, g:0, k:0, d:[] },
{ ad:"Sirte iç çölü", tur:"bolge", lat:28.50, lon:18.50, g:0, k:0, d:[] },
{ ad:"Bozkır (Deşt-i Kıpçak)", tur:"bolge", lat:48.50, lon:42.00, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1783-04-08",d:"kirim"},{f:"1783-04-08",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kalmuk bozkırı", tur:"bolge", lat:46.50, lon:45.50, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ural eteği", tur:"bolge", lat:51.00, lon:52.00, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Zagros içi", tur:"bolge", lat:31.50, lon:50.50, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Kirman", tur:"sehir", lat:30.28, lon:57.08, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Yezd", tur:"sehir", lat:31.90, lon:54.37, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Tahran", tur:"sehir", lat:35.69, lon:51.39, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Tebbes", tur:"bolge", lat:33.60, lon:56.90, g:0, k:0, d:[], s:[{f:"1299-01-01",t:"1923-10-29",d:"iran"}] },
{ ad:"Karakum", tur:"bolge", lat:39.50, lon:58.50, g:0, k:0, d:[] },
{ ad:"Somali çölü", tur:"bolge", lat:8.00, lon:46.50, g:0, k:0, d:[] },
{ ad:"Ogaden", tur:"bolge", lat:7.20, lon:44.00, g:0, k:0, d:[] },

// ---- TR-Wikipedia kronoloji karşılaştırmasıyla eklenen yerleşimler (parti 5) ----
// Macaristan / Erdel cephesi
{ ad:"İstolni Belgrad", tur:"kale", lat:47.190, lon:18.411, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1543-09-03",d:"macaristan"},{f:"1688-05-19",t:"1923-10-29",d:"avusturya"}], d:[{f:"1543-09-03",t:"1688-05-19",y:"kusatma"}] },
{ ad:"Peşte", tur:"sehir", lat:47.494, lon:19.060, g:0, k:3, m:"Budin", s:[{f:"1299-01-01",t:"1541-08-29",d:"macaristan"},{f:"1686-09-02",t:"1923-10-29",d:"avusturya"}], d:[{f:"1541-08-29",t:"1686-09-02"}] },
{ ad:"Yanıkkale (Győr)", tur:"kale", lat:47.685, lon:17.635, g:0, k:4, m:"Budin", s:[{f:"1299-01-01",t:"1594-09-27",d:"macaristan"},{f:"1598-03-29",t:"1923-10-29",d:"avusturya"}], d:[{f:"1594-09-27",t:"1598-03-29",y:"kusatma"}] },
{ ad:"Varad (Oradea)", tur:"kale", lat:47.053, lon:21.941, g:0, k:3, m:"Erdel (Kaloşvar)", s:[{f:"1299-01-01",t:"1660-08-27",d:"macaristan"},{f:"1692-06-05",t:"1923-10-29",d:"avusturya"}], d:[{f:"1660-08-27",t:"1692-06-05",y:"kusatma"}] },
{ ad:"Yanova (Ineu)", tur:"kale", lat:46.426, lon:21.741, g:0, k:4, m:"Temeşvar", s:[{f:"1299-01-01",t:"1658-08-27",d:"macaristan"},{f:"1693-01-01",t:"1923-10-29",d:"avusturya"}], d:[{f:"1658-08-27",t:"1693-01-01",y:"kusatma"}] },

// Tuna deltası ve Karadeniz kuzeyi
{ ad:"Hotin", tur:"kale", lat:48.510, lon:26.492, g:1, k:3, m:"Yaş", s:[{f:"1299-01-01",t:"1713-06-24",d:"bogdan"},{f:"1769-09-19",t:"1774-07-21",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[{f:"1713-06-24",t:"1769-09-19",y:"antlasma"},{f:"1774-07-21",t:"1812-05-28",y:"antlasma"}] },
{ ad:"Bender", tur:"kale", lat:46.831, lon:29.481, g:0, k:3, m:"Yaş", s:[{f:"1299-01-01",t:"1538-09-01",d:"bogdan"},{f:"1770-09-27",t:"1774-07-21",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[{f:"1538-09-01",t:"1770-09-27",y:"kusatma"},{f:"1774-07-21",t:"1812-05-28",y:"antlasma"}] },
{ ad:"İsmail", tur:"kale", lat:45.351, lon:28.836, g:0, k:4, m:"Silistre", s:[{f:"1299-01-01",t:"1484-08-03",d:"bogdan"},{f:"1790-12-22",t:"1792-01-10",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[{f:"1484-08-03",t:"1790-12-22",y:"kusatma"},{f:"1792-01-10",t:"1812-05-28",y:"antlasma"}] },
{ ad:"Çehrin (Çigirin)", tur:"kale", lat:49.077, lon:32.663, g:0, k:4, m:"Kamaniçe", s:[{f:"1299-01-01",t:"1678-07-19",d:"lehistan"},{f:"1681-01-11",t:"1923-10-29",d:"rusya"}], d:[{f:"1678-07-19",t:"1681-01-11",y:"kusatma"}] },

// Balkanlar
{ ad:"Plevne", tur:"kale", lat:43.417, lon:24.617, g:1, k:3, m:"Sofya", s:[{f:"1299-01-01",t:"1393-07-17",d:"bulgaristan"},{f:"1877-12-10",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1393-07-17",t:"1877-12-10",y:"kusatma"}] },
{ ad:"Yenipazar (Novi Pazar)", tur:"sehir", lat:43.140, lon:20.517, g:0, k:3, m:"Üsküp", s:[{f:"1299-01-01",t:"1455-06-01",d:"sirbistan"},{f:"1912-10-23",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1455-06-01",t:"1912-10-23"}] },

// Yunanistan / İyon Denizi — Venedik ile el değiştiren kıyı ve adalar
{ ad:"Korfu", tur:"kale", lat:39.624, lon:19.922, g:0, k:3, m:"Yanya", d:[], s:[{f:"1299-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}] },
{ ad:"Ayamavra (Lefkada)", tur:"kale", lat:38.716, lon:20.643, g:0, k:4, m:"Yanya", s:[{f:"1299-01-01",t:"1479-01-25",d:"venedik"},{f:"1684-08-06",t:"1923-10-29",d:"venedik"}], d:[{f:"1479-01-25",t:"1684-08-06"}] },
{ ad:"Preveze", tur:"liman", lat:38.958, lon:20.751, g:1, k:4, m:"Yanya", s:[{f:"1299-01-01",t:"1449-01-01",d:"bizans"},{f:"1684-09-29",t:"1718-07-21",d:"venedik"},{f:"1912-10-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1449-01-01",t:"1684-09-29"},{f:"1718-07-21",t:"1912-10-21",y:"antlasma"}] },
{ ad:"Koron", tur:"kale", lat:36.796, lon:21.955, g:0, k:4, m:"Mora (Tripoliçe)", s:[{f:"1299-01-01",t:"1500-08-15",d:"venedik"},{f:"1685-08-11",t:"1715-08-16",d:"venedik"},{f:"1828-10-05",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1500-08-15",t:"1685-08-11",y:"kusatma"},{f:"1715-08-16",t:"1828-10-05",y:"kusatma"}] },

// Kuzey Afrika
{ ad:"Cerbe (Djerba)", tur:"kale", lat:33.807, lon:10.856, g:1, k:4, m:"Tunus", s:[{f:"1299-01-01",t:"1560-05-14",d:"hafsi"}], d:[{f:"1560-05-14",t:"1881-05-12",y:"savas"}] },

// Anadolu ve Arabistan
{ ad:"Antep", tur:"sehir", lat:37.066, lon:37.383, g:0, k:3, m:"Halep", s:[{f:"1299-01-01",t:"1516-08-24",d:"memluk"},{f:"1919-01-01",t:"1921-10-20",d:"fransa"}], d:[{f:"1516-08-24",t:"1919-01-01",y:"savas"},{f:"1921-10-20",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Elbistan", tur:"sehir", lat:38.207, lon:37.194, g:0, k:4, m:"Maraş", s:[{f:"1299-01-01",t:"1515-06-13",d:"dulkadir"}], d:[{f:"1515-06-13",t:"1923-10-29",y:"savas"}] },
{ ad:"Tâif", tur:"sehir", lat:21.437, lon:40.513, g:0, k:4, m:"Mekke", s:[{f:"1299-01-01",t:"1517-07-06",d:"memluk"},{f:"1803-05-01",t:"1813-01-01",d:"suud"},{f:"1916-06-10",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1803-05-01"},{f:"1813-01-01",t:"1916-06-10",y:"savas"}] },

// ---- Halkidiki, Batı Trakya ve Biga: komşu ada/liman peteklerinin yarımadaları
// yutmasını önleyen gerçek yerleşimler (kullanıcı tespiti) ----
{ ad:"Aynaroz (Athos)", tur:"kale", lat:40.257, lon:24.244, g:0, k:4, m:"Selanik", s:[{f:"1299-01-01",t:"1424-01-01",d:"bizans"},{f:"1912-11-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1424-01-01",t:"1912-11-02",y:"antlasma"}] },
{ ad:"Kesendire (Kassandra)", tur:"sehir", lat:40.062, lon:23.442, g:0, k:4, m:"Selanik", s:[{f:"1299-01-01",t:"1430-03-29",d:"bizans"},{f:"1912-11-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1430-03-29",t:"1912-11-02"}] },
{ ad:"Gümülcine", tur:"sehir", lat:41.122, lon:25.406, g:0, k:3, m:"Edirne", s:[{f:"1299-01-01",t:"1363-01-01",d:"bizans"},{f:"1913-07-14",t:"1913-09-29",d:"bulgaristan"},{f:"1920-05-27",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1363-01-01",t:"1913-07-14"},{f:"1913-09-29",t:"1920-05-27"}] },
{ ad:"Biga", tur:"sehir", lat:40.228, lon:27.243, g:0, k:4, m:"Bursa", s:[{f:"1299-01-01",t:"1345-01-01",d:"karesi"}], d:[{f:"1345-01-01",t:"1923-10-29",y:"ilhak"}] },

// ---- Yavuz dönemi (1514-1517): fetih zincirinin ara halkaları ----
// Mısır tek seferde düşmedi; Ridâniye'den İskenderiye'ye dört ay geçti.
{ ad:"Kemah", tur:"kale", lat:39.600, lon:39.030, g:1, k:4, m:"Erzurum", s:[{f:"1299-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1515-05-19",d:"safevi"}], d:[{f:"1515-05-19",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Hama", tur:"sehir", lat:35.132, lon:36.750, g:0, k:4, m:"Şam", s:[{f:"1299-01-01",t:"1516-09-01",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-01",t:"1918-10-01"}] },
{ ad:"Humus", tur:"sehir", lat:34.730, lon:36.710, g:0, k:4, m:"Şam", s:[{f:"1299-01-01",t:"1516-09-01",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-01",t:"1918-10-01"}] },
{ ad:"Han Yûnus", tur:"kale", lat:31.340, lon:34.300, g:1, k:4, m:"Kudüs", s:[{f:"1299-01-01",t:"1516-12-21",d:"memluk"},{f:"1917-11-07",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-21",t:"1917-11-07",y:"savas"}] },
{ ad:"Reşîd (Rosetta)", tur:"liman", lat:31.399, lon:30.417, g:0, k:4, m:"Kahire", s:[{f:"1299-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-11-05",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-09"}],
    v:[{f:"1805-07-09",t:"1914-11-05",k:"Mısır (Kavalalı)"}] },

// ---- Orta ve Batı Anadolu yoğunlaştırması (kullanıcı tespiti: "Ankara civarında
// kimin hüküm sürdüğü belli değil"). Bu noktalar hem beyliklerin gerçek sahiplik
// zincirini taşır hem de nokta seyrekliğinden doğan devasa Voronoi hücrelerini
// gerçekçi boyuta indirir. ----
{ ad:"Beyşehir", tur:"sehir", lat:37.677, lon:31.724, g:0, k:4, m:"Konya", s:[{f:"1299-01-01",t:"1326-10-09",d:"esrefogullari"},{f:"1326-10-09",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1468-01-01",d:"karaman"}], d:[{f:"1381-06-01",t:"1402-07-28",y:"antlasma"},{f:"1468-01-01",t:"1923-10-29"}] },
{ ad:"Karahisâr-ı Sâhib (Afyon)", tur:"kale", lat:38.757, lon:30.538, g:0, k:3, m:"Kütahya", s:[{f:"1299-01-01",t:"1341-01-01",d:"sahibata"},{f:"1341-01-01",t:"1429-02-01",d:"germiyan"}], d:[{f:"1429-02-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Niksar", tur:"kale", lat:40.593, lon:36.951, g:0, k:4, m:"Sivas", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1379-01-01",d:"eretna"},{f:"1379-01-01",t:"1427-01-01",d:"taceddin"}], d:[{f:"1427-01-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Sivrihisar", tur:"sehir", lat:39.450, lon:31.535, g:0, k:4, m:"Ankara", s:[{f:"1299-01-01",t:"1354-08-01",d:"germiyan"}], d:[{f:"1354-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Kırşehir", tur:"sehir", lat:39.146, lon:34.164, g:0, k:4, m:"Ankara", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1402-07-28"},{f:"1419-01-01",t:"1923-10-29"}] },
{ ad:"Çorum", tur:"sehir", lat:40.550, lon:34.955, g:0, k:4, m:"Ankara", s:[{f:"1299-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"}], d:[{f:"1398-07-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Çankırı", tur:"sehir", lat:40.601, lon:33.616, g:0, k:4, m:"Ankara", s:[{f:"1299-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1354-08-01",d:"candar"}], d:[{f:"1354-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] }
];

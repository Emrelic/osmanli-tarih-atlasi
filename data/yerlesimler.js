// ============================================================================
// YERLEŞİM VERİ SETİ — petek (hücre) tabanlı harita motorunun kaynağı
// ============================================================================
// Her yerleşim bir "petek"tir: çevresindeki toprağı temsil eder. Petek sınırları
// komşu yerleşimlerle ortadan bölünerek (Voronoi) belirlenir, ardından kara
// maskesi ve nehir yataklarıyla düzeltilir → cetvelle çizilmiş köşeli sınır olmaz.
// Bir yerleşim el değiştirince peteği bütün olarak el değiştirir.
//
// ---------------------------------------------------------------------------
// ⚠️ 36 KIYI NOKTASI KARA MASKESİNİN İÇİNE KAYDIRILDI (2026-07-30)
// ---------------------------------------------------------------------------
// Tanı: denetim/MASKE-DISI-NOKTALAR.md (hatalar 2-3 oturumu). Natural Earth 10m
// kıyı çizgisi KARA_TOL=0.002 ile sadeleştirildiği için bu noktalar maskede
// DENİZDE kalıyordu. Maske dışındaki nokta hiç toprak sahibi olamaz: peteği ada
// kuralı tarafından kesilir ve o yerleşimin bütün fetih/kayıp maddeleri
// haritada hiçbir toprak değişimi göstermez. Gelibolu'nun 1354 fethi, 1366
// Savoy seferindeki kaybı ve Taman'ın 1482 alınışı bu yüzden görünmüyordu.
// En büyük kaydırma 1.39 km (Maydos), en küçüğü 10 m — normal yakınlaştırmada
// piksel altı. Koordinatlar zaten doğruydu, maske çözünürlüğü yetersizdi.
// Kaydırılanlar: Maydos, Parga, Değirmenlik, Nakşa, Şerşel, Rab, GELİBOLU,
// TAMAN, Rumeli Hisarı, Özi, Fornoz, Tekirdağ, Alanya, Kavala, Modon, Preveze,
// Karistos, İskiathos, Masavva, Akkirman, Girne, Pag, Kopenhag, Çeşme, Venedik,
// K. Ereğli, Ohri, Ayacyo, Batum, Stokholm, Mukalla, Cenova, Datça, Eğriboz,
// Ras el-Hayme (+ mükerrer Katîf kaydı silindi).
// Bu artık ALTINCI DENETİM: `py arac/denetle.py` her koşuda ölçüyor
// (konum_denetimi), beklenen 0. Yeni nokta ekleyen oturum bunu koşturmalı.
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
    d:[{f:"1301-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1301-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"İnegöl", go:"1400-01-01", s:[{f:"1281-01-01",t:"1299-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], tur:"sehir", lat:40.080, lon:29.512, g:0, k:4, m:"Bursa",
    d:[{f:"1299-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Aydos Kalesi", tur:"kale", lat:40.950, lon:29.250, g:0, k:4, m:"Bursa",
    d:[{f:"1329-06-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Geyve", tur:"kale", lat:40.508, lon:30.288, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1304-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Köprühisar (Yenişehir)", tur:"kale", lat:40.205, lon:29.545, g:0, k:4, m:"Bursa",
    d:[{f:"1300-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1300-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Marmaracık", tur:"kale", lat:40.301, lon:29.680, g:0, k:4, go:"1340-01-01", m:"Bursa",
    d:[{f:"1302-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1302-08-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Akhisar (Pamukova)", tur:"kale", lat:40.510, lon:30.150, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1304-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Mekece", tur:"kale", lat:40.560, lon:30.240, g:0, k:4, m:"Bursa",
    d:[{f:"1304-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1304-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Kestel", tur:"kale", lat:40.213, lon:29.170, g:0, k:4, m:"Bursa",
    d:[{f:"1303-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1303-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Ulubat", tur:"kale", lat:40.171, lon:28.573, g:0, k:4, go:"1420-01-01", m:"Bursa",
    d:[{f:"1303-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1303-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Harmankaya", tur:"kale", lat:40.100, lon:29.980, g:0, k:4, go:"1340-01-01", m:"Bursa",
    d:[{f:"1313-01-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1313-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Akyazı", tur:"sehir", lat:40.685, lon:30.622, g:0, k:4, m:"İstanbul",
    d:[{f:"1324-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1324-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"İmralı Adası", tur:"kale", lat:40.303, lon:29.078, g:0, k:4, m:"Bursa",
    d:[{f:"1324-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1324-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Kandıra", tur:"sehir", lat:41.075, lon:30.147, g:0, k:4, m:"İstanbul",
    d:[{f:"1330-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1330-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Mudanya", tur:"liman", lat:40.373, lon:28.883, g:0, k:3, m:"Bursa",
    d:[{f:"1321-04-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1321-04-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Yalova", tur:"liman", lat:40.650, lon:29.267, g:0, k:4, m:"Bursa",
    d:[{f:"1323-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1323-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Karamürsel", tur:"liman", lat:40.690, lon:29.617, g:0, k:4, m:"Bursa",
    d:[{f:"1323-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1323-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Armutlu", tur:"kale", lat:40.517, lon:28.833, g:0, k:4, m:"Bursa",
    d:[{f:"1324-03-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1324-03-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Gemlik (Kios)", tur:"liman", lat:40.430, lon:29.157, g:0, k:3, m:"Bursa",
    d:[{f:"1324-03-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}], s:[{f:"1281-01-01",t:"1324-03-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}] },
{ ad:"Otranto", tur:"kale", lat:40.146, lon:18.489, g:0, k:0,
    d:[{f:"1480-08-11",t:"1481-09-10",y:"savas"}],
    s:[{f:"1281-01-01",t:"1480-08-11",d:"napoli"},{f:"1481-09-10",t:"1923-10-29",d:"napoli"}] },
{ ad:"Brindisi", tur:"liman", lat:40.639, lon:17.945, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Taranto", tur:"liman", lat:40.472, lon:17.243, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Lecce", tur:"sehir", lat:40.352, lon:18.169, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"napoli"}] },
{ ad:"Enez", tur:"liman", lat:40.724, lon:26.075, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1376-01-01",d:"bizans"},{f:"1376-01-01",t:"1456-01-24",d:"ceneviz"}],
    d:[{f:"1456-01-24",t:"1923-10-29"}] },
{ ad:"Datça", tur:"liman", lat:36.7284, lon:27.6843, g:0, k:4, m:"Muğla",
    s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Bodrum", tur:"kale", lat:37.034, lon:27.430, g:0, k:3, m:"Muğla", kur:"1402-01-01",
    s:[{f:"1281-01-01",t:"1402-01-01",d:"bizans"},{f:"1402-01-01",t:"1523-01-05",d:"sovalye"}],
    d:[{f:"1523-01-05",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Marmaris", tur:"liman", lat:36.855, lon:28.274, g:0, k:4, m:"Muğla",
    s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Fethiye (Makri)", tur:"liman", lat:36.622, lon:29.116, g:0, k:4, m:"Muğla",
    s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Kuşadası", tur:"liman", lat:37.859, lon:27.260, g:0, k:4, m:"İzmir",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"}],
    d:[{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Söke", tur:"sehir", lat:37.751, lon:27.408, g:0, k:4, m:"İzmir",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"},{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1390-01-01",d:"aydin"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Söğüt", go:"1335-01-01", s:[{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], tur:"sehir", lat:40.019, lon:30.181, g:3, k:1, m:"Bursa", d:[{f:"1281-01-01",t:"1402-07-28",y:"miras"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Bilecik", go:"1400-01-01", s:[{f:"1281-01-01",t:"1299-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], tur:"kale", lat:40.142, lon:29.979, g:0, k:4, m:"Bursa", d:[{f:"1299-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Eskişehir", tur:"sehir", lat:39.776, lon:30.520, g:1, k:3, m:"Kütahya", s:[{f:"1281-01-01",t:"1288-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1288-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Bursa", tur:"sehir", lat:40.188, lon:29.061, g:3, k:1, s:[{f:"1281-01-01",t:"1326-04-06",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1326-04-06",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"İznik", tur:"sehir", lat:40.429, lon:29.721, g:1, k:3, m:"Bursa", s:[{f:"1281-01-01",t:"1331-03-02",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1331-03-02",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"İzmit", tur:"sehir", lat:40.766, lon:29.917, g:1, k:3, m:"İstanbul", s:[{f:"1281-01-01",t:"1337-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1337-01-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Adapazarı", tur:"sehir", lat:40.780, lon:30.403, g:0, k:4, m:"İstanbul", kur:"1550-01-01", d:[{f:"1550-01-01",t:"1923-10-29"}] },
{ ad:"Balıkesir", tur:"sehir", lat:39.649, lon:27.886, g:1, k:3, m:"Bursa", s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Çanakkale", tur:"liman", lat:40.147, lon:26.409, g:1, k:3, m:"Bursa", s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Bergama", tur:"sehir", lat:39.121, lon:27.180, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Ankara", tur:"sehir", lat:39.933, lon:32.860, g:3, k:2, s:[{f:"1402-07-28",t:"1404-03-01",d:"timurlu"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"},{f:"1281-01-01",t:"1354-08-01",d:"ahiler"}], d:[{f:"1354-08-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
// Kütahya: Konya bozgunundan sonra İbrâhim Paşa'nın ordusu Şubat 1833'te buraya
// kadar geldi; Bâbıâli ile anlaşma da burada yapıldı (Kütahya Sözleşmesi).
{ ad:"Kütahya", tur:"sehir", lat:39.424, lon:29.983, g:1, k:2, s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1429-02-01",d:"germiyan"},{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1381-01-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28",y:"antlasma"},{f:"1429-02-01",t:"1923-10-29",y:"antlasma"}],
    v:[{f:"1833-02-02",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Isparta", tur:"sehir", lat:37.765, lon:30.554, g:0, k:3, m:"Kütahya", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1414-06-01",d:"hamid"},{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1381-06-01",d:"hamid"}], d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
{ ad:"Manisa", tur:"sehir", lat:38.614, lon:27.429, g:1, k:3, m:"İzmir", s:[{f:"1402-07-28",t:"1402-08-17",d:"timurlu"}, {f:"1402-08-17",t:"1416-09-01",d:"saruhan"},{f:"1281-01-01",t:"1313-01-01",d:"bizans"},{f:"1313-01-01",t:"1390-01-01",d:"saruhan"}], d:[{f:"1390-01-01",t:"1402-07-28",y:"savas"},{f:"1416-09-01",t:"1923-10-29"}] },
{ ad:"İzmir", tur:"liman", lat:38.419, lon:27.129, g:2, k:2,
    s:[{f:"1281-01-01",t:"1329-01-01",d:"bizans"},{f:"1329-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1402-07-28",d:"sovalye"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"},{f:"1919-05-15",t:"1922-09-09",d:"yunanistan"}],
    d:[{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1919-05-15",y:"savas"},{f:"1922-09-09",t:"1923-10-29",y:"savas"}] },
{ ad:"Çeşme", tur:"kale", lat:38.3250, lon:26.3091, g:0, k:4, m:"İzmir",
    s:[{f:"1281-01-01",t:"1329-01-01",d:"bizans"},{f:"1329-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1402-07-28",d:"sovalye"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"}],
    d:[{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Aydın", tur:"sehir", lat:37.845, lon:27.840, g:0, k:3, m:"İzmir",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"},{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1344-10-28",d:"aydin"},{f:"1344-10-28",t:"1390-01-01",d:"sovalye"},{f:"1919-05-15",t:"1922-09-07",d:"yunanistan"}],
    d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1919-05-15"},{f:"1922-09-07",t:"1923-10-29"}] },
{ ad:"Denizli", tur:"sehir", lat:37.783, lon:29.094, g:0, k:3, m:"İzmir", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1425-06-01",d:"germiyan"},{f:"1281-01-01",t:"1368-01-01",d:"inancogullari"},{f:"1368-01-01",t:"1390-01-01",d:"germiyan"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Muğla", tur:"sehir", lat:37.215, lon:28.363, g:0, k:2, s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Antalya", tur:"liman", lat:36.887, lon:30.703, g:1, k:2, s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1321-01-01",d:"hamid"},{f:"1321-01-01",t:"1392-01-01",d:"teke"},{f:"1402-07-28",t:"1423-01-01",d:"teke"}], d:[{f:"1392-01-01",t:"1402-07-28",y:"savas"},{f:"1423-01-01",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Konya", tur:"sehir", lat:37.872, lon:32.492, g:2, k:2, s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1468-04-01",d:"karaman"},{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},{f:"1366-01-01",t:"1397-07-01",d:"karaman"}], d:[{f:"1397-07-01",t:"1402-07-28",y:"savas"},{f:"1468-04-01",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-11-21",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Karaman", tur:"sehir", lat:37.181, lon:33.215, g:0, k:3, m:"Konya", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1468-04-01",d:"karaman"},{f:"1281-01-01",t:"1397-07-01",d:"karaman"}], d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-04-01",t:"1923-10-29"}],
    v:[{f:"1832-11-21",t:"1833-06-30",k:"Mısır ordusu (işgal)"}] },
{ ad:"Niğde", tur:"sehir", lat:37.966, lon:34.679, g:0, k:3, m:"Konya", s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},{f:"1366-01-01",t:"1468-04-01",d:"karaman"}], d:[{f:"1468-04-01",t:"1923-10-29"}] },
// Alâiye 1293'ten 1471'e kadar kendi bey soyuyla yönetilen ayrı bir beylikti
// (TDV ALÂİYE BEYLİĞİ). Karamanoğulları rengiyle boyandığı için haritada 178 yıl
// boyunca Karaman'ın içinde eriyordu.
{ ad:"Alanya", tur:"liman", lat:36.5502, lon:31.9997, g:1, k:3, m:"Antalya",
    s:[{f:"1281-01-01",t:"1293-01-01",d:"karaman"},{f:"1293-01-01",t:"1471-01-01",d:"alaiye"}], d:[{f:"1471-01-01",t:"1923-10-29",y:"savas"}] },
{ ad:"Anamur", tur:"kale", lat:36.078, lon:32.837, g:0, k:4, m:"Antalya",
    s:[{f:"1281-01-01",t:"1471-01-01",d:"karaman"}], d:[{f:"1471-01-01",t:"1923-10-29"}] },
{ ad:"Silifke", tur:"sehir", lat:36.309, lon:33.938, g:0, k:4, m:"Konya",
    s:[{f:"1281-01-01",t:"1473-01-01",d:"karaman"}], d:[{f:"1473-01-01",t:"1923-10-29"}] },
{ ad:"Kayseri", tur:"sehir", lat:38.734, lon:35.480, g:1, k:3, m:"Sivas", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1419-01-01",d:"karaman"},{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-15",d:"burhaneddin"}], d:[{f:"1398-07-15",t:"1402-07-28"},{f:"1419-01-01",t:"1923-10-29"}] },
{ ad:"Kastamonu", tur:"sehir", lat:41.377, lon:33.777, g:1, k:3, m:"Ankara", s:[{f:"1281-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28",y:"savas"},{f:"1461-06-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Sinop", tur:"liman", lat:42.027, lon:35.151, g:1, k:3, m:"Ankara", s:[{f:"1281-01-01",t:"1322-01-01",d:"pervane"},{f:"1322-01-01",t:"1461-06-01",d:"candar"}], d:[{f:"1461-06-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Amasra", tur:"kale", lat:41.748, lon:32.386, g:0, k:4, m:"Ankara", s:[{f:"1281-01-01",t:"1460-01-01",d:"ceneviz"}], d:[{f:"1460-01-01",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Bartın", tur:"liman", lat:41.634, lon:32.338, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1309-01-01",d:"ilhanli"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}],
    d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Safranbolu", tur:"sehir", lat:41.253, lon:32.694, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1309-01-01",d:"ilhanli"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}],
    d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Samsun", tur:"liman", lat:41.286, lon:36.331, g:1, k:3, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1398-07-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Amasya", tur:"sehir", lat:40.650, lon:35.833, g:1, k:3, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1393-06-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Tokat", tur:"sehir", lat:40.314, lon:36.554, g:0, k:3, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1393-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Sivas", tur:"sehir", lat:39.750, lon:37.015, g:1, k:2, s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-15",d:"burhaneddin"},{f:"1402-07-28",t:"1408-06-01",d:"timurlu"},{f:"1408-06-01",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1398-07-15",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Trabzon", tur:"liman", lat:41.005, lon:39.723, g:2, k:2, s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"}], d:[{f:"1461-08-15",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Giresun", tur:"liman", lat:40.918, lon:38.389, g:0, k:4, m:"Trabzon", s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"}], d:[{f:"1461-08-15",t:"1923-10-29"}] },
// Samsun ile Giresun arasındaki kıyıda hiç nokta yoktu; bölge en yakın peteğe
// emiliyor ve Hacıemîroğulları haritada hiç görünmüyordu. TDV ORDU (şehir):
// Bayram Bey'in kurduğu beyliği oğlu Hacı Emîr ~1350'de genişletti, merkez
// Eskipazar'dı; emîr Süleyman 1398'de Yıldırım'a bağlandı, ilhak 1427'de oldu.
{ ad:"Ordu (Bayramlı)", tur:"sehir", lat:40.976, lon:37.848, g:0, k:4, m:"Trabzon", s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},{f:"1350-01-01",t:"1427-06-01",d:"haciemir"}], d:[{f:"1427-06-01",t:"1923-10-29"}],
    v:[{f:"1398-06-01",t:"1402-07-28",k:"Yıldırım Bayezid'e bağlılık"}] },
{ ad:"Ünye", tur:"liman", lat:41.128, lon:37.283, g:0, k:4, m:"Trabzon", s:[{f:"1281-01-01",t:"1350-01-01",d:"trabzon-rum"},{f:"1350-01-01",t:"1427-06-01",d:"haciemir"}], d:[{f:"1427-06-01",t:"1923-10-29"}],
    v:[{f:"1398-06-01",t:"1402-07-28",k:"Yıldırım Bayezid'e bağlılık"}] },
{ ad:"Rize", tur:"liman", lat:41.020, lon:40.523, g:0, k:4, m:"Trabzon", s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum"}], d:[{f:"1461-08-15",t:"1923-10-29"}] },
{ ad:"Erzincan", tur:"sehir", lat:39.750, lon:39.492, g:0, k:3, m:"Erzurum", s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1379-01-01",d:"akkoyunlu"},{f:"1379-01-01",t:"1401-02-01",d:"mutahharten"},{f:"1402-07-28",t:"1410-01-01",d:"mutahharten"},{f:"1410-01-01",t:"1473-08-11",d:"akkoyunlu"}], d:[{f:"1401-02-01",t:"1402-07-28",y:"savas"},{f:"1473-08-11",t:"1923-10-29",y:"savas"}] },
{ ad:"Erzurum", tur:"sehir", lat:39.905, lon:41.266, g:1, k:2, s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},{f:"1348-01-01",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Kars", tur:"kale", lat:40.602, lon:43.095, g:1, k:3, m:"Erzurum", s:[{f:"1281-01-01",t:"1534-06-01",d:"gurcistan"},{f:"1878-07-13",t:"1918-05-25",d:"rusya"}], d:[{f:"1534-06-01",t:"1878-07-13",y:"kusatma"},{f:"1918-05-25",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Ardahan", tur:"kale", lat:41.111, lon:42.702, g:0, k:4, m:"Erzurum", s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-07-13",t:"1918-05-25",d:"rusya"}], d:[{f:"1551-01-01",t:"1878-07-13"},{f:"1918-05-25",t:"1923-10-29"}] },
{ ad:"Van", tur:"kale", lat:38.502, lon:43.393, g:1, k:2, s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}], d:[{f:"1548-08-25",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Bitlis", tur:"sehir", lat:38.401, lon:42.108, g:0, k:3, m:"Van", s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1923-10-29"}] },
{ ad:"Diyarbakır", tur:"sehir", lat:37.911, lon:40.237, g:2, k:2, s:[{f:"1281-01-01",t:"1378-01-01",d:"artuklu"},{f:"1378-01-01",t:"1515-09-19",d:"akkoyunlu"}], d:[{f:"1515-09-19",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Mardin", tur:"kale", lat:37.312, lon:40.735, g:0, k:3, m:"Diyarbakır", s:[{f:"1281-01-01",t:"1409-01-01",d:"artuklu"},{f:"1409-01-01",t:"1467-11-10",d:"karakoyunlu"},{f:"1467-11-10",t:"1515-09-15",d:"akkoyunlu"}], d:[{f:"1515-09-15",t:"1923-10-29"}] },
// Belen (Beylan) Geçidi bozgunundan (29 Temmuz 1832) sonra Toroslar'ın güneyi
// ve Çukurova Mısır kuvvetlerine açıldı; Adana muhassıllığı 1833 Kütahya
// Sözleşmesi'yle İbrâhim Paşa'ya verildi, 1840 İskenderiye Konvansiyonu'yla iade
// edildi (fiilî devir Şubat 1841).
{ ad:"Urfa", tur:"sehir", lat:37.159, lon:38.796, g:0, k:3, m:"Diyarbakır", s:[{f:"1281-01-01",t:"1465-01-01",d:"memluk"},{f:"1465-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}],
    v:[{f:"1832-08-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Malatya", tur:"sehir", lat:38.353, lon:38.334, g:0, k:3, m:"Maraş", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Maraş", tur:"sehir", lat:37.575, lon:36.937, g:0, k:2, s:[{f:"1281-01-01",t:"1337-01-01",d:"memluk"},{f:"1337-01-01",t:"1515-06-13",d:"dulkadir"}], d:[{f:"1515-06-13",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Adana", tur:"sehir", lat:37.000, lon:35.321, g:1, k:2, s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},{f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"}], d:[{f:"1516-08-24",t:"1923-10-29",y:"savas"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Tarsus", tur:"sehir", lat:36.917, lon:34.895, g:0, k:3, m:"Adana", s:[{f:"1281-01-01",t:"1352-01-01",d:"kilikya-ermeni"},{f:"1352-01-01",t:"1516-08-24",d:"ramazanoglu"}], d:[{f:"1516-08-24",t:"1923-10-29"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Antakya", tur:"sehir", lat:36.202, lon:36.161, g:0, k:3, m:"Halep", s:[{f:"1281-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-08-28",t:"1918-10-26"}],
    v:[{f:"1832-07-29",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
// ---------------- RUMELİ / BALKANLAR ----------------
{ ad:"Çorlu", tur:"sehir", lat:41.158, lon:27.800, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1362-06-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1362-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Lüleburgaz", tur:"sehir", lat:41.406, lon:27.359, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1362-06-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1362-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Malkara", tur:"sehir", lat:40.890, lon:26.905, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Keşan", tur:"sehir", lat:40.848, lon:26.633, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"İpsala", tur:"sehir", lat:40.914, lon:26.383, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
// lon 26.150 idi: Gelibolu yarımadasının BATISINDA, Ege'de kalıyordu ve nokta
// hiçbir tarihte kendi gövdesinin içinde çıkmıyordu. Kale ≈26.377'de; ama kara
// maskesi 0.004° sadeleştirildiği için Boğaz'ın darboğazı çıktıda ~3 km'ye
// açılmış (su 26.365-26.400). 26.360 hem karada hem kaleye 1,4 km.
{ ad:"Kilitbahir", tur:"kale", lat:40.150, lon:26.360, g:0, k:4, m:"Edirne", kur:"1452-01-01",
    s:[{f:"1281-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
    d:[{f:"1354-03-02",t:"1366-08-01"},{f:"1376-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Çirmen", tur:"kale", lat:41.720, lon:26.200, g:0, k:4, m:"Edirne",
    s:[{f:"1281-01-01",t:"1371-09-26",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1371-09-26",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Eski Zağra (Stara Zagora)", tur:"sehir", lat:42.425, lon:25.633, g:0, k:4, m:"Sofya",
    s:[{f:"1281-01-01",t:"1372-06-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1885-09-18",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1372-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti"}] },
{ ad:"Tatarpazarcığı", tur:"sehir", lat:42.192, lon:24.333, g:0, k:4, m:"Sofya",
    s:[{f:"1281-01-01",t:"1373-01-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1885-09-18",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1373-01-01",t:"1402-07-28",y:"vassal"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti"}] },
{ ad:"İhtiman", tur:"kale", lat:42.433, lon:23.817, g:0, k:4, m:"Sofya",
    s:[{f:"1281-01-01",t:"1373-01-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1878-07-13",t:"1923-10-29",d:"bulgaristan"}], d:[{f:"1373-01-01",t:"1402-07-28",y:"vassal"},{f:"1413-07-05",t:"1878-07-13"}] },
{ ad:"Köstendil", tur:"sehir", lat:42.283, lon:22.690, g:0, k:4, m:"Sofya",
    s:[{f:"1281-01-01",t:"1374-01-01",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Petriç", tur:"kale", lat:41.404, lon:23.203, g:0, k:4, m:"Selanik",
    s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Nevrokop (Gotse Delçev)", tur:"sehir", lat:41.573, lon:23.733, g:0, k:4, m:"Selanik",
    s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Drama", tur:"sehir", lat:41.152, lon:24.147, g:0, k:4, m:"Selanik",
    s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1374-01-01",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}],
    d:[{f:"1374-01-01",t:"1383-09-19",y:"vassal"},{f:"1383-09-19",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Gelibolu", tur:"liman", lat:40.4156, lon:26.6636, g:2, k:3, m:"Edirne", s:[{f:"1281-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1354-03-02",t:"1366-08-01",y:"antlasma"},{f:"1376-09-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Çimpe", tur:"kale", lat:40.503, lon:26.598, g:1, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1352-03-01",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1352-03-01",t:"1366-08-01",y:"antlasma"},{f:"1376-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Edirne", tur:"sehir", lat:41.677, lon:26.556, g:3, k:1, s:[{f:"1281-01-01",t:"1361-03-01",d:"bizans"},{f:"1913-03-26",t:"1913-07-21",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1361-03-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1913-03-26"},{f:"1913-07-21",t:"1923-10-29",y:"savas"}] },
{ ad:"Dimetoka", tur:"kale", lat:41.348, lon:26.497, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1361-02-01",d:"bizans"},{f:"1913-05-30",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1361-02-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1913-05-30"}] },
{ ad:"Kırklareli", tur:"sehir", lat:41.735, lon:27.225, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1362-06-01",d:"bizans"},{f:"1912-10-24",t:"1913-07-21",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1362-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-10-24"},{f:"1913-07-21",t:"1923-10-29"}] },
{ ad:"Tekirdağ", tur:"liman", lat:40.9838, lon:27.5084, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1357-01-01",d:"bizans"},{f:"1912-11-01",t:"1913-07-21",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1357-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-01"},{f:"1913-07-21",t:"1923-10-29"}] },
{ ad:"İstanbul", tur:"sehir", lat:41.008, lon:28.980, g:3, k:1, s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"}], d:[{f:"1453-05-29",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Filibe", tur:"sehir", lat:42.144, lon:24.750, g:1, k:3, m:"Sofya", s:[{f:"1281-01-01",t:"1372-06-01",d:"bulgaristan"},{f:"1885-09-18",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1372-06-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1885-09-18",k:"Şarkî Rumeli vilâyeti"}] },
{ ad:"Sofya", tur:"sehir", lat:42.698, lon:23.322, g:1, k:2, s:[{f:"1281-01-01",t:"1385-09-01",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1385-09-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1878-01-04"}], v:[{f:"1878-01-04",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Niş", tur:"sehir", lat:43.321, lon:21.896, g:1, k:3, m:"Sofya", s:[{f:"1281-01-01",t:"1386-01-01",d:"sirbistan"},{f:"1689-09-24",t:"1690-09-09",d:"avusturya"},{f:"1878-01-11",t:"1923-10-29",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1386-01-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1689-09-24"},{f:"1690-09-09",t:"1878-01-11",y:"savas"}] },
{ ad:"Vidin", tur:"kale", lat:43.992, lon:22.873, g:0, k:3, m:"Sofya", s:[{f:"1281-01-01",t:"1396-10-01",d:"bulgaristan"},{f:"1689-09-24",t:"1690-09-09",d:"avusturya"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1396-10-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1689-09-24"},{f:"1690-09-09",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Tırnova", tur:"sehir", lat:43.081, lon:25.629, g:0, k:4, m:"Sofya", s:[{f:"1281-01-01",t:"1393-07-17",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1393-07-17",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Varna", tur:"liman", lat:43.214, lon:27.915, g:2, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1391-01-01",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1391-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Şumnu", tur:"kale", lat:43.271, lon:26.936, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1388-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Silistre", tur:"kale", lat:44.117, lon:27.260, g:0, k:2, s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Niğbolu", tur:"kale", lat:43.706, lon:24.892, g:0, k:3, m:"Sofya", s:[{f:"1281-01-01",t:"1395-01-01",d:"bulgaristan"},{f:"1877-07-16",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1395-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1877-07-16"}] },
{ ad:"Rusçuk", tur:"kale", lat:43.856, lon:25.971, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan"},{f:"1908-10-05",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1388-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[{f:"1878-07-13",t:"1908-10-05",k:"Bulgaristan Prensliği"}] },
{ ad:"Selanik", tur:"liman", lat:40.640, lon:22.944, g:2, k:2, s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1402-07-28",t:"1403-06-01",d:"suleyman-celebi"},{f:"1403-06-01",t:"1423-09-14",d:"bizans"},{f:"1423-09-14",t:"1430-03-29",d:"venedik"},{f:"1912-11-08",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1387-04-09",t:"1402-07-28",y:"antlasma"},{f:"1430-03-29",t:"1912-11-08",y:"kusatma"}] },
{ ad:"Serez", tur:"sehir", lat:41.089, lon:23.545, g:0, k:3, m:"Selanik", s:[{f:"1281-01-01",t:"1345-01-01",d:"bizans"},{f:"1345-01-01",t:"1383-09-19",d:"sirbistan"},{f:"1913-06-28",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1383-09-19",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1913-06-28"}] },
{ ad:"Kavala", tur:"liman", lat:40.9451, lon:24.4101, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},{f:"1913-06-28",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-06-28"}] },
{ ad:"Üsküp", tur:"sehir", lat:41.997, lon:21.428, g:1, k:2, s:[{f:"1281-01-01",t:"1392-01-15",d:"sirbistan"},{f:"1912-10-26",t:"1923-10-29",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1392-01-15",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1912-10-26"}] },
{ ad:"Manastır", tur:"sehir", lat:41.031, lon:21.335, g:0, k:3, m:"Üsküp", s:[{f:"1281-01-01",t:"1385-01-01",d:"sirbistan"},{f:"1912-11-19",t:"1923-10-29",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1385-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-19"}] },
{ ad:"Ohri", tur:"sehir", lat:41.1194, lon:20.8028, g:0, k:4, m:"Üsküp", s:[{f:"1281-01-01",t:"1385-01-01",d:"sirbistan"},{f:"1912-11-29",t:"1923-10-29",d:"sirbistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1385-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-29"}] },
{ ad:"Yanya", tur:"sehir", lat:39.665, lon:20.852, g:1, k:2, s:[{f:"1281-01-01",t:"1430-10-09",d:"bizans"},{f:"1913-03-06",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1430-10-09",t:"1913-03-06",y:"antlasma"}] },
{ ad:"Arta", tur:"sehir", lat:39.161, lon:20.985, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1449-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1449-01-01",t:"1881-07-02"}] },
{ ad:"Yenişehir (Larissa)", tur:"sehir", lat:39.639, lon:22.418, g:0, k:3, m:"Yanya", s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans"},{f:"1311-03-15",t:"1390-01-01",d:"katalan"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1394-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1881-07-02"}] },
{ ad:"Tırhala", tur:"sehir", lat:39.555, lon:21.768, g:0, k:3, m:"Yanya", s:[{f:"1281-01-01",t:"1311-03-15",d:"bizans"},{f:"1311-03-15",t:"1390-01-01",d:"katalan"},{f:"1390-01-01",t:"1394-01-01",d:"bizans"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1394-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1881-07-02"}] },
// Mora isyanı Osmanlı ordusuyla bastırılamayınca II. Mahmud Mehmed Ali'den
// yardım istedi. İbrâhim Paşa Şubat 1825'te Modon'a çıktı, Haziran'da Tripoliçe'yi
// geri aldı; Navarin baskınından (1827) sonra Mısır kuvvetleri Ekim 1828'de
// yarımadayı boşalttı. Atina'daki Osmanlı garnizonu 1833'e kadar direndi.
{ ad:"Atina", tur:"sehir", lat:37.976, lon:23.734, g:1, k:2, s:[{f:"1281-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1687-09-26",t:"1688-04-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1687-09-26",y:"antlasma"},{f:"1688-04-01",t:"1821-03-25",y:"savas"},{f:"1827-06-05",t:"1833-03-31",y:"kusatma"}] },
{ ad:"Mora (Tripoliçe)", tur:"sehir", lat:37.510, lon:22.379, g:1, k:2, s:[{f:"1281-01-01",t:"1460-05-29",d:"bizans"},{f:"1687-08-01",t:"1715-07-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1460-05-29",t:"1687-08-01",y:"savas"},{f:"1715-07-01",t:"1821-03-25",y:"savas"}],
    v:[{f:"1825-06-22",t:"1828-10-05",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Modon", tur:"kale", lat:36.8207, lon:21.7075, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1500-08-09",d:"venedik"},{f:"1686-06-01",t:"1715-08-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1500-08-09",t:"1686-06-01",y:"kusatma"},{f:"1715-08-01",t:"1825-02-24"}],
    v:[{f:"1825-02-24",t:"1828-10-05",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Balyabadra (Patras)", tur:"liman", lat:38.246, lon:21.735, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1458-05-01",d:"bizans"},{f:"1687-07-01",t:"1715-07-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1458-05-01",t:"1687-07-01",y:"kusatma"},{f:"1715-07-01",t:"1821-03-25"}] },
{ ad:"Anabolu (Nauplion)", tur:"kale", lat:37.567, lon:22.800, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1540-11-01",d:"venedik"},{f:"1686-08-30",t:"1715-07-20",d:"venedik"},{f:"1822-12-12",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1540-11-01",t:"1686-08-30",y:"antlasma"},{f:"1715-07-20",t:"1822-12-12",y:"kusatma"}] },
{ ad:"İnebahtı", tur:"kale", lat:38.399, lon:21.827, g:2, k:3, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1499-08-26",d:"venedik"},{f:"1687-08-06",t:"1715-07-01",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1499-08-26",t:"1687-08-06",y:"kusatma"},{f:"1715-07-01",t:"1829-05-01"}] },
{ ad:"Eğriboz", tur:"kale", lat:38.4631, lon:23.6023, g:0, k:3, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1470-07-12",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1470-07-12",t:"1829-05-01",y:"kusatma"}] },
{ ad:"İstefe (Tebai)", tur:"sehir", lat:38.322, lon:23.319, g:0, k:4, m:"Atina", s:[{f:"1281-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1821-03-25"}] },
{ ad:"Livadya", tur:"sehir", lat:38.435, lon:22.875, g:0, k:4, m:"Atina", s:[{f:"1281-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1821-03-25"}] },
{ ad:"İzdin (Lamia)", tur:"kale", lat:38.900, lon:22.434, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1394-01-01",d:"katalan"},{f:"1881-07-02",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1394-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1881-07-02"}] },
{ ad:"İşkodra", tur:"kale", lat:42.069, lon:19.513, g:0, k:2, s:[{f:"1281-01-01",t:"1479-01-25",d:"venedik"},{f:"1913-04-23",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1479-01-25",t:"1913-04-23",y:"antlasma"}] },
{ ad:"Akçahisar (Kruja)", tur:"kale", lat:41.509, lon:19.793, g:1, k:3, m:"İşkodra", s:[{f:"1281-01-01",t:"1478-06-15",d:"arnavutluk"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1478-06-15",t:"1912-11-28",y:"kusatma"}] },
{ ad:"İlbasan (Elbasan)", tur:"kale", lat:41.113, lon:20.083, g:0, k:4, m:"İşkodra", kur:"1466-06-01", s:[{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1466-06-01",t:"1912-11-28"}] },
{ ad:"Berat", tur:"sehir", lat:40.705, lon:19.951, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1417-01-01",d:"arnavutluk"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1417-01-01",t:"1912-11-28"}] },
{ ad:"Draç", tur:"liman", lat:41.323, lon:19.455, g:0, k:3, m:"İşkodra", s:[{f:"1281-01-01",t:"1501-08-17",d:"venedik"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1501-08-17",t:"1912-11-28",y:"kusatma"}] },
{ ad:"Avlonya", tur:"liman", lat:40.466, lon:19.489, g:0, k:3, m:"Yanya", s:[{f:"1281-01-01",t:"1417-01-01",d:"napoli"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}], d:[{f:"1417-01-01",t:"1912-11-28",y:"kusatma"}] },
{ ad:"Priştine", tur:"sehir", lat:42.663, lon:21.162, g:0, k:3, m:"Üsküp", s:[{f:"1281-01-01",t:"1455-06-01",d:"sirbistan"},{f:"1912-10-22",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1455-06-01",t:"1912-10-22"}] },
{ ad:"Semendire", tur:"kale", lat:44.663, lon:20.930, g:1, k:3, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01",y:"kusatma"},{f:"1459-06-20",t:"1717-08-18",y:"kusatma"},{f:"1739-09-18",t:"1867-04-18",y:"antlasma"}], v:[{f:"1867-04-18",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Belgrad", tur:"kale", lat:44.818, lon:20.457, g:2, k:2, s:[{f:"1281-01-01",t:"1427-01-01",d:"sirbistan"},{f:"1427-01-01",t:"1521-08-29",d:"macaristan"},{f:"1688-09-06",t:"1690-09-09",d:"avusturya"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1521-08-29",t:"1688-09-06",y:"kusatma"},{f:"1690-09-09",t:"1717-08-18",y:"savas"},{f:"1739-09-18",t:"1867-04-18",y:"antlasma"}], v:[{f:"1867-04-18",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Saraybosna", tur:"sehir", lat:43.856, lon:18.413, g:1, k:2, s:[{f:"1281-01-01",t:"1448-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1448-01-01",t:"1908-10-05",y:"savas"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Mostar", tur:"sehir", lat:43.343, lon:17.808, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1483-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1483-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Banaluka", tur:"kale", lat:44.772, lon:17.191, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1463-06-01",t:"1528-01-01",d:"macaristan"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1528-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Bükreş", tur:"sehir", lat:44.427, lon:26.103, g:1, k:2, s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Yaş", tur:"sehir", lat:47.157, lon:27.601, g:0, k:2, s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1456-06-01",t:"1878-07-13",k:"Boğdan Voyvodalığı"}] },
{ ad:"Akkirman", tur:"kale", lat:46.1968, lon:30.3431, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], v:[{f:"1456-06-01",t:"1484-08-04",k:"Boğdan Voyvodalığı"}], d:[{f:"1484-08-04",t:"1812-05-28",y:"kusatma"}] },
{ ad:"Kili", tur:"kale", lat:45.451, lon:29.271, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], v:[{f:"1456-06-01",t:"1484-07-15",k:"Boğdan Voyvodalığı"}], d:[{f:"1484-07-15",t:"1812-05-28",y:"kusatma"}] },
// Boğdan'ın iç ve batı kesimi: yalnız Yaş + Tuna/Dinyester kaleleri olunca voyvodalık
// gövdesi Karpatlar'a kadar uzanamıyor, Erdel hücrelerine kapılıyordu. Suçava 1388-1565
// arası Boğdan başkentidir; Suçava ile Çernovitz Bukovina'dır ve 1775'te Avusturya'ya terk
// edildi — o maddenin haritada karşılığı bu iki nokta ile doğdu.
{ ad:"Suçava (Suceava)", tur:"sehir", lat:47.633, lon:26.250, g:0, k:3, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1775-05-07",t:"1923-10-29",d:"avusturya"}], d:[], v:[{f:"1456-06-01",t:"1775-05-07",k:"Boğdan Voyvodalığı"}] },
{ ad:"Çernovitz (Çernivtsi)", tur:"kale", lat:48.292, lon:25.935, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1775-05-07",t:"1923-10-29",d:"avusturya"}], d:[], v:[{f:"1456-06-01",t:"1775-05-07",k:"Boğdan Voyvodalığı"}] },
{ ad:"Roman", tur:"sehir", lat:46.925, lon:26.930, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1456-06-01",t:"1878-07-13",k:"Boğdan Voyvodalığı"}] },
{ ad:"Birlad (Bârlad)", tur:"kale", lat:46.230, lon:27.667, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1456-06-01",t:"1878-07-13",k:"Boğdan Voyvodalığı"}] },
{ ad:"Kalas (Galatz)", tur:"liman", lat:45.435, lon:28.008, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1456-06-01",t:"1878-07-13",k:"Boğdan Voyvodalığı"}] },
{ ad:"İbrail", tur:"kale", lat:45.270, lon:27.972, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1829-09-14",t:"1859-01-24",d:"eflak"},{f:"1859-01-24",t:"1923-10-29",d:"romanya"}], v:[{f:"1462-06-01",t:"1538-09-01",k:"Eflak Voyvodalığı"}], d:[{f:"1538-09-01",t:"1829-09-14"}] },
{ ad:"Özi", tur:"kale", lat:46.6247, lon:31.5421, g:0, k:3, m:"Silistre", s:[{f:"1737-07-13",t:"1738-08-01",d:"rusya"},{f:"1281-01-01",t:"1538-09-01",d:"kirim"},{f:"1788-12-17",t:"1923-10-29",d:"rusya"}], d:[{f:"1538-09-01",t:"1737-07-13"},{f:"1738-08-01",t:"1788-12-17"}] },
{ ad:"Kamaniçe", tur:"kale", lat:48.674, lon:26.574, g:0, k:2, s:[{f:"1281-01-01",t:"1672-08-27",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}], d:[{f:"1672-08-27",t:"1699-01-26",y:"kusatma"}] },
{ ad:"Erdel (Kaloşvar)", tur:"bolge", lat:46.770, lon:23.591, g:0, k:2, s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1687-08-12",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"romanya"}], v:[{f:"1541-08-29",t:"1687-08-12",k:"Erdel Prensliği"},{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)"}], d:[] },
{ ad:"Budin", tur:"sehir", lat:47.498, lon:19.040, g:2, k:2, s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1686-09-02",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], v:[{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)"}], d:[{f:"1541-08-29",t:"1686-09-02",y:"ilhak"}] },
{ ad:"Peçuy", tur:"sehir", lat:46.073, lon:18.233, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1543-07-21",d:"macaristan"},{f:"1686-10-14",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1543-07-21",t:"1686-10-14",y:"kusatma"}] },
{ ad:"Estergon", tur:"kale", lat:47.795, lon:18.740, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1543-08-10",d:"macaristan"},{f:"1595-09-02",t:"1605-10-03",d:"avusturya"},{f:"1683-10-09",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1543-08-10",t:"1595-09-02",y:"kusatma"},{f:"1605-10-03",t:"1683-10-09",y:"kusatma"}] },
{ ad:"Eğri", tur:"kale", lat:47.902, lon:20.377, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1596-10-12",d:"macaristan"},{f:"1687-12-17",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1596-10-12",t:"1687-12-17",y:"kusatma"}] },
{ ad:"Kanije", tur:"kale", lat:46.454, lon:16.989, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1600-10-20",d:"macaristan"},{f:"1690-04-13",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1600-10-20",t:"1690-04-13",y:"kusatma"}] },
{ ad:"Uyvar", tur:"kale", lat:47.986, lon:18.162, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1663-09-24",d:"avusturya"},{f:"1685-08-19",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}], d:[{f:"1663-09-24",t:"1685-08-19",y:"kusatma"}] },
{ ad:"Temeşvar", tur:"kale", lat:45.760, lon:21.230, g:0, k:2, s:[{f:"1281-01-01",t:"1552-07-27",d:"macaristan"},{f:"1716-10-13",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"romanya"}], d:[{f:"1552-07-27",t:"1716-10-13",y:"kusatma"}] },
// ---------------- ADALAR ----------------
{ ad:"Rodos", tur:"kale", lat:36.443, lon:28.226, g:1, k:2, s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-04",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-04",y:"kusatma"}] },
{ ad:"Sakız", tur:"liman", lat:38.368, lon:26.135, g:0, k:3, m:"İzmir", s:[{f:"1281-01-01",t:"1566-04-14",d:"ceneviz"},{f:"1694-09-21",t:"1695-02-22",d:"venedik"},{f:"1912-11-11",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-14",t:"1694-09-21",y:"ilhak"},{f:"1695-02-22",t:"1912-11-11",y:"savas"}] },
{ ad:"Midilli", tur:"kale", lat:39.106, lon:26.554, g:0, k:3, m:"İzmir", s:[{f:"1281-01-01",t:"1462-09-17",d:"ceneviz"},{f:"1912-11-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1462-09-17",t:"1912-11-21",y:"kusatma"}] },
// hatalar 6.docx madde 1 ve 3 — kullanıcı: "Limni ise kaybedilmemiş gibi hâlâ
// kırmızı... bu olayda limni geri alındı mı karşıda mı kaldı". TEYİD: kullanıcı
// haklı; Limni'nin Venedik dönemi veride HİÇ YOKTU, d: penceresi 1479'dan
// 1912'ye kesintisiz uzanıyordu. Venedik Bozcaada'yı 8 Temmuz 1656, Limni'yi
// 21 Ağustos 1656'da aldı; Köprülü Mehmed Paşa Bozcaada'yı 31 Ağustos 1657,
// Limni'yi 15 Kasım 1657'de geri aldı. İkisi de YENİ kırılma günü olduğu için
// her birine ayrı madde yazıldı (olaylar_ek8.js).
// ⚠️ Madde 1'in ikinci ayağı ÖLÇÜLDÜ: 1656-07-13 döneminde Osmanlı gövdesinden
// çıkan tek parça lon 25.98-26.08 / lat 39.78-39.84 bbox'lı 13 köşeli halkadır,
// yani Bozcaada'nın kendisi. Biga yarımadasında kaybedilen toprak YOKTUR;
// adanın karaya 20 km uzaklıkta olması, imparatorluk ölçeğinde onu Biga
// kıyısının bir parçası gibi gösteriyor.
{ ad:"Limni", tur:"kale", lat:39.876, lon:25.156, g:0, k:3, m:"Selanik", s:[{f:"1281-01-01",t:"1479-01-25",d:"bizans"},{f:"1656-08-21",t:"1657-11-15",d:"venedik"},{f:"1912-10-08",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-01-25",t:"1656-08-21"},{f:"1657-11-15",t:"1912-10-08",y:"kusatma"}] },
// Girit, Mora'nın karşılığı olarak 1830'da Mehmed Ali'nin idaresine bırakıldı;
// 1840 İskenderiye Konvansiyonu'yla Bâbıâli'ye geri döndü.
{ ad:"Kandiye (Girit)", tur:"liman", lat:35.339, lon:25.133, g:1, k:2, s:[{f:"1281-01-01",t:"1669-09-27",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1669-09-27",t:"1898-12-01",y:"kusatma"}],
    v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Hanya", tur:"kale", lat:35.512, lon:24.019, g:0, k:3, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1645-08-22",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1645-08-22",t:"1830-11-01",y:"kusatma"},{f:"1841-02-25",t:"1898-12-01"}], v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Lefkoşa", tur:"sehir", lat:35.170, lon:33.360, g:1, k:2, s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-09-09",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-09-09",t:"1878-06-04",y:"kusatma"}] },
{ ad:"Magosa", tur:"kale", lat:35.125, lon:33.940, g:0, k:3, m:"Lefkoşa", s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1571-08-01",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1571-08-01",t:"1878-06-04",y:"kusatma"}] },
// Ege adaları — her ada kendi peteğiyle boyanır
// hatalar 6.docx madde 1'in uzantısı: 1656-07-13 tarihli mevcut maddenin
// ("Çanakkale bozgunu ve Bozcaada ile Limni'nin kaybı") metni "ardından
// Bozcaada, Limni ve Semadirek işgal edildi" diyor. Limni gibi Semadirek'in de
// Venedik penceresi veride yoktu — madde ile harita çelişiyordu. Aynı pencere
// verildi; Köprülü'nün Kasım 1657 harekâtı kuzey Ege'yi topluca geri aldı.
// ⚠️ Venedik'in Semadirek'i tam olarak hangi gün boşalttığı TDV'de yok; Limni
// ile aynı gün kabul edildi, gerekçesi budur.
{ ad:"Semadirek", tur:"kale", lat:40.463, lon:25.530, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1456-01-24",d:"ceneviz"},{f:"1656-07-13",t:"1657-11-15",d:"venedik"},{f:"1912-10-19",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-01-24",t:"1656-07-13"},{f:"1657-11-15",t:"1912-10-19"}] },
{ ad:"Taşoz", tur:"kale", lat:40.690, lon:24.647, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1455-01-01",d:"ceneviz"},{f:"1912-10-18",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1912-10-18"}] },
{ ad:"Bozcaada", tur:"kale", lat:39.833, lon:26.045, g:0, k:3, m:"Edirne", s:[{f:"1281-01-01",t:"1455-01-01",d:"bizans"},{f:"1656-07-13",t:"1657-08-25",d:"venedik"},{f:"1912-10-07",t:"1913-11-01",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1656-07-13",y:"kusatma"},{f:"1657-08-25",t:"1912-10-07",y:"kusatma"},{f:"1913-11-01",t:"1923-10-29"}] },
{ ad:"İmroz", tur:"kale", lat:40.163, lon:25.905, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1455-01-01",d:"bizans"},{f:"1912-11-01",t:"1913-11-01",d:"yunanistan"}], d:[{f:"1455-01-01",t:"1912-11-01"},{f:"1913-11-01",t:"1923-10-29"}] },
{ ad:"Sisam", tur:"kale", lat:37.755, lon:26.977, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1479-01-25",d:"ceneviz"},{f:"1912-03-13",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-01-25",t:"1912-03-13"}] },
{ ad:"İstanköy", tur:"kale", lat:36.893, lon:27.288, g:0, k:3, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1523-01-05",d:"sovalye"},{f:"1912-05-21",t:"1923-10-29",d:"italya"}], d:[{f:"1523-01-05",t:"1912-05-21",y:"antlasma"}] },
{ ad:"Nakşa", tur:"kale", lat:37.0970, lon:25.3825, g:0, k:3, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03",y:"ilhak"}] },
{ ad:"Andros", tur:"kale", lat:37.833, lon:24.933, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
// Noktası olmayan ada, en yakın hücreye kapılıp o hücrenin sahibiyle boyanır.
// Denetim, uzun süreli sahtelik üreten beş adayı ayıkladı: Çuha hiç kalıcı Osmanlı
// olmadığı hâlde Koron'la birlikte 1500'de Osmanlı görünüyordu; İskiros ve Kuzey
// Sporadlar Eğriboz'a kapılıp 1470'te (gerçekte 1538), İstendil Andros'a kapılıp
// 1566'da (gerçekte 1715) Osmanlı oluyordu.
{ ad:"Çuha Adası (Kythira)", tur:"kale", lat:36.240, lon:22.990, g:0, k:4, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1715-09-07",d:"venedik"},{f:"1718-07-21",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1715-09-07",t:"1718-07-21",y:"kusatma"}] },
{ ad:"İskiros (Skyros)", tur:"kale", lat:38.900, lon:24.570, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1453-05-29",t:"1538-08-01",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1538-08-01",t:"1830-02-03"}] },
{ ad:"İskopelos", tur:"kale", lat:39.120, lon:23.720, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1453-05-29",t:"1538-08-01",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1538-08-01",t:"1830-02-03"}] },
{ ad:"İstendil (Tinos)", tur:"kale", lat:37.570, lon:25.170, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1715-06-05",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1715-06-05",t:"1830-02-03",y:"kusatma"}] },
{ ad:"Nikarya (İkarya)", tur:"kale", lat:37.600, lon:26.150, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1362-01-01",d:"bizans"},{f:"1362-01-01",t:"1521-01-01",d:"ceneviz"},{f:"1912-07-17",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1521-01-01",t:"1912-07-17"}] },
{ ad:"Santorini", tur:"kale", lat:36.416, lon:25.432, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Girit (Resmo)", tur:"kale", lat:35.365, lon:24.482, g:0, k:3, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1646-11-13",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1646-11-13",t:"1898-12-01",y:"kusatma"}],
    v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Karpatos", tur:"kale", lat:35.508, lon:27.213, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1537-10-01",d:"venedik"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1537-10-01",t:"1912-05-12"}] },
// ---------------- KIRIM VE KARADENİZ KUZEYİ ----------------
{ ad:"Kefe", tur:"liman", lat:45.032, lon:35.382, g:1, k:2, s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1783-04-19",y:"kusatma"}], isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kefe"}] },
{ ad:"Bahçesaray", tur:"sehir", lat:44.753, lon:33.861, g:0, k:2, s:[{f:"1771-07-01",t:"1774-07-21",d:"rusya"},{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1475-06-06",d:"kirim"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1475-06-06",t:"1771-07-01",k:"Kırım Hanlığı"}] },
{ ad:"Kerç", tur:"kale", lat:45.356, lon:36.467, g:0, k:3, m:"Kefe", s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1774-07-21"}] },
// hatalar 5.docx madde 9 — kullanıcı: "azak kalesinin geri alınması maddesinde
// haritada hiçbir değişiklik olmuyor". SEBEP BULUNDU: kayıtta Azak 1475'ten
// 1696'ya KESİNTİSİZ Osmanlı'ydı; Don Kazakları'nın 1637-1642 arasındaki
// işgali veride hiç yoktu, dolayısıyla 1642'deki geri alışın boyayacak bir şeyi
// kalmıyordu. TDV "AZAK": "Kazaklar kaleyi 1637'de ele geçirdi", 1641'de Deli
// Hüseyin Paşa'nın üç ay süren kuşatması, 1642'de Mehmed Giray'ın gelişiyle
// Kazaklar kaleyi boşalttı. Pencere eklendi.
// ⚠️ TDV yalnız YIL veriyor; 18 Haziran 1637 günü, 21 Nisan'da başlayan
// kuşatmanın bitiş günü olarak literatürde standarttır. Kimlik olarak "rusya"
// seçildi: Don Kazakları çarın tebaasıydı (çar kaleyi devralmayı reddetti) ve
// aynı kayıt 1696 ve 1774 pencerelerinde de "rusya" kullanıyor; renkler.py'de
// Kazak kimliği yok, rastgele renk eklemek DSATUR dengesini bozar.
{ ad:"Azak", tur:"kale", lat:47.113, lon:39.423, g:0, k:3, m:"Kefe", s:[{f:"1281-01-01",t:"1475-06-06",d:"ceneviz"},{f:"1637-06-18",t:"1642-02-26",d:"rusya"},{f:"1696-07-19",t:"1711-07-21",d:"rusya"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1475-06-06",t:"1637-06-18",y:"kusatma"},{f:"1642-02-26",t:"1696-07-19",y:"kusatma"},{f:"1711-07-21",t:"1774-07-21",y:"antlasma"}] },
{ ad:"Taman", tur:"kale", lat:45.2029, lon:36.7172, g:0, k:3, m:"Kefe", s:[{f:"1281-01-01",t:"1482-06-01",d:"ceneviz"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}], d:[{f:"1482-06-01",t:"1774-07-21"}] },
{ ad:"Anapa", tur:"kale", lat:44.894, lon:37.316, g:0, k:3, m:"Kefe", s:[{f:"1281-01-01",t:"1781-01-01",d:"kirim"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}], d:[{f:"1781-01-01",t:"1829-09-14"}] },
{ ad:"Sohum", tur:"liman", lat:43.001, lon:41.023, g:0, k:3, m:"Trabzon", s:[{f:"1281-01-01",t:"1578-08-09",d:"gurcistan"},{f:"1810-07-01",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-08-09",t:"1810-07-01"}] },

// ── ÇERKEZYA ve KUBAN ──────────────────────────────────────────────────────
// hatalar 4.docx madde 4 — kullanıcı: "çıldır zaferi ile çerkezya soçi krasnodar
// çevresi osmanlı idaresine mi geçti bunu teyid edelim". CEVAP: GEÇMEDİ.
// TDV "ÇILDIR EYALETİ": 9 Ağustos 1578 zaferinden sonra kurulan eyalet Çıldır,
// Ardanuç, Şavşat, Oltu ve Ahıska'yı kapsar; Çerkezya, Kuban ve Soçi eyaletin
// dışındadır. Haritanın Osmanlı boyaması ÖLÇÜLDÜ: bölgede hiç nokta olmadığı
// için Sohum'un peteği (1578'den Osmanlı) Çerkez kıyısının 43 ızgara hücresini,
// Azak'ın peteği Krasnodar çevresinin 18 hücresini yutuyordu — CLAUDE.md §2'nin
// tam örneği. Aşağıdaki beş nokta o emilmeyi kesiyor.
// Sahiplik: Çerkez kabileleri Kırım hanının nüfuz alanındaydı → komşusu Anapa
// kaydıyla birebir aynı kimlik (kirim) kullanıldı; Rus hâkimiyeti tarihleri de
// mevcut kırılma günlerinden seçildi (Kuban sağ yakası 1783-04-08 Kırım'ın
// ilhakı, Çerkez kıyısı 1829-09-14 Edirne, Kabartay 1774-07-21 Küçük Kaynarca).
// Hepsi s:→s: geçişi olduğu için KIRILMA ÜRETMEZ (Değişmez 2 etkilenmez).
{ ad:"Soçi (Sâşe)", tur:"liman", lat:43.585, lon:39.723, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1829-09-14",d:"kirim"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}] },
{ ad:"Tuapse", tur:"liman", lat:44.103, lon:39.080, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1829-09-14",d:"kirim"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kuban (Yekaterinodar)", tur:"sehir", lat:45.035, lon:38.975, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}] },
{ ad:"Maykop (Çerkezya)", tur:"bolge", lat:44.609, lon:40.101, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1829-09-14",d:"kirim"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kabartay (Nalçik)", tur:"bolge", lat:43.498, lon:43.618, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1774-07-21",d:"kirim"},{f:"1774-07-21",t:"1923-10-29",d:"rusya"}] },

// ── DAĞISTAN KIYISI ────────────────────────────────────────────────────────
// hatalar 4.docx madde 7 — kullanıcı: "Demirkapı derbend ele geçirilmesi maddesi
// ile hazar denizinin öte yakasında bir parça toprak kırmızıya boyanıyor 1583".
// ÖLÇÜLDÜ: 1583-01-01 döneminde Osmanlı gövdesine katılan parçalardan biri
// lon 47.63-47.87 / lat 43.93-44.00 bbox'lı 19 köşeli bir halkaydı — Hazar'ın
// karşı yakası değil, Derbend'in 200 km KUZEYİNDEKİ Ağraham (Agrahan) dili;
// ayrı bir kara bileşeni olduğu için denizde kopuk bir yama gibi görünüyor.
// Sebep yine §2: Derbend ile Astrahan arasında hiç nokta yoktu, dil Derbend'in
// peteğine düşüyordu. Üç nokta eklendi; dilin kendi üstündeki nokta onu kendi
// peteğine hapsediyor (ada kuralı, uret_petek.py).
// Tarki (Kumuk şamhallığı) 1578-1607 arası Osmanlı TÂBİİ (açık ton) yazıldı;
// Ağraham dili ve Terek deltası Osmanlı penceresi ALMADI — Demirkapı koridoru
// kıyı yolundan ibaretti. Tâbiiyet pencereleri mevcut kırılma günlerine
// (1578-11-01 Şirvan'ın fethi, 1607-01-01 Şirvan'ın kaybı) oturtuldu.
{ ad:"Tarki (Tarku)", tur:"sehir", lat:42.980, lon:47.500, g:0, k:0, s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1578-11-01",t:"1607-01-01",k:"Kumuk şamhallığı (tâbi)"}] },
{ ad:"Ağraham burnu", tur:"bolge", lat:43.972, lon:47.739, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}] },
{ ad:"Terek deltası (Kızlar)", tur:"bolge", lat:43.850, lon:46.720, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
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
{ ad:"Tebriz", tur:"sehir", lat:38.080, lon:46.292, g:2, k:2, s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}], d:[
    {f:"1514-09-06",t:"1514-09-15",y:"savas"}, {f:"1534-07-13",t:"1535-06-01",y:"savas"},
    {f:"1548-07-27",t:"1548-08-15",y:"savas"}, {f:"1585-09-25",t:"1603-10-21",y:"savas"},
    {f:"1725-08-04",t:"1730-08-12",y:"kusatma"}] },
{ ad:"Nahçıvan", tur:"sehir", lat:39.209, lon:45.412, g:0, k:3, m:"Revan", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1828-02-22",d:"iran"},{f:"1828-02-22",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1585-01-01",t:"1603-10-21"}, {f:"1725-01-01",t:"1730-08-12"}] },
{ ad:"Tiflis", tur:"sehir", lat:41.716, lon:44.783, g:1, k:2, s:[{f:"1281-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1578-08-09",t:"1606-01-01",y:"savas"}, {f:"1723-06-15",t:"1735-06-19",y:"kusatma"}] },
// hatalar 4.docx madde 5'in ikinci ayağı: Şirvan'ın "enklav" görünmesinin
// öbür sebebi, Tiflis ile Şeki arasındaki Kaheti (Alazan vadisi) koridorunda
// hiç nokta olmamasıydı — Osmanlı gövdesi Gürcistan'da bitip Şirvan'da yeniden
// başlıyordu. Çıldır'dan sonra Kaheti kralı II. Aleksandre Lala Mustafa Paşa'ya
// tâbiiyetini bildirmişti; 1590 Ferhad Paşa Antlaşması da Kaheti'yi Osmanlı'ya
// bırakır. TÂBİ (açık ton) olarak yazıldı, doğrudan Osmanlı değil.
// Pencere mevcut kırılma günleri: 1578-08-09 (Çıldır) → 1606-01-01 (Tiflis'in
// kaybıyla aynı gün). Yeni kırılma tarihi üretilmedi.
{ ad:"Zagem (Kaheti)", tur:"sehir", lat:41.700, lon:45.780, g:0, k:0, s:[{f:"1281-01-01",t:"1801-09-12",d:"gurcistan"},{f:"1801-09-12",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1578-08-09",t:"1606-01-01",k:"Kaheti krallığı (tâbi)"}] },
{ ad:"Revan", tur:"kale", lat:40.183, lon:44.515, g:1, k:2, s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1828-02-22",d:"iran"},{f:"1828-02-22",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-06-01",t:"1604-06-08",y:"kusatma"}, {f:"1635-08-08",t:"1636-04-01",y:"kusatma"},
    {f:"1724-09-28",t:"1735-06-19",y:"kusatma"}] },
{ ad:"Gence", tur:"kale", lat:40.683, lon:46.360, g:0, k:3, m:"Revan", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1588-01-01",t:"1606-01-01"}, {f:"1725-09-12",t:"1735-06-19"}] },
{ ad:"Şamahı", tur:"sehir", lat:40.632, lon:48.641, g:0, k:2, s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1578-11-01",t:"1607-01-01"}, {f:"1723-08-01",t:"1735-06-19"}] },
{ ad:"Bakü", tur:"liman", lat:40.372, lon:49.867, g:1, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1723-07-26",d:"safevi"},{f:"1723-07-26",t:"1735-03-10",d:"rusya"},{f:"1735-03-10",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-08-01",t:"1607-01-01",y:"savas"}] },
{ ad:"Derbend", tur:"kale", lat:42.058, lon:48.290, g:0, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1722-08-23",d:"safevi"},{f:"1722-08-23",t:"1735-03-10",d:"rusya"},{f:"1735-03-10",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[
    {f:"1583-01-01",t:"1607-01-01"}] },

// ── ŞİRVAN'IN ARA ŞEHİRLERİ ────────────────────────────────────────────────
// hatalar 4.docx madde 5 — kullanıcı: "şirvanın fethi maddesinde azerbaycanın
// içinde enklav şeklinde gösterilen bir bölge var aradaki bölgeler ele
// geçirilmemiş mi bunları teyid et detaylandır". TEYİD: bölgeler ele geçirildi,
// haritada karşılığı yoktu. TDV "ŞİRVAN": 1578 Koyungeçidi zaferinden sonra
// Özdemiroğlu Osman Paşa kumandasında "Şamahı, Kabala, Bakü, Şâbüran,
// Mahmudâbâd, Salyan ve Derbend" alındı. Bunlardan yalnız Şamahı, Şeki ve
// Salyan haritada vardı → Kasım 1578'de üç kopuk petek, yani enklav görüntüsü.
// TDV'nin saydığı Kabala, Şâbüran, Mahmudâbâd ile Kür kıyısındaki Ereş
// sancağı eklendi; pencere mevcut kırılma günlerine (1578-11-01 → 1607-01-01)
// birebir oturtuldu, YENİ kırılma tarihi üretilmedi.
// NOT: Bakü ve Derbend TDV'ye göre de 1578 kafilesindeydi; Safevî karşı
// saldırılarıyla elden çıkıp 1583 Meşaleler (Sâmûr) Savaşı'ndan sonra kesin
// alındığı için mevcut 1583 tarihleri KORUNDU (bkz. olaylar_ek5 1583-05-09).
{ ad:"Kabala", tur:"sehir", lat:40.984, lon:47.845, g:0, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-11-01",t:"1607-01-01"},{f:"1725-09-12",t:"1735-06-19"}] },
{ ad:"Ereş", tur:"sehir", lat:40.740, lon:47.310, g:0, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-11-01",t:"1607-01-01"},{f:"1725-09-12",t:"1735-06-19"}] },
{ ad:"Şâbüran", tur:"sehir", lat:41.210, lon:48.980, g:0, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-11-01",t:"1607-01-01"}] },
{ ad:"Mahmudâbâd", tur:"sehir", lat:39.380, lon:49.240, g:0, k:3, m:"Şamahı", s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1723-09-23",d:"safevi"},{f:"1723-09-23",t:"1732-01-21",d:"rusya"},{f:"1732-01-21",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1813-10-24",d:"iran"},{f:"1813-10-24",t:"1923-10-29",d:"rusya"}], d:[{f:"1578-11-01",t:"1607-01-01"}] },
// hatalar 4.docx madde 10 — kullanıcının saydığı beş yerden Kirmanşah, Nihâvend
// ve Luristan aynı turda Osmanlı yapıldı (aşağıdaki blok), ama HEMEDAN Safevî
// kaldı. Bu, Kirmanşah için kurulan coğrafî gerekçenin aynısıyla tutarsız:
// Nihâvend (48.38°D) Osmanlı iken 24 km kuzeydoğusundaki Hemedan (48.52°D)
// Safevî duruyordu — oysa Nihâvend Hemedan'ın kazasıdır.
// Bu sefer çıkarım DEĞİL, doğrudan atıf var: TDV "HEMEDAN" maddesi 1588'de
// Cigalazâde Sinan Paşa'nın Hemedan bölgesini ele geçirdiğini yazar. 1590
// Ferhad Paşa Antlaşması bu fethi tasdik etti; Şah Abbas 1603 taarruzuyla geri
// aldı. Tarih olarak 1588 yerine 1590-03-21 seçildi çünkü 1588-01-01'in ±30 gün
// içindeki tek maddesi "Karabağ ve Gence'nin ilhakı" — başka bir cephe. Hemedan'ı
// ona bağlamak, bu turda Taman'da düzelttiğim "kırılma yanlış maddenin altında
// beliriyor" hatasının aynısı olurdu. 1590-03-21'in maddesi ise tam yerinde:
// "Ferhad Paşa Antlaşması — doğuda en geniş sınırlar".
{ ad:"Hemedan", tur:"sehir", lat:34.799, lon:48.515, g:0, k:2, s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}], d:[
    {f:"1590-03-21",t:"1603-10-21",y:"antlasma"},
    {f:"1724-08-31",t:"1730-08-12",y:"kusatma"}] },
// hatalar 4.docx madde 10 — kullanıcı: "Kirmanşah nihavend brucerd senendec
// loristan osmanlıda kalması gerekmiyor mu... bağdata doğru giren iran toprakları
// girintisi doğru mu". Girinti ÖLÇÜLDÜ ve gerçekti: Nihâvend (48.38°D) ve
// Luristan (48.36°D) 1590-1603 arası Osmanlı iken, ikisinin BATISINDA kalan
// Kirmanşah (47.07°D) Safevî duruyordu — yani Osmanlı Nihâvend'i Bağdat'tan
// kesen bir İran kaması. 1590 Ferhad Paşa Antlaşması "fethedilen ülkelerin
// Osmanlılar'ın tasarrufunda kalması" esasına dayanıyordu (TDV, III. MURAD) ve
// TDV "KİRMANŞAH" maddesi şehrin "Osmanlı-İran savaşları sırasında birçok defa
// el değiştirdiğini" yazar. Nihâvend-Luristan hattı Osmanlı iken Kirmanşah'ın
// İran'da kalması coğrafî olarak imkânsız; 1590-1603 penceresi eklendi.
// ⚠️ TDV maddesi 1590 tarihini AÇIKÇA vermez — çıkarım, gerekçesi burada.
{ ad:"Kirmanşah", tur:"sehir", lat:34.314, lon:47.065, g:0, k:3, m:"Hemedan", s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}], d:[
    {f:"1590-03-21",t:"1603-10-21",y:"antlasma"}, {f:"1723-10-01",t:"1730-08-12",y:"savas"}] },
{ ad:"Luristan", tur:"bolge", lat:33.487, lon:48.356, g:0, k:3, m:"Hemedan", s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}], d:[
    {f:"1590-03-21",t:"1603-10-21",y:"antlasma"}] },
{ ad:"Şehrizor", tur:"sehir", lat:35.560, lon:45.430, g:0, k:2, s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1554-08-22",d:"safevi"},{f:"1623-11-28",t:"1638-12-25",d:"safevi"},{f:"1918-10-30",t:"1923-10-29",d:"ingiltere"}], d:[
    {f:"1554-08-22",t:"1623-11-28"}, {f:"1638-12-25",t:"1918-10-30"}] },
// ---------------- SURİYE / IRAK / HİCAZ ----------------
// 1831-1841 MISIR İŞGALİ: İbrâhim Paşa Kasım 1831'de Gazze-Yafa hattından girdi,
// Akkâ'yı Mayıs 1832'de aldı, Temmuz 1832'de Humus ve Belen'de Osmanlı ordusunu
// bozdu. Kütahya Sözleşmesi (1833) bu toprakları ona valilik olarak bıraktı.
// Müttefik donanmalar Beyrut (Ekim 1840) ve Akkâ'yı (Kasım 1840) alınca ordu
// çekildi; tahliye Şubat 1841'de tamamlandı.
{ ad:"Halep", tur:"sehir", lat:36.202, lon:37.161, g:2, k:2, s:[{f:"1281-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-08-28",t:"1918-10-26",y:"savas"}],
    v:[{f:"1832-06-25",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Hama", tur:"sehir", lat:35.132, lon:36.750, g:0, k:3, m:"Trablusşam", s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-01"}],
    v:[{f:"1832-06-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Şam", tur:"sehir", lat:33.513, lon:36.292, g:2, k:2, s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-01",y:"savas"}],
    v:[{f:"1832-06-15",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Beyrut", tur:"liman", lat:33.888, lon:35.495, g:0, k:3, m:"Şam", s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-08",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-08"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Trablusşam", tur:"liman", lat:34.436, lon:35.844, g:0, k:2, s:[{f:"1281-01-01",t:"1516-09-26",d:"memluk"},{f:"1918-10-13",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-26",t:"1918-10-13"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Kudüs", tur:"sehir", lat:31.777, lon:35.234, g:2, k:2, s:[{f:"1281-01-01",t:"1516-12-29",d:"memluk"},{f:"1917-12-09",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-29",t:"1917-12-09",y:"antlasma"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Gazze", tur:"sehir", lat:31.502, lon:34.466, g:0, k:3, m:"Kudüs", s:[{f:"1281-01-01",t:"1516-12-21",d:"memluk"},{f:"1917-11-07",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-21",t:"1917-11-07"}],
    v:[{f:"1831-10-31",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Akkâ", tur:"kale", lat:32.928, lon:35.082, g:0, k:3, m:"Şam", s:[{f:"1281-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-09-23",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-01-01",t:"1918-09-23"}],
    v:[{f:"1832-05-27",t:"1840-11-03",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Musul", tur:"sehir", lat:36.340, lon:43.130, g:1, k:2, s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1516-08-24",d:"safevi"},{f:"1918-11-08",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-08-24",t:"1918-11-08",y:"antlasma"}] },
{ ad:"Kerkük", tur:"sehir", lat:35.468, lon:44.392, g:0, k:3, m:"Şehrizor", s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1534-12-04",d:"safevi"},{f:"1623-11-28",t:"1638-12-25",d:"safevi"},{f:"1918-10-30",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-11-28"},{f:"1638-12-25",t:"1918-10-30"}] },
{ ad:"Bağdat", tur:"sehir", lat:33.340, lon:44.361, g:2, k:2, s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1534-12-04",d:"safevi"},{f:"1623-11-28",t:"1638-12-24",d:"safevi"},{f:"1917-03-11",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-11-28",y:"antlasma"},{f:"1638-12-24",t:"1917-03-11",y:"kusatma"}] },
{ ad:"Kerbelâ", tur:"sehir", lat:32.616, lon:44.025, g:0, k:3, m:"Bağdat", s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1534-12-04",d:"safevi"},{f:"1623-11-28",t:"1638-12-25",d:"safevi"},{f:"1917-03-11",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1534-12-04",t:"1623-11-28"},{f:"1638-12-25",t:"1917-03-11"}] },
{ ad:"Basra", tur:"liman", lat:30.508, lon:47.783, g:1, k:2, s:[{f:"1776-04-16",t:"1779-04-01",d:"iran"},{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1546-01-01",d:"safevi"},{f:"1914-11-22",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1546-01-01",t:"1776-04-16",y:"vassal"},{f:"1779-04-01",t:"1914-11-22"}] },
{ ad:"Lahsa", tur:"bolge", lat:25.383, lon:49.588, g:0, k:3, m:"Basra", s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1550-01-01",d:"safevi"},{f:"1670-01-01",t:"1795-04-01",d:"benihalid"},{f:"1795-04-01",t:"1818-09-09",d:"suud"},{f:"1818-09-09",t:"1841-10-01",d:"benihalid"},{f:"1841-10-01",t:"1871-04-20",d:"suud"},{f:"1913-07-08",t:"1923-10-29",d:"suud"}], d:[{f:"1550-01-01",t:"1670-01-01",y:"vassal"},{f:"1871-04-20",t:"1913-07-08",y:"savas"}] },
// HİCAZ: 1803-1813 arasında Suûdî-Vehhâbî hâkimiyeti (hac yolu kapandı, Osmanlı
// hutbesi kaldırıldı) → haritada kayıp. Mehmed Ali'nin oğulları Tosun ve İbrâhim
// paşaların seferleriyle geri alındı; 1841 fermanına kadar Mısır idaresinde
// kaldığı için tâbi katmanda gösterilir.
// ⚠️ Kayıp tarihi 1806-02-01 → 1806-01-01 (31 Tem 2026). Kırılma açıktı: aynı
// olayın maddesi (`Mekke'nin Vehhâbîlere kaybı`) 1806-01-01'de duruyordu, veri
// 31 gün ötesini gösteriyordu. Kaynak yalnız YILI veriyor (madde: gun:"1806"),
// gün uydurmak yerine projenin "yıl biliniyorsa -01-01" kuralına çekildi.
// Kapsam ölçüldü: bu tarihi taşıyan başka kayıt YOK, yalnız Mekke'nin iki ucu.
{ ad:"Mekke", tur:"sehir", lat:21.423, lon:39.826, g:2, k:2,
    s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1803-04-30",t:"1803-08-06",d:"suud"},{f:"1806-01-01",t:"1813-01-23",d:"suud"},{f:"1916-06-10",t:"1923-10-29",d:"hicaz"}], d:[],
    v:[{f:"1517-07-06",t:"1803-04-30",k:"Mekke Şerifliği"},{f:"1803-08-06",t:"1806-01-01",k:"Mekke Şerifliği"},{f:"1841-05-24",t:"1916-06-10",k:"Mekke Şerifliği"},{f:"1813-01-23",t:"1841-05-24",k:"Mısır (Kavalalı)"}] },
{ ad:"Medine", tur:"sehir", lat:24.470, lon:39.612, g:2, k:2,
    s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1805-06-01",t:"1812-12-03",d:"suud"},{f:"1919-01-10",t:"1923-10-29",d:"hicaz"}], d:[],
    v:[{f:"1517-07-06",t:"1805-06-01",k:"Mekke Şerifliği"},{f:"1841-05-24",t:"1919-01-10",k:"Mekke Şerifliği"},{f:"1812-12-03",t:"1841-05-24",k:"Mısır (Kavalalı)"}] },
{ ad:"Cidde", tur:"liman", lat:21.543, lon:39.173, g:0, k:3, m:"Mekke",
    s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1916-06-16",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1813-01-23"},{f:"1841-05-24",t:"1916-06-16"}],
    v:[{f:"1813-01-23",t:"1841-05-24",k:"Mısır (Kavalalı)"}] },
{ ad:"Yenbu", tur:"liman", lat:24.089, lon:38.063, g:0, k:3, m:"Medine",
    s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1805-07-20",t:"1811-11-01",d:"suud"},{f:"1916-07-27",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1805-07-20"},{f:"1841-05-24",t:"1916-07-27"}],
    v:[{f:"1811-11-01",t:"1841-05-24",k:"Mısır (Kavalalı)"}] },
// Necid: Dir'iye'nin 1818'de düşürülmesiyle Suûdî emirliği ortadan kaldırıldı;
// Mısır garnizonu 1824'e kadar kaldı, sonra ikinci Suûdî devleti kuruldu.
{ ad:"Dir'iye (Necid)", tur:"kale", lat:24.733, lon:46.575, g:0, k:3, m:"Basra", s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}], d:[],
    v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Tebük", tur:"kale", lat:28.384, lon:36.566, g:0, k:4, m:"Medine", s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-07-06",t:"1918-01-01"}] },
{ ad:"Maan", tur:"kale", lat:30.192, lon:35.734, g:0, k:4, m:"Kudüs", s:[{f:"1281-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-09-27",t:"1923-10-29",d:"hicaz"}], d:[{f:"1517-01-01",t:"1918-09-27"}] },
// ---------------- YEMEN ----------------
// Zebîd 1516 haritada YOKTU: 1281-1538 arası 257 yıl tek blok yazılmıştı, oysa
// 20 Haziran 1516'da el değiştirdi (TDV `zebid` + `selman-reis`, güne kadar).
// 🔴 Akla ilk gelen çözüm — 1516-1538'i tek parça `memluk` yazmak — 21 YILLIK
// HAYALET ETİKET üretirdi: Memlûk Devleti 1517-04-13'te yıkıldı (§3.5, Patmos/İbrim
// sınıfı). O yüzden iki dönem: kısa Memlûk dönemi + ardından TDV'nin anlattığı
// "Osmanlılar'ın desteğiyle Emîr İskender'in hâkimiyeti" / eski Memlûk beyleri.
// 1517-07-06 bitişi, Mekke'ye verilen bölgesel teslim gecikmesiyle aynı ölçüt.
// Yan kazanç: 1538 artık "yoktan fetih" değil, nominal bağın kalıcı idareye
// çevrilmesi — TDV'nin anlattığı da bu.
{ ad:"Zebîd", tur:"sehir", lat:14.195, lon:43.317, g:0, k:3, m:"Sana", s:[{f:"1281-01-01",t:"1516-06-20",d:"yemen"},{f:"1516-06-20",t:"1517-07-06",d:"memluk"},{f:"1635-01-01",t:"1849-01-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], v:[{f:"1517-07-06",t:"1538-08-03",k:"eski Memlûk beyleri (Osmanlı desteğiyle)"}], d:[{f:"1538-08-03",t:"1635-01-01",y:"savas"},{f:"1849-01-01",t:"1918-10-30",y:"savas"}] },
{ ad:"Aden", tur:"liman", lat:12.786, lon:45.019, g:1, k:3, m:"Sana", s:[{f:"1281-01-01",t:"1538-09-01",d:"yemen"},{f:"1635-01-01",t:"1839-01-19",d:"yemen"},{f:"1839-01-19",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1538-09-01",t:"1635-01-01",y:"savas"}] },
// Moha kaybı 1635-01-01 → 1635-10-22: TDV `yemen`, Mustafa Bey 10 Cemâziyelevvel
// 1045'te (22 Ekim 1635) kalan kuvvet ve silahlarla Moha'yı TAHLİYE etti. 294 gün.
// 1849-05-01 → 1849-01-01: gün UYDURMAYDI ve Baltalimanı Antlaşması'nın gerçek
// gününe çarpıyordu — Yemen sahilinin üç limanı Eflak-Boğdan antlaşmasının altında
// haritaya giriyordu (kullanıcının şikâyeti). TDV `yemen`/`hudeyde`/`zebid` üçü de
// yalnız YIL veriyor; uydurulmuş gün yerine bilinmediği yazıldı.
{ ad:"Moha", tur:"liman", lat:13.319, lon:43.250, g:0, k:4, m:"Sana", s:[{f:"1281-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-10-22",t:"1849-01-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1538-08-03",t:"1635-10-22"},{f:"1849-01-01",t:"1918-10-30"}] },
// Sana 1905: şehir beş ay elden çıktı ve haritada HİÇ yoktu — 1872-1918 kesintisiz
// Osmanlı görünüyordu. TDV `yemen`: 1905'te "şehri isyancılara teslim etmeye mecbur
// oldu"; geri alınış 1 Eylül 1905. Kaybın AYI `mutevekkil-alellah-yahya-hamiduddin`
// maddesinden geldi: İmam Yahyâ "1905 Nisanında" San'a'yı ele geçirdi.
// ⚠️ Nisan'ın GÜNÜ kaynaklarda yok — 04-01 ay hassasiyetidir, gün iddiası değil.
// 📌 Taiz bu dönemde DÜŞMEDİ: TDV, Ahmed Feyzi Paşa'nın "Taiz'deki kuvvetlerin
// desteğiyle" San'a'ya girdiğini söylüyor. Taiz kurtaran harekâtın üssü, kayıp değil.
{ ad:"Sana", tur:"sehir", lat:15.369, lon:44.191, g:1, k:2, s:[{f:"1281-01-01",t:"1547-01-01",d:"yemen"},{f:"1635-01-01",t:"1872-04-01",d:"yemen"},{f:"1905-04-01",t:"1905-09-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1547-01-01",t:"1635-01-01",y:"savas"},{f:"1872-04-01",t:"1905-04-01",y:"savas"},{f:"1905-09-01",t:"1918-10-30",y:"savas"}] },
// Taiz iki tarihi de düzeltildi (TDV `taiz`): fetih "Zilhicce 953'te (Şubat 1547)
// zaptedildi" → 1547-02-01 · kayıp "1038'de (1629) Yemen'deki hâkimiyetlerini
// San'a'daki Kāsımî yönetimine bıraktıkları için Taiz'i de terkettiler" → 1629.
// 🔴 Eskiden 1635-01-01'di, yani Sana/Zebîd/Moha ile AYNI gün: bölgesel çöküş
// veriye tek tarih olarak girmiş. Altı yıl sapma. (Aynı desenin dördüncü vakası;
// Moha'nınki 294 gün. Sana ve Zebîd için TDV ayrı tarih vermiyor, dokunulmadı.)
{ ad:"Taiz", tur:"sehir", lat:13.579, lon:44.022, g:0, k:3, m:"Sana", s:[{f:"1281-01-01",t:"1547-02-01",d:"yemen"},{f:"1629-01-01",t:"1872-04-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1547-02-01",t:"1629-01-01"},{f:"1872-04-01",t:"1918-10-30"}] },
{ ad:"Hudeyde", tur:"liman", lat:14.798, lon:42.954, g:0, k:3, m:"Sana", s:[{f:"1281-01-01",t:"1849-01-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1849-01-01",t:"1918-10-30"}] },
{ ad:"Ebha (Asir)", tur:"sehir", lat:18.216, lon:42.505, g:0, k:3, m:"Sana", s:[{f:"1281-01-01",t:"1871-01-01",d:"yemen"},{f:"1918-10-30",t:"1920-04-01",d:"aiz"},{f:"1920-04-01",t:"1923-10-29",d:"suud"}], d:[{f:"1871-01-01",t:"1918-10-30"}] },
// ---------------- MISIR VE SUDAN ----------------
// 1805: Kahire ulemâsının talebiyle Kavalalı Mehmed Ali vali oldu; Mısır o
// tarihten sonra hukuken Osmanlı, fiilen kendi hanedanının idaresindedir.
// Bu yüzden 1805'ten itibaren "tâbi" (açık ton) katmanda gösterilir.
{ ad:"Kahire", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.047, lon:31.243, g:2, k:2, s:[{f:"1281-01-01",t:"1517-02-15",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-02-15",t:"1805-07-03",y:"savas"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
{ ad:"İskenderiye", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.200, lon:29.919, g:1, k:3, m:"Kahire", s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
{ ad:"Dimyat", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.418, lon:31.814, g:0, k:3, m:"Kahire", s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
{ ad:"Asyut", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:27.181, lon:31.183, g:0, k:3, m:"Kahire", s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-04-13",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
{ ad:"Asvan", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:24.089, lon:32.899, g:0, k:3, m:"Kahire", s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-04-13",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
{ ad:"İbrim", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:22.658, lon:31.988, g:0, k:4, m:"Kahire", s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-04-13",t:"1805-07-03",y:"kusatma"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },
// Sudan hiçbir zaman doğrudan Bâbıâli'ye bağlanmadı: 1820-21'de Mehmed Ali'nin
// ordusu fethetti, Kahire'den yönetildi, 1885'te Mehdî ayaklanmasıyla kaybedildi.
{ ad:"Dongola", tur:"sehir", lat:19.169, lon:30.474, g:0, k:3, m:"Hartum", s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Hartum", tur:"sehir", lat:15.500, lon:32.559, g:1, k:2, s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Sennar", tur:"sehir", lat:13.551, lon:33.616, g:0, k:3, m:"Hartum", s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },
{ ad:"Kordofan (Ubeyyid)", tur:"sehir", lat:13.184, lon:30.218, g:0, k:3, m:"Hartum", s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], d:[],
    v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}] },
// 🔴 KIZILDENİZ'İN İKİ YAKASI: üç komşu kayıt tek satır gibi işlenmişti, oysa
// 1885'te ÜÇÜ ÜÇ AYRI YÖNE gitti. Kullanıcının "karşı kıyı neden farklı tonda"
// sorusunun cevabı buydu.
//   Masavva → İtalya   (TDV `masavva`: "5 Şubat 1885'te Masavva'a girdiler") ✓ doğruydu
//   Dahlak  → İtalya   ✓ doğruydu
//   Sevâkin → İNGİLTERE ama 1885'te DEĞİL — tarih Masavva'dan kopyalanmıştı
//
// Sevâkin: TDV `muhammed-ahmed-el-mehdi` — "1884 Şubatından itibaren SEVÂKİN
// DIŞINDAKİ bütün doğu bölgeleri Muhammed Ahmed'in hâkimiyetine geçti"; General
// Graham üç taburla Sevâkin'e geliyor. Yani Sevâkin Mehdî'ye düşmeyen TEK yerdir
// ve Şubat 1884'ten itibaren İngiliz askerî kontrolündedir.
// ⚠️ `habes-eyaleti` maddesi 1885'te idarenin Yemen vilâyetine bağlandığını
// söylüyor — ÇELİŞMİYOR, iki KATMAN: fiilî İngiliz, hukukî Osmanlı/Yemen.
// Bu projede harita FİİLÎYİ boyar (Zebîd 1517'de de böyle karar verildi), o
// yüzden 1884-02-01. Hukukî katman madde metnine düzyazı girer.
// ⚠️ "Şubat 1884" — TDV GÜN vermiyor; -02-01 ay hassasiyetidir, gün iddiası değil.
//
// 1865: TDV `masavva` — Hidiv İsmâil zamanında "Dehlek ve Sevâkin ile birlikte
// Mısır emlâkine dahil edilerek kaymakamlık statüsünde teşkilâtlandırıldı".
// 1846 sâlyâne (gelir tahsisi) DEĞİL 1865 (idarî ilhak) seçildi: harita idareyi
// boyar, geliri değil.
{ ad:"Sevâkin", tur:"liman", lat:19.106, lon:37.332, g:0, k:2, s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1884-02-01",t:"1923-10-29",d:"ingiltere"}], v:[{f:"1865-01-01",t:"1884-02-01",k:"Mısır (Kavalalı)"}], d:[{f:"1517-04-13",t:"1865-01-01",y:"ilhak"}] },
{ ad:"Masavva", tur:"liman", lat:15.6117, lon:39.4723, g:0, k:3, m:"Sevâkin", s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"italya"}], v:[{f:"1865-01-01",t:"1885-02-05",k:"Mısır (Kavalalı)"}], d:[{f:"1557-01-01",t:"1865-01-01",y:"ilhak"}] },
// ---------------- KUZEY AFRİKA ----------------
{ ad:"Trablus", tur:"liman", lat:32.897, lon:13.191, g:1, k:2, s:[{f:"1281-01-01",t:"1510-07-25",d:"hafsi"},{f:"1510-07-25",t:"1530-03-24",d:"ispanya"},{f:"1530-03-24",t:"1551-08-15",d:"sovalye"},{f:"1912-10-15",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1711-03-01",y:"kusatma"},{f:"1835-05-26",t:"1912-10-15"}], v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },
{ ad:"Misrata", tur:"sehir", lat:32.378, lon:15.092, g:0, k:3, m:"Trablus", s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },
{ ad:"Bingazi", tur:"liman", lat:32.117, lon:20.068, g:1, k:2, s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-15",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1711-03-01",y:"ilhak"},{f:"1835-05-26",t:"1912-10-15"}], v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },
{ ad:"Derne", tur:"liman", lat:32.766, lon:22.639, g:0, k:3, m:"Bingazi", s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },
{ ad:"Murzuk (Fizan)", tur:"bolge", lat:25.919, lon:13.919, g:0, k:2, s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}], d:[{f:"1577-01-01",t:"1711-03-01",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },
{ ad:"Tunus", tur:"liman", lat:36.800, lon:10.180, g:1, k:2, s:[{f:"1281-01-01",t:"1534-09-22",d:"hafsi"},{f:"1535-07-21",t:"1574-08-25",d:"ispanya"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1534-09-22",t:"1535-07-21",y:"savas"},{f:"1574-08-25",t:"1705-07-17",y:"savas"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },
{ ad:"Kayrevan", tur:"sehir", lat:35.678, lon:10.096, g:0, k:3, m:"Tunus", s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1705-07-17"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },
{ ad:"Gabes", tur:"liman", lat:33.881, lon:10.098, g:0, k:3, m:"Tunus", s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1705-07-17"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },
{ ad:"Cezayir", tur:"liman", lat:36.753, lon:3.059, g:1, k:2, s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1519-09-01",t:"1671-01-01",y:"antlasma"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"}] },
{ ad:"Konstantin", tur:"sehir", lat:36.365, lon:6.615, g:0, k:3, m:"Cezayir", s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1837-10-13",t:"1923-10-29",d:"fransa"}], d:[{f:"1519-09-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1837-10-13",k:"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"}] },
{ ad:"Oran", tur:"liman", lat:35.699, lon:-0.634, g:0, k:3, m:"Cezayir", s:[{f:"1281-01-01",t:"1509-05-17",d:"zeyyani"},{f:"1509-05-17",t:"1708-04-04",d:"ispanya"},{f:"1732-07-01",t:"1792-02-12",d:"ispanya"},{f:"1831-01-04",t:"1923-10-29",d:"fransa"}], d:[{f:"1708-04-04",t:"1732-07-01",y:"kusatma"},{f:"1792-02-12",t:"1831-01-04",y:"antlasma"}] },
{ ad:"Tilimsan", tur:"sehir", lat:34.882, lon:-1.315, g:0, k:3, m:"Cezayir", s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1552-01-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"}] },
// ---------------- YENİ OSMANLI YERLEŞİMLERİ (bölge yoğunlaştırma) ----------------
{ ad:"Batum", tur:"liman", lat:41.6439, lon:41.6420, g:1, k:3, m:"Trabzon", d:[{f:"1578-08-09",t:"1878-07-13",y:"savas"},{f:"1918-04-14",t:"1918-12-01",y:"antlasma"}],
    s:[{f:"1281-01-01",t:"1578-08-09",d:"gurcistan"},{f:"1878-07-13",t:"1918-04-14",d:"rusya"},{f:"1918-12-01",t:"1921-03-16",d:"gurcistan"},{f:"1921-03-16",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ahıska", tur:"kale", lat:41.643, lon:42.986, g:0, k:3, m:"Erzurum", d:[{f:"1578-08-01",t:"1829-09-14",y:"savas"}],
    s:[{f:"1281-01-01",t:"1578-08-01",d:"gurcistan"},{f:"1829-09-14",t:"1923-10-29",d:"rusya"}] },
{ ad:"Sayda", tur:"liman", lat:33.563, lon:35.369, g:0, k:3, m:"Şam", d:[{f:"1517-01-01",t:"1918-10-06"}],
    v:[{f:"1832-06-15",t:"1840-10-10",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1281-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-10-06",t:"1923-10-29",d:"fransa"}] },
{ ad:"Yafa", tur:"liman", lat:32.054, lon:34.755, g:0, k:3, m:"Kudüs", d:[{f:"1516-12-28",t:"1917-11-16"}],
    v:[{f:"1831-10-31",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1281-01-01",t:"1516-12-28",d:"memluk"},{f:"1917-11-16",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Nablus", tur:"sehir", lat:32.221, lon:35.254, g:0, k:3, m:"Kudüs", d:[{f:"1516-12-28",t:"1918-09-21"}],
    v:[{f:"1831-11-08",t:"1841-02-25",k:"Mısır (İbrâhim Paşa)"}],
    s:[{f:"1281-01-01",t:"1516-12-28",d:"memluk"},{f:"1918-09-21",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Amman", tur:"sehir", lat:31.949, lon:35.933, g:0, k:4, m:"Şam", d:[{f:"1516-12-28",t:"1918-09-25"}],
    s:[{f:"1281-01-01",t:"1516-12-28",d:"memluk"},{f:"1918-09-25",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Kerak", tur:"kale", lat:31.181, lon:35.703, g:0, k:4, m:"Kudüs", d:[{f:"1517-01-01",t:"1918-01-01"}],
    s:[{f:"1281-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Rakka", tur:"sehir", lat:35.953, lon:39.008, g:0, k:3, m:"Diyarbakır", d:[{f:"1516-08-28",t:"1918-10-26"}],
    s:[{f:"1281-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}] },
{ ad:"Deyrizor", tur:"sehir", lat:35.336, lon:40.141, g:0, k:4, m:"Halep", d:[{f:"1516-08-28",t:"1918-10-26"}],
    s:[{f:"1281-01-01",t:"1516-08-28",d:"memluk"},{f:"1918-10-26",t:"1923-10-29",d:"fransa"}] },
{ ad:"Süveyş", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:29.974, lon:32.548, g:0, k:4, m:"Kahire", d:[{f:"1517-01-22",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}],
    s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Sfaks", tur:"liman", lat:34.740, lon:10.760, g:0, k:4, m:"Tunus", d:[{f:"1574-08-25",t:"1705-07-17"}],
    s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },
{ ad:"Annaba", tur:"liman", lat:36.900, lon:7.766, g:0, k:4, m:"Cezayir", d:[{f:"1534-09-22",t:"1671-01-01"}],
    s:[{f:"1281-01-01",t:"1535-01-01",d:"zeyyani"},{f:"1832-03-01",t:"1923-10-29",d:"fransa"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1832-03-01",k:"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"}] },
{ ad:"Bicâye", tur:"liman", lat:36.751, lon:5.056, g:0, k:4, m:"Cezayir", d:[{f:"1555-09-27",t:"1671-01-01"}],
    s:[{f:"1281-01-01",t:"1510-01-01",d:"zeyyani"},{f:"1510-01-01",t:"1555-09-27",d:"ispanya"},{f:"1833-09-29",t:"1923-10-29",d:"fransa"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1833-09-29",k:"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"}] },
{ ad:"Zeyla", tur:"liman", lat:11.355, lon:43.473, g:0, k:3, m:"Sevâkin", d:[{f:"1559-01-01",t:"1884-01-01",y:"ilhak"}],
    s:[{f:"1281-01-01",t:"1559-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Hacıbey (Odessa)", tur:"kale", lat:46.485, lon:30.733, g:0, k:3, m:"Silistre", d:[{f:"1538-09-01",t:"1792-01-09"}],
    s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1538-09-01",d:"kirim"},{f:"1792-01-09",t:"1923-10-29",d:"rusya"}] },
// ---------------- KOMŞULAR (petek sınırını belirler; s = alanın yabancı sahipleri) ----------------
{ ad:"Viyana", tur:"sehir", lat:48.208, lon:16.373, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Graz", tur:"sehir", lat:47.071, lon:15.439, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Zagreb", tur:"sehir", lat:45.815, lon:15.982, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },
{ ad:"Ljubljana", tur:"sehir", lat:46.056, lon:14.506, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1335-05-02",d:"almanya"},{f:"1335-05-02",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}] },
{ ad:"Bratislava", tur:"sehir", lat:48.146, lon:17.107, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}] },
{ ad:"Krakov", tur:"sehir", lat:50.065, lon:19.945, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}] },
{ ad:"Lvov", tur:"sehir", lat:49.840, lon:24.030, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}] },
{ ad:"Kiev", tur:"sehir", lat:50.451, lon:30.524, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1667-02-09",d:"lehistan"},{f:"1667-02-09",t:"1923-10-29",d:"rusya"}] },
{ ad:"Harkov", tur:"sehir", lat:49.994, lon:36.231, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1654-01-01",d:"kirim"},{f:"1654-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Voronej", tur:"sehir", lat:51.672, lon:39.184, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1585-01-01",d:"kirim"},{f:"1585-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Astrahan", tur:"sehir", lat:46.348, lon:48.033, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Venedik", tur:"liman", lat:45.4409, lon:12.3188, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
{ ad:"Roma", tur:"sehir", lat:41.903, lon:12.496, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1870-09-20",d:"papalik"},{f:"1870-09-20",t:"1923-10-29",d:"italya"}] },
{ ad:"Napoli", tur:"liman", lat:40.852, lon:14.268, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Palermo", tur:"liman", lat:38.116, lon:13.361, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Malta", tur:"kale", lat:35.899, lon:14.514, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1530-03-24",d:"napoli"},{f:"1530-03-24",t:"1798-06-12",d:"sovalye"},{f:"1798-06-12",t:"1800-09-05",d:"fransa"},{f:"1800-09-05",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Fas (Fez)", tur:"sehir", lat:34.034, lon:-5.000, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Merakeş", tur:"sehir", lat:31.630, lon:-7.981, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Isfahan", tur:"sehir", lat:32.654, lon:51.668, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1503-01-01",d:"iran"},{f:"1503-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Erdebil", tur:"sehir", lat:38.249, lon:48.294, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Meşhed", tur:"sehir", lat:36.297, lon:59.606, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1510-12-02",d:"iran"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Riyad", tur:"sehir", lat:24.713, lon:46.675, g:0, k:0, d:[], v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}] },
{ ad:"Maskat", tur:"liman", lat:23.588, lon:58.408, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1507-01-01",d:"umman"},{f:"1507-01-01",t:"1650-01-26",d:"portekiz"},{f:"1650-01-26",t:"1923-10-29",d:"umman"}] },
{ ad:"Gondar", tur:"sehir", lat:12.603, lon:37.466, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Addis", tur:"sehir", lat:9.030, lon:38.740, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Ndjamena", tur:"sehir", lat:12.107, lon:15.045, g:0, k:0, d:[] },
{ ad:"Agadez", tur:"sehir", lat:16.973, lon:7.991, g:0, k:0, d:[] },
{ ad:"Tamanrasset", tur:"sehir", lat:22.785, lon:5.523, g:0, k:0, d:[] },
{ ad:"Timbuktu", tur:"sehir", lat:16.775, lon:-3.009, g:0, k:0, d:[] },
// ---- BATI AVRUPA ----
{ ad:"Londra", tur:"sehir", lat:51.507, lon:-0.128, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Dublin", tur:"sehir", lat:53.350, lon:-6.260, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Edinburg", tur:"sehir", lat:55.953, lon:-3.189, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Paris", tur:"sehir", lat:48.857, lon:2.352, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Lyon", tur:"sehir", lat:45.760, lon:4.836, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Marsilya", tur:"liman", lat:43.297, lon:5.370, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Bordo", tur:"liman", lat:44.838, lon:-0.579, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fransa"}] },
{ ad:"Amsterdam", tur:"liman", lat:52.373, lon:4.893, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Lizbon", tur:"liman", lat:38.722, lon:-9.139, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Porto", tur:"liman", lat:41.150, lon:-8.611, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Madrid", tur:"sehir", lat:40.417, lon:-3.704, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Sevilla", tur:"sehir", lat:37.389, lon:-5.984, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Granada", tur:"sehir", lat:37.177, lon:-3.599, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1492-01-02",d:"granada"},{f:"1492-01-02",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Barselona", tur:"liman", lat:41.387, lon:2.170, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Valensiya", tur:"liman", lat:39.470, lon:-0.377, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Milano", tur:"sehir", lat:45.464, lon:9.190, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1535-11-01",d:"milanoduka"},{f:"1535-11-01",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1859-06-04",d:"avusturya"},{f:"1859-06-04",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Floransa", tur:"sehir", lat:43.769, lon:11.256, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-03-17",d:"toskana"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Torino", tur:"sehir", lat:45.070, lon:7.687, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Cenova", tur:"liman", lat:44.4087, lon:8.9347, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-06-14",d:"ceneviz"},{f:"1797-06-14",t:"1815-06-09",d:"fransa"},{f:"1815-06-09",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// ---- ORTA AVRUPA / ALMANYA ----
{ ad:"Berlin", tur:"sehir", lat:52.520, lon:13.405, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Hamburg", tur:"liman", lat:53.551, lon:9.994, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Münih", tur:"sehir", lat:48.137, lon:11.575, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Frankfurt", tur:"sehir", lat:50.110, lon:8.682, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Köln", tur:"sehir", lat:50.938, lon:6.960, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Dresden", tur:"sehir", lat:51.050, lon:13.738, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Prag", tur:"sehir", lat:50.088, lon:14.421, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}] },
// ---- KUZEY AVRUPA / BALTIK ----
{ ad:"Stokholm", tur:"liman", lat:59.3268, lon:18.0689, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Kopenhag", tur:"liman", lat:55.6782, lon:12.5656, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Oslo", tur:"liman", lat:59.913, lon:10.752, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Helsinki", tur:"liman", lat:60.170, lon:24.938, g:0, k:0, kur:"1550-06-12", d:[], s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Riga", tur:"liman", lat:56.949, lon:24.105, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-11-11",d:"rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}] },
{ ad:"Königsberg", tur:"liman", lat:54.710, lon:20.512, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Gdansk", tur:"liman", lat:54.352, lon:18.646, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1466-10-19",d:"almanya"},{f:"1466-10-19",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1918-11-11",d:"almanya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}] },
{ ad:"Poznan", tur:"sehir", lat:52.409, lon:16.932, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1918-12-27",d:"almanya"},{f:"1918-12-27",t:"1923-10-29",d:"polonya"}] },
{ ad:"Varşova", tur:"sehir", lat:52.230, lon:21.011, g:0, k:0, d:[], s:[{f:"1806-11-28",t:"1815-06-09",d:"lehistan"}, {f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1806-11-28",d:"almanya"},{f:"1815-06-09",t:"1918-11-11",d:"rusya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}] },
{ ad:"Vilnius", tur:"sehir", lat:54.687, lon:25.280, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1795-10-24",d:"lehistan"},{f:"1795-10-24",t:"1918-02-16",d:"rusya"},{f:"1918-02-16",t:"1923-10-29",d:"litvanya"}] },
{ ad:"Minsk", tur:"sehir", lat:53.904, lon:27.561, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}] },
// ---- RUSYA (Ural batısı) ----
{ ad:"Moskova", tur:"sehir", lat:55.756, lon:37.617, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Novgorod", tur:"sehir", lat:58.521, lon:31.271, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"St. Petersburg", tur:"liman", lat:59.934, lon:30.335, g:0, k:0, kur:"1703-05-27", d:[], s:[{f:"1281-01-01",t:"1617-02-27",d:"rusya"},{f:"1617-02-27",t:"1703-05-27",d:"isvec"},{f:"1703-05-27",t:"1923-10-29",d:"rusya"}] },
{ ad:"Smolensk", tur:"sehir", lat:54.783, lon:32.045, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1514-08-01",d:"lehistan"},{f:"1514-08-01",t:"1611-06-13",d:"rusya"},{f:"1611-06-13",t:"1654-10-03",d:"lehistan"},{f:"1654-10-03",t:"1923-10-29",d:"rusya"}] },
{ ad:"Tula", tur:"sehir", lat:54.193, lon:37.617, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Nijniy Novgorod", tur:"sehir", lat:56.296, lon:43.936, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Vologda", tur:"sehir", lat:59.220, lon:39.891, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kazan", tur:"sehir", lat:55.796, lon:49.106, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ufa", tur:"sehir", lat:54.738, lon:55.972, g:0, k:0, kur:"1574-01-01", d:[], s:[{f:"1281-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1923-10-29",d:"rusya"}] },
{ ad:"Perm", tur:"sehir", lat:58.010, lon:56.229, g:0, k:0, kur:"1723-01-01", d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Saratov", tur:"sehir", lat:51.533, lon:46.034, g:0, k:0, kur:"1590-07-12", d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Tsaritsyn", tur:"sehir", lat:48.708, lon:44.514, g:0, k:0, kur:"1589-07-02", d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Rostov (Don)", tur:"sehir", lat:47.236, lon:39.712, g:0, k:0, kur:"1749-12-15", d:[], s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1739-09-18",d:"kirim"},{f:"1739-09-18",t:"1923-10-29",d:"rusya"}] },
{ ad:"Poltava", tur:"sehir", lat:49.589, lon:34.551, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1654-01-18",d:"lehistan"},{f:"1654-01-18",t:"1923-10-29",d:"rusya"}] },
// ---- KAFKASYA EK ----
{ ad:"Kutaisi", tur:"sehir", lat:42.268, lon:42.695, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1810-02-20",d:"gurcistan"},{f:"1810-02-20",t:"1923-10-29",d:"rusya"}] },
{ ad:"Vladikavkaz", tur:"kale", lat:43.024, lon:44.682, g:0, k:0, kur:"1784-01-01", kasitli_bosluk:true, d:[], s:[{f:"1784-01-01",t:"1923-10-29",d:"rusya"}] },
// ---- İRAN EK ----
{ ad:"Şiraz", tur:"sehir", lat:29.591, lon:52.584, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Kazvin", tur:"sehir", lat:36.269, lon:50.004, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1503-01-01",d:"iran"},{f:"1503-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Kum", tur:"sehir", lat:34.640, lon:50.876, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1503-01-01",d:"iran"},{f:"1503-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Zencan", tur:"sehir", lat:36.673, lon:48.478, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Urmiye", tur:"sehir", lat:37.553, lon:45.076, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Reşt", tur:"sehir", lat:37.281, lon:49.583, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1501-07-01",d:"iran"},{f:"1501-07-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
// ---- ARABİSTAN EK ----
{ ad:"Hâil", tur:"sehir", lat:27.521, lon:41.691, g:0, k:0, d:[], s:[{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },
// Kuveyt kurulduğu 1716'dan 1871'e kadar haritada sahipsizdi: Basra ile Lahsa
// arasında 155 yıllık bir delik. TDV KUVEYT: iskeleyi Necid'den gelen Utûb
// kabilesi 18. yüzyıl başında kurdu, Sabah ailesi yüzyıl sonlarına doğru
// idareyi devraldı, 1871'den itibaren Basra sancağının kazâsı sayıldı.
// Kırılma tarihleri kasten mevcut olanlara oturtuldu (1795: Lahsa'nın
// Suûdîlere geçişi) ki uydurma bir gün hassasiyeti doğmasın.
// ---------------------------------------------------------------------------
// ⚠️ `kasitli_bosluk:` — MOTORUN GÖREMEDİĞİ KAYNAKLI HÜKÜM (31 Tem 2026)
// ---------------------------------------------------------------------------
// Motor bir peteğin "çevresinin ≥%90'ı SAHİPLİ mi" diye sorabiliyor, ama
// "o toprak YÖNETİLİYOR muydu" diye soramıyor. Alan tam o boşluğu taşıyor:
// true ise `kur:` öncesi boşluk KASITLIDIR ve komşuya devredilmez.
// ⚠️ Alan YOKSA varsayılan FALSE — yani sessizlik "kasıtlı değil" demek,
//    "bilinmiyor" değil. Bilinmiyorsa yazılmaz, ölçüt karar verir.
//
// 🔴 İKİ SINIF VAR VE KARIŞTIRILMAMALI:
//
// (1) KAYNAKLI HÜKÜM — alanın asıl amacı
//     Cetinje   TDV `karadag`: Karadağ dağlık kesimi "göçebe kabilelerin
//               oluşturduğu GEVŞEK KONFEDERASYON"; ovadaki Podgorica XVIII.
//               yy'da hâlâ dağa karşı altı tabyayla tahkim ediliyor.
//               ⇒ ölçüt %94,5 kuşatılmışlık görüyor ama o oran OVADAN geliyor.
//     Kuveyt · Doha · Abu Dabi   ARABİSTAN (A5): körfez kıyısında 18. yy
//               öncesi yerleşik devlet idaresi yok. Ölçüt de bırakıyor
//               (çevre-sahiplik %45,2 ve %49,4) — yani burada kaynak ile
//               ölçüt AYNI yöne bakıyor, alan yalnız kaydı sabitliyor.
//               ⚠️ Abu Dabi'nin hükmü "kanıt YOKLUĞUNA dayanıyor, yokluk
//               kanıtına değil" (A5'in kendi ifadesi) — TDV `ebuzabi` 1761
//               öncesini hiç anlatmıyor.
//
// (2) 🟡 GEÇİCİ — KAYNAK BEKLENİYOR, kaynaklı hüküm DEĞİL
//     Vladikavkaz · Yeni Ürgenç   ARAŞTIRMA DOĞU'ya soruldu, cevap gelmedi.
//     Kaynak yokken devretmemek muhafazakâr taraf: yanlış renk ("biliyoruz"
//     der) boşluktan ("bilmiyoruz" der) kötüdür.
//     🔴 CEVAP GELİNCE BU İKİSİ YA `false` YAPILIR YA SİLİNİR.
//     Yeni Ürgenç'in sorusu özel: şehir Ceyhun'un yatak değiştirmesi üzerine
//     kuruldu (kur:1646). Soru "Hîve orayı yönetiyor muydu" değil — "1646'dan
//     önce o NOKTA sulanan vahanın içinde miydi, yoksa çöl müydü". Çölse
//     boşluk doğru ve bölgeyi kimin yönettiği bunu değiştirmez.
// ---------------------------------------------------------------------------
{ ad:"Kuveyt", tur:"liman", lat:29.376, lon:47.977, g:0, k:3, m:"Basra", kur:"1716-01-01", kasitli_bosluk:true, d:[],
    v:[{f:"1795-04-01",t:"1871-01-01",k:"Sabah emirliği (Osmanlı himayesinde)"},
       {f:"1871-01-01",t:"1914-11-22",k:"Sabah emirliği (Osmanlı kazâsı)"}],
    // 1914-11-22: TDV `kuveyt` — İngiltere, Basra'yı ele geçirince (22 Kasım 1914)
    // Küveyt'in kendi himayesinde olduğunu ilân etti. Eskiden 1914-11-05 yazıyordu.
    // Belirleyici olan yalnız kaynak değil YAPI: Basra da 1914-11-22 taşıyor ve TDV
    // ikisini AYNI olaya bağlıyor — aynı tarih verilince tek kırılmada dönerler ve
    // mevcut Basra maddesi ikisini birden karşılar (Değişmez 2 kendiliğinden kapanır).
    // ⚠️ 3 Kasım 1914 (İngiltere'nin himaye ilânı) TDV DIŞI literatürde var; madde
    // metnine düzyazı olarak girer, tarih alanına DEĞİL.
    s:[{f:"1716-01-01",t:"1795-04-01",d:"benihalid"},{f:"1914-11-22",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Manama (Bahreyn)", tur:"liman", lat:26.228, lon:50.586, g:0, k:0, d:[], s:[{f:"1861-05-31",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Doha (Katar)", tur:"liman", lat:25.285, lon:51.531, g:0, k:3, m:"Basra", kur:"1825-01-01", kasitli_bosluk:true, d:[],
    // 1871-09-20: madde (ek5:346) "Sonbahar 1871" diyor, kayıt 1871-01-01'di —
    // 262 gün fark, yani madde kırılmasız görünüyordu. TDV `katar` sonbaharı
    // doğruluyor; madde ile kayıt aynı güne çekildi, Değişmez 2 kapandı.
    v:[{f:"1871-09-20",t:"1913-07-29",k:"Sânî emirliği (Osmanlı kazâsı)"}],
    // Değişmez 1b'nin tek boşluğuydu: 1913-07-29 → 1916-11-03, 1193 gün sahipsiz.
    // 29 Temmuz 1913 Osmanlı-İngiliz mukavelesi Osmanlı'nın Katar'dan çekilmesini
    // kararlaştırdı; 3 Kasım 1916 İngiliz-Katar antlaşması himayeyi kurdu. Arada
    // Katar ne Osmanlı ne İngiliz idaresindeydi — Âl Sânî şeyhliği kendi başınaydı.
    // Boşluk bırakmak "burada kimse yoktu" der; oysa şeyhlik oradaydı.
    s:[{f:"1913-07-29",t:"1916-11-03",d:"katar"},
       {f:"1916-11-03",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Abu Dabi", tur:"liman", lat:24.454, lon:54.397, g:0, k:0, kur:"1761-01-01", kasitli_bosluk:true, d:[], s:[{f:"1820-01-08",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Nizva", tur:"sehir", lat:22.933, lon:57.533, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"umman"}] },
{ ad:"Salala", tur:"liman", lat:17.020, lon:54.090, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"umman"}] },
{ ad:"Mukalla", tur:"liman", lat:14.5329, lon:49.1248, g:0, k:0, d:[], s:[{f:"1888-01-01",t:"1923-10-29",d:"ingiltere"}] },
// ---- AFRİKA BOYNUZU ----
{ ad:"Berbera", tur:"liman", lat:10.440, lon:45.014, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Mogadişu", tur:"liman", lat:2.037, lon:45.342, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}] },
{ ad:"Harar", tur:"sehir", lat:9.312, lon:42.118, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1923-10-29",d:"habesistan"}] },
{ ad:"Asmara", tur:"sehir", lat:15.339, lon:38.932, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}] },
// ---- FAS EK ----
{ ad:"Rabat", tur:"liman", lat:34.021, lon:-6.841, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fas"}] },
{ ad:"Tanca", tur:"liman", lat:35.777, lon:-5.804, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1471-08-28",d:"fas"},{f:"1471-08-28",t:"1661-01-23",d:"portekiz"},{f:"1661-01-23",t:"1684-02-05",d:"ingiltere"},{f:"1684-02-05",t:"1923-10-29",d:"fas"}] },
{ ad:"Agadir", tur:"liman", lat:30.428, lon:-9.598, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"fas"}] },
// ---- KARADAĞ ----
{ ad:"Cetinje", tur:"sehir", lat:42.391, lon:18.914, g:0, k:4, m:"İşkodra", kur:"1482-01-01", kasitli_bosluk:true,
    s:[{f:"1697-01-01",t:"1923-10-29",d:"karadag"}], d:[{f:"1499-01-01",t:"1697-01-01"}],
    v:[{f:"1482-01-01",t:"1499-01-01",k:"Crnojeviç Zetası (Osmanlı tâbii)"}] },
// ---- SAHİPSİZ BÖLGE NOKTALARI ----
// Çöl ve bozkırda yerleşim seyrektir; nokta koymazsak komşu peteği yüzlerce
// kilometre uzanır ya da yarıçap sınırı yüzünden "baloncuk" oluşur. Bu noktalar
// hiçbir zaman Osmanlı sayılmaz, yalnızca peteklerin nerede biteceğini belirler.
{ ad:"Nefud çölü", tur:"bolge", lat:28.30, lon:41.00, g:0, k:0, d:[], v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1836-01-01",d:"suud"},{f:"1836-01-01",t:"1921-11-02",d:"sammar"},{f:"1921-11-02",t:"1923-10-29",d:"suud"}] },
{ ad:"Rub'ul Hâlî kuzeyi", tur:"bolge", lat:22.50, lon:47.00, g:0, k:0, d:[] },
{ ad:"Rub'ul Hâlî doğusu", tur:"bolge", lat:20.00, lon:52.00, g:0, k:0, d:[] },
{ ad:"Necid içi", tur:"bolge", lat:25.50, lon:44.50, g:0, k:0, d:[], v:[{f:"1818-09-09",t:"1824-06-01",k:"Mısır (İbrâhim Paşa)"}], s:[{f:"1744-01-01",t:"1818-09-09",d:"suud"},{f:"1824-06-01",t:"1891-01-01",d:"suud"},{f:"1891-01-01",t:"1902-01-15",d:"sammar"},{f:"1902-01-15",t:"1923-10-29",d:"suud"}] },
{ ad:"Hadramut", tur:"bolge", lat:15.50, lon:48.50, g:0, k:0, d:[] },
// m:"Kahire" EKLENDİ — kara-kısıtlı Voronoi prototipi bu bölgeyi Tebük'e (m:"Medine",
// yani Hicaz) vermek istedi. Geometrik olarak savunulabilir, TARİHEN YANLIŞ: Sinâ
// Osmanlı'da Mısır eyaletine bağlıydı ve 1906 Taba krizine kadar Kahire'den idare
// edildi. Aynı yarımadadaki Tûr (Sînâ) zaten m:"Kahire" taşıyor; komşusunu Medine'ye
// vermek kendi içinde çelişki olurdu.
// Oturum 16'nın "geometri karar veremez" tespitinin tam örneği — bu bir petek kararı
// değil, bir İDARE kararı. Motora özel durum yazmak yerine veri açık hâle getirildi.
{ ad:"Sina güneyi", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"}], tur:"bolge", lat:28.50, lon:33.80, g:0, k:0, m:"Kahire", s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-01-22",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1867-06-08",k:"Mısır valiliği (Kavalalı hanedanı)"},{f:"1867-06-08",t:"1914-12-18",k:"Mısır Hidivliği"}] },
{ ad:"Batı çölü (Mısır)", tur:"bolge", lat:26.50, lon:27.00, g:0, k:0, d:[] },
{ ad:"Nûbe çölü", tur:"bolge", lat:20.50, lon:33.50, g:0, k:0, d:[] },
// 🔴 md.40'IN AÇIK BORCU KAPANIYOR — üç KASTEN SAHİPSİZ dolgu noktası.
// Oturum 14 dört vahayı (Hârice · Dâhile · Ferâfire · Bahriye) ekledi ve asimetri
// kapandı, AMA kendi ölçümüyle bir borç doğdu: dört vahanın peteği 260.114 km²,
// yani Batı çölü boşluğunun %61'i artık MISIR boyanıyor. Bu, Büyük Kum Denizi ve
// Gilf el-Kebîr'i Mısır idaresi gibi göstermek demek — tarihen fazla iddialı.
// Osmanlı/Mısır idaresi vahalara ulaşıyordu, kum denizlerine ULAŞMIYORDU.
// Bu üç nokta o kum denizlerini geri oyuyor: vahalar sahipli kalıyor, aradaki çöl
// boşalıyor. Hiçbir dönemi yok — kasten sahipsiz (CLAUDE.md, Değişmez 1 muafiyeti).
// ⚠️ BEKLENEN_SAHIPSIZ 40 → 43 (Oturum 2'ye bildirildi).
{ ad:"Ramletü'l-kübrâ (Büyük Kum Denizi)", tur:"bolge", lat:26.50, lon:26.00, g:0, k:0, d:[] },
{ ad:"Gilf el-Kebîr", tur:"bolge", lat:23.50, lon:26.00, g:0, k:0, d:[] },
{ ad:"Selîme (Nûbe çölü batısı)", tur:"bolge", lat:21.50, lon:29.30, g:0, k:0, d:[] },
{ ad:"Kordofan", tur:"bolge", lat:13.00, lon:29.50, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-07",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}], v:[{f:"1821-08-19",t:"1882-09-07",k:"Mısır (Kavalalı)"}] },
{ ad:"Darfur", tur:"bolge", lat:13.50, lon:24.00, g:0, k:0, d:[] },
{ ad:"Tibesti", tur:"bolge", lat:21.00, lon:17.50, g:0, k:0, d:[] },
{ ad:"Fizan güneyi", tur:"bolge", lat:23.00, lon:14.00, g:0, k:0, d:[] },
{ ad:"Büyük Doğu Ergi", tur:"bolge", lat:29.50, lon:7.50, g:0, k:0, d:[] },
{ ad:"Hoggar", tur:"bolge", lat:24.00, lon:3.00, g:0, k:0, d:[] },
{ ad:"Sahra batısı", tur:"bolge", lat:27.00, lon:-4.00, g:0, k:0, d:[] },
{ ad:"Sirte iç çölü", tur:"bolge", lat:28.50, lon:18.50, g:0, k:0, d:[] },
// ⚠️ DEŞT-İ KIPÇAK 1441'DE DEĞİL 1502'DE KIRIM'A GEÇER — 61 yıllık hata düzeltildi.
// Kullanıcı 1476-02-01'de dört ekran görüntüsü gönderip "bu bölgede Kırım
// Hanlığı var mıydı, nerede başlayıp nerede bitiyordu" diye sordu; gördüğü üç
// dev "KIRIM HANLIĞI BOZKIRI" alanının tamamı BU TEK KAYITTAN geliyordu.
// TDV `altin-orda-hanligi`: "1241-1502 Deştikıpçak'ta hüküm süren". Kırım
// Hanlığı Altın Orda'dan ayrı ve ondan ÖNCE kurulmuş bir devlettir; bozkırı
// devralması Büyük Orda'nın yıkılışıyladır.
// 📌 Ve tarih kronolojide ZATEN yazılı: `1502-03-01 "Altın Orda Hanlığı'nın
// yıkılışı ve Kırım'ın yükselişi"`. Eski sınır olan 1441'in ise HİÇBİR maddesi
// yoktu — yani kaynaksız bir tarih, kaynaklı bir maddenin yerini tutuyordu.
// (Ölçüm: VERİ ORTASYA, TDV'den; slug `kirim-hanligi` ÖLÜ, `altin-orda-hanligi` canlı.)
// 🟡 1502 SONRASI `kirim` bırakıldı: bozkırın Kırım'da mı Nogay'da mı olduğu
// kaynakla ayrılamadı, ORTASYA dokunmadı ve haklıydı.
{ ad:"Bozkır (Deşt-i Kıpçak)", tur:"bolge", lat:48.50, lon:42.00, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1502-03-01",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}] },
{ ad:"Kalmuk bozkırı", tur:"bolge", lat:46.50, lon:45.50, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Ural eteği", tur:"bolge", lat:51.00, lon:52.00, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1556-01-01",d:"altinorda"},{f:"1556-01-01",t:"1923-10-29",d:"rusya"}] },
{ ad:"Zagros içi", tur:"bolge", lat:31.50, lon:50.50, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Kirman", tur:"sehir", lat:30.28, lon:57.08, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1510-12-02",d:"iran"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Yezd", tur:"sehir", lat:31.90, lon:54.37, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Tahran", tur:"sehir", lat:35.69, lon:51.39, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1503-01-01",d:"iran"},{f:"1503-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Tebbes", tur:"bolge", lat:33.60, lon:56.90, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1510-12-02",d:"iran"},{f:"1510-12-02",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Karakum", tur:"bolge", lat:39.50, lon:58.50, g:0, k:0, d:[] },
{ ad:"Somali çölü", tur:"bolge", lat:8.00, lon:46.50, g:0, k:0, d:[] },
{ ad:"Ogaden", tur:"bolge", lat:7.20, lon:44.00, g:0, k:0, d:[] },

// ---- TR-Wikipedia kronoloji karşılaştırmasıyla eklenen yerleşimler (parti 5) ----
// Macaristan / Erdel cephesi
{ ad:"İstolni Belgrad", tur:"kale", lat:47.190, lon:18.411, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1543-08-10",d:"macaristan"},{f:"1688-05-19",t:"1923-10-29",d:"avusturya"}], d:[{f:"1543-08-10",t:"1688-05-19",y:"kusatma"}] },
{ ad:"Peşte", tur:"sehir", lat:47.494, lon:19.060, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1686-09-02",t:"1923-10-29",d:"avusturya"}], v:[{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)"}], d:[{f:"1541-08-29",t:"1686-09-02"}] },
{ ad:"Yanıkkale (Győr)", tur:"kale", lat:47.685, lon:17.635, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1594-09-27",d:"macaristan"},{f:"1598-03-29",t:"1923-10-29",d:"avusturya"}], d:[{f:"1594-09-27",t:"1598-03-29",y:"kusatma"}] },
// hatalar 6.docx madde 6 ve 7 — kullanıcı: "Yanovanın fethi maddesi ile
// macaristandaki içeri girinti yapan koridorun dibindeki parça fethedilmiş, bu
// tarihe kadar orası fethedilmemiş durumda mıydı yoksa önce ele geçirilip sonra
// mı elden çıkmıştı... haritadaki girinti yapısı doğru mu" ve aynı soru Varad
// için. TEYİD SONUCU — iki parçalı cevap:
//   (a) HAYIR, daha önce fethedilip elden çıkmamıştı: ikisi de ilk defa
//       1658 ve 1660'ta Osmanlı idaresine girdi.
//   (b) AMA haritadaki girinti YANLIŞTI. İki kale 1281'den fetihlerine kadar
//       "macaristan" (Habsburg/Kral Macaristanı) boyanıyordu; oysa Varad ile
//       Yanova 1541'den itibaren ERDEL PRENSLİĞİ'nin toprağıydı ve Erdel bu
//       haritada Osmanlı TÂBİİ (açık ton) olarak çiziliyor. Yani Osmanlı
//       nüfuz alanının ortasına, olmayan bir Habsburg kaması sokulmuş
//       durumdaydı — kullanıcının gördüğü "girinti" tam olarak buydu.
//       Varad'ın m: alanı zaten "Erdel (Kaloşvar)"dı; sahiplik zinciri
//       merkeziyle çelişiyordu (Değişmez 3).
// Zincir artık Erdel (Kaloşvar) kaydının birebir aynısı: 1281-1526 macaristan,
// 1526-09-01 Zapolya vasal krallığı, 1541-08-29 Erdel Prensliği, sonra fetih.
// İki tarih de mevcut kırılma günü olduğu için YENİ kırılma üretilmedi.
{ ad:"Varad (Oradea)", tur:"kale", lat:47.053, lon:21.941, g:0, k:3, m:"Erdel (Kaloşvar)", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1692-06-05",t:"1923-10-29",d:"avusturya"}], v:[{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)"},{f:"1541-08-29",t:"1660-08-27",k:"Erdel Prensliği"}], d:[{f:"1660-08-27",t:"1692-06-05",y:"kusatma"}] },
// Varad kaydındaki gerekçenin aynısı (hatalar 6.docx madde 6). Yanova 1658'de
// Erdel seferi sırasında II. Rákóczi György'nin cezalandırılması üzerine
// Erdel'den koparılıp Osmanlı'ya bağlandı; öncesinde Habsburg değil Erdel
// toprağıydı.
{ ad:"Yanova (Ineu)", tur:"kale", lat:46.426, lon:21.741, g:0, k:4, m:"Temeşvar", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1693-01-01",t:"1923-10-29",d:"avusturya"}], v:[{f:"1526-09-01",t:"1541-08-29",k:"Macaristan (Zapolya vasal krallığı)"},{f:"1541-08-29",t:"1658-08-27",k:"Erdel Prensliği"}], d:[{f:"1658-08-27",t:"1693-01-01",y:"kusatma"}] },

// Tuna deltası ve Karadeniz kuzeyi
// 🔴 HAYALET BÖLÜNME DÜZELTMESİ (Oturum 11'in ölçümü, hatalar 14 md.2 + hatalar 15 md.9/16/20)
// Bender ve Hotin, Boğdan 1456'da haraca bağlandıktan SONRA da `s:"bogdan"` taşıyordu;
// Boğdan'ın gerisi ise `v:` idi. Sonuç: harita Boğdan'ı AYNI ADI TAŞIYAN İKİ AYRI GÖVDE
// olarak çiziyordu — soluk Osmanlı-vasalı çekirdek + ayrı bir YEŞİL (#6b9e8a) "Boğdan
// Voyvodalığı" devleti, 3.807 derece². O yeşil kama tam olarak vasal çekirdek ile
// Akkirman'ın arasına giriyordu.
// Kullanıcının dört ayrı şikâyeti bunun tek kusurun yüzleriydi: "Boğdan ile Akkerman
// arasında boş bölge / enklav" · "Hotin yeşil kalmış" · "Hotin hep tek başına görünüyor".
// CLAUDE.md §3.5 hayalet-bölünme sınıfı — HİÇBİR DEĞİŞMEZ BUNU GÖREMEZ, çünkü her nokta
// bir sahibi olan geçerli bir dönem taşıyor; yanlış olan sahibin KİM olduğu.
// TDV `bogdan`: Petru Aron Eylül 1455'ten itibaren haraç ödüyor. 1456-06-01'de
// "Boğdan'ın haraca bağlanışı" maddesi zaten var → yeni kırılma borcu YOK.
// m: alanı da düzeltildi — TDV: Rumeli beylerbeyiliğine bağlı sancak, 1593'te Özü
// eyaleti; "Yaş" tarihen yanlıştı (komşu İsmail zaten "Silistre" taşıyor).
{ ad:"Hotin", tur:"kale", lat:48.510, lon:26.492, g:1, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1769-09-19",t:"1774-07-21",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], v:[{f:"1456-06-01",t:"1713-06-24",k:"Boğdan Voyvodalığı (Osmanlı tâbii)"}], d:[{f:"1713-06-24",t:"1769-09-19",y:"antlasma"},{f:"1774-07-21",t:"1812-05-28",y:"antlasma"}] },
{ ad:"Bender", tur:"kale", lat:46.831, lon:29.481, g:0, k:3, m:"Silistre", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1770-09-27",t:"1774-07-21",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], v:[{f:"1456-06-01",t:"1538-09-01",k:"Boğdan Voyvodalığı (Osmanlı tâbii)"}], d:[{f:"1538-09-01",t:"1770-09-27",y:"kusatma"},{f:"1774-07-21",t:"1812-05-28",y:"antlasma"}] },
{ ad:"İsmail", tur:"kale", lat:45.351, lon:28.836, g:0, k:4, m:"Silistre", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1790-12-22",t:"1792-01-10",d:"rusya"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], v:[{f:"1456-06-01",t:"1538-09-01",k:"Boğdan Voyvodalığı"}], d:[{f:"1538-09-01",t:"1790-12-22",y:"kusatma"},{f:"1792-01-10",t:"1812-05-28",y:"antlasma"}] },
// hatalar 6.docx madde 10 ve 11 — kullanıcı: "Bahçesaray anlaşması ile çehrin
// kalesi geri mi verildi? çehrin kalesi kazanılması ile gelen topraklar
// haritada gitmiş gibi görünüyor bunu doğrulayalım."
// TEYİD SONUCU: hayır, geri verilmedi ve eski kayıt yanlıştı. 3 Ocak 1681
// Bahçesaray Antlaşması yirmi yıllık mütareke kurar, sınır Dinyeper'dir: SOL
// yaka ile Kiev Moskova'da kalır, SAĞ yaka Osmanlı'da; Bug ile Dinyeper arası
// ise iskân edilmeyecek tarafsız şerit ilân edilir. Çehrin sağ yakadadır
// (32.66°D, Dinyeper'in batısı) — yani Rusya'ya geçmedi. Osmanlı zaten kaleyi
// 1678'de aldıktan sonra yıktırmış ve bölgeyi boşaltmıştı. Sağ yaka ancak
// 26 Ocak 1699 Karlofça ile Lehistan'a döndü (Kamaniçe kaydıyla aynı gün) ve
// 1793 ikinci taksimiyle Rusya'ya geçti. Zincir Kamaniçe'nin birebir aynısı.
{ ad:"Çehrin (Çigirin)", tur:"kale", lat:49.077, lon:32.663, g:0, k:4, m:"Kamaniçe", s:[{f:"1281-01-01",t:"1678-07-19",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}], d:[{f:"1678-07-19",t:"1699-01-26",y:"kusatma"}] },

// ── PODOLYA EYALETİNİN SANCAK MERKEZLERİ ───────────────────────────────────
// hatalar 6.docx madde 10 — kullanıcı: "çehrin kalesinin fethi ve podolya fethi
// ile gelen toprak parçasının doğru olup olmadığını teyid edelim... ele geçen
// kale ve şehir ve toprakların uzantısı bölgelerin ne kadar yer olduğunu ve
// haritada nasıl temsil edileceğini net bir şekilde çıkaralım."
// TDV "KAMANİÇE": eyalet dört sancaktan kuruluydu — Kamaniçe, Bar, Mejibuji
// (Meciboj) ve Yazlofça, ayrıca on dokuz nahiye; 500'den fazla timar, ~6000
// asker. Haritada bu eyaletin TEK noktası vardı (Kamaniçe), dolayısıyla Podolya
// bir petek büyüklüğünde görünüyordu. Üç sancak merkezi eklendi; eyaletin
// gerçek uzantısı artık dört petekle temsil ediliyor.
// Pencereler mevcut kırılma günlerine oturdu: 1672-08-27 (Kamaniçe'nin fethi)
// → 1699-01-26 (Karlofça). Taksim tarihleri komşularıyla aynı: Podolya içi
// Bar ve Meciboj 1793-01-23 (ikinci taksim, Kamaniçe gibi), Galiçya'daki
// Yazlofça 1772-08-05 (birinci taksim, Lvov gibi) Avusturya'ya geçer.
{ ad:"Bar (Podolya)", tur:"kale", lat:49.078, lon:28.260, g:0, k:3, m:"Kamaniçe", s:[{f:"1281-01-01",t:"1672-08-27",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}], d:[{f:"1672-08-27",t:"1699-01-26",y:"kusatma"}] },
{ ad:"Meciboj (Mejibuji)", tur:"kale", lat:49.431, lon:27.415, g:0, k:3, m:"Kamaniçe", s:[{f:"1281-01-01",t:"1672-08-27",d:"lehistan"},{f:"1699-01-26",t:"1793-01-23",d:"lehistan"},{f:"1793-01-23",t:"1923-10-29",d:"rusya"}], d:[{f:"1672-08-27",t:"1699-01-26",y:"kusatma"}] },
{ ad:"Yazlofça (Yazlovets)", tur:"kale", lat:48.951, lon:25.435, g:0, k:3, m:"Kamaniçe", s:[{f:"1281-01-01",t:"1672-08-27",d:"lehistan"},{f:"1699-01-26",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"polonya"}], d:[{f:"1672-08-27",t:"1699-01-26",y:"kusatma"}] },

// Balkanlar
{ ad:"Plevne", tur:"kale", lat:43.417, lon:24.617, g:1, k:3, m:"Sofya", s:[{f:"1281-01-01",t:"1393-07-17",d:"bulgaristan"},{f:"1877-12-10",t:"1923-10-29",d:"bulgaristan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1393-07-17",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1877-12-10"}] },
{ ad:"Yenipazar (Novi Pazar)", tur:"sehir", lat:43.140, lon:20.517, g:0, k:3, m:"Üsküp", s:[{f:"1281-01-01",t:"1455-06-01",d:"sirbistan"},{f:"1912-10-23",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1455-06-01",t:"1912-10-23"}] },

// Yunanistan / İyon Denizi — Venedik ile el değiştiren kıyı ve adalar
{ ad:"Korfu", tur:"kale", lat:39.624, lon:19.922, g:0, k:3, m:"Yanya", d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}] },
{ ad:"Ayamavra (Lefkada)", tur:"kale", lat:38.716, lon:20.643, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1479-08-01",d:"napoli"},{f:"1684-08-06",t:"1715-09-07",d:"venedik"},{f:"1718-07-21",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-08-01",t:"1684-08-06"},{f:"1715-09-07",t:"1718-07-21"}] },
// Pasarofça'da (1718) Venedik'te kalan üçlü Preveze-Parga-Vonitsa'dan yalnız
// Preveze veride vardı; diğer ikisinin bulunduğu kıyı en yakın peteğe emiliyor,
// yani Venedik'in elindeyken Osmanlı boyanıyordu. Parga hiç Osmanlı olmamıştı:
// TDV TEPEDELENLİ ALİ PAŞA maddesi "Parga İngilizler'e teslim oldu ve Ali
// Paşa'nın idaresine ancak 1819'da terkedildi" diyor.
{ ad:"Parga", tur:"kale", lat:39.2925, lon:20.4051, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1401-01-01",d:"bizans"},{f:"1401-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1819-05-10",d:"ingiltere"},{f:"1913-03-06",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1819-05-10",t:"1913-03-06",y:"antlasma"}] },
{ ad:"Vonitsa", tur:"kale", lat:38.917, lon:20.888, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1449-01-01",d:"bizans"},{f:"1684-09-29",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1798-10-23",d:"fransa"},{f:"1912-10-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1449-01-01",t:"1684-09-29"},{f:"1798-10-23",t:"1912-10-21",y:"savas"}] },
{ ad:"Preveze", tur:"liman", lat:38.9607, lon:20.7469, g:1, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1449-01-01",d:"bizans"},{f:"1684-09-29",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1798-10-23",d:"fransa"},{f:"1912-10-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1449-01-01",t:"1684-09-29"},{f:"1798-10-23",t:"1912-10-21",y:"savas"}] },
{ ad:"Koron", tur:"kale", lat:36.796, lon:21.955, g:0, k:4, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1500-08-09",d:"venedik"},{f:"1685-08-11",t:"1715-08-16",d:"venedik"},{f:"1828-10-05",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1500-08-09",t:"1685-08-11",y:"kusatma"},{f:"1715-08-16",t:"1828-10-05",y:"kusatma"}] },

// Kuzey Afrika
{ ad:"Cerbe (Djerba)", tur:"kale", lat:33.807, lon:10.856, g:1, k:4, m:"Tunus", s:[{f:"1281-01-01",t:"1560-05-14",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1560-05-14",t:"1705-07-17",y:"savas"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Anadolu ve Arabistan
{ ad:"Antep", tur:"sehir", lat:37.066, lon:37.383, g:0, k:3, m:"Halep", s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1919-01-01",t:"1921-10-20",d:"fransa"}], d:[{f:"1516-08-24",t:"1919-01-01",y:"savas"},{f:"1921-10-20",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Elbistan", tur:"sehir", lat:38.207, lon:37.194, g:0, k:4, m:"Maraş", s:[{f:"1281-01-01",t:"1337-01-01",d:"memluk"},{f:"1337-01-01",t:"1515-06-13",d:"dulkadir"}], d:[{f:"1515-06-13",t:"1923-10-29",y:"savas"}] },
{ ad:"Tâif", tur:"sehir", lat:21.437, lon:40.513, g:0, k:4, m:"Mekke", s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1803-02-01",t:"1813-05-02",d:"suud"},{f:"1916-06-10",t:"1923-10-29",d:"hicaz"}], d:[], v:[{f:"1517-07-06",t:"1803-02-01",k:"Mekke Şerifliği"},{f:"1813-05-02",t:"1916-06-10",k:"Mekke Şerifliği"}] },

// ---- Halkidiki, Batı Trakya ve Biga: komşu ada/liman peteklerinin yarımadaları
// yutmasını önleyen gerçek yerleşimler (kullanıcı tespiti) ----
{ ad:"Aynaroz (Athos)", tur:"kale", lat:40.257, lon:24.244, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1424-01-01",d:"bizans"},{f:"1912-11-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1424-01-01",t:"1912-11-02",y:"antlasma"}] },
{ ad:"Kesendire (Kassandra)", tur:"sehir", lat:40.062, lon:23.442, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1430-03-29",d:"bizans"},{f:"1912-11-02",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1430-03-29",t:"1912-11-02"}] },
{ ad:"Gümülcine", tur:"sehir", lat:41.122, lon:25.406, g:0, k:3, m:"Edirne", s:[{f:"1281-01-01",t:"1363-01-01",d:"bizans"},{f:"1913-07-14",t:"1913-09-29",d:"bulgaristan"},{f:"1920-05-27",t:"1923-10-29",d:"yunanistan"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1363-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-07-14"},{f:"1913-09-29",t:"1920-05-27"}] },
{ ad:"Biga", tur:"sehir", lat:40.228, lon:27.243, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28",y:"ilhak"},{f:"1413-07-05",t:"1923-10-29"}] },

// ---- Yavuz dönemi (1514-1517): fetih zincirinin ara halkaları ----
// Mısır tek seferde düşmedi; Ridâniye'den İskenderiye'ye dört ay geçti.
{ ad:"Kemah", tur:"kale", lat:39.600, lon:39.030, g:1, k:4, m:"Erzurum", s:[{f:"1281-01-01",t:"1340-01-01",d:"ilhanli"},{f:"1340-01-01",t:"1401-02-01",d:"akkoyunlu"},{f:"1402-07-28",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1515-05-19",d:"safevi"}], d:[{f:"1401-02-01",t:"1402-07-28",y:"savas"},{f:"1515-05-19",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Humus", tur:"sehir", lat:34.730, lon:36.710, g:0, k:4, m:"Şam", s:[{f:"1281-01-01",t:"1516-09-27",d:"memluk"},{f:"1918-10-01",t:"1923-10-29",d:"fransa"}], d:[{f:"1516-09-27",t:"1918-10-01"}] },
{ ad:"Han Yûnus", tur:"kale", lat:31.340, lon:34.300, g:1, k:4, m:"Kudüs", s:[{f:"1281-01-01",t:"1516-12-21",d:"memluk"},{f:"1917-11-07",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1516-12-21",t:"1917-11-07",y:"savas"}] },
{ ad:"Reşîd (Rosetta)", isg:[{f:"1798-07-01",t:"1801-10-09",d:"fransa",kaynak:"kahire"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.399, lon:30.417, g:0, k:4, m:"Kahire", s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1517-05-19",t:"1805-07-03"}],
    v:[{f:"1805-07-03",t:"1914-12-18",k:"Mısır (Kavalalı)"}] },

// ---- Orta ve Batı Anadolu yoğunlaştırması (kullanıcı tespiti: "Ankara civarında
// kimin hüküm sürdüğü belli değil"). Bu noktalar hem beyliklerin gerçek sahiplik
// zincirini taşır hem de nokta seyrekliğinden doğan devasa Voronoi hücrelerini
// gerçekçi boyuta indirir. ----
{ ad:"Beyşehir", tur:"sehir", lat:37.677, lon:31.724, g:0, k:4, m:"Konya", s:[{f:"1281-01-01",t:"1326-10-09",d:"esrefogullari"},{f:"1326-10-09",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1414-06-01",d:"karaman"}], d:[{f:"1381-06-01",t:"1402-07-28",y:"antlasma"},{f:"1414-06-01",t:"1923-10-29"}] },
{ ad:"Karahisâr-ı Sâhib (Afyon)", tur:"kale", lat:38.757, lon:30.538, g:0, k:3, m:"Kütahya", s:[{f:"1281-01-01",t:"1341-01-01",d:"sahibata"},{f:"1341-01-01",t:"1390-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1429-02-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Niksar", tur:"kale", lat:40.593, lon:36.951, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1379-01-01",d:"eretna"},{f:"1379-01-01",t:"1427-01-01",d:"taceddin"}], d:[{f:"1427-01-01",t:"1923-10-29",y:"antlasma"}] },
{ ad:"Sivrihisar", tur:"sehir", lat:39.450, lon:31.535, g:0, k:4, m:"Ankara", s:[{f:"1402-07-28",t:"1404-03-01",d:"timurlu"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"},{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1354-08-01",d:"germiyan"}], d:[{f:"1354-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Kırşehir", tur:"sehir", lat:39.146, lon:34.164, g:0, k:4, m:"Ankara", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1419-01-01",d:"karaman"},{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1398-07-15",d:"burhaneddin"}], d:[{f:"1398-07-15",t:"1402-07-28"},{f:"1419-01-01",t:"1923-10-29"}] },
{ ad:"Çorum", tur:"sehir", lat:40.550, lon:34.955, g:0, k:4, m:"Ankara", s:[{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"},{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"}], d:[{f:"1393-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Çankırı", tur:"sehir", lat:40.601, lon:33.616, g:0, k:4, m:"Ankara", s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1402-09-15",t:"1413-07-05",d:"candar"},{f:"1281-01-01",t:"1309-01-01",d:"cobanogullari"},{f:"1309-01-01",t:"1354-08-01",d:"candar"}], d:[{f:"1354-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },

// ============================================================================
// KURULUŞ DÖNEMİ (1281-1335) — TDV taramasıyla eklenen yerleşimler
// Atlasın başlangıcı 1299'dan 1281'e (Ertuğrul'un ölümü / Osman Bey'in beyliğe
// geçişi) çekildi. TDV'ye göre Osman Bey fethedilmiş bir kale devralmadı;
// elinde yalnız Söğüt kışlağı ile Domaniç yaylağı vardı.
// ============================================================================
// Miras: fetih değil, Selçuklu sultanının Ertuğrul Gazi'ye tahsisi
{ ad:"Domaniç", go:"1335-01-01", s:[{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], tur:"sehir", lat:39.802, lon:29.609, g:1, k:4, m:"Bursa", d:[{f:"1281-01-01",t:"1402-07-28",y:"miras"},{f:"1413-07-05",t:"1923-10-29"}] },
// Osman Bey'in ilk askerî harekâtı (684/1285) — yağma, kalıcı fetih değil
{ ad:"Kulacahisar", tur:"kale", lat:40.040, lon:29.450, g:1, k:4, go:"1335-01-01", m:"Bursa", s:[{f:"1281-01-01",t:"1285-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1285-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
// İlk gerçek şehir fethi (687/1288): Eskişehir'e hâkimiyet buradan gelir
{ ad:"Karacahisar", tur:"kale", lat:39.725, lon:30.470, g:2, k:4, go:"1335-01-01", m:"Kütahya", s:[{f:"1281-01-01",t:"1288-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1288-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
// 1299 gece baskını: Bilecik ile aynı harekâtta
{ ad:"Yarhisar", tur:"kale", lat:40.245, lon:29.740, g:0, k:4, go:"1335-01-01", m:"Bursa", s:[{f:"1281-01-01",t:"1299-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1299-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
// Dimbos zaferi (702/1303) ve ardından alınan Kite
{ ad:"Dimbos", tur:"kale", lat:40.140, lon:29.330, g:1, k:4, go:"1335-01-01", m:"Bursa", s:[{f:"1281-01-01",t:"1303-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1303-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Kite (Kete)", tur:"kale", lat:40.130, lon:28.860, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1303-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1303-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
// 704/1304 Sakarya seferi
{ ad:"Lefke (Osmaneli)", tur:"kale", lat:40.356, lon:30.014, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1304-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1304-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Leblebicihisar", tur:"kale", lat:40.400, lon:30.150, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1304-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1304-01-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
// 705/1305 Geyve Boğazı kaleleri — İznik'in kara yardımını kesti
{ ad:"Karaçepüş", tur:"kale", lat:40.470, lon:30.300, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1305-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1305-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Karatigin", tur:"kale", lat:40.420, lon:29.780, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1305-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1305-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Absu (Hypsu)", tur:"kale", lat:40.440, lon:30.215, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1305-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1305-01-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
// Osman Bey'in son seferi (1323 sonbaharı)
{ ad:"Adranos (Orhaneli)", tur:"kale", lat:39.905, lon:28.988, g:1, k:4, go:"1340-01-01", m:"Bursa", s:[{f:"1281-01-01",t:"1323-09-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1323-09-01",t:"1402-07-28",y:"kusatma"},{f:"1413-07-05",t:"1923-10-29"}] },
// Pelekanon zaferi (1 Haziran 1329) ve Kocaeli sahilinin alınması
{ ad:"Pelekanon (Eskihisar)", tur:"kale", lat:40.762, lon:29.386, g:2, k:4, m:"İstanbul", s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1329-06-01",t:"1402-07-28",y:"savas"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Gebze", tur:"sehir", lat:40.803, lon:29.431, g:0, k:4, m:"İstanbul", s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Hereke", tur:"kale", lat:40.791, lon:29.609, g:0, k:4, m:"İstanbul", s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Samandıra", tur:"kale", lat:40.980, lon:29.205, g:0, k:4, m:"İstanbul", s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
// 735/1334-35 Karesi ilhakı (TDV ORHAN / İnalcık; KARESİOĞULLARI maddesi 1345 der)
{ ad:"Kirmasti (M.Kemalpaşa)", tur:"sehir", lat:40.035, lon:28.411, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1334-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1334-01-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Mihaliç (Karacabey)", tur:"sehir", lat:40.214, lon:28.361, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1334-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1334-01-01",t:"1402-07-28",y:"antlasma"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Köstence", tur:"liman", lat:44.173, lon:28.639, g:0, k:4, m:"Silistre", s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}] },
{ ad:"Anadolu Hisarı", s:[{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], tur:"kale", lat:41.081, lon:29.067, g:1, k:4, m:"İstanbul", kur:"1395-08-01", d:[{f:"1395-08-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Gölyazı (Apollonia)", tur:"kale", lat:40.172, lon:28.650, g:0, k:4, m:"Bursa", s:[{f:"1281-01-01",t:"1334-01-01",d:"bizans"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1334-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Rumeli Hisarı", tur:"kale", lat:41.0879, lon:29.0511, g:2, k:4, m:"İstanbul", kur:"1452-08-31", d:[{f:"1452-08-31",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Harput (Elazığ)", tur:"kale", lat:38.714, lon:39.245, g:0, k:4, m:"Diyarbakır", s:[{f:"1281-01-01",t:"1465-01-01",d:"artuklu"},{f:"1465-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}] },
{ ad:"Şerşel (Cherchell)", tur:"liman", lat:36.6015, lon:2.1921, g:0, k:4, m:"Cezayir", s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1519-09-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"}] },
{ ad:"Medea (Titteri)", tur:"sehir", lat:36.264, lon:2.754, g:0, k:4, m:"Cezayir", s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa"}], d:[{f:"1519-09-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"}] },
{ ad:"Setif", tur:"sehir", lat:36.190, lon:5.410, g:0, k:4, m:"Cezayir", s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1923-10-29",d:"fransa"}], d:[{f:"1519-09-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1838-10-13",k:"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"}] },
{ ad:"Biskra", tur:"kale", lat:34.850, lon:5.728, g:0, k:4, m:"Cezayir", s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1844-03-04",t:"1923-10-29",d:"fransa"}], d:[{f:"1552-01-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği (Osmanlı adına)"}] },
{ ad:"Tuggurt", tur:"kale", lat:33.105, lon:6.058, g:0, k:4, m:"Cezayir", s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1854-12-02",t:"1923-10-29",d:"fransa"}], d:[{f:"1552-01-01",t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05",t:"1854-12-02",k:"Sahra vahalarının özerk idaresi"}] },

// ================= 1414 KONYA SEFERİ VE TÂCEDDİN'İN CANİK'İ =================
// "Konya kuşatması: Beyşehir, Seydişehir ve Akşehir geri alındı" maddesi
// haritada hiç iş yapmıyordu, çünkü Seydişehir ile Akşehir veride yoktu.
// Bu hat alınmayınca Antalya 1423'te kuzeyle bağlantısız kalıyordu.
{ ad:"Seydişehir", tur:"sehir", lat:37.421, lon:31.849, g:0, k:4, m:"Konya", s:[{f:"1281-01-01",t:"1326-10-09",d:"esrefogullari"},{f:"1326-10-09",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1414-06-01",d:"karaman"}], d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
{ ad:"Akşehir", tur:"sehir", lat:38.357, lon:31.416, g:0, k:4, m:"Konya", s:[{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1381-06-01",d:"hamid"},{f:"1402-07-28",t:"1414-06-01",d:"karaman"}], d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
// Tâceddinoğulları yalnız Niksar ile temsil ediliyordu; beyliğin asıl gövdesi
// Canik'te, Terme ile Çarşamba arasındaki kıyı ovasıdır. Tek nokta yüzünden
// 1427 ilhakı haritada bir hücrenin renk değiştirmesinden ibaret kalıyordu.
{ ad:"Terme", tur:"kale", lat:41.207, lon:36.976, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1379-01-01",d:"eretna"},{f:"1379-01-01",t:"1427-01-01",d:"taceddin"}], d:[{f:"1427-01-01",t:"1923-10-29"}] },
{ ad:"Çarşamba", tur:"sehir", lat:41.199, lon:36.727, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1379-01-01",d:"eretna"},{f:"1379-01-01",t:"1427-01-01",d:"taceddin"}], d:[{f:"1427-01-01",t:"1923-10-29"}] },

// ==================== GELİBOLU YARIMADASI VE AMASYA KORİDORU ====================
// Yarımadada Çimpe'den başka nokta olmadığı için 1352'de Çimpe'nin hücresi bütün
// yarımadayı kaplıyor, "ilk çıkış Çimpe" yerine "Gelibolu yarımadası fethedildi"
// görüntüsü doğuyordu; dahası boğazın karşısındaki Biga'nın (1334) hücresi de
// Avrupa yakasına taşıyordu. Bolayır ve Maydos, yarımadayı 1354'e kadar Bizans'ta
// tutarak her iki sızmayı da keser.
{ ad:"Bolayır", tur:"kale", lat:40.532, lon:26.750, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1354-03-02",t:"1366-08-01"},{f:"1376-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Maydos (Eceabat)", tur:"kale", lat:40.1876, lon:26.3462, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1354-03-02",d:"bizans"},{f:"1366-08-01",t:"1376-09-01",d:"bizans"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"}], d:[{f:"1354-03-02",t:"1366-08-01"},{f:"1376-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
// 1393 harekâtı Amasya emirliğinin tamamını aldı; yalnız Amasya işaretlenince
// şehir Çankırı ile arasındaki 200 km boş kalarak enklav gibi duruyordu.
{ ad:"Osmancık", tur:"kale", lat:40.980, lon:34.800, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1393-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Merzifon", tur:"sehir", lat:40.876, lon:35.463, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1393-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Ladik (Amasya)", tur:"kale", lat:40.912, lon:35.898, g:0, k:4, m:"Sivas", s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},{f:"1335-01-01",t:"1381-01-01",d:"eretna"},{f:"1381-01-01",t:"1393-06-01",d:"burhaneddin"},{f:"1402-07-28",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1393-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },

// ======================= MACARİSTAN SANCAK MERKEZLERİ =======================
// Budin ile Belgrad arasındaki 300 km'lik koridorda yalnız İstolni Belgrad, Peçuy,
// Temeşvar ve Kanije vardı. Dört nokta, Tuna-Tisa havzasının tamamını taşımak
// zorunda kalınca Budin'in hücresi kuzeybatıya doğru gerçek dışı bir kama hâlinde
// uzuyor, eyaletin gövdesi bozuk görünüyordu. Aşağıdakiler Budin eyaletinin gerçek
// sancak merkezleridir; sınır artık Tuna ve Tisa hatlarına oturur.
{ ad:"Ösek (Osijek)", tur:"kale", lat:45.554, lon:18.695, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1687-09-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}], d:[{f:"1526-09-01",t:"1687-09-29"}] },
{ ad:"Mohaç", tur:"kale", lat:45.993, lon:18.692, g:1, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1687-08-12",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1526-09-01",t:"1687-08-12"}] },
{ ad:"Varadin (Petrovaradin)", tur:"kale", lat:45.248, lon:19.862, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1687-09-06",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}], d:[{f:"1526-09-01",t:"1687-09-06"}] },
{ ad:"Baç (Bács)", tur:"kale", lat:45.760, lon:19.240, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},{f:"1687-09-06",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}], d:[{f:"1526-09-01",t:"1687-09-06"}] },
{ ad:"Kalocsa", tur:"sehir", lat:46.527, lon:18.985, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1541-08-29",d:"macaristan"},{f:"1686-09-02",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1541-08-29",t:"1686-09-02"}] },
{ ad:"Segedin (Szeged)", tur:"sehir", lat:46.253, lon:20.148, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1543-08-10",d:"macaristan"},{f:"1686-10-23",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1543-08-10",t:"1686-10-23"}] },
{ ad:"Şimontorna", tur:"kale", lat:46.750, lon:18.551, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1544-09-01",d:"macaristan"},{f:"1686-09-02",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1544-09-01",t:"1686-09-02"}] },
{ ad:"Hatvan", tur:"kale", lat:47.667, lon:19.680, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1544-09-01",d:"macaristan"},{f:"1686-09-02",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1544-09-01",t:"1686-09-02"}] },
{ ad:"Vaç (Vác)", tur:"kale", lat:47.776, lon:19.134, g:0, k:4, m:"Budin", s:[{f:"1281-01-01",t:"1544-09-01",d:"macaristan"},{f:"1684-06-27",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1544-09-01",t:"1684-06-27"}] },
{ ad:"Solnok (Szolnok)", tur:"kale", lat:47.174, lon:20.198, g:0, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1552-09-04",d:"macaristan"},{f:"1685-10-19",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1552-09-04",t:"1685-10-19"}] },
{ ad:"Zigetvar", tur:"kale", lat:46.049, lon:17.804, g:1, k:3, m:"Budin", s:[{f:"1281-01-01",t:"1566-09-07",d:"macaristan"},{f:"1689-02-11",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"macaristan"}], d:[{f:"1566-09-07",t:"1689-02-11",y:"kusatma"}] },

// ============================ ADA KATMANI ============================
// Kural: HER ADANIN en az bir noktası olacak. Noktasız ada, Voronoi'de en yakın
// hücreye kapılır ve o hücrenin sahibiyle boyanır — atlastaki sahte sahiplenmelerin
// tek kaynağı budur. Denetim, sahnede 134 noktasız ada saydı; en ağır sonuçlar:
//   Sardinya, Annaba'ya kapılıp 1533'ten itibaren OSMANLI boyanıyordu (23.000 km²!)
//   Brakya-Hvar-Korçula-Vis, Mostar'a kapılıp 1483'ten itibaren Osmanlı görünüyordu
//   Kefalonya ve Zaklise, Ayamavra'ya kapılıp 1684'e kadar Osmanlı kalıyordu
//   Kişm, Abu Dabi'ye kapılıyordu
// Büyük adalar birden çok noktaya bölündü; bu hem gövde şeklini düzeltir hem de
// aşamalı fetihleri (Kıbrıs 1570-71, Girit 1645-1669) haritada görünür kılar.

// ---- Kiklad Adaları: Nakşa Dukalığı, 1566'da tek seferde Osmanlı ----
{ ad:"Paros", tur:"kale", lat:37.063, lon:25.196, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Değirmenlik (Milos)", tur:"kale", lat:36.6979, lon:24.4400, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Kimolos (Argentiera)", tur:"kale", lat:36.815, lon:24.562, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Murted (Kea)", tur:"kale", lat:37.614, lon:24.331, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Termiye (Kythnos)", tur:"kale", lat:37.398, lon:24.419, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Koçbaba (Serifos)", tur:"kale", lat:37.162, lon:24.484, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Sifnos (Yavuzca)", tur:"kale", lat:36.978, lon:24.707, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Sire (Syros)", tur:"kale", lat:37.436, lon:24.918, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Mikonos", tur:"kale", lat:37.456, lon:25.376, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Nio (İos)", tur:"kale", lat:36.723, lon:25.330, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Yamurgi (Amorgos)", tur:"kale", lat:36.848, lon:25.905, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Namfi (Anafi)", tur:"kale", lat:36.374, lon:25.783, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },
{ ad:"Folegandros", tur:"kale", lat:36.682, lon:25.125, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1566-04-15",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-15",t:"1830-02-03"}] },

// ---- Onikiada: Rodos şövalyelerinden 1522-23'te devralındı, 1912'de İtalya'ya ----
{ ad:"Kelemez (Kalimnos)", tur:"kale", lat:36.993, lon:26.972, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1523-01-05",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1523-01-05",t:"1912-05-12",y:"antlasma"}] },
{ ad:"İleryoz (Leros)", tur:"kale", lat:37.150, lon:26.832, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1523-01-05",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1523-01-05",t:"1912-05-12",y:"antlasma"}] },
{ ad:"Sömbeki (Simi)", tur:"kale", lat:36.585, lon:27.831, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-12",y:"antlasma"}] },
{ ad:"İncirli (Nisiros)", tur:"kale", lat:36.428, lon:27.363, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-12",y:"antlasma"}] },
{ ad:"İlyaki (Tilos)", tur:"kale", lat:36.586, lon:27.167, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-12",y:"antlasma"}] },
{ ad:"Herke (Halki)", tur:"kale", lat:36.229, lon:27.568, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-12",y:"antlasma"}] },
{ ad:"Batnoz (Patmos)", tur:"kale", lat:37.320, lon:26.550, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1453-05-29",t:"1522-12-21",d:"sovalye"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], v:[{f:"1522-12-21",t:"1537-10-01",k:"manastır harâcı"}], d:[{f:"1537-10-01",t:"1912-05-12"}] },
{ ad:"İstanbulya (Astipalya)", tur:"kale", lat:36.572, lon:26.350, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1537-10-01",d:"venedik"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1537-10-01",t:"1912-05-12"}] },
{ ad:"Kaşot (Kasos)", tur:"kale", lat:35.396, lon:26.928, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1537-10-01",d:"venedik"},{f:"1912-05-12",t:"1923-10-29",d:"italya"}], d:[{f:"1537-10-01",t:"1912-05-12"}] },
{ ad:"Fornoz (Fourni)", tur:"kale", lat:37.5795, lon:26.4764, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1521-01-01",d:"ceneviz"},{f:"1912-07-17",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1521-01-01",t:"1912-07-17"}] },

// ---- Kuzey Ege ----
{ ad:"İpsara (Psara)", tur:"kale", lat:38.576, lon:25.578, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1566-04-14",d:"ceneviz"},{f:"1912-11-11",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1566-04-14",t:"1912-11-11"}] },
{ ad:"Bozbaba (Ay Strati)", tur:"kale", lat:39.521, lon:25.006, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1479-01-25",d:"bizans"},{f:"1912-10-08",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-01-25",t:"1912-10-08"}] },
{ ad:"İskiathos", tur:"kale", lat:39.1686, lon:23.4922, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1453-05-29",t:"1538-08-01",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1538-08-01",t:"1830-02-03"}] },
{ ad:"Alonisos", tur:"kale", lat:39.213, lon:23.911, g:0, k:4, m:"Selanik", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"},{f:"1453-05-29",t:"1538-08-01",d:"venedik"},{f:"1830-02-03",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1538-08-01",t:"1830-02-03"}] },
{ ad:"Marmara Adası", tur:"kale", lat:40.625, lon:27.620, g:0, k:4, m:"Edirne", s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"}], d:[{f:"1453-05-29",t:"1923-10-29"}] },

// ---- Saronik körfezi ve Attika adaları ----
{ ad:"Kulluk (Salamis)", tur:"kale", lat:37.940, lon:23.482, g:0, k:4, m:"Atina", s:[{f:"1281-01-01",t:"1456-06-04",d:"atinadukaligi"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1456-06-04",t:"1821-03-25"}] },
{ ad:"Egina (Aegina)", tur:"kale", lat:37.736, lon:23.493, g:0, k:4, m:"Atina", s:[{f:"1281-01-01",t:"1537-10-01",d:"venedik"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1537-10-01",t:"1821-03-25"}] },
{ ad:"Çamlıca (Hidra)", tur:"kale", lat:37.338, lon:23.474, g:0, k:4, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1460-05-29",d:"bizans"},{f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1460-05-29",t:"1821-03-25"}] },

// ---- İyon adaları: 1479'da alındı, Venedik kısa sürede geri aldı ----
{ ad:"Kefalonya", tur:"kale", lat:38.227, lon:20.575, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1479-08-01",d:"napoli"},{f:"1500-12-24",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-08-01",t:"1500-12-24"}] },
{ ad:"İthaki", tur:"kale", lat:38.403, lon:20.687, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1479-08-01",d:"napoli"},{f:"1500-12-24",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-08-01",t:"1500-12-24"}] },
{ ad:"Zaklise (Zakynthos)", tur:"kale", lat:37.788, lon:20.775, g:0, k:4, m:"Yanya", s:[{f:"1281-01-01",t:"1479-08-01",d:"napoli"},{f:"1482-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1815-11-05",d:"fransa"},{f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},{f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1479-08-01",t:"1482-01-01"}] },

// ---- Dalmaçya ve Kvarner: Venedik, 1797'de Avusturya'ya (hiçbiri Osmanlı olmadı) ----
{ ad:"Krk (Veglia)", tur:"kale", lat:45.075, lon:14.615, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Cres (Cherso)", tur:"kale", lat:44.879, lon:14.399, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Rab (Arbe)", tur:"kale", lat:44.7636, lon:14.7702, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Pag (Pago)", tur:"kale", lat:44.4676, lon:15.0186, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Uzunada (Dugi Otok)", tur:"kale", lat:44.014, lon:15.047, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Brakya (Brač)", tur:"kale", lat:43.323, lon:16.644, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Hvar (Lesina)", tur:"kale", lat:43.164, lon:16.699, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Korçula (Kurzola)", tur:"kale", lat:42.945, lon:16.904, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Vis (Lissa)", tur:"kale", lat:43.054, lon:16.148, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },
{ ad:"Mliyet (Mljet)", tur:"kale", lat:42.753, lon:17.522, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},{f:"1797-10-17",t:"1923-10-29",d:"avusturya"}] },

// ---- Batı Akdeniz: Osmanlı'nın hiç almadığı, ama noktasızlıktan Osmanlı boyanan adalar ----
{ ad:"Kalyari (Cagliari)", tur:"liman", lat:39.220, lon:9.120, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1324-01-01",d:"ceneviz"},{f:"1324-01-01",t:"1720-02-24",d:"ispanya"},{f:"1720-02-24",t:"1923-10-29",d:"italya"}] },
{ ad:"Sasari (Sassari)", tur:"sehir", lat:40.730, lon:8.560, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1324-01-01",d:"ceneviz"},{f:"1324-01-01",t:"1720-02-24",d:"ispanya"},{f:"1720-02-24",t:"1923-10-29",d:"italya"}] },
{ ad:"Bastia (Korsika)", tur:"liman", lat:42.700, lon:9.450, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1768-05-15",d:"ceneviz"},{f:"1768-05-15",t:"1923-10-29",d:"fransa"}] },
{ ad:"Ayacyo (Ajaccio)", tur:"liman", lat:41.9322, lon:8.7391, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1768-05-15",d:"ceneviz"},{f:"1768-05-15",t:"1923-10-29",d:"fransa"}] },
{ ad:"Mayorka (Palma)", tur:"liman", lat:39.570, lon:2.650, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Menorka (Mahon)", tur:"liman", lat:39.890, lon:4.260, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1708-09-29",d:"ispanya"},{f:"1708-09-29",t:"1802-03-25",d:"ingiltere"},{f:"1802-03-25",t:"1923-10-29",d:"ispanya"}] },
{ ad:"İbiza", tur:"liman", lat:38.910, lon:1.430, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Pantelerya", tur:"kale", lat:36.792, lon:11.990, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Elba", tur:"kale", lat:42.784, lon:10.285, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-03-17",d:"toskana"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Kerkene (Kerkennah)", tur:"kale", lat:34.741, lon:11.224, g:0, k:4, m:"Tunus", s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa"}], d:[{f:"1574-08-25",t:"1705-07-17"}], v:[{f:"1705-07-17",t:"1881-05-12",k:"Tunus Ocaklığı (Hüseynîler)"}] },

// ---- Kızıldeniz ve Basra Körfezi ----
// TDV bu adayı "Dehlek" yazıyor; kayıt adı "Dahlak" olarak KALIYOR — okuyucunun
// aradığı biçim bu. TDV yazımı madde metninde parantezle anılır.
{ ad:"Dahlak", tur:"kale", lat:15.692, lon:40.138, g:0, k:4, m:"Sevâkin", s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"italya"}], v:[{f:"1865-01-01",t:"1885-02-05",k:"Mısır (Kavalalı)"}], d:[{f:"1557-01-01",t:"1865-01-01"}] },
{ ad:"Ferasan (Farasan)", tur:"kale", lat:16.730, lon:42.009, g:0, k:4, m:"Sana", s:[{f:"1281-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-01-01",t:"1849-05-01",d:"yemen"},{f:"1918-10-30",t:"1923-10-29",d:"yemen"}], d:[{f:"1538-08-03",t:"1635-01-01"},{f:"1849-05-01",t:"1918-10-30"}] },
{ ad:"Kemeran (Kamaran)", tur:"kale", lat:15.353, lon:42.587, g:0, k:4, m:"Sana", s:[{f:"1281-01-01",t:"1538-08-03",d:"yemen"},{f:"1635-01-01",t:"1849-05-01",d:"yemen"},{f:"1915-06-10",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1538-08-03",t:"1635-01-01"},{f:"1849-05-01",t:"1915-06-10"}] },
{ ad:"Hürmüz Adası", tur:"kale", lat:26.861, lon:56.366, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1510-12-02",d:"iran"},{f:"1510-12-02",t:"1515-04-01",d:"safevi"},{f:"1515-04-01",t:"1622-05-01",d:"portekiz"},{f:"1622-05-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Kişm (Qeshm)", tur:"kale", lat:26.791, lon:55.821, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1510-12-02",d:"iran"},{f:"1510-12-02",t:"1515-04-01",d:"safevi"},{f:"1515-04-01",t:"1622-05-01",d:"portekiz"},{f:"1622-05-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Kiş (Kish)", tur:"kale", lat:26.526, lon:53.979, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1508-01-01",d:"iran"},{f:"1508-01-01",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1923-10-29",d:"iran"}] },
{ ad:"Sokotra", tur:"kale", lat:12.510, lon:53.872, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1507-01-01",d:"umman"},{f:"1507-01-01",t:"1511-01-01",d:"portekiz"},{f:"1511-01-01",t:"1923-10-29",d:"umman"}] },
{ ad:"Masira", tur:"kale", lat:20.414, lon:58.781, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"umman"}] },

// ---- Büyük adaların bölünmesi: tek nokta ne şekli ne de aşamalı fethi anlatıyor ----
// Kıbrıs 1570-71'de parça parça alındı: Limasol ve Baf temmuzda, Girne ve Tuzla
// Lefkoşa ile birlikte eylülde, Magosa ise on bir ay direndikten sonra düştü.
{ ad:"Girne (Kyrenia)", tur:"kale", lat:35.3375, lon:33.3187, g:0, k:4, m:"Lefkoşa", s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-09-17",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-09-17",t:"1878-06-04"}] },
{ ad:"Baf (Paphos)", tur:"kale", lat:34.776, lon:32.424, g:0, k:4, m:"Lefkoşa", s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-07-23",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-07-23",t:"1878-06-04"}] },
{ ad:"Limasol", tur:"liman", lat:34.707, lon:33.023, g:0, k:4, m:"Lefkoşa", s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-07-23",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-07-23",t:"1878-06-04"}] },
{ ad:"Tuzla (Larnaka)", tur:"liman", lat:34.917, lon:33.630, g:0, k:4, m:"Lefkoşa", s:[{f:"1281-01-01",t:"1489-02-26",d:"lusignan"},{f:"1489-02-26",t:"1570-09-09",d:"venedik"},{f:"1878-06-04",t:"1923-10-29",d:"ingiltere"}], d:[{f:"1570-09-09",t:"1878-06-04"}] },
// Girit'in dağlık güneybatısı (İsfakiye) ve doğu ucu (Sitiye) Kandiye ile birlikte
// 1669'a kadar Venedik elinde kaldı; ada 24 yıl boyunca ikiye bölünmüş durumdaydı.
{ ad:"İsfakiye (Sfakia)", tur:"kale", lat:35.202, lon:24.135, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1669-09-27",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1669-09-27",t:"1830-11-01"},{f:"1841-02-25",t:"1898-12-01"}], v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
{ ad:"Sitiye (Sitia)", tur:"kale", lat:35.208, lon:26.104, g:0, k:4, m:"Kandiye (Girit)", s:[{f:"1281-01-01",t:"1669-09-27",d:"venedik"},{f:"1898-12-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1669-09-27",t:"1830-11-01"},{f:"1841-02-25",t:"1898-12-01"}], v:[{f:"1830-11-01",t:"1841-02-25",k:"Mısır (Kavalalı)"}] },
// Sicilya 24.000 km²; tek nokta adanın şeklini taşımıyordu.
{ ad:"Messina", tur:"liman", lat:38.194, lon:15.554, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Sirakuza", tur:"liman", lat:37.075, lon:15.287, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Trapani", tur:"liman", lat:38.017, lon:12.537, g:0, k:0, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
// Rodos, Midilli ve Eğriboz'un ikinci noktaları ada gövdelerini düzeltir.
{ ad:"Lindos", tur:"kale", lat:36.092, lon:28.088, g:0, k:4, m:"Rodos", s:[{f:"1281-01-01",t:"1310-08-15",d:"bizans"},{f:"1310-08-15",t:"1522-12-21",d:"sovalye"},{f:"1912-05-04",t:"1923-10-29",d:"italya"}], d:[{f:"1522-12-21",t:"1912-05-04"}] },
{ ad:"Molova (Molyvos)", tur:"kale", lat:39.366, lon:26.181, g:0, k:4, m:"İzmir", s:[{f:"1281-01-01",t:"1462-09-17",d:"ceneviz"},{f:"1912-11-21",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1462-09-17",t:"1912-11-21"}] },
{ ad:"Karistos (Kızılhisar)", tur:"kale", lat:38.0182, lon:24.4165, g:0, k:4, m:"Mora (Tripoliçe)", s:[{f:"1281-01-01",t:"1470-07-12",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1470-07-12",t:"1829-05-01"}] },

// ==================== BEYLİK MERKEZLERİ (TDV düzeltmesi) ====================
// Beyliklerin başşehirleri ve ana şehirleri haritada eksikti; Voronoi
// hücreleri bu yüzden gerçek beylik coğrafyasını değil, elde kalan birkaç
// noktanın çevresini gösteriyordu (kullanıcı: "Germiyanoğulları yanlış yerde").
// TDV AYDINOĞULLARI: ilk merkez Birgi; Tire ve Ayasuluk beyliğin diğer
// yönetim merkezleri. Üçü de haritada yoktu — beylik başşehirsiz duruyordu.
{ ad:"Birgi", tur:"sehir", lat:38.256, lon:28.070, g:0, k:4, m:"İzmir",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1390-01-01",d:"aydin"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Tire", tur:"sehir", lat:38.089, lon:27.735, g:0, k:4, m:"İzmir",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1390-01-01",d:"aydin"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Ayasuluk (Selçuk)", tur:"sehir", lat:37.951, lon:27.368, g:0, k:4, m:"İzmir",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"bizans"},{f:"1308-01-01",t:"1390-01-01",d:"aydin"},{f:"1402-07-28",t:"1415-06-01",d:"aydin"},{f:"1421-08-15",t:"1425-06-01",d:"aydin"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1415-06-01",t:"1421-08-15"},{f:"1425-06-01",t:"1923-10-29"}] },
// TDV MENTEŞEOĞULLARI: "başşehri Milas idi" — başşehir haritada yoktu.
{ ad:"Milas", tur:"sehir", lat:37.316, lon:27.783, g:0, k:4, m:"Muğla",
    s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
{ ad:"Balat (Palatia)", tur:"liman", lat:37.510, lon:27.278, g:0, k:4, m:"Muğla",
    s:[{f:"1281-01-01",t:"1390-01-01",d:"mentese"},{f:"1402-07-28",t:"1425-06-01",d:"mentese"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1425-06-01",t:"1923-10-29"}] },
// TDV GERMİYANOĞULLARI: 1381'de Süleyman Şah'ın kızının çeyizi olarak
// Kütahya, Simav, Eğrigöz (Emet) ve Tavşanlı Osmanlılar'a verildi.
{ ad:"Simav", tur:"kale", lat:39.090, lon:28.980, g:0, k:4, m:"Kütahya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1381-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28",y:"antlasma"},{f:"1429-02-01",t:"1923-10-29"}] },
{ ad:"Tavşanlı", tur:"kale", lat:39.545, lon:29.492, g:0, k:4, m:"Kütahya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1381-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28",y:"antlasma"},{f:"1429-02-01",t:"1923-10-29"}] },
{ ad:"Emet (Eğrigöz)", tur:"kale", lat:39.343, lon:29.259, g:0, k:4, m:"Kütahya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1381-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1381-01-01",t:"1402-07-28",y:"antlasma"},{f:"1429-02-01",t:"1923-10-29"}] },
{ ad:"Uşak", tur:"sehir", lat:38.673, lon:29.406, g:0, k:4, m:"Kütahya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1390-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1429-02-01",t:"1923-10-29"}] },
{ ad:"Alaşehir", tur:"sehir", lat:38.351, lon:28.518, g:0, k:4, m:"Kütahya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1390-01-01",d:"germiyan"},{f:"1402-07-28",t:"1429-02-01",d:"germiyan"}], d:[{f:"1390-01-01",t:"1402-07-28"},{f:"1429-02-01",t:"1923-10-29"}] },
// TDV HAMÎDOĞULLARI: "İlk merkez: Uluborlu" — haritada yoktu.
{ ad:"Uluborlu", tur:"sehir", lat:38.086, lon:30.457, g:0, k:4, m:"Kütahya",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1391-01-01",d:"hamid"},{f:"1402-09-15",t:"1414-06-01",d:"hamid"}], d:[{f:"1391-01-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
{ ad:"Eğirdir", tur:"sehir", lat:37.874, lon:30.851, g:0, k:4, m:"Kütahya",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1391-01-01",d:"hamid"},{f:"1402-09-15",t:"1414-06-01",d:"hamid"}], d:[{f:"1391-01-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
{ ad:"Burdur", tur:"sehir", lat:37.720, lon:30.290, g:0, k:4, m:"Kütahya",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1391-01-01",d:"hamid"},{f:"1402-09-15",t:"1414-06-01",d:"hamid"}], d:[{f:"1391-01-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
// TDV: Yalvaç 1381-82'de Akşehir-Beyşehir-Seydişehir ile birlikte
// 80.000 altın karşılığında Osmanlılar'a satıldı.
{ ad:"Yalvaç", tur:"sehir", lat:38.294, lon:31.180, g:0, k:4, m:"Kütahya",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},{f:"1297-01-01",t:"1381-06-01",d:"hamid"},{f:"1402-09-15",t:"1414-06-01",d:"hamid"}], d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}] },
// TDV CANDAROĞULLARI: kurucu Şemseddin Yaman Candar'a İlhanlı hükümdarı
// Geyhatu tarafından Eflani iktâ edildi — beyliğin ilk merkezi, haritada yoktu.
{ ad:"Eflani", tur:"kale", lat:41.418, lon:32.951, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},{f:"1308-01-01",t:"1309-01-01",d:"ilhanli"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
// TDV KARAMANOĞULLARI: Karaman Bey Ermenek-Mut yöresinde faaliyete başladı.
{ ad:"Ermenek", tur:"kale", lat:36.640, lon:32.891, g:0, k:4, m:"Konya",
    s:[{f:"1402-07-28",t:"1402-09-15",d:"timurlu"}, {f:"1281-01-01",t:"1397-07-01",d:"karaman"},{f:"1402-09-15",t:"1468-04-01",d:"karaman"}], d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-04-01",t:"1923-10-29"}] },
// TDV KARESİOĞULLARI: beylik Erdek, Biga, Edremit ve Bergama'ya hâkimdi;
// ilhak 746/1345.
{ ad:"Edremit", tur:"liman", lat:39.596, lon:27.024, g:0, k:4, m:"Bursa",
    s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
{ ad:"Erdek", tur:"liman", lat:40.399, lon:27.795, g:0, k:4, m:"Bursa",
    s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },
// TDV KARAKOYUNLULAR: "Van-Erciş bölgesi merkez olmak üzere" kuruldu.
{ ad:"Erciş", tur:"kale", lat:39.026, lon:43.360, g:0, k:4, m:"Van",
    s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1469-01-01",d:"karakoyunlu"},{f:"1469-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-25",d:"safevi"}], d:[{f:"1548-08-25",t:"1923-10-29"}] },

// ---- Likya kıyısı: ölçülen yoğunluk açığı (en yakın nokta 85-95 km) ----
// Antalya ile Fethiye arasında hiç yerleşim yoktu; kıyı boyasız kalıyordu.
// Zincir Antalya'nınkiyle aynı: Selçuklu → Hamîd → Teke → Osmanlı.
{ ad:"Finike", tur:"liman", lat:36.301, lon:30.145, g:0, k:4, m:"Antalya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1321-01-01",d:"hamid"},{f:"1321-01-01",t:"1392-01-01",d:"teke"},{f:"1402-07-28",t:"1423-01-01",d:"teke"}], d:[{f:"1392-01-01",t:"1402-07-28",y:"savas"},{f:"1423-01-01",t:"1923-10-29"}] },
{ ad:"Kaş (Antiphellos)", tur:"liman", lat:36.202, lon:29.639, g:0, k:4, m:"Antalya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1321-01-01",d:"hamid"},{f:"1321-01-01",t:"1392-01-01",d:"teke"},{f:"1402-07-28",t:"1423-01-01",d:"teke"}], d:[{f:"1392-01-01",t:"1402-07-28",y:"savas"},{f:"1423-01-01",t:"1923-10-29"}] },
{ ad:"Elmalı", tur:"sehir", lat:36.735, lon:29.920, g:0, k:4, m:"Antalya",
    s:[{f:"1281-01-01",t:"1300-01-01",d:"selcuklu"},{f:"1300-01-01",t:"1321-01-01",d:"hamid"},{f:"1321-01-01",t:"1392-01-01",d:"teke"},{f:"1402-07-28",t:"1423-01-01",d:"teke"}], d:[{f:"1392-01-01",t:"1402-07-28",y:"savas"},{f:"1423-01-01",t:"1923-10-29"}] },

// ---- Batı Karadeniz kıyısı ve Ayvalık: ölçülen açıklar ----
// Adapazarı ile Bartın arasındaki ~160 km'lik kıyıda hiç nokta yoktu
// (Bolu 83 km, Ereğli 86 km, Akçakoca 62 km). Ayvalık'ta ise en yakın
// nokta Midilli'ydi: Ceneviz adasının peteği Anadolu anakarasını boyuyordu.
{ ad:"Bolu", tur:"sehir", lat:40.736, lon:31.606, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1325-01-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1325-01-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Konurapa (Düzce)", tur:"kale", lat:40.838, lon:31.163, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1325-01-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1325-01-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Mudurnu", tur:"kale", lat:40.470, lon:31.208, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1325-01-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1325-01-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Karadeniz Ereğli", tur:"liman", lat:41.2846, lon:31.4180, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Devrek", tur:"sehir", lat:41.216, lon:31.955, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Akçakoca", tur:"liman", lat:41.086, lon:31.126, g:0, k:4, m:"Ankara",
    s:[{f:"1281-01-01",t:"1309-01-01",d:"bizans"},{f:"1309-01-01",t:"1392-11-01",d:"candar"},{f:"1402-07-28",t:"1461-06-01",d:"candar"}], d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}] },
{ ad:"Ayvalık", tur:"liman", lat:39.317, lon:26.694, g:0, k:4, m:"Bursa",
    s:[{f:"1281-01-01",t:"1297-01-01",d:"bizans"},{f:"1297-01-01",t:"1345-01-01",d:"karesi"},{f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},{f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},{f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}], d:[{f:"1345-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}] },

// ======= İRAN, IRAK, DOĞU KAFKASYA VE KÖRFEZ (Oturum 4) =======
// 126 yerleşim. Görev tanımı: oturumlar/OTURUM-4-IRAN-YERLESIM.md
// İlerleme notu: oturumlar/OTURUM-4-ILERLEME.md
// Doğrulandı: hepsi 62°D kutusu içinde, devlet kimlikleri renkler.py'de
// tanımlı, ad çakışması yok, 3 km içinde mükerrer yok.
// --------------------------------------------------------------------------
// 1) Batı İran ve Azerbaycan
// --------------------------------------------------------------------------
// Olcaytu'nun Kongur Öleng yaylasında kurdurduğu İlhanlı başşehri; Argun
// Han'ın 1290'da başlattığı inşaat 1305'te şehir hâline geldi. TDV'de
// müstakil madde YOK (arama ile doğrulandı) — İlhanlı literatürü.
{ ad:"Sultâniye", tur:"sehir", lat:36.4318, lon:48.7970, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1305-01-01" },
// Hülâgû'nun ilk merkezi ve Nasîrüddin Tûsî rasathanesi. 1585-1603 ve
// 1725-1730 Osmanlı Tebriz beylerbeyliği pencereleri Tebriz kaydındaki
// tarihlerle birebir aynı.
{ ad:"Merâga", tur:"sehir", lat:37.3894, lon:46.2381, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1585-09-25", t:"1603-10-21"}, {f:"1725-08-04", t:"1730-08-12"}] },
{ ad:"Hoy", tur:"sehir", lat:38.5503, lon:44.9521, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Selmâs (Dilman)", tur:"sehir", lat:38.1983, lon:44.7654, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Merend", tur:"sehir", lat:38.4328, lon:45.7750, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Culfa", tur:"sehir", lat:38.9550, lon:45.6300, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Ahar (Karadağ)", tur:"sehir", lat:38.4772, lon:47.0700, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1585-09-25", t:"1603-10-21"}, {f:"1725-08-04", t:"1730-08-12"}] },
{ ad:"Sarâb", tur:"sehir", lat:37.9408, lon:47.5364, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1585-09-25", t:"1603-10-21"}, {f:"1725-08-04", t:"1730-08-12"}] },
{ ad:"Miyâne", tur:"sehir", lat:37.4247, lon:47.7167, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1585-09-25", t:"1603-10-21"}, {f:"1725-08-04", t:"1730-08-12"}] },
{ ad:"Mâku", tur:"kale", lat:39.2942, lon:44.5142, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Halhâl", tur:"sehir", lat:37.6167, lon:48.5333, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Mîyandoab", tur:"sehir", lat:36.9694, lon:46.1028, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Sakkız", tur:"sehir", lat:36.2461, lon:46.2631, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Erdelân hâkimi Süleyman Han'ın 1636'da kurduğu yeni merkez; öncesinde
// Erdelân merkezi Hasanâbâd idi.
{ ad:"Senendec (Sine)", tur:"sehir", lat:35.3111, lon:46.9961, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1636-01-01" },
{ ad:"Merîvan", tur:"sehir", lat:35.5214, lon:46.1772, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bîcâr", tur:"sehir", lat:35.8728, lon:47.6053, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Osmanlı pencereleri Hemedan kaydıyla aynı (1590-1603, 1724-1730).
{ ad:"Nihâvend", tur:"sehir", lat:34.1911, lon:48.3767, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1590-03-21", t:"1603-10-21"}, {f:"1724-08-31", t:"1730-08-12"}] },
// 1639 Kasr-ı Şîrîn Antlaşması'nın imzalandığı yer; Osmanlı-İran sınırının
// 1639'dan sonra dayandığı hat. 1723-1730 penceresi Kirmanşah kaydıyla aynı.
{ ad:"Kasr-ı Şîrîn", tur:"kale", lat:34.5150, lon:45.5772, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1723-10-01", t:"1730-08-12"}] },

// --------------------------------------------------------------------------
// 2) Irak
// --------------------------------------------------------------------------
// TDV SÂMERRÂ: 892'de başşehirlik bitince hızla çöktü, X. yüzyılda 'harap
// bir köy'dü; XVIII. yüzyılda ~2000 nüfus, 1867'de kaymakamlık oldu.
// Yerleşim hiç kesilmediği için bit: yazılmadı.
{ ad:"Sâmerrâ", tur:"sehir", lat:34.1983, lon:43.8742, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Tikrit", tur:"sehir", lat:34.6072, lon:43.6786, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// 1101-1102'de Mezîdîler'in kurduğu merkez; Kûfe'nin yerini aldı.
{ ad:"Hille", tur:"sehir", lat:32.4828, lon:44.4353, g:0, k:3, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Necef", tur:"sehir", lat:31.9956, lon:44.3153, g:1, k:3, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// TDV KÛFE: XI. yüzyıldan sonra çöktü, İbn Cübeyr 1184'te büyük ölçüde harap
// buldu; nüfus Hille ve Necef'e kaydı. Cami ve çevresinde yerleşim sürdüğü
// için bit: yazılmadı.
{ ad:"Kûfe", tur:"sehir", lat:32.0300, lon:44.4009, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// TDV VÂSIT: 1440'larda Müşa'şa'lar tahrip etti, halk dönüp harabenin
// batısında ikinci bir şehir kurdu; Dicle mecrası değişince köye döndü.
// Kesin terk tarihi verilmediği için bit: YAZILMADI — tarih bulunursa
// eklenmeli.
{ ad:"Vâsıt", tur:"sehir", lat:32.1900, lon:46.2950, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Kût el-Amâre", tur:"sehir", lat:32.5125, lon:45.8189, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// TDV ERBİL: Kanûnî'nin 1535 Irakeyn seferinde Osmanlı'ya katıldı. Kırılma,
// Değişmez 2 için Bağdat'ın fetih tarihine (4 Aralık 1534) hizalandı —
// aradaki fark 28 gün, ±30 gün ölçütünün içinde. XVI. yy Bağdat, XVII.
// yy'dan sonra Şehrizor eyaletine bağlıydı; m: en uzun süre bağlı kaldığı
// merkez olarak Şehrizor seçildi.
{ ad:"Erbil", tur:"sehir", lat:36.1911, lon:44.0092, g:1, k:3, m:"Şehrizor", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Kifri", tur:"sehir", lat:34.6883, lon:44.9639, g:0, k:4, m:"Şehrizor", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Hânekîn", tur:"sehir", lat:34.3519, lon:45.3861, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Tuz Hurmatu", tur:"sehir", lat:34.8828, lon:44.6381, g:0, k:4, m:"Şehrizor", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Halepçe", tur:"sehir", lat:35.1778, lon:45.9861, g:0, k:4, m:"Şehrizor", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// Soran Kürt emirliğinin merkezi; 1836'da Reşid Mehmed Paşa tarafından
// doğrudan idareye bağlandı.
{ ad:"Rewândiz", tur:"kale", lat:36.6069, lon:44.5322, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Akra", tur:"sehir", lat:36.7408, lon:43.8919, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Duhok", tur:"sehir", lat:36.8672, lon:42.9881, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Zaho", tur:"sehir", lat:37.1447, lon:42.6819, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Telafer", tur:"sehir", lat:36.3775, lon:42.4508, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Sincar", tur:"sehir", lat:36.3222, lon:41.8689, g:0, k:4, m:"Musul", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1516-08-24", d:"safevi"}, {f:"1918-11-08", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1516-08-24", t:"1918-11-08", y:"antlasma"}] },
{ ad:"Âne", tur:"sehir", lat:34.4681, lon:41.9364, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Hît", tur:"sehir", lat:33.6414, lon:42.8253, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Fellûce", tur:"sehir", lat:33.3500, lon:43.7844, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
// Midhat Paşa'nın Dülaym aşiretini iskân için 1869'da kurdurduğu kasaba.
// s:/d: zinciri toprağın sahiplerini gösterir; kur: okunmaya başlayınca 1869
// öncesi petek çizilmeyecek.
{ ad:"Ramâdi", tur:"sehir", lat:33.4208, lon:43.3069, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}], kur:"1869-01-01" },
{ ad:"Dîvâniye", tur:"sehir", lat:31.9892, lon:44.9250, g:0, k:4, m:"Bağdat", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1534-12-04", d:"safevi"}, {f:"1623-11-28", t:"1638-12-25", d:"safevi"}, {f:"1917-03-11", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1534-12-04", t:"1623-11-28"}, {f:"1638-12-25", t:"1917-03-11"}] },
{ ad:"Semâve", tur:"sehir", lat:31.3183, lon:45.2811, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1546-01-01", d:"iran"}, {f:"1914-11-22", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1546-01-01", t:"1914-11-22", y:"antlasma"}] },
// Muntefik mutasarrıfı Nâsır Paşa es-Sa'dûn'un 1869'da kurdurduğu kasaba;
// Ramâdi ile aynı iskân siyasetinin ürünü.
{ ad:"Nâsıriye", tur:"sehir", lat:31.0439, lon:46.2572, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1546-01-01", d:"iran"}, {f:"1914-11-22", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1546-01-01", t:"1914-11-22", y:"antlasma"}], kur:"1869-01-01" },
{ ad:"Ammâre", tur:"sehir", lat:31.8356, lon:47.1450, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1546-01-01", d:"iran"}, {f:"1914-11-22", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1546-01-01", t:"1914-11-22", y:"antlasma"}] },
{ ad:"Kürne", tur:"sehir", lat:31.0100, lon:47.4433, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1546-01-01", d:"iran"}, {f:"1914-11-22", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1546-01-01", t:"1914-11-22", y:"antlasma"}] },
// İngiliz çıkarması 6 Kasım 1914'te Fâv'a yapıldı; kırılma Değişmez 2 için
// Basra'nın mevcut tarihine (22 Kasım 1914) hizalandı.
{ ad:"Fâv", tur:"liman", lat:29.9764, lon:48.4722, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1411-01-01", d:"iran"}, {f:"1411-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1546-01-01", d:"iran"}, {f:"1914-11-22", t:"1923-10-29", d:"ingiltere"}], d:[{f:"1546-01-01", t:"1914-11-22", y:"antlasma"}] },

// --------------------------------------------------------------------------
// 3) Orta İran
// --------------------------------------------------------------------------
{ ad:"Kâşân", tur:"sehir", lat:33.9831, lon:51.4100, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Sâve", tur:"sehir", lat:35.0213, lon:50.3566, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Simnân", tur:"sehir", lat:35.5769, lon:53.3972, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Dâmgan", tur:"sehir", lat:36.1683, lon:54.3481, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Bâyezîd-i Bistâmî'nin şehri. Şâhrûd 3 km ötede olduğu için ayrı nokta
// açılmadı (mükerrer kuralı).
{ ad:"Bistâm", tur:"sehir", lat:36.4831, lon:55.0100, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Fethali Şah devrinde Yûsuf Han Gürcî'nin 1808'de kurdurduğu kale-kasaba.
{ ad:"Erâk (Sultânâbâd)", tur:"sehir", lat:34.0917, lon:49.6892, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1808-01-01" },
{ ad:"Gulpâygân", tur:"sehir", lat:33.4550, lon:50.2881, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Erdistan", tur:"sehir", lat:33.3769, lon:52.3697, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Nâin", tur:"sehir", lat:32.8597, lon:53.0850, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// hatalar 4.docx madde 10 — kullanıcının saydığı "brucerd". Luristan 1590-1603
// arası Osmanlı; TDV "LURİSTAN" maddesi Burûcird'i bölgenin en eski ve en büyük
// şehirlerinden biri olarak sayar ("Hürremâbâd, Burûcird ve Şâpûr bölgenin en
// eski şehirleridir") ve aynı madde "998'de (1590) İstanbul'da yapılan antlaşmaya
// göre Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak
// bağladı (1603)" der. Burûcird bölge merkeziyle birlikte hareket eder.
{ ad:"Burûcird", tur:"sehir", lat:33.8972, lon:48.7514, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[{f:"1590-03-21", t:"1603-10-21", y:"antlasma"}] },
{ ad:"Dizfûl", tur:"sehir", lat:32.3831, lon:48.4014, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// TDV ŞÜŞTER: Müstevfî'ye göre Hûzistan'ın merkezi; 1375'te Muzafferîler'e,
// sonra Timurlular'a, 1508'de Şah İsmâil'e geçti.
{ ad:"Şüşter", tur:"sehir", lat:32.0450, lon:48.8564, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Ahvaz", tur:"sehir", lat:31.3200, lon:48.6692, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// TDV MÜŞA'ŞA'LAR: 1435-1924 arası Hûzistan'da Havîza ve çevresine hâkim
// Arap hânedanı; Safevî'ye tâbi özerk emirlik. Kimliği tanımlı olmadığı için
// 'iran'/'safevi' ile boyandı.
{ ad:"Havîza", tur:"sehir", lat:31.4572, lon:48.0750, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Râmhürmüz", tur:"sehir", lat:31.2803, lon:49.6039, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Behbehân", tur:"sehir", lat:30.5956, lon:50.2417, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Abâdân", tur:"liman", lat:30.3392, lon:48.3042, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Benî Kâ'b şeyhlerinin 1812 dolayında kurduğu liman (bugün Hürremşehr);
// 1897-1925 arası Haz'al Han'ın merkezi.
{ ad:"Muhammere", tur:"liman", lat:30.4392, lon:48.1664, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1508-01-01", d:"akkoyunlu"}, {f:"1508-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1812-01-01" },
{ ad:"Erdekân", tur:"sehir", lat:32.3100, lon:54.0169, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1387-11-01", d:"iran"}, {f:"1387-11-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Kâin", tur:"sehir", lat:33.7272, lon:59.1831, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bîrcend", tur:"sehir", lat:32.8650, lon:59.2211, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },

// --------------------------------------------------------------------------
// 4) Güney İran
// --------------------------------------------------------------------------
// TDV BENDERABBAS: Hürmüz karşısındaki Gamrûn iskelesi 1514'te Portekiz'in,
// 1622'de I. Şah Abbas'ın eline geçti; şehir bu tarihten sonra gelişip
// Benderabbas adını aldı. kur: iskeleyi değil ŞEHRİ tarihler.
{ ad:"Bender Abbas (Gamrûn)", tur:"liman", lat:27.2000, lon:56.2740, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1622-05-01" },
// Eski Hürmüz (Hürmüz-i Kadîm) bu ovadaydı; şehir ~1300'de Cerûn adasına
// taşınınca terk edildi. Terk edilen şehir 1281-1923 penceresinin neredeyse
// tamamında ölü olacağı için AYRI NOKTA AÇILMADI (Değişmez 1'i ihlal
// ederdi); yerine bugün de yaşayan Mînâb kondu.
{ ad:"Mînâb", tur:"sehir", lat:27.1467, lon:57.0800, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Lâr", tur:"sehir", lat:27.6811, lon:54.3175, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Kâzerûn", tur:"sehir", lat:29.6186, lon:51.6542, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Fesâ", tur:"sehir", lat:28.9383, lon:53.6483, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Dârâb", tur:"sehir", lat:28.7519, lon:54.5444, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Cehrom", tur:"sehir", lat:28.5000, lon:53.5600, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Firûzâbâd", tur:"sehir", lat:28.8438, lon:52.5713, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Ebrekûh", tur:"sehir", lat:31.1281, lon:53.2814, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Nâdir Şah'ın 1734'te donanma üssü yaptığı liman; Reşîre köyünün yerinde
// kuruldu ve XVIII. yüzyılda körfezin ana İran limanı oldu.
{ ad:"Buşehr", tur:"liman", lat:28.9684, lon:50.8385, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1734-01-01" },
{ ad:"Bender Rîg", tur:"liman", lat:29.4975, lon:50.6451, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bender Lengeh", tur:"liman", lat:26.5578, lon:54.8811, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Sircân", tur:"sehir", lat:29.4500, lon:55.6800, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bem", tur:"kale", lat:29.1061, lon:58.3572, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Rafsencân", tur:"sehir", lat:30.4078, lon:55.9944, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Cîruft", tur:"sehir", lat:28.6750, lon:57.7372, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Câsk", tur:"liman", lat:25.6450, lon:57.7742, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Çâhbahâr", tur:"liman", lat:25.2919, lon:60.6431, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Belûcistan'ın tarihî merkez kalesi; bölge idarî olarak Kirman'ı izledi,
// fiilen Belûc hanlarının elindeydi.
{ ad:"Bempûr", tur:"kale", lat:27.1975, lon:60.4586, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Serhad Belûcistanı. Zâhidân (Duzdâb) 1930'larda kurulduğu için eklenmedi —
// zaman penceresinin dışında.
{ ad:"Hâş", tur:"sehir", lat:28.2211, lon:61.2158, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1393-01-01", d:"iran"}, {f:"1393-01-01", t:"1452-01-01", d:"timurlu"}, {f:"1452-01-01", t:"1469-01-01", d:"karakoyunlu"}, {f:"1469-01-01", t:"1503-01-01", d:"akkoyunlu"}, {f:"1503-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// TDV SÎSTAN: bölgenin en büyük şehri ve merkezi; Timur 785 (1383) seferinde
// üç gün yağmalattı, sulama düzeni yıkılınca şehir bir daha toparlanamadı.
// ⚠️ bit: yazıldı ama motor okumadığı için s: zinciri Değişmez 1'i bozmamak
// adına 1923'e kadar tam bırakıldı.
{ ad:"Zerenc (Sîstan)", tur:"sehir", lat:30.9583, lon:61.8611, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], bit:"1383-01-01" },

// --------------------------------------------------------------------------
// 5) Kuzeydoğu İran (Horasan)
// --------------------------------------------------------------------------
// TDV NÎŞÂBUR: 15 Safer 618 (10 Nisan 1221) Moğol istilâsında yıkıldı,
// İlhanlı devrinde kısmen toparlandı; 23 Kasım 1405 depreminde tamamen harap
// olup BUGÜNKÜ YERİNDE yeniden kuruldu. Yerleşim hiç kesilmediği için bit:
// yazılmadı.
{ ad:"Nîşâbur", tur:"sehir", lat:36.2133, lon:58.7958, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// Mîrân Şah'ın 1389'daki tahribinden sonra Tûs bir daha toparlanamadı; nüfus
// 25 km güneydoğudaki Meşhed'e taşındı. ⚠️ bit: yazıldı, s: zinciri Değişmez
// 1 için tam bırakıldı.
{ ad:"Tûs", tur:"sehir", lat:36.4869, lon:59.5222, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], bit:"1389-01-01" },
// Serbedârîler'in (1337-1381) merkezi. Kimlik tanımlı olmadığı için o
// pencere 'iran' ile boyandı.
{ ad:"Sebzevâr", tur:"sehir", lat:36.2133, lon:57.6792, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Turşiz (Kâşmer)", tur:"sehir", lat:35.2383, lon:58.4658, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Turbet-i Haydariye", tur:"sehir", lat:35.2739, lon:59.2189, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Turbet-i Câm", tur:"sehir", lat:35.2439, lon:60.6242, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Serahs", tur:"sehir", lat:36.5386, lon:61.1611, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Kelât-ı Nâdirî", tur:"kale", lat:36.9833, lon:59.7500, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Kûçân", tur:"sehir", lat:37.1000, lon:58.5100, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bocnûrd", tur:"sehir", lat:37.4744, lon:57.3292, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Esferâyin", tur:"sehir", lat:37.0769, lon:57.5100, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1381-01-01", d:"iran"}, {f:"1381-01-01", t:"1507-05-24", d:"timurlu"}, {f:"1507-05-24", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },

// --------------------------------------------------------------------------
// 6) Hazar kıyısı ve Doğu Kafkasya
// --------------------------------------------------------------------------
// Karkiya hânedanının merkezi; Şah İsmâil çocukluğunu burada geçirdi.
{ ad:"Lâhîcan", tur:"sehir", lat:37.2072, lon:50.0044, g:0, k:0, s:[{f:"1281-01-01", t:"1592-01-01", d:"iran"}, {f:"1592-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bender Enzeli", tur:"liman", lat:37.4728, lon:49.4622, g:0, k:0, s:[{f:"1281-01-01", t:"1592-01-01", d:"iran"}, {f:"1592-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Sârî", tur:"sehir", lat:36.5633, lon:53.0601, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1596-01-01", d:"iran"}, {f:"1596-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Âmül", tur:"sehir", lat:36.4697, lon:52.3508, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1596-01-01", d:"iran"}, {f:"1596-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Bârfurûş (Bâbil)", tur:"sehir", lat:36.5461, lon:52.6789, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1596-01-01", d:"iran"}, {f:"1596-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// I. Şah Abbas'ın 1611'de Tecen ağzında kurdurduğu yazlık başşehir ve liman;
// 1668 Kazak baskınından sonra söndü.
{ ad:"Ferahâbâd", tur:"liman", lat:36.7200, lon:52.8600, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1596-01-01", d:"iran"}, {f:"1596-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[], kur:"1611-01-01" },
{ ad:"Eşref (Behşehr)", tur:"sehir", lat:36.6942, lon:53.5522, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1596-01-01", d:"iran"}, {f:"1596-01-01", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
// TDV ESTERÂBÂD: 1510'da Şah İsmâil aldı; 1786'dan sonra Kaçar merkezi.
// 1926'da adı Gürgân oldu.
{ ad:"Esterâbâd (Gürgân)", tur:"sehir", lat:36.8381, lon:54.4342, g:1, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1510-12-02", d:"iran"}, {f:"1510-12-02", t:"1723-09-23", d:"safevi"}, {f:"1723-09-23", t:"1734-01-01", d:"rusya"}, {f:"1734-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1923-10-29", d:"iran"}], d:[] },
{ ad:"Astara", tur:"liman", lat:38.4292, lon:48.8728, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1828-02-22", d:"iran"}, {f:"1828-02-22", t:"1923-10-29", d:"rusya"}], d:[] },
// TDV TALİŞ HANLIĞI: XVIII. yüzyılda kurulan hanlık; 1828 Türkmençay ile
// Rusya'ya geçti.
{ ad:"Lenkeran", tur:"sehir", lat:38.7539, lon:48.8508, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1828-02-22", d:"iran"}, {f:"1828-02-22", t:"1923-10-29", d:"rusya"}], d:[] },
{ ad:"Salyan", tur:"sehir", lat:39.5958, lon:48.9800, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1538-01-01", d:"iran"}, {f:"1538-01-01",t:"1723-09-23",d:"safevi"},{f:"1723-09-23",t:"1732-01-21",d:"rusya"},{f:"1732-01-21",t:"1736-03-08",d:"safevi"}, {f:"1736-03-08", t:"1813-10-24", d:"iran"}, {f:"1813-10-24", t:"1923-10-29", d:"rusya"}], d:[{f:"1578-11-01", t:"1607-01-01"}] },
// TDV KUBA: Kuzey Azerbaycan'da XVIII. yüzyılda hanlık merkezi. 1583-1607
// penceresi Derbend kaydıyla aynı. 1723-1735'te Hazar kıyısı OSMANLI DEĞİL
// Rus idaresindeydi; mevcut Derbend ve Bakü kayıtlarında da o pencere yazılı
// değildir, burada da yazılmadı.
{ ad:"Kuba", tur:"sehir", lat:41.3603, lon:48.5158, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1538-01-01", d:"iran"}, {f:"1538-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1813-10-24", d:"iran"}, {f:"1813-10-24", t:"1923-10-29", d:"rusya"}], d:[{f:"1583-01-01", t:"1607-01-01"}] },
// 1578-1607 Osmanlı Şirvan beylerbeyliğinin sancağı; pencere Şamahı kaydıyla
// aynı.
{ ad:"Şeki (Nuha)", tur:"sehir", lat:41.1919, lon:47.1706, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1538-01-01", d:"iran"}, {f:"1538-01-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1813-10-24", d:"iran"}, {f:"1813-10-24", t:"1923-10-29", d:"rusya"}], d:[{f:"1578-11-01", t:"1607-01-01"},{f:"1725-09-12",t:"1735-06-19"}] },
// Osmanlı pencereleri Gence-Karabağ beylerbeyliğinin merkezi olan Gence
// kaydıyla aynı (1588-1606, 1725-1735).
{ ad:"Berde (Karabağ)", tur:"sehir", lat:40.3747, lon:47.1281, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1813-10-24", d:"iran"}, {f:"1813-10-24", t:"1923-10-29", d:"rusya"}], d:[{f:"1588-01-01", t:"1606-01-01"}, {f:"1725-09-12", t:"1735-06-19"}] },
// Penâh Ali Han'ın 1752'de kurdurduğu Karabağ hanlığı merkezi. 1752'de
// kurulduğu için Osmanlı pencereleri yazılmadı.
{ ad:"Şuşa", tur:"kale", lat:39.7558, lon:46.7492, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1813-10-24", d:"iran"}, {f:"1813-10-24", t:"1923-10-29", d:"rusya"}], d:[], kur:"1752-01-01" },
{ ad:"Ordubad", tur:"sehir", lat:38.9053, lon:46.0242, g:0, k:0, s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"}, {f:"1335-12-01", t:"1386-01-01", d:"iran"}, {f:"1386-01-01", t:"1406-10-21", d:"timurlu"}, {f:"1406-10-21", t:"1468-04-01", d:"karakoyunlu"}, {f:"1468-04-01", t:"1501-07-01", d:"akkoyunlu"}, {f:"1501-07-01", t:"1736-03-08", d:"safevi"}, {f:"1736-03-08", t:"1828-02-22", d:"iran"}, {f:"1828-02-22", t:"1923-10-29", d:"rusya"}], d:[{f:"1585-01-01", t:"1603-10-21"}, {f:"1725-01-01", t:"1730-08-12"}] },

// --------------------------------------------------------------------------
// 7) Körfez ve Doğu Arabistan
// --------------------------------------------------------------------------
{ ad:"Katîf", tur:"liman", lat:26.5570, lon:49.9873, g:0, k:3, m:"Basra", s:[{f:"1281-01-01", t:"1550-01-01", d:"iran"}, {f:"1670-01-01", t:"1795-04-01", d:"benihalid"}, {f:"1795-04-01",t:"1818-09-09",d:"suud"},{f:"1818-09-09",t:"1841-10-01",d:"benihalid"},{f:"1841-10-01",t:"1871-04-20",d:"suud"}, {f:"1913-07-08", t:"1923-10-29", d:"suud"}], d:[{f:"1550-01-01", t:"1670-01-01", y:"vassal"}, {f:"1871-04-20", t:"1913-07-08", y:"savas"}] },
{ ad:"Ukayr (Uceyr)", tur:"liman", lat:25.6500, lon:50.2131, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1550-01-01", d:"iran"}, {f:"1670-01-01", t:"1795-04-01", d:"benihalid"}, {f:"1795-04-01",t:"1818-09-09",d:"suud"},{f:"1818-09-09",t:"1841-10-01",d:"benihalid"},{f:"1841-10-01",t:"1871-04-20",d:"suud"}, {f:"1913-07-08", t:"1923-10-29", d:"suud"}], d:[{f:"1550-01-01", t:"1670-01-01", y:"vassal"}, {f:"1871-04-20", t:"1913-07-08", y:"savas"}] },
// hatalar 6.docx madde 9 — kullanıcı: "lahsa kaybedilince tüm bu toprak elden
// gitti mi katif filan". TEYİD: evet, eyaletin tamamı gitti — Lahsa ve Ukayr
// kayıtlarının ikisi de 1670-01-01'de "benihalid"e geçiyor, yani Benî Hâlid
// kabilesi bütün eyaleti aldı, kıyıda Osmanlı'da kalan bir parça YOK.
// Ama Katîf'in kendi noktası yoktu: körfez kıyısının 100 km'lik bu bölümü
// Ukayr'ın peteğine düşüyordu ve şehir adıyla haritada hiç görünmüyordu.
// Zincir Ukayr'ın birebir aynısı (aynı eyalet, aynı el değiştirme günleri).
// ⚠️ Katîf noktası ZATEN VARDI (aşağıda, k:3) — bu satıra eklediğim mükerrer
// kayıt silindi. Hatanın sebebi: "Katif" diye aradım, kayıt "Katîf" (î) yazılı;
// düzeltmeli harfle arama yapmadığım için yok sandım. Yeni nokta eklerken
// arama Türkçe düzeltmeli harfleri KATLAYARAK yapılmalı (bkz. denetle.py
// mükerrer kontrolündeki _KATLA tablosu).
{ ad:"Cübeyl", tur:"liman", lat:26.9979, lon:49.6406, g:0, k:4, m:"Basra", s:[{f:"1281-01-01", t:"1550-01-01", d:"iran"}, {f:"1670-01-01", t:"1795-04-01", d:"benihalid"}, {f:"1795-04-01",t:"1818-09-09",d:"suud"},{f:"1818-09-09",t:"1841-10-01",d:"benihalid"},{f:"1841-10-01",t:"1871-04-20",d:"suud"}, {f:"1913-07-08", t:"1923-10-29", d:"suud"}], d:[{f:"1550-01-01", t:"1670-01-01", y:"vassal"}, {f:"1871-04-20", t:"1913-07-08", y:"savas"}] },
{ ad:"Buraydâ (Kasîm)", tur:"sehir", lat:26.3594, lon:43.9814, g:0, k:0, s:[{f:"1744-01-01", t:"1818-09-09", d:"suud"}, {f:"1824-06-01", t:"1891-01-01", d:"suud"}, {f:"1891-01-01", t:"1902-01-15", d:"sammar"}, {f:"1902-01-15", t:"1923-10-29", d:"suud"}], d:[], v:[{f:"1818-09-09", t:"1824-06-01", k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Uneyze", tur:"sehir", lat:26.0878, lon:43.9939, g:0, k:0, s:[{f:"1744-01-01", t:"1818-09-09", d:"suud"}, {f:"1824-06-01", t:"1891-01-01", d:"suud"}, {f:"1891-01-01", t:"1902-01-15", d:"sammar"}, {f:"1902-01-15", t:"1923-10-29", d:"suud"}], d:[], v:[{f:"1818-09-09", t:"1824-06-01", k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Şakrâ", tur:"sehir", lat:25.2394, lon:45.2531, g:0, k:0, s:[{f:"1744-01-01", t:"1818-09-09", d:"suud"}, {f:"1824-06-01", t:"1891-01-01", d:"suud"}, {f:"1891-01-01", t:"1902-01-15", d:"sammar"}, {f:"1902-01-15", t:"1923-10-29", d:"suud"}], d:[], v:[{f:"1818-09-09", t:"1824-06-01", k:"Mısır (İbrâhim Paşa)"}] },
{ ad:"Suhâr", tur:"liman", lat:24.3472, lon:56.7092, g:0, k:0, s:[{f:"1281-01-01", t:"1507-01-01", d:"umman"}, {f:"1507-01-01", t:"1650-01-26", d:"portekiz"}, {f:"1650-01-26", t:"1923-10-29", d:"umman"}], d:[] },
{ ad:"Sûr", tur:"liman", lat:22.5550, lon:59.5200, g:0, k:0, s:[{f:"1281-01-01", t:"1507-01-01", d:"umman"}, {f:"1507-01-01", t:"1650-01-26", d:"portekiz"}, {f:"1650-01-26", t:"1923-10-29", d:"umman"}], d:[] },
{ ad:"Buraymî", tur:"sehir", lat:24.2500, lon:55.7931, g:0, k:0, s:[{f:"1281-01-01", t:"1507-01-01", d:"umman"}, {f:"1507-01-01", t:"1650-01-26", d:"portekiz"}, {f:"1650-01-26", t:"1923-10-29", d:"umman"}], d:[] },
{ ad:"Ras el-Hayme (Cülfâr)", tur:"liman", lat:25.7896, lon:55.9417, g:0, k:0, s:[{f:"1281-01-01", t:"1515-04-01", d:"iran"}, {f:"1515-04-01", t:"1622-05-01", d:"portekiz"}, {f:"1622-05-01", t:"1820-01-08", d:"umman"}, {f:"1820-01-08", t:"1923-10-29", d:"ingiltere"}], d:[] },
{ ad:"Şârika", tur:"liman", lat:25.3573, lon:55.3911, g:0, k:0, s:[{f:"1281-01-01", t:"1515-04-01", d:"iran"}, {f:"1515-04-01", t:"1622-05-01", d:"portekiz"}, {f:"1622-05-01", t:"1820-01-08", d:"umman"}, {f:"1820-01-08", t:"1923-10-29", d:"ingiltere"}], d:[] },

// ======= HAZAR DOĞUSU VE HAREZM (Oturum 11) =======
// 16 yerleşim. Sebep ölçüldü: Türkmenbaşı'nın en yakın yerleşimi BAKÜ idi,
// 269 km, denizin öbür yakasında — Bakü'nün peteği Hazar'ı aşıp doğu
// kıyısında yeniden beliriyor, Osmanlı Şirvan'ı alınca doğu kıyısı da
// Osmanlı boyanıyordu. Görev tanımı: oturumlar/OTURUM-11-ORTA-ASYA.md
// ===== 1. HAZAR DOĞU KIYISI (51-56°D) — bildirilen hatayı doğrudan kapatan beş nokta =====

// Krasnovodsk 1869'da Albay Stoletov'un çıkarmasıyla kuruldu; öncesinde
// Kızılsu koyunda şehir yoktur (TDV TÜRKMENİSTAN: "1869: Krasnovodsk
// alındı, resmî ilhak başladı"). kur: bu yüzden yazıldı; 1869 öncesi boşluk
// KASITLIDIR — o kıyının o tarihteki sahibi komşu Çeleken noktası taşıyor.
{ ad:"Krasnovodsk (Türkmenbaşı)", tur:"liman", lat:40.0220, lon:52.9600, g:1, k:0, d:[],
  kur:"1869-01-01",
  s:[{f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// Çeleken yarımadası ve Balhan sahili. TDV MANGIŞLAK, Balhan bölgesini
// Mangışlak ve kuzey Harezm ile aynı siyasî zincire koyar; zincir birebir
// Mangışlak kaydındakidir, tek fark Rus ilhakının 1869'da (Mangışlak'ta
// 1881'de) gerçekleşmesidir. Koordinat maske yüzünden ~3 km kaydırıldı.
{ ad:"Çeleken", tur:"bolge", lat:39.4600, lon:53.1400, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1869-01-01", d:"turkmen"},
     {f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// Kara Boğaz'ın batı kordonu (Bekdaş). Hazar'ın doğu kıyısının 41-42° kuşağı
// Krasnovodsk'a 175 km, Mangışlak'a 380 km — bu nokta olmadan kıyı ortası
// yine karşı yakadan emiliyordu.
{ ad:"Garabogaz (Bekdaş)", tur:"bolge", lat:41.5619, lon:52.6014, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1869-01-01", d:"turkmen"},
     {f:"1869-01-01", t:"1923-10-29", d:"rusya"}] },

// TDV MANGIŞLAK: XIV. yy ortasında Altın Orda'ya katıldı; XVI. yy başında
// Hîve Hanlığı'na girdi; "yaklaşık bir asır sonra" Türkmen boyları göreli
// bağımsızlığını geri kazandı; XVII. yy'da Kalmuk akınları, 1840'a kadar
// Kazak Bayûlı ve Aday boylarının yerleşmesi; 1881'de Kafkasya idarî
// bölgesine bağlandı. 1840-1881 arası nüfus Kazak'tır ama ayrı bir devlet
// kurulmadığı için pencere "turkmen" (boy düzeni) altında bırakıldı.
// Koordinat: Tüp-Karagan burnu, Fort Şevçenko (tarihî demirleme yeri).
{ ad:"Mangışlak", tur:"bolge", lat:44.5100, lon:50.2670, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1502-01-01", d:"altinorda"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1600-01-01", d:"hive"},
     {f:"1600-01-01", t:"1881-01-01", d:"turkmen"},
     {f:"1881-01-01", t:"1923-10-29", d:"rusya"}] },

// Meşhed-i Misriyân ovası — ortaçağ Dihistan'ı. Şehir Moğol istilâsından
// sonra toparlanamadı; nokta ŞEHİR değil OVA olarak konuldu (tur:"bolge"),
// çünkü hangi yüzyılda büsbütün terk edildiği TDV'de yazılı değil ve uydurma
// bir bit: tarihi yazmaktan kaçınıldı. Zincir, güney komşusu Esterâbâd
// (Gürgân) ile hizalıdır; ayrıldığı tek yer 1860 sonrasıdır: Etrek'in
// KUZEYİ 1881 Ahal düzenlemesiyle Rus tarafında kaldı, Esterâbâd İran'da.
// Not: Esterâbâd'ın 1723-1734 Rus penceresi (Petro'nun Hazar seferi)
// buraya UYGULANMADI — 1723 antlaşması Gîlân, Mâzenderan ve Esterâbâd'ı
// kapsar, Etrek kuzeyindeki Türkmen bozkırını değil.
{ ad:"Dihistan ovası (Meşhed-i Misriyân)", tur:"bolge", lat:38.1667, lon:54.6333, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// ===== 2. ÇÖL DOLGULARI — kasten sahipsiz, mevcut "Karakum" ile aynı desen =====

// Uzboy, Amuderya'nın Hazar'a akan kurumuş eski yatağı. 1576'da Amuderya
// mecrasını değiştirip Aral'a döküldü (TDV HÂRİZM); yatak bütünüyle çöl.
// Susuz, devletsiz. Krasnovodsk'a 216 km, Karakum'a 261 km — ikisinin
// arasındaki 475 km'lik açığı kapatır.
{ ad:"Uzboy", tur:"bolge", lat:39.9000, lon:55.5000, g:0, k:0, d:[] },

// Üstyurt, Hazar ile Aral arasındaki susuz kireçtaşı platosu. Yerleşim yok;
// Türkmen, Kazak ve Karakalpak boylarının geçiş güzergâhı. Hîve'nin iddiası
// vardı ama fiilî idare kurulmadığı için sahip yazılmadı (MIMARI.md §6:
// "burada kimse yoktu" ile "burasını bilmiyoruz" farklı iddialardır — bu
// devletsizliktir). İki nokta gerekti: Mangışlak ile Küngrat arası 474 km.
{ ad:"Üstyurt platosu (batı)", tur:"bolge", lat:43.8000, lon:53.5000, g:0, k:0, d:[] },
{ ad:"Üstyurt platosu (doğu)", tur:"bolge", lat:43.5000, lon:56.5000, g:0, k:0, d:[] },

// ===== 3. HAREZM (58-62°D) =====

// TDV HÂRİZM: 1256'dan sonra "Kâs ve Hîve Çağatay ulusuna bırakıldı" —
// GÜNEY Harezm'in 1281'deki sahibi Çağatay Hanlığı'dır, Altın Orda değil.
// Timur bölgeyi 1379'da kesin olarak aldı. Şeybânî Han 1502'de işgal etti.
// İlbars Han 1512'de Hîve Hanlığı'nı kurdu. Nâdir Şah 1740'ta Hîve'yi topa
// tuttu ve İlbars Han'ı idam ettirdi; hanlık, Nâdir'in 20 Haziran 1747'de
// öldürülmesine kadar Afşar hâkimiyetinde kaldı.
// ⚠️ 29 Mayıs 1873'te hanlık Rus vasalı oldu ama HANEDAN ve idare yerinde
// kaldı; bu yüzden 1873'te kimlik DEĞİŞTİRİLMEDİ. Gerçek kopuş, son han
// Seyyid Abdullah'ın 2 Şubat 1920'de çekilmesi ve 26 Nisan 1920'de Hârizm
// Halk Cumhuriyeti'nin ilânıdır.
{ ad:"Hîve", tur:"sehir", lat:41.3783, lon:60.3639, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"cagatay"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Hazârasp, Hîve'nin 55 km doğusunda, Amuderya'nın sol kıyısındaki eski
// kale. Güney Harezm'dedir, zinciri Hîve ile aynıdır.
// ⚠️ TDV'de "Hazarasp" başlıklı madde YOKTUR (arama sıfır sonuç verdi);
// zincir, HÂRİZM maddesinin bölge tarihinden türetilmiştir.
{ ad:"Hazârasp", tur:"kale", lat:41.3200, lon:61.0700, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"cagatay"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Köhne Ürgenç = ortaçağ Gürgenç'i, Harezm'in idarî ve iktisadî merkezi.
// KUZEY Harezm'dedir; TDV HÂRİZM'e göre Cuci ulusunda (Altın Orda) kaldı —
// 55 km güneydeki Hîve'den AYRI bir zincirle başlaması bunun sonucudur.
// Moğollar 1221'de yıktı, şehir Ceyhun'un başka bir kolunda yeniden kuruldu.
// Timur 1388'de ahaliyi Semerkant'a sürdü ve yerine arpa ektirdi; Timurlular
// (Şâhruh) yeniden imar etti. Amuderya 1576'da mecrasını değiştirince şehir
// susuz kaldı; TDV GÜRGENÇ: "1645'ten sonra Hîve'nin kuzeydoğusunda" Yeni
// Ürgenç kuruldu ve eski şehir terk edildi.
// ⚠️ bit: yazıldı ama sahiplik zinciri 1923'e kadar TAM bırakıldı — motor
// bit:'i okumadığı için kesilseydi Değişmez 1 ihlal olurdu.
{ ad:"Köhne Ürgenç (Gürgenç)", tur:"sehir", lat:42.3417, lon:59.1500, g:1, k:0, d:[],
  bit:"1646-01-01",
  s:[{f:"1281-01-01", t:"1379-01-01", d:"altinorda"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Yeni Ürgenç — TDV GÜRGENÇ: "1645'ten sonra" kuruldu. Bugünkü Özbekistan'ın
// Ürgenç şehri. Köhne Ürgenç'ten 100 km güneydoğuda, Hîve'ye 29.5 km.
// Ayrı kayıt olmasının sebebi zaman boyutudur: kur:/bit: okunur hâle
// geldiğinde 1646'da sahneye çıkması, Köhne Ürgenç'in aynı gün sahneden
// çekilmesi gerekir. Bugün ikisi de petek taşıyor, sahipleri aynı olduğu
// için haritada fark görünmez.
{ ad:"Yeni Ürgenç", tur:"sehir", lat:41.5500, lon:60.6333, g:0, k:0, d:[],
  kur:"1646-01-01",
  // 1646 öncesi: Köhne Ürgenç'in (Gürgenç) zinciri AYNEN taşındı. Amuderya
  // yatak değiştirince şehir taşındı, egemen değişmedi — 1646'nın her iki
  // yanında da `hive`. Yani bu kopya yeni bir tarihî iddia ÜRETMEZ, var olan
  // kaydı aynalar. `kasitli_bosluk` KALDIRILDI: toprak boş değildi, Köhne
  // Ürgenç'in peteği zaten taşıyordu. (Ölçüm: VERİ ORTASYA, canlı veriden
  // `node -e` ile okundu — proje kendi yükleyicisiyle doğrulandı.)
  s:[{f:"1281-01-01", t:"1379-01-01", d:"altinorda"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// Küngrat, Amuderya deltasında, Aral'ın güney kıyısında. Kuzey Harezm
// zinciri (Köhne Ürgenç ile aynı). Aral'ın güney kıyısı bu nokta olmadan
// Karakum dolgusuna 399 km uzaktaydı.
{ ad:"Küngrat", tur:"sehir", lat:43.0833, lon:58.8333, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1379-01-01", d:"altinorda"},
     {f:"1379-01-01", t:"1502-01-01", d:"timurlu"},
     {f:"1502-01-01", t:"1512-01-01", d:"buhara"},
     {f:"1512-01-01", t:"1740-01-01", d:"hive"},
     {f:"1740-01-01", t:"1747-06-20", d:"iran"},
     {f:"1747-06-20", t:"1920-04-26", d:"hive"},
     {f:"1920-04-26", t:"1923-10-29", d:"rusya"}] },

// ===== 4. KUZEY HORASAN — Kopet Dağ'ın kuzey eteği (58-62°D) =====

// Nesâ, Ahal vahasının ortaçağ merkezi; bugünkü Aşkabad'ın 17 km batısı.
// 1736'ya kadarki zincir komşu Kûçân, Kelât-ı Nâdirî ve Serahs kayıtlarıyla
// BİREBİR aynıdır (yerlesimler.js). Ayrıldığı yer 1860 sonrasıdır:
// TDV TÜRKMENİSTAN, Türkmen boylarının "yaklaşık 1860-1884" arasında fiilî
// bağımsızlık kazandığını, Aşkabad'ın 30 Ocak 1881'de işgal edildiğini yazar.
// ⚠️ TDV'de "Nesâ" başlıklı şehir maddesi YOKTUR; zincir TÜRKMENİSTAN ve
// komşu yerleşim kayıtlarından türetilmiştir.
{ ad:"Nesâ", tur:"sehir", lat:37.9667, lon:58.1833, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// Ebîverd, Ahal vahasının doğu ucu (bugünkü Kâhka yakını). Nesâ ile Serahs
// arasındaki 210 km'lik açığı kapatır; zinciri Nesâ ile aynıdır.
{ ad:"Ebîverd", tur:"sehir", lat:37.9000, lon:59.6167, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1860-01-01", d:"iran"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30", t:"1923-10-29", d:"rusya"}] },

// Merv. TDV MERV: Tuluy 1221'de yıktı; Hülâgû'dan sonra İlhanlı toprağı;
// Şâhruh 812/1410'da yeni bir bent yaptırıp sulama kanallarını açtırdı;
// Şah İsmâil'in 916/1510'da Şeybânî Han'ı yenmesinden sonra Safevî; "XII.
// (XVIII.) yüzyılda Buhara Emîri Murad Han'ın Murgāb Bendi'ni yıkıp halkı
// sürgüne yollaması yüzünden canlılığını tamamen kaybetti"; 1884'te Ruslar
// aldı.
// ⚠️ TDV Buhara yıkımına YIL VERMİYOR. 1785 uydurulmadı: TDV BUHARA HANLIĞI
// Mangıt hanedanının 1785'te başladığını yazar, Murad Han da ilk Mangıt
// emîridir — pencere hanedanın başına yaslandı, gün yazılmadı.
// ⚠️ KOORDİNAT: ortaçağ Merv'i (Sultan Kale) 37.662/62.192'de, kutunun
// 0.19° dışında. Nokta vahanın batı ucuna (Mari) konuldu; kutu açılınca
// 37.662/62.192'ye taşınmalıdır.
{ ad:"Merv (Mari)", tur:"sehir", lat:37.5936, lon:61.8333, g:1, k:0, d:[],
  s:[{f:"1281-01-01", t:"1335-12-01", d:"ilhanli"},
     {f:"1335-12-01", t:"1381-01-01", d:"iran"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08", t:"1785-01-01", d:"iran"},
     {f:"1785-01-01", t:"1860-01-01", d:"buhara"},
     {f:"1860-01-01", t:"1884-01-01", d:"turkmen"},
     {f:"1884-01-01", t:"1923-10-29", d:"rusya"}] },

// ---- hatalar 1.docx: madde 1 (Kanina eksikti) ve madde 9 (Eğriboz'un
// kuzeyinde nokta yoktu, en yakını denizin ötesindeki İskiathos'tu) ----
{ ad:"Kanina", tur:"kale", lat:40.421, lon:19.507, g:0, k:4, m:"Avlonya",
    s:[{f:"1281-01-01",t:"1417-01-01",d:"napoli"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk"}],
    d:[{f:"1417-01-01",t:"1912-11-28",y:"kusatma"}] },
{ ad:"Oreoi (İstiaia)", tur:"kale", lat:38.951, lon:23.093, g:0, k:4, m:"Eğriboz",
    s:[{f:"1281-01-01",t:"1470-07-12",d:"venedik"},{f:"1829-05-01",t:"1923-10-29",d:"yunanistan"}], d:[{f:"1470-07-12",t:"1829-05-01"}] },

// ---------------- FIRAT KAVSİ (hatalar 2.docx madde 4) ----------------
// Malatya-Harput-Diyarbekir üçgeninin ortasında HİÇ nokta yoktu; bölge komşu
// Memlük/Safevî peteklerine emilip 1516 ilkbaharında bir bütün hâlinde
// yabancı renge boyanıyordu (MIMARI.md §2 — 'noktası olmayan bölge en yakın
// peteğe emilir'). Kullanıcı bunu 1516 ekran görüntüsünde gördü.
//
// Zincirler UYDURULMADI, komşularından alındı — ilk denemede uydurulmuştu ve
// Değişmez 3 çelişki sayısını 381'den 394'e çıkararak yakaladı:
//   Divriği · Arapkir · Adıyaman · Behisni · Kâhta → MALATYA'nın zinciri.
//     Yıldırım'ın 1399 seferi Malatya ile birlikte bu dördünü de Memlükler'den
//     aldı, 1402'de Timur'la hepsi elden çıktı, 1516 Mercidabık'la geri geldi.
//   Çemişgezek · Palu → HARPUT'un zinciri (Artuklu-Akkoyunlu-Safevî hattı,
//     1516-05-01 Bıyıklı Mehmed Paşa'nın Diyarbekir harekâtı).
//   Siverek -> URFA'nın zinciri (Koçhisar Savaşı ile birlikte alındı).
// Çemişgezek ve Palu Osmanlı'da hükümet (irsî özerk sancak) statüsündeydi;
// eyalet sınırları içinde sayıldıkları için d: ile yazıldı.
{ ad:"Divriği", tur:"kale", lat:39.371, lon:38.117, g:1, k:4, m:"Malatya", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Arapkir", tur:"sehir", lat:39.041, lon:38.492, g:1, k:4, m:"Malatya", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Hısn-ı Mansûr (Adıyaman)", tur:"sehir", lat:37.764, lon:38.278, g:1, k:4, m:"Malatya", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Behisni (Besni)", tur:"kale", lat:37.693, lon:37.86, g:1, k:4, m:"Malatya", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Kâhta", tur:"kale", lat:37.783, lon:38.622, g:1, k:4, m:"Malatya", s:[{f:"1281-01-01",t:"1399-09-01",d:"memluk"},{f:"1402-07-28",t:"1516-08-24",d:"memluk"}], d:[{f:"1399-09-01",t:"1402-07-28",y:"savas"},{f:"1516-08-24",t:"1923-10-29"}] },
{ ad:"Çemişgezek", tur:"sehir", lat:39.062, lon:38.912, g:1, k:4, m:"Diyarbakır", s:[{f:"1281-01-01",t:"1465-01-01",d:"artuklu"},{f:"1465-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}] },
{ ad:"Palu", tur:"kale", lat:38.694, lon:39.937, g:1, k:4, m:"Diyarbakır", s:[{f:"1281-01-01",t:"1465-01-01",d:"artuklu"},{f:"1465-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}] },
{ ad:"Siverek", tur:"sehir", lat:37.754, lon:39.317, g:1, k:4, m:"Urfa", s:[{f:"1281-01-01",t:"1465-01-01",d:"memluk"},{f:"1465-01-01",t:"1507-01-01",d:"akkoyunlu"},{f:"1507-01-01",t:"1516-05-01",d:"safevi"}], d:[{f:"1516-05-01",t:"1923-10-29"}] },
{ ad:"Kragujevac", tur:"sehir", lat:44.013, lon:20.911, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}], v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Çaçak", tur:"kale", lat:43.891, lon:20.350, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},{f:"1444-08-01",t:"1459-06-20",d:"sirbistan"},{f:"1717-08-18",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},{f:"1739-09-18",t:"1830-11-08"}], v:[{f:"1830-11-08",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Tırgovişte", tur:"sehir", lat:44.925, lon:25.457, g:1, k:3, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Piteşti", tur:"sehir", lat:44.857, lon:24.869, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Slatina", tur:"sehir", lat:44.427, lon:24.371, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Buzău", tur:"sehir", lat:45.150, lon:26.817, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Rimnik-i Sârat (Râmnicu Sărat)", tur:"kale", lat:45.383, lon:27.056, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Krayova (Craiova)", tur:"sehir", lat:44.330, lon:23.795, g:1, k:3, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Tırgu Jiu", tur:"sehir", lat:45.035, lon:23.275, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Rimnik (Râmnicu Vâlcea)", tur:"sehir", lat:45.105, lon:24.375, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Turnu Severin", tur:"kale", lat:44.632, lon:22.656, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1718-07-21",t:"1739-09-18",d:"avusturya"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1718-07-21",k:"Eflak Voyvodalığı"},{f:"1739-09-18",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Kımpulung (Câmpulung)", tur:"sehir", lat:45.269, lon:25.045, g:0, k:4, m:"Bükreş", s:[{f:"1281-01-01",t:"1462-06-01",d:"eflak"},{f:"1878-07-13",t:"1923-10-29",d:"romanya"}], d:[], v:[{f:"1462-06-01",t:"1878-07-13",k:"Eflak Voyvodalığı"}] },
{ ad:"Soroka (Soroca)", tur:"kale", lat:48.158, lon:28.299, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı"}] },
{ ad:"Orhei", tur:"sehir", lat:47.383, lon:28.823, g:0, k:4, m:"Yaş", s:[{f:"1281-01-01",t:"1456-06-01",d:"bogdan"},{f:"1812-05-28",t:"1923-10-29",d:"rusya"}], d:[], v:[{f:"1456-06-01",t:"1812-05-28",k:"Boğdan Voyvodalığı"}] },
{ ad:"Podgorica", tur:"sehir", lat:42.441, lon:19.263, g:0, k:4, m:"İşkodra", s:[{f:"1281-01-01",t:"1457-01-01",d:"sirbistan"},{f:"1878-07-13",t:"1923-10-29",d:"karadag"}], d:[{f:"1457-01-01",t:"1878-07-13"}] },
{ ad:"Böğürdelen (Šabac)", tur:"kale", lat:44.750, lon:19.694, g:0, k:4, m:"Belgrad", s:[{f:"1281-01-01",t:"1471-01-01",d:"macaristan"},{f:"1476-02-01",t:"1521-07-07",d:"macaristan"},{f:"1717-08-17",t:"1739-09-18",d:"avusturya"},{f:"1788-04-24",t:"1791-08-04",d:"avusturya"},{f:"1806-01-26",t:"1813-10-05",d:"sirbistan"},{f:"1878-07-13",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1471-01-01",t:"1476-02-01"},{f:"1521-07-07",t:"1717-08-17",y:"kusatma"},{f:"1739-09-18",t:"1788-04-24",y:"antlasma"},{f:"1791-08-04",t:"1806-01-26",y:"antlasma"},{f:"1813-10-05",t:"1867-04-18",y:"savas"}], v:[{f:"1867-04-18",t:"1878-07-13",k:"Sırbistan Prensliği"}] },
{ ad:"Aksaray", tur:"sehir", lat:38.3687, lon:34.0370, g:0, k:3, m:"Konya",
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},
     {f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},
     {f:"1366-01-01",t:"1397-07-01",d:"karaman"},
     {f:"1402-07-28",t:"1402-09-15",d:"timurlu"},
     {f:"1402-09-15",t:"1468-04-01",d:"karaman"}],
  d:[{f:"1397-07-01",t:"1402-07-28",y:"kusatma"},
     {f:"1468-04-01",t:"1923-10-29",y:"kusatma"}] },
{ ad:"Travnik", tur:"kale", lat:44.226, lon:17.665, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1463-06-01",t:"1908-10-05",y:"savas"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"İzvornik (Zvornik)", tur:"kale", lat:44.386, lon:19.103, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1460-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1460-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Foça (Foča)", tur:"sehir", lat:43.506, lon:18.779, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1465-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1465-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Livno (İhlevne)", tur:"kale", lat:43.827, lon:17.008, g:0, k:4, m:"Saraybosna", s:[{f:"1281-01-01",t:"1469-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1469-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Yayça (Jajce)", tur:"kale", lat:44.342, lon:17.271, g:0, k:3, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1463-06-01",t:"1528-01-01",d:"macaristan"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1528-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Srebrenik", tur:"kale", lat:44.705, lon:18.489, g:0, k:4, m:"Saraybosna", s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1463-06-01",t:"1512-01-01",d:"macaristan"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"sirbistan"}], d:[{f:"1512-01-01",t:"1908-10-05"}], isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },
{ ad:"Yergöğü (Giurgiu)", tur:"kale", lat:43.904, lon:25.970, g:0, k:4, m:"Sofya", s:[{f:"1281-01-01",t:"1420-01-01",d:"eflak"},{f:"1427-01-01",t:"1449-01-01",d:"eflak"},{f:"1810-09-27",t:"1829-09-14",d:"rusya"},{f:"1829-09-14",t:"1859-01-24",d:"eflak"},{f:"1859-01-24",t:"1923-10-29",d:"romanya"}], d:[{f:"1420-01-01",t:"1427-01-01"},{f:"1449-01-01",t:"1810-09-27",y:"savas"}] },
];

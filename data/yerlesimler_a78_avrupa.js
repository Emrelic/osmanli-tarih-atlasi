// ======================================================================
// A-AVRUPA-0078 — 1923 A katmanı: Avrupa'da yanlış sahipli / noktasız dilimler
// şartname: oturumlar/BITIR-1923-0078.md §3.2 · 24 Eylül 2026
// AD ALANI (§7): data/yerlesimler_a78_avrupa.js → window.YERLESIMLER_A78_AVRUPA
// BAĞLAMA (koordinatör): arac/girdi.py GIRDI_DOSYALARI + index.html satırı
//
// NİÇİN: 1923-09-01'de bu dilimlerde en yakın nokta YANLIŞ devletindi
// (Abrene/Petseri → Pskov=Sovyet · Görice → Ohri=Yugoslavya · Filorina → Manastır
// · Thonon → Lozan=İsviçre · Arlon → Lüksemburg · Bregenz → Konstanz=Almanya ·
// Aosta vadisinin batısı → Cenevre · Freistadt/Linz boşluğu → Regensburg=Almanya).
// Ölçüm: denetim/A-AVRUPA-0078-serit.py (d_katman.js yaslama kapısı taklidi).
//
// ZİNCİR İLKESİ: 1918-1920 geçişleri KAYNAKTAN; daha eski zincir aynı tarihî
// birimdeki atlas komşusunun EMSALİ (şartname §5.3), künye penceresi ÖLÇÜLEREK.
// Emsalin künye aşımı KOPYALANMADI: Viyana/Graz `avusturya`yı 1281'den başlatıyor
// (künye 1526-08-29) → burada almanya → avusturya 1526-08-29 (Prag emsali).
// Chambéry/Torino `sardinya`yı 1281'den başlatıyor (künye 1720-08-02) → burada
// savoya → sardinya 1720-08-02.
// 🔴 BİLİNEN EKSİKLER (isg/s yazılmadı, her kaydın kaynak alanında AÇIKÇA):
// Napolyon ilhakları (Savoya 1792-1815, Aosta 1800-1814, Valais 1810-1813),
// Bern/Valais'nin Chablais işgali 1536-1567/69, Yukarı Avusturya'nın Bavyera
// rehni 1620-1628, Görice'nin Yunan (1912-14) ve Fransız (1916-20) işgalleri,
// Arlon'un Fransız dönemi 1684-1697. Hepsi faz 2 işidir.
// ======================================================================

window.YERLESIMLER_A78_AVRUPA = [

// ---------------- BALTIK: Pskov toprağından Estonya/Letonya'ya geçen dilimler
{ ad:"Petseri (Peçori)", tur:"sehir", lat:57.815, lon:27.609, g:2, k:0,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"novgorod"},{f:"1348-01-01",t:"1510-01-13",d:"pskov"},{f:"1510-01-13",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1920-02-02",d:"sovyet-rusya"},{f:"1920-02-02",t:"1923-10-29",d:"estonya"}],
  kaynak:"1920-02-02 Tartu Barışı (Estonya–Sovyet Rusya), md. III sınır tarifi Petseri'yi Estonya'ya bırakır — LNTS c. 11 no. 289. 1920 öncesi: Pskov toprağı; zincir Pskov kaydının EMSALİ (aynı birim, 43 km). BİLİNEN EKSİK: 1918 Alman işgali ve 1919 Estonya fiilî idaresi yazılmadı. ⚠️ 1920-02-02 için kronoloji maddesi YOK (koordinatörden istendi)." },
{ ad:"Abrene (Pıtalovo)", tur:"sehir", lat:57.067, lon:27.917, g:2, k:0,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"novgorod"},{f:"1348-01-01",t:"1510-01-13",d:"pskov"},{f:"1510-01-13",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1920-08-11",d:"sovyet-rusya"},{f:"1920-08-11",t:"1923-10-29",d:"letonya"}],
  kaynak:"1920-08-11 Riga Barışı (Letonya–Sovyet Rusya), md. III — Pskov guberniyası Ostrov uyezdinin batısı (Pıtalovo) Letonya'ya; LNTS c. 2 no. 67. Kronoloji: 'Riga Barışı: Letonya–Sovyet Rusya sınırı' (1920-08-11). 1920 öncesi Pskov emsali. Nokta KASABA değil DİLİM temsilidir (Abrene adı 1925+)." },

{ ad:"Porkhov", tur:"kale", lat:57.767, lon:29.557, g:2, k:0,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  kaynak:"Şelon üzerinde Novgorod kalesi; Novgorod kroniklerinde ilk anılış 1239 (nortfort.ru 'Northern Fortress: Porkhov'). Zincir Staraya Russa/Novgorod EMSALİ (1478-01-15 Novgorod'un Moskova'ya katılışı). NİÇİN: Değişmez 7 — Pskov (+Petseri, Abrene) 1510 ve 1547'de Moskova/Rusya ana gövdesinden KOPUK ada çıkıyordu (Pskov–Staraya Russa 183 km > 150). BİLİNEN EKSİK: 1611-1617 İsveç işgali (Novgorod emsalinde de yok)." },

{ ad:"Şelon havzası (Soltsı)", tur:"bolge", lat:58.120, lon:30.320, g:2, k:0,
  s:[{f:"1281-01-01",t:"1478-01-15",d:"novgorod"},{f:"1478-01-15",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}],
  kaynak:"DOLGU/BÖLGE noktası (kasaba iddiası YOK; Soltsı'nın ilk anılış yılı yalnız Vikipedi'de — kullanılmadı). Şelon havzası Novgorod toprağıdır; 1471 Şelon Muharebesi Soltsı yakınında Novgorod ordusuyla yapıldı (Herald of the Russian Academy of Sciences 2022, 'The First Campaign of Ivan III to Novgorod in 1471', Springer). Zincir Novgorod/Staraya Russa EMSALİ. NİÇİN: Değişmez 7 köprüsü — Porkhov–Staraya Russa 109 km olduğu hâlde _d7_komsuluk ızgarası (boylam hücresi enleme göre ölçeklenmiyor) onları komşu saymıyor; bu nokta ara hücreye düşer." },
{ ad:"Rēzekne (Rositten)", tur:"sehir", lat:56.510, lon:27.333, g:2, k:0,
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1569-07-01",d:"litvanya-buyuk-dukalik"},{f:"1569-07-01",t:"1772-08-05",d:"lehistan"},{f:"1772-08-05",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1918-11-11",d:"sovyet-rusya"},{f:"1918-11-11",t:"1923-10-29",d:"letonya"}],
  kaynak:"Latgale; zincir Daugavpils EMSALİ (aynı birim: Livonya Tarikatı → 1561 → Rusya 1772 → Letonya), TEK FARKLA: emsal 1561-11-28'de `lehistan` yazıyor ama künye 1569-07-01'de başlıyor (Daugavpils'in 8 yıllık aşımı KOPYALANMADI). 1561 Vilnius antlaşmasıyla Livonya Litvanya Büyük Dükalığı'na bağlandı, 1569 Lublin Birliği'yle ortak Polonya-Litvanya ⇒ litvanya-buyuk-dukalik 1561-1569 (Polotsk kaydı da 1569'a dek bu kimlik). 1918-11-11 günü emsalden. BİLİNEN EKSİK: Latgale'nin fiilî Letonya idaresi Ocak 1920 Latgale harekâtıyladır, 1918-1920 Sovyet/Alman dönemi yazılmadı (emsalde de yok). NİÇİN: Değişmez 7 — Abrene 1920-08-11'de tek başına Letonya adası çıkıyordu (Daugavpils 158 km)." },

// ---------------- PREKMURJE: Macaristan'dan Yugoslavya'ya, 12 Ağustos 1919
{ ad:"Murska Sobota", tur:"sehir", lat:46.662, lon:16.166, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1919-08-12",d:"macaristan-naiplik"},{f:"1919-08-12",t:"1923-10-29",d:"yugoslavya"}],
  kaynak:"SHS birlikleri Prekmurje'ye 12 Ağustos 1919'da girdi; Macar idaresi o gün sona erdi (Hungarian Historical Review 2020/1, Kosi; Studia z Dziejów Rosji i Europy Środkowo-Wschodniej 47, Zawistowska 'Prekmurje – separation from Hungary'). Hukukî devir Trianon 1920-06-04 (tahrir ölçütü: idare 1919'da geçti ⇒ s: 1919). 1918 öncesi Kanije/Varaždin emsali; 1918-11-11 günü Kanije emsali (macaristan-naiplik künyesi 1918-11-16 — emsalin 5 günlük aşımı devralındı, bildirildi)." },
{ ad:"Lendava (Alsólendva)", tur:"sehir", lat:46.563, lon:16.452, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1919-08-12",d:"macaristan-naiplik"},{f:"1919-08-12",t:"1923-10-29",d:"yugoslavya"}],
  kaynak:"Murska Sobota ile aynı süreç (Prekmurje, 12 Ağustos 1919 SHS girişi — Kosi 2020, Zawistowska). Kanije eyaletine bağlandığına dair kaynak bulunamadı (Osmanlı dönemi yazılmadı)." },

// ---------------- AVUSTURYA–ÇEKOSLOVAKYA hattı (d1923-at-cs)
{ ad:"Freistadt", tur:"sehir", lat:48.511, lon:14.504, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Yukarı Avusturya (Mühlviertel); Saint-Germain 1919-09-10 ile Avusturya'da kaldı. Zincir Viyana emsali, künye penceresine göre (avusturya 1526-08-29'da başlar; öncesi Kutsal Roma = almanya, Prag emsali). BİLİNEN EKSİK: 1620-1628 Bavyera rehni (bavyera BOYALAR'da yok)." },
{ ad:"Linz", tur:"sehir", lat:48.306, lon:14.286, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Yukarı Avusturya merkezi. Freistadt ile aynı zincir ve aynı bilinen eksik (1620-1628 Bavyera rehni)." },
{ ad:"Gmünd (Aşağı Avusturya)", tur:"sehir", lat:48.767, lon:14.983, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Saint-Germain 1919-09-10 md. 27: Gmünd istasyon mahallesi (České Velenice) Çekoslovakya'ya, kasaba Avusturya'da. Zincir Viyana emsali, künye penceresine göre." },
{ ad:"České Budějovice (Budweis)", tur:"sehir", lat:48.975, lon:14.474, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  kaynak:"Güney Bohemya; zincir Prag EMSALİ (Bohemya Tacı, aynı birim) — 1918-11-11 günü emsalden (cekoslovakya künyesi 1918-10-28). Saint-Germain 1919-09-10 ile Çekoslovakya'nın." },
{ ad:"Třeboň (Wittingau)", tur:"sehir", lat:49.004, lon:14.771, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  kaynak:"Güney Bohemya; České Budějovice ile aynı zincir (Prag emsali)." },

// ---------------- ARNAVUTLUK–YUNANİSTAN (d1923-gr-al) ve Filorina boşluğu
{ ad:"Görice (Korçë)", tur:"sehir", lat:40.619, lon:20.781, g:1, k:0,
  s:[{f:"1281-01-01",t:"1395-01-01",d:"__BOSLUK__"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1912-11-28",t:"1923-10-29",d:"arnavutluk-bagimsiz"}],
  d:[{f:"1395-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-28"}],
  kaynak:"TDV gorice: 'Osmanlılar ... büyük bir ihtimalle 1395'te veya hemen sonra Görice bölgesini de topraklarına katmışlardır' (YIL hassasiyeti, TDV'nin kendi çekincesiyle); fetih öncesi 'Arnavut beyleri' — künye yok ⇒ __BOSLUK__ (Berat emsali). XIX. yy Manastır vilâyeti Görice sancağı merkezi. Fetret 1402-1413 Ohri emsali. 1912-11-28 Ergiri EMSALİ (Yunan işgalinden sonra Arnavutluk'a bırakılan aynı sınıf). BİLİNEN EKSİK (isg yazılmadı): TDV '1912-1914 Balkan savaşları sırasında Görice Yunanlılar tarafından ele geçirildi'; 'Fransızlar tarafından işgal edildi (Ekim 1916)'; '10 Aralık 1916 ... özerk bölge'." },
{ ad:"Kesriye (Kastoria)", tur:"sehir", lat:40.519, lon:21.269, g:1, k:0,
  s:[{f:"1281-01-01",t:"1334-01-01",d:"bizans"},{f:"1334-01-01",t:"1374-01-01",d:"sirbistan-nemanjic"},{f:"1374-01-01",t:"1385-01-01",d:"__BOSLUK__"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1385-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"TDV kesriye: '1334'te Çar Duşan'ın Sırp İmparatorluğu topraklarına dahil olan kasaba' · '1374'e kadar Simeon Uroš'un Bizans-Sırp Krallığı'nda kaldı' · '1385'e kadar küçük Musacci Arnavut Prensliği'nin parçası idi' (künye yok ⇒ __BOSLUK__) · 'Gazi Evrenos Bey muhtemelen 1384-1385'te Kesriye'yi aldı' (YIL). Simeon Uroš Nemanjić'tir ⇒ sirbistan-nemanjic. Fetret Ohri emsali. Osmanlı sonu 1913-11-14 Atina Antlaşması — Vodina/Selanik/Yanya EMSALİ (TDV: '1912'deki ilk Balkan savaşlarında kasaba Yunan ordusunca ele geçirildi')." },
{ ad:"Filorina (Florina)", tur:"sehir", lat:40.782, lon:21.410, g:1, k:0,
  s:[{f:"1281-01-01",t:"1334-01-01",d:"bizans"},{f:"1334-01-01",t:"1385-01-01",d:"sirbistan-nemanjic"},{f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},{f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},{f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},{f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},{f:"1913-11-14",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1385-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-11-14"}],
  kaynak:"TDV'de filorina maddesi YOK (arama: yalnız iki geçen anılış). Gün komşudan: Kesriye · TDV kesriye (Duşan 1334) ve Manastır · TDV manastir--makedonya ('I. Murad döneminde 784-785'te (1382-1383), bazı rivayetlere göre ise 787'de (1385) fethedildi'; atlas Manastır kaydı 1385). 1371-1385 Mrnjavčević/Prilep dönemi künye yok, sirbistan-nemanjic içinde kaldı — BORÇ. Osmanlı sonu 1913-11-14 Atina Antlaşması (Vodina emsali)." },

// ---------------- VORARLBERG
{ ad:"Bregenz", tur:"sehir", lat:47.503, lon:9.747, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1814-06-03",d:"almanya"},{f:"1814-06-03",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Vorarlberg. 1805-12-26 Pressburg: 'Tirol ve Vorarlberg Bavyera'ya' (atlas kronolojisi; Bavyera atlasta almanya ile boyanır — Münih emsali). 1814-06-03 Paris (Avusturya–Bavyera) antlaşmasıyla iade — atlas maddesi yalnız Tirol'ü anıyor, Vorarlberg aynı antlaşmadadır. 1526 öncesi Kutsal Roma (almanya). Saint-Germain 1919-09-10: Avusturya'da kaldı (1919 İsviçre'ye katılma oylaması sonuçsuz)." },
{ ad:"Feldkirch", tur:"sehir", lat:47.238, lon:9.598, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1814-06-03",d:"almanya"},{f:"1814-06-03",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Vorarlberg; Bregenz ile aynı zincir (Pressburg 1805 / Paris 1814)." },

// ---------------- TİROL–KARİNTİYA KÖPRÜSÜ — Değişmez 7 zorunlu kıldı
// Vorarlberg tek başına eklenince Bregenz+Feldkirch 1526/1814/1918'de ana
// gövdeden KOPUK ada çıktı (+6 sorgusuz enklav): Tirol ve Karintiya'da tek
// Avusturya noktası yoktu (1923'te Tirol Münih/Trento, Karintiya Ljubljana
// peteğindeydi). Köprü: Feldkirch–Landeck–Innsbruck–Lienz–Klagenfurt–Graz, her
// aralık < 150 km (D7_BAG_KM). Brixen: Innsbruck'un Güney Tirol'e taşmasını keser.
{ ad:"Landeck", tur:"sehir", lat:47.140, lon:10.567, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1814-06-03",d:"almanya"},{f:"1814-06-03",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Kuzey Tirol. 1805-12-26 Pressburg: 'Tirol ve Vorarlberg Bavyera'ya'; 1814-06-03 Paris: 'Tirol Avusturya'ya döndü' (ikisi de atlas kronolojisinde, Tirol'ü ADIYLA anar). Bavyera atlasta almanya ile boyanır (Münih emsali). 1526 öncesi Kutsal Roma. Saint-Germain 1919-09-10: Kuzey Tirol Avusturya'da." },
{ ad:"Innsbruck", tur:"sehir", lat:47.269, lon:11.393, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1814-06-03",d:"almanya"},{f:"1814-06-03",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Tirol merkezi; Landeck ile aynı zincir ve aynı kronoloji maddeleri (Pressburg 1805-12-26, Paris 1814-06-03)." },
{ ad:"Lienz", tur:"sehir", lat:46.829, lon:12.769, g:2, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1805-12-26",d:"avusturya"},{f:"1805-12-26",t:"1814-06-03",d:"almanya"},{f:"1814-06-03",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Doğu Tirol (Görz kontluğu 1500'de Habsburg-Tirol'e geçti; 1526 öncesi zaten Kutsal Roma). Tirol zinciri. BİLİNEN EKSİK: 1810-1813 Napolyon'un İlirya illerine bağlanışı yazılmadı." },
{ ad:"Klagenfurt", tur:"sehir", lat:46.624, lon:14.305, g:1, k:0,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"almanya"},{f:"1526-08-29",t:"1918-11-12",d:"avusturya"},{f:"1918-11-12",t:"1923-10-29",d:"avusturya-cumhuriyet"}],
  kaynak:"Karintiya merkezi; 1335'ten Habsburg (1526 öncesi Kutsal Roma = almanya, Viyana emsali künyeye göre). 1920-10-10 Karintiya plebisiti: A bölgesi Avusturya'da kaldı (Saint-Germain md. 49-50). BİLİNEN EKSİK: 1809-1813 İlirya illeri ve Haziran-Temmuz 1919 SHS işgali (isg) yazılmadı." },
{ ad:"Brixen (Bressanone)", tur:"sehir", lat:46.715, lon:11.656, g:2, k:0,
  s:[{f:"1281-01-01",t:"1803-02-25",d:"almanya"},{f:"1803-02-25",t:"1918-11-03",d:"avusturya"},{f:"1918-11-03",t:"1923-10-29",d:"italya"}],
  kaynak:"Brixen Prens-Piskoposluğu; zincir Trento EMSALİ (aynı sınıf: 1803 sekülerleşmesiyle Avusturya, 1918-11-03 İtalyan işgali/Villa Giusti, Saint-Germain 1919-09-10 ile İtalya). BİLİNEN EKSİK: 1805-1814 Bavyera ve Napolyon İtalya'sı dönemi (Trento emsalinde de yok)." },

// ---------------- AOSTA · TARANTEZ · VALAIS
{ ad:"Aosta", tur:"sehir", lat:45.737, lon:7.320, g:1, k:0,
  s:[{f:"1281-01-01",t:"1720-08-02",d:"savoya"},{f:"1720-08-02",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}],
  kaynak:"Aosta Dükalığı, Savoya hanedanının eski mülkü; zincir Torino emsali, künye penceresine göre (savoya 1720-08-02'ye dek, sonra sardinya). BİLİNEN EKSİK: 1800-1814 Fransız ilhakı (Doire departmanı) yazılmadı." },
{ ad:"Bourg-Saint-Maurice", tur:"sehir", lat:45.619, lon:6.769, g:2, k:0,
  s:[{f:"1281-01-01",t:"1720-08-02",d:"savoya"},{f:"1720-08-02",t:"1860-06-14",d:"sardinya"},{f:"1860-06-14",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"Tarantez (Savoya). Zincir Chambéry emsali, künye penceresine göre. 1860 Torino Antlaşması (1860-03-24, atlas maddesi) ile Fransa'ya; devir günü 1860-06-14 Chambéry emsali. BİLİNEN EKSİK: 1792-1815 Fransız ilhakı." },
{ ad:"Sion (Sitten)", tur:"sehir", lat:46.233, lon:7.361, g:1, k:0,
  s:[{f:"1281-01-01",t:"1417-01-01",d:"almanya"},{f:"1417-01-01",t:"1923-10-29",d:"isvicre"}],
  kaynak:"HLS 'Wallis': 'Spätestens mit der Erneuerung des Bündnisses 1416 und 1417 galt das Wallis als zugewandter Ort der Eidgenossenschaft' (YIL; 'en geç' ⇒ 1417). Atlas İsviçre emsali ortaklık gününü esas alır (Cenevre 1536, Bern 1353). BİLİNEN EKSİK: 1810-1813 Fransız Simplon departmanı." },
{ ad:"Martigny (Martinach)", tur:"sehir", lat:46.103, lon:7.073, g:2, k:0,
  s:[{f:"1281-01-01",t:"1475-01-01",d:"savoya"},{f:"1475-01-01",t:"1923-10-29",d:"isvicre"}],
  kaynak:"HLS 'Wallis' ve 'Martigny (commune)': 1475'te Yukarı Valais Aşağı Valais'yi Saint-Maurice'e dek Savoya'dan aldı (Planta, Kasım 1475; alan YIL hassasiyetinde, ay metinde — D213). Valais tebaa toprağı ⇒ Valais'nin ortak statüsüyle isvicre. BİLİNEN EKSİK: 1810-1813 Simplon departmanı." },

// ---------------- CHABLAIS / GENEVOIS (Savoya → Fransa 1860)
{ ad:"Thonon", tur:"sehir", lat:46.371, lon:6.480, g:2, k:0,
  s:[{f:"1281-01-01",t:"1720-08-02",d:"savoya"},{f:"1720-08-02",t:"1860-06-14",d:"sardinya"},{f:"1860-06-14",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"Chablais (Savoya). Zincir Chambéry emsali, künye penceresine göre; 1860 Torino Antlaşması. BİLİNEN EKSİK: 1536-1567 Bern işgali (Lozan Antlaşması 1564, iade 1567) ve 1792-1815 Fransız ilhakı yazılmadı." },
{ ad:"Annemasse", tur:"sehir", lat:46.193, lon:6.234, g:2, k:0,
  s:[{f:"1281-01-01",t:"1720-08-02",d:"savoya"},{f:"1720-08-02",t:"1860-06-14",d:"sardinya"},{f:"1860-06-14",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  kaynak:"Genevois (Savoya); Thonon ile aynı zincir ve aynı bilinen eksikler (Bern 1536-1567, Fransa 1792-1815)." },

// ---------------- BELÇİKA LÜKSEMBURGU (1839'da Belçika'ya kalan Valon Lüksemburg)
{ ad:"Arlon", tur:"sehir", lat:49.683, lon:5.817, g:1, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}],
  kaynak:"Lüksemburg Dükalığı: zincir Lüksemburg kaydının EMSALİ 1830'a dek. 1830-10-04 Belçika idaresi (Lüksemburg vilâyeti, şehir hariç, Belçika ihtilaline katıldı; Namur emsali ve atlas maddesi 1830-10-04); 1839-04-19 Londra Antlaşması Valon kesimini Belçika'da bıraktı. BİLİNEN EKSİK: 1684-1697 Fransız dönemi." },
{ ad:"Bastogne", tur:"sehir", lat:50.000, lon:5.717, g:2, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}],
  kaynak:"Arlon ile aynı zincir (Lüksemburg Dükalığı → 1830/1839 Belçika)." },
{ ad:"Neufchâteau (Belçika)", tur:"sehir", lat:49.841, lon:5.435, g:2, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}],
  kaynak:"Arlon ile aynı zincir (Lüksemburg Dükalığı → 1830/1839 Belçika)." },
{ ad:"Virton", tur:"sehir", lat:49.568, lon:5.533, g:2, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}],
  kaynak:"Arlon ile aynı zincir (Lüksemburg Dükalığı → 1830/1839 Belçika)." },
// Karşı ağırlıklar — Belçika noktaları tek başına Lüksemburg'un kuzeyine (Oesling)
// ve Eupen-Malmedy'ye taşıyordu (serit ölçümü: lu-de iki-taraf %100 → %71).
{ ad:"Wiltz", tur:"sehir", lat:49.966, lon:5.933, g:2, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1890-11-23",d:"hollanda"},{f:"1890-11-23",t:"1923-10-29",d:"luksemburg"}],
  kaynak:"Lüksemburg'un kuzeyi (Oesling); 1839 Londra'da Büyük Dükalıkta kaldı. Zincir Lüksemburg kaydının BİREBİR EMSALİ (aynı birim). Arlon ile aynı bilinen eksik (1684-1697 Fransız dönemi)." },
{ ad:"St. Vith (Sankt Vith)", tur:"sehir", lat:50.283, lon:6.127, g:2, k:0,
  s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1920-01-10",d:"almanya"},{f:"1920-01-10",t:"1923-10-29",d:"belcika"}],
  kaynak:"Eski Lüksemburg Dükalığı toprağı (1815'e dek Lüksemburg emsali); 1815 Viyana Kongresi ile Our ötesi Prusya'ya (Ren vilâyeti; günü Lüksemburg emsalinin 1815-06-09'u). 1920-01-10 Versay yürürlüğü, md. 32-34: Eupen-Malmedy Belçika'ya — atlas maddesi 'Versay Antlaşması ile Eupen-Malmedy ve Tarafsız Moresnet Belçika'ya geçti' (1920-01-10) ve d1923-be-de hattının f'si. Kesin devir MC kararı 1920-09-20 yalnız ikincil kaynakta (hat kaydının kendi notu)." },

];

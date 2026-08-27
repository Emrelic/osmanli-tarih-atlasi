// ============================================================================
// YERLEŞİM VERİ SETİ — BATI ve KUZEY AVRUPA  (Oturum 12)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ — denetim raporunun B-6 ve B-7 bulguları
// ---------------------------------------------------------------------------
// Britanya 3, Fransa 6, İskandinavya 7 noktayla temsil ediliyordu. Sonuç:
//   B-6  Jutland (Danimarka anakarası) atlasın TAMAMINDA Almanya boyalı —
//        yarımadada tek nokta yok, en yakın petek Hamburg'un.
//   B-7  Bretanya İngiltere boyalı, batı ucu hiç boyanmamış — Fransa'nın
//        Atlantik kıyısında nokta yok, Manş'ın karşısından İngiliz peteği
//        taşıyor.
// Bu dosya altı bölgeye 237 nokta ekler: Britanya ve İrlanda 43, Fransa 46,
// İberya 44 (9'u kıyı sıklaştırması — Oran taşması, hatalar 8),
// İskandinavya+Danimarka 33, Alçak Ülkeler + Batı Almanya + İsviçre 47,
// İtalya 24. Tamamı BOLGE kutusunun (box(-12,1.5,62,62)) içinde;
// yalnız iki nokta (Trondheim 63.4°K, Sundsvall 62.4°K) kutunun KUZEYİNDE
// kalır ve kutu açılana dek çizilmez — aşağıda tek tek işaretli.
//
// ---------------------------------------------------------------------------
// DEVLET KİMLİKLERİ — 15'i renkler.py'de HENÜZ TANIMLI DEĞİL
// ---------------------------------------------------------------------------
// Bu dosya renkler.py'ye YAZMAZ (oturum kuralı). Kullanılan ama tanımsız
// kimlikler — tam liste, varlık aralıkları ve renk-komşuluk notlarıyla
// birlikte oturumlar/OTURUM-12-ILERLEME.md'de; entegrasyon oturumu ekleyecek:
//   bretanya iskocya irlanda kastilya aragon navarra burgonya isvicre
//   belcika luksemburg siena ferrara mantua parma piza
// Tanımlı kimlik eklenene dek bu pencereler haritada boyanmaz (delik değil,
// renksiz kalır); geri kalan her pencere mevcut BOYALAR ile boyanır.
//
// ---------------------------------------------------------------------------
// KONVANSİYONLAR — mevcut kayıtlarla birebir uyum için
// ---------------------------------------------------------------------------
// • İtalya birliği: napoli→italya 1861-02-13 (Gaeta), toskana/sardinya→italya
//   1861-03-17, venedik→avusturya 1797-05-12, Veneto→italya 1866-10-03,
//   Lombardiya→sardinya 1859-06-04 — hepsi mevcut Milano/Venedik/Napoli/
//   Floransa kayıtlarındaki tarihlerle aynı.
// • Habsburg Hollandası: almanya→ispanya 1516-01-23 (mevcut Amsterdam kaydı
//   ile aynı), Hollanda bağımsızlığı 1581-07-26.
// • Danimarka-Norveç: Norveç 1537'ye kadar norvec (ayrı krallık), 1537-01-01
//   danimarka (miras eyaleti), 1814-01-14 isvec (Kiel), 1905-06-07 norvec —
//   mevcut Oslo kaydının 1814/1905 tarihleriyle uyumlu; Oslo'ya 1537 öncesi
//   norvec penceresi eklenmesi ILERLEME'de önerildi.
// • İspanya birliği: kastilya/aragon→ispanya 1479-01-20 (II. Fernando'nun
//   Aragon tahtına çıkışı). Mevcut Madrid/Sevilla/Barselona/Valensiya
//   kayıtlarının 1479 öncesine bölünmesi ILERLEME'de önerildi.
// • Portekiz: İber Birliği (1580-1640) penceresi GERİ ALINDI, uygulanmayacak.
//   Kaynak (TDV "PORTEKİZ"): "meclis kendisini PORTEKİZ KRALI (I. Felipe)
//   ilân etmek zorunda kaldı (1581)" ve "İspanya idaresinde Portekiz
//   SÖMÜRGELERİNİ Hollanda ve İngiltere'ye kaptırdı". Yani ilhak değil ŞAHSÎ
//   BİRLİK: Portekiz kendi tacını ve meclisini korudu, sömürgeler de onun kaldı.
//   d:"ispanya" yazmak "Portekiz 60 yıl var olmadı" demek olurdu.
//   İkinci gerekçe iç tutarlılık: canlı veride 12 nokta d:"portekiz" taşıyor ve
//   10'u DENİZAŞIRI (Maskat, Hürmüz, Kişm, Suhâr, Sûr, Buraymî, Ras el-Hayme,
//   Şârika, Tanca). Metropolü İspanya yapıp kolonileri Portekiz bırakmak üç
//   okumanın en savunulamazı olurdu: anavatanı olmayan sömürge imparatorluğu.
//   GENEL KURAL → OGRENILENLER.md: ŞAHSÎ BİRLİK ≠ İLHAK. Aynı soru
//   İngiltere-İskoçya 1603-1707, Danimarka-Norveç, Lehistan-Litvanya,
//   Avusturya-Macaristan 1867-1918 için de gelecek.
// • Gün bilinmiyorsa YYYY-01-01 (yalnız yıl biliniyor demektir).
// ============================================================================

window.YERLESIMLER_AVRUPA = [

// ── BRİTANYA: İngiltere ve Galler ──────────────────────────────────────────
{ ad:"York", tur:"sehir", lat:53.959, lon:-1.081, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Norwich", tur:"sehir", lat:52.628, lon:1.297, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Bristol", tur:"liman", lat:51.454, lon:-2.588, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Exeter", tur:"sehir", lat:50.718, lon:-3.534, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Plymouth", tur:"liman", lat:50.376, lon:-4.143, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Southampton", tur:"liman", lat:50.910, lon:-1.404, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Dover", tur:"liman", lat:51.128, lon:1.313, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Newcastle", tur:"liman", lat:54.978, lon:-1.617, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Carlisle", tur:"sehir", lat:54.893, lon:-2.933, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Lincoln", tur:"sehir", lat:53.234, lon:-0.539, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Nottingham", tur:"sehir", lat:52.951, lon:-1.150, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Oxford", tur:"sehir", lat:51.752, lon:-1.258, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Cambridge", tur:"sehir", lat:52.205, lon:0.119, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Manchester", tur:"sehir", lat:53.483, lon:-2.244, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Liverpool", tur:"liman", lat:53.408, lon:-2.992, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Birmingham", tur:"sehir", lat:52.480, lon:-1.903, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Hull", tur:"liman", lat:53.745, lon:-0.336, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Shrewsbury", tur:"sehir", lat:52.708, lon:-2.754, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
// Cornwall yarımadasının ucu — güneybatı burnu noktasız kalmasın diye
{ ad:"Penzance", tur:"liman", lat:50.119, lon:-5.537, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
// Galler: Gwynedd 1283'te (Edward I) İngiliz tacına geçti; 1281-1283 penceresi
// iki yıl olduğu için sadeleştirildi, bkz. ILERLEME.
{ ad:"Cardiff", tur:"liman", lat:51.482, lon:-3.179, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Caernarfon", tur:"kale", lat:53.140, lon:-4.271, g:0, k:4, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },
// Man Adası — Manş ile İrlanda Denizi ortasında; noktasız kalırsa komşu peteğe emilir
{ ad:"Douglas (Man)", tur:"liman", lat:54.150, lon:-4.482, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"ingiltere"}] },

// ── BRİTANYA: İskoçya (iskocya → 1707-05-01 birlik) ────────────────────────
{ ad:"Glasgow", tur:"sehir", lat:55.861, lon:-4.250, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Aberdeen", tur:"liman", lat:57.150, lon:-2.094, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Inverness", tur:"sehir", lat:57.478, lon:-4.225, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Perth (İskoçya)", tur:"sehir", lat:56.396, lon:-3.437, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Dumfries", tur:"sehir", lat:55.070, lon:-3.603, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Wick", tur:"liman", lat:58.439, lon:-3.093, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
// Dış Hebridler 1266'da (Perth Antlaşması) Norveç'ten İskoçya'ya geçti — 1281'de İskoç
{ ad:"Stornoway", tur:"liman", lat:58.2111, lon:-6.3870, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
// Orkney ve Shetland 1472'ye kadar Norveç tacında (1468-69 rehin, 1472 ilhak)
{ ad:"Kirkwall (Orkney)", tur:"liman", lat:58.981, lon:-2.960, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1472-02-20",d:"norvec-kralligi"},{f:"1472-02-20",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Lerwick (Shetland)", tur:"liman", lat:60.153, lon:-1.145, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1472-02-20",d:"norvec-kralligi"},{f:"1472-02-20",t:"1707-05-01",d:"iskocya"},{f:"1707-05-01",t:"1923-10-29",d:"ingiltere"}] },

// ── İRLANDA ────────────────────────────────────────────────────────────────
// İngiliz (Anglo-Norman) kasabaları: taç idaresinde, 1922-12-06 Serbest Devlet.
// Gal beylikleri bölgeleri: 1603-03-30'a (Mellifont) kadar irlanda kimliği.
{ ad:"Cork", tur:"liman", lat:51.898, lon:-8.471, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Waterford", tur:"liman", lat:52.259, lon:-7.110, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Limerick", tur:"sehir", lat:52.664, lon:-8.623, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Galway", tur:"liman", lat:53.272, lon:-9.049, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Kilkenny", tur:"sehir", lat:52.654, lon:-7.244, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Wexford", tur:"liman", lat:52.336, lon:-6.463, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Sligo", tur:"liman", lat:54.270, lon:-8.472, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Athlone", tur:"sehir", lat:53.424, lon:-7.941, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Donegal", tur:"sehir", lat:54.654, lon:-8.110, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
{ ad:"Tralee", tur:"sehir", lat:52.271, lon:-9.700, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1922-12-06",d:"ingiltere"},{f:"1922-12-06",t:"1923-10-29",d:"irlanda-serbest-devlet"}] },
// Kuzey İrlanda: 1922'de Birleşik Krallık'ta kaldı
{ ad:"Belfast", tur:"liman", lat:54.597, lon:-5.930, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1923-10-29",d:"ingiltere"}] },
{ ad:"Derry", tur:"liman", lat:54.997, lon:-7.309, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1603-03-30",d:"irlanda"},{f:"1603-03-30",t:"1923-10-29",d:"ingiltere"}] },

// ── FRANSA: Bretanya (B-7'nin doğrudan kapanışı) ───────────────────────────
// Bretanya Dükalığı 1532-08-13 birlik fermanına (Vannes) kadar ayrı devlet
{ ad:"Rennes", tur:"sehir", lat:48.114, lon:-1.680, g:0, k:1,kd:[{f:"1281-01-01",t:"1532-08-13",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Nantes", tur:"liman", lat:47.218, lon:-1.554, g:0, k:1,kd:[{f:"1281-01-01",t:"1532-08-13",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Brest", tur:"liman", lat:48.390, lon:-4.486, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Quimper", tur:"sehir", lat:47.996, lon:-4.102, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Vannes", tur:"liman", lat:47.658, lon:-2.760, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Saint-Malo", tur:"liman", lat:48.6479, lon:-2.0242, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1532-08-13",d:"bretanya"},{f:"1532-08-13",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

// ── FRANSA: Normandiya ve Manş kıyısı (Yüzyıl Savaşları pencereleriyle) ────
{ ad:"Rouen", tur:"sehir", lat:49.443, lon:1.099, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1419-01-19",d:"fransa"},{f:"1419-01-19",t:"1449-10-29",d:"ingiltere"},{f:"1449-10-29",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Caen", tur:"sehir", lat:49.183, lon:-0.370, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1417-09-04",d:"fransa"},{f:"1417-09-04",t:"1450-06-24",d:"ingiltere"},{f:"1450-06-24",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Cherbourg", tur:"liman", lat:49.640, lon:-1.616, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1418-09-29",d:"fransa"},{f:"1418-09-29",t:"1450-08-12",d:"ingiltere"},{f:"1450-08-12",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Le Havre 1517'de I. François tarafından kuruldu
{ ad:"Le Havre", tur:"liman", lat:49.494, lon:0.108, g:0, k:3, kur:"1517-01-01", d:[], s:[{f:"1517-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Calais 1347-1558 arası İngiliz
{ ad:"Calais", tur:"liman", lat:50.951, lon:1.858, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1347-08-03",d:"fransa"},{f:"1347-08-03",t:"1558-01-07",d:"ingiltere"},{f:"1558-01-07",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Somme kasabaları 1435 (Arras) - 1477 (Cesur Charles'ın ölümü) arası Burgonya'da
{ ad:"Amiens", tur:"sehir", lat:49.895, lon:2.302, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1435-09-21",d:"fransa"},{f:"1435-09-21",t:"1477-01-05",d:"burgonya"},{f:"1477-01-05",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Artois: 1384 Burgonya mirası, 1482 Habsburg, 1659 (Pirene) Fransa
{ ad:"Arras", tur:"sehir", lat:50.291, lon:2.777, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1384-01-30",d:"fransa"},{f:"1384-01-30",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1659-11-07",d:"ispanya"},{f:"1659-11-07",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Lille: 1369 Burgonya çeyizi, 1668 (Aachen) Fransa
{ ad:"Lille", tur:"sehir", lat:50.633, lon:3.059, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1369-06-19",d:"fransa"},{f:"1369-06-19",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1668-05-02",d:"ispanya"},{f:"1668-05-02",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

// ── FRANSA: iç bölgeler ────────────────────────────────────────────────────
// Reims ve Troyes 1420 (Troyes Antlaşması) - 1429 (VII. Charles'ın Reims yürüyüşü)
// arası İngiliz-Burgonya idaresinde
{ ad:"Reims", tur:"sehir", lat:49.258, lon:4.031, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1420-05-21",d:"fransa"},{f:"1420-05-21",t:"1429-07-16",d:"ingiltere"},{f:"1429-07-16",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Troyes", tur:"sehir", lat:48.297, lon:4.074, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1420-05-21",d:"fransa"},{f:"1420-05-21",t:"1429-07-10",d:"ingiltere"},{f:"1429-07-10",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Orléans", tur:"sehir", lat:47.902, lon:1.909, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Tours", tur:"sehir", lat:47.394, lon:0.685, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Bourges", tur:"sehir", lat:47.081, lon:2.399, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Angers", tur:"sehir", lat:47.474, lon:-0.554, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Le Mans", tur:"sehir", lat:48.006, lon:0.199, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Poitiers", tur:"sehir", lat:46.580, lon:0.340, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Clermont-Ferrand", tur:"sehir", lat:45.777, lon:3.087, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Périgueux", tur:"sehir", lat:45.184, lon:0.721, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Cahors", tur:"sehir", lat:44.448, lon:1.441, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Toulouse", tur:"sehir", lat:43.604, lon:1.444, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Brétigny (1360) ile İngiltere'ye geçen Atlantik kıyısı parçaları
{ ad:"La Rochelle", tur:"liman", lat:46.160, lon:-1.152, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1360-10-24",d:"fransa"},{f:"1360-10-24",t:"1372-09-08",d:"ingiltere"},{f:"1372-09-08",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Limoges", tur:"sehir", lat:45.834, lon:1.262, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1360-10-24",d:"fransa"},{f:"1360-10-24",t:"1370-01-01",d:"ingiltere"},{f:"1370-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Gaskonya 1281'de Plantagenet toprağı; Bayonne 1451'de düştü
{ ad:"Bayonne", tur:"liman", lat:43.493, lon:-1.475, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1451-08-20",d:"ingiltere"},{f:"1451-08-20",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Béarn-Navarra: 1479'da Foix-Béarn hattı Navarra tacını aldı, 1620 fermanıyla Fransa'ya katıldı
{ ad:"Pau", tur:"sehir", lat:43.296, lon:-0.370, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-01",d:"fransa"},{f:"1479-01-01",t:"1620-10-19",d:"navarra"},{f:"1620-10-19",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

// ── FRANSA: doğu sınırı (Burgonya, Lorraine, Alsace, Franche-Comté) ────────
{ ad:"Dijon", tur:"sehir", lat:47.322, lon:5.041, g:0, k:1,kd:[{f:"1281-01-01",t:"1482-03-27",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1477-01-05",d:"burgonya"},{f:"1477-01-05",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Franche-Comté: imparatorluk kontluğu, Habsburg mirası, 1678 (Nijmegen) Fransa
{ ad:"Besançon", tur:"sehir", lat:47.238, lon:6.024, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1678-09-17",d:"ispanya"},{f:"1678-09-17",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Metz: serbest imparatorluk şehri, 1552'de II. Henri, 1871-1919 Alman
{ ad:"Metz", tur:"sehir", lat:49.120, lon:6.176, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1552-04-18",d:"almanya"},{f:"1552-04-18",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet"},{f:"1871-05-10",t:"1919-06-28",d:"almanya"},{f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Lorraine Dükalığı 1766'da (Stanisław'ın ölümü) Fransa'ya katıldı; 1871'de Fransız kaldı
{ ad:"Nancy", tur:"sehir", lat:48.692, lon:6.184, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1766-02-23",d:"almanya"},{f:"1766-02-23",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Strazburg", tur:"sehir", lat:48.573, lon:7.752, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1681-09-30",d:"almanya"},{f:"1681-09-30",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet"},{f:"1871-05-10",t:"1919-06-28",d:"almanya"},{f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Colmar", tur:"sehir", lat:48.079, lon:7.358, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1648-10-24",d:"almanya"},{f:"1648-10-24",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1871-05-10",d:"fransa-cumhuriyet"},{f:"1871-05-10",t:"1919-06-28",d:"almanya"},{f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Mulhouse 1515-1798 arası İsviçre Konfederasyonu'na bağlı şehir cumhuriyeti
{ ad:"Mulhouse", tur:"sehir", lat:47.750, lon:7.340, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1515-01-01",d:"almanya"},{f:"1515-01-01",t:"1798-03-15",d:"isvicre"},{f:"1798-03-15",t:"1871-05-10",d:"fransa-cumhuriyet"},{f:"1871-05-10",t:"1919-06-28",d:"almanya"},{f:"1919-06-28",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

// ── FRANSA: güneydoğu (Provence, Dauphiné, Savoya, Akdeniz) ────────────────
// Provence 1481'e kadar Anjou kontluğu — mevcut Marsilya kaydı gibi fransa'ya
// sadeleştirildi (bkz. ILERLEME); Dauphiné (1349 devri) aynı şekilde.
{ ad:"Aix-en-Provence", tur:"sehir", lat:43.530, lon:5.447, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Toulon", tur:"liman", lat:43.1222, lon:5.9384, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Grenoble", tur:"sehir", lat:45.188, lon:5.724, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Avignon 1348'de Papalığa satıldı, 1791'de Fransa ilhak etti
{ ad:"Avignon", tur:"sehir", lat:43.949, lon:4.806, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1348-06-09",d:"fransa"},{f:"1348-06-09",t:"1791-09-14",d:"papalik"},{f:"1791-09-14",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Nice 1388'de Savoya'ya geçti (dedition), 1860'ta Fransa'ya; Savoya = sardinya
// kimliği (mevcut Torino kaydıyla aynı kullanım)
{ ad:"Nice", tur:"liman", lat:43.710, lon:7.262, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1388-09-28",d:"fransa"},{f:"1388-09-28",t:"1860-06-14",d:"sardinya"},{f:"1860-06-14",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Chambéry", tur:"sehir", lat:45.564, lon:5.918, g:0, k:1,kd:[{f:"1281-01-01",t:"1720-08-02",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1860-06-14",d:"sardinya"},{f:"1860-06-14",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Montpellier 1349'da Mayorka-Aragon hattından Fransa'ya satıldı
{ ad:"Montpellier", tur:"sehir", lat:43.611, lon:3.877, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1349-01-01",d:"aragon"},{f:"1349-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
{ ad:"Narbonne", tur:"sehir", lat:43.184, lon:3.003, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },
// Roussillon: Aragon; 1463-1493 Fransız işgali (XI. Louis), 1659 (Pirene) kesin Fransız
{ ad:"Perpignan", tur:"sehir", lat:42.699, lon:2.895, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1463-01-01",d:"aragon"},{f:"1463-01-01",t:"1493-01-19",d:"fransa"},{f:"1493-01-19",t:"1659-11-07",d:"ispanya"},{f:"1659-11-07",t:"1792-09-22",d:"fransa"},{f:"1792-09-22",t:"1923-10-29",d:"fransa-cumhuriyet"}] },

// ── İBERYA: Kastilya (1479-01-20'de İspanya birliği) ───────────────────────
{ ad:"Toledo", tur:"sehir", lat:39.863, lon:-4.028, g:0, k:1,kd:[{f:"1281-01-01",t:"1479-01-20",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Valladolid", tur:"sehir", lat:41.652, lon:-4.724, g:0, k:1,kd:[{f:"1281-01-01",t:"1479-01-20",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Burgos", tur:"sehir", lat:42.344, lon:-3.697, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Salamanca", tur:"sehir", lat:40.965, lon:-5.664, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"León", tur:"sehir", lat:42.599, lon:-5.567, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Oviedo", tur:"sehir", lat:43.362, lon:-5.849, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Santander", tur:"liman", lat:43.4667, lon:-3.8115, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Bilbao", tur:"liman", lat:43.263, lon:-2.935, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"San Sebastián", tur:"liman", lat:43.318, lon:-1.981, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Cuenca", tur:"sehir", lat:40.071, lon:-2.134, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Badajoz", tur:"sehir", lat:38.879, lon:-6.970, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Kurtuba (Córdoba)", tur:"sehir", lat:37.888, lon:-4.779, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Jaén", tur:"sehir", lat:37.779, lon:-3.790, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Murcia", tur:"sehir", lat:37.984, lon:-1.129, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Cartagena", tur:"liman", lat:37.606, lon:-0.986, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Cádiz", tur:"liman", lat:36.527, lon:-6.289, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"A Coruña", tur:"liman", lat:43.371, lon:-8.396, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Santiago de Compostela", tur:"sehir", lat:42.878, lon:-8.545, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Vigo", tur:"liman", lat:42.240, lon:-8.720, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },

// ── İBERYA: Gırnata toprakları (fetih tarihleri şehir şehir) ───────────────
{ ad:"Málaga", tur:"liman", lat:36.721, lon:-4.421, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1487-08-18",d:"granada"},{f:"1487-08-18",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Ronda", tur:"sehir", lat:36.742, lon:-5.167, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1485-05-22",d:"granada"},{f:"1485-05-22",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Almería", tur:"liman", lat:36.834, lon:-2.464, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1489-12-22",d:"granada"},{f:"1489-12-22",t:"1923-10-29",d:"ispanya"}] },
// Cebelitarık: 1462 Kastilya fethi, 1704 İngiliz işgali (1713 Utrecht ile kalıcı)
{ ad:"Cebelitarık (Gibraltar)", tur:"kale", lat:36.140, lon:-5.353, g:0, k:4, d:[], s:[{f:"1281-01-01",t:"1462-08-20",d:"granada"},{f:"1462-08-20",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1704-08-04",d:"ispanya"},{f:"1704-08-04",t:"1923-10-29",enklav:true,d:"ingiltere"}] },

// ── İBERYA: Aragon tacı ────────────────────────────────────────────────────
{ ad:"Zaragoza", tur:"sehir", lat:41.649, lon:-0.888, g:0, k:1,kd:[{f:"1281-01-01",t:"1479-01-20",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Teruel", tur:"sehir", lat:40.344, lon:-1.106, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Tarragona", tur:"liman", lat:41.119, lon:1.245, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Lleida", tur:"sehir", lat:41.617, lon:0.620, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Girona", tur:"sehir", lat:41.983, lon:2.824, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
// Mayorka: mevcut "Mayorka (Palma)" kaydı var; 1479 öncesi aragon penceresi ILERLEME'de önerildi
// Alicante 1304'te (Torrellas) Kastilya'dan Aragon'a geçti
{ ad:"Alicante", tur:"liman", lat:38.345, lon:-0.481, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1304-08-08",d:"kastilya"},{f:"1304-08-08",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },

// ── İBERYA: Akdeniz ve Atlantik kıyı sıklaştırması ─────────────────────────
// Sebep (merkez oturum, hatalar 8): Granada ile Valensiya arasında 280 km
// noktasız kıyı vardı; Oran'ın (Cezayir) peteği Akdeniz'i geçip İspanya
// kıyısını boyuyordu. Afrika ile Avrupa aynı kara bileşeni olduğundan ada
// kuralı kurtarmıyor — çözüm kıyı yoğunluğu.
// Motril: Gırnata savaşının Baza-Almería kapitülasyonlarıyla aynı seferde
// teslim oldu; gün, aynı kapitülasyonun doğrulanmış tarihi olan komşusu
// Almería'dan alındı (OGRENILENLER §8: yuvarlama değil komşudan hizalama).
{ ad:"Motril", tur:"liman", lat:36.745, lon:-3.520, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1489-12-22",d:"granada"},{f:"1489-12-22",t:"1923-10-29",d:"ispanya"}] },
// Mojácar: Vera kapitülasyonuyla aynı sefer (Haziran 1488); gün Vera'nın
// doğrulanmış teslim tarihinden alındı.
{ ad:"Mojácar", tur:"sehir", lat:37.139, lon:-1.851, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1488-06-10",d:"granada"},{f:"1488-06-10",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Dénia", tur:"liman", lat:38.841, lon:0.107, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Castellón", tur:"sehir", lat:39.986, lon:-0.037, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Tortosa", tur:"sehir", lat:40.812, lon:0.521, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"aragon"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
// Balear adaları: İbiza ve Menorka (Mahon) yerlesimler.js'te ZATEN VAR
// (Menorka'nın 1708-1802 İngiliz penceresi de yazılı) — buraya eklenmedi;
// üçünün 1479 öncesi aragon penceresi DUZELTMELER'de önerildi.
// Atlantik kıyısı
{ ad:"Huelva", tur:"liman", lat:37.261, lon:-6.944, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1479-01-20",d:"kastilya"},{f:"1479-01-20",t:"1923-10-29",d:"ispanya"}] },
{ ad:"Lagos (Algarve)", tur:"liman", lat:37.102, lon:-8.674, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Setúbal", tur:"liman", lat:38.524, lon:-8.893, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Aveiro", tur:"liman", lat:40.641, lon:-8.654, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },

// ── İBERYA: Navarra ve Portekiz ────────────────────────────────────────────
{ ad:"Pamplona", tur:"sehir", lat:42.813, lon:-1.646, g:0, k:1,kd:[{f:"1281-01-01",t:"1620-10-19",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1512-07-25",d:"navarra"},{f:"1512-07-25",t:"1923-10-29",d:"ispanya"}] },
// Portekiz: İber Birliği penceresi GERİ ALINDI (gerekçe dosya başında).
// 1580-1640 şahsî birlikti, ilhak değil — sekiz nokta 1281-1923 boyunca
// tek  penceresiyle duruyor. Canlıdaki Lizbon/Porto'ya da
// eklenmeyecek; OTURUM-12-DUZELTMELER.md §B bu yüzden kapatıldı.
{ ad:"Coimbra", tur:"sehir", lat:40.203, lon:-8.410, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Braga", tur:"sehir", lat:41.545, lon:-8.427, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Évora", tur:"sehir", lat:38.571, lon:-7.907, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Faro", tur:"liman", lat:37.019, lon:-7.930, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },
{ ad:"Bragança", tur:"sehir", lat:41.806, lon:-6.757, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1581-04-16",d:"portekiz"},{f:"1581-04-16",t:"1640-12-01",d:"ispanya"},{f:"1640-12-01",t:"1923-10-29",d:"portekiz"}] },

// ── DANİMARKA: Jutland ve adalar (B-6'nın doğrudan kapanışı) ───────────────
{ ad:"Ribe", tur:"sehir", lat:55.328, lon:8.766, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Viborg (Jutland)", tur:"sehir", lat:56.451, lon:9.402, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Aarhus", tur:"liman", lat:56.157, lon:10.210, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Aalborg", tur:"liman", lat:57.048, lon:9.919, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Odense", tur:"sehir", lat:55.396, lon:10.389, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Kolding", tur:"sehir", lat:55.491, lon:9.472, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Nykøbing (Falster)", tur:"liman", lat:54.766, lon:11.876, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
{ ad:"Rønne (Bornholm)", tur:"liman", lat:55.100, lon:14.702, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"danimarka"}] },
// Schleswig 1864'te (Viyana Barışı) Prusya-Avusturya'ya; 1920 halk oylamasında
// kuzey şeridi (Aabenraa) Danimarka'ya döndü, Flensburg Almanya'da kaldı
{ ad:"Flensburg", tur:"liman", lat:54.783, lon:9.436, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1864-10-30",d:"danimarka"},{f:"1864-10-30",t:"1923-10-29",d:"almanya"}] },
{ ad:"Aabenraa", tur:"liman", lat:55.044, lon:9.417, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1864-10-30",d:"danimarka"},{f:"1864-10-30",t:"1920-06-15",d:"almanya"},{f:"1920-06-15",t:"1923-10-29",d:"danimarka"}] },

// ── İSVEÇ ──────────────────────────────────────────────────────────────────
{ ad:"Uppsala", tur:"sehir", lat:59.858, lon:17.639, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Örebro", tur:"sehir", lat:59.274, lon:15.207, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Linköping", tur:"sehir", lat:58.410, lon:15.621, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Kalmar", tur:"liman", lat:56.661, lon:16.362, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Jönköping", tur:"sehir", lat:57.782, lon:14.161, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Karlstad", tur:"sehir", lat:59.379, lon:13.504, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Gävle", tur:"liman", lat:60.675, lon:17.142, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
{ ad:"Falun", tur:"sehir", lat:60.606, lon:15.626, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
// Göteborg şehri 1621'de kuruldu ama nokta İsveç'in Kuzey Denizi koridorunu
// (Lödöse/Älvsborg, ortaçağdan beri İsveç) temsil ediyor — kur: yazılırsa
// koridor 1621 öncesinde Danimarka/Norveç peteklerine emilir ve İsveç'in
// tarihî deniz çıkışı silinir. Bu yüzden kur: KASTEN yok.
{ ad:"Göteborg", tur:"liman", lat:57.707, lon:11.967, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
// ⚠️ BOLGE kutusunun (lat 62) KUZEYİNDE — kutu açılana dek çizilmez, veri ileriye dönük
{ ad:"Sundsvall", tur:"liman", lat:62.391, lon:17.306, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"isvec"}] },
// Gotland: 1361 Valdemar Atterdag'ın fethi, 1645 (Brömsebro) İsveç'e döndü
{ ad:"Visby (Gotland)", tur:"liman", lat:57.635, lon:18.294, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1361-07-27",d:"isvec-birlik-oncesi"},{f:"1361-07-27",t:"1645-08-13",d:"danimarka"},{f:"1645-08-13",t:"1923-10-29",d:"isvec"}] },
// Skåne 1658'e (Roskilde), Halland 1645'e (Brömsebro) kadar Danimarka
{ ad:"Malmö", tur:"liman", lat:55.605, lon:13.000, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
{ ad:"Helsingborg", tur:"liman", lat:56.0500, lon:12.7005, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },
{ ad:"Halmstad", tur:"liman", lat:56.674, lon:12.857, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1645-08-13",d:"danimarka"},{f:"1645-08-13",t:"1923-10-29",d:"isvec"}] },
// Bohuslän 1658'e kadar Norveç tacında
{ ad:"Uddevalla", tur:"liman", lat:58.348, lon:11.938, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1658-02-26",d:"danimarka"},{f:"1658-02-26",t:"1923-10-29",d:"isvec"}] },

// ── NORVEÇ (1537 danimarka, 1814 isvec, 1905 norvec — bkz. başlık) ─────────
{ ad:"Bergen", tur:"liman", lat:60.393, lon:5.324, g:0, k:1,kd:[{f:"1281-01-01",t:"1537-01-01",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
// Stavanger yarımadası NE-10m kara maskesinde çözünmüyor; nokta 4 km güneybatıya,
// maskenin kara saydığı Hafrsfjord kıyısına alındı
{ ad:"Stavanger", tur:"liman", lat:58.940, lon:5.680, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
{ ad:"Tønsberg", tur:"liman", lat:59.268, lon:10.407, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
// Kristiansand 1641'de IV. Christian tarafından kuruldu
{ ad:"Kristiansand", tur:"liman", lat:58.147, lon:7.996, g:0, k:3, kur:"1641-01-01", d:[], s:[{f:"1641-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },
// ⚠️ BOLGE kutusunun (lat 62) KUZEYİNDE — kutu açılana dek çizilmez, veri ileriye dönük
{ ad:"Trondheim", tur:"liman", lat:63.431, lon:10.395, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1537-01-01",d:"norvec-kralligi"},{f:"1537-01-01",t:"1814-01-14",d:"danimarka"},{f:"1814-01-14",t:"1905-06-07",d:"isvec"},{f:"1905-06-07",t:"1923-10-29",d:"norvec"}] },

// ── FİNLANDİYA (isvec → 1809 rusya → 1917 finlandiya) ──────────────────────
{ ad:"Turku (Åbo)", tur:"liman", lat:60.452, lon:22.267, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
// Helsinki mevcut yerlesimler.js'te zaten var (kur:1550-06-12) — buraya eklenmedi
{ ad:"Hämeenlinna", tur:"kale", lat:60.996, lon:24.464, g:0, k:4, d:[], s:[{f:"1281-01-01",t:"1809-09-17",d:"isvec"},{f:"1809-09-17",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },
{ ad:"Viipuri (Vyborg)", tur:"kale", lat:60.713, lon:28.733, g:0, k:4, d:[], s:[{f:"1281-01-01",t:"1721-09-10",d:"isvec"},{f:"1721-09-10",t:"1917-12-06",d:"rusya"},{f:"1917-12-06",t:"1923-10-29",d:"finlandiya"}] },

// ── ALÇAK ÜLKELER: Hollanda Cumhuriyeti toprakları ─────────────────────────
// Zincir mevcut Amsterdam kaydıyla aynı: almanya → 1516 ispanya → 1581 hollanda
{ ad:"Rotterdam", tur:"liman", lat:51.924, lon:4.478, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Utrecht", tur:"sehir", lat:52.091, lon:5.121, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Groningen", tur:"sehir", lat:53.219, lon:6.567, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Leeuwarden", tur:"sehir", lat:53.201, lon:5.800, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Nijmegen", tur:"sehir", lat:51.843, lon:5.852, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
{ ad:"Middelburg", tur:"liman", lat:51.498, lon:3.610, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1581-07-26",d:"ispanya"},{f:"1581-07-26",t:"1923-10-29",d:"hollanda"}] },
// Maastricht 1632'de (Frederik Hendrik) Cumhuriyet'e geçti
{ ad:"Maastricht", tur:"sehir", lat:50.851, lon:5.691, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1632-08-22",d:"ispanya"},{f:"1632-08-22",t:"1923-10-29",d:"hollanda"}] },

// ── ALÇAK ÜLKELER: Belçika toprakları ──────────────────────────────────────
// Flander kontluğu 1384'e kadar Fransız tacına bağlı; sonra Burgonya → Habsburg
// → İspanyol → Avusturya Hollandası → Fransız ilhakı → Birleşik Krallık
// Hollandası → 1830 Belçika. Brabant aynı zincir, Burgonya'ya giriş 1430.
{ ad:"Brüj (Brugge)", tur:"liman", lat:51.209, lon:3.225, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1384-01-30",d:"fransa"},{f:"1384-01-30",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Gent", tur:"sehir", lat:51.054, lon:3.717, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1384-01-30",d:"fransa"},{f:"1384-01-30",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Ypres", tur:"sehir", lat:50.851, lon:2.886, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1384-01-30",d:"fransa"},{f:"1384-01-30",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Anvers (Antwerpen)", tur:"liman", lat:51.220, lon:4.400, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1430-08-04",d:"almanya"},{f:"1430-08-04",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Brüksel", tur:"sehir", lat:50.847, lon:4.352, g:0, k:1,kd:[{f:"1830-10-04",t:"1923-10-29",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1430-08-04",d:"almanya"},{f:"1430-08-04",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Namur", tur:"sehir", lat:50.467, lon:4.867, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1421-03-01",d:"almanya"},{f:"1421-03-01",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
{ ad:"Mons", tur:"sehir", lat:50.454, lon:3.952, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1433-04-11",d:"almanya"},{f:"1433-04-11",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
// Tournai 1521'e kadar Fransız kraliyet şehri (V. Karl aldı)
{ ad:"Tournai", tur:"sehir", lat:50.607, lon:3.389, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1521-11-30",d:"fransa"},{f:"1521-11-30",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
// Liège piskoposluğu 1795 Fransız ilhakına kadar imparatorluk prensliği
{ ad:"Liège", tur:"sehir", lat:50.633, lon:5.567, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1795-10-01",d:"almanya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1830-10-04",d:"hollanda"},{f:"1830-10-04",t:"1923-10-29",d:"belcika"}] },
// Lüksemburg 1443 Burgonya; 1815-1890 Hollanda kralıyla kişisel birlik, sonra ayrı hanedan
{ ad:"Lüksemburg", tur:"kale", lat:49.611, lon:6.132, g:0, k:1, d:[], s:[{f:"1281-01-01",t:"1443-11-21",d:"almanya"},{f:"1443-11-21",t:"1482-03-27",d:"burgonya"},{f:"1482-03-27",t:"1516-01-23",d:"almanya"},{f:"1516-01-23",t:"1714-03-07",d:"ispanya"},{f:"1714-03-07",t:"1795-10-01",d:"avusturya"},{f:"1795-10-01",t:"1815-06-09",d:"fransa-cumhuriyet"},{f:"1815-06-09",t:"1890-11-23",d:"hollanda"},{f:"1890-11-23",t:"1923-10-29",d:"luksemburg"}] },

// ── BATI ve KUZEY ALMANYA (Kutsal Roma = almanya, mevcut kullanım) ─────────
{ ad:"Bremen", tur:"liman", lat:53.076, lon:8.807, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Lübeck", tur:"liman", lat:53.866, lon:10.687, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
// Kiel (Holstein): Danimarka krallarının İMPARATORLUK fiefi — almanya'ya sadeleştirildi
{ ad:"Kiel", tur:"liman", lat:54.323, lon:10.140, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Rostock", tur:"liman", lat:54.089, lon:12.140, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
// İsveç Pomeranyası: Westphalia (1648) ile İsveç'e; Stettin 1720'de Prusya'ya,
// Stralsund 1815'e kadar İsveç'te
{ ad:"Stettin (Szczecin)", tur:"liman", lat:53.428, lon:14.553, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1648-10-24",d:"almanya"},{f:"1648-10-24",t:"1720-02-01",d:"isvec"},{f:"1720-02-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Stralsund", tur:"liman", lat:54.309, lon:13.082, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1648-10-24",d:"almanya"},{f:"1648-10-24",t:"1815-06-09",d:"isvec"},{f:"1815-06-09",t:"1923-10-29",d:"almanya"}] },
{ ad:"Hannover", tur:"sehir", lat:52.375, lon:9.732, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Münster", tur:"sehir", lat:51.961, lon:7.626, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Dortmund", tur:"sehir", lat:51.514, lon:7.466, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Aachen", tur:"sehir", lat:50.776, lon:6.084, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Trier", tur:"sehir", lat:49.750, lon:6.637, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Mainz", tur:"sehir", lat:49.999, lon:8.273, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Kassel", tur:"sehir", lat:51.313, lon:9.492, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Magdeburg", tur:"sehir", lat:52.131, lon:11.640, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Leipzig", tur:"sehir", lat:51.340, lon:12.375, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Erfurt", tur:"sehir", lat:50.978, lon:11.029, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Würzburg", tur:"sehir", lat:49.791, lon:9.953, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Nürnberg", tur:"sehir", lat:49.454, lon:11.077, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Regensburg", tur:"sehir", lat:49.019, lon:12.097, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Augsburg", tur:"sehir", lat:48.371, lon:10.898, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Ulm", tur:"sehir", lat:48.401, lon:9.987, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Stuttgart", tur:"sehir", lat:48.776, lon:9.183, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Freiburg", tur:"sehir", lat:47.999, lon:7.842, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },
{ ad:"Konstanz", tur:"sehir", lat:47.660, lon:9.175, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1923-10-29",d:"almanya"}] },

// ── İSVİÇRE (kantonların konfederasyona katılış tarihleriyle) ──────────────
{ ad:"Luzern", tur:"sehir", lat:47.050, lon:8.310, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1332-11-07",d:"almanya"},{f:"1332-11-07",t:"1923-10-29",d:"isvicre"}] },
{ ad:"Zürih", tur:"sehir", lat:47.377, lon:8.541, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1351-05-01",d:"almanya"},{f:"1351-05-01",t:"1923-10-29",d:"isvicre"}] },
{ ad:"Bern", tur:"sehir", lat:46.948, lon:7.447, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1353-03-06",d:"almanya"},{f:"1353-03-06",t:"1923-10-29",d:"isvicre"}] },
{ ad:"Basel", tur:"sehir", lat:47.559, lon:7.588, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1501-07-13",d:"almanya"},{f:"1501-07-13",t:"1923-10-29",d:"isvicre"}] },
// Cenevre: piskoposluk şehri; 1536'da reform + Bern ittifakıyla fiilen konfederasyon yörüngesinde
{ ad:"Cenevre", tur:"sehir", lat:46.204, lon:6.143, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1536-01-01",d:"almanya"},{f:"1536-01-01",t:"1923-10-29",d:"isvicre"}] },
// Vaud 1536'ya kadar Savoya'da (sardinya kimliği), sonra Bern idaresi
{ ad:"Lozan", tur:"sehir", lat:46.520, lon:6.632, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1536-01-01",d:"savoya"},{f:"1536-01-01",t:"1923-10-29",d:"isvicre"}] },

// ── İTALYA: kuzey (Po ovası ve Veneto) ─────────────────────────────────────
// Venedik karası: 1405 dolayı fetihler; 1797-05-12 Cumhuriyet'in sonu (mevcut
// Venedik kaydıyla aynı), Veneto 1866-10-03 İtalya, Lombardiya 1859-06-04 Sardinya
{ ad:"Verona", tur:"sehir", lat:45.438, lon:10.992, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1405-06-22",d:"milanoduka"},{f:"1405-06-22",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
{ ad:"Padova", tur:"sehir", lat:45.407, lon:11.876, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1405-11-22",d:"milanoduka"},{f:"1405-11-22",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
{ ad:"Brescia", tur:"sehir", lat:45.539, lon:10.221, g:0, k:2, d:[], s:[{f:"1281-01-01",t:"1426-01-01",d:"milanoduka"},{f:"1426-01-01",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1859-06-04",d:"avusturya"},{f:"1859-06-04",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Bergamo", tur:"sehir", lat:45.698, lon:9.677, g:0, k:2, d:[], s:[{f:"1281-01-01",t:"1428-01-01",d:"milanoduka"},{f:"1428-01-01",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1859-06-04",d:"avusturya"},{f:"1859-06-04",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// Friuli 1420'de Venedik'e (Aquileia patrikliğinden)
{ ad:"Udine", tur:"sehir", lat:46.065, lon:13.235, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1420-06-07",d:"almanya"},{f:"1420-06-07",t:"1797-05-12",d:"venedik"},{f:"1797-05-12",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
// Trieste 1382'de Habsburg'a dedition; 1918'de İtalya
{ ad:"Trieste", tur:"liman", lat:45.650, lon:13.770, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1382-09-30",d:"almanya"},{f:"1382-09-30",t:"1918-11-03",d:"avusturya"},{f:"1918-11-03",t:"1923-10-29",d:"italya"}] },
// Trento piskoposluğu 1803'te sekülerleşip Avusturya'ya katıldı
{ ad:"Trento", tur:"sehir", lat:46.067, lon:11.121, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1803-02-25",d:"almanya"},{f:"1803-02-25",t:"1918-11-03",d:"avusturya"},{f:"1918-11-03",t:"1923-10-29",d:"italya"}] },
// Mantua: Gonzaga dükalığı, 1708'de Avusturya'ya geçti
{ ad:"Mantova", tur:"sehir", lat:45.156, lon:10.791, g:0, k:1,kd:[{f:"1281-01-01",t:"1328-08-16",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1708-01-01",d:"mantua"},{f:"1708-01-01",t:"1866-10-03",d:"avusturya"},{f:"1866-10-03",t:"1923-10-29",d:"italya"}] },
// Parma: Visconti alanı → 1512 Papalık → 1545 Farnese dükalığı → 1860 birlik
{ ad:"Parma", tur:"sehir", lat:44.801, lon:10.328, g:0, k:1,kd:[{f:"1545-08-16",t:"1860-03-18",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1512-06-24",d:"milanoduka"},{f:"1512-06-24",t:"1545-08-16",d:"papalik"},{f:"1545-08-16",t:"1860-03-18",d:"parma"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// Este hanedanı: Ferrara 1598'de Papalığa devredildi, Modena'da 1859'a dek sürdü
{ ad:"Ferrara", tur:"sehir", lat:44.836, lon:11.619, g:0, k:1,kd:[{f:"1281-01-01",t:"1598-01-01",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1598-01-29",d:"ferrara"},{f:"1598-01-29",t:"1860-03-18",d:"papalik"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Modena", tur:"sehir", lat:44.647, lon:10.925, g:0, k:1,kd:[{f:"1598-01-01",t:"1859-01-01",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1860-03-18",d:"ferrara"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },

// ── İTALYA: Papalık toprakları ve Toskana ──────────────────────────────────
{ ad:"Bolonya", tur:"sehir", lat:44.494, lon:11.343, g:0, k:2, d:[], s:[{f:"1281-01-01",t:"1860-03-18",d:"papalik"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// Ravenna ve Rimini: 15. yy'daki Venedik/Malatesta pencereleri sadeleştirildi (bkz. ILERLEME)
{ ad:"Ravenna", tur:"sehir", lat:44.418, lon:12.203, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1860-03-18",d:"papalik"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Rimini", tur:"liman", lat:44.060, lon:12.565, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1860-03-18",d:"papalik"},{f:"1860-03-18",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Ancona", tur:"liman", lat:43.617, lon:13.517, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1860-09-29",d:"papalik"},{f:"1860-09-29",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
{ ad:"Perugia", tur:"sehir", lat:43.111, lon:12.389, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1860-09-14",d:"papalik"},{f:"1860-09-14",t:"1861-03-17",d:"sardinya"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// Siena cumhuriyeti 1555'te düştü (İspanyol garnizonu), 1557'de Toskana'ya devredildi
{ ad:"Siena", tur:"sehir", lat:43.319, lon:11.331, g:0, k:1,kd:[{f:"1281-01-01",t:"1555-04-17",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1555-04-17",d:"siena"},{f:"1555-04-17",t:"1557-07-03",d:"ispanya"},{f:"1557-07-03",t:"1861-03-17",d:"toskana"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },
// Pisa cumhuriyeti 1406'da Floransa'ya düştü
{ ad:"Pisa", tur:"sehir", lat:43.716, lon:10.397, g:0, k:1,kd:[{f:"1281-01-01",t:"1406-10-09",k:1,m:null}], d:[], s:[{f:"1281-01-01",t:"1406-10-09",d:"piza"},{f:"1406-10-09",t:"1861-03-17",d:"toskana"},{f:"1861-03-17",t:"1923-10-29",d:"italya"}] },

// ── İTALYA: güney (Napoli Krallığı = napoli, mevcut kullanım) ──────────────
{ ad:"L'Aquila", tur:"sehir", lat:42.350, lon:13.399, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Bari", tur:"liman", lat:41.117, lon:16.871, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Foggia", tur:"sehir", lat:41.462, lon:15.544, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Cosenza", tur:"sehir", lat:39.298, lon:16.253, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Reggio Calabria", tur:"liman", lat:38.111, lon:15.647, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },
{ ad:"Katanya (Catania)", tur:"liman", lat:37.502, lon:15.087, g:0, k:3, d:[], s:[{f:"1281-01-01",t:"1861-02-13",d:"napoli"},{f:"1861-02-13",t:"1923-10-29",d:"italya"}] },

];

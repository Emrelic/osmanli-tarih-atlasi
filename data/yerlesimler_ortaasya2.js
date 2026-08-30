// ============================================================================
// YERLEŞİM VERİ SETİ — ORTA ASYA İKİNCİ PARTİ  (Oturum 11, devam)
// Ahal vahasının batısı + Kazak bozkırının pencere içi kısmı — 7 nokta
// ============================================================================
// Birinci parti (16 nokta) r83'te canlıda; arşiv kopyası
// arsiv/yerlesimler_ortaasya.BIRLESTIRILDI.js. Bu dosya onun DEVAMIDIR,
// tekrarı değil: 7 kaydın hiçbiri mevcut 917 noktada yok (ad çakışması 0).
//
// ---------------------------------------------------------------------------
// ⚠️ NEDEN AYRI DOSYA — kilit
// ---------------------------------------------------------------------------
// Merkez oturum "data/yerlesimler.js'e yazabilirsin ama dosya çok sahipli ve
// KİLİTLİ, kilidi ilân eden değil BIRAKAN taraf açar" dedi. Kimse bana devir
// yapmadı. Üstelik yazarken başka bir oturum girdi dosyalarını okuyan iki
// ölçüm betiği koşturuyordu (PID 18084/19100 — pencere genişletme maliyeti
// ölçümü). OGRENILENLER.md §4'teki kayıt tam bu: "iki kez de 'dosya temiz
// görünüyor, kilit yok' diye bakıp yazdım" — yedi üretim böyle gitti.
// Bu yüzden çekirdeğe DOKUNMADIM, ayrı dosya yazdım.
//
// Ayrı dosya güvenli, çünkü arac/girdi.py glob değil İZİN LİSTESİ kullanıyor
// (kendi başlığında gerekçesi yazılı): bu dosya GIRDI_DOSYALARI'na
// eklenmedikçe motor onu okumaz. Yani depoda durması mükerrer nokta üretmez.
// Canlıya alma yolu girdi.py'nin başlığında tarif edildiği gibidir.
//
// ---------------------------------------------------------------------------
// ⚠️ BU PARTİNİN ASIL SEBEBİ — BİRİNCİ PARTİNİN AÇTIĞI HATA
// ---------------------------------------------------------------------------
// Ölçtüm ve doğruladım: birinci partideki Küngrat noktası (43.083/58.833)
// Hazar'ın doğusunu kurtarırken bozkırı kendine bağladı. Küngrat eklenmeden
// önce Aral'ın kuzeyi hiçbir peteğe yakın değildi; şimdi **en yakın nokta
// Küngrat** ve arada 475 km var. Yani Hîve Hanlığı'nın rengi bütün Kazak
// bozkırına taşacak — emilme hatasını Hazar'dan alıp Aral'ın kuzeyine
// taşımışım. Bu parti onu kapatıyor:
//
//   Kazak bozkırı (48-62°D / 43-52°K, 1705 ızgara hücresi, ölçüt 300 km)
//     mevcut 917 nokta  : en kötü 721 km · 300 km'yi aşan 729 hücre
//     bu 5 nokta ile     : en kötü 360 km · 300 km'yi aşan  23 hücre
//   Kalan tek boşluk 51.75°K / 61.75°D — güney Ural / Turgay, yani
//   OTURUM-16-KUZEY-DOGU-AVRUPA'nın kutusu (44-62°K). Bana ait değil.
//
// ---------------------------------------------------------------------------
// 🔴 AYRI VE DAHA BÜYÜK BİR BULGU — ARAL GÖLÜ MASKEDE YOK
// ---------------------------------------------------------------------------
// Bu dosya ONU DÜZELTMİYOR (veri-kaynak/ ve uret_petek.py benim değil), ama
// ölçtüm ve bildiriyorum. Natural Earth 10 m **kuruma SONRASI** Aral'ı
// modelliyor; göl katmanında yalnız iki artık var:
//     "South Aral Sea"  58.22-59.31°D / 44.42-46.01°K
//     "North Aral Sea"  59.98-61.53°D / 46.09-46.78°K
// Oysa 1281-1923 boyunca Aral 43.5-46.8°K / 58.2-61.8°D aralığını dolduran
// ~68.000 km²'lik bir göldü. Ölçüm: o kutunun maskede KARA olan kısmı
// ~88.000 km² ve 447 örnek hücrenin dağılımı şöyle:
//     Küngrat                 424 hücre  %95
//     Üstyurt platosu (doğu)   23 hücre  %5
// Yani **haritada Aral gölünün yerini Hîve Hanlığı rengi dolduracak.**
// Bu, projenin zaten tanıdığı sınıfın aynadaki hâlidir: modern baraj
// gölleri KASTEN çıkarılmıyor (anakronik delik açıyorlardı); Aral ise tersi
// — küçüldüğü için modern maske onu EKSİK gösteriyor.
// Önerim uret_petek.py'yi tutan oturuma: 1960 kıyı çizgisiyle bir
// "tarihî Aral" poligonu göl çıkarma kümesine eklensin. Kaba kutu
// box(58.2, 43.5, 61.8, 46.8) bile bugünkü hâlden iyidir; doğrusu 1960
// kıyı çizgisidir.
// ⚠️ Bu dosyanın 7 noktasından HİÇBİRİ o kutunun içinde değil — kontrol
// edildi. İlk denemede "Aral kuzeyi 46.80/61.00" ve "Aral kuzeybatısı
// 45.60/58.50" yazmıştım; ikisi de tarihî gölün İÇİNE düşüyordu, taşındılar.
//
// ---------------------------------------------------------------------------
// ✅ İKİ DEVLET KİMLİĞİ — artık TANIMLI (Oturum 15/16, isim kararı kesinleşti)
// ---------------------------------------------------------------------------
//     nogay          Nogay Ordası      TDV: nogaylar
//     kazak-hanligi  Kazak Hanlığı     TDV: kazaklar · kazakistan
// Merkez oturumun kararı `kazak-hanligi` oldu (kısa `kazak` DEĞİL) — gerekçe:
// "kazak" Türkçede iki ayrı halkı gösteriyor (Kazak Hanlığı ve Ukrayna
// kazakları), atlas ikisinin de coğrafyasını kapsıyor, kısa kimlik bir gün
// ikisini sessizce karıştırabilirdi. `renkler.py`'ye ikisi de eklendi
// (`kazak-hanligi` #ad1457, `nogay` #f9a825, ölçülerek: en yakın komşuya
// ΔE 14,9 / 21,2). Bu dosyadaki üç `kazak` kaydı `kazak-hanligi`'ye
// yeniden adlandırıldı (Aral kuzeyi, Üstyurt kuzeyi, Emba (Cem)).
// Tam künye, komşuluk çizgesi: oturumlar/OTURUM-11-KIMLIK.md
//
// TANIMLI kimliklerden kullanılanlar: ilhanli · altinorda · timurlu · safevi ·
// iran · turkmen · rusya · nogay · kazak-hanligi.
//
// ---------------------------------------------------------------------------
// KAYNAKLAR — slug'lar <title> ile doğrulandı
// ---------------------------------------------------------------------------
//   nogaylar   → NOGAYLAR ✓   Altın Orda'nın dağılmasıyla doğdu; doğu sınırı
//                "Emba nehrinden Aral gölüne"; 1557-58 Küçük Nogay ayrılması;
//                XVII. yy boyunca Kalmuk baskısı, 1644 Kalmuk seferi.
//   kazaklar   → KAZAKLAR ✓   İlk birleşik Kazak Hanlığı XVI. yy başlarında
//                Kasım Han tarafından; XVII. yy sonunda bugünkü Kazakistan
//                sınırlarına yakın genişleme; Rus düzenlemeleri 1822, 1824,
//                1867, 1868, 1891.
//   turkmenistan → TÜRKMENİSTAN ✓  24 Ocak 1881 Göktepe, **30 Ocak 1881
//                Aşkabad**, 1884 Merv; Türkmen boyları "yaklaşık 1860-1884"
//                fiilî bağımsızlık.
// TDV'de maddesi OLMAYANLAR (arama sıfır sonuç): Ferâva/Parav, Kızılarvat,
// Emba, Aktöbe, Guryev. Zincirleri bölge maddelerinden ve komşu kayıtlardan
// türetildi, her biri aşağıda tek tek işaretli.
//
// ---------------------------------------------------------------------------
// ⚠️ UYDURMA KESİNLİK YOK — yıl başına yaslananlar ve EN ZAYIF HALKA
// ---------------------------------------------------------------------------
//   1500-01-01  Nogay Ordası ve Kazak Hanlığı'nın sahneye çıkışı. TDV ikisi
//               için de yıl vermiyor ("Altın Orda'nın dağılma süreci",
//               "XVI. yüzyılın başlarında Kasım Han"). Yüzyıl başına yaslandı.
//   1644-01-01  ⚠️ EN ZAYIF HALKA. Emba-Üstyurt şeridinin Nogay'dan Kazak'a
//               geçişi. TDV yalnız "1644 Kalmuk seferi"ni ve "XVII. yy sonunda
//               Kazaklar bugünkü sınırlara yaklaştı"yı veriyor; devir yılı
//               yazılı DEĞİL. TDV'nin verdiği tek yıla yaslandım. Daha iyi
//               kaynak bulunursa ilk düzeltilecek satır budur.
//   1868-01-01  Bozkırın Rus idaresine geçişi. TDV'nin saydığı düzenleme
//               yıllarından (1822·1824·1867·1868·1891) 1868 seçildi: Ural ve
//               Turgay oblastlarını kuran düzenleme o yıldır.
//   1640-01-01  Guryev'in kuruluşu — yıl hassasiyetinde, gün yazılmadı.
//   1869-01-01  Aktöbe'nin Rus karakolu olarak kuruluşu — yıl hassasiyetinde.
//   1860-01-01  Türkmen boylarının fiilî bağımsızlığı (TDV "yaklaşık 1860").
// Gün verilen tek kırılma: **1881-01-30** (Aşkabad, TDV TÜRKMENİSTAN) ve
// çekirdek zincirden aynen alınan 1335-12-01, 1381-01-01, 1507-05-24,
// 1510-12-02, 1736-03-08.
//
// ---------------------------------------------------------------------------
// ⚠️ kur: ALANI — Öncelik 4
// ---------------------------------------------------------------------------
// DURUM.md'nin ölçümü: 1281'de 851 nokta, 1923'te 892 — atlasın zaman çizgisi
// neredeyse düz, çünkü kur: neredeyse hiç yazılmamış ve motor okumuyor.
// Bu partide kur: taşıyan ÜÇ kayıt var ve üçü de gerçekten o tarihte kurulmuş:
//     Aşkabad  1881-01-30   Rus Mâverâ-yi Hazar merkezi
//     Aktöbe   1869-01-01   Rus bozkır karakolu
//     Guryev   1640-01-01   Yayık ağzındaki Rus kalesi
// Bunların 1281'den kuruluşa kadarki dönemi sahipsiz DEĞİL: aynı coğrafyayı
// taşıyan dolgu noktaları (Emba, Üstyurt kuzeyi, Aral kuzeyi, Nesâ) o
// pencerede sahibi yazıyor. Krasnovodsk + Çeleken çiftinde kurulan desen.
//
// ⚠️ MERKEZ OTURUMA ÜÇ DÜZELTME (Öncelik 1 listesi hakkında)
//   • Çârcûy (39.083/63.583) ve Kerki (37.833/65.200) **62°D'nin DOĞUSUNDA**,
//     yani pencere dışı. Ayrıca ikisi de OTURUM-15-KOPRU-BOLGESI kutusunun
//     (60-70°D / 23-40°K) içinde — o oturumun işi, benim değil. YAZMADIM.
//   • "Gürgenç" ile "Köneürgenç" AYNI şehir; birinci partide
//     "Köhne Ürgenç (Gürgenç)" olarak tek kayıt hâlinde zaten var.
//   • Nebitdağ (Balkanabat) **1933'te** Neftedag adıyla kurulmuş bir Sovyet
//     petrol kasabası — atlasın 1281-1923 ufkunun dışında. YAZMADIM;
//     o kıyıyı birinci partinin Çeleken ve Krasnovodsk noktaları taşıyor.
// ============================================================================

window.YERLESIMLER_ORTAASYA2 = [

// ===== 1. AHAL VAHASININ BATISI — ölçülmüş 145 km'lik boşluk =====

// Ahal vahasının batı ucu. Ölçüm: bu nokta olmadan Kopet Dağ eteği ve
// Etrek-Gürgan şeritlerinde en kötü uzaklık 145 km (@38.50/56.30); nokta
// eklenince 130 ve 127 km'ye iniyor. Çöl ölçütü (300 km) zaten sağlanıyordu,
// vaha ölçütü (120 km) hâlâ tam sağlanmıyor — kalan sapma dağ yamacında,
// yerleşim olmayan kesimde.
// ⚠️ Ad: ortaçağ kaynaklarında bu kesim Ferâva (Parav) ribâtı olarak geçer
// ama TDV'de müstakil maddesi YOKTUR (arama sıfır sonuç; yalnız Dandanakan
// ve Herat maddelerinin içinde "Nesâ, Bâverd ve Ferâvâ" diye anılıyor).
// Ribât mevkii bu noktanın ~20 km batısındadır; nokta vahayı temsil ediyor,
// tek bir yapıyı değil. Bu yüzden Rus devrindeki adı esas alındı.
// Zincir Nesâ ve Ebîverd ile birebir aynıdır (Ahal tek birim sayıldı);
// vahanın batı ucunun Hîve ile İran arasında sürekli çekişmeli olduğunu not
// olarak bırakıyorum — ayrı kimlik yazmaya yetecek yazılı tarih bulamadım.
{ ad:"Kızılarvat", tur:"sehir", lat:38.9833, lon:56.2833, g:0, k:3, d:[],
  s:[{f:"1281-01-01", t:"1337-09-09", d:"ilhanli"},
     {f:"1337-09-09", t:"1381-01-01", d:"serbedariler"},
     {f:"1381-01-01", t:"1507-05-24", d:"timurlu"},
     {f:"1507-05-24", t:"1510-12-02", d:"iran"},
     {f:"1510-12-02", t:"1736-03-08", d:"safevi"},
     {f:"1736-03-08",t:"1796-01-01",d:"afsar"}, {f:"1796-01-01",t:"1860-01-01",d:"turkmen"},
     {f:"1860-01-01", t:"1881-01-30", d:"turkmen"},
     {f:"1881-01-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Aşkabad. TDV TÜRKMENİSTAN: "1881: Aşkabad işgal edildi (30 Ocak)" —
// Göktepe'nin düşüşünden (24 Ocak 1881) altı gün sonra. Rus Mâverâ-yi Hazar
// (Hazar Ötesi) idarî bölgesinin merkezi oldu.
// ⚠️ GEOMETRİK KATKISI YOK: Nesâ'ya 17 km. Merkez oturum Öncelik 1'de
// açıkça istedi ve Öncelik 4 (kur:) için gerçek bir örnek olduğu için
// yazıldı; peteği Nesâ'nın vahasını böler, yeni alan kazandırmaz.
// Öncesi Teke Türkmenleri'nin köyüdür; şehir 1881'de Rus garnizonuyla
// kuruldu, o yüzden kur: o güne yazıldı ve 1881 öncesi dönem YOK.
// O pencerede aynı vahanın sahibini komşu Nesâ kaydı taşıyor.
{ ad:"Aşkabad", tur:"sehir", lat:37.9500, lon:58.3800, g:1, k:3, d:[],
  kur:"1881-01-30",
  s:[{f:"1881-01-30",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ===== 2. KAZAK BOZKIRI — Küngrat'ın kuzeye taşmasını durduran beş nokta =====

// Aral'ın KUZEYİ. ⚠️ Koordinat tarihî gölün kuzey kıyısının DIŞINDA seçildi
// (47.20°K; 1960 kıyısı ~46.8°K). Maskede kara, 1960 Aral kutusunun dışında.
// Kazak Hanlığı'nın çekirdeği Seyhun (Sirderya) boyudur; TDV KAZAKLAR ilk
// birleşik hanlığı XVI. yy başlarına, Kasım Han'a bağlıyor. Bu yüzden burada
// Nogay penceresi YOK — bozkırın bu ucu doğrudan Altın Orda'dan Kazak'a geçer.
{ ad:"Aral kuzeyi", tur:"bolge", lat:47.2000, lon:61.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1500-01-01", d:"altinorda"},
     {f:"1500-01-01", t:"1868-01-01", d:"kazak-hanligi"},
     {f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Üstyurt platosunun KUZEY ucu — birinci partideki "Üstyurt platosu (batı)"
// ve "(doğu)" noktalarının kuzeyi. ⚠️ Koordinat tarihî Aral'ın batısında
// (56.50°D; göl 58.2°D'den başlıyor).
// TDV NOGAYLAR: Nogay yurdunun doğu sınırı "Emba nehrinden Aral gölüne"
// uzanır — bu nokta tam o şeritte, o yüzden Nogay penceresi var.
// ⚠️ Birinci partideki iki Üstyurt noktası KASTEN SAHİPSİZDİ (susuz plato,
// devletsiz). Bu nokta sahipli, çünkü Nogay ve Kazak boy yurtlarının yazılı
// sınırı buradan geçiyor — plato içi ile plato kuzeyi aynı iddia değil.
{ ad:"Üstyurt kuzeyi", tur:"bolge", lat:45.6000, lon:56.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1500-01-01", d:"altinorda"},
     {f:"1500-01-01", t:"1644-01-01", d:"nogay"},
     {f:"1644-01-01", t:"1868-01-01", d:"kazak-hanligi"},
     {f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Emba (Cem) ırmağı havzası — TDV NOGAYLAR'ın adıyla andığı doğu sınırı.
// Zincir Üstyurt kuzeyi ile aynıdır.
{ ad:"Emba (Cem)", tur:"bolge", lat:47.5000, lon:57.5000, g:0, k:0, d:[],
  s:[{f:"1281-01-01", t:"1500-01-01", d:"altinorda"},
     {f:"1500-01-01", t:"1644-01-01", d:"nogay"},
     {f:"1644-01-01", t:"1868-01-01", d:"kazak-hanligi"},
     {f:"1868-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Aktöbe (Aktyubinsk) — 1869'da Rus bozkır karakolu olarak kuruldu.
// ⚠️ TDV'de maddesi yok; kuruluş yılı standart akademik referanstan,
// gün verilmediği için yıl başına yaslandı (CLAUDE.md §4).
// 1869 öncesi bozkırın sahibini komşu Emba ve Üstyurt kuzeyi kayıtları taşır.
{ ad:"Aktöbe", tur:"kale", lat:50.2833, lon:57.1667, g:0, k:4, d:[],
  kur:"1869-01-01",
  s:[{f:"1869-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// Guryev (Atyrau) — Yayık (Ural) ırmağının Hazar'a döküldüğü yerde 1640'ta
// Guryev ailesinin kurduğu Rus balıkçı kalesi; taş kale 1640'ların sonunda.
// ⚠️ TDV'de maddesi yok. Kuruluş yıl hassasiyetinde.
// Hazar'ın KUZEYDOĞU köşesini kapatıyor — birinci parti raporunda "kapsam
// dışı, öneri olarak bırakıldı" diye işaretlediğim nokta budur; Kazak
// bozkırı partisiyle birlikte artık gerekli oldu (Astrahan'a 308 km).
{ ad:"Guryev (Atyrau)", tur:"liman", lat:47.1100, lon:51.9200, g:0, k:3, d:[],
  kur:"1640-01-01",
  s:[{f:"1640-01-01",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

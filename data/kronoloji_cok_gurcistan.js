// -*- coding: utf-8 -*-
// =====================================================================
// GÜRCİSTAN — çok künyeli kronoloji (KRONO-KAFKAS-0929, 29 Eylül 2026)
// =====================================================================
// window.KRONOLOJI_COK_GURCISTAN — şartname oturumlar/KRONO-KAFKAS-0929.md
// + oturumlar/KRONO-DUNYA-0929-ORTAK.md §4.1 (M-5396: KRONOLOJI_<ÜLKE> adı
// künyeye bağlanmıyor/eziyor ⇒ COK yolu). app.js cokTarafliKronolojiEkle
// her maddeyi `devletler[]`deki HER künyeye EKLER (ezmez; t+b mükerrerini atar).
//
// 🔴 KAPSAM: bu dosya data/kronoloji_gurcistan.js'in (45 madde, KRONO-BAGLAMA
// paketinin işi) TAMAMLAYICISIDIR — oradaki hiçbir olay burada TEKRAR EDİLMEDİ.
// Yazmadan önce 128 kronoloji/olay dosyası tarandı (Tiflis, Sohum, Batum,
// Ahıska, Acara, Revan, Kartli, Kaheti, İmereti, Megrel, Abhaz … 228 anılma);
// başka dosyada duran olay (1440/1458/1476/1489 Tiflis seferleri, 1612 Nasuh
// Paşa, 1613/1616 Kaheti seferleri, 1826 Akkirman, 1878 Berlin, 1918-06-04
// Batum, 1918-12-24 İngiliz işgali, 1920 Batum devri …) YAZILMADI.
//
// 🔴 GÜRCİSTAN TEK DEVLET DEĞİLDİR. devletler.js'te yalnız şu künyeler var:
//   gurcistan (1008-1801, Kartli-Kaheti'yi de taşır) · imereti (1490-1810) ·
//   kaheti-kralligi (YALNIZ 1578-08-09→1606) · gurcistan-demokratik-cumhuriyeti
//   (1918-1921) · transkafkasya (1917-11-07→1918-05-28).
//   Kartli, Samçhe atabekliği, Guria, Megrelya (Dadyan), Abhazya, Revan Hanlığı
//   için künye BUGÜN YOK. M-5416 kuralı (3): madde OLAYIN GÜNÜNDEKİ polity'ye
//   bağlanır; künyesi yoksa ÖNERİLEN id yazılır (kartli-kralligi ·
//   samtshe-atabegligi · megrelya-prensligi · abhazya-prensligi · revan-hanligi ·
//   cenub-i-garbi-kafkas — KUNYE-DUNYA-0929 eksik listesindeki id'ler; guria-prensligi
//   bu paketin önerisi). Künye açılınca kendiliğinden bağlanır; o güne dek madde
//   var olan künyeye de (gurcistan / imereti / rusya) bağlı olduğu için ekranda
//   görünür. Ardıl künyeye geriye dönük bağlama YOK. Öneriler:
//   denetim/KRONO-KAFKAS-0929-KUNYE.md.
//
// KAYNAK: TDV İslâm Ansiklopedisi birincil; gövdeler bu turda çekilip
// denetim/KRONO-KAFKAS-0929-tdv-onbellek/ altına yazıldı (tiflis, sohum,
// acara, batum, ahiska, cildir-eyaleti, revan, kars, sevr-antlasmasi …) +
// denetim/KAFKAS-KORFEZ-0081-tdv-onbellek/gurcistan.txt (3 bölüm, 1996).
// Her maddenin `kaynak:` alanı yük taşıyan maddeyi adıyla anar.
// Gün kaynakta yoksa t = YYYY-01-01 ve `gun:` alanı durumu açıklar.
// Değişmez 2 notu: denetle.py evreni olaylar*.js + kronoloji_sinir*.js'tir;
// bu dosya o evrende DEĞİLDİR (kırılma kapatmaz, ekranda görünür).
// Harita önerileri: denetim/KRONO-KAFKAS-0929-YERLESIM-ONERI.md
// Mevcut maddelerdeki kusurlar: denetim/KRONO-KAFKAS-0929-DUZELTME.md

window.KRONOLOJI_COK_GURCISTAN = [

// === 15. YÜZYIL ===========================================================
{ t:"1413-01-01", devlet:"gurcistan", devletler:["gurcistan"],
  b:"I. Alexandre Tiflis'teki Timurlu hâkimiyetine son verdi", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Tiflis", gun:"1413 (TDV gün vermez)",
  d:"Timur'un 1386-1403 seferlerinden sonra Tiflis'te kalan Timurlu idaresini Bagratlı I. Alexandre 1413'te sona erdirdi. Alexandre (1412-1442) ülkenin birliğini bir kez daha sağladı; onun ölümünden sonraki veraset kavgaları krallığı üç krallık ve beş beyliğe bölecekti.",
  kaynak:"TDV tiflis ('Alexandre 1413'te Tiflis'teki Timurlu hâkimiyetine son verdi') + TDV gurcistan 2. bölüm (Karamanlı 1996: I. Alexandre 1412-1442 birliği sağladı)" },

{ t:"1454-06-01", devlet:"gurcistan", devletler:["gurcistan"],
  b:"Osmanlı donanması Sohum'u vurdu — Batı Gürcistan kıyısıyla ilk ciddi temas", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Sohum", gun:"Haziran 1454 (Ceneviz kaynakları, TDV gurcistan); Gürcü kronikleri 1455 der — gün yok",
  d:"Elli altı gemilik bir Osmanlı donanması Sohum kıyısına gelip kaleyi ve Batı Gürcistan sahillerini vurdu. 1451'de itaat edip sonra haracını kesen kale böylece yeniden Osmanlı'ya bağlandı; ancak idari teşkilat kurulmadı, yönetim haraç karşılığı yerel beylere bırakıldı. Osmanlı'nın Gürcü dünyasıyla ilk kalıcı bağı böylece Abhaz ve Dadyan (Megrel) kıyısında kuruldu.",
  ic_not_d:"TDV gurcistan (3. bölüm): Ceneviz kaynakları Haziran 1454, Gürcü kronikleri 1455 der. TDV sohum: '1454'te Osmanlı donanmasınca tahrip edilerek tekrar ele geçirildi'. İdari teşkilat kurulmadığı için haritada sahip değişimi beklenmez.",
  kaynak:"TDV gurcistan 3. bölüm (Karamanlı 1996) + TDV sohum" },

// === 16. YÜZYIL ===========================================================
{ t:"1508-01-01", devlet:"imereti", devletler:["imereti","guria-prensligi"],
  b:"İmereti (Açıkbaş) ve Güryel Osmanlı'ya haraca bağlandı", tur:"siyaset", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  yer_id:"Kutaisi", gun:"1508 (TDV gün vermez)",
  d:"Trabzon sancakbeyi olan şehzade Selim, Batı Gürcistan'daki Güryel beyliğini ve İmereti (Osmanlı kaynaklarında Açıkbaş) krallığını Osmanlı'ya itaat ettirip haraca bağladı. Böylece Osmanlı nüfuzu Karadeniz kıyısını aşıp Batı Gürcistan içlerine ulaştı.",
  ic_not_d:"Haritada Kutaisi'nin tâbilik (v:) penceresi 1555-05-29'da başlıyor; 1508 haraç bağı haritaya yansımıyor — öneri: denetim/KRONO-KAFKAS-0929-YERLESIM-ONERI.md.",
  kaynak:"TDV gurcistan 3. bölüm ('Yavuz Sultan Selim Trabzon valisi iken 1508'de Güryel ve İmeret (Açıkbaş) Krallığı'nı Osmanlılar'a itaat ettirip haraca bağlamıştı') + TDV acara" },

{ t:"1521-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","safevi"],
  b:"Şah İsmail Tiflis'i ele geçirdi", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Tiflis", gun:"1521 (TDV gün vermez)",
  d:"Gürcistan'a karşı sefer düzenleyen Safevî hükümdarı Şah İsmail aynı yıl Tiflis'i aldı. Safevîlerin Doğu Gürcistan üzerindeki baskısı Şah Tahmasb döneminde daha da ağırlaşacaktı.",
  kaynak:"TDV tiflis ('1521'de Gürcistan'a karşı sefer düzenleyen Şah İsmâil aynı yıl Tiflis'i ele geçirdi')" },

{ t:"1535-01-01", devlet:"gurcistan", devletler:["gurcistan"],
  b:"Acara Osmanlı'ya geçti", tur:"toprak-kayip", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Hulo (Acara)", gun:"1535 (TDV acara gün vermez)",
  d:"1508'den beri Osmanlı'ya tâbi sayılan Acara, TDV'ye göre 1535'te fiilen fethedildi ve 1568-1574 sancak listelerinde Erzurum beylerbeyiliğine bağlı görünür. Bölge 1580'de Çıldır beylerbeyiliğine bağlanacak ve 1878'e kadar Osmanlı idaresinde kalacaktı.",
  ic_not_d:"TDV iki maddede ayrı yıl veriyor: acara '1535', gurcistan 'Acaristan (Batum) ve çevresi 1479'da fethedildi' (bu ikincisi data/kronoloji_gurcistan.js'te 1479 maddesi olarak duruyor). Harita ise Hulo (Acara) ve Batum'u 1578-08-09'a dek gurcistan boyuyor — üç tarih, çelişki denetim/KRONO-KAFKAS-0929-DUZELTME.md'de.",
  kaynak:"TDV acara ('Acara'nın fethi 1535'te gerçekleşti'; 'Acara ise 1535'te Osmanlı Devleti'ne bağlandı')" },

{ t:"1536-01-01", devlet:"imereti", devletler:["imereti","samtshe-atabegligi","safevi"],
  b:"İmereti Kralı II. Bagrat Safevî ittifakıyla Samçhe atabekliğini çiğnedi", tur:"savas", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Ahıska", gun:"1536 (TDV gün vermez)",
  d:"Açıkbaş (İmereti) Kralı II. Bagrat, Şah Tahmasb ile ittifak yapıp Çıldır yöresini de kapsayan Samçhe atabeklik topraklarını zaptetti ve atabeği öldürdü. Atabeğin oğlu II. Keyhusrev Osmanlı'dan yardım istedi; aynı yıl Erzurum Beylerbeyi Oltu ve Penek kalelerini alarak bölgeye ilk kez yerleşti. Gürcü beylikleri arasındaki bu kavga, Osmanlı-Safevî rekabetini doğrudan Güney Gürcistan'a taşıdı.",
  kaynak:"TDV cildir-eyaleti ('1536'da Açıkbaş (İmereti) Meliki II. Bagrat'ın I. Şah Tahmasb ile ittifak yaparak … Atabeglik arazisini zaptetmesi ve Atabeglik melikini öldürmesi üzerine melikin oğlu II. Keyhusrev Osmanlılar'dan yardım istedi')" },

{ t:"1541-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","safevi"],
  b:"Şah Tahmasb'ın Kartli seferleri başladı (1541-1554)", tur:"savas", onem:4, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Tiflis", gun:"1541-1554 arası dört sefer; başlangıç yılı TDV gurcistan 3. bölüm — gün yok",
  d:"Şah Tahmasb 1541-1554 arasında Doğu Gürcistan'ın Kartli bölgesine dört sefer düzenledi, bazı kaleleri aldı ve yaklaşık 30.000 esiri İran'a götürdü. Bu kanlı baskı Kartli'yi Safevî nüfuzuna bağladı ve bir yıl sonraki Amasya Antlaşması'nda doğu Gürcistan'ın Safevî payına düşmesinin zeminini hazırladı.",
  ic_not_d:"TDV'nin iki maddesi Tiflis'in düşüşüne ayrı yıl veriyor: tiflis 'Gürcü vekāyi'nâmelerine göre 1536'da şehri yerle bir etti' · gurcistan 2. bölüm '1540'ta Tiflis'i ele geçirdi'. Bu madde çelişkiye girmemek için seferler dizisinin TDV gurcistan 3. bölümdeki başlangıç yılını (1541) kullanır.",
  kaynak:"TDV gurcistan 3. bölüm ('1541-1554 yılları arasında Şah Tahmasb dört defa Gürcistan'ın doğu bölgesi olan Kartli'ye saldırmış … 30.000 kadar esir alıp İran'a götürmüştü')" },

{ t:"1549-01-01", devlet:"samtshe-atabegligi", devletler:["samtshe-atabegligi","gurcistan"],
  b:"Kara Ahmed Paşa seferi — Samçhe atabekliğinin büyük kısmı Osmanlı'ya geçti", tur:"toprak-kayip", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Artvin", gun:"1548-1549 harekâtı (TDV cildir-eyaleti) / 1549 (TDV gurcistan) — gün yok",
  d:"İkinci İran seferi sırasında Vezir Kara Ahmed Paşa bir buçuk ay içinde Gürcistan'ın yirmi kalesiyle Tortum, Livâne, Artvin ve Kamhıs'ı aldı; alınan atabeklik topraklarında dört sancak kuruldu. 1551'de Ardanuç, Şavşat, Göle ve Ardahan'ın da katılmasıyla Samçhe atabekliğinin güney yarısı Osmanlı idaresine geçmiş oldu.",
  ic_not_d:"1551 Ardahan kazanımı data/olaylar_ek5.js'te ayrı madde olarak duruyor; bu madde yalnız 1549 harekâtını anlatır.",
  kaynak:"TDV gurcistan 3. bölüm ('Vezir Kara Ahmed Paşa, ikinci İran seferi sırasında (1549) bir buçuk ay içinde Gürcistan'ın yirmi kalesi dahil, Tortum, Ağcakale, Livâne deresi, Artvin ve Kamhıs'ı aldı') + TDV cildir-eyaleti ('1548-1549 harekâtı ile de Atabeglik ülkesinin büyük kısmı zaptedildi ve alınan yerlerde dört sancak kuruldu')" },

{ t:"1569-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","safevi"],
  b:"Kartli Kralı Simon Safevîlerce esir alındı", tur:"hukumdar", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Tiflis", gun:"1569 (TDV gün vermez)",
  d:"Kartli Kralı Simon'un kardeşi David 1564'te Kazvin'de Şah Tahmasb'ın huzuruna çıkıp Müslüman olmuş ve Dâvud Han adını almıştı. Şah, Dâvud Han'ı desteklemek için ordu gönderdi ve 1569'da Simon esir düştü. Simon dokuz yıl sonra, Osmanlı'nın Kafkasya'ya girişine karşı Kartli'yi karıştırmak için şah tarafından serbest bırakılacaktı.",
  kaynak:"TDV tiflis ('Simon'un kardeşi David 1564'te maiyetiyle birlikte Kazvin'e gidip şahın huzuruna çıktı ve müslüman oldu … 1569'da Simon esir alındı') + TDV gurcistan 3. bölüm (Simon'un 1569'dan beri esir tutulup serbest bırakılması)" },

{ t:"1578-08-09", devlet:"megrelya-prensligi", devletler:["megrelya-prensligi","guria-prensligi","gurcistan"],
  b:"Dadyan (Megrel) ve Güryel melikleri Osmanlı'ya tâbiliklerini bildirdi", tur:"siyaset", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  yer_id:"", odak_yer:"Kutaisi", ic_not_odak:"Megrelya (Zugdidi) ve Guria için atlas yerleşimi yok; kamera en yakın Batı Gürcistan noktasına (Kutaisi) bakar — olay yeri iddiası DEĞİL",
  gun:"Çıldır zaferinin ardından, Ağustos 1578 — gün kaynakta YOK; gün komşudan: Çıldır Savaşı · TDV cildir-eyaleti (9 Ağustos 1578). Değer EN ERKEN sınırdır",
  d:"Çıldır zaferinin ardından Lala Mustafa Paşa'nın gönderdiği itaat mektubunu Batı Gürcistan'ın Dadyan (Megrelya) ve Güryel melikleri kabul ederek Osmanlı'ya tâbi olduklarını bildirdi. Böylece Karadeniz'e bakan Gürcü beylikleri, doğudaki Kartli ve Kaheti'den önce Osmanlı sistemine girmiş oldu.",
  ic_not_d:"Aynı pasajda anılan Meshiya prensi Menûçihr'in tâbiliği data/olaylar_p0049.js 1578-08-09 maddesinde (Ahıska atabegliği) duruyor; Kaheti ve İmereti'nin itaati data/olaylar_p0917kosu13.js 1578-08-24 maddesinde. Bu madde yalnız Dadyan ve Güryel'i anlatır. Megrelya/Guria künyesi bugün YOK; önerilen id'ler (megrelya-prensligi, guria-prensligi) + bugün görünsün diye gurcistan üst künyesi. Megrelya'nın atlas yerleşimi (Zugdidi) yok ⇒ yer_id boş.",
  kaynak:"TDV gurcistan 3. bölüm ('Lala Mustafa Paşa'nın gönderdiği itaat mektubunu kabul eden Dadyan ve Güryel melikleri, Meshiya Prensi Menûçihr Osmanlılar'a tâbi olduklarını bildirdiler')" },

{ t:"1588-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan"],
  b:"Ferhad Paşa ile Kartli hâkimi Simon arasında antlaşma — Kartli Osmanlı vasalı", tur:"antlasma", onem:4, dunya:1, kapsam:"dis",
  etiket:["antlasma","diplomasi","konu-diplomasi"],
  yer_id:"Tiflis", gun:"1588; III. Murad'ın onayı 1589 (TDV gün vermez)",
  d:"Şah Tahmasb'ın Osmanlı fetihlerini sarsmak için Kartli'ye gönderdiği eski kral Simon, yıllarca süren çatışmadan sonra Serdar Ferhad Paşa ile anlaştı: Kartli hâkimi sıfatıyla Osmanlı hâkimiyetini vasal olarak tanıyıp haraca bağlandı. III. Murad 1589'da Osmanlı elindeki kaleler dışında Kartli'nin Simon tarafından idaresini onayladı.",
  kaynak:"TDV gurcistan 3. bölüm ('Serdar Ferhad Paşa ile Simon arasında bir antlaşma imzalandı (1588). Buna göre Simon, Kartli hâkimi sıfatıyla Osmanlılar'ın hâkimiyetini vasal olarak kabul etmiş … III. Murad onayladı (1589)')" },

{ t:"1601-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan"],
  b:"Simon'un isyanı bastırıldı — Kartli hâkimi esir olarak İstanbul'a gönderildi", tur:"isyan", onem:4, dunya:1, kapsam:"dis",
  etiket:["isyan","askeri","konu-isyan","konu-askeri"],
  yer_id:"", odak_yer:"Tiflis", ic_not_odak:"Gori için atlas yerleşimi yok; kamera Kartli başşehri Tiflis'e (~70 km) bakar — olay yeri iddiası DEĞİL",
  gun:"1601 (TDV gün vermez)",
  d:"Vasallığını tanıyan Simon bir süre sonra isyan ederek Gori Kalesi'ni ele geçirdi. Osmanlı kuvvetleri kaleyi geri aldı, Simon'u esir edip İstanbul'a gönderdi. Kartli'nin Osmanlı'ya bağlı yerli hâkim eliyle yönetilmesi denemesi böylece çöktü; iki yıl sonra Şah Abbas'ın karşı seferi başlayacaktı.",
  ic_not_d:"Gori'nin atlas yerleşimi yok ⇒ yer_id boş (uydurma odak kapıyı kilitler).",
  kaynak:"TDV gurcistan 3. bölüm ('Simon isyan ederek Gori Kalesi'ni ele geçirdi. Bunun üzerine Osmanlılar kaleyi Gürcüler'den geri aldılar ve Simon'u esir edip İstanbul'a gönderdiler (1601)')" },

// === 17. YÜZYIL ===========================================================
{ t:"1616-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","safevi"],
  b:"Şah Abbas Kartli hâkimi II. Luarsab'ı esir aldı", tur:"hukumdar", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","hukumdar","konu-siyasi","konu-hanedan"],
  yer_id:"Tiflis", gun:"1616 (TDV gün vermez)",
  d:"1612 İstanbul (Nasuh Paşa) Antlaşması Kartli ve Kaheti'yi kâğıt üzerinde yeniden Osmanlı'ya bırakmıştı; ama Osmanlı'ya vasal bağlı Gürcü hâkimleri Şah Abbas'ın saldırılarına dayanamadı. Şah, Kartli hâkimi II. Luarsab'ı esir aldı ve Kaheti'deki isyanı bastırdı; Doğu Gürcistan fiilen Safevî denetimine döndü.",
  ic_not_d:"Aynı yılın Kaheti seferi data/kronoloji_safevi.js 1616-01-01 'İkinci Kahetî seferi' maddesinde; bu madde yalnız Kartli'yi ve Luarsab'ı anlatır. 1612 antlaşması data/olaylar_ek2.js + kronoloji_safevi.js'te (1612-11-20).",
  kaynak:"TDV gurcistan 3. bölüm ('Şah Abbas, Kartli hâkimi II. Luarsab'ı esir aldığı gibi (1616) Kahet'te Nodar Corciadze ve David Candiyeri'nin isyanını bastırdı')" },

{ t:"1647-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan"],
  b:"Evliya Çelebi Tiflis'i ziyaret etti", tur:"kultur", onem:2, dunya:1, kapsam:"dis",
  etiket:["kultur","seyahat","konu-kultur"],
  yer_id:"Tiflis", gun:"1647 (TDV gün vermez)",
  d:"Evliya Çelebi Tiflis'i Kür nehrinin iki yakasında karşılıklı iki kalesi olan, camileri ve âlimleriyle bir Müslüman şehri olarak anlattı. Safevî himayesindeki Kartli'nin başşehrine dair bu tanıklık, şehrin 17. yüzyıl ortasındaki karma nüfusunun ve kale düzeninin en ayrıntılı Osmanlı kaydıdır.",
  kaynak:"TDV tiflis ('Tiflis'i 1647'de ziyaret eden Evliya Çelebi, Kür nehrinin kıyısında birbirine karşı iki kale bulunduğunu … belirtir') + TDV gurcistan 3. bölüm (Evliya Tiflis'i camileri ve ulemâsıyla bir müslüman şehri olarak tanıtır)" },

// === 18. YÜZYIL ===========================================================
{ t:"1728-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan"],
  b:"Tiflis eyaletinin Osmanlı tahriri — Defter-i Mufassal-ı Eyâlet-i Tiflis", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","konu-idari"],
  yer_id:"Tiflis", gun:"1728 (TDV gün vermez)",
  d:"1724 İstanbul Antlaşması'yla Osmanlı'ya bırakılan Kartli ve Kaheti'nin tahriri yapıldı; defter Tiflis eyaletini Tiflis, Şomhurut (Somhit), Ağcakale, Gori, Tıryaled ve Kaygulu olmak üzere altı sancak hâlinde gösterir. Tiflis beylerbeyilerinin şehirde vakıflar kurduğu bu kısa dönem, bölgenin Osmanlı idari yapısına en sıkı bağlandığı andır.",
  kaynak:"TDV gurcistan 3. bölüm ('Osmanlılar 1728 yılında Kartli ve Kahet'in tahririni yaptırdılar. Bu tahrir, Defter-i Mufassal-ı Eyâlet-i Tiflis adıyla …') + TDV tiflis (1728 tarihli tahrir kayıtları: livâlar)" },

{ t:"1735-08-12", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","safevi"],
  b:"Nâdir'in İran birlikleri Tiflis'i Osmanlı'dan geri aldı", tur:"toprak-kayip", onem:5, dunya:2, kapsam:"dis",
  etiket:["askeri","toprak-kayip","konu-askeri"],
  yer_id:"Tiflis", gun:"12 Ağustos 1735 (TDV tiflis)",
  d:"Nâdir'in Arpaçay (Baghavard) zaferinden sonra İran birlikleri 12 Ağustos 1735'te Tiflis'e girdi; şehir ve eyaletin öteki kaleleri savaşsız teslim oldu. Kartli-Kaheti valiliğine Ali Mirza (Aleksandre) getirildi ve 1723'ten beri süren Osmanlı idaresi Gürcistan'da kesin olarak sona erdi.",
  ic_not_d:"Haritada Tiflis'in Osmanlı (d:) penceresi 1735-06-19'da (Baghavard) bitiyor; TDV tiflis teslimi 12 Ağustos 1735'e koyuyor — 54 gün fark. Öneri: denetim/KRONO-KAFKAS-0929-YERLESIM-ONERI.md. Nâdir 1735'te henüz Safevî naibi (Afşar künyesi 1736-03-08'de başlıyor) ⇒ taraf safevi.",
  kaynak:"TDV tiflis ('Nâdir Şah'ın güçlenmesinin ardından 12 Ağustos 1735'te Tiflis'i yeniden ele geçiren İran birlikleri, Kartli-Kaheti valiliğine Ali Mirza / Aleksandre'yi getirdi') + TDV gurcistan 3. bölüm ('Tiflis ve aynı eyaletin diğer kaleleri savaşsız Nâdir Şah'a teslim oldu')" },

{ t:"1751-01-01", devlet:"kartli-kralligi", devletler:["kartli-kralligi","gurcistan","revan-hanligi"],
  b:"Gürcü ordusu Revan Hanı Mîr Mehdî'yi yendi — Revan hanları Gürcülere bağımlı oldu", tur:"savas", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Revan", gun:"1751 (TDV gün vermez)",
  d:"Nâdir Şah'ın ölümünden sonra müstakil bir hanlık kuran Revan hâkimi Mîr Mehdî'yi Gürcü ordusu 1751'de yendi; Revan hanları bundan sonra Gürcülere bağımlı hâle geldi. Kartli-Kaheti hükümdarı Irakli (II. Herakli) 1756 ve 1769'da da hanlığa saldırıp hanları kendine bağladı — 18. yüzyıl ortasında Gürcü krallığı Güney Kafkasya'nın başlıca yerel gücüydü.",
  ic_not_d:"Revan Hanlığı künyesi bugün YOK (önerilen id revan-hanligi taraflarda); harita Revan'ı 1747-1794 arası zend boyuyor (zend künyesi 1751'de başlıyor). Tâbilik haritaya yansımıyor — öneri dosyasında gözlem olarak.",
  kaynak:"TDV revan ('Gürcü ordusu Mîr Mehdî Han'ı 1751'de yenince Revan hanları Gürcüler'e bağımlı hale geldi … Irakli 1756 ve 1769'da hanlığa saldırdı, buradaki hanları kendine bağladı')" },

// === 19. YÜZYIL — RUS İDARESİ ==============================================
{ t:"1803-01-01", devlet:"rusya", devletler:["rusya","megrelya-prensligi"],
  b:"Megrelya (Dadyan beyliği) Rusya ile birleşti", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"", odak_yer:"Kutaisi", ic_not_odak:"Megrelya için atlas yerleşimi yok; kamera Kutaisi'ye bakar — olay yeri iddiası DEĞİL",
  gun:"1803 (TDV gün vermez)",
  d:"Kartli-Kaheti'nin 1801 ilhakından iki yıl sonra Batı Gürcistan'daki Megrelya beyliği Rusya ile birleşti. Bunu 1804'te İmereti ve Guria, 1810'da Abhazya, 1856'da Svaneti izledi; Gürcü beylikleri tek tek Rus egemenliğine girdi.",
  ic_not_d:"Megrelya künyesi bugün YOK ⇒ ilhak eden rusya + önerilen id megrelya-prensligi. İmereti-Guria (1804) data/kronoloji_gurcistan.js'te ayrı madde.",
  kaynak:"TDV gurcistan 3. bölüm ('Birkaç yıl içinde Megreliya (1803), İmeretiya ve Guriya (1804), Abhaz Knezliği (1810), Svanetiya (1856) Rusya ile birleşti')" },

{ t:"1810-02-17", devlet:"rusya", devletler:["rusya","abhazya-prensligi"],
  b:"Rusya Abhazya'nın kendisine bağlandığını ilan etti", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"Sohum", gun:"17 Şubat 1810 (TDV sohum, Beygua'dan) — takvim belirtilmemiş; Rus kaynaklı gün, muhtemelen Jülyen",
  d:"1806-1812 Osmanlı-Rus savaşı sürerken Rusya, Hıristiyanlığı seçip çara tâbiiyet dileyen Abhaz beyi Sefer Bey'in (Georgi Şirvaşidze) başvurusuna dayanarak Abhazya'nın Rusya'ya bağlandığını ilan etti. Osmanlı garnizonunun tuttuğu Sohum Kalesi beş ay sonra (11 Temmuz 1810) düşecekti.",
  ic_not_d:"Sohum'un düşüşü (1810-07-11) data/olaylar_ek6.js'te ayrı madde. Abhazya künyesi bugün YOK ⇒ rusya + önerilen id abhazya-prensligi.",
  kaynak:"TDV sohum ('Ruslar 17 Şubat 1810'da Abhazya'nın Rusya'ya bağlandığını ilân etti (Beygua)'; Sefer Bey'in 1808-1809 mektupları)" },

{ t:"1840-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Gürcistan-İmeretiya guberniyası kuruldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"],
  yer_id:"Tiflis", gun:"1840 (TDV gün vermez)",
  d:"Rus idaresi ilhak edilen Gürcü topraklarını tek bir idari birimde, Gürcistan-İmeretiya guberniyasında topladı. Altı yıl sonra bu birim Tiflis ve Kutais guberniyaları olarak ikiye bölünecekti.",
  kaynak:"TDV gurcistan 3. bölüm ('1840 yılında Gürcistan, Gürcistan-İmeretiya guberniyası ilân edildi; 1846'da ise Tiflis ve Kutais olmak üzere iki guberniyaya bölündü')" },

{ t:"1846-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Tiflis ve Kutais guberniyaları ayrıldı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"],
  yer_id:"Kutaisi", gun:"1846 (TDV gün vermez)",
  d:"Gürcistan-İmeretiya guberniyası Tiflis (doğu) ve Kutais (batı) guberniyaları olarak ikiye bölündü. Bu ayrım, eski Kartli-Kaheti ile İmereti'nin tarihî sınırını Rus idari haritasında yeniden üretti.",
  kaynak:"TDV gurcistan 3. bölüm ('1846'da ise Tiflis ve Kutais olmak üzere iki guberniyaya bölündü')" },

{ t:"1854-05-01", devlet:"rusya", devletler:["rusya","abhazya-prensligi"],
  b:"Kırım Savaşı — Osmanlı birlikleri Sohum'a girdi", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Sohum", gun:"Mayıs 1854 (TDV sohum gün vermez)",
  d:"Kırım Savaşı başlayınca Ruslar Sohum Kalesi'ni 1854 başında boşaltıp askerî malzemeyi Kutais'e taşıdı. Osmanlı Mayıs 1854'te Sohum'a asker çıkardı ve Kafkasya'yı iyi tanıyan Çerkez asıllı Sefer Bey'i Şeyh Şâmil'in elçisiyle birlikte bölgeye gönderdi; ancak birlikler yetersizdi ve Sohum'u kalıcı bir üsse dönüştürme çabası geçici kaldı.",
  ic_not_d:"Harita Sohum'u 1810-07-11'den 1923'e kesintisiz rusya boyuyor; 1854-1856 Osmanlı varlığı yok — öneri dosyasında.",
  kaynak:"TDV sohum ('Ruslar, Sohum Kalesi'ni 1854 yılı başlarında terketti … Osmanlı birlikleri Mayıs 1854'te Sohum'a girdi. Ancak birliklerin sayısı yetersizdi')" },

{ t:"1856-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Svaneti Rusya ile birleşti", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["siyaset","toprak-kazanc","konu-siyasi"],
  yer_id:"", odak_yer:"Kutaisi", ic_not_odak:"Svaneti için atlas yerleşimi yok; kamera Kutaisi'ye bakar — olay yeri iddiası DEĞİL",
  gun:"1856 (TDV gün vermez)",
  d:"Kafkasya'nın en yüksek vadilerinde yarı bağımsız yaşayan Svaneti de 1856'da Rusya ile birleşti; Megrelya ile başlayan Batı Gürcistan beyliklerinin ilhak dizisi böylece tamamlandı. Kırım Savaşı'ndan sonra Megrelya, Svaneti ve Abhaz knezlikleri tümüyle feshedilecekti.",
  ic_not_d:"Svaneti künyesi ve atlas yerleşimi YOK ⇒ rusya künyesi, yer_id boş.",
  kaynak:"TDV gurcistan 3. bölüm ('Svanetiya (1856) Rusya ile birleşti … Kırım Harbi'nden sonra Megreliya, Svanetiya ve Abhaz knezlikleri feshedildi')" },

{ t:"1856-07-10", devlet:"rusya", devletler:["rusya","abhazya-prensligi"],
  b:"Ruslar Sohum'u yeniden işgal etti", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Sohum", gun:"10 Temmuz 1856 (TDV sohum)",
  d:"Kırım Savaşı'nın bitmesinin ardından Rus kuvvetleri 10 Temmuz 1856'da Sohum'a yeniden girdi. Şehir sekiz yıl sonra, Abhaz knezliğinin feshiyle doğrudan Rus idaresine bağlanacaktı.",
  kaynak:"TDV sohum ('10 Temmuz 1856'da Ruslar, Sohum'u tekrar işgal etti ve şehir 1864'te doğrudan Rusya'ya bağlandı')" },

{ t:"1864-01-01", devlet:"rusya", devletler:["rusya","abhazya-prensligi"],
  b:"Abhaz knezliği feshedildi — Sohum doğrudan Rus idaresine bağlandı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"],
  yer_id:"Sohum", gun:"1864 (TDV sohum gün vermez)",
  d:"Kırım Savaşı'ndan sonra Rusya Batı Gürcistan'daki yarı özerk knezlikleri kaldırdı; Abhazya'nın merkezi Sohum 1864'te doğrudan Rus idaresine bağlandı. Aynı yıl Kuzey Kafkasya'daki savaşın bitişi ve ardından gelen göçler bölgenin nüfus yapısını köklü biçimde değiştirecekti.",
  kaynak:"TDV sohum ('şehir 1864'te doğrudan Rusya'ya bağlandı') + TDV gurcistan 3. bölüm ('Kırım Harbi'nden sonra Megreliya, Svanetiya ve Abhaz knezlikleri feshedildi')" },

{ t:"1864-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Kartli ve Kaheti'de toprak köleliği (servaj) kaldırıldı", tur:"reform", onem:4, dunya:1, kapsam:"ic",
  etiket:["reform","sosyal","konu-sosyal","konu-islahat"],
  yer_id:"Tiflis", gun:"1864 (TDV gün vermez)",
  d:"Rusya'nın iç eyaletlerinde 1861'de başlayan köylü azadı Gürcistan'da önce Kartli ve Kaheti'de (1864) uygulandı; ardından İmereti ve Guria (1865), Megrelya (1866), Abhazya (1870) ve Svaneti (1871) izledi. Yaklaşık 75.565 hane bu rejimden kurtuldu, ama köylülerin kabaca onda biri topraksız kaldı ve kalanlar da daha az toprak aldı.",
  kaynak:"TDV gurcistan 3. bölüm ('toprak köleliği rejimi 1864 yılında Gürcistan'ın Kartli ve Kahet bölgelerinde, ardından İmeretiya ve Guriya'da (1865), Megreliya'da (1866), Abhaziya'da (1870) ve son olarak da Svanetiya'da (1871) kaldırıldı')" },

{ t:"1877-05-02", devlet:"rusya", devletler:["rusya"],
  b:"93 Harbi — Osmanlı donanması Sohum'u bombaladı, Abhazya kıyısına asker çıktı", tur:"savas", onem:3, dunya:2, kapsam:"dis",
  etiket:["askeri","savas","konu-askeri"],
  yer_id:"Sohum", gun:"2 Mayıs 1877 (TDV sohum, Allen–Muratoff s. 120-122) — takvim belirtilmemiş",
  d:"1877-1878 Osmanlı-Rus Savaşı başlayınca altı Osmanlı gemisi Sohum'a yaklaşıp şehri ve limanı bombaladı; ardından gönderilen birlikler Ruslara karşı başarılı çarpıştı. II. Abdülhamid bir nutkunda Sohum'un yeniden alınmasını Kırım'ın fethi kadar önemli saydı.",
  ic_not_d:"Harita 1877'de Sohum'da Osmanlı varlığı göstermiyor — öneri dosyasında (başlangıç günü kaynakta yok).",
  kaynak:"TDV sohum ('2 Mayıs 1877'de altı Türk gemisi Sohum'a yaklaşıp şehri ve limanı bombaladı (Allen – Muratoff, s. 120-122). Yollanan birlikler Ruslar'a karşı başarılı mücadele verdi')" },

{ t:"1877-08-12", devlet:"rusya", devletler:["rusya"],
  b:"Osmanlı kuvvetleri Sohum'u boşalttı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"dis",
  etiket:["askeri","toprak-kazanc","konu-askeri"],
  yer_id:"Sohum", gun:"12 Ağustos 1877 (TDV sohum, Allen–Muratoff s. 144-147)",
  d:"Rumeli cephesindeki çarpışmalar hızlanınca Sohum'daki Osmanlı birlikleri Balkanlara sevk edildi ve şehir 12 Ağustos 1877'de boşaltıldı. Abhazya'daki bu kısa Osmanlı varlığının ardından Rus idaresi yeniden kuruldu.",
  kaynak:"TDV sohum ('Sohum'daki birlikler Rumeli'ye sevkedilerek 12 Ağustos 1877'de Sohum boşaltıldı (a.g.e., s. 144-147)')" },

{ t:"1883-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Batum-Tiflis-Bakü demiryolu tamamlandı", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic",
  etiket:["ekonomi","ulasim","konu-ekonomi"],
  yer_id:"Batum", gun:"1883 (TDV batum gün vermez)",
  d:"1878'de Rusya'ya geçen Batum, 1883'te Tiflis üzerinden Bakü'ye uzanan demiryoluna bağlandı ve hızla büyüdü. Tiflis 1872'de Karadeniz'e, 1873'te Hazar'a demiryoluyla ulaşmıştı; Batum hattı Hazar petrolünü Karadeniz'e taşıyan ana yolu açtı.",
  kaynak:"TDV batum ('Batum'un gelişmesi 1883'te Batum-Tiflis-Bakü demiryolunun inşasıyla başladı') + TDV tiflis ('hem Karadeniz'e (1872) hem Hazar denizine (1873) bağlanarak')" },

{ t:"1886-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Batum'un serbest liman statüsü kaldırıldı", tur:"ekonomi", onem:2, dunya:1, kapsam:"dis",
  etiket:["ekonomi","konu-ekonomi","konu-diplomasi"],
  yer_id:"Batum", gun:"1886 (TDV gün vermez)",
  d:"Berlin Antlaşması Batum'u Rusya'ya serbest liman olarak bırakmıştı; Rusya bu statüyü ancak 1886'ya kadar korudu ve limanı kendi gümrük düzenine kattı. Karar, antlaşmanın Batum'la ilgili taahhüdünün tek taraflı olarak rafa kaldırılması demekti.",
  kaynak:"TDV batum ('1878 Berlin Antlaşması'yla serbest liman olarak Rusya'ya bırakıldı ise de bu statüsünü ancak 1886'ya kadar koruyabildi')" },

{ t:"1900-01-01", devlet:"rusya", devletler:["rusya"],
  b:"Bakü-Batum petrol boru hattı döşendi", tur:"ekonomi", onem:3, dunya:2, kapsam:"ic",
  etiket:["ekonomi","konu-ekonomi"],
  yer_id:"Batum", gun:"1900 (TDV gün vermez)",
  d:"Bakü'den Batum'a uzanan petrol boru hattının döşenmesiyle Batum Rusya'nın Karadeniz'deki en önemli petrol iskelesi oldu ve nüfusu hızla arttı. Bu ekonomik ağırlık, 1918-1921'de şehir üzerindeki Osmanlı, İngiliz ve Gürcü çekişmesinin başlıca sebeplerinden biriydi.",
  kaynak:"TDV batum ('1900 yılında Bakü-Batum petrol boru hattının döşenmesiyle de Rusya'nın Karadeniz'deki en önemli petrol iskelesi haline geldi')" },

// === 1918-1921 ============================================================
{ t:"1918-04-22", devlet:"transkafkasya", devletler:["transkafkasya"],
  b:"Transkafkasya Federal Cumhuriyeti bağımsızlığını ilan etti — merkez Tiflis", tur:"kurulus", onem:4, dunya:2, kapsam:"dis",
  etiket:["siyaset","kurulus","konu-siyasi"],
  yer_id:"Tiflis", gun:"22 Nisan 1918 (TDV tiflis)",
  d:"Azerbaycanlı, Gürcü ve Ermeni temsilcilerden oluşan Transkafkasya Seymi, Rusya'dan ayrıldığını ilan ederek merkezi Tiflis olan federal bir devlet kurdu. Brest-Litovsk'la Kars, Ardahan ve Batum'u geri alan Osmanlı ordusunun ilerleyişi karşısında kurulan federasyon, üç halkın çıkarları ayrıştığı için beş hafta sonra dağılacaktı.",
  ic_not_d:"Harita Tiflis ve Zagem'i 1917-11-07→1923 kesintisiz sovyet-rusya boyuyor; transkafkasya künyesi (1917-11-07→1918-05-28) Tiflis'e hiç düşmüyor — öneri dosyasında.",
  kaynak:"TDV tiflis ('Tiflis Âzerî, Gürcü ve Ermeniler'den oluşan ve 22 Nisan 1918'de bağımsızlığını ilân eden Kafkas Federal Devleti'nin merkezi oldu')" },

{ t:"1919-04-13", devlet:"gurcistan-demokratik-cumhuriyeti", devletler:["gurcistan-demokratik-cumhuriyeti","cenub-i-garbi-kafkas"],
  b:"Gürcistan Ahıska'yı işgal etti", tur:"isgal", onem:4, dunya:1, kapsam:"dis",
  etiket:["askeri","isgal","konu-askeri"],
  yer_id:"Ahıska", gun:"13 Nisan 1919 (TDV ahiska); TDV kars İngiliz işgalini 12 Nisan'a koyar",
  d:"Mondros'tan sonra Ahıska ve Ahılkelek sancakları merkezi Kars'ta olan yerli geçici hükümete (Cenûb-ı Garbî Kafkas) katılmıştı. İngilizlerin Kars'ı işgal edip bu hükümeti dağıtması üzerine Ahıska Gürcistan tarafından işgal edildi; 1921 Moskova Antlaşması'yla da Gürcistan SSC'nin Tiflis vilayetine bağlandı.",
  ic_not_d:"TDV ahiska Haziran 1918 devrini 'Trabzon Antlaşması'na bağlıyor — bu, 4 Haziran 1918 Batum Antlaşması olmalı (DUZELTME'de). Harita Ahıska'yı 1917-11-07→1923 kesintisiz sovyet-rusya boyuyor; 1918 Osmanlı ve 1919-1921 Gürcü pencereleri yok — öneri dosyasında.",
  kaynak:"TDV ahiska ('13 Nisan 1919'da İngilizler'in Kars'ı işgali ve Millî Şûra'nın dağıtılması üzerine Ahıska Gürcistan tarafından işgal edildi') + TDV kars (12 Nisan 1919 İngiliz işgali)" },

{ t:"1921-03-11", devlet:"gurcistan-demokratik-cumhuriyeti", devletler:["gurcistan-demokratik-cumhuriyeti","tbmm-turkiye"],
  b:"Gürcü hükümeti Artvin, Ardahan ve Batum'u Türkiye'ye bıraktı", tur:"toprak-kayip", onem:4, dunya:2, kapsam:"dis",
  etiket:["diplomasi","toprak-kayip","konu-diplomasi"],
  yer_id:"Batum", gun:"11 Mart 1921 (TDV acara)",
  d:"Kızıl Ordu'nun Tiflis'e girmesiyle çöken Gürcü hükümetine 23 Şubat 1921'de verilen kısa süreli notanın ardından Artvin, Ardahan ve Batum 11 Mart 1921'de Türkiye'ye bırakıldı. Ancak beş gün sonra imzalanan Moskova Antlaşması Batum'u özerklik şartıyla yeniden Gürcistan'a verdi ve Türk kuvvetleri 28 Mart'ta şehri boşalttı.",
  ic_not_d:"Harita Batum'u 1921-03-16'dan itibaren sovyet-rusya boyuyor; 11-28 Mart 1921 Türk varlığı yok — öneri dosyasında. 28 Mart boşaltma data/olaylar_p0057.js'te ayrı madde.",
  kaynak:"TDV acara ('23 Şubat 1921'de Gürcü hükümetine verilen kısa süreli nota üzerine 11 Mart 1921'de Artvin, Ardahan ve Batum'un Türkiye'ye bırakılması sağlandı') + TDV batum (28 Mart 1921 boşaltma)" },

{ t:"1921-06-03", devlet:"sovyet-rusya", devletler:["sovyet-rusya"],
  b:"Acara özerkliği kuruldu — merkez Batum", tur:"idari", onem:3, dunya:1, kapsam:"dis",
  etiket:["idari","konu-idari"],
  yer_id:"Batum", gun:"3 Haziran 1921 (TDV acara)",
  d:"Moskova Antlaşması'nın Batum ve çevresi halkına geniş özerklik şartı uyarınca Acara 3 Haziran 1921'de özerkliğini elde etti ve Batum bu özerk yapının merkezi oldu. Özerklik 13 Ekim 1921 Kars Antlaşması'nda Türkiye, Azerbaycan, Ermenistan ve Gürcistan tarafından yeniden teyit edildi.",
  ic_not_d:"Gürcistan SSC künyesi YOK ⇒ sovyet-rusya künyesine bağlandı.",
  kaynak:"TDV acara ('3 Haziran 1921'de Acara özerkliğini elde etti ve Batum şehri bu tarihten itibaren özerkliğin merkezi oldu … 13 Ekim 1921 … Kars Antlaşması'nda da Batum'un özerkliği teyit edildi')" }

];

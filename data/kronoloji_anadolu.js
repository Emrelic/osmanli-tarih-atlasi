// =====================================================================
// ANADOLU BEYLİKLERİ — KRONOLOJİ · altı künye tek dosyada
// Oturum: ANADOLU BEYLİKLERİ KRONOLOJİ · 22 Ağustos 2026 · Koordinatör: OSMANGAZİ
//
// Kapsam: `data/devletler.js` künyelerindeki altı beylik/devlet —
// karaman (1256-1487) · selcuklu (1075-1308) · artuklu (1102-1409) ·
// dulkadir (1337-1522) · aydin (1308-1425) · kilikya-ermeni (1199-1375).
// Ayrıca taranan 7 ek beylik künyesi (candar, germiyan, mentese, saruhan,
// hamid, teke, ramazanoglu) bu turda YAZILMADI — hepsi devletler.js'te
// doğru id ile mevcut, kapsam dışı bırakıldı, koordinatöre bildirildi.
//
// ─────────────────────────────────────────────────────────────────────
// §D — İKİ PUAN (şartname §3.2)
//   onem  1-5   BU KÜNYE için ağırlık, dosyadan dosyaya değişir
//   dunya 1-5   OLAYIN kendisine ait; HER DOSYADA AYNI olmalı
//
// 🔴 ANKARA SAVAŞI (1402-07-28) — ÇAPRAZ DOSYA ÇELİŞKİSİ TESPİT EDİLDİ
// VE KOORDİNATÖRE BİLDİRİLDİ (tahta M-1035), henüz cevap gelmedi:
//     kronoloji_timurlu.js    dunya:5
//     kronoloji_akkoyunlu.js  dunya:4  (kendi notuyla "devralındı" ama farklı)
// denetle_kronoloji.py bunu YAKALAMIYOR çünkü iki dosyanın `b:` başlığı
// farklı (eşleştirme anahtarı tarih+başlık-öneki). ⇒ Bu dosyada Ankara
// Savaşı'nın KENDİSİ ayrı bir madde olarak TEKRARLANMADI (o iki dosyada
// zaten var). Karaman ve Aydınoğulları'nın kendi RESTORASYON maddeleri
// (b: "...yeniden kuruldu" gibi, savaşın kendisi değil) `dunya:1`
// taşıyor — kapsam:"ic", çünkü anlattığı şey savaş değil, o beyliğin
// kendi diriliş kararı. Farklı `b:` metni yüzünden dunya-tutarlılık
// denetimine hiç girmiyor, YENİ bir çelişki DOĞURMUYOR.
//
// 🟢 GERÇEKTEN EŞLEŞEN ORTAK OLAYLAR — var olan değerle uyumlu yazıldı:
//     1389-06-15  I. Kosova (Aydınoğulları yardımcı kuvveti)   dunya:4
//                 (kronoloji_bizans.js + kronoloji_sirbistan.js: ikisi de 4)
//     1409-01-01  Mardin'in Karakoyunlu'ya teslimi = Artuklu sonu  dunya:2
//                 (kronoloji_akkoyunlu.js + kronoloji_karakoyunlu.js: ikisi de 2)
//     1516-08-24  Mercidâbık (Dulkadir Ali Bey katılımı)           dunya:5
//                 (kronoloji_memluk.js ile aynı)
//     1517-01-22  Ridâniye (Dulkadir Ali Bey katılımı)             dunya:5
//                 (kronoloji_memluk.js + kronoloji_misir.js ile aynı)
//
// ⚠️ Geri kalan "ORTAK" adaylarının (Selçuklu'nun Malazgirt-sonrası
// Haçlı/Bizans/Moğol çatışmaları, Artuklu'nun Haçlı/Eyyûbî/Timur
// olayları, Kilikya'nın Moğol/Memlük ilişkileri) korpusta GERÇEK bir
// eşi bulunamadı (denetim betiği çalıştırılıp tek tek arandı — yalnız
// tesadüfi aynı-tarihli alakasız olaylar çıktı). Bu olaylar HİÇBİR
// başka kronoloji_*.js dosyasında yok, yani "ortak" oldukları doğru
// ama henüz kimse yazmamış; standart ölçütle (§CLAUDE.md dunya skalası)
// BAĞIMSIZ değerlendirildi. Yeni bir devlet dosyası bu olayları da
// yazarsa, BURADAKİ değer taban alınmalı.
//
// ─────────────────────────────────────────────────────────────────────
// §K — KAYNAK POLİTİKASI (`CLAUDE.md §4`, şartname §4)
//
// karaman         TDV `karamanogullari` — tam gövde okundu, omurga.
// selcuklu        TDV `selcuklular` (483 KB, elle bölüm ayrıştırıldı) +
//                 `suleyman-sah-i` · `kilicarslan-ii` · `mesud-i` ·
//                 `keyhusrev-i` · `keyhusrev-ii` · `keykavus-i` ·
//                 `keykavus-ii` · `keykubad-i` · `celaleddin-i-rumi` ·
//                 `karatay-medresesi` · `ince-minareli-medrese` ·
//                 `baba-ishak` · `bimaristan` · `sadreddin-konevi` ·
//                 `bahaeddin-veled` · `iznik`. Bulunamadı/kullanılamadı:
//                 `alaeddin-camii` · `divrigi-ulucamii` (ölü/boş).
// artuklu         TDV `artuklular` (omurga) + `hasankeyf` · `mardin` ·
//                 `harput` · `cezeri-ismail-b-rezzaz` · `ilgazi-necmeddin` ·
//                 `ulucami`. Malabadi köprüsü ve Nâsırüddin Mahmud'un imar
//                 faaliyeti TDV'de müstakil madde DEĞİL — Kültür Portalı /
//                 İMO teknik bildirisi / İ.Ü. Art-Sanat Dergisi hakemli
//                 makalesi kullanıldı, `kaynak:` alanında AÇIKÇA yazılı.
// dulkadir        TDV `dulkadirogullari` (omurga) + `elbistan` ·
//                 `kahramanmaras` (⚠️ `maras` slug'ı buraya yönleniyor).
//                 Denenen kişi sluglari (`alauddevle-bozkurt-bey` vb.)
//                 HEPSİ ölü (302) — bilgi ana maddeden derlendi.
// aydin           TDV `aydinogullari` (omurga) + `umur-bey` · `cuneyd-bey` ·
//                 `birgi` · `ayasuluk` · `haci-pasa`. `isa-bey-camii` ölü,
//                 bilgi `ayasuluk` maddesinden alındı.
// kilikya-ermeni  🔴 TDV'de müstakil madde YOK (proje daha önce ölçtü,
//                 bu turda TEKRAR doğrulandı — "ermeniler" araması
//                 alakasız maddelere açılıyor). AKADEMİK kaynak kullanıldı
//                 (`CLAUDE.md §4`, TDV kapsamıyor): Bournoutian (2006) ·
//                 Stewart (2001) · Ghazarian (2000) · Der Nersessian ·
//                 Edwards (1987) · Bedoukian (1962) · Orient dergisi
//                 hakemli makalesi. ⚠️ DÜRÜSTLÜK NOTU: bu turda hiçbir
//                 akademik metnin TAM METNİNE doğrudan erişilemedi
//                 (Bournoutian PDF'i OCR hatası verdi, ötekiler ikincil
//                 özetle); her `kaynak:` alanında bu AÇIKÇA yazılı,
//                 bir sonraki oturum birincil metinle teyit etmeli.
//
// ─────────────────────────────────────────────────────────────────────
// §Y — `yer_id` (şartname §3.1)
//
// Tüm `yer_id` değerleri `arac/girdi.py` ile yüklenen 2603 noktanın
// gerçek `ad` alanlarına BİREBİR eşleştirildi (kod ile doğrulandı,
// elle değil). Bilinen takma ad düzeltmesi: "Sakız (Chios)" → "Sakız".
//
// 🔴 EŞLEŞMEYEN YERLER — `yer_id:""` bırakıldı, UYDURULMADI. Bu
// yerleşimlerin atlas verisinde KAYDI YOK (26 madde etkileniyor):
//     Hasankeyf (9 madde, Artuklu'nun kurucu merkezi!) · Sis (13 madde,
//     Kilikya Ermeni başkenti!) · Kızıltepe (1) · Silvan (Artuklu'da
//     "Meyyâfârikīn" olarak geçiyor, yer_hint boş bırakıldı) · Ayas ·
//     Mut · Suğdak (Kırım, Selçuklu deniz seferi hedefi) · Gürcistan
//     (ülke adı, tek nokta değil) · Kefersud (Babaîler İsyanı çıkış yeri).
// 📌 Hasankeyf VE Sis en ağır basanlar — biri bir beyliğin kuruluş
// merkezi, öteki bir krallığın başkenti, ikisi de haritada nokta
// karşılığı olmadan hiç görünmüyor. Koordinatöre NOKTA ihtiyacı olarak
// bildirildi.
//
// ─────────────────────────────────────────────────────────────────────
// §S — SAYI HAKKINDA (şartname §1)
//
// 🔴 KOTA YOK. Emre: "Kaç tane çıkarsa o kadar." Bu dosyada 6 künye
// toplam 281 madde taşıyor (karaman 51 · selcuklu 87 · artuklu 45 ·
// dulkadir 36 · aydin 30 · kilikya-ermeni 32 — devletler.js'teki eski
// taban maddeleri bu sayılara İÇİNE ALINDI, ayrıca sayılmadı).
// Şartnamenin "her tur ~150-250" kaba hedefi TEK bir devlet dosyası
// için düşünülmüştü; bu tur ALTI ayrı siyasi kimliği kapsıyor, o yüzden
// toplam daha yüksek çıktı — ama HİÇBİR madde dolgu değil, hepsi
// TDV/akademik kaynaktan somut bir olaya dayanıyor. Kaynağın azaldığı
// yerde (Dulkadir'in bilim/teknoloji kovası, Kilikya'nın aynı kovası)
// ZORLAMA yapılmadı, kova boş bırakıldı.
// =====================================================================

window.KRONOLOJI_ANADOLU = [

// ═══════════════════ KARAMANOĞULLARI (1256-1487) ═══════════════════

// ───────────────────────── KARAMANOĞULLARI (1256-1487) — kaynak: karamanogullari (TDV, tam gövde okundu)

{ t:"1256-01-01", b:"Karaman Bey, Ermenek-Mut yöresinde beyliğin temelini attı", tur:"kurulus",
  onem:5, dunya:1, kapsam:"ic", etiket:["kurulus","askeri"],
  yer_id:"Ermenek",
  d:"Anadolu Selçuklu Devleti'nin Moğol baskısıyla otoritesinin çöktüğü bir dönemde, Karaman Bey Toros dağlarının kuzey eteklerinde Ermenek-Mut yöresinde bağımsız bir güç olarak ortaya çıktı. Kardeşi Nûre Sûfî ile birlikte hareket etti; TDV bu doğuşu Selçuklu otoritesinin bölgede çözülmesine bağlıyor.",
  kaynak:"karamanogullari" },

{ t:"1263-01-01", b:"Karaman Bey, Ermeni Krallığı'na karşı savaşta aldığı yaralardan öldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"dis", etiket:["hukumdar","savas"],
  yer_id:"Ermenek",
  d:"Beyliğin kurucusu Karaman Bey, Kilikya Ermeni Krallığı ile yapılan bir çarpışmada aldığı yaralar sonucu öldü. Yerine kardeşi hattının devamı olarak oğulları geçti.",
  kaynak:"karamanogullari" },

{ t:"1276-01-01", b:"Şemseddin Mehmed Bey, Ermenek subaşılığına getirildi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar","idari"],
  yer_id:"Ermenek",
  d:"Karaman Bey'in oğlu Mehmed Bey, Ermenek subaşılığına atanarak beyliğin başına geçti ve Akdeniz kıyısına doğru genişleme siyaseti izlemeye başladı.",
  kaynak:"karamanogullari" },

{ t:"1277-05-13", b:"Mehmed Bey Konya'yı ele geçirip Türkçeyi resmî dil ilan etti", tur:"toprak-kazanc",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","idari","kultur"],
  yer_id:"Konya",
  d:"Mehmed Bey, Selçuklu tahtına Cimri lakaplı Alâeddin Siyavuş'u oturtarak Konya'yı ele geçirdi ve kendisi vezir oldu. Bu sırada divanda, medresede ve resmî dairelerde Türkçe dışında dil kullanılmasını yasakladığı rivayet edilir — Anadolu'da Türkçenin resmî dil ilanı olarak anılan en erken örneklerdendir. Hâkimiyet kısa sürdü.",
  kaynak:"karamanogullari" },

{ t:"1277-11-01", b:"Mehmed Bey, Moğollara karşı İç İl'de savaşırken öldü", tur:"son",
  onem:4, dunya:1, kapsam:"dis", etiket:["savas","hukumdar"],
  yer_id:"",
  d:"Konya'daki kısa hâkimiyetinin ardından İlhanlı Moğol kuvvetleriyle İç İl bölgesinde giriştiği çarpışmada öldürüldü. İç İl'in atlas verisinde tek bir yerleşim karşılığı yoktur, bölge adıyla anılır.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1281-01-01", b:"Güneri Bey beyliğin başına geçti", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Mehmed Bey'in ölümünden sonra Güneri Bey beyliğin liderliğini üstlendi ve toprakları Akdeniz kıyısına doğru genişletmeyi sürdürdü.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1286-01-01", b:"Güneri Bey, Lârende'yi (Karaman şehri) ele geçirdi", tur:"toprak-kazanc",
  onem:4, dunya:1, kapsam:"ic", etiket:["toprak-kazanc"],
  yer_id:"Karaman",
  d:"Beyliğin sonradan adını verdiği Lârende şehri Güneri Bey döneminde ele geçirildi; şehir zamanla beyliğin en önemli merkezlerinden biri hâline geldi.",
  kaynak:"karamanogullari" },

{ t:"1300-04-17", b:"Güneri Bey öldü; topraklar Lârende, Ereğli ve Alâiye'yi kapsıyordu", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"Karaman",
  d:"26 Receb 699 (17 Nisan 1300) tarihinde ölen Güneri Bey'in bıraktığı topraklar Lârende, Ereğli ve Alâiye (Alanya) hattını kapsıyordu.",
  kaynak:"karamanogullari" },

{ t:"1302-01-01", b:"Mecdüddin Mahmud Bey, Ermenek Ulucamii'ni tamamlattı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["mimari","kultur"],
  yer_id:"Ermenek",
  d:"Beyliğin erken dönem hükümdarlarından Mecdüddin Mahmud Bey, Ermenek'te beyliğin en eski büyük camilerinden Ulucami'nin inşasını tamamlattı.",
  kaynak:"karamanogullari" },

{ t:"1307-01-01", b:"Mahmud Bey öldü", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"707 (1307-08) yılı civarında Mahmud Bey'in ölümüyle beylikte yönetim el değiştirdi.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1314-12-01", b:"Yahşi Bey Konya'yı ele geçirdi, İlhanlı kuvvetlerince yakalandı", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Konya",
  d:"Ramazan 714 (Aralık 1314) tarihinde Konya'yı ele geçiren Yahşi Bey, kısa süre sonra İlhanlı vali-kumandanı Emîr Çoban'ın kuvvetlerince yakalandı; şehir elden çıktı.",
  kaynak:"karamanogullari" },

{ t:"1318-01-01", b:"Bedreddin İbrâhim Bey, Lârende'yi başkent yapıp saray inşa ettirdi", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","mimari"],
  yer_id:"Karaman",
  d:"Bedreddin İbrâhim Bey, Lârende'yi (Karaman) beyliğin başkenti ilan edip burada bir saray yaptırdı; şehir bundan sonra beyliğin siyasi merkezi olarak öne çıktı.",
  kaynak:"karamanogullari" },

{ t:"1328-01-01", b:"Karamanlılar Konya, Gevele Kalesi ve Beyşehir'i yeniden aldı", tur:"toprak-kazanc",
  onem:4, dunya:1, kapsam:"dis", etiket:["toprak-kazanc","askeri"],
  yer_id:"Konya",
  d:"729 (1328-29) yıllarında Karamanoğulları, daha önce kaybettikleri Konya, Gevele Kalesi ve Beyşehir'i yeniden ele geçirdi; beyliğin Orta Anadolu'daki nüfuzu bu tarihten sonra yeniden güçlendi.",
  kaynak:"karamanogullari" },

{ t:"1334-01-01", b:"İbrâhim Bey Lârende'den, oğlu Ahmed Bey Konya'dan yönetti", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","hukumdar"],
  yer_id:"Karaman",
  d:"735 (1334-35) sıralarında Bedreddin İbrâhim Bey Lârende merkezli hükmederken, oğlu Ahmed Bey Konya'nın valiliğini üstlendi — beyliğin iki merkezli yönetim anlayışının bir örneği.",
  kaynak:"karamanogullari" },

{ t:"1336-01-01", b:"Aksaray Zinciriye Medresesi tamamlandı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["mimari","kultur","bilim"],
  yer_id:"Aksaray",
  d:"735-36 (1335-36) yıllarında tamamlanan Aksaray Zinciriye Medresesi, beyliğin erken dönem eğitim yapılarından biri olarak inşa edildi.",
  kaynak:"karamanogullari" },

{ t:"1340-01-01", b:"Ermenek Tol Medresesi inşa edildi", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["mimari","bilim","kultur"],
  yer_id:"Ermenek",
  d:"740 (1339-40) tarihinde Ermenek'te Tol Medresesi'nin inşası tamamlandı; beyliğin ilk yurdu olan Ermenek bu dönemde de bir eğitim merkezi olma özelliğini sürdürdü.",
  kaynak:"karamanogullari" },

{ t:"1340-06-01", b:"Halil Bey merkezini Beyşehir'den Konya'ya taşıdı", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["idari","hukumdar"],
  yer_id:"Konya",
  d:"Halil Bey, yönetim merkezini Beyşehir'den Konya'ya taşıyarak beyliğin ağırlık merkezini Selçuklu'nun eski başkentine kaydırdı.",
  kaynak:"karamanogullari" },

{ t:"1341-01-01", b:"İbrâhim Bey'in Kahire'ye giden elçisi Memlük hil'at ve sikke kalıplarıyla döndü", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["idari","antlasma"],
  yer_id:"",
  d:"İbrâhim Bey'in Memlük sarayına gönderdiği elçi, sultanın hil'atı ve sikke kalıplarıyla Lârende'ye döndü; bu, beyliğin Memlük Sultanlığı'yla kurduğu sembolik bağlılık ilişkisinin bir göstergesidir.",
  kaynak:"karamanogullari", yer_id:"Karaman" },

{ t:"1361-01-01", b:"Süleyman Bey akrabaları tarafından öldürüldü, Alâeddin Bey iktidara geçti", tur:"isyan",
  onem:5, dunya:2, kapsam:"ic", etiket:["isyan","hukumdar","taht-kavgasi"],
  yer_id:"",
  d:"Süleyman Bey'in kendi akrabaları tarafından suikaste kurban gitmesinin ardından Alâeddin Bey iktidarı ele geçirdi; Alâeddin Bey'in 37 yıl sürecek uzun hükümdarlığı böyle başladı.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1366-01-01", b:"Alâeddin Bey, Konya'yı kalıcı olarak ele geçirip başkent yaptı", tur:"toprak-kazanc",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","idari"],
  yer_id:"Konya",
  d:"Alâeddin Bey, önceki dönemlerde el değiştirmeyi sürdüren Konya'yı 1366-67'de kalıcı olarak ele geçirdi ve şehri beyliğin başkenti yaptı; Karamanoğulları'nın Selçuklu mirasının en meşru vârisi olma iddiası bu şehirle somutlaştı.",
  kaynak:"karamanogullari" },

{ t:"1375-01-01", b:"Ermeni Krallığı'nın Memlüklere düşmesiyle Çukurova'ya doğru genişledi", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["toprak-kazanc"],
  yer_id:"Tarsus",
  d:"Memlüklerin 1375'te Kilikya Ermeni Krallığı'nı ortadan kaldırmasının ardından doğan güç boşluğundan yararlanan Alâeddin Bey, Çukurova yönünde genişleme siyaseti izledi.",
  kaynak:"karamanogullari" },

{ t:"1381-06-01", b:"Nefîse Sultan, Karaman'da Hatuniye Medresesi'ni yaptırdı", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","ittifak"],
  yer_id:"Karaman",
  d:"I. Murad'ın kızı ve Alâeddin Bey'in eşi Nefîse Sultan, 783 (1381) yılında Lârende'de Hatuniye Medresesi'ni yaptırdı. Yapı, iki hanedan arasındaki evlilik ittifakının kültürel mirası olarak günümüze ulaştı.",
  kaynak:"karamanogullari" },

{ t:"1386-01-01", b:"Alâeddin Bey İfrenk Yazısı'nda I. Murad'a yenilip Beyşehir'i kaybetti", tur:"toprak-kayip",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Konya",
  d:"788 (1386) yılında Konya yakınındaki İfrenk Yazısı'nda I. Murad karşısında ağır bir yenilgi alan Alâeddin Bey, barış şartı olarak Beyşehir'i Osmanlı'ya bırakmak zorunda kaldı.",
  kaynak:"karamanogullari" },

{ t:"1389-07-01", b:"I. Kosova sonrası zayıflayan Osmanlı'dan Beyşehir geri alındı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"ic", etiket:["toprak-kazanc"],
  yer_id:"Beyşehir",
  d:"I. Kosova Savaşı'nın ardından Osmanlı'nın Balkanlar'a odaklanmasından yararlanan Alâeddin Bey, üç yıl önce kaybedilen Beyşehir'i geri aldı.",
  kaynak:"karamanogullari" },

{ t:"1391-01-01", b:"Yıldırım Bayezid ile barış; batı toprakları bırakıldı", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kayip"],
  yer_id:"",
  d:"793 (1391) yılında Yıldırım Bayezid ile yapılan barış antlaşmasıyla Karamanoğulları'nın batı sınırındaki bazı topraklar Osmanlı'ya bırakıldı.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1397-01-01", b:"Akçay'da yenilgi; Konya kuşatılıp alındı", tur:"toprak-kayip",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Konya",
  d:"800 (1397) yılında Akçay mevkiinde Yıldırım Bayezid karşısında yenilen Alâeddin Bey'in ardından Konya kuşatılıp ele geçirildi; beyliğin ilk büyük Osmanlı ilhakının başlangıcı oldu.",
  kaynak:"karamanogullari" },

{ t:"1398-01-01", b:"Alâeddin Bey idam edildi; beyliğin çoğu Osmanlı'ya katıldı", tur:"son",
  onem:5, dunya:3, kapsam:"dis", etiket:["hukumdar","toprak-kayip"],
  yer_id:"Konya",
  d:"Yıldırım Bayezid, esir aldığı Alâeddin Bey'i idam ettirdi ve beyliğin topraklarının büyük bölümünü doğrudan ilhak etti; yalnızca İç İl bölgesi Şeyh Hasan yönetiminde bağımsızlığını bir süre daha korudu.",
  kaynak:"karamanogullari" },

{ t:"1402-07-28", b:"Ankara Savaşı sonrası Timur, Alâeddin'in oğullarına toprakları geri verdi", tur:"kurulus",
  onem:4, dunya:1, kapsam:"ic", etiket:["kurulus","ittifak"],
  yer_id:"",
  d:"Timur, Ankara Savaşı'nda Yıldırım Bayezid'i yenip esir aldıktan sonra, ölçülü bir siyasetle Alâeddin Bey'in oğulları Mehmed ve Ali Bey'e babalarının topraklarını iade etti; beylik böylece yeniden kuruldu. ⚠️ Ankara Savaşı'nın kendisi bu dosyada ayrı bir madde olarak TEKRARLANMADI — bkz. `kronoloji_timurlu.js`; bu madde yalnız Karamanoğulları'nın kendi restorasyonunu anlatır.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1413-01-01", b:"II. Mehmed Bey Bursa'yı kuşattı, Memlüklerden Tarsus'u aldı", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","toprak-kazanc"],
  yer_id:"Tarsus",
  d:"816 (1413-14) yıllarında II. Mehmed Bey, Fetret Devri'nin kargaşasından yararlanarak Bursa'yı kuşattı (başarısız oldu) ve aynı dönemde Memlüklerden Tarsus'u aldı.",
  kaynak:"karamanogullari" },

{ t:"1414-06-01", b:"Beyşehir, Seydişehir ve Akşehir Çelebi Mehmed'e bırakıldı", tur:"toprak-kayip",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kayip"],
  yer_id:"Beyşehir",
  d:"817 (1414) yılında II. Mehmed Bey, Çelebi Mehmed'in gücünü kabul ederek Beyşehir, Seydişehir ve Akşehir'i Osmanlı'ya bıraktı.",
  kaynak:"karamanogullari" },

{ t:"1419-01-01", b:"Memlük kuvvetleri Kayseri'yi işgal etti, Mehmed Bey Mısır'da hapsedildi", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Kayseri",
  d:"822 (1419) yılında Memlük kuvvetleri Kayseri'yi işgal etti ve II. Mehmed Bey yakalanıp Mısır'a götürülerek hapsedildi.",
  kaynak:"karamanogullari" },

{ t:"1421-01-01", b:"Memlük sultanının ölümüyle Mehmed Bey serbest kalıp döndü", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"dis", etiket:["hukumdar"],
  yer_id:"",
  d:"824 (1421) yılında Memlük Sultanı el-Melikü'n-Nâsır'ın ölümü üzerine II. Mehmed Bey serbest bırakıldı ve beyliğine döndü.",
  kaynak:"karamanogullari", yer_id:"Kahire" },

{ t:"1423-01-01", b:"II. Mehmed Bey, Antalya'yı kuşatırken top güllesiyle öldü", tur:"son",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","hukumdar"],
  yer_id:"Antalya",
  d:"826 (1423) yılında Antalya kuşatması sırasında bir top güllesi isabetiyle II. Mehmed Bey öldü.",
  kaynak:"karamanogullari" },

{ t:"1432-01-01", b:"Tâceddin İbrâhim Bey, Karaman'da büyük külliyesini tamamlattı", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["mimari","kultur","din"],
  yer_id:"Karaman",
  d:"836 (1432) yılında Tâceddin İbrâhim Bey, Lârende'de cami, medrese, imaret ve hamamdan oluşan büyük külliyesini tamamlattı; yapı beyliğin en önemli mimari eserlerinden biri sayılır.",
  kaynak:"karamanogullari" },

{ t:"1433-01-01", b:"İbrâhim Bey, Hamîdoğulları'ndan Eğirdir ve Isparta'yı aldı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["toprak-kazanc"],
  yer_id:"Eğirdir",
  d:"837 (1433) yılında İbrâhim Bey, komşu Hamîdoğulları topraklarından Eğirdir ve Isparta'yı ele geçirdi.",
  kaynak:"karamanogullari" },

{ t:"1435-01-01", b:"Antlaşmayla Hamîd toprakları Osmanlı sancağı sayıldı; Dulkadirlilardan Kayseri alındı", tur:"antlasma",
  onem:3, dunya:2, kapsam:"dis", etiket:["antlasma","toprak-kazanc"],
  yer_id:"Kayseri",
  d:"838 (1435) yılında yapılan bir antlaşmayla Hamîdoğulları toprakları Osmanlı sancağı olarak tanındı; buna karşılık İbrâhim Bey, Dulkadirlilardan Kayseri, Ürgüp ve Yeşilhisar'ı aldı.",
  kaynak:"karamanogullari" },

{ t:"1442-01-01", b:"Macar saldırılarıyla eşzamanlı akın; II. Murad karşılık verdi", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","savas"],
  yer_id:"",
  d:"846 (1442) yılında Macarların Osmanlı'ya karşı giriştiği saldırılarla eşzamanlı olarak İbrâhim Bey Osmanlı topraklarına akınlar düzenledi; II. Murad bu harekete karşılık beylik topraklarında yıkıcı bir sefer yaptı.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1444-08-01", b:"İbrâhim Bey ile II. Murad arasında antlaşma; Osmanlı üstünlüğü kabul edildi", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","vassal"],
  yer_id:"",
  d:"Ağustos 1444'te İbrâhim Bey ile II. Murad arasında yapılan antlaşmayla Karamanoğulları Osmanlı üstünlüğünü kabul edip rehine verdi.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1448-01-01", b:"İbrâhim Bey Kıbrıs'tan Körkes Kalesi'ni aldı, Konya'yı yeniden başkent yaptı", tur:"toprak-kazanc",
  onem:2, dunya:1, kapsam:"dis", etiket:["toprak-kazanc","idari"],
  yer_id:"Konya",
  d:"İbrâhim Bey, Kıbrıs Krallığı'ndan Körkes (Korikos) Kalesi'ni aldı ve yönetim merkezini yeniden Konya'ya taşıdı.",
  kaynak:"karamanogullari" },

{ t:"1464-01-01", b:"Tâceddin İbrâhim Bey, Gevele Kalesi'ne giderken öldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"Karaman",
  d:"869 (1464) yılında Gevele Kalesi'ne giderken yolda ölen Tâceddin İbrâhim Bey, Lârende'de defnedildi. 37 yılı aşkın hükümdarlığı beyliğin son istikrarlı dönemiydi.",
  kaynak:"karamanogullari" },

{ t:"1465-01-01", b:"Pîr Ahmed, Osmanlı desteğiyle kardeşi İshak'ı yenip beyliğin tamamına hâkim oldu", tur:"isyan",
  onem:4, dunya:2, kapsam:"dis", etiket:["isyan","hukumdar","ittifak"],
  yer_id:"",
  d:"870 (1465) yılında Fâtih Sultan Mehmed'in desteğini alan Pîr Ahmed, kardeşi İshak'ı yenerek beyliğin tamamına hâkim oldu; İshak aynı yıl öldü.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1468-04-01", b:"Osmanlılar Gevele ve Konya'yı aldı, Pîr Ahmed dağlara çekildi", tur:"toprak-kayip",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Konya",
  d:"Nisan 1468'de Fâtih'in seferi Gevele Kalesi ve Konya'nın Osmanlı'ya geçmesiyle sonuçlandı; Pîr Ahmed direnişini dağlık İç İl bölgesine taşımak zorunda kaldı.",
  kaynak:"karamanogullari" },

{ t:"1471-01-01", b:"Kasım Bey, Akkoyunlu desteğiyle Konya'yı kısa süre geri aldı", tur:"isyan",
  onem:3, dunya:2, kapsam:"dis", etiket:["isyan","ittifak"],
  yer_id:"Konya",
  d:"Kasım Bey, Akkoyunlu Uzun Hasan'ın desteğini alarak Konya'yı kısa bir süreliğine geri aldıysa da kalıcı olamadı.",
  kaynak:"karamanogullari" },

{ t:"1474-01-01", b:"Osmanlı seferi dağlık ve kıyı bölgeleri de tam denetime aldı", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["askeri","toprak-kayip"],
  yer_id:"",
  d:"1474 seferiyle Osmanlı, Karamanoğulları'nın hâlâ direniş gösterdiği dağlık ve kıyı bölgelerini de tam denetim altına aldı.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1483-01-01", b:"Kasım Bey öldü; İç İl'de Turgutoğlu Mahmud bey seçildi", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Kasım Bey'in ölümünün ardından Karamanlı ileri gelenleri İç İl bölgesinde Turgutoğlu Mahmud'u bey olarak seçti; beyliğin son kalıntısı bu şekilde bir süre daha sürdü.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1487-01-01", b:"Mahmud Bey Halep'e kaçtı; Karamanoğulları tarihe karıştı", tur:"son",
  onem:5, dunya:2, kapsam:"dis", etiket:["son","toprak-kayip"],
  yer_id:"",
  d:"892 (1487) yılında Mahmud Bey'in Memlük yanlısı tutumu üzerine gelen Osmanlı askerî harekâtı karşısında Halep'e kaçmasıyla Karamanoğulları'nın son kalıntısı da ortadan kalktı; iki asrı aşkın süren beylik tarihe karıştı.",
  kaynak:"karamanogullari", yer_id:"Halep" },

{ t:"1380-01-01", b:"Alâeddin Bey'in siparişiyle Yârcânî \"Karamannâme\"yi kaleme aldı", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["kultur","edebiyat"],
  yer_id:"",
  d:"Alâeddin Bey döneminde (1361-1398, kesin tarih TDV'de verilmiyor), Yârcânî mahlaslı bir şair, beyliğin tarihini şehnâme tarzında anlatan Farsça \"Karamannâme\"yi kaleme aldı. Eser, beyliğin tarihi için TDV'nin de belirttiği gibi tek kaynak niteliğindedir; 16. yüzyıl başında Şikârî tarafından Türkçe nesre çevrilecektir.",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1400-01-01", b:"Bölge tahıl, yün, deri, halı ve at ihraç ediyordu", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"ic", etiket:["ekonomi","ticaret"],
  yer_id:"",
  d:"Karamanoğulları toprakları buğday, arpa, yulaf ve pamuk üretiyor, ünlü Karaman koyunu ve soylu atlar yetiştiriyordu; tahıl, yün, deri, halı ve at Kıbrıs, Venedik, Ceneviz ve Memlük Sultanlığı'na ihraç ediliyordu. (Tarih belirsiz, dönem geneli için temsilî tarih seçildi.)",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1350-01-01", b:"Türkmen oymak konfederasyonlarına dayanan toplumsal yapı", tur:"sosyal",
  onem:1, dunya:1, kapsam:"ic", etiket:["sosyal","idari"],
  yer_id:"",
  d:"Beylik, Türkmen oymak konfederasyonlarına dayanıyordu; hanedan toprakları aile üyeleri ve ileri gelen beyler arasında pay ediyordu. Zâviye ve tekkeler bölgede yaygındı, Konya'da Mevlevî geleneği güçlüydü. (Tarih belirsiz, dönem geneli için temsilî tarih seçildi.)",
  kaynak:"karamanogullari", kapsam_genis:true },

{ t:"1431-01-01", b:"Aksaray Ulucamii tamamlandı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["mimari","kultur"],
  yer_id:"Aksaray",
  d:"1431 yılında Aksaray'da beyliğin büyük camilerinden Ulucami'nin inşası tamamlandı.",
  kaynak:"karamanogullari" },

{ t:"1441-01-01", b:"Mut'ta Lâl Ağa Camii yaptırıldı", tur:"mimari",
  onem:1, dunya:1, kapsam:"ic", etiket:["mimari"],
  yer_id:"",
  d:"1441 civarında Mut'ta Lâl Ağa Camii inşa edildi; Mut'un atlas verisinde ayrı bir yerleşim kaydı bulunmuyor.",
  kaynak:"karamanogullari", yer_kon:[36.6469,33.4386] },

// ═══════════════════ ANADOLU (TÜRKİYE) SELÇUKLU DEVLETİ (1075-1308) ═══════════════════

{ t:"1071-08-26", b:"Malazgirt zaferi Anadolu'nun kapısını açtı", tur:"savas",
  onem:5, dunya:5, kapsam:"dis", etiket:["Malazgirt", "Büyük Selçuklu", "Bizans"],
  yer_id:"",
  d:"Büyük Selçuklu Sultanı Alparslan, Bizans İmparatoru IV. Romanos Diogenes'i Malazgirt'te ağır bir yenilgiye uğrattı; bu zafer Türkmen boylarının önündeki son büyük engeli kaldırarak Anadolu'nun kapılarını açtı. Anadolu Selçuklu Devleti'ni kuracak olan I. Süleyman Şah da bu fetih dalgasının içinde yer aldı. (TDV `selcuklular` maddesinin taşıdığı baştaki bağlam; devletin kendisi 1075'te kurulacaktır.)",
  kaynak:"selcuklular", yer_kon:[39.1467,42.5397] },

{ t:"1075-01-01", b:"I. Süleyman Şah tarafından kuruldu, İznik başkent oldu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus", "İznik", "Süleyman Şah"],
  yer_id:"İznik",
  d:"Malazgirt sonrası Anadolu'ya yayılan Türkmen beyleri arasından I. Süleyman Şah, İznik'i merkez edinerek Anadolu Selçuklu Devleti'ni kurdu. Devlet, kısa sürede Batı Anadolu'da Bizans'a karşı en güçlü Türk siyasi teşekkülü hâline geldi.",
  kaynak:"selcuklular" },

{ t:"1080-01-01", b:"Fetih sonrası nüfus ve iskân politikası", tur:"sosyal",
  onem:2, dunya:1, kapsam:"ic", etiket:["iskan", "göç", "tehcir", "Rumlar"],
  yer_id:"",
  d:"Kuruluş yıllarında Selçuklular, Bizans idaresindeki Batı Anadolu'ya akın yaptıklarında ele geçirdikleri Rum ailelerini kendi ülkelerine göç ettirip geniş araziler, çiftçilik araçları vererek beş yıl vergiden muaf tutuyordu; din ve milliyet farkı gözetmeyen bu adil yönetim sebebiyle Bizans idaresindeki bazı Rumlar da kendiliğinden Selçuklu topraklarına göç ediyordu.",
  kaynak:"selcuklular", kapsam_genis:true },

{ t:"1081-01-01", b:"Süleyman Şah - Bizans barış antlaşması (Drakon Çayı sınırı)", tur:"antlasma",
  onem:3, dunya:3, kapsam:"dis", etiket:["Bizans", "antlaşma", "sınır"],
  yer_id:"İzmit",
  d:"I. Süleyman Şah ile İmparator I. Aleksios Komnenos arasında yapılan antlaşmayla İzmit-İstanbul arasındaki Drakon (Dragos) çayı iki devlet arasında sınır kabul edildi. Bizans kaynaklarına göre Selçuklu hükümdarı Boğaziçi kıyılarında gümrük daireleri kurdurup gemilerden vergi almaktaydı.",
  kaynak:"selcuklular" },

{ t:"1082-01-01", b:"Süleyman Şah sultan unvanını aldı", tur:"hukumdar",
  onem:2, dunya:2, kapsam:"ic", etiket:["unvan", "Süleyman Şah"],
  yer_id:"İznik",
  d:"I. Süleyman Şah 1082 yılında sultan unvanını alarak Anadolu Selçuklu Devleti'nin bağımsız hükümdarlığını pekiştirdi.",
  kaynak:"selcuklular" },

{ t:"1082-06-01", b:"Çukurova seferi: Tarsus, Adana, Misis'in fethi", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"ic", etiket:["Çukurova", "fetih"],
  yer_id:"Adana",
  d:"I. Süleyman Şah Çukurova'ya düzenlediği seferle Tarsus, Adana, Aynizerbâ ve Misis şehir ve kalelerini fethetti (1082-1083).",
  kaynak:"selcuklular" },

{ t:"1084-12-12", b:"Antakya'nın fethi", tur:"toprak-kazanc",
  onem:4, dunya:3, kapsam:"dis", etiket:["Antakya", "fetih"],
  yer_id:"Antakya",
  d:"Antakya halkının şehri teslim edeceği haberi üzerine I. Süleyman Şah oğulları Kılıcarslan ve Dâvud ile birlikte Antakya'ya gitti ve şehri 12 Aralık 1084'te (477) kolayca ele geçirdi.",
  kaynak:"selcuklular" },

{ t:"1086-06-04", b:"Süleyman Şah'ın Ayn Seylem'de ölümü", tur:"son",
  onem:4, dunya:2, kapsam:"dis", etiket:["Süleyman Şah", "Tutuş", "ölüm"],
  yer_id:"Halep",
  d:"Halep'i kuşatan I. Süleyman Şah'ın ordusu, Suriye Selçuklu Hükümdarı Tutuş'un kuvvetleriyle Aynüseylem'de karşılaştı; Emîr Çubuk'un saf değiştirmesi ve Artuk Bey'in manevralarıyla bozguna uğradı (18 Safer 479 / 4 Haziran 1086). Süleyman Şah bir rivayete göre savaşta öldü, diğerine göre intihar etti; Halep Mezarlığı'na defnedildi.",
  kaynak:"selcuklular" },

{ t:"1092-01-01", b:"I. Kılıcarslan'ın İznik'e dönüp tahta çıkışı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["Kılıcarslan", "tahta çıkış"],
  yer_id:"İznik",
  d:"Melikşah'ın ölümü üzerine serbest bırakılan Kılıcarslan, Yâvegiyye Türkmenleri'nden kalabalık bir topluluğu yanına alarak İznik'e döndü ve 1092 sonu - 1093 başında şehri Ebü'l-Kāsım'ın kardeşi Ebü'l-Gāzî'den teslim aldı.",
  kaynak:"selcuklular" },

{ t:"1096-10-21", b:"Halk Haçlı Seferi'nin (Pierre l'Ermite) imhası", tur:"savas",
  onem:3, dunya:3, kapsam:"dis", etiket:["Haçlı Seferi", "Pierre l'Ermite"],
  yer_id:"İznik",
  d:"I. Kılıcarslan, keşiş Pierre l'Ermite idaresindeki köylü ve maceracılardan oluşan Halk Haçlı Seferi ordusunu 1 Zilkade 489 / 21 Ekim 1096'da hemen hemen tamamen imha etti.",
  kaynak:"selcuklular" },

{ t:"1097-06-19", b:"I. Haçlı Seferi İznik'i aldı, başkent Konya'ya taşındı", tur:"toprak-kayip",
  onem:5, dunya:4, kapsam:"dis", etiket:["İznik", "I. Haçlı Seferi", "başkent"],
  yer_id:"İznik",
  d:"I. Haçlı Seferi ordusu ve Bizans kuvvetleri, uzun bir kuşatmanın ardından İznik'i 19 Haziran 1097'de ele geçirdi; şehir Selçuklulara değil doğrudan Bizans'a teslim edildi. Başkentini kaybeden I. Kılıcarslan, devletin merkezini Orta Anadolu'da Konya'ya taşımak zorunda kaldı — bu, Selçuklu tarihinin en kalıcı stratejik dönüşümlerinden biridir.",
  kaynak:"selcuklular" },

{ t:"1097-07-01", b:"Eskişehir yenilgisi ve Konya'nın başkent oluşu", tur:"idari",
  onem:4, dunya:4, kapsam:"dis", etiket:["Konya", "başkent", "I. Haçlı Seferi"],
  yer_id:"Eskişehir",
  d:"İznik'in kaybından sonra I. Kılıcarslan'ın ordusu Eskişehir yakınında Haçlı ordusuna yenildi (Temmuz 1097). Selçuklular Marmara ve Batı Anadolu'yu Bizans'a bırakıp Orta Anadolu'ya çekilmek zorunda kaldı; Kılıcarslan Konya'yı devletin yeni merkezi yaptı.",
  kaynak:"selcuklular" },

{ t:"1101-01-01", b:"Niksar'da Haçlı ordusunun yok edilmesi", tur:"savas",
  onem:3, dunya:3, kapsam:"dis", etiket:["Haçlı Seferi", "Danişmendliler", "ittifak"],
  yer_id:"Niksar",
  d:"I. Kılıcarslan, Danişmendli Gümüştegin Gazi ile ittifak yaparak Antakya Prinkepsi Bohemound'u kurtarmak için Niksar'a yürüyen Lombard Haçlı ordusuna karşı 1101'de parlak bir zafer kazandı; diğer Haçlı güçleri de Ereğli (Konya) yakınlarında yok edildi.",
  kaynak:"selcuklular" },

{ t:"1103-01-01", b:"Elbistan ve Maraş Ermenilerinin Haçlılardan kurtarılması", tur:"savas",
  onem:2, dunya:2, kapsam:"dis", etiket:["Ermeniler", "Elbistan"],
  yer_id:"Elbistan",
  d:"Haçlılar'dan zulüm görmüş olan Elbistan Ermenileri'nin ricası üzerine I. Kılıcarslan Haçlıları buradan ve Maraş'tan uzaklaştırdı.",
  kaynak:"selcuklular" },

{ t:"1106-09-02", b:"Malatya'nın fethi", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"ic", etiket:["Malatya", "fetih"],
  yer_id:"Malatya",
  d:"Danişmendli Gümüştegin Gazi'nin ölümünün ardından I. Kılıcarslan, doğunun mâmur şehirlerinden Malatya'yı 1 Muharrem 500 / 2 Eylül 1106'da ele geçirdi.",
  kaynak:"selcuklular" },

{ t:"1107-01-01", b:"I. Kılıcarslan'ın Habur Nehri'nde ölümü", tur:"son",
  onem:3, dunya:2, kapsam:"dis", etiket:["Kılıcarslan", "Muhammed Tapar", "ölüm"],
  yer_id:"Musul",
  d:"Güneydoğu Anadolu beylerine güvenerek Büyük Selçuklu Hükümdarı Muhammed Tapar'ın Musul valisi Çavlı Sakavu ile savaşa giren I. Kılıcarslan, müttefiklerinin ayrılması üzerine esir düşmemek için Habur çayına atını sürdü ve boğularak öldü (500/1107).",
  kaynak:"selcuklular" },

{ t:"1110-01-01", b:"Melikşah (Şâhinşah)'ın Konya'da tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["Melikşah", "taht"],
  yer_id:"Konya",
  d:"Büyük Selçuklu Sultanı Muhammed Tapar, Anadolu'daki otorite boşluğu üzerine I. Kılıcarslan'ın büyük oğlu Melikşah'ı (Şâhinşah) Konya'ya gönderdi; Melikşah 503 (1110) yılında tahta oturdu.",
  kaynak:"selcuklular" },

{ t:"1116-01-01", b:"I. Mesud'un kardeşinden tahtı alması", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["Mesud", "taht kavgası", "Danişmendliler"],
  yer_id:"Konya",
  d:"Kayınpederi Danişmendli Emîr Gazi'nin desteğiyle Mesud, hükümdarlığı ağabeyi Melikşah'ın elinden aldı (510/1116); Melikşah'ın gözlerine mil çekildi ve ertesi yıl öldürüldü.",
  kaynak:"mesud-i" },

{ t:"1134-01-01", b:"Emîr Gazi'nin ölümü, Ankara ve Kastamonu'nun ilhakı", tur:"toprak-kazanc",
  onem:2, dunya:1, kapsam:"ic", etiket:["Danişmendliler", "Ankara", "Kastamonu"],
  yer_id:"Ankara",
  d:"Danişmendli Emîr Gazi'nin 1134'te ölümü üzerine I. Mesud, Ankara ve Kastamonu dahil önemli toprakları Selçuklu topraklarına kattı.",
  kaynak:"mesud-i" },

{ t:"1140-01-01", b:"İlk Selçuklu parasının basılması", tur:"idari",
  onem:3, dunya:2, kapsam:"ic", etiket:["para", "sikke", "I. Mesud"],
  yer_id:"",
  d:"Anadolu'da ilk Selçuklu parası I. Mesud tarafından bastırıldı; onun hükümdarlığının başında Konya, Niğde ve Afyonkarahisar bölgeleriyle sınırlı olan Selçuklu ülkesi öldüğünde Eskişehir, Ankara, Çankırı, Kastamonu ve Elbistan'ı da içine alacak şekilde genişlemişti.",
  kaynak:"mesud-i", kapsam_genis:true },

{ t:"1146-01-01", b:"Bizans İmparatoru Manuel'in Konya seferinin püskürtülmesi", tur:"savas",
  onem:3, dunya:3, kapsam:"dis", etiket:["Bizans", "Manuel Komnenos"],
  yer_id:"Konya",
  d:"Bizans İmparatoru Manuel Komnenos, Türkmen akınlarına karşılık vermek için büyük bir orduyla Konya'ya kadar geldiyse de başarı gösteremeyip ağır kayıplarla geri döndü ve bir daha I. Mesud ile savaşmadı.",
  kaynak:"selcuklular" },

{ t:"1147-10-26", b:"Dorylaeum'da (Eskişehir) Alman Haçlı ordusunun yenilgisi", tur:"savas",
  onem:4, dunya:4, kapsam:"dis", etiket:["II. Haçlı Seferi", "III. Konrad", "Eskişehir"],
  yer_id:"Eskişehir",
  d:"I. Mesud, II. Haçlı Seferi kapsamında Anadolu'ya geçen Alman İmparatoru III. Konrad'ın ordusunu Eskişehir yöresinde ağır bir yenilgiye uğrattı; imparator çok az bir kuvvetle İstanbul'a dönebildi.",
  kaynak:"mesud-i" },

{ t:"1149-01-01", b:"Maraş'ın Haçlılardan (Josselin) alınması", tur:"toprak-kazanc",
  onem:2, dunya:2, kapsam:"dis", etiket:["Maraş", "Haçlılar"],
  yer_id:"Maraş",
  d:"I. Mesud ve oğlu Kılıcarslan, Urfa Kontu II. Josselin'den Maraş'ı fethetti.",
  kaynak:"mesud-i" },

{ t:"1155-01-01", b:"I. Mesud'un ölümü, II. Kılıcarslan'ın tahta çıkışı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["Mesud", "Kılıcarslan", "veraset"],
  yer_id:"Konya",
  d:"I. Mesud 550 (1155) yılında öldü; yerine oğlu II. Kılıcarslan geçti. Mesud'un ölümü sırasında Selçuklu ülkesi büyük ölçüde genişlemiş, Batılılar Anadolu'yu 'Turchia' adıyla anmaya başlamıştı.",
  kaynak:"selcuklular" },

{ t:"1162-01-01", b:"II. Kılıcarslan'ın İstanbul'da Bizans ile barışı", tur:"antlasma",
  onem:2, dunya:2, kapsam:"dis", etiket:["Bizans", "barış", "İstanbul"],
  yer_id:"İstanbul",
  d:"II. Kılıcarslan 1000 süvariyle İstanbul'a giderek İmparator Manuel Komnenos ile bir barış antlaşması müzakere etti.",
  kaynak:"kilicarslan-ii" },

{ t:"1174-01-01", b:"Sivas, Niksar, Tokat'ın Danişmendlilerden alınması", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"ic", etiket:["Danişmendliler", "Sivas"],
  yer_id:"Sivas",
  d:"Musul-Halep Atabegi Nûreddin Zengî'nin ölümünün ardından II. Kılıcarslan, Danişmendlilerden Sivas, Niksar, Tokat ve Komana'yı ele geçirdi.",
  kaynak:"kilicarslan-ii" },

{ t:"1176-09-17", b:"II. Kılıçarslan, Myriokephalon'da Bizans'ı yendi", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["Myriokephalon", "Bizans", "Manuel Komnenos"],
  yer_id:"",
  d:"Bizans İmparatoru I. Manuel Komnenos, Selçuklu başkenti Konya'yı ele geçirmek amacıyla düzenlediği büyük seferde Frigya'daki Myriokephalon (Miryokefalon) geçidinde II. Kılıçarslan'a ağır bir yenilgiye uğradı (17 Eylül 1176). Bizans'ın Anadolu içlerine yönelik son büyük askerî girişimi olan bu bozgun, Anadolu'nun Türkleşmesinin artık geri döndürülemez olduğunu tescil etti — çağdaşları bu zaferi ikinci bir Malazgirt olarak andı.",
  kaynak:"selcuklular", yer_kon:[38.2967,29.735] },

{ t:"1178-01-01", b:"Danişmendli topraklarının Selçuklu Devleti'ne ilhakı", tur:"toprak-kazanc",
  onem:5, dunya:2, kapsam:"ic", etiket:["Danişmendliler", "ilhak", "Kayseri", "Malatya"],
  yer_id:"Kayseri",
  d:"574'te (1178) Kayseri, Sivas, Niksar, Tokat, Amasya ve Malatya'yı elinde tutan Danişmendli topraklarının Selçuklu topraklarına katılmasıyla hem siyasî-millî birlik kuruldu hem de Anadolu Selçuklu Devleti büyük bir devlet durumuna yükseldi.",
  kaynak:"selcuklular" },

{ t:"1184-01-01", b:"II. Kılıcarslan'ın ülkeyi on bir oğlu arasında taksimi", tur:"bolunme",
  onem:4, dunya:2, kapsam:"ic", etiket:["taksim", "şehzadeler"],
  yer_id:"Konya",
  d:"II. Kılıcarslan hayatının son yıllarında (580/1184-85) ülkesini on bir oğlu arasında paylaştırdı; böylece büyük gayretlerle kurduğu birleşik Selçuklu ülkesi on bir parçaya bölündü.",
  kaynak:"kilicarslan-ii" },

{ t:"1185-01-01", b:"Amisos (Samsun) limanının fethi", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["Samsun", "liman", "Karadeniz ticareti"],
  yer_id:"Samsun",
  d:"İç ve dış ticareti geliştirmek amacıyla ticaret yollarının güvenliğini sağlamaya yönelik politika çerçevesinde Karadeniz kıyısındaki önemli liman şehri Amisos (Samsun) yaklaşık 1185'te fethedildi; bu, Sinop ve Antalya ile birlikte Selçuklu deniz ticaret ağının temel taşlarından biri oldu.",
  kaynak:"selcuklular" },

{ t:"1192-08-26", b:"II. Kılıcarslan'ın ölümü", tur:"son",
  onem:3, dunya:2, kapsam:"ic", etiket:["Kılıcarslan", "ölüm", "Aksaray"],
  yer_id:"Aksaray",
  d:"II. Kılıcarslan, Aksaray kuşatması sırasında 26 Ağustos 1192'de öldü ve Konya'ya defnedildi. Yerine oğlu I. Gıyâseddin Keyhusrev geçti.",
  kaynak:"kilicarslan-ii" },

{ t:"1196-01-01", b:"II. Süleyman Şah'ın kardeşini tahttan indirmesi", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["taht kavgası","Keyhusrev","taht-kavgasi"],
  yer_id:"Konya",
  d:"I. Gıyâseddin Keyhusrev, kardeşi II. Süleyman Şah tarafından tahttan indirildi (593/1196); Süleyman Şah kardeşlerinin topraklarını da ele geçirerek ülkenin siyasî birliğini yeniden kurmaya çalıştı.",
  kaynak:"keyhusrev-i" },

{ t:"1202-01-01", b:"II. Süleyman Şah'ın Gürcistan seferi", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["Gürcistan", "sefer"],
  yer_id:"",
  d:"II. Süleyman Şah 1202'de Gürcistan'a düzenlediği seferden bir netice elde edemedi.",
  kaynak:"selcuklular", kapsam_genis:true },

{ t:"1204-01-01", b:"II. Süleyman Şah'ın ölümü, III. Kılıcarslan'ın tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["veraset", "III. Kılıcarslan"],
  yer_id:"Konya",
  d:"II. Süleyman Şah 1204'te vefat etti; yerine geçen oğlu III. Kılıcarslan'ın yedi sekiz ay süren hükümdarlığı sırasında Isparta yöresi fethedildi.",
  kaynak:"selcuklular" },

{ t:"1204-06-01", b:"I. Keyhusrev'in İstanbul'a sığınması", tur:"vassal",
  onem:2, dunya:2, kapsam:"dis", etiket:["Bizans", "İstanbul", "sürgün", "IV. Haçlı Seferi"],
  yer_id:"İstanbul",
  d:"Tahttan indirilmesinin ardından çeşitli saraylarda sürgün yaşayan I. Gıyâseddin Keyhusrev, IV. Haçlı Seferi'nin İstanbul'u işgalinin ardından şehre sığındı ve Manuel Mavrozomes'in kızıyla evlendi.",
  kaynak:"keyhusrev-i" },

{ t:"1205-01-01", b:"I. Keyhusrev'in ikinci kez tahta çıkışı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["Keyhusrev", "ikinci saltanat"],
  yer_id:"Konya",
  d:"I. Gıyâseddin Keyhusrev 601 (1205) yılında Selçuklu tahtına ikinci kez çıktı ve oğullarını bölge valisi olarak atadı.",
  kaynak:"keyhusrev-i" },

{ t:"1206-01-01", b:"Kayseri Gevher Nesibe Darüşşifası ve Tıp Medresesi'nin kuruluşu", tur:"bilim",
  onem:4, dunya:2, kapsam:"ic", etiket:["tıp", "hastane", "Kayseri", "Gevher Nesibe"],
  yer_id:"Kayseri",
  d:"I. Gıyâseddin Keyhusrev ve kız kardeşi Gevher Nesibe Hatun tarafından Kayseri'de Gevher Nesibe Darüşşifası ve bitişiğindeki Gıyâseddin Keyhusrev Tıp Medresesi kuruldu; Anadolu Selçuklu döneminin en erken şifahane-tıp medresesi kompleksidir.",
  kaynak:"bimaristan" },

{ t:"1207-01-01", b:"Antalya'nın fethi", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["Antalya", "liman", "fetih"],
  yer_id:"Antalya",
  d:"I. Gıyâseddin Keyhusrev, ikinci sultanlığı döneminde Denizli ve Antalya yörelerini ele geçirdi (603/1207); Antalya'nın fethi Selçuklu ticaretine büyük katkı sağladı.",
  kaynak:"selcuklular" },

{ t:"1211-01-01", b:"I. Keyhusrev'in Alaşehir'de ölümü", tur:"son",
  onem:3, dunya:2, kapsam:"dis", etiket:["Laskaris", "İznik Rum İmparatorluğu", "ölüm"],
  yer_id:"Alaşehir",
  d:"I. Gıyâseddin Keyhusrev, İznik Rum İmparatoru Theodoros Laskaris'e karşı giriştiği savaşta 607 (1211) yılında öldü ve Konya'daki türbesine defnedildi. Yerine büyük oğlu I. İzzeddin Keykâvus geçti.",
  kaynak:"keyhusrev-i" },

{ t:"1214-01-01", b:"I. Keykâvus'un fütüvvet teşkilatına girişi", tur:"sosyal",
  onem:3, dunya:1, kapsam:"ic", etiket:["Ahilik", "fütüvvet", "Sühreverdi"],
  yer_id:"Konya",
  d:"I. İzzeddin Keykâvus, Abbâsî Halifesi Nâsır-Lidînillâh'ın elçisi Şehâbeddin es-Sühreverdî vasıtasıyla fütüvvet teşkilatına girdi (1214); bu olay Anadolu'da Ahiliğin ortaya çıkışının başlangıcı kabul edilir.",
  kaynak:"selcuklular" },

{ t:"1214-11-02", b:"Sinop'un fethi", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["Sinop", "liman", "Trabzon Rum"],
  yer_id:"Sinop",
  d:"I. İzzeddin Keykâvus, Karadeniz'in önemli limanı Sinop'u 26 Cemâziyelâhir 611 / 2 Kasım 1214'te fethetti; Trabzon Rum İmparatoru'nu esaretten kurtararak Trabzon'u 1243'e kadar Selçuklu'ya tâbi kıldı.",
  kaynak:"keykavus-i" },

{ t:"1216-01-22", b:"Antalya'nın Franklardan geri alınması", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"ic", etiket:["Antalya", "Franklar"],
  yer_id:"Antalya",
  d:"I. İzzeddin Keykâvus, Frank kontrolüne geçmiş olan Antalya'yı 30 Ramazan 612 / 22 Ocak 1216'da geri aldı ve şehre Mübârizüddin Ertokuş'u vali tayin etti.",
  kaynak:"keykavus-i" },

{ t:"1216-06-01", b:"Çukurova Ermeni Krallığı ile tâbiiyet antlaşması", tur:"antlasma",
  onem:2, dunya:2, kapsam:"dis", etiket:["Ermeni Krallığı", "haraç"],
  yer_id:"",
  d:"Çinçin ve Hacın kalelerindeki zaferlerin ardından I. İzzeddin Keykâvus, Ermeni Krallığı'nı yıllık 20.000 altın haraç ödemeye ve Selçuklu üstünlüğünü tanımaya mecbur bıraktı.",
  kaynak:"keykavus-i", kapsam_genis:true },

{ t:"1217-01-01", b:"Sivas Keykâvus Darüşşifası'nın inşası", tur:"bilim",
  onem:3, dunya:1, kapsam:"ic", etiket:["hastane", "Sivas", "tıp"],
  yer_id:"Sivas",
  d:"I. İzzeddin Keykâvus 1217'de Sivas'ta kendi adını taşıyan darüşşifayı (hastane) yaptırdı; sultan 1220'de bu hastanenin türbesine defnedildi.",
  kaynak:"bimaristan" },

{ t:"1220-01-01", b:"I. Keykâvus'un ölümü, I. Alâeddin Keykubad'ın tahta çıkışı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["veraset", "Keykubad"],
  yer_id:"Sivas",
  d:"I. İzzeddin Keykâvus Şevval 616 (Ocak 1220) içinde Viranşehir yakınında öldü; kardeşi I. Alâeddin Keykubad Sivas'ta sultan ilân edilip ardından Konya'da halifenin de tasdikiyle tahta oturdu.",
  kaynak:"keykubad-i" },

{ t:"1222-01-01", b:"Alanya (Kalonoros)'ın fethi ve tersanenin kuruluşu", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["Alanya", "tersane", "Akdeniz"],
  yer_id:"Alanya",
  d:"I. Alâeddin Keykubad, Antalya'nın doğusundaki Kalonoros Kalesi'ni 619 (1222) yılında alıp yeniden inşa ettirerek Alâiye adını verdi; burada bir tersane kurdurdu.",
  kaynak:"keykubad-i" },

{ t:"1223-01-01", b:"Venedik ve Kıbrıs Frankları ile ticarî antlaşmalar", tur:"idari",
  onem:2, dunya:1, kapsam:"dis", etiket:["Venedik", "Kıbrıs", "ticaret antlaşması"],
  yer_id:"",
  d:"Antalya ve Alâiye limanlarının fethinin ardından deniz ticaretine hâkim olan Venedikliler ve Kıbrıs Frankları ile ticarî anlaşmalar yapılarak Selçuklu dış ticaretinin güvenliği ve gelişmesi sağlandı.",
  kaynak:"selcuklular", kapsam_genis:true },

{ t:"1224-01-01", b:"Suğdak seferi", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["Kırım", "Suğdak", "ticaret"],
  yer_id:"",
  d:"Hüsâmeddin Çoban komutasındaki Selçuklu donanması Karadeniz'in kuzeyindeki Suğdak şehrini fethetti (1224); Çoban burada bir cami yaptırıp görevliler tayin etti. Sefer Selçukluların ticarete verdiği önemi göstermektedir.",
  kaynak:"selcuklular", yer_kon:[44.8482,34.9728] },

{ t:"1224-06-01", b:"I. Keykubad'ın Konya'da hastane ve ulucamiler yaptırması", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["Konya", "hastane", "ulucami", "imar"],
  yer_id:"Konya",
  d:"İmar faaliyetleri ve hayırseverliğiyle tanınan I. Alâeddin Keykubad, Orta Anadolu şehirlerinde çeşitli ulucamiler yaptırdı ve Konya'da bir hastahane inşa ettirdi.",
  kaynak:"keykubad-i" },

{ t:"1226-01-01", b:"Kâhta, Hısnımansûr ve Çemişkezek'in Artuklulardan alınması", tur:"toprak-kazanc",
  onem:2, dunya:1, kapsam:"ic", etiket:["Artuklular", "Kâhta"],
  yer_id:"Kâhta",
  d:"I. Alâeddin Keykubad 623 (1226) yılında Artuklulardan Kâhta, Hısnımansûr ve Çemişkezek'i aldı.",
  kaynak:"keykubad-i" },

{ t:"1227-01-01", b:"Bahâeddin Veled ve ailesinin (Mevlânâ) Konya'ya yerleşmesi", tur:"sosyal",
  onem:3, dunya:2, kapsam:"ic", etiket:["Mevlânâ", "Bahâeddin Veled", "göç"],
  yer_id:"Konya",
  d:"Moğol istilâsı endişesiyle 1219 sonlarında Belh'ten ayrılan Bahâeddin Veled, Malatya, Erzincan, Akşehir ve yedi yıl kaldığı Lârende (Karaman) üzerinden geçerek yaklaşık 1226-1228'de oğlu Celâleddin (Mevlânâ) ile birlikte Konya'ya yerleşti.",
  kaynak:"bahaeddin-veled" },

{ t:"1228-01-01", b:"Mengücükoğulları Beyliği'nin ilhakı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"ic", etiket:["Mengücükoğulları", "Erzincan"],
  yer_id:"Erzincan",
  d:"I. Alâeddin Keykubad 625 (1228) yılında Erzincan-Kemah çevresindeki Mengücükoğulları Beyliği'ni ortadan kaldırarak topraklarını Selçuklu Devleti'ne kattı.",
  kaynak:"keykubad-i" },

{ t:"1229-01-01", b:"Sultan Hanı kervansaraylarının inşası", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["kervansaray", "ticaret yolu", "Sultan Hanı"],
  yer_id:"Konya",
  d:"I. Alâeddin Keykubad, biri Konya-Aksaray, diğeri Kayseri-Sivas yolu üzerinde olmak üzere Sultan Hanı adını taşıyan iki muhteşem kervansaray yaptırdı; bu yapılar ticaret yollarının güvenliğini sağlama politikasının simgesi oldu.",
  kaynak:"keykubad-i" },

{ t:"1230-01-01", b:"Yassıçemen Savaşı", tur:"savas",
  onem:4, dunya:4, kapsam:"dis", etiket:["Celâleddin Harizmşah", "Eyyûbîler", "ittifak"],
  yer_id:"Erzincan",
  d:"I. Alâeddin Keykubad, Eyyûbî müttefikleriyle birlikte Erzincan yakınındaki Yassıçemen'de Celâleddin Harizmşah'ın ordusunu 627 (1230) yılında ağır bir yenilgiye uğrattı; bu zaferle Selçuklu sınırları doğuda Erzurum ötesine ve Van gölü havzasına ulaştı.",
  kaynak:"keykubad-i" },

{ t:"1230-06-01", b:"Ahi Evran'ın esnaf teşkilatını kurması", tur:"sosyal",
  onem:3, dunya:1, kapsam:"ic", etiket:["Ahilik", "esnaf", "Ahi Evran"],
  yer_id:"Kayseri",
  d:"Ahî unvanıyla anılan Şeyh Nasîrüddin Mahmûd el-Hûyî'nin (Ahi Evran) I. Alâeddin Keykubad döneminde Anadolu'da esnaf teşkilatı olan Ahiliğin örgütlenmesini kurduğu belirtilir.",
  kaynak:"selcuklular" },

{ t:"1231-02-23", b:"Bahâeddin Veled'in Konya'da vefatı", tur:"sosyal",
  onem:2, dunya:1, kapsam:"ic", etiket:["Bahâeddin Veled", "Mevlânâ", "ölüm"],
  yer_id:"Konya",
  d:"Mevlânâ'nın babası, döneminin önde gelen âlim ve sûfîlerinden Bahâeddin Veled, 18 Rebîülâhir 628 / 23 Şubat 1231'de bir cuma günü Konya'da vefat etti.",
  kaynak:"bahaeddin-veled" },

{ t:"1234-01-01", b:"Muhyiddin İbnü'l-Arabî'nin Malatya ve Konya'daki faaliyetleri", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["İbnü'l-Arabî", "tasavvuf", "vahdet-i vücûd"],
  yer_id:"Malatya",
  d:"Vahdet-i vücûd görüşleriyle İslâm düşüncesini derinden etkileyen Muhyiddin İbnü'l-Arabî, Sadreddin Konevî'nin babası Mecdüddin İshak ile birlikte Bağdat'tan Anadolu'ya gelip Malatya ve Konya'da ilim-irfan meclisleri düzenledi, talebe yetiştirdi ve dönemin Selçuklu sultanlarına nasihatlerde bulundu; 1240'taki ölümüne kadar Konevî'nin en önemli hocası oldu.",
  kaynak:"sadreddin-konevi" },

{ t:"1235-01-01", b:"Çankırı Atabey Ferruh Hastahanesi'nin inşası", tur:"bilim",
  onem:2, dunya:1, kapsam:"ic", etiket:["hastane", "Çankırı"],
  yer_id:"Çankırı",
  d:"Anadolu Selçuklu döneminde Çankırı'da Atabey Ferruh Hastahanesi 1235 yılında inşa edildi.",
  kaynak:"bimaristan" },

{ t:"1237-05-31", b:"I. Alâeddin Keykubad'ın ölümü", tur:"son",
  onem:4, dunya:2, kapsam:"ic", etiket:["Keykubad", "ölüm", "zehirlenme"],
  yer_id:"Kayseri",
  d:"Anadolu Selçuklu Devleti'nin altın çağını yaşatan I. Alâeddin Keykubad, 4 Şevval 634 / 31 Mayıs 1237'de bir ziyafette zehirlenerek öldü ve Konya'ya defnedildi. Ölümüyle devletin yükseliş devri sona erdi, yerine geçen oğlu II. Gıyâseddin Keyhusrev ile çöküş devri başladı.",
  kaynak:"keykubad-i" },

{ t:"1240-01-01", b:"Babaîler İsyanı", tur:"isyan",
  onem:5, dunya:2, kapsam:"ic", etiket:["Babaîler", "Baba İlyas", "Baba İshak", "Türkmenler"],
  yer_id:"",
  d:"Yoksulluk içindeki Malatya-Maraş Türkmenleri, Vefâî şeyhi Baba İlyas-ı Horasânî'nin halifesi Baba İshak öncülüğünde Kefersud (Adıyaman yakını) bölgesinde ayaklandı; Adıyaman, Gerger, Kâhta ve Malatya'yı ele geçirip Selçuklu kuvvetlerini yendiler. Sultan II. Gıyâseddin Keyhusrev korkuyla Kubâdâbâd sarayına kaçtı. İsyan sonunda Kırşehir'in Malya ovasında zırhlı Frank süvarileriyle takviyeli Selçuklu ordusu tarafından kanlı biçimde bastırıldı; Baba İshak öldürüldü.",
  kaynak:"baba-ishak", kapsam_genis:true },

{ t:"1240-06-01", b:"Âmid (Diyarbakır)'in Selçuklu topraklarına katılması", tur:"toprak-kazanc",
  onem:2, dunya:1, kapsam:"ic", etiket:["Âmid", "Diyarbakır"],
  yer_id:"Diyarbakır",
  d:"II. Gıyâseddin Keyhusrev'in ilk saltanat yıllarında Âmid (Diyarbakır) Selçuklu topraklarına katıldı (1240); bu tarihte devlet sınırları Erzurum'un doğusundan Van gölüne, Urfa-Ayıntab'dan Nur dağlarına, batıda Dalaman'dan Sakarya'ya uzanıyordu.",
  kaynak:"selcuklular" },

{ t:"1241-01-01", b:"Sadreddin Konevî'nin Konya'ya yerleşmesi", tur:"kultur",
  onem:2, dunya:1, kapsam:"ic", etiket:["Sadreddin Konevî", "tasavvuf"],
  yer_id:"Konya",
  d:"Malatya doğumlu mutasavvıf Sadreddin Konevî, hocası İbnü'l-Arabî'nin ölümünden sonra yaklaşık 1241'de Konya'ya yerleşti; burada devlet adamları ve âlimlerle yakın ilişkiler kurdu, Mevlânâ Celâleddîn-i Rûmî ile yakın dostluk geliştirdi.",
  kaynak:"sadreddin-konevi" },

{ t:"1243-06-26", b:"Kösedağ Savaşı'nda Moğollara ağır yenilgi", tur:"savas",
  onem:5, dunya:4, kapsam:"dis", etiket:["Kösedağ", "Moğollar", "yenilgi"],
  yer_id:"",
  d:"II. Gıyâseddin Keyhusrev komutasındaki Selçuklu ordusu, Sivas-Erzincan arasındaki Kösedağ'da Moğol kumandanı Baycu Noyan'ın kuvvetlerine ağır bir yenilgiye uğradı. Bozgun, Anadolu Selçuklu Devleti'nin bağımsız bir güç olarak sonunun başlangıcı sayılır; ardından gelen tâbiiyet antlaşmasıyla devlet fiilen Moğol/İlhanlı vesayetine girdi.",
  kaynak:"selcuklular", yer_kon:[40.02,37.85] },

{ t:"1243-07-15", b:"Kösedağ sonrası Moğollara tâbiiyet antlaşması", tur:"vassal",
  onem:4, dunya:4, kapsam:"dis", etiket:["Moğollar", "haraç", "İlhanlı"],
  yer_id:"Tokat",
  d:"Kösedağ bozgununun ardından vezir Müezzebüddin Ali, Moğol kumandanı Baycu Noyan ile görüşerek Selçuklu Devleti'nin Moğollara tâbi olmasını ve yıllık 360.000 dirhem, 10.000 koyun, 1000 sığır-deve haraç ödemeyi kabul etti.",
  kaynak:"keyhusrev-ii" },

{ t:"1244-01-01", b:"Mevlânâ'nın Şems-i Tebrîzî ile karşılaşması", tur:"kultur",
  onem:4, dunya:1, kapsam:"ic", etiket:["Mevlânâ", "Şems-i Tebrîzî", "tasavvuf"],
  yer_id:"Konya",
  d:"1244 yılında Konya'da Şems-i Tebrîzî ile karşılaşan Mevlânâ Celâleddîn-i Rûmî'nin coşkulu tasavvuf anlayışı bu buluşmayla şekillendi; bu dönem Mevlevîliğin fikrî temellerinin atıldığı süreç olarak kabul edilir.",
  kaynak:"celaleddin-i-rumi" },

{ t:"1246-01-01", b:"II. Gıyâseddin Keyhusrev'in ölümü, II. İzzeddin Keykâvus'un tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["veraset", "Keykâvus"],
  yer_id:"Alanya",
  d:"II. Gıyâseddin Keyhusrev 1246'da yaklaşık yirmi beş yaşında Alâiye'de öldü. Devlet adamları oğlu II. İzzeddin Keykâvus'u Akşehir'in Altuntaş köyünde sultan ilân etti (643/1246).",
  kaynak:"keyhusrev-ii" },

{ t:"1249-01-01", b:"Üç kardeşin müşterek saltanatının başlaması", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["müşterek saltanat", "Celâleddin Karatay"],
  yer_id:"Konya",
  d:"Emîr Celâleddin Karatay, çıkan taht krizini çözmek için II. İzzeddin Keykâvus, IV. Rükneddin Kılıcarslan ve II. Alâeddin Keykubad'ı birlikte sultan ilân etti; üçü adına hutbe okunup para bastırıldı. Böylece Anadolu Selçuklu tarihinde ilk müşterek saltanat devri başladı (1249-1254).",
  kaynak:"keykavus-ii" },

{ t:"1251-01-01", b:"Karatay Medresesi'nin inşası", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["Karatay Medresesi", "Konya", "mimari"],
  yer_id:"Konya",
  d:"Emîr Celâleddin Karatay, Konya'da 649 (1251) yılında adını taşıyan medreseyi yaptırdı; merkezi kubbeli avlusu ve zengin çini dekorasyonuyla Selçuklu medrese mimarisinin başyapıtlarından biridir.",
  kaynak:"karatay-medresesi" },

{ t:"1254-01-01", b:"IV. Kılıcarslan'ın Ahmedhisarı'nda yenilgisi", tur:"savas",
  onem:2, dunya:1, kapsam:"ic", etiket:["kardeş kavgası", "Ahmedhisarı"],
  yer_id:"Kayseri",
  d:"Celâleddin Karatay ve II. Keykubad'ın ölümünden sonra anlaşmazlığa düşen II. İzzeddin Keykâvus ile IV. Kılıcarslan, Kayseri yakınındaki Ahmedhisarı'nda savaştı; Kılıcarslan yenilerek Kayseri'de müstakil sultanlığını kaybetti (652/1254).",
  kaynak:"keykavus-ii" },

{ t:"1257-05-01", b:"II. Keykâvus'un yeniden tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["taht", "Baycu Noyan"],
  yer_id:"Konya",
  d:"Moğol kumandanı Baycu'nun Anadolu'dan ayrılmasından sonra II. İzzeddin Keykâvus, 14 Rebîülâhir 655 / 1 Mayıs 1257'de Konya'da tekrar tahta oturtuldu.",
  kaynak:"selcuklular" },

{ t:"1259-01-01", b:"Ülkenin Mengü Han kararıyla ikiye bölünmesi", tur:"bolunme",
  onem:4, dunya:2, kapsam:"dis", etiket:["Moğollar", "Mengü Han", "bölünme"],
  yer_id:"Konya",
  d:"Büyük Moğol Kağanı Mengü Han'ın yarlığıyla Anadolu Selçuklu ülkesi II. İzzeddin Keykâvus ile IV. Kılıcarslan arasında ikiye bölündü (657/1259); Kızılırmak'ın doğusu Kılıcarslan'a bırakıldı.",
  kaynak:"selcuklular" },

{ t:"1262-01-01", b:"II. Keykâvus'un Bizans'a sığınması ve Dobruca'ya Türkmen yerleşimi", tur:"vassal",
  onem:3, dunya:3, kapsam:"dis", etiket:["Bizans", "Dobruca", "Sarı Saltuk", "göç"],
  yer_id:"İstanbul",
  d:"Moğol hâkimiyetini kabul etmek istemeyen II. İzzeddin Keykâvus, askerleri ve kendisine bağlı Türkmenlerle birlikte İstanbul'a gidip Bizans İmparatoru VIII. Mikhail Palaiologos'a sığındı (660/1262). Beraberindeki Türkmenler -aralarında Sarı Saltuk da vardı- Dobruca'ya yerleştirildi; bugün Moldova'da yaşayan Gagauzlar bu Türkmenlerin torunlarıdır.",
  kaynak:"selcuklular" },

{ t:"1264-01-01", b:"İnce Minareli Medrese (Sahip Ata Dârülhadisi)'nin inşası", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["İnce Minareli Medrese", "Konya", "Sahip Ata"],
  yer_id:"Konya",
  d:"Selçuklu veziri Sâhib Ata Fahreddin Ali tarafından mimar Kölük b. Abdullah'a Konya'da yaptırılan dârülhadis (hadis medresesi), bitişiğindeki cami ve ince minaresiyle tanınır; yapının kesin inşa tarihi belirsiz olmakla birlikte 1265 tarihli vakfiye kaydından önceye aittir.",
  kaynak:"ince-minareli-medrese" },

{ t:"1266-01-01", b:"IV. Kılıcarslan'ın Moğollar tarafından öldürtülmesi", tur:"son",
  onem:3, dunya:1, kapsam:"ic", etiket:["Muînüddin Pervâne", "suikast"],
  yer_id:"Konya",
  d:"Vezir Muînüddin Pervâne, Sinop'u mülk olarak almaya zorladığı IV. Kılıcarslan'ı Moğollara öldürttü (664/1266) ve yerine onun çocuk yaştaki oğlu III. Gıyâseddin Keyhusrev'i geçirdi; devlete rakipsiz olarak Pervâne hâkim oldu.",
  kaynak:"selcuklular" },

{ t:"1272-01-01", b:"Kastamonu Ali b. Pervâne Hastahanesi'nin inşası", tur:"bilim",
  onem:2, dunya:1, kapsam:"ic", etiket:["hastane", "Kastamonu"],
  yer_id:"Kastamonu",
  d:"Kastamonu'da Ali b. Pervâne Hastahanesi 1272 yılında inşa edildi.",
  kaynak:"bimaristan" },

{ t:"1273-12-17", b:"Mevlânâ Celâleddîn-i Rûmî'nin vefatı", tur:"kultur",
  onem:5, dunya:2, kapsam:"ic", etiket:["Mevlânâ", "tasavvuf", "Şeb-i Arus"],
  yer_id:"Konya",
  d:"Konya'da müderrislik yaparken Şems-i Tebrîzî'nin etkisiyle coşkulu bir tasavvuf anlayışı geliştiren ve Mesnevî'siyle bütün halkı derinden etkileyen Mevlânâ Celâleddîn-i Rûmî 17 Aralık 1273'te Konya'da vefat etti.",
  kaynak:"celaleddin-i-rumi" },

{ t:"1274-01-01", b:"Sadreddin Konevî'nin vefatı", tur:"kultur",
  onem:2, dunya:1, kapsam:"ic", etiket:["Sadreddin Konevî", "ölüm"],
  yer_id:"Konya",
  d:"İbnü'l-Arabî'nin fikirlerinin Anadolu'da yayılmasında başrol oynayan Sadreddin Konevî 673 (1274) yılında Konya'da vefat etti.",
  kaynak:"sadreddin-konevi" },

{ t:"1275-01-01", b:"Tokat Gökmedrese (Pervâne Darüşşifası)'nin inşası", tur:"bilim",
  onem:3, dunya:1, kapsam:"ic", etiket:["hastane", "Tokat", "Pervâne"],
  yer_id:"Tokat",
  d:"Vezir Muînüddin Süleyman Pervâne, Tokat'ta Gökmedrese adıyla da bilinen darüşşifasını 1275 yılında yaptırdı.",
  kaynak:"bimaristan" },

{ t:"1277-04-01", b:"Elbistan Savaşı: Baybars'ın Moğolları yenmesi", tur:"savas",
  onem:4, dunya:4, kapsam:"dis", etiket:["Memlükler", "Baybars", "Moğollar"],
  yer_id:"Elbistan",
  d:"Muînüddin Pervâne'nin çağrısı üzerine Anadolu'ya gelen Memlük Sultanı Baybars, Elbistan ovasında Moğol ordusunu ağır bir yenilgiye uğrattı (Zilkade 675 / Nisan 1277) ve Kayseri'de büyük sevgi gösterileriyle karşılandı; ancak Pervâne'nin kararsız tutumu yüzünden Anadolu'yu Moğol tahakkümünden kurtarma girişimi sonuçsuz kaldı.",
  kaynak:"selcuklular" },

{ t:"1277-05-14", b:"Cimri hadisesi: Karamanoğlu'nun Konya'yı ele geçirmesi", tur:"isyan",
  onem:4, dunya:1, kapsam:"ic", etiket:["Karamanoğulları", "Cimri", "Alâeddin Siyavuş"],
  yer_id:"Konya",
  d:"Moğollara karşı mücadele eden Karamanoğlu Mehmed Bey, Eşrefoğulları ve Menteşeoğulları ile ittifak yaparak II. Keykâvus'un oğlu olduğunu iddia eden Alâeddin Siyavuş'u (Cimri) Selçuklu sultanı ilân etti; 9 Zilhicce 675'te (14 Mayıs 1277) Konya'yı ele geçirip ertesi gün Cimri'yi tahta oturttu.",
  kaynak:"selcuklular" },

{ t:"1277-06-20", b:"Karamanoğlu Mehmed Bey'in öldürülmesi", tur:"son",
  onem:2, dunya:1, kapsam:"ic", etiket:["Karamanoğulları", "Mehmed Bey"],
  yer_id:"Konya",
  d:"Moğol-Selçuklu kuvvetleri karşısında tutunamayan Karamanoğlu Mehmed Bey 17 Muharrem 676'da (20 Haziran 1277) öldürüldü.",
  kaynak:"selcuklular" },

{ t:"1279-05-30", b:"Cimri (Alâeddin Siyavuş)'nin öldürülmesi", tur:"son",
  onem:2, dunya:1, kapsam:"ic", etiket:["Cimri", "isyan sonu"],
  yer_id:"Konya",
  d:"Mehmed Bey'den iki yıl sonra Alâeddin Siyavuş (Cimri) 17 Muharrem 678'de (30 Mayıs 1279) öldürüldü; Cimri hadisesi böylece sona erdi.",
  kaynak:"selcuklular" },

{ t:"1284-01-01", b:"II. Mesud'un Konya'da tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["II. Mesud", "İlhanlı vesayeti"],
  yer_id:"Konya",
  d:"İlhanlı Hükümdarı Argun Han'ın desteğiyle sultan ilân edilen II. Mesud, önce Kayseri'de ardından Konya'da tahta çıktı (683/1284); halk için bir ümit ışığı olsa da 'gölge hükümdar' olmaktan öteye gidemedi, ülke Moğol vali ve kumandanlarının tahakkümü altında kaldı.",
  kaynak:"selcuklular" },

{ t:"1285-01-01", b:"Mevlevîlik tarikatının Sultan Veled tarafından teşkilatlanması", tur:"kultur",
  onem:3, dunya:2, kapsam:"ic", etiket:["Mevlevîlik", "Sultan Veled", "tarikat"],
  yer_id:"Konya",
  d:"Mevlânâ'nın vefatının ardından oğlu Sultan Veled, babasının çevresinde oluşan dervişleri kurumsal bir tarikat hâline getirerek Mevlevîliği teşkilatlandırdı.",
  kaynak:"celaleddin-i-rumi" },

{ t:"1298-01-01", b:"III. Alâeddin Keykubad'ın tahta çıkışı ve Osman Gazi'ye beylik verilmesi", tur:"idari",
  onem:3, dunya:2, kapsam:"dis", etiket:["Osman Gazi", "beylik", "III. Keykubad"],
  yer_id:"Konya",
  d:"II. Mesud'un Gāzân Han tarafından hükümdarlıktan uzaklaştırılmasının ardından kardeşinin oğlu III. Alâeddin Keykubad tahta çıkarıldı (697/1298). Bir rivayete göre Karacahisar'ın, diğer bir rivayete göre Bilecik-Yarhisar-İnegöl'ün fethi üzerine Osman Gazi'ye sancak, davul, kılıç, at ve hil'at göndererek beylik tevcih ettiği kaydedilir.",
  kaynak:"selcuklular" },

{ t:"1302-01-01", b:"II. Mesud'un ikinci kez tahta çıkışı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["II. Mesud", "ikinci saltanat"],
  yer_id:"Konya",
  d:"Halktan zorla para toplayan III. Alâeddin Keykubad tahttan uzaklaştırılıp II. Mesud 702 (1302) yılında ikinci defa tahta çıkarıldı; bu dönemi de başarısız geçen II. Mesud 708'de (1308) öldü.",
  kaynak:"selcuklular" },

{ t:"1308-01-01", b:"Son Selçuklu sultanının ölümüyle devlet fiilen sona erdi", tur:"son",
  onem:5, dunya:3, kapsam:"ic", etiket:["son", "II. Mesud"],
  yer_id:"Konya",
  d:"İkinci kez tahta çıkan II. Mesud'un 708 (1308) yılında ölümüyle Anadolu Selçuklu Devleti'nin sultanlar zinciri sona erdi; devlet fiilen dağılmış, toprakları çoktan beri Moğol valilerinin ve Anadolu beyliklerinin eline geçmişti. Selçuklu'nun bıraktığı siyasi miras üzerine kurulan beylikler arasından Osmanlı, birliği yeniden sağlayacaktı.",
  kaynak:"selcuklular" },


// ═══════════════════ ARTUKOĞULLARI (1102-1409) ═══════════════════

{ t:"1063-01-01", b:"Artuk Bey Sultan Alparslan'ın hizmetine girdi", tur:"kurulus",
  onem:3, dunya:1, kapsam:"dis", etiket:["Artuk Bey", "Alparslan", "ön tarih"],
  yer_id:"", kapsam_genis:true,
  d:"Döğer boyundan bir beyin oğlu olan Artuk Bey 1063'te Büyük Selçuklu Sultanı Alparslan'ın hizmetine girdi. Malazgirt zaferinin ardından Anadolu'ya geçti, sonra Suriye Selçuklu meliki Tutuş'un hizmetinde Kudüs bölgesine yerleşti. Oğulları Sökmen ve İlgazi'nin kuracağı Hasankeyf ve Mardin kolları onun adını taşıyacaktı.",
  kaynak:"artuklular" },

{ t:"1102-01-01", b:"Sökmen Bey Hasankeyf'i ele geçirip Artuklu kolunu kurdu", tur:"kurulus",
  onem:5, dunya:3, kapsam:"ic", etiket:["kurulus", "Hasankeyf", "Sökmen"],
  yer_id:"",
  d:"Musul Emîri Kürboğa'nın ölümünden sonra Hasankeyf naibi Türkmen Mûsâ, Artuk Bey'in oğlu Sökmen'den yardım istedi. Sökmen rakibi Çökürmüş'ü yenip Hasankeyf'i ele geçirdi ve burada Artuklular'ın Hasankeyf (Hısnıkeyfâ) kolunu kurdu. Bu kol 1232'ye kadar bölgede hüküm sürecekti.",
  kaynak:"artuklular", yer_kon:[37.7128,41.4067] },

{ t:"1106-01-01", b:"Necmeddin İlgazi Mardin'i ele geçirip Mardin kolunu kurdu", tur:"kurulus",
  onem:5, dunya:3, kapsam:"ic", etiket:["kurulus", "Mardin", "İlgazi"],
  yer_id:"Mardin",
  d:"Artuk Bey'in oğlu Necmeddin İlgazi, maiyetindeki Türkmenlerle Mardin'e gidip idareyi ele aldı ve 500 (1106) yılında Selçuklu Devleti'ne tâbi olarak Artukluların Mardin kolunu kurdu. Bu kol üç asra yakın sürecek ve Artuklu hânedanının en uzun ömürlü kolu olacaktı — 1409'a kadar ayakta kalacaktı.",
  kaynak:"artuklular" },

{ t:"1112-01-01", b:"Belek b. Behrâm Harput'a hâkim oldu, Harput kolu doğdu", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["Harput", "Belek", "Çubukoğulları"],
  yer_id:"Harput (Elazığ)",
  d:"1085 civarında Çubuk Bey tarafından kurulan Çubukoğulları Beyliği'nin merkezi olan Harput, Artuklu beyi Belek b. Behrâm tarafından ele geçirilerek bu küçük beyliğe son verildi. Böylece Harput ve çevresindeki Palu, Çemişkezek toprakları Artuklu hâkimiyetine girdi ve Harput kolunun temeli atıldı.",
  kaynak:"harput" },

{ t:"1117-05-01", b:"İlgazi Halep'in idaresini ele aldı", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["Halep", "İlgazi", "Selçuklu"],
  yer_id:"Halep",
  d:"Haçlı baskısı altında bunalan Halep ileri gelenlerinin daveti üzerine şehre giden Necmeddin İlgazi, Muharrem 511 (Mayıs 1117) tarihinde idareyi ele aldı. Bu adımla Halep'teki Selçuklu meliklik yönetimi fiilen sona erdi ve Mardin Artukluları bölgenin en güçlü Müslüman gücü hâline geldi.",
  kaynak:"ilgazi-necmeddin" },

{ t:"1119-06-28", b:"Tel İfrîn (Sarmada) Savaşı'nda Haçlı ordusu imha edildi", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas", "Haclilar", "Sarmada", "Roger"],
  yer_id:"Halep",
  d:"Necmeddin İlgazi, Antakya Prinkepsi Roger de Salerno komutasındaki Haçlı ordusunu Tel İfrîn vadisinde 17 Rebîülevvel 513 (28 Haziran 1119) tarihinde ağır bir yenilgiye uğrattı; Haçlı tarihçileri bu bozgunu 'Ager Sanguinis' (Kan Tarlası) olarak andı. Zafer, Mardin Artuklularının bölgedeki Haçlı varlığına karşı en büyük başarılarından biri oldu.",
  kaynak:"ilgazi-necmeddin" },

{ t:"1122-11-19", b:"Necmeddin İlgazi vefat etti, Timurtaş tahta çıktı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["hukumdar", "İlgazi", "Timurtaş"],
  yer_id:"Mardin",
  d:"Mardin kolunun kurucusu Necmeddin İlgazi 17 Ramazan 516 (19 Kasım 1122) tarihinde yolculuk sırasında vefat etti. Yerine oğlu Timurtaş geçti; Timurtaş döneminde Halep üzerindeki Artuklu hâkimiyeti bir süre daha sürdü.",
  kaynak:"ilgazi-necmeddin" },

{ t:"1144-01-01", b:"Fahreddin Kara Arslan Hasankeyf tahtına çıktı", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"ic", etiket:["hukumdar", "Hasankeyf", "Kara Arslan"],
  yer_id:"",
  d:"Dâvud'un ölümü üzerine Hasankeyf Artuklu tahtına Fahreddin Kara Arslan geçti. Uzun ve imar faaliyetleriyle dolu saltanatı boyunca (1144-1167) Dicle üzerindeki ünlü köprüyü yaptırdı ve Harput bölgesini beyliğin topraklarına kattı.",
  kaynak:"hasankeyf", yer_kon:[37.7128,41.4067] },

{ t:"1146-01-01", b:"Harput Ulu Camii Fahreddin Kara Arslan tarafından yaptırıldı", tur:"mimari",
  onem:3, dunya:2, kapsam:"ic", etiket:["mimari", "cami", "Harput"],
  yer_id:"Harput (Elazığ)",
  d:"Harput Ulucamii, kitâbesine göre 541 (1146-47) yılında Fahreddin Kara Arslan tarafından yaptırıldı. Cami, Artuklu döneminin Harput'ta bugüne ulaşan en önemli anıtsal eserlerinden biridir.",
  kaynak:"harput" },

{ t:"1147-01-01", b:"Malabadi (Silvan) Köprüsü Timurtaş tarafından yaptırıldı", tur:"mimari",
  onem:3, dunya:2, kapsam:"ic", etiket:["mimari", "kopru", "Silvan", "Timurtaş"],
  yer_id:"",
  d:"Mardin Artuklu hükümdarı Timurtaş b. İlgazi, Batman Suyu üzerinde inşa ettirdiği ve kitâbesine göre 542 (1147-48) yılında tamamlanan Malabadi Köprüsü'nü yaptırdı; İbnü'l-Ezrak inşaatın 541'de (1146) başladığını yazar. Tek gözlü, dönemine göre olağanüstü büyük kemerli köprü, güneş-aslan kabartmaları ve insan figürleriyle Artuklu taş işçiliğinin en özgün örneklerinden biridir.",
  kaynak:"bulunamadı — TDV'de Malabadi köprüsü için müstakil madde bulunamadı; dayanak: T.C. Kültür ve Turizm Bakanlığı Kültür Portalı ve İnşaat Mühendisleri Odası Su Yapıları Sempozyumu bildirisi", yer_kon:[38.1394,41.0125] },

{ t:"1147-06-01", b:"Musul Atabegi Seyfeddin Gazi Mardin'e saldırdı", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas", "Musul", "Seyfeddin Gazi"],
  yer_id:"Mardin",
  d:"Musul Atabegi Seyfeddin Gazi, Mardin Artukluları üzerine yıkıcı bir sefer düzenledi ve şehri tahrip etti. Bu saldırı, Artukluların 12. yüzyıl ortasında Musul Atabegliği ile girdiği gerilimli komşuluk ilişkisinin bir örneğidir.",
  kaynak:"mardin" },

{ t:"1150-01-01", b:"Kara Arslan Harput ve Gerger'i Artuklu topraklarına kattı", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"ic", etiket:["toprak-kazanc", "Harput", "Gerger"],
  yer_id:"Harput (Elazığ)",
  d:"Fahreddin Kara Arslan, saltanatı sırasında Harput ve Gerger kalelerini ele geçirerek Hasankeyf koluna bağladı. Böylece Hasankeyf ve Harput kolları bir süre için aynı hükümdarın idaresinde birleşti.",
  kaynak:"artuklular" },

{ t:"1152-01-01", b:"Necmeddin Alpı Mardin tahtına çıktı", tur:"hukumdar",
  onem:1, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "Alpı"],
  yer_id:"Mardin",
  d:"Timurtaş'ın ardından Mardin Artuklu tahtına Necmeddin Alpı geçti. Saltanatı 1176'ya kadar sürdü.",
  kaynak:"artuklular" },

{ t:"1155-01-01", b:"Hasankeyf Dicle Köprüsü Kara Arslan tarafından yaptırıldı", tur:"mimari",
  onem:4, dunya:3, kapsam:"ic", etiket:["mimari", "kopru", "Hasankeyf", "Dicle"],
  yer_id:"",
  d:"Fahreddin Kara Arslan, göçebe ve tüccar geçişini kolaylaştırmak amacıyla Dicle üzerinde ünlü Hasankeyf Köprüsü'nü yaptırdı; kesin yapım yılı belli olmamakla birlikte hükümdarlığı yıllarına (1144-1167) tarihlenir. Devasa ayakları bugün de ayakta olan köprü, Artuklu mühendisliğinin en tanınmış simgelerinden biri hâline geldi.",
  kaynak:"hasankeyf", yer_kon:[37.7128,41.4067] },

{ t:"1167-01-01", b:"Nûreddin Muhammed Hasankeyf tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Hasankeyf", "Nureddin Muhammed"],
  yer_id:"",
  d:"Kara Arslan'ın ölümü üzerine Hasankeyf Artuklu tahtına oğlu Nûreddin Muhammed geçti. Döneminde beylik, yükselen Eyyûbî gücüyle giderek yakınlaşan bir ilişki içine girdi.",
  kaynak:"hasankeyf", yer_kon:[37.7128,41.4067] },

{ t:"1176-01-01", b:"II. Kutbüddin İlgazi Mardin tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "İlgazi II"],
  yer_id:"Mardin",
  d:"Necmeddin Alpı'nın ölümü üzerine Mardin Artuklu tahtına II. Kutbüddin İlgazi geçti. Saltanatı 1184'e kadar sürdü.",
  kaynak:"artuklular" },

{ t:"1177-01-01", b:"Mardin Ulu Camii'nin minaresi bu döneme tarihlenir", tur:"mimari",
  onem:4, dunya:2, kapsam:"ic", etiket:["mimari", "cami", "Mardin"],
  yer_id:"Mardin",
  d:"On altı ayrı kitâbe taşıyan Mardin Ulu Camii'nin tam inşa tarihi kesin olarak aydınlatılamamıştır, ancak minaresinin alt kısmındaki kitâbe 572 (1176-77) tarihini vermektedir. Cami, Artuklu döneminden günümüze ulaşan en büyük ve en görkemli ibadet yapısı olarak Mardin'in simgelerinden biridir.",
  kaynak:"ulucami" },

{ t:"1183-01-01", b:"Âmid, Selâhaddin tarafından fethedilip Hasankeyf koluna verildi", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc", "Amid", "Selahaddin", "Eyyubi"],
  yer_id:"Diyarbakır",
  d:"Selâhaddin Eyyûbî, Âmid'i (Diyarbakır) kuşatıp fethettikten sonra şehri Hasankeyf Artuklu hükümdarı Nûreddin Muhammed'e devretti. Bu devirle birlikte Hasankeyf kolunun merkezi fiilen Âmid'e kaydı ve beylik Eyyûbîlerle sıkı bir bağlılık ilişkisine girdi.",
  kaynak:"artuklular" },

{ t:"1184-01-01", b:"II. Kutbüddin İlgazi öldü, Hüsâmeddin Yavlak Arslan tahta çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "Yavlak Arslan"],
  yer_id:"Mardin",
  d:"II. Kutbüddin İlgazi'nin ölümü üzerine Mardin Artuklu tahtına Hüsâmeddin Yavlak Arslan geçti. Onun döneminde beylik, güçlenen Eyyûbî baskısına karşı bağımsızlığını korumaya çalıştı.",
  kaynak:"artuklular" },

{ t:"1185-01-01", b:"Kutbüddin II. Sökmen Hasankeyf tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Hasankeyf", "Sökmen II"],
  yer_id:"",
  d:"Nûreddin Muhammed'in ölümüyle Hasankeyf-Âmid Artuklu tahtına Kutbüddin II. Sökmen geçti. Onun sarayında, genç mühendis El-Cezerî mesleğinin ilk yıllarını geçirmeye başladı.",
  kaynak:"hasankeyf", yer_kon:[37.7128,41.4067] },

{ t:"1185-06-01", b:"İmâdüddin Ebû Bekir Harput'ta bağımsız beylik kurdu", tur:"bolunme",
  onem:3, dunya:2, kapsam:"ic", etiket:["bolunme", "Harput", "Ebu Bekir"],
  yer_id:"Harput (Elazığ)",
  d:"Hasankeyf hükümdarı Dâvud'un kardeşi İmâdüddin Ebû Bekir, Harput'ta Hasankeyf kolundan ayrı, bağımsız bir Artuklu hâkimiyeti kurdu. Böylece Harput kolu ikinci kez ayrı bir yönetim olarak ortaya çıktı ve 1234'teki Selçuklu fethine kadar sürdü.",
  kaynak:"harput" },

{ t:"1199-01-01", b:"Eyyûbîler Mardin kuşatmasından çekildi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas", "Mardin", "Eyyubi"],
  yer_id:"Mardin",
  d:"Eyyûbî kuvvetleri Mardin'i kuşatmalarına rağmen şehri ele geçiremeyip kuşatmadan çekildi. Mardin Artukluları böylece bağımsızlıklarını bir süre daha koruyabildi.",
  kaynak:"artuklular" },

{ t:"1200-01-01", b:"Nâsırüddin Mahmud Hasankeyf-Âmid tahtına çıktı", tur:"hukumdar",
  onem:4, dunya:3, kapsam:"ic", etiket:["hukumdar", "Amid", "Nasireddin Mahmud"],
  yer_id:"Diyarbakır",
  d:"Kutbüddin II. Sökmen'in ardından Hasankeyf-Âmid Artuklu tahtına Nâsırüddin Melik Sâlih Mahmud geçti. 1222'ye kadar sürecek saltanatı, imar faaliyetleri ve El-Cezerî'nin baş mühendis olarak sarayında çalıştığı dönemle tanınır.",
  kaynak:"bulunamadı — TDV'de Nasireddin Mahmud için müstakil madde yok; dayanak: İ.Ü. Art-Sanat Dergisi hakemli makalesi (Diyarbakır Artuklu Sultanı Nâsırüddin Melik Sâlih Mahmud, 1200-1222)" },

{ t:"1202-01-01", b:"El-Melikü'l-Eşref'in kuşatmasıyla Mardin Eyyûbî hâkimiyetini tanıdı", tur:"vassal",
  onem:4, dunya:2, kapsam:"dis", etiket:["vassal", "Mardin", "Eyyubi"],
  yer_id:"Mardin",
  d:"Eyyûbî hükümdarı el-Melikü'l-Eşref Mardin'i kuşatınca Artuklular direnemeyip Eyyûbî üstünlüğünü kabul etti. Bu tarihten itibaren Mardin Artukluları fiilen Eyyûbî tâbiliğinde bir beylik konumuna geriledi.",
  kaynak:"artuklular" },

{ t:"1204-01-01", b:"Kızıltepe (Dunaysır) Ulu Camii yaptırıldı", tur:"mimari",
  onem:3, dunya:2, kapsam:"ic", etiket:["mimari", "cami", "Kiziltepe", "Dunaysir"],
  yer_id:"",
  d:"Mardin Artukluları, 1204-1205 yıllarında Dunaysır'da (bugünkü Kızıltepe) anıtsal Ulu Camii'yi inşa ettirdi. Yapı, döneminin taş işçiliği ve süsleme sanatının en zengin örneklerinden biri olarak kabul edilir.",
  kaynak:"artuklular", yer_kon:[37.1928,40.5928] },

{ t:"1205-01-01", b:"El-Cezerî otomatlar kitabını tamamladı", tur:"bilim",
  onem:5, dunya:3, kapsam:"ic", etiket:["bilim", "El-Cezeri", "mekanik", "otomat"],
  yer_id:"Diyarbakır",
  d:"1181-1206 yılları arasında Âmid'de (Diyarbakır) Artuklu sarayının himayesinde çalışan mühendis İsmâil b. Rezzâz el-Cezerî, Emîr Nâsırüddin Mahmud'un isteği üzerine kaleme aldığı Kitâb fî Ma'rifeti'l-Hiyeli'l-Hendesiyye adlı eserini 1205'te tamamladı. Altı bölümden oluşan kitap su saatleri, otomatik müzik aletleri, su pompaları ve çeşitli mekanik aletleri konu alır; el-Cezerî kendisini mucit değil, öncekilerin aletlerini mükemmelleştiren bir mühendis olarak tanımlar.",
  kaynak:"cezeri-ismail-b-rezzaz" },

{ t:"1208-01-01", b:"Yedi Kardeş Burcu inşa edildi", tur:"mimari",
  onem:3, dunya:2, kapsam:"ic", etiket:["mimari", "burc", "Diyarbakir", "Nasireddin Mahmud"],
  yer_id:"Diyarbakır",
  d:"Nâsırüddin Mahmud döneminde (1200-1222) Âmid surlarının güçlendirilmesi kapsamında Yedi Kardeş Burcu 1208-1209 yıllarında inşa edildi. Aynı dönemde Devegeçidi Köprüsü de hükümdarın imar programının bir parçası olarak yapıldı.",
  kaynak:"bulunamadı — TDV'de müstakil madde yok; dayanak: İ.Ü. Art-Sanat Dergisi hakemli makalesi (Diyarbakır Artuklu Sultanı Nâsırüddin Melik Sâlih Mahmud, 1200-1222)" },

{ t:"1222-01-01", b:"Melik Mesud Hasankeyf-Âmid tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Hasankeyf", "Mesud"],
  yer_id:"",
  d:"Nâsırüddin Mahmud'un ölümü üzerine Hasankeyf-Âmid Artuklu tahtına oğlu Melik Mesud geçti. Onun saltanatı, kolun 1232'deki Eyyûbî ilhakıyla sona erecek son dönemdi.",
  kaynak:"hasankeyf", yer_id:"Diyarbakır" },

{ t:"1232-01-01", b:"El-Melikü'l-Kâmil Hasankeyf'i ilhak etti, Hasankeyf kolu sona erdi", tur:"son",
  onem:5, dunya:2, kapsam:"dis", etiket:["son", "Hasankeyf", "Eyyubi", "Kamil"],
  yer_id:"",
  d:"Eyyûbî hükümdarı el-Melikü'l-Kâmil önce Âmid'i, ardından 629 (1232) yılında Hasankeyf'i işgal ederek Artukluların Hasankeyf koluna son verdi. Şehir ve çevresi, el-Melikü'l-Kâmil'in oğlu es-Sâlih Eyyûb'un idaresine bırakıldı; böylece beyliğin en eski kolu 130 yıllık hâkimiyetinin ardından tarih sahnesinden çekildi.",
  kaynak:"hasankeyf", yer_kon:[37.7128,41.4067] },

{ t:"1234-08-01", b:"Anadolu Selçukluları Harput Kalesi'ni fethetti, Harput kolu sona erdi", tur:"toprak-kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kayip", "Harput", "Selcuklu", "son"],
  yer_id:"Harput (Elazığ)",
  d:"Anadolu Selçuklu Sultanlığı, Ağustos 1234'te kumandan Kemâleddin Kamyar'ı Harput Kalesi'ni fethetmekle görevlendirdi. Kale ele geçirilince Artukluların Harput kolu sona erdi ve bölge Selçuklu hâkimiyetine girdi.",
  kaynak:"harput" },

{ t:"1239-01-01", b:"Artuk Arslan öldü, I. Necmeddin Gazi Mardin tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "Necmeddin Gazi"],
  yer_id:"Mardin",
  d:"Mardin Artuklu hükümdarı Artuk Arslan'ın ölümü üzerine tahta I. Necmeddin Gazi geçti. Onun saltanatı, Moğol istilasının bölgeye ulaştığı döneme denk geldi.",
  kaynak:"artuklular" },

{ t:"1257-01-01", b:"Moğollar bölgeye girdi, Hülâgû Meyyâfârikīn'in fethini emretti", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas", "Mogol", "Hulagu", "vassal"],
  yer_id:"",
  d:"Moğollar 1252'den itibaren Diyarbekir-Mardin bölgesine girmeye başladı; İlhanlı hükümdarı Hülâgû, 1257'de kumandanı Yaşmut'u Meyyâfârikīn'in (Silvan) fethiyle görevlendirdi. Mardin Artukluları bu tarihten sonra fiilen Moğol/İlhanlı tâbiliğine girdi.",
  kaynak:"artuklular", yer_kon:[38.1394,41.0125] },

{ t:"1260-01-01", b:"Necmeddin Gazi öldü, Kara Arslan Mardin tahtına çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "Kara Arslan"],
  yer_id:"Mardin",
  d:"I. Necmeddin Gazi'nin ölümü üzerine Mardin Artuklu tahtına Kara Arslan geçti. Saltanatı boyunca beylik, İlhanlı tâbiliği altında sınırlı bir özerklikle varlığını sürdürdü.",
  kaynak:"artuklular" },

{ t:"1293-01-01", b:"Kara Arslan öldü, Şemseddin Dâvud ve ardından II. Necmeddin Gazi tahta çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar", "Mardin", "Davud"],
  yer_id:"Mardin",
  d:"Kara Arslan'ın ölümüyle Mardin tahtına önce Şemseddin Dâvud, kısa süre sonra 1294'te II. Necmeddin Gazi geçti. Hızlı el değiştiren bu dönem, beyliğin İlhanlı tâbiliği altındaki iç istikrarsızlığını yansıtır.",
  kaynak:"artuklular" },

{ t:"1293-06-01", b:"Deyrülzafaran Manastırı Süryani Ortodoks Patrikhanesi merkezi oldu", tur:"sosyal",
  onem:3, dunya:2, kapsam:"ic", etiket:["sosyal", "suryani", "Deyrulzafaran", "din"],
  yer_id:"Mardin",
  d:"Mardin yakınındaki Deyrülzafaran Manastırı 1293 yılından itibaren Süryani Ortodoks Patrikhanesi'nin merkezi hâline geldi ve bu konumunu 1932'ye kadar korudu. Elli iki patriğin mezarının bulunduğu manastırın bu dönemde patrikhane merkezi olması, Artuklu idaresi altında Süryani cemaatinin dinî varlığını sürdürebildiğini gösterir.",
  kaynak:"mardin" },

{ t:"1312-01-01", b:"El-Melikü's-Sâlih Mardin tahtına çıktı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["hukumdar", "Mardin", "Salih"],
  yer_id:"Mardin",
  d:"II. Necmeddin Gazi'nin ardından Mardin Artuklu tahtına el-Melikü's-Sâlih geçti ve 1364'e kadar elli yılı aşan uzun bir saltanat sürdü. Onun döneminde beylik, İlhanlı Devleti'nin 1336'da yıkılmasının ardından bölgesel güç dengelerinin yeniden şekillendiği bir sürece girdi.",
  kaynak:"artuklular" },

{ t:"1315-01-01", b:"Memlük valisi Mardin'i yağmalattı", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas", "Memluk", "yagma"],
  yer_id:"Mardin",
  d:"Memlük Sultanlığı'nın valisi Şehâbeddin Karatay, Mardin'e bir sefer düzenleyerek şehri yağmalattı. Bu olay, Artukluların artık bölgedeki büyük güçlerin (Memlük, İlhanlı) baskısı altında kırılgan bir tâbi beylik hâline geldiğini gösterir.",
  kaynak:"artuklular" },

{ t:"1350-01-01", b:"Dicle üzerindeki köprüler ticaret yolunu güvence altına aldı", tur:"ekonomi",
  onem:2, dunya:2, kapsam:"ic", etiket:["ekonomi", "ticaret", "Dicle", "kopru"],
  yer_id:"", kapsam_genis:true,
  d:"Hasankeyf ve Malabadi köprüleri gibi Artuklu döneminde inşa edilen geçitler, Dicle ve kollarını aşan kervan yollarını güvenli hâle getirerek Doğu Anadolu-Kuzey Mezopotamya arasındaki İpek Yolu koluna hizmet etti. Bu altyapı, Diyarbakır-Mardin-Hasankeyf üçgeninin bölgesel ticaret merkezi olarak üç asır boyunca önemini korumasını sağladı.",
  kaynak:"bulunamadı — TDV'de müstakil ekonomik değerlendirme yok; genel çıkarım, dayanak: artuklular ve hasankeyf maddelerindeki mimari/ticarî bağlam" },

{ t:"1385-01-01", b:"Sultan Îsâ Medresesi tamamlandı", tur:"mimari",
  onem:3, dunya:2, kapsam:"ic", etiket:["mimari", "medrese", "Mardin"],
  yer_id:"Mardin",
  d:"Mecdüddin Îsâ döneminde inşasına başlanan Sultan Îsâ Medresesi 787 (1385) yılında tamamlandı. Yapı, Artuklu döneminin son yüzyılındaki mimari faaliyetin en önemli örneklerinden biridir.",
  kaynak:"mardin" },

{ t:"1394-01-01", b:"Timur Mardin'i ilk kez kuşattı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas", "Timur", "kusatma"],
  yer_id:"Mardin",
  d:"Timur'un orduları 1394'te Mardin'i kuşattı; kuşatma sırasında şehir ve Mardin Ulu Camii zarar gördü. Mecdüddin Îsâ, Timur'un gücü karşısında bağımsızlığını ancak tâbilik pahasına koruyabildi.",
  kaynak:"mardin" },

{ t:"1395-06-01", b:"Memlük Sultanı Berkuk, Mecdüddin Îsâ'ya hil'at gönderdi", tur:"vassal",
  onem:2, dunya:1, kapsam:"dis", etiket:["vassal", "Memluk", "Berkuk"],
  yer_id:"Mardin",
  d:"Memlük Sultanı Berkuk, Timur tehdidine karşı Mardin Artuklu hükümdarı Mecdüddin Îsâ'ya hil'at (onur kaftanı) göndererek onunla ittifak ilişkisini pekiştirdi. Bu jest, Artukluların Timur'a karşı Memlük himayesi arayışının bir göstergesidir.",
  kaynak:"artuklular" },

{ t:"1400-06-01", b:"Timur Mardin'i ikinci kez kuşattı", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas", "Timur", "kusatma"],
  yer_id:"Mardin",
  d:"1400-1401 yıllarında Timur, Mardin'i ikinci kez kuşattı ve şehrin tahkimatını ciddi biçimde tahrip etti. Mecdüddin Îsâ bu kuşatmadan da güçlükle sıyrılabildi.",
  kaynak:"mardin" },

{ t:"1403-01-01", b:"Timur Mardin'i üçüncü kez kuşattı, Îsâ affedildi", tur:"vassal",
  onem:3, dunya:2, kapsam:"dis", etiket:["vassal", "Timur", "Isa"],
  yer_id:"Mardin",
  d:"Timur 1403'te Mardin'i tekrar kuşattı; Mecdüddin Îsâ özür dileyip boyun eğince Timur şehri bağışladı. Böylece Mardin Artukluları, Timur'un tâbiliğinde varlığını bir süre daha sürdürebildi.",
  kaynak:"artuklular" },

{ t:"1406-01-01", b:"Mecdüddin Îsâ, Akkoyunlu Kara Osman'a karşı savaşta öldürüldü", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"dis", etiket:["hukumdar", "Akkoyunlu", "Isa", "olum"],
  yer_id:"Mardin",
  d:"Mecdüddin Îsâ, yükselen Akkoyunlu beyi Kara Osman'a karşı giriştiği muharebede 809'da (1406) öldürüldü. Yerine geçen Şehâbeddin Ahmed, beyliğin son üç yılına başkanlık edecekti.",
  kaynak:"artuklular" },

{ t:"1409-01-01", b:"Mardin Karakoyunlu Kara Yûsuf'a teslim edildi, Artuklu Beyliği sona erdi", tur:"son",
  onem:5, dunya:2, kapsam:"dis", etiket:["son", "Mardin", "Karakoyunlu", "Kara Yusuf"],
  yer_id:"Mardin",
  d:"Son Mardin Artuklu hükümdarı Şehâbeddin Ahmed, artan Karakoyunlu baskısı karşısında direnemeyip Mardin'i Kara Yûsuf'a teslim etti. Böylece 1102'de Sökmen Bey'in Hasankeyf'i almasıyla başlayan Artuklu hâkimiyeti, üç yüzyıllık serüveninin ardından tarihe karıştı.",
  kaynak:"artuklular" },


// ═══════════════════ DULKADİROĞULLARI (1337-1522) ═══════════════════

{ t:"1337-01-01", b:"Zeyneddin Karaca Bey tarafından kuruldu", tur:"kurulus",
  onem:5, dunya:1, kapsam:"ic", etiket:["kurulus", "Karaca Bey"],
  yer_id:"Elbistan",
  d:"Zeyneddin Karaca Bey, Elbistan çevresinde toplanan Türkmen aşiretlerinin desteğiyle Dulkadır Beyliği'ni kurdu. Beylik, kuruluşundan itibaren Osmanlı ile Memlûk Sultanlığı arasındaki tampon konumunu iki asra yakın sürdürecekti.",
  kaynak:"dulkadirogullari" },

{ t:"1338-01-01", b:"Elbistan beyliğin başkenti oldu", tur:"idari",
  onem:3, dunya:2, kapsam:"ic", etiket:["başkent", "Elbistan", "idari merkez"],
  yer_id:"Elbistan",
  d:"Yeni kurulan Dulkadır Beyliği'nin idarî merkezi Elbistan oldu. Zeyneddin Karaca Bey'in çevresinde toplanan Türkmen aşiretleri bölgeye yerleşerek şehri beyliğin siyasi merkezi hâline getirdi.",
  kaynak:"elbistan" },

{ t:"1339-01-01", b:"Hurman yolunda Çavlı Han kervansarayı kuruldu", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"ic", etiket:["ticaret yolu", "kervansaray", "Çavlı Han"],
  yer_id:"Elbistan",
  d:"Elbistan yakınlarında, Hurman yolu üzerinde Çavlı Han adlı bir kervansaray kuruldu. Bu yapı, Dulkadır topraklarının Anadolu ile Suriye arasındaki ticaret yolu üzerindeki stratejik konumunu güçlendirdi.",
  kaynak:"elbistan" },

{ t:"1343-01-01", b:"Halep kervanı Dulkadır topraklarında soyuldu", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"dis", etiket:["ticaret", "kervan", "Halep"],
  yer_id:"", kapsam_genis:true,
  d:"Halep'ten gelen büyük bir ticaret kervanı Dulkadır beyliği topraklarında soyuldu. Bu olay, beyliğin Suriye-Anadolu ticaret yolu üzerindeki konumunun hem ekonomik fırsat hem de güvenlik sorunu barındırdığını gösterir.",
  kaynak:"dulkadirogullari" },

{ t:"1353-12-11", b:"Karaca Bey idam edildi, Halil Bey tahta çıktı", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"dis", etiket:["hükümdar değişimi", "Memlük", "idam"],
  yer_id:"Elbistan",
  d:"Beyliğin kurucusu Zeyneddin Karaca Bey, Memlükler tarafından idam edildi. Yerine oğlu Halil Bey tahta çıkarak beyliğin başına geçti.",
  kaynak:"dulkadirogullari" },

{ t:"1379-01-01", b:"Ayas Savaşı'nda Memlükler yenildi", tur:"savas",
  onem:3, dunya:1, kapsam:"dis", etiket:["Ayas", "Memlük", "zafer"],
  yer_id:"", kapsam_genis:true,
  d:"Dulkadırlı kuvvetleri, Ayas Savaşı'nda Memlük kumandanı Timurbay'ı yenilgiye uğrattı. Bu zafer, beyliğin Memlük baskısına karşı güçlü direniş gösterebildiği dönemlerden biriydi.",
  kaynak:"dulkadirogullari" },

{ t:"1381-01-01", b:"Memlükler Maraş'ı ele geçirdi", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["Maraş", "Memlük", "işgal"],
  yer_id:"Maraş",
  d:"Güçlü bir Memlük ordusu Dulkadır kuvvetlerini yenerek Maraş şehrini ele geçirdi. Şehir üç yıl boyunca Memlük idaresinde kaldı.",
  kaynak:"kahramanmaras" },

{ t:"1384-01-01", b:"Halil Bey Maraş'ı geri aldı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["Maraş", "geri alma"],
  yer_id:"Maraş",
  d:"Karaca Bey'in oğlu Halil Bey, 1381'de Memlüklere kaptırılan Maraş'ı geri almayı başardı. Şehir yeniden Dulkadır hâkimiyetine girdi.",
  kaynak:"kahramanmaras" },

{ t:"1386-01-01", b:"Halil Bey hançerlenerek öldürüldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hükümdar değişimi", "suikast"],
  yer_id:"", kapsam_genis:true,
  d:"Halil Bey hançerlenerek öldürüldü ve yerine Şaban Süli (Sevli) Bey beyliğin başına geçti. Bu dönemde beylik, Memlük baskısı altında istikrarsız bir yönetim değişimi yaşadı.",
  kaynak:"dulkadirogullari" },

{ t:"1395-01-01", b:"Sevli Bey, Memlük Sultanı Berkuk'un emriyle öldürüldü", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"dis", etiket:["hükümdar değişimi", "Memlük"],
  yer_id:"", kapsam_genis:true,
  d:"Şaban Süli (Sevli) Bey, Memlük Sultanı Berkuk'un emriyle öldürüldü. Yerine Sadaka Bey tahta çıktı, ancak onun hükümdarlığı da kısa sürdü.",
  kaynak:"dulkadirogullari" },

{ t:"1399-01-01", b:"Yıldırım Bayezid desteğiyle Nasîrüddin Mehmed Bey tahta çıktı", tur:"ittifak",
  onem:4, dunya:1, kapsam:"dis", etiket:["Osmanlı", "ittifak", "Yıldırım Bayezid"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı Padişahı Yıldırım Bayezid'in yardımıyla Sadaka Bey tahttan indirilerek yerine Nasîrüddin Mehmed Bey geçirildi. Bu olay, Dulkadıroğulları'nın Memlük himayesinden çıkıp Osmanlı nüfuz alanına girişinin ilk önemli adımıydı.",
  kaynak:"dulkadirogullari" },

{ t:"1400-01-01", b:"Timur'un Anadolu seferi karşısında direniş", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["Timur", "istila", "direniş"],
  yer_id:"Sivas",
  d:"Nasîrüddin Mehmed Bey, Timur'un Anadolu'ya yönelik büyük seferi sırasında bölgeyi savunmaya çalıştı. Timur kuvvetlerinin bu istilası, dönemin bütün Anadolu beylikleri gibi Dulkadıroğulları'nı da derinden sarstı.",
  kaynak:"dulkadirogullari" },

{ t:"1437-01-01", b:"Kayseri Dulkadırlılar tarafından alındı", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["Kayseri", "fetih"],
  yer_id:"Kayseri",
  d:"Nasîrüddin Mehmed Bey döneminde Dulkadırlı kuvvetleri Kayseri'yi kısa bir kuşatmanın ardından ele geçirdi. Şehir, beyliğin batıya doğru genişlemesinde önemli bir kazanım oldu.",
  kaynak:"dulkadirogullari" },

{ t:"1440-01-01", b:"Mehmed Bey'in kızı Memlük Sultanı Çakmak ile evlendirildi", tur:"ittifak",
  onem:4, dunya:1, kapsam:"dis", etiket:["evlilik", "Memlük", "Çakmak"],
  yer_id:"", kapsam_genis:true,
  d:"Nasîrüddin Mehmed Bey, kızlarından birini Memlük Sultanı Çakmak ile evlendirerek Memlüklerle ittifakını pekiştirdi. Bu evlilik, beyliğin Osmanlı ve Memlük arasında sürdürdüğü dengeleyici siyasetin bir örneğiydi.",
  kaynak:"dulkadirogullari" },

{ t:"1442-01-01", b:"Nasîrüddin Mehmed Bey vefat etti, Süleyman Bey tahta çıktı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hükümdar değişimi"],
  yer_id:"", kapsam_genis:true,
  d:"Uzun süre beyliği yöneten Nasîrüddin Mehmed Bey seksen yaşını aşkın bir ömrün ardından vefat etti. Yerine oğlu Süleyman Bey tahta çıkarak nispeten sakin bir dönem başlattı.",
  kaynak:"dulkadirogullari" },

{ t:"1442-06-01", b:"Maraş Ulucami'nin inşasına başlandı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["cami", "mimari", "Ulucami"],
  yer_id:"Maraş",
  d:"Süleyman Bey döneminde Maraş'ta Ulucami'nin inşasına başlandı; yapı 1442-1454 yılları arasında tamamlandı. Cami, beyliğin başkenti Maraş'taki en önemli erken dönem eserlerinden biri oldu.",
  kaynak:"kahramanmaras" },

{ t:"1450-01-01", b:"Sitti Hatun, Şehzade Mehmed ile evlendirildi", tur:"ittifak",
  onem:5, dunya:1, kapsam:"dis", etiket:["evlilik", "Osmanlı", "Sitti Hatun", "Şehzade Mehmed"],
  yer_id:"", kapsam_genis:true,
  d:"Süleyman Bey, kızı Sitti Hatun'u II. Murad'ın oğlu Şehzade Mehmed (sonraki Fâtih Sultan Mehmed) ile evlendirdi. Bu evlilik, Dulkadıroğulları'nın Osmanlı hanedanıyla kurduğu en üst düzey akrabalık bağlarından biri oldu.",
  kaynak:"dulkadirogullari" },

{ t:"1454-01-01", b:"Süleyman Bey öldü, Melik Arslan Bey tahta çıktı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hükümdar değişimi"],
  yer_id:"", kapsam_genis:true,
  d:"Barış ve sükûn içinde geçen bir dönemin ardından Süleyman Bey öldü. Yerine oğlu Melik Arslan Bey tahta çıktı.",
  kaynak:"dulkadirogullari" },

{ t:"1464-01-01", b:"Melik Arslan Bey Kayseri'yi kaybetti, Şehsuvar Bey tahta çıktı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hükümdar değişimi", "Kayseri", "Karaman"],
  yer_id:"Kayseri",
  d:"Melik Arslan Bey döneminde Kayseri, Karamanoğulları'nın eline geçti. Kısa süre sonra Şehsuvar Bey beyliğin başına geçerek Memlüklere karşı sert bir mücadele dönemi başlattı.",
  kaynak:"dulkadirogullari" },

{ t:"1471-01-01", b:"Memlük kumandanı Yeşbek'in seferinde Elbistan yağmalandı", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["Memlük", "yağma", "Yeşbek"],
  yer_id:"Elbistan",
  d:"Memlük kumandanı Yeşbek'in düzenlediği seferde Şehsuvar Bey'in kuvvetleri Savron deresi civarında yenilgiye uğradı ve Elbistan yağmalandı. Bu yenilgi, Şehsuvar Bey'in bir yıl sonraki idamına giden sürecin habercisiydi.",
  kaynak:"elbistan" },

{ t:"1472-01-01", b:"Şehsuvar Bey Memlükler tarafından idam edildi", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"dis", etiket:["idam", "Memlük", "hükümdar değişimi"],
  yer_id:"", kapsam_genis:true,
  d:"Memlüklere karşı uzun süre direnen Şehsuvar Bey yakalanarak idam edildi. Yerine Memlük yanlısı bir siyaset izleyen Şahbudak Bey tahta çıktı.",
  kaynak:"dulkadirogullari" },

{ t:"1480-01-01", b:"Alâüddevle Bozkurt Bey, kardeşi Şahbudak'ı yenerek tahta çıktı", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["hükümdar değişimi"],
  yer_id:"", kapsam_genis:true,
  d:"Alâüddevle Bozkurt Bey, kardeşi Şahbudak Bey'i yenilgiye uğratarak beyliğin başına geçti. Onun otuz beş yılı aşkın hükümdarlığı, beyliğin Osmanlı'ya yakınlaştığı ve nihayet ilhak edildiği döneme denk geldi.",
  kaynak:"dulkadirogullari" },

{ t:"1481-01-01", b:"Elbistan'da iki cami ve medrese yaptırıldı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["cami", "medrese", "Elbistan"],
  yer_id:"Elbistan",
  d:"Alâüddevle Bey döneminde Elbistan'da iki cami ve bir medrese inşa edildi; âlim ve şeyhler himaye görerek şehrin dinî-kültürel hayatı canlandı. Bu imar faaliyetleri, Elbistan'ın başkentlik konumunu Maraş'a devretmeden önceki son parlak dönemini yansıtır.",
  kaynak:"elbistan" },

{ t:"1501-01-01", b:"Maraş Ulucami, Alâüddevle Bozkurt tarafından yenilendi", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["cami", "mimari", "yenileme"],
  yer_id:"Maraş",
  d:"Alâüddevle Bozkurt Bey, 1501-1502 yıllarında babası Süleyman Bey'in yaptırdığı Maraş Ulucami'sini yeniden inşa ettirip genişletti. Bu imar faaliyeti, Alâüddevle döneminin geniş çaplı eser yaptırma siyasetinin bir parçasıydı.",
  kaynak:"kahramanmaras" },

{ t:"1505-01-01", b:"Beylik merkezi Maraş'a taşındı", tur:"idari",
  onem:3, dunya:2, kapsam:"ic", etiket:["başkent", "Maraş", "idari merkez"],
  yer_id:"Maraş",
  d:"Dulkadır Beyliği'nin merkezi, uzun süre başkentlik yapan Elbistan'dan Maraş'a taşındı. Bu değişiklik, Elbistan'ın Memlük-Dulkadır çatışmalarında tahribata uğramasının ve Maraş'ın stratejik öneminin artmasının sonucuydu.",
  kaynak:"elbistan" },

{ t:"1507-01-01", b:"Şah İsmâil'in Safevî ordusu Elbistan'ı yağmaladı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["Safevi", "Şah İsmail", "yağma"],
  yer_id:"Elbistan",
  d:"Şah İsmâil komutasındaki Safevî ordusu, doğuya yönelik seferi sırasında Dulkadır topraklarına girip Elbistan'ı yağmaladı. Bu saldırı, beyliğin Osmanlı-Memlûk-Safevî üçgeninde ne kadar kırılgan bir konumda olduğunu bir kez daha gösterdi.",
  kaynak:"dulkadirogullari" },

{ t:"1509-01-01", b:"Maraş Hatuniye Camii yaptırıldı", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["cami", "mimari", "Şemse Hatun"],
  yer_id:"Maraş",
  d:"Alâüddevle Bozkurt Bey'in hanımı Şemse Hatun, Maraş'ta kendi adıyla anılan Hatuniye Camii'ni yaptırdı. Şemse Hatun'un türbesi, bu caminin altında yer almaktadır.",
  kaynak:"kahramanmaras" },

{ t:"1510-01-01", b:"Maraş'ta Taşmedrese ve diğer medreseler inşa edildi", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["medrese", "mimari", "külliye"],
  yer_id:"Maraş",
  d:"Alâüddevle Bozkurt Bey, Maraş'ta Taşmedrese'yi ve Bağdâdiye, Neveviyye ile İmaret medreselerini yaptırdı. Bu eserler, XVI. yüzyıl başında beyliğin son döneminde gerçekleştirilen geniş çaplı bir imar hareketinin parçasıydı.",
  kaynak:"kahramanmaras" },

{ t:"1514-01-01", b:"Alâüddevle Çaldıran seferine asker göndermedi", tur:"isyan",
  onem:4, dunya:2, kapsam:"dis", etiket:["Osmanlı", "Çaldıran", "itaatsizlik"],
  yer_id:"", kapsam_genis:true,
  d:"Yavuz Sultan Selim'in Safevîler üzerine düzenlediği Çaldıran seferi sırasında Alâüddevle Bozkurt Bey, istenen desteği göndermeyi reddetti. Bu tutum, Osmanlı-Dulkadır ilişkilerini bozarak bir yıl sonraki Turnadağ Savaşı'nın zeminini hazırladı.",
  kaynak:"dulkadirogullari" },

{ t:"1515-06-12", b:"Turnadağ Savaşı'nda Alâüddevle Yavuz'a yenilip öldürüldü", tur:"savas",
  onem:5, dunya:3, kapsam:"dis", etiket:["Turnadağ", "Yavuz", "Alâüddevle", "yenilgi"],
  yer_id:"",
  d:"Çaldıran seferine destek vermeyi reddeden Alâüddevle Bozkurt Bey'e karşı Yavuz Sultan Selim'in gönderdiği ordu, Turnadağ'da Dulkadır kuvvetlerini ağır bir yenilgiye uğrattı; Alâüddevle savaş meydanında öldürüldü. Bu yenilgi, beyliğin bağımsızlığının fiilen sona erdiği dönüm noktasıdır — bir gün sonra yerine geçen Şehsuvaroğlu Ali Bey Osmanlı tâbiiyetini kabul edecekti.",
  kaynak:"dulkadirogullari", yer_kon:[38.2,37.2] },

{ t:"1515-06-13", b:"Şehsuvaroğlu Ali Bey Osmanlı'ya tâbi oldu", tur:"vassal",
  onem:5, dunya:1, kapsam:"dis", etiket:["Osmanlı", "tabiiyet", "Ali Bey"],
  yer_id:"", kapsam_genis:true,
  d:"Turnadağ Savaşı'nda Alâüddevle'nin ölümünün ardından Şehsuvaroğlu Ali Bey beyliğin başına geçti ve Osmanlı hâkimiyetini tanıyarak tâbi statüsünde yönetime devam etti. Bu, beyliğin bağımsızlığının fiilen sona erdiği ama tüzel varlığının yedi yıl daha sürdüğü bir dönemin başlangıcıydı.",
  kaynak:"dulkadirogullari" },

{ t:"1516-08-24", b:"Ali Bey Mercidâbık Savaşı'na katıldı", tur:"savas",
  onem:3, dunya:5, kapsam:"dis", etiket:["Mercidâbık", "Memlük", "Osmanlı"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı'ya tâbi olan Şehsuvaroğlu Ali Bey, Yavuz Sultan Selim'in Memlüklere karşı yürüttüğü Mercidâbık Savaşı'na Osmanlı ordusu safında katıldı. Bu katılım, beyliğin Osmanlı'ya bağlılığının askerî bir kanıtıydı.",
  kaynak:"dulkadirogullari" },

{ t:"1517-01-22", b:"Ali Bey Ridâniye Savaşı'na katıldı, Memlük Sultanlığı sona erdi", tur:"savas",
  onem:3, dunya:5, kapsam:"dis", etiket:["Ridaniye", "Memlük", "Osmanlı"],
  yer_id:"", kapsam_genis:true,
  d:"Şehsuvaroğlu Ali Bey, Ridâniye Savaşı'nda da Osmanlı ordusuyla birlikte hareket etti. Bu savaşın ardından Memlük Sultanlığı tarihe karıştı ve Dulkadıroğulları'nın konumu tamamen Osmanlı'ya bağımlı hâle geldi.",
  kaynak:"dulkadirogullari" },

{ t:"1519-01-01", b:"Bozoklu Şeyh Celâl isyanının bastırılmasına katkı", tur:"isyan",
  onem:2, dunya:1, kapsam:"dis", etiket:["isyan", "Bozok", "Osmanlı hizmeti"],
  yer_id:"", kapsam_genis:true,
  d:"Osmanlı'ya tâbi olan Şehsuvaroğlu Ali Bey, Bozok bölgesinde patlak veren Şeyh Celâl isyanının bastırılmasına yardımcı oldu. Bu, beyliğin Osmanlı'ya bağlılığının ve tâbi statüsünün bir göstergesiydi.",
  kaynak:"dulkadirogullari" },

{ t:"1521-01-01", b:"Canberdi Gazâlî isyanının bastırılmasına katkı", tur:"isyan",
  onem:3, dunya:2, kapsam:"dis", etiket:["isyan", "Şam", "Canberdi Gazâlî"],
  yer_id:"", kapsam_genis:true,
  d:"Şehsuvaroğlu Ali Bey, Şam Valisi Canberdi Gazâlî'nin Osmanlı'ya karşı başlattığı ayaklanmanın bastırılmasında Osmanlı kuvvetlerine destek verdi. Bu, beyliğin son yıllarında Osmanlı'ya sadakatinin bir başka göstergesiydi.",
  kaynak:"dulkadirogullari" },

{ t:"1522-01-01", b:"Maraş merkezli Osmanlı eyaleti kuruldu", tur:"idari",
  onem:5, dunya:2, kapsam:"dis", etiket:["ilhak", "eyalet", "Maraş"],
  yer_id:"Maraş",
  d:"Şehsuvaroğlu Ali Bey'in öldürülmesinin ardından Dulkadır ülkesi doğrudan Osmanlı topraklarına katıldı ve Maraş merkez olmak üzere bir beylerbeyilik/eyalet hâline getirildi. Böylece iki yüzyıla yakın süredir Osmanlı-Memlük arasında tampon bölge olan beylik, idarî olarak da Osmanlı sistemine dâhil oldu.",
  kaynak:"dulkadirogullari" },


// ═══════════════════ AYDINOĞULLARI (1308-1425) ═══════════════════

{ t:"1307-01-01", b:"Birgi'nin fethi", tur:"toprak-kazanc",
  onem:4, dunya:1, kapsam:"ic", etiket:["Birgi", "fetih", "başkent"],
  yer_id:"Birgi",
  d:"Aydınoğlu Mehmed Bey, Aydın bölgesindeki hâkimiyetini pekiştirirken Birgi'yi ele geçirdi. Şehir kısa süre sonra kurduğu beyliğin merkezi hâline geldi.",
  kaynak:"birgi" },

{ t:"1308-01-01", b:"Aydınoğulları Beyliği'nin kuruluşu", tur:"kurulus",
  onem:5, dunya:1, kapsam:"ic", etiket:["kuruluş", "Mehmed Bey", "beylik"],
  yer_id:"Birgi",
  d:"Mübârizüddin Gazi Mehmed Bey, Birgi merkez olmak üzere Aydınoğulları Beyliği'ni kurdu. Beylik kısa sürede Batı Anadolu'nun Ege kıyısındaki en güçlü Türkmen beyliklerinden biri hâline geldi.",
  kaynak:"aydinogullari" },

{ t:"1312-01-01", b:"Mehmed Bey Ulu Camii ve külliyesinin inşası", tur:"mimari",
  onem:3, dunya:1, kapsam:"ic", etiket:["Ulu Cami", "külliye", "Birgi"],
  yer_id:"Birgi",
  d:"Mehmed Bey, Birgi'de cami, türbe ve medreseden oluşan bir külliye inşa ettirdi (712/1312). Ulu Cami olarak da anılan bu yapı, dönemin yıkımlarından günümüze ulaşabilen en önemli tarihî anıt olarak kabul edilir; türbede Umur Bey, İsa Bey ve Bahadır Bey gibi hânedan üyeleri de gömülüdür.",
  kaynak:"birgi" },

{ t:"1319-01-01", b:"Sakız (Chios) adasına akın", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["Sakız", "Chios", "akın", "donanma"],
  yer_id:"Sakız",
  d:"Aydınoğulları donanması Ege'deki deniz gücünü göstererek Sakız adasına akın düzenledi. Bu, beyliğin erken dönem deniz seferlerinden biridir.",
  kaynak:"aydinogullari" },

{ t:"1329-01-01", b:"İzmir Liman Kalesi'nin (Aşağı Kale) fethi", tur:"toprak-kazanc",
  onem:5, dunya:2, kapsam:"dis", etiket:["İzmir", "liman", "Martino Zaccaria", "Ceneviz"],
  yer_id:"İzmir",
  d:"Mehmed Bey, İzmir'in liman kesimini (Aşağı Kale) Ceneviz beyi Martino Zaccaria'dan aldı; şehrin yukarı kalesi (Kadifekale) hâlâ Bizans elinde kaldı. İzmir kısa sürede beyliğin donanma üssü ve fiilî başkenti hâline geldi.",
  kaynak:"aydinogullari" },

{ t:"1334-01-01", b:"Mehmed Bey'in ölümü, Umur Bey'in cülûsu", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["Umur Bey", "cülus", "hükümdar"],
  yer_id:"Birgi",
  d:"Mehmed Bey'in ölümü üzerine oğlu Umur Bey beyliğin başına geçti. Umur Bey'in dönemi, beyliğin Ege'deki deniz gücünün ve gazâ faaliyetlerinin zirve noktası olacaktı.",
  kaynak:"aydinogullari" },

{ t:"1334-09-01", b:"Umur Bey'in Haçlı donanmasını İzmir önünde püskürtmesi", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["İzmir", "Haçlı donanması", "savunma"],
  yer_id:"İzmir",
  d:"İzmir'e saldıran bir Haçlı donanması Umur Bey tarafından geri püskürtüldü. Bu, İzmir'in Latin güçlerin hedefi hâline geldiği uzun mücadelenin ilk büyük çatışmalarından biriydi.",
  kaynak:"umur-bey" },

{ t:"1335-01-01", b:"Umur Bey'in Mora seferi ve Alaşehir'in fethi", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"dis", etiket:["Mora", "Alaşehir", "Saruhanoğulları", "sefer"],
  yer_id:"",
  d:"Umur Bey, Saruhanoğulları ile birlikte Yunanistan ve Mora'ya seferler düzenledi; aynı dönemde Alaşehir'i ele geçirdi. Bu seferler beyliğin hem Anadolu'daki hem Ege'nin karşı kıyısındaki etkisini genişletti.",
  kaynak:"aydinogullari", yer_id:"Alaşehir" },

{ t:"1341-06-15", b:"Umur Bey'in Kantakuzenos'un başlıca destekçisi olması", tur:"ittifak",
  onem:3, dunya:2, kapsam:"dis", etiket:["Kantakuzenos", "Bizans", "iç savaş", "ittifak"],
  yer_id:"",
  d:"Bizans İmparatoru III. Andronikos'un ölümünün ardından başlayan Bizans iç savaşında Umur Bey, Kantakuzenos'un en önemli destekçilerinden biri olarak öne çıktı. Bu ittifak Umur Bey'i Ege'de belirleyici bir güç konumuna taşıdı.",
  kaynak:"aydinogullari", kapsam_genis:true },

{ t:"1342-01-01", b:"Umur Bey'in 380 gemi ve 20.000 askerle Trakya seferi", tur:"ittifak",
  onem:4, dunya:2, kapsam:"dis", etiket:["Trakya", "Kantakuzenos", "donanma", "sefer"],
  yer_id:"",
  d:"Umur Bey, Kantakuzenos'a destek amacıyla 380 gemi ve yaklaşık 20.000 askerden oluşan büyük bir donanmayla Trakya'ya çıktı. Bu, Aydınoğulları donanmasının kaydedilen en büyük deniz aşırı seferlerinden biriydi.",
  kaynak:"umur-bey", kapsam_genis:true },

{ t:"1344-10-28", b:"İzmir Liman Kalesi'nin Haçlılar tarafından alınması", tur:"toprak-kayip",
  onem:5, dunya:3, kapsam:"dis", etiket:["İzmir", "liman", "Haçlı seferi", "kayıp"],
  yer_id:"İzmir",
  d:"Papalık öncülüğünde kurulan Latin Haçlı donanması (Aziz Birliği donanması), yaklaşık iki buçuk yıllık kuşatma baskısının ardından İzmir'in liman kesimini (Aşağı Kale) ele geçirdi. Umur Bey buna karşı ölene kadar sürecek bir baskı ve kuşatma politikası izledi.",
  kaynak:"aydinogullari" },

{ t:"1345-01-17", b:"Umur Bey'in müttefik Türk donanmalarıyla Haçlı filosunu yenmesi", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["Haçlı donanması", "deniz savaşı", "ittifak"],
  yer_id:"İzmir",
  d:"Umur Bey, diğer Türkmen beylikleriyle birlikte oluşturduğu müttefik donanmayla Haçlı filosuna karşı önemli bir zafer kazandı. Ancak bu zafer İzmir Liman Kalesi'ni geri almaya yetmedi.",
  kaynak:"aydinogullari" },

{ t:"1348-03-01", b:"Umur Bey'in İzmir Aşağı Kale kuşatmasında şehid düşmesi", tur:"hukumdar",
  onem:5, dunya:2, kapsam:"ic", etiket:["Umur Bey", "ölüm", "İzmir", "kuşatma"],
  yer_id:"İzmir",
  d:"Umur Bey, İzmir Aşağı Kale'yi geri almak için sürdürdüğü kuşatma sırasında bir okla vurularak şehid düştü (748/Mart 1348), otuz dokuz yaşındaydı. Naaşı Birgi'de babası Mehmed Bey'in türbesine defnedildi.",
  kaynak:"umur-bey" },

{ t:"1348-08-18", b:"Hızır Bey'in Latinlerle ağır şartlı barış antlaşması", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["Hızır Bey", "antlaşma", "Latinler"],
  yer_id:"İzmir",
  d:"Umur Bey'in ölümünün ardından beyliğin başına geçen kardeşi Hızır Bey, Latin güçleriyle ağır şartlı bir barış antlaşması imzaladı. Bu antlaşma İzmir Liman Kalesi'nin fiilen Latinlerde kaldığını kabul ediyordu.",
  kaynak:"aydinogullari" },

{ t:"1353-04-01", b:"Venedik ile ticaret antlaşmasının kesinleşmesi", tur:"antlasma",
  onem:3, dunya:1, kapsam:"dis", etiket:["Venedik", "ticaret", "antlaşma"],
  yer_id:"İzmir",
  d:"Hızır Bey döneminde Venedik ile görüşülen ticaret antlaşması nihai hâline kavuştu ve iki ay sonra Girit tarafından da onaylandı. Antlaşma, Aydınoğulları limanlarının İtalyan ticaret ağına daha sıkı bağlanmasını sağladı.",
  kaynak:"aydinogullari" },

{ t:"1371-01-01", b:"İsa Bey'in Venedik antlaşmasını yenilemesi", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["İsa Bey", "Venedik", "ticaret"],
  yer_id:"Ayasuluk (Selçuk)",
  d:"İsa Bey, selefi Hızır Bey'in Venedik ile yaptığı ticaret antlaşmasını yeniledi. Bu, Ayasuluk limanının Venedik ve Ceneviz tüccarları için ticaret merkezi olma konumunu sürdürdü.",
  kaynak:"aydinogullari" },

{ t:"1374-01-01", b:"İsa Bey Camii'nin Ayasuluk'ta inşası", tur:"mimari",
  onem:4, dunya:1, kapsam:"ic", etiket:["İsa Bey Camii", "Ayasuluk", "mimari"],
  yer_id:"Ayasuluk (Selçuk)",
  d:"İsa Bey, Ayasuluk'ta yüksek sanat değeriyle öne çıkan büyük camisini inşa ettirdi (776/1374-75). Yapı, Anadolu Türk mimarisinde Selçuklu-Beylikler dönemi geçiş sürecinin önemli örneklerinden biri sayılır.",
  kaynak:"ayasuluk" },

{ t:"1375-01-01", b:"Hacı Paşa'nın Ayasuluk kadılığına ve saray hekimliğine tayini", tur:"bilim",
  onem:3, dunya:1, kapsam:"ic", etiket:["Hacı Paşa", "tıp", "kadı", "Ayasuluk"],
  yer_id:"Ayasuluk (Selçuk)",
  d:"Kahire'de Ekmeleddin el-Bâbertî'nin öğrencisi olarak yetişen Celâleddin Hızır (Hacı Paşa), Aydınoğlu İsa Bey'in daveti üzerine Anadolu'ya geldi. İsa Bey onu Ayasuluk kadılığına ve saray hekimliğine getirdi; 'Hacı Paşa' unvanının da beylik tarafından bir lütuf olarak verildiği düşünülür. Kesin tayin tarihi TDV maddesinde belirtilmemiştir, tahmini bir tarih verilmiştir.",
  kaynak:"haci-pasa" },

{ t:"1385-01-01", b:"Hacı Paşa'nın Şifâü'l-eskâm'ı kaleme alması", tur:"bilim",
  onem:3, dunya:2, kapsam:"ic", etiket:["Hacı Paşa", "Şifâü'l-eskâm", "tıp eseri"],
  yer_id:"Birgi",
  d:"Hacı Paşa, Ayasuluk ve Birgi medreselerinde müderrislik yaparken tıp alanındaki en önemli eseri Şifâü'l-eskâm'ı ve Anadolu'da yazılan ilk Türkçe tıp kitaplarından bazılarını kaleme aldı. Kesin yazım tarihi belirsiz olup dönem tahminidir.",
  kaynak:"haci-pasa" },

{ t:"1389-06-15", b:"Aydınoğulları yardımcı kuvvetlerinin I. Kosova Savaşı'na katılması", tur:"ittifak",
  onem:2, dunya:4, kapsam:"dis", etiket:["Kosova", "Osmanlı", "yardımcı kuvvet"],
  yer_id:"",
  d:"Aydınoğulları'na bağlı yardımcı birlikler, I. Kosova Savaşı'nda Osmanlı ordusu safında yer aldı. Bu katılım, beyliğin Yıldırım Bayezid dönemine doğru giderek artan Osmanlı bağımlılığının bir işaretiydi.",
  kaynak:"aydinogullari", yer_kon:[42.63,21.12] },

{ t:"1390-01-01", b:"İsa Bey'in Yıldırım Bayezid'e tabi olması, ilk ilhak", tur:"vassal",
  onem:5, dunya:2, kapsam:"ic", etiket:["Bayezid", "tabiiyet", "ilhak", "İsa Bey"],
  yer_id:"", kapsam_genis:true,
  d:"Yıldırım Bayezid'in Batı Anadolu beyliklerine yönelik seferi sonrasında İsa Bey Osmanlı tabiiyetini kabul etti; beylik toprakları fiilen Osmanlı idaresine geçti. İsa Bey'e yalnız Tire çevresinin idaresi bırakıldı.",
  kaynak:"aydinogullari" },

{ t:"1390-06-01", b:"Tire'nin İsa Bey'e bırakılan idari merkez olması", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["Tire", "idari merkez", "İsa Bey"],
  yer_id:"Tire",
  d:"Bayezid'e tabi olduktan sonra İsa Bey'e beyliğin eski topraklarından yalnızca Tire ve çevresinin yönetimi bırakıldı. Bu düzenleme, beyliğin siyasi varlığını sınırlı biçimde 1390 sonrasına taşıyan idari çerçeveyi oluşturdu.",
  kaynak:"aydinogullari" },

{ t:"1402-07-28", b:"Ankara Savaşı sonrası Timur'un toprakları iadesi, yeniden kuruluş", tur:"kurulus",
  onem:5, dunya:1, kapsam:"ic", etiket:["Timur", "Ankara Savaşı", "yeniden kuruluş"],
  yer_id:"", kapsam_genis:true,
  d:"Timur'un Ankara Savaşı'nda Yıldırım Bayezid'i yenilgiye uğratmasının ardından, Anadolu beylikleri arasında Aydınoğulları toprakları da eski hânedan mensuplarına iade edildi. Bu, beyliğin kısa süreli ikinci varlık döneminin başlangıcıdır.",
  kaynak:"aydinogullari" },

{ t:"1403-01-01", b:"Musa Bey'in ölümü, II. Umur'un cülûsu", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["Musa Bey", "II. Umur", "cülus"],
  yer_id:"", kapsam_genis:true,
  d:"Timur sonrası dönemde beyliğin başında bulunan Musa Bey'in ölümü üzerine yerine II. Umur geçti. Bu dönem, Cüneyd Bey ve Kara Hasan'ın İzmir ile Ayasuluk'ta güç kazandığı çalkantılı bir geçiş sürecidir.",
  kaynak:"cuneyd-bey" },

{ t:"1405-01-01", b:"II. Umur'un ölümü, Cüneyd Bey'in tek başına hâkimiyeti", tur:"hukumdar",
  onem:4, dunya:1, kapsam:"ic", etiket:["Cüneyd Bey", "II. Umur", "hâkimiyet"],
  yer_id:"", kapsam_genis:true,
  d:"II. Umur'un ölümünün ardından Fâtih İbrâhim Bey'in oğlu Cüneyd Bey, Alaşehir, Salihli ve Nif gibi yerleri de ele geçirerek beylik topraklarının tek hâkimi konumuna geldi. Cüneyd Bey'in yönetimi, Osmanlı şehzadeleriyle kurduğu değişken ittifaklarla belirlenecekti.",
  kaynak:"cuneyd-bey" },

{ t:"1414-01-01", b:"Çelebi Mehmed'in İzmir'i alması, Cüneyd Bey'in Niğbolu'ya sürgünü", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"ic", etiket:["Çelebi Mehmed", "İzmir", "sürgün", "Niğbolu"],
  yer_id:"İzmir",
  d:"Osmanlı tahtını yeniden birleştiren I. Mehmed (Çelebi Mehmed), Cüneyd Bey üzerindeki baskısını artırarak İzmir'i ele geçirdi. Cüneyd Bey, Niğbolu sancakbeyliğine atanarak Anadolu'dan uzaklaştırıldı (817/1414-15).",
  kaynak:"cuneyd-bey" },

{ t:"1419-01-01", b:"Cüneyd Bey'in Düzmece Mustafa isyanına katılması", tur:"isyan",
  onem:3, dunya:2, kapsam:"ic", etiket:["Düzmece Mustafa", "isyan", "Selanik"],
  yer_id:"", kapsam_genis:true,
  d:"Cüneyd Bey, Osmanlı tahtına iddia eden Düzmece Mustafa'nın isyanına destek verdi; isyan bastırılınca Selanik'e kaçtı. Ardından yakalanarak İstanbul'da bir manastıra hapsedildi.",
  kaynak:"cuneyd-bey" },

{ t:"1422-01-01", b:"Cüneyd Bey'in II. Murad'a destek sözüyle beyliği yeniden ele geçirmesi", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"ic", etiket:["Cüneyd Bey", "II. Murad", "yeniden kuruluş"],
  yer_id:"", kapsam_genis:true,
  d:"I. Mehmed'in ölümünün ardından yeniden Düzmece Mustafa'ya destek veren, ancak sonrasında II. Murad'a bağlılık sözü karşılığında serbest bırakılan Cüneyd Bey, eski Aydınoğulları topraklarını yeniden ele geçirdi. Bu, beyliğin son ve en kısa ömürlü canlanma dönemidir.",
  kaynak:"cuneyd-bey" },

{ t:"1424-01-01", b:"Hacı Paşa'nın Birgi'de vefatı", tur:"sosyal",
  onem:2, dunya:1, kapsam:"ic", etiket:["Hacı Paşa", "vefat", "Birgi"],
  yer_id:"Birgi",
  d:"Anadolu'da yazılan ilk Türkçe tıp kitaplarının müellifi Hacı Paşa, uzun yıllar bağlı kaldığı Birgi'de vefat etti (827/1424). Mezarı üzerine 1935'te bir mermer anıt dikildi.",
  kaynak:"haci-pasa" },

{ t:"1425-06-01", b:"Cüneyd Bey'in yakalanıp idam edilmesi, kesin Osmanlı ilhakı", tur:"son",
  onem:5, dunya:3, kapsam:"ic", etiket:["Cüneyd Bey", "idam", "ilhak", "II. Murad"],
  yer_id:"", kapsam_genis:true,
  d:"Cüneyd Bey, Akhisar yakınında uğradığı askerî yenilgi, Ceneviz donanmasının deniz ablukası ve beklediği Karamanoğlu desteğinin gelmemesi üzerine İpsili'de teslim oldu. II. Murad onu yakalatıp bütün ailesiyle birlikte idam ettirdi (829/1425-26); Aydınoğulları toprakları kesin olarak Osmanlı Devleti'ne katıldı. TDV maddesi kesin ayı/günü vermediği için yıl aralığı (1425-26) not düşülmüştür.",
  kaynak:"cuneyd-bey" },


// ═══════════════════ KİLİKYA ERMENİ KRALLIĞI (1199-1375) ═══════════════════

{ t:"1199-01-06", b:"Levon (I/II), Tarsus'ta taç giyip ilk kral oldu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus", "taç", "Levon"],
  yer_id:"Tarsus",
  d:"Levon, Tarsus Katedrali'nde Kutsal Roma İmparatoru VI. Heinrich'in gönderdiği tacı giyerek Kilikya Ermeni Krallığı'nın ilk kralı oldu; papalık temsilcisi tarafından da kutsandı. Böylece bölgedeki Ermeni beyliği resmen bir krallığa dönüştü (Bournoutian 2006, s.32).",
  kaynak:"Bournoutian, A Concise History of the Armenian People (2006)" },

{ t:"1201-01-01", b:"Cenevizlilerle ticaret antlaşması, ayrıcalıklar Venedik'e de genişletildi", tur:"ekonomi",
  onem:3, dunya:2, kapsam:"dis", etiket:["Ceneviz", "Venedik", "ticaret"],
  yer_id:"",
  d:"Kral I. Levon, Ceneviz Cumhuriyeti'ne ithalat-ihracat vergilerinden muafiyet ve Sis başta olmak üzere şehirlerde ticarethane açma izni tanıdı; kısa süre sonra aynı ayrıcalıklar Venedik'e de genişletildi. Bu antlaşmalar Kilikya'yı Akdeniz ticaret ağına bağladı.",
  kaynak:"Bournoutian, A Concise History of the Armenian People (2006); ikincil özetten derlendi (AGBU 'Merchants from Ararat')", yer_kon:[37.4522,35.8283] },

{ t:"1219-01-01", b:"I. Levon öldü, Zabel'in tahtı büyük bir veraset krizine yol açtı", tur:"hukumdar",
  onem:3, dunya:2, kapsam:"ic", etiket:["veraset", "kriz", "Zabel"],
  yer_id:"", kapsam_genis:true,
  d:"Kral I. Levon öldü, tahta kızı Zabel (İsabella) geçti; naiplik ve Zabel'in kiminle evleneceği meselesi büyükler arasında yıllarca süren bir taht kavgasına (Raymond-Roupen krizi) yol açtı. Kriz 1226'da Hetum'un naib/koca olarak öne çıkmasına dek sürdü.",
  kaynak:"Ghazarian, The Armenian Kingdom in Cilicia During the Crusades (2000); ikincil özetten derlendi" },

{ t:"1226-01-01", b:"Hetum I kral oldu, Hetumid hanedanı başladı", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"ic", etiket:["Hetum I", "hanedan", "taç"],
  yer_id:"",
  d:"Zabel'le evlenen Baron Hetum kral unvanını aldı; Rubenid hanedanı sona erip Hetumid hanedanı kuruldu. Hetum I'in 44 yıllık saltanatı krallığın Moğol ittifakı politikasının temelini attı.",
  kaynak:"Der Nersessian, The Kingdom of Cilician Armenia (A History of the Crusades, ed. Setton); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1226-06-01", b:"Sis ve Tarsus darphaneleri gümüş dram sikkelerini bastı", tur:"ekonomi",
  onem:2, dunya:1, kapsam:"ic", etiket:["gümüş", "dram", "darphane"],
  yer_id:"",
  d:"Sis ve Tarsus'taki kraliyet darphaneleri, krallığın simgesi hâline gelen gümüş 'dram' (tram) sikkelerini bastı; Doğu-Batı ticaretinden gelen zenginlik dönemin zengin ikonografili sikkelerine yansıdı. II. Levon döneminde ekonomik sıkıntı sikkelerin küçülüp hafiflemesine yol açtı.",
  kaynak:"Bedoukian, Coinage of Cilician Armenia (American Numismatic Society, 1962); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1243-01-01", b:"Moğol kumandanı Baycu ile ön anlaşma", tur:"ittifak",
  onem:2, dunya:2, kapsam:"dis", etiket:["Moğol", "Baycu", "ittifak"],
  yer_id:"", kapsam_genis:true,
  d:"Anadolu'ya ilerleyen Moğol ordusu kumandanı Baycu Noyan ile Hetum I arasında ön bir anlaşma yapıldı; bu, krallığın Memlükler yerine Moğollarla ittifak stratejisinin ilk adımıydı.",
  kaynak:"Stewart, The Armenian Kingdom and the Mamluks (2001); ikincil özetten derlendi" },

{ t:"1247-01-01", b:"Kral Hetum I, Karakurum'a elçi gönderip Moğollarla ilk temas kurdu", tur:"ittifak",
  onem:3, dunya:2, kapsam:"dis", etiket:["Moğol", "ittifak", "Sempat"],
  yer_id:"",
  d:"Kral Hetum I, kardeşi Sparapet Sempat'ı Karakurum'a gönderip Möngke Han'ın kardeşiyle Memlüklere karşı bir ittifak zemini aradı — krallığın sonraki on yıllarına damgasını vuracak Moğol ittifakı siyasetinin ilk adımıydı. Hetum'un 1254'teki bizzat ziyareti bu temasın devamıdır (Bournoutian 2006, s.45).",
  kaynak:"Bournoutian, A Concise History of the Armenian People (2006)", yer_id:"Karakurum" },

{ t:"1251-01-01", b:"Korikos deniz kalesi Hetum I döneminde genişletildi", tur:"mimari",
  onem:2, dunya:1, kapsam:"ic", etiket:["Korikos", "kale", "tahkimat"],
  yer_id:"", kapsam_genis:true,
  d:"Doğu Akdeniz kıyısındaki stratejik Korikos deniz kalesi, daha önce I. Levon (1206) tarafından onarılmış, ardından Hetum I (1251) döneminde genişletilerek Kilikya'nın en güçlü kıyı tahkimatlarından birine dönüştürüldü; kayaya bitişik ada üzerindeki kale, kıyı kalesiyle birlikte krallığın deniz savunmasının omurgasını oluşturdu.",
  kaynak:"Robert W. Edwards, The Fortifications of Armenian Cilicia (Dumbarton Oaks Studies XXIII, 1987); ikincil özetten derlendi (armenianarchitecture.org), doğrudan tarama yapılamadı" },

{ t:"1254-09-13", b:"Hetum I bizzat Karakurum'da Möngke Han'ın huzurunda", tur:"ittifak",
  onem:4, dunya:2, kapsam:"dis", etiket:["Moğol", "Karakurum", "Möngke Han"],
  yer_id:"",
  d:"Hetum I bizzat Orta Asya'yı geçerek Moğol başkenti Karakurum'a ulaştı ve 13 Eylül 1254'te Möngke Han'ın huzuruna çıktı; ittifakı bizzat yeniledi, Ermeni kilisesi ve halkı için ayrıcalıklar içeren fermanlar aldı. Yolculuk maiyetindeki tarihçi Kirakos Gandzaketsi tarafından kayda geçirildi.",
  kaynak:"Bournoutian (2006); Ghazarian (2000); ikincil özetten derlendi", yer_id:"Karakurum" },

{ t:"1256-01-01", b:"Toros Roslin'in ilk imzalı minyatürlü İncil'i", tur:"kultur",
  onem:3, dunya:2, kapsam:"ic", etiket:["minyatür", "Toros Roslin", "Hromkla"],
  yer_id:"", kapsam_genis:true,
  d:"Kilikya Ermeni minyatür okulunun en büyük ustası Toros Roslin, patrikhane atölyesinin bulunduğu Hromkla'da imzasını taşıyan ilk İncil nüshasını tamamladı (1256); Bizans ve Haçlı sanatını sentezleyen üslubuyla 1267-68'e dek yedi eser üretti.",
  kaynak:"Der Nersessian, Miniature Painting in the Armenian Kingdom of Cilicia (Dumbarton Oaks, 1993); ikincil özetten derlendi, doğrudan tarama yapılamadı" },

{ t:"1260-01-01", b:"Ayn Câlût sonrası Memlük akınları başladı", tur:"toprak-kayip",
  onem:3, dunya:2, kapsam:"dis", etiket:["Memlük", "Ayn Calut", "akin"],
  yer_id:"",
  d:"İlhanlı Moğolları'nın Ayn Câlût'ta Memlüklere yenilip Suriye'den çekilmesinin ardından, artık Moğol koruması zayıflayan Kilikya Ermeni Krallığı Memlük akınlarının doğrudan hedefi hâline geldi; bu baskı 1266'daki Mari Bozgunu'nda doruğa çıkacaktı.",
  kaynak:"Bournoutian, A Concise History of the Armenian People (2006)", kapsam_genis:true },

{ t:"1260-06-01", b:"Sparapet Sempat, Antakya hukuk kodeksini Ermeniceye çevirdi", tur:"idari",
  onem:3, dunya:2, kapsam:"ic", etiket:["hukuk", "Sempat", "Assizes"],
  yer_id:"",
  d:"Baş komutan (sparapet) Sempat, Eski Fransızca yazılmış Antakya Prensliği hukuk kodeksi Assises d'Antioche'u Orta Ermeniceye çevirdi — orijinali kaybolan kodeksin günümüze ulaşan tek nüshasıdır. Sempat ayrıca Mhitar Goş'un kodeksine dayanan kendi Datastanagirk' (Yargı Kitabı) hukuk metnini kaleme aldı; reform, tüccarlar için tutarlı vergilendirme ve hukukî koruma getirdi.",
  kaynak:"Sophene Books akademik dizi özeti (Assizes of Antioch çevirisi üzerine); kesin çeviri tarihi belirsiz, Sempat'ın sparapetlik dönemine (ö.1276) dayanır, ikincil özetten derlendi", kapsam_genis:true },

{ t:"1266-08-24", b:"Mari Bozgunu — Memlük akını Kilikya'yı yakıp yıktı", tur:"savas",
  onem:5, dunya:2, kapsam:"dis", etiket:["Memlük", "Baybars", "Mari", "bozgun"],
  yer_id:"",
  d:"Hetum I Moğol yardımı istemek için İlhanlı sarayındayken, Sultan Baybars'ın kumandanları El-Mansur Ali ve Kalavun Kilikya'ya girdi; oğulları Leon ve Toros'un savunması Mari mevkiinde bozguna uğradı. Memlükler ardından Mamistra, Adana, Tarsus ve Ayas'ı 20 gün yağmaladı, yaklaşık 40.000 Ermeni esir alındı.",
  kaynak:"Stewart (2001); Ghazarian (2000); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1270-10-28", b:"Hetum I öldü, III. Levon tahta çıktı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["veraset", "Levon III"],
  yer_id:"",
  d:"Hetum I, tahtı oğlu III. Levon'a bıraktıktan kısa süre sonra öldü.",
  kaynak:"Der Nersessian (Setton ed.); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1289-01-01", b:"III. Levon zehirlendi, II. Hetum tahta geçti", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["veraset", "zehirlenme"],
  yer_id:"",
  d:"Kral III. Levon arsenikle zehirlenerek öldü; yerine oğlu II. Hetum geçti. II. Hetum'un saltanatı, tahttan üç kez çekilip üç kez geri dönmesiyle krallığın en istikrarsız dönemine sahne oldu.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1293-04-01", b:"II. Hetum tahttan çekildi, Fransisken keşiş oldu", tur:"idari",
  onem:2, dunya:1, kapsam:"ic", etiket:["Fransisken", "feragat", "Toros III"],
  yer_id:"", kapsam_genis:true,
  d:"II. Hetum tahtı kardeşi III. Toros'a bırakıp Mamistra'da Fransisken tarikatına katıldı; ancak fiilî nüfuzunu 'Büyük Baron' sıfatıyla korudu.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi" },

{ t:"1296-01-01", b:"Sempat, kardeşlerini alaşağı etti: Toros boğduruldu, Hetum kör edildi", tur:"isyan",
  onem:4, dunya:1, kapsam:"ic", etiket:["Sempat","iç çatışma","kör etme","taht-kavgasi"],
  yer_id:"",
  d:"Taht kavgasında kardeş Sempat, III. Toros'u boğdurttu ve II. Hetum'u dağlayarak kısmen kör ettirdi, tahtı ele geçirdi; üç yıl sonra bir başka kardeş III. Konstantin tarafından devrildi.",
  kaynak:"Bournoutian (2006); ikincil özetten (soy kütüğü kaynaklarıyla çapraz kontrol)", kapsam_genis:true },

{ t:"1299-01-01", b:"II. Hetum yeniden tahtta, Gazan Han'ın Suriye seferine katıldı", tur:"ittifak",
  onem:3, dunya:2, kapsam:"dis", etiket:["Gazan Han", "Moğol", "sefer"],
  yer_id:"",
  d:"Kısmen iyileşen II. Hetum tahta üçüncü kez döndü ve İlhanlı hükümdarı Gazan Han'ın Suriye seferine katıldı; ortak kuvvetler Vadi el-Hazandar'da (Humus yakını) Memlükleri yendi.",
  kaynak:"Stewart (2001); ikincil özetten derlendi", yer_id:"Humus" },

{ t:"1307-01-01", b:"Sis Konsili: Ermeni Kilisesi Roma ile birliği kabul etti", tur:"kultur",
  onem:4, dunya:2, kapsam:"ic", etiket:["Sis Konsili", "Katoliklik", "birlik"],
  yer_id:"",
  d:"Papa V. Clement'in Batı'dan askerî yardım karşılığında dayattığı baskıyla, Kral II. Levon (IV), babası eski kral II. Hetum ve yeni seçilen Katolikos III. Kostantin önderliğinde toplanan konsil, Katolik doktrinini ve Roma'nın üstünlüğünü kabul etti.",
  kaynak:"Council of Sis literatürü, ikincil akademik özetten derlendi (doğrudan birincil tarama yapılamadı); Bournoutian (2006)", yer_kon:[37.4522,35.8283] },

{ t:"1307-11-17", b:"II. Hetum ve kral II. Levon, Moğol kumandanı Bilarga tarafından öldürüldü", tur:"isyan",
  onem:5, dunya:2, kapsam:"dis", etiket:["suikast","Bilarga","Moğol","darbe-siyasi"],
  yer_id:"",
  d:"Kilikya'daki Moğol garnizon kumandanı, Müslüman Bilarga, başkent Sis'te cami inşa etme niyetini duyurunca II. Hetum İlhanlı hükümdarı Olcaytu'ya şikâyet etti; öfkelenen Bilarga eski kral II. Hetum'u ve genç kral II. Levon'u Anazarva yakınındaki otağına çağırıp maiyetleriyle katletti. Olcaytu, Bilarga'yı bu cinayet yüzünden idam ettirdi.",
  kaynak:"Stewart, The Armenian Kingdom and the Mamluks (2001); ikincil özetten derlendi, doğrudan doğrulama önerilir", yer_kon:[37.2667,35.9167] },

{ t:"1308-01-01", b:"Adana Konsili: 1307 kilise birliği reddedildi", tur:"kultur",
  onem:3, dunya:1, kapsam:"ic", etiket:["Adana Konsili", "tepki"],
  yer_id:"", kapsam_genis:true,
  d:"Büyük Ermenistan'daki ruhban sınıfının ve halkın güçlü tepkisi üzerine toplanan Adana Konsili, Sis Konsili'nin (1307) kararlarını reddetti; 1309'daki altıncı Sis Konsili bu reddi resmîleştirdi.",
  kaynak:"Council of Sis literatürü, ikincil akademik özetten derlendi" },

{ t:"1308-06-01", b:"Oşin, Bilarga'yı yenip tahta çıktı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["Oşin", "taht", "Bilarga"],
  yer_id:"",
  d:"Kral II. Hetum ve II. Levon'un katlinden sonra Oşin, Bilarga'nın kuvvetlerini yenerek Kilikya'dan sürdü ve İlhanlı hükümdarı Olcaytu'nun desteğiyle taç giydi.",
  kaynak:"Stewart (2001); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1320-07-20", b:"Oşin öldü, IV. Levon tahta geçti", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["veraset"],
  yer_id:"",
  d:"Kral Oşin 37 yaşında öldü; oğlu IV. Levon (bazı kaynaklarda V. Levon) tahta geçti — Hetumid hanedanının son kralı olacaktı.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1322-01-01", b:"Memlükler Malatya'yı ele geçirdi", tur:"toprak-kayip",
  onem:2, dunya:2, kapsam:"dis", etiket:["Malatya", "Memlük", "İlhanlı"],
  yer_id:"Malatya",
  d:"Memlük Suriye valisi Tengiz'in kumandasındaki kuvvetler, İlhanlı müttefiki bölgesindeki Malatya'yı ele geçirip ilhak etti; bu, Kilikya'nın Moğol ittifakının artık sınırları koruyamadığının işaretiydi.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi" },

{ t:"1325-01-01", b:"Ayas limanı yeniden inşa edildi", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["Ayas", "liman", "ticaret"],
  yer_id:"", kapsam_genis:true,
  d:"Önceki Memlük akınlarında tahrip olan Ayas limanı krallık tarafından yeniden inşa edildi ve Memlük Sultanlığı tarafından ticaret limanı olarak tanındı; İtalyan tüccarlar (özellikle Cenevizliler) faaliyetlerine devam etti.",
  kaynak:"\"The Armenian Kingdom of Cilicia and the Mamluk Sultanate\", Orient dergisi (jstage.jst.go.jp) — hakemli akademik makale" },

{ t:"1337-01-01", b:"Ayas limanı Memlüklerin eline geçti", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["Ayas", "Memlük", "işgal"],
  yer_id:"", kapsam_genis:true,
  d:"Sultan Nâsır Muhammed'in ordusu Ayas'ı ele geçirdi; bir kadıyı öldürülmesi bahanesiyle şehirdeki Ermeni ve Frenk nüfusun neredeyse tamamı katledildi ya da esir alındı. Krallığın en önemli ticaret limanının kaybı ekonomik çöküşü hızlandırdı.",
  kaynak:"\"The Armenian Kingdom of Cilicia and the Mamluk Sultanate\", Orient dergisi (jstage.jst.go.jp)" },

{ t:"1341-08-28", b:"IV. Levon kendi baronları tarafından öldürüldü", tur:"isyan",
  onem:5, dunya:1, kapsam:"ic", etiket:["suikast","baronlar","Hetumid sonu","darbe-siyasi"],
  yer_id:"",
  d:"Batı yanlısı politikaları ve Katolik Kilisesi ile uzlaşma çabaları yerli baronları kızdıran IV. Levon, 1337'deki yeni Memlük saldırısı sırasında Sis kalesine sığınmışken kendi baronları tarafından öldürüldü — Hetumid hanedanının son kralıydı.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi", yer_kon:[37.4522,35.8283] },

{ t:"1342-01-01", b:"Guy de Lusignan, II. Konstantin adıyla taç giydi", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"ic", etiket:["Lusignan", "hanedan değişimi", "taç"],
  yer_id:"",
  d:"IV. Levon'un vârissiz ölümü üzerine, Kıbrıs Lusignan hanedanından anne tarafından akraba Guy de Lusignan tahta davet edildi ve II. Konstantin adıyla taç giydi; Hetumid hanedanı yerini Lusignanlara bıraktı.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1344-04-17", b:"II. Konstantin bir ayaklanmada öldürüldü", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["isyan","Lusignan","darbe-siyasi"],
  yer_id:"",
  d:"Yerli baronların yabancı (Latin) hanedana duyduğu güvensizlik yeniden patladı; II. Konstantin bir isyanda öldürüldü, yerine uzak akraba III. Konstantin geçti.",
  kaynak:"Bournoutian (2006); ikincil özetten derlendi", kapsam_genis:true },

{ t:"1375-04-14", b:"Memlûk fethiyle krallık sona erdi", tur:"son",
  onem:5, dunya:3, kapsam:"dis", etiket:["son", "Memluk", "Sis"],
  yer_id:"",
  d:"Memlûk Sultanlığı'nın son büyük seferi karşısında başkent Sis düştü ve son kral VI. Levon esir alındı; Kilikya Ermeni Krallığı 176 yıllık varlığının ardından tarihe karıştı. Kralın Kahire'deki esareti ve sonraki Avrupa'ya sürgünü bu çöküşün doğrudan sonucudur.",
  kaynak:"Bournoutian, A Concise History of the Armenian People (2006)", yer_kon:[37.4522,35.8283] },

{ t:"1375-06-01", b:"Kilikya Ermenilerinin Kıbrıs'a göçü", tur:"sosyal",
  onem:3, dunya:1, kapsam:"dis", etiket:["göç", "Kıbrıs", "diaspora"],
  yer_id:"", kapsam_genis:true,
  d:"Sis'in düşüşünün ardından soylular, din adamları ve halktan pek çok Ermeni, akraba Lusignan hanedanının yönettiği Kıbrıs Krallığı'na sığındı; ada üzerinde kalıcı bir Ermeni cemaati oluştu ve krallığın kültürel mirası (el yazmaları, zanaatlar) oraya taşındı.",
  kaynak:"Bournoutian (2006); genel Kıbrıs-Ermeni tarihi literatürü — kesin rakamlar doğrulanamadı, ikincil özetten derlendi" },

{ t:"1382-10-01", b:"VI. Levon Kahire esaretinden fidyeyle kurtuldu", tur:"sosyal",
  onem:3, dunya:2, kapsam:"dis", etiket:["esaret", "fidye", "Kastilya"],
  yer_id:"", kapsam_genis:true,
  d:"Krallığın son kralı VI. Levon, Sis'in düşüşünden sonra ailesiyle Kahire'de yedi yıl esir tutuldu; Kastilya Kralı I. Juan'ın ödediği fidyeyle 1382'de serbest bırakıldı ve Fransa'ya sığınarak ömrünün geri kalanını Avrupa saraylarında Haçlı seferi çağrısı yaparak geçirdi; 1393'te Paris'te öldü, Saint-Denis yakınındaki Célestins kilisesine gömüldü.",
  kaynak:"Bournoutian (2006); genel Lusignan hanedanı literatürü — ikincil özetten derlendi, doğrudan doğrulama önerilir" },


];

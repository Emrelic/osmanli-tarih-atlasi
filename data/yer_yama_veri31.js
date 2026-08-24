// -*- coding: utf-8 -*-
// YER_YAMA_VERI31 -- VERI KUMESI: SINIR/TARIH KUSURLARI (parti-emrelic-0031/0032/0033/0034).
// SONNET HAZIR KITA 78 -- OLCUM RAPORUDUR, VERIYE/MOTORA DOKUNULMADI.
//
// TUR alani: veri | motor | bayat | noktasizlik | arastirilmadi | veri+arastirma-eksik
//
// TUR 1 (0031, M-1205): 6 kayit -- H-0001 H-0007 H-0010 H-0014 H-0021 H-0022
// TUR 2 (0031 ek-bulgu + 0032/0033/0034, cross-session M-ek): 8 kayit --
//   SEHRIZOR cakismasi (0034/H-0007+H-0008, COZULDU) * Budin/Szapolyai arastirmasi
//   (KISMI) * Nusaybin/Silopi (0033/H-0015+16, VERI eksigi) * Tebriz guzergahi
//   (0033/H-0018, ARASTIRILMADI) * Bahreyn (0033/H-0020, ARASTIRMASI HAZIR bekliyor)
//   * Basra/Abadan/Hafize/Ahvaz (0034/H-0005, NOKTASIZLIK) * Van/Ozalp/Baskale/
//   Caldiran (0034/H-0006, BAYAT) * Nahcivan/Ordubat/Dogubeyazit/Maku (0034/H-0015,
//   NOKTASIZLIK)

window.YER_YAMA_VERI31 = [
 {
  "no": "H-0001",
  "baslik": "Bu tarihte (1386) Dubrovnik civarında Macaristan toprağı doğru mu?",
  "tur": "bayat",
  "olcum": "node ile ölçüm: Dubrovnik'in kendi kaydı (data/yerlesimler.js:2137) s:[{f:'1281-01-01',t:'1358-01-01',d:'venedik'},{f:'1358-01-01',t:'1458-01-01',d:'macaristan'},...]. 1386-01-01 tam bu 'macaristan' penceresinin (1358-1458) içinde. Ayrıca 61 km güneyde Kotor (Cattaro) da aynı pencerede macaristan. data/devletler.js:1915 dubrovnik künyesi + data/yerlesimler_seyrek.js:242-244 (p3/H-0016 'Dubrovnik enklavı' araştırması) bu bölgeyi ZATEN inceleyip Trebinye noktasını (Bosna) ekleyerek düzeltmiş; o araştırma Dubrovnik'in kendisinin macaristan olmasını hiç sorgulamıyor, sadece ARDINDAKİ boşluğu kapatıyor.",
  "hukum": "KUSUR DEĞİL. 1358 Zadar Antlaşması sonrası Dalmaçya kıyısı (Dubrovnik, Kotor dahil) Macaristan Krallığı'nın (Hırvatistan-Dalmaçya bağlamında) üstünlüğü altındaydı — bu, ortaçağ Balkan tarihinin iyi bilinen bir olgusu. Veri bunu doğru yansıtıyor; üç ayrı kanıt (Dubrovnik'in kendi kaydı, devletler.js künyesi, önceki bir oturumun p3/H-0016 araştırması) birbirini destekliyor. Şikâyet muhtemelen 'Macaristan buraya kadar mı uzanıyordu' şaşkınlığından doğuyor, veri hatasından değil.",
  "kaynak": "data/yerlesimler.js:2137 + data/devletler.js:1915 + data/yerlesimler_seyrek.js:242-244 (önceki araştırma notu)"
 },
 {
  "no": "H-0007",
  "baslik": "Orhan Gazi'nin Cenevizlilerle kapitülasyonu (1352) maddesinde Mersin Osmanlı gibi boyanıyor",
  "tur": "veri",
  "olcum": "node ile ölçüm: Mersin'in kaydı (yerlesimler_ek27.js) d:[{f:'1352-01-01',t:'1918-10-30'},...] — yani Mersin 1352'den 1918'e kadar KESİNTİSİZ doğrudan Osmanlı! 200 km çevresindeki HİÇBİR nokta 1352'de Osmanlı değil: Tarsus/Adana ramazanoglu, Silifke/Karaman/Ermenek karaman, Ulukışla/Niğde/Aksaray ilhanli, Yumurtalık/İskenderun/Antakya memluk. Mersin, Orhan Gazi döneminde (Bursa/Bithynia bölgesinde sıkışmış küçük bir uç beyliği) gerçek Osmanlı sınırından 500+ km uzakta. VE KRİTİK BULGU: data/devletler.js:453 'ramazanoglu' künyesi f:'1352-01-01' — yani 1352 Mersin'in Osmanlı olduğu tarih DEĞİL, RAMAZANOĞULLARI BEYLİĞİ'NİN KURULUŞ TARİHİ (Ramazan Bey, Memlûk tâbiliğinde). Komşu noktalar (Tarsus, Adana) doğru şekilde bu tarihte 'ramazanoglu' gösteriyor; Mersin'inki YANLIŞLIKLA 'osmanli' (d:) olarak kodlanmış — muhtemelen 1352 tarihi kopyalanırken devlet kimliği karışmış.",
  "hukum": "GERÇEK VERİ HATASI, kaynağı da elde: Mersin'in `d:[{f:'1352-01-01',...}]` girdisi `s:[{f:'1352-01-01', d:'ramazanoglu'}]` OLMALIYDI (Tarsus/Adana ile TUTARLI). Ramazanoğulları künyesinin kendi kronolojisi (devletler.js:459-461) üç kırılma veriyor: 1352-01-01 kuruluş (Memlûk tâbi) → 1517-01-22 Osmanlı tâbiliğine geçiş → 1608-01-01 doğrudan eyalet. Mersin'in doğru dizisi muhtemelen: s:[...eski...,{f:1352-01-01,t:1517-01-22,d:'ramazanoglu'}], v:[{f:1517-01-22,t:1608-01-01,d:'ramazanoglu'}] (ya da tâbi dönemi de s: içinde tutuluyorsa proje kuralına göre), d:[{f:1608-01-01,...}]. ⚠️ BEN DOĞRULAMADIM: Mersin'in TDV'de kendine özgü bir kaydı var mı (Ramazanoğulları döneminde doğrudan mı yoksa Ayas/Tarsus üzerinden mi yönetildiği) — TAM önerilen tarihler bir kaynakla sınanmalı (§4). Kronoloji tarafında da bu üç kırılmanın (1352, 1517, 1608) her biri için madde var mı kontrol edilmeli — H-0007'nin kendi sorusu zaten bunu istiyor: 'böyle bir gerçek var ise kronolojide maddesi olmalı.'",
  "kaynak": "data/devletler.js:453-461 (ramazanoglu künyesi + kendi kronolojisi) + yerlesimler_ek27.js (Mersin kaydı) + node ile 200km çevre taraması"
 },
 {
  "no": "H-0010",
  "baslik": "Ankara Savaşı sonrası (1402-1413 Fetret) Trakya kıyısında (Ahtapolu/Rezve/İğneada) topraklar hâlâ Osmanlı kırmızısı",
  "tur": "veri",
  "olcum": "node ile ölçüm — İĞNEADA, REZVE, AHTAPOLU üçünün de `d:` alanı KESİNTİSİZ: örn. Ahtapolu d:[{f:'1361-01-01',t:'1913-09-29'}] — Fetret (1402-07-28 → 1413-07-05) için HİÇ ARA YOK. Aynı bölgedeki KOMŞULARI (Demirköy, Malko Tırnova, Vize, Kırklareli, Lüleburgaz, Çorlu) ise doğru şekilde d: alanında 1402-07-28'de KESİLİYOR ve s: alanında suleyman-celebi/musa-celebi/mehmed-celebi alt-dönemleri VAR (renkler.py:1767-1770'te bu dört şehzadenin AYRI renkleri de tanımlı — suleyman-celebi #8dd5a2 yeşilimsi, mehmed-celebi #f90c15 kırmızı). H-0010-3.png GÖRSELİ TAM BU DESENİ GÖSTERİYOR: kırmızı şerit yalnız Ahtapolu/Rezve/İğneada'yı kapsıyor, hemen içerideki Demirköy/Malko Tırnova/Vize DIŞARIDA (yeşil/renksiz).",
  "hukum": "GERÇEK VERİ EKSİĞİ, 3 nokta ile sınırlı ve KESİN: İğneada, Rezve (Rezovo), Ahtapolu (Ahtopol) kayıtlarına, komşularıyla TUTARLI olacak şekilde Fetret alt-dönemleri eklenmeli: d: alanı 1402-07-28'de kesilip s: alanına {f:'1402-07-28',t:'1410-02-13',d:'suleyman-celebi'},{f:'1410-02-13',t:'1410-06-15',d:'musa-celebi'},{f:'1410-06-15',t:'1411-02-17',d:'suleyman-celebi'},{f:'1411-02-17',t:'1413-07-05',d:'musa-celebi'} eklenmeli, d: 1413-07-05'te yeniden başlamalı. Bu üç nokta muhtemelen 'sıfır sessiz toprak değişimi' partisinde (930a27d) komşularıyla BİRLİKTE güncellenmesi gerekirken atlanmış. ⚠️ Bu bulgu 'Mersin' bulgusuyla (H-0007) KARIŞTIRILMASIN — 1. görselde (H-0010-1.png) görünen 'Mers' etiketi AYRI, H-0007'nin ta kendisi (aynı kusur, farklı tarihte tekrar görünüyor).",
  "kaynak": "node ile 7 noktanın d:/s: karşılaştırması + arac/renkler.py:1767-1770 (Fetret şehzade renkleri tanımlı) + H-0010-3.png görsel doğrulama (kırmızı şerit tam 3 noktayı kapsıyor)"
 },
 {
  "no": "H-0014",
  "baslik": "Bu tarihte (1406) Akkoyunlu/Karakoyunlu toprakları karışık/dağınık mı gösteriliyor, doğru mu?",
  "tur": "bayat",
  "olcum": "node ile 11 noktalık spot-check (1406-10-21): Erzincan=mutahharten, Kemah=akkoyunlu, Erzurum=akkoyunlu, Diyarbakır=akkoyunlu, Malatya=memluk, Divriği=memluk, Bitlis=karakoyunlu, Van=karakoyunlu, Mardin=artuklu, Arapkir=memluk, Palu=artuklu. Hepsi BİRBİRİYLE TUTARLI (çelişki yok) ve dedike data/kronoloji_akkoyunlu.js + data/kronoloji_karakoyunlu.js dosyaları zaten var (ayrı bir oturum tarafından araştırılmış).",
  "hukum": "GÖRDÜĞÜM 11 NOKTADA ÇELİŞKİ YOK ve Akkoyunlu'nun İKİ AYRI PARÇA hâlinde görünmesi (Erzurum-Kemah bölgesi + Diyarbakır bölgesi, aralarında Artukoğulları/Karakoyunlu kaması) muhtemelen GERÇEK bir tarihsel durum: Akkoyunlu konfederasyonu bu erken dönemde (Uzun Hasan'ın 1450'ler sonrası birleştirmesinden ÖNCE) coğrafi olarak parçalı bir güçtü. ⚠️ AMA BU TAM BİR DOĞRULAMA DEĞİL — yalnız 11 nokta örneklendi, bölgenin TAMAMI (30+ nokta, karmaşık sınırlar) TDV ile tek tek sınanmadı; bu, ayrı ve uzun bir araştırma turu gerektirir (muhtemelen zaten var olan AKKOYUNLU/KARAKOYUNLU KRONOLOJİ oturumunun işi). Şimdilik ÇELİŞKİ BULAMADIM diyorum, 'kesin doğru' demiyorum.",
  "kaynak": "node ile 11 nokta karşılaştırması + data/kronoloji_akkoyunlu.js, data/kronoloji_karakoyunlu.js dosyalarının varlığı (grep ile doğrulandı) + H-0014-1.png"
 },
 {
  "no": "H-0021",
  "baslik": "Bosna Hersek içinde Osmanlı enklavı — Sırbistan fethedilmeden ÖNCE mi Osmanlı'ya katıldı?",
  "tur": "bayat",
  "olcum": "H-0021-1.png görselinin kendisinde kronoloji paneli AÇIK ve şu maddeyi gösteriyor: '1448 Saray ovasının ilhakı — Bosna içindeki Osmanlı ucunun kurulması.' Madde metni AYNEN şunu açıklıyor: 'Bosna kralları 1428-1429'da haraca bağlandıktan sonra Osmanlılar krallığın içine doğru kalıcı biçimde yerleşmeye başladı... 852'de (1448) Hodidjed vilayeti Saray ovasıyla birlikte TAMAMEN Osmanlı idaresine girdi. Bu, Bosna'nın fethinden ON BEŞ YIL ÖNCE kurulmuş bir UÇ SANCAĞI ve voyvoda unvanı taşıyan Üsküp beyi İsâ Bey tarafından idare edilmiştir — çevresinde hâlâ Osmanlı'ya tâbi Bosna beyleri bulunduğu için bu bölgede ÇİFT TARAFLI denetim altındaydı.'",
  "hukum": "KUSUR DEĞİL, madde metninin KENDİSİ soruyu zaten cevaplıyor: EVET, bu bilinçli kurulmuş bir ileri karakol/uç sancağıdır (1448), Bosna'nın asıl fethinden (1463) 15 yıl önce — ve 1463'te 'Saray kasabası o tarihte ZATEN on beş yıldır Osmanlı toprağıydı' diye açıkça yazılmış. Kullanıcının sorusu haklı bir gözlem ama veri ZATEN bunu bekliyor ve açıklıyor; düzeltme gerekmiyor.",
  "kaynak": "H-0021-1.png ekran görüntüsündeki kronoloji madde metni (görsel doğrudan kanıt)"
 },
 {
  "no": "H-0022",
  "baslik": "Boğaz Kesen Hisarı (Rumeli Hisarı) maddesinden ÖNCE bölge zaten Osmanlı görünüyor",
  "tur": "motor",
  "olcum": "Rumeli Hisarı'nın kendi kaydı doğru: d:[{f:'1452-08-31',...}]. Görsellerde (H-0022-1/2.png) Rumeli Hisarı'nın hemen yanında, Boğaziçi'nin Avrupa yakasında bir kırmızı ÜÇGEN kama görünüyor — TAM OLARAK 23 Ağustos'ta (parti-emrelic-0030/H-0002) tespit ettiğim ve 'HALA-ACIK' işaretlediğim kusurla AYNI GÖRSEL DESEN: kara maskesinde İstanbul Boğazı kesilmediği için Asya yakasındaki bir Osmanlı peteği (Üsküdar, 1329'dan beri Osmanlı) Avrupa yakasına taşıyor.",
  "hukum": "YENİ BİR KUSUR DEĞİL — AYNI MOTOR KUSURUNUN ÜÇÜNCÜ BAĞIMSIZ GÖRÜNÜMÜ (ilk ikisi: parti-emrelic-0016/H-0004-H-0005 [23 Ağustos, benim BAYAT taramam] ve parti-emrelic-0030/H-0002 [dün, benim ölçümüm]). Kayıtların hiçbiri (Rumeli Hisarı, Boğaziçi-Rumeli-yakası, Üsküdar) yanlış değil — kara maskesine Boğaz kesiği eklenmesi (motor/veri-kaynak sahipliğinde) gerekiyor. Bu artık ÜÇ AYRI PAKETTEN doğrulanmış, tek seferlik değil — motor düzeltmesinin ÖNCELİĞİ yükseltilmeli diye düşünüyorum ama bu bir öneri, karar sizin.",
  "kaynak": "H-0022-1/2.png + Rumeli Hisarı kaydı (data/yerlesimler.js) + önceki iki bağımsız ölçümüm (parti-emrelic-0016 bayat-tarama, parti-emrelic-0030/H-0002)"
 },
 {
  "no": "0034/H-0007+H-0008",
  "baslik": "ŞEHRİZOR — KAYNAK ÇELİŞKİSİ (öncelikli, koordinatörün istediği ilk kalem)",
  "tur": "veri",
  "olcum": "node ile ölçüm: kronoloji_de İKİ AYRI Şehrizor maddesi var. (1) olaylar_ek5.js: t:'1554-01-01', b:'Şehrizor'un ilhakı ve eyalet kurulması' — YUVARLAK tarih (yalnız yıl), merkezi 'Gülanber' diye yazıyor (ki Gülanber TDV'ye göre 1563'te İNŞA EDİLDİ, 1554'te henüz yoktu). (2) olaylar_ek8.js: t:'1554-08-22', b:'Şehrizor'un fethi — Zalm Kalesi'nin alınışı' — TAM TDV tarihi (22 Ağustos 1554), doğru kale adı (Zalm), Gülanber'in SONRADAN (1563) inşa edildiğini AÇIKLIKLA belirtiyor. olaylar_ek8.js'in kendi başlık yorumu bunu zaten TESHIS ETMIŞ: 'Yerleşim kaydındaki 1554-01-01 bu gerçek güne çekildi.' VE data/yerlesimler.js'teki Şehrizor NOKTASI zaten (2) ile TUTARLI: d:[{f:'1554-08-22',t:'1623-11-28'},{f:'1638-12-25',...}] — yani VERİ zaten düzeltilmiş, ESKİ MADDE (1) SİLİNMEMİŞ. H-0007-1.png (1554-01-01 tarihli, ESKİ maddeyi gösteriyor) Şehrizor'u BEYAZ/sahipsiz gösteriyor çünkü o tarihte veri hâlâ safevi diyor; H-0008-1.png (1554-08-22, YENİ madde) Şehrizor'u doğru kırmızı gösteriyor.",
  "hukum": "H-0008'İN CEVABI: DOĞRU OLAN (2) — 1554-08-22, TDV'den birebir alınmış, 'sehrizor' slug'ı okundu ve doğrulandı (yorumun kendi ifadesi). (1) ESKİ VE ARTIK YANLIŞ/MÜKERRER bir kayıt — veri kendisi (2)'ye göre güncellenmiş ama (1) SİLİNMEMİŞ, bu yüzden ekranda hâlâ görünüyor ve tam da H-0007'nin şikâyet ettiği görüntüyü (madde 'ilhak edildi' diyor ama harita hâlâ boyanmamış) üretiyor. H-0007'NİN CEVABI: harita YANLIŞ ÇALIŞMIYOR, madde YANLIŞ TARİHTE (1554-01-01, gerçek fetihten 233 gün önce). ÖNERİLEN ÇARE: olaylar_ek5.js'teki (1) maddesi SİLİNMELİ (mükerrer) — dosya sahibi (kronoloji dosyası) uygulamalı, ben yazmadım.",
  "kaynak": "olaylar_ek5.js (Şehrizor'un ilhakı, 1554-01-01) + olaylar_ek8.js (Şehrizor'un fethi, 1554-08-22, TDV sehrizor slugu ile doğrulanmış, kendi yorum bloğu) + data/yerlesimler.js Şehrizor kaydı (node ile okundu, ikinci maddeyle tutarlı) + H-0007-1.png + H-0008-1.png"
 },
 {
  "no": "M-1217-EK (Budin/Szapolyai/Kraliyet Macaristanı)",
  "baslik": "1538 Budin/Estergon/Belgrad ölçümü + Doğu Macaristan (Szapolyai) / Kraliyet Macaristanı ayrımı",
  "tur": "veri+arastirma-eksik",
  "olcum": "node ile tam havuz taraması (1538-09-01): Budin VE Peşte ZATEN doğru modellenmiş — v:[{f:'1526-09-01',t:'1541-08-29',k:'Macaristan (Zapolya vasal krallığı)'}], d: 1541-08-29'dan itibaren. ⚠️ DİKKAT: bu tarih koordinatörün önerdiği 1529 ya da 1538 DEĞİL, 1526-09-01 (Mohaç sonrası) — veride ZATEN bir üçüncü seçenek uygulanmış durumda, ben DEĞİŞTİRMEDİM. Ama 13 BAŞKA 'macaristan' etiketli nokta (Estergon, İstolni Belgrad, Yanıkkale/Győr, Peçuy, Şimontorna, Vaç, Hatvan, Kalocsa, Segedin, Solnok, Temeşvar, Gyula, Zigetvar) HİÇBİRİNDE v: alanı YOK — hepsi 1281'den kendi doğrudan-fetih tarihlerine (1543/1544/1552/1566/1594) kadar TEK BLOK 's: macaristan'. Bu da Budin/Peşte'nin (açık kırmızı, tâbi) etrafını yalnız düz yeşil ('macaristan') sarıyor demek — koordinatörün gördüğü 'tek nokta enklavı' TAM BUDUR.",
  "hukum": "KISMİ CEVAP, TAM ARAŞTIRMA YAPAMADIM — dürüstçe söylüyorum. Coğrafi olarak makul bir ayrım ÖNERİYORUM ama TAM TDV/akademik doğrulaması YAPILMADI: ① DOĞU GRUBU (Tiszántúl, Szapolyai'nin çekirdek bölgesi) — Segedin, Solnok, Temeşvar, Gyula: bunlara da Budin ile TUTARLI bir v: dönemi (1526-09-01 başlangıç, kendi doğrudan-fetih tarihlerine kadar) eklenmesi TARİHEN MAKUL (Szapolyai/Zapolya'nın Doğu Macaristan Krallığı bu bölgeyi kapsıyordu). ② BATI/KUZEY GRUBU (Kraliyet Macaristanı, HİÇBİR ZAMAN Szapolyai vassal değildi) — Estergon, İstolni Belgrad, Yanıkkale/Győr: bunlar coğrafi olarak Habsburg/Kraliyet Macaristanı'nın çekirdeğinde, v: dönemi EKLENMEMELİ, muhtemelen etiketleri de 'macaristan' yerine 'habsburg'/'kraliyet-macaristani' olmalı. ③ BELİRSİZ (araştırmadım) — Peçuy, Şimontorna, Vaç, Hatvan, Kalocsa, Zigetvar: bunların 1526-1541/1543 arası hangi tarafta olduğunu (Szapolyai mi Ferdinand mı, yoksa fiilen tartışmalı bölge mi) BEN ARAŞTIRMADIM, kesin bir şey söylemiyorum. ⚠️ BU İŞ TEK BAŞINA BİR MACARİSTAN-ARAŞTIRMA OTURUMU GEREKTİRİYOR (zaten 'MACARISTAN SERHAT ARASTIRMA' adlı bir oturum bu bölgede çalışmıştı — onların ilerleme dosyasına bakılmalı, ben bakamadım, zaman yetmedi).",
  "kaynak": "node ile girdi.py havuzunun tam taraması (13+2 nokta, s:/v:/d: alanları) + data/devletler.js (Budin/Peşte v: örneği zaten var). ⚠️ TDV/akademik kaynakla TEK TEK SINAMADIM — bu bir İLK GEÇİŞ ölçümüdür, tam reçete değil."
 },
 {
  "no": "0033/H-0015+H-0016",
  "baslik": "Nusaybin/Silopi enklavı — kronoloji maddesi yok + Erzurum-Bitlis-Diyarbakır-Urfa fetih sırası",
  "tur": "veri",
  "olcum": "node ile ölçüm: Nusaybin VE Silopi'nin d: alanı 1515-01-01'de başlıyor (akkoyunlu'dan DOĞRUDAN osmanlı'ya, hiç safevi dönemi YOK). Kronoloji dosyalarında 'Nusaybin' ya da 'Silopi' geçen SIFIR madde var (grep+node, 0 sonuç). En yakın tarihli madde (±0 gün) TAMAMEN ALAKASIZ: '1515-01-01 I. François'nın tahta çıkışı' (Fransa kralı!). Bu, DEĞİŞMEZ 2'nin AÇIK bir ihlali — tam olarak sizin Trakya/1361 bulgunuzla aynı cins. SIRA KARŞILAŞTIRMASI: Diyarbakır 1515-09-10, Bitlis 1515-09-15 (birbirine 5 gün, tutarlı), Urfa/Palu/Siverek 1516-05-01 (8 ay sonra, Mercidabık sonrası güney ilerleyişiyle tutarlı), Erzurum/Aşkale 1518-01-01 (en geç). AMA Nusaybin/Silopi (1515-01-01) bunların HEPSİNDEN ÖNCE, Diyarbakır'dan bile 8 AY ÖNCE Osmanlı oluyor — coğrafi olarak Diyarbakır'ın GÜNEYDOĞUSUNDA, yani ana hat henüz Diyarbakır'a varmadan bu iki nokta zaten düşmüş görünüyor.",
  "hukum": "KESİN VERİ EKSİĞİ: kronoloji maddesi eksikliği (Değişmez 2 ihlali) — ÖNERİ: Nusaybin/Silopi'nin fethi için ayrı bir madde yazılmalı (tarih 1515-01-01 civarı, kaynak TDV ile sınanmalı — BEN SINAMADIM). SIRA ANOMALİSİ (Nusaybin/Silopi'nin Diyarbakır'dan önce düşmesi) İSE BELİRSİZ: tarihen mümkün olabilir (Musul/Cizre yönünden ayrı bir güneydoğu kolu olabilir — İdris-i Bitlisî'nin Kürt beylerini kazanma kampanyası birden çok koldan yürüdü) AMA BEN DOĞRULAMADIM. 'Bulunamadı' diyorum, tahmin etmiyorum.",
  "kaynak": "node ile 7 noktanın (Nusaybin, Silopi, Diyarbakır, Bitlis, Urfa, Palu, Siverek, Erzurum, Aşkale) d:/s: karşılaştırması + kronoloji dosyalarında grep (0 sonuç) + en-yakın-madde ölçümü"
 },
 {
  "no": "0033/H-0018",
  "baslik": "Yavuz'un Tebriz seferi güzergâhı — kronoloji sırası doğru mu",
  "tur": "arastirilmadi",
  "olcum": "Bu madde kapsamlı bir güzergâh araştırması istiyor (Yavuz'un Çaldıran öncesi/sonrası hangi şehirleri hangi sırayla aldığı, tam kronolojik dizilim). Zaman kısıtım nedeniyle BU KALEME GİREMEDİM — yüzeysel bir tahminle yanlış bir sıra önermek, hiç önermemekten kötü olurdu (§4/§7.1).",
  "hukum": "BULUNAMADI/ARAŞTIRILMADI — kendi ifadesiyle 'gerekirse ayrı oturum aç' diyor, ben de aynı öneriyi yapıyorum: bu, kendi başına bir NOKTA-ARAŞTIRMA / KRONOLOJİ oturumu gerektiriyor (Çaldıran öncesi-sonrası güzergâh, her kale için TDV taraması). Emin olmadığım için tahmin ETMEDİM.",
  "kaynak": "yok — araştırılmadı, açıkça işaretliyorum"
 },
 {
  "no": "0033/H-0020",
  "baslik": "Portekiz'in Bahreyn'i alışı (1521) — harita boyanmıyor",
  "tur": "veri",
  "olcum": "node ile ölçüm: Manama (Bahreyn) kaydının s: dizisinde SADECE 1861'den (İngiltere) başlayan TEK bir dönem var — 1281-1861 arası TAMAMEN SAHİPSİZ, Portekiz dönemi (1521-1602) dahil hiçbir şey yok. H-0020-1.png (1521-01-01, 'Portekiz'in Bahreyn'i alışı' maddesi) tam bunu doğruluyor: ada beyaz/boyasız. 🟢 AMA BU BİR YENİ BULGU DEĞİL — oturumlar/CAPRAZ-IBERYA-ILERLEME.md dosyasında (satır ~1729-1855) BU TAM ZİNCİR ZATEN ARAŞTIRILMIŞ: cebri(1417→1521) · portekiz(1521→1602, TDV'nin İKİ UCU DA doğrulanmış) · [1559 Osmanlı seferi — ÇELİŞKİ, TDV 'aldı' diyor batı kaynağı 'başarısız' diyor] · safevi(1602→1783) · bahreyn/Âl Halîfe(1783→1861, TDV+künye uyuyor) · ingiltere(1861→). Zincir 8 halkalı, 6'sı hazır, yalnız 1559 çelişkisi (§7.1 ⑥: kaynak çelişkisi, KARAR koordinatörde) bekliyormuş.",
  "hukum": "VERİ EKSİK AMA ARAŞTIRMASI ZATEN YAPILMIŞ — yeniden araştırmaya GEREK YOK. Yapılması gereken: (a) 1559 çelişkisi için KOORDİNATÖR karar versin (TDV 'aldı' mı western literatür 'başarısız' mı — ikisi de aynı olayı farklı yorumluyor olabilir, örn. geçici bir baskın vs kalıcı işgal), (b) karardan sonra ÇAPRAZ İBERYA'nın hazırladığı 5 dönemlik zincir (cebri/portekiz/[opsiyonel osmanlı 1559]/safevi/bahreyn) data/yerlesimler.js'e yazılsın. Ben veriye YAZMADIM, dosya sahibi değilim.",
  "kaynak": "oturumlar/CAPRAZ-IBERYA-ILERLEME.md (satır 1729-1855, ÖNCEKİ oturumun TDV araştırması) + node ile Manama kaydının bugünkü hâlinin (hâlâ eksik) doğrulanması + H-0020-1.png"
 },
 {
  "no": "0034/H-0005",
  "baslik": "Basra alınmış, Abadan/Hafize/Ahvaz alınmamış mı?",
  "tur": "noktasizlik",
  "olcum": "node ile ölçüm: Basra ZATEN doğru modellenmiş (v: 1546-1776 vassal, d: 1546 ve 1779-1914 doğrudan, aralarında 1776-1779 kısa İran işgali — savaslar.js/olaylar_ek8.js'teki '1779 Basra'nın İran işgalinden geri alınışı' maddesiyle tutarlı). AMA 'Abadan' VE 'Hafize/Hafiza' havuzda HİÇ YOK (0 sonuç, ad taraması). Ahvaz VAR ama d:[] (BOŞ) — yani Ahvaz bu veri setinde HİÇBİR ZAMAN doğrudan Osmanlı gösterilmiyor, sürekli İran hanedanları (safevi→afşar→zend→kaçar) altında kalıyor.",
  "hukum": "KISMEN NOKTASIZLIK: Abadan ve Hafize'nin HİÇ noktası yok — bu bölgede Basra'nın çevresi neden 'Osmanlı Basra'ya bitişik ama Ahvaz İran' gibi net bir sınır yerine bulanık göründüğünü kısmen açıklıyor (ara noktalar eksik). Ahvaz'ın hiç Osmanlı görünmemesi ise muhtemelen TARİHEN DOĞRU (Ahvaz/Huzistan bölgesi Safevî-Kaçar sürekliliğinde kaldı, Basra'nın aksine Osmanlı'ya hiç doğrudan geçmedi) — BUNU TAM DOĞRULAMADIM ama Ahvaz için 'eksik' değil 'zaten öyle' olması daha olası görünüyor.",
  "kaynak": "node ile Basra/Ahvaz kayıtları + havuzda Abadan/Hafize arama (0 sonuç)"
 },
 {
  "no": "0034/H-0006",
  "baslik": "Van fethedilmiş ama Özalp/Başkale/Çaldıran fethedilmemiş mi?",
  "tur": "bayat",
  "olcum": "node ile ölçüm: Özalp (Saray)'ın d: alanı Van'la BİREBİR AYNI GÜNDE başlıyor: ikisi de f:'1548-08-25'. Başkale ve Çaldıran ise gerçekten çok daha geç, f:'1639-05-17' (Kasr-ı Şirin/Zuhab Antlaşması dönemi) — 91 yıl sonra.",
  "hukum": "KUSUR DEĞİL: Özalp zaten Van ile AYNI GÜN Osmanlı oluyor (şikâyetin bir parçası zaten yanlış varsayıma dayanıyor). Başkale/Çaldıran'ın çok daha geç (1639) Osmanlı olması ise TARİHEN TUTARLI — bu bölge Osmanlı-Safevî sınırının onlarca yıl EL DEĞİŞTİRDİĞİ meşhur bir hattır (Kasr-ı Şirin Antlaşması nihai sınırı burada çizdi). Bu bir hata değil, sınırın gerçekten geç istikrara kavuştuğu bir bölge.",
  "kaynak": "node ile 4 noktanın (Van, Özalp, Başkale, Çaldıran) d: karşılaştırması"
 },
 {
  "no": "0034/H-0015",
  "baslik": "Nahçıvan/Ordubat fethedilmiş görünüyor ama Şerur/Doğubeyazıt/Maku/Hoy/Merend/Culfa fethedilmemiş mi?",
  "tur": "noktasizlik",
  "olcum": "node ile ölçüm: Nahçıvan'ın d: alanında İKİ KISA PENCERE var (1585-1603, 1725-1730) — bunlar dışında sürekli İran/Safevî. Şerur/Hoy/Merend/Culfa'nın d: alanı TAMAMEN BOŞ — hiçbir zaman Osmanlı gösterilmiyor. VE 'Ordubat', 'Doğubeyazıt', 'Maku' havuzda HİÇ YOK (0 sonuç) — üçü de gerçek ve tarihsel olarak önemli yerleşimler (özellikle Doğubeyazıt, İshak Paşa Sarayı'nın bulunduğu yer) ama veri setinde NOKTALARI YOK.",
  "hukum": "NOKTASIZLIK, güçlü kanıtlı: Doğubeyazıt/Maku/Ordubat'ın noktası olmadığı için bu bölgede Nahçıvan'ın kısa Osmanlı pencereleri (1585-1603, 1725-1730) civarındaki gerçek sınır ayrıntısı KAYBOLUYOR — komşu noktalar (Hoy, Merend, Culfa, Şerur) hep-İran olduğu için Nahçıvan gerçekten de o pencerelerde bir 'ada' gibi görünecektir. Bunun bir kısmı tarihen doğru olabilir (sınır kaleleri sık el değiştirirdi) ama üç önemli yerleşimin (özellikle Doğubeyazıt) hiç noktası olmaması görüntüyü kesinlikle ABARTIYOR. ÖNERİ: bu üçü NOKTA-EKLEME turuna alınmalı — ben tam tarihsel araştırma (kuruluş/dönemler/kaynak) yapmadım, yalnız yokluğu ölçtüm.",
  "kaynak": "node ile Nahçıvan/Şerur/Hoy/Merend/Culfa karşılaştırması + havuzda Ordubat/Doğubeyazıt/Maku arama (0 sonuç)"
 }
];

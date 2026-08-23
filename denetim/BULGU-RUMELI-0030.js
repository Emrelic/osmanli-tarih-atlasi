// -*- coding: utf-8 -*-
// YER_YAMA_RUMELI -- RUMELI VE TRAKYA: BES HARITA KUSURU (M-1187, parti-emrelic-0030).
// SONNET HAZIR KITA 78 -- OLCUM RAPORUDUR, VERIYE/MOTORA/ARAYUZE DOKUNULMADI.
// Her kalemde TUR alani hangi carenin gerektigini soyler; careler TERS:
//   veri               -- kaydin DONEMI yanlis, tarih duzeltilir
//   noktasizlik        -- o bolgede nokta YOK, en yakin petek yutuyor (S2 emilme)
//   motor              -- kara maskesi/sinir kesigi eksik (kod, veri DEGIL)
//   arayuz             -- veri dogru, GORSEL/ANIMASYON mantigi degismeli (js/app.js)
//   arastirilmis-karar -- onceki bir oturum ZATEN arastirip bilincli tercih yapmis,
//                         KUSUR DEGIL

window.YER_YAMA_RUMELI = [
 {
  "no": "H-0002",
  "baslik": "Pelakanon Savaşı (1329) sonrası Boğaziçi'nin Rumeli yakası erken Osmanlı görünüyor",
  "tur": "motor",
  "olcum": "node ile ölçüm: Üsküdar'ın kendi kaydı d:[{f:'1329-06-01',...}] — Pelekanon zaferiyle (t:1329-06-10, savaslar.js:170) AYNI hafta Anadolu yakasında (Üsküdar, doğru) Osmanlı oluyor. Ama görselde (H-0002-1.png) 'Boğaziçi (Rumeli yakası)' adlı AVRUPA yakasındaki nokta hâlâ kendi kaydında s:[{f:1281,t:1453-05-29,d:'bizans'}] — yani KENDİSİ hâlâ bizans — buna rağmen o bölge haritada KOYU KIRMIZI (Osmanlı) boyanıyor. Rumeli Hisarı'nın kendi kaydı da doğru (f:1452-08-31), yani üç nokta da (Üsküdar, Boğaziçi-Rumeli-yakası, Rumeli Hisarı) KENDİ verilerinde doğru; boyanan renk yanlış.",
  "hukum": "Kök sebep zaten bilinen ve önceki bir pakette (parti-emrelic-0016 H-0004/H-0005) rapor edilmiş, HÂLÂ DÜZELTİLMEMİŞ bir motor kusuru: kara maskesinde İstanbul Boğazı KESİLMEMİŞ (Üsküdar ve İstanbul/Boğaziçi aynı kara bileşeninde). Üsküdar 1329'da Osmanlı olunca, boğaz kesiği olmadığı için ADA KURALI onun peteğinin Avrupa yakasına (Boğaziçi/Rumeli yakası noktasının üzerine) taşmasına izin veriyor — orası hâlâ kendi kaydında bizans olsa da GÖRSEL OLARAK kırmızı boyanıyor. Bu VERİ kusuru DEĞİL: üç noktanın da tarihleri doğru. Çare motor tarafında (kara maskesine Boğaziçi kesiği eklenmesi) — veri-kaynak/uret_petek.py sahipliğinde, ben dokunmadım.",
  "kaynak": "arac/girdi.py ile canlı veri okuma + H-0002-1.png görsel doğrulaması. Aynı kök sebep p0016/H-0004 ve H-0005'te (23 Ağustos BAYAT taraması, benim ölçümüm) zaten 'hala-acik' bulunmuştu — bugünkü görsel bunun HÂLÂ canlı yayında olduğunu kanıtlıyor."
 },
 {
  "no": "H-0002-ek1",
  "baslik": "2. görseldeki (Karamürsel yakını) küçük koyu üçgen",
  "tur": "motor",
  "olcum": "H-0002-2.png: kırmızı (Osmanlı) ve mavi (Bizans) bölgelerin sınırında, Karamürsel civarında küçük koyu kırmızı-mor bir ÜÇGEN görünüyor — iki komşu peteğin sınır çizgisinin tam üstünde, örtüşen/ince bir şerit.",
  "hukum": "Bu, aynı ailenin (Voronoi sınır çizgisi + iki farklı renkli dolgunun kenarda hafif örtüşmesi) küçük bir görsel yan etkisi gibi görünüyor — muhtemelen H-0018'de ayrıca bildirilen 'üçgen garip gösterim' ile AYNI SINIF (kenar örtüşmesi/anti-aliasing benzeri bir çizim sorunu). Kesin kök sebebini js/app.js'in çizim mantığına bakmadan (benim yetkim/görevim dışı — arayüz oturumu) doğrulayamam.",
  "kaynak": "H-0002-2.png görsel gözlem; kesinlik iddia etmiyorum, arayüz oturumuna havale edilmeli"
 },
 {
  "no": "H-0002-ek2",
  "baslik": "3. görseldeki (İznik yakını) koyu kırmızı/mor bölge — 'Bizans mavisi çekilmiyor mu' sorusu",
  "tur": "motor",
  "olcum": "H-0002-3.png: İznik'in hemen yanında/arkasında koyu mor-kırmızı bir ÜÇGEN görünüyor. İznik'in kendi kaydı s:bizans (1331-03-02'ye kadar) — 1329-06-01 tarihinde HÂLÂ bizans olmalı, yani o bölge MAVİ boyanmalıydı. Koyu mor renk, kırmızı (Osmanlı) ile mavinin (Bizans) ÜST ÜSTE bindiği bir karışım rengine benziyor.",
  "hukum": "Kullanıcının sorusu haklı bir gözlem: bu görüntü kırmızının mavinin üzerine opaklıkla eklenip altındaki maviyi tam kapatmadığı bir KATMAN/z-sıra sorununa işaret ediyor OLABİLİR. Ama aynı zamanda H-0002 ana bulgusuyla (Boğaz kesiği yok, Üsküdar peteği taşıyor) AYNI KÖKTEN de gelebilir: taşan Osmanlı peteği ile İznik'in kendi (küçülmüş) Bizans peteği burada çakışıp iki dolgunun kenarında bindirme oluşturuyor olabilir. İkisini ayırt etmek js/app.js çizim koduna bakmayı gerektiriyor — benim ölçüm alanımın (veri) dışında. Kesin ayrım için arayüz/motor oturumuna havale ediyorum; VERİYE dayalı bir düzeltme ÖNERMİYORUM çünkü hangi kodun sorumlu olduğunu doğrulamadım.",
  "kaynak": "H-0002-3.png görsel gözlem + İznik kaydı (s: bizans → 1331-03-02) node ile doğrulandı"
 },
 {
  "no": "H-0009",
  "baslik": "Rumeli'de büyük toprak alınmış görünüyor ama Pençik Kanunu (asker/vergi maddesi) maddesinde beliriyor + fetih sırası ters",
  "tur": "veri",
  "olcum": "node ile ölçüm: 'Pençik Kanunu — Yeniçeri Ocağı'nın temelinin atılması' maddesi (olaylar_ek5.js:109) t:'1361-01-01', yer_id:'Edirne' — TERİTORYAL BİR OLAY DEĞİL. Ama TAM O GÜNDE (1361-01-01) 12 Trakya yerleşimi (Lalapaşa · Kofçaz · Dereköy · Demirköy · İğneada · Rezve · Ahtapolu · Mustafapaşa · Havsa · Orestiada · Malko Tırnova · Vize) Osmanlı oluyor — hepsinin d:f alanı BİREBİR '1361-01-01'. H-0009-1.png görseliyle DOĞRULANDI: 133.000 km²lik kırmızı alan tam bu maddenin ekranında görünüyor.",
  "hukum": "Bu, BU OTURUMUN 23 Ağustos'ta (M-1168 bayat taraması, parti-emrelic-0025/H-0009) ZATEN teşhis ettiği ve 'hala-acik' işaretlediği kusurla BİREBİR AYNI kayıt/aynı kusur — bugünkü görsel onun HÂLÂ canlı yayında olduğunu kanıtlıyor. Reçete (o zaman da yazdım, hâlâ geçerli): Edirne çevresi (Mustafapaşa · Orestiada · Havsa · Lalapaşa) → 1361-03-01 SONRASINA (Edirne'nin fethinden sonra), Istranca+Karadeniz kıyısı (Kofçaz · Dereköy · Demirköy · İğneada · Rezve · Ahtapolu · Malko Tırnova · Vize) → 1371-09-26 SONRASINA (Çirmen Savaşı'ndan sonra) taşınmalı. ⚠️ BEN DOĞRULAMADIM — tarih önerisi TDV (edirne · vize · kirklareli · cirmen-savasi maddeleri) ile sınanmalı, ben sınamadım (§4).",
  "kaynak": "olaylar_ek5.js:109 + node ile 12 kaydın d:f alanı + H-0009-1.png görsel; önceki ölçüm: denetim/BAYAT-SONNET-HAZIR-KITA-78.json (parti-emrelic-0025/H-0009)"
 },
 {
  "no": "H-0010",
  "baslik": "Çorlu/Lüleburgaz'ın alınması ile Yeniçeri Ocağı'nın kuruluşu AYNI GÜNDE (1362-06-01) — harita değişimi yanlış maddeye bağlanıyor gibi görünüyor",
  "tur": "veri+arayuz",
  "olcum": "node ile ölçüm: 'Doğu Trakya'da ilerleyiş: Çorlu ve Lüleburgaz'ın alınışı' (olaylar_ek.js:22) t:'1362-06-01' — TERİTORYAL, doğru. 'Yeniçeri Ocağı'nın kuruluşu' (olaylar_ek14.js) t:'1362-06-01', yer_id:'Gelibolu' — KURUMSAL, TOPRAK DEĞİŞTİRMİYOR. İKİSİ DE BİREBİR AYNI GÜN. Madde metninin kendi notu zaten TDV'nin bunun için 'kesin bir tarih vermediğini, kademeli bir süreç olarak tarifledigini' söylüyor — yani 1362-06-01 zaten bir YAKLAŞIK/yuvarlak tarih, icat edilmiş bir kesinlik değil.",
  "hukum": "İKİ AYRI ÇARE mümkün, biri VERİ biri ARAYÜZ, ikisi de kısmi: (a) VERİ hafifletici: Yeniçeri Ocağı maddesinin tarihi zaten belirsiz/kademeli olduğu İÇİN birkaç ay kaydırılabilir (ör. 1362-09-01, zaten aynı yıl içindeki Rumeli Beylerbeyliği maddesiyle çakışmayacak bir gün) — bu çakışmayı ORTADAN KALDIRIR ama kullanıcının asıl istediği şey bu değil. (b) Kullanıcının kendi isteği AÇIKÇA bir ARAYÜZ değişikliği: 'her kronoloji maddesi ayrı ayrı oynatılmalı' — yani aynı güne denk gelen birden fazla maddenin harita animasyonlarının BİRBİRİNE KARIŞTIRILMAMASI. Bu js/app.js'in oynatma/animasyon mantığında bir değişiklik gerektiriyor, VERİ YAMASIYLA ÇÖZÜLMEZ. ⇒ (a) yardımcı bir azaltma olarak ÖNERİLEBİLİR ama asıl çözüm arayüz oturumuna aittir; ben karar vermiyorum, iki seçeneği de sunuyorum.",
  "kaynak": "olaylar_ek.js:22 + olaylar_ek14.js (Yeniçeri Ocağı kaydı) + H-0010-1.png (sağ paneldeki iki ardışık '1362 dolayı' maddesi görsel olarak doğrulandı)"
 },
 {
  "no": "H-0011",
  "baslik": "Gümülcine'nin fethi (1363) haritada kopuk görünüyor — aradaki topraklar (Meriç, Dedeağaç, Sofulu, İskeçe) daha GEÇ tarihli",
  "tur": "arastirilmis-karar",
  "olcum": "node ile ölçüm: Gümülcine d:f='1363-01-01'. Aradaki/çevresindeki noktalar HEPSİ DAHA GEÇ: Meriç (İpsala kuzeyi) f='1371-09-26', Dedeağaç f='1371-09-26', Sofulu f='1371-09-26', İskeçe f='1373-01-01'. Yani Gümülcine, kendisini Edirne'ye bağlayan koridordan 8-10 YIL ÖNCE Osmanlı oluyor — görselde (H-0011-1.png) tam da bunun sonucu olan bir 'ada' (kopukluk) görünüyor.",
  "hukum": "🟢 BU BİR KUSUR DEĞİL — ÖNCEDEN ARAŞTIRILMIŞ VE BİLİNÇLİ BİR KARAR. `data/yerlesimler.js:1264` civarındaki bir yorumda ÖNCEKİ bir oturum ZATEN bu tarihi ölçmüş ve şunu yazmış: 'Gümülcine'ye DOKUNULMADI: TDV onun için tek tarih vermiyor (1361 · 1363 · \"1371'den biraz önce\"), 1363 meşru bir rivayet.' Madde metninin kendisi de bunu tarihen destekliyor: Gazi Evrenos Bey'in Gümülcine'yi 'ileri karargâh' (forward outpost) olarak ele geçirdiğini yazıyor — yani leapfrog/uç akını tarzı bir fetih, tarihsel olarak alışılmadık değil (Osmanlı uç beyleri sık sık ilerideki stratejik noktaları önce alıp aradaki toprağı sonra temizlerdi). ⇒ 'Kopukluk' görsel olarak GERÇEK ama TARİHEN DE MUHTEMELEN DOĞRU bir leapfrog fetih düzenini yansıtıyor; rastgele bir tarih hatası değil. ⚠️ AMA: bu benim ÇIKARIMIM, TDV'nin 'ileri karargâh' ifadesini leapfrog conquest olarak yorumluyorum — kesin kanıt değil. Emre isterse aradaki koridora (Meriç-Dedeağaç arası) 1-2 ARA NOKTA eklenmesi görsel 'kopukluk'u yumuşatabilir (NOKTASIZLIK çaresi, tarihi değiştirmeden) ama bu bir zorunluluk değil, bir tercih.",
  "kaynak": "data/yerlesimler.js:1264 (önceki oturumun araştırma notu, TDV 'ferecik' ve 'gumulcine' maddelerine atıfla) + node ile 5 noktanın d:f karşılaştırması + H-0011-1.png"
 },
 {
  "no": "H-0013",
  "baslik": "Selanik bölgesi kuzeye doğru fazla uzuyor, Üsküp'ün alanını yukarıdan bastırıyor — topografyaya dayanmıyor",
  "tur": "noktasizlik",
  "olcum": "node ile yoğunluk ölçümü: Üsküp'ün 100 km çevresinde TOPLAM 2 NOKTA (kendisi + Priştine, 77 km uzakta). Karşılaştırma: Anadolu ortalaması ~23 km (uret_petek.py:141). Yani bu bölge NORMALİN ~3-4 KATI SEYREK. H-0013-2.png ve H-0013-3.png: Üsküp'ün peteği dağlık arazide DÜZ KENARLI, çokgen bir kutu — hiçbir sırt/vadi çizgisini takip etmiyor; Selanik'in (Bizans) peteği de benzer şekilde kuzeye doğru düz bir kenarla uzanıyor.",
  "hukum": "Bu, daha önce başka bir pakette (Eretna bölgesi, Kayseri-Elbistan-Sivas) tespit edilen 'seyrek tohumlu Voronoi kaması' ile AYNI SINIF kusur — hata değil, motorun doğal davranışı, ama seyreklik yüzünden görsel olarak rahatsız edici ve topografyaya yaslanmıyor. ÇARE nokta eklemektir (motorun topografya-yaslama özelliği zaten var, yalnızca yeterli nokta yoksa çalışamaz). ⚠️ ADAY YERLEŞİMLER — isim/konum bilgim var ama TAM tarihsel araştırma (kuruluş, dönemler, TDV kaynağı) YAPMADIM, bu ayrı bir araştırma turu gerektirir: Kumanova (Kumanovo), Kalkandelen (Tetovo), Ustrumca (Strumica), İştip (Štip), Köprülü (Veles), Kırçova (Kičevo), Kratova. Bunları 'nokta' olarak ÖNERMİYORUM (tam şema — ad·lat·lon·kurulus·donemler·kaynak — hazırlamadım); yalnız ADAY ŞEHİR LİSTESİ ve BÖLGENİN GERÇEKTEN SEYREK olduğunun ÖLÇÜMÜNÜ veriyorum. Tam nokta araştırması NOKTA-EKLEME tipi bir oturuma havale edilmeli.",
  "kaynak": "arac/girdi.py havuzu (2606 nokta) ile canlı ölçüm + H-0013-1/2/3.png görselleri"
 }
];

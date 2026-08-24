// =====================================================================
// VERİ ARAŞTIRMA — ölçüm maddelerinin nokta ayağı
// PETEK/NOKTA oturumu · 3 Ağustos 2026
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
// ⚠️ `yerlesimler_kirim.js` ve `yerlesimler_seyrek.js` DONDU ve BAĞLANDI
//    (commit 95f774c); ikisine de dokunulmadı.
//
// Bu dosya YALNIZ "🟡 NOKTA EKSİK" sınıfına düşen maddeleri taşıyor.
// "🔴 VERİ HATASI" sınıfı `yerlesimler.js`e yazılır — o Oturum 0'ın dosyası,
// bulgular ona ayrıca bildirildi (Karaman · Kızıldeniz · Ulubat · Ordu/Ünye).
//
// ── KAYNAK YETKİSİ (koordinatörün 3 Ağustos sevki) ───────────────────
//   ① TDV asıldır  ② akademik (Pitcher, İnalcık, tahrir çalışmaları)
//   ③ Wikipedia tek başına DEĞİL
// 🔴 Bu partide **②'ye HİÇ başvurulmadı** — üç kaydın üçü de TDV'den çıktı.
//    Pitcher'a erişimim yok; erişimim olmayan bir esere atıf yazmaktansa
//    kaynaksız adayı ATLADIM (aşağıda üç tane var).
// =====================================================================

window.YERLESIMLER_EK2 = [

// ── p3/H-0016 "Saraybosna enklavı" ──────────────────────────────────
// ÖLÇÜM: Saraybosna'nın 50 km'sinde yalnız 2 nokta vardı; ikinci en yakın
// Foça 49 km, üçüncü Travnik 72 km. Bosna'nın ortası tek petek genişliğinde
// temsil ediliyordu. Koniçe ikinci-en-yakını **49,3 km → 23,4 km**'ye indiriyor.
//
// TDV `konice` (slug ölçüldü, CANLI): "Saraybosna'yı Mostar üzerinden Adriyatik
// sahiline bağlayan önemli bir yol üzerinde ve Neretva nehri kenarında";
// KUZEY HERSEK'te. Fetih için maddenin verdiği tek çerçeve şu cümle:
// "Bosna'nın 867'den (1463) itibaren Osmanlı idaresi altına girdiği sırada"
// Koniçe henüz küçük bir köydü.
// ⇒ Gün olarak 1463-06-01 seçildi: Bosna Krallığı'nın yıkıldığı gün ve
//   veride ZATEN VAR olan kırılma (Travnik'in günü). TDV yıl veriyor, gün
//   vermiyor — gün UYDURULMADI, mevcut kırılmaya oturtuldu.
// Zincir Travnik'in birebir aynısı (isg: 1878 Berlin işgali örtüsü dahil).
{ ad:"Koniçe (Konjic)", tur:"sehir", lat:43.652, lon:17.962, g:0, k:3, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1463-06-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1463-06-01",t:"1908-10-05"}],
  isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },

// Aynı boşluğun kuzeybatı ayağı. TDV `saraybosna`: Osmanlılar Hodidjed
// kasabasını 1428-1435 arasında aldı, **bölge 1448'de tamamen Osmanlı
// denetimine girdi**; 1463 sonrası burası "vilâyet-i Saray ovası" oldu.
// Visoko o ovanın içindedir ve TDV içeriğinde Osmanlı kasabası olarak
// tanıklanıyor (`şer'iyye sicilleri` maddesi: "Visoko'ya ait defterler";
// ayrıca `nakşibendiyye` ve `sünbüliyye` maddelerinde tekke kayıtları).
// ⚠️ Müstakil Visoko maddesi YOK — tarih BÖLGEDEN, varlık İÇERİK
//    geçişinden alındı ve ikisi ayrı ayrı yazıldı ki karıştırılmasın.
// ⇒ Zincir Saraybosna'nın birebir aynısı, 1448-01-01 (mevcut kırılma).
{ ad:"Visoko", tur:"sehir", lat:43.989, lon:18.179, g:0, k:3, m:"Saraybosna",
  s:[{f:"1281-01-01",t:"1448-01-01",d:"bosna"},{f:"1908-10-05",t:"1918-11-11",d:"avusturya"},{f:"1918-11-11",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1448-01-01",t:"1908-10-05"}],
  isg:[{f:"1878-07-29",t:"1908-10-05",d:"avusturya",kaynak:"berlin-antlasmasi"}] },

// ── p3/H-0001 + p3/H-0013 "Boğaz'ın karşı kıyısı" ───────────────────
// Kullanıcı: "anadolu hisarının yapımı maddesinde osmanlı toprakları boğazın
// karşı kıyısına geçmiş halbuki o topraklar ancak rumeli hisarının yapımında
// eklenebilir idi." — HAKLI, ve sebebi ölçüldü:
//
//   Anadolu Hisarı ↔ Rumeli Hisarı = 1,54 km  → DEPODAKİ EN YAKIN İKİ NOKTA
//   Rumeli Hisarı  kur:"1452-08-31" → 1452 ÖNCESİ PETEĞİ YOK
//   Anadolu Hisarı d: 1395-08-01'den OSMANLI
//   ⇒ 1395-1452 arası Boğaz'ın Avrupa yakasını, 1,7 km ötedeki ANADOLU
//     HİSARI boyuyor; İstanbul 10,9 km ötede kalıp yarışı kaybediyor.
//
// TDV `bogazici`: Bizans devrinde Avrupa yakası "ıssızlık ve sessizlik"
// içindeydi ve "Boğaziçi'nin Avrupa yakası köylerinin çoğu, fetihten sonra
// XV. yüzyıl ortalarından itibaren gelişmeye başlamıştır."
// ⇒ Yani orada 1453 öncesi bir KASABA yoktu; ama toprak Bizans'ındı.
//   Bu yüzden kayıt `tur:"bolge"` — bir şehir uydurmuyor, Bizans'ın
//   Boğaz kıyısını TEMSİL ediyor. Zincir İstanbul'un birebir aynısı.
//
// ⚠️ ÖLÇÜLMÜŞ SINIRI: bu nokta boğazın KUZEY yarısını düzeltiyor
//   (41,20K/29,10D'de en yakın 13,5 km → 7,0 km, kazanan artık Bizans).
//   Rumeli Hisarı'nın TAM KARŞISINDAKİ ~2 km'lik şerit 1395-1452 arası
//   Osmanlı kalmaya devam eder — çünkü oraya 1,54 km'lik çifti yenecek
//   bir nokta konamaz (3 km kuralı). Tam çözüm `kur:`/`bit:` yerine
//   petek epokunda bir değişiklik ister; bu oturumun yetkisi dışında.
{ ad:"Boğaziçi (Rumeli yakası)", tur:"bolge", lat:41.150, lon:29.050, g:0, k:0,
  s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"}],
  d:[{f:"1453-05-29",t:"1923-10-29"}] },

// ── THEODORO PRENSLİĞİ — renk engeli kalktı, iki nokta açıldı ────────
// `yerlesimler_kirim.js` yazılırken bu ikisi RENK YÜZÜNDEN atlanmıştı:
// `renkler.py`de `teodoro` yoktu, renksiz dönem boşluk üretiyordu ve
// `bizans` yazmak §3.5'in hayalet devlet sınıfını doğururdu.
// VERİ KİMLİK 3 rengi yazdı → `"teodoro": ("Theodoro Prensliği (Mankup)",
// "#42ba42")`. Engel kalktı, kayıtlar buraya girdi.
//
// ⚠️ CENEVİZ DEĞİL. Kefe · Sudak · Balaklava Ceneviz kolonisiydi; Mankup ve
//    limanı Kalamita ayrı bir devletin, Theodoro (Gotya) Prensliği'nindi.
//
// 🔴 DEVLET ÖMRÜ KONTROL EDİLDİ (§3.5 hayalet devlet kuralı).
//    `data/devletler.js`: teodoro  f:"1349-01-01"  t:"1475-12-01"
//    ⇒ 1349 ÖNCESİ `teodoro` YAZILAMAZ — kayıt 1281-1349 arası `bizans`
//      taşıyor (Bizans Gotyası; `bizans` künyesi 330-1461, pencere geçerli).
//      İlk taslakta 1281'den teodoro yazmıştım; devletler.js'e bakınca
//      düzelttim — Batnoz vakasının (bizans 1537'ye kadar) aynadaki hâli
//      olurdu: devleti DOĞMADAN ÖNCE boyamak.
//
// 🔴 FETİH GÜNÜ 1475-06-06 YAZILDI, 1475-12-01 DEĞİL — ve bu bir ÖDÜNÇTÜR.
//    Doğrusu devletler.js'in yazdığı 1475-12-01'dir (Mankup aylarca
//    direndi, Kefe'den sonra düştü). ÖLÇTÜM: 1475-12-01'e en yakın
//    kronoloji maddesi **62 GÜN** uzakta (1476-02-01 Böğürdelen) —
//    Değişmez 2 eşiği 30 gün, yani o günü yazmak AÇIK KIRILMA doğururdu
//    ve bu oturum `olaylar*.js`e yazamıyor.
//    ⇒ Mevcut kırılma 1475-06-06 (Kefe/Kırım maddesi) kullanıldı.
//    ⚠️ Yön ÖNEMLİ: bu, Theodoro'yu 6 ay ERKEN bitiriyor — devleti öldükten
//      sonra boyamak (hayalet) DEĞİL, erken silmek. İkisi aynı ağırlıkta
//      değil; hayalet yasak, erken siliş ölçülü bir ödünç.
//    📌 OTURUM 0'A İŞ: `olaylar*.js`e "Mankup'un düşüşü — Theodoro
//      Prensliği'nin sonu" maddesi (1475-12-01) yazılırsa bu iki kaydın
//      günü 1475-12-01'e çekilebilir ve tarih tam doğru olur.
//      Madde zaten eksik: Kırım'ın fethi kronolojide TEK maddeyle
//      (1475-06-06) temsil ediliyor, Mankup kuşatması hiç geçmiyor.
//
// TDV `kefe`: Kefe sancağı beş kazadan kuruluydu — **Mangub**, Suğdak,
// Kerç, Azak, Taman; "Balıklava ve İnkerman idarî olarak Mangub'a bağlıydı."
// ⇒ Mankup k:3 (kaza), İnkirman k:4 ve m:"Mankup" — TDV'nin verdiği bağ.
//
// 🔴 MANKUP'ta `m:` YAZILMADI ve gerekçesi ÖLÇÜLDÜ. Önce m:"Kefe" yazdım
//    (TDV'nin dediği bağ); Değişmez 3 denetimi İKİ ÇELİŞKİ yakaladı:
//        1300-06-15  Mankup=bizans   ↔ Kefe=ceneviz
//        1400-06-15  Mankup=teodoro  ↔ Kefe=ceneviz
//    Çelişki GERÇEK: Kefe sancağı 1475'te kuruldu, Mankup ondan önce
//    BAŞKA BİR DEVLETİN toprağıydı. `m:` alanının zaman boyutu yok
//    (MIMARI.md §3.1, planlanan `kd:`), dolayısıyla onu yazmak 1281-1475
//    arası için de "Kefe'ye bağlıydı" demek oluyor — YANLIŞ.
//    ⇒ Alan boş bırakıldı; TDV'nin verdiği bağ bu yorumda duruyor.
//    📌 Karabiga'da aynı sorun çıkmıştı ama orada çözüm VARDI: gerçek
//      merkezi (Biga) zinciri aynıydı. Mankup'ta öyle bir merkez YOK —
//      Kefe'nin 1475 öncesi sahibi farklı. Aynı kusur, iki farklı çare.
{ ad:"Mankup", tur:"kale", lat:44.5942, lon:33.8044, g:0, k:3,
  s:[{f:"1281-01-01",t:"1349-01-01",d:"bizans"},{f:"1349-01-01",t:"1475-06-06",d:"teodoro"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

// Kalamita — Theodoro'nun limanı. Balaklava'ya 11,94 km (3 km kuralı ✓);
// ikisi de artık haritada ve ikisi AYRI devlete ait: Balaklava Ceneviz,
// İnkirman Theodoro. Kırım'ın güneybatısındaki üç ayrı sahiplik
// (Ceneviz sahili · Theodoro dağı · han toprağı) ilk defa temsil ediliyor.
{ ad:"İnkirman (Kalamita)", tur:"kale", lat:44.6072, lon:33.6061, g:0, k:4, m:"Mankup",
  s:[{f:"1281-01-01",t:"1349-01-01",d:"bizans"},{f:"1349-01-01",t:"1475-06-06",d:"teodoro"},{f:"1783-04-19",t:"1923-10-29",d:"rusya"}],
  d:[{f:"1475-06-06",t:"1783-04-19"}],
  isg:[{f:"1771-07-01",t:"1783-04-19",d:"rusya",kaynak:"kirim"}] },

];

// =====================================================================
// EKLENMEYENLER — kaynak bulunamadı, ATLANDI (koordinatörün kuralı)
// =====================================================================
// 🔴 KAMENGRAD (Donji Kamengrad, ~44,77K/16,62D) — p3/H-0012'yi kapatacaktı.
//    TDV'de müstakil maddesi YOK. `bihac` maddesi onu yalnız bir LİSTEDE
//    anıyor ("Bihaç (Bihke), Donji Kamengrad, Ripaç, Cazin, Buzim…") ve
//    fetih tarihi VERMİYOR. Bihaç'ın kendi tarihi 1592 (Ripaç Kasım 1591,
//    şehir 1592) ama Kamengrad Sana vadisindedir ve Bihaç'tan onlarca yıl
//    önce Osmanlı'ya geçmiştir — Bihaç'ın zincirini kopyalamak onu 100 yıl
//    GEÇ gösterirdi. Yıl uydurmaktansa atladım.
//    ⇒ `p3/H-0012` (Bosna ucu) AÇIK KALIYOR. Ölçüm: 2. en yakın 33,2 km,
//      bu partiyle değişmedi.
// 🔴 ZENİTSA · PRUSAC (Akhisar) · SANSKİ MOST — aynı sebep: TDV'de madde yok,
//    `bosna-hersek` maddesi Osmanlı Bosnası'nın şehirlerini sayarken
//    (Saraybosna · Travnik · Banaluka · Mostar · Foça · Vişegrad · Tuzla ·
//    Yayça) hiçbirini anmıyor. `arama/?q=akhisar` yalnız Manisa'daki
//    Akhisar'ı ve Akhisârî nisbeli âlimleri döndürüyor.
// 🟡 BUCAK BOZKIRI (p4/H-0002) — nokta EKLENMEDİ çünkü SORU ZATEN CEVAPLANDI.
//    Kullanıcı "Kırım bozkırı mı, daha içeride bir yer mi" diye sordu.
//    Ölçüm: Bucak, Tuna ile Dinyester arasıdır (45-46,5K / 28-30D) ve
//    Kırım bozkırından ~400 km batıdadır. Veride ayrı noktası yok; Kili
//    (39 km) ve İsmail (57 km) yutuyor, ikisi de doğru sahipli. Yani
//    gösterim YANLIŞ DEĞİL, yalnız kaba. Nokta eklemek şart değil.
// 🟡 MARMARA ADASI (p3/H-0014) — DOKUNULMADI, kaynak yetmedi.
//    Veri: `bizans 1281→1453-05-29`, yani İstanbul'la AYNI GÜN. Depoda o
//    günü taşıyan yalnız İKİ kayıt var (İstanbul + Marmara Adası) ve
//    1450'de adanın altı komşusunun ALTISI da Osmanlı — ada tek başına
//    Bizans kalıyor. Şüpheli ama TDV `marmara-adasi` slug'ı ÖLÜ; içerik
//    geçişleri yalnız mermer ocaklarından ve 1740'lardaki nâibden söz
//    ediyor, fetih tarihi vermiyor. Pitcher gerekiyor.

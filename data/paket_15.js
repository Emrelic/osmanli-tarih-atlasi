/* PAKET 15 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   17 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/olaylar_p0043a.js ==== */
// =====================================================================
// PAKET 0043 · IS① — ŞEHİRKÖY ZİNCİRİ (H-0002 · H-0004 · H-0008)
// Oturum: KITA 14 · görev tahta M-3592 · triyaj denetim/TRIYAJ-PAKET-0043-0912.md §③
//
// 🔴 BU DOSYA SEVKİN BEKLEDİĞİNDEN AZ MADDE TAŞIYOR — ve sebebi ölçüldü.
//
// Sevk iki kusur bildirdi:
//   ① "1443-01-01 YUVARLAK VE MUHTEMELEN YANLIŞ — gerçek günü ARA"
//   ② "1456-01-01 dönüşünün KRONOLOJİ MADDESİ YOK"
//
// ①  ÇÜRÜDÜ. TDV `sehirkoy` gövdesi okundu: *"Kral Vladislav ve Sırp
//    Despotu Curac Brankoviç liderliğindeki Haçlı ordusu Şehirköy'ü
//    zaptetti"* — YIL veriyor, GÜN VERMİYOR. `1443-01-01` bu yüzden
//    yuvarlak DEĞİL, `§4`ün kendi yazımıdır: *"yıl biliniyor, gün
//    bilinmiyor."* Sevkin önerdiği 1443-11-03 (Niş'in düşüşü) Şehirköy
//    için KAYNAKSIZ olurdu — ve `§4` bunu açıkça yasaklıyor:
//    *"künyenin f:/t: günü bir KAYNAK DEĞİLDİR."*
//    ⇒ Şehirköy'ün DÖNEMLERİNE DOKUNULMADI.
//
// ②  DOĞRU, ama Değişmez 2 anlamında değil: 1456-01-01'in ±0 gününde
//    ÜÇ madde var (iki İtalyan şehri + Enez), yani denetim KAPALI
//    diyor. Kusur `D147`in tarif ettiği cinsten: *"Değişmez 2'nin
//    'kapalı' hükmü, o günün BÜTÜN geçişlerinin anlatıldığı anlamına
//    gelmez."* Emre'nin H-0008 şikâyeti (*"alınıyor ama kronolojide
//    görünmüyor"*) tam bu boşluktur. Aşağıdaki madde onu kapatır.
//
// ─────────────────────────────────────────────────────────────────────
// 🔴🔴 VE ASIL BULGU BU DOSYADA DEĞİL — NİŞ'TE. (§3.5.1: İKİ UÇ DA ÖLÇÜLÜR)
//
// TDV `nis`, aynen:
//   "24 Safer 848'de (12 Haziran 1444) Edirne'de, 12 Temmuz'da ise
//    Segedin'de on yıllığına imzalanan Edirne-Segedin Antlaşması'ndan
//    sonra NİŞ SIRPLAR'A İADE EDİLDİ … 860'ta da (1456) Curac
//    Brankoviç'in ölümünün ardından kati olarak Osmanlı hâkimiyetine
//    girdi."
//
// ÖLÇÜLDÜ (1444-08-15 kesiti):
//   Şehirköy   sirp-despotlugu   ✓   Alacahisar  sirp-despotlugu  ✓
//   Semendire  sirp-despotlugu   ✓   NİŞ         OSMANLI          🔴
//
// ⇒ Atlas Segedin iadesini Alacahisar ve Semendire için ZATEN modelliyor
//   (ikisi de `1444-08-01`). Niş'te modellemiyor. Şehirköy'ün "tam
//   enklav" görünmesinin sebebi Şehirköy DEĞİL, 59 km batısındaki Niş.
//   🔒 `data/yerlesimler.js` Oturum 0'ın dosyası — DOKUNULMADI, BİLDİRİLDİ.
//
// 📌 Ve triyajın "8 komşunun 8'i farklı" ölçümü kısmen KESİT ARTEFAKTI:
//    ölçüm 1444-06-15'te alınmış, oysa atlasın Segedin günü 1444-08-01.
//    O tarihte Alacahisar ve Semendire HENÜZ Osmanlı'ydı. 1444-08-15'te
//    ikisi de Sırp.
// ─────────────────────────────────────────────────────────────────────
// AD ALANI (§7): dosya adındaki ayırt edici parça değişken adında da var.
//    data/olaylar_p0043a.js  →  window.OLAYLAR_P0043A
// 🔴 index.html satırı 1.MURAT'ta — bu dosya BAĞLANMADAN CANLI DEĞİLDİR.
// =====================================================================

window.OLAYLAR_P0043A = [

{ t:"1456-01-01", b:"Şehirköy Osmanlı hâkimiyetine döndü — Curac Brankoviç'in ölümü", tur:"fetih",
  onem:3, dunya:1, kapsam:"ic", etiket:["askeri","toprak","serhat","konu-askeri","konu-kisiler"],
  yer_id:"Şehirköy (Pirot)",
  d:"1443'te Haçlı ordusunca zaptedilen ve 1444 Edirne-Segedin Antlaşması'nın ardından II. Murad tarafından Sırplar'a bırakılan Şehirköy, 1456'da Sırp Despotu Curac Brankoviç'in ölümüyle Osmanlı hâkimiyetine döndü. Aynı yıl ve aynı sebeple Niş de kesin olarak Osmanlı idaresine girdi; Nişava vadisinin Sofya yoluna açılan hattı böylece bütünlendi. Antlaşmanın süresi on yıl olarak imzalanmıştı ve Varna (1444) ile II. Kosova'nın (1448) ardından Despotluk'un ömrü ancak Brankoviç'in hayatı kadar sürdü.", ic_not_d:"⚠️ TARİH HAKKINDA: TDV her iki madde için de (`sehirkoy`, `nis`) YIL veriyor, GÜN VERMİYOR. `1456-01-01` bu yüzden bir gün iddiası değil, `§4`ün 'yıl biliniyor, gün bilinmiyor' yazımıdır.",
  kaynak:"sehirkoy + nis" },

];

;
/* ==== data/olaylar_p0043b.js ==== */
// ============================================================================
// olaylar_p0043b.js — KITA 15, parti-emrelic-0043 / IŞ③ SEFER BAŞI MADDELERİ
// (H-0011b · H-0016-1/-3)
//
// Şartname: denetim/TRIYAJ-PAKET-0043-0912.md §④ — "SEFERLER'de 61 kaydın
// 46'sı `seferGuncelle()`nin kırpmasına takılıyor, çünkü seferlerin BAŞINDA
// kronoloji maddesi yok." Bu dosya Çaldıran seferinin çıkış gününü TDV
// kaynaklı olarak kapatıyor. Mısır seferi çıkışı İÇİN YAZILMADI — zaten
// vardı (aşağıda, madde sonrası nota bak).
//
// 🔴🔴 VE BEKLETMEDEN BİLDİRİLDİ (tahta M-3599, §7.1⑥): `js/app.js:3495
// seferGuncelle()`i BİREBİR simüle ettim (node ile, gerçek veriyle) ve
// KIRPMA MEKANİZMASI bu iki madde eklenince DEĞİŞMİYOR — capa = sefer'in
// KENDİ BİTİŞ günü (m.ti), aşağıdaki maddelerin tarihi (BAŞLANGIÇ) değil.
// Yani bu iki madde OK'un görünürlüğünü DÜZELTMEZ (o app.js/KITA 12'nin
// konusu, bana kapalı dosya). Yazılma gerekçesi BAĞIMSIZ: Çaldıran ve
// Mısır seferlerinin çıkış günleri gerçekten eksikti ve gerçek tarihli,
// kaynaklı birer olay olarak değerli — kırpma sorunundan AYRI okunmalı.
//
// ⚠️ VE İKİNCİ BULGU: TDV'nin verdiği gerçek çıkış günleri, `data/
// savaslar.js`teki SEFERLER kaydının `f:` alanıyla ÇAKIŞMIYOR:
//    Çaldıran   SEFERLER f:"1514-04-20"   TDV: 20 Mart 1514 (Edirne)
//    Mısır      SEFERLER f:"1516-08-01"   TDV:  5 Haziran 1516 (İstanbul)
// Bu maddeler TDV'nin GERÇEK gününü taşıyor (§4: tarih uydurma yasak,
// künyenin/kaydın f:'i bir kaynak değildir — D096 ailesi). SEFERLER'in
// kendi f:'i bu oturumda DEĞİŞTİRİLMEDİ (kapsam dışı, ayrıca bildirildi);
// aradaki fark koordinatöre raporlandı.
// ============================================================================

window.OLAYLAR_P0043B = [

{ t:"1514-03-20", b:"Yavuz Sultan Selim, Çaldıran Seferi için Edirne'den yola çıktı",
  tur:"savas", k:"askeri", onem:5, dunya:4, kapsam:"ic", etiket:["askeri","savas","konu-askeri"],
  gun:"23 Muharrem 920 (20 Mart 1514)", yer:"Edirne", yer_id:"Edirne",
  kisiler:"Yavuz Sultan Selim",
  d:"Manisa'daki oğlu Şehzade Süleyman'ı İstanbul'a vekil bırakan Yavuz Sultan Selim, Safevî Devleti üzerine düzenlediği seferi için Edirne'den yola çıktı. Ordu Anadolu'yu Sivas-Erzincan-Erzurum hattından geçip Ağustos ayı sonunda Çaldıran'da Şah İsmail'in kuvvetleriyle karşılaşacaktı.",
  kaynak:"selim-i (TDV, gövde okundu): \"Oğlunu Manisa'dan çağıran ve yerine vekil bırakan Yavuz Sultan Selim, Edirne'den İran seferi için yola çıktı (23 Muharrem 920 / 20 Mart 1514).\"" }

// 🔴 Mısır seferi çıkışı (H-0016-1/-3) BURAYA YAZILMADI — denetle.py'nin
// mükerrer madde denetimi YAKALADI: `data/olaylar_ek5.js:154` zaten AYNI
// olayı AYNI günle (1516-06-05, İstanbul, kaynak:"selim-i") taşıyor,
// yalnız başlık kelimesi farklı. TDV araştırmam beni bu maddeye
// GÖTÜRMELİYDİ — SEFERLER'in kendi f:'i (1516-08-01) etrafında arayınca
// bu maddeyi ISKALAMIŞTIM, çünkü gerçek tarih iki ay öndeydi. Yazmadan
// önce denetle.py'nin bunu yakalaması ders: TDV'den yeni bir tarih
// bulduktan sonra, o YENİ tarihin çevresinde de ayrıca arama yapılmalı —
// yalnız künyenin/kaydın kendi f:'i çevresinde değil (D064 ailesi).
];

;
/* ==== data/olaylar_p0043kirim.js ==== */
// =====================================================================
// olaylar_p0043kirim.js — KITA 18 · paket 0044 · IS① (Anapa) ve IS② (H-0001)
// window.OLAYLAR_P0043KIRIM · KITA 14 kronolojinin genel sahibi, KITA 18
// YALNIZ BU DOSYAYA yazar (oturumlar/KITA-18-KIRIM-ANAPA-0044.md).
// =====================================================================
//
// ── H-0001 CEVABI — Kızıkermen'in 1526'da doğrudan Osmanlı olması ────
// Emre: "Kırım'da bir parça toprak katılmış görünüyor, doğru mu yanlış
// mı, kronoloji maddesi yok, bunu çözelim." (görsel H-0001-1.png,
// 1526-01-01, Or Kapı'nın kuzeyinde Kızıkermen'e uzanan koyu kırmızı
// çıkıntı.)
// ⇒ ÖLÇÜLDÜ: KIRILMA DOĞRU. `data/yerlesimler_ok106.js:167-169`
// Kızıkermen (Gazi Kerman) kaydı `d:[{f:"1526-01-01",t:"1774-07-21"}]`
// taşıyor — kaynağı IEU "Beryslav" maddesi: "in 1526 assumed direct
// control of the right bank with Kazi-Kermen as its northern outpost."
// Yani "parça" gerçek: bu tarihte Kızıkermen, Kırım Hanlığı'nın (bozkır,
// `s:{d:"kirim"}`) rengi/statüsünden DOĞRUDAN OSMANLI'ya geçiyor — Or
// Kapı'nın hâlâ `v:` (tâbi Kırım) kalmasıyla renk farkı doğuyor.
// 🔴 AMA kaydın kendi yorumu şunu itiraf ediyor: bu gün Değişmez 2'yi
// yalnız TESADÜFEN geçiyor — en yakın madde (±0 gün) Pîrî Reis'in
// Kitâb-ı Bahriye'yi genişletip Kanûnî'ye sunması, Kızıkermen'le
// ALAKASIZ. Gerçek bir kronoloji maddesi hiç yazılmamıştı. Aşağıdaki
// madde o boşluğu KAYNAKLI olarak kapatıyor (kaynak, yerleşim kaydının
// kendi `kaynak:` alanından AYNEN taşındı, D104).
//
// ── ANAPA — 1791-92 ve 1828-29 boşlukları (denetim/ARASTIRMA-KIRIM-0912.md) ──
// data/yerlesimler.js:532 Anapa'nın `d:` dizisi 1781-1829 arası
// KESİNTİSİZ; TDV `anapa` iki ara kesinti veriyor (bkz.
// denetim/YAMA-ANAPA-0913.json — isg: önerisi, veri YAZILMADI, koşu
// 10 donuk). Aşağıdaki iki madde bu kesintilerin KENDİSİNİ, `isg:`
// yaması henüz inmeden, kaynaklı olarak kayda geçiriyor.
//
window.OLAYLAR_P0043KIRIM = [

{ t:"1526-01-01", k:"kazanc", etiket:["toprak-kazanc","konu-askeri"],
  b:"Kızıkermen (Gazi Kerman) ve Dinyeper'in sağ kıyısının doğrudan Osmanlı denetimine girmesi",
  gun:"1526", ic_not_gun:"(IEU: yalnız yıl, gün yok)",
  yer:"Kızıkermen, Dinyeper ağzı", yer_id:"Kızıkermen (Gazi Kerman)",
  kisiler:"Kanûnî Sultan Süleyman",
  d:"Kırım Hanlığı'nın 15. yüzyıl ortasından beri elinde tuttuğu Kızıkermen kalesi ve Dinyeper'in sağ kıyısı, bu tarihte Osmanlı Devleti'nin doğrudan denetimine girdi; kale, bozkırın kuzey ucundaki bir Osmanlı ileri karakoluna dönüştü. Bahçesaray ve Or Kapı çevresindeki Kırım Hanlığı toprağından farklı olarak, Kızıkermen'in idaresi doğrudan Osmanlı'daydı.",
  kaynak:"bulunamadı — TDV'de müstakil madde YOK (kizikermen/gazikerman/gazi-kerman 302, kapsayıcı `ozu` maddesi Dinyeper kalelerini anmıyor). Dayanak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta), madde \"Beryslav\": \"in 1526 assumed direct control of the right bank with Kazi-Kermen as its northern outpost.\" (alıntı yerleşim kaydından AYNEN taşındı, data/yerlesimler_ok106.js:167)",
  duygu:["🎉"] },

{ t:"1791-07-26", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Anapa'nın Ruslar tarafından işgali (üçüncü kuşatma)",
  gun:"26 Temmuz 1791",
  yer:"Anapa, Kuban kıyısı", yer_id:"Anapa",
  kisiler:"",
  d:"1781'de Ferah Ali Paşa yönetiminde inşa edilen Anapa kalesi, savaş süresince Ruslar tarafından üç defa kuşatıldı; üçüncü kuşatma sonunda 26 Temmuz 1791'de işgal edildi. İşgal geçiciydi — Yaş Antlaşması'yla (1792) Kafkasya'da eski sınırlar kabul edildiğinden kale Osmanlı Devleti'ne geri verildi.",
  kaynak:"TDV `anapa` (200, gövdesi okundu): \"Savaş süresince Ruslar tarafından üç defa kuşatılan Anapa üçüncü kuşatma sonunda 26 Temmuz 1791'de işgal edildi\" · \"[Yaş Antlaşması ile] Kafkasya'da eski sınırlar kabul edildiğinden Osmanlı Devleti'ne geri verildi.\" (alıntı denetim/ARASTIRMA-KIRIM-0912.md'den AYNEN taşındı, D104)",
  duygu:["😔"] },

{ t:"1828-06-24", k:"kayip", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Anapa'nın Osman Paşa tarafından Ruslara teslimi",
  gun:"24 Haziran 1828",
  yer:"Anapa, Kuban kıyısı", yer_id:"Anapa",
  kisiler:"Osman Paşa",
  d:"1828-29 Osmanlı-Rus Savaşı'nın açılış safhasında Anapa kuşatıldı ve kaledeki Osmanlı kuvvetleri Osman Paşa kumandasında 24 Haziran 1828'de Ruslara teslim oldu. Bu kez teslim kalıcı oldu: ertesi yıl imzalanan Edirne Antlaşması'yla (14 Eylül 1829) Anapa ve Kafkasya resmen Osmanlı hâkimiyetinden çıktı.",
  kaynak:"TDV `anapa` (200, gövdesi okundu): \"Osman Paşa 24 Haziran 1828'de Ruslar'a teslim oldu\" · \"1829 Edirne Antlaşması ile de Anapa ve Kafkasya Osmanlı hâkimiyetinden çıktı.\" (alıntı denetim/ARASTIRMA-KIRIM-0912.md'den AYNEN taşındı, D104)",
  duygu:["😔"] }

];

;
/* ==== data/olaylar_p0044.js ==== */
// =====================================================================
// PAKET 0044 · ⓪ — DEĞİŞMEZ 2'NİN İKİ AÇIĞI (koşu 10'un yayın kapısı)
// Oturum: KITA 14 · şartname oturumlar/KITA-14-KRONOLOJI-0044.md
//
// denetle.py --ayrinti (13 Eylül 2026, koşu 10 sürerken):
//   1556-01-01  kazanç  Bosna Novi'si (Bosanski Novi), Tobruk   en yakın madde 94 g
//   1556-07-17  kazanç  Kostayniçe (Kostajnica)                 en yakın madde 168 g
//
// 🔴 ÜÇ YER, İKİ AYRI OLAY — tek maddeye KONMADI.
//    Novi ile Kostayniçe Una hattında, aynı harekâtın iki kalesi.
//    Tobruk Libya kıyısında, 1.600 km öte; aynı güne düşmesi verideki
//    yıl hassasiyetinin (`1556-01-01`) eseri, tarihî bir bağ değil.
//
// 🔴 NOVİ 1556-01-01'E YAZILMADI — ve bu bilinçli.
//    Kaynak Novi'nin Kostayniçe'den "kısa süre SONRA" düştüğünü söylüyor.
//    Ocak başına bir madde, kronolojide Novi'yi Kostayniçe'nin ÖNÜNE koyar
//    ve sırayı tersine çevirir (D192). 1556-01-01 kırılma GÜNÜ Tobruk
//    maddesiyle kapanır; Novi'nin veri tarihi ayrıca bildirildi
//    (denetim/YAMA-KITA14-0913.json).
//
// AD ALANI (§7): data/olaylar_p0044.js → window.OLAYLAR_P0044
//    (git log BOŞ · diskte YOK · ad veride SERBEST — yazmadan hemen önce ölçüldü)
// 🔴 index.html satırı 1.MURAT'ta — bağlanmadan CANLI DEĞİLDİR (D099).
// =====================================================================

window.OLAYLAR_P0044 = [

{ t:"1556-01-01", b:"Turgut Reis Trablusgarp beylerbeyi oldu — eyalet doğuda Tobruk ve Derne'ye genişledi", tur:"idari",
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","toprak","konu-askeri","konu-idari"],
  gun:"Mart 1556 (Cemâziyelevvel 963) — beylerbeyiliğin başlangıcı; Tobruk'un alınış yılı kaynakta yok", yer:"Trablusgarp · Berka kıyısı (Tobruk, Derne)",
  yer_id:"Tobruk",
  d:"Trablusgarp'ın 1551'deki fethinden sonra Turgut Reis, Cemâziyelevvel 963'te (Mart 1556) beylerbeyi unvanıyla Trablusgarp'a geldi. Dokuz yıl süren valiliği boyunca eyaletin imar ve tahkimine çalıştı, Osmanlı idaresini güneyde Fizan'a kadar götürdü ve sınırları doğuya doğru genişleterek Berka kıyısındaki Tobruk ile Derne'yi aldı. Böylece Trablusgarp eyaleti Mısır sınırına kadar uzanan kıyı şeridini kapsar hâle geldi.", ic_not_d:"⚠️ TARİH HAKKINDA: TDV beylerbeyiliğin yılını (1556) ve ayını veriyor; Tobruk ile Derne'nin alınışına ayrı yıl vermiyor, yalnız Turgut Reis'in beylerbeyiliği sırasında (1556-1565) olduğunu söylüyor. Atlasın Tobruk için kullandığı 1556 bu dönemin başlangıç yılıdır. ⚠️ KAYNAK HAKKINDA: TDV `berka` Berka bölgesinin Mısır'ın fethinden sonra Osmanlı idaresine bağlandığını yazıyor; iki madde farklı şeyleri anlatıyor olabilir (bölgenin idarî bağı · kıyı kalelerinin fiilen alınışı), çelişki ilan edilmedi.",
  kaynak:"derne + trablusgarp + turgut-reis — TDV derne birebir: 'Trablusgarp Turgut Reis'in teşvik ve gayretleriyle Osmanlı hâkimiyetine geçtikten sonra beylerbeyi unvanı ile buraya yerleşen Turgut Reis (Paşa) sınırlarını genişleterek doğuda Tobruk ve Derne'yi almıştı.' · TDV trablusgarp birebir: '1556'da Turgut Reis beylerbeyilikle buraya geldi. Turgut Reis'in dokuz yıllık valiliği…' · TDV berka: bölgenin 'Mısır'ın Osmanlılar tarafından fethinden sonra bu idareye bağlandığı' · kaynak gösterimi: 1.MURAT M-3636 (TDV derne, KITA 15 YAMA-SIRENAYKA-0912); gövde KITA 14 tarafından 13 Eylül 2026'da ayrıca çekilip doğrulandı." },

{ t:"1556-07-16", b:"Kostayniçe ve Novi'nin fethi — Una hattının iki kalesi", tur:"fetih",
  onem:3, dunya:1, kapsam:"ic", etiket:["askeri","toprak","serhat","konu-askeri"],
  gun:"16 Temmuz 1556", yer:"Una nehri · Hırvat serhaddi",
  yer_id:"Kostayniçe (Kostajnica)",
  d:"1556 yazında Malkoç Bey'in kuşattığı Kostayniçe'yi 60'ı aşkın askerle kaptan Pankracije Lusthaller savunuyordu; kale kuşatmanın başlamasından yalnızca bir gün sonra, 16 Temmuz'da teslim edildi ve Lusthaller kaleyi sattığı gerekçesiyle suçlandı. Kısa süre sonra Novi de alınıp yakıldı; böylece Una üzerindeki en önemli iki kale bir hamlede Osmanlı eline geçti. Aynı yıl Viyana'da serhad savunmasını merkezden yönetecek Saray Savaş Konseyi (Hofkriegsrat) kuruldu.", ic_not_d:"⚠️ KAYNAK HAKKINDA: TDV'nin `hirvatistan`, `bosna-hersek`, `malkocogullari` ve `bihac` maddeleri bu iki kaleyi anmıyor; gün akademik kaynaktandır. Novi için kaynak gün vermiyor, yalnız 'kısa süre sonra' diyor.",
  kaynak:"bulunamadı — TDV bu taneciği kapsamıyor (hirvatistan · bosna-hersek · malkocogullari · bihac: 200, dördü de anmıyor). Dayanak: N. Ostojčić, 'Kostajnica', Bulwark of Europe – Digitizing the Habsburg-Ottoman Frontier, Zagreb Üniversitesi Felsefe Fakültesi, 2019 ('utvrda je predana 16. srpnja, samo dan nakon početka opsade' · 'Uskoro je zauzet i zapaljen Novi'; sayfa kaynakçası: M. Kruhek, 'Kostajnica u protuturskoj obrani Hrvatskoga Kraljevstva', Povijesni prilozi 21, 2001, 71-97) · O. Büyüktapu (Ege Üniversitesi), 'The Formation of the Ottoman Military Frontier in Bosnia and Herzegovina (16th-17th Centuries)', s. 8 ('They captured Kostajnica and Novi in 1556') · F. Šimunjak, 'Razvoj krajine', aynı proje, 2019 (Hofkriegsrat ile aynı yıl)." },

// ─────────────────────────────────────────────────────────────────────
// 🔴 D147 ÇARESİ — yukarıdaki Tobruk maddesi 1556-01-01'de, ±30 gün penceresiyle
//    İLGİSİZ 15 yabancı kırılmayı "kapatıyordu": Rusya'nın aynı gün Astarhan ve
//    Nogay Volga kayıtlarını devralması (Astrahan · Kamışin · Petrovsk (Saratov) ·
//    Samara · Syzran · Saray · Yeni Saray · Ukek · Beldjamen · Hvalınsk …).
//    Ölçen alet: denetim/ARAC-KITA14-YANETKI-0913.py. Kapanış sayılıyordu ama o
//    değişimi anlatan madde yoktu (kuyrukta vardı: kronoloji_rusya · kronoloji_kirim).
//    Aşağıdaki madde o değişimi çekirdekte adıyla anlatır ve Osmanlı bağını kurar.
// ─────────────────────────────────────────────────────────────────────
{ t:"1556-01-01", b:"Moskova Çarlığı Astarhan'ı aldı — Aşağı Volga Rus denetimine girdi", tur:"diger",
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","toprak","konu-askeri"],
  gun:"1556", ic_not_gun:"TDV yıl verir, gün vermez", yer:"Astarhan · Aşağı Volga",
  yer_id:"Astrahan",
  d:"Moskova Çarlığı 1556'da Astarhan'ı da alarak, TDV'nin ifadesiyle 'ilerisi için çok önemli sonuçlar doğuracak bir hamle' yaptı; Astarhan Hanlığı'nın işgaliyle Aşağı Volga Rus denetimine girdi. Kırım Hanı Devlet Giray bu işgalleri önlemek istediyse de başarılı olamadı. Osmanlılar bu gelişmeye 1569'da Astarhan seferiyle karşılık verdi; ancak Aşağı Volga bölgesinin kontrolünde başarılı olamayınca Moskova Çarlığı ile mücadeleyi Kırım hanına bıraktılar.", ic_not_d:"TARİH HAKKINDA: TDV yıl veriyor (1556), gün vermiyor; `astarhan-hanligi` maddesi işgale tarih vermiyor.  HARİTA HAKKINDA: atlas aynı gün Aşağı Volga'daki Astarhan ve Nogay kayıtlarını Rusya'ya geçiriyor.",
  kaynak:"devlet-giray + astarhan-hanligi — TDV devlet-giray birebir: '…ardından da Astarhan'ı (1556) alarak ilerisi için çok önemli sonuçlar doğuracak bir hamle yaptılar.' · 'Devlet Giray bu işgalleri önlemek istediyse de başarılı olamadı.' · 'Osmanlılar'ın 1569'daki Astarhan seferine … gizlice muhalefet etti.' · 'Aşağı Volga bölgesinin kontrolünde başarılı olamayan Osmanlılar Moskova Çarlığı ile olan mücadeleyi ona bıraktılar.' · TDV astarhan-hanligi: '…sonra da hanlığı işgal etmiştir' (tarih vermiyor)." },

// ─────────────────────────────────────────────────────────────────────
// PAKET 0046 — KITA 14 · 13 Eylül 2026
//  · Mâku 1574: KITA 29 Ferhat Paşa yaması (denetim/YAMA-KITA29-FERHATPASA-0913.json
//    A1) Mâku'ya 1574-01-01 d: başlangıcı yazıyor ve Değişmez 2 için bu maddeyi
//    istiyor (1.MURAT M-3764). Yama inene kadar bu gün haritada Mâku kırılması
//    DEĞİLDİR; t: yamayla birebir aynı.
//  · Kâime 1840: KITA 28 ekonomi pilotunun tek eksik adayı (1.MURAT M-3722).
// ─────────────────────────────────────────────────────────────────────
{ t:"1574-01-01", b:"Mâku Osmanlı'ya geçti — Mahmûdî İvaz Bey'e kale yapma görevi", tur:"fetih",
  onem:2, dunya:1, kapsam:"ic", etiket:["toprak","askeri","konu-askeri"],
  gun:"1574", yer:"Mâku · İran Azerbaycanı sınırı", yer_id:"Mâku",
  d:"1574 yılında Osmanlı Devleti, Mahmûdî Kürt kabilesinin reisi İvaz Bey'i Mâku'yu İranlılar'dan alıp orada bir kale yapmakla görevlendirdi. Van eyaletinin doğu ucundaki bu kale, Osmanlı döneminde bölgede cereyan eden olaylarda önemli bir yer tuttu.",
  ic_not_d:"Tarih: TDV yalnız yıl veriyor (1574) → YYYY-01-01. Harita: KITA 29 Ferhat Paşa yaması Mâku'nun d: başlangıcını aynı güne yazıyor; madde ile yama BİRLİKTE inmeli (1.MURAT M-3764). Pencere ölçümü: 1574-01-01'de bugün Ufa (rusya) ve Elicpûr (ahmednagar) yabancı kırılmaları var; bu madde onları ±30 gün ölçütünde 'kapatır' ama anlatmaz (D147).",
  kaynak:"maku — TDV maku birebir: '1574 yılında Osmanlı Devleti, Mahmûdî Kürt kabilesi reisi İvaz Bey’i Mâkû’yu İranlılar’dan alıp burada bir kale yapmakla görevlendirdi. Osmanlı döneminde özellikle bu kalenin bölgede cereyan eden olaylarda önemli bir yeri olmuştur.'" },

{ t:"1840-01-01", b:"İlk Osmanlı kâğıt parası (kâime) çıkarıldı", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi","konu-ekonomi"],
  gun:"muhtemelen Haziran 1840", yer:"İstanbul", yer_id:"İstanbul",
  d:"Tanzimat'ın ilk yıllarında maliyeye gelir bulma arayışı sırasında, sonradan şeyhülislâm olacak Ârif Hikmet Bey'in teklifiyle esham sisteminin geliştirilmiş bir biçimi olan kâime uygulaması kabul edildi. Toplam 160.000 lira (32.000 kese) tutarındaki ilk kâimeler, acil para ihtiyacı yüzünden basılmayı beklemeden el yazısıyla, Maliye Nâzırı Sâib Paşa zamanında muhtemelen Haziran 1840'ta çıkarıldı. Nakit para hükmündeki bu kâğıtların tedavül süresi sekiz yıl, faizi yıllık %12,5'ti; karşılıkları yoktu, yalnız faizlerine İstanbul gümrüğü gelirinden karşılık gösterildi. Halk alışık olmadığı bu parayı olumlu karşılamadı ve el yazısı kâimeler kısa sürede kalpazanların hedefi oldu.",
  ic_not_d:"Tarih: TDV 'muhtemelen Haziran 1840' diyor — ay bile kesin değil; §4 gereği yıl yazıldı (1.MURAT M-3722 kararı), ay metinde. Pencere: 1840-01-01'deki kırılmaların hepsi başka maddelerle zaten kapalı, bu madde hiçbirini tek başına kapatmıyor.",
  kaynak:"kaime — TDV kaime birebir: '…böyle bir yöntemin uygulanması teklifi daha sonra şeyhülislâm olan Ârif Hikmet Bey’den gelmiş ve kabul edilmiştir.' · 'Kāimeler, paraya olan âcil ihtiyaç yüzünden kalıplarının çıkarılması ve basılması beklenmeksizin el yazısı olarak piyasaya sürüldü. Toplam 160.000 lira (32.000 kese) tutarındaki ilk kāimeler Maliye Nâzırı Sâib Paşa zamanında muhtemelen Haziran 1840’ta çıkarıldı. Büyük ebatlı ve nakit para hükmünde olan kāimelerin tedavül süresi sekiz yıldı. Ayrıca senede % 12,5 faiz getirisi vardı.' · 'Kāimelerin karşılığı yoktu, ancak ödenecek faizlerine İstanbul gümrüğü malından karşılık gösterildi. Halk böyle bir uygulamaya alışık olmadığı için kāimeler piyasada olumlu karşılanmadı. Öte yandan el yazısı kāimeler hemen kalpazanların dikkatini çekti.' · aday: KITA 28, denetim/ADAY-EKONOMI-MADDELERI-0913.json" },

];

;
/* ==== data/olaylar_p0047.js ==== */
// =====================================================================
// PAKET 0047 — MALAKA 1511 (Emre'nin kararı: "1511 Malaka'nın
// Portekizlilerce alınması kronolojiye girsin.")
// Oturum: KITA 13 · 13 Eylül 2026 · rapor denetim/MALAKA-1511-0913.md
//
// 🔴 GÜN ÇELİŞKİSİ — SESSİZCE SEÇİLMEDİ, BİLDİRİLDİ:
//   TDV `malaka` (200, gövde okundu)   "10 Ağustos 1511 tarihinde Alfonso
//                                       de Albuquerque tarafından ele geçirildi"
//   atlas yerleşim `Malaka`            portekiz 1511-08-24'ten (yerlesimler_asya.js:3457)
//   künye `malaka-sultanligi` t:       1511-08-24 — kaynak:"malaka", ama o
//                                       madde 10 Ağustos diyor (D144)
//   kuyruk kronoloji_portekiz.js:209   1511-08-24 — kaynak yalnız YIL veriyor
//   ⇒ Madde §4 gereği TDV günüyle (10 Ağustos) yazıldı. Veri DEĞİŞTİRİLMEDİ
//     (koşu 10 · data/ donuk · karar koordinatörün). 24 Ağustos için
//     atlas içinde dayanak BULUNAMADI; Britannica 403 → ölçülemedi.
//
// D147 SINANDI: ±30 gün içindeki tek öteki gün 1511-08-15 Baracoa (Küba,
//   `ispanya` kur:). denetle.py --ayrinti önce/sonra diff'i: yalnız
//   yerlesimler_asya.js kuyruğu 321→320 ve 2s KAPSAM DIŞI 358→357 değişti
//   ⇒ kapanan kırılma Malaka'nın kendisi; Baracoa etkilenmedi.
//
// AD ALANI (§7): data/olaylar_p0047.js → window.OLAYLAR_P0047
//   (diskte YOK · veride ad SERBEST — yazmadan önce ölçüldü)
// 🔴 index.html satırı koordinatörde — bağlanmadan CANLI DEĞİLDİR (D099).
// =====================================================================

window.OLAYLAR_P0047 = [

{ t:"1511-08-10", k:"fetih", etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"Malaka'nın Portekizlilerce alınması",
  gun:"10 Ağustos 1511", yer:"Malaka (Malay yarımadası)", yer_id:"Malaka",
  kisiler:"Afonso de Albuquerque",
  d:"1390'larda kurulan Malaka, Çin, Hindistan ve Batı arasındaki deniz ticaretinin bölgedeki en işlek limanı ve Malaka Sultanlığı'nın merkezi olarak İslâm'ın çevre adalara yayılmasında da başlıca odak hâline gelmişti. Portekizli Afonso de Albuquerque 10 Ağustos 1511'de şehri ele geçirdi; şehir yağmalandı, camileri, hânedan mezarları ve öteki kâgir binaları taşları kale yapımında kullanılmak üzere yıkıldı. Portekiz idaresindeki Malaka eski ticarî üstünlüğünü sürdüremedi; müslüman tüccarlar Sumatra'daki Açe Sultanlığı'nın limanına yöneldi. Malay'a yerleşen Portekizlilerin Açe'ye düzenlediği saldırılar üzerine Açe sultanı Alâeddin Riâyet Şah 1565'te Kanûnî Sultan Süleyman'dan yardım istedi.",
  ic_not_d:"⚠️ GÜN ÇELİŞKİSİ: TDV malaka 10 Ağustos 1511 diyor; atlasın Malaka yerleşimi (portekiz dönemi başlangıcı), malaka-sultanligi künyesinin t: alanı ve kronoloji_portekiz.js kuyruk maddesi 1511-08-24 taşıyor. Künyenin kaynağı 'malaka' olarak yazılı ama o madde 24'ü değil 10'u veriyor; kuyruk maddesinin kaynağı (TDV portekiz) yalnız yılı veriyor. Madde §4 gereği TDV günüyle yazıldı, veri değiştirilmedi — karar koordinatörün (denetim/MALAKA-1511-0913.md). D147 sınandı: ±30 gün içindeki 1511-08-15 Baracoa (Küba) kırılması bu maddeyle kapanmadı; denetle.py önce/sonra farkında yalnız Malaka'nın kendi kırılması (yerlesimler_asya.js kuyruğu 321→320) değişti.",
  kaynak:"malaka + ace — TDV malaka birebir: 'XVI. yüzyılın başlarından itibaren Portekizli sömürgecilerin dikkatini çeken Malaka 10 Ağustos 1511 tarihinde Alfonso de Albuquerque tarafından ele geçirildi ve yağmalanarak camileri, hânedan mezarları ve diğer kâgir binaları taşları kale yapımında kullanılmak üzere yıkıldı.' · 'müslüman tüccarlar daha çok Portekizliler’in rakibi olan Sumatra’daki Açe Sultanlığı’nın Açe Limanı’nı tercih ettiler.' · TDV ace birebir: 'Malay’da yerleşmiş olan Portekizliler’in Sumatra’yı istilâ emellerinden vazgeçmeyerek Açe’ye devamlı saldırılar düzenledikleri, Alâeddin Riâyet Şah’ın Osmanlı Hükümdarı Kanûnî Sultan Süleyman’dan yardım istemesinden anlaşılmaktadır (1565).'",
  duygu:["⚔️"] },

];

;
/* ==== data/olaylar_p0048.js ==== */
// =====================================================================
// PAKET 0048 — LURİSTAN 1591-92 / 1603 (Emre'nin kararı, 13 Eylül 2026,
// ikinci tur, oturumlar/FERHATPASA-SINIR-0913.md madde 3):
//   "Luristan: 1590'da Osmanlı ise Osmanlı gösterilir. Haritada renk
//    değişimi 1603 (TDV luristan). 1591-92 Şahverdi'nin Safevî'ye bağlılık
//    bildirmesi (Monshi) kronolojiye isyan maddesi olarak; kesin kayıp 1603
//    maddesi. Dayanak belge ne diyorsa odur — iki gelenek maddelerde
//    açıkça yazılır."
// Oturum: FERHATPASA-KARAR · rapor denetim/FERHATPASA-KARAR-UYGULA-0913.md
//
// 🔴 BU İKİ MADDE BUGÜN HARİTADA BİR KIRILMAYA OTURMUYOR (kırılmasız madde,
//   Değişmez 2t). Luristan yerleşimi bugün d:1590-03-21→1603-10-21 taşıyor;
//   renk değişimini 1603-01-01'e çeken yama KOŞU SONRASI önerisidir:
//   denetim/YAMA-FERHATPASA-BIRLESIK-0913.json (Luristan d→v, t 1603-01-01;
//   Nihâvend şık A t 1603-01-01). Yama inince (b) maddesi o kırılmayı kapatır.
//
// 🔴 D147 ÖLÇÜLDÜ VE BİR KEZ YAKALADI — (a) maddesinin günü 1591-01-01'den
//   1592-01-01'e TAŞINDI:
//   ilk yazım t:1591-01-01 → denetle.py --ayrinti önce/sonra farkı:
//     yerlesimler_asya.js kuyruğu 320 → 319 MADDESİZ · 2s KAPSAM DIŞI 357 → 356
//   sebep: aynı günde iki YABANCI kırılma — Haydarâbâd (Dekken) golkonda
//     s.f 1591-01-01 · Chilpancingo yeni-ispanya s.f 1591-01-01 — Luristan
//     maddesi onları SAHTE kapatıyordu.
//   ayrıca 1591-01-01 kaynağın penceresinin ÖNCESİNE düşüyordu: Monshi
//     '1000/1591-92' — Türk yılı Nevruz 1591'de, hicrî 1000 19 Ekim 1591'de
//     başlar. 1592-01-01 hicrî 1000'in İÇİNDEDİR (19 Eki 1591–7 Eki 1592).
//   1592-01-01'deki yabancı kırılmalar (Lâhîcan · Tatta · Hanoi …) zaten
//     olaylar_ek14.js 'Dâvud Ağa'nın hassa mimarbaşı olması' (aynı gün)
//     tarafından sayılıyor ⇒ bu madde yeni bir sahte kapanış ÜRETMEZ
//     (sonra-ölçümü: denetim/FERHATPASA-KARAR-UYGULA-0913.md).
//   (b) 1603-01-01: ±30 günde HİÇBİR kategoride (s/d/v/isg) kırılma yok.
// GÜN: kaynaklar YIL veriyor ⇒ YYYY-01-01 (§4).
// AD ALANI (§7): data/olaylar_p0048.js → window.OLAYLAR_P0048 (diskte yoktu).
// 🔴 index.html satırı koordinatörde — bağlanmadan CANLI DEĞİLDİR (D099).
//   (denetle.py olaylar*.js glob'uyla okur; Değişmez 2 evrenine BUGÜN girer.)
// =====================================================================

window.OLAYLAR_P0048 = [

{ t:"1592-01-01", k:"isyan", etiket:["isyan","siyaset","konu-siyasi","konu-isyan"],
  b:"Luristan hâkimi Şâhverdi'nin Şah Abbas'a bağlılık bildirmesi",
  gun:"1000 (1591-92) — kaynak yalnız yılı veriyor",
  yer:"Luristan (Hürremâbâd)", yer_id:"Luristan",
  kisiler:"Şâhverdi Han, Şah I. Abbas",
  d:"1589'da Osmanlılara itaat ederek Bağdat beylerbeyinin tâbii olan Luristan hâkimi Şâhverdi, Safevî tarihçisi İskender Bey Münşî'nin anlatımına göre 1000 (1591-92) yılında Safevî tacına bağlılığını bildirmek zorunda kaldı. Aynı kaynak onun bu yıllarda iki taraf arasında gidip geldiğini, Hemedan valilerini rahatsız edip Burûcird'e akınlar yaptığını ve 1002 (1593-94) yılında Şah Abbas'ın Hürremâbâd'ı işgal edip şehre bir vali atadığını yazar. TDV İslâm Ansiklopedisi ise 1590 İstanbul Antlaşması'yla Osmanlı idaresine bağlanan Luristan'ın Safevîlere tam olarak bağlanmasını 1603 yılına koyar. İki gelenek farklı tarih verir; bu madde Safevî geleneğindeki bağlılık beyanını, 1603 maddesi kesin kaybı gösterir.",
  ic_not_d:"Emre kararı (13 Eylül 2026, ikinci tur, madde 3): 1591-92 beyanı ISYAN maddesi olarak yazılır, haritada renk değişimi TDV'nin 1603'üdür. ⇒ Bu madde bir toprak kırılmasına bağlı DEĞİLDİR (isyan maddesi olarak kasıtlı). Gün: Monshi 'In the year 1000/1591-92' — hicrî 1000 = 19 Ekim 1591–7 Ekim 1592 ⇒ 1592-01-01 yıl kodu hicrî yılın İÇİNDE (§4). İlk yazımda 1591-01-01 idi: hem kaynak penceresinin önüne düşüyordu hem de aynı gündeki iki yabancı kırılmayı (Haydarâbâd golkonda · Chilpancingo) sahte kapatıyordu (D147, denetle.py önce/sonra farkıyla ölçüldü) ⇒ taşındı. Monshi alıntıları bu oturumda YENİDEN OKUNMADI — denetim/YAMA-FERHATPASA-GUNEY-0913.json A3 ve OLCUM-NIHAVEND-BAGLANTI-0913.md üzerinden (D104); TDV luristan cümlesi bu oturumda okundu (Rıza Kurtuluş, c.27 s.227, 2003). 1589 itaati Kütükoğlu 1962 s.183 (rapor özeti, alinti_ozet). Iranica ATĀBAKĀN-E LORESTĀN ek bilgi: Şâhverdi 1003/1594-95'te yeniden atandı, 1006/1597-98'de öldürüldü (GUNEY raporu üzerinden).",
  kaynak:"Eskandar Beg Monshi, History of Shah ʿAbbas the Great, çev. R. M. Savory (Boulder 1978), II s.642-643: 'Sahverdi then became the vassal of the Ottoman governor of Baghdad … In the year 1000/1591-92 … Šāhverdī was forced to declare his allegiance to the Safavid crown' · s.643: 'Šāhverdī began to molest the governors of Hamadan and to make raids on Borüjerd' · s.644: 'the Shah … occupied Korramābād and made Mahdīgolī Khan Šāmlū governor of the city (1002/1593-94)' · Kütükoğlu, Osmanlı-İran Siyâsî Münâsebetleri I (1962) s.183 (Eyvân itaati 997/1589) · luristan (TDV): 'Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (1603).'",
  duygu:["✊"] },

{ t:"1603-01-01", k:"kayip", etiket:["toprak-kayip","konu-askeri"],
  b:"Luristan'ın Safevîlere kesin olarak geçmesi",
  gun:"1603 — kaynak yalnız yılı veriyor",
  yer:"Luristan (Hürremâbâd), Nihâvend", yer_id:"Luristan",
  kisiler:"Şah I. Abbas",
  d:"1590 İstanbul (Ferhad Paşa) Antlaşması'yla Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas 1603'te Safevîlere tam olarak bağladı. Safevî tarihçisi İskender Bey Münşî ise Hürremâbâd'ın Şah Abbas tarafından daha önce, 1002 (1593-94) yılında işgal edilip şehre bir Safevî valisi atandığını yazar; iki gelenek arasındaki bu fark çözülmüş değildir. Aynı yıl Luristan'ın kuzeyindeki Osmanlı kalesi Nihâvend de Şah Abbas'ın eline geçti; Hemedan valisi Hasan Han kaleyi yerle bir etti.",
  ic_not_d:"Emre kararı (13 Eylül 2026, ikinci tur, madde 3-4): haritada Luristan'ın renk değişimi TDV luristan'ın 1603'ü; Nihâvend Luristan üzerinden 1603'e kadar Osmanlı toprağına BAĞLI (enklav değil). Yerleşim yaması koşu sonrası: denetim/YAMA-FERHATPASA-BIRLESIK-0913.json — Luristan v t:1603-01-01, Nihâvend d.t şık A 1603-01-01 (şık B: mevcut 1603-10-21 Tebriz günü, komşu-günü şartı ③ tutmuyor). Yama inene kadar bu madde kırılmasızdır (2t). ⚠️ olaylar_ek2.js t:1603-10-21 Tebriz maddesi 'Aynı tarihte elden çıkan diğer yerleşimler: Nahçıvan, Luristan' diyor — yama inince Luristan o listeden çıkmalı (dosya bende değil, koordinatöre bildirildi). Iranica NEHĀVAND yıkımı 1011/1602-03 verir — TDV nihavend--iran '1603'. Monshi alıntıları bu oturumda yeniden okunmadı (D104); TDV luristan ve nihavend--iran cümleleri bu oturumda okundu.",
  kaynak:"luristan (TDV, Rıza Kurtuluş, c.27 s.227): 'Bir ara 998'de (1590) İstanbul'da yapılan antlaşmaya göre Osmanlı idaresine bağlanan Luristan'ı Şah I. Abbas Safevîler'e tam olarak bağladı (1603).' · nihavend--iran (TDV, İbrahim Sarıçam, c.33 s.98-99): 'Şah I. Abbas 1603'te şehri ele geçirdi' · Eskandar Beg Monshi, çev. Savory (1978), II s.644: 'the Shah … occupied Korramābād and made Mahdīgolī Khan Šāmlū governor of the city (1002/1593-94)' · Encyclopaedia Iranica, «Nehāvand»: 'Shah ʿAbbās's governor of Hamadan, Ḥasan Khan, razed the fort to the ground'",
  duygu:["😔"] },

];

;
/* ==== data/olaylar_p0049.js ==== */
// =====================================================================
// PAKET 0049 — PAKET-A3 KRONOLOJİ (13 Eylül 2026, 1.MURAT sevki,
// denetim/OLCUM-PAKET-SINIF-0913.md "A3 · KRONOLOJİ" + A1'den iki devir)
// Oturum: PAKET-A3 · rapor denetim/PAKET-A3-KRONOLOJI-0913.md
//
// KALEMLER
//   0042/H-0004  Katalan seferinin başı ............ 1303-01-01
//   0020/H-0013  Ahıska'nın Osmanlı idaresine girişi  1578-08-09 (gün KOMŞUDAN, §4 şartlı)
//   A1 devri ②   1595 Tuna kalelerine akınlar ........ 1595-01-01
//   0035/H-0090  savaş başlangıçları (ilk parti) ..... 1711-04-09 · 1787-07-27
//   0039/H-0004  1918-1923 doğu/güney cephesi (10) ... 1919-04-12 … 1921-06-01
//
// 🔴 D147 HER GÜN İÇİN ÖNCEDEN ÖLÇÜLDÜ (denetim/ARAC-A3-KIRILMA-0913.py ③):
//   bu dosyadaki 15 günün 15'inde "bu güne madde yazılırsa kapanacak maddesiz
//   kırılma günü" = 0. Elenen aday: 1853-07-03 (Rus ordusunun Prut'u geçişi)
//   — ±30 günde 1853-07-28 Ak-Meçit (hokand→rusya) kırılmasını SAHTE kapatırdı,
//   üstelik TDV gün vermiyor ⇒ yazılmadı.
// KAYNAK: hepsi TDV, gövdeleri okundu (ARAC-A6A-TDV-0913.py ile çekildi).
//   Kaynağın gün vermediği yerde YYYY-01-01 ve `ic_not_gun` (§4).
//   Atlas dönemleri, savaslar.js sefer f/t ve künye günleri DAYANAK DEĞİLDİR.
// AD ALANI (§7): data/olaylar_p0049.js → window.OLAYLAR_P0049
// 🔴 index.html satırı BAĞLI DEĞİL (o dosya başka işçide) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur, Değişmez 2 evrenine
//   BUGÜN girer.
// =====================================================================

window.OLAYLAR_P0049 = [

// ── 0042/H-0004 — Katalan seferinin başı ───────────────────────────
{ t:"1303-09-01", kesinlik:"ay", k:"sefer", etiket:["savas","diplomasi","konu-askeri","konu-diplomasi"],
  b:"Katalan Kumpanyası Bizans hizmetine girdi — Anadolu seferinin başlangıcı",
  gun:"Eylül 1303",
  ic_not_gun:"W52b/1006: AY kaynaklı (GEC + Bilkent tezi, kaynak alanında) → 1303-09-01 + kesinlik:ay; gün bulunamadı. Önceki not: TDV bizans yıl verir, gün vermez; savaslar.js sefer f:1303-09-01 ve kronoloji_katalan.js 1303-09-01 atlas kaydıdır, DAYANAK DEĞİLDİR (bu değişiklik onlara değil yukarıdaki iki kaynağa dayanır). ⚠️ js/app.js sefer kırpması çapayı seferin t'sine (1305-06-01) bağlıyor; bu madde okun görünür başlangıcını tek başına öne çekmez (rapor §0042/H-0004).",
  yer:"İstanbul ve Batı Anadolu (Alaşehir)", yer_id:"Alaşehir",
  kisiler:"Roger de Flor, II. Andronikos",
  d:"Batı Anadolu'da Türk beylikleri karşısında toprak kaybeden Bizans İmparatorluğu, Roger de Flor kumandasındaki yaklaşık 6500 kişilik Katalan birliğini ücretli asker olarak hizmetine aldı. TDV'nin Bizans maddesine göre birlik 1303'te imparatorluğun yardımına geldi ve ertesi yıl Germiyanoğulları'nın kuşattığı Alaşehir'i kurtardı. Ancak kumpanya kısa sürede geçtiği yerleri yağmalamaya başladı; Bizans onu Trakya'ya geçirdi ve 1305'te Roger de Flor'u öldürttü.",
  ic_not_d:"TDV alasehir Katalanların Germiyan kuşatmasını kaldırdığını yazar, yıl vermez; TDV germiyanogullari aynı kuşatmayı 1306'ya koyar — TDV bizans'ın 1304'üyle iki yıllık ayrışma, bildirildi (§4⑥).",
  kaynak:"bizans · alasehir · Gran Enciclopèdia Catalana, \"expedició dels almogàvers a Orient\" (enciclopedia.cat): \"Trenta-sis vaixells partiren del port de Messina a l'estiu del 1303, i arribaren a Constantinoble pel setembre\" · Yunus Doğan, \"The Transformation of an Itinerant Army: From the Catalan Company to the Catalan Duchy of Athens and Neopatras (1303-1388)\", yüksek lisans tezi, İhsan Doğramacı Bilkent Üniv. Tarih Bölümü (danışman Luca Zavagno), 2019: \"The Catalan Company arrived at Constantinople in September 1303\"" },

// ── 0020/H-0013 — Ahıska ───────────────────────────────────────────
{ t:"1578-08-09", k:"fetih", etiket:["toprak-kazanc","konu-askeri"],
  b:"Ahıska atabegliğinin Osmanlı idaresine girmesi — Altunkale, Hırtıs ve Ahılkelek",
  gun:"Ağustos 1578, Çıldır zaferinin hemen ardından",
  ic_not_b:"denetle.py mükerrer denetimi ilk yazımda bu maddeyi olaylar_ek2.js 'Çıldır Zaferi — doğu savaşı başladı' (aynı gün) ile eşleştirdi: ortak 'Çıldır zaferi' başlık kelimeleri + 'Mustafa' (Lala Mustafa Paşa ↔ Menûçihr'in sonraki adı Mustafa Paşa). İki olay AYRI: biri meydan savaşı, öteki savaşın ardından atabeg ülkesinin itaati (TDV cildir-eyaleti). YALNIZ başlık konuya indirildi ('Çıldır zaferinin ardından' gun alanında duruyor); kişi alanı KORUNDU, çift bu yüzden denetle.py ZAYIF (ihlal olmayan gözden geçirme) listesinde [kişi:mustaf] olarak görünür — bilerek. Ayrılık beyanı (BILINEN_AYRI) arac/denetle.py sahibinin kararı — rapora yazıldı.",
  ic_not_gun:"TDV ahiska: atabegler 'Çıldır Savaşı (1578) sonunda' Osmanlı idaresine girdi — gün yok. TDV cildir-eyaleti: atabeg ülkesinin geri kalanının fethi savaşın 'hemen ardından' tamamlandı. GÜN KOMŞUDAN (§4 şartlı komşu günü, dört şart): Çıldır Savaşı 9 Ağustos 1578 — kendi kaynağı TDV lala-mustafa-pasa (5 Cemâziyelâhir 986) ve cildir-eyaleti; hedef için kaynakta gün yok; aynı sefer; açıkça yazıldı. Yerleşim tarafı: Ahıska d.f 1578-08-01 savaştan 8 gün ÖNCE — B önerisi denetim/YAMA-A3-0913.json.",
  yer:"Ahıska, Altunkale, Hırtıs, Ahılkelek", yer_id:"Ahıska",
  kisiler:"Menûçihr (sonra Mustafa Paşa), Dedis İmedi, Ardahan Sancak Beyi Abdurrahman Bey",
  d:"Lala Mustafa Paşa'nın Çıldır'da Safevî öncü kuvvetlerini yenmesinin hemen ardından Gürcü atabeglerinin elindeki topraklar da Osmanlı idaresine geçti. Altunkale ve çevresini tutan Dedis İmedi ile oğulları itaatlerini bildirdiler; Ardahan sancak beyi Çıldır ve Tümük'ü, başka Osmanlı birlikleri de Hırtıs ile Ahılkelek'i aldı. Menûçihr'e ve kardeşine birer sancak bırakıldı, atabeglik ülkesinin geri kalanı doğrudan idareye bağlandı. Ahıska bundan sonra yeni kurulan Çıldır eyaletinin merkezi olacak; İstanbul'a gelip müslüman olan ve Mustafa adını alan Menûçihr 1 Temmuz 1579'da bu eyaletin başına getirilecekti.",
  kaynak:"ahiska · cildir-eyaleti · lala-mustafa-pasa" },

// ── A1 devri ② (0021/H-0030) — 1595 Tuna kaleleri ───────────────────
//   Ayaklanmanın başı ZATEN VAR: olaylar_ek10.js 1594-10-05 (üç voyvodalık)
//   ve 1594-11-13 (Bükreş, Tuna kalelerine saldırı). Eksik olan, kaynakta
//   ADIYLA geçen kale olaylarıydı.
{ t:"1595-01-01", k:"savas", etiket:["isyan","savas","konu-askeri","konu-isyan"],
  b:"Cesur Mihail'in Tuna kalelerine akınları — Rusçuk yakıldı, İbrâil alındı, Silistre yağmalandı",
  gun:"Ocak – ilkbahar 1595",
  ic_not_gun:"Kaynaklar ay/mevsim veriyor, gün vermiyor → yıl kodu 1595-01-01 (§4). TDV murad-iii İbrâil kalesinin yakılmasını 'Ocak 1595', TDV ibrail zaptını '1595 Martında' verir — iki TDV maddesi ayrışıyor, bildirildi. TDV ruscuk 'Şubat 1595', TDV silistre '1595 ilkbaharı'. D147: 1595-01-01 ±30 günde maddesiz kırılma YOK (ölçüldü). Yerleşim tarafı: İbrail'in 1595-1601 Mihail idaresi atlasta yok (d 1538→1829) — B önerisi YAMA-A3-0913.json.",
  yer:"Rusçuk, İbrâil, Silistre", yer_id:"İbrail",
  kisiler:"Eflak Voyvodası Cesur Mihail (Mihai Viteazul), III. Murad",
  d:"Kutsal İttifak'a katılan Eflak Voyvodası Cesur Mihail, 1594-95 kışında Tuna boyunda doğrudan Osmanlı idaresindeki kale ve şehirlere yüklendi. TDV'nin Rusçuk maddesine göre Şubat 1595'te kaleyi alamasa da şehri ele geçirip yaktı. İbrâil maddesine göre Tuna'nın sol kıyısındaki İbrâil'i zaptetti ve şehir 1601'e kadar onun elinde kaldı; III. Murad maddesi de Eflak ordusunun İbrâil kalesini yakıp Silistre'ye kadar uzandığını yazar. Silistre maddesinde anılan bir tahrir kaydına göre Eflak ordusu 1595 ilkbaharında Tuna'yı geçerek Silistre'yi yağmaladı; şehrin kalesi yıkıldı ve uzun süre kullanılamadı. Aynı yaz Koca Sinan Paşa Eflak üzerine sefere çıkacaktı.",
  kaynak:"ruscuk · ibrail · silistre · murad-iii · koca-sinan-pasa" },

// ── 0035/H-0090 — savaş başlangıçları, ilk parti ───────────────────
//   Plan ve mevcut başlangıç maddelerinin dökümü raporda. Bu partide yalnız
//   TDV'nin GÜNÜYLE verdiği iki başlangıç adımı yazıldı.
{ t:"1711-04-09", k:"sefer", etiket:["savas","sefer","konu-askeri"],
  b:"Prut Seferi başladı — 1710-1711 Osmanlı-Rus Savaşı'nda ordu İstanbul'dan çıktı",
  gun:"9 Nisan 1711",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"III. Ahmed, Baltacı Mehmed Paşa, Çar I. Petro, Kırım Hanı Devlet Giray",
  d:"Rusya'nın Osmanlı topraklarına saldırması, Çar Petro'nun 1700 İstanbul Antlaşması'nın hükümlerine uymaması ve Kırım Hanı Devlet Giray'ın teşvikleri III. Ahmed'i Rusya'ya savaş ilan etmeye götürmüştü. TDV'nin III. Ahmed maddesine göre sonradan Prut Seferi adıyla anılacak bu savaş, Osmanlı ordusunun 9 Nisan 1711'de İstanbul'dan hareketiyle fiilen başladı. Baltacı Mehmed Paşa kumandasındaki ordu Kırım kuvvetleriyle birleşerek Prut nehrine doğru ilerledi; sefer Temmuz'da Rus ordusunun Prut kıyısında sıkıştırılmasıyla sonuçlanacaktı.",
  kaynak:"ahmed-iii" },

{ t:"1787-07-27", k:"diplomasi", etiket:["diplomasi","savas","konu-askeri","konu-diplomasi"],
  b:"Rus elçisine ültimatom — 1787-1792 Osmanlı-Rus Savaşı'na giden son adım",
  gun:"27 Temmuz 1787",
  yer:"İstanbul", yer_id:"İstanbul",
  kisiler:"I. Abdülhamid, Reîsülküttâb Süleyman Feyzi Efendi, Koca Yûsuf Paşa, II. Katerina",
  d:"Kırım'ın 1783'te Rusya'ya ilhakından sonra süren gerginlik, Rusya'nın İskenderiye konsolosluğunun Mısır'daki kölemen beylerini Osmanlı'ya karşı kışkırttığının anlaşılmasıyla koptu. TDV'nin I. Abdülhamid maddesine göre Reîsülküttâb Süleyman Feyzi Efendi 27 Temmuz 1787'de İstanbul'daki Rus elçisine yedi maddelik bir ültimatom verdi. Rusya'nın cevabı beklenmeden savaş kararı alındı ve birkaç hafta içinde ilan edildi; savaşın hedefi Kırım'ın geri alınmasıydı.",
  kaynak:"abdulhamid-i · yas-antlasmasi" },

// ── 0039/H-0004 — 1918-1923 doğu ve güney cephesi, ilk parti (10) ────
//   Mevcut çekirdek maddeler DOKUNULMADI: Brest-Litovsk · Batum 1918 · Elviye-i
//   Selâse · Gümrü Antlaşması · Ankara İtilâfnâmesi · Kars Antlaşması ·
//   Çukurova dosyası (Maraş işgali 1919, Kilis · Antep · Tarsus · Mersin ·
//   Adana kurtuluşları).
//   ⚠️ Beş maddede harita KIPIRDAMAZ: atlas Kars · Ardahan · Artvin · Antalya
//   için 1919-1921 işgal/Ermeni dönemini taşımıyor — madde kaynaklı, eksik
//   olan yerleşim tarafı (B, YAMA-A3-0913.json).
{ t:"1919-04-12", k:"kayip", etiket:["isgal","toprak-kayip","konu-askeri"],
  b:"Kars'ın İngiliz işgali — Cenûb-ı Garbî Kafkas Hükûmeti dağıtıldı",
  gun:"12 Nisan 1919",
  ic_not_gun:"TDV kars '12 Nisan 1919', TDV ahiska '13 Nisan 1919' — bir günlük ayrışma, şehir maddesi esas alındı. Atlas Kars'ı 1918-05-25 → 1920-04-23 OSMANLI gösteriyor; İngiliz/Ermeni denetimi yok — yerleşim tarafı B.",
  yer:"Kars", yer_id:"Kars", kisiler:"",
  d:"Mondros Mütarekesi'nin 1914 sınırlarına çekilme hükmü gereği Osmanlı ordusu Kars'ı boşaltmıştı. Bölge halkı Ermeni ve Gürcü saldırılarına karşı 5 Kasım 1918'de Kars İslâm Şûrası'nı kurdu ve Ocak 1919'daki kongreyle bunu Cenûb-ı Garbî Kafkas Hükûmet-i Muvakkate-i Milliyesi'ne dönüştürdü. TDV'nin Kars maddesine göre İngilizler 12 Nisan 1919'da Kars'ı işgal edip bu hükümeti dağıttı, üyelerini tutuklayarak sürgüne gönderdi ve şehrin denetimini Ermenilere bıraktı.",
  kaynak:"kars · ahiska" },

{ t:"1919-04-29", k:"kayip", etiket:["isgal","toprak-kayip","konu-askeri"],
  b:"Antalya'nın İtalyan işgali",
  gun:"29 Nisan 1919",
  ic_not_gun:"Gün TDV antalya. Atlas Antalya'yı 1920-04-23'e kadar OSMANLI gösteriyor, İtalyan işgal dönemi yok — yerleşim tarafı B.",
  yer:"Antalya", yer_id:"Antalya", kisiler:"",
  d:"Mondros Mütarekesi'nin ardından İtilaf devletleri Anadolu'da işgal bölgelerine yerleşirken İtalya güneybatı Anadolu'ya yöneldi. TDV'nin Antalya maddesine göre şehir ve çevresi, mütareke hükümlerine dayanılarak 29 Nisan 1919'da İtalyanlar tarafından işgal edildi. İşgal yaklaşık iki yıl sürecekti.",
  kaynak:"antalya" },

{ t:"1920-02-11", k:"savas", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Maraş'ın kurtuluşu — Fransızlar şehri boşalttı",
  gun:"11-12 Şubat 1920",
  yer:"Maraş", yer_id:"Maraş", kisiler:"Sütçü İmam, Doktor Mustafa Bey, General Queratte",
  d:"İngilizlerin 22 Şubat 1919'da işgal ettiği Maraş, iki devlet arasındaki anlaşmayla 29 Ekim 1919'da Fransızlara bırakılmıştı. Fransız birlikleri içindeki Ermenilerin tutumu ve kaledeki Türk bayrağının indirilmesi halkı ayaklandırdı; şehirde Müdâfaa-i Hukuk Cemiyeti ve Kuvâ-yi Milliye örgütlendi. TDV'nin Kahramanmaraş maddesine göre çatışmaların sonunda Fransızlar 11 Şubat 1920'de şehri boşaltıp İslâhiye yönüne çekilmeye başladı ve Maraş 11-12 Şubat'ta kurtuldu. Şehre 1925'te İstiklâl madalyası verildi.",
  kaynak:"kahramanmaras" },

{ t:"1920-04-11", k:"savas", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Urfa'nın kurtuluşu — Fransız garnizonu şehri terk etti",
  gun:"11 Nisan 1920 (anlaşma 10 Nisan)",
  ic_not_gun:"TDV sanliurfa: Fransızlar 10 Nisan 1920'de anlaşmayla boşaltmayı kabul etti, ertesi gün şehri terk etti. Atlasın isg dönemi 1920-04-10'da bitiyor ve kendi notu 'TÜRETİLDİ — doğrulanmadı' diyor; TDV'ye göre çıkış 11 Nisan — yerleşim tarafı B.",
  yer:"Urfa", yer_id:"Urfa", kisiler:"",
  d:"Mart 1919'da İngilizlerin, yedi ay kadar sonra da Fransızların işgal ettiği Urfa'da halk 7 Şubat 1920'de işgal kuvvetlerine karşı ayaklandı. TDV'nin Şanlıurfa maddesine göre iki ay süren çarpışmaların ardından Fransızlar 10 Nisan 1920'de anlaşma şartlarıyla Urfa'yı boşaltmayı kabul etti ve ertesi gün şehirden çıktı.",
  kaynak:"sanliurfa" },

{ t:"1920-09-28", k:"savas", etiket:["savas","konu-askeri"],
  b:"Doğu Cephesi harekâtı başladı — Kâzım Karabekir Ermenistan'a karşı taarruza geçti",
  gun:"28 Eylül 1920",
  yer:"Soğanlı dağı geçitleri, Sarıkamış", yer_id:"Sarıkamış", kisiler:"Kâzım Karabekir Paşa",
  d:"Sevr Antlaşması'nın Erzurum, Trabzon, Van, Bitlis ve Bingöl'ü Ermenistan'a bırakması ve bölgedeki Ermeni saldırılarının artması üzerine TBMM hükümeti 20 Eylül 1920'de harekâta izin verdi. TDV'nin Kâzım Karabekir maddesine göre Şark Cephesi Kumandanı Karabekir, Soğanlı dağı geçitlerini tutan birliklerine taarruz emri vererek 28 Eylül'de doğu harekâtını başlattı. Sarıkamış, Göle ve Kağızman alındı; harekât bir ay sonra Kars'ın kurtarılmasıyla sürecekti.",
  kaynak:"kazim-karabekir" },

{ t:"1920-10-30", k:"fetih", etiket:["savas","kurtulus","toprak-kazanc","konu-askeri"],
  b:"Kars'ın kurtuluşu — Doğu Cephesi Kars'a girdi",
  gun:"30 Ekim 1920",
  ic_not_gun:"Gün TDV kars ve kazim-karabekir (iki madde uyuşuyor). Atlas Kars'ı 1920-04-23'ten tbmm-turkiye gösteriyor; 1919-1920 Ermeni denetimi olmadığı için bu maddede harita kıpırdamaz — yerleşim tarafı B.",
  yer:"Kars", yer_id:"Kars", kisiler:"Kâzım Karabekir Paşa",
  d:"TDV'nin Kars maddesine göre Kâzım Karabekir Paşa 30 Ekim 1920'de Kars'a girdi ve şehir, İngilizlerin 1919'da denetimini bıraktığı Ermeni idaresinden kurtarıldı. Karabekir maddesi bunun Kars'ın ikinci kurtuluşu olduğunu vurgular: şehir ilk kez Nisan 1918'de Ermenilerden alınmıştı. Doğu Cephesi ilerleyerek 7 Kasım'da Gümrü'yü aldı; savaş 3 Aralık 1920'deki Gümrü Antlaşması ile sona erdi.",
  kaynak:"kars · kazim-karabekir" },

{ t:"1921-02-09", k:"kayip", etiket:["savas","konu-askeri"],
  b:"Antep savunmasının sonu — şehir on ay direndikten sonra Fransızlara bırakıldı",
  gun:"7-9 Şubat 1921",
  yer:"Antep", yer_id:"Antep", kisiler:"Şâhin Bey",
  d:"İngilizlerin 17 Aralık 1918'de girdiği Antep, 5 Kasım 1919'da Fransızlara bırakılmıştı; Antep-Kilis hattındaki ilk direnişi Şâhin Bey yönetti. TDV'nin Gaziantep maddesine göre şehir halkı 1 Nisan 1920'den 7 Şubat 1921'e kadar Fransız kuvvetlerine karşı direndi; direniş kırılınca savunmadaki kuvvetler geri çekildi ve Fransızlar 9 Şubat'ta şehre hâkim oldu. TBMM, işgale on ay dayanan şehre bundan üç gün önce, 6 Şubat 1921'de gazilik unvanı vermişti. Antep, Ankara Antlaşması'nın ardından 25 Aralık 1921'de boşaltılacaktı.",
  kaynak:"gaziantep" },

{ t:"1921-02-23", k:"fetih", etiket:["kurtulus","toprak-kazanc","konu-askeri"],
  b:"Ardahan ve Artvin'in kurtuluşu",
  gun:"23 Şubat 1921",
  ic_not_gun:"Gün TDV ardahan ve kazim-karabekir. Atlas Ardahan'ı 1920-04-23'ten tbmm-turkiye, Artvin'i 1921-10-13'e kadar sovyet-rusya gösteriyor — iki kayıt da bu günle uyuşmuyor, yerleşim tarafı B.",
  yer:"Ardahan, Artvin", yer_id:"Ardahan", kisiler:"Kâzım Karabekir Paşa",
  d:"Gümrü Antlaşması'ndan sonra Doğu Cephesi, elviye-i selâsenin Gürcistan elindeki kısmına yöneldi. TDV'nin Ardahan maddesine göre Gürcü ve Ermeni çeteleriyle süren mücadelenin sonunda 23 Şubat 1921'de Artvin ile birlikte Ardahan sancağı da kurtarıldı. Kâzım Karabekir maddesi bu hamleyle Çürüksu, Acara ve Batum kazaları dışında kalan elviye-i selâse topraklarının geri alındığını yazar.",
  kaynak:"ardahan · kazim-karabekir" },

{ t:"1921-03-16", k:"antlasma", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"Moskova Antlaşması — TBMM ile Sovyet Rusya doğu sınırını belirledi",
  gun:"16 Mart 1921",
  yer:"Moskova; Kars, Ahıska", yer_id:"Kars", kisiler:"",
  d:"TBMM hükümeti ile Sovyet Rusya arasında 16 Mart 1921'de Moskova Antlaşması imzalandı. TDV'nin Kars maddesine göre bu antlaşma ile 13 Ekim 1921'deki Kars Antlaşması'nın sınır düzenlemeleri sonucunda Kars yeni Türk devletinin sınırları içinde kaldı. Ahıska maddesine göre ise Ahıska bu antlaşmayla Gürcistan Sovyet Sosyalist Cumhuriyeti'nin Tiflis vilâyetine bağlandı. Doğu sınırı, yedi ay sonra Güney Kafkasya cumhuriyetleriyle imzalanan Kars Antlaşması'yla kesinleşecekti.",
  kaynak:"kars · ahiska" },

{ t:"1921-06-01", k:"siyaset", etiket:["kurtulus","toprak-kazanc","konu-askeri","konu-siyasi"],
  b:"İtalyanlar Antalya'yı boşaltmaya başladı",
  gun:"1 Haziran 1921",
  ic_not_gun:"Gün TDV antalya. Yerleşim tarafı yazıldı: yerlesimler.js Antalya isg:italya {1919-04-29→1921-06-01} (TDV antalya, GEMINI-DOGRULA 0919) — harita bu gün kıpırdar; 2t isg havuzu bu maddeyi kapatır (KIRILMASIZ-9, 19 Eyl 2026).",
  yer:"Antalya", yer_id:"Antalya", kisiler:"",
  d:"TDV'nin Antalya maddesine göre 29 Nisan 1919'dan beri süren İtalyan işgali, İtalyanların 1 Haziran 1921'de şehri boşaltmaya başlamasıyla sona erdi. Antalya ve çevresi böylece Millî Mücadele'nin askerî sonucunu beklemeden işgalden kurtuldu.",
  kaynak:"antalya" }

];

;
/* ==== data/olaylar_p0050.js ==== */
// =====================================================================
// PAKET 0050 — PAKET-KRON3 KRONOLOJİ (13 Eylül 2026, 1.MURAT sevki)
// Rapor: denetim/PAKET-KRON3-0913.md
//
// NİÇİN: PAKET-KAPSAM (ae251c0) 90 çekirdek maddeyi kapsam:"dis" işaretledi.
// Osmanlı listesine ileride 'dis' süzgeci bağlanırsa, ±30 günde YALNIZ 'dis'
// maddelerin durduğu harita kırılmaları sessizleşir (D147). Bunlardan Osmanlı
// dünyasını ilgilendiren beşi bugün de ANLATILMAMIŞTI — kapatan madde başka bir
// olaydı (Demak 1527 · Kiel 1814 · Assab 1882 · Trianon 1920 · Tannu Tuva 1922).
// Bu dosya o geçişleri KENDİ maddeleriyle yazar (+ M-3866 hükmüyle Bihaç'ın
// TDV'deki kısa Osmanlı idaresi).
//
// ÖLÇÜM ALETİ: denetim/ARAC-KPS-KIRILMA-0913.js (+ genelleştirilmiş hâli
// raporda: bütün 135 'dis' madde, 130 kırılma, 21'i Osmanlı-hiç yerleşimli).
//
// 🔴 TARİH KAYNAKTAN. Atlasın kırılma günü DAYANAK DEĞİLDİR (CLAUDE.md §4
//   "ATLAS REFERANS DEĞİLDİR"). Kaynak günü atlasınkinden farklıysa fark
//   raporda "atlas düzelecek yer" listesindedir (Dubrovnik 1814).
// TAKVİM: 1527 Jülyen (çevirme yok). 1814 · 1920 · 1922 Gregoryen kaynak.
//   1882: Sırp kanunu Jülyen 22 Şubat → Gregoryen 6 Mart; ÇEVİRME YAPILDI ve
//   ilgili maddenin ic_not_gun alanında yazılıdır (VERI-YAPISI TAKVİM).
// AD ALANI (§7): data/olaylar_p0050.js → window.OLAYLAR_P0050
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0050 = [

// ── Bihaç 1527 · ① Cetin seçimi ─────────────────────────────────────
{ t:"1527-01-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","diplomasi","konu-siyasi","konu-diplomasi"],
  b:"Cetin Meclisi — Hırvat soyluları Mohaç'tan sonra Habsburg Ferdinand'ı Hırvatistan kralı seçti", yer_id:"Cetin (Cetingrad)",
  gun:"1 Ocak 1527",
  yer:"Cetin (Cetingrad), Hırvatistan Krallığı ve Una-Kupa serhaddi",
  kisiler:"Avusturya Arşidükü I. Ferdinand",
  d:"Mohaç'ta Macar-Hırvat kralı II. Lajos'un ölümüyle taht boşalınca Hırvat soyluları 31 Aralık 1526'da Cetin'de toplandı ve yılbaşı günü Avusturya arşidükü Ferdinand'ı kral ilan etti. TDV'nin ifadesiyle Hırvatlar bu seçimi Macar soylularından bağımsız olarak yaptılar; seçim belgesi, Osmanlı akınları karşısında hıristiyan devletten kopmamak gerekçesine dayanıyordu. Böylece Osmanlı Bosnası'na komşu Hırvat kaleleri Habsburg hânedanının tacına bağlandı; TDV'ye göre 1530'larda Habsburglar Hırvat sınır bölgesini düzenlemeye başladığında bu hattın ana merkezi Bihaç oldu.",
  ic_not_gun:"TDV hirvatistan yalnız yıl verir ('Mohaç Muharebesi'nden bir yıl sonra (1527)'). Gün: Hrvatski sabor (Hırvatistan Meclisi resmî tarih sayfası 'Sabor u Cetinu 1527. godine', okundu) — meclis 31 Aralık 1526'da toplandı, seçim 'na samu Novu godinu' ilan edildi. 1527 Jülyen dönemi, çevirme yok. Atlasın 1527-01-01 Bihaç kırılması (macaristan→avusturya) DAYANAK ALINMADI; gün kaynağa denk geldi.",
  ic_not_d:"Bihaç bu maddenin yer_id'si YAPILMADI: TDV bihac aynı yıl için Bihaç'ın 'kısa bir süre için' Osmanlı idaresine geçtiğini yazıyor (bir sonraki madde). İki TDV cümlesi birbirini çürütmez: seçim tacın hukukî devrini, öteki kalenin fiilî idaresini anlatır. Seçim belgesini imzalayan soylu/temsilci adları yalnız Vikipedi özetinde görüldü, yazılmadı. L. Margetić, 'Cetinski sabori u 1527.', Senjski zbornik 17 (1990) künyesi bulundu, OKUNMADI.",
  kaynak:"hirvatistan · bihac + Hrvatski sabor, 'Sabor u Cetinu 1527. godine' (sabor.hr, resmî)" },

// ── Bihaç 1527 · ② TDV bihac: Yayça sonrası kısa Osmanlı idaresi (M-3866 hükmü) ──
{ t:"1527-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Bihaç'ın kısa süreli Osmanlı idaresi — Mohaç ve Yayça'nın düşüşünün ardından",
  gun:"1527 (Yayça'nın alınmasından sonra; süre 'kısa')",
  yer:"Bihaç (Bihke), Yayça (Jajce), Una serhaddi", yer_id:"Bihaç (Bihać)",
  kisiler:"",
  d:"Mohaç zaferinin ardından Osmanlılar Bosna'da Macar tampon bölgesinin merkezi Yayça'yı ve Banaluka'yı aldı. TDV'nin Bihaç maddesine göre Mohaç'ı izleyen yılda Yayça Kalesi'nin alınmasından sonra Bihaç kısa bir süre için yeniden Osmanlılar'ın idaresine geçti. Kalenin ne zaman ve nasıl elden çıktığı kaynakta yazmıyor; TDV yalnız 1530'larda Habsburgların Hırvat sınır bölgesini düzenlerken hıristiyanların elindeki Bihaç'ı ana merkez yaptığını belirtir. Bihaç'ın kalıcı fethi 1592'de Bosna Beylerbeyi Hasan Paşa'nın seferiyle gerçekleşecekti.",
  ic_not_gun:"TEK KAYNAK: TDV (M-3866). TDV bihac: 'Mohaç Savaşı'nı (1526) izleyen yılda Yayça Kalesi'nin alınmasından sonra … kısa bir süre' ⇒ yıl 1527, gün ve bitiş YOK → YYYY-01-01 + kesinlik:'yil' (§4). ⚠️ TDV bosna-hersek Yayça ve Banaluka için '(1527 veya 1528)' diyor — iki TDV maddesi yılda tam örtüşmüyor, bildirildi (§4⑥); tarih bihac'ın kendi cümlesinden alındı. Bitiş uydurulmadı, metinde 'kısa süre' kaldı.",
  ic_not_d:"ATLAS DÜZELECEK YER (koşu sonrası yerleşim yaması): Bihaç kaydında 1592 öncesi hiç d: yok. Aynı TDV gövdesi ayrıca 'Stjepan Tomašević'in tutuklanmasından sonra Osmanlı hâkimiyetine girdi (1463)' [TDV: bihac] diyor — o da atlasta yok; bu paket 1463 için madde yazmadı (sevk 1527-28 idi). Bitiş günü kaynakta olmadığı için yama önerisi dönem SONUNU veremez — ölçülemedi.",
  kaynak:"bihac · bosna-hersek" },

// ── Dubrovnik 1814 ────────────────────────────────────────────────
{ t:"1814-01-28", k:"siyaset", kapsam:"ic", etiket:["siyaset","toprak","konu-siyasi","konu-askeri"],
  b:"Dubrovnik'te Fransız idaresinin sonu — eski Osmanlı haraçgüzârı şehre Avusturya kuvvetleri girdi",
  gun:"28 Ocak 1814",
  yer:"Dubrovnik (Ragusa), Gruž", yer_id:"Dubrovnik",
  kisiler:"Avusturya general-majörü Milutinović",
  d:"TDV'ye göre 1365'ten beri Osmanlı himayesinde bulunan Dubrovnik Cumhuriyeti'ne Fransızlar 27 Mayıs 1806'da şehri zaptederek son vermişti. 1813-1814 kışında şehir halkı Fransızlara karşı ayaklandı; 3 Ocak 1814'te iki Hırvat taburuyla Gruž'a gelen Avusturya general-majörü Milutinović garnizonu kuşattı; dört günlük bombardımanın ardından Fransız garnizonu generale elçi gönderdi. 28 Ocak şafağında Avusturya ve İngiliz birlikleri Gruž'dan şehre yürüdü; 31 Ocak'ta bölgede geçici Avusturya idaresi işlemeye başladı. Şehrin Avusturya topraklarına katılışı 1815 Viyana Kongresi'nde kesinleşti.",
  ic_not_gun:"TDV dubrovnik 1814 için gün/yıl VERMEZ (yalnız 27 Mayıs 1806 Fransız zaptı ve 1815 Viyana Kongresi). Gün: Frano Bona, 'Osvrt na ustanak podignut u Dubrovniku 1813.–1814.', Kolo 2/2008, Matica hrvatska (okundu: 3 Ocak Milutinović Gruž'da · 28 Ocak şafak yürüyüş). İdare başlangıcı: Državni arhiv u Dubrovniku, HR-DADU-310 inventarı girişi (okundu: 'Intendenza della Provincia di Ragusa Provvisorio' 31 Ocak 1814). Gregoryen. ATLAS DÜZELECEK YER: Dubrovnik s: fransa-cumhuriyet→avusturya 1814-01-01 (yuvarlak) → 1814-01-28 (ya da idare için 01-31); fark 27 gün, Değişmez 2s penceresi içinde.",
  kaynak:"dubrovnik + F. Bona, Kolo 2/2008 (Matica hrvatska) + Državni arhiv u Dubrovniku HR-DADU-310" },

// ── Sırbistan Krallığı 1882 ───────────────────────────────────────
{ t:"1882-03-06", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Sırbistan Krallığı'nın ilânı — eski Osmanlı tâbii prenslik krallığa dönüştü",
  gun:"6 Mart 1882 (Sırp takvimiyle 22 Şubat)",
  yer:"Belgrad, Niş, Semendire, Kragujevac", yer_id:"Belgrad",
  kisiler:"Kral I. Milan (Milan Obrenoviç)",
  d:"1878'de bağımsızlığını kazanan ve aynı yıl Osmanlı elindeki Niş'i de alan Sırbistan Prensliği, Milan Obrenoviç döneminde krallığa dönüştürüldü. Belgrad'da çıkarılan kanunun ilk maddesiyle prenslik Sırbistan Krallığı ilan edildi ve Prens Milan I. Milan adıyla kral oldu; kanun aynı gün resmî Srpske novine gazetesinde yayımlandı. Böylece 1878'e kadar Osmanlı'ya bağlı bir prenslik olan Sırbistan, Balkanlar'da krallık unvanıyla yerini aldı.",
  ic_not_gun:"TDV sirbistan yalnız yıl verir ('Prens Milan Obrenoviç 1882'de krallığını ilân etti'). Gün BİRİNCİL kaynaktan: 'Zakon o proglašenju Knjažestva Srbije za Kraljevinu', Srpske novine sy. 41, Pazartesi 22 Şubat 1882 (metin Vikizvornik transkripsiyonundan okundu; Vikizvornik burada dayanak değil, neşrin taşıyıcısı). 🔴 TAKVİM: Sırbistan 1882'de Jülyen kullanıyordu; 22 Şubat Jülyen = 6 Mart Gregoryen (+12 gün). ÇEVİRME YAPILDI çünkü atlasın 19. yüzyıl komşu kayıtları Gregoryen (VERI-YAPISI TAKVİM: yapıldıysa yazılır). Atlasın 1882-03-06 kırılması ve kronoloji_sirbistan.js aynı günü DAYANAK ALINMADI.",
  kaynak:"sirbistan · nis + Zakon o proglašenju Knjažestva Srbije za Kraljevinu, Srpske novine 41 (22.II.1882)" },

// ── Filistin sivil idaresi 1920 ───────────────────────────────────
{ t:"1920-07-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Filistin'de İngiliz sivil manda idaresi kuruldu — Osmanlı'dan alınan topraklarda askerî yönetimin sonu",
  gun:"1 Temmuz 1920",
  yer:"Kudüs, Gazze, Yafa, Akkâ, Nablus", yer_id:"Kudüs",
  kisiler:"Yüksek Komiser Herbert Samuel",
  d:"1917'de General Allenby'nin Gazze'yi ve ardından Kudüs'ü almasıyla Filistin'de dört yüz yıllık Osmanlı hâkimiyeti sona ermiş, Kudüs 1917-1920 arasında İngiliz askerî yönetiminde kalmıştı. 1920 San Remo Konferansı Filistin'i İngiliz mandasına verdi; İngiltere Temmuz 1920'den itibaren bölgede sivil bir manda yönetimi kurarak ülkeyi bir yüksek komiser aracılığıyla yönetmeye başladı. Sivil idarenin başında yüksek komiser Herbert Samuel vardı. Aynı yıl başlayan Arap ayaklanmaları ve yahudi-Arap çatışmaları manda döneminin bütününe damga vuracaktı.",
  ic_not_gun:"TDV filistin AY verir: 'İngiltere, Temmuz 1920 tarihinden itibaren Filistin'de bir sivil manda yönetimi kurdu'. Gün RESMÎ kaynaktan: 'An Interim Report on the Civil Administration of Palestine during the period 1st July, 1920–30th June, 1921', H. Samuel, Parlamentoya sunulan rapor, Ağustos 1921 — künye Yale/HathiTrust/WorldCat kataloglarından okundu; raporun GÖVDESİ OKUNMADI, gün raporun resmî dönem başlığından. Gregoryen. Atlasın 1920-07-01 kırılması DAYANAK ALINMADI.",
  kaynak:"filistin · kudus · gazze + Interim Report on the Civil Administration of Palestine, 1st July 1920–30th June 1921 (HMSO 1921)" },

// ── Mısır Krallığı 1922 ───────────────────────────────────────────
{ t:"1922-03-15", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Mısır Krallığı ilan edildi — Sultan Ahmed Fuâd kral unvanını aldı",
  gun:"15 Mart 1922",
  yer:"Kahire, İskenderiye", yer_id:"Kahire",
  kisiler:"Sultan (Kral) Ahmed Fuâd",
  d:"İngiltere 18 Aralık 1914'te Osmanlı Devleti'nin Mısır üzerindeki hükümranlık haklarını tek taraflı olarak kaldırıp ülkeyi himayesine almıştı. Savaş sonrasında İngiltere ile Mısır arasındaki müzakerelerden sonuç çıkmayınca İngiltere 28 Şubat 1922'de yine tek taraflı bir bildiriyle Mısır'ı bağımsız devlet ilan etti. Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı ve Mısır'da monarşi ilan edildi. TDV bu bağımsızlığı şeklî sayar; krallık düzeninin anayasası 19 Nisan 1923'te yürürlüğe girecekti.",
  ic_not_gun:"Gün TDV'den: misir gövdesi 'Sultan Ahmed Fuâd 15 Mart 1922'de kral (melik) unvanını aldı ve Mısır'da monarşi ilân edildi'. Aynı gövde bağımsızlık bildirisini 28 Şubat 1922, himayeyi 18 Aralık 1914 verir. Atlasın 1922-03-15 kırılması (misir-sultanligi→misir-kralligi) DAYANAK ALINMADI; gün kaynağa denk.",
  kaynak:"misir" }

];

;
/* ==== data/olaylar_p0051.js ==== */
// =====================================================================
// PAKET 0051 — VERI-KIRIM (14 Eylül 2026, 1.MURAT sevki · Emre kararı D)
// Rapor: denetim/VERI-KIRIM-0914.md · öncül: denetim/ARASTIRMA-KIRIM2-0913.md
//
// NİÇİN: YAMA-KIRIM2-0913 uygulanınca üç kırılma KENDİ olayını istiyor:
//   1480-01-01  Hacıbey  litvanya-buyuk-dukalik → kirim     (çekirdekte ±30 gün madde YOK)
//   1585-01-01  Voronej  __BOSLUK__ → rusya                 (±0 madde olaylar_ek2.js akçe tağşişi — ALAKASIZ)
//   1596-01-01  Belgorod __BOSLUK__ → rusya                 (±30 gün madde YOK)
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR"). Üç kaynak da
//   YALNIZ YIL veriyor ⇒ YYYY-01-01; gün uydurulmadı.
// Kaynak: Internet Encyclopedia of Ukraine (CIUS, University of Alberta),
//   encyclopediaofukraine.com — 14 Eylül 2026'da bu oturumca yeniden okundu.
// AD ALANI (§7): data/olaylar_p0051.js → window.OLAYLAR_P0051
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0051 = [

// ── Hacıbey 1480 ─────────────────────────────────────────────────────
{ t:"1480-01-01", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Hacıbey (Kaçibey) kalesinin Litvanya'nın elinden çıkması",
  gun:"1480", kesinlik:"yil",
  yer:"Hacıbey (Odessa), Karadeniz'in kuzeybatı kıyısı",
  yer_id:"Hacıbey (Odessa)",
  d:"Karadeniz'in kuzeybatı kıyısındaki Kaçibey limanı, 15. yüzyılın başında Litvanya büyük dükü Vytautas tarafından tahkim edilmişti. 1480'de kale Litvanya'nın elinden çıktı ve Hacıbey adını aldı. Kıyı, 15. yüzyılın sonunda Osmanlı'ya tâbi Kırım Hanlığı'nın denetimine geçti; bölgenin doğrudan Osmanlı idarî teşkilatına bağlanması ise 1538'dir.",
  ic_not_gun:"IEU 'Odesa' yalnız yıl verir ('In 1480 the fortress was captured…'); gün bulunamadı, §4 gereği 1480-01-01.",
  ic_not_d:"🔴 KAYNAK ÇELİŞKİSİ (hafif), SAKLANMADI: IEU 'Odesa' kaleyi 1480'de 'the Turks'ün aldığını yazıyor; IEU 'Ochakiv' kuzey kıyının 15. yy sonunda 'Crimean Khanate' denetimine geçtiğini yazıyor; TDV 'bucak' Osmanlı idarî teşkilatını 1538'e koyuyor. Atlas 1480-1538'i Kırım (gevşek himaye) çiziyor; 'Türkler' ifadesinin Osmanlı mı Kırım Tatarları mı olduğu bu kaynaklarla çözülmedi. TDV hacibey/hocabey/odesa/odessa slugları 302 ÖLÜ; ozu/akkirman/bucak Hacıbey'i anmıyor.",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), maddeler 'Odesa' ve 'Ochakiv' · TDV bucak (1538)" },

// ── Voronej 1585 ─────────────────────────────────────────────────────
{ t:"1585-01-01", k:"kurulus", kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  b:"Moskova'nın Voronej'de bozkıra karşı ileri garnizon kurması",
  gun:"1585", kesinlik:"yil",
  yer:"Voronej, Don havzası, vahşi bozkırın kuzey kenarı",
  yer_id:"Voronej",
  d:"16. yüzyılın sonunda bugünkü Sloboda Ukrayna'sı ve Don'un yukarı havzası, Tatarların Moskova'ya akınlarda geçtiği ıssız bir vahşi bozkırdı. Moskova hükümeti bu bozkırda bir dizi ileri garnizon kurdu; Voronej bunlardan biri olarak 1585'te kuruldu. Kale, sonraki on yıllarda Belgorod ve Kursk ile birlikte Moskova'nın güney savunma hattının ilk halkalarından oldu.",
  ic_not_gun:"IEU 'Slobidska Ukraine' yalnız yıl verir ('…Orel, Livny, and Voronezh (1585)'); gün bulunamadı, §4 gereği 1585-01-01. Aynı gündeki olaylar_ek2.js 'Büyük tağşiş' maddesi kırılmayı tesadüfen kapatıyordu, alakasız.",
  ic_not_d:"IEU parantezi Orel, Livny ve Voronej'i aynı yıla koyuyor; bu madde yalnız Voronej'i tarihliyor. TDV voronej 302 ÖLÜ. Atlas 1441-1585'i __BOSLUK__ çiziyor (kaynak Kırım tasarrufu yazmıyor).",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), madde 'Slobidska Ukraine'" },

// ── Belgorod 1596 ────────────────────────────────────────────────────
{ t:"1596-01-01", k:"kurulus", kapsam:"dis", etiket:["toprak-kazanc","konu-askeri"],
  b:"Moskova'nın Belgorod, Oskol ve Kursk'u bozkırda ileri garnizon olarak kurması",
  gun:"1596", kesinlik:"yil",
  yer:"Belgorod, Oskol, Kursk — Sloboda Ukrayna bozkırı",
  yer_id:"Belgorod",
  d:"Moskova hükümeti Kırım akınlarına karşı güney sınırını ileri taşıyarak 1596'da Belgorod, Oskol ve Kursk'u vahşi bozkırda garnizon noktaları olarak kurdu. Belgorod bu tarihten itibaren bir kale kasabası oldu ve sonraki yüzyılda uzanacak 300 kilometrelik Belgorod savunma hattının merkezi hâline geldi.",
  ic_not_gun:"IEU 'Slobidska Ukraine' ('Belgorod, Oskol, and Kursk (1596)') ve IEU 'Belgorod' ('From 1596 it was a fortress town…') yalnız yıl verir; gün bulunamadı, §4 gereği 1596-01-01.",
  ic_not_d:"IEU 'Belgorod' şehrin ilk anılışını 1237'ye koyuyor; 1441-1596 arası yerleşim sürekliliği ÖLÇÜLEMEDİ. Kursk atlasta ayrı zincir taşıyor (litvanya → moskova), bu madde onun kırılmasını tarihlemez. TDV belgorod 302 ÖLÜ.",
  kaynak:"Internet Encyclopedia of Ukraine (CIUS), maddeler 'Slobidska Ukraine' ve 'Belgorod'" },

// ── Don Kazak Ordası 1570 ────────────────────────────────────────────
// 🆕 Sevkte YOKTU: ③ D dönüşümü Don bozkırı (Sal) · Donets bozkırı · Çerkask'ın
//   kirim→don-kazak geçişini s:→s:'den v: bitişine çevirdi ⇒ Değişmez 2 kırılması
//   doğdu (1570-01-01, en yakın madde 203 gün). Tahta M-3902'de bildirildi.
{ t:"1570-01-01", k:"siyaset", kapsam:"ic", etiket:["siyaset","konu-siyasi","konu-diplomasi"],
  b:"IV. İvan'ın Don kazaklarına gramotası — Don Kazak Ordası'nın ilk güvenilir kaydı",
  gun:"1570", kesinlik:"yil",
  yer:"Don ve Kuzey Donets bozkırı, Razdory, Azak yolu",
  yer_id:"Çerkask (Razdory)",
  kisiler:"IV. İvan, İvan Novosiltsev",
  d:"Don üzerinde kazakların varlığına dair bilgiler 16. yüzyılın ortasından başlar. Rus askerî ansiklopedisine göre Don Kazak Ordası'nın kıdemi 1570'ten sayılır: o yıl Çar IV. İvan, Kuzey Donets'te yaşayan kazaklara bir gramota göndererek Azak üzerinden Osmanlı sultanına elçi olarak yollanan İvan Novosiltsev'e yardım etmelerini istedi ve karşılığında onları ödüllendirmeyi vaat etti. Bu, Don kazaklarının Moskova devletine hizmetine dair ilk güvenilir kayıttır. Kazakların başlıca merkezi önce Yukarı Razdory, sonra Çerkassk oldu.",
  ic_not_gun:"İki kaynak da yalnız yıl verir; gramotanın günü bulunamadı, §4 gereği 1570-01-01. Atlasın don-kazak künyesi f:1570-01-01 DAYANAK ALINMADI; yıl kaynağa denk geldi.",
  ic_not_d:"⚠️ Madde bir ÖRGÜTLENME/TANINMA kaydını tarihliyor, bir toprak devrini değil: kaynaklar Don bozkırının 1570'te Kırım'ın gevşek nüfuzundan çıktığını SÖYLEMİYOR. Atlasın 1502-1570 kirim → 1570 don-kazak modeli kaynağa bu madde ile bağlanmış sayılmaz (oturumlar/KIMLIK-DON-KAZAK.md: '1502 → 1570 nogay … kirim DEĞİL, ölçülmeli' notu hâlâ açık borç). ESBE 'Козачество' Çerkassk'ın 1570'te kurulduğunu 'bazı haberlere göre' diye temkinle anıyor; o cümle yazılmadı. TDV azak yalnız 'Kazaklar' der, Don/Zaporog ayırmaz.",
  kaynak:"Военная энциклопедия (Sytin, 1911-1915), madde 'Донское казачье войско' ('Старшинство войска считается с 1570 г.' — Novosiltsev gramotası) · ESBE 'Козачество' (imza В. М—н): 'уже в 1570 г. царем Иваном Грозным была отправлена грамота' (ru.wikisource, 14 Eyl 2026 okundu)" },

];

;
/* ==== data/olaylar_p0052.js ==== */
// =====================================================================
// PAKET 0052 — PAKET-KRON4 KRONOLOJİ (14 Eylül 2026, 1.MURAT sevki)
// Rapor: denetim/PAKET-KRON4-0914.md
//
// NİÇİN: PAKET-KAPSAM2 (§4) ölçtü — Şırnak'ın `d:` dönemi `kur:"1891-01-01"`
// ile başlıyor ve bu Osmanlı kırılmasını ±30 günde yalnız ALAKASIZ bir dış
// madde (Müleydâ, Necid) kapatıyor. Sevk: kaynaklı bir Şırnak maddesi.
//
// 🔴 SONUÇ: 1891 İÇİN KAYNAKLI OLAY YOK. TDV `sirnak` yıl vermiyor ("XIX.
//   yüzyılın sonlarına doğru bir köy adı olarak", Cuinet II, 612); 1891 bir
//   egemenlik değişimi değil, noktanın kayıtta GÖRÜNDÜĞÜ alt sınır. TDV bu
//   toprakları 1514'ten beri Osmanlı sayıyor. ⇒ 1891'e madde YAZILMADI (tarih
//   uydurma yok, §4). Atlas düzelecek yer raporda (§1).
// Yazılan tek madde, TDV'nin Şırnak için VERDİĞİ idarî tarih: 1884.
// Bu madde 1891 kırılmasını KAPATMAZ ve kapatmak için yazılmadı.
//
// AD ALANI (§7): data/olaylar_p0052.js → window.OLAYLAR_P0052
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0052 = [

// ── Siirt sancağı Bitlis vilâyetine · Şırnak Eruh kazasında ─────────
{ t:"1884-01-01", kesinlik:"yil", k:"idari", kapsam:"ic", etiket:["idari","konu-idari"],
  b:"Siirt sancağı Diyarbekir'den Bitlis vilâyetine nakledildi — Eruh kazası ve Şırnak köyü de Bitlis'e bağlandı",
  gun:"1884 (ay ve gün kaynakta yok)",
  yer:"Siirt sancağı, Eruh kazası (Şırnak)",
  yer_id:"Şırnak",
  kisiler:"",
  d:"Tanzimat'tan sonra eyalet sisteminden vilâyet sistemine geçilince Diyarbekir vilâyetine bağlı kalan Siirt sancağı 1884'te Bitlis vilâyetine nakledildi. TDV'nin Şırnak maddesine göre bugünkü Şırnak'ın bulunduğu topraklar da böylece Bitlis vilâyetinin Siirt sancağına bağlı Eruh kazası içinde yer aldı. Şırnak o sırada Eruh kazasının küçük bir köyüydü; adı XIX. yüzyılın sonlarına doğru kayıtlarda görünür, kaza merkezi oluşu ise Cumhuriyet'in ilk yıllarına kalır. Bu topraklar Çaldıran Seferi'nin ardından 1514'te Osmanlı'ya katılmış ve Diyarbekir eyaletinin Siirt sancağı içinde idare edilmişti.",
  ic_not_gun:"İKİ TDV MADDESİ AYNI YIL: `siirt` ('1884'te Bitlis vilâyetine nakledilen Siirt') · `sirnak` ('1884'te Siirt sancağı Bitlis vilâyetine bağlanınca'). Ay ve gün ikisinde de YOK ⇒ YYYY-01-01 + kesinlik:'yil' (§4).",
  ic_not_d:"ATLAS DÜZELECEK YER (Oturum 0 · yerlesimler_ok109.js Şırnak): kayıt `kur` ve `d:` başını 1891-01-01'e koyuyor. Dayanağı YOK: TDV `sirnak` yıl vermiyor ('XIX. yüzyılın sonlarına doğru', Cuinet II, 612) ve Cuinet'nin II. cildinin yılı kataloglarda çelişkili (British Library nüshası Wikimedia Commons'ta 1892 · Google-Michigan taraması 1890) — 1891 ölçülemedi. Üstelik bu kırılma bir egemenlik değişimi değil, noktanın kayıtta görünmesidir: TDV bu toprakları 1514'ten Osmanlı sayar. Bu madde o kırılmayı kapatmaz.",
  kaynak:"siirt · sirnak" }

];

;
/* ==== data/olaylar_p0053.js ==== */
// =====================================================================
// PAKET 0053 — UYGULA-BAGDAT KRONOLOJİ (14 Eylül 2026, 1.MURAT sevki)
// Araştırma: denetim/ARASTIRMA-BAGDAT-0914.md · yama: denetim/YAMA-BAGDAT-0914.json (M1-M3)
// Uygulama raporu: denetim/UYGULA-BAGDAT-0914.md
//
// NİÇİN: YAMA-BAGDAT E (Musul 1624-1625 Safevî dilimi) ve B (Şehrizor 1630
// Osmanlı dönüşü) yerleşim yamaları üç yeni harita kırılması doğurur
// (1624-01-01 · 1625-01-01 · 1630-03-16). Bu dosya o geçişleri KENDİ
// maddeleriyle yazar; yoksa Değişmez 2 açılır.
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR"). M1 ve M2
//   YIL hassasiyetlidir: TDV gün vermiyor ⇒ YYYY-01-01 + kesinlik:"yil".
// 🔴 KAYNAK ÇELİŞKİSİ (bildirildi, taraf seçilmedi): Kerkük'ün Safevî'den
//   geri alınışını TDV musul--irak 1035 (1625), TDV kerkuk 1039 (1630)
//   veriyor. M2 metni bunu açıkça söyler.
// TAKVİM: hicrî yıllar TDV'nin kendi milâdî karşılıklarıyla yazıldı.
// AD ALANI (§7): data/olaylar_p0053.js → window.OLAYLAR_P0053
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// =====================================================================

window.OLAYLAR_P0053 = [

// ── M1 · 1624 · Musul ve Kerkük Safevî eline geçti ─────────────────────
{ t:"1624-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Musul ve Kerkük'ün Safevî eline geçmesi — Bağdat'ın düşüşünün ardından",
  gun:"1033 (1623-24) — kaynak gün vermiyor",
  yer:"Musul, Kerkük", yer_id:"Musul",
  kisiler:"Şah Abbas, Karçakay Han, Çerkez Ahmed Paşa, Kāsım Han, Sipahi Küçük Ahmed",
  d:"Bekir Subaşı isyanıyla başlayan olaylar sonunda Bağdat'ı ele geçiren Şah Abbas, kumandanı Karçakay Han'ı kuvvetleriyle Musul ve Kerkük üzerine gönderdi. Musul Valisi Çerkez Ahmed Paşa şehri birkaç gün savunabildi; Kerkük gibi Musul da İran hâkimiyetine geçti ve valiliğe Kāsım Han getirildi. Hâfız Ahmed Paşa'nın öncü kuvvetine kumanda eden Sipahi Küçük Ahmed Musul önünde görününce Kāsım Han şehri bırakıp Bağdat'a çekildi, fakat Şah Abbas'ın karşı harekâtıyla Musul 1624'te yeniden Safevîlerin eline geçti.",
  ic_not_gun:"TDV musul--irak: «şehir tekrar Safevîler'in eline geçti (1033/1624)». Hicrî 1033 = 25 Ekim 1623 – 13 Ekim 1624; ilk alış 28 Kasım 1623 Bağdat teslimiNDEN SONRA. Gün yok ⇒ 1624-01-01 + kesinlik:'yil' (§4). 1624 içindeki iki el değiştirmenin günleri kaynakta yok, maddeye tek madde olarak yazıldı.",
  ic_not_d:"🔴 KARŞI: TDV abbas-i «Şah Abbas Musul, Kerkük ve Van'ı da almak istedi, fakat muvaffak olamadı» — cümle 1623-1629 saltanat ÖZETİNDE duruyor (ARAS-BAGDAT M-3906/M-3908 ayrıştırması: kalıcı tutamamayı anlatıyor). TDV hafiz-ahmed-pasa ayrıca «Kerkük ve Musul şahın kumandanlarından Kāsım Han tarafından zaptedildi» diyor. Üçüncü kaynak: Remzi Kılıç, Türk Kültürü XXXIX/460 (2001) ss.479-493 (ARAS-BAGDAT okudu).",
  kaynak:"musul--irak · hafiz-ahmed-pasa · kerkuk + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001), ss. 479-493" },

// ── M2 · 1625 · Hâfız Ahmed Paşa seferi, Musul ve Kerkük havalisi ──────
{ t:"1625-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Musul'un Safevîlerden kurtarılması — Hâfız Ahmed Paşa'nın Bağdat seferi",
  gun:"1035 (1625) — ordu eylül başında Musul'a vardı; gün yok",
  yer:"Musul, Kerkük, Altınköprü", yer_id:"Musul",
  kisiler:"Hâfız Ahmed Paşa, Çerkez Hasan Paşa",
  d:"IV. Murad, Vezîriâzam Hâfız Ahmed Paşa kumandasındaki orduyu Bağdat üzerine gönderdi. Ordu Diyarbekir civarındayken Altınköprü'de toplanan İran taraftarlarını Karaman Beylerbeyi Çerkez Hasan'ın öncü kuvveti Kerkük'e kadar kovaladı ve Kerkük de dahil bölgeyi kontrol altına aldı; Safevîler Musul'u bu defa da uzun süre elde tutamadı. Hâfız Ahmed Paşa eylül başında önce Musul'a, ardından Kerkük'e vardı ve 13 Kasım 1625'te Bağdat'ı kuşattı; kuşatma sonuçsuz kaldı ve Bağdat Safevî elinde kaldı. TDV'nin Kerkük maddesi ise şehrin Safevîlerden geri alınışını 1630'a, Hüsrev Paşa'ya bağlar.",
  ic_not_gun:"TDV musul--irak: «IV. Murad, 1035'te (1625) … Hâfız Ahmed Paşa kumandasındaki Osmanlı kuvvetlerini Bağdat'a sevketti» — yıl sevkin cümlesine bağlı, Kerkük'ün denetim altına alınması aynı seferin öncü harekâtı. TDV hafiz-ahmed-pasa: «eylül başlarında oradan hareketle önce Musul'a, ardından Kerkük'e vardı (1625)». Gün yok ⇒ 1625-01-01 + kesinlik:'yil'.",
  ic_not_d:"🔴 KAYNAK ÇELİŞKİSİ, TARAF SEÇİLMEDİ: TDV kerkuk «1033'te (1624) Bağdat'ı alan Safevîler Kerkük'ü ele geçirdilerse de Hüsrev Paşa tarafından 1039'da (1630) geri alındı». Kılıç 2001 1627'de «Kerkük Beylerbeyisi Bostan Paşa» anıyor (1625 yanlısı İŞARET). Bu yüzden madde yer_id'si Musul; Kerkük'ün atlas dönemi YAMA-BAGDAT D bekletildi (denetim/UYGULA-BAGDAT-0914.md).",
  kaynak:"musul--irak · hafiz-ahmed-pasa · kerkuk + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001)" },

// ── M3 · 16 Mart 1630 · Şehrizor'da Gülanber'in yeniden kuruluşu ───────
{ t:"1630-03-16", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Hüsrev Paşa'nın Şehrizor'da Gülanber Kalesi'ni yeniden kurması — Şehrizor beylerbeyiliği",
  gun:"16 Mart 1630",
  yer:"Gülanber, Şehrizor", yer_id:"Şehrizor",
  kisiler:"Boşnak Hüsrev Paşa, Arnavud Mustafa Paşa",
  d:"Bağdat seferine çıkan Sadrazam Hüsrev Paşa, şiddetli yağışlar yüzünden Musul'da uzun süre kaldıktan sonra Şehrizor'a yöneldi. Şah Abbas'ın istilâsında onun emriyle yıktırılmış olan Gülanber Kalesi'nin yeniden inşasına başlandı; Şehrizor tekrar beylerbeyilik merkezi yapıldı ve kaleye Arnavud Mustafa Paşa beylerbeyi olarak bırakıldı. Hüsrev Paşa bölgedeki aşiretleri itaat altına aldı, Mihriban Kalesi'ni ele geçirdi ve 5 Mayıs 1630'da bu kale yakınında Safevî ordusuna ağır kayıplar verdirdi.",
  ic_not_gun:"Yıl TDV sehrizor: «Gülanber Kalesi, Hüsrev Paşa zamanında yeniden inşa edildi (1630)». GÜN: Remzi Kılıç, Türk Kültürü XXXIX/460 (2001) ss.479-493 «16 Mart 1630da Şehrizorda Gülanber Kalesi'nin inşaatına başlanmıştır» — makaleyi ARAS-BAGDAT okudu; UYGULA-BAGDAT yeniden OKUYAMADI (remzikilic.com erişilemedi, HTTP 000). 5 Mayıs 1630: TDV murad-iv «22 Ramazan 1039'da (5 Mayıs 1630)».",
  ic_not_d:"TDV murad-iv: Hüsrev Paşa «Şehrizol Kalesi'ni (Gülanber) tamir ettirdi, bölgedeki aşiretleri itaat altına aldı. Mihriban Kalesi'ni de ele geçirdikten sonra …». Beylerbeyi adı (Arnavud Mustafa Paşa) yalnız Kılıç 2001'den. 🟡 1630 SONRASI: Zâlim Kalesi'nin yeniden İran'a geçtiği (H. Koç, Evliya Çelebi C.4 s.348 aktarımı) TARİHSİZ — maddeye yazılmadı, atlasa da işlenmedi.",
  kaynak:"sehrizor · murad-iv + Remzi Kılıç, Türk Kültürü XXXIX/460 (2001), ss. 479-493" }

];

;
/* ==== data/olaylar_p0055.js ==== */
// =====================================================================
// PAKET P04 · BALKAN — kronoloji maddeleri (14 Eylül 2026, 1.MURAT sevki)
// Oturum: P04-BALKAN · plan denetim/PAKET-SINIF2-0914.md §P04
// Rapor: denetim/P04-BALKAN-0914.md · Trakya önerisi: denetim/YAMA-TRAKYA-0914.json
//
// AD ALANI (§7): data/olaylar_p0055.js → window.OLAYLAR_P0055
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//    DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
//
// Bu dosya YALNIZ bu partide veriye İNEN geçişlerin maddelerini taşır:
//   ① 0042/H-0021           Dejanoviç vasallığı 1371 — `v:` zaten veride
//                           (Köprülü · İştip · Ustrumca · Doyran), maddesi
//                           yoktu (D147: kırılma "Çirmen Savaşı" maddesine
//                           düşüyor ama o madde prensliği adıyla anmıyor)
//   ② 0042/H-0034 · H-0042  Şehirköy 1412 — yerlesimler_serhat.js
//   ③ 0035/H-0063           Herseknovi 1538 işgali + 10 Ağustos 1539 geri
//                           alınışı — yerlesimler_ek.js isg[0].t
//
// Trakya fetih sırası (0025/H-0009 · 0030/H-0009 · 0042/H-0018/19) maddeleri
// BURADA DEĞİL: yerleşim kayıtları kilitli dosyalarda (yerlesimler.js ·
// ek24 · ek29) ⇒ maddeler YAMA-TRAKYA-0914.json'da, yamayla AYNI partide
// inecek. Erken inen bir fetih maddesi haritayla çelişirdi (D059).
//
// TARİH KAYNAKTAN (§4 "ATLAS REFERANS DEĞİLDİR"). Gün yoksa YYYY-01-01 +
// kesinlik:"yil"; pencere şartı gereken yerde kırılma günü devralındı ve
// ic_not_gun'da bildirildi.
// =====================================================================

window.OLAYLAR_P0055 = [

// ── ① 1371 · Dejanoviç Prensliği Osmanlı vasalı ─────────────────────────
{ t:"1371-09-26", kesinlik:"yil", k:"vassal", kapsam:"ic", etiket:["siyaset","konu-siyasi"],
  b:"Dejanoviç Prensliği (Kostadin-ili) Osmanlı vasalı oldu",
  gun:"1371 — Meriç (Çirmen) Savaşı'nın ardından; kaynak gün vermiyor",
  yer:"Köstendil (Velbujd), Ustrumca, İştip, Doyran, Köprülü (Veles)", yer_id:"Ustrumca (Strumica)",
  kisiler:"Konstantin Dejanoviç, Jovan Dejanoviç, I. Murad",
  d:"Meriç (Çirmen) yenilgisiyle Sırp devleti parçalanınca Jovan ve Konstantin Dejanoviç kardeşler, merkezi Velbujd (sonraki adıyla Köstendil) olan ve İştip, Ustrumca, Doyran ile Köprülü yöresini içine alan kendi prensliklerini kurdu. Jovan'ın kısa süre sonra ölmesiyle Konstantin I. Murad'ın hükümdarlığını tanıyarak Osmanlı vasalı oldu; prenslik bu bağla yarı bağımsız yaşadı. Konstantin 1395'te Rovine'de Yıldırım Bayezid'in saflarında ölünce ülkesi savaşsız Osmanlı idaresine geçti ve Kostadin-ili adıyla sancak oldu.",
  ic_not_gun:"TDV kostendil (M. Kiel): «Konstantin Dejanović 1371'de I. Murad'ın hükümdarlığını tanıyarak» — YIL. 1371-01-01 yazılsaydı madde savaştan önce düşerdi, veride v: 1371-09-26'da başlıyor ⇒ §4 pencere şartı: Çirmen Savaşı günü devralındı (TDV murad-i: 15 Rebîülevvel 773 / 26 Eylül 1371). Bu gün SAVAŞIN günüdür, vasallığın kendi günü DEĞİL.",
  ic_not_d:"TDV ustrumca: «Jovan'ın kısa bir süre sonra ölümüyle Konstantin bir Osmanlı vasalı haline geldi» · TDV doyran: «Bu prenslik Osmanlılar'a bağlı bir beylik haline geldi» · TDV koprulu: «1371'den beri Osmanlı vasalı olan». 🟡 İnce fark (çelişki değil): ustrumca vasallığı Jovan'ın ölümüne bağlıyor ve yıl vermiyor; kostendil 1371 diyor. 🔴 AYRI BULGU: Köstendil kaydı (yerlesimler.js, kilitli) 1371-1374 bulgaristan · 1374-1383 d:vassal gösteriyor; TDV kostendil onu prensliğin merkezi sayıyor ⇒ öneri YAMA-TRAKYA-0914.json.",
  kaynak:"kostendil · ustrumca · doyran · koprulu", duygu:["📋"] },

// ── ② 1412 · Şehirköy Sırp Despotluğu'na geçti ──────────────────────────
{ t:"1412-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","konu-askeri"],
  b:"Sırp Despotu Stefan Lazareviç Şehirköy'ü (Pirot) aldı",
  gun:"1412 — kaynak gün vermiyor",
  yer:"Şehirköy (Pirot)", yer_id:"Şehirköy (Pirot)",
  kisiler:"Stefan Lazareviç, Mûsâ Çelebi, Çelebi Mehmed",
  d:"Fetret Devri'nde Rumeli'ye hâkim olan Mûsâ Çelebi ile kardeşi Çelebi Mehmed arasındaki mücadele sürerken Sırp Despotu Stefan Lazareviç, Niş ile Sofya arasındaki yol üzerinde bulunan Şehirköy kalesini ele geçirdi ve Mûsâ Çelebi'nin saldırısına karşı elinde tuttu. Ertesi yıl Mûsâ'nın ölümüyle Çelebi Mehmed kaleyi resmen vasalı Stefan'a bıraktı; Osmanlılar Şehirköy'ü ancak 1428'de Lazareviç'in ölümünden sonra geri aldı.",
  ic_not_gun:"TDV sehirkoy: «1412'de Sırp Despotu Stefan Lazareviç tarafından alındı» — YIL. Gün yok ⇒ 1412-01-01 + kesinlik:'yil' (§4). Önceki veri devri 1413-07-05'e koymuştu çünkü 1412-01-01'de madde yoktu; bu madde o boşluğu kapatıyor ve veri kaynağın yılına çekildi.",
  ic_not_d:"1402-1412 arası Şehirköy'ün Fetret dönemleri (Emîr Süleyman / Mûsâ Çelebi) §4 ŞARTLI KOMŞU GÜNÜ ile yazıldı: ① günler TDV musa-celebi'nin kendi günleri (13 Şubat 1410 Yanbolu · 15 Haziran 1410 Kosmidion · 17 Şubat 1411 Emîr Süleyman'ın ölümü) ② Şehirköy için kaynakta Fetret günü YOK ③ aynı süreç (Rumeli'de şehzade mücadelesi), aynı günleri taşıyan en yakın kayıt Niş 59 km ④ burada ve yerleşim notunda yazılı. TDV sehirkoy 1389'da Sırpların kaleyi yakıp boşalttığını, kalenin sonra yeniden yapıldığını ve 1412'de Stefan'ın aldığını anlatıyor ⇒ 1402-1412 Osmanlı Rumelisi içinde. 🔴 H-0042 ENKLAVI BU DOSYAYLA TAM KAPANMAZ: TDV nis «816'da (1413) Çelebi Sultan Mehmed, Niş'i vasalı Stefan Lazareviç'e verdi»; Niş kaydı (yerlesimler.js, kilitli) 1413-1428 Osmanlı ⇒ öneri YAMA-TRAKYA-0914.json. 🟡 1412-1413 arası Şehirköy tek başına Sırp görünür (Niş Mûsâ Çelebi'de) — kaynak bu arada Niş için bir şey söylemiyor.",
  kaynak:"sehirkoy · musa-celebi · nis", duygu:["⚔️"] },

// ── ③a 1538 · Herseknovi (Castelnuovo) zaptedildi ───────────────────────
{ t:"1538-01-01", kesinlik:"yil", k:"kayip", kapsam:"ic", etiket:["toprak-kayip","savas","konu-askeri"],
  b:"Herseknovi (Castelnuovo) Andrea Doria tarafından zaptedildi",
  gun:"1538 — kaynak ay ve gün vermiyor",
  yer:"Herseknovi (Nova / Castelnuovo, bugünkü Herceg Novi)", yer_id:"Herseknovi (Herceg Novi)",
  kisiler:"Andrea Doria",
  d:"Osmanlı'ya karşı birleşen müttefik donanmanın kumandanı Andrea Doria, Adriyatik kıyısında Dalmaçya'nın güneyindeki Herseknovi (Castelnuovo) kalesini ele geçirdi. Aynı yıl Dalmaçya'da Venedikliler de Osmanlı elindeki bazı kasabaları almış, Osmanlı kuvvetleri başka kalelerle karşılık vermişti. Kale bir yıl sonra geri alındı; Osmanlı hükümranlığı hukuken sürdüğü için bu ara dönem haritada taralı işgal örtüsüyle gösterilir.",
  ic_not_gun:"TDV dalmacya: «Castelnuovo Kalesi ise aynı yıl Andrea Doria tarafından zaptedilmiş» — «aynı yıl» cümleden önce anlatılan 1538 Venedik taarruzunun yılı. Ay/gün BULUNAMADI (aranacak: C. H. Imber, Archivum Ottomanicum IV, 1972, s. 203-216 — okunmadı). Veride isg f:1538-01-01 zaten vardı.",
  ic_not_d:"YAMA-A6C M-0063-2 taslağındaki «Preveze Savaşı'ndan sonra düştü» yan cümlesi YAZILMADI: TDV barbaros-hayreddin-pasa yalnız «daha önce ele geçirilen» diyor, Preveze'ye göre sırayı vermiyor. Taslaktaki «İspanyol garnizonu» ifadesi de bu oturumun okuduğu TDV gövdelerinde yok — yazılmadı (isg d:'ispanya' önceki oturumun kaydı, dokunulmadı).",
  kaynak:"dalmacya · barbaros-hayreddin-pasa", duygu:["⚔️"] },

// ── ③b 10 Ağustos 1539 · Herseknovi geri alındı ─────────────────────────
{ t:"1539-08-10", kesinlik:"gun", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Herseknovi'nin (Castelnuovo) Barbaros Hayreddin Paşa tarafından geri alınması",
  gun:"10 Ağustos 1539",
  yer:"Herseknovi (Nova / Castelnuovo)", yer_id:"Herseknovi (Herceg Novi)",
  kisiler:"Barbaros Hayreddin Paşa, Gazi Hüsrev Bey",
  d:"Preveze zaferinin ardından Orta Akdeniz'de de üstünlüğü ele geçiren Osmanlılar, bir yıl önce Andrea Doria'nın aldığı Adriyatik kıyısındaki Nova (Castelnuovo) kalesine yöneldi. Barbaros Hayreddin Paşa ile Bosna Beyi Gazi Hüsrev Bey'in birlikte yürüttüğü harekât sonunda kale geri alındı ve işgal sona erdi.",
  ic_not_gun:"TDV barbaros-hayreddin-pasa: «Nova da (Castelnuova) kolaylıkla geri alındı (10 Ağustos 1539)». TDV dalmacya: «bir yıl sonra Barbaros Hayreddin Paşa ve Bosna Beyi Gazi Hüsrev Bey'in gayretiyle». 🟡 FARK: YAMA-A6C Museo del Ejército'nun son saldırıyı 7 Ağustos 1539'a koyduğunu bildiriyor — §4 TDV esas; bu oturum o sayfayı yeniden OKUMADI.",
  kaynak:"barbaros-hayreddin-pasa · dalmacya", duygu:["🎉"] },

// ── ④ YAMA-TRAKYA-0914 MT-6 · 1369 · Timurtaş Tunca vadisi (UYGULA 16 Eylül 2026) ──
{ t:"1369-01-01", kesinlik:"yil", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","konu-askeri"],
  b:"Timurtaş Bey Tunca vadisinde Kızılcaağaç Yenicesi (Elhova) ve Yanbolu'yu aldı",
  gun:"1369 — kaynak «herhalde 1369 bahar ve yazı» diyor",
  yer:"Elhova (Kızılcaağaç Yenicesi), Yanbolu", yer_id:"Elhova (Elhovo)",
  kisiler:"Kara Timurtaş Bey, I. Murad",
  d:"I. Murad'ın Bulgaristan ve Bizans'a karşı yürüttüğü harekât sırasında Kara Timurtaş Bey Tunca vadisine gönderildi; Kızılcaağaç Yenicesi ile Yanbolu'yu ele geçirip çok miktarda ganimetle Edirne'ye döndü.",
  ic_not_gun:"TDV murad-i «herhalde 1369 bahar ve yazı»; TDV timurtas-pasa «1367-1369 arası»; TDV yanbolu eski görüş 1365, yeni görüş 1373 (çelişki bildirildi, veride Yanbolu noktası YOK).",
  kaynak:"murad-i · timurtas-pasa", duygu:["🎉"] },

// ═════════════════════════════════════════════════════════════════════
// ⑤ DALGA-0052 · UYGULA (16 Eylül 2026) — BALKAN DIŞI maddeler
//    Koordinatör M-4025 K1: yerleşim yamasıyla TEK partide inmesi gereken
//    maddeler bu dosyaya yazıldı (başka madde dosyası yetkisi yok).
//    Kaynak yama: denetim/YAMA-ARAP-0914.json ARAP-N1 (M4 · M4b).
// ═════════════════════════════════════════════════════════════════════
{ t:"1799-02-18", kesinlik:"gun", k:"kayip", kapsam:"ic", etiket:["savas","isgal","konu-askeri"],
  b:"Napolyon Arîş'i işgal etti — Suriye seferinin başlangıcı",
  gun:"18 Şubat 1799",
  yer:"El-Arîş, Sina", yer_id:"El-Arîş",
  kisiler:"Napolyon Bonapart",
  d:"Mısır'ı işgal eden Fransız ordusu Suriye'ye yürürken Sina kıyısındaki Arîş'i ele geçirdi.",
  kaynak:"aris", duygu:["😔"] },

{ t:"1799-11-17", kesinlik:"gun", k:"kazanc", kapsam:"ic", etiket:["savas","kurtulus","konu-askeri"],
  b:"Arîş'in Fransızlardan geri alınması",
  gun:"17 Kasım 1799",
  yer:"El-Arîş, Sina", yer_id:"El-Arîş",
  d:"Napolyon'un Şubat 1799'da işgal ettiği Arîş, aynı yılın Kasımında Osmanlı kuvvetlerince geri alındı.",
  kaynak:"aris", duygu:["🎉"] },

];

;
/* ==== data/olaylar_p0056.js ==== */
// =====================================================================
// PAKET 0056 — P08-KARADENIZ (14 Eylül 2026, 1.MURAT sevki · DALGA-SINIF2)
// Rapor: denetim/P08-KARADENIZ-0914.md · yama önerileri: denetim/YAMA-KARADENIZ-0914.json
// Kutu maddeleri: 0035/H-0090 (savaş başlangıçları · Eflak-Boğdan'a giriş)
//                 0035/H-0097 · H-0100 (1806-12 ve 1828-36 Tuna işgalleri)
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR").
// 🔴 TAKVİM (D110): ESBE günleri JÜLYEN'dir. Gregoryen'e çevrildi:
//    18. yüzyıl +11 gün, 19. yüzyıl +12 gün. Her maddede ic_not_gun'da yazılı.
// Kaynaklar 14 Eylül 2026'da bu oturumca ham metinden okundu:
//   ESBE-TV  = Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России»
//              (ru.wikisource, ham wikitext)
//   ESBE-SIL = ЭСБЕ «Силистрия» · ESBE-JUR = ЭСБЕ «Журжево или Журжа»
//   TDV      = islamansiklopedisi.org.tr gövdeleri (silistre · ruscuk · nigbolu)
// AD ALANI (§7): data/olaylar_p0056.js → window.OLAYLAR_P0056
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// ⚠️ Silistre (1810-06-10 · 1829-06-30 · 1836-01-01) ve Rusçuk (1811-07-04)
//   maddeleri, YAMA-KARADENIZ-0914 inene kadar haritada KIRILMASIZ durur
//   (Değişmez 2t) — yama yerlesimler.js kilidi (P02 sırası) yüzünden bekliyor.
// =====================================================================

window.OLAYLAR_P0056 = [

// ── 1739 · Münnich Boğdan'da ─────────────────────────────────────────
{ t:"1739-08-28", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Stavuçani yenilgisi ve Hotin'in Ruslara teslimi (1736-1739 Osmanlı-Rus Savaşı)",
  gun:"28 Ağustos 1739 (Jülyen 17 Ağustos)",
  yer:"Stavuçani, Hotin yakını — Boğdan",
  yer_id:"Hotin",
  kisiler:"Mareşal Münnich (Minih), Serasker Veli Paşa",
  d:"1739 seferinde Rus ana ordusu Mareşal Münnich komutasında Lehistan toprağından geçerek Boğdan'a girdi ve Hotin yakınındaki Stavuçani'de Serasker Veli Paşa'nın ordusunu ağır bir yenilgiye uğrattı. Bu savaşın hemen ardından Hotin kalesi Ruslara teslim oldu ve Rus kuvvetleri Eylül başında Yaş'a girdi. Ancak Avusturya'nın ayrı barış yapması üzerine savaş, aynı ay imzalanan Belgrad Antlaşması ile sona erdi.",
  ic_not_gun:"ESBE-TV kendi içinde çelişik: bir bölümde '17 августа', başka bölümde '27' (Ağustos) diyor. 17 Ağustos Jülyen = 28 Ağustos Gregoryen alındı (PAKET-RUS SEFERLER rus-munih-hotin-yas-1739 f:1739-08-28 ile aynı gün, onun kaynağı ESBE «Ставчаны» — o madde bu oturumca OKUNMADI). Hotin'in teslim günü ve Yaş'a giriş (ESBE-TV '1 сентября' J = 12 Eylül G) ayrı madde yapılmadı.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '17 августа русское войско встретилось с Т.' · 'Вслед за ставучанской битвой пал и Хотин'",
  duygu:["⚔️"] },

// ── 1769 · Golitsin Dinyester'i geçiyor ──────────────────────────────
{ t:"1769-04-26", k:"savas", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Rus ordusunun Dinyester'i geçerek Boğdan'a girmesi (1768-1774 Osmanlı-Rus Savaşı)",
  gun:"26 Nisan 1769 (Jülyen 15 Nisan)",
  yer:"Dinyester, Hotin önleri — Boğdan",
  yer_id:"Hotin",
  kisiler:"Prens A. M. Golitsin",
  d:"Savaş ilanından yaklaşık altı ay sonra Rus ana ordusu Prens Golitsin komutasında Podolya'da toplandı. Boğdan metropoliti Dositey'in Moldova'yı Rus himayesine alma çağrısı üzerine Golitsin Dinyester'i geçti ve Yaş'a yürümeden önce Hotin'i almayı denedi. Bu ilk deneme başarısız oldu, ordu erzak sıkıntısı yüzünden Podolya'ya geri döndü; Hotin ancak Eylül 1769'da düştü.",
  ic_not_gun:"ESBE-TV '15 апреля он перешел Днестр' — Jülyen, +11 gün ⇒ 26 Nisan 1769 G. PAKET-RUS SEFERLER rus-golitsyn-hotin-1769 f:1769-04-25 yazıyor (kaynağı bu oturumca okunmadı) — 1 günlük fark bildirildi, bu madde ESBE-TV çevirisini taşır.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '15 апреля он перешел Днестр, но перед движением в Яссы попытался овладеть Хотиным'",
  duygu:["⚔️"] },

// ── 1788 · Rumyantsev Mogilev'de Dinyester'i geçiyor ─────────────────
{ t:"1788-07-01", k:"savas", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Rus Ukrayna ordusunun Mogilev'de Dinyester'i geçip Boğdan'a girmesi (1787-1792 Osmanlı-Rus Savaşı)",
  gun:"1 Temmuz 1788 (Jülyen 20 Haziran)",
  yer:"Mogilev (Mohyliv-Podilskyi), Dinyester — Boğdan'ın kuzeyi",
  yer_kon:[48.446, 27.798],
  kisiler:"Mareşal Rumyantsev",
  d:"1787'de Osmanlı'nın savaş ilanıyla başlayan savaşta Rusya iki ordu kurdu: Potemkin'in ordusu Özi'yi kuşatırken Rumyantsev'in Ukrayna ordusu Dinyester ile Bug arasında Bender'i tehdit edecek ve Avusturya ile bağlantıyı tutacaktı. Rumyantsev bir kolu Hotin'i kuşatan Avusturyalılara destek için ayırdı, ana kuvvetleriyle Mogilev'de Dinyester'i geçerek Boğdan'a girdi. İsmail'e ve Tuna'ya uzanacak Rus harekâtının Boğdan ayağı böylece başladı.",
  ic_not_gun:"ESBE-TV '20 июня перешли через Днестр у Могилева' — Jülyen, +11 gün ⇒ 1 Temmuz 1788 G. Mogilev noktası atlasta yok, yer_kon kullanıldı (şehir merkezi, gazetteer koordinatı — Nominatim'le bu oturumda SINANMADI, yaklaşık).",
  ic_not_d:"Emre 0035/H-0090: 'Ruslar İsmail'e Boğdan üzerinden mi geldi?' — bu madde o sorunun 1788 ayağını cevaplar. Hotin 1788'de Avusturya garnizonuna kaldı (ESBE-TV 'где оставлен австрийский гарнизон'); işgalci Avusturya olduğu için isg:rusya önerilmedi (PAKET-RUS hükmü).",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'главные же силы Украинской армии 20 июня перешли через Днестр у Могилева'",
  duygu:["⚔️"] },

// ── 1806 · ilansız işgal ─────────────────────────────────────────────
{ t:"1806-11-23", k:"savas", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Rus ordusunun savaş ilan edilmeden Dinyester'i geçip Memleketeyn'i işgale başlaması (1806-1812 Osmanlı-Rus Savaşı)",
  gun:"23 Kasım 1806 (Jülyen 11 Kasım)",
  yer:"Dinyester hattı — Hotin, Bender, Akkirman, Kili",
  yer_id:"Hotin",
  kisiler:"General Michelson (Mihelson)",
  d:"Ekim 1806'da General Michelson'a Boğdan ve Eflak'ı işgal etme emri verildi; savaş henüz resmen ilan edilmemişti. Rus kuvvetleri Dinyester'i geçmeye başladı ve Hotin, Bender, Akkirman ile Kili kalelerinin komutanları kalelerini çarpışmadan teslim etti. Yalnız İsmail muhafızı Rus telkinlerine boyun eğmedi. Bâbıâli'nin savaş ilanı bu işgalden sonra geldi.",
  ic_not_gun:"ESBE-TV '11 ноября русские войска начали переходить Днестр' — Jülyen, +12 gün ⇒ 23 Kasım 1806 G. Dört kalenin teslim GÜNLERİ ayrı ayrı bu kaynakta yok (PAKET-RUS YAMA-RUS-0913 RUS-1806-KIL/HOT/BEN önerileri kendi günlerini taşıyor).",
  ic_not_d:"Emre 0035/H-0090: savaş başlangıcında 'Eflak-Boğdan'a giriş' maddesi istendi. Mevcut 1806-12-22 savaş ilanı maddesi (olaylar_ek5.js) bu girişten SONRADIR.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'хотя война формально и не была еще объявлена' · 'коменданты крепостей Хотин, Бендеры, Акерман и Килия уступили их без боя'",
  duygu:["⚔️"] },

{ t:"1806-12-25", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Miloradoviç'in Bükreş'e girmesi — Eflak'ın Rus işgali",
  gun:"25 Aralık 1806 (Jülyen 13 Aralık)",
  yer:"Bükreş, Eflak",
  yer_id:"Bükreş",
  kisiler:"General Miloradoviç, Rusçuk muhafızı Mustafa Paşa",
  d:"Rus ordusu Boğdan'a girdiğinde Rusçuk muhafızı Mustafa Paşa Bükreş'e bir kuvvet gönderdi ve bu kuvvet şehri tuttu. General Miloradoviç'in müfrezesi onları şehirden çıkardı; Osmanlı kuvveti Yergöğü'ne çekildi. Bükreş bu tarihten 1812 Bükreş Antlaşması'na kadar Rus işgalinde kaldı.",
  ic_not_gun:"ESBE-TV '13 декабря были вытеснены отрядом генерала Милорадовича' — Jülyen, +12 gün ⇒ 25 Aralık 1806 G. Veri Bükreş isg:rusya'yı 1806-11-30'dan başlatıyor; kaynak o tarihte şehri Rusçuk kuvvetinin tuttuğunu söylüyor (PAKET-RUS RUS-1806-BUK önerisi f:1806-12-25 — bu madde onun kırılmasını karşılar).",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'рущукский комендант Мустафа-паша выслал отряд войск к Букаресту' · '13 декабря были вытеснены'",
  duygu:["😔"] },

// ── 1810 · Silistre ──────────────────────────────────────────────────
{ t:"1810-06-10", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Silistre'nin Ruslara teslimi",
  gun:"10 Haziran 1810 (Jülyen 29 Mayıs)",
  yer:"Silistre, Tuna'nın sağ yakası",
  yer_id:"Silistre",
  kisiler:"General N. M. Kamenski",
  d:"1809 sonbaharında Bagration'un kuşatmasına dayanan Silistre, 1810 seferinde başkumandan Kamenski'nin emriyle yeniden kuşatıldı. Mayıs sonunda başlayan kuşatma işleri birkaç gün sürdü ve kale, garnizonun serbestçe çıkması şartıyla teslim oldu. Aynı günlerde Pazarcık fırtınayla alındı, Hezargrad düştü. Ruslar Silistre'yi bir yıl tuttu; 1811 baharında Kutuzov surları havaya uçurup kaleyi bıraktı.",
  ic_not_gun:"ESBE «Силистрия» '29-го мая крепость была сдана' — Jülyen, +12 ⇒ 10 Haziran 1810 G. 🔴 KAYNAK ÇELİŞKİSİ (1 gün): ESBE-TV aynı olayı '30 сдалась Силистрия' (30 Mayıs J = 11 Haziran G) diye veriyor. Özel madde («Силистрия») esas alındı, çelişki bildirildi. TDV silistre yalnız '1810'da şehir Ruslar tarafından bombalandı' der, gün vermez.",
  ic_not_d:"Veride Silistre'nin 1810-1811 işgal kaydı YOK (olaylar_ek21.js 1811-05-01 'Silistre'nin tahliyesi' maddesi kırılmasız duruyor). Öneri: YAMA-KARADENIZ-0914 SIL-1810.",
  kaynak:"ESBE «Силистрия» (ru.wikisource): '29-го мая крепость была сдана на условии свободного…' · ESBE «Турецкие войны России»: '30 сдалась Силистрия' · TDV silistre",
  duygu:["😔"] },

// ── 1810 · Niğbolu ve Kule ───────────────────────────────────────────
{ t:"1810-10-01", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Niğbolu ve Kule'nin (Turnu) direnmeden Ruslara teslimi",
  gun:"Ekim 1810",
  kesinlik:"ay",
  yer:"Niğbolu ve Kule (Turnu Măgurele), Tuna boyu",
  yer_id:"Niğbolu",
  kisiler:"General N. M. Kamenski, General Kutuzov",
  d:"Rusçuk ve Yergöğü'nün teslim olmasının ardından başkumandan Kamenski Sırbistan sınırına kadar Tuna kalelerini almak için nehir boyunca batıya yürüdü. Niğbolu ve karşı yakadaki Kule direnmeden teslim oldu; Rus müfrezeleri Plevne, Lofça ve Selvi'yi alıp tahkimatını yıktı. Ruslar Niğbolu'yu altı ay tuttu ve 1811 Nisanında kaleyi havaya uçurarak bıraktı.",
  ic_not_gun:"TDV nigbolu yalnız ayı verir ('1810 yılı Ekim ayında'); ESBE-TV yürüyüşün başlangıcını '9 окт.' (J = 21 Ekim G) verir, teslim günü yok. Ay kodu 1810-10-01 + kesinlik:'ay'. Veride Niğbolu isg:rusya f:1810-10-01 kesinlik alanı taşımıyor — YAMA-KARADENIZ NIG-KES.",
  kaynak:"TDV nigbolu: '1810 yılı Ekim ayında … Kutuzov'un kuvvetleri tarafından ele geçirildi' · ESBE «Турецкие войны России»: 'Никополь и Турно сдались без сопротивления'",
  duygu:["😔"] },

// ── 1811 · Rusçuk muharebesi ve boşaltma ─────────────────────────────
{ t:"1811-07-04", k:"savas", kapsam:"ic", etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"Rusçuk Muharebesi ve Kutuzov'un Rusçuk'u yıkıp Tuna'nın sol yakasına çekilmesi",
  gun:"4 Temmuz 1811 (Jülyen 22 Haziran) — muharebe; çekilişin günü kaynakta yok",
  yer:"Rusçuk, Tuna'nın sağ yakası",
  yer_id:"Rusçuk",
  kisiler:"General Kutuzov, Sadrazam Ahmed Paşa",
  d:"Haziran başında Şumnu'dan çıkan sadrazam Rusçuk önünde Rus ordusuna saldırdı, yenilerek güneydeki tahkimli mevziine çekildi. Kutuzov kazandığı bu muharebeye rağmen Rusçuk'ta kalmayı tehlikeli buldu; kalenin istihkâmlarını yıktırdı ve bütün kuvvetlerini Tuna'nın sol yakasına geçirdi. Sadrazam boşaltılan Rusçuk'u yeniden aldı. Böylece Kaminski'nin kanlı bir kuşatmanın ardından 26 Eylül 1810'da teslim aldığı şehirde Rus tutuşu dokuz ay sürmüş oldu. TDV'nin kaydına göre Kutuzov ayrılmadan önce şehir etrafındaki istihkâmın ve ortaçağ kalesinin havaya uçurulmasını emretti; çıkan yangında 1810'da şehirde bulunan otuz sekiz caminin on ikisi ve sekiz mescidden ikisi bütünüyle yıkıldı. Aynı yılın sonbaharında Osmanlı ordusunun Tuna'yı geçmesi Slobozia kuşatmasıyla sonuçlanacaktı.",
  ic_not_gun:"ESBE-TV 'а 22 атаковал русских у Рущука' (Haziran, Jülyen, +12 ⇒ 4 Temmuz 1811 G). Çekiliş günü birincil kaynakta doğrulanamadı: arama özetlerinde 27 Haziran J (=9 Tem G) ve BRE'ye atfedilen '28 июня (10 июля)' geçiyor, ikisi de metinden okunamadı. ⇒ Veride Rusçuk isg t:1811-07-04 ALT SINIR (muharebe günü; tahliye bundan sonra). TDV ruscuk '1811 Haziranı' Jülyen Haziranı olarak okunur. Eski olaylar_ek21.js 1811-06-01 'Kutuzov Rusçuk'u boşalttı' maddesi (TDV ay kodu, muharebeden 33 gün ÖNCE) bu maddeye BİRLEŞTİRİLDİ — KIRILMASIZ-9, 19 Eyl 2026, 1.MURAT M-4632 (B). BRE doğrulanırsa isg t → 1811-07-10.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'Кутузов … разрушив его укрепления, переправил все войска на левый берег' · 'По отступлении Кутузова на левый берег визирь занял Рущук' · TDV ruscuk",
  duygu:["⚔️"] },

// ── 1828 · Prut geçişi ───────────────────────────────────────────────
{ t:"1828-05-07", k:"savas", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Rus 6. Piyade Kolordusunun Prut'u geçip Memleketeyn'e girmesi (1828-1829 Osmanlı-Rus Savaşı)",
  gun:"7 Mayıs 1828 (Jülyen 25 Nisan)",
  yer:"Prut — Boğdan ve Eflak",
  yer_id:"Yaş",
  kisiler:"Mareşal Wittgenstein, General Geismar",
  d:"Rusya'nın savaş ilanının ardından Mareşal Wittgenstein'ın ordusu harekâta geçti. 6. Piyade Kolordusu Prut'u geçerek Boğdan ve Eflak'a girdi, öncüsü General Geismar komutasında Küçük Eflak'a yöneldi. Birkaç gün sonra 7. Kolordu İbrail'i kuşattı; 3. Kolordu ise İsmail ile Reni arasında Tuna'yı geçmeye hazırlandı. Memleketeyn 1834'e kadar Rus işgalinde kalacaktı.",
  ic_not_gun:"ESBE-TV '25 апр. 6-й пех. корпус вступил в княжества' — Jülyen, +12 ⇒ 7 Mayıs 1828 G. Mevcut 1828-04-26 savaş başlangıcı maddesi (olaylar_ek5.js) ilanı, bu madde girişi tarihler. PAKET-RUS isg önerisi (Yaş·Bükreş 1828 f:05-07) bu kırılmayı taşır.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '25 апр. 6-й пех. корпус вступил в княжества' · '1 мая 7-й пех. корпус обложил крепость Браилов'",
  duygu:["⚔️"] },

// ── 1829 · Silistre ikinci kez ───────────────────────────────────────
{ t:"1829-06-30", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Silistre'nin Dibiç'e teslimi — 1836'ya kadar sürecek Rus işgali",
  gun:"30 Haziran 1829 (Jülyen 18 Haziran)",
  yer:"Silistre, Tuna'nın sağ yakası",
  yer_id:"Silistre",
  kisiler:"General Dibiç (Diebitsch), General Schilder",
  d:"1829 seferinin başında yeni Rus başkumandanı Dibiç ilk hedef olarak Silistre'yi seçti. General Schilder'in yönettiği kuşatma işlerine garnizon inatla karşı koydu; Dibiç kuvvetlerinin bir kısmını kuşatmada bırakıp sadrazamın arkasına yürüdü. Kuşatma sürdü ve kale teslim oldu. Ruslar Silistre'yi savaş bittikten sonra da 1836'ya kadar ellerinde tuttular.",
  ic_not_gun:"ESBE-TV 'и 18 июня крепость эта сдалась' (1829 bağlamı, Jülyen, +12 ⇒ 30 Haziran 1829 G). TDV silistre '1827-1828 savaşı esnasında Ruslar tekrar Silistre'yi aldılar' diyor — TDV yılı ESBE'nin kuşatma kronolojisiyle çelişiyor (ESBE 1828 kuşatması sonuçsuz, teslim 1829). Gün veren ESBE esas alındı, çelişki bildirildi.",
  ic_not_d:"Veride Silistre 1829-1836 Rus işgali YOK. Öneri: YAMA-KARADENIZ SIL-1829.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'осада Силистрии шла успешно, и 18 июня крепость эта сдалась' · ESBE «Силистрия»: 'В 1829 г. новый главнокомандующий, ген. Дибич, избрал первым предметом своих действий С.' · TDV silistre",
  duygu:["😔"] },

// ── 1836 · Silistre boşaltıldı ───────────────────────────────────────
{ t:"1836-01-01", k:"siyaset", kapsam:"ic", etiket:["toprak-kazanc","konu-diplomasi"],
  b:"Rusların Silistre'yi boşaltması",
  gun:"1836", kesinlik:"yil",
  yer:"Silistre",
  yer_id:"Silistre",
  d:"1829 Edirne Antlaşması'ndan sonra Ruslar Silistre'yi boşaltmadı ve kaleyi 1836'ya kadar elde tuttu. Rus askerlerinin çekilmesinden sonra vali Selim Paşa yarısı yıkılmış şehrin ortasına büyük, tek kubbeli bir cami yaptırdı.",
  ic_not_gun:"TDV silistre yalnız yıl verir ('Ruslar 1836'ya kadar Silistre'yi ellerinde tuttular'); gün bulunamadı, §4 gereği 1836-01-01 + kesinlik:'yil'. Tahliyenin antlaşmadaki tazminat şartına bağlanması bu oturumca okunan kaynakta YOK — yazılmadı.",
  kaynak:"TDV silistre: 'Ruslar 1836'ya kadar Silistre'yi ellerinde tuttular' · 'Rus askerlerinin şehri boşaltmasının ardından Vali Selim Paşa'",
  duygu:["📌"] },

];

;
/* ==== data/ittifaklar.js ==== */
// ============================================================================
// İTTİFAKLAR — Osmanlı'ya karşı (ya da Osmanlı'nın taraf olduğu) ittifakların
// ÜYELİK verisi. P11-SEFER, 14 Eylül 2026 · maddeler parti-emrelic-0023/H-0003,
// 0027/H-0006 (Kutsal İttifak rozeti + ip), 0021/H-0030 (1594 Erdel katılışı).
// Çizim (rozet · Osmanlı'yı dolanan ip · tek seferlik animasyon) P14'ün işidir;
// bu dosya YALNIZ veri + şema. index.html'e bağlanmadı (koordinatör bağlar).
//
// ŞEMA  window.ITTIFAKLAR = [ ittifak, … ]
//   id        benzersiz kimlik
//   ad        görünen ad
//   hedef     [devletler.js id]  ittifakın karşısındaki devlet(ler)
//   f / t     ittifakın BAŞLANGIÇ / BİTİŞ günü — SEFERLER gibi `t` = BİTİŞ (§11 D190:
//             SAVASLAR'da `t` başlangıçtır; burada DEĞİL). Bilinmiyorsa null + `t_damga`.
//   kesinlik  {f:"gun|ay|yil", t:"…"}  — tarih alanı kaynağın desteklediği en kaba düzey
//             (CLAUDE.md §4); ay ⇒ YYYY-MM-01, yıl ⇒ YYYY-01-01, ayrıntı `kaynak`/`not`ta
//   yer, yer_kon [lat,lon]  kuruluş yeri (varsa)
//   madde     {t, b}  kronolojide ittifakı açan madde (animasyonun tetik adayı; P14 eşler)
//   uyeler    [ {devlet, rol:"uye"|"hami", f, t, kesinlik:{f,t}, kaynak, not} ]
//             f = katılış, t = ayrılış (null = ittifak sonuna dek ya da bulunamadı — `not`)
//   kaynak    ittifak düzeyinde kaynak dizgisi (alıntılar ≤15 kelime)
//   celiski   [dizgi]  kaynaklar arası çelişkiler — SİLİNMEZ, taraf seçilmediyse hüküm yok
//   not
// Kural: yalnız KAYNAKTA ADI GEÇEN üye yazılır; "katkı veren" ama üye diye anılmayan
// (Malta şövalyeleri, Toskana vb.) YAZILMADI. Atlas verisi dayanak DEĞİLDİR (§4).
// ============================================================================
window.ITTIFAKLAR = [

// ---------------------------------------------------------------------------
// 1594 KUTSAL İTTİFAKI (Uzun Savaş) — Papa VIII. Clément himayesi
// ---------------------------------------------------------------------------
{ id:"kutsal-ittifak-1594", ad:"Kutsal İttifak (1594) — Uzun Savaş", hedef:["osmanli"],
  f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
  t_damga:"bulunamadı — ittifakın sona erdiği gün/olay okunan kaynaklarda yok. Zitvatorok (11 Kasım 1606, TDV zitvatorok-antlasmasi) Habsburg-Osmanlı barışıdır; ittifakın bitişi diye BİRLEŞTİRİLMEDİ",
  madde:{t:"1594-08-28", b:"Üç voyvodalığın ayaklanması başlıyor — Erdel Kutsal İttifak'a geçti, Osmanlı yanlısı beyler tutuklandı"},
  uyeler:[
    { devlet:"papalik", rol:"hami", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"bogdan (TDV): \"Papa VIII. Clément'in himayesi altında … kurulan Kutsal İttifak\"" },
    { devlet:"habsburg", rol:"uye", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"bogdan (TDV): \"Avusturya Kralı II. Rudolf ile Erdel Prensi Zsigmond Báthory arasında kurulan Kutsal İttifak\"" },
    { devlet:"erdel", rol:"uye", f:"1594-02-01", t:null, kesinlik:{f:"ay", t:null},
      kaynak:"History of Transylvania I (ed. B. Köpeczi, MTA; MEK html 118, s. 1-746): \"the pact was sealed at Gyulafehérvár in February 1594\" · \"Transylvania, announced Zsigmond, would adhere to the Holy League\" · aynı eser s. 1-748: \"on 28 January 1595, a treaty of alliance was signed between Transylvania and the Habsburg Empire\" (Prag)",
      not:"Katılış AY (Şubat 1594). İç muhalefetin tasfiyesi 28 Ağustos 1594 (HoT) ayrı olaydır; Habsburg ile resmî ittifak antlaşması 28 Ocak 1595 Prag — üye kaydında İKİ AYRI TARİH, birleştirilmedi" },
    { devlet:"bogdan", rol:"uye", f:"1594-08-16", t:null, kesinlik:{f:"gun", t:null},
      kaynak:"A.-M. Crăciun, \"Tratatele lui Sigismund Báthory cu Țara Românească și Moldova (1595): o comparație\", Crisia LIII (2023), s. 127 vd.: \"Moldova lui Aron a intrat oficial de partea creștinilor prin semnarea unui document în data de 16 august 1594\" · bogdan (TDV): \"1594'te … kurulan Kutsal İttifak'a girdi\"",
      not:"Boğdan'ın Báthory'ye tâbiliğini tanıması ayrı antlaşma: HoT \"Moldavia (on July 3)\" 1595 · Crăciun 3 Haziran 1595 (arama özetinden; PDF'te ayrıca SINANMADI) — çelişki" },
    { devlet:"eflak", rol:"uye", f:"1594-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"Crăciun 2023 (yukarıda): \"Țara Românească aderă la Ligă în toamna aceluiași an\" (1594) · HoT s. 1-748: \"Around the middle of 1594, he concluded a secret pact with Zsigmond Báthori\"",
      not:"Kaynak MEVSİM veriyor (sonbahar 1594) ⇒ YIL kodu. Eflak'ın Báthory'ye tâbiliği 20 Mayıs 1595 (HoT \"Wallachia (on May 20)\") ayrı olay" }
  ],
  celiski:[
    "Eflak katılışı: Crăciun 2023 'sonbahar 1594' · HoT 'middle of 1594' Báthory ile GİZLİ pakt (Liga'ya katılış değil) — ikisi farklı şeyi tarihliyor olabilir",
    "Boğdan'ın Báthory tâbiliği: HoT 3 Temmuz 1595 · Crăciun 3 Haziran 1595 (arama özeti, PDF'te okunmadı)"
  ],
  not:"Harita üyelik verisi: üç voyvodalık haritada tâbi renginde kalır (Emre C2), isyan taraması data/isyan_tarama.js. Rozet üyeliği, sahipliği DEĞİŞTİRMEZ." },

// ---------------------------------------------------------------------------
// 1684 KUTSAL İTTİFAKI (Mukaddes İttifak / Liga Sancta) — II. Viyana sonrası
// ---------------------------------------------------------------------------
{ id:"kutsal-ittifak-1684", ad:"Kutsal İttifak (1684) — Mukaddes İttifak", hedef:["osmanli"],
  f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
  yer:"Linz", yer_kon:[48.3069,14.2858],
  madde:{t:"1684-03-05", b:"Kutsal İttifak kuruldu"},
  uyeler:[
    { devlet:"papalik", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Polonya Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan … Kutsal İttifak'a girip\"",
      not:"TDV papalığı ittifakı KURAN taraflar arasında sayıyor; rol 'uye'. Karlofça'da papalık heyeti TDV karlofca'da ANILMIYOR ⇒ t = ittifakın sonu (Karlofça), üye düzeyinde ayrıca kaynaklı DEĞİL" },
    { devlet:"habsburg", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan\" · karlofca (TDV): \"Avusturya, Lehistan, Venedik'in oluşturduğu\" · \"24 Receb 1110 (26 Ocak 1699) tarihinde imzalandığı\"" },
    { devlet:"venedik", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Mart 1684'te Avusturya, Venedik ve papalık arasında yapılan\" · karlofca (TDV): \"24 Receb 1110'da (26 Ocak 1699) on altı maddelik Vene[dik antlaşması]\"" },
    { devlet:"lehistan", rol:"uye", f:"1684-03-01", t:"1699-01-26", kesinlik:{f:"ay", t:"gun"},
      kaynak:"polonya (TDV): \"Polonya Mart 1684'te … Kutsal İttifak'a girip mücadeleyi sürdürdü\" · karlofca (TDV): \"Kutsal İttifak'ın diğer iki üyesi Lehistan ve Rusya\"",
      not:"Karlofça Leh musâlahanâmesinin GÜNÜ TDV karlofca'da ayrıca verilmiyor (görüşme başı 22 Kasım 1698); t = genel imza günü 26 Ocak 1699 — üye düzeyinde çıkarım" },
    { devlet:"rusya", rol:"uye", f:"1686-01-01", t:null, kesinlik:{f:"yil", t:null},
      kaynak:"polonya (TDV): \"1686'da Rusya'nın da katıldığı Kutsal İttifak\" · karlofca (TDV): \"Kutsal İttifak'ın diğer iki üyesi Lehistan ve Rusya\" · Encyclopedia of Ukraine, vol. 1 (1984), 'Eternal Peace of 1686': \"Muscovy became an ally in the anti-Turkish coalition known as the Holy League\"",
      not:"Katılış GÜNÜ yazılmadı: Ebedî Barış günü Encyclopedia of Ukraine'de '16 May 1686' (başka yayınlarda 26 Nisan J / 6 Mayıs G — yalnız Vikipedi/popüler, KULLANILMADI) ⇒ YIL. t bulunamadı: Rusya Karlofça'da temsilci gönderdi (TDV karlofca) ama barışın/ayrılışın günü okunan kaynaklarda yok" }
  ],
  kaynak:"polonya (TDV) · karlofca (TDV, Abdülkadir Özcan) · rusya (TDV) · Encyclopedia of Ukraine vol. 1 (1984)",
  celiski:[
    "Kuruluş GÜNÜ: kronoloji maddesi (olaylar_ek3.js) '5 Mart 1684' diyor, kaynak alanı 'ölçülemedi'; TDV polonya yalnız 'Mart 1684' ⇒ veri AY. 5 Mart yalnız Vikipedi'de okundu (kullanılmadı)",
    "Rusya katılış YILI: TDV polonya 1686 · Encyclopedia of Ukraine 1686 · TDV karlofca '1695'te Rusya'nın da katıldığı müttefik kuvvetler' · TDV rusya 'Kutsal İttifak'a dahil olarak katılmıştır (1684)' — üç yıl, iki kaynak 1686 ⇒ 1686 yazıldı; karlofca'nın 1695'i fiilî harekât (Azak) yılı olabilir, rusya'nın 1684'ü muhtemel yanlış — HÜKÜM YOK",
    "Ebedî Barış günü: Encyclopedia of Ukraine '16 May 1686' — Jülyen 26 Nisan / Gregoryen 6 Mayıs ile uyuşmuyor (D110 takvim) — okunmadı, yazılmadı"
  ],
  not:"Malta şövalyeleri ve Toskana Venedik donanmasına katkı verdi ama okunan kaynaklarda ÜYE diye anılmıyor ⇒ yazılmadı (bulunamadı, aranmadı değil: TDV malta gövdesinde 1684/Kutsal İttifak eşleşmesi 0)." }

];

;
/* ==== data/olaylar_p0057.js ==== */
// =====================================================================
// PAKET 0057 — P09-ISGAL1919 (14 Eylül 2026, 1.MURAT sevki,
// denetim/PAKET-SINIF2-0914.md "### P09")
// Oturum: P09-ISGAL1919 · rapor denetim/P09-ISGAL1919-0914.md
//
// KALEMLER (Emre parti-emrelic-0039)
//   H-0003  Yunan ilerleyişi ve Türk kurtarışı gün be gün (1919-1922)
//   H-0004  doğu/güney cephesi: İtalyan gelişi-gidişi · İngiliz · Rus (Batum, Nahçıvan)
//   H-0005  işgal taraması — yerleşim `isg:` inişleri denetim/YAMA-ISGAL1919-0914.json'da
//           (yerlesimler.js KİLİTLİ; bu maddeler o yamanın kırılma günlerini karşılar)
//
// KAYNAK: hepsi TDV, gövdeleri okundu (denetim/ARAC-A6A-TDV-0913.py ile çekildi):
//   izmir · manisa · aydin · bursa · usak · kutahya · afyonkarahisar · eskisehir ·
//   bilecik · alasehir · izmit · adapazari · isparta · mugla · bodrum · kirklareli ·
//   tekirdag · edirne · batum · nahcivan · milli-mucadele · sevr-antlasmasi
//   Ölü (302) ölçülen: sakarya-meydan-muharebesi · buyuk-taarruz · kutahya-eskisehir-
//   muharebeleri · inonu-muharebeleri · ayvalik · bandirma · soke · kusadasi · marmaris ·
//   fethiye · odemis · nazilli · salihli · simav · edremit · yunan-isgali · trakya
//   Atlas dönemleri DAYANAK DEĞİLDİR (§4). Kaynağın gün vermediği yerde gün yazılmadı.
//
// ETİKET: işgal maddeleri `toprak-kazanc`/`toprak-kaybi` TAŞIMAZ — haritadaki değişim
//   taban sahipliği değil `isg:` örtüsüdür (taralı desen). Değişmez 2t'yi şişirmez.
//
// 🔴 D147 HER GÜN İÇİN ÖNCEDEN ÖLÇÜLDÜ (denetim/ARAC-A3-KIRILMA-0913.py ③):
//   25 günün 22'sinde sahte kapanış 0. 1921-06-28 · 1921-07-05 · 1921-07-20 ±30
//   gününde 1921-07-11 Moğolistan (cin-cumhuriyeti → mogolistan, 12 nokta) maddesiz
//   kırılması var; bu maddeler onu "maddeli" gösterir. O kırılma 2s KAPSAM DIŞI
//   kovasındadır (Osmanlı küresine >2014 km) — AÇIK borç gizlenmez; rapor ediliyor.
// AD ALANI (§7): data/olaylar_p0057.js → window.OLAYLAR_P0057
// 🔴 index.html satırı BAĞLI DEĞİL — koordinatör bağlar (D099). denetle.py
//   olaylar*.js glob'uyla okur, Değişmez 2 evrenine BUGÜN girer.
// =====================================================================

window.OLAYLAR_P0057 = [

// ── 1919 ───────────────────────────────────────────────────────────
{ t:"1919-01-23", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Eskişehir'in İngilizlerce işgali",
  gun:"23 Ocak 1919",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Mondros Mütarekesi'nin ardından İtilaf devletleri Anadolu'nun demiryolu kavşaklarını denetim altına almaya başladı. TDV'nin Eskişehir maddesine göre şehir 23 Ocak 1919'da İngilizler tarafından işgal edildi. İngiliz birlikleri Eskişehir'i 20 Mart 1920'de boşalttı.",
  kaynak:"eskisehir" },

{ t:"1919-05-11", k:"kayip", etiket:["isgal","konu-askeri","konu-diplomasi"],
  b:"İtalyanların Güneybatı Anadolu kıyılarına çıkışı — Marmaris, Bodrum, Kuşadası",
  gun:"5-13 Mayıs 1919",
  ic_not_gun:"Madde günü Bodrum'un işgal günüdür (TDV bodrum: 11 Mayıs 1919). Marmaris 5 Mayıs ve Kuşadası 13 Mayıs günleri TDV sevr-antlasmasi. Üç yerin İtalyan tahliye günü bu kaynaklarda YOK — yerleşim isg dönemleri yazılmadı (YAMA-ISGAL1919 KARAR kovası).",
  yer:"Bodrum, Marmaris, Kuşadası, Fethiye", yer_id:"Bodrum", kisiler:"",
  d:"Paris Barış Konferansı'nda müttefiklerinin Yunan yanlısı tutumunu protesto ederek konferanstan çekilen İtalya, Antalya'dan sonra güneybatı kıyılarına asker çıkardı. TDV'ye göre 5 Mayıs'ta Marmaris, 11 Mayıs'ta Bodrum, 13 Mayıs'ta Kuşadası İtalyan işgaline uğradı. Aynı günlerde Yunanlılar da Fethiye'ye çıktı; iki devletin Batı Anadolu üzerindeki rekabeti İzmir'in işgaline giden yolu hazırladı.",
  kaynak:"bodrum · sevr-antlasmasi" },

{ t:"1919-05-26", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Yunan kuvvetlerinin Manisa ve Aydın'a girişi",
  gun:"26-27 Mayıs 1919",
  ic_not_gun:"Manisa 26 Mayıs (TDV manisa), Aydın 27 Mayıs (TDV aydin). Atlas Aydın'ı İzmir'le aynı gün (1919-05-15) Yunan gösteriyordu — yerleşim düzeltmesi YAMA-ISGAL1919'da.",
  yer:"Manisa, Aydın", yer_id:"Manisa", kisiler:"",
  d:"İzmir'e 15 Mayıs'ta çıkan Yunan ordusu kısa sürede iç kesimlere yayıldı. TDV'nin Manisa maddesine göre Yunan kuvvetleri 26 Mayıs 1919'da şehre girdi; Aydın maddesine göre Aydın ertesi gün, 27 Mayıs'ta işgal edildi. Manisa işgali 1922 Eylülüne kadar sürecekti.",
  kaynak:"manisa · aydin" },

{ t:"1919-06-28", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Burdur'un İtalyan işgali — Isparta'ya yönelen bölüğün geri çekilişi",
  gun:"28 Haziran 1919",
  ic_not_gun:"Gün TDV isparta (paragraf 1919 olaylarını anlatıyor: 20 Haziran 1919 mitingi → 28 Haziran Burdur). TDV burdur işgali yalnız '1919-1921' diye yıl aralığıyla veriyor; tahliye günü yok.",
  yer:"Burdur, Isparta", yer_id:"Burdur", kisiler:"",
  d:"Antalya'yı işgal eden İtalyanlar iç bölgelere doğru ilerledi. TDV'nin Isparta maddesine göre İtalyan birlikleri 28 Haziran'da Burdur'u işgal etti ve 15 Ağustos'ta bir bölük askerle Isparta'ya yöneldi. Isparta halkının silahları teslim teklifini reddedip direneceğini bildirmesi üzerine İtalyanlar ertesi gün geri çekildi.",
  kaynak:"isparta · burdur" },

{ t:"1919-06-30", k:"savas", etiket:["savas","kurtulus","isgal","konu-askeri"],
  b:"Aydın'ın kısa süreli kurtarılışı ve 4 Temmuz'da yeniden işgali",
  gun:"30 Haziran – 4 Temmuz 1919",
  yer:"Aydın", yer_id:"Aydın", kisiler:"",
  d:"Yunan işgaline karşı Ödemiş, Nazilli ve Aydın çevresinde millî kuvvetler teşkilatlandı. TDV'nin Aydın maddesine göre 27 Mayıs 1919'da işgal edilen şehir 30 Haziran'da kısa bir süre için kurtarıldı, ancak 4 Temmuz'da yeniden Yunan işgaline uğradı. Şehir bundan sonra 7 Eylül 1922'ye kadar işgal altında kaldı.",
  kaynak:"aydin · milli-mucadele" },

{ t:"1919-07-23", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Muğla'nın İtalyan işgali",
  gun:"23 Temmuz 1919",
  yer:"Muğla", yer_id:"Muğla", kisiler:"",
  d:"İtalya, güneybatı kıyılarındaki işgalini iç kesimlere doğru genişletti. TDV'nin Muğla maddesine göre şehir 23 Temmuz 1919'da İtalyan işgaline uğradı. Muğla'nın işgali 5 Temmuz 1921'e kadar sürdü.",
  kaynak:"mugla" },

// ── 1920 ───────────────────────────────────────────────────────────
{ t:"1920-03-20", k:"siyaset", etiket:["isgal","konu-askeri"],
  b:"İngilizlerin Eskişehir'i boşaltması",
  gun:"20 Mart 1920",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Ocak 1919'dan beri İngiliz işgalinde bulunan Eskişehir, TDV'nin Eskişehir maddesine göre 20 Mart 1920'de İngilizler tarafından boşaltıldı. Şehir birkaç ay sonra, Haziran 1920'de, TBMM'nin kurduğu Garp Cephesi'nin merkezi oldu.",
  kaynak:"eskisehir" },

{ t:"1920-06-22", k:"savas", etiket:["savas","isgal","konu-askeri"],
  b:"Yunan yaz taarruzu — Akhisar, Soma, Balıkesir ve Alaşehir'in işgali",
  gun:"22 Haziran – 3 Temmuz 1920",
  ic_not_gun:"Taarruzun başlangıç günü ve Alaşehir (26 Haziran) · Nazilli (3 Temmuz) günleri TDV milli-mucadele; Alaşehir'in 26 Haziran 1920 günü TDV alasehir ile de örtüşüyor. Akhisar, Kırkağaç, Soma ve Balıkesir'in tek tek işgal günleri TDV'de YOK (yalnız sıra veriliyor).",
  yer:"Akhisar, Kırkağaç, Soma, Balıkesir, Alaşehir, Nazilli", yer_id:"Balıkesir", kisiler:"",
  d:"Müttefiklerin Yunan ordusuna Milne hattını aşarak ilerleme izni vermesiyle Batı Anadolu'da büyük bir Yunan taarruzu başladı. TDV'nin Millî Mücadele maddesine göre 22 Haziran'da üç koldan harekete geçen Yunan birlikleri Akhisar, Kırkağaç, Soma ve Balıkesir'i ele geçirdi. Güneyde 26 Haziran'da Alaşehir, 3 Temmuz'da Nazilli işgal edildi.",
  kaynak:"milli-mucadele · alasehir" },

{ t:"1920-07-08", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Bursa'nın Yunan işgali",
  gun:"8 Temmuz 1920",
  yer:"Bursa", yer_id:"Bursa", kisiler:"",
  d:"Yaz taarruzunun kuzey kolu Balıkesir'den sonra Marmara'ya yöneldi. TDV'nin Bursa ve Millî Mücadele maddelerine göre Bursa 8 Temmuz 1920'de Yunan işgaline uğradı. İlk Osmanlı hükümdarlarının türbelerine yapılan saygısızlıklar ülke çapında büyük tepki doğurdu.",
  kaynak:"bursa · milli-mucadele" },

{ t:"1920-07-20", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Yunan ordusunun Doğu Trakya'yı işgali — Edirne ve Kırklareli",
  gun:"20-26 Temmuz 1920",
  ic_not_gun:"20 Temmuz TDV milli-mucadele ('bütün Trakya'). Kırklareli 26 Temmuz 1920 TDV kirklareli; Edirne yalnız 'Temmuz 1920' TDV edirne. 🔴 ÇELİŞKİ: TDV tekirdag Yunanlıların Tekirdağ'a girişini 20 HAZİRAN 1920 diye veriyor — Tekirdağ isg dönemi yazılmadı, koordinatöre soruldu.",
  yer:"Edirne, Kırklareli, Tekirdağ", yer_id:"Edirne", kisiler:"",
  d:"Yunanistan, Sevr Antlaşması imzalanmadan önce Doğu Trakya'yı da fiilen ele geçirmeye girişti. TDV'nin Millî Mücadele maddesine göre Yunan ordusu 20 Temmuz'da bütün Trakya'yı ele geçirdi; bu gelişme İstanbul'da padişahı iki gün sonra Saltanat Şûrası'nı toplamaya yöneltti. Kırklareli 26 Temmuz'da işgale uğradı, Edirne de aynı ay Yunan idaresine girdi.",
  kaynak:"milli-mucadele · kirklareli · edirne" },

{ t:"1920-07-28", k:"siyaset", etiket:["isgal","konu-askeri","konu-siyasi"],
  b:"Kızılordu'nun Nahçıvan'a girişi",
  gun:"28 Temmuz 1920",
  yer:"Nahçıvan", yer_id:"Nahçıvan", kisiler:"",
  d:"1919 başlarında bölgeye giren İngilizler Aras Cumhuriyeti'ni feshetmiş, aynı yılın yazında Nahçıvan'dan ayrılmıştı. TDV'nin Nahçıvan maddesine göre Kızılordu 28 Temmuz 1920'de Nahçıvan'a girerek yönetimi komünistlere verdi ve Nahçıvan Sovyet Sosyalist Cumhuriyeti kuruldu. Bölgenin statüsü 1921'de Kars'ta imzalanan antlaşmayla Azerbaycan'a bağlı özerk bir birim olarak belirlendi.",
  kaynak:"nahcivan" },

{ t:"1920-08-29", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"Uşak'ın Yunan işgali",
  gun:"29 Ağustos 1920",
  yer:"Uşak, Gediz", yer_id:"Uşak", kisiler:"",
  d:"Yunan ordusu, Ankara'nın tanımadığı Sevr Antlaşması'nı kabul ettirmek amacıyla ilerleyişini sürdürdü. TDV'nin Uşak ve Millî Mücadele maddelerine göre Gediz'den sonra 29 Ağustos 1920'de Uşak da işgal edildi. Mustafa Kemal Paşa şehirdeki Kuvâ-yi Milliye birliklerini bu işgalden yaklaşık bir ay önce denetlemişti.",
  kaynak:"usak · milli-mucadele" },

{ t:"1920-10-25", k:"kayip", etiket:["isgal","konu-askeri"],
  b:"İnegöl ve Yenişehir'in Yunan işgali",
  gun:"25 Ekim 1920",
  yer:"İnegöl, Yenişehir", yer_id:"İnegöl", kisiler:"",
  d:"Bursa'daki Yunan birlikleri doğuya, Eskişehir yönüne doğru ilerlemeye başladı. TDV'nin Millî Mücadele maddesine göre 25 Ekim 1920'de İnegöl ve Yenişehir ele geçirildi. Yunan ilerleyişinin milis güçleriyle durdurulamayacağı anlaşılınca batı cephesi düzenli ordu esasına göre yeniden örgütlendi.",
  kaynak:"milli-mucadele" },

// ── 1921 ───────────────────────────────────────────────────────────
{ t:"1921-03-23", k:"savas", etiket:["savas","isgal","konu-askeri"],
  b:"Yunan ordusunun ikinci taarruzu — Bilecik, Afyon ve Adapazarı'nın işgali",
  gun:"23-25 Mart 1921",
  ic_not_gun:"23 Mart TDV milli-mucadele (Bilecik ve Afyon); Adapazarı 25 Mart 1921 TDV adapazari. 🔴 TDV bilecik bu Mart işgalini SAYMIYOR (8 Ocak · 13 Temmuz · 22 Temmuz 1921) — iki madde ayrışıyor, Bilecik'in 1921 ilk yarısı yerleşime yazılmadı.",
  yer:"Bilecik, Afyon, Adapazarı", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"",
  d:"Birinci İnönü yenilgisinden sonra İzmir'e yeni kuvvetler çıkaran Yunan ordusu, Londra Konferansı'nın tanıdığı süre dolmadan yeniden taarruza geçti. TDV'nin Millî Mücadele maddesine göre Yunanlılar 23 Mart'ta Bilecik ve Afyon'u işgal etti. Kuzeyde Adapazarı da 25 Mart'ta Yunan işgaline uğradı.",
  kaynak:"milli-mucadele · adapazari" },

{ t:"1921-03-28", k:"siyaset", etiket:["diplomasi","konu-askeri","konu-diplomasi"],
  b:"Türk kuvvetlerinin Batum'u boşaltması",
  gun:"28 Mart 1921",
  yer:"Batum", yer_id:"Batum", kisiler:"",
  d:"İngilizler Temmuz 1920'de Kafkasya'dan çekilirken Batum'u boşaltmış, şehre Gürcistan hükümeti el koymuştu. TDV'nin Batum maddesine göre 16 Mart 1921'de Sovyet Rusya ile imzalanan Moskova Antlaşması Batum'u Gürcistan'a bıraktı. Türk kuvvetleri şehri 28 Mart 1921'de boşalttı ve Batum, Gürcistan içinde kurulan Özerk Acara Cumhuriyeti'nin merkezi oldu.",
  kaynak:"batum" },

{ t:"1921-04-07", k:"savas", etiket:["savas","kurtulus","konu-askeri"],
  b:"Aslıhanlar'da Yunan yenilgisi — Afyon'un geri alınışı",
  gun:"7 Nisan 1921",
  yer:"Afyon, Aslıhanlar", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"",
  d:"İkinci İnönü'de 1 Nisan'da durdurulan Yunan taarruzunun güney kolu da geri püskürtüldü. TDV'nin Millî Mücadele maddesine göre Aslıhanlar'da ağır yenilgiye uğratılan Yunan kuvvetlerinin elinden 7 Nisan'da Afyon geri alındı. İnönü zaferi başta İstanbul olmak üzere bütün ülkede mitinglerle kutlandı.",
  kaynak:"milli-mucadele" },

{ t:"1921-06-28", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"İzmit'in kurtuluşu — Adapazarı'nın ardından",
  gun:"28 Haziran 1921",
  ic_not_gun:"İzmit TDV izmit (6 Temmuz 1920'de önce İngiliz, sonra Yunan işgali; İngiliz→Yunan devir günü TDV'de YOK). Adapazarı'nın geri alınışı 21 Haziran 1921 TDV adapazari. D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"İzmit, Adapazarı", yer_id:"İzmit", kisiler:"",
  d:"Mart 1921'de Yunan işgaline uğrayan Adapazarı, TDV'nin Adapazarı maddesine göre 21 Haziran'da geri alındı. TDV'nin İzmit maddesine göre 6 Temmuz 1920'de önce İngilizler, ardından Yunanlılar tarafından işgal edilen İzmit de 28 Haziran 1921'de kurtarıldı. Yunanlılar şehri terk ederken çarşı kesimini yaktı.",
  kaynak:"izmit · adapazari" },

{ t:"1921-07-05", k:"kazanc", etiket:["kurtulus","isgal","konu-askeri"],
  b:"Muğla'nın İtalyan işgalinden kurtuluşu",
  gun:"5 Temmuz 1921",
  ic_not_gun:"D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"Muğla", yer_id:"Muğla", kisiler:"",
  d:"İtalya, Anadolu'daki işgal bölgesinden 1921 yazında çekilmeye başladı; Antalya'nın boşaltılması 1 Haziran'da başlamıştı. TDV'nin Muğla maddesine göre 23 Temmuz 1919'dan beri İtalyan işgalinde bulunan Muğla 5 Temmuz 1921'de kurtarıldı.",
  kaynak:"mugla" },

{ t:"1921-07-20", k:"kayip", etiket:["savas","isgal","konu-askeri"],
  b:"Eskişehir'in boşaltılması — Yunan ordusu Eskişehir, Kütahya ve Bilecik'e girdi",
  gun:"20-22 Temmuz 1921",
  ic_not_gun:"Eskişehir 20 Temmuz TDV eskisehir; Kütahya 21 Temmuz TDV kutahya; Bilecik 22 Temmuz TDV bilecik (üçüncü işgal). Afyon'un bu yazdaki işgal günü okunan TDV maddelerinde YOK. D147: ±30 günde 1921-07-11 Moğolistan kırılması (2s KAPSAM DIŞI) bu maddeyle eşleşir.",
  yer:"Eskişehir, Kütahya, Bilecik", yer_id:"Eskişehir", kisiler:"Mustafa Kemal Paşa",
  d:"Kütahya-Eskişehir savaşlarında hazırlıksız yakalanan Türk ordusu, Mustafa Kemal Paşa'nın emriyle Sakarya'nın doğusuna çekildi. TDV maddelerine göre Yunanlılar 20 Temmuz 1921'de Eskişehir'e, 21 Temmuz'da Kütahya'ya, 22 Temmuz'da Bilecik'e girdi. Yunan Kralı Konstantinos 28 Temmuz'da Kütahya'da savaş konseyine başkanlık etti ve ordu Ankara yönünde taarruza hazırlandı.",
  kaynak:"eskisehir · kutahya · bilecik · milli-mucadele" },

// ── 1922 — BÜYÜK TAARRUZ GÜN GÜN ───────────────────────────────────
{ t:"1922-08-26", k:"savas", etiket:["savas","konu-askeri"],
  b:"Büyük Taarruz başladı",
  gun:"26 Ağustos 1922",
  yer:"Afyon, Kocatepe", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"Mustafa Kemal Paşa",
  d:"Sakarya'dan sonra bir yıl süren hazırlığın ardından Türk ordusu Afyon cephesinde genel taarruza geçti. TDV'nin Millî Mücadele ve Kütahya maddelerine göre Büyük Taarruz 26 Ağustos 1922 sabahı Afyon'dan başladı ve Yunan ordusunun direnişi kısa sürede kırıldı.",
  kaynak:"milli-mucadele · kutahya · usak" },

{ t:"1922-08-27", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Afyon'un kurtuluşu",
  gun:"27 Ağustos 1922",
  yer:"Afyon", yer_id:"Karahisâr-ı Sâhib (Afyon)", kisiler:"Mustafa Kemal Paşa",
  d:"Taarruzun ikinci gününde Yunan cephesi Afyon önlerinde yarıldı. TDV'nin Afyonkarahisar maddesine göre bizzat Atatürk'ün kumanda ettiği Büyük Taarruz sonunda Yunan kuvvetleri bozguna uğratıldı ve şehir 27 Ağustos 1922'de kurtarıldı. Bu gün Afyon'un kurtuluş günü olarak kutlanır.",
  kaynak:"afyonkarahisar" },

{ t:"1922-08-30", k:"savas", etiket:["savas","kurtulus","konu-askeri"],
  b:"Başkumandanlık Meydan Muharebesi — Kütahya'nın kurtuluşu",
  gun:"30 Ağustos 1922",
  yer:"Dumlupınar, Kütahya", yer_id:"Kütahya", kisiler:"Mustafa Kemal Paşa",
  d:"Yunan ordusunun ana kuvvetleri Afyon ile Dumlupınar arasında kuşatıldı. TDV'nin Millî Mücadele maddesine göre kuşatma harekâtı 30 Ağustos'ta Başkumandan Mustafa Kemal Paşa'nın bizzat yönettiği Başkumandanlık Muharebesi ile tamamlandı. TDV'nin Kütahya maddesine göre aynı gün bir süvari tümeni, çekilen Yunan kuvvetlerinin yakıp yıktığı Kütahya'yı kurtardı.",
  kaynak:"milli-mucadele · kutahya" },

{ t:"1922-09-01", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Uşak'ın kurtuluşu",
  gun:"1 Eylül 1922",
  yer:"Uşak", yer_id:"Uşak", kisiler:"",
  d:"Başkumandanlık Muharebesi'nden sonra Yunan ordusunun artıkları batıya, İzmir yönüne çekildi. TDV'nin Uşak maddesine göre 29 Ağustos 1920'den beri işgalde bulunan Uşak, millî kuvvetlerin şehre girişiyle 1 Eylül 1922'de kurtuldu. Çekilen işgal kuvvetlerinin çıkardığı yangında şehrin yaklaşık dörtte üçü yandı.",
  kaynak:"usak" },

{ t:"1922-09-02", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Eskişehir'in kurtuluşu",
  gun:"2 Eylül 1922",
  yer:"Eskişehir", yer_id:"Eskişehir", kisiler:"",
  d:"Büyük Taarruz'un kuzey kanadında Yunan kuvvetleri Eskişehir'i de bırakmak zorunda kaldı. TDV'nin Eskişehir maddesine göre 20 Temmuz 1921'den beri işgal altındaki şehir 30 Ağustos zaferinin ardından 2 Eylül 1922'de kurtarıldı. On üç aylık işgal sonunda çarşı kesimi yakılmış, şehir yarı yarıya harap olmuştu.",
  kaynak:"eskisehir" },

{ t:"1922-09-06", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Bilecik'in kurtuluşu",
  gun:"6 Eylül 1922",
  yer:"Bilecik", yer_id:"Bilecik", kisiler:"",
  d:"TDV'nin Bilecik maddesine göre şehir Millî Mücadele sırasında üç kez Yunan işgaline uğradı; 22 Temmuz 1921'de başlayan üçüncü işgal 6 Eylül 1922'de sona erdi. Yunan kuvvetleri şehri boşaltırken çıkardıkları yangında evlerin, dükkânların ve hükümet konağının büyük kısmı yandı.",
  kaynak:"bilecik" },

{ t:"1922-09-07", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Aydın'ın kurtuluşu",
  gun:"7 Eylül 1922",
  yer:"Aydın", yer_id:"Aydın", kisiler:"",
  d:"Türk ordusunun İzmir'e yaklaşmasıyla Menderes vadisindeki Yunan kuvvetleri de çekildi. TDV'nin Aydın maddesine göre şehir 7 Eylül 1922'de kısmen yıkılmış ve nüfusu çok azalmış hâlde Türk kuvvetleri tarafından kurtarıldı. Geri çekilen Yunanlılar şehrin büyük kısmını yakmıştı.",
  kaynak:"aydin" },

{ t:"1922-09-11", k:"kazanc", etiket:["savas","kurtulus","konu-askeri"],
  b:"Bursa'nın geri alınışı",
  gun:"10-11 Eylül 1922",
  ic_not_gun:"TDV bursa günü '10-11 Eylül 1922' diye iki günlük aralıkla veriyor; madde aralığın son gününe yazıldı.",
  yer:"Bursa", yer_id:"Bursa", kisiler:"",
  d:"İzmir'in kurtuluşundan sonra Türk ordusu kuzeyde Marmara kıyılarına doğru ilerledi. TDV'nin Bursa maddesine göre 8 Temmuz 1920'den beri Yunan işgalinde bulunan şehir 10-11 Eylül 1922'de geri alındı. Ordunun buradan Çanakkale'ye yürümesi İngilizleri telaşlandırdı ve Mudanya görüşmelerinin yolunu açtı.",
  kaynak:"bursa · milli-mucadele" },

{ t:"1922-11-10", k:"kazanc", etiket:["kurtulus","antlasma","konu-askeri"],
  b:"Doğu Trakya'nın teslim alınması — Kırklareli ve Tekirdağ",
  gun:"10-13 Kasım 1922",
  ic_not_gun:"Kırklareli 10 Kasım 1922 TDV kirklareli; Tekirdağ 13 Kasım 1922 TDV tekirdag. Edirne'nin teslim günü TDV edirne'de yok (yalnız '1922').",
  yer:"Kırklareli, Tekirdağ, Edirne", yer_id:"Kırklareli", kisiler:"Refet Paşa",
  d:"Mudanya Mütarekesi Doğu Trakya'nın Yunan ordusunca boşaltılıp Türkiye'ye teslimini öngörüyordu; Trakya'yı teslim almakla görevli Refet Paşa 19 Ekim'de İstanbul'a geldi. TDV'ye göre 26 Temmuz 1920'den beri işgal altındaki Kırklareli 10 Kasım 1922'de geri alındı, Tekirdağ da mütareke uyarınca 13 Kasım'da Türklere iade edildi. Böylece Doğu Trakya savaşılmadan Türk topraklarına katıldı.",
  kaynak:"kirklareli · tekirdag · milli-mucadele" },

];

;
/* ==== data/olaylar_p0058.js ==== */
// =====================================================================
// PAKET P05-ANADOLU — KRONOLOJİ (14 Eylül 2026 · DALGA SINIF2 · 1.MURAT sevki)
// Rapor: denetim/P05-ANADOLU-0914.md
//
// AD ALANI (§7): data/olaylar_p0058.js → window.OLAYLAR_P0058
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
//
// Maddelerin işi: yeni noktaların (yerlesimler_anadolu_0914.js) ve
// YAMA-ANADOLU-0914.json önerilerinin açtığı kırılma günlerini KAYNAKLI
// maddeyle karşılamak (Değişmez 2 / 2s) + 0033/H-0018'in istediği dönüş maddesi.
// =====================================================================

window.OLAYLAR_P0058 = [

// ── 1339 · Eretna Kayseri yöresini bağladı (Zamantı'nın eretna başlangıcı) ──
{ t:"1339-01-01", kesinlik:"yil", k:"fetih", kapsam:"dis", etiket:["toprak-kazanc","konu-siyasi"],
  b:"Eretna, Tokat, Kayseri ve Samsun yörelerini kendisine bağladı",
  gun:"1339 (ay ve gün kaynakta yok)",
  yer:"Kayseri, Tokat, Samsun yöreleri; Zamantı (Pınarbaşı)",
  yer_id:"Kayseri",
  kisiler:"Emîr Eretna",
  d:"İlhanlı valisi olarak Anadolu'da güç kazanan Emîr Eretna, Memlûk Sultanı en-Nâsır Muhammed'in desteğini yeniden kazandıktan sonra 1339'da sınırlarını genişletti ve Tokat, Kayseri ile Samsun yörelerini kendisine bağladı. Kayseri'nin doğusundaki Zamantı yöresi de bu dönemde Eretna idaresine girdi. Beylik, 1341'de en-Nâsır'ın ölümüyle bağımsızlığını ilan etti.",
  ic_not_d:"Kaya 2014 (MKÜ SBE Derg. 11/25) s.9: '1339 yılında … Tokat, Kayseri ve Samsun yörelerini kendisine bağladı'. Zamantı'nın bu tarihte Eretna'ya geçtiği ADIYLA söylenmiyor; s.10 '1352 sonrası … Eratnalılar'ın elindeki Zamantı (Pınarbaşı)' ifadesinden ve Kayseri yöresi hükmünden ÇIKARIM. Atlas düzelecek yer (Oturum 0): yerlesimler.js Kayseri `eretna` 1335-01-01'de başlıyor — bu kaynak 1339 diyor; ölçülmedi, raporda.",
  kaynak:"Abdullah Kaya, 'Dulkadirli Beyliği'nin Eratnalılar ile Münasebetleri', MKÜ SBE Dergisi 11(25), 2014, s. 89 · eretnaogullari" },

// ── 1360 · Dulkadirli Halil Bey Zamantı'ya kadar genişledi ──────────────
{ t:"1360-01-01", kesinlik:"yil", k:"fetih", kapsam:"dis", etiket:["toprak-kazanc","konu-siyasi"],
  b:"Dulkadirli Halil Bey sınırlarını Zamantı'ya kadar genişletti",
  gun:"1360 (ay ve gün kaynakta yok)",
  yer:"Zamantı (Pınarbaşı), Kayseri'nin doğusu",
  yer_id:"Zamantı (Pınarbaşı)",
  kisiler:"Halil Bey (Dulkadiroğlu), Ömer Bey",
  d:"Eretna Beyliği'nin başına küçük yaşta Mehmed Bey'in geçmesiyle zayıflayan Eretna topraklarına güneyden Türkmen akınları arttı. 1360'ta Türkmen reislerinden Ömer Bey Malatya'yı alırken Dulkadiroğlu Halil Bey de beyliğinin sınırlarını Kayseri'nin doğusundaki Zamantı'ya kadar genişletti. Böylece Elbistan ile Kayseri arasındaki Zamantı yöresi Dulkadiroğulları'nın eline geçti ve beylik 1515'teki Osmanlı ilhakına kadar bu bölgeyi elinde tuttu.",
  ic_not_d:"TDV `dulkadirogullari` (gövde okundu): '1360'ta Türkmen reislerinden Ömer Bey Eretnaoğulları'ndan Malatya'yı alırken Halil Bey de ülkesinin sınırlarını Zamantı'ya kadar genişletti.' Kaya 2014 s.12 aynı yılı veriyor. 'Zamantı (Pınarbaşı)' eşlemesi Kaya 2014 s.10. 1515'e kadar kesintisizlik bir ÇIKARIMDIR (1381 sonrası Kadı Burhâneddin devri Zamantı için ölçülmedi).",
  kaynak:"dulkadirogullari · Kaya 2014 (MKÜ SBE Dergisi 11/25), s. 90, 92" },

// ── 1394 · İstanbul'un sıkı kuşatması — Bizans tâbiiyeti kopuyor ────────
{ t:"1394-01-01", kesinlik:"yil", k:"savas", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Yıldırım Bayezid İstanbul'u yeniden sıkı bir kuşatma altına aldı",
  gun:"1394 ilkbaharı (ay ve gün kaynakta yok)",
  yer:"İstanbul",
  yer_id:"İstanbul",
  kisiler:"Yıldırım Bayezid, II. Manuel",
  d:"1391'den beri aralıklarla abluka altında tutulan İstanbul, 1394 ilkbaharında Yıldırım Bayezid tarafından yeniden sıkı bir kuşatmaya alındı. 1371'den beri Osmanlı'ya haraç ödeyen ve askerî yardım gönderen Bizans ile ilişki böylece açık düşmanlığa döndü. Kuşatma, Timur tehlikesinin belirmesi ve 1402 Ankara Savaşı'yla kaldırıldı.",
  ic_not_d:"TDV `bayezid-i`: 'yedi yıldır abluka altında tuttuğu İstanbul'u 1394 ilkbaharında yeniden sıkı bir kuşatma altına aldı'. TDV `bizans`: 1371 zaferinden sonra Bizans 'haraç ödemeyi ve Osmanlı ordusunda hizmeti kabul ediyorlardı'. Bu madde YAMA-ANADOLU-0914.json Bizans haraçgüzâr penceresi A'nın KAPANIŞ günü içindir. ⚠️ 'ilkbahar' yıl başına yuvarlandı (§4: en kaba güvenli düzey) — kopuşu 2-5 ay ERKEN gösterir; bildirildi.",
  kaynak:"bayezid-i · bizans" },

// ── 1424-02-22 · II. Murad–Bizans barışı: Bizans yeniden haraçgüzâr ─────
{ t:"1424-02-22", k:"antlasma", kapsam:"ic", etiket:["antlasma","diplomasi","konu-diplomasi"],
  b:"II. Murad ile Bizans barışı — Bizans yeniden haraç ödemeyi kabul etti",
  gun:"22 Şubat 1424 (21 Rebîülevvel 827)",
  yer:"İstanbul",
  yer_id:"İstanbul",
  kisiler:"II. Murad, II. Manuel, VIII. Ioannes",
  d:"Düzmece Mustafa'yı destekleyen Bizans'a karşı 1422'de İstanbul'u kuşatan II. Murad, 22 Şubat 1424'te Bizans imparatoruyla barış antlaşması imzaladı. Bizans bu antlaşmayla yeniden Osmanlı'ya haraç ödemeyi kabul etti ve Silivri ile Terkos hisarları hariç Marmara, Ege ve Karadeniz kıyılarında 1402'den sonra aldığı yerleri geri verdi — haritada Karadeniz kıyısındaki İğneada, Rezve ve Ahtapolu bu tarihte Osmanlı'ya döner; 1403'te Emîr Süleyman'la yaptığı antlaşmayla kurtulduğu yıllık haraç böylece geri döndü. Bizans bu durumunu 1453'te İstanbul'un fethine kadar sürdürdü.",
  ic_not_d:"TDV `murad-ii`: 'Bizans imparatoru ile barış antlaşması imzaladı (21 Rebîülevvel 827 / 22 Şubat 1424)' · 'Bizans imparatoru haraç ödeyen tâbiler durumundaydı'. TDV `bizans`: 'Bizans yeniden haraç ödemeyi kabul ederek Sultan II. Murad ile bir anlaşma yapabildi' · 1403: 'Türkler'e ödemekte olduğu yıllık haraçtan da kurtuldu'. Bu madde YAMA-ANADOLU-0914.json Bizans haraçgüzâr penceresi B'nin AÇILIŞ günü içindir.",
  kaynak:"murad-ii · bizans" },

// ── 1514-10-23 · Bayburt ve Kiğı teslim alındı ─────────────────────────
{ t:"1514-10-23", k:"fetih", kapsam:"ic", etiket:["toprak-kazanc","savas","konu-askeri"],
  b:"Bayburt ve Kiğı kaleleri Safevîlerden teslim alındı — Erzincan ile Bayburt Bıyıklı Mehmed Bey'e verildi",
  gun:"Ekim 1514 (Bayburt'un alınışı; gün kaynakta yok) · 23 Ekim 1514 (beylerbeyilik tevcihi)",
  yer:"Bayburt, Kiğı, Erzincan",
  yer_id:"Bayburt",
  kisiler:"Yavuz Sultan Selim, Bıyıklı Mehmed Bey (Paşa), Mustafa Bey (Yanya sancak beyi), Kara Maksûd-i Sultânî",
  d:"Çaldıran zaferinden sonra Tebriz'den dönen Yavuz Sultan Selim ordugâhındayken Bayburt ve Kiğı kalelerinin teslim alındığı haberleri geldi. Trabzon sancak beyi Bıyıklı Mehmed Bey ile Yanya sancak beyi Mustafa Bey, Şah İsmâil'in emîrlerinden Kara Maksûd-i Sultânî'nin savunduğu Bayburt'u Ekim 1514'te aldı. Savaşsız Osmanlı hâkimiyetine giren Erzincan, Bayburt ile birlikte 23 Ekim 1514'te beylerbeyilik olarak Bıyıklı Mehmed Bey'e verildi ve Bayburt bir sancak merkezi hâline getirildi.",
  ic_not_d:"TDV `selim-i`: 'Dönüş sırasında Bayburt ve Kiğı kalelerinin teslim alındığı haberleri gelmişti.' TDV `bayburt`: '… Bayburt'u aldılar (Ekim 1514)' · 'Bayburt Erzincan ile birlikte Trabzon Beyi Bıyıklı Mehmed Paşa'ya verildi ve bir sancak merkezi haline getirildi.' TDV `erzincan`: 'Erzincan, Bayburt ile birlikte 23 Ekim 1514'te Bıyıklı Mehmed Bey'e (Paşa) beylerbeyilik olarak verilmişti.' 🔴 23 Ekim ALINIŞ günü DEĞİL, tevcih günüdür — alınış bu günden önce ya da bu gündedir (üst sınır). Kiğı'nın AYI da bilinmiyor; Kiğı için gün komşudan: Bayburt · TDV erzincan (aynı cümle, aynı dönüş). Remzi Kılıç (kişisel sitesi, dipnotlu; basılı sürümü aranmadı): 'Orduy-ı Humâyûn Erzurum'da iken Bayburt'un fetih haberi gelmiştir' — TDV ile uyumlu, dayanak değil.",
  kaynak:"selim-i · bayburt · erzincan" },

// ── 1514-11-24 · Yavuz Amasya'ya döndü (0033/H-0018 eksik madde) ────────
{ t:"1514-11-24", k:"diger", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Yavuz Sultan Selim Tebriz seferinden Amasya'ya döndü ve kışı orada geçirdi",
  gun:"24 Kasım 1514 (gün yalnız Remzi Kılıç'ta; TDV yalnız 'Amasya'ya döndü' der)",
  yer:"Amasya, Niksar",
  yer_id:"Amasya",
  kisiler:"Yavuz Sultan Selim",
  d:"Tebriz'de dokuz gün kalan Yavuz Sultan Selim, yiyecek sıkıntısı ve askerin isteksizliği yüzünden kışı İran'da geçirmekten vazgeçti ve Kars ile Bayburt üzerinden geri döndü. Niksar'da Ramazan Bayramı'nı geçiren padişah Amasya'ya ulaşarak kışı burada geçirdi. Ertesi yıl yeniden Safevîler üzerine yürümek niyetindeydi; Amasya'da yeniçerilerin İstanbul'a dönme baskısı başladı, sefer 1515 baharında Kemah'ın fethiyle sürdü.",
  ic_not_gun:"TDV `selim-i`: 'Tebriz'de dokuz gün kaldıysa da … Amasya'ya döndü' · 'Kışı Amasya'da geçiren Yavuz Sultan Selim …'. TDV `caldiran-savasi`: 'Kars ve Bayburt üzerinden geriye hareket etti'. 24 Kasım günü YALNIZ Remzi Kılıç'ın kişisel sitesinde (dipnotlu, yayın künyesi yok — §4 ARA BÖLGE; basılı sürümü ARANMADI): 'Sultan Selim, Niksar'da Ramazan Bayramı'nı idrak edip, 24 Kasım 1514'de Amasya şehrine' (data/savaslar.js a4-tebriz-donus-1514 kaynağından aktarıldı, site bu oturumda YENİDEN OKUNMADI). Madde 0033/H-0018 durum satırının istediği 'eksik madde'dir; hiçbir kırılmayı kapatmak için yazılmadı.",
  kaynak:"selim-i · caldiran-savasi" }

];

;
/* ==== data/olaylar_p0059.js ==== */
// ============================================================================
// KRONOLOJİ — 1594 ÜÇ VOYVODALIK İSYANI (H-0003, paket 0052)
// ============================================================================
// Yazan: EKO-RIVAYET · 16 Eylül 2026 · koordinatör 1.MURAT
// Şartname: oturumlar/DALGA-0052.md §3 ("H-0003: üç voyvodalığın 1594 isyanı
// maddesi olaylar_p0059.js'e, yeni dosya, window.OLAYLAR_P0059")
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.OLAYLAR_P0059 tanımlar.
//    index.html'e <script> satırının eklenmesi bu oturumun işi DEĞİL —
//    Oturum 0/koordinatöre tahtadan bildirildi (denetim/EKO-RIVAYET-0916.md).
//
// NEDEN BOŞLUK VARDI: Emre "üç voyvodalığın birden isyan başlatması maddesini
// göremedim" dedi (H-0003, görsel H-0003-1.png). olaylar_ek10.js'in kendi
// yorumu bunu doğruluyor: "BOŞLUK çıktı: 1593-07-01 ile 1596-06-20 arasında
// Erdel/Eflak/Boğdan'a dair tek madde yok" (satır 37, 189, 245). Yani boşluk
// önceden ÖLÇÜLMÜŞ ama madde hiç yazılmamış.
//
// KAYNAK: TDV eflak · TDV bogdan (ikisi de HTTP 200, gövde okundu, 16 Eylül
// 2026). Metin KOPYALANMADI, özetlendi.
//   TDV eflak: "13 Kasım 1594'te Eflak ve Boğdan'da Osmanlı yönetimine karşı
//   eş zamanlı ayaklanmalar başladı; Erdel'in de desteğiyle hareket Tuna'nın
//   ötesine taştı." · "1594 ortasında Tuna'nın kuzeyindeki üç voyvodalık
//   ortak hareket etmeyi kararlaştırdı."
//   TDV bogdan: Boğdan voyvodası Aron Tiran, Avusturya İmparatoru ve Papa
//   VIII. Clemens'in kurduğu Kutsal İttifak'a 1594'te katılıp Erdel
//   Prensliği'ne tâbi oldu.
// Mihai Viteazul'un (Eflak voyvodası, "Cesur Mihai") vergi yükünden doğan
// isyanı TDV'de ayrıca anılıyor; onun 1599-1600'de Erdel'i ve Boğdan'ı fiilen
// ele geçirmesi BAŞKA bir olay ve bu maddenin kapsamı DIŞINDA bırakıldı
// (ölçülemedi: TDV'nin bu ikinci safhaya verdiği tam gün — ayrı bir madde
// gerektirir, kaynak taraması burada YAPILMADI).
//
// YER: tek bir yerleşime bağlanamayan bölgesel bir ayaklanma. `yer_id` Eflak
// voyvodalığının merkezi Bükreş'e bağlandı (data/yerlesimler.js'te `ad:"Bükreş"`
// kaydı VAR — D061/D194'ün "yer_id eşleşmedi" tuzağına düşmemek için önceden
// doğrulandı). Bu bir yaklaşıklamadır: ayaklanma Eflak, Boğdan ve destek veren
// Erdel'i birlikte kapsıyordu, Bükreş yalnız en büyük ve simgesel merkez.
// ============================================================================
window.OLAYLAR_P0059 = [

{ t:"1594-11-13", k:"isyan", etiket:["isyan","savas","siyaset","konu-isyan","konu-siyasi","konu-askeri"],
  b:"Eflak, Boğdan ve Erdel Osmanlı'ya karşı birlikte ayaklandı",
  gun:"13 Kasım 1594",
  yer:"Eflak ve Boğdan (Erdel'in desteğiyle)", yer_id:"Bükreş",
  kisiler:"Mihai Viteazul, Aron Tiran",
  d:"1594 ortasında Tuna'nın kuzeyindeki üç voyvodalık — Eflak, Boğdan ve Erdel — Osmanlı'ya karşı ortak hareket etmeyi kararlaştırdı. Boğdan voyvodası Aron Tiran, Avusturya İmparatoru ile Papa VIII. Clemens'in kurduğu Kutsal İttifak'a katılıp kendini Erdel Prensliği'ne tâbi kıldı; Eflak voyvodası Mihai Viteazul ağır vergi yükünden duyduğu hoşnutsuzlukla harekete katıldı. 13 Kasım 1594'te Eflak ve Boğdan'da Osmanlı yönetimine karşı eş zamanlı ayaklanmalar başladı ve Erdel'in desteğiyle hareket Tuna'nın güneyine, Osmanlı topraklarına doğru taştı. TDV İslâm Ansiklopedisi'ne göre bu üçlü ittifak, aynı yıllarda süren Osmanlı-Habsburg Uzun Harbi'nin (1593-1606) kuzey cephesini açtı.",
  kaynak:"eflak", duygu:["⚔","🏛"] }

];

;

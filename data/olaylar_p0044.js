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
  onem:3, dunya:1, kapsam:"ic", etiket:["idari","toprak"],
  gun:"Mart 1556 (Cemâziyelevvel 963) — beylerbeyiliğin başlangıcı; Tobruk'un alınış yılı kaynakta yok", yer:"Trablusgarp · Berka kıyısı (Tobruk, Derne)",
  yer_id:"Tobruk",
  d:"Trablusgarp'ın 1551'deki fethinden sonra Turgut Reis, Cemâziyelevvel 963'te (Mart 1556) beylerbeyi unvanıyla Trablusgarp'a geldi. Dokuz yıl süren valiliği boyunca eyaletin imar ve tahkimine çalıştı, Osmanlı idaresini güneyde Fizan'a kadar götürdü ve sınırları doğuya doğru genişleterek Berka kıyısındaki Tobruk ile Derne'yi aldı. Böylece Trablusgarp eyaleti Mısır sınırına kadar uzanan kıyı şeridini kapsar hâle geldi.", ic_not_d:"⚠️ TARİH HAKKINDA: TDV beylerbeyiliğin yılını (1556) ve ayını veriyor; Tobruk ile Derne'nin alınışına ayrı yıl vermiyor, yalnız Turgut Reis'in beylerbeyiliği sırasında (1556-1565) olduğunu söylüyor. Atlasın Tobruk için kullandığı 1556 bu dönemin başlangıç yılıdır. ⚠️ KAYNAK HAKKINDA: TDV `berka` Berka bölgesinin Mısır'ın fethinden sonra Osmanlı idaresine bağlandığını yazıyor; iki madde farklı şeyleri anlatıyor olabilir (bölgenin idarî bağı · kıyı kalelerinin fiilen alınışı), çelişki ilan edilmedi.",
  kaynak:"derne + trablusgarp + turgut-reis — TDV derne birebir: 'Trablusgarp Turgut Reis'in teşvik ve gayretleriyle Osmanlı hâkimiyetine geçtikten sonra beylerbeyi unvanı ile buraya yerleşen Turgut Reis (Paşa) sınırlarını genişleterek doğuda Tobruk ve Derne'yi almıştı.' · TDV trablusgarp birebir: '1556'da Turgut Reis beylerbeyilikle buraya geldi. Turgut Reis'in dokuz yıllık valiliği…' · TDV berka: bölgenin 'Mısır'ın Osmanlılar tarafından fethinden sonra bu idareye bağlandığı' · kaynak gösterimi: 1.MURAT M-3636 (TDV derne, KITA 15 YAMA-SIRENAYKA-0912); gövde KITA 14 tarafından 13 Eylül 2026'da ayrıca çekilip doğrulandı." },

{ t:"1556-07-16", b:"Kostayniçe ve Novi'nin fethi — Una hattının iki kalesi", tur:"fetih",
  onem:3, dunya:1, kapsam:"dis", etiket:["askeri","toprak","serhat"],
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
  onem:3, dunya:2, kapsam:"dis", etiket:["askeri","toprak"],
  gun:"1556 (TDV yıl verir, gün vermez)", yer:"Astarhan · Aşağı Volga",
  yer_id:"Astrahan",
  d:"Moskova Çarlığı 1556'da Astarhan'ı da alarak, TDV'nin ifadesiyle 'ilerisi için çok önemli sonuçlar doğuracak bir hamle' yaptı; Astarhan Hanlığı'nın işgaliyle Aşağı Volga Rus denetimine girdi. Kırım Hanı Devlet Giray bu işgalleri önlemek istediyse de başarılı olamadı. Osmanlılar bu gelişmeye 1569'da Astarhan seferiyle karşılık verdi; ancak Aşağı Volga bölgesinin kontrolünde başarılı olamayınca Moskova Çarlığı ile mücadeleyi Kırım hanına bıraktılar. ⚠️ TARİH HAKKINDA: TDV yıl veriyor (1556), gün vermiyor; `astarhan-hanligi` maddesi işgale tarih vermiyor. ⚠️ HARİTA HAKKINDA: atlas aynı gün Aşağı Volga'daki Astarhan ve Nogay kayıtlarını Rusya'ya geçiriyor.",
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
  onem:2, dunya:1, kapsam:"dis", etiket:["toprak","askeri"],
  gun:"1574", yer:"Mâku · İran Azerbaycanı sınırı", yer_id:"Mâku",
  d:"1574 yılında Osmanlı Devleti, Mahmûdî Kürt kabilesinin reisi İvaz Bey'i Mâku'yu İranlılar'dan alıp orada bir kale yapmakla görevlendirdi. Van eyaletinin doğu ucundaki bu kale, Osmanlı döneminde bölgede cereyan eden olaylarda önemli bir yer tuttu.",
  ic_not_d:"Tarih: TDV yalnız yıl veriyor (1574) → YYYY-01-01. Harita: KITA 29 Ferhat Paşa yaması Mâku'nun d: başlangıcını aynı güne yazıyor; madde ile yama BİRLİKTE inmeli (1.MURAT M-3764). Pencere ölçümü: 1574-01-01'de bugün Ufa (rusya) ve Elicpûr (ahmednagar) yabancı kırılmaları var; bu madde onları ±30 gün ölçütünde 'kapatır' ama anlatmaz (D147).",
  kaynak:"maku — TDV maku birebir: '1574 yılında Osmanlı Devleti, Mahmûdî Kürt kabilesi reisi İvaz Bey’i Mâkû’yu İranlılar’dan alıp burada bir kale yapmakla görevlendirdi. Osmanlı döneminde özellikle bu kalenin bölgede cereyan eden olaylarda önemli bir yeri olmuştur.'" },

{ t:"1840-01-01", b:"İlk Osmanlı kâğıt parası (kâime) çıkarıldı", tur:"ekonomi",
  onem:3, dunya:1, kapsam:"ic", etiket:["ekonomi"],
  gun:"muhtemelen Haziran 1840", yer:"İstanbul", yer_id:"İstanbul",
  d:"Tanzimat'ın ilk yıllarında maliyeye gelir bulma arayışı sırasında, sonradan şeyhülislâm olacak Ârif Hikmet Bey'in teklifiyle esham sisteminin geliştirilmiş bir biçimi olan kâime uygulaması kabul edildi. Toplam 160.000 lira (32.000 kese) tutarındaki ilk kâimeler, acil para ihtiyacı yüzünden basılmayı beklemeden el yazısıyla, Maliye Nâzırı Sâib Paşa zamanında muhtemelen Haziran 1840'ta çıkarıldı. Nakit para hükmündeki bu kâğıtların tedavül süresi sekiz yıl, faizi yıllık %12,5'ti; karşılıkları yoktu, yalnız faizlerine İstanbul gümrüğü gelirinden karşılık gösterildi. Halk alışık olmadığı bu parayı olumlu karşılamadı ve el yazısı kâimeler kısa sürede kalpazanların hedefi oldu.",
  ic_not_d:"Tarih: TDV 'muhtemelen Haziran 1840' diyor — ay bile kesin değil; §4 gereği yıl yazıldı (1.MURAT M-3722 kararı), ay metinde. Pencere: 1840-01-01'deki kırılmaların hepsi başka maddelerle zaten kapalı, bu madde hiçbirini tek başına kapatmıyor.",
  kaynak:"kaime — TDV kaime birebir: '…böyle bir yöntemin uygulanması teklifi daha sonra şeyhülislâm olan Ârif Hikmet Bey’den gelmiş ve kabul edilmiştir.' · 'Kāimeler, paraya olan âcil ihtiyaç yüzünden kalıplarının çıkarılması ve basılması beklenmeksizin el yazısı olarak piyasaya sürüldü. Toplam 160.000 lira (32.000 kese) tutarındaki ilk kāimeler Maliye Nâzırı Sâib Paşa zamanında muhtemelen Haziran 1840’ta çıkarıldı. Büyük ebatlı ve nakit para hükmünde olan kāimelerin tedavül süresi sekiz yıldı. Ayrıca senede % 12,5 faiz getirisi vardı.' · 'Kāimelerin karşılığı yoktu, ancak ödenecek faizlerine İstanbul gümrüğü malından karşılık gösterildi. Halk böyle bir uygulamaya alışık olmadığı için kāimeler piyasada olumlu karşılanmadı. Öte yandan el yazısı kāimeler hemen kalpazanların dikkatini çekti.' · aday: KITA 28, denetim/ADAY-EKONOMI-MADDELERI-0913.json" },

];

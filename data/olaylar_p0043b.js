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
  tur:"savas", k:"askeri", onem:5, dunya:4, kapsam:"dis", etiket:["askeri","savas"],
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

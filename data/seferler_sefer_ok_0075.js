// -*- coding: utf-8 -*-
// SEFERLER_SEFER_OK_0075 — SEFER-OK-0075 oturumu, 22 Eylül 2026 · PARTI-0075 ⑥
// Konu: üç TAHLİYE oku (H-0001 · H-0023 · H-0037) — HAREKET.tahliye ZATEN
// tanımlıydı (glif ⇥, js/app.js) ama hiçbir SEFERLER kaydı `tur:"tahliye"`
// kullanmıyordu; ölü kapasiteydi (HAREKET.isyan'ın 0075 öncesi durumuyla aynı sınıf).
//
// OKUYUCU: js/app.js seferKayitlariniTopla() — /^SEFERLER(_[A-Za-z0-9_]+)?$/ deseni.
// AD ALANI (§7): data/seferler_sefer_ok_0075.js → window.SEFERLER_SEFER_OK_0075.
//
// 🔴 ÜÇ OK, ÜÇ FARKLI KAYNAK DÜZEYİ — hiçbiri "kaynak güzergâh verdi" DEĞİLDİR,
// hepsi `kesinlik` alanında açıkça söylenir:
//   Mora 1828      TDV yalnız "Mora'dan çekildi" der; Girit varışı Emre'nin
//                  tarifidir (H-0001: "moradan dışarı girite doğru").
//   Silistre 1836  TDV yalnız YIL verir, varış yeri YOK. Ok Emre'nin açık isteği
//                  üzerine (H-0023: "tahliye oku ile boşaltmayı temsil edelim")
//                  ŞEMATİK bir yön işaretidir (Tuna'nın karşı yakasına ~20 km).
//                  Önceki oturum (SEFER-OK-0070/P0074) benzer durumda (Anapa)
//                  güzergâh bulamayınca oku BOŞ bırakmıştı — burada tercih tersi,
//                  çünkü Emre AÇIKÇA ok istedi. Kabul edilmezse bu KAYIT TEK BAŞINA
//                  silinebilir, öteki ikisine dokunmaz.
//   Suriye 1841    İşgal güzergâhının (Suriye harekâtı 1831-32 + Anadolu ilerleyişi
//                  1832-33) TERSİDİR; TDV yalnız "geri çekmek üzere emirler verdi"
//                  (27 Kasım 1840) der, dönüş yolunun kendi kaynağı yok.
//
// `rota` alanı (yalnız Mora kaydında): `yol` kaynaklı iki istasyondur, `rota` aynı
// istasyonlar arasına ne_10m_land'e karşı doğrulanmış, kıyıyı dolanan ÇİZİM ara
// noktalarıdır (denetim/ARAC-SEFER-OK-DENIZ-ROTA-0075.py) — bir iddia değil.

window.SEFERLER_SEFER_OK_0075 = [

{ id:"p0075-misir-mora-girit-tahliye-1828",
  ad:"Mısır kuvvetlerinin Mora'dan Girit'e çekilişi (1828)",
  tur:"tahliye", sonuc:"belirsiz", devlet:"misir-kavalali",
  f:"1828-10-01", t:"1828-10-05",
  tarih_hassasiyet:"AY — atlas kronolojisi 'Ekim 1828' (data/olaylar_ek4.js:156, madde günü 1828-10-05); TDV mora: 'sonbaharında' — gün kaynakta YOK",
  kaynak:"TDV ibrahim-pasa-kavalali: \"İbrâhim Paşa'ya Mora'nın tahliyesi için emir gönderdi\" (6 Ağustos 1828'den sonra) · TDV mora: \"1828'in sonbaharında İbrâhim Paşa Mora'dan çekildi\"",
  kesinlik:"İSTASYON yalnız iki uç: Mora (Modon — atlasın 'Mora çıkarması (1825)' kaydındaki çıkış limanı) ve Girit (Kandiye — Emre'nin tarifi 'moradan dışarı girite doğru'). TDV ne limanı ne varış yerini söylüyor (bulunamadı); ok çekilişin YÖNÜNÜ temsil eder. `rota` kıyıyı dolanan ÇİZİM ara noktalarıdır (Tenaron/Matapan burnunun ve Kithira'nın güneyi), iddia değil.",
  yol:[[21.7,36.82],[25.13,35.34]],
  rota:[[21.7,36.82],[22.945,36.045],[25.135,35.415],[25.13,35.34]] },

{ id:"p0075-rus-silistre-tahliye-1836",
  ad:"Rusların Silistre'yi boşaltması (1836)",
  tur:"tahliye", sonuc:"belirsiz", devlet:"rusya",
  f:"1836-01-01", t:"1836-01-01",
  tarih_hassasiyet:"YIL — TDV silistre yalnız yıl verir ('1836'ya kadar'); gün bulunamadı, §4 gereği 1836-01-01 (atlas kronolojisi de aynı: data/olaylar_p0056.js:150)",
  kaynak:"TDV silistre: \"Ruslar 1836'ya kadar Silistre'yi ellerinde tuttular\" · \"Rus askerlerinin şehri boşaltmasının ardından Vali Selim Paşa\"",
  kesinlik:"YALNIZ ÇIKIŞ NOKTASI kaynaklı (Silistre). TDV çekilişin nereye yapıldığını, hangi yolla ve hangi günlerde olduğunu söylemiyor (bulunamadı). Ok Tuna'nın karşı yakasına (kuzeye) ~20 km uzanan ŞEMATİK bir yön işaretidir; varış noktası bir İDDİA DEĞİLDİR. Emre H-0023: 'tahliye oku ile boşaltmayı temsil edelim'.",
  yol:[[27.26,44.117],[27.37,44.30]] },

{ id:"p0075-misir-suriye-cukurova-tahliye-1841",
  ad:"Mısır ordusunun Suriye ve Çukurova'dan çekilişi (1841)",
  tur:"tahliye", sonuc:"belirsiz", devlet:"misir-kavalali",
  f:"1841-02-01", t:"1841-02-25",
  tarih_hassasiyet:"AY — atlas kronolojisi 'Şubat 1841' (data/olaylar_ek4.js:276 ve data/kronoloji_misir.js:215, madde günü 1841-02-25); TDV ibrahim-pasa-kavalali yalnız emri verir (27 Kasım 1840)",
  kaynak:"TDV ibrahim-pasa-kavalali: \"kuvvetlerini geri çekmek üzere İbrâhim Paşa'ya gerekli emirleri verdi\" (27 Kasım 1840) · atlas kronolojisi (TDV suriye'den uyarlanmış, data/kronoloji_misir.js:215): \"İbrâhim Paşa'nın ordusu Sînâ üzerinden Mısır'a döndü\"",
  kesinlik:"İSTASYONLAR (Adana, Belen, Halep, Humus, Şam, Gazze, Kahire) 1831-33 işgal güzergâhının ('Suriye harekâtı (1831-32)' + 'Anadolu ilerleyişi (1832-33)' kayıtları) TERSİDİR; dönüş yolunun KENDİ kaynağı yok — TDV yalnız 'geri çekmek üzere emirler verdi' der. Sıra ve uçlar temsilîdir; günler yalnız AY (Şubat 1841).",
  yol:[[35.32,37.0],[36.2,36.52],[37.16,36.2],[36.71,34.73],[36.29,33.51],[34.47,31.5],[31.24,30.05]] }

];

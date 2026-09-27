// -*- coding: utf-8 -*-
// YERLESIMLER_P77_KAFKAS — NOKTA-KAFKAS-0077 oturumu (Opus), 27 Eylül 2026, YILDIRIM BAYEZIT sevki
//
// 🔴 BU DOSYA HENÜZ girdi_listesi.py'ye VE index.html'e BAĞLI DEĞİLDİR (bağlama koordinatörün
//    işi — tahtadan istendi). Bağlanınca `window.YERLESIMLER_P77_KAFKAS` girdi.oku_dosya
//    tarafından bulunur. Ad alanı dosya adından türetildi (§7 kuralı).
//
// NE İÇİN: PAKET-0077 H-0025 / H-0028 — "Trabzon/Erzincan işgal edilirken öncesindeki topraklar
//   ele geçmiş miydi?" Sıralılık ÖLÇÜLDÜ (denetim/NOKTA-KAFKAS-0077.md §2). Kıyı ve Kelkit-Harşit
//   hattında İŞGALİ TAŞIYAN nokta yoktu: Rize, Bayburt, Kelkit, Aşkale kayıtlarında 1916 Rus dönemi
//   hiç yazılmamış (başkasının dosyaları — düzeltme önerisi rapordadır). Bu dosya YALNIZ atlasta
//   HİÇ OLMAYAN iki noktayı ekler (87 girdi dosyasında ad araması + 3 km taraması: 0 eşleşme).
//
// 🔴 ÖNKOŞUL — kronoloji: bu iki noktanın 1916/1918 kırılmalarının ±30 gün içinde olaylar*.js'te
//   madde YOK (Rize işgali 1916-03-08, Bayburt/Gümüşhane 1916-07-16/19, geri alış 1918-02/03).
//   Bağlanmadan önce o maddeler yazılmazsa Değişmez 2 açık verir. Madde listesi raporda §5.
//
// Rus dönemi zinciri (rusya → rusya-gecici-hukumet → transkafkasya) atlasın Trabzon/Erzincan
// kayıtlarıyla BİREBİR aynı desendir — tutarlılık için; transkafkasya'nın 1917-11-07 başlangıcı
// atlasın kendi tercihidir, bu dosyada yeniden ölçülmedi.

window.YERLESIMLER_P77_KAFKAS = [

// ───────── Çayeli (Mapavri) — Rize'nin 12 km doğusu, Pazar-Rize arası kıyı ─────────
// İşgal 5 Mart 1916: Güzin Çaykıran, "Birinci Dünya Savaşı'nda Trabzon'un İşgali ve Müslüman
//   Mültecilerin Durumu", Askerî Tarih Araştırmaları Dergisi (MSB), 2021, doi 10.46953/askeritarih.814421:
//   "7 Şubat 1916'da Rus birlikleri Batum'dan Arhavi istikametinde taarruza geçmiş ve sırasıyla
//   4 Mart 1916'da Pazar, 5 Mart'ta Çayeli, 8 Mart'ta Rize, 26 Mart'ta da Of'u işgal etmişti."
// Geri alış 9 Mart 1918: T.C. Çayeli Kaymakamlığı, "Çayeli Tarihi" (kurumsal, akademik DEĞİL):
//   "9 Mart 1918'de yeniden Türk idaresine girdi." — akademik teyit bulunamadı.
// 1461: TDV "Rize": "Fâtih Sultan Mehmed, Trabzon'un fethi (865/1461) sırasında Rize'yi de aldı."
//   — hüküm RİZE için; Çayeli'ye komşulukla taşındı. Gün komşudan: Rize (yerlesimler.js) ·
//   TDV "Trabzon" yalnız "Ağustos veya Eylül 1461" der — 08-15 atlasın kendi günüdür.
{ ad:"Çayeli (Mapavri)", tur:"kasaba", lat:41.089, lon:40.729, g:0, k:4, m:"Rize",
  s:[{f:"1281-01-01",t:"1461-08-15",d:"trabzon-rum",kaynak:"TDV rize (1461, Rize için) · gün komşudan: Rize"},
     {f:"1916-03-05",t:"1917-03-15",d:"rusya",kaynak:"Çaykıran 2021 (Askerî Tarih Araştırmaları Dergisi)"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1918-03-09",d:"transkafkasya",kaynak:"geri alış: Çayeli Kaymakamlığı (kurumsal)"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1461-08-15",t:"1916-03-05"},{f:"1918-03-09",t:"1920-04-23"}], v:[] },

// ───────── Gümüşhane — Trabzon-Bayburt yolu; Kelkit vadisi ile kıyı arasındaki boşluk ─────────
// İşgal 19 Temmuz 1916 · geri alış 28 Şubat 1918: TDV "Gümüşhane": "19 Temmuz 1916 - 28 Şubat 1918
//   tarihleri arasına rastlayan Rus işgalinden sonra ..." İşgal günü Çaykıran 2021 ile de örtüşür:
//   "16 Temmuz 1916'da Bayburt'u, 19 Temmuz'da Gümüşhane ve 25 Temmuz'da da Erzincan'ı işgal etmişti."
// 1467 / 1473: TDV "Gümüşhane": "1467'de Gümüşhane yöresi Akkoyunlular tarafından ele geçirildi.
//   Akkoyunlu hâkimiyeti 1473 yılında ... Otlukbeli Savaşı'nda ... son buldu. Bu tarihten sonra şehir
//   kesin olarak Osmanlı hâkimiyetine geçmiş oldu." 1467 yıl hassasiyeti (gün yok → 01-01);
//   1473-08-11 = Otlukbeli Savaşı'nın günü (olayın kendisi), komşu Kelkit de aynı günü taşır.
// 1281-1467: TDV "Ardından Kadı Burhâneddin, Akkoyunlular, Karakoyunlular arasında el değiştirdi;
//   zaman zaman da Trabzon Rum Devleti'nin idaresine girdi." — dönem uçları YOK ⇒ __BOSLUK__ BEYANI
//   (M-4623 kuralı: çıkarım tarih yazılmaz, komşuya itilmez).
{ ad:"Gümüşhane", tur:"sehir", lat:40.460, lon:39.481, g:1, k:2, m:"Trabzon",
  s:[{f:"1281-01-01",t:"1467-01-01",d:"__BOSLUK__",kaynak:"BEYAN (M-4623) — TDV gumushane: 'el değiştirdi', dönem uçları yok"},
     {f:"1467-01-01",t:"1473-08-11",d:"akkoyunlu",kaynak:"TDV gumushane (1467 yıl; 1473 Otlukbeli)"},
     {f:"1916-07-19",t:"1917-03-15",d:"rusya",kaynak:"TDV gumushane · Çaykıran 2021"},
     {f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},
     {f:"1917-11-07",t:"1918-02-28",d:"transkafkasya",kaynak:"TDV gumushane (28 Şubat 1918)"},
     {f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1473-08-11",t:"1916-07-19",y:"savas"},{f:"1918-02-28",t:"1920-04-23"}], v:[] },

];

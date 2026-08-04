// =====================================================================
// ESTONYA — 4 nokta
// PETEK/NOKTA oturumu · 4 Ağustos 2026 (koordinatörün eski kuyruğu)
// =====================================================================
// 🔴 BU DOSYA BAĞLANAMAZ — `estonya` kimliği BOYALAR'da YOK.
//    Engel tek satır ve VERİ KİMLİK 3'ün kuyruğunda; RENK yazınca bağlanır.
//
// ── NİÇİN ÖDÜNÇ VERİLMEDİ ───────────────────────────────────────────
// Zinciri `rusya 1923-10-29`da bitirmek cazipti: ödünç yalnız 5 yıl 8 ay.
// YAZILMADI, çünkü **komşusu bunu yapmıyor.** Canlı `Riga` kaydı
// `1918-11-11`de `letonya`ya geçiyor; `Viipuri` `1917-12-06`da
// `finlandiya`ya geçiyor. Estonya'yı 1923'e kadar Rusya boyasaydım
// haritada 1919'da **Letonya ve Finlandiya bağımsız, arasındaki Estonya
// hâlâ Rus** görünürdü — kullanıcının ekran görüntüsünde ilk yakalayacağı
// şey tam olarak budur.
// 📌 Ödüncün ölçüsü süre değil, KOMŞUSUYLA ÇELİŞİP ÇELİŞMEDİĞİDİR.
//
// ── ZİNCİR — canlı `Riga` kaydından türetildi ───────────────────────
// Riga:  almanya →1561-11-28 lehistan →1621-09-15 isvec →1721-08-30
//        rusya →1918-11-11 letonya
// Kuzey Estonya (Tallinn · Narva) 1561'de doğrudan İSVEÇ'e tâbi oldu,
// Lehistan safhasını YAŞAMADI; güney Estonya (Tartu · Pärnu) Livonya
// Dukalığı içinde Lehistan'da kaldı ve İsveç'e sonra geçti. İki zincir
// bu yüzden AYRI yazıldı — dördünü tek zincire bağlamak kolay olurdu ama
// 60 yıllık bir taraf farkını silerdi.
//
// ⚠️ İKİ TARİH REPO TUTARLILIĞI İÇİN SEÇİLDİ, KAYNAKTAN DEĞİL:
//   `1561-11-28`  Riga'nın kullandığı gün (Vilnius birliği). Kuzey
//                 Estonya'nın İsveç'e tâbiiyeti aslında 1561 HAZİRAN'ında.
//                 Aynı yıl içinde kaldığı ve `s:`→`s:` olduğu için harita
//                 farkı YOK, ama yanlış olduğunu bilerek yazıyorum.
//   `1621-09-15`  Riga'nın düşüş günü. Tartu 1625'te, Pärnu 1617'de düştü.
//                 Riga'nın günü seçildi çünkü ÜÇÜ DE aynı savaşın parçası
//                 ve ayrı günler üç ayrı kırılma isterdi — hepsi `s:` olduğu
//                 için kırılma doğmuyor, ama tarih yine de yaklaşık.
//   🔴 İkisi de TDV'ye BASMIYOR (§4: Baltık, TDV'nin kapsamadığı coğrafya).
//
// `1918-02-24` Estonya bağımsızlık BEYANI — Letonya'nın `1918-11-11`i de
// beyan günüdür, yani ölçüt aynı. Tartu barışı (1920-02-02) tanıma günüdür
// ve seçilmedi; seçseydim Letonya beyanla, Estonya tanımayla girerdi.
//
// ✅ Dört kaydın da bütün geçişleri `s:`→`s:` ⇒ Değişmez 2 borcu SIFIR.
// ── ÖN KOŞULLAR ─────────────────────────────────────────────────────
// maske 4/4 · en yakın çift 82,2 km (Tallinn ↔ Helsinki, deniz aşırı)
// renk  almanya ✓ lehistan ✓ isvec ✓ rusya ✓ · **estonya ✗ EKSİK**
// =====================================================================

window.YERLESIMLER_EK11 = [

// ── KUZEY ESTONYA — Lehistan safhası YOK ────────────────────────────
{ ad:"Tallinn (Reval)", tur:"liman", lat:59.4370, lon:24.7540, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-02-24",d:"rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

// ⚠️ Narva 1558-1581 arasında RUS elindeydi (Livonya Savaşı) ve bu dönem
//    YAZILMADI: 23 yıllık bir Rus safhası, aynı noktanın 1561 ve 1581'de
//    iki kez taraf değiştirmesi demek. Kaynağı TDV'de olmayan, sınırı
//    haritada 40 km'lik bir noktada görünmeyecek bir ayrıntı için iki
//    fazladan geçiş yazmadım — ama atlandığı burada YAZILI.
{ ad:"Narva", tur:"kale", lat:59.3770, lon:28.1900, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-02-24",d:"rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

// ── GÜNEY ESTONYA — Livonya Dukalığı, Lehistan safhası VAR ──────────
{ ad:"Tartu (Dorpat)", tur:"sehir", lat:58.3780, lon:26.7290, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-02-24",d:"rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

{ ad:"Pärnu", tur:"liman", lat:58.3860, lon:24.4970, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1561-11-28",d:"almanya"},{f:"1561-11-28",t:"1621-09-15",d:"lehistan"},{f:"1621-09-15",t:"1721-08-30",d:"isvec"},{f:"1721-08-30",t:"1918-02-24",d:"rusya"},{f:"1918-02-24",t:"1923-10-29",d:"estonya"}] },

];

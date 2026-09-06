// -*- coding: utf-8 -*-
// YER_YAMA_SOHUM — BALKAN-DOĞU AVRUPA oturumu, 7 Eylül 2026
// Emre'nin sevki: «ikisini de ölç, sonra Sohum'a geç.»
//
// ═══════════ NİÇİN AÇIK KALMIŞTI ═══════════
// `rusya` hayaletinin altı noktasından beşi yazıldı; Sohum YAZILMADI çünkü
// KOMŞU KANITI BÖLÜNÜYORDU — en yakın üç komşusu üç farklı zincir kullanıyor
// (Kutaisi `transkafkasya`lı · Batum boşluklu · Tiflis düz). Bir zincir
// seçmek üç konvansiyondan birini KAYNAKSIZ tercih etmek olurdu.
//
// ═══════════ 🟢 VE KAYNAK BULUNDU — `sohum` SLUG'I CANLI ═══════════
// TDV `sohum` (HTTP 200, 17.661 kar.), AYNEN:
//   «1917 Rus ihtilâli esnasında Abhazya, Rus sivil savaşı içinde yok oldu.»
//   «Kızılordu ve yerel güçler şehri **4 Mart 1921**'de ele geçirip Sovyet
//    hükümranlığını ilân ettiler.»
//   «31 Mart 1921'de Abhazya Sovyet Sosyalist Cumhuriyeti teşkil edildi.»
//   «Sohum … 1921-1931 arasında Gürcistan Sovyet Sosyalist Cumhuriyeti'ne
//    bağlı Abhaz Sovyet Sosyalist Cumhuriyeti'nin başşehri oldu.»
//
// ⇒ SOVYET BAŞLANGICI ARTIK KAYNAKLI: `1921-03-04`, ŞEHRE ÖZGÜ.
//   Ve bu, atlasın kendi yöntemiyle uyumlu — Batum kendi gününü
//   TDV `batum`dan alıyor («16 Mart 1921 … Moskova Antlaşması»), Kutaisi
//   kendi gününü. Her şehir kendi kaynağının gününü taşıyor.
//
// ═══════════ 🟡 AMA ORTA ÜÇ YIL KAYNAKSIZ — VE BUNU YAZIYORUM ═══════════
// TDV `sohum` 1917-1921 arası için bir SAHİP ADLANDIRMIYOR; yalnız
// «Rus sivil savaşı içinde yok oldu» diyor. O aralık KOMŞU KONVANSİYONUNDAN
// alındı (Kutaisi'nin zinciri, birebir):
//   `transkafkasya 1917-11-07 → 1918-05-26`
//   `gurcistan-demokratik-cumhuriyeti 1918-05-26 → 1921-03-04`
// 🔴 Bu iki dönem **KAYNAKLI DEĞİL, KONVANSİYON**. Boş bırakmak
//   `Değişmez 1`i 3,3 yıl açardı (`OGRENILENLER §72`: model "kimsenin
//   değildi" diyemiyor). Konvansiyonu seçtim ve KONVANSİYON OLDUĞUNU
//   yazdım — bir sonraki oturum onu kaynaklı sanmasın.
// 🟢 Ve destekleyici: TDV `gurcistan` Gürcistan'ın 26 Mayıs 1918'de
//   bağımsızlığını ilân ettiğini ve Şubat 1921'de Sovyet işgalini veriyor —
//   yani ARALIK doğru, Abhazya'nın o yapıya DAHİL olduğu ise TDV'de YAZMIYOR.
//
// ═══════════ SINAV ═══════════
//   kapsam daralması 0 · YENİ sahipsizlik 0
//   KÜNYE PENCERESİ: altı dönemin ALTISI da künyesinin İÇİNDE
//     transkafkasya      1917-11-07→1918-05-26  (künye …→1918-05-28) 🟢
//     gurcistan-demokr.  1918-05-26→1921-03-04  (künye …→1921-03-16) 🟢
//
// ═══════════ 🔴 ÖN KOŞUL — `1921-03-04` ÇEKİRDEKTE MADDESİZ ═══════════
//   veride uç olarak kullanım: **0** (yeni bir kırılma günü)
//   çekirdekte ±30g: 1 madde, 28 gün uzakta, «İkinci İnönü Muharebesi»
//   ⇒ KONU ALAKASIZ. Madde önerisi: `denetim/KRONOLOJI-SOHUM-0907.json`
//   **O madde inmeden bu yama `Değişmez 2`yi açar.**
// 🟡 Ve ölçerken bir şey daha çıktı: `1921-03-16` (Moskova Antlaşması)
//   veride DÖRT dönemin ucu (Batum · Kutaisi) ama çekirdekte onu anlatan
//   madde de YOK (en yakın 16 gün, alakasız). Ayrı bir kalem — bu yamanın
//   konusu değil, ama kayda geçiyor.
//
// 🔴 Kayıt elle yazılmadı, `girdi.yukle` ile canlı veriden üretildi;
//    `d:` ve `v:` alanlarına DOKUNULMADI.

window.YER_YAMA_SOHUM = [
  { ad: "Sohum", s: [{"f": "1281-01-01", "t": "1578-08-09", "d": "gurcistan"}, {"f": "1810-07-11", "t": "1917-03-15", "d": "rusya"}, {"f": "1917-03-15", "t": "1917-11-07", "d": "rusya-gecici-hukumet"}, {"f": "1917-11-07", "t": "1918-05-26", "d": "transkafkasya"}, {"f": "1918-05-26", "t": "1921-03-04", "d": "gurcistan-demokratik-cumhuriyeti"}, {"f": "1921-03-04", "t": "1923-10-29", "d": "sovyet-rusya"}] }
];

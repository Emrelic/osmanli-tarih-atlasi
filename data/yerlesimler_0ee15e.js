// =====================================================================
// NOKTA AMERİKA — devam turu (16 Ağustos 2026)
// İŞÇİ oturum: NOKTA-AMERIKA · görev tahta M-0336 / M-0345
// Şartname: oturumlar/NOKTA-AMERIKA.md
// İlerleme günlüğü: oturumlar/NOKTA-AMERIKA-ILERLEME.md
//
// ⚠️ DOSYA ADI scratchpad UUID'in ilk 6 hanesine dayanıyor: 0ee15e49-…
//   ⇒ `yerlesimler_0ee15e.js`, değişken `window.YERLESIMLER_0EE15E`.
//
// ⚠️ Dosyayı girdi.py'ye BEN BAĞLAMIYORUM — koordinatör bağlar (şartname ④).
//
// ═══════════ YAZIM ÖNCESİ ÖLÇÜM ═══════════
// `data/yerlesimler_amerika.js` ZATEN 134 kayıtla girdi.py'ye BAĞLI (13-14
// Ağustos oturumu, oturumlar/NOKTA-AMERIKA-ILERLEME.md'de tam rapor var).
// O dosyaya DOKUNMUYORUM (§④ "SENİN DEĞİL"), yalnız GÖRÜLEN BOŞLUKLARI
// kendi dosyama ekliyorum.
//
// 🔴 BULUNAN BOŞLUK — Buenos Aires: mevcut dosyada Río de la Plata beşlisi
//   (Córdoba/Santa Fe/Corrientes/Mendoza/Asunción) var ama ŞEHRİN KENDİSİ
//   yok — 13 Ağustos'un dört-ekip birleştirmesinde düşmüş görünüyor (dosya
//   başlığı "3 mükerrer ÇÖZÜLDÜ" diyor, Buenos Aires bu süreçte kaybolmuş
//   olmalı — kaynak: `arjantin-cumhuriyeti` künye taslağının kendi
//   `baskent:"Buenos Aires"` alanı, ILERLEME.md §③). Tekrar mükerrer
//   üretmemek için: `data/yerlesimler_amerika.js` içinde "Buenos Aires"
//   veya "Plata" ARANDI (grep), yalnız yorum satırlarında geçiyor, gerçek
//   kayıt YOK — doğrulandı.
//
// ═══════════ KAYNAK ═══════════
// TDV İslâm Ansiklopedisi, "ARJANTİN" md., II. TARİH bölümü (Müellif: Rıza
// Kurtuluş) — https://islamansiklopedisi.org.tr/arjantin (canlı, içerik
// okundu, tam metin). Alıntı: "1536'da ... İspanyol Krallığı'na mensup
// denizci Pedro de Mendoza günümüzde Buenos Aires'in bulunduğu yerde ...
// bir İspanyol kolonisi kurdu ... Yerlilerin direnciyle karşılaşıp bir
// süre geri çekilen İspanyollar daha sonra tekrar hamle yaparak 1580'de
// Buenos Aires'i yeniden inşa ettiler." ⇒ 1536 kuruluşu TERK EDİLDİ (kalıcı
// yerleşim değil), `kur:` bu yüzden 1580 — projenin "kışlak/ostrog" ayrımıyla
// aynı mantık (CLAUDE.md §11: geçici/terk edilen ilk teşebbüs ≠ kalıcı
// kuruluş). TDV yalnız yıl veriyor, gün belirtmiyor ⇒ YYYY-01-01.
//
// `d:` zinciri MEVCUT beş Río de la Plata kaydıyla (Córdoba/Santa Fe/
// Corrientes/Mendoza) BİREBİR AYNI kalıp: "ispanya" → 1810-05-25 (Mayıs
// Devrimi, TDV: "1816'da İspanyol sömürgeciliğine karşı ... Buenos
// Aires'te 9 Temmuz 1816'da ... bağımsız devlet ilân edildi" — ama
// kırılma noktası olarak dosyanın geri kalanı 1810-05-25'i (Cabildo
// Abierto, İspanyol valiliğinin fiilen bittiği gün) kullanıyor, tutarlılık
// için AYNI tarih alındı, kararı değiştirmedim) → "arjantin-cumhuriyeti".
// TDV'nin kendi metni resmî "Arjantin Cumhuriyeti" adının 1862'de
// (Bartolomé Mitre) benimsendiğini yazıyor — 1810-1862 arası veri modelinde
// TEK künyeyle basitleştirilmiş durumda, bu YENİ bir karar değil, var olan
// beş kayıtla aynı basitleştirmeyi sürdürmek. Künyenin kendisi (`arjantin-
// cumhuriyeti`) HENÜZ devletler.js'te YOK — bu M-0368/M-0379'da bildirildi,
// taslağı ILERLEME.md §③'te hazır.
//
// 3 KM KURALI: en yakın kayıt Colonia del Sacramento (-34.4738,-57.8412,
// yerlesimler_amerika.js'te), aradaki mesafe ~47 km — ihlal yok.

window.YERLESIMLER_0EE15E = [

{ ad:"Buenos Aires", tur:"sehir", lat:-34.6037, lon:-58.3816, g:2, k:1, kur:"1580-01-01",
  s:[{f:"1580-01-01",t:"1810-05-25",d:"ispanya"},
     {f:"1810-05-25",t:"1923-10-29",d:"arjantin-cumhuriyeti"}] },
// kaynak: TDV İslâm Ansiklopedisi "arjantin" md., II. TARİH (Rıza Kurtuluş) —
//         1536 Pedro de Mendoza kuruluşu yerli direnciyle terk edildi, 1580'de
//         yeniden inşa (kur: bu yüzden 1580). 1810-05-25 Mayıs Devrimi —
//         mevcut Río de la Plata kayıtlarıyla (Córdoba/Santa Fe/Corrientes/
//         Mendoza) AYNI kırılma tarihi, tutarlılık için.
// k gerekçesi: 1776'dan Río de la Plata Genel Valiliği'nin, 1810'dan
//         Arjantin'in başkenti — bölgenin en yüksek kademeli şehri, k:1
//         (Lima/Havana ile aynı tier).

];

// -*- coding: utf-8 -*-
// YERLESIMLER_SINIR_DOGU -- HAZIR KITA OPUS 85, SINIR YERLEŞİMİ (oturumlar/SINIR-YERLESIMI.md)
// KOL: DOĞU — Ermenistan · Gürcistan (SSCB) + İran (Kaçar) sınırları.
//
// 🔴🔴 DİZİ KASTEN BOŞ. Sebep varsayım değil ÖLÇÜM — üç kayıt yazmıştım,
// gerçek sınır poligonundan sapmayı ölçtüm ve ÜÇÜ DE SAPMAYI BÜYÜTTÜ.
// Geri almadım (M-1760 ②): kayıtlar aşağıda tam metniyle duruyor, ölçüm
// hangisinin ne zaman açılacağını da söylüyor.
//
// ═══ ÖLÇÜM — vekil değil, gerçek sınır çizgisi ═══
// veri-kaynak/ne_10m_admin_0_countries.geojson · TUR sınırı ~2 km'de bir
// örneklendi · komşu poligona <1,5 km olanlar KARA sınırı sayıldı
//   543 örnek ≈ 1086 km hat   (GEO 290 · ARM 300 · IRN 486 · AZE 10 km)
// Sapma = |d(örnek,en yakın YABANCI) − d(örnek,en yakın OSMANLI)| / 2
// ⚠️ Etiket: "BUGÜNKÜ sınıra sapma" — 1923 sınırına DEĞİL (M-1760 uyarısı).
//    Bu kolda ikisi büyük ölçüde ÖRTÜŞÜYOR (1921 Kars Antlaşması ve 1913
//    İstanbul Protokolü sınırları bugün de yürürlükte), Hatay/Musul cinsinden
//    bir kayma YOK — ama örtüşme VARSAYILMADI, etiket yine de ayrı tutuldu.
//
//   TABAN                          ortanca 6,37 km · en kötü 22,9 · ≤5km %35
//   komşuya göre:  GEO 4,30 (en kötü  9,7 · ≤5km %63)   ← ZATEN İYİ
//                  ARM 7,90 (en kötü 20,1 · ≤5km %22)
//                  IRN 8,40 (en kötü 19,9 · ≤5km %27)
//                  AZE 21,9 (en kötü 22,9 · ≤5km  %0)   ← EN KÖTÜ KESİM
//   ⇒ Koordinatörün vekili (çift mesafesinin yarısı) bu kolda ~35-75 km
//     sapma öngörüyordu; gerçek ortanca 6,37. İŞ SANILANDAN ÇOK AZ.
//
// ═══ 🔴 VE ASIL BULGU: TEK TARAFLI EKLEME SAPMAYI BÜYÜTÜR ═══
// Kural ② ("çift olacak") bugüne kadar bir GEREKÇEYDİ; artık SAYISI var:
//   +Çıldır tek                6,37 → 6,83   (≤5km %35 → %33)   KÖTÜLEŞTİ
//   +Nehrî tek                 6,37 → 7,01   (≤5km %35 → %33)   KÖTÜLEŞTİ
//   +üçü birden                6,37 → 7,29   (≤5km %35 → %31)   KÖTÜLEŞTİ
// Sebep: sapma |dB−dA|/2. Sınıra YAKIN bir Osmanlı noktası eklemek dA'yı
// küçültür; karşı yakada eşi yoksa dB aynı kalır ⇒ bisektör yabancı yakaya
// İTİLİR. Yani tek taraflı nokta sınırı çizmez, "o devleti BÜYÜTÜR" —
// şartnamedeki cümlenin birebir ölçülmüş hâli.
//
// ═══ 🔴 İKİNCİ BULGU: ÇİFT OLMAK YETMİYOR, SİMETRİK OLMALI ═══
//   +Çıldır ↔ +Kartsakhi       6,37 → 6,18   ≤5km %35 → %38    🟢 İYİLEŞTİ
//   +Aralık ↔ +Sardarabad      6,37 → 5,67   ≤5km %35 → %43    🟢 EN İYİSİ
//                              en kötü 22,9 → 18,8
//   +Nehrî  ↔ +Uşnu            6,37 → 6,83   ≤5km %35 → %34    🔴 ÇİFT AMA KÖTÜ
// Nehrî sınıra ~20 km, Uşnu ~30 km ⇒ çift ama SİMETRİK DEĞİL. Ve Urmiye'den
// daha sınıra yakın gerçek bir İran yerleşimi YOK (Zagros sırtı yerleşimsiz).
// ⇒ Bu kesim GERÇEK YERLEŞİMLE İYİLEŞTİRİLEMEZ. Uydurma köy yazılmadı (kural ①).
//   HEPSİ: 3 simetrik çift → 5,72 · +4 Gürcü/Ermeni nokta → 5,32 (≤5km %48)
//
// ═══ 🔴 TEK ENGEL: KİMLİK HÜKMÜ (M-1753, cevap bekliyor) ═══
// Ölçüm iyileştiren çiftleri gösterdi ama HER BİRİNİN yabancı yakası
// Ermenistan/Gürcistan ve o yaka bir hükme takılı:
//   devletler.js  rusya 1547-01-16 → 1917-03-15 · sovyet-rusya 1917-11-07 → 1923-10-29
//   veri          `s:"rusya"` 1917-03-15'ten SONRA süren 344 kayıt, hepsi
//                 t:1923-10-29 ⇒ fazlalık 2419 gün = 6,6 YIL (koridorumda 27)
//   `sovyet-rusya` yazarsam komşusu Gümrü/Ahıska `rusya` olduğu için
//   ERMENİSTAN'IN İÇİNDEN SAHTE SINIR geçer; `rusya` yazarsam hayalete eklerim.
// ⇒ Hüküm gelir gelmez aşağıdaki üç çift AYNI GÜN yazılır; ölçüm hazır.

window.YERLESIMLER_SINIR_DOGU = [];

// ════════════════════════════════════════════════════════════════════
// HÜKÜM GELİNCE AÇILACAK — üçü de ölçülmüş, kaynaklı, gün-güvenli.
// Değişmez 2 (tavan 0) sınavı: kullanılan 8 kırılma gününün 8'i de veride
// ZATEN kırılma ve külliyatta 0 GÜN sapmayla maddeli (1514-09-06 · 1548-08-25
// · 1578-08-09 · 1585-09-25 · 1603-10-21 · 1878-03-03 · 1921-10-13).
// 3 km mükerrer taraması: Çıldır 25,5 · Nehrî 37,5 · Uşnu 56,1 km — temiz.
// ════════════════════════════════════════════════════════════════════
//
// ── ÇİFT A (ölçüm: 6,37 → 6,18 🟢) — Çıldır ↔ Kartsakhi ──
// {ad:"Çıldır", tur:"kasaba", lat:41.1300, lon:43.1300, g:0, k:4, m:null,
//  sinir:true,
//  s:[{f:"1281-01-01", t:"1578-08-09", d:"gurcistan"},
//     {f:"1878-03-03", t:"1921-10-13", d:"<KİMLİK HÜKMÜ>"}],
//  d:[{f:"1578-08-09", t:"1878-03-03"}, {f:"1921-10-13", t:"1923-10-29"}],
//  kaynak:"TDV `cildir-eyaleti` (HTTP 200, GÖVDE OKUNDU, 15.721 karakter):
//    '1551'de ise Erzurum Beylerbeyi İskender Paşa Ardanuç ve Ardahan
//    yöresini alarak Ahılkelek ve Ahıska civarına kadar ilerledi... Böylece
//    Atabeglik toprakları Çıldır bölgesine kadar Osmanlı' ve '1578'de
//    yeniden başlayan Osmanlı-Safevî mücadelesi, Çıldır ve yöresinin
//    tamamen Osmanlılar'ın eline geçmesine yol açtı'.
//    ⚠️ TDV KOMŞU KAYDI ÇÜRÜTTÜ: Hanak/Ardahan/Posof 1551-01-01 kullanıyor
//    ve külliyattaki madde de 'Ardahan ve Çıldır havzasının alınması' diyor
//    — ama TDV 1551'i 'Çıldır BÖLGESİNE KADAR ilerleme', ŞEHRİN KENDİSİNİ
//    1578 diye veriyor. CLAUDE.md §4: çelişirse TDV esastır ⇒ 1578-08-09.
//    Dar slug `cildir` ÖLÜ (302); §4 'dar slug tutmazsa kapsayıcı maddeyi
//    dene' uygulandı.",
//  neden:"sınır çifti: Kartsakhi (Gürcistan yakası, aşağıda) — 1921 Kars
//    Antlaşması sınırı Çıldır (Hozapin) gölü havzasından, ikisinin
//    ARASINDAN geçer. ÖLÇÜLDÜ: ikisi birlikte ortanca sapmayı 6,37 → 6,18
//    km'ye indirir; Çıldır TEK BAŞINA 6,83'e ÇIKARIR."}
//
// {ad:"Kartsakhi (Hozapin)", tur:"koy", lat:41.2378, lon:43.2222, g:0, k:4,
//  m:null, sinir:true, s:[ ... <KİMLİK HÜKMÜ> ... ],
//  kaynak:"bulunamadı — TDV bu taneciği kapsamıyor; koordinat DOĞRULANMASI
//    gerekiyor (M-1758'in coğrafî referans yetkisi kapsamında).",
//  neden:"sınır çifti: Çıldır ile 15,6 km, sınır aralarından geçer."}
//
// ── ÇİFT B (ölçüm: 6,37 → 5,67 🟢🟢 EN İYİSİ) — Aralık ↔ Sardarabad ──
// Kolun EN KÖTÜ kesimi: Iğdır–Aralık–Dilucu koridoru (Türkiye·Nahçıvan·
// Ermenistan·İran dörtlü kavşağı). 543 örneğin en kötü 8'i burada, hepsi
// 20-22,9 km ve hepsinde en yakın Osmanlı noktası 62 km ötedeki Doğubayazıt.
// Bu çift en kötüyü 22,9 → 18,8 km'ye indirir.
//
// ── ÇİFT C — Nehrî (Şemdinli) ↔ Uşnu 🔴 YAZILMAYACAK ──
// Ölçüldü: çift olmasına rağmen 6,37 → 6,83 (KÖTÜLEŞTİRİR), çünkü simetrik
// değil (20 km ↔ 30 km) ve Urmiye'den sınıra daha yakın gerçek bir İran
// yerleşimi yok. Kaynak araştırması TAMAMLANDI ve sonucu şudur:
//   `semdinli`·`nehri`·`semdinan`·`ubeydullah` DÖRDÜ DE ÖLÜ (HTTP 302);
//   `hakkari` CANLI (200) ama gövdesinde (17.020 karakter) 'Şemdin'·'Nehrî'·
//   'Ubeydullah' HİÇ GEÇMİYOR. `usnu`/`usnuye` ÖLÜ; `urmiye` CANLI (200)
//   ama gövdesinde (12.919 karakter) 'Uşnu' HİÇ GEÇMİYOR.
//   ⇒ §4 TANECİKLİK boşluğu, ikisi de `bulunamadı`. Bu bir SONUÇTUR.
// ⇒ Türkiye-İran sınırının güney kesimi GERÇEK YERLEŞİMLE İYİLEŞTİRİLEMEZ.
//   Kaydedildi ki bir sonraki tur "niçin boş" diye yeniden aramasın.

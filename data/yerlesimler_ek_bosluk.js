// data/yerlesimler_ek_bosluk.js — YAMA KURTARMA'nın devrettiği boşluklar
// ---------------------------------------------------------------------------
// 28 Ağustos 2026 · ORHANGAZİ (koordinatör — `yerlesimler*.js` bende)
//
// NİÇİN VAR: `YAMA KURTARMA` oturumu üç uygulanamaz yama dosyasını kurtarırken
// `yer_yama_owtrad.js` içinde beş "hazır" kalem buldu ve ölçtü — beşi de
// lat/lon taşıyordu, yani YENİ NOKTA öneriyorlardı, var olanı düzeltmiyorlardı.
// `_yer_ara.py` ile beşi de sınandı: BEŞİ DE VERİDE YOK.
// ⇒ `yer_yama_*` VAR OLANI düzeltir; YENİ NOKTA `yerlesimler_*`e yazılır ve o
//   dosyalar koordinatörde. Devredildi, burada karşılanıyor.
//
// 🔴 VE BİR AD TUZAĞI — beşincisi sessizce YANLIŞ kayda çarpardı:
//   `Foça` adıyla bir yama yazılsaydı veride VAR OLAN kayda çarpardı:
//        Foça (Foča)   43,506 / 18,779   → BOSNA
//   önerilen ise İzmir Foçası (38,671 / 26,757) — aynı ad, 1.200 km fark.
//   ⇒ "ad: birebir olacak" şartı BURADA YETMEZ: ad birebir eşleşir ve yanlış
//     kayda eşleşir. Ada ek olarak KOORDİNAT da sınanmalı.
//   Bu ders `ORTAK-PAKET-KURALLARI.md §4.5`e eklendi.
//
// ⚠️ BU DOSYADA YALNIZ KAYNAĞI DOĞRULANMIŞ İKİ NOKTA VAR.
//   Öteki üçü (Sibin/Sibiu · Debre · Foça-İzmir) araştırma bekliyor:
//     · `sibin` TDV'de ÖLÜ slug (HTTP 302). Sibiu Erdel Saksonlarının şehri;
//       Osmanlı doğrudan idaresine hiç girmedi, Erdel prensliği (tâbi
//       1541-1699) içindeydi ⇒ `v:` mi `s:"erdel"` mi olacağı ölçülmeli.
//     · Debre (Dibra) ve Foça (İzmir) TDV'de canlı (200) ama gövdeleri
//       okunmadı. "Ölçmediğini ölçtüm diye yazma" — yazılmadı.
// ---------------------------------------------------------------------------
window.YERLESIMLER_EK_BOSLUK = [

// ── BİRECİK ────────────────────────────────────────────────────────────────
// TDV `birecik` (HTTP 200, gövdesi okundu): "Birecik Yavuz Sultan Selim'in
// Mısır seferi sırasında Mercidâbık Savaşı'ndan sonra Osmanlı idaresine girdi
// (1516) ve Halep eyaletine bağlı Urfa sancağının merkezi olarak
// teşkilâtlandırıldı." Öncesi: "Suriye Memlükleri'nin idaresine girdi",
// daha öncesinde Moğol istilâsı ve Karakoyunlu dönemi.
// 🔴 GÜN SEÇİMİ: Mercidâbık 1516-08-24 ve o gün külliyatta ZATEN MADDELİ
//    (ölçüldü: 1 madde) ⇒ Değişmez 2 açılmıyor, yeni gün yaratılmadı.
{ad:"Birecik", tur:"sehir", lat:37.025, lon:37.977, g:1, k:3,
 m:"Urfa",
 s:[{f:"1281-01-01", t:"1516-08-24", d:"memluk"}],
 d:[{f:"1516-08-24", t:"1923-10-29"}],
 kaynak:"TDV `birecik` — gövdesi okundu, 2026-08-28"},

// ── PRİZREN ────────────────────────────────────────────────────────────────
// 🔴 BU NOKTANIN YOKLUĞU ÖLÇÜLDÜ VE CİDDİYDİ: `_yer_ara.py --kutu
//    41.9 20.4 42.5 21.1` → **0 nokta**. Yani Kosova'nın ikinci şehri ve
//    yüzyıllarca sancak merkezi olan Prizren'in çevresi `§2` emilmesiyle
//    komşu peteklere dağılıyordu.
// TDV `prizren` (HTTP 200, gövdesi okundu): "Kosova'nın ikinci önemli şehri
// olup Osmanlı döneminde (1455-1912) Sancak merkezi idi." Ve tam günüyle:
// "4 Receb 859'da (20 Haziran 1455) Fâtih Sultan Mehmed kumandasındaki
// Osmanlı ordusu Vılkoğlu ile (Curac Brankoviç) savaştan sonra Prizren'i ele
// geçirdi. Fetihten sonra bir sancağın merkezi yapıldı."
// Öncesi: "Sırp Krallığı'na dahil oldu ve 859'da (1455) Osmanlı fethine kadar
// Sırbistan'ın bir parçası olarak kaldı."
// 🔴 GÜN: 1455-06-20 külliyatta YOKTU (ölçüldü: 0 madde) ⇒ maddesi de yazıldı
//    (`data/olaylar_ek18.js`). Nokta ve maddesi AYNI turda indi; biri
//    ötekisiz yazılsaydı Değişmez 2 açılırdı.
// Sonu: Balkan Savaşı, 1912-11-03 (o gün külliyatta MADDELİ — ölçüldü).
{ad:"Prizren", tur:"sehir", lat:42.214, lon:20.741, g:1, k:2,
 m:"Üsküb",
 s:[{f:"1281-01-01", t:"1455-06-20", d:"sirbistan"},
    {f:"1912-11-03", t:"1918-12-01", d:"sirbistan-kralligi"},
    {f:"1918-12-01", t:"1923-10-29", d:"yugoslavya"}],
 d:[{f:"1455-06-20", t:"1912-11-03"}],
 kaynak:"TDV `prizren` — gövdesi okundu, 2026-08-28"},

];

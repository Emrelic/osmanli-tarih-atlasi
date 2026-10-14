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
{ad:"Birecik", kd:[{f:"1281-01-01",t:"1516-08-24",k:0,m:null},{f:"1516-08-24",t:"1923-10-29",k:3,m:"Urfa"}], tur:"sehir", lat:37.025, lon:37.977, g:1, k:3,
 m:"Urfa",
 s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
 d:[{f:"1516-08-24",t:"1920-04-23"}],
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
    {f:"1913-05-30",t:"1918-12-01",d:"sirbistan-kralligi"},
    {f:"1918-12-01", t:"1945-11-29", d:"yugoslavya"},{f:"1945-11-29",t:"1992-04-27",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-04-27",t:"1999-06-10",d:"yugoslavya-federal-cumhuriyeti",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1999-06-10",t:"2000-12-31",d:"unmik-kosova",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
 d:[{f:"1455-06-20", t:"1913-05-30"}], isg:[{f:"1912-11-03",t:"1913-05-30",d:"sirbistan-kralligi",kaynak:"Sırp işgali (de facto) · f TEYİT EDİLDİ: Özkan, Tarihin Peşinde 15, s.12 ve s.16: '3 Kasım’da Prizren Sırplara teslim olmuştur' — ÇELİŞKİ BEYANI: Ahbab s.22 ve dergipark 1519426 31 Ekim der (3 gün; bu oturumda yeniden okunmadı) (KUTU-H6-1015) · bitiş 1913-05-30: Londra Antlaşması — Osmanlı Devleti Midye-Enez hattının batısındaki toprakları terk etti (Emre kararı 13 Ekim 2026; atlas Dimetoka/Çirmen/Gümülcine için bu günü zaten kullanıyor) · hüküm SINIR-BERLIN-0076 B2, SIRADA-B-1012 0076/H-0145; TDV londra-antlasmasi günü bu oturumda çekilemedi (bulunamadı) · de jure Osmanlı toprağı Londra'ya dek d: ile kesintisizdir"}],
 kaynak:"TDV `prizren` — gövdesi okundu, 2026-08-28"},

];

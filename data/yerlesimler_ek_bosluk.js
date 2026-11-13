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
 s:[{f:"1277-01-01",t:"1516-08-24",d:"memluk",kaynak:"T5-1000-B-1016: f 1281-01-01 → 1277-01-01 geri çekildi — TDV birecik: 'Bunlardan 1277-1279 tarihli olanlar Memlük Sultanı Berke Han, 1482-1483 tarihliler ise Sultan Kayıtbay zamanına aittir.' · TANIK: kaledeki Memlük kitâbesi (Sultan Berke/Baraka Han, 1277-1279). Edinim değil. · T5-1000-B-1016"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin açılış kırılmasını anlatan kronoloji maddesi «Urfa'nın kurtuluşu — Fransız garnizonu şehri terk etti» (1920-04-11, yer kolu) kaynağı — TDV İslâm Ansiklopedisi: sanliurfa · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1923-10-29",t:"2000-12-31",d:"turkiye-cumhuriyeti",kaynak:"TDV Islam Ansiklopedisi 'Turkiye Cumhuriyeti'; Cumhuriyet ilani 1923-10-29"}],
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
 s:[{f:"1281-01-01",t:"1402-01-01",d:"sirbistan-nemanjic"},{f:"1402-01-01",t:"1455-06-20",d:"sirp-despotlugu",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Prizren'in fethi — Kosova'da Osmanlı sancak merkezi» (1455-06-20, yer kolu) kaynağı — TDV İslâm Ansiklopedisi: prizren · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},
    {f:"1913-05-30",t:"1918-12-01",d:"sirbistan-kralligi",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin kapanış kırılmasını anlatan kronoloji maddesi «Sırp-Hırvat-Sloven Krallığı ile Büyük Romanya'nın kuruluşu — aynı gün, iki devlet» (1918-12-01, taraf kolu) kaynağı — TDV İslâm Ansiklopedisi: yugoslavya · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},
    {f:"1918-12-01", t:"1945-11-29", d:"yugoslavya",kaynak:"DEVRALMA (DUNYA-1102 D adımı (c), 3 Kasım 2026): dönemin açılış kırılmasını anlatan kronoloji maddesi «Sırp-Hırvat-Sloven Krallığı ile Büyük Romanya'nın kuruluşu — aynı gün, iki devlet» (1918-12-01, taraf kolu) kaynağı — TDV İslâm Ansiklopedisi: yugoslavya · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil"},{f:"1945-11-29",t:"1992-04-27",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-04-27",t:"1999-06-10",d:"yugoslavya-federal-cumhuriyeti",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye yugoslavya-federal-cumhuriyeti f ucunun kaynağı — https://english.defensie.nl/topics/historical-missions/mission-overview/1992/united-nations-protection-force-unprofor-and-the-united-nations-peace-forces-unpf ; t = 2003-02-04 bu turda ikinci kaynakla araştırılmadı (dizin ufku 2000 dışı) · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1999-06-10",t:"2000-12-31",d:"unmik-kosova",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye unmik-kosova f ucunun kaynağı — https://digitallibrary.un.org/record/702975?ln=en ; BM GK 1244 (1999) · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
 d:[{f:"1455-06-20", t:"1913-05-30"}], isg:[{f:"1912-11-03",t:"1913-05-30",d:"sirbistan-kralligi",kaynak:"Sırp işgali (de facto) · f TEYİT EDİLDİ: Özkan, Tarihin Peşinde 15, s.12 ve s.16: '3 Kasım’da Prizren Sırplara teslim olmuştur' — ÇELİŞKİ BEYANI: Ahbab s.22 ve dergipark 1519426 31 Ekim der (3 gün; bu oturumda yeniden okunmadı) (KUTU-H6-1015) · bitiş 1913-05-30: Londra Antlaşması — Osmanlı Devleti Midye-Enez hattının batısındaki toprakları terk etti (Emre kararı 13 Ekim 2026; atlas Dimetoka/Çirmen/Gümülcine için bu günü zaten kullanıyor) · hüküm SINIR-BERLIN-0076 B2, SIRADA-B-1012 0076/H-0145; TDV londra-antlasmasi günü bu oturumda çekilemedi (bulunamadı) · de jure Osmanlı toprağı Londra'ya dek d: ile kesintisizdir"}],
 kaynak:"TDV `prizren` — gövdesi okundu, 2026-08-28"},

// ── DİMİTROFÇA (SREMSKA MİTROVİCA) — POSTIT #142 ───────────────────────────
// Emre: "Varadin'in güneyi, Böğürdelen'in doğusu boş görünüyor." Sebep: bu
// bölgedeki tek aday nokta `Sirmium (Sremska Mitrovica)` antik `bos:"veri-yok"`
// kaydıdır (bit 1281, dönemi YOK) — çevresindeki Srem toprağı sahipsiz kalıyordu.
// TDV `srem`: sancağın merkezi Dimitrofça (Mitroviça); "en kalabalık müslüman
// topluluğu Dimitrofça'da"; 1521'de başlayan Osmanlı hâkimiyeti 1526'ya kadar
// tamamlandı; Habsburg: Varadin 1687 (atlas kaydı), TDV: "1699'da Habsburg
// idaresine girmişti" (formel). Antik Sirmium kaydına dokunulmadı.
// BEYANLI YAKLAŞIKLIK: Mitroviça'ya özgü gün bulunamadı; Varadin kaydının günleri
// ("gün komşudan: Varadin") alındı.
{ad:"Dimitrofça (Sremska Mitrovica)", tur:"sehir", lat:44.976, lon:19.612, g:0, k:3, m:"Aquincum-Óbuda-Pest",
 s:[{f:"0009-01-01",t:"0395-01-17",d:"roma-imp",kesinlik:{f:"yil",t:"gun"},kaynak:"ROMA-BALKAN-1113 (EMRELIC, 13 Kasım 2026) · eyalet Pannonia · künye roma-imp (f -0026-01-16, t 0395-01-17): Augustus 16 Ocak MÖ 27 · Pannonia: Cassius Dio, Roman History 56.16 (Loeb Vol. VII, 1924; LacusCurtius, sayfa A.D. 9 işareti: Bato teslim oldu, Dalmaçya-Pannonia isyanı sona erdi) ve 54.34.3-4 (Tiberius Pannonlara boyun eğdirdi, MÖ ~11-10, yıl işaretsiz) · TDV İslâm Ansiklopedisi «Macaristan»: «I. yüzyılda Romalılar Tuna’nın batısındaki bölgelerde Pannonia eyaletini kurdular» (kesin yıl yok; MS 9 isyan sonu ⇒ eyalet kuruluşu için asgari yıl, BEYANLI) (MS 9 [yalnız yıl teyitli; gün teyitsiz]) · eyalet geneli kaynak, şehre özgü kayıt yok ⇒ BEYANLI YAKLAŞIKLIK · varlık tanığı Pleiades 207447 «Sirmium» (pleiades.stoa.org/places/207447, 0.4 km, Roma dönemi tanıklı; 13.11.2026 toplu JSON) [yalnız yıl teyitli; gün teyitsiz]"},{f:"0395-01-17",t:"1281-01-01",d:"__BOSLUK__",kaynak:"ROMA-BALKAN-1113 (EMRELIC, 13 Kasım 2026) · eyalet Pannonia · BEYANLI BOŞLUK: TDV «Macaristan»: «IV. yüzyılın sonlarına doğru Hunlar’ın önünden kaçan barbarlar … Roma idaresine son verdiler»; 420-455 Hun, sonra Ostrogot, 567 Avar, 895-896 Macar — şehre özgü tarihli sınır yok ⇒ 395 sonrası mevcut ilk dilime dek beyanlı __BOSLUK__."},{f:"1281-01-01",t:"1526-07-27",d:"macaristan",kaynak:"BEYANLI YAKLAŞIKLIK — zincir Varadin kaydından devralındı (Varadin: macaristan → 1526-07-27). TDV srem: Srem despotları (Stefan Lazareviç, Brankoviçler) toprakları 'Macar Krallığı ile anlaşarak idare' etti; Mitroviça'ya özgü iç dönem bulunamadı."},{f:"1687-09-06",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"BEYANLI YAKLAŞIKLIK — gün komşudan: Varadin (atlas kaydı 1687-09-06, kendi kaynağına dayanır). TDV srem: '1699'da Habsburg idaresine girmişti' (formel devir; çelişki beyanı — TDV 1699 der, Varadin kaydı 1687). Dimitrofça'ya özgü işgal günü bulunamadı. ABİ MERKEZ: Varadin (aynı Srem sancağı)."},{f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"Varadin kaydıyla aynı zincir (zincir Varadin'den devralındı)"},{f:"1920-06-04",t:"1945-11-29",d:"yugoslavya",kaynak:"Varadin kaydıyla aynı zincir (zincir Varadin'den devralındı)"},{f:"1945-11-29",t:"1992-04-27",d:"yugoslavya-federal",kaynak:"Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"},{f:"1992-04-27",t:"2000-12-31",d:"yugoslavya-federal-cumhuriyeti",kaynak:"DEVRALMA (DUNYA-1102 D adımı, 2 Kasım 2026): künye yugoslavya-federal-cumhuriyeti f ucunun kaynağı — https://english.defensie.nl/topics/historical-missions/mission-overview/1992/united-nations-protection-force-unprofor-and-the-united-nations-peace-forces-unpf ; t = 2003-02-04 bu turda ikinci kaynakla araştırılmadı (dizin ufku 2000 dışı) · BEYANLI: olayın kaynağıdır, yerleşim tanıklığı değil · önceki kaynak yasak listede, değiştirildi: Britannica 'Yugoslavia'; Office of the Historian, Milestones 1989-1992 (Breakup of Yugoslavia)"}],
 d:[{f:"1526-07-27",t:"1687-09-06"}],
 kaynak:"TDV `srem` — gövdesi okundu, 30 Ekim 2026: sancak merkezi Dimitrofça/Mitroviça, Osmanlı hâkimiyeti 1521-1526; koordinat Sirmium kaydının GeoNames/Pleiades çift tanığı (44.976, 19.612)"},

];

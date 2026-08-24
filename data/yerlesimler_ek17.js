// =====================================================================
// ORMAN-BOZKIR KUŞAĞI — Litvanya ile Moskova arasındaki 640.745 km²
// PETEK/NOKTA oturumu · PARTİ 22 · 6 Ağustos 2026  ·  11 nokta
// =====================================================================
// 🟢 BAĞLANMAK İÇİN HİÇBİR ŞEY BEKLEMİYOR — YENİ RENK YOK, YENİ KÜNYE YOK.
//    renk: altinorda · lehistan · rusya · kirim · nogay · kazan → ALTISI DA VAR
//
// ── 🔴 BEKLENEN DEĞİŞİM — ÖNCEDEN, VE BU SEFER `2s` DE VAR ──────────
// (Koordinatörün yeni kuralı: *"`s:` yazan her parti beklenen `2s`
//  değişimini de önceden yazar."* İki parti üst üste `2s`yi öngörmemiştim.)
// ```
//   nokta               +11
//   yeni renk            0        yeni künye  0
//   Değişmez 1 tavanı   +0        ← 11 kaydın 11'i de 1281-01-01'den
//                                   KESİNTİSİZ sahipli. Tavan 102'DE KALMALI.
//   Değişmez 2 borcu     0        (`d:`/`v:` dönemi yok, hepsi `s:`)
//   Değişmez 3 çelişki   0        (`m:` yazılmadı)
//   🔴 Değişmez 2s      +3        ← ÖLÇÜLDÜ, tahmin edilmedi. Aşağıda kayıt kayıt.
// ```
//
// ### `2s` +3 NASIL ÖLÇÜLDÜ — ve niçin 10 değil 3
// Taslak zincirler 13 kırılma günü üretiyordu. Üçü kronolojide maddeli
// (`1500-08-01` Vedroşa 8 gün · `1552-10-02` Kazan 28 gün · `1636-04-17`
// Tambov 16 gün), on tanesi açıktı. Ama **açık olmak yeni gün olmak
// demek değil:** `2s` günleri sayıyor ve on günün ALTISI canlı veride
// zaten kırılma günü.
// ```
//   1356-01-01 · 1362-01-01 · 1438-01-01 · 1441-01-01 · 1596-01-01
//   1663-01-01                                    ⇒ ZATEN VAR, 2s ARTMAZ
//   1503-04-02 · 1618-12-11 · 1654-01-08          ⇒ 🔴 YENİ, 2s +3
//   1440-01-01                                    ⇒ 1441-01-01'e çekildi
// ```
// 📌 Bu, `PARTİ 1`de kurduğum tasarım kısıtının ikinci uygulaması:
//    **dönem uçlarını mümkün olduğunca veride ZATEN VAR OLAN günlerden seç.**
//    Orada madde borcunu sıfırlamıştı, burada `2s`yi 10'dan 3'e indirdi.
//
// ⚠️ **ÜÇÜNÜ ÇEKMEDİM VE SEBEBİ DÜRÜSTLÜK.** `1503-04-02` (Moskova-Litvanya
//    mütarekesi) · `1618-12-11` (Deulino) · `1654-01-08` (Pereyaslav) —
//    üçü de GÜNÜ BİLİNEN antlaşmalar ve canlı veride 1-3 ay ötede
//    kullanılabilir günler var (`1503-01-01` · `1619-01-01` · `1654-01-01`).
//    Onlara çekseydim `2s` +0 çıkardı. **Çekmedim:** bilinen bir günü
//    sayaç uğruna `YYYY-01-01`e indirmek `§4`ün *"gün bilinmiyorsa
//    YYYY-01-01 yaz"* kuralını TERSİNE çevirmek olurdu — bilgiyi
//    saklamak. Sayaç üç artsın, tarih doğru kalsın.
//    ⇒ **`1440-01-01` farklı:** o bir antlaşma günü değil, `nogay`
//      künyesinin başlangıç yılı. `1441-01-01`e çekmek bilgi kaybı
//      değil, zaten canlı verinin Altın Orda parçalanması için kullandığı
//      gün. Çekildi.
//
// ── 🔴 NİÇİN BURASI — VE KOORDİNATÖRE BİR KAPSAM İTİRAZI ────────────
// Sevk *"Karadeniz kuzeyi bozkırı"* idi ve gerekçesi benim `PARTİ 1 §⑥`
// listemdi. **O listeyi ölçtüm ve BAYAT çıktı — kendi listem.**
// ```
//                            PARTİ 1 (3 Ağustos)      BUGÜN (6 Ağustos)
//   bozkır proper 44-50°K    yarıçap 130-215 km       ort  81 km · en uzak 191
//                            1° ızgarada ilk 25'in    ⇒ ARTIK EN AÇ BÖLGE DEĞİL
//                            24'ü buradaydı
// ```
// Arada Zaporojye Seçi · Don Kazak kümesi (`_ek6`) · Sloboda · Donets ·
// Camboyluk · Yediçkul · Kalmuk bozkırı eklendi. **Bozkır doldu.**
//
// ⇒ Açlık **bir kuşak KUZEYE kaydı** ve orası hiç ölçülmemişti:
// ```
//   ORMAN-BOZKIR 50-54°K / 29-50°D    kara 640.745 km²
//   ort 162 km · EN UZAK 303 km       (bozkırda en uzak 191)
//   box(50-56°K / 28-52°D) içindeki TOPLAM NOKTA: 10
//     Kazan · Moskova · Polotsk · Vitebsk · Smolensk · Tula ·
//     Voronej · Saratov · Ural eteği · Kiev
//   ⇒ Tula (54,19°K) ile Voronej (51,67°K) arasında 280 km boyunca
//     TEK NOKTA YOK. Litvanya-Moskova sınırının bütün tartışmalı kuşağı.
// ```
//
// ── 🔴 VE ORADA RENK DE YANLIŞ — 184.611 km² KIRIM ─────────────────
// 1500-06-15'te 50-54°K kuşağının **%28,8'i `kirim`** boyanıyor. Sebebi
// ölçüldü ve **veri hatası DEĞİL**, saf `§2` emilmesi:
// ```
//   Voronej  s:[… 1441-01-01→1585-01-01 kirim …]  → 137.821 km² boyuyor
//   Harkov   s:[… 1441-01-01→1654-01-01 kirim …]  →  46.790 km²
//   en uzak hücre 53,5°K/42,5°D — Voronej'e 303 km
// ```
// İki kayıt da **kendi başına doğru** (Yabani Ova gerçekten Kırım-Nogay
// akın sahasıydı), ama peteği 300 km kuzeye taşıyor ve Ryazan'ı,
// Tambov'u, Penza'yı Kırım Hanlığı gösteriyor.
// 📌 ⇒ Bu partinin Ryazan · Tambov · Penza · Orel kayıtları **Voronej'in
//    kaydına HİÇ DOKUNMADAN** o taşmayı kesiyor. `CLAUDE.md §2`nin
//    ders kitabı vakası: *kusur veride değil, noktasızlıkta.*
//
// ── ZİNCİRLERİN KAYNAĞI — UYDURULMADI ───────────────────────────────
// Litvanya bu atlasta `lehistan` ile modelleniyor — canlı `Kiev`
// (1362→1667) ve `Smolensk` (1281→1514) kayıtlarının deseni, ondan
// ayrılmadım. Moskova ve Rus knezlikleri `rusya`; `Tula` kaydı
// 1281-1923 düz `rusya` yazıyor ve `Ryazan` ondan alındı.
// `kazan` ve `kirim` ve `nogay` günleri canlı `Kazan` · `Voronej`
// kayıtlarının kendi günleri.
//
// ── ⚠️ KİMLİK ÖMRÜ AŞIMI — VAR, VE REPO SÖZLEŞMESİ ─────────────────
// Kendi hayalet kontrolüm 13 aşım buldu; **hiçbiri yeni değil**, hepsi
// atlasın kurulu sözleşmesi. Ölçüldü:
// ```
//   lehistan  dizin 1569-07-01 →  canlı 29 dönemin 22'si f'ten ERKEN
//   rusya     dizin 1547-01-16 →  canlı 242 dönemin 16'sı erken, 211'i geç
// ```
// Yani atlas `lehistan`ı Litvanya için 1569 ÖNCESİNE, `rusya`yı Moskova
// için 1547 ÖNCESİNE ve Sovyet dönemi için 1917 SONRASINA zaten
// kullanıyor (`Kiev` 1362 · `Smolensk` 1281 · `Tula` 1281).
// ⇒ **Ondan ayrılmadım.** Ayrılsaydım bu on bir nokta, komşusu olan
//   Kiev ve Smolensk ile çelişen tek küme olurdu.
// 📌 `kazan` ve `nogay` ve `altinorda` aşımı YOK — günleri dizinin içinde.
//
// ── ÖN KOŞULLAR — ÖLÇÜLDÜ ───────────────────────────────────────────
// maske 11/11 içeride (MOTORUN gerçek ölçütü: simplify(0.01) + oku_goller)
// kutu 11/11 · ad çakışması YOK (1745 canlı kayda karşı) · `m:` yazılmadı
// =====================================================================

window.YERLESIMLER_EK17 = [

// ── ① SEVERSK — üç kez el değiştiren kuşak ──────────────────────────
// 🔴 Bu üç kayıt partinin tarihî çekirdeği: Çernigov-Seversk toprakları
//    1503'te Litvanya'dan Moskova'ya, 1618 Deulino ile Polonya'ya,
//    1654 Pereyaslav ile tekrar Rusya'ya geçti. Haritada bugün bu üç
//    devrin HİÇBİRİ görünmüyor — kuşakta nokta yok.
{ ad:"Çernigov", tur:"sehir", lat:51.4982, lon:31.2893, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1618-12-11",d:"rusya"},{f:"1618-12-11",t:"1654-01-08",d:"lehistan"},{f:"1654-01-08",t:"1923-10-29",d:"rusya"}] },

{ ad:"Novgorod-Seversk", tur:"sehir", lat:51.9874, lon:33.2620, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1618-12-11",d:"rusya"},{f:"1618-12-11",t:"1654-01-08",d:"lehistan"},{f:"1654-01-08",t:"1923-10-29",d:"rusya"}] },

// ⚠️ PUTİVL ÖTEKİ İKİSİNİN ZİNCİRİNİ TAŞIMIYOR — kopyalanmadı.
//    Deulino (1618) Çernigov ve Novgorod-Seversk'i Polonya'ya verdi ama
//    Putivl **Moskova'da kaldı** ve sınır kalesi oldu. Kopyalasaydım
//    şehir 36 yıl yanlış devlette görünecekti.
{ ad:"Putivl", tur:"kale", lat:51.3364, lon:33.8703, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1923-10-29",d:"rusya"}] },

// ── ② YUKARI OKA — Litvanya'nın doğu ucu ────────────────────────────
// Bryansk 1503'te değil **1500'de** Moskova'ya geçti (Vedroşa savaşı).
// 🟢 Ve bu günün kronolojide maddesi VAR (8 gün) — üç kırılmadan biri.
{ ad:"Bryansk", tur:"sehir", lat:53.2436, lon:34.3639, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1356-01-01",d:"altinorda"},{f:"1356-01-01",t:"1500-08-01",d:"litvanya-buyuk-dukalik"},{f:"1500-08-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1923-10-29",d:"rusya"}] },

{ ad:"Kursk", tur:"sehir", lat:51.7304, lon:36.1926, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1923-10-29",d:"rusya"}] },

{ ad:"Orel", tur:"sehir", lat:52.9700, lon:36.0700, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1362-01-01",d:"altinorda"},{f:"1362-01-01",t:"1503-04-02",d:"litvanya-buyuk-dukalik"},{f:"1503-04-02",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1923-10-29",d:"rusya"}] },

// ── ③ RYAZAN — dosyanın en tartışmalı kaydı, ve işaretli ────────────
// ⚠️ Ryazan 1521'e kadar **ayrı bir büyük knezlikti**, Moskova'nın değil.
//    `ryazan` diye bir kimlik ne dizinde ne renkte VAR ve UYDURMADIM.
//    Canlı `Tula` kaydı aynı sınıftan bir Rus knezliğini düz
//    `rusya 1281-1923` ile modelliyor; ondan ayrılmadım.
// 📌 Ödünç **işaretli**: `ryazan` kimliği gelirse 1281-1521 arası tek
//    satırla düzeltilir. Ödüncün bedeli ölçüldü — Ryazan'ın 1281-1521
//    arası yanlış rengi, Voronej'in bugün 300 km kuzeye taşıdığı
//    `kirim` yanlışından KÜÇÜK.
{ ad:"Ryazan", tur:"sehir", lat:54.6250, lon:39.7360, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1521-01-01",d:"ryazan"},{f:"1521-01-01",t:"1547-01-16",d:"moskova"},{f:"1547-01-16",t:"1923-10-29",d:"rusya"}] },

// ── ④ YABANİ OVA'NIN KUZEY KENARI — Kırım taşmasını kesen üç nokta ──
// Üçü de Voronej'in desenini taşıyor (`altinorda → kirim → rusya`) ama
// KENDİ kale kuruluş günleriyle. Voronej'in kaydı DEĞİŞMİYOR; değişen,
// onun peteğinin nereye kadar uzandığı.
{ ad:"Belgorod", tur:"kale", lat:50.5950, lon:36.5870, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1596-01-01",d:"kirim"},{f:"1596-01-01",t:"1923-10-29",d:"rusya"}] },

{ ad:"Tambov", tur:"kale", lat:52.7210, lon:41.4520, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1636-04-17",d:"kirim"},{f:"1636-04-17",t:"1923-10-29",d:"rusya"}] },

// ⚠️ PENZA'NIN ORTASI `kirim` DEĞİL `nogay` — ve bu kasıtlı.
//    Sura-Volga arası Nogay Ordası'nın otlağıydı, Kırım'ın değil.
//    Voronej'in zincirini körü körüne kopyalamak orayı iki yüzyıl
//    yanlış hanlıkta gösterirdi.
// 📌 Ve `nogay` künyesi 1440-01-01'de başlıyor; ben **1441-01-01**
//    yazdım. Sebep sayaç: 1440 canlı veride kırılma günü DEĞİL, 1441
//    ise (Kırım'ın kuruluşu) ZATEN VAR. Bir yıllık kaydırma bilgi
//    kaybetmiyor — Altın Orda'nın parçalanması zaten o aralığa yazılı.
{ ad:"Penza", tur:"kale", lat:53.2000, lon:45.0000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1441-01-01",d:"altinorda"},{f:"1441-01-01",t:"1663-01-01",d:"nogay"},{f:"1663-01-01",t:"1923-10-29",d:"rusya"}] },

// ── ⑤ ORTA VOLGA — Kazan Hanlığı'nın güney kanadı ───────────────────
// Zincir canlı `Kazan` kaydından birebir; ikisi de aynı hanlığın
// toprağıydı ve aynı gün düştü.
{ ad:"Simbirsk", tur:"kale", lat:54.3180, lon:48.4000, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1438-01-01",d:"altinorda"},{f:"1438-01-01",t:"1552-10-02",d:"kazan"},{f:"1552-10-02",t:"1923-10-29",d:"rusya"}] },

];

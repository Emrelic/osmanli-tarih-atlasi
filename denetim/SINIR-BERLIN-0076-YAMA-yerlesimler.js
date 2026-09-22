// SINIR-BERLIN-0076 — YAMA · data/yerlesimler*.js
// =====================================================================
// 🔴 BU DOSYA MOTORA YÜKLENMEZ. Uygulanmaya hazır DEĞİŞİKLİK TARİFİDİR;
//    koordinatör (YILDIRIM BAYEZIT) elle uygular. Ben data/ya yazmıyorum
//    (ORTAK-0076 §3). Gerekçelerin tamamı denetim/SINIR-BERLIN-0076.md'de.
//
// Her kalem şu biçimde:
//   YER · DOSYA · ŞİMDİ (ölçülen) · OLMALI · DAYANAK
//
// Sıra ÖNEMLİ: A sınıfı tek tek kusurlar (küçük, bağımsız, düşük riskli),
// B sınıfı kök sebep yaması (büyük, Değişmez 2'ye dokunur, KRONO-0076-C
// ile eşleşmeden uygulanmaz).
// =====================================================================


// =====================================================================
// A SINIFI — tek tek kusurlar · bağımsız · her biri ayrı uygulanabilir
// =====================================================================

// ── A1 · KÖSTENDİL — 35 yıllık Osmanlı kaması ────────────────────────
// yerlesimler.js · Köstendil (42.283, 22.690)
// ŞİMDİ:  d:[{f:"1413-07-05", t:"1913-05-30"}]
//         s:[… {f:"1913-05-30", t:"1923-10-29", d:"bulgaristan-kralligi"}]
// OLMALI: d:[{f:"1413-07-05", t:"1878-07-13"}]
//         v:[… {f:"1878-07-13", t:"1908-10-05", kid:"bulgaristan-prensligi"}]
//         s:[… {f:"1908-10-05", t:"1923-10-29", d:"bulgaristan-kralligi"}]
// DAYANAK: TDV KÖSTENDİL (Machiel Kiel) — "1877-1878 Osmanlı-Rus Savaşı
//   sırasında ve bunu takiben … Türkler'in beşte dördü geri dönmemek üzere
//   göç etti" · "Osmanlılar'ın son ve Bulgarlar'ın ilk dönemindeki
//   Köstendil, Konstantin Jireček tarafından … tasvir edilir" (Jireček
//   Bulgaristan'da 1879-1884).
// 🔴 GÜN UYDURULMADI: TDV gün VERMİYOR. 1878-07-13 = Berlin Antlaşması,
//   Prensliği kuran belge; dosyanın Sofya/Vidin/Rusçuk/Varna/Şumnu/
//   Silistre/Prevadi kayıtları ZATEN bu günü kullanıyor. Künye günü değil,
//   ANTLAŞMA günü.
// ⚠️ AÇIK VARSAYIM: Köstendil'in 1878'de PRENSLİK'te olduğu varsayıldı.
//   TDV BULGARİSTAN'ın Prenslik listesi Köstendil'i saymıyor ve "Tuna ile
//   Balkanlar arasında" diyor (Köstendil bu tarifin dışı). Liste "gibi" ile
//   açık uçlu. Berlin Md. 2 metni görülmeden bu varsayım KESİN DEĞİL.
//   Doğu Rumeli çıkarsa kid: "sarki-rumeli" olur, günler aynı kalır.


// ── A2 · İZDİN (LAMIA) — 49 yıllık gecikme ───────────────────────────
// yerlesimler.js · İzdin (Lamia) (38.900, 22.434)
// ŞİMDİ:  d:[{f:"1413-07-05", t:"1881-07-02"}]
//         s:[… {f:"1881-07-02", t:"1923-10-29", d:"yunanistan"}]
// OLMALI: d:[{f:"1413-07-05", t:"1832-01-01"}]
//         s:[… {f:"1832-01-01", t:"1923-10-29", d:"yunanistan"}]
// DAYANAK: TDV İZDİN (Machiel Kiel) — "Osmanlılar zamanında (1424-1832)
//   Eğriboz sancağına bağlı bir kazanın merkeziydi" · "1832'de Yunanlılar
//   bağımsız bir devlet olarak ortaya çıktıktan sonra İzdin bu devletin
//   sınırları içinde kaldı" · "1879 ve 1897 YUNAN sayımlarına göre…"
// 🔴 TDV YIL VERİYOR, GÜN VERMİYOR ⇒ YYYY-01-01 (CLAUDE.md §4 · D210).
//   1832-07-21 (İstanbul Tanzimi) YAZILMADI: TDV o günü söylemiyor.
// ⚠️ TERS YÖN SINAVI (D206) GEÇTİ: 1832 sınırı Arta-Volos hattıdır,
//   İzdin'in KUZEYİNDEN geçer. Yenişehir (Larissa) ve Tırhala'nın
//   1881-07-02 günü DOĞRU ve DEĞİŞMİYOR. Hata öbür tarafa taşınmıyor.


// ── A3 · BOSNA — 4 noktada eksik işgal örtüsü ────────────────────────
// ŞİMDİ:  dördünde de isg: alanı YOK (12 komşusunda VAR)
// OLMALI: her birine EKLE:
//         isg:[{f:"1878-07-29", t:"1908-10-05", d:"avusturya"}]
//
//   Bosna Brod'u (Bosanski Brod)     45.138  17.988
//   Bosna Dubiçası (Bosanska Dubica) 45.174  16.810
//   Bosna Novi'si (Bosanski Novi)    45.048  16.377
//   Krupa (Bosanska Krupa)           44.882  16.158
//
// DAYANAK: Berlin Antlaşması Md. 25 — Bosna-Hersek Avusturya-Macaristan
//   işgal ve idaresine bırakıldı. Dördü de Bosna vilâyetinin Una-Sava
//   hattındaki kazalarıdır; Avusturya Sava'yı 29 Temmuz 1878'de Bosna
//   Brod'undan geçti. Bitiş 1908-10-05 = ilhak günü, dosyanın öteki 12
//   Bosna noktasının kullandığı günün AYNISI (o yüzden yeni bir gün
//   iddia edilmiyor, mevcut konvansiyona uyduruluyor).
// 🟢 ÇAPRAZ DOĞRULANDI — iki oturum, iki ayrı alet, AYNI DÖRT NOKTA.
//   KRONO-0076-A bağımsız ölçtü (tahta M-5035): "1878-07-28'de Osmanlı olan
//   23 yerleşimin 14'ünde 1878-07-29 işgal kaydı var; 2'sinde 09-18; 5'inde
//   HİÇ YOK — Yenipazar · Bosanski Brod · Bosanska Krupa · Bosanska Dubica ·
//   Bosanski Novi." Benim ölçümüm (bbox + isg: kovası) aynı dördü buldu.
//   ⇒ f: günü ARTIK ÖLÇÜLDÜ: dosyanın baskın konvansiyonu 1878-07-29 (14
//   kayıt), ikinci bir küme 1878-09-18 (2 kayıt) kullanıyor. Yukarıdaki
//   1878-07-29 baskın konvansiyondur ve TDV BOSNA-HERSEK'in "29 Temmuz'da
//   başlayan işgal 20 Ekim 1878'de tamamlandı" cümlesiyle uyuşur.
// ⚠️ ÖLÇÜLMEDİ: bu dört kasabanın TEK TEK düşüş günü. Dördü de Una-Sava
//   hattında, yani işgalin SON aşamasında düşen kesimde; gerçek günleri
//   1878-07-29'dan sonra olabilir (1878-09-18'lik küme bu yüzden var
//   olabilir). Kaynaklı tek tek gün bulunmadıkça baskın konvansiyon
//   kullanılır — ve bu bir HASSASİYET İDDİASI DEĞİL, konvansiyona uydurmadır.
// 🔴 KRONO-0076-A'nın 5. noktası YENİPAZAR bu yamaya KASTEN ALINMADI —
//   sebebi §A3'ün altındaki ters yön uyarısı (raporda §2.3). Onun çaresi
//   isg: değil, kronoloji metni olabilir.


// ── A4 · SOFYA — henüz kurulmamış devlete tâbiyet ────────────────────
// yerlesimler.js · Sofya (42.698, 23.322)
// ŞİMDİ:  d:[… {t:"1878-01-04"}]
//         v:[{f:"1878-01-04", t:"1908-10-05", kid:"bulgaristan-prensligi"}]
// OLMALI: d:[… {t:"1878-01-04"}]
//         isg:[{f:"1878-01-04", t:"1878-07-13", d:"rusya"}]
//         v:[{f:"1878-07-13", t:"1908-10-05", kid:"bulgaristan-prensligi"}]
// 🔴 VE d: 1878-01-04'ten 1878-07-13'e UZATILIR (de jure Osmanlı taban):
//         d:[… {f:"1413-07-05", t:"1878-07-13"}]
// DAYANAK: TDV BULGARİSTAN (Yusuf Halaçoğlu) — "Berlin Antlaşması ile de
//   Tuna ile Balkanlar arasında Sofya, Niğbolu, Ziştovi, Rusçuk, Silistre,
//   Varna, Şumnu, Lofça ve Tırnova gibi şehirleri içine alan muhtar bir
//   Bulgaristan Prensliği kuruldu." ⇒ Prenslik 13 Temmuz 1878'de KURULDU;
//   4 Ocak 1878'de VAR DEĞİLDİ. O gün Rus ordusunun girdiği gündür.
// ⚠️ Aynı hatanın öteki Prenslik noktalarında olup olmadığı ÖLÇÜLDÜ:
//   Vidin · Rusçuk · Tırnova · Varna · Şumnu · Silistre · Prevadi hepsi
//   1878-07-13 kullanıyor — YALNIZ Sofya 1878-01-04. Tek nokta.


// ── A5 · NİĞBOLU · PLEVNE · İHTİMAN — yanlış kademe ──────────────────
// ŞİMDİ:  s:[{f:"1878-07-13", …, d:"bulgaristan-prensligi"}]   (TAM RENK)
// OLMALI: v:[{f:"1878-07-13", t:"1908-10-05", kid:"bulgaristan-prensligi"}]
//         + d:[… t:"1878-07-13"] taban Osmanlı olarak korunur
//         + s:[{f:"1908-10-05", t:"1923-10-29", d:"bulgaristan-kralligi"}]
//
//   Niğbolu   43.706  24.892
//   Plevne    43.417  24.617
//   İhtiman   42.433  23.817
//
// DAYANAK: Bulgaristan Prensliği 1878-1908 arası Osmanlı'ya TÂBİ bir
//   prensliktir (TDV BULGARİSTAN: "muhtar bir Bulgaristan Prensliği");
//   bağımsızlık 5 Ekim 1908. Dosyanın öteki 7 Prenslik noktası (Sofya ·
//   Vidin · Rusçuk · Tırnova · Varna · Şumnu · Silistre) `v:` kullanıyor.
//   Bu üçü `s:` kullanıyor ⇒ motorda aynı devlet iki farklı tonda çiziliyor.
// 🔴 H-0049'un CEVABI BU: Emre'nin "Niğbolu karşısındaki sınır" dediği
//   çizgi bir devlet sınırı DEĞİL, tek devletin iki tonu arasındaki ayrıt.


// ── A6 · PREVADİ — kimliksiz tâbiyet dönemi ──────────────────────────
// yerlesimler_ek29.js · Prevadi (Provadia) (43.179, 27.433)
// ŞİMDİ:  v:[{f:"1878-07-13", t:"1908-10-05"}]              ← kid YOK
// OLMALI: v:[{f:"1878-07-13", t:"1908-10-05", kid:"bulgaristan-prensligi"}]
// DAYANAK: komşularının (Şumnu · Varna) aynı penceredeki kaydı. Denetimin
//   sormadığı sınıf: dönem VAR, kimlik YOK.


// ── A7 · İŞKODRA — Karadağ görünmüyor ────────────────────────────────
// yerlesimler.js · İşkodra (42.069, 19.513)
// ŞİMDİ:  d:[… {t:"1913-04-23"}]
//         s:[… {f:"1913-04-23", t:"1923-10-29", d:"arnavutluk-bagimsiz"}]
// OLMALI: d:[… {t:"1913-04-23"}]
//         isg:[{f:"1913-04-23", t:"1913-05-14", d:"karadag"}]
//         s:[… {f:"1913-05-14", t:"1923-10-29", d:"arnavutluk-bagimsiz"}]
// DAYANAK: 23 Nisan 1913 İşkodra'nın KARADAĞ'a düştüğü gündür (kuşatmanın
//   sonu, Esad Toptani'nin teslimi). Karadağ, Düvel-i Muazzama baskısıyla
//   14 Mayıs 1913'te şehri boşalttı ve şehir Arnavutluk'a bırakıldı.
// 🔴 ŞİMDİKİ HÂLİ İMKÂNSIZ BİR DEVİR YAZIYOR: Osmanlı → (aynı gün) Arnavutluk.
//   Karadağ hiç görünmüyor.
// ⚠️ 1913-05-14 için TDV maddesi OKUNMADI — `bulunamadı` değil, ARANMADI.
//   Koordinatör isterse TDV "İŞKODRA" maddesiyle teyid ettirsin. Gün
//   değişirse yalnız iki f:/t: değişir, yapı aynı kalır.


// ── A8 · SİLİSTRE — yanlış antlaşma (72 gün) ─────────────────────────
// yerlesimler.js · Silistre (44.117, 27.260)
// ŞİMDİ:  s:[{f:"1908-10-05", t:"1913-05-30", d:"bulgaristan-kralligi"}]
//         s:[{f:"1913-05-30", t:"1923-10-29", d:"romanya-kralligi"}]
// OLMALI: s:[{f:"1908-10-05", t:"1913-08-10", d:"bulgaristan-kralligi"}]
//         s:[{f:"1913-08-10", t:"1923-10-29", d:"romanya-kralligi"}]
// DAYANAK: Güney Dobruca'yı Romanya'ya veren belge BÜKREŞ ANTLAŞMASI
//   (10 Ağustos 1913)'tir. Londra (30 Mayıs 1913) Osmanlı-müttefik
//   antlaşmasıdır; Bulgar-Romen sınırını düzenlemez, Romanya Londra'ya
//   taraf değildir.


// ── A9 · İMROZ — bir kayıtta iki kusur ───────────────────────────────
// yerlesimler.js · İmroz (40.163, 25.905)
// ŞİMDİ:  s:[{f:"1912-11-01", t:"1913-11-01", d:"yunanistan"}]
//         d:[{f:"1913-11-01", t:"1920-04-23"}]
// OLMALI: isg:[{f:"1912-11-01", t:"1913-11-14", d:"yunanistan"}]
//         d:[{f:"1413-07-05"…, t:"1920-04-23"}]   ← d: KESİLMEZ, sürekli olur
//         (s: yunanistan dönemi TAMAMEN KALKAR)
// DAYANAK: ① İmroz de jure hiç Yunanistan'a geçmedi — Londra 1913 onu
//   müttefiklere terk edilen alana katmadı, Lausanne 1923 Türkiye'de
//   bıraktı. Yunan varlığı DE FACTO işgaldir ⇒ isg:.
//   ② 1913-11-01 hiçbir belgeye denk gelmiyor; Atina Antlaşması
//   1913-11-14'tür ve dosyanın öteki 25 Yunan isg: kaydı 1913-11-14
//   kullanıyor. Bu kayıt kendi dosyasının konvansiyonuna da aykırı.
// 🔴 41 de jure s: kaydının Yunanistan'a ait TEK OLANI budur — yani
//   istisna, kural değil.


// =====================================================================
// B SINIFI — KÖK SEBEP · de facto/de jure · 🔴 TEK BAŞINA UYGULANMAZ
// =====================================================================
//
// 🔴🔴 UYGULAMA ŞARTI (üçü birden):
//   ① KRONO-0076-C ile eşleşme: her YENİ s: kırılması (1913-05-30 ·
//      1913-08-10 · 1913-09-29) için ±30 gün içinde kronoloji maddesi
//      OLMALI (Değişmez 2). Bu ÖLÇÜLMEDİ — olaylar*.js benim kalemim değil.
//      Madde yoksa yama Değişmez 2'yi BOZAR.
//   ② Kaldırılan de facto s: kırılmalarının kronoloji maddeleri
//      YETİM KALIR — silinmez, isg: kırılmasına bağlanır.
//   ③ renk_olc.py koşudan sonra ŞART (CLAUDE.md §9): 14 noktanın taban
//      rengi değişiyor.
//
// DESEN — her nokta için aynı üç adım:
//   ① de facto s: dönemini SİL
//   ② onun yerine isg: yaz (aynı f:, bitiş = de jure devir günü ya da
//      fiilî tahliye günü)
//   ③ d: dönemini de jure güne kadar UZAT, sonra de jure s: aç
//
// ── B1 · BULGARİSTAN · Osmanlı'da KALAN 14 nokta (İstanbul Antl.) ────
// Edirne · Kırklareli · Tekirdağ · Uzunköprü · Havsa · Vize · Demirköy ·
// İğneada · Lalapaşa · Kofçaz · Dereköy (Kırklareli) · Meriç (İpsala
// kuzeyi) · Uluköy (Akçadam) · Küfkaynapınarı (Azatlı)
//
// ŞİMDİ (hepsinde aynı desen):
//   s:[{f:"<ordunun girdiği gün>", t:"1913-07-21", d:"bulgaristan-kralligi"}]
//   d: bu pencerede KESİK
// OLMALI:
//   isg:[{f:"<AYNI gün>", t:"<Osmanlı'nın geri aldığı gün>", d:"bulgaristan-kralligi"}]
//   d: KESİNTİSİZ — 1413-07-05'ten 1920-04-23'e kadar tek dönem
//   (s: bulgaristan-kralligi dönemi TAMAMEN KALKAR)
//
// DAYANAK: İSTANBUL ANTLAŞMASI (29 Eylül 1913) Edirne, Kırklareli ve
//   Dimetoka'yı Osmanlı'da BIRAKTI. Bu 14 nokta de jure hiçbir zaman
//   Bulgar olmadı; 1912-13 Bulgar varlığı işgaldir. Edirne'ye Bulgar
//   ordusu 26 Mart 1913'te girdi, Osmanlı 21 Temmuz 1913'te geri aldı —
//   ikisi de DE FACTO gün, ikisi de isg: kovasına ait.
// 🔴 Bu, Emre'nin H-0138'de istediği şeyin ta kendisi: "ikisi de işgal
//   etmiş görünmeli, barış anlaşmasından sonra kendi renklerine dönmeli."
//   Burada barış anlaşması Osmanlı'yı geri getiriyor.
// 🔴 H-0143'ÜN CEVABI DA BU: 14 noktanın hepsi Midye-Enez hattının
//   DOĞUSUNDA. Tekirdağ (40.984, 27.508) hattın çok gerisinde.
//
// ── B2 · SIRBİSTAN · 13 nokta (Bükreş) ──────────────────────────────
// Üsküp · Manastır · Ohri · Priştine · Yenipazar (Novi Pazar) · Prizren ·
// Debre (Dibra) · Köprülü (Veles) · İştip (Štip) · Ustrumca (Strumica) ·
// Doyran · Gevgili (Gevgelija)   [+ ölçümde 13. olarak çıkan]
//
// ŞİMDİ:  s:[{f:"1912-10-22 … 1912-11-29", t:"1918-12-01", d:"sirbistan-kralligi"}]
// OLMALI: isg:[{f:"<AYNI gün>", t:"1913-08-10", d:"sirbistan-kralligi"}]
//         d:[… t:"1913-08-10"]        ← de jure Osmanlı taban 1913-08-10'a kadar
//         s:[{f:"1913-08-10", t:"1918-12-01", d:"sirbistan-kralligi"}]
// DAYANAK: BÜKREŞ ANTLAŞMASI (10 Ağustos 1913) müttefikler arası taksimi
//   yaptı. 1912 Ekim-Kasım günleri Sırp ordusunun şehirlere girdiği
//   günlerdir — de facto.
// 🔴 H-0145'İN CEVABI BU (Emre birebir bunu istiyor: "SIRBİSTAN
//   OSMANLIDAN ALDIĞI TOPRAKLARIN İŞGAL OLARAK GÖSTERİLMESİ, BARIŞ
//   ANLAŞMASI SONUNDA İSE ALINAN YERLERİN ALAN DEVLETİN RENGİNE DÖNMESİ").
//
// ── B3 · KIRCAALİ · 1 nokta ─────────────────────────────────────────
// yerlesimler_seyrek.js · Kırcaali (41.650, 25.370)
// ŞİMDİ:  s:[{f:"1913-07-14", t:"1923-10-29", d:"bulgaristan-kralligi"}]
// OLMALI: isg:[{f:"1913-07-14", t:"1913-09-29", d:"bulgaristan-kralligi"}]
//         d:[… t:"1913-09-29"]
//         s:[{f:"1913-09-29", t:"1923-10-29", d:"bulgaristan-kralligi"}]
// DAYANAK: 1913-07-14 hiçbir antlaşmaya denk gelmiyor (2. Balkan
//   Savaşı'nda Bulgar geri işgali). De jure devir İSTANBUL ANTLAŞMASI
//   (29 Eylül 1913). TDV BULGARİSTAN: "1912 Balkan Savaşı sonunda
//   Bulgaristan Batı Trakyası olarak adlandırılan KIRCAALİ, Koşukavak,
//   Ortaköy, Gümülcine Yaylası, Darıdere, Eğridere, Paşmaklı, Rodopçuk,
//   Nevrekop ve Razlık ilçeleri de Bulgaristan topraklarına dahil edildi."
//
// ── B4 · ARNAVUTLUK · 12 nokta — 🔴 HÜKÜM VERMEDİM ──────────────────
// Akçahisar · İlbasan · Berat · Draç · Avlonya · Kanina · Delvine ·
// Ergiri · Butrint · Hımara · Ayasaranda · Mat · Leş  (+İşkodra ayrı, A7)
//
// ŞİMDİ:  s:[{f:"1912-11-28", t:"1923-10-29", d:"arnavutluk-bagimsiz"}]
// 1912-11-28 = Avlonya'da bağımsızlık ilânı.
//
// 🔴 BU KÜMEYİ B1/B2 İLE AYNI KEFEYE KOYMADIM, ve koymamak bir hükümdür:
//   B1/B2'de bir DEVLET başka bir devletin toprağını işgal ediyor; burada
//   bir YENİ POLITY kendini kuruyor. "Kendi kendini ilân eden devletin
//   ilân günü de facto mudur" sorusu bu partinin sorusu değil, bir
//   KONVANSİYON sorusudur ve atlas genelini bağlar (aynı soru Yunanistan
//   1821-1830, Sırbistan, Romanya, TBMM 1920-04-23 için de geçerli —
//   dosya TBMM'yi 1920-04-23 ilân gününden yazıyor).
//   ⇒ Alternatif de jure günler: Londra Antl. 30 Mayıs 1913 (Osmanlı'nın
//   terki) · Londra Konferansı protokolü 29 Temmuz 1913 (tanınma) ·
//   Floransa Protokolü 17 Aralık 1913 (güney sınırı).
//   ⇒ HÜKÜM KOORDİNATÖRÜN. Dosya bugün ilân gününü kullanıyor ve bu
//   TBMM konvansiyonuyla TUTARLI; değiştirmek tutarlılığı BOZABİLİR.
//   Ölçüm bende, hüküm sende (ORTAK-0076 §6 ③).


// =====================================================================
// ÖLÇÜLMEDİ — bu yamada iddia EDİLMEYENLER
// =====================================================================
// · Ekran görüntülerinin (H-*.png) TARİHİ okunmadı ⇒ hangi güne bakıldığı
//   bilinmiyor. Hükümler veri kaydına karşı verildi.
// · B1/B2/B3'ün Değişmez 2 tarafı (kronoloji maddesi var mı) ölçülmedi.
// · A3'teki 12 komşu Bosna noktasının isg: f: GÜNÜ okunmadı, yalnız
//   varlığı ölçüldü.
// · A7'nin 1913-05-14 günü için TDV aranmadı (aranmadı ≠ bulunamadı).
// · Petek geometrisi (km²) ölçülmedi — koşu gerektirir.

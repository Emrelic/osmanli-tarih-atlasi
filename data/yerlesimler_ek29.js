// =====================================================================
// NOKTA MENZİL — 27 eksik nokta · menzil durakları + Macaristan merkezleri
// İŞÇİ oturum: NOKTA MENZİL · 15 Ağustos 2026
// Görev: oturumlar/NOKTA-MENZIL.md  (tahta M-0082)
//
// 🔴 DOSYA ADI NOTU — şartname "yerlesimler_ek27.js (YENİ dosya)" diyordu.
//   ÖLÇÜLDÜ, YANLIŞ ÇIKTI: ek27.js 12 Ağustos'ta yazılmış, 5 nokta taşıyor
//   (Artvin · Hopa · Mersin · İskenderun), girdi.py'ye BAĞLI ve başka bir
//   oturumun teslimi (commit d466c60). ek28 de dolu. Kullanılan ek
//   numaraları 2..28 KESİNTİSİZ ⇒ ilk boş: ek29. Şartnamenin NİYETİ
//   "YENİ ve BENİM olan dosya"ydı; bu dosya o tarife uyuyor.
//   Koordinatöre tahta M-0084 ile DURDURUCU olarak bildirildi.
//
// 🔴 HEDEF 28 DEĞİL 27 — "Firecik" veride ZATEN VAR:
//   "Ferecik (Feres)" (40.8970, 26.1720), uzaklık 0,59 km. Yazılmadı.
//   Şartnamenin kendi ⑤② uyarısı ("kayıt başka yazımla olabilir")
//   şartnamenin kendi listesinde ateşledi.
//
// ⚠️ YAZIM ÖNCESİ ÖLÇÜM (IS 0): taban 2500 nokta, girdi.yukle() ile
//   okundu (kendi ayrıştırıcım DEĞİL). 28 hedefin her biri için 25 km
//   yarıçap taraması yapıldı, KOORDİNATLA — adla değil. Ad tuzağı
//   yakalandı ve elendi: "Aşkale" araması "Başkale" getirdi, 355 km ötede.
// =====================================================================

window.YERLESIMLER_EK29 = [

// ───────── ① ERDEL BELGRADI — Erdel Prensliği'nin BAŞKENTİ ─────────
//
// 🔴 NİÇİN İLK: bu tek nokta Macaristan kimlik zincirinin darboğazı.
//   NOKTA → KÜNYE → RENK → VERİ → KOŞU (tahta M-0021, M-0082).
//   Erdel bugün haritada yalnız Kolozsvár'dan temsil ediliyor; başkenti
//   veride yoktu.
//
// AD SEÇİMİ — Osmanlıca ad TDV kaynaklı, modern ad parantezde:
//   TDV `belgradcik` maddesi: "Erdel'deki (Transilvanya) Erdel
//   Belgradı'ndan (Alba Julia) ayırt edilmek için Belgradcık şeklinde
//   anılmıştır." ⇒ Osmanlı kaynaklarındaki adı ERDEL BELGRADI.
//   Macarca Gyulafehérvár, Romence Alba Iulia, Almanca Karlsburg.
//   Proje geleneği (Ahılkelek (Akhalkalaki)) Osmanlıca-önce.
//
// kaynak: TDV `erdel` (HTTP 200, gövdesi okundu) + TDV `belgradcik` (ad için)
//
// ⚠️ TDV BAŞKENT DEMİYOR — bu bir TANECİKLİK boşluğu (CLAUDE.md §4):
//   `erdel` maddesi Alba Julia'yı "belli başlı şehirler" arasında sayıyor
//   ama başkent olduğunu YAZMIYOR. Başkentlik hükmü şartnameden
//   (koordinatör) geldi; ben TDV'de DOĞRULAYAMADIM ve bunu "doğruladım"
//   diye yazmıyorum. Noktanın yazılması için başkentlik şartı yok —
//   koordinat ve sahiplik dönemi yeter; başkentlik bir BAĞLAM bilgisidir.
//
// DÖNEMLER — kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı:
//   Gün UYDURULMADI; kutudaki mevcut kırılma günleri ölçüldü ve
//   kullanılanlar seçildi: 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) ·
//   1687-08-12 (4 kayıt). Üçünün de kronolojide karşılığı VAR, yani
//   Değişmez 2 açılmıyor.
//
// 🔴 VE BİR KAYNAK ÇELİŞKİSİ BİLDİRİYORUM (düzeltmiyorum, RAPOR ediyorum):
//   TDV `erdel`: "Avusturya orduları ... 1697'de Erdel'i de işgal ettiler"
//   ve "1699 Karlofça Antlaşması ile Erdel Avusturya'ya terkedildi."
//   VERİDEKİ mevcut sınır ise 1687-08-12 (II. Mohaç sonrası Habsburg
//   idaresi). Aradaki fark 10-12 YIL. §4 TDV'yi birincil sayar, ama
//   mevcut Kolozsvár kaydını DEĞİŞTİRMEK benim yetkim değil ve bu nokta
//   kardeşiyle TUTARSIZ olursa harita ikiye bölünür. ⇒ Tutarlılığı
//   seçtim, çelişkiyi koordinatöre bildirdim. Karar onun.
//
// 🔴 `d:"erdel"` YAZILMADI — KASITLI. `erdel` künyesi VAR ama RENGİ YOK
//   (tahta M-0021). CLAUDE.md §8: BOYALAR'da tanımlı olmayan kimlik
//   BOYANMAZ ⇒ yazsaydım 158 yıllık prensliği BEYAZ bırakırdım. Zincirin
//   sırası bağlayıcı: RENK önce. Bugün kardeş nokta gibi jenerik `v:`
//   (tâbi) kullanıldı; RENK 3 rengi yazdıktan SONRA bu iki `v:` dönemi
//   `s:[{d:"erdel"}]` ile değiştirilebilir.
//
// k:2 GEREKÇE — kardeş nokta Kolozsvár k:2. k:1 "eyalet merkezi" demek
//   ve Erdel bir Osmanlı EYALETİ değil, haraçgüzâr voyvodalık/prenslik
//   (TDV: "Osmanlı idaresinde muhtar bir voyvodalık"). k:1 yanlış olurdu.
{ ad:"Erdel Belgradı (Gyulafehérvár)", tur:"sehir", lat:46.0678, lon:23.5800, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},
     {f:"1687-08-12",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[],
  v:[{f:"1526-09-01",t:"1541-08-29"},
     {f:"1541-08-29",t:"1687-08-12"}] },

// ═════════ ② ERDEL'İN İKİ SAKSON ŞEHRİ ═════════
//
// Çizgi Gyulafehérvár ve kardeş nokta "Erdel (Kaloşvar)" ile BİREBİR aynı.
// Gün uydurulmadı; üçü de kutuda zaten kullanılan kırılma günleri:
// 1526-09-01 (18 kayıt) · 1541-08-29 (12 kayıt) · 1687-08-12 (4 kayıt).
// kaynak: TDV `erdel` (gövdesi okundu) — "1541'de Erdel'in Osmanlı
//   idaresinde muhtar bir voyvodalık haline geldi", "1699 Karlofça
//   Antlaşması ile Erdel Avusturya'ya terkedildi".
// ⚠️ `d:"erdel"` YAZILMADI — künyesi var, RENGİ YOK (§8: boyanmaz).
//   RENK 3 rengi yazdıktan sonra `v:` dönemleri çevrilebilir.

{ ad:"Brassó (Braşov)", tur:"sehir", lat:45.6427, lon:25.5887, g:0, k:2,
  s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},
     {f:"1687-08-12",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[],
  v:[{f:"1526-09-01",t:"1541-08-29"},
     {f:"1541-08-29",t:"1687-08-12"}] },

{ ad:"Segesvár (Sighişoara)", tur:"sehir", lat:46.2197, lon:24.7925, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-09-01",d:"macaristan"},
     {f:"1687-08-12",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"romanya-kralligi"}],
  d:[],
  v:[{f:"1526-09-01",t:"1541-08-29"},
     {f:"1541-08-29",t:"1687-08-12"}] },

// ═════════ ③ UYVAR EYALETİ — Osmanlı'nın 1663-1685 çıkıntısı ═════════
//
// 🟢 TDV `uyvar` (HTTP 200, gövdesi okundu) İKİ GÜNÜ DE VERDİ ve ikisi de
//   veride ZATEN kullanılıyor (Uyvar kaydı, yerlesimler*.js):
//     fetih   "17 Ağustos 1663'te kuşattı ... 26 Eylül'e kadar sürdü"
//             ⇒ veride 1663-09-24 (teslim günü) — DEĞİŞTİRMEDİM
//     geri    "kale ve şehir Habsburg idaresine girdi (19 Ağustos 1685)"
//             ⇒ veride 1685-08-19 — BİREBİR aynı
//   ⇒ Nitra'nın iki kırılma günü de kronolojide KARŞILIĞI OLAN günler,
//     Değişmez 2 AÇILMIYOR.
//
// 🔴 VE TDV BİR ŞEY DAHA VERDİ — Uyvar eyaletinin sancak listesi:
//   "Osmanlılar, Uyvar merkezli sancağı sekiz idarî bölgeye ayırdılar:
//    Uyvar, Narhid, Barş, KOMARAN, Hond, NİTRA, Jabokrek ve Şele."
//   Yani NİTRA bir Osmanlı sancağı ⇒ `d:` dönemi YAZILDI, k:2.

{ ad:"Nitra (Nyitra)", tur:"kale", lat:48.3069, lon:18.0864, g:0, k:2,
  s:[{f:"1281-01-01",t:"1663-09-24",d:"avusturya"},
     {f:"1685-08-19",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[{f:"1663-09-24",t:"1685-08-19"}], v:[] },

// 🔴 KOMÁROM — `d:` YAZILMADI, ve bu bir HÜKÜM, ihmal değil.
//   TDV'nin sancak listesinde "KOMARAN" geçiyor, yani Osmanlı orayı bir
//   idarî bölge olarak SAYIYOR. Ama Komárom KALESİ Osmanlı eline HİÇ
//   geçmedi — Tuna'nın iki kolu arasındaki adada, kuşatmalara dayandı.
//   ⇒ `CLAUDE.md §11`: "ATLAS SEFERİ DEĞİL TASARRUFU BOYAR." Bir kimliğin
//   İDARÎ İDDİASI ile HARİTADAKİ GÖVDESİ ayrı şeylerdir; `ace ↔ ming`
//   vakasının kara tarafı. Sancak defterinde ad geçmesi, kalenin
//   düştüğü anlamına gelmez.
//   ⚠️ ÖLÇMEDİM: kalenin hiç düşmediğini TDV'de DOĞRULAYAMADIM — `uyvar`
//   maddesi Komaran'ı yalnız liste içinde anıyor, kuşatma anlatmıyor.
//   Bu yüzden Osmanlı dönemi YAZMADIM (uydurmaktansa eksik bırakmak).
//   Karşı kanıt çıkarsa `d:[{f:"1663-09-24",t:"1685-08-19"}]` eklenir.
// kaynak: TDV `uyvar` (sancak listesi) — kale tarihçesi için bulunamadı

{ ad:"Komárom (Komárno)", tur:"kale", lat:47.7625, lon:18.1250, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// 🔴 LÉVA (Levice) — Osmanlı dönemi YAZILMADI, sebebi KAYNAK YOKLUĞU.
//   TDV `uyvar` sancak listesinde Léva GEÇMİYOR (sekiz ad sayıldı, yok).
//   Léva'nın 1663'te alınıp 1664'te geri kaybedildiğine dair yaygın bir
//   anlatı var ama TDV bunu KAPSAMIYOR ve ben akademik kaynakta
//   DOĞRULAYAMADIM ⇒ `bulunamadı`.
//   ⚠️ Ve yazmamanın ikinci bir sebebi daha var: 1664 için veride
//   kırılma günü YOK; uydurulmuş bir gün Değişmez 2'yi AÇARDI.
// kaynak: bulunamadı — TDV `uyvar` Léva'yı saymıyor, akademik kaynak aranmadı

{ ad:"Léva (Levice)", tur:"kale", lat:48.2172, lon:18.6069, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// TRENCSÉN — Vág vadisinin kuzeyi, Osmanlı hattının HİÇ ulaşmadığı derinlik.
// Çizgi Bratislava (48,15/17,11) ile birebir aynı desende.
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; desen kardeş
//   kayıtlardan (Bratislava · Kassa · Eperjes · Tokaj, hepsi 1526-08-29)

{ ad:"Trencsén (Trenčín)", tur:"kale", lat:48.8945, lon:18.0444, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"cekoslovakya"}],
  d:[], v:[] },

// ═════════ ④ HIRVAT SINIR BOYU — Osmanlı'nın DURDUĞU hat ═════════
//
// Çizgi Zagreb (45,81/15,98) ile birebir: macaristan 1526-08-29'a kadar,
// sonra avusturya, 1918-11-11'de yugoslavya. Üçünün de rengi VAR.
// ⚠️ 1526-08-29 (Mohaç günü) Habsburg tarafının kullandığı gün; Osmanlı
//   tâbi tarafı 1526-09-01 kullanıyor. Bu ayrım veride ZATEN var ve ben
//   ona uydum — kendi günümü seçmedim.

{ ad:"Varasd (Varaždin)", tur:"sehir", lat:46.3057, lon:16.3366, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// 🔴 SISAK — 1593 Sisak Muharebesi'nin yeri, Uzun Savaş'ı başlatan olay.
//   ⚠️ Osmanlı dönemi YAZILMADI: Osmanlıların 1593 yenilgisinden SONRA
//   kaleyi kısa süre tuttuğuna dair anlatı var, ama TDV'de DOĞRULAYAMADIM
//   ve veride 1593-94 için kırılma günü YOK ⇒ uydurulmuş bir gün
//   Değişmez 2'yi açardı. `bulunamadı` yazıyorum, boş bırakmıyorum.
//   📌 Kutuda 1594-09-27 ve 1595-09-02 günleri VAR ama onlar BAŞKA
//   yerlerin (Yanıkkale/Estergon) günleri — birini Sisak'a yakıştırmak
//   "gün var" ile "o günün BU olayla ilgisi var" arasındaki farkı siler.
// kaynak: bulunamadı — muharebe için TDV taranmadı, kale tarihçesi yok

{ ad:"Sisak", tur:"kale", lat:45.4658, lon:16.3783, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// 🔴 KARLOVAC — `kur:` ALANI KULLANILDI, ve sebebi ölçülmüş bir gerçek:
//   şehir 1579'da Habsburg Askerî Sınırı için SIFIRDAN kuruldu (Karlstadt).
//   1281'den beri var gibi yazmak, olmayan bir yerleşimi 298 yıl boyunca
//   haritaya koymak olurdu. `kur:` tam bunun için var (Değişmez 1
//   denetimi `t.kur`u okuyor: kuruluştan önceki günlerde sahipsizlik
//   ARANMAZ).
// kaynak: bulunamadı — TDV bu taneciği kapsamıyor; kuruluş yılı (1579)
//   Askerî Sınır literatürünün standart bilgisi, gün bilinmediği için
//   YYYY-01-01 yazıldı

{ ad:"Karlovac", tur:"kale", lat:45.4870, lon:15.5478, g:0, k:3, kur:"1579-01-01",
  s:[{f:"1579-01-01",t:"1918-11-11",d:"avusturya"},
     {f:"1918-11-11",t:"1923-10-29",d:"yugoslavya"}],
  d:[], v:[] },

// ═══════════════════ KÜME 2 — MENZİL DURAKLARI ═══════════════════
//
// Kaynak: Sak-Çetin, DergiPark 258113 — Osmanlı ana menzil güzergâhının
// durakları (şartname ①, koridor ağının 18 eksik düğümü).
//
// 🔴 YÖNTEM — ve niçin böyle: bu durakların HİÇBİRİ için kendi fetih günümü
//   seçmedim. Her biri için EN YAKIN mevcut noktaların zaman çizgisi
//   ölçüldü ve o çizgi izlendi. Sebebi Değişmez 2: uydurulmuş bir kırılma
//   günü, kronolojide karşılığı olmadığı için denetimi AÇAR. Komşunun günü
//   ise zaten maddeli.
//   📌 Ve bu bir kolaycılık değil: menzil durağı, bağlı olduğu kazanın
//   kaderini paylaşır — ayrı bir siyasî birim değildir.
//
// 🟢 ÜSKÜDAR — EMRE'NİN DOĞRUDAN TALİMATIYLA YAZILDI (15 Ağustos: "üsküdarı
//   da yaz"). Koordinatöre M-0084'te üç şık sormuştum, cevap gelmeden Emre
//   kararı verdi. Önerim de (A) yaz yönündeydi.
//
// 🟢 VE TDV ÖNERİYİ DOĞRULADI — üç noktada birden:
//   `uskudar` (HTTP 200, gövdesi okundu):
//   ① fetih  "Orhan Gazi'nin 1329'da Gebze sahilinde Pelekanon Savaşı'nda
//      ... Hereke, Pendik, Kartal ile birlikte Üsküdar'ın da Osmanlılar'ın
//      kontrolü altına girdiği tahmin edilir."
//      ⇒ 1329-06-01 — ve bu gün veride ZATEN VAR (Gebze kaydı). Değişmez 2
//        açılmıyor, gün uydurulmadı.
//      ⚠️ TDV "tahmin edilir" diyor; kesin gün YOK. Bölgesel gün kullanıldı.
//   ② menzil  "İstanbul'dan Anadolu'ya açılan yolların başlangıç ve aynı
//      şekilde Anadolu'dan İstanbul'a ulaşımın son noktası durumundaydı."
//      ⇒ Menzil ağının Anadolu kolu BURADAN başlar. Şartnamenin bu noktayı
//        istemesinin gerekçesi TDV'de birebir yazılı.
//   ③ idarî  "Koca-ili (İzmit) sancağına bağlı Gebze kazası içinde yer aldı
//      ve bir kadılık merkezi haline getirildi" — sonra mutasarrıflık,
//      sancak, nihayet kaza. ⇒ k:3.
//
// 📌 Ve ③ yöntemi de belirledi: çizgi GEBZE ile birebir aynı, çünkü Üsküdar
//   idarî olarak Gebze kazasının İÇİNDEYDİ. Kardeş seçimi bir kolaylık
//   değil, TDV'nin söylediği idarî gerçek.
//
// ⚠️ 3 KM NOTU: İstanbul noktasına 3,40 km — eşiğin ÜSTÜNDE, ihlal yok.
//   İkisi Boğaz'ın iki yakasında; İstanbul noktası (41,0080/28,9800) Avrupa
//   yakasında. Üsküdar yazılmasaydı Anadolu kolunun başlangıç düğümü
//   Avrupa yakasında görünecekti.
// kaynak: TDV `uskudar` (HTTP 200, gövdesi okundu)

{ ad:"Üsküdar", tur:"sehir", lat:41.0227, lon:29.0153, g:0, k:3,
  s:[{f:"1281-01-01",t:"1329-06-01",d:"bizans"},
     {f:"1402-07-28",t:"1403-09-01",d:"isa-celebi"},
     {f:"1403-09-01",t:"1404-03-01",d:"mehmed-celebi"},
     {f:"1404-03-01",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"mehmed-celebi"}],
  d:[{f:"1329-06-01",t:"1402-07-28"},{f:"1413-07-05",t:"1923-10-29"}], v:[] },

// ───────── ANADOLU KOLU ─────────

// İSHAKLI — Akşehir'in (25,6 km) menzil durağı, Sultandağı eteği.
// Çizgi Akşehir ile birebir: Hamidoğulları → 1381 Osmanlı → Timur sonrası
// Karaman → 1414 kesin Osmanlı.
// kaynak: bulunamadı (TDV bu taneciği kapsamıyor) — çizgi kardeş kayıt Akşehir'den
{ ad:"İshaklı", tur:"kasaba", lat:38.5439, lon:31.2447, g:0, k:4,
  s:[{f:"1281-01-01",t:"1297-01-01",d:"selcuklu"},
     {f:"1297-01-01",t:"1381-06-01",d:"hamid"},
     {f:"1402-07-28",t:"1414-06-01",d:"karaman"}],
  d:[{f:"1381-06-01",t:"1402-07-28"},{f:"1414-06-01",t:"1923-10-29"}], v:[] },

// ILGIN — Karaman beyliği toprağı, Konya (68 km) çizgisiyle aynı.
// ⚠️ Konya kaydındaki 1832-11-21 → 1833-06-30 Mısır (Kavalalı) dönemi
//   BU KAYDA YAZILMADI: Ilgın için ayrıca doğrulayamadım. Ölçmediğimi
//   ölçmedim diye yazıyorum; karşı kanıt çıkarsa eklenir.
// kaynak: bulunamadı — çizgi kardeş kayıt Konya'dan
{ ad:"Ilgın", tur:"kasaba", lat:38.2792, lon:31.9139, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},
     {f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},
     {f:"1366-01-01",t:"1397-07-01",d:"karaman"},
     {f:"1402-07-28",t:"1402-09-15",d:"timurlu"},
     {f:"1402-09-15",t:"1468-01-01",d:"karaman"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1923-10-29"}], v:[] },

// KARAPINAR — Konya-Adana yolunun ortası, Karaman (66,5 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Karaman'dan
{ ad:"Karapınar", tur:"kasaba", lat:37.7156, lon:33.5514, g:0, k:4,
  s:[{f:"1281-01-01",t:"1397-07-01",d:"karaman"},
     {f:"1402-07-28",t:"1402-09-15",d:"timurlu"},
     {f:"1402-09-15",t:"1468-01-01",d:"karaman"}],
  d:[{f:"1397-07-01",t:"1402-07-28"},{f:"1468-01-01",t:"1923-10-29"}], v:[] },

// ULUKIŞLA — Gülek Boğazı'nın kuzey ağzı, Niğde (49,7 km) çizgisiyle aynı.
// kaynak: bulunamadı — çizgi kardeş kayıt Niğde'den
{ ad:"Ulukışla", tur:"kasaba", lat:37.5461, lon:34.4869, g:0, k:4,
  s:[{f:"1281-01-01",t:"1308-01-01",d:"selcuklu"},
     {f:"1308-01-01",t:"1366-01-01",d:"ilhanli"},
     {f:"1366-01-01",t:"1468-01-01",d:"karaman"}],
  d:[{f:"1468-01-01",t:"1923-10-29"}], v:[] },

// TOSYA — Kastamonu (45,8 km) çizgisiyle aynı: Candaroğlu, 1461'de kesin Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Kastamonu'dan
{ ad:"Tosya", tur:"kasaba", lat:41.0161, lon:34.0397, g:0, k:4,
  s:[{f:"1281-01-01",t:"1309-01-01",d:"cobanogullari"},
     {f:"1309-01-01",t:"1392-11-01",d:"candar"},
     {f:"1402-07-28",t:"1461-06-01",d:"candar"}],
  d:[{f:"1392-11-01",t:"1402-07-28"},{f:"1461-06-01",t:"1923-10-29"}], v:[] },

// 🟢 KARAHİSÂR-I ŞARKÎ — TEK TDV KAYNAKLI KÜME-2 NOKTASI
// TDV `sebinkarahisar` (HTTP 200, gövdesi okundu):
//   "878'de (1473) aldı" — Fatih, Otlukbeli'nden sonra kaleyi ele geçirdi
//   "müstakil sancak haline getirildi ve Erzurum beylerbeyiliğine bağlandı"
//   Osmanlı öncesi sıra: Mengücüklüler · Eretnaoğulları · Gözleroğlu (1408) ·
//   Karakoyunlular · Akkoyunlular (1459-60)
// ⇒ k:2 (müstakil sancak, TDV kaynaklı — tahmin değil)
// ⇒ 1473-08-11 (Otlukbeli) veride ZATEN var (Erzincan kaydı) ⇒ Değişmez 2 temiz
// ⚠️ SADELEŞTİRME, ölçüm değil: TDV'nin saydığı Gözleroğlu ve Karakoyunlu
//   dönemlerinin sınır GÜNLERİ ne TDV'de ne veride var. O yüzden 1381-1473
//   arası `akkoyunlu`ya sıkıştırıldı. Bu bir tercihtir ve gerçeğin
//   tamamı DEĞİLDİR; gün bulunursa açılmalı.
{ ad:"Karahisâr-ı Şarkî (Şebinkarahisar)", tur:"kale", lat:40.2886, lon:38.4247, g:0, k:2,
  s:[{f:"1281-01-01",t:"1335-01-01",d:"ilhanli"},
     {f:"1335-01-01",t:"1381-01-01",d:"eretna"},
     {f:"1381-01-01",t:"1473-08-11",d:"akkoyunlu"}],
  d:[{f:"1473-08-11",t:"1923-10-29"}], v:[] },

// KELKİT — Erzincan (42,3 km) çizgisiyle aynı: Mutahharten sonrası Akkoyunlu,
// 1473 Otlukbeli'yle Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzincan'dan
{ ad:"Kelkit", tur:"kasaba", lat:40.1281, lon:39.4381, g:0, k:4,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},
     {f:"1348-01-01",t:"1379-01-01",d:"akkoyunlu"},
     {f:"1379-01-01",t:"1401-02-01",d:"mutahharten"},
     {f:"1402-07-28",t:"1410-01-01",d:"mutahharten"},
     {f:"1410-01-01",t:"1473-08-11",d:"akkoyunlu"}],
  d:[{f:"1401-02-01",t:"1402-07-28"},{f:"1473-08-11",t:"1923-10-29"}], v:[] },

// AŞKALE — Erzurum (48,9 km) çizgisiyle aynı: Akkoyunlu → Safevî → 1518 Osmanlı.
// kaynak: bulunamadı — çizgi kardeş kayıt Erzurum'dan
{ ad:"Aşkale", tur:"kasaba", lat:39.9214, lon:40.6939, g:0, k:4,
  s:[{f:"1281-01-01",t:"1348-01-01",d:"ilhanli"},
     {f:"1348-01-01",t:"1502-01-01",d:"akkoyunlu"},
     {f:"1502-01-01",t:"1518-01-01",d:"safevi"}],
  d:[{f:"1518-01-01",t:"1923-10-29"}], v:[] },

// ───────── RUMELİ KOLU ─────────

// SİLİVRİ — İstanbul (62 km) çizgisiyle aynı: 1453'e kadar Bizans.
// ⚠️ Silivri 1390'lar-1403 arası da Osmanlı elindeydi ve 1403 antlaşmasıyla
//   Bizans'a GERİ VERİLDİ; o iki kırılmanın günü veride YOK, uydurmadım.
//   Bugünkü çizgi 1453'ü esas alıyor — eksik ama YANLIŞ değil.
// kaynak: bulunamadı — çizgi kardeş kayıt İstanbul'dan
{ ad:"Silivri", tur:"kale", lat:41.0791, lon:28.2493, g:0, k:4,
  s:[{f:"1281-01-01",t:"1453-05-29",d:"bizans"}],
  d:[{f:"1453-05-29",t:"1923-10-29"}], v:[] },

// VİZE — Demirköy (27,9 km) çizgisiyle aynı, Balkan Savaşı Bulgar işgali dâhil.
// kaynak: bulunamadı — çizgi kardeş kayıt Demirköy'den
{ ad:"Vize", tur:"kale", lat:41.5714, lon:27.7658, g:0, k:3,
  s:[{f:"1281-01-01",t:"1361-01-01",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1913-03-26",t:"1913-07-21",d:"bulgaristan-kralligi"}],
  d:[{f:"1361-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1913-03-26"},
     {f:"1913-07-21",t:"1923-10-29"}], v:[] },

// PREVADİ (Provadia) — Şumnu (41,6 km) çizgisiyle aynı: 1878 Berlin'den sonra
// muhtar Bulgaristan (v:), 1908 istiklâlle bulgaristan.
// kaynak: bulunamadı — çizgi kardeş kayıt Şumnu'dan
{ ad:"Prevadi (Provadia)", tur:"kale", lat:43.1789, lon:27.4331, g:0, k:3,
  s:[{f:"1281-01-01",t:"1388-01-01",d:"bulgaristan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1908-10-05",t:"1923-10-29",d:"bulgaristan-kralligi"}],
  d:[{f:"1388-01-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}],
  v:[{f:"1878-07-13",t:"1908-10-05"}] },

// ───────── DOBRUCA — ve burada bir BOŞLUK ölçtüm ─────────
//
// 🔴 BULGU: Babadağı ve İshakçı'nın 25 km çevresinde HİÇ nokta yok; en
//   yakınlar Tuna'nın KARŞI kıyısında (İsmail 52 km, İbrail 72 km) ve
//   onlar Boğdan/Eflak çizgisinde — Dobruca'nın çizgisi DEĞİL.
//   ⇒ Kuzey Dobruca bu atlasta noktasız bir şerit. §2 gereği bugün
//   karşı kıyının peteğine emiliyor olmalı.
// Çizgi: 1393-09-01 (Silistre'nin günü, Bulgar Çarlığı'nın düşüşü) ile
//   Osmanlı; 1878-07-13 Berlin ile ROMANYA (Kuzey Dobruca Romanya'ya
//   verildi — güneydeki Bulgaristan'dan FARKLI, o yüzden Şumnu çizgisi
//   BURAYA UYMAZ).
// ⚠️ 1393-09-01 Dobruca'nın kendi fetih günü DEĞİL, bölgesel bir yaslama.
//   Dobruca'nın fethi için TDV'de gün ARAMADIM — ölçmedim diye yazıyorum.
// kaynak: bulunamadı — çizgi Silistre (Osmanlı başlangıcı) ve
//   1878-07-13 Berlin (Romanya'ya devir) günlerine yaslandı

{ ad:"Babadağı (Babadag)", tur:"kasaba", lat:44.8917, lon:28.7169, g:0, k:3,
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1878-07-13",t:"1923-10-29",d:"romanya"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[] },

{ ad:"İshakçı (Isaccea)", tur:"kale", lat:45.2736, lon:28.4600, g:0, k:4,
  s:[{f:"1281-01-01",t:"1393-09-01",d:"bulgaristan"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1878-07-13",t:"1923-10-29",d:"romanya"}],
  d:[{f:"1393-09-01",t:"1402-07-28"},{f:"1413-07-05",t:"1878-07-13"}], v:[] },

// YAGODİNA (Jagodina) — Kragujevac (28,4 km) çizgisiyle birebir:
// Sırp despotluğu → 1459 Osmanlı → 1717-1739 Avusturya → 1830 muhtar
// Sırbistan (v:) → 1878 istiklâl.
// kaynak: bulunamadı — çizgi kardeş kayıt Kragujevac'tan
{ ad:"Yagodina (Jagodina)",s:[{f:"1689-09-24",t:"1690-09-09",d:"avusturya"}],d:[{f:"1459-06-20",t:"1689-09-24"},{f:"1690-09-09",t:"1717-08-18"}], tur:"kasaba", lat:43.9772, lon:21.2617, g:0, k:4,
  s:[{f:"1281-01-01",t:"1439-08-27",d:"sirbistan"},
     {f:"1444-08-01",t:"1459-06-20",d:"sirp-despotlugu"},
     {f:"1717-08-18",t:"1739-09-18",d:"avusturya"},
     {f:"1878-07-13",t:"1882-03-06",d:"sirbistan-prensligi"}, {f:"1882-03-06",t:"1918-12-01",d:"sirbistan-kralligi"}, {f:"1918-12-01",t:"1923-10-29",d:"yugoslavya"}],
  d:[{f:"1439-08-27",t:"1444-08-01"},{f:"1459-06-20",t:"1717-08-18"},
     {f:"1739-09-18",t:"1830-11-08"}],
  v:[{f:"1830-11-08",t:"1878-07-13"}] },

// PRAVİŞTE (Eleftheroupoli) — Kavala (13,8 km) çizgisiyle aynı.
// ⚠️ 3 km kuralının DIŞINDA ama yakın; koordinatöre bildirildi (M-0084).
//   Ayrı bir menzil konağıdır, Kavala'nın mahallesi değil.
// kaynak: bulunamadı — çizgi kardeş kayıt Kavala'dan
{ ad:"Praviște (Eleftheroupoli)", tur:"kasaba", lat:40.9167, lon:24.2500, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1913-06-28",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1913-06-28"}], v:[] },

// LANZAKA (Lagkadas) — Selanik (16 km) çizgisine yaslandı.
// ⚠️ Selanik kaydındaki 1403-1430 arası Bizans/Venedik dönemi BU KAYDA
//   YAZILMADI: o, ŞEHRİN kendisine ait bir devirdi (1423 Venedik'e satıldı).
//   İç bölgedeki Lanzaka için aynı şeyi varsaymak için dayanağım YOK.
//   Bunun yerine iç Makedonya'nın standart Fetret deseni (Serez) kullanıldı.
//   ⇒ Bu bir TERCİH ve gerekçesi yazılı; ölçüm değil.
// kaynak: bulunamadı — çizgi Selanik (fetih ve 1912 devir) ile Serez
//   (Fetret deseni) kayıtlarından
{ ad:"Lanzaka (Lagkadas)", tur:"kasaba", lat:40.7500, lon:23.0667, g:0, k:4,
  s:[{f:"1281-01-01",t:"1387-04-09",d:"bizans"},
     {f:"1402-07-28",t:"1410-02-13",d:"suleyman-celebi"},
     {f:"1410-02-13",t:"1410-06-15",d:"musa-celebi"},
     {f:"1410-06-15",t:"1411-02-17",d:"suleyman-celebi"},
     {f:"1411-02-17",t:"1413-07-05",d:"musa-celebi"},
     {f:"1912-11-08",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1387-04-09",t:"1402-07-28"},{f:"1413-07-05",t:"1912-11-08"}], v:[] },

];

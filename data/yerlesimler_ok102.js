// =====================================================================
// ŞAM HAC YOLU (DERBÜLHAC) — TEBÜK ile MEDİNE arasındaki NOKTASIZ ŞERİT
// OPUS HAZIR KITA 102 · 1 Eylül 2026 · 1.MURAT sevkiyle (tahta M-1903)
// Kalem: parti-emrelic-0035 / H-0055
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL — `arac/girdi.py` GIRDI_DOSYALARI'na EKLENMEDİ.
//    Bağlamayı KOORDİNATÖR yapar; koşu 1 Eylül 22:51'de başladı ve girdi
//    kilitli. Bu dosya bağlı DEĞİL, koşan üretimi bozmaz.
// 🔴 AD ALANI DOSYA ADINDAN TÜRETİLDİ: data/yerlesimler_ok102.js →
//    window.YERLESIMLER_OK102 (CLAUDE.md §7: "ayrı dosya vermek, ayrı ad
//    alanı vermek değildir" — 16 Ağustos'ta beş dosya tek ad kullandı ve
//    400 kayıt görünmez olacaktı).
//
// ── ŞİKÂYET ─────────────────────────────────────────────────────────
// Emre (H-0055, ekran görüntüsü 25 Ağustos 2026 15:51):
//   "tebuk yenbu medine arasında yol nereden geçiyor durak kervansaray
//    yerleşim yok mu buralarda"
//
// ── ÖLÇÜM (şikâyet DOĞRULANDI) ──────────────────────────────────────
//   Hicaz koridoru kutusu 23,5-29,5K / 35,0-41,0D · TOPLAM 5 NOKTA:
//     Tebük 28,38 · Teymâ 27,63 · Nefud çölü 28,30 · Medine 24,47 · Yenbu 24,09
//   Tebük ile Medine arasındaki ~450 km'lik hac yolu şeridinde
//   OSMANLI SAHİPLİ TEK NOKTA YOK. Teymâ'nın 1836 öncesi sahibi yok
//   (bos:kabile), yani şeridi tutan hiçbir şey kalmıyor.
//   ⇒ CLAUDE.md §2 emilme riski: noktasız şerit en yakın peteğe düşer.
//
// ── KAYNAK — TDV ÖNCE, ve ikisi de CANLI slug, GÖVDESİ OKUNDU ───────
//   `tebuk` (HTTP 200): "965 (1558) yılında meydana gelen böyle bir
//     saldırıdan iki yıl sonra Kanûnî Sultan Süleyman'ın emriyle HAC
//     GÜZERGÂHINDA YAPILAN KALELERDEN BİRİ DE TEBÜK KALESİ İDİ."
//     ⇒ Şam hac yolunda bir KALE ZİNCİRİ olduğu TDV ile sabit.
//   `hicaz-demiryolu` (HTTP 200): güzergâhı sırasıyla sayıyor —
//     "1905'te Müdevvere'ye, bir yıl sonra MEDÂİN-İ SÂLİH'e ulaşıldı …
//      EL-ULÂ'ya 1907'de, Medine'ye 1908'de varıldı."
//     ⇒ Hat, klasik Şam hac yolunun üstünden geçtiği için bu üç ad
//       güzergâhın kendi duraklarıdır.
//   ⚠️ `ula` · `el-ula` · `medain-i-salih` · `mudevvere` · `darbulhac`
//     sluglarının DÖRDÜ DE HTTP 302 = ÖLÜ. Müstakil maddeleri YOK;
//     dayanak yukarıdaki iki CANLI maddedir. Uydurulmuş tek ad yoktur.
//
// ── 3 KM KURALI (CLAUDE.md §11) — ÖLÇÜLDÜ, hiçbiri mükerrer değil ──
//   Müdevvere        en yakın: Maan 99,3 km · Tebük 118,9 km
//   Medâin-i Sâlih   en yakın: Teymâ 110,7 km · Tebük 223,9 km
//   el-Ulâ           en yakın: Teymâ 129,0 km · Tebük 237,7 km
//   (el-Ulâ ile Medâin-i Sâlih birbirine 19 km — eşiğin altında DEĞİL;
//    ikisi ayrı yerdir: el-Ulâ vaha kasabası, Medâin-i Sâlih/el-Hicr
//    hac yolu menzili.)
//
// ── DEĞİŞMEZ 2 (sessiz toprak değişimi yok) — YENİ KIRILMA AÇMIYOR ──
//   Kullanılan dönem uçlarının HEPSİ ÇEKİRDEKTE (data/yerlesimler.js)
//   zaten var, yani hiçbiri yeni bir kırılma günü doğurmuyor:
//     1517-01-01  Maan · Kerak       1517-07-06  Mekke · Medine · Tebük
//     1918-09-27  Maan               1918-01-01  Tebük · Kerak
//   🟢 Ölçüldü, varsayılmadı: `olc3.py` her günü bütün girdi kümesinde
//      saydı (14 · 4 · … dönem ucu).
//
// ── MODELLEME KARARI — ve GEREKÇESİ (ölçüm değil, KARAR; ayrı yazıyorum)
//   Üç noktaya da EN YAKIN KOMŞUSUNUN deseni verildi:
//     Müdevvere      → Maan'ın deseni  (99 km, aynı yol, aynı idare)
//     Medâin-i Sâlih → Tebük'ün deseni (aynı hac yolu menzil zinciri)
//     el-Ulâ         → Tebük'ün deseni
//   `d:` (doğrudan) seçildi çünkü ikisi de doğrudan: Tebük d:, Maan d:.
//   ⚠️ AÇIKÇA BEYAN: 1805-1812 Vehhâbî kesintisi bu üç noktaya
//   YAZILMADI — çünkü KOMŞULARINDA DA YOK. Tebük'ün kaydında Vehhâbî
//   dönemi yoktur; komşusuna koyup Tebük'e koymamak, hac yolunda
//   olmayan bir ŞERİT üretirdi. Bu bir ihmal değil TUTARLILIK kararıdır
//   ve sorusu koordinatöre AYRI kalem olarak bildirildi ("Tebük dâhil
//   bütün Şam hac yolu menzillerine 1805-1812 yazılmalı mı?").
// =====================================================================

window.YERLESIMLER_OK102 = [

// Müdevvere — Şam hac yolunun Maan ile Tebük arasındaki menzili; Hicaz
// demiryolunun 1905'te ulaştığı durak (TDV `hicaz-demiryolu`).
{ ad:"Müdevvere", tur:"kale", lat:29.331, lon:36.001, g:0, k:4, m:"Kudüs",
  s:[{f:"1281-01-01",t:"1517-01-01",d:"memluk"},{f:"1918-09-27",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-01-01",t:"1918-09-27"}] },

// Medâin-i Sâlih (el-Hicr) — hac yolu menzili ve kalesi; demiryolu
// 1906'da buraya ulaştı (TDV `hicaz-demiryolu`).
{ ad:"Medâin-i Sâlih (el-Hicr)", tur:"kale", lat:26.786, lon:37.955, g:0, k:4, m:"Medine",
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-07-06",t:"1918-01-01"}] },

// el-Ulâ — güzergâhın en büyük vaha kasabası; demiryolu 1907'de ulaştı
// (TDV `hicaz-demiryolu`).
{ ad:"el-Ulâ", tur:"sehir", lat:26.617, lon:37.917, g:0, k:4, m:"Medine",
  s:[{f:"1281-01-01",t:"1517-07-06",d:"memluk"},{f:"1918-01-01",t:"1923-10-29",d:"hicaz"}],
  d:[{f:"1517-07-06",t:"1918-01-01"}] }

];

// ── BAĞLANDIKTAN SONRA BEKLENEN (ÖNGÖRÜ — ölçümden ÖNCE yazıldı) ────
//   ① yerleşim sayısı 2624 → 2627
//   ② `denetle.py` Değişmez 1 (sahipsiz) DEĞİŞMEZ — üçünün de her günü sahipli
//   ③ Değişmez 2 (kırılma) YENİ AÇIK ÜRETMEZ — dört gün de çekirdekte var
//   ④ Değişmez 2t (kırılmasız madde) DEĞİŞMEZ
//   ⑤ mükerrer/yakın çift uyarısı ÇIKMAZ — en yakın komşu 99 km
//   🔴 ④ ya da ⑤ tutmazsa mazeret YOK: hata bendedir, veri geri alınır.
//   ⑥ Tebük-Medine şeridinde ~450 km'lik emilme kapanır; petek sayısı
//      arttığı için ÇEVREDEKİ peteklerin alanı KÜÇÜLÜR — bu beklenen ve
//      istenen sonuçtur (Osmanlı toplam alanı belirgin DEĞİŞMEMELİ,
//      çünkü şerit zaten Osmanlı komşulara emiliyordu).

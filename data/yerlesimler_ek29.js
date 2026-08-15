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
     {f:"1918-11-11",t:"1923-10-29",d:"romanya"}],
  d:[],
  v:[{f:"1526-09-01",t:"1541-08-29"},
     {f:"1541-08-29",t:"1687-08-12"}] },

];

// =====================================================================
// SINIR VE KIYI TAMAMLAMA — Emre'nin parti-0015 ölçümünden çıkan eksikler
// KOORDİNATÖR · 11 Ağustos 2026
//
// 🔴 EMRE'NİN YETKİSİ (parti-0015/H-0004 ve H-0005, birebir):
//   "bu sınır ilçelere ve kasabalara dahi köylere **3. sınıf özelliği verip
//    onlara bölge atfedebilirsin** ve tüm türkiye haritasını bu sınır il
//    ilçe kasaba ve köylerine göre belirleyip tam doğru bir harita ortaya
//    çıkarabilirsin"
//   "sınırın ortasından geçtiği hepsini 3. sınıf ilan edip ona göre sınırı
//    düzgün çizmelisin"
//
// ⇒ Bu dosyanın noktaları `k:3` — `k:4` DEĞİL. Sebebi ÖLÇÜLDÜ:
//      k:4 tavanı 140 km · k:3 tavanı 280 km · k:2 420 · k:1 700
//   Sınır noktaları `k:4` yazılınca komşularına YENİLİYOR ve sınırı
//   tutamıyorlar. Emre'nin verdiği yetki tam bu kusuru kapatıyor.
//
// EKSİK OLDUĞU ÖLÇÜLENLER (1923-10-01 taraması):
//   Artvin YOK · Hopa YOK · Mersin YOK · İskenderun YOK
//   ⇒ Emre: "artvin hopa rize filan bizde imiş gibi görünmüyor sanki"
//   ⇒ Emre: "çukurova ve iskenderun olması lazım, iskenderun körfezi
//            dışarıda kalmış"
//
// ⚠️ İSKENDERUN 1923'te TÜRKİYE DEĞİL — Fransız Suriye mandası (Hatay).
//    Emre'nin kendi uyarısı: "1923'te hatay hariç idi." Nokta ekleniyor
//    ki KÖRFEZİN İKİ YAKASI da temsil edilsin, ama sahibi FRANSA.
//
// ⚠️ KAYNAK: konumlar standart coğrafya ±1-2 km · TEK TEK DOĞRULANMADI.
//    1923 sahipliği: 1921 Kars (doğu) ve 1921 Ankara İtilâfnamesi (güney).
// =====================================================================
// 🔴 ZATEN VAR OLDUGU icin CIKARILANLAR (ad cakismasi
//    nobetcisi yakaladi, VERI-YAPISI.md: ad BENZERSIZ):
//    Silifke
window.YERLESIMLER_EK27 = [

// ───────── DOĞU KARADENİZ · Gürcistan sınırı ─────────
{ ad:"Artvin", tur:"sehir", lat:41.183, lon:41.822, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

{ ad:"Hopa", tur:"liman", lat:41.390, lon:41.427, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

// Sarp — sınırın Karadeniz'e kavuştuğu nokta (Türkiye yakası)
{ ad:"Sarp", tur:"koy", lat:41.520, lon:41.545, g:0, k:3, m:"Erzurum",
  s:[{f:"1281-01-01",t:"1551-01-01",d:"gurcistan"},{f:"1878-03-03",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1921-10-13",d:"sovyet-rusya"},{f:"1921-10-13",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1551-01-01",t:"1878-03-03"}], v:[] },

// ───────── ÇUKUROVA · Akdeniz kıyısı ─────────
{ ad:"Mersin",neden:"d: 1352-01-01'de başlıyordu — 164 yıllık hayalet Osmanlı. ramazanoglu dönemi (1352 → 1516-08-24) eklendi, d: Mercidâbık'a çekildi. Aynı düzeltme yerlesimler_ek27.js:51'e yazılmış ama MÜKERRER `s:`/`d:` yüzünden JS'te sonuncusu kazanıyor ve düzeltme motora hiç girmiyordu.",kaynak:"TDV `ramazanogullari`: beylik 753'te (1352) kuruldu, sahası \"başta Adana olmak üzere Çukurova yöresi\" — Tarsus, Sîs, Ayas, Misis dâhil; Osmanlı hâkimiyeti \"Mercidâbık zaferi (25 Receb 922 / 24 Ağustos 1516)\" sonrası kesinleşti. Veri tarafı: Tarsus ve Adana kayıtları bu zinciri zaten taşıyor (birebir aynı günler).", tur:"liman", lat:36.800, lon:34.633, g:0, k:3, m:"Adana",
  // 🔴 MÜKERRER `s:`/`d:` ANAHTARI KALDIRILDI — 10 Eylül 2026.
  // Bu obje AYNI ALANI İKİ KEZ taşıyordu; JS sonuncuyu alır ve birincisi
  // SESSİZCE ÖLÜR. Üç işçi (İZ-YOK DENETİM A·B·C) bağımsız olarak
  // buldu. Kaybın bedeli İKİ KUSURDU: (1) `ramazanoglu` dönemi
  // hiçbir kopyada yoktu ⇒ 164 YILLIK HAYALET OSMANLI; (2) birinci
  // `s:` `tbmm-turkiye` taşıyordu, ikincisi onu DÜŞÜRDÜ ⇒ 1921-1923
  // arası Mersin OSMANLI boyanıyordu.
  // ⚠️ `ramazanoglu` günü ADANA ve TARSUS'tan devralındı (1516-08-24,
  //   Mercidâbık — aynı TDV cümlesi, `D084`). Ama Fransız/TBMM zinciri
  //   Mersin'in KENDİ hâliyle kaldı: Adana/Tarsus Fransız işgalini HİÇ
  //   modellemiyor, Mersin modelliyor ve bu TARİHEN DOĞRU (Çukurova'da
  //   Fransız işgali 1921 Ankara İtilâfnâmesi'ne kadar sürdü).
  //   ⇒ Komşunun gününü almak, komşunun MODELİNİ almak DEĞİLDİR.
  // 🔴 `kur:`DAN ÖNCEKİ DÖNEMLER BUDANDI — `Değişmez 5` yakaladı:
  //    "Mersin kur:1671-01-01 ilk dönem 1281-01-01 — 390 YIL ÖNCE"
  // İki çare ALTERNATİFTİ, tamamlayıcı DEĞİL:
  //   `ramazanoglu` dönemi  → 1352-1516 arası RAMAZANOĞLU boyanır
  //   `kur:1671`            → 1671'den ÖNCE PETEK HİÇ YOKTUR
  // Emre'nin 2 Eylül kararı daha temiz çözüyor: hayalet yalnız RENK
  // DEĞİŞTİRMİYOR, ORTADAN KALKIYOR. Ve `petek_epok()` zaten
  // `kur:`tan önceki peteği bastırıyor ⇒ o dönemler ÖLÜ VERİ.
  // ⚠️ Üç işçinin "ramazanoglu eksik" bulgusu ÇÜRÜMÜYOR — `kur:`
  //   YOKKEN doğruydu. `kur:` inince aynı kusurun çaresi değişti.
  // Toprak 1671'den önce komşunun (Tarsus/Adana) peteğine düşer —
  // `§2` emilme kuralı, ve burada DOĞRU: Mersin YOKTU.
  s:[{f:"1918-10-30",t:"1921-10-20",d:"fransa-cumhuriyet"},{f:"1921-10-20",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1671-01-01",t:"1918-10-30"}],
  // 🟢 EMRE'NİN KENDİ KARARI, 2 Eylül 2026 (soru ⑧, paket 0019/H-0008):
  //    "(a) 1671 — Evliya Çelebi. Daha erken, tek kaynaklı."
  // Karar VERİLMİŞTİ ama veriye HİÇ İNMEMİŞTİ — sekiz gün boyunca
  // `CEVAP.json` onu "cozuldu" diye taşıdı.
  kur:"1671-01-01", v:[] },

// ───────── İSKENDERUN KÖRFEZİ · 1923'te FRANSIZ mandası ─────────
// 🔴 HATAY — Emre'nin uyarısı: 1923'te Türkiye DEĞİL. Türkiye'ye katılışı
//    1939. Nokta ekleniyor ki körfezin GÜNEY yakası temsil edilsin ve
//    petek Çukurova'dan sarkmasın.
{ ad:"İskenderun",kaynak:"TDV, madde: suriye — Han Meysalun (Temmuz 1920) ile Faysal'ın Şam hükûmetine son verilip Fransız manda idaresinin kurulması. Gün: 24 Temmuz 1920 (Meysalun). Künye `suriye-lubnan-mandasi` penceresi 1920-07-01 AY hassasiyetlidir (künyenin kendi beyanı); veri kaynaklı GÜNÜ kullanır.", tur:"liman", lat:36.587, lon:36.173, g:0, k:3, m:"Halep",
  s:[{f:"1281-01-01",t:"1516-08-24",d:"memluk"},{f:"1918-10-30",t:"1920-07-24",d:"fransa-cumhuriyet"},{f:"1920-07-24",t:"1923-10-29",d:"suriye-lubnan-mandasi"}],
  d:[{f:"1516-08-24",t:"1918-10-30"}], v:[] },

// 🔴 PAYAS BURADAN DUSURULDU (12 Agustos 2026, koordinator).
// Kayit YANLISTI: Fransiz donemini 1923-10-29'a kadar goturuyordu.
// VERI SINIR 2 oturumu BIRINCIL KAYNAKTAN dogruladi — UK Cmd.1556 /
// LNTS Vol.54 pp.178-193, Ankara Itilafnamesi Md.8: sinir
// "immediately south of the locality of Payas" noktasindan basliyor
// => Payas hattin KUZEYINDE, yani TURKIYE tarafinda.
// DUZELTILMIS kayit: data/yerlesimler_ek28.js
// (silinmedi, TASINDI — mukerrer nokta olmasin diye burasi bosaltildi)

];

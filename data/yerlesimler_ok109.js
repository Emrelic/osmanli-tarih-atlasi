// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YERLESIMLER_OK109 — 1923 ÇIPASI, GÜNEY KOLU · İMÂDİYE
// window.YERLESIMLER_OK109   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 109 · 2 Eylül 2026 · koordinatör 1.MURAT
// ═══════════════════════════════════════════════════════════════════════
//
// ── NİÇİN YAZILDI — ve niçin SAPMAYA RAĞMEN yazıldı ────────────────────
// TDV `musul--irak` (HTTP 200, gövde okundu, 48.940 karakter) Musul
// sancağının kazalarını ADIYLA sayıyor (1892-1910 taksimatı):
//     "Musul sancağının kazaları Akra, Zibar, Dıhok, Zaho, Sincar ve
//      İmâdiye'dir."
//   altı kazanın DÖRDÜ atlasta VAR : Akra · Duhok · Zaho · Sincar
//   İKİSİ YOKTU                    : İMÂDİYE · ZİBAR
//
// 🔴 VE BU KAYIT BİR VEKİL ÖLÇÜTÜ KÖTÜLEŞTİRİYOR — bilerek.
//   Simülasyon (kendi uygulamam, önce `denetim/olc_sinir_sapma.py`nin
//   tabanını 0,19 km farkla yeniden üreterek doğrulandı):
//       Çölemerik↔Duhok kesimi     en kötü  +12,5 → −13,1 km  (işaret döndü)
//                                  ortanca    8,7 →   9,9 km  (kötüleşti)
//   Sebep Doğu kolunun ölçtüğü teorem: `sapma=|dB−dA|/2` olduğu için TEK
//   TARAFLI ekleme bisektörü karşı yakaya iter. İmâdiye sınıra 18 km,
//   karşısındaki Osmanlı noktası (Çölemerik) 35 km. Simetrik eş arandı
//   (Çığlı/Ashitha · Andaç · Ortaköy) — üçünün de TDV dayanağı YOK.
//
// 🟢 KOORDİNATÖRÜN HÜKMÜ (2 Eylül): YAZ. Gerekçe:
//   *"Sapma bir VEKİL ölçüt; atlasın amacı değil, amacın göstergesi.
//     Vekili iyileştirmek için gerçek veriyi dışarıda bırakmak,
//     göstergeyi amaç sanmaktır."*
//   ⇒ Ölçütün yanına şerh düşülecek, veri kısılmayacak.
//
// ── BEDELSİZ OLDUĞU ÖLÇÜLDÜ ───────────────────────────────────────────
//   3 km mükerrer sınavı   🟢 en yakın kayıt Duhok 50,8 km
//   ad çakışması           🟢 yok
//   yeni kırılma günü      🟢 YOK — 1516-08-24 ve 1918-11-08 ikisi de
//                             kardeş kazaların kullandığı, külliyatta VAR
//   renk                   🟢 `ingiltere` BOYALAR'da var
//   `Değişmez 4`           🟢 ingiltere künyesi 1923'te canlı
//
// ── KOORDİNAT REHBERDEN, TAHMİN DEĞİL ─────────────────────────────────
//   GeoNames allCountries (CC BY 4.0, 31 Ağustos 2026), kayıt 99611:
//       37.09214 / 43.48769 · feature class P · kod PPLA2 (ilçe merkezi)
//       alternatenames: Amêdî · Amedi · Amadia · ‘Amādīya · Amādīyeh · ئامێدى
//   ⚠️ Dört ondalığa yuvarlandı — kardeş kayıtların (Akra 36.7408,
//     Zaho 37.1447) hassasiyetiyle aynı olsun diye.
//   ⚠️ TARİHÎ AD: TDV maddesi onu **İmâdiye** diye yazıyor; `ad:` alanı
//     bu yüzden bugünkü "Amêdî/Amadiya" değil TDV'nin yazımıdır. Parantezli
//     modern karşılık `VERI-YAPISI.md`nin izin verdiği biçimde eklendi.
//
// ── DÖNEM DESENİ KARDEŞ KAZALARDAN KOPYALANDI, UYDURULMADI ────────────
//   Akra · Duhok · Zaho · Sincar · Rewândiz — beşi de BİREBİR aynı deseni
//   taşıyor (`k:4`, `m:"Musul"`, `d: 1516-08-24 → 1918-11-08 y:"antlasma"`,
//   ve altı halkalı `s:` zinciri). İmâdiye aynı sancağın kazası olduğu için
//   aynı desen kullanıldı; ayrı bir tarih İCAT EDİLMEDİ.
//   📌 Kürt emirliği tarafı: TDV `musul--irak` "1839'da İmâdiye'deki
//     Behdiyan hâkimliklerine son verildi" diyor. Emirlik dönemi `v:` (tâbi)
//     olarak yazılABİLİRDİ — ama atlas Bitlis'i ve Çölemerik'i de düz `d:`
//     yazıyor (ölçtüm), yani proje Kürt emirliklerini tâbi olarak
//     MODELLEMİYOR. Kendi başıma yeni bir modelleme kararı vermedim;
//     var olan sözleşmeye uydum.
//
// ── 1918-11-08 GÜNÜ TDV İLE UYUMLU — ölçtüm, değiştirmedim ────────────
//   TDV `musul--irak`: "İngilizler … 8 (veya 10) Kasım 1918'de Musul'a
//   girdi. 15 Kasım'da buradaki Türk kuvvetleri geri çekilmek zorunda
//   kaldı." Verideki gün (1918-11-08) kaynakla örtüşüyor.
//
// 🔴 BAĞLANMADI: `arac/girdi.py` koşuyla kilitli. Dosya bağlanmaya hazır.
// ═══════════════════════════════════════════════════════════════════════

window.YERLESIMLER_OK109 = [

  {
    ad: "İmâdiye (Amêdî)",
    tur: "sehir",
    lat: 37.0921, lon: 43.4877,
    g: 0, k: 4, m: "Musul",
    d: [{ f: "1516-08-24", t: "1918-11-08", y: "antlasma" }],
    s: [
      { f: "1281-01-01", t: "1335-12-01", d: "ilhanli" },
      { f: "1335-12-01", t: "1411-01-01", d: "celayirli" },
      { f: "1411-01-01", t: "1469-01-01", d: "karakoyunlu" },
      { f: "1469-01-01", t: "1508-01-01", d: "akkoyunlu" },
      { f: "1508-01-01", t: "1516-08-24", d: "safevi" },
      { f: "1918-11-08", t: "1923-10-29", d: "ingiltere" }
    ],
    v: [],
    kaynak: "TDV `musul--irak` (HTTP 200, gövde okundu): \"1892-1910 yılları arasında Musul vilâyeti Musul, Kerkük ve Süleymaniye sancaklarından oluşmaktaydı. Musul sancağının kazaları Akra, Zibar, Dıhok, Zaho, Sincar ve İmâdiye'dir.\" — kaza merkezi olduğu ve 1923'te var olduğu buradan. Devir günü aynı maddeden: \"İngilizler … 8 (veya 10) Kasım 1918'de Musul'a girdi.\" KOORDİNAT: GeoNames allCountries (CC BY 4.0, 31 Ağu 2026), kayıt 99611, 37.09214/43.48769, PPLA2 — tahmin DEĞİL, rehberden. ⚠️ Müstakil TDV maddesi YOK: `imadiye` · `amadiye` · `imadiyye` · `amediye` sluglarının dördü de 302 (ÖLÜ); kapsayıcı madde kullanıldı (`CLAUDE.md §4`: dar slug tutmazsa kapsayıcı maddeyi dene).",
    neden: "Musul sancağının altı kazasından biri ve atlasta yoktu; kardeş dördü (Akra · Duhok · Zaho · Sincar) zaten kayıtlıydı. Toprağı bugüne kadar Duhok ve Akra peteklerine emiliyordu — ikisi de `ingiltere` olduğu için RENK HATASI üretmiyordu, yani bu kayıt bir boyama kusurunu değil bir VERİ EKSİĞİNİ kapatıyor. ⚠️ Sınır sapması ölçütünü KÖTÜLEŞTİRİYOR (Çölemerik↔Duhok kesiminde ortanca 8,7 → 9,9 km); koordinatörün 2 Eylül hükmüyle bilerek yazıldı: vekil ölçüt, veriyi yönetmez."
  }

];

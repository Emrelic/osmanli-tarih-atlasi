// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_OK109 — parti-emrelic-0039/H-0008, "Avusturya böyle mi olmalı?"
// window.YER_YAMA_OK109   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: OPUS HAZIR KITA 109 · 2 Eylül 2026 · koordinatör 1.MURAT (M-1903)
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴🔴 BU DOSYA HENÜZ UYGULANMAMALI — İKİ ÖN ŞARTI VAR, İKİSİ DE BENDE DEĞİL.
//   ① `avusturya-cumhuriyet` kimliğinin RENGİ YOK (`arac/renkler.py` BOYALAR).
//      Renksiz kimlik BOYANMAZ (`CLAUDE.md §8`) ⇒ uygulanırsa Viyana ve Graz'ın
//      peteği harita DELİĞİ olur. Bugünkü kusur bir HAYALET; renk gelmeden
//      uygulamak onu bir DELİĞE çevirir — takas değil, kötüleştirme.
//   ② `devletler.js`te `avusturya-cumhuriyet` künyesi f:"1918-11-12" diyor;
//      bu yama f:"1918-11-11" yazıyor (aşağıda gerekçesi). Künye 1918-11-11'e
//      çekilmezse `Değişmez 4d` (dönem künyenin DOĞUMUNDAN önce başlıyor)
//      +2 olur ve BEKLENEN_ONCE = 468 tavanı 470'e çıkar, yani DENETİM KIRILIR.
//   ⇒ İkisi de tek satırlık düzeltme ve ikisi de koordinatörün dosyalarında.
//     İkisi inmeden `_sahiplik_uygula.py --yaz` KOŞTURULMAMALI.
//
// ── TEŞHİS (kendi ölçümüm, devralmadım) ────────────────────────────────
// Paket H-0008 "avusturya 1923'te yalnız 2 nokta (Viyana · Graz), SEYREK"
// diyordu. Seyreklik doğru, ama ALTINDA yazılmamış bir kusur var:
//
//   veride `avusturya` kimliği 142 dönem taşıyor.
//   `devletler.js`te `id:"avusturya"` diye bir künye YOK — kimlik `harita:`
//   anahtarı üzerinden çözülüyor ve şuraya düşüyor:
//        id: habsburg   "Habsburg Avusturya"   1526-08-29 → 1918-11-11
//   habsburg'un ÖLÜMÜNÜ aşan `avusturya` dönemi (ölçüldü): 4
//        Viyana                1918-11-11 → 1923-10-29     ← 4,9 YIL
//        Graz                  1918-11-11 → 1923-10-29     ← 4,9 YIL
//        Suçava · Çernovitz    → 1918-11-28  (17 gün; 0a8ed64'ün kasıtlı payı)
//   Doğru künye VERİDE ZATEN VAR ve kullanılmıyor:
//        id: avusturya-cumhuriyet  1918-11-12 → 1923-10-29   veride 0 dönem
//
// 🟢 VE İŞİN YARISI ZATEN YAPILMIŞ: Viyana ile Graz'ın `s:` dizisi 1918-11-11'de
//   ZATEN İKİYE BÖLÜNMÜŞ — ama iki parça da `d:"avusturya"` taşıyor. Viyana'nın
//   `kd:` (kademe) dizisi de aynı günde bölünmüş. Yani bölme yapılmış, KİMLİK
//   DEĞİŞTİRİLMEMİŞ. Bu yamanın tek yaptığı ikinci parçanın `d:`sini yazmak.
//   ⇒ Yeni kırılma günü DOĞMUYOR (1918-11-11 veride zaten 188 kez kırılma),
//     boşluk DOĞMUYOR, `Değişmez 2s` sayacı DEĞİŞMİYOR.
//
// ── NİÇİN HİÇBİR DENETİM ÖTMEDİ ────────────────────────────────────────
// `Değişmez 4` künyenin ömrüne bakar; ama `avusturya` künyesi KENDİ ADIYLA
// yok. Kimliği yalnız `id:` üzerinden çözen bir ölçüm bu çifti HİÇ KURMAZ —
// `CLAUDE.md`nin "ölçüm doğru, EVREN DAR" ailesinin künye tarafı. Ben de ilk
// ölçümümde bu tuzağa düştüm ("27 künyesiz kimlik" dedim); `id ∪ harita`
// evreninde yeniden ölçünce gerçek sayı 5 çıktı ve `avusturya` onlardan biri
// DEĞİLDİ — habsburg'a çözülüyordu. Hükmü düzelttim, ilk sayıyı raporlamadım.
//
// ── 🔴 KAYNAK ÇELİŞKİSİ — KARAR VERMEDİM, BİLDİRDİM (§7.1 ⑥) ───────────
// TDV `avusturya` (HTTP 200, gövde OKUNDU — 68.334 karakter, boilerplate
// DEĞİL) sınır gününü projenin künyesinden BAŞKA veriyor:
//   TDV: "Avusturya Almanları da 30 Ekim'de Avusturya Cumhuriyeti'ni kurdular."
//   TDV: "İmparatorun 18 Kasım'da devlet işlerinden çekildiğini açıklamasıyla
//         imparatorlukla birlikte hânedan da tarihe karışmış oldu."
//   proje künyesi: habsburg t:1918-11-11 · avusturya-cumhuriyet f:1918-11-12
// ⇒ ÜÇ aday gün var: 1918-10-30 (TDV, cumhuriyetin kuruluşu) · 1918-11-11/12
//   (projenin bugünkü sınırı) · 1918-11-18 (TDV, hânedanın sonu).
//   `CLAUDE.md §4` TDV'yi esas alır; ama bu gün değişikliği YALNIZ Viyana ve
//   Graz'ı değil `avusturya` kimliğinin BÜTÜN 142 dönemini ve `macaristan-*`
//   künyelerini de ilgilendirir ⇒ TEK BAŞIMA KARAR VERMİYORUM.
// 📌 Bu yamanın yazdığı KİMLİK düzeltmesi üç adayın ÜÇÜNDE DE doğrudur;
//   tartışmalı olan yalnız sınır GÜNÜ. O yüzden yama günü DEĞİŞTİRMİYOR,
//   veride hâlihazırda duran 1918-11-11 sınırını AYNEN kullanıyor.
//
// ── NE YAZILMADI ───────────────────────────────────────────────────────
// Paketin "Linz · Salzburg · Innsbruck · Klagenfurt yok" seyrekliği bu
// dosyada YOK: onlar YENİ NOKTA ister, yama değil, ve yeni nokta yazmak
// bana verilmedi. Ölçüldü, bildirildi, yazılmadı.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_OK109 = [

  {
    ad: "Viyana",
    s: [
      { f: "1281-01-01", t: "1918-11-11", d: "avusturya" },
      { f: "1918-11-11", t: "1923-10-29", d: "avusturya-cumhuriyet" }
    ],
    d2_gerek: "İKİ ÖN ŞART: ① `avusturya-cumhuriyet` rengi `renkler.py` BOYALAR'a girmeli (yoksa petek BOYANMAZ — hayaleti DELİĞE çevirir). ② `devletler.js` `avusturya-cumhuriyet` künyesi f:1918-11-12 → 1918-11-11 çekilmeli (yoksa Değişmez 4d 468 tavanını 470'e çıkarır). İkisi de koordinatörün dosyasında; ikisi inmeden UYGULAMA.",
    kaynak: "TDV `avusturya` (gövde okundu): 'Avusturya Almanları da 30 Ekim'de Avusturya Cumhuriyeti'ni kurdular… İmparatorun 18 Kasım'da devlet işlerinden çekildiğini açıklamasıyla imparatorlukla birlikte hânedan da tarihe karışmış oldu.' Sınır günü TDV ile künye arasında ÇELİŞİYOR (bkz. dosya başı); yama veride hâlihazırda duran 1918-11-11 sınırını kullanır, gün DEĞİŞTİRMEZ.",
    neden: "İkinci dönem `avusturya` kimliğini taşıyordu; o kimlik `harita:` üzerinden `habsburg` künyesine (1526-08-29 → 1918-11-11) çözülüyor ⇒ 4,9 yıllık hayalet. Doğru künye `avusturya-cumhuriyet` (1918-11-12 → 1923-10-29) veride hiç kullanılmıyordu. Bölme ZATEN vardı, yalnız kimlik yazılmadı."
  },

  {
    ad: "Graz",
    s: [
      { f: "1281-01-01", t: "1918-11-11", d: "avusturya" },
      { f: "1918-11-11", t: "1923-10-29", d: "avusturya-cumhuriyet" }
    ],
    d2_gerek: "Viyana ile AYNI iki ön şart — renk + künye günü. İkisi inmeden UYGULAMA.",
    kaynak: "TDV `avusturya` (gövde okundu) — Viyana ile birebir aynı gerekçe ve aynı iki dönem; TDV maddesi Graz'ı Avusturya Cumhuriyeti'nin başlıca şehirleri arasında sayıyor: 'başlıca şehirleri ise başkent Viyana, Graz, Linz, Salzburg…'",
    neden: "Viyana ile birebir aynı kusur, aynı iki dönem, aynı sınır günü."
  }

];

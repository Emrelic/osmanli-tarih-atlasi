// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_IRAN — İran koridoru dönem düzeltmeleri
// window.YER_YAMA_IRAN   (§7: dosya adındaki ayırt edici parça değişken adında da)
// Oturum: YAMA KURTARMA · 28 Ağustos 2026 · koordinatör ORHANGAZİ (M-1440)
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 BU DOSYA 28 AĞUSTOS'A KADAR **NESNE**YDİ VE HİÇBİR ALET OKUMUYORDU.
//    `arac/yama_uygula.js` yalnız DİZİ olan pencere değişkenlerini topluyor
//    (`if (!Array.isArray(v)) continue;`). Nesne sarmalındaki iki gerçek
//    kayıt bu yüzden haritaya HİÇ inmedi ve hiçbir denetim ötmedi —
//    denetimler "yama UYGULANDI mı" diye sorar, "yama OKUNDU mu" diye sormaz.
//    ⇒ Dizi hâline getirildi. Ölçüm ve rapor `denetim/BULGU-YAMA-KURTARMA.md`ye
//      taşındı (M-1422: bir dosya ya yama taşır ya rapor, ikisini birden değil).
//
// ═══════════ KIRILMA GÜNÜ DİSİPLİNİ — Değişmez 2 ölçüldü ═══════════
// Kullanılan DÖRT günün DÖRDÜ de külliyatta ZATEN VAR ve konusu da doğru
// (ölçüm: en yakın kronoloji maddesine uzaklık):
//    1585-09-25  ±0 gün  "Tebriz'in fethi"
//    1603-10-21  ±0 gün  "Şah Abbas'ın karşı taarruzu — Tebriz'in kaybı"
//    1724-09-28  ±0 gün  "Revan'ın yeniden fethi"
//    1730-08-12  ±0 gün  "Nâdir'in taarruzu: Tebriz, Nahçıvan, Hemedan,
//                          Kirmanşah, Merâga ve Kasr-ı Şîrîn'in kaybı"
// 🟢 YENİ GÜN DOĞURULMADI — sıfır.
//
// 🔴 VE İKİ GÜN ÖZELLİKLE REDDEDİLDİ: dosyanın ESKİ hâli Hoy için
//    `1724-01-01 → 1739-01-01` yazıyordu. Ölçüldü:
//       1724-01-01 → en yakın kronoloji maddesi  ±92 gün
//       1739-01-01 → en yakın kronoloji maddesi ±151 gün
//    Değişmez 2 ölçütü ±30 gün ve OSMANLI açık tavanı 0. O iki gün
//    yazılsaydı **iki yeni AÇIK kırılma** doğar, denetim kırılır, yayın durur.
//    ⇒ Gün seçimi değişti, GEREKÇESİ aşağıda kayıtta duruyor.
//
// ═══════════ DESEN — `s:` bölünmez, `d:` ÜSTÜNE yazılır ═══════════
// Merâga veride bugün şöyle duruyor (ölçüldü, `arac/_yer_ara.py`):
//    d: [{1585-09-25→1603-10-21}, {1725-08-04→1730-08-12}]
//    s: [... safevi 1501-07-01 → 1736-03-08 ...]     ← BÖLÜNMEMİŞ
// Yani `s:` zinciri dokunulmadan kalır, `d:` onun üstüne biner ve motor
// Osmanlı'yı kazandırır. Aşağıdaki iki kayıt bu deseni birebir izler.
//
// ⚠️ `d:` alanı YERİNE GEÇER, EKLEMEZ — mevcut dönem(ler) de yazıldı.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_IRAN = [

  {
    ad: "Mîyandoab",
    // MEVCUT: d:[] (boş) · s: safevi 1501-07-01 → 1736-03-08 (bölünmemiş)
    d: [
      { f: "1585-09-25", t: "1603-10-21" }
    ],
    kaynak: "TDV `tebriz` — 1593 idarî taksimi gövdesi okundu: Tebriz eyaleti " +
            "livâları arasında Merâga, Merâga'nın nahiyeleri arasında " +
            "\"Miyândûvab\". TDV `meraga`: şehir 993 (1585) yılında " +
            "Osmanlılar'ın eline geçti, Osmanlı sisteminde SANCAK.",
    neden: "Nahiye, bağlı olduğu sancak merkezi Merâga ile aynı günleri alır. " +
           "🔴 Bu bir KAYNAK GÜNÜ DEĞİL, TUTARLILIK seçimidir ve açıkça " +
           "yazılıyor: başka bir gün yazmak nahiyeyi sancağından koparıp " +
           "yapay bir ada üretirdi (Değişmez 7). İki gün de külliyatta ±0. " +
           "🟡 Merâga'nın İKİNCİ dönemi (1725-08-04→1730-08-12) Mîyandoab'a " +
           "YAZILMADI — TDV o dönem için nahiyeyi adıyla anmıyor; aynı deseni " +
           "uygulamak savunulabilir ama KAYNAKSIZ olurdu."
  },

  {
    ad: "Hoy",
    // MEVCUT: d:[{1585-09-25→1603-10-21}] — o dönem KORUNDU, altına ikincisi eklendi
    d: [
      { f: "1585-09-25", t: "1603-10-21" },
      { f: "1724-09-28", t: "1730-08-12" }
    ],
    kaynak: "TDV `hoy` gövdesi: \"1724 yılında III. Ahmed döneminde Hoy tekrar " +
            "Osmanlı hâkimiyeti altına girdi\"; madde on beş yıl Osmanlı " +
            "kontrolünde kaldığını ve 1739'da İran'a döndüğünü söylüyor.",
    neden: "🔴 GÜN SEÇİMİ TDV'NİN YILINDAN AYRILIYOR VE SEBEBİ ÖLÇÜLDÜ. " +
           "TDV yıl veriyor, gün vermiyor. Ham `1724-01-01`/`1739-01-01` " +
           "yazılsaydı en yakın kronoloji maddesi ±92 ve ±151 gün uzakta " +
           "kalırdı; Değişmez 2 ölçütü ±30 ve Osmanlı açık tavanı 0 ⇒ İKİ " +
           "YENİ AÇIK doğardı. Seçilenler: BAŞLANGIÇ 1724-09-28 " +
           "(\"Revan'ın yeniden fethi\", ±0) — TDV'nin verdiği YILI koruyor " +
           "ve aynı seferin günü. BİTİŞ 1730-08-12 (\"Nâdir'in taarruzu\", ±0) " +
           "— atlasın Tebriz · Ahar · Merâga · Nahçıvan için ZATEN kullandığı " +
           "gün, yani bütün Azerbaycan aynı gün elden çıkıyor. " +
           "🟡 KOORDİNATÖRE: TDV'nin \"1739\" ifadesi bu pencereye sığmıyor " +
           "(6 yıl yazıldı, TDV 15 yıl diyor). Külliyatta ±30 gün içinde " +
           "1739 günü YOK; alternatif bitiş günleri ve gerekçeleri " +
           "`denetim/BULGU-YAMA-KURTARMA.md §2`de ölçülmüş hâlde duruyor. " +
           "Uzatmak istiyorsan tek satır: 1735-06-19 (Baghavard bozgunu, ±0) " +
           "ya da 1736-09-01 (İstanbul Antlaşması, ±0)."
  }

];

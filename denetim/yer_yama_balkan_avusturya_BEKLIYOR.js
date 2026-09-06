// -*- coding: utf-8 -*-
// YER_YAMA_BALKAN_AVUSTURYA — BALKAN-DOĞU AVRUPA oturumu, 6 Eylül 2026
//
// 🔴🔴 İNDİRME — RENK BEKLİYOR. Bu dosya ANA YAMADAN AYRI tutuldu ki
//    yanlışlıkla birlikte uygulanmasın.
//    `avusturya-cumhuriyet` künyesi VAR (1918-11-12 → 1923-10-29) ama
//    `arac/renkler.py` BOYALAR'da anahtarı YOK ⇒ gövde ÇİZİLMEZ
//    (`CLAUDE.md §8`: BOYALAR'da tanımlı değilse bölge boyanmaz).
//
// ═══════════ ŞARTNAMEYİ DÜZELTİYORUM ═══════════
// Şartname bunu "ATIL KÜNYE" kalemi diye veriyor. Ölçtüm — kalem bir
// ATALET değil bir HAYALET:
//   `avusturya` bir künye `id`si DEĞİL; `habsburg` künyesinin `harita:`
//   ANAHTARI (künye `habsburg` 1526-08-29 → **1918-11-11**).
//   Graz ve Viyana `s:"avusturya"` taşıyor ve dönemleri 1923-10-29'a
//   uzanıyor ⇒ **4,96 yıllık hayalet**: 1923'te Habsburg monarşisi yok.
// 🟢 Ve düzeltme MİNİMAL: kayıtta bölünme ZATEN VAR —
//   `avusturya 1281-01-01 → 1918-11-11` + `avusturya 1918-11-11 → 1923-10-29`
//   İkinci dönemin YALNIZ KİMLİĞİ değişiyor.
//
// ⚠️ `avusturya-cumhuriyet` künyesi `f:1918-11-12`, veri `1918-11-11`
//    ⇒ 1 gün erken. Tolerans 400 gün, ihlal DEĞİL. Ve verinin kendi
//    konvansiyonu 1918-11-11 (Sopron · Bratislava · Zagreb · Kotor
//    hepsi o gün) — YÖNTEM §③: künyenin günü bir KAYNAK DEĞİLDİR.
//    Fark BİLDİRİLDİ, gün değiştirilmedi.
//
// 🔴 KAPSAM — VİYANA BENDE DEĞİL: Viyana (48,208K · 16,373D) benim iki
//    kutumun da DIŞINDA (balkanlar tavanı 48 · dogu-avrupa tabanı 20°D)
//    ve `orta-avrupa` kutusunda [45,55,5,24]. Graz ise HER İKİSİNDE.
//    ⇒ Aynı hayalet iki oturuma bölünmüş. Viyana'yı YAZMADIM.
//    Koordinatörün hükmü bekleniyor (`§3.5.1` — iki uç).

// 🟢 Ad alanı dosya adıyla BİREBİR (`§7`: "ayrı dosya vermek ayrı ad alanı
//    vermek değildir" — dosya adındaki ayırt edici parça, değişken adında
//    da olacak). Biçim sınavı ilk turda bunu yakaladı ve düzeltildi.
window.YER_YAMA_BALKAN_AVUSTURYA_BEKLIYOR = [
  { ad: "Graz", s: [{"f": "1281-01-01", "t": "1918-11-11", "d": "avusturya"}, {"f": "1918-11-11", "t": "1923-10-29", "d": "avusturya-cumhuriyet"}] }
];

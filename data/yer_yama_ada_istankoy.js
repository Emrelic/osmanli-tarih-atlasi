// -*- coding: utf-8 -*-
// YER_YAMA_ADA_ISTANKOY — BALKAN-DOĞU AVRUPA oturumu, 6 Eylül 2026
//
// 🔴🔴 BU DÜZELTME İKİ DOSYAYI BAĞLAR — TEK BAŞINA UYGULANMAZ.
//    ① bu yama            `isg:` `1912-05-21` → `1912-05-20`
//    ② kronoloji maddesi  `data/olaylar_ek6.js` içindeki
//       «İstanköy'ün işgali» maddesinin `t:` alanı da `1912-05-20` olmalı
//       ⇒ öneri: `denetim/KRONOLOJI-BALKAN-0906.json` (ayrı kalem)
//    Tek uç kayarsa `Değişmez 2` senkronu bozulur: bugün `isg:` ile madde
//    AYNI GÜNDE ve kırılma-madde mesafesi 0. İkisi birlikte kayarsa
//    mesafe yine 0 kalır; tek başına kayarsa 1 gün açılır.
//
// ═══════════ NİÇİN ═══════════
// KAYNAKLI GÜN ile KAYNAKSIZ GÜN karşı karşıya:
//   veri   `isg: 1912-05-21`  ·  `kaynak: None`  (dayanağı BİLİNMİYOR)
//   TDV    İKİ AYRI GÖVDEDE «20 Mayıs 1912»:
//     `istankoy`  : «İstanköy 20 Mayıs 1912'de İtalyanlar tarafından
//                    işgal edildi.»
//     `oniki-ada` : «İtalya 28 Nisan - 20 MAYIS 1912 tarihleri arasında …
//                    İstanköy adalarıyla birlikte … işgal etti.»
//                    (aralığın ÜST UCU İstanköy'ün günü)
// `§4`: verinin/künyenin günü bir KAYNAK DEĞİLDİR.
//
// ⚠️ VE BİR BİLİNMEZLİK KAYITTA KALIYOR: verinin `1912-05-21`i NEREDEN
//    geldiğini ÖLÇEMEDİM. Düzeltiyoruz ama kaynağını bilmiyoruz — o
//    yüzden `kaynak:"oniki-ada"` yazılıyor, yani YENİ günün dayanağı
//    açık; ESKİ günün dayanağı hâlâ **ölçülemedi**.

window.YER_YAMA_ADA_ISTANKOY = [
  { ad: "İstanköy", isg: [{"f": "1912-05-20", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] }
];

// -*- coding: utf-8 -*-
// YER_YAMA_ADA_KAYNAK — BALKAN-DOĞU AVRUPA oturumu, 6 Eylül 2026
// Koordinatör hükmü: «`kaynak:` yamasını YAZ — `§4`ün kırmızı çizgisi.»
//
// 🔴 NİÇİN: Oniki Ada'nın 13 `isg:` dönemi GÜN hassasiyetinde tarih
//    taşıyor (`1912-05-04` · `1912-05-12` · `1912-05-21`) ama 13'ünde de
//    `kaynak:` BOŞ. `§4`: «Kaynağı yazılmayan bilgi, kaynağı olmayan
//    bilgiden ayırt edilemez.»
//
// KAYNAK — TDV `oniki-ada` (HTTP 200, 18.339 kar., müellif Cevdet Küçük):
//   «İtalya 28 Nisan - 20 Mayıs 1912 tarihleri arasında İstanpulya, Rodos,
//    Herke, Kerpe, İlyaki, Leryoz, Batnoz, Kilimli, Lipso, Sömbeki ve
//    İstanköy adalarıyla birlikte toplam on altı adayı işgal etti.»
//   «Böylece … Osmanlı Devleti'nin adalar üzerindeki egemenlik hakları
//    kaldırılmamış oldu.»
//
// ⚠️ KAYNAK ARALIK VERİYOR, GÜN VERMİYOR (İstanköy hariç). Bu yama
//    GÜNLERE DOKUNMUYOR — yalnız `kaynak:` alanını dolduruyor.
//    Verideki üç ayrı günün (05-04 · 05-12 · 05-21) nereden geldiği
//    HÂLÂ BİLİNMİYOR. Damga: ÖLÇÜLEMEDİ, ve bu yama onu KAPATMAZ —
//    yalnız kaydın hangi maddeye dayandığını görünür kılar.
//
// 🟢 GÜVENLİ: `kaynak` `_sahiplik_uygula.py`de SKALER_KORUNAN —
//    yalnız BOŞSA doldurur, ÜZERİNE YAZMAZ.
// 🔴 Kayıtlar elle yazılmadı, `girdi.yukle` ile canlı veriden üretildi.
//    Her kayıtta TAM `isg:` dizisi var (uygulayıcı diziyi DEĞİŞTİRİR).

window.YER_YAMA_ADA_KAYNAK = [
  { ad: "Rodos", isg: [{"f": "1912-05-04", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "İstanköy", isg: [{"f": "1912-05-21", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Karpatos", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Kelemez (Kalimnos)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "İleryoz (Leros)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Sömbeki (Simi)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "İncirli (Nisiros)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "İlyaki (Tilos)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Herke (Halki)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Batnoz (Patmos)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "İstanbulya (Astipalya)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Kaşot (Kasos)", isg: [{"f": "1912-05-12", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] },
  { ad: "Lindos", isg: [{"f": "1912-05-04", "t": "1923-07-24", "d": "italya", "kaynak": "oniki-ada"}] }
];

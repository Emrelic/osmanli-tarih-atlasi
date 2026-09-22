// ============================================================================
// SINIR-CIZGI-0076 · YAMA · data/hukuki_sinirlar.js  — H-0116
// UYGULAYAN: koordinatör (ORTAK-0076 §3 — işçi data/ dosyasına yazmaz).
//
// SORU (H-0116): "BU ÇİZGİ NEYİN NESİ VE NEDEN GİTMİYOR NEYİN ÇİZGİSİ BU
//                 NEDEN BERTARAF EDİLMİYOR"  · görsel 1909-04-27, Bosna Brod
//
// TEŞHİS (ölçüldü, tahmin değil):
//   ① Çizgi D KATMANI DEĞİL. O kutuda (44,80–45,20K · 17,86–19,35D) 1909-04-27'de
//      yürürlükte D/E/C hattı SIFIR; o kutuya HERHANGİ bir tarihte değen D kaydı da
//      SIFIR (denetim/SINIR-CIZGI-0076-OLCUM.js, vaka H-0116).
//      Çizen katman: `hukuki-sinir-hat` (js/app.js:1877 · #1a1a1a · dash [2, 1.3]),
//      kaydı `karlofca-bosna-sava-1699` (data/hukuki_sinirlar.js:290).
//      Teyit: `denetim/SINIR-CIZGI-0076-HUKUKI.js 1909-04-27` → o gün yürürlükteki
//      4 C kaydından bu kutuya düşen TEK kayıt odur, uçları Brod ve Bosut.
//   ② GEOMETRİ YANLIŞ. Kaydın kendi TDV alıntısı: "Sava nehrinin Bossut'un Sava'ya
//      döküldüğü yerden Brot Kalesi'ne kadar sınır olması kabul edildi." Yani sınır
//      SAVA'dır. Kayıt `hat.tur:"dogal-tanimsiz"` + 2 nokta taşıyor; app.js bu iki ucu
//      DÜZ KİRİŞLE bağlıyor (js/app.js:7399 `hatCizgisi`). Ölçüldü
//      (denetim/SINIR-CIZGI-0076-SAVA.js):
//          düz kiriş            110,8 km · 2 nokta
//          Sava (aynı iki uç)   156,1 km · 28 nokta
//          kirişin nehirden en çok sapması  16,2 km · ortalama 4,4 km · %41 kısa
//      Ekranda çizginin Sava'yı terk edip karadan geçmesinin sebebi budur.
//      🔴 KOD DEĞİŞİKLİĞİ GEREKMİYOR: app.js N≥3 noktalı hattı ZATEN tam polyline
//      olarak çiziyor (C-NSEGMENT, js/app.js:7368) — yalnız veri çok noktalı olmalı.
//   ③ PENCERE YANLIŞ — "neden gitmiyor"un cevabı. Kayıt `t:"1918-11-11"` taşıyor ve
//      bu tarihî bir bitiş değil, Habsburg künyesinin kendi sonu (kaydın kendi yorumu
//      öyle diyor). TDV (birincil, CLAUDE.md §4):
//        · `pasarofca-antlasmasi`: "21 Temmuz 1718 (22 Şâban 1130)" · "Tuna'ya kadar
//          sağ taraf Avusturya'da, sol taraf Drina suyu ve Sava nehrine kadar Osmanlı
//          Devleti'nde kalmak üzere…" ⇒ 1718'de Sava'nın GÜNEYİNDEKİ şerit Avusturya'ya
//          geçti, Karlofça'nın Sava hattı O GÜN sona erdi.
//        · `bosna-hersek`: "1718 Pasarofça Antlaşması ile Sava'nın güneyindeki şerit
//          şeklinde arazi Avusturya'ya verildi" · "1739 Belgrad Antlaşması ile Avusturya,
//          Furjon Kalesi hariç Pasarofça Antlaşması sonucu aldığı bütün yerleri geri verdi."
//        · `bosna-hersek`: "29 Temmuz'da başlayan işgal 20 Ekim 1878'de tamamlandı" ·
//          "7 Ekim 1908'de buranın resmen Avusturya-Macaristan toprağı olduğu ilân edildi" ·
//          "Osmanlı Devleti'nin hakları 1908'deki katî ilhaka kadar resmen sürmüştü."
//      ⇒ Tek pencere (1699→1918) ÜÇ ayrı dönemi tek kayda sıkıştırıyor ve 1909'da —
//      ilhaktan 6 ay sonra — hâlâ Osmanlı–Habsburg hukukî sınırı çiziyor.
//
// HÜKÜM: `tekrar` DEĞİL, `duzeltildi` (yama aşağıda) + bir kalem `senin-kararin`.
// ============================================================================
//
// ① UYGULAMA — `karlofca-bosna-sava-1699` kaydında İKİ ALAN değişir:
//       t:   "1918-11-11"      →  "1718-07-21"
//       hat: {tur:"dogal-tanimsiz", nokta_dizisi:[2 nokta]}
//                              →  {tur:"nehir-govdesi", nokta_dizisi:[30 nokta]}  (aşağıdaki SAVA_HAT)
//    🔴 `tur` adı DEĞİŞTİRİLEBİLİR ama ZORUNLU DEĞİL: app.js `tur`a değil nokta
//       SAYISINA bakıyor (nd.length > 2 → C-NSEGMENT). "dogal-tanimsiz" bırakılırsa da
//       doğru çizilir; ad değişikliği yalnız "bu hattın gövdesi artık tanımlı" demek için.
//    ⚠️ `kapsama.negatif_taraf:"osmanli"` AYNEN KALIR (nokta sırası Brod→Bosut korundu).
//    ⚠️ `kapsama.dolgu:false` AYNEN KALIR.
//
// ② EKLEME — 1739 sonrası için AYRI kayıt (aşağıdaki BELGRAD_KAYDI). Gerekçesi: TDV
//    Belgrad'la Avusturya "Pasarofça sonucu aldığı bütün yerleri geri verdi" diyor,
//    yani Sava hattı GERİ DÖNÜYOR ve 1908 ilhakına kadar Osmanlı'nın hukukî sınırıdır.
//    🔴 HASSASİYET: TDV Belgrad Antlaşması'nın GÜNÜNÜ vermiyor (`belgrad-antlasmasi`
//    slug'ı arama sayfasına düşüyor — TDV tuzağı ①; `belgrad` maddesi yalnız "1739"
//    diyor). CLAUDE.md §4 gereği gün UYDURULMADI: `f:"1739-01-01"` + `f_hassasiyet:"yil"`.
//    Gün bulunursa (TDV'de başka madde ya da akademik kaynak) yalnız o iki alan değişir.
//
// ③ AYRI KALEM (`senin-kararin`, Emre/koordinatör): `karlofca-bosna-kaleler-1699`
//    kaydı da `t:"1918-11-11"` taşıyor (aynı künye-sonu kusuru). O kayıt bir NOKTA
//    KÜMESİ (Kostayniça · Bosna Novi'si, ikisi de Habsburg'a bırakılan kaleler) —
//    "bu kaleler 1699'da el değiştirdi" beyanı 1718'den sonra da DOĞRU kalır, ama
//    haritada 1918'e kadar nokta basması aynı soruyu doğurur. Önerim: t → "1878-07-29"
//    (TDV: işgalin başlangıcı) ya da "1908-10-07". Kaynak işi değil GÖSTERİM kararı,
//    o yüzden hükmü vermiyorum.
// ============================================================================
"use strict";

// Sava'nın Brod–Bosut arasındaki gerçek akışı.
// KAYNAK: data/altlik.js `ALTLIK.nehir[724]` (Natural Earth 10m) — atlasın KENDİ
// iddiası değil, coğrafî veri kümesi (CLAUDE.md §4 "atlas referans değildir" ihlali
// DEĞİL: burada atlastan alınan şey bir SINIR HÜKMÜ değil NEHRİN YATAĞIDIR).
// Uçlar kaydın kendi kaynaklı noktalarıdır, nehir gövdesi ikisinin ARASINA girer.
var SAVA_HAT = [
  { lon: 17.988,  lat: 45.138,  ad: "Brod Kalesi (Bosanski Brod)",
    kaynak: "data/yerlesimler_ek29.js 'Bosna Brod'u (Bosanski Brod)' kaydı (kaydın kendi dayanağı, DEĞİŞMEDİ)", dogrulanmadi: false },
  { lon: 18.0029, lat: 45.1496, ad: "Sava gövdesi", kaynak: "Natural Earth 10m nehir (data/altlik.js ALTLIK.nehir[724])" },
  { lon: 18.1531, lat: 45.0978, ad: "Sava gövdesi" },
  { lon: 18.1919, lat: 45.1088, ad: "Sava gövdesi" },
  { lon: 18.2018, lat: 45.1444, ad: "Sava gövdesi" },
  { lon: 18.2373, lat: 45.1577, ad: "Sava gövdesi" },
  { lon: 18.3218, lat: 45.1231, ad: "Sava gövdesi" },
  { lon: 18.4115, lat: 45.1127, ad: "Sava gövdesi" },
  { lon: 18.5165, lat: 45.0561, ad: "Sava gövdesi" },
  { lon: 18.5405, lat: 45.0555, ad: "Sava gövdesi" },
  { lon: 18.5344, lat: 45.0907, ad: "Sava gövdesi" },
  { lon: 18.6087, lat: 45.1004, ad: "Sava gövdesi" },
  { lon: 18.6482, lat: 45.0629, ad: "Sava gövdesi" },
  { lon: 18.6836, lat: 45.0851, ad: "Sava gövdesi" },
  { lon: 18.7378, lat: 45.0161, ad: "Sava gövdesi" },
  { lon: 18.7885, lat: 45.0060, ad: "Sava gövdesi" },
  { lon: 18.8041, lat: 44.9741, ad: "Sava gövdesi" },
  { lon: 18.7721, lat: 44.9427, ad: "Sava gövdesi" },
  { lon: 18.7829, lat: 44.9140, ad: "Sava gövdesi" },
  { lon: 18.8892, lat: 44.8614, ad: "Sava gövdesi" },
  { lon: 19.0679, lat: 44.8751, ad: "Sava gövdesi" },
  { lon: 19.1863, lat: 44.9278, ad: "Sava gövdesi" },
  { lon: 19.2013, lat: 44.9086, ad: "Sava gövdesi" },
  { lon: 19.3097, lat: 44.9126, ad: "Sava gövdesi" },
  { lon: 19.3498, lat: 44.8973, ad: "Sava gövdesi" },
  { lon: 19.3249, lat: 44.9223, ad: "Sava gövdesi" },
  { lon: 19.3864, lat: 44.9154, ad: "Sava gövdesi" },
  { lon: 19.3957, lat: 44.9318, ad: "Sava gövdesi" },
  { lon: 19.3726, lat: 44.9434, ad: "Sava gövdesi" },
  { lon: 19.3706, lat: 44.9411, ad: "Bosut'un Sava'ya döküldüğü yer (Bosut köyü, Sırbistan)",
    kaynak: "Wikipedia 'Bosut' (nehir maddesi), 44°56′28″N 19°22′14″E (kaydın kendi ikincil dayanağı, DEĞİŞMEDİ)", dogrulanmadi: false }
];

// ② EKLENECEK KAYIT — `karlofca-bosna-sava-1699`ın hemen ARDINA konur.
var BELGRAD_KAYDI = {
  id: "belgrad-bosna-sava-1739",
  taraflar: ["osmanli", "habsburg"],
  hassasiyet: "cizgi",
  f: "1739-01-01",
  f_hassasiyet: "yil",   // 🔴 TDV gün vermiyor; gün UYDURULMADI (CLAUDE.md §4)
  t: "1908-10-07",       // TDV bosna-hersek: "7 Ekim 1908'de … resmen Avusturya-Macaristan toprağı olduğu ilân edildi"
  hat: { tur: "nehir-govdesi", nokta_dizisi: SAVA_HAT },
  gereken_cografya: [
    { ad: "Sava (nehir)", tur: "nehir", atlasta_var: true, atlasta_kaynak: "data/altlik.js ALTLIK.nehir[724] · arac/uret_petek.py BUYUK kümesi" }
  ],
  kapsama: {
    tur: "bbox",
    negatif_taraf: "osmanli",
    dolgu: false,
    kutu: { lat_min: 44.6, lat_max: 45.5, lon_min: 17.7, lon_max: 19.7 },
    dogal_sinir_gerekcesi: "Karlofça kaydıyla AYNI kutu — hat aynı, değişen yalnız pencere.",
    sezgi_kapali: true,
    yon_kurali: "Sava'nın güneyi (Bosna) -> osmanli, kuzeyi (Slavonya/Habsburg) -> habsburg"
  },
  kaynak: {
    tur: "TDV İslâm Ansiklopedisi", ad: "bosna-hersek",
    alinti: "1739 Belgrad Antlaşması ile Avusturya, Furjon Kalesi hariç Pasarofça Antlaşması sonucu aldığı bütün yerleri geri verdi.",
    url: "https://islamansiklopedisi.org.tr/bosna-hersek"
  },
  kaynak_ikincil: {
    tur: "TDV İslâm Ansiklopedisi", ad: "belgrad",
    not: "Antlaşmanın GÜNÜ bulunamadı: `belgrad-antlasmasi` slug'ı arama sayfasına düşüyor, `belgrad` maddesi yalnız \"Belgrad Antlaşması (1739) imzalandı\" diyor. Gün bulunursa f ve f_hassasiyet güncellenir."
  },
  onemli_uyari: "Pencerenin SONU ilhak günüdür; 1878-1908 arası Avusturya İŞGAL/İDARE eder, hukukî sınır Osmanlı'nındır (TDV: \"Osmanlı Devleti'nin hakları 1908'deki katî ilhaka kadar resmen sürmüştü\"). Fiilî hattı göstermek istenirse AYRI bir D (fiilî) kaydı gerekir — bu kayıt HUKUKÎ hattır."
};

// Uygulayıcı için: değişecek alanların özeti (elle uygulanacaksa bu üç satır yeter)
var UYGULA = [
  { kayit: "karlofca-bosna-sava-1699", alan: "t", eski: "1918-11-11", yeni: "1718-07-21" },
  { kayit: "karlofca-bosna-sava-1699", alan: "hat.nokta_dizisi", eski: "2 nokta (düz kiriş)", yeni: "30 nokta (Sava gövdesi) — SAVA_HAT" },
  { kayit: "karlofca-bosna-sava-1699", alan: "hat.tur", eski: "dogal-tanimsiz", yeni: "nehir-govdesi (isteğe bağlı; app.js nokta SAYISINA bakar)" },
  { kayit: "(YENİ) belgrad-bosna-sava-1739", alan: "—", eski: "yok", yeni: "BELGRAD_KAYDI" }
];

if (typeof module !== "undefined") module.exports = { SAVA_HAT: SAVA_HAT, BELGRAD_KAYDI: BELGRAD_KAYDI, UYGULA: UYGULA };

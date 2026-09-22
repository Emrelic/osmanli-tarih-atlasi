// ============================================================================
// SINIR-CIZGI-0076 · YAMA · data/yerlesimler*.js   — H-0037 + H-0149
// UYGULAYAN: koordinatör (ORTAK-0076 §3).
// 🔴 İKİSİ DE DEĞİŞMEZ 2'YE DOKUNUR — birlikte uygulanacak kronoloji maddesi
//    `denetim/SINIR-CIZGI-0076-YAMA-olaylar.js`tedir. Yalnız biri uygulanırsa
//    `py arac/denetle.py` yeni bir "açık kırılma" verir.
// ============================================================================
"use strict";

// ───────────────────────────────────────────────────────────────────────────
// ① H-0037 — "93 harbinde Eflak ve Boğdan Ruslarla birlikte hareket ediyorsa
//            bu iki vassal devletin kırmızı görünmesinin manası yok"
//
// ÖLÇÜLDÜ: 18 yerleşimin tâbilik (`v:`) penceresi 1878-07-13'te (Berlin) bitiyor;
//   15'i `eflak`/`bogdan` → `s:romanya`, 3'ü (İsmail · Kahul · Bolgrad, Cenûbî
//   Besarabya) → `s:rusya`. Yani atlas, Romanya'yı 93 Harbi boyunca OSMANLI
//   TÂBİSİ (kırmızı) gösteriyor.
// KAYNAK — TDV `romanya`: "9 Mayıs 1877 tarihinde bağımsızlığını ilân etti" ·
//   "1877-1878 Osmanlı-Rus Savaşı'na katılan ve özellikle Plevne'de Osmanlılar'ın
//   yenilgisine çok önemli katkıda bulunan" · bağımsızlık "Berlin Kongresi'nde
//   (1878) tanındı".
// ⇒ 9 Mayıs 1877'den sonra Osmanlı tâbiliği FİİLEN VE HUKUKEN yok; Berlin yalnız
//   TANIMA günüdür. Emre'nin sunduğu iki seçenekten (işgal gibi taralı · Rus
//   tarafında) İKİSİ DE kaynakla uyuşmuyor: Romanya işgal edilmedi, Rusya'nın
//   parçası da olmadı — MÜTTEFİK BAĞIMSIZ DEVLETTİ. Doğru gösterim: 1877-05-09'dan
//   itibaren kendi rengiyle bağımsız devlet.
//
// DEĞİŞİKLİK — 15 kayıtta İKİ alan (dosya: hepsi data/yerlesimler.js):
//     v[].t :  "1878-07-13"  →  "1877-05-09"
//     s[].f :  "1878-07-13"  →  "1877-05-09"     (s[].d = "romanya" olan pencere)
//   Kayıtlar (lon,lat ile birlikte — ad eşleştirmesi Türkçe büyük/küçük harf
//   tuzağına düşmesin diye, D215):
var H0037_KAYITLAR = [
  { ad: "Bükreş",                       lon: 26.103, lat: 44.427, v_kid: "eflak"  },
  { ad: "Yaş",                          lon: 27.601, lat: 47.157, v_kid: "bogdan" },
  { ad: "Roman",                        lon: 26.930, lat: 46.925, v_kid: "bogdan" },
  { ad: "Birlad (Bârlad)",              lon: 27.667, lat: 46.230, v_kid: "bogdan" },
  { ad: "Kalas (Galatz)",               lon: 28.008, lat: 45.435, v_kid: "bogdan" },
  { ad: "Tırgovişte",                   lon: 25.457, lat: 44.925, v_kid: "eflak"  },
  { ad: "Piteşti",                      lon: 24.869, lat: 44.857, v_kid: "eflak"  },
  { ad: "Slatina",                      lon: 24.371, lat: 44.427, v_kid: "eflak"  },
  { ad: "Buzău",                        lon: 26.817, lat: 45.150, v_kid: "eflak"  },
  { ad: "Rimnik-i Sârat (Râmnicu Sărat)", lon: 27.056, lat: 45.383, v_kid: "eflak" },
  { ad: "Krayova (Craiova)",            lon: 23.795, lat: 44.330, v_kid: "eflak"  },
  { ad: "Tırgu Jiu",                    lon: 23.275, lat: 45.035, v_kid: "eflak"  },
  { ad: "Rimnik (Râmnicu Vâlcea)",      lon: 24.375, lat: 45.105, v_kid: "eflak"  },
  { ad: "Turnu Severin",                lon: 22.656, lat: 44.632, v_kid: "eflak"  },
  { ad: "Kımpulung (Câmpulung)",        lon: 25.045, lat: 45.269, v_kid: "eflak"  }
];
// Her kayda ayrıca kaynak notu düşülür (şemada `v[].kaynak` alanı zaten var):
var H0037_KAYNAK_NOTU =
  "Tâbilik penceresinin bitişi Berlin (1878-07-13) değil bağımsızlık ilânıdır: " +
  "TDV romanya — \"9 Mayıs 1877 tarihinde bağımsızlığını ilân etti\"; Berlin " +
  "Kongresi yalnız TANIMA günüdür.";

// 🔴 DOKUNULMAYAN 3 KAYIT — ayrı kalem, hüküm koordinatörün:
//   İsmail (28.836, 45.351) · Kahul (28.198, 45.905) · Bolgrad (28.613, 45.681)
//   Bunların `v:` penceresi de 1878-07-13'te bitiyor ama ardından `s:rusya`
//   geliyor (Cenûbî Besarabya'nın Berlin'le Rusya'ya dönüşü — O GÜN DOĞRU).
//   Tam düzeltme üç pencere ister: v(→1877-05-09) + s:romanya(1877-05-09 →
//   1878-07-13) + s:rusya(1878-07-13→). Üç pencereli bölme Değişmez 2'de İKİ
//   kırılma doğurur ve ikincisinin maddesi zaten var (Berlin). Yapılabilir ama
//   KARAR gerektirir, o yüzden bu yamaya KONMADI.

// ───────────────────────────────────────────────────────────────────────────
// ② H-0149 — "Katar'dan vazgeçilmesi söz konusu ama yarımadanın ayrısı başka
//            egemenlikte görünüyor; tüm ada Katar'a bağlı değil mi?"
//
// ÖLÇÜLDÜ (1913-07-29, kutu 23,60–26,46K · 49,48–52,74D — Emre'nin görselinin
//   kendi kutusu): o kutuda 5 nokta var —
//     Doha (Katar)                 s: katar        [1913-07-29 → 1923-10-29]
//     Katar Yarımadası (iç, dolgu) s: — SAHİPSİZ
//     Ukayr (Uceyr)                s: suud-ucuncu  [1913-07-08 → ]
//     Lahsa                        s: suud-ucuncu  [1913-07-08 → ]
//     Manama (Bahreyn)             s: ingiltere
//   ⇒ Yarımadanın batı/iç yarısı BEYAZ, çünkü oradaki tek nokta olan dolgu
//   noktasının 1913'te sahibi yok. Kusur peteğin değil, o noktanın penceresinin.
//   (Aynı ölçümü HARITA-0076 1871 kesitinde de gördü — M-5028.)
// KAYDIN KENDİ NOTU bunu zaten itiraf ediyor: "1670 sonrası … sahipsizlik
//   KASITLI HÜKÜM DEĞİL: bağlılık bulunamadı (TDV katar 1559'dan 1776'ya atlıyor)".
// KAYNAK — TDV `katar` (bu oturum buldu): "Osmanlı Devleti Katar yarımadası
//   üzerindeki bütün taleplerinden feragat etti, buranın Şeyh Câsim b. Sânî ve
//   halefleri tarafından yönetilmesi konusunda mutabakata varıldı."
//   ⇒ Hüküm YARIMADANIN TAMAMI hakkındadır; iç kesim de kapsam içindedir.
//
// DEĞİŞİKLİK — data/yerlesimler_ek_korfez.js, "Katar Yarımadası (iç, dolgu)"
//   (lon 50.95, lat 25.40) kaydının BOŞ `s: []` dizisine TEK pencere eklenir:
var H0149_YENI_PENCERE = {
  f: "1913-07-29", t: "1923-10-29", d: "katar",
  kaynak: "TDV katar: \"Osmanlı Devleti Katar yarımadası üzerindeki bütün " +
          "taleplerinden feragat etti, buranın Şeyh Câsim b. Sânî ve halefleri " +
          "tarafından yönetilmesi konusunda mutabakata varıldı.\" — hüküm " +
          "yarımadanın TAMAMI hakkında olduğu için iç kesim dolgu noktası da kapsanır."
};
// ⚠️ SAYAÇ ETKİSİ: sahipsiz nokta sayısı 1 azalır (§1.5 "299 sahipsiz, beklenen
//   324"). Beklenenin ALTINA inen bir değişiklik delik AÇMAZ, ama tablo
//   `py arac/durum_tablosu.py --yaz` ile tazelenmeli.
// ⚠️ DEĞİŞMEZ 2: 1913-07-29'da kronoloji maddesi VAR — Emre'nin görselinin kendi
//   alt yazısı: "Katar'dan Osmanlı feragati — Londra Sözleşmesi". Yeni madde
//   GEREKMİYOR (teyit edildi).
// 🔴 1871-1913 ARALIĞI BU YAMADA YOK: Doha kaydı o aralıkta `v: katar` (Osmanlı
//   kazâsı) taşıyor, dolgu noktası taşımıyor. Aynı pencereyi dolgu noktasına da
//   yazmak KOMŞU KAYDINDAN DEVRALMA olur (CLAUDE.md §4 "atlas referans değildir");
//   TDV `katar` 1559'dan 1776'ya atladığı için kendi kaynağı BULUNAMADI. Ayrı kalem.

if (typeof module !== "undefined") module.exports = { H0037_KAYITLAR, H0037_KAYNAK_NOTU, H0149_YENI_PENCERE };

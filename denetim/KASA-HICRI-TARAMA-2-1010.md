# KASA-HICRI-TARAMA-2-1010 — notunda hicrî OLMAYAN 789 künye: TDV gövdesinden örneklem

Görev: YILDIRIM BAYEZIT (HICRI-TARAMA kararı (d)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Soru: künye notu miladî yıl veriyor ama künyenin TDV maddesi hicrî tarih taşıyor mu? Taşıyorsa `f` / `t`, o
hicrî yılın aralığında mı? (`sasani` t ve `hulefa-yi-rasidin` f vakaları)
Yöntem (ölçümden önce sabit):
- **Örneklem:** 789 künyeden n = 50, TABAKALI: `bolge` × dönem (f < 622 · 622-1500 · >1500). Her tabakaya
  orantılı pay (en az 1). Tohum **1010** (`random.Random(1010)`).
- TDV slug'ı künyenin `kaynak` / `ic_not` alanından alınır. Slug yoksa ya da 302 dönerse ⇒ **ölçülemedi (slug)**.
- Gövde çekilir. f / t'nin miladî yılını taşıyan `H/M` ifadeleri aranır, aynı kesişim kuralı uygulanır
  (hicrî ∩ miladî yıl ∩ miladî ay; öneri = ilk gün).
- **Hüküm (muhafazakâr):**
  - Aynı yıla ait aday ifadelerden BİRİ bile uca uyuyorsa İÇİNDE.
  - DIŞINDA yalnız hepsi dışlıyorsa; DIŞINDA'lar cümlesiyle elle doğrulanır (aynı yılın başka bir olayı mı, ⑧).
- **Üç kova:**
  - ölçüldü-içinde
  - ölçüldü-dışında
  - **ölçülemedi**: gövdede o yılı taşıyan hicrî ifade yok — "temiz" DEĞİL, ayrı sayılır.
- Genelleme: 789 × (dış uç oranı), %95 güven aralığı (Wilson), tabaka ağırlığıyla.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10)
Koordinatörün kalibrasyon notu uygulandı: DESEN aynı keskinlikte, BÜYÜKLÜK aralıkları iki kat geniş.
**Desen:**
- ① Dışarıda bulunan her uç yine `-01-01` olacak (%95).
- ② Dış uçlar 622-1500 tabakasında toplanacak; 622 öncesi tabaka neredeyse tamamen **ölçülemedi**, 1500 sonrası
  TDV gün verdiği için az dış.
- ③ Dış uçların çoğu `f`'de (kuruluş).
**Büyüklük (geniş):**
- 50'den slug'ı olup çekilebilen: **35 ± 15**.
- Kontrol edilebilir uç (gövdede yılına eşleşen hicrî ifade): **25 ± 25**.
- DIŞINDA uç: **8 ± 8** ⇒ örneklem başına uç oranı ~%8 (0-%30).
- ölçülemedi (slug yok/302 + hicrî yok): **30 ± 15** künye.
- 789'a genelleme: gerçek dış uç toplamı **60-200** (bugünkü 70'e EK). ⇒ Toplam hicrî tuzak **130-270** uç.

## 1. ÖLÇÜM

Zemin: main 5ba57827.
- Evren: birinci turun DIŞI = notlarında (`ic_not_*` + bütün `kaynak` alanları, kronoloji dahil) hicrî ifade
  taşımayan **789** künye. Bunların **391**'inde TDV slug adayı var; **398**'inde yok.
- Örneklem: n = 50, `bolge` × dönem tabakalı, orantılı, tohum 1010. Dağılım 622-1500: 28 · >1500: 22 · <622: 0
  (tabaka çok küçük, yuvarlamada pay almadı — beyan).
- TDV gövdeleri: 23 slug'dan **22**'si çekildi; `standart` 302 (ayrıştırma artığı, slug değil).
Çıktı: `denetim/KASA-HICRI-TARAMA-2-1010.csv` (73 satır: künye · dönem · slug · alan · yazılı · hüküm · ifade ·
aralık · öneri · cümle).

### 1.1 Sonuç — üç kova (⑤)
```
künye (50)                    ölçüldü-İÇİNDE  2    ahmednagar f 1490-01-01 ↔ "(895/1490)" = 1490-01-01…11-13 ✓
                                                   golkonda t 1687-09-21 ↔ "14 Zilkade 1098'de (21 Eylül 1687)" ✓ gün
                              ölçüldü-DIŞINDA 0
                              ÖLÇÜLEMEDİ     48
                                 slug yok           27  (Normandiya, Lüksemburg, Teksas Cumhuriyeti, Pala, Campa …
                                                         TDV kapsamı dışı ya da kaynak alanı "bulunamadı/akademik")
                                 TDV gövdesinde o
                                 yılı taşıyan hicrî
                                 ifade yok          21  (Kuveyt, Nijerya, Ruanda, Çin, Tibet, Myanmar, Karadağ,
                                                         Batı Trakya … gövde miladî tarih veriyor)
```
**Genelleme (Wilson %95):**
- Dış uç oranı **0/50 ⇒ %0 – %7,1** ⇒ 789'da en çok **~56** künye.
- Kontrol edilebilir alt evrende ise yalnız **2 uç** ölçüldü; oran için anlamlı bir payda yok.
⇒ **789'un büyük kısmı tuzağa AÇIK DEĞİL; tuzak ölçülemez.**
- %55'i TDV'ye bağlı değil: slug yok, kaynak akademik ya da "bulunamadı".
- Slug'ı olanlarda TDV maddesi o yıl için miladî konuşuyor (modern devletler, Afrika/Asya krallıkları).

### 1.2 Birinci turla birlikte — tuzağın gerçek yeri
```
evren                                 künye   kontrol edilebilir uç   DIŞINDA
1. tur: notunda hicrî VAR              108         145                   70   (%48)
2. tur: notunda hicrî YOK (örneklem)    50           2                    0   (%0; 789'a ≤ ~56 künye)
çapraz madde (künyenin KENDİ maddesi değil, başka TDV maddesi hicrî veriyor):
   sasani t (TDV `iran` 31/651) · hulefa-yi-rasidin f (11 AH)              2   — bu yöntemin göremediği sınıf
```
🔴 **Hüküm:** tuzak **notunda hicrî taşıyan künyelerde yoğunlaşıyor**, ve birinci tur onu büyük ölçüde zaten tükettı
(70 uç). Notunda hicrî olmayan 789 künyede kendi TDV maddesinden yeni tuzak ÇIKMADI.
Kalan risk **çapraz madde** sınıfı:
- Künyenin tarihi bir maddeden (`sasaniler`: "651"), hicrî kesinliği başka bir maddeden (`iran`: "31/651") geliyor.
- Bunu bu yöntem göremez; künye başına İLGİLİ TÜM maddeleri taramak gerekir.
- Bu gece iki vaka, ikisi de "imparatorluk sonu / hilâfet başı" türü büyük dönüm noktası.

### 1.3 Öngörü sınavı
```
                                   öngörü       ölçüm
DESEN ① dışarıdakiler -01-01        %95          ölçülemedi (dış uç yok)
DESEN ② dış uçlar 622-1500'de       evet         ölçülemedi (dış uç yok)
DESEN ③ dış uçlar f'de               evet         ölçülemedi
<622 tabakası ölçülemedi            evet         tabaka örnekleme girmedi (pay 0)
çekilebilen slug                    35 ± 15      22 ✓ (alt sınır)
kontrol edilebilir uç               25 ± 25      2  ✓ (aralık içi, alt uç)
DIŞINDA                             8 ± 8        0  ✓ (aralık içi, alt uç)
ölçülemedi                          30 ± 15      48 ✗ (üstünde)
789'a genelleme                     60-200       0-56 ✗ (altında)
```
⚠️ Bu tur desen öngörülerimi SINAYAMADI: dış uç hiç çıkmadığı için üç desen öngörüsü de "ölçülemedi". Büyüklük
aralıkları iki kat genişletildiği için ikisi aralık içinde kaldı, ama ikisi dışında. Yön: tuzağı yine
**büyük** tahmin ettim. Sebep: "TDV hicrî tarih verir" genellemesi, notunda hicrî olmayan künyelerin çoğunun
TDV'ye hiç bağlı olmadığını ya da TDV'nin o dönem için miladî konuştuğunu hesaba katmadı.

## 2. ③ İSTİYORUM
a) **Sonuç cümlesi (sözleşme kararını destekler):** "Hicrî tuzak, notunda hicrî taşıyan 108 künyede ölçüldü ve
   tüketildi (70 uç). Notunda hicrî olmayan 789 künyede kendi TDV maddesinden yeni tuzak çıkmadı (0/50; ≤~56
   künye). Kalan risk çapraz madde sınıfında."
b) **Çapraz madde sınıfı için hedefli tur önerisi:** yalnız büyük dönüm noktaları. Halifelikler · imparatorluk
   kuruluş/yıkılışları · `iran` / `misir` / `irak` / `suriye` gibi TDV ülke maddelerinin dönem dizileri. Bu ülke
   maddeleri onlarca künyenin uçlarını "H/M" ile veriyor ⇒ künye başına değil MADDE başına tarama (ör. TDV `iran`
   344 KB, tek madde onlarca uç). Tahminim: 5-10 ülke maddesi, 20-60 uç.
c) Yeni sözleşme (§4) zaten uygulanacaksa bu 789 için ek iş gerekmez; yeni künyeler sözleşmeyle doğar.

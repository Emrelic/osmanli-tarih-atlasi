# EŞİK SERİSİNİN ÜÇÜNCÜ COĞRAFYASI — ÖLÇÜM RAPORU · 12 Eylül 2026 · KITA 8

> Sevk: tahta **M-3563**. Öngörü: `denetim/ONGORU-ESIK-UCUNCU-0912.json`
> (seri koşulmadan ÖNCE yazıldı). 🔴 **COMMIT EDİLMEDİ** — talimat.
> Koşu tahtaya **başlamadan önce** ilan edildi (M-3564).
> Maliyet: aday taraması ~10 sn · seri 14,8 sn · özet 90 sn · tepe 153 MB.

---

## ① BÖLGE SEÇİMİ — ÖNCE ÖLÇÜLDÜ, SONRA SEÇİLDİ

Sevkin şartı: *"önce eğim medyanını ölç ve Toros (119) ile Mezopotamya (15)
ARASINDA olduğunu göster."* Sekiz aday tarandı:
```
TOROS ✓bilinen        145 (tarama)  ·  gerçek 119
MEZOPOTAMYA ✓bilinen   13 (tarama)  ·  gerçek  15
KAFKAS ÖNÜ            213   🔴 Toros'un ÜSTÜNDE — elendi
BATI ANADOLU          120   🔴 Toros'a EŞİT, tekrar olurdu — elendi
BALKAN-DİNAR           79   🟢 SEÇİLDİ
TRAKYA-RODOP           64   🟢 arada, ama deseni Balkan'dan az ayırt edici
SURİYE-HALEP           40   🟢 arada
TUNA HAVZASI           29   🟡 Mezopotamya'ya çok yakın, tekrar olurdu
```
🟢 **GERÇEK KARA MASKESİYLE ÖLÇÜM: Balkan eğim medyanı = 70 m/hücre.**
15 < **70** < 119 ⇒ **şart karşılandı, üçüncü bölge bir SINAV.**
📌 Tarama kara maskesini yükseklik eşiğiyle yaklaşıklıyordu; sapması önceden
ölçülmüştü (Toros +%22 · Mezopotamya −%15) ve tahmin edilen düzeltme (79 → ~65)
gerçekle (70) uyuştu. **U1 TUTTU.**

**Niçin Balkan, niçin Trakya değil:** Dinar sistemi **paralel sırtlar + karst** —
Toros'un tek büyük duvarından ve Mezopotamya'nın ovasından **yapısal olarak
farklı** bir desen. Üçüncü bölge yeni bir **sayı** değil yeni bir **desen**
getiriyor.

---

## ② SERİ — aynı altı eşik, aynı beş sayı
```
BALKAN  ızgara 168×128 · kara 17.941 hücre (397.287 km²) · tohum 95
        eğim medyanı 70 · p85 222 · en yüksek 906 m/hücre

eşik  sırt%   kilitlenen  kayma  KAYAN  el değişen km²   ORAN
 100  59,8%      1.254     5,7   10,7       68.779      %17,3
 150  72,7%        961     4,9   10,4       56.018      %14,1
 200  81,9%        693     4,1   10,4       44.140      %11,1
 300  92,5%        345     2,9   10,2       29.373      % 7,39
 400  96,9%        139     2,3   10,7       23.471      % 5,9
 600  99,5%         33     2,1   11,0       21.067      % 5,3
yalnız NEHİR 19.538 km²  ⇒ 300'deki değişimin **%67'si NEHİRDEN**
```
**U5 TUTTU** (monotonluk) · **U4 TUTTU** (nehir payı %67, Toros %44 ile
Mezopotamya %79 arasında, tahminim %50-70) · **U3 TUTTU** (mutlak 29.373 km²,
13.118-14.593 aralığının dışında, tahminim 15.000-35.000).

---

## ③ 🔴 U2 ÇÜRÜDÜ — VE ASIL BULGU BU

*"300'de değişim ORANI Toros (%5,82) ile Mezopotamya (%2,03) ARASINDA çıkacak,
tahminim %3-5"* demiştim. **Ölçüm: %7,39 — ÜÇÜNÜN DE ÜSTÜNDE.**

| bölge | eğim medyanı | 300'de oran | nehir payı | **km²/tohum** |
|---|---|---|---|---|
| TOROS | 119 | %5,82 | %44 | 4.333 |
| **BALKAN** | **70** | **%7,39** | %67 | **4.182** |
| MEZOPOTAMYA | 15 | %2,03 | %79 | 12.175 |

⇒ İlişki **monoton değil: tepe ORTADA.**

### ③b VE KARIŞTIRICIYI ÖLÇTÜM — biri temiz, biri değil (`D132`)
```
TOROS 4.333  ·  BALKAN 4.182 km²/tohum   ⇒ fark %3  — NEREDEYSE AYNI
MEZOPOTAMYA 12.175                        ⇒ Toros'un 2,8 KATI — SEYREK
```
🟢 **TOROS ↔ BALKAN kıyası TEMİZ**: yoğunluk aynı, tek anlamlı fark **arazi**.
Ve orta arazi **daha çok** etkileniyor (%7,39 > %5,82).
🔴 **MEZOPOTAMYA KARIŞTIRILMIŞ**: 2,8 kat seyrek tohum. Düşük oranının araziden
mi yoğunluktan mı geldiği **ayırt edilemiyor.** Damga: **karıştırılmış** —
üçgenin üçüncü köşesi bu yüzden zayıf.

---

## ④ 🔴🔴 VE DAHA DERİN BİR ŞEY: EĞRİLER KESİŞİYOR

Özet karesinin ① panelinde görünen şey, sevkin sorduğundan fazlası:
```
eşik    TOROS    BALKAN     sıralama
 100    %20,4    %17,3      TOROS üstte
 150    %14,6    %14,1      TOROS üstte
 200    %12,6    %11,1      TOROS üstte
 300    % 5,82   % 7,39     🔴 BALKAN üstte   ← KESİŞME 200-300 ARASINDA
 400    % 3,7    % 5,9      BALKAN üstte
 600    % 2,6    % 5,3      BALKAN üstte
```
⇒ **"Tepe ortada" bir ARAZİ özelliği değil, bir EŞİK özelliği.** Düşük eşikte
ilişki **monoton** (dik arazi en çok etkilenir); yüksek eşikte **tersine
dönüyor.** Sebep: 300 m/hücre, Toros'un medyanının **2,5 katı** ama Balkan'ın
**4,3 katı** — aynı mutlak sayı, her bölgenin dağılımında **başka bir yerde**
duruyor.

📌 **HÜKÜM — ve dünkü hükmümü SINIRLANDIRIYOR:** dün *"yüzdelik yanlış eksen,
mutlak doğru"* dedim. Bugün üçüncü bölge onu tamamlıyor:
> **Ne yüzdelik ne mutlak eşik NÖTRDÜR.** Yüzdelik araziyi tamamen normalleştirip
> gürültüyü sırt sayar; mutlak araziyi korur **ama etkisi yine her bölgenin
> dağılımında nereye düştüğüne bağlıdır.** Eğriler kesiştiği için **hiçbir tek
> eşik üç bölgeyi tutarlı sıralamaz.**
⇒ Eşik seçmek **nötr bir parametre ayarı değil, HANGİ ARAZİNİN engel alacağına
dair bir KARARDIR.** Mutlak eşik hâlâ yüzdelikten iyidir (tanımı sabittir,
gürültüyü sırt saymaz) — ama "tarafsız" değildir, ve bunun Emre'ye açıkça
söylenmesi gerekiyor.

---

## ⑤ ÖNGÖRÜ KARNESİ
```
U1 TUTTU    gerçek medyan 70 (tahmin 55-80) · bölge seçimi geçerli
U2 ÇÜRÜDÜ   %7,39 — "arada" değil ÜSTÜNDE. Asıl bulgu buradan çıktı.
U3 TUTTU    mutlak 29.373 km², aralık dışı (tahmin 15.000-35.000)
            ⇒ sevkin önerdiği "mutlak km² arada mı" sınavının yanıltıcı
              olduğu iddiam AYAKTA
U4 TUTTU    nehir payı %67 (tahmin %50-70)
U5 TUTTU    monotonluk
```

## ⑥ ÖLÇÜLEMEYENLER (`D107`)
```
⚪ Mezopotamya'nın düşük oranının ARAZİDEN mi YOĞUNLUKTAN mı geldiği —
   ayırt edilemedi. Çare: aynı yoğunlukta dördüncü bir alçak-eğim bölgesi.
⚪ Kesişme noktasının TAM yeri — 200 ile 300 arasında, ara eşik denenmedi
⚪ "Hangi eşik doğru" — Emre'nin kararı; ben tablo ve aralık veriyorum
```

## ⑦ ÇIKTILAR
```
denetim\KITA8-UC-BOLGE-OZET-0912.png       ← ÜÇ BÖLGE YAN YANA (özet kare)
denetim\KITA8-ESIK-MUTLAK-BALKAN-0912.png  Balkan serisi, altı eşik
denetim\KITA8-ESIK-MUTLAK-TOROS-0912.png        (önceki tur)
denetim\KITA8-ESIK-MUTLAK-MEZOPOTAMYA-0912.png  (önceki tur)
```

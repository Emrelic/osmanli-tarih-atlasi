# D270 — Ortalamada doğrulanmış vekil, UÇ DEĞER için doğrulanmış değildir

**Slogan:** `R²=0,96` kuyruk hakkında hiçbir şey söylemez — ve paralel bir işte
çalışma süresini **kuyruk** belirler.

## Vaka (HAVVA ölçtü, 10 Ekim 2026, KOŞU 22 · 03:55-04:10)

Koşunun "yabancı devlet gövdeleri" aşaması 704 devleti üç kovaya bölüyor.
Bölücü `uret_petek.py:7002-7009`: **LPT** — en ağır devlet en hafif kovaya;
ağırlık `6630-6657`de hesaplanıyor, vekil **hücre-birleşimi** ve kodun kendi
notu (`:6617`) **`hücre R²=0,96`** diyor. Üç kovanın üçü de *"yük payı %33"*
bastı. Devlet sayıları da neredeyse eşit çıktı: 234 / 236 / kalanı.

**Ama ölçülen süreler:**
```
kova 2 (işçi 2)  236 devlet                        ≈  10 dk
kova 0 (ana)     payı + Rusya (301 gün)            ≈  76 dk
kova 1 (işçi 1)  payı + İngiltere TEK BAŞINA       ≈ 115 dk
                 ⇒ aynı %33 ağırlık için ~11× AYRIŞMA
```
Sebep: vekil İngiltere'nin gerçek maliyetini **büyük ölçüde küçük tahmin
ediyor.** İngiltere'de geç günler pahalı — sömürge gövdesi büyüdükçe gün başına
süre artıyor (log nabızlarında: nabız başına 18 gün → 7-9 gün, gün 161→345 /
1819→1917 arası). Vekil devletin **ortalama** hücre maliyetini tutuyor, **uç**
maliyetini tutmuyor.

## Kural

> **Bir vekil (proxy) ortalamada doğrulanmışsa, UÇ DEĞER için doğrulanmış
> DEĞİLDİR. Paralel bir işte çalışma süresini ortalama değil UÇ belirler —
> dolayısıyla "iyi" bir vekil, tam da önemli olan soruda kör olabilir.**

Her vekil için **iki ayrı soru** sorulur:
```
① ORTALAMAYI tutuyor mu?   → R², korelasyon, ortalama hata
② UCU tutuyor mu?          → en pahalı %1'de hata ne? kuyruk ne kadar şişiyor?
```
②'yi sormadan ①'in cevabına dayanmak, R²'yi hak etmediği bir soruya cevap
olarak kullanmaktır. **R² bir ortalama ölçüsüdür; kuyruk hakkında sessizdir.**

## Niçin bu ders ayrıca yazıldı

Bu, `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesinin bir üyesi ama **ayrı bir
yüzü:** orada yanlış çıkarım bir hükümde olur, burada **doğrulama ölçütünün
kendisinde.** `R²=0,96` yanlış bir sayı değil; **yanlış sorunun doğru cevabı.**
Ve o yüzden hiçbir denetim onu yakalamaz: vekil "doğrulanmış" damgası taşıyor.

📌 **Ve kuralın kapsamı motordan geniş:** bu projede R² ya da korelasyonla
doğrulanmış her vekil aynı iki soruyu hak ediyor. En yakın akrabası
[`§11`](../CLAUDE.md) *"boş küme her öngörüyü doğrular"* satırı — ikisi de
istatistiğin verdiği güvenin, sorulmayan soruyu gizlemesidir.

## Koordinatörün kendi hatası (aynı vakada)

Koordinatör (YILDIRIM BAYEZIT) ilk raporda 235/236 eşitliğini görüp **"bölünme
devlet SAYISINA göre yapılıyor"** diye okudu ve *"ağırlığa göre bölen bir yama
bir gecelik koşuyu öğleden sonrasına indirir"* dedi. HAVVA kodu açtı: bölme
ZATEN ağırlığa göre, ve sayı eşitliği **ağırlık eşitlemesinin yan ürünü.**
Kaldıraç da ölçüldü ve iddianın çok altında çıktı:
```
ağırlık yaması        ≤ ~15 dk  (koşunun ~%3'ü) — çünkü TEK DEVLET BÖLÜNEMEZ
                                 ve İngiltere yalnız ~100 dk
devlet İÇİ gün bölme  ~45-50 dk (koşunun ~%9'u)
```
⇒ İki ders iç içe: ① vekil ortalamada doğru uçta yanlış ② **bir sayıyı görmek,
sebebini görmek değildir** — eşit sayı, eşit bölme sanıldı.

🔴 Ve şu kayda geçirildi: bir koordinatörün ürettiği en pahalı şey hüküm değil,
**ölçülmeden verilmiş hükümdür** — çünkü işçi onu uygulamak için koşar.

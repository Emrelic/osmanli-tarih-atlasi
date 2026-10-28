# D270 — Ortalamada doğrulanmış vekil, UÇ DEĞER için doğrulanmış değildir

**Slogan:** `R²=0,96` kuyruk hakkında hiçbir şey söylemez — ve paralel bir işte
çalışma süresini **kuyruk** belirler.

> 🔴 **BU DOSYANIN KANITI BİR KEZ GERİ ÇEKİLDİ** (10 Ekim 2026, aynı gece,
> 04:55). İlk sürümü *"~11× ayrışma"* ve *"kaldıraç tavanı %3 / %9"* diyordu.
> HAVVA sonra ölçtü: **kova 2'nin işçisi ÇÖKTÜ** (GEOS segfault 0xC0000005),
> yani *"kova 2 ≈ 10 dk"* aslında *"≈13 dk sonra ÖLDÜ"*. Tamamlanan iki kovanın
> ayrışması **1,5×** (76 ↔ 115 dk), 11× değil; kaldıraç sayıları **GEÇERSİZ** ve
> yeniden ölçülecek. **Kural ayakta, KANITI zayıf** — ayrıntı `§4`te.

## Vaka (HAVVA ölçtü, 10 Ekim 2026, KOŞU 22 · 03:55-04:10)

Koşunun "yabancı devlet gövdeleri" aşaması 704 devleti üç kovaya bölüyor.
Bölücü `uret_petek.py:7002-7009`: **LPT** — en ağır devlet en hafif kovaya;
ağırlık `6630-6657`de hesaplanıyor, vekil **hücre-birleşimi** ve kodun kendi
notu (`:6617`) **`hücre R²=0,96`** diyor. Üç kovanın üçü de *"yük payı %33"*
bastı. Devlet sayıları da neredeyse eşit çıktı: 234 / 236 / kalanı.

**Ölçülen süreler — ve biri GEÇERSİZ ÇIKTI:**
```
kova 2 (işçi 2)  236 devlet                 ≈ 13 dk sonra ÇÖKTÜ ⚠️ (bitmedi)
kova 0 (ana)     payı + Rusya (301 gün)     ≈  76 dk
kova 1 (işçi 1)  payı + İngiltere TEK BAŞINA ≈ 115 dk
⇒ TAMAMLANAN iki kovanın ayrışması  115 / 76 = 1,5×   (11× DEĞİL)
```
⚠️ İlk sürüm kova 2'yi *"≈10 dk'da bitti"* sayıyor ve oradan ~11× ayrışma
çıkarıyordu. **Bitmedi, ÖLDÜ** — GEOS segfault `0xC0000005`, PID 16260,
02:27:46; üç bağımsız kaynakla ölçüldü: Windows olay 1000 · ana logun
`işçi çıkış kodları [0, 3221225477]` satırı · işçi logunun 02:24:06'da
sessizce kesilmesi.
⇒ **Bitmemiş bir işin süresi bir ÖLÇÜM DEĞİLDİR.**
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
Kaldıraç da ölçüldü ve iddianın çok altında çıktı — **ama o sayılar da sonra
GERİ ÇEKİLDİ:**
```
ilk hesap: ağırlık yaması ≤ ~15 dk (~%3) · devlet içi bölme ~45-50 dk (~%9)
durum:     🔴 GEÇERSİZ — toplam iş hesabı ölü kovanın "10 dk"sını kullanıyordu
ayakta olan tek kısıt: TEK DEVLET BÖLÜNEMEZ, ve İngiltere yalnız ~100 dk
```
⇒ Kaldıraç koşu bitince **yeniden ölçülecek**, ve o ölçüm daha iyi olacak:
işçi 2'nin payı **ana süreçte** hesaplandığı için elimizde tek çekirdekli bir
referans var; vekilin hatası ona karşı ölçülebilir.
⇒ İki ders iç içe: ① vekil ortalamada doğru uçta yanlış ② **bir sayıyı görmek,
sebebini görmek değildir** — eşit sayı, eşit bölme sanıldı.

🔴 Ve şu kayda geçirildi: bir koordinatörün ürettiği en pahalı şey hüküm değil,
**ölçülmeden verilmiş hükümdür** — çünkü işçi onu uygulamak için koşar.


---

## §4 🔴 KANITIN GERİ ÇEKİLMESİ — ve yerine gelen DAHA İYİ ders

HAVVA 04:55 canlılığında **kendi 03:55 raporunu düzeltti:** *"işçi 2 çıktı,
ölüm DEĞİL"* demişti; ölçtü ve **çöktüğünü** buldu. Yanlış çıkarımının
kaynağını da kendi buldu:

> *"Ana logda 'FAZ 2 bekliyor … (işçi 2)' satırının kaybolmasını 'teslim
> edildi' diye okudum. Oysa ana süreç ölü işçiyi değil, SIRADAKİ BEKLENENİ
> basıyordu."*

> 🔴 **BEKLEME LİSTESİNDEN DÜŞMEK ≠ TESLİM. Bir bildirimin YOKLUĞU, bir
> tamamlanma bildirimi DEĞİLDİR.**

Bu, [`D269`](D269-kanal-da-bir-alettir.md) (*kanal da bir alettir*) ve
`CLAUDE.md §11`in *"çağıranı olmayan kapı, kapı değildir"* maddesiyle **aynı
aile**: üçünde de **bir şeyin OLMAYIŞI bilgi sanıldı.**
```
D269        çıktının KIRPILMASI        → eksik satır "yok" sanıldı
§11 çağıran kapının HİÇ ÇAĞRILMAMASI   → "denetim mevcut" sanıldı
D270 §4     bekleme satırının DÜŞMESİ  → "teslim" sanıldı
```
📌 Ve ölçüm acı: gerçek ayırt edici (ana süreçteki **çıkış kodu listesi**)
yalnız **FAZ 2 SONUNDA** basılıyor — yani çökmeden **2,5 saat sonra.** O 2,5
saat boyunca hem koşucu hem koordinatör çökmüş bir işçiyi canlı saydı, ve
koordinatör o yanlış zemine bir DERS yazdı.

### Motor partisine çıkan sıra — teşhis, hızdan ÖNCE
```
ⓒ işçi ölümü ANINDA ana loga yazılsın (PID + çıkış kodu)   ← EN ÖNCE
ⓑ işçi bitiş satırı (işçi 1'de VAR, işçi 2 hiç basamadı)    ← sonra
ⓐ devlet içi gün bölmesi (kazancı YENİDEN ölçülecek)        ← en son
```
⚠️ İlk sürümde ⓐ önceydi, çünkü yüzde kazancı vardı. Şimdi **ⓒ** önce:
**2,5 saatlik bir kör nokta, %9'luk bir hız kazancından pahalıdır.**

### Ve iki SAYAÇ da geçersiz — `§1.5`e girmeyecek
Koşu 22'nin `GOVDE-CAKISMA` ve `EKLEYİCİ KAPI` sayaçları **yalnız ANA sürecin
payını** taşıyor; logun kendisi beyan ediyor (*"yalnız ANA sürecin payı"*).
⇒ Bu koşuda onlar **alt sınır**, ölçüm değil; `§1.5`e ADIYLA **`ölçülemedi`**
diye işaretlenecek (`§3`in `OLCULEMEDI_KOVA`sı). Sessizce eski değeri bırakmak,
bayat bir sayıyı taze göstermek olurdu.
🔴 **ÜRÜN SAĞLAM, ÖLÇÜSÜ SAKAT** — ve ikisini ayırt etmek kritik: yedek yol 175
devleti ana süreçte hesapladı (61'i çökmeden önce diske yazılmıştı), yani
**çıktı eksik DEĞİL.** Eksik olan sayaçlar.

### Dersin kendisi hakkında
`D271` de aynı gece bir kez düzeltildi, ve ikisinde de düzelten **işçinin
ölçümü**, düzeltilen **koordinatörün çıkarımı** oldu.
🔴 Bir ölçümden ders yazarken sorulacak soru şuydu: ***bu, ölçtüğüm şey mi,
yoksa ölçtüğüm şeyin BİR AÇIKLAMASI mı?*** — bu gece bir soru daha eklendi:
***ölçtüğüm şey gerçekten BİTTİ mi?***

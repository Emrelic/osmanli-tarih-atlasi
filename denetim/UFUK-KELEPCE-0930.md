# ÇÖL KELEPÇESİ — Emre'nin kararı, ve "ayarlanabilir olsun" isteğinin ölçülmüş sınırı

Oturum: YILDIRIM BAYEZIT (koordinatör) · 30 Eylül 2026, 02:15
Emre'nin kararı: **"çölün ufku 7 gün olsun … fakat ayarlardan ayarlanabilir
olsun, çöl ufku 7 veya değil şeklinde"**

---

## 1 · İKİ MEKANİZMA DA ZATEN MOTORDA — rapor bayattı

`denetim/B-GORUNUM-0072-BANT.md §4` (21 Eylül) *"Kelepçe hâlâ motorda YAZILI
DEĞİL"* diyordu. **Bugün ölçüldü: YAZILMIŞ.**

| ne | nerede | nasıl açılır |
|---|---|---|
| çöl kelepçesi (hücre başına ufuk) | `arac/uret_petek.py:1844-1889` | `MOTOR_COL_UFUK_SAAT=<saat>` |
| ufuk bantları | `arac/uret_petek.py:2105-2123` | `MOTOR_UFUK_BANT=40,56,80` |

İkisi de **varsayılan KAPALI** ve kapalıyken çıktı bugünküyle birebir aynı
kalıyor (kapı tamamen atlanıyor — kayan noktada "aynı sonucu vermeli"ye
güvenilmemiş, doğru karar).

📌 **Ders:** rapora değil KODA bakmak gerekti. Rapor kendi ânının
fotoğrafıydı ve dokuz gün eskimişti; "yazılı değil" diye yeni baştan
yazsaydım var olan mekanizmanın ikinci bir kopyasını üretecektim.

---

## 2 · 🔴 AMA "AYARLARDAN AYARLANABİLİR" TAM OLARAK MÜMKÜN DEĞİL — sebebi yapısal

İlk düşüncem şuydu: *"bantlara bir `çöl` bayrağı koyarız, arayüz çölde 7
günden ötesini gizler — tek koşu, iki davranış."* **Kodu okuyunca çürüdü.**

Kelepçe açıkken motor alanı **normalleştiriyor** (`uret_petek.py:2115`):

```python
_sv = (_bs / YURUYUS_SAAT) if _YR_ESIK is not None else (_bs * NEHIR_KM_SAAT)
```

Yani her hücrenin mesafesi KENDİ bütçesine bölünüyor. Bunun sonucu şu:

> 🔴 **Kelepçe GÖSTERİMİ değil YÜRÜYÜŞÜ değiştiriyor.**
> Kelepçesiz koşuda bir yerleşim çölün İÇİNDEN geçip ötesindeki toprağa
> ulaşabilir. Kelepçeli koşuda o yürüyüş çölde kesilir, dolayısıyla çölün
> ÖTESİNDEKİ toprak da başka türlü paylaşılır.

⇒ "Çölde 7 günden ötesini gizle" ile "çölde 7 günde kes" **aynı şey değildir.**
Birincisi bir görünürlük süzgeci, ikincisi farklı bir hesap. Arayüzden
çevrilebilen şey ancak birincisi olurdu ve o, kelepçenin yaptığı şey değil.

### Üç seçenek ve bedelleri
| # | ne | bedel | sonuç |
|---|---|---|---|
| **a** | Kelepçe 7 günde SABİT üretilir; arayüzde yalnız BANT seçicisi (5/7/10) ayarlanabilir | **bu gecenin koşusu, +8 sn** | Emre'nin "7 gün" kararı uygulanır; "7 veya değil" anahtarı OLMAZ |
| b | İki ayrı bant kümesi üretilir (kelepçeli + kelepçesiz) | motor değişikliği + bant verisi **iki katı** (253 MB → ~500 MB) | gerçek anahtar olur, ama boyut zaten tek katıyla sınırdaydı |
| c | Kelepçe eşiği bant gibi ÇOKLU üretilir (çöl 5/7/10) | orta motor değişikliği; yürüyüş aşaması her eşik için tekrar (~8 sn/eşik, Voronoi paylaşılır) | en doğrusu; **ölçülmedi**, bu gece yapılmaz |

🔴 **BU GECE (a) YAPILIYOR** — Emre'nin asıl kararı ("çölün ufku 7 gün")
uygulanıyor, anahtar kısmı yapılmıyor ve sebebi burada yazılı. (c) ölçülmeye
değer ve ayrı bir pakete alınmalı; bir gecede, RAM darboğazında ve 5 saatlik
koşunun önünde **spekülatif motor değişikliği yapmak** bu deponun kendi
kuralına aykırı (`§9.1`: motor yamaları TEK SEFERDE, tam inşa koşusunda).

---

## 3 · Bu gecenin koşu parametreleri

```
MOTOR_COL_UFUK_SAAT=56      # çöl ufku 7 gün (56 saat) — EMRE'NİN KARARI
MOTOR_UFUK_BANT=40,56,80    # 5 / 7 / 10 gün bantları
```
📌 56 saat = 7 gün × 8 saat/gün (`YURUYUS_SAAT` ölçeği; 40=5 gün, 80=10 gün).
📌 Ölçülen kazanç (`B-GORUNUM-0072-BANT.md §3`, Sahra kutusu): çöl ufku 7 gün
   → sahipsiz kara 950.218 → 208.844 km², yani kazancın **%79,4'ü** korunuyor.
   5 günde kalsaydı yalnız %1,8'i gelirdi.

## 4 · Koşu süresi ve NİÇİN HEMEN BAŞLAMADI

Ölçüldü (`C:/atlas-kosu17/kosu17b.log`): tam dünya koşusu **4 sa 53 dk 44 sn**.
Emre'nin sınırı 20 saat ⇒ **geçiyor.**

🔴 Ama 30 Eylül 02:10 ölçümü: boş RAM **1,37 GB** ve düşüyor · 30 claude
süreci 8,3 GB · yedi paket aynı anda ısınıyor. Koşu bu deponun en ağır tek
süreci ve koşu 17 bir kez segfault vermişti. 4. saatte ölen bir koşu hem beş
saati hem paketlerin ilerlemesini götürür.
⇒ **Koşu, paketler teslim edip RAM açılınca başlatılacak.** Karar
koordinatörün nöbetinde (Emre: *"nöbet sende"*).

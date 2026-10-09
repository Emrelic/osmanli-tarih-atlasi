# LAB-8A-ALAN-1006 — "alan 612 → 1692 km²" BENİM ÖLÇÜM HATAMDI; alan DEĞİŞMEDİ

**Tek satır hüküm:** Tırgu Jiu'nun 1080 km²'si `600e2d00`da **Lugos'un ikinci parçasıydı**. Aynı sayaç anahtarını (`hat|gün|yan|yer`) taşıdığı için 8a sayacında **tek birim** sayılıyordu. Ne muafiyetteydi, ne eşiğin altındaydı, ne başka bir birime atfedilmişti. **Taşma alanı iki gövdede birebir aynı.** 8a'daki +1 tamamen **etiketin parçaları nasıl gruplandığından** geliyor.

**Gövde:** aynı site damgalı geometri (`0ef2d3e2…`, `uret_petek 8b6aaea5`). Her commit kendi `denetle.py`siyle, `degismez8()` doğrudan, salt okunur, **tekilleştirmeden** (ham parça listesi). Liste: `LAB-8A-ALAN-1006.tsv`.

## ① Ölçüm

### Hatamın mekanizması (önce bu)
`LAB-8A-KIMLIK-1006`daki "612 → 1692 km²" sayısını **kendi betiğim** üretti: ayrıntıyı `{anahtar: parça}` sözlüğüne yazıyordum. Aynı anahtarlı iki parçadan **sonuncusu** öncekinin üzerine yazdı. Lugos'un 1080 km²'lik parçası görünmez oldu ve "önce 612" okudum. Sayaç (`set`) doğru 1 sayıyordu; alan ayrıntım yanlıştı. **Tekilleştiren bir anahtarla toplanan ayrıntı, tekilleştirilen şeyi gizler.** Bu, bugün koordinatörün "defter farkı = yeni birim" okumasıyla aynı aile ve bu sefer benim işimde.

### Hat-gün: `d1920-hu-ro-fiili | 1920-03-31 | sag`

| | Parça (km² · derinlik) | Sayaç anahtarı | Birim |
|---|---|---|---|
| ÖNCE (`99d3eacc8`) | 612 · 24,8 km → **Lugos** · 1080 · 24,9 km → **Lugos** | 1 anahtar | **1** |
| SONRA (`8b95eeb63`) | 612 · 24,8 km → **Orsova** · 1080 · 24,9 km → **Tırgu Jiu** | 2 anahtar | **2** |

İki parça, iki alan, iki derinlik **aynı**. Değişen yalnız etiket. Lugos de jure Romanya'dan çıkınca her parça Romanya'nın kalan en yakın yerleşimine düştü; bu sefer ikisi **farklı** şehir oldu ⇒ bir anahtar ikiye bölündü.

### Evren (8a evren içi, bütün hatlar)

| | ham parça | 8a sayacı (tekil anahtar) | toplam taşma | çok parçalı anahtar (fazladan parça) |
|---|---|---|---|---|
| 600e2d00 | 1637 | 1508 | 1 895 260 km² | 118 (129) |
| 2fe8ada77 | **1637** | **1509** | **1 895 260 km²** | 117 (128) |

⇒ Geometri düzeyindeki taşma (parça sayısı ve alan) **hiç değişmedi**. Değişen tek şey 129 → 128: tek anahtara çöken fazladan parça sayısı.

## ② Ne bulamadım / ölçmediğim

- Sayaç anahtarının neden `yer` (etiket) içerdiği: tasarım gerekçesi kodda var mı, okumadım. Etiket o günkü de jure sahipliğin **en yakın** yerleşimi. Burada parçalar Crișana/Banat hattında, etiketler ise Oltenya'da (Orsova · Tırgu Jiu). Etiketin parçaya uzaklığını **ölçmedim**; "anlamsız etiket" demek için ölçüm gerekir.
- 129 çok parçalı anahtarın kaçının benzer bir veri değişikliğiyle bölünebilecek durumda olduğu ölçülmedi.

## ③ "8a tavanı birim mi, alan mı tutmalı?" sorusu için ölçülmüş girdi (hüküm senin)

| Ölçü | Etiket değişikliğine duyarlı mı | Bu vakada |
|---|---|---|
| tekil anahtar (bugünkü tavan) | **EVET**: aynı geometri, farklı etiket ⇒ ±n | 1508 → 1509 (geometri sabitken) |
| ham parça sayısı | hayır (geometri + `D8_ALAN_8A` eşiği) | 1637 = 1637 |
| toplam alan | hayır | 1 895 260 = 1 895 260 |

Bugünkü tavan, motorun geometrisi değişmeden de **veri etiketleriyle** oynuyor. Yani tavan iki şeyi birlikte ölçüyor: taşma ve etiketleme. Parça sayısı ya da alan yalnız birincisini ölçer. Ama bir uyarıyla: etiket, raporun **okunabilirliği** için gerekli ("hangi şehrin peteği"). Sayacı değiştirmek etiketi raporda tutmayı engellemez.

---
> 🔴 **DÜZELTME (LAB-8A-ESIK-1006):** Yukarıdaki tabloda *"ham parça sayısı — etikete duyarlı mı: hayır"* satırı **YANLIŞ.** "Ham parça 1637" `R["a"]` girdisidir (parça × etiket) ve etiket çıkışı senaryolarının 822/1509'unda oynar; 600e/2fe8 eşitliği tesadüftü. Etiketten bağımsız olanlar **geometrik parça sayısı (1101)** ve **parça alanı (1 895 364 km²)**: üç gövdede de birebir.

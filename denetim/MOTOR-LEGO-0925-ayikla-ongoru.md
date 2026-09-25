# MOTOR-LEGO-0925 · AYIKLAMA — ÖNGÖRÜ (ölçümden ÖNCE yazıldı, §11)

**Yazılış:** 25 Eylül 2026, sınav aleti koşturulmadan önce · emir M-5185 ④ⓑ
**Sınanan:** `_puan_bolgesi` ızgara puanında her noktanın yalnız ≤400 km'lik alt penceresini
hesaplamak (iki biçim: A = 10° karo + hale, B = nokta başına alt pencere).
**Ölçüt:** maske `np.array_equal` (bit bit) + poligon WKB eşitliği, tam pencereli hesaba karşı.

## Genel öngörü
**Hiçbir sınıfta bit farkı BEKLEMİYORUM** (A ve B için). Gerekçe: dışlanan her hücre için
`m ≥ 400 km` ⇒ o nokta orada zaten `0` yazardı; dahil edilen hücrelerin float hesabı aynı
dizinin DİLİMİ üzerinde, eleman eleman aynı işlemle yapılıyor; `int16` toplama sıra bağımsız.
Bu yüzden bir fark çıkarsa bu, gerekçenin değil KODUMUN (sınır/yuvarlama) kusuru olur.

## Sınıf sınıf — farkın en çok nerede çıkabileceği
| Sınıf | Beklenen | Risk nerede |
|---|---|---|
| **Kutup yakını** (üye |enlem| > 60°) | fark YOK | boylam halesi `1/cos φ` ile gerilir; φ'yi satır aralığının EN BÜYÜK |enlemi|nden almazsam (ör. noktanın kendi enleminden alırsam) kutba yakın satırlarda hücre KAÇIRIRIM. φ ≥ 89,99° ise bütün satır dahil edilmeli. Bu, en olası kusur yeri. |
| **Tarih çizgisi** (üye |boylam| > 170° ya da pencere > 180° geniş: Rusya, Kiribati, ABD) | fark YOK | Motor boylam farkını SARMIYOR (`_cx - lon` düz fark) ⇒ 179,9° ile −179,9° arası motor için ~360° uzak. Ayıklama da sarmadığı sürece aynı. Ayıklamaya "sarma" eklemek FARK üretir (motorun bugünkü davranışını değiştirir) ⇒ eklenmeyecek. 📌 Bu, motorun kendisinde ayrı bir soru: tarih çizgisinin iki yakası birbirine puan vermiyor. Kapsam dışı, not edildi. |
| **400 km'den geniş boşluklu gövde** (en yakın komşusu >400 km olan üye) | fark YOK | boşluk ayıklamayı etkilemez; tek başına nokta yalnız kendi alt penceresine yazar |
| **Pencere kenarı** (nokta pencere sınırına yakın ya da pencere `_kvx0`/`_kvy0` ile kırpılmış) | fark YOK | alt pencere [0, nx) / [0, ny) ile kırpılmalı; kırpma unutulursa dizin taşar (hata verir, sessiz değil) |
| **Sıradan gövde** | fark YOK | — |

## Süre öngörüsü
- A (10° karo): önceki 12 gövdelik ölçümde ~75×. Geniş örnekte **50-100×** bekliyorum.
- B (nokta başına): A'dan **hızlı ya da eşit** bekliyorum (hale tekrarı yok, en küçük dilim),
  ama küçük gövdelerde (az nokta, küçük pencere) fark önemsiz. Numpy çağrı sayısı nokta başına
  aynı (A'da karo × noktadır) ⇒ B'nin çağrı sayısı daha AZ.
- Tam pencere yolunun en yavaş olduğu yer: geniş pencereli dev gövdeler (İngiltere, Rusya,
  Fransa sömürge dönemi) — kazanç orada en büyük.

## Çürütme ölçütü
Herhangi bir sınıfta tek bir maske farkı ⇒ öngörü ÇÜRÜDÜ, yama YAZILMAZ; önce fark
açıklanır.

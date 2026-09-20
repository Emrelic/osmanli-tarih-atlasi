# `savas_basi` KAYNAK ÖRNEKLEMİ — ÖNGÖRÜ (TDV'ye bakılmadan yazıldı)

**Oturum:** ANTLASMA-KADEME-0074 · 21 Eylül 2026 · görev 1.MURAT M-4903
**Sınav anı:** hiçbir TDV sayfası açılmadan önce. Bu noktada yalnız `data/savaslar.js`
sayıldı (aşağıdaki hassasiyet dağılımı), hiçbir dış kaynağa bakılmadı.
**Evren:** `ANTLASMALAR` 41 künye · `savas_basi` dolu **37** · `savas_basi_kaynak` **0**.

## Ölçülmüş çıkış noktası (TDV'siz, yalnız veri sayımı)
| hassasiyet | kayıt |
|---|---|
| `YYYY-01-01` — yıl (gün iddiası YOK) | 2 |
| `YYYY-MM-01` — ay ya da "ayın 1'i" (D213: AYIRT EDİLEMEZ) | 7 |
| tam gün | 28 |

## Ö1 — TDV'de maddeyi bulma oranı
Örneklem 10 antlaşma. D218 TDV isabetini %81 ölçmüş, ama o oran yer-kişi maddeleri
içindi; D217 "TDV olay değil yer-kişi ansiklopedisidir" diyor ve antlaşma bir OLAYDIR.
Öngörü: **10 slug'ın 7–9'u canlı** (merkezî tahmin 8); tutmayanlarda kapsayıcı madde
(savaşın geçtiği yer / devlet) denenecek.

## Ö2 — Gün doğrulanma oranı
Öngörü: TDV'de maddeyi bulduğum yerlerde savaşın başlangıcı **çoğunlukla ay/yıl
taneciğinde** anlatılır, gün verilmez. Tam gün doğrulanabilen: **10'da 4–6**
(merkezî tahmin 5). "Doğrulanamadı" burada **bir sonuçtur**, kusur değil.

## Ö3 — Uyuşmazlık
Öngörü: en az **1, en çok 3** kayıtta TDV başka bir gün/ay söyler. En olası yerler:
① `1463-01-01` (Venedik savaşı — yıl damgası zaten gün iddiası taşımıyor, TDV ay
verirse atlas KABALAŞMAZ ama kaynak kazanır), ② `1737-07-01` Belgrad ve
③ `1672-06-01` Bucaş (`-01` biçimi D213'ün ayırt edemediği sınıf).
🔴 En büyük risk `1443-09-01`, `1593-07-01`, `1603-09-01`, `1663-04-01`, `1711-05-01`:
bu yedi kayıt ekranda gün gibi görünebilecek `-01`lerdir.

## Ö4 — Şema alanı
`savas_basi_kaynak` 41 kaydın hepsine BOŞ olarak eklenmez (41 kayıtlık gürültü);
yalnız TDV'de DOĞRULANAN kayıtlara, alıntıyla birlikte yazılır. Doğrulanamayanda alan
YOKTUR — "kaynak arandı, bulunamadı" ayrı bir satır olarak denetim raporuna geçer.
Bu bir öneridir; şema hükmü 1.MURAT'ta.

## Ö5 — Ekrana etkisi
Öngörü: ① düğmesi zaten GÜN YAZMIYOR (M-4893 şık (a)), bu yüzden örneklemin sonucu
ne çıkarsa çıksın **bugünkü ekranda hiçbir şey değişmez**. Kaynak işi ekranı değil
VERİ BORCUNU kapatır. Eğer örneklemde uyuşmazlık çıkarsa değişecek olan `savas_basi`
günüdür ve onun yetkisi 1.MURAT'tadır (D207).

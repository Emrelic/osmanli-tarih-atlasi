# ÖNGÖRÜ — BÖLGE `kapat()` YARIÇAPI, ÜÇ DEĞERDE

> **Yazan:** MOTOR-0902 · **Damga:** 2 Eylül 2026, ölçüm betiği KOŞULMADAN ÖNCE
> **Kalem:** `MOTOR-KUYRUK-0902.md` ④ — bölge yaslanması
> **Taban:** `denetim/BULGU-TOPOGRAFYA-OK107.md` (PETEK %5,4 · BÖLGE %2,6)

🔴 **BU BELGE ÖLÇÜMDEN ÖNCE YAZILDI.** Sonradan yazılan beklenti, ölçümü
gördükten sonra ona göre şekillenir ve hiçbir zaman yanlış çıkmaz — yani
hiçbir şey öğretmez. Önce yazılan beklenti **yanlış çıkabilir**, ve ancak
yanlış çıkabilen bir şey bilgi taşır.

## DENEY
```python
# uret_petek.py:3757-3758 — bugünkü hâl
bg = unary_union([PETEK_D[j] for j in _uyeler[ad]])
bg = poligonal(delikleri_doldur(kapat(bg)).intersection(KARA))   # kapat(yaricap=0.15)
```
`kapat()` üç yarıçapta koşulacak: **0,15° (bugünkü) · 0,05° · 0,00°**
ve her yarıçapta **İKİ sayı BİRLİKTE** ölçülecek:
```
① yaslanma oranı   nehir + sırt, "hat üzerinde" eşiği 0,02° ≈ 2 km
② kopuk bölge parçası sayısı
```
⚠️ **Üç yarıçap AYNI örneklemi ve AYNI hat kümesini kullanacak**, yoksa
tablo kendi içinde kıyaslanamaz (OK107'nin kendi uyarısı).

### GİRDİ — ve niçin SNAPSHOT
```
petek_govde_ONCESI_1030.js   PETEK_D, 10:30 koşusu   ← canlı koşu EZECEK, kopyalandı
donemler_ONCESI_1030.js      PETEKLER (ad↔indeks), AYNI koşu
data/bolgeler.js             üyelik (ad + uy)
veri-kaynak/                 ne_10m_rivers · ne_10m_geography_regions_polys
```
📌 Petek tabanı ile üyelik farklı koşulardan geliyor; üyelik `k12_merkez`
zincirinden türer ve **tavandan bağımsızdır**, o yüzden eşleşmeleri
beklenir — ama **ölçülecek** (eşleşmeyen ad sayısı raporlanacak).

---

## ÖNGÖRÜLER

### ① HAT DOĞRULAMASI — r=0,15°'te bölge yaslanması **%2,0 – %3,2** bandında
Bu, öngörüden önce **kendi ölçüm hattımın sınavı**: OK107 aynı ölçütle
**%2,6** ölçtü. Bandı tutturursam hat doğrudur ve ②-⑤ okunabilir.
- **Mazeret:** 🟡 KISMÎ. Petek tabanım 10:30 koşusundan (eski tavan),
  OK107 başka bir koşunun yayınından ölçtü; taban farkı bandı kaydırabilir.
  **Ama bandın TAMAMEN dışına çıkarsa mazeret YOK** — hattım yanlış demektir
  ve ②-⑤'i raporlamam.
- **Çıktı/birim:** kendi betiğimin tablosu · YÜZDE (hat üzerindeki örnek /
  toplam sınır örneği)
- **Neye karşı:** OK107'nin %2,6'sına karşı

### ② YARIÇAP KÜÇÜLDÜKÇE YASLANMA **ARTAR** (monoton: 0,15 < 0,05 < 0,00)
- **Güven: YÜKSEK — bu geometri, tahmin değil.** `kapat()` **salt
  ekleyicidir** (`unary_union([k, g])`), yarıçap küçüldükçe daha az ekler,
  içbükey ayrıntı daha çok korunur. r=0 iken `buffer(0).buffer(-0)` = `g`,
  yani ham birleşim.
- **Mazeret:** 🔴 **YOK.** Tutmazsa `kapat()`ın mekanizmasını yanlış
  anlamışım demektir.
- **Birim:** yüzde puan

### ③ r=0,00°'da yaslanma **%3,5 – %5,0** — peteğin %5,4'üne yaklaşır, ULAŞMAZ
Ulaşmamasının sebebi: `delikleri_doldur()` ve `.intersection(KARA)` hâlâ
koşuyor, ve bölge zaten **iç petek sınırlarını yutuyor** (birleşim) —
yaslanmış kenarların bir kısmı bölgenin İÇİNDE kalıyor, sınırında değil.
- **Mazeret:** ⚪ **VAR** — bu bir TAHMİN, ölçüm değil. Bandın **dışına**
  çıkması öğretir; içinde kalması bir şey öğretmez.

### ④ 🔴 KOPUK PARÇA SAYISI YARIÇAP KÜÇÜLDÜKÇE **ARTAR**
Kararın kilidi budur. Kodun kendi gerekçesi (1299 İnegöl'ün Söğüt-Bilecik'ten
ayrı bir "ada" gibi çizilmesi) tam bu riski anlatıyor.
- **Mazeret:** 🔴 **YOK.** Artmazsa bu **büyük bir bulgudur**: `kapat(0,15°)`
  bugün **karşılığı olmayan bir bedel** ödüyor demektir — yaslanmanın yarısını
  siliyor ve karşılığında hiçbir kopukluk önlemiyor.
- **Birim:** adet (bölge başına geometri parçası toplamı) · AYRICA "en az bir
  parça artan bölge" sayısı

### ⑤ 0,05° BİR ORTA YOL SUNAR — yaslanmanın çoğunu geri verir, kopukluğun azını üretir
Gerekçe: 0,05° hâlâ ~11 km'lik boşlukları köprüler; petekler arası "ince
aktif olmayan komşu şeridi" çoğunlukla bundan dardır.
- **Mazeret:** ⚪ **VAR** — tahmin. Çürürse ④ ile ② arasında ödünleşme
  yoktur demektir ve karar ikili olur (0,15 ya da 0,00).

---

## KABUL ÖLÇÜTÜ — ölçümden sonra
```
🟢 KÜÇÜLTME HAKLI     ② tuttu VE ④ ARTMADI (ya da ihmal edilebilir arttı)
🟡 EMRE'YE / ORTA YOL  ② tuttu, ④ arttı ama 0,05°'te kazanç > bedel  (⑤)
🔴 KÜÇÜLTME YANLIŞ     ④ belirgin arttı — OK107'nin kendi sınavı bunu diyor:
                       "ikincisi artıyorsa (a) yanlıştır"
```

## ⚠️ VE ŞİMDİDEN YAZILIYOR — BU BİR SİMÜLASYONDUR, KOD DEĞİŞİKLİĞİ DEĞİL
`arac/uret_petek.py` şu an **parmak izlidir ve koşu sürüyor** (PID 27596,
11:01:53'ten beri). Bu ölçüm yalnız **üretilmiş çıktılar** üzerinde koşar,
motora **dokunmaz**. Kod değişikliği — eğer hüküm onu gerektirirse — ancak
koşu bittikten sonra ve **bu tabloda ölçülen sayıyla** yapılır.

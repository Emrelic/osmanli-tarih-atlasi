<!-- DURUM: BEKLIYOR ¦ 2026-08-16 ¦ KOSUDAN ÖNCE yazıldı, damgalı -->
# PUANLAMA KAPISI — KOŞU ÖNGÖRÜSÜ · `MOTOR-PUANLAMA İŞ 3`

**Yazan** MOTOR PUANLAMA · **Damga** koşu başlamadan, commit'i koşununkinden ÖNCE.

---

## 🔴 ⓪ ÖNCE BİR TUTARSIZLIK — VE ÖNGÖRÜMÜ O BELİRLEDİ
Kapının ne keseceğini ölçmek için bugünkü boyalı alanı **ızgara Voronoi'siyle**
türettim. Motorun kendi çıktısıyla karşılaştırınca ayrıştı:
```
1600-06-15   benim ızgara türetmem   69.788.153 km² boyalı
             motorun 4. koşusu       43.313.000 km² (Osmanlı 4,756 M + yabancı 38,557 M)
             FARK                    ~26,5 M km²
```
**Sebep: çöl tavanı.** Motor uzak/boş coğrafyadaki petekleri **zaten** buduyor
(`Çöl tavanı` aşaması, 38 poligon) ve benim ızgara türetmem onu hiç modellemiyor.
⇒ **Kapının keseceği alanın büyük kısmını çöl tavanı ZATEN kesmiş olabilir.**

📌 Bu, `A1 tavanı` vakasının **ters yüzü**: orada bir düzeltme sonraki aşama
tarafından geri alınıyordu; burada bir düzeltmenin işini **önceki aşama zaten
yapmış** olabilir. İkisi de *"iki aşama arasında sözleşme yok"* ailesinden.

⚠️ **Bu yüzden ①'in bandını DAR yazamıyorum ve DAR YAZMIYORUM.** İŞ 2'de
bantları daralttım ve iki kalem çürüyüp bilgi verdi; burada dar bant yazmak
**bilgi değil, sahte kesinlik** üretirdi — çünkü modelimin bir aşaması eksik
olduğunu ÖLÇTÜM. Gerekçesiz dar bant, gerekçeli geniş banttan kötüdür.

---

## ÖNGÖRÜ — sekiz kalem

### ① KAPININ KESTİĞİ ALAN (`PUANLAMA: kesilen … km²`)
```
ızgara türetmem (çöl tavanı YOK)   20-25 M km² (kesitlere göre %27-36)
🟡 ÖNGÖRÜM                          2 - 15 M km²
```
🟡 **MAZERET VAR ve kapsamı önceden yazılı:** çöl tavanının ne kadarını zaten
kestiğini ölçmedim. **Bandın altına düşerse (< 2 M)** çöl tavanı işi neredeyse
tümüyle yapmış demektir ve **kapı büyük ölçüde gereksizdir** — bu bir bulgu olur.
**Üstüne çıkarsa (> 15 M)** çöl tavanı sandığımdan dar çalışıyor demektir.

### ② OSMANLI — 9/9 KESİTTE DEĞİŞMEZ
🔴 **MAZERETİ YOK.** Ölçtüm (M-0740): Anadolu'da puanlamanın değdiği alan
**0 km² (%0,00)**, Rumeli **0 km² (%0,00)**. Kapı çekirdeğe **matematiksel
olarak** ulaşamıyor: orada her hücrenin 200 km'sinde sahipli merkez var.
⇒ Osmanlı bir tek kesitte bile oynarsa **kapı beklenmedik bir yere dokunmuş**
demektir ve **yayın durur.**

### ③ TAMAMEN BOŞALAN GÖVDE-DÖNEMİ (`tamamen boşalan: N`)
```
🟡 ÖNGÖRÜM   50 - 400
```
Bunlar tek noktalı, uzak, küçük devletler (Okyanusya · Sahra · Sibirya künyeleri).
🟡 Mazeret: sayı devlet-dönem çiftine bağlı ve 513 dönem × 130 devlet var.

### ④ YABANCI TOPLAM DÜŞER
```
bugün 386,5 M km² (9 kesit toplamı)
🔴 ÖNGÖRÜM: DÜŞER. Artması İMKÂNSIZ — kapı yalnız KESER, ekleyemez.
```
🔴 **MAZERETİ YOK.** Yabancı toplam **artarsa** kapı yanlış yönde çalışıyor
demektir ve bu bir kod hatasıdır, veri değil.

### ⑤ 🔴 A1 TUZAĞI — KAPININ BIRAKTIĞINI SONRAKİ AŞAMA GERİ VERİYOR MU
Kapı gövdeyi kesiyor; **ardından** `delikleri_doldur` · `kapat` · serbest kenar
çalışıyor. Şartname bunu adıyla istemişti ve soruyu **koşudan önce** yazıyorum:
```
🔴 ÖNGÖRÜM: kapının kestiği alan GERİ VERİLMEZ.
```
🔴 **MAZERETİ YOK.** Gerekçe: kapı `delikleri_doldur`dan **sonra** uygulanıyor
(`g = poligonal(g.intersection(KARA))` satırının hemen ardından), yani doldurma
kapıdan **önce** bitiyor. Geri verilirse sıra yanlış demektir.
⚠️ **Sınav:** `kesilen km²` toplamı ile kesitlerdeki alan düşüşü **tutarlı**
olmalı. Kesilen büyük ama alan düşüşü küçükse **bir aşama geri veriyor.**

### ⑥ DEĞİŞMEZ 1 — SAHİPSİZ SAYISI DEĞİŞMEZ
🔴 **MAZERETİ YOK.** Sahipsizlik **veriden** ölçülüyor (`d`/`v`/`s`), kapı
**geometriye** dokunuyor. İkisi ayrı eksen.

### ⑦ SÜRE — +25 ila +35 dakika
Ölçüldü: dönem başına 3,5 sn × 513 ≈ 29 dk. 🟡 Mazeret: makine yükü.
📌 Önbellek (Ⓒ) **bilerek kapalı** — koordinatörün kararı (M-0744): kapı ilk kez
koşuyor, önbellek de eklenirse çıktı yanlış çıktığında *"algoritma mı, önbellek
mi"* sorulamaz. Bu koşunun çıktısı Ⓒ'nin referansı olacak.

### ⑧ `renk_olc` / `renk_fark` — 0 REGRESYON
🔴 **MAZERETİ YOK (kapı ekseninde).** Kapı renk seçmiyor, alan kesiyor.

---

## KOŞUDAN SONRA
| # | kalem | mazeret | öngörü | ölçüm | sonuç |
|---|---|---|---|---|---|
| ① | kesilen alan | 🟡 çöl tavanı | 2–15 M km² | | |
| ② | **Osmanlı 9/9** | 🔴 yok | değişmez | | |
| ③ | tamamen boşalan | 🟡 | 50–400 | | |
| ④ | yabancı toplam | 🔴 yok | DÜŞER | | |
| ⑤ | **A1 tuzağı** | 🔴 yok | geri verilmez | | |
| ⑥ | Değişmez 1 | 🔴 yok | değişmez | | |
| ⑦ | süre | 🟡 | +25–35 dk | | |
| ⑧ | renk regresyonu | 🔴 yok | 0 | | |

📌 Beş kalem **mazeretsiz.** İŞ 2'de öğrendiğim şey buydu: mazeretli bir kalem
çürüdüğünde tartışılır, mazeretsiz bir kalem çürüdüğünde **öğrenilir.**

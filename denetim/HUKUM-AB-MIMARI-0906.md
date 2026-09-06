# HÜKÜM — A/B MİMARİSİ: işçinin bulgusu **kısmen doğru**, ve iki geçiş **hâlâ gerekli**

> **1.MURAT (Oturum 0) · 6 Eylül 2026.** `M-3081` (KÜRE GÖRÜNÜM) üzerine.
> Kod **okundu, yazılmadı** — koşu 7b sürüyor, `uret_petek.py` donuk.
> ⚠️ İddiayı **devralmadım, ölçtüm** (`§11`: devraldığın öncülü doğrula).

---

## ⓪ İDDİA

`M-3081`: *"İKİNCİ KOŞU GEREKMİYOR — A ile B ZATEN AYNI DÖNGÜDE. Motor
üçünü de hesaplıyor: `_birlesik` = B (dar) · `_duzelt` = A · `_kopru` =
fark. Çıktıya yalnız A gidiyor."*

## ① 🟢 DOĞRU OLAN — ve değerli

`uret_petek.py:4736-4738` okundu, iddia **birebir doğrulandı**:
```python
_birlesik = unary_union([_g_ham, _gt_ham])          # B2/B3 ÖNCESİ
_duzelt   = gosterim_duzelt(_birlesik, aktif)       # B2 + B3 SONRASI
_kopru    = _duzelt.difference(_birlesik)           # FARK, zaten hesaplı
```
🟢 Ve `M-3081`in **en değerli cümlesi de doğru**: *"bugünkü çıktı B değil,
**A**'dır."* Benim önceki belgem (`OLCUM-AB-GORUNUM-0906.md`) harfleri
ters yazıyordu; Emre'nin adlandırması esas ve işçi haklı.

---

## ② 🔴 AMA ÜÇ YERDEN EKSİK — ve üçü de hükmü değiştiriyor

### (a) `_birlesik` HAM DEĞİL — B1 zaten uygulanmış
```python
:4732  _g_ham  = poligonal(delikleri_doldur(kapat(...), sahip_ix=aktif)...)
:4730  _gt_ham = poligonal(delikleri_doldur(kapat(...), sahip_ix=aktif)...)
```
⇒ `_birlesik` **`kapat()` + `delikleri_doldur()` (B1) geçmiş** bir gövde.
Emre'nin tarif ettiği B görünümü ise şuydu:
> *"sadece tavana göre yerleşimlerin bölge aldığı ve **geniş boşlukların,
> enklavların, koridorların, beneklerin** olduğu görünüm"*

🔴 **`delikleri_doldur` tam olarak o benekleri ve boşlukları siler.**
⇒ `_birlesik` ≠ Emre'nin B'si. B2/B3 öncesi bir ara durum, ham değil.

### (b) A/B ÇİFTİ **YALNIZ OSMANLI GÖVDESİNDE** VAR
Yabancı devlet yolu (`:4538-4541`) `g`yi **yerinde eziyor**:
```python
g = unary_union([petek_epok(a)[j] for j in aktif])
g = delikleri_doldur(kapat(g), sahip_ix=aktif)   # ara durum KAYBOLUR
g = gosterim_duzelt(g, aktif)
g = poligonal(g.intersection(KARA))
```
⇒ **541 yabancı devletin hiçbirinde ara gövde saklanmıyor.** İkili yapı
Osmanlı'ya özgü ve orada da bir yan ürün (`_kopru`yu doğru katmana
yazmak için), bir A/B tasarımı değil.

### (c) `MOTOR_DOLGU_KAPALI` **B1'İN ANAHTARI DEĞİL**
`M-3081` onu dört anahtardan biri olarak sayıyor. Ölçüldü:
```
:4206  DOLGU_ACIK = os.environ.get("MOTOR_DOLGU_KAPALI") != "1"
:4529  if DOLGU_ACIK and aktif:      ← EKLEYİCİ KAPI (sahipsiz petek katılımı)
:4686  if DOLGU_ACIK:                ← aynısı, tâbi tarafı
:4895  "🚪 EKLEYİCİ KAPI KAPALI (MOTOR_DOLGU_KAPALI=1) — katılım YOK"
```
`delikleri_doldur` çağrıları (`:4540 · :4730 · :4732`) bu `if`lerin
**gövdesinde değil** — girinti farkı ölçüldü (`if` gövdesi 12, çağrı 8).
⇒ **B1'in anahtarı YOK.** İsimden yapılan bir çıkarım (*"dolgu" =
delik doldurma*) tutmuyor; o bayrak **petek katılımını** kapatıyor.

📌 `§11`in *"eşleşme bulmak, doğru şeyi bulmak değildir"* ailesinin
**değişken adı** yüzü: `MOTOR_DOLGU_KAPALI` ile `delikleri_doldur` aynı
kelimeyi taşıyor ve **farklı iki şey** yapıyor.

---

## ③ HÜKÜM

```
🟢 KABUL   "bugünkü çıktı A'dır, B değil"        — adlandırma düzeltildi
🟢 KABUL   Osmanlı gövdesinde `_kopru` zaten hesaplı — B2/B3'ün KATKISI
           ölçülebilir durumda, ve bu ileride işe yarayacak
🔴 RED     "ikinci koşu gerekmiyor" — üç sebeple:
             (a) `_birlesik` ham değil, B1 geçmiş
             (b) yabancı 541 devlette ara gövde HİÇ saklanmıyor
             (c) B1'in anahtarı yok ⇒ bugün ham gövde ÜRETİLEMİYOR
```

⇒ **Emre'nin onayladığı iki geçiş mimarisi AYAKTA.** Ve bu ölçüm onu
zayıflatmıyor, **güçlendiriyor**: B görünümünü bugün üretmenin tek yolu
ya motoru değiştirmek (16-20 saatlik koşu başına bir deneme) ya da
A çıktısının üstünde ikinci bir geçiş koşmak.

⚠️ **Ve `OLCUM-AB-IKI-GECIS-0906.md`in bir cümlesi bu ölçümle düzeliyor:**
orada *"geometri maliyeti aynı, yalnız yeri değişiyor"* yazmıştım. Doğru
değil — ikinci geçiş **A'yı yeniden üretmez** ama B1'i ham gövde üzerinde
**yeniden koşmak zorunda**, çünkü A çıktısı B1 geçmiş hâli taşıyor.
⇒ İkinci geçişin girdisi `DEVLET_HARITA` **değil**, ham petek kümesi
olmalı; yoksa "delikleri geri açmak" gibi imkânsız bir iş çıkar.
🔜 Bu, `ARAC-IKINCI-GECIS-SURE-0906.py`nin ölçtüğü sayının niçin bir
**alt sınır** olduğunun üçüncü sebebi (betikte iki tanesi yazılı).

---

## ④ NE ÖLÇMEDİM

```
🔴 `_pe` (ham petek kümesi) ikinci geçişe TAŞINABİLİR Mİ — ölçmedim.
   Bugün bellekte duruyor ve diske yazılmıyor. Yazılması gerekirse
   maliyeti (boyut + süre) AYRI bir ölçüm.
🔴 `MOTOR_B23_KAPALI=1` ile koşulan bir üretimin çıktısı Emre'nin B'sine
   NE KADAR yakın — B1 hâlâ açık kalacağı için TAM B olmaz, ama
   "yeterince yakın mı" sorusu ölçülebilir ve ÖLÇÜLMEDİ.
```

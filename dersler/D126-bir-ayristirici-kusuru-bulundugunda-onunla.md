# BİR AYRIŞTIRICI KUSURU BULUNDUĞUNDA, ONUNLA ÖLÇÜLEN HER SAYI AYNI ÖLÇÜDE KİRLENMEZ — DELTA TEMİZ KALIRKEN MUTLAK SAYI KİRLENEBİLİR.

> Kimlik `D126` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🟢 **BİR AYRIŞTIRICI KUSURU BULUNDUĞUNDA, ONUNLA ÖLÇÜLEN HER SAYI AYNI
  ÖLÇÜDE KİRLENMEZ — DELTA TEMİZ KALIRKEN MUTLAK SAYI KİRLENEBİLİR.**
  *(5 Eylül 2026 · `NEHİR SÜRTÜNME`, kendi gölgesini tarayarak)*

  Bir regex kusuru bulunduktan sonra *"bu gecenin hangi sayıları
  etkilendi"* diye tarandı, ve cevap **kaynağa göre ayrıştı**:
```
🔴 `isg_kirilma.py`  `olaylar*.js`i naif regexle okuyordu ⇒ ETKİLENDİ
                     («4 açık kalem» iddiası — zaten geri çekilmişti)
🟢 `yama_sinav.py`   `olaylar*.js`i HİÇ OKUMUYOR — yalnız `d:`/`v:`
                     sınır günlerini `girdi.yukle`'den topluyor ve
                     *"maddesi var mı"* diye HİÇ sormuyor
                     ⇒ bütün YENİ/KAYBOLAN kırılma çıktıları TEMİZ
⚠️ `4s` gölgesi AYRI ve SÜRÜYOR — `4c`/`4d`/`hayalet` MUTLAK sayıları
   hâlâ `DOĞRULANMADI`
```
  ⇒ ***Bir aletin iki kusuru olabilir ve ikisi farklı çıktıları
  kirletebilir.*** *"Alet bozuktu"* demek yetmez: **hangi kusur, hangi
  sayıyı** sorulur. Burada deltalar kurtuldu çünkü onları üreten yol
  kusurlu ayrıştırıcıya **hiç uğramıyordu.**

  🟢 **Ve depo taraması temiz çıktı:** `olaylar` geçen 34 betiğin
  **27'si** doğru yolu kullanıyor (node / `girdi` / `olaylari_yukle()`),
  **naif regex kullanan araç 0.** Kör nokta yalnız bir scratchpad
  betiğindeydi ve o depoda değil.
  📌 Ve *"riskli"* çıkan üçü **veri dosyasıydı, ayrıştırıcı değil** —
  içlerinde `t:"…"` geçmesi onları **kayıt** yapıyor, okuyucu değil.
  ⇒ *"Bunu kim ayrıştırıyor"* taraması, **okuyanı kayıttan ayırmalı**;
  ayırmazsa kendi veri dosyalarını şüpheli listesine yazar.

  🔴 **VE İLERİYE DÖNÜK BİR UYARI ÖLÇÜLDÜ — 14 kayıt nerede:**
```
olaylar_ek21.js    3 madde   1811 Tuna cephesi
olaylar_ok109.js  11 madde   **1918-10-28 … 1919-11-27**
                             Mondros sonrası: mütareke ve barış antlaşmaları
```
  ⇒ İkincisi **yoğun ve kritik bir pencere**, ve o dönemi naif bir
  regexle ölçen herhangi bir gelecek betik **on bir maddeyi birden**
  kaçırır.

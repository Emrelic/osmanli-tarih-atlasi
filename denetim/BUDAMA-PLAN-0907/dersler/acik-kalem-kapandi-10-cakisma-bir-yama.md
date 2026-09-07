# 🟢 AÇIK KALEM KAPANDI: "10 ÇAKIŞMA" BİR YAMA KUSURU DEĞİL, GERÇEKTİ —

> **Vaka anlatısı — `CLAUDE.md §11`den çıkarıldı (BUDAMA-0907).**
> Kuralın kendisi ve hükmü `CLAUDE.md §11`de **kalmıştır**;
> burada duran, o kuralı doğuran VAKADIR.
> Eski konum: `CLAUDE.md` satır **0** · 823 token

---

- 🟢 **AÇIK KALEM KAPANDI: "10 ÇAKIŞMA" BİR YAMA KUSURU DEĞİL, GERÇEKTİ —
  VE KÖK SEBEP ÇÖZÜCÜNÜN PAY BIRAKMAMASI.** *(4 Eylül 2026 gecesi)*

  Aynı gün `bind()`i 8 bite yuvarlamayı denemiş, çakışma `0 → 10` fırlayınca
  *"0,1'lik bir ΔE kaymasının yapabileceği şey değil"* deyip geri almıştım.
  Kalem **açık** bırakıldı: *"önce niçin 10 çakışma doğduğunu ölç."* Ölçüldü:
```
bind()'in bütün çağrıları 0-255 ölçekte     ⇒ yamada ölçek hatası YOK
en düşük SINIRDA değerler: 12,02 · 12,04 · 12,05 · 12,05 · 12,07 · 12,08 …
8 bit yuvarlamanın kayması ~0,3            ⇒ bunların ~10'u eşiğin ALTINA iner
```
  ⇒ **Sayı birebir tuttu.** Yani o 10 çift bir artefakt değil: **ekranda
  (8 bit) zaten eşiğin altındalar.** `renk_olc`un float harmanı **iyimser**.

  🔴 **KÖK SEBEP: çözücü eşiğin KIL PAYI üstünü seçiyor.** 4 Eylül'de
  uygulanan 16 rengin *"en yakın engel"* değerleri: 12,1 · 12,1 · 12,2 ·
  12,2 · 12,3 · 12,4 · 12,5 … Pay **0,1**. Ölçüm biçimindeki en küçük
  değişiklik — ya da ekranın 8 bitlik gerçeği — onları çeviriyor.

  🟢 **VE PROJE BU İLKEYİ ZATEN BİLİYOR, YALNIZ BİR YERDE UYGULUYOR:**
```
renkler.py:3513   _GUVENLI_PAY = 13.0   "sınırda (12,0-13,0) geçen bir aday
                                         KABUL EDİLMEZ … amaç ucu ucuna
                                         değil RAHATÇA geçmek"
renk_olc.py --oner   DE_KOMSU = 12.0    pay YOK
```
  Aynı proje, aynı ilke, iki farklı sayı. Açıklık yükseltmesi rahat geçmeyi
  şart koşuyor, renk çözücüsü koşmuyor.

  ⇒ **BORÇ (koşu 5 bitince):** `oner()` hedefi `DE_KOMSU + pay` olsun
  (`renkler.py`nin 13,0'ı emsal). Bedeli ölçülmeli: pay büyüdükçe çözülemeyen
  kimlik artar — `§11`in *"eşiği gevşetme, SIKILAŞTIR"* kuralıyla birlikte
  okunmalı.
  ⚠️ Bugün UYGULANMADI: `renkler.py` koşu sırasında DONUK (üç parmak izli
  dosyadan biri) ve pay değişikliği yeniden çözüm gerektirir.

  📌 Ve dersin kendisi: ***bir eşiğin kıl payı üstünde durmak, eşiği
  geçmek değildir.*** Ölçüm değişmese bile ÇİZİM değişir — ve çizim 8 bittir.


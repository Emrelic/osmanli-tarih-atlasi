# AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR — VE BİRİ EKRANDA OLMAYAN BİR RENGİ ÖLÇÜYOR.

> Kimlik `D119` · `CLAUDE.md §11` dizininden taşındı (10 Eylül 2026 budaması).
> Slogan orada, vaka burada.

---

- 🔴 **AYNI RENGİ İKİ ALET FARKLI HARMANLIYOR — VE BİRİ EKRANDA OLMAYAN BİR
  RENGİ ÖLÇÜYOR.** *(4 Eylül 2026 · `ispanya` uyarısını kovalarken çıktı)*

  `renk_olc` her koşuda tek bir uyarı basıyordu: *"ispanya ALTLIKTAN
  yeterince ayrışmıyor, DE 15,0"*. Ölçüldü ve **iki alet aynı renk için
  farklı sayı veriyor:**
```
renkler.py  _de3(lab_r, alt)  = 14,9820   → uyarı ÖTÜYOR  (< 15)
renk_olc    dE(lab_o, ALT)    = 15,0766   → ötmez         (≥ 15)
renk_olc    dE(lab_r, ALT)    = 14,9820   → AYNI  ⇒ FORMÜL AYNI
```
  ⇒ Ayrışan şey metrik değil **harman**:
```
renkler._bindirilmis_lab   harmanlar → 8 BİTE YUVARLAR → Lab
renk_olc.bind              harmanlar → FLOAT bırakır   → Lab
```
  📌 Ve **doğru olan `renkler.py`**: ekran 8 bit gösterir, yani gerçekten
  çizilen renk yuvarlanmış olandır. `renk_olc` **gösterilemeyen** bir rengi
  ölçüyor. Bu, `§11`in *"referans, ölçtüğü şeyin yanında durmalı"* dersinin
  aynı ailesi — orada deniz beyanı ekranda yoktu, burada ölçülen renk.

  🔴 **AMA DÜZELTME DENENDİ VE GERİ ALINDI — ETKİSİ ÖLÇÜLDÜ, BÜYÜK ÇIKTI:**
```
FLOAT (bugünkü)   0 görünmez ·  0 çakışma · 1 yakın-ama-değmeyen
8 BİTE YUVARLI    1 görünmez · 10 çakışma · 7 yakın-ama-değmeyen
```
  0,1'lik bir ΔE kaymasının yapabileceği bir şey değil. ⇒ Ya yama yanlıştı
  (`bind` başka çağrı yollarında farklı ölçekte veri alıyor olabilir), ya
  fark sanıldığından derin. **İkisi de ÖLÇÜLMEDİ.**
  🟢 Yama geri alındı (`git diff` boş, ölçüm 0/0/1'e döndü) ve kalem
  **AÇIK** bırakıldı — *"anlamadan tutma"*.

  ⚠️ Ve `ispanya` DEĞİŞTİRİLMEDİ: asgari müdahale (ton ve açıklık sabit,
  yalnız doygunluk) doygunluk 1,0'a kadar denendi ve **çözmedi**; tam çözüm
  tanınan bir kimliğin tonunu 0,02'lik bir eşik payı için değiştirirdi.
  Orantısız. Kayıt burada, karar Emre'nin.

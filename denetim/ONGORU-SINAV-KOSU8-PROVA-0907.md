# ÖNGÖRÜ — KOŞU SONRASI SIRANIN PROVASI

> **SINAV-KOSU8-0907** · sevk `1.MURAT` · 7 Eylül 2026
> 🔴 **ÖLÇÜMDEN ÖNCE YAZILDI.** `denetle_yayin.py` **açılmadı**;
> renksiz kimlik sayısı **ölçülmedi**; kuru koşular **koşturulmadı**.
> Dayanağım yalnız `CLAUDE.md`nin kaydettikleri ve bu oturumun
> bugünkü ölçümleri. Sahibi: bu oturum. Sınav anı: **hemen.**

---

## ① YAYIN KAPISININ ÖN KOŞULLARI

```
Ö-V1  Kapının REDDETME sebebi SAYISI ≥ 4 olacak
      ① beklenen ≥4 ayrı red dalı
      ② MAZERET YOK — `CLAUDE.md` 2 Eylül vakasında TEK BİR koşuda
         İKİ ayrı red satırı kaydediyor («YAYIN BAYAT — üretim girdiden
         geride, sha256 izi, 18 yerleşim dosyası» VE «üretim izi:
         taze 3 · BAYAT 4»). İki sebebi olan bir kapının yalnız iki
         sebebi olması beklenmez.
      ③ nereden: `arac/denetle_yayin.py` kaynağı · birim RED DALI
      ④ neye karşı: bugünkü depo

Ö-V2  🔴 Kapı `data/*.js` ile `arac/*.py` arasında BİR SHA/İZ
      KARŞILAŞTIRMASI yapıyor olacak
      ① beklenen: evet
      ② MAZERET YOK — 2 Eylül kaydı «sha256 izi» ve «üretim izi»
         diyor; ikisi de bir karşılaştırma ima ediyor.
      ③ nereden: aynı kaynak
      ④ neye karşı: bugünkü depo
```

## ② KOŞU BİTİNCE KAÇ KİMLİK RENKSİZ KALACAK

```
Ö-V3  RENKSİZ KİMLİK SAYISI 17'DEN FARKLI ÇIKACAK
      ① beklenen ≠17
      ② MAZERET YOK — o sayı bugün ERKEN bir turda ölçüldü; o günden
         beri künye yamaları indi (`rus-amerika` dâhil, KABUL 1→4) ve
         `renkler.py` DONUK, yani BOYALAR büyümedi. ⇒ renksiz sayısı
         ARTMIŞ olmalı.
      ③ nereden: (veride kullanılan ∪ künye `id`/`harita:`) − BOYALAR
         birim: KİMLİK
      ④ neye karşı: bugünkü depo

Ö-V4  `rus-amerika` O KÜMENİN İÇİNDE OLACAK
      ① beklenen: evet
      ② MAZERET YOK — 1.MURAT `grep -c` ile 0 ölçtü; bağımsız
         ölçümüm aynı sonucu vermeli. Vermezse ONUN ölçümü ya da
         BENİM kümem yanlış, ve ikisi de bilgi taşır.
      ③ nereden: aynı ölçüm
      ④ neye karşı: bugünkü depo
```

## ③ BEKLEYEN YAMALARIN KURU KOŞU TABLOSU

```
Ö-V5  TOPLAM KABUL, TOPLAM RED'in %10'UNDAN AZ OLACAK
      ① beklenen: KABUL / (KABUL+RED) < %10
      ② MAZERET VAR: kuru koşu «RED: zaten var» diyorsa yama
         uygulanmış demektir ve bugün iki alette de RED baskındı
         (künye 4/40 · kronoloji 0/418). Ama ölçmediğim alet var
         (`_sahiplik_uygula` · `_kademe_uygula`) ve oran orada
         başka olabilir.
      ③ nereden: her uygulayıcının kuru koşu çıktısı · birim KAYIT
      ④ neye karşı: bugünkü depo

Ö-V6  🔴 EN AZ BİR UYGULAYICI HİÇ KOŞTURULAMAYACAK
      ① beklenen ≥1
      ② MAZERET YOK — `_bayat_uygula.py`nin ne okuduğunu bugün
         ölçemedim (başlığında glob/dosya yok). Bir aletin girdisi
         belirsizse kuru koşusu da belirsizdir.
      ③ nereden: koşturma denemesi · birim ALET
      ④ neye karşı: bu tur
```

🔴 **MAZERETİ OLMAYANLAR: Ö-V1 · Ö-V2 · Ö-V3 · Ö-V4 · Ö-V6.**
🟡 Yalnız Ö-V5'in mazereti var ve yukarıda yazılı.

---

## ⚠️ SINIRLAR — şimdiden

1. **`arac/*` DONUK** (`renkler.py` · `uret_petek.py` · `girdi.py`
   parmak izli). Yalnız **okuyacağım**; hiçbirine yazmayacağım.
2. Kuru koşular **CPU harcar** ve koşu 8 bir çekirdeği doldurmuş
   durumda. Uzun sürerse **yarıda kesip** «ölçülemedi» diye
   damgalayacağım — bir aleti zorlamak koşuyu yavaşlatır (`§7`
   kaynak sahipliği).
3. ②'nin kümesi (`veride kullanılan ∪ künye`) **bir tanım seçimidir**;
   `CLAUDE.md` bu kümenin iki farklı kurulduğu iki vaka kaydediyor
   (`harita-or-id` ↔ `id ∪ harita`, ve biri **33 yanlış** üretmişti).
   Hangi kurulumu kullandığımı **çıktıda yazacağım.**

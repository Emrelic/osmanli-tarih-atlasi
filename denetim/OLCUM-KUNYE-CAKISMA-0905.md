# ÖLÇÜM — Künye yamaları birbiriyle çakışıyor mu? (M-2990, HÜKÜM YOK)

**Oturum:** 1923 SINIRLARI · `local_372203f2-6e71-46d2-af5e-563a5c7eca60`

Yöntem: `_kunye_uygula.py`'nin KENDİ `kunyeleri_cikar()` ve `oku()`
fonksiyonları kullanıldı — kendi ayrıştırıcım YAZILMADI (§11, yedinci kez).

## ① Dosya envanteri

```
BULUNAN: 11 dosya (denetim/YAMA-KUNYE-*0905*.json)
  YAMA-KUNYE-1923-0905.json           13 künye  (benim dosyam)
  YAMA-KUNYE-AIR-HADRAMUT-0905.json    3 künye  (benim dosyam)
  YAMA-KUNYE-SUDAN-0905.json           1 künye  (benim dosyam)
  YAMA-KUNYE-PIOMBINO-0905.json        1 künye  (benim dosyam)
  YAMA-KUNYE-AMMAR-0905.json           1 künye
  YAMA-KUNYE-ARMA-0905.json            1 künye
  YAMA-KUNYE-ARNAVUTLUK-0905.json      2 künye
  YAMA-KUNYE-HURMUZ-0905.json          1 künye
  YAMA-KUNYE-NORSE-0905.json           1 künye
  YAMA-KUNYE-SUTAY-YELMAN-0905.json    2 künye
  YAMA-KUNYE-T-0905.json               0 künye  🟡 BOŞ — biçim mi, gerçekten mi boş, ÖLÇMEDİM
TOPLAM İSTEK: 26
```

## ② Aynı `id`, kaç dosyada?

```
① TEK DOSYADA:                    26 / 26
② İKİ+ DOSYA, DEĞERLER AYNI:        0
③ İKİ+ DOSYA, DEĞERLER FARKLI:      0
```

**Hiçbir çakışma YOK.** 26 önerinin 26'sı da benzersiz `id` taşıyor.

## ③ devletler.js'teki 591 künyeyle çarpışma

```
ÖNERİLEN id'LERDEN ZATEN VAR OLAN:    0 / 26
BÖLGE LİSTEDE OLMAYAN öneri:          0 / 26
```

Hiçbir öneri mevcut bir künyeyi güncellemeye çalışmıyor, hiçbiri geçersiz
bölge kullanmıyor.

## 🟢 SONUÇ — beklenen orantı TUTMADI, iyi yönde

Sahiplik (nokta) tarafında 113 kayıtta 8 çakışma (~%7) ölçülmüştü ve bu
oranın künye tarafına da uygulanması "~28 çakışma" bekletiyordu. **Gerçek
ölçüm 0/26 (%0).** Bu bir tahmin hatası ama **yönü önemli**: orantı
tutmadı çünkü künye önerileri (id/bölge/tarih) muhtemelen bu gece
tekrarlanan "id TAHMİN ETME, TARA" disiplini sayesinde büyük ölçüde
çakışmasız üretiliyor — sahiplik tarafındaki çakışmalar farklı bir
sınıftan (aynı YERLEŞİM adının birden çok dosyada farklı dönemlerle
yazılması), künye tarafında bu risk daha düşük çünkü her künye kendi
konusuna özgü ve isim çakışması ihtimali daha az.

⚠️ Sınırı: bu ölçüm YALNIZ `denetim/YAMA-KUNYE-*0905*.json` deseniyle
eşleşen dosyaları görüyor — desen tutmayan bir dosya (bu oturumun kendi
`YAMA-1923-0905.json` vakası gibi) buraya hiç girmez ve sessizce
sayılmaz. `YAMA-KUNYE-T-0905.json`nin 0 künye vermesi de bu riskin bir
işareti olabilir — biçimi ÖLÇÜLMEDİ.

## `YAMA-1923-DUZELTME-0905.json` — yanlış katman, şimdi sayıldı

Bu bir KÜNYE yaması değil, NOKTA (sahiplik) yaması — bu ölçümün
kapsamına GİRMİYOR ama M-2983'te bildirilmişti, burada resmen sayılıyor:
```
İÇERİK: 4 nokta düzeltmesi (Manama·Doha·Kuveyt·Mengo, himaye kalıbı)
SORUN: _sahiplik_uygula.py yalnız `data/*.js` altını TARIYOR,
       `denetim/*.json` DEĞİL — bu dosya HİÇBİR ALET tarafından
       otomatik OKUNMUYOR (YAMA-1923-0905.json ile AYNI sınıf sessiz kayıp,
       ama farklı sebep: yanlış UZANTI/KLASÖR, yanlış GLOB değil).
ÇARE: içeriği `denetim/yer_yama_*.js` biçiminde YENİDEN yazmak gerekir —
      BU TURDA YAPILMADI, yalnız SAYILDI.
```

## ÖZET

```
KÜNYE-KÜNYE çakışması        0 / 26   — TEMİZ
KÜNYE-devletler.js çakışması 0 / 26   — TEMİZ
BÖLGE geçersizliği           0 / 26   — TEMİZ
🟡 açık kalem                YAMA-KUNYE-T-0905.json'ın 0 künye vermesi — biçimi ölçülmedi
🔴 açık kalem                YAMA-1923-DUZELTME-0905.json yanlış klasörde/uzantıda, hiçbir alet okumuyor
```

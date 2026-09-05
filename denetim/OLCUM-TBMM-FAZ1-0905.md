# TBMM FAZ 1 — ÖLÇÜM, YAMA, SINAV

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-3066 · Emre'nin kararı **(a)**
> 5 Eylül 2026, 22:3x · Koşu 5b CANLI ⇒ `data/*.js` DONUK
> **VERİ YAZILMADI · HÜKÜM YOK** · Yama `denetim/` altında

---

## ⇒ MANŞET: KAPSAM **242 DEĞİL 218** — ve fark bir `§8` İHLALİ ÖNLEDİ
```
242  `d:` ucu 1923-10-29 olan TÜM dönemler
218  … ve 1920-04-23'ten ÖNCE başlayanlar     ⇒ YAMA BUNLARI ALIYOR
 24  … 1920-04-23'ten SONRA başlayanlar       ⇒ DIŞARIDA, AYRI KARAR
```
🔴 **O 24'e literal uygulama TERS DÖNEM üretirdi.** `§8`: *"Dönemler
çakışmamalı, **ters olmamalı**, sıfır uzunlukta olmamalı"* — ve Tebriz
vakası kayıtlı.
```
İzmir  d[1922-09-09 → 1923-10-29]
`t`yi 1920-04-23 yapmak ⇒ f=1922-09-09 > t=1920-04-23   🔴 TERS
```

## ① 🔴 DIŞARIDA KALAN 24 — hepsi, ve NİÇİN
Bunlar **1920-04-23'ten sonra GERİ ALINAN** yerler; `d:` dönemleri
zaten TBMM devrinin içinde başlıyor:
```
KARS ANTLAŞMASI 1921-10-13 (10)  Şavşat · Posof · Hanak · Arpaçay ·
                                 Digor · Iğdır · Artvin · Hopa · Sarp ·
                                 Borçka
ANKARA İTİLÂFNÂMESİ 1921-10-20 (12)  Antep · Kilis · Suruç · Akçakale ·
                                 Ceylanpınar · Nusaybin · Silopi ·
                                 Mersin · Payas · Dörtyol · Erzin ·
                                 Yumurtalık
BÜYÜK TAARRUZ 1922-09 (2)        İzmir (09-09) · Aydın (09-07)
```
🔵 **ÖNERİLEN İŞLEM — ama KARAR VERMEDİM:** bu 24'te `d:` dönemi
**bölünmez, TAMAMI** `s:"tbmm-turkiye"`ye çevrilir (çünkü tamamı
TBMM devrinin içinde). Bölme, ters dönem üretir.
⚠️ Ve bu, sevkin `isg:` sınırıyla birleşiyor: aynı 24'ün ÖNCESİNDEKİ
yabancı dönemler (Sınıf A, 14 kayıt) `s:` → `isg:` adayı.

## ② YAMA — `denetim/yer_yama_tbmm_1920_0905.js`
```
ad alanı   window.YER_YAMA_TBMM_1920_0905     (§7 sözleşmesi ✓)
kayıt      218 · 131.137 bayt
biçim sınavı  py denetim/ARAC-YAMA-JS-SINA-0905-kos.py → TEMİZ
              (ad alanı doğru · uyarı yok · yeni nokta yok)
NE YAPAR   `d:` ucu 1923-10-29 → 1920-04-23
           + `s:{f:1920-04-23, t:1923-10-29, d:"tbmm-turkiye"}`
```
🔴 **ELLE YAZILMADI — canlı veriden ÜRETİLDİ** (`§11`: veri zaten bir
dilde yazılıysa o dilin yorumlayıcısını çağır).
🔴 `kaynak` alanı **düşürüldü**: uygulayıcı onu `SKALER_KORUNAN` olarak
ayrı taşıyor; kopyalamak mevcut beyanları ezme riski taşırdı.

## ③ 🟢 SINAV — `denetle`nin KENDİ fonksiyonlarıyla, bellekte
```
                ÖNCE                          SONRA
sahipsiz        315                           315          ✓ boşluk YOK
Değişmez 2      536 kırılma / 0 açık          537 / 0      ✓
Değişmez 2s     1327 / 101 açık / 364 dışı    1328 / 101   ✓
hayalet         8                             8            ✓
4c · 4d · 4s    280 · 434 · 137               280·434·137  ✓
🔴 TERS/SIFIR DÖNEM                           0            ✓
2s YENİ açılan gün                            YOK
```
🟢 **218 kayıt değişiyor ama kırılma yalnız +1** — çünkü hepsi **aynı
günü** paylaşıyor. Koordinatörün *"242 yeni kırılma AMA HEPSİ TEK
GÜNDE"* öngörüsü **tuttu**.
🟢 Ve `1920-04-23` çekirdekte **0 gün** uzaklıkta madde taşıyor:
*"Türkiye Büyük Millet Meclisi'nin açılışı"* ⇒ **yeni madde GEREKMİYOR**
(sevk ③ kapandı).
⚠️ Önbellek tuzağı kapatıldı (`_osmanli_kure.__defaults__[0].clear()`)
ve iki `assert` ile sessiz no-op engellendi (218/218 uygulandı).

## ④ SEVKİN ② SORUSU — `ermenistan` KİMLİĞİ
```
🟢 ermenistan-demokratik-cumhuriyeti  f=1918-05-28 · t=1920-12-02
   künye VAR · RENK VAR · `harita:` yok ama gerekmez
🔴 ermenistan  diye ayrı bir künye YOK — doğru id yukarıdaki
```
⇒ Sevkin şüphesi **çözüldü**, ek iş yok.

## ⑤ 🔴 ÖN KOŞUL — ADIM ⑧ BU YAMADAN ÖNCE
```
tbmm-turkiye  künye VAR (1920-04-23 → 1923-10-29) · `harita:` YOK
              🔴 BOYALAR'da YOK
```
⇒ Renk üretilmeden bu yama inerse **218 petek boyanmaz** (`§8` harita
deliği) ve `§1.5`in *"HARİTA DELİĞİ ✓ 0"* değişmezi kırılır.
🔴 **Adım ⑧'in yükü 28 → 29.** (Merge kontrol listesine işlendi.)

## ⑥ NE ÖLÇMEDİM / YAPMADIM
```
🔴 24 KAYIT İÇİN YAMA YAZMADIM — ters dönem riski var ve işlem
   bir KARAR gerektiriyor (bölme değil, tamamını çevirme)
🔴 SINIF A'nın 14 `s:` → `isg:` çevrimini YAPMADIM — Faz 1 değil
🔴 SINIF C'nin (İstanbul · Adana · Maraş · Urfa · Bursa · Eskişehir ·
   Afyon) işgal örtüsünü YAZMADIM — Faz 2
🔴 218'in coğrafî ayrımını KABA KUTUYLA yaptım (35,8-42,6 K ·
   25,5-45,0 D); 218'in 218'i kutu içinde çıktı ama kutu Musul/Halep
   sınırında hassas değil — **kutu dışı 0** olduğu için bugün sorun
   yaratmıyor
⚪ `1920-03-16 İstanbul'un resmî işgali` ÇEKİRDEKTE MADDE OLARAK VAR
   ama HARİTADA KARŞILIĞI YOK — Faz 2'nin en hazır kalemi
```

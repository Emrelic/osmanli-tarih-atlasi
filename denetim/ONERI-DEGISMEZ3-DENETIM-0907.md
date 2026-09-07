# SAVAŞ ARALIK SENKRONU — DENETİM ADAYI · `DEGISMEZ3-0907`

> 🔴 **KAPIYA BAĞLANMIYOR.** Koordinatörün şartı: `denetle.py`nin çıkış
> kodunu etkilemeyecek, bir tur **rapor satırı** olarak koşacak. Sebebi
> ölçülü: koşu 8 bitince `denetle.py` yayın kapısının önünde koşuyor;
> yeni bir denetimi tam orada kapıya bağlamak onu **yayın üstünde**
> sınamak olur.
> Alet: `denetim/ARAC-DEGISMEZ3-DENETIM-0907.py` · **C13 dört ayak geçti,
> çıkış kodu 0.**

## BUGÜNKÜ ÇIKTI
```
Ek denetim  i  savaş ARALIK senkronu: 26 açık kayıt kovalandı (RAPOR, ihlal DEĞİL)
               KANITLI 21 · ÖLÇÜLEMEDİ 1 · MADDESİZ 0 · MAZUR 4
    SEFERLER   1490-06-01  Memlük ordusunun karşı taarruzu   ÖLÇÜLEMEDİ
```
```
SAVASLAR      KANITLI 4 · MAZUR 4        (MAZUR = `bitis` alanı yok)
SEFERLER      KANITLI 17 · ÖLÇÜLEMEDİ 1
ANTLASMALAR   0 satır — hiç açık YOK
```

## 🔴 VERİ NODE İLE OKUNUYOR — ve bu bir teyit üretti
`oku_pencere` bugün uyarı basıyor: `ANTLASMALAR` `.push()` ile de
besleniyor, metin ayrıştırıcı **çalışma zamanı mutasyonunu göremiyor**
(31 ↔ 41). Denetim onu kullansaydı **10 kaydı sessizce atlardı**.
🟢 **Ve node ile 41 kayıt okunduğunda `ANTLASMALAR`ın açığı yine 0** —
yani `oku_pencere`nin kaçırdığı 10 kayıt da senkron. Öngörümdeki
*"0-3 yeni açık"* bandı **0** çıktı.

## 🔴 ÖNGÖRÜM İKİ KEZ SAPTI — ve ikinci sapma bir İYİLEŞME
```
öngörü (ölçümden ÖNCE) : KANITLI 20 · ÖLÇÜLEMEDİ 2 · MAZUR 4 · MADDESİZ 0
ilk ölçüm              : KANITLI 19 · ÖLÇÜLEMEDİ 3        🔴 −1 / +1
kesme düzeltmesinden sonra: KANITLI 21 · ÖLÇÜLEMEDİ 1     🔴 +1 / −1
```
**Mazeretim yalnız `ANTLASMALAR` içindi; sapma `SEFERLER`de çıktı ⇒
MAZERET YOK.** Sebebi ölçtüm ve kendi ölçütümdeydi:

### Kesme işareti SİLİNMEZ, BOŞLUĞA çevrilir
```
silersen   "Timur'un" → "timurun" → kök "timuru" ≠ "timur"   ✗
boşlukta   "Timur'un" → "timur un" → kök "timur"             ✓
```
Türkçede kesme bir **ek ayırıcıdır**, kelimenin parçası değil. Önceki
`SEFERLER` ölçümümde (`16/2`) `re.findall(r"\w+")` kesmeyi kelime sınırı
sayıyordu; bu alette onu **sildim** ve bir eşleşme kayboldu.
⇒ Düzeltildi, ve `Timur'un Anadolu'dan çekilişi` **KANITLI**ya döndü.

📌 **Ve asıl ders:** öngörüm **ölçütün eski hâline** dayanıyordu. `§11`in
*"bir eşik ölçüldüğü tabanla birlikte taşınır"* kuralının **ölçüt** yüzü —
burada taban bir sayı değil, **ölçütün kendisi**.

## KALAN TEK `ÖLÇÜLEMEDİ`
`Memlük ordusunun karşı taarruzu (1488-1490)` — **22 aylık** aralık, içine
*"Kraliçe Katerina Cornaro Kıbrıs'ı Venedik'e devretti"* düşüyor.
Aralık tek başına yanlış pozitif üretiyor; **ad benzerliği onu doğru
şekilde reddetti** ve kova `KANITLI` değil `ÖLÇÜLEMEDİ` oldu.
🟢 Yani ölçütün iki ayağı da işliyor: aralık **kapatıyor**, ad
benzerliği **sahte kapanışı engelliyor**.

## C13 — DÖRT AYAK
| ayak | sınanan | sonuç |
|---|---|---|
| ③ GİRDİ | gerçek `data/savaslar.js`, **node ile** (bugün `oku_pencere` vakası tam buradan çıktı) | ✓ |
| ① GEÇME | gerçek veri; rapor satırı basılıyor, ihlal üretmiyor | ✓ |
| ② ATEŞLEME | enjekte **maddesiz** kayıt → `KESİN MADDESİZ`; enjekte **aralıksız** kayıt → `MAZUR` (ihlal sayılmadı) | ✓ |
| ④ ÇIKTI | dönüş dökülerek okundu; özet toplamı == satır sayısı (26 == 26) | ✓ |

## UYGULAMA ŞARTLARI (`arac/denetle.py` koordinatörün kalemi)
```
① RAPOR SATIRI — `ihlal` bayrağına DOKUNMAZ, çıkış kodunu etkilemez
② VERİ NODE İLE okunur — `oku_pencere` ANTLASMALAR'da 10 kayıt kaçırıyor
③ `SERILER` KAPSAM DIŞI — aralığı serbest metin (`aralik`)
④ aralık alanı olmayan kayıt `MAZUR` — ihlal DEĞİL
⑤ `KANITLI` bir KUSUR DEĞİL: *"Ⓐ'nın ölçütü bu kayda uymuyor"* demek
```

## ÖLÇMEDİKLERİM
- Denetimin **koşu süresine** etkisi (node çağrısı + 1323 madde × 26 kayıt)
  — ölçmedim.
- `MAZUR` kovasındaki 4 `SAVASLAR` kaydının (Sırpsındığı · Cecora ·
  II. Viyana · Şahkulu) gerçekten maddesiz olup olmadığı — aralık alanı
  olmadığı için **ölçülemez**, `Ⓐ`nın verdiğinden öteye gidemedim.
- Durak kök eşiğinin (%2) **duyarlılığı**: %1 ya da %5 seçseydim kova
  dağılımı nasıl değişirdi — **ölçmedim**.

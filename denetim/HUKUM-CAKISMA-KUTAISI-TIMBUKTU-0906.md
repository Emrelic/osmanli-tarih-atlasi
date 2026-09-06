# HÜKÜM — KUTAİSİ ve TİMBUKTU: **ikisinde de "kazanan yama" YOK**

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> `HUKUM-CAKISMA-TASNIF-18-0906.md §④`te bu ikisi *"ÖLÇMEDİM"* diye açık
> bırakılmıştı. Ölçüldü.

---

## ① 🔴 TİMBUKTU — TRİYAJ YANILMIŞ, VE **BENİM YAMAM TEHLİKELİ**

`OLCUM-KALAN-CAKISMA-0906.md §⑥` şöyle diyordu:
> *"Timbuktu — çatışma değil, iki yama **farklı pencereleri** yazıyor."*

🔴 **Yanlış.** Ölçüm:
```
yer_yama_ok107.js            s: NO-OP  (tabanla aynı — üç erken dönem duruyor)
yer_yama_belgesiz7.js        dizi alanı yok (yalnız `bos:`/`neden:`)
yer_yama_timbuktu.js         s: yeni 6 · DÜŞEN 3
yer_yama_1923_bosluk_0906.js s: yeni 1 · DÜŞEN 3     ← BENİM YAMAM
```

**Sebep:** uygulayıcı `s:` dizisini **bütün olarak değiştiriyor**
(`ALAN_RX` + `dizi_sonu` → eski dizi silinip yenisi yazılıyor). Yani
*"farklı pencere yazmak"* diye bir şey yok: **kısmî bir dizi, tam diziyi
siler.**

🔴 **BEDELİ ÖLÇÜLDÜ — kendi yamamda:** `yer_yama_1923_bosluk_0906.js`
Timbuktu için yalnız `s:[{1894→1923, fransa-cumhuriyet}]` taşıyor.
Uygulansaydı taban üç dönemi **silinirdi**:
```
1281-01-01 → 1430-01-01  mali-imparatorlugu     ⇒ SİLİNİR
1468-01-01 → 1591-04-13  songhay-imparatorlugu  ⇒ SİLİNİR
1591-04-13 → 1700-01-01  fas                    ⇒ SİLİNİR
```
⇒ Timbuktu **1281-1894 arası SAHİPSİZ** kalırdı — `Değişmez 1`de dev bir
delik, ve haritada 613 yıllık bir boşluk.

🟢 **VE ONU DURDURAN ŞEY ÇAKIŞMA TESPİTİNİN KENDİSİ OLDU.** Uygulayıcı
*"KARAR GEREK"* deyip kaydı atladı. Bugüne kadar 18 çakışmayı bir **borç**
gibi okuyordum; en az biri bir **sigorta**ymış.
📌 `§11`e: ***bir çakışma listesi yalnız çözülmemiş iş değildir —
içinde önlenmiş kaza da olabilir.***

### 🟢 ÇARE: TEK VE TAM ZİNCİR (parça yama YOK)
```
1281-01-01 → 1430-01-01   mali-imparatorlugu
   ⟨1430-1468 BEYANLI BOŞLUK — Tevârik dönemi, `bos:kabile`
     (`Değişmez 1b`nin tek beyanlı deliği; belgesiz7 bunu yazıyor)⟩
1468-01-01 → 1591-04-13   songhay-imparatorlugu
1591-04-13 → 1700-01-01   fas
   ⟨1700-1760 🔴 BOŞLUK — 60 YIL, ARAŞTIRILMADI⟩
1760-01-01 → 1770-01-01   tuareg-ivellemmedan
1770-01-01 → 1792-01-01   bambara
1792-01-01 → 1833-01-01   tuareg-ivellemmedan
1833-01-01 → 1862-01-01   massina
1862-01-01 → 1893-01-01   tekrur
   ⟨1893-1894 🔴 BOŞLUK — 1 YIL⟩
1894-01-01 → 1923-10-29   fransa-cumhuriyet
```
⚠️ **İki boşluk GERÇEK ve bu hüküm onları UYDURMUYOR.** Kuyruktaki
*"Timbuktu 1700-1894"* kalemi **kısmen ödenmiş**: 1760-1923 zaten yazılı.
Kalan gerçek borç **1700-1760** ve **1893-1894**.

---

## ② 🔴 KUTAİSİ — İKİ YAMA DA **BAYAT**, taban ONLARDAN YENİ

```
ferhatpasa  s: yeni 1 · düşen 5   →  rusya 1810-02-20 → 1923-10-29
kafkas      s: yeni 1 · düşen 5   →  AYNI ŞEY
vassal_kid  v: ÜST KÜME (+statu,kid)
```
İkisi de **aynı** şeyi öneriyor: tek blok `rusya`. Ve düşürdükleri şey
tabanın **daha zengin** zinciri:
```
DÜŞEN:  1810-02-20 → 1917-03-15  rusya
        1917-03-15 → 1917-11-07  rusya-gecici-hukumet
        1917-11-07 → 1918-05-26  transkafkasya
        (+2 dönem daha)
```
⇒ İki yama, 1917 ayrışmasını **bilmeyen** bir dönemden kalma; taban o
zamandan beri iyileştirilmiş.

🟢 **HÜKÜM: `s:` tarafında KAZANAN YOK — taban kalır.** Yalnız
`vassal_kid`in `v:` üst kümesi uygulanır.
📌 `§11`in *"çıktı girdinin bir tur gerisindedir"* dersinin **yama**
yüzü: bir yama bayatlayınca *"öneri"* olmaktan çıkıp **gerileme** olur.
Ve bayat olduğu ancak tabanla karşılaştırılınca görünür — dosya adına
ya da tarihine bakarak değil.

---

## ③ İKİSİNİN ORTAK DERSİ

```
Timbuktu   kısmî dizi → TAM diziyi siler        ⇒ EKSİK yama tehlikeli
Kutaisi    bayat dizi → YENİ diziyi geri alır   ⇒ ESKİ yama tehlikeli
```
🔴 İkisinde de yama **kendi içinde kusursuz**; kusur **tabana göre**
doğuyor. ⇒ Bir yamayı yazarken sorulacak soru *"benim önerim doğru mu"*
değil, ***"bu diziyi tabanın YERİNE koyduğumda ne KAYBOLUYOR?"***
🟢 Ölçmenin yolu ucuz ve artık alet var:
`node denetim/ARAC-CAKISMA-TASNIF-0906.js` — `düşen:` sütunu tam bunu
söylüyor.

---

## ④ UYGULAMA — ve sınav
```
Timbuktu  ① ok107 · timbuktu · 1923_bosluk üçünden Timbuktu `s:` kayıtları
             DÜŞÜRÜLÜR
          ② yerine TEK ve TAM zincir (yukarıdaki) yazılır
          ③ belgesiz7'nin `bos:kabile` beyanı KORUNUR
Kutaisi   ① ferhatpasa ve kafkas'tan Kutaisi `s:` kayıtları DÜŞÜRÜLÜR
          ② vassal_kid'in `v:`si kalır
```
⚠️ Sınav: `HUKUM-CAKISMA-TASNIF-18-0906.md §⑤`teki hedef **2** idi
(Kutaisi + Timbuktu). Bu hükümle **0** olmalı.
🔴 Tutmazsa hüküm değil uygulama yanlıştır.

## ⑤ ÖLÇMEDİĞİM
```
Timbuktu 1700-1760  (60 yıl) — hangi kimlik? ARAŞTIRILMADI
Timbuktu 1893-1894  (1 yıl)  — Fransız işgalinin gerçek günü?
   TDV `tinbuktu` "1894'te" diyor; 1893 `tekrur` bitişinin dayanağı
   ÖLÇÜLMEDİ. İkisi arasındaki bir yıl gerçek bir boşluk mu, yoksa
   iki kaydın yuvarlanmasından mı doğuyor — BİLMİYORUM.
```

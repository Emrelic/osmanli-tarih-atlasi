# "Küçük aşım" kümesi + iki büyük aşım — ve ÖNGÖRÜNÜN SINAVI

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2876 · 5 Eylül 2026
> Öngörü: `denetim/ONGORU-KUCUK-ASIM-0905.txt` — **ölçümden ÖNCE** yazıldı
> 🔴 **YAMA YAZILMADI.**

---

# ÖNGÖRÜNÜN SINAVI

| # | kimlik | öngörü | ölçüm | sonuç |
|---|---|---|---|---|
| ① | hafsi | GÜN KARARI · DOKUNMA | Fizan · gün kararı | 🟢 **TUTTU** |
| ② | mentese | GÜN KARARI · DOKUNMA | yuvarlak künye ↔ ayrıntılı veri | 🟢 **TUTTU** |
| ③ | serbedariler | GÜN KARARI · DOKUNMA | ve **mazeretim de tuttu** | 🟢 **TUTTU** |
| ④ | artuklu | BATNOZ · düzeltme | gerçek kusur, **ama çare BLOKE** | 🟡 **YARIM** |
| ⑤ | singhasari | ARDIL · **YAZILABİLİR** | ARDIL ✓ · **yazılamaz** | 🔴 **ÇÜRÜDÜ** |

```
öngörü   DOKUNMA 3 · gerçek kusur 2 · YAZILABİLİR 1
ölçüm    DOKUNMA 3 ✓ · gerçek kusur 2 ✓ · YAZILABİLİR **0** ✗
```

---

## ① `hafsi` — 🟢 ve tahmin **birebir**
Aşan 12 kaydın **12'si de Fizan / iç Libya**, hepsi `→ 1577-01-01`:
`Murzuk · Gât · Sokna · Câlû · Sebha · Ubârî · Vaddân · Zilla ·
Merâde · Tırgan · Zevîle · el-Katrûn`
🟢 Ve verinin geri kalanı **titiz**: Tunus çekirdeği `1574-08-25`
(Osmanlı fethi) · Trablus kuşağı `1551-08-15` · Cerbe `1560-05-14` ·
Tabarka `1544` · Halkulvâdî `1535-07-21`.
⇒ Fizan'ın 2,3 yıl geç devredilmesi **veri kusuru değil, granülerlik.**

🔴 **AMA MAZERETİM DE HAKLIYDI — ve onu yazıyorum:**
Öngörüde *"2,3 yıl 'aylar' değil ⇒ mazeret ZAYIF"* demiştim. Öyle:
Hafsîler 1574'te bitti ve Fizan **1574'te de Hafsî değildi** (bölgede
Evlâd-ı Muhammed sultanlığı vardı). Yani asıl soru *"neden 1577"* değil,
***"Fizan hiç Hafsî miydi?"*** — ve **ÖLÇMEDİM.**

## ② `mentese` — 🟢 ve sebep tam olarak yuvarlaklık
```
künye  t:1424-01-01   ← YUVARLAK
veri   6 nokta · `1402-07-28 → 1425-06-01`
```
`1402-07-28` Ankara Savaşı (Timur beylikleri diriltti), `1425-06-01`
Osmanlı'nın kesin ilhakı. **Veri iki ucu da gün hassasiyetinde biliyor;
künye yuvarlak.**
⇒ **DOKUNMA** — ya da künye `t:`si verinin gününü alsın (`devletler.js`).

## ③ `serbedariler` — 🟢 ve **mazeretim de tuttu**
```
künye  f:1337-09-09  ← TDV'den TAM GÜN (CLAUDE.md §11'de kayıtlı)
künye  t:1386-01-01  ← YUVARLAK
veri   çoğunluk → 1381 (Timur'un Sebzevâr fethi)
       Simnân · Dâmgan · Bistâm → 1387-11-01 (Timur'un batı seferi)
```
🔴 Öngörümde şunu yazmıştım: *"`f:` düzeltilirken `t:` gözden kaçmışsa
bu bir kusurdur."* **Aynen öyle:** bu künyenin `f:`i bu projede TDV'den
tam günle düzeltilmiş, `t:`i **hâlâ yuvarlak.**
📌 ***Bir künyenin bir ucu düzeltilirken öteki ucu gözden kaçabilir*** —
ve `denetle.py`nin `4c`/`4d` ayrımı tam bunu görünür kılıyor.

## ④ `artuklu` — 🟡 kusur GERÇEK ama ÇARE BLOKE
```
Diyarbakır  artuklu → 1378 → akkoyunlu      ✓
Mardin      artuklu → 1409 → karakoyunlu    ✓ (künye sonu)
Harput · Çemişgezek · Palu  artuklu → **1465** → akkoyunlu   🔴
```
⇒ Veri Mardin çekirdeğini künyede bitiriyor ama üç batı noktasını
**56 yıl** sürdürüyor.
🔴 **Ve kısaltmak DELİK açar:** 1409-1465 arası o üç noktayı tutacak
kimlik gerekir. `dulkadir` künyesi VAR (1337-1522) ve bölge adayı —
**ama ÖLÇMEDİM, kaynağa sormadım.**
⇒ `evfat` / `iran` / `somali` ile aynı duvar: **ardıl yok değil,
DOĞRU ardıl belirsiz.**

## ⑤ `singhasari` — 🔴 **ÖNGÖRÜM ÇÜRÜDÜ**, ve nedeni öğretici
Öngörüm: *"ARDIL sınıfı · YAZILABİLİR bekliyorum · `majapahit` künyesi
varsa."* **Künye VAR** (`majapahit` 1293-01-01 → 1527-01-01) —
**ama yazılamaz.**
```
Cava çekirdeği (Surabaya · Malang):
   singhasari 1281 → **1292-01-01** · majapahit 1292 → 1527   ✓ DOĞRU
Doğu adaları (Bali · Lombok · Sumbawa · Bima):
   singhasari 1281 → **1343-01-01** · majapahit 1343 → 1478   🔴
```
🔴 **VE `1343` DOĞRU:** Majapahit Bali'yi **1343'te** aldı (Gajah Mada).
Singhasari Bali'yi 1284'te almış, 1292'de yıkılmıştı; **1292-1343 arası
ada bağımsızdı** (Pejeng hânedanı geri döndü).
⇒ `singhasari`yi 1292'de bitirmek **51 yıllık bir delik** açar;
`majapahit`i 1292'ye çekmek **fetihten 51 yıl önce** boyamak olur.
⇒ Gerekli olan **1292-1343 Bali kimliği** ve o YOK
(`bali-kralliklari` künyesi 1478'de başlıyor — 135 yıl geç).

📌 ***Ardıl künyenin VAR OLMASI, yazılabilir olduğu anlamına gelmez —
penceresi de tutmalı.*** Öngörümde ön koşulu *"künye var mı"* diye
kurmuştum; doğrusu ***"künye var mı VE penceresi boşluğu kapatıyor
mu"***.

---

## ⇒ HÜKÜM
```
🟢 DOKUNMA        hafsi · mentese · serbedariler   (3 kalem, 21 kayıt)
🟡 KÜNYE KARARI   mentese `t:` ve serbedariler `t:` yuvarlak —
                  veri gün biliyor. `devletler.js` işi.
🔴 AÇIK KALEM     artuklu (3 kayıt) · singhasari (5 kayıt)
                  ikisinde de KISALTMAK DELİK AÇAR
```

## 🔴 VE ÖLÇEK ÜZERİNE — öngörümdeki bilinçli riskin sonucu
Öngörüde yazmıştım: *"ölçeği yine kullanıyorum (56 ve 51 yıl → gerçek
kusur). Bu bilinçli bir risk."*
```
BU TURDA ÖLÇEK TUTTU:  1,4-2,3 yıl → gün kararı · 51-56 yıl → gerçek kusur
AMA `sardinya` 439 YIL → tamamen MEŞRU (dün ölçtüm)
```
⇒ **Ölçek bir KORELASYONDUR, bir KURAL DEĞİL.** Bu turda yardım etti,
bir önceki turda yanılttı. `CLAUDE.md`ye giren *"ölçek sınıfı
belirlemez"* kuralı **ayakta** — ölçek bir ipucudur, ve ipucu ölçüm
yerine geçmez.

## ÖLÇMEDİKLERİM
```
ÖLÇMEDİM   "Fizan hiç Hafsî miydi?" — ①'in asıl sorusu
ÖLÇMEDİM   `dulkadir`in Harput/Çemişgezek/Palu 1409-1465 adayı olup
           olmadığını — künye VAR (1337-1522) ama kaynağa SORMADIM
ÖLÇMEDİM   1292-1343 Bali'sinin gerçek kimliğini
OKUMADIM   TDV `artuklular` · `mentese` · `serbedariler` · `tunus`
           gövdelerini — dördü de künyelerin `kaynak:` alanında yazılı
           ama bu tur SAYIM turuydu
```

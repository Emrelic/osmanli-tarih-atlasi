# HÜKÜM — ② `not:` künye şemasında YOK (17 beyan risk altında) · ② 1917 kova sorunu

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ VE ARAÇ YAZILMADI** (koşu 7b).
> Bulgular: AVRUPA (`not:`) ve BALKAN-DOĞU AVRUPA (1917). İkisi de
> **bölgelerinden büyük** çıktı ve ikisi de doğru bildirdi (`§7.1⑥`).

---

# ① 🔴 `not:` ALANI KÜNYE ŞEMASINDA YOK — 17 BEYAN DÜŞECEKTİ

## Ölçüm (AVRUPA)
```
_kunye_uygula.py:136
  sira = ["id","ad","tur","bolge","f","t","baskent","harita","ozet","kaynak"]
  🔴 `not` BU LİSTEDE YOK
denetim/ altındaki künye önerisi           25
   `not:` alanı TAŞIYAN                    17  (%68)
canlı devletler.js'te `not:` olan künye     0  (617 künye tarandı)
```

## 🟢 VE KAYIP HENÜZ GERÇEKLEŞMEDİ — bu ayrım önemli
`data/devletler.js` koşu boyunca **DONUK**, yani bu gece yazılan 25 öneri
**hiç uygulanmadı**. Beyanlar `denetim/` altındaki öneri dosyalarında
**duruyor.** ⇒ Kusur **ileriye dönük**, ve tam da bu yüzden **önlenebilir.**
📌 AVRUPA'nın *"düştü"* ifadesi mekanizma doğru, zaman yanlış — ve kendisi
de sonunda *"beyan `denetim/` altında hâlâ duruyor"* diye yazmış.

## 🔴 DÜŞECEK BEYANLARIN CİNSİ — hiçbiri süs değil
```
buhara-halk-cumhuriyeti  "36 GÜNLÜK ara KASITLI bırakıldı, DOLDURULMADI"
piombino                 "t:1548 GEÇİCİ VE MUHTEMELEN ÇOK KISA"
kuayti-sultanligi        "künyenin f:/t: alanları bunu TAŞIMIYOR"
harezm-halk-cumhuriyeti  "Hive künyesi AYRICA kontrol EDİLMEDİ"
agadez-sultanligi        "1591-1906 hangi güçlere bağlandığı NETLEŞTİRİLMEDİ"
hollanda/fransiz-guyanasi "f: tarihi KABA, doğrulanmadı"
```
🔴 En pahalısı `buhara-halk-cumhuriyeti`: **kasıtlı bir boşluk beyanı.**
Düşerse bir sonraki oturum o 36 günü `Değişmez 1` kusuru sanıp
*"düzeltir"* — `§11`: *ölçülmüş ve kabul edilmiş bir borç, kayıtsız
kalırsa yarın bir kusur olarak yeniden bulunur.*

## 🟡 TEŞHİS — AVRUPA'nın ayrımı doğru: ARAÇ HATASI DEĞİL, ŞEMA ASİMETRİSİ
```
_sahiplik_uygula.py   SKALER_ALANLAR = ("m","kaynak","bos","neden","not")   🟢 iner
_kunye_uygula.py      sira = [… "ozet","kaynak"]                            🔴 düşer
```
Aynı proje, aynı gece, aynı alan adı, **iki uygulayıcıda iki davranış.**
Ve öneri yazan oturumlar **yerleşim tarafındaki emsale** bakıp `not:`
yazmış — makul davrandılar.
📌 `§11`in *"bir beyan aracın alan kümesinde yoksa SESSİZCE DÜŞER"*
dersinin **künye** yüzü. O ders 5 Eylül'de **yerleşim** tarafında ölçülüp
borcu ÖDENDİ (`bos`/`neden`/`not` eklendi); künye tarafında ödenmedi.
⇒ **Bir borcu bir alette ödemek, kardeş alette ödemez.**

## 🟢 HÜKÜM: Ⓐ — `not` künye şemasına ALINIR
```
① VERI-YAPISI.md künye tablosuna `not:` tanımı eklenir
② _kunye_uygula.py `sira` listesine "not" eklenir
③ `kaynak` gibi KORUNAN olur — üzerine YAZMAZ, yalnız boşsa doldurur
```
**Gerekçe:** `ozet:` kullanıcıya bakan bir özettir; `not:` bir sonraki
oturuma bakan **çalışma beyanıdır**. İkisi farklı muhatap, ve beyanı
`ozet:`e taşımak onu kullanıcı metnine karıştırır.
🔒 `arac/*.py` DONUK ⇒ koşu bitince. **Bu dosya o borcun kaydıdır.**
⚠️ **VE O GÜNE KADAR HİÇBİR KÜNYE ÖNERİSİ UYGULANMAZ** — 25 önerinin
17'si beyan taşıyor; şema düzelmeden uygulamak onları kaybettirir.

---

# ② 1917 RUS İHTİLÂLLERİ — kusur YOK ama KOVA YANLIŞ

## BALKAN'ın iddiası doğrulandı, ve DARALTILDI
```
1917 ihtilâl maddesi · ÇEKİRDEK (data/olaylar*.js)   0   🔴 BALKAN haklı
1917 ihtilâl maddesi · KUYRUK  (data/kronoloji*.js)  3   🟢 VARLAR
   1917-03-08  Şubat Devrimi başladı (Petrograd ekmek ayaklanmaları)
   1917-03-15  II. Nikolay tahttan çekildi, Romanov hanedanı sona erdi ⭐
   1917-11-07  Ekim Devrimi — Bolşevikler iktidarı ele geçirdi
dönem sınırı sayısı   1917-03-15 → 892 · 1917-11-07 → 896   TOPLAM 1788
```
🟢 **Yani madde YAZILMAYACAK — TAŞINACAK.** Metinler var, günler doğru,
`1917-03-15` maddesi tam olarak kırılmanın konusunu anlatıyor.

📌 `§11`in *"bu gün zaten var YETMİYOR — HANGİ KOVADA olduğu da
sorulmalı"* dersinin **en yüklü** vakası: 1788 dönem sınırı, `Değişmez 2`
tesadüfen geçiyor (en yakın çekirdek madde «Üçüncü Gazze Muharebesi»,
0 gün, ve **alakasız**).

## HÜKÜM
```
🟢 kuyruktaki üç madde ÇEKİRDEĞE taşınır/kopyalanır
🔴 YENİ madde YAZILMAZ — var olanı yeniden yazmak `§11`in mükerrer sınıfı
⚠️ Taşımadan önce üçünün `kaynak:` alanı OKUNUR: kuyrukta olması
   kaynaklı olduğu anlamına GELMEZ
🔒 `data/olaylar*.js` DONUK ⇒ koşu bitince
```
⚠️ Ve `1788` ile BALKAN'ın `1342`si ayrışıyor: ben `d/v/s/isg` dört
kategoride hem `f` hem `t` saydım, BALKAN daha dar bir küme saymış.
**İkisi de doğru olabilir** — sayı hükmü değiştirmiyor, kova değiştiriyor.

---

## ⑨ ÖLÇÜLMEDİ
```
· üç kuyruk maddesinin `kaynak:` alanı (taşımadan önce okunacak)
· `not:` alanının künye şemasına KASTEN alınmadığına dair bir kayıt
  (AVRUPA aradı, bulamadı — `VERI-YAPISI.md` ne yasaklıyor ne tanımlıyor)
· 25 künye önerisinin geri kalan 8'inde beyan var mı
```

# ÖNGÖRÜ — `bk:` ZAMANLI BAŞKENT · **ÖLÇÜMDEN ÖNCE YAZILDI**

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname tahta **M-2086 ⑤**
> 🔴 Bu dosya `devletler.js` taranmadan önce yazıldı. Bir tek `grep`
> koşturmadım; koşturursam öngörü ona göre şekillenirdi.

---

## SORU (koordinatörün sorduğu)

> *"437'nin kaçı çok-başkentli çıkacak?"*

---

## 🔴 ÖNCE SORUYU İKİYE BÖLÜYORUM — ve niçin

Tek bir sayı vermek burada **yanıltıcı olur**, çünkü aranan şey iki farklı
şeyle karışıyor:

```
① HAM İŞARET     `baskent` metninde ok · virgül · parantez · "sonra" geçen
                 künye sayısı — bir REGEX'in bulacağı sayı
② GERÇEK ÇOK-    başkentin GERÇEKTEN taşındığı künye sayısı
   BAŞKENTLİLİK
```
İkisi aynı değil, ve farkı **gürültü** kuruyor:
```
"Gova (Makassar)"                      parantez = MODERN KARŞILIK, taşınma DEĞİL
"(bozkırda göçebe, sabit başkent yok)"  parantez = BAŞKENT YOKLUĞU beyanı
"Kartli, Kaheti, İmereti"               virgül = EŞ ZAMANLI üç merkez, sıra DEĞİL
"Tebriz → Kazvin → İsfahan"             ok = GERÇEK taşınma dizisi ✓
```
📌 Bu, `§11`in *"ölçüm doğru, evren yanlış"* ailesinin taranma tarafı: ham
işaret sayısını *"çok-başkentli künye sayısı"* diye raporlamak, bir sonraki
oturuma **şişirilmiş bir iş listesi** verirdi.

---

## ÖNGÖRÜM — iki sayı

```
① HAM İŞARET       60 – 110 künye   (parantezli modern karşılıklar yüzünden
                                     ŞİŞKİN olmasını bekliyorum)
② GERÇEK taşınma   30 – 55 künye    (%7 – %13)
```

### Gerekçe
- Atlasın künye kümesi **ağırlıkla küçük ve kısa ömürlü** yapılardan oluşuyor
  (beylik · şehir devleti · hânedan). Kısa ömürlü bir yapı başkent taşımaz.
- Başkent taşıyanlar **uzun ömürlü imparatorluklardır** ve bunlar azınlıktır:
  Osmanlı · Safevî · Rusya · Timurlu · Memlûk · Altınordu · Kırım · Habsburg ·
  Lehistan · Ming/Qing · Babür … Sayıları onlarca, yüzlerce değil.
- Ve `tur` dağılımı bunu destekliyor (ölçülmüştü): `beylik` 28 · `prenslik` 15
  · `dukalik` 14 · `sehzadelik` 4 — bu sınıflar tek merkezlidir.

### Çürütücü eşik
```
② > 80  ya da  ② < 20   ⇒ öngörüm YANLIŞTIR, mazeret aramam
```

---

## ⚠️ ÜÇÜNCÜ BİR SAYI DAHA ÖNGÖRÜYORUM — ve bu asıl darboğaz olabilir

Koordinatörün ③. adımı: *"her `bk[].ad` bir YERLEŞİM adıyla BİREBİR eşleşiyor
mu? Eşleşmeyen ad SESSİZ BAŞARISIZLIKTIR."*

```
öngörüm: yazacağım başkent adlarının %20 – %40'ı yerleşim adıyla
         BİREBİR EŞLEŞMEYECEK
```
**Gerekçe — ölçülmüş bir desen:** bu projede aynı yerin iki yazımı sürekli
ayrıştı (`Varat/Varad` · `Afyon/Karahisâr-ı Sâhib` · `Diyarbekir/Diyarbakır`
— sonuncusu koridor ağında **4 kenarı kopardı**, tahtada kayıtlı). Başkent
adları künyede **tarihî imlâyla** (Kazvin · Dımaşk · Kostantiniyye), yerleşim
adları **modern/karma** imlâyla yazılmış olabilir.
⇒ Eşleşmeyenler **uydurulmayacak**, ayrı listelenecek — koordinatörün şartı.

---

## MAZERET SINIRI — önden

```
🟡 MAZERETİ VAR   ① ile ② arasındaki farkın büyük çıkması — zaten öngördüm
🔴 MAZERETİ YOK   ② eşiğin dışında çıkarsa
🔴 MAZERETİ YOK   ham işaret sayısını "çok-başkentli künye" diye raporlamak
🔴 MAZERETİ YOK   `devletler.js`e TEK BAYT yazmak — yama dosyası yazılacak
🔴 MAZERETİ YOK   `f`/`t`nin künye aralığını taşması — bir devlet var
                  olmadığı tarihte başkenti olamaz
🔴 MAZERETİ YOK   gün uydurmak. Bilinmiyorsa `YYYY-01-01`, ve `kaynak:`ta
                  ALT SINIR mı KESİN GÜN mü olduğu yazılacak
```

---
---

# ÖLÇÜM — ① ve ③ koşuldu · **KARNE: 2 ÇÜRÜDÜ, 1 TUTTU**

## 0. KARNE

```
①  HAM İŞARET      öngörü  60 – 110      ÖLÇÜM 159      🔴 ÇÜRÜDÜ
②  GERÇEK çok-bşk. öngörü  30 –  55      ÖLÇÜM  91      🔴 ÇÜRÜDÜ
③  ad eşleşmemesi  öngörü  %20 – %40     ÖLÇÜM %33,0    🟢 TUTTU
```

## 1. ① HAM İŞARET — 159 (öngörümün üstünde)
```
künye 438 · `baskent` DOLU 437 · BOŞ 1
ok (→) 91 · parantez 94 · virgül 12 · "sonra" 0 · noktalı virgül 0
BİRLEŞİM (en az bir işaret): 159
```

## 2. ② GERÇEK ÇOK-BAŞKENTLİLİK — **91** (ok işareti taşıyanlar)
Ve öngördüğüm gürültü **gerçekten vardı**, yalnız oranı farklıydı:
```
parantez 94'ün çoğu MODERN KARŞILIK ya da BAŞKENT YOKLUĞU beyanı:
   "İzeh (Mâlemîr)" · "(bozkırda göçebe, sabit başkent yok)"
virgül 12'nin çoğu aynı sınıf: "(göçebe, sabit başkent yok)"
ok 91 ise NEREDEYSE TAMAMEN gerçek taşınma dizisi:
   safevi "Tebriz → Kazvin → İsfahan" · rusya "Moskova → Sankt-Peterburg"
   akkoyunlu "Diyarbekir → Tebriz" · bogdan "Suceava → Iaşi"
```
⇒ Gürültü ayrımı **doğruydu**; yanlış olan **ölçek tahminimdi.**

## 3. 🔴 NİÇİN YANILDIM — teşhis, mazeret değil
Gerekçem şuydu: *"künye kümesi ağırlıkla küçük ve kısa ömürlü yapılardan
oluşuyor; kısa ömürlü yapı başkent taşımaz."*
**Tarih doğruydu, VERİ hakkındaki varsayımım yanlıştı.** `baskent` alanı
sandığımdan **çok daha zengin** yazılmış: küçük Anadolu beylikleri bile
*"Ermenek → Konya (1366-67) / Larende"* · *"Uluborlu (ilk merkez) → Eğirdir"*
diye ilk merkez-sonraki merkez ayrımı taşıyor.
📌 Ders: **veriyi tarihe bakarak tahmin ettim, veriye bakarak değil.** Bir
alanın ne kadar dolu olduğunu, o alanı yazanların titizliği belirler —
konunun kendisi değil.

## 4. ③ AD EŞLEŞMESİ — %33,0 (öngörü tuttu) · VE İKİYE AYRILDI
Tek geçiş, tek evren (`ok` grubunun 91 künyesi, 191 aday ad):
```
🟢 BİREBİR eşleşen       128  (%67,0)
🟡 YAZIM farkı            6  (%3,1)   Bidar→Bîdar · Meraga→Merâga ·
                                       İsfahan→Isfahan · San'a→Sana …
🔴 NOKTA YOK             57  (%29,8)  Washington · Canberra · Ottawa ·
                                       Addis Ababa · Tiran · Iaşi · Azuchi …
⇒ eşleşmeyen TOPLAM      63  (%33,0)
```
🔴 **VE İKİSİNİN ÇARESİ TERS** — bu yüzden ayrıldı (`§11`: iki ayrı kusur
tek satırda raporlanırsa aynı çare uygulanır ve doğru veri bozulur):
```
YAZIM farkı  → `bk[].ad`e yerleşimin KENDİ yazımı yazılır. Nokta EKLENMEZ.
NOKTA YOK    → ya yeni nokta gerekir ya da o başkent atlas kapsamı dışıdır
               (Washington · Canberra · Ottawa — atlasın konusu değil)
```
⚠️ **VE BİR UYARI, ölçümün sınırı:** `NOKTA YOK` kovası **hâlâ yazım vakası
içeriyor.** Normalleştiricim yalnız diakritik/büyük-küçük farkını yakalıyor;
ünlü değişimini yakalamıyor. Ölçülmüş örnek: `akkoyunlu → "Diyarbekir"`
kovada `NOKTA YOK` görünüyor, oysa atlasta **`Diyarbakır`** var.
📌 Ve bu **tam olarak koridor ağında 4 kenarı koparan vakadır** (tahtada
kayıtlı). ⇒ 57'lik kova **tek tek gözden geçirilmeli**; otomatik ayrım
burada yeterli değil ve bunu "ölçtüm" diye sunmuyorum.

## 5. ② adımı (yazma) — HENÜZ BAŞLAMADI
```
91 künye için `bk:` dizisi TDV'den TARİHLERİYLE çıkarılacak.
Bu, künye başına ayrı bir kaynak taraması demek — tek turda bitmez.
Ve ③'ün 63 eşleşmeyen adı ÖNCE çözülmeli: eşleşmeyen bir `bk[].ad`
yıldızı hiç çizmez ve HATA DA VERMEZ (koordinatörün "sessiz başarısızlık"
uyarısı).
```
⇒ Sıra önerim: **③ temizliği → ② yazımı**, ve ② dilim dilim.

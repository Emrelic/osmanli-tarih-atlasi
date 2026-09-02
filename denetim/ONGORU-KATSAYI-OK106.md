# ÖNGÖRÜ — 4,25 km/sa KATSAYISI · **ÖLÇÜMDEN ÖNCE YAZILDI**

> Oturum **OPUS HAZIR KITA 106** · 2 Eylül 2026 · şartname tahta **M-2076 (b)**
> 🔴 Bu dosya ölçüm koşturulmadan önce yazıldı. Dört gerçek sürenin ima ettiği
> hızı **henüz hesaplamadım** — hesaplasaydım öngörü ona göre şekillenirdi.

---

## SORU (koordinatörün sorduğu, iki parça)

```
① katsayı yukarı mı aşağı mı düzelecek, kaç km/sa?
② katsayı TEK mi olmalı, yoksa EĞİME BAĞLI bir fonksiyon mu?
   (motorda eğim yüzeyi VAR: medyan sürtünme 1,111 · en pahalı 11,75)
```

---

## ① ÖNGÖRÜM: **3,0 – 4,5 km/sa** · yani bugünkü 4,25 **AŞAĞI** düzelecek

### Gerekçe — birim uyuşmazlığı, ve yönü belli
```
menzil "saat"i        YOL üzerinde yürünen saattir (dolambaçlı, yokuşlu)
atlasın hesabı        KUŞ UÇUŞU km / saat
⇒ pay küçük, payda aynı ⇒ ima edilen hız GERÇEK yürüme hızından DÜŞÜK çıkar
```
Osmanlı'da bir *saat* mesafe birimi olarak kabaca **5 km**e karşılıktır
(yürüyerek). Yol kıvrımı kuş uçuşunu tipik olarak **%15-30** uzatır ⇒
```
5 km/sa (yol) ÷ 1,15…1,30  ≈  3,8 – 4,3 km/sa (kuş uçuşu)
```
⇒ 4,25 bu aralığın **üst ucunda**. Beklentim: ölçüm onu biraz aşağı çeker.
🔴 **Ve tahminimin çürüyeceği hâl:** dört kenarın hepsi düzlükteyse (Akşehir
ovası) yol kıvrımı az olur ve katsayı 4,25'in **üstüne** çıkabilir. Bu olursa
öngörüm çürür ve mazeretim yok — çünkü kenarların nerede olduğunu **şimdi
biliyorum** (Akşehir-Ilgın-Konya hattı, Konya Ovası).

### Sayısal hâli
```
en olası   3,5 – 4,2 km/sa
mümkün     3,0 – 4,5
çürütücü   > 4,6  ya da  < 2,8   ⇒ öngörüm YANLIŞ demektir
```

---

## ② ÖNGÖRÜM: **TEK katsayı YETMEZ — ama BU DÖRT ÖLÇÜM onu KANITLAYAMAZ**

İki ayrı şey söylüyorum ve ikisini karıştırmıyorum:

```
🟡 TASARIM HÜKMÜ    tek katsayı dağı ovayla aynı sayar; motorda eğim yüzeyi
                    ZATEN VAR (medyan 1,111 · en pahalı 11,75) ve onu
                    kullanmamak bilgiyi ÇÖPE ATMAKTIR ⇒ eğime bağlı olmalı
🔴 ÖLÇÜM SINIRI     elimde DÖRT nokta var ve dördü de AYNI HATTA
                    (İshaklı-Akşehir-Ilgın-Konya + Akşehir-Beyşehir).
                    Dört nokta bir fonksiyon uyduramaz; hepsi aynı arazide
                    olduğu için EĞİM DEĞİŞKENİ NEREDEYSE SABİT.
```
⇒ **Öngörüm: ölçüm "tek katsayı mı, fonksiyon mu" sorusunu ÇÖZEMEYECEK.**
Çıkacak şey bir katsayı **tahmini** ve onun **belirsizlik aralığı** olacak.
🔴 Ve bunu şimdiden söylüyorum ki, ölçümden sonra dar bir dağılım görüp
*"demek tek katsayı yetiyor"* diye **yanlış bir hükme** varmayayım: dar
dağılım burada **arazi çeşitliliğinin yokluğundan** gelir, katsayının
sağlamlığından değil.

### Ne olsaydı soruyu çözerdi (ve bugün elde YOK)
```
farklı arazilerden ölçülmüş süre: Toros geçidi · Balkan geçidi · Konya ovası
   ⇒ en az üç ayrı eğim rejiminde 5-10'ar kenar
bugün elde: TEK hat, DÖRT kenar
```

---

## ⚠️ ÖNCEDEN YAZILAN MAZERET SINIRI

```
🟡 MAZERETİ VAR   ② çözülemezse — sebebi ölçüm sayısının azlığı, ve bunu
                  ÖNCEDEN yazdım
🔴 MAZERETİ YOK   ① için: dört kenarın ima ettiği hızı hesaplayıp aralığın
                  dışında çıkarsa öngörüm YANLIŞTIR, "veri azdı" demem
🔴 MAZERETİ YOK   ölçülen katsayıyı `maliyet.py`ye ya da `koridor*.js`e
                  YAZMAK — ikisi de benim dosyam değil. Ölçüm önerilir,
                  uygulanmaz.
🔴 MAZERETİ YOK   dört kenarın `km` alanı BOŞ olanları için kuş uçuşu
                  hesaplayıp bunu "ölçülmüş km" gibi sunmak. Hesaplanan ile
                  beyan edilen AYRI raporlanacak.
```

---
---

# ÖLÇÜM — ve **ÖNGÖRÜM ÇÜRÜDÜ**

## 1. 🔴 ① ÖNGÖRÜM YANLIŞ ÇIKTI — ve mazeretim yok, çünkü önden yazdım

```
öngörüm      3,0 – 4,5 km/sa · "4,25 AŞAĞI düzelecek"
çürütücü     "> 4,6 ⇒ öngörüm YANLIŞ demektir"   ← kendi yazdığım eşik
ÖLÇÜLEN      ortalama 5,13 km/sa                 ← eşiğin ÜSTÜNDE
             ⇒ katsayı AŞAĞI değil YUKARI düzelecek: +%20,6
```

### Dört ölçülmüş kenarın ima ettiği hız
```
                          saat   km BEYAN   km HESAP   hız (km/sa)
İshaklı  ↔ Akşehir           5      —         25,6        5,12
Akşehir  ↔ Ilgın             9      —         44,3        4,92
Ilgın    ↔ Konya            18      —         67,9        3,77
Akşehir  ↔ Beyşehir         12     80,4       80,3        6,69   ← aykırı
                                   ↑ TEK beyan edilen km; hesapla 0,1 km fark
n=4 · en düşük 3,77 · ortanca ~5,02 · en yüksek 6,69 · ORTALAMA 5,13
```
🟢 Ve bir çapraz doğrulama: tek `km` beyanı olan kenarda **beyan 80,4 · hesap
80,3** — kuş uçuşu hesabım dosyanın kendi sayısıyla **0,1 km** içinde uyuşuyor.
Yani hesap yöntemi sağlam; yanlış olan **benim akıl yürütmemdi.**

## 2. NİÇİN YANILDIM — teşhis, mazeret değil

Öngörümün dayanağı şuydu: *"bir saat ≈ 5 km yürüyüş; yol kıvrımı kuş uçuşunu
%15-30 uzatır ⇒ kuş uçuşu hız 5'in ALTINDA çıkar."*
🔴 **Yanlış olan taban:** menzil ağı bir **yaya** ağı değil, **ulak/beygir
menzil** ağıdır. Atlı ulak saatte 5 km'den fazla yol alır; yol kıvrımı
düşülse bile kuş uçuşu hız 5'in **üstünde** kalabilir — ölçüm tam bunu söyledi.
📌 Ders: birim çevirisi doğruydu, **taşıma vasıtası** yanlıştı. Bir katsayıyı
tahmin ederken *"kim, neyle gidiyor"* sorusu *"kaç km"* sorusundan önce gelir.

## 3. 🟢 VE İKİNCİ, BAĞIMSIZ KANIT AYNI YÖNÜ GÖSTERDİ

TDV bandıyla (3-28 saat) sınav — 78 türetilmiş kenar:
```
katsayı 3,00 → bant içinde 43/78 (%55,1) · ortanca 25,6 sa
katsayı 3,50 → 55/78 (%70,5)              katsayı 4,00 → 59/78 (%75,6)
katsayı 4,25 → 65/78 (%83,3)   ← BUGÜNKÜ   katsayı 4,50 → 66/78 (%84,6)
katsayı 5,00 → 69/78 (%88,5)  ← EN İYİ
```
⇒ Bant uyumu da katsayı **büyüdükçe artıyor.** İki bağımsız kanıt (dört gerçek
süre · ansiklopedi bandı) **aynı yöne** işaret ediyor: 4,25 **düşük.**
⚠️ Ama bandın tek başına ayırt gücü zayıf: 4,25 → 5,00 arası kazanç yalnız
4 kenar (%5,2). Bant bir **üst sınır** koymuyor; 6 km/sa da bandı iyi geçerdi.
**Katsayıyı belirleyen kanıt dört ölçüm, bant yalnız onu DESTEKLİYOR.**

## 4. 🔴 ② ÖNGÖRÜM TUTTU — ama beklediğimden BAŞKA sebeple

Öngörüm: *"dört ölçüm 'tek katsayı mı fonksiyon mu' sorusunu ÇÖZEMEYECEK,
çünkü hepsi aynı arazide ve eğim değişkeni neredeyse sabit."*
```
ÖLÇÜLEN YAYILIM   3,77 → 6,69   (1,77 KAT)   — DÖRT kenar, TEK hat
```
🔴 Beklediğim *"dar dağılım"* değil, **çok geniş** bir dağılım çıktı. Ve bu,
sonucu değiştirmiyor ama **sebebini değiştiriyor**:
```
beklediğim sebep   arazi tekdüze ⇒ eğim değişkeni oynamıyor ⇒ soru çözülemez
gerçek durum       arazi tekdüze AMA yayılım 1,77 kat ⇒ demek ki hızı
                   belirleyen şey eğimden BAŞKA şeyler de içeriyor
                   (kaynağın "saat"i yuvarlaması · menzil arası yol kalitesi ·
                    hangi konağın hangi güzergâhla ölçüldüğü)
```
⇒ **Hüküm aynı, gerekçe daha güçlü:** tek katsayı da eğim fonksiyonu da bu
veriyle **seçilemez**; dört nokta bir fonksiyona yetmez, ve yayılım eğimle
açıklanamayacak kadar geniş.

🟡 **VE BİR VERİ SORUSU — düzeltmiyorum, bildiriyorum:**
`Akşehir ↔ Beyşehir` 6,69 km/sa ile aykırı. Oysa o hat **Sultan Dağları**
eteğinden geçer; dağlık bir ayak **yavaş** olmalı, hızlı değil. İki ihtimal:
```
① kaynaktaki 12 saat BAŞKA bir güzergâh için (Akşehir-Beyşehir arası birden
  fazla yol var)
② kenar bir menzil ayağı değil, ARADA menzil atlanmış bir özet
```
**Ölçmedim** — Sak-Çetin makalesinin gövdesi elimde yok (DergiPark CAPTCHA'lı,
ölçüldü). Kaydediyorum ki bir sonraki oturum bunu "aykırı değer" diye
sessizce atmasın.

## 5. HÜKÜM — öneri, uygulama DEĞİL

```
ÖNERİLEN KATSAYI   ~5,0 km/sa
   dayanak ① dört ölçümün ortalaması 5,13
   dayanak ② bant uyumu 4,25'te %83,3 → 5,00'de %88,5
   ⚠️ BELİRSİZLİK BÜYÜK: n=4, yayılım 1,77 kat, hepsi TEK hattan.
      Aykırı değer (6,69) atılırsa ortalama 4,60'a düşer — yani öneri
      4,6 – 5,1 aralığında bir yerdedir, tek bir sayı DEĞİL.
🔴 YAZMADIM. Katsayı `koridor*.js`in türetme notlarında ve (varsa) üretici
   betikte duruyor; ikisi de benim dosyam değil. Ölçüm önerilir, uygulanmaz.
```

## 6. ÖLÇMEDİĞİM — ve "ölçtüm" demiyorum
```
eğim yüzeyinin bu dört kenardaki GERÇEK değeri — `maliyet.py` koşturulmadı
   (koşu sürüyor, makine meşgul; ayrıca dört nokta fonksiyon uydurmaya yetmez)
Sak-Çetin makalesinin gövdesi — DergiPark CAPTCHA'lı, erişilemedi
yol kıvrım katsayısı (kuş uçuşu ↔ gerçek yol oranı) — hiçbir kenarda ölçülmedi
`berid` maddesi — koordinatörün sırasına göre BUNDAN SONRA
```

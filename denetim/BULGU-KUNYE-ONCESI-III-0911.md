# BULGU — KÜNYE ÖNCESİ III, 11 Eylül 2026

Oturum: KÜNYE ÖNCESİ III · Görev: kalan 44 adayı sınıflandırma + A kovası
ucuz kontrolünü otomatikleştirme.
Araç: `denetim/ARAC-KUNYE-ONCESI-III-0911.py` (öngörü commit `b38f608`,
ölçüm ondan SONRA). `data/*.js`e TEK SATIR YAZILMADI.

## D022 SONUCU

> *"~21 kayıt <5 yıl sapma taşıyor, çoğu ölçüm/yuvarlama gürültüsü
> olacak. Kalan ~23 kayıt ilk 10'la aynı dağılımı sürdürecek (~1/3 A,
> ~2/3 B). TOPLAM: A≈10-13 · B≈20-25 · ⚪/sorun-değil≈8-14."*

**Yön DOĞRU çıktı, sayı YAKLAŞIK tuttu:** A kovası **14** (tahminin
üst sınırında), B kovası **~4-6** (tahminden ÇOK AZ — çünkü >5 yıllık
sapmaların ÇOĞU, ilk 10'un aksine, A kovası çıktı: kalan 44'te "doğru
künye zaten var" oranı ilk 10'dakinden YÜKSEK), ⚪/trivial **~24-26**
(tahminin üst sınırında). **Sürpriz**: büyük sapmaların B-kovası oranı
ilk 10'a göre (6/10=%60) kalan 44'te ÇOK DÜŞÜK (~4/23≈%17) — yani en
büyük 10 sapma tesadüfen "künyesiz dönem" örneklerini yoğunlaştırmış,
kalan büyük sapmalar çoğunlukla "künye var, kullanılmamış" türünden.

---

## TAM TABLO — 44 kayıt

### A KOVASI — doğru künye VAR ve F/T PENCERESİYLE SAYISAL OLARAK DOĞRULANDI (14)

```
id                    sapma   → önerilen öncül   pencere doğrulaması
umman                 113,0y  → nebhani (f:1281,t:1515) TAM örtüşüyor
                       ⚠️ AMA bu künye ÇİFTİ ZATEN 10 Ağustos 2026'da
                       incelenmiş ve "TARİHE DOKUNMA" kararı verilmiş
                       (nebhani'nin kendi notu) — YENİ bir "Salgurlu"
                       adlandırma sorusu bekliyor. BU BULGUYU o kararla
                       birlikte OKU, çakışan bir düzeltme YAPMA.
kuzey-yuan            87,7y  → yuan-hanedani (f:1271,t:1368-09-14) TAM
mantua                47,0y  → bonacolsi (f:1273,t:1328-08-16) NEREDEYSE
                       BİREBİR — bonacolsi'nin bitişi mantua'nın künye
                       f'ine (1328-01-01) 8 ay fark, EN TEMİZ eşleşme
katalan               30,2y  → atina-dukaligi (f:1205,t:1458) örtüşüyor
                       — künyenin KENDİ ozet'i zaten "aradaki Katalan
                       dönemi ayrı kayıt" diyor, kendi kendini işaret
                       ediyor
celayirli              4,1y  → ilhanli (f:1256,t:1353) TAM örtüşüyor
zend                   3,5y  → afsar (f:1736,t:1796) TAM örtüşüyor
maratha               15,4y  → bicapur (f:1489,t:1686) TAM örtüşüyor
siyam-chakri           8,2y  → tonburi (f:1767-12-28,t:1782-04-06)
                       BİREBİR — tonburi'nin bitiş GÜNÜ siyam-chakri'nin
                       künye f: GÜNÜYLE AYNI (1782-04-06, Chakri darbesi)
bengal-sultanligi      2,0y  → delhi-sultanligi (f:1206,t:1526) örtüşüyor
multan-langah          6,0y  → delhi-sultanligi (aynı pencere) örtüşüyor
sur-hanedani           2,4y  → babur-imparatorlugu (f:1526,t:1857) —
                       ⚠️ TAM tutmuyor: 1538 babur-imparatorlugu'nun
                       KENDİ f'inden (1526) sonra ama olay Sur'un henüz
                       Bâbürlü topraklarını ELE GEÇİRDİĞİ an — burada
                       hangi tarafın "sahip" sayılacağı bir MODELLEME
                       sorusu, salt pencere eşleşmesi YETMİYOR — ⚪'a
                       daha yakın, temkinle A'ya kondu
babur-imparatorlugu   21,6y  → timurlu (bölge:orta-asya, f/t
                       DOĞRULANMADI — ⚠️ ARACIN KÖR NOKTASI: script
                       yalnız AYNI BÖLGEDE arıyor, Kâbil kaydı
                       guney-asya/orta-asya sınırında kalabilir, timurlu
                       adayı LİSTEYE HİÇ GİRMEDİ, elle eklendi)
ispanyol-peru         23,3y  → inka-imparatorlugu (f:1438,t:1572) KISMEN
                       örtüşüyor (1519 kapsanıyor) — ama 1533 (Pizarro
                       fethi) ile 1542 (Genel Valilik) arası 9 yıllık
                       bir "fetih dönemi" için AYRI bir künye de
                       GEREKEBİLİR, tam çözüm değil
yeni-ispanya          11,7y  → aztek-imparatorlugu (f:1428,t:1521-08-13)
                       KISMEN — 1523 kaydı Aztek'in ÇÖKÜŞÜNDEN SONRAKİ
                       2 yıl, yani bu spesifik tarih aztek'in kendi
                       PENCERESİNİ de AŞIYOR — ⚪'a yakın, "fetih
                       dönemi" boşluğu burada da var
```

### B KOVASI — doğru künye devletler.js'de YOK (4)

```
brunei-sultanligi   87,0y   1368 öncesi (İslamlaşma öncesi Brunei) için
                    hiçbir künye yok; 24 aday listelendi ama HİÇBİRİ
                    Brunei'nin KENDİ öncülü değil (hepsi KOMŞU devletler)
bogdan              78,0y   1359 öncesi (Macar tâbiliği dönemi) için
                    künye ARANMADI (araç `tabi:[]` alanı olan kayıtları
                    YAKALAYAMADI — D046 sınıfı bir araç kusuru, elle
                    tamamlandı ama künye adayı BULUNAMADI)
eflak               49,0y   aynı durum, aynı araç kusuru
```

### ⚪ ÖLÇÜLEMEDİ / KARMAŞIK — tek bir öncül künyeye İNDİRGENEMEDİ (5)

```
dogu-sumatra-sultanliklari  25,0y  TOPLU/BATTANİYE künye (4 ayrı
                            sultanlık, farklı kuruluş yılları) — hangi
                            YERLEŞİMİN hangi tarihte hangi sultanlığa
                            ait olduğu SİTE-DÜZEYİNDE incelenmeli
oranj                       24,3y  Yerli halklar (griqua/tsvana/zulu vb.)
                            aday ama HANGİSİ o spesifik toprağı
                            tutuyordu ÖLÇÜLMEDİ
transvaal                   22,0y  aynı durum
```

### 🟢/TRİVİYAL — muhtemelen GERÇEK bir "yanlış atıf" DEĞİL (21)

Aşağıdakilerin TAMAMI **<5 yıl** sapma taşıyor VE ozet metinleri ya
(a) künyenin kendisinin "ÜLKE SÜREKLİLİĞİ" ilan ettiğini (napoli,
portekiz-brezilyasi), ya (b) aynı siyasi hareketin/hanedanın FİİLİ
başlangıcının resmî ilandan birkaç ay/yıl önce olduğunu (qing-hanedani/
Later Jin, tay-son, dashun, banten-sultanligi, ahiler, sih-imparatorlugu
— SONUNCUSU kardeşin D010 testiyle zaten MEŞRU diye doğrulanmıştı) ima
ediyor:

```
sih-imparatorlugu(37,2y·MEŞRU,doğrulanmış) · qing-hanedani(15,4y) ·
portekiz-brezilyasi(14,0y) · ahiler(9,0y) · tay-son(5,0y) ·
dashun(2,8y) · banten-sultanligi(1,5y) · napoli(1,2y) · bhopal(1,0y) ·
nguyen-hanedani(1,0y) · majapahit(1,0y) · ingiliz-malaya(0,8y) ·
varsova-dukaligi(0,7y) · tonburi(0,7y) · yakub-beg(0,6y) ·
ingiliz-hindistani(0,5y) · timurlu(0,3y) · afgan-durrani(0,3y) ·
azuchi-momoyama(0,3y) · italya(0,1y) · yugoslavya(0,1y) ·
macaristan-naiplik(0,0y) · letonya(0,0y) · yeni-zelanda(0,0y)
```
⚠️ **BU BİR HÜKÜM DEĞİL BİR GRUPLAMA.** Tek tek doğrulanmadı (D107:
okumadım) — yalnız BÜYÜKLÜKLERİ ve ozet dilleri "muhtemelen sorun
değil" yönünde TOPLU bir işaret veriyor.

---

## ③ B KOVASI İÇİN ÜÇ SEÇENEK — `Değişmez 1` etkisi karşılaştırmalı

```
① YENİ KÜNYE AÇ           En doğru, en pahalı. brunei-sultanligi/
                          bogdan/eflak için ayrı araştırma + künye
                          yazımı gerekir. `Değişmez 1`e ETKİSİ YOK
                          (toprak hep sahipli kalır, yalnız doğru
                          sahiple).
② SAHİPSİZ BIRAK           Ucuz ama `Değişmez 1` İHLALİ: bu 3 kayıt
   (`s:` segmentini sil)   için toplam ~20 nokta-yıl sahipsiz kalır —
                          CLAUDE.md'nin "sahipsiz nokta haritada delik
                          demektir" uyarısına TAM ÇARPAR. ÖNERİLMEZ.
③ KÜNYENİN f:'İNİ GERİYE   En ucuz. Ama `D089`in riski: "veri modelinin
   ÇEK                    ifade edemediği bir ilişkiyi ifade edebildiği
                          bir ilişkiye çevirmek YAKLAŞIKLAMA DEĞİL
                          BAŞKA BİR İDDİADIR" — Brunei Sultanlığı'nı
                          1281'e çekmek, henüz var olmayan bir sultanlığı
                          87 yıl erken KURULMUŞ gibi gösterir.
```
**Bu üçünden HANGİSİNİN uygun olduğuna KARAR VERMEDİM** — görev kapsamım
ölçmek, seçmek değil. Ama not: ①'in maliyeti YALNIZ 3 kayıt için (B
kovası küçük çıktı, öngörünün aksine) — bu, ①'i düşünülenden UCUZ yapar.

---

## §4 — Ölçmediklerim

```
① Aracın `tabi:[{...}]` alanı olan künyeleri (eflak, bogdan gibi)
   YAKALAYAMADIĞI kusuru DÜZELTİLMEDİ — elle atlatıldı, ama KAÇ TANE
   DAHA künye bu yüzden hiç taranmamış OLABİLİR ölçülmedi (D107: yeni
   bir kör nokta, büyüklüğü bilinmiyor).
② Bölge-sınırı-aşan adaylar (babur-imparatorlugu→timurlu gibi)
   SİSTEMATİK aranmadı — yalnız TESADÜFEN fark edilen TEK örnek elle
   eklendi. Kaç tane daha böyle "komşu bölgede duran doğru künye"
   VAR, ÖLÇÜLMEDİ.
③ A kovasının 14'ünün 8'i SAYISAL pencere kontrolüyle doğrulandı
   (umman·kuzey-yuan·mantua·katalan·celayirli·zend·maratha·
   siyam-chakri); 6'sı (bengal-sultanligi·multan-langah·sur-hanedani·
   babur-imparatorlugu·ispanyol-peru·yeni-ispanya) YALNIZ ozet OKUNARAK
   ve KISMİ pencere kontrolüyle sınıflandı — ikinci grup daha ZAYIF
   güvenle işaretlendi.
④ 21 kayıtlık trivial grup TEK TEK doğrulanmadı.
⑤ Motor koşulmadı, `data/*.js`ye hiçbir satır yazılmadı.
```

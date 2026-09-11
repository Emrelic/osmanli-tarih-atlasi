# ENKLAV KARARI — B2 mekanizması, Tebriz/Maan/Azak izi, yutulma ölçütü

Görev: koordinatör sevki (11 Eylül 2026). `arac/` DONUK — yalnız
OKUNDU, hiçbir koşu açılmadı.

## ① B2 MEKANİZMASI — `_b2_enklav_birlestir` (uret_petek.py:1512-1611)

Her kopuk parça (enklav) için, ana gövdeye köprü kurulmadan ÖNCE
SIRAYLA üç sınav var — herhangi birinde takılırsa köprü KURULMAZ:

```
1) MESAFE           satır 1528-1531   d_km > B2_ENKLAV_KM (=250.0)
                     → b2_uzak, DEVAM ETMEZ
2) DENİZ            satır 1542-1544   köprü hattı _KARA_HAZIR.covers()
                     testini GEÇEMEZ (hat deniz üzerinden geçiyor)
                     → b2_deniz, DEVAM ETMEZ
3) BAŞKASININ       satır 1546-1548   _bant_baskasinin_topragini_kesiyor_mu()
   TOPRAĞI                            — köprü hattı üzerinde ÖRNEKLENEN
                                      her noktanın EN YAKIN yerleşimi
                                      sahip_ix DIŞINDA (yabancı/başka
                                      devlet) mı?
                                      → b2_yerlesim, DEVAM ETMEZ
   (ikinci, daha SIKI tur: köprünün GERÇEK ŞEKLİ — yamuk/kavisli bant —
   çizildikten SONRA `_yasakli_mi` ile TEKRAR kontrol edilir, satır
   1603-1606; bu turda hem "başka devlet" hem "kasıtlı boşluk/bos"
   noktası aynı b2_yerlesim sayacına düşer — İKİ FARKLI ŞART TEK
   SAYAÇTA BİRLEŞİYOR, bkz. ⑤ altında not)
4) BAŞARI            satır 1607-1608   köprü kurulur, birleşir → b2_birlesti
```

🔴 **Koordinatörün "dört ayrı sebep" ifadesi küçük bir düzeltme
istiyor:** `b2_birlesti` bir RET SEBEBİ değil BAŞARI sayacı. Enklavın
birleşME sebebi ÜÇTÜR (uzak / deniz / yabancı toprak), dördüncü sayaç
"neden birleşTİ"yi tutar. Mesafe bunlardan yalnızca BİRİ — koordinatörün
sorusu doğru, sayı ifadesi ufak düzeltmeyle netleşiyor.

## ② TARİHSEL BAĞLAM — kodun KENDİ ölçtüğü sayılar (29 Ağustos 2026, r3556)

Eşik 800→250 yapılırken koşulan ölçüm, kodun kendi yorumunda duruyor
(satır 1408-1421):
```
Birleşik gövde (doğrudan ∪ tâbi), 6 kesit:
  DENİZ AŞIRI (zaten reddedilen)     : 761
  KARASAL (B2 köprü kurmayı dener)   :   7   ← BUNLARIN 5'i AYNI 16 km²
                                             kırıntı (5 ayrı kesitte),
                                             2'si AYNI 22.089 km²/223 km
                                             enklav (2 kesitte)
⇒ GERÇEKTE YALNIZ 2 BENZERSİZ KARASAL VAKA vardı o ölçümde.
```
🔴 **BU SAYI İLE KOORDİNATÖRÜN "332 aday"ı UYUŞMUYOR — reconciliation
GEREKİYOR, ben yapmadım.** İki açıklama olası: (a) 332, B2'den ÖNCEKİ
HAM parça sayısı (deniz-aşırı 761 dahil, ya da B2/B3 hiç çalışmadan
önceki tüm çok-parçalı gövdeler), (b) veri 29 Ağustos'tan bugüne
büyüdü (D069: bu satır bir ÖLÇÜMÜN FOTOĞRAFI, bugünün sayısı FARKLI
olabilir). **Hangisi olduğunu ÖLÇMEDİM — bu, ENKLAV TAVANI oturumunun
kapsamı (o eşiği/dağılımı ölçüyor); ben tahtadan bunu ONLARA sordum,
tekrar ölçmedim (§7.1③, çakışmamak için).**

## ③ TEBRİZ / MAAN / AZAK — HANGİ DALDA ELENİYORLAR

⚠️ **Koşu frozen olduğu için kod ÇALIŞTIRILAMADI — bu bir ÇALIŞTIRMA
SONUCU DEĞİL, veri okuyarak yapılmış AKIL YÜRÜTMEDİR.** Her biri için
güven seviyesi ayrı ayrı belirtiliyor.

**Azak (47,113°K 39,423°D), 223 km — 🟢 YÜKSEK GÜVEN: `b2_deniz`**
Azak, Don nehrinin Azak Denizi'ne döküldüğü burun ucunda. Ana gövdeye
(Kırım/Kefe hattı) en kısa hat coğrafi olarak Azak Denizi'ni/Kerç
Boğazı'nı KESER — karadan bir hat çizilemez. `B2_ENKLAV_KM`'nin kendi
yorumu zaten bunu ima ediyor ("EN UZAK KARASAL enklav 223 km" — yani
223 km'lik vaka KARASAL sayılıyordu, Azak'ın 223 km'si muhtemelen O
DEĞİL, farklı bir aday; Azak muhtemelen `b2_deniz`de zaten elenip
"karasal" sayılan 7 vakaya HİÇ GİRMEDİ). ⇒ Mesafe eşiğini
yükseltmenin Azak'a HİÇBİR ETKİSİ OLMAZ.

**Tebriz (38,08°K 46,292°D), 32,6 km — 🟡 ORTA GÜVEN: `b2_yerlesim`**
Tebriz ile Van/Doğu Anadolu gövdesi arasındaki koridorda (37-39°K,
41-46,5°D) YOĞUN ve GERÇEK yerleşim noktaları var (Hoy, Urmiye,
Selmâs, Merend, Kotur, Bargiri...) — HİÇBİRİ `kasıtlı boşluk` DEĞİL,
hepsi gerçek, kendi egemenlik geçmişi olan şehirler. Tebriz'in
Osmanlı-Safevî arasında BAĞIMSIZ el değiştirdiği (Tebriz Osmanlı'dayken
komşu Hoy/Urmiye Safevî'de kalabildiği) dönemler TARİHSEL OLARAK
BİLİNİYOR. ⇒ En muhtemel açıklama: köprü hattı üzerindeki bir ya da
birkaç örnek noktası GERÇEKTEN Safevî'ye ait çıkıyor. **DOĞRULANMADI**
(hangi TARİHTE hangi ara-nokta yabancıydı, TEK TEK KOŞULMADAN
kesinleşmez) ama coğrafi/tarihsel olarak ÇOK TUTARLI.

**Maan (30,192°K 35,734°D), 62,4 km — ⚪ ÇÖZÜLEMEDİ (D033: veri
yetersiz, kod çalıştırılamadı)**
Maan'a EN YAKIN gerçek yerleşim Kerak, 110 km (kuzeyde) — `kasıtlı
boşluk` DEĞİL, muhtemelen AYNI sahip (Osmanlı/Şam vilayeti). Bu, Maan'ın
`b2_yerlesim`den DEĞİL başka bir sebepten elendiğini düşündürür ama
NET DEĞİL: köprünün GENİŞLİĞİ (yamuk/kavisli bant, `en_ana` 3°'ye kadar
açılabiliyor — satır 1586) yalnız DÜZ HATTI değil bir ŞERİDİ tarıyor,
ve o şeridin İÇİNDE Maan-Kerak ekseninin dışına düşen farklı sahipli
bir nokta olabilir — bunu KOD ÇALIŞTIRMADAN GÖREMEDİM. Vâdî Sirhân
(217 km, GÜNEYDOĞU yönünde, `kasıtlı boşluk=True, bos="kabile"`) da
teorik bir aday ama YÖN UYMUYOR (Kerak KUZEYDE, Vâdî Sirhân
GÜNEYDOĞUDA) — muhtemelen İLGİSİZ. **Bu üçünün en belirsizi Maan'dır
ve dürüstçe ÇÖZÜLEMEDİ diye damgalanıyor** — kod koşulmadan kesin
cevap yok.

## ④ ASIL SORU — 🟢 yutulmalı / 🔴 yutulmamalı AYRIMI, mesafe değilse ne?

**ÖLÇÜT: MESAFE DEĞİL, `b2_deniz`/`b2_yerlesim`İN GERÇEKTEN GEÇERLİ
OLUP OLMADIĞI.**

```
🔴 YUTULMAMALI (eşik yükseltilse bile birleşmemeli, ve birleştirmek
   KUSUR OLUR): b2_deniz ya da b2_yerlesim GERÇEK bir coğrafi/siyasi
   engele karşılık geliyorsa. Azak (deniz) ve Tebriz (muhtemelen
   Safevî arası) bu kovaya girer — MEŞRU tarihî enklav, TAM DA
   koordinatörün "Kefe·Hotin·Azak·Tebriz" listesi.
🟢 YUTULMALI (eşik yükseltilirse GÜVENLE birleşebilir): yalnız
   `b2_uzak` tarafından tutuluyorsa VE aradan geçen köprüde ne deniz
   ne yabancı toprak/kasıtlı boşluk varsa. Bunlar muhtemelen VERİ
   SEYREKLİĞİNİN yarattığı YAPAY kopukluklar (ör. "5 ayrı kesitte
   AYNI 16 km²'lik kırıntı" — küçük, tekrarlayan, muhtemelen ANLAMSIZ
   bir parça).
```

📌 **Ve bunun kanıtı doğrudan koordinatörün kendi verdiği üç örnek:**
Tebriz/Maan/Azak zaten 250 km eşiğinin ALTINDA (yani `b2_uzak` onları
TUTMUYOR) ve HÂLÂ birleşmiyorlar — bu, `b2_deniz`/`b2_yerlesim`in
DEVREDE olduğunu doğrudan İSPATLIYOR. ⇒ **Eşiği 250'den 500'e
çıkarmak bu üçüne HİÇBİR ŞEY YAPMAZ** (koordinatörün ②'de öngördüğü
risk DOĞRU) — onlar zaten mesafe testini GEÇMİŞ durumda, engel BAŞKA
YERDE. Eşik değişikliği YALNIZ `b2_uzak` kovasındaki (Tebriz/Maan/Azak
DIŞINDAKİ) adaylara etki eder.

## ⑤ ENKLAV TAVANI OTURUMUYLA İŞ BÖLÜMÜ

Tahtaya yazıldı (M-3448): ben MEKANİZMAYI (bu belge), onlar EŞİĞİ/
dağılımı ölçüyor — 332 rakamının kaynağı ve bugünkü gerçek dağılım
ONLARIN ölçümü. Bu belge onların eşik kararı için ÇERÇEVEYİ veriyor:
**eşik değişse de değişmese de, her adayın HANGİ daldan (`uzak`/
`deniz`/`yerlesim`) elendiği bilinmeden "kaç tanesi kurtulur" sorusu
CEVAPLANAMAZ** — bu sayı koşunun kendi loguna (`_B23_SAYAC`, satır
5148-5151) bakılarak, HER ADAY için AYRI AYRI okunmalı, yalnız TOPLAM
sayı yetmez (D116: çok parçalı bir ilişkiyi tek sayıya indiren ölçü
kusuru alt sınır gösterir).

## ⑥ ÖZET — SAYIYLA

```
① B2 mekanizması: 3 ret dalı (uzak/deniz/yerlesim) + 1 basari (birlesti) — OKUNDU
② Tarihsel referans sayi (29 Agustos): 761 deniz-asiri, 7 karasal (2 benzersiz)
   — 332 ile UYUSMUYOR, reconciliation ENKLAV TAVANI'nda
③ Azak: b2_deniz, YUKSEK GUVEN (kosu SONUCU degil, akil yurutme)
   Tebriz: b2_yerlesim, ORTA GUVEN (kosu SONUCU degil, akil yurutme)
   Maan: COZULEMEDI, kod kosulmadan kesin cevap yok (D033)
④ Yutulma olcutu: MESAFE DEGIL — b2_deniz/b2_yerlesim GERCEK mi.
   Tebriz/Maan/Azak zaten <250km VE hala ayri olmasi bunun KANITI.
```

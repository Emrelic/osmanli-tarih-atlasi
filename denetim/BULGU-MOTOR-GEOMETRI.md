# MOTOR/GEOMETRİ — "petek şekli yanlış" dört madde (M-1197)

**Oturum:** MOTOR (yeni açılan, Oturum 2 sınıfı — yalnız ölçer, düzeltme uygulamaz)
**Tarih:** 24 Ağustos 2026
**Kaynak:** tahta M-1197 + `parti-emrelic-0030/0031` CEVAP.json'daki "MOTOR/GEOMETRI" kümesi

**Kapsam notu:** 0031/CEVAP.json'daki küme 6 madde taşıyordu, M-1197'de 4'ü geldi.
Eksik ikisi (0030/H-0007 Çimpe/Saroz, 0030/H-0016 Tuna) tahtada zaten
**MOTOR EPOK'a M-1196 olarak ayrı verilmiş** ("SU KÜMESİ: MASKE DAR BOĞAZLARI
KESMİYOR") — mükerrer olmasın diye BU raporda ele ALINMADI. Aşağıda yalnız
gerçekten bana ait dört madde var: Ordu, Mardin, Germiyan, Üçgen.

`git log --since=2026-08-20 -- data/yerlesimler.js data/yerlesimler_ek25.js`
bu dört bölgeye dokunan bir düzeltme göstermiyor — dördü de **hâlâ geçerli.**

---

## 1. ORDU (0030/H-0004) — Trabzon Rum'un Niksar'a doğru sivri ucu

**Şikâyet:** *"trabzon rum imparatorlugunun ORDU sehrinin alani neden boyle
SIVRI ... sehirlerin sinirlari daglara tepelere nehirlere dayanmali"*
Görsel: 1335-01-01 · 40.19–41.22K · 37.04–38.26D · z7

### ÖLÇTÜĞÜM
```
Ordu (Bayramlı)  40.976,37.848  trabzon-rum (1281-1350)
Ünye             41.128,37.283  trabzon-rum (1281-1350)
Giresun          40.918,38.389  trabzon-rum (1281-1461)  ← doğu komşusu
Niksar           40.593,36.951  eretna/ilhanlı (Sivas ailesi)
Tokat            40.314,36.554  eretna/ilhanlı (Sivas ailesi)
```
`lat 40.5-40.9 · lon 36-38` kutusunda (Ordu'nun GÜNEYİ, kıyı ile Niksar/Tokat
arası, ~45×40 km'lik iç Karadeniz dağlık kuşağı) **Giresun dışında hiçbir
yerleşim kaydı YOK** — Şebinkarahisar, Koyulhisar, Mesudiye, Reşadiye,
Alucra, Görele gibi bilinen tarihî yerleşimlerin hiçbiri veride yok.

Mesafeler (haversine):
```
Ordu → Giresun (doğu, aynı devlet)     45,9 km   ← kıyı boyu tipik aralık
Ordu → Niksar (güney, rakip devlet)    86,7 km   bearing 240,9°
Ordu → Tokat  (güney, rakip devlet)   131,7 km   bearing 236,4°
Ünye → Niksar                          65,7 km   bearing 205,3°
```
Sivri ucun ekrandaki yönü (görselde aşağı/güney, Niksar etiketinin göründüğü
taraf) bu ölçülen 205-241° yelpazesiyle **örtüşüyor.**

### ÇIKARDIĞIM
Koordinatörün hipotezi **DOĞRULANDI**: Ordu/Ünye'nin güneyinde, dağlık
kesimde gerçek bir **nokta boşluğu** var (kıyı aralığının ~2-3 katı mesafe).
Trabzon Rum'un peteği bu boşlukta serbest kalıp en yakın rakip nokta
kümesine (Niksar/Tokat) kadar uzanıyor; motor kusuru değil, **§2 nokta
eksikliği** klasik vakası. Çare motorda değil, **NOKTA oturumunda**: iç
Karadeniz dağlık kuşağına (Şebinkarahisar/Koyulhisar/Mesudiye civarı) en az
bir sahiplik noktası eklenmeli.

---

## 2. MARDIN (0031/H-0009) — Artuklu peteğinin güneye sivrilmesi

**Şikâyet:** *"bu mardinin bolgesi neden boyle sivri gorunuyor"*
Görsel: 1401-01-01 · 36.49–37.55K · 39.65–41.82D · z8

### ÖLÇTÜĞÜM
```
Mardin        37.312,40.735  artuklu (1281-1409)   ← TEK artuklu noktası bölgede
Nusaybin      37.077,41.215  akkoyunlu (1401'de)   49,9 km  bearing 121,4° (GD)
Ceylanpınar   36.845,40.043  akkoyunlu (1401'de)   80,4 km  bearing 230,0° (GB)
Diyarbakır    37.911,40.237  akkoyunlu (1378'den)  ~80 km (KB) — 1401'de artık akkoyunlu
```
Veride Mardin'in **artuklu** etiketli tek komşu noktası yok — Hasankeyf,
Savur, Dara, Kızıltepe gibi bilinen Artuklu'ya bağlı yerleşimlerin hiçbiri
bu atlasta kayıtlı değil. Mardin **tek başına bir ada nokta**, iki yanından
(GD'de Nusaybin, GB'de Ceylanpınar) Akkoyunlu noktalarıyla kuşatılmış.

Görselde sivri uç tam GÜNEYE (bearing ~180°) iniyor — yani Nusaybin (121°)
ile Ceylanpınar (230°) arasındaki **boş açı aralığında.**

### ÇIKARDIĞIM
Bu, üç noktalı (Mardin + iki Akkoyunlu komşusu) bir Voronoi diyagramının
**matematiksel olarak beklenen sonucu**: ortadaki tek nokta iki yanından
sıkıştırılınca hücresi güneye doğru bir noktaya daralıyor. Motor hatası
DEĞİL — ama sebep yine **nokta eksikliği**: Artuklu'nun tarihte gerçekten
sahip olduğu bağlı şehirler (Hasankeyf, Savur, Kızıltepe/Koçhisar, Dara) veri
setinde YOK. Bunlar eklenirse Mardin'in peteği güneye değil kendi
komşularına doğru genişçe bir alan paylaşırdı ve sivrilik yumuşardı. Çare
yine NOKTA oturumunda.

---

## 3. GERMİYANOĞULLARI (0031/H-0019) — "eğri plan"

**Şikâyet:** *"germiyanoğulları beyligi EGRI PLANDA neden gorunuyor bu
hatayi duzeltelim"* — Görselde tarih damgası YOK (caption çubuğu
eksikti), **doğrulayamadım hangi tarihe ait olduğunu.**

### ÖLÇTÜĞÜM
Germiyan'a bağlı (aynı dönem aralığında, ~1300-1381) 8 nokta var ve
makul yayılmış:
```
Kütahya 39.424,29.983 · Tavşanlı 39.545,29.492 · Simav 39.090,28.980 ·
Emet(Eğrigöz) 39.343,29.259 · Uşak 38.673,29.406 · Karahisâr-ı Sâhib
38.757,30.538 · Alaşehir 38.351,28.518 · Denizli 37.783,29.094
```
Görseli 2× büyütüp incelendiğinde şekil **tek bir sivri uç DEĞİL** —
7-8 köşeli, düzgün kenarlı bir çokgen (Balıkesir'e karşı düz kenar, Kütahya
çevresinde geniş üst, Alaşehir/Birgi yönünde bir çentik, Karahisâr yönünde
sivrice bir uç). Kenarlar Voronoi ayraçlarının (bisector) beklenen düz
segmentleri gibi duruyor; `arac/uret_petek.py:1193-1203` (`dogal_hatta_yasla`
+ `chaikin_acik(cs, 2)`) **bütün peteklere ayrım gözetmeksizin** uygulanıyor
— tâbi/vassal (kesikli çizgi) petekler için ayrı/eksik bir yumuşatma
YOK, ölçtüm.

### ÇIKARDIĞIM
**Hipotez BURADA TUTMUYOR** — nokta yoğunluğu makul, tek bir "sivri uç" yok.
Gördüğüm şey muhtemelen 40-80 km aralıklı noktalardan doğan **düz-kenarlı,
çok köşeli** bir Voronoi çokgeninin doğal görünümü; `chaikin_acik` 2 tur
yumuşatma uyguluyor ama bu, onlarca km uzunluğundaki düz kenarları
"organik" bir sınıra çeviremiyor olabilir. **Bunu ölçmedim** (chaikin
tur sayısının kenar uzunluğuna göre etkisini ölçen bir deneyim yok) — bir
kusur değil bir **estetik/ayar** sorusu olabilir, ya da Emre gerçekten farklı
bir çentik/köşeyi işaret ediyor olabilir; tarih damgası eksik olduğu için
**hangi anı gördüğünü teyit edemedim.**
⚠️ Bu maddeyi "çözülmüş" saymıyorum — sadece diğer üçünden **farklı bir
sınıfa** ait olduğunu ölçtüm. Emre'den hangi köşeyi/tarihi kastettiği
sorulabilir.

---

## 4. ÜÇGEN (0030/H-0018) — "bu hatayı daha önce de sana atmıştım"

**Şikâyet:** *"bu ucgen garip gosterim"* — Görsel: 1392-01-01 ·
38.19–38.97K · 36.17–36.64D · z7,7 · madde: "Teke ilinin ilhakı" (bu
madde metni muhtemelen ekrandaki kronoloji panelinden geldi, HARİTA
KONUMUYLA İLGİSİZ — kutu ~Kayseri-Sivas-Elbistan arası bir bölge, Teke/Antalya
değil; bunu **çıkarım olarak** işaretliyorum, ölçmedim).

### ÖLÇTÜĞÜM — önce eski teşhisin GEÇERLİLİĞİ
`denetim/BULGULAR-UCGEN-19AGU.md` (20 Ağustos) `serbest-hale`/
`serbest-cekirdek` katmanlarının **piksel genişliği üst sınırsız** olduğunu
teşhis etmişti (çöl bölgelerinde kırmızı, bulanık, soluk "ok ucu"). Düzeltme
**FİİLEN UYGULANDI**: commit `3a36b65` (20 Ağustos 10:34) — piksel tavanı +
ters opaklık, `js/app.js`. Sürüm damgası o günden beri ilerledi (`r2885` →
bugün `r3278`), yani **düzeltme yayında, bu ekran görüntüsünden (23 Ağustos
22:57) ÖNCE.**

Ama bu ekran görüntüsü (H-0018) o kusuru GÖSTERMİYOR: renk **koyu
yeşil/turkuaz DOLGU** (gerçek bir devlet gövdesi), kırmızı bulanık HALE
DEĞİL. Yani eski teşhisin çözdüğü mekanizma (çizgi genişliği) burada
**görsel olarak yok.**

`lat 38.19-38.97 · lon 36.17-36.64` kutusunda **hiçbir yerleşim kaydı YOK**
— en yakınları Kayseri (38.734,35.480, ~100 km batı, burhaneddin), Sivas
(39.750,37.015, ~110 km kuzey, burhaneddin), Elbistan (38.207,37.194, ~50 km
güneydoğu, dulkadir). Kutunun tamamı bu üç noktanın ARASINDA kalan boş bir
alan.

### ÇIKARDIĞIM
**İlk teşhis YANLIŞ DEĞİLDİ, EKSİKTİ.** 19 Ağustos raporu tek bir mekanizmayı
(çöl bölgelerinde `serbest-hale` çizgi genişliği) doğru teşhis etti ve o
çözüldü. Ama "üçgen görünüm" tek bir kök sebepten gelmiyormuş — **ikinci,
yapısal olarak farklı bir mekanizma** (gerçek gövde dolgusu, nokta
boşluğunda sivrilen Voronoi hücresi — tam olarak Ordu/Mardin'deki ailenin
aynısı) hâlâ duruyor ve 20 Ağustos raporunun kapsamı dışındaydı (o rapor
yalnız 5 çöl kutusuna bakmıştı, hepsi kırmızı haleliydi).
⇒ **Bu madde ORDU/MARDIN ailesine katılıyor**, ayrı bir kusur değil — aynı
§2 nokta-eksikliği sınıfının üçüncü örneği. Çare NOKTA oturumunda: bu boş
üçgen bölgeye (Kayseri-Sivas-Elbistan arası, muhtemelen Gürün/Darende/Kangal
havalisi) en az bir nokta eklenmeli.

---

## 5. TOPLU HÜKÜM

```
ORDU       nokta eksikliği (§2) — DOĞRULANDI, güney boşluk 87-132 km
MARDIN     nokta eksikliği (§2) — DOĞRULANDI, ada-nokta iki komşu arası
ÜÇGEN      nokta eksikliği (§2) — DOĞRULANDI, eski "üçgen" teşhisinin
           EKSİK bıraktığı ikinci mekanizma; eski teşhis kendi kapsamında
           doğruydu ve uygulandı (3a36b65)
GERMİYAN   AYRI SINIF — nokta yoğunluğu yeterli, tek sivri uç yok, muhtemelen
           normal çok-köşeli Voronoi görünümü; kusur olduğu ÖLÇÜLEMEDİ,
           tarih damgası eksik olduğu için tam doğrulanamadı
```

**Motor kodunda bir hata ÖLÇMEDİM.** Üç vakanın üçü de veri (nokta)
tarafında; motora dokunulmadı, dokunulması ÖNERİLMEDİ. Öneri: NOKTA
oturumuna üç bölge havale edilsin —
1. İç Karadeniz dağlık kuşağı (Şebinkarahisar/Koyulhisar/Mesudiye civarı)
2. Mardin'in tarihî bağlı şehirleri (Hasankeyf, Savur, Kızıltepe, Dara)
3. Kayseri-Sivas-Elbistan arası boş üçgen (Gürün/Darende/Kangal civarı)

## 6. ÖLÇMEDİKLERİM (açıkça)

```
· Gerçek Voronoi hücre sınırını (shapely ile) kurup sivri ucun tam
  koordinatını hesaplamadım — nokta konumlarından ve boş kutu ölçümünden
  ÇIKARDIM, birebir motor çıktısıyla doğrulamadım.
· Germiyan görselinin hangi tarihe/sürüme ait olduğu — damga yok.
· "Üçgen" görselindeki kronoloji metninin harita konumuyla neden uyuşmadığı
  — ayrı bir olası kusur olabilir, bu raporun kapsamı dışında bıraktım.
· chaikin_acik'in kenar uzunluğuna göre etkisi (Germiyan için) — ölçmedim.
```

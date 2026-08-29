# BULGU — SINIR YERLEŞİMİ / TRAKYA

**Oturum:** HAZIR KITA OPUS 86 · **Tarih:** 30 Ağustos 2026
**Şartname:** `oturumlar/SINIR-YERLESIMI.md`

---

## 0. ÖZET — görevin varsayımı ÖLÇÜLDÜ ve ÇÜRÜDÜ

Şartname sapmayı **çift mesafesinden türetiyordu**: *"en kötü sapma =
çift mesafesinin yarısı"* ⇒ ortanca çift 39,2 km ⇒ **~19,6 km sapma** ⇒
*"~10 km'lik çiftler yaz, ≤5 km'ye in."*

Bu bir **üst sınır**, ölçüm değil. Gerçek sınır çizgisi repoda duruyordu
(`veri-kaynak/ne_10m_admin_0_countries.geojson`) ve sapmayı **doğrudan**
ölçmeyi mümkün kılıyor. Ölçtüm:

```
                        ŞARTNAMENİN VARSAYIMI     ÖLÇÜM
ortanca sapma           ~19,6 km                   3,3 km
en kötü sapma           ~62 km (en uzak çift)     10,4 km
15 km üstü                       —                 SIFIR (%0)
5 km hedefinde olan hat          —                 ~481 km / 580 km (%83)
```

⇒ **Trakya sınırının %83'ü hedefin ZATEN İÇİNDE.** İş, sanılanın onda
biri kadar — ama kalan %17 tek bir yerde toplanmış.

📌 Niçin çift mesafesi kötü bir vekil: bisektör konumunu mesafe değil
**iki noktanın sınıra göre DİZİLİMİ** belirler. 40 km'lik bir çift,
ikisi de sınıra eşit uzaklıktaysa 0 km sapma verir; 12 km'lik bir çift
ikisi de aynı yakadaysa 6 km sapma verir. ***Mesafe ölçüldü sanılan şey,
aslında hiç ölçülmemişti.***

---

## 1. YÖNTEM

```
① Türkiye · Yunanistan · Bulgaristan poligonları (Natural Earth 10m)
② Türkiye sınırının Yunanistan/Bulgaristan'a DEĞEN kısmı  → 580 km kara hattı
③ hat boyunca ~2 km'de bir örnek                          → 207 örnek nokta
④ her örnekte  d_TR = en yakın 1923-OSMANLI/tâbi nokta
               d_YB = en yakın 1923-yabancı nokta
⑤ Voronoi kenarı ikisinin ORTASINDAN geçer ⇒
      SAPMA = (d_YB − d_TR) / 2
      +  atlas sınırı Bulgar/Yunan içine taşıyor  (OSMANLI FAZLA)
      −  atlas sınırı Türk içine taşıyor          (OSMANLI EKSİK)
```

⚠️ **VARSAYIM, ölçülmedi:** 1923 Trakya sınırı ile bugünkü sınırın
Trakya'da aynı olduğunu varsaydım (Lozan'dan beri değişmedi). Başka
kesimlerde (Suriye · Irak · Kafkasya) bu varsayım **geçerli değildir**
ve orada aynı yöntem ancak dönemin sınır poligonuyla koşulabilir.

---

## 2. HÂKİM KUSUR — TEK KESİM, sapmanın yarısı

```
41,96K 26,70D  →  42,09K 27,21D     30 örnek · ~51 km hat
en kötü  +10,4 km  @ 42,0827/27,0657        🔴 OSMANLI FAZLA
o noktada en yakın çift:  Kofçaz  ↔  Malko Tırnova   (39,6 km)
```

**Sebep ölçüldü ve `CLAUDE.md §3.5.1`in tam vakası:**

```
KUTU 41,85-42,45K / 26,40-27,60D  →  DÖRT kayıt (tarihten bağımsız)
   Elhova (Elhovo)        42,170  26,573   bulgaristan-kralligi
   Malko Tırnova          41,983  27,525   bulgaristan-kralligi
   Dereköy (Kırklareli)   41,943  27,401   OSMANLI
   Kofçaz                 41,936  27,176   OSMANLI
```

Elhovo ile Malko Tırnova arası **79 km** ve arada Bulgar yakasında
**sıfır nokta**. Türk yakasında Lalapaşa + Kofçaz var. ⇒ Boşluk en yakın
peteğe emiliyor ve **Osmanlı Bulgaristan'ın içine ~10 km taşıyor.**

🟢 **Ve boşluğun cinsi ölçüldü — bu ayrım işi belirliyor:**
```
kutudaki her kaydın 1923'te sahibi VAR
⇒ eksik olan DÖNEM değil, KAYIT
```
Dönem eksiği olsaydı yama yazardım (benim dosya türüm). **Kayıt eksiği,
yeni nokta demek — ve yeni nokta KOORDİNAT demek.**

---

## 3. KALAN KESİMLER — sekizi de dar

```
40,84→40,88K   ~4 km    −5,4  OSMANLI EKSİK   İpsala ↔ Ferecik
40,95→40,97K   ~2 km    +5,5  OSMANLI FAZLA   İpsala ↔ Ferecik
41,01K         ~0 km    +5,0  OSMANLI FAZLA   İpsala ↔ Ferecik
41,32→41,35K   ~5 km    −6,9  OSMANLI EKSİK   Uzunköprü ↔ Dimetoka
41,45→41,53K   ~9 km    −5,8  OSMANLI EKSİK   Havsa ↔ Orestiada
41,66→41,68K   ~3 km    +6,5  OSMANLI FAZLA   Edirne ↔ Orestiada
41,74→41,79K   ~6 km    −6,2  OSMANLI EKSİK   Edirne ↔ Mustafapaşa
41,83→41,90K   ~9 km    +7,6  OSMANLI FAZLA   Lalapaşa ↔ Mustafapaşa
```
Sekizinin toplamı ~38 km ve hiçbiri 8 km'yi aşmıyor. **Yatırımın
karşılığı burada düşük**; asıl kazanç §2'deki tek kesimde.

---

## 4. KARAAĞAÇ — eklenemiyor, ve bu YAPISAL

```
Karaağaç (Edirne)   41,660 / 26,535   en yakın: Edirne  2,6 km
🔴 3 KM MÜKERRER KURALI İHLALİ — EKLENEMEZ
```

⚠️ Buranın önemi ayrı: Karaağaç, **Lozan'da Türkiye'ye bırakılan** ve bu
sınırın anlatısında en çok adı geçen yerleşim. Ama Edirne'ye 2,6 km ve
`§11`in *"yakın mükerrer yerleşim"* kuralı onu yasaklıyor.

⇒ **Edirne kesiminin hassasiyeti Türk yakasından ARTIRILAMAZ.** O
kesimde (+6,5 km) tek çare Yunan yakasına nokta koymak.

📌 Ve bu, kuralın bir kusuru değil: 2,6 km'lik iki nokta zaten aynı
peteği paylaşır, sınır hassasiyetine **hiçbir şey katmaz.**

---

## 5. KAYNAK DURUMU — ve niçin nokta YAZMADIM

`§4` yöntemiyle sınandı (HTTP kodu):
```
🔴 ÖLÜ (302)   karaagac · uzunkopru · lalapasa · demirkoy · kofcaz ·
               ipsala--edirne
```
⇒ **TDV bu tanecikte susuyor** — `§4`ün *"TANECİKLİK boşluğu"* sınıfı,
yani standart akademik kaynak meşru. Ama elimde **o kaynak yok**:
adayların koordinatlarına güvenim **ORTA**, hedef ise **5 km**.

Şartname `①` şunu diyor, harfiyen:
> *"GERÇEK YERLEŞİM OLACAK. Uydurma köy YOK. Bulamıyorsan `bulunamadı`
> yaz ve o kesimi BOŞ bırak — **yanlış nokta, eksik noktadan kötüdür.**"*

⇒ **Nokta YAZMADIM.** ORTA güvenli bir koordinatla 5 km hedefi tutturmak
mantıksız: hatanın kendisi hedef kadar büyük.

**Ölçülmüş aday durumu** (3 km sınavını geçenler, güven ORTA):
```
Kastanies           41,648 / 26,545   en yakın Edirne     3,4 km  ✓ geçer
Pythio (Kuruçeşme)  41,363 / 26,548   en yakın Dimetoka   4,6 km  ✓ geçer
Kipoi               40,870 / 26,355   en yakın İpsala     5,4 km  ✓ geçer
```
⚠️ Üçü de §3'teki **dar** kesimlere denk geliyor. §2'nin 51 km'lik asıl
kesimi için adayım **Bulgar yakasında** olmalı (Elhovo–Malko Tırnova
arası) ve orası için **doğrulanmış tek bir koordinatım yok** —
`bulunamadı`.

---

## 6. NE İSTİYORUM

```
① 51 km'lik Kofçaz–Malko Tırnova kesimi için Bulgar yakasına 2 nokta
   gerek. Koordinat kaynağı YETKİSİ istiyorum: hangi kaynağa
   dayanabilirim? (repoda yerleşim koordinatı yok — `veri-kaynak/`
   yalnız kara/göl/nehir/ülke poligonu taşıyor)
② §3'ün sekiz dar kesimi için: yatırım değer mi, yoksa §2'ye mi
   yoğunlaşayım? ÖNERİM: yalnız §2 — kazancın yarısı orada, sekizinin
   toplamı ise 8 km'yi hiç aşmıyor.
③ Yöntem GENELLEŞTİRİLEBİLİR: aynı ölçüm Suriye · Irak · Kafkasya
   sınırlarına da koşulabilir (~10 dk). İster misin?
   ⚠️ Ama orada "bugünkü sınır = 1923 sınırı" varsayımı GEÇMEZ; dönemin
   sınırı ayrıca gerekir.
```

---

## 7. ÖLÇTÜĞÜM ≠ ÇIKARDIĞIM

`§11`in *"ölçüm doğru, çıkarım yanlış"* dersine uyarak ayırıyorum:

```
ÖLÇTÜM      207 örnekte sapma: ortanca 3,3 · en kötü 10,4 · >15 km yok
            51 km'lik kesimde en kötü +10,4, Bulgar yakası 79 km boş
            Karaağaç Edirne'ye 2,6 km
            altı TDV slug'ı 302

ÇIKARDIĞIM  görevin "~14 çift yaz" tarifi FAZLA GENİŞ; iş tek kesimde
            → bu bir ÇIKARIM. Dayanağı §2'deki dağılım, ve dağılım
              başka bir gün başka nokta inince DEĞİŞİR.

ÖLÇMEDİM    · adayların koordinatlarını doğrulamadım (güven ORTA)
            · Trakya dışındaki sınırlara hiç bakmadım
            · "bugünkü sınır = 1923 sınırı" varsayımını sınamadım
            · §3'teki sekiz kesimin görsel etkisini ölçmedim
```

---

## 8. EK ÖLÇÜM — tıkanma KISMÎ DEĞİL, TAM

Koordinatörü beklerken **izin gerektirmeyen** bir soru sordum: sekiz dar
kesimin bir kısmı **dönem yamasıyla** kapanabilir mi? Kapanabilseydi
koordinat beklemeden yazardım — yama benim dosya türüm.

Her dar kesimin en kötü noktasının **30 km** çevresindeki bütün kayıtlar
tarandı (tarihten bağımsız), 1923'te sahipsiz olan arandı:

```
Ipsala-Ferecik guney   -5,4   4 kayit · SAHIPSIZ 0
Ipsala-Ferecik kuzey   +5,5   5 kayit · SAHIPSIZ 0
Ipsala-Sofulu          +5,0   5 kayit · SAHIPSIZ 0
Uzunkopru-Dimetoka     -6,9   5 kayit · SAHIPSIZ 0
Havsa-Orestiada        -5,8   5 kayit · SAHIPSIZ 0
Edirne-Orestiada       +6,5   5 kayit · SAHIPSIZ 0
Edirne-Mustafapasa     -6,2   3 kayit · SAHIPSIZ 0
Lalapasa-Mustafapasa   +7,6   2 kayit · SAHIPSIZ 0
```

⇒ **SIFIR.** Sekizin hiçbiri dönem yamasıyla kapanmaz — §2'nin 51 km'lik
ana kesimi gibi, hepsi **kayıt eksiği.**

🔴 **Yani tıkanma tam:** Trakya kolunda koordinat kaynağı olmadan
yapılabilecek **hiçbir iş yok.** §6①'deki soru, işin yarısını değil
**tamamını** bekletiyor.

📌 Yan bulgu: kesimlerin 30 km çevresinde yalnız **2-5 kayıt** var.
Sınır kuşağının seyrekliği §2'ye özgü değil, **hat boyunca genel.**

---

## 9. 3 KM KURALI SINIR İŞİNDE TERS ÇALIŞIYOR — iki bağımsız vaka

`UYGULAMA-1` Güney kolunda aynı duvara çarptı, benden habersiz:

```
TRAKYA (bu oturum)  Karaağaç ↔ Edirne  2,6 km          → EKLENEMEDİ
GÜNEY (UYGULAMA-1)  Tel Abyad / Ras al-Ayn "ikiz şehir" → REDDEDİLDİ
                    ve o kesim (Ceylanpınar-Rakka, 275 km) sapmanın
                    YARISINDAN FAZLASINI taşıyan tek kesim
```

Kural **mükerrer** yakalamak için yazılmış (`§11`: Varat/Varad · Afyon /
Karahisâr-ı Sâhib) ama **ayrı gerçek yerleşimleri** blokluyor — üstelik
sınır işinin en çok ihtiyaç duyduğu yerde. **Yakın çift sınır işinde
kusur değil ALETTİR:** iki nokta ne kadar yakınsa bisektör sınıra o kadar
oturur.

### Emsal aradım — YOK

```
2610 nokta tarandı · 3 km'den yakın çift: 2 · farklı sahipli: 0
```
⇒ Kural bugüne kadar **sıkı** uygulanmış; ikiz yapılandırması bu atlasta
**hiç kullanılmamış.** Önerim "zaten yapılanı kayda geçirmek" değil,
**yeni bir istisna** — öyle bilinerek karar verilmeli.

### 🔴 İlk önerim ÇÜRÜDÜ — kendi ölçümümle

Şunu önerecektim: *"farklı sahipli çift mükerrer OLAMAZ, otomatik muaf
tut."* Yazmadan önce `§11`in kendi vakalarına baktım:

> *"Afyon ve Karahisâr-ı Sâhib 100 m arayla **çelişen** zaman
> çizgileriyle duruyordu"*

⇒ **Mükerrer kaydın belirtisi de farklı sahipliktir.** *"Farklı sahip"*
iyi ikizi kötü mükerrerden **ayırmıyor.** Fark mekanik değil: ikisi
**aynı yer mi?** Bu bir **kaynak** sorusudur, bir `if` sorusu değil.

### Düzeltilmiş öneri — beyanlı istisna

```
yeni alan   ikiz: "<eş kaydın adı>"  + kaynak: ZORUNLU
denetim     beyansız 3 km altı çift  → ESKİSİ GİBİ ÖTER
            beyanlı çift → geçer, ama İKİ ŞARTLA
              (a) KARŞILIKLI olacak (tek taraflı beyan = yazım hatası)
              (b) kaynak: dolu olacak
```
Mükerrer tespiti **hiç zayıflamaz**: takma-ad çiftleri beyan edilemez,
çünkü beyan eden *"bunlar AYRI yerleşimdir"* diye kaynak göstermek
zorunda.

📌 Ve bu, `§11`in *"bu bilgiyi bir `if` ile sorabiliyor muyum?"*
dersinin uygulaması: bugün *"ikiz şehir"* gerekçesi **serbest metin**
olarak iki ayrı bulgu dosyasında duruyor — makine göremiyor, ve **iki
oturum aynı duvara iki kez çarptı.** Alan olsaydı ikincisi çarpmazdı.

⚠️ **Bu karar bu kolu AÇMIYOR.** Karaağaç eklense bile Trakya'da kalan
iş yine koordinat kaynağı istiyor (§6① hâlâ açık, §8: sekizin sekizi de
kayıt eksiği). **İki ayrı karar.**

---

## 10. ANTLAŞMA METNİ ADAY VERİYOR — ve sapmanın İŞARETİ hangi yakaya

### 10.1 🟢 Lozan md. 2(2) sınırı İKİ KÖYÜ ADIYLA tarif ediyor

Birebir metin (BYU WWI Document Archive):

> *"...to be determined on the spot in the immediate neighbourhood of the
> village of **Tchorek-Keuy** ... thence in a south-easterly direction up
> to a point on the Maritza, 1 kilom. below **Bosna-Keuy**: a roughly
> straight line **leaving in Turkish territory** the village of
> Bosna-Keuy."*

Ve `UYGULAMA-1` Güney kolunda **aynısını** buldu: 1921 Ankara
İtilâfnâmesi Tel Abyad ve Ras al-Ayn istasyonlarını adıyla sayıyor.

🔴 **İKİ BAĞIMSIZ KOLDAN DOĞRULANMIŞ DESEN:**
> **Sınır antlaşmaları sınırı YERLEŞİM ADLANDIRARAK tarif eder.**
> Bir kesime aday ararken **önce antlaşma metnine bak** — aday uydurmaya
> gerek yok, antlaşma zaten sayıyor.

📌 Ve bu, kaynak sorununu da çözüyor: aday **antlaşmanın kendisinden**
geliyor, yani `§4`ün en üst basamağı. *"Uydurma yerleşim"* riski sıfır.

### 10.2 Bosnaköy üç sınavı da geçti

```
3 km kuralı    Edirne'ye 5,81 km          🟢 GEÇER  (Karaağaç 2,6'ydı)
koordinat      41,62528 / 26,56556
çapraz teyit   Lozan "Meriç'in sağ yakası, Edirne yakını" diyor
               ölçtüm: Edirne'nin GÜNEYİNDE, 5,81 km   🟢 TUTUYOR
```
⚠️ Koordinatın kendisi ikincil (Vikipedi) — **tek başına delil
saymıyorum**; Lozan'ın tarifi onu yön · mesafe · yaka olarak çapraz
doğruluyor. Yazılırsa `kaynak:` açıkça bunu söylemeli.

### 10.3 🔴 VE EKLENSE FAYDA ETMİYOR — kendi beklentimi çürüttüm

```
BUGÜN          ortanca 3,28 · en kötü 10,43 · <=5km %69 · Edirne kesimi 6,46
Bosnaköy EKLİ  ortanca 3,41 · en kötü 10,43 · <=5km %71 · Edirne kesimi 6,46
```
Edirne kesimi **hiç değişmedi**, ortanca hafif **kötüleşti.**

**Sebep:** o kesimde sapma **artı** (+6,5) — yani Osmanlı **fazla**
boyanıyor. Türk yakasına nokta eklemek Türk çapasını sınıra yaklaştırır,
bisektörü **daha da** Yunanistan'a iter.

### 🟢 10.4 KURAL — ölçüldü, sonra DÜZELTİLDİ

🔴 **Bu kural ilk hâliyle EKSİK yayınlandı ve az kalsın bir oturuma
zarar verdirdi. Önüne bir şart geldi — ayrıntısı `§11`de.**

```
⓪ ÖNCE SOR: bu kesimde BUGÜNKÜ sınır = 1923 sınırı mı?
   HAYIR → nokta EKLENMEZ, "ölçülemez" diye AYRI KOVAYA kaydedilir
   EVET  → ancak o zaman işaret kuralı işler:

   SAPMA > 0  (OSMANLI FAZLA)  →  YABANCI yakaya nokta gerek
   SAPMA < 0  (OSMANLI EKSİK)  →  OSMANLI yakasına nokta gerek
   yanlış yakaya eklenen nokta o kesimi DÜZELTMEZ, KÖTÜLEŞTİRİR
```

⚠️ **Ve sezgi tersine çalışıyor:** sınır değişikliği ~30 km oynatır,
nokta seyrekliği ~10 km ⇒ *"en kötü kesimden başla"* seni **doğrudan
artefaktlara** götürür.

⇒ **İş listesi kesime göre değil, sapmanın İŞARETİNE göre bölünmeli.**

```
ARTI  (yabancı nokta gerek)  Kofçaz-Malko Tırnova +10,4 · Lalapaşa +7,6 ·
                             Edirne +6,5 · İpsala +5,5 / +5,0
EKSİ  (Osmanlı nokta gerek)  Uzunköprü -6,9 · Edirne-Mustafapaşa -6,2 ·
                             Havsa -5,8 · İpsala-Ferecik -5,4
```
Sapmanın **büyük kısmı artı** ⇒ gereken şey **Yunan ve Bulgar yerleşimi**,
Türk yerleşimi değil. Bu araştırmayı zorlaştırıyor: TDV bu tanecikte
zaten susuyor, üstelik artık Yunan/Bulgar köyü aranıyor.

### 10.5 🔴 Bulgaristan tarafı için antlaşma HİÇBİR aday vermiyor

Lozan md. 2(1) birebir:
> *"From the mouth of the River Rezvaya, to the River Maritza ... **the
> southern frontier of Bulgaria as at present demarcated**"*

⇒ Hattı **atıfla devralıyor**, köy adlandırmıyor. Yani `10.1`in yöntemi
**en kötü kesimimde (Kofçaz-Malko Tırnova +10,4) işlemiyor** — o hattı
tarif eden belge **1913 İstanbul Antlaşması**dır ve ona bakılmadı.

📌 Yöntem güçlü ama **evrensel değil**: antlaşma bir hattı *tarif*
ediyorsa köy verir, *atıfla devralıyorsa* vermez. **Hangisi olduğunu
metni okumadan bilemezsin.**

---

## 11. 🔴 YAYINLADIĞIM KURAL EKSİKTİ — ve zararı ÖLÇÜLDÜ

`§10.4`ü `UYGULAMA-1`e de gönderdim. Onlar kuralı alıp kendi **en kötü
ikinci kesimlerine** uyguladı: Payas-Antakya, **−29,4 km**, *"OSMANLI
EKSİK"* ⇒ kurala göre **Türk noktası** gerekiyordu, araştırmaya
başladılar.

Ölçtüm — **o sapmanın tamamı artefakt:**

```
Erzin · Dörtyol · Payas       1923'te OSMANLI              (DOĞRU)
İskenderun · Antakya          1923'te fransa-cumhuriyeti   (DOĞRU)
```

Veri Hatay'ı 1923'te **Fransız mandası** gösteriyor — doğrusu bu, Hatay
**1939'da** katıldı. Ve veri Dörtyol/Payas/Erzin'i Türk tutarak ayrımı
bile doğru yapmış; **özenle yazılmış.**

Alet **bugünkü** sınıra ölçüyor; bugünkü sınır Hatay'ı Türkiye'de
gösteriyor. Aradaki ~30 km *"OSMANLI EKSİK"* diye rapor ediliyor.

⇒ **Nokta eklenseydi sapma kapanacak, doğru veri bozulacaktı** — ve bir
daha fark edilmeyecekti, çünkü denetim artık temiz olurdu.

📌 `§11`in *"pencere dışı / kara dışı"* vakasının **birebir aynısı**:
alet iki ayrı şeyi tek satırda söylüyor ve **çareleri ters.**

### Alet düzeltildi — uyarı yerini değiştirdi

Uyarı **zaten vardı**, ama çıktının **sonundaydı**; okunan yer sonuç
tablosuydu. Artık **başta**, bilinen ayrışma bölgeleri (Hatay · Musul ·
Batum) adlarıyla listeli.
📌 `§11`: *"geç öten alarm, ötmeyen alarmdan yalnız biraz iyidir."*
**Alarmın doğru olması yetmedi; GÖRÜLDÜĞÜ YERDE olması gerekti.**

### Yan ders — doğru cevap, yanlış gerekçe

`UYGULAMA-1` Hassa'yı **mesafe** gerekçesiyle (91 km, o noktayı
düzeltmiyor) zaten eklememişti; yani **doğru kararı yanlış gerekçeyle**
vermişti — kendi tespiti.
⚠️ Fark önemli: mesafe gerekçesi **o kesime özeldi**, artefakt gerekçesi
**bütün Hatay-Musul-Batum kesimlerine** uyar. **Tesadüfen doğru olan bir
cevap, bir sonraki kesimde tutmaz.**

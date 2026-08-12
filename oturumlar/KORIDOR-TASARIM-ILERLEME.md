# KORİDOR TASARIM — ilerleme

**Tur 1 · 12 Ağustos 2026 · yapılan: yalnız İŞ 1 (+ İŞ 2'nin `git grep` ayağı)**

---

## ⓪ HÜKÜM — tek satır

> 🔴 **BU HÜKÜM DÖRDÜNCÜ TURDA DEĞİŞTİ. Aşağıdaki kutu ilk turun hükmüdür;
> geçerli hüküm §⑤d'dedir.** Kutu silinmedi çünkü *neyin* değiştiğini
> göstermek, yeni hükmün kendisi kadar değerli.

```
İLK TUR (çürüdü):  MENZİL HİPOTEZİ: KISMEN TUTTU
  birim ayağı  TUTTU   — TDV mesafeyi km değil SAAT ve MENZİL SAYISI ile veriyor
  güzergâh ayağı ÇÜRÜDÜ — TDV hazır bir kol/düğüm listesi VERMİYOR
```
```
DÖRDÜNCÜ TUR (geçerli):  MENZİL HİPOTEZİ: TAM TUTTU
  birim ayağı    TUTTU — ve beklenenden GÜÇLÜ: kaynak SAAT cinsinden
                         DÜĞÜM-DÜĞÜM kenar ağırlığı veriyor
  güzergâh ayağı TUTTU — ALTI KOLUN TAMAMI durak durak yayımlanmış
  düzeltme       hata TDV'de değil BENDEYDİ: yanlış yerde aradım.
                 TDV kurumu anlatır, GÜZERGÂHI hakemli literatür verir.
```

⚠️ Aşağıda **ölçtüğüm** ile **çıkardığım** ayrı satırlarda. Karıştırma.

---

## ① ÖLÇTÜĞÜM — slug taraması (HTTP kodu, `CLAUDE.md §4` yöntemi)

**24 + 9 + 12 = 45 istek atıldı.**

### 🔴 ÖLÜ (302) — müstakil madde YOK
```
menzil · menzilhane · derbend · derbent · sol-kol · orta-kol · sag-kol ·
hac-yolu · yol · kaldirim · han · surre-alayi · baciyan ·
menzil--osmanlilar · menzilhane--osmanlilar · derbend--osmanlilar ·
derbendci · menzil-teskilati · ulak--osmanlilar · menzil--posta ·
menzil--askeri · sol-kol--osmanlilar
```

### 🟢 CANLI (200) ve içeriği DOĞRULANDI
```
menzil--osmanli      ← ASIL MADDE. Yusuf Halaçoğlu, 2004
surre                ← örnek kolun kaynağı (aşağıda)
ulak · berid · posta · tatar
kervan · kervansaray · han--kervansaray · ribat · ipek-yolu
```

### 🟡 SLUG TUZAĞI — bu turda **iki** yeni vaka
```
① menzil        302 · doğrusu `menzil--osmanli`
   ⇒ "TDV'de menzil maddesi yok" demek YANLIŞ olurdu. Arama sayfası buldurdu:
      https://islamansiklopedisi.org.tr/arama/?q=menzil

② konak         200 · başlık "KONAK" · ama madde
                "Türk sivil mimarisinde görülen büyük konut"
   ⇒ `ordu` · `saray` · `cin` · `nis` ailesinin YENİ üyesi. Kod 200, başlık
      doğru, madde YANLIŞ. Yol konağı için TDV'de müstakil madde YOK.

③ derbend--dagistan  200 · ama bu Dağıstan'daki ŞEHİR, `derbend` KURUMU değil
   ⇒ arama "derbend" sorgusuna yalnız bunu döndürdü.
```

### ⚠️ SİTE İÇİ ARAMANIN SINIRI — ölçüldü
```
sorgu "sol kol"     → 0 sonuç
sorgu "kervan yolu" → 0 sonuç
sorgu "menzilhane"  → 0 sonuç
sorgu "orta kol"    → halidiyye · kadiriyye · tarikat  (TASAVVUF kolu!)
```
⇒ TDV araması **başlık düzeyinde** çalışıyor, tam metin taramıyor. Ve
`kol` kelimesi tasavvufta da geçtiği için sorgu **kirli**.
📌 Sonuç: *"TDV'de yok"* hükmü **arama sayfasıyla verilemez**; gövde okunmalı.

---

## ② ÖLÇTÜĞÜM — `menzil--osmanli` maddesinin gövdesi

| soru | cevap |
|---|---|
| Üç kol var mı | **VAR** — *"Anadolu ve Rumeli yönlerinde üç ana kola ayrılırdı"* |
| Kollar ADLANDIRILIYOR mu | 🔴 **HAYIR** — sağ/orta/sol adları madde metninde **geçmiyor** |
| Güzergâh şehirleri var mı | 🔴 **HAYIR** — yalnız İstanbul · Anadolu · Rumeli · Viyana |
| Mesafe birimi | 🟢 **SAAT** — *"üç saatten yirmi sekiz saate kadar olan mesafelerde tesis edilmiştir"* |
| km / fersah / konak dönüşümü | **YOK** |
| Menzilhane SAYISI | **VERİLMİYOR** |
| Tarihler | 1539 kuruluş · 1691 · 1697 · 1777 · 1789 düzenleme · **1839 kaldırıldı** |

🔴 **Hipotezin kalbi burada yarım tuttu:** birim gerçekten km değil — ama
verilen birim **konak değil SAAT**, ve **aralık** olarak (3–28), tek tek
kenar olarak değil.

---

## ③ ÖLÇTÜĞÜM — ÖRNEK KOL (bitiş ölçütü ②)

**Kaynak: `surre` maddesi (TDV, 200, gövdesi okundu). 1837 surre alayı.**

```
DÜĞÜM (adıyla geçen, SIRAYLA)                                        12
  Sirkeci → Üsküdar → İzmit → Akşehir → Konya → Adana → Antakya →
  Hama → Şam → Maan → Medine → Mekke

KONAK (menzil) sayısı   gidiş  54        dönüş  59
SÜRE                    gidiş  58 gün    dönüş  32 gün
                        (58 günün 31'i Şam'da ramazan için DURMA)
Şam→Mekke penceresi     12-20 Şevval hareket · Zilkade sonundan önce varış
```

**ÖLÇTÜĞÜM:** 12 adlı düğüm · 54/59 konak · 58/32 gün.
**ÇIKARDIĞIM (ayrı satır, ölçüm değil):**
- Aynı yolun gidiş ve dönüşü **farklı sayıda konak** ve **farklı sürede**
  kat ediliyor ⇒ kenar **yönlü** ve **mevsimli** olabilir. Emre'nin
  *"engellenene daha az pay"* sezgisinin veri karşılığı bu olabilir.
  ⚠️ Bunu **ölçmedim** — 54↔59 farkının sebebi kaynakta yazmıyor.
- 12 adlı düğüme 54 konak düşüyor ⇒ TDV **iri düğümleri** veriyor, **her
  konağı** değil. Oran ~1:4,5.

---

## ④ ÖLÇTÜĞÜM — kol atfı ŞEHİR maddelerinde var mı (asıl sınav)

**12 şehir maddesi tarandı** (aksehir · ilgin · bolvadin · eskisehir ·
gerede · bolu · merzifon · amasya · sivas · malatya · diyarbakir · birecik),
gövdede `sağ kol|sol kol|orta kol|kol üzerinde` arandı:

```
İSABET  1 / 12   (%8,3)
  bolu   "Osmanlı yol sisteminin SOL KOLU üzerinde bulunması da Bolu'nun
          iktisadî hayatında önemli dere[ce]..."
```
Ayrıca `menzil` kelimesi için 10 şehir tarandı → **2 isabet**
(`sofya` menzil güzergâhı · `edirne` Menzilahırı semti — ikincisi **yol
değil MAHALLE ADI**, yani sahte isabet).

**ÖLÇTÜĞÜM:** kol atfı şehir maddelerinde **vardır ama seyrektir** — 1/12.
**ÇIKARDIĞIM:** ağ TDV'den **toplu** çıkmaz; şehir şehir taranarak
**örülmek** zorunda ve verim düşük. 2362 nokta × ~%8 ≈ 190 nokta için kol
bilgisi umulabilir — **bu bir kestirim, ölçüm değil** (örneklem 12 ve
Osmanlı çekirdeğinden seçilmiş, `CLAUDE.md §11` "örneklem dar" tuzağına
açık).

---

## ⑤ HÜKÜM — kapı açık mı?

```
TUTTU   olan  · Tarihî kaynak mesafeyi SAAT ve MENZİL SAYISI ile veriyor.
              · Bu birimler yükseklik verisinden BAĞIMSIZ ve zaten SÜRTÜNMEYİ
                içeriyor (dağ yolu az saat/km kat eder — birim bunu emiyor).
              ⇒ Ağırlık için yükseklik verisi ŞART DEĞİL.

ÇÜRÜDÜ  olan  · TDV hazır bir "kol → düğüm listesi" VERMİYOR.
              · Üç kol adlandırılmıyor · menzilhane listesi yok ·
                `sol-kol`/`orta-kol`/`sag-kol` maddeleri YOK.
              ⇒ Ağ TDV'den ÖRÜLÜR, ALINMAZ. Maliyeti düşük değil.
```

🔴 **Koordinatöre karar sorusu:** hipotez *"yükseklik verisini beklemeden
başlayabilir miyiz"* diye soruyordu. Cevabım: **evet, ama kaynak TDV
tek başına yetmez.** Osmanlı yol sisteminin kol kol güzergâhı
**Yusuf Halaçoğlu'nun `menzil--osmanli` maddesinin bibliyografyasında**
(18 kalem) duruyor olabilir — ama o kitaplar çevrimiçi değil.
⚠️ **Bunu ÖLÇMEDİM.** Bibliyografyanın 18 kalemini tek tek açmadım.

---

## ⑤b OSMANLI DIŞI COĞRAFYA — Emre *"devam"* dedi, İŞ 1'in bu ayağı ÖLÇÜLDÜ

Brifing bunu ayrıca istiyordu (*"Orada ne yapılacağını da ÖLÇ, uydurma"*).
İlk turda tur yetmemişti; kapatıldı.

### 🟢 BULGU 1 — ORBIS (Stanford): sayıları OLAN bir emsal
```
kaynak     Walter Scheidel & Elijah Meeks · Stanford Üniversitesi
akademik   Bulletin of ASIS&T 41(2), 2015, Wiley (hakemli) · SSRN · Stanford History
ölçek      678 DÜĞÜM · 1104 KENAR
ağırlık    🔴 km DEĞİL — TAŞIMA MALİYETİ: zaman (gün) VE para
değişken   MEVSİM · TAŞIMA TÜRÜ (kara / nehir / deniz)
çağ        ~MS 200 Roma dünyası (+ birkaç geç antik yol)
```
🔴 **Bu, menzil hipotezinin BAĞIMSIZ DOĞRULAMASIDIR.** Bir başka ekip, bir
başka çağ için, aynı soruyu sormuş ve **aynı cevabı** vermiş: ağırlık
kilometre değil **maliyet/süre**, ve **mevsimli**.
📌 Ve `surre` maddesindeki gidiş 58 gün / dönüş 32 gün asimetrisi ORBIS'in
mevsim değişkeniyle **aynı sınıfta** — iki bağımsız kaynak, tek olgu.

### 🟢 BULGU 2 — Viabundus: BOĞUM DÜĞÜMÜ tipolojisi ZATEN YAYIMLANMIŞ
```
kaynak     Universität Göttingen (Landesgeschichte) + ortakları
akademik   Research Data Journal for the Humanities and Social Sciences
           7/1 (2022), Brill · Zenodo DOI · sürüm 1.3, 17 Mart 2024
kapsam     1350-1650 · Hollanda · Danimarka · Almanya'nın 8 eyaleti ·
           Polonya'nın 3 bölgesi (Pomerania · Royal Prussia · Greater Poland)
yapı       DÜĞÜM veritabanı + KENAR veritabanı (ayrı ayrı)
düğüm tipi yerleşim · şehir · GÜMRÜK · staple pazarı · panayır yeri ·
           KÖPRÜ · FERİBOT · liman · GEMİ KİLİDİ
kenar tipi kara · su · feribot          (üç tür)
lisans     CC-BY 4.0 · CSV (WKT) · GeoJSON · GML — İNDİRİLEBİLİR
```
🔴 **İŞ 2'nin cevabı büyük ölçüde HAZIR.** Emre'nin *"boğum düğümü"* dediği
şey — geçit · köprü · kavşak · menzil · derbend — Viabundus'ta
**gümrük/köprü/feribot/kilit** olarak zaten tiplenmiş ve hakemli bir
dergide yayımlanmış. **İcat etmemize gerek yok, uyarlamamız yeterli.**
⚠️ Bu bir **eğilim**, karar değil: tipolojinin Osmanlı coğrafyasına
oturup oturmadığı **ölçülmedi** (derbend ≈ toll? menzilhane ≈ ne?).

### 🟢 İKİNCİ DENEME — Emre *"try again"* dedi, ÖLÇÜLDÜ

İlk denemede Brill 403 verdi, PDF `pdftoppm` yokluğundan açılmadı. PDF
zaten yerelde duruyordu; `pypdf` ile ayrıştırıldı (betik scratchpad'e
`Write` ile yazıldı, bash'ten kaçış geçirilmedi — `CLAUDE.md §11`).
**32 sayfa · 108.912 karakter · Viabundus 1.0 dokümantasyonu, 19 Nisan 2021.**

#### 🔴🔴 HİPOTEZİ DOĞRUDAN CEVAPLAYAN CÜMLE (s. 26)
> *"**Slope and elevation of the road**, a factor that is of significant
> influence on the speed of travel in mountainous regions, **has not been
> taken into account**, but it is planned to be included in a future
> version of Viabundus."*

⇒ **Hakemli bir dergide yayımlanmış, çalışan, indirilebilir bir koridor ağı
YÜKSEKLİK VERİSİ OLMADAN kurulmuş** — ve yükseklik *gelecek sürüme*
bırakılmış.
🔴 Bu, koordinatörün hipotezinin **bizim akıl yürütmemizle değil, EMSALLE**
doğrulanmasıdır: *"yükseklik verisi olmadan da başlanabilir"* bir tahmin
değil, **yapılmış bir iş.**
⚠️ Ama bedeli de aynı cümlede yazıyor: sonuç *"heavily simplified and
generalized"* — ve atladıkları etkenleri **açıkça sayıyorlar**: mevsim ·
hava · gün uzunluğu · yolcunun ve hayvanın hâli · **siyasî durum (savaşlar
ve sınırlar)**. *"Many of these factors are impossible or very difficult to
reconstruct."*

#### DÜĞÜM ŞEMASI — dokuz öznitelik (İŞ 2'nin cevabı, yayımlanmış)
```
settlement · town · toll · staple · fair · ferry · bridge · harbour · lock
```
> *"**A node without any attribute can be considered a simple junction.**"*

🔴 **Emre'nin *"ipliklerin ORTASINDA boğum noktalar"* dediği şey birebir
budur** — özniteliksiz düğüm = saf kavşak. Kavram icat değil, **standart.**

**Ve düğümler HİYERARŞİK:** `Parent ID` alanı var. `Settlement · Town ·
Staple · Fair` yalnız **ebeveyn** düğüme takılır ve çocuklara **miras
kalır**; `Toll` hem ebeveyne hem çocuğa takılabilir. Örnek: bir şehir
ebeveyn, üç limanı ve köprüsü **çocuk düğüm.**
📌 Bizim `k:` kademe + `m:` merkez ikilimizin **yayımlanmış karşılığı bu.**

#### KENAR ŞEMASI ve AĞIRLIK — ölçülmüş alanlar
| alan | tip | ne yapar |
|---|---|---|
| `Length` | Integer | **metre** — rota hesabında kullanılan TEK ağırlık |
| `Zoomlevel` | 1-4 | ana/tali **kalınlığı** — ama 🔴 rota hesabı bunu **YOK SAYAR**, yalnız görüntüleme |
| `Certainty` | 1-3 | rekonstrüksiyonun **güvenilirliği**; 3 = denetlenmemiş, kesik çizgi + gri |
| `Comments_ID` | Integer | serbest metin |

**Rota hesabı:** Dijkstra en kısa yol, *"inspired by the routing system used
by **ORBIS**"* — yani iki emsal **birbirine bağlı**, bağımsız değil.
⚠️ Bunu ilk raporumda *"iki bağımsız kaynak"* diye yazmıştım — **YANLIŞTI.**
Viabundus, ORBIS'i kaynak gösteriyor (dipnot 46 ve 47).

**Süre, mesafeden TÜRETİLİYOR — hız tablosu (s. 26, Ohler 1998 s. 141 + ORBIS):**
```
tür                                        hız km/sa    günlük tavan km
yaya / ticarî nakliye (araba, kağnı)            5             35
at sırtında (normal)                            6             50
ULAK (menzil atı değiştirerek)                 14            120   ← 
feribot                                         5              —
```
🔴 **"Messenger (fast, with horse relays) 14 km/sa · 120 km/gün"** — bu
tam olarak **menzil/ulak teşkilatının** kendisi, ve akademik bir hız
tablosunda **sayıyla** duruyor. TDV'nin *"3-28 saat"* aralığıyla aynı
olguyu ölçüyor.

**DÜĞÜMÜN KENDİSİ DE MALİYET TAŞIYOR** (İŞ 3 için kritik):
```
staple düğümü   zorunlu bekleme SÜRESİ yola EKLENİR (bilinmiyorsa 3 gün)
feribot kenarı  +1 saat (iki kıyıda yükleme/boşaltma)
```
⇒ Maliyet yalnız kenarda değil, **düğümde de** birikiyor. Emre'nin
*"engel varsa engellenene daha az pay"* sezgisinin uygulanmış hâli.

#### 🔴 VE VIABUNDUS'UN KUSURU BİZİM DÜN TEŞHİS ETTİĞİMİZİN AYNISI
```
arama "from year" → 0 geçiş      arama "to year" → 0 geçiş
```
Kenarlarda **yapılandırılmış zaman alanı YOK.** Dokümantasyonun kendi
cümlesi:
> *"Information about seasonality or temporal use of a road may
> occasionally be found in the **Comment field** of the road segments."*

⇒ Zaman bilgisi **serbest metne gömülü** — yani makine soramaz.
📌 Bu, `CLAUDE.md §11`'in **on birinci kusur sınıfının** (*"doğru
öğrenilmiş bir dersin makinenin göremeyeceği yere yazılması"*) bir başka
projede, bağımsız olarak gerçekleşmiş hâli. Bizim `kasitli_bosluk`
`neden:` alanımızla **aynı hata.**
🟢 ⇒ **Uyarlarken bu kusuru kopyalamayalım:** `④ ZAMAN AYAĞI` kenarlara
`f`/`t` olarak **alan** verilmeli, yoruma değil.

---

## ⑤c ÜÇÜNCÜ TUR — Emre yine *"devam"* dedi

Briefing İŞ 3/4/5'i perşembeye bırakıyor. Buradaki iş **İŞ 1'in içinde
kalan**, kendi elimle *"ölçmedim"* diye yazdığım boşluklar.

### 🔴 KENDİ METODOLOJİK KUSURUMU DÜZELTTİM — örneklem 12 → 46

İlk turda 12 şehir taradım ve **hepsi Anadolu'daydı.** `CLAUDE.md §11`:
*"temiz çıkan bir örneklem, örneklemin dışını temiz ilan etmez."* Rumeli'nin
üç kolu ve Anadolu'nun kalan durakları eklendi — **34 şehir daha.**

```
İSABET   2 / 34   ama biri SAHTE  ⇒  gerçek 1 / 34
TOPLAM   2 / 46 = %4,3            ⇒  ilk turdaki %8,3 YARIYA DÜŞTÜ
```

**Gerçek isabetler:**
```
sofya   "Balkanlar'da ana yol (SAĞ KOL) üzerinde yer alan Sofya…"     RUMELİ
bolu    "Osmanlı yol sisteminin SOL KOLU üzerinde bulunması…"         ANADOLU
```

**🔴 SAHTE isabet — `kol` kelimesinin ÜÇÜNCÜ anlamı:**
```
eregli  "…fetih faaliyetleri sırasında SAĞ VE SOL KOLLARA yönelik…"
        ⇒ ORDU KANADI. Yol kolu DEĞİL.
```
Artık üç ayrı `kol` var ve üçü de aynı sorguya düşüyor:
```
① yol kolu       sağ/orta/sol      ← aradığımız
② tasavvuf kolu  halidiyye · kadiriyye · tarikat   (ilk turda çıkmıştı)
③ ordu kanadı    "sağ ve sol kollara yönelik"      ← YENİ
```
📌 ⇒ *"kol"* sorgusu **tek başına kullanılamaz**; bağlam okunmadan sayılan
her isabet şişkindir.

### 🟢 VE YAPISAL BİR BULGU ÇIKTI — KOL ADI BÖLGESELDİR
`sofya` **sağ kol** diyor, `bolu` **sol kol** diyor. İkisi de doğru, çünkü
**Rumeli'nin kendi üç kolu, Anadolu'nun kendi üç kolu var.**
⇒ `sağ/orta/sol` **küresel bir etiket değil**, bir **kanada göre yön.**
🔴 Şemaya etkisi: kenar özniteliği olarak `kol:"sag"` yazmak **eksik** olur;
`kanat:"rumeli" + kol:"sag"` gerekir. (Tasarım değil **kısıt tespiti** —
İŞ 3'e not.)

### ⚠️ VE İLK RAPORUMDAKİ KESTİRİMİ DÜZELTİYORUM
```
yazdığım    2362 × %8,3 ≈ 190 nokta için kol bilgisi umulabilir
düzeltme    2362 × %4,3 ≈ 100 nokta
```
Örneklem iki katına çıkınca oran yarıya düştü ⇒ **oran daha da düşebilir.**
Bu hâlâ bir **kestirim**, ölçüm değil.

### KOVA ③ — hiç bakmadığım coğrafyalar (İŞ 1'in son açık ayağı)

**🟢 ÖLÇÜLDÜ (birincil sayfa okundu):**
```
Itiner-e   itinere.iec.cat · GeoJSON · lisans CC BY-NC 4.0
           🔴 TİCARÎ KULLANIM YASAK — Viabundus (BY-SA) ve
              ORBIS'ten FARKLI. Bizim için muhtemelen sorun değil
              ama şart: atıf + gayriticarî.
```
🔴 **VE BİR BELGE BAYATLAMASI YAKALADIM:**
```
ana sayfa (itinere.iec.cat)  "İberya yarımadası · proof-of-concept ·
                              tüm imparatorluğa genişletmek PLANLANIYOR"
2025 yayını (arama sonucu)   "14.769 yol parçası · 14 bağlı bileşen ·
                              Britanya · Asya-Kuzey Afrika dâhil"
```
⇒ Proje **ana sayfasını güncellememiş.** Hangisi doğru — **ÇÖZMEDİM.**
İkisini de olduğu gibi yazıyorum. 📌 `CLAUDE.md §1.5`'in *"bir kez
bayatlayan belge"* dersinin **başka bir projede** görülmüş hâli.

**🟡 BULUNDU AMA AÇMADIM — bunlar LEAD, kaynak DEĞİL:**
| küme | iddia edilen | durum |
|---|---|---|
| DARMC (Harvard) | 7.154 Roma yol parçası · shapefile · *"Roman **and medieval**"* | açmadım |
| Cassini / Fransa | 18. yy Fransa yol ağı · **Nature Scientific Data** hakemli veri makalesi | açmadım |
| trimodal küme | **2.599 düğüm · 4.503 YÖNLÜ parça** · kara+deniz+nehir · ORBIS+Pleiades | açmadım |
| SRHGIS · OWTRAD · Moğol-Yuan (673 yer / 64 güzergâh) · Historical Atlas of Eurasia · Digital Silk Roads | İpek Yolu | açmadım |

🔴 **Üçüncü satır bizim açık sorumuza doğrudan bakıyor:** *"4.503 **YÖNLÜ**
parça"* — yani gidiş ve dönüş **ayrı kenar.** Surre alayının 54↔59 konak
farkının modeldeki karşılığı bu olabilir. **Açmadım, ölçmedim.**

**🔴 HİÇBİR ŞEY ÇIKMADI:**
```
Hindistan · Afrika içleri · İran'a MÜSTAKİL bir ağ kümesi
```
⚠️ Bu *"yok"* demek **değil** — *"iki aramada çıkmadı"* demek.

---

## ⑤d DÖRDÜNCÜ TUR — 🔴 HÜKÜM DEĞİŞTİ, HİPOTEZ **TAM TUTTU**

Açık kalan en değerli İŞ 1 sorusu şuydu: *TDV kol listesini vermiyor —
peki **akademik literatür** veriyor mu?* Cevap: **EVET, tamamını.**

### KAYNAK — hakemli, birincil arşive dayalı
```
İzzet SAK – Cemal ÇETİN, "XVII. ve XVIII. YÜZYILLARDA OSMANLI
DEVLETİ'NDE MENZİLLER VE FONKSİYONLARI: AKŞEHİR MENZİLLERİ ÖRNEĞİ"
DergiPark · article-file/258113 · 43 sayfa · gövdesi OKUNDU (pypdf)
Arşiv dayanağı: Konya Şer'iye Sicili · Mühimme defterleri
⚠️ Dergi ADI çıkarılan başlıkta yoktu — künyenin o kısmını OKUMADIM.
```

### 🔴🔴 ALTI KOLUN TAMAMI, DURAK DURAK (bitiş ölçütü ②)

**ANADOLU**
```
SAĞ KOL   Üsküdar–Gebze–Eskişehir–Akşehir–Konya–Adana–Antakya
          → Halep → Şam → Mekke, Medine                        11 durak
ORTA KOL  Üsküdar–Gebze–İznik–Bolu–Tosya–Merzifon–Tokat–Sivas–
          Hasan Çelebi–Malatya–Harput–Diyarbakır–Nusaybin–
          Musul–Kerkük                                          15 durak
SOL KOL   Merzifon'a kadar ORTA KOLLA AYNI, sonra Lâdik–Niksar–
          Karahisar-ı Şarkî–Kelkit–Aşkale–Erzurum–Hasankale
          ⇒ oradan İKİYE AYRILIR: bir kol Kars, bir kol Tebriz   7 + çatal
```
**RUMELİ**
```
SAĞ KOL   İstanbul–Vize–Kırklareli–Prevadi–Karasu–Babadağı–
          İshakçı–Akkirman → Özi, Kırım                          10 durak
ORTA KOL  İstanbul–Silivri–Edirne–Filibe–Sofya–Niş–Yagodina
          → Belgrad                                               8 durak
SOL KOL   = Romalıların **VIA EGNATIA**'sı
          İstanbul–Tekirdağ–Malkara–Firecik–Dimetoka–Gümülcine–
          Pravişte–Lanzaka–Yenişehir–İzdin → İstefe               11 durak
```
```
TOPLAM  62 adlı durak · 6 kol · 2 kanat · 1 çatal (Kars / Tebriz)
```

🟢 **Ve `sol kol` üzerine müstakil bir bilimsel kitap var:**
*Sol Kol: Osmanlı Egemenliğinde Via Egnatia (1380-1699)*, ed. **Elizabeth
A. Zachariadou**, çev. Özden Arıkan – Ela Güntekin.
📌 Tek bir kol, tek bir kitap. ⇒ Bu ağın literatürü **derin.**

### 🔴🔴 AĞIRLIK SAAT CİNSİNDEN, VE DÜĞÜM-DÜĞÜM VERİLİYOR

Hipotezin kalbi buydu ve **beklenenden güçlü** çıktı. Makale, arşiv
belgesinden **tek tek kenar ağırlıkları** aktarıyor:
```
menzilhâneler arası GENEL       6 – 12 saat
seyrek yerleşimli bölgelerde    24 saate kadar
Akşehir → İshaklı (batı komşu)   5 saat
Akşehir → Ilgın   (doğu komşu)   9 saat
Akşehir → Beyşehir              12 saat
Ilgın   → Konya                 18 saat
Akşehir → İSTANBUL              85 saat   ← BİRİKMİŞ maliyet
```
🔴 Son satır kritik: **85 saat bir kenar değil, bir YOL TOPLAMI** — yani
kaynak zaten *"merkeze uzaklık"* denen şeyi **hesaplanmış** olarak veriyor.
Dijkstra'nın çıktısı, 18. yüzyılda arşivde **yazılı duruyor.**

🟢 **Ve `saat` birimi ARIZAYI ZATEN İÇİNDE TAŞIYOR:** aynı km, dağda daha
çok saat eder. ⇒ `⑤b`de Viabundus'un *"eğim ve yükseklik hesaba
katılmadı"* diye eksik bıraktığı şeyi, **Osmanlı kaynağı ölçmüş olarak
veriyor.** Viabundus km'den saat TÜRETİYOR; menzil kaydı saati **doğrudan
söylüyor**.
📌 ⇒ Bu, hipotezin *"yükseklik verisi olmadan da olur"*undan **daha
iyisidir**: yükseklik verisi olsa bile bu kayıt ondan üstündür, çünkü
gerçek yolun gerçek süresini verir — modellenmiş değil, **ölçülmüş.**

### 🔴 ÜÇ AYRI MENZİL SINIFI — ağ TEK KATMAN DEĞİL
```
haberleşme menzili   ulak/posta                 ana yol üzerinde
askerî menzil        ordu sevkiyatı             sayısı haberleşmenin
                                                 ~İKİ KATI
hac menzili          surre + hacı kafilesi      yalnız Anadolu SAĞ KOL
```
Ve **yönetimleri farklı**: askerî menzillerin yerini **merkezî idare**
belirliyor, hac menzillerininkine **karışmıyor.**
📌 ⇒ Kenarlar aynı, **düğüm kümeleri farklı ve iç içe.** Şemada bu bir
`katman:` ekseni demek — ama tasarım **İŞ 3'ün işi**, ben yalnız kısıtı
kaydediyorum.

### 🔴🔴 KAYNAKLAR ÇELİŞİYOR — KARARI BEN VERMİYORUM (`§7.1 ⑥`)

```
TDV `sofya` maddesi   "Balkanlar'da ana yol (SAĞ KOL) üzerinde yer alan Sofya"
Sak – Çetin           Sofya RUMELİ ORTA KOLU üzerinde
                      (İstanbul-Silivri-Edirne-Filibe-SOFYA-Niş-Yagodina-Belgrad)
                      ve Rumeli SAĞ KOLU Karadeniz kıyısı
                      (Vize-Kırklareli-Prevadi-Babadağı-Akkirman-Özi-Kırım)
```
⇒ **İki hakemli kaynak, aynı şehri farklı kola koyuyor.** Rumeli'de kol
adlandırması **standart değil.**
⚠️ `CLAUDE.md §4` TDV'yi birincil sayar ⇒ kural TDV'yi seçtirir. Ama bu
**benim vereceğim karar değil** (`§7.1 ⑥`: *kaynaklar çelişiyorsa hangisini
seçeceğine sen karar verme*). **Koordinatöre bildirildi.**
📌 Ve pratik sonucu şu: `kol:` alanı veriye yazılacaksa yanına **hangi
tasnife göre** olduğu da yazılmalı — yoksa iki oturum iki farklı
konvansiyonla yazar ve kimse farkı göremez.

### 🔴 VE BU TUR BENİM ÜÇÜNCÜ HATAMI DÜZELTTİ
```
ilk turda yazdığım   "TDV hazır bir kol/düğüm listesi VERMİYOR
                      ⇒ ağ ÖRÜLÜR, ALINMAZ"
ölçüm                 doğru — ama ÇIKARIM yanlıştı
gerçek                TDV kurumu anlatır (Halaçoğlu maddesi), GÜZERGÂHI
                      hakemli literatür verir. İkisi ÇELİŞMİYOR,
                      İŞ BÖLÜMÜ yapıyor. Ben yalnız TDV'ye baktım.
```
📌 `CLAUDE.md §11`'in *"ölçüm doğru, çıkarım yanlış"* sınıfının bu
oturumdaki **üçüncü** vakası — ve üçünde de hatayı ölçüm değil, **ölçümün
evreni** doğurdu. Aynı ders `§4`ün *"dar slug tutmazsa GENEL maddeyi dene"*
kuralının kaynak-kümesi tarafı: **dar kaynak tutmazsa geniş kaynağa bak.**

### HÜKÜM — kova ③ için
**ÖLÇTÜĞÜM:** Avrupa ve Akdeniz için olgun, indirilebilir, hakemli veri
kümeleri **var** (Viabundus · ORBIS · Itiner-e · DARMC · Cassini).
Asya için **dağınık ve doğrulanmamış** adaylar var. Hindistan, Afrika içleri
ve İran için **iki aramada hiçbir şey çıkmadı.**

**ÇIKARDIĞIM (ayrı satır):** koridor ağının kaynak bolluğu **coğrafyaya göre
şiddetle asimetrik** — ve asimetri **Osmanlı çekirdeğinin aleyhine değil,
LEHİNE değil, tam ortasında**: Rumeli'yi Viabundus'un güneyi ve ORBIS'in
kuzeyi sıkıştırıyor, Anadolu-Arabistan-İran için **hazır ağ yok**, oralarda
kaynak **TDV + Halaçoğlu**, yani `⑤` ve `④`teki *"örülür, alınmaz"* hükmü.
🔴 ⇒ **Bu, İŞ 5'in (kapsam itirazı) verisidir.** İŞ 5'i **yapmadım** —
ama kademe önerisi bu sayılara dayanmak zorunda, o yüzden buraya yazdım.

#### ⚠️ HÂLÂ ÖLÇEMEDİĞİM
```
Viabundus düğüm/kenar SAYISI   dokümantasyon v1.0'da VERİLMEMİŞ (arandı,
                               yok — "bakılmadı" değil, "yazmıyor")
sürüm 1.3 (2024) sayıları      CSV indirilmedi
lisans ÇELİŞKİSİ               dokümantasyon "CC BY-SA 4.0" diyor,
                               Zenodo kaydı "CC BY 4.0" diyor — ÇÖZMEDİM
```

### 🔴 HÜKÜM — "Osmanlı dışında ne yapacağız" sorusunun cevabı ÜÇ KOVA
```
① KUZEY AVRUPA 1350-1650   Viabundus  → HAZIR AĞ · CC-BY · indirilebilir
                                        (TDV'nin %0 dediği yerin BİR KISMI)
② AKDENİZ / ROMA           ORBIS      → HAZIR AĞ ama ÇAĞI YANLIŞ (MS 200)
                                        yollar büyük ölçüde sürer AMA BU
                                        BİR VARSAYIM — ÖLÇMEDİM
③ GERİ KALANI              Fransa · İngiltere · İberya · İtalya · İran ·
                           Hindistan · Çin · Afrika
                           🔴 BAKMADIM. Bilmiyorum. `bulunamadı` değil,
                              **aranmadı** — ikisi ayrı şeydir.
```
📌 Yani `CLAUDE.md §4`ün *"Batı Avrupa %0"* satırı **koridor işi için
fazla karamsar**: TDV konuşmuyor ama **başka akademik kaynak konuşuyor**,
ve üstelik **makine okunur biçimde.** Bu, kaynak kırmızı çizgisinin
(`AKADEMİK · GÜVENİLİR · BİLİMSEL`) tam içinde.

### 📌 İŞ 4 İÇİN BEDAVA TABAN (tasarım YAPMADIM, sayıyı bırakıyorum)
```
ORBIS oranı   1104 kenar / 678 düğüm = 1,63 kenar/düğüm
bizim ölçek   2362 nokta × 1,63 ≈ 3.850 kenar
```
⚠️ Bu bir **kestirim değil, EMSAL ORAN.** ORBIS'in düğümleri bizimkinden
iri (678 düğüm bütün Roma dünyası), yani oran doğrudan taşınamayabilir.
**İŞ 4'ün işi, benim değil** — yalnız tabanı bırakıyorum.

---

## ⑥ ÖLÇMEDİKLERİM — açıkça

```
· Osmanlı dışı coğrafyanın ÜÇÜNCÜ KOVASI (Fransa · İngiltere · İberya ·
  İtalya · Asya · Afrika) — ARANMADI. "bulunamadı" DEĞİL, "aranmadı".
· Viabundus düğüm/kenar sayısı ve ağırlık fonksiyonu — denendi, ERİŞİLEMEDİ.
· ORBIS'in yol güzergâhlarının Osmanlı çağına taşınıp taşınmadığı.
· Viabundus tipolojisinin Osmanlı karşılıkları (derbend ≈ toll?).
· `menzil--osmanli` bibliyografyasındaki 18 kaynağın hiçbiri açılmadı.
· Rumeli kolları (sağ kol İstanbul-Selanik / orta kol Belgrad /
  sol kol Kili-Akkirman) hiç sınanmadı — yalnız Anadolu şehirleri tarandı.
· 54↔59 konak farkının sebebi.
· Şehir maddesi taramasının gerçek isabet oranı (örneklem 12, dar).
```

---

## ⑦ İŞ 2'nin `git grep` AYAĞI — LİSTE (tasarım YOK, brifing öyle diyor)

**Var olan alanlar, ölçülmüş sayılarla** (`data/yerlesimler.js` — 36 girdi
dosyasının YALNIZ BİRİ; tam sayım yapılmadı):

| alan | sayı | işe yarar mı |
|---|---|---|
| `k:` kademe | 949 → k0:282 · k1:4 · k2:58 · k3:159 · k4:291 | 🟢 **DÜĞÜM AĞIRLIĞI** olabilir |
| `m:` bağlı merkez | 458 | 🟢 **ZATEN BİR KENAR** — yerleşim→merkez bağı |
| `tur:` | 794 → sehir 366 · kale 245 · liman 140 · bolge 43 | 🟡 kısmen — `liman` deniz düğümü, `kale` geçit olabilir |
| `isg:` işgal | 23 | 🔴 alakasız |
| `kd:` zamanlı kademe | **0 — henüz kullanılmıyor** | 🟡 tasarlanmış, boş |

**`data/savaslar.js` — 41 sefer güzergâhı:**
```
yol:  62 kayıt · biçimi  yol:[[lon,lat],[lon,lat],...]
```
🔴 **BRİFİNGİN VARSAYIMI ÇÜRÜDÜ:** bunlar **kenar DEĞİL, POLİÇİZGİ.**
Ham koordinat dizisi — hangi yerleşimden hangisine gittiği yazmıyor,
düğüm kimliği taşımıyor. Kenar listesine çevrilebilir ama bu bir
**dönüştürme işi**, hazır kenar değil.
📌 `tur:` savaslar.js'te de var (232 kayıt) — ayrı bir eksen (deniz/çekilme).

**En büyük bulgu:** `m:` alanı **zaten bir ağdır** — 458 yerleşim bir
merkeze bağlı. Ama `CLAUDE.md Değişmez 3` onu **bozuk** ilan ediyor
(359 çelişkili çift, ve teşhis: *"`m:` yanlış eksende — siyasî bir şeyi
coğrafî gruplama için kullanıyor"*).
⇒ **Koridor ağı, `m:`nin doğru ekseni olabilir.** Bu bir **eğilim**,
karar değil — İŞ 3'te ölçülmeli.

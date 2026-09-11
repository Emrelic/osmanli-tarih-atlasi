# TAŞMA ÖLÇÜMÜ — `_kv_dijkstra`nın cevabı niçin atılıyor, açılsa ne olur

```
AD      TAŞMA ÖLÇÜM
MODEL   Opus
DİZİN   C:\Users\emrem\OneDrive\Desktop\TARİH COĞRAFYA SİTESİ
🔴 KOŞU 9 CANLI — `data/` ve `arac/` DONUK. HİÇBİRİNE YAZMA.
   `arac/uret_petek.py` · `renkler.py` · `girdi.py` üçlüsüne dokunmak
   koşuyu ANINDA öldürür (`girdi.motor_izi_dogrula`) — bugün GERÇEKTEN
   oldu, bir YORUM yüzünden. Kopya üzerinde çalış, depo AĞACININ DIŞINA
   (`tempfile.gettempdir()`).
```

## ⓪ EMRE'NİN TARİFİ — 11 Eylül 2026, aynen

> *"Yerleşim merkezlerinden sanki **su yayılır gibi** bölgeler dışarı doğru
> her yöne aynı kuvvetle yayılacaktır. 8 yön değil **16 yöne**, yani 22,5
> derece farkla… neredeyse çembersel. Bu yayılım rampa, yükselti, dağ
> ortaya çıktığında **daha yoğun ortama giren ışık gibi** hızı azalacaktır:
> düz arazide 10 birim ilerleyen yayılım, dağda belki 5, belki 3, belki 1
> birim ilerleyecektir. Geniş bir nehire gelindiğinde ilerleme kesilecek
> veya belli bir zorlanma ile karşıya geçecek, gücünden epey birim
> kaybedecektir. **Geçit varsa** oradan belli bir kayıpla karşı yakaya
> geçebilecek — sanki bir delikten yukarı basan su gibi. Boğazdan ya da
> dar körfezden geçmek de bu zorlanmaya maruz kalacak. Rakip yerleşimin
> yayılımına gelinirse **iki yayılım birbirini dengeleyip durduracaktır.**
> Böylece şehirlerin sınırları düz çizgilerle değil, çok daha doğal,
> doğrusal olmayan bir vaziyette olacak — yani projenin en başından beri
> söylediğimiz **sınırların topografyaya yaslanması** çözülecektir."*

Ve bir ANİMASYON istiyor:
> *"Bir ayar düğmesi çevrilerek yerleşimlerin etrafına 10 · 30 · 50 · 70 ·
> 100 · 125 · 150 · 200 · 250 · 300 km şeklinde çevirdikçe kuvveti artan
> bir etki yayacak. Ama noktanın güneyinde 300 km akan alan, kuzeyindeki
> sıradağlara toslayınca ancak 30 km nüfuz edebilecek. Dağ arasından
> geçit bulursa o bölümden içeri sızacak."*

## ① KOORDİNATÖRÜN ÖLÇÜMÜ — buradan başla, TEKRARLAMA

Bu, sıfırdan bir tasarım DEĞİL. Ölçtüm (11 Eylül 01:5x):

```
`arac/uret_petek.py:2238`  `_kv_dijkstra(surt)` — ÇOK KAYNAKLI Dijkstra
   · bütün yerleşimler AYNI ANDA tohum          (`_kvtohum`)
   · ızgara 0,05° ≈ 5,5 km · 166.966 KARA hücresi
   · sürtünme HEDEF hücreden okunuyor (`egim_olc.py:136` kalibrasyonu)
   · çıktı: `_kvuzak[]` (maliyet) + `_kvsahip[]` (sahip)
   · satır 2275'te MODÜL DÜZEYİNDE, KOŞUDA TEK KEZ koşuyor
🔴 satır 2396   `if _kvkp.contains(LineString([_ptl[_i], _rp])): continue`
   ⇒ düz çizgi KARADA kalıyorsa ızgaranın cevabı YOK SAYILIYOR.
     Taşma yalnız DENİZİ KESEN çiftlerde söz sahibi.
🔴 satır 2439 (motorun KENDİ yorumu):
   "eğim doğru hesaplanıyor (ızgarada 166.966 hücre DEĞİŞİYOR) ama
    `:1790` süzgeci onu haritadan uzak tutuyor. O hâlde bir sonraki iş
    çarpanı ayarlamak değil, SÜZGECİ TARTIŞMAKTIR."
satır 2259   komşuluk TAM 8 YÖN — Emre 16 istiyor
satır  417   `EGIM_CARPANI = 0.005` · sürtünme = 1 + 0,005 × |eğim|
             ⇒ YALNIZ EĞİM. Nehir yok, geçit yok, boğaz yok, rakım yok.
satır 2094   `_kvkara` YALNIZ karayı geçiriyor ⇒ "belli bir güçle karşıya
             geçmek" bugün İFADE EDİLEMİYOR
```

⇒ **Hesabın parası zaten ödeniyor; cevap kullanılmıyor.**

## ② ÖLÇECEKLERİN — dördü, ve her birinde bir SAYI

```
① SÜZGEÇ KAPANINCA NE DEĞİŞİR — pilot bölgede (Anadolu kutusu öner:
   26,36,45,42 — paralel sınavının kullandığı kutu, 301 nokta)
   · kaç km² sahip değiştirdi · kaç yerleşim etkilendi
   · sınırlar GERÇEKTEN topografyaya yaslandı mı — 🔴 EKRAN GÖRÜNTÜSÜ
     ya da bir PNG üret; sayı "yaslandı" demez, GÖZ der
   ⚠️ 166.966 hücre bir ÜST SINIRDIR; kaç km²'ye ve kaç KAYDA dokunduğu
     ÖLÇÜLMEDİ. Onu sen ölçeceksin.
② 8 YÖN → 16 YÖN
   · sekizgen sapması ne kadar düzeliyor (düz, sürtünmesiz bir alanda
     tek tohumdan yayılıp DAİREDEN sapmayı ölç — bu temiz bir sınav)
   · koşu süresi ne kadar artıyor (komşu sayısı 2 kat)
③ NEHİR/GEÇİT/BOĞAZ SÜRTÜNMEYE NASIL GİRER — bir KALİBRASYON ÖNERİSİ
   · veri VAR: 293 nehir parçası (211 adlı akarsu) · 275 dağ sırası
   · gereken: maliyet ölçeği. "Nehir = N birim" derken N nereden gelecek?
   🔴 SAYIYI UYDURMA. Ya ölçülebilir bir çapa bul (örn. bilinen bir
     tarihî sınırın nehri ne kadar geçtiği), ya da `ölçülemedi` yaz ve
     NİÇİN ölçülemediğini söyle.
④ ANİMASYON MALİYETİ
   · `_kvuzak` + `_kvsahip` katmanını dışa yazmanın BOYUTU (MB)
   · kadranın 10 km ucunda 5,5 km'lik hücre KABA — kaç hücreye denk
     geliyor, kullanılabilir mi? Daha ince ızgara ne kadara mal olur?
   📌 Koordinatörün iddiası: animasyon NEREDEYSE BEDAVA, çünkü kadran
     `_kvuzak ≤ T` eşiğinden ibaret. BU BİR İDDİADIR — sına.
```

## ③ NASIL ÇALIŞACAKSIN
```
🔴 `arac/` ve `data/` DONUK. Motoru KOPYALA (depo dışına), kopyada oyna.
🔴 KOŞU AÇMA — koşu 9 makinede. Ağır bir şey koşturman gerekirse ÖNCE
   tahtaya yaz ve KOORDİNATÖRE SOR. Pilot kutu küçük tutulacak.
🟢 Kendi dosyaların: `oturumlar/TASMA-OLCUM-0911.md` (bu dosya) +
   `denetim/ARAC-TASMA-*-0911.py` + `denetim/BULGU-TASMA-0911.md`
   Commit'te DİZİN PATHSPEC'İ YASAK; her dosya ADIYLA, ve aynı pathspec
   `git add` ile `git commit -F` İKİSİNDE DE tekrarlanır.
🟢 `D022`: her ölçümden ÖNCE ÖNGÖRÜNÜ YAZ ve COMMIT'LE. Sonra yazılan
   beklenti ayarlanabilir, önce yazılan çürütülebilir.
🟢 `D107`: `bulunamadı` / `ölçülemedi` / `okumadım` ÜÇ AYRI DAMGA.
```

## ④ NE İSTEMİYORUM
```
🔴 MOTORU DEĞİŞTİRME. Bu bir ÖLÇÜM işi. Süzgeci kaldırmak koşu 10'un
   kararı ve `A`nın TANIMINI değiştirir — o karar Emre'nin.
🔴 "Süzgeci kaldıralım, iş biter" DEME. Bugün ölçülmemiş dört şey var
   ve dördü de haritayı bozabilir: mevcut denetimlerin (Değişmez 1/2/7,
   çakışma, enklav) hepsi DÜZ-ÇİZGİ Voronoi tabanında kalibre edildi.
🔴 TASARIMI GENİŞLETME. Deniz yolları, ticaret ağları, nüfus ağırlığı —
   hepsi AYRI İŞ.
```

## ⑤ TESLİM
Tahtaya, `--kim "TAŞMA ÖLÇÜM" --kime "1.MURAT"`. Dört kalemin dördüne
ayrı cevap, her birinde bir SAYI. Öngörülerinin tutup tutmadığını da yaz —
çürüyen bir öngörü, tutan bir öngörüden değerlidir.
🔴 Kritik mesajı yazdıktan sonra `oturumlar/tahta.json`dan GERİ OKU:
   "yazıldı" cevabı yetmez, tahta mesaj kaybedebiliyor (`§7.1⑤b`).

---

# ARA RAPOR — 11 Eylül 2026 · TAŞMA ÖLÇÜM · **İŞ DURDURULDU**

> Koordinatör durdurdu (bellek: makine 11,9 GB, boş RAM 588 MB, sert sayfa hatası
> 1.473/sn). **Ağır hiçbir şey koşturmadım** — ne pilot kutu, ne ızgara, ne geometri,
> ne sentetik sınav. Bu bölümdeki her sayı ya kaynak kodundan ya da **ZATEN VAR OLAN
> koşu loglarından** okundu; makineye bir saniye CPU bile bindirmedim.

## 🔴 ÖNCE DAMGA — `D022` UYGULANMADI, ve bunu saklamıyorum

Öngörü dosyasını (`denetim/ONGORU-TASMA-0911.json`) **yazamadan** durduruldum.
⇒ Aşağıdaki sayıların **hiçbiri öngörülü değildir.** Damgaları:
```
🟢 ÖLÇÜLDÜ        koşu logundan / kaynak kodundan okundu — ama ÖNGÖRÜSÜZ
⚪ ÖLÇÜLEMEDİ     ölçmek için koşu gerekiyor, koşu yasak
⚪ OKUMADIM       bakmadım (D107: "ölçülemedi" ile aynı şey DEĞİL)
```
Tek istisna: `3,36 milyon` sayısını ölçmeden **ÖNCE** türettim (166.966 / %4,97) ve
sonra logdan okudum — **3.336.475.** Tuttu. Ama commit'lenmediği için `D022`ye göre
bu bir öngörü **sayılmaz**; bir hesaptır. Kayda öyle geçiyor.

## ① 🔴🔴 EN DEĞERLİ BULGU — VE MAKİNEYE HİÇ CPU BİNDİRMEDİ

**Süzgeci kapatmak, Emre'nin tarif ettiği şeyi ÜRETMEZ.** Sebep süzgeçte değil,
süzgecin **bir kademe yukarısında** — ve dört satır kodda duruyor:

```
:2388   if _p.equals(_kvana[_i]): continue      ← TOHUMUN ÜSTÜNDEKİ PARÇA KORUNUR
:2391   if _a < KV_MIN_KM2: continue            ← 200 km² altı ELENİR
:2396   if _kvkp.contains(LineString(...)): continue   ← TARTIŞILAN SÜZGEÇ
:2427   _kval/_kvver → PETEK_D[i] = difference/union   ← PARÇA BÜTÜN OLARAK TAŞINIR
```

⇒ Bu aşama **sınır ÇİZGİSİ çizmiyor; hazır PARÇALARI sahipten sahibe taşıyor.**
Sınırın şekli bir kademe yukarıda (düz-çizgi Voronoi + kıyı/nehir/sırt yaslaması)
doğuyor ve bu aşama ona **dokunmuyor.**

```
SONUÇ   Süzgeç TAMAMEN kaldırılsa bile:
        · hiçbir sınır çizgisi YER DEĞİŞTİRMEZ
        · tek parçalı (Polygon) bir petek HİÇ etkilenemez — çünkü tek parçası
          `_kvana`dır ve o korunuyor
        · yalnız ÇOK PARÇALI (MultiPolygon) peteklerin ana olmayan, ≥200 km²
          parçaları el değiştirebilir
⇒ "Sınırların topografyaya yaslanması" bu süzgecin ARDINDA DEĞİL.
  Onun için `_kvsahip` ızgarasının POLİGONLAŞTIRILMASI gerekir — yani peteğin
  GEOMETRİSİNİN ızgaradan ÜRETİLMESİ. Bu başka (ve çok daha büyük) bir iştir ve
  `A`nın tanımını değiştirir ⇒ şartnamenin kendi kuralına göre **Emre'nin kararı.**
```

📌 Ve bu, motorun kendi yorumunu **çürütmüyor, TAMAMLIYOR.** `:2439` şöyle diyor:
*"eğim doğru hesaplanıyor ama süzgeç onu haritadan uzak tutuyor… bir sonraki iş
SÜZGECİ TARTIŞMAKTIR."* Doğru — ama süzgeç **tek kapı değil, üçüncü kapı.** Önündeki
iki kapı (`_kvana` koruması ve parça-bütünlüğü) süzgeç açılsa da kapalı kalır.

### ①b KANALIN BUGÜNKÜ DEBİSİ — koşu loglarından, 🟢 ÖLÇÜLDÜ

```
ızgara                     7200 × 2900 = 20.880.000 hücre
kara hücresi                6.095.287
tohumdan ERİŞİLEN            3.336.475      (≈ karanın %54,7'si)
eğim yüzünden sahibi değişen   166.966 HÜCRE   = erişilenin %5,00
                                             (motorun bastığı %4,97 ile uyuşuyor)
HARİTAYA İNEN — ızgaranın hiç söz sahibi olduğu her şey:
   el değiştiren PARÇA          64 – 129 parça · 150.000 – 400.000 km²
   bunun EĞİMDEN olanı          12 – 18 parça  ·  10.378 – 108.197 km²
```
🔴 **İKİ SAYIYI BİRBİRİNE BÖLMÜYORUM.** 166.966 bir **HÜCRE** sayısı, 12-18 bir
**PARÇA** sayısı. Bölmek `D156`nın tam olarak yasakladığı şey: yanlış birim veriyi
değil verinin YAPISINI ölçer. "Kanalın verimi %0,01" gibi bir cümle üretilebilirdi ve
**anlamsız** olurdu.

### ①c 🔴 ŞARTNAMENİN BİR ÖNCÜLÜ ÇÜRÜDÜ — `166.966 KARA hücresi` DEĞİL

Şartname (ve bana gelen sevk) şöyle diyor: *"ızgara 0,05° ≈ 5,5 km · **166.966 KARA
hücresi**"*. Ölçüm:
```
166.966   = EĞİM YÜZÜNDEN SAHİBİ DEĞİŞEN hücre sayısı (A/B ölçümü)
6.095.287 = gerçek KARA hücresi sayısı              ⇒ 36,5 KAT
3.336.475 = tohumdan erişilen kara hücresi          ⇒ 20,0 KAT
```
Motorun kendi satırı zaten böyle diyor: `ızgarada sahibi değişen hücre: 166.966`.
⚠️ Zararı ölçülebilir cinsten: *"166.966 kara hücresi"* okuyan biri ızgarayı
**36 kat küçük** sanır ve hem pilot maliyetini hem animasyon boyutunu yanlış
fiyatlar. `D062`: bir sevk taşıdığı öncülü de doğrulamalıdır — bildiriyorum.

### ①d ⚪ ÖLÇÜLEMEDİ — ve niçin
*"Süzgeç kapanınca kaç km² / kaç kayıt değişir"* **ölçülemedi.** Sebep tek ve
yapısal: soru `PETEK_D`yi gerektiriyor, `PETEK_D` koşuda doğuyor, koşu yasak.
Elimde bir **üst sınır** var ve onu uyduramam: değişebilecek parça sayısı, çok
parçalı peteklerin ana olmayan ≥200 km² parçalarının sayısını **aşamaz.** O sayıyı
da ölçmedim (yine `PETEK_D` gerekiyor). ⇒ `ölçülemedi`, `bulunamadı` değil.

## ② 8 YÖN → 16 YÖN — ⚪ ÖLÇÜLEMEDİ (sentetik sınav YAZILMADI)
Kaynakta doğrulanan tek şey komşuluğun **tam 8 yön** olduğu (`:2257`, sekiz elemanlı
demet) ve adım maliyetinin `hypot(dx*di, _KVDY*dj)` ile gerçek km olduğu; boylam
adımı `cos(enlem)` ile daralıyor. Sekizgen sapması **ölçülmedi** — sentetik ızgara
sınavını yazmadan durduruldum. Maliyeti küçüktü (tek tohum, sürtünmesiz, birkaç yüz
hücre) ama **koşu açma yasağına uydum ve sormadan koşturmadım.**

## ③ NEHİR/GEÇİT/BOĞAZ — ⚪ ÖLÇÜLEMEDİ · ve bir ÇAPRAZ BAĞ bulundu
Kaynakta doğrulandı: sürtünme **yalnız eğimden** geliyor —
`EGIM_CARPANI = 0.005` (`:417`), `sürtünme = 1 + 0,005 × |gradyan|`, ve gradyan
**HEDEF hücreden** okunuyor (`egim_olc.py:136` kalibrasyonu birebir böyle). Nehir,
geçit, boğaz, rakım terimi **yok**; `_kvkara` yalnız karayı geçiriyor, yani
*"belli bir güçle karşıya geçmek"* bugün **ifade edilemiyor** (şartnamenin öncülü
burada DOĞRU çıktı).
🔴 Kalibrasyon sayısı **UYDURULMADI** — çapa aranmadı bile, çünkü ① ve ②'nin
çıktısını bekliyordu. Damga: `ölçülemedi`.

## ④ ANİMASYON MALİYETİ — ⚪ ÖLÇÜLEMEDİ (MB) · 🔴 ama bir BİRİM TUZAĞI ölçüldü
Boyut ölçülmedi. Ama koordinatörün *"animasyon neredeyse bedava, kadran
`_kvuzak ≤ T` eşiğinden ibaret"* iddiasının **bir ön koşulu** kaynakta yazılı ve
kritik — motorun kendi uyarısı (`:2228`):

> *"VE ARTIK km DEĞİL, km × SÜRTÜNME. `_kvuzak` bu aşamadan sonra 'kilometre' değil
> 'yürüme bedeli' taşır; başka bir yerde mesafe diye OKUNMAMALIDIR."*

⇒ Emre'nin kadranı **km cinsinden** (10·30·50·70·100·125·150·200·250·300 km).
`_kvuzak ≤ T` eşiği ise **bedel** cinsinden. İkisi aynı sayı **değil**:
```
düz arazide   sürtünme ≈ 1,0    ⇒ 300 bedel ≈ 300 km
Annapurna'da  sürtünme = 11,03  ⇒ 300 bedel ≈ 27 km
```
📌 Ve bu bir **kusur değil, tam olarak Emre'nin istediği şey** — *"güneyinde 300 km
akan alan, kuzeydeki sıradağlara toslayınca ancak 30 km nüfuz edebilecek."* Motorun
zaten ürettiği `_kvuzak` bu davranışı **taşıyor.** Yalnız kadranın etiketi
*"300 km"* değil *"300 bedel"* olmalı, ya da bedel→km çevrimi **③'ün kalibrasyonuyla**
yapılmalı. ⇒ ③ ile ④ **bağımsız iki kalem değil**; ④'ün etiketi ③'ün çıktısıdır.

## SIRADAKİ — durdurulduğum yer
Sıram şuydu: ② (sentetik, ucuz) → ④ (aritmetik) → ① (pilot, izin isteyecektim) → ③.
Bellek serbest kalınca **②'den devam edebilirim**; ②'nin makineye maliyeti pilot
kutunun yanında ihmal edilebilir. ① için hâlâ **senin iznini bekliyorum.**

---

# TESLİM — GERÇEK YOLUN FİYATI · 11 Eylül 2026 · TAŞMA ÖLÇÜM

> 🔒 **AĞIR HİÇBİR ŞEY KOŞTURULMADI.** Koşu 9 canlı. Üç alet de akış taraması +
> aritmetik: en büyük tahsis 100.000 öğelik bir liste (~3 MB), o da CPython nesne
> boyutlarını **tahmin etmeyip ölçmek** için. Izgara kurulmadı, maske yüklenmedi,
> Dijkstra koşmadı, geometri açılmadı. `arac/` ve `data/` **okundu, yazılmadı.**
>
> Aletler: `denetim/ARAC-TASMA-FIYAT-0911.py` · `ARAC-TASMA-CEVRE-0911.py` ·
> `ARAC-TASMA-BELLEK-0911.py` — üçü de yeniden koşturulabilir.
> Öngörü: `denetim/ONGORU-TASMA-0911.json`, commit **40065bb**, **ölçümden ÖNCE**.

## ÖNCE KARNE — 12 öngörü, 2'si ÇÜRÜDÜ, 1'i kısmen

```
🟢 TUTTU (9)   O1 O2 O3 O5 O6 O9 O10 O11 O12
🔴 ÇÜRÜDÜ (2)  O4  dosya 3-10 kat büyür        → GERÇEK 0,9 KAT
               O7  22,5°'ye ±1° yaklaşılamaz   → (12,5) 0,120° ile yaklaşıyor
🟡 KISMEN (1)  O8  +80..120 sn                 → gerçek +102..135 sn (üst uç aştı)
```
📌 **Ve bu turun bilgisi tutan dokuzda değil, çürüyen ikisinde.** O4 fiyat
tablosunun tamamını ters çevirdi; O7'yi **kendi aletim** çürüttü.

---

## ① POLİGONLAŞTIRMANIN FİYATI

### ①a 🔴🔴 DOSYA BÜYÜMÜYOR — ve sebebi tek satırda

```
bugünkü sınır köşeleri (donemler.js)   2.031.647 nokta · 31,3 MB
bugünkü toplam sınır uzunluğu          7.710.950 km
bugünkü ORTALAMA SEGMENT               3,838 km          ← ANAHTAR SAYI
ızgara hücresinin kenarı               5,570 km          ← BUNDAN KABA
poligonlaştırılsa köşe ≈ 7.710.950 × (4/π) / 5,570 = 1.763.903
                                        ⇒ bugünkünün 0,9 KATI
```
⇒ **Poligonlaştırma dosyayı BÜYÜTMEZ, hatta biraz KÜÇÜLTÜR** (~31 MB → ~27 MB,
16,1 B/köşe ölçülen oranla). Sebep: motorun bugünkü vektör sınırı **ızgaradan
DAHA İNCE** — 3,84 km'de bir köşe koyuyor, ızgaranın adımı 5,57 km.

🔴 **ÖNGÖRÜM (O4: 3-10 kat, 100-300 MB) ÇÜRÜDÜ** ve yanılma yönü öğretici:
"merdiven çok köşe üretir" diye düşündüm, **mevcut temsilin ne kadar ince
olduğunu ölçmedim.** `4/π = 1,273` merdiven çarpanı gerçek, ama 5,57/3,84 = 1,45
oranı onu yutuyor.

📌 Yöntem notu (`4/π`): rastgele yönlü bir doğruyu merdivenle yaklaştırınca
toplam kenar uzunluğu `|cosθ|+|sinθ|` katına çıkar; θ üzerinden ortalaması `4/π`.
Uydurulmuş bir katsayı değil.

### ①b SADELEŞTİRME BU MERDİVENİ SÖKEMEZ — ölçüldü
```
motorun toleransı   SADE_TOL = 0.012° ≈ 1,34 km
basamağın sapması   hücre/2           ≈ 2,78 km
2,78 > 1,34  ⇒ Douglas-Peucker basamakları KORUR
```
⇒ "Sadeleştirirsek düzelir" **çalışmaz**; tolerans hücrenin yarısını aşmalı,
o da sınırı ızgaranın kendisinden daha kaba yapar.

### ①c 🔴 ÖDENECEK GERÇEK BEDEL DOSYA DEĞİL, **KIYI KALİTESİ**
```
bugünkü kıyı  KARA_TOL = 0.002° ≈ 0,22 km hassasiyetle, 315.473 köşe
ızgara kıyısı 5,57 km'lik basamaklar          ⇒ 25 KAT daha kaba
```
Kıyı çizgisi haritanın **en çok bakılan** çizgisi. Bu bir fiyat kalemi ve
bugüne kadar hiçbir yerde yazılı değildi. (Bunu bir tasarım önerisine
çevirmiyorum — `§④`: tasarımı genişletme. Yalnız **fiyatı** bildiriyorum.)

### ①d BELLEK — YAPILABİLİR, ve darboğaz beklenen yerde DEĞİL
```
POLİGONLAŞTIRMA      int32 raster 79,7 MB + uint8 maske 19,9 MB ≈ 100 MB
                     shapes() AKIŞ üretir ⇒ hepsini bellekte tutmak şart değil
                     ⇒ 🟢 BU MAKİNEDE YAPILABİLİR (boş ~1,8 GB)

DIJKSTRA (asıl tepe) uzak  = 20,88M × 32 B = 637 MB   (8 B gösterici + 24 B float)
                     sahip = 20,88M ×  8 B = 159 MB   (int nesnesi yeniden kullanılır)
                     bir çağrı ≈ 797 MB · A/B İKİ çağrı ⇒ ≈ 1,6 GB
                     + DEM + kara maskesi + PETEK_D  ⇒ senin gözlediğin 3,3-4,2 GB
```
🔴 **HÜKÜM: darboğaz poligonlaştırmada DEĞİL, onu BESLEYEN Dijkstra'da.**
CPython boyutları ezberden yazılmadı, `sys.getsizeof` ile **ölçüldü**
(float 24 B · int 28 B · gösterici 8 B).

🟢 **VE UCUZ BİR ÇARE ÖLÇÜLDÜ** (tasarım değil, aritmetik): Python listesi yerine
`array('f')` + `array('i')` kullanılsa aynı iki dizi **159 MB** eder — **5 KAT az**.
Motor zaten `_kvsurt` için `array('f')` kullanıyor ve gerekçesini yazmış
(*"düz liste ~200 MB olurdu"*) — **aynı gerekçe `uzak`/`sahip` için de geçerli ve
oraya uygulanmamış.** Bu bir bulgudur; uygulaması `arac/` donuk olduğu için
YAPILMADI ve senin/Emre'nin kararı.

### ①e POLİGON SAYISI — 🟡 vekil ölçüm, ve bunu saklamıyorum
`donemler.js` içinde **22.576 halka atlaması** sayıldı ⇒ ≈ **22.577 halka**.
Öngörüm 10.000-40.000'di, içine düşüyor. ⚠️ **Ama bu BUGÜNKÜ halka sayısı,
poligonlaştırmanın üreteceği sayı DEĞİL.** İkisi aynı mertebede olmalı, ama
`D051`: *iki ayrı sorunun aynı cevabı vermesi aynı soru olduğu anlamına gelmez.*
Damga: **vekil ölçüm**, `ölçüldü` değil.

---

## ② 8 YÖN → 16 YÖN

### ②a SAPMA — analitik VE sayısal, ikisi birebir uyuştu
```
 4 yön (Manhattan)   %41,421
 8 yön (bugünkü)     % 8,239   en kötü açı 22,50°   ← Emre'nin işaret ettiği açı!
16 yön (+at hamlesi) % 2,749   en kötü açı 13,28°
                     ⇒ TAM 3,00 KAT iyileşme
kapalı biçim: 8 yön √(1+(√2−1)²) · 16 yön √(1+(√5−2)²) — tarama ile AYNI
```
📌 **Ve bir tesadüf değil:** 8 yönün en kötü açısı **tam 22,5°**. Emre "22,5
derece farkla" derken sezgisiyle **kusurun tam durduğu yeri** işaret etmiş.

### ②b 🔴 AMA 16 KOMŞU **22,5° VERMEZ** — ve öngörüm burada çürüdü
```
16 komşunun gerçek açıları  0° · 26,57° · 45° · 63,43° · 90°
istenen                     0° · 22,5°  · 45° · 67,5°  · 90°
tan(22,5°) = √2−1 = 0,41421…  İRRASYONEL ⇒ tam sayı ızgarada TAM 22,5° YOKTUR
```
🔴 **Öngörüm O7'nin ÇÜRÜTME ŞARTINI kendi aletim ateşledi:** "±1°'ye yaklaşan bir
komşu kümesi gösterilirse çürür" demiştim; alet **(12,5) ötelemesini** buldu —
**22,62°, sapma 0,120°**. Yani yaklaşılabiliyor.
⚠️ Ama bedeli: (12,5) komşuluğu **25×25'lik bir şablon** demek, 16 değil ~200
komşu. ⇒ *Katı iddia (tam 22,5° imkânsız) ayakta; benim yazdığım sınav gevşekti.*
`D022`nin tam olarak koruduğu şey bu: sonradan yazsaydım sınavı sıkılaştırır ve
"tuttu" derdim.

### ②c MALİYET — ve motorun kendi yüzdesi BAYAT ÇIKTI (O9 tuttu)
```
motor yorumu (:2299)   "1dk 38sn = koşunun %2,1'i"
KOŞU LOGLARI           Dijkstra      1dk42sn – 2dk15sn   % 0,2
                       A/B ölçümü    1dk34sn – 2dk07sn   % 0,2
⇒ %2,1 → %0,2 · ON KAT bayat. Sebep: o yüzde ~78 dakikalık bir koşuda ölçülmüş,
  bugünkü koşu ~14 saat. `D129`: bir eşik ölçüldüğü TABANLA taşınır.
16 yöne çıkarsa: kenar gevşetme 2× ⇒ çağrı başına +102..+135 sn,
                 iki çağrı toplam +3,5..4,5 dk ⇒ koşunun %0,4'ü
                 BELLEK DEĞİŞMEZ (aynı diziler, yalnız daha çok komşu bakılır)
```
🟡 Öngörüm O8 (+80..120 sn) **üst ucundan taştı** (135 sn). Yönü doğru, aralığı dar.

---

## ③ ANİMASYON — iddian KISMEN doğru, ve çürüyen taraf beklenen taraf değil

```
KADRANIN KENDİSİ   hücre başına tek karşılaştırma (_kvuzak ≤ T)  🟢 GERÇEKTEN BEDAVA
ALANI TAŞIMAK      ham float32+int32, yalnız erişilen 3,34M hücre   25,5 MB
                   nicemlenmiş uint16+uint16                        12,7 MB
                   tüm ızgara (20,88M) nicemlenmiş                   79,7 MB
⚪ gzip/brotli ÖLÇÜLMEDİ — sıkıştırmayı koşturmadım (makine dar). Kazanç
   BEKLERİM (uzamsal tutarlılık yüksek) ama BEKLENTİ bir ölçüm değildir.
```
⇒ **İddian CPU tarafında doğru, YÜK tarafında değil.** 12,7 MB, `donemler.js`in
(31,3 MB) yanında küçük ama *bedava* değil — ve "36 kat yanlış taban" korkun
gerçekleşmedi: düzeltilmiş sayıyla bile mertebe **10 MB**, 100 MB değil.
📌 Sebebi: kadran **erişilen** hücreleri istiyor (3,34M), tüm ızgarayı (20,88M)
değil. Yanlış taban buradan giriyordu.

### ③b KADRANIN 10 km DURAĞI KULLANILAMAZ (O11 tuttu)
```
 10 km →  1,8 hücre   🔴 halka 1-2 hücre: KARE görünür
 30 km →  5,4 hücre   🟡 sınırda
 50 km ve üstü        🟢 kullanılabilir
```
İnce ızgara (0,01° ≈ 1,11 km) çare **değil**: 522 milyon hücre, Dijkstra belleği
**19,4 GB** ⇒ bu makinede imkânsız, DONANIM-0910'un 32 GB'lik makinesinde bile
sınırda.

---

## ④ NEHİR / GEÇİT / BOĞAZ

### ④a 🟢 ÇAPA BULUNDU — ve UYDURULMADI, depo içinden ölçüldü
```
uret_petek.py:1221  dogal_hatta_yasla(cs, nehir_mes=0.30, sirt_mes=0.35)
:1207 yorumu        "yaslama yarıçapı nehir için 0.30 derece ≈ 33 km"
```
⇒ Bu proje **zaten** *"bir sınır nehre 33 km'den yakınsa nehre ait sayılır"*
diyor. Bu ölçülebilir bir çapadır.

**TÜRETME — ve neresi ölçüm, neresi varsayım:**
```
🟢 ÖLÇÜM     R_nehir = 0,30° = 33,4 km   ·   R_sırt = 0,35° = 39,0 km
🟡 VARSAYIM  Nehri geçmek Δ ek bedel getirirse, eşit-maliyet çizgisi nehre
             doğru Δ/2 kayar ⇒ "yaslanma yarıçapı R" ≡ "Δ = 2R"
🟢 ARİTMETİK Δ_nehir = 66,8 km · hücre 5,57 km ⇒ çarpan = 1 + 66,8/5,57 = 13,0
             Δ_sırt  = 77,9 km                 ⇒ çarpan = 15,0
```
**ÇAPRAZ SINAV:** motorun en pahalı eğim hücresi **11,03** (Annapurna). Türetilen
13,0 ve 15,0 **aynı mertebede** — yani sayı, motorun kendi ölçeğiyle uyumlu.
⚠️ *"Nehir Himalaya'dan biraz pahalı"* savunulabilir (5,5 km'lik bir hücrede geniş
nehir mutlak engeldir) ama **bu bir yargı, ölçüm değil.**

🔴 **ÇÜRÜTÜLEBİLİR HÂLE GETİRİLDİ:** gerçek koşuda çarpan konur ve sınırın nehre
yaslanma oranı bugünküyle karşılaştırılır. Aynı çıkarsa çevrim doğrulanır.
**O koşu yapılmadı** — damga `ölçülemedi`, ve niçin olduğu yazılı.

### ④b ⚪ BOĞAZ/GEÇİT — ÖLÇÜLEMEDİ, ve sebebi YAPISAL
`:2256` → `if not _kvkara[k]: continue`. Su hücresi **hiç komşu sayılmıyor**.
⇒ *"Belli bir bedelle karşıya geçmek"* bugün **ifade edilemiyor**; çapa aramak
anlamsız, önce modelde bir yer açılmalı. Bu bir eksik değil, bir **sıra**:
④b, ④a'nın ardından gelir.
📌 **Geçit** ayrı bir iş istemiyor — sırt çizgisindeki bir boşluk ızgarada
kendiliğinden ucuz yol olur. Geçidi *modellemek* değil, sırtı *doğru çizmek* gerek.

---

## SAYILARIN NEREDEN GELDİĞİ — tek tabloda
```
2.031.647 köşe · 7.710.950 km · 3,838 km/segment  → ARAC-TASMA-CEVRE-0911.py (akış taraması)
22.576 halka atlaması                              → aynı alet
%8,239 · %2,749 · 3,00 kat · (12,5) 0,120°         → ARAC-TASMA-FIYAT-0911.py (analitik+tarama)
637/159/797 MB · 12,7 MB · 1,8 hücre · çarpan 13,0 → ARAC-TASMA-BELLEK-0911.py (getsizeof+aritmetik)
%0,2 · 1dk42sn-2dk15sn                             → koşu logları (grep)
6.095.287 · 3.336.475 · 20.880.000                 → koşu logları (önceki tur)
0.30°/0.35° · SADE_TOL 0.012 · KARA_TOL 0.002      → uret_petek.py (grep)
```

---

# TAŞMA PROTOTİP — ÇALIŞAN PROTOTİP VE BEŞ RESİM · 11 Eylül 2026

> Öngörü: `denetim/ONGORU-TASMA-PROTOTIP-0911.json`, commit **3e74cdd**,
> **resmi görmeden önce.** Prototip depo ağacının DIŞINDA
> (`…\Temp\claude\…\scratchpad\tasma_prototip.py`); `arac/` ve `data/` yalnız
> OKUNDU. Motor değiştirilmedi, koşu açılmadı.
> **Ölçülen tepe bellek 168,7 MB · toplam 48,6 sn** — koordinatörün 1 GB sınırının
> altında kaldı, sormaya gerek olmadı.

## KARNE — 7 öngörü, 1'i çürüdü, 1'inin GEREKÇESİ çürüdü
```
🟢 P1 sınırlar KISMEN yaslanır (organik ama sırta kilitlenmez)   TUTTU
🟢 P2 merdiven görünür, Chaikin siler                            TUTTU (+ ek bulgu)
🟢 P3 300-600 poligon                          396               TUTTU
🟢 P4 Dijkstra < 5 sn                          3,20 sn           TUTTU
🟡 P5 tepe < 500 MB                            168,7 MB          sayı TUTTU
      "tepeyi json.load yapacak"                                 GEREKÇE ÇÜRÜDÜ
🟢 P6 8↔16 yön farkı %2-8                      %3,59             TUTTU
🔴 P7 en büyük fark KIYIDA olacak, dağda değil                   ÇÜRÜDÜ
```

## ① RESİMLER — beş PNG, `denetim/` altında
```
TASMA-PROTOTIP-1-YANYANA-0911.png    Doğu Anadolu · ÜÇ panel: bugün · önerilen · ÜST ÜSTE
TASMA-PROTOTIP-5-TOROS-0911.png      Toroslar+Akdeniz · aynı üç panel (dağ VE kıyı bir arada)
TASMA-PROTOTIP-3-MERDIVEN-0911.png   ham merdiven ↔ Chaikin — 1,6°×1,2° yakınlaşma
TASMA-PROTOTIP-2-GENEL-0911.png      bütün pilot kutu, üst/alt
TASMA-PROTOTIP-4-FARK-0911.png       fark SEBEP SEBEP ayrıştırılmış (3 katman)
```

### 🔴 VE İLK ÇİZİM OKUNMUYORDU — kusuru ÖLÇÜM DEĞİL GÖZ buldu
İlk sürümde 19°lik kutuya 376 petek sığdırdım, kabartma yıkanmıştı, iki panel
gözle ayırt edilemiyordu. Sayılar doğruydu (%12,9 fark), **resim yanlıştı.**
📌 Ve ikinci sürüm de yanlış soruyu cevaplıyordu: renk lekesi sınırın **EĞRİ**
olduğunu gösteriyor, **ARAZİYE UYDUĞUNU** göstermiyor — ikisi ayrı iddia.
⇒ Üçüncü sürümde renk kaldırıldı, arazi öne alındı, sınır tek başına hat olarak
çizildi ve üçüncü panelde iki yöntem **üst üste** bindirildi.
**Sevkin kendi cümlesi haklı çıktı: sayı "yaslandı" demez, GÖZ der — ve göz
resmin KENDİSİNİ de denetliyor.**

## ② GÖZLE HÜKÜM — dürüstlük maddesi (sevk ③)

🟢 **SINIRLAR GERÇEKTEN ARAZİYİ GÖRÜYOR.** Düz çizgi Voronoi'de sınırlar geometrik
doğrular; ızgarada vadi boyunca akıyor, dik yamaçlardan kaçıyor, körfezi dolaşıyor.
Fark **bakar bakmaz görülüyor** — kimseye "şuraya dikkat et" demeye gerek yok.

🟡 **AMA SIRT ÇİZGİSİNE KİLİTLENMİYOR — P1 tuttu ve bu bir SINIRDIR.**
Sınırlar organik ve eğri, ama bir sırtın tam üstünden geçmiyor; bazı yerlerde
sırtı **kesiyor**. Sebep yapısal ve önceden yazmıştım: `sürtünme = 1 + 0,005·|eğim|`
**sürekli bir alan**, bir **engel** değil. Yüksek eğim bandı sınırı iter ama
bir çizgiye **kilitlemez** — sırt boyunca yürümek de pahalıdır.
⇒ **Emre'nin "dağa toslayınca duracak" tarifi için engel terimi gerekiyor**
(④'ün nehir/sırt çarpanı). Eğim tek başına o işi görmüyor; **yaklaştırıyor.**

🔴 **VE ÇİRKİN OLANI DA GÖSTERİYORUM:** merdiven basamakları **açıkça görünüyor**
(`…-3-MERDIVEN…`, sol panel). Chaikin onları siliyor — **ama karşılığında
sınırı DALGALANDIRIYOR**: basamak gidiyor, yerine düzenli bir *fisto* geliyor.
Bu bir kusur değil bir **takas**, ve raporlanmadan geçilmemeli.

## ③ SAYILAR — ve hangi sebep ne kadar
```
pilot kutu        Anadolu (26,36,45,42) + 1,5° pay · ızgara 440×180 = 79.200
kara hücresi      55.174 · erişilen 55.154 · tohum 376 (370'i ızgaraya oturdu)
sürtünme          medyan 1,563 · en yüksek 6,86
poligon           396 · ham köşe 12.232   (poligonlaştırma 0,04 sn)

AYRIŞTIRILMIŞ FARK (erişilen hücrenin yüzdesi):
  ① KARA YOLU   düz Voronoi → sürtünmesiz ızgara    4.767  %8,64
  ② EĞİM        sürtünmesiz → eğimli ızgara         4.767  %8,64
  ③ TOPLAM      düz Voronoi → eğimli ızgara         7.088  %12,85
  ④ 8 ↔ 16 yön                                      1.982  %3,59
```

### 🔴 P7 ÇÜRÜDÜ — ve tam olarak çürüdü
*"En büyük fark dağda değil KIYIDA çıkacak; sonsuz maliyet 11 katı her zaman
yener"* demiştim. Ölçüm: **ikisi TAM OLARAK EŞİT.** Kara yolu tek başına %8,64,
eğim tek başına %8,64. Ne kıyı baskın, ne dağ.
📌 Ve toplam (%12,85) ikisinin toplamından (%17,3) **küçük**: iki etki aynı
hücrelerin bir kısmında **birbirini götürüyor** (kesişim 1.415 hücre).

### 🟢 VE AYNI SAYININ İKİ KEZ ÇIKMASI ÖNCE ALETTEN ŞÜPHELENDİRDİ (`D117`)
4.767 = 4.767 bir yazılım hatası gibi kokuyordu. **Sınadım, hata yok:**
```
vor is s_duz            False        diziler AYNI NESNE DEĞİL
array_equal(vor,s_duz)  False        içerikleri de farklı
A=vor≠duz ∩ B=duz≠egim  1.415        kümeler FARKLI (A\B = B\A = 3.352)
yarım örneklem ×3       2370/2387 · 2394/2344 · 2371/2399  → EŞİTLİK BOZULUYOR
```
⇒ **Yapısal bir özdeşlik YOK; eşitlik gerçek bir TESADÜF.** Komşu ölçüm
`duz↔y16 = 4.807` de aynı bantta — yani ~4.700-4.900 bandında bir denk gelme.
Raporluyorum ama **bir anlam yüklemiyorum.**

## ④ 8 → 16 YÖN — ve KENDİ ÖNCEKİ TAHMİNİMİ DÜZELTİYORUM
```
Dijkstra 8 yön   3,20 sn
Dijkstra 16 yön  4,37 sn      ⇒ 1,36 KAT
```
🔴 Önceki teslimimde *"komşu sayısı 2× ⇒ süre ~2×, çağrı başına +102..135 sn"*
demiştim. **Ölçüm 1,36× diyor, 2× değil.** Sebep: 16 komşu daha *iyi* yollar
bulduğu için yığın daha az kabarıyor; kenar sayısı iki katına çıksa da iş iki
katına çıkmıyor. ⇒ Motorun gerçek ölçeğinde ek maliyet **+37..49 sn/çağrı**,
yani koşunun **%0,15'i** — daha önce yazdığımın üçte biri.
⚠️ **Ve bu prototipin mutlak süreleri motora TAŞINMAZ:** benim Dijkstra'm numpy
dizilerinde skalar indeksliyor, motorunki `array('f')` + düz liste kullanıyor.
Taşınabilir olan **oran** (1,36×), **saniye değil** (`D129`).

## ⑤ MALİYET — pilottan tam girdiye
```
pilot 55.174 kara hücresi     Dijkstra 3,20 sn · poligonlaştırma 0,04 sn
tam   6.095.287 kara hücresi  → 110 kat hücre
motorun ÖLÇÜLMÜŞ tam koşusu   Dijkstra 102-135 sn (koşu logları, %0,2)
poligonlaştırma tam ölçekte   kardeş oturum ölçtü: 0,496 sn / 3.843 poligon
```
⇒ **Poligonlaştırma tam ölçekte yarım saniye.** Maliyet tarafında bu işin önünde
duran hiçbir şey yok; `②`de yazdığım gibi darboğaz Dijkstra'nın BELLEĞİ
(637+159 MB/çağrı) ve onun da 5 katlık ucuz çaresi ölçüldü (`array`).

## ⑥ NE YAPILMADI — damgalı
```
⚪ ÖLÇÜLMEDİ   nehir/sırt ENGEL terimi konmuş hâli (④'ün çarpanı 13,0/15,0)
              — bu prototip YALNIZ eğim taşıyor. Emre'nin "nehirde duracak"
              tarifi HENÜZ DENENMEDİ.
⚪ ÖLÇÜLMEDİ   boğaz/geçit — su hücresi hâlâ geçilmez (yapısal, `:2256`)
⚪ ÖLÇÜLMEDİ   bu sınırların DEĞİŞMEZ 1/2/7 · çakışma · enklav denetimlerinden
              geçip geçmediği. Hepsi düz-çizgi Voronoi tabanında kalibre
              edildi (sevkin kendi uyarısı) ve prototip onlara HİÇ sorulmadı.
🔴 YAPILMADI   motorda hiçbir değişiklik. Süzgeç yerinde, `A`nın tanımı yerinde.
```

---

# TAŞMA PROTOTİP II — ENGEL TERİMİ · 11 Eylül 2026

> Depo ağacının DIŞINDA koştu · motor DEĞİŞTİRİLMEDİ · koşu AÇILMADI.
> **Toplam 12,4 sn · TEPE RSS 150,1 MB** (birinci turun önbelleği kullanıldı) —
> sormaya gerek olmadı, sınırın çok altında.

## ⓪ ÖNCE İKİ DÜZELTME — ve biri BENİM SINAVIM

### 🔴🔴 ① GEÇİT SINAVIM TERS ETİKETLİYDİ — ölçüm doğru, çıkarım yanlış (`D049`)
Sınavı şöyle yazdım: *"sınırın sırt bandını kestiği hücre sayısı AZALMALI."*
Ölçüm **arttığını** gösterdi ve alet **`🔴 geçit etkisi YOK`** bastı.
```
p70  sırt bandını kesen sınır hücresi   2.530 → 3.398   (+%34)
p85                                     1.326 → 1.744   (+%32)
p95                                       457 →   589   (+%29)
kesişin eğim ortalaması (p85)  bant 425 · KESİŞ 441 m/hücre  ← BANTTAN YÜKSEK
```
**Ve bu artış BAŞARIDIR, başarısızlık değil.** Bir engel bandı iki tarafa da
pahalı gelir; eşit-maliyet çizgisi bandın **İÇİNE** oturur. Yani sınır sırtın
ÜSTÜNE çıkmıştır — ***birinci turda eksik olan tam da buydu.*** Üstelik kesiş
hücrelerinin eğimi bandın ortalamasından **YÜKSEK**: sınır bandın en dik yerine
yerleşiyor.
📌 Sayı doğruydu, **etiketi yanlıştı** — ve yanlış etiket aletin kendi çıktısına
`🔴 YOK` diye basıldı. Bir sonraki oturum o satırı okusa **çalışan bir mekanizmayı
çalışmıyor sanacaktı.**

### 🔴 ② SENİN KABUL ÖLÇÜTÜN AYIRT EDEMİYOR — ve sebebi yapısal
*"Engel eklenince 4.767 = 4.767 denkliği BOZULMALI; bozulmazsa bir şey yanlıştır."*
```
ENGELSİZ  kara yolu 4.767 · eğim 4.767            ⇒ EŞİT
p70/85/95 kara yolu 4.767 · eğim 4.767 · ENGEL 6.580 / 3.306 / 1.495
```
İki terim **engelden ETKİLENMİYOR, etkilenemez**: `kara yolu` = düz Voronoi ↔
sürtünmesiz ızgara, `eğim` = sürtünmesiz ↔ eğimli ızgara. Engel bunların
**ikisine de girmiyor**; ÜÇÜNCÜ bir terim ekliyor.
⇒ **Ölçüt, tanımı gereği hiçbir zaman ateşlenemez.** Bir kabul ölçütünün
karşılaştırdığı iki şeyi ayırt etmesi gerekir (`D081`).
🟢 Ve zaten bozulacak bir şey de yok: birinci turda `D117` sınavıyla ölçtüm,
denklik **yapısal değil tesadüf** (yarım örneklem üç denemede de bozdu).
🟢 **GEÇERLİ ÖLÇÜT ŞU OLURDU** ve onu koşturdum: *"engel, sınırı sırt bandının
İÇİNE taşımalı."* **Taşıdı** — yukarıdaki +%29..34.

## ① EŞİKLER — UYDURULMADI, verinin kendi yüzdelikleri
```
eğim (m/hücre)   medyan 113 · p70 194 · p85 295 · p95 442 · en yüksek 1.172
ceza             sırt 77,9 km · nehir 66,8 km
                 çapa: motorun KENDİ yaslama yarıçapları (sirt_mes=0.35 ·
                 nehir_mes=0.30) ⇒ Δ = 2R. Birinci turda türetildi, damgalıydı.
```
| eşik | engelli hücre | eğimliye göre değişen | süre |
|---|---|---|---|
| p70 (194 m) | 17.012 | 6.580 (%11,9) | 1,58 sn |
| p85 (295 m) | 8.772 | 3.306 (%6,0) | 1,49 sn |
| p95 (442 m) | 3.273 | 1.495 (%2,7) | 1,49 sn |

⇒ **ARALIK VERİYORUM, HÜKÜM VERMİYORUM** (sevkin istediği buydu): p70 haritayı
belirgin biçimde değiştiriyor, p95 neredeyse dokunmuyor. **p85 orta yol.**
Hangisinin *doğru* olduğunu resim ve Emre söyler.

## ② GÖZLE — dürüst hüküm
`TASMA-PROTOTIP-7-UC-ASAMA-0911.png` üç aşamayı yan yana koyuyor:
düz Voronoi → sürtünme → engel. **Mor bant engel hücreleridir.**

🟡 **Dürüst olmak gerekirse: ② → ③ farkı GÖZLE İNCE.** Sayı %6,0 diyor ve
resimde de o kadar görünüyor — birinci turun ① → ② sıçraması kadar çarpıcı
DEĞİL. Sırtlara oturma **ölçümde net** (+%32), **gözde ikincil.**
🔴 Bunu bir başarı gibi sunmuyorum: *"engel eklendi, harita düzeldi"* demek
bu resimlerin taşıdığından fazlasını iddia etmek olurdu.

## ③ 🔴 NEHİR YARISI NEREDEYSE HİÇ SINANMADI — ve sebebi benim sadeleştirmem
```
motorun nehir kapısı İKİ tane:  ① 31 adlık BUYUK_SADE beyaz listesi
                                ② scalerank ≤ 5
ben YALNIZ ②'yi uyguladım — ①'i uygulayamadım, çünkü `_ad_sadelestir`
motorun İÇİNDE ve dosyayı çalıştırmadan alınamıyor (koşu 9 canlı, çalıştıramam)
SONUÇ: pilot kutuda 7 nehir parçası · 516 hücre
```
⚠️ Ve Anadolu'da **asıl kapı ①'dir**: Kızılırmak · Yeşilırmak · Büyük Menderes ·
Sakarya · Porsuk hep o listede. ⇒ **Emre'nin *"geniş nehire gelince ilerleme
kesilecek"* tarifi bu turda pratikte SINANMADI.** Yukarıdaki bütün sayılar
fiilen **SIRT engelinin** sayılarıdır.
🟢 Çaresi ucuz ve bilinen: `_ad_sadelestir` + `BUYUK_SADE` ayrı bir modüle
alınırsa (ya da koşu bitince motor içinden okunursa) nehir kapısı tam açılır.

## ④ ⚪ GEÇİT — ÖLÇÜLEMEDİ, ve tasarımı yazıyorum
Sevk *"eğimin kendisi geçidi söyler, ayrı veri arama"* dedi — **katılıyorum ve
mekanizma kurulu**: eşiğin altındaki hücreye ceza yazılmıyor, yani sırt
hattındaki alçak boşluk kendiliğinden ucuz yol oluyor.
🔴 **Ama ÇALIŞTIĞINI GÖSTEREMEDİM.** Kurduğum sınav geçidi değil *sırta oturmayı*
ölçüyordu (yukarıda düzeltildi). Geçidi ölçmek için gereken ayrı bir sınav:
```
sırt bandının BAĞLANTILI BİLEŞENLERİNİ çıkar
her bileşen için: sınırın bandı ENİNE geçtiği (bir yakadan öbürüne) hücreleri bul
o hücrelerin eğimini, bileşenin eğim DAĞILIMIYLA karşılaştır
geçit varsa: geçişler dağılımın ALT kuyruğunda toplanır
```
Bu turda yazmadım. Damga **`ölçülemedi`**, `bulunamadı` değil.

## ⑤ MALİYET
```
engelli Dijkstra   1,49-1,58 sn   (engelsiz 3,20 sn'nin YARISI)
```
📌 **Engel Dijkstra'yı YAVAŞLATMIYOR, HIZLANDIRIYOR** — pahalı hücreler
erkenden elenince yığın daha az kabarıyor. ⇒ Engel terimi motor bütçesinde
**bedava**; maliyet endişesi bu kalemde yok.

---

# KADEME A — İKİ HARİTA · `Z-0022` · 11 Eylül 2026
*(bir aydır gecikmiş kalem; vade 14 Ağustos 2026)*

## ① NE İSTENDİĞİ — ÖLÇÜLDÜ, UYDURULMADI

`Z-0022` "Kademe A koşusunun iki haritası" diyor. **"Kademe A" bu depoda
tanımlı** ve tek anlamı var — `ALTYAPI.md`:
```
:309   sahip(hücre) = argmin over i of  maliyet(yerleşim_i → hücre) ÷ w_i
:314   kademe A = ÖKLİD MESAFE           ⇒ AĞIRLIKLI VORONOI (Apollonius)
       kademe B = sürtünmeli yürüme      ⇒ maliyet-mesafe peteği (ızgara)
:468   "kademe A: ağırlıklı Voronoi (formül yerine oturur, davranış DEĞİŞMEZ)"
:111   ağırlık tablosu — ÖLÇÜLMÜŞ komşu mesafelerinden (29 : 46 : 67 ≈ 1 : 1,6 : 2,3)
```
⇒ **İKİ HÂL = ağırlıksız (bugünkü yayın) ↔ ağırlıklı (Kademe A).** Tek parametre,
iki değer — `Z-0002`nin (Sahra: tavan var / tavan yok) birebir aynı ailesi.
🟢 Uydurma yok: ağırlıklar tablodan **olduğu gibi** alındı
(k1 1,50 · k2 1,00 · k3 0,69 · k4 0,43 · k0 0,69).

### 🔴 VE `Z-0002`NİN RESMİ ZATEN VARDI — AMA BAYAT (`D045` sınavı yapıldı)
`denetim/sahra-iki-hal.png` (460 KB) açıldı ve okundu. **İş yapılmış**: Sahra,
tavan var / tavan kaldırılmış, yan yana. **Ama başlığı bugünü anlatmıyor:**
```
resmin başlığı   "BUGUNKU YAYIN (r1247)" · TAVAN_KM = {k0:280, k3:280, k4:140}
BUGÜN            yayın r7050            · TAVAN_KM = {0:200, 1:200, 2:200, 3:200, 4:200}
```
⇒ Resim **~5.800 sürüm** eski ve tarif ettiği tavan değerleri **artık yürürlükte
değil** (kademeye göre 280/140 iken bugün hepsi 200). `Z-0002` "teslim edilmedi"
diye duruyordu; ölçüm şunu söylüyor: **teslim edilmemiş DEĞİL, BAYATLAMIŞ.**
Emre'ye gösterilecekse yeniden üretilmeli — o ayrı bir kalem, bu turda yapmadım.

## ② İKİ HARİTA — üretildi
```
denetim\KADEME-A-1-IKI-HARITA-0911.png   ← ASIL RESİM. Üç panel: bugün · Kademe A · ÜST ÜSTE
denetim\KADEME-A-2-GENEL-0911.png        bütün pilot kutu, üst/alt
```
Aynı kutu · aynı 376 tohum · **tek fark ağırlık.** Nokta boyutu ve rengi kademeyi
gösteriyor, böylece mekanizma gözle okunuyor: büyük merkez → büyük petek.

## ③ FARK — 🔴 KÜÇÜK DEĞİL, BÜYÜK
```
kara hücresi 55.174 · sahip DEĞİŞEN 14.761   =  %26,8
yer değiştiren alan                             356.294 km²
```
| kademe | w | ağırlıksız | KADEME A | değişim |
|---|---|---|---|---|
| k1 başkent (5) | 1,50 | 17.949 km² | 78.837 km² | **+%339** |
| k2 eyalet merkezi (25) | 1,00 | 181.985 | 378.708 | **+%108** |
| k3 sancak merkezi (129) | 0,69 | 513.337 | 539.550 | +%5 |
| k0 kademesiz (4) | 0,69 | 29.850 | 20.169 | −%32 |
| k4 kaza/kasaba (213) | 0,43 | 586.771 | 312.628 | **−%47** |

**En çok kazanan:** Musul +31.787 km² · Ankara +18.572 · Kutaisi +17.260 ·
Edirne +15.432 (740 → 16.172, **22 kat**) · Erzurum +14.510
**En çok kaybeden:** Sincar −13.111 · Deyrizor −10.368 · Tikrit −9.369 ·
Kırşehir −8.365 · Aşkale −7.998

🟡 Dürüstlük şartı bu turda **ters yöne** işliyor: fark küçük değil, **büyük** —
ve büyütmeye gerek yok, sayı kendi söylüyor.

## ④ 🔴🔴 İKİ UYARI — ve ikisi de karar verilmeden önce bilinmeli

### ④a BİR YERLEŞİM PETEĞİNİ TAMAMEN KAYBETTİ — `Değişmez 1` riski
```
Rumeli Hisarı (k4, w=0,43)   23 km² → 0 km²
```
Ağırlıklı Voronoi'de bir nokta, **kendi üstünde durduğu toprağı** güçlü bir
komşuya kaptırabilir (burada İstanbul, k1). Motorun ızgara aşamasında bunun
koruması **var** ve gerekçesi yazılı (`uret_petek.py:2320`: *"bir yerleşimin
ÜZERİNDE DURDUĞU toprak asla başkasına geçemez… bu bir mesafe sorusu değil,
tanım gereği böyle"*) — **ama Voronoi aşamasında yok.**
⇒ Kademe A gönderilecekse o koruma **Voronoi'ye de taşınmalı.** Pilot kutuda
1 vaka; dünya ölçeğinde ölçülmedi.

### ④b EN BÜYÜK ETKİYİ, HİÇ ÖLÇÜLMEMİŞ OLAN AĞIRLIK ÜRETİYOR
`ALTYAPI.md:118` şöyle diyor:
> *"`k:1` ölçülemedi ve bu AÇIKÇA yazılıyor: yalnız dört nokta var (Söğüt ·
> Bursa · Edirne · İstanbul)… `1,50` bir tahmindir ve öyle damgalanmıştır."*

Ve tablodaki **en büyük değişimi tam o ağırlık üretiyor: k1 +%339.**
🟢 **AMA O GEREKÇE ARTIK GEÇERLİ DEĞİL — ölçtüm:**
```
ALTYAPI.md'nin dediği   k:1 → 4 nokta, ölçüm anlamsız
BUGÜN (girdi.yukle)     k:1 → 345 nokta (dünya) · 5 nokta (pilot kutu)
dünya kademe dağılımı   k0 1.239 · k1 345 · k2 228 · k3 1.282 · k4 714
```
⇒ *"Ölçülemedi"* damgası **86 kat büyümüş bir veriye dayanıyor.** 1,50 bugün
**ölçülebilir** ve ölçülmelidir — çünkü haritadaki en büyük tek değişimi o
sayı belirliyor. Bu, `§1.5`in *"bir belgedeki sayı ölçüm değil, ölçümün
fotoğrafıdır"* dersinin `ALTYAPI.md` yüzü.

## ⑤ YÖNTEM — ve bir uyum kararı
Mesafe **derece uzayında** ölçüldü, çünkü motorun kendi Voronoi'si de öyle
(`uret_petek.py:792` → `Point(lon, lat)`). Km'ye çevirmek *"bugünkü hâli"*
değiştirir ve kıyası bozardı. Ağırlık bir **oran** olduğu için bu seçim
ağırlığın etkisini değiştirmez, yalnız tabanı motorunkiyle aynı tutar.
⚪ **ÖLÇÜLMEDİ:** yaslama · Chaikin · göl çıkarma · yarıçap tavanı — hiçbiri
uygulanmadı. İki panel de **ham Voronoi ∩ kara**; kıyas için doğru olan bu
(tek değişen parametre), ama bu resimler **yayındaki haritanın kendisi değildir.**

## ⑥ MALİYET
Toplam koşu birkaç saniye, tepe bellek birinci turun önbelleğiyle ~170 MB.
Ağırlıklı Voronoi **ek maliyet getirmiyor**: aynı argmin, tek fark bölen.

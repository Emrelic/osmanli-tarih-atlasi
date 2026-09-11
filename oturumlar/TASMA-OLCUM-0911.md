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

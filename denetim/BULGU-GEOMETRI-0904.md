# BULGU — PAKET GEOMETRİ 0904

```
OTURUM : PAKET GEOMETRİ 0904 · local_4e0f5048-9210-47cc-8863-ecf8213b8427
TARİH  : 4 Eylül 2026
PAKET  : ClaudEmre/kutu/giden/parti-emrelic-0040 (damga 2026-09-04 10:42)
MADDE  : H-0001 · H-0002 · H-0003 · H-0006 · H-0007
KISIT  : petek üretimi KOŞUYOR (PID 12656) — motor ve data/ DONMUŞ.
         Bu rapor TEŞHİStir; hiçbir düzeltme uygulanmadı.
ÖLÇÜM  : yalnız OKUMA — data/donemler.js · data/devletler_harita.js ·
         data/petek_govde.js · data/goller.js · veri-kaynak/ne_10m_*.geojson ·
         arac/uret_petek.py (metin olarak, grep/sed — İMPORT EDİLMEDİ)
```

---

## 🔴🔴 ÖNCE BİR ARIZA — KOŞUYU DOĞRUDAN TEHDİT EDİYOR

Bu oturum 16 Ağustos'ta şu kusuru **kendi üzerinde ölçtü**:

```
Bir ölçüm betiğinin sonuna pencereyi okumak için  import uret_petek  yazdım.
Bunu bir OKUMA sandım. DEĞİL:
🔴 uret_petek.py MODÜL DÜZEYİNDE ÜRETİMİ KOŞTURUYOR.
Betik 23:2x'te başladı, 00:59'da TAM ÜRETİMLE bitti (yabancı gövdeler 49 dk ·
dönemler 25 dk 30 sn) ve donemler.js · devletler_harita.js · petek_govde.js ·
bolgeler.js dosyalarını YENİDEN YAZDI.
```

⇒ **Bugünkü anlamı:** *"`arac/uret_petek.py`ye tek karakter yazma"* kısıtı
**yetmiyor.** O dosyaya hiç dokunmayan bir oturum, sırf `import uret_petek`
yazarak **ikinci bir üretim** başlatabilir ve PID 12656 ile aynı `data/`
hedeflerine yazar.
🔴 **Çift koşu kilidi bunu durdurmaz:** kilit `KOSUYU-SIMDI-BASLAT.bat`ın
içinde. Import kilidi **hiç sormaz.**

> ## 🟢 BU ALARMIN İKİ ÜÇTE İKİSİ ARTIK GEÇERSİZ — ÖLÇÜLDÜ (4 Eylül 2026)
>
> Koordinatör alarmı **kabul etmedi, ÖLÇTÜ** ve ben de doğruladım
> (`arac/uret_petek.py:38-44`, dosya metin olarak okundu):
> ```python
> if __name__ != "__main__":
>     raise RuntimeError("uret_petek.py İÇE AKTARILAMAZ — bu modül import
>         edildiği anda 80 dakikalık ÜRETİMİ başlatır …")
> ```
> Blok **her şeyden önce** duruyor (satır 38; `import json, os…` satır 46).
> Yani `import uret_petek` artık üretim başlatmıyor, **anında patlıyor.**
> Ve dosyanın kendi yorumu vakayı adıyla kaydetmiş: *"DOĞURAN VAKA
> (16 Ağustos 2026, OPUS HAZIR KITA 8 bildirdi)"* — yani aşağıdaki ①-② nolu
> reçeteler **zaten uygulanmış hâlin tarifi.**
>
> 📌 Ve dosyanın kendi cümlesi bu projenin sınavını tekrar ediyor:
> *"uyarı zaten yazılıydı — `uret_altlik.py:29`, bir YORUM satırında. Doğru
> ders, makinenin göremediği yerde. Bu blok onu bir `if`e çeviriyor."*
>
> 🔴 **AMA ÜÇÜNCÜSÜ AÇIK KALDI, ve kaydı burada duruyor:** çift koşu kilidi
> hâlâ `KOSUYU-SIMDI-BASLAT.bat`ın içinde. `py arac/uret_petek.py` **doğrudan**
> iki kez çağrılırsa kilit **sormaz**. Import yolu kapandı, bu yol açık.
> ⇒ Aşağıdaki 2 numaralı madde (kilidi modülün içine taşı) **hâlâ borç.**

🟡 **Reçete — ①-② ölçüldü ve ZATEN UYGULANMIŞ, yalnız 2. maddenin KİLİT ayağı açık:**
1. ~~`uret_petek.py`de üretim gövdesi `if __name__ == "__main__":` altına alınsın~~
   → ✅ **YAPILMIŞ** (`:38` koruma bloğu; import artık `RuntimeError` atıyor).
2. Kilit `.bat`tan **modülün içine** taşınsın → kim nasıl çağırırsa çağırsın
   kilit çalışır. 🔴 **AÇIK BORÇ — doğrudan çağrı hâlâ korumasız.**
3. ~~Pencere/sabit okumak isteyen oturum `grep` kullansın, import etmesin~~
   → ✅ artık **zorunlu değil, imkânsız**: alet kendini savunuyor.

📌 **Ve bu maddeden çıkan asıl ders ters yöndedir, kaydediyorum:** alarmı
ölçmeden verdim. Doğru davranış buydu ve gerekçesi **asimetri**: yanlış
alarmın bedeli *bir mesaj*, susmanın bedeli *on saatlik koşu*. Yıkıcı riskte
ölçüm beklenmez — **bildirilir, sonra ölçülür.** (Ölçen koordinatör oldu.)

---

## ⚪ HEPSİNİN ALTINDA DURAN TEK OLGU — YAYINDAKİ GEOMETRİ GİRDİDEN GERİDE

Beş maddeyi tek tek ölçmeden önce ortak zemini ölçtüm, çünkü üç maddenin
cevabını doğrudan değiştiriyor:

```
girdi (79 dosya, girdi.py listesi)        3805 nokta
yayındaki geometri (donemler.js PETEKLER) 2731 petek
⇒ ÇIKTIDA PETEĞİ OLMAYAN NOKTA          1074   (%28,2)
```
Bunların **1072'si Avrupa dışında** (Okyanusya · Avustralya · Amerika — son
partiler); orta/kuzey Avrupa'da yalnız **2** (Elbing · Torun).

📌 `CLAUDE.md §11`: *"çıktı, girdinin bir tur gerisindedir ve bu bir kusur
değil bir GECİKMEdir — ama gecikme KAYITSIZSA kusurdan ayırt edilemez."*
Bu satır o kaydı tutuyor. **H-0006'nın tamamı** ve H-0007'nin bir kısmı bu
gecikmenin görünen yüzüdür.

---

## H-0001 — "bazen üstüste biniyor, bazen boşluk oluyor"

> *"8-9. resimlerde birbiri ile örtüşmeyen ve arada açıklık kalan yapılar var"*

### ① NE ÖLÇTÜM

**Görsellerin adresleri** (alt şeritten, birebir):
```
H-0001-8   1281-01-01 · 48.54–50.85N · 14.70–18.10E · z6.5   (Bohemya)
H-0001-9   1281-01-01 · 55.80–57.99N · 20.82–24.52E · z6.4   (Riga · Šiauliai)
```

**Kutu ölçümü** (`ne_10m_land` ∩ kutu − boyalı gövdelerin birleşimi):
```
KUTU A (Bohemya)   kara 62.957 km² · boyalı %97,0 · BOYANMAMIŞ 1.888 km²
                   büyük parça 1.621 km², ORTALAMA GENİŞLİK 4,96 km
KUTU B (Riga)      kara 36.396 km² · boyalı %95,9 · BOYANMAMIŞ 1.630 km²
                   büyük parça 1.497 km², ORTALAMA GENİŞLİK 2,62 km
```

**İkili mesafe** (aynı kutuda, 1281-01-01):
```
macaristan ↔ avusturya   0,000 km      almanya ↔ macaristan   5,245 km  🔴
macaristan ↔ lehistan    0,000 km      avusturya ↔ almanya    0,006 km
almanya    ↔ lehistan    0,000 km
```

**Ve sebebi ayıran ölçüm — ORTAK KÖŞE sayımı.** `seyrelt()` (uret_petek.py:3571)
köşeleri **tam eşitlikle** donduruyor; iki komşunun aynı köşeyi bit düzeyinde
taşıyıp taşımadığını saydım. 1281-01-01'de **402 komşu adayı çiftin tamamı**:

```
                     DEĞEN   BOŞLUK   ÖRTÜŞEN   uzak
ORTAK KÖŞE VAR         110       0       110       0
ORTAK KÖŞE YOK           0      17         2     163
```

🔴 **17 boşluğun 17'sinde de ortak köşe SIFIR. Ortak köşesi olan hiçbir çiftte
boşluk YOK. 402 çiftte istisnasız.**

En geniş boşluklar: `mantua↔papalik` 10,7 km · `gova-makassar↔timor` 15,1 km ·
`nahua↔tututepec` 12,3 km · `iskocya↔norvec` 6,7 km · `bizans↔inancogullari` 9,0 km.

**Örtüşme AYRI bir olgu ve daha yaygın: 112 çift.**
```
tran-hanedani ↔ yuan-hanedani  5.503 km²   altinorda ↔ novgorod  4.145 km²
danimarka ↔ isvec              3.259 km²   delhi ↔ racput        3.161 km²
bizans ↔ sirbistan             2.775 km²   kastilya ↔ portekiz   2.674 km²
```
Örtüşen alanların **ortalama genişliği 8–18 km**, ince şerit DEĞİL. Ve
örtüşen çiftlerin **110'unda ortak köşe VAR** (47'ye kadar) — yani dikiş sağlam
olduğu hâlde örtüşüyorlar.

Örtüşme alanlarının içindeki örnek noktalar **tek bir peteğe** düşüyor ve o
peteğin sahibi **tek** bir devlet:
```
danimarka∩isvec  (15,58 · 56,69) → petek "Karlskrona"  sahip@1281: danimarka
kastilya∩portekiz(-7,38 · 38,80) → petek "Badajoz"     sahip@1281: kastilya
bizans∩sirbistan (21,51 · 40,77) → petek "Manastır"    sahip@1281: sirbistan
```

### ② NE ÇIKARDIM

**Emre'nin gördüğü iki şey AYNI AİLE DEĞİL — iki ayrı mekanizma:**

**(a) BOŞLUK = `seyrelt()`in dondurma kümesi o dikişte ATEŞLEMİYOR.**
`seyrelt()` yabancı gövdeleri Douglas-Peucker ile `SEYRELT_TOL = 0,03°`
(≈3,3 km) sadeleştiriyor; ortak sınır köşeleri donduruluyor ki boşluk
doğmasın. Dondurma **tam float eşitliğiyle** (`don_kose_kur`, :3639) çalışıyor.
İki komşu gövde o dikişte birebir aynı köşeyi taşımıyorsa **hiçbir köşe
donmuyor**, DP iki tarafı da içeri çekiyor ve **2×tol'e kadar (≈6,6 km)**
boşluk açılıyor. Ölçülen 2,6–5,2 km bu bandın tam içinde.

🔴 **Ve fonksiyonun kendi başlığı bunun ölçülmesini ENGELLEMİŞ:**
> *"Onlar hiç oynamadığı için iki komşu arasında **boşluk yapısal olarak
> doğamaz** — ölçülmesi bile gerekmez."*

`CLAUDE.md §11`in *"yanlış bir güvence, hiç yazılmamış bir nottan kötüdür"*
dersi: cümle doğru bir tasarımı anlatıyor ama **koşulunu (ortak köşe var mı)
sınamıyor**, ve okuyanı sınamaktan alıkoyuyor. Ölçüm bugün onu çürüttü.

**(b) ÖRTÜŞME = gövde, kendisine ait OLMAYAN bir peteğin içine taşıyor.**
Sebep sadeleştirme olamaz: 8–18 km, DP toleransının 3–6 katı, ve ortak köşeler
yerinde. Ölçek **morfolojik kapamanın ölçeğiyle** birebir uyuşuyor:
`kapat(g, yaricap=0.15)` (:1242) — *"aralarında yarıçap×2'den (≈33 km) daha az
boşluk olan"* parçaları birleştirir; koridor kapaması `B3_KAPAMA_DER = 0.45`
(≈50 km).
🔴 Ve kapamanın koruma şartı **yanlış ekseni ölçüyor** (:1319):
> *"içinde BAŞKA DEVLETİN YERLEŞİMİ varsa KAPATMA"*

Şart **nokta** arıyor, oysa korunması gereken şey **petek**. Karlskrona
vakası tam bu: kapanan alan Karlskrona'nın **peteğinin içinde** ama Karlskrona
**noktasının** kendisi 39 km güneyde kalıyor → koruma ateşlemiyor → İsveç
gövdesi Danimarka'nın peteğine giriyor.

⚠️ **BUNU ÖLÇMEDİM, ÇIKARDIM.** Kapamanın bu bölgelerde ateşlediğini
görebilmek için koşunun `_B23_SAYAC` karnesi gerekiyor ve motor donmuş
(aşağıda 🟡 kovasında).

### ③ REÇETE

```
R1  don_kose ORTAK IZGARAYA oturtulsun.  Karşılaştırma tam float eşitliği
    yerine kuantalanmış anahtar olsun:  q = (round(x,6), round(y,6))
    ya da havuzun tamamına shapely.set_precision(1e-6) uygulansın.
    ⚠️ set_precision zaten :1843'te BİLEREK kullanılmıyor ("ortak köşeler
       zaten bit düzeyinde aynı") — bu ölçüm o varsayımın YABANCI HAVUZDA
       tutmadığını gösteriyor. Not düzeltilmeli, yoksa bir sonraki oturum
       aynı güvenceye kanar.
R2  Kapama korumasını NOKTADAN PETEĞE çevir (:1319):
        "içinde başka devletin YERLEŞİMİ var mı"  →
        "kapatılacak alan başka bir devletin PETEĞİ ile kesişiyor mu"
R3  Nöbetçi: koşu sonunda 1281 · 1500 · 1700 kesitlerinde
    "komşu çift → ortak köşe sayısı × mesafe × örtüşme" çapraz tablosu
    basılsın. ORTAK KÖŞE YOK + mesafe>0 olan her çift bir İHLALDİR.
```

**REÇETENİN KENDİ TESTİ** (uygulandığında geçmeli):
```
① 402 çiftin tablosunda "ORTAK KÖŞE YOK × BOŞLUK" hücresi  17 → 0
② KUTU A boyanmamış 1.888 km² → < 100 km²  ·  KUTU B 1.630 → < 100 km²
③ örtüşen çift 112 → 0   (R2'den sonra)
④ ve R1 dosya boyutunu BÜYÜTMEMELİ: devletler_harita.js bugün 14,8 MB;
   seyreltmenin kazancı korunmalı (kabul: ≤ 15,5 MB)
```
⚠️ ④ olmadan R1 tehlikeli: dondurma kümesini genişletmek sadeleştirmeyi
zayıflatır ve `seyrelt()`in var oluş sebebi (27 MB → 4 MB) geri gelebilir.

---

## H-0002 — "Talin'in peteği denizi geçip karşı yakayı mı boyamış?"

### ① NE ÖLÇTÜM

Görselin adresi: `1281-01-01 · 59.11–60.81N · 21.88–27.08E · z5.8`.

```
Tallinn (Reval)  59,437 · 24,754  k1   → peteği var, sahibi@1281: almanya
Fin körfezinin KUZEY yakasında nokta (lat>59,6): 24 nokta
   Helsinki 60,170 · 24,938 k1 — Tallinn'e 82 km
   Turku (Åbo) · Hämeenlinna · Viipuri · Tampere …
```
**Görseldeki bandın altındaki petekler ve sahipleri:**
```
(22,60 · 60,30) → petek "Turku (Åbo)"    sahip@1281: isvec
(24,20 · 60,35) → petek "Hämeenlinna"    sahip@1281: isvec
(26,00 · 60,55) → petek "Helsinki"       sahip@1281: SAHİPSİZ
```
**Bandı fiilen boyayan gövde** (nokta-içinde testi, devletler_harita.js):
```
band-batı · band-orta · band-doğu  →  ÜÇÜ DE  isvec
Tallinn                            →  almanya
almanya ∩ isvec (kuzey kutu)       →  0 km²   (örtüşme YOK)
almanya gövdesinin lat>59,9'da kalan alanı  →  1.830 km²
```

### ② NE ÇIKARDIM

🔴 **Emre'nin hipotezi ÇÜRÜDÜ, ama şikâyeti HAKLI — ve sebep BAŞKA.**
Fin kıyısındaki bandı **İsveç boyuyor** ve bu **doğru**: bandın altındaki
petekler Turku ve Hämeenlinna'nın, ikisi de 1281'de İsveç'e ait. Tallinn'in
peteği denizi geçmiyor; almanya ile isvec gövdeleri orada **hiç örtüşmüyor**
(0 km²).

**Görüntüdeki yanlış olan şey ETİKET.** Bandın üstünde `KUTSAL ROMA /
ALMANYA` yazıyor, oysa bandın rengi ve sahibi İsveç. Yani bu bir **boyama**
değil **etiket yerleşimi** kusuru.

⚠️ Ve bir uç açık kaldı: almanya gövdesinin körfezin kuzeyinde **1.830 km²**
alanı var. Etiketin oraya oturmuş olması muhtemel ama **nerede olduğunu
ölçmedim** (aşağıda 🟡).

📌 `§3.5.1`in iki uç kuralı burada işledi: "Tallinn fazla mı boyuyor" diye
bakıp durulsaydı cevap *"hayır"* olurdu ve şikâyet *"asılsız"* diye
kapanırdı. Şikâyet asılsız değil; **yanlış organı** işaret ediyor.

### ③ REÇETE

```
R4  Etiket yerleşimi ölçülsün: js/app.js'te devlet etiketi hangi noktaya
    konuyor (centroid mi, pole-of-inaccessibility mi, en büyük parça mı)?
    Bir gövdenin etiketi, o gövdenin EN BÜYÜK parçasının içine konmalı ve
    başka bir gövdenin üstüne düşüyorsa BASTIRILMALI.
    TEST: 1281'de "KUTSAL ROMA / ALMANYA" etiketinin merkezi almanya
          gövdesinin İÇİNDE mi? Değilse ihlal.
R5  almanya'nın kuzeydeki 1.830 km²'si ADIYLA ölçülsün (hangi petekler).
    Meşruysa (Åland/takımada) DOKUNULMAZ; değilse H-0001(b) kapaması.
```

---

## H-0003 — "boşluk kalan yerler bunun sebebi nedir"

### ① NE ÖLÇTÜM

Görselin adresi: `1281-01-01 · 62.29–66.33N · 14.38–18.66E · z5.3`
(Jämtland — İsveç/Norveç dağ hattı).

```
kara(kutuda)  90.005 km²
boyalı        71.806 km²  (%79,8)
BOYANMAMIŞ    18.257 km²  (%20,3)
   en büyük parça 16.121 km² · ORTALAMA GENİŞLİK 20,3 km
   temsilî nokta (16,65 · 64,29) → en yakın yerleşim Östersund 144 km,
                                    sonra Umeå 183 km, Härnösand 196 km
   ikinci parça    817 km² · 2,4 km · en yakın Jokkmokk 113 km
```

Ve tavanın ne yaptığını **koddan** okudum (metin, import yok):
```
TAVAN_KM = {1:200, 2:200, 3:200, 4:200, 0:200}        (:878)
_tavan_cokgen()  "ALAN KORUYAN yöne duyarlı tavan"    (:1044)
```

### ② NE ÇIKARDIM

🔴 **H-0003, H-0001 İLE AYNI AİLE DEĞİL. Ölçü ayırıyor:**
```
H-0001 boşluğu    2,6 – 5,2 km   iki BOYALI gövde arasında   ortak köşe = 0
H-0003 boşluğu   16 – 20 km      hiçbir gövde talep ETMİYOR   en yakın nokta 92-144 km
```
H-0003'te kusur dikişte değil **kapsamada**: o alanı hiçbir petek örtmüyor.
Ve sebep saf mesafe de değil — en yakın nokta **144 km**, tavan **200 km**.
Tavan geometrik bir daire değil, **alan koruyan** bir çokgen: hücrenin alanı
200 km yarıçaplı dairenin alanına sabitlenip yön yön yeniden dağıtılıyor.
Bir hücre bir yöne uzunsa **başka yönde 200 km'nin altında kesilir.**
İskandinav dağ hattında olan bu.

🟢 **VE BU BİR KUSUR OLMAYABİLİR** — Emre'nin kendi hükmü var
(`CLAUDE.md §5`): *"devasa boşluklar olacaksa olsun."* Motor Çang Tang'ı
**yanlış boyamıyor, hiç boyamıyor.** Jämtland dağları da 1281'de gerçekten
seyrek iskânlı.
⇒ Bu maddede sorulacak soru *"nasıl kapatırız"* değil, **"kapatılmalı mı"**.
Karar Emre'nin; benim işim ikisini birbirinden ayırmaktı.

### ③ REÇETE

```
R6  KARAR SORUSU (Emre'ye): 16–20 km'lik dağ boşlukları KALSIN mı?
    ① KALSIN  → hiçbir şey yapılmaz, ama boşluk BEYAN edilir: bu alanların
                "kasıtlı" olduğu bir katmanda görünsün, kullanıcı "eksik
                veri" sanmasın.
    ② KAPANSIN→ iki yol var ve ikisi de VERİ işi, motor işi değil:
                (a) Jämtland/Härjedalen/Lappland'a nokta eklenir
                (b) bölge noktası (tur:"bolge") ile beyanlı doldurulur
    🔴 ÜÇÜNCÜ YOL (tavanı büyütmek) ÖNERİLMİYOR: 9 Ağustos ölçümü tavanın
       gevşetilmesinin "yetim yüz" mantığıyla birlikte Osmanlı gövdesini
       %15 şişirdiğini gösterdi (`CLAUDE.md §11`).
R7  Ölçüm nöbetçisi: her koşuda "kara maskesinin kaç km²'si hiçbir petek
    tarafından örtülmüyor" basılsın, kıta kırılımıyla. Bugün bu sayı
    HİÇBİR YERDE basılmıyor; boşluğun büyüdüğünü kimse göremez.
```

---

## H-0006 — "Cânet, Gât ile aradaki mesafeyi neden bölmemiş?"

### ① NE ÖLÇTÜM

```
Cânet (Djanet)  24,550 · 9,480   k:0  kur:1281-01-01  s: tuareg-accer 1281-1911
Gât             24,964 · 10,180  k:4                  (1281'de hafsi)
aralarındaki mesafe ≈ 84 km
```
İki noktayı birleştiren doğru üzerinde **19 örnek** aldım (t=0,05 … 0,95) ve
her birinin hangi peteğe düştüğünü ölçtüm (delik/iç halka duyarlı testle):

```
t0,05 … t0,95   ON DOKUZUNUN ON DOKUZU DA  →  petek "Gât"
```

Sonra kimliği doğrudan aradım (node ile, UTF-8; `grep` Türkçe harfte
yanılıyor — bu projede kayıtlı tuzak):
```
PETEKLER içinde "Gât"     → 1 kayıt (petek #987)
PETEKLER içinde "Djanet"  → 0 kayıt
PETEKLER toplam           → 2731
```

### ② NE ÇIKARDIM

🔴 **Emre'nin hipotezi ("Dijkstra sayesinde mi") ÇÜRÜDÜ — ve sebep çok daha
basit: CÂNET'İN YAYINDAKİ GEOMETRİDE PETEĞİ YOK.**
Mesafe bölünmemiş çünkü bölecek ikinci hücre **hiç doğmamış**. Cânet
`data/yerlesimler_afrika2.js`te **var**, `donemler.js`in petek listesinde
**yok** — yani nokta, yayındaki geometri üretildikten SONRA eklenmiş.
Bu, yukarıdaki **1074 noktanın** bir tanesi.

⇒ Kusur ne motorda ne veride: **çıktı girdinin bir tur gerisinde.**

🟢 **VE BU SINANABİLİR BİR ÖNGÖRÜDÜR** — koşu bitmeden yazıyorum:
```
ÖNGÖRÜ Ö1: Koşan üretim indiğinde "Cânet (Djanet)" PETEKLER'de VAR olacak
           ve Cânet–Gât doğrusunun bir kısmı Cânet'in peteğine geçecek.
NEREDEN OKUYACAĞIM: node ile donemler.js → PETEKLER içinde ad araması;
           sonra aynı 19 örnek noktanın tekrar ölçümü.
BEKLENEN : t=0,05'ten başlayarak en az 5 örnek Cânet'e geçer.
MAZERET  : YOK. Geçmezse Cânet'in noktası motorun okuduğu kümede değildir
           (girdi.py bağı) ve o AYRI bir kusurdur — o zaman bildirilecek.
```
⚠️ Sınır **BÖLGE SINIRI OLARAK** yine tam ortada olmayabilir: sürtünme
(km × eğim) kenarı yüksek eğimli tarafa doğru iter. Tâsîlî n'Accer platosu
yüksek arazidir. **Bunu ölçmedim** — DEM okunmadı (🟡 kovası).

### ③ REÇETE

```
R8  Koşu bitince Ö1 sınanır (yukarıdaki komut). TUTARSA madde kapanır,
    "bayatlamış şikâyet" olarak damgalanır.
R9  Ve genel kural: 1074 noktanın listesi çıkarılıp koşu sonrası
    "hâlâ peteği olmayan" sayısı ölçülsün. Sıfırdan büyükse SEBEBİ
    aranır (girdi.py bağı · kur:/bit: · maske dışı).
```

---

## H-0007 — "Aral gölünün kenarlarına renk örtüsü oturmuyor"

### ① NE ÖLÇTÜM

```
ARAL KUTUSU (58,0–62,5D · 43,5–47,5K)
   kara(kutuda)  156.344 km²
   boyalı         77.141 km²  (%49,3)
   BOYANMAMIŞ     79.202 km²  (%50,7)
   örnek (61,0 · 46,6) ve (61,6 · 45,2) → HİÇBİR PETEĞİN İÇİNDE DEĞİL
```
**Motorun göl girdisi** (`data/goller.js`, `GOL_DOSYASI`, girdi.py:1268):
```
"Aral Gölü (tarihî, 1960 öncesi kıyı — yaklaşık)"   gecerli: 1281-01-01 → 1923-10-29
  not: "kuruma-oncesi-yaklasik — traşe edilmiş kıyı verisiyle değiştirilebilir"
ayrıca: "South Aral Sea" · "North Aral Sea" · "Küçük Aral" · "Büyük Aral"
```
**Natural Earth'ün göl verisi** (`veri-kaynak/ne_10m_lakes.geojson`):
```
South Aral Sea  3.379 km²      North Aral Sea  3.477 km²     (toplam ≈ 6.900 km²)
```
**Altlık** (js/app.js:650-651):
```
type: "raster"
tiles: ["https://server.arcgisonline.com/.../World_Physical_Map/MapServer/tile/{z}/{y}/{x}"]
```

### ② NE ÇIKARDIM

🔴 **Sebep Dijkstra değil: EKRANDA İKİ FARKLI ARAL VAR.**
```
BOYA katmanı  motorun kestiği göl = TARİHÎ (1960 öncesi) Aral, ~60.000 km² mertebesi
ALTLIK katmanı ArcGIS World_Physical_Map = BUGÜNKÜ fiziki harita, Aral ~7.000 km²
```
Boya tarihî kıyıda duruyor, altlık modern kıyıyı gösteriyor. Aradaki fark —
kurumuş göl yatağı — altlıkta **kara gibi** görünüyor ama boya oraya
**girmiyor**, çünkü motor için orası **göl**. Emre'nin gördüğü *"renk
örtüsünün oturmaması"* budur.

🟢 **Ve motorun davranışı DOĞRU:** 1281–1923 arasında Aral gerçekten büyüktü.
Yanlış olan **altlık**: 2026'nın uydu fizikî haritası 1281'in altına
konuyor.

⚠️ İkinci bir katkı daha var ve ayrı: kutunun %50,7'si boyasız ve iki örnek
nokta **hiçbir peteğin içinde değil** — yani göl dışında da kapsama yok
(Kızılkum/Üstyurt seyrekliği, H-0003 ailesi).
**İki sebebi birbirinden ayırmadım** — gölün payı ile seyrekliğin payı ayrı
ayrı ölçülmedi (🟡).

### ③ REÇETE

```
R10 KISA VADE (motor işi DEĞİL, arayüz işi): tarihî göl sınırı altlığın
    ÜSTÜNE ince bir hat olarak çizilsin. Kullanıcı "boya oturmamış" değil
    "göl o tarihte buraya kadardı" görsün.
    🟢 Altyapı VAR: js/app.js:705-716 zaten "raster ALTINDA / ÜSTÜNDE" iki
       grup tutuyor; tarihî göl Grup B'ye (üstte) girer.
R11 ORTA VADE: altlık rasterinin kendisi sorgulansın. `data/altlik.js`
    (vektör altlık, uret_altlik.py) zaten var ve yayın kapısı bugün onu
    BAYAT gösteriyor. Vektör altlık tazelenirse modern raster'a olan
    bağımlılık azalır.
R12 ÖLÇÜM BORCU: Aral kutusundaki 79.202 km²'nin kaçı GÖL (motorun kestiği),
    kaçı KAPSAMASIZ KARA — ayrı ayrı. Tek satırda raporlanırsa iki ayrı
    kusura aynı çare uygulanır (`CLAUDE.md §11`).
```

---

## 🔴 REÇETE KUYRUĞU — koşu bitince, dosya ve satır adresiyle

| # | dosya · satır | iş | önce sınanacak |
|---|---|---|---|
| R1 | `arac/uret_petek.py:3639` `don_kose_kur` | köşe anahtarı kuantalansın | çapraz tablo 17→0 · dosya ≤15,5 MB |
| R2 | `arac/uret_petek.py:1319` kapama koruması | "yerleşim" → "petek" | örtüşen çift 112→0 |
| R3 | `arac/uret_petek.py` koşu sonu | dikiş çapraz tablosu bassın | C13 ①②③④ |
| R4 | `js/app.js` etiket yerleşimi | etiket kendi gövdesinin içinde | H-0002 testi |
| R5 | ölçüm | almanya'nın kuzeydeki 1.830 km²'si | — |
| R6 | KARAR (Emre) | dağ boşlukları kalsın mı | — |
| R7 | `arac/uret_petek.py` koşu sonu | "örtülmeyen kara km²" bassın | — |
| R8 | ölçüm | Ö1 öngörüsü sınansın | — |
| R9 | ölçüm | 1074 peteksiz nokta koşu sonrası | — |
| R10 | `js/app.js:705` Grup B | tarihî göl hattı | — |
| R11 | `arac/uret_altlik.py` | vektör altlık tazelensin | yayın kapısı |
| R12 | ölçüm | Aral: göl payı / kapsamasız kara payı | — |
| ~~A1~~ | ~~`arac/uret_petek.py` gövde~~ | ✅ **ZATEN YAPILMIŞ** — `:38` import koruması ölçüldü (4 Eylül) | — |
| **A2** | `KOSUYU-SIMDI-BASLAT.bat` → modül | çift koşu kilidi modülün **İÇİNE** | `py arac/uret_petek.py` iki kez çağrılınca ikincisi REDDEDİLMELİ |

## 🟡 ÖLÇÜLEMEDİ — asla "temiz" diye raporlanmaz

```
Ö-a  Kapamanın (kapat/B2/B3) bu bölgelerde gerçekten ateşlediği.
     Gerekli: koşunun `_B23_SAYAC` karnesi (b2_birlesti · b2_yerlesim · b2_deniz).
     Motor donmuş; koşu bitince logdan okunacak.
Ö-b  Cânet–Gât hattının SÜRTÜNME profili (DEM). veri-kaynak/yukseklik/
     etopo2022_30s_atlas.tif okunmadı.
Ö-c  almanya gövdesinin Fin körfezi kuzeyindeki 1.830 km²'sinin YERİ.
Ö-d  Aral kutusundaki boşluğun göl / kapsamasız kara ayrımı.
Ö-e  Örtüşen 112 çiftin kaçı KASITLI (metbû-tâbi çifti) kaçı kusur.
     `altinorda ↔ novgorod` gibi çiftler tarihen tartışmalıdır; bu ayrım
     VERİ sorusudur, geometri sorusu değil.
Ö-f  H-0001'in ölçümü 1281-01-01 kesitinde yapıldı. Başka kesitlerde
     (1500 · 1700) sayılar ÖLÇÜLMEDİ.
```

## ⚪ BAYATLAMIŞ — kanıtıyla

```
H-0006  Cânet'in peteği yok çünkü nokta, yayındaki geometriden SONRA eklendi.
        Kanıt: PETEKLER'de "Djanet" 0 kayıt · girdi 3805 nokta / çıktı 2731 petek.
        ⇒ Koşan üretim indiğinde KENDİLİĞİNDEN değişmesi BEKLENİYOR (Ö1).
```
⚠️ Öteki dört madde **bayatlamış DEĞİL**: H-0001'in dikiş boşluğu
`seyrelt()`in yapısında, H-0003 tavanın tasarımında, H-0007 iki katmanın
farkında, H-0002 etiket yerleşiminde. Yeni koşu bunların hiçbirini
kendiliğinden değiştirmez.

## 📌 ÖNGÖRÜLER — koşu bitince sınanacak (ölçümden ÖNCE yazıldı)

```
Ö1  Cânet PETEKLER'de görünecek, 19 örneğin ≥5'i Cânet'e geçecek.   mazeret YOK
Ö2  H-0001 çapraz tablosu DEĞİŞMEYECEK: "ORTAK KÖŞE YOK × BOŞLUK"
    hücresi yine >0 olacak (R1 uygulanmadığı için).                  mazeret YOK
Ö3  Jämtland boşluğu %20 civarında KALACAK (yeni nokta eklenmediyse).
    mazeret VAR: bu bölgeye nokta eklendiyse küçülür.
Ö4  Aral kutusu boşluğu DEĞİŞMEYECEK (göl girdisi aynı).             mazeret YOK
```
Her kalem için: **hangi çıktıdan** → `data/donemler.js` + `data/devletler_harita.js`,
**hangi birimde** → km² (derece² × 111,32² × cos φ) ve **adet**.

---

# EK 1 — 1500 ve 1700 KESİTLERİ, VE KENDİ ALETİMİN SINIRI

*(4 Eylül 2026, koordinatörün "1500/1700 en değerli açık kalem" sevkiyle)*

## ① 1500 ve 1700 — ayrışma AYNEN sürüyor

```
                       DEĞEN  BOŞLUK  ÖRTÜŞEN  uzak     aktif gövde · komşu aday
1281-01-01  köşe VAR     110      0      110      0     153 · 402
            köşe YOK       0     17        2    163
1500-06-15  köşe VAR     115      0       99      0     159 · 396
            köşe YOK       0     17        2    163
1700-06-15  köşe VAR      88      0       76      0     116 · 657
            köşe YOK       0     17        5    471
```
🔴 **Üç kesitte de "ORTAK KÖŞE VAR × BOŞLUK" hücresi SIFIR.** Mekanizma
1281'e özgü değil, **kalıcı.**

⚠️ **Ve "17" üç kesitte de çıkması TESADÜFTÜR — ölçtüm, çürüttüm:**
```
üç kesitte de boşluklu olan çift: 3
   choctaw ↔ creek-konfederasyonu · choctaw ↔ natchez · habesistan ↔ sidamo
yalnız 1281'de:  9 çift   ·  yalnız 1500'de:  9 çift  ·  yalnız 1700'de: 14 çift
```
⇒ Kusur **sabit bir dikişte değil**; hangi dikişin o kesitte ortak köşesini
kaybettiğine bağlı. Aynı sayının üç kez çıkması, aynı vakanın sürdüğü
anlamına **gelmiyor.**

## ② 🔴 KENDİ ÖLÇÜMÜMÜ DÜZELTİYORUM — "17 çift" ALT SINIRDIR, KUSURUN ÖLÇÜSÜ DEĞİL

Aletim gövde–gövde mesafesini **tek bir sayı** olarak ölçüyor. Bir çift bir
yerde **değiyorsa** mesafe 0 çıkıyor — **başka bir yerde 5 km açık olsa bile.**
Ve bunun kanıtı zaten kendi raporumun içindeydi:
```
KUTU A'da  almanya ↔ macaristan  =  5,245 km AÇIK
küresel ölçümde aynı çift        =  DEĞEN (0 km) — çünkü başka yerde değiyor
```
⇒ **"17 boşluklu çift" bir alt sınırdır.** `§11`: *"sayı doğru diye yöntem
doğru sayılmaz"* — sayı doğru, **evreni yanlış**: çift değil, **dikiş parçası**
sayılmalıydı.

## ③ DÜZELTİLMİŞ ÖLÇÜ — çift değil ALAN, ve ÜÇ AİLE ayrıldı

Avrupa kutusu (-10..40D · 35..70K), 1281-01-01, `ne_10m_land` tabanlı:
```
kara        7.915.499 km²
boyalı      7.707.241 km²  (%97,4)
BOYASIZ       236.146 km²  (%3,0) · 11.745 parça
```
Parçaları **ortalama genişlik** ve **kaç gövdeye değdiği** ile ayırdım
(5 km² altı sayılmadı — 9.472 parça, piksel gürültüsü):
```
① DİKİŞ         ≤8 km geniş VE 2+ gövdeye değiyor      95 parça ·  15.526 km²
② KENAR/KIYI    ≤8 km geniş VE ≤1 gövdeye değiyor   2.159 parça ·  85.765 km²
③ KAPSAMA       >8 km geniş                             19 parça · 127.232 km²
```
**En büyük dikiş şeritleri — ve görsellerdeki vakaları BİREBİR buluyor:**
```
2.131 km² · 4,8 km · 33,67·45,25 → altinorda + ceneviz
1.862 km² · 2,5 km · 21,65·54,39 → almanya + lehistan          ← H-0001-9 (Riga)
1.543 km² · 4,7 km · 14,81·48,54 → almanya+avusturya+lehistan+macaristan ← H-0001-8
1.265 km² · 3,3 km · 16,98·65,61 → isvec + norvec-kralligi
  455 km² · 5,0 km · 21,62·38,04 → bizans + venedik
```
🟢 Bu, KUTU A/B ölçümlerimi **bağımsız olarak doğruluyor** (1.621 km²/4,96 km
ve 1.497 km²/2,62 km — aynı şeritler, farklı yoldan).

## ④ 🆕 VE BU ÖLÇÜM ÜÇÜNCÜ BİR AİLE ORTAYA ÇIKARDI: KIYI KENARI

**85.765 km², 2.159 parça** — ince, ama **yalnız BİR gövdeye** değiyor. Yani
iki devlet arasındaki dikiş değil, **gövdenin kıyı çizgisine yetişememesi.**
Dikiş ailesinden **5,5 kat** büyük ve bugüne kadar hiç adlandırılmamış.

⚠️ **BUNU AÇIKLAMADIM, YALNIZ ÖLÇTÜM.** Muhtemel sebepler (hiçbiri sınanmadı):
kıyı sadeleştirme toleransı · `KARA_TOL` · gövdenin `KARA` ile kesilmesindeki
yuvarlama · ada/kıyı şeridi peteklerinin hiç doğmaması.
🔴 Ve `§11`: bu üç aile **tek satırda raporlanırsa aynı çare uygulanır** ve
biri düzelirken öteki bozulur. Ayrı tutuldular.

## ⑤ REÇETE KUYRUĞUNA EK

| # | iş | test |
|---|---|---|
| R13 | Dikiş nöbetçisi **çift** değil **parça** saysın: ince (≤8 km) + 2+ gövdeye değen parçaların adedi ve km²'si | 1281 Avrupa: 95 parça / 15.526 km² → R1'den sonra < 10 parça |
| R14 | KIYI KENARI ailesi ADIYLA ölçülsün ve sebebi aransın (85.765 km², 2.159 parça) — dikişten AYRI kalem | sebep bulunana kadar 🟡 kovasında |

## ⑥ 🟡 EK 1'İN ÖLÇÜLEMEDİKLERİ (EK 2 bunların ikisini kapatıyor)
```
· ①②③ ayrımı yalnız 1281 · AVRUPA kutusunda yapıldı. 1500/1700 ve öteki
  kıtalar için ALAN ölçümü YOK (çift ölçümü var, o da alt sınır).
· "KENAR" ailesinin sebebi ölçülmedi (yukarıda ④).
· 5 km² eşiğinin altında 9.472 parça var; bunların ne olduğu ölçülmedi.
```

---

# EK 2 — ÖRTÜŞME KÜMESİ ve 1074 PETEKSİZ NOKTA

## 🔴 ÖNCE ÖNGÖRÜ — ölçümden ÖNCE yazıldı, mazeretleriyle

*(Koordinatörün sevkinin ① maddesi — 1500/1700 çapraz tablosu — **EK 1'de zaten
ölçüldü**; sevk ile teslimim çakıştı. Burada ② ve ③ var, ve öngörüleri
ölçümden önce yazıyorum.)*

```
Ö5  ÖRTÜŞEN ÇİFT SAYISI 1281→1700 ARASINDA AZALACAK, ARTMAYACAK.
    Gerekçe: aktif gövde 153 → 159 → 116; örtüşme gövde SAYISINA bağlı,
    komşu adayı sayısına değil.
    ⚠️ MAZERET VAR: 1700'de komşu adayı çift 657'ye çıkıyor (1281'de 402);
    yoğunlaşma örtüşmeyi artırabilir. Yani bu kalem iki yöne de açık.
    NEREDEN: devletler_harita.js · ADET
Ö6  ÖRTÜŞEN TOPLAM ALAN ARTACAK.
    Gerekçe: geç dönemde gövdeler büyük (Rusya · Qing · Babür); aynı sayıda
    çift daha çok km² örter.  MAZERET YOK.
    NEREDEN: devletler_harita.js · km²
Ö7  1074 PETEKSİZ NOKTANIN ≥%90'ı, ÇIKTIDAN SONRA EKLENEN DOSYALARDA
    TOPLANACAK — yani sebep ZAMAN değil, PARTİ.
    ⚠️ MAZERET VAR: dosya tarihi ≠ noktanın eklenme tarihi (bir eski dosyaya
    yeni satır eklenmiş olabilir). O yüzden dosya bazında BAKIYORUM, ve
    dağınık çıkarsa mazeret geçerli sayılır.
    NEREDEN: girdi listesi + donemler.js PETEKLER · ADET
Ö8  ÖRTÜŞMENİN OSMANLI TARAFI BU ÖLÇÜMDE HİÇ YOK.
    Gerekçe: Osmanlı doğrudan/tâbi gövdesi `donemler.js`te (o/v alanları),
    yabancılar `devletler_harita.js`te. İki havuz AYRI.
    ⇒ Koordinatörün uyardığı `OSMANLI ↔ tâbi` muafiyeti bu sayıları
    ETKİLEMEZ. MAZERET YOK — bu bir şema iddiası, ölçülebilir.
```

## ② ÖRTÜŞME KÜMESİ — ADET DÜŞÜYOR, ALAN DÖRT KATA ÇIKIYOR

```
                aktif gövde   ÖRTÜŞEN ÇİFT   TOPLAM ÖRTÜŞME   ortanca
1281-01-01          153            96            44.659 km²     141 km²
1500-06-15          159            88           175.919 km²      98 km²
1700-06-15          116            63           168.356 km²     150 km²
```
*(ölçüt: kesişim ≥ 1 km². Raporun ilk bölümündeki "112" sayısı **alanı >0 olan
her çifti** sayıyordu; aradaki 16 çift 1 km²'nin altında kalan kırıntılardır.
İki sayı çelişmiyor, **eşiği farklı** — ve eşik burada açıkça yazılı.)*

```
Ö5  TUTTU        96 → 88 → 63. Gövde sayısı düştükçe örtüşen çift de düştü,
                 komşu adayı 402 → 657'ye çıkmasına rağmen.
Ö6  KISMEN TUTTU 1281 → 1700 arasında alan 3,8 KAT arttı (44,7 bin → 168,4 bin),
                 ama TEK YÖNLÜ DEĞİL: zirve 1500'de (175,9 bin), 1700'de hafif
                 düşüyor. "Artacak" dedim, "düzenli artacak" demedim ama
                 eğilimi tek yönlü sanmıştım — DÜZELTİYORUM.
```
🔴 **VE ASIL BULGU İKİSİNİN ORANINDA:** çift sayısı **azalırken** toplam alan
**dört katına** çıkıyor ⇒ **örtüşme başına düşen alan büyüyor.**
1281'de küçük devletlerin küçük çakışmaları; 1500-1700'de **birkaç dev gövdenin
büyük çakışmaları** (ispanyol-peru ↔ mapuche 47.650 km² · kongo ↔ loango
39.934 km² · haudenosaunee ↔ ingiltere 38.000 km²).
📌 Yani bu kusur **sönmüyor, YOĞUNLAŞIYOR** — ve ekranda görünürlüğü artıyor.

## ③ Ö8 — OSMANLI BU ÖLÇÜMÜN EVRENİNDE HİÇ YOK (ölçüldü)

```
devletler_harita.js kimlik sayısı                          253
içinde "osman" geçen ya da tâbi/vassal olan kimlik            0
```
⇒ Yukarıdaki bütün örtüşme sayıları **yabancı ↔ yabancı**. Osmanlı doğrudan ve
tâbi gövdesi `donemler.js`in `o`/`v` alanlarında, **ayrı havuzda.**
🟢 Koordinatörün uyarısı (`denetle.py`nin `OSMANLI ↔ tâbi` muafiyeti ölçüte
alınmalı) **bu ölçüm için gereksizdi** — ve bunu varsayarak değil **sayarak**
söylüyorum. ⚠️ Ama uyarının kendisi doğru: Osmanlı havuzu **ayrıca** ölçülürse
o muafiyet şart olur. Bu ölçüm YAPILMADI (🟡).

⚠️ Ve şu ayrım duruyor: yabancı-yabancı örtüşmelerin kaçı **kasıtlı metbû-tâbi**
(ör. `altinorda ↔ novgorod`) hâlâ **ölçülmedi** — VERİ sorusu, geometri değil.

## ④ 1074 PETEKSİZ NOKTA — Ö7 TUTTU, ve tahminden TEMİZ çıktı

```
dosya                       nokta  peteksiz   oran   dosya tarihi
yerlesimler_afrika2.js        401      401    %100   2026-09-03
yerlesimler_kamerika.js       377      377    %100   2026-09-03
yerlesimler_okyanusya.js      118      118    %100   2026-09-03
yerlesimler_gamerika.js       112      112    %100   2026-09-03
yerlesimler_sibirya2.js        64       64    %100   2026-09-03
yerlesimler.js                792        2      %0   2026-09-03
```
```
peteksiz nokta taşıyan dosya : 6 (79 dosyanın)
TAMAMI peteksiz olan dosya   : 5 · 1.072 nokta
dağınık kalan                : 2 (Elbing · Torun — eski dosyaya sonradan eklenmiş satırlar)
```
⇒ **1074'ün 1.072'si (%99,8) BEŞ TAM PARTİ.** Sebep zaman değil **parti**:
Afrika-2 · Kuzey Amerika · Okyanusya · Güney Amerika · Sibirya-2 kümeleri
yayındaki geometri üretildikten sonra bağlanmış.
🔴 **Ve bunun anlamı H-0006'dan büyük:** yayındaki harita bugün **Amerika'nın,
Okyanusya'nın ve Sibirya-2'nin hiçbir noktasını çizmiyor.** Cânet o kümenin
tek bir üyesiydi.
🟢 Koşan üretim bunların hepsini kapsıyor olmalı — Ö1'in genişletilmiş hâli:
```
Ö9  Koşu indiğinde PETEKLER sayısı 2731'den ~3800'e çıkacak ve yukarıdaki beş
    dosyanın peteksiz oranı %100 → %0 olacak.  MAZERET YOK.
    NEREDEN: donemler.js PETEKLER · ADET (aynı betik: peteksiz.js)
```

## ⑤b EK 3 bu bölümün "kapsama" ve "kenar" sayılarını YENİDEN ÖLÇÜYOR — aşağıya bak

## ⑤ EK 2'NİN ÖLÇÜLEMEDİKLERİ
```
· Osmanlı havuzunun (donemler.js o/v) kendi içinde ve yabancılarla örtüşmesi.
· Yabancı-yabancı örtüşmelerin kaçının KASITLI metbû-tâbi olduğu.
· 1500/1700 için ALAN ayrımı (dikiş / kenar / kapsama) — yalnız 1281 Avrupa'da var.
```

---

# EK 3 — R14: KIYI KENARI AİLESİ

## 🔴 ÖNGÖRÜLER — ölçümden ÖNCE, dört alanla (① ne · ② mazeret · ③ nereden+birim · ④ hangi koşuda neye karşı)

```
Ö10 GÖRÜNÜRLÜK. 8 km'lik bir şerit, MapLibre'nin 512 px döşeme kuralıyla
    (m/px = 40.075.017 × cos φ ÷ (512 × 2^z)), φ=52° için:
        z4 ≈ 2,7 px · z5 ≈ 5,3 px · z6,5 ≈ 14 px · z8 ≈ 42 px
    ① BEKLİYORUM: z≤4'te görünmez, z≥6'da açıkça görünür.
    ② MAZERET YOK — bu saf aritmetik.
    ③ NEREDEN: hesap; ayrıca Emre'nin görsellerinin alt şeridindeki z değeri
       (H-0001-8 z6,5 · H-0001-9 z6,4 · H-0003-1 z5,3) DOĞRULAMA olarak.
    ④ Koşu bunu DEĞİŞTİRMEZ; ölçüm koşudan bağımsız.

Ö11 🔴 EN ÖNEMLİSİ — KENDİ TABANIMDAN ŞÜPHELENİYORUM.
    EK 1'de "boyasız" alanı ham `ne_10m_land` üzerinden ölçtüm. Oysa motorun
    kendi karası: ne_10m_land ∩ BOLGE → simplify(KARA_TOL=0,002) → 705 GÖL
    ÇIKARILMIŞ (uret_petek.py:460-521).
    ⇒ Benim "boyanmamış kara" dediğim alanın bir kısmı GÖL olabilir; göller
      motorun BİLEREK çıkardığı yerlerdir, kusur değildir.
    ① BEKLİYORUM: motorun kendi kara tanımıyla ölçülünce
        · KAPSAMA ailesi (127.232 km²) ≥%40 KÜÇÜLECEK — Ladoga ve Onega'nın
          benim listemde olduğundan şüpheleniyorum (29,8-32,9D/59,9-61,8K ve
          33,9-36,5D/60,9-62,9K kutuları tam onlar)
        · KENAR ailesi (85.765 km²) ≥%30 küçülecek (küçük göller · delta)
        · DİKİŞ ailesi (15.526 km²) <%10 değişecek — dikişler İÇ BÖLGEDE
    ② MAZERET YOK. Tuttuğu kadarı benim EK 1 ölçümümün bir kısmını çürütür
       ve bunu ölçmeden yazıyorum.
    ③ NEREDEN: kendi hesapladığım KARA (ne_10m_land − GOLLER) · km²
    ④ Koşu bunu DEĞİŞTİRMEZ (girdi maskesi ve göl dosyası aynı).

Ö12 SEBEP. Kenar ailesinin kalanı için dört aday vardı; ikisini ŞİMDİDEN
    eleyebiliyorum ve gerekçesini yazıyorum:
        · yuvarlama (3 ondalık ≈ 111 m) → km ölçeğini AÇIKLAYAMAZ, ELENDİ
        · KARA_TOL (0,002° ≈ 220 m)     → km ölçeğini AÇIKLAYAMAZ, ELENDİ
    ⇒ Kalan iki aday: (a) kıyı/ada peteklerinin hiç doğmaması (nokta yokluğu)
      (b) A1 alan koruyan tavanın kıyıda kesmesi.
    ① BEKLİYORUM: (a) baskın çıkacak — kalan kenar alanının çoğu, en yakın
       yerleşimi 100 km'den uzak kıyı kesimleri olacak.
    ② MAZERET VAR: ikisi birlikte de çalışabilir; ayrıştıramazsam öyle yazarım.
    ③ NEREDEN: kalan kenar parçalarının temsilî noktalarından en yakın
       yerleşim mesafesi · km
    ④ Koşu BUNU DEĞİŞTİRİR: 1.072 yeni nokta beş kıtaya iniyor. Avrupa'da
       az değişmesini bekliyorum (o beş dosya Avrupa değil).
```

## ① NE ÖLÇTÜM

### Ö11 — ve ÖLÇÜM SIRASINDA KENDİ TABANIMI BİR KEZ DAHA DÜZELTTİM

🔴 **İlk denemede yine yanlış taban kurdum ve fark ettim:** motorun göl kümesini
`data/goller.js`ten okudum — o dosyada **tek kayıt** var (tarihî Aral), Avrupa'da
sıfır göl çıktı ve sayılar hiç değişmedi. Motorun gerçek kuralı
(`uret_petek.py:489-506`) şu: **`ne_10m_lakes` içinde alanı > 0,02 derece² olan
göller, MODERN BARAJLAR hariç** (`Reservoir` + yıl ≥ 1900 ya da `dam_name`),
**artı** `goller.js`. Kuralı birebir uygulayınca:
```
Avrupa kutusunda göl : 119.804 km² · 111 poligon  (baraj diye elenen: 23)
```

**Taban düzelince üç ailenin üçü de küçüldü:**
```
                      EK 1 (ham ne_10m_land)      EK 3 (MOTORUN KARASI)
BOYASIZ TOPLAM        236.146 km²                 124.901 km²      −47%
① DİKİŞ                15.526 km² ·   95 parça      9.046 km² ·   96   −42%
② KENAR                85.766 km² · 2159 parça     36.345 km² · 2625   −58%
③ KAPSAMA             127.232 km² ·   19 parça     70.528 km² ·   11   −45%
```
```
Ö11 ① KAPSAMA ≥%40 küçülecek    → TUTTU (−45%). Ladoga ve Onega gerçekten
      benim listemdeydi; ikisi de motorun BİLEREK çıkardığı göller.
Ö11 ② KENAR ≥%30 küçülecek      → TUTTU (−58%)
Ö11 ③ DİKİŞ <%10 değişecek      → 🔴 ÇÜRÜDÜ. Dikiş de %42 küçüldü.
      SEBEBİ: "iki gövdeye değen ince şerit" ölçütüm GÖL KIYILARINI da
      yakalıyordu — iki devlet arasındaki bir göl, tam bir dikiş gibi görünür.
      En büyük "dikiş"im (2.131 km², altinorda+ceneviz, 33,7·45,3) Sivaş
      lagünüydü. Yani dikiş sayım da şişkindi.
```
📌 **Ders:** *"boyanmamış kara"* demek için önce **motorun karayı nasıl
tanımladığını** bilmek gerekiyor — ve bu, EK 1'de kendi yazdığım
*"`motor_kara` ile `ne_10m_land`i karıştırma"* uyarısının **bir kademe
derini**: doğru dosyayı seçmek yetmiyor, o dosyaya motorun **ne yaptığını** da
uygulamak gerekiyor.

### Ö10 — GÖRÜNÜRLÜK (saf aritmetik, MapLibre 512 px döşemesi, φ=52°)
```
genişlik      z4      z5    z6,5      z8
  2 km      0,7 px  1,3 px   3,8 px  10,6 px
  4 km      1,3     2,7      7,5     21,2
  8 km      2,7     5,3     15,0     42,5
 20 km      6,6    13,3     37,6    106,2
```
*(`js/app.js`in `kmDanZoom`u kullanılmadı — 256 px sabiti taşıyor ve iki kat
yanılıyor; koordinatörün uyarısı doğruydu, kendim hesapladım.)*

### 🔴 VE ASIL CEVAP — GENİŞLİK DAĞILIMI İKİ AİLEYİ TERS AYIRIYOR
```
KENAR ailesi (36.345 km²)                     DİKİŞ ailesi (9.046 km²)
 0-1 km  2457 parça · 29.944 km²  (%82)        0-1 km   63 parça ·  1.091 km² (%12)
 1-2 km   158 parça ·  4.585 km²               1-2 km   19 parça ·    751 km²
 2-4 km     9 parça ·  1.331 km²               2-4 km    8 parça ·  3.105 km²
 4-8 km     1 parça ·    484 km²               4-8 km    6 parça ·  4.099 km² (%45)
```
```
KENAR : kütlenin %82'si 1 km'DEN İNCE  ⇒ z6,5'te ~0,9 px · z5'te ~0,3 px
DİKİŞ : kütlenin %80'i 2-8 km bandında ⇒ z6,5'te 5,6-11,3 px
```

## ② NE ÇIKARDIM

🟢 **Koordinatörün sorduğu soru işi ikiye böldü ve cevabı NET: KENAR AİLESİ
BİR KUSUR DEĞİL, GÖRÜNMEZ BİR ARTEFAKT.**
82'si yüzde bir pikselin altında; ekranda **hiç oluşmuyor.** Emre'nin
gördüğü ve fotoğrafladığı şey **dikiş ailesi** — kütlesi tam da görünür
bantta (5-11 px) duran aile.

🔴 **Ve bu, EK 1'deki kendi vurgumu TERSİNE ÇEVİRİYOR.** Orada *"kıyı kenarı
dikişten 5,5 KAT büyük"* diye yazmış ve önceliği ona vermiştim. Düzeltilmiş
ölçüm: kenar dikişten **4 kat** büyük **ama görünür kısmı dikişin YİRMİDE
BİRİ**. ⇒ **Öncelik ölçüsü ALAN değil GÖRÜNÜR ALAN olmalıydı.**
📌 `§11`in *"ölçüm doğru, çıkarım yanlış"* ailesinin bu paketteki ikinci
vakası, ve ikisi de bende.

**Ö12 — kalan kenar alanının sebebi:** en büyük beş parça **Faroe Adaları**
(-6,5…-7,2D · 61,5-62,3K), en yakın yerleşim **341-390 km.** Yani nokta yok,
petek doğmamış. İlk 40 parçanın 10'unda en yakın nokta >100 km, ortanca 42,6 km.
⇒ **(a) kıyı/ada peteklerinin hiç doğmaması baskın.** (b) A1 tavanı ayrıca
çalışıyor olabilir; **ayrıştırmadım.**
🟢 Ve iki aday ölçmeden ELENDİ, gerekçesiyle: yuvarlama (111 m) ve `KARA_TOL`
(220 m) **km ölçeğini açıklayamaz** — ikisi de bir mertebe küçük.

## ③ REÇETE

```
R14 (DÜZELTİLDİ) — "sebebini ara" DEĞİL, "KAYDA GEÇ ve GEÇ":
   Kenar ailesi (36.345 km², %82'si <1 km) EKRANDA YOK. Motor işi AÇILMAZ.
   Yapılacak tek şey: `§11` gereği KAYIT — bir sonraki oturum bunu yeniden
   "keşfedip" iş sanmasın.
   ⚠️ TEK İSTİSNA: Faroe Adaları gibi 4+ km'lik parçalar (1 parça, 484 km²)
      görünür (z6,5'te 11 px) ve sebebi NOKTA YOKLUĞU ⇒ VERİ işi, motor işi
      değil. Halka sırasına göre (ONCELIK.md) sırası gelince nokta yazılır.
R15 Dikiş nöbetçisinin ölçütü GÖLDEN ARINDIRILSIN: "iki gövdeye değen ince
   şerit" testi göl kıyılarını da yakalıyor (Sivaş vakası). Nöbetçi, motorun
   KARA maskesini kullanmalı — ham `ne_10m_land`i değil.
   TEST: 1281 Avrupa dikiş 96 parça / 9.046 km² (şişkin 15.526 DEĞİL)
```

## ④ 🟡 EK 3'ÜN ÖLÇÜLEMEDİKLERİ
```
· Kenar ailesinde (b) A1 tavanının payı — (a) nokta yokluğundan ayrıştırılmadı.
· 5 km² altındaki 10.314 parça hâlâ ölçülmedi (eşiğin altı).
· Ölçüm yine yalnız 1281 · AVRUPA. Öteki kıtalarda kenar/dikiş oranı bilinmiyor
  ve 1.072 yeni nokta oralara iniyor ⇒ koşudan sonra AYNEN TEKRARLANMALI.
· Görünürlük hesabı düz Mercator piksel hesabıdır; MapLibre'nin gerçek
  render'ında antialiasing ve kenar çizgisi (`serbest kenar` katmanı) ince
  şeritleri GÖRÜNÜR kılabilir. Ekrandan doğrulanmadı.
```

## ⑤ 🔴 VE BU HÜKMÜN BİR BAĞIMLILIĞI VAR — kapanıştan sonra öğrenildi

Yukarıdaki son maddede *"`serbest kenar` katmanı ince şeritleri görünür
kılabilir"* diye bir ihtimal yazmıştım. Koordinatör bunun üzerine bir şey
bildirdi ve **hükmü doğrudan bağlıyor**:

> `serbest kenar` katmanı **şu an hiç yüklenmiyor** — MapLibre ifade hatası
> (`oturumlar/KOSU-SONRASI-KUYRUK.md` ⑥. bölüm).

⇒ *"Kenar ailesi görünmez"* hükmüm, **o katmanın bozuk olduğu bir ekran** için
verildi. Katman düzeltilince ince şeritlerin kenarı çizilecek ve **sub-piksel
bir şerit bile görünür hâle gelebilir.**
```
🔴 KURAL: R14'ün "artefakt, kusur değil" hükmü, `serbest kenar` DÜZELTİLDİKTEN
   SONRA YENİDEN SINANMALI. Sınav ucuz: aynı kutuya aynı yakınlıkta bak.
```
⚠️ Bu bir *"hüküm yanlıştı"* kaydı **değil**, bir **kapsam** kaydıdır: hüküm
bugünün ekranı için doğru, yarınınki için **ölçülmemiş.** İkisini karıştırmak,
doğru bir ölçümü yanlış bir zamana taşımak olurdu.
📌 Ve iki borç birbirine bağlıydı — bağ, ancak ikisi **ayrı ayrı yazıldığı
için** görünür oldu: biri arayüz kuyruğunda, öteki bu raporda. Tek bir yerde
dursalardı biri ötekini örterdi.

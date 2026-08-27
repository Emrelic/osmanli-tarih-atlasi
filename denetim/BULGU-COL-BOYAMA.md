# ÇÖL BOYAMA — Emre `0036/H-0001`, ölçüm raporu

**Oturum:** ÇÖL BOYAMA (aynı oturum tahtada `OPUS HAZIR KITA 86` adıyla da
yazdı) · **Tarih:** 27 Ağustos 2026 · **Koordinatör:** ORHANGAZİ
**Yetki:** yalnız bu dosya. `arac/uret_petek.py` ve `data/*` — **yazılmadı.**

---

## 0. ÜÇ CÜMLEDE

```
① Emre'nin gösterdiği yer, çöl tavanının kapsadığı yer DEĞİL.
   Tavan Mao·Gao·Timbuktu'yu (Batı Afrika) boşalttı; Emre SUDAN'ı gösteriyor.
   Ve bir kutusu (Bahr el-Gazâl) ÇÖL BİLE DEĞİL — bataklık.
② Boyayan şey "çöl tavanı yetmedi" değil: dolgu kapısının kimlik ataması
   `d:` ile `v:`yi TEK KOVAYA koyuyor (`_osm_aktif`, :3739) ⇒ Mısır'ın
   TÂBİ toprağının yanındaki boş petek "OSMANLI" diye, yani KOYU KIRMIZI
   boyanıyor. Emre'nin cümlesi birebir bu.
③ Bir kutunun sebebi TEK KAYITTA ve tek satırlık düzeltmesi var:
   Meşra er-Rek `bos:"hata"` — ve `hata`, motorun DOLDURABİLDİĞİ TEK cins.
```

---

## 1. EMRE'NİN GÖSTERDİĞİ YER — beş görselin künyesi

Metinde koordinat yok (*"buralarda anlamsız boş toprakların osmanlı
kırmızısına boyanması meselesi var"*), beş görselin de alt şeridi okundu.
**Beşi de aynı gün: 1821-08-19, madde "Kordofan ele geçirildi".**

| görsel | kutu | ne gösteriyor |
|---|---|---|
| H-0001-1 | 7,53-9,64K / 27,93-29,91D · z6.7 | **kopuk koyu kırmızı ada**, Vav/Bentiu arası |
| H-0001-2 | 5,67-25,05K / 24,16-39,51D · z4.8 | genel görünüm — Sudan'ın tamamı |
| H-0001-3 | 15,89-23,81K / 26,77-30,01D · z6 | Nil'in **batısı**, Libya/Nûbe çölü |
| H-0001-4 | 16,38-18,91K / 30,94-33,13D · z6 | Merevî·Kortî·Debbe kavsi |
| H-0001-5 | 19,14-22,52K / 31,68-36,48D · z6 | Ebû Hamed kuzeyi, Atbay |

---

## 2. ① NE ÖLÇTÜM

### 2.1 Kutuların içinde **tek bir doğrudan Osmanlı noktası yok**

`girdi.yukle()` — 2606 nokta / 55 dosya. 1821-08-19 için:

| kutu | nokta | hepsinin durumu |
|---|---|---|
| G1 7,53-9,64K/27,93-29,91D | 3 | Bentiu `bos:devletsiz` · **Meşra er-Rek `bos:hata`** · Vav `bos:devletsiz` — üçü de SAHİPSİZ |
| G3 15,89-23,81K/26,77-30,01D | 4 | Selîme · Zolat el-Hammâd · Lakiye Arbaîn · Vâdî el-Milk — dördü de `bos:devletsiz` |
| G4 16,38-18,91K/30,94-33,13D | 4 | Merevî · Kortî · Debbe = **tâbi[Mısır (Kavalalı)]** · Bayûda çölü `devletsiz` |
| G5 19,14-22,52K/31,68-36,48D | 3 | Nûbe çölü · Atbay çölü `devletsiz` · Ebû Hamed **tâbi[Mısır]** |

🔴 **Dördünde de `d:` (doğrudan Osmanlı) nokta sayısı SIFIR.**

### 2.2 Ama çıktı oraları DOĞRUDAN OSMANLI boyuyor

Üretilmiş geometri (`donemler.js` + `devletler_harita.js`, **25 Ağustos
06:21 damgalı — `kosu_25agu.log` ile aynı dakika, yani GÜNCEL**) nokta nokta
sorgulandı:

```
G1 (8,59 · 28,92)   → OSMANLI-d        G3 (19,85 · 28,39) → OSMANLI-d
G5 (20,83 · 34,08)  → OSMANLI-d        G4 (18,25 · 31,90) → TABI-v   (doğru)
Hartum (15,60 · 32,53) → TABI-v (doğru) · Kordofan (13,18 · 30,22) → TABI-v (doğru)
```

### 2.3 En yakın doğrudan Osmanlı noktası NE KADAR UZAKTA

1821-08-19'da 5-25K / 22-40D karesinde **doğrudan Osmanlı yalnız 11 nokta**,
**hepsi Kızıldeniz kıyısında**: Halâib · Muhammed Kol · Sevâkin · Sinkat ·
Trinkitât · Tokar · Hayyâ · Akīk · Derûdeb · Masavva · Arkîko.

```
G5'in boyalı çölünden en yakın d: nokta   →   308 km  (Halâib, k4)
G3'ün boyalı çölünden                     →   852 km  (Derûdeb, k4)
G1'in boyalı adasından                    →  1265 km  (Derûdeb, k4)
```
📌 `k4`ün A1 tavanı **140 km**. Boya 1265 km'ye gidiyor.

### 2.4 Gövdeler — ikisi ANAKARADAN KOPUK

O dönemde `o` (doğrudan Osmanlı) **133 ayrı parça**. Emre'nin kutuları:

| kutu | parça | alan | sınırlar |
|---|---|---|---|
| G1 | `o[25]` **kopuk** | **21.111 km²** | 7,6-9,5K / 28,3-29,8D |
| G3 | `o[23]` **kopuk** | **179.952 km²** | 15,8-23,5K / 26,9-30,3D |
| G5 | `o[15]` (Sevâkin ile AYNI parça) | 233.108 km² | 16,1-22,7K / 32,0-38,9D |

⇒ G5'te kıyı şeridi **Nil'e kadar (32,0D) içeri sarkmış**; G1 ve G3 ise
hiçbir Osmanlı toprağına değmeyen **yüzen adalar**.

---

## 3. ② ONDAN NE ÇIKARDIM — üç ayrı sebep, tek şikâyet

### 3.1 🟢 G1 ÇÖZÜLDÜ — sebep TEK KAYITTA, düzeltmesi TEK SATIR

```python
uret_petek.py:3564   DOLDURULABILIR_BOS = {"hata"}
```
Motor **yalnız `hata` cinsli boş peteği** komşusuna katabiliyor; `devletsiz`
· `kabile` · `veri-yok` · `insansiz` **korumalı** (kodun kendi yorumu bunu
madde madde yazıyor).

Ve G1'in üç noktasından biri tam o cinste:
```
Meşra er-Rek  8,417 / 29,283   bos:"hata"
  neden: "Bahrülgazâl iskelesi — Mısır ilhakı (1873) DEĞİŞMEZ 2 BORCU
          DOĞURACAĞI İÇİN YAZILAMADI"
```
🔴 **Kayıt bir hata değil; `hata` bir PARK YERİ olarak kullanılmış.** Yazan
oturum, gerçek sahiplik dönemini yazsa kronoloji senkron borcu doğacağı için
kaydı `hata` kovasına koymuş — ve o kova, motorun **doldurabildiği tek
kovaymış.** Komşuları Bentiu ve Vav `devletsiz` olduğu için korunuyor; Meşra
er-Rek korunmuyor.

⇒ **`o[25]`in 21.111 km²'si, Meşra er-Rek'in doldurulan peteğidir.**

📌 Bu, bir **defter kısayolunun boya kusuruna dönüşmesi**: bir denetimden
(Değişmez 2) kaçmak için seçilen etiket, başka bir mekanizmanın (dolgu
kapısı) tetiğine basmış. İki alet tek tek doğru, **aralarında sözleşme yok** —
motorun kendi yorumunun (`:1850`) *"A1 tavanı / yetim yüz vakasının İKİZİ"*
dediği sınıfın yenisi.

### 3.2 🔴 KOYU KIRMIZI OLMASININ SEBEBİ — `d:` ile `v:` tek kovada

```python
uret_petek.py:3739
def _osm_aktif(y, a):
    return (any(... for dn in y["d"]) or any(... for dn in y["v"]))
...
:3623   if _osm_aktif(y, a):  kim = "OSMANLI"
```
Dolgu kapısı puanı **`d:` ve `v:` noktalarından birlikte** topluyor ve
kazananı **`"OSMANLI"`** diye yazıyor. `"tâbi"` diye bir seçeneği **yok.**

⇒ 1821 Sudan'ında etraftaki gerçek noktalar **tâbi[Mısır (Kavalalı)]**
olmasına rağmen, dolan petek **doğrudan Osmanlı** çıkıyor.
**Emre'nin cümlesi birebir bu: "boş toprakların osmanlı KIRMIZISINA
boyanması".** Açık ton beklenirdi, koyu geliyor.

### 3.3 🔴 ÇÖL TAVANI BU İŞİ YAPAMAZ — motorun KENDİ yorumu söylüyor

Şartname *"mekanizma 730 bin km² boşaltmış ama yetmemiş"* diyor. Ölçtüm,
**mekanizmanın adı yanlış konmuş** — `uret_petek.py:789`:

> *"📌 VE ÇÖL TAVANI (:1549) BUNU YAPMIYOR, YAPAMAZ: `COL_TAVAN_KM = 300`
> iken k0=280 · k3=280 · k4=140 hepsi ALTINDA ⇒ o kademelerde A1 zaten daha
> içeride, çöl tavanı YAPISAL OLARAK hiçbir şey kesemez (2283/2356 nokta).
> **Sahra çemberlerini adı 'çöl tavanı' olan şey DEĞİL, A1 çiziyor.**"*

Ve kapsamı da dar (`:2177`):
```python
if (f["properties"].get("FEATURECLA") or "") != "Desert":  continue
```
⇒ Tavan yalnız Natural Earth'ün **"Desert"** poligonlarının içinde çalışır.

🔴 **G1 (7,5-9,6K) BİR ÇÖL DEĞİL — Sudd bataklığı / Bahr el-Gazâl.**
Natural Earth orayı Desert saymaz. ⇒ **Çöl tavanı G1'e ne uğradı ne
uğrayabilir.** Şartnamenin ③. sorusunun cevabı: *kusur çölde değil, çölün
dışında.*

📌 `CLAUDE.md §11` — *"örneklem temiz çıktı diye dışını temiz ilan etme"* —
canlı hâli: tavan Timbuktu'da çalıştı, Emre'nin baktığı yere hiç uğramadı.

### 3.4 ⚠️ G3 ve G5 — SEBEBİ DOĞRULAMADIM

G3'ün dört noktası da `devletsiz` ⇒ dolgu kapısından **korunuyorlar**. Yine de
`o[23]` 179.952 km² doğrudan Osmanlı. G5 aynı şekilde.

**İki aday, ikisini de ÖLÇMEDİM:**
```
(a) A1 tavanı ALANI korur, MESAFEYİ sınırlamaz — motorun kendi kuralı:
    "Tavan ŞEKİL değiştirir, BOYUT değiştirmez: komşusu uzak olan yöne
     uzanır… ve BOYADIĞI ALAN AYNI KALIR" (:793)
    ⇒ İç tarafta komşusu olmayan 11 kıyı noktası, alanlarını koruyarak
      batıya doğru uzuyor olabilir. (11 × k4 ≈ 61.575 km² ≈ 677.000 km²;
      o[15] tek başına 233.108 km² — büyüklük mertebesi tutuyor.)
(b) Kapı karnesinin DÖRDÜNCÜ SINIFI (:3660 civarı) — `_sahipli(y,g)` yanlış
    olan kayıtlar için ayrı bir dal var; okudum ama kapsamını ölçmedim.
```
🔴 **İkisini de motor koşusu ayırt eder ve motor bana kapalı.** Hüküm
vermiyorum.

---

## 4. ÇARE — veri tarafı benim, motor tarafı koordinatörün

### 4.1 🟢 VERİ — ölçülmüş, tek satır, G1'i kapatır

```
Meşra er-Rek (8,417 / 29,283)
   bugün    bos: "hata"        → motorun doldurabildiği TEK cins
   öneri    bos: "kabile"      → komşuları Bentiu (Nuer) ve Vav (Dinka/Cur)
                                 ile aynı sınıf
```
**CİNS SINAVI uygulandı — kaynak KONUŞUYOR:** kaydın kendi `neden:` metni
*"Bahrülgazâl iskelesi"* diyor ve komşu iki kayıt Nuer/Dinka ülkesi olduğunu
yazıyor. Susan bir kaynak değil ⇒ `veri-yok` **değil**. Devlet teşkilâtı yok
ama aşiret yapısı var ⇒ **`kabile`** (`devletsiz` de savunulur; ikisi de
korumalı, boya sonucu aynı).
⚠️ `neden:` metnindeki *"Değişmez 2 borcu"* notu **korunmalı** — silinirse
niçin dönem yazılmadığı kaybolur.
**Beklenen etki: `o[25]` = 21.111 km² doğrudan Osmanlı yok olur.**
⚠️ Bu bir **beklenti, ölçüm değil** — koşusuz doğrulanamaz.

### 4.2 🟢 VERİ — dolgu noktası önerisi (G3 ve G5 için, G1'e GEREK YOK)

En yakın kayda **≥100 km** olan boşluklara, 200 km aralıklı ızgara ile:

| gövde | önerilen dolgu | koordinatlar |
|---|---|---|
| `o[23]` Nûbe/Libya çölü | **4** | 16,70/29,60 · 18,50/27,80 · 18,50/29,60 · 22,10/27,80 |
| `o[15]` Nûbe-Atbay | **5** | 17,00/34,70 · 18,80/34,70 · 20,60/38,30 · 22,40/34,70 · 22,40/38,30 |
| `o[25]` Bahr el-Gazâl | **0** | — bölge zaten yeterince yoğun (en yakın kayıt her yerde <100 km) |

**3 km kuralı:** dokuzunun da en yakın kaydı **102-192 km** — ihlal yok.
**Cins:** dokuzu da `kasitli_bosluk:true` · `bos:"devletsiz"` (Nûbe ve Atbay
çöllerinin mevcut kayıtları aynı gerekçeyi taşıyor: *"Nil vadisi dışındaki bu
alan tarih boyunca yerleşik nüfustan ve devlet denetiminden yoksundur"*).
⚠️ **Ama 3.4'teki sebep doğrulanmadan bu dokuz nokta işe yaramayabilir** —
mevcut dört/üç nokta zaten `devletsiz` ve tutmamış. **Önce sebep ölçülsün.**

### 4.3 🔴 MOTOR — TARİF, uygulama DEĞİL (`uret_petek.py` bana kapalı)

```
① DOLGU KAPISINA TÂBİ KADEMESİ  (:3623)
   Bugün kazanan hep "OSMANLI". Öneri: puanı veren noktaların çoğunluğu
   `v:` ise dolan petek de TÂBİ yazılsın — `_osm_aktif` iki kademeyi
   ayırmadan bunu yapmak mümkün değil, ayrılması gerekir.
   ⇒ Emre'nin "kırmızıya boyanması" şikâyetinin doğrudan karşılığı budur.

② `hata` CİNSİNİN DOLDURULABİLİR OLMASI  (:3564)
   Mantık doğru ("kaydın kendi itirafı"). Ama Meşra er-Rek gösterdi ki
   `hata` bir PARK YERİ olarak da kullanılıyor. Öneri: ya ayrı bir
   `park`/`borclu` cinsi açılsın, ya `hata` kayıtları koşuda ADIYLA
   listelensin ki park edilmiş olan görülsün.

③ A1'İN ALAN KORUMASI  (:793) — G3/G5 için, ÖNCE ÖLÇÜLMELİ
   "Alan korunur" kuralı, iç tarafta komşusu olmayan KIYI noktalarında
   gövdeyi 800 km içeri uzatıyor olabilir. Ölçüm önerim: 11 Kızıldeniz
   noktasının A1 sonrası alanları ve en uzak menzilleri koşuda basılsın.
```

---

## 5. NE ÖLÇMEDİM — açıkça

1. **G3 ve G5'in sebebi.** İki aday adlandırıldı, **hiçbiri ölçülmedi.**
2. **4.1'in etkisi.** `o[25]`in yok olacağı bir **beklenti**; koşu gerekir.
3. **4.2'nin işe yarayıp yaramayacağı.** Mevcut `devletsiz` noktalar
   tutmadığına göre yenileri de tutmayabilir — 3.4 çözülmeden bilinmez.
4. **Diğer 129 `o` parçası.** Yalnız Emre'nin dört kutusuna bakıldı;
   **133 parçanın kalanı taranmadı.** Aynı desen başka coğrafyalarda da
   olabilir (`§11`: örneklem ≠ evren).
5. **Paketin öteki 16 maddesi.** Yalnız `H-0001` ölçüldü.
6. **`hata` cinsli öteki kayıtlar.** Veride 8 tane var; **yalnız Meşra
   er-Rek'e bakıldı**, ötekilerin de park yeri olup olmadığı ölçülmedi.

---

## 6. EK TARAMA — §5'in 4. maddesi kapatıldı, ve bulgu Emre'nin kutularından BÜYÜK

*(27 Ağustos, koordinatöre haber verilerek başlandı)*

### 6.1 133 parçanın TAMAMI tarandı

Ölçüt: parçanın ağırlık merkezi, en yakın `d:` noktadan **300 km'den uzak**
mı (k1=700 hariç bütün kademelerin A1 tavanı ≤ 280 km).

**6 / 133 parça şüpheli · toplam 791.491 km².**

| parça | km² | en yakın `d:` nokta | bölge | içindeki dolgu |
|---|---|---|---|---|
| `o[131]` | 248.370 | **Oran · 1509 km** | 22,8-28,1K / 6,3-13,7D — Fizan/Murzuk | 4 × `devletsiz` |
| `o[68]` | 180.324 | **İsfakiye (Girit) · 781 km** | 25,9-30,7K / 18,9-26,1D — Serîr | 2 × `devletsiz` |
| `o[23]` | 179.952 | Derûdeb · 829 km | Nûbe/Libya çölü — **Emre'nin G3'ü** | 3 × `devletsiz` |
| `o[130]` | 139.837 | **İsfakiye (Girit) · 1302 km** | 23,1-27,0K / 14,9-19,2D — Vâv el-Kebîr | 2 × `devletsiz` |
| `o[22]` | 21.898 | Derûdeb · 417 km | Bayûda çölü — **Emre'nin G4 civarı** | 1 × `devletsiz` |
| `o[25]` | 21.111 | Derûdeb · 1269 km | Bahr el-Gazâl — **Emre'nin G1'i** | 1 × **`hata`** |

🔴 **Emre'nin dört kutusu bu kümenin ancak ÜÇTE BİRİ.** Kalan 568.531 km²
Libya'da ve Emre henüz oraya bakmadı.
🔴 **Ve `hata` açıklaması yalnız `o[25]`i kapsıyor — 21.111 km², yani
%2,7.** Öteki beşinin içindeki dolgu noktaları `devletsiz`, yani dolgu
kapısından **korumalı**. ⇒ **Korumanın kapsamı, dolgu noktasının KENDİ
peteğiyle sınırlı; peteğin dışında kalan çöl korumasız.**

### 6.2 🟢 ZAMAN TARAMASI — kusur GENEL DEĞİL, DÖNEMSEL

| gün | `o` parça | şüpheli | şüpheli km² | Libya'da `d:` nokta |
|---|---|---|---|---|
| 1400-06-15 | 13 | 0 | 0 | — |
| 1550-06-15 | 129 | 0 | 0 | — |
| 1650-06-15 | 167 | 0 | 0 | — |
| **1700-06-15** | 149 | **0** | **0** | **47** (Trablus·Misrata·Bingazi·Derne) |
| **1780-06-15** | 154 | 2 | 388.206 | **1** (yalnız Sellûm) |
| **1800-06-15** | 153 | 2 | 388.215 | **1** |
| **1830-06-15** | 90 | **6** | **791.491** | **0** |
| **1840-06-15** | 81 | 3 | 222.967 | **39** |
| 1860-06-15 | 104 | 3 | 222.967 | 40 |
| 1900-06-15 | 91 | 0 | 0 | — |

**① NE ÖLÇTÜM:** şüpheli alan, Libya'daki doğrudan Osmanlı nokta sayısıyla
**birebir ters orantılı.** 47 nokta varken sıfır; 1 noktaya düşünce 388 bin
km²; sıfıra düşünce 791 bin km²; 39'a dönünce 223 bine iniyor.

**② ONDAN NE ÇIKARDIM:** bu, `3.2`deki `_osm_aktif` teşhisinin **bağımsız
doğrulamasıdır.** Kusur tam olarak, çevredeki gerçek noktaların `d:` değil
**`v:` olduğu** dönemde doğuyor — yani Trablusgarp'ın **Karamanlı ocaklığı**
(tâbi) olduğu 1711-1835 aralığında. 1835'te Osmanlı doğrudan idareye dönünce
Libya yeniden `d:` nokta kazanıyor ve leke küçülüyor.
⇒ Dolgu kapısı `v:` noktalardan puan topluyor, ama kazananı **"OSMANLI"**
(doğrudan) yazıyor. **Etrafta `d:` nokta olduğunda kimse fark etmiyor;
olmadığında koca çöl koyu kırmızı oluyor.**

⚠️ **1840/1860'ta kalan 222.967 km² AÇIKLANMADI** — Libya düzeldiği hâlde
kalıyor, yani Sudan tarafındaki (Mısır = `v:` Kavalalı) artık. **Ölçmedim.**

### 6.3 Bunun MOTOR önerisine etkisi

`4.3 ①` (dolgu kapısına tâbi kademesi) artık **en yüksek öncelikli kalem**:
tek başına altı parçanın altısını da doğru kademeye taşır. `4.1` (Meşra
er-Rek) yalnız %2,7'sini kapatır — **doğru ama küçük.**
📌 Ve `4.2`nin (yeni dolgu noktası) beklenen faydası da düştü: koruma
noktanın kendi peteğiyle sınırlı olduğu için, dokuz yeni nokta yalnız kendi
peteklerini kurtarır — 791 bin km²'yi değil.

---

## 7. §3.4 KAPANDI — ve iki çıkarımım daha çürüdü

*(27 Ağustos 03:00-03:15, koordinatörün isteği üzerine)*

### 7.1 ① Hangi noktadan emiliyorlar? — **HİÇBİRİNDEN. Petekler ZATEN ONLARIN.**

Altı şüpheli parçanın içine ızgara atıp her hücrenin **en yakın noktasını**
ölçtüm:

| parça | örneklenen hücre | hücrelerin sahibi |
|---|---|---|
| `o[23]` | 400 | **398'i `devletsiz` dolgu noktalarına** (Vâdî el-Milk…) |
| `o[131]` | 379 | 372'si `devletsiz` (Vâdî Tanezzûft…) |
| `o[130]` | 507 | 490'ı `devletsiz` (Vâv el-Kebîr…) |
| `o[22]` | 410 | 406'sı `devletsiz` (Bayûda çölü) |
| `o[68]` | 323 | 176 `devletsiz` + 121 `kur:` öncesi |
| `o[15]` | 300 | 162'si **gerçekten `d:` Derûdeb'in** + 116 `devletsiz` |

🔴 **Bu, `§6.1`de yazdığım çıkarımı ÇÜRÜTÜYOR.** Orada *"korumanın kapsamı
dolgu noktasının kendi peteğiyle sınırlı, peteğin dışı korumasız"* demiştim.
**Yanlış:** hücreler tam da dolgu noktalarının **kendi peteklerinin
içinde** — ve yine de boyanıyorlar. Uzaktan emilme yok.

🟢 Ve `o[15]`in yarısı (162/300) **meşru**: Derûdeb gerçekten `d:` ve 135 km
ötede. Yani o parçanın tamamı kusur değil.

### 7.2 ② `devletsiz` niçin tutmuyor? — **TUTMASI GEREKMİYORMUŞ. TASARIM BÖYLE.**

`get("bos")` bütün motorda **yalnız iki satırda** sorgulanıyor
(`uret_petek.py:3673-3676`) ve ikinci dal şu:

```python
if (y.get("bos") in DOLDURULABILIR_BOS                    # "hata"
        or (y.get("tur") == "bolge"                       # ← İKİNCİ DAL
            and y.get("bos") in (None, "", "devletsiz"))
        or _dordurcu):                                    # kur:/bit: öncesi
    bos_ix.append(j)
```

⇒ **`bos:"devletsiz"` KORUMALI DEĞİL — `tur:"bolge"` ise DOLDURULABİLİR.**
Ve kodun kendi yorumu bunun **niçin** böyle olduğunu yazıyor, Emre'nin
kendi cümlesiyle:

> *"Eğer BOŞ ÇÖL ise, orada siyasî yapı yok ise ya da aşiret yapısı filan yok
> ise, o zaman **benim puanlamam boyasın**. Böylece anlamsız girintiler
> kapanmış olur."* — Emre, 20 Ağustos 2026

Ölçtüm: `tur:"bolge"` + `bos:"devletsiz"` **tam 35 kayıt**, ve altı şüpheli
parçanın dolgu noktalarının **hepsi** bu sınıfta.

**198 `kasitli_bosluk` kaydının doldurulabilir olanı: 42**
```
35  tur=bolge · bos=devletsiz     ← Emre'nin "boş çöl"ü, KASTEN doldurulur
 7  bos=hata  (3 sehir · 2 kale · 2 liman)
```
🟢 Ve koordinatörün uyguladığı yama **doğru çalışmış**: Meşra er-Rek artık
`tur:liman` + `bos:kabile` ⇒ **korumalı**, yani doldurulamaz.

### 7.3 ③ HÜKÜM — dokuz dolgu noktası: **HAYIR. Ters etki yapar.**

**① NE ÖLÇTÜM:** yeni dolgu noktaları `tur:"bolge"` + `bos:"devletsiz"`
olarak yazılırdı; o kombinasyon **doldurulabilir** kümenin ta kendisi.

**② ONDAN NE ÇIKARDIM:** dokuz nokta boyalı alanı **azaltmaz, artırabilir** —
kapıya ödüllendireceği daha çok petek verir. `4.2` önerimi **geri
çekiyorum.**
⚠️ Onları `bos:"kabile"` yazarak korumalı yapmak mümkündü ama **yalan
olurdu**: Sahra'nın iç kesimi için "aşiret yapısı var" demek kaynağın
söylemediği bir şeydir, ve Emre'nin 20 Ağustos şartını da çiğnerdi.

### 7.4 🔴 ASIL MESELE: EMRE'NİN İKİ TALİMATI ÇARPIŞMIYOR — ARADA BİR KADEME EKSİK

```
20 Ağustos   "boş çöl ise PUANLAMAM BOYASIN, anlamsız girintiler kapansın"
27 Ağustos   "anlamsız boş toprakların OSMANLI KIRMIZISINA boyanması meselesi var"
```
İkisi **çelişmiyor.** Emre çölün **doldurulmasına** itiraz etmiyor —
**KOYU KIRMIZI** olmasına itiraz ediyor. Ve koyu olmasının tek sebebi
`_osm_aktif`in (`:3739`) `d:` ile `v:`yi tek kovaya koyup kazananı hep
`"OSMANLI"` yazması.

⇒ **HÜKÜM: Emre'nin iki talimatını AYNI ANDA sağlayan tek çare motordadır.**
Hiçbir veri düzeltmesi bunu yapamaz:
```
dolguyu KAPATMAK      → 20 Ağustos talimatını çiğner ("girintiler kapansın")
dolguyu AÇIK BIRAKMAK → 27 Ağustos şikâyetini üretir (koyu kırmızı)
kapıya TÂBİ kademesi  → İKİSİ DE sağlanır          ← tek çıkış
```
📌 Ve bu, `4.3 ①`i *"en büyük çare"*den ***"tek çare"***ye yükseltiyor.

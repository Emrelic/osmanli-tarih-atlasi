# HydroSHEDS lisans doğrulaması — kural 3 açık kaleminin ön koşulu

**Yazan:** COĞRAFYA (G) · **Tarih:** 31 Temmuz 2026
**Neden:** `COGRAFYA-COL-TAVANI.md §7.1` — kural 3 (dağın sırtından bölme) için
su bölümü çizgisi önerildi; *"lisansı doğrulanmadan tek satır yazma"* şartı vardı.

---

## 0. YÖNTEM — `404: Not Found` vakasının tersi

`veri-kaynak/KAYNAK-LICENSE.md` bir dönem `404: Not Found` içeriyordu: indirme
başarısız oldu, **hata sayfası lisans diye dosyalandı** ve depoda "lisans var"
görüntüsü oluştu. Bu iş o hatanın tekrarı olmasın diye şöyle yapıldı:

1. Arama sonucu **kanıt sayılmadı** (özet, kaynak metin değil).
2. `hydrosheds.org/terms-of-use` okundu → **veri lisansı orada değil**;
   o sayfa *site içeriği* için "personal, non-commercial use only" diyor.
   ⚠️ **Bu cümleye dayanıp "kullanılamaz" demek yanlış olurdu.**
3. Ürün sayfası lisansın teknik belgenin Appendix A'sında olduğunu söyledi.
4. PDF indirildi, metin akışları elle açıldı (`zlib`), **Appendix A'nın kendisi
   okundu.** Aşağıdaki alıntılar o metinden.

---

## 1. NE DİYOR — belgeden

**Kullanım serbestliği** (§8.1 civarı):

> *"HydroSHEDS data are free for non-commercial and commercial use. For
> specific restrictions and use requirements see the License Agreement
> provided in Appendix A."*

**Dağıtım hakkı** (Appendix A §2.1.2 *Distribution and Sublicense Rights*):

> *"A worldwide, nonexclusive, non-transferable, paid-up right and license to
> (i) market and distribute the Licensed Materials **incorporated into any
> Derivative Works** to End Users, subject to the terms and conditions of an
> end user license agreement **with terms that are at least as protective of
> the Licensed Materials as are the terms of this License**…"*

**🔴 Yasak** (aynı bölüm):

> *"**In no event shall Licensee license or distribute the Licensed Materials
> as a stand-alone product.**"*

**Atıf** (§8.2):

> *"We kindly ask users to cite HydroSHEDS in any published material produced
> using this data. If possible, online links to the HydroSHEDS website should
> be provided."*
>
> Lehner, B., Verdin, K., Jarvis, A. (2008): *New global hydrography derived
> from spaceborne elevation data.* Eos, Transactions, 89(10): 93-94.

---

## 2. HÜKÜM — üç madde

### ✅ Bulaşıcı DEĞİL

Share-alike / copyleft **yok**. ODbL ve CC-BY-SA'nın aksine türev veriyi aynı
lisansla açmaya zorlamıyor. Kullanıcının *"kontrol bizde kalsın"* şartını bu
yönden **bozmuyor**.

### ⚠️ Ama KAMU MALI DA DEĞİL

Natural Earth hiçbir şart dayatmıyor; HydroSHEDS **şartlı bir lisans**.
İki şart bu projenin kurulumuyla doğrudan çakışıyor:

**a) Ham veriyi depoya koymak.** `veri-kaynak/` git'e commit'li ve GitHub'da
**herkese açık.** Ham HydroBASINS dosyalarını oraya koymak, Natural Earth
dosyalarında yaptığımızın aynısı olur — ama NE kamu malı, bu değil. Ham havza
poligonlarını açık bir depoda yayınlamak *"stand-alone product"* yasağına
yaklaşır: veri türev bir esere gömülmüş olmaz, **olduğu gibi** dağıtılmış olur.

**b) "En az bu kadar koruyucu" son kullanıcı sözleşmesi.** Türev eseri dağıtmak
serbest ama *"an end user license agreement with terms that are at least as
protective"* şartına bağlı. **Halka açık statik bir sitede ziyaretçiyle
sözleşme yoktur.** Bu şartın nasıl karşılanacağı belirsiz.

### 📌 Bu bir hukuk görüşü değil

Metni okudum ve çakışan maddeleri işaretledim. *"Türetilmiş sınır çizgisi
`donemler.js` içinde ne sayılır"* sorusunun cevabını veremem — karar
kullanıcının.

---

## 3. ÖNERİ — iki yol

**Yol A — HydroSHEDS'i yalnız HESAPLAMADA kullan, dağıtma.**
Havza sınırları yerel olarak indirilir, su bölümü çizgileri hesaplanır,
**yalnız üretilmiş yaslama hattı** depoya girer. `veri-kaynak/`'e ham dosya
KONMAZ; `arac/girdi.py` gibi bir yerde "bu dosyayı elle indir" notu durur.
· ✅ stand-alone yasağını tetiklemez
· ⚠️ (b) maddesi yine de tam kapanmaz — türev eser dağıtılıyor
· ⚠️ motorun *"veri-kaynak olmadan harita üretilemez"* güvencesini bozar
  (`veri-kaynak/README.md`: dosyalar tam bu yüzden depoya alınmıştı)

**Yol B — su bölümü çizgisini KENDİMİZ türet, kamu malı yükseklik modelinden.**
HydroSHEDS'in kendisi **SRTM**'den türetilmiş; SRTM (NASA) kamu malı. Aynı işi
kendi penceremiz için yaparsak sonuç **bizim eserimiz** olur ve NE gibi şartsız
kalır.
· ✅ kullanıcının *"uhdemizde ve kontrolümüzde kalsın"* şartına tam uyar
· ✅ depo bütünlüğü korunur
· ❌ pahalı: DEM indirme + hidrolojik koşullama + havza çıkarımı
· ❌ ölçülmedi — pencere için DEM boyutu ve işlem süresi bilinmiyor

---

## 4. YOL B'NİN MALİYETİ — ÖLÇÜLDÜ

Kullanıcı dağ hatlarına baktı: *"çok basit ve sınırlı değil mi — Google'ın
topografik haritasında her tepe, her yükselti mevcut."* Haklı, ve cevap
"yapamayız" değil. Aşağıdaki beş başlık ölçüldü.

### 4.0 🔴 ÖNCE: Google'ın haritası neden işimize yaramaz

Google'ın topografik haritası **bir resimdir** (raster kare). Güzel görünür ama
**bir poligon resme yaslanamaz** — motorun ihtiyacı piksel değil, koordinatı
olan **vektör hat**. Üstelik lisansı zaten türev üretmeye kapalı.

Bugünkü `sirt_motorun`un "basit" görünmesinin sebebi de bu değil: o katman bir
arazi modeli **değil**, Natural Earth'ün **etiket lekesi** — dağın etrafını
dolaşan kapalı halka. Ölçüldü (`COGRAFYA-COL-TAVANI.md §7.1`): motor dağ
kütlesinin içine yalnızca **%22** giriyor, yani sırta değil **eteğe** yaslıyor.

> Sorun çözünürlük değil, **cins**: elimizdeki veri yükseklik modeli değil,
> isim etiketi. Doğrusunun maliyeti aşağıda.

### 4.1 ✅ ÇÖZÜNÜRLÜK TAVANI — 3 ark-saniye tam yerinde

Petek koordinatları dosyaya **3 ondalıkla** yazılıyor (`uret_petek.py:1349`)
→ `0,001°`. Enleme göre metre karşılığı:

| Enlem | 3″ boylam | 3″ enlem | 0,001° boylam | 0,001° enlem |
|---|---|---|---|---|
| 5° | 92 m | 93 m | 111 m | 111 m |
| 35° | 76 m | 93 m | 91 m | 111 m |
| 60° | 46 m | 93 m | 56 m | 111 m |

⇒ **Çıktı ızgarası, DEM hücresinden kabaca 1,2× KABA.** Yani:
- **3″ (~90 m) tam tavanda** — koordinatörün öngörüsü doğrulandı
- **1″ (~30 m) israf** — fazlası yuvarlamada kaybolur

⚠️ **Sırtın tepesi kaçar mı?** Hayır. Yuvarlama yanal olarak en çok ±55 m hata
katıyor; 90 m'lik bir DEM'den çıkan sırt konumunun kendi belirsizliği zaten
~90 m. Yani **bağlayıcı kısıt yuvarlama değil, DEM çözünürlüğü** — ikisi denk.
Karşılaştırma: bugünkü hata **~42 km** (etek vs sırt). İyileşme ~400 kat.
📌 Daha ince DEM ancak yuvarlama da 4 ondalığa çıkarılırsa anlam kazanır; o
ayrı bir karar ve `donemler.js`'i büyütür.

### 4.2 ✅ KAYNAK VE LİSANS — SRTM 3″, CC0

**Kuzey şerit sorunu YOK.** Koordinatör 60-62°K'da SRTM'in olmadığını
hatırlattı. Ölçtüm:

```
tüm sınır köşeleri içinde 60°K üzeri:  0 / 12.549   (%0,0)
```

Pencere 62°K'ya çıkıyor ama **çizilmiş sınırların hiçbiri 60°K'nın üstünde
değil.** ASTER GDEM / Copernicus GLO-90 gerekmiyor; tek kaynak yeter.

**Lisans — iki kademe okundu:**

`SRTMGL3` katalog sayfası (NASA Earthdata):
> *"This dataset is openly shared, without restriction, in accordance with the
> EOSDIS Data Use and Citation Guidance."* · kapsam **N: 60 · S: −56**

Yöneten belge (EOSDIS Data Use Guidance) — asıl metin:
> *"Unless the content is marked with a use restriction or license, data
> provided from a NASA-led mission are licensed as **Creative Commons Zero
> (CC0)**."*
>
> Tek sınırlama: *"NASA material may not be used to suggest or imply
> endorsement by NASA … of a commercial product."*
> Atıf **isteniyor, şart değil**: *"NASA should be acknowledged as the source
> of the material where applicable."*

⇒ 🟢 **CC0 = kamu malı ithafı.** Natural Earth ile aynı statü: şartsız,
bulaşıcı değil, EULA istemiyor, açık depoda dağıtılabilir.
**Kullanıcının "kontrol bizde kalsın" şartını tam karşılıyor** — HydroSHEDS'i
eleyen iki teknik şartın ikisi de burada yok.

📌 Önerilen atıf: *NASA JPL (2013). NASA Shuttle Radar Topography Mission
Global 3 arc second. NASA LP DAAC. doi:10.5067/MEASURES/SRTM/SRTMGL3.003*

### 4.3 ✅ HACİM — ölçüldü

Pencere `box(-12, 1.5, 62, 62)` = 74° × 60,5° = **4.477 derece²**

| Çözünürlük | Hücre | Ham (int16) |
|---|---|---|
| 1″ (~30 m) | 58,0 milyar | **108,1 GB** |
| **3″ (~90 m)** | 6,45 milyar | **12,0 GB** |
| 7,5″ (~225 m) | 1,03 milyar | 1,9 GB |

- **Kara oranı %75,6** → 3″ karaya kırpılmış: **9,1 GB**
- Disk: **748 GB boş** — hacim kısıt değil

### 4.4 🟢 KISMİ YOL — en önemli bulgu, maliyeti 40 kat düşürüyor

Dağ poligonları pencerenin **%9,7'sini**, karanın **%12,8'ini** kaplıyor.
Sınır köşelerinin **%21,7'si (2.725 / 12.549)** dağ içinde.

| Bölge | Dağ içi köşe | Toplam köşe | Oran | Dağ alanı | 3″ DEM |
|---|---|---|---|---|---|
| Kuzey Afrika | 606 | 1.063 | **%57,0** | 69,3°² | 0,19 GB |
| Kafkasya | 386 | 1.021 | **%37,8** | 26,6°² | 0,07 GB |
| Avrupa | 608 | 1.615 | %37,6 | 99,9°² | 0,27 GB |
| Sahra/güney | 221 | 1.069 | %20,7 | 120,4°² | 0,32 GB |
| Zagros/İran | 110 | 600 | %18,3 | 36,8°² | 0,10 GB |
| Balkanlar | 475 | 2.862 | %16,6 | 29,0°² | 0,08 GB |
| Anadolu | 319 | 2.463 | %13,0 | 13,0°² | 0,03 GB |
| **Kuzeydoğu** | **0** | 927 | **%0** | 23,1°² | — |

⇒ **Bütün dağ alanları toplamı ~1,1 GB; sınırın en çok dağdan geçtiği dört
bölge (Balkan · Anadolu · Kafkasya · Zagros) toplam 0,28 GB.**
12 GB yerine **0,3 GB** — kısmî yol tüm pencereden ~40 kat ucuz.

📌 Ve `Kuzeydoğu`'da dağ içi köşe **sıfır** — orası hiç işlenmeyecek, bu da
60°K sorununun neden hiç doğmadığını ikinci kez doğruluyor.

### 4.5 ⚠️ SÜRE VE ÇIKTI BOYUTU — ÖLÇEMEDİM, sebebi somut

**Ortamda hidroloji aracı YOK.** Sınandı:
```
numpy VAR · gdal yok · rasterio yok · richdem yok · whitebox yok · pysheds yok
gdalinfo: command not found
```
⇒ Süreyi ölçmek için önce **araç kurulumu** gerekiyor (GDAL + çukur doldurma /
akış yönü / havza kütüphanesi). Bu, maliyetin ölçülmemiş **tek** kalemi.

🔴 **Tahmin yazmıyorum.** Bugün beş kez tahminin ölçümle çürüdüğünü gördük;
süre için sayı uydurmak o listeye altıncıyı eklemek olur. Söyleyebileceğim tek
şey büyüklük mertebesi bile değil — **kurulum yapılıp bir bölge (Anadolu,
0,03 GB) örnek koşturulursa** kalan yedi bölge oradan ölçeklenir.

**Çıktı boyutu** da aynı sebeple açık. Bilinen tek referans: bugünkü
`sirt_motorun` **61 poligon → 0,04 MB** (`SADE_TOL` 0,012'de). Su bölümü ağı
bundan çok daha zengin olacak; sadeleştirme sonrası boyut ancak üretilince
bilinir.

---

## 5. KARAR İÇİN ÖZET

| | Yol A (HydroSHEDS) | **Yol B (SRTM 3″)** |
|---|---|---|
| Lisans | şartlı; stand-alone yasağı + EULA şartı | 🟢 **CC0, şartsız** |
| Açık depoda dağıtım | ⚠️ yasağa yaklaşır | 🟢 serbest |
| "Kontrol bizde" şartı | ❌ karşılanmıyor | 🟢 **karşılanıyor** |
| Kapsam (60°K) | tam | yeterli (**köşelerin %0'ı üstte**) |
| Hacim (kısmî) | — | **0,3 GB** |
| Hacim (tam pencere) | — | 12,0 GB |
| Süre | — | ⏳ **ölçülmedi** (araç yok) |
| Çıktı boyutu | — | ⏳ ölçülmedi |

> **Yol B'nin lisans engeli YOK ve hacmi küçük.** Geriye tek bilinmeyen
> **işlem süresi** kaldı ve onu ölçmek için araç kurulumu gerekiyor.

**Önerim:** kısmî yoldan başla — **tek bölge (Anadolu, 0,03 GB) pilot koşusu.**
Hem süreyi ölçer, hem çıktı boyutunu verir, hem de kullanıcı farkı **gözüyle**
görür. Sonuç iyiyse kalan yedi bölge aynı boru hattından geçer.

⚠️ Ve hangi yol seçilirse seçilsin `veri-kaynak/KAYNAK-LICENSE.md`'ye
**gerçek metin** yazılmalı — bu belge onun yerine geçmez, ona kaynak olur.

---

# 6. ANADOLU PİLOTU — KOŞTU, KABUL ÖLÇÜTÜ GEÇTİ

**Tarih:** 31 Temmuz 2026 · **Karo:** `srtm_43_05` (30-35°D, 35-40°K, Orta
Toroslar) · 6000×6000 @ 3″ = 36 milyon hücre
**Araç:** `whitebox` 2.3.6 (Python) → **WhiteboxTools v2.4.0**

## 6.0 🔴 KAYNAK AYRIMI — üç "SRTM" üç farklı şart

Pilot sırasında üç kaynak sınandı ve **üçü de "SRTM" diye anılıyor**:

| Kaynak | Gerçek veri | Şart |
|---|---|---|
| **NASA SRTMGL3** | SRTM | 🟢 **CC0** — ama indirme **Earthdata hesabı** ister |
| **CGIAR-CSI v4.1** | SRTM + boşluk doldurma | 🔴 *"redistribution prohibited"* |
| AWS **terrain-tiles** | Türkiye'de **EU-DEM** | ⚠️ Copernicus atıf şartı — SRTM **değil** |

⚠️ **CGIAR yasağı zip'in içindeki `readme.txt`'te**:
> *"Users are prohibited from any commercial, non-free resale, or
> **redistribution** without explicit written permission from CIAT."*

⚠️ **AWS terrain-tiles Türkiye'yi EU-DEM ile kaplıyor** (`tilezen/joerd`
attribution belgesi) — SRTM sanıp kullanmak, rapora CC0 yazıp fiilen Copernicus
şartlı veri kullanmak olurdu.

> **Pilot** CGIAR aynasından koştu — yalnız **yerel hesap**, dağıtım yok.
> **Üretim** verisi NASA SRTMGL3'ten gelmeli (CC0).
> 🔴 Tek engel: Earthdata **hesap açma** — bu bir kullanıcı işlemi, oturum
> tarafından yapılamaz.

## 6.1 ✅ KABUL ÖLÇÜTÜ — GEÇTİ (fizikî kanıt)

Ölçüt geometrik değil **yükseklik**: sırt yüksek, etek alçak olmalı.

| Hat | n | medyan | ortalama | %90 |
|---|---|---|---|---|
| bugünkü hedef (kapalı halka) | 4.000 | **1.109 m** | 1.145 | 1.665 |
| **TÜRETİLEN su bölümü çizgisi** | 56.438 | **1.499 m** | 1.421 | 2.283 |
| Taurus içi rastgele arazi | 4.000 | 1.297 m | 1.311 | 1.930 |

⇒ **Türetilen hat bugünkü hedeften +390 m yüksek.**

🔴 **Ve asıl kanıt:** bugünkü hedef (1.109 m) **rastgele araziden bile alçak**
(1.297 m). Yani `buffer(-0.12).boundary` dağın **alçak kenarında** —
"etek çizgisi" iddiası artık ölçülmüş değil, **fizikî olarak kanıtlanmış.**

⚠️ **Sapma sayısı yanıltıcı, kullanmayın:** bugünkü hat ile en yakın ayırım
arası medyan 6,1 km · %90 39,2 · azami 50,2 km. Ama ayırım ağı **çok yoğun**
(tek dağ poligonu içinde 4.319 km hat), dolayısıyla her nokta *bir* ayırıma
yakın çıkıyor. Medial eksen iskeletinde yaşanan sorunun aynısı.
**Anlamlı ölçü yükseklik farkıdır.**

## 6.2 SÜRE — ölçüldü

| Adım | Süre | Pay |
|---|---|---|
| whitebox ikili indirme (bir kereliğine) | 21,6 sn | — |
| 1. FillDepressions | 33,2 sn | %40 |
| 2. D8Pointer | 3,7 sn | %4 |
| 3. D8FlowAccumulation | 5,5 sn | %7 |
| 4. Basins | 4,0 sn | %5 |
| 5. RasterToVectorPolygons | 31,3 sn | %38 |
| 6. ExtractStreams | 2,2 sn | %3 |
| 7. RasterStreamsToVector | 3,3 sn | %4 |
| **TOPLAM (karo başına)** | **83,1 sn** | |

+ indirme **18 sn** (28 MB zip → 72 MB tif)

**Ölçeklenmesi:**

| Kapsam | Karo (5°×5°) | Süre |
|---|---|---|
| **Yalnız dağ alanları** (435°²) | ~17 | **~24 dakika** |
| Tüm pencere (4.477°²) | 179 | **~4,1 saat** |

⚠️ Ara dosyalar karo başına ~750 MB (`dolu` 275 · `birikim` 137 · `havza` 137 ·
`dere` 137 · `yon` 69). Karo karo silinmeli; disk 748 GB boş, kısıt değil.

## 6.3 ÇIKTI BOYUTU — ölçüldü, sorun değil

Ham çıktı **çok yoğun**: 5.810 havza halkası, medyan alan **0,11 km²** —
çoğu kırıntı. Havza alanı eşiğiyle süzülmeli:

| Eşik | Havza | Ayırım | Köşe | Boyut |
|---|---|---|---|---|
| yok | 5.810 | 27.217 km | 25.314 | 0,43 MB |
| **≥ 50 km²** | **105** | **12.046 km** | 1.947 | **0,03 MB** |
| ≥ 200 km² | 40 | 8.767 km | 1.374 | 0,02 MB |
| ≥ 1.000 km² | 15 | 5.763 km | 881 | 0,02 MB |

⇒ `SADE_TOL` 0,012'de, **≥50 km² eşiğiyle karo başına 0,03 MB.**
Dağ alanlarının tamamı için **1 MB'ın altında** — sayfa bütçesinde ihmal
edilebilir (`COGRAFYA-HATLAR.md §8.0`).

📌 Eşik **gerekli**: ham hâl 5.810 havza ile hem yoğun hem anlamsız. Bu,
medial eksen budama sorununun tekrarı — **ama bu sefer çözümü basit**:
alan eşiği tek satır, NP-zor değil.

## 6.4 🎁 YAN KAZANÇ — nehir ağı da üretildi

Aynı koşu `dere.shp` üretti (**2,2 MB**, eşik 5.000 hücre). Bu, motorun bugün
**41 parçayla** gördüğü nehir ağının **ad eşleştirmesinden bağımsız** hâli.

⇒ `COGRAFYA-YASLAMA.md §6.10`'daki kırık ad eşleştirmesi (Meriç→Evros,
Struma→Truma, Dicle'nin boş `name_alt`'ı) **tek koşuda kapanabilir** —
`scalerank` çözümüne bile gerek kalmadan, çünkü akış birikiminden türeyen ağ
adlara hiç bakmıyor.

## 6.5 KARAR İÇİN ÜÇ SAYI

| | Değer |
|---|---|
| **Lisans** | 🟢 CC0 (NASA SRTMGL3) — engel yok, hesap açma kullanıcıda |
| **Hacim** | dağ alanları 0,3 GB · tüm pencere 12 GB |
| **Süre** | **dağ alanları ~24 dk · tüm pencere ~4,1 saat** |
| Çıktı | < 1 MB (≥50 km² eşiğiyle) |
| Doğruluk | ✅ +390 m — türetilen hat sırtta, bugünkü hedef etekte |

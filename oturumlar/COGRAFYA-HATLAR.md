# MOTORUN HATLARI HARİTAYA — şartname

**Yazan:** COĞRAFYA (G) · **Tarih:** 31 Temmuz 2026
**Uygulayacak:** KOORDİNATÖR (`js/app.js` · `css/style.css`)
**Sıra:** çöl tavanından SONRA (`COGRAFYA-COL-TAVANI.md` birinci)

---

## 1. NEDEN — iki talep, tek iş

**Talep A (hata ayıklama).** Kullanıcı ekranda Toroslar'ı görüyor; motor
`Taurus Mts.` poligonunun `buffer(-0.12)` konturunu kullanıyor. **Aynı yer
değil.** Görünmeyen bir hat tartışılamaz, denetlenemez, düzeltilemez.

**Talep B (sahiplik).** Kullanıcı: *"Harita bizim olsun, açık kaynak olmaya
devam etsin ama bizim uhdemizde ve kontrolümüzde kalsın."* Bugün altlık
`js/app.js:359` → `server.arcgisonline.com` (Esri) — **bizim olmayan tek
bileşen.**

Aynı katman ikisini birden çözüyor: önce hata ayıklama aracı, sonra altlığın
kendisi.

## 2. ONAYLANAN YOL — üç kademe

```
Kademe 1  Esri altlığı KALIR, üstüne vektör katmanımız AÇILIR-KAPANIR eklenir
Kademe 2  Katman olgunlaşır; görünen hat ile motorun kullandığı hat AYNI olur
Kademe 3  Esri KALDIRILIR, vektör katman altlığın kendisi olur
```

> ⚠️ **Kademe 3'ün şartı Kademe 1'de kurulur.** Katman baştan *"bir gün tek
> başına altlık olacak"* varsayımıyla tasarlanmalı; sonradan dönüştürülemez.

---

## 3. KATMAN ENVANTERİ — İKİ AYRI GRUP

🔴 **Bu ayrım şartnamenin özüdür.** İki grup farklı şeyler gösterir ve
**aralarındaki fark, aradığımız hatanın kendisidir.**

### Grup A — COĞRAFYA (gerçek olgular, altlık olacak olan)

| Katman | Kaynak | Parça | Ne gösterir |
|---|---|---|---|
| `kara` | `ne_10m_land` | 9 | kara/deniz ayrımı — **Kademe 3'ün temeli** |
| `gol` | `ne_10m_lakes` (motorun ölçütü) | 89 | maskeden çıkarılan göller |
| `nehir` | `ne_10m_rivers` (pencere içi **hepsi**) | 329 | gerçek akarsu ağı |
| `dag_alan` | `geography_regions` `Range/mtn` | 61 | dağ sıralarının **alanı** |

### Grup B — MOTOR HATLARI (motorun fiilen yasladığı hedefler)

| Katman | Nasıl üretilir | Parça | Ne gösterir |
|---|---|---|---|
| `nehir_motorun` | `BUYUK` listesiyle eşleşenler | **40** | motorun **gördüğü** nehirler |
| `sirt_motorun` | `poligon.buffer(-0.12).boundary` | 61 | motorun **yasladığı** hat |

### 🔴 Neden ikisi de gerekli

- `nehir` **329** parça çiziyor, `nehir_motorun` **40**. Aradaki fark
  `COGRAFYA-YASLAMA.md §6.10`'daki kırık ad eşleştirmesinin **gözle görünür
  hâli** — kullanıcı Dicle'nin bir parçasının yaslandığını, bitişik parçasının
  yaslanmadığını doğrudan görür.
- `sirt_motorun` bir **kapalı halka**dır: dağın *etrafı*, sırtı değil.
  `dag_alan` ile üst üste çizilince kullanıcı `COGRAFYA-COL-TAVANI.md §7.1`'deki
  açık kalemi (kural 3 — "dağın tepesinden bölme") **kendi gözüyle görür.**

> Fark bir kusur değil, **teşhis aracıdır.** İki grup ayrı renkte olmalı ki
> ayrı ayrı açılıp kapanabilsin.

---

## 4. KATMAN SIRASI — altlık YOKKEN de doğru olmalı

Bugünkü sıra (`js/app.js:370` ve sonrası):

```
zemin (#a8c8dc deniz mavisi, background)
altlik (Esri raster)              ← Kademe 3'te SİLİNECEK
devlet-dolgu · devlet-cizgi
imparatorluk-hale · vassal-dolgu · osmanli-dolgu · osmanli-cizgi
serbest-hale · serbest-cekirdek
bolge-cizgi (minzoom 5.2)
sehzade · sefer-cizgi-* · devir · isgal
DOM işaretçileri (etiketler — her zaman en üstte)
```

🔴 **Kritik:** `zemin` deniz mavisidir ve `altlik` onu örtmektedir. Raster
kaldırılınca altından **mavi** çıkar. `kara` bir dolgu katmanı olarak
eklenmezse **harita tamamen denize döner.**

### Önerilen sıra

```
zemin           #a8c8dc          deniz
kara            fill             ← YENİ, Kademe 3'ün temeli
gol             fill (deniz rengi)
dag_alan        fill (çok soluk)
nehir           line
altlik          raster           ← Kademe 1-2'de burada, Kademe 3'te SİLİNİR
─────────────────────────────────────────────
nehir_motorun   line             ← Grup B, hata ayıklama
sirt_motorun    line             ← Grup B, hata ayıklama
─────────────────────────────────────────────
devlet-dolgu … (bugünkü sıra aynen devam)
```

**Neden Grup A rasterin ALTINDA, Grup B ÜSTÜNDE:**
Grup A altlığın *yerine geçecek* — raster varken görünmesi gerekmez, raster
kalkınca yerini alır. Grup B bir *denetim katmanı*dır; raster açıkken de
görünmeli, çünkü işi zaten "fotoğraf ile motorun hattı uyuşuyor mu" sorusunu
cevaplamaktır.

**Devlet dolgusunun altında** — ikisi de. Sınırlar coğrafyanın üstüne çizilir,
tersi değil.

---

## 5. AÇMA-KAPAMA VE VARSAYILAN

| Kademe | Grup A | Grup B |
|---|---|---|
| 1 | kapalı | **kapalı** |
| 2 | kapalı | kapalı |
| 3 | **her zaman açık** (altlığın kendisi) | kapalı |

Koordinatörün önerisi kabul: **varsayılan kapalı.** Bu bir hata ayıklama
katmanıdır, atlasın kendisi değil. Kademe 3'te Grup A varsayılan olmaktan
çıkıp **zorunlu** olur.

Grup A ve Grup B **ayrı ayrı** açılabilmeli; birlikte açılıp kapanırsa
aralarındaki farkı görmek zorlaşır (§3'ün bütün değeri o farkta).

---

## 6. YAKINLAŞTIRMA

Emsal kodda var: `bolge-cizgi` zaten `minzoom: 5.2` kullanıyor — yeni desen
gerekmiyor.

| Katman | minzoom | Gerekçe |
|---|---|---|
| `kara` · `gol` | yok | Kademe 3'te altlık; her zaman görünür |
| `nehir` · `dag_alan` | **3,5** | uzaktan çizgi çöplüğü olur |
| `nehir_motorun` · `sirt_motorun` | **4,5** | yaslama kayması medyan 17 km; z4,5'in altında ayırt edilemez |

**4,5 rakamının gerekçesi ölçülmüş:** `COGRAFYA-YASLAMA.md §6.8`'de yaslamanın
medyan kayması **0,15° ≈ 17 km**. Bu mesafe ekranda birkaç pikselden büyük
olmadan katmanı göstermek yanıltıcıdır — kullanıcı "hat üst üste" sanır.

---

## 7. RENK VE KALINLIK — sınırla KARIŞMAMALI

🔴 Kullanıcı **"bu bir devlet sınırı mı yoksa nehir mi"** diye sormamalı.

| Katman | Öneri | Ayırt edici |
|---|---|---|
| `kara` | soluk bej dolgu | dolgu, çizgi değil |
| `gol` | `zemin` ile aynı mavi | denizle aynı görünmeli |
| `dag_alan` | çok soluk kahve, **%15 opaklık** | dolgu, kenarı yok |
| `nehir` | ince mavi, 0,6 px | mavi = su, hiçbir sınır mavi değil |
| `nehir_motorun` | **kesikli** parlak camgöbeği, 1,5 px | **kesik desen** hiçbir sınırda yok |
| `sirt_motorun` | **kesikli** turuncu, 1,5 px | aynı |

**Kural:** Grup B **kesikli (dash) olmalı.** Bugünkü sınır katmanlarının hiçbiri
kesikli değil; desen tek başına ayırt edici olur ve renk körlüğünden etkilenmez.

⚠️ `serbest-hale`/`serbest-cekirdek` sönen kenar çiziyor — Grup B'nin turuncusu
onunla karışmamalı. Uygulamada göz kontrolü şart.

---

## 8. BÜTÇE — İKİ AYRI SATIR

```
DEPO   : ne_10m_* dosyaları ZATEN depoda, 26,8 MB. Yeni indirme YOK.
         (.git 184 MB · ağaç 201 MB · GitHub Pages tavanı 1 GB)

SAYFA  : bugün index.html veri-kaynak/'ten HİÇBİR ŞEY çekmiyor (0 atıf).
         O 26,8 MB motorun girdisi, tarayıcının değil.
         Sayfanın bugünkü yükü: donemler.js 24,0 MB + devletler_harita.js 11,4 MB
         = 35,4 MB
```

### 🔴 8.0 HANGİ DOSYA TARAYICIYA İNER — tek ölçüt `index.html`

İki bütçeyi ayırmak yetmiyor; **depo dosyası ≠ sayfa dosyası** ve ayırt edici
tek şey `index.html`'de `<script>` satırı olup olmadığıdır.

| Dosya | `index.html`'de | Tarayıcı bedeli | Ne işe yarar |
|---|---|---|---|
| `data/donemler.js` | ✅ var | **24,0 MB** | sitenin okuduğu ana veri |
| `data/devletler_harita.js` | ✅ var | **11,4 MB** | yabancı devlet gövdeleri |
| `data/altlik.js` | ✅ var | **~1,1 MB** | bu şartnamenin konusu |
| `data/petek_govde.js` | ❌ **yok** | **0** | per-petek gövde — üretim ara çıktısı |
| `veri-kaynak/motor_kara.geojson` | ❌ **yok** | **0** | §8.2 — altlığın kıyı kaynağı |
| `veri-kaynak/ne_10m_*` | ❌ yok | 0 | motorun girdisi |

📌 **Ölçülmüş vaka:** per-petek gövdeyi `donemler.js` içine koymak o dosyayı
%6 (**1,4 MB**) büyütüyordu ve `donemler.js` tarayıcıya **iniyor** — yani
üretim ara çıktısı için kullanıcıya 1,4 MB ödetilecekti. Ayrı dosyaya
(`data/petek_govde.js`, `index.html`'e eklenmeyecek) alınınca bedel **sıfır**.

> **Kural: üretim ara çıktısı `index.html`'e girmez.** Bir veri yalnız başka
> bir üretim adımının girdisiyse depoda durur, sayfaya inmez. Bu ayrım
> yazılmazsa "depoda zaten var" cümlesi sayfa bütçesini sessizce şişirir —
> bu şartname bir kez o hataya düştü (§8.1'deki *"yeni tek bayt gerektirmez"*
> cümlesi depo için doğru, sayfa için yanlıştı).

⇒ **Vektör altlık sayfaya YENİ yüktür.** Ölçüldü:

| Katman | Parça | ham | tol 0,005 | **tol 0,012** | tol 0,02 |
|---|---|---|---|---|---|
| kara | 9 | 1,01 M | 0,49 M | ~0,30 M | 0,22 M |
| gol | 89 | 0,18 M | 0,09 M | ~0,06 M | 0,04 M |
| nehir | 329 | 0,82 M | 0,39 M | ~0,24 M | 0,16 M |
| dag_alan | 61 | 0,05 M | 0,04 M | ~0,04 M | 0,03 M |
| nehir_motorun | 40 | 0,16 M | 0,08 M | ~0,05 M | 0,03 M |
| sirt_motorun | 61 | 0,09 M | 0,04 M | ~0,04 M | 0,03 M |
| **TOPLAM** | | **2,32 M** | **1,14 M** | **≈0,73 M** | **0,51 M** |

📌 **"Ham 26,8 MB" hiç gerçekleşmiyor.** Pencereye kırpmak (`box(-12,1.5,62,62)`)
tek başına 26,8 MB'yi **2,32 MB**'ye indiriyor — o dosyaların çoğu penceremizin
dışındaki dünya.

### 8.1 Tolerans SEÇİLMEZ, TÜRETİLİR — hedef rakamın gerekçesi

`uret_petek.py:389` → `SADE_TOL = 0.012`

Sınırlar kara maskesine kırpılıp **0,012 toleransıyla** sadeleştiriliyor.
Dolayısıyla altlığın kıyısı da **aynı toleransta** çizilmelidir:

- daha **kaba** olursa → çizilen kıyı ile ona yaslanmış sınır gözle görülür
  şekilde ayrışır (sınır denizde ya da karada asılı kalır)
- daha **ince** olursa → boşa bayt

> **Hedef: tolerans = `SADE_TOL` = 0,012 → ≈0,73 MB.**
> Rakamı ben seçmedim; motorun kendi toleransı dayattı. `SADE_TOL` değişirse
> altlık toleransı da değişmeli — **tek sayı, iki yerde kullanılmasın**,
> üretimden okunsun.

**Sayfa yükü:** 35,4 MB → 36,1 MB = **+%2.**
(Gerçekleşen: `altlik.js` 1,08 MB — fark `gol` katmanının parça sayısından ve
kıyı toleransından; ikisi de düzeltildi.)

### 8.2 🔴 TOLERANSI EŞİTLEMEK YETMEDİ — ölçüldü, kaynak değişti

§8.1'deki kural (*"toleransı `SADE_TOL`'den oku"*) uygulandı ve **yetmedi.**
ARAYÜZ havale etti, ölçüldü (Ölçüm 17):

```
çizilen devlet sınırının kıyı köşesi ↔ altlığın çizdiği kıyı
  medyan 0,26 km · %75 0,62 · %90 0,94 · %99 1,29 km
  < 0,2 km (görünmez)   %45,8
  0,2-1,0 km            %46,2
  1,0 km+                %8,1
```

**%99 dilimi (1,29 km), `SADE_TOL` 0,012°'nin km karşılığına (1,34 km)
yapışık** — sapma gürültü değil, mekanizmanın kendisi.

**Sebep:** iki hat aynı sabitten geçiyor ama **aynı algoritmadan geçmiyor.**

```
altlık : KARA.simplify(SADE_TOL)                              Douglas-Peucker
motor  : KARA.simplify(KARA_TOL) → petek → coverage_simplify(SADE_TOL)
```

`simplify(0,012) ≠ simplify(0,002) ∘ coverage_simplify(0,012)` — DP bu şekilde
bileşilebilir değil.

**Görünürlük** (MapLibre `360/(512·2^z)`):

| zoom | °/px | 1 km sapma |
|---|---|---|
| z5 | 0,0220 | 0,4 px — görünmez |
| **z8** | 0,00275 | **3,3 px — görünür** |
| z10 | 0,00069 | 13 px — bariz |

`kara` katmanının `minzoom`'u yok (§6), yani z8+'ta kıyının **%8'inde** devlet
dolgusu ile çizilen kıyı arasında görünür boşluk/taşma olur.

⚠️ **Ölçümün sınırları:** azami 3,82 km **güvenilmez** — "kıyı köşesi" ölçütü
0,03° yakınlık olduğu için nehir ağzındaki iç sınır köşeleri de kümeye giriyor.
Ters ölçüm (altlık kıyısı → gerçek kıyı) **çöktü**: `uret_altlik.py`
`_kara.difference(GOL_BIRLIK)` yaptığı için altlığın kara poligonu göllerde
delikli ve sınırı göl kıyılarını da içeriyor (1.633° vs 1.428°). Bu doğru
davranış ama ters ölçümü geçersiz kılıyor. **Yüzdelikler sağlam, uçlar değil.**

> ### KARAR (onaylandı): altlığın kıyısı ÜRETİLMEZ, MOTORDAN GELİR
>
> Motor `uret_petek.py:549` civarında `coverage_simplify` sonrası nihai örtüyü
> elinde tutuyor. Hücreler `BOLGE`'yi döşeyip `KARA`'ya kırpıldığı için
> **nihai hücrelerin birleşimi = motorun çizdiği kara.** Motor bunu dışa
> aktarır (`motor_kara.geojson`), `uret_altlik.py` onu tüketir.
> Çakışma **inşa gereği tam** olur; tolerans tartışması kapanır.

📌 **Genel kural — `OGRENILENLER §35`:**
> *"Tek sayı iki yerde durmasın"ın geometri hâli: **tek geometri iki yerde
> üretilmesin.** Sabiti paylaşmak yetmiyor, çıktıyı paylaşmak gerekiyor.*

Ve bu vakanın kendi dersi: `SADE_TOL`'ü motordan okumak **doğru refleksti**,
yalnız yeterli değildi. **Doğru refleks, ölçümün yerini tutmuyor.**

---

## 9. GEÇME ÖLÇÜTLERİ

### Kademe 1-2

| Ölçü | Beklenen |
|---|---|
| Sayfa yükü artışı | ≤ 0,8 MB |
| `nehir` ile `nehir_motorun` farkı görünür mü | **evet** — 329 vs 40 parça |
| Dicle/Tigris kopukluğu görünür mü | **evet**, Bağdat kuzeyinde |
| Grup B kesikli, sınırlarla karışmıyor mu | göz kontrolü |
| Grup A ve B ayrı ayrı açılıp kapanıyor mu | evet |

### 🔴 Kademe 3 — asıl sınav

> **`altlik` kaynağı kapatıldığında harita hâlâ okunabilir mi?**

| Ölçü | Beklenen | Tutmuyorsa | Durum |
|---|---|---|---|
| Kara/deniz ayırt ediliyor mu | evet | `kara` dolgusu eklenmemiş (§4) | ✅ kapandı |
| **Kıyı, motorun dışa aktardığı geometriden mi geliyor** | **evet** | `uret_altlik.py` hâlâ kendi `kara`sını üretiyor (§8.2) | ⏳ MOTOR ısmarlandı |
| Göller deniz rengiyle mi | evet | — | ✅ kapandı (`#a8c8dc` ≡ `zemin`) |
| Dağlar konum olarak seçiliyor mu | evet | `dag_alan` opaklığı düşük | ⏳ |
| Esri'ye kalan atıf | **0** | `js/app.js` attribution | ⏳ ARAYÜZ |

🔴 **İkinci satır DEĞİŞTİ.** Eski hâli *"kıyı ile devlet sınırı çakışıyor mu"*
idi — **ölçülmesi gereken** bir şart. Ölçüldü (§8.2) ve **çakışmıyor**: %8,1'i
1 km'den fazla sapıyor.

Yeni hâli *"aynı kaynaktan mı geliyor"* — **yapısal olarak garanti eden** şart.
Fark önemli: birincisi her koşuda yeniden ölçülmesi gereken bir kusur arar,
ikincisi kusurun **üretilememesini** sağlar. Denetim, ölçtüğü şeyi ortadan
kaldırabiliyorsa ölçmekten iyidir.

⚠️ **Bilinen ve kabul edilen bedel:** kabartma gölgesi kaybolur, dağlar üç
boyutlu değil **alan** olarak görünür. Kullanıcı bunu bilerek seçti — tekrar
tartışılmayacak.

---

## 10. KADEME 2'NİN İKİNCİ KAZANCI

Kademe 2'den sonra **haritada görünen hat ile motorun kullandığı hat aynı hat
olur.** Bugün öyle değil: kullanıcı fotoğrafta Toroslar'ı görüyor, motor
`buffer(-0.12)` konturunu kullanıyor.

Bunun doğrudan sonucu: `COGRAFYA-COL-TAVANI.md §7.1`'deki **kural 3 açık
kalemi** (dağın tepesinden bölme) gözle görülebilir hâle gelir. Kullanıcı
`sirt_motorun`'un dağın *etrafını* dolaşan kapalı bir halka olduğunu, tepesinden
geçen bir eksen olmadığını doğrudan görür.

> Bugün bu kusur **yalnız ölçümle** biliniyor. Kademe 2'den sonra **bakılarak**
> bilinecek — ve su bölümü çizgisine geçiş kararı o zaman somut bir görüntüye
> dayanacak, tabloya değil.

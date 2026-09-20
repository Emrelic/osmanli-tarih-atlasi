# HARITA-DURUM-0074 — H-0007 · H-0008 · H-0014 · H-0015 (21 Eylül 2026)

Şartname: `oturumlar/DALGA-0074.md` (+ `DALGA-0073.md` ortak kurallar) · parti
`parti-emrelic-0074/PARTI.md`. Açılan görseller: `H-0007-1.png`, `H-0008-1.png`,
`H-0014-1.png`, `H-0015-1.png` (yalnız bu dördü).

🔴 **VERİ DEĞİŞTİRİLMEDİ.** Bütün kalemler ölçüm/teşhistir; düzeltme yetkisi
istenen yerler §6'da. `denetle.py` koşturulmadı — veri değişmediği için (ortak
kural: *"veri değişmediyse koşturma"*).

Tarih anlambilimi motorun kendi kuralı: **`f <= gün < t` (yarı açık)**.
Yerleşimin o gün VAR OLUP OLMADIĞI `kur:`/`bit:` ile süzüldü.

**Aletler** (hepsi salt okur, `denetim/` altında, adımla commitlendi):
`ARAC-HARITA-DURUM-0074-OLC.py` · `-SINIF.py` · `-KARA.py` · `-UFUK.py` ·
`-SAHIPSIZ.py` · `-PIKSEL.py` · `-CAKISMA.py` · `-INCELIK.py` · `-SEBEP.py` ·
`-PARCA.py` · `-UZAKLIK.py` · `-NAHCIVAN.py` · `-KUTUSUZ.py` · `-UFUK-DUNYA.py`

---

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı, 21 Eyl 01:05) ve sonucu

| # | öngörü | sonuç |
|---|---|---|
| H-0007 | kutuda nokta **0–3**, baskın sebep **nokta yokluğu** | **TUTTU** — 0 nokta; boşluk nokta yokluğundan ufuk kesmesine |
| H-0008 | dünya çapında 0,01° ızgara imkânsız → vektör kesişimi | **TUTTU** — ızgara ~6,5 milyar hücre; vektör 40–90 sn/gün |
| H-0008 | **10'dan çok** kimlik çifti | **TUTTU ama çok küçük kaldı** — 1850'de **379** çift |
| H-0008 | kaynağı `devletler_harita.js` gövdeleri, petek/kayıt değil | **TUTTU** — kayıtta 0 çakışma (aşağıda) |
| H-0014 | kırmızı gövde doğru, kusur "açık yeşil = sahipsiz" | **ÇÜRÜDÜ** — açık yeşil SAHİPSİZ DEĞİL, **Rusya**; kusur başka yerde (gövde çakışması) |
| H-0015 | `isg:` `t:` **1834 civarı** ve TARİHEN DOĞRU | **TUTTU** — `t:"1834-01-01"`, TDV doğruluyor |
| (ek) | Afrika/Amerika çiftleri KAYITTAN gelir | **ÇÜRÜDÜ** — 1850'de aynı anda iki sahipli nokta **0** |

---

## 1. H-0007 — "boş toprak var bunun sebebi nedir"

Görselin künyesi: `1827-07-06 · 49,84–51,10N · 15,73–18,09E · z7,2` = **Bohemya /
Sudet dağları**. Madde: *Londra Antlaşması*.

### Ölçüm

| soru | sayı |
|---|---|
| kutuda o gün var olan yerleşim noktası | **0** |
| kutu + 3° çeperinde nokta | 27 (hepsi o gün **sahipli**) |
| kutudaki GERÇEK kara hücresi (0,1°, `ne_10m_land`) | 312 |
| bunlardan motorun **çizdiği** | 205 |
| bunlardan motorun **ÇİZMEDİĞİ** | **107 (%34,3)** |
| kayıt yokluğundan sahipsiz hücre (B sınıfı) | **0** |
| çizilen hücrelerin en yakın noktaya azamî uzaklığı | 179,1 km |
| çizilmeyen hücrelerin en yakın noktaya asgarî uzaklığı | 141,3 km |

Kutudaki çizili toprağın sahipleri: `avusturya` 146 hücre · `prusya` 34 ·
`krakow-serbest-sehri` 24 · `almanya` 1.

### Teşhis — sınıf **C-UFUK**, sebep zinciri iki halkalı

1. **Nokta yokluğu:** kutuda tek yerleşim noktası yok.
2. **Ufuk kesmesi:** en yakın nokta 141–179 km — nominal tavanın
   (`uret_petek.py:2085 TAVAN_KM = {…200}`) ALTINDA, ama motorun çizdiği kara
   oraya ulaşmıyor. Yani fiilî ufuk nominal tavandan DAR: 141 km'de çizmiyor,
   179 km'de çiziyor — tavan bir yarıçap değil, yöne bağlı (16 sektör, elips).

⚪ **Kayıt yokluğu DEĞİL** (B sınıfı 0). Şartnamenin dediği gibi boşluğu
doldurmadım; sebep teşhisi budur ve B-GORUNUM-0072'nin ufuk işinin tam hedefi.

### Sınıfın BÜYÜKLÜĞÜ — dünya ölçeği (yeni ölçüm)

Harita penceresinde (`box(-180,-60,180,85)`):

| | km² |
|---|---:|
| gerçek kara (`ne_10m_land`) | 134.778.700 |
| motorun çizdiği kara (`veri-kaynak/motor_kara.geojson`) | 98.059.539 |
| **ÇİZİLMEYEN** | **36.724.039 — kara'nın %27,2'si** |

En büyük çizilmeyen parçalar: **Sibirya 12.649.069** · **Amazon 7.596.599** ·
**Sahra 2.738.751** · Grönland 2.062.343 · Kanada içi 859.428 · Arabistan içi
722.328 · Kazak bozkırı 506.939 km².
⇒ "Boş toprak" şikâyetinin ÜST SINIRI budur. Bohemya bunun küçük bir Avrupa örneği.

---

## 2. "AÇIK YEŞİL BOŞ ARAZİ" — sahipsiz DEĞİL, **Rusya** (H-0014 · H-0015)

Emre: *"oradaki açık yeşil renklerin sorununu da çözelim. orası direk rusya gibi
görünüyor. o topraklar hangi şehrin toprağı olması gerekirken böyle boş görünüyor"*

**Ölçüm — görselin kendi pikselleri** (`-PIKSEL.py`):
H-0014 ve H-0015'in açık yeşil kümesi **#a6bb8f (166,187,143)**.
`renkler.py` `rusya` = **#4f7d4f**. Boyasız zemin (H-0007'nin çizilmeyen
alanından okundu) ≈ **#f2f1c1**. Opaklık üç kanaldan AYRI AYRI çözüldü:

```
R: 79a + 242(1-a) = 166  ->  a = 0,466
G: 125a + 241(1-a) = 187 ->  a = 0,466
B: 79a + 193(1-a) = 143  ->  a = 0,438
```

Üç kanal aynı sayıyı veriyor ⇒ renk **Rusya'nın kendi rengi**, ~0,44–0,47
opaklıkta. Ve o sayı kodda yazılı: `js/app.js:13472`
`SIYASI_KIP.yumusak = { "devlet-dolgu": 0.44, … }`.
**Ekran görüntüleri YUMUŞAK kipte alınmış.** (ENKLAV-0072 aynı sonuca 20 Eylül'de
başka bir görselden varmıştı — iki bağımsız ölçüm aynı yeri gösteriyor.)

**Ve veri tarafı bunu doğruluyor** (`-SAHIPSIZ.py`, hücre başına petek sahibi):

| kutu | deniz | kara hücre | motor çizmiyor | **sahipsiz** | sahip dağılımı |
|---|---:|---:|---:|---:|---|
| H-0014 Poti 1829-09-14 | 30 | 96 | **0** | **0** | rusya 67 · OSM-doğrudan 29 |
| H-0015 Eflak-Boğdan 1830-05-07 | 157 | 3209 | **0** | **0** | avusturya 956 · OSM-doğrudan 694 · v:eflak 666 · rusya 435 · v:bogdan 374 · s:eflak 84 |

⇒ **O kutularda BİR TEK sahipsiz hücre yok.** "Boş görünen" toprağın tamamı
boyalı. Kusur veride değil, **yumuşak kipin okunabilirliğinde**: Rusya'nın soluk
yeşili (#4f7d4f) %44 opaklıkta bej kabartma altlığın üstünde boyasız araziden
ayırt edilemiyor.

🔵 **Öneri (kalem UI'da, ben yazmadım):** ya yumuşak kipte boyasız zemine belirgin
bir doku/ton verilir, ya `rusya` rengi paletçe ayrıştırılır, ya da yumuşak kipte
devlet dolgusunun opaklığı yükseltilir. Karar Emre'nin; ölçüm yukarıda.

---

## 3. H-0015 — "Edirne'den sonra hâlâ işgal taralı görünüyor, böyle bir madde mi vardı"

### Veri ne diyor

1830-05-07'de Eflak-Boğdan kutusunda **11 yerleşim** işgal taralı:

| işgal penceresi | yerleşim |
|---|---:|
| `1828-05-07 .. 1834-01-01 · rusya` | **10** |
| `1829-06-30 .. 1836-01-01 · rusya` (Silistre) | **1** |

Atlas genelinde 1826–1830 arası açılan Rus işgal kaydı: **13**.

### Kaynak ne diyor — TDV `edirne-antlasmasi` (gövdesi okundu)

> «Eflak-Boğdan ile Silistre, savaş tazminatı ödemeleri bitinceye kadar **rehin
> olarak Ruslar'da kalacaktı**.»
> «Diğer bölgelerden çekilme işi … ticaret tazminatı ödemeleri bitinceye kadar sürecekti.»

Aynı madde Ahıska, Ahılkelek, **Anapa ve Poti**'nin Rusya'ya bırakıldığını da yazıyor.

### Hüküm

🟢 **VERİ KUSURU YOK — gösterim DOĞRU.** Edirne (1829-09-14) işgali bitirmiyor,
onu tazminat ödenene kadar **rehin** olarak sürdürüyor; veri de tam bunu diyor
(`t:1834-01-01`, Silistre `t:1836-01-01`). Emre'nin *"böyle bir madde mi vardı"*
sorusunun cevabı: **evet, vardı.**

⇒ Düzeltme yetkisi İSTEMİYORUM, **2s bütçesi harcanmasın**. Eksik olan
açıklamadır: kullanıcı taramanın neden sürdüğünü ekranda okuyamıyor.
🔵 Öneri: Edirne maddesinin metnine tek cümle ("tazminat ödenene kadar rehin,
tahliye 1834") ya da işgal taramasının tıklanınca sebebini söylemesi.
(Kalem kronoloji/UI'da; ben veriye dokunmadım.)

⚠️ ANTLASMA-KADEME-0074'ün yatay mesajı (M-4885) "o 13 kaydın `t:`sine bak"
diyordu — bakıldı, **`t:` doğru**. Onun ayrı bulgusu (`js/suzgec.js
sahipAnahtari()` `isg:`yi okumuyor) benim ölçümümle çelişmiyor: taban renk ile
tarama zaten AYRI yoldan gelir, şema kararıdır (`girdi.py` `BILINEN_ALANLAR`:
*"isg: MOTOR TARAFINDAN KASTEN OKUNMAZ … de jure / de facto"*).

---

## 4. H-0014 — "bu gösterim hata ise düzeltelim" (Poti kıyısı, 1829-09-14)

Görsel kutusu `41,82–42,64N · 41,35–42,70E` — Poti/Batum kıyısı, Edirne maddesi.

Kutuda sahipsiz hücre **0**, çizilmeyen hücre **0** (§2 tablosu). Ama gövde
çakışması ölçümü kutunun İÇİNDE bir kusur buluyor:

| çift | km² | merkez |
|---|---:|---|
| **OSM-doğrudan + rusya** | **1.873** | **41,893N 41,970E — KUTUNUN İÇİNDE** |

⇒ 1829-09-14'te, yani Edirne'nin İMZA GÜNÜNDE, Poti çevresinde **Osmanlı
doğrudan gövdesi ile Rusya gövdesi aynı toprağı kaplıyor**. TDV aynı maddede
Poti'nin Rusya'ya bırakıldığını yazıyor. 1830-05-07'de de sürüyor (1.322 km²).

🔴 Bu H-0008'in bir vakası — sebebi §5'te; kalem `uret_petek.py` (Oturum 0).

---

## 5. H-0008 — ÜST ÜSTE BİNMİŞ TOPRAKLAR, bütün atlas

### 5.1 Yöntem — ızgara yerine VEKTÖR, ve neden

ENKLAV-0072 (20 Eylül) aynı soruyu **0,01° ızgarayla TEK kutuda** sordu
(Karadağ 1814-01-28: 1.563 km²). Dünya ölçeğinde aynı ızgara ~**6,5 milyar
hücre** demek — imkânsız. `-CAKISMA.py` aynı soruyu **poligon kesişimiyle**
sorar: maliyet hücre sayısıyla değil, gövde sayısıyla (yüzlerce) orantılı.

**Maliyet ölçüldü:** ayrıştırma **37 sn** (bir kez; `donemler.js` 62 MB +
`devletler_harita.js` 76 MB) + kesit başına **17–140 sn** (ortanca ~55).
10 kesitlik tam tarama ≈ **13 dakika**. Koşu istemiyor, `data/` kilidi istemiyor.

**Yöntem iki yönde sınandı — ENKLAV-0072'nin ızgarasına karşı** (aynı gün,
aynı kutu, 1814-01-28, lat 42,00–43,10 · lon 18,30–19,60):

| çift | ızgara (ENKLAV-0072) | vektör (bu ölçüm) | fark |
|---|---:|---:|---|
| OSM-doğrudan + karadag | 1.005 km² | **1.027 km²** | +%2,2 |
| avusturya + karadag | 59 km² | **69 km²** | +%17 (küçük leke, kenar payı) |

⇒ Ana gövdede %2 içinde örtüşüyor; yöntem taban ölçümü ÜRETİYOR, çelişmiyor.

### 5.2 Dünya çapında, on kesit

| gün | kimlik | sahipli toprak km² | **çifte iddialı km²** | oran | çift |
|---|---:|---:|---:|---:|---:|
| 1300-01-01 | 244 | 51.595.686 | 135.334 | %0,26 | 249 |
| 1400-01-01 | 260 | 51.859.367 | 278.372 | %0,54 | 281 |
| 1500-01-01 | 255 | 53.202.371 | 353.170 | %0,66 | 283 |
| 1600-01-01 | 231 | 59.867.379 | 801.842 | %1,34 | 268 |
| 1700-01-01 | 234 | 72.858.576 | 1.599.638 | %2,20 | 313 |
| 1800-01-01 | 236 | 83.837.163 | 1.459.347 | %1,74 | 335 |
| **1828-02-22** (H-0008 görseli) | 250 | 86.973.145 | **1.866.890** | %2,15 | 362 |
| **1850-01-01** (ZİRVE) | 253 | 91.849.642 | **2.430.774** | **%2,65** | **379** |
| 1900-01-01 | 130 | 107.215.301 | 955.495 | %0,89 | 217 |
| 1920-01-01 | 116 | 107.809.290 | 354.117 | %0,33 | 169 |

Ayrıca ölçülen günler: 1814-01-28 → 1.674.895 km² / 345 çift ·
1827-07-06 → 1.867.946 / 362 · 1829-09-14 → 1.860.190 / 363 ·
1830-05-07 → 1.989.082 / 374.

### 5.3 Kıl payı sızıntı mı, gerçek gövde mi (1850-01-01, zirve gün)

Ölçüt: ortalama genişlik = 2 × alan / çevre.

| sınıf | çift | km² | pay |
|---|---:|---:|---:|
| **GÖVDE (≥5 km genişlik)** | **78** | **2.326.306** | **%95,7** |
| ARA (1–5 km) | 126 | 93.162 | %3,8 |
| SIZINTI (<1 km — sadeleştirme/yaslama artefaktı) | 175 | 11.305 | **%0,5** |

⇒ Bu bir çizim artefaktı DEĞİL. %95,7'si geniş, gerçek çifte iddia.

### 5.4 Emre'nin gördüğü gri leke — adı konuldu

H-0008 görseli `1828-02-22 · 36,67–38,95N · 44,05–46,96E` (Nahçıvan/Hoy),
madde *Türkmençay: Revan ve Talış'ın Rusya'ya geçişi*. O kutuyla kesişen çiftler:

| çift | km² | merkez |
|---|---:|---|
| **kacar + rusya** | **1.939** | **39,075N 45,812E** (Nahçıvan–Culfa–Ordubad) |
| OSM-doğrudan + kacar | 1.969 | 34,527N 46,251E (kutunun güneyine taşar) |

**Kayıt tarafı TEMİZ** (`-NAHCIVAN.py`, 14 nokta): Nahçıvan/Ordubad/Şerur/
Astara/Lenkeran `s:rusya 1828-02-22..1917-03-15`, Culfa/Merend/Hoy/Tebriz
`s:kacar 1794-01-01..1923-10-29`. Tek bir nokta bile iki sahipli değil.

### 5.5 SEBEP — üç sınav, üçü de aynı yeri gösteriyor

| sınav | evren | sonuç |
|---|---|---|
| ① Kayıtta aynı anda iki sahiplik? | 3921 nokta, 1850-01-01 | **0 nokta** (1828-02-22'de 4, 1700'de 2 — hepsi Osmanlı/tâbi ikilisi) |
| ② Aynı PARÇA indeksi iki devlete mi verilmiş? | 4383 kullanılan parça, 1850 | **9 parça** (toplam km²'nin binde biri bile değil) |
| ③ Çakışma noktaya yakın mı, noktasız boşlukta mı? | en büyük 20 gövde, 1850 | aşağıda |

**③ ölçümü — deseni tek satırda okunuyor:** en büyük 20 çakışmanın HEPSİNDE bir
taraf yakın, öteki taraf UZAK:

| çift | km² | yakın taraf | uzak taraf |
|---|---:|---|---|
| dene + ingiliz-kuzey-amerika | 306.383 | ing.-K.Amerika 122 km (119 nokta) | dene 282 km (13 nokta) |
| ingiliz-kuzey-amerika + kri | 143.934 | ing.-K.Amerika 57 km | kri 256 km (4 nokta) |
| abd + wicita | 85.560 | wicita 76 km (2 nokta) | abd 152 km |
| kaonde-ila + lozi | 84.149 | lozi 57 km | kaonde-ila 166 km (2 nokta) |
| transvaal + tsvana | 57.292 | transvaal 20 km (1 nokta) | tsvana 263 km |

En yakın noktaya uzaklık: ortanca **42,8 km** · asgarî 6,7 · azamî 122,5 km.
Çakışan çiftlerin ZAYIF tarafı tipik olarak **1–13 noktalı** bir kimlik.

⇒ **HÜKÜM: çifte iddia KAYITTA değil, GÖVDE ÜRETİMİNDE** (`uret_petek.py`), ve
**nokta seyrekliğinin fonksiyonu**: az noktalı bir kimliğin gövdesi kendi
noktalarından yüzlerce km öteye, yoğun komşunun peteğinin üstüne taşıyor.
Bu, CLAUDE.md §3'ün *"gövde çakışması `kd:` ile DÜŞMEZ; o kusur `donemler.js` +
`devletler_harita.js` gövdelerindedir"* satırını ölçüyle doğruluyor.

🔴 **H-0007 ile H-0008 AYNI KÖKTEN:** ikisi de nokta yoğunluğu. Az nokta →
ufuk toprağı çizmiyor (H-0007) ya da seyrek kimliğin gövdesi komşunun üstüne
taşıyor (H-0008). CLAUDE.md §6'nın sırası (dizin → yoğunluk → pencere) bu iki
şikâyetin de üstünde duruyor.

---

## 6. Ne istiyorum (1.MURAT'a)

1. **H-0015: hiçbir şey.** Veri doğru, TDV doğruluyor. Düzeltme yetkisi
   istemiyorum, 2s bütçesi harcanmasın. Açıklama eksiği kronoloji/UI kalemi.
2. **"Açık yeşil" sınıfı (H-0007/H-0015'in ikinci yarısı): UI kalemi.** Sebep
   ölçüldü: yumuşak kip `devlet-dolgu 0,44` + Rusya'nın soluk yeşili. Veri
   kusuru değil. Kimin kalemi olacağına sen karar ver (UI-BUTON-0074 uygun).
3. **H-0014 (Poti, 1.873 km² OSM×rusya çakışması) ve H-0008 genel:**
   kalem `uret_petek.py` → **Oturum 0**. Aletim (`-CAKISMA.py`) koşu istemeden,
   ~13 dakikada tam kesit veriyor; düzeltme sonrası AYNI aletle ölçülürse
   kazanç sayıyla görünür. Taban bugün: **1850-01-01 → 2.430.774 km² / 379 çift**.
4. **Yetki sorusu:** H-0008'in düzeltmesi motor kuralıdır (seyrek kimliğin
   gövde tavanı), veri değil. Benim kalemim değil; ölçüm aleti teslim edildi.

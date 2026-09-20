# CIZGI-ANLAM-0072 — haritadaki açıklanmamış çizgiler (paket 0072 · H-0004 · H-0007 · H-0008)

20 Eylül 2026 · oturum CIZGI-ANLAM-0072 · şartname `oturumlar/DALGA-0072.md`
Alet: `denetim/ARAC-CIZGI-ANLAM-0072-SINAV.js` (headless Chrome + CDP, gerçek
`index.html`, hiçbir dosya enjekte/değiştirilmeden) + `arac/renk_olc.py` (ΔE) +
görsel kalibrasyonu (aşağıda §5).

**Ortak soru (1.MURAT):** çizgi var ama Emre ne olduğunu anlayamıyor — kusur
çizginin kendisi olmayabilir, **gösterimin açıklanmamış olması da kusurdur.**

---

## 0. Öngörüler — ÖLÇÜMDEN ÖNCE yazıldı (alette de duruyor, §kafa notu)

| # | öngörü | sonuç |
|---|---|---|
| O1 | H-0007 pembe kesikli = `d-sinir-hat-E`, kayıt `d1812-ru-bg-prut`, renk `#d4707d` | ✅ TUTTU |
| O2 | H-0008 lacivert = `d-sinir-hat-*`, ≥5 kayıtta `isvicre` tarafı, renk `#0a2f5c` | ✅ TUTTU (8 kayıtta `isvicre`) |
| O3 | H-0004 siyah kesikli = `hukuki-sinir-hat`, kayıt `karlofca-bosna-sava-1699` | ✅ TUTTU |
| O4 | `d-sinir-hat-*` katman seçicide hiçbir kovaya girmez | ✅ TUTTU (dördü de `siniflanmamis`) |
| O5 | Lejantta `#0a2f5c` geçmez (D katmanının satırı yok) | ✅ TUTTU (0 geçiş) |

---

## 1. ÖZET TABLO — üç çizgi

| madde | ekrandaki çizgi | KATMAN | KAYIT | dosya | kusur? |
|---|---|---|---|---|---|
| H-0007 | pembe, uzun kesikli | `d-sinir-hat-E` (`js/d_katman.js:296`) | `d1812-ru-bg-prut` | `data/d_sinirlar_avrupa_orta.js` | çizgi DOĞRU · **anlatım KUSURLU** (§4) |
| H-0008 | lacivert, uzun kesikli | `d-sinir-hat-E` ×11 + `d-sinir-hat-C` ×1 | 12 kayıt (§3) | `d_sinirlar_avrupa_bati.js` (8) · `..._orta.js` (4) | çizgi DOĞRU · **anlatım + renk KUSURLU** (§4) |
| H-0004 | siyah, sık kesikli | `hukuki-sinir-hat` (`js/app.js:1629`) | `karlofca-bosna-sava-1699` | `data/hukuki_sinirlar.js` | çizgi DOĞRU · **koşudan BAĞIMSIZ** (§4c) |

Üçü de **tarayıcıda, fiilen çizilmiş özellik olarak** geri okundu
(`queryRenderedFeatures`, `sinav3.json`):

```
H-0007 1815-04-23  d-sinir-hat-E → d1812-ru-bg-prut   sinif E · renk "#d4707d"
H-0008 1816-09-01  d-sinir-hat-E → 11 kayıt · d-sinir-hat-C → 1 kayıt · hepsi renk "#0a2f5c"
H-0004 1814-01-28  hukuki-sinir-hat → karlofca-bosna-sava-1699 (tek özellik)
```

---

## 2. H-0007 — "bu pembe kesikli çizginin anlamı nedir"

**① Katman.** `d-sinir-hat-E` — `js/d_katman.js` `_dKatmaniKur()`. Sınıf E stili
(`D_SINIF_STIL`): genişlik 2,8 · desen `[6,2]` · opaklık 1. Tarayıcıdan geri
okunan boya birebir bu.

**② Kayıt.** `d1812-ru-bg-prut` — `data/d_sinirlar_avrupa_orta.js`.
`taraflar:["rusya","bogdan"]` · `f 1812-06-23` · `t 1856-04-27` · `sinif E`
(`sinif_not`: "F kanıtı bekliyor") · 270 köşe · 426,1 km.
Dayanağı kaydın kendi içinde: **Bükreş 1812 md. 4** — "Prut, Boğdan'a girdiği
yerden Tuna'ya dökülüşüne kadar sınır" (Noradounghian *Recueil* c. II + IBS 43).
Hattın **270 köşesinin 270'i** Emre'nin ekran kutusunun (26,23–28,56°D ·
45,23–48,30°K) içinde — yani görseldeki pembe çizginin TAMAMI bu tek kayıt.

**Niçin PEMBE.** `_dCizgiRengi()` hattın `taraflar[]`ından **biri o gün Osmanlı'ya
tâbi ise** `D_VASAL_RENK = "#d4707d"` döndürür, değilse `D_HAT_RENK = "#0a2f5c"`.
Ölçüldü: 1815-04-23'te `kid:"bogdan"` tâbilik penceresi **4 yerleşimde açık**
(Yaş · Roman · Bârlad · Kalas — hepsi `1456-06-01 → 1878-07-13`). Yani pembe
tesadüf değil, **"bu sınırın bir tarafı Osmanlı'nın tâbisidir"** demek.

**Çizgi doğru yerde mi — İKİ BAĞIMSIZ ÖLÇÜM, aynı cevap.**
Görsel, atlastaki koordinatı kesin bilinen beş şehir noktasından (Suçava · Yaş ·
Roman · Bârlad · Kalas) kalibre edildi; artık ≤3,7 px, ölçek 1 px = 0,0090°.
Pembe piksellerin boylamı ile kaydın o enlemdeki boylamı: **17 kesitin 10'unda
fark |0,1–3,0 km|** (kalan 7 kesitte tarayıcı önce batı kenarındaki tâbi şeridine
takıldı — ölçüm kusuru, veri değil). ⇒ Ekrandaki pembe çizgi = Prut kaydı.

---

## 3. H-0008 — "bu çizgiler İsviçre'nin sınırlarına benziyor"

**Emre haklı.** 1816-09-01'de o kutuda çizilen **12 kaydın 8'inde taraflardan
biri `isvicre`**:

| kayıt | sınıf | taraflar | dosya | uzunluk |
|---|---|---|---|---|
| `d1923-fr-ch-1` | E | fransa-cumhuriyet · **isvicre** | avrupa_bati | 39,3 km |
| `d1923-fr-ch-2` | E | fransa-cumhuriyet · **isvicre** | avrupa_bati | 170,6 km |
| `dg4-fr-ch-alsas` | E | fransa-cumhuriyet · **isvicre** | avrupa_bati | 58,0 km |
| `dg4-sa-ch-cenevre` | E | sardinya-piyemonte · **isvicre** | avrupa_bati | 43,6 km |
| `dg4-sa-ch-valais` | E | sardinya-piyemonte · **isvicre** | avrupa_bati | 57,5 km |
| `dg4-sa-ch-leman` | **C** | sardinya-piyemonte · **isvicre** | avrupa_bati | 54,8 km |
| `dg4-sa-ch-piyemonte` | E | sardinya-piyemonte · **isvicre** | avrupa_bati | 218,3 km |
| `dg4-hab-ch-lombardiya` | E | habsburg · **isvicre** | avrupa_bati | 332,1 km |
| `d1816-alm-ah-1..4` | E | almanya · habsburg | avrupa_orta | 72,4 + 4,1 + 7,0 + 482,6 km |

Görselden bağımsız doğrulama: görsel altı şehirden kalibre edildi (Bern · Zürih ·
Milano · Münih · Cenevre · Venedik; artık ≤13 px), ekrandaki 2 794 lacivert
(`#0a2f5c` ±12) pikselle 12 kaydın hattı karşılaştırıldı — **medyan uzaklık
1,15–7,71 px**, kalibrasyon hatasının içinde. ⇒ Ekrandaki lacivert hatlar bu 12
kayıttır.

### "RENKLER UYUMSUZ" — ölçülen üç ayrı şey

**(a) Görünürlük sorunu YOK.** `#0a2f5c` altındaki dolgulardan yeterince ayrışıyor
(ΔE76 / ΔE94, `renk_olc.py`; eşik ΔE 12):

```
isvicre 74,3/67,8 · fransa-cumhuriyet 43,2/40,3 · habsburg 87,8/74,4
almanya 99,0/76,9 · sardinya-piyemonte 104,9/76,3 · altlık 81,9/74,8 · deniz 58,8/57,3
```

**(b) Öteki ÇİZGİLERLE karışıyor.** En yakın iki çizgi katmanı:
`hukuki-sinir-hat` (#1a1a1a, C katmanı) **ΔE76 32,8** · `veri-siniri-cizgi`
(#5b6b7a) **ΔE76 33,2**. Üçü de kesikli ve ince. Beteri ANLAM karışması: C
katmanı da "belgeli sınır" demek — kullanıcı iki ayrı belgeli-sınır gösterimini
koyu/kesikli iki çizgi olarak görüyor.

**(c) Asıl uyumsuzluk YAPISAL — ve Emre'nin cümlesinin tam karşılığı bu.**
Atlasın bütün siyasî çizgileri rengini **devletten** alır:
`devlet-cizgi` ve `isgal-cizgi` → `["get","renk"]` · `imparatorluk-hale` #6d0d1c
(Osmanlı ailesi) · `vassal-serit-dis` #b2384a. **Yalnız D katmanı künyesiz, sabit
bir renk kullanır**: `#0a2f5c` `renkler.py` `BOYALAR`ın HİÇBİR künyesinde yok
(aynı hex: 0 kayıt; en yakın gövde ΔE76 40,5 `ermenistan-demokratik-cumhuriyeti`).

Ve **"sınırları D'ye göre çizeceğiz demiştik" kısmı henüz OLMADI** — ölçüldü:
D katmanı `js/d_katman.js` §9 gereği **yalnız çizgi çizer, dolguya dokunmaz**
(C katmanının `hukuki-sinir-dolgu`su gibi bir yeniden boyama mekanizması YOK).
Sonuç, her hattın iki yanından renk okunarak sayıya döküldü ("iki yan AYNI
renk" oranı = hat, sahiplik kenarında DEĞİL, dolgunun İÇİNDEN geçiyor):

```
d1816-alm-ah-3  %100   d1816-alm-ah-4  %89   d1816-alm-ah-1  %73   d1816-alm-ah-2  %70
dg4-sa-ch-valais %69   d1923-fr-ch-1   %68   dg4-hab-ch-lombardiya %54
dg4-fr-ch-alsas  %48   dg4-sa-ch-piyemonte %45   dg4-sa-ch-cenevre %39
dg4-sa-ch-leman  %37   d1923-fr-ch-2   %34
```

⇒ **Fransa–İsviçre hattı (`d1923-fr-ch-2`) büyük ölçüde dolgu kenarına oturuyor
(%34 aynı), ama Almanya–Habsburg hattı (`d1816-alm-ah-4`, 482,6 km) 500 örneğin
%89'unda TEK RENGİN İÇİNDEN geçiyor.** Çizgi "burada sınır var" diyor, boyama
"yok" diyor. Emre'nin gördüğü uyumsuzluk budur.
⚠️ Sınır: renk sınıflandırıcı, Habsburg hakisi ile Almanya yeşilini (görünen
ΔE76 22,3) dokulu Esri altlığında her zaman ayıramıyor — **çiftlerin ADLARI
göstergedir, ölçülen sayı "aynı/farklı" oranıdır.**

---

## 4. Kusur mu, değil mi — ve çaresi

### 4a. ORTAK KUSUR: D katmanı ANLATILMAMIŞ ve KAPATILAMIYOR *(gerçek kusur)*
Ölçüldü (tarayıcı):
- Lejantta `#0a2f5c` geçişi: **0** (düzeltmeden önce). D/E/F/C dört ayrı çizgi
  tipi ekranda, lejantta tek satır yok.
- Katman seçicide kova: **YOK.** `d-sinir-hat-C/E/F/D` dördü de
  `katmanSinifla().siniflanmamis` içinde (`d_siniflanmamis_mi: true`). Atlas
  bunu kendi konsolunda zaten bağırıyor ("SINIFLANMAMIŞ 15 katman") — yani
  **kusur zaten ölçülüydü, okunmamıştı.**
- Tek arayüz öğesi sağ üstteki `D: Hukukî / D: Fiilî` ikilisi: hangi SINIFIN
  çizileceğini seçer, **çizginin ne olduğunu söylemez ve katmanı kapatamaz.**

Emsal: 4 Eylül'de `g-nehir-motor`/`g-sirt-motor` için Emre birebir aynı şeyi
istemişti ("bu çizgiler ne işe yarıyor… kapatmak için bir buton olsun") ve ⑥
kovası o gün açılmıştı. D katmanı 17 Eylül'de bağlandı, bu adım atlanmış.

**YAPILDI (bu oturum, `js/app.js` — commit KOORDİNATÖRDE):** lejanta D katmanı
bloğu eklendi (dört sınıfın deseni + açık kırmızı/vasal kuralı + tıklama notu +
"hat antlaşmanın, renk peteğin" uyarısı). Tarayıcıda doğrulandı:
`lejant_0a2f5c` **false → true**, `lejant_d4707d` **1 → 2**, katman sayısı 76
değişmedi, üç sahnenin çizilen özellikleri birebir aynı kaldı.

**YAPILMADI — 1.MURAT'a bırakıldı (gerekçesiyle):** katman seçici kovası.
`KATMAN_KUMESI`ne `{ anahtar:"dsinir", kalip:/^d-sinir-hat-/ }` eklemek TEK
BAŞINA yetmez — `uygula()` kutulardan döner, kutusuz kova katmana hiç dokunmaz
ve `siniflanmamis` uyarısını **susturur** (kusuru kapatmadan görünmez yapar).
`index.html`e de bir `data-katman` kutusu gerekiyor; o dosyayı **B-GORUNUM-0072
şu anda düzenliyor** (④b Ⓑ Dolgu kutusu bugün eklendi), üç yönlü çakışma
riskine girmedim. Hazır yama §6'da.

### 4b. H-0007/H-0008'e özel: AÇIK KIRMIZI ÇAKIŞMASI *(gerçek kusur)*
`D_VASAL_RENK` (#d4707d, `d_katman.js:65`) ile `himaye-serit-ic`
(#d4707d, `app.js:1608`) **birebir aynı renk — ΔE76 = 0,0.** İkisi ayrı şey
anlatıyor (biri "bu D hattının bir tarafı tâbi", öteki "burası gevşek himaye")
ve ikincisinin lejantta satırı VARDI, birincisinin yoktu.
Not: `d_katman.js:50` bunu bilerek yapmış ("yeni bir ton İCAT EDİLMEDİ, var olan
görsel dille eşleşti") — ama o gün `himaye-serit-ic` ile aynı ekranda
görüneceği sorulmamış.
**Çare — hüküm Emre'de, üç seçenek ölçülü:**
1. D vasal hattını ayır: `#b2384a` (vassal-serit-dis ailesi) → himaye pembesinden
   ΔE76 **20,5** uzak, Osmanlı ailesinde kalır. *En ucuz, tek satır.*
2. Himaye iç şeridini ayır — lejantta satırı var, değiştirmek onu da bozar.
3. D hattını taraf renginden türet (aşağı bkz. 4d) — çakışma kendiliğinden biter.

### 4c. H-0004 — "koşudan sonra mı belli olacak": **HAYIR** *(çizgi kusur değil)*
Ölçüldü:
- Çizgi `uret_petek.py` çıktısı DEĞİL. `data/hukuki_sinirlar.js`ten tarayıcıda
  çiziliyor (`_hukukiSinirGuncelle`, `js/app.js:6673`). **Koşu bu çizgiye
  dokunmaz — hiçbir koşu sonucu bunu değiştirmez.**
- Kayıt: `karlofca-bosna-sava-1699` · `osmanli`↔`habsburg` · `1699-01-26 →
  1918-11-11` · `hat.tur "dogal-tanimsiz"` · iki nokta: **Brod Kalesi
  (17,988/45,138) → Bosut ağzı (19,3706/44,9411)**. `kapsama.kutu`
  (17,7–19,7°D · 44,6–45,5°K) Emre'nin kutusuyla (17,54–19,98 · 44,26–45,42)
  örtüşüyor. Kaynak TDV *Karlofça*: "Sava nehrinin Bossut'un Sava'ya döküldüğü
  yerden Brot Kalesi'ne kadar sınır olması kabul edildi."
- **20 Eylül'ün "sınır dişleri" teşhisi BU SINIF DEĞİL** (ipucu doğrulanmadı,
  bilerek): o düzeltme `dpSadelestir()` ile **yalnız `SERBEST` hattına**
  (`serbest-hale` / `serbest-cekirdek`) uygulanıyor — `js/app.js:228–263` +
  `serbestHat()`. H-0004'teki çizgi o katmanda değil; Douglas–Peucker onu hiç
  görmüyor. Ayrıca H-0004 z5'te çekilmiş ve `bolge-cizgi` `minzoom 5.2` — o da
  elendi.
- **Asıl anlatılması gereken:** hat, antlaşmanın verdiği İKİ UÇ arasına **DÜZ**
  çekiliyor; gerçek sınır Sava nehrinin yatağı. Nehir atlasta VAR (kaydın kendi
  `gereken_cografya` alanı söylüyor: `uret_petek.py:782 BUYUK` kümesinde "Sava"
  — bugün doğrulandı) ama C hattı onu KULLANMIYOR. Kusur değil **beyan**; yine de
  şemada bir `nehir` türü (iki uç + nehir kimliği) bunu kapatır — ölçülmedi,
  tasarım kararı.
- Lejantta C satırı **VAR** ("Belgeli sınır (C — antlaşma metninden)"). Emre'nin
  yine de sormasının sebebi büyük olasılıkla **lejantın varsayılan KAPALI
  olması** (`app.js` ~2234, Emre'nin kendi isteğiydi). Öneri: satıra "iki uç
  arasına düz çizilir" ibaresi eklensin (§6'da).

### 4d. H-0007/H-0008'in ortak yan bulgusu: hat ile dolgunun AYRIŞMASI
Ayrışma **kusur değil, ÖLÇÜ** — ama bugüne kadar ekranda okunamıyordu.
H-0007'de iki bağımsız yolla ölçüldü (görsel kalibrasyonu · tarayıcı sondası) ve
**ikisi aynı sayıyı verdi**:

| enlem | atlasın sahiplik kenarı | Prut kaydı | fark |
|---|---|---|---|
| 46,5°K | `vassal-dolgu` 28,20 → `devlet-dolgu:rusya` 28,30 | 28,22 | **~3 km — oturuyor** |
| 47,2°K | `vassal-dolgu` 28,10 → `devlet-dolgu:rusya` 28,20 | 27,80 | **~30 km doğuya taşıyor** |

Görsel kalibrasyonunun 34 kesiti: **medyan +3,2 km**, ama **47,03–47,81°K
bandında +21…+56,5 km** (en büyük 47,65°K'de +56,5 km).
**Sebep ölçüldü, tahmin değil:** veride Bükreş 1812 DOĞRU işlenmiş — Prut'un
doğusundaki yerleşimler 1815-04-23'te `s:rusya` (Bender · İsmail · Soroka ·
Orhei · Kahul · Kili). Sorun sahiplik değil **nokta seyrekliği**: o enlem
bandında Prut ile en yakın Rus noktası (**Orhei 28,823°D**) arasında HİÇ nokta
yok; Yaş (27,601) ile Orhei arası 1,22° ≈ 92 km ve Voronoi orta dikmesi
28,21°D'ye düşüyor — ölçülen kenar 28,10–28,14. CLAUDE.md §2'nin birebir vakası.
**Çare (ölçülü, ama BENİM KALEMİM DEĞİL):** 47,0–47,8°K bandında Besarabya
yakasına `s:rusya` (f 1812-06-23) **1–2 yerleşim noktası** eklenirse kenar
Prut'a oturur. Koordinat UYDURULMADI — nokta ve kaynağı `yerlesimler*.js`
sahibinin işi (Bălți ve Ungheni aday, TDV/akademik kaynak aranmalı).

---

## 5. Yöntem — görsel nasıl "ölçü aleti" hâline getirildi

Ekran görüntüsü tek başına delil değildir (kırpılmış, alt yazıdaki kutu tüm
pencereyi anlatır, kırpmanın kendi ofseti bilinmez). Kalibrasyon:
1. Görselde ADI YAZAN şehirlerin nokta simgesi bulunur (pencere içi en koyu
   piksellerin ağırlık merkezi).
2. O şehirlerin GERÇEK koordinatı `arac/girdi.py` ile `yerlesimler*.js`ten
   okunur — atlasın kendi verisi, tahmin yok.
3. Web Mercator'da `x = a·lon + b`, `y = c·ln(tan(45+lat/2)) + d` en küçük
   karelerle çözülür. Artık büyükse ölçüm KULLANILMAZ.
   - H-0007: 5 şehir · artık ≤3,7 px · 1 px = 0,00900°
   - H-0008: 6 şehir · artık ≤13,1 px · 1 px = 0,01055°
4. Kayıtların hattı piksele çevrilip ekrandaki renk pikselleriyle karşılaştırılır.
📌 Ve bir tuzak buldu: ilk koşuda "dolgunun doğu kenarı" her satırda 28,386
çıktı — o **Emre'nin kırpma işareti olarak çizdiği kırmızı çerçeveydi**, atlasın
kenarı değil. Çerçeve saf kırmızıdan (r>200, g<60, b<60) bulunup dışarıda
bırakıldı.

⚠️ Aletin kendi tuzağı da kayda geçti: `queryRenderedFeatures` yalnız FİİLEN
BOYANMIŞ kareyi okur; `areTilesLoaded()` "yüklendi" dedikten sonra hâlâ bir
çerçeve geçmesi gerekiyor (ilk koşuda iki sahne 0 özellik verdi, üçüncüsü dolu
geldi). Çare sabit 2,5 sn ek bekleme. `requestAnimationFrame` beklemesi headless'ta
**hiç tetiklenmeyip** `awaitPromise`i sonsuza astı (koşu 500 sn'de bitmedi,
çıktı 0 bayt) — kullanılmıyor.

---

## 6. Hazır yamalar (1.MURAT uygular/commitler)

**① Katman seçici kovası** — `js/app.js` `KATMAN_KUMESI`, `siyasi`DEN ÖNCE:
```js
{ anahtar: "dsinir", ad: "D koordinatlı sınır", kalip: /^d-sinir-hat-/ },
```
ve `index.html` `#katman-grup` içine:
```html
<label><input type="checkbox" data-katman="dsinir" checked> <span>④c Koordinatlı sınır hattı (D/E/F/C)</span><em id="kat-sayi-dsinir"></em></label>
```
🔴 İKİSİ BİRDEN, yoksa kova `siniflanmamis` uyarısını susturur ama düğme vermez.

**② C satırına ibare** — `js/app.js` lejant, "Belgeli sınır (C …)" satırı:
`tıklayınca kaynağı gösterir` → `antlaşmanın verdiği iki uç arasına DÜZ çizilir (gerçek hat — örn. Sava — daha kıvrımlıdır); tıklayınca kaynağı gösterir`

**③ Renk çakışması** — Emre'nin kararı. En ucuzu `js/d_katman.js:65`:
`var D_VASAL_RENK = "#d4707d";` → `"#b2384a";` (himaye pembesinden ΔE76 20,5).

---

## 7. Değişen dosyalar
- `js/app.js` — **yazıldı, commitlenmedi** (paylaşılan): lejanta D katmanı bloğu.
- `denetim/ARAC-CIZGI-ANLAM-0072-SINAV.js` — yeni alet (bu oturum commitler).
- `denetim/CIZGI-ANLAM-0072.md` — bu rapor (bu oturum commitler).
- `data/*` — **DOKUNULMADI.** `py arac/denetle.py` koşturulmadı: veri
  değişmedi, ayrıca 1.MURAT M-4789'da bugün bellek yüzünden çöktüğünü bildirdi.

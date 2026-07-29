# Oturum 8 — Sınır geometrisi raporu: boşluklar ve kıyı oturması

29 Temmuz 2026. Görev tanımı: `oturumlar/OTURUM-8-GEOMETRI.md`.
Değiştirilen dosyalar: `arac/uret_petek.py` (geometri boru hattı),
`js/app.js` (parça havuzu çözümü — yalnız veri yükleme kısmı).
**Commit atılmadı; üretilmiş `data/*.js` dosyaları da commit edilmeyecek** (Oturum 0'ın işi).

## Ölçüm zemini

- Başlangıç HEAD: `45ae881`.
- ⚠️ `data/yerlesimler.js` oturum boyunca başka oturumlarca **üç kez** değişti:
  ÖNCE ölçümleri ve 0.004'lük ara koşu **567 yerleşimli** anlık görüntüde
  (blob `4ab072d`); nihai 0.002'lik üretim **722 yerleşimli** hâlde
  (blob `1e42014`, Oturum 4'ün İran partisi dahil; devlet sayısı 97 → 100).
  Bu yüzden önce/sonra farkının bir kısmı veri büyümesinden gelir; boru hattının
  saf etkisi, aynı 567'lik veriyle koşulan ara ölçümde ayrıca verilmiştir.
- Ara bir kesinti: `yerlesimler.js` ~40 dakika sözdizimi bozuk kaldı (Erciş
  sonrası virgül + erken `]`, Oturum 4'ün düzenlemesi). Motor koşamadı; ilgili
  oturuma bildirildi, düzeltilince üretim otomatik devam etti. Dosyaya bu
  oturumdan dokunulmadı.

## Kök neden ve yapılan değişiklik

**Sorun 1 — komşu gövdeler arasında ince boşluklar.** Her petek ve her gövde
kendi başına yumuşatılıp sadeleştiriliyordu; ortak kenarın iki yanı farklı sonuç
veriyordu. Eski motor bunu "tolerans/2 dışa taşırma" hilesiyle (satır 434) örtmeye
çalışıyordu — boşluğun yarısı bindirmeye dönüşüyordu (B-10).

**Sorun 2 — renk kıyıya oturmuyor.** Osmanlı/tâbi gövdeleri kara maskesiyle
kesildikten **sonra** 0.022/0.03 toleransla sadeleştiriliyordu (B-11); kıyı
2,4–3,3 km'ye kadar bozuluyordu.

**Çözüm — örtü (coverage) boru hattı** (`arac/uret_petek.py`):

1. Voronoi hücrelerinin **ortak kenar ağı** çıkarılır (1698 kenar, her kenar tek kopya).
2. Nehir/sırt yaslama + Chaikin bu ağ üzerinde **bir kez** uygulanır; kenar uçları
   (düğümler) sabit tutulur.
3. Hücreler `polygonize` ile geri kurulur. Kritik kural: **bütün yüzler tek bir
   polygonize'dan çıkar** ve hücreler `coverage_union_all` ile (yeniden düğümleme
   yapmadan) birleştirilir — yüz yüz `unary_union` ya da yerel `intersection`
   kırpması ortak köşeleri son bitte (ULP) kaydırıp bozuk kenar bırakıyordu
   (Hvar/Vis/Dir'iye vakaları bu yolla bulundu ve kapatıldı).
4. `coverage_simplify(SADE_TOL=0.012)` örtünün tamamına bir kez — ortak kenarların
   iki yanı birebir aynı kalır. Gövde başına `simplify` ve dışa taşırma **kaldırıldı**.
5. `set_precision` **kullanılmadı**: üçlü kavşaklarda hücre başına farklı çökme
   yapıp bozuk kenar üretiyordu (Maraş/Adana/Antakya kavşağında görüldü);
   ortak köşeler zaten bit düzeyinde aynı olduğundan gerek de yok.
6. **Kıyı kesimi en sonda**: tüm gövdeler deniz sınırını doğrudan KARA maskesinden
   alır; kesimden sonra hiçbir geometri işlemi yapılmaz. `kapat()` mitre birleşime
   çevrildi ve çıktısı orijinalle birleştirilir ki buffer gidiş-gelişi ortak kenarı
   aşındıramasın.

**Boyut sorunu ve parça havuzu.** Kıyıyı tam çözünürlükte 424 döneme yazmak
`donemler.js`'i 54 MB yapıyordu (tavan: 27,6). Tolerans kabalaştırmak işe yaramıyor
(kıyı fraktal; 0.004→0.010 yalnız −%30). Ölçüm: dosyadaki noktaların yalnız
**%40'ı eşsiz** — aynı ada/ana halka yüzlerce dönemde birebir tekrarlanıyor.
Çözüm: parçalar dosya başına tek havuza yazılır (`window.PARCALAR`,
`window.DEVLET_PARCALAR`), dönem kayıtları havuz indeksi taşır; `js/app.js`
yüklerken çözer (`parcaCoz`) — aynı parça bellekte de tek nesne olur. Eski
format da tanınır (sayı değilse olduğu gibi kullanılır).

**Kara maskesi toleransı** görev maddesi 5 gereği ölçüldü: maske köşe sayısı
0.004→0.002'de yalnız +%33 (36 230 → 48 309). Havuz kazancı bunu karşıladığı
için nihai üretim **KARA_TOL = 0.002** (≈220 m) ile koşuldu — Çanakkale tipi
dar boğaz genişlemesi (B-12) yarıya iner.

## Kabul testleri

### 1) Örtü geçerliliği ✓
Üretim logu (her aşama):
```
örtü geçerliliği: sadeleştirme öncesi 0, sonrası 0 bozuk kenar ✓
kıyı kesimi sonrası örtü: 0 bozuk kenar ✓
```
`shapely.coverage_invalid_edges` üç aşamada da (ham kurulum, coverage_simplify
sonrası, KARA kesimi sonrası) boş; 3 ondalıklı çıktı yuvarlaması sonrası da boş
(ayrı teşhis betiğiyle doğrulandı).

### 2) Üç değişmez ✓
`py arac/denetle.py` (nihai veri, 722 yerleşim; beklenen değerler veri sahibi
oturumlarca güncellenmiş):
```
Değişmez 1  ✓  722 yerleşim, 32 sahipsiz (beklenen 32)
Değişmez 2  ✓  427 kırılma, 0 açık
Değişmez 3  ✓  381 çelişki (beklenen ≤381)
SONUÇ: temiz
```
Bu oturumun işi veri dosyalarına yazmıyor; değişmezler geometri değişikliğinden
etkilenmedi.

### 3) Kıyı oturması — önce/sonra
Ölçüt: sadeleştirilmemiş Natural Earth 10m karasına göre, dört kesit tarihinde
(a) denize taşan boyalı alan, (b) boyalı alanın ≤3 km yakınındaki boyasız kara
(kıyı artığı + dikiş boşlukları; uzak sahipsiz çöl/bozkır ölçüme girmez).

| Kesit | Taşan ÖNCE | Taşan (0.004) | Taşan NİHAİ (0.002) | Boş ÖNCE | Boş NİHAİ |
|---|---|---|---|---|---|
| 1350 | 8 968 | 9 190 | **6 994** | 117 473 | **84 094** |
| 1550 | 14 905 | 9 204 | **6 998** | 121 029 | **82 422** |
| 1750 | 16 818 | 9 243 | **7 011** | 119 175 | **78 528** |
| 1900 | 14 645 | 9 402 | **7 055** | 111 332 | **71 628** |

İki gözlem: (a) taşan alan −%22…−%58 düştü ve artık **tarihten bağımsız sabit**
(~7 bin km²) — bu, bütün gövdelerin kıyıyı aynı maskeden aldığının kanıtı; kalan
miktar 0.002° maskenin gerçek kıyıya göre kaçınılmaz sapma tabanıdır (üstelik
nihai ölçümde boyalı kıyı, 722 noktalı büyümüş veriyle daha da uzun). (b) boyalıya
bitişik boyasız kara −%28…−%36 — dikiş boşlukları veri düzeyinde sıfırlandı,
kalan kısım maske tabanı + boyalıya komşu meşru sahipsiz alanlardır.

### 4) Çıktı boyutu

| Dosya | Önce | KARA 0.004 (567 nokta) | KARA 0.002 nihai (722 nokta) | Tavan (2×) |
|---|---|---|---|---|
| donemler.js | 13,83 MB | 19,96 MB (1,44×) | 26,66 MB (1,93×) | 27,7 MB ✓ |
| devletler_harita.js | 15,69 MB | 8,37 MB (0,53×) | 11,68 MB (0,74×) | 31,4 MB ✓ |
| bolgeler.js | 0,08 MB | 0,26 MB | 0,32 MB | küçük ✓ |
| **Toplam** | **29,6 MB** | 28,6 MB | **38,7 MB (1,31×)** | |

Nihai sütundaki artışın üç bileşeni var: kıyı 0.022→0.002 (11 kat incelme),
maske 0.004→0.002, ve **verinin kendisinin büyümesi** (567→722 yerleşim,
727→812 devlet dönemi — başka oturumların işi). Aynı 567'lik veride toplam
baseline'ın ALTINDA kalmıştı (28,6). Parça havuzu olmadan nihai donemler.js
~65-70 MB olurdu. Havuz: donemler 2 351, devletler 5 484 eşsiz parça.

## Tarayıcı tarafı

- `js/app.js`'e yalnız havuz çözücü eklendi (`parcaCoz`); çizim katmanlarına
  dokunulmadı. Veri düzeyinde boşluk/bindirme sıfır olduğu için MapLibre kenar
  yumuşatmasının bırakabileceği saç teli, zaten her katmanın kendi renkli
  `line` katmanıyla (devlet-cizgi 1.1px, osmanli-cizgi 1.8px) örtülüyor.
- Yerel önizleme (localhost:8777) hatasız yüklendi; konsolda hata yok; indeks →
  MultiPolygon çözümü ve devlet gövdeleri programatik doğrulandı. Tarayıcı paneli
  bu oturumda görüntülenemediği için piksel düzeyinde ekran görüntüsü alınamadı —
  gözle son kontrol kullanıcıya/Oturum 0'a kalıyor.

## Oturum 0'a notlar

- Üretilmiş `data/*.js` bu çalışma ağacında yeni formatta duruyor; **nihai üretimi
  Oturum 0 koşmalı** (veri değişmeye devam ediyor). Betik değişikliği + `js/app.js`
  birlikte commit edilmeli (format uyumu), ardından `py arac/surum_damgala.py`.
- `denetle.py`'nin Değişmez 3 tavanı (311) yeni veriyle 318; veri tarafı
  entegrasyon oturumunun gündemine.
- B-2 (yutma) bu oturumun kapsamı dışında bırakıldı; `kapat`/`delikleri_doldur`
  davranışı bilinçli olarak korundu. Artık örtü tabanı kurulduğu için B-2
  düzeltmesi ("başkasının peteğini doldurma") çok daha kolay: doldurmadan önce
  o tarihte başkasına ait hücrelerin birleşimini `difference` ile çıkarmak yeter.

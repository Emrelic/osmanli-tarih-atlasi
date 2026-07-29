# Oturum 8 — Sınır geometrisi: boşluklar ve kıyı oturması

Yeni oturumu proje dizininde aç, ilk mesaj olarak şunu yaz:

    oturumlar/OTURUM-8-GEOMETRI.md dosyasını oku ve içindeki görevi yap

---

## Önce oku
`CLAUDE.md` (kurallar, üç değişmez) · `MIMARI.md` §2 (petek motoru) ·
`denetim/BULGULAR-2026-07-29.md` — özellikle **B-10** ve **B-11**, ikisi de
senin işinin parçası.

## Senin işin — iki görünür kusur

Kullanıcı haritaya baktı ve şunları gördü:

**1. Komşu bölgelerin arasında ince boşluklar var.** Beylik sınırlarının
arasından altlık sızıyor; harita dikişli görünüyor. Boşluk paylaştırılmalı,
hiç görünmemeli.

**2. Kıyı kesiminde renk kıyıya tam oturmuyor.** Boyalı alan kimi yerde denize
taşıyor, kimi yerde kıyıdan içeride kalıyor.

## Teşhis — kodun neresinde

`arac/uret_petek.py` boru hattı: kara maskesi → Voronoi → nehir/sırt yaslama →
**Chaikin yumuşatma** → kara maskesiyle kesme → dönem birleşimi → **sadeleştirme**
→ koordinat yuvarlama.

Sorunun kökü **topolojinin korunmaması**: her petek ve her gövde **kendi başına**
yumuşatılıp sadeleştiriliyor. Ortak kenarın iki yanı farklı sonuç veriyor →
kimi yerde boşluk, kimi yerde bindirme kalıyor. (B-10 zaten "aynı noktayı iki
devlet birden boyuyor" diyor — aynı kökün öbür yüzü.)

Şüpheli satırlar:
```
 54  KARA = ... .simplify(0.004, preserve_topology=True)   # kıyı ~440 m kabalaşıyor
251  dis = chaikin(dis, tur)                               # petek petek yumuşatma
351  cs = [[round(x,3), round(y,3)] ...]                   # ~110 m ızgaraya yuvarlama
371  bg = bg.simplify(0.03, ...)                           # bölge gövdesi
425  g  = g.simplify(SADE_TOL, ...)                        # devlet gövdesi
501  dis = g.simplify(0.022, ...)                          # Osmanlı gövdesi
508  kayit["v"] = mp_koord(gt.simplify(0.03, ...))         # tâbi gövdesi
```

**Kıyı için ayrıca:** 425/501/508'deki sadeleştirme, gövde **kara maskesiyle
kesildikten SONRA** çalışıyor; yani kıyıya oturmuş sınırı tekrar bozuyor.
B-11 bu sıra hatasını yabancı katmanda anlatıyor, Osmanlı katmanında duruyor.

## Elindeki araçlar — Shapely 2.1.2 kurulu, hepsi mevcut

Bu işi elle sliver temizleyerek değil, kütüphanenin topoloji araçlarıyla çöz:

| Araç | Ne yapar |
|---|---|
| `shapely.set_precision(g, grid)` | Tüm geometrileri ortak ızgaraya oturtur; ortak köşeler **birebir aynı** olur |
| `shapely.coverage_simplify(geoms, tol)` | Bir örtüyü, **ortak kenarları koruyarak** sadeleştirir — `simplify`'ın topoloji bilen hâli |
| `shapely.coverage_union(geoms)` | Örtüyü birleştirir (union'dan hızlı ve topoloji güvenli) |
| `shapely.coverage_invalid_edges(geoms)` | **Kabul testin bu**: örtünün bozuk olduğu kenarları döker |
| `shapely.node`, `shapely.segmentize` | Kesişimleri düğümler / kenarları sıklaştırır |

Önerilen yön (bağlayıcı değil, daha iyisini bulursan uygula):
1. Petekleri ürettikten sonra hepsini tek bir **örtü** (coverage) olarak ele al
2. Yumuşatma ve sadeleştirmeyi petek petek değil, **örtü üzerinde bir kez** yap
3. `set_precision` ile ortak ızgaraya oturt
4. Kıyı kesmesini **en son** yap, sonrasında sadeleştirme yapma
5. Kara maskesinin sadeleştirme toleransını düşürmeyi değerlendir (0.004 ≈ 440 m);
   düşürmenin bedeli dosya boyutudur, ölç ve raporla

## Kabul testleri — bunlar geçmeden iş bitmedi

```python
# 1) Örtüde boşluk/bindirme kalmamalı
import shapely
bozuk = shapely.coverage_invalid_edges(petekler)
assert all(b is None or b.is_empty for b in bozuk)
```

```bash
# 2) Üç değişmez temiz kalmalı (senin işin veriyi değiştirmemeli)
py arac/denetle.py
#   Değişmez 1  ✓  567 yerleşim, 29 sahipsiz
#   Değişmez 2  ✓  424 kırılma, 0 açık
#   Değişmez 3  ✓  311 çelişki
```

```
# 3) Kıyı oturması — önce/sonra ölç ve raporla
Kara maskesinin dışına taşan boyalı alan toplamı (km²) ve
kara maskesi içinde boyasız kalan alan toplamı (km²).
İkisi de belirgin şekilde düşmeli.
```

```
# 4) Çıktı boyutu
Bugün donemler.js 13.8 MB, devletler_harita.js 15.7 MB.
Artış olursa ölç ve gerekçesini yaz; iki katına çıkmamalı.
```

Ayrıca **tarayıcı tarafını da kontrol et**: topoloji kusursuz olsa bile MapLibre
kenar yumuşatması bitişik dolgular arasında saç teli bırakabilir. `js/app.js`'te
dolgu katmanının altına aynı renkte ince bir çizgi koymak ya da `fill-antialias`
davranışını ayarlamak gerekebilir. Gerekirse `js/app.js`'e dokunabilirsin.

---

## Dosya sahipliği

**Senin dosyaların (bu görev süresince sana devredildi):**
- `arac/uret_petek.py` — geometri boru hattı
- `js/app.js` — yalnız çizim/kenar yumuşatma ile ilgili kısımlar
- `denetim/` altına kendi ölçüm raporun

**Dokunma:**
- `arac/renkler.py` — devlet renkleri; entegrasyon oturumu üzerinde çalışıyor
- `data/yerlesimler.js` — entegrasyon oturumu beylik tarihlerini düzeltiyor
- `data/devletler.js`, `data/olaylar*.js` — başka oturumların
- kök dizindeki `*.md` belgeleri

**Üretimi ÇALIŞTIRABİLİRSİN** — bu görevde zorunlu. `py arac/uret_petek.py`,
~15 dakika. Entegrasyon oturumu senin işin bitene kadar üretim koşturmayacak.
Ama **üretilmiş dosyaları commit etme**: `data/donemler.js`,
`data/devletler_harita.js`, `data/bolgeler.js` — son üretimi entegrasyon oturumu
yapacak. Test için üretmen serbest, sonucu bırakman yeterli.

**Commit atma.** İşin bitince "hazır" de.

⚠️ `data/yerlesimler.js` senin çalışman sırasında değişebilir (beylik kuruluş
tarihleri düzeltiliyor). Bu senin işini etkilemez — sen geometri boru hattını
düzeltiyorsun, girdi verisini değil. Ölçümlerini hangi commit üzerinde yaptığını
raporunda belirt.

## Bitirdiğinde
Dört kabul testinin sonucunu göster: örtü geçerliliği, üç değişmez, kıyı taşma/
boşluk alanı (önce-sonra), çıktı boyutu. Ne değiştirdiğini ve neden o yolu
seçtiğini kısaca anlat.

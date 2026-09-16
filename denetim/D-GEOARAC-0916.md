# D-GEOARAC — bugünkü sınır çizgisi aleti · 16 Eylül 2026

Görev (D-1923-0916.md, DÜNYA KADROSU / D-GEOARAC satırı): `veri-kaynak/ne_10m_admin_0_countries.geojson`
(Natural Earth 1:10m admin-0) verisinden bugünkü ülke-çifti sınır çizgilerini parça parça çıkaran alet
yazmak; D1/D2/D3/D4/D5 oturumları "1923'ten bu yana değişmedi" dedikleri parçayı buradan alacak.

⚠️ **Bu alet bir HÜKÜM vermez.** "Değişmedi mi" sorusunun cevabı bölge oturumlarının kaynak
araştırmasına aittir (`D-1923-0916.md` §D1 madde 3). Burada üretilen yalnız ham malzeme: bugünkü
geometri, parça parça ve ölçülmüş kalitesiyle.

## Dosyalar

| Dosya | İçerik |
|---|---|
| `denetim/ARAC-D-SINIRCIZGI-0916.py` | Üretim betiği |
| `veri-kaynak/d_bugunku_sinirlar.geojson` | Çıktı — 338 ülke çifti, 390 çizgi parçası |
| `denetim/_D-GEOARAC-OLCUM-0916.json` | Ham kalite ölçümü (betiğin kendi çıktısı) |

## Yöntem

1. **Kod:** her özellik için `ISO_A3` → (geçersizse) `ISO_A3_EH` → (o da geçersizse) `ADM0_A3`
   sırasıyla ilk geçerli kod alınır (`-99` geçersiz sayılır). 258 özellik → **252 benzersiz kod.**
2. **Aynı kodu taşıyan parçalar birleştirilir** (`unary_union`) — 4 kümede oldu:
   `FRA` (Fransa anakara + Clipperton Adası) · `KAZ` (Kazakistan + Baykonur Kozmodromu) ·
   `BRA` (Brezilya + Brezilya Adası) · `AUS` (Avustralya + Hint Okyanusu Ter. + Mercan Denizi Ad. +
   Ashmore-Cartier Ad.). Bunlar aynı egemenliğin coğrafî olarak kopuk parçaları; tek geometriye
   birleştirilmeden ada parçaları "ayrı ülke" gibi görünürdü.
3. **Geçersiz geometri:** 1 özellik `is_valid=False` çıktı, `buffer(0)` ile düzeltildi.
4. **Aday çift bulma:** `STRtree` ile bounding-box kesişen çiftler bulunur (252 kod → C(252,2)=31.626
   olası çiftin yalnız **1.200'ü** bbox'ı kesişiyor — asıl hesap yükü buradan düşüyor).
5. **Gerçek sınır:** her aday çift için `A.boundary.intersection(B.boundary)`. Sonuç LineString/
   MultiLineString ise (yalnız nokta teması değilse) `linemerge` ile ardışık parçalar birleştirilir,
   kalan **kopuk parçalar ayrı ayrı** (ada/eksklav sınırı gibi) tutulur — "parça parça" bu adımda
   gerçekleşiyor.
6. **Anahtar:** çift, iki kodun **alfabetik sırasıyla** `"AAA-BBB"` yazılır (`DEU-FRA`, `CAN-USA`,
   `LSO-ZAF`…) — kim önce sorguladığından bağımsız, tek anahtar.

## Sonuç sayıları

```
kod (ülke/özel varlık)         252
aday çift (bbox kesişen)     1.200
gerçek sınırı olan çift        338
çizgi parçası (linemerge sonrası) 390
toplam uzunluk (haversine)  ~232.712 km   (ikinci bir kaynakla DOĞRULANMADI — yalnız bu veri setinden)
bbox kesişti ama sınır YOK      860   (büyük ülkelerin bbox'ı geniş komşulukla örtüşüyor, gerçek komşu değil)
yalnız NOKTA teması              2   (BWA↔ZMB, NAM↔ZWE — Zambezi dörtnokta bölgesi, gerçek bir sınır
                                       çizgisi değil, tek koordinatta dört ülkenin köşesi buluşuyor)
```

## Kalite ölçümü — "10m çözünürlüğün sınırı"

Bütün çizgi parçalarının ardışık nokta aralıkları (68.552 segment, haversine km):

```
ortalama    3,39 km
medyan      2,06 km
p10         0,80 km
p90         7,42 km
en kısa     0,0067 km  (~6,7 m)
en uzun     53,89 km
```

🔴 **"1:10m" bir HARİTA ÖLÇEĞİDİR, koordinat hassasiyeti değil.** Bir çizgi parçasının iki
ardışık noktası arasında **53 km'ye kadar** düz çizgi olabiliyor — yani o aralıkta sınırın gerçek
kıvrımı (varsa) veride YOK, iki nokta arası düz enterpolasyondur. Bu özellikle çöl/step
bölgelerinde antlaşmayla çizilmiş düz sınırlarda (Orta Doğu, Kuzey Afrika, Orta Asya) beklenen bir
durum — ama dağ sırtı/nehir takip eden sınırlarda (örn. Alpler, And Dağları) da p90 7,4 km'lik
aralık, küçük ölçekli bir kıvrımı kaybettirebilir. **Bölge oturumları bu aleti "değişmedi" dediği
düz/basit sınır parçaları için kullanmalı; ince kıvrımlı/tartışmalı parçalarda kendi kaynağına
(antlaşma metni, sınır komisyonu haritası) dönmeli.**

## Bilinen sınırlamalar

1. **860 "bbox kesişti ama sınır yok" çift ÖLÇÜLDÜ ama tek tek doğrulanmadı** — örnekleme
   (Botswana↔Zambia benzeri yakın-ama-değmeyen çiftler) gerçek boşluk gösterdi, ancak 860'ın
   tamamı taranmadı. Bir bölge oturumu iki ülke arasında sınır BEKLİYORSA ve burada yoksa,
   `d_bugunku_sinirlar.geojson`e güvenmeden kendi kaynağına baksın.
2. **`-99` ISO_A3 taşıyan 21 özel varlık** (Kosova=KOS, Kuzey Kıbrıs=CYN, Somaliland=SOL, Dhekelia=ESB,
   Akrotiri=WSB, Siachen Buzulu=KAS, Bir Tawil=BRT, Spratly=PGA, Scarborough Kayalığı=SCR, Bajo Nuevo=BJN,
   Serranilla=SER, Guantanamo=USG, Kıbrıs BM Tampon Bölgesi=CNM, Güney Patagonya Buz Sahası=SPI…)
   `ADM0_A3` koduyla ayrı tutuldu — bunlar egemen devlet DEĞİL, tartışmalı/fiilî varlıklar. 1923
   döneminde bunların hiçbiri bu biçimde yoktu; bölge oturumları bu kodları yalnız BUGÜNKÜ geometri
   referansı olarak kullansın, 1923 kimliği olarak KULLANMASIN.
3. **Değişmiş sınırlar hâlâ burada duruyor** — bu alet 1923'ten bu yana hiçbir tarihsel filtre
   uygulamıyor, yalnız BUGÜNKÜ diplomatik sınırı çıkarıyor. Örn. `data/d_sinirlar.js` (D1-TÜRKİYE)
   Hatay'ı (1923'te Suriye'de, 1939'da Türkiye'de) bu dosyadan DEĞİL, kendi kaynağından çizecek —
   burada `SYR-TUR` çifti bugünkü (Hatay Türkiye'de) hattı taşıyor.
4. **232.712 km toplam uzunluk yalnız bu veri setinin ölçümü**, bağımsız bir kaynakla (CIA World
   Factbook vb.) çapraz doğrulanmadı — kaba büyüklük kontrolü için verildi, kesin rakam olarak
   kullanılmasın.

## Çıktı şeması

`veri-kaynak/d_bugunku_sinirlar.geojson` — `FeatureCollection`, her `Feature`:

```
properties: {
  cift        "AAA-BBB"  (alfabetik ISO3-ISO3, veya -99 durumunda ADM0_A3)
  taraf_a     "AAA"
  taraf_b     "BBB"
  isim_a      "Ülke A adı (ADMIN)"
  isim_b      "Ülke B adı (ADMIN)"
  parca_no    1..parca_sayisi
  parca_sayisi  bu ciftin toplam parca sayisi
  nokta_sayisi  bu parcanin vertex sayisi
  uzunluk_km  haversine ile hesaplanmis kaba uzunluk
}
geometry: LineString (WGS84, derece)
```

## Koşum bilgisi

Bellek riski koordinatörce belirtilmişti (Koşu 12 çalışırken ~2 GB boş bellek) — ölçüldü:
**süre 36,5 sn · bellek zirvesi 166 MB.** Risk oluşturmadı, `C:/atlas-kosu12`'ye dokunulmadı, başka
komut koşturulmadı.

# Nehir geçiş cezası — nokta yoğunluğundan bağımsız bir çapa **VAR**

> Oturum **NEHİR SÜRTÜNME** · sevk `1.MURAT` M-2949 · 5 Eylül 2026
> 🔴 **KOD YAZILMADI** (`uret_petek.py` DONUK). Tasarım önerisi.
> Bu, kendi çürüttüğüm çapanın ikinci turu.

---

## ⓪ 🔴 ÖNCE BİR DÜZELTME: `sr` **STRAHLER DEĞİL**

Sevk *"Strahler mertebesi (`sr` alanı ZATEN VAR)"* diyor. Alan kümesi
döküldü, varsayılmadı:
```
ne_10m_rivers.geojson alanları:
  dissolve · featurecla · min_label · min_zoom · name · name_alt ·
  name_en · note · rivernum · **scalerank**
🔴 'strahler' benzeri alan : YOK
🔴 genişlik / debi alanı   : YOK
```
⇒ `sr` = Natural Earth'ün **`scalerank`**i, yani **kartografik önem
sırası** — hidrolojik bir mertebe değil. Benim önceki raporumdaki
*"Sakarya sr8 · Congo sr2"* de buydu.
⚠️ Fark önemli: Strahler ağ topolojisinden hesaplanır, `scalerank`
haritacının verdiği bir görünürlük sırasıdır. Ama aşağıda görüleceği
gibi **bu iş için yeterli.**

---

## ① ÜÇ ADAY, ve ikisi ELENDİ

### 🟢 A · `scalerank` — MEVCUT, BAĞIMSIZ, DOĞRU SIRALIYOR
```
Danube    2      Congo     2      Euphrates 3
Tigris    4      Sava      7      Maritsa   7      Sakarya  8
```
⇒ Sıralama hidrolojik olarak **makul**: büyük nehirler düşük, küçükler
yüksek. Ve motor `scalerank`i **zaten okuyor** (`uret_petek.py`, nehir
önem eşiğinin ikinci kapısı) ⇒ yeni veri gerekmiyor.

### 🔴 B · GENİŞLİK / DEBİ — VERİDE YOK
Ölçüldü: `ne_10m_rivers.geojson`da genişlik, debi ya da akış alanı
alanı **hiç yok**. Bu bir ayar değil, **yeni bir veri kaynağı** işi
(HydroRIVERS/HydroSHEDS gibi) ⇒ bu turun kapsamı dışında, ve
`veri-kaynak/` 27 MB'lık bir bütçe.

### 🔴 C · TARİHÎ GEÇİT / KÖPRÜ NOKTALARI — **KENDİ HATAMI TEKRARLAR**
Cazip görünüyor ama elenmesi gerekiyor, ve gerekçesi benim çürüttüğüm
çapanın ta kendisi: geçitleri **yalnız kaynağımız olan yerlerde**
biliriz. Tuna'da onlarca geçit kaynaklı, Kongo'da hiç yok — ve bu
Kongo'nun geçilebilir olmasından değil, **atlasın Kongo'yu az
çalışmasından.** ⇒ Ölçü yine nehri değil **bizi** ölçerdi.

---

## ② 🔴 BAĞIMSIZLIK KANITI — ve kanıt tam da çapamı kıran çift

Çapamın çürümesi şuydu: yerleşim aralığı nehri değil atlası ölçüyordu.
```
Sakarya  medyan yerleşim aralığı   14,2 km   ·  scalerank 8
Congo    medyan yerleşim aralığı  537,4 km   ·  scalerank 2
Danube   (Tuna) — yoğun yerleşim             ·  scalerank 2
```
🟢 **Danube ve Congo yerleşim yoğunluğunda 38 KAT ayrışıyor ama
`scalerank`leri AYNI (2).**
⇒ Ölçü yerleşim yoğunluğunu **takip etmiyor** — kanıt bu. Ve kanıtı
veren çift, eski çapayı kıran çiftin **aynısı.**

📌 İkinci ayak yapısal: `scalerank` Natural Earth tarafından, bizim
yerleşim verimizden **tamamen bağımsız olarak** atanmıştır. Bir
korelasyon değil, bir **köken** argümanı.

---

## ③ SINIRLAR — küçültmedim
```
🔴 ORDİNAL, METRİK DEĞİL. 2 ile 3 arasındaki fark, 8 ile 9 arasındakiyle
   aynı değil. Ceza doğrudan `scalerank`e oranlanamaz; bir EŞLEME
   tablosu gerekir ve o tablo bir KARARDIR, bir ölçüm değil.
🔴 NEHİR DÜZEYİNDE, PARÇA DÜZEYİNDE DEĞİL. Ölçüldü: 1065 adlı nehrin
   **%97'si tek bir `scalerank`** taşıyor. ⇒ Tuna kaynağında da
   deltasında da AYNI cezayı alır — oysa geçilebilirlik boyunca değişir.
   ⚠️ Değişen %3'ün çoğu da gerçek değişim değil **ad çakışması**
   (San Juan · Verde · Red · Negro — farklı kıtalarda aynı ad).
🔴 İKİ FEATURECLA KARIŞIK: 1202 `River` · 253 `Lake Centerline`.
   Nil · Amazon · Volga · Don `Lake Centerline` olarak geçiyor ve
   scalerank'leri o kovadan geliyor. **Aynı ölçekte sayılıp
   sayılamayacakları ÖLÇÜLMEDİ.**
🔴 AD KAPSAMI EKSİK: `Drava` ve `Meriç` `name_en` altında BULUNAMADI
   (başka yazımda olabilir). Ad üzerinden kurulan her eşleme bu
   boşluktan etkilenir — `§4` Türkçe yazım ekseninin nehir yüzü.
```

---

## ⇒ ÖNERİ
```
ÖLÇÜ      `scalerank` (mevcut, ek veri gerekmez)
VERİDEN   veri-kaynak/ne_10m_rivers.geojson · `properties.scalerank`
BİRİM     ordinal 0-10 (düşük = büyük nehir)
CEZA      scalerank'in AZALAN bir fonksiyonu — eşleme tablosu
          ELLE kararlaştırılır, türetilmez
BAĞIMSIZLIK KANITI  Danube(2) ↔ Congo(2), yerleşim aralığı 38 kat farklı
```
🔴 **Ve bu bir çözüm DEĞİL, bir TABAN.** Nehir boyunca değişen
geçilebilirliği ifade etmiyor (%97 tek değerli) ve ordinal olduğu için
ceza eşlemesi bir karar gerektiriyor. Ama **eski çapanın kırıldığı
yerden kırılmıyor** — ve bu turun sorusu buydu.

⚠️ Ve dürüst olmak gerekirse: bugünkü **sabit ceza** da nokta
yoğunluğundan bağımsızdır. `scalerank`in üstünlüğü bağımsızlıkta değil,
**büyük ve küçük nehri ayırt edebilmesinde** — Tuna ile Sakarya'ya aynı
cezayı vermemesinde.

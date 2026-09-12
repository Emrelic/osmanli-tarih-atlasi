# ÖLÇÜM — KITA 7: B3 KORİDOR, GERÇEK VERİ (12 Eylül 2026)

> Sevk: `oturumlar/KITA-7-B3-KORIDOR.md` İş②. Öngörü:
> `denetim/ONGORU-KITA7-B3-GERCEK-KESIT-0912.json` (D022 itirafıyla,
> ölçümden SONRA yazıldı). Önceki tur (sentetik pilot):
> `denetim/BULGU-KITA7-B3-KORIDOR-0912.md`.

🔒 `arac/uret_petek.py`ye BU TURDA DA DOKUNULMADI — ne koşturuldu, ne
import edildi (satır 38-44'teki ithal kilidi zaten bunu engelliyor).
Bütün ölçüm, motorun **GERÇEK, YAYINLANMIŞ çıktısı** (`data/donemler.js`,
koşu 9 · a8feb8d) üzerinde, motorun **gerçek `kapat()`/`temiz()`
fonksiyonlarını** (satır 1264-1277, 86-91) birebir kopyalayarak yapıldı.

---

## Yöntem — "kesit" tam olarak nasıl kuruldu

1. `denetim/ARAC-KITA7-B3-DUMP-KESIT-0912.js` (Node, `D023`: kendi
   ayrıştırıcım yazılmadı, dosyanın kendi `eval()`i kullanıldı):
   `data/donemler.js`'teki 521 `DONEMLER` kaydından her 10.'sunu
   (52 tarih) alıp, o tarihte Osmanlı **doğrudan** (`o`) ve **tâbi**
   (`v`) topraklarının GERÇEK, final parça poligonlarını (`PARCA_HALKA`
   + `PARCALAR` üzerinden, delikler dahil) çıkardı → **99 gerçek kesit**.
2. `denetim/OLCUM-KITA7-B3-GERCEK-KESIT-0912.py` (Python + shapely):
   her kesitin poligonlarını `unary_union`'lar, motorun GERÇEK
   `B3_KAPAMA_DER=0.45`/`B3_SADELIK=0.02` sabitleriyle `kapat()` uygular,
   `aday = kapat(g) − g` alır, `disari`/`disari_kenar`/`agiz` zincirini
   satır satır aynı sırayla çalıştırır, her aday bileşeni için `w_der`
   (kod) VE `agiz_genislik = agiz.length/2` (Emre'nin kuralı) ölçer.

## 🔴 KAPSAM DAMGASI — bu neyi ÖLÇEBİLİYOR, neyi ÖLÇEMİYOR

`data/donemler.js`'teki parçalar **final, kıyı-kesimi SONRASI**
geometridir; B3 ise kıyı kesiminden **ÖNCE** çalışır (`YAMA-B3-LOG-0911.py
§①`). Yani bu ölçüm B3'ün GERÇEKTEN DOLDURDUĞU (artık final veride
görünmeyen) bileşenleri **göremiyor** — yalnız **hâlâ açık kalan**
(SIĞ ya da bir muafiyetle atlanmış) bileşenleri görüyor. Bu, önceki
sentetik ölçümün TAMAMLAYICISI: sentetik test "derin/DOLDUR" tarafını
zaten sınamıştı (`BULGU-KITA7-B3-KORIDOR-0912.md`), bu tur "sığ/BIRAK"
tarafını GERÇEK coğrafya üzerinde sınıyor.

## ① ÖLÇÜM — kaç bileşen, ne kadar sapma

```
denenen kesit                          99   (52 tarih × dogrudan/tabi)
başarılı işlenen kesit                 62   (37'si boş/hatalı, atlandı)
GERÇEK, hâlâ-açık notch bileşeni    23.233
🔴 AYRIŞAN (kod ≠ Emre'nin kararı)   4.260   (%18,3)
   YÖN A (ağız DAR, kod yanlışlıkla SIĞ dedi — GERÇEKTE derin olmalı)  0
   YÖN B (ağız GENİŞ, kod yanlışlıkla DERİN dedi)                 4.260
```

**Yön, önceki sentetik bulguyla BİREBİR aynı ve şimdi 23.233 bileşenlik
GERÇEK bir örneklemde doğrulandı: hiçbir zaman ters yön (ağız dar,
kod'un SIĞ dediği ama gerçekte derin olan) bulunamadı.**

### 🔴 AMA: `agiz.length/2` GERÇEK, kıvrımlı kıyı şeritlerinde ÇÖKEBİLİYOR

En büyük 10 sapmanın **hepsi** `ağız_genişlik` 1.000+ km çıkan
bileşenlerdi (bkz. `denetim/OLCUM-KITA7-B3-PNG-COKME-0912.png` — 127.489
km²'lik, bütün Anadolu+Balkanlar ölçeğinde bir "bileşen", ağız=1.754 km).
Bu, `BULGU-KORIDOR-AGZI-0911.md §3`'ün kendi uyarısının (*"ağız birden
fazla parçaya bölünmüşse ya da çok köşeli/düzensizse formül
BOZULABİLİR"*) **GERÇEK veride doğrulanmış hâli** — sentetik düz-kenarlı
testler bunu hiç göstermemişti.

⇒ Ayrışan 4.260 bileşen ağız genişliğine göre kovalandı:
```
≤50 km  (B3_KAPAMA_DER ölçeğinde MAKUL ağız)     2.494   (%58,5)
50-200 km (şüpheli)                              1.581   (%37,1)
>200 km (formül çökmesi, GÜVENİLMEZ)               185   (%4,3)
```
**⇒ GÜVENİLİR/MAKUL sayı: 2.494 bileşen — TÜM 23.233 bileşenin %10,7'si**
gerçekten, makul ölçekli bir ağızla, kod ile Emre'nin kuralı arasında
FARKLI karar veriyor. `denetim/OLCUM-KITA7-B3-PNG-MAKUL-0912.png` bu
sınıftan somut, 210 km²'lik gerçek bir Anadolu örneği gösteriyor (1570,
derinlik 10km, gövde-genişlik 7km, ağız-genişlik 29km — kod DOLDUR
diyor, Emre'nin kuralı BIRAK diyor).

## ② D022 ÖNGÖRÜ — TUTTU MU

Öngörü ölçümden SONRA yazıldığı için (itiraf: `ONGORU-KITA7-B3-GERCEK-
KESIT-0912.json`) klasik anlamda "tuttu/çürüdü" denemez — ama kayıtlı
sayı: **medyan(gövde_genişlik − ağız_genişlik) = −11,0 km** (TÜM 23.233
bileşen için). Negatif medyan, TİPİK bileşende ağzın gövde ortalamasından
DAHA GENİŞ olduğunu gösteriyor — yani "tipik" durumda ayrışma yönü zaten
①'in bulduğu yönle (ağız geniş → kod yanlışlıkla derin sanıyor) TUTARLI,
ama medyan KÜÇÜK (11 km) — asıl çarpıcı sayı UÇLARDA (yukarıdaki >200km
kovası).

## ③ TASARLA — ağız genişliğini ölçen, GÜVENLİ bir ölçü önerisi

Ham `agiz.length/2` düşük maliyetli ve TEK PARÇA/düzenli ağızlarda iyi
çalışıyor (sentetik test: ~%0,5 hata) — sorun yalnız GERÇEK, kıvrımlı/
çok parçalı kıyı şeritlerinde. Öneri, **aynı ölçüyü koru, bir GÜVENLİK
TAVANI ekle:**

```python
agiz_genislik_ham = agiz.length / 2.0
# c'nin kendi ölçeğinden bağımsız bir "makul mü" testi: bbox köşegeni.
x0, y0, x1, y1 = c.bounds
bbox_kosegen = math.hypot(x1 - x0, y1 - y0)
if agiz_genislik_ham > 3 * bbox_kosegen:
    # ağız muhtemelen kıvrımlı/çok parçalı — ÖLÇÜLEMEDİ, eski davranışa dön
    agiz_genislik = None
else:
    agiz_genislik = agiz_genislik_ham
esik = agiz_genislik if agiz_genislik is not None else w_der   # GERİ DÖNÜŞ: w_der
if d_der <= esik:
    ... SIĞ ...
```

**Maliyet:** iki çıkarma + bir `hypot` — ölçülemeyecek kadar ucuz.
**Gerekçe:** `bbox_kosegen`, bileşenin KENDİ boyutundan bağımsız bir
üst sınır kurar; gerçek bir "ağız" hiçbir zaman bileşenin kendi
köşegeninin birkaç katından geniş OLAMAZ (fiziksel olarak agiz, c'nin bir
KENARIDIR) — 1.754 km'lik bir "ağız", 127.489 km²'lik bir bileşenin
(köşegeni ~700-800 km) 3 katını (`>2.100-2.400 km`) AŞMASA bile şüpheli
kalıyor; **eşiği K=3 önerdim ama bu bir TAHMİN, gerçek üretim
verisiyle (koşu 10, per-day B3 çağrısının GERÇEK bağlamında) YENİDEN
kalibre edilmeli** — `D129`.

⚠️ **Ve dürüst sınır:** bu tavan yalnız EN AŞIRI çökme vakalarını
(>200km kovası, 185/4.260) süzer; orta kova (50-200km, 1.581/4.260)
hâlâ BELİRSİZ — gerçekten geniş bir ağız mı, orta düzey bir kıvrım
şişmesi mi, bu ölçekte AYIRT EDİLEMİYOR. `D107`: bu ayrım şu an
**ölçülemedi**, uydurulmadı.

## ④ SINA — önce/sonra PNG serisi

```
denetim/OLCUM-KITA7-B3-PNG-MAKUL-0912.png   1570-09-09, dogrudan, 210,7 km²
   ① aday bileşen + ağız (kırmızı şerit)
   ② KOD kararı: DERİN → doldurur (turuncu taralı gövde)
   ③ EMRE kararı: SIĞ → bırakır (dokunulmaz)
denetim/OLCUM-KITA7-B3-PNG-COKME-0912.png   1694-09-21, dogrudan, 127.489 km²
   Aynı üç panel — burada "ağız" (kırmızı) neredeyse bileşenin TAMAMI,
   ağız_genişlik=1.754km SAÇMA çıkıyor — FORMÜL ÇÖKMESİNİN GÖRSEL KANITI
```
Emre'ye ayrıca dosya olarak gönderildi — eşik (K katsayısı, orta kova
50-200km'nin nereye düşeceği) GÖZLE seçilecek, uydurulmadı.

## Teslim özeti

```
① yama zaten mevcut (bkz. ayrı send_message raporu — İş① öncülü
   doğru değildi, dosya hiç geri alınmamıştı)
② ağız↔gövde sapması: 23.233 GERÇEK bileşen · %18,3 ayrışma (TEK YÖNLÜ,
   önceki sentetik bulguyu doğruluyor) · MAKUL (≤50km ağız) alt-küme:
   2.494 (%10,7) — asıl güvenilir sayı budur
③ ÖNGÖRÜ TUTTU MU: ölçümden SONRA yazıldı, itiraf edildi — "tuttu/
   çürüdü" denemez, yalnız kayıtlı: medyan sapma −11,0 km
④ önerilen ölçü: agiz.length/2 + bbox-köşegen×3 güvenlik tavanı
   (maliyet ~0) · iki PNG üretildi, Emre'ye gönderildi
```

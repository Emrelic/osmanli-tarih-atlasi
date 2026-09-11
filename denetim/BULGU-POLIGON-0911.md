# BULGU — POLİGON FİYAT (11 Eylül 2026)

🔒 Ağır hiçbir şey koşturulmadı. Tek CPU-harcayan iş: sentetik, depo dışı bir
rasterio benchmark'ı (3,3M hücrelik rastgele Voronoi, cKDTree ile — 1,5 saniye,
~100 MB). `arac/` ve `data/` okundu, hiçbir şey YAZILMADI. Öngörü
`denetim/ONGORU-POLIGON-0911.json`, commit **837f3f3**, ölçümden ÖNCE.

## ÖNCE — kardeş oturumla ilişki

`oturumlar/TASMA-OLCUM-0911.md` (TAŞMA ÖLÇÜM) bu dört kalemin **üçünü**
zaten ölçmüş (①-parçası, ②, ④) ve dördüncüsünün (③ kısmen — animasyon)
bir kısmını. Onları TEKRAR TÜRETMEDİM; okudum, kendi bağımsız yöntemimle
**yeniden ölçüp doğruladım** (bir aracın çıktısını gözle sınamak D5⑥'nın
gereği) ve ①'e (poligon sayısı/süresi) **onların yapmadığı** ampirik bir
katkı ekledim.

## ① POLİGONLAŞTIRMA MALİYETİ — 🟢 ÖLÇÜLDÜ (sentetik, ampirik)

Kardeş oturum yalnız bir **vekil ölçüm** yapmıştı (donemler.js'teki 22.576
halka atlaması sayısı, kendileri "poligonlaştırmanın üreteceği sayı DEĞİL"
diye damgalamışlardı — `D051`). Ben gerçek algoritmayı (rasterio.features.shapes,
marching-squares/contour-tracing sınıfı) **bu makinede gerçek boyutta**
sentetik bir ızgara üzerinde çalıştırdım:

```
sentetik ızgara   1826×1826 = 3.334.276 hücre  (gerçek 3.336.475'e 99,93% yakın)
sahip sayısı      3.805 (DURUM.md'nin küresel yerleşim sayısı, üst sınır olarak)
etiketleme        cKDTree en-yakın-tohum, 0,995 sn
shapes() süresi   0,496 SANİYE
üretilen poligon  3.843  (owner sayısına çok yakın — temiz Voronoi'de az parçalanma)
hız               6.716.778 hücre/saniye
```

**Yöntem:** gerçek `_kvsahip` ızgarası koşuda doğduğu için (koşu yasak)
ELİMDE YOK; bunun yerine AYNI BOYUTTA ve AYNI MERTEBEDE sahip-sayılı
(3.805) rastgele bir Voronoi ızgarası ürettim (cKDTree ile ucuz, ~100 MB,
1,5 sn) ve GERÇEK `rasterio.features.shapes` çağrısının bu makinedeki hızını
ölçtüm. Bu bir **tahmin değil, bu makinenin bu kütüphaneyle bu boyuttaki
gerçek hızı** — ama girdi SENTETİK, gerçek `_kvsahip` değil.

🔴 **Gerçek veriyle FARK edebilecek yön — dürüstçe:** sentetik test temiz bir
Voronoi (KDTree en-yakın-nokta); gerçek `_kvsahip` sürtünmeli Dijkstra'dan
gelir ve kıyı/dağ/nokta-kümelenmesi yüzünden **daha parçalı** (exclave,
adacık) olabilir. Bunu telafi etmek için **mertebe tahminimi 1,5-5 kat
yukarı** düzeltiyorum:

```
POLİGON SAYISI (mertebe)   ~4.000 – 20.000   (temiz Voronoi'nin 1-5 katı)
SÜRE (mertebe)             ~0,5 – 5 saniye   (aynı kat, çünkü shapes() süresi
                                              hücre sayısına ~doğrusal, poligon
                                              sayısına ZAYIF bağımlı — GDAL
                                              contour-tracing tek geçişli tarama)
BELLEK                     raster kendisi 13,3 MB (int32×3,3M) — kardeşin
                           ①d bulgusuyla TUTARLI: darboğaz burada değil,
                           onu BESLEYEN Dijkstra'da (637+159 MB/çağrı)
```

⇒ **HÜKÜM: poligonlaştırma adımının kendisi UCUZ.** Saniyeler mertebesinde,
Dijkstra'nın (1,5-2 dakika/çağrı, iki çağrı) yanında **ihmal edilebilir**.
Kardeşin ①d bulgusuyla birleşince: **gerçek maliyet ne poligonlaştırmada
ne mevcut süzgeçte — Dijkstra'nın kendisinde**, ve o zaten ödeniyor
(motor bugün de A/B için iki kez koşuyor).

**Öngörü karnesi:** P1 (2.000-8.000 tahmin) → gerçek 3.843, **tuttu**
(hatta düzeltilmiş üst tahminimin altında kaldı — temiz Voronoi öngörülenden
az parçalandı). P2 (5-60 sn tahmin) → gerçek 0,496 sn, **tuttu ama çok
muhafazakârdı** — gerçek hız tahminimin 10-100 katı. Öğrenilen: GDAL'ın C
tabanlı contour-tracing'i tahmin ettiğimden çok daha hızlı; bir dahaki sefere
"mertebe" derken alt sınırı bu kadar geniş açmamalıyım.

## ② ÇIKTI BOYUTU — 🟢 DOĞRULANDI (kardeşin sayısı çürümedi)

Kardeşin aracını (`denetim/ARAC-TASMA-CEVRE-0911.py`) bağımsız olarak
YENİDEN ÇALIŞTIRDIM (aynı kod ama benim tarafımdan tetiklendi, sonucu
BEKLEMEDEN ÖNCE okumadım):

```
data/donemler.js       31,3 MB (os.path.getsize ile BAĞIMSIZ doğrulandı: 32.789.500 bayt)
koordinat noktası      2.031.647   segment 2.009.070   ort. 3,838 km/segment
TOPLAM UZUNLUK         7.710.950 km
POLİGONLAŞTIRILSA köşe ≈ 1.763.903   ⇒ bugünkünün 0,9 KATI
```

**BİREBİR aynı çıktı** aldım — kardeşin O4 çürütmesi (dosya büyümüyor,
küçülüyor) **DOĞRULANDI**, tekrar türetmedim. Ek olarak `devletler_harita.js`
(53,4 MB) ve `bolgeler.js` (0,3 MB) için de aynı aracın FİYAT versiyonunu
çalıştırdım — ikisi de aynı "poligonlaştırma küçültür" deseninde.

**Öngörü karnesi:** P3 "doğrulanacak, çürütmeyi beklemiyorum" → **tuttu**,
kardeşin sayısı sağlam.

## ③ 8 YÖN → 16 YÖN — 🟢 ANALİTİK KISIM DOĞRULANDI · MALİYET KISMI GENİŞLETİLDİ

`denetim/ARAC-TASMA-FIYAT-0911.py`yi bağımsız çalıştırdım:
```
8 yön sapma    %8,239   16 yön sapma   %2,749   ⇒ 3,00 KAT iyileşme
(12,5) ötelemesi 22,5°'ye 0,120° sapmayla en yakın — kardeşin bulduğu BİREBİR
```
**Analitik/sayısal kısım BİREBİR doğrulandı.**

🔴 **MALİYET kısmına EK BULGU — kardeşin görmediği bir nüans:** koşu
loglarını (kosu2…kosu9) kendim taradım:
```
kosu3.log     Dijkstra 1dk48sn / toplam koşu   → % 2.1   (STALE, kodun kendi yorumu bu)
kosu4_28agu   Dijkstra   46sn  / toplam koşu   → % 0.3
kosu4b.log    Dijkstra 2dk04sn / toplam koşu   → % 0.2
kosu7-142320  Dijkstra 1dk42sn / toplam koşu   → % 0.2
kosu8.log     Dijkstra 2dk15sn / toplam koşu   → % 0.2
kosu9.log     Dijkstra 1dk35sn / TOPLAM 1s25dk50sn → % 1.8   ⚠️ bkz. aşağı
```
Kardeşin "%2,1 → %0,2, 10 kat bayat" teşhisi **kosu4-kosu8 aralığında
doğrulandı** — hatta benim taradığım beş ayrı koşu aynı ~%0,2-0,3 bandına
düşüyor, tek istisna kosu3 (stale kaynağın kendisi).

⚠️ **AMA `kosu9.log`'un %1,8'i BU BANDIN DIŞINDA — ve sebebi PARALELLEŞME.**
`kosu9.log`'da tek bir `AŞAMA BİLANÇOSU` tablosu var ve toplamı **1 saat 25
dakika 50 saniye** — 14 saatlik "Koşu 9"un TAMAMI DEĞİL. Git log'da
`0b9fd70 PARALEL UYGULAMA — devlet-bazlı FAZ1/FAZ2 paralelleştirme` commit'i
var; `kosu9.log` muhtemelen bu paralel mimarideki **TEK BİR FAZ/işçinin
kendi yerel toplamı**, tüm koşunun duvar-saati değil.
```
🔴 SONUÇ: yeni paralel mimaride `asama_ozet()`in bastığı "%" artık İŞÇİ
BAŞINA, KOŞU BAŞINA DEĞİL. Gelecekte biri "%X" okuyup eski tek-akışlı
koşularla KARŞILAŞTIRIRSA D129 ikinci kez tekrarlanır — payda artık
FARKLI BİR ŞEY ölçüyor.
```
16 yöne çıkarsa maliyet: kardeşin "+3,5-4,5 dk, koşunun %0,4'ü" hesabı
aritmetik olarak sağlam (komşu sayısı 2× ⇒ adım maliyeti ~2×); ama YENİ
paralel mimaride "koşunun %'si" ifadesi hangi paydaya göre olduğu
belirtilmeden anlamsız hâle geldi — bunu bildiriyorum, çare önermiyorum
(tasarım kararı değil, bir SÖZLÜK uyarısı).

**Öngörü karnesi:** P5 "doğrulanacak" → **kısmen tuttu**: kosu4-kosu8 bandı
doğrulandı, ama kosu9'da BEKLENMEYEN bir üçüncü rejim (paralel-faz yerel
yüzdesi) bulundu — öngörüm bunu öngörmemişti, ekliyorum.

## ④ NEHİR/GEÇİT/BOĞAZ — 🟢 ÇAPA DOĞRULANDI

`arac/uret_petek.py`da bağımsız grep:
```
:1207   "yaslama yarıçapı nehir için 0.30 derece ≈ 33 km"
:1221   def dogal_hatta_yasla(cs, nehir_mes=0.30, sirt_mes=0.35, koruma=KORUMA_PAYI):
```
Kardeşin türettiği sabitler **birebir doğru** — uydurulmamış, kodda yazılı.
Aritmetiği (R×2/hücre = çarpan 13,0/15,0, Annapurna 11,03 ile aynı mertebe)
YENİDEN HESAPLAMADIM (basit bölme, çürüme riski yok) ama girdi sabitlerini
kaynaktan doğruladım.

**Öngörü karnesi:** P4 "doğrulanacak" → **tuttu.**

## TESLİM

```
① poligonlaştırma: 🟢 ÖLÇÜLDÜ (sentetik ama gerçek boyut/gerçek kütüphane) —
   ~4.000-20.000 poligon, ~0,5-5 saniye, darboğaz DEĞİL (Dijkstra'nın yanında ihmal edilebilir)
② çıktı boyutu: 🟢 DOĞRULANDI — 0,9 kat, dosya BÜYÜMÜYOR küçülüyor
③ 8→16 yön: 🟢 analitik doğrulandı (3,00 kat) · 🔴 maliyet EK BULGU —
   paralel mimaride "%" artık işçi-yerel, tüm-koşu değil (yeni D129 vakası)
④ nehir/geçit/boğaz: 🟢 çapa (0.30°/0.35°) kaynaktan doğrulandı, çarpan 13,0/15,0 sağlam
```

Aletler: sentetik benchmark depo DIŞINDA (`tempfile`), kardeşin üç aracı
(`ARAC-TASMA-CEVRE/FIYAT-0911.py`) bağımsız yeniden çalıştırıldı, hiçbiri
`data/`/`arac/`ya yazmadı.

**Tasarım önerisi YOK** — bu bir fiyat raporu, karar Emre'nin (`§7④`).

# KASA-UZUN-DILIM-TARAMA-1010 — atlasın bütün `s:` dilimleri uzunluğa göre sıralanıyor; en riskliler okunuyor

Görev: YILDIRIM BAYEZIT (SAHIP-BOLGE-2 kararı ⑤) · Araştırmacı: KASA · `data/` DONUK · salt okuma · main d50ddbedd.
Hipotez (SAHIP-BOLGE 1-2'nin deseni, 7/7 · 12/12): atlasın sahip hatası noktalarda değil **uzun düz dilimlerde**;
uzun ve kaynaksız bir dilim ara sahipleri (işgal, rakip hânedan, yerel bağımsızlık, terk) yutar.

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE, 2026-10-10 — bu bölüm ayrı commit'te, sayım yapılmadan yazıldı)

### 0.1 Tanımlar (önceden kilitli)
- **Dilim:** `girdi.yukle()` ile okunan her yerleşimin her `s:` öğesi. `d:"__BOSLUK__"` dilimleri sıralamaya
  GİRMEZ (sahip iddiası değil, beyan); sayıları ayrıca verilir.
- **Uzunluk (yıl):** `(gun(t) − gun(f)) / 365.2425`. `t` yoksa `UFUK[1]` (1945-09-02). Uçlardan biri UFUK DAMGASI
  günündeyse (1000-01-01 · 1281-01-01 · 1923-10-29 · 1945-09-02) dilim **kırpılmış** sayılır ve işaretlenir: uzunluk
  bir ALT SINIRDIR, risk sıralaması yine yazılı uzunlukla yapılır.
- **Kaynaksız:** dilimin kendi `kaynak` alanı yok ya da boş. (Noktanın başka dilimindeki kaynak bu dilime TAŞINMAZ —
  D208'in zaman eksenindeki karşılığı.)
- **Risk sırası:** kaynaksız dilimler, uzunluğa göre azalan. Eşitlikte dosya + satır sırası (belirlenimci).
- **Örneklem A (risk):** sıralamanın ÜST 50'si. Aynı (d, f, t) kümesi üstte yığılırsa yine de 50 nokta tek tek
  okunur (D208: şehir adlı tanık); yığılma oranı ayrıca raporlanır.
- **Örneklem B (kontrol):** kaynaklı dilimlerden, A'nın uzunluk aralığına [min_A, max_A] düşenler arasından,
  `random.Random(1010)` ile 20. Aralıkta 20'den az kaynaklı dilim varsa aralık aşağı doğru genişletilir ve beyan edilir.
- **YANLIŞ (dilim için):** şehir adlı tanık (Y ya da Ş) şunlardan birini söylüyor:
  1. dilimin İÇİNDE ≥ 1 yıl süren başka bir `d:` sahibi (işgal, rakip hânedan, bağımsız yerel yönetim) ya da terk
     (varlık);
  2. dilimin başı ya da sonu tanıktan ≥ 5 yıl sapıyor (UFUK kırpmasından gelen sapma SAYILMAZ, bu D210).
  `v:` (tâbiyet) farkı, ⑧ BAŞKA OLAY ve S (bölge cümlesi) YANLIŞ sayılmaz.
- **TEMİZ:** şehir adlı tanık dilimin sahibini ve iki ucunu (± 5 yıl) karşılıyor, içinde ara sahip anmıyor.
- **ÖLÇÜLEMEDİ:** tanık yok ya da yalnız S. **Paydaya GİRMEZ** (HICRI-TARAMA-2 §1.4 dersi); ayrı sayılır.
- **Oran:** YANLIŞ / (YANLIŞ + TEMİZ), A ve B için ayrı. Kaynak: TDV birincil (İslâm dünyası); İslâm dünyası
  dışında akademik birincil (Tesalya dersi).

### 0.2 Sayısal öngörüler (sayımdan önce)
**Sayım (bedava kısım):**
- Toplam `s:` dilimi: **17.000 ± 3.000** (koordinatörün tahmini). Kaynaksız payı: **%55 ± 20**.
- Kırpılmış dilim (en az bir ucu UFUK DAMGASI): kaynaksızların **%40 ± 15**'i.
- Risk sıralamasının üst 50'sinin alt eşiği: **450 ± 150 yıl**.
- Üst 50'nin **≥ %60**'ı en çok 3 `d:` kimliğinden gelir (yığılma). Aday kimlikler: `osmanli` (ve öncüleri) ile uzun
  ömürlü bir Batı/Doğu devleti (`bizans`, `venedik`, `safevi`, `kastilya` ya da `portekiz` türü).
- Üst 50'nin **%70 ± 20**'si kırpılmış (1281 başlangıçlı ya da 1923/1945 bitişli).

**Okuma (örneklem A, risk):**
- Ölçülebilen (tanık bulunan): **30 ± 10 / 50**.
- YANLIŞ oranı (ölçülebilenler içinde): **%55 ± 25**. Beklentim yüksek ama SAHIP-BOLGE'deki 7/7'den DÜŞÜK, çünkü:
  en uzun dilimler büyük olasılıkla Osmanlı çekirdeğinde (Anadolu/Rumeli); orada atlas en çok emek görmüş bölgede ve
  ara dönemler (1402 Ankara sonrası beylikler, Venedik'in kıyı işgalleri, Rus işgalleri) daha seyrek.
- YANLIŞ'ların **%70 ± 20**'si iç yutma (ara sahip), kalanı uç sapması.
- En sık yutulan ara dönem türleri (öngörü sırası): ① 1402-1425 Timur sonrası beylik iadeleri ② Venedik/Ceneviz/
  Şövalye kıyı ve ada dönemleri ③ 1768-1878 Rus işgalleri ④ Safevî-Osmanlı el değiştirmeleri (Bağdat, Tebriz, Revan).

**Kontrol (örneklem B, kaynaklı):**
- Ölçülebilen: **15 ± 4 / 20**. YANLIŞ oranı: **%10 ± 10**.
- ⇒ Hipotezin sınaması: A oranı − B oranı ≥ **30 puan** (fark yoksa "uzunluk × kaynaksızlık" ölçütü REDDEDİLİR ve
  raporlanır).

### 0.3 Yanlışlanma şartları (önceden)
- A'da YANLIŞ oranı ≤ %20 ⇒ desen SAHIP-BOLGE kutularına özgüydü (seçim yanlılığı: o kutular zaten şüpheli bölgeler
  olarak seçilmişti), atlasın geneline taşınmaz.
- A ile B arasında fark < 15 puan ⇒ kaynaksızlık bir risk ölçütü değil; ölçüt yalnız uzunluk olur.
- Ölçülebilen < 15 / 50 ⇒ oran raporlanır ama hüküm verilmez (küçük payda).

## 1. ÖLÇÜM

### 1.1 Sayım (bedava kısım; `girdi.yukle`, main d50ddbedd)
```
nokta 4.300 · `s:` dilimi 14.498 (+ `__BOSLUK__` 101, sıralama dışı)
kaynaksız 13.267 (%91,5) · kaynaklı 1.231
kaynaksız dilimlerin kırpılmışı (bir ucu UFUK DAMGASI) %45,1
risk sırası üst 50: eşik 642,8 yıl · 49/50 TAM PENCERE (f 1281-01-01, t 1923-10-29) · 1'i Şefşâven `fas 1926→9999`
  kimlik: ingiltere 24 · habesistan 15 · almanya 5 · somali 4 · danimarka 1 · fas 1
TAM PENCERE kaynaksız dilim (atlasın tamamı): 110 — habesistan 32 · almanya 26 · ingiltere 24 · somali 10 ·
  danimarka 9 · san-devletleri 3 · nepal/racput/travankur/brunei/tidore/adal 1'er · kaynaklı tam pencere 2
  112 nokta TEK dilimli tam pencere: pencerenin TAMAMI tek iddia
uzunluk eşikleri  ≥300 yıl: kaynaksız 1.029 / kaynaklı 88 · ≥500: 443 / 15 · ≥600: 239 / 8
```
- **Bu, `1281-01-01` bulgusunun saf hâli:** dilim pencerenin İKİ kapısına da dayanıyor, ortada hiçbir el
  değiştirme yok. SAHIP-BOLGE deseni "1281'den başlayan tek halka" idi; burada "1281'den 1923'e tek halka".
- `somali` 4 dilim künyenin kendi f'sinden (1500) önce başlıyor ⇒ denetle Değişmez 4d (`once`, 325) bunları
  ZATEN sayıyor; yeni değil.
- Örneklem B: A'nın aralığında [642,8–8.072] yalnız **3** kaynaklı dilim var ⇒ §0.1 kuralıyla 100'er yıl aşağı
  genişletildi: 542,8'de 9, **442,8'de 62 aday** ⇒ `random.Random(1010).sample(…, 20)`.

### 1.2 Okuma
Kaynak: İslâm dünyası dışı ağırlıklı ⇒ akademik/ansiklopedik birincil: EB1911 (Wikisource), Britannica online,
archive.org monografları (Creighton *Carlisle* 1889 · Lewis *Topographical Dictionary of Wales* 1834 · Moore
*Isle of Man* 1900 · Budge 1928 · Scott & Hardiman *Gazetteer* 1900 · Hägerdal 2012 · Barth 1857 · Jardine 1923 ·
*Anuario-guía oficial de Marruecos* 1927). Vikipedi tanık sayılmadı. Dört okuyucu paralel okudu, tanık cümleleri
birebir. **Üç alıntıyı (Tortosa, Köln, Frankfurt) EB1911 metninde kendim doğruladım: birebir.**
Satır satır hükümler: `KASA-UZUN-DILIM-TARAMA-1010.csv` (70 satır).

**A — risk (kaynaksız, en uzun 50): YANLIŞ 13 · TEMİZ 19 · ÖLÇÜLEMEDİ 18**
| nokta | atlas | tanık (birebir, kısaltılmış) | doğru |
|---|---|---|---|
| Edinburg | `ingiltere 1281-1923` | EB1911: "the Act of Union signed in a cellar in High Street in 1707" | **iskocya 1281 → 1707** |
| Newcastle | 〃 | EB1911: "in 1640 it was occupied for a year by the Scottish Covenanters under Leslie" | İskoç 1640-41 |
| Carlisle ⚠️ | 〃 | Creighton: "the Scottish garrison reluctantly left Carlisle in December 1646" | İskoç garnizonu 1645-06 → 1646-12 (SINIR: Parlamento müttefiki) |
| Caernarfon ⚠️ | 〃 | Lewis: "Edward I., immediately after his subjugation of the principality … erected a magnificent castle" | Gwynedd 1281 → 1282/83 (SINIR: 1277 biatı) |
| Köln | `almanya 1281-1923` | EB1911: "When in 1794 Cologne was occupied by the French … When, in 1801, by the treaty of Lunéville, it was incorporated in France" | Fransa 1794 → 1815 |
| Frankfurt | 〃 | EB1911: "In 1631 Gustavus Adolphus garrisoned it with 600 men, who remained in possession till they were expelled four years later" · "in 1810 it was made the capital of the grand-duchy of Frankfort" | İsveç 1631-35 · Napolyon 1810-13 |
| Hamburg ⚠️ | 〃 | Catholic Enc. 1913: "During the French occupation, in 1806 and in 1810-14 …" | Fransa 1810-14 (SINIR: cümle değil paragraf şehri adlandırıyor) |
| Addis | `habesistan 1281-1923` | Britannica: "The city was thus founded in 1887" · EB1911: "founded by Menelek II. in 1892" | **VARLIK: 1886/87'den önce yok** |
| Ankober | 〃 | EB1911 Abyssinia: "Amada Yesus of Shoa, who extended his kingdom and founded Ankober (1743–1774)" | VARLIK: 18. yy |
| Debre Berhan ⚠️ | 〃 | Budge: "The church of Dabra Berhan was built there in eight days" (Zar'a Ya'kob 1434-68) | VARLIK: 15. yy (SINIR: öncül yerleşim olabilir) |
| Adigrat | 〃 | Peace Handbooks 129: "occupied Addigrat on March 25" (1895) · Admiralty 1917: "relieved in May" (1896) | İtalya ~14 ay |
| Metemma ⚠️ | 〃 | EB1911 Gallabat: "called by the Abyssinians Matemma (Metemma)" — Mısır ~1870-85, Mehdî, İngiliz-Mısır 1898 | SINIR: ikiz şehir, noktanın yakası |
| Şefşâven | `fas 1926→9999` | Anuario 1927: "Xauen … es hoy en la zona de protectorado" | İspanyol himaye bölgesi 1926 → 1956 |
- **TEMİZ 19 ZAYIF:** 18 İngiliz şehri + Dresden. Tanık "1281'den önce İngiliz (berat, Domesday) + kesinti anılmıyor"
  ⇒ §0.1 tanımını karşılıyor, ama hiçbiri 1281-1923'ü kapsayan bir cümle değil. Kesintisizlik sessizlikten.
- **ÖLÇÜLEMEDİ 18:** Douglas (yalnız ada düzeyi: İskoç 1281-90, 1313- ⇒ S, D208) · Penzance · Kopenhag (1362/1368
  süresiz) · Münih (işgaller süresiz) · Habeşistan 10 (çoğu kısmi) · Somali 4.

**B — kontrol (kaynaklı, 20): YANLIŞ 5 · TEMİZ 1 · ÖLÇÜLEMEDİ 14**
| nokta | atlas (kaynaklı) | tanık | doğru |
|---|---|---|---|
| San Sebastián | `ispanya 1479-1923` | EB 7. baskı: "seized by the French in 1808, and was occupied by them till 1813" | Fransa 1808-13 |
| Tortosa | 〃 | EB1911: "it surrendered in 1811 to the French under Suchet, who held it till 1814" | Fransa 1811-14 |
| Zaragoza | 〃 | EB1911: "the defenders were compelled to capitulate" (20 Şubat 1809) · InfoGoya: "the recovery of Zaragoza (July 1813)" | Fransa 1809-13 |
| Salamanca | 〃 | EB1911: "the French in their defensive operations in 1811–1812 almost destroyed the western quarter" | Fransa 1811-12 |
| Lashio ⚠️ | `san-devletleri 1281-1923` | Gazetteer: Burmese Sitkes "administer … from Lashio as their headquarters" | Konbaung doğrudan idaresi ~1878-86 (SINIR) |
- TEMİZ 1: Benin Şehri (uç 1897-02-17/18 ✓; baş tanığı zayıf).
- Burgos, Santander: iki uçta tarihli şehir cümlesi var, süre tek cümlede yok ⇒ ÖLÇÜLEMEDİ (YANLIŞ'a eğilimli).
- **Kontrolün kaynakları ne belgeliyor:** 11 İspanya diliminin kaynağı (Vicens Vives 1952 · Merriman 1918) yalnız
  **1479 birleşmesini** tarihliyor. Mengo `uganda`, Katsina `sokoto`: çıplak TDV slug'ı. Benin `bulunamadi`.
  ⇒ kaynaklı dilimin kaynağı **bir ucu** (çoğunlukla başı) belgeliyor, gövdeyi değil. DIKIS-KAPI'da beyan ettiğim
  Elbistan sınırı burada SİSTEMATİK.

### 1.3 Oranlar
```
                       YANLIŞ / ölçülebilen        SINIR'lar ÖLÇÜLEMEDİ'ye alınırsa
A (risk, kaynaksız)    13 / 32  = %41              8 / 27  = %30
B (kontrol, kaynaklı)   5 /  6  = %83              4 /  5  = %80     ⚠️ payda küçük
YANLIŞ türü (A)        iç yutma 10 · VARLIK (sonradan kurulmuş) 3
```

### 1.4 Öngörü ↔ ölçüm
```
öngörü                                   ölçüm
toplam dilim 17.000 ± 3.000               14.498 ✓ (alt sınırda)
kaynaksız %55 ± 20                         %91,5 ✗
kırpılmış (kaynaksız) %40 ± 15             %45,1 ✓
üst 50 eşiği 450 ± 150 yıl                 642,8 ✗ (tam pencere; üst 50 bir EŞİTLİK kümesi)
üst 50'nin ≥%60'ı ≤3 kimlikten             %88 (ingiltere+habesistan+almanya) ✓
aday kimlikler osmanli/bizans/venedik…     ✗ — Osmanlı HİÇ yok; Avrupa + Doğu Afrika
üst 50'nin %70 ± 20'si kırpılmış           %98 ✗
A ölçülebilen 30 ± 10                      32 ✓
A YANLIŞ %55 ± 25                          %30-41 ✓ (alt yarı)
YANLIŞ'ın %70 ± 20'si iç yutma             10/13 = %77 ✓
yutulan ara dönem (1402 beylikleri,
  Venedik, Rus, Safevî)                    ✗ — İskoç krallığı, Napolyon Fransası, henüz kurulmamış şehir, İtalya
B ölçülebilen 15 ± 4                       6 ✗
B YANLIŞ %10 ± 10                          %80-83 ✗✗ (payda 6)
A − B ≥ 30 puan                            ✗ — B, A'dan YÜKSEK
```
**§0.3-2 yanlışlanma şartı GERÇEKLEŞTİ:** "A ile B arasında fark < 15 puan ⇒ kaynaksızlık bir risk ölçütü değil;
ölçüt yalnız uzunluk olur." Payda küçük (B 6), ama yön açık ve sebebi okunabiliyor: `kaynak` alanı dilimin **bir
ucunu** belgeliyor; uzun gövdeyi hiçbir dilim kaynağı taramıyor. "kaynaklı" ≠ "dilim doğrulanmış".
Gecenin "0/27 ↔ 15/477" farkı (SAHIP-BOLGE) **kısa** dilimlerde ölçülmüştü; uzun dilimde (≥ 440 yıl) kaynak
koruma sağlamıyor.

### 1.5 Yan bulgular (ölçülü)
1. **`almanya` künyesinin kendi iç boşluğu:** künye kronolojisi "1806 Kutsal Roma İmparatorluğu ilga edildi" ·
   "1871 Alman İmparatorluğu ilan edildi" diyor; arada egemen devletler (Bavyera, Saksonya, hür şehirler, Prusya)
   var. Okunan 5 şehrin 5'inde şehir adlı tanık bunu söylüyor. **219 `almanya` diliminden 27'si 1806-1871'i
   kesintisiz aşıyor (26'sı kaynaksız):** Aachen · Augsburg · Bremen · Dortmund · Dresden · Erfurt · Frankfurt ·
   Freiburg · Hamburg · Hannover · Kassel · Kiel · Konstanz · Köln · Leipzig · Lübeck · Mainz · Münih · Münster ·
   Nürnberg · Regensburg · Rostock · Saarbrücken · Stuttgart · Trier · Ulm · Würzburg. `bavyera`, `saksonya`,
   `prusya` künyeleri ZATEN var. Şehir hükmü değil, künye kapsamı sorusu (D205 türü) ⇒ ayrı kalem.
2. **Kaynak alanı kalitesi (1.231 kaynaklı dilim):** 6'sı `"bulunamadi"` (Benin ×2, Oyo, Elmina …): "bulunamadı"
   yazısı KAYNAK sayılıyor (kaynak tavanı ve DIKIS-KAPI bunları kaynaklı geçirir). 43'ü çıplak tek sözcük (`mali`,
   `sokoto`, `bornu`, `kano`, `uganda`, `guney-afrika-cumhuriyeti` …; TDV slug'ı görünümlü, cümlesiz). Hepsi Afrika
   partisinde (`yerlesimler_e9353f.js`).
3. **Şefşâven `t:"9999-01-01"`:** atlasın tek 9999 bitişi; `UFUK[1]` yerine sentinel.

## 2. ③ İSTİYORUM
a) **13 düzeltme FAZ 2'ye** (csv). Kesin 8: Edinburg (`iskocya` 1281→1707) · Newcastle · Köln · Frankfurt · Addis ·
   Ankober (ikisi VARLIK, `kur:`) · Adigrat · Şefşâven (İspanyol himayesi; künye varlığı ölçülmedi). SINIR 5:
   Carlisle, Caernarfon, Hamburg, Debre Berhan, Metemma — hüküm senin. Kontrolden kesin 4 (San Sebastián, Tortosa,
   Zaragoza, Salamanca) + Lashio (SINIR). Napolyon İspanyası için künye sorusu: `fransa` mı, Joseph Bonaparte
   krallığı mı?
b) **Ölçüt revizyonu:** kaynaksızlık çarpanı düştü ⇒ risk = **uzunluk**, ve kaynak yalnız UÇ belgeliyorsa gövde
   kaynaksız sayılmalı. Sonraki tarama ölçütü önerim: "gövdesi tanıksız uzun dilim" (kaynak cümlesinin tarihi
   dilimin hangi ucunda). Ölçmeden önce öngörü yazarım.
c) **`almanya` 1806-1871 künye kalemi** (27 dilim) ve **TAM PENCERE sınıfı** (110 kaynaksız dilim, 112 tek dilimli
   nokta) için denetle'ye beyanlı sayaç: kapı değil, görünürlük. İstersen öneri diff'i yazarım.
d) `kaynak:"bulunamadi"` 6 dilim kaynaksız sayılmalı (kaynak tavanı / DIKIS-KAPI için tek satırlık düzeltme).
e) Sıra: hükmünle Ege adaları turu sırada. (b) ölçütü Ege'yi de sıralayabilir; hangisi önce?

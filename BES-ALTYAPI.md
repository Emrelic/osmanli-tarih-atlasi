# BEŞ ALTYAPI UNSURU — Emre'nin beyanı, 16 Ağustos 2026

🔴 **BU DOSYA OTORİTEDİR.** `ALTYAPI.md §0`daki *"üç iş"* tablosu bunun
**eski ve dar** hâliydi; beş unsur onun yerini alır. Bir oturum
*"altyapı ne durumda"* diye sorduğunda **buraya bakar.**

⚠️ Aşağıdaki beş bölüm Emre'nin **kendi ifadesidir**, özetlenmemiştir.
Koordinatörün eklediği her şey `📐 ÖLÇÜM` ya da `⇒ KOORDİNATÖR NOTU`
diye ayrıca işaretlidir — **beyan ile yorum karışmasın.**

---

## ① TOPOĞRAFİK UNSURLAR — haritada BİLGİ olarak bulunmalı

> Dağlar, tepeler, nehirler, çaylar, göller, denizler, bozkır, ova,
> orman, bataklık, çöl.
>
> Burada en önemli olan şey **dağ, tepe ve nehir gibi bir yerleşim
> yerinin veya bir devletin sınırlarını etkileyen ENGEL yapılar.**
> Göller ve denizler zaten var, o konuda fazla sıkıntımız yok.
> Ova ve bozkır pek engel sayılmıyor; bilgi olarak elimizde bulunsa iyi
> olurdu ama yoksa da çok problem değil.
> **Çölün ayrı bir engel özelliği var:** aslında dümdüz olduğu için
> engelden ziyade **zorlaştırıcı** etkisi var.
> **Nehirler ve çaylar hareketi kısıtlıyor, engelliyor ve bir kanala
> KANALİZE ediyor.**
>
> ```
> 1. DERECE (şart)      deniz · göl · dağ · tepe · nehir · çay
> 2. DERECE (iyi olur)  ova · plato · yayla · bataklık · orman ·
>                       bozkır · çöl
> ```
> Bütün dünyanın 1. derece engel yapılarının haritaya konması, mümkünse
> 2. derece yapıların da belirtilmesi. Ama bir yer önce ova iken sonra
> çöl ya da orman olmuş olabilir — **o yüzden 2. derece çok önemli
> değil.** En önemlisi dağ, nehir, deniz, göl.

📐 **ÖLÇÜM (16 Ağustos):** motorda **1. derecenin dördü de var** —
kıyı çizgisi, 89 göl, 780 akarsu parçası, DEM'den türetilmiş eğim
yüzeyi (dağ/tepe).

🔴 **VE 2. DERECE SATIRI YANLIŞTI — B KOLU ÇÜRÜTTÜ (aynı gün).**
Bu belge önce şöyle diyordu: *"2. derecede yalnız çöl var. Ova · plato ·
yayla · bataklık · orman · bozkır: yok."* **Altı kalemin üçü yanlış.**
`ne_10m_geography_regions_polys.geojson` (5,58 MB · 1047 poligon ·
23 sınıf) sayıldı:
```
sınıf        dosyada  pencerede  MOTORDA
Range/mtn      222       127     ENGEL olarak KULLANILIYOR
Plateau         72        34     ENGEL — yani "plato" VAR
Desert          58        38     çöl tavanı
Plain           30        16     KASTEN dışarıda — yani "ova" VAR
Wetlands         3         1     ENGEL — yani "bataklık" VAR
Gorge            3         2     ENGEL (belgede hiç anılmamıştı)
```
```
plato    ✓ VAR ve motorda ENGEL          (belge "yok" diyordu)
bataklık ✓ VAR ve motorda ENGEL          (belge "yok" diyordu)
ova      ✓ VAR ama KASTEN engel değil    (belge "yok" diyordu)
bozkır   ✓ VAR — `Plain` sınıfının İÇİNDE, ADIYLA (aşağıya bak)
orman    ✗ GERÇEKTEN yok
yayla    ⚠️ NE'de ayrı sınıf yok; Türkçedeki "yayla" ≈ Plateau
```

🔴 **ASIL KUSUR SAYIDA DEĞİL SORUDAYDI.** Bu bölümün başlığı *"haritada
BİLGİ olarak bulunmalı"* diyor; ama *"yok"* hükmü **"motorda ENGEL
olarak kullanılıyor mu"** sorusunun cevabıydı.
```
"VERİ VAR MI"        → plato VAR · bataklık VAR · ova VAR
"ENGEL SAYILIYOR MU" → plato EVET · bataklık EVET · ova HAYIR
```
⇒ İkisi tek kelimeye sıkışınca veri **eksik sanıldı** ve bir oturuma
*"indir"* işi verildi — oysa dosya **repoda duruyordu.**

🔴 **VE `bozkır ✗` SATIRI DA ÇÜRÜDÜ — aynı oturum, bir tur sonra.**
Natural Earth'ün ayrı bir *"Steppe"* **sınıfı** yok; bozkırları `Plain`
sınıfının içinde **ADIYLA** tutuyor:
```
KAZAKH STEPPE   1.604.831 km²    ← Kazak bozkırı
PONTIC STEPPE   1.133.027 km²    ← DEŞT-İ KIPÇAK
SAHEL           4.208.019 km²    ← yarı-kurak geçiş kuşağı
Iwembere · Masai Steppe            434.000 km²
```
⇒ İkisi **Osmanlı tarihinin tam ortasında.** ⇒ *"Bilgi olarak elimizde
bulunsa iyi olurdu"* denen şey **zaten elimizde.**
📌 Ve ölçen kendi kusurunu yazdı: *"`FEATURECLA`ya baktım, `NAME`e
bakmadım."* — bu projenin defalarca ölçtüğü desenin aynısı:
***aradığın şey yok değil, BAŞKA BİR TAKSİMATTA*** (`aceh →
ace-sultanligi` · `ordu → ordu--sehir` · Kırım kadılıkları). Bu sefer
bir **Natural Earth sınıf adının içinde.**

📐 **Düzlük sınıflarının pencere kapsamı: 19,3 milyon km²**
(Plain 12,0 M · Basin 3,8 M · Lowland 2,1 M · Valley 0,6 M ·
Depression 0,5 M · Tundra 0,3 M). Ölçek için: `A1 yarıçap tavanı`
karanın %23'ünü (17,2 M km²) kesiyor — **bu sınıflar ondan büyük.**
⚠️ Bu sayılar poligonun **kendi** alanı; kara maskesiyle kesişim
ölçülmedi, gerçek kara kapsamı **bundan küçüktür.**

🟢 **`ENGEL_SINIFI` TAM LİSTESİ ölçüldü** (`uret_petek.py:555`):
`Range/mtn` · `Plateau` · `Gorge` · `Wetlands` — dördü de artık bu
belgede anılıyor.
⚠️ Eşleşme **alt dize**; bugün 23 sınıfın hiçbiri kaza eseri
eşleşmiyor, ama NE yeni bir sınıf eklerse (örn. `"Plateau rim"`)
**sessizce** engel sayılır.
⚠️ **`Foothills` engel sayılmıyor** ve pencerede 0 poligon olduğu için
bugün fark etmiyor. Karar mı gözden kaçma mı — **ölçülmedi, AÇIK.**

🟢 Ve ova'nın dışarıda olması eksiklik değil **yazılı bir karar**
(`uret_petek.py:546-554`): askerî coğrafya doktrini araziyi
*unrestricted / restricted / severely restricted* diye ayırıyor, ova ve
bozkır **unrestricted.** Emre de aynı şeyi söylüyor: *"Ova ve bozkır pek
engel sayılmıyor."* ⇒ Belge, **kendi alıntıladığı beyanla çelişiyordu.**

⚠️ **KALAN GERÇEK İŞ TEK KALEM: `orman`.** Ve o da tartışmalı — B kolu
haklı olarak uyardı: 1281-1923 arasında Avrupa ormanlarının sınırı çok
değişti, **bugünkü orman katmanını 1300'e uygulamak anakronik olur.**
Emre'nin kendi sınırı da tam buraya değiyor: *"bir yer önce ova iken
sonra orman olmuş olabilir."* ⇒ Karar Emre'nin.

---

## ② YERLEŞİM YERLERİ — 1281 itibarıyla haritada bulunmalı

> Bu yerleşim yerleri **1., 2. veya 3. dereceden** yerler ise haritada
> olmalıdır. **4. dereceden yerler olmasa da olur**; ya da 4. öneme
> sahip yerler 3. dereceden yerlere bağlı olarak hayatlarına devam
> edebilir.
>
> ```
> 1. derece   başkent · ülkenin eyaletlerinin bile ötesinde önemi olan yer
> 2. derece   3. derecelerin bağlandığı büyük EYALET / BÖLGE merkezi
> 3. derece   belli bir bölgenin askerî-idarî-siyasî merkezi
>             (bu merkezin bir BÖLGESİ de olur)
> 4. derece   haritada olması şart değil
> ```

📐 **ÖLÇÜM:** 2589 nokta · `k:` taşıyan 1220. Hedef ~4000.

---

## ③ BÖLGELER TOPOĞRAFYAYA YASLANIR

> Yerleşim yerlerinin bölgeleri olur ve bu bölgeler **topoğrafik
> unsurlara yaslanır.** İki yerleşim yeri arasında düz ova varsa bölge
> ikisi arasında **eşit** bölünür; ama arada nehir, dağ gibi yapılar
> varsa ya da göl, deniz varsa **sınırlar bu engellere dayanır.**

📐 **ÖLÇÜM:** motorun yaptığı tam olarak budur (Voronoi → kıyı/nehir/
sırta yaslama → maliyet-mesafe). Dördüncü koşu bunun **ilk gerçek
sınavı.**

---

## ④ YERLEŞİMİN DOĞUMU VE ÖLÜMÜ — zaman çizelgesine bağlı

> Belli bir yılda olmayan yerleşim yeri sonradan kurulursa, **etrafındaki
> yerleşimlerin topraklarından kendi hakkı olan payı alacaktır.**
> Kalkmış/bitmiş ise **kendi toprağını etrafındakiler alacaktır.**
> Çöl, bozkır, tundra gibi uçsuz bucaksız araziler bölünürken çeşitli
> kurallar geçerli olabilir.

### 🔴 KARARA BAĞLANMAMIŞ MESELE — Emre'nin kendi ifadesiyle

> Çöl, bozkır, ova gibi düzlüklerde ya da orman, tundra gibi yapılarda
> veya Himalayalar gibi "dağ arkasına dağ" yerlerde **bir yerleşimin
> etki alanı neye göre belirlenecek**, tam karar veremedik.
> **Belli bir km mesafeye göre mi**, yoksa **sürtünmeye göre — bir
> yayanın 3 gün, 5 gün yürüyerek ulaştığı mesafeye göre mi?**
> Bunu istişare etmemiz lazım.

**(a) Düz km tavanı + PUANLAMA — Emre'nin önerdiği biçim:**
```
0-200 km  = 4 puan
200-300 km = 2 puan
300-400 km = 1 puan
bir bölge 4 PUAN toplarsa o devlete ait olur
örnek: kuzeyden 250 km (2p) + batıdan 350 km (1p) + doğudan 380 km (1p)
       = 4 puan ⇒ boyanır
```
**(b) Sürtünmeli mesafe:** en yakın merkeze 3-5 günlük yürüyüş şartı.

📐 **KOORDİNATÖRÜN ÖLÇÜLMÜŞ GÖRÜŞÜ — ikisi RAKİP DEĞİL, farklı soruya
cevap veriyorlar:**
```
sürtünmeli mesafe  "burası KİMİN?"        → en yakın merkezi seçer
puanlama + tavan   "burası KİMSENİN Mİ?"  → hiç kimse yetmiyorsa BOŞ
```
🔴 Ve puanlamanın motorda **karşılığı yok**: bugünkü motor her hücreyi
**tek bir en yakın merkeze** verir; *"üç uzak merkez birlikte yetiyor"*
diyemez. Emre'nin (a) önerisi **yeni bir yetenek** getiriyor.
⇒ Önerim: **ikisi birlikte.** Sürtünme SAHİBİ seçsin, puanlama
SAHİPLİ OLUP OLMADIĞINA karar versin. (Bugün bu ikinci işi sert bir
`A1 yarıçap tavanı` yapıyor — puanlama onu kademeli hâle getirir.)
⚠️ Karar Emre'nindir; bu bir ölçüm değil bir **öneri**.

---

## ⑤ KORİDOR AĞI — yollar, düğüm ve ağ olarak

> Yerleşim yerleri ve aralarındaki **koridorlardan geçen yollar** ağ
> şeklinde, **düğüm ve ağ** olacaktır. 1. bölgeden başlayarak ağ yapısı
> **tüm dünyaya** yayılmalıdır.
> Bu yollar; dağlar arasındaki **vadilerden**, **geçitlerden**, nehir ya
> da denizler arası **boğaz geçitlerinden**, **dere/ırmak yollarından**,
> düz ovadaki **tarihî yollardan**, deniz kıyısındaki **düz arazi ve
> yollardan** oluşacaktır.

📐 **ÖLÇÜM:** `data/koridor*.js` — 106 düğüm, 26'sının koordinatı eksik.
Kapsam: yalnız Osmanlı menzil sistemi (1539-1839). **Dünya ağı yok.**

🔴 **VE "AĞ 2 PARÇA" SATIRI EKSİKTİ — ARAYÜZ OTURUMU ÇÜRÜTTÜ (aynı gün).**
Bu belge ilk yazıldığında *"ağ 2 parça"* diyordu. Doğru, **ama yalnız
VERİ için doğru:**
```
KÜNYE tarafı  (bütün düğüm + bütün kenar)          →  2 parça [62, 44]
ÇİZİLEN taraf (koordinatlı düğüm + çizilebilir kenar) → 17 PARÇA
              [21, 11, 11, 7, 6, 4, 4, 3, 3, 2, 2, 1, …]
```
⇒ **Kullanıcı 2 parça görmüyor, 17 kopuk kümecik görüyor.** 107 kenarın
**43'ü** çizilemiyor çünkü bir ucu koordinatsız — ve o 26 düğüm ağın
**uçlarında değil EKLEM YERLERİNDE** duruyor.

🔴 En keskin vaka: **Anadolu kolu İstanbul'a bağlı değil**, ve sebebi
tek bir düğüm:
```
uskudar · tip:"menzil-eslesmedi" · lat:null · lon:null
          kol:["anadolu/sag#1", "anadolu/orta#1"]   ← İKİ ANA KOLUN BAŞI
```
Boğaz kopuşunun **iki sebebi üst üste binmiş**: (a) `istanbul↔uskudar`
kenarı hiç yok, (b) olsaydı bile `uskudar`ın koordinatı yok, çizilemezdi.
⇒ **Kalan iş "1 kenar ekle" DEĞİL, "26 düğüme koordinat bul"** — ve o
43 kenarı açar.

📌 Ders: *veri penceresi ile EKRAN penceresi ayrı şeylerdir.* Bu belge
veriyi ölçüp ekranı ölçmemişti; ikisi arasındaki fark **8 kat.**
⚠️ ÖLÇÜLMEDİ: 26 düğümün koordinatının **bulunabilir** olup olmadığı.
`tip:"menzil-eslesmedi"` etiketi *"yerleşim verisinde karşılığı yok"*
diyor — bu *"araştırılmadı"* mı *"yok"* mu, henüz bakılmadı.

---

## DURUM ÖZETİ — 16 Ağustos 2026, dördüncü koşu sırasında

| # | unsur | durum | kalan |
|---|---|---|---|
| ① | topoğrafya | 🟢 1. derece TAM · 2. derecede **plato·bataklık·gorge ENGEL, çöl tavan, ova KASTEN dışarıda** | yalnız **orman** (ve o da anakronizm riski taşıyor) |
| ② | yerleşimler | 🟡 2589 / ~4000 · `k:` 1220 | ~1400 nokta |
| ③ | bölgeler topoğrafyaya yaslanır | 🟢 motor kurulu, İLK KEZ koşuyor | koşunun doğrulanması |
| ④ | doğum/ölüm + boş arazi kuralı | 🟡 `kur:`/`bit:` var · **puanlama KARARI YOK** | Emre'nin (a)/(b) kararı |
| ⑤ | koridor ağı | 🔴 106 düğüm · veride 2 parça ama **EKRANDA 17** | **26 düğüm koordinatı** (43 kenarı açar) + dünya ağı |

⚠️ **Hiçbiri "bitti" değil.** En yakın olan ③, ve o da bu koşunun
sonucuna bağlı.

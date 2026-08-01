# NOKTA EKLEME — İLERLEME

> Görev tanımı: `oturumlar/NOKTA-EKLEME.md` (`0ecf58d`)
> Ölçüm zemini: `git log --oneline -1` → `0ecf58d` (§14)
> Yazılan tek veri dosyası: `data/yerlesimler_ek.js` — **15 nokta**
> ⚠️ Brifing bu oturum çalışırken üçten **beş boşluğa** büyüdü (`9732efd`);
> 1.4 Klis Sancağı da kapsama alındı, 1.5 Venedik Arnavutluğu'nun iki noktası
> zaten yazılmıştı.

---

## 0. TEK CÜMLE

Beş boşluktan **dördü tamamen ya da büyük ölçüde kapatıldı** (Yukarı
Macaristan 4 · Dalmaçya kıyısı 4 · Klis sancağı 5 · Venedik Arnavutluğu 2 ·
+ Bihaç — toplam **76.353 km²** petek: Yukarı Macaristan 54.406,5 ·
Dalmaçya+Lika 21.946,8); **Girit kapatılmadı ve bu bir eksiklik değil,
ölçülmüş bir karardır** — önerilen düzeltme ölçüldüğünde kapatacağı hatadan
**2000 kat büyük** bir hata üretiyor.

---

## 1. 🔴 GİRİT — ÖLÇÜLDÜ, YAZILMADI

Görev tanımı Girit'i "en ucuz" diye ilk sıraya koymuştu: kaynak hazır, emsal
tarih hazır. Kaynak gerçekten hazırdı. **Sorun kaynakta değil, geometride
çıktı.**

### Kaynak turu — hepsi doğrulandı
TDV `girit` **CANLI** (`<title>` = "GİRİT - TDV İslâm Ansiklopedisi"):

> "Bu anlaşma ile Venedikliler'in elinde kalmış olan **Spinalonga ile Suda**
> kaleleri daha sonra **1127 (1715)** yılında Venedik'e karşı açılan Mora
> seferi sırasında fethedildi." · "**Granbosa** Kalesi ise **1692** yılında ele
> geçirilmişti."

Koordinatlar GeoNames'ten doğrulandı:
```
Suda        Nisi Souda / Lazaretta adacığı   35.48860 / 24.15237
Spinalonga  Kalydon adacığı                  35.29760 / 25.73840
Granbosa    Ímeri Gramvoúsa adacığı          35.61125 / 23.57901
```

### 🔴 Üçü de ADACIK — ve ikisi kara maskesinin DIŞINDA
```
Suda adacığı        ✗ maske dışı — en yakın kara 35.5073,24.1517 (Akrotiri)
Spinalonga adası    ✗ maske dışı — en yakın kara 35.3018,25.7354
İmeri Gramvusa      ✗ maske dışı — en yakın kara 35.5998,23.5962
```
`denetle.py`'nin kendi kuralı: **maske dışındaki nokta HİÇ toprak sahibi
olamaz.** Yani üçü de ya yazıldıkları yerde etkisiz kalır, ya da anakaraya
kaydırılır.

### 🔴 Kaydırılınca ne oluyor — ÖLÇÜLDÜ
Çıplak Voronoi, 0,004° ızgara, kara maskesiyle kesilmiş (976 mevcut nokta +
üç aday, en yakın kara hücresine kaydırılmış hâlleriyle):

```
Suda           305,5 km²
Spinalonga   1.171,6 km²
Granbosa       685,8 km²
──────────────────────
TOPLAM       2.163,0 km²      Girit ≈ 8.336 km²  ⇒  adanın %26'sı
```

**Venedik'in 1669'dan sonra Girit'te fiilen tuttuğu toprak ~1 km²'dir** —
üç tahkimli adacık. Etraflarındaki kara Osmanlı'ydı; kaleler zaten bu yüzden
dayanabildi.

```
BUGÜNKÜ HATA      ~1 km²'yi Osmanlı boyamak        (45,9 yıl ×2 + 22,3 yıl)
ÖNERİLEN DÜZELTME  2.162 km²'yi VENEDİK boyamak
```

`CLAUDE.md §3.5.1`: *"Bir sınır kayması önerildiğinde **iki uç da ölçülür.**
'Bu tarafta fazlalık var mı' yetmez; 'öbür tarafta fazlalık doğuyor mu' da
sorulur. Tek uçtan bakan düzeltme, hatayı taşır — silmez."*

Burada tek uçtan bakılsa hata taşınmakla kalmaz, **2000 katına çıkardı.**

### Bu bir "bulunamadı" değil — motorun ifade edemediği bir gerçeklik
`§2`'nin emilme kuralı bir **yarıçap kabulü** taşıyor: her nokta "çevresindeki
toprak" demektir. Adacık kalesi tam olarak bunun tersidir — **toprağı olmayan
bir tutunma noktası.** Petek motoru bu şekli üretemez.

**Girit'in doğru düzeltmesi harita değil KRONOLOJİ katmanındadır:** 1692 ve
1715 fetihleri madde ister, petek istemez. Kronoloji oturumunun işi.
📌 Ve `1715-09-07` kırılması veride **zaten var** (Çuha Adası, Ayamavra) —
yani Mora seferinin o günü haritada zaten kırılıyor.

⚠️ **Ayrıca bir tarih çelişkisi:** TDV `girit` Kandiye teslim anlaşmasını
**6 Eylül 1669** diyor; veride beş Girit kaydı da **1669-09-27** kullanıyor
(muhtemelen tahliye/teslim alma günü). `§74` — aynı sorunun cevabı değiller.
Bu oturum mevcut kayda dokunmadı (`§2` yazma yetkisi); koordinatörün kalemi.

---

## 2. ✅ YUKARI MACARİSTAN — 4 nokta

ÇAPRAZ BATI'nın ölçtüğü boşluk doğrulandı: `48,0-49,6°K / 18,8-22,6°D`
kutusunda mevcut veride **sıfır nokta**; en yakın sahipli komşu Eğri.

| Nokta | Koordinat (GeoNames) | En yakın komşu | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Kassa (Košice) | 48.714 / 21.258 | Eğri 111,51 km | 9.717,6 km² | **KESİN** |
| Eperjes (Prešov) | 48.999 / 21.236 | Eğri 137,61 km | 21.605,1 km² | **KESİN** |
| Tokaj | 48.117 / 21.409 | Eğri 80,52 km | 15.289,7 km² | **KESİN** |
| Sopron | 47.685 / 16.590 | Viyana 60,44 km | 7.794,5 km² | **KESİN** |

**Toplam 54.407 km²** — ÇAPRAZ BATI'nın ölçtüğü boşluk 51.178 km² idi, aynı
mertebe.

Dördü de **salt `s:`** — hiç Osmanlı dönemi yok ⇒ **Değişmez 2 borcu YOK.**
Zincir: `macaristan` 1281 → **1526-08-29 (Mohaç)** → `avusturya` → 1918-11-11
→ `cekoslovakya` (Kassa, Eperjes) / `macaristan` (Tokaj, Sopron).
Mohaç kırılması mevcut **Bratislava** kaydının emsalidir (`§78` gereği emsal
sınandı: Bratislava da k:0 bir Habsburg şehri, aynı sınıf).

### 🟡 SANA AİT BİR KALEM: TÖKÖLİ — bilerek yazmadım
TDV `tokoli-imre` (CANLI):
> "16 Eylül'de Fülek Kalesi önünde İmre Tököli'ye prenslik alâmetlerini verdi;
> IV. Mehmed'den de berat alınmıştı. Buna göre **Orta Macar** adıyla yeni bir
> devlet kuruluyor…" · Tököli **15 Ekim 1685**'te yakalandı.

Bu, haritanın `v:` ile ifade edebileceği **gerçek bir Osmanlı tâbiiyeti** ve
`§3.5.1`'in *"Osmanlı EKSİK görünüyor"* yönündeki tam vakası. İki kırılmanın
da maddesi **VAR** (1682-09-16 tam gün · 1685-10-25'e 6 gün) — yani teknik
engel yok.

**Yazmama sebebi tek: `§80`.** Tököli'nin hâkimiyeti Kassa · Eperjes ·
Tokaj'ın üçünü de kapsıyordu (Sopron'u kapsamıyordu). Yalnız Kassa'ya yazmak
"birkaçına yazıp bırakma" olurdu; üçüne birden yazmak içinse **şehir şehir
denetim tarihi** gerekiyor ve kaynak turunda bulunamadı (TDV maddesi Kassa'yı
merkez olarak adıyla anmıyor).
⇒ **Kaynaklı araştırma kalemi olarak sana devrediyorum.**

---

## 3. ✅ DALMAÇYA — 8 nokta

ÇAPRAZ BATI'nın bulgusu doğrulandı: Dalmaçya kutusundaki 14 noktanın 7
Venedik'i **hepsi ADA**, anakara kıyısında **sıfır** nokta. Lika/Hırvat sınır
boyunda da (`44,2-46,0°K / 14,5-17,5°D`) yalnız Zagreb, Krk, Rab, Pag,
Banaluka, Yayça var — **Bihać dahil hiçbir iç nokta yok.**

### 3.1 Salt Venedik kıyı şehirleri — sıfır borç
Tek işleri anakara kıyısının peteğini **adalardan değil kendilerinden**
almasını sağlamak (ÇAPRAZ BATI: *"rengi doğru ama peteği ADA'dan geliyor —
sınır KURGUSAL"*).

| Nokta | Koordinat | En yakın komşu | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Zadar (Zara) | 44.124 / 15.232 ⚠️ | Uzunada 19,21 km | 532,0 km² | **KESİN** |
| Şibenik (Sebenico) | 43.734 / 15.894 | Vrana 36,35 km | 1.230,0 km² | **KESİN** |
| Split (Spalato) | 43.511 / 16.439 ⚠️ | Klis 8,38 km | 467,7 km² | **KESİN** |
| Kotor (Cattaro) | 42.421 / 18.768 | Cetinje 12,46 km | 1.179,4 km² | **KESİN** |

📌 **Kıyı iddiaları, iç noktalar eklenince ÜÇTE BİRE düştü** — Zadar 2.005,3
→ 532,0 · Split 474,5 → 467,7 · Knin 6.238,9 → 4.125,7. Yani `§1.4`'ün iç
noktaları yalnız kendi boşluklarını kapatmıyor, **kıyının kurgusal genişliğini
de kesiyor.** **Bir noktanın faydası tek başına ölçülemez.**
⚠️ Şibenik ters yönde hareket etti (654,5 → 1.230,0) çünkü Skradin çıkarıldı
(3.5) — yani aynı mekanizma ters yönde de işliyor ve bu, çıkarmanın bedelinin
nereye gittiğini gösteriyor.

⚠️ **Zadar ve Split GeoNames değeriyle kara maskesinin DIŞINDA kalıyordu.**
`denetle.py`'nin talimatı uyarınca en yakın kara hücresine kaydırıldı:
Split 310 m; Zadar 1,09 km (eski şehri Natural Earth 10m'de çözülmeyen bir
yarımadada — maske sınırının **tam üstü** de `covers` testini geçmiyor,
ölçüldü). GeoNames değerleri kayıtların yanında yazılı.

📌 **Kotor, BALKAN'ın "Venedik Arnavutluğu tamamen yok" bulgusunun doğrudan
karşılığıdır** — Cetinje 12,46 km'den bütün Boka Kotorska'yı yutuyordu.

Tarihler: Zadar Antlaşması **1358-02-18** · Ladislas'ın satışı 1409 (gün
belirsiz, `§76` → `1409-01-01`) · Şibenik teslim sözleşmesi **1412-10-30** ·
Split 1420 (gün belirsiz) · Kotor Venedik himayesi 1420.

### 3.2 Osmanlı dönemi olan kaleler
| Nokta | Koordinat | Osmanlı dönemi | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Knin | 44.041 / 16.197 | 1522-05-29 → 1688-09-11 | 4.125,7 km² | **KESİN** |
| Sin (Sinj) | 43.704 / 16.639 | 1513-01-01 → 1686-09-30 | 1.439,0 km² | **DESEN** |
| Klis | 43.559 / 16.519 | 1537-03-12 → 1648-03-31 | 538,5 km² | **DESEN** |
| Herseknovi | 42.453 / 18.538 | 1482-01-01 → 1687-09-30 | 1.239,0 km² | **KESİN** |

- **Knin** — Gazi Hüsrev Bey'in kuşatması; Vojković 28 Mayıs 1522'de teslim
  oldu, Osmanlı **29 Mayıs**'ta girdi. Venedik **11 Eylül 1688** (Cornaro).
- **Sin** — Osmanlı **1513** (gün yok, `§76` → `1513-01-01`); Venedik
  **30 Eylül 1686**, Poljica milisleriyle. DESEN: fetih yılı TDV dışı kaynakta.
- **Klis** — TDV `klis` (CANLI) fethi 1537'de Murad Bey'e veriyor; kale
  **12 Mart 1537**'de Kružić'in ölümüyle düştü. Venedik **31 Mart 1648**
  (Foscolo) — 1648 günü yalnız Vikipedi türevi kaynaklarda, `§4` gereği DESEN.
  ⚠️ **`§74` uygulandı:** TDV aynı maddede *"Klis 1826'ya kadar Osmanlı
  **sancağı** olarak varlığını sürdürdü"* diyor. Bu **aynı sorunun cevabı
  değildir** — sancak idarî birimdir ve merkezi 1648'den sonra Livno'ya
  taşınmıştır; **kale** 1648'de Venedik'e geçti. Kayıt kaleyi yazar.
- **Herseknovi** — 1382'de I. Tvrtko kurdu ⇒ `kur:"1382-01-01"`. Osmanlı 1482,
  Venedik **30 Eylül 1687** (Cornaro). **Tek Osmanlı dönemi kaydı ki iki
  kırılmasının da maddesi VAR** (0 gün ve 4 gün).
  ✅ **1538-1539 İspanyol ara işgali `isg:` ile YAZILDI** — önce ÇELİŞKİLİ
  diye bırakmıştım, sonra TDV `dalmacya` çözdü: *"Castelnuovo Kalesi ise aynı
  yıl **Andrea Doria** tarafından zaptedilmiş, ancak **bir yıl sonra** Barbaros
  Hayreddin Paşa ve Bosna Beyi Gazi Hüsrev Bey'in gayretiyle geri alınmıştı."*
  📌 **`d:` değil `isg:` olmasının iki sebebi var ve ikincisi ücretsiz kazanç:**
  (a) `girdi.py`'nin şema kararı — işgal dönem TÜRÜ değil ÖRTÜ katmanıdır,
  taban rengini değiştirmez, Osmanlı hükümranlığı hukuken sürdü;
  (b) motor `isg:`i okumadığı için **Değişmez 2 borcu doğurmaz.** Yıl
  hassasiyetli (TDV gün vermiyor, `§76`).

### 3.3 🔴 KARLOFÇA'NIN YEDİ KALESİNDEN BEŞİ — BULUNAMADI
TDV `karlofca` (CANLI, 26 Ocak 1699) Venedik'te kalanları adıyla sayıyor:
`Knin · Signe (Sin) · Verlice · Delovar · Zadvar · Vergoriçe · Çiklit`.

Bu parti **ikisini** yazdı (Knin, Sin). Kalan beşi **yazılmadı**:
```
Verlice   → muhtemelen Vrlika      TDV müstakil madde YOK, eşleşme Vikipedi
Zadvar    → muhtemelen Zadvarje    aynı
Vergoriçe → muhtemelen Vrgorac     aynı
Çiklit    → muhtemelen Čitluk      aynı — ve Čitluk adı Bosna'da MÜKERRER
Delovar   → HİÇBİR modern adla eşleştirilemedi   🔴 BULUNAMADI
```
`CLAUDE.md §4`: Vikipedi tek dayanak değildir. Beş kalenin **kimliği** ancak
Vikipedi üzerinden kuruluyor; koordinat yazmak için yeterli değil.
📌 BALKAN'ın işaret ettiği damar (Alberghetti 1732 haritası · Fürst-Bjeliš
2007 · Tea Mayhew) bu beş adı çözebilir — **kartografik kaynak turu gerekiyor**,
ve bu bir araştırma oturumunun işi.

### 3.4 🟡 ÜÇ KADEMELİ SINIR — bu parti kademe YAZMIYOR
BALKAN `§44`: Linea Nani 1671 (Acquisto Vecchio) · Linea Grimani 1699/1700
(Acquisto Nuovo) · Linea Mocenigo 1718/1720/1721 (Acquisto Nuovissimo).

Bu parti **nokta ekler, hat çizmez** — petek motoru zaten hat kabul etmiyor,
sınırı noktalardan üretiyor. Eklenen sekiz nokta üç kademenin **Nuovo**
kademesini (Knin/Sin dahil) taşıyor; **Mocenigo 1718 kademesi noktasız
kaldı** (Vergoriçe/Çiklit oradaydı — yani 3.3'teki bulunamayanlarla aynı küme).

---

## 3.5 ✅ KLİS SANCAĞI (brifing 1.4) — 3 nokta daha, toplam 6/8

ÇAPRAZ AKDENİZ'in ölçtüğü boşluk (`3fd8fc0`) doğrulandı: Dalmaçya iç kesiminde
(`43,3-44,6°K / 15,3-17,5°D`) toplam üç nokta var ve biri **ada**.

TDV `dalmacya` **CANLI** ve üç cümlede sekiz yeri adıyla sayıyor:
> *"**1537**'de **Klis Kalesi'nin fethinden sonra** Dalmaçya sınırında **yeni
> bir sancak** tesis edildi."*
> *"**1538**'de Dalmaçya'da taarruza geçen Venedikliler, **Osmanlı hâkimiyeti
> altındaki Ostrovica (Sivrihisar), Obrovac ve Scardona** kasabalarını
> almışlar … buna karşılık Osmanlı kuvvetleri de **Nadin, Doubicza** ve diğer
> bazı kaleleri ele geçirmişlerdi."*
> *"**1540**'taki Osmanlı-Venedik antlaşması ile Venedikliler Dalmaçya'daki
> **Nadin ve Urana** kalelerini Osmanlılar'a bırakmışlardı."*

| Nokta | Koordinat (GeoNames) | Osmanlı dönemi | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Vrana (Urana) | 43.956 / 15.562 | 1540-10-02 → 1699-01-26 | 741,6 km² | **KESİN** |
| Nadin | 44.074 / 15.498 | 1540-10-02 → 1699-01-26 | 1.581,1 km² | **KESİN** |

Klis · Knin · Sin zaten `2b59aa8`'te yazılmıştı ⇒ **sekizin beşi tamam.**

### 🔴 SKRADİN ÇIKARILDI — koordinatör kararı, gerekçe ölçüm
Skradin (`43.820 / 15.924`, Osmanlı 1522, Venedik'e Karlofça'da) yazılmıştı ve
`b977dd9`'da dosyadaydı. **Tek eksiği fethin GÜNÜYDÜ** ve o eksik madde yazımını
kilitliyordu: `1522-01-01`'e madde yazmak **maddeye uydurma gün taşıtır**
(`§76`), gerçek güne yazmak ±30 penceresini tutturmaz, Knin'in 1522-05-29'unu
ödünç almak da `§76` ihlali.

📌 **Çıkarmanın maliyeti ölçüldü ve düşük:** 860,5 km²'si Knin ile Vrana'ya
gidiyor ve **ikisi de o dönemde Osmanlı** ⇒ renk doğru kalır, yalnız sınır
kabalaşır. **Yanlışlaşmaz.** Skradin, günü kaynaklanınca döner.

### ⚠️ ÇIKIŞ TARİHİ NEDEN 1699 (KARLOFÇA), 1683 DEĞİL — bilerek verilmiş karar
Ekim 1683'te Dalmaçya ahalisi ayaklanıp `Skradin · Karin · Vrana · Benkovac ·
Obrovac`'ı aldı; Skradin için *"1684'te Venedik'e düştü"* diyen kaynak da var.
İkisi de **TDV dışı** ve birbiriyle **ÇELİŞKİLİ.** Buna karşılık Karlofça
TDV'de, **26 Ocak 1699**, ve maddesi veride **tam gün** duruyor.

`girdi.py`'nin şema kararı gereği `d:`/`s:` **DE JURE** sahipliği taşır; fiilî
denetim `isg:` katmanının işidir. Devir bu yüzden Karlofça'ya yazıldı.
**Yan kazanç: üç noktanın çıkış kırılması da sıfır borç** (1699-01-26 tam gün).
1683-1699 arası fiilî Venedik denetimi, tarihleri gelince `isg:` olarak
eklenebilir ve **taban rengini değiştirmez.**

### 🔴 OSTROVICA ve OBROVAC — YAZILMADI, koordinatları hazır
```
Ostrovica (Sivrihisar)  GeoNames 43.9589 / 15.7936   (Lišane Ostrovičke, Zadar)
Obrovac                 GeoNames 44.2006 / 15.6822   (Zrmanja üzerinde)
```
Eksik olan tek şey **Osmanlı fetih tarihi.** TDV yalnız 1538'de Venedik'in
onları *"Osmanlı hâkimiyeti altındaki"* kasabalar olarak aldığını söylüyor —
**ne zaman Osmanlı olduklarını söylemiyor.** Knin'in 1522-05-29'unu ödünç almak
`§76`'nın açıkça yasakladığı şey. Kaynak turu kalemi.
📌 Elimde kalan iz: 1616'da **Krka sancağı** altı kapetanijeden oluşuyordu —
`Knin · Skradin · Nadin · Zemunik · Seddi-islam · Obrovac`, 24 garnizonlu
kasaba. Yani 1616'da Obrovac kesin Osmanlı. Aralık 1538-1616.

---

## 3.6 ✅ BİHAÇ — bu partinin KENDİ açtığı hatanın kapağı

🔴 Bu nokta bir boşluğu değil, **bizim ürettiğimiz bir fazlalığı** kapatıyor.
`§5`'te ölçüp bildirdiğim hata buydu; koordinatör kapatılmasını istedi.

```
Knin eklendi        → peteği 5.510,4 km² oldu, kuzeye LİKA'ya taştı
Lika'da nokta YOK   → Zagreb·Krk·Rab·Pag·Banaluka·Yayça dışında hiçbir şey
Knin 1688'den       → VENEDİK
Lika 1689'da        → HABSBURG
⇒ Lika 1688-1797 arası VENEDİK boyanacaktı
```
`OGRENILENLER §72`'nin tarifi: *"hayalet yok olmadı, TARAF DEĞİŞTİRDİ."*

### Kaynak — TDV `bihac` **CANLI**, zincirin üç düğümünü de veriyor
Slug avı gerekti: `bihke` **ÖLÜ**, `bosna` **ÖLÜ**, arama `Bihıç` **0 sonuç**.
Doğru yazım `Bihaç` ile bulundu ⇒ **`bihac`** (`<title>` = "BİHAÇ - TDV İslâm
Ansiklopedisi", *"Bosna'da tarihî bir şehir"*).

> *"Kasım 1591'de Bihaç'ın ön kalesi Ripaç'ı, **1592**'de şehri ve kaleyi aldı"*
> *"Karlofça Antlaşması'nın (1699) ardından Bihaç ve çevresi **Osmanlılar'ın
> elinde kaldı**, ancak Bihke sancağı kaldırılarak Bosna sancağına bağlandı"*
> *"**18 Eylül 1878**'de Avusturya-Macaristan ordusu … Bihaç'ı almayı başardı"*

📌 **Karlofça sorunu senin uyarındı ve TDV cevapladı: 1699'da renk DEĞİŞMİYOR.**
Sancak kaldırıldı, toprak kalmadı — idarî değişiklik, sahiplik değişikliği değil
(`§74`). Kayıt bunu doğru yazıyor: `d:` 1592→1908 kesintisiz.

| Nokta | Koordinat (GeoNames) | Osmanlı dönemi | Peteğin iddiası | Güç |
|---|---|---|---|---|
| Bihaç (Bihać) | 44.817 / 15.871 | 1592-06-19 → 1908-10-05 | 8.872,9 km² | **DESEN** |

`DESEN` çünkü TDV fethe **yıl** veriyor; **10-19 Haziran 1592 kuşatması ve
Lamberg'in 19 Haziran'da teslimi TDV dışı kaynaklarda** ve TDV ile
**çelişmiyor**. `§76` ihlali değil: ödünç alınmış bir gün değil, **kendi
vakasının kaynaklanmış günü.**

### ⭐ ÖLÇÜM: Bihaç ne yapıyor — aynı kutuda iki koşu
```
nokta                     Bihaçsız      Bihaçlı        fark
Knin                       5.510,4      4.125,7    -1.384,7
Nadin                      1.965,2      1.581,1      -384,1
Bihaç                            0      8.872,9    +8.872,9
(öteki on iki nokta DEĞİŞMEDİ — tam sıfır)
```
**Bihaç'ın 8.872,9 km²'sinin yalnız 1.768,8'i benim noktalarımdan geliyor.**
Kalan **7.104,1 km²** MEVCUT noktalardan — Banaluka ve Yayça'dan.

🔴 **Ve bu ikinci bir düzeltme, ummadığım yerden:** Banaluka ile Yayça
`d:` **1528-01-01**'den Osmanlı. Peteği Bihaç bölgesini kapsadığı için harita
orayı **1528'den itibaren Osmanlı** boyuyordu — oysa Bihaç **19 Haziran
1592**'ye kadar Habsburg'du. ⇒ Bihaç aynı zamanda **64 yıllık bir "Osmanlı
FAZLA görünüyor" hatasını** kapatıyor (`§3.5.1`'in ilk yönü).
📌 Yani tek nokta iki ayrı yönde iki hata kapattı: 1528-1592 Osmanlı fazlalığı
ve 1688-1797 Venedik fazlalığı.

### Şema kararları — üçü de ödünç almamak için
```
1527-01-01  Cetin sabor'u, Hırvat asilzadeleri Ferdinand'ı kral seçti.
            UYDURMA YYYY-01-01 DEĞİL, olayın GERÇEK günü. Mohaç (1526-08-29)
            kullanılmadı: Hırvatistan'ın Habsburg'a geçişi ayrı olaydır (§74).
1878-09-18  isg: — komşu Bosna kayıtları 1878-07-29 + "berlin-antlasmasi"
            kullanıyor; Bihaç'ın KENDİ tarihi TDV'de var, ödünç ALINMADI (§76).
sirbistan   1918 kuyruğu — Dalmaçya'daki `yugoslavya` DEĞİL. Bihaç Bosna'da ve
            altı Bosna kaydının altısı da `sirbistan` yazıyor; farklı yazılsa
            Bosna'nın İÇİNDEN geçen kurgusal bir 1918 sınırı doğardı.
k:0 / m: yok  Bihaç 1592-1699 sancak MERKEZİ, sonra Bosna sancağına BAĞLI.
            k/m'nin zaman boyutu olmadığı için (Değişmez 3) hangisi yazılsa
            öbür dönemde yanlış olurdu.
```

---

## 4. DOĞRULAMA

### 4.1 🔴 `denetle.py` BU DOSYAYI GÖRMÜYOR — ve bu bir tuzak
`data/yerlesimler_ek.js` **`arac/girdi.py`'deki `GIRDI_DOSYALARI` listesinde
YOK.** Motor da denetim de onu okumuyor. `denetle.py` çıktısı **976 yerleşim**
diyor — yani 988 değil.

⇒ **`denetle.py`'nin "temiz" demesi bu parti hakkında HİÇBİR ŞEY söylemez.**
Bu, `girdi.py`'nin kendi dosya başında uyardığı hata sınıfının aynısı:
*"ayrıştırıcıyı doğrulamak yetmiyor, hangi DOSYALARI okuduğunu da doğrulamak
gerekiyor."*

Bu yüzden parti **canlıymış gibi birleştirilip ayrıca ölçüldü** (scratchpad
doğrulayıcı, `girdi.py`'nin kendi ayrıştırıcısıyla):

```
① ad çakışması / alan kütüğü   ✓ çakışma yok, bilinmeyen alan yok
② dönem sağlığı                ✓ 0 ters, 0 sıfır uzunluk, 0 çakışma
③ Değişmez 1                   ✓ 15 noktanın 15'i KESİNTİSİZ
                                 (GÜNLÜK tam tarama, örnekleme değil)
④ 3 km kuralı                  ✓ en yakın çift Split ↔ Klis 8,38 km
⑤ kara maskesi                 ✓ 15/15 içeride (Zadar ve Split kaydırıldıktan sonra)
⑥ BOYALAR                      ✓ 8 kimliğin 8'i renkler.py'de tanımlı
                                 (avusturya·bosna·cekoslovakya·ispanya·
                                  macaristan·sirbistan·venedik·yugoslavya
                                  — YENİ RENK GEREKMİYOR)
⑦ Değişmez 2                   🔴 1 AÇIK KIRILMA — aşağıda
```

### 4.2 🔴 CANLIYA ALMADAN ÖNCE ÖDENECEK BORÇ: TEK KRONOLOJİ MADDESİ
```
1592-06-19  Bihaç'ın fethi (Hasan Paşa)   en yakın madde 377 gün
```
Dosya bugün girdiye eklenirse **Değişmez 2 AÇIK 0'dan 1'e çıkar.**

✅ **Ama bu borç Skradin'inkinden FARKLI ve doğrudan ödenebilir:** günü
**biliniyor ve kaynaklı** (10-19 Haziran 1592 kuşatması, Lamberg 19 Haziran'da
teslim oldu). ⇒ **Madde tam güne yazılır, pencere tutar, borç kapanır.**
Skradin'de kilitlenen şey buydu ve burada kilit yok.

📌 **Borcun tarihçesi — hepsi ölçülerek kapandı:**
```
başlangıç   5 madde
-4          Knin 1522-05-29 · Klis 1537-03-12 · Klis 1648-03-31 · Sin 1513
            (ben çalışırken başka oturumlar yazdı, ölçümü her seferinde
             tekrarladım, dördü de TAM GÜN eşleşiyor)
-1          Skradin — MADDE İLE DEĞİL, KAYDIN ÇIKARILMASIYLA (3.5)
+1          Bihaç 1592-06-19 — yeni nokta, ödenebilir borç
────────────
sonuç       1
```
⚠️ **Sayı hareketli: canlıya almadan önce doğrulayıcıyı TEKRAR koştur.**

### 4.3 ⚠️ ZEMİN ZATEN KIRMIZI — ve belgeler bayat
`py arac/denetle.py` **benim işimden ÖNCE de** çıkış kodu 1 veriyor:
```
Değişmez 1  ✓  976 yerleşim, 50 sahipsiz (beklenen 50)
Değişmez 2  ✓  484 kırılma, 0 açık (beklenen 0)     ← ben çalışırken 1'den 0'a indi
Değişmez 2s ✗  596 YABANCI kırılması, 115 açık (tavan 114) — bilinen borç
Değişmez 2t ✗  kırılmasız madde: 56 (tavan 49) — bilinen borç
Ek denetim  ✓  konum: 0 nokta kara maskesinin dışında
SONUÇ: İHLAL VAR — çıkış kodu 1
```
Bu **benim eserim değil** (dosyam okunmuyor, sayı **976**'da sabit — 991 değil)
ama bilinmesi gerekiyor: `CLAUDE.md §1.5` hâlâ *"764 yerleşim · 433 kırılma ·
34 sahipsiz · AÇIK 0"* diyor; gerçek **976 · 484 · 50**. Belge üç sayıda birden
geride. `§5`'teki *"bayat satır bir araştırma oturumunu doğrudan yanılttı"*
dersinin tekrarı.

---

## 5. KOORDİNATÖRDEN İSTENENLER

1. **`arac/girdi.py` → `GIRDI_DOSYALARI`'na `"yerlesimler_ek.js"` satırı.**
   Yalnız sen ekleyebilirsin (`§7`: `arac/*.py` bu oturuma kapalı).
   Tek borç Bihaç'ın 1592-06-19'u ve **doğrudan ödenebilir** (4.2).
2. **Bir kronoloji maddesi:** `Bihaç'ın fethi — 19 Haziran 1592, Hasan Paşa`.
   Tam güne yazılır, pencere tutar. (Skradin'de kilitlenen buydu; burada kilit yok.)
2b. **Skradin'in 1522 fethinin GÜNÜ** — bulunursa kayıt geri döner (3.5).
3. **Tököli / Orta Macar `v:` kalemi** araştırma oturumuna (2. bölüm sonu).
4. **Ostrovica ve Obrovac'ın Osmanlı fetih tarihi** (3.5) — koordinatları
   raporda hazır, tek eksik tarih. 1616'da ikisi de Krka sancağı kapetanijesi.
5. **Karlofça'nın beş kalesi** için kartografik kaynak turu (3.3) —
   özellikle `Delovar`'ın kimliği.
6. **Venedik Arnavutluğu'nun kalan üçü** (`Budva · Bar · Ülgün`) — brifingde
   *"tarihler ÇAPRAZ AKDENİZ'de, gelince aç"* dediğin kalem. Kotor ve
   Herseknovi bende bitti; **Herseknovi için 1686 değil `1687-09-30` KESİN**
   (kuşatma 1 Eylül 1687 başladı, 30 Eylül'de Cornaro aldı; TDV'nin "1686"sı
   yıl hassasiyetli ve 1687-09-30'un ±4 gününde madde var, 1686'nın yok).
7. **Girit kararı senin** (1. bölüm): benim hükmüm *nokta eklenmemeli, madde
   yazılmalı*. Karşı karar verirsen 2.163 km²'lik bedeli bilerek veriyor olursun.
8. **Kandiye teslim tarihi çelişkisi** (1. bölüm sonu) — mevcut kayıt kalemi,
   bana kapalı.
9. **`CLAUDE.md §1.5`'in dört sayısı** (4.3).

---

## 6. YAPILMAYANLAR — açıkça

```
Girit üç kale         YAZILMADI — ölçüldü, gerekçe §1
Skradin (Scardona)    ÇIKARILDI — yazılmıştı, fethin GÜNÜ yok (3.5)
Karlofça'nın 5 kalesi YAZILMADI — Delovar BULUNAMADI, dördü kaynak yetersiz
Ostrovica · Obrovac   YAZILMADI — koordinat hazır, Osmanlı fetih tarihi yok
Gospić · Otočac       YAZILMADI — ölçmedim, kapsam büyütmedim (koordinatör kararı)
Budva · Bar · Ülgün   YAZILMADI — brifing "en sona bırak" diyor, tarih AKDENİZ'de
Tököli v: dönemi      YAZILMADI — §80, şehir şehir tarih yok
Butrinto              KAPSAMIMDA DEĞİL — koordinatör ÇAPRAZ AKDENİZ'de tuttu
Herseknovi 1538-39    ✅ YAZILDI — isg: olarak, TDV dalmacya çözdü
py arac/uret_petek.py ÇALIŞTIRILMADI — koordinatör tetikler
data/yerlesimler.js   DOKUNULMADI
```

### ✅ LİKA — KAPANDI (3.6)
`§3.5.1` gereği kendi işimin doğurduğu fazlalığı ölçüp bildirmiştim; koordinatör
kapatılmasını istedi ve **Bihaç eklendi.** Knin'in Lika'ya taşan payı
**1.384,7 km²** ölçüldü ve geri alındı; Bihaç ayrıca Banaluka/Yayça'nın
1528'den beri Habsburg Lika'sını Osmanlı boyamasını da kesti (7.104,1 km²).
⚠️ **Gospić/Otočac EKLENMEDİ** — ölçmedim, koordinatör de "kapsam büyütme"
dedi. Lika'nın iç yoğunluğu hâlâ düşük; ölçülmesi gereken bir sonraki kalem.

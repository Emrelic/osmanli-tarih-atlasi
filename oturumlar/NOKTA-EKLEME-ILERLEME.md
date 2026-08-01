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
Macaristan 4 · Dalmaçya kıyısı 4 · Klis sancağı 6 · Venedik Arnavutluğu 2 —
toplam **69.454 km²** petek); **Girit kapatılmadı ve bu bir eksiklik değil,
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
| Zadar (Zara) | 44.124 / 15.232 ⚠️ | Uzunada 19,21 km | 537,6 km² | **KESİN** |
| Şibenik (Sebenico) | 43.734 / 15.894 | Skradin 9,87 km | 654,5 km² | **KESİN** |
| Split (Spalato) | 43.511 / 16.439 ⚠️ | Klis 8,38 km | 474,9 km² | **KESİN** |
| Kotor (Cattaro) | 42.421 / 18.768 | Cetinje 12,46 km | 1.193,0 km² | **KESİN** |

📌 **Kıyı iddiaları, iç noktalar eklenince ÜÇTE BİRE düştü** (Zadar 2.005,3 →
537,6 · Şibenik 1.668,6 → 654,5 · Knin 6.238,9 → 5.424,1). Yani `§1.4`'ün iç
noktaları yalnız kendi boşluklarını kapatmıyor, **kıyının kurgusal
genişliğini de kesiyor.** Bir noktanın faydası tek başına ölçülemez.

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
| Knin | 44.041 / 16.197 | 1522-05-29 → 1688-09-11 | 5.424,1 km² | **KESİN** |
| Sin (Sinj) | 43.704 / 16.639 | 1513-01-01 → 1686-09-30 | 1.452,2 km² | **DESEN** |
| Klis | 43.559 / 16.519 | 1537-03-12 → 1648-03-31 | 536,7 km² | **DESEN** |
| Herseknovi | 42.453 / 18.538 | 1482-01-01 → 1687-09-30 | 1.257,2 km² | **KESİN** |

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
| Skradin (Scardona) | 43.820 / 15.924 | 1522-01-01 → 1699-01-26 | 860,5 km² | **DESEN** |
| Vrana (Urana) | 43.956 / 15.562 | 1540-10-02 → 1699-01-26 | 657,1 km² | **KESİN** |
| Nadin | 44.074 / 15.498 | 1540-10-02 → 1699-01-26 | 2.000,0 km² | **KESİN** |

Klis · Knin · Sin zaten `2b59aa8`'te yazılmıştı ⇒ **sekizin altısı tamam.**

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
1522-01-01  Skradin'in fethi        en yakın madde 125 gün
```
Dosya bugün girdiye eklenirse **Değişmez 2 AÇIK 0'dan 1'e çıkar.**
⚠️ **Alternatif:** Skradin çıkarılıp kalan **on dört nokta** alınabilir —
o on dört **sıfır borç** doğuruyor.

📌 **Bu liste ilk yazıldığında BEŞ maddeydi; dördü ben çalışırken başka
oturumlarca yazıldı** — `Knin'in fethi` (1522-05-29) · `Klis Kalesi'nin fethi
ve Dalmaçya sancağının kurulması` (1537-03-12) · `Klis'in Venedik'e kaybı`
(1648-03-31) · Sin'in 1513 fethi. Ölçümü her seferinde tekrarladım.
⚠️ **Sayı hareketli: canlıya almadan önce doğrulayıcıyı TEKRAR koştur.**

🔴 **Skradin'in kalma sebebi ve SIRANIN önemi:** günü bilinmiyor
(`§76` → `1522-01-01`). Madde gerçek güne yazılırsa ±30 penceresi tutmaz;
`1522-01-01`'e yazılırsa madde uydurma gün taşır. ⇒ **Önce TARİH bulunmalı,
sonra madde.** Ters sıra çalışmaz.
⚠️ Ve Knin (1522-05-29) ile Skradin (1522-01-01) **aynı seferin iki kalesi**
ama 148 gün arayla yazılı — tek bir "1522 seferi" maddesi ikisini birden
kapatamaz.

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
   **Skradin maddesi yazılmadan ekleme**, ya da Skradin'i çıkarıp on dördü al (4.2).
2. **Bir tarih araştırması** (4.2): Skradin'in 1522 fethinin GÜNÜ. Madde
   bundan SONRA yazılmalı — ters sıra ±30 penceresini tutturamıyor.
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
Karlofça'nın 5 kalesi YAZILMADI — Delovar BULUNAMADI, dördü kaynak yetersiz
Ostrovica · Obrovac   YAZILMADI — koordinat hazır, Osmanlı fetih tarihi yok
Budva · Bar · Ülgün   YAZILMADI — brifing "en sona bırak" diyor, tarih AKDENİZ'de
Tököli v: dönemi      YAZILMADI — §80, şehir şehir tarih yok
Butrinto              KAPSAMIMDA DEĞİL — koordinatör ÇAPRAZ AKDENİZ'de tuttu
Herseknovi 1538-39    ✅ YAZILDI — isg: olarak, TDV dalmacya çözdü
py arac/uret_petek.py ÇALIŞTIRILMADI — koordinatör tetikler
data/yerlesimler.js   DOKUNULMADI
```

### 🟡 KAPSAMIM DIŞINDA AMA ÖLÇTÜM: LİKA'DA SIFIR NOKTA
`44,2-46,0°K / 14,5-17,5°D` kutusunda yalnız Zagreb · Krk · Rab · Pag ·
Banaluka · Yayça var. **Bihać yok** — oysa 1592-1878 arası Osmanlı sancak
merkeziydi. Sonuç: Knin'in peteği hâlâ **5.424,1 km²** ve kuzeye, Habsburg
Askerî Sınır Boyu'na (Lika) taşıyor. Knin 1688'den sonra **Venedik**;
Lika ise 1689'da **Habsburg** oldu — yani Knin'in peteği oraya uzandığı sürece
Lika 1688-1797 arası Venedik boyanacak.

⚠️ Bu, benim eklediğim noktanın **yeni bir hata doğurduğu tek yer** ve
`§3.5.1`'in kuralı gereği kendim raporluyorum: *"öbür tarafta fazlalık
doğuyor mu."* Doğuyor. Çaresi Bihać (ve muhtemelen Gospić/Otočac) —
bir sonraki nokta ekleme kalemi.

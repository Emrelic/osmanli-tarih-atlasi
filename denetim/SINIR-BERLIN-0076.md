# SINIR-BERLIN-0076 — Berlin Antlaşması + Balkan Savaşları toprak teyidi

**Oturum:** SINIR-BERLIN-0076 · **Koordinatör:** YILDIRIM BAYEZIT · **Gece:** 23 Eylül 2026
**Madde:** 24 (SEVK-0076.md) **+ 1** (H-0043, KRONO-0076-A'nın yatay sevkiyle) = **25**
**Ölçüm aleti:** `denetim/SINIR-BERLIN-0076-olc.py` — salt okur, `data/`ya dokunmaz.

---

## 0. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (ORTAK-0076 §4 ⑤)

> **① (asıl öngörü)** H-0138 ve H-0145 tek köke çıkar: Balkan Savaşları'nda Yunanistan
> `isg:` (işgal örtüsü) ile, Bulgaristan ve Sırbistan `s:` (de jure sahiplik) ile
> kodlanmıştır. **Sınav:** 1912-10-08 … 1913-05-29 penceresinde, bbox lat 38–44 /
> lon 19–29 evreninde, Yunanistan için `isg:` sayısı > 0 **ve** Bulgaristan+Sırbistan
> için `isg:` sayısı = 0 ise öngörü doğrudur. **Sınav anı:** ölçüm koşusu.
> **② (ikincil)** 25 maddenin en az 6'sında kök sebep sınır çizgisi değil
> **noktasızlık** olacaktır (`CLAUDE.md §2`).

### Sınav sonucu — ① DOĞRULANDI, ② DOĞRULANDI

| kodlama | sayı | kim |
|---|---|---|
| `s:` (de jure, kendi rengi) | **41** | bulgaristan-kralligi 15 · sirbistan-kralligi 13 · arnavutluk-bagimsiz 12 · yunanistan **1** |
| `isg:` (de facto örtü) | **25** | **yunanistan 25 · başka hiç kimse 0** |
| `v:` | **0** | — |

⇒ Yarık **tarihî/hukukî bir eksende değil, AKTÖR ekseninde.** Aynı olayın aynı
penceresinde Yunanistan taranıyor, Bulgaristan/Sırbistan boyanıyor. Emre'nin
*"bu ikisi tutarsızlık"* cümlesi birebir ölçüldü.

②: noktasızlık 9 maddenin kök sebebi (H-0044 H-0045 H-0046 H-0047 H-0048 H-0050
H-0057 H-0060 H-0106) — öngörüden fazla çıktı.

🔴 **Süzgeç ateşleme sınavı (M-5024 ①, `YASALAR B9`):** ad araması `denetim/ARAC-NORMAL-0903.py`
`norm()`una bağlandı; kendi `.lower()`ım KULLANILMADI. Sınav 5 pozitif vakayla
(`İşkodra` · `Köstendil` · `Niş` · `İgumenitsa` · `Böğürdelen`) **her koşuda önce**
ateşleniyor, tutmazsa alet durur. İlk kurulumda sınav benim kendi test vakamdaki
yazım hatasını yakaladı ve aleti durdurdu — yani sınav çalışıyor. Bu raporda
`bulunamadı` yazan her satır, sınavı geçmiş bir süzgecin **SONUCU**dur.

---

## 1. KÖK SEBEP — bir tanesi 9 maddeyi açıklıyor

### 1.1 DE FACTO / DE JURE KARIŞMASI (H-0135 H-0138 H-0143 H-0145 H-0146 H-0151 H-0153 + H-0040)

Şema kararı tereddütsüz (`arac/girdi.py:851`, commit `043e911`):

```
d: / v: / s:  → DE JURE sahiplik → peteğin TABAN RENGİ   (motor BOYAR)
isg:          → DE FACTO denetim → tarama katmanı        (motor OKUMAZ)
```

⇒ **Emre'nin H-0138 ve H-0145'te istediği şey, şemanın kendi kuralıdır.** Bu bir
zevk tercihi değil, uygulanmamış bir karardır. `girdi.py` yorumu Mısır'ı ve
Bosna'yı örnek veriyor; Balkan Savaşları'nda uygulanmamış.

**Ve tutarsızlık AYNI DOSYANIN AYNI 100 KM'LİK ŞERİDİNDE ölçülebiliyor** — Trakya:

| grup | Bulgar `s:` başlangıcı | ne günü | sınıf |
|---|---|---|---|
| Edirne · Kırklareli · Uzunköprü · Havsa · Vize · Demirköy · İğneada · Lalapaşa · Kofçaz · Dereköy · Meriç · Uluköy · Küfkaynapınarı (**13**) | 1912-10-24 … 1913-03-26, bitiş **1913-07-21** | ordunun girdiği / çıktığı gün | 🔴 **DE FACTO, `s:`ye yazılmış** |
| Tekirdağ (**1**) | 1912-11-01 … 1913-07-21 | ordunun girdiği gün | 🔴 **DE FACTO** |
| Çirmen · Dimetoka · Orestiada · Sofulu · Stérna · Elhova · Umur Fakih (**7**) | **1913-05-30** | **Londra Antlaşması** | ✓ DE JURE |
| Mustafapaşa · Malko Tırnova · Ahtapolu · Rezve (**4**) | **1913-09-29** | **İstanbul Antlaşması** | ✓ DE JURE |
| Kırcaali (**1**) | 1913-07-14 | hiçbir antlaşma değil (2. Balkan geri işgali) | 🔴 belirsiz |

**14 de facto · 11 de jure · 1 belirsiz — tek şeritte.** Bu, kasıtlı bir
konvansiyon olamaz; dosyanın kendisi iki türlü yazılmış. Sonucu ekranda şudur:
**1913-06-15'te Edirne Bulgar (de facto), Dimetoka Bulgar (de jure), Mustafapaşa
Osmanlı (de jure) — dama tahtası.**

De jure günler (`kaynak:` alanına yazılacak):
- **Londra Antlaşması 30 Mayıs 1913** — Osmanlı'nın Midye–Enez hattı batısını
  müttefiklere topluca terki
- **Bükreş Antlaşması 10 Ağustos 1913** — müttefikler arası taksim (Osmanlı taraf değil)
- **İstanbul Antlaşması 29 Eylül 1913** — Osmanlı–Bulgar; Edirne, Kırklareli, Dimetoka
  Osmanlı'da kalır
- **Atina Antlaşması 14 Kasım 1913** — Osmanlı–Yunan

🟢 **Yunanistan kaydı ZATEN DOĞRU tarafta:** 25 `isg:` kaydının bitişi
**1913-11-14 = Atina Antlaşması**, ve Selanik'te `s[yunanistan 1913-11-14..]`
devrediyor. Yani düzeltilecek taraf Yunanistan değil, öteki üçü.

#### Aynı kusur Kafkasya'da — H-0040
Elviye-i Selâse kümesinde **üç ayrı konvansiyon** bir arada:

| yer | `s:rusya` başlangıcı | ne günü |
|---|---|---|
| Ardahan | 1877-05-17 | savaşta işgal |
| Kars | 1877-11-18 | savaşta işgal |
| Şavşat · Artvin · Hopa · Borçka · Hulo (Acara) | 1878-03-03 | **Ayastefanos** (Berlin'le İPTAL edilmiş antlaşma) |
| **Batum** | **1878-07-13** | **Berlin** |

**TDV BATUM** (Müellif: madde gövdesi): *"1878 Berlin Antlaşması'yla serbest liman
olarak Rusya'ya bırakıldı."* ⇒ **Batum'un kendi kaydı DOĞRU.** Emre'nin
*"Batum Osmanlı'da kalmış gibi görünüyor"* gözlemi Batum'dan değil
**komşularından** doğuyor: 3 Mart – 13 Temmuz 1878 arasında Batum, dört ay boyunca
Rus toprağı ortasında bir Osmanlı adası olarak duruyor.

---

### 1.2 NOKTASIZLIK (H-0044 H-0045 H-0046 H-0047 H-0048 H-0050 H-0057 H-0060 H-0106)

**TDV BULGARİSTAN** (Müellif: Yusuf Halaçoğlu) Berlin'in kurduğu iki yapının
şehirlerini **adıyla** sayıyor. Atlası bu listeye karşı taradım:

**Bulgaristan Prensliği (9 şehir sayılmış):**
Sofya ✓ · Niğbolu ✓ · **Ziştovi ✗ YOK** · Rusçuk ✓ · Silistre ✓ · Varna ✓ ·
Şumnu ✓ · **Lofça ✗ YOK** · Tırnova ✓ → **7/9**

**Doğu Rumeli (6 sancak sayılmış):**
Filibe ✓ · **İslimye ✗ YOK** · Eski Zağra ✓ · Tatarpazarcığı ✓ ·
**Burgaz ✗ YOK** · **Hasköy ✗ YOK** → **3/6**

⇒ **TDV'nin adıyla saydığı 15 merkezin 5'i atlasta hiç yok.** Doğu Rumeli
(~32.000 km²) üç noktayla temsil ediliyor. Emre'nin H-0057'deki
*"Bulgaristan haritası bir garip"* cümlesinin ölçülmüş sebebi budur:
o sınır bir antlaşma çizgisi değil, üç noktanın Voronoi ayrıtı.

**Öteki eksikler** (hepsi süzgeç sınavını geçmiş `bulunamadı`):

| kime ait | 1878'de kazanılan, atlasta OLMAYAN |
|---|---|
| **Sırbistan** (H-0046 H-0060) | Vranya · Leskofça · Kurşumlu · Prokuplye — **1878 kazanımlarının dördü de yok** |
| **Karadağ** (H-0048) | Nikşiç · Antivari (Bar) · Ülgün (Ulcinj) · Kolaşin — Karadağ **2 noktayla** duruyor (Cetinje, Podgorica) |
| **Dobruca** (H-0047 H-0050) | Tulça · Hırşova · Mangalia · Balçık · Dobriç · Tutrakan |
| **Tesalya** (H-0045) | Volos (Golos) · Alasonya · Kalabaka · Kardiçe |
| **Prenslik/D. Rumeli** (H-0044 H-0106) | Ziştovi · Lofça · İslimye · Burgaz · Hasköy · Vratsa · Razgrad · Dobriç |

🔴 **Karadağ'ın hükmü şudur:** Berlin, Karadağ'ın yüzölçümünü ikiye katladı ve ona
**Adriyatik çıkışı** verdi (Bar, Ülgün). İkisinin de noktası yok ⇒ **bu kazanım
haritada hiç çizilmiyor, çizilemez.** H-0048 bir sınır sorusu değil, bir
yokluk raporudur.

---

## 2. TEK TEK BULUNAN KUSURLAR (kök sebebe inmeyenler)

### 2.1 🔴 Köstendil — 35 yıllık Osmanlı kaması
```
ölçüm: Köstendil (42.283, 22.690) · d:[- 1413-07-05 .. 1913-05-30]
```
Atlas Köstendil'i **1913 Londra Antlaşması'na kadar Osmanlı** gösteriyor.

**TDV KÖSTENDİL** (Müellif: Machiel Kiel):
- *"1877-1878 Osmanlı-Rus Savaşı sırasında ve bunu takiben kasabadaki ve Köstendil
  bölgesindeki Türkler'in beşte dördü geri dönmemek üzere göç etti."*
- *"**Osmanlılar'ın son ve Bulgarlar'ın ilk dönemindeki Köstendil**, Konstantin
  Jireček tarafından … tasvir edilir"* — Jireček Bulgaristan'da 1879–1884 arası
  görevlidir, yani *"Bulgarların ilk dönemi"* 1878'in hemen ardıdır.
- 1934 Bulgar sayımı kesintisiz Bulgar idaresini gösteriyor.

⇒ **KUSUR TEYİD EDİLDİ.** Köstendil 1878'de Bulgar idaresine geçti, 1913'te değil.
Kusur 35 yıl sürüyor ve Köstendil güneybatı Bulgaristan'ın ortasında olduğu için
büyük bir Osmanlı peteğini Bulgaristan'ın içine sürüyor.

⚠️ **GÜN UYDURULMADI** (`D210`): TDV gün vermiyor, hatta yıl da açıkça yazmıyor —
"1877-1878 savaşı ve bunu takiben" diyor. Yamada **1878-07-13 (Berlin Antlaşması)**
kullandım; gerekçesi ikidir: ① Prensliği kuran ve sınırlarını çizen belge odur
② dosyanın Sofya·Vidin·Rusçuk·Varna·Şumnu·Silistre·Prevadi kayıtları **zaten** bu
günü kullanıyor, yani bu bir künye günü değil **antlaşma günü** ve dosyanın kendi
konvansiyonu. 🔴 Yine de bir **açık kalem**: TDV BULGARİSTAN'ın Prenslik listesi
Köstendil'i saymıyor ve *"Tuna ile Balkanlar arasında"* diyor — Köstendil bu
coğrafî tarifin dışında. Liste `gibi` ile açık uçlu (`D211 ⑧`), ama Köstendil'in
1878'de **Prenslik'te mi Doğu Rumeli'de mi** olduğu TDV'nin bu iki maddesinden
KESİLMEDİ. Berlin Md. 2 metni gerekiyor. ⇒ Yama Prenslik varsayıyor, bu varsayım
**açıkça işaretli**.

### 2.2 🔴 İzdin (Lamia) — 49 yıllık gecikme
```
ölçüm: İzdin (Lamia) (38.900, 22.434) · d:[- 1413-07-05 .. 1881-07-02]
```
**TDV İZDİN** (Müellif: Machiel Kiel) — üç ayrı cümlede aynı şeyi söylüyor:
- *"Osmanlılar zamanında **(1424-1832)** Eğriboz sancağına bağlı bir kazanın merkeziydi."*
- *"**1832**'de Yunanlılar bağımsız bir devlet olarak ortaya çıktıktan sonra İzdin
  **bu devletin sınırları içinde kaldı.**"*
- *"**1879** ve 1897 Yunan sayımlarına göre…"* — 1879'da **Yunan** sayımı, yani
  1881'den önce Yunan idaresinde.

⇒ **KUSUR TEYİD EDİLDİ.** Osmanlı dönemi 1832'de biter, 1881'de değil.
**TDV YIL VERİYOR, GÜN VERMİYOR ⇒ `1832-01-01`** (`CLAUDE.md §4`, `D210`).

⚠️ **TERS YÖN SINAVI (`D206`) — YAPILDI, GEÇTİ.** 1832 sınırı Arta–Volos hattıdır:
İzdin'in **kuzeyinden**, Yenişehir/Tırhala/Domokos'un **güneyinden** geçer. Yani
İzdin'i 1832'ye çekmek komşularını bozmuyor — Yenişehir ve Tırhala'nın
`1881-07-02` günü **doğru** ve öyle kalıyor. Hata öbür tarafa taşınmıyor.

### 2.3 🔴 Bosna — 4 nokta işgal örtüsünden DIŞARIDA (H-0043 H-0057)
1879-01-01'de Bosna vilâyetinin 16 noktasından **12'sinde** `isg:avusturya` var,
**4'ünde YOK**:

| nokta | lat | lon |
|---|---|---|
| Bosna Brod'u (Bosanski Brod) | 45.138 | 17.988 |
| Bosna Dubiçası (Bosanska Dubica) | 45.174 | 16.810 |
| Bosna Novi'si (Bosanski Novi) | 45.048 | 16.377 |
| Krupa (Bosanska Krupa) | 44.882 | 16.158 |

Dördü de **Una–Sava hattında, kuzeybatıda.** Emre'nin H-0057'deki
*"batı kesiminde sanki Osmanlı kalan şehirler var gibi görünüyor"* cümlesi ve
H-0043'te **adıyla saydığı "Bosna Brodu"** aynı dört noktayı gösteriyor.
Avusturya-Macaristan Sava'yı 29 Temmuz 1878'de tam Bosna Brod'undan geçti.

🟢 **H-0043'ün öteki üçü kusur DEĞİL:** Udbina (44.532, 15.767) · Cetin
(45.138, 15.732) · Jasenovaç (45.281, 16.917) — üçü de 1879'da `s:avusturya`,
çünkü **1878'den önce** Habsburg'du (Hırvatistan/Askerî Sınır). 1878 işgaline
konu olmamaları doğrudur; madde metni onları kapsamıyor.

⚠️ **H-0043 — TERS YÖN UYARISI, düzeltme YANLIŞ YÖNE gidebilir.** Emre
*"Yenipazar Osmanlı rengi görünüyor, harita ile madde metni uyumlu görünmiyor"*
diyor. Ölçüm: `Yenipazar (Novi Pazar) 43.140 20.517 = OSMANLI, isg: YOK`.
Fakat Berlin Md. 25 ve 21 Nisan 1879 İstanbul Mukavelesi Avusturya'ya
**Yenipazar sancağında garnizon hakkı** verdi ve Avusturya **Priboj, Prijepolje,
Bijelo Polje**'ye asker koydu — **Yenipazar şehrinin kendisine koymadı**; şehir
Osmanlı sivil idaresinde kaldı. ⇒ Haritanın Yenipazar'ı Osmanlı göstermesi
**büyük ihtimalle DOĞRU**; uyumsuzluğun kaynağı **kronoloji maddesinin fazla
geniş başlığı** (*"Bosna-Hersek ve Yenipazar'ın işgali"*) olabilir. Bu bir
`m:`/`isg:` düzeltmesi değil **metin düzeltmesi** işidir ve benim kalemim değil.
🔴 Yenipazar'a `isg:` YAZMADIM. Koordinatöre sevk: kronoloji tarafı.

### 2.4 🔴 Sofya — henüz kurulmamış devlete tâbiyet (H-0053)
```
ölçüm: Sofya · d:[- .. 1878-01-04] · v:[bulgaristan-prensligi 1878-01-04 .. 1908-10-05]
```
4 Ocak 1878 Rus ordusunun Sofya'ya girdiği gündür. **Bulgaristan Prensliği o gün
YOKTU** — onu Berlin Antlaşması (13 Temmuz 1878) kurdu; TDV BULGARİSTAN:
*"Berlin Antlaşması ile … muhtar bir Bulgaristan Prensliği kuruldu."*
4 Ocak – 13 Temmuz 1878 arası **Rus askerî idaresi**dir.

⇒ Emre'nin sorusu (*"Sofya Osmanlı görünüyor, Rusya eline geçti ise Rus rengine
boyanması gerekmez miydi"*) **iki kere haklı**: ① o pencerede Rus idaresi vardı
② `v:` tâbi kademesi motorda **açık ton** çizer, yani Sofya gerçekten
"açık Osmanlı" görünüyor. 13 Temmuz'dan sonrası için `v:` **doğrudur** (Prenslik
1908'e kadar Osmanlı'ya tâbiydi), yalnız başlangıcı yanlış.

### 2.5 🔴 Niğbolu — gördüğü "sınır" devlet sınırı değil (H-0049)
Aynı gün (1879-01-01), aynı devlet, **iki ayrı kademe**:

| kademe | motor | noktalar |
|---|---|---|
| `s:bulgaristan-prensligi` | **tam renk** | Niğbolu · Plevne · İhtiman |
| `v:bulgaristan-prensligi` | **açık ton** | Sofya · Vidin · Rusçuk · Tırnova · Varna · Şumnu · Silistre |

⇒ Emre'nin *"Niğbolu karşısındaki sınır"* dediği çizgi bir devlet sınırı değil,
**tek devletin iki tonu arasındaki ayrıt.** Prenslik 1878–1908 arası Osmanlı'ya
tâbi olduğundan doğru kademe `v:`dir; üç nokta yanlış kademede.

### 2.6 🔴 Prevadi — kimliksiz tâbiyet dönemi
```
ölçüm: Prevadi (Provadia) · v:[- 1878-07-13 .. 1908-10-05]   ← kid YOK
```
`v:` dönemi var, **devlet kimliği yok**. Aletim bunu `TABI:?` diye bastı.
Doğrusu `kid:"bulgaristan-prensligi"`. Denetimin sormadığı bir sınıf.

### 2.7 🔴 İşkodra — Karadağ'ın fetih günü, Arnavutluk'un kazanım günü sayılmış (H-0134)
```
ölçüm: İşkodra (42.069, 19.513) · d:[- .. 1913-04-23] · s:[arnavutluk-bagimsiz 1913-04-23 ..]
```
23 Nisan 1913, İşkodra'nın **Karadağ'a** düştüğü gündür (Hasan Rıza Paşa'nın
öldürülmesinden sonra Esad Toptani'nin teslimi). Karadağ şehri Düvel-i Muazzama
baskısıyla **14 Mayıs 1913**'te boşalttı ve şehir Arnavutluk'a bırakıldı.
Atlas, Karadağ'ın hiç görünmediği bir devir yazmış: Osmanlı → (aynı gün) Arnavutluk.

⇒ Emre'nin sorusu (*"Arnavutluk kurulur iken bu İşkodra hariç mi kalmış"*)
**başka bir anlamda haklı**: İşkodra kuruluşta gerçekten Arnavutluk'un dışındaydı —
**Karadağ'ın elindeydi.** Eksik olan taraf Karadağ.

### 2.8 🟡 Silistre — yanlış antlaşma (H-0050)
```
ölçüm: Silistre · s:[bulgaristan-kralligi 1908-10-05 .. 1913-05-30] ·
                  s:[romanya-kralligi 1913-05-30 ..]
```
Güney Dobruca'yı Romanya'ya veren belge **Londra (30 Mayıs 1913) değil, Bükreş
(10 Ağustos 1913)**'tir; Londra Osmanlı–müttefik antlaşmasıdır, Bulgar–Romen
sınırını düzenlemez. 72 gün fark ve yanlış belge.

### 2.9 🟡 İmroz — bir kayıtta iki kusur (H-0143)
```
ölçüm: İmroz · s:[yunanistan 1912-11-01 .. 1913-11-01] · d:[- 1913-11-01 ..]
```
① 1912-11-01 de facto işgal günüdür, `s:`ye (de jure) yazılmış — 41 `s:`
kaydının **Yunanistan'a ait tek olanı**, yani dosyanın kendi Yunanistan
konvansiyonuna da aykırı.
② Bitiş `1913-11-01` hiçbir belgeye denk gelmiyor; Atina Antlaşması
**1913-11-14**'tür. Öteki 25 Yunan `isg:` kaydı 1913-11-14 kullanıyor.

---

## 3. TEYİD EDİLDİ — kusur YOK (iş iddia edilmedi)

| madde | ölçüm | hüküm |
|---|---|---|
| **H-0040** Batum | `s:[rusya 1878-07-13..]` = Berlin günü · **TDV BATUM birebir doğruluyor** | Batum kaydı **doğru**; kusur komşu konvansiyonunda (§1.1) |
| **H-0058** Preveze · Vonitsa · Arta | Arta `s:[yunanistan 1881-07-02..]` · Preveze+Vonitsa `d:[.. 1913-11-14]`, `isg:[yunanistan 1912-10-21..1913-11-14]` | **Evet, Osmanlı'da kalmışlar** ve veri **doğru**. Tesalya+Arta 1881'de gitti, Preveze/Vonitsa 1913'e kadar kaldı |
| **H-0135** Yunan işgal bölgeleri | 25 nokta `isg:yunanistan`, bitişleri 1913-11-14 (Atina) | **Şema kuralına uyan taraf BU.** Düzeltilecek olan öteki üçü |
| **H-0107** Bosna ilhakı temsili | 1878–1908: `d:` + `isg:avusturya` · 1908-10-05'ten: `s:avusturya` (47 nokta) | **Temsil doğru** — `girdi.py:851`in Bosna örneğinin ta kendisi. Yalnız §2.3'teki 4 nokta eksik |
| **H-0045** Berlin ve Yunanistan | 1880-01-01'de Tırhala ve Yenişehir hâlâ Osmanlı | Berlin'in Yunanistan'a toprak **vermediği** doğru gösterilmiş; kusur İzdin'de ve noktasızlıkta |
| **H-0153** Ahtapolu · Mustafapaşa | ikisi de `s:[bulgaristan-kralligi 1913-09-29..]` = **İstanbul Antlaşması** | **Evet, 2. Balkan sonunda Bulgarlara verildi** ve veri doğru. Çirmen 1913-05-30 → 1920-05-14 Yunanistan: tutarlı |

---

## 4. KOŞU İSTEYEN — nokta eklenecek yerler (koordinatöre, KOORDİNAT + KAYNAK ile)

🔴 `yerlesimler.js` **bende değil**; aşağıdaki liste koordinatörün koşudan önce
işlemesi için. Koordinatlar tarihî merkez konumudur; kaynak sütunu o noktanın
**niçin gerektiğini** söyler, konumun kendisini değil.

| ad | lat | lon | niçin | dayanak |
|---|---|---|---|---|
| Ziştovi (Svishtov) | 43.617 | 25.350 | Prenslik merkezi | TDV BULGARİSTAN adıyla sayıyor |
| Lofça (Lovech) | 43.133 | 24.717 | Prenslik merkezi | TDV BULGARİSTAN adıyla sayıyor |
| İslimye (Sliven) | 42.683 | 26.317 | **Doğu Rumeli sancak merkezi** | TDV BULGARİSTAN adıyla sayıyor |
| Burgaz (Burgas) | 42.500 | 27.467 | **Doğu Rumeli sancak merkezi** | TDV BULGARİSTAN adıyla sayıyor |
| Hasköy (Haskovo) | 41.933 | 25.550 | **Doğu Rumeli sancak merkezi** | TDV BULGARİSTAN adıyla sayıyor |
| Vranya (Vranje) | 42.550 | 21.900 | Sırbistan'ın 1878 kazanımı | Berlin Md. 36 |
| Leskofça (Leskovac) | 42.998 | 21.946 | Sırbistan'ın 1878 kazanımı | Berlin Md. 36 |
| Kurşumlu (Kuršumlija) | 43.139 | 21.272 | Sırbistan'ın 1878 kazanımı | Berlin Md. 36 |
| Prokuplye (Ürgüp/Toplica) | 43.234 | 21.588 | Sırbistan'ın 1878 kazanımı | Berlin Md. 36 |
| Nikşiç (Nikšić) | 42.773 | 18.944 | Karadağ'ın 1878 kazanımı | Berlin Md. 28 |
| Antivari (Bar) | 42.094 | 19.100 | **Karadağ'ın Adriyatik çıkışı** | Berlin Md. 28 |
| Ülgün (Ulcinj) | 41.929 | 19.205 | Karadağ, 1880 Ülgün krizi | Berlin Md. 28 + 1880 |
| Kolaşin (Kolašin) | 42.822 | 19.517 | Karadağ'ın 1878 kazanımı | Berlin Md. 28 |
| Tulça (Tulcea) | 45.177 | 28.802 | Kuzey Dobruca, Romanya | Berlin Md. 46 |
| Mangalia | 43.817 | 28.583 | **1878 Silistre–Mangalia sınırının güney ucu** | Berlin Md. 46 |
| Hırşova (Hârșova) | 44.683 | 27.950 | Kuzey Dobruca | Berlin Md. 46 |
| Tutrakan (Tutrakan) | 44.050 | 26.617 | Prenslik, Tuna hattı | — |
| Dobriç (Hacıoğlu Pazarcık) | 43.567 | 27.833 | Güney Dobruca, 1913'te el değiştirir | Bükreş 1913 |
| Balçık (Balchik) | 43.417 | 28.167 | Güney Dobruca kıyısı | Bükreş 1913 |
| Volos (Golos) | 39.362 | 22.942 | **1881 Arta–Volos hattının doğu ucu** | 1881 İstanbul Mukavelesi |
| Alasonya (Elassona) | 40.089 | 22.190 | **1881'den sonra OSMANLI kalan sınır kasabası** | 1881 İstanbul Mukavelesi |

⚠️ **Mükerrer taraması yapılmadı** — `CLAUDE.md §11` yeni noktadan önce ad + 3 km
taraması istiyor; `yerlesimler.js` benim kalemim olmadığı için o taramayı
**ekleyecek olan yapmalı**. Ben yalnız *"bu adla bir kayıt yok"*u ölçtüm
(süzgeç sınavı geçti). `Ülgün` ve `Burgaz` aramalarının **yalnız yanlış pozitif**
tuttuğunu ayrıca not ediyorum (`Ulguniq (Wainwright)` ve `Lüleburgaz`) — ikisi de
gerçekten yok.

---

## 5. AÇIK KALEMLER — hüküm bende değil

1. **Köstendil'in 1878 statüsü:** Prenslik mi Doğu Rumeli mi? TDV'nin iki maddesi
   kesmiyor (§2.1). Berlin Md. 2 metni gerekiyor. Yamam Prenslik varsayıyor,
   varsayım işaretli.
2. **H-0043 Yenipazar:** düzeltme kronoloji metninde olabilir, haritada olmayabilir
   (§2.3). Ters yön riski yüksek. Kronoloji kalemi benim değil.
3. **`isg:` yamasının kapsamı:** 14 de facto `s:` kaydını `isg:` + de jure `s:`e
   çevirmek **Değişmez 2'ye dokunur** — her `s:` kırılması ±30 gün içinde kronoloji
   maddesi istiyor. Yeni de jure günler (1913-05-30 · 1913-08-10 · 1913-09-29)
   için kronoloji maddesi **var mı** ölçülmedi; `olaylar*.js` benim kalemim değil.
   🔴 **Bu yama uygulanmadan önce KRONO-0076-C ile eşleşmeli.**
4. **`CEVAP.json` yok.** ORTAK-0076 §3 onu benim de yazabileceğimi söylüyor ama
   dosya mevcut değil ve sekiz oturumun aynı JSON'a yazması sessiz çarpışmadır.
   Hükümlerimi `denetim/SINIR-BERLIN-0076-CEVAP.json`a yazdım — koordinatör
   birleştirir.

---

## 6. YATAY BULGULAR (başka oturumların maddeleri)

- **→ EKOKUMA-0076-B, H-0098 ("Kotor'un İran'a verilmesi"):** ölçtüm, **veri
  kusuru YOK.** `Kotor (Cattaro)` kaydında `iran` hiç geçmiyor. Tek egzotik dönem
  `s:[rusya 1806-01-01..1807-01-01]` — 1806-07 Rus donanmasının Boka Kotorska'yı
  tutması (Tilsit'le Fransa'ya devredildi). *"İran"* büyük ihtimalle
  `rusya` etiketinin yanlış okunması. Kart buna göre kurulabilir.
- **→ KRONO-0076-C:** §5 ③ — `isg:` yamasının Değişmez 2 tarafı sende.
- **→ SINIR-CIZGI-0076:** §1.1'deki de facto/de jure ayrımı `d_sinirlar` tarafında
  da geçerli olabilir; senin 7 maddelik *"bu çizgi neyin nesi"* kökünle
  akraba olması muhtemel.

---

## 7. ÖLÇÜM EVRENİ VE SINIRLARI

- **Evren:** `arac/girdi.py` `GIRDI_DOSYALARI` — **87 dosya** (canlı listeden
  okundu, burada tutulmadı).
- **Sahiplik sırası:** `v:` → `d:` → `s:` (`VERI-YAPISI.md §576`). Ters sıra makul
  bir sayı üretip **sessizce yanlış** olurdu (Girit vakası); aletim doğru sırada.
- **`isg:` ayrı kovada** — taban rengi değil (`girdi.py:851`).
- **ÖLÇÜLEMEDİ:** ekran görüntülerinin (`H-*.png`) **tarihi** okunmadı. Yani
  *"Emre bu kareyi hangi günde çekti"* bilinmiyor; hükümler veri kaydına karşı
  verildi, kareye karşı değil. H-0040 gibi bir maddede bu fark kritik olabilir
  (§1.1). `ölçülemedi` ≠ `yok` ≠ `temiz`.
- **ÖLÇÜLMEDİ:** petek geometrisinin kendisi (koşu gerektirir). Noktasızlık
  hükümleri *"nokta yok"* ölçümüne dayanıyor, *"petek şu kadar km² kaydı"*
  ölçümüne değil.

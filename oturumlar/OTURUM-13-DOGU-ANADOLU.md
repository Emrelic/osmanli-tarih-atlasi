# Oturum 13 — Doğu Anadolu yoğunluğu, `m:` denetimi, Bursa örtüşmesi

Koordinatörün üç işi: (1) 11 eksik `m:`, (2) Doğu Anadolu seyrekliği,
(3) `HATALAR 17` Gemlik-Armutlu enklavı. Ölçüm 2026-07-31,
`girdi.yukle()` üzerinden (**967 nokta** — `yerlesimler.js` 783 +
`yerlesimler_afrika.js` 184).

---

## 0. Baş sonuçlar — dört cümle

1. **İŞ 1'in öncülü ölçümle çürüdü:** o 11 kaydın **sekizi `k:2`, üçü `k:0`**,
   yani hepsi koordinatörün kendi muafiyet kuralına giriyor; veride `m:` alanı
   gereken **hiçbir kayıtta boş değil** (`k:3`/`k:4` + `m:` boş = **0**).
2. **İŞ 2 için sekiz öneri kaynaklandı** (Ahlat · Hasankeyf · Silvan · Cizre ·
   Siirt · Nusaybin · Bayburt · Muş), üçü **kaynaksız kaldığı için askıya
   alındı** (Malazgirt · Adilcevaz · Ayas — TDV'de müstakil maddeleri yok).
3. **Gemlik-Armutlu bir enklav DEĞİL, bir ÖRTÜŞMEDİR:** Osmanlı gövdesi ile
   `bizans` gövdesi aynı toprağı kaplıyor ve çizim sırası gereği Osmanlı
   üstte kalıyor — **Bursa 1303'ten itibaren Osmanlı boyanıyor, oysa
   1326-04-06'da düşüyor: 23 yıl.**
4. 🔴 Bu, tek bir şehrin hatası değil: 1325-06-15'te **783 noktanın 23'ü iki
   ayrı gövdenin içinde** kalıyor. `donemler.js` ile `devletler_harita.js`
   bir bölümleme (partition) oluşturmuyor ve **bu hiç ölçülmemişti.**

---

## 1. İŞ 1 — "11 eksik `m:`" — düzeltilecek bir şey yok

### 1.1 O 11'in dökümü

Kutu `35-45 D / 37-41,5 K`, 1288'de yaşayan **45** kayıt, `m:` boş olan **11**:

| Kayıt | `k` | Neden boş olması DOĞRU |
|---|---|---|
| Sivas · Trabzon · Erzurum · Van · Diyarbakır · Maraş · Adana · Revan | **k:2** | merkezin kendisi — koordinatörün kendi muafiyeti |
| Hoy · Selmâs (Dilman) · Mâku | **k:0** | `VERI-YAPISI.md`: `0` = kademesiz (**yabancı şehir**, dolgu) |

Koordinatörün tarifi *"`m:` boş **ve `k:` 3-4** olanlar"* idi. O süzgeç
uygulandığında sonuç **sıfırdır**; 11 sayısı süzgeçsiz sayımdır.

### 1.2 `m:` alanının gerçek denetimi — üç hata sınıfı, üçü de temiz

Bütün veri (967 kayıt), yalnız Doğu kutusu değil:

| Sınıf | Sonuç |
|---|---|
| `k:3`/`k:4` olup `m:` boş | **0** (Doğu kutusunda da 0) |
| `m:` dolu ama hedef yerleşim yok (kırık referans) | **0** |
| `m:` dolu ama hedef `k:1`/`k:2` değil | 8 — **hata değil**, aşağıya bak |

Kademe dağılımı: `k:3` → 172 kaydın **172'sinde** `m:` dolu; `k:4` → 399 kaydın
**399'unda** dolu. Alan **%100 tamdır.**

### 1.3 Üçüncü sınıf neden hata değil

Sekiz kayıt bir `k:3`'e bağlanıyor (Kâhta → Malatya → Maraş gibi). Bu, şemayı
ihlal ediyor **görünüyor**, çünkü `VERI-YAPISI.md` *"`m:` = bağlı olduğu k1/k2
merkezinin adı"* diyor. Ama motor bunu zaten destekliyor:

> `arac/uret_petek.py:277` — *"Eski kontrol TEK HOP bakıyordu: `y["m"]`
> doğrudan k1/k2 değilse uyarı basıyordu"* → yerine `k12_merkez()` geldi ve
> **`m:` zincirini k1/k2'ye kadar takip ediyor.**

Yani çok hoplu bağlılık **tasarım gereği**. Sekizi de zincir sonunda geçerli bir
k1/k2'ye varıyor (Malatya → Maraş k2, Urfa → Diyarbakır k2, Avlonya → Yanya,
Eğriboz → Mora).

> 📌 **Tek yapılacak iş bir belge düzeltmesidir:** `VERI-YAPISI.md`'deki `m:`
> tanımı *"bağlı olduğu k1/k2 merkezinin adı"* değil, **"bir üst kademedeki
> merkezin adı; zincir k1/k2'de biter"** olmalı. 🔒 O dosya Oturum 0'ın.

### 1.4 Yan bulgu — iki tutarsız kayıt (küçük)

| Kayıt | Durum | Not |
|---|---|---|
| **Söğüt** | `k:1` **ve** `m:"Bursa"` | `k:1` merkezdir, `m:` almamalı. Söğüt bir kazadır; `k:1` muhtemelen anlatı önemi için verilmiş. Dört `k:1` kaydından üçü Bursa/Edirne/İstanbul, dördüncüsü bu. |
| **Sina güneyi** | `k:0` (dolgu) **ve** `m:"Kahire"` | Zararsız; dolgu noktası `m:` almaz. |

İkisi de haritayı etkilemiyor (motor `k:1`'i zaten zincirin sonu sayıyor).

---

## 2. İŞ 2 — Doğu Anadolu'da eksik merkezler

### 2.1 Önce eleme — hiçbiri veride başka adla durmuyor

`OTURUM-13-ANADOLU.md`'nin dersi gereği **parça eşleşmeyle** arandı (tam ad
araması bu depoda yanlış negatif veriyor: "Adıyaman" → veride
*"Hısn-ı Mansûr (Adıyaman)"*). 26 kalıp tarandı; `Sis`→Sisam, `Ayas`→Ayasuluk
yalancı eşleşmeleri elendi. Aşağıdaki adayların **hiçbiri** veride yok.

### 2.2 Kaynaklanan sekiz öneri

`kur:` **hiçbirinde gerekmiyor** — sekizi de 1281'den çok önce kurulmuş,
kesintisiz yaşayan yerleşimler.

| # | Ad | lat / lon | TDV slug | 1288 sahibi | Zincir (öneri) |
|---|---|---|---|---|---|
| 1 | **Ahlat** | 38,752 / 42,487 | `ahlat` ✔ | `ilhanli` | `ilhanli` 1281→1353 · `karakoyunlu` →1472 · `akkoyunlu` →1535 · OSM **1535** |
| 2 | **Hasankeyf** | 37,714 / 41,412 | `hasankeyf` ✔ | 🔴 **`eyyubi`** | `eyyubi` 1281→**1517** · OSM 1517 |
| 3 | **Silvan (Meyyâfârikîn)** | 38,140 / 41,005 | `meyyafarikin` ✔ | `ilhanli` | `ilhanli` 1281→1353 · sonrası **Diyarbakır'ı yansıtır** |
| 4 | **Cizre** | 37,330 / 42,190 | `cizre` ✔ | `ilhanli` | `ilhanli` 1281→1353 · … · OSM **1515-09-15** (Mardin grubu) |
| 5 | **Siirt** | 37,929 / 41,941 | `siirt` ✔ | `ilhanli` | `ilhanli` 1281→1353 · … · OSM **1514** (920 h., Çaldıran sonrası) |
| 6 | **Nusaybin** | 37,075 / 41,215 | `nusaybin` ✔ | `ilhanli` | `ilhanli` 1281→1353 · … · OSM **1515 sonu** ⚠️ |
| 7 | **Bayburt** | 40,259 / 40,223 | `bayburt` ✔ | 🔵 **`selcuklu`** | `selcuklu` 1281→1308 · `ilhanli` →1335 · `eretna` 1335→1381 · … · OSM **1514-10** |
| 8 | **Muş** | 38,734 / 41,489 | `mus` ✔ | `ilhanli` | `ilhanli` 1281→1353 · … · OSM ⚠️ (aşağı bak) |

**TDV'nin verdiği asıl cümleler:**

- **Ahlat** — *"XII. yüzyılın başlarından itibaren Ahlatşahlar hânedanının
  başşehri olan Ahlat, İslâm âleminin en büyük şehirlerinden biri haline
  gelmiş"*. Kösedağ (1243) sonrası Moğol/İlhanlı; 1472 Akkoyunlu (Bayındır
  Beg); 1535 Osmanlı (Kanûnî).
- **Hasankeyf** — Artuklu Hısnkeyfâ kolu 495/1102 – 629/1232; *"el-Melikü'l-Kâmil
  Nâsırüddin Muhammed önce Âmid'i, daha sonra Hasankeyf'i zaptederek Artuklular'ın
  buradaki hâkimiyetine son verdi"* → **1232'den itibaren Eyyûbî**. Osmanlı 1517,
  Mardin'in fethinden sonra.
- **Meyyâfârikîn** — *"Eyyûbîler 658 (1260) yılına kadar Meyyâfârikīn'ı ellerinde
  tuttular"*; Hülâgû sonrası Moğol.
- **Cizre** — *"660'ta (1261-62) Moğol istilâsına uğradı"*, *"Hülâgû daha sonra
  Cizre'yi Emîr Tûdân'a verdi"*.
- **Bayburt** — 🔵 *"1291'de burada II. Gıyâseddin Mesud adına para
  basılmasından anlaşılmaktadır"* → **1288'de Selçuklu**, İlhanlı değil.
  1335'te Eretnaoğulları'na geçti; *"Osmanlı kuvvetleri…Bayburt'u aldılar
  (Ekim 1514)"*.
- **Nusaybin** — *"921 (1515) yılı sonlarında Osmanlı topraklarına katıldı"*.
- **Muş** — *"Şehrin Osmanlı idaresine kesin olarak geçişi Yavuz Sultan Selim'in
  Çaldıran zaferinden (1514) sonradır."*

### 2.3 🔴 İki öneride çözülmemiş nokta — uydurmadım, işaretliyorum

**(a) Hasankeyf `eyyubi` istiyor ve o kimlik yok.** `devletler.js`'te
`eyyubi` **kaydı yoktur** (parça eşleşmeyle arandı: `Eyyub`, `Eyyûb` → yok),
`renkler.py`'de rengi yoktur. Hasankeyf Eyyûbîleri 1232'den 1517'ye kadar
sürmüştür — yani bu, 1243 epoku için değil **bugünkü 1281-1517 aralığı için**
gereken bir kimliktir. `OTURUM-13-SELCUKLU.md §18.1`'de aynı kimlik 1243-1250
Mısır-Suriye için istenmişti; **iki ayrı gerekçe aynı kimliği işaret ediyor.**
⚠️ Akkoyunlu ve Safevî metbûiyeti zincire **yazılmadı** —
`OTURUM-13-SELCUKLU.md §3`'ün kararı: *harita metbûyu boyamaz.*

**(b) Nusaybin ve Muş'un günü kaynakta yok, ve iki kural çatışıyor.**
TDV Nusaybin için *"1515 yılı sonlarında"* diyor. `CLAUDE.md §4` günü bilinmeyen
tarihe `YYYY-01-01` yazılmasını söylüyor — ama `1515-01-01` yazmak **"yılın
başı"** demek olur ve kaynağın *"sonlarında"*sıyla çelişir. Öneride komşu grubun
tarihi (`1515-09-15`, Mardin) kullanıldı; **bu bir tercihtir, kaynak değildir ve
entegrasyonun onayı gerekir.** Muş için TDV yalnız *"1514'ten sonra"* diyor;
bitişiğindeki **Bitlis'in kesin tarihi 1534'tür** (aşağıda doğrulandı), bu yüzden
Muş'a tek başına 1514 yazmak Bitlis'le çelişen bir çıkıntı açar.
**Muş, Van-Bitlis-Ahlat üçlüsüyle birlikte ele alınmalı.**

### 2.4 Askıya alınan üç öneri — kaynak yok, yazılmadı

| Aday | Slug denemesi | Sonuç |
|---|---|---|
| **Malazgirt** | `malazgirt` | 🔴 **ÖLÜ** — yalnız `MALAZGİRT MUHAREBESİ` (savaş) maddesi var, şehir maddesi yok |
| **Adilcevaz** | `adilcevaz` | 🔴 **ÖLÜ** — `<title>` = "Arama - TDV İslâm Ansiklopedisi" |
| **Ayas (Yumurtalık)** | `ayas` | 🔴 **YANLIŞ MADDE** — `A'YÂS`, Kureyş'in bir kolu; Çukurova limanıyla ilgisi yok |

**Sis (Kozan)** — Kilikya Ermeni Krallığı'nın başkenti, ayrı bir sınıf:
müstakil maddesi **yok** (`sis` → `ŞÎS`, Hz. Âdem'in oğlu; `kozan` → arama
sayfası; "sis kilikya ermeni" aramasında başlıkta **0** eşleşme). Ama TDV
`besni` maddesi şehri adıyla anıyor: *"Memlük Sultanı Baybars 1266'da
Kilikya'ya inerek **Sîs** Kralı Hethum'un oğlu…"*. Yani 1288'de
`kilikya-ermeni` olduğu TDV'den **dolaylı olarak** çıkarılabilir.
📌 Öneri **koşullu**: `kilikya-ermeni` 1281→1375-04-14 · `memluk` →1516-08-24 ·
OSM 1516-08-24. ⚠️ Bu zincirin ikinci ve üçüncü halkası **doğrulanmadı**.
Çukurova'da `kilikya-ermeni` kimliğinin haritada tek temsilcisi **Adana**'dır;
başkentin yokluğu o devleti olduğundan küçük gösteriyor.

### 2.5 Yoğunluk aritmetiği — sekiz nokta 8 katlık farkı kapatmaz

Kutunun 45 noktası × 9.596 km² ≈ **432.000 km²**.

| Senaryo | Nokta | km²/petek |
|---|---|---|
| bugün | 45 | 9.596 |
| +8 öneri | 53 | **8.148** |
| Orta Anadolu düzeyi (6.019) | **72** | — |
| Batı Anadolu düzeyi (3.637) | **119** | — |
| Bitinya düzeyi (1.203) | 359 | — |

> Sekiz nokta seyrekliği **%15 azaltır.** Orta Anadolu düzeyine çıkmak için
> ~27 nokta daha gerekir. Bu turda o kadarı **kaynaklanamadı** — TDV'de
> müstakil maddesi olan aday havuzu bu bölgede sığ (üç aday maddesizlikten
> düştü). Kalan yol iki seçenekten biri: (a) TDV dışı akademik referansa
> açılmak — `CLAUDE.md §4` bunu TDV'nin kapsamadığı coğrafyalar için zaten
> serbest bırakıyor, ama Doğu Anadolu TDV'nin **tam kapsama alanıdır**;
> (b) yoğunluğu 8 katlık farkla **kabul etmek** ve bunu bilinen bir sınır
> olarak kaydetmek. **Bu bir kapsam kararıdır, benim vereceğim karar değil.**

---

## 3. `HATALAR 17` — Gemlik-Armutlu: enklav değil, **örtüşme**

### 3.1 Enklav testi — enklav YOK

Osmanlı gövdesinin parçaları sayıldı ve her parçanın hangi yerleşimi içerdiği
delik-duyarlı (tek-çift kuralı, parça bazında) sınandı:

| Gün | Osmanlı parça sayısı | Gemlik hangi parçada | Söğüt hangi parçada |
|---|---|---|---|
| 1323-06-01 | 1 | #0 (20.569 km²) | #0 |
| 1325-01-01 | 3 | #0 (37.176 km²) | #0 |
| 1327-01-01 | 3 | #0 | #0 |
| 1332-01-01 | 4 | #0 (43.226 km²) | #0 |

Gemlik, Armutlu, Yalova ve ana gövde **hep aynı parçadadır**; diğer parçalar
9 km² ve 186 km²'lik **adalardır**. 1325'te ana parçanın **tek halkası** var
(88 köşe) — yani gövdede **delik bile yok.**

> **Cevap:** *"Osmanlı aradaki toprağı almamış mı?"* — Almış. Kestel · Dimbos ·
> Kite · Marmaracık 1303'ten Osmanlı ve kıyıyla ana gövdeyi birleştiriyorlar.
> Enklav diye bir şey yok.

### 3.2 Ama gerçek kusur daha büyük — iki gövde aynı toprağı kaplıyor

Aynı koordinat **hem** Osmanlı **hem** `bizans` gövdesinin içinde:

| Gün | Bursa | İznik | Ulubat | Karamürsel |
|---|---|---|---|---|
| 1301-06-01 | `bizans` | `bizans` | `bizans` | `bizans` |
| **1303-06-01** | **OSMANLI + bizans** | `bizans` | OSMANLI + bizans | `bizans` |
| 1313-06-01 | OSMANLI + bizans | `bizans` | OSMANLI + bizans | `bizans` |
| 1321-06-01 | OSMANLI + bizans | `bizans` | OSMANLI + bizans | `bizans` |
| **1324-06-01** | OSMANLI + bizans | **OSMANLI + bizans** | OSMANLI + bizans | OSMANLI + bizans |
| 1327-06-01 | OSMANLI | OSMANLI + bizans | — | — |
| 1332-06-01 | OSMANLI | OSMANLI | — | — |

Ve `js/app.js`'te çizim sırası: `devlet-dolgu` **559. satırda**,
`osmanli-dolgu` **601. satırda** — sonra eklenen üstte çizilir.
**Örtüşen yerde kullanıcı OSMANLI görür.**

> ### 🔻 Sonuç
> **Bursa haritada 1303'ten itibaren Osmanlı boyanıyor. Gerçek fetih
> 1326-04-06 — arada 23 yıl var.**
> **İznik 1324'ten Osmanlı görünüyor, gerçek fetih 1331-03-02 — 7 yıl.**
>
> Sebebi 1303-01-01'dir: o gün Kestel · Dimbos · Kite · Ulubat birden Osmanlı
> oluyor, peteklerinin birleşimi Bursa'yı çevreliyor ve **yumuşatılmış dış
> hat Bursa'nın hücresini içine alıyor** — 37.000 km²'lik gövde 88 köşeyle
> çiziliyor, o kabalıkta bir şehir hücresi kayboluyor.

### 3.3 🔴 Tek şehir değil — ölçüldü

Bütün yerleşimler, bütün gövdelere karşı sınandı:

| Gün | 1 gövdede | **2 gövdede** | Gövde sayısı |
|---|---|---|---|
| 1325-06-01 | 712 | **23** | 69 |
| 1500-06-15 | 727 | **14** | 46 |
| 1700-06-15 | 741 | **1** | 38 |

Örtüşenler iki kümede topluluyor:

1. **1320'ler Bitinyası** — Bursa · İznik · Ulubat · Karamürsel
   (`OSMANLI + bizans`). `HATALAR 17`'nin şikâyet ettiği bölge.
2. **`iran` + doğudaki her devlet** — Tebriz, Bağdat, Musul, Kerkük, Kerbelâ,
   Şehrizor 1325'te `iran + ilhanli`, 1500'de `iran + akkoyunlu`, Meşhed
   `iran + timurlu`. **`CLAUDE.md §3.5`'in "İran hayaleti"nin ölçülmüş
   geometrik ayak izi budur** — kimlik yalnız katalogda eksik değil,
   **poligonu da komşularının üstüne biniyor.**

Eğilim anlamlı: **erken tarihlerde daha kötü.** 1325'te nokta az, petek büyük,
dış hat kaba (88 köşe) → örtüşme 23. 1700'de tek örtüşme kalıyor
(Venedik + Toskana). Yani bu, epok 1243'e inerse **büyüyecek** bir kusurdur.

### 3.4 Ne yapılmalı — üç ayrı iş

| İş | Kime |
|---|---|
| Gövdeler bir **bölümleme** olmalı: `donemler.js` ile `devletler_harita.js` aynı Voronoi'den üretiliyor, birleşimden sonra **karşılıklı fark** alınmalı | motor — **Oturum 0** |
| Ara çözüm: `devlet-dolgu` katmanı Osmanlı'nın **üstüne** alınırsa Bursa 1326'ya kadar Bizans görünür (ama bu sefer Osmanlı toprağı Bizans'ın altında kalır — **kusuru taşır, çözmez**) | `js/app.js` — Oturum 1 |
| `iran` kimliği: katalog kaydı + ömür + poligon | **Oturum 3** |

⚠️ Örtüşme **denetimden kaçıyor**: üç değişmezin hiçbiri "iki gövde aynı
toprağı kaplıyor mu" diye sormuyor. Değişmez 1 sahipsizliği ölçer, örtüşmeyi
değil. **Yedinci denetim olarak eklenmeli** — Oturum 6.

---

## 4. Araç notu — bir kusuru kullanmadan önce buldum

`OTURUM-13-OLCUM-ARACLARI.md`'de `sahip.js` için *"delik (iç halka) ayrımı
yapmaz"* diye yazmıştım. Bu turun sorusu **tam olarak bir delik sorusuydu**
(enklav var mı?) ve araç olduğu gibi kullanılsaydı cevap yanlış çıkardı.

Düzeltilmiş sürüm `scratchpad/sahip2.js`: tek-çift kuralı **parça bazında**
işletiliyor (dış halkada içeride, delikte dışarıda). Enklav testi bu sürümle
yapıldı; sonuç değişmedi (gövdede zaten delik yoktu) ama **doğrulanmış oldu.**

📌 Ders: bir aracın bilinen sınırını yazmak yetmiyor; **o sınıra dokunan ilk
soruda aracı düzeltmek gerekiyor.** Not, kullanılmadan önce okunmalı.

---

## 5. TDV slug denetimi — bu tur

| Slug | `<title>` | Durum |
|---|---|---|
| `ahlat` | "AHLAT - TDV İslâm Ansiklopedisi" | ✔ CANLI |
| `hasankeyf` | "HASANKEYF - …" | ✔ CANLI |
| `meyyafarikin` | "MEYYÂFÂRİKĪN - …" | ✔ CANLI |
| `cizre` | "CİZRE - …" | ✔ CANLI |
| `siirt` | "SİİRT - …" | ✔ CANLI |
| `nusaybin` | "NUSAYBİN - …" | ✔ CANLI |
| `bayburt` | "BAYBURT - …" | ✔ CANLI |
| `mus` | "MUŞ - …" | ✔ CANLI |
| **`bitlis`** | "BİTLİS - …" | ✔ **CANLI** — `OTURUM-13-ANADOLU.md §17`'nin açık borcu kapandı |
| `malazgirt` | "Arama - …" | 🔴 ÖLÜ (yalnız `MALAZGİRT MUHAREBESİ`) |
| `adilcevaz` | "Arama - …" | 🔴 ÖLÜ |
| `kozan` | "Arama - …" | 🔴 ÖLÜ |
| `sis` | "ŞÎS - …" | 🔴 **YANLIŞ MADDE** (Hz. Âdem'in oğlu) |
| `ayas` | "A'YÂS - …" | 🔴 **YANLIŞ MADDE** (Kureyş kolu) |

🔵 **`bitlis` doğrulandı ve `ANADOLU.md §16 A`'daki öneriyi TEYİT ediyor:**
*"Ulama Han (Paşa)…başarı kazanarak Bitlis'i **1534**'te kesin olarak Osmanlı
topraklarına katmıştır"*; 1514-15 biatı geçiciydi, 1555 Amasya ile tanındı.
Veride `1515-09-15` yazıyor — **19 yıl fark doğrulanmış durumda.**

⚠️ İki *yanlış madde* vakası, `CLAUDE.md §4`'ün ölü-slug tuzağının **üçüncü
biçimidir**: sayfa açılıyor, `<title>` de "Arama" değil — ama madde **başka bir
şeyi** anlatıyor. `<title>` kontrolü bunu yakalamaz; **maddenin konusu da
okunmalıdır.**

---

## 6. Koordinatöre özet

1. **İŞ 1'de iş yok.** 11 kaydın 8'i `k:2`, 3'ü `k:0` — hepsi senin kendi
   muafiyetin. `k:3`/`k:4` + `m:` boş = **0**, kırık referans = **0**. Alan
   %100 tam. Tek yapılacak `VERI-YAPISI.md`'de bir cümle düzeltmek (çok hoplu
   zincir motorda **destekleniyor**, `uret_petek.py:277`).
2. **İŞ 2'de sekiz kaynaklı öneri var** (§2.2), üçü kaynaksızlıktan askıda
   (§2.4), Sis koşullu. İkisinde çözülmemiş nokta işaretlendi: Hasankeyf
   **`eyyubi` kimliğini** istiyor (katalogda yok), Nusaybin/Muş'un **günü
   kaynakta yok**. Uydurmadım.
3. ⚠️ **Sekiz nokta 8 katlık seyrekliği kapatmaz** — %15 azaltır. Orta Anadolu
   düzeyi ~27 nokta daha ister ve TDV aday havuzu bu bölgede sığ çıktı. Kapsam
   kararı senin.
4. 🔵 **Bayburt 1288'de Selçuklu'dur** (1291'de Mesud II adına sikke) — bu,
   `OTURUM-13-SELCUKLU.md`'nin Selçuklu'yu 1308'e kadar yaşatan kararının
   bağımsız bir doğrulamasıdır.
5. 🔴 **Gemlik-Armutlu enklav değil, örtüşme** — ve asıl haber Bursa'nın
   **1303'ten** Osmanlı boyanması (23 yıl erken). 1325'te 783 noktanın 23'ü
   iki gövdenin içinde; `iran` hayaletinin geometrik ayak izi de burada.
   **Üç değişmezin hiçbiri bunu ölçmüyor** — yedinci denetim gerekiyor.
6. 📌 Senin "kararsız bant = eksik yerleşim dedektörü mü?" sınamana bir
   ölçüt önerisi: **örtüşme de bir dedektördür.** İki gövdenin aynı toprağı
   kaplaması, aralarında petek üretecek nokta olmadığı anlamına geliyor —
   1325'te 23, 1700'de 1. Nokta sıklaştıkça kayboluyor.

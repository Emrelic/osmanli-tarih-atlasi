# ÇÖL BOYAMASI — Emre'nin 1703-08-22 tarihli beş görseli

**Oturum kipi:** yalnız ÖLÇÜM (CLAUDE.md §7, "Oturum 2"). Hiçbir veri/motor
dosyasına yazılmadı. Bu dosya oturumun tek yazdığı dosyadır.

**Gün:** 1703-08-22 (Edirne Vakası — II. Mustafa'nın hal'i)
**Ölçüm tabanı:** `data/donemler.js` damgası **20 Ağu 2026 02:10:46**,
2580 nokta, o gün 670 Osmanlı sahipli nokta.

> 🔴 **TABAN ÖLÇÜM SIRASINDA DEĞİŞTİ — ve fark edildi.**
> İlk geometri koşum `PETEKLER = 2576` gördü, ikincisi `2580`. Sebep:
> 19 Ağu 23:00'te başlayan otomatik koşu **20 Ağu 02:10**'da bitip
> `donemler.js`i yeniden yazdı (commit `6404f8f`, r2622).
> ⇒ **Bütün ölçümler güncel dosyaya karşı TEKRARLANDI.** Aşağıdaki her sayı
> 02:10 damgalı çıktıya aittir. Boya hükmü iki koşuda da AYNI çıktı
> (147 vs 150 doğrudan parça, altı noktanın altısında aynı sonuç).

---

## 0. ÖZET — tek cümlelik hüküm

**Kapıda kusur VAR ve iki tane.** Ama Emre'nin gördüğü iki şikâyet
(*"çöl niçin boyalı"* ve *"Basra-Bağdat arası niçin boş"*) **tek bir
mekanizma tersliğinin iki yüzüdür**: kapı, kapatması tasarlanan boşluk
sınıfını kapatamıyor, kapatmaması gereken sınıfı kapatıyor.

---

## 1. ALTI NOKTANIN ÖLÇÜMÜ

### 1.1 Yayındaki çizim — ne boyalı, ne boş

| # | nokta | konum | YAYINDA |
|---|---|---|---|
| 1 | Trablus/Libya çölü | 26,90K · 22,73D | 🟩 **Osmanlı (doğrudan) BOYALI** |
| 2 | Libya iç çölü | 25,18K · 18,30D | 🟩 **Osmanlı (doğrudan) BOYALI** |
| 4 | Irak/Suudi sınırı | 31,04K · 42,71D | 🟩 **Osmanlı (doğrudan) BOYALI** |
| 5 | Semâve civarı | 30,76K · 46,12D | ⬜ **BOŞ** |
| 6a | Basra-Bağdat arası | 31,30K · 45,50D | 🟩 **Osmanlı (doğrudan) BOYALI** |
| 6b | Basra-Bağdat arası | 30,60K · 46,60D | ⬜ **BOŞ** |

**ÖLÇÜM:** 5. nokta boyalı DEĞİL.
**ÇIKARIM:** Emre'nin *"5"* diye işaretlediği alan ile ölçtüğüm koordinat
aynı yer olmayabilir — ya da 5 numaralı görsel aslında **boşluğu**
gösteriyor. Kutunun ortası (`29,76-31,77K · 45,33-46,91D`) tam olarak
aşağıdaki **21.600 km²'lik Irak boşluğunun** içine düşüyor.
Altısı da motorun kara maskesinde **kara** (su değil).

---

### 1.2 Nokta 1 — Trablus/Libya çölü · 26,90K 22,73D · **BOYALI**

**En yakın 5 yerleşim (o gün sahnede olanlar):**

| km | yerleşim | sahip | k | A1 tavanı |
|---|---|---|---|---|
| 98,4 | Serîr | **—** (`bos:devletsiz`) | 0 | 280 → yetişir |
| 176,9 | Serîr Kalanşû | **—** (`devletsiz`) | 0 | 280 → yetişir |
| 212,7 | Tâzirbû | **—** (`devletsiz`) | 0 | 280 → yetişmez |
| 264,4 | Câlû | OSMANLI | 4 | 140 → yetişmez (+124) |
| 305,0 | Kufra (el-Cûf) | **—** (`bos:kabile`) | 0 | 280 → yetişmez |

- **Sorgu noktasının KENDİ Emre puanı: 2** → ❌ eşiğin (4) **ALTINDA**
- **A1 tavanı buraya yetişen SAHİPLİ nokta: 0**
- **Kapı hükmü** (Serîr'in *kendi* konumundan, `_dolgu_kumesi` birebir):
  `OSMANLI 5 puan` → Câlû 176,3 km **+4** · Merâde 334,1 km **+1** ⇒ **KATILIR**

**ÇIKARIM:** boyama **EKLEYİCİ KAPIDAN** geliyor. Ne sorgu noktasının kendi
puanı ne de A1 tavanı burayı boyayamazdı; boyayan şey **Serîr'in peteğinin
bütün olarak Osmanlı'ya katılması.**

---

### 1.3 Nokta 2 — Libya iç çölü · 25,18K 18,30D · **BOYALI**

| km | yerleşim | sahip | k | A1 tavanı |
|---|---|---|---|---|
| 110,5 | Vâv el-Kebîr | **—** (`devletsiz`) | 0 | 280 → yetişir |
| 275,5 | Ramletü Zellâf | **—** (`devletsiz`) | 0 | 280 → yetişir |
| 283,8 | Tâzirbû | **—** (`devletsiz`) | 0 | 280 → yetişmez |
| 338,2 | Zevîle (Zawila) | OSMANLI | 4 | 140 → yetişmez (+198) |
| 341,5 | Rebyâne | **—** (`devletsiz`) | 0 | 280 → yetişmez |

- **Sorgu noktasının KENDİ Emre puanı: 4** → tam eşikte, ve **tamamı
  300-400 km halkasından**: Zevîle 338,2 **+1** · el-Katrûn 369,5 **+1** ·
  Zilla 383,5 **+1** · Tırgan 398,6 **+1**
- **A1 tavanı yetişen SAHİPLİ nokta: 0**
- **Kapı hükmü** (Vâv el-Kebîr'in kendi konumundan): `OSMANLI 9 puan` →
  Zevîle 229,6 **+2** · el-Katrûn 264,1 **+2** · Tırgan 288,8 **+2** ·
  Sebha 335,5 **+1** · Murzuk 337,1 **+1** · Zilla 356,8 **+1** ⇒ **KATILIR**

> 🔴 **EMRE'NİN SEZGİSİ TAM BURADA DOĞRU.** *"200 km'den uzak değil mi? iki
> üç Osmanlı yerleşimine 300-400 km gibi uzaklıklarda imiş gibi geldi"* —
> **200 km içinde tek bir Osmanlı yerleşimi YOK.** En yakını 338 km.
> Puanın tamamı 2p ve 1p halkalarından toplanıyor.

---

### 1.4 Nokta 4 — Irak/Suudi sınırı · 31,04K 42,71D · **BOYALI**

| km | yerleşim | sahip | k |
|---|---|---|---|
| 185,8 | Necef | **OSMANLI** | 3 |
| 194,6 | Kûfe | OSMANLI | 4 |
| 215,1 | Kerbelâ | OSMANLI | 3 |
| 229,0 | Hille | OSMANLI | 4 |
| 235,3 | Dîvâniye | OSMANLI | 4 |

- **En yakın nokta SAHİPLİ** ⇒ **ekleyici kapı hiç devrede değil.**
- Necef k=3 → A1 tavanı 280 km, mesafe 185,8 ⇒ **tavan yetişir.**
- 185,8 km, Emre'nin **0-200 km / 4 puan** halkasının içinde ⇒ Emre'nin
  kuralı da *"boyansın"* diyor.

> 🔴 **EMRE'NİN "300-400 km" TAHMİNİ BU NOKTADA ÇÜRÜDÜ: 186 km.**
> Burada sıradan Voronoi peteği var, kapı yok, kusur yok.

---

## 2. NOKTA 6 — BASRA-BAĞDAT ARASI NİÇİN BOŞ?

**Izgara taraması** (43,5-48,5°D · 29,5-33,5°K · 0,2°, motor kara maskesi):

```
kara hücresi    440
Osmanlı boyalı  302  (%69)
yabancı boyalı   87  (%20)
🔴 BOŞ           51  (%12)   ≈ 21.599 km²
boşluğun kutusu  29,80-31,60°K · 45,60-46,80°D
```

**Boş hücrelerin en yakın noktası — 51'inin 51'i OSMANLI SAHİPLİ:**

| hücre | en yakın nokta | k |
|---|---|---|
| 22 | Semâve | 4 |
| 15 | Kürne | 4 |
| 7 | Basra | 2 |
| 4 | Vâsıt | 4 |
| 3 | Ammâre | 4 |

### Cevap: ÇEKİŞME **DEĞİL**, ve kapı bu boşluğa hiç dokunamaz

- **250 km içinde tek bir SAHİPSİZ nokta yok** (5 ve 6b çevresi tek tek
  tarandı: Semâve · Kürne · Ammâre · Vâsıt · Basra · Dîvâniye · Kût ·
  Kûfe · Fâv hepsi OSMANLI; Havîza · Abâdân · Ahvaz `safevi`).
  ⇒ Kapının doldurabileceği bir **petek indeksi yok**; `_dolgu_kumesi`
  yalnız **sahipsiz NOKTALARIN peteklerini** dağıtır.
- ⇒ **ÇEKİŞME sayacı bu boşluğun sebebi DEĞİL.**

### Ve Emre'nin kendi kuralı burayı "boyansın" diyor

```
Emre'nin eşiğini (4p) KENDİ konumunda GEÇEN boş hücre:  51 / 51  (%100)
ölçülen puanlar: 25-30 puan   (eşik: 4)
```

**ÖLÇÜM:** 21.599 km²'lik boşluğun tamamı, Emre'nin puanlama kuralını
kendi konumunda **6-7 kat** aşıyor.
**ÇIKARIM:** boşluk, Emre'nin kuralına göre **yanlış**. Kural doğru
uygulanmıyor değil — **kural oraya hiç ULAŞMIYOR.**

### Sebep İZOLE EDİLEMEDİ — elenen adaylar

| aday | ölçüm | hüküm |
|---|---|---|
| su / göl | motor kara maskesi **kara** diyor; NE göllerinden Lake Hammar `46,68-47,63°D`, boşluğun **doğusunda** | 🟢 **ELENDİ** |
| çöl tavanı (`COL_TAVAN_KM=300`) | altı örnek noktanın hiçbiri çöl poligonunun içinde **değil** (Syrian Desert / An Nafud boşluğa değmiyor) | 🟢 **ELENDİ** |
| izotrop A1 tavanı | **51 hücrenin 51'inde** en az bir noktanın tavanı yetişiyor (ör. `30,00K 46,60D`: Basra 127 km ≤ 420 · Kürne 138 km ≤ 140) | 🟢 **ELENDİ** |

> 🔴 **KALAN ADAYLAR ÖLÇÜLMEDİ.** Geriye `_tavan_cokgen`in **alan koruyan,
> yöne duyarlı** şekillendirmesi ve/veya **sürtünmeli petek ataması**
> kalıyor. **Bu aşamayı izole etmedim** — `window.PETEKLER` yalnız
> `{"a": ad}` taşıyor, **geometri taşımıyor** (`uret_petek.py:3883`), yani
> yayından "bu toprak kimin peteğindeydi" **sorulamıyor.**

> ⚠️ **BİR ÖLÇÜMÜMÜ ÇÖPE ATTIM.** `PETEKLER`i geometri sanıp "hangi petek
> bu noktayı içeriyor" diye sordum; bütün petekler `None`a düştü ve alet
> **dört noktanın dördü için de** *"hiçbir peteğin içinde değil"* diye
> **sessiz bir yanlış** bastı — boyalı olan 1. nokta için bile. Sonucu
> kullanılmadı. (`§11`: *aletin BASMADIĞI ≠ ölçtüğü*.)

---

## 3. ASIL BULGU — KAPI, TASARLANDIĞI SINIFIN TERSİNİ KAPATIYOR

`arac/olc_ekleyici.py` (kapı YAZILMADAN ÖNCE yazılmış ön ölçüm) boşluğu
üç sınıfa ayırıyor ve başlığında şunu söylüyor:

```
A  sahipli peteğin içi, tavan yetişiyor   → BUGÜN BOYALI
B  A1 tavanının KESTİĞİ toprak            → petek YOK   → KAPI KAPATIR
C  SAHİPSİZ bir noktanın peteği           → petek VAR   → kapı KAPATAMAZ
   (Teymâ · Kuveyt · Vladikavkaz — çare VERİDE, motorda değil)
```

**Uygulanan kapı (`_dolgu_kumesi`) BUNUN TERSİNİ yapıyor:**

```python
out.setdefault(kazananlar[0], []).append(j)   # j = SAHİPSİZ NOKTANIN petek indeksi
```

Kapı yalnız **sahipsiz noktaların petek indekslerini** dağıtıyor —
yani **C sınıfını.** B sınıfı (tavanın kestiği toprak) için ortada
**hiçbir petek indeksi yoktur**, dolayısıyla kapı ona **yapısal olarak
dokunamaz.**

| Emre'nin şikâyeti | sınıf | ne oldu |
|---|---|---|
| Libya çölü **fazla boyalı** | **C** | kapı kapattı — *kapatmaması gereken* |
| Basra-Bağdat **boş kaldı** | **B** | kapı kapatamadı — *kapatması gereken* |

> ***Tek bir terslik, iki şikâyet.***

---

## 4. İKİNCİ KUSUR — PUAN NOKTADA ÖLÇÜLÜYOR, PETEĞE UYGULANIYOR

Kapı puanı **dolgu noktasının konumunda** hesaplıyor, sonra o noktanın
**bütün peteğini** katıyor. Petek, puanın ölçüldüğü yerden yüzlerce km
uzanabiliyor.

**Libya kutusu ölçümü** (14-26°D · 22-30°K · 0,25° ızgara, 742 boyalı
kara hücresi) — her hücrenin **en yakın SAHİPLİ Osmanlı yerleşimine**
uzaklığı:

```
0-200 km    516 hücre  (%70)
200-300 km  130 hücre  (%18)
300-400 km   77 hücre  (%10)
400+  km     19 hücre  (%3)     ← Emre'nin 400 km ufkunun DIŞI
🔴 EN UZAK boyalı hücre: 462 km   (23,38K 18,88D · en yakın el-Katrûn)
```

```
🔴 KENDİ konumunda Emre'nin eşiğini (4p) GEÇMEYEN boyalı hücre:
   134 / 742  (%18)  ≈ 92.744 km²
```

**ÖLÇÜM:** boyalı çölün %18'i, Emre'nin kuralını kendi konumunda
geçmiyor; boya 400 km'lik puanlama ufkunun **62 km dışına** taşıyor.
**ÇIKARIM:** kapının eşiği değil, **eşiğin UYGULANDIĞI YER** yanlış.
Puan bir NOKTA için hesaplanıp bir ALANA uygulanıyor.

*(Karşılaştırma — Irak kutusunda aynı ölçüm: 265 boyalı hücrenin
**0'ı** eşiğin altında, en uzak 261 km. Orada kapı devrede değil, sıradan
petek var, ve sonuç temiz. Kusur kapıya özgü.)*

---

## 5. ÜÇÜNCÜ KUSUR — `devletsiz` YANLIŞ KOVADA

```python
DOLDURULABILIR_BOS = {"devletsiz", "hata"}
#   devletsiz → kaynak "devlet yoktu" diyor        → boş arazi, KATILABİLİR
#   veri-yok  → "arandı, kaynak SUSUYOR"           → KATILMAZ (bilmediğimizi
#               iddia etmek olurdu)
```

**Boyanan noktaların kendi kayıtları ne diyor:**

| kayıt | `neden:` alanı |
|---|---|
| Vâv el-Kebîr | *"…Osmanlı Trablusgarp idaresinin **ulaşamadığı** bir alan."* |
| Tâzirbû | *"…**fiilen devlet denetimi dışındaydı**."* |
| Serîr | *"…tarih boyunca yerleşim ve **devlet denetimi kaydı yok**."* |
| Serîr Kalanşû | *"…**devlet denetimi kaydı yok**."* |
| Rebyâne | *"…tarih boyunca yerleşimsiz ve **devlet denetimi dışında**."* |
| Ramletü Zellâf | *"…**devlet denetimi dışında**."* |

Altısı da `kasitli_bosluk:true` · `bos:"devletsiz"` · `tur:"bolge"`.

> 🔴 **KAPI, ARAŞTIRILMIŞ BİR HÜKMÜ TERSİNE ÇEVİRİYOR.**
> Kayıt *"buraya devlet ulaşmadı"* diyor; kapı bunu *"boş arazi, devlete
> katılabilir"* diye okuyor. Ve kapının kendi gerekçesi `veri-yok` için
> *"bilmediğimizi iddia etmek olurdu"* diyor — ama **`devletsiz`, kaynağın
> KONUŞTUĞU sınıftır.** Kapı **araştırılmışı boyuyor, araştırılmamışı
> koruyor.**

📌 Bu, `CLAUDE.md §11`in **"SAHİPSİZ"İN İKİ CİNSİ** dersinin (8 Ağustos,
NOKTA SİBİRYA) tersine dönmüş hâli. O ders şunu diyordu:

> *"Sınav: kaynağa sor. **Konuşuyorsa** `devletsiz`, **susuyorsa**
> `veri-yok`. … fark yalnız bir sonraki oturum için vardır: Çukotka'ya
> **bir daha bakılmayacak**, Yakut'a **bakılacak**."*

Ayrım *"bir daha bakılmasın"* diye konmuştu; kapı onu **"boyanabilir"**
diye kullanıyor.

**Kapsam:** `bos:"devletsiz"` taşıyan **143 kayıt** var (14 dosya).
Hepsi bugün kapıya uygun. *(Ayrıca `tur:"bolge"` olup `bos:` hiç
yazılmamış kayıtlar da uygun — sayısını ölçmedim.)*

---

## 6. ÖLÇMEDİKLERİM (tahmin etmedim, yazıyorum)

1. **Irak boşluğunu hangi motor aşamasının kestiği.** Üç aday elendi
   (su · çöl tavanı · izotrop A1); geriye yöne duyarlı tavan şekillendirmesi
   ve sürtünmeli petek ataması kaldı. **İzole edilmedi.**
2. **Kapının bütün koşudaki bilançosu.** `kosu_otomatik.log`daki
   *"EKLEYICI KAPI: 411 petek-gün katıldı"* satırları **sahte bir sınav
   betiğine** (`_uzun.py`) ait, gerçek koşuya değil. Gerçek koşunun kapı
   bilançosunu bulamadım — **bulunamadı.**
3. **`tur:"bolge"` + `bos:` yazılmamış** kayıt sayısı.
4. **Trablusgarp'ın 1703'teki fiilî tasarrufunun TDV'den doğrulanması.**
   Yeni kaynak araştırması yapmadım; §5'teki hüküm **projenin kendi
   araştırılmış kayıtlarına** dayanıyor, dışarıdan bir iddiaya değil.
5. **5 numaralı görselin gerçekten hangi koordinatı gösterdiği.** Ölçtüğüm
   koordinat boş çıktı; görselle eşleştirme yapmadım.

---

## 7. HÜKÜM

**Kapının EŞİĞİ (4 puan) ve HALKALARI (200/300/400 = 4/2/1) kusurlu
değil — kusur, kuralın NEREYE ve NEYE uygulandığında.** Üç ayrı kusur
ölçüldü:

**①** Kapı, ön ölçümün *"kapatır"* dediği **B sınıfını** (A1'in kestiği
toprak) yapısal olarak kapatamıyor ve *"kapatamaz"* dediği **C sınıfını**
(sahipsiz noktanın peteği) kapatıyor. Emre'nin iki şikâyeti bu tek
tersliğin iki yüzü: Irak'ta 21.599 km² eşiği %100 geçtiği hâlde boş,
Libya'da 92.744 km² eşiği geçmediği hâlde boyalı.

**②** Puan **noktada** ölçülüp **bütün peteğe** uygulandığı için boya,
400 km'lik puanlama ufkunun dışına taşıyor — ölçülen en uzak boyalı
hücre gerçek bir Osmanlı yerleşiminden **462 km**.

**③** `devletsiz`, `DOLDURULABILIR_BOS` kümesinde **olmamalı**. O etiket
*"kaynak konuştu ve devlet yoktu dedi"* demektir; kapı onu *"boş arazi,
katılabilir"* diye okuyup **araştırılmış bir hükmü tersine çeviriyor** —
üstelik araştırılmamış olanı (`veri-yok`) doğru biçimde koruyarak.
143 kayıt bu durumda.

**Boyama tarihen doğru mu?** Nokta 4 için **evet** (Necef 186 km,
sıradan petek, kusur yok). Nokta 1 ve 2 için **hayır** — ve bunu benim
tarih bilgim değil, **projenin kendi araştırılmış kayıtları** söylüyor:
Vâv el-Kebîr'in künyesi harfiyen *"Osmanlı Trablusgarp idaresinin
ulaşamadığı bir alan"* diyor, ve motor tam orayı Osmanlı boyuyor.

---

*Ölçen: ÇÖL oturumu · 20 Ağustos 2026 · yalnız okudu, hiçbir veri/motor
dosyasına yazmadı.*

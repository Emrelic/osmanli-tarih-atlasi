# BULGU — OK129 · Amerika hayalet devlet taraması

**Oturum:** OPUS HAZIR KITA 129 · **Şartname:** `oturumlar/DAGITIM-0902-AKSAM.md` §⑤
**Tarih:** 2 Eylül 2026 · **Evren:** `data/yerlesimler_amerika.js` + `data/yerlesimler_amerika2.js`
**Yetki:** yalnız ölçüm. Hiçbir veri dosyasına yazılmadı, hiçbir nokta eklenmedi.

---

## 0. ÖNCE HÜKÜM — devraldığım öncül ÇÜRÜDÜ (kısmen)

```
DEVRALDIM (M-2164, AMERIKA-0902):
  "data/yerlesimler_amerika.js: Compostela kaydı s:[{f:1531-01-01,…,
   d:'yeni-ispanya'}] diyor. O künye 1535-04-17'de başlıyor
   ⇒ ~4 yıl 3 ay HAYALET."

ÖLÇÜM:  sayı DOĞRU (4,3 yıl, birebir).
        SINIF YANLIŞ. Bu kayıt `denetle.py`nin kendi taksonomisinde
        **HAYALET DEĞİL** — `Değişmez 4d` kovasındadır.
```

`denetle.py:degismez4` dört dal ayırıyor ve ikisi ayrı kova:

| dal | soru | kova | bugünkü tavan |
|---|---|---|---|
| ① | dönem BAŞI künye sonundan **sonra** mı | **hayalet** (`4`) | 8 |
| ② | dönem SONU künye başından **önce** mi | **hayalet** (`4`) | 8 |
| ③ | dönem SONU künye sonunu **aşıyor** mu | `4c` | 280 |
| ④ | dönem BAŞI künye başından **önce** mi | `4d` | 468 |

Compostela ④'tür. Farkı akademik değil **pratik**: `4` bugün **kırmızı**
(12 > 8), `4d` bugün **yeşil** (432 ≤ 468). Yani bu kayıt zeminin
kırmızısına **katkı vermiyor** — düzeltilmesi `4`ü indirmez.

📌 `CLAUDE.md §11`: *"ölçüm doğru, çıkarım yanlış"*. AMERIKA-0902 gerçek
bir kusur buldu ve sayısı doğruydu; yalnız **kovası** başkaydı.

---

## 1. NE ÖLÇTÜM

```
evren            135 nokta  (amerika.js 133 · amerika2.js 2)
                 428 `s:` dönemi · 53 ayrı kimlik
① HAYALET         0
② HAYALET         0
③ 4c   (aşan)     0
④ 4d   (önce)    21      ← BULGUNUN TAMAMI BURADA
   künyesiz       0      (53 kimliğin 53'ü de `devletler.js`te VAR)
```

**Kapsam tamdır, ve bu ölçüldü:** iki dosyadaki alan envanteri —
`ad·tur·lat·lon·g·k·kur·s·bit·kasitli_bosluk·bos·neden·baskent`.
**`d:` yok · `v:` yok · `isg:` yok.** Yani `s:` bu dosyalardaki **tek**
sahiplik ekseni; şartnamenin `s:`le sınırlı olması bir örneklem değil,
evrenin tamamı. (135 noktanın 133'ünde `s:` var, 2'sinde yok; 15'i
`kasitli_bosluk`.)

### ÖLÇÜM ile ÇIKARIM ayrı satırda
- **Ölçüm:** hayalet (`4`) ve aşan (`4c`) dallarında bu iki dosyadan **sıfır** kayıt var.
- **Çıkarım:** zeminin kırmızı `4` (12>8) ve `4c` (286>280) satırlarının kökeni
  **bu iki dosyada değildir.** OK127 ve OK128 oralarda aramasın.

---

## 2. YÖNTEM VE ONUN SINAVI (`C13` üç ayak)

Ölçüt **uydurulmadı**: `arac/denetle.py:degismez4`ten birebir alındı
(`HAYALET_TOLERANS_GUN = 400` · `ATLAS_BASI 1281-01-01` ·
`ATLAS_SONU 1923-10-29` · ①② `continue` ediyor, ③④ etmiyor).
Veri kendi dilinde okundu (`node` eval) — **regex ayrıştırıcı yazılmadı.**

```
① GEÇME     temiz kopya → 135 / 428 / 0 / 0 / 21 / 0
            üretim koşusuyla BİREBİR aynı                        ✓
② ATEŞLEME  beş dalın BEŞİ de AYRI AYRI zorlandı ve BEŞİ DE ÖTTÜ:
            ①78,4 yıl · ②185,3 · ③78,4 · ④135,3 · künyesiz 1     ✓
③ GİRDİ     sahte kayıtlar BELLEĞE değil DOSYAYA yazıldı ve alet
            dosyadan okudu — `_bk_nobetci` vakasının kapağı        ✓
```

🔴 `②` şart oldu, çünkü aletin cevabı **sıfır**dı. Sıfır, bu projede en
tehlikeli cevaptır: sessiz bir ayrıştırıcı da sıfır basar.

### Ve bağımsız çapraz doğrulama
`py arac/denetle.py --ayrinti` (69 dosyalık TAM evren) koşuldu ve `4d`
listesi satır satır karşılaştırıldı. **21'in 21'i orada, aynı yıl
değerleriyle.** Fark yalnız `ispanyol-peru` özetinde: denetim **13 dönem**
diyor, ben **11** ölçtüm.

```
FARKIN SEBEBİ ÖLÇÜLDÜ, VARSAYILMADI:
  Panamá (Panama City)  −23,3 yıl  |  Guayaquil (Santiago de Guayaquil)  −4,9 yıl
  ikisi de  data/yerlesimler_0ee15e.js  içinde — BENİM EVRENİMDE DEĞİL
```
⇒ 11 ⊂ 13. Alet doğru; evren dar, ve darlığı **şartnamenin kendisi**.

---

## 3. BULGU — 21 kaydın TAMAMI, ve İKİ AİLE

Yıl = dönemin künye doğumundan **kaç yıl önce** başladığı.

### AİLE A — İMPARATORLUK ÖNCESİ BAŞ (4 kayıt, 28–157 yıl)

| nokta | kimlik | dönem | künye `f` | yıl |
|---|---|---|---|---|
| Cusco (Qosqo) | `inka-imparatorlugu` | 1281-01-01→1438-01-01 | 1438-01-01 | **157,0** |
| Texcoco | `aztek-imparatorlugu` | 1281-01-01→1428-01-01 | 1428-01-01 | **147,0** |
| Tenochtitlan (Mexico City) | `aztek-imparatorlugu` | 1325-01-01→1428-01-01 | 1428-01-01 | **103,0** |
| Tlacopan (Tacuba) | `aztek-imparatorlugu` | 1400-01-01→1428-01-01 | 1428-01-01 | 28,0 |

🔴 **Ve asıl bulgu tabloda değil, ZİNCİRDE.** Dördünün de dönemi
imparatorluğun kuruluş gününde **kasten bölünmüş** — ama **iki yarı da
aynı kimliği taşıyor:**

```
Texcoco    1281-01-01 → 1428-01-01   aztek-imparatorlugu   ← künye YOK bu tarihte
           1428-01-01 → 1521-08-13   aztek-imparatorlugu
           1521-08-13 → 1535-04-17   ispanya
           1535-04-17 → 1821-09-27   yeni-ispanya
           1821-09-27 → 1923-10-29   meksika
```
⇒ Yazan **sınırı biliyordu** (tam 1428-01-01'de böldü), yalnız ilk yarıya
**başka bir kimlik yazmadı.** Kusur bilgi eksikliği değil, **bir adım
eksikliği.**

### AİLE B — FETİH ÇAĞI BAŞI, GENEL VALİLİKTEN ÖNCE (17 kayıt, 1,8–14 yıl)

| kimlik | künye `f` | bu dosyalarda dönem | 4d ihlali |
|---|---|---|---|
| `ispanyol-peru` | 1542-11-20 | 28 | **11** |
| `yeni-ispanya` | 1535-04-17 | 41 | **5** |
| `portekiz-brezilyasi` | 1549-01-01 | 7 | **1** |

`ispanyol-peru` (11): Cartagena de Indias 9,5 · Trujillo (Peru) 8,1 ·
Quito 8,0 · Lima 7,8 · Popayán 5,9 · Bacatá (Bogotá) 4,3 · Sucre 4,0 ·
Huamanga (Ayacucho) 3,9 *(amerika2.js)* · Hunza (Tunja) 3,3 ·
Arequipa 2,3 · Santiago (Şili) 1,8
`yeni-ispanya` (5): Colima 11,7 · San Cristóbal de las Casas 7,0 ·
Antequera (Oaxaca) 6,3 · Compostela 4,3 · Puebla de los Ángeles 4,0
`portekiz-brezilyasi` (1): Olinda 14,0

**Desen tek cümle:** şehir **fethedildiği/kurulduğu gün** genel valilik
kimliğiyle yazılmış; oysa genel valilik **yıllar sonra** kuruluyor. Arada
o yer İspanyol/Portekiz **egemenliğindeydi ama başka idarî biçimde**
(fetih dönemi · audiencia · kaptanlık).

---

## 4. 🟢 ÇARE ZATEN BU DOSYADA — 32 KEZ UYGULANMIŞ

Bir çare **önerilmedi**, var olanı **ölçüldü**: aynı iki dosyada
`ispanya` / `portekiz` **köprü dönemi** taşıyan **32 kayıt** var.

```
Tenochtitlan   ispanya 1521-08-13 → 1535-04-17   sonra  yeni-ispanya
Cholula        ispanya 1519-10-18 → 1535-04-17   sonra  yeni-ispanya
Tzintzuntzan   ispanya 1530-02-14 → 1535-04-17   sonra  yeni-ispanya
… (32 kayıt)
```
Ve `ispanya` künyesi **1479-01-20 → 1923-10-29**, `portekiz` **1139-07-25
→ 1923-10-29** — ikisi de bütün boşluğu **fazlasıyla** kapsıyor.
Bu dosyalarda `ispanya` **67 dönemde** zaten kullanılıyor.

⇒ **AİLE B'nin 17'si, dosyanın kendi yerleşik desenini atlamış 17 kayıttır.**
Reçete: baş dönemi ikiye böl —
`ispanya|portekiz  <kuruluş> → <künye f>` + `<genel valilik>  <künye f> → <mevcut t>`.
Yeni künye **gerekmiyor**, tarih **uydurulmuyor**, `Değişmez 1`de delik
**doğmuyor** (dönem kesintisiz).

### AİLE A'nın üçü de aynı şekilde kapalı — ve künye HAZIR
`nahua-sehir-devletleri` (**1281-01-01 → 1521-08-13**) bu dosyada
**yedi kez** tam bu iş için kullanılıyor: Tlaxcala · Cholula · Cempoala ·
Huexotzinco · Xochimilco · Chalco · Tepeaca.
⇒ Texcoco · Tenochtitlan · Tlacopan'ın **ilk yarısının** `d:`si
`nahua-sehir-devletleri` olur. Mekanik, kararsız, tarih kararı içermez.

### 🔴 GERİYE TEK BİR KARAR KALIYOR — CUSCO
`Cusco 1281→1438` için hazır künye **YOK**. Aday yollar:
```
(a) yeni künye  `kusko-kralligi` 1197/1281 → 1438
    📌 emsali VAR ve ölçüldü: chimu-krallik (1281→1470) ·
       colla-krallik (1281→1450) · lupaqa-krallik (1281→1450)
       — proje İnka öncesi And künyesi açmayı zaten yapmış
(b) dokunma, "kabul edilmiş borç" diye kaydet (4d yeşil, acil değil)
```
**Ben karar VERMİYORUM** — bu bir tarih kararıdır ve şartnamem
*"nokta yazma, ölç"* diyor. `(a)`ya eğilimliyim; **eğilim, karar değildir.**

---

## 5. NEYİ BULAMADIM / ÖLÇMEDİM

- **Kaynak taraması YAPILMADI.** 21 kaydın kuruluş/fetih günlerinin TDV ya
  da akademik dayanağını **ölçmedim**. Reçete bu tarihlere *dokunmuyor*
  (yalnız kimliği bölüyor), ama tarihlerin kendisi **doğrulanmamıştır**.
- **`ispanya`nın 1479 öncesi ölçülmedi.** Aile B'nin en erkeni 1523; sorun
  yok. Ama `ispanya` künyesi 1479'da başlıyor ve bunu **sınamadım**.
- **Cusco dışındaki İnka öncesi noktalar taranmadı** — yalnız `4d`ye düşen
  21 kayda baktım; düşmeyen ama tarihen tartışmalı olabilecek kayıtlar
  **ölçülmedi**.
- **`0ee15e` dosyası taranmadı** — evrenim dışı. Yalnız `--ayrinti`
  çıktısından iki kaydı (Panamá · Guayaquil) adıyla biliyorum; o dosyanın
  **tamamında bu sınıfın kaç kayıt olduğunu ÖLÇMEDİM.**
- **`yerlesimler_amerika3.js`e dokunulmadı** (AMERIKA-0902'nin canlı dosyası).

### ⚪ YAN BULGU — ölçüldü, BUGÜN ZARARSIZ, `arac/` benim değil
`denetle.py:degismez4`teki iki kapı **metin karşılaştırması** yapıyor
(`kt < ATLAS_SONU`, `kf > ATLAS_BASI`). Üç haneli yıl taşıyan bir künye
(`fransa` `f:"987-01-01"`) `"987-01-01" > "1281-01-01"` denkleminde
**TRUE** dönüyor ⇒ atlas öncesi künye olarak elenmesi gerekirken `4d`
dalına giriyor.
**Ölçtüm: bugün yanlış pozitif ÜRETMİYOR** — o künyeler için `g4` negatif
çıkıyor, eşiği geçmiyor. **Kusur latent.** Bildiriyorum, düzeltmiyorum
(koşu canlı, `arac/*.py` motor parmak izi).

---

## 6. NE İSTİYORUM

1. **AİLE B (17) + AİLE A'nın üçü (20 kayıt) mekanik ve kararsızdır.**
   Bunları uygulayacak kolu **kime vereceğini** söyle. Dosya
   `yerlesimler_amerika.js`/`_amerika2.js` benim değil; istersen ben
   uygularım, istersen sahibine gider.
2. **Cusco (1) senin/Emre'nin kararı** — `kusko-kralligi` künyesi açılsın mı,
   yoksa kabul edilmiş borç olarak mı kalsın?
3. **`0ee15e` dosyasında aynı sınıf var** (en az 2 kayıt, ölçülmedi).
   Ayrı bir kalem açılmalı mı?

**Durum:** ✅ boştayım — şartnamemin ⑤ bölümü bitti.

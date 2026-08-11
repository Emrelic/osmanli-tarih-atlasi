# MOTOR ENKLAV — ilerleme

## ADIM 1 — ÖLÇÜM (11 Ağustos 2026) · `uret_petek.py`ye HENÜZ DOKUNULMADI

Taban: bugünkü veri (**2308 nokta**) + yayındaki `data/petek_govde.js`
(**2308 gövde — taban AYRIŞMIYOR**, C14 sınavı geçti) + `veri-kaynak/
motor_kara.geojson`. **Koşusuz**, MOTOR DENİZAŞIRI'nın yöntemi.

---

### ① ALTYAPI ZATEN VAR MI? — kısmen VAR, ama **kapısı kapalı**

| kavram | yer | durum |
|---|---|---|
| `_ENKLAV` (:874) | yetim yüz muafiyeti | **VAR** — 18 nokta (presidiolar). Başka iş. |
| `ADA KURALI` (:997) | hücre kendi kara bileşeninde | VAR |
| `KARA-KISITLI SAHİPLİK` (:1085) | Dijkstra | VAR |
| `BİLEŞEN KİLİDİ` (:1284) | dün eklendi | VAR, koşulmadı |
| **`_kusatilmis()` (:2015)** | **kuşatılmışlık devri** | 🔴 **TAM BU İŞ İÇİN KURULMUŞ** |

`_kusatilmis` zaten: `kasitli_bosluk`u muaf tutuyor · kara komşuluğunu
ölçüyor (kıyı paydadan düşük) · devri `petek_epok`e yaptırıyor · her koşuda
adıyla raporluyor.

🔴 **Ama satır 2027 bir KAPIDIR:**
```python
if not ((y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g)):
    continue
```
⇒ Kural **yalnız varlık epoku DIŞINDAKİ** (henüz kurulmamış / yok olmuş)
noktalara bakıyor. **VAR OLAN ama o tarihte sahibi yazılmamış** nokta —
yani Emre'nin tarif ettiği adacığın ta kendisi — **hiç sorulmuyor.**

---

### ② ÖLÇÜM A — "var ama sahipsiz" kümesi (veri düzeyi)

| gün | sahipli | epok dışı | VAR+SAHİPSİZ | bunun `kasitli_bosluk` | **bayraksız** |
|---|---|---|---|---|---|
| 1300 | 1932 | 199 | 177 | 122 | **55** |
| 1500 | 1978 | 153 | 177 | 122 | **55** |
| 1700 | 2099 | 77 | 132 | 77 | **55** |
| 1900 | 2230 | 10 | 68 | 23 | **45** |

**ÖLÇTÜĞÜM:** bayraksız 55 kaydın **55'i de** çöl/ıssız dolgu — Sahra batısı ·
Rub'ul Hâlî · Karakum · Üstyurt · Hoggar · Tibesti · Yeni Gine iç yaylaları ·
Ogaden · Timbuktu · Ndjamena · Agadez · Darfur · Necid…
**BUNDAN ÇIKARDIĞIM:** şartnamenin `kasitli_bosluk` şartı **yetmez** — alan
138 kayıtta yazılı, ama fiilen kasıtlı olan ≥193. (`CLAUDE.md §11`in
*"cinsi yazılmamış 97 nokta"* borcunun aynı ailesi.)

---

### ③ ÖLÇÜM F — GERÇEK DELİK ENVANTERİ (yayındaki geometri)

Ölçüt, şartnamenin cümlesinin birebir karşılığı: **delik = bir sahibin
gövdesinin interior ring'i, KARA ile kesilmiş, boyalı olan her şey
çıkarılmış.** Parametresiz — eşik yok, oran yok.

| gün | ham halka km² | **SU (elendi)** | **GERÇEK DELİK** | adet | M1 | M2 | M3 | 🔒KB | OSMANLI |
|---|---|---|---|---|---|---|---|---|---|
| 1300 | 258.611 | 164.697 | **93.915** | 8 | 7 · 93.797 | 1 · 118 | 0 | **0** | **0** |
| 1400 | 231.735 | 162.421 | **69.314** | 6 | 5 · 69.196 | 1 · 118 | 0 | **0** | **0** |
| 1500 | 270.822 | 166.092 | **104.730** | 7 | 6 · 104.612 | 1 · 118 | 0 | **0** | **0** |
| 1600 | 205.589 | 162.667 | **42.922** | 5 | 4 · 42.804 | 1 · 118 | 0 | **0** | **0** |
| 1700 | 426.972 | 272.840 | **154.133** | 5 | 4 · 154.015 | 1 · 118 | 0 | **0** | **0** |
| 1800 | 471.807 | 317.516 | **154.291** | 6 | 4 · 154.015 | 2 · 276 | 0 | **0** | **0** |
| 1900 | 597.258 | 591.748 | **5.510** | 3 | 1 · 5.234 | 2 · 276 | 0 | **0** | **0** |

```
M1  delikte SAHİPSİZ HÜCRE var   → hücre var, sahip yazılmamış
M2  delikte HİÇ NOKTA yok        → tavanın kestiği toprak
M3  nokta var ve hepsi SAHİPLİ   → gerçek siyasî enklav, DOKUNULMAZ
🔒  içinde kasitli_bosluk noktası var → DOKUNULMAZ
```

**Adıyla, deliklerin tamamı:**
```
120.414 km²  Baotou              qing-hanedani      1700-1800
 43.294      Bangalor            vijayanagara       1500
 18.555      Ogaden              adal               1300-1500
 18.271      Haydarâbâd (Dekken) behmeni            1400
 14.760      Kuala Lumpur        malay-sultanlıkları 1500-1800
 13.607      Somali çölü         somali             1600-1800
 13.566      Bâne · Serdeşt      akkoyunlu          1500
 12.376      Phnom Penh · Oudong angkor-kmer/kamboç 1400-1700
  5.234      Darfur              tunciler / darfur  1300-1900
    276      (noktasız, tavan)   rusya              1800-1900
```

---

### ④ KENDİ ÖLÇÜMÜMÜN İKİ KUSURU — ikisi de düzeltildi, ikisi de kayıtta

🔴 **Kusur 1 — gövde başına delik saydım, oysa soru BOYANMAMIŞ toprak.**
Bir devletin gövdesindeki delik başka bir devletçe doldurulmuş olabilir
(Savonlinna · Nancy · Ecmîr · Bangalor 1900) — ekranda delik YOKTUR,
**gerçek siyasî enklav** vardır. Düzeltilince M3 → **0**.

🔴 **Kusur 2 — halkaları KARA maskesiyle KESMEDİM.** Gövde KARA'ya kırpılı
olduğu için her **GÖL** bir interior ring gibi görünüyor:
```
ölçüm E dedi:  M2 (tavan deliği) 161-228 adet · 160-591 bin km²
ölçüm F dedi:  M2                  1-2 adet ·      118-276 km²
fark = SU:  162.421 … 591.748 km²  (Van · Saimaa · Aral · Baykal…)
```
1700'de *"OSMANLI 3.486 km² delik @ 38,65K 42,96D"* diye raporlayacaktım —
**o Van Gölü'dür.** Doldursaydım motor gölü boyayacaktı.
📌 `§11` *"ölçüm doğru, çıkarım yanlış"* değil; bu **ölçümün evreni yanlıştı.**

---

### ⑤ ÖLÇÜMÜMÜN SINIRLARI — açıkça

- **7 kesit, yıl ortası.** Motor ~450+ dönem üretiyor; kırılma günlerinde
  doğan kısa ömürlü delikler bu örneklemde **görünmez.** (`§11` NOKTA
  SİBİRYA: *ölçüm doğru, evren dar.*)
- Eşik **100 km²**; altını **ölçmedim**.
- Geometri **r1140 yayınından**; bugünkü veri o koşudan sonra değişmiş olabilir.

---

---

# 🔴 ADIM 2 — İLK İŞTE ŞARTNAME ÇÜRÜDÜ: **(a) MOTORDA ZATEN VAR**

ADIM 1 onaylandı, ADIM 2'ye geçildi, ve uygulanacak yeri ararken çıktı.

## ⑥ BULGU — `delikleri_doldur()`

```python
uret_petek.py:744
def delikleri_doldur(g):
    """Kuşatılmış boşluk bırakmaz: çevresi ele geçmiş alan
       (dağ bloğu, ova) da hâkimiyet altındadır."""
    return unary_union([Polygon(p.exterior) for p in ps]).buffer(0)

:2654  yabancı gövde   g = delikleri_doldur(kapat(g)) ; g.intersection(KARA)
:2757  Osmanlı gövde   delikleri_doldur(kapat(...)).intersection(KARA)
```

Motor **her gövdenin bütün interior ring'lerini kayıtsız şartsız dolduruyor**,
sonra KARA ile kesiyor — göller böylece geri açılıyor. Şartnamenin (a)
kuralının **daha güçlü hâli**, ve **iki yıl önce yazılmış.**

## ⑦ ÖLÇÜM — yayındaki GERÇEK çıktı (`donemler.js` · `devletler_harita.js`)

| gün | OSM delik | **OSM KARA km²** | OSM SU | yab. delik | **yab. KARA km²** |
|---|---|---|---|---|---|
| 1300 | 0 | **0** | 0 | 153 | 10.899 |
| 1400 | 5 | **6** | 3.305 | 148 | 10.649 |
| 1500 | 6 | **7** | 3.685 | 148 | 10.871 |
| 1600 | 14 | **21** | 12.251 | 151 | 10.863 |
| 1700 | 14 | **21** | 12.251 | 171 | 11.947 |
| 1800 | 13 | **20** | 11.910 | 182 | 10.017 |
| 1900 | 12 | **19** | 11.530 | 198 | 13.782 |

**ÖLÇTÜĞÜM:** Osmanlı gövdesinde kalan kara deliği **19-21 km²**; gerisi göl.
Yabancıdaki 10-14 bin km²'nin en büyükleri Saimaa 2.461 · IJsselmeer 1.012 ·
Finlandiya göl bölgesi 633 — hepsi **göl yakası artığı.**
**BUNDAN ÇIKARDIĞIM:** kapalı kara adacığı **yayında zaten yok.** ③'teki
3-8 delik **benim kendi birleşimimde** vardı; motor onları kapatıyor.
⇒ *Ölçüm doğruydu, evreni yanlıştı — motorun çıktısını değil kendi ara
ürünümü ölçmüştüm.*

## ⑧ GERİYE KALAN: şartnamenin ÜÇÜNCÜ şartı kodda YOK

| şartname şartı | durum |
|---|---|
| "iki farklı sahip değiyorsa dokunma" | ✅ yapısal — interior ring tanım gereği tek gövdenin içinde |
| "denizden atlamaz, kara bileşeninde" | ✅ `.intersection(KARA)` |
| **"`kasitli_bosluk`a dokunma"** | 🔴 **YOK — hiçbir şey sorulmuyor** |

**ÖLÇTÜĞÜM** (bayraklı + o gün sahipsiz + varlık epoku içi):
```
aday       122 · 122 · 122 · 115 · 77 · 74 · 23
BOYANAN      0 ·   0 ·   0 ·   0 ·  0 ·  0 ·  0     ← 7 kesitin 7'sinde
```
**BUNDAN ÇIKARDIĞIM:** eksik şart **bugün zarar vermiyor** — kasten boş alan
delik değil, açık bölge. **Yapısal açık, canlı kusur değil.** Ve **veriye
bağlı bir güvence:** yeni nokta eklendikçe bir vaha kuşatılabilir ve
**sessizce boyanır.**

**Canlı kusur BAYRAKSIZ kümede, 2-3 nokta:** `Darfur` · `Somali çölü` ·
`Ogaden` · `Libya iç çölü (Sirte ardı)` delik olarak doldurulmuş.
⇒ **Kusur motorda değil VERİDE** — dün bildirilen 55 bayraksız kaydın sonucu.

## ⑨ KENDİ ÖLÇÜMÜMÜN ÜÇÜNCÜ KUSURU — raporlamadan önce yakalandı

İlk sürüm *"110 `kasitli_bosluk` noktası boyanıyor"* dedi. **Yanlıştı:** bir
nokta hem bayrak taşıyıp hem o tarihte **sahipli** olabilir (Kuveyt
`kur:1716` → 1800'de sahipli · Doha · Matsumae · Cetinje). Onların boyanması
**doğru.** Evren daraltılınca **110 → 0.**

📌 Bugün **üçüncü kez** aynı sınıf, ve üçü de **aynı refleksten**:
```
① gövde başına delik saydım        → başkasınca doldurulmuş delikler sahte aday
② halkaları KARA ile kesmedim      → göller delik göründü (Van Gölü!)
③ bayraklı ama SAHİPLİ noktaları saydım → 110 sahte "boyanmış"
```
Üçü de rapordan önce yakalandı, ama **ölçütü kurarken evreni yazmak** —
*"bu sayının içine ne giriyor, ne girmiyor"* — alışkanlık olmalıydı.

---

# ⑩ UYGULANDI — `kasitli_bosluk` muafiyeti (koordinatör onayı: seçenek ①)

```
arac/uret_petek.py   +83 / -3 satır   ·   py_compile TEMİZ
0x00 = 0 · 0x08 = 0 · 0x1b = 0 · yalnız-CR = 0
```

`delikleri_doldur(g, muaf=True)` — içinde `kasitli_bosluk` noktası bulunan
interior ring **doldurulmaz**, ve atlanan halka **adıyla raporlanır**.
Muafiyet **halka bazlıdır, gövde bazlı değil**: aynı gövdenin bir deliği muaf
tutulurken ötekiler dolmaya devam eder.

🔴 **Üçüncü çağrı yerini ilk taramada KAÇIRMIŞTIM.** `grep` ile değil **gözle**
saymıştım ve koordinatöre *"iki çağrı yeri var"* diye yazdım. Gerçek üç:
```
:2511  bölge (k1/k2 idarî) sınırı  → data/bolgeler.js     ← KAÇIRDIĞIM
:2717  yabancı devlet gövdesi      → data/devletler_harita.js
:2820  Osmanlı doğrudan + tâbi     → data/donemler.js
```
Muafiyet üçüne de uygulanıyor ve doğrusu bu: kasten boş bırakılmış bir çöl
cebi, bir sancağın sınırı içinde de yutulmamalı.

## ⑪ C13 — İKİ YÖNDE SINANDI, 10/10

**Yöntem:** fonksiyon ve yanındaki `_KB_*` kurulumu `uret_petek.py`den **`ast`
ile** çıkarılıp olduğu gibi `exec` edildi. Kendi kopyamı yazsaydım **kendi
kopyamı** sınamış olurdum (`§11`: *"kendi yazdığın ayrıştırıcı, var olan bir
ayrıştırıcıdan her zaman kötüdür"*).

```
GEÇME YOLU   motorun KENDİ yazdığı 150.373 gövde parçası, DELİĞİ OLAN 2.446
             |muaf=True − eski| = 0.00e+00  ⇒ davranış BİREBİR korunuyor
             + ayrı sınav: "sınanacak delikli gövde VAR" (boş küme üzerinde
               geçen test GEÇMİŞ SAYILMAZ)
ATEŞLEME     gerçek veride 0 halka ⇒ SAHTE GİRDİYLE zorlandı
   (A) KB noktalı halka KORUNDU                 alan 99  ✓
   (A) atlama ADIYLA raporlandı  {'Vladikavkaz': 1}      ✓
   (B) KB noktasız halka DOLDU                  alan 100 ✓
   (B) rapor boş kaldı                                   ✓
   (C) aynı gövdede ikisi birden → biri korundu biri doldu  alan 99 ✓
   (D) muaf=False → eski davranış, ikisi de doldu alan 100 ✓
   (D) muaf=False rapor üretmez                          ✓
   (E) MultiPolygon gövde                       alan 103 ✓
```
🔴 **SINANMAYAN, açıkça:** koşu içindeki `if _KB_MUAF:` **rapor dalının metni**
gerçek koşuda ateşlenmeyecek (0 halka). Yalnız `else` dalı basılacak.

### 🔴 VE `C14` ATEŞLEDİ — taban oturum ORTASINDA kaydı

Testin **ilk sürümü düştü.** NOKTA HALKA-1 çalışırken `yerlesimler_ek23.js`i
bağladı: **2308 → 2312 nokta, 36 → 37 dosya.**

```
ilk sürüm    petek_govde.js hücrelerini YERLER ile İNDEKS ile eşliyordu
sonuç        IndexError — GÜRÜLTÜLÜ düştü
```
⚠️ **Ama gürültülü düşmesi TESADÜF:** sayılar farklı olduğu için patladı.
**Sayı aynı kalıp sıra değişseydi SESSİZCE yanlış eşleşirdi** — ve
`yerlesimler_ek23.js` listenin **sonuna değil 26. sırasına** eklendi, yani
ondan sonraki bütün indeksler kaydı. Bu, teorik bir risk değil: **bugün oldu.**

🟢 **Çare indeksi tamir etmek değil, İNDEKSE HİÇ GÜVENMEMEK oldu.** Geçme
yolu artık motorun kendi yazdığı **kapalı gövdeler** üzerinde koşuyor
(`donemler.js` + `devletler_harita.js`) — onlar kendi kendine yeten
poligonlar, `YERLER` ile hiçbir eşleme gerektirmiyorlar.

📌 **Ve bu bir uyarıdır:** `petek_govde.js` başlığı *"Sıra PETEKLER ile
AYNIDIR"* diyor. Bu bir **KOŞU İÇİ** garantidir, **koşular arası değil.**
Yayındaki geometriyi bugünkü veriyle indeksten eşleyen **her alet** risk
altında. `kasitli_bosluk` sayısı 138 → 138 kaldı, yani muafiyetin nöbetçi
kümesi etkilenmedi; ölçüm sayılarım 2308 tabanında geçerli.

Öngörü: `denetim/kosu-ongoru-MOTOR-ENKLAV.json` — **7 kalem**, mazeretleri
yazılı, ve **`_ATTRIBUTION` bloğu**: koşu bileşen kilidini ve NOKTA HALKA-1'in
noktalarını da taşıyor; *"benim kalemim TEMİZ BİR SIFIR olmalı"*.

---

# ⑫ VERİ OTURUMUNA — bayraksız ama fiilen kasıtlı, ve DOLDURULMUŞ

Koordinatörün istediği liste. Muafiyet bunları **kurtarmaz** çünkü
`kasitli_bosluk` bayrağı **taşımıyorlar** — kusur motorda değil veride.

**A · Delik olarak DOLDURULMUŞ (ölçüldü, yayındaki çıktıda boyanıyor):**
| ad | koordinat | hangi kesitlerde | hüküm önerim |
|---|---|---|---|
| `Darfur` | 13,50K 24,00D | 1300-1900, **yedisinde de** | doldurma muhtemelen **DOĞRU** — Darfur Sultanlığı orada; ama nokta sahipsiz, yani asıl eksik **`s:` dönemi** |
| `Somali çölü` | 8,00K 46,50D | 1300-1900, **yedisinde de** | incelensin |
| `Ogaden` | 7,20K 44,00D | 1300 · 1400 · 1500 | Adal Sultanlığı Ogaden'i kapsıyordu — doldurma savunulabilir |
| `Libya iç çölü (Sirte ardı)` | 29,50K 21,50D | 1600 · 1700 · 1900 | 🔴 muhtemelen **YANLIŞ** — kasten boş olmalı |

**B · Bayraksız ama fiilen kasıtlı, 55 kayıt** (bugün delik değiller, zarar
vermiyorlar; yarın kuşatılabilirler). 7/7 kesitte sahipsiz olanlar:
```
Sahra batısı · Hoggar · Tibesti · Tâsîlî n'Accer · Tâzirbû · Rebyâne ·
Serîr · Serîr Kalanşû · Sirte iç çölü · Libya iç çölü (Sirte ardı) ·
İdehân Murzuk · İdehân Ubârî · Ramletü Murzuk · Ramletü Zellâf ·
Vâdî Tanezzûft · Vâv el-Kebîr · Fizan güneyi · Ma'tan es-Sarra ·
Kufra (el-Cûf) · Gilf el-Kebîr · Selîme (Nûbe çölü batısı) · Nûbe çölü ·
Batı çölü (Mısır) · Ramletü'l-kübrâ (Büyük Kum Denizi) ·
Rub'ul Hâlî doğusu · Rub'ul Hâlî kuzeyi · Hamâd (Bâdiyetü'ş-Şâm içi) ·
Vâdî Sirhân · Hadramut · Ogaden · Somali çölü · Darfur ·
Karakum · Uzboy · Üstyurt platosu (batı) · Üstyurt platosu (doğu) ·
Yeni Gine İç Kesimi (Güney — Fly) · (Kuzey — Sepik) ·
Yeni Gine İç Yaylaları (Batı — Baliem) · (Merkez — Mount Hagen) ·
Agadez · Timbuktu · Ndjamena · Tamanrasset
```
Ve **dönemli olanlar** (5-6/7 kesit): `Hâil` · `Manama (Bahreyn)` · `Mukalla` ·
`Buraydâ (Kasîm)` · `Dir'iye (Necid)` · `Necid içi` · `Nefud çölü` · `Riyad` ·
`Uneyze` · `Şakrâ`.

⚠️ **Ve `§11`in cinsi:** bayrak eksik olsa bile `denetle.py` `kasitli_bosluk`
alanını **hiç okumuyor** (koordinatörün bildirdiği vaka). Bayrağı yazmak ile
makinenin sorabilmesi **iki ayrı iş**.

---

# ⑬ (b) HAZIRLIK NOTU — PLAN, prototip DEĞİL

⚠️ (b) Emre'nin eşik kararına bağlı, karar gelmedi. **Hiçbir şey uygulanmadı.**

## ① (b) hangi kodda yaşar

```
:561-630   A1 YARIÇAP TAVANI          bütün coğrafya
:595       TAVAN_KM = {1:700, 2:420, 3:280, 4:140, 0:280}   dict[int,int], km
:599       def _tavan_daire(p, r_km, lat)   ← 🔴 YUVARLAĞI ÜRETEN SATIR
           enlem düzeltmeli ELİPS: buffer(1.0, quad_segs=24) sonra
           xfact = r/(111,32·cos φ) · yfact = r/111,32
:605       TAVAN_DAIRE = [...]        nokta başına bir elips, BİR KEZ kurulur
uygulama   kıyı kesimiyle AYNI ADIMDA: kara_kesik.intersection(TAVAN_DAIRE[i])

:1528-…    ÇÖL TAVANI                 yalnız çöl poligonu içinde
:1549      COL_TAVAN_KM = 300.0                float, km
:1550      COL_SU_MUAF_KM = 30.0               float, km
:1573      COL_MUAF_YERLESIM_BAZLI = False     bool — ölçülerek (A) seçildi
```

📌 **Emre'nin gördüğü yuvarlak `_tavan_daire`ın ürünüdür.** *"Çok yönlü
takviye"* teknik olarak şu demek: `_tavan_daire`ın **izotrop elipsi**,
**yöne göre değişen** bir çokgenle değiştirilir. Yani değişecek şey bir
SAYI değil, **bir FONKSİYON** — ve `TAVAN_KM` sözlüğü skalerden vektöre döner.
⚠️ Bu bir yorum, ölçüm değil: Emre'nin *"kuzeyden 250 güneyden 250 doğudan 350
batıdan 400"* cümlesi bir **enklavın derinliğini** de tarif ediyor olabilir.
İki okuma da mümkün ve **karar Emre'nin.**

## ② 🟢 EN UCUZ KIYAS — TAM KOŞU ŞART DEĞİL (ölçüldü)

```
DARALTMA  (tavan küçültme)    KOŞUSUZ ve EXACT       0,2 sn
   Sebep YAPISAL: tavan yalnız KESER (`uret_petek.py:1480` bunu yazıyor).
   ⇒ daha küçük tavan = yayındaki hücre ∩ daha küçük elips. Bilgi kaybı YOK.
   Ölçüldü: Sahra kutusunda tavan ×0,75 → 6.489.793 → 5.273.537 km²

GENİŞLETME (tavan büyütme)    yerel yeniden-Voronoi  0,1 sn
   Aynı yolla YAPILAMAZ: kesilen geometri yayında YOK.
   Ama tam koşu da gerekmiyor — Sahra + 10° tampon = 926 nokta,
   `voronoi_diagram` 0,1 sn. Eksik olan yalnız yaslama/Chaikin;
   GÖRSEL KIYAS için ham Voronoi ∩ KARA yeter.
```
⇒ **Emre'nin istediği "iki ayrı harita yan yana" SANİYELER İÇİNDE üretilebilir.**
73 dakikalık koşu yalnız **kabul edilen** parametre için gerekir, **denemek**
için değil.

## ③ (b) kimi etkiler — Sahra kutusu `box(-17, 15, 37, 33)`

```
nokta 193 · toplam petek 6.489.793 km²
kademe   k0=64 · k2=6 · k3=26 · k4=97
TAVANIN BAĞLADIĞI (yuvarlak kenarı olan): 75 / 193
  Agadez 245.508 · Timbuktu 245.192 · Tibesti 208.788 ·
  Tamanrasset 187.405 · Sahra batısı 186.156 km²
```
⇒ **Emre'nin şikâyet ettiği yuvarlaklar bu 75 peteğin kenarları.**

## ④ (b) hangi denetimleri kıpırdatır

| denetim | beklenen | gerekçe |
|---|---|---|
| `Değişmez 1` sahipsiz 180 | **kıpırdamaz** | tavan noktaya değil ALANA dokunur (`:1480-1483` bunu yazıyor) |
| `Değişmez 2 · 2s · 2i · 2t` | **kıpırdamaz** | kırılma tarihleri değişmiyor |
| boyanan toplam alan | 🔴 **büyük değişir** | daraltmada azalır, genişletmede artar |
| `renk_olc.py` | 🔴 **ŞART** | `§9`: komşuluk VERİDEN gelir; tavan komşuluk üretir/yok eder |
| serbest kenar | 🔴 **çok değişir** | tavan sahipli↔sahipsiz sınırının ta kendisini üretiyor |
| `delikleri_doldur` muafiyeti | ⚠️ **ATEŞLEYEBİLİR** | tavan genişlerse bir çöl cebi kuşatılabilir — nöbetçi tam bunun için kondu |
| A1 tavanı ↔ yetim yüz | 🔴 **ÖLÇÜLSÜN** | `MIMARI §2.9 VAKA 1`: tavan 3.397.649 km² serbest bıraktı, yetim yüz **geri verdi**. (b) aynı tuzağa girer |

## ⑭ ALETLER KURTARILDI — `arac/olc_enklav/` (koordinatör yetkiyi açtı)

**8 dosya · py_compile temiz · bozuk bayt 0 · altısı da koşturularak sınandı.**

| dosya | ne ölçer | EVREN |
|---|---|---|
| `OKU-BENI.md` | koşma sırası · her betiğin evreni · bilinen tuzaklar | — |
| `_ortak.py` | paylaşılan parçalar, özellikle **`hizalama_sinavi()`** | — |
| `olc_kova.py` ① | "var ama sahipsiz" kovaları | yalnız **veri** |
| `olc_delik_kendi.py` ② | motorun **DOLDURDUĞU** delikler | 🔴 **ara ürün** |
| `olc_delik_yayin.py` ③ | yayında **KALAN** delikler — **hüküm veren** | 🟢 **ekran** |
| `olc_kb_boyanma.py` ④ | kasten boş yer boyanıyor mu | 🟢 **ekran** |
| `c13_delikleri_doldur.py` ⑤ | muafiyet iki yönde — çıkış kodu 0/1 | 🟢 ekran + sahte |
| `olc_b_hazirlik.py` ⑥ | (b) plan sayıları | ara ürün |

🟢 **Ve nöbetçi ilk koşusunda gerçek bir şey yakaladı:** ② ve ⑥ bugün
**çalışmayı reddediyor** (çıkış kodu 2), çünkü taban kaymış. Üstelik sayı
sınavının bulamayacağını da buldu — **üç dosya** parmak izinden farklı
(`yerlesimler_ek23.js` · `yerlesimler.js` · `yerlesimler_afrika.js`).

### 🔴 VE BİR KARARIMI ÖLÇÜP GERİ ALDIM

⑥'ya önce `zorunlu=False` koydum. Gerekçem: *"② nokta başına hüküm veriyor,
dursun; ⑥ toplam plan sayısı üretiyor, uyarsın yetsin."* Makul geliyordu.
**Ölçtüm:**
```
hizalı taban (2308)   193 nokta · 6.489.793 km² · TAVANA BAĞLI 75
kaymış taban (2312)   193 nokta · 5.610.810 km² · TAVANA BAĞLI 60
                      %13,5 alan · %20 sayı sapması — DÖRT noktalık kaymadan
```
İndeks kayması bir sayıyı *biraz oynatmaz*; hücreleri **başka yerleşimlerle
eşler.** Sonuç *"yaklaşık"* değil **yanlış**. `zorunlu=True` geri kondu.

> **İndeks eşlemesi ya geçerlidir ya değildir; arası yoktur.** Ve *"bu
> yalnız plan sayısı"* bir bağışıklık değil: **yanlış bir plan sayısı da bir
> sonraki oturumun tabanı olur.**

📌 Bu, bugünkü dördüncü *"ölçüm doğru, çıkarım yanlış"* vakası — ve bu sefer
çıkarım **benim tasarım kararımdı**, bir sayı değil.

⚠️ Dosyalar **commit'lenmedi**: `arac/olc_enklav/` Oturum 0'ın işi (`§7`,
paylaşılan index). Diskte duruyorlar, yani kurtarma tamamlandı.

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

## SIRADAKİ — koordinatörün onayı bekleniyor
ADIM 2'ye onaysız geçilmeyecek. Üç açık soru koordinatöre gönderildi
(uygulama yeri · kıyıya değen parça · devir hedefi).

# KÜNYE-1104 — Hollanda künye çakışması: üç seçenek (karar Emre'de)

LAB SALI · `lab-1104-kunye` · 5 Kasım 2026 · **veriye dokunulmadı.** Ölçüm: origin/main, `data/*.js` (üretilmiş paket/parça
dosyaları hariç) ve `arac/renkler.py`; betik `hollanda_olc.py` (LAB scratchpad). Sayılar dönem nesnesi `{f, t, d|v}` eşleşmesidir.

## Durum

- `hollanda` (devletler.js:1802) "Birleşik Eyaletler Cumhuriyeti → 1815 Krallık": **1581-07-26 → (süren)**, kesintisiz.
- `batav-cumhuriyeti` (devletler.js:10662) "Batav Cumhuriyeti / Holland Krallığı": **1795-01-19 → 1810-07-09**. 1806–10 Holland Krallığı bu künyenin içinde.
- 1810-07-09 → 1813-11-30 Fransız ilhakı: ayrı künye yok; yerleşimlerde `fransa-cumhuriyet`. Bu, 1792 → süren tek şemsiye künyedir; İmparatorluk ayrı değil.
- **Çakışma:** `hollanda` künyesi 1795–1813'ü de kapsıyor; o aralıkta `batav-cumhuriyeti` ve Fransız ilhakı var.
- **İlke çatışması (EMRELİC):**
  - (a) Birleşik Eyaletler 1795'te devrildi, ardıl yapı geçti → ardıl künye.
  - (b) "Rejim değişimi polity değişimi değildir" (Fransa'da uygulanan ilke) → Batav ve Holland Krallığı Hollanda'nın rejimleridir. Gerçek kesinti yalnız 1810–13 ilhakıdır.

## Ölçüm (sayıyla)

| kimlik | dönem 1795 öncesi | 1795–1813 içinde | 1795–1813'ü kesen | — bunlardan Batav yıllarını (1800) kapsayan | — 1810–13 ilhakını (1811) kapsayan | 1813 sonrası | `devlet:` alanı | `taraflar` | benzersiz satır | dosya | BOYALAR'da |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `hollanda` | 27 | 5 | 18 | 7 | 2 | 35 | 34 | 5 | 107 | 12 | var |
| `batav-cumhuriyeti` | 0 | 13 | 0 | 13 | 0 | 0 | 6 | 0 | 19 | 2 | var |

`hollanda` referanslarının 48'i `yerlesimler_avrupa.js`te. Gerisi sömürgelerde: Afrika 10, Asya 7, Amerika 6, Guyana 5. UMIT'in Cava zinciri (Pasuruan, Surabaya, Rembang) bu 1813 sonrası dönemlerin içindedir.

## Seçenekler

### A — İki künye (ardıl künye)
- `hollanda` t → 1795-01-19; adı "Birleşik Eyaletler Cumhuriyeti" olur.
- Yeni künye, öneri id `hollanda-kralligi`, "Hollanda Krallığı (Birleşik Hollanda)": f 1813-11-30 ya da 1813-12-02 (Willem'in Egemen Prens ilanı; Krallık 16.3.1815 aynı polity içinde), süren.
- **Değişen satır (tahmin):**
  - 1813 sonrası 35 dönem yeni id'ye taşınır.
  - 1795–1813'ü kesen 18 dönem bölünür. Bunların 7'si Batav yıllarını `hollanda` sayıyor, 2'si ilhakı atlıyor.
  - 1813 sonrası `devlet:` ve `taraflar` referansları (39 satırın bir kısmı) değişir.
  - devletler.js'e 1 yeni künye eklenir.
  - Toplam ≈ 90–100 satır.
- **⚠️ Motor tuzu:** yeni id `arac/renkler.py` BOYALAR'a eklenmeden boyanmaz. renkler.py motor tuzudur: değişirse tam yeniden inşa gerekir (7–8 saat, HAVVA; CLAUDE.md "Motor dondurma"). Koşu takvimine bağlanmalı.
- Artı: polity sınıflaması (ardıl yapı) en net. Eksi: en büyük etki, motor koşusu şart.

### B — Batav'ı rejim say; tek `hollanda` künyesi + ilhak dönemi
- `hollanda` künyesi 1581 → süren olarak kalır. Künyenin tek f/t'si var; ilhak boşluğu künyede değil yerleşim `s:` dönemlerinde gösterilir: 1810-07-09 → 1813-11-30 `fransa-cumhuriyet`.
- `batav-cumhuriyeti` künyesi `hollanda`ya katılır (künye birleştirme; ad/ic_not'ta "1795 Batav Cumhuriyeti, 1806 Holland Krallığı rejimleri").
- **Değişen satır:**
  - 13 `batav-cumhuriyeti` dönemi → `hollanda`.
  - 6 `devlet:` alanı.
  - İlhakı atlayan 2 dönem bölünür.
  - batav künyesi silinir ya da yönlendirilir.
  - Toplam ≈ 20–25 satır.
- BOYALAR değişmez (`batav-cumhuriyeti` girdisi kullanılmadan kalabilir), dolayısıyla motor tuzuna dokunulmaz.
- Artı: Fransa ilkesiyle tutarlı, küçük etki. Eksi: 1795 devrimi ve 1813 restorasyonu künye düzeyinde görünmez (ic_not beyanı gerekir).

### C — Olduğu gibi + beyan
- Değişen veri satırı 0. İki künyenin ic_not'una çakışma beyanı yazılır: "1795–1810 Batav/Holland Krallığı rejimi `batav-cumhuriyeti` künyesindedir; 1810–13 Fransız ilhakı yerleşim dönemlerinde `fransa-cumhuriyet`; bu aralıkta `hollanda` künyesi temsilî değildir."
- Eksi: 7 dönem Batav yıllarını `hollanda` sayıyor, 2 dönem ilhakı atlıyor. Bu iç tutarsızlık ölçülmüş olarak kalır (beyan ödeme değildir).

## LAB önerisi

**B.** Atlasın Fransa'da ve Burgonya/Mantova'da uyguladığı "rejim/hanedan değişimi polity değişimi değildir" ilkesiyle tutarlıdır. Etkisi en küçüktür (≈ 20–25 satır) ve motor tuzuna dokunmaz. 1810–13 ilhakı, gerçek kesinti olarak, yerleşim dönemlerinde gösterilir. A seçilirse bir HAVVA koşusuyla birlikte planlanmalı.

Kaynak notu: uç günleri (1795-01-19 Batav devrimi, 1810-07-09 ilhak dekreti, 1813-11-30 / 12-02 Willem) `batav-cumhuriyeti` künyesinin mevcut kaynaklarıyla (parlement.com, Huygens) uyumludur. Seçim sonrası gün teyidi ayrıca yapılır.

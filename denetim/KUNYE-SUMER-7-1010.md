# KUNYE-SUMER-7-1010 — 7 künyenin `data/devletler.js` diff'i (MÖ 539 → MS 226)

Görev: YILDIRIM BAYEZIT (cross-session mesajı, 10 Ekim 2026) · işçi: KUNYE-SUMER-7-1010 (EMRELIC, Opus) ·
`data/` + `arac/` DONUK — çıktı yalnız `denetim/` altında diff.
Taban: `origin/main` = `1f08064861cb5e1cda2620d16747e8a50406bbec` (ayrı worktree, `git rev-list HEAD..origin/main` = 0).
Girdi: KASA `makine/kasa` — `43981345` (KASA-SUMER-SAHIPLIK-1010) · `5a7f2e27` (…-2-1010) · KASA-KUNYE-AHAMENI-PART-1010 ·
hüküm `oturumlar/HUKUM-KASA-1010.md §9.6`.

## 0. ÖNGÖRÜ (ölçümden ÖNCE yazıldı; sonradan DOKUNULMADI)
- **Künye sayısı:** istenen 7 = 6 yeni + 1 değişiklik (`sasani` f). Öngörüm **6 kalem iner**: `karakene`
  YAZILMAZ — `f` ucu akademik (Olmstead 1937, Babil −126-06-01) ama `t` ucu yalnız livius (Lendering "defeated
  in 222 CE") + Hansman "221-22 … revolt" yılsız ⇒ koordinatörün "tek kaynaklı künye kararı bende" şartı (%75).
- **Alan sayısı:** yeni künye başına 12 ± 1 alan (`id ad tur bolge f t kesinlik baskent ic_not_f ic_not_t ozet
  kaynak kronoloji[2]`); toplam ~60. `sasani`de 3 alan değişir (`f` · `ic_not_f` · `kronoloji[0]`).
- **Tereddüt beklediğim alanlar (5):**
  ① `makedon.f` — Sippar'da İskender emri **−330-10-18** (ADART) koordinatörün −330-10-22'sinden 4 gün ÖNCE ⇒
     §9.6 zarf ilkesine göre f ≤ −330-10-18 olmalı.
  ② `makedon.t` — BCHP 3 "[Year 8] of Alexander … Borsippa" (309/8 = −308) −311'in SONRASI ⇒ zarf aşımı.
  ③ `selefki.t` — ara dilim −129-06-01 (VII. Antiokhos, Babil) künye t'si −140-07-03 ise zarfın DIŞINDA.
  ④ `ahameni.f` — TDV `iran` devlet başı MÖ 559 (−558); koordinatör −538 (Mezopotamya ucu) diyor ⇒ hangisi zarf.
  ⑤ `ahameni.baskent` — KASA: `bulunamadı`.
- **`renkler.py` BOYALAR:** 7 kimliğin **0**'ında boya var (`sasani` `boya_gerekli:true` taşıdığı için onda da yok) — %80.
- **`denetle.py`:** veride bugün 0 negatif yıl (`pad()` docstring'i). Negatif `f:` girince en az bir denetimin
  ÇÖKMESİ ya da ÖLÇÜLEMEDİ'ye düşmesi — %60. `node --check` temiz — %95.

## 1. ÖLÇÜM

### 1.1 Diff
- `denetim/KUNYE-SUMER-7-1010.diff` — 88 satır · `data/devletler.js` **+70 / −7** · sha256 `c9d039a3…a85f0`.
- `git apply --check`: **TEMİZ** — taban `1f080648` (ayrı worktree) ve EMRELIC ana checkout (`C:\atlas`).
- ⚠️ Usul notu: ilk diff Edit aracıyla üretildi ve **519 satır** (+291/−228) çıktı — dokunulmayan ~220 satır
  görünmez biçimde değişmişti (dosya karışık satır sonlu: 10.729 satırın ~10.504'ü CRLF). Atıldı; blok, özgün
  dosyanın baytlarına Python ile eklendi ⇒ yalnız hedef blok değişti.
- Künye sayısı 897 → **902** · mükerrer id **0** · `node --check` **OK** (diff uygulanmış GEÇİCİ worktree kopyası).

### 1.2 İnen kalemler — 6 (5 yeni + `sasani` değişikliği) · `karakene` YAZILMADI
| id | f | t | kesinlik | alan | kronoloji |
|---|---|---|---|---|---|
| `ahameni` | `-0538-01-01` | `-0330-10-22` | f yil · t gun | 14 | 2 |
| `makedon` | `-0330-10-22` | `-0311-01-01` | f gun · t yil | 14 | 2 |
| `selefki` | `-0311-01-01` | `-0140-07-03` | f yil · t ay | 14 | 3 (ara dilim −129 dahil) |
| `part` | `-0140-07-03` | `0226-01-01` | f ay · t yil | 14 | 3 |
| `elymais` | `-0146-01-01` | `0224-01-01` | f onyil · t yil | 14 | 2 |
| `sasani` | `0226` → **`0224-01-01`** | `0651-01-01` | (değişmedi) | 3 alan değişti (f · ic_not_f · kaynak) | +1 madde (0224) |
Beşine de `boya_gerekli:true` yazıldı (boya yok ⇒ "sessiz borç" değil "BEYANLI borç" kovasına düşsünler).

### 1.3 Yıl dönüşümleri (astronomik: MÖ N ↔ −(N−1))
```
MÖ 539 → -0538   (ahameni f · ABC 7)          MÖ 331 → -0330   (Babil'e giriş 22 Ekim · ADART)
MÖ 312 → -0311   (TDV keldaniler Selefki)     MÖ 141 → -0140   (Olmstead: 3 Temmuz 141 "presumably")
MÖ 130 → -0129   (Olmstead: 1 Haziran 130)    MÖ 147 → -0146   (Hansman "about 147")
MÖ 309/8 → -0308 (BCHP 3 Year 8 Alexander)    MÖ 559 → -0558   (TDV iran, devlet başı — YAZILMADI)
MÖ 250 → -0249   (TDV iran Part kuruluşu — YAZILMADI)
```
KASA'nın dönüşümleri tek tek yeniden hesaplandı: **9/9 doğru**, hata bulunmadı.

### 1.4 Kaynak — alan alan
- Bütün `kaynak:`/`ic_not_*` alanları ADIYLA: Grayson ABC 7 · Sachs–Hunger ADART I · NaBuCCo · CDLI (P414739,
  P342411) · Oracc RIBo/CAMS-SelBI · Olmstead CPh 32 (1937) · BCHP 3/10 · Corò 2018 · Boiy JCS 52 · EIr
  (Schippmann · Kröger · Shahbazi · Wiesehöfer · Martinez-Sève · Hansman · Jakubiak) · TDV iran/keldaniler/babil/medain
  (yalnız destek; İslâm öncesi ⇒ akademik esas).
- **Boş bırakılan alanlar (ADIYLA):** `ahameni.baskent` (KASA: TDV "yeni bir başşehir kuran Kyros" — ADSIZ) ·
  `elymais.baskent` (Hansman "at the capital Susa" — Susiana'nın mı Elymais'in mi, ayrıştırılamadı).
  Biçim emsali `baskent:"—"` (38 kayıt) — açıklamalı tire yazıldı.
- `makedon.baskent:"Bâbil"` — TDV babil cümlesi İskender için; IV. Aleksandros dönemi için ayrı tanık YOK (zayıf).
- Livius'ta barınan metinler yalnız **akademik çeviri** olarak kullanıldı (ABC 7, ADART, BCHP); Lendering'in kendi
  makaleleri KULLANILMADI.

### 1.5 `arac/renkler.py` (④) — ÖLÇÜLDÜ, YAZILMADI
`BOYALAR` 704 anahtar · `ahameni` · `makedon` · `selefki` · `karakene` · `part` · `elymais` · `sasani` → **7/7 YOK**.

### 1.6 `denetle.py` — taban ↔ yamalı, AYNI ANDA iki worktree
- İki çıktı da 352 satır; süre damgaları ayıklanınca **FARK 0 satır**. İkisi de **çıkış 2**, tek sebep Değişmez 8
  `devletler_harita.js YOK` (taze ağaçta beklenen; diff'ten bağımsız).
- ⚠️ Bu "temiz" değil, **"soru sorulmadı"**: hiçbir yerleşim bu kimlikleri `s:`/`d:`de kullanmıyor ⇒ künye
  denetimleri negatif `f:`yi HİÇ okumadı. `denetle.py pad()` docstring'i: *"Negatif (MÖ) yıl … `gun_no` ÇÖKER"*.
  ⇒ Veri partisi (KASA §1.2 zincirleri) `d:"ahameni"` gibi dilimler yazdığı an `gun_no` yolları çökebilir —
  **o partiden ÖNCE ölçülmeli.** `app.js` tarafı hazır (`gunIdx` "-2999-01-01" kabul ediyor, NEGATIF-YIL-1010-A).

### 1.7 Öngörü sınavı
```
                          öngörü                    ölçüm
kalem                     6 (karakene yazılmaz)     6 ✓
alan / künye              12 ± 1                    14 ✗ (kesinlik + boya_gerekli fazladan)
tereddüt                  5                         5 ✓ (aşağıda §2)
renkler.py                0/7 boya                  0/7 ✓
denetle çöker/ölçülemedi  %60                       ✗ — çökmedi; ÇÜNKÜ soru sorulmadı (§1.6)
node --check              temiz                     temiz ✓
```

## 2. BULAMADIM / TEREDDÜT — karar koordinatörün
1. **`karakene` YAZILMADI.** `f` akademik (Olmstead: Babil, "Aspasine of Charax … year 184, Airu 24 (June 1, 127
   B.C.)" ⇒ −0126-06-01) ama `t` yalnız livius/Lendering "defeated in 222 CE"; Hansman "221-22 … revolt" yılsız.
   ⇒ Şartnamedeki "tek kaynaklı künye kararı bende" maddesi.
2. **`makedon.f` zarfı aşıyor:** Sippar ADART −330 "On the eleventh, in Sippar an order of Al[exander]" = **−0330-10-18**,
   künye f'si −0330-10-22'den 4 gün önce. §9.6'ya göre f ≤ −0330-10-18 olmalı (ahameni t'si de aynı soruyu taşır).
3. **`makedon.t` zarfı aşıyor:** BCHP 3 "[Year 8] of Alexander … Borsippa" = 309/8 ⇒ **−0308**; ayrıca NaBuCCo
   "7 Alx IV" sayım başlangıcına göre −311'den sonraya düşebilir. Ya t −0308'e uzar ya da o dilim yazılmaz.
4. **`selefki.t` ara dilimi zarfın DIŞINDA:** −0129-06-01 (VII. Antiokhos, Babil) kronolojide duruyor ama künye
   t'si −0140-07-03. Nokta dilimi yazılırsa 4c/4d ihlali; ya t → −0129-06-01 sonrası ya da dilim yazılmaz.
5. **`ahameni.f` ve `part.f` = Mezopotamya zarfı, devlet başı DEĞİL:** TDV iran 559 (−0558) ve 250 (−0249).
   Talimata uyuldu; ileride İran yaylasına nokta girerse f geri çekilmek zorunda kalır.

## 3. İSTİYORUM
- Diff'i uygula (taban `1f080648`, check temiz). §2'nin 2-4. maddelerine hüküm: önerim üçünde de zarf ilkesi
  (f −0330-10-18 · t −0308 · selefki t ≥ −0129-06-01) — ama değer seçimi senin.
- Veri partisinden ÖNCE: negatif yıllı `s:` diliminin `denetle.py`yi çökertip çökertmediği ölçülsün (§1.6).
- FAZ 3 boya: 7 kimlik (karakene yazılırsa).

# DENETLE-TARIH-KALAN-1008 — `denetle.py`de pad()'den kaçan üç tarih yolu + 4s sırası

Görev: UMIT İRTİBAT, 9 Ekim 2026. Ağaç `C:\atlas-dtk` = `origin/makine/umit` `7f63bcd9`.
Emsal: `denetim/GUNNO-PAD-1008.md` (ortak `pad()` yardımcısı, `denetle.py:1176`).
Kaynak bulgular: `denetim/MOTOR-TARIH-TARAMA-1008.md` ⑥b · `denetim/YIL-DOLGU-1008.md` ④.
Mükerrer kapısı: `denetim/` altında `DENETLE-TARIH` / `TARIH-KALAN` adlı dosya 0.

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı
Sınav anı: yalnız dört sitenin kodu ve iki çağıranı (`5366`, `5437`) OKUNDU; hiçbir şey
KOŞULMADI. Evren: `denetle.py`nin bu dört yolu besleyen girdileri (açık kırılmalar ·
D8 hatları/BOLGELER `f`/`t` · `zincir_kaynagi` farkları · 4c∩4d).

1. **`kapsam_disi` (2243-2249):** yamasız `"330-05-11"` → `g="330-05-11-"` → `int("330-")`
   **ValueError** (yalnız `_osmanli_kure` boş dönerse o dala girilir — FETRET yedeği; ⇒
   çöküş koşullu). Yıl-ay `"330-05"` ve yıl `"330"` biçimleri de yanlış genişler. Dolgulu
   `"0330-05-11"` iki kolda da doğru. Yama: `g` `pad()`'den geçer.
2. **`_d8_gun_once` (5068):** yamasız `"330-05-11"` → **None (sessiz)**; yamalı `"0330-05-10"`.
   Dolgulu girdi iki kolda aynı. ⚠️ Çağıranda (`5366`) karışık yazım tuzağı VAR:
   `gunler={f, gun_once(t)}` sonra `g < f` / `g >= f` dizgi kıyası — `f` dolgusuz,
   gun_once dolgulu dönerse "0330…" < "330…" ⇒ yanlış dala düşer. Yama çağıranda da
   `pad()` ister (öngörü: iki satır).
3. **6080 (BAYAT KOPYA raporu):** `date.fromisoformat("330-…")` → **ValueError** (çöker).
   Yama: `pad()`.
4. **4s (6835):** `saran` bir KÜME; `sorted(key=-n)` eşitleri küme sırasında bırakır ⇒
   iki farklı `PYTHONHASHSEED` ile yamasız liste FARKLI (katalan/adal emsali), yamalı
   `key=(-n, ad)` ile BİREBİR.
5. **Bugünkü veri etkisi: 0.** Bu dört yolu besleyen evrende üç haneli yıl 0 (YIL-DOLGU:
   yerleşim 4300 kayıt · 0). ⇒ `py arac/denetle.py` yamasız/yamalı **çıkış 2 = 2**, aynı
   tohumla ham `diff` **0 satır**; tavan OYNAMAZ ⇒ tavan önerisi yok.
   Farklı tohumla: yamasızda yalnız 4s listesi oynar; yamalıda başka nondeterminizm
   YOKTUR (öngörü — riskli, ölçülecek).
6. **⑤ ölçüm (yamasız):** `renk_olc.py` dizgi tarih karşılaştırması ≈ 22 site (TARAMA'nın
   19 + elle 3); `arac/dolgu.py` 2–4 site (`:946`, `:955` + birkaç).

## ② YAMA — `denetim/DENETLE-TARIH-KALAN-1008.diff` (yalnız `arac/denetle.py`, +31/−10)
Temel `7f63bcd9`; `origin/makine/umit` bu arada `2f604ff3`e ilerledi — `arac/denetle.py`
blobu iki uçta AYNI (`git diff --quiet` 0). LF, CR 0, `git apply --cached --check` temiz.
Ortak `pad()` (`denetle.py:1176`, GUNNO-PAD) kullanıldı; yeni yardımcı yazılmadı, yalnız
D8'in gün kümesi tek işleve toplandı (iki çağıran aynı kusuru taşıyordu).

| site | yamasız | yama |
|---|---|---|
| `kapsam_disi` 2243 | `(d+"-01-01")[:10]` "330-05-11-" → FETRET dalında `int("330-")` ÇÖKER (yıl-ay ve yıl biçimi de) | `g = pad(d)` sonra genişlet |
| `_d8_gun_once` 5068 | `fromisoformat("330-…")` → SESSİZ `None` | `fromisoformat(pad(g))` |
| D8 çağıranları 5366 · 5437 | `{f, gun_once(t)}` + `g < f` dizgi: `f` dolgusuz, gun_once dolgulu ⇒ "0330-12-31" < "330-05-11" YANLIŞ dala; aynı gün iki yazımla iki kez | yeni `_d8_gunler(f, t)` → (düşen, ölçülen) ikisi de pad'li |
| `zincir_kaynagi_rapor` 6080 | `fromisoformat` ÇÖKER | `pad(s)` · `pad(b)` |
| 4s örnek listesi 6835 | `key=-n`, `saran` KÜME ⇒ eşitler tohuma göre | `key=(-n, ad)` |

## ③ SINAV — `denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py` · **33/33** (`--tam` ile)
Yamasız kol = `git show origin/makine/umit:arac/denetle.py`, `arac/_dtk_yamasiz_sinav.py`
adıyla geçici yazılıp GERÇEKTEN içe aktarılır/koşulur (çıkışta silinir — silindi, ölçüldü).
- **S1** `kapsam_disi`, GERÇEK 4300 yerleşimle: dolgusuz `330-05-11`/`330-05`/`330` yamasız
  **ValueError ×3**, yamalı İÇİ; dolgulu ×3 iki kol aynı; dört haneli ×3 gerileme 0.
- **S2** `_d8_gun_once`: dolgusuz ×2 yamasız `None`, yamalı doğru; dolgulu ×2 + dört haneli ×2 birebir.
- **S3** D8 gün kümesi: yamasız ifadenin metni kaynakta BİREBİR arandı (taklit değil) ve
  yamasız modülün işleviyle koşuldu; karışık yazım ×4 vakada yamasız yanlış (biri gerçek
  ölçüm gününü DÜŞENE atıyor, üçü `t` gününü kaybediyor), yamalı doğru; dört haneli ×2 gerileme 0.
- **S4** BAYAT KOPYA gün toplamı: dolgusuz yamasız ValueError, yamalı 365; dolgulu/dört haneli
  çıktı birebir.
- **S5** 4s anahtarı, 20 tohum: yamasız 2 ayrı sıra, yamalı tek sıra (`meysur 3 · adal 1 · katalan 1`).
- **S6** GERÇEK `denetle.py` × 4 (iki kol × tohum 0/3): hepsi çıkış **2** · 348 satır;
  yamasız tohum 0 ≠ 3 · yamalı 0 == 3 BİREBİR; yamasız↔yamalı farkı **2 satır**, ikisi de
  4s'deki katalan/adal sırası.

## ④ KAPI
Yamasız taban 7 tohumla (0-6) koşuldu: çıkış 2 ×7; tohum **3 ve 5**'te 4s'de katalan/adal
yer değiştiriyor (4 satır diff), öbürlerinde 0. ÖLÇÜLEMEDİ yalnız Değişmez 8
(`devletler_harita.js` YOK) — taban 2 beklendiği gibi. Yamalıda bütün değerler birebir
(D1 309 · D2 · 2s · 4c/4d/4s 5 · …), tek fark 4s ad sırası. **Tavan oynamadı ⇒ öneri yok.**
⚠️ D8 bu makinede ÖLÇÜLEMEDİĞİ için `_d8_gunler`in GERÇEK D8 koşusundaki etkisi kapıda
görülmedi; S2/S3 işlevi doğrudan sınıyor. Öngörü: dört haneli hatlarda D8 sayıları
değişmez (S3g gerileme 0; çağıranın küme/sıra davranışı aynı).

## ⑤ ÖLÇÜLDÜ, YAMALANMADI — dizgi tarih karşılaştırmaları
**`arac/renk_olc.py` (sahibi koordinatör) — 23 satır karşılaştırma + 3 gösterim dilimi:**
- künye evreni (BUGÜN CANLI, `ingiltere f:927` vb.): `389` `sorted(key=x["f"])` · `390`
  `a["f"]<b["t"] and b["f"]<a["t"]` (`ayni_anahtar`) · `545` · `629` · `1013`
  `min(dv["f"],e[0])`/`max(dv["t"],e[1])` (künye penceresi) · `885` `max(a.f,b.f)`/`min(a.t,b.t)`
- pencere kıyasları (değerleri o pencerelerden gelir ⇒ künye üç haneliyse yanlış):
  `561` · `657` · `1305` `fa<tb and fb<ta` · `563` · `659` `max(fa,fb)`/`min(ta,tb)` ·
  `565-566` · `661-662` `pa[2]<T and F<pa[3]` · `1038` `fb<t and f<tb`
- yerleşim evreni (bugün etkisiz): `359` `fa<tb and fb<ta` · `442` · `536` · `621` · `1002`
  `min(e[0],f)`/`max(e[1],t)` · `452` · `457`
- gösterim `[:4]`: `715` · `924` · `932` → `330--1461` / `0330-1461`
- TARAMA'nın listesine göre EK bulunan: `657/659/661-662` (`_cie_evreni`deki ikiz blok) ·
  `1038` (`engel_kumesi`) · `1305` (`_yeni_engel_mi`) · `359` · `452/457`. Öngörü 22 idi, ölçüm
  23 + 3 (sayım satır başına; tek satırdaki iki kıyas bir sayıldı).
**`arac/dolgu.py` — 4 site:** `946` · `1080` `sorted({a[0] …})` (kesit tarihleri) · `955` ·
`1122` `f <= a < t`. (`957` · `1157` `"9999-12-31"` nöbetçi — dört hane, sorunsuz.)
Evreni motor ÇIKTISI (`donemler.js` + `devletler_harita.js`) ⇒ motor üç haneli yıl
üretmedikçe bugün etkisiz. Öngörü 2-4 → 4.

## Öngörü karnesi
| öngörü | ölçüm | hüküm |
|---|---|---|
| kapsam_disi dolgusuz ÇÖKER (FETRET dalında) | 3/3 ValueError | ✓ |
| _d8_gun_once dolgusuz None | 2/2 | ✓ |
| D8 çağıranında karışık yazım tuzağı | 4/4 vaka yanlış | ✓ |
| 6080 ÇÖKER | ValueError | ✓ |
| 4s yamasız tohuma bağlı, yamalı birebir | tohum 3,5 çevirdi; yamalı 0==3 | ✓ |
| denetle çıkış 2=2, değerler aynı, tavan oynamaz | ✓ (fark yalnız 4s sırası) | ✓ |
| yamalıda başka nondeterminizm YOK | tohum 0 vs 3 birebir (iki tohum; 7 tohum yalnız yamasızda) | ✓ (dar evren) |
| renk_olc ≈ 22 | 23 + 3 gösterim | ~ |
| dolgu 2–4 | 4 | ✓ |

## Bulamadım / ölçemedim
- Değişmez 8 bu makinede ÖLÇÜLEMEDİ ⇒ `_d8_gunler`in koşudaki etkisi yok, işlev sınandı.
- `kapsam_disi` yamalı da `_osmanli_kure(Y, "0330-…")` ile yerleşim `f/t`ye DİZGİ kıyası
  yapar: yerleşim verisi dolgusuz üç haneli yıl taşırsa yanlış. GUNNO'nun bilerek
  bıraktığı yerleşim ailesi (67 site); bugün evrende 0.
- `zincir_kopya_karsilastir` (5997) `f < u < t` + `sorted(kes)` — aynı yerleşim ailesi, yamalanmadı.
- `mukerrer_maddeler` 4478 `[:4]` gösterim — görev kapsamı dışında, TARAMA'da duruyor.

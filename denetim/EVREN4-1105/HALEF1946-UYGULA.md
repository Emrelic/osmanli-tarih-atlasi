# HALEF_1946 katman birleştirmesi — uygulama talimatı (EMRELİC onayı, gece-103)

KASA SALI veriye yazmaz; bu dosya KASA PAZAR içindir. Kayıtları `ad:"..."` ile bul, satır numarasıyla değil. Kaynak: `HALEF1946-ESLESME.tsv`. 3 kayıtta da işlem aynı: dilimi ana zincire taşı, ana dönemi böl, katman noktasını sil. Bu, D1 delik adaylarını da kaldırır.

## 1. Bulavayo ← Bulawayo (0.31 km)

- **Katman (SİL):** `Bulawayo`, `yerlesimler_halef_1946.js`, tek dönem `s: rodezya-nyasaland-federasyonu 1953-08-01 → 1963-12-31`.
- **Ana kayıt (BÖL):** `Bulavayo`. Mevcut dönem `s: ingiltere 1893-11-04 → 1965-11-11` şu üç dileme bölünür:

  | Alan | f | t | Not |
  |---|---|---|---|
  | `s: ingiltere` | 1893-11-04 | 1953-08-01 | |
  | `s: rodezya-nyasaland-federasyonu` | 1953-08-01 | 1963-12-31 | kaynak: künye |
  | `s: ingiliz-guney-rodezya` | 1963-12-31 | 1965-11-11 | gece-101 (d); künye 1890 → 1980-04-18 |

  Ardından mevcut `rodezya-udi` 1965-11-11 → … değişmez.
- **D2:** 1953-08-01 ve 1963-12-31 kırılmaları ±30 gün içinde künye kronoloji maddeleriyle karşılanıyor (ölçüldü).
- **İsteğe bağlı (Emre/LAB):** 1893-1953 `ingiltere` dilimi de `ingiliz-guney-rodezya` künyesine hizalanabilir. Renk değişir, bu yüzden bu bölümde yapılmaz.

## 2. Bangassu ← Bangassou (0.25 km)

- **Katman (SİL):** `Bangassou`, tek dönem `s: orta-afrika-imparatorlugu 1976-12-04 → 1979-09-20`.
- **Ana kayıt (BÖL):** `Bangassu`. Mevcut dönem `s: orta-afrika-cumhuriyeti 1960-08-13 → 2000-12-31` şu üç dileme bölünür:

  | Alan | f | t |
  |---|---|---|
  | `s: orta-afrika-cumhuriyeti` | 1960-08-13 | 1976-12-04 |
  | `s: orta-afrika-imparatorlugu` | 1976-12-04 | 1979-09-21 |
  | `s: orta-afrika-cumhuriyeti` | 1979-09-21 | 2000-12-31 |

- **🔴 Künye:** `orta-afrika-imparatorlugu` künyesinin t'si 1979-09-20 → 09-21 değişir (TDV; EMRELİC gece-101 (c)). Bu LAB'ın işi ve aynı commit'te yapılmalı; yapılmazsa yerleşimde 09-20 kullanılır.
- **D2:** 1976-12-04 ve 1979-09-20/21 kırılmalarında künye maddeleri var.

## 3. Gcuva (Butterworth) ← Butterworth (1.04 km)

- **Katman (SİL):** `Butterworth`, tek dönem `s: transkei 1976-10-26 → 1994-04-27`.
- **Ana kayıt (BÖL):** `Gcuva (Butterworth)`. Mevcut dönem `s: guney-afrika-cumhuriyeti 1961-05-31 → 2000-12-31` şu üç dileme bölünür:

  | Alan | f | t | Not |
  |---|---|---|---|
  | `s: guney-afrika-cumhuriyeti` | 1961-05-31 | 1976-10-26 | |
  | `s: transkei` | 1976-10-26 | 1994-04-27 | Draç emsali; `ic_not`: "uluslararası tanınmadı (yalnız GAC ve öteki bantustanlar tanıdı)" |
  | `s: guney-afrika-cumhuriyeti` | 1994-04-27 | 2000-12-31 | 1993 Anayasası md. 251(1) |

- **D2:** 1976-10-26 ve 1994-04-27 kırılmalarında künye maddeleri var.

## Dokunulmayanlar

- halef_1946'nın öteki 136 noktası gerçekten ayrı yerlerdir; dokunulmaz.
- Büyük Zimbabve / Masvingo iki ayrı yerdir. Masvingo'nun boş zinciri ayrı bir kalemdir.

## Uygulama sonrası

- `py arac/denetle.py` (Değişmez 1 ve 2).
- Petek: aynı yerde iki nokta kalmadığını doğrula. 3 km mükerrer taraması `denetle` içinde.

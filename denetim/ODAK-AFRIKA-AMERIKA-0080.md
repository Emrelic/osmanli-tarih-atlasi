# ODAK-AFRIKA-AMERIKA-0080 — teslim raporu

**Paket ODAK-0080 · 27 Eylül 2026 · şartname `oturumlar/ODAK-AFRIKA-AMERIKA-0080.md`**

## Dosyalar
| dosya | ne |
|---|---|
| `denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py` | UYGULAYICI — varsayılan kuru koşu · `--uygula` · `--grup A,B,BG,C,E` · `--ayrinti` · `--sina` |
| `denetim/ODAK-AFRIKA-AMERIKA-0080-oneriler.json` | 156 önerinin tamamı: sınıf · grup · alan · değer · gerekçe · madde kaynağı |
| `denetim/ODAK-AFRIKA-AMERIKA-0080-olc.py` | ölçüm yardımcısı: `app.js maddeOdakKutusu` + `suzgec.js sahipAnahtari/sahipKimlikte`'nin Python karşılığı |

## ① Taban (ölçüldü, `py arac/odak_olc.py --dosya <d>`) — şartname tablosuyla BİREBİR
ODAKSIZ 59 · BEYANLI→yabancı 97 · yük 156. Yedi dosyanın yedisi de tuttu.

## ② Sınıflama (156 madde)
| sınıf | adet | ne yazılır |
|---|---|---|
| A | 19 | `yer_id` — metin yeri AÇIKÇA adlandırıyor, ad havuzda TEK |
| B | 55 | `odak_yer` (metindeki adlar / sınır hattının uçları) ya da `odak_kimlik` (maddenin kendi taraflar alanı) |
| BG | 14 | B'nin alt kümesi: metin BÖLGE adlandırıyor (Tigre, Florida, Sûs, Güneybatı Afrika, Yeni Gine kıyıları…), bölgedeki havuz yerleşimlerini BEN seçtim → **koordinatör onayı** |
| C | 56 | tek devlet: `odak_kimlik:["<id>"]` (≥2 yerleşim) ya da kimliğin o gündeki TEK yerleşimi `odak_yer` |
| D | 0 | hiçbiri Osmanlı çapında değil |
| E | 12 | bulunamadı — alan YAZILMAZ; 5'i beyanlı: yalnız `kapsam_genis` kaldırılır |

Beyanlı 97 maddenin **97'sinde** `kapsam_genis:true` kaldırılır (D yok).

## ③ Öngörü — ölçümden ÖNCE yazıldı
| dosya | taban ODAKSIZ | taban BEYANLI→yab | A | B | BG | C | E | sonra ODAKSIZ (app) | sonra ODAKSIZ (odak_olc) | sonra BEYANLI→yab |
|---|---|---|---|---|---|---|---|---|---|---|
| `kronoloji_sinir_guney_g8.js` | 0 | 81 | 19 | 11 | 2 | 44 | 5 | 5 | 28 | 0 |
| `kronoloji_sinir_amerika.js` | 19 | 0 | 0 | 17 | 0 | 0 | 2 | 2 | 2 | 0 |
| `kronoloji_sinir_afrika.js` | 16 | 0 | 0 | 14 | 2 | 0 | 0 | 0 | 0 | 0 |
| `kronoloji_kuzeyafrika.js` | 11 | 5 | 0 | 3 | 1 | 8 | 4 | 4 | 12 | 0 |
| `kronoloji_dogu_afrika.js` | 6 | 9 | 0 | 9 | 3 | 3 | 0 | 0 | 3 | 0 |
| `kronoloji_sinir_okyanusya.js` | 6 | 0 | 0 | 1 | 5 | 0 | 0 | 0 | 0 | 0 |
| `kronoloji_misir.js` | 1 | 2 | 0 | 0 | 1 | 1 | 1 | 1 | 2 | 0 |
| **TOPLAM** | **59** | **97** | 19 | 55 | 14 | 56 | 12 | **12** | **47** | **0** |

Hepsi uygulanırsa: **ODAKSIZ 59 → 12 (app) / 47 (odak_olc) · BEYANLI→yabancı 97 → 0 · KONUMLU +19 · KUTULU +125.**
İki sütunun farkı (35) `arac/odak_olc.py:156`nın `len(ids) >= 2` şartıdır; app tek kimliği ≥2 yerleşimle kabul eder (tahta M-5302 ①).
`--grup` BG hariç inerse BG'nin 7 beyanlısı beyanlı kalır.

## ④ Betiğin sınaması (kuru koşu, 27 Eylül)
`değişen 149 · E dokunulmadı 7 · kayıt yok 0 · eski tutmuyor 0 · şartı sağlamadı 0` · 7 dosyanın 7'sinde
node yeniden ayrıştırma ✓ (hedef dışı kayıtlar JSON olarak birebir aynı). `--sina`: 9/9 TEMİZ
(iyi: Cajamarca, ispanyol-peru, lupaqa+colla · kötü: Mérida, Mora, ingiliz-nijerya, japonya, evfat@1328, Hawikuh).

Süzgecin kendi elediği iki öneri (ilk kuru koşu, sonra tabloda düzeltildi):
- `yer_id:"Mérida"` — havuzda `Mérida` + `Mérida (Venezuela)` ikisi de eşleşir → C `odak_kimlik:["maya-sehir-devletleri"]`
- Peru Genel Valiliği kutusu 15,9°×44,5° eski tavanı (45×35) aşıyordu → tavan kıta ölçeğine (60×50) çekildi; devletin kendisidir.

## ⑤ Bulunamadı (E) ve bulgular — DÜZELTMEDİM, bildiriyorum
**NOKTA GEREKİR (havuzda yok):** Grönland Vestribygð / Eystribygð (3 madde) · Nikaragua–Kosta Rika hattı (300 km içinde nokta yok) ·
Honduras–Nikaragua hattı (215 km) · Tordesillas · Bisel (1815) · Şüve · Medgūsa · Paucarcolla · Choconta · Danki · Tondibi ·
Şimbra Kure · Wayna Daga · Hawikuh · Addi Karro · Hubat · Vebi · **Kamerun'daki Mora** (havuzdaki `Mora` = Mora (Tripoliçe), Yunanistan).

**Kimliği atlasta 0 yerleşim olan künyeler (madde günü):** `merini` 1196–1258 (künye 1196'da başlar, ilk yerleşim ≥1304) ·
`sadi` 1511–1537 (künye 1511, atlas 1549'dan önce Sâdî göstermiyor) · `evfat` 1285–1415 (hiç) · `trablusgarp-ocagi` 1911-12-01 ·
`nikaragua/kosta-rika/honduras-cumhuriyeti` · `norse-gronland` · `cahokia` · `moundville` · `spiro` (1450) · `guney-afrika-birligi` 1915.
→ `D203`/`D205` sınıflaması gerekir (hayalet mi, künye mi geniş) — benim işim değil.

**Tuzaklar:**
- Sömürge/manda kimlikleri ana ülkeye çözülür (`harita:`): `ingiliz-nijerya` 246–353 yerleşim (Lefkoşa…), `fransiz-kamerun-mandasi` → Cezayir, `ruanda-urundi-mandasi` → Brugge, `portekiz-mozambik` → Lizbon. Sınır maddelerinde bu yüzden `odak_kimlik` YOK, hat uçları `odak_yer`.
- `mutapa` atlasta yalnız Büyük Zimbabve'de (1450: 1 · 1700: 0) — [71] kamera oraya gider; Mutapa'nın merkezi Büyük Zimbabve değildir.
- Havuz ad çakışmaları (metinde geçen, KULLANILMAYAN): `Sion` (İsviçre), `León`, `Mendoza`, `Valdivia` (şehir, muharebe yeri değil), `Salvador`, `San Antonio`.

## ⑥ Kaynak notu
Hiçbir tarih/başlık/kaynak alanına dokunulmadı; yeni koordinat (`yer_kon`) YAZILMADI. A/B yerleri maddenin KENDİ metninden,
C/B kimlikleri maddenin kendi `devlet/devletler/taraflar` alanından ya da dosyanın bölüm başlığından (kuzeyafrika/dogu_afrika/misir
kayıtlarında devlet alanı yok), sınır uçları `d_sinirlar_*.js` hattından. BG grubunda bölge→yerleşim eşlemesi benim coğrafî
seçimimdir, kaynakla doğrulanmadı — bu yüzden ayrı grup.

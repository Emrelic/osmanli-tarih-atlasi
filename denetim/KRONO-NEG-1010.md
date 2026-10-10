# KRONO-NEG-1010 — kronoloji okuyucularının regex'i negatif (MÖ) `t:`yi okumuyor

Oturum: KRONO-NEG-1010 (UMIT, yazıcı) · 10 Ekim 2026 · model Opus.
**Taban: `origin/main` `ba636eee`** (iş `14bb94b9`te başladı; aradaki tek commit yalnız `CLAUDE.md`,
`arac/` · `data/` aynı — worktree ba636eee'ye taşındı, ölçümler orada).
Zemin: tek kullanımlık worktree `C:\atlas-kroneg` (detached), iş bitince kaldırıldı.
Commit/push/stash yok · `C:\atlas`a yazılmadı · `denetle.py`, `_sahiplik_uygula.py`, tuz dosyalarına dokunulmadı.

## Teslim
| dosya | ne | sha256 |
|---|---|---|
| `denetim/KRONO-NEG-1010.diff` | 4 dosya, +78/−7: `arac/denetle_duygu.py` · `arac/uret_duygu.py` · `arac/_yama_sinav.py` · `arac/denetle_kronoloji.py` | `baa29b1d9a6cb03d…` |
| `denetim/ARAC-KRONO-NEG-SINAV-1010.py` | sınav, 15 soru, `--taban` ZORUNLU | `3772bd387d46a86e…` |
| `denetim/KRONO-NEG-1010.md` | bu belge | |

## a) Hangi regex'ler — `arac/*.py` + `arac/*.js` + `js/*.js` taraması (`\d{4}` · `\d{1,…}` · `[0-9]{4}` · `t:` desenleri)
Kronoloji maddesinin `t:`sini REGEX ile okuyan yer (main `ba636eee`):

| # | site | desen | ne okur |
|---|---|---|---|
| R1 | `arac/_sahiplik_uygula.py:166/167` | `t:\s*"(\d{4}-\d{2}-\d{2})"` · `"t":\s*"(\d{4}-…)"` | `olaylar*.js` gün kümesi → `_GS` |
| R1b | `arac/_sahiplik_uygula.py:195` (`maddesi_var`) + `:174 _sayi` | `^\d{4}-\d{2}-\d{2}$` · `int(g[:4])` | kırılma gününü sorgu |
| R2 | `arac/_yama_sinav.py:31/32` | R1'in BİREBİR KOPYASI (`t:"(\d{4}…)"`) | `olaylar*.js` gün kümesi |
| R3 | `arac/denetle_duygu.py:14` `kayitlar` | `\{\s*t:\s*"\d{4}(?:-\d{2}){0,2}"` | madde başı (ton denetimi) |
| R4 | `arac/uret_duygu.py:47` `kayitlar` | R3'ün BİREBİR KOPYASI | madde başı — **YAZICI** (`duygu:` alanını `data/olaylar*.js`e yazar) |
| R5 | `arac/denetle_kronoloji.py:48` `GUN` (kullanım :159) | `^\d{4}-\d{2}-\d{2}$` | ② tarih biçimi (`kronoloji_*.js`) |
| J1 | `js/app.js:16576` `derinAdimlari` | `^\d{3,4}-\d{2}-\d{2}$` | `alt_kronoloji[].t` (ekran) |
| J2 | `js/d_katman.js:422` `_dGunYazi` | `^\d{3,4}-\d{2}-\d{2}$` | gösterim biçimi |

Regex OLMAYAN (ölçüldü, kapsam dışı ama tüketici sorusu için gerekli):
- **Değişmez 2'nin kronoloji evreni** (`denetle.py:1184 olaylari_yukle` → `oku_pencere`, olaylar* + kronoloji_sinir*)
  JSON ayrıştırıcıdır, regex DEĞİL ⇒ MÖ madde **okunur**. Ama `degismez2` :1919 `gun_no(o["t"])` MÖ'de
  **`ValueError: year -33 is out of range`** (AST'den çıkarılıp koşturuldu) ve çağrı :6707'de try'sız ⇒ `denetle.py`
  traceback ile **çıkış 1** (= "İHLAL VAR", oysa doğrusu 2 "ÖLÇÜLEMEDİ"). NEG-B-v2 `gun_no`yu `gun.gun`a geçirir ⇒ kapanır.
- `arac/kronoloji_say.js` (durum_tablosu sayacı) node ile okur — `\d{4}` yok.
- `arac/uret_donemler.py:719` `[\d-]+` — negatifi zaten tanır, ve betik ÖLÜ (DIZGI-TARIH-TARAMA).
- `js/rotus.js:37` `GUN` — rötuş, kronoloji değil (DIZGI'nin AÇIK-COKER'i).
- **Desen kopyaları `denetim/`de:** R1/R3 deseni **21 tek kullanımlık betikte** (grep, 3 desen birleşimi) (ör. `ODAK-KAPI-SINAV.py:170`,
  `ARAC-KRONO-SAY-SINAV-1006.py:31` ESKİ regex'i bilerek taşır, `ARAC-UYGULA4-*`, `ARAC-KITA14-*`, `EKOKUMA-0076-*`).
  Arşivdir, düzeltilmedi; yeniden koşturulursa aynı kör nokta.

## b) Tüketici ve sonuç — negatif madde okunmazsa
| # | tüketici | sonuç | sınıf |
|---|---|---|---|
| R1/R1b | `denetle_yayin yer_yama` → `_sahiplik_uygula` (YAZICI, Değişmez 2 ön kapısı) | MÖ madde gün kümesine GİRMEZ; MÖ kırılma günü regex'i tutmaz ⇒ `maddesi_var` **True** ("sorma") ⇒ kapı susar | **SESSİZ, susma yönü** |
| R2 | elle koşulan yama sınavı | MÖ gün kümede yok; ama MÖ kırılma `"1281-01-01" < g` penceresiyle zaten elenir ⇒ bugün etkisiz | sessiz, etkisiz (pencere 1281 de UFUK 1000'e göre bayat) |
| R3 | `denetle_duygu` (ton kuralı) | MÖ madde hiç görülmez ⇒ "emojisiz" ve kıyım-şenlik ihlali **sayılmaz** ⇒ "TON KURALI TEMİZ" yanlış | **SESSİZ, susma** |
| R4 | `uret_duygu` (yazıcı) | MÖ maddeye `duygu:` **yazılmaz**, sayaçta da görünmez | **SESSİZ** (eksik veri) |
| R5 | `denetle_kronoloji` ② → `kosu_yayin ⑥b` (uyarı kipi) | MÖ tam gün **"biçim ihlali"** sayılır | YÜKSEK SESLE ama YANLIŞ (yanlış pozitif) |
| J1 | `derinAdimlari` | MÖ adım "t gün hassasiyetinde değil" diye ELENİR (konsola) | yüksek sesle, yanlış |
| J2 | `_dGunYazi` | ham dizgi basılır, biçimlenmez | gösterim |
| Değ.2 | `denetle.degismez2` | ÇÖKER (`gun_no`) — çıkış 1 | yüksek sesle, yanlış kod |

## c) Çare — diff (`KRONO-NEG-1010.diff`), yalnız sahibim olabilecek 4 dosya
Her sitede desen yalnız **ADAY** bulur (`[+-]?\d{1,6}`), tarih olup olmadığına **`gun.gun`** karar verir
(yalnız İTHAL; `gun.py` değişmedi). Geçersiz dizgi eskisi gibi madde/gün sayılmaz.
- R3/R4 `kayitlar`: `MADDE_BAS = \{\s*t:\s*"([+-]?\d{1,6}(?:-\d{2}){0,2})"` + `_tarih_mi` (gun.gun).
- R2: iki desen ESKİSİNİN BİREBİR bağlamıyla (`t:"` · `"t":\s*"`), yalnız yıl kısmı değişti; `gun.gun` süzgeci.
- R5: `GUN = ^-?\d{4}-\d{2}-\d{2}$` + `_gun_bicimi` (gun.gun). ⚠️ **YENİ SERTLİK, bilinçli:** takvimde olmayan gün
  (`1453-02-30`, `1900-02-29`) artık ihlal (eskiden geçiyordu). Gerçek veride bu sınıf **0** (G4) ⇒ çıktı değişmez.

**Dokunulmayanlar — ÖNERİ (sahibine):**
1. `arac/_sahiplik_uygula.py` (başka ajanda): `:166/167` desen → `(?:t:\s*|"t":\s*)"([+-]?\d{1,6}-\d{2}-\d{2})"` +
   `gun.gun` süzgeci; `_sayi` → `gun.gun(g)` (ve tolerans `* 1.03` düşer — gerçek gün farkı); `:195` →
   `try: gun.gun(gun) except ValueError: return True` + ay/yıl hassasiyeti ayrı sorulsun; sınır `"1281"/"1923"` →
   `girdi.UFUK` ve **sayıyla**. 🔴 Ayrıca EVREN: bu araç ve R2 yalnız `olaylar*.js` okur, Değişmez 2 evreni
   `kronoloji_sinir*.js`i de içerir (`denetle.py:1193`) ⇒ sınır maddeleri gün kümesinde YOK (sıkı yön, ölçülmedi).
2. `arac/denetle.py` (tek sahip): regex YOK; `gun_no` çöküşü NEG-B-v2 ile kapanır. NEG-B inmeden ilk MÖ madde
   `denetle.py`yi traceback + çıkış 1 ile düşürür.
3. `js/app.js:16576` · `js/d_katman.js:422`: `/^-?\d{3,4}-\d{2}-\d{2}$/` + `GUN.gun` doğrulaması (NEGATIF-YIL-A'nın devamı).
4. `[:4]` ailesi (`denetle_eslesme:668` · `_kronoloji_uygula:332/337`) bu işte YOK — regex değil dilim; DIZGI-TARIH önerisi geçerli.

## d) Sınav — iki yönde, SINAV-ISIRMA ile
`arac/sinav_isirma.py` (SINAV-ISIRMA-1010.diff, worktree'ye geçici uygulandı):
```
py arac/sinav_isirma.py --taban ba636eee --diff denetim/KRONO-NEG-1010.diff \
   --sinav denetim/ARAC-KRONO-NEG-SINAV-1010.py -- --taban ba636eee
  origin/main'e göre GERİDE: 0
  A (yamasız)  çıkış 1 ·  8/15
  B (yamalı)   çıkış 0 · 15/15
  ISIRIYOR 7 (N1 N1b N2 N2b N3 N4 R5) · TESADÜF 8 (R1-R4 G1-G4) · İKİSİNDE-KALAN 0 · GERİLEME 0 · EŞLEŞMEDİ 0
  WORKTREE ikisi de kaldırıldı
```
- **N\*** sentetik `t:"-0330-10-18"` / `t:"-0538-10"` / `"t": "-0330-10-18"`: yamalıda okunur, yamasızda atlanır.
- **R\*** yanlış pozitif yok (çöp ay/gün, 3 hane, ay hassasiyeti, boş, yıl ⇒ hâlâ ihlal / madde değil); R5 yeni sertlik.
- **G\* GERİLEME 0 — gerçek evren** (184 dosya, `olaylar*` + `kronoloji_*`, veride negatif `t:` 0):
  G1/G2 `kayitlar` 6.731 madde çoklu kümesi tabanla birebir · G3 gün kümesi 1.760 birebir ·
  G4 `denetle_kronoloji` ② 8.267 madde, ihlal kümesi birebir (0).
- Ek uçtan uca: `denetle_duygu.py` yamalı/yamasız çıktı **bayt bayt aynı**; `denetle_kronoloji.py`
  `PYTHONHASHSEED=0` ile bayt bayt aynı (81 İHLAL, ikisinde de — tohumsuz fark yalnız küme sırası).
- Sınav modülleri İTHAL ETMEZ (AST: yalnız import/`re.compile`/`def`); `uret_duygu` modül düzeyinde `C:\atlas`a chdir+yazar.

## ÜÇLÜ KURAL
**① Ölçtüm:** 8 regex sitesi (6 Python, 2 JS) + 1 regex dışı çöküş (Değ.2 `gun_no`); 4'ü düzeltildi; sınav
15 soru, yamasız 8/15 → yamalı 15/15, ısıran 7, gerileme 0 (gerçek evren 6.731 / 1.760 / 8.267).
**② Bulamadım/ölçmedim:** `_sahiplik_uygula`nın kronoloji_sinir evren farkının sayısı; JS siteleri tarayıcıda
koşturulmadı; `denetim/` arşiv kopyaları yalnız grep ile sayıldı (21 dosya), tek tek okunmadı.
**③ İstiyorum:** (1) diff'in inişi (tuz dışı, data'ya dokunmaz, D2 çıktısını değiştirmez); (2) `_sahiplik_uygula`
sahibine öneri 1 — NOKTA-SUMER `s:` yazımından ÖNCE; (3) NEG-B inmeden MÖ madde yazılmasın (denetle.py çöker).

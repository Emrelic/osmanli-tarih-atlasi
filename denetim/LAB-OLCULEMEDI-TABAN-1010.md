# LAB-OLCULEMEDI-TABAN-1010 — `denetle.py`nin ölçülemeyen ve HİÇ SORMADIĞI soruları (taban)

**Tür:** YALNIZ ÖLÇÜM + statik okuma. Hüküm/tavan önerisi yok, düzeltme yok.
**Taban commit (origin/main):** `79ff492a225c124bd48a83be6868861c1d62b8bb` (79ff492a2, 2026-10-10 07:07:49 +0300, "CLAUDE §11 — ailenin UCUNCU uyesi: YORUM BIR KONTROL DEGILDIR")
**Ölçüm zamanı:** 2026-10-10T07:48:25+03:00 (worktree kuruldu) — 2026-10-10 ~08:30 (bitiş)
**Ölçüm zemini:** ayrık worktree `C:\atlas-olcutaban` (`git worktree add --detach … origin/main`), iş bitince kaldırıldı. `C:\atlas`, `data/`, `arac/` hiçbir checkout'ta yazılmadı.
**Makine:** LAB · Windows 10 · varsayılan `py` = 3.14.3 · node v22.17.1 · Git Bash.
**Yakalama:** her koşu BORU ile (`PYTHONIOENCODING=utf-8 py … 2>&1 | cat > dosya; echo ${PIPESTATUS[0]}`); çıktılarda NUL bayt yok (ölçüldü).
**Ağ:** `git fetch origin main` dışında ağ çağrısı yok. `denetle.py` ağ kullanmıyor (statik: `urllib/requests/http` kod satırı yok; yalnız `node` alt süreci).

---

## ① Çıkış kodları ve OLCULEMEDI_KOVA — üç durum

Kova mekanizması: `arac/denetle.py:5758` `OLCULEMEDI_KOVA = []`, `:5761 olculemedi(ad, sebep)` (ekrana yazmaz, yalnız `(ad, sebep[:160])` ekler); hüküm `:7443-7458` (önce liste basılır → ihlal varsa 1 → kova doluysa 2 → 0). Kovaya yazan 16 çağrı: `2sk eş-ad` :1635 · `8 körlük` :5700/:5717 · `8 atlanan hat` :5727/:5733 · `Değişmez 8` :5774/:5778 · `kaynaksızlık tavanı` :6033 · `Değişmez R` :6532/:6535 · `Değişmez 4` :6914 · `savaş senkronu` :7347 · `konum denetimi` :7396.

| durum | çıkış | süre | OLCULEMEDI_KOVA (ADIYLA) | sebep sınıfı · kanıt |
|---|---|---|---|---|
| **A — taze main** (üretilmiş dosya yok) | **2** | 104 sn | 1) `Değişmez 8` | **dosya yok** — `RuntimeError: devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı) — taze bir ağaçta beklenir; koşudan sonra oluşur` (`_d8_govde_kimlik` :5233-5236) |
| **B — §5 çaresi** (`kodla.py coz-c data data/devletler_harita.js`) | **2** | 101 sn | 1) `Değişmez 8` | **dosya yok** — `RuntimeError: donemler.js YOK (üretilmiş + gitignore'lu çıktı) …` (aynı satır, ikinci damga çifti `_D8_GOVDE_DAMGA` :5212-5215) |
| **C — §5 + `coz-c data data/donemler.js donem`** | **1** | 168 sn | 1) `Değişmez 8 körlük` | **other (veri/defter)** — `defterde olmayan 18 (hat,gün) körleşti, 11 hat: d1918-kenya-almanya-dogu-afrika, d1919-hu-cs-fiili-2, d1919-hu-cs-fiili-3, d1919-pl-ro-fiili, d1923-pl-ro …` (:5717) |

- A→B: **hiçbir soru ölçülebilir olmadı.** Kova adı aynı (`Değişmez 8`), yalnız sebep `devletler_harita.js` → `donemler.js` değişti.
- 🔴 **`CLAUDE.md §5`in çaresi EKSİK** (ölçüldü): §5 yalnız `devletler_harita.js`i çözdürüyor; D8 `_D8_GOVDE_DAMGA` (:5212) İKİ dosya ister (`devletler_harita.js`↔`__DP_SHA`, `donemler.js`↔`__PR_SHA`) ve `_D8Govde.__init__` (:5256-5258) üçüncü olarak `bolgeler.js` okur (takipli, var). Eksik komut `.gitignore:41`de yazılı: `py arac/kodla.py coz-c data data/donemler.js donem`. §9'daki elle sıra da yalnız "`coz-c`" diyor, hedef belirtmiyor.
- B→C: `Değişmez 8` ölçülebilir oldu (8a/8b/8k/8m koştu); yerine **`Değişmez 8 körlük`** geldi ve **ilk kez İHLAL** çıktı → çıkış 1.
- Bu makinede bağımlılık kaynaklı ölçülemezlik **YOK**: `konum denetimi` ve D8 shapely ile gerçekten koştu (A'da da konum `✓ 0`). API değişti / ağ yok sınıfına düşen soru **0**.

### Değişmez değerleri — önce/sonra (A ↔ C; B, D8 satırı dışında A ile birebir)
Aşağıdaki satırlar üç koşuda **BİREBİR AYNI** (diff ölçüldü):

| soru | değer |
|---|---|
| yerleşim / madde | 4300 yerleşim · 2223 kronoloji maddesi · `! yerleşim sayısı beklenenden farklı (4300 ≠ 4299) — sadece bilgi` |
| Değişmez 1 | ✓ 309 sahipsiz (beklenen 309) |
| Değişmez 1c | ✓ sahipsiz+BELGESİZ 4 (tavan 4) · belgeli 305 |
| Değişmez 1b | ✓ BEYANSIZ boşluk 0 · beyanlı 7/7 |
| Boşluk cinsi | ✓ cinssiz 0 |
| Değişmez 2 | ✓ 628 kırılma, 0 açık · `! kırılma sayısı beklenenden farklı (628 ≠ 623) — sadece bilgi` |
| Değişmez 2s | ✓ 1805 · 193 AÇIK (tavan 193) · 793 KAPSAM DIŞI · 228 YIL-TEMSİLÎ (⚠️ tavan 151 AŞILDI, ihlal sayılmıyor) |
| Değişmez 2sk | 🧊 4237 kapalı = 2122 YER + 2115 TARAF · yalnız-taraf görünür+maskeli 2265 (tavan 2265) · eş-ad ÖLÇÜLEMEDİ 0 |
| Değişmez 2i | ✓ 171 · 1 açık (tavan 1) |
| Değişmez 2t | ✓ 13 (tavan 13) |
| Sayaç (D3) | · 505 `m:`/egemen uyuşmazlığı — tavan yok |
| Değişmez 3z | · zamansız 505 · zamanlı 65 · gerçek `kd:` 418 |
| Değişmez 4 / 4c / 4d / 4s | ✓ 0 / 118 (118) / 325 (325) / 2 (2) |
| Değişmez 5 / 5a-muaf | ✓ 0 / 2 (tavan 2) · 5b i 149 · 5c i 2449 |
| Değişmez 7 | 🧊 800 sorgusuz enklav (beklenen 731 — 69 aşım, KAMPANYA_DONDURMA ile ihlal sayılmıyor) |
| dönem sağlığı | ✓ 0/0/0 |
| kaynaksız `s:` | ✓ 1841 (tavan 1930) · kayıt-kaynaksız 2301 (2301) · ⚠️ TAVAN GEVŞEK |
| mükerrer madde | ✓ 95 (≤95) |
| ölü istisna | ✓ 0 / 52 |
| savaş senkronu | i 165/174 |
| zincir_kaynagi | i 0 beyan |
| Değişmez R | ✓ 0 kayıt |
| konum | ✓ 0 maske dışı · ⚠️ SINIRDA 8 göl noktası |

Yalnız C'de değişen (D8):

| soru | A | B | C |
|---|---|---|---|
| Değişmez 8a | ÖLÇÜLEMEDİ | ÖLÇÜLEMEDİ | **✗ 1517 birim (tavan 1508)** · 710 (hat,gün) · gövde damgası `2026-10-10 07:51 · uret_petek 108ec62b` |
| Değişmez 8b | ÖLÇÜLEMEDİ | ÖLÇÜLEMEDİ | ✓ 82 (tavan 82) |
| Değişmez 8k | — | — | **✗** 78 TAM KÖR · 22 yarım · 178 (hat,gün) · defter 172 · YENİ 18 (hat,gün)/11 hat · D/E/F sınıfı tam kör **49** |
| Değişmez 8m | — | — | ✓ 450 hat = 366 + 78 + 6 atlanan + 0 |
| ayrı kovalar | — | — | C/YOK taşması 896 · YENİ KAPSAM 2 hat/4 birim (tavana katılmadı) · 8a YENİ 15+ (ör. `d1829-osm-rus-1` Hanak/Posof, `d1913-osm-ir-1` Şeyhrumi, `d1918-fr-de-isgal` Saarbrücken, `d1919-hu-cs-fiili-1` Bratislava) · 8b YENİ `Yaş|1877-05-08` |

⚠️ **Teşhis YOK, yalnız ölçüm:** C'deki gövde `KOŞU 21` (`14174ef7`, 7 Ekim) mahsulü; gövdenin motor parmak izi `108ec62b`, bugünkü `uret_petek.py` sha256 önü `09dd253a` (son değişiklik `02f337288`, 10 Ekim 00:38). Yani D8 bugünkü D hatlarını **3 gün eski gövdeye** karşı ölçüyor; 8a'nın +9'u veri mi gövde mi — **ölçülemedi** (karşı-olgusal gövde koşulmadı).

---

## ② Üretilmiş dosyalar — taban commit + boyut + sha256 (ÖNCE/SONRA kıyası için)

Taban: `79ff492a225c124bd48a83be6868861c1d62b8bb`. "son commit" = `git log -1 -- <yol>`.

| dosya | durum | bayt | sha256 | son commit |
|---|---|---|---|---|
| `data/devletler_harita.js` | ÜRETİLDİ (`coz-c`, 31 sn, 172,69 MB) · gitignore | 181.080.905 | `82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c` | (takipsiz; yol geçmişi `f312269b9`) |
| `data/donemler.js` | ÜRETİLDİ (`coz-c … donem`, 11 sn, 58,46 MB) · gitignore | 61.296.467 | `5469235ff7b52b6335b962c206550aedd3ce2163ce01d140af4b6eb661ec49e7` | (takipsiz; yol geçmişi `262afb0ce`) |
| `data/devlet_harita_ust.js` | TAKİPLİ kaynak | 3.148.869 | `925b2483dd8c8357879481e44cdfaed5123db849cbc35ba9b64b10405b865faa` | `14174ef7d` |
| `data/devlet_parcalar.js` | TAKİPLİ kaynak (havuz + `__DP_SHA`) | 34.261.109 | `60103c5a88e4ea25ed964b6cca8c95392b2c7752f6552c749c03d6d1b1266624` | `14174ef7d` |
| `data/donemler_ust.js` | TAKİPLİ kaynak | 1.178.784 | `e39bb34435923c01b814a821eb492673bd228f88285f136a8aa8f1309fea4715` | `14174ef7d` |
| `data/donem_parcalar.js` | TAKİPLİ kaynak (havuz + `__PR_SHA`) | 11.143.551 | `041feb0aa109edc32ffd667172e05b7d65b7655b49528e8a0c8c46dc0a2b8bce` | `14174ef7d` |
| `data/bolgeler.js` | TAKİPLİ (D8 okur) | 480.625 | `443aa790e9c937fcd715449b27b674140d780b89f80e7b0edac23cdd5255e19d` | `14174ef7d` |

- Gidiş-dönüş tanığı: çözülen `devletler_harita.js` sha256'sı `devlet_parcalar.js`teki `window.__DP_SHA` ile **birebir aynı**; `donemler.js` ↔ `window.__PR_SHA` **birebir aynı** (ölçüldü). Yani D8'in kimlik kapısı (`_d8_govde_kimlik`) iki dosyada da geçti.
- Kıyas: `CLAUDE.md §5`teki iki eski kopya 93.694.456 (EMRELIC, 4 Ekim) ve 180.999.059 (UMIT) bayt; bugün main'den çözülen **181.080.905** — ikisinden de farklı.

---

## ③ `ARAC-OLCULEMEDI-KAPI-SINAV-1004.py` — bugünkü main'de

Araç dosya YAZMIYOR (statik: `open` yalnız okuma, tek alt süreç `denetle.py`); her koşudan önce/sonra `git status --porcelain --ignored` alındı — fark yok (yalnız `!! arac/__pycache__/` + o anki çözülmüş dosyalar). Üç ayrı diskte durumla koşuldu:

| disk durumu | çıkış | OK | ATLA | HATA | not |
|---|---|---|---|---|---|
| **A — taze main** (çözülmüş dosya yok) | **0** | 12/12 | 0 | 0 | canlı kirli yön GERÇEKTEN koştu: alt `denetle.py` **2** döndü (116 sn) |
| **B — yalnız `devletler_harita.js`** (§5 çaresi) | **0** | 8 | 4 (4, 4b, 4c, 4d) | 0 | ⚠️ ATLA metni *"Değişmez 8 ölçülebiliyor"* diyor — **YANLIŞ**: bu durumda `denetle.py` D8'i `donemler.js YOK` ile ölçemiyor (① B satırı, ölçüldü) |
| **C — ikisi de çözülmüş** | **0** | 8 | 4 | 0 | aynı ATLA; bu durumda D8 gerçekten ölçülüyor ama `denetle.py` **1** veriyor |

Soru bazında (A): 1 ✓ kovaya ekliyor (0→1) · 1b ✓ ADIYLA · 2 ✓ (basan metin 19 · kaydeden çağrı 16; eşik ≥4) · 3 ✓ sıra (yaz 878 < ihlal 1227 < iki 1384 < temiz 1400) · 3b ✓ · 4 ✓ çıkış 2 · 4b ✓ · 4c ✓ · 4d ✓ · 5 ✓ · 5b ✓ · 6 ✓ iz yok.

**Bugünkü main'de GEÇİYOR** — ama ölçülen üç zayıflık (sınavın kendisi hakkında, statik + ölçüm):
1. **Sınav, kendi atladığı yönü TEMİZ sayıyor.** B ve C'de 4 soru ATLA, sonuç `SONUÇ: temiz` + çıkış **0** (ölçüldü). Bu, sınadığı kuralın (*ölçülemedi ≠ temiz*) birebir ihlali — `ARAC-OLCULEMEDI-KAPI-SINAV-1004.py:75-78`.
2. **Ön koşul tek dosyaya bakıyor** (`:74` yalnız `devletler_harita.js`). D8'in iki damga çifti var (`denetle.py:5212-5215`); §5 çaresini uygulamış bir makinede sınav canlı yönü atlar ve "ölçülebiliyor" der — ölçülemiyor.
3. **"İki yönde" iddiasının temiz yönü canlı değil:** 5/5b yalnız kaynak metinde regex (`:96-100`). Bugün canlı temiz yön zaten kurulamıyor: tam veriyle (C) `denetle.py` **1** veriyor.
4. Soru 2'nin eşiği (≥4) bugünkü 16 çağrının çok altında — bir dalın kovaya yazmayı bırakması bu soruyu düşürmez (koddan).

---

## ④ Bu makinede (LAB) kurulu kütüphaneler — hiçbir şey kurulmadı

`py -0p`: `-V:3.14 *` `C:\Users\ikizler1\AppData\Local\Python\pythoncore-3.14-64\python.exe` · `-V:3.13` `C:\Users\ikizler1\AppData\Local\Programs\Python\Python313\python.exe` (3.12/3.11 yok).

| modül | `py` (= `py -3.14`, 3.14.3) | `py -3.13` (3.13.7) |
|---|---|---|
| shapely | **2.1.2** | YOK |
| numpy | 2.5.3 | 2.2.6 |
| pyproj | 3.8.0 | YOK |
| rasterio | YOK | YOK |
| scipy · geopandas · fiona | YOK | YOK |
| PIL | YOK | 11.3.0 |
| matplotlib | YOK | 3.10.8 |
| requests | YOK | 2.32.5 |
| lxml | YOK | 6.1.1 |
| node | v22.17.1 | |

`denetle.py`nin üçüncü taraf ihtiyacı (statik): `shapely` + `numpy` (:4653, :5253, :5367-5372, :6392) ve `node` (:2652, :5124, :6308). rasterio İSTEMİYOR. ⇒ Varsayılan `py` ile bütün sorular koşabilir; **`py -3.13` ile koşulsa** D8 + konum `ImportError` ile kovaya düşerdi (ölçülmedi, koddan).

---

## ⑤ 🔴 `denetle.py`nin BUGÜN HİÇ SORMADIĞI sorular (statik okuma; koşmadı — aksi belirtilmedikçe)

Yöntem: `ast` ile `denetle.py`deki 127 def/class toplandı, `main()` + modül düzeyinden ulaşılabilirlik grafiği kuruldu (Name + Attribute + tanımlayıcı biçimli dizgi sabitleri = cömert ulaşım; betik `scratchpad/olcutaban/ast_ulasim.py`). Bütün `BEKLENEN_*` sabitlerinin (29 ad) kullanıldığı satırlar okunup **çıkış koduna bağlanıyor mu** diye tek tek bakıldı. Yorum taraması `kontrol ed|denetlen|sınanıyor|doğrulanıyor|yakalar|reddeder|bloke eder|assert` ile yapıldı; isabetler elle okundu.

### (a) Çağıranı olmayan kapı — kapı VAR, hiç ÇAĞRILMIYOR

| # | ad | yer | kanıt | güven |
|---|---|---|---|---|
| a1 | `_d8_sahip(y, gun)` | `arac/denetle.py:5344` | AST: anılma 0 (Name/Attribute), `main`'den ulaşılamıyor. Docstring "Yerleşimin o günkü DE JURE sahibi (motorun gördüğü; `isg:` HARİÇ)". D8 bu soruyu başka yoldan soruyor olabilir — **bu işlevin sorusu bugün hiçbir yerde bu işlevle sorulmuyor**. | yüksek (statik) |
| a2 | **GÖVDE ÇAKIŞMASI** sorusu | `denetim/GOVDE-CAKISMA-0079-olc.py` (+ `-asama/-ciz/-yama-sina/-yama-uret`) | `denetle.py`de iki gövdenin (yabancı `devletler_harita.js` ↔ `donemler.js`) üst üste binmesini ölçen kod YOK: `çakış/intersects` isabetleri yalnız dönem kaydı çakışması (`donem_sagligi` :4796-4846), rötuş R8 (:6514-6518) ve kara/bölge zarfı. `arac/` içinde bu betiği çağıran yok (yalnız `uret_petek.py:6717` yorumu "…ile ölçülür"). `CLAUDE.md §3` (Değişmez 3 notu) kusurun yerini "donemler.js + devletler_harita.js gövdeleri" diye tarif ediyor ⇒ **tanımlı kusur sınıfı, kapısız**. | yüksek (statik) |
| a3 | **EKLEYİCİ KAPI** ölçüsü | `arac/olc_ekleyici.py` | `arac/*.py` içinde çağıran yok — yalnız iki yorum (`nicin_bos.py:42`, `uret_petek.py:6166`). Kendi docstring'i "kapıyı YAZMADAN ÖNCE etkisini ölçer … BÜYÜKLÜK MERTEBESİ ölçümü" diyor; yani tasarımı gereği el aracı, ama A/B/C boşluk sınıfı `denetle.py`de hiç sorulmuyor. | yüksek (statik) |
| a4 | `--defter-yaz` | `:6554` tanım · `:6851` | argparse'ta tanımlı ama `args.defter_yaz` hiç okunmuyor; tüketici `"--defter-yaz" in sys.argv` (:6851). Kapı değil, bilgi: argparse'ın ön-ek kısaltması (`--defter`) burada **sessizce etkisiz** kalır (koddan; koşulmadı). | orta |

`main()` doğrudan 52 ad çağırıyor; öteki `degismez*`/`*_rapor` işlevlerinin hepsi ulaşılabilir (AST). Yani `denetle.py` içinde ölü kapı yalnız a1; ölü kapı ailesinin asıl üyeleri (a2, a3) dosyanın DIŞINDA.

### (b) Denetim ≠ soruyu sorar — kapı KOŞUYOR, adının/basılan metnin dediği soruyu SORMUYOR

| # | ad | yer | iddia ↔ kod | güven |
|---|---|---|---|---|
| b1 | **Değişmez 3** | `:6866-6884` | `CLAUDE.md §3` ve `MIMARI.md:286` onu DEĞİŞMEZ sayar; kod onu **sayaç** yapmış: "✗ YOK, tavan YOK, çıkış koduna etki YOK" (yorum :6878). Bugün 505. Değişmez 3z (:6889-6905) de `gercek_kd > 0` iken yalnız bilgi. ⇒ "tarih × yerleşim × petek × bölge çelişmez" sorusu bugün **hiç bir kapıda sorulmuyor**. (Bilinçli karar; ama belge değişmez diyor.) | yüksek |
| b2 | **2sk tavanı** `BEKLENEN_2S_YALNIZ_TARAF=2265` | `:1801`, `:6748-6785` | Satır başlığı "(tavan 2265)" basıyor ve `:6777` **"Tavan yalnız GERİLEMEYİ bloke eder"** diye basıyor; kod aşımda yalnız `⚠️ TAVAN AŞILDI … İhlal değil` basar, `ihlal=True` YOK. ⇒ basılan cümle bloke ettiğini söylüyor, kod bloke etmiyor. | yüksek |
| b3 | **YIL-TEMSİLÎ BORÇ tavanı** `BEKLENEN_2S_YIL_BORC=151` | `:691`, `:6786-6789` | **Bugün AŞILMIŞ: 228 > 151** (ölçüldü, üç koşuda) ve hüküm etkilenmiyor ("ihlal DEĞİL"). `§3.4-1/3` tavan "gerilemeyi bloke eder" der; bu tavan bloke etmeyen bir uyarı. `§1.5` satırı "228 YIL-TEMSİLÎ BORÇ" der, tavanı ve aşımı söylemez. | yüksek (ölçüldü) |
| b4 | **Değişmez 7** `BEKLENEN_ENKLAV_SORGU=731` | `:3472-3473`, `:7140-7147` | `KAMPANYA_DONDURMA = True` ⇒ **800 > 731 (69 aşım)** ihlal sayılmıyor (ölçüldü). Gerekçeli ve basılıyor; ama bugün "sorgusuz enklav artmasın" sorusu kapı olarak sorulmuyor. | yüksek (ölçüldü) |
| b5 | `BEKLENEN_YERLESIM=4299` · `BEKLENEN_KIRILMA=623` | `:76`/`:6585` · `:368`/`:6713` | Ad "BEKLENEN_" ama ikisi de "sadece bilgi"; bugün ikisi de tutmuyor (4300 ≠ 4299 · 628 ≠ 623, ölçüldü). `§3.4-0/3`'ün "tavan yazıldığı anda ölçülür / iyileşince iner" kuralının dışında kalmış bayat sabitler. | yüksek (ölçüldü) |
| b6 | `BEKLENEN_VERILI_DELIK = None` | `:1277`, `:6600-6606` | "None = TAVAN YAZILMADI ⇒ yalnız bilgi". Bugün **79 verili devir deliği** ("GERÇEK borç, kovaya girmez" — çıktı satır 12) hükme girmiyor. | yüksek (ölçüldü) |
| b7 | `BEKLENEN_BAYAT_KOPYA = None` + `zincir_kaynagi` | `:6145`, `:6244-6253` | Tavan yazılmamış ve beyan 0 ⇒ "bayat kopya" sorusu **boş kümede** soruluyor; araç kendisi "serbest metin kopyaları bu kapıya GÖRÜNMEZ" basıyor. Boş küme her öngörüyü doğrular. | yüksek |
| b8 | **D8 gövde damgası** | `:5259-5264` | Damga "gövde dosyasının yazıldığı an" = `os.path.getmtime(devletler_harita.js)`. `coz-c` sonrası bu, **çözme anıdır**: çıktı `gövde 2026-10-10 07:51` dedi, gövde ise KOŞU 21 (7 Ekim) mahsulü. ⇒ satır gövdenin tazeliğini soruyor gibi görünüyor, yerel dosyanın mtime'ını söylüyor. (Motor parmak izi `108ec62b` doğru bilgi taşıyor.) | yüksek (ölçüldü) |
| b9 | **Değişmez 8k — D/E/F tam kör hatlar** | `:5703-5706` | Araç kendisi basıyor: "D8_SINIF tam kör hat: **49** — bu hatlarda taşma HİÇ SORULMADI (taşması 0 görünür)". Defterdeki körlük ihlal/ölçülemedi değil; yalnız YENİ körleşme kovaya düşer. Adlar aşağıda (⑤-liste). | yüksek (ölçüldü) |
| b10 | **Değişmez 5c başlığı** | çıktı satırı "Değişmez 5c i 2449 nokta: `kur:` HİÇ YOK ve 1281'de ZATEN SAHİPLİ" | `CLAUDE.md §3.4-6` bu başlığın **80 kayıt için YANLIŞ** olduğunu yazıyor; bugünkü main hâlâ aynı başlığı basıyor (ölçüldü). "Yanlış ad soruyu KAPATIR." | orta (80'i yeniden saymadım) |
| b11 | **isg: egemen dönemi işgal altında başlıyor** | D7 çıktısı | "176 egemen dönemi işgal altında başlıyor (**sorulmadı**)" — araç beyanı. | yüksek (araç basıyor) |
| b12 | **Değişmez R — C hukukî hat** | `:6542` | "C hukukî hat SORULMADI (kontrolde K7)"; bugün 0 rötuş kaydı ⇒ R'nin geometri kolu hiç yüklenmiyor (:6387-6389), soru boş kümede. | yüksek |
| b13 | **Konum — SINIRDA göl noktaları** | konum satırı | 8 nokta ham göl poligonunun içinde (Detroit, Hantayka, Fort Rae, Ennadai, Big Trout Lake, Nichicun, …) — "ihlal DEĞİL". Sadeleştirilmiş göle karşı soruluyor, ham göle karşı değil. | yüksek (araç basıyor) |
| b14 | **Yakalanmayan istisna ⇒ çıkış 1** | `main()` :6551-7458 | `main` düzeyinde tek `try` savaş senkronunda (:7342). `girdi.yukle()`nin `AD ÇAKIŞMASI` `ValueError`'ı (`girdi.py:620-624`) ya da `degismez1/2/5/7`deki herhangi bir çöküş Python'un **traceback çıkışı 1**'ini verir — bu, "İHLAL VAR" ile aynı kod; ölçülemedi listesi de basılmaz. Üç kodun ayrımı yalnız try'lı dallarda geçerli. | orta-yüksek (statik; çöküş koşulmadı) |
| b15 | **Devlet var, yeri yanlış** | `§3.5` | `4c/4d` künye penceresini sorar, "oraya hiç ait miydi"yi sormaz — belge bunu söylüyor; `denetle.py`de menzil (boylam/kol) kapısı yok (statik grep). | yüksek |

### (c) Yorum ≠ kontrol — kapı YOK ama VARMIŞ gibi YAZILI

| # | ad | yer | kanıt | güven |
|---|---|---|---|---|
| c1 | **Modül docstring'i — Değişmez 3 çıkış kodu** | `arac/denetle.py:10`, `:16-17` | "Değişmez 3 — dört boyut çelişmez (bilinen borç, **sayı artmamalı**)" ve "İhlal varsa çıkış kodu sıfırdan farklıdır (… **Değişmez 3: çelişki > beklenen üst sınır**)". Kod: üst sınır sabiti `BEKLENEN_CELISKI_UST_SINIR` **silinmiş** (`:852` yorumu bunu söylüyor), `:6878` "çıkış koduna etki YOK". Docstring ayrıca "üç değişmez" diyor; bugün 20+ soru var. | yüksek |
| c2 | **2sk "Tavan yalnız GERİLEMEYİ bloke eder"** | `:6777` (basılan metin) | b2 ile aynı satır: metin kontrol iddia ediyor, kod yok. Çıktıya giren bir "yorum". | yüksek |
| c3 | 🔁 **`girdi.py:108` — UMIT bulgusu bugünkü main'de TUTMUYOR** | `arac/girdi.py:108-109` ↔ `:615-624` | Yorum: "aynı ad iki dosyada varsa … HATA verilmesi gerekir (**aşağıda kontrol ediliyor**)". Kod VAR: `yukle()` :620-624 `if y["ad"] in nereden: raise ValueError("AD ÇAKIŞMASI …")` — `git log -L` ile Temmuz 2026'dan beri (`35436fe90`, `93dc970b8`); `denetle.py:1111` `girdi.yukle()`yi çağırıyor. ⇒ **TAM-EŞİT ad için yorum doğrudur.** UMIT'in 37 çakışması NORMALLEŞTİRİLMİŞ adlarda (`Kudüs/Kudus`, `Roma`/`Roma (Queensland)`) — o soru gerçekten sorulmuyor, ama bu (c) değil **(b)** sınıfıdır: kapı koşuyor, "normalleştirilmiş ad tekil mi" sorusunu sormuyor. `CLAUDE.md §11`deki "arkasında KOD YOK" cümlesi bu taban için **yanlış**. | yüksek (statik; ValueError yolu koşulmadı) |

Taranan öteki iddialar **kod ile tutuyor** (bakıldı): `:5854-5856` "`--kaynak-tavan-indir` … REDDEDER" → `:6092-6100` gerçekten reddediyor · `:5206` "raise … ÖLÇÜLEMEDİ'ye ve çıkış 2'ye düşer" → `:5776-5779` · `:7390` konum dalı → `:7396` kovaya yazıyor · `:5616` "defterde olmayan körleşme `olculemedi`" → `:5717` (C koşusunda gerçekten tetiklendi).

### `CLAUDE.md §1.5` / §3 / MIMARI'de değişmez olarak anılıp `denetle.py`de kapısı olmayanlar

- ⚠️ Görevde "§1.5 GÖVDE-ÇAKIŞMA ve EKLEYİCİ KAPI'yı ölçülemedi diye listeliyor" deniyor — bu tabandaki `CLAUDE.md §1.5` tablosunda **ikisi de GEÇMİYOR** (grep: `CLAUDE.md`de `GOVDE-CAKISMA`/`EKLEYİCİ` 0 isabet). Kapısızlıkları yukarıda a2/a3 olarak koddan ölçüldü.
- **Değişmez 3** (§3, MIMARI §4) — b1/c1: sayaç, kapı değil.
- **Gövde çakışması / üst üste binme** (§3 Değişmez 3 notu) — a2.
- **§3.5 "denetimin görmediği sınıflar"**: hayalet devlet → bugün Değişmez 4 SORUYOR (kapandı) · "devlet var, yeri yanlış" → b15 · künye aşımının üç sınıfı (sınıflandırma) → kapı yok · ters yön → kapı yok · `__BOSLUK__` haritadaki delik → kapı yok (araç yalnız sayar).

### ⑤-liste — D8'de taşması HİÇ SORULMAYAN tam kör hatlar

Kaynak: C durumunda `py arac/denetle.py --ayrinti` (çıkış 1, ölçüldü) `8k TAM KÖR` satırları. Toplam **78** = D 7 + E 42 (**tavan sınıfı 49**) + C 29. Bu hatlarda 8a taşması **hiç sorulmadı**, 8a sayısına 0 olarak girer.

- **D (7):** d1915-angola-guneyafrika-isgal · d1915-becuanaland-guneyafrika-isgal · d1915-namrod-guneyafrika-isgal · d1918-it-ch-isgal · d1919-pl-ro-fiili · d1923-oky-yenigine-guney-britanya-koruma · d1923-oky-yenigine-orta-britanya-koruma
- **E (42):** d1812-ru-bg-prut · d1856-ru-bg-prut-kuzey · d1893-hab-ch-2 · d1893-hab-ch-vinschgau · d1906-filistin-misir-hidivlik · d1910-libya-cezayir-gadames-osmanli · d1910-libya-tunus-osmanli · d1918-kenya-almanya-dogu-afrika · d1923-becuanaland-guney-afrika · d1923-becuanaland-guneybati-afrika-caprivi · d1923-ch-at-2 · d1923-guneybati-afrika-kuzey-rodezya-caprivi-dogu · d1923-guneyrodezya-guney-afrika · d1923-hd-en-4-20-1…5 (5) · d1923-hd-en-sebatik · d1923-hn-ni-bati · d1923-ih-fc-mekong · d1923-ingiliz-italyan-somalisi · d1923-it-ch-saintgermain · d1923-kenya-tanganyika · d1923-libya-cezayir-gadames · d1923-libya-tunus · d1923-mozambik-guney-afrika · d1923-ni-cr-1 · d1923-ni-cr-2 · d1923-oky-yenigine-guney-avustralya · d1923-oky-yenigine-guney-britanya · d1923-oky-yenigine-orta-avustralya · d1923-oky-yenigine-orta-britanya · d1923-pl-ro · g2-hd-en-sebatik-1891 · g3-bg-ro-dobruca-p1…p3 (3) · g4-bna-rus-141 · g4-bna-us-141 · g4-bna-us-bati-2 · g4-bna-us-prairie
- **C (29, tavan dışı):** d1899-sudan-misir-kavalali · d1923-ar-cl-4 · d1923-br-sr · d1923-co-br-kuzey-1 · d1923-gt-bh · d1923-hd-en-suayrimi-1…6 (6) · d1923-hn-ni-dogu · d1923-mx-bh · d1923-si-ih-2 · d1923-sscb-cn-dogu-ussuri · d1923-sudan-libya · d1923-us-cu-guantanamo-1 · g2-hd-en-4-20-1891-1…5 (5) · g2-sscb-cn-dogu-ussuri-gecici · g2-sscb-cn-dogu-ussuri-rusya · g3-bg-ro-tuna-p1…p3 (3) · g3-sscb-cn-dogu-ussuri-rusya-qing · gdasya-si-ih-pakchan-1868
- **8m ATLANAN (6, döngüde hiç ölçülmedi — "sol_taraf BOŞ: hangi yaka hangi devlet ÖLÇÜLEMEDİ"):** d1923-ca-us-bati-1 · g4-bna-us-bati-1 · d1923-us-cu-guantanamo-2 · d1923-necid-kuveyt-tarafsiz-guney-C · d1923-ir-hind-BILINMIYOR · d1923-necid-kuveyt-tarafsiz-bati

---

## ⑥ Ham çıktılar (scratch, commitlenmedi)
`C:\Users\ikizler1\AppData\Local\Temp\claude\C--eczane-rc\03b0eb2d-7a4e-5167-bff9-a5ec00c2e637\scratchpad\olcutaban\` — `denetle_once.txt` (A) · `denetle_sonra.txt` (B) · `denetle_sonra2.txt` (C) · `denetle_sonra2_ayrinti.txt` (C, `--ayrinti`) · `sinav_A.txt` / `sinav_B.txt` / `sinav_A_ikisi_var.txt` (C) · `sha.tsv` · `ast_ulasim.py` + `ast_denetle.txt` · `kodla_cozc*.txt`.

## ⑦ Temizlik
Worktree yalnız gitignore'lu çözülmüş dosyaları (`data/devletler_harita.js`, `data/donemler.js`) ve `arac/__pycache__/` içerdi; takipli dosyada değişiklik **0** (`git status --porcelain` boş, her adımda bakıldı). Çözülmüş dosyalar silindi, worktree `git worktree remove --force` ile kaldırıldı (`--force` yalnız gitignore'lu `__pycache__` yüzünden; son `git status --porcelain` boştu). Not: iş sırasında `C:\atlas`ın HEAD'i `2f17e04da` → `1fe320ad0` oldu — bu ölçümün yaptığı bir şey değil (o checkout'a yazılmadı).

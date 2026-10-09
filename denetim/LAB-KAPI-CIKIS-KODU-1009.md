# LAB-KAPI-CIKIS-KODU-1009 — `denetim/` sınav araçlarında çıkış kodu ölçümü

> 🕰 10 Ekim güncellemesi: UMIT ab9aa957 + 60b7731c ile 7 aracın çıkış kodu düzeltildi; aşağıdaki işaretler o tarihten. Ölçüm değerleri değiştirilmedi — yalnız durum notu eklendi.

**Tür:** YALNIZ ÖLÇÜM. Hüküm yok, düzeltme yok. Hiçbir araca dokunulmadı.
**Ölçülen ağaç:** `origin/main` = **`191dc74039d54b063b1772dd6fa52482777fe93f`** (191dc7403, "KOSU SURESI DUZELTILDI …")
— ayrık (detached) ölçüm worktree'si `C:\atlas-kapi-olcum`'de; iş bitince kaldırıldı.
**Makine:** Windows 10, Python 3.14.3, Git Bash. Tarih 2026-10-09.
**Yakalama:** her çıktı BORU ile alındı (`… 2>&1 | cat > dosya; echo ${PIPESTATUS[0]}`), `> dosya` yönlendirmesi kullanılmadı.
Çıkış kodu her zaman `PIPESTATUS[0]`'dan (Python'un kodu; `cat`'in değil). Dinamik koşucu `subprocess.run(stdout=PIPE)` kullandı.

Bağlam: §3 "otomasyon cümleyi okumaz, çıkış kodunu okur". Bu ölçüm o cümlenin sınav araçlarında tutup tutmadığını sayar.

---

## ① Ana kapılar

| araç | çıkış kodu (ölçüldü) | basılan hüküm cümlesi | cümle ↔ kod | süre |
|---|---|---|---|---|
| `py arac/denetle.py` | **2** | `SONUÇ: TEMİZ DEĞİL — eksik ölçüm, çıkış kodu 2` | **uyuşuyor** | 102 sn |
| `py arac/denetle_yayin.py` | **1** | `SONUÇ: İHLAL VAR — çıkış kodu 1` | **uyuşuyor** | 350 sn |

- `denetle.py`: tek ölçülemeyen soru **Değişmez 8** (`RuntimeError: devletler_harita.js YOK (üretilmiş + gitignore'lu çıktı)`). Çıktıda `✗` satırı yok. Kod yolu: `arac/denetle.py` L7287-7297 (ihlal→1, OLCULEMEDI_KOVA→2, yoksa 0).
  Çıktının başında NUL bayt yok (`od -c` ile bakıldı).
- `denetle_yayin.py`: sunucu, ağ, üretim GEREKMEDİ (yalnız `git`, `node --check`, dosya okuma). Tamamı koştu. Kodu 1 yapan `✗` satırları: damga artışı (2 commit damgasız), üretim izi (bayat 1), SEKME SESSİZ GERİLEDİ (1), SEKME OKUNMAYAN GERİLEDİ (2). `paketle.sina()` içeriden çağrıldı: `✓ paketleme TAZE`.
  - **Ölçüm notu (hüküm değil):** `denetle_yayin` 0/1 ikilidir; `2` (ölçülemedi) kodu YOK. Bu koşuda `!  yayın tazeliği ÖLÇÜLEMEDİ: donemler.js YOK` ve `⚠ AYRICA 3 girdi ÖLÇÜLEMEDİ` satırları basıldı. Kod L1876-1880 yorumuna göre `iz_kosu`/`iz_olculemedi` "BİLEREK" bloke etmiyor (Emre onayı, 1 Ekim). Yani başka ihlal olmasaydı aynı ÖLÇÜLEMEDİ satırlarıyla `SONUÇ: temiz` / exit 0 basılırdı — bu ölçülmedi, koddan okundu.

---

## ② `denetim/` sınav araçları — çıkış kodu doğru mu?

### 2.0 Kapsam ve yöntem
- **Aday kümesi (226 dosya, `denetim/**/*.py`):** adında `SINA|SINAV|TEST|KAPI` geçen · ya da kaynağında `--sina`/`--sinav`/`"sina"` kipi olan · ya da hem başarısızlık işareti (✗/BAYAT/KALDI/GEÇMEDİ/…) hem `n/m` sayımı basan. `denetim/` altında toplam 1200 `.py` var; geri kalan 974 bu ölçütlere uymadı ve taranmadı.
- **(a) Statik:** her aday AST ile tarandı: `sys.exit/exit/os._exit/raise SystemExit` çağrıları, `sys.exit(main())` ise `main`'in `return`'leri, `assert`'ler, başarısızlık basan satırlar. Şüpheli çıkanlar ELLE okundu.
- **(b) Dinamik:** dosya yazmayan (AST: `open(...,'w'/'a')`, `json.dump`, `write_text`, `makedirs`, `os.remove`… yok), ağ/sunucu/üretim/git-yazma çağırmayan adaylar SIRAYLA koşturuldu (zaman aşımı 120 sn, `PYTHONHASHSEED=0`), sınav kipi varsa o kiple. Her koşudan sonra `git status` alındı.
  - Koşulan: **72** (70 otomatik + 2 elle). Koşulmayan: **154** — 117 "dosya yazar", 23 SINAV-KOSU8 ailesi (uzun koşu/kapı/üretim çağırır), 9 üretim/git/tarayıcı çağırır, 1 ağ/sunucu, 4 sona kalan (biri `data/` yazar, biri alt komut koşturur, ikisi rapor yazar).
- **Sınır:** statik "DOGRU" = *hüküm yolunda* sıfır-dışı bir çıkış/return bulundu demektir; araçtaki HER `✗` satırının o çıkışa bağlı olduğu tek tek kanıtlanmadı. Bunun bir örneği aşağıda: `EKOKUMA-0076-A-SINA.py` ilk statik geçişte "DOGRU?" çıktı, dinamik koşu YALAN-0 olduğunu gösterdi. Ayrıca bazı araçlar `olcu_kapisi_1006` modülünü içe aktarır ve o modül kendi başına `sys.exit(2)` verebilir (statik taramada görünmez; `SINIR-D-OKYANUSYA-0077-olc.py`'de ölçüldü).

### 2.1 Bilinen iki örnek — doğrulama SONUCU: ikisi de bu sha'da tekrarlanmadı
| iddia | bu sha'da ölçülen | koddaki yol |
|---|---|---|
| `paketle.py sina` "✗ PAKET BAYAT" basıp exit 0 | paket bugün TAZE: `✓  paketleme TAZE — 30 paket, 289 kaynak, hepsi birebir`, **exit 0** (uyuşuyor). BAYAT hâli koşulamadı (üretmek `data/` yazmayı gerektirir). | `arac/paketle.py` L440 `✗  PAKET BAYAT` → L461 `return 1` → L495-496 `sys.exit(sina())` ⇒ BAYAT'ta **1** (koddan). **DOGRU (koddan).** |
| `ARAC-BAYAT-KOPYA-1008.py --sina` 10/14 basıp exit 0 | `SINAV 10/14` (4 ✗), **exit 1** | L463-469: `return 0 if n == len(s) else 1`; L482 `sys.exit(main())`. `--sina`, argparse ön-ek kısaltmasıyla `--sinav`'a eşlenir. **DOGRU (ölçüldü).** |

- `git log`: `ARAC-BAYAT-KOPYA-1008.py` tek commit'te (cefc73bb7, 2026-10-09 19:36) EKLENDİ ve `return 0 if n == len(s) else 1` satırı o ilk sürümde VAR. Aynı commit'in mesajı (② maddesi) "`--sina` 10/14 basıyor ama ÇIKIŞ 0 VERİYOR" diyor. Ölçülen kod ve ölçülen çıkış bu cümleyle uyuşmuyor.
  **Olası açıklama (ÖLÇÜLMEDİ, hipotez):** `py … | cat; echo $?` biçimi `cat`'in kodunu (0) verir; `PIPESTATUS[0]` gerekir.
- `paketle.py sina` için "exit 0" iddiasının kaynağı bu ölçümde bulunamadı.

### 2.2 YALAN-0 listesi — 21 araç (başarısızlığı basıyor, çıkış 0)
"ölçüldü" yalnızca 1'inde başarısız hâl GERÇEKTEN koşturuldu. Kalanlarda başarısızlık yolu koddan okundu; geçen hâl koşturulabildiyse o da belirtildi.

| # | araç | başarısızlık nasıl basılıyor | satır | çıkış 0 kanıtı |
|---|---|---|---|---|
| 1 | `denetim/A-OKYANUSYA-0078-alan.py` | `--sina`: "ATEŞLEMEDİ"; ardından `sys.exit()` = 0 | 76-77 | exit 0 — geçen hâl ölçüldü (exit 0 ATEŞLEDİ); kalan yol koddan |
| 2 | `denetim/A-OKYANUSYA-0078-sina.py` | "POZİTİF KONTROL … ATEŞLEMEDİ!"; hiç exit yok | 70 | exit 0 — geçen hâl ölçüldü exit 0; kalan yol koddan · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (a78 GIRDI'de, 61 nokta kendisiyle), gerileme sezicisi · ab9aa957 |
| 3 | `denetim/ARAC-BEKCI-SINAV-YARIYAZIM-0911.py` | "KALDI"; hiç exit yok | 73 | exit 0 — koşulmadı (dosya yazar); koddan |
| 4 | `denetim/ARAC-HARITA-DURUM-0074-KABARTMA-SINAV.py` | "SINAV KALDI" / "KALDI"; hiç exit yok | 86-89 | exit 0 — koddan (bir kez koştu, json yazdı, çıktı alınmadı — bkz. olay notu) · YALAN-0 → KAPANDI (canlı, bugün 0; 2 yol) · 60b7731c |
| 5 | `denetim/ARAC-KAMERIKA-0903-kunye-sina.py` | "🔴 N HATA", "🔴 ÖTMEDİ"; hiç exit yok | 94, 153 | exit 0 — geçen hâl ölçüldü exit 0; kalan yol koddan · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (46/46 reçete devletler.js'te), gerileme sezicisi · ab9aa957 |
| 6 | `denetim/ARAC-KIMLIK-SINA-0903.py` | "🔴 HIC d: YOK", "🔴 KUNYE YOK/RENK YOK" listeleri; hiç exit yok | 73, 103-104 | exit 0 — geçen hâl ölçüldü exit 0; kalan yol koddan · YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 |
| 7 | `denetim/ARAC-MUKERRER-KAPI-0930.py` | "HÂLÂ ÖTÜYOR ✗", "ÖTMEDİ ✗"; hiç exit yok | 79-80, 91 | exit 0 — koşulmadı (dosya yazar); koddan |
| 8 | `denetim/ARAC-OMUR-KAPISI-0903.py` | "🔴 KÜNYE DOĞMADAN ÖNCE/ÖLDÜKTEN SONRA … : N"; hiç exit yok | 70, 75 | exit 0 — koşuldu exit 0; N>0 yolu koddan |
| 9 | `denetim/ARAC-TASIMA-ON-SINAV-0905.py` | "🔴 data/'de VAR", "🔴 window.X N dosya"; hiç exit yok | 51, 68, 78 | exit 0 — koşuldu exit 0; koddan |
| 10 | `denetim/ARAC-UYGULA4-ONSINAV-0918.py` | "3 km eşiği: 🔴 İHLAL"; hiç exit yok | 40 | exit 0 — koşuldu exit 0; koddan · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (yama inmiş, nokta kendisi), gerileme sezicisi · 60b7731c |
| 11 | `denetim/ARAC-YERLESIM-1281-ONCE-C.py` | "İHLAL <kayıt>" listesi; hiç exit yok | 149 | exit 0 — koşulmadı (dosya yazar); koddan |
| 12 | `denetim/EKOKUMA-0076-A-SINA.py` | "② … çakışma: 33" / "ÖZET: … id çakışma 33" (docstring L6: "0 olmalı"); exit yalnız ALET KIRIK'ta (2) | 6, 69, 138 | exit 0 — **ÖLÇÜLDÜ: çakışma 33 basıp exit 0** |
| 13 | `denetim/EKOKUMA-0076-B-capa.py` | "SINAV: 🔴 KALDI (n)"; hiç exit yok | 82 | exit 0 — `--sina` geçen hâl ölçüldü exit 0; kalan yol koddan |
| 14 | `denetim/KRONO-0076-C-sinav.py` | "SONUC: … capasi TUTMAYAN N"; exit yalnız NORMALLESTIRICI KIRIK'ta (2) | 100 (exit 36) | exit 0 — geçen hâl ölçüldü exit 0 (N=0); N>0 yolu koddan |
| 15 | `denetim/NOKTA-KAFKAS-0077-sina.py` | varsayılan kip: "kusur: N"; exit yok (yalnız `--atesle` kipi exit verir, L73) | 76 | exit 0 — koşuldu exit 0 (kusur 0); N>0 yolu koddan · YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 |
| 16 | `denetim/ODAK-BALKAN-0080-uygula.py` | `--ters`: "TERS SINAV: 🔴 KALDI" ardından çıplak `return` = 0 | 288 | exit 0 — koşulmadı (dosya yazar); koddan |
| 17 | `denetim/SINAV-DONEM-KAYNAK-0907.py` | "🔴 KUSUR VAR — dayanak yaması YAZILMAZ"; exit yok (2 yalnız alet bulunamazsa, L35) | 112 | exit 0 — koşulmadı (dosya yazar); koddan · YALAN-0 → KAPANDI (canlı, bugün 0; 2 yol, biri LAB'ın görmediği node süzgeci; +1 yalan-1 yolu → 2) · 60b7731c · DÜZELTME (UMIT Y §1, audit hook ölçümü): yalnız %TEMP%'e yazar, siler; repo yan etkisi YOK — LAB'ın statik AST sınıflaması geçici dizini repo yazımından ayırmıyordu |
| 18 | `denetim/SINAV-RENK-98-0903.py` | "🔴 25 ALTINA DÜŞTÜ"; exit yok (2 yalnız artefakt/sayı tutmazsa) | 159 | exit 0 — koşulmadı (dosya yazar); koddan |
| 19 | `denetim/SINIR-CIZGI-0076-SINA.py` | "  HATA <yol>" (node --check düştü); hiç exit yok | 36 | exit 0 — geçen hâl ölçüldü exit 0 (OK); kalan yol koddan |
| 20 | `denetim/SINIR-D-OKYANUSYA-0077-olc.py` | "① … beklenen X ölçülen Y ✗"; betiğin kendi exit'i yok (exit 2 yalnız içe aktarılan olcu_kapisi_1006'dan) | 267 | exit 0 — koşuldu: exit 2 ÖLÇÜLEMEDİ (girdi yok); ✗ yolu koddan |
| 21 | `denetim/UMIT-W46b-OLC-1006.py` | `sina`: "SINAV: KALDI"; hiç exit yok | 131 | exit 0 — `<kök> sina` geçen hâl ölçüldü exit 0; kalan yol koddan |

### 2.3 Sayım (226 aday)
| kategori | sayı | nasıl belirlendi |
|---|---|---|
| **YALAN-0** | **21** | 1 ölçüldü (`EKOKUMA-0076-A-SINA.py`), 20 koddan (12'sinin geçen hâli ayrıca ölçüldü, exit 0; 1'i ölçülemedi→2) |
| **DOGRU** | **178** | 13 ölçüldü (8 başarısız hüküm + exit 1, 5 ÖLÇÜLEMEDİ + exit 2) · 165 koddan (hüküm yolunda sıfır-dışı çıkış/return/assert var; §2.0 sınırına bakın) |
| **BELIRSIZ** | **10** | adı sınav ama hüküm/eşik basmıyor ya da kipi veri yazıyor (2 ayrıntılı not aşağıda) |
| **SINAV-DEGIL** | **17** | uygulama/üretici/rapor araçları. 6'sı `✗ … ATLANDI/YAZILMADI` basıp exit 0 veriyor ama bunlar sınav değil, uygulama aracı (tabloda adıyla) |
| + `arac/paketle.py sina` | DOGRU (koddan; ölçülen hâl TAZE/0) | §2.1 |

Ölçülen 13 DOGRU: `ARAC-DENETIM-KAPI-0920 --sina` ("SINAV KALDI — 2 madde basarisiz", 1) · `ARAC-KAMERIKA-SINAV-0907` ("🔴 SINAV DUSTU", 1) · `EKOKUMA-0076-B-sina` ("🔴 1 KUSUR", 1) · `KRONO-0076-A-sina` ("KUSUR VAR", 1) · `ORTAK-0076-BIRLESTIRME-SINAVI` ("🔴 BİRLEŞTİRİLEMEZ", 1) · `ARAC-YETIM-MADDE-1004` (1) · `HARITA-0076-kutu-kapisi` (1) · `ARAC-BAYAT-KOPYA-1008 --sina` (10/14, 1) · ÖLÇÜLEMEDİ→2: `ARAC-API-AD-SINAV-1009`, `ARAC-D-RENK-0073-SINAV`, `ARAC-KUNYE-SINA-0903` (argümansız), `ARAC-VL-SINAV-0907` (tasarım gereği hep 2), `ODAK-OSMANLI-ANADOLU-0080-olcer-sinav`.

Ayrıca koşuda çöken ya da argüman isteyen 9 araç (exit 1, Traceback/kullanım): `ARAC-BIREBIR-TANIM-SINAV-1006` ve `ARAC-TDV-CIKARICI-OZET-SINAV-1006` (`bs4` yok), `ARAC-SEFER-OK-SINAV-0075` (`scipy` yok), `ARAC-PAKETLE-PLAN-LF-SINAV-1006` (**sabit yol `C:\atlas-w56\arac\paketle.py`**), `ARAC-ETK-DOGRULA-0913` / `ARAC-KOSU10-KALAN-SINA-0917` / `ARAYUZ-MADDE-0930-KAPI-SINAV` / `UMIT-W46b-OLC-1006` (argv eksik → IndexError), `SINAV-IKINCI-GECIS-0903` (kullanım). Bu çöküşler sıfır-dışı koddur ama SINAV sonucu değildir. Bu dokuzunun kategorisi koddan verildi.

### 2.4 BELIRSIZ — adıyla iki not
- `denetim/SINIR-D-AMERIKA-0077-yukselt.py --sina`: kendi docstring'i "(sınav: `--sina`)" diyor. Bu kip **`data/d_sinirlar_amerika.js`'i YENİDEN YAZIYOR** (üretici `exec` ile çalıştırılıyor, yazma statik taramada görünmedi). Hüküm satırı basmıyor, exit 0 veriyor. Docstring "sözlük boşken çıktı, 24 Eylül 2026 commit'li dosyayla BİREBİR aynıdır" diyor; bu sha'da koşunca `git diff` **42 satır fark** gösterdi (başlık satırı + `d1923-ca-us-lake-of-the-woods` C→YOK …). Yani "sınav" kipi farkı ne basıyor ne de koda çeviriyor. Farkın anlamı yorumlanmadı.
- `denetim/ARAC-TR1923-ZINCIR-SINAV-0914.py`: "uyuşmayan 62/127" gibi oranlar basıyor, eşik ya da hüküm yok, exit 0.

### 2.5 Olay notu — ölçüm sırasında worktree'ye yazılanlar (ölçüm ağacında, `C:\atlas`'a değil)
1. İlk otomatik koşu (regex'le yazma tespiti) `ARAC-HARITA-DURUM-0074-KABARTMA-SINAV.py`'yi koşturdu. Araç `denetim/HARITA-DURUM-0074-KABARTMA-SINAV.json`'u yazdı: `io.open` çok satırlı olduğu için regex yakalamadı. Koşu durduruldu, tespit AST'ye çevrildi.
2. AST'li ikinci koşu `SINIR-D-AMERIKA-0077-yukselt.py --sina`'yı koşturdu. Bu araç **`data/d_sinirlar_amerika.js`'i yazdı** (`exec` ile üretici). Koşucu her adımdan sonra `git status` alıyordu; `data/` değişince **kendini durdurdu**. Sonra kalan 4 aday elle süzüldü.
- İki dosya da **yalnız `C:\atlas-kapi-olcum` ölçüm worktree'sinde** değişti. `git checkout --` ile geri alındı ve `git status` temiz görüldükten sonra worktree kaldırıldı. `C:\atlas`, `C:\atlas-d8`, `C:\atlas-d8m`'ye dokunulmadı.
- **Bu, "data/ yazan aracı koşturma" talimatının ölçüm kopyasında ihlalidir; açıkça kaydediliyor.** Ders (ölçülen): `--sina` adı salt-okur demek değil. Yazma `exec`/içe aktarma üzerinden statik taramaya görünmeyebilir.

---

## ③ D8 — şu an ölçülebilir mi?
| soru | ölçülen |
|---|---|
| `py -c "import shapely, rasterio"` | **başarısız**: `ModuleNotFoundError: No module named 'rasterio'` |
| `shapely` tek başına | var, 2.1.2 · `numpy` 2.5.3 var |
| D8'in kullandığı modüller (`arac/denetle.py` L5296-5303, `degismez8`) | `numpy`, `shapely` — **`rasterio` D8'de içe aktarılmıyor** (`rasterio` yalnız `arac/bosluk_haritasi.py` L76'da) |
| ölçüm worktree'sinde `data/devletler_harita.js` | **YOK**. Dosya gitignore'lu (`.gitignore` L28), üretim çıktısı |
| `denetle.py` D8 sonucu | `Değişmez 8 ! ÖLÇÜLEMEDİ — devletler_harita.js YOK` → exit 2 |

Sonuç (ölçüm): bu sha'nın taze ağacında D8 **ölçülemez**. Eksik olan bağımlılık değil (D8'in ihtiyacı olan shapely+numpy kurulu), girdi dosyası. Başka worktree'lerde dosya var: `C:\atlas` (2026-10-04 12:35, 181 MB) · `C:\atlas-d8` / `C:\atlas-d8m` (2026-10-05, 94 MB). Bunlar bu sha'nın üretimi değil. `_D8Govde` önce gövde kimliğini (`_d8_govde_kimlik`) denetliyor, bu yüzden kopyalanmaları denenmedi. D8, bu geceki tam koşu `devletler_harita.js`'i ürettikten sonra ölçülebilir hâle gelir (koddan çıkarım, ölçülmedi). Hiçbir şey kurulmadı.

---

## Ek — tam liste (226 aday)
Sütunlar: araç · başarısızlık nasıl basılıyor / çıkış yolu · başarısızlıkta çıkış kodu (ölçüldü/koddan) · satır · kategori.
"koddan: sıfır-dışı çıkış yolu Lx" = hüküm yolunda bulunan çıkış ifadesi.

| araç | başarısızlık / çıkış yolu | kod (ölçüldü/koddan) | satır | kategori |
|---|---|---|---|---|
| `denetim/A-OKYANUSYA-0078-alan.py` | `--sina`: "ATEŞLEMEDİ"; ardından `sys.exit()` = 0 | 0 (geçen hâl ölçüldü (exit 0 ATEŞLEDİ); kalan yol koddan) | 76-77 | **YALAN-0** |
| `denetim/A-OKYANUSYA-0078-sina.py` | "POZİTİF KONTROL … ATEŞLEMEDİ!"; hiç exit yok | 0 (geçen hâl ölçüldü exit 0; kalan yol koddan) | 70 | **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (a78 GIRDI'de, 61 nokta kendisiyle), gerileme sezicisi · ab9aa957 |
| `denetim/ACILIS-ANIM-0929-sina.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: ag/sunucu |  | **BELIRSIZ** |
| `denetim/ACILIS-ANIM-0929-sinav-kur.py` | koddan: sıfır-dışı çıkış yolu assert L20 | koddan; koşulmadı: dosya yazar (open('w') L25) |  | **DOGRU** |
| `denetim/ARAC-1783-ULKE-SINA.py` | koddan: sıfır-dışı çıkış yolu L136 `sys.exit(1)`; L50 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (rmtree L78) |  | **DOGRU** |
| `denetim/ARAC-2SK-OCAK1-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L131 `raise SystemExit(0 if gecti == toplam el` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-ACICI-CGNAT-SINAV-1009.py` | koddan: sıfır-dışı çıkış yolu L72 `sys.exit(main(sys.argv[1:]))` | koddan; koşulmadı: dosya yazar (os.remove L57) |  | **DOGRU** |
| `denetim/ARAC-ALASKA-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L123 `sys.exit(main())`; L110 `return 0 if ok else 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-ALTINORDA-DUZELT-1001.py` | koddan: sıfır-dışı çıkış yolu L153 `sys.exit(1)`; L158 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L155) |  | **DOGRU** |
| `denetim/ARAC-ANTLASMA-KAPI-0907.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: dosya yazar (makedirs L89), ag/sunucu |  | **SINAV-DEGIL** |
| `denetim/ARAC-API-AD-SINAV-1009.py` | "HATA: dal sürümü okunamadı — ÖLÇÜLEMEDİ", **exit 2** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-ARAYUZ-YETIM-KAPANIS-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L153 `sys.exit(main())`; L149 `return 1 if tutmayan else 0`; L126 `return 2` | koddan; koşulmadı: dosya yazar (makedirs L55) |  | **DOGRU** |
| `denetim/ARAC-B-GORUNUM-BANTSINAV-0072.py` | koddan: sıfır-dışı çıkış yolu L63 `raise SystemExit("dokumde bant_ham YOK (`; L113 `raise SystemExit("dokumde sahiplik tablo` | koddan; koşulmadı: dosya yazar (open('w') L191) |  | **DOGRU** |
| `denetim/ARAC-B-GORUNUM-KELEPCE-0072.py` | koddan: sıfır-dışı çıkış yolu L122 `sys.exit(main())`; L49 `raise SystemExit("dokum alinamadi: %s" %`; L113 `return 1` | koddan; koşulmadı: dosya yazar (makedirs L74) |  | **DOGRU** |
| `denetim/ARAC-BAYAT-KOPYA-1008.py` | `--sina` → "SINAV 10/14" (4 ✗), **exit 1** (ayrıntı §2.1) | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-BEKCI-KIMLIK-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L283 `sys.exit(1 if dusen else 0)` | koddan; koşulmadı: dosya yazar (makedirs L87), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-BEKCI-NABIZ-SINAV-1003.py` | koddan: sıfır-dışı çıkış yolu L142 `sys.exit(1 if HATA else 0)` | koddan; koşulmadı: dosya yazar (makedirs L38) |  | **DOGRU** |
| `denetim/ARAC-BEKCI-SINAV-SAHTEMOTOR-0911.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **BELIRSIZ** |
| `denetim/ARAC-BEKCI-SINAV-YARIYAZIM-0911.py` | "KALDI"; hiç exit yok | 0 (koşulmadı (dosya yazar); koddan) | 73 | **YALAN-0** |
| `denetim/ARAC-BIREBIR-TANIM-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L149 `sys.exit(main())`; L145 `return 1 if hata else (2 if olculemed`; L97 `return sayfa_onb[slug]` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-BIRLESTIR-SINIR-0907.py` | koddan: sıfır-dışı çıkış yolu L993 `sys.exit(main())`; L989 `return 1 if kirmizi else 0` | koddan; koşulmadı: dosya yazar (makedirs L698) |  | **DOGRU** |
| `denetim/ARAC-BUDAMA-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L164 `sys.exit(main())`; L160 `return 1`; L151 `return 0 if tam == 3 else 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-BUDAMA-UYGULA-0910.py` | koddan: sıfır-dışı çıkış yolu L62 `sys.exit(2)`; L68 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (makedirs L179) |  | **DOGRU** |
| `denetim/ARAC-BUDAMA2-0910.py` | koddan: sıfır-dışı çıkış yolu L73 `sys.exit(2)`; L177 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (open('w') L186) |  | **DOGRU** |
| `denetim/ARAC-D-RENK-0073-SINAV.py` | "OLCULEMEDI - govde1923.geojson yok", **exit 2** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-D1923-E6A-YAMA-0920.py` | koddan: sıfır-dışı çıkış yolu L31 `raise SystemExit(f"{cift}: NE'de YOK")`; L33 `raise SystemExit(f"{cift}: {len(parca)} ` | koddan; koşulmadı: dosya yazar (open('w') L346) |  | **DOGRU** |
| `denetim/ARAC-D3BATI-URET-0916.py` | koddan: sıfır-dışı çıkış yolu L99 `raise SystemExit(f"sol_taraf bulunamadı:`; L53 `raise SystemExit(f"çift yok: {c}")` | koddan; koşulmadı: dosya yazar (open('w') L1137) |  | **DOGRU** |
| `denetim/ARAC-D4-HARITA-SINAV-1001.py` | koddan: sıfır-dışı çıkış yolu L29 `sys.exit(2)`; L33 `sys.exit(2)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-D7-ISG-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L131 `sys.exit(1 if KALDI else 0)` | koddan; koşulmadı: dosya yazar (os.remove L42), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-DEGISMEZ2-SIZINTI-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L180 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L64) |  | **DOGRU** |
| `denetim/ARAC-DEGISMEZ2-YERKORU-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L172 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L61) |  | **DOGRU** |
| `denetim/ARAC-DEGISMEZ8-KORLUK-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L267 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (json.dump L81) |  | **DOGRU** |
| `denetim/ARAC-DENETIM-KAPI-0920.py` | `--sina` → "SINAV KALDI — 2 madde basarisiz", **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-DENETLE-TARIH-KALAN-SINAV-1008.py` | koddan: sıfır-dışı çıkış yolu L215 `sys.exit(0 if bas == len(sonuc) else 1)` | koddan; koşulmadı: dosya yazar (open('wb') L39) |  | **DOGRU** |
| `denetim/ARAC-DEVRALMA-DONGU-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L143 `sys.exit(0 if all(SONUC) else 1)` | koddan; koşulmadı: dosya yazar (os.remove L129) |  | **DOGRU** |
| `denetim/ARAC-DONEMLER-OKUYUCU-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L369 `sys.exit(main())`; L365 `return 0 if sorun == 0 else 1` | koddan; koşulmadı: dosya yazar (makedirs L60), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-DUYUR-MUKERRER-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L117 `sys.exit(main())`; L113 `return 1 if HATA else 0`; L95 `return 2` | koddan; koşulmadı: dosya yazar (makedirs L80) |  | **DOGRU** |
| `denetim/ARAC-EKO-BOLGE-BAG-SINA-0920.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: dosya yazar (json.dump L121) |  | **BELIRSIZ** |
| `denetim/ARAC-EKO-YENICERI-BAG-0920.py` | koddan: sıfır-dışı çıkış yolu L171 `sys.exit(kod)`; L155 `sys.exit(0 if sina(kayit, turler) else 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-EKOKUMA-IZ-0921.py` | koddan: sıfır-dışı çıkış yolu L243 `raise SystemExit("🔴 çizici koşmadı:\n" +`; L148 `raise SystemExit("🔴 app.js'te bulunamadı` | koddan; koşulmadı: dosya yazar (json.dump L237), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-ENKLAV-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu assert L83,95,98 | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-ETK-DOGRULA-0913.py` | koddan: sıfır-dışı çıkış yolu L54 `sys.exit(1 if hata else 0)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-ETK-UYGULA-0913.py` | koddan: sıfır-dışı çıkış yolu L305 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L300) |  | **DOGRU** |
| `denetim/ARAC-FAZ2-SINAV-0906.py` | koddan: sıfır-dışı çıkış yolu assert L57,73,68 | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-GOSTERIM-0075-ONLE-SINAV.py` | koddan: sıfır-dışı çıkış yolu L83 `sys.exit(1 if hatalar else 0)` | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.py` | koddan: sıfır-dışı çıkış yolu L179 `sys.exit(0 if n == len(SONUC) else 1)`; L23 `raise SystemExit("node %s çıkış %d: %s" ` | koddan; koşulmadı: dosya yazar (open('w') L171), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-GUNNO-PAD-SINAV-1008.py` | koddan: sıfır-dışı çıkış yolu L204 `sys.exit(main())`; L200 `return 0 if gec == len(sonuc) else 1`; L57 `return 2` | koddan; koşulmadı: dosya yazar (open('wb') L63), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-HARITA-DURUM-0074-KABARTMA-SINAV.py` | "SINAV KALDI" / "KALDI"; hiç exit yok | 0 (koddan (bir kez koştu, json yazdı, çıktı alınmadı — bkz. olay notu)) | 86-89 | **YALAN-0** · YALAN-0 → KAPANDI (canlı, bugün 0; 2 yol) · 60b7731c |
| `denetim/ARAC-HAYALET-0905.py` | koddan: sıfır-dışı çıkış yolu L263 `sys.exit(main())`; L229 `return 0 if ok else 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-HIMAYE-SINAV-0914.py` | koddan: sıfır-dışı çıkış yolu L168 `sys.exit(0 if ok == len(sonuc) else 1)` | koddan; koşulmadı: dosya yazar (json.dump L166), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-HLA-JSON-SINA-0913.py` | koddan: sıfır-dışı çıkış yolu L49 `sys.exit(1 if hata else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-INCE-BATI-AFRIKA-SINA.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **BELIRSIZ** |
| `denetim/ARAC-KAMERIKA-0903-kara-sina.py` | koddan: sıfır-dışı çıkış yolu L60 `sys.exit(1 if any(d > 10 for d, *_ in di` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KAMERIKA-0903-kunye-sina.py` | "🔴 N HATA", "🔴 ÖTMEDİ"; hiç exit yok | 0 (geçen hâl ölçüldü exit 0; kalan yol koddan) | 94, 153 | **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (46/46 reçete devletler.js'te), gerileme sezicisi · ab9aa957 |
| `denetim/ARAC-KAMERIKA-0903-madde-sina.py` | koddan: sıfır-dışı çıkış yolu L76 `sys.exit(1 if kotu else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KAMERIKA-0903-rapor-sina.py` | koddan: sıfır-dışı çıkış yolu L54 `sys.exit(1 if yok else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KAMERIKA-0903-taban-sina.py` | koddan: sıfır-dışı çıkış yolu L60 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (unlink L110) |  | **DOGRU** |
| `denetim/ARAC-KAMERIKA-SINAV-0907.py` | "🔴 SINAV DUSTU" (Fort Vancouver delik), **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-KAPANIS-2S-SIFIR-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L32 `sys.exit(1)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KAYNAK-DENETIM-0907.py` | koddan: sıfır-dışı çıkış yolu L590 `sys.exit(1 if sinav() else 0)` | koddan; koşulmadı: dosya yazar (makedirs L237), ag/sunucu |  | **DOGRU** |
| `denetim/ARAC-KAYNAK-DURUM-KAPI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L146 `sys.exit(1 if dusen else 0)` | koddan; koşulmadı: dosya yazar (makedirs L137), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-KAYNAK-DURUM-SINAMA-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L180 `sys.exit(1 if dusen else 0)` | koddan; koşulmadı: dosya yazar (makedirs L64), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-KAYNAK-TAVAN-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L409 `sys.exit(1 if kalan else 0)` | koddan; koşulmadı: dosya yazar (rmtree L221) |  | **DOGRU** |
| `denetim/ARAC-KAYNAK-ZAYIF-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L89 `raise SystemExit(0 if gecti == toplam el` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KAYNAKSIZLIK-ISG-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L120 `sys.exit(1 if KALDI else 0)` | koddan; koşulmadı: dosya yazar (os.remove L37) |  | **DOGRU** |
| `denetim/ARAC-KELIME-CAKISMA-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L118 `sys.exit(1 if hata else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KIMLIK-BOYA-0906.py` | koddan: sıfır-dışı çıkış yolu L220 `sys.exit(1)`; L229 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L47) |  | **DOGRU** |
| `denetim/ARAC-KIMLIK-SINA-0903.py` | "🔴 HIC d: YOK", "🔴 KUNYE YOK/RENK YOK" listeleri; hiç exit yok | 0 (geçen hâl ölçüldü exit 0; kalan yol koddan) | 73, 103-104 | **YALAN-0** · YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 |
| `denetim/ARAC-KISI-KAYNAK-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L185 `raise SystemExit(0 if gecti == toplam el` | koddan; koşulmadı: dosya yazar (rmtree L133) |  | **DOGRU** |
| `denetim/ARAC-KISI-ORNEKLEM-1006.py` | koddan: sıfır-dışı çıkış yolu L78 `sys.exit(sina())`; L72 `return 0 if not hata else 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-KITA13-KUTU-SINAV-0912.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **BELIRSIZ** |
| `denetim/ARAC-KODLA-VK-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L161 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (copytree L137), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-KOSU10-KALAN-SINA-0917.py` | koddan: sıfır-dışı çıkış yolu L134 `sys.exit(hata)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-KRON2-UYGULA-0913.py` | uygulama aracı; "✗ #n … HATA" sayar, exit 0 (L189-191) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py` | koddan: sıfır-dışı çıkış yolu L48 `raise SystemExit("ÖLÇÜLEMEDİ: index.html`; L138 `sys.exit(1 if (e or inmeyen or kayip) el` | koddan; koşulmadı: dosya yazar (json.dump L73) |  | **DOGRU** |
| `denetim/ARAC-KRONO-BAGLAMA-KAPI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L92 `raise SystemExit(main())`; L86 `return 1 if tutmadi else 0`; L57 `return 2` | koddan; koşulmadı: dosya yazar (rmtree L88) |  | **DOGRU** |
| `denetim/ARAC-KRONO-EKSIK-ROZET2-0921.py` | koddan: sıfır-dışı çıkış yolu L236 `sys.exit(0 if sina() else 1)` | koddan; koşulmadı: dosya yazar (open('w') L162) |  | **DOGRU** |
| `denetim/ARAC-KRONO-KUNYE-PENCERE-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L195 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L105) |  | **DOGRU** |
| `denetim/ARAC-KRONO-SAY-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L410 `raise SystemExit(0 if gecti == toplam el` | koddan; koşulmadı: dosya yazar (open('w') L249) |  | **DOGRU** |
| `denetim/ARAC-KRONO-SUZGEC-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L145 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L58) |  | **DOGRU** |
| `denetim/ARAC-KUNYE-KRONO-KAPSAM-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L145 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L50) |  | **DOGRU** |
| `denetim/ARAC-KUNYE-SINA-0903.py` | argümansız: "⚫ ÖLÇÜLEMEDİ — argüman yok", **exit 2** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-LAB-ODAK-UYGULA-1002.py` | uygulama aracı; kuru kipte "🔴 ATLANAN: n" sonra `sys.exit(0)` (L111-114) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/ARAC-LAB-YER-UYGULA-1003.py` | koddan: sıfır-dışı çıkış yolu L148 `sys.exit(1)`; L155 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L150) |  | **DOGRU** |
| `denetim/ARAC-LEGO-ZINCIR-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L98 `sys.exit(1 if basarisiz else 0)` | koddan; koşulmadı: dosya yazar (makedirs L73), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-LEGO-alet-sinav.py` | koddan: sıfır-dışı çıkış yolu L54 `sys.exit(1 if hata else 0)` | koddan; koşulmadı: dosya yazar (rmtree L51), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-LEGO-ayikla-sinav.py` | koddan: sıfır-dışı çıkış yolu L164 `sys.exit(0 if sayi["ref_b"] == n else 1)` | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-LISTE-BAYAT-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L184 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L58) |  | **DOGRU** |
| `denetim/ARAC-M-ALANI-KAPI-0920.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **SINAV-DEGIL** |
| `denetim/ARAC-MANDA-IRAK-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L34 `raise SystemExit("SESSIZ SIFIR: %d nokta`; L61 `raise SystemExit("KUNYE YOK — bolunme ya` | koddan; koşulmadı: dosya yazar (open('w') L133) |  | **DOGRU** |
| `denetim/ARAC-MOTOR-ENV-KAPI-1006.py` | koddan: sıfır-dışı çıkış yolu L195 `sys.exit(1 if ihlal else 0)`; L60 `sys.exit(2)` | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-MOTOR-ENV-KAPI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L87 `sys.exit(1 if dusen else 0)` | koddan; koşulmadı: dosya yazar (makedirs L65), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-MOTOR-V-KID-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L138 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L60), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-MOTOR-YURUYUS-ONGORU-0917.py` | koddan: sıfır-dışı çıkış yolu L86 `raise SystemExit("--yon16 istendi ama mo`; L93 `raise SystemExit(f"İŞARET BULUNAMADI: {b` | koddan; koşulmadı: dosya yazar (open('w') L293), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-MOTOR-YURUYUS-SINAV-0917.py` | koddan: sıfır-dışı çıkış yolu L67 `raise SystemExit("damga satırı tanınmadı`; L58 `raise SystemExit(f"İŞARET {src.count(esk` | koddan; koşulmadı: dosya yazar (open('w') L154), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-MUKERRER-KAPI-0930.py` | "HÂLÂ ÖTÜYOR ✗", "ÖTMEDİ ✗"; hiç exit yok | 0 (koşulmadı (dosya yazar); koddan) | 79-80, 91 | **YALAN-0** |
| `denetim/ARAC-MUKERRER-OLU-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L114 `sys.exit(1 if KALDI else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-MUKERRER-SINAV-0906.py` | koddan: sıfır-dışı çıkış yolu L142 `sys.exit(1 if (sozdizimi or hata) else 0`; L47 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (makedirs L71) |  | **DOGRU** |
| `denetim/ARAC-NEHIR-KAPI-0912.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: dosya yazar (open('w') L103), uretim/git/tarayici cagirir |  | **SINAV-DEGIL** |
| `denetim/ARAC-NEHIR-SINA-0912.py` | koddan: sıfır-dışı çıkış yolu L67 `sys.exit(1)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-ODAK-KAPAT-UYGULA-1DUNYA-1001.py` | koddan: sıfır-dışı çıkış yolu L68 `sys.exit(1)`; L125 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L127) |  | **DOGRU** |
| `denetim/ARAC-ODAK-SEKME-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L363 `raise SystemExit(main())`; L359 `return 0 if (kaldi == 0 and temiz2) e`; L166 `return 2` | koddan; koşulmadı: dosya yazar (unlink L110), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-ODAK-VEKIL-1003.py` | koddan: sıfır-dışı çıkış yolu L255 `sys.exit(kod)` | koddan; koşulmadı: dosya yazar (open('w') L171) |  | **DOGRU** |
| `denetim/ARAC-OLCULEMEDI-KAPI-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L108 `sys.exit(1 if HATA else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-OMUR-KAPISI-0903.py` | "🔴 KÜNYE DOĞMADAN ÖNCE/ÖLDÜKTEN SONRA … : N"; hiç exit yok | 0 (koşuldu exit 0; N>0 yolu koddan) | 70, 75 | **YALAN-0** |
| `denetim/ARAC-P13B-KUSATMA-0914.py` | koddan: sıfır-dışı çıkış yolu assert L69 | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-P13B-SERBEST-0914.py` | koddan: sıfır-dışı çıkış yolu L123 `sys.exit(0 if ok == len(sonuc) else 1)` | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-P13B-SEYRELT-0914.py` | koddan: sıfır-dışı çıkış yolu L192 `sys.exit(0 if ok == len(sonuc) else 1)`; L137 `sys.exit(0 if ok == len(sonuc) else 1)` | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-PAKETLE-BAYT-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L41 `sys.exit(1 if dusen else 0)` | koddan; koşulmadı: dosya yazar (makedirs L22) |  | **DOGRU** |
| `denetim/ARAC-PAKETLE-PLAN-LF-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L103 `sys.exit(1 if dusen else 0)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-PARALEL-SINAV-0910.py` | koddan: sıfır-dışı çıkış yolu L552 `sys.exit("Girdi 5 denemede de durulmadi `; L586 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (makedirs L451), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-PARALEL-UYGULAMA-SINAV-0910.py` | koddan: sıfır-dışı çıkış yolu L381 `sys.exit("Girdi 5 denemede de durulmadi `; L414 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (makedirs L263), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-PROTOKOL-BUDAMA-0917.py` | koddan: sıfır-dışı çıkış yolu L162 `sys.exit(2)`; L166 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (open('w') L190) |  | **DOGRU** |
| `denetim/ARAC-RENK-AKTAR-0903.py` | koddan: sıfır-dışı çıkış yolu L116 `sys.exit(0 if (n1 - n0 == len(par) and n`; L34 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L101) |  | **DOGRU** |
| `denetim/ARAC-ROTUS-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L209 `sys.exit(kod)`; L208 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L79) |  | **DOGRU** |
| `denetim/ARAC-RUSAMERIKA-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L133 `sys.exit(main())`; L129 `return 0 if ok else 1`; L53 `return 1` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-SAHIPLIK-KAPI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L173 `sys.exit(1 if basarisiz else 0)` | koddan; koşulmadı: dosya yazar (makedirs L54), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-SAHIPLIK-UYGULA-SINAV-1008.py` | koddan: sıfır-dışı çıkış yolu L50 `raise SystemExit("git %s → %s" % (" ".jo`; L87 `raise SystemExit("veri okunamadı: " + p.`; L270 `return 0 if gecen == len(sonuc) else `; L137 `return 2` | koddan; koşulmadı: dosya yazar (copyfile L65), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-SEFER-OK-SINAV-0075.py` | koddan: sıfır-dışı çıkış yolu L41 `sys.exit(1 if ihlal else 0)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-SERHAT-IZGARA-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L139 `sys.exit(1 if kacan else 0)` | koddan; koşulmadı: dosya yazar (open('w') L102) |  | **DOGRU** |
| `denetim/ARAC-SERHAT-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L170 `sys.exit(1)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-SICIL-SINAV-0910.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **BELIRSIZ** |
| `denetim/ARAC-SICIL-SINAV-IM-0910.py` | koddan: sıfır-dışı çıkış yolu L131 `sys.exit(0 if gecti == toplam else 1)` | koddan; koşulmadı: dosya yazar (json.dump L54) |  | **DOGRU** |
| `denetim/ARAC-SINIR-ASYA-CIPA-SINAV-0907.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **BELIRSIZ** |
| `denetim/ARAC-SINIR-BALKAN-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L107 `sys.exit(cikis)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-SIZMA-0912.py` | koddan: sıfır-dışı çıkış yolu L581 `raise SystemExit(1)`; L601 `raise SystemExit(1)` | koddan; koşulmadı: dosya yazar (savefig L551), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TAHTA-CGNAT-SINAV-1009.py` | koddan: sıfır-dışı çıkış yolu L30 `sys.exit(1 if hata else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-TAHTA-GIT-YARIM-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L191 `sys.exit(1)`; L194 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (makedirs L96), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TAHTA-KAPI-SINAV-1003.py` | koddan: sıfır-dışı çıkış yolu L136 `sys.exit(1 if HATA else 0)`; L40 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (makedirs L66) |  | **DOGRU** |
| `denetim/ARAC-TAHTA-ORIGIN-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L315 `sys.exit(1 if HATA else 0)` | koddan; koşulmadı: dosya yazar (makedirs L149), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TAHTA-SUNUCU-YAZMA-SINAV-1009.py` | koddan: sıfır-dışı çıkış yolu L312 `sys.exit(main())`; L308 `return 1 if HATA else 0` | koddan; koşulmadı: dosya yazar (makedirs L132), ag/sunucu, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TAHTA-ULASTI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L271 `sys.exit(main())`; L267 `return 1 if HATA else (2 if OLCULEMED` | koddan; koşulmadı: dosya yazar (makedirs L87), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TASIMA-0922.py` | koddan: sıfır-dışı çıkış yolu L141 `sys.exit(1)`; L1127 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (makedirs L914), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TASIMA-ON-SINAV-0905.py` | "🔴 data/'de VAR", "🔴 window.X N dosya"; hiç exit yok | 0 (koşuldu exit 0; koddan) | 51, 68, 78 | **YALAN-0** |
| `denetim/ARAC-TDV-CIKARICI-1006.py` | koddan: sıfır-dışı çıkış yolu L274 `sys.exit(1 if sina() else 0)` | koddan; koşulmadı: dosya yazar (makedirs L272), ag/sunucu |  | **DOGRU** |
| `denetim/ARAC-TDV-CIKARICI-OZET-OLC-1006.py` | koddan: sıfır-dışı çıkış yolu L188 `sys.exit(main())`; L184 `return 2 if (kontrol_fark or govde_fa`; L74 `return os.path.exists(os.path.join(ci` | koddan; koşulmadı: dosya yazar (json.dump L165) |  | **DOGRU** |
| `denetim/ARAC-TDV-CIKARICI-OZET-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L139 `sys.exit(main())`; L135 `return 1 if hata else (2 if olculemed`; L39 `return 2` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAC-TEKILLE-SINAV-0907.py` | koddan: sıfır-dışı çıkış yolu L27 `raise SystemExit("SESSIZ SIFIR: %d" % le`; L56 `raise SystemExit("🔴 NO-OP DEGIL — tekill` | koddan; koşulmadı: dosya yazar (open('w') L39) |  | **DOGRU** |
| `denetim/ARAC-TR1923-ELEK-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L239 `sys.exit(1 if dus else 0)` | koddan; koşulmadı: dosya yazar (makedirs L92) |  | **DOGRU** |
| `denetim/ARAC-TR1923-ZINCIR-SINAV-0914.py` | "uyuşmayan 62/127" oranları basıyor, eşik/hüküm yok, exit yok; koşuldu exit 0 | ölçüldü 0 |  | **BELIRSIZ** |
| `denetim/ARAC-TRI-0912.py` | koddan: sıfır-dışı çıkış yolu L841 `sys.exit(1)`; L850 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (json.dump L903), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-TUZ-SINAV-0924.py` | koddan: sıfır-dışı çıkış yolu L46 `sys.exit(0 if ok else 1)` | koddan; koşulmadı: dosya yazar (open('wb') L26), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-UFUK-SABITI-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L131 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L44), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-UYGULA4-ONSINAV-0918.py` | "3 km eşiği: 🔴 İHLAL"; hiç exit yok | 0 (koşuldu exit 0; koddan) | 40 | **YALAN-0** · 🕰 TARİHÎ — teslim-öncesi araç, bugün 2 ÖLÇÜLEMEDİ (yama inmiş, nokta kendisi), gerileme sezicisi · 60b7731c |
| `denetim/ARAC-VL-SINAV-0907.py` | "⚫ ÖLÇÜLEMEDİ — … her kosuda 2 verir; BEYAN", **exit 2** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-YAMA-JS-SINA-0905-kos.py` | koddan: sıfır-dışı çıkış yolu L59 `sys.exit(r.returncode)` | koddan; koşulmadı: dosya yazar (open('w') L47) |  | **DOGRU** |
| `denetim/ARAC-YAMA-MOTOR-0930-TAZELIK.py` | tazelik dökümü (BAYAT yalnız dosya adında); hüküm yok, exit 0 | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/ARAC-YAMA-SINAV-1001.py` | koddan: sıfır-dışı çıkış yolu L130 `sys.exit(sinav())`; L139 `sys.exit(1)`; L126 `return 0 if gecti == 2 else 1` | koddan; koşulmadı: dosya yazar (open('w') L101), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/ARAC-YERLESIM-1281-ONCE-C.py` | "İHLAL <kayıt>" listesi; hiç exit yok | 0 (koşulmadı (dosya yazar); koddan) | 149 | **YALAN-0** |
| `denetim/ARAC-YERLESIM-UYGULA-0930-SINAV.py` | koddan: sıfır-dışı çıkış yolu L127 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (unlink L65) |  | **DOGRU** |
| `denetim/ARAC-YETIM-MADDE-1004.py` | "SONUÇ: yeni yetim madde, çıkış kodu 1", **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/ARAC-YETIM-MADDE-SINAV-1004.py` | koddan: sıfır-dışı çıkış yolu L257 `sys.exit(0 if HATA == 0 else 1)` | koddan; koşulmadı: dosya yazar (makedirs L111) |  | **DOGRU** |
| `denetim/ARAC-YUK-KAPI-SINAV-0925.py` | koddan: sıfır-dışı çıkış yolu L81 `sys.exit(0 if all(sonuc) else 1)` | koddan; koşulmadı: dosya yazar (os.remove L70) |  | **DOGRU** |
| `denetim/ARAC-YUK-SINAV-OKU-0925.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **BELIRSIZ** |
| `denetim/ARAC-YURUME-SINA-0912.py` | koddan: sıfır-dışı çıkış yolu L80 `sys.exit(1)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAC-ZINCIR-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L154 `sys.exit(1 if cur else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ARAYUZ-MADDE-0930-KAPI-SINAV.py` | koddan: sıfır-dışı çıkış yolu L23 `sys.exit(1 if hata else 0)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/ARAYUZ-MADDE-0930-OLC-KAPI.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koşuldu exit 0 |  | **SINAV-DEGIL** |
| `denetim/AVRUPA-SINIR-0077-uygula.py` | uygulama aracı; "✗ … ATLANDI/YAZILMADI" basıp exit 0 (L70, 76) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/BALKAN-MACAR-0081-uygula.py` | koddan: sıfır-dışı çıkış yolu L297 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (makedirs L305) |  | **DOGRU** |
| `denetim/DEGISMEZ-0086-sinav.py` | koddan: sıfır-dışı çıkış yolu L175 `sys.exit(0 if all(SONUC) else 1)` | koddan; koşulmadı: dosya yazar (json.dump L113) |  | **DOGRU** |
| `denetim/DUNYA-0079-uygula.py` | uygulama aracı; "✗ ATLANDI/YAZILMADI" + `return 0` (L146-172) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/EKOKUMA-0076-A-SINA.py` | "② … çakışma: 33" / "ÖZET: … id çakışma 33" (docstring L6: "0 olmalı"); exit yalnız ALET KIRIK'ta (2) | 0 (**ÖLÇÜLDÜ: çakışma 33 basıp exit 0**) | 6, 69, 138 | **YALAN-0** |
| `denetim/EKOKUMA-0076-B-capa.py` | "SINAV: 🔴 KALDI (n)"; hiç exit yok | 0 (`--sina` geçen hâl ölçüldü exit 0; kalan yol koddan) | 82 | **YALAN-0** |
| `denetim/EKOKUMA-0076-B-sina.py` | "SONUÇ: 🔴 1 KUSUR" (id çakışması), **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/EKOKUMA-0077-B-sina.py` | koddan: sıfır-dışı çıkış yolu L198 `sys.exit(main())`; L194 `return 0 if all(yakalanan.values()) e`; L174 `return 1` | koddan; koşulmadı: dosya yazar (open('w') L162) |  | **DOGRU** |
| `denetim/GOVDE-CAKISMA-0079-yama-sina.py` | koddan: sıfır-dışı çıkış yolu assert L24 | koddan; koşulmadı: uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/HARITA-0076-kutu-kapisi.py` | çizen-hat listesi + BEKLENEN satırı, **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/ISGAL-BATI-0077-yama.py` | uygulama aracı; "✗ … ATLANDI" exit 0 (L52) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/KRONO-0076-A-sina.py` | "SONUC: KUSUR VAR -> id carpismasi", **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/KRONO-0076-C-olc2.py` | hüküm satırı/çıkış kodu yok (ölçüm/döküm aracı) | koddan; koşulmadı: dosya yazar (open('w') L115) |  | **SINAV-DEGIL** |
| `denetim/KRONO-0076-C-sinav.py` | "SONUC: … capasi TUTMAYAN N"; exit yalnız NORMALLESTIRICI KIRIK'ta (2) | 0 (geçen hâl ölçüldü exit 0 (N=0); N>0 yolu koddan) | 100 (exit 36) | **YALAN-0** |
| `denetim/NOKTA-KAFKAS-0077-sina.py` | varsayılan kip: "kusur: N"; exit yok (yalnız `--atesle` kipi exit verir, L73) | 0 (koşuldu exit 0 (kusur 0); N>0 yolu koddan) | 76 | **YALAN-0** · YALAN-0 → KAPANDI (canlı, bugün 0/1) · ab9aa957 |
| `denetim/NOKTA-ORTADOGU-0077-uygula.py` | uygulama aracı; "✗ ŞARTI SAĞLAMADI — yazılmaz" exit 0 (L80) | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/ODAK-AFRIKA-AMERIKA-0080-uygula.py` | koddan: sıfır-dışı çıkış yolu L381 `sys.exit(1 if sinav() else 0)` | koddan; koşulmadı: dosya yazar (unlink L320) |  | **DOGRU** |
| `denetim/ODAK-BALKAN-0080-uygula.py` | `--ters`: "TERS SINAV: 🔴 KALDI" ardından çıplak `return` = 0 | 0 (koşulmadı (dosya yazar); koddan) | 288 | **YALAN-0** |
| `denetim/ODAK-KAPI-KIMLIK-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L327 `raise SystemExit(main())`; L323 `return 2 if SONUC["atlandi"] else 0`; L179 `return 2` | koddan; koşulmadı: dosya yazar (copy2 L84) |  | **DOGRU** |
| `denetim/ODAK-KAPI-SINAV.py` | koddan: sıfır-dışı çıkış yolu L203 `raise SystemExit(main())`; L199 `return 0 if (kaldi == 0 and temiz2 an`; L128 `return 2` | koddan; koşulmadı: dosya yazar (makedirs L90) |  | **DOGRU** |
| `denetim/ODAK-OSMANLI-ANADOLU-0080-olcer-sinav.py` | "⚫ ÖLÇÜLEMEDİ — T4 API yok", **exit 2** (olcu_kapisi_1006 üzerinden) | ölçüldü |  | **DOGRU** |
| `denetim/OLCU-KAPISI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L69 `sys.exit(1 if KALDI else 0)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ORTAK-0076-BIRLESTIRME-SINAVI.py` | "🔴 BİRLEŞTİRİLEMEZ", **exit 1** | ölçüldü |  | **DOGRU** |
| `denetim/SAFEVI-DOGU-0081-uygula.py` | koddan: sıfır-dışı çıkış yolu L312 `sys.exit(1)` | koddan; koşulmadı: dosya yazar (open('w') L319) |  | **DOGRU** |
| `denetim/SESSIZ-SIFIR-TARA-KAPI-SINAV-1006.py` | koddan: sıfır-dışı çıkış yolu L108 `sys.exit(1 if KALDI else (2 if OLCULEMED` | koddan; koşulmadı: dosya yazar (rmtree L97), uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-BIRLESTIR-0907.py` | koddan: sıfır-dışı çıkış yolu L537 `sys.exit(main())`; L533 `return 1 if dusen else 0`; L502 `return 1` | koddan; koşulmadı: dosya yazar (json.dump L73) |  | **DOGRU** |
| `denetim/SINAV-DONEM-KAYNAK-0907.py` | "🔴 KUSUR VAR — dayanak yaması YAZILMAZ"; exit yok (2 yalnız alet bulunamazsa, L35) | 0 (koşulmadı (dosya yazar); koddan) | 112 | **YALAN-0** · YALAN-0 → KAPANDI (canlı, bugün 0; 2 yol, biri LAB'ın görmediği node süzgeci; +1 yalan-1 yolu → 2) · 60b7731c · DÜZELTME (UMIT Y §1, audit hook ölçümü): yalnız %TEMP%'e yazar, siler; repo yan etkisi YOK — LAB'ın statik AST sınıflaması geçici dizini repo yazımından ayırmıyordu |
| `denetim/SINAV-IKINCI-GECIS-0903.py` | koddan: sıfır-dışı çıkış yolu L150 `raise SystemExit(1)`; L26 `raise SystemExit(__doc__)` | koşuldu exit 1 (çöktü/argüman eksik) |  | **DOGRU** |
| `denetim/SINAV-JSON-ESDEGER-0907.py` | koddan: sıfır-dışı çıkış yolu L248 `sys.exit(main())`; L244 `return 1 if kotu else 0` | koddan; koşulmadı: dosya yazar (os.remove L236) |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ACIK-0907.py` | koddan: sıfır-dışı çıkış yolu L348 `sys.exit(main())`; L264 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ACIKBAGLAM-0907.py` | kendisi "⚠️ BU ALET HÜKÜM VERMEZ" diyor; `main` hep 0 | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/SINAV-KOSU8-ACIKCINS-0907.py` | koddan: sıfır-dışı çıkış yolu L226 `sys.exit(main())`; L103 `return atesle()` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ACIKUZANTI-0907.py` | koddan: sıfır-dışı çıkış yolu L238 `sys.exit(main())`; L136 `return atesle()` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ALASKA-DONUSTUR-0907.py` | koddan: sıfır-dışı çıkış yolu L587 `sys.exit(main(sys.argv[1:]))` | koddan; koşulmadı: dosya yazar (open('w') L496), KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ALASKA-KIYAS-0907.py` | koddan: sıfır-dışı çıkış yolu L157 `sys.exit(main())`; L80 `return 2`; L149 `return 1` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ALASKA-MALIYET-0907.py` | koddan: sıfır-dışı çıkış yolu L149 `sys.exit(main())`; L69 `return 2`; L106 `return datetime.date(int(s[0:4]), int` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ALETESIK-0907.py` | koddan: sıfır-dışı çıkış yolu L161 `sys.exit(main())`; L127 `return 1 if kotu else 0`; L133 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-B-0907.py` | koddan: sıfır-dışı çıkış yolu L231 `sys.exit(main())`; L153 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-BASLIK-0907.py` | koddan: sıfır-dışı çıkış yolu L208 `sys.exit(main())`; L164 `return 1 if kotu else 0`; L170 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-BITIS-0907.py` | koddan: sıfır-dışı çıkış yolu L172 `sys.exit(main())`; L87 `return 2`; L129 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-BUGUN24-0907.py` | koddan: sıfır-dışı çıkış yolu L258 `sys.exit(main())`; L205 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-CINS-0907.py` | koddan: sıfır-dışı çıkış yolu L230 `sys.exit(main())`; L149 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ENKLAV-0907.py` | koddan: sıfır-dışı çıkış yolu L259 `sys.exit(main())`; L163 `return 2`; L192 `return 2` | koddan; koşulmadı: dosya yazar (makedirs L121), KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-EVREN-0907.py` | koddan: sıfır-dışı çıkış yolu L175 `sys.exit(main())`; L139 `return 1 if kotu else 0`; L144 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-KAPI-0907.py` | koddan: sıfır-dışı çıkış yolu L233 `sys.exit(main())`; L137 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-KILIT-0907.py` | koddan: sıfır-dışı çıkış yolu L223 `sys.exit(main())`; L217 `return 1 if kilit else 0`; L148 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-KOS-0907.py` | koddan: sıfır-dışı çıkış yolu L226 `sys.exit(main())`; L181 `return 1 if kotu else 0`; L192 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-MUKERRERANAHTAR-0907.py` | koddan: sıfır-dışı çıkış yolu L205 `sys.exit(main())`; L148 `return 1`; L102 `return atesle()` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-PETEKSIZ-0907.py` | koddan: sıfır-dışı çıkış yolu L223 `sys.exit(main())`; L217 `return kod`; L179 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-RENKSIZ-0907.py` | koddan: sıfır-dışı çıkış yolu L194 `sys.exit(main())`; L134 `return 1 if kotu else 0`; L139 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-SAHIP-0907.py` | koddan: sıfır-dışı çıkış yolu L246 `sys.exit(main())`; L147 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-SIFIR-0907.py` | koddan: sıfır-dışı çıkış yolu L215 `sys.exit(main())`; L150 `return 1 if kotu else 0` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-URETIMSIZ-0907.py` | koddan: sıfır-dışı çıkış yolu L208 `sys.exit(main())`; L78 `return 2`; L87 `return 2` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KOSU8-ZINCIR-0907.py` | koddan: sıfır-dışı çıkış yolu L307 `sys.exit(main())`; L192 `return atesle()` | koddan; koşulmadı: KOSU8 ailesi: uzun kosu/uretim/kapi cagirir, uretim/git/tarayici cagirir |  | **DOGRU** |
| `denetim/SINAV-KUR-ALANI-0905.py` | koddan: sıfır-dışı çıkış yolu assert L62,63,82 | koddan; koşulmadı: dosya yazar (unlink L86) |  | **DOGRU** |
| `denetim/SINAV-RENK-98-0903.py` | "🔴 25 ALTINA DÜŞTÜ"; exit yok (2 yalnız artefakt/sayı tutmazsa) | 0 (koşulmadı (dosya yazar); koddan) | 159 | **YALAN-0** |
| `denetim/SINIR-BERLIN-0076-sina.py` | koddan: sıfır-dışı çıkış yolu L67 `sys.exit(1 if (kotu or bos or ihlal) els`; L46 `sys.exit(1)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/SINIR-CIZGI-0076-SINA.py` | "  HATA <yol>" (node --check düştü); hiç exit yok | 0 (geçen hâl ölçüldü exit 0 (OK); kalan yol koddan) | 36 | **YALAN-0** |
| `denetim/SINIR-D-AMERIKA-0077-yukselt.py` | `--sina` kipi **data/d_sinirlar_amerika.js'i YAZIYOR** ve hüküm basmıyor; docstring "sözlük boşken çıktı commit'li dosyayla BİREBİR aynıdır" diyor — ölçümde git diff 42 satır fark gösterdi, exit 0 (bkz. olay notu) | ölçüldü 0 |  | **BELIRSIZ** |
| `denetim/SINIR-D-AVRUPA-ORTA-0077-C.py` | veri üreticisi (data/ yazar, L228); SystemExit yalnız girdi/plan tutarsızlığında; koşulmadı | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/SINIR-D-OKYANUSYA-0077-olc.py` | "① … beklenen X ölçülen Y ✗"; betiğin kendi exit'i yok (exit 2 yalnız içe aktarılan olcu_kapisi_1006'dan) | 0 (koşuldu: exit 2 ÖLÇÜLEMEDİ (girdi yok); ✗ yolu koddan) | 267 | **YALAN-0** |
| `denetim/SIRADA-ENVANTER-0930.py` | rapor üreticisi (md yazar), hüküm yok | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/SIRADA-MUTABAKAT-0930.py` | rapor üreticisi (md yazar), hüküm yok | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |
| `denetim/TOPLU-SINAV.py` | koddan: sıfır-dışı çıkış yolu L313 `sys.exit(oz_sinav() if a.oz_sinav else k` | koddan; koşulmadı (TOPLU-SINAV: alt komut koşturur + geçici dosya yazar) |  | **DOGRU** |
| `denetim/UMIT-W46b-OLC-1006.py` | `sina`: "SINAV: KALDI"; hiç exit yok | 0 (`<kök> sina` geçen hâl ölçüldü exit 0; kalan yol koddan) | 131 | **YALAN-0** |
| `denetim/denetle_etiket_ok104.py` | koddan: sıfır-dışı çıkış yolu L231 `sys.exit(1)`; L95 `sys.exit(2)` | koddan; koşulmadı: dosya yazar (open('w') L88) |  | **DOGRU** |
| `denetim/olcu_kapisi_1006.py` | koddan: sıfır-dışı çıkış yolu L34 `sys.exit(2)`; L66 `sys.exit(1 if kod == 1 else 2)` | koşuldu exit 0 |  | **DOGRU** |
| `denetim/ongoru_kapi.py` | öngörü listesi ("MAZERETSİZ kalemler"), hüküm/exit yok | koddan/ölçüldü 0 |  | **SINAV-DEGIL** |

# LAB-DIZINSIZ-KIMLIK-1010 — ④ dizinde eksik devlet (iki yön) + ① ölü kimlik boyası

LAB denetleyici · 10 Ekim 2026 · **yalnız ölçüm** — veri düzeltmesi yok (§7), tavan önerisi yok (§3.4-4).

## 0. Taban ve parametreler
| | |
|---|---|
| Taban commit | `origin/main` = **`46f9d8826fb3eeb8dec33bd8a084e457c65478a2`** (`git rev-list --count HEAD..origin/main` = 0) |
| Ölçüm zemini | detached worktree `C:\atlas-kimlik-olcum` (iş bitince kaldırıldı) |
| Yayın dosyası | `data/devlet_harita_ust.js` **3.148.869 bayt** · sha256 `925b2483dd8c8357879481e44cdfaed5123db849cbc35ba9b64b10405b865faa` · son dokunan `14174ef7` KOŞU 21 (7 Ekim 03:33) |
| Çözülmüş harita | `py arac/kodla.py coz-c data data/devletler_harita.js` → **181.080.905 bayt** · sha256 `82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c` · (`devlet_parcalar.js` sha256 `60103c5a…266624`) |
| Haritanın üretim izi (URETIM_IZI) | motor `uret_petek.py`/`girdi.py`/`renkler.py` **3/3 AYNI** tabanla (CRLF-normalize; HAVVA CRLF ile özetliyor — normalize edilmezse 95/95 "farklı" görünür) · girdi **77/95 AYNI, 18 FARKLI**: yerlesimler.js · _afrika · _afrika2 · _amerika · _asya · _ek · _ek15 · _ek26 · _ek28 · _ek29 · _ek_macaristan · _gdasya · _h2_kuzeyafrika · _kamerika · _ok107 · _ok110 · _seyrek · _sinir_kuzey ⇒ harita KOŞU 21 verisinin ürünü, taban verisinin değil. `devletler.js` (künye) izde YOK ⇒ künyenin o günden beri değişip değişmediği haritadan okunamaz |
| Dizin tanımı | `data/devletler.js` `id:` ∪ `harita:` = **920** (897 künye) — `durum_tablosu.kimlik_evreni()` ile AYNI tanım · BOYALAR 704 |

Worktree'de yazılan TEK dosya `data/devletler_harita.js` (gitignore'lu, koordinatör izniyle); `git status --short` boş kaldı, takipli hiçbir dosya değişmedi.

## 1. ④ DÜZ YÖN — kullanılan ama dizinde olmayan kimlik

### 1.1 `girdi.py`nin okuduğu dosyalar (koddan)
`arac/girdi.py` → `from girdi_listesi import GIRDI_DOSYALARI` → **93 dosya, 93'ü de `yerlesimler*.js`** (`yukle()` yalnız bunları okur). `data/` altındaki 94. yerleşim dosyası `yerlesimler_p77_kafkas.js` listede YOK (bağlanmamış parti).

### 1.2 93 dosyalık evrenin yeniden ölçümü — §1.5 "✓ 0" DOĞRULANDI
- `durum_tablosu.kimlik_evreni()` + `bosluk_kovalari()`: 607 kimlik / 14.208 pencere · **eksik = {} (0)** · kasıtlı `__BOSLUK__` 99 ✓ (§1.5 ile aynı).
- `girdi.yukle()` ayrıştırılmış veriyle ek: s: 14.523 · isg: 372 · **`v:kid` 485 — `v:kid` dizinsizi de 0** (§1.5 satırı `v:kid`i saymıyor; ölçtüm, 0).
- Not: regex sayacı 14.208, ayrıştırıcı s+isg 14.895 — fark sayım yöntemi (regex `s:[ … ]` bloğunu `kaynak:` metnindeki `]`de erken kesiyor); kimlik KÜMESİ sonucu değişmiyor (iki yöntem de 0).

### 1.3 Geniş evren — HARİÇ kalan her şey
Yöntem: `scratch/kimlik/tara.py` — depodaki BÜTÜN `.js`/`.json` dosyaları (`.git`, `veri-kaynak`, `assets` hariç), dize/yorum-farkında ayrıştırıcıyla `s:[{…d:}]`, `isg:[{…d:}]`, `v:[{…kid:}]` (+ `kaynakli_halka_*.js` için `devlet:`), ayrıca JSON dize değerlerinin İÇİNE gömülü JS parçaları (öneri dosyalarındaki `"yeni": "s:[{…}]"` metinleri; "gömülü" diye işaretli). Ek olarak bütün `origin/*` dalları (24): `git diff --name-only --diff-filter=AM origin/main...<dal>` ile yalnız dalda eklenen/değişen dosyalar `git show` ile okundu (kasa-*, makine/kasa, makine/havva*, makine/umit*, lab-*, kosu19, projeksiyon, yedek/…).
Tarayıcı doğrulaması: 93 canlı dosyanın **92'sinde** sayım `girdi.oku_dosya()` ile birebir; `yerlesimler_ok107.js` +16 fazla — sebebi §6 yan bulgu (çift `s:` anahtarı), tarayıcı hatası değil.

| Kova | dosya | atıf | dizinsiz |
|---|---:|---:|---:|
| A canlı girdi (93) | 93 | 15.396 | **0** |
| B `data/yerlesimler_*` bağlanmamış (`p77_kafkas`) | 1 | 11 | 0 |
| C `data/yer_yama_*` | 88 | 19.449 | 0 |
| D `data/kaynakli_halka_*` (`devlet:`; `osmanli` istisnası) | 5 | 198 | 0 |
| E `data/` öteki (üretilmiş/paket/kademe/koridor…) | 308 | 15.734 | 0 |
| F `denetim/uygulanmis-*` | 14 | 322 | 0 |
| G `denetim/` öteki (öneri/yama/aday) | 739 | 15.525 | **31** |
| H `arsiv/` | 2 | 886 | 0 |
| I `oturumlar/` (tahta.json mesaj metni) | 4 | 26 | 2 |
| DAL-* (yalnız dalda değişen) | 93 | 41.928 | 10 (hepsi tahta.json kopyaları) |

### 1.4 Dizinsiz kimlikler — ADIYLA (13 ad; 2'si yapay)
| Kimlik | kullanım | alan | tarih aralığı | yer (dosya:satır) | dosya durumu | `devletler.js`te yakın id |
|---|---:|---|---|---|---|---|
| **kazak-hetmanligi** | 12 | s (11) · v:kid (1, gömülü) | 1648-01-01 → 1764-11-21 | `denetim/YAMA-BOZKIR-KAZAK-0915.json`:501,544,577,620,674,727,780,823,861 · `denetim/YAMA-RUS-0913.json`:309 (2 dönem) · `denetim/YAMA-KOSU10-KALAN-0917.json`:2189 | ÖNERİ — veriye yazılmadı | yok (`zaporojye`, `don-kazak` var) |
| **rus-amerika** | 5 | s | 1799-01-01 → 1867-06-20 | `denetim/yer_yama_alaska_devir_0907.js`:77,104,131,158,175 | öneri | yok |
| **kalmuk** | 4 | s | 1632-01-01 → 1771-10-30 | `denetim/YAMA-BOZKIR-KAZAK-0915.json`:153,192,394,960 | ÖNERİ | yok |
| **hongoray** | 2 | s | 1281-01-01 → 1703-01-01 | `denetim/SIBIRYA-0903-adaylar.json`:1123,1856 | aday listesi | yok |
| **gvalyar-sindiya** | 1 | s | 1818-06-03 → 1923-10-29 | `denetim/yer_yama_asya_1923.js`:57 | ÖNERİ | `gvalyar` |
| **indor-holkar** | 1 | s | 1818-06-03 → 1923-10-29 | `denetim/yer_yama_asya_1923.js`:63 | ÖNERİ | `indor` |
| **innu** | 1 | s | 1281-01-01 → 1923-10-29 | `denetim/ZINCIR-KAMERIKA-0903.json`:5990 | zincir/öneri | yok |
| **kartli** | 1 | s (gömülü) | 1490-01-01 → 1762-01-01 | `denetim/YAMA-KARTLI-KAHETI-0912.json`:61 | öneri | `kartli-kralligi` |
| **kaheti** | 1 | s (gömülü) | 1490-01-01 → 1762-01-01 | `denetim/YAMA-KARTLI-KAHETI-0912.json`:65 | öneri | `kaheti-kralligi` |
| **buton** | 1 | s (gömülü) | 1540-01-01 → 1906-01-01 | `denetim/YAMA-0052-TENHA.json`:40 | ÖNERİ ("künye+renk ön koşuluna bağlı") | yok |
| **luwu** | 1 | s (gömülü) | 1350-01-01 → `<BULUNAMADI…>` | `denetim/YAMA-0052-TENHA.json`:27 | ÖNERİ (aynı) | yok |
| karamanogullari | 6 (1 metin × 6 dal kopyası) | s (gömülü) | 1276-01-01 → 1467-01-01 | `oturumlar/tahta.json`:62383 (main, makine/havva-h0008, makine/kasa) · :62183 (makine/havva, makine/lab, yedek/havva-m5771-yerel) | tahta MESAJ metni, veri değil | `karaman` |
| *`<kimlik>`* | 6 | s (gömülü) | — | `oturumlar/tahta.json`:93161 / 92883 | şablon yer tutucu — YAPAY | — |
| *`__yapay__`* | 1 | s | 1000 → 2100 | `denetim/ARAC-ANTLASMA-KADEME-SINAV-0074.js`:121 | sınav fikstürü — YAPAY | — |

Okuma (sayı, yorum değil): veri katmanında (A–F + dallardaki veri dosyaları) dizinsiz kimlik **0**; 11 gerçek ad yalnız **uygulanmamış öneri/aday dosyalarında** (`denetim/`), 1'i tahta metninde. 5'inin dizinde **başka adla** karşılığı var (gvalyar, indor, kartli-kralligi, kaheti-kralligi, karaman) ⇒ bu öneriler olduğu gibi uygulanırsa dizinsiz kayıt doğar. **İki evren:** §1.5 evreni (93 dosya, s+isg) = **0** · bu ölçümün evreni (bütün depo + 24 dal) = **13 ad / 43 atıf** (11 gerçek ad / 30 atıf + 2 yapay) — çelişki değil, evren farkı. Tam satır listesi: `LAB-DIZINSIZ-KIMLIK-1010-dizinsiz.csv`.

## 2. ④ TERS YÖN — künye var, boya yok
**(R) Renk evreni** (`durum_tablosu.renksiz_kovalari`, BOYALAR — koşu istemez): DELİK **7** — §1.5 ile aynı. Hepsi yalnız `s:`'te (isg: 0):
`eyyubi-hama` (1 pencere · künye 1178→1342) · `gozleroglu` (1 · 1408→1418 · `harita:"gozleroglu"` kendine işaret ediyor, BOYALAR'da yok) · `kudus-kralligi` (3 · 1099→1291) · `resuli` (2 · 1229→1454) · `sicilya-kralligi` (3 · 1072→1282) · `tahiri` (2 · 1454→1517) · `trablus-kontlugu` (1 · 1109→1289).
6'sında `boya_gerekli:true` beyanı VAR; **`tahiri`de YOK** (beyansız tek delik).
Diğer kovalar: sessiz 141 (73'ü `boya_gerekli` beyanlı) · tâbi-çizili 14 (yalnız `v:kid`).

**(H) Harita evreni** (çözülmüş `devletler_harita.js`, 585 boyanan anahtar): `s:`'te kullanılan ama haritada **gövdesi olmayan künye 12** = yukarıdaki 7 + rengi OLAN ama gövdesi olmayan **5**:
`ahaya-prinkepsligi` (s:1 · `boya_gerekli:true`) · `cemisgezek-beyligi` (s:1) · `kaheti-kralligi` (s:1) · `meysur-racaligi` (s:3) · `rif-cumhuriyeti` (s:1).
Bu 5'in s: kaydı KOŞU 21'den SONRA değişen dosyalarda (`yerlesimler.js`, `_asya`, `_h2_kuzeyafrika`) ve/veya künyesi sonradan değişmiş (örn. 9 Ekim `1edf7f9a` kaheti) — harita bayat olduğu için gövdesiz görünüyor olabilir (ayrılmadı). ⚠️ **TAM İNŞA KOŞUSU (KOŞU 22) SONRASI YENİDEN ÖLÇÜLMELİ**; (R) evreni koşu istemez, (H) evreni ister.

## 3. ① ÖLÜ KİMLİK BOYASI — künye bitişinden SONRA boyanan (gerçek ölçüm, harita = KOŞU 21 yayını)
Araç: `olu_boya.py` (§5). Sonuç: **61 boya anahtarı · 893 (segment × poligon) satırı** → `LAB-DIZINSIZ-KIMLIK-1010-olu-boya.csv` (gün aralığı · poligon = `DEVLET_PARCA_HALKA` indeksi · km² · ağırlık merkezi · dnm temsil noktası). Çapraz okuma `-veride-hala.csv`: **55/61**'inde künye bitişini aşan `s:` dönemi bugünkü veride HÂLÂ var (yerleşim adı + dosya CSV'de; KOŞU 22'de büyük olasılıkla yeniden çizilir); 6'sında yok (akkoyunlu · rusya · meysur · hersek · piombino · bulgaristan) — boya ya motorun devir/emilmesinden ya KOŞU 21 sonrası düzelmiş veriden doğuyor (ayrılmadı).

En büyük tek-segment alanına göre:
| anahtar | ölü boyanan gün aralığı | km² (en büyük segment) | künye bitişi |
|---|---|---:|---|
| mehdi | 1898-09-02 → 1899-01-19 | 1.060.343 | 1898-09-02 |
| ming-hanedani | 1644-04-25 → 1661-04-30 (7 seg) | 846.170 | 1644-04-25 |
| altinorda | 1502-01-01 → 1502-03-01 | 776.821 | 1502-01-01 |
| cagatay | 1370-01-01 → 1379-01-01 | 655.730 | 1370-01-01 |
| cungar | 1758-01-01 → 1759-01-01 | 628.029 | 1758-01-01 |
| timurlu | 1507-05-01 → 1522-09-06 | 598.736 | 1507-05-01 |
| memluk | 1517-04-13 → 1517-07-06 | 530.100 | 1517-04-13 |
| kazak-hanligi | 1847-01-01 → 1868-01-01 | 479.349 | 1847-01-01 |
| toungoo | 1752-01-01 → 1752-04-23 | 341.228 | 1752-01-01 |
| funj | 1821-06-14 → 1821-08-19 | 328.575 | 1821-06-14 |
| bengal-sultanligi | 1576-01-01 → 1592-01-01 | 301.338 | 1576-01-01 |
| afgan-durrani | 1823-01-01 → 1834-05-06 | 277.586 | 1823-01-01 |
| pagan | 1297-01-01 → 1313-01-01 | 245.458 | 1297-01-01 |
| malaka-sultanligi | 1511-08-10 → 1528-01-01 | 193.595 | 1511-08-10 |
| ispanyol-peru | 1824-12-09 → 1825-08-06 | 174.120 | 1824-12-09 |
| maratha | 1818-06-03 → 1923-10-29 (4 seg) | 158.370 | 1818-06-03 |
| yuan-hanedani | 1368-09-14 → 1382-01-06 | 157.921 | 1368-09-14 |
| avusturya (künye `habsburg`) | 1918-11-11 → 1919-09-10 | 146.076 | 1918-11-11 |
| bengal-nevabligi | 1757-06-23 → 1764-10-22 | 128.217 | 1757-06-23 |
| filipin-racaliklari | 1571-06-24 → 1635-01-01 (5 seg) | 115.370 | 1571-06-24 |
| benihalid | 1830-01-01 → 1841-10-01 | 114.350 | 1830-01-01 |

Kalan 40 (km² azalan): gucerat-sultanligi 98.957 · ace-sultanligi 89.056 · meysur 83.142 (1799→1923) · galzay 79.660 · serbedariler 79.450 · ilhanli 73.960 · bicapur 70.865 · kuzey-yuan 70.515 · multan-langah 66.661 · aiz 46.396 · qing-hanedani 44.493 · candar 42.038 · mutapa 40.586 · adal 37.511 (1887→1923) · bosna (künye bosna-kralligi) 32.945 · babur-imparatorlugu 30.663 · burhaneddin 30.427 · fransa 27.378 · singhasari 25.467 · vijayanagara 23.382 · eretna 23.163 · toskana 20.679 · katalan 19.537 · artuklu 19.387 · venedik 18.846 · ahiler 18.522 · akkoyunlu 16.192 · seylan-sinhala 15.901 · mentese 15.713 · rusya 11.688 (1917-03-15→1923) · mataram-sultanligi 10.738 · esrefogullari 9.718 · bulgaristan 8.160 · kaffa 7.561 · hersek 4.619 · ferrara 4.111 · ryukyu 1.474 · bizans 485 · piombino 210 (1548→1923) · kocin 143.
`bulgaristan` bitiş-SONRASI değil **takma adlar arası boşluk** (bulgar-carligi →1396-01-01 ile bulgaristan-prensligi 1878← arası; 1396-01-01→1396-10-01 boyanmış) — araç bu boşluğu da "ölü" kovasına koyuyor.
İkincil kova (aynı geçişte düştü, istenmedi): künye **başlamadan ÖNCE** boyanan 65 anahtar / 798 satır → `-once-boya.csv` (en büyükler: zend 1747-06-20→1751 1,80 M km² · yakub-beg · adal 1281→1415 · somali · ispanyol-peru · umman · tonburi · macaristan-naiplik …).
Künyeye çözülmeyen boyanan anahtar: **0** (585/585 bir künyeye çözülüyor).

## 4. ÖLÇÜLEMEDİ kovası (adıyla)
1. **`v:kid` / himaye dolgusunun ölü boyası** — tâbi/himaye gövdeleri `DEVLET_HARITA`da değil (`donemler.js` `v` gövdesi kimliksiz; himaye ayrı üretim). `donemler.js` çözülmedi (yazma izni yalnız `devletler_harita.js` içindi).
2. **`isg:` örtüsünün ölü boyası** — `ISGALLER` (`uret_devirler.py` çıktısı) okunmadı.
3. **Künyenin harita anındaki hâli** — `devletler.js` URETIM_IZI'nde yok; ① BUGÜNKÜ künyeyi 7 Ekim haritasıyla kıyaslıyor. Künye o günden beri uzatıldıysa ölü boya fazla, kısaltıldıysa eksik görünür.
4. Dallar: yalnız `origin/*` dallarının main'den farklı (A/M) dosyaları; HAVVA/UMIT/KASA makinelerinin **diskte itilmemiş** dosyaları ulaşılamaz.
5. `.md` belgelerindeki örnek parçalar taranmadı (düzyazı); `data/ufuk_bant_parcalar.js` (94,9 MB geometri havuzu) boyut sınırıyla atlandı — kimlik taşıması beklenmez, ama ölçülmedi.
6. ① araç "bitiş sonrası" ile "takma adlar arası boşluk"u ayrı kovaya koymuyor (bulgaristan) — CSV `kunye_pencereleri` sütunundan okunur.

## 5. ① araç taslağı
- Yol (repo DIŞI, oturum scratch'i): `C:\Users\ikizler1\AppData\Local\Temp\claude\C--eczane-rc\03b0eb2d-7a4e-5167-bff9-a5ec00c2e637\scratchpad\kimlik\olu_boya.py` (+ `veride.py` ① × bugünkü veri, `boyasiz.py` ④ ters, `tara.py` ④ düz, `iz.py` URETIM_IZI kıyası, `resmi.py` 93-dosya kontrolü). Scratch oturuma bağlıdır; kalıcılık gerekiyorsa koordinatör bir yere alsın.
- Ne sorar: `DEVLET_HARITA[].dnm[]` [f,t) (app.js `aktifAralik` yarı açık) × boya anahtarına çözülen künyelerin [f,t) birleşimi (`id`∈BOYALAR ya da `harita:` — `uret_petek.py:1070` kuralı). Canlı birleşimin dışında kalan her alt aralık için her `g` poligonunu (`DEVLET_PARCA_HALKA`→`DEVLET_PARCALAR`, ilk halka dış, kalanı delik; app.js `parcaCoz` / `denetle.py _parca` ile aynı çözüm) motorun `alan_km2` küresel formülüyle (R = 6371,0088 km, `uret_petek.py:272`) ölçer. Çıktı: `olu_boya.csv` · `once_boya.csv` · `kunyesiz_boya.csv` · `ozet.txt` (haritanın sha256 + boyutunu yazar). Süre ~25 sn.
- Smoke test değil, **gerçek koşu yapıldı** (§3) — taban `46f9d882` çözülmüş yayın haritası. `C:\atlas-d8*` kopyalarına dokunulmadı.
- KOŞU 22 "SONRA" yüzü için birebir komut:
```
git -C C:\atlas worktree add --detach <yol> origin/main      # KOŞU 22 yayın commit'i
cd <yol> && py arac/kodla.py coz-c data data/devletler_harita.js
set PYTHONIOENCODING=utf-8
py <scratch>\kimlik\iz.py data/devletler_harita.js             # 18 FARKLI → 0 beklenir
py <scratch>\kimlik\olu_boya.py <yol> <cikti>                 # ①
py <scratch>\kimlik\veride.py   <yol> <cikti>                 # ① × bugünkü veri
py <scratch>\kimlik\boyasiz.py  <yol> <cikti>                 # ④ ters, (R)+(H)
```
ÖNCE/SONRA kıyası için bu raporun sha256'ları ve CSV'leri taban alınır.

## 6. Yan bulgu (düzeltilmedi)
`data/yerlesimler_ok107.js` — **Taraz (Evliya-Ata)** (kayıt :205 · `s:` :214 · ikinci `s:` :223, `kaynak:` satırının sonunda) ve **Sayram (İsficâb)** (kayıt :225 · `s:` :230 · ikinci `s:` :239): aynı nesnede **iki `s:` anahtarı**. JS/JSON son anahtarı alır, ilki sessizce yok sayılır; fark `cagatay` bitişi (1370-01-01 ↔ 1370-04-09). `girdi.py`nin bilinmeyen-alan kütüğü bu sınıfı (tekrarlanan anahtar) görmez.

## Ekler
`LAB-DIZINSIZ-KIMLIK-1010-dizinsiz.csv` (43 satır) · `-olu-boya.csv` (893) · `-once-boya.csv` (798) · `-veride-hala.csv` (61).

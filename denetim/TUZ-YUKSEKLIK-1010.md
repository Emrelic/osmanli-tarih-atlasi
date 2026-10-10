# TUZ-YUKSEKLIK-1010 — eğim DEM'i ve motor tuzu

**Taban:** `origin/main` = `534633f8d21cf022c59d8f66fed41d26b568b75b` (ayrı worktree
`C:\atlas-tuzyk`, `--detach`; ölçüm bitince kaldırıldı). Motor KOŞTURULMADI,
`uret_petek.py` İTHAL EDİLMEDİ (AST + metin okuma). Hiçbir ağaca yama uygulanmadı.
Satır numaraları bu tabana aittir.

## Hüküm (tek paragraf)

Koordinatörün bulduğu şey **gerçek ama önbellek deliği DEĞİL, KÜNYE deliğidir.**
`yukseklik.py` ve seçilen DEM tuzda yok — doğru. Ama DEM'in motor üzerindeki
BÜTÜN etkisi önbelleğe **anahtarın içeriğinden** giriyor (petek WKB · yürüyüş
saat matrisi · DEVAM izi). DEM değişirse etkilediği her anahtar kendiliğinden
değişir; **bayat sonuç okunması yapısal olarak erişilemez.** Bu, projenin
`girdi_listesi.py` için 24 Eylül'de ölçüp yazdığı ilkenin aynısı. Eksik olan:
hangi DEM'le üretildiği **çıktının künyesinde (`URETIM_IZI`) YOK** — yalnız logda
(`eğim DEM: …`). ⇒ Önerim ne (a) ne (b): **(c) DEM künyesi `URETIM_IZI.egim`e,
tuza DEĞİL.** Bugün iki DEM de tam ⇒ seçim fark üretmiyor; delik bugün TEORİKTİR.

---

## ① Erişilebilir mi?

### DEM dosyaları (UMIT, `C:\atlas\veri-kaynak\yukseklik\` — gitignore'da, worktree'de YOK)
| dosya | bayt | sha256 | `tam_mi` (bugün) | kutu |
|---|---|---|---|---|
| `etopo2022_30s_dunya.tif` | 626.075.454 | `7bb4779fa7041b70e344a1089c494157089e98e9bcbebba48687e42aa420ed13` | **True** · 43200x17280 · son şeritte 8192 geçerli | -180,-60 → 180,84 |
| `etopo2022_30s_atlas.tif` | 192.260.536 | `4d660c82dcf61c663ccdd24cf453a9dcc7607a39ea814c7a5493ff16a6501121` | **True** · 20520x11160 · son şeritte 8192 geçerli | -25,-11 → 146,82 |

`yukseklik.py` (origin/main = C:\atlas) sha256 `8650852c984a…`. Ölçüm `yukseklik.tam_mi`
doğrudan ithal edilerek yapıldı. ⚠️ Bu UMIT'in diski; HAVVA'nın DEM'leri ÖLÇÜLMEDİ.

### Seçim akışı (`uret_petek.py:700-728`)
- `MOTOR_EGIMSIZ` doluysa → çarpan 0, DEM yok (ortam bayrağı; `MOTOR_*` olduğu için
  **tuzdadır**).
- değilse `EGIM_CARPANI > 0` (sabit 0,005) → `import yukseklik as _yk` (:708) →
  sırayla `dunya`, `atlas`; var olan ilk `tam_mi`=True olan seçilir (:713-717);
  hiçbiri yoksa `SystemExit`.
- DEM-seçimi için başka ortam bayrağı YOK. `_yk` başka yerde kullanılmıyor
  (:6587'de aynı ad döngü değişkeni olarak yeniden bağlanıyor — zararsız).
- ⇒ Bugün ikisi de tam ⇒ **her zaman `dunya` seçilir.** `atlas`a düşmek için dünya
  dosyası silinmeli ya da yarım olmalı. **Delik bugün TEORİK.**

### DEM'in etkisi önbelleğe nereden giriyor (asıl soru)
DEM yalnız `_kvsurt`u (:1328-1399) besler. Ondan türeyenler ve önbelleğe girişleri:
| DEM-türevi | nereye akar | önbellek anahtarında |
|---|---|---|
| `_kvsahip` (:1778) | `PETEK_D` yeniden atama (:3981 → :4019-4021) | `col` (:4385 `_onb_oz(_g)`), `kusat` (:4958 komşu PETEK_D WKB), `govde`/`osm` (:6876 `parca` = petek WKB) |
| `_YR_SAHIP`, `_yr_epok_onar` (:5289) | varlık petekleri `_pe` | `govde`/`osm` (petek WKB), `sb` (:7783 kaplam + bos_bolge WKB) |
| `_YR_PUAN_SAAT` (:6592) | dolgu puanı | `dolgu` (:6432 `_yrp` = saat satırı) |
| hepsi | süreç yolu FAZ1 | DEVAM izi `_sr_iz` (:6994-6997: PETEK_D WKB + `_YR_SAHIP.tobytes()` + `_YR_PUAN_SAAT`) |
| — | `k1_kara`/`k1_goller`/`k1_col`/`k1_kiyi` (:740 · :779 · :4293 · :4768) | DEM'i OKUMAZ (KARA, NE dosyaları, pencere) |

⇒ DEM-türevi bir değeri okuyup anahtarına koymayan önbellek yeri **bulunamadı**
(10 `.anahtar(` çağrısının hepsi tarandı). Sınır: statik okumadır, `globals()`
yoluyla dolaylı okuma görülmez (`ARAC-LEGO-zincir.py`nin sınırıyla aynı).

### DEM içeriği tuzda mı?
**Hayır** — ne `_ONB_TUZ`ta ne `_ONB_GEO_TUZ`ta, ne `girdi.parmak_izi()`nde, ne
`URETIM_IZI`de. "Aynı adda başka içerik" (yeniden indirme, başka ETOPO sürümü)
bugün **hiçbir damgada** görünmez. Önbellek açısından zararsız (yukarıdaki tablo),
künye açısından kör.

---

## ② Başka üye var mı? (AST: `import`, `from … import`, işlev içi ithal, `__import__`/`importlib`/`runpy`/`exec`, `.py` dizgi atıfları)

| modül | nereden | tuzda | ne için | çıktıyı etkiler mi |
|---|---|---|---|---|
| `kosu_kilit` | `uret_petek.py:121` | HAYIR | koşu kilidi (`al`/`birak`) | hayır |
| `yukseklik` | `uret_petek.py:708` | HAYIR | DEM seçimi `tam_mi` | evet, ama yalnız içerik-anahtarlı yoldan (①) |
| `dolgu` | `uret_petek.py:8178` | HAYIR | Ⓑ görünümü → `data/dolgu.js`; `MOTOR_B_DOLGU=1` ile, varsayılan KAPALI | yalnız `dolgu.js`; önbellek KULLANMAZ |
| `girdi_listesi` | `girdi.py:115` (GEÇİŞLİ) | HAYIR — **KASITLI** | `GIRDI_DOSYALARI` | veri; `parmak_izi()` ile künyede. Başlığı: *"motor_izi()'ye GERİ EKLEME"* |
| `motor_onbellek` → `dolgu.py:51` | — | evet | — | — |

- `renkler.py`, `motor_onbellek.py`, `kosu_kilit.py`, `yukseklik.py`, `girdi_listesi.py`: yerel ithal **0**.
- Dinamik ithal (`__import__`/`importlib`/`runpy`/`exec`): **0**.
- `gun.py`: **ithal edilmiyor** — doğrulandı (ne doğrudan ne geçişli).
- Alt süreç: tek `Popen` (:528) — kendini (`MOTOR_ISCI_BETIK` yoksa `__file__`)
  koşturuyor. Not: `MOTOR_ISCI_BETIK` işletim değişkeni olarak tuz dışı ve
  `motor_izi()` betik yolunu değil `arac/uret_petek.py` adını özetler; başka bir
  betiğe işaret ettirilirse işçiler tuzun tanımadığı kodla önbelleğe yazar.
  Varsayılan kullanımda erişilemez; kayıt olarak yazıyorum, yama önermiyorum.

**Genel çözüm ("yerel ithal kümesi otomatik tuza") ÖNERMİYORUM:** `girdi_listesi`
kümeye girer ve 24 Eylül'de bilerek çıkarılan şeyi geri getirir (her yeni yerleşim
dosyası = tam inşa, ölçülmüş bedel: koşu 12 = 19s08dk). Projenin seçtiği mimari
"tuz = kod sürümü, doğruluk = içerik adresli anahtar"dır; bu tuz dışı modüllerin
hiçbiri o mimariyi delmiyor.

---

## ③ Yama — `TUZ-YUKSEKLIK-1010.diff` (uygulanmadı)

**Seçenekler:**
- **(a) `motor_izi()`ye `yukseklik.py`:** doğruluk kazancı **0** (①: DEM etkisi zaten
  anahtarda). Bedeli: `yukseklik.py`ye her dokunuş (docstring dahil) = tam inşa
  (7-8 saat). `§9.1`in ölçtüğü "19 commit'in 12'si boşuna tuz değiştirdi" sınıfının
  yeni bir üyesi olurdu. **REDDEDİYORUM.**
- **(b) seçilen DEM ad+özet tuza:** doğruluk kazancı yine **0**; DEM değişince k1
  katmanlarını ve eğimin dokunmadığı petekleri de öldürür. Ayrıca `girdi.py`
  tuzdadır; `motor_izi()`ye DEM eklemek `girdi.py`ye dokunmak demektir.
  **REDDEDİYORUM.**
- **(c) ÖNERİLEN: DEM künyesi çıktıya.** `yukseklik.dem_izi(yol)` → `{ad, boyut,
  sha256}`; `uret_petek.py` seçimden hemen sonra `_EGIM_IZI`yi kurar, loga basar ve
  dört `URETIM_IZI` yazımına (`bolgeler.js` · `devletler_harita.js` ·
  `petek_govde.js` · `donemler.js`) `"egim": _EGIM_IZI` ekler. Egimsiz koşuda
  `{"ad": null, "carpan": 0.0}`. Okuyucular (`denetle_yayin.py`, `denetle.py:5262`)
  `.get("girdi")`/`.get("motor")` okur ⇒ yeni anahtar onları bozmaz (tarandı).
  Bedel: dünya DEM sha256'sı UMIT'te 2,5 sn; süreç işçileri de modül düzeyini
  koşturduğu için her işçi bir kez öder.
- **Yorum düzeltmesi** (`uret_petek.py:564`): "motor kodu" → "motorun DÖRT kod
  dosyası" + tuz dışı dört yerel modülün listesi ve neden zararsız olduklarının
  tek cümlesi.

`git apply --check` → `origin/main` (`534633f8`) üzerinde **temiz** (çıkış 0,
iki dosya). Satır sonu CRLF korundu; yamalı iki dosya `ast.parse` temiz.

🔴 **TAM İNŞA PARTİSİNE GİRER.** Yama `uret_petek.py`ye dokunur ⇒ `motor_izi` ⇒
`_ONB_TUZ` ve `_ONB_GEO_TUZ` değişir. Tuzu değiştiren tek şey bu dokunuştur
(DEM ya da `yukseklik.py` tuza girmez). `§9.1` ②: biriken yamalarla tek seferde.
KOŞU 22b sürerken uygulanmaz (`§9.1` ③).

### Sınav — `ARAC-TUZ-YUKSEKLIK-SINAV-1010.py` (sentetik, motorsuz)
Sentetik 80x40 GeoTIFF'ler geçici dizinde; tuz `_ONB_TUZ` formülünün birebir
kopyasıyla (ortam sabit) hesaplanır; `URETIM_IZI` yazımları AST ile sayılır.
```
arac=origin/main  --bekle yamasiz   9/9  çıkış 0   (K1-K5 HAYIR: künyede DEM yok, 4 yazımın 0'ı egim taşıyor)
arac=origin/main  --bekle yamali    4/9  çıkış 1   ← sınav ÖTÜYOR
arac=yamalı kopya --bekle yamali    9/9  çıkış 0   (4 yazımın 4'ü egim; aynı ad/başka içerik ⇒ sha farklı; aynı içerik ⇒ aynı)
arac=yamalı kopya --bekle yamasiz   4/9  çıkış 1   ← sınav ÖTÜYOR
```
T1-T3 (tuz `yukseklik.py`/DEM seçimi/DEM içeriğiyle DEĞİŞMEZ) iki ağaçta da
"hayır"dır — bu KASITLI ve sınav onu sabitliyor: biri ileride (a)/(b)'yi
uygularsa T'ler ötecek ve karar bilerek değiştirilmiş olacak. S1: sentetik tam
DEM ⇒ `tam_mi` True, son şeridi nodata ⇒ False, seçim `dunya`→`atlas` döner
(mekanizma gerçek).
⚠️ Sınavın görmediği: ①'deki "her önbellek yeri DEM-türevini anahtarına koyuyor"
hükmü statik okumadır; sınav onu SINAMAZ (motor koşturmadan sınanamaz).

## Bulamadıklarım
- HAVVA'daki DEM'lerin varlığı/sha256'sı ve KOŞU 22b logundaki `eğim DEM:` satırı — ölçülmedi (makine dışı).
- DEM-türevini anahtarsız okuyan önbellek yeri — **bulunamadı** (aradım; statik sınırla).
- (a)/(b)'yi haklı çıkaracak bir doğruluk kazancı — **bulunamadı**.

## § BEYANLI RİSK (koordinatör kararı, 10 Ekim) — `MOTOR_ISCI_BETIK`, yama ÖNERİLMEDİ
`MOTOR_ISCI_BETIK` işletim değişkenidir ⇒ tuz dışı. `motor_izi()` işçi betiğinin ADINI özetler, YOLUNU değil.
Başka bir betiğe işaret ettirilirse işçiler, tuzun tanımadığı kodla önbelleğe yazar. Varsayılan kullanımda bu yol
yok ⇒ bugün TEORİK. Parti dolu olduğu için yama yazılmadı; kayıt "unutulmasın" diye burada (`§9.1`: kural yazılı
olmayan kural değil, UNUTULAN kuraldır). Kapatma adayı: işçi betiğinin İÇERİK özetinin `motor_izi`ye girmesi.
Eksen notu (koordinatör): TUZ "önbellek hâlâ geçerli mi"yi sorar; DAMGA (`URETIM_IZI`) "bu çıktıyı hangi girdiyle
ürettik"i sorar. DEM sorusu bir KÖKEN sorusudur ⇒ (c) damgaya yazar, tuza değil — onaylandı, partide.

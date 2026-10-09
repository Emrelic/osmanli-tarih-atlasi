# KUNYE-KRONO-KAYNAK-1006 — künye içi kronolojinin KAYNAK ölçümü (yalnız ölçüm)

Ölçen: UMIT-W38-KUNYE-KRONO-KAYNAK-1006 · istek: UMIT İRTİBAT · 6 Ekim 2026
Ağaç: `C:\atlas-w38` = **origin/main `7afbe86f`** (detached; ölçüm sonrası kaldırıldı).
`data/`, `js/`, `arac/` YAZILMADI. Commit yok.
Araç: `denetim/ARAC-KUNYE-KRONO-KAYNAK-1006.js` (node; `index.html`in yüklediği 69 `data/*.js`
dosyasını — paket_NN içindekiler dahil — TARAYICI GİBİ `new Function('window',…)` ile yükler).
Satır satır döküm: `denetim/KUNYE-KRONO-KAYNAK-1006.tsv` (9.377 satır: katman · sahip · sıra · t · kova · gizli iz alanı · b · kaynak).
Öngörü (ölçümden önce): `denetim/KUNYE-KRONO-KAYNAK-1006-ONGORU.md`.

Yükleme: 69 dosya, 1 hata — `acilis_siluet.js` (`document is not defined`, DOM betiği, veri değil).
Diskteki 109 `kronoloji_*.js`in **109'u da** `index.html`de adıyla geçiyor (yüklenmeyen 0).

**Kova tanımı:** `arac/durum_tablosu.py` `kisi_kova` (fa1dd9af) ile BİREBİR —
`tdv` = "TDV:" ile BAŞLAR · `beyan` = küçük harfle "bulunamadı" ile BAŞLAR · `baska` = dolu, öteki ikisi değil ·
`kaynaksiz` = yok/boş. Ölçüt BAŞLANGIÇtır, içerik değil.

---

## ① Alan ve evren

- Alan adı **`kronoloji`** (`devletler.js:40` şema yorumu `kronoloji : [{ t, tur, b, kaynak? }]`).
  `js/app.js` aynı adı okuyor: `D[i].kronoloji` (`app.js:14281-14284`, `derinKronolojiBindir`).
- `window.DEVLETLER` = **896 künye** · `kronoloji` dolu **865** · boş/yok **31**.
- Künye içi madde toplamı **3.203**.
- Maddede görülen alanlar: `t` 3203 · `tur` 3203 · `b` 3203 · **`kaynak` 1140** · `ic_not_b` 236 ·
  `gun` 43 · `taraflar` 20 · `ic_not_t` 11.

⚠️ **EZİLME — görünen katman diskteki katman değil.** `app.js` `derinKronolojiBindir`
ad eşlemeli 26 dosyayı künyeye `=` ile bindiriyor (`app.js:14284`). 26 künyenin kendi
**228** maddesi ekranda HİÇ görünmüyor; sayfayı açınca konsola `🔴 KRONOLOJİ EZİLDİ`
uyarısı düşmeli. (`app.js:14274` yorumu "bugün çakışma YOK" diyor: **BAYAT** — 26/26 ezilme var.)
Ezilen 26: habsburg 14→117 · rusya 15→158 · lehistan 12→78 · venedik 11→86 · iran 6→107 ·
bizans 15→97 · memluk 10→155 · kirim 10→91 · macaristan 12→127 · ingiltere 6→270 · fransa 3→184 ·
almanya 11→132 · ispanya 7→158 · portekiz 6→86 · akkoyunlu 12→77 · karakoyunlu 11→70 ·
altinorda 5→44 · hollanda 7→42 · isvec 3→95 · timurlu 10→24 · atina-dukaligi 4→25 ·
gurcistan 13→45 · katalan 4→9 · naksa-dukaligi 3→25 · rodos-sovalyeleri 7→96 · safevi 11→81.
Ezilen 228 maddenin kovası: kaynaksız 217 · başka 11.

## ② Kova dağılımı — künye içi katman

| | tdv | başka | beyan | kaynaksız | toplam |
|---|---|---|---|---|---|
| **diskteki künye katmanı** (865 künye) | **103** (%3,2) | **898** (%28,0) | **139** (%4,3) | **2.063** (%64,4) | 3.203 |
| görünen künye katmanı (ezilen 26 hariç, 839 künye) | 103 | 887 | 139 | 1.846 (%62,1) | 2.975 |

Künye bazında: **tamamen kaynaklı 282 · hiç kaynağı yok 357 · karışık 226** (865).

🔴 **Kova tanımının yan etkisi — ölçüldü.** `başka` kovasının **254**'ü "TDV" ile başlıyor ama
"TDV:" biçiminde değil (`TDV karakoyunlular / uzun-hasan: …`, `TDV semendire: …`). 314'ünde
TDV/islamansiklopedisi geçiyor. Bu kova TANIM gereği `başka`dır; TDV dayanağı **başka**
kovasının içinde saklı. Birleştirilmiş "TDV dayanaklı" sorusu ayrı bir tanım ister (koordinatör kararı).

Her kovadan 3 örnek (sahip#sıra · t · b · ⟨kaynak⟩):
- **tdv:** `mekke-serifligi#4` 0969-01-01 ⟨TDV: mekke⟩ · `liao-hanedani#0` 916-01-01 ⟨TDV: karahitaylar⟩ ·
  `heian-japonya#0` 794-01-01 ⟨TDV: japonya⟩
- **başka:** `kacar#5` 1925-01-01 ⟨kacarlar — "Kaçar hânedanı sona ermiş oldu (1925)"⟩ ·
  `sovyet-rusya#3` 1940-08-06 ⟨USHMM-KD: …⟩ · `sovyet-rusya#4` 1991-12-25 ⟨OH: …⟩
- **beyan:** `evfat#3` 1386-01-01 · `kaffa-kralligi#2` 1890-04-06 · `kaffa-kralligi#3` 1897-01-01
  (hepsi ⟨bulunamadı (TDV) — standart akademik kaynak …⟩)
- **kaynaksız:** `bizans#0` 1204-04-13 IV. Haçlı Seferi · `bizans#1` 1261-07-25 · `bizans#2` 1302-07-27
  (üçü de EZİLEN künyede — ekranda görünmez; görünen kaynaksız örnek için TSV'de `kova=kaynaksiz`)

## ③ Kaynak metni başka alanda gizli mi

`kaynak` DIŞINDAKİ alanlarda `TDV` ya da `islamansiklopedisi` geçen künye maddesi **114**;
bunların **89**'u `kaynaksız` kovasında (beyan 0), **40 künyede**.
Alan dağılımı (114 içinde, bir madde birden çok alan taşıyabilir): `ic_not_b` 84 · `gun` 17 ·
`b` 12 · `ic_not_t` 4.
Örnek: `lur-i-buzurg#0` 1155-01-01 [ic_not_b] · `lur-i-buzurg#5` 1424-01-01 [ic_not_b] ·
`lur-i-kucek#0` 1184-01-01 [ic_not_b]. Öteki künyeler: mazenderan-marasi · papalik (4) · imereti ·
arnavutluk-bagimsiz · granada … (tam liste TSV'de `katman=kunye` + `gizli_iz_alani` dolu + `kova=kaynaksiz`).
⇒ **89 madde düşük maliyetli aday:** iz `kaynak:`a taşınabilir. ⚠️ Ama `ic_not_b`deki "TDV"
bir dayanak da olabilir, bir "TDV'de yok" notu da — taşımadan önce cümle okunmalı (§4 tuzak ⑧).

## ④ Karşılaştırma — `data/kronoloji_*.js`

| katman | tdv | başka | beyan | kaynaksız | toplam |
|---|---|---|---|---|---|
| künye içi (disk) | 103 | 898 | 139 | **2.063** | 3.203 |
| **ad eşlemeli dosyalar** (26 dosya, künyeye bindirilen) | **0** | 2.363 | 116 | **0** | 2.479 |
| SINIR/COK dosyaları (karşılaştırma için) | 733 | 2.797 | 165 | **0** | 3.695 |

- Ad eşlemeli dosyalarda `kaynak` alanı **2.479/2.479** maddede var. `tdv` kovası **0**:
  TDV'yi `TDV \`avusturya\`: "…"` biçiminde yazıyorlar ⇒ `başka`ya düşüyor (251 "TDV" ile başlıyor,
  584'ünde TDV geçiyor).
- **Eşlenmeyen 15 `KRONOLOJI_*`** (künye yok, ekranda künyeye bağlanmıyor): CIN · HINDISTAN ·
  JAPONYA · MISIR · OZBEK · ANADOLU · ARABISTAN · BALKAN · DOGU_AFRIKA · GUNEY_ASYA · IRAN_ARDILLARI ·
  ITALYA_SEHIR · KUZEYAFRIKA · ORTA_ASYA · SIRBISTAN. Ölçüme girmedi. Bunlar bölge dosyası olabilir;
  `app.js`'te başka bir tüketici var mı bakılmadı (**ölçülmedi**).
- **Hüküm:** dosya katmanı **açık ara daha kaynaklı** (kaynaksız %0 karşı %64,4).
  Künye katmanının kaynaksızlığının ~%10'u (217 madde) zaten ezilen, ekranda görünmeyen maddeler.

## ⑤ Kapı var mı

- `arac/denetle.py`: `DEVLETLER[].kronoloji` okunmuyor. `.kronoloji` / `["kronoloji"]` /
  `get("kronoloji")` erişimi **0**. `kaynak` okumaları yerleşim ikizi (`:1092`) ve yerleşim dönemi
  (`:2805`) içindir.
- `arac/durum_tablosu.py`: kronolojiyi yalnız **kimlik** evreni için okuyor (`:95-109`,
  `devletler/kunye/taraflar/devlet` alanları); `kaynak` okumuyor. Künye içi `kronoloji` okunmuyor.
- `arac/denetle_yayin.py`: künye kronolojisi kaynağı için kapı yok (grep: yalnız yorum satırları `:508`, `:625`).
- `.kronoloji` okuyan öteki `arac/` dosyaları: `_kronoloji_uygula.py` · `_kunye_uygula.py` ·
  `bagli_delik.py` · `_uk.js`. Hiçbiri madde `kaynak` kovası saymıyor (`_uk.js` künyenin
  kendi `kaynak`ını okur, maddeninkini değil).
⇒ **Kapısız**, kişi katmanının kardeşi. Ölçüm bugün yalnız bu tek-seferlik araçta.

## Öngörü karşılaştırması (mühür → ölçüm)

| | öngörü | ölçüm | |
|---|---|---|---|
| ① madde / künye | 2000–2600 / 450–620 | **3.203 / 865** | ✗ (`devletler.js` başlığındaki `tur` sayıları toplamı 2.180: BAYAT) |
| ② kaynaksız | ≥ %90 | **%64,4** | ✗ |
| ② tdv / başka / beyan | ≤%5 / ≤%5 / ≤%1 | %3,2 / %28,0 / %4,3 | ✓ / ✗ / ✗ |
| ③ gizli iz | < 50 | **114** (89 kaynaksız) | ✗ |
| ④ dosya katmanı dolu | ≥ %70 | **%100** | ✓ |
| ⑤ kapısız | evet | evet | ✓ |

## Bulamadıklarım

- W28'in "33 künye maddesinin 0'ında kaynak" bulgusunun hangi 33 madde olduğu **bulunamadı**
  (W28 raporu okunmadı). Bütün katmanda bu genelleme **TUTMUYOR**: 1.140/3.203 maddede kaynak var.
  33 madde muhtemelen 357 "hiç kaynaksız" künyeden bir örneklem — **doğrulanmadı**.
- Eşlenmeyen 15 `KRONOLOJI_*` dosyasının tüketicisi ölçülmedi.

## Öneriler (hüküm koordinatörde)

1. Künye katmanı için §1.5'e kişi kaynağının kardeşi bir satır eklenebilir
   (`kisi_kova` aynen; görünen katman = ezilenler hariç).
2. "TDV:" dışındaki TDV biçimleri (künye 254 · dosya 251 · SINIR/COK 784) için kova tanımı mı
   genişlesin, veri mi normalleşsin: karar gerekiyor. Bugünkü tanım bu maddeleri `başka` sayıyor.
3. Ezilen 26 künyenin 228 maddesi ölü veri: ya silinsin ya dosyaya taşınsın.
   `app.js:14274`teki "çakışma YOK" yorumu bayat.
4. 89 gizli izli madde `kaynak:`a taşınabilir; önce cümleler okunmalı.

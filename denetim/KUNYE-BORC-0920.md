# KUNYE-BORC-0920 — künyesiz kimlikler (A) ve sessiz borç (B)

**Oturum:** KUNYE-BORC-0920 (Opus 5) · **Tarih:** 20 Eylül 2026 · **Koordinatör:** 1.MURAT
**Dosya sahipliği:** `data/devletler.js` (yalnız eklenen 12 künye) + bu dosya.
**Sınav:** `py arac/denetle.py` → **SONUÇ: temiz** (ekleme sonrası koşuldu).

---

## A — 12 künyesiz kimlik YAZILDI

Ölçüm girdisi `glm/KUNYESIZ-TARAF.json` (GLM-5, doğrulanmış): 1923 D-sınırı
kayıtlarında taraf olarak geçen ama `devletler.js`te künyesi olmayan 12 kimlik.
Hepsi yazıldı; `id`ler D kayıtlarından **aynen** korundu (bağlantı kırılmasın).

| id | f | t | hassasiyet (f) | birincil kaynak |
|---|---|---|---|---|
| `belcika-kongo` | 1908-11-15 | 1960-06-30 | gün | TDV `kongo-demokratik-cumhuriyeti` + history.state.gov |
| `el-salvador-cumhuriyeti` | 1841-01-01 | 1923-10-29 | **ay** | LoC Country Studies + Worldmark |
| `fransiz-bati-afrika` | 1895-06-16 | 1959-01-01 | gün | Digithèque MJP — *décret du 16 juin 1895* |
| `fransiz-ekvator-afrikasi` | 1910-01-15 | 1958-01-01 | gün | Digithèque MJP — *décret du 15 janvier 1910* |
| `ingiliz-altin-kiyisi` | 1874-07-24 | 1957-03-06 | gün | LoC Country Studies Ghana + TDV `gana` |
| `ingiliz-hondurasi` | 1862-01-01 | 1981-09-21 | **yıl** | history.state.gov + Worldmark |
| `ingiliz-kuzey-rodezya` | 1890-01-01 | 1964-10-24 | **yıl** | TDV `zambiya` + Britannica 1922 |
| `ingiliz-nyasaland` | 1891-05-14 | 1964-07-06 | gün | Colin Baker, *Medical History* (Cambridge) |
| `ingiliz-siyera-leon` | 1808-01-01 | 1961-04-27 | **yıl** | TDV `sierra-leone` + Worldmark |
| `newfoundland-dominyonu` | 1855-01-01 | 1934-02-16 | **yıl** | heritage.nf.ca + gov.nl.ca kronolojisi |
| `portekiz-angola` | 1575-01-01 | 1975-11-11 | **yıl** | Worldmark (encyclopedia.com) |
| `portekiz-gine` | 1879-01-01 | 1974-09-10 | **yıl** | TDV `gine-bissau` |

**Doğrulama:** künye sayısı 665 → 677; üç ayrıştırıcı da okuyor
(`girdi.oku_devletler` 677 · `node` eval 677 · `denetle_anakronizm` 677).
12 künyenin de kronoloji maddeleri kendi `f`/`t` penceresinin içinde.

### Bulunamayanlar ve çelişkiler (hepsi künyenin `not:`/`kaynak:` alanında)

- **TDV ölü slug (302, ölçüldü):** `angola` · `kongo` · `el-salvador` · `belize`.
  TDV `portekiz` Angola'yı tarihsiz anıyor. Bu altı kimlik için akademik/resmî
  kaynak adıyla yazıldı (§4'ün "TDV'nin kapsamadığı tanecik" maddesi).
- **`newfoundland-dominyonu` — 26 Eylül 1907:** dominyon günü yalnız Vikipedi'de.
  heritage.nf.ca, Canadian Encyclopedia ve gov.nl.ca kronolojisi 1907'yi **hiç
  anmıyor** ⇒ künye 1907'den değil, kaynaklı **1855**'ten (sorumlu hükûmet)
  başlatıldı. `t` = 1934-02-16 (Komisyon Hükûmeti'nin yemini; dominyon *adı*
  1949'a kadar sürdü — `t` fiilî idarenin sonu, emsal `guneybati-afrika-mandasi`).
- **`el-salvador-cumhuriyeti`:** history.state.gov "1839" ↔ LoC + Worldmark
  "Ocak 1841". Taraf **seçilmedi**, iki kaynağın ortak verdiği 1841 yazıldı.
  1841 Anayasası'nın 18 Şubat günü: Cervantes Virtual gövdesi HTTP 403,
  **okunamadı** ⇒ gün yazılmadı (D210/D213).
- **`ingiliz-kuzey-rodezya` idare devri:** TDV "1923" ↔ Cambridge/Worldmark
  "1924". Çelişki künyede yazılı, taraf seçilmedi.
- **`portekiz-gine` başkenti:** TDV "Bissau" ↔ ikincil kaynaklar "1941'e kadar
  Bolama". TDV yazıldı, çelişki notta.

### 🔴 D-katmanına sevk (benim dosyam değil)

İki D kaydının günü kabul edilebilir kaynakta **bulunamadı**:

- `d1923-gt-bh` **f:1862-05-12** — kaynaklar yalnız "1862" (yıl) diyor.
- `d1923-angola-kuzey-rodezya-barotseland` **f:1911-05-17** — Britannica 1922
  (Wikisource): *"The amalgamation of North-Eastern and North-Western Rhodesia
  was carried into effect on Aug. 17 1911"*. Order in Council 4 Mayıs 1911,
  yürürlük 17 **Ağustos** 1911. 17 Mayıs hiçbir kaynakta yok.

### Açık kalemler (karar koordinatörde)

1. **Renk:** 12'sinin de `renkler.py`de boyası **yok** (ölçüldü 0/12). Künye
   yazmak tek başına haritaya bir şey çizmez. Şartname renk eklemeyi yasakladı.
2. **`tur`:** 9'u sömürge/manda idaresi; sözlükte `koloni` yok. Emsal künyeler
   (`fransiz-kamerun-mandasi`, `portekiz-mozambik`, `guneybati-afrika-mandasi`)
   `tur` alanını **hiç taşımıyor** — ben de taşımadım, öneri `not:` alanında.
3. **`bolge`:** üç künyeye `orta-amerika-karayip` yazıldı. Bu değer
   `VERI-YAPISI.md`nin kapalı sözlüğünde **yok**, ama kardeş künyeler
   (`honduras-cumhuriyeti` · `nikaragua-cumhuriyeti` · `kosta-rika-cumhuriyeti`)
   onu taşıyor. Tutarlılık seçildi; sözlüğü güncellemek ya da 11 kaydı birden
   düzeltmek koordinatörün kararı.

---

## B — Sessiz borç: 53 künye, ÜÇ DEĞİL İKİ AYRI SORU

### B.0 Önce ölçüm: sayı 41 → 53 ÇIKTI

`durum_tablosu.renksiz_kovalari` sayacı ekleme öncesi **41**, sonrası **53**
sessiz borç veriyor. Yazdığım 12 künyenin **hepsi** doğrudan sessiz borca döndü.

**Sebep kusur değil, evren:** sayacın kullanım evreni
(`durum_tablosu.kimlik_evreni()`) yalnız `yerlesimler*.js`in `s:` ve `isg:`
alanlarını tarıyor. `d_sinirlar*.js`, `olaylar*.js`, `kronoloji*.js`,
`savaslar.js`, `kisiler.js` **bu evrenin dışında**. Bir künye D katmanında
sekiz kez taraf olabilir ve sayaç ona "veride hiç kullanılmıyor" der.

⇒ **"Sessiz borç" bugün iki ayrı şeyi topluyor.** Ölçtüm:

| kova | sayı | ne demek |
|---|---|---|
| ① başka katmanda **canlı** (D sınırı) | **30** | sessiz değil; sayaç oraya bakmıyor |
| ② yalnız kronoloji/savaş/kişi metninde | **9** | sessiz değil; dizin kaydı olarak çalışıyor |
| ③ gerçekten hiçbir yerde geçmiyor | **14** | asıl sessiz borç |

### B.1 Kova ① — 30 künye: D katmanı ile yerleşim katmanı AYRI kimlik kullanıyor

Her künyenin D kayıtlarından çıkardığım kutuyu, künyenin **kendi penceresinde**
(1923'te biten künyeler için 1923-10-29, erken bitenler için kendi `t`si)
yerleşim verisine karşı taradım.

> **🔴 Ölçümün kendisinden bir ders:** ilk turda pencereyi `f <= g < t` yazdım ve
> **otuz künyenin de otuzu "SAHİPSİZ"** çıktı — 1923-10-29'da biten bütün
> dönemler elendiği için. Pencere ucu **günü dâhildir** (M-4656). Düzeltilmiş
> ölçüm aşağıda; yanlış olanı raporlanmadı.

**Sonuç: 0/30.** Otuz künyenin **hiçbirinin** D kutusundaki hiçbir yerleşim o
künyenin kimliğini taşımıyor. Toprak metropolün kimliğiyle çiziliyor:

| künye | kutudaki nokta | o gün sahipleri |
|---|---|---|
| `fransiz-ekvator-afrikasi` | 98 | fransa-cumhuriyet 44 · ingiltere 21 · belcika 19 · sahipsiz 10 |
| `belcika-kongo` | 65 | belcika 34 · fransa-cumhuriyet 15 · portekiz 12 |
| `portekiz-angola` | 39 | portekiz 26 · ingiltere 7 · belcika 6 |
| `fransiz-bati-afrika` | 36 | fransa-cumhuriyet 24 · liberya 5 · ingiltere 4 |
| `guney-afrika-birligi` · `guneybati-afrika-mandasi` | 22 | ingiltere 21 · portekiz 1 |
| `portekiz-mozambik` | 17 | portekiz 8 · ingiltere 8 |
| `ingiliz-nijerya` · `fransiz-kamerun-mandasi` | 14 | ingiltere 13 · fransa-cumhuriyet 1 |
| `ingiliz-tanganika-mandasi` | 12 | ingiltere 9 · belcika 3 |
| `newfoundland-dominyonu` | 10 | kanada 9 |
| `ingiliz-kuzey-rodezya` | 9 | ingiltere 8 |
| `ingiliz-nyasaland` | 7 | ingiltere 5 · portekiz 2 |
| `ingiliz-kenya-kolonisi` | 6 | ingiltere 6 |
| `ingiliz-becuanaland` · `ingiliz-guney-rodezya` | 5 | ingiltere 5 / portekiz 3 |
| `ruanda-urundi-mandasi` | 3 | belcika 3 |
| `ingiliz-siyera-leon` · `ingiliz-altin-kiyisi` | 2 | ingiltere 1 · fransa-cumhuriyet 1 |
| `erdel` (1711-04-30) | 23 | sahipsiz 12 · avusturya 11 |
| `bosna-isgal` (1908-10-06) | 11 | avusturya 8 · karadag 2 · sirbistan-kralligi 1 |
| `cezayir-fransiz` | 1 | italya 1 |
| `honduras-cumhuriyeti` | 1 | meksika 1 |

**Bu bir "yerleşim verisi eksik" kusuru DEĞİL** — noktalar orada, 98 tanesine
kadar. Kusur (ya da karar) şu: **atlas sömürgeyi metropol rengiyle mi çizecek,
kendi kimliğiyle mi?** Bugün harita "İngiltere", D katmanı "ingiliz-nyasaland"
diyor. İkisi aynı toprak hakkında iki ayrı cevap veriyor.

- **Metropol kalsın denirse:** bu 30 künye dizin kaydı olarak doğrudur, sessiz
  borç sayacından **çıkarılmalıdır** (D katmanı kullanımı sayılmalı) — yoksa
  sayaç her yeni künyede şişmeye devam eder.
- **Kendi kimliğiyle çizilsin denirse:** iş yerleşim yazmak değil, mevcut
  noktaların `s:` dönemlerinde kimliği **değiştirmektir** + 30 renk. Bu, §7'nin
  dosya sahipliği gereği `yerlesimler.js` sahibinin (Oturum 0) işidir ve
  Değişmez 2'yi (her `d:` kırılmasına kronoloji maddesi) doğrudan etkiler.

**Karar Emre'nin/senin** — kapsam kararıdır, işçi hükmü değildir (§1.6).

**Bu kovanın içinde 7 künyenin kutusunda hiç yerleşim yok** — asıl "nokta
borcu" bunlar: `nikaragua-cumhuriyeti` · `kosta-rika-cumhuriyeti` ·
`el-salvador-cumhuriyeti` · `ingiliz-hondurasi` · `portekiz-gine` ·
`saar-havzasi-mandasi` · `bohemya`. İlk beşi Orta Amerika ve Batı Afrika'nın
küçük kutuları; `bohemya`nın kutusu D kaydından geldiği için Prag'ı
kapsamıyor (14.8–19.4 D), yani onun ölçümü **kutu sorunudur, borç değil**.

### B.2 Kova ② — 9 künye: dizin kaydı olarak çalışıyor

| künye | nerede geçiyor |
|---|---|
| `misir-eyaleti` | kronoloji 28 |
| `bavyera` | kronoloji 7 |
| `sirbistan-eyaleti` | kronoloji 5 |
| `kasim` | kronoloji 1 |
| `fransiz-misir-seferi` | savaşlar 1 |
| `jin-hanedani` · `song` · `tunus-ocagi` · `mogol-imparatorlugu` | kişiler 1'er |

`misir-eyaleti` ve `sirbistan-eyaleti` Osmanlı eyaletleridir: toprakları
`osmanli` kimliğiyle çizilir, künye kronolojiyi taşır. **Kusur değil, tasarım.**
Bunlar sessiz borç sayacında görünmemeli.

### B.3 Kova ③ — 14 künye: gerçekten hiçbir yerde geçmiyor

| künye | pencere | hüküm |
|---|---|---|
| `aleut` · `arua` · `charrua` · `ranquel` · `guarani-misyonlari` | 1281→ | **kasıtlı.** Halk/kabile künyeleri; toprakları başka kimlikle çiziliyor. Yerleşim yoğunluğu gelince canlanır (§6). |
| `sabah-emirligi` (Kuveyt) · `sani-emirligi` (Katar) | 1795/1871→ | **borç.** Osmanlı komşusu, çekirdek coğrafya. Arabistan katmanı bu iki emirliği künyede tanıyor, veride tanımıyor. |
| `kibris-ingiliz` | 1878-1914 | **borç.** Lefkoşa noktası 1878-06-04'ten itibaren `ingiltere` taşıyor — künye ile aynı gün, farklı kimlik. Nominal Osmanlı hâkimiyeti bu ayrımın ta kendisiydi. |
| `oniki-ada-italyan` | 1912-1923 | **borç.** Rodos noktası yalnız 1923-07-24'ten (Lozan) `italya`; 1912-1923 işgal dilimi veride **yok**. |
| `girit-devleti` | 1898-1913 | **borç.** Kandiye/Hanya 1913-05-30'dan `yunanistan`; özerk devlet dönemi veride yok. |
| `italya-napolyon` | 1797-1814 | **borç.** Milano 1714-1859 boyunca `avusturya`; Napolyon dönemi veride hiç yok. |
| `crnojevic-zetasi` | 1482-1499 | **borç (küçük).** Kardeş `zeta` künyesi veride 1 kez geçiyor. |
| `norvec-isvec-birligi` · `luksemburg-hollanda-birligi` | 1814-1905 / 1815-1890 | **kasıtlı sayılabilir:** Lüksemburg noktası 1815-1890 arası `hollanda` taşıyor — birliğin kendisi zaten bu. Künye şahsî birliği *adlandırıyor*, ayrı boya istemiyor. |

**Öneri:** ③'ün 6'sı (`kibris-ingiliz`, `oniki-ada-italyan`, `girit-devleti`,
`italya-napolyon`, `sabah-emirligi`, `sani-emirligi`) Osmanlı çekirdeğine yakın
ve hepsi bir **dönem eksikliği**dir — yerleşim noktası eklemek değil, mevcut
noktaya dilim yazmak gerekir. Değişmez 2 gereği her dilim bir kronoloji maddesi
ister; bu yüzden küçük ve sevk edilebilir bir iştir (6 künye ≈ 10-15 nokta).
Bunu bir sonraki oturuma kalem olarak öneriyorum.

---

## Aletin kendisine öneri (karar koordinatörde)

`durum_tablosu.renksiz_kovalari`ın **sessiz** kovası bugün "künye var, `s:`/`isg:`
yok" diyor ve bunu "veride yok" diye raporluyor. Ölçülen: 53'ün **39'u** başka
katmanda canlı. Ya kovanın adı ("yerleşim katmanında gövdesi yok") ya da evreni
(`d_sinirlar` + `olaylar`/`kronoloji` sayımı) düzeltilmeli. Aksi hâlde her
doğru künye ekleme işi sayacı büyütür ve sayı **bir kusuru değil, bir işi**
ölçmeye devam eder. — `§11`: *"denetim var ≠ o soruyu soruyor."*

**Ölçüm betikleri** bu oturumun scratchpad'indedir (kalıcı değil); hepsi
`girdi.py` + `durum_tablosu.py`nin kendi fonksiyonlarını çağırır, kendi
ayrıştırıcımı yazmadım (§11).

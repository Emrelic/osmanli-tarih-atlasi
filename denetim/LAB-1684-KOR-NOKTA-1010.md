# LAB-1684-KOR-NOKTA-1010 — "bulunamadı" 1684 noktanın örneklem denetimi (yalnız ölçüm)

## §0 ÖNGÖRÜ (ölçümden ÖNCE)

Zaman damgası: 2026-10-10T04:56:00+03:00 (ölçüm, örneklem ve LAB-AYNI-AD-TARAMA-1010 yöntem bölümü okunmadan önce yazıldı; bu bölüm sonradan değiştirilmeyecek.)

Öngörülen sınıf payları (1684 içinden n≈40 tabakalı örneklem):

| Sınıf | Öngörü |
|---|---|
| AD-NORMALİZASYONU | %35 |
| GAZETTEER'DA YOK | %20 |
| KOORDİNAT UZAK | %35 |
| ÖLÇÜLEMEDİ | %10 |

Öngörülen AD-NORMALİZASYONU payı: **%35** (beklenen 95% GA kabaca %22–%50). Beklenen baskın neden: Arapça/Farsça transliterasyon + alternatif adlar; Türkçe harf sorunu ikincil.

---

<!-- §0 sabit; aşağıdakiler ölçümden SONRA eklendi -->

> **Yalnız ölçüm.** `data/`'ya yazılmadı (KOŞU 22 çalışıyor), commit/push yok. GeoNames API kullanılmadı; yalnız örneklemdeki ülkelerin resmî dökümleri (`export/dump/<CC>.zip` + `alternatenames/<CC>.zip`), işlenip silindi. `allCountries` indirilmedi.
> **Evren:** `LAB-AYNI-AD-TARAMA-1010.csv` içinde `alt = "≤1 km aynı-ad kaydı yok"` olan **1684** satır (taban `2ce5dc315`).
> **Okuma tabanı:** ayrık worktree `C:\atlas-1684` @ `origin/main` = **`5ba578278`**. `girdi.yukle()` = 4300 nokta. Örneklemdeki 40 noktanın **40'ı da** bu tabanda aynı ad + aynı koordinatla duruyor (taban farkı örneklemi etkilemiyor).
> **Scriptler:** `scratchpad\kor1684\` — `strata.py`/`ornek.py` (tabaka + örneklem) · `gnal.py` (GN döküm + alternatenames, örneklem noktalarının ≤200 km'si) · `plth.py` (Pleiades + al-Ṯurayyā, ≤200 km, tüm ad alanları) · `aday.py` (genişletilmiş normalleştirici adımlarıyla aday üretimi) · `ozet.py`.

## §1 SINIF TANIMLARI, VERBATIM (uygulanan tanımın kendisi, değiştirilmedi)

- **AD-NORMALİZASYONU:** a gazetteer record of the RIGHT place exists within ≤1 km but the previous scan's name matching missed it because of spelling (Turkish İ/ı/ş/ğ, Arabic transliteration, diacritics, "el-/al-" article, name variant/alternate name, parenthetical modern name).
- **GAZETTEER'DA YOK:** after exhaustive search (all alternate names, transliteration variants, ±10 km) no record of that place exists in GeoNames/Pleiades/al-Ṯurayyā.
- **KOORDİNAT UZAK:** a record of the right place exists but >1 km from the atlas point (give distance; this is NOT a finding about the atlas being wrong — just outside the scan's ≤1 km window).
- **ÖLÇÜLEMEDİ:** cannot decide.

### §1.1 Önceki taramanın ad eşleştirmesi (LAB-AYNI-AD-TARAMA-1010 §1.1-9, §7 + `scratchpad\ayniad\ortak.py`, `gn_tara.py`, `pl_th.py` okunarak)
- Anahtar = `arac/ad_esanlam.py::sadelestir(pre(ad))`: `İ→i`, `I→ı` **lower()'dan önce** (D215 tuzağı burada YOK: `"İ".lower()` çağrılmıyor), `ı→i`, NFD + birleşik işaret atma, sonra **`[^a-z0-9]` hepsi silinir** (boşluk, tire, kesme, Arap/Kiril/CJK harfleri dahil). `pre` = ø/ł/đ/ß/æ/œ/þ/ð + `ʿ ʾ ’ '` silme.
- **Tam dize eşitliği** (bulanık/alt-dize yok). İkinci anahtar: cins sözcükleri (`GENERIC`: kalesi, castle, island, adası, gölü, dağı, river, ilçesi … + `of de el al the`) atılmış hâli.
- Atlas tarafı varyantlar: ana ad · parantez içi (`/ , ; veya`) · `ad_esanlam.js` eşanlamları · "ayırt-edici" parantez (başka kaydın çekirdek adı, >20 km) çıkarıldı.
- Gazetteer tarafı: GN `name`, `asciiname`, ana tablodaki `alternatenames` kolonu; Pleiades title/nameTransliterated/nameAttested; Ṯ yalnız `eng` alanları (common/translit/search).
- **Yapılmayanlar (bu denetimin test ettiği boşluklar):** Türkçe↔Latin transliterasyon eşdeğerleri (ç↔ch, ş↔sh, c↔j/dj, â/î/û); Arapça transliterasyon katlaması (kh↔h, gh↔g, q↔k, dh↔d, ou↔u/w, ae/ai↔e, ā/ī/ū zaten düşüyor); **ortadaki** `el-/al-/ül-` (yalnız ayrı token olarak atılıyordu, `Ebû Hamed`→`ebuhamed` ↔ `abuhamad` gibi ünlü farkı hiç); Türkçe tanımlayıcılar (`çölü, havzası, takımadası, iç kesimi, Dağları`) GENERIC'te yok; alternateNamesV2'deki ek adlar.

## §2 ÖRNEKLEM (② — tabakalı, n = 40, sabit tohum)

- **Tohum:** `random.Random(20261010)`. Her satıra `rk = rnd.random()`; sıralama `(makro-bölge, ad-yazım tipi, rk)`; **örtük tabakalı sistematik seçim**, adım k = 1684/40 = 42,1, başlangıç = `rnd.random()·k` = 22,2249 → indeksler ⌊22,22 + 42,1·j⌋, j = 0…39. Tabaka payları orantılı.
- **Makro-bölge** (koordinattan): OSM-ÇEKİRDEK (34–48,5°K, 13–50°D) · AVRUPA · MENA-İRAN · AFRİKA-SS · ASYA · AMERİKA-OKYANUSYA.
- **Ad-yazım tipi** (sırayla ilk tutan): PARANTEZ (ad `(` içeriyor) · TR-OSM (ş ğ ı İ ç ö ü â î û içeriyor) · AR-FA-TRANSLIT (MENA-İRAN, ya da el-/al-/kh/q/abad/ʿ deseni ve Avrupa-Amerika dışı) · AVRUPA-LATİN (Avrupa/Amerika/Okyanusya/OSM-çekirdek Latin) · DİĞER-YAZI-TRANSLIT (geri kalan).

| makro-bölge | ad tipi | N (1684) | n |
|---|---|---|---|
| AFRIKA-SS | DIGER-YAZI-TRANSLIT | 116 | 3 |
| AFRIKA-SS | PARANTEZ | 45 | 1 |
| AFRIKA-SS | TR-OSM | 23 | 0 |
| AMERIKA-OKYANUSYA | AVRUPA-LATIN | 200 | 5 |
| AMERIKA-OKYANUSYA | PARANTEZ | 202 | 5 |
| AMERIKA-OKYANUSYA | TR-OSM | 43 | 1 |
| ASYA | AR-FA-TRANSLIT | 3 | 0 |
| ASYA | DIGER-YAZI-TRANSLIT | 188 | 4 |
| ASYA | PARANTEZ | 163 | 4 |
| ASYA | TR-OSM | 78 | 2 |
| AVRUPA | AVRUPA-LATIN | 54 | 1 |
| AVRUPA | PARANTEZ | 11 | 1 |
| AVRUPA | TR-OSM | 31 | 0 |
| MENA-IRAN | AR-FA-TRANSLIT | 86 | 2 |
| MENA-IRAN | PARANTEZ | 73 | 2 |
| MENA-IRAN | TR-OSM | 181 | 5 |
| OSM-CEKIRDEK(Balkan-Anadolu-Kafkas) | AR-FA-TRANSLIT | 1 | 0 |
| OSM-CEKIRDEK(Balkan-Anadolu-Kafkas) | AVRUPA-LATIN | 59 | 1 |
| OSM-CEKIRDEK(Balkan-Anadolu-Kafkas) | PARANTEZ | 63 | 1 |
| OSM-CEKIRDEK(Balkan-Anadolu-Kafkas) | TR-OSM | 64 | 2 |

### §2.1 Örneklem listesi (40 nokta; tam satırlar `LAB-1684-KOR-NOKTA-1010.csv`)

| # | ad | tur | lat, lon | bölge · ad tipi |
|---|---|---|---|---|
| 1 | Cadale | liman | 2.752, 46.31 | AFRİKA-SS · DİĞER |
| 2 | Verder | sehir | 6.96, 45.35 | AFRİKA-SS · DİĞER |
| 3 | Solwezi | sehir | -12.17, 26.38 | AFRİKA-SS · DİĞER |
| 4 | Upemba (Kisale) havzası | bolge | -8.45, 26.55 | AFRİKA-SS · PARANTEZ |
| 5 | Coxim | sehir | -18.5013, -54.751 | AMERİKA-OK · AVRUPA-LATİN |
| 6 | Perdizes | sehir | -19.3434, -47.2963 | AMERİKA-OK · AVRUPA-LATİN |
| 7 | Flores de Goiás | sehir | -14.4451, -47.0417 | AMERİKA-OK · AVRUPA-LATİN |
| 8 | Beyan G10.5 B52.5 | sehir | -10.5, -52.5 | AMERİKA-OK · AVRUPA-LATİN |
| 9 | Beyan G7.5 B62.5 | sehir | -7.5, -62.5 | AMERİKA-OK · AVRUPA-LATİN |
| 10 | Fort Sill (Wiçita Dağları) | kale | 34.663, -98.4 | AMERİKA-OK · PARANTEZ |
| 11 | Manaus (Forte de São José do Rio Negro) | kale | -3.119, -60.0217 | AMERİKA-OK · PARANTEZ |
| 12 | Kaktovik (Barter Adası) | liman | 70.0918, -143.6225 | AMERİKA-OK · PARANTEZ |
| 13 | Bau (Fiji Konfederasyonları) | bolge | -18.007, 178.567 | AMERİKA-OK · PARANTEZ |
| 14 | Secwépemc (Adams Gölü) | sehir | 51.0, -119.5 | AMERİKA-OK · PARANTEZ |
| 15 | Louisiade-Milne takımadası | bolge | -11.5, 153.5 | AMERİKA-OK · TR-OSM |
| 16 | Sakai | liman | 34.573, 135.483 | ASYA · DİĞER |
| 17 | Dera Gazi Han | sehir | 30.05, 70.63 | ASYA · DİĞER |
| 18 | Telembinsk | kale | 52.5, 113.9 | ASYA · DİĞER |
| 19 | Samudra Pasai | liman | 5.18, 97.07 | ASYA · DİĞER |
| 20 | Guryev (Atyrau) | liman | 47.11, 51.92 | ASYA · PARANTEZ |
| 21 | Wuchang (Wuhan) | sehir | 30.5657, 114.3337 | ASYA · PARANTEZ |
| 22 | Gvalyar (Gwalior) | kale | 26.218, 78.183 | ASYA · PARANTEZ |
| 23 | Ning'er (Pu'er) | sehir | 23.06, 101.04 | ASYA · PARANTEZ |
| 24 | Yeni Britanya iç kesimi | bolge | -5.5, 150.5 | ASYA · TR-OSM |
| 25 | Vaygaç | bolge | 69.9, 59.3 | ASYA · TR-OSM |
| 26 | Kaunas | sehir | 54.897, 23.886 | AVRUPA · AVRUPA-LATİN |
| 27 | Meciboj (Mejibuji) | kale | 49.431, 27.415 | AVRUPA · PARANTEZ |
| 28 | Hoggar | bolge | 24.0, 3.0 | MENA-İRAN · AR-FA |
| 29 | Muhammere | liman | 30.4392, 48.1664 | MENA-İRAN · AR-FA |
| 30 | Dârülbeyzâ (Anfa) | liman | 33.573, -7.59 | MENA-İRAN · PARANTEZ |
| 31 | Mamûra (Mehdiye) | kale | 34.256, -6.678 | MENA-İRAN · PARANTEZ |
| 32 | Merâde | bolge | 29.23, 19.213 | MENA-İRAN · TR-OSM |
| 33 | Atbay çölü | bolge | 19.8, 34.8 | MENA-İRAN · TR-OSM |
| 34 | Verzâzât | sehir | 30.92, -6.91 | MENA-İRAN · TR-OSM |
| 35 | Sinâvin | sehir | 31.007, 10.616 | MENA-İRAN · TR-OSM |
| 36 | Ebû Hamed | sehir | 19.535, 33.319 | MENA-İRAN · TR-OSM |
| 37 | Karatigin | kale | 40.42, 29.78 | OSM-ÇEKİRDEK · AVRUPA-LATİN |
| 38 | Harput (Elazığ) | kale | 38.714, 39.245 | OSM-ÇEKİRDEK · PARANTEZ |
| 39 | İmroz | kale | 40.163, 25.905 | OSM-ÇEKİRDEK · TR-OSM |
| 40 | Bîcâr | sehir | 35.8728, 47.6053 | OSM-ÇEKİRDEK · TR-OSM |

## §3 ARAMA YÖNTEMİ (③)

Her nokta şu kaynaklarda arandı:
- **GN ülke dökümü:** `name`, `asciiname`, `alternatenames` kolonu.
- **alternateNamesV2:** tüm diller, `isHistoric` bayrağıyla (link/wkdt/post/iata/icao/abbr hariç).
- **Pleiades:** title + nameTransliterated + nameAttested.
- **al-Ṯurayyā:** tüm dil ve alanlar (yalnız `eng` değil).

Pencere ≤200 km tutuldu; sınıflama için ±10 km tam tarandı. Bölge noktalarında (Hoggar, Atbay) **ülke dökümünün tamamı** (DZ, SD, EG) ayrıca tarandı.

Ad anahtarları birbirinin üstüne eklenerek uygulandı. Kaydı hangi adımın bulduğu not edildi:

| adım | ne yapar |
|---|---|
| K0 | önceki taramanın anahtarı (`ortak.norm` = `sadelestir`) |
| A · TR harf | `ARAC-NORMAL-0903.norm` (Türkçe eşleme **lower()'dan önce**, sonra NFKD) + ç↔ch/tch, ş↔sh/sch, dzh/dj/zh→j |
| A2 · TR c=/dʒ/ | atlas tarafında Türkçe `c`→`j` (Bîcâr→bijar, Meciboj→mejiboj) |
| B · AR translit | kh→h, gh→g, q→k, dh→d, th→t, ph→f, ou→u, w→v, c→k, y→i, çift harf tekle, ünlüden sonraki son -h'yi at |
| B2 · ünlü iskeleti | B + tüm ünlü kümeleri → tek ünlü (e↔a, -iye↔-ya, Ebû↔Abū) |
| artikel | `el-/al-/ül-/ed-/es-…` ön ekini sil (atlas tarafı) |
| TR cins | `çölü, havzası, takımadası, iç kesimi, Dağları, ovası, körfezi…` sözcüklerini sil |
| C · bulanık | B anahtarlarında SequenceMatcher ≥0,80. Yalnız aday üretir, tek başına sınıf vermedi |
| alt-dize | ≤1 km'deki kayıtlarda atlas adı, gazetteer adının içinde ayrı sözcük olarak geçiyor mu (bileşik ad, §5.1) |

Her aday elle okundu: doğru nesne mi? Sınıf bu okumayla verildi.

AD-NORMALİZASYONU satırlarında önceki anahtarın gerçekten tutmadığı ayrıca doğrulandı: `bicar≠bijar` · `meciboj/mejibuji≠medzhybizh/medzhibozh` · `mamura/mehdiye≠mehdya` · `merade≠marada` · `ebuhamed≠abuhamad`.

## §4 SONUÇ: öngörü ↔ ölçüm (④)

| Sınıf | §0 öngörü | **ölçüm (n=40)** | pay | 95% GA (kesin hipergeometrik, N=1684) | 1684'e izdüşüm |
|---|---|---|---|---|---|
| AD-NORMALİZASYONU | %35 | **5** | **%12,5** | **%4,3 – %26,6** | **≈210 (72 – 448)** |
| GAZETTEER'DA YOK | %20 | **1** | %2,5 | %0,1 – %13,0 | ≈42 (2 – 219) |
| KOORDİNAT UZAK | %35 | **30** | **%75,0** | %59,0 – %87,2 | ≈1263 (994 – 1468) |
| ÖLÇÜLEMEDİ | %10 | **4** | %10,0 | %2,9 – %23,5 | ≈168 (48 – 395) |

**GA yöntemi:** N=1684 evreninden iadesiz çekiliş için kesin hipergeometrik aralık. Sonlu evren düzeltmesi hesabın içinde; Clopper-Pearson'un FPC'li karşılığıdır.
- Karşılaştırma: FPC'li Wald %2,4–%22,6 · FPC'siz Clopper-Pearson %4,2–%26,8.
- Örtük tabakalama orantılı olduğu için tabakalı tahmin basit oranla aynı.

**§0 öngörüm çürüdü:**
- AD-NORMALİZASYONU: %35 bekledim, %12,5 çıktı. Öngörü GA'nın dışında kaldı.
- KOORDİNAT UZAK: %35 bekledim, %75 çıktı.
- GAZETTEER'DA YOK: %20 bekledim, %2,5 çıktı.

### §4.1 Sınıf satırları (adıyla)

**AD-NORMALİZASYONU (5).** Doğru kayıt ≤1 km'de var, önceki anahtar yazım yüzünden kaçırmış.

| # | ad | doğru kayıt | km | kaçıran yazım farkı | adım |
|---|---|---|---|---|---|
| 27 | Meciboj (Mejibuji) | GN 701425 Medzhybizh P.PPL (alt *Medzhibozh*) | 0,75 | Türkçe c ↔ dzh, j ↔ zh | A2 |
| 31 | Mamûra (Mehdiye) | GN 2542768 Mehdya P.PPL | 0,42 | -iye ↔ -ya (parantez adı üzerinden) | B2 |
| 32 | Merâde | PL 363995 Marada settlement (GN Marādah 1,33) | 0,54 | e ↔ a | B2 |
| 36 | Ebû Hamed | GN 380858 Abū Ḩamad P.PPL | 0,31 | Ebû ↔ Abū (e↔a) | B2 |
| 40 | Bîcâr | GN 140521 Bījār P.PPL (ADM2 0,83) | 0,67 | Türkçe c ↔ j | A2 |

Beşinde de ≤1 km'deki doğru kayıt bir **yerleşim**. Önceki taramanın §6.4 iç-yüz kuralına göre DOĞRU-CİNS; hiçbiri yanlış cins değil.

**GAZETTEER'DA YOK (1): #19 Samudra Pasai.**
- ±10 km içinde GN, PL ve Ṯ'de hiç kayıt yok. Aranan adlar: Pasai, Pase, Samudra, Samudera, Geudong.
- Yalnız adaş kayıtlar var: Kecamatan Samudera ADM3 17,7 km · Sungai Pase H.STM 17,7 km. Bunlar ilçe ve ırmak kaydı; limanın ya da sultanlığın kaydı değil.

**ÖLÇÜLEMEDİ (4):**
- **#8, #9 Beyan G10.5 B52.5 / Beyan G7.5 B62.5:** ad bir yer adı değil. Bunlar sentetik `kasitli_bosluk` beyan noktaları (Yukarı Xingu vb.); gazetteer'da aranacak ad yok.
- **#18 Telembinsk** (ostrog; atlas "KOORDİNAT yaklaşık" diyor): aday GN Telemba P.PPL (alt *Telemba-Russkaya*) **49 km**, Ozero Telemba 47 km. Köyün ostrogun ardılı olduğu doğrulanamadı.
- **#37 Karatigin:** atlas koordinatı Barrington **\*Ploketta** kaydına (PL 511367) **0,26 km**. *Ploketta = Karatigin* kimliği kaynakla kurulamadı. Kurulsaydı bu satır AD-NORMALİZASYONU (ad varyantı) olurdu (bkz. §4.3). GN Karadin P.PPL 8,7 km.

**KOORDİNAT UZAK (30).** Doğru kayıt var, ama 1 km'den uzakta:

| aralık | n | satırlar |
|---|---|---|
| 1–2 km | **15** | Solwezi 1,03 · Dera Gazi Han 1,09 · Perdizes 1,11 · Coxim 1,12 · Harput 1,14 · Kaunas 1,32 · Flores de Goiás 1,32 · Fort Sill 1,50 · Sakai 1,54 · Verzâzât 1,59 · Gvalyar 1,63 · Cadale 1,64 · Muhammere 1,72 · Verder 1,90 · Manaus 1,93 |
| 2–5 km | **8** | Ning'er 2,19 · Sinâvin 2,48 · Dârülbeyzâ 2,61 · Guryev 2,77 · Kaktovik/Barter Is. 3,36 · Bau 3,63 · Wuchang 4,04 · İmroz 4,10 |
| >10 km | **7** | Secwépemc/Adams Lake 13,4 · Vaygaç/Ostrov Vaygach 14,3 · Upemba Depression 23,5 · Yeni Britanya/New Britain Is. 40,4 · Louisiade Archipelago 63,9 · Atbay/‘Atbāy 245,5 · Hoggar/Ahaggar 303,2 |

>10 km'deki 7 satırın 6'sı `bolge` noktası, yani bölgenin "merkezi"; ≤1 km'de kayıt olması zaten beklenmez. Yedincisi (Secwépemc) bir etnonim. Tanım gereği bu bir **pencere** bulgusu; atlasın yanlış olduğu anlamına gelmez.

### §4.2 Normalleştirme adımına göre (hedefli düzeltme için)

**AD-NORMALİZASYONU'nun 5 isabetini hangi adım buldu:**

| adım | isabet | satırlar |
|---|---|---|
| Türkçe İ/ı/ş/ğ (D215 sınıfı) | **0** | `sadelestir` İ/I'yı zaten lower()'dan önce çeviriyor; D215 tuzağı bu taramada tetiklenmedi |
| Türkçe c/j ↔ dzh/j/zh (Türkçe→Latin transliterasyon) | **2** | Bîcâr, Meciboj |
| Osmanlı-Türkçe ünlü ↔ Arapça/yerel ünlü (e↔a, -iye↔-ya) | **3** | Ebû Hamed, Merâde, Mamûra |
| Arapça ünsüz katlama (kh/gh/q/ou/w) | 0 | ≤1 km'de yok; >1 km'de 4 (aşağıda) |
| "el-/al-" artikeli | **0** | |
| alternateNamesV2 (ana tablonun `alternatenames` kolonunda olmayan ad) | **0** | tüm isabetler ana tablo adlarından geldi |
| parantez içi modern ad | tek başına 0 | Mamûra parantez adı (Mehdiye) üzerinden bulundu, ama ünlü adımı da gerekti |

**Kaydı herhangi bir mesafede bulmak için:** 40 satırın **15'i** daha iyi normalleştirme olmadan hiç bulunamıyor (%37,5; GA %22,9–%54,0). Bunlar önceki taramanın ≤150 km aday dosyalarında hiç görünmüyordu. 5'i ≤1 km'de (yukarıda), 10'u 1 km'den uzakta:
- w↔v: Verder→Warder/Werder 1,90 · Sinâvin→Sīnāwin 2,48
- gh/kh: Dera Gazi Han→Dera Ghazi Khan 1,09
- ç↔ch (+ Ostrov): Vaygaç→Ostrov Vaygach 14,3
- ünlü / ou / son -h: Muhammere→Mohammerah 1,72 · Verzâzât→Ouarzazate (alt *Varzazat*) 1,59
- Türkçe cins sözcüğü / çeviri: Louisiade-Milne *takımadası* · *Yeni Britanya* iç kesimi · Atbay *çölü* (Upemba *havzası* kısmen)
- ad varyantı: Hoggar↔Ahaggar

⇒ **Yazım sorunu gerçek ve büyük: örneklemin %37,5'i.** Ama bu kayıtların çoğu zaten ≤1 km penceresinin dışında. Pencere içindeki kaybı açıklayan pay %12,5.

### §4.3 Duyarlılık (etiket değişmeden, sınırdaki satırlar)
- **Kaunas (#26)** KOORDİNAT UZAK sayıldı. Ama ≤1 km'de iki kayıt var: **Kauno pilis** S.CSTL 0,23 km (Litvanca -o hâli: "Kaunas'ın kalesi") ve **Senamiestis (Kaunas)** P.PPLX 0,26 km (parantez **gazetteer tarafında**). Şehrin kalesi "doğru yer" sayılırsa AD-NORM 6/40 = %15,0 (GA %5,8–%29,6).
- **Karatigin** de (*Ploketta*) eklenirse 7/40 = %17,5 (GA %7,5–%32,6).
- En geniş okumada bile üst sınır **%32,6**; %60 senaryosunun çok altında.

## §5 İZDÜŞÜM: 358 → ?

**Varsayım (açıkça):** Daha iyi normalleştirmeyle ≤1 km'de eşleşecek noktaların yanlış-cins oranı, bugün eşleşmiş noktalarınkiyle aynıdır: 358 / (2252 + 358) = **%13,7**. Yalnız nötr kayıt bulunan 6 satır paydaya alınmadı.

| senaryo | yeni eşleşen (1684'ten) | +yanlış-cins (×0,137) | YANLIŞ-CİNS |
|---|---|---|---|
| nokta tahmini %12,5 | ≈210 | +29 | **≈387** |
| GA alt %4,3 | 72 | +10 | ≈368 |
| GA üst %26,6 | 448 | +61 | **≈419** |
| geniş okuma üst %32,6 (§4.3) | 549 | +75 | ≈433 |
| koordinatörün "%20" senaryosu | 337 | +46 | ≈404 (bu oranla; "≈450" için ~%27 yanlış-cins oranı gerekir) |
| koordinatörün "%60" senaryosu | 1010 | +139 | ≈497 |

📌 **Doğrudan gözlem varsayımın da altında:** örneklemdeki 5 AD-NORM isabetinin **hiçbiri** yanlış cins değil; hepsi yerleşim kaydı. n çok küçük (0/5, %95 üst sınır ~%52), o yüzden varsayımın yerine konmadı. Yine de izdüşümün yukarıdan çok aşağı sapması daha olası.

**Hüküm (ölçüm diliyle):**
- AD-NORMALİZASYONU p̂ = %12,5 (GA %4,3–%26,6). Veri "%20 ⇒ 358 ≈ 450" tarafında, hatta onun da altında.
- %60 senaryosu dışlanıyor: P(X≤5 | %60) = 4×10⁻¹⁰. %20 dışlanmıyor: P(X≤5 | %20) = 0,16.
- ⇒ **358 bir taban, ama sığ bir taban: ≈387 (368–419). "Tarama baştan" gerekmiyor.**
- Payda sorunu yazımdan değil **pencereden** geliyor. 1684 noktanın ≈%75'inde (GA %59–%87) doğru kayıt 1 km'nin hemen dışında; bunların yarısı 1–2 km'de. Önceki raporun §6-5 önerisi ("≤1 km şehir ölçeğinde dar") bu ölçümle sayıya döküldü.

### §5.1 Ayrı bir kör nokta: ≤1 km'de **bileşik adlı** yanlış-cins kayıtlar
Bu AD-NORM değil; dört sınıfın hiçbirine girmiyor. Önceki tarama "near-same" adı yalnız GENERIC listesindeki sözcükleri atarak arıyordu. Gazetteer adı atlas adını içerip GENERIC dışında bir ek taşıyınca kayıt görünmez oluyordu. Örneklemde ≤1 km'de (alt-dize taraması, `bilesik.py`) şunlar çıktı:

| # | ad | ≤1 km'deki bileşik-adlı kayıt | km | önceki §6.4 kuralına göre cins |
|---|---|---|---|---|
| 10 | Fort Sill | Fort Sill Post Cemetery S.CMTY | 0,86 | yanlış (S-yapı) |
| 16 | Sakai | Sakai-kuyakusho S.ADMF (belediye binası) | 0,04 | yanlış (S-yapı) |
| 22 | Gvalyar (Gwalior) | **Gwalior Jn / Gwalior Ng S.RSTN** (istasyon) · Gwalior Regency S.HTL | 0,18 · 0,56 | **kategorik** (istasyon, otel) |
| 26 | Kaunas | Senamiestis (Kaunas) · Santaka (Kaunas) P.PPLX · Klaipeda Hotel, Kaunas S.HTL | 0,26 · 0,93 | yanlış (PPLX, otel) |

4/40 nokta = %10 (GA %2,9–%23,5) → 1684 içinde ≈168 nokta (48–395). Bunlar "aynı ad" değil, **ad içeren** kayıtlar; tanım gereği YANLIŞ-CİNS sayılmazlar. Ama Gwalior'un "Jn" (junction) ekiyle istasyonu, Hvar/Rabat tipi kategorik vakanın aynısı: önceki eşleştirmenin `GENERIC` listesinde `jn`, `ng`, `yakusho`, `cemetery`, `regency` yok. Bu kör nokta 358'i AD-NORM'dan daha çok etkileyebilir; ayrıca ölçülmeli (§6-2).

## §6 TANIM ÖNERİLERİ (AYRI BÖLÜM: UYGULANMADI, yukarıdaki sayıların hiçbiri bunlarla hesaplanmadı)

1. **YER-ADI-DEĞİL / BÖLGE-NOKTASI kovası.** 1684 satırın **311'i** `kasitli_bosluk`, `tur: bolge/konfederasyon` ya da sentetik "Beyan" noktası. Dökümü: 229 kasıtlı boşluk · 199 bölge/konfederasyon · 46 Beyan (kümeler örtüşüyor). Bunların ≤1 km'de aynı adlı kayıt taşıması yapı gereği beklenmez. Öneri: CİNS-BELİRSİZ'den ve bu denetimin evreninden ayrı bir adla çıkarılsınlar. Örneklemde 9/40 bu türden (2 Beyan + 7 bölge).
2. **BİLEŞİK-AD ≤1 km** ayrı bir ölçüm olarak koşsun (§5.1): gazetteer adı atlas adını ayrı sözcük olarak içeriyor, fc ise kategorik (S.RSTN/S.HTL/S.AIRP/S.MUS). Önceki taramanın "near-same" tanımını değiştirmeden, yeni bir adla.
3. **KOORDİNAT UZAK'ı ikiye ayırmak:** 1–2 km (şehir centroid'i; örneklemde 15/30) ↔ >2 km. Pencere ≤2 km'ye çıkarılsaydı 1684'ün yaklaşık yarısı eşleşirdi (15/40 KU + 5 AD-NORM = %50). Bu yalnız bir ölçüm notu; pencereyi değiştirmek önerinin konusu.
4. Normalleştirici düzeltmesi yapılacaksa öncelik sırası (örneklem isabetine göre): **(a)** Osmanlı ünlüsü ↔ yerel ünlü (e↔a, -iye↔-ya) · **(b)** Türkçe c/ç/ş ↔ j/dzh/ch/sh · **(c)** w↔v, gh/kh · **(d)** Türkçe cins sözcükleri (`çölü, havzası, takımadası, iç kesimi`). Artikel ve alternateNamesV2 bu örneklemde **0** isabet verdi; öncelik düşük.

## §7 ERİŞİM VE KAPSAM SINIRLARI
- **GeoNames API kullanılmadı.** Yalnız örneklemin 31 ülkesinin resmî dökümü ve alternatenames dosyası indirildi: BR BY CA CD CN DZ ET FJ GR ID IN IQ IR JP KW KZ LT LY MA MD PG PK PL RU SD SO TN TR UA US ZM. Hoggar ve Atbay için DZ, SD ve EG dökümleri bütünüyle tarandı. Tüm zip'ler işlendikten sonra silindi; `allCountries` indirilmedi. İlk indirme betiği arka planda iki kez çalıştı (aynı dosyalar; birkaç WinError 32 yeniden-adlandırma uyarısı). Sonuçta 31 ülkenin hepsi için JSON tamam.
- **n = 40 küçük.** AD-NORM GA'sı %4–%27 genişliğinde. Sonuç "%60 değil" sorusuna kesin, "%10 mu %20 mi" sorusuna gevşek cevap veriyor.
- **Sınıflama tek okuyucunun elle yaptığı okuma.** Sınırdaki satırlar §4.3'te açık: Kaunas, Karatigin, Telembinsk, Samudra Pasai.
- **TGN kullanılmadı.** Önceki taramada da toplu değildi.
- `data/`'ya yazılmadı, commit/push yok. Worktree `C:\atlas-1684` iş sonunda kaldırıldı.

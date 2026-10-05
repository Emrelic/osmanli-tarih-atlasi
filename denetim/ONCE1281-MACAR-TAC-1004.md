# ONCE1281-MACAR-TAC-1004 — Macar tacı toprakları atlasta `avusturya` mı yazılı? (Avusturya yamasının KÖKÜ)

Oturum: ONCE1281-MOTOR-UFUK-1004 · 5 Ekim 2026 · görev: YILDIRIM BAYEZIT (M-5811/M-5812 hükmü)
Önceki: [`ONCE1281-AVUSTURYA-UYGULA-1004.md`](ONCE1281-AVUSTURYA-UYGULA-1004.md) (F8 ④: 2s 189→191 · 4c 127→176).
**Veriye yazılmadı.**

## 0. Ölçümden ÖNCE okunan yapı (② — künye, `girdi.oku_devletler()`, HEAD `76dd213d`)

| id | ad | pencere | `harita:` |
|---|---|---|---|
| `habsburg` | Habsburg Avusturya | 1282-01-01 → **1918-11-11** | `avusturya` |
| `macaristan` | Macaristan Krallığı (bağımsız) | 1000-01-01 → 1526-08-29 | `macaristan` |
| **`macaristan-habsburg`** | Macaristan Krallığı (Habsburg Tacı) | **1526-08-29 → 1918-11-16** | `macaristan` |
| `macaristan-naiplik` | Macaristan (1918 sonrası) | 1918-11-16 → 1945-09-02 | `macaristan` |
| `dogu-macar-kralligi` | Szapolyai | 1526-08-29 → 1541-08-29 | — |
| `erdel` | Erdel Prensliği | 1541-08-29 → **1711-04-29** | — |
| `orta-macar-kralligi` | Tököli | 1682-09-16 → 1688-01-17 | — |
| `avusturya-cumhuriyet` | I. Cumhuriyet | 1918-11-12 → 1938-03-13 | — |

⇒ **1526-1918 için ayrı Macar künyesi VAR ve boyası var** (`macaristan`). 1526-1867 için ayrı künye YOK —
`macaristan-habsburg` ikisini birden kapsıyor. Künye zinciri `macaristan-habsburg` → `macaristan-naiplik`
(1918-11-16) KESİNTİSİZ ⇒ F8'in "ara dönemde sahip yok" sorusu Macar tacı için YOKTUR: 1918-11-16'dan
antlaşmaya kadar de jure sahip `macaristan-naiplik` olur (Macaristan o toprakları Trianon'a dek bırakmadı).

## 1. Ölçüt (tarihî) — iki kova + tartışmalı

- **MACAR TACI (Transleithania)**: bugünkü Macaristan · Slovakya · Erdel/Banat/Kriş/Maramureş (Romanya'nın
  Eski Krallık ve Bukovina DIŞI) · Hırvatistan-Slavonya (Dalmaçya ve İstria DIŞI) · Fiume · Voyvodina ·
  Burgenland · Kárpátalja · Prekmurje (Murska Sobota, Lendava) · Orava/Spiş kuzeyi (Polonya'daki küçük pay).
- **AVUSTURYA (Cisleithania)**: Avusturya (Burgenland hariç) · Bohemya · Moravya · Silezya · Galiçya ·
  Bukovina · Krayna/Slovenya (Prekmurje hariç) · İstria/Küstenland · Trieste · Tirol/Trentino.
- **TARTIŞMALI** (ayrı kova, hüküm koordinatörde): Dalmaçya (Cisleithania'da, taç iddiası vardı) ·
  Bosna-Hersek (1908-1918 ortak yönetim, iki yarının da değil) · **Askerî Hudut** (Hırvat/Slavon/Banat
  hududu 1881'e dek doğrudan Viyana'ya bağlı) · **Temeşvar Banatı 1718-1778** (taç arazisi, Viyana yönetimi) ·
  **Erdel 1711-1867** (ayrı Büyük Prenslik). Bu üç zaman-dilimi, aynı noktada dönem BÖLÜNMESİ gerektirir.

## 2. ÖNGÖRÜ — ölçümden ÖNCE (bu dosya ölçüm koşmadan commitlenir)

- **① sayısı:** F8'in 109 noktasından Macar tacına düşen **~65** (20 Macar çekirdeği dâhil); Dalmaçya kovası
  **~6**; 1918'e uzanmayan (daha önce biten) `avusturya` dönemli Macar tacı noktaları da var: **+~30**.
  `macaristan-habsburg` veride az kullanılıyor (**< 40 nokta**) — kök kusur sistematik.
- **③ karşı-olgusal (Macar tacı noktalarında `avusturya` → `macaristan-habsburg`, F8 modeliyle birlikte,
  ara dönem `macaristan-naiplik`):**
  - **4c: 176 → ~135** — Macar tacı noktaları künyeyi aşmaz; KALAN aşım Cisleithania'dan: Galiçya
    (Büyükelçiler 1923), Dalmaçya/Kvarner (Rapallo 1920). 127'ye İNMEZ.
  - **2s: 191 → ~189-190** — Trianon (1920-06-04) taraf kolu tutar (madde "Macaristan" der, veri de der);
    Rapallo Dalmaçya'da kalır (Cisleithania, eski sahip yine `avusturya`).
  - ⚠️ **Yan etki öngörüsü:** bütün dönemi çevirmek ESKİ kırılmaları da etkiler (1699 Karlofça, 1718
    Pasarofça, 1739 Belgrad maddeleri "Avusturya" der) ⇒ F8'siz bugünkü veride takas **2s'yi +5..+15
    öttürebilir.** Bu yüzden iki karşı-olgusal ölçülecek: **K1** bütün dönem takası · **K2** yalnız
    1867-06-08 (Uzlaşma) sonrası dilim takası (yeni 1867 kırılması madde ister — öngörü: 1867 maddesi YOK
    ⇒ K2 2s'yi yeni noktada öttürür).

## 3. Ölçüm (öngörü commit'i `c7d6ef1f`'ten SONRA · HEAD baş = son `025e53f8` · `denetle`'nin gerçek işlevleri, veri bellekte)
Betikler (scratchpad): `macar1.py` (aday + `ne_10m_admin_0` ülke) · `macar2.py` (döküm) · `macar3.py` (karşı-olgusal).

### ① Kaç nokta — `avusturya`/`habsburg`/`macaristan-habsburg` dönemi olan **172** nokta, elle sınıflandırıldı

| kova | sayı | noktalar |
|---|---|---|
| **MACAR TACI, `avusturya` yazılı** | **57** | Macaristan 20 (hepsi) · Slovakya 9 (hepsi) · Erdel/Banat/Partium 10 (Szatmár, Varad, Kaloşvar, Yanova, Segesvár, Gyulafehérvár, Temeşvar, Lugos, Brassó, Orsova) · Hırvatistan-Slavonya + Lika 11 (Varasd, Zagreb, Ösek, Karlovac, Sisak, Jasenovaç, Kostayniçe, Cetin, Drežnik, Gospić, Udbina) · Voyvodina 2 (Baç, Varadin) · Prekmurje 2 (Murska Sobota, Lendava) · Kárpátalja 2 (Ungvár, Munkács) · Burgenland 1 (Eisenstadt) |
| ⚠️ **TARTIŞMALI — Dalmaçya** | **19** | Rab, Pag, Zadar, Nadin, Knin, Uzunada, Vrana, Şibenik, Sin, Klis, Split, Brač, Hvar, Vis, Korçula, Mljet, Dubrovnik + Kotor, Herceg Novi (MNE) |
| ⚠️ **TARTIŞMALI — Bosna-Hersek 1908-1918** | **20** | ortak yönetim; ayrı konu (`drzava-shs` bekliyor) |
| Cisleithania (doğru: `avusturya`) | 31 | Avusturya 11 · Çekya 8 · Galiçya 3 (Krakov, Lvov, Yazlofça) · Bukovina 2 (Suçava, Çernovitz) · Slovenya 2 (Maribor, Ljubljana) · Küstenland 3 (Trieste, Krk, Cres) · Tirol/Trentino 2 (Brixen, Trento) |
| 1918'den önce biten, tacla ilgisiz | 45 | Belçika/Lüksemburg 1714-1795 (15) · Lombardiya-Venedik (8) · Silezya ≤1742 (6) · Lublin/Chełm/Zamość 1795-1809 (3) · Sırbistan 1688-1739 (9) + Oltenya 1718-1739 (3) — Habsburg doğrudan yönetimi, taç değil · Vidin 1689 (1) |

Toplam 57 + 19 + 20 + 31 + 45 = **172** ✓.

- Taç noktalarının **55'i** `avusturya` dönemini 1918-11-11'e, **2'si** (Lugos, Orsova) **1918-01-01**'e taşıyor (yıl-temsilî; ayrı borç).
- `macaristan-habsburg` veride yalnız **4** noktada (Erdel 1551-1556) ⇒ kök kusur SİSTEMATİK (öngörü < 40: tuttu).
- Öngörü ~65 → ölçüm **57**; Dalmaçya ~6 → **19** (öngörü yanlış: Dalmaçya noktası çok).

### ③ Karşı-olgusal — iki kapının sayısı

| | 2s AÇIK (tavan 189) | 4c (beklenen 127) | 2i | D1 | D2 | 4d |
|---|---|---|---|---|---|---|
| BUGÜN | 189 | 127 | 144/1 | 309 | 623/0 | 324 |
| F8 eski (kök düzeltmesiz) | **191** | **176** | 161/1 | 309 | 623/0 | 324 |
| K1 bütün `avusturya` dönemleri takas (F8'siz) | 190 | 127 | 144/1 | 309 | 623/0 | 324 |
| K2 1867-06-08 sonrası takas (F8'siz) | 190 | 127 | 144/1 | 309 | 623/0 | 324 |
| **K3 yalnız 1918'e uzanan SON dönem takas (F8'siz)** | **189** | **127** | 144/1 | 309 | 623/0 | 324 |
| K1 + F8 | 191 | 143 | 161/1 | 309 | 623/0 | 324 |
| K2 + F8 | 191 | 143 | 161/1 | 309 | 623/0 | 324 |
| **K3 + F8** (ara dönem `macaristan-naiplik` 1918-11-11 → antlaşma) | **190** | **143** | 161/1 | 309 | 623/0 | 324 |

**Okuma:**
- **K3 bugünkü veride KAPI-NÖTR** (her sayı aynı) ⇒ kök düzeltme TEK BAŞINA güvenle inebilir.
- **K3 + F8: 4c 176 → 143 (49'un 33'ü düştü)** — kalan **16'nın hepsi Cisleithania/Dalmaçya:** Galiçya 2 (Lvov,
  Yazlofça — Büyükelçiler 1923) · Küstenland 2 (Krk, Cres — Rapallo) · Dalmaçya 12 (Rab, Pag, Zadar, Nadin, Knin,
  Uzunada, Vrana, Şibenik, Hvar, Vis, Korçula, Mljet — Rapallo). Bunlarda F8'in model sorusu GERÇEK: `habsburg`
  1918-11-11'de ölü, `avusturya-cumhuriyet` o toprakları iddia etmedi.
- **2s 191 → 190:** **Trianon (1920-06-04) KAPANDI** — madde "Macaristan" diyor, veri artık Macar zinciri; taraf tuttu.
  Kalan +1 = **Rapallo 1920-11-12** (Dalmaçya, Cisleithania — kök düzeltmenin alanı DIŞI). 1919-08-12
  Lendava/Murska Sobota yön değiştiriyor (kayıp→kazanç) ama net 0. ⚠️ Bu kırılmayı bugün "kapatan" madde
  *Ravalpindi Antlaşması* (Afganistan) — 2s yakınlık kolunun yanlış-temizi; ayrıca bakılmalı.
- **K1/K2 neden kötü:** K1 1791 Ziştovi kırılmasını açar (Cetin, Drežnik — madde "Avusturya" diyor; tarihen de doğru:
  Askerî Hudut Viyana'ya bağlıydı). K2 1867-06-08'de yeni kırılma açar ve o güne madde YOK (en yakını "Mısır hidiv
  unvanı" — öngörü tuttu). ⇒ **Yalnız SON dönem** çevrilmeli; 1867 öncesi Hudut/Banat/Erdel nüansı ayrı iş.
- Öngörü karşılaştırması: 4c ~135 → **143** · 2s ~189-190 → **190** · "takas F8'siz 2s'yi +5..+15 öttürür" →
  K1'de **+1**, K3'te **0** (öngörü abartılıydı).

### ④ Kaynak
- **TDV "Macaristan"** (Géza Dávid): *"1867'de iki ülke arasında bir uzlaşma meydana geldi"* · Trianon *"4 Haziran
  günü imzalanan"* ve Macaristan'ın kaybı olarak; arazi *"Hırvatistan hariç 283.000 km²"* — Hırvatistan'ın taç
  içindeki ayrık statüsünü teyit eder. TDV "Avusturya": 1867-1918 Avusturya-Macaristan.
- Ülke-içi taksimat (Transleithania/Cisleithania listesi, Dalmaçya'nın Cisleithania'da oluşu): Britannica
  "Austria-Hungary" **HTTP 403 — okunamadı**; Cambridge/Oxford metnine bu turda ERİŞMEDİM ⇒ sınıflandırma standart
  tarih bilgisine dayanıyor, **kaynak cümlesi YOK** (`bulunamadı`). Yama yazılırken `kaynak:`a akademik alıntı şart.

## 4. Sonuç — ne istiyorum
1. **Kök düzeltme = K3:** 57 Macar tacı noktasında 1918'e uzanan SON `avusturya` dönemi → `macaristan-habsburg`.
   Bugünkü veride kapı-nötr (189/127). Ayrı ve ÖNCE inebilir.
2. Sonra F8 yaması Macar tacında **ara dönem `macaristan-naiplik`** ile yazılır ⇒ 4c +16, 2s +1 kalır.
3. **Kalan 16 + Rapallo:** Cisleithania/Dalmaçya — model sorusu burada GERÇEK ve dar (49 değil 16). Hüküm sende:
   Dalmaçya'yı (19 nokta) TARTIŞMALI kovadan hangi tarafa koyduğun 12'sini belirler.
4. 2 yıl-temsilî (Lugos, Orsova `t:1918-01-01`) ve 1919-08-12 Ravalpindi yanlış-temizi — ayrı borç.

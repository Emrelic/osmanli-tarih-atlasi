# KASA-YENI5-TEYIT-1010 — A14 teyit okumasının bulduğu 5 yeni çelişki: teyit ve yazıma hazırlık

Görev: YILDIRIM BAYEZIT (A14 hükmü ⑤e, sıradaki iş) · Araştırmacı: KASA · `data/` DONUK · salt okuma · `main` 534633f8.
Sınıf (koordinatör): bunlar **kaynak destekli** (ÖZ-İLAN'ın not destekli adaylarından üstün). Bu tur: her biri için
ikinci, gün/yıl veren şehir adlı tanık ve atlas zincirinin bugünkü hâli ⇒ "yazılabilir mi".

## Önce: Thonon şartı (A14 ③a, koordinatörün §3.5 şartı) — ÖLÇÜLDÜ
- `devletler.js`'te **`bern` künyesi YOK.** Var olan: `isvicre` "İsviçre Konfederasyonu" f 1291-08-01 → t 1945-09-02,
  boya var (`renkler.py:2166`).
- HLS "Thonon": *"siège d'un bailliage **bernois**"* ⇒ Chablais Bern kantonunun KENDİ tâbi toprağıydı (ortak
  Konfederasyon toprağı değil). `isvicre` ile yazmak D205 ② ("yapı var, adı başka") mı, yoksa ayrı `bern` künyesi mi
  — **künye sorusu, hüküm senin.** Thonon-Bern FAZ 2'ye bu hükümden sonra girer.
- Yan: Thonon zinciri bugün `savoya 1281-1720 · sardinya 1720-1860 · fransa-cumhuriyet 1860-` ⇒ 1792-1815 Fransız
  dönemi de yok (A14 #14, kısmi teyit).

## 0. ÖNGÖRÜ ve ÖLÇÜT (ölçümden ÖNCE — ayrı commit)
### 0.1 Yedi alt-iddia
| # | kayıt | iddia (ilk tanık) | atlasın bugünkü hâli (ölçülecek) |
|---|---|---|---|
| Y1 | Alaşehir | 1402 Timur sonrası Aydınoğlu Cüneyd Bey (TDV `alasehir`) | `germiyan 1402-07-28 → 1429` |
| Y2 | Görice | Fransız idaresi (TDV `gorice`: Şubat 1918'de doğrudan; 1916 Fransız sayımı) | `arnavutluk-bagimsiz 1912-11-28 → 1923` |
| Y3 | Bayburt | 1828-1829 Rus işgali (TDV `bayburt`) | yok |
| Y4a | Aosta | 1691 Fransız (Enc. Italiana) | ? |
| Y4b | Aosta | 1704-1706 Fransız | ? |
| Y4c | Aosta | 1798-99 Fransız | ? |
| Y5 | Klagenfurt | 19 Mayıs 1809 Fransız işgali, bitiş? (Ghon) | yok |
### 0.2 Hükümler
- **YAZILABİLİR-d:** şehir adlı tanık sahibi ve ≥ 1 yıllık aralığı yıl düzeyinde (ya da daha iyi) veriyor; künye var
  ve aralığı kapsıyor.
- **YAZILABİLİR-isg:** < 1 yıl ya da işgal niteliğinde; iki uç da şehir adlı ve tarihli (§8: bitişsiz dilim yazılmaz).
- **TEYİT-AMA-YAZILAMAZ:** olgu teyit, ama uç/künye eksik.
- **ÇÜRÜDÜ / ÖLÇÜLEMEDİ:** önceki tanımlar.
### 0.3 Öngörü
- Yazılabilir (d: ya da isg:) **4 / 7 (aralık 2-6).** Beklediklerim: Y2 Görice (Fransız işgali 1916 güzü → 1920 bahar,
  gün düzeyinde bulunur, %70) · Y4b Aosta 1704-06 (yıl, ≥ 1 yıl, %70) · Y1 Alaşehir (Aydınoğlu sonu ~1425 Osmanlı ilhakı,
  yıl düzeyinde, %55) · Y3 Bayburt 1829 (gün düzeyinde Rus savaş tarihlerinde, %55).
- TEYİT-AMA-YAZILAMAZ **2 (1-4):** Y5 Klagenfurt (bitiş günü bulunamaz, %60) · Y4a Aosta 1691 (kısa, uçlar yok, %55).
- ÇÜRÜDÜ **0-1:** en olası Y4c (1798-99 Piemonte işgali Aosta vadisini şehir adıyla kapsamayabilir, %25).
- **Yeni yan çelişki** (teyit okumasının yine notun/ilk tanığın görmediği bir şey bulması): **≥ 1** (%65) — A14'te 17
  iddiadan 5 çıktı.
- **Künye eksikliği:** Y1 için `aydinogullari` künyesi VAR (%90); Y4 için Fransa krallığı `fransa` 1691/1704 VAR (%90).

## 1. ÖLÇÜM
Kaynak: TDV (Y1, Y3; KASA okudu) · akademik (Y2, Y4, Y5; bir okuyucu, birebir alıntı + URL:
`scratchpad/okuma_yeni5.md`). Atlas zincirleri `main` 14bb94b9.
| # | iddia | hüküm | tanık (birebir) | uçlar |
|---|---|---|---|---|
| **Y1** Alaşehir | 1402 sonrası Aydınoğlu | **TEYİT-AMA-YAZILAMAZ** | TDV `aydinogullari`: *"Cüneyd Bey Alaşehir, Salihli ve Nif'i (Kemalpaşa) Aydınoğulları toprakları içine kattı."* (II. Umur'un emîrliği 1403 ile ölümü 1405 arasında) · TDV `cuneyd-bey`: *"Umur Bey ile birlikte … Alaşehir, Salihli ve Nif'i (Kemalpaşa) aldı"*; *"1405-1406 kışında Umur Bey'in âni ölümü"* | baş 1403-1405 (aralık); son: şehir adlı YOK (Cüneyd ö. 829/1426, beylik ilhakı) · künye `aydin` VAR · atlas `germiyan 1402-1429` |
| **Y2a** Görice | Yunan 1912-14 | **YAZILABİLİR** | Begolli, AJIS 7/1 (2018): *"This occupation lasted 14 months from December 1912 to February 1914"* · *"On March 1, 1914 … the Greek forces left Korça"* | 1912-12 → 1914-03-01 (`isg:`) |
| **Y2b-d** Görice | Fransız | **YAZILABİLİR** | TDV + Begolli: Fransız girişi **Ekim 1916** · Özerk Cumhuriyet **10 Aralık 1916** (*"together with French tricolored stripes"*; TDV *"Fransa denetiminde 1918'e kadar"*) · Begolli: *"on 16 February 1918 when the French general Sal abolished the protocol … putting the Region of Korça under the direct rule of the French Military Authorities"* | 1916-10 → (1916-12-10 özerk, Fransız denetimi) → 1918-02-16 doğrudan |
| **Y2e** Görice | Arnavutluk'a devir | **YAZILABİLİR** (⑥ notlu) | Begolli: *"the French army was retreating from Korça on 24 May 1920"* · ⑥ EB1922 "Albania" *"until May 1918"* (olay sırasını da karıştırıyor ⇒ 1918/1920 karışıklığı) | son 1920-05-24 |
| **Y3** Bayburt | Rus 1828-29 | **TEYİT-AMA-YAZILAMAZ** | TDV `bayburt`: *"1828-1829 Osmanlı-Rus savaşı sırasında Rus birliklerinin işgaline uğradı"* · EB1911 "Baiburt": *"The place was occupied by the Russians under General Paskevich during their invasion of 1829, and was the farthest point westward then reached by them."* | yıl 1829; uçlar yok (< 1 yıl olası) |
| **Y4a** Aosta | Fransız 1691 | **YAZILABİLİR-isg** | Henry, *Histoire de la Vallée d'Aoste* (1929): *"du 18 juin au 6 juillet 1691"* | 1691-06-18 → 1691-07-06 (< 1 yıl ⇒ `isg:`) |
| **Y4b** Aosta | Fransız 1704-1706 | **YAZILABİLİR** (yıl) | Henry: *"Pendant cette occupation, qui dura deux ans … Ils avaient apporté à Aoste … Le 19 octobre 1704"* · son *"En octobre suivant [1706], la Vallée d'Aoste fut complètement purgée des Français"* (VADİ adlı) | 1704 → 1706-10 (son vadi düzeyinde ⇒ yıl hassasiyeti) |
| **Y4c** Aosta | Fransız 1798-99 | **TEYİT-AMA-YAZILAMAZ** | Henry: *"Pendant les années 1798 et 1799, alors que la Cathédrale était occupée par les troupes françaises"* (Aosta'da 15 Ocak ve 3 Mayıs 1799 olayları) | son ay yok |
| **Y5** Klagenfurt | Fransız 1809 | **TEYİT-AMA-YAZILAMAZ** | Ghon: Fransız öncüsü 19 Mayıs 1809 akşamı Klagenfurt'a ulaştı · ⚠️ yaygın *"Den 4. Jan. 1810 Abzug der Franzosen"* **GRAZ** içindir, Klagenfurt'a TAŞINMADI | baş 1809-05-19; son yok (Ocak 1810 olası, < 1 yıl) |
### 1.1 Sayılar ve öngörü
```
                               öngörü            ölçüm
yazılabilir (d: ya da isg:)    4 / 7 (2-6)       4 ✓ — Görice (Yunan + Fransız zinciri) · Aosta 1691 (isg) · Aosta 1704-06
                                                   [Görice'yi tek alt-iddia sayarak; 5 alt kalemle 7/11]
teyit-ama-yazılamaz            2 (1-4)           4 ✗ (Alaşehir · Bayburt · Aosta 1798-99 · Klagenfurt)
çürüdü                         0-1               0 ✓
yeni yan çelişki ≥ 1           %65               ✓ 3 — aşağıda
öngördüğüm kalemler            Görice ✓ · Aosta 1704-06 ✓ · Alaşehir ✗ (son yok) · Bayburt ✗ (gün yok)
                               Klagenfurt yazılamaz ✓ · Aosta 1691 "yazılamaz" ✗ (gün düzeyinde bulundu)
künye: aydin VAR ✓
```
### 1.2 🔴 Yan bulgular — ve biri onaylanmış bir FAZ 2 kalemini DEĞİŞTİRİYOR
1. **ALAŞEHİR'İN 1300-1390 METBÛU GERMİYAN DEĞİL, BÜYÜK ÖLÇÜDE AYDINOĞLU** — A14'te önerip senin onayladığın
   `v:germiyan` **eksik**:
   - TDV `aydinogullari`: *"Umur Bey aynı yıl içinde Alaşehir'i de hâkimiyeti altına aldı"* (bağlam 1335) ·
     *"Yıldırım Bayezid Aydınoğulları'nın **himayesindeki** Alaşehir'i zaptetti … (1390)"*.
   - TDV `alasehir`: Germiyan *"haraca bağlandı"* ve *"1324'te tekrar Germiyan hücumuna uğradı"*.
   - ⇒ Metbû zinciri: **`v:germiyan` ~1300 → ~1335 · `v:aydin` 1335 → 1390**; `d:bizans` → 1391 aynen.
     (Germiyan haracının başı tarihsiz; "~1300" atlasın eski `germiyan` başlangıcı, kaynak değil ⇒ yıl yazılırken BEYAN.)
   - ⇒ **FAZ 2'deki Alaşehir kalemi bu ölçümle güncellenmeli.**
2. **Görice'nin İKİNCİ Yunan işgali (1914 → Ekim 1916):** Begolli Yunan ordusunun *"occupied Kolonja, Korça and
   Tepelena"* dediği cümlede tarih YOK; yakın tarih bölge düzeyinde (27 Ekim 1914) ⇒ ÖLÇÜLEMEDİ, ama ≥ 1 yıl olası.
3. **Aosta 1800-1814** (A14'te HAZIR) aynı EI cümlesinde; ayrıca şehir adlı *"ultimo dominio francese (1812)"*.
   **Klagenfurt 1797** (EB1911 *"On the 29th of March 1797 the French took the city"*, son yok) ve **1805** (Masséna 20
   Kasım 1805) — ikisi de < 1 yıl, `isg:` adayı, uçsuz.
- Atlasın bugünkü zincirleri: Aosta `savoya 1281-1720 · sardinya 1720-1861 · italya` (hiçbir Fransız dönemi yok) ·
  Klagenfurt `almanya · avusturya 1335-1918 · avusturya-cumhuriyet` (1919 SHS dahil hiçbir işgal yok) · Görice
  `arnavutluk-bagimsiz 1912-11-28 →` (Yunan ve Fransız dönemleri yok).

## 2. ③ İSTİYORUM
a) **YAZILABİLİR:** Görice (Yunan `isg:` 1912-12 → 1914-03-01 · Fransız 1916-10 → 1920-05-24, içinde 1916-12-10
   özerk cumhuriyet = `d:arnavutluk?`+`v:fransa` mı yoksa `isg:` mi — sınıf senin) · Aosta 1691 `isg:` 1691-06-18 →
   07-06 · Aosta 1704 → 1706 `fransa`.
b) **Alaşehir FAZ 2 kalemini güncelle:** `v:germiyan` → `v:germiyan` (~1300-1335) + `v:aydin` (1335-1390).
c) Yazılamayan 4 (Alaşehir 1402 sonrası, Bayburt 1829, Aosta 1798-99, Klagenfurt 1809) `ic_not`ta BEYAN.

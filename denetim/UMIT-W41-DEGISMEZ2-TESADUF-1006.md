# UMIT-W41-DEGISMEZ2-TESADUF-1006: Değişmez 2'nin kapanışı kaçında TESADÜF? + 2sk maskesi + SAGLAM-1006d

**Temel commit:** ölçüm origin/main **481b0482**'de yapıldı ve **d0f3cda1**'de (`Merge … makine/umit`) aynen YENİDEN koşturuldu. Sınıf sayıları iki commit'te birebir aynı. 2sk ölçümü d0f3cda1'de.
Yalnız ölçüm: veri ve kapı değişmedi, commit yok. Ölçüm betikleri scratchpad'de (`tesadüf.py`, `maske.py`); kapı kodu `denetle.py`nin kendi işlevleri (`degismez2`, `_2s_yeri_aniyor`, `_2s_tarafi_aniyor`), kopyası değil.

## 0. ÖNGÖRÜLER, ölçümden ÖNCE (06.10 08:04)
- **Koordinatör:** %10-25. Yoğunluk 1877-78 · 1912-13 · 1918-23.
- **W41:** kırılma düzeyinde OSMANLI ~%20, İŞGAL ~%25. Yerleşim düzeyinde ~%40/~%40. Taraf kolu adayların yarısını kurtarır. Pencereler 1912-13 ve 1918-23'te kalabalık. Erken dönem adayları 01-01'de toplanır.

**Öngörü ↔ ölçüm:**
- Koordinatörün aralığı ✓: OSMANLI %11,7 · İŞGAL %17,1.
- Yoğunluk: 1918-23 ✓ · 1912-13 kısmen · **1877-78 ✗** (yalnız 1+1 aday).
- W41: OSMANLI %20 ✗ (11,7) · İŞGAL %25 ✗ (17,1) · yerleşim düzeyi OSMANLI ✓ (36,8), İŞGAL ✗ (28,2).
- Taraf kolu: İŞGAL'de 11/29, yani yarıdan az. OSMANLI'da **uygulanamıyor** (§2).
- 01-01 yoğunlaşması ✗: adaylarda %16, tabanda %22.

## 1. Bugünkü sayılar: §1.5 BAYAT
`denetle.py` (d0f3cda1): **Değişmez 2: 623 kırılma** (§1.5 621 diyor) · **2i: 171 İŞGAL kırılması, 1 açık** (§1.5 142 diyor). Görevdeki 621/142 tablonun eski fotoğrafı; aşağıdaki oranlar 623/170 kapalı kırılma üzerinden.

## 2. Ölçüt ve sınıflar
Kırılma = `degismez2`nin tarih kovası (aynı gündeki bütün yerleşimler). Penceredeki ±30 gün maddeleri için, kırılmanın her yerleşimine `denetle._2s_yeri_aniyor` soruldu. Bu, 2s'in YER kolu: `yer_id` tam eşit, ya da adın kökü başlık+yer+gövdede kelime sınırıyla geçiyor, ya da `m:` merkezi başlık+yerde geçiyor.
- **YER-HEPSİ:** her yerleşim en az bir maddede anılıyor. Sağlam kapanış.
- **YER-KISMİ:** bazısı anılıyor, bazısı anılmıyor. Çoğu toplu antlaşma kovası.
- **YER-HİÇ = TESADÜF ADAYI:** penceredeki hiçbir madde kırılmanın hiçbir yerleşimini anmıyor.
- Taraf kolu (`_2s_tarafi_aniyor`) ikincil olarak soruldu. ⚠️ **OSMANLI'da uygulanamıyor:** `d:`/`v:` dönemleri devlet kimliği taşımıyor (eski/yeni sahip boş). Ölçüldü: 0 kurtarma. Uygulanabilse bile taraf hep "Osmanlı" olurdu, soru boşa düşerdi.

## 3. SONUÇ
| | kapalı | YER-HEPSİ | YER-KISMİ | **YER-HİÇ (aday)** | taraf kurtarır |
|---|---|---|---|---|---|
| OSMANLI (`d`/`v`) | 623 | 394 (%63,2) | 156 (%25,0) | **73 (%11,7)** · 261 yerleşim | 0 (uygulanamaz) |
| İŞGAL (`isg`) | 170 (+1 açık) | 122 (%71,8) | 19 (%11,2) | **29 (%17,1)** · 63 yerleşim | 11 |

**Sıkılaştırmanın BEDELİ (açılacak kırılma, kapı bugün 0/1 açık diyor):**
- **S1, kırılma düzeyinde yer şartı** ("en az bir yerleşim anılsın"): OSMANLI **+73** · İŞGAL **+29** (taraf kolu kabul edilirse +18).
- **S2, yerleşim düzeyinde yer şartı** (2s kuralı: "her yerleşim anılsın"): OSMANLI **+229** (%36,8) · İŞGAL **+48** (%28,2). YER-KISMİ'de anılmayan yerleşim: OSMANLI **1023/1906** · İŞGAL **94/185**.

## 4. Pencere yoğunluğu ve yıl dağılımı
Penceredeki madde sayısı ortalaması: OSMANLI aday 2,9 (sağlam 2,4) · İŞGAL aday 6,4 (sağlam 5,0). Penceresi TEK maddelik aday: OSMANLI 25/73 · İŞGAL 3/29.

| Yıl dilimi | OSMANLI aday/kapalı | pencere ort. | İŞGAL aday/kapalı | pencere ort. |
|---|---|---|---|---|
| 1281-1450 | 3/96 (%3) | 1,3 | – | |
| 1451-1600 | 13/185 (%7) | 2,5 | 0/2 | |
| 1601-1750 | 20/131 (%15) | 1,7 | 0/5 | |
| 1751-1876 | 21/106 (%20) | 2,3 | 3/53 (%6) | 1,0 |
| 1877-1878 | 1/9 (%11) | 2,0 | 1/3 | 4,0 |
| 1879-1911 | 3/17 (%18) | 2,7 | 1/7 | 2,0 |
| 1912-1913 | 3/22 (%14) | **7,3** | 2/15 (%13) | **7,0** |
| 1914-1917 | 2/26 (%8) | 6,5 | 0/9 | |
| 1918-1923 | 7/31 (%23) | **6,4** | **22/76 (%29)** | **7,5** |

İki farklı mekanizma var:
- **1918-23 (özellikle İŞGAL): KALABALIK pencere.** Pencerede 6-16 madde var ve biri tesadüfen kapatıyor.
- **1601-1876 (OSMANLI): SEYREK pencere.** 1-2 madde var, alakasız da olsa tek madde kapatıyor (Lugos 1716 ⇐ Omsk kalesi).
- Mutlak sayıca OSMANLI adaylarının **41/73'ü 1601-1876'da**. Koordinatörün yoğunluk öngörüsü yüzdece 1918-23'te tutuyor, mutlak sayıda tutmuyor.
- Dosya: OSMANLI adayların yerleşimleri `yerlesimler.js` 54 · ek29 9 · ek 5 · ok107 4 · ek_bozkir 4 · sinir_kuzey 4 … · İŞGAL `yerlesimler.js` 18 · ek 6 · ek25 2 …
- Tek madde birden çok adayı kapatıyor: OSMANLI "Atina'nın kaybı ve Parthenon" ×3 · İŞGAL "Çekoslovakya Alman Bohemyası…" ×4.

## 5. ELLE DOĞRULAMA: 20 satır (tohum 41 rastgele; OSMANLI 12 + İŞGAL 8)
Penceredeki TÜM maddelerin başlığı ve gövdesi okundu.
- **G = gerçek tesadüf:** madde başka bir olay.
- **A = doğru olay, yer adı yok:** bölge ya da antlaşma düzeyinde anlatım.

| # | Kırılma | Yerleşim | Kapatan | Hüküm |
|---|---|---|---|---|
| 1 | OSM 1398-06-01 + | Ünye, Ordu, Mesudiye… | Canik kıyılarının katılışı | **A** (Canik) |
| 2 | OSM 1687-08-01 − | Mora (Tripoliçe), Elafonisos | IV. Mehmed / Mohaç | **G** |
| 3 | OSM 1716-01-01 − | Lugos | Omsk kalesi | **G** |
| 4 | OSM 1718-07-21 − | Krayova, Rimnik, Ayamavra… | Pasarofça Antlaşması | **A** |
| 5 | OSM 1739-09-28 + | Bosna Brod'u, Dubica | Belgrad Antlaşması | **A** |
| 6 | OSM 1774-07-21 − | Bahçesaray, Kefe… (22) | Küçük Kaynarca | **A** (Kırım) |
| 7 | OSM 1792-09-12 + | Oran, Mersa'l-Kebîr | Fransız Cumhuriyeti ilânı | **G** |
| 8 | OSM 1832-08-15 + | Urfa | Belen bozgunu | **G** |
| 9 | OSM 1832-12-10 − | Sisam | Konya Muharebesi | **G** |
| 10 | OSM 1844-02-12 − | Batna | Biskra'nın işgali | **A** (aynı sefer, zayıf) |
| 11 | OSM 1918-09-21 − | Nablus | Şam'ın kaybı | **A** (aynı harekât) |
| 12 | OSM 1918-12-01 − | Batum, Murvaneti | SHS kuruluşu (10 maddelik pencere) | **G** |
| 13 | İŞG 1783-04-19 − | Kefe, Mankup… | Kırım'ın ilhakı | **A** (taraf kurtarıyor) |
| 14 | İŞG 1900-01-01 + | Mengo (Buganda) | Râbih / Bornu | **G** |
| 15 | İŞG 1912-11-11 + | Sakız, İpsara | Sisam'ın çıkışı | **G** |
| 16 | İŞG 1918-11-06 + | Şibenik | Villa Giusti | **A** (zayıf) |
| 17 | İŞG 1918-11-22 + | Lvov | Szigetvár… (16 madde) | **G** |
| 18 | İŞG 1918-12-19 − | Knin | SHS / Çekoslovakya | **G** |
| 19 | İŞG 1921-04-04 − | Knin | İkinci İnönü | **G** |
| 20 | İŞG 1922-10-03 − | Gelibolu | Mudanya Mütarekesi | **A** (Boğazlar) |

- **Örneklemde G 11/20 · A 9/20.** Eşanlam kaçırması ("yer aslında anılıyor ama başka adla") **0/20**: YER kolu adayı yanlışlıkla aday yapmıyor.
- ⇒ Kaba kestirim: **gerçek tesadüf OSMANLI ≈ 73 × 6/12 ≈ 37 (~%6) · İŞGAL ≈ 29 × 5/8 ≈ 18 (~%11)**. Örneklem küçük, aralık geniş.
- A sınıfı S1'de açılır ama kusuru madde metnindedir (yeri saymıyor), haritada değil. Çaresi madde gövdesine ad eklemek, ölçütü gevşetmek değil.
- **Knin iki kez G** (1918-12-19, 1921-04-04). İtalyan işgal penceresinin iki ucunda da madde yok.

**W46b ile ilişki:** W46b'nin %43'ü (23 önerilen uçta anlamca 7 ✔) bununla ÇELİŞMİYOR. O evren önerilen YENİ uçlar; bu evren kapıdaki MEVCUT kırılmalar. Yeni uçlar seyrek pencereye düşüyorsa tesadüf payı daha yüksek beklenir. İki ölçüm birlikte şunu söylüyor: kapı "±30 günde madde var" sorusunu soruyor, "o yeri anlatan madde var" sorusunu sormuyor. Bu fark mevcut kırılmalarda %12-17, yeni uçlarda daha büyük.

## 6. 2sk'nın bugün MASKELİ payı (koordinatörün istediği, W33b)
d0f3cda1, `degismez2(Yc, O, ("s",), yer_sarti=True)`. W41 eşi resmî `KAPANIS_2S` ile **üç sayıda birebir**: yer 1571 = 1571 · taraf 1665 = 1665 · maske 1646 = 1646.
| | YER | YALNIZ TARAF | toplam |
|---|---|---|---|
| kapalı kovada (sayılan) | 1571 | **1665** (tavan 1665) | 3236 |
| **AÇIK kovada, açıklanmış ama SAYILMAYAN (maske)** | 1047 | **599** | 1646 |
| açıklanmamış (kovayı açık tutan) | | | 4109 |

- **YALNIZ TARAF biriminin %26,5'i (599/2264) maskenin arkasında.** Bütün kovalar kapansa 2sk TARAF 1665 → **2264** olur (+599). Tavan bugün iyileşmeyi bu kadar cezalandırabilir.
- Taraf birimi taşıyan açık kova 67. En büyükleri: 1794-01-01 **126 taraf** (5 açıklanmamış Kanada noktası) · **1918-11-11 77 taraf** (Częstochowa, Gdansk, Varşova… 4 açıklanmamış) · 1411-02-17 52 · 1406-10-21 32 (yalnız Gence açıklanmamış) · 1503-01-01 30.
  📌 W33b'nin "+78"i büyüklükçe 1918-11-11 kovasıyla örtüşüyor (77 taraf). Aynı kova olduğunu doğrulamadım (W33b'nin ham listesini görmedim).
- **TEK açıklanmamış birim yüzünden açık kalan 21 kova** 108 taraf + 46 yer birimini maskeliyor. Tek madde düzeltmesi tavanı en çok bunlarda oynatır.
- Öneri, hüküm sizde: 2sk tavanı "kapalı TARAF" sayısına değil, **(kapalı + maskeli) TARAF = 2264**'e ya da TARAF/(YER+TARAF) ORANINA bağlansın. O zaman kova kapanması tavanı aşmaz, gerçek yeni taraf kapanışı yine öter. Tavan disiplini §3.4: yazmadan hemen önce yeniden ölçülmeli.

## 7. İKİNCİ İŞ: `KRONO-SAY-SINAV-SAGLAM-1006d.diff` (1006c üstüne · LF · CR 0 · 13 922 bayt · +142/−23 · yalnız `denetim/ARAC-KRONO-SAY-SINAV-1006.py`)
- Birleşik formüle **BLOK** sınıfı: `− /* … */ içi geçiş`.
- Yeni `_blok_bolgeleri()` lekseri `/*`'ı dizge ya da `//` satırı içindeyse blok saymıyor. Gerçek veride ok106'da `//` satırında `/*` var, M3 mutantı tam bunu yakaladı.
- Blok aralığına düşen geçiş YALNIZ BLOK'ta düşülüyor; `//`, ALT, JSON, BOŞLUK ve boş yer_id sayımları blok içini dışarıda tutuyor (çift düşme yok).
- sh110/sk105'in 3 sabiti → **6 ölçüm** (her iki dosyada madde · duygu · yer_id).
- DALGA9'un "ölü dosya BEYANI" amacı AYRI soruda korundu: `BEYAN <dosya> canlı madde taşımıyor (sayaç 0)`, formülden bağımsız. Dişi de ayrıca sınandı: sk105 bloğu açılınca sayaç 1 oluyor, BEYAN ötüyor. sh110'un bloğu dizinin dışında; açılınca sözdizimi bozuluyor, sayaç ÖLÇÜLEMEDİ dönüyor, ayrıca sınanmadı.
- Yapay maddeye **4. biçim** (blok yorumlu) eklendi; yapay sınav artık 7 dosyada koşuyor (+sh110, sk105). Eski 0 sabitleri yapay kopyada BAYATLIYOR (6/6).
- NEGATİF KONTROL: BLOK'suz (1006c) formül her BLOK vakasında sayaçla UYUŞMUYOR (6/6).
- Sentetik "blok içinde `//`, tırnaklı, boşluklu, alt_kronoloji, boş yer_id" vakası ve 5 lekser birim sorusu eklendi.
- **İki yönlü:** 1006d **145/145** (1006c 102). **Mutasyon: 8/8 ÖLDÜ.** Dördü ilk denemede SAĞ KALDI ve her birine vaka eklendi:
  | Mutant | Öten soru |
  |---|---|
  | M1 BLOK düşülmüyor | 31 |
  | M2 lekser dizgeyi görmüyor | 1 (birim) |
  | M3 lekser `//`'ı görmüyor | 5 (ok106 gerçek veri) |
  | M4 `//` sınıfı blok içini de düşer | 3 · ilk denemede SAĞ KALDI → sentetik eklendi |
  | M5 JSON blok içini dışlamaz | 3 · ilk denemede SAĞ KALDI → eklendi |
  | M6 BOŞLUK blok içini dışlamaz | 3 |
  | M7 ALT blok içini dışlamaz | 2 · ilk denemede SAĞ KALDI → eklendi |
  | M8 boş yer_id blok içini dışlamaz | 1 · ilk denemede SAĞ KALDI → eklendi |
- Sağ kalan dört mutantın ortak dersi: gerçek veride bugün hiçbir blok içinde öteki sınıflar yok. Sınıf etkileşimi yalnız sentetik vakayla sınanabilir.

## 8. `--check`: yeni temeller (talep edildiği gibi)
| Diff | origin/main **d0f3cda1** | origin/makine/umit **b0829580** |
|---|---|---|
| DURUM-TABLOSU-SAYIM-1006b | İLERİ ✓ (inmemiş) | İLERİ ✓ (inmemiş) |
| SAGLAM-1006 · b · c · **d** | tek başına RED (1006b'ye bağlı) | aynı |
| DURUM-UC-SAYIM-ONERI-1006 | tek başına RED (1006b'ye bağlı) | aynı |
| **Tam zincir** 1006b → SAGLAM a/b/c → **1006d** → ONERI | ✓ **148/148** | ✓ **148/148** |
- ⚠️ Mesajdaki "KRONO zinciri makine/umit'te indi": inen zincir KRONO-HANYA (`e5cc3b6e … KRONO zinciri 7/7`), **KRONO-SAY zinciri DEĞİL**. `arac/kronoloji_say.js` iki dalda da YOK.
- makine/umit ölçüm sırasında e5cc3b6e → **b0829580** ilerledi; sonuç b0829580'de.
- makine/umit'te tablo satırı `**1778** madde (alt adım: 29) · 1418 duygu · 1639 yer_id (boş 4) · 27 vefat_id` (main'de 1768/1629). Dalda +10 madde var.
- 1006d ile ONERI birbirine karışmıyor: iki sırada da temiz uygulanıyor.

## 9. Bende değil / bulunamadı
- `DEGISMEZ-0086-TEMP-1006c.diff` (08:05) **bende değil**. W41 o dosyayı yazmadı, içine bakmadım.
- W33b'nin +78 listesi elimde değil; 1918-11-11 eşleşmesi doğrulanmadı.
- Gerçek tesadüf oranı 20 satırlık örneklemden kestirim, tam elle sınıflama yapılmadı.

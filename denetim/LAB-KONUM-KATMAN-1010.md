# LAB-KONUM-KATMAN-1010: TEMİZ kovalarında çok katmanlı şehirler (HUKUM-KASA-1010 §6.2)

## ④ ÖNGÖRÜ (ölçümden ÖNCE yazıldı: 2026-10-10 03:06 +0300)

| evren | TEMİZ (giriş) | öngörü: ÖLÇÜLEMEDİ'ye geçecek | öngörü: çok katmanlı aday |
|---|---|---|---|
| 4300-nokta evreni (LAB-KONUM-KUSURU-1010, `TEMİZ-ÖLÇÜLDÜ`) | 566 | **~15** (%3); Malatya (zaten), Van, Semerkant, Dimyat + ~11 benzeri (höyük/kale ↔ kasaba) | ~45 |
| 89-liste (LAB-KONUM-89-1010, `TEMİZ-ÖLÇÜLDÜ`) | 41 | **~5** (%12); adaylar Kayseriye, Afâmiye, Anavarza, Bâmiyân, Adilcevaz/Malazgirt (kale ↔ kasaba) | ~10 |
| "sınırda" alt kümesi (en yakın geçerli tanık 4–5 km) | (henüz sayılmadı) | **çoğu (~%60)** ÖLÇÜLEMEDİ'ye geçer | — |

Koordinatörün beyanı ile aynı yön: 41'in büyük kısmı tek katmanlı (modern köy = eski köy), kova çökmez; en riskli alt küme "sınırda".

---

> **Yalnız ölçüm yapıldı.** `data/` dosyalarına dokunulmadı. Commit ve push yapılmadı. Worktree açılmadı: atlas koordinatları, LAB-KONUM-KUSURU-1010'un kullandığı `noktalar.json` dökümünden okundu (taban `9ca1dba`). Tam tablo `LAB-KONUM-KATMAN-1010.csv` dosyasında: 607 satır (566 + 41). Betikler scratch'te duruyor (`katman/topla.py · analiz.py · karar.py`), depoya girmedi.
> **Kural:** HUKUM-KASA-1010 (`origin/main` 5c3c10ad) §6.1 tanığın hatası, §6.2 tanığın hangi nesneyi gösterdiği, §9.4 tanığın çözünürlüğü.

## Yöntem

1. **Tanık nesnesi kayıt kayıt okundu.** Eşleşen 584 Pleiades yerinin tamamı için `pleiades.stoa.org/places/<id>/json` indirildi ve her yerin **konumları ayrı ayrı** okundu: başlık, kendi `start..end` dönemi, `featureType`, doğruluk değeri. Ayrıca Ṯ için `top_type` ile `coord_certainty`, TGN için `placeType` okundu.
2. **Mekanik çok-katman bayrakları:**
   - ① Aynı Pleiades yerinin konumları birbirinden ≥1,5 km uzak.
   - ② Tür `tell`, `mound` ya da `tumulus`.
   - ③ Açıklamada *tell · mound · modern town · moved · abandon · new/old city · acropolis* geçiyor.
   - ④ Yerin dönemleri hem MÖ 2. binyıl öncesini hem ortaçağı/moderni kapsıyor.
   - ⑤ 5 km dışında geçerli bir tanık var. Bunlar LAB'in elle TEMİZ dediği "uzak tanıklı" kayıtlar.
   - ⑥ "Sınırda": geçerli tanıklardan herhangi biri 4–5 km arasında.
3. **Ayrışma araması:** Her adayda atlas noktasının 8 km çevresindeki bütün Pleiades yerleri listelendi. Aranan şey, atlasın çizdiği döneme ait nesnenin ayrı bir kaydı olup olmadığıydı (Ayasuluk Tepesi, Van Fortress, Arslantepe gibi).
4. **Karar kuralı (§6.2):**
   - Atlasın `s:` dönemindeki nesneyi gösteren bir tanık 5 km içindeyse nokta TEMİZ kalır.
   - Böyle bir tanık yoksa ve tanıklar başka bir katmanı ya da başka türde bir nesneyi gösteriyorsa nokta ÖLÇÜLEMEDİ olur.
   - Tanık aynı nesneyi gösteriyorsa mesafe gerçektir ve §6.1 eşikleri uygulanır.
5. **Sınır kuralı (üçgen eşitsizliği):** Atlasın çizdiği nesne de ayrı bir kayıtla tanıklıysa ve iki nesne de 5 km'nin altındaysa, sonuç hangi nesnenin seçildiğine bağlı değildir. Nokta TEMİZ kalır (Firûzâbâd, Baf). Ayrışma yalnız genel bilgiyle biliniyor ve tanığı yoksa bu kural uygulanmadı.

## Sonuç özeti

| evren | TEMİZ giriş | **TEMİZ kalan** | ÖLÇÜLEMEDİ-KATMAN | ÖLÇÜLEMEDİ-TÜR | ÖLÇÜLEMEDİ-§9.4 | ÖLÇÜLEMEDİ-ADA | KOVA-TUTARSIZ |
|---|---|---|---|---|---|---|---|
| 4300-nokta (KUSURU) | 566 | **494** | **19** | 6 | 3 | **42** | 2 |
| 89-liste | 41 | **41** | 0 | 0 | 0 | 0 | 0 |

TEMİZ kalanların dökümü:
- **4300 evreni:**
  - **323** tek katman.
  - **124** çok dönemli, ama yerleşim aynı yerde sürüyor.
  - **40** çok katmanlı, ama kararı veren tanık atlasın çizdiği nesneyi gösteriyor.
  - **4** yanlış nesneyle kıyaslanmış; doğru nesneyle yeniden ölçüldü, yine TEMİZ.
  - **3** sınırda ve fark GERÇEK.
- **89-liste:** 23 tek katman · 5 süreklilik · 12 çok katmanlı ama aynı nesne · 1 sınırda-gerçek (Dînever).

## ②③ ÇOK KATMANLI → ÖLÇÜLEMEDİ (adıyla, her tanığın HANGİ NESNEYİ gösterdiği)

### ÖLÇÜLEMEDİ-KATMAN — 19 (4300 evreni)

| nokta (atlas dönemi · tür) | atlasın çizdiği nesne | tanık → gösterdiği nesne | neden |
|---|---|---|---|
| **Malatya** (1281–1923 · şehir) | 1281–1839 arası Battalgazi | Pl 629040 → **Arslantepe höyüğü** (DARE, -750..640) 4,02 · ayrı kayıt Pl 25078867 Arslantepe 4,01 · Ṯ MALATIN → modern merkez 2,14 | §6.2 hükmü. Battalgazi için tanık yok |
| **Dimyat** (1250 sonrası · liman) | 1250'den sonra yeniden kurulan Dimyat | Pl 727235 Tamiathis → geç antik konum 0,17 · Ṯ DIMYAT → 10. yüzyıl şehri 3,05 | İki tanık da 1250 yıkımından önceki şehri gösteriyor |
| **Semerkant** (1220 sonrası · şehir) | Timurlu şehir | Pl 59915 Marakanda → **Afrasiyab** 2,46 (ad skoru 0,89, eşiğin altında) | Tanık Moğol öncesi katmanı gösteriyor |
| **Erciş** (1281 sonrası · kale) | eski Erciş (göl kıyısında, 19. yüzyıla kadar) | Ṯ ARJISH → **modern Erciş** koordinatı (Cornu) 0,42 · Pl 874463 *Elegoana → geç antik 0,58 · Pl 874356 Arsesa → BAtlas *label* (konum değil) 9,36 · Pl 662610533 Çelebibağı → modern köy 6,19 | Eski Erciş için kayıt yok. **Malatya deseni olabilir** |
| **Nîşâbur** (1281 sonrası) | Moğol sonrası Nişabur | Pl 952092 → DARMC, Sasani Nev-Shapur (-30..640) 1,23 · Ṯ NAYSABUR → Moğol öncesi şehir 10,2 | Atlasın döneminin nesnesi için tanık yok |
| **Nesâ** (1281 sonrası) | ortaçağ Nasâ | Pl 952093 → Part kalesi (iki höyük), hassasiyet *related* · Ṯ NASA 12,5 | Pl konum tanığı sayılmaz. Ṯ tek başına ≥10 km ile sinyal veriyor, ama nesne çözülmedi |
| **Erzincan** (1142 sonrası) | 1939 öncesi eski Erzincan | Pl 874467 Eriza → Roma yerleşimi, **39.75/39.50, dakika-yuvarlak** 0,68 | §9.4 çözünürlük sorunu, ayrıca farklı katman |
| **Selmâs (Dilman)** | eski Selmas/Dilman | Pl 874671 → 38.2/44.7667, dakika-yuvarlak 0,22 · Ṯ 6,1 (gürültü) · Haftavan tepe (höyük) 4,19 | §9.4. Ayrıca 1930 öncesi ve sonrası yerleşimler ayrı |
| **Korfu** (kale) | Venedik Eski Kalesi | Pl 530834 Corcyra → **Palaiopolis** (antik polis, Kanoni) 2,20 | Kale için kayıt yok |
| **Annaba** (liman) | Bûna/Bône | Pl 305090 → **Hippo Regius ören yeri** 2,40 | Ortaçağ şehri ayrı bir yerde kuruldu |
| **Rabat** (1150 sonrası · liman) | Ribât el-Feth | Pl 275696 Sala → **Chellah** 2,39 · Ṯ RIBAT 5,3 (*villages*, gürültü bandında) | |
| **Trablusşam** (liman) | 1289 sonrası Memlük Trablus (kale çevresi) | Pl 668394 Tripolis → antik/Haçlı liman şehri (el-Mina) 3,27 | |
| **Kûm Ombo** (şehir) | Kom Ombo kasabası | Pl 786079 Omboi → **tapınak**/antik yerleşim 3,04 | |
| **Bern** (şehir) | ortaçağ Bern (kuruluşu 1191) | Pl 177471 → **Engehalbinsel'deki Roma vicus'u** 3,29 · amfitiyatro 3,10 | |
| **Stuttgart** | ortaçağ Stuttgart | Pl 118980 → konum başlığı **"Bad Cannstatt arkeolojik alanı"** (Roma) 4,62 | |
| **Taganrog** (1698 sonrası) | 1698'de kurulan şehir | Pl 825396 → antik Yunan yerleşimi (-750..-30, doğruluk 10 km) 4,62 | |
| **Cirge (Girga)** | Memlük/Osmanlı Cirge | Pl 756659 This → antik başkent; Pleiades'in kendi notu: *"kesin yeri belirsiz"* 4,90 | |
| **Şiraz** | ortaçağ Şiraz | Pl 922706 → **Qasr-i Abu Nasr ile Şiraz'ı tek kayıtta birleştiriyor** (konumlar 4,4 ve 5,7 km; reprPoint 0,81) · ayrı kayıt Pl 65424878 Qaṣr-i Abūnaṣr 4,04 · Ṯ SHIRAZ 6,2 (gürültü) | Geçerli tanık yok. ⚠️ Ṯ noktası atlasın ~6 km batı-kuzeybatısında; ölçülmeye değer |
| **Balasagun (Ak-Beşim)** | Balasagun | yalnız TGN 8724271 → **Burana** (arkeolojik alan) 1,7 | Atlasın adı "Ak-Beşim", ama nokta Burana'da. Ak-Beşim ayrı bir ören (~6 km kuzeybatıda; bu genel bilgi, tanığı yok). Nesne belirsiz |

### ÖLÇÜLEMEDİ-TÜR — 6 (tanık başka türde bir nesneyi gösteriyor)

- **Elafonisos:** Pl 570533 bir burun (OSM Akra Agia Maria) 4,98; atlas türü kale.
- **Zilten:** Pl 344573 Dar Buk-Ammarah, Roma villası 3,60.
- **Minye:** Pl 737080 *Thallos, başka bir yerleşim 3,99.
- **Birgi:** Pl 550515 Dios Hieron 3,36; Birgi/Pyrgion ile aynı yer olduğu kayıtta yok.
- **Maykop:** Pl 825324 kurgan/tumulus (-750..-550) 0,97.
- **Akbû:** Pl 86063779 Roma mezar anıtı 1,21.

### ÖLÇÜLEMEDİ-§9.4 — 3 (tek dayanak TGN *inhabited places* kaydı)

- **Devagiri:** TGN 8724514 Daulatabad, modern köy, 0,6.
- **Bîdar:** TGN 7001691, koordinat 17.9/77.55 yuvarlak.
- **Tatta:** TGN 1083827; atlas noktası TGN koordinatıyla birebir aynı.

### ÖLÇÜLEMEDİ-ADA — 42 (YENİ SINIF, öngörmemiştim)

Bu noktalarda tanık **adanın kendisi**: Pleiades'in `island` ya da `archipelago` kaydı, yani bir alan. Atlas noktasının türü ise **kale**. Adanın temsil noktası ile kale noktası arasındaki mesafe bir konum testi değildir: kale atlasta ada ortasına konmuş olsa bile sonuç "TEMİZ" çıkar.

Adlar: Ayamavra · Batnoz · Bozcaada · Brakya · Cerbe · Egina · Elba · Fornoz · Herke · Hvar · Kaşot · Kemeran · Kerkene · Kimolos · Kiş · Koçbaba · Krk · Kulluk · Marmara Adası · Mikonos · Mliyet · Namfi · Nikarya · Nio · Paksos · Pantelerya · Paros · Santorini · Sifnos · Sire · Sokotra · Sömbeki · Termiye · Vis · Yamurgi · Çamlıca · Çuha · İleryoz · İmroz · İpsara · İskopelos · İstanbulya.

🔴 **Bu sınıfta yeni bulgu adayları var.** Bazı adalarda, adanın tarihî merkezini gösteren Pleiades yerleşim kaydı atlasın kale noktasından uzakta çıktı:
- **Pantelerya:** Pl 462167 *Cossyra (settlement)* (-30..2100; liman, settlement-modern; yani Pantelleria kasabası) **5,94 km**. Nesne aynı ve tek Pleiades tanığı ≥5 km ⇒ **ADAY**.
- **İmroz:** Pl 501438 *Imbros (settlement)* (-750..2100, settlement-modern) **7,83 km** ⇒ **ADAY**.
- **Ayamavra (Lefkada):** Atlas kalesi adanın içinde, ada temsil noktasına 2,13 km uzakta. Adanın kuzey ucundaki Pl 530974 *Leucas* (antik, -750..640) **11,8 km** uzakta; Santa Maura kalesi de kuzey uçta. Tanığın nesnesi antik olduğu için ÖLÇÜLEMEDİ, ama **nokta büyük olasılıkla ada merkezinde duruyor**.
- Kale noktası ile adanın yerleşim kaydı arasındaki mesafenin 3–8 km çıktığı öteki adalar: Krk (Curicum 6,34, antik) · Cerbe (Girba? 7,54, antik) · Marmara (Proconnesus yerleşimi 6,57, antik) · Herke 4,60 · Paros 4,75 · Kulluk 4,35 · Mikonos 4,33 · Kimolos 4,32 · Nio 4,23 · Sömbeki 3,87 · Çuha 3,70.
- Hvar'daki Pharus kaydı (8,26) Stari Grad'ı gösteriyor, Hvar kasabasını değil. Yani başka bir nesne.

### KOVA-TUTARSIZ — 2 (katman sorunu değil; TEMİZ kararının dayanağı yok)

Bu iki karar elle verilmiş ve bir tanığa dayanmıyor:
- **Ecdâbiye:** 5 km içinde hiç tanık yok, yalnız Ṯ 32,1 km. Kural gereği tek Ṯ tanığı ≥10 km = ADAY.
- **Multan:** yalnız Ṯ 7,56 km. Kural gereği GÜRÜLTÜ.

## TEMİZ KALAN çok katmanlılar

### TEMİZ-DÜZELTİLDİ — 4: yanlış nesneyle kıyaslanmış, doğru nesneyle yeniden ölçüldü

| nokta | LAB'in kıyasladığı nesne | doğru nesne (Pleiades) |
|---|---|---|
| **Ayasuluk (Selçuk)** | Ephesus, antik liman şehri, 2,55 | 964353020 *Grand Fortress of Selçuk* (640–2099) **0,49** · 336873086 Ayasuluk Hill 0,50 |
| **Fethiye (Makri)** | Makri **adası** 3,43 | 639137 Telmessos (-550..2100) **0,92** |
| **İstendil (Tinos)** (tür: kale) | Tenos'un modern kasabası 3,58 | 853662205 Exomvourgo (kale) **0,87** |
| **Medâin-i Sâlih** | Pleiades'te *"Erroneous Duplicate"* olarak işaretli kayıt | 814675 Egra/Meda'in Salih **0,75** |

### TEMİZ-SINIRDA-GERÇEK — 3 + 1: nesne aynı, fark gerçek, ama 5 km eşiğinin altında

| nokta | aynı nesneyi gösteren tanık | yorum |
|---|---|---|
| **Van** (1232–1923 · **kale**) | Pl 964673805 **Van Fortress** (-900..2100; bütün dönemlerde aynı kaya) **4,60** · Tušpa 4,74 · (Ṯ WAN 9,2, *villages*, gürültü) | **ÖLÇÜLEMEDİ DEĞİL.** Nesne aynı, tanık doğru nesneyi gösteriyor. Atlas noktası kalenin ve kale eteğindeki eski Van'ın **4,6 km doğusunda**, yani modern Van'da. Eşiğin 0,4 km altında kalıyor; Korint gibi "eşik sınırında". §6.1: Pleiades'in hata payı ölçülmedi, ama kaya iyi tanımlı bir nesne |
| **Kandehar** (1281–1923) | Pl 59669 Eski Kandehar **4,87** + Pl 630721027 *Old Kandahar citadel* **4,91** | 1281–1738 arasındaki şehir 4,9 km batıda; atlas noktası 1761 sonrası kurulan modern Kandehar'da. Ṯ kaydı bir bölge (_R) kaydı, tanık değil |
| **Angkor (Siem Reap)** | Pl 531398484 Angkor (800–1499) **4,35**, dakika-yuvarlak | 1281–1431 başkenti için fark gerçek. 1431 sonrasındaki Siem Reap'in tanığı yok (kısmî) |
| **Dînever** (89-liste) | Pl 903012 Dinawar ören yeri (uydu konumu) **3,67** + Ṯ 4,81 | LAB koordinatı örenin ~3,7 km dışında kalıyor |

### TEMİZ-ÇOK-KATMAN-AYNI-NESNE — 40 (4300) + 12 (89)

Bu noktalarda kararı veren tanık atlasın döneminin nesnesini gösteriyor. Öteki tanığın farkı **başka bir katmanın farkıdır, bulgu değildir**.

- **Öne çıkanlar:**
  - **Kahire:** Ṯ el-Kâhire (*quarters*) 0,76; Pl Fustat 4,75 başka bir nesne.
  - **Rakka:** Ṯ Abbasi Rakka 3,92; Pl Kallinikos 4,42 antik katman.
  - **Akkâ:** Ṯ 0,6; Pl Tel Akko höyüğü 1,1, ayrı bir nesne.
  - **Balat:** Pl Miletus (-1750..2000); temsil noktası tiyatroda, yani Palatia kalesinin yerinde, 2,28.
  - **Baf:** Pl Chrysopolitissa (300–1453) 2,21.
  - **Firûzâbâd:** iki nesne de tanıklı: modern şehir 0,05 · Gur 3,89.
  - **Belh:** Pl Bactra (-2000..2000) + Ṯ 3,25.
  - **Bağdat:** Pl Bagdata (-1600..2099).
  - **Harput:** Pl Harput ören yeri 1,57.
  - **Bulgar:** Pl Bolgar (10.–16. yüzyıl).
  - **Kûs:** Ṯ 1,7.
  - **Cebelitarık** · **Hasankeyf**.
- **TGN'ye dayananlar:** Pandua (*ruins*) · Karakurum (*deserted*) · Vijayanagara (*deserted*).
- **Öteki 4300 noktaları:** Kûfe · Katîf · Gazne · Tilimsan · Antakya · Uksur · Dvin · Karşi · Nahçıvan · Buhara · Hayber · Fas · Kayrevan · Mesîle · Sicilmâse (kısmî) · Türabe · Telafer · Kasr-ı Şîrîn · Dâmgan · Hucend · Suhâr · Miliana · Tebriz · Sana.
- **89-liste:** Taberiye · Ahlat · Ayla · Bâmiyân · İzeh · Kayseriye · Busra · Afâmiye · Sis · Carcassonne, ayrıca:
  - **Adilcevaz:** Pl 533939000 Adilcevaz **kalesi**, ortaçağ, 0,18. KASA'nın "kale konumu ölçülmedi" notu bu kayıtla kapanabilir.
  - **Rahbe:** tanık şehri gösteriyor; kale ayrı bir nesne ve ölçülmedi.

### TEMİZ-ÇOK-DÖNEM-SÜREKLİ — 124 (4300) + 5 (89)

Bu noktalarda mekanik bayrak çıktı: kayıt çok dönemli, ya da aynı yerin birden fazla konumu var (çoğunlukla DARMC'nin 10 km doğruluklu kopya konumu). Yerleşimin başka bir yere taşındığına dair kanıt yok. Liste CSV'nin `karar` sütununda.

### TEMİZ-TEK-KATMAN — 323 (4300) + 23 (89)

Teyit edildi: tek konum var ve ayrışmaya işaret eden bir bilgi yok. 89-listeden: Silvan, Mistra, Lazkiye, Sîrâf, Kumbi Salih, Mârida, Chartres, Worms, Speyer, Salzburg, Salerno, Melfi, Benevento, Cremona, Kançipuram, Polonnaruva, Malazgirt, Kalatü Caber, Cebele, Bâniyâs, Ebher, Ahyolu, Süzebolu.

⚠️ **Zayıf TEMİZ bayrakları (sayıldı ama taşınmadı):**
- `DÖNEM-DIŞI-TEK-TANIK` (4300'de 288, 89'da 15): Tek tanık Pleiades ve en yakın konumun bitiş yılı ≤1000. Tanık **antik nesneyi** gösteriyor. Atlasın ortaçağ/Osmanlı nesnesinin aynı yerde olduğu bir *süreklilik varsayımı*. Ayrıştıklarına dair kanıt yok, bu yüzden taşınmadı.
- `YALNIZ-MODERN-KONUM` (4300'de 35, 89'da 2): Tek dayanak, Pleiades'teki OSM modern konumu. Yerleşim süregeldiyse bu yeterli, ama §9.4'ün uyardığı türden bir tanık.
- `YUVARLAK-KOORD` (9): Pleiades konumu dakikaya yuvarlanmış. Abrî, Angkor, Dâmgan, Geyve, Kum, Serahs, Tuzla, Urmiye, Şüşter. Hepsinde mesafe + 1,3 km < 5.

## "Sınırda" alt kümesi (açıkça)

| tanım | sayı | ÖLÇÜLEMEDİ'ye geçen | SINIRDA-GERÇEK | TEMİZ kalan (nesne aynı, fark tanığın hata bandında) |
|---|---|---|---|---|
| 4300 · herhangi bir geçerli tanık 4–5 km | **25** | **7**: Malatya, Cirge, Stuttgart, Taganrog (KATMAN) · Elafonisos (TÜR) · Sokotra, İmroz (ADA) | **3**: Van, Kandehar, Angkor | **15**: Dâmgan, Fas, Hucend, Kahire, Kasr-ı Şîrîn, Kayrevan, Kûs, Mesîle, Miliana, Rakka, Sicilmâse, Suhâr, Telafer, Türabe, Uksur |
| 4300 · en yakın geçerli tanık 4–5 km (dar tanım) | **14** | **6** (Cirge, Elafonisos, Sokotra, Stuttgart, Taganrog, İmroz) | **3** | **5** (Fas, Kayrevan, Mesîle, Sicilmâse, Türabe; hepsinde tek tanık Ṯ, hepsi Ṯ'nin p90 değeri olan 8,7 km içinde) |
| 89 · herhangi bir tanık 4–5 km | **2** | 0 | 1 (Dînever) | 1 (Busra) |

## Öngörü ↔ ölçüm

| | öngörü | ölçüm | not |
|---|---|---|---|
| 4300: çok katman yüzünden ÖLÇÜLEMEDİ | ~15 | **19** (KATMAN) · +6 TÜR · +3 §9.4 = **28** | Yakın. Malatya, Dimyat ve Semerkant tuttu. **Van tutmadı**: nesne aynı, fark gerçek (4,6 km), eşiğin altında |
| 4300: TEMİZ'den çıkan toplam | — | **72 / 566 (%12,7)**, bunun 42'si ADA sınıfı | ADA sınıfını **öngörmemiştim**. Kovanın en büyük açığı bu |
| 89: ÖLÇÜLEMEDİ | ~5 | **0** | **Öngörü yanlış çıktı.** Öngördüğüm adayların hepsinde (Kayseriye, Afâmiye, Anavarza, Bâmiyân, Adilcevaz, Malazgirt) aynı nesneyi gösteren bir tanık bulundu. Koordinatörün beyanı ("41'in büyük kısmı tek katman, kova çökmez") doğrulandı |
| sınırda: ÖLÇÜLEMEDİ oranı | ~%60 | dar tanımda **6/14 (%43)**, geniş tanımda **7/25 (%28)**, 89'da 0/2 | Yön doğru, oranı fazla tahmin etmişim. Sınırda kümesi yine de en riskli alt küme: 25 noktanın 10'u ya ÖLÇÜLEMEDİ ya da gerçek fark |

## Yeni gerçek bulgular / adaylar

1. **Van:** Nesne aynı (Van Fortress, -900..2100). Atlasın kale noktası tarihî kalenin **4,6 km doğusunda**, modern Van'da. Eşiğin altında; Korint gibi "eşik sınırında". Malatya'nın tersi bir durum: tanık doğru nesneyi gösteriyor ve fark gerçek.
2. **Kandehar:** 1281–1738 şehri (Eski Kandehar, iki Pleiades kaydı) atlas noktasından 4,9 km uzakta. Eşiğin altında.
3. **Pantelerya** (Cossyra yerleşimi 5,94 km) ve **İmroz** (Imbros yerleşimi 7,83 km): tek Pleiades tanığı ≥5 km ⇒ **ADAY**. **Ayamavra**: kale noktası ada ortasında (Leucas 11,8 km, antik nesne).
4. **Erciş:** Malatya deseni olabilir; Ṯ'nin noktası modern kasabada. Eski Erciş için tanık aranmalı (TGN).
5. **Balasagun (Ak-Beşim):** Atlasın adı ile noktası çelişiyor. Nokta Burana'da, ad Ak-Beşim.
6. **Şiraz:** Ṯ, ortaçağ Şiraz'ını atlas noktasının ~6,2 km batı-kuzeybatısında gösteriyor. Tek tanık Ṯ olduğu ve fark 5–10 km bandında kaldığı için gürültü sayılıyor. Pleiades kaydı iki yeri birleştirdiği için ikinci tanık da yok.

## Sınırlar

- Ayrışmaya dair bilgilerin bir kısmı **genel bilgi, tanık değil**: Dimyat'ın 1250'de yeniden kurulması, Erciş'in taşınması, Erzincan 1939, Trablus 1289, Bern 1191, Ak-Beşim'in yeri. Bu satırlardaki karar "atlas yanlış" değil, **"tanık yanlış nesneyi gösteriyor"** üzerine kuruldu.
- `DÖNEM-DIŞI-TEK-TANIK` (288) süreklilik varsayımına dayanıyor. §6.2 katı okunursa bu satırlarda da "nesne aynı mı?" sorusu cevapsız kalıyor. Taşınmadılar, ama TEMİZ'likleri **ölçülmüş değil, varsayılmış**.
- Pleiades ve TGN'nin hata dağılımı hâlâ ölçülmedi (§6.1). Van ile Kandehar'ın eşiğin altında kalması bu hata payına bağlı.

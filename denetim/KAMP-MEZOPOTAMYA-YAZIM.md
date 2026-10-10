# KAMP-MEZOPOTAMYA-YAZIM — yazıma hazır çıktı + ön denetim (K1, 10 Ekim 2026)

Görev: koordinatör — "YAZMA, HAZIRLA. `data/*.js`e DOKUNMA. Çıktı bir yazıcının MEKANİK olarak indirebileceği hâlde olsun."
Önce okundu: `VERI-YAPISI.md`. Alan adları oradan, değer sözlükleri oradan.

## Dosyalar (hepsi `denetim/`)
| dosya | içerik |
|---|---|
| `KAMP-MEZOPOTAMYA-yazim_hazirla.py` | üretici + ön denetim (CSV'lerden üretir; `girdi.yukle()` / `girdi.oku_devletler()` ile MEVCUT veriyi okur; `data/`ya yazmaz) |
| `KAMP-MEZOPOTAMYA-YAZIM-kunye.json` | `kunye` (devletler.js şeması) · `v_dilimleri` · `kunye_disi` · `v_yazilmaz` |
| `KAMP-MEZOPOTAMYA-YAZIM-yerlesim.json` | yerleşimler.js şeması (`ad · tur · lat · lon · g · k · s · bos · kaynak · not`) + `_ilk_kayit` / `_yazim` (yazıcıya bilgi; şema alanı DEĞİL, alt çizgiyle başlar) |
| `KAMP-MEZOPOTAMYA-YAZIM-olay.json` | olaylar*.js şeması (`t · k · etiket · b · gun · yer · d · kaynak · ic_not_d · gs`) |
| `KAMP-MEZOPOTAMYA-YAZIM-ondenetim.json` | beş sorunun ham çıktısı |

Yeniden üretim: `py denetim/KAMP-MEZOPOTAMYA-yazim_hazirla.py` (CSV değişirse JSON yeniden üretilir; JSON elle düzenlenmez).

## 🔴 Dönüşüm kuralları (VERI-YAPISI'ndan, mekanik)
- **MÖ yıl → ASTRONOMİK yıl:** MÖ *n* = `-(n−1)`.
  - CSV'ler tarihî yazımda (`-2334-01-01` = MÖ 2334) ⇒ yazımda `-2333-01-01`.
  - Bütün tarihler 4 haneye dolduruluyor (`-0625-11-23`).
  - Her MÖ kaydına açıklayıcı metin yazıldı (kapı metin↔sayı çapraz denetler): `gun:"MÖ 2334"` · `"~MÖ 2334"` (onyil/yuzyil) · `"23 Kasım MÖ 626"` (gün kesin).
- **Takvim:** Jülyen, ÇEVİRME YOK. Nabopolassar'ın 23 Kasım 626 tarihi kaynakta Jülyen verili (Brinkman).
- **`kesinlik`:**
  - `on_yil` → `onyil`.
  - Uçları ayrışan künyede NESNE: `yeni-babil` `{f:"gun", t:"yil"}`.
  - "~" yalnız onyil/yuzyil.
- **`tur` kapalı sözlük:** hanedan → `hanedanlik` · sehir-devleti → `devlet` · krallık → `krallik`.
  - **"Kabile Konfederasyonu" sözlükte YOK** ⇒ `tur:"devlet"` + ad içinde "Kabile Konfederasyonu". Emsal: `berabis` = tur:"devlet", ad "Berâbîş Kabile Konfederasyonu".
  - ⚠️ Koordinatörün `tur:"Kabile Konfederasyonu"` hükmü sözlüğe aykırıydı; emsale uyuldu.
- **`bolge`:** elam-* → `iran`, ötekiler → `mezopotamya`.
- **Kronoloji `k:`** (25 değerlik sözlükten): doğuş → `kurulus` · yıkılış → `siyaset` · EVET ele geçirme → `fetih` · AKIN → `sefer` · HARAÇ ⓑ/ⓒ → `vassal` · isyan → `isyan` · tahta çıkış/atama → `taht`.
- **Yerleşimde `ic_not` alanı YOK** (BILINEN_ALANLAR'da yok) ⇒ iç not `not:` alanına. Kronolojide `ic_not_d`.
- **SINIR (②) kronoloji maddeleri:** `gun` metnine "(sınır — olay günü DEĞİL)" eklendi.

## Çıktı sayıları
| küme | yazılabilir | yazılamaz / dışarıda |
|---|---|---|
| künye | **23** | 19 (14 uç yazılamaz · 5 "polity değil") |
| v: dilimi | **19** | 10 (sayısal uçsuz ②/③ sınır 9 · ÇÜRÜTÜLDÜ 1) |
| yerleşim | **68** (63 yeni nokta + 4 MEVCUT noktaya ek + 1 karar bekliyor) | — |
| ↳ `s:` taşıyan | 11 (yalnız BAŞKENT ilişkisinden) | 57 `bos:"veri-yok"` |
| olay | **240** | 15 (tarih ÖLÇÜLEMEDİ/bulunamadı) |

- `k:` dağılımı: fetih 94 · sefer 53 · siyaset 31 · kurulus 26 · vassal 18 · taht 12 · isyan 3 · diger 3.
- **Künye yazılamayan 14 (adıyla):** uruk-gec-uruk, uruk-ed, ur-i, lagas-i, umma, esnunna, babil-i, hana, kassit-babil, hanigalbat, **yeni-asur**, elam-avan, elam-simaski, babil-ara. Sebep: en az bir ucu ③ DÖNEM / YOK / TARTIŞMALI. Üç saat kuralı: ne tarih ne sınır yazılır.

## ÖN DENETİM — beş soru, SAYIYLA
| # | soru | sonuç |
|---|---|---|
| ⓐ | kaynaksız yerleşim | **0 / 68** |
| ⓑ | 3 km içinde MEVCUT nokta (4.287+ noktaya karşı, `girdi.yukle()`) | **6 çift, 5 yerleşim** · ad-eşit uzak sesteş 3 · kendi içi 0 |
| ⓒ | dönem çakışma / ters / sıfır | **0** (ilk koşuda 4 — ÜRETİCİNİN kusuru, düzeltildi, aşağıda) |
| ⓓ | Değişmez 2: kırılmanın ±30 gün içinde kronoloji maddesi | **120 kırılmanın 16'sında YOK** (ilk koşuda 17; 1 madde eklendi) |
| ⓔ | hayalet kimlik (`devletler.js`de de künye listemde de yok) | **8**: yeni-asur · babil-ara · suhu · patina · samal · kummuh · qatnu · bit-zamani |

### ⓑ ayrıntı — 4 yerleşim YENİ NOKTA AÇMAZ, mevcut noktaya eklenir
| K1 adı | mevcut nokta | uzaklık |
|---|---|---|
| Arbela | Erbil (yerlesimler.js) | 0,03 km |
| Arrapha | Kerkük (yerlesimler.js) | 0,36 km |
| Halab | Halep (yerlesimler.js) | 0,34 km |
| Karkamış | Cerablus (yerlesimler_ek25.js) | 0,50 km |
- ⇒ Yazıcı bunlara yeni kayıt AÇMAZ. MÖ alanlarını mevcut kayda ekler (`_yazim` alanında yazılı).
- 📌 Arbela ve Arrapha 1. turun 32 şehrindendi: o tur 3 km denetimini HİÇ koşmamıştı.
- **Karar bekleyen 1:** Guzana (Tell Halaf) — Ceylanpınar 2,06 km, Qaţţīnah 2,47 km. Antik höyük modern kasabanın sınır ötesi komşusu. 3 km kuralı ikinci nokta açmayı yasaklıyor, ama yer AYNI DEĞİL ⇒ koordinatör kararı.
- **Ad-eşit uzak sesteş 3** (mükerrer DEĞİL, ad karışıklığı riski): Babil ↔ "Bârfurûş (Bâbil)" 879 km · Mari ↔ "Merv (Mari)" 1915 km · Susa ↔ Şuşa 853 km. `ad` alanları farklı ⇒ ad çakışması yok; `ad_esanlam.js` kalemine NOT.

### ⓒ ayrıntı — kusur ÜRETİCİDEYDİ
- İlk koşu 4 çakışma verdi, hepsi `yer:Ur`'da. Sebep: başkent eşleyici ALT-DİZGİ arıyordu ve "Ur"u "Uruk", "Asur", "Ninurta" içinde buldu.
  - Sonuç: Ur'a Asur ve Uruk dönemleri yazılmıştı.
- Düzeltme: TAM SÖZCÜK eşleşmesi ⇒ 0.
- 📌 Ön denetim kendi aracını yakaladı. Yazımdan SONRA koşsaydı Ur'un `s:`si main'de yanlış olurdu.

### ⓓ ayrıntı — 16 kırılmanın 16'sı ADIYLA
1. **babil-ara v: — 13 kırılma: YIL HESABI KONVANSİYONU çatışması.**
   - Dilim tablosu Babil RESMÎ saltanat yılını (Nisannu'da başlayan yıl) kullanıyor: Tiglat-pileser III dilimi MÖ **728**'de başlıyor.
   - Kronoloji OLAYI kaydediyor: Tiglat-pileser III Babil'i MÖ **729**'da aldı (ABC 1).
   - Aynı geçiş, iki saat.
   - Ayrıca saltanat değişimlerinin (ölüm/tahta çıkış) çoğu için kronolojide madde yok.
   - ⇒ DÜZELTİLMEDİ: hangi saatin haritaya çizileceği bir konvansiyon kararı ("SÜRE ≠ OLAY"ın Babil hâli). İki şık:
     - (a) v: uçları OLAY yılına çekilir; kronolojide zaten olan olaylarla eşleşir.
     - (b) resmî yıl kalır; her geçiş için kaynaklı kronoloji maddesi eklenir (dilim tablosunda kaynak hazır).
   - Öneri: **(a)** — harita OLAYI çizer, resmî yıl bir sayım biçimidir.
2. **samal t, kummuh t ×2 — 3 kırılma: YAPISAL.**
   - Tanıklı aralık dilimlerinin SONU bir olay değil, SON TANIK + 1 yıl (sıfır uzunluk yasağı).
   - Hükümle konan "uçlar ÖLÇÜLEMEDİ beyanlı" dilim, Değişmez 2'yi her tek tanıklı dilimde KIRAR.
   - ⇒ Kural çatışması, düzeltilemez: ya Değişmez 2'ye "tanıklı aralık sonu" istisnası, ya bu dilimler yazılmaz. Hüküm sende.
- (Eklenen 1 madde: MÖ 773 Kummuh, Pazarcık steli arka yüzü, kaynaklı — tanık zaten HARAC-UZAT'taydı, kronolojiye inmemişti.)

### ⓔ ayrıntı — 8 hayalet, üç sınıf
- **🔴 `yeni-asur` — EN AĞIR BULGU:**
  - 19 v: diliminin 18'inin suzereni `yeni-asur`, ama yeni-asur künyesi YAZILAMAZ: f = 911 DÖNEM (Met "kronolojinin güvenle uzatılabildiği yıl"), ③.
  - ⇒ Bütün Asur tâbilikleri yazılamayan bir künyeye bağlı.
  - Çare ya künyenin f'sine bir ① OLAY ya da ② SINIR bulmak, ya da orta-asur→yeni-asur ayrımını yeniden düşünmek. Asur süren tek polity, Babil sorusunun aynısı: §14 "tek künye, hanedan başına değil".
  - ⇒ Babil birleştirme kararıyla AYNI KUYRUĞA.
- **`babil-ara`:** künye f/t ÖLÇÜLEMEDİ (ödünç uç yazılmadı, Kral Listesi A açılmadı) ⇒ 10 v: dilimi sahipsiz bir künyeye bağlı.
- **Dataset dışı 6:** suhu (POLITY'de "listeye alınmadı" yer tutucusu) · patina · samal · kummuh · qatnu · bit-zamani (§18 haraç dilimleri).
  - Bunlar ya K1 künyesi alacak ya K3/K4'ün künyesine bağlanacak (atif K3/K4).
- `devletler.js`de bulunan kimlik: **0** (atlas 1281+; MÖ künye yok — beklenen).

## Yazıcıya açık bırakılan kararlar (koordinatör)
1. **`kur:` YAZILMADI:**
   - İlk yazılı tanıklık bir kuruluş tarihi DEĞİL. "İlk anılış" kuruluşun ÜST sınırıdır (§14 aralık dersinin aynısı).
   - `kur` ise "öncesinde yerleşim yoktur" der ⇒ Uruk'u MÖ 3200'den önce silerdi (arkeoloji Ubeyd).
   - Şırnak emsali VERI-YAPISI'nda "alt sınır" diye yazılı; o etiket yönce TERS görünüyor ⇒ ayrıca bakılmalı.
   - İlk kayıt `_ilk_kayit` alanında, yazıcıya bilgi olarak.
2. **`s:` yalnız başkent ilişkisinden (11 yerleşim):**
   - Öteki 57 şehrin hangi polity'ye ne zaman ait olduğu ARAŞTIRILMADI ⇒ `bos:"veri-yok"` (`__BOSLUK__` DEĞİL: "kimsenin değil" demiyoruz, "araştırmadık" diyoruz).
   - Başkent ilişkisi bir çıkarımdır (polity'nin merkezi = o şehir onun) ⇒ `kaynak` alanında adıyla.
3. **Değişmez 1:** `s:` taşıyan 11 şehrin dönemleri arasında boşluklar var (ör. Ur: ur-iii 2112–2004 dışı). Bu aralıklar sahipsiz görünecek. Kapı ⓓ gibi koşulmadı, sayılmadı.
4. **Motor:** MÖ verisi bugün yazılamaz (C3/C4 inmedi, "negatif yıl: 0" — VERI-YAPISI). Bu çıktı C4 sonrası iniş içindir.

## Yıllık korunmuşluk — §18 boşluklarının etiketi (koordinatör şartı)
Kanıt: `KAMP-MEZOPOTAMYA-YILLIK-KORUNMUS.md` (Grayson RIMA 2/3 girişleri, RINAP 1, SAAS 2). Etiketler: `KAMP-MEZOPOTAMYA-SUZEREN-BOSLUK.csv`.
- **KORUNMUŞ yıllık:**
  - Aššurnaṣirpal II 1–18. yıllar (883–866);
  - Šalmaneser III 31. yıla dek (858–828; Kara Dikilitaş "engraver ran out of space").
- **PARÇALI:** Šamši-Adad V (812'de biter, "never finished") · Tiglat-pileser III (Kalḫu yıllıklarının ≤⅓'ü).
- **YOK:** Adad-nārārī III · Šalmaneser IV · Aššur-dan III · Aššur-nārārī V (810–745). Grayson: "only the beginning of one real annals text", "very few royal inscriptions", "one small fragment", "as obscure as … his predecessor".

| etiket | boşluk | YIL |
|---|---|---|
| ALEYHTE DELİL (korunmuş + anılmıyor) | 5 | 68 |
| ALEYHTE DELİL? (iç bölge — Qatnu 877–866) | 1 | 12 |
| ÖLÇÜLEMEDİ (yıllık yok/parçalı) | 7 | 273 |

- **Sam'al'ın 115 YIL'ı ikiye bölündü:** 852–828 **ALEYHTE DELİL (25 YIL)** · 827–739 **ÖLÇÜLEMEDİ (88 YIL)**.
  - Koordinatörün "sessizlik aleyhte delildir" cümlesi YALNIZ ilk parçada doğru.
- ⚠️ İki çekince (beyanlı):
  - **Kummuh:** "I receive annually" beyanı yıllık haracın her yıl ANILMAYACAĞINI da düşündürür ⇒ 852–828 sessizliği aleyhte delil sayıldı (kural uygulandı), ama zayıf.
  - **Qatnu:** iç (Habur) birim yabancı haraç listesine girmeyebilir ⇒ "ALEYHTE DELİL?" ayrı etiket.
- **Eponim kroniği** 823–727 için neredeyse her yıl sefer hedefi veriyor. Ama haraç ÖDEYENLERİ listelemiyor ⇒ tâbi sessizliği için delil DEĞİL. Yoğun kaynak, yanlış soru.

---

## TAZELEME 1 — koordinatörün dört hükmü uygulandı (aynı gece)
### ③ `yeni-asur` f: ③ → ② (koordinatör hipotezi, ÖLÇÜLDÜ, TUTTU — bir ince farkla)
- "Yeni Asur" bir DÖNEM ADI (konvansiyon). 911 ise bir **SALTANAT BAŞI**: RIAo "Adad-nārārī II (911-891 BC)", eponim listesiyle mutlak.
- §9 tiplemesi dönemin ETİKETİNİ tarihin KENDİ TANIĞIYLA karıştırmıştı.
- **İnce fark:** 911 ① OLAY değil, ② SALTANAT.
  - Tahta çıkışın günü/olayı tanıklı değil, yalnız saltanat listesindeki yıl.
  - akkad f (Sargon) ve orta-asur f (Aššur-uballiṭ I) ile AYNI tip.
  - ② yazılabilir ⇒ künye AÇILDI.
- **Yan bulgu (DÜZELTİLDİ):** orta-asur t `-912-01-01` idi.
  - Aššur-dān II'nin saltanatı 912 DAHİL biter; o yazım 912'yi dışarıda bırakıp iki künye arasında **1 YIL boşluk** açıyordu.
  - ⇒ t = 911 başı; iki künye artık BİTİŞİK. KRONOLOJİ satırı da düzeltildi.
- ⇒ ⓔ hayalet 8 → **7**. Asur'a bağlı **18 v: dilimi tek hamlede açıldı**.

### ① Babil v: uçları OLAY yılına — 12 harita kırılma ucu TEK TEK tiplendi
Resmî saltanat yılı (Nisannu'da başlayan "1. yıl") ③ konvansiyon ⇒ yazılamaz. Olay yılı yazıldı:

| uç | eski (resmî) | yeni | tip | tanık |
|---|---|---|---|---|
| TP III f | 728 | **729** | ① | ABC 1 i.19-23 Babil'i aldı |
| Šalmaneser V t | 722 dahil | **721** başı | ① | ABC 1 i.31-32 Marduk-apla-iddina II Nisannu 721 |
| Sargon II f | 709 | **710** | ① | ABC 1 ii.1-5 |
| Sanherib t | 704 dahil | **703** başı | ① | ABC 1 ii.12-13 Marduk-zākir-šumi II |
| Bel-ibni f | 702 | **702** | **SINIR** | 703'te tahta (①) AMA aynı yıl iki geçiş (Sanherib→bağımsız→Bel-ibni) ⇒ yıl çözünürlüğünde sıfır uzunluk YASAK ⇒ 702, beyanlı |
| Aššur-nadin-šumi t | 694 | **694** | ① | ABC 1 ii.36-45 Elam aldı |
| Nergal-ušezib f | 693 | **694** | ① | Elam tahta çıkardı |
| Nergal-ušezib t | 693 | **693** başı | ① | ABC 1 iii.1-12 yakalandı |
| Esarhaddon f | 680 | **680** | ① | 18 Addaru 681/680 = Mart **680** Jülyen (ABC 1 iii.38, ABC 14) |
| Šamaš-šuma-ukin t | 653 dahil | **652** başı | ① | ABC 16 9-11 + Frame "began early in 652" (⚠️ 19 Tebêtu Ocak 651'e düşebilir, beyanlı) |
| Kandalanu f | 647 | **647** | **SINIR** | Babil'in düşüşü (648) kronikte YOK (ABC 15 yalnız 650 kuşatması) ⇒ olay yılı ① DEĞİL, resmî yıl kaldı |
| Kandalanu t | 627 dahil | **626** başı | **SINIR** | 627 ölümü Uruk Kral Listesi'nin 21 yılından türetilmiş (②) |

- **Sayı:** 12 harita kırılma ucunun **9'u ① OLAY**, **3'ü SINIR**.
  - SINIR 3'ün hiçbiri "türetilmiş olay yılı" yazılarak ① gösterilmedi (koordinatör şartı).
  - Öteki 6 uç İÇ: aynı suzerenin bitişik dilimleri, haritada kırılma değil.
- Kronolojiye 2 kaynaklı madde eklendi (KRONOLOJİ 255 → **257**): 680 Esarhaddon tahtı · 652 Šamaš-šuma-ukin ayaklanması. İkisi de dilim tablosunun kaynağından.
- Esarhaddon olayı ① ama tâbilik DEĞİL ⇒ `v_tipi = v:asur-cifte` korunur.

### ② `uc_turu` VERİYE indi + "SINIR UÇLU" ayrı kova
- Her v: diliminde ve künyede `uc_turu: {f, t}` ∈ `OLAY | SINIR | İÇ`.
  - Haraç tanık-uzatma dilimleri (§18): iki ucu da SINIR (ilk/son tanık).
- Değişmez 2 ön denetimi istisnayı **`uc_turu`na** bağlar, kayda değil: OLAY tipli uç kronolojisizse KIRAR.
- **Ayrıca üreticide bir kusur daha bulundu ve düzeltildi:**
  - v: dilimlerinin t ucu "o yılın BAŞI" yazılıyordu. Tablolardaki t DAHİL son yıldır (857–831 = 831 de tâbi) ⇒ son yıl düşüyordu.
  - Tek yıllık dilimler sıfır uzunluğa iniyor, "1 yıl" yamasıyla örtülüyordu.
  - Şimdi t = sonraki yılın başı, yama kaldırıldı.
  - Bu gece aracımda bulunan ÜÇÜNCÜ kök neden: f=ALT/t=ÜST şablonu · alt-dizgi eşleyici · dahil-son-yıl.

### ④ Guzana — AYRI KALIR
- `not`a yakınlık beyanı yazıldı (Ceylanpınar 2,06 km · Qaţţīnah 2,47 km, komşuluk) ⇒ sonraki tarama yeniden işaretlemesin.
- **Kural (koordinatör):** 3 km taraması ADAY üretir, HÜKÜM VERMEZ.

### ⓪ `kur:` — koordinatör VERI-YAPISI tanımını düzeltti (7dc2b084)
İLK ANILIŞTAN `kur:` TÜRETİLMEZ. Bu çıktıda `kur:` YOK; ilk kayıt `_ilk_kayit` alanında, yazıcıya bilgi.

### ÖN DENETİM — tazelenmiş sayılar
| # | önceki | şimdi |
|---|---|---|
| künye yazılabilir | 23 | **24** (+yeni-asur) |
| yerleşim `s:` taşıyan | 11 | **15** (yeni-asur başkentleri: Asur, Kalhu, Dur-Şarrukin, Ninova, Harran'dan eşleşenler) |
| olay | 240 | **243** |
| ⓐ kaynaksız | 0 | **0** |
| ⓑ 3 km | 6 çift | **6 çift**: 4 mevcut noktaya ek · Guzana ayrı · 0 karar bekleyen |
| ⓒ dönem kusuru | 0 | **0** |
| ⓓ kırılma / kronolojisiz | 120 / 16 | **124 / 7** ⇒ **AÇIK (OLAY uçlu) 0** · **SINIR UÇLU 7** |
| ⓔ hayalet | 8 | **7** |

- **SINIR UÇLU 7 (adıyla):**
  - babil-ara f 702 (Bel-ibni) · babil-ara f 647 (Kandalanu) · babil-ara t 626 (Kandalanu);
  - samal t 738+1 · kummuh t 773+1 · kummuh t 738+1 · qatnu t 878+1 (son tanık).
- **ⓔ kalan 7:** babil-ara (f/t ÖLÇÜLEMEDİ) · suhu (yer tutucu) · patina · samal · kummuh · qatnu · bit-zamani (dataset dışı haraç polity'leri, atif K3/K4).

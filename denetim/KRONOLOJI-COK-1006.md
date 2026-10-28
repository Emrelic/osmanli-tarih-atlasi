# KRONOLOJI-COK-1006 — eşlenmeyen 15 kronoloji dosyasının ÇOK yoluna bağlanması + pencere sınavı

Görev: UMIT-W37 devamı (UMIT İRTİBAT). Temel commit **origin/main `d0877829`** · ağaç `C:\atlas-w37c` (atılabilir).
Uygulama sırası: `KRONO-EZILDI-1006.diff` → `KRONO-EZILDI-1006b.diff` → **bu paket** (ikisi `--check` ✓, sırayla uygulandı).
Motor tuzuna dokunulmadı.

## 0. ÖNGÖRÜ — ölçmeden ve diff yazılmadan ÖNCE mühürlendi
Kaynak: önceki ölçüm `KRONO-ESLENMEYEN-1006` (A sınıfı = `taraflar` pencerede).

| dosya | inecek madde (≥1 künyeye) |
|---|---|
| CIN | 124 |
| HINDISTAN | 101 |
| JAPONYA | 62 |
| MISIR | 111 |
| OZBEK | 61 |
| ANADOLU | 253 |
| ARABISTAN | 43 |
| BALKAN | 125 |
| DOGU_AFRIKA | 190 |
| GUNEY_ASYA | 133 |
| IRAN_ARDILLARI | 108 |
| ITALYA_SEHIR | 170 |
| KUZEYAFRIKA | 65 |
| ORTA_ASYA | 136 |
| SIRBISTAN | 16 |
| **toplam** | **1.698 madde / 1.722 (madde × künye) çifti** |

- `taraflar` taşımayan **386** madde iner: **0**. Bu maddeler sayılıp basılır.
- `t`+`b` dedupe yüzünden eklenmeyen çift: **≤ 10**. Hedef künyede aynı başlıklı madde nadirdir; 0929'un 212 çifti aynı gün ama farklı başlıktı.
- 15 dosyada pencere dışı taraf: **0**.
- MEVCUT ÇOK/SINIR dosyalarında pencere sınavının yeni düşüreceği çift: **20 ± 20**. Bu tahmin değil, bilmiyorum: bugün ekleyicinin pencere sınavı yok, hiç ölçülmedi.
- Pencere sınavı: yapay pencere dışı taraf → inmez ve sayılır (iki yön).

### Öngörü tuttu mu
| öngörü | ölçülen | |
|---|---|---|
| 1.698 madde / 1.722 çift iner | **1.680 madde / 1.703 çift** | ✗ −18 / −19. Farkın 19'u da `t`+`b` ikizi (§2.2), adıyla |
| taraflı olmayan 386 madde: 0 iner | **0** (dosya başına basıldı) | ✓ |
| dedupe kaybı ≤ 10 | **19** | ✗ TUTMADI: ikiz sayısını küçümsedim |
| 15 dosyada pencere dışı 0 | **0** | ✓ |
| mevcut ÇOK/SINIR pencere dışı 20 ± 20 | **22 çift** | ✓ (aralıkta) |

## 1. Tasarım — neden değişken adı DEĞİŞTİRİLMEDİ (B yolu)
Görev "yalnız değişken adı" diyordu (`KRONOLOJI_X` → `KRONOLOJI_COK_X`). Ölçünce üç engel çıktı:
1. **Ad çakışması:** `window.KRONOLOJI_COK_SIRBISTAN` zaten var (`data/kronoloji_cok_sirbistan.js`, paket_30).
   `kronoloji_sirbistan.js` yeniden adlandırılsaydı, hangi dosya sonra yüklenirse öbürünü SESSİZCE ezerdi.
2. **Denetim kırılırdı:** `arac/denetle_kronoloji.py:147` adın `"KRONOLOJI_" + DOSYA ADI` olmasını şart koşuyor;
   15 yeni ihlal çıkardı (bugün zaten 83 İHLAL · çıkış 1).
3. **Paket:** site kaynak dosyayı değil `data/paket_*` kopyalarını yüklüyor; yeniden adlandırma `paketle.py yenile`
   isterdi. Paketler üretilmiş dosyalar, sahibi ben değilim.

⇒ **Yalnız `js/app.js` değişti, `data/`ya dokunulmadı:**
- `derinKronolojiBindir` künyeye eşleyemediği `KRONOLOJI_*` dosyasını artık atlamıyor; `KRONOLOJI_COK_YOLU` listesine
  koyuyor ve uyarısına "çok taraflı yola" ekliyor.
- `cokTarafliKronolojiEkle` evrenini `(SINIR|COK)` deseni ∪ bu liste olarak okuyor.
- Seçim UMIT İRTİBAT'a A/B diye soruldu; cevap gelmeden B yazıldı. A istenirse ekleyici ve pencere sınavı aynen kalır,
  değişen yalnız yönlendirme olur.

## 2. Sonuç — dosya dosya (`denetim/ARAC-KRONOLOJI-COK-1006-OLC.js <kök> <çıktı.json> [--yapay] [--fark]` · node vm, index.html'in yükleme sırası, 70 betik, app.js GERÇEK kesiti 14250-14412)
| dosya | madde | taraflı | taraflı değil (inmez, basılır) | inen madde | inen çift | öngörü | fark |
|---|---|---|---|---|---|---|---|
| CIN | 136 | 124 | 12 | 124 | 124 | 124 | 0 |
| HINDISTAN | 131 | 101 | 30 | 100 | 103 | 101 | −1 ikiz |
| JAPONYA | 71 | 62 | 9 | 61 | 61 | 62 | −1 ikiz |
| MISIR | 120 | 111 | 9 | 111 | 111 | 111 | 0 |
| OZBEK | 73 | 61 | 12 | 61 | 61 | 61 | 0 |
| ANADOLU | 281 | 253 | 28 | 246 | 246 | 253 | −7 ikiz |
| ARABISTAN | 60 | 43 | 17 | 43 | 43 | 43 | 0 |
| BALKAN | 177 | 125 | 52 | 121 | 121 | 125 | −4 ikiz |
| DOGU_AFRIKA | 218 | 190 | 28 | 190 | 190 | 190 | 0 |
| GUNEY_ASYA | 153 | 133 | 20 | 133 | 152 | 133 | 0 |
| IRAN_ARDILLARI | 155 | 108 | 47 | 108 | 108 | 108 | 0 |
| ITALYA_SEHIR | 186 | 170 | 16 | 166 | 166 | 170 | −4 ikiz |
| KUZEYAFRIKA | 83 | 65 | 18 | 65 | 65 | 65 | 0 |
| ORTA_ASYA | 205 | 136 | 69 | 136 | 137 | 136 | 0 |
| SIRBISTAN | 35 | 16 | 19 | 15 | 15 | 16 | −1 ikiz |
| **toplam** | **2.084** | **1.698** | **386** | **1.680** | **1.703** | 1.698 | **−18** |

- Önce (zincir 1006 → 1006b, bu paket yok): 15 dosyadan inen **0**.
- Toplam ÇOK ekleme 5.799 → **7.480** (+1.681). Dokunulan künye 644 → **647**.
  Sağlama: +1.681 = 1.703 inen çift − 22 artık inmeyen mevcut pencere-dışı çift ✓.

### 2.1 D265 sınavı — "adı eşleşti" ≠ "madde indi"
Ölçüm sayıdan değil, **NESNE KİMLİĞİnden**: her kaynak dizinin her maddesi, koşudan sonra `DEVLETLER[i].kronoloji`de
aynı nesne olarak arandı.

### 2.2 Farkın 19 çifti — hepsi `t`+`b` birebir ikiz (doğru davranış, ekleyicinin dedupe'u)
- **künyenin kendi maddesi, 15:**
  - CIN 1368-01-23 ming
  - HINDISTAN 1849-03-29 sih
  - JAPONYA 1889-02-11 meiji
  - ANADOLU: 1471 karaman · 1075 / 1097-06-19 / 1176-09-17 selcuklu · 1337 / 1507 dulkadir · 1375-04-14 kilikya-ermeni
  - BALKAN: 1421 / 1451 zeta · 1912-10-08 karadag · 1821-03-25 yunanistan
  - SIRBISTAN 1331 nemanjic
- **`KRONOLOJI_COK_ITALYA`, 4:** ITALYA_SEHIR → cenova · 1298-09-08 · 1379-08-16 · 1451 · 1684-05-17.

## 3. 🔴 PENCERE SINAVI (şart ②)
- **Kural:** taraf künyesinin `[f, t]` aralığı dışındaki gün o künyeye İNMEZ; sayılır ve adıyla basılır.
  `kronoGun` ile karşılaştırılır; bu işlev 1006 zincirinde tanımlı (yıl `setUTCFullYear` ile, D205 dizgi tuzağı yok).
- **Kısmî `t`:** iner ama "pencere ÖLÇÜLEMEDİ" diye ayrıca sayılır. Ölçülemedi ≠ dışarıda.
- **15 dosyada pencere dışı: 0** ✓.
- **Mevcut ÇOK/SINIR dosyalarında DAVRANIŞ DEĞİŞİKLİĞİ — 22 madde × künye çifti artık inmiyor.** Bunlar çift, madde
  değil; maddeler öbür taraflarına inmeye devam ediyor. Çoğu kuruluş/bitiş günü çelişkisi (künye günü ile olay günü
  arasında günler-yıllar var) ⇒ veri borcu, §3.5 sınıflaması ister:
  - SINIR_ASYA 7: 1396 malaka-sultanligi [1400–] · 1400 ho-hanedani [1400-03-01–] · 1450 sulu-sultanligi [1457–] ·
    1527 banten-sultanligi [1527-06-22–] · 1527 mac-hanedani [1527-06-15–] · 1530 malaka-sultanligi [–1511] ·
    1585 mataram-sultanligi [1587–]
  - COK_LEHISTAN 1807-07-07 varsova-dukaligi [1807-07-22–]
  - COK_GUNEY_AMERIKA 1811-05-18 rio-de-la-plata-valiligi [–1810-05-25]
  - COK_GURCISTAN 1919-04-13 cenub-i-garbi-kafkas [–1919-04-12]
  - COK_ONCE1281_ANADOLU 1205 naksa-dukaligi [1207–]
  - COK_ONCE1281_IRAN 1218 karahitay [–1211]
  - COK_INCE_GUNEY_ASYA 1659 / 1665-06-11 maratha [1674-06-06–]
  - COK_INCE_MISIR_ORTA_ASYA 1445-07-07 kasim [1452–]
  - COK_SENKRON_0930 7: 1410-06-15 fetret-musa [1411-02-17–] · 1774-07-26 kabartay [–1774-07-21] · 1552-10-15 kazan
    [–1552-10-02] · 1479-01-19 ispanya [1479-01-20–] · 1806-11-28 varsova-dukaligi · 1720-08-08 savoya [–1720-08-02] ·
    1861-02-13 italya [1861-03-17–]
- **Sentetik sınav** (`denetim/ARAC-KRONOLOJI-COK-1006-SINAV.js <app.js>` — çıkış 0/1, app.js GERÇEK kesiti, yapay künye/dosya): **15/15 sonra · 6/15 önce**
  (iki yön). Sınanan durumlar:
  - f günü iner · t günü iner · f−1 inmez · t+1 inmez
  - kısmî gün iner ve ölçülemedi sayılır · tarafsız inmez ve sayılır
  - 750 yılı `bb`ye iner, `aa`ya inmez (D205)
  - `t`+`b` ikiz eklenmez
  - MEVCUT `KRONOLOJI_COK_*` pencere dışı inmez
  - künyeli tek dosya ÇOK yoluna gitmez
  - dört konsol satırı basılır
- **Gerçek veride yapay sınav** (`--yapay`): `KRONOLOJI_CIN` 1402-07-13 maddesine pencere dışı `kamakura` eklendi
  → `kamakura`ya İNMEDİ, `ming-hanedani`ne indi; pencere dışı sayacı 22 → **23**.

## 4. Sıra — KRONO-EZILDI zinciri (şart ⑤)
`origin/main d0877829` + `KRONO-EZILDI-1006.diff` ✓ → `KRONO-EZILDI-1006b.diff` ✓ → **`KRONOLOJI-COK-1006.diff`** ✓.
- Çıktı, bu ağaçtaki dosyayla **birebir** (`cmp`).
- Zincirsiz main üstüne `--check` **REDDEDER**. Bu bilinçli: pencere sınavı 1006'nın `kronoGun`unu kullanıyor.
- `ARAC-KRONO-BAGLAMA-0929-KAPI.py`: EZİLEN bölümü önce = sonra (25 künye / 156). "EŞLENMEYEN" satırı 15 → 8 dosya.
  Aracın sezgisi dosyanın İLK maddesine bakıyor; kalan 8 dosyanın ilk maddesi taraflı değil. Araç tek-künye yolunu
  ölçüyor, bu yönlendirmeyi modellemiyor ⇒ güncellenmesi gerekir. Aracın sahibi ben değilim, DOKUNULMADI.
- `node --check` ✓ · diff 85 satır, LF, CR 0.

## 5. Aile künyesi olmayan 25 madde — §3.5 sınıfı (künye YAZILMADI; karar Emre'de)
Sınıflar: ① devlet öldü · ② aynı polity sürüyor (künyeyi genişlet) · ③ ardıl yapı geçti (ardıl künye). İki sınıf daha
gerekti:
- **④ öncül yapı** — ③'ün tersi;
- **— kültür/olay** — polity sorusu değil.

| dosya | t | madde | sınıf | aday künye (`devletler.js` TARANDI) |
|---|---|---|---|---|
| ORTA_ASYA | 1891-01-01 | 1891 nizamnamesi (Kazak) | ③ | rusya (1547–1917-03-15) |
| ORTA_ASYA | 1905-11-01 | 1905 Rus devrimi Kazak siyasî hayatı | ③ | rusya |
| ORTA_ASYA | 1916-07-01 | 1916 ayaklanması | ③ | rusya |
| ORTA_ASYA | 1917-04-01 | Orenburg ilk Kazak Kurultayı | ③ | rusya-gecici-hukumet |
| ORTA_ASYA | 1917-12-13 | Alaş Orda muhtariyeti | ③, künye YOK | Alaş: YOK |
| ORTA_ASYA | 1919-01-01 | Kızılordu Kazakistan'ı işgal etti | ③ | sovyet-rusya (+ Alaş YOK) |
| ORTA_ASYA | 1922-04-01 | Nogay kurultayı (Açikulak) | ① nogay 1783'te öldü → ③ | sovyet-rusya |
| ORTA_ASYA | 1207-01-01 | Kırgızlar Cengiz'e itaat etti | Kırgız künyesi YOK; üst yapı | mogol-imparatorlugu (1206–1260) |
| ORTA_ASYA | 1218-01-01 | Cuci Kırgız direnişini bastırdı | aynı | mogol-imparatorlugu |
| ORTA_ASYA | 1911-01-01 | İlk Kırgızca kitaplar | — kültür / ③ | rusya |
| ORTA_ASYA | 1916-06-25 | Kırgız ayaklanması fermanı | ③ | rusya |
| ORTA_ASYA | 1884-11-18 | Çin Sinkiang vilâyetini kurdu | ③ yakub-beg 1878'de bitti | qing-hanedani (1636–1912) |
| ORTA_ASYA | 1890-01-01 | Sart Kalmuklar Isık Göl | ① cungar 1758'de öldü → ③ | rusya |
| ORTA_ASYA | 1920-11-04 | Özerk Kalmuk bölgesi | ③ | sovyet-rusya |
| ORTA_ASYA | 1314-01-01 | Ersarı Bay, Muînü'l-mürîd | — kültür; ② adayı (turkmen 1600'de başlıyor) | cagatay (1227–1370) |
| ORTA_ASYA | 1250-01-01 | Kâşgar Mesûdiye Medresesi | — kültür | cagatay |
| ORTA_ASYA | 1885-01-01 | Radloff Manas derlemesi | — kültür | rusya |
| KUZEYAFRIKA | 1911-10-16 | Derne İtalyan işgali | ③ trablusgarp-ocagi 1911-10-09'da bitti | italya (+ Osmanlı künyesi YOK) |
| KUZEYAFRIKA | 1911-10-21 | Bingazi İtalyan işgali | ③ | italya |
| KUZEYAFRIKA | 1911-12-01 | Enver Bey direniş karargâhı | ③ (Osmanlı tarafı) | Osmanlı: künye YOK |
| KUZEYAFRIKA | 1912-10-18 | Uşi Antlaşması | ③ | italya (+ Osmanlı YOK) |
| ANADOLU | 1071-08-26 | Malazgirt | ④ selcuklu 1075'te başlıyor | buyuk-selcuklu (1040–1157) |
| ANADOLU | 1063-01-01 | Artuk Bey Alparslan'ın hizmetinde | ④ | buyuk-selcuklu |
| IRAN_ARDILLARI | 1603-01-01 | I. Abbas Luristan'ı bağladı | ① lur-i-kucek 1597'de öldü → ③ | safevi (1501–1736) |
| ITALYA_SEHIR | 1859-06-11 | Son Este dükünün kaçışı | ② ferrara `t` 1859-01-01 (kaba bitiş) | künye genişletme adayı — YASAK, Emre |

Özet:
- ③ 17 (adaylı 15) · ④ 2 · ② 1 (+1 kültür adayı) · kültür 3 · Kırgız 2 üst yapıya.
- **Künyesi YOK:** Alaş · Kırgız · Osmanlı (DEVLETLER'de künye değil).

## 6. Görünür hale gelen kalite borcu (ölçüldü, kapı ETKİLENMEZ)
`odak_olc.py` dosya bazlı ölçer; data dosyaları değişmediği için ODAK kapısının sayıları değişmez.

Ama bu 15 dosyada:
- **224 madde BEYANLI→yabancı.** `kapsam_genis` + odak yok ⇒ künye sekmesinde tıklanınca kamera OSMANLI kutusuna uçar
  (`CLAUDE.md §9` "odaksızlıktan KÖTÜ"). Dağılım: balkan 80 · anadolu 70 · cin 25 · arabistan 13 · dogu_afrika 9 ·
  hindistan 9 · japonya 6 · kuzeyafrika 5 · iran_ardillari 4 · misir 2 · guney_asya 1.
- **113 madde ODAKSIZ.**
- 1 kırık atıf: dogu_afrika 1897 `Ogaden`.

Bunlar bugüne kadar görünmezdi; iniş onları ekrana çıkarıyor.

## 7. Dokunulmayanlar
- `data/*` · `arac/*` · motor tuzu (4 dosya) · 0929 UYGULA (şart ④: "zaten devlet alanı var — DUR" doğru davranış).
- Aile künyesi olmayan 25 maddeye künye yazılmadı.
- Gözlem, kapsam dışı: ekleyicinin sıralaması `String(a.t) < String(b.t)` (D205 dizgi tuzağı, 3 haneli yılda). 1006
  zinciri bindiricide `kronoGun`le sıralıyor; ekleyicide sıralama değişmedi.

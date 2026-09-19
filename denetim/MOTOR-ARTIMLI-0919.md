# MOTOR — ARTIMLI MOTOR (M-4533 · M-4535 · M-4536 · M-4537) · 19 Eylül 2026

Oturum: MOTOR-YURUYUS (OPUS HAZIR KITA 1008) · dal `motor-hiz` (C:/atlas-hiz) · koşu 13C'ye dokunulmadı.
Emre'nin kararı: *"Bir ampul için bina yıkılmaz."* — koşu süresi doğruluktan tavizsiz kısalacak,
hiçbir koşu bir daha çöpe gitmeyecek.

## 1. Neden 24 saat? (A — profil)

| Ölçüm | Değer | Kaynak |
|---|---|---|
| Yürüyüşsüz koşu (koşu 12) | **19s08dk** — "16s49dk" başlığı bayat | kosu_zincir.log bilançosu |
| Yabancı devlet gövdeleri | 15s36dk = **%81** | aynı |
| 4 iş parçacığının gerçek paralelliği | duvar 15s35dk ≈ işlemci 15s03dk ⇒ **~1 çekirdek** (GIL) | aynı; 13C canlı 0,79 çekirdek |
| Yürüyüş + 16 yön, geometri çekirdeği | **+%25** (union +%40, intersection +%36) | kutu cProfile, işlemci sn |
| Yürüyüş, Dönemler | +%19 | aynı |
| Yürüyüş, ön aşama | +1s20dk (13B: bolgeler.js 2s48dk'da) | dosya damgaları |
| **Dünya kestirimi, 13B** | 19,1 + 1,3 + 0,5 + 3,5…5,6 + 0,4 = **25–27 saat** | ⇒ 1440 dk tavanı aşıldı |

Fonksiyon düzeyi (kutu 26-50D 34-44K, yürüyüş kapalı, sıralı yol, cProfile — `YERLER` kutuda da DÜNYANIN
tamamı, yani bu iki kalem dünyada da aynı büyüklükte):

- **%47 `devir_kumesi`** — 274.117 çağrı, her çağrıda 3808 yerleşim baştan taranıyor (önbelleksiz;
  `petek_epok(a)` gövde birleşiminde PARÇA BAŞINA çağrılıyor).
- **%30 `_dolgu_kumesi`** — 1894 gün × ~1,5 sn: her gün bos×sahip (~1400×2000) tam matriste ~50 geçiş.

🔴 **Yürüyüş açık motor ÇÖKÜYORDU** (kutu 26-50D, devlet ~100/591): `g.intersection(KARA)` saf
MultiLineString dönünce `poligonal()` süzmüyordu → `_ham_km2`. 13B zaman aşımı olmasa da orada ölecekti.
Düzeltildi (yalnız bayrak açıkken; kapalı yol bit-bit aynı).

**8 / 16 yön** (kutu, işlemci sn): Dijkstra 3,8 / 13,7 · saat matrisi 5,0 / 20,7 · geometri 1127 / 1215
(+%8) · Dönemler 1227 / 1322 (+%8). Dünyada 16'nın farkı ~1–1,5 sa seri (süreç paralelliğiyle ~20–30 dk).
Düz arazi sapması %6 → %1,9 (MOTOR-YURUYUS-0917). **8'e dönmek doğruluk tavizidir — 16 kalsın.**

## 2. Ne yapıldı

| Kalem | Ne | Bayrak |
|---|---|---|
| Canlı log | stdout+stderr ayrıca `uretim_canli.log`a satır satır; `nabiz()` 5 dk'da bir (FAZ 1 içinden, Osmanlı kırılmaları, saat matrisi) | her zaman |
| Zincir akışı | `kos_ve_yayinla`: adım çıktısı satır satır log'a (flush), zaman aşımında SÜREÇ AĞACI öldürülür | her zaman |
| `devir_kumesi` gün ezberi | sonuç yalnız güne bağlı ⇒ kesin güvenli | her zaman |
| Süreç paralelliği (E) | gövde FAZ 1 süreçlere (LPT, ETA ağırlığıyla); işçi motoru baştan koşar, ön-aşama izi tutmazsa sonucu REDDEDİLİR ve ana süreç kendisi hesaplar | `MOTOR_SUREC_ISCI=N` (zincir boş belleğe göre 1..3 seçer) |
| Önbellek katman 1 (B) | kara maskesi · göller · çöl + su koridoru tamponu · kıyı tamponu | `MOTOR_ONBELLEK_KAPALI=1` kapatır |
| Önbellek katman 2 (C) | yabancı gövde (dönem) · Osmanlı dönemi (g, gt) · serbest kenar · kuşatılmışlık kararı · çöl tavanı petek kararı · ekleyici kapı günü | aynı |
| Devam (D) | C'nin yan ürünü: her sonuç hesaplandığı AN diske (sqlite, autocommit) | aynı |
| Ekleyici kapı satır yolu | tam matris yerine satır başına yalnız puan verebilecek sütunlar (km < 400 · saat < 80) — kesin aynı sonuç | `MOTOR_DOLGU_YOL=satir` (varsayılan) · `tam` · `sina` |
| Epok onarımı penceresi | `_yr_epok_onar`: tam ızgara `isin`+genişletme yerine sıralı sahip listesi + ±2 hücre pencere | yürüyüş açıkken |
| Önbellek budama | isabette zaman damgası tazelenir; başarılı koşu sonunda 21 gündür kullanılmayan silinir | `MOTOR_ONBELLEK_BUDA_GUN` |

### Önbelleğin ilkesi — elle karar yok
Her kayıt, hesabın OKUDUĞU girdinin içeriğinden (sha256) anahtarlanır; girdi değişirse anahtar değişir,
eski kayıt hiç bulunmaz. **Tuz** = motor kodu (uret_petek · renkler · girdi · motor_onbellek) + sonucu
etkileyebilecek bütün `MOTOR_*` değişkenleri + pencere ⇒ köklü değişiklik otomatik tam yeniden inşa.
Gövde/Osmanlı anahtarı: dönemin petek parçaları (yerleşim konumu + WKB, kanonik sırada) + ÇEVRE (parçaların
kutusu R derece genişletilerek içindeki bütün yerleşimlerin konumu · kasitli_bosluk · bos · "bu devletin
mi"). R, hesabın en uzağa uzanan okumasından (B2'nin `_TUM_AGAC.nearest`'i: bant ≤250 km + kapat 0,15° +
parça-nokta uzaklığı) türetilir. Gövde hesabının yerleşimlerden okuduğu alanlar tek tek tarandı
(delikleri_doldur · _b2 · _b3 · _yasakli_mi · _bant_… · _puan_bolgesi); komşunun s:/d: sahibi OKUNMAZ ⇒
komşu sahip değiştirince bu gövde yeniden hesaplanmaz (değiştiren devletlerinki hesaplanır).
Önbellek açıkken gövde birleşimi KANONİK sırayla yapılır (frozenset sırası indekse bağlı, yerleşim
eklenince kayar) — sınavda çıktı eski sırayla da bit-bit aynı çıktı.

### Epoklar arası bağımlılık (M-4536 sorusu)
Önbelleğe alınan her hesap GÜNÜN kendi girdisinin işlevidir: `petek_epok` o günün devir kümesine,
`_dolgu_kumesi` o günün sahip/boş listesine, gövde o dönemin parçalarına bağlı. Önceki günün SONUCUNU
kullanan tek adım dönem birleştirme/delta (aynı aktif küme ⇒ dönemi uzat; Osmanlı `e`/`c` listeleri) —
o önbelleğin DIŞINDA, her koşuda yeniden yürür (ucuz). Zincir boyunca yayılması gereken bir değişiklik yok;
içerik anahtarı bağımlılığı kendiliğinden taşır.

## 3. Kabul sınavı (`denetim/ARAC-MOTOR-YURUYUS-HIZ-0918.py`)

Kutu 30-34D 37,5-40,5K, DONMUŞ worktree verisi (ilk turlar ana klasörün canlı verisiyle koşuyordu; bir
başka oturum `arac/girdi.py`yi değiştirince kod nöbetçisi koşuyu öldürdü — sınav kökü worktree'ye alındı).

| Koşu | Süre | h_devlet | h_donemler | Önbellek |
|---|---|---|---|---|
| taban (eski motor, sıralı) | 3216 sn | 23e9b3d9 | 4652e69f | — |
| yeni, önbellek kapalı | 1530 sn | 23e9b3d9 | 4652e69f | — |
| ① sıfırdan (önbellek soğuk) | 1453 sn | 23e9b3d9 | 4652e69f | gövde 3452 yaz · osm 543 · dolgu 1925 |
| ② önbellekli (sıcak) | **282 sn** | 23e9b3d9 | 4652e69f | %100 isabet |
| ③ 150. devlette SERT kesilip devam | 491 sn | 23e9b3d9 | 4652e69f | — |
| ④ paralel (2 süreç, sıcak) | 217 sn | 23e9b3d9 | 4652e69f | — |
| nokta ekle (konum 0 ⇒ bütün indeksler kayar), sıcak | 1138 sn | 2f9eb2fe | 09413116 | gövde 4147/4220 isabet · dolgu 0 isabet |
| nokta ekle, soğuk | 978 sn | 2f9eb2fe | 09413116 | — |
| sahip değiştir (Ilgın → karaman), sıcak | **262 sn** | cd4bddb9 | 4652e69f | gövde 26 · dolgu 132 ıska |
| sahip değiştir, soğuk | 969 sn | cd4bddb9 | 4652e69f | — |

Nokta eklemede dolgu günlerinin hepsi ıskaladı (yeni nokta her günün küresel listesine giriyor) —
artımlı koşunun darboğazı buydu ⇒ ekleyici kapı SATIR YOLU (4. tur sınavı aşağıda).

**4. tur** — ekleyici kapı SATIR YOLU + kuşatılmışlık + çöl + yürüyüş; kapalı koşularda
`MOTOR_DOLGU_YOL=sina` (iki yol birden, satır satır puan farkı sayılır, eski matris kullanılır):

| Kutu | Koşu | Süre | h_devlet | h_donemler | Not |
|---|---|---|---|---|---|
| Marmara 28-31,5D 39,8-41,3K (kuşatılmış: Adapazarı · Anadolu/Rumeli Hisarı · Yenişehir) | kapalı + sına | 1600 sn | 2dccdd08 | 05d68fee | **1.391.694 satır, puanı farklı 0** |
| | soğuk | 994 sn | 2dccdd08 | 05d68fee | kusat 5 · gövde 3452 · osm 544 yazım |
| | sıcak | 238 sn | 2dccdd08 | 05d68fee | %100 isabet |
| Suriye-Irak 36-46D 30-36K (çöl) | kapalı + sına | 1793 sn | ed9c11f3 | 2a63c0ac | **1.393.535 satır, farklı 0** |
| | soğuk | 880 sn | ed9c11f3 | 2a63c0ac | col 11 · kusat 2 · k1 4 |
| | sıcak | 239 sn | ed9c11f3 | 2a63c0ac | %100 isabet |
| aynı + YÜRÜYÜŞ 16 yön | kapalı + sına | 1571 sn | ba3243b7 | b67b02b6 | **1.399.235 satır (saat satırları dahil), farklı 0** |
| | soğuk | 917 sn | ba3243b7 | b67b02b6 | |
| | sıcak | **217 sn** | ba3243b7 | b67b02b6 | 7 katmanın hepsi %100 isabet |

⚠️ İlk seçilen Marmara kutusu (26-31D 39,5-41,5K) "Bölge sınırları"nda DÜŞTÜ: `poligonal(… ∩ KARA)`
saf çizgi (boğaz / kutu kenarı artığı) → `mp_koord`. Bayrak kapalı yol — eski motorda da aynı; dünya
koşularında görülmedi. Bayrak kapalı davranış bit-bit aynılık için DEĞİŞTİRİLMEDİ; kutu kaydırıldı.
Çöl kutusunda tavanın KESME dalı tetiklenmedi (0 petek kısaldı) — katman "geç" kararlarıyla sınandı.

Birim sınavı (`motor_onbellek`): yaz/oku · tuz ayrımı · parça sınırı belirsizliği · tür denetimi ·
okumada damga tazeleme + budama · 4 iş parçacığı × 200 paralel yazım · kapalı kip — TAMAM.

## 4. Beklenen süre (dünya)
(KESTİRİM — dünyada ÖLÇÜLMEDİ; kutu oranları + koşu 12 bilançosundan.)
- **Koşu 14 = soğuk** (önbelleği kurar), N=3: gövde geometrisi ~14 sa seri → ~5 sa (tek iş olarak rusya
  ~3,4 sa taban), devir/dolgu Python yükü ~2 sa → dakikalar, Dönemler ~2 sa (sıralı), ön aşama 1,5 sa ⇒
  **yürüyüşsüz ~8–9 sa · yürüyüş+16 ~10–11 sa** (24 saat tavanının yarısı).
- Sonrakiler artımlı: kutuda sıcak koşu soğuğun **1/4–1/5**'i (Anadolu 282/1453 · Marmara 238/994 ·
  Suriye 239/880 · yürüyüş 217/917 sn); sahip değişikliğinde ~1/4 (262/969). Dünyada sıcak koşuyu ön aşama
  belirler: **yürüyüşsüz ~2–2,5 sa · yürüyüş ~3–3,5 sa** (kestirim).
- Kalan sabit maliyet (her koşu): ön aşama (Voronoi, kıyı, ada, Dijkstra — yerleşime bağlı, önbelleğe
  alınmadı) + her gün devir/dolgu listeleri + anahtar hesabı.

## 5. Bulamadığım / sınırlar
- Ön aşamanın yerleşime bağlı kısımları (Voronoi · kıyı kesimi · ada · Dijkstra · yürüyüşün ızgara→poligon
  çevirisi) önbellekte DEĞİL — dünya yürüyüş açık ön aşaması ~2s48dk'nın büyük kısmı bu. Sonraki adım:
  petek başına kıyı/ada kararı (çöl tavanı gibi) ve Voronoi sonucunun nokta kümesi özetiyle saklanması.
- Numpy öğe işlevlerinin konumdan bağımsızlığı yalnız BU makinede (AVX2) ölçüldü; yeni makinede
  `MOTOR_DOLGU_YOL=sina` bir kez koşturulur.
- Önbellek dizini sqlite (`<SystemDrive>/atlas-onbellek/motor_onbellek.sqlite`); dünya boyutu ölçülmedi
  (Osmanlı dönem geometrisi kayıt başına MB'lar) — budama 21 gün.

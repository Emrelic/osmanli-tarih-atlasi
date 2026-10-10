# KASA-ODUNC-UC-1010 — ÖDÜNÇ UÇ: dilim ucu sahibinin (ya da komşunun) KÜNYE ucuna eşit, yerel tanık yok

Görev: YILDIRIM BAYEZIT (SUSAN hükmü ②: "ÖDÜNÇ UÇ. Kesin."; şartlar: üç kova · `girdi` + künye karşılıklı · UFUK uçları ayrı ·
birim UÇ · öngörü + evren önce; D273 arama işi ⇒ yanlılık KÖTÜMSER, payı bırak, öngörüyü AYARLAMA) · KASA · salt okuma.

## Evren (ölçüldü — `girdi.yukle` + `oku_devletler`, @ efa6f6fd; birim UÇ)
- Dilim: `s/d/v` (`isg` ve `__BOSLUK__` hariç). Her dilimin `f` ve `t` uçları ayrı UÇ.
  - İç sınırlar iki kez sayılır (bir dilimin t'si = sonrakinin f'si) — beyan.
- **Toplam UÇ: 32.616.**
- **UFUK ayrı (şart ③):** `f = 1281-01-01` → **2.475 UÇ** (D271 evreni) · `t = 1923-10-29` → **4.130 UÇ**.
- **Künye-eşit UÇ: 12.655.** Uç = kendi sahibinin künye `f/t`'si ya da bitişik dilimin sahibinin künye `t/f`'si.
  - **MEŞRU-aday: 976 UÇ.** Yerel metin VAR: dilim `kaynak:` künyeye atıf dışında dolu, ya da tarih kaydın
    neden/not/kaynak metninde birebir geçiyor.
  - **KANITLI-aday: 11.679 UÇ / 2.979 KAYIT.** Yerel metin YOK.
    - **ARDIL: 5.959 UÇ.** O gün bir künye bitiyor VE bir künye başlıyor — rejim ardıllığı. Örn. 1917-03-15 · 1917-11-07
      · 1920-04-23 · 1912-02-12 · 1867-07-01 · 1821-09-27.
    - **TEK-YANLI: 5.720 UÇ.** Yalnız bir künyenin ucu.
  - En sık KANITLI günler: 1917-11-07 (959) · 1917-03-15 (941) · 1920-04-23 (467) · 1413-07-05 (297) · 1411-02-17 (281) ·
    1794-01-01 (270) · 1736-03-08 (266) · 1867-07-01 (246) · 1912-02-12 (196) · 1889-11-15 (188).
- ⚠️ "Yerel metin" mekanik bir VEKİL. Tarih metinde geçse de tanığın NEYİ tarihlediği okunmadı; kayıt düzeyi
  "dönem dayanakları" bazen yalnız künyeye işaret eder. Kova kararı örneklemde VERİ + KAYNAK okunarak verilir.

## Örneklem (DONDURULDU — `random.Random(1010)`, tabaka başına karıştır, kayıt başına en çok 1 UÇ)
ARDIL 8 · TEK-YANLI 8 · UFUK-1281 8 · MEŞRU (kontrol) 6 = **30 UÇ**. (Mankup iki farklı tabakada — farklı UÇ.)
| # | kayıt | dosya | uç | dilim | sahip |
|---|---|---|---|---|---|
| ARDIL-01 | Hakata (Fukuoka) | yerlesimler_asya.js | t=1868-01-03 | 1603-03-24 → 1868-01-03 | Edo (Tokugawa) Şogunluğu |
| ARDIL-02 | Menorka (Mahon) | yerlesimler.js | t=1479-01-20 | 1281-01-01 → 1479-01-20 | Aragon Tacı |
| ARDIL-03 | Kahire | yerlesimler.js | t=1922-03-15 | 1914-12-18 → 1922-03-15 | Mısır Sultanlığı (İngiliz Himayesi) |
| ARDIL-04 | Camboyluk bozkırı | yerlesimler_ek3.js | t=1917-03-15 | 1783-04-19 → 1917-03-15 | Rusya Çarlığı / İmparatorluğu |
| ARDIL-05 | Jyväskylä | yerlesimler_ek7.js | t=1523-06-06 | 1281-01-01 → 1523-06-06 | İsveç Krallığı (Kalmar Birliği Öncesi ve Dönemi) |
| ARDIL-06 | Lille | yerlesimler_avrupa.js | f=1482-03-27 | 1482-03-27 → 1516-01-23 | Kutsal Roma / Almanya |
| ARDIL-07 | Utrecht | yerlesimler_avrupa.js | f=1581-07-26 | 1581-07-26 → 1923-10-29 | Hollanda (Birleşik Eyaletler Cumhuriyeti → 1815 Krallık) |
| ARDIL-08 | Mankup | yerlesimler_ek2.js | t=1917-03-15 | 1783-04-19 → 1917-03-15 | Rusya Çarlığı / İmparatorluğu |
| TEK-01 | Keşan | yerlesimler.js | t=1920-04-23 | 1413-07-05 → 1920-04-23 | Osmanlı (doğrudan) |
| TEK-02 | Listuguj (Restigouche) | yerlesimler_kamerika.js | t=1763-02-10 | 1761-01-01 → 1763-02-10 | Fransa Krallığı |
| TEK-03 | Quito | yerlesimler_amerika.js | t=1830-05-13 | 1822-05-24 → 1830-05-13 | Büyük Kolombiya (Gran Colombia) |
| TEK-04 | Bodrum | yerlesimler.js | f=1920-04-23 | 1920-04-23 → 1923-10-29 | Türkiye Büyük Millet Meclisi Hükûmeti |
| TEK-05 | Ben Tre | yerlesimler_gdasya.js | t=1859-02-17 | 1802-06-01 → 1859-02-17 | Nguyễn Hanedanı (Vietnam) |
| TEK-06 | Loango (Buali) | yerlesimler_emilme.js | f=1883-01-01 | 1883-01-01 → 1923-10-29 | Fransa (1792 Sonrası — Cumhuriyet/İmparatorluk/Restorasyon) |
| TEK-07 | Dârâb | yerlesimler.js | t=1794-01-01 | 1747-06-20 → 1794-01-01 | Zend Hanedanı (İran) |
| TEK-08 | Lac la Ronge | yerlesimler_kamerika.js | t=1867-07-01 | 1782-01-01 → 1867-07-01 | İngiliz Kuzey Amerika (Kanada) |
| U1281-01 | Amasya | yerlesimler.js | f=1281-01-01 | 1281-01-01 → 1335-01-01 | İlhanlı Devleti |
| U1281-02 | Mankup | yerlesimler_ek2.js | f=1281-01-01 | 1281-01-01 → 1349-01-01 | Bizans (Doğu Roma) İmparatorluğu |
| U1281-03 | Ponorogo | yerlesimler_gdasya.js | f=1281-01-01 | 1281-01-01 → 1292-01-01 | Singhasari Krallığı (Cava) |
| U1281-04 | Şamahı | yerlesimler.js | f=1281-01-01 | 1281-01-01 → 1335-12-01 | İlhanlı Devleti |
| U1281-05 | Ayn Temûşent | yerlesimler_afrika.js | f=1281-01-01 | 1281-01-01 → 1552-01-01 | Zeyyânîler (Tilimsan) |
| U1281-06 | Mînâb | yerlesimler.js | f=1281-01-01 | 1281-01-01 → 1335-12-01 | İlhanlı Devleti |
| U1281-07 | Linz | yerlesimler_a78_avrupa.js | f=1281-01-01 | 1281-01-01 → 1526-08-29 | Kutsal Roma / Almanya |
| U1281-08 | Akçakale | yerlesimler_ek25.js | f=1281-01-01 | 1281-01-01 → 1516-08-24 | Memlûk Sultanlığı (Mısır-Suriye) |
| MESRU-01 | Hît | yerlesimler.js | t=1340-01-01 | 1281-01-01 → 1340-01-01 | İlhanlı Devleti |
| MESRU-02 | Tromsø | yerlesimler_ek8.js | t=1905-06-07 | 1814-01-14 → 1905-06-07 | İsveç Krallığı |
| MESRU-03 | Lüleburgaz | yerlesimler.js | t=1402-07-28 | 1360-01-01 → 1402-07-28 | Osmanlı (doğrudan) |
| MESRU-04 | Bayburt | yerlesimler_anadolu_0914.js | f=1917-11-07 | 1917-11-07 → 1918-02-19 | Transkafkasya (Komiserlik → Seym → Demokratik Federatif Cumhuriyet) |
| MESRU-05 | Zaporojye Seçi | yerlesimler_ek4.js | t=1552-01-01 | 1502-03-01 → 1552-01-01 | Kırım Hanlığı |
| MESRU-06 | Örebro | yerlesimler_avrupa.js | f=1523-06-06 | 1523-06-06 → 1923-10-29 | İsveç Krallığı |

## Yargı ölçütü (DONDURULDU)
Doğrulayıcı (kör, tabakayı bilmez) yerin O UÇTAKİ yerel olay gününü kaynakla bulur.
- **DOĞRU:** yerel olay günü ucu payı içinde destekliyor (gün uç ±30 gün; `-01-01` uç = yıl). 1281 uçlarında: 1281'de yeri o
  sahibin tuttuğu kaynakla destekli.
- **YANLIŞ:** yerel olay günü paydan fazla farklı (ödünç gerçekten yanlış). 1281'de: başka sahip.
- **TESADÜF:** uç künye ucuna eşit, ama yerel kaynak o günü BAŞKA bir olay için veriyor (sahte zincir). Ya da uç doğru
  ama sebebi ödünç değil.
- **ÖLÇÜLEMEDİ:** kabul edilir tanık yok.
- Yargı kuralları R1-R3 (KASA-SUSAN §1.1) geçerli.

## 0. ÖNGÖRÜ (doğrulamadan ÖNCE — ayrı commit; D273: arama işi ⇒ kötümser yanlılık beklenir, ayarlanmadı)
- **ARDIL YANLIŞ 3 ± 2 / 8.** Rejim ardıllığı çoğunlukla ülke çapında gerçek; ama 1917 Sovyet iktidarı gibi illere
  aylar içinde yayılanlar yanlış.
- **TEK-YANLI YANLIŞ 4 ± 2 / 8** — ödüncün asıl yeri: fetih/çöküş günü yerelde farklı.
- **UFUK-1281 YANLIŞ 3 ± 2 / 8** (D271'in %39'u ≈ 3/8).
- **MEŞRU (kontrol) YANLIŞ 1 ± 1 / 6.**
- **TESADÜF toplamda 2 ± 2.** ÖLÇÜLEMEDİ her tabakada **2 ± 1**.
- **Ayırma testi:** (ARDIL + TEK) YANLIŞ oranı ≥ MEŞRU oranı + %25 ⇒ "yerel metin yokluğu bir sinyal" — **%55**.
  Ayırt edilemez — **%45** (SUSAN dersi: kontrol farkı silebilir).

## 1. ÖLÇÜM (30 UÇ, kör doğrulama; okuyucular `scratchpad/odunc_sonuc1..3.md`, alıntı + URL)
Yargı kuralları: R1-R3 (KASA-SUSAN §1.1) + önceden ilan edilmiş **KONV** = projenin bilinçli modelleme kararı, yerel hata
sayılmaz. KONV olanlar:
- TBMM 1920-04-23 (M-3066);
- Fetret şehzade künyeleri;
- 1479 Aragon → İspanya ardıllığı.

İşgal (`isg`) sahibi değiştirmez: Bodrum'un İtalyan işgali 1919-21 bir örtü.

| # | kayıt · uç | yargı | yerel olay / tanık (okuyucu) |
|---|---|---|---|
| ARDIL-01 | Hakata · t 1868-01-03 | DOĞRU | Kotobank: Fukuoka hanı Restorasyon'a girdi; yerel gün yok, ulusal ferman |
| ARDIL-02 | Menorka · t 1479-01-20 | KONV | aragon → ispanya ardıllığı. **YAN:** f 1281 YANLIŞ olabilir — 1287'ye dek Müslüman vasal (Gran Enciclopèdia Catalana) |
| ARDIL-03 | Kahire · t 1922-03-15 | DOĞRU | TDV Fuâd (yıl) + 28 Şubat / 15 Mart 1922 |
| ARDIL-04 | Camboyluk · t 1917-03-15 | DOĞRU | imparatorluk çapı, yerel gün yok |
| ARDIL-05 | Jyväskylä · t 1523-06-06 | ÖLÇÜLEMEDİ | Danimarka garnizonları 1523 yaz-sonbahar (gün yok); 06-06 Vasa'nın seçimi |
| ARDIL-06 | Lille · f 1482-03-27 | **TESADÜF** | 1482-03-27 Burgonyalı Mary'nin ölümü (hanedan mirası); yerel Habsburg yetkisi 1477 (lilletourism); Fransız metbûluğu ayrıca |
| ARDIL-07 | Utrecht · f 1581-07-26 | DOĞRU | Abjuration Akti, Utrecht adıyla (DBNL) |
| ARDIL-08 | Mankup · t 1917-03-15 | DOĞRU | IEU "Crimea" |
| TEK-01 | Keşan · t 1920-04-23 | KONV | yerel: Yunan işgali 1920-07-30 (= `isg`, sahip değil) |
| TEK-02 | Listuguj · t 1763-02-10 | **YANLIŞ** | Parks Canada Occ. Paper 16: Restigouche'daki Fransız birlikleri **1760-10-29** teslim — t ~2,3 yıl geç (Paris Antlaşması ödünç) |
| TEK-03 | Quito · t 1830-05-13 | DOĞRU | Quito ayrılık akti |
| TEK-04 | Bodrum · f 1920-04-23 | KONV | yerel: İtalyan işgali 1919-05-11 → 1921-07-05 (`isg`) |
| TEK-05 | Ben Tre · t 1859-02-17 | **YANLIŞ** ⑥ | VNU-HCM 2021: batı üç eyalet (Vĩnh Long dahil) **1867** — 1859-02-17 Saygon kalesinin günü (BAŞKA YER) |
| TEK-06 | Loango · f 1883 | DOĞRU | CNRS/ICAR: 1883 himaye antlaşması |
| TEK-07 | Dârâb · t 1794 | ÖLÇÜLEMEDİ | Iranica: Fars Kaçar'a 1791-92 (Şiraz 21.07.1792) — eyalet düzeyi, YANLIŞ'a eğilimli |
| TEK-08 | Lac la Ronge · t 1867-07-01 | **YANLIŞ** | Canadian Encyclopedia: Rupert's Land **1870** — Fort Confidence (SUSAN S1-12) ile AYNI |
| U1281-01 | Amasya | DOĞRU | TDV Amasya: 1243 sonrası Moğol valileri |
| U1281-02 | Mankup · bizans | **YANLIŞ** ⑥ | Kuzenkov & Mogarichev 2024 (özet): 13. yy 2. yarısı GB Kırım yerel Ortodoks elitler, Altın Orda düzeninde — Bizans değil |
| U1281-03 | Ponorogo | ÖLÇÜLEMEDİ | — |
| U1281-04 | Şamahı · ilhanli | DOĞRU (R2) | TDV: İlhanlı'ya bağlı Şirvanşahlar |
| U1281-05 | Ayn Temûşent · zeyyani | DOĞRU (bölge) | TDV Abdülvâdîler (Yağmurasan 1235-83) |
| U1281-06 | Mînâb · ilhanli | DOĞRU (R2, üst metbû) | Iranica + TDV Kirman: Hürmüz → Kirman → İlhanlı |
| U1281-07 | Linz · almanya | DOĞRU | Linz şehir arşivi: ~1280 Habsburg yetkilileri |
| U1281-08 | Akçakale · memluk | **YANLIŞ** ⑥ | Iranica "Harran": 1281'de İlhanlı tarafında boşaltılmış sınır; Memlük Harran'ı 14. yy başı. TDV Harran muğlak |
| MESRU-01 | Hît | ÖLÇÜLEMEDİ | — |
| MESRU-02 | Tromsø · t 1905-06-07 | DOĞRU ⑥ | SNL: Storting 7.6.1905 (kişisel birlik) |
| MESRU-03 | Lüleburgaz · t 1402-07-28 | KONV | Fetret künyesi (Süleyman Çelebi) |
| MESRU-04 | Bayburt · f 1917-11-07 | ÖLÇÜLEMEDİ | (TESADÜF'e eğilimli: Ekim Devrimi günü) |
| MESRU-05 | Zaporojye Seçi · t 1552 | DOĞRU ⑥ | IEU: ilk Sech "ca 1552" |
| MESRU-06 | Örebro · f 1523-06-06 | **YANLIŞ** | Länsstyrelsen Örebro: kale **Ocak 1522**'de Vasa'ya düştü — 06-06-1523 seçim günü ödünç (~17 ay) |

### 1.1 Sayım (birim UÇ; YANLIŞ / ölçülen)
```
ARDIL      0 / 7   (+1 TESADÜF, +1 KONV)        ⇒ rejim ardıllığı UÇLARI SAĞLAM
TEK-YANLI  3 / 7   (+2 KONV)  = %43             ⇒ ödüncün ASIL yeri
U1281      2 / 7   (ikisi de ⑥) = %29            ⇒ D271 %39 ile uyumlu (n küçük)
MEŞRU      1 / 4   (+1 KONV)                     ⇒ "yerel metin" vekili ayırmıyor
```
- 🔴 **Ayırıcı "yerel metin var/yok" DEĞİL, "ARDIL / TEK-YANLI".** Rejim ardıllığı günü (künye→künye) ülke çapında gerçekten
  geçerli; tek yanlı künye ucu (bir devletin çöküşü/kuruluşu, bir antlaşma) yerelde başka gün. KONV'lar yanlış sayılsa
  bile ARDIL 1/7 kalır.
- **D271'in asılı sebebi (kısmen ölçüldü):** 1281 uçlarındaki iki yanlış ödünç GÜN değil ödünç **SAHİP**. Bölgenin geniş
  künyesi (Bizans, Memlûk) yerel tutucu (Mankup'ta Altın Orda düzeninde yerel elit · Harran sınırında İlhanlı) yerine
  yazılmış. ⇒ Mekanizma Tengyue/Parras ile AYNI aile (yerel yerine "üst düzey" değer), ama eksen SAHİP. n = 7, ikisi ⑥ ⇒
  **hipotez güçlendi, kanıtlanmadı.**

### 1.2 🔴 SINIF: Rupert's Land / BC — `1867-07-01` (ölçüldü, mekanik)
- İki tanık:
  - SUSAN S1-12 Fort Confidence: Canadian Encyclopedia, Rupert's Land/NWT → Kanada **15 Temmuz 1870**;
  - ODUNC TEK-08 Lac la Ronge: aynı.
- `girdi` ölçümü: `1867-07-01`'de biten dilim **126** (hepsi `ingiliz-kuzey-amerika` → `kanada`).
  - **lon < −95 (Rupert's Land / NWT / Britanya Kolumbiyası adayı): 66.** Örn. Fort McPherson · Fort Good Hope · Déline ·
    Fort Norman · Fort Rae.
  - **−95…−60 ve lat ≥ 50,5 (Hudson havzası adayı): 20.** Örn. Prince of Wales Fort · York Factory · Kuujjuaq · Hebron
    (Labrador — Newfoundland'a ait, Kanada'ya 1949!).
  - Geri kalan 40: 1867 eyaletleri (Ontario/Quebec/NS/NB) olabilir.
- ⇒ **~86 dilimin ucu 3-4 yıl ERKEN** (Rupert's Land/NWT 1870-07-15; BC 1871-07-20; Labrador/Newfoundland 1949 —
  pencere dışı, 1923'e dek Kanada DEĞİL).
- Coğrafi ayrım kaba (boylam/enlem eşiği). Kesin liste her noktanın 1867 eyalet sınırına göre okunmalı. Hüküm + yazım
  senin (künye/veri dosyaları).

## 2. Öngörü ↔ ölçüm (D273: arama işi, kötümser beklenmişti)
```
ARDIL YANLIŞ 3 ± 2 / 8      ✗ 0 — kötümser çıktı (D273 yönünde)
TEK YANLIŞ 4 ± 2 / 8        ✓ 3
U1281 YANLIŞ 3 ± 2 / 8      ✓ 2
MEŞRU YANLIŞ 1 ± 1 / 6      ✓ 1
TESADÜF 2 ± 2               ✓ 1
ÖLÇÜLEMEDİ 2 ± 1 her biri   ✓ (1 · 1 · 1 · 2)
"yerel metin yokluğu sinyal" %55   ✗ ayırt edilemedi (%21 ↔ %25); asıl ayırıcı ARDIL/TEK (%0 ↔ %43)
```

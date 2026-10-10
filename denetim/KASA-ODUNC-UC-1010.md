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

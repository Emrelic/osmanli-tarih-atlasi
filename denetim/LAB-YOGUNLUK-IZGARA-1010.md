# LAB — NOKTA YOĞUNLUĞU IZGARASI (KAMPANYA SÜMER-2000 §7) — 10 Ekim 2026

> **EŞİĞİN DAYANAĞI:** Anadolu/Balkan p95 en-yakın-nokta uzaklığı **63–70 km, 642 yıl boyunca (1281–1923) sabit**.
> Önerilen AÇ eşiği (p95 ≤150 km) bunun ~2 katı; SINIR eşiği (p95 ≤300 km) haritanın bugünkü emilme rejimi (p95 227–280 km).
> **KOORDİNATÖR HÜKMÜ (10 Ekim):** eşik KABUL — AÇ p95≤150 VE azamî≤300 · SINIR p95≤300 · KAPALI üstü.
> MIMARI §5: p95 **KAPI**, azamî **UYARI** olarak ikisi de tutulur. "yoğun = azamî 60 km" bayat; ölçülen değer koordinatörce yazılacak.
> S1/S2: **S2 hedef**; bu gece S1 BEYANA çevrilir ("kur: yok ⇒ UFUK[0]'tan beri var" açık yazılır, 2.823 LİSTE olarak tavan ailesine,
> MÖ ufku kur: sayımı yapılmadan açılmaz). Devamı: `LAB-KUR-SAYIM-1010`.
>
> **Ölçüm, hüküm değil.** §5'teki eşik bir **ÖNERİ**dir; kararı koordinatör verir.
> Ağaç: `origin/main` **f2e9548c** (`f2e9548cf865ec4349dbee724f870e7c6c7e41de`). §0① sağlandı: ölçüm ayrı detached worktree'de yapıldı
> (`C:\atlas-izgara-olcum`, iş bitince silindi). Veriye dokunulmadı, tavan yazılmadı, `kaynak_durum.py ac` koşulmadı.
> Çözülmüş harita: `py arac/kodla.py coz-c data data/devletler_harita.js` (gitignore'lu, worktree ile birlikte silindi)
> · `data/devlet_harita_ust.js` 3.148.869 B, sha256 `925b2483dd8c8357879481e44cdfaed5123db849cbc35ba9b64b10405b865faa`
> · `data/devletler_harita.js` 181.080.905 B, sha256 `82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c`
> CSV'ler: `LAB-YOGUNLUK-IZGARA-1010-{makro,5x5,emilme-makro,emilme-5x5,poligon,mo-gereksinim}.csv` · araçlar: repo dışında, LAB'de `C:\lab-araclar\izgara\`
> (araçlar yalnız okur; yol `C:\atlas-izgara-olcum`'a sabit — yeniden üretmek için worktree yeniden kurulur).

## §0 ÖNGÖRÜ (ölçümden ÖNCE yazıldı) → SONUÇ
| # | öngörü | sonuç |
|---|---|---|
| 1 | MÖ ve MS 0–1199 satırları tamamen 0 | **TUTTU** — 47 yüzyıl × 22 bölge = 0 boyayan nokta. En eski dönem ucu 1220 |
| 2 | ≤5 kovası Okyanusya, Sahra-altı, Amerika, Japonya'nın 1300–1500'ünde | **KISMEN** — makro düzeyde yalnız **Okyanusya** (1 nokta); Japonya 18–23, Amerika-G 12–14 (≤5'in üstü). 5°×5° düzeyinde tuttu (AmK/Rus/AmG/SAf baskın) |
| 3 | En yakın noktaya azami uzaklık Anadolu/Balkan < 100 km; Sahra/Sibirya/Avustralya > 1000 km | **KISMEN** — Anadolu 107, Balkan 122 (**100'ü aştı**); Okyanusya 4.296, Amerika-G 3.550, Rusya 2.330 (tuttu) |
| 4 | MIMARI.md §5 (60/120/300 km) Anadolu/Balkan'da tutar | **TUTMADI** — "yoğun = azami 60 km" ölçütünü **Anadolu bile geçemiyor** (azami 107, p95 70). Bkz. §5 |

## §1 YÖNTEM
- **Nokta kümesi:** `arac/girdi.py::yukle()` — motorun okuduğu dosyalar, **4.300 kayıt** (ad çakışması 0).
- **Var mı (motor anlamı):** `uret_petek.py:4927` ile aynı: `not (kur > g or bit <= g)`.
- **Sahip / boyayan:** VERI-YAPISI §d/v sırası **v → d → s**; `s:` içinde `d:"__BOSLUK__"` (101 dönem) boyamaz. Boyayan = var ∧ sahipli ∧ boşluk değil.
- **Tarih:** astronomik yıl, **sayısal** karşılaştırma (yıl×10⁴+ay×100+gün) — dizgi sıralaması kullanılmadı (§1③). Satır etiketleri `[c·100, c·100+99]` astronomik,
  MÖ karşılığı parantezde (ör. `-3500..-3401` = MÖ 3501–3402).
- **Yüzyıl anlık günü:** `c·100+50-06-15`; pencere kırpık iki yüzyılda **1290-06-15** ve **1911-06-15**. Ayrıca "yüzyılın herhangi bir anında boyayan" sayımı.
- **Kara:** `veri-kaynak/motor_kara.geojson` (motorun çizdiği kara; 60°G–85°K) — 0,25° ızgara, **174.013 örnek, 103,8 M km²**.
  ⚠️ NE `ne_10m_land` aynı ızgarada 134,5 M km² verir; fark ağırlıkla 60°K üstünde. Ölçüm motorun karası üzerinden.
- **Bölgeler:** (a) sabit **5°×5°** hücreler; (b) 22 makro bölge — NE `admin_0_countries` `ADM0_A3` eşlemesi (`izgara.py::MAKRO`), denizdeki nokta en yakın ülkeye.
  Türkiye Boğaz ve Çanakkale çizgisiyle Trakya→Balkanlar / geri kalan→Anadolu. Kıbrıs→Levant; Afganistan+Moğolistan→Orta Asya;
  İskandinavya+İtalya+İsviçre→Avrupa-Batı; Kore→Çin. Bunlar **tanım**dır, tarih değil; değişirse CSV yeniden üretilir.
- **Emilme modeli (ızgara):** petek = en yakın **var** olan nokta (Voronoi, büyük-daire). Örnek boyalı ⇔ en yakın var noktası boyayan.
  Üç uzaklık: `yakin_var` (bugünkü motor siteleri), `boyali_uzak` (boyalı örnekten kendi noktasına), **`yalniz_boyayan`** (yalnız boyayan noktalar site olsaydı — **MÖ senaryosu**).
- **Emilme modeli (harita):** çözülmüş `DEVLET_HARITA` (585 devlet, 86.429 parça) — 8 örnek günde aktif her parça poligonu için alan (sinüzoidal eşit alan),
  içindeki aynı devlete ait nokta (0,05° tampon), poligondaki ızgara örneklerinden en yakın herhangi / aynı-devlet noktasına azami uzaklık. **31.868 poligon-gün.**
  ⚠️ Osmanlı gövdeleri bu dosyada değil (`PARCALAR`); Osmanlı yalnız ızgara modeliyle ölçüldü.

## §2 IZGARA — makro bölge × yüzyıl → boyayan nokta (anlık gün)
Kısaltmalar §2 sonunda. MÖ satırları **0** — gösterildi. Tam veri: `-makro.csv` (ayrıca `var_motor`, yoğunluk/10⁵ km², kara km²) ve `-5x5.csv`.

| yüzyıl (astronomik) | anlık gün | Ana | Bal | Kaf | Mez | Lev | Mıs | İrn | OAs | Arb | KAf | AvB | AvO | AvD | Rus | Hnd | Çin | Jap | GDA | SAf | AmK | AmG | Oky | Σ |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| -3500..-3401 (MÖ 3501–3402) | -3450-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -3400..-3301 (MÖ 3401–3302) | -3350-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -3300..-3201 (MÖ 3301–3202) | -3250-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -3200..-3101 (MÖ 3201–3102) | -3150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -3100..-3001 (MÖ 3101–3002) | -3050-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -3000..-2901 (MÖ 3001–2902) | -2950-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2900..-2801 (MÖ 2901–2802) | -2850-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2800..-2701 (MÖ 2801–2702) | -2750-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2700..-2601 (MÖ 2701–2602) | -2650-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2600..-2501 (MÖ 2601–2502) | -2550-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2500..-2401 (MÖ 2501–2402) | -2450-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2400..-2301 (MÖ 2401–2302) | -2350-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2300..-2201 (MÖ 2301–2202) | -2250-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2200..-2101 (MÖ 2201–2102) | -2150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2100..-2001 (MÖ 2101–2002) | -2050-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -2000..-1901 (MÖ 2001–1902) | -1950-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1900..-1801 (MÖ 1901–1802) | -1850-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1800..-1701 (MÖ 1801–1702) | -1750-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1700..-1601 (MÖ 1701–1602) | -1650-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1600..-1501 (MÖ 1601–1502) | -1550-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1500..-1401 (MÖ 1501–1402) | -1450-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1400..-1301 (MÖ 1401–1302) | -1350-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1300..-1201 (MÖ 1301–1202) | -1250-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1200..-1101 (MÖ 1201–1102) | -1150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1100..-1001 (MÖ 1101–1002) | -1050-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -1000..-901 (MÖ 1001–902) | -950-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -900..-801 (MÖ 901–802) | -850-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -800..-701 (MÖ 801–702) | -750-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -700..-601 (MÖ 701–602) | -650-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -600..-501 (MÖ 601–502) | -550-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -500..-401 (MÖ 501–402) | -450-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -400..-301 (MÖ 401–302) | -350-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -300..-201 (MÖ 301–202) | -250-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -200..-101 (MÖ 201–102) | -150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| -100..-1 (MÖ 101–2) | -50-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 0..99 | 50-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 100..199 | 150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 200..299 | 250-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 300..399 | 350-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 400..499 | 450-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 500..599 | 550-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 600..699 | 650-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 700..799 | 750-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 800..899 | 850-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 900..999 | 950-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1000..1099 | 1050-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1100..1199 | 1150-06-15 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 1200..1299 | 1290-06-15 (pencere kırpık) | 224 | 289 | 33 | 35 | 36 | 55 | 98 | 73 | 52 | 152 | 311 | 103 | 52 | 135 | 95 | 119 | 18 | 172 | 277 | 133 | 12 | 1 | 2475 |
| 1300..1399 | 1350-06-15 | 225 | 289 | 33 | 35 | 36 | 55 | 99 | 73 | 52 | 152 | 311 | 103 | 52 | 136 | 97 | 120 | 18 | 177 | 283 | 136 | 12 | 1 | 2495 |
| 1400..1499 | 1450-06-15 | 227 | 294 | 33 | 35 | 36 | 55 | 98 | 71 | 53 | 152 | 316 | 103 | 53 | 135 | 101 | 125 | 19 | 194 | 299 | 142 | 14 | 1 | 2556 |
| 1500..1599 | 1550-06-15 | 230 | 299 | 33 | 35 | 36 | 55 | 101 | 71 | 53 | 154 | 318 | 103 | 54 | 137 | 108 | 125 | 23 | 202 | 324 | 169 | 42 | 1 | 2673 |
| 1600..1699 | 1650-06-15 | 230 | 300 | 33 | 35 | 36 | 55 | 104 | 77 | 54 | 162 | 320 | 104 | 58 | 208 | 114 | 127 | 33 | 206 | 369 | 204 | 86 | 1 | 2916 |
| 1700..1799 | 1750-06-15 | 231 | 300 | 33 | 36 | 36 | 55 | 105 | 77 | 59 | 162 | 320 | 104 | 63 | 272 | 129 | 137 | 33 | 210 | 435 | 274 | 141 | 3 | 3215 |
| 1800..1899 | 1850-06-15 | 231 | 300 | 34 | 36 | 36 | 55 | 108 | 77 | 67 | 163 | 320 | 104 | 65 | 282 | 130 | 142 | 33 | 208 | 498 | 432 | 205 | 36 | 3562 |
| 1900..1999 | 1911-06-15 (pencere kırpık) | 232 | 300 | 34 | 38 | 36 | 57 | 108 | 91 | 71 | 166 | 320 | 104 | 65 | 303 | 132 | 144 | 34 | 230 | 679 | 493 | 316 | 144 | 4097 |

**Yüzyılın herhangi bir anında boyayan** (pencere içi yüzyıllar; 0–1199 ve MÖ hepsi 0):

| yüzyıl | Ana | Bal | Kaf | Mez | Lev | Mıs | İrn | OAs | Arb | KAf | AvB | AvO | AvD | Rus | Hnd | Çin | Jap | GDA | SAf | AmK | AmG | Oky | Σ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1200..1299 | 224 | 289 | 33 | 35 | 36 | 55 | 98 | 73 | 52 | 152 | 311 | 103 | 52 | 135 | 95 | 119 | 18 | 174 | 277 | 133 | 12 | 1 | 2477 |
| 1300..1399 | 226 | 292 | 33 | 35 | 36 | 55 | 99 | 73 | 52 | 152 | 316 | 103 | 53 | 137 | 100 | 122 | 19 | 189 | 288 | 137 | 12 | 1 | 2530 |
| 1400..1499 | 229 | 298 | 33 | 35 | 36 | 55 | 98 | 71 | 53 | 154 | 316 | 103 | 55 | 140 | 105 | 125 | 20 | 199 | 305 | 145 | 18 | 1 | 2594 |
| 1500..1599 | 230 | 300 | 33 | 35 | 36 | 55 | 101 | 72 | 54 | 162 | 318 | 104 | 56 | 159 | 114 | 126 | 27 | 203 | 328 | 185 | 71 | 1 | 2770 |
| 1600..1699 | 231 | 300 | 33 | 35 | 36 | 55 | 104 | 78 | 54 | 162 | 320 | 104 | 62 | 244 | 117 | 132 | 33 | 207 | 392 | 237 | 108 | 3 | 3047 |
| 1700..1799 | 231 | 300 | 34 | 36 | 36 | 55 | 105 | 77 | 64 | 163 | 320 | 104 | 64 | 279 | 131 | 140 | 33 | 214 | 442 | 336 | 178 | 4 | 3346 |
| 1800..1899 | 232 | 300 | 34 | 38 | 36 | 57 | 108 | 91 | 71 | 165 | 320 | 104 | 65 | 303 | 132 | 144 | 34 | 229 | 628 | 489 | 296 | 130 | 4006 |
| 1900..1999 | 232 | 300 | 34 | 38 | 36 | 57 | 108 | 91 | 71 | 168 | 320 | 104 | 65 | 303 | 132 | 144 | 34 | 230 | 682 | 499 | 331 | 145 | 4124 |

🔴 **MÖ'de "var" sayısı 0 DEĞİL, 2.823.** `kur:`/`bit:` taşımayan 2.823 nokta motor anlamında MÖ 3450'de de **VAR** sayılır
(1290'da 2.824 — fark 1 nokta). Yani MÖ'de motor bu 2.823 noktayı **petek sitesi** olarak kullanır, hiçbiri sahipli değildir.
§6'daki S1/S2 ayrımının kaynağı budur.

Kısaltmalar ve makro bölge kara alanları (motor_kara):

| bölge | kara km² (motor_kara) |
|---|---:|
| Anadolu (Ana) | 749,317 |
| Balkanlar (Bal) | 802,443 |
| Kafkasya (Kaf) | 184,852 |
| Mezopotamya/Irak (Mez) | 439,874 |
| Levant/Suriye (Lev) | 318,722 |
| Mısır (Mıs) | 991,971 |
| İran (İrn) | 1,541,799 |
| Orta Asya (OAs) | 4,331,249 |
| Arabistan (Arb) | 2,081,513 |
| Kuzey Afrika (KAf) | 4,155,603 |
| Avrupa-Batı (AvB) | 3,033,678 |
| Avrupa-Orta (AvO) | 987,748 |
| Avrupa-Doğu (AvD) | 935,152 |
| Rusya (Rus) | 9,332,572 |
| Hindistan (Hnd) | 3,463,170 |
| Çin (+Kore) (Çin) | 5,299,496 |
| Japonya (Jap) | 320,746 |
| Güneydoğu Asya (GDA) | 3,705,091 |
| Sahra-altı Afrika (SAf) | 22,181,606 |
| Amerika-Kuzey (AmK) | 16,597,931 |
| Amerika-Güney (AmG) | 14,697,488 |
| Okyanusya (Oky) | 7,649,448 |

## §3 SORU — hangi bölge·yüzyıl bir AVUÇ noktayla boyanıyor
**Avuç tanımı (öneri):** boyalı karası ≥ 25.000 km² olan bir 5°×5° hücreyi boyayan **farklı nokta sayısı ≤ 3**
(noktanın hücre içinde olması gerekmez — emilmede boyayan dışarıdan gelir). Makro düzeyde: bölge içindeki boyayan nokta ≤ k.

**Duyarlılık — 5°×5° (boyalı ≥ 25 bin km² hücreler):**

| yüzyıl (gün) | boyalı hücre | ≤1 | ≤3 | ≤5 | ≤10 | hücre içinde 0 nokta (tamamen dışarıdan boyanan) |
|---|---:|---:|---:|---:|---:|---:|
| 1200 (1290) | 481 | 39 | 175 | 274 | 368 | 126 |
| 1300 (1350) | 482 | 36 | 170 | 274 | 369 | 124 |
| 1400 (1450) | 490 | 30 | 167 | 276 | 372 | 118 |
| 1500 (1550) | 516 | 31 | 170 | 286 | 398 | 121 |
| 1600 (1650) | 565 | 27 | 168 | 297 | 434 | 106 |
| 1700 (1750) | 597 | 16 | 141 | 278 | 448 | 74 |
| 1800 (1850) | 618 | 19 | 102 | 231 | 452 | 38 |
| 1900 (1911) | 650 | 14 | 79 | 195 | 440 | 20 |

≤3 kovasının bölgesi (8 yüzyıl toplamı, hücre-yüzyıl): Amerika-K **447** · Rusya 195 · Amerika-G 176 · Sahra-altı 169 · Çin 49 · Orta Asya 33 ·
Kuzey Afrika 24 · Okyanusya 20 · GD Asya 20 · Hindistan 14 · Arabistan 13 · Avrupa-B 8 · Japonya 4.
**Anadolu, Balkan, Kafkasya, Mezopotamya, Levant, Mısır, İran, Avrupa-O/D: 0.**

**Duyarlılık — makro bölge (boyayan nokta ≤ k, pencere içi 8 yüzyıl):** k=1 → 5 satır (Okyanusya 1200–1600) · k=3 → 6 (+Okyanusya 1700) · k=5 → 6 · k=10 → 6.
MÖ + MS 0–1199: **47×22 = 1.034 satırın hepsi 0 nokta** (avuç bile değil).

**Avuç listesi — adıyla, TEK noktanın boyadığı hücreler.**
*1290 (39 hücre — en büyük 20):*

| hücre | bölge | boyalı km² | içte | azami km | boyayan nokta (devlet) |
|---|---|---:|---:|---:|---|
| lat-25..-20_lon-60..-55 | Amerika-G | 227.531 | 0 | 1.116 | Pucará de Tilcara (diaguita-calchaqui) |
| lat-10..-5_lon15..20 | Sahra-altı | 182.668 | 1 | 445 | Matamba (matamba) |
| lat50..55_lon-95..-90 | Amerika-K | 181.054 | 1 | 394 | Sandy Lake (kri) |
| lat-35..-30_lon25..30 | Sahra-altı | 145.989 | 1 | 378 | Gcuva (xhosa) |
| lat40..45_lon-100..-95 | Amerika-K | 145.165 | 1 | 422 | Pawnee köyleri (pavni) |
| lat55..60_lon-115..-110 | Amerika-K | 126.122 | 1 | 466 | Peace Point (dene) |
| lat55..60_lon80..85 | Rusya | 110.616 | 0 | 572 | Baraba bozkırı (altinorda) |
| lat-15..-10_lon10..15 | Sahra-altı | 106.875 | 0 | 735 | Matamba (matamba) |
| lat5..10_lon-70..-65 | Amerika-G | 103.394 | 0 | 711 | Hunza/Tunja (muisca) |
| lat15..20_lon-105..-100 | Amerika-K | 87.668 | 0 | 608 | Xochimilco (nahua) |
| lat-35..-30_lon15..20 | Sahra-altı | 84.508 | 0 | 695 | Varmbad (nama-orlam) |
| lat15..20_lon-20..-15 | Sahra-altı | 78.918 | 1 | 416 | Nder (valo) |
| lat65..70_lon50..55 | Rusya | 78.797 | 1 | 329 | Ust-Tsilma (novgorod) |
| lat50..55_lon-65..-60 | Amerika-K | 76.951 | 1 | 399 | Natashquan (fransa) |
| lat10..15_lon-75..-70 | Amerika-G | 67.566 | 0 | 741 | Hunza/Tunja (muisca) |
| lat-10..-5_lon10..15 | Sahra-altı | 65.726 | 0 | 398 | Matamba (matamba) |
| lat-40..-35_lon175..180 | Okyanusya | 65.218 | 0 | **2.276** | Lapaha/Muʻa (tui-tonga) — **Tonga noktası Yeni Zelanda'yı boyuyor** |
| lat45..50_lon-60..-55 | Amerika-K | 55.245 | 1 | 361 | Kızıl Kızılderili Gölü (beothuk) |
| lat0..5_lon-80..-75 | Amerika-G | 54.754 | 0 | 389 | Bacatá/Bogotá (muisca) |
| lat5..10_lon-85..-80 | Amerika-K | 45.103 | 0 | 1.126 | Bacatá/Bogotá (muisca) |

*1911 (14 hücre):* Rusya'da 10 (Yerbogaçen, Essey, Hatanga, Jigansk, Voloçanka, Ust-Olenyok, Bulun, Ust-Yansk, Markovo), Minto Inlet (kanada),
Çengdu (qing), Marble Bar (avustralya), Akureyri (danimarka), Native Point (kanada) — azami uzaklık **135–253 km** (1290'daki 329–2.276 ile karşılaştır).
Tam liste (≤3 dahil, her yüzyıl, ilk 6 boyayan adıyla): `-emilme-5x5.csv` (`boyayan_site`, `siteler`).

## §4 EMİLME — doğrudan ölçüm
### 4a Izgara modeli (makro × yüzyıl) — `-emilme-makro.csv`
Kilit sütunlar (1290 → 1911):

| bölge | boyayan/10⁵ km² | km²/boyayan nokta | en yakın VAR site p95 km | boyalı örnek → kendi noktası azami km | **yalnız boyayan** p95 / azami km |
|---|---|---|---|---|---|
| Anadolu | 29,9 → 31,0 | 3.585 → 3.535 | 70 → 70 | 107 → 107 | **70 / 107** |
| Balkanlar | 36,0 → 37,4 | 3.247 → 3.147 | 63 → 63 | 122 → 122 | **64 / 122** |
| Kafkasya | 17,9 → 18,4 | 4.996 → 4.865 | 86 → 78 | 107 → 98 | 86 / 107 → 78 / 98 |
| Mezopotamya/Irak | 8,0 → 8,6 | 8.347 → 7.303 | 152 → 134 | 205 → 179 | 229 / 308 → 229 / 286 |
| Levant/Suriye | 11,3 | 6.824 | 140 | 185 | 169 / 281 → 169 / 274 |
| Mısır | 5,5 → 5,8 | 14.792 → 14.052 | 192 | 258 | 347 / 542 |
| İran | 6,4 → 7,0 | 12.956 → 12.045 | 143 → 149 | 220 → 298 | 143 / 220 → 149 / 298 |
| Avrupa-Orta | 10,4 → 10,5 | 7.778 → 7.657 | 98 → 97 | 143 | 98 / 143 |
| Avrupa-Batı | 10,3 → 10,6 | 9.097 → 9.009 | 123 → 121 | 692 → 529 | 139 / 2.389 → 131 / 1.093 |
| Rusya | 1,5 → 3,3 | 28.817 → 26.577 | 570 → 159 | 758 → 362 | 2.088 / 2.330 → 172 / 1.034 |
| Çin (+Kore) | 2,3 → 2,7 | 36.575 → 31.925 | 341 → 180 | 496 → 262 | 566 / 1.086 → 180 / 262 |
| Sahra-altı Afrika | 1,3 → 3,1 | 56.409 → 30.669 | 540 → 173 | 847 → 318 | 688 / 987 → 200 / 554 |
| Amerika-Kuzey | 0,8 → 3,0 | 104.050 → 32.981 | 526 → 156 | 1.126 → 375 | 601 / 4.097 → 158 / 1.382 |
| Amerika-Güney | 0,08 → 2,15 | 260.899 → 41.998 | 1.176 → 177 | 1.165 → 344 | 2.999 / 3.550 → 247 / 3.511 |
| Okyanusya | 0,01 → 1,88 | 98.960 → 37.695 | 1.385 → 170 | 2.374 → 263 | 3.531 / 4.296 → 453 / 638 |

📌 Bugünkü pencerede bile emilme Anadolu/Balkan dışında **büyük**: 1290'da Amerika-G'de bir noktanın boyadığı ortalama alan
**260.899 km²** (Anadolu'nun 73 katı); Okyanusya'da tek bir Tonga noktası Yeni Zelanda'yı 2.276 km öteden boyuyor.

### 4b Harita modeli (çözülmüş `DEVLET_HARITA`, 8 gün) — `-poligon.csv`

| gün | poligon | toplam km² | içinde kendi noktası 0 olan (adet / km² / pay) | bunların ≥1.000 km² olanı | km²/nokta p50 / p95 / max | **aynı devletin en yakın noktasına azami uzaklık** p95 / max |
|---|---:|---:|---|---:|---|---|
| 1290 | 3.445 | 47,2 M | 2.975 / 1,12 M / %2,4 | 52 | 9.269 / 77.662 / 122.352 | 280 / 653 |
| 1350 | 3.519 | 47,2 M | 3.009 / 1,09 M / %2,3 | 54 | 9.193 / 76.504 / 122.352 | 268 / 653 |
| 1450 | 3.556 | 47,4 M | 3.024 / 0,68 M / %1,4 | 47 | 10.141 / 77.968 / 122.352 | 267 / 506 |
| 1550 | 3.589 | 46,6 M | 3.097 / 0,68 M / %1,5 | 52 | 17.461 / 79.127 / 122.352 | 275 / **5.244** |
| 1650 | 3.833 | 54,4 M | 3.318 / 0,79 M / %1,5 | 54 | 22.372 / 78.486 / 122.352 | 271 / **3.040** |
| 1750 | 4.105 | 65,6 M | 3.533 / 0,78 M / %1,2 | 51 | 22.265 / 77.628 / 157.183 | 275 / 864 |
| 1850 | 4.758 | 78,9 M | 4.158 / 1,39 M / %1,8 | 86 | 20.342 / 76.431 / 157.183 | 271 / 1.346 |
| 1911 | 5.063 | 95,3 M | 4.596 / 1,61 M / %1,7 | 116 | 6.988 / 54.493 / 111.445 | 227 / 1.346 |

- **"Kenar peteği dünyaya yayılmasın" sayıyla:** bugünkü haritada boyalı poligonların %95'i, devletinin en yakın noktasından **≤ 227–280 km** uzağa uzanıyor.
  Bu, haritanın **bugün tolere edilen rejimi**dir. Nokta başına en büyük alan: `wicita` 157.183 km²/1 nokta (1750), `karga` 122.352 (1290),
  `kaonde-ila` 119.718/nokta, `kesiri-sultanligi` 111.445, `kri` 109.088. Noktasız poligonlar sayıca %85–91 ama alanca yalnız %1,2–2,4 (kıyı/sınır kırıntısı).
- 🔴 **Kuyruktaki 5.244 / 3.040 / 1.346 km EMİLME DEĞİL — BAYAT HARİTA.** Parça 18746 (`ingiltere` dnm 1523–1558) ve 65168 (`abd` 1849–1850-09-07)
  Tehuantepec kıstağını (Oaxaca/Chiapas) boyuyor. KOŞU 21 tabanında (`14174ef7d`) `yerlesimler_kamerika.js` Tehuantepec
  `s: ingiltere 1523–1783 · abd 1783–1923` idi; bugün `ispanya → yeni-ispanya → meksika`. Yani **yayındaki harita düzeltilmiş veriden eski** —
  bir sonraki tam koşu bunu kendiliğinden kapatmalı.
- Aynı sınıf (harita gövdesi var, bugünkü veride o gün o devlete ait **hiç** nokta yok): `suud` 462.108 km² (1850), `macaristan` 321–342 bin km² (1650–1911),
  `creek-konfederasyonu`, `powhatan`, `bunyoro`, `lan-xang`, `meysur`, `bulgaristan`/`sirbistan` (1911). Bayat gövde mi kimlik değişimi mi — **ayırt edilmedi** (§7-3).

## §5 EŞİK ÖNERİSİ (hüküm değil)
**Ölçüt — MÖ senaryosuna uygun metrikle:** bir bölge·yüzyılda, *o çağda var ve sahipli* noktalar tek site olsaydı (`yalniz_boyayan`):

| sınıf | koşul | anlamı |
|---|---|---|
| **AÇ** | kara örneklerinin **p95 ≤ 150 km** **ve** boyalı örnek → kendi noktası **azami ≤ 300 km** | pencere açılabilir |
| **SINIR** | p95 ≤ 300 km | yalnız kademeli kutu + dolgu (`tur:"bolge"`, `bos:`) noktasıyla |
| **KAPALI** | p95 > 300 km | açılmaz |

**Gerekçe:**
1. **300 km tavanı haritanın kendi bugünkü rejimidir:** 8 günün hepsinde boyalı poligonların p95'i aynı devletin noktasına 227–280 km. Yeni açılan bir pencere,
   bugün kabul edilen haritadan daha kötü emilme üretmemeli. Aynı sayı MIMARI §5'in "seyrek" kademesi.
2. **150 km p95 = iyi huylu çekirdeğin ~2 katı:** Anadolu p95 70, Balkan 63–64 — 642 yıl boyunca **sabit**. 2× pay kıyı/çöl kenarı örneklerini tolere eder;
   MIMARI §5'in "normal" kademesi (120 azami) ile aynı mertebe.
3. **Azami (max) değil p95:** MIMARI §5'in "yoğun bölge azami 60 km" ölçütünü **Anadolu bile geçmiyor** (azami 107; Balkan 122). Azami birkaç kıyı/köşe
   örneğiyle belirlenir; p95 bölgenin geneline bakar. ⇒ MIMARI §5'in sayıları ya p95'e taşınmalı ya gevşetilmeli — ayrı bir koordinatör kararı.
4. **Kalibrasyon (nokta sayısına çeviri):** p95 ≈ k·√(A/N). İyi yayılmış bölgede **k ≈ 1,25** (Anadolu 1,23); 170 bölge·yüzyıl satırında (N ≥ 10) medyan **1,58**
   (p25 1,15 · p75 2,40; en kötü Rusya 1300–1500 ~7,9 = aşırı kümelenme). Gereksinim: **N = A_yerleşilebilir · (k/D)²**. Sağlama: Anadolu D=70, k=1,25 → 239; gerçek 232 ✓.

**Sağlama — öneri bugünkü pencereyi nasıl sınıflardı** (1290 · 1350 · 1450 · 1550 · 1650 · 1750 · 1850 · 1911):

| bölge | sınıf |
|---|---|
| Anadolu · Balkanlar · Kafkasya · İran · Avrupa-O · Avrupa-D | **AÇ** ×8 |
| Japonya | KAPALI ×3 → SINIR ×4 → AÇ (1911) |
| Mezopotamya · Levant · Orta Asya · Avrupa-B · Hindistan | SINIR ×8 |
| Rusya · Amerika-K | KAPALI ×6 → SINIR ×2 |
| Çin (+Kore) | KAPALI ×5 → SINIR ×3 |
| GD Asya · Sahra-altı · Amerika-G | KAPALI ×7 → SINIR (1911) |
| Mısır · Arabistan · Kuzey Afrika | KAPALI ×8 *(çöl yüzünden: dolgu peteği hariç tutulunca Mısır p95 154, Arabistan 192 — §6)* |
| Okyanusya | KAPALI ×8 |

📌 Öneri, "iyi huylu" bilinen çekirdeği (Anadolu/Balkan 1281–1923) **8/8 AÇ** sınıflıyor ✓ — ve bugün yayında olan Amerika/Okyanusya/GD Asya 1290–1650'yi
**KAPALI** sınıflıyor. Yani dünya kutusu `box(-180,-60,180,85)` açık olduğu için pencere bu bölgelerde §6 kuralını **bugün de** karşılamıyor.
⚠️ Mezopotamya ve Levant — MÖ'nün tam çekirdeği — bugün yalnız **SINIR**: Irak'ta 35–38 nokta / 440 bin km² (p95 229 km). Sümer için bu bölge önce sıklaşmalı.

## §6 MÖ AYAĞI — "pencere için kaç nokta gerekli"
**İki senaryo — hangisinin geçerli olduğu bir TASARIM kararıdır (koordinatör):**
- **S1 (motorun bugünkü anlamı):** `kur:`suz 2.823 nokta MÖ'de de VAR → petek geometrisi ≈ 1290'ınki; MÖ devletleri yalnız sahiplik ister ve emilme 1290 düzeyinde
  sınırlı kalır (`yakin_var` sütunu). Ama bu, **İstanbul'un MÖ 3000'de var sayılması** demektir — bilmediğini bilgi diye yazmak (B10).
- **S2 (dürüst):** MÖ'de yalnız o çağa kaynaklı noktalar + dolgu noktaları (211 `tur:"bolge"`, çağdan bağımsız meşru) site olur.
  **Bugün MÖ noktası 0 ⇒ her bölge KAPALI.** Gereksinim aşağıda. "Yerleşilebilir kara" = en yakın sitesi dolgu noktası OLMAYAN kara (dünya karasının %91,3'ü).

| bölge | yerleşilebilir km² | **D=100** (çekirdek) iyi / tipik | **D=150** (AÇ) iyi / tipik | **D=300** (SINIR) iyi / tipik | bugün boyayan 1290 / 1911 | MÖ'de var | **açık (D=150, iyi)** |
|---|---:|---|---|---|---|---:|---:|
| **Sümer kutusu** 29,5–33,5K · 44–48,5D | 175.910 | 28 / 44 | **13 / 20** | 4 / 5 | 17 / 19 | 0 | **13** |
| Mezopotamya/Irak | 350.558 | 55 / 88 | 25 / 39 | 7 / 10 | 35 / 38 | 0 | 25 |
| Mısır (Nil + kıyı; çöl dolguda) | 508.033 | 80 / 127 | 36 / 57 | 9 / 15 | 55 / 57 | 0 | 36 |
| Levant/Suriye | 286.600 | 45 / 72 | 20 / 32 | 5 / 8 | 36 / 36 | 0 | 20 |
| Anadolu | 749.317 | 118 / 188 | 53 / 84 | 14 / 21 | 224 / 232 | 0 | 53 |
| Kafkasya | 183.722 | 29 / 46 | 13 / 21 | 4 / 6 | 33 / 34 | 0 | 13 |
| İran | 1.434.104 | 225 / 359 | 100 / 160 | 25 / 40 | 98 / 108 | 0 | 100 |
| Balkanlar | 787.634 | 124 / 197 | 55 / 88 | 14 / 22 | 289 / 300 | 0 | 55 |
| Orta Asya | 3.225.221 | 504 / 806 | 224 / 358 | 56 / 90 | 73 / 91 | 0 | 224 |
| Arabistan | 1.529.037 | 239 / 382 | 107 / 170 | 27 / 43 | 52 / 71 | 0 | 107 |
| Kuzey Afrika | 3.000.808 | 469 / 750 | 209 / 333 | 53 / 84 | 152 / 166 | 0 | 209 |
| Avrupa-Batı | 3.011.827 | 471 / 752 | 210 / 335 | 53 / 84 | 311 / 320 | 0 | 210 |
| Avrupa-Orta | 987.748 | 155 / 247 | 69 / 110 | 18 / 28 | 103 / 104 | 0 | 69 |
| Avrupa-Doğu | 854.907 | 134 / 214 | 60 / 95 | 15 / 24 | 52 / 65 | 0 | 60 |
| Rusya | 8.307.795 | 1.299 / 2.074 | 577 / 922 | 145 / 231 | 135 / 303 | 0 | 577 |
| Hindistan | 3.455.732 | 540 / 863 | 240 / 384 | 60 / 96 | 95 / 132 | 0 | 240 |
| Çin (+Kore) | 5.034.070 | 787 / 1.257 | 350 / 559 | 88 / 140 | 119 / 144 | 0 | 350 |
| Japonya | 320.746 | 51 / 81 | 23 / 36 | 6 / 9 | 18 / 34 | 0 | 23 |
| GD Asya | 3.352.114 | 524 / 837 | 233 / 372 | 59 / 93 | 172 / 230 | 0 | 233 |
| Sahra-altı Afrika | 21.110.582 | 3.299 / 5.271 | 1.467 / 2.343 | 367 / 586 | 277 / 679 | 0 | 1.467 |
| Amerika-Kuzey | 16.475.115 | 2.575 / 4.113 | 1.145 / 1.828 | 287 / 457 | 133 / 493 | 0 | 1.145 |
| Amerika-Güney | 14.646.022 | 2.289 / 3.657 | 1.018 / 1.625 | 255 / 407 | 12 / 316 | 0 | 1.018 |
| Okyanusya | 5.119.813 | 800 / 1.279 | 356 / 569 | 89 / 143 | 1 / 144 | 0 | 356 |

"iyi" = k 1,25 (noktalar kapsama için yayılmış, Anadolu gibi) · "tipik" = k 1,58 (atlastaki medyan kümelenme). **Açık = gereksinim − MÖ'de var (0).**
Sütun "bugün boyayan" yalnız karşılaştırma içindir — o noktalar MÖ'ye **taşınamaz** (kaynaklı MÖ varlığı yok).

📌 **Somut okuma:** yalnız güney Mezopotamya'yı (Sümer kutusu) açmak için **13–20 kaynaklı MÖ noktası** gerekir (D=150), çekirdek kalitesinde (D=100) 28–44.
KASA'nın §6① listesi 10 şehir (Uruk · Ur · Lagaş · Kiş · Nippur · Eridu · Umma · Şuruppak · Adab · Larsa) ⇒ **D=150 için 3–10 eksik**, D=100 için 18–34 eksik.
⚠️ Gereksinim **alt sınırdır**: noktaların konumu (kümelenme — Sümer şehirleri Fırat-Dicle hattında dizili) ve **kutu kenarı** (komşu bölgede site yoksa Sümer
peteği Arabistan'a/İran'a yayılır) ayrıca `arac/denetle_kapsama.py` ile ölçülmeli. Kademeli kutuda (D220) kutu kenarına sınırlayıcı dolgu noktası şart.

## §7 ÖLÇÜLEMEDİ / BULUNAMADI
1. **Motorun MÖ davranışı koşulmadı** — S1/S2 motor koşusuyla doğrulanmadı (7-8 saatlik koşu + §5 negatif-yıl motoru gerekir). Var-ama-sahipsiz petek MÖ'de boş mu
   kalır, `_kusatilmis` devri ona uygulanır mı — kodda okunmadı.
2. **Harita ↔ veri izi:** `URETIM_IZI`'nin 95 girdi özetinin **95'i de** bugünkü dosyalarla (ham ve CRLF→LF) eşleşmedi — `goller.js`'in KOŞU 21 commit'indeki hâli bile.
   İz büyük olasılıkla koşunun anlık-görüntü kopyasından alınıyor; **nedeni ölçülmedi.** `14174ef7d..HEAD` arasında 18 yerleşim dosyası değişti (+254/−152).
   §4b'de nokta sayımı bugünkü veriyle, poligonlar KOŞU 21 haritasıyla yapıldı — küçük tutarsızlık beklenir (Tehuantepec bunun ölçülen örneği).
3. Bayat gövde mi kimlik değişimi mi (`suud`, `macaristan`, `creek-konfederasyonu`, …) — ayırt edilmedi.
4. Osmanlı gövdeleri (`PARCALAR`/dönem dosyaları) poligon düzeyinde ölçülmedi; yalnız ızgara modeliyle.
5. `isg:` boyaması, göl/çöl tavanı ve kuşatılmışlık devri ızgara modeline katılmadı. motor_kara ile NE kara arasındaki 30,7 M km² farkın nedeni okunmadı.
6. Makro bölge sınırları modern ülke sınırıdır; tarihî bölge değil. 1945 ufku (ZAMAN-PAKET-v2) için 1923–1945 ayrıca ölçülmedi (1911 anlığı kullanıldı).

## §8 TESLİM — üçlü kural
**① ne ölçtüm:** 55 yüzyıl × 22 bölge ızgarası (+5°×5°); MÖ ve MS 0–1199'da boyayan nokta **0**, MÖ'de motor-anlamında "var" **2.823**; 1911'de boyayan 4.097.
Avuç (≤3, 5°×5°) 1290'da 175 hücre → 1911'de 79. Haritanın p95 emilme rejimi 227–280 km. Öneri (p95 ≤150 & azami ≤300) Anadolu/Balkan'ı 8/8 AÇ,
Okyanusya'yı 8/8 KAPALI sınıflıyor. Sümer kutusu D=150 → 13–20 nokta (10 aday var ⇒ 3–10 eksik). Yan bulgu: yayındaki harita Tehuantepec'i 1523–1558 İngiltere,
1849–1850 ABD boyuyor (bayat veri).
**② ne bulamadım:** §7.
**③ ne istiyorum:** (a) eşik kararı (D=150/300 mü; MIMARI §5'in p95'e taşınması); (b) S1/S2 tasarım kararı (`kur:`suz nokta MÖ'de site mi);
(c) Tehuantepec bulgusunun bir sonraki koşuda kapandığının ölçülmesi.
**Tavan:** bu rapor hiçbir sayaca/tavana dokunmuyor — **0 diff.**

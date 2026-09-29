# KRONO-ASYA-UZAK-0929 — KÜNYE ÖNERİLERİ (M-5416 kural 3)

`data/devletler.js`e dokunulmadı. `denetim/KUNYE-DUNYA-0929.json` bu oturumda AÇILMADI (künye id'leri doğrudan
`devletler.js`ten `node` ile okundu: 678 künye). Aşağıdaki id'ler `kronoloji_cok_*.js` içinde `taraflar:[…]`de **yazılıdır**:
künye inince madde kendiliğinden bağlanır (`app.js:13573` eşlenmeyeni sayıp konsola basar, maddeyi kaybetmez).

**Kesinlik:** 🟢 kaynaklı (web özeti + akademik eser adı) · 🟡 yıl kaynaklı, pencere ucu kaynaksız · 🔴 sınanmadı, öneri.
**Pencere uçları** yalnız kaynağın verdiği yıl/gün; sınır işareti (`YYYY-01-01`) ölçüm değildir.

## Maddeye BAĞLI (mecburî) — 3

| # | Önerilen `id` | Ad | Pencere | Kullanan madde | Kesinlik / kaynak |
|---|---|---|---|---|---|
| K1 | `kuca-hocalari` | Kuça Hoca Rejimi (Reşidüddin Hoca) | **1864-06 → 1865/66** | `1864-06-01` Kuça isyanı | 🟡 Kim Hodong, *Holy War in China* (2004): Kuça'da Reşidüddin Hoca'nın rejimi 1864'te kuruldu; Yâkub Bey'in Kaşgar'a girişi Ocak 1865. Bitişi ölçülemedi (Yâkub Bey Kuça'yı 1867-68'de mi aldı — 🔴) |
| K2 | `kunduz-hanligi` | Kunduz Hanlığı (Mîr Murad Bey ve haleflerinin Kunduz emirliği) | ? → **1859-05/06** | `1859-05-01` Afgan Kunduz/Bedahşan | 🟡 Britannica: kuzey hanlıkları 1859'da alındı; başlangıç yılı bulunamadı |
| K3 | `nagpur-bhonsle` | Nagpur Bhonsle Krallığı | **1739?** → **1853-12-11** | `1853-12-11` Nagpur ilhakı | 🟡 bitiş: III. Raghuji'nin ölümü (Metcalf 2006 / Britannica). `maratha` künyesi 1818-06-03'te biter; Nagpur 1818-1853 boyunca İngiliz himayesinde krallık olarak sürdü. Başlangıç 🔴 |

## Yerleşim haritasındaki DELİKLERİ kapatacak öneriler — 9

| # | Önerilen `id` | Ad | Pencere | Neden gerekli | Kesinlik / kaynak |
|---|---|---|---|---|---|
| K4 | `wu-zhu-yuanzhang` | Wu Prensliği (Zhu Yuanzhang, Kızıl Türban devleti) | **1364 → 1368-01-23** (Wu Dükü 1361) | Haritada Ganzhou/Hengyang/Ji'an 1358-59'da `__BOSLUK__`a düşüp **1368-01-23'te Ming'e** bağlanıyor — toprak arada Zhu'da idi (Nanjing 1356-04-10, `kronoloji_cin.js`) | 🟡 Dreyer, *Early Ming China* (1982) |
| K5 | `herat-emirligi` | Herat Emirliği (Sadozay) | **1826? → 1863** | Herat 1826'da `afganistan` ama 1863'e dek Sadozay elindeydi; `afgan-durrani` t:1823 (YERLESIM-ONERI Ö1) | 🟡 Britannica «Dōst Moḥammad» |
| K6 | `han-chen-youliang` | Han (Chen Youliang) | **1360 → 1363** | Hubei-Jiangxi 1360-63 | 🔴 hafıza (Dreyer 1982) — pencere ucu sınanmadı |
| K7 | `wu-zhang-shicheng` | Wu (Zhang Shicheng) | **1354 → 1367** | Yangzhou-Suzhou çevresi | 🔴 hafıza (Dreyer 1982) — pencere ucu sınanmadı |
| K8 | `ili-sultanligi` | Ili (Taranchi) Sultanlığı | **1864 → 1871** | Ili havzası (Gulca): Rusya 1871'de işgal etti | 🔴 hafıza (Kim 2004 anlatısı); haritadaki Gulca (Yining) kaydına bakılmadı |
| K9 | `timor-liurai` | Timor liurai'leri (Portekiz Timoru öncesi/yanında) | ? → 20. yy başı | `timor-beylikleri` t:1769-10-10 sınır işareti (YERLESIM-ONERI Ö10) | 🔴 hafıza |
| K10 | `avustralya-kolonileri` | Avustralya İngiliz Kolonileri (YGG · Viktorya · Q.land · G.Avustralya · B.Avustralya · Tazmanya) | **1788? → 1901-01-01** | Haritadaki 21 Okyanusya doğuş kırılmasının çoğu «—»→`avustralya`; koloni künyeleri olmadan «—»'nın kimin toprağı olduğu ayırt edilemiyor | 🟡 Federasyon 1901-01-01 (Constitution Act 1900); 1788 hafıza 🔴 |
| K11 | `kingitanga` | Maori Kral Hareketi (Waikato) | **1858 → 1864?** | Waikato savaşı (1863-64) `yeni-zelanda` maddesinin karşı tarafı | 🟡 Belich 1986 (kuruluş 1858 yaygın bilgi, sayfa açılmadı); bitiş 🔴 |
| K12 | `liang-prensligi` | Yunnan Liang Prensliği (Kuzey Yuan vasalı) | **1368 → 1382-01-06** | Basalawarmi'nin intiharı (Dreyer/Yang Bin) | 🟡 madde: `kronoloji_cok_dogu_asya.js` 1382-01-06 (şimdilik `kuzey-yuan` + `ming-hanedani` `taraflar`da) |

(K4–K12: 9 öneri; K1–K3 mecburî: toplam 12.) Öneri sırası: K1–K3 (maddelere bağlı) → K4 (Ganzhou/Hengyang/Ji'an) → K5 (Herat) → K10 (Okyanusya).

## Mevcut künyelerin ÖMRÜ şüpheli — 5  (bkz. DUZELTME.md D3–D7)
- `pingnan` f:1855-01-01 → 1856 (D3) · `yakub-beg` t:1878-03-16 → 1877-12-18 (D4) · `farukiler` f:1370 → 1382 (D5) ·
  `timor-beylikleri` t:1769-10-10 (D6) · `hive` f:1512 (D7, kusur değil).
- `brunei-sultanligi` f:1368-01-01 ve `banjar-sultanligi` f:1526-01-01: **temsilî** (pencere ucu ölçüm değil, kaynaksız):
  Brunei'nin ve Banjar'ın gerçek kuruluşları bu oturumda araştırılmadı; bunlar 6 GD Asya doğuş/künye kırılmasının kaynağı.

## Not — TDV ve bu coğrafya
Bu 12 önerinin **hiçbirinde TDV kaynağı yok**: TDV bu coğrafyayı (Kuça · Kunduz · Nagpur · Herat Emirliği · Wu/Han devletleri)
madde madde kapsamıyor ya da aramada isabet vermedi. Akademik kaynak meşrudur (CLAUDE.md §4) ama **kitap sayfaları açılmadı** —
pencere uçları yayına girmeden sınanmalı.

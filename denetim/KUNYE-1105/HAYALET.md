# KUNYE-1105 — Mekanik hayalet taraması (yerleşim dönemi × künye)

LAB SALI · `lab-1104-kunye` · 5 Kasım 2026 · **veriye dokunulmadı.** Kaynak: **origin/main** (`git show`, ayrı çalışma kopyası gerekmedi), `data/yerlesimler*.js` + `data/yer_yama*.js` (231 dosya; **canlı** = `arac/girdi.py` GIRDI_DOSYALARI'ndaki 124 dosya), `data/devletler.js` (2265 künye), `arac/renkler.py` BOYALAR (2189 anahtar).
Dönem = yerleşim kaydının `s:` / `d:` / `v:` / `isg:` dizisindeki `{f, t, d}` nesnesi (node vm ile değerlendirildi). Devlet kimliği önce künye `id`'sinde, yoksa künye `harita:` alanında aranır (`kimlikler.js` emekli, köprü yalnız `harita:`). BOYALAR kontrolü künyenin `harita:` anahtarıyla.

## Sayılar

| ölçüm | adet |
|---|---|
| toplam dönem (231 dosya) | 47017 |
| sorunlu dönem (tümü) | 2448 |
| **sorunlu dönem — canlı dosyalarda** | **943** |
| künye yok (id ne `id` ne `harita:`) | 5 (hepsi canlı olmayan dosyalarda) |
| BOYALAR'da yok (künye var, boya anahtarı yok) | 0 |
| künye f'sinden önce başlayan | 1526 |
| künye t'sinden sonra biten | 945 |
| aşan künye sayısı (canlı) | 113 |

Canlı dosyalarda sınıf dağılımı: ORTA_ASIM 421 · BUYUK_ASIM 323 · KUCUK_ASIM 116 · BASLANGIC_ARTIGI 81 · UFUK_ARTIGI 2

Sınıflar: **KUCUK_ASIM** ≤31 gün (uç hizala / dönem KISALT) · **ORTA_ASIM** ≤1 yıl (kaynakla karar) · **BUYUK_ASIM** >1 yıl (künye GENİŞLET / ardıl künye / dönem yanlış) · **BASLANGIC_ARTIGI** dönem 1281-01-01 pencere başında açılıyor, künye daha geç kuruluyor · **UFUK_ARTIGI** künye ucu bilinen pencere günü (1923-10-29, 1945-05-08 …).

## Künye bazında — en çok aşan 40 (tamamı `HAYALET-KUNYE.tsv`, dönem dönem `HAYALET.tsv`)

| künye (d → çözülen id) | dönem | önce | sonra | en büyük aşım (gün) | künye f → t | sınıf | mekanik öneri |
|---|---|---|---|---|---|---|---|
| `zend` | 124 | 124 | 0 | 1291 | 1751-01-01 → 1794-01-01 | BUYUK_ASIM | künye f ucunu 1747-06-20'e GENİŞLET (dönemlerin 124/124'i aynı günde) — kaynakla |
| `musa-celebi →fetret-musa` | 89 | 89 | 0 | 369 | 1411-02-17 → 1413-07-05 | BUYUK_ASIM | künye f ucunu 1410-02-13'e GENİŞLET (dönemlerin 89/89'i aynı günde) — kaynakla |
| `isa-celebi →fetret-isa` | 63 | 63 | 0 | 157 | 1403-01-01 → 1403-09-01 | ORTA_ASIM | künye f ucunu 1402-07-28'e GENİŞLET (dönemlerin 63/63'i aynı günde) — kaynakla |
| `mehdi` | 51 | 0 | 51 | 139 | 1881-03-01 → 1898-09-02 | ORTA_ASIM | künye t ucunu 1899-01-19'e GENİŞLET (dönemlerin 51/51'i aynı günde) — kaynakla |
| `adal` | 36 | 36 | 1 | 48941 | 1415-01-01 → 1887-01-06 | BASLANGIC_ARTIGI | künye f ucunu 1281-01-01'e GENİŞLET (dönemlerin 36/36'i aynı günde) — kaynakla |
| `memluk` | 35 | 0 | 35 | 84 | 1250-01-01 → 1517-04-13 | ORTA_ASIM | dağınık aşım: dönem dönem incele (GENİŞLET / KISALT / ardıl künye) |
| `venedik` | 32 | 0 | 32 | 158 | 0697-01-01 → 1797-05-12 | ORTA_ASIM | künye t ucunu 1797-10-17'e GENİŞLET (dönemlerin 32/32'i aynı günde) — kaynakla |
| `avusturya →habsburg` | 26 | 3 | 23 | 725 | 1282-12-27 → 1918-11-12 | ORTA_ASIM | künye t ucunu 1919-09-10'e GENİŞLET (dönemlerin 20/26'i aynı günde) — kaynakla |
| `altinorda` | 24 | 0 | 24 | 59 | 1242-01-01 → 1502-01-01 | ORTA_ASIM | künye t ucunu 1502-03-01'e GENİŞLET (dönemlerin 24/24'i aynı günde) — kaynakla |
| `cekoslovakya` | 21 | 0 | 21 | 1 | 1918-10-28 → 1992-12-31 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `somali` | 21 | 21 | 0 | 79987 | 1500-01-01 → 1927-01-01 | BASLANGIC_ARTIGI | künye f ucunu 1281-01-01'e GENİŞLET (dönemlerin 21/21'i aynı günde) — kaynakla |
| `toungoo` | 19 | 0 | 19 | 113 | 1510-01-01 → 1752-01-01 | ORTA_ASIM | künye t ucunu 1752-04-23'e GENİŞLET (dönemlerin 19/19'i aynı günde) — kaynakla |
| `yugoslavya` | 18 | 18 | 0 | 20 | 1918-12-01 → 1945-11-29 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `ming-hanedani` | 17 | 0 | 17 | 6214 | 1368-01-23 → 1644-04-25 | ORTA_ASIM | dağınık aşım: dönem dönem incele (GENİŞLET / KISALT / ardıl künye) |
| `italya` | 16 | 16 | 0 | 32 | 1861-03-17 → 1946-06-18 | ORTA_ASIM | künye f ucunu 1861-02-13'e GENİŞLET (dönemlerin 16/16'i aynı günde) — kaynakla |
| `arnavutluk-alman-himayesi` | 15 | 15 | 0 | 6 | 1943-09-14 → 1944-11-29 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `arnavutluk-italyan-koruma` | 15 | 15 | 0 | 5 | 1939-04-12 → 1943-09-08 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `funj` | 15 | 0 | 15 | 66 | 1504-01-01 → 1821-06-14 | ORTA_ASIM | künye t ucunu 1821-08-19'e GENİŞLET (dönemlerin 15/15'i aynı günde) — kaynakla |
| `mali-federasyonu` | 15 | 0 | 15 | 33 | 1959-04-04 → 1960-08-20 | ORTA_ASIM | künye t ucunu 1960-09-22'e GENİŞLET (dönemlerin 15/15'i aynı günde) — kaynakla |
| `napoli` | 14 | 14 | 0 | 453 | 1282-03-30 → 1861-02-13 | BASLANGIC_ARTIGI | künye f ucunu 1281-01-01'e GENİŞLET (dönemlerin 14/14'i aynı günde) — kaynakla |
| `umman` | 14 | 14 | 0 | 39722 | 1624-01-01 → (süren) | BUYUK_ASIM | künye f ucunu 1515-04-01'e GENİŞLET (dönemlerin 13/14'i aynı günde) — kaynakla |
| `yakub-beg` | 12 | 12 | 0 | 211 | 1865-01-01 → 1878-03-16 | ORTA_ASIM | künye f ucunu 1864-06-04'e GENİŞLET (dönemlerin 12/12'i aynı günde) — kaynakla |
| `bengal-sultanligi` | 10 | 0 | 10 | 5844 | 1340-01-01 → 1576-01-01 | ORTA_ASIM | künye t ucunu 1576-07-12'e GENİŞLET (dönemlerin 7/10'i aynı günde) — kaynakla |
| `cungar` | 10 | 0 | 10 | 365 | 1634-01-01 → 1758-01-01 | ORTA_ASIM | künye t ucunu 1759-01-01'e GENİŞLET (dönemlerin 10/10'i aynı günde) — kaynakla |
| `macaristan` | 10 | 0 | 10 | 6453 | 1000-01-01 → 1527-01-01 | BUYUK_ASIM | dağınık aşım: dönem dönem incele (GENİŞLET / KISALT / ardıl künye) |
| `afgan-durrani` | 9 | 6 | 5 | 5604 | 1747-10-01 → 1819-01-01 | ORTA_ASIM | künye f ucunu 1747-06-20'e GENİŞLET (dönemlerin 6/9'i aynı günde) — kaynakla |
| `sur-hanedani` | 9 | 9 | 0 | 867 | 1540-05-17 → 1564-01-01 | BUYUK_ASIM | künye f ucunu 1538-01-01'e GENİŞLET (dönemlerin 9/9'i aynı günde) — kaynakla |
| `almanya-muttefik-isgali` | 8 | 0 | 8 | 17 | 1945-06-05 → 1949-09-20 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `linyi-champa` | 8 | 0 | 8 | 1 | 0192-01-01 → 0999-12-31 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `portekiz-timor` | 8 | 0 | 8 | 9 | 1702-01-01 → 1975-11-28 | KUCUK_ASIM | dönem uçlarını künyeye HİZALA (KISALT) |
| `tay-son` | 8 | 8 | 0 | 1826 | 1778-01-01 → 1802-06-20 | ORTA_ASIM | künye f ucunu 1777-01-01'e GENİŞLET (dönemlerin 7/8'i aynı günde) — kaynakla |
| `bosna →bosna-kralligi` | 7 | 0 | 7 | 2072 | 1180-01-01 → 1463-05-01 | KUCUK_ASIM | künye t ucunu 1463-06-01'e GENİŞLET (dönemlerin 5/7'i aynı günde) — kaynakla |
| `filipin-racaliklari` | 7 | 0 | 7 | 23202 | 1001-01-01 → 1571-06-24 | BUYUK_ASIM | dağınık aşım: dönem dönem incele (GENİŞLET / KISALT / ardıl künye) |
| `malaka-sultanligi` | 7 | 0 | 7 | 5988 | 1400-01-01 → 1511-08-10 | BUYUK_ASIM | künye t ucunu 1528-01-01'e GENİŞLET (dönemlerin 7/7'i aynı günde) — kaynakla |
| `sih-imparatorlugu` | 7 | 7 | 0 | 13602 | 1801-04-12 → 1849-03-29 | BUYUK_ASIM | künye f ucunu 1765-04-16'e GENİŞLET (dönemlerin 6/7'i aynı günde) — kaynakla |
| `babur-imparatorlugu` | 6 | 4 | 2 | 7872 | 1526-04-21 → 1857-09-21 | BUYUK_ASIM | dağınık aşım: dönem dönem incele (GENİŞLET / KISALT / ardıl künye) |
| `gucerat-sultanligi` | 6 | 0 | 6 | 56 | 1407-01-01 → 1573-01-01 | ORTA_ASIM | künye t ucunu 1573-02-26'e GENİŞLET (dönemlerin 6/6'i aynı günde) — kaynakla |
| `mentese` | 6 | 0 | 6 | 517 | 1280-01-01 → 1424-01-01 | BUYUK_ASIM | künye t ucunu 1425-06-01'e GENİŞLET (dönemlerin 6/6'i aynı günde) — kaynakla |
| `dashun` | 5 | 5 | 0 | 1029 | 1644-01-01 → 1647-01-01 | ORTA_ASIM | künye f ucunu 1643-10-11'e GENİŞLET (dönemlerin 3/5'i aynı günde) — kaynakla |
| `bengal-nevabligi` | 4 | 0 | 4 | 2678 | 1717-01-01 → 1757-06-23 | BUYUK_ASIM | künye t ucunu 1764-10-22'e GENİŞLET (dönemlerin 3/4'i aynı günde) — kaynakla |

Not: 'mekanik öneri' yalnız dönem uçlarının dağılımından çıkar; **künye ucunu değiştirmeden önce kaynak okunmalı** (CLAUDE.md künye aşımı sınıflaması: devlet öldüyse dönemi KISALT · aynı polity sürüyorsa künyeyi GENİŞLET · ardıl yapı geçtiyse ardıl künye; sınır kayması önerilince iki ucu da ölç). Örnek: `zend` künyesinin kendi ic_not'u 1747-1751 farkını bilinçli beyan ediyor (Kerim Han konsolidasyonu 1751).

## C — Ufuk/pencere ucu taşıyan künyeler (GENİŞLET adayı)

Künye `t`'si bilinen pencere günlerinden biri olanlar (1923-10-29, 1945-05-08, 1945-09-02, 1945-01-01, 1914-01-01, 1918-11-11, 1939-09-01, 2000-12-31, 1923-07-24). **Gerçek uç olanlar ayıklanmalı** (ör. `tbmm-turkiye` 1923-10-29 gerçek; `danzig-serbest-sehri` 1939-09-01 gerçek; `hirvatistan-bagimsiz` 1945-05-08 tartışılır).

| künye | ad | f | t | LAB ön değerlendirme |
|---|---|---|---|---|
| `kongo-kralligi` | Kongo Krallığı | 1390-01-01 | 1914-01-01 | TEYIT (yıl; Bostoen & Brinkman 2018) |
| `tubu-tibesti` | Tibesti Teda (Tubu) Konfederasyonu | 1281-01-01 | 1914-01-01 | BEKLE (1916 çekiliş, kalıcı yeniden işgal günü) |
| `elsass-lothringen` | Alsas-Loren İmparatorluk Bölgesi (Reichsland) | 1871-05-10 | 1918-11-11 | GERÇEK uç (Fransız işgali/ateşkes; 1919 Versay ayrıca) |
| `polonya-naiplik-kralligi` | Polonya Naiplik Krallığı (Regency Kingdom, Alman-Avusturya himayesi) | 1916-11-05 | 1918-11-11 | kaynak okunuyor (11.11 / 14.11) |
| `cohor-sultanligi` | Cohor (Johor) Sultanlığı | 1528-01-01 | 1923-10-29 | UFUK ARTIĞI → GENİŞLET adayı (kaynakla) |
| `ingiliz-kuzey-amerika` | İngiliz Kuzey Amerika (Kanada) | 1763-02-10 | 1923-10-29 | UFUK ARTIĞI → GENİŞLET adayı (kaynakla) |
| `san-devletleri` | Şan Beylikleri (Sawbwa'lıklar) | 1281-01-01 | 1923-10-29 | UFUK ARTIĞI → GENİŞLET adayı (kaynakla) |
| `tbmm-turkiye` | Türkiye Büyük Millet Meclisi Hükûmeti | 1920-04-23 | 1923-10-29 | GERÇEK uç (Cumhuriyet ilanı) |
| `tidore-sultanligi` | Tidore Sultanlığı (Moluk) | 1281-01-01 | 1923-10-29 | UFUK ARTIĞI → GENİŞLET adayı (kaynakla) |
| `yogyakarta` | Yogyakarta Sultanlığı | 1755-02-13 | 1923-10-29 | UFUK ARTIĞI → GENİŞLET adayı (kaynakla) |
| `danzig-serbest-sehri` | Danzig Serbest Şehri | 1920-11-15 | 1939-09-01 | GERÇEK uç (Alman ilhakı 1939-09-01) |
| `hirvatistan-bagimsiz` | Bağımsız Hırvat Devleti (NDH) | 1941-04-10 | 1945-05-08 | olası gerçek (Zagreb'in düşüşü 8 Mayıs 1945) |
| `maldivler-cumhuriyeti` | Maldivler Cumhuriyeti | 1968-11-11 | 2000-12-31 | UFUK ARTIĞI: süren devlet, t boş olmalı (GENİŞLET) |

1923-10-29 ufuk artığı künyeler (Tidore, Johor, İngiliz Kuzey Amerika, Şan, Yogyakarta) UFUK-1923 yerleşim bulgularıyla aynı kökten: **künye ucu ve yerleşim dönemleri birlikte** GENİŞLET'ilmeli (Şan → 1948-01-04 onaylı; Johor → 1942-02-15 Japon işgali isg, künye ucu 1948/1957?; Kanada → 1931 Westminster / süren?).

## Künyesi olmayan dönemler (5, hepsi canlı olmayan dosyalarda)

- `yer_yama_halef_1946.js` · Dârülbeyzâ (Anfa) · s `fransiz-fas` 1946-01-01 → 1956-03-02
- `yer_yama_halef_1946.js` · Fas (Fez) · s `fransiz-fas` 1946-01-01 → 1956-03-02
- `yer_yama_halef_1946.js` · Merakeş · s `fransiz-fas` 1946-01-01 → 1956-03-02
- `yer_yama_halef_1946.js` · Rabat · s `fransiz-fas` 1946-01-01 → 1956-03-02
- `yer_yama_halef_1946.js` · Vecde (Oujda) · s `fransiz-fas` 1946-01-01 → 1956-03-02

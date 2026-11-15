# BOLGE-cin / ADIM 7 — Düzeltme (15 Kasım 2026)

Dal: `umit-1115-bolge-cin` (origin/main 8fb10bdf1 üstüne). `main`e push YOK.

## Uygulanan veri düzeltmesi (2 madde, `data/kronoloji_cin.js`)
| Madde | Eski `t` | Yeni `t` | Kaynak |
|---|---|---|---|
| Jiajing İmparatoru tahta çıktı | 1521-04-19 | **1521-05-27** | Ming shi j.17 (zh.wikisource, açıldı, okundu): 癸卯 (4. ay) «即皇帝位»; ganzhi→Jülyen (JDN, atlas yöntemi: 乙卯=0220-11-25, 丁酉=0311-07-13 sınaması); ikincil mutabakat okundu ama sayılmadı |
| Wanli İmparatoru tahta çıktı | 1572-07-05 | **1572-07-19** | Ming shi j.20 (okundu): 甲子 (6. ay 乙卯朔) «即皇帝位» → Jülyen 1572-07-19 |
Her ikisinde `ic_not` yazıldı (takvim çevirisi, eski değerin neden yanlış olduğu, ikinci akademik kaynağın OKUNMADIĞI). `b` değişmedi → çeviri hash'i bayat kalmaz; `olay_taraf.js` ve `ceviri_*olay*.js` anahtarı yok (grep sıfır). Çeviri yenilemesi gerekmiyor. Her iki madde `taraflar:["ming-hanedani"]` ve Ming `s:` kırılması değildir (Ming 1368-01-23 → 1644-04-25) → Değişmez 2'ye dokunmaz.
`node --check data/kronoloji_cin.js` temiz. Üretilmiş dosyalara (paket_09.js dahil KRONOLOJI_CIN kopyası) dokunulmadı: **`py arac/paketle.py yenile` gerekir** (KASA/push kapısı yapar; bu oturum yapmaz çünkü brif «üretilmiş dosyaya dokunma» diyor).

## UygulanMAYAN öneriler (kaynak OKUNMADI → «tarih uydurma» yasağı)
Adım 2 §B (10 madde: Japonya 1281 tayfun, Qianlong/Heshen ayrımı, Xianfeng/Xinyou ayrımı, Yâkub Bey ölümü, Kowloon 1860-10-24, Dai Yuan 1271-12-18, Boksör savaş ilanı, Ming/Yuan metin hatası, Jingnan 1402, Kangxi 1661) — her birinde beklenen yeni gün ve ikincil kaynak durumu o dosyada.
Adım 3'teki 15 maddesiz kırılma tarihi, kuyruktaki 12 yerleşim işi ve adım 1'deki 14 eksik künye: önce kaynak, sonra yazım. Önerilen sıra (verimli → pahalı): (1) 1368-04-01 ucu (64 uç, kaynaksız yuvarlak gün) · (2) Güney Ming→Qing 1646-1650 üç tarih (Kanton 18 uç) · (3) San Fan 1674-1677 üç tarih · (4) Hong Kong/Kowloon/NT ayrımı (yerleşim) · (5) Guge yerleşimleri.

## Önce/sonra ölçümler
- `odak_olc`: ÇÖZÜLMEYEN ODAK ATFI **0** (düzeltme sonrası ağaçta ölçüldü; düzeltme odak alanlarına dokunmadı).
- `renk_olc`: Çin künyesi renksiz **0**; değişiklik yok.
- `denetle` sonucu: bkz. aşağıdaki «Denetle» bölümü.
- D4c/D2: düzeltilen iki madde sınır maddesi değil; `devletler.js` hiç değişmedi → D4c değişmedi. Tavan açılmadı.

## 2. TUR (koordinatörün talebi; ayrıntı BOLGE-cin-2b-hakem-1115.md)
Birincil metin (zh.wikisource Ming shi/Qing shi gao/Yuan shi + antlaşma metinleri) okunup ganzhi→Jülyen/Gregoryen çevrilerek:
- **Düzeltildi/ayrıldı (`kronoloji_cin.js`, `devletler.js`):** Dai Yuan 1271-12-18 · Jingnan 1402-07-13 ve Yongle 1402-07-17 ayrı · Qianlong ölümü 1799-02-07, Heshen tutuklanması 1799-02-12, Heshen ölüm hükmü 1799-02-22 (üç ayrı madde) · Xianfeng ölümü 1861-08-22, Xinyou darbesi 1861-11-08, nâiplik 1861-12-02 (üç ayrı madde) · Boxer: Ketteler/kuşatma 1900-06-20, savaş fermanı 1900-06-21 · 1281 tayfun 1281-08-15 (±1 gün, Yuan shi j.208 «八月一日») · Kowloon 1860-10-24 · Ming'in ilanı 1368-01-23 (kaynak eklendi; 1368-09-14 madde metni «Ming'i ilan etti» düzeltildi).
- **Yeni maddeler:** Lüshun/Dalian kirası 1898-03-27 · Weihaiwei 1898-07-01 · Kaifeng 1368-04-16 · Henan 1368-04-25 · Tongguan 1368-05-13 (son üçü `kronoloji_sinir_cin_ms317.js`'e).
- **Doğrulandı + kaynak eklendi:** Yeni Bölgeler 1898-06-09/07-01 (kira) · Jiaozhou 1898-03-06.
- **Çözülemedi:** Kangxi (Qing shi gao j.5 ↔ j.6 birbiriyle çelişir) · Yakub Bey ölümü (dosya Orta Asya ajanınındır; 05-25 Qing kaydı / 22-29-30 Mayıs ikincil) · Guangzhouwan (metin okunamadı).
- **Çeviri/olay_taraf:** `olay_taraf.js` ve `ceviri_*` anahtarı olan madde yok (grep). Tek bayatlayan: `devletler.js` yuan künyesi 1368-09-14 maddesinin `b` metni (çeviri hash'i, KASA yenilemesi).

## Denetle
`py arac/denetle.py` (düzeltme sonrası ağaçta, `coz-c` ile üretilmiş ham dosyalarla) bölüm çıktısı okundu: Değişmez 1 ✓ (5636 yerleşim, 306 sahipsiz = beklenen 306; 1c belgesiz 2 = tavan 2; 1b 0) · **Değişmez 2 ✓ 760 kırılma, 0 açık** · 4 ✓ 0 hayalet · 4c/4d/4s ✓ 0 · 5 ✓ 0 · dönem sağlığı ✓ (0 sıfır-uzunluk/ters/çakışma) · kaynaksız `s:` 82 (tavan 1930), mükerrer madde 339 (borç). **ÇIKIŞ KODU OKUNMADI**: süreç ağır makine yükü yüzünden (çok paralel bölge ajanı) sonuna kadar beklenmedi, durduruldu; Değişmez 8 ve son özet satırı **ölçülmedi** (ana-checkout kuralı: 8 `coz-c`+motor ister) → bu rapor «temiz» demez, yalnız okunan bölümlerde ihlal yok der. Not: bu yüzden `main`e iletilecekse push kapısının kendi `denetle`si koşmalıdır. Düzeltme öncesi ayrı bir denetle koşusu YAPILMADI (iki madde sınır maddesi değildir; önceki değer sayısı için bölge ajanı ölçümü yok).

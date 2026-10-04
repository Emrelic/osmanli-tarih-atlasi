# SONRA1923-SAYIM — 1923 sonrası kapsamın ÖLÇÜMÜ (4 Ekim 2026)

Oturum: SONRA1923-SAYIM · koordinatör YILDIRIM BAYEZIT · yalnız ölçüm, hiçbir veri yazılmadı.

## 0. ÖNGÖRÜLER — ölçümden ÖNCE yazıldı (04:3x, betik koşmadan)

| # | soru | öngörü (mertebe) |
|---|---|---|
| ① | 1923 sonrası kronoloji maddesi | ~800 (koordinatörün regex'i 842; okuyucu daha az verir, ~600-850). Yıl dağılımı: 1923-45 ağır basar (~550), 1945-2026 ~250. `kronoloji_cok_1923_1945.js` index.html'de YÜKLÜ; `odak_olc.py` evreninde de VAR (index.html'den okuyorsa). |
| ② | künye | 1923 sonrasında yaşayan künye ~300; eksik devlet ~100-150 (BM üyesi ~193 + ölü 20. yy devletleri ~60 ⇒ ~250 gerekir, ~150'si var). Boyalı olanlar ~250/300. |
| ③ | yerleşim | 4298 noktanın ~%95'i (4000+) 1923 sonrasında da var olmalı; 1923 sonrası KURULAN yeni nokta ihtiyacı ~50-200 (Ankara gibi başkent değişimi değil, yeni şehirler: İsrail/Körfez/Sovyet kentleri). `s:`/`d:` uzatma: ~4000 zincir. |
| ④ | sınır | `d_sinirlar_*` 1923 sonrasını çok az kapsar: ~30 kayıt, büyük çoğunluğu 1923-1945. |
| ⑤ | kademe | ONCELIK.md "ÖNCELİK 2 · 1923-2026" ve İLERİ durakları (1945 · 1989 · bugün) diyor; ama kalite KADEMESİ (hangi bölgeye hangi yoğunluk) 1923 sonrası için tanımlı DEĞİL. |
| ⑥ | tavan | Sahipsiz: UFUK uzatılırsa ~4000 (veri uzatılmadan). Değişmez 2s AÇIK: binlerce (her `s:` uzatması bir kırılma ⇒ yüzlerce yeni madde). ODAKSIZ: ~+300. Kaynaksız: ~+500. ⇒ hüküm öngörüsü: **KAMPANYA**, kalem değil. |

---

## 1. HÜKÜM — tek cümle

🔴 **1923 sonrası bir KALEM DEĞİL, bir KAMPANYADIR.** Ama dengesiz bir kampanya: kronolojinin
1923-1945 kuşağı **yazılmış** (500 madde, hepsi kaynaklı, hepsi odaklı), künye katmanı
**1945'te duruyor** (aşan 155 künyenin 72'si `t:"1945-09-02"` ile kesilmiş — pencere ucu, ölçüm
değil), yerleşim katmanı **sıfır**, sınır katmanı **sıfır**. 1945 sonrası her katmanda fiilen boş.

Ölçüm aleti: `py denetim/ARAC-SONRA1923-SAYIM.py` (yalnız okur; dosya kümesi
`_bagli_mi.index_dosyalari`, JS değerleri node `vm` ile GERÇEK eval, yerleşim `girdi.yukle`,
boya `renkler.BOYALAR`). Ek sorgular (künye devamı, sınır iç alanları) aynı okuyucularla.

⚠️ **İlk koşuda kendi tuzağıma düştüm:** dizgi karşılaştırmasında `"330-05-11" > "1923-10-29"`
çıktı, Bizans 1923 sonrası kurulmuş sayıldı (81 künye; doğrusu 17). `pad()` eklendi (§3.5).
Bu, koordinatörün regex sayımında da aynı sınıftan bir sapma olabileceğini gösterir.

---

## 2. ÖLÇÜLENLER — altı soru

### ① KRONOLOJİ — öngörü ~800 · ölçülen **648** (509 dosya + 139 künye-içi)
```
Dosya evreni      183 kronoloji/olaylar dosyası diskte · 183'ü index.html'de YÜKLÜ (paket açılarak)
1923-10-29 SONRASI madde (dosyalarda)   509
   kronoloji_cok_1923_1945.js           500
   kronoloji_cok_ince_guney_asya.js       4
   kronoloji_cok_ince_gd_asya.js          2
   kronoloji_almanya.js · kronoloji_cok_ince_avrupa_amerika.js · olaylar_ek8.js   1'er
   yıl:  1923-1929  70 · 1930-1945  435 · 1945-1989  4 · 1990-2026  0
Künye-içi kronoloji (devletler.js `kronoloji[]`)   139 / 3203
   yıl:  1923-1929  15 · 1930-1945  71 · 1945-1989  51 · 1990-2026  2
```
- **Koordinatörün 842'si ile fark:** 500 ✓ aynı. "devletler.js 295" = künye `t:` alanı (155) +
  künye-içi kronoloji (139) = 294 — iki ayrı şey regex'te birleşmiş. "d_sinirlar 32" kronoloji
  değil: sınır kayıtlarının **iç** `tahdit` alt kayıtları (98 tane; üst kayıtta 0 — bkz. ④).
- `kronoloji_cok_1923_1945.js` **index.html'de YÜKLÜ** (satır 1231, yorum dışında). ⚠️ Dosyanın
  kendi başlığı hâlâ *"index.html'e BAĞLANMADI"* diyor — **başlık bayat.**
- **Ama yüklü ≠ görünür:** `app.js:90` `BITIS = gunIdx("1923-10-29")`. Zaman çubuğu UC'de durur;
  648 maddenin hiçbiri bugün kullanıcıya ulaşmaz.
- `odak_olc.py` evreninde **VAR** (evren `glob`dur, index.html değil). Gerçek ölçüm:
  `odak_olc.py --dosya kronoloji_cok_1923_1945.js` → **500/500 KONUMLU · ODAKSIZ 0 · çözülmeyen atıf 0.**
  (Benim kaba alan-varlığı sayımım 195 ODAKSIZ demişti — YANLIŞ, alet doğrusudur.)
- Kaynaksız madde (dosyalarda, `kaynak:` alanı yok): **0**.

### ② KÜNYE — öngörü "~300 yaşayan, ~100-150 eksik" · ölçülen: yaşayan künye **1945'te çöküyor**
```
Toplam künye                    895
t: UC'yi aşan                   155   (koordinatörün 295'i değil)
f: UC'den sonra kurulan          17   ✓ koordinatörle aynı
UC'yi aşan künyelerin t günü    1945-09-02: 72 · 1947-08-15: 3 · 1940-08-06: 3 · … · 2026+: 1 (iran)
   → 72'nin 64'ünün `ic_not_t`si açıkça "pencere ucu, ölçüm değil (D210) … bugün de mevcut" diyor
KESİT — o gün yaşayan künye (boyalı)
   1923-10-30   138  (126)
   1939-09-01   132  (119)
   1945-09-02   126  (112)
   1960-01-01    25   (22)
   1990-01-01     3    (3)
   2026-01-01     1    (1)       ← bugünkü dünya: Natural Earth 10m'de 209 egemen (185 "Sovereign country")
```
- 🔴 **Boyasız ama UC'yi aşan künye: 28 / 155** — hepsi harita deliği adayı. Başta
  **`turkiye-cumhuriyeti` (BOYASIZ)**, `suudi-arabistan`, `bulgaristan-kralligi`, `guney-afrika-birligi`,
  `mogolistan-halk-cumhuriyeti`, `endonezya-cumhuriyeti`, `vichy-fransasi`, `mancukuo`, `hicaz-kralligi`,
  `yemen-zeydi`… (tam liste betik çıktısında `kunye.asan_boyasiz`).
- **Eksik künye — mertebe (tahmin, ölçüm değil):** 1945 sonrası için ① ~100 mevcut künyenin
  `t:`si GENİŞLETİLİR (§3.5 sınıf ②: aynı polity sürüyor — Fransa, İsveç, ABD…) ② bugünkü ~195
  devletin kalan **~100-150'si YENİ künye** (sömürgeden çıkanlar, SSCB/Yugoslavya ardılları) ③ 1945-1991
  arasında yaşayıp ölen **~30-50** künye (DAC, Güney Vietnam, BAC, Kuzey/Güney Yemen, Çekoslovakya…).
  ⇒ **~250-300 künye işi** (genişletme + yeni), her birine boya.
  Natural Earth ↔ künye ad eşlemesi YAPILMADI (Türkçe id) — "kaç tanesi kesin eksik" **ölçemedim**.

### ③ YERLEŞİM — öngörü "~4000 uzatma, 50-200 yeni" · ölçülen **4129 zincir UC'ye ulaşıyor**
```
Toplam nokta                         4298
s/d/v zinciri UC'ye (1923-10-29) ULAŞAN  4129   ← UFUK açılırsa HEPSİ ertesi gün sahipsiz
zinciri UC'den önce biten                  17   (1350-1727 arası; dokunulmaz)
s/d/v'siz nokta                           152   (bos/kasıtlı dolgu; bugünkü 309 sahipsizin parçası)
kur: UC'den sonra                           0
bit: alanı olan 21 · bit UC'den sonra       0
pencere ucu UC'yi aşan                      3   — hepsi Şefşâven (1924-11-15 · 1926-05-27 · 🔴 9999-01-01)
```
UC günü `s:` sahibi: **115 kimlik / 4092 nokta**. Sahibin künyesi:
```
künyesi UC'yi AŞAN       98 kimlik · 3784 nokta
   o künyelerin t yılı (nokta ağırlıklı): 1945 → 2633 · 1991 → 428 (sovyet-rusya) · 1947 → 130 · 1925 → 108 (kacar) …
künyesi UC'de BİTEN      14 kimlik ·  285 nokta   — tbmm-turkiye 263 (ardılı turkiye-cumhuriyeti, BOYASIZ) · san-devletleri 5 …
`harita:` üzerinden     3 kimlik ·   23 nokta   — hicaz 13 (→hicaz-kralligi t 1925) · yemen 9 (→yemen-zeydi t 1962) · cimma 1 (→cimma-sultanligi t 1933)
                                                 (betiğim `harita:` eşlemesini bu satırda okumadı; elle doğrulandı, künyesiz DEĞİL)
```
- **Uzatılacak zincir: 4129** (tamamı). Bunların ~**2633**'ünün sahibi künye penceresi 1945'te
  biten devlet ⇒ künye işi bitmeden yerleşim 1945'i geçemez. `v:` (tâbi) penceresi UC'de biten: 36.
- **1923 sonrası KURULMASI gereken yeni nokta:** ölçemedim (dış liste gerekir). Mertebe tahmini:
  **~100-300** (yeni başkentler: Ankara zaten var; İslamabad, Brasília, Canberra, Abuja, Astana,
  Körfez/İsrail/Sovyet kentleri; ayrıca yeni devletlerin hiç noktası olmayan toprakları — §2 petek
  kuralı: noktasız bölge en yakın peteğe emilir).

### ④ SINIR — öngörü ~30 · ölçülen **0**
```
13 d_sinirlar_* dosyası · 801 üst kayıt · HEPSİ YÜKLÜ (paket_28/29)
f: UC sonrası 0 · t: UC'yi aşan 0 · t = UC tam  381  · her dosyada t_max = 1923-10-29
İç `tahdit` alt kayıtlarında UC sonrası tarih: 98 (avrupa_orta 29 · avrupa_bati 26 · d_sinirlar 19 · …)
```
⇒ Sınır katmanı 1923'te **kesilmiş**; 381 hat UC'de "devam ediyor" anlamında kapanıyor. 98 iç
tarih, 1923 sonrası tahdit/protokol bilgisinin metinde VAR ama hatta işlenmemiş olduğunu gösterir.

### ⑤ KADEME — `ONCELIK.md` ne diyor
- **Sıra VAR:** "ÖNCELİK 2 · 1923-2026 — AYNI hikâyenin devamı" (Osmanlı ardılları, mandalar, 1948,
  1991, II. Dünya Savaşı). ⚠️ Şartlı: *"ÖNCELİK 1'den sonra"* — 1281-1923 penceresinin (özellikle
  1900-1923) doldurulması önce gelir.
- **Durak VAR:** "İLERİ (1923 → bugün): 1. durak 1945 · 2. durak 1989 · 3. durak bugün".
- 🔴 **KALİTE KADEMESİ YOK:** Kalite merdiveni ve "hangi kademe nereye" tablosu 1923 sonrası için
  bölge/yoğunluk hedefi **söylemiyor** (tek iz: KADEME 5'te "1923 Türkiye haritası"). Hangi
  coğrafyanın 1923 sonrası hangi incelikte işleneceği **Emre'nin kararını bekliyor.**

### ⑥ TAVAN — UFUK açılırsa ne olur (MERTEBE)
| sayaç | bugün | UFUK açılır, veri uzatılmazsa | dayanak |
|---|---|---|---|
| sahipsiz (Değişmez 1) | 309 | **+~4.100** | 4129 zincir UC'de bitiyor (ölçüldü) |
| renksiz künye/harita deliği | 0 | **+28** hemen (UC'yi aşan boyasız) · +~250 künye işi boyasız doğar | ölçüldü / tahmin |
| ODAKSIZ | 485 tavan | **+~0-10** — 509 maddenin 500'ü ölçüldü: 0 ODAKSIZ | ölçüldü (500) |
| kaynaksız madde | — | **0** (509 madde de kaynaklı) | ölçüldü |
| Değişmez 2s AÇIK | 189 | **binler** (tahmin: 3.000-10.000 yerleşim kırılması; madde ihtiyacı yüzler) | ÖLÇÜLMEDİ — veri yok |
| Değişmez 2 (Osmanlı) | 0 | 0 — Osmanlı UC'de bitmiş | yapısal |
- 2s tahmininin gerekçesi: UC günü sahiplerinin büyükleri — sovyet-rusya 428, ingiltere 296,
  fransa-cumhuriyet 269, tbmm-turkiye 263, abd 224, kanada 188, italya 130, ingiliz-hindistani 120,
  cin-cumhuriyeti 120 — 1923-2026'da en az bir (çoğu 2-4) sahip değişimi geçirir (sömürgesizleşme,
  II. Dünya Savaşı işgalleri, 1949, 1991). 4129 nokta × 1-3 ⇒ binler mertebesi.

---

## 3. BULUNAMAYANLAR / ÖLÇEMEDİKLERİM
- **Kesin eksik künye sayısı:** Natural Earth (209 egemen) ↔ künye id eşlemesi yapılmadı. "~100-150 yeni" TAHMİNDİR.
- **1923 sonrası kurulması gereken yeni yerleşim sayısı:** dış liste yok — TAHMİN (~100-300).
- **Değişmez 2s artışı:** veri olmadığı için ölçülemez; mertebe tahmini yukarıda.

## 4. YAN BULGULAR (düzeltme ÖNERİSİ, uygulanmadı)
1. `turkiye-cumhuriyeti` künyesi **boyasız** ve 263 noktanın UC sahibi `tbmm-turkiye`nin ardılı ⇒ UFUK açılınca Türkiye haritada BOYANMAZ. Kampanyanın ilk kalemi olmalı.
2. Şefşâven `s:` penceresinde `t:"9999-01-01"` — sahte pencere ucu, UFUK açılınca motora "sonsuz" olarak girer.
3. (geri çekildi) `hicaz`/`yemen`/`cimma` künyesiz değil — `harita:` ile `hicaz-kralligi`/`yemen-zeydi`/`cimma-sultanligi`ne bağlı (devletler.js:1595/1215/1727).
4. `kronoloji_cok_1923_1945.js` başlığı "index.html'e BAĞLANMADI" diyor — bağlı. Bayat yorum.
5. `iran` künyesi `t:"2026-08-07"` — UC'yi aşan tek "bugüne kadar" künye; günün dayanağı kontrol edilmeli.

## 5. ÖNERİ — kampanyanın sırası (hüküm koordinatörde)
```
0  Emre kararı: kalite kademesi (hangi bölge, hangi incelik) + durak (önce 1945 mi?)
1  KÜNYE  ~100 genişletme (1945 pencere ucu → gerçek t) + 28 boya + ~100-150 yeni künye + boya
2  YERLEŞİM  4129 zincirin 1923→1945 uzatması (önce 1. durak) · ~100-300 yeni nokta
3  SINIR  381 UC hattının devamı + 98 iç tahdit kaydının hatta işlenmesi
4  KRONOLOJİ  1945 sonrası (bugün 6 madde dosyada + 53 künye-içi) — Değişmez 2s'nin istediği maddeler
5  TAM İNŞA koşusu (UFUK + app.js BITIS) — en sonda, hepsi bitince
```
📌 Doğal ilk durak **1945**: kronoloji 1923-1945 zaten 500 madde ile hazır; künye ve yerleşim de
o kuşağa göre kesilmiş. 1923→1945 bir **kampanya aşaması**, 1945→2026 ikinci ve daha büyük aşama.


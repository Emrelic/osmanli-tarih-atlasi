# D8-ONCE-OLCUM-1009 — Değişmez 8 + konum + H-0011/H-0003 piksel: koşu ÖNCESİ ayağı

Oturum: D8-ONCE-OLCUM-1009 (EMRELIC) · görevi veren YILDIRIM BAYEZIT · 10 Ekim 2026
Ağaç: `C:\atlas-d8once` = `origin/main` **`3429ead99fafdf3502fe2e70df735f4b9b381782`** (detached;
`git rev-list --count HEAD..origin/main` = 0, `ls-remote` ile de aynı sha).

## 0. ZEMİN — hangi harita ölçüldü
🔴 `C:\atlas\data\devletler_harita.js` (93.694.456 bayt, 4 Ekim 19:17, sha256 `66222e47…`)
**KULLANILMADI** — git'te yok, yerel bir çözüm, bayat (koordinatörün ACİL düzeltmesi).
Zemin, taze ağaçta takipli kodlanmış dosyalardan çözüldü:
```
py arac/kodla.py coz-c data data/devletler_harita.js          → 181.080.905 bayt · sha256 82cc12240c46abf956360c4d4056e4b8fffb0217c9f8eb3672e99fabc95af01c
py arac/kodla.py coz-c data data/donemler.js donem            →  61.296.467 bayt · sha256 5469235ff7b52b6335b962c206550aedd3ce2163ce01d140af4b6eb661ec49e7
py arac/kodla.py coz-c data data/petek_govde.js govde         →  11,06 MB        · sha256 311ec0475946…
py arac/kodla.py kapi data                                    → 4/4 ✓ (devlet · donem · govde · ufuk_bant)
```
Kaynak: `data/devlet_harita_ust.js` 3.148.869 bayt (takipli, `index.html:1759`) + `data/devlet_parcalar.js`.
⇒ Aşağıdaki her sayı **YAYINDAKİ haritanın** (KOŞU 21 gövdesi, 7 Ekim) ölçümüdür, bugünkü
`yerlesimler*.js` verisinin DEĞİL. Veri o koşudan sonra değişti; harita değişmedi.
(Not: yerel 4 Ekim kopyası ile yayındaki gövde **farklı sha** — ikisi karıştırılmamalı.)

## 1. ÖNGÖRÜ — ölçümden ÖNCE yazıldı (10 Ekim, ölçüm koşulmadan)
**①  `denetle.py` çıkış kodu:** gövde damgası (`_d8_govde_kimlik`) bu ağaçta TUTACAK (çözülen sha
= `__DP_SHA` / `__PR_SHA`) ⇒ D8 bu kez `OLCULEMEDI_KOVA`ya "dosya yok/uyuşmuyor" sebebiyle DÜŞMEYECEK.
Kova: boş ya da yalnız bağımlılık dışı bir kalem. Çıkış: **1** (olasılık ~%55) — sebep: `BEKLENEN_D8A=1508`
4 Ekim 11:37 gövdesinde ölçüldü, yayındaki gövde KOŞU 21 ⇒ sayı oynar; yukarı oynarsa ihlal. Aksi hâlde 0.
**②  8a ∈ [1400, 1700], nokta tahmin 1520 · 8b ∈ [70, 100], nokta tahmin 84 · konum (kara maskesi dışı) = 0.**
**③  H-0011 (Tokat–Sivas, 1405-01-01, z8):** motor 7 Ekim'den beri değişmedi ⇒ dişler DURUYOR; renk
sınırı sayımında Tokat/Sivas sahipleri arasında birden çok bağlı bileşen (parmak) görünür.
**H-0003 (Iğdır/Doğubayazıt, 1400-01-01, z8):** Karakoyunlu'nun kuzeye uzanan iki dar dili DURUYOR.
(Piksel ölçütünün sayısal öngörüsü yok — ölçüt bu oturumda tanımlandı, önceki sayı yok; ⇒ yalnız nitel öngörü.)

## 2. ÖLÇÜM ① — `py arac/denetle.py` ÇIKIŞ KODU (EMRELIC, ağaç 3429ead9 + çözülmüş yayın gövdesi)
Komut: `py arac/denetle.py > denetle.out 2> denetle.err; echo "CIKIS=$?"` — **boru YOK**, kod komutun kendisinden.
```
CIKIS=1      SONUÇ: İHLAL VAR — çıkış kodu 1      stderr: 0 satır
✗ satırları (yalnız iki):  Değişmez 8a  ·  Değişmez 8k
```
**`OLCULEMEDI_KOVA` — 1 kalem, ADIYLA:**
```
• Değişmez 8 körlük — defterde olmayan 18 (hat,gün) körleşti, 11 hat: d1918-kenya-almanya-dogu-afrika,
  d1919-hu-cs-fiili-2, d1919-hu-cs-fiili-3, d1919-pl-ro-fiili, d1923-pl-ro, d1923-si-ih-2,
  g3-bg-ro-tuna-p1, g3-bg-ro-tuna-p2, g3-bg-ro-tuna-p3 … (tam liste denetle.out.txt:345-360)
```
**Kovada OLMAYANLAR:** gövde kimliği (`_d8_govde_kimlik`) — damga TUTTU, D8 koştu · shapely/rasterio
bağımlılığı — eksik değil · konum denetimi — koştu. ⇒ LAB'ın çıkış 2'si (D8 "dosya yok/uyuşmuyor")
burada YOK; EMRELIC'te çıkışı belirleyen **gerçek ihlal (8a)**, ölçülemeyen soru değil.
⚠️ Kodun 1 olması kovayı gizlemiyor: 8k körlüğü hükümde ayrıca basılıyor.

## 3. ÖLÇÜM ② — Değişmez 8 + konum (YAYINDAKİ gövde — KOŞU 21, 7 Ekim; veri bugünkü)
```
8a  ✗  1517 birim  (tavan BEKLENEN_D8A 1508 ⇒ +9)  · ≥5 km · 710 (hat,gün) ölçüldü · uret_petek 108ec62b
8b  ✓    82 (bölge,gün) (tavan BEKLENEN_D8B 82 ⇒ ±0) · ≥50 km² ve ≥%1
8k  ✗  78 TAM KÖR hat (49'u D/E/F tavan sınıfı) · 22 yarım · 178 (hat,gün) · defter 172 üye
       defterde olmayan 18 (hat,gün) körleşti (11 hat) · defterde olup artık ölçülen 12
8m  ✓  450 hat = 366 ölçülen + 78 tam kör + 6 atlanan + 0 muhasebe dışı
ayrı kovalar  C/YOK hattı taşması 896 · ölçülemeyen (hat,gün) 178 · süre 116+14 sn
YENİ KAPSAM   defterde olmayan 2 hatta 4 birim — tavana KATILMADI
konum ✓  0 nokta kara maskesinin dışında (beklenen 0)
```
8a "YENİ" birimler (15) ve 8b "YENİ" (1: Yaş|1877-05-08): `denetle.out.txt:365-380`.
⚠️ **İKİ ZAMAN KARIŞIK — okurken ayır:** D8'in GÖVDESİ yayındaki haritadır (KOŞU 21, 7 Ekim),
D/E/F HATLARI ve yerleşim noktaları ise `3429ead9`daki bugünkü veriden okunur. Yani 8a'nın +9'u
"harita kötüleşti" DEMEK DEĞİLDİR: harita 7 Ekim'den beri aynı; değişen, hatlar/noktalar ile tavanın
ölçüldüğü gövde (4 Ekim 11:37 — `denetle.py:4967` şerhi). Hangisinin payı ne kadar **ÖLÇÜLMEDİ**.
⚠️ Çıktıdaki "gövde 2026-10-10 00:02" damgası çözülmüş dosyanın **mtime**'ıdır (bu gece çözüldü),
gövdenin üretim günü DEĞİL — üretim kimliği sha256 `82cc1224…` (§0).
Yan bilgi (soru değil): D7 739 sorgusuz enklav (beklenen 731, 🧊 — ihlal sayılmıyor) · D2 628/0 ·
2s 1738/181 AÇIK (tavan 181) · 174 YIL-TEMSİLÎ · D1 309. (§1.5 tablosu 627/1727/184/167 diyor — bayat.)

**ÖNERİ (tavan YAZILMADI, §3.4④):** koşu ÖNCESİ sabit olarak 8a=1517 · 8b=82 · konum=0 · 8k tam kör=78.
`BEKLENEN_D8A`yı 1517'ye çekmek bir GERİLEMEYİ tavana yazmak olur (§3.4①) — önce +9'un hangi
(hat,gün,üye)lerden geldiği ayrılmalı (`--ayrinti`, 1508'in ölçüldüğü defterle fark). Koşu SONRASI
aynı komutla tekrar edilince karşılaştırma bu dört sayıya karşı yapılır.
📌 Bu sayaca benim dışımda kaç diff dokunuyor: **bilmiyorum, ölçmedim** (HAZIR-KITA §4.2) — 8a gövde +
hat + nokta üçüne de bağlı; kuyruktaki her `d_sinirlar*`/`yerlesimler*` diffi dokunabilir.

## 4. ÖLÇÜM ③ — H-0011 · H-0003 piksel ÖNCE ayağı
**Araç:** `denetim/ARAC-GORUNTU-0087.js` — ⚠️ **`main`de YOK**; `origin/makine/umit` 9ae6a53e'de,
blob `ee10054f785634134f3e8e37d4ac779c7297a1a5`. Ağaca `git show` ile alındı, COMMITLENMEDİ
(GORUNTU-0087'nin dosyası). SONRA ayağı aynı blob'la koşmalı.
**Parametreler (SONRA için birebir):**
```
sunucu   py -m http.server 8796 --bind 127.0.0.1   (kök = ağaç; yayın gövdesi kodlanmış dosyalardan)
komut    node denetim/ARAC-GORUNTU-0087.js 8796 <sahne.json> <klasör>
Chrome   --headless=new --use-gl=swiftshader --window-size=1400,900 · harita tuvali 886×732 px
sahne    D8-ONCE-OLCUM-1009/sahne.json  (sor = D8-ONCE-OLCUM-1009/sor.js, sahneye birebir gömülü)
H-0011   gün 1405-01-01 · merkez [36.6, 39.6] · z 8   (Tokat–Sivas; GORUNTU-0085'in penceresi)
H-0003   gün 1400-01-01 · merkez [44.1, 39.75] · z 8  (Iğdır/Doğubayazıt; gün BENİM SEÇİMİM —
         DOGU-ANADOLU-0085 yalnız "1386-1408" aralığı veriyor, tek gün yazmıyor)
ölçüt    10 px adımlı ızgara (88×73), her hücre queryRenderedFeatures, katman önceliği
         osmanli-dolgu > himaye-dolgu > devlet-dolgu, etiket = properties.id
         · sahip_degisim_kenari = farklı sahipli komşu hücre çifti (sınır uzunluğu vekili — diş UZATIR)
         · bilesen = sahip başına 4-komşulu bağlı bileşen · kucuk_bilesen_lt20 = <20 hücrelik bileşen
```
**Sonuç:**
```
H-0011  hücre: mehmed-celebi 1968 · dulkadir 1964 · timurlu 697 · memluk 637 · haciemir 624 · karaman 530
        sahip_degisim_kenari 391 · bilesen: timurlu 6, öteki beşi 1'er · kucuk_bilesen_lt20 5
H-0003  hücre: timurlu 4609 · karakoyunlu 1728
        sahip_degisim_kenari 197 · bilesen: timurlu 2, karakoyunlu 2 · kucuk_bilesen_lt20 2
```
Görüntüler: `D8-ONCE-OLCUM-1009/SINAV-GORUNTU-0087-H0011-…png` · `…-H0003-…png`. Gözle: H-0011'de
Çelebi Mehmed (kırmızı) gövdesinden Timurlu valiliğine **3 dar parmak** (Tokat'ın güneyi) ·
H-0003'te Karakoyunlu'dan kuzeye, Aras ovasına **2 dar dil** (Iğdır'ın batısı · Iğdır–Beri arası).
⚠️ Izgara 10 px — 1-2 hücre enli bir parmak ızgaradan kaçabilir; **kenar sayısı vekildir, diş sayısı
DEĞİLDİR.** Diş sayısı gözle sayıldı (3 · 2). SONRA ayağında ikisi birden karşılaştırılır.

## 5. ÖNGÖRÜ DEĞERLENDİRMESİ
```
① çıkış 1 (~%55)                       → 1            TUTTU
   kova: boş ya da bağımlılık dışı 1   → 1 (8 körlük) TUTTU
   gövde damgası tutar, D8 koşar       → koştu        TUTTU
② 8a ∈ [1400,1700], tahmin 1520        → 1517         aralık TUTTU · nokta −3
   8b ∈ [70,100], tahmin 84            → 82           aralık TUTTU · nokta −2
   konum 0                             → 0            TUTTU
③ H-0011 dişler duruyor                → 3 parmak     TUTTU
   H-0003 iki dil duruyor              → 2 dil        TUTTU
```

## 6. BULAMADIM
- 8a +9'un kaynağı (gövde mi, hat mı, nokta mı) — ayrılmadı.
- H-0003 şikâyet görselinin TEK günü — kayıtta yok; 1400-01-01 seçildi.
- `ARAC-GORUNTU-0087.js`in `main`e inip inmeyeceği — benim kararım değil.

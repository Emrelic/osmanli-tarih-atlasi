# C3 — YÜRÜYÜŞ DİŞ SÜZGECİ (motor yaması hazırlığı) · 9 Ekim 2026

Taban: `origin/main` 79115d23 · worktree `C:\atlas-umit-c3` · motor KOŞTURULMADI.
Kök teşhis: `GORUNTU-0085.md` H-0011 (Sivas) · `DOGU-ANADOLU-0085.md` §10 H-0003 (Iğdır).

## 0. ÖNGÖRÜ — ÖLÇÜMDEN ÖNCE YAZILDI (2026-10-09 23:28, sınav dosyası henüz YOK)

**Sınav anı:** bu satırlar yazılırken `ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py` ve süzgeç işlevi
henüz yazılmamıştı. **Evren:** sentetik ızgaralar (aşağıdaki kurgular) + gerçek motor ızgarası
(`_YR_SAHIP`, ~7200×2900 hücre, yerleşim-indisi etiketli).

Tasarım (ayrıntı §1): etiket = YERLEŞİM indisi (Dijkstra sahibi), devlet DEĞİL. Hücre ancak
① geçerli (kara + erişilmiş, etiket ≥ 0) ② tohum hücresi değil ③ "ince" (kendi etiketinin
hiçbir 3×3 tekdüze penceresinde değil = 3×3 açılmanın dışında) ④ 8 komşusunun **≥ 5**'i
TEK bir başka etiket (b) — deniz/maske dışı/boğaz-yasaklı komşu oy VERMEZ ⑤ basit nokta
(kendi etiketli komşuları halkada ≤ 1 kesintisiz dizi) ise b'ye çevrilir. 4 alt alan × en çok
`YURUYUS_DIS_TUR` tur.

Öngörüler (sentetik):
1. 1 hücre enli diş, boy 4 · 6 · 10 → yamasız KALIR, yamalı tamamen SİLİNİR (0 hücre kalır).
2. 2 hücre enli diş, boy 4 · 6 · 10 → yamasız kalır, yamalı silinir.
3. Çapraz (merdiven) 1 enli diş, boy 6 → silinir.
4. 3 hücre enli çıkıntı, boy 6 → İKİ KOLDA DA AYNEN kalır (değişen hücre 0).
5. Düz sınır, 45° çapraz sınır, büyük bölgenin 90° dış köşesi → değişen hücre 0
   (köşe "ince" değildir: 3×3 tekdüze pencereye girer).
6. KIYI: denize yaslanan iki sahip sınırı, kıyı boyunca 1 enli şerit, 1 enli yarımada, 1 hücrelik
   ada, kıyıya dayanan 1 enli diş → değişen hücre 0 (deniz oy vermez, b ≥ 5 tutmaz).
   Deniz/maske dışı hücre hiçbir kurguda değişmez (etiket −1 kalır).
7. KORİDOR: iki yanı deniz 1 enli aynı-sahip şeridi → 0 değişim; iki sahip arasında 1 enli
   kıstak (kuzey a, güney b, iki yan deniz) → 0 değişim; b toprağının İÇİNDEN geçip iki a
   gövdesini bağlayan 1 enli boyun → 0 değişim (basit nokta değil); boğaz-yasaklı karşı kıyıdaki
   b komşuları oy vermez → boğaz kıyısındaki ince şerit 0 değişim.
8. Üç sahipli kurgu: a dişi b ile c arasındaki sınırda (komşuların ≤ 4'ü b, ≤ 4'ü c) → diş
   ucu b ya da c'den biri ≥ 5 olana kadar KALIR; uç tamamen b'ye gömülü kısım silinir.
   Yani üçlü kavşaktaki dişler KISMEN kalabilir — bu kasıtlı tutuculuktur.
9. Bağlantılılık: her kurguda her etiketin 8-bileşen sayısı süzgeçten sonra AYNI ya da
   yalnız silinen diş kadar azalmış; hiçbir tohum hücresi değişmez.
10. Ölü uç sınırı: b içinde ölü uçlu, 1 enli, 30 hücre boyunda gerçek bir a dili → en çok
    `TUR`'a bağlı bir boy yenir, dilin geri kalanı KALIR (tavan ölçülecek ve raporlanacak:
    öngörü 10 tur ile 10-20 hücre).

Öngörüler (gerçek ızgara):
- Gerçek `_YR_SAHIP` diskte YOK (önbellek katmanları `k1 · col · kusat · dolgu · govde · osm · sb`
  — hiçbiri Dijkstra sahiplik ızgarasını saklamıyor; ızgara her koşuda yeniden hesaplanıyor).
  Öngörü: **ÖLÇÜLEMEDİ: gerçek ızgara yok, koşu gerekir.** Yama, sayıyı KOŞUNUN LOGUNA basar.
- Log için sayısal öngörü (koşu sonrası karşılaştırılacak): erişilen kara hücresinin
  **%0,05-%0,5**'i değişir (≈ 4.000-40.000 hücre); H-0011 penceresi (35,0-38,5D × 38,8-40,6K)
  **20-150** hücre; H-0003 penceresi (43,3-44,8D × 39,3-40,2K) **10-80** hücre.
  Dişlerin ≤ 2 hücre enli uç kısmı silinir, ≥ 3 hücre enli gövdesi KALIR ⇒ H-0003'te diş
  boyları ~14-18 km kısalır, sıfırlanmaz (≤3 hücre bölümü 20-29 km ölçülmüştü).

---
*(Bu çizginin altı ÖLÇÜMDEN SONRA yazıldı.)*

## 1. Tasarım ve gerekçe

**Yer.** `arac/uret_petek.py`, `MOTOR_YURUYUS` bloğu: `_YR_SAHIP = _np.fromiter(_kvsahip, …)`
satırının hemen ARKASI. `_yr_R`, karar bölgesi, bütçe konturu, Voronoi değişimi (`_yr_G`), epok
onarımı ve `_SR_IZ` bu noktadan SONRA gelir. Böylece `_YR_SAHIP`ı okuyan her tüketici
süzülmüş ızgarayı görür.
- **Etiket YERLEŞİM indisidir, devlet değil.** Izgara tarihten bağımsız olarak bir kez çözülür.
  Iğdır (timurlu) ile Doğubayazıt (karakoyunlu) arasındaki diş, iki yerleşimin hücre
  sınırındaki dişlerdir. Süzgeç de bir kez koşar (tarih başına değil).
- **Dokunulmayanlar:** `_kvsahip` (liste) değişmez, çünkü BTB ayrışma sınavı
  (`_btb_s1 == _kvsahip`) ve `_kv_bilesen` onu okur. `_kvuzak`/`_yr_u` (bedel) de değişmez:
  bütçe konturu sahipten bağımsızdır.
- **Saf işlev** `_yr_dis_suzgec(sahip, tohum, yasak, tur, esik)` motor dosyasının İÇİNDE
  tanımlı. Ayrı modül olsaydı motor tuzuna GİRMEZDİ (`girdi.motor_izi()` yalnız
  `uret_petek · renkler · girdi`yi özetler) ve değişikliği önbelleği bayatlatmazdı. Sınav
  işlevi AST ile çeker (`ARAC-MOTOR-NEHIR-0916` deseni).

**Kural — bir hücre ancak beş şartın beşi de tutarsa komşu sahibe geçer:**
1. **Geçerli:** etiket ≥ 0 (kara + Dijkstra'nın eriştiği). Deniz, maske dışı ve karar dışı
   hücre ASLA değişmez.
2. **Tohum hücresi değil** (Değişmez 1).
3. **İNCE:** kendi etiketinin hiçbir 3×3 tekdüze penceresine girmiyor (9 hücrenin 9'u da aynı
   ve geçerli olan pencere; yani 3×3 açılmanın dışı). ⇒ ≥ 3 hücre enli çıkıntı, düz sınır,
   45° sınır ve büyük bölgenin dış köşesi aday bile olmaz. İnce olmayan hücre, çevirmelerle
   ince hâle gelemez (çevrilen her hücre zaten hiçbir tekdüze pencerede değildi). Bu yüzden
   incelik bir kez hesaplanır.
4. **ÇOĞUNLUK:** 8 komşunun en az `YURUYUS_DIS_ESIK` (5) tanesi TEK bir başka etiket olmalı.
   Deniz, maske dışı ve `_KVSU` boğaz yasağına takılan komşuluk OY VERMEZ ⇒ kıyıda çoğunluk
   denizle kurulamaz. Kıyıya yaslanan şerit, yarımada, kıstak ve boğaz kıyısı bu şartla
   korunur.
5. **BASİT NOKTA:** kendi etiketli komşuları 8'li halkada en çok 1 kesintisiz dizi oluşturur
   (halkada ardışık = 4-komşu; köşegen dokunuşu bağ sayılmaz, çünkü poligonlaştırma
   `connectivity=4`). Çevirmek kendi bölgesini BÖLEMEZ ⇒ iki gövdeyi bağlayan 1 enli boyun
   kalır, ölü uçlu diş UCUNDAN yenir.

**Yürütme.** Dört alt alan (satır/sütun paritesi) sırayla işlenir. Aynı alt alandaki hücreler
8-komşu değildir, bu yüzden eşzamanlı çevirme topolojiyi bozamaz. Tur üst sınırı
`YURUYUS_DIS_TUR=10`. Çevrilen hücre bir daha aday olmaz.

**Niçin "yalnız iki sahipli sınır" ve tutuculuk.** Tasarım yanlış-negatife (diş kalır) yatkındır,
yanlış-pozitife (gerçek toprak gider) değil. Üçlü kavşaktaki diş KALIR, kıyıya dayanan diş
KALIR. Silinen yalnız TEK bir komşu sahibin içine gömülü ince uçtur.

**AÇ/KAPA.** `YURUYUS_DIS_SUZGECI = True` (tek satır) + ortamdan `MOTOR_YURUYUS_DIS_KAPALI=1`.
🔴 **İKİSİ DE TUZU DEĞİŞTİRİR:** sabit değişirse `uret_petek.py` özeti (`_MOTOR_IZI`) değişir.
Ortam değişkeni `MOTOR_` önekli olduğu için `_ONB_TUZ`a girer. Yani kapatmak da TAM YENİDEN
İNŞA demektir: "sorun çıkarsa tek satırla kapatırız" ucuz bir geri dönüş DEĞİLDİR. Ayrıca
`_SR_IZ` `_YR_SAHIP.tobytes()`u özetler; süzülmüş ızgara oradan da anahtarı değiştirir.

**Log satırı (koşu bunu basar; sayılar oradan okunur, `§2`):**
`🦷 DİŞ SÜZGECİ: değişen hücre N / erişilen M (%x) · tur [...] · yasak kenar K · H-0011 Sivas
pen. n1 · H-0003 Iğdır pen. n2 · t sn (ÖNGÖRÜ: …)`. Geçersiz bir hücre değişirse koşu DURUR
(`SystemExit`).

## 2. Sınav sonuçları — `py denetim/ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py [--hiz]`

İşlev, `origin/main` + diff'ten (geçici dizinde `git apply`) AST ile çekildi. Yamasız kol
`origin/main`in kendisidir: süzgeç kaynakta YOK ⇒ özdeşlik (sınav bunu kaynakta arar).
**176/176 geçti, çıkış 0, ~3 sn.** Her kurguda ortak olarak sınandı: deniz/maske dışı hücre
değişmedi · tohum değişmedi · hiçbir sahibin 8-bileşen sayısı artmadı · yamasız kol özdeş.

```
yön kurgu                                         yamasız  yamalı  tur
A  diş 1×4 / 1×6 / 1×10                             0      4/6/10  ≤7     SİLİNDİ (kalan 0)
A  diş 2×4 / 2×6 / 2×10                             0      6/10/18 ≤6     satır≥21 kalan 0 · TABAN 2 hücre
A  çapraz (8-bağlı) diş 1×6                         0      6       5      SİLİNDİ
A  zikzak (4-bağlı) diş 1×6                         0      6       4      satır≥21 kalan 0 · TABAN 2 hücre
A  3 enli çıkıntı 3×6 (GERÇEK)                      0      0       -      AYNEN
A  düz sınır · 45° sınır · 90° dış köşe             0      0       -      AYNEN
B  kıyıya dayanan iki sahip sınırı                  0      0       -      AYNEN
B  kıyı boyunca 1 enli şerit (b kıyısında)          0      0       -      AYNEN
B  kıyı şeridi + şeritten iç karaya 3 hücre diş     0      3       3      şerit AYNEN, iç diş silindi
B  1 enli yarımada · 1 hücre uzak b adası ·
   a'nın 2 hücrelik adası · ızgara kenarı şeridi    0      0       -      AYNEN
C  Perekop: 1 enli aynı-sahip kıstağı               0      0       -      AYNEN, tek bileşen
C  iki sahip arası 1 enli kıstak                    0      0       -      AYNEN, iki pay da tek bileşen
C  b içinden geçen 1 enli boyun (iki a gövdesi)     0      0       -      AYNEN, bağlı
C  b içinden geçen eğik boyun                       0      2       2      boyun AYNEN; 2 b-çentiği doldu
C  boğaz kıyısı 1 enli şerit (yasak kenarlı)        0      0       -      AYNEN
C  AYNI şerit YASAKSIZ (teşhis)                     0      20      10     ← yasak OLMASA şerit yenirdi
U  üçlü kavşakta diş (b|c arasında)                 0      0       -      KALDI (kasıtlı tutuculuk)
U  üçüncü sahip uzakta, diş b içinde                0      6       5      SİLİNDİ
T  ölü uçlu 1 enli dil, boy 30                      0      19      10     tavan: 19 hücre yendi
T  ölü uçlu 2 enli dil, boy 30                      0      38      10     tavan: 19 satır yendi
HIZ 2900×7200 · 4300 tohum · %3 gürültü             -      10.958  3      1,2 sn
```

**Öngörü ↔ ölçüm (§0):**
- (1) 1 enli diş: TUTTU. (3) çapraz diş: TUTTU. (4) 3 enli çıkıntı: TUTTU. (5) düz/45°/köşe:
  TUTTU.
- (2) 2 enli diş "tamamen silinir": **TUTMADI.** Dişin taban satırında 2 hücrelik, 1 satır
  yüksekliğinde bir BASAMAK kalıyor. Sebep: taban hücresinde a=4 / b=4 berabere, `ESIK=5`
  tutmuyor. Zikzak dişte de aynısı. Kalan = 1 hücre (≈ 4-5,5 km), yani `YURUYUS_SADE`
  ölçeği. Sınav kıstası buna göre "satır ≥ 21'de 0 + taban ≤ 2 hücre" olarak YAZILDI ve sapma
  her koşuda basılıyor. `ESIK=4` bu basamağı silerdi ama kıyıdaki şerit ucunu (b=4) da
  çevirirdi; bu yüzden tercih edilmedi.
- (6) kıyı: TUTTU. Ancak bir kurgu YANLIŞ kurulmuştu: "kıyıya dayanan diş" aslında kıyı
  şeridinden İÇ KARAYA uzanan bir dişti. Doğru davranış onu silip şeridi korumaktı; ölçüm tam
  bunu gösterdi. Sınavda düzeltme notuyla duruyor.
- (7) koridor: TUTTU, bir nüansla. Eğik boyunda, boynun iki ucundaki 1 hücrelik b ÇENTİĞİ a'ya
  geçti (b'nin kendi ince hücresi, ≥ 5 a komşulu). Boyun hücreleri aynen duruyor, bağlantı
  korunuyor. Süzgeç simetriktir: a'nın dişi kadar b'nin çentiği de düzelir.
- (8) üçlü: TUTTU (kavşaktaki diş kalır).
- (10) ölü uç tavanı: öngörü 10-20 hücreydi; ölçüm **19** (1 enli) · **19 satır** (2 enli).
  ⇒ `TUR=10` ile ≤ 2 hücre enli, ölü uçlu bir dilden en çok ~19 hücre (≈ 80-105 km) yenebilir.

## 3. Gerçek ızgarada ölçüm — **ÖLÇÜLEMEDİ: gerçek ızgara yok, koşu gerekir**

Ölçüldü: `C:\atlas\_motor_onbellek\motor_onbellek.sqlite` (salt okunur açıldı) katmanları
`col 1078 · dolgu 4354 · govde 4210 · k1 4 · kusat 3076 · osm 887 · sb 907`. Dijkstra sahiplik
ızgarası (`_kvsahip`/`_YR_SAHIP`) HİÇBİR katmanda yok. `uret_petek.py`de ızgarayı diske yazan
satır yok. `C:\atlas-umit` ve `veri-kaynak/` altında `.npy/.npz/sahip*.pkl` yok.
`data/devletler_harita.js` (C:\atlas-umit, 4 Ekim, bayat) bir DEVLET gövdesidir ve Chaikin ile
sadeleştirmeden geçmiştir; yerleşim ızgarası değildir. Bu yüzden vekil olarak KULLANILMADI:
farklı bir nesneyi ölçüp sayı vermek, ölçmemekten daha tehlikelidir.
⇒ §0'daki sayısal öngörü (%0,05-0,5 · Sivas 20-150 · Iğdır 10-80) **koşunun log satırıyla**
karşılaştırılacak; satır öngörüyü kendi içinde taşıyor.
Sentetik hız ölçümü: tam boyutlu (2900×7200) ızgarada **1,2 sn**. Koşu bütçesine etkisi yok.

## 4. İki tabana uyum (`git apply --check`)

```
diff: C3-YURUYUS-SUZGEC-1009.diff · 8.617 bayt · CR 0 · BOM yok · tek dosya (arac/uret_petek.py, +128 −0)
sha256 d5e753de4194bacdbeeeda3379630f390fd22135d79688358aca019e74f58eee
① temiz origin/main 79115d23                           --check ✓
② origin/main + ZAMAN-PAKET-1009-v2.diff (-C1)         --check ✓ · uygulandı · py_compile ✓
③ ters sıra: main + C3, sonra ZAMAN-v2 --check -C1     ✓
```
ZAMAN-v2'nin `uret_petek.py` parçası ~2900. satırda (`_YASLAMA_IPTAL`), C3 ise ~1177. ve
~1856. satırlarda. Örtüşme yok; paket tabanına göre ayrı türetme GEREKMEDİ.

## 5. Risk değerlendirmesi — neyi bozabilir

1. **Gerçek ince toprak yenebilir** (en büyük risk). b'nin içine gömülü, ≤ 2 hücre enli, ölü
   uçlu GERÇEK bir a dili (dar bir vadi boyunca gerçekten a'ya ait toprak) ucundan en çok
   ~19 hücre yenir. Izgara bunu dişten AYIRT EDEMEZ; yalnız kıyı/deniz ve üçlü kavşak ayırt
   eder. Azaltma seçeneği: `TUR` 10 → 5 (tavan ~10 hücre ≈ 50 km; ölçülen dişler 14-50 km).
2. **2 enli dişin 1 satırlık taban basamağı kalır** (§2): bu tam silme değil, kısaltmadır.
3. **3 enli diş gövdeleri KALIR.** H-0003'te ≤ 3 hücre enli bölüm 20-29 km ölçülmüştü; süzgeç
   yalnız ≤ 2 hücre enli uçları (14-18 km) alır. Görselde "diş tamamen gitti" beklentisi
   KURULMAMALI. Ölçüt, koşu sonrası z8/z9 piksel ızgarasıyla (`ARAC-GORUNTU-0087.js`)
   önce/sonra karşılaştırmasıdır.
4. **Epok onarımı süzgeçsiz kalır.** `_yr_epok_onar`, ölen yerleşimin hücrelerini yerel
   Dijkstra ile dağıtır; orada YENİ diş doğabilir ve süzgeç uygulanmaz. Ayrıca onarımın halka
   kaynakları `_kvuzak[k]`yı (ESKİ sahibin bedeli) yeni sahibin bedeli gibi okur. Bu yalnız
   çevrilmiş hücrelerde ve eşit-maliyet cephesinde olur, sapma küçüktür. Ölçülmedi.
5. **Değişmez 1 / 8a-8b:** tohum korunduğu ve deniz değişmediği için sahipsizlik artmamalı.
   8a (D hattını aşan petek) dişler kısaldığı için AZALABİLİR, artması beklenmez. Ama 8a/8b
   motor çıktısını ölçer, koşudan önce bilinemez; tavanlar koşu sonrası ölçülür (`§3.4`).
6. **Tuz:** tam yeniden inşa ister (C3 zaten tam inşa koşusuna planlı). Kapatmak da tuzu
   değiştirir.
7. **16 komşulu koşu (`MOTOR_YURUYUS_16=1`):** bölgeler, at hamlesiyle bağlanan ve 8-komşulukta
   kopuk parçalar içerebilir. Süzgeç böyle tek hücrelik bir kırıntıyı (≥ 5 b komşulu) b'ye
   katar. Bu zararsız, hatta istenen bir sonuç; ancak sınavda 16 komşu kurgusu YOK.
8. `_KVSU` yasağı yalnız 8 halka yönü için çevrildi. 16 komşunun at hamlesi kenarları süzgeçte
   oy kavramına girmez; süzgeç zaten yalnız 8 komşuya bakar.

## 6. Ölçtüm · bulamadım · istiyorum

- **Ölçtüm:** 29 sentetik kurgu, 176 sınav, iki kol. Diş (1-2 enli, 4-10 boylu) yamalı kolda
  silindi; 2 enlide 1 satırlık taban basamağı kaldı. Kıyı, maske, boğaz, koridor, kıstak ve
  boyun iki kolda aynı. Ölü uç tavanı 19 hücre. Tam boyutta hız 1,2 sn. Diff iki tabanda ve ters
  sırada ✓.
- **Bulamadım:** gerçek Dijkstra sahiplik ızgarası diskte YOK ⇒ gerçek değişen hücre sayısı ve
  H-0011/H-0003 pencere sayıları **ÖLÇÜLEMEDİ** (koşu gerekir; log satırı basacak).
- **İstiyorum:**
  ① Koordinatör yamayı C3 tam inşa koşu paketine alsın; ZAMAN-v2'den sonra ya da önce,
  ikisi de ✓.
  ② `TUR` kararı: 10 ile ≤ ~19 hücre, 5 ile ≤ ~10 hücre yenir. Önerim **10** (ölçülen dişler
  50 km'ye kadar), ama risk 1 Emre'nin "gerçek dar vadi" hassasiyetine bağlı.
  ③ Koşu sonrası H-0011 (Sivas ~1403-1407) ve H-0003 (Iğdır 1395) için `ARAC-GORUNTU-0087.js`
  ile önce/sonra piksel ölçümü. "Diş silindi" iddiasının haritadaki kanıtı ancak bu olur.
  ④ D1 · D8a/8b önce/sonra.

YENİ DOSYALAR: `denetim/C3-YURUYUS-SUZGEC-1009.diff` · `denetim/ARAC-C3-YURUYUS-SUZGEC-SINAV-1009.py`
· `denetim/C3-YURUYUS-SUZGEC-1009.md`

---

## § tur 5 (koordinatör hükmü) — 9/10 Ekim 2026 gecesi

**Hüküm (koordinatör):** C3 bu geceki koşuya GİRMİYOR; bir sonraki tam inşa partisinin İLK
kalemi olacak. `YURUYUS_DIS_TUR = 5` (10 değil). Gerekçe: ayakta kalan diş BEYANLI bir
kusurdur, yenilmiş koridor SESSİZ bir kusurdur (BES-ALTYAPI ⑤ koridor); oran eşitse hata
BEYANLI tarafta yapılır. Hüküm ve gerekçe diff'te sabitin üstüne yorum olarak yazıldı.
⇒ §5 risk 1 ve §6 ② (önerim 10) bu hükümle KAPANDI; §2 tablosu TUR=10 içindir.

**Öngörü (koordinatörün):** ölü uç tavanı ~10 hücre. Ölçüm aşağıda.

```
kurgu                              TUR=10 (önce)            TUR=5 (sonra)
diş 1×4                            4 sil · kalan 0          4 sil · kalan 0
diş 1×6                            6 sil · kalan 0          6 sil · kalan 0
diş 1×10                          10 sil · kalan 0          9 sil · kalan 1   ← TUR TAVANI
diş 2×4 / 2×6                      kalan 2 (taban)          kalan 2 (taban) — değişmedi
diş 2×10                          18 sil · kalan 2 (taban) 18 sil · kalan 2 (taban) — değişmedi
çapraz 1×6 · zikzak 1×6            kalan 0 · 2              kalan 0 · 2 — değişmedi
üçüncü sahip uzakta, diş b içinde  kalan 0                  kalan 0
ölü uçlu 1 enli dil, boy 30        19 hücre yendi           9 hücre yendi
ölü uçlu 2 enli dil, boy 30        19 satır (38 h.)         9 satır (18 h.)
boğaz şeridi YASAKSIZ (teşhis)     20 yenirdi               10 yenirdi
kıyı · koridor · kıstak · boyun ·
3 enli çıkıntı · köşe · düz sınır   değişmedi                değişmedi (birebir aynı)
HIZ (2900×7200, %3 gürültü)        1,2 sn                   1,1 sn
sınav                              176/176                  187/187, çıkış 0
```

- **Ölü uç tavanı: ölçüm 9 hücre/satır** (öngörü ~10 — TUTTU). ≈ 40-50 km.
- **UZUN DİŞ (boy 10) 5 TURDA TAMAMEN SİLİNMİYOR — ADIYLA: `diş 1×10`: 9/10 hücre silindi,
  dişin taban hücresi (satır 20) KALDI.** Bu kalan TUR TAVANIDIR (1 enli diş turda ~2 hücre
  yenir, ilk tur 1); 2 enlilerdeki kalan 2 ise taban beraberliğidir ve TUR'dan bağımsızdır.
  2×10 diş 5 turda tavana değmeden bitti (son tur 4 hücre, kalan yalnız taban).
  Haritada anlamı: ≤ 2 hücre enli bölümü ~45 km'den uzun dişlerin ucu değil, TABANA yakın
  ~1 hücresi kalır (diş, gövdeye yapışık 1 hücrelik bir basamağa iner).
- **Kıstas ölçüme göre güncellendi:** sınava `BEKLENEN_KALAN` tablosu eklendi (TUR → kurgu →
  kalan hücre, BİREBİR). TUR=10 ve TUR=5 değerleri ölçümle kuruldu; tablosu olmayan bir TUR
  değeri sınavı düşürür; ayrıca `TUR == 5` hükmü sınanır. (TUR=10 satırı ilk teslimin
  ölçümünden alındı; o diff artık yok, bu satır bugün YENİDEN koşturulmadı.)
- **Diff yeniden yazıldı:** aynı ad, 8.986 bayt, CR 0, BOM yok, +132 −0;
  sha256 `17e48a2a05ff51c8cfdb75caaf8a5b82a464c545aeb99f468af73ccf1afcf899`
  (eskisine göre fark yalnız sabit satırı + 4 satır yorum).
  `--check`: ① temiz origin/main **3429ead9** ✓ ② + ZAMAN-PAKET-1009-v2 (-C1) ✓, uygulandı,
  `py_compile` ✓ ③ ters sıra ✓.

### Partiye giriş şartı (ölçüm EMRELIC'te, başka kıtada)
C3 partiye girmeden ÖNCE: **bugünkü haritada ≤ 2 hücre enli GÖMÜLÜ dillerin listesi**
(gerçek koridor olabilecek, tek bir komşu sahibin içine gömülü, ölü uçlu ince toprak). Bu
liste, TUR=5 ile yenebilecek ≤ 9 hücrelik ucun hangi gerçek yerlere değdiğini ADIYLA gösterir;
koşu sonrası aynı liste yeniden ölçülerek "yenilen koridor" SESSİZ kalmaz.

### Taban harita — hangi dosya
- `data/devletler_harita.js` YAYINDAKİ HARİTA DEĞİLDİR; yerel bir çözümdür (gitignore'da;
  §3'te andığım `C:\atlas-umit\data\devletler_harita.js` 4 Ekim tarihli, bayat bir çözümdü).
- Yayındaki harita: **`data/devlet_harita_ust.js`** (depoda izli; `index.html` onu yükler).
- Taze çözüm, TEMİZ bir origin/main worktree'de:
  `py arac/kodla.py coz-c data data/devletler_harita.js`
- Önce/sonra ölçümleri (gömülü dil listesi, H-0011/H-0003 piksel ölçümü) bu taze çözüme ya da
  yayındaki dosyaya karşı yapılmalı, eski yerel çözüme karşı DEĞİL.

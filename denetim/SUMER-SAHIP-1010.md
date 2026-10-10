# SUMER-SAHIP-1010 — Sümer noktalarının sahiplik dilimleri (21 nokta) + künye örtüşmesi

Görev: koordinatör (UMIT, veri yazıcısı) · 10 Ekim 2026 · yalnız DIFF, veri uygulanmadı.
Ölçüm ağacı: `C:\atlas-sumersahip` = `origin/main` @ `a24a4838fdbe9673849bbd00518cc7e00363ce8c`
(ana checkout `C:\atlas` 91 commit GERİDE — ölçüm orada YAPILMADI).
Uygulanan taban yamaları (bu sırayla, hepsi `git apply --check` temiz):
NOKTA-SUMER-1010.diff (emrelic-nokta `7100bd5f`) · NOKTA-SUMER-1010-B10.diff · KUNYE-SUMER-7-1010-v2.diff
(emrelic-kunye-2 `cd5828f8`) · NEGATIF-YIL-1010-A2.diff · OLCUM-AGACI-1010.diff.
🔴 Şartname ortada daraltıldı (koordinatör, eksen bölmesi): **künye penceresinden türetilen sahiplik
kaynak DEĞİLDİR** ⇒ diff'e yalnız şehri ADIYLA anan, tarihli tanığı olan dilim girer; kalanı
`SUMER-SAHIP-1010-KAYNAK-TALEP.json/.md`ye gider ve KASA cevaplar.

---

## KALEM 0 — ARA RAPOR: `makedon.f` ↔ `ahameni.t` 4 günlük örtüşmesi ⇒ `KUNYE-SUMER-7-1010-v3.diff`

### Teşhis — hangi uç kaynaklı, hangisi zarf ucu olamaz
| uç | değer (v2) | dayanak | hüküm |
|---|---|---|---|
| `makedon.f` | `-0330-10-18` | Astronomik günlük -330, ay VII 11. gün: Sippar'dan Babillilere İskender'in emri — livius sayfasının notu *"on 18 October 331 BCE"* | **KAYNAKLI ve NOKTAYA BAĞLI** (Sippar atlasın noktası) — doğru |
| `ahameni.t` | `-0330-10-22` | aynı notun devamı: Babil'e giriş *"on the twenty-second"* | **ZARF UCU OLAMAZ** — aşağıda iki sebep |

1. **Babil atlasın nokta kümesinde YOK** (`data/yerlesimler*.js` taraması: `Bâbil/Babylon` adlı kayıt 0;
   en yakın atlas noktası Hille). `§9.6`: künye penceresi nokta kümesinin ZARFIdır; Babil'in günü
   hiçbir noktanın sahiplik sınırını taşımıyor.
2. **Giriş günü Makedon kazanımının günüdür, Ahamenî hâkimiyetinin TASDİKİ değildir.** Aynı tabletin
   11. gün satırı İskender'in Sippar'dan Babillilere şart koştuğunu söylüyor (*"Into your houses I
   shall not enter"*). Yani 18-22 Ekim arasında Ahamenî hâkimiyetini gösteren hiçbir tanık yok —
   örtüşmeyi DOLDURAN bir kaynak yok, yalnız iki olayın günü var.
⇒ Yanlış olan `ahameni.t`. **Düzeltme:** `ahameni.t` → `-0330-10-18` (`kesinlik.t` gün kalır).
Örtüşme 0, boşluk 0 — boşluk zorla kapatılmadı: iki uç aynı kaynak satırına dayanıyor.
`makedon.f` DEĞİŞMEDİ; `makedon` kronolojisindeki `-0330-10-22` "Babil'e girdi" maddesi yerinde kaldı
(o bir Makedon olayıdır).

### Kaynağın kendisi — doğrulandı, ve iki zayıflığı ADIYLA
- Sayfa: livius.org *"A Contemporary Account of the Battle of Gaugamela"* (bu turda WebFetch ile okundu).
  Satırlar: 11. gün *"Into your houses I shall not enter."* · 14. gün *"Alexander, king of the world,
  came into Babylon"* · not: *"…on 18 October 331 BCE and entered Babylon on the twenty-second"*.
- ⚠️ ① Çeviri sayfada **adla imzalı değil**; Literatür bölümü Sachs–Hunger'ı anıyor. Birincil yayın
  Sachs–Hunger, *Astronomical Diaries* I (1988) No. -330 — **ERİŞİLEMEDİ**. Livius burada yalnız
  BARINDIRICI; Lendering'in kendi yorumu kullanılmadı (kırmızı çizgi).
- ⚠️ ② **İç tutarsızlık:** 11. gün = 18 Ekim ise 14. gün = 21 Ekim; not "22" diyor (Babil günü gün
  batımında başlar — bir günlük kayma olağan). Bu, düzeltmeyi ETKİLEMEZ (giriş günü artık uç değil),
  ama v2'nin "4 gün" sayısı da aslında "3-4 gün"dü.
- Sippar satırı kısmen tamamlamalı (`Al[exander …]`); adın okunuşu yayımcının restorasyonu.

### Değişen alanlar (v3, v2 üstüne, `data/devletler.js` +5/−5)
`ahameni.t` · `ahameni.ic_not_t` (gerekçe + iki zayıflık) · `ahameni.ozet` (bir yan cümle) ·
`ahameni.kronoloji[1]` (`-0330-10-22` → `-0330-10-18`, metin Sippar) · `makedon.ic_not_f`
("4 günlük beyanlı örtüşme" cümlesi kalktı, v3 notu girdi).

### ⚠️ Aynı sınıftan başka örtüşme var mı — ÖLÇÜLDÜ, karar senin
v2'de iki örtüşme daha duruyor ve ikisi de BEYANLI: `makedon.t -0307` ↔ `selefki.f -0311` (~4 yıl) ·
`part.f -0140-07-03` ↔ `selefki.t -0126-06-01` (~14 yıl). Bunlar 4 günlükten FARKLI sınıf: ikisinde de
örtüşme aralığında **iki tarafın da** noktaya bağlı tarihli tanığı var (Larsa'da Antigonos 9. yıl /
IV. Aleksandros belgeleri; Babil'de VII. Antiokhos −129-06-01 ↔ Part 141). Yani "iki iddia yan yana"
kaynakta yazılı. 4 günlükte Ahamenî tarafının tanığı YOKTU. Dokunmadım.

---

## KALEM 1-2 ÖNGÖRÜ — ölçümden ÖNCE yazıldı (diff henüz uygulanmadı, denetle koşmadı)
- Kaynaklı `s:` dilimi: **17 ± 2**, **7 noktada** (Uruk · Ur · Kiş · Nippur · Larsa · Kutha · Sippar);
  **14 nokta 0 dilim** (9'u MÖ 539'dan önce ölür ⇒ dizinde o çağın künyesi YOK; 5'inde tanık YOK).
- `bit:`'li nokta: **21/21** (bit: NOKTA diff'inden; en geç Dilbat MS 750) ⇒ 1000 · 1281 · 1500 · 1923
  günlerinde **"" = 0** (hepsi ölü). MÖ günlerinde "" büyük çoğunluk (**%85 ± 10** nokta-gün).
- Hayalet (künye penceresi dışı dilim): **0** (üretici betik bunu kendi sınıyor).
- `denetle.py` önce/sonra: D1 309 → 309 · D1b 0 → 0 · D2 0 açık → 0 · 2s 193 tavan aynı · 4c/4d yeni ihlal
  0 — %70; %30: negatif yıllı `s:` dilimi bir adımda ÇÖKER ya da ÖLÇÜLEMEDİ'ye düşer (bugün hiçbir
  yerleşim negatif `s:` taşımıyor, bu yol hiç koşmadı). Değişmez 5 (kur:): Kutha dilimleri kur:'dan sonra ⇒ 0.
- Değişmez 2'ye maddesiz yeni kırılma: hepsi VERI_UFKU (1281-1923) dışında ⇒ kapı onları KAPSAM DIŞI
  sayar (%75); sayarsa 34 uç (17 dilim × 2) maddesiz çıkar.

---

## KALEM 1 — `SUMER-SAHIP-1010.diff` (NOKTA-SUMER + B10 üstüne; `data/yerlesimler_nokta_ortadogu_0917.js` +45/−28)

### Kural — ne yazıldı, ne yazılmadı
- **Yazılan:** yalnız şehri ADIYLA anan, TARİHLİ tanığı olan dilim (tanıklar KASA-SUMER-SAHIPLIK-1010,
  -2-1010, -VARLIK-1010'da KASA'nın ham sayfadan doğruladığı alıntılar). Dilimin uçları **TASDİK
  SINIRIDIR** (ilk ve son tarihli belge), el değiştirme günü değil — iki olay dışında: Sippar MÖ 539
  (ABC 7, alınış) ve Sippar 18 Ekim 331 (ADART, İskender'in emri).
- Yıl dönüşümü: Babil yılı (Nisan→Mart) ilkbaharda başladığı mîlâdî yılla anılır (kaynakların "MÖ 407"si);
  `t` = o yılın ertesi 1 Ocak'ı. Saltanat içinde yılı okunmayan belgede **güvenli uç** alınır (f için
  saltanatın SONU, t için saltanatın BAŞI) ve `kesinlik` `onyil` olur.
- **Yazılmayan:** künye penceresinden türetilen dilim (KASA R2'nin "künye penceresinin tamamı" kuralı
  dahil — §4 + koordinatörün eksen bölmesi) · sınıf/bölge cümleleri (S) · soru işaretli ya da provenansı
  belirsiz belge · yalnız varlık tanığı.
- 🔴 **`bos:` BİLEREK YAZILMADI — şartnameden SAPMA, gerekçesi ölçüldü:** `uret_petek.py:3209`
  (`if YERLER[q].get("kasitli_bosluk") or YERLER[q].get("bos"): return "kb"`) `bos:` taşıyan noktayı
  **tarihten bağımsız** "kasıtlı boşluk" sayar; `:3043` `_ONB_BOS` önbellek anahtarına girer. Yani 21 ölü
  Sümer noktasına `bos:` yazmak 1000-1945 Irak geometrisini değiştirir ve bir KOŞU ister. `bos:` ayrıca
  NOKTA düzeyindedir, "hangi ARALIK" diyemez (`denetle.py:1339` yorumu). Beyan bunun yerine her noktanın
  `not:` alanına yazıldı (motor okumaz) + talep listesi. `__BOSLUK__` da yazılmadı: HUKUM §9.7 künyesi
  olan aralıkta onu reddetti; künyesiz MÖ 539 öncesinde ise bir kaynak beyanı değil, "künye yok" demek.

### Nokta × dilim × kaynak — 17 dilim, 7 nokta
| nokta | künye | f → t (astronomik) | MÖ/MS | kesinlik f/t | kaynak (adıyla) |
|---|---|---|---|---|---|
| Uruk | `ahameni` | `-0529-01-01` → `-0405-01-01` | 530 → 407 dahil | onyil/yil | Oracc RIBo Cyrus II 03 (Uruk tuğlası; Kyros'un Babil saltanatı 539-530 ⇒ f güvenli uç 530) · NaBuCCo 75 Kurī B (41 Art I – 6 Dar II) · CDLI P407836 Darius II 17 |
| Uruk | `selefki` | `-0244-07-11` → `-0144-01-01` | 11 Tem 245 → 146 dahil | gun/yil | BCHP 10 "tablet from Uruk dated to 22 Simanu (III) SE 67 = 11 July 245" · Oracc SelBI Anu-uballiṭ Nikarchos (SE 68) · CDLI P296727 SE 166 |
| Uruk | `part` | `-0140-10-12` → `0080-01-01` | 12 Eki 141 → MS 79 dahil | gun/yil | Schippmann EIr "by 12 October 141 … recognized as far afield as … Uruk" (f EN GEÇ uç) · Hunger & de Jong ZA 104 (2014) Uruk almanakı, Arsakî çağı 326 = MS 79/80 |
| Ur | `ahameni` | `-0529-01-01` → `-0402-01-01` | 530 → 404 dahil | onyil/yil | Oracc RIBo Cyrus II 02 (Ur tuğlası) · NaBuCCo 4 Imbia (8-24 Dar) · Woolley 1931 "the latest date … one of Artaxerxes II" (404-358 ⇒ t güvenli uç 404) |
| Ur | `makedon` | `-0324-01-01` → `-0316-01-01` | 325 → 318 sonu | yil/yil | Brinkman RlA 14 §8 "year 12 of Alexander the Great (325) and year 7 of Philip Arrhidaeus (317)" · CDLI P414739 — ⚠️ t = `bit:` (aşağıda) |
| Kiş | `ahameni` | `-0477-01-01` → `-0429-01-01` | 478 → 431 dahil | yil/yil | NaBuCCo 28 (8 Xer – 34 Art I) · CDLI P385222 "Tablet excavated in Kish" Art 34 |
| Kiş | `makedon` | `-0325-01-01` → `-0315-01-01` | 326 → 317 dahil | yil/onyil | CDLI P342411 OECT 9 74 Alexander III 11 · NaBuCCo 2 "7 Alx IV" (sayım başına göre 317 ya da 310/309 ⇒ t güvenli uç 317) |
| Kiş | `selefki` | `-0291-01-01` → `-0271-01-01` | 292 → 273 dahil | yil/yil | CDLI P342408 SE 20 · P342409 SE 39 |
| Nippur | `ahameni` | `-0489-01-01` → `-0367-01-01` | 490 → 369 dahil | yil/yil | NaBuCCo 130 erken Ekur (… – Dar 32) · NaBuCCo 10 Murašû (10 Art I – 1 Art II) · NaBuCCo 131 geç Ekur (35-36 Art II) |
| Nippur | `makedon` | `-0316-01-01` → `-0315-01-01` | 317 | yil/yil | Stolper 1993, CDLI P255479 "Philip 7" |
| Nippur | `part` | `0001-01-01` → `0101-01-01` | MS 1. yy | yuzyil/yuzyil | Jakubiak EIr "Nippur of the 1st century CE … a fort built around the ziggurat" · Legrain 1944 Parthian citadel + Tiberius sikkesi |
| Larsa | `ahameni` | `-0408-01-01` → `-0407-01-01` | 409 | yil/yil | CDLI P407833 "excavated in Larsa" Darius II 15 |
| Kutha | `ahameni` | `-0469-01-01` → `-0454-01-01` | 470 → 456 dahil | yil/yil | NaBuCCo 22 (16 Xer – 9 Art I) · CDLI P554842 (Stolper 1991) |
| Kutha | `selefki` | `-0186-01-01` → `-0185-01-01` | 187 | yil/yil | CDLI P296448 SE 125 |
| Sippar | `ahameni` | `-0538-01-01` → `-0482-01-01` | 539 → 484 dahil | yil/yil | Grayson ABC 7 "Sippar was captured without a battle" · NaBuCCo 122 Ebabbar "to the second year of Xerxes" |
| Sippar | `makedon` | `-0330-10-18` → `-0329-01-01` | 18 Eki 331 → yıl sonu | gun/yil | ADART I -330 ay VII 11. gün, livius notu "18 October 331" |
| Sippar | `selefki` | `-0267-01-01` → `-0266-01-01` | 268 | yil/yil | CDLI P554851 (Jursa 1998) Sippar-Yahrurum, "HE.SE.43.12a.28" (SE 43 artık XII. ay ⇒ 268 başı — bu ay okuması BENİM) |

**0 dilim — 14 nokta:** Lagaş · Umma · Şuruppak · Girsu · Bad-tibira · Zabalam · Kisurra · Tell al-Ubaid ·
Eşnunna (bütün ömürleri MÖ 539'dan önce; o çağın künyesi `data/devletler.js`te YOK) · Eridu · Isin ·
Nina · Dilbat · Marad (MÖ 539 sonrası yaşıyorlar; şehir adlı TARİHLİ tanık yok — izler talep listesinde).

### Künye id taraması ve hayalet kontrolü
- `data/devletler.js` (v3 uygulanmış; 902 künye, mükerrer id 0) TARANDI: `ahameni -0538-01-01→-0330-10-18`
  · `makedon -0330-10-18→-0307-01-01` · `selefki -0311-01-01→-0126-06-01` · `part -0140-07-03→0226-01-01`;
  aday evren ayrıca `sasani 0224→0651` · `hulefa-yi-rasidin 0632→0661` · `emevi 0661→0750-08-05` ·
  `abbasi 0749-11-28→1258-02-10`. **YOK:** `karakene` (v2'de yazılmadı) · MÖ 539 öncesinin hiçbir künyesi
  (`akkad`, `ur-iii`, `eski-babil`, `asur`, `yeni-babil` … — yalnız KASA-SUMER-KUNYE-BAG önerisi).
- **Hayalet: 0** — 17 dilimin 17'si künye penceresi İÇİNDE (sayısal, `gun.js`; sınav S3).

### `bit:`'li noktalar — 21/21 (hepsi NOKTA diff'inden; bu diff `bit:` EKLEMEDİ, DEĞİŞTİRMEDİ)
| `bit:` | noktalar |
|---|---|
| MS 750 | Dilbat |
| MS 640 | Uruk · Nippur · Kutha · Sippar |
| MS 499 · MS 300 | Eridu · Larsa |
| MÖ 30 · 140 · 317 · 330 | Marad · Kiş · Ur · Isin + Nina |
| MÖ 540 · 550 | Bad-tibira · Girsu |
| MÖ 1000 · 1600 · 2000 · 2950 | Umma + Zabalam · Lagaş + Kisurra + Eşnunna · Şuruppak · Tell al-Ubaid |

⇒ **MOTOR-GECISLI-DEVIR gereken: 21'in 21'i** (en geç MS 750 < UFUK 1000 ⇒ motor penceresinde hiçbiri
canlı değil; geçişli devir UFUK MÖ'ye açıldığında devreye girer).
⚠️ **Ur `bit:` bir yıl ERKEN (NOKTA diff'inin kusuru, benim dosyam değil):** `bit:"-0316-01-01"` MÖ 317'nin
BAŞI; son belge (Philip 7) MÖ 317 İÇİNDE ⇒ son tasdik yılı sahneden düşüyor. "Son tasdik yılı dahil"
okunuşu `-0315-01-01` ister. Ur `makedon` diliminin t'si bu yüzden `bit:`e kırpıldı.
⚠️ **Kutha `kur:`** NOKTA'da `-1999`; KASA-SUMER-KUNYE-BAG §1.4 `-2253` öneriyor. Dokunmadım.

### 1000-1280 ve 1281-1923
21 noktanın hiçbiri MS 1000'de canlı değil ⇒ bu diff 1000-1923'te **delik açmaz, delik kapatmaz**.
"1281-1923'te '' hiçbir günde" bu 21 nokta için `bit:` sayesinde ZATEN sağlanıyor (S1).
MÖ/erken MS'teki "" günleri ancak KASA cevaplarından sonra azalır — BEYAN.

---

## KALEM 2 — SINAV ve ÖLÇÜM

### Sınav — `ARAC-SUMER-SAHIP-SINAV-1010.js` (node, A2'li `suzgec.sahipAnahtari`) · ÇIKIŞ 0 · 12/12
```
S1  1000/1281/1500/1923'te canlı+"" Sümer noktası 0 · 21/21 bit:'li                 ✓ ✓
S2  beyansız "" (talep penceresinde OLMAYAN) 0 · talep fazlası 0 ·
    37 talep penceresinin orta günü gerçekten ""                                    ✓ ✓ ✓
S3  17 dilim: künye dışı 0 · ters/sıfır 0 · çakışma 0 · bit: sonrası 0 · kaynaksız 0 ✓
S4  ahameni.t ≤ makedon.f · ahameni.t == makedon.f                                  ✓ ✓
S5  ATAR: bit:'i silinmiş Ur 1281'de "" · künye dışı dilim · kaynaksız dilim ·
    v2 değeri (-0330-10-22) örtüşme — dördü de YAKALANIYOR                           ✓ ✓ ✓ ✓
```
```
gün        -2499 -1999 -1499  -999  -599  -499  -399 -329/12 -299 -199  -99   50  300  600 | 1000 1281 1500 1923
""/canlı   18/18 19/19 16/16 14/14 14/14  9/12 11/12  10/10  9/9  8/9  7/8  5/7  6/6  5/5 |  0/0  0/0  0/0  0/0
sahipli:   Uruk ahameni(-499) selefki(-199) part(-99, 50) · Ur ahameni(-499) · Nippur ahameni(-399) part(50) · Sippar ahameni(-499)
```
Canlı nokta-gün 159 · `""` 151 (**%95,0**). Öngörü %85 ± 10 → TUTTU (üst sınırda). Tam tablo: sınavın çıktısı.

### `denetle.py` — önce / sonra (AYNI ANDA iki worktree)
`devletler_harita.js` + `donemler.js` iki ağaçta da çözüldü; sha256 `82cc1224…95af01c` / `5469235f…ec49e7` =
`__DP_SHA` / `__PR_SHA` damgalarıyla BİREBİR. **önce** = a24a4838 + NOKTA + B10 + KUNYE-v2 + A2 ·
**sonra** = önce + KUNYE-v3 + SUMER-SAHIP.
- 🔴 **sonra'da YAMASIZ `denetle.py` ÇÖKÜYOR — ÇIKIŞ 1, traceback (İHLAL'den AYIRT EDİLEMEZ):**
  `degismez1b` → `gun_no` → `ValueError: year -48 is out of range` (`denetle.py:1491` ← `:1230`
  `date(y, a, g)`; `s[0:4]` negatif yılı kesiyor). `pad()` docstring'i bunu ÖNCEDEN yazıyordu ("gun_no
  ÇÖKER"); KUNYE-SUMER-7 §1.6 "veri partisinden ÖNCE ölçülsün" demişti — **ölçüldü: çöküyor.**
  ⇒ **Bu diff, `denetle.py` sayısal tarihe (`gun.py`) geçmeden İNEMEZ.** Çökme 1 verdiği için otomasyon
  onu İHLAL sanar; ÖLÇÜLEMEDİ (2) değil.
- Çökmenin ÖTESİ için `gun_no` BELLEKTE `arac/gun.py` ile değiştirildi (ağaçta dosya değişmedi;
  `ARAC-SUMER-SAHIP-DENETLE-OLCUM-1010.py`). Satır farkı (süre damgaları ayıklandı):
```
                      önce                         sonra (gun_no bellekte yamalı)
D1   sahipsizlik      309 (beklenen 309) ✓          309 ✓                          DEĞİŞMEDİ
D1b  iç boşluk        0 ✓                           5 ✗  ← aşağıda
D1c                   4 (tavan 4) ✓                 4 ✓                            DEĞİŞMEDİ
D2 · 2s · 2i · 2t     —                             —                              satır farkı 0
4c · 4d · 5 · 5a/5b   —                             —                              satır farkı 0
5c (bilgi)            2449                          2455  ← dizgi kıyası
dönem sağlığı         0 ters · 0 çakışma ✓          15 ters · 1 çakışma ✗  ← dizgi kıyası
kaynaksız s:          1841 (tavan 1930) ✓           1841 ✓ (17 dilimin 17'si kaynaklı)
D8a / D8k             1517 > tavan 1508 ✗ · 78 kör  AYNI — TABANDA KIRMIZI, bu diff'ten bağımsız
SONUÇ                 çıkış 1 (D8)                  çıkış 1 (D8 + D1b + dönem sağlığı)
```
- **D1b +5 — iki şey birden:** ① GERÇEK sınıf: tasdik dilimleri arasında kasıtlı sahipsiz aralık var
  (sayısal sayım 10: Uruk 2 · Ur 1 · Kiş 2 · Nippur 2 · Kutha 1 · Sippar 2) ve D1b onları BEYANSIZ sayar
  ② ama basılan 5 satır **ÇÖP**: `araliklar.sort()` DİZGİ sıralı ⇒ `-0266 → -0330 (−23.085 gün)` gibi
  ters aralıklar. ⇒ D1b MÖ'de hem sayıyı hem yönü yanlış veriyor.
- **dönem sağlığı 15 ters + 1 çakışma = YANLIŞ ALARM, dizgi kıyası:** `"-0529" > "-0405"` dizgide doğru,
  sayıda yanlış. İşaretlenmeyen 2 dilim tam da `t`'si pozitif olan ikisi (Uruk `part`, Nippur `part`).
  Sayısal sınav S3: 0 ters, 0 çakışma.
- **5c +6 (bilgi):** "1281'de ZATEN SAHİPLİ" sayısına 6 Sümer noktası girdi — dizgi kıyası
  (`"-0324…" <= "1281…"`). İhlal değil, ama yanlış.
- **D2'ye maddesiz kırılma:** 34 yeni uçtan (17 × 2) **hiçbiri D2/2s evrenine girmedi** (VERI_UFKU
  1281-1923 dışı; çıktı farkı 0). Öngörü "%75 KAPSAM DIŞI" → TUTTU. UFUK MÖ'ye açılınca sorulacak liste:
  ±30 günde künye-kronoloji maddesi olan yalnız **2 uç** (Sippar `ahameni.f -0538-01-01`, Sippar
  `makedon.f -0330-10-18`); Uruk `part.f -0140-10-12` en yakın maddeye 101 gün. Kalan **31 uç** OLAY değil
  TASDİK SINIRI ⇒ onlara madde **önerilmez** (madde uydurmak olur); çaresi KASA cevaplarıyla aralıkların
  dolması ya da D2'nin tasdik sınırını kırılma saymaması (kural kararı). **Madde önerisi (yazmadım, 1):**
  Uruk `-0140-10-12` "I. Mithridates'in hâkimiyeti Uruk'ta tanındı" (Schippmann, EIr 'Arsacids ii').
- **D8:** `olcum_agaci.py coz` bu ağacı "araç-yapımı olmayan ağaç" diye REDDETTİ (çıkış 2); tarifin aynısı
  (`kodla.py coz-c` ×2 + sha256 damga kıyası) elle yapıldı. D8a önce = sonra = 1517 (tavan 1508) — tabanın
  kendi kırmızısı; motor koşmadan bu diff D8'i oynatamaz.
- Öngörü sınavı: dilim 17 ± 2 → 17 TUTTU · hayalet 0 TUTTU · D1 309 TUTTU · 4c/4d/D2 değişmez TUTTU ·
  **D1b TUTMADI** · "%30 ÇÖKER" → **ÇÖKTÜ** (az olası kolum gerçekleşti).

---

## TALEP LİSTESİ — `SUMER-SAHIP-1010-KAYNAK-TALEP.json` + `.md`
37 pencere, 21 nokta. Her satır: nokta · koordinat · pencere f/t · aday künye(ler) ve kesişen dilim ·
niçin aday (künye ZARFI kesişiyor — iddia değil) · bulunmuş ama ALINMAMIŞ izler (sebebiyle) · MÖ 539
öncesi için KASA-BAG'in Y/Ş halkaları (künyesi dizinde yok). Üreten: `uret.py` (scratchpad, sınavla
çapraz denetlendi: S2).

## KAYNAĞI ZAYIF DİLİMLER (yazıldı, ADIYLA)
1. **Sippar `makedon`** — livius barındırması, çeviri imzasız, Sachs–Hunger erişilemedi; `Al[exander]`
   restorasyon (KALEM 0 ile aynı kaynak).
2. **Sippar `selefki`** — "12a" = artık XII. ay okuması ve 268'e yerleştirme BENİM.
3. **Ur `ahameni` t** — Woolley 1931 Artaxerxes II tableti yılsız; güvenli uç 404.
4. **Kiş `makedon` t** — "7 Alx IV" sayım başı belirsiz; güvenli uç 317, `onyil`.
5. **Uruk `ahameni` f / Ur `ahameni` f** — Kyros tuğlaları yılsız; güvenli uç 530, `onyil`.
6. **Nippur `part`** — yüzyıl çözünürlüğü; "Parthian citadel" askerî mimari, sahiplik çıkarımı ona dayanıyor.
7. **Uruk `part` t** — Arsakî ÇAĞI ile tarihli almanak; çağ kullanımı hükümdar belgesinden zayıf.

## BULUNAMAYANLAR (ADIYLA)
Eridu · Isin · Nina · Dilbat · Marad: MÖ 539 sonrasında şehir adlı TARİHLİ sahiplik tanığı YOK ·
MS 80/101/187/268 sonrasından `bit:`e kadar Uruk · Nippur · Kutha · Sippar · Larsa · Dilbat · Eridu: Part
sonu, Sâsânî, Râşidîn, Emevî dilimlerinde HİÇBİR tanık yok (KASA bu çağı taramadı) · MÖ 539 öncesi:
künye yok · van der Spek 1992 ve OLA 277 erişilemedi (KASA) · Sachs–Hunger ADART I erişilemedi (ben).

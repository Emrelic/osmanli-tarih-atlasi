# KASA-HICRI-ICINDE-1010 — 1. turun 75 İÇİNDE'si: gevşek eşleştirici kontrolü

Görev: YILDIRIM BAYEZIT (SINIR kararı (d)①) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Soru: 1. turun "aday ifadelerden biri içeriyorsa İÇİNDE" kuralı, KOMŞU hânedanın ya da BAŞKA bir olayın ifadesini
dayanak saymış olabilir (hamdani-yemen f vakası).
- Kaç İÇİNDE'nin dayanağı komşu/başka olaydan geliyor (sayıyla)?
- Kaçı yeniden sınıflanınca DIŞINDA oluyor?
- 70 kaça çıkıyor?
Yöntem (ölçümden önce sabit):
- 75 İÇİNDE uç yeniden açılır. Uca ait metinlerde (ic_not_f/t + aynı tarihli kronoloji + kaynak) o yılı taşıyan
  BÜTÜN hicrî ifadeler ve her birinin hükmü listelenir.
- **Çok adaylı** = aynı yılı taşıyan ≥2 ifade VE hükümleri farklı (biri İÇİNDE, biri DIŞINDA). Tek adaylı ya da hepsi
  İÇİNDE olanlar "doğrulanmış-yapısal" sayılır, elle bakılmaz.
- Çok adaylılarda elle: İÇİNDE veren ifade O künyenin O ucunu mu tarihliyor? (künye adı · olay · madde)
  - Evet ⇒ İÇİNDE kalır.
  - Hayır (komşu hânedan / başka olay) ⇒ DIŞINDA veren ifade o ucu tarihliyorsa DIŞINDA.
  - Hiçbiri o ucu tarihlemiyorsa ⇒ ÖLÇÜLEMEDİ.
- ÖLÇÜLEMEDİ, İÇİNDE'ye karıştırılmaz.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — büyüklük iki kat geniş
**Desen:**
- ① Çok adaylı vakalar, notunda "⚠️ … X maddesi şunu der" türü KARŞILAŞTIRMA cümlesi olan künyelerde toplanır
  (hamdani-yemen tipi) (%80).
- ② Yeniden sınıflanan DIŞINDA'ların hepsi yine `-01-01` (%95).
- ③ İÇİNDE'yi gün düzeyi ifade veren uçlar (28) tek adaylıdır, değişmez (%90).
**Büyüklük:**
- Çok adaylı İÇİNDE: **12 ± 12**.
- Dayanağı komşu hânedan / başka olay olan: **5 ± 5**.
- Yeniden sınıflanınca DIŞINDA: **3 ± 3** ⇒ taban 70 → **73 ± 3** (aralık 70-79) · ÖLÇÜLEMEDİ'ye düşen: **2 ± 2**.

## 1. ÖLÇÜM

75 İÇİNDE uç yeniden açıldı (`hicri.csv` · main 5ba57827). Her ucun bütün aday ifadeleri ve hükümleri listelendi.
```
75 İÇİNDE
  tek ifade (yalnız bir hicrî ifade o yılı taşıyor)              64
  birden çok ifade, hepsi aynı hüküm                             4
  ÇOK ADAYLI (ifadeler farklı hüküm veriyor)                     7   ← elle bakıldı
```
**Çok adaylı 7 — elle sınıflama:**
| uç | İÇİNDE veren | DIŞINDA veren | hangisi O ucu tarihliyor | yeni hüküm |
|---|---|---|---|---|
| **eyyubi-hisnikeyfa f** 1232-01-01 | TDV `hasankeyf` (ŞEHİR maddesi) "629/1232" | TDV `eyyubiler` (HÂNEDAN maddesi) "el-Melikü'l-Kâmil 630 (1232) yılında Güneydoğu Anadolu'da …" | aynı olay, yapısal ±1 (sınır 1232-10-18). Hânedan ucu için dar kapsam: `eyyubiler` ⇒ **630** | 🔴 **DIŞINDA** ⇒ öneri **1232-10-18** (630 ∩ 1232 = 10-18…12-31). Eşi yok: Artuklu tek künye, t 1409 |
| **hamdani-yemen f** 1098-01-01 | `suleyhiler` "491 (1098)" (KOMŞU hânedan) | `hemdaniler` + `yemen` "492 (1098)" | dar kapsam `hemdaniler` (HICRI-SINIR §1.1) | 🔴 **DIŞINDA** ⇒ 1098-11-28 (zaten önerildi) |
| **muvahhidler t** 1269-01-01 | `muvahhidler` "(667/1269)" | aynı madde "668'de (1269)" + `meriniler` | kaynak KENDİYLE çelişiyor | ⚪ **ÖLÇÜLEMEDİ** (İÇİNDE'den çıkar) |
| **abbasi t** 1258-02-10 | `mustasim-billah` "4 Safer 656 (10 Şubat 1258) … teslim oldu" | aynı not "(20 Muharrem 656 / 27 Ocak 1258)" halifenin ÖLÜMÜ | ⑧ iki olay, not seçimini beyan ediyor (teslim) | ✅ İÇİNDE kalır |
| **mirdasi t** 1080-06-18 | "(26 Zilhicce 472 / 18 Haziran 1080)" şehrin düşüşü | "Rebîülâhir 473 (Ekim 1080) … iç kalenin teslimi" | ⑧ iki olay, not seçimini beyan ediyor (şehrin düşüşü) | ✅ İÇİNDE kalır |
| **boriler f** 1104-06-06 | "Dukak'ın ölümüyle (10 Ramazan 497 / 6 Haziran 1104)" — fiilî yönetim | "hânedanın kendi adına kuruluşu: Tuğtegin '(498/1104)'" | ⑧ iki olay, not seçimini beyan ediyor (fiilî) | ✅ İÇİNDE kalır |
| **hamdani-yemen t** 1174-01-01 | `hemdaniler` "569'da (1174)" | `yemen` "570/1174" | dar kapsam `hemdaniler` (HICRI-SINIR) | ✅ İÇİNDE kalır |

### 1.1 Sayılar
```
dayanağı komşu hânedan / başka madde olan İÇİNDE       3  (eyyubi-hisnikeyfa f · hamdani-yemen f · muvahhidler t)
  ⇒ DIŞINDA'ya geçen                                    2  (eyyubi-hisnikeyfa f · hamdani-yemen f)
  ⇒ ÖLÇÜLEMEDİ'ye geçen                                 1  (muvahhidler t)
iki olaydan birini BEYANLA seçen (⑧) — İÇİNDE kalır     4
1. tur tabanı  70 DIŞINDA  →  72 DIŞINDA · 72 İÇİNDE · 1 ÖLÇÜLEMEDİ   (145 uç)
```
⚠️ **Hâlâ doğrulanmamış:** 64 "tek ifade" İÇİNDE'nin tek ifadesi de komşu bir maddeden alıntı olabilir. Gevşek
eşleştirici değil ama aynı sınıf risk. Bu tur onları açmadı; büyüklüğü bilinmiyor. Gün düzeyi ifadeli 28 uç bu
riskten büyük ölçüde muaf (gün, olayı tekil kılıyor).
**HICRI tabanının güncel hâli (bu gece, bütün turlar):**
- 1. tur 72
- MADDE turu yeni 6: sasani t · akkoyunlu t · memluk f · trablusgarp f · yemen-zeydi f · rasidin f.
  memluk f'nin önerisi SINIR'da 1250-07-03 olarak düzeltildi.
- ⇒ **78 dış uç**. Hepsi `-01-01`.
- TABAN, iki adlı sebeple: 789 künye ölçülemedi · 64 tek ifadeli İÇİNDE doğrulanmadı.

### 1.2 Öngörü sınavı
```
DESEN ① çok adaylılar "⚠️ X maddesi şunu der" notlarında    %80   7/7 ✓ (hepsinde karşılaştırma notu)
DESEN ② yeniden sınıflanan DIŞINDA'lar -01-01                %95   2/2 ✓
DESEN ③ gün düzeyi İÇİNDE'ler değişmez                       %90   ✓ (gün düzeyi 4'ü de ⑧ beyanlı seçim, kaldı)
çok adaylı                                                   12±12  7 ✓
dayanağı komşu/başka                                         5±5    3 ✓
DIŞINDA'ya geçen                                             3±3    2 ✓ ⇒ 72 (öngörü 73±3) ✓
ÖLÇÜLEMEDİ'ye geçen                                          2±2    1 ✓
```

## 2. ③ İSTİYORUM
a) **eyyubi-hisnikeyfa f → 1232-10-18** (dar kapsam `eyyubiler` 630; yapısal ±1, sınır 1232-10-18). Eşsiz.
b) **muvahhidler t** sayımda İÇİNDE'den ÖLÇÜLEMEDİ'ye taşınsın (değer değişmez).
c) §4'teki sayı: **1. tur 72/145** (+1 ölçülemedi) · bu geceki toplam **78**, TABAN, iki adlı sebeple.
d) Sıradaki: hânedan-ana maddeleri (`osmanlilar` · `selcuklular` · `abbasiler` · `fatimiler`). Aynı madde-başına
   yöntem; dar kapsam kuralı yalnız o hânedanın KENDİ uçlarında esas.

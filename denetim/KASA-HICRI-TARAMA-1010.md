# KASA-HICRI-TARAMA-1010 — devletler.js: hicrî kaynaklı künyelerin f/t'si kaynağın aralığında mı?

Görev: YILDIRIM BAYEZIT (CHABOT kararı (b)) · Araştırmacı: KASA · salt okunur, `data/` DONUK · öneri + csv.
Soru: künyenin `kaynak:` / `ic_not` alanında hicrî yıl geçiyorsa, `f:` / `t:` o hicrî yılın miladî aralığının
İÇİNDE mi?
Yöntem (ölçümden önce sabit):
- Hicrî ↔ miladî: tabular takvim; 1582-10-15 öncesi Jülyen, sonrası Gregoryen. ±1-2 gün tabular payı ⇒ sınırda
  ≤2 gün kalan "SINIRDA" diye ayrı işaretlenir.
- Eşleştirme: alandaki yazılı miladî yıl M; kaynak metninde `H/M`, `H (M)`, `H/M-M'` biçiminde M'yi taşıyan hicrî H
  aranır. Ay adı da varsa (Receb 858/Temmuz 1454) ay aralığıyla kontrol edilir.
- Evren üç kova: hicrî taşıyan · taşımayan · kaynak alanı BOŞ (ölçülemedi).
- Zincir: bir künyenin `t`si başka bir künyenin `f`siyle aynı günse (ardıl eşi), kaydırma ikisine birlikte önerilir.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — desen VE büyüklük aralığıyla
- **Evren:** künye ~900. Hicrî yıl taşıyan kaynak **300 ± 150** · taşımayan **500 ± 150** · boş **40 ± 40**.
- **Kontrol edilebilir alan** (alan yılı kaynaktaki bir H/M çiftiyle eşleşiyor): **200 ± 120**.
- **DIŞINDA: 110 ± 70.** Gerekçe: TDV `H/M` yazarken M'yi genellikle hicrî yılın BAŞLADIĞI miladî yıl olarak verir.
  O yıl çoğu zaman 1 Ocak'tan sonra başlar ⇒ `M-01-01` **varsayılan olarak dışarıda kalır**. `-01-01` yazılmış
  alanların **%60-90'ı** dışarıda; gün yazılmış alanların **≤%15'i**.
- **SINIRDA** (≤2 gün): **5 ± 5**.
- **Zincir eşi olan dış uç:** **20 ± 15**. Râşidîn/Emevî deseni yaygın, ardıl künyeler aynı `YYYY-01-01`'i paylaşıyor.
- Desen: hata ağırlıkla **`f`** alanında (devlet kuruluşları "H/M" ile, yıkılışlar daha sık gün/ay ile veriliyor).

## 1. ÖLÇÜM

Zemin: `origin/main` 5ba57827, `data/devletler.js` (897 künye).
Alanların taşıdığı metin: künyenin `ic_not_f` / `ic_not_t` alanı (o uca ait kaynak cümlesi) + aynı tarihli
`kronoloji` satırının `kaynak`ı + genel `kaynak` / `ic_not`.
Desen tanıma:
- `H/M`, `H (M)`, `H'de (M)`, `H/M-M'`.
- Hicrî ay ve gün ile miladî ay ve gün (ör. "26 Zilhicce 132 / 5 Ağustos 750", "41 yılı Rebîülevvel ayının
  sonlarında (Temmuz 661)").
- Geçerlilik: M ≈ 0,970·H + 621,6 (±2).
**Öneri günü:** hicrî aralık ∩ kaynağın yazdığı miladî yıl(lar) ∩ (varsa) miladî ay ⇒ kesişimin **İLK** günü
(koordinatör ④). Örnek: "543/1148" ⇒ 1148-05-22…1148-12-31, 1149'a TAŞMAZ.
Çıktı: `denetim/KASA-HICRI-TARAMA-1010.csv` (145 satır: künye · alan · yazılı · hicrî ifade · ölçüt · aralık ·
hüküm · öneri · eş (ham) · ardıl eş · tesadüf eş).

### 1.1 Evren (②) — adıyla
```
künye                          897
  kaynağında hicrî yıl taşıyan 108
  taşımayan                    789   (miladî yıl/gün ya da hicrîsiz TDV başlığı)
  kaynak alanı BOŞ               0   (ölçülemedi kovası boş — her künyede kaynak var)
kontrol edilen uç (f/t, yılı kaynaktaki bir H/M çiftine eşleşen)   145
```
⚠️ Kapsam sınırı: tarama yalnız künyenin KENDİ notlarındaki hicrî ifadeyi okur. Bu gecenin iki vakası buna
girmiyor:
- `sasani` t: notu yalnız miladî "651 yılında" diyor; hicrî 31 başka TDV maddesinden (`iran`).
- `hulefa-yi-rasidin` f: notu "TDV (yıl)".
⇒ İkisi de geçerli bulgu, ama bu taramanın evreni dışında. Gerçek sayı bu taramanın sayısından **büyük**.

### 1.2 Sonuç (③④)
```
                        İÇİNDE   DIŞINDA   SINIRDA(≤2 gün)
145 uç                     75        70          0
  f                        36        42
  t                        39        28
  yazılı -01-01            47        70          ← DIŞINDAKİLERİN HEPSİ -01-01
  yazılı gün (≠-01-01)     28         0
ölçüt: hicrî yıl 58 dış / 45 iç · hicrî ay 11 dış / 3 iç · hicrî gün 1 dış (muvahhidler) / 26 iç
```
🔴 **Desen tek cümle:** dışarıda kalan 70 ucun **70'i de `YYYY-01-01`**. Gün yazılmış 28 ucun **hiçbiri** dışarıda
değil. Hata hiçbir zaman "yanlış gün okumak" değil, her zaman **"gün yoksa 1 Ocak yaz" sözleşmesinin hicrî kaynağa
uygulanması**. TDV'nin `H/M`'si "H yılı, M'de başlayan" demek; M-01-01 o hicrî yılın başlangıcından ÖNCEDİR. -01-01
yazılmış hicrî uçların %60'ı (70/117) dışarıda; içeride kalan 47'si hicrî yılı 1 Ocak'tan önce başlayanlar.
Örnekler (tamamı csv'de):
```
muvahhidler  f 1130-01-01  "14 Ramazan 524 / 21 Ağustos 1130"   gün VAR ama yazılmamış  ⇒ 1130-08-21
kert         f 1244-01-01  "642 (1244)"   642 = 1244-06-09…       ⇒ 1244-06-09
fatimi       f 0909-01-01  "297 (909)"    297 = 909-09-20…        ⇒ 0909-09-20
emevi        f 0661-01-01  "41 … Rebîülevvel sonlarında (Temmuz 661)" ∩ ⇒ 0661-07-05…07-31 ⇒ 0661-07-05
munkizogullari t 1157-01-01 "Receb 552'de (Ağustos 1157)"            ⇒ 1157-08-09
zengi-musul  t 1233-01-01  "Rebîülevvel 631 / Aralık 1233"          ⇒ 1233-12-05  (11 ay kayma)
```
En büyük kaymalar: **zengi-musul / lului 1233 (11 ay)** · **hamdani-musul f 905 (10 ay)** · **fatimi 909** ·
**saltuklu 1071** · **karmati / uyuni 1076** (7-9 ay).

### 1.3 Zincir kontrolü (⑤)
Ham eşleşme 33 uç. Elle ayrıldı:
- **10 gerçek ardıl çifti** (`es_ardil`).
- Geri kalanı aynı `-01-01`'i paylaşan ilgisiz künyeler (`es_tesaduf`): gazneli↔eyyubi-halep · idrisi↔norse-gronland ·
  gurlu↔dongxia vb.
```
çift                                   ortak yazılı   öneri (İKİSİNE BİRLİKTE)   not
hulefa-yi-rasidin t ↔ emevi f          0661-01-01     0661-07-05                 ikisi de DIŞINDA
karahanli t ↔ dogu- / bati-karahanli f 1041-01-01     1041-08-31                 üçü de DIŞINDA (433/1041-42)
midrari t ↔ magrave-sicilmase f        0976-01-01     0976-08-30                 ikisi de DIŞINDA
zengi-musul t ↔ lului f                1233-01-01     1233-12-05                 ikisi de DIŞINDA
kakuyi t ↔ yezd-atabegligi f           1141-01-01     1141-08-06                 ikisi de DIŞINDA
karmati t ↔ uyuni f                    1076-01-01     1076-08-05                 ikisi de DIŞINDA
suve-emirligi t ↔ evfat f              1285-01-01     1285-03-09                 evfat'ın notunda hicrî yok ⇒ eş taşınmalı
yezd-atabegligi t ↔ muzafferi f        1318-01-01     1318-03-05                 muzafferi kontrol dışı ⇒ eş taşınmalı
🔴 rustemi t ↔ fatimi f                0909-01-01     ÇELİŞKİ                     rustemi "Şevval 296 / Temmuz 909" ⇒ 0909-07-01 ·
                                                                                  fatimi "297 (909)" ⇒ 0909-09-20 ⇒ kaynaklar
                                                                                  arasında ~2,5 ay; tek gün seçilemez ⇒ karar
```
Rüstemî/Fâtımî: iki ayrı TDV cümlesi iki ayrı olayı tarihliyor (Tâhert'in düşüşü ↔ Ubeydullah'ın ilânı). Aradaki
2,5 ay ya `__BOSLUK__` (N), ya da Fâtımî f'nin Tâhert gününe çekilmesi (Ebû Abdullah eş-Şîî'nin fethi, Fâtımî adına).
**Karar senin.**

### 1.4 Öngörü sınavı
```
                               öngörü           ölçüm
hicrî taşıyan künye            300 ± 150        108   ✗ (altında)
taşımayan                      500 ± 150        789   ✗ (üstünde)
boş                            40 ± 40          0     ✓ (sınırda)
kontrol edilebilir uç          200 ± 120        145   ✓
DIŞINDA                        110 ± 70         70    ✓
-01-01'lerin dış oranı         %60-90           %60   ✓ (alt sınır)
gün yazılmışların dış oranı    ≤%15             %0    ✓
SINIRDA                        5 ± 5            0     ✓
zincir eşi olan dış uç         20 ± 15          17 (gerçek ardıl uçları) / 33 ham   ✓
hata ağırlıkla f'de            evet             f 42 / t 28   ✓
```
Desen tuttu, büyüklük yine yanlış. Bu kez yön ters: hicrî kaynaklı künye beklediğimden AZ (%12). Ama o %12'nin
yarısına yakını hatalı.

## 2. ③ İSTİYORUM
a) **70 uçluk düzeltme listesi** (csv `oneri` sütunu) FAZ 2 veri partisine. Kural: hicrî aralık ∩ kaynağın miladî
   yılı ∩ (varsa) miladî ay ⇒ kesişimin ilk günü. 10 ardıl çifti BİRLİKTE kaydırılır (§1.3).
   - `evfat` ve `muzafferi` kontrol dışı ama eş oldukları için taşınmalı.
b) **Rüstemî ↔ Fâtımî kararı** (0909-07-01 ↔ 0909-09-20).
c) **Sözleşme düzeltmesi önerisi (kalıcı):** "gün yoksa `YYYY-01-01`" sözleşmesi hicrî kaynağa UYGULANMAZ. Hicrî yıl
   verilmişse varsayılan gün **hicrî yılın ilk miladî günü ∩ kaynağın miladî yılı**dır. Bu gece bulunan 70 + 3 dış
   vakanın HEPSİ bu tek sözleşmeden doğuyor; kural düzeltilmezse yeni künyeler aynı hatayı üretmeye devam eder.
d) **Evren dışı kalanlar için ikinci tur:** notunda hicrî olmayan ama TDV maddesi hicrî tarih veren künyeler
   (`sasani`, `hulefa-yi-rasidin` gibi). 789 künyenin TDV gövdeleri çekilip aynı tarama yapılabilir. Pahalı (789
   madde), ama gerçek büyüklüğü ancak o verir. Önce örneklem (50 künye) önerim.

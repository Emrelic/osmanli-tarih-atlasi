# KASA-HICRI-MADDE-1010 — hicrî tuzak, MADDE başına: TDV ülke/dönem maddeleri × künye uçları

Görev: YILDIRIM BAYEZIT (HICRI-TARAMA-2 kararı (b)) · Araştırmacı: KASA · salt okunur, `data/` DONUK.
Yöntem (ölçümden önce sabit):
- **Maddeler:** TDV `iran` · `irak` · `misir` · `suriye` · `anadolu` · `hindistan` · `maverainnehir` · `magrib` ·
  `yemen` · `endulus`. Kabul ölçütü ⑤ için ayrıca `sasaniler` · `hulefa-yi-rasidin`. Ölü slug ⇒ ajax arama ile
  doğrusu bulunur, adıyla bildirilir.
- **Çift çıkarma:** her cümleden H/M ifadeleri (birinci turun desenleri).
- **Künyeye bağlama:**
  - Cümle künyenin ADINI taşımalı: `ad` alanının ilk ana sözcüğünün kökü (≥5 harf, katlanmış) ya da id kökü.
  - Çiftin miladî yılı künyenin `f` ya da `t` yılına eşit olmalı.
  - Bağlanan her DIŞINDA cümlesiyle elle doğrulanır. Ham eşleşmeye güvenilmez: cümle o künyenin O UCUNU mu
    tarihliyor (⑧)?
- **Hüküm:** kesişim kuralı (hicrî ∩ miladî yıl ∩ miladî ay; öneri = ilk gün).
- **Üç kova:** İÇİNDE · DIŞINDA · ÖLÇÜLEMEDİ (madde künyenin o ucunun yılını H/M ile vermiyor). Kovalar
  KARIŞTIRILMAZ, oranın paydası yalnız ölçülenlerdir.
- **Zincir:** dış ucun eşi aranır; ardıl mı tesadüf mü elle ayrılır.

## 0. ÖNGÖRÜ (ölçümden ÖNCE, 2026-10-10) — desen keskin, büyüklük İKİ KAT geniş
**Desen:**
- ① Dış uçların hepsi `-01-01` (%95).
- ② Dış uçların çoğu 622-1500 arası hânedan ve hilâfet uçları (%85).
- ③ **`sasani` t** `iran` / `sasaniler` maddesinde H/M ile bulunur ve DIŞINDA çıkar (%90). **`hulefa-yi-rasidin` f**
  için TDV "11/632" verir ⇒ DIŞINDA (%75); madde yalnız "632" derse ÖLÇÜLEMEDİ.
- ④ Bağlanan uçların bir kısmı birinci turla çakışır ⇒ birinci turun hükümlerini TEKRAR üretir (tutarlılık
  testi; çelişki %10).
**Büyüklük (iki kat geniş):**
- Çekilen 12 maddeden H/M çifti: **1.500 ± 1.500**.
- Künye ucuna bağlanan çift (ad + yıl eşleşmesi, elle doğrulanmış): **100 ± 100**.
- Bunlardan birinci turda OLMAYAN yeni uç: **50 ± 50**. Yeni uçlardan DIŞINDA: **25 ± 25**.
- Gerçek ardıl eşi olan dış uç: **8 ± 8**.

## 1. ÖLÇÜM

**Maddeler:** 12 TDV maddesi çekildi.
- Ölü slug iki tane, ajax aramayla düzeltildi: `irak` 302 → **`irak--ulke`** · `maverainnehir` 302 →
  **`maveraunnehir`**.
- H/M çiftleri: iran 96 · irak--ulke 101 · misir 118 · suriye 120 · anadolu 22 · hindistan 21 · maveraunnehir 22 ·
  magrib 60 · yemen 141 · endulus 28 · sasaniler 3 · hulefa-yi-rasidin 56 = **788**.
**Çıktı:** `denetim/KASA-HICRI-MADDE-1010.csv` (69 satır; `inceleme` sütunu elle doldurulmuş sınıf).

### 1.1 Bağlama ve kovalar
```
bağlanan uç (künye × alan; ad + yıl eşleşmesi)   55
  1. turla çakışan                                38
  yeni (1. turun evreni dışı)                     17
ham hüküm: İÇİNDE 47 satır · DIŞINDA 21 satır   (+1 elle: hulefa-yi-rasidin f)
ÖLÇÜLEMEDİ: bu maddelerin H/M ile değmediği bütün öteki uçlar. Oran paydasına GİRMEZ (TARAMA-2 dersi).
```
**DIŞINDA'ların elle sınıflanması (21 + 1):**
| sınıf | uç | hüküm |
|---|---|---|
| **YENİ-GERÇEK (6)** | `sasani` t 0651-01-01 (iran "31/651") · `akkoyunlu` t 1514-01-01 (iran "Akkoyunlu Devleti'ne son verdi (920/1514)") · `memluk` f 1250-01-01 (misir + suriye "648'de (1250) kurulan Memlük Devleti") · `trablusgarp-ocagi` f 1551-01-01 ("958'de (1551)") · `yemen-zeydi` f 0897-01-01 (yemen "284'te (897) Zeydî imâmetini tesis etmek üzere Sa'de'ye gelen") · `hulefa-yi-rasidin` f 0632-01-01 (elle, aşağıda) | **hepsi `-01-01`** |
| **1. TUR TEKRARI (8)** | emevi f · mirdasi f · suriye-selcuklu t · zengi-halep f · murabitlar f · suleyhi f · zureyi f · hulefa-yi-rasidin t | birinci turla AYNI hüküm. Râşidîn t'ye **gün** geldi: "(25 Rebîülevvel 41/29 Temmuz 661)" ⇒ **0661-07-29** |
| **BAŞKA OLAY ⑧ (3)** | abbasi f (131/749 Kûfe hutbesi ≠ 132 halifelik ilânı) · tahiri t (26 RA 923 Cidde savunması ≠ II. Âmir'in ölümü) · irak-selcuklu f (Sencer'in tahtı 511 ≠ Mahmud'un 13 Muharrem 512) | yanlış pozitif — atlas doğru |
| **MADDE ÇELİŞKİSİ ⑥ (4)** | muvahhidler t: künye notu "667/1269" ↔ `magrib` "668'de (1269) Merînîler … Merakeş'i ele geçirdiler" · ziyadi f: "202 (818)" ↔ `yemen` "203/818" · hamdani-yemen f: "491 (1098)" ↔ "492'de (1098)" · hamdani-yemen t: "569'da (1174)" ↔ "570/1174" | iki TDV maddesi aynı olaya farklı hicrî yıl veriyor ⇒ karar |
Öneriler (kesişimin ilk günü):
- sasani t **0651-08-24** · akkoyunlu t **1514-02-26** · memluk f **1250-04-05** · trablusgarp-ocagi f **1551-01-09**
  · yemen-zeydi f **0897-02-08**.
- ⚠️ Memlük f'si ertelenirse Eyyûbî(Mısır) t ile zincir kontrol edilmeli: o künyenin t'si 1250-01-01 değil
  (eşleşme yok), ama aradaki boşluk ayrıca ölçülmeli.

### 1.2 ⑤ Kabul ölçütü — iki açık uç ADIYLA kapandı
- **`sasani` t:** TDV `iran` "Yezdicerd'in direnişleri bir netice vermedi ve onun öldürülmesiyle Sâsânî Devleti
  tarihe karıştı (31/651)." ⇒ 31 AH ∩ 651 = **0651-08-24 … 0651-12-31** ⇒ yazılı 0651-01-01 DIŞINDA ⇒ öneri
  **0651-08-24**. (`sasaniler` maddesinin kendisi yalnız miladî "651" veriyor; hicrî kesinlik `iran`'dan — çapraz
  madde sınıfının ta kendisi.)
- **`hulefa-yi-rasidin` f:** madde başlığı yalnız "(632-661)"; H/M çifti YOK. Ama iki gün düzeyi cümle pencereyi
  çiziyor:
  - "…8 Rebîülevvel 11 (3 Haziran 632) tarihinde öldürüldüğü ve bunu Resûl-i Ekrem'in vefatından bir gün önce haber
    verdiği" ⇒ vefat ≥ 632-06-04.
  - "Ebû Bekir … 1 Rebîülâhir 11 (26 Haziran 632) tarihinde orduya hareket emrini verdi" ⇒ halife olarak ≤ 632-06-26.
  - ⇒ pencere **0632-06-04 … 0632-06-26** ⇒ 0632-01-01 DIŞINDA (hicrî 11 bile 632-03-29'da başlıyor).
  - Öneri **0632-06-04** (`ay`). ⚠️ "bir gün önce" üzerinden kurulan alt sınır bir çıkarım (cümle vefat gününü
    doğrudan vermiyor) ⇒ beyanlı.
- **Râşidîn t / Emevî f zinciri:** birinci turun önerisi (0661-07-05, ay başı) → bu turda **gün**: 25 Rebîülevvel 41
  = **0661-07-29**. İkisi BİRLİKTE 0661-07-29.

### 1.3 Zincir (③)
Yeni 6 dış ucun eşi tarandı. Tek ham eşleşme akkoyunlu t ↔ `yarkent-hanligi` f (ikisi de 1514-01-01) ⇒
**tesadüf** (Akkoyunlu'nun ardılı Safevî, f 1501). ⇒ Gerçek ardıl eşi olan yeni dış uç **0**. Râşidîn↔Emevî çifti
birinci turdan, gün düzeyinde güncellendi.

### 1.4 Öngörü sınavı
```
DESEN                                               öngörü      ölçüm
① yeni dış uçların hepsi -01-01                     %95         6/6 ✓
② çoğu 622-1500                                      %85         4/6 (651·897·1250·1514* · 632 · 1551) ~ ✓ zayıf
③ sasani t bulunur ve DIŞINDA                        %90         ✓ (iran 31/651)
   rasidin f "11/632" ile DIŞINDA                    %75         DIŞINDA ✓ ama H/M ile DEĞİL, gün cümleleriyle
④ 1. turla çakışmada çelişki                         %10         4/38 = %11 ✓ (hepsi madde-madde ⑥, yöntem değil)
BÜYÜKLÜK (iki kat geniş)
H/M çifti                                           1.500±1.500 788 ✓
bağlanan uç                                         100±100     55 ✓
yeni uç                                             50±50       17 ✓
yeni uçlardan DIŞINDA                               25±25       6 ✓
gerçek ardıl eşi olan dış uç                        8±8         0 ✓ (alt uç)
```

## 2. ③ İSTİYORUM
a) **⑤ kapandı:**
   - `sasani` t → **0651-08-24** (iran 31/651).
   - `hulefa-yi-rasidin` f → **0632-06-04** (penceresi 06-04…06-26; çıkarım beyanlı).
   - Râşidîn t + Emevî f → **0661-07-29** (gün; birinci turun 07-05'inin yerine).
b) **Yeni 4 dış uç** veri partisine: akkoyunlu t 1514-02-26 · memluk f 1250-04-05 · trablusgarp-ocagi f 1551-01-09 ·
   yemen-zeydi f 0897-02-08. Eşi yok; tek taraflı kaydırma güvenli. ⚠️ Memlük f ↔ Eyyûbî(Mısır) t arası ayrıca ölçülmeli.
c) **4 madde çelişkisi (⑥)** kararı: muvahhidler 667↔668 · ziyadi 202↔203 · hamdani-yemen 491↔492 ve 569↔570.
   Önerim: olay aynıysa ülke maddesi değil, hânedanın KENDİ maddesi tercih edilsin (künye notu zaten oradan); çelişki
   `ic_not`'a yazılsın.
d) **Yöntem notu:** madde başına tarama, künye başına taramanın ölçemediği 17 uca ulaştı ve 6 yeni hata buldu.
   Kalan büyük maddeler (`anadolu` 22 çift gibi az verimli olanlar hariç): `endulus` dışında `osmanlilar`,
   `selcuklular`, `abbasiler`, `fatimiler` gibi hânedan-ana maddeleri — sonraki tur adayı.

# ÖLÇÜM — BENİM 22'M ile `harita-or-id` VAKASININ 33'Ü AYNI MI?

> **GECIS-SURE-0907 · 7 Eylül 2026 · 1.MURAT M-3149.**
> *"Hüküm verme, ÖLÇ. Bu proje o düzeltmeyi bir kez yaptı ve çürüdü;
> ikinci kez ölçülmeden yapılmaz."* — uydum.
> 🔒 `arac/renkler.py` koşu 8 sürerken DONUK — yalnız **okundu** (import).

---

## ⓪ CEVAP — ③, yani AYRI kümeler

```
A ∩ B = 0        ⇒ İKİ KÜME AYNI ŞEY DEĞİL, kalem KAPALI DEĞİL
ama A'nın 22/22'si B'deki bir künye tarafından GÖSTERİLİYOR
                 ⇒ aynı ilişkinin İKİ UCU, birebir örtüşüyorlar
```
Ve `85.977` düzeltilince: **93.582** (+7.605 çift · **+%8,8**).

---

## ① İKİ KÜME — tanımları ayrı, nesneleri ayrı

| | ne | örnek | sayı |
|---|---|---|---|
| **A** (benim) | `harita:` **DEĞERİ** olarak geçen, hiçbir künyenin `id`si **OLMAYAN** kimlik | `bosna` | 23 (veride kullanılan **22**) |
| **B** (o 33) | `harita:`sı kendi `id`sinden **FARKLI** ve `id`si `BOYALAR`da **OLMAYAN** künye | `bosna-kralligi` | **32** |

🔴 **A `harita:` ANAHTARLARINDAN, B KÜNYELERDEN oluşuyor.** Kesişimleri
sıfır ve olması da gerekmiyor — bir künye ile onun işaret ettiği boya
anahtarı **farklı nesnelerdir**.

⚠️ **B = 32, CLAUDE.md 33 diyor.** Bir fark var ve **açıklamadım** —
veri o kayıttan bu yana değişmiş olabilir (künye 627, BOYALAR 579 bugün).
Damgası: **ölçmedim.** Manşeti değiştirmiyor.

---

## ② İLİŞKİ — 22/22 birebir

```
arnavutluk      ← arnavutluk-iskenderbey · arnavutluk-bagimsiz
atinadukaligi   ← atina-dukaligi          avusturya   ← habsburg
bosna           ← bosna-kralligi          bulgaristan ← bulgar-carligi ·
ceneviz         ← cenova                    bulgaristan-prensligi · -kralligi
cimma           ← cimma-sultanligi        hicaz       ← hicaz-kralligi
isa-celebi      ← fetret-isa              kaffa       ← kaffa-kralligi
lusignan        ← kibris-krallik          mehmed-celebi ← fetret-mehmed
milanoduka      ← milano-dukaligi         musa-celebi ← fetret-musa
sardinya        ← sardinya-piyemonte      sidamo      ← sidamo-kralliklari
sirbistan       ← sirbistan-nemanjic · sirp-despotlugu · sirbistan-prensligi
sovalye         ← rodos-sovalyeleri       suleyman-celebi ← fetret-suleyman
suud            ← suud-birinci · -ikinci · -ucuncu
vollayta        ← vollayta-kralligi       yemen       ← yemen-zeydi
```
**A'nın 22/22 üyesi B'deki bir künye tarafından gösteriliyor.**
⇒ Kesişim sıfır ama **eşleşme tam**. İki küme aynı ilişkinin iki ucu.

---

## ③ 🔴 VE ÇÜRÜMÜŞ DÜZELTME BENİMKİNİ KAPSAMIYOR — ama bunu ÖLÇÜM söylüyor

`CLAUDE.md`nin çürüttüğü düzeltme:
```
RENK denetiminde anahtar kümesi `harita or id` yerine `id ∪ harita`
⇒ `bosna-kralligi` (B) "rengi yok" diye SAHTE İŞARETLENİR   +33 yanlış
```
Benim önerdiğim düzeltme (`ONERI-ALET-BORCLARI-0907.md`, borç ③):
```
denetle.py:1620 `_devletler_yukle()` dönüşüne `harita:` anahtarlarını EKLE
⇒ `s:{d:"bosna"}` (A) bir pencere BULUR, "künyesiz" sayılmaz
```

| | çürüyen düzeltme | benim düzeltmem |
|---|---|---|
| hangi alet | renk denetimi | `denetle.py` `degismez4` |
| hangi küme | **B** (künyeler) | **A** (`harita:` anahtarları) |
| ne yapıyor | künyeden renk **istiyor** | veri kimliğine pencere **veriyor** |

⇒ **Farklı alet, farklı küme, ters yön.** Çürüme benimkini kapsamıyor.

🔴 **AMA "o hâlde güvenli" DEMİYORUM.** Benim düzeltmemin kendi riski
ayrıca kayıtlı ve **duruyor**: `harita:` anahtarına **çok künye** bağlı
(`sirbistan`←3, `suud`←3, `bulgaristan`←3), pencere **birleşim** alınıyor
ve birleşim aradaki gerçek fetretleri de kapsıyor ⇒ o kimlikler için
hayalet denetimi **daha gevşek** olur. Bu bir bedel ve `ONERI-ALET-
BORCLARI-0907.md`de yazılı.

---

## ④ `85.977` DÜZELTİLİNCE — ölçüldü

Aynı ölçüt (künye penceresi), iki sözlükle:

```
parçası olan kimlik                   552
ESKİ  (yalnız `id`)              85.977 çift · kapsanan kimlik 530
YENİ  (`id` + `harita:` birleşim) 93.582 çift · kapsanan kimlik 552
FARK                             +7.605 çift  (+%8,8)
```
🟢 **ESKİ sayı 85.977 — önceki aletin sayısıyla BİREBİR.** Yani yeniden
kurduğum ölçüt onunkiyle aynı; fark yalnız sözlükten geliyor, yöntemden
değil.

**İkinci geçiş bandına etkisi:** ~3,1–13,4 sn → **~3,4–14,6 sn.**
Mertebe değişmiyor; koşunun on binde biri olmayı sürdürüyor.

---

## ⑤ HÜKÜM — ve vermediğim hüküm

```
🟢 ÖLÇÜLDÜ   A ∩ B = 0 · A'nın 22/22'si B tarafından gösteriliyor
🟢 ÖLÇÜLDÜ   85.977 → 93.582 (+%8,8) · kapsama 530 → 552
🟢 ÖLÇÜLDÜ   ESKİ sözlük önceki aletin sayısını BİREBİR üretiyor
🔴 KALEM KAPALI DEĞİL — kümeler ayrı, çürüme benimkini kapsamıyor
⚪ ÖLÇMEDİM  B'nin 32 ↔ CLAUDE.md'nin 33 farkı
⚪ ÖLÇMEDİM  düzeltme uygulanınca `Değişmez 4`te kaç YENİ hayalet doğacağı
             — `ONERI-ALET-BORCLARI-0907.md`de zaten `ölçülemedi` damgalı,
             ve `arac/` donuk olduğu için bugün de ölçülemez
```
🔴 **Düzeltmeyi ÖNERMİYORUM, uygulamıyorum.** Ölçtüğüm şey yalnız
*"çürümüş vaka bunu kapsıyor mu"* sorusu, ve cevabı **hayır**. Uygulama
kararı — ve onun ön koşulu olan hayalet ölçümü — başkasının.

## ⑥ ALET
```
denetim/ARAC-HARITA-KESISIM-0907.py   iki kümeyi kurar, kesiştirir, eşler
```
🔒 `renkler.py`yi **import** eder (okur), yazmaz. Çözücü çıktısı bastırılır.

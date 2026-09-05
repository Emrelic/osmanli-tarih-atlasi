# ÖLÇÜM — 397 kayıt taşınmadan önce: **17 yeni çakışma, ve 14'ü İKİ dosyadan**

> **Oturum:** KÜRE GÖRÜNÜM · **Sevk:** `M-2989` · **Tarih:** 5 Eylül 2026
> **Cins:** ÖLÇÜM — *veri yazılmadı, HİÇBİR DOSYA TAŞINMADI, hüküm yok.*

---

## 1. YÖNTEM — ve iki tuzağı önceden kapattım

```
① REGEX DEĞİL: 90 dosya `node` + `vm` ile, HER BİRİ İZOLE BAĞLAMDA
   yüklendi. Tek bağlamda `eval`, aynı `window.X` adını kullanan iki
   dosyada SESSİZ EZME üretir (§7 "ayrı dosya ≠ ayrı ad alanı").
   🟢 Ve ölçtüm: küresel ad çakışması **0** — ama önlem gerekliydi.
② ÇAKIŞMA KURALINI KENDİM YAZMADIM, `_sahiplik_uygula.py`den OKUDUM.
```

### 🔴 VE İLK ÖLÇÜMÜM FAZLA GENİŞTİ — kendi sayımı düzeltiyorum
İlk turda *"22 çarpışan ad"* buldum: `denetim/`deki bir `ad:`ın
`data/`de de var olması. Sonra aracın **kendi kuralını** okudum:
```python
# _sahiplik_uygula.py:265
yazanlar = [x for x in liste if alan in x["r"]]
if len(yazanlar) < 2: continue        # TEK YAZAN ⇒ ÇATIŞMA YOK
# ve: "YALNIZ `kaynak` ayrışıyorsa bu bir VERİ ÇATIŞMASI DEĞİLDİR"
#     → veri İNER, `kaynak` yazılmaz, UYARI basılır
```
İki incelik: **bir alanı tek dosya yazıyorsa çatışma değildir**, ve
**yalnız `kaynak` ayrışması bloke etmez.** Benim ölçütüm ikisini de
görmüyordu.
⇒ **22 → 17 yeni bloke.** Aracın kuralıyla yeniden sayıldı.

---

## 2. SONUÇ

```
benzersiz `ad:` (denetim+data)      540
tek kayıtlı (çakışma imkânsız)      509
──────────────────────────────────────
🔴 BLOKE  (veri alanı ayrışıyor)     24
🟡 yalnız `kaynak` ayrışıyor          1   ← veri İNER, uyarı basılır
──────────────────────────────────────
⇒ TAŞIMANIN GETİRDİĞİ YENİ BLOKE     17
⇒ `data/` içinde ZATEN var olan       7   ← taşımayla ilgisi YOK
```
📌 Koordinatörün tahmini *"~28"*di; ölçüm **17 yeni.**
🟢 Ve 7'nin ayrılması önemli: onlar **bugün de bloke** ve taşıma
onları ne yaratıyor ne çözüyor. Tek sayıda toplansaydı taşımaya
haksız yere yüklenirlerdi.

### 🟢 `denetim/` İÇİNDE MÜKERRER — neredeyse YOK
```
397 kayıt · 396 benzersiz ad
aynı ad iki dosyada, İÇERİK AYNI   : 0
aynı ad iki dosyada, İÇERİK FARKLI : 1   Timbuktu
                                         (belgesiz7 · timbuktu)
```
⇒ Dört ayrı oturum 397 kayıt yazmış ve **tek bir ad** çakışmış. Bu
beklenenden çok iyi.

---

## 3. 🔴 TAŞIMANIN GETİRDİĞİ 17 — **VE 14'Ü İKİ DOSYADAN**

| çakışan ad | ayrışan alan | dosyalar |
|---|---|---|
| `Derbend` | `s` | kafkas · **zend_kacar** |
| `Gence` | `s` | kafkas · **zend_kacar** |
| `Hemedan` | `s` | kafkas · **zend_kacar** |
| `Kirmanşah` | `s` | kafkas · **zend_kacar** |
| `Revan` | `s` | kafkas · **zend_kacar** |
| `Kasr-ı Şîrîn` | `d,s,neden` | kafkas · p0035 · **zend_kacar** |
| `Eçmiyadzin` | `s` | ok110 · **zend_kacar** |
| `Gümrü (Aleksandropol)` | `s` | ok110 · **zend_kacar** |
| `Meşkinşehr (Hiyav)` | `s` | ok109_fetret · **zend_kacar** |
| `Kusayr` | `s,kaynak` | ok101 · **misir_himaye** |
| `Sefâce` | `s,kaynak` | ok101 · **misir_himaye** |
| `Sina güneyi` | `s,kaynak` | ok101 · **misir_himaye** |
| `Süveyş` | `s,kaynak` | ok101 · **misir_himaye** |
| `Tûr (Sînâ)` | `s,kaynak` | ok101 · **misir_himaye** |
| `Timbuktu` | `s,kaynak,bos,neden` | belgesiz7 · ok107 · timbuktu |
| `Manama (Bahreyn)` | `s,kaynak,neden` | gece_v1 · **1923_duzeltme** |
| `Drama` | `d,s,kaynak` | balkan_makedonya · **dogumakedonya** |

> ### ⇒ **İKİ DOSYA 17'NİN 14'ÜNÜ ÜRETİYOR**
> ```
> yer_yama_zend_kacar.js    9 çakışma  (132 kayıtlık en büyük dosya)
> yer_yama_misir_himaye.js  5 çakışma  ( 56 kayıt)
> kalan 3                   Timbuktu · Manama · Drama — tekil
> ```
> **O ikisinin örtüşmesi çözülürse yeni çakışmaların %82'si kapanır.**

### 🟡 TEK `kaynak` VAKASI — aracın özel dalı ateşleyecek
```
Mîyandoab   yer_yama_iran.js · yer_yama_uyg2.js · yer_yama_zend_kacar.js
            ayrışan tek alan: `kaynak`
⇒ Aracın 2 Eylül'de eklenen dalı: VERİ İNER, `kaynak` YAZILMAZ, UYARI.
   Bloke DEĞİL.
```
🟢 O dalın bugüne kadarki vaka sayısı kodda *"0"* diye yazılıydı;
taşımadan sonra **1** olacak. Dal ilk gerçek işini görecek.

### ⚪ `data/` İÇİNDE ZATEN BLOKE OLAN 7 — taşımayla ilgisi yok
```
Bağdat · Başkale · Halepçe · Kutaisi · Yergöğü (Giurgiu) ·
Çaldıran · Şehrizor
```
Bunlar bugün de bloke. **Taşıma öncesi/sonrası değişmez** — ama
taşımadan sonra kuru koşuda görüneceklerdir ve *"taşıma bunları
getirdi"* sanılmamalı.

---

## 4. DAMGALAR

```
🟢 YÖNTEM      90 dosya `node`+`vm` ile İZOLE bağlamda · regex YOK
🟢 ÖLÇTÜM      küresel ad çakışması 0 (§7 önlemi gerekliydi ama temiz)
🔴 KENDİ SAYIMI DÜZELTTİM  22 → 17: aracın kuralı iki incelik taşıyor
               (tek yazan ⇒ çatışma yok · yalnız `kaynak` ⇒ bloke değil)
               ve benim ölçütüm ikisini de görmüyordu
🟢 AYIRDIM     17 YENİ · 7 ZATEN VAR — tek sayıda toplanmadı
🔴 BULDUM      17'nin 14'ü İKİ dosyadan (zend_kacar 9 · misir_himaye 5)
🟢 ÖLÇTÜM      denetim/ içi mükerrer: 397 kayıtta TEK ad (Timbuktu)
⚪ ÖLÇMEDİM    17 çakışmanın hangi tarafının DOĞRU olduğunu — bu bir
               kaynak sorusu ve bu tur ölçüm turuydu
⚪ ÖLÇMEDİM    `Timbuktu`nun üç yamasının hangisinin güncel olduğunu
               (üç dosya, üç ayrı oturum)
🔴 TAŞIMADIM   hiçbir dosyayı. `data/` YASAK ve dosyalar başka
               oturumların.
```

---

## 5. TESLİM — sayıyla

```
① EVREN     denetim/ 32 dosya · 397 kayıt · 396 benzersiz ad
            data/    58 dosya · 177 kayıt · 166 benzersiz ad
② denetim İÇİ mükerrer   1 (Timbuktu, içerik farklı) · aynı içerik 0
③ 🔴 BLOKE toplam       24  → 17 YENİ + 7 zaten var
   🟡 yalnız kaynak      1  (Mîyandoab — veri iner, uyarı basar)
④ YOĞUNLAŞMA  zend_kacar 9 · misir_himaye 5 ⇒ ikisi %82'sini üretiyor
⑤ ⇒ ÖNERİ (hüküm değil): taşımadan ÖNCE o iki dosyanın örtüşmesi
   çözülürse, kuru koşu 24 yerine 8 çakışma bildirir.
```

---
---

# EK — 17 çakışma **DÖRT SORUYA** iniyor

> **Sevk:** `M-2996` · aynı gün · *değer düzeyinde tablo, hüküm yok.*

## K1. 🔴 ÖNCE: KENDİ TASNİFİMİ DÜZELTTİM — 2 🟢 vardı, **0**

İlk turda `Kasr-ı Şîrîn` ve `Timbuktu`yu *"🟢 TAMAMLAYICI"* saymıştım.
Sebebi bir yöntem kusuruydu:
```
yaptığım : ortak alanı TÜM kayıtlar üzerinden KESİŞİMLE aldım
olması gereken: çatışma İKİLİDİR — her ÇİFT ayrı sınanır
```
Üç dosyalı vakalarda **üçüncü dosyanın o alanı yazmaması**, öteki
ikisinin çatışmasını gizliyordu. `Kasr-ı Şîrîn`de `p0035` yalnız `d:`
yazıyor; `zend_kacar` ↔ `kafkas` ikisi de `s:` yazıyor **ve
ayrışıyorlar.**
⇒ İkili sınavla: **17/17 ESASA İLİŞKİN**, 🟢 kova BOŞ.

## K2. ⇒ AMA 17 ÇAKIŞMA **17 SORU DEĞİL — DÖRT**

### 🔴 SORU 1 — *Zend→Kaçar geçişi 1794 mü 1796 mı?* · **9 kayıt**
```
zend_kacar      1747-06-20 → 1794-01-01  zend   ·  1794-01-01 → …  kacar
karşı taraf     1747-06-20 → 1796-01-01  zend   ·  1796-01-01 → …  kacar
```
| kayıt | karşı dosya |
|---|---|
| Derbend · Gence · Hemedan · Kasr-ı Şîrîn · Kirmanşah · Revan | `kafkas` |
| Eçmiyadzin · Gümrü (Aleksandropol) | `ok110` |
| Meşkinşehr (Hiyav) | `ok109_fetret` |

🟢 **VE BU SORU ZATEN ÖLÇÜLMÜŞ VE KAYITLI:**
`denetim/YAMA-ZEND-KACAR-0905.json` → *"③ KAYNAK 1794-1796 ARASINI
BOŞ BIRAKIYOR"* · *"🔴 HÜKÜM VERİLMEDİ — üç yol ölçüldü, üçünün de
bedeli yazıldı. Seçim 132 kaydı ve iki künyeyi bağlar."*
⇒ **Dokuz çakışma bir kaynak boşluğunun görünen yüzü.** Karar verilince
dokuzu birden kapanır.

⚠️ Ve `Gence` · `Revan`da **ikinci bir ayrım** var, çatışma değil
**tanecik**: `zend_kacar` 1813 sonrasını ince yazıyor
(`rusya → rusya-gecici-hukumet → transkafkasya →
azerbaycan-demokratik-cumhuriyeti`), `kafkas` tek dilim
(`rusya 1813→1923`). İnce olan kabaını **kapsıyor** ⇒ mekanik.

### 🔴🔴 SORU 2 — *Himâye altındaki toprak KİMİN kimliğiyle boyanır?* · **6 kayıt**
```
misir_himaye   1914-12-18 → 1922-03-15  misir-sultanligi
               1922-03-15 → 1923-10-29  misir-kralligi      ← YEREL kimlik KALIR
ok101          1914-12-18 → 1923-10-29  ingiltere            ← METROPOL
       (Kusayr · Sefâce · Sina güneyi · Süveyş · Tûr (Sînâ))

1923_duzeltme  1783-01-01 → 1923-10-29  bahreyn              ← YEREL
gece_v1        1783-01-01 → 1861-05-31  bahreyn
               1861-05-31 → 1923-10-29  ingiltere            ← METROPOL
       (Manama (Bahreyn))
```
> ### 🔴 BU, BU SABAH ÖLÇTÜĞÜM ② ↔ ③ AYRIMININ TA KENDİSİ
> `OLCUM-KUNYE-BITISI-EMILME-0905.md`de bulduğum üç temsil biçimi:
> ② sömürge → metropol kimliği · ③ sömürge → kendi kimliği.
> **İki oturum aynı soruya iki farklı cevap yazmış**, ve ikisi de
> `data/`ye inmeyi bekliyor.
> ⇒ **Emre'nin beşinci kararı bu altı kaydı DOĞRUDAN çözüyor.**

🟢 Ve `misir_himaye`nin dayanağı yazılı: `M-2784`ün Mısır emsali —
*"himaye durumunda `s:` yerel kimlikte KALIR, `isg:` işgal/koruyucu
güç olarak EKLENİR."* ⇒ Bir hüküm **zaten var**; `ok101` ondan önce
yazılmış olabilir. **ÖLÇMEDİM** (tarih karşılaştırması yapmadım).

### 🟢 SORU 3 — `Timbuktu`: çakışma DEĞİL, **birleştirme** · 1 kayıt
```
ok107      1281-01-01 → 1700-01-01   mali · songhay · fas
timbuktu   1760-01-01 → 1923-10-29   tuareg · bambara · massina · tekrur · fransa
ORTAK DİLİM: 0
```
İki yama **farklı yüzyılları** kapsıyor. Araç `s:` dizisini **bütün
olarak** karşılaştırdığı için çatışma sayıyor — ama içerik
**tamamlayıcı**. ⇒ Mekanik birleştirme; kaynak gerekmez.
⚠️ Üçüncü dosya `belgesiz7` hiç veri alanı taşımıyor, yalnız
`bos:`/`neden:` beyanı — o da ayrı ve uyumlu.

### 🟡 SORU 4 — `Drama`: Bulgar ara dönemi var mı? · 1 kayıt
```
dogumakedonya    1913-05-30 → 1913-08-10  bulgaristan-kralligi
                 1913-08-10 → 1923-10-29  yunanistan
balkan_makedonya 1913-06-28 → 1923-10-29  yunanistan          ← ara dönem YOK
```
Biri Londra (30 Mayıs) → Bükreş (10 Ağustos) arasında bir **Bulgar
dönemi** yazıyor, öteki doğrudan Yunanistan'a geçiyor. Tekil, ve
kaynak sorusu.

---

## K3. ③ DESEN SINAVI — **boyut DEĞİL, ÜST ÜSTE BİNEN TOPRAK**

Koordinatörün hipotezi: *"o iki dosya BÜYÜK olduğu için mi?"*
**ÖLÇÜLDÜ — hayır.**

```
dosya                        kayıt  çakışma  oran   adı BAŞKA dosyada da olan
yer_yama_zend_kacar.js         132      9    6,8%          14
yer_yama_misir_himaye.js        56      5    8,9%           5
yer_yama_tunus.js               36      0    0,0%           0   ← 3. EN BÜYÜK
yer_yama_doguasya.js            19      0    0,0%           0
yer_yama_litvanya.js            19      0    0,0%           0
yer_yama_1923_duzeltme.js        4      1   25,0%           1   ← EN KÜÇÜKLERDEN
yer_yama_belgesiz7.js            3      1   33,3%           1
```
🔴 **Üçüncü en büyük dosya (`tunus`, 36 kayıt) SIFIR çakışma üretiyor;
4 kayıtlık `1923_duzeltme` bir tane üretiyor.** ⇒ Boyut hipotezi çürüdü.

🟢 **Belirleyici sütun sonuncusu:** *"adı başka dosyada da olan"*.
`zend_kacar` 14 · `misir_himaye` 5 · **öteki 30 dosyanın toplamı 2.**
⇒ ***Çakışma dosyanın BÜYÜKLÜĞÜNDEN değil, BAŞKALARININ ZATEN YAZDIĞI
TOPRAĞA dokunmasından doğuyor.*** İran-Kafkasya ve Mısır-Sina daha
önce yamalanmış bölgeler; öteki 30 dosya el değmemiş coğrafyada.

📌 Bu, koordinatörün *"çakışma oranı bir veri özelliği değil KATMANIN
YAPISININ sonucudur"* dersinin bir kademe incesi: **katman içinde de
düzgün dağılmıyor — ÖNCEDEN İŞLENMİŞ bölgede yoğunlaşıyor.**

---

## K4. DAMGALAR — EK

```
🔴 KENDİ TASNİFİMİ DÜZELTTİM  2 🟢 → 0. Kesişimi TÜM kayıtlar
               üzerinden almıştım; çatışma İKİLİDİR. Üç dosyalı
               vakalarda üçüncünün susması ötekilerin çatışmasını
               gizliyordu.
🟢 İNDİRGEDİM  17 çakışma → 4 SORU (9 + 6 + 1 + 1)
🟢 BAĞLADIM    Soru 1 zaten `YAMA-ZEND-KACAR-0905.json`da kayıtlı ·
               Soru 2 Emre'nin BEŞİNCİ KARARI
🔴 ÇÜRÜTTÜM    "büyük dosya çok çakışır" hipotezi — `tunus` 36/0
🟢 BULDUM      belirleyici değişken: ÖNCEDEN İŞLENMİŞ toprağa dokunma
⚪ ÖLÇMEDİM    hangi tarafın DOĞRU olduğunu — hiçbirinde (kaynak işi)
⚪ ÖLÇMEDİM    `ok101` ile `M-2784` hükmünün tarih sırasını (ok101
               hükümden ÖNCE mi yazıldı? git log'a BAKMADIM)
🔴 TAŞIMADIM   hiçbir dosyayı.
```

## K5. TESLİM — EK, sayıyla

```
① TASNİF   17/17 ESASA İLİŞKİN (ilk turda 2'sini yanlış 🟢 saymıştım)
② İNDİRGEME  17 çakışma = 4 SORU
   9  Zend→Kaçar 1794 mü 1796 mı   → ZATEN kayıtlı, hüküm bekliyor
   6  himâye: yerel kimlik mi metropol mü → Emre'nin 5. KARARI
   1  Timbuktu — çakışma değil BİRLEŞTİRME (ortak dilim 0)
   1  Drama — Bulgar ara dönemi (tekil kaynak sorusu)
③ DESEN    boyut DEĞİL: `tunus` 36 kayıt/0 çakışma ·
           belirleyici = önceden işlenmiş toprağa dokunma
⇒ İKİ KARAR VERİLİRSE 17'nin 15'i kapanır; kalan 2 tekil.
```

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

# 18 ÇAKIŞMANIN TAM TASNİFİ — **4 mekanik · 14 gerçek**, ve gerçeklerin 10'u ZATEN hükümlü

> **1.MURAT (Oturum 0) · 6 Eylül 2026 · VERİ YAZILMADI** (koşu 7b sürüyor).
> Alet: `denetim/ARAC-CAKISMA-TASNIF-0906.js` — her yama **taban dosyayla
> alan alan** karşılaştırıldı.
> ⚠️ Alet `_sahiplik_uygula.py`yi **taklit etmiyor**; çakışma listesini
> ondan **alıyor** (`§11`: bir aleti taklit eden ölçüm eşiğini VE kova
> yapısını da taşımalı — taşımayacaksam taklit etmem).

---

## ⓪ NİÇİN GEREKLİYDİ

Uygulayıcı üç apayrı durumu **tek satırda** raporluyor:
```
⓪ NO-OP     yama tabanla birebir aynı — zaten uygulanmış
① ÜST KÜME  dönemler aynı, yalnız ALAN ekliyor
② GERÇEK    dönemler ayrışıyor — tarihsel karar gerekiyor
```
🔴 Üçü aynı muameleyi görünce ⓪ ve ① gereksiz yere **hüküm bekliyor.**
Ve sebebi aracın kendi yorumunda yazılı (`:228`): **çatışma imzası kaydın
TAMAMINDAN kuruluyor**, yani iki yama *farklı alanlara* dokunsa bile
çakışma basıyor. `Şehrizor` bunun saf örneği: biri `s:`, öteki `d:`
yazıyor, **ikisi de tabanla aynı.**

---

## ① 🟢 MEKANİK — 4 kayıt, hüküm GEREKMEZ

```
Doha (Katar)   1923_duzeltme NO-OP  ·  vassal_kid ÜST KÜME (+statu,kid)
Kuveyt         1923_duzeltme NO-OP  ·  vassal_kid ÜST KÜME (+statu,kid)
Halepçe        ok109_fetret NO-OP   ·  uyg3 NO-OP
Şehrizor       ok109_fetret NO-OP   ·  uyg3 NO-OP
```
⇒ Çakışan kaydı **no-op yamalardan düşür**, üst kümeyi bırak. Bitti.

---

## ② HÜKMÜ ZATEN OLAN GERÇEKLER — 10 kayıt

```
Bağdat                   → `ok109_fetret` KAZANIR (aşağıda ③)
Başkale · Çaldıran       → HUKUM-UCGEN-BASKALE-CALDIRAN-0906.md (BİRLEŞTİR)
Manama (Bahreyn)         → HUKUM-CAKISMA-KORFEZ-0906.md (`1923_duzeltme`)
Kusayr · Sefâce · Sina güneyi · Süveyş · Tûr (Sînâ)
                         → HUKUM-CAKISMA-MISIR-HIMAYE-0905.md
Kasr-ı Şîrîn             → OLCUM-KALAN-CAKISMA §⑤ (üst küme, ①'le birlikte)
```

## ③ 🟢 BAĞDAT — hüküm `CLAUDE.md`de ZATEN ÖLÇÜLMÜŞ

```
taban          ilhanli 1281→1335-12-01 · celayirli 1335-12-01→1393
ok109_fetret   ilhanli 1281→1340-01-01 · celayirli 1340-01-01→1393
```
`CLAUDE.md §11` bu tam soruyu ölçmüş ve **1340**'ı doğrulamış: TDV
`ilhanlilar` 1256-1353 diyor ve 1335 sonrası **sekiz ilhanı tek tek
sayıyor**; `celayirliler` *"bağımsız bir devlet kurdu (1340)"*.
⇒ 1335-1340 arası bir fetret **yoktu**; veri **yanlış sınır günü**
taşıyordu ve `ilhanli` künyesi (1256→1353) zaten doğruyu söylüyordu.
🟢 **`ok109_fetret` KAZANIR.** Yeni bir ölçüm gerekmiyor — bu, kayıtlı
bir hükmün uygulanmasıdır.

---

## ④ 🔴 KALAN DÖRT — ve İKİSİ **BİRBİRİYLE ÇELİŞİYOR**

```
Yagodina (Jagodina)   ok110:  d: 1459→1689-09-24 · s:AVUSTURYA 1689-09-24→1690-09-09
                              · d: 1690-09-09→1717        ← İŞGAL `s:` ile
Yergöğü (Giurgiu)     p0035:  d: 1449→1829-09-14
                              · isg:RUSYA 1810-09-27→1812-05-28  ← İŞGAL `isg:` ile
```
🔴 **Aynı olay sınıfı (geçici askerî işgal), İKİ FARKLI MODEL.** Bu, bugün
Manama'da hükme bağlanan sorunun ta kendisi.

### 🟢 ÖLÇÜM — konvansiyon `isg:`, ve analojiyle değil SAYIYLA
```
isg: dönemi TOPLAM 401
   ingiltere 225 · yunanistan 54 · fransa-cumhuriyet 48 · rusya 27
   · italya 26 · AVUSTURYA 18 · fransa 2 · ispanya 1
```
⇒ **`isg:avusturya` zaten 18 dönemde**, `isg:rusya` **27 dönemde** var.
İki kimlik için de örtü yolu açık ve kullanılıyor.

⚠️ **VE BİR YANLIŞ ÖLÇÜT ELENDİ:** "kısa süren `s:` = işgal" sanılabilirdi.
Ölçüldü, **yanlış**: 10 yıldan kısa `s:` dönemlerinin çoğu **gerçek
egemenlik değişimi** (`sovyet-rusya` 504 · `rusya-gecici-hukumet` 496 ·
`tbmm-turkiye` 448 · Fetret şehzadeleri 350/234/228/112).
⇒ Ölçüt **SÜRE DEĞİL**: *polity sürdü mü, yoksa yerine başkası mı geçti?*

### 🟢 HÜKÜM
```
Yergöğü   `p0035` KAZANIR — `isg:rusya` zaten doğru model
Yagodina  🔴 HİÇBİR TARAF OLDUĞU GİBİ DEĞİL: `ok110`un dönem BÖLÜMÜ doğru
          (1689-1690 Habsburg işgali gerçek), ama `s:avusturya` yerine
          **`isg:avusturya`** olmalı; `d:` 1459→1717 KESİLMEZ.
          ⇒ ÜÇÜNCÜ BİÇİM — "A mı B mi" değil.
```
📌 Osmanlı 1690-09-09'da Yagodina'yı **geri aldı**; yani Habsburg
tasarrufu kalıcı olmadı ve Osmanlı polity'si sürdü. `isg:` tam bunu
anlatır. `§11`: *atlas seferi değil tasarrufu boyar* — ve bir yıllık bir
işgal, egemenlik devri gibi yazılırsa gövde haritadan silinir.

### ⬜ İKİSİ HÂLÂ AÇIK
```
Kutaisi    ferhatpasa ↔ kafkas ↔ vassal_kid — `BULGU-KUTAISI-CAKISMA.md`
           var, HÜKÜM YOK. ÖLÇMEDİM.
Timbuktu   dört yama · triyaj "çatışma değil, farklı pencereler" diyor
           ama alet GERÇEK basıyor ⇒ ikisinden biri yanlış. ÖLÇMEDİM.
```
🔴 Bu ikisi için **hüküm YAZMIYORUM** — ölçmeden yazmak, `§11`in
*"ölçmediğini ölçmedim diye yaz"* kuralının ihlali olurdu.

---

## ⑤ UYGULAMA VE SINAV — sayı ÖNCEDEN yazılıyor
```
mekanik 4 kapanır        18 → 14
Bağdat · Başkale · Çaldıran · Manama · Yergöğü · Yagodina uygulanır
                         14 →  8
Mısır grubu (5) + Kasr-ı Şîrîn uygulanır
                          8 →  2   (Kutaisi · Timbuktu)
```
⚠️ Sayı tutmazsa **hüküm değil uygulama** yanlıştır: ya bir kayıt
düşürülmemiştir ya da başka bir dosya aynı alanı yazıyordur.
📌 Mazeret de önceden yazılıyor: `vassal_kid` **31 dosyaya** dokunuyor;
uygulama sırasında yeni bir çakışma **doğarsa** o bu tasnifin kusuru
değil, taşımanın kendi kusurudur — ve ayrıca ölçülür.

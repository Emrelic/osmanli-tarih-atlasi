# M-3068 ⑤ — TBMM ÇAKIŞMALARI, KAYIT BAZLI VE ALAN ALAN

> **NEHİR SÜRTÜNME · 5 Eylül 2026 · VERİ YAZILMADI, HÜKÜM VERİLMEDİ.**
> Aletler: `denetim/ARAC-TBMM-CAKISMA-0905b.py` (ölçüm) ·
> `denetim/ARAC-TBMM-ONERI-0905.py` (öneri + üçgen)
> Çıktı: `denetim/ONERI-TBMM-CAKISMA-0905.json`

---

## ⓪ ÖNCE İKİ SAYI DÜZELTMESİ

**① Çakışma 21 değil 19 — ve fark SAYIM BİRİMİ.**
```
M-3068          erken (5) · ok110 (14) · p0035 (2) = 21
KAYIT bazlı     19 kayıt
```
İkisi de doğru: 21 **dosya-anması**, 19 **kayıt**. Fark üç taraflı iki
kayıttan geliyor (`Başkale` ve `Çaldıran` hem `ok110` hem `p0035` ile
çakışıyor). ⇒ Bu gecenin *"sayım birimi yanlışsa ölçüm veriyi değil
verinin YAPISINI ölçer"* dersinin aynı sınıfı; sayı yanlış değil,
**birimi farklı.**

**② 19'un 5'i `ok110` ↔ `yer_yama_tbmm_24_0905.js` — ve o dosyayı
M-3067'de bildirmemiştim.** Emre doğrudan istedi, 24'lük yamayı yazdım
(`Arpaçay · Ceylanpınar · Digor · Iğdır · Mersin`). Yani senin
listendeki `ok110 (14)` sayısı = 9 (`tbmm_1920` ile) + 5 (`tbmm_24`
ile). Sayın doğru, **bileşimi haberin dışındaydı.**

---

## ① ÖNCE KENDİ ALETİMİ ÇÜRÜTTÜM — 44 vs 19

İlk sürüm (`ARAC-TBMM-CAKISMA-0905.py`) **44 çakışan kayıt** saydı;
araç 19 diyor. Sebep tek: **çakışma kuralını kendim yazdım.**
```
BENİM kuralım   "aynı ad iki dosyada var + biri tbmm" ⇒ ÇAKIŞMA
ARACIN kuralı   `_sahiplik_uygula.py:267-273`
                aynı ALANI ≥2 dosya YAZIYOR **ve** değerler FARKLI
                (tek yazan ⇒ çatışma YOK)
                + `kaynak` TEK BAŞINA ayrışıyorsa VERİ İNER (:285-300)
```
25 sahte pozitifin tamamı *"öteki dosya yalnız `kaynak:` yazıyor"*
sınıfıydı. Araç onları bloke etmiyor, veriyi indirip uyarı basıyor.
📌 `§11`: ***bir aleti taklit eden ölçüm, onun EŞİĞİNİ ve KURAL
DALLARINI da taşımalı.*** İkinci sürüm 19'da birebir uyuştu.

---

## ② (a) TBMM ÜST KÜME Mİ — 17 / 19 🟢

Senin küme bazlı ölçümün *"45 kayıtta EVET"* diyordu; kayıt bazlı ve
alan alan doğrulandı. **17 kayıtta TBMM tarafı ötekinin her dönemini
aynen taşıyor ve yalnız `s:{1920-04-23→1923-10-29, tbmm-turkiye}`
ekliyor.** İkisi ayrık, aşağıda.

🟡 **Ve bir sahte pozitif daha, bu sefer benim lehime değil:**
`Erzincan`ın `d:` alanı ayrışıyor —
```
erken   d:1514-09-06→1923-10-29
TBMM    d:1514-09-06→1920-04-23
```
Fark **TBMM'nin kendi düzeltmesi**, bir anlaşmazlık değil. Mekanik
üst-küme sınavı demeti farklı gördüğü için 🔴 bastı. ⇒ Erzincan
**temiz**, TBMM kazanır.

---

## ③ (b) BLOKE YÜZÜNDEN İNMEYEN ALAN — 34 🔴

Bu senin sorduğun *"tbmm tarafının KAYBETTİRDİĞİ alan"* sorusunun
cevabı, ve cevap **kaybettirmiyor — BLOKE kaybettiriyor.**
`_sahiplik_uygula.py:531` çakışan kayıtta `continue` ediyor ⇒ o kaydın
**hiçbir alanı inmiyor**, `kaynak:` ve `neden:` dâhil.

```
34 skaler alan · 19 kaydın 17'sinde
ok110'un `kaynak:`ları  ankraj gerekçeleri (mesafeleriyle):
   "ankraj Van (73 km) — külliyattaki zincir"
erken'in `kaynak:`ları  TDV gövde alıntıları, biri TAM GÜNLÜ:
   "TDV `malatya` — govde okundu, TAM GUN: Memluk ordusu 22 Muh…"
```
🔴 **Ve bunlar TBMM yamasında YOK** — çünkü TBMM yaması canlı veriden
üretildi ve `kaynak` alanı kasten düşürüldü (uygulayıcı onu
`SKALER_KORUNAN` olarak ayrı taşıyor). Yani kazanan taraf veriyi
taşıyor, **dayanağı taşımıyor.**

⇒ **ÖNERİ:** kazanan TBMM kaydına `tasinacak_skaler` eklenir, sonra
düşürülecek dosyalardan o ad çıkarılır. JSON'da kayıt kayıt hazır.
📌 Bu gecenin *"metin birleştirmek, dayanakları da birleştirmek
DEĞİLDİR"* dersinin uygulaması: veri TBMM'den, `kaynak:` ok110/erken'den,
ve ikisi **birlikte** taşınır.

---

## ④ (c) ÇELİŞKİ — VE ALETİMİN EKSİK AYAĞI

İlk (c) sınavım **0 çelişki** dedi. Sonra kendi sınavımdaki boşluğu
buldum: **TBMM'yi ötekilerle karşılaştırıyordum, ötekileri BİRBİRİYLE
karşılaştırmıyordum.** Eklendi, ve iki çelişki çıktı:

### 🔴 ÜÇGEN — `Başkale` ve `Çaldıran` · TBMM TARAF BİLE DEĞİL
```
ok110    s:… akkoyunlu 1467→1502 · safevi 1502-01-01 → **1639-05-17**
p0035    s:… akkoyunlu 1467→1502 · safevi 1502-01-01 → **1548-08-25**
TBMM     ok110'un sürümünü devralmış (+ tbmm kuyruğu)
```
İki yama Safevî hâkimiyetinin **ne zaman bittiğinde** ayrışıyor:
`1548-08-25` (Van'ın fethi) mi, `1639-05-17` (Kasr-ı Şîrîn) mi —
**91 yıl.** TBMM yaması bu tartışmanın tarafı değil, `ok110`u devralmış.

🔴 **BİLDİRİYORUM, ÇÖZMÜYORUM** (sevkin ⑤c şartı). Ama iki not:
- `p0035`in `neden:` alanı kendi kaydında *"Çaldıran ile ayni sablon ve
  ayni sapma; ayrica ters"* diyor — yani p0035 bu ikisini **aynı vaka**
  sayıyor, ve ölçüm onu doğruluyor: ikisi birebir aynı zincir.
- Bu, TBMM işinden **bağımsız ve ondan eski** bir anlaşmazlık. TBMM
  kuyruğu düşse de duruyor.

---

## ⑤ 🔴 GERÇEK BULGU — VE KENDİ YAMAMA KARŞI: `Mersin`

```
ok110   s:ramazanoglu 1352-01-01→1516-08-24
        d:1516-08-24→1918-10-30 · d:1921-10-20→1923-10-29
BENİM   d:1352-01-01→1918-10-30      ← 164 YILLIK HAYALET OSMANLI
        s:1921-10-20→1923-10-29:tbmm-turkiye
```
`ok110`un kendi `neden:` alanı kusuru adıyla anıyor: *"d: 1352-01-01'de
başlıyordu — 164 yıllık hayalet Osmanlı."*

⇒ **Benim yamam o hayaleti KORUYOR**, çünkü canlı veriden üretildi ve
`ok110` henüz inmemişti. Üst küme değil; **iki yama farklı şeyleri
düzeltiyor ve ikisi de gerekli.**

🟢 **ÖNERİLEN BİRLEŞİM** (karar senin):
```
s: ramazanoglu 1352-01-01 → 1516-08-24     ← ok110'dan
d: 1516-08-24 → 1918-10-30                 ← ok110'dan
s: 1918-10-30 → 1921-10-20  fransa-cumhuriyet
s: 1921-10-20 → 1923-10-29  tbmm-turkiye   ← benden
```
📌 Ve dersi: ***canlı veriden üretilen bir yama, henüz inmemiş bir
düzeltmenin kusurunu devralır.*** Yamam "elle yazılmadı, üretildi" diye
güvenliydi — üretim kaynağının kendisi bayattı.

---

## ⑥ ÖZET TABLO

```
19 TBMM çakışması
   🟢 17  TBMM üst küme · `tasinacak_skaler` ile birleştirilebilir
          (Erzincan dâhil — mekanik sınavın sahte pozitifi)
   🔴  2  ÜÇGEN, TBMM taraf değil: Başkale · Çaldıran (ok110 ↔ p0035,
          91 yıllık Safevî bitişi anlaşmazlığı) → SANA BİLDİRİLDİ
   🔴  1  Mersin — ok110 ile GERÇEK birleşim gerekiyor (164 yıllık
          hayaleti benim yamam koruyor)
   ⚠️     Mersin hem 17'nin dışında hem üçgende değil; ayrı kalem.
34 skaler alan bloke yüzünden inmiyor → kazanana TAŞINMALI
 0 aynı dönemde farklı kimlik (TBMM ↔ öteki)
```

## ⑦ ÖLÇMEDİĞİM
- `ok110 ↔ p0035` anlaşmazlığında **hangisi doğru** — TDV'ye sormadım,
  sevk *"çözme, bildir"* diyor.
- 17 kaydın `tasinacak_skaler` metinlerinin **doğruluğunu** ölçmedim;
  yalnız **varlığını** ve kazananın onları taşımadığını ölçtüm.
- TBMM dışı 18 çakışmaya (37 − 19) dokunmadım; sevk yalnız TBMM'yi
  istiyor.
- Birleşim yamasını **yazmadım** — `data/` yazımı ve kayıt düşürme
  Oturum 0'ın.

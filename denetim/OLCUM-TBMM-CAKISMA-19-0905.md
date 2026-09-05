# ÖLÇÜM — TBMM sahiplik çakışmaları, KAYIT BAZLI ve ALAN ALAN

**Oturum:** KURE GORUNUM · 1.MURAT sevki · 5 Eylül 2026
**Cins:** ÖLÇÜM + şartlı öneri — **veri yazılmadı**, `data/` altına
dokunulmadı, hiçbir çelişki **çözülmedi**.

---

## SONUÇ — ÜÇ CÜMLE

```
🟢 15 / 19  tbmm tarafı GERÇEKTEN üst küme (gün VE sahip bazında)
🔴 19 / 19  tbmm tarafında `kaynak:` VE `neden:` YOK — provenans riski
🔴  4 / 19  SAHİP FARKI var, ve ÜÇÜ AYRI CİNSTEN (biri gerçek REGRESYON)
```

## ⓪ ÖNCE İKİ SAYI DÜZELTMESİ

```
sevk der   "41 çakışmanın 21'i tbmm ile ilgili"
ölçüm      41 çakışma · tbmm içeren 19 · tbmm-dışı 22
sevk der   "aynı dosyalar 5 tbmm-DIŞI çakışma da tutuyor"
ölçüm      🟢 TAM 5:  Bağdat(erken) · Eçmiyadzin(ok110) · Gümrü(ok110) ·
                      Kasr-ı Şîrîn(p0035) · Yergöğü(p0035)
```
Liste **yetkili aletten** alındı (`_sahiplik_uygula.py` kuru koşusu),
tahmin edilmedi.

🔴 **VE ZEMİN DEĞİŞMİŞ:** sevk üç dosyayı `data/` altında tarif ediyor
ve haklı — **taşıma (merge adım ⑥①) ARTIK YAPILMIŞ**: `denetim/`
altında `yer_yama*.js` **0**, `data/` altında **87** dosya / 3914 kayıt.
Ölçüm bu zemine göre yapıldı. (Küresel ad çakışması: **0** — `§7`
önlemi ölçüldü, temiz.)

## ① YÖNTEM — ve iki gerçek kapı

`node`+`vm`, **her dosya AYRI BAĞLAMDA** (`§7`; `json.loads` çöküyor).
Karşılaştırma iki turda yapıldı ve **birinci tur kör noktalıydı**:

```
TUR 1   alanı ALAN İÇİNDE karşılaştırdım (d↔d, s↔s, v↔v, isg↔isg)
        SONUÇ: "kimlik farkı 0"           ← 🔴 YANILTICI
TUR 2   d/v/s BİRLEŞTİRİLDİ (öncelik d > v > s) ve GÜN → SAHİP
        haritası karşılaştırıldı
        SONUÇ: 7 sahip farkı / 4 kayıt
```
🔴 **Kör nokta:** bir gün `d:`ten çıkıp `s:`e geçtiğinde alan-içi
karşılaştırma onu ya *"kapsanmıyor"* diye gösterir ya da **hiç
göstermez** — çünkü `d:`teki OSMANLI ile `s:`teki `safevi` **hiç
karşılaştırılmaz.** Ve bu projede çelişkilerin tam olarak durduğu yer
orası.
📌 Kendi aletimin *"0 kimlik farkı"* manşeti, ikinci tur olmasaydı
**temiz** diye raporlanacaktı.

## ② `kaynak:` ve `neden:` — 19/19, ve tek yönlü

```
tbmm tarafında `kaynak:`  0 / 19        öteki tarafta 19 / 19
tbmm tarafında `neden:`   0 / 19        öteki tarafta 19 / 19
tbmm tarafının ÖTEKİNDE OLMAYAN alanı: YOK
skaler DEĞER çelişkisi (aynı alan, farklı değer): 0
```
⇒ tbmm yamaları **yalnız geometri** taşıyor. Alan kaybı **çözüme
bağlı**, ve iki yol iki farklı sonuç veriyor:
```
BİRLEŞTİR (iki kayıt da kalır)  → `kaynak`/`neden` TEK YAZARLI ⇒ İNER, kayıp YOK
ÖTEKİNİ DÜŞÜR                   → 19 kaydın provenansı KAYBOLUR
```
🔵 Bu bir çelişki değil, bir **çözüm biçimi kararı** — ve karar sende.

## ③ 🔴 DÖRT SAHİP FARKI — ÜÇ AYRI CİNS

| kayıt | pencere | ÖTEKİ | TBMM | cins |
|---|---|---|---|---|
| Erzincan | 1920-04-23 → 1923-10-29 | OSMANLI `d:` | `tbmm-turkiye` `s:` | 🟢 **(a) kararının kendisi** |
| Başkale | 1920-04-23 → 1923-10-29 | OSMANLI `d:` | `tbmm-turkiye` `s:` | 🟢 aynı |
| Çaldıran | 1920-04-23 → 1923-10-29 | OSMANLI `d:` | `tbmm-turkiye` `s:` | 🟢 aynı |
| Mersin | 1921-10-20 → 1923-10-29 | OSMANLI `d:` | `tbmm-turkiye` `s:` | 🟢 aynı |
| **Başkale** | **1548-08-25 → 1639-05-17** | **OSMANLI** `d:` | **safevi** `s:` | 🔴 **91 YIL — GERÇEK ÇELİŞKİ** |
| **Çaldıran** | **1548-08-25 → 1639-05-17** | **OSMANLI** `d:` | **safevi** `s:` | 🔴 aynı |
| **Mersin** | **1352-01-01 → 1516-08-24** | **ramazanoglu** `s:` | **OSMANLI** `d:` | 🔴🔴 **REGRESYON** |

### 🟢 (a) kararı — 4 vaka, çelişki DEĞİL
`d: … → 1923-10-29` yazan taraf **bayat**; tbmm onu `1920-04-23`te
kesip `s:tbmm-turkiye` açıyor. Bu tam olarak Emre'nin (a) kararı.
⇒ tbmm **DOĞRU**, öteki taraf **eski**. Karar gerekmiyor.
⚠️ Ama bu dört kayıtta da `kaynak:`/`neden:` yine tbmm'de yok.

### 🔴 Başkale · Çaldıran — 91 YIL, ve tbmm ile İLGİSİ YOK
```
p0035  s:safevi 1502 → 1548-08-25   ·  d:OSMANLI 1548-08-25 → 1923
ok110  s:safevi 1502 → 1639-05-17                    ← tbmm BUNU devralmış
tbmm   s:safevi 1502 → 1639-05-17   ·  d:OSMANLI 1639-05-17 → 1920-04-23
```
İki taraf **Osmanlı fethinin gününde** ayrışıyor: **1548-08-25** mı
**1639-05-17** mi. tbmm yaması burada taraf değil, **ok110'un zincirini
taşıyor** ⇒ ***gerçek çelişki `p0035` ↔ `ok110`***, ve çakışma listesi
onu zaten üçlü gösteriyor (`ok110 vs p0035 vs tbmm`).
İki tarafın da kendi gerekçesi var:
```
p0035 `neden:` "H-0088 · kaydın kendi kaynak: alanı 'ankraj Van —
       külliyattaki zincir' diyor ama Van'ın 1548-08-…"
ok110 `neden:` "akkoyunlu tek blok. Mevcut safevi dilimi
       (1514-09-06→1639-05-17) 1502'ye çekildi…"
```
⇒ **ÇÖZMEDİM.** Bu bir tarih hükmü ve `§7`ye göre benim değil.

### 🔴🔴 Mersin — TERS YÖNLÜ, VE EN AĞIRI: tbmm bir HATAYI KORUYOR
```
CANLI VERİ   d: 1352-01-01 → 1918-10-30  OSMANLI     ← 164 YILLIK HAYALET
ok110        s: ramazanoglu 1352 → 1516-08-24
             d: 1516-08-24 → …                        ← DÜZELTME
             kaynak: TDV `ramazanogullari` — "beylik 753'te (1352)
                     kuruldu, sahası başta Adana olmak üzere Çukurova"
             neden : "d: 1352-01-01'de başlıyordu — 164 YILLIK HAYALET
                     OSMANLI. ramazanoglu dönemi eklendi, d: Mercidâbık'a
                     çekildi."
tbmm_24      d: 1352-01-01 → 1918-10-30  OSMANLI     ← HAYALET DURUYOR
             + s: tbmm-turkiye 1921-10-20 → 1923-10-29
```
⇒ **tbmm yaması ÜST KÜME DEĞİL.** Canlı veriden türetilmiş ve o
verideki **bilinen, kaynaklı biçimde düzeltilmiş** bir kusuru
sürdürüyor. tbmm tarafı kazanırsa `ok110`'un TDV'ye dayalı düzeltmesi
**geri alınır** ve hayalet kalır.

📌 **MEKANİZMA — ve bu bulgunun asıl değeri:** tbmm yaması **CANLI
VERİDEN** üretildi; ok110 ise canlı veriye bir **DÜZELTME**. İkisi de
"bekleyen yama" göründüğü için, çözümü yapan taraf farkında olmadan
*"düzeltme uygulanacak mı"* sorusunu cevaplıyor.
⇒ ***Bir yamanın üst küme olması, DOĞRU olması demek değildir: kapsama
korumaz, sürdürür.***

## ④ ÖNERİ YAMASI — `denetim/ONERI-TBMM-KAYNAK-0905.js`

15 temiz kaydın `kaynak:`/`neden:` alanlarını taşır.
`window.YER_YAMA_TBMM_KAYNAK_0905` · 15 kayıt · 8.237 bayt.
```
🔴 ŞARTLI:  çözüm iki kaydı BİRLEŞTİRİRSE GEREKSİZ (tek yazar kalır,
            alanlar zaten iner) · ÖTEKİNİ DÜŞÜRÜRSE ŞART
🔴 ATIL:    `denetim/` altında duruyor; uygulayıcı YALNIZ `data/`
            tarıyor ⇒ bugün hiçbir şey yapmaz. Taşımayı SEN yaparsın.
🔴 KAPSAM:  4 çelişkili kayıt DIŞARIDA — çözümleri belli değil
```

## ÖLÇMEDİM
```
⚪ 1548 mi 1639 mu — bu bir TARİH HÜKMÜ, kaynağa sormadım (sevk
   "çelişki varsa BİLDİR" diyordu)
⚪ Mersin'in ok110 düzeltmesinin DOĞRULUĞUNU — yalnız tbmm'in onu
   SÜRDÜRMEDİĞİNİ ölçtüm; TDV `ramazanogullari` gövdesini AÇMADIM
⚪ 22 tbmm-dışı çakışmayı — sevk 19'u sordu
⚪ Öneri yamasının kuru koşusunu — `denetim/` altında olduğu için
   uygulayıcı onu görmez (bu KASITLI)
```

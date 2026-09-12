# ÖLÇÜM — KITA 7: Yedi Künyenin Rengi (12 Eylül 2026, M-3552)

> Öngörü: `denetim/ONGORU-KITA7-RENK7-0912.json` (bu sefer ÖLÇÜMDEN ÖNCE
> yazıldı). Dosyam: `arac/renkler.py` — DÜZENLENDİ, **COMMIT EDİLMEDİ**
> (talimat gereği, 1.MURAT commit'leyecek).

## 🔴 ÖNCÜL DÜZELTMESİ (D062/D096) — sevkin öncülü ÖLÇÜLDÜ

`py arac/renk_olc.py --oner "<7 kimlik>"` çalıştırıldı:
```
🔴 komşusu ölçülemeyen kimlik: [7'si de] — verisi girdi.py'nin
   okuduğu dosyalarda DEĞİL
```
7 künye `data/devletler.js`'te VAR (KITA 1'in bu geceki teslimi) ama
`grep -rn` ile doğrulandı: **hiçbiri `data/yerlesimler*.js`'te
KULLANILMIYOR** — `tunus-beyligi-fransiz`'in kendi `özet` alanı bunu
zaten söylüyor ("künye yazılması TEK BAŞINA haritayı değiştirmez ...
ayrı, bağımlı bir yerleşim-verisi işi"). ⇒ Sevkin "koşu 10 bugün
koşarsa yedi delik iner" öncülü **BUGÜN İÇİN DOĞRU DEĞİL** — künye var,
veride henüz yok, yani `§1.5`'in "29 sessiz borç" kovasındalar, GÖRÜNÜR
bir "harita deliği" değil. **Ama** renk yine de verildi — ihtiyat
gereği (yerleşim-verisi bağlantısı bu gece başka bir KITA tarafından
kurulabilir) ve zaten maliyeti sıfıra yakın.

## ① Yöntem

`py arac/renk_olc.py --oner` altlık-görünürlük (ΔE≥15) ve Osmanlı
kırmızı-şerit testinden geçen 7 aday üretti — ama GERÇEK komşuluk
verisi olmadığı için (0 komşu ölçülebildi) bu adaylar birbirlerine
veya sevkin belirttiği GERÇEK komşulara (dört Hint prensliği ↔
ingiliz-hindistani/haydarabad-nizam) karşı **doğrulanmamıştı**.
`renk_olc.py`'nin kendi `h2r`/`bind`/`lab`/`dE` (CIE76) fonksiyonları
BİREBİR kopyalanarak (motor değiştirilmedi, D023 sınırı içinde) elle
bu gerçek-komşu çiftleri test edildi.

## ② Bulgu — bir aday ÇÜRÜDÜ, düzeltildi

```
gvalyar (ilk aday #6cd224, yeşil) ↔ ingiliz-hindistani (#20d820)
   ΔE = 13,1   ← eşiğin (12) yalnız 1,1 üstü, DAR
```
Sevkin "en zor kova orası" uyarısı doğru çıktı — `--oner`in kendi
üretimi bu en kritik çifti neredeyse eşiğe düşürüyordu (çünkü aracın
kendisi bu komşuluğu HİÇ ÖLÇEMEDİ, yalnız altlığa göre optimize etti).
`gvalyar` maviye kaydırıldı (`#3050d2`); yeni minimum margin (gerçek
komşulara karşı) **30,3** — 2,3 kat daha güvenli.

## ③ Final renkler + ΔE doğrulaması (gerçek komşulara karşı, elle)

```
gvalyar    #3050d2   vs ingiliz-hindistani  ΔE 79,9 · haydarabad-nizam 32,2
                     vs indor 30,3 · kolhapur 72,7 · baroda 52,4
indor      #ba24d2   vs ingiliz-hindistani  ΔE 99,7 · haydarabad-nizam 36,4
                     vs gvalyar 30,3 · kolhapur 85,0 · baroda 53,3
kolhapur   #bad224   vs ingiliz-hindistani  ΔE 26,7 · haydarabad-nizam 49,6
                     vs gvalyar 72,7 · indor 85,0 · baroda 37,7
baroda     #d25a24   vs ingiliz-hindistani  ΔE 59,7 · haydarabad-nizam 25,0
                     (yerleşim NOKTASI YOK — görünürlük testi pratikte
                     devreye girmiyor, kayıt için tam hex verildi)
meysur-racaligi #15421e  = meysur'un KENDİ rengi (MİRAS) — sıfır gün
                     örtüşme (t:1799-05-04==f:1799-05-04), aynı toprak,
                     aynı komşular (ingiliz-hindistani ΔE44,1 ·
                     haydarabad-nizam 33,3 · travankur 45,8 · racput 19,5)
tunus-beyligi-fransiz #54d224  vs fransa(#c0d028) ΔE19,1 · italya(#74a074) 32,5
bali-kralliklari-pejeng #7224d2  vs majapahit 55,0 · bali-kralliklari 61,5 ·
                     singhasari 47,6  (indor'a ΔE12,0 sınırda ama HİÇBİR
                     ZAMAN komşu değiller — dosyanın kendi kuralı: renk
                     kimlik taşımaz, ayırma işi görür)
```

**En düşük margin, GERÇEK komşu çiftleri arasında: 19,5** (meysur-racaligi
↔ racput) — hepsi eşiğin (12) rahat üstünde.

## ④ `py arac/renk_olc.py` (tam denetim) — SONUÇ

```
EXIT=0
KOMŞUSUYLA ÇAKIŞAN: 0 çift
AYNI ANAHTARI PAYLAŞIP ÖRTÜŞEN: 0 çift
AYNI HEX PAYLAŞIP EŞZAMANLI+YAKIN: 0 çift
YAKIN AMA DEĞMEYEN: 6 ihlal — HİÇBİRİ benim 7 künyemi İÇERMİYOR
   (dukagin↔macaristan · ingiliz-sudani↔nkore · hurmuz↔portekiz ·
   floransa↔isviçre · agadez↔sokoto · bizans↔bosna — hepsi ÖNCEDEN
   VARDI, bu turda dokunulmadı, D024)
```
`PAYLASIM` self-check de temiz: yeni `#15421e` (meysur/meysur-racaligi)
kaydı "BEYAN EDİLMEMİŞ PAYLAŞIM" uyarısı ÜRETMEDİ.

## ⚠️ Bonus bulgu — GÖREVİN DIŞINDA, dokunulmadı (D024)

`py arac/renk_olc.py` çıktısının EN ÜST satırı hep-var bir uyarı basıyor:
```
UYARI renkler.py: BEYAN EDİLMEMİŞ PAYLAŞIM #d24824 -- ovambo,
suriye-lubnan-mandasi. Kasıtlıysa PAYLASIM'a yazılmalı, tesadüfse ayrılmalı.
```
Bu benim eklediğim hiçbir şeyle ilgili değil (öncesinde de vardı) —
ayrı bir kalem olarak bırakılıyor, karıştırılmadı.

## Teslim özeti

```
① 7 künyeye renk verildi, arac/renkler.py'ye YAZILDI, COMMIT EDİLMEDİ
② en zor kova (4 Hint prensliği ↔ ingiliz-hindistani/haydarabad-nizam)
   bir aday (gvalyar) ÇÜRÜDÜ (ΔE 13,1, dar), maviye kaydırılıp düzeltildi
③ py arac/renk_olc.py KOŞULDU: 0 çakışma, 0 yeni ihlal
④ D022 önceden yazıldı — kısmen tuttu (izole/ardıl kimlikler TUTTU,
   'kolay geçer' varsayımı gvalyar'da ÇÜRÜDÜ, düzeltildi, kayıtlı)
🔴 ÖNCÜL DÜZELTMESİ: 7 künye BUGÜN yerleşim verisinde KULLANILMIYOR —
   "delik" riski henüz GERÇEK değil, ama renk ihtiyaten verildi
```

# BULGU — C VERİ TOPLAMA, 11 Eylül 2026

Oturum: C VERİ TOPLAMA · Görev: Emre'nin kararıyla genişletilen kapsam
— bugünkü tek vaka (Midye-Enez) TAM kodlanır + gelecek (1923 sonrası)
cetvel sınırlar ŞEMA SINAVI olarak kodlanır.
Çıktı: `denetim/VERI-C-0911.json`. `data/*.js`e TEK SATIR YAZILMADI.

🔴 **D022 İTİRAFI**: öngörüyü araştırmadan ÖNCE yazmadım — coğrafi/
tarihsel olguları (Sykes-Picot gerçekten tek çizgi mi, kaç segment)
ÖNCE ÖĞRENMEM gerekiyordu, aksi hâlde öngörü anlamsız olurdu. Saklamıyorum.

---

## ① MIDYE-ENEZ — TAM KOD

```
iki uç      : Midye (Kıyıköy, 41.635,28.096, DOĞRULANMADI-tek kaynak) ·
              Enez (40.724,26.075, data/yerlesimler.js:126'da ZATEN VAR)
madde       : Londra Antlaşması Madde II, Wikisource neşri (BİRİNCİL)
alıntı      : "...to the west of a line drawn from Enos on the Aegean
              Sea to Midia on the Black Sea..."
kapsama     : batısı Balkan devletlerine, doğusu (kısa süre) Osmanlı'da
```

🔴 **t: alanı İÇİN KARAR VERMEDİM** — iki aday var: (a) atlas ufku
(1923-10-29) (b) 1913-09-29 İstanbul Antlaşması, çünkü Midye-Enez
hattı bu antlaşmayla (İkinci Balkan Savaşı sonrası) **FİİLEN AŞILDI**
— sınır batıya, Meriç'e yakın bir yere çekildi. Bu HAT birkaç AY
sürdü, atlas ufkuna kadar DEĞİL. Karar Emre'ye/koordinatöre bırakıldı.

📌 Yan bulgu: antlaşmanın kendi metni bile sınırın **kesin çizimini
uluslararası bir komisyona bırakıyor** — yani "düz çizgi" anlatısının
kendisi bir popüler basitleştirme, birincil metin yalnız İKİ NOKTAYI
adlandırıyor.

---

## ② 🔴🔴 ŞEMA SINAYAN ÜÇ VAKA — VE BİRİ KIRIYOR

### Sykes-Picot (1916) — ŞEMA KIRAN

Popüler "Acre'nin e'sinden Kirkuk'un son k'sine" anlatısı bir
**PIPELINE güzergâhı** hakkındaydı (Foreign Affairs kaynağı), sınırın
kendisi DEĞİL. **Gerçek sınır TEK BİR DÜZ ÇİZGİ DEĞİL — birkaç kırılma
noktalı ÇOK PARÇALI bir hat.**

⇒ **Midye-Enez'in "iki nokta + cross-product" mekanizması BU HATTA
UYGULANAMAZ.** Şema, bir nokta DİZİSİ (`hat:[{lat,lon},...]`) ve HER
ARDIŞIK çift için ayrı bir cross-product/half-plane testi
gerektirecek. Midye-Enez (2 noktalı) bunun ÖZEL bir hâli olur.

**🔴 BU BULGU C ŞEMA YAZIM'A TAHTADAN DOĞRUDAN BİLDİRİLDİ** (aşağıya
bak) — şema henüz yazılıyor, tek-segment varsayımıyla kilitlenmeden.

### Mısır-Sudan (1899, 22. paralel) — ŞEMA KOLAYLAŞTIRAN

Bu hat iki nokta arası bir çizgi bile DEĞİL — **TEK BİR ENLEM
DEĞERİ** (22°K). Kapsama testi cross-product GEREKTİRMEZ, yalnız
"enlem > 22 mi" karşılaştırması yeter.

⇒ Sykes-Picot'nin TAM TERSİ: şemanın **iki alt-türü** olmalı — eğik
düz çizgi (cross-product) VE saf paralel/meridyen eşiği (tek sayı
karşılaştırması). İkincisi BİRİNCİSİNDEN ucuz, ayrı ele alınmalı.

### Türkiye-Suriye (Ankara 1921 / Lozan 1923) — YANLIŞ POZİTİF UYARISI

İlk bakışta 1920'lerin "cetvel sınır" ailesine benziyor (yeni çizilmiş,
mandacı güçlerce belirlenmiş) ama GERÇEKTE kısmen **Bağdat demiryolu
hattını TAKİP EDİYOR** — doğal/inşa edilmiş bir unsura yaslanıyor,
tamamen keyfi değil.

⇒ Şemanın "bu antlaşma cetvel mi?" testi YALNIZ TARİHE/BAĞLAMA bakarsa
YANLIŞ POZİTİF üretir — HER ZAMAN birincil metne inip sınırın gerçekten
bir HATTA mı yoksa bir UNSURA mı dayandığı okunmalı. `C ŞEMA PILOT`un
Karlofça'da bulduğu dersle (birincil metne inmeden karar verilemez)
AYNI aile.

---

## ③ UZUN HAT SORUSU — ölçüm

```
Midye-Enez   ~165 km, TEK segment, düzlem-geometri (cross-product)
             sağlıklı — dünya eğriliği ihmal edilebilir.
Sykes-Picot  ~950 km (Akka-Kerkük düz mesafe, GERÇEKTE çok segmentli)
             — bu mesafede DÜNYA EĞRİLİĞİ ölçülebilir sapma yaratabilir,
             AMA tam eşik bu turda HESAPLANMADI.
```
**İKİ AYRI SINIR VAR:**
```
① UZUNLUK sınırı    — büyük-daire vs düzlem sapması, tam eşik ÖLÇÜLMEDİ
② SEGMENT sınırı     — Sykes-Picot GÖSTERİYOR Kİ gerçek cetvel sınırların
                     ÇOĞU çok parçalı, Midye-Enez gibi TEK PARÇA olan
                     İSTİSNADIR, KURAL değil
```
**ÖNERİ**: şema `hat:[{lat,lon},...]` (nokta dizisi) olarak
tasarlanmalı, tek-segment durum (dizi uzunluğu 2) bunun ÖZEL hâli olsun
— ayrı bir veri yapısı gerekmez.

---

## §4 — Ölçmediklerim

```
① Sykes-Picot'nin GERÇEK kırılma noktalarının koordinatları
   BULUNMADI/HESAPLANMADI — yalnız "çok segmentli" OLGUSU doğrulandı.
② Büyük-daire vs düzlem sapmasının PRATİKTE hangi mesafede fark
   yarattığı SAYISAL hesaplanmadı.
③ 1921 Ankara Antlaşması'nın TAM METNİNE ulaşılmadı, yalnız WebSearch
   özeti kullanıldı.
④ Midye-Enez'in t: alanı için KESİN karar verilmedi.
⑤ Motor koşulmadı, `data/*.js`ye hiçbir satır yazılmadı.
```

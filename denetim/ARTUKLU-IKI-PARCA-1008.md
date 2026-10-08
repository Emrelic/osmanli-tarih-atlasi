# H-0002 + H-0024 — ARTUKLU-IKI-PARCA-1008 (paket 0085)

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı (2026-10-08, hiçbir veri dosyası açılmadan)

**Mekanizma öngörüsü:**
- M1 (en olası): kuzeybatı bordo parça ARTUKLU DEĞİL; ayrı bir künyedir (Memlük / Dulkadir /
  Kadı Burhaneddin / Çemişgezek beyliği) ve harita etiketi yanlış okunmuş ya da etiket
  yerleşimi (label placement) iki parçaya aynı adı düşürmüştür. Yani "iki farklı kimlik".
- M2: noktaların `s:` kaydı gerçekten bir Artuklu kimliği taşıyor (ör. Harput Artukluları
  künyesi / dönemi 1234 sonrasına uzatılmış ya da `artuklu` genel kimliği Divriği-Malatya
  hattına yazılmış) → Sınıf ① (dönem/kimlik yanlış).
- M3: bordo bölgede nokta yok, Artuklu peteği emilmeyle oraya taşmış → Sınıf ② (emilme).
  Bunu en az olası sayıyorum: Divriği/Malatya/Kâhta yoğun noktalı yerler.

**Sayı öngörüsü:** kuzeybatı kümesinde (Divriği, Çemişgezek, Malatya, Kâhta + 30 km çevresi)
o penceredeki noktaların **0** tanesi Mardin Artuklu kimliğinde çıkacak (M1). Güney kümesinin
(Mardin, Midyat, Nusaybin, Ceylanpınar, Akçakale, Rakka) çoğu (≥ 4/6) Mardin Artuklu kimliğinde
çıkacak; Rakka büyük olasılıkla Memlük olmalı (kaynak beklentisi) ve atlasta Artuklu çıkarsa
ayrı bulgu.

**Öngörünün sınavı (ölçümden sonra):** M1 TUTMADI · M2 TUTTU. Kuzeybatıda `artuklu` 0 değil **3** nokta
(Çemişgezek · Harput · Palu). Güney 4/6 öngörüsü tuttu (Mardin · Midyat · Nusaybin · Ceylanpınar artuklu;
Akçakale · Rakka memluk).

---

## HÜKÜM (iki soruya tek cevap)
**İki parça görüntüsü YANLIŞ, ve iki soru aynı kusurun iki yüzü.** Kuzeybatı parça
`artuklu` künyesi (TEK künye, tek renk `#18cca2`; ikinci bir Artuklu kimliği YOK) ama onu
taşıyan üç nokta — **Çemişgezek · Harput · Palu** — `s:artuklu 1281-01-01→1465-01-01`.
TDV `artuklular`: Harput kolu *"1185-1233"* · *"Selçuklular kaleyi … Ağustos 1234'te teslim aldılar"*.
⇒ 1401-1409'da bu üç noktada Artuklu YOK; yalnız Mardin kolu (*"Mardin Kolu (1106-1409)"*) var.
- **H-0002** (Artuklu iki parça, arada Akkoyunlu): güney parça doğru (Mardin kolu), **kuzeybatı parça yanlış.**
- **H-0024** (Akkoyunlu iki parça, arada Artuklu): o pencerede `akkoyunlu` yalnız **2 nokta**:
  Şebinkarahisar (40.29N, s:1381→1473) ve Diyarbakır (s:1401→1507). Aradaki Artuklu = yine aynı
  Harput üçlüsü. Diyarbakır'ın Akkoyunlu olması kaynaklı (TDV `akkoyunlular`: *"Timur … Karayülük'e Âmid'i
  (Diyarbakır) verdi"*). **"Araya Artukoğulları girmiş" DOĞRU DEĞİL**; Akkoyunlu'nun Âmid ile Karahisar
  arasında kopuk olması ise tek başına imkânsız değil (arada Mutahharten/Memlük de var) — ölçmedim.
- Divriği · Malatya · Kâhta bu pencerede **`memluk`** (Artuklu değil). Koordinatörün "bordo" dediği alan
  bunlar ise etiket Harput üçlüsünün peteğinden geliyor olabilir — görsel olmadan ÖLÇÜLEMEDİ.

## ① NE ÖLÇTÜM
- **Pencere (künyelerden):** artuklu 1102→1409 · akkoyunlu 1340→1514 · karakoyunlu 1351→1469-12-19 ·
  celayirli 1340→1431 · eyyubi-hisnikeyfa 1232→1462 ⇒ beşi birlikte **1351-01-01→1409-01-01**. Veriyle
  daralır: Diyarbakır `akkoyunlu` 1401'den ⇒ görsel **1401-01-01→1409-01-01** penceresinde.
- **Bölge dökümü** (`girdi.yukle()`, 93 dosya, 4300 nokta; 35.5-40.3N × 36.5-42.6E: 55 nokta).
  artuklu o pencerede 13 nokta: 3 kuzeybatı (Çemişgezek/Harput/Palu, 1281→1465) + 10 güney
  (Mardin · Midyat · Nusaybin · Ceylanpınar · Qaţţīnah · Babū · Ḩīmū · Malikiye · Silopi · Cumai, 1281→1409).
- **🔴 KÖK NEDEN — git tarihi:** bu hata 5 Eylül'de zaten DÜZELTİLMİŞTİ.
  `d041a080` ("MERGE INDI") YER_YAMA_HARPUT'u indirdi: Harput `ilhanli 1281→1353 · artuklu 1353→1429 ·
  akkoyunlu 1429→1436 · dulkadir 1436→1465…`, Çemişgezek `cemisgezek-beyligi 1281→1420 · akkoyunlu 1420→1507…`,
  Palu `ilhanli 1281→1353 · artuklu 1353→1465…`. **36 dakika sonra `a760c8b6`** ("FAZ 1 TAMAM", tbmm
  çakışma çözümü) üç kaydın `s:` dizisini tbmm yamasının ESKİ diziyle **ezdi**; `not:` alanları kaldı.
  Bugün Çemişgezek'in notu *"`artuklu` TAMAMEN KALDIRILDI"* der, `s:`i hâlâ `artuklu`dur.
  Commit mesajındaki *"KAYBOLACAK DONEM 0"* ölçümü bu üç kayıtta YANLIŞTI. `yer_yama_harput.js` de
  aynı commit'te silindi ⇒ hiçbir kapı geri dönüşü görmüyor.
- **Künye/renk:** `cemisgezek-beyligi` (1281→1420) devletler.js:7666'da VAR, renkler.py'de `#24c6d2` VAR —
  yamanın "künye inmeden uygulanmaz" şartı artık sağlanıyor.
- **denetle.py** — önce **2** · sonra **2** (ikisinde de yalnız Değişmez 8 ÖLÇÜLEMEDİ; devletler_harita.js yok).
  Fark: 4c 127→126 (*"TAVAN GEVŞEK — BEKLENEN_ASAN = 126"*) · 2s 1722→1723 kırılma, AÇIK 185 sabit (tavan 185) ·
  YIL-TEMSİLÎ BORÇ 165→166 · `m:` uyuşmazlığı 489→492 · Değişmez 7 enklav 733→738 (ihlal sayılmıyor).
  Yeni 5 enklav: `1353 Harput → artuklu 203 km ada: Harput+Palu` · `1353 Palu → artuklu 169 km` ·
  `1436 Harput → dulkadir 153 km` · `1462 Hasankeyf/Siirt → akkoyunlu ada: Diyarbakır+Hasankeyf+Siirt`.
  ⇒ **İlk ikisi Emre'nin gördüğü kopuk Artuklu parçasının denetimdeki adıdır** — düzeltme onu GİZLEMİYOR, ADLANDIRIYOR.

## ② NE BULAMADIM
- **Harput · Palu 1353→1429/1465 için tarihli kimlik:** TDV `harput`: *"Dulkadırlı, Kadı Burhâneddin,
  Karakoyunlu ve Akkoyunlu devletleri arasında sık sık el değiştirmesine yol açtı"* — tarih yok. Palu için
  önceki tur kaynağın kendisinden `bulunamadı` (Ünal 1990: *"hangi tarihte gerçekleştiğini belirleme imkânına
  sahip değiliz"*; kayıtta "BU KALEM AÇILMASIN"). ⇒ **Diff uygulansa da 1401-1409'da Harput+Palu `artuklu`
  kalır; iki parça KÜÇÜLÜR (Çemişgezek düşer) ama KAYBOLMAZ.** Bunu açıkça söylüyorum.
- Görsel bu makinede yok; üretilmiş `devletler_harita.js` yok ⇒ hangi poligonun bordo olduğu ölçülemedi.
- Taze TDV GET yapmadım; cümleler `denetim/GLM1-TDV-ONBELLEK/` önbelleğinden (artuklular, harput,
  dulkadirogullari, akkoyunlular, divrigi, malatya, mardin).

## ③ NE İSTİYORUM
1. **Sınıf:** D205 ① — kimlik yanlış (`s:` kaydı hatalı), emilme DEĞİL (bölge noktalı). Ve bir
   **birleştirme gerilemesi** (yama indi, sonra ezildi). Önerim: `denetim/ARTUKLU-IKI-PARCA-1008-KOORD.diff`
   (yeni kaynak yok, yalnız 5 Eylül'de onaylanıp inmiş değerin geri konması) + **aynı commit'te**
   `BEKLENEN_ASAN 127→126`; enklav tavanı (731) 738'e çıkmalı mı yoksa beyan mı — koordinatör kararı.
2. **Kalan Harput 1353→1429 için seçenek (D210 sınırında, diff YAZMADIM):**
   Ⓐ hiçbir şey yapma, kalem açık (bugünkü karar) · Ⓑ `dulkadir 1378→1429`: TDV `dulkadirogullari`
   *"Halil Bey on yıl sonra bu şehri tekrar ele geçirdi. Bu olay üzerine … Berkuk, 1378'de…"*,
   *"1381 … Harput'a çekildiler"*, *"1429'da Akkoyunlular'a kaptırdıkları Harput'u"* — uçlar kaynaklı,
   1386-1429 arası çıkarım (Kadı Burhâneddin/Karakoyunlu ara dönemleri olabilir) ⇒ `not:`a "ara dönem
   kaynaksız" yazılarak. **Önerim Ⓑ** — 1234'te bittiği KESİN bir kimliği bırakmaktan daha az yanlış;
   ama 1381-1429 kesintisizliği iddia edilemez, karar sizin. Palu'ya dokunulmaz (kaynak tüketilmiş).
3. **D206 ters yön:** Çemişgezek → `cemisgezek-beyligi` komşuda delik açmıyor (Değişmez 1 sahipsiz sayısı
   değişmedi; 2s AÇIK değişmedi). Akkoyunlu tarafında 1462 Diyarbakır+Hasankeyf+Siirt yeni enklav olarak
   görünüyor (Çemişgezek 1420'den akkoyunlu olunca ana gövde değişiyor) — 1401-1409 penceresine DOKUNMUYOR.
4. **Divriği:** diff Divriği'ye DOKUNMAZ. Yan bulgu (DIVRIGI-MEMLUK grubuna): TDV `malatya` *"Timur'un
   Malatya'dan ayrılmasının ardından Dulkadıroğulları buraya tekrar hâkim oldu"*, veri 1402-07-28'den `memluk`.
   TDV `divrigi`: 1398 Osmanlı, *"1401'de tekrar Memlükler'e verildi"* — veriyle uyumlu.

## ④ EK (koordinatör sorusu): İKİ TABLO HANGİ GÜNLERDE? — `s:` zincirlerinden ölçüldü, görsel varsayılmadı
Bölge 35.5-41N × 36-43.5E, 1281-1516 arasındaki her `s:` kırılma gününde soruldu
(betik: `aralik.py`, scratchpad). Tanımlar: **A** = artuklu kuzeybatı (Çemişgezek/Harput/Palu) VE güney
(Mardin kümesi) VE Diyarbakır `akkoyunlu` · **B** = akkoyunlu güney (Diyarbakır…) VE kuzey (Şebinkarahisar…)
VE arada artuklu kuzeybatı.
```
                      BUGÜNKÜ VERİ                     DIFF UYGULANINCA
A (H-0002 tablosu)    1401-01-01 → 1409-01-01  (8 yıl)  1401-01-01 → 1409-01-01 (Harput+Palu)
B (H-0024 tablosu)    1401-01-01 → 1465-01-01 (64 yıl)  1401-01-01 → 1465-01-01
                      ara: Çemişgezek+Harput+Palu       ara: Harput+Palu → 1429'dan sonra yalnız Palu
```
⇒ **A ⊂ B.** H-0002'nin tablosu YALNIZ 1401-1409'da var; H-0024'ün tablosu 1401-1465 boyunca var.
İkisi aynı kareyse gün 1401-1409'dadır ve tek cevap yeter; H-0024 1409-1465 arasındaysa Artuklu
TEK parçadır (Mardin kolu 1409'da bitti) ama Akkoyunlu yine aynı Harput üçlüsüyle bölünüyor.
**Hangisi olduğu görsel olmadan AYRILAMAZ** (H-0024 için koordinatör yer adı vermedi) — ama iki durumda da
kusurun kaynağı AYNI üç kayıttır, cevap tektir: arada duran `artuklu` 1234 sonrası için yanlıştır.
📌 Diff B'yi KAPATMAZ: Palu 1353→1465 `artuklu` (kaynak tüketilmiş kalem) Akkoyunlu'yu 1465'e kadar
bölmeye devam eder. B'yi kapatan tek şey Harput/Palu'nun 1353-1465 kimliğidir (③-2 seçenekleri).

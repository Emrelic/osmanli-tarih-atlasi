# P84-DOBRUCA-TUNA-1006 — H-0010 (Dobruca 1402, ters yön) · H-0003 (İbrail · İshakçı · Kalas)

6 Ekim 2026 · UMIT kıtası (hazır kıta 0610 1231) · görev UMIT İRTİBAT · taban `origin/makine/umit` @ `cdc1ccea`.
**Veri dosyalarına yazılmadı. Diff YOK** (gerekçe §1.4 ve §2.4). Ölçüm aracı: `denetim/ARAC-P84-DOBRUCA-TUNA-1006.py`
(SALT OKUR, `girdi.yukle()`, kökünü `__file__`den bulur).

## 0 · Mükerrer kapısı
`denetim/` ad + içerik taraması: `PAKET-0076-DOBRUCA-1004.md` (+ `.diff`), `PAKET-0076-ISHAKCI-1004.md`
(+ `.diff`, `-DUZELT-1005.diff`) bu coğrafyayı 4-5 Ekim'de ölçmüş ve **H-0010'un konusunu VERİDE kapatmış**
(commit `b23589e8` 5 Eki 08:42 · `7585d66d` 5 Eki 13:23). Ama bu raporların **hiçbiri yayındaki GEOMETRİYİ
sormuyor**. Emre'nin sorusu da tam bu. Bu yüzden durmadım; işi bu soruyla sınırladım. H-0003 için
yazılmış bir hüküm yok.

---

## 1 · H-0010 — "Mircea Dobruca'yı yeniden aldı" haritaya yansımamış

### 1.1 Öngörü (ölçümden önce)
Dört noktanın dördü de veride 1402-07-28'de `eflak`a geçiyor (sayı **4/4**). Mekanizma: PAKET-0076 (A) ve
İSHAKÇI yamaları uygulanmış, ama harita gövdeleri o yamalardan ÖNCEKİ bir koşudan geliyor.

### 1.2 Ölçüm
**(a) Veri (`girdi.yukle`, HEAD `cdc1ccea`):**
```
                  1402-07-27  1402-07-29  1405   1412   1414   1417        1419-06
Silistre          d OSMANLI   s eflak     eflak  eflak  eflak  eflak       d OSMANLI   yerlesimler.js:363
Köstence          d OSMANLI   s eflak     eflak  eflak  eflak  eflak       d OSMANLI   yerlesimler.js:1547
Babadağı          d OSMANLI   s eflak     eflak  eflak  eflak  d OSMANLI   d OSMANLI   yerlesimler_ek29.js:461
İshakçı           d OSMANLI   s eflak     eflak  eflak  eflak  eflak       d OSMANLI   yerlesimler_ek29.js:479
```
⇒ **Öngörü TUTTU: 4/4.** Pencereler: Silistre · Köstence · İshakçı `eflak 1402-07-28 → 1419-01-01`,
Babadağı `→ 1416-01-01` (TDV babadagi 819/1416). Hepsinde `kaynak:` var (TDV silistre · kostence · babadagi;
İshakçı Stănică 2016). Kronoloji maddesi `data/olaylar_ek10.js` `t:"1402-07-28"` dört yeri adıyla anıyor.

**(b) Haritayı çizen gövdeler — hangi veriden üretildi** (`URETIM_IZI`ndeki sha256, git geçmişindeki
blob'larla eşleştirildi; LF ve CRLF iki biçimde de denendi):
```
data/petek_govde_ust.js · data/donemler_ust.js   iz: yerlesimler.js + yerlesimler_ek29.js
   → commit 52222fa3 (1 Eki 00:51) "KOSU 19 GIRDISI"
   gövdelerin son commit'i 09cdd1d9 (5 Eki 16:53) "YAYIN r11351 — GERİLEME GERİ ALINDI: KOŞU 19'un gövdeleri"
origin/main (yayın, index.html ?v=r11817)          URETIM_IZI satırı makine/umit ile AYNI (sha 'eafd0b6cc6fc')
```
**(c) Koşu 19 girdisindeki zincir** (52222fa3 `git archive` ile çıkarıldı, aynı `girdi.yukle` ile okundu):
```
                  1395       1405               1415
Silistre          d OSM      s suleyman-celebi  d OSM
İshakçı           d OSM      s suleyman-celebi  d OSM
(Köstence / Babadağı aynı şablon: çelebi ×4 1402-07-28→1413-07-05, d 1413→)
```

### 1.3 Hüküm
**Veri hatası DEĞİL, BAYAT GEOMETRİ.** Kronoloji ile girdi verisi uyumlu. Yayındaki harita, Dobruca
düzeltmesinden 4 gün önceki Koşu 19 girdisinden çiziliyor. O girdide Dobruca 1402-1413 arası çelebilerde,
1413'ten itibaren Osmanlı'da. Emre'nin gördüğü budur. `CLAUDE.md §9` sınıfı: koşu çıktısı bayat.
`§2` noktasızlık sorusu da temiz. 1405'te Dobruca kutusunda 4 nokta var ve dördü de Eflak. Kuzey
yakada İbrail · Buzău · Rimnik de Eflak. ⇒ Koşu sonrası bölge **kesintisiz Eflak** boyanmalı.
Hacıoğlupazarcığı `kur 1518` olduğu için 1402'de yok. Güney Dobruca'nın en yakın iç noktası Varna
(PAKET-0076 §8: 67 km).

### 1.4 İstek / öngörü (bir sonraki koşu için)
- **Diff gerekmiyor.** H-0010, girdisi `b23589e8` + `7585d66d`yi içeren ilk koşuyla kapanır. Bu koşu
  veri koşusu olabilir, tam inşa şart değil.
- ÖNGÖRÜ (koşudan önce yazıldı): 1402-07-28 → 1416-01-01 arasında Silistre · Köstence · Babadağı · İshakçı
  petekleri Eflak renginde olur ve Tuna'nın kuzeyindeki Eflak gövdesine bitişir. 1416-01-01 → 1419-01-01
  arasında **Babadağı tek başına Osmanlı adası** olur. Bu kaynaklı ve bilinen bir durumdur
  (PAKET-0076-ISHAKCI §3, Değişmez 7 adası). 1419-01-01'den itibaren dördü de Osmanlı'dır.
- Kapının bu sınıfı neden görmediği: Değişmez 2 VERİYİ ölçer (kırılma ↔ madde). "Veri ↔ yayındaki
  gövde" farkını soran bir kapı yok. Bu kalem, o sorunun ilk somut kurbanı. **Ayrı bir öneri:**
  yayın kapısı, `URETIM_IZI`ndeki girdi hash'lerinin HEAD'deki girdiyle uyuşmadığı noktaları
  ("bayat nokta") sayıp basabilir. Bu kalemde **ölçülmedi**, yalnız öneri.

---

## 2 · H-0003 — İbrail · İshakçı · Kalas "bu tarihte kimde, görünüm doğru mu"

### 2.1 Görsel (AÇTIM: `H-0003-1.png`, `H-0003-2.png`)
Metin tarih vermiyor. Görselde İbrail'in petek bölgesi yeşil ve **"MACARİSTAN"** etiketli; Kalas
pembe, İshakçı zeytin yeşili. Tarih çubuğu görünmüyor.
⇒ Tarih veriden çıkarıldı. İbrail'in `macaristan` olduğu TEK pencere `1281-01-01 → 1330-01-01`.
Koşu 19 girdisinde de aynı (aşağıda). Kalas `altinorda 1281→1359`, İshakçı `bulgaristan 1281→1393`.
**Görsel 1281-1330 arasıdır.** Renkler bu üç sahiple tutarlı.

### 2.2 Ölçüm — üç noktanın zinciri (HEAD; 1281-1330 halkası Koşu 19 girdisinde de AYNI)
```
İbrail  (45.270 27.972) yerlesimler.js:462
   s macaristan 1281-01-01→1330-01-01   kaynak: TDV eflak 'Eflak bu tarihlerde Macar hâkimiyetindeydi' · 1310 Basarab · 1330 Posada
   s eflak      1330-01-01→1462-06-01   kaynak: —
   v 1462-06-01→1538-09-01 · d 1538-09-01→1829-09-14 · v →1878 · romanya…
Kalas   (45.435 28.008) yerlesimler.js:461
   s altinorda  1281-01-01→1359-01-01   kaynak: 'ÇIKARIM: TDV bogdan … + TDV bucak (komşu)' (beyanlı)
   s bogdan     1359-01-01→1456-06-01   kaynak: —   · v 1456→1877 · romanya…
İshakçı (45.274 28.460) yerlesimler_ek29.js:479
   s bulgaristan 1281-01-01→1393-09-01  kaynak: — (PAKET-0076 §6 "halka ①": koordinatör DOKUNMADI, beyanlı)
   d 1393→1402 · s eflak 1402→1419 (Stănică) · d 1419→1878 · romanya…
```

### 2.3 TDV (önbellekten okundu, yeniden çekilmedi: `denetim/KRONO-TUNA-0929-tdv-onbellek/{ibrail,eflak,dobruca,bogdan}.txt`;
`eflak.txt` KORIDOR-0081 kopyasıyla, `dobruca.txt` KRONO-BALKAN-D kopyasıyla bayt bayt AYNI)
```
ibrail   "Eski bir yerleşme yeri olup olmadığı bilinmemekle beraber adı kaynaklarda ilk defa XIV."
         "Ancak bu ada kesin olarak, Eflak voyvodası tarafından Transilvanya'daki (Erdel) Braşov tüccarlarına
          verilen 20 Ocak 1368 tarihli ticaret imtiyazı belgesinde rastlanır."
         ⇒ şehrin 1368'den önceki sahibi hakkında hüküm YOK.
eflak    "…Moğol istilâsıyla ikiye bölünen Kumanlar'ın güney kolu Bizans hâkimiyetine girdi. … Eflak bu tarihlerde
          Macar hâkimiyetindeydi. Batu Han ordularının Macaristan'ı işgal etmesi, Macarlar'ın Eflak topraklarına
          daha fazla yayılmasını önlediği gibi…"
         "Macarlar'ı 1330 yılında Posada mevkiinde yenerek istiklâlini ilân etti."
dobruca  "1186'da Kumanlar tarafından kurulan ikinci Bulgar devleti varlığını, Dobruca'nın 1241'de Moğollar
          tarafından istilâsına kadar sürdürmüştür." · "Moğol hâkimiyetine giren Dobruca, böylece hem Bizans hem de
          Bulgarlar'a karşı muhtariyet kazanarak bağımsız bir gelişme göstermiştir."
          "…1359'da Kuzey Dobruca'yı işgal ederek…" (Dobrotiç)
bogdan   "Bu bir asra yakın sürede Boğdan beyleri Macar, Polonya ve Altın Orda devletlerinin hâkimiyet
          iddialarına karşı varlıklarını denge politikası güderek korudular."
```

### 2.4 Hüküm — nokta nokta
```
İbrail   macaristan 1281-1330   🟡 ZAYIF DAYANAK. İki ayrı kusur var:
         ① ALINTI YANLIŞ DÖNEMİ TARİHLİYOR (§4 ⑧ / OLCUM §4). "Eflak bu tarihlerde Macar hâkimiyetindeydi"
           cümlesi Moğol istilâsı ile Batu Han'ın Macaristan seferi (1241) ÖNCESİNİ anlatıyor, 1281-1330'u
           değil. Aynı maddede 1281-1330'u gerçekten taşıyan cümle Posada cümlesidir: "Macarlar'ı 1330 yılında
           Posada mevkiinde yenerek istiklâlini ilân etti". Bu cümle 1330'a kadar Macar üstünlüğünü İMA eder.
         ② BÖLGEDEN ŞEHRE (D208): iki cümle de "Eflak" bölgesi için. İbrail ovanın doğu ucunda ve TDV ibrail
           1368 öncesi için sahip vermiyor.
         ⇒ Veri değeri ne doğrulandı ne çürütüldü. Görünüm "kaynak bölge düzeyinde destekliyor" sınıfındadır.
         Aynı kaynak metnini 13 Eflak noktası taşıyor (Bükreş · Tırgovişte · Piteşti · Slatina · Buzău · Rimnik-i
         Sârat · Krayova · Tırgu Jiu · Rimnik · Turnu Severin · Kımpulung · Yergöğü · İbrail; hepsi
         `macaristan 1281→1330`, DUNYA-0079). ① 13'ünde de geçerli.
Kalas    altinorda 1281-1359    🟢 BEYANLI ÇIKARIM, kaynakla çelişmiyor. TDV kalas/galac slug'ı yok (302). TDV bogdan
         Boğdan'ın kuruluşundan önce Tatar istilâsını, sonrasında da Altın Orda iddiasını anıyor. Komşu Kili ·
         İsmail · Kahul aynı zinciri taşıyor (Kili'ninki TDV bucak/akkirman kaynaklı). Atlas tutarlı.
İshakçı  bulgaristan 1281-1393  🔴 KAYNAKSIZ ve TDV bölge maddesi ÇELİŞİYOR: TDV dobruca 1241'den sonra Dobruca'yı Moğol
         hâkimiyetinde ve "muhtar", 1359'dan sonra Kuzey Dobruca'yı Dobrotiç'te gösteriyor. TDV silistre
         ise Silistre'yi 1189-1393 Bulgar sayıyor, ama o başka bir şehir. İshakçı'ya ait şehir düzeyinde
         TDV cümlesi BULUNAMADI. ⇒ PAKET-0076 §6'daki "halka ①" kararıyla aynı yer. Koordinatör bu halkayı
         beyanlı borç olarak bıraktı. Bu kalem yeni bir bilgi eklemiyor; yalnız Emre'nin gördüğü
         görüntünün bu borçtan geldiğini adıyla bağlıyor.
```
**Görüntü doğru mu?** Üç sahip de verinin söylediğini gösteriyor; geometri hatası yok. Ama verinin
dayanağı üç noktada üç farklı sertlikte. Kalas sağlam, İbrail zayıf, İshakçı borçlu.
📌 Görselde İbrail'in Macar parçası batıdaki Eflak/Macar gövdesinden pembe bir şeritle AYRI görünüyor.
Bu, **H-0018'in konusu** (rötuş, başka kıtada); burada ölçülmedi. H-0018'e girdi olarak: **o pencerede
İbrail'in sahibi, batısındaki Buzău/Rimnik ile AYNI (`macaristan`)**. Ayrılığı sahiplik değil, geometri
üretiyor.

### 2.5 İstek
- **(öneri, diff YOK)** 13 Eflak noktasının `macaristan 1281→1330` `kaynak:` metnindeki alıntı, Posada
  cümlesiyle değiştirilmeli ve "bölge cümlesi (D208)" diye şerh düşülmeli. Değer değişmez, motor etkisi
  yok. Ama dosya `yerlesimler.js` (koordinatörün) ve 13 kayıtlık bir DUNYA-0079 kararı. Bu yüzden diff
  üretmedim; istenirse tek seferde üretirim.
- İshakçı halka ① ve Kalas ÇIKARIM: değişiklik önermiyorum (kaynak yok).

---

## 3 · Bulunamadı (6 Ekim 2026, denenen yollar adıyla)
```
TDV  nogay · nogay--altin-orda-emiri · nogay-han · isakci · kalas · galac → 302 (ölü)
     nogaylar → 200, gövdede İsakçı / Dobruca / Kalas / İbrail için 1281-1359 hükmü YOK (yalnız XVIII. yy Bucak yerleşimi)
     arama sayfası denenmedi (PAKET-0076: JS ile yükleniyor, sonuç okunamıyor)
Akademik  İshakçı'nın 1280-1359 sahibi için Vásáry, "Cumans and Tatars" (2005) ve Spinei'nin Moldova/Aşağı Tuna
          çalışmaları ADAYDIR. Okunmadı, alıntı YOK.
```

## 4 · Dosyalar
`denetim/P84-DOBRUCA-TUNA-1006.md` (bu rapor) · `denetim/ARAC-P84-DOBRUCA-TUNA-1006.py` (salt okur ölçüm)

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
· `denetim/P84-DOBRUCA-TUNA-1006-KOORD.diff` (§5, UYGULANMADI)

---

## 5 · DEVAM — H-0018 İBRAİL (UMIT İRTİBAT, ROTUS'tan devir)
Taban `origin/makine/umit` @ `3ec79a5f`.

### 5.1 Ölçüm — petek nerede kopuyor
Yayındaki `petek_govde` açıldı (`kodla.py coz-c data … govde`, scratch'e; repo'ya yazmaz).
Ölçülen yayın, Koşu 19 girdisi.
```
İbrail   2.140 km² · 1 parça · boylam 27,87–28,34 · enlem 44,66–45,45  ⇒ Tuna boyunca DAR bir K-G şerit;
                                                                         noktanın yalnız ~8 km batısına uzanıyor
Kalas    4.121 km² · ana parça merkezi 27,82 D / 45,35 K · boylam 27,55–28,20 · enlem 44,53–45,90
         ⇒ Bărăgan anakarası (İbrail'in BATISI, 44,5'e kadar) KALAS'ın peteğinde = ROTUS'un kaması
Buzău    8.440 km² · doğu kenarı 27,68     Rimnik-i Sârat 7.214 km² · doğu kenarı 27,82
```
Kalas, İbrail'den yalnız 18 km kuzeyde. Saf Voronoi'de İbrail'in batısındaki 44,9 K noktası İbrail'e
daha yakındır (≈50 km'ye ≈67 km). ⇒ Motor saf Voronoi değil; nehir/yaslama İbrail'i şeride sıkıştırıyor.
Mekanizma ölçülmedi, motor kodu okunmadı. Bilinen tek şey: ROTUS'a göre Siret
`ne_10m_rivers`ta YOK.
Floci noktasının 40 km içinde başka yerleşim noktası: **0** (mükerrer taraması da bu).

### 5.2 Kaynak — iki soru, iki ayrı sonuç
**(a) Eflak–Boğdan sınırı (Milkov/Siret) 1330-1462 — BULUNAMADI (dönemli cümle yok)**
```
TDV slug (6 Ekim)  milkov · milcov · seret · siret-nehri · seret-nehri · foksan · foksani · foksany · focsani ·
                   fokshan · kalas · galac · galati · floci · yalomica · ialomita · rimnik · buzau ·
                   mircea · mircea-i · basarab · basarab-i → 302 (ölü). baragan: ilk deneme 000 (taşıma), tekrarı 302.
                   siret → 200 ama YANLIŞ MADDE: "SÎRET bk. SİYER ve MEGĀZÎ" (tuzak ②)
TDV arama          Milkov · Fokşan · Seret · Kalas · Galatz · Ialomița · Brayla → 0 sonuç.
                   KALİBRASYON: canlı 'ibrail' maddesi de 0 sonuç ⇒ arama sonuçları sunucu HTML'inde YOK (JS);
                   bu kanal yokluk kanıtı değildir. 'Siret' 6 sonuç döndü, hepsi Arapça sîret/siyer.
TDV önbellek       eflak · bogdan · ibrail · kili · bucak (KRONO-TUNA-0929): sınırı koyan cümle YOK (ROTUS ile aynı)
Britannica         Focşani (tarayıcıyla okundu, birebir): "It is situated on the Milcov River, which was once the
                   boundary between Moldavia and Walachia." ⇒ HAT var, DÖNEM YOK ("once") — 1330-1462 için
                   dayanak DEĞİL (§4 ⑧). curl ile 403.
Akademik           Coman, M., "The Building of the Moldavian-Wallachian Frontier", CEU MA tezi 2002 (etd.ceu.edu)
                   — PDF URL'si depo giriş sayfasına düşüyor (HTML), metin OKUNAMADI. En güçlü aday budur.
```
**(b) Bărăgan'da kaynaklı Eflak noktası — BULUNDU: Floci (Târgu de Floci)**
```
konum      RAN (Repertoriul Arheologic Național, INP/cIMeC) cod 93655.02 · LMI IL-I-s-A-14051
           site poligonu merkezi 44,6886 K · 27,8311 D (eism.geo-spatial.ro PatrimoniuWM/6 — cIMeC haritasının kendi servisi);
           öznitelik Lat 44° 41' 38.182" N (= 44,6939; uyumlu). Reper: "Oraşul se află la km. 104 de pe şoseaua
           Bucureşti - Constanţa (DN2), lângă fostul sat Piua Petrii, la vest de braţul Borcea." · relief "câmpia Bărăganului"
           Muzeul Județean Ialomița: "la 8km vest de comuna Giurgeni"
tarih      DJC Ialomița (il kültür müdürlüğü): "Prima atestare documentară se găsește din anul 1431, într-un document cu
           privilegii pentru negustorii braşoveni al Voievodului Dan al II-lea." · "Oraşul a fost ars în anul 1470 de
           către Domnul Ştefan cel Mare Voievod, în timpul conflictelor sale cu Voievodul Radu cel Frumos."
           (İlk anılış bir Eflak voyvodasının imtiyaz belgesinde; Boğdan voyvodası onu Eflak voyvodasıyla savaşırken yakıyor.)
süreklilik DJC: XVI-XVII. yy en parlak dönem · "Secolele XVIII și XIX au fost martorele decăderii oraşului" ·
           "la sfârşitul secolului al XIX-lea pe locul oraşului s-a format satul Piua Petrii" (1970'te o da kayboldu)
           RAN bileşenleri: aşezare/necropolă "Epoca medievală (sec.XV-XVIII)"
```
Floci noktası bugün **Kalas'ın peteğinin İÇİNDE** (petek_govde ile ölçüldü), yani kamanın tam ortasında.

### 5.3 Öneri → `denetim/P84-DOBRUCA-TUNA-1006-KOORD.diff` (UYGULANMADI · `yerlesimler_ek29.js` +10 satır)
```
Floci (Târgu de Floci)  44.689 27.831 · tur sehir · kur 1431-01-01 (İLK ATESTASYON, YIL — D210)
  s eflak            1431-01-01 → 1462-06-01   kaynak DJC (birebir iki cümle) · bitiş = künye eflak 'tabi' f — KÜNYE PENCERESİ, kaynak DEĞİL
  v eflak (vassal)   1462-06-01 → 1859-01-24   (künye eflak tabi penceresi; Eflak'ın 12 noktasıyla aynı, hiçbiri kaynaklı değil)
  v romanya          1859-01-24 → 1877-05-09
  s romanya          1877-05-09 → 1881-03-26   TDV romanya (devlet düzeyi)
  s romanya-kralligi 1881-03-26 → 1923-10-29
  bit YAZILMADI (yerleşim Piua Petrii köyüyle sürüyor) · isg (Rus 1806-12 / 1828-34) YAZILMADI — BEYANLI BORÇ (`not:`)
```
**SINAV** (worktree):
```
denetle.py   ÖNCE çıkış 2 (yalnız D8 ÖLÇÜLEMEDİ: devletler_harita.js yok — beklenen) · SONRA çıkış 2, aynı sebep
             D1 4299→4300 yerleşim, sahipsiz 309/309 · 1b · 2 · 2s · 2i · 2t · 7 · konum: DEĞİŞMEDİ (--ayrinti diff'lendi)
             🟡 2sk "yalnız taraf" 2247 → 2250 (TAVAN 2247 AŞILDI, +3) — araç: "İhlal değil, ama SINIFI istenir."
                SINIF: Floci'nin devlet düzeyindeki 3 geçişi (1859 · 1877 · 1881). Kapatan maddeler Romanya'yı anıyor,
                kasabayı anmıyor. Buzău/Rimnik'in aynı üç kırılmasıyla AYNI sınıf, yeni bir künye-devralma türü DEĞİL.
                ⇒ ÖNERİ: BEKLENEN_2S_YALNIZ_TARAF 2247 → 2250, bu diff ile AYNI commit'te (§3.4-2). Koordinatör yazar.
sahiplik     SONRA 7/7 (1430 yok · 1440 eflak · 1470/1600 v eflak · 1870 v romanya · 1878 romanya · 1900 krallık) · ÖNCE kayıt YOK
git apply --check   origin/makine/umit 3ec79a5f TEMİZ · origin/main (C:\atlas) TEMİZ · CR 0
```
**ÖNGÖRÜ** (koşudan önce yazıldı, motor koşturulmadı):
- **1431 → 1462:** Floci peteği Kalas kamasının GÜNEY kesimini (enlem ~44,5–45,0) Eflak'a alır. İbrail şeridi
  Floci üzerinden ana Eflak gövdesine (Buzău) bağlanır, ROTUS'un 2.201 km²'lik ayrı bileşeni düşer.
  Kesin değil: motor saf Voronoi değil (§5.1).
- **1330 → 1431:** DEĞİŞMEZ. Kama ve ayrı bileşen kalır, çünkü o pencere için kaynaklı Bărăgan noktası
  BULUNAMADI.
- **Kuzey kama** (enlem ~45,0–45,6, Rimnik ile İbrail arası): büyük olasılıkla Kalas'ta kalır. Orası Milkov/Siret
  hattının güneyidir; kalıcı çare ya Siret'in nehir verisine girmesi (motor girdisi, koordinatör) ya da
  oraya kaynaklı ikinci bir nokta.
- 1462 sonrası iki taraf da tâbi. ROTUS bu katmanda kamayı ölçmemişti; Floci 1462-1859 arasında da
  Eflak tâbiidir ve aynı etkiyi yapar.

### 5.4 Bulunamadı / istek
- Milkov/Siret sınırının 1330-1462'yi tarihleyen cümlesi: BULUNAMADI. Okunmamış en güçlü aday Coman 2002 (CEU).
- Kuzey Bărăgan'da (Rimnik–İbrail arası) 1330-1462'den kaynaklı nokta aranmadı. Aday aramanın yeri
  RAN katman 6 (aynı servis), "Epoca medievală" süzgeciyle.
- Değişmez 2: Floci'nin `v` başlangıcı 1462-06-01. Bu gün Eflak'ın öteki 12 noktasıyla ortak; denetle'de
  D2 açık sayısı 0 kaldı.

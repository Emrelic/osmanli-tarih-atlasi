# GEOMETRI 0916 — DALGA-0052 geometri teşhisi

```
OTURUM  : GEOMETRI (koordinatör 1.MURAT) · 16 Eylül 2026
MADDE   : H-0012 · 69 · 97 · 99 · 102 · 103 · 107 · 108 · 109 · 110 · 124
TABAN   : yayındaki koşu 11 çıktısı — data/donemler.js · devletler_harita.js ·
          petek_govde.js (14 Eyl 21:18). Girdi izi: 81 dosyanın 2'si sonradan
          değişti (yerlesimler.js · yerlesimler_sinir_guney.js); ölçülen
          kayıtların (Edinburg · Minsk · Vladikavkaz · Rostov) sahipliği
          bu değişikliklerden etkilenmedi (gözle okundu).
KISIT   : kod/veri YAZILMADI. uret_petek İMPORT EDİLMEDİ (metin olarak okundu;
          satır numaraları MOTOR oturumu dosyayı düzenlerken kaydı — ad ile ara).
ALETLER : denetim/ARAC-GEO-{OLCUM,BAYAT,TASMA,UCGEN,RECETE,B2,BICIM,
          INCEHUCRE,B3,PUAN,KAFES}-0916.py → OLCUM-GEO-*-0916.json
```

## ⓪ Vakalar — ekran görüntüsünün altındaki gün+kutu ile yeniden kuruldu

| vaka | gün | örtüşme km² | boşluk km² | not |
|---|---|---|---|---|
| H-0012 | 1605-10-03 | 810 | 0 | Vladikavkaz hücresi %100 Osmanlı-tâbi |
| H-0124 | 1679-01-01 | 0 | 917 | aynı hücre %96,7 Gürcistan, uç %3,2 boş |
| H-0069 | 1642-02-26 | 3 | 122 | Rostov/Taganrog hücreleri (kur sonra) |
| H-0097 ×5 | 1672-10-18 | 1.139 | 8.092 | Lehistan–Rusya–İsveç–Avusturya kenarları |
| H-0099 ×3 | 1672-10-18 | 971 | 401 | Liège · Tournai · Edinburg |
| H-0102 | 1672-08-27 | 972 | 70.314 | Kazak bozkırı şeritleri |
| H-0103 | 1672-08-27 | 0 | 97.667 | Aral |
| H-0107 | 1672-08-27 | 10.932 | 779 | Şan × Toungoo (Chiang Mai) |
| H-0108 | 1672-08-27 | 0 | 2.784 | Hainan batısı |
| H-0109 | 1672-08-27 | 4.654 | 19.655 | Qing bantları Cao Bằng üstünde |
| H-0110 | 1672-08-27 | 1.425 | 131 | Portekiz (Makao) Hong Kong üstünde |

Toplam örtüşme **20.907 km²** (Osmanlı katmanları kendi aralarında hariç).

## ① Öngörü defteri — ölçümden ÖNCE yazıldı

```
H1  örtüşme = bayat gövde (ts dışı kur/bit)        ≥%70   → %20 (5/25)   🔴 ÇÜRÜDÜ (ama dar tuttu, ⑤)
H3  örtüşme = kapat(0,15°) taşması                  ≥%60   → 2/24         🔴 ÇÜRÜDÜ
H4  açıklanamayanlar B2 köprüsü                     ≥8/13  → 2/13         🔴 ÇÜRÜDÜ (ama gerçek kusur, ④)
H5  hücresiz şerit = B3                             2/2    → 0/2          🔴 ÇÜRÜDÜ (yayındaki gövdeden kurulum ara hâli göremiyor)
H6  hücresiz şerit noktası puanı yalnız 200-400 km  ≥3/4   → 4/4          🟢 TUTTU
KAFES reçetesi  kalan örtüşme ≤%10                  →  %7,6 (1.582)       🟢 TUTTU
                yeni boşluk ≤ silinen komşunun %15'i → %7,6 (1.589)       🟢 TUTTU
```
📌 Dört mekanizma adayı tek tek çürüdü; ortak paydası **hiçbirinin komşunun
PETEĞİNİ sormaması**. Çare bu yüzden mekanizma başına değil, hepsinin
ARDINDAN tek bir maske (③).

## ② Sınıf A — ÖRTÜŞME: gövde başına süs işlemi komşu toprağına taşıyor

`_yabanci_devlet_faz1` sırası: `unary_union(hücreler) → kapat(0,15°) →
delikleri_doldur → gosterim_duzelt (B2 · B3) → KARA → PUAN`. Her gövde AYRI
işleniyor ve kapat/B1/B2/B3'ün yasak sınavı (`_yasakli_mi`) yalnız
**"içeride başka devletin NOKTASI var mı"** diye soruyor; komşunun **hücresini**
sormuyor. B2'nin ek sınavı (`_bant_baskasinin_topragini_kesiyor_mu`) yalnız
bandın **orta çizgisini** örnekliyor.

Ölçülen biçim (ARAC-GEO-BICIM): örtüşmelerin çoğu **2–10 km genişlikli sınır
şeridi**; davetsiz gövde komşu hücrenin %0,7–10'unu kaplıyor, komşunun kendi
gövdesi o hücrenin %94–100'ünü zaten boyuyor ⇒ **çift boya.**
```
H-0099-1  İspanya  → Liège (almanya)      463 km² · 9,3 km şerit
H-0099-3  İskoçya  → Edinburg (ingiltere) 307 km² · 9,9 km
H-0099-2  Fransa   → Tournai (ispanya)    124 km² · 3,3 km
H-0102    Kazak    → Zaural (rusya)       972 km² · 10 km
H-0097-3  Lehistan → Stettin (isvec)      726 km²
H-0109    Qing     → Cao Bằng (mac)     4.592 km² · 13-18 km (biri B2 köprüsü)
```
**B2 kanat kusuru (gerçek, ölçüldü):** anakara ucundaki yarı genişlik tavanı
`min(2·en_enklav, 3,0°)` — yeniden kurulumda **307 ve 333 km** çıktı. Cao Bằng'da
orta çizgi sınavını GEÇEN bir bant komşu hücrelerin **3.545 km²**'sini örtüyor.

## ③ REÇETE — "KAFES" (ARAC-GEO-KAFES, 17 vaka)

```
süs adımlarından SONRA, KARA/PUAN'dan ÖNCE:
    g = g − ⋃ { petek_epok(a)[j] : j'nin a günündeki sahibi BAŞKA }
    (ve tavan dışı için:  g = g ∩ ⋃ petek_epok(a)  — hücresiz yere boya yok)
```
```
örtüşme           20.907 → 1.582 km²   (−%92)
silinen komşu     20.913 km²
silinen hücresiz  18.480 km²   (H-0102 şeritleri 12.470 · H-0109 3.020 · H-0097-1 1.239)
yeni boşluk        1.589 km²   (en çok H-0107 743 · H-0109 663)
```
⚠️ Sınav TABAN hücreyle yapıldı (motorun epok hücresi dışarıdan kurulamıyor):
kur/bit devirleri "sahipsiz" göründü ve izinli sayıldı. Kalan 1.582'nin 1.365'i
bu yüzden (H-0110 Hong Kong, ⑦). Motorda epok hücresiyle uygulanınca o da düşer.
Kapamanın meşru dolgusu korunuyor: RECETE SINAV B, 23 ölçümün 22'sinde %79–100.
Tek kötü vaka Lubnı %0,4 (orada kapamanın bütünü komşu hücresindeydi).

## ④ Sınıf B — İNCE UZUN ŞERİT, HİÇBİR HÜCRENİN OLMADIĞI YERDE (H-0102 · H-0109)

Şeritlerin altında taban hücre YOK (200 km tavanının dışı). Puanları motor
formülüyle hesaplandı (ARAC-GEO-PUAN):
```
H-0102 (64,67 · 52,17)  puan 5   İşim 230 km(2) · Turgay 295(2) · Kökçetav 345(1)
H-0102 (66,90 · 49,56)  puan 6   yalnız 200-400 km halkaları
H-0109 (105,06 · 23,68) puan 4   Kunming 282(2) · Nanning 350(1) · Guiyang 365(1)
H-0109 (106,17 · 24,19) puan 5
0-200 km katkısı: 4 noktanın HİÇBİRİNDE yok
```
⇒ Hücresiz boşluğu bir süs adımı dolduruyor, PUAN kapısı onu kesmiyor çünkü
dış halkalar toplamı 4'e ulaşıyor. Hangi süs adımı olduğu yayındaki gövdeden
**ölçülemedi** (H5 çürüdü). Kafes'in ikinci satırı bunu siliyor. Alternatif:
PUAN'a "en az bir noktanın 0-200 km katkısı" şartı.

## ⑤ Sınıf C — BAYAT GÖVDE (H-0107 · H-0110)

`ts` yalnız devletin **kendi** yerleşimlerinin s/d/v günlerinden kuruluyor;
birleştirme ölçütü `aktif == onceki`. Komşu bir `kur:`/`bit:` ya da dolgu
değişimi o devletin gövdesini TAZELEMİYOR.
```
san-devletleri  TEK dönem 1281-01-01 → 1923-10-29 (642 yıl)
Chiang Mai      kur 1296-04-12 — 1281'de payı Şan'a dağıtılmış, hiç geri alınmadı
                ⇒ 1672'de hücrenin %24,7'si (10.162 km²) Şan + %99,8 Toungoo
```
Kafes bunu ancak maske o günün sahipliğiyle kurulursa keser; kurulma günü
1281 olduğu için **kafes tek başına yetmez** ⇒ tazelik çaresi ayrıca gerekli.

## ⑥ Sınıf D — DÜZ KENARLI ÜÇGEN/KAMA (H-0012 · H-0124 · H-0069)

```
Vladikavkaz   taban hücre 28.581 km² · kur 1784-01-01 · kasitli_bosluk · bos:"hata"
              `bos:"hata"` DOLDURULABILIR_BOS'ta + kur sonra (4. sınıf) ⇒ dolgu kapısına girer
   1605-10-03  %100 Osmanlı-tâbi       (H-0012)
   1642 · 1679 %96,7 Gürcistan · %3,2 boş   (H-0124 — uçtaki boşluk)
Rostov (Don)  4.927 km² · kur 1749-12-15
              1749 öncesi YEREL VORONOİ ③ ile bölünüyor: Azak %46,6 (Osmanlı)
              · Çerkask %52,6 (Don Kazak) — düz orta dikme, Don nehrine OTURMUYOR
Taganrog      9.835 km² · kur 1698-09-12 · 1698 öncesi %100 Osmanlı-tâbi
```
İki kök:
1. **Dolgu puanı düz mesafe.** Kafkas sırtının güneyindeki tâbi/Gürcü noktalar
   kuzey yamaçtaki boş hücreyi puanla kazanıyor. Emre'nin sorusunun cevabı:
   *evet, Tiflis–Kaheti tarafı dağı "açıp" oraya geliyor* — sırt puana girmiyor.
   Ve dolgu **hücre düzeyinde** katılıyor: bütün üçgen tek parça boyanıyor.
2. **Paylaştırma ③'ün kestiği yeni kenarlar yaslama/Chaikin görmüyor.**
   `petek_epok` mini-Voronoi'si örtü boru hattından SONRA koşuyor; kıyı/nehir/sırt
   yaslaması taban kenarlara bir kez yapılmıştı. Rostov kaması bunun doğrudan
   görüntüsü.

🔴 **EK (HARITA-VERI M-4001 ile birleşti):** Vladikavkaz `kasitli_bosluk:true`
de taşıyor. `_kusatilmis` bu bayrağa uyuyor, ama `_dolgu_kumesi`'nin
`_dordurcu` (kur sonra / bit önce) şartı **uymuyor** ⇒ kasıtlı boşluk yine
puanla boyanıyor. HARITA-VERI aynı kökü Katar'da ölçtü (Doha kur 1825 +
kasitli_bosluk → 1610-1710 Safevî 6 > Benî Hâlid 4). İki vaka, tek satır.
Ayrıca Vladikavkaz'da `bos:"hata"` (doldurulabilir) ile `kasitli_bosluk:true`
(boş kalmalı) **kendi içinde çelişiyor** ⇒ veri tarafı da karar ister.

H-0124 ek: bölge **Vladikavkaz'ın** hücresi; Vladikavkaz 1784 öncesi haritada
yok (`kur`). 1784 öncesi o toprağın sahibi veri tarafından söylenmiyor
(`bos:"hata"`) — Kuzey Kafkasya TK Kırım oturumunda dondurulmuş, yalnız araştırılır.

## ⑦ Sınıf E — KOLONİYE DEVİR PAYI (H-0110)

```
Hong Kong  15.158 km² · kur 1841-01-26 · 1672'de Portekiz %42 · Qing %67
Makao       661 km² hücre — Portekiz
```
1841 öncesi paylaştırma, Hong Kong hücresinin büyük payını **Makao'ya**
(Portekiz) veriyor ⇒ küçük bir koloni Pearl River'ın doğu yakasını boyuyor.
Örtüşmenin sebebi: iki gövde farklı günlerde kuruldu (⑤).
Çare adayları: (a) veri — Hong Kong alanının 1841 öncesi sahibi kaynakla
yazılır; (b) motor — devir alıcılarından ada/koloni hücrelerini dışla. **Karar gerekir.**

## ⑧ Sınıf F — NOKTASIZLIK / TAVAN (H-0103 · H-0108 · H-0097-1)

```
H-0103 Aral   74.840 + 13.802 + 8.642 km² hücresiz (Üstyurt doğusu dahil)
H-0108 Hainan  2.738 km² hücresiz — adada tek nokta: Qiongzhou (Haikou)
H-0097-1       3.624 km² hücresiz (28,5 D · 51,7 K — Pripyat); Minsk hücresi %99 boyalı
```
Kıyıya oturmayan dolgu = gövde kıyıya **hiç ulaşmıyor**; hücreler 200 km
tavanında bitiyor. Emre'nin "Aral kıyısına 3. derece oturt" isteği motorla değil
ancak **kıyı noktalarıyla** karşılanır (Emre'nin kararı: "devasa boşluklar
olacaksa olsun"). ⇒ HARITA-VERI.

## ⑨ Veri şüphesi (yan bulgu)

`Edinburg` — `s: ingiltere 1281-01-01 → 1923-10-29`. İskoçya'nın başkenti;
1707 Birlik öncesi `iskocya` olması beklenir. Kaynakla sınanmadı ⇒ HARITA-VERI.

## ⑩ Madde madde

```
H-0012  ⑥ dolgu düz mesafe + hücre bütün katılım (Vladikavkaz) · ② 511 km² örtüşme → MOTOR
H-0069  ⑥ Rostov/Taganrog devir kenarları yaslanmıyor                               → MOTOR
H-0097  ② kenar şeritleri (1.139) · ⑧ Pripyat hücresiz                                → MOTOR · HARITA-VERI
H-0099  ② Liège/Tournai/Edinburg şeritleri · ⑨ Edinburg sahipliği                     → MOTOR · HARITA-VERI
H-0102  ④ hücresiz şerit (puan dış halkadan) · ② Zaural                               → MOTOR
H-0103  ⑧ Aral kıyısında nokta yok                                                    → HARITA-VERI
H-0107  ⑤ Şan tek dönem 1281→1923 · Chiang Mai payı                                   → MOTOR
H-0108  ⑧ Hainan'da tek nokta                                                         → HARITA-VERI
H-0109  ② B2 kanadı (yarı genişlik ≤333 km) · ④ hücresiz şerit                        → MOTOR
H-0110  ⑦ Hong Kong payı Makao'ya · ⑤                                                 → MOTOR + KARAR
H-0124  ⑥ = H-0012 (1679'da Gürcistan) · uç boşluğu ÖLÇÜLMEDİ                        → MOTOR · HARITA-VERI (yalnız araştırma)
```

---

# İKİNCİ TUR — KUTU-AYIKLA MOTOR 1–20 (DALGA-0052 §2c)

```
GİRDİ   : denetim/KUTU-AYIKLA-0916.md §④ MOTOR 1–20 · görseller kutu/giden/parti-emrelic-00{21..48}
TASARIM : oturumlar/GORUNUM-ABCD-0916.md (Emre, 16 Eyl — A sürtünmeli yürüyüş · B ayrı dolgu
          katmanı · enklav kuralı: B başkasının A toprağını ÖRTMEZ)
ÖLÇÜM   : 20 maddenin 38 görselinin alt yazısı okundu (gün+kutu) → 43 kutu, BUGÜNKÜ yayında
          (koşu 11) yeniden kuruldu. Görseller ESKİ koşulardan ⇒ ilk soru "bugün hâlâ var mı" (D044).
ALETLER : ARAC-GEO-TUR2 · ARAC-GEO-BOYANMAYAN · ARAC-GEO-KIYI (-0916) → OLCUM-GEO-{TUR2,BOYANMAYAN,KIYI}-0916.json
```

## Ⓐ 43 kutunun toplamı

```
örtüşme                18.665 km²   (Mardin 1409 hariç 13.777)
KAFES sonrası           3.481 km²   (Mardin hariç 779 → −%94)   silinen komşu 15.413 · hücresiz 21.071
KAFES yeni boşluk         231 km²
geçersiz ham halka      29 kutuda ≥1 (toplam 53)
boşluk  hücresiz 291.899 · sahipsiz hücre 268.175 · SAHİPLİ ama boyanmayan 42.740 km²
```
⚠️ Kafes için bu turda ÖNCEDEN öngörü yazılmadı (reçete birinci turdan taşındı) — sayı bir
DOĞRULAMA değil, birinci turun sonucunun ikinci örneklemde TEKRARI.
Mardin'de kalan 2.702 km²: sahipsiz hücreyi Celayirli (dönem 1406-10-21'de kurulmuş) ve Karakoyunlu
(1409-01-01) İKİSİ de dolguyla boyuyor ⇒ birinci turun ⑤ BAYATLIK sınıfı.

## Ⓑ İkinci turun yeni ölçümleri

```
① KIYI ŞERİDİ (öngörü önceden: genişlik ≤3,3 km · kıyıya yakın ≥%70)       🟢 TUTTU 4/4
   İmroz 71 km² (%24) 0,84 km · Limni 62 · 0,34 km · Armutlu 100 (%40) 1,22 km · Beykoz 66 · 0,90 km
   hepsinin %90-100'ü kıyıya 4 km'den yakın ⇒ SEYRELT_TOL 0,03° Douglas-Peucker'ı kıyıyı kemiriyor;
   küçük adada payı büyük (H-0016 "Ege adalarına birebir oturt")
   iç sınırda da var: Viyana 1,30 km · Östersund 1,26 · Küngrat 1,62 (kıyı payı %0)
② DENİZ AŞIRI DEVİR (0040/H-0002 Tallinn)                                  🔴 KUSUR BUGÜN VAR
   1281'de `almanya` gövdesi Fin kıyısında HELSİNKİ hücresinin (kur 1550) 1.727 km²'sini boyuyor
   ⇒ paylaştırma ③ (yerel Voronoi) Finlandiya Körfezi'ni yok sayıyor
③ `polonya-erken` RENKSİZ — bilinen kalem (M-3832), hâlâ açık, YAYINDA ölçüldü
   9 yerleşim (Krakov · Lvov · Poznan · Lublin · Kamaniçe · Bar · Meciboj · Yazlofça · Chełm)
   s: 1281→1569 · DEVLET_HARITA'da gövde YOK ⇒ Polonya çekirdeği 288 yıl boyanmıyor (M-4038)
④ 1392 Maraş (0030/H-0018): bugün kutuda örtüşme/boşluk 0; `dulkadir` TEK dönem 1360→1515 (155 yıl)
   ⇒ görseldeki üçgen bugün ölçülmüyor; dönem bayatlık sınıfına açık
⑤ Buraymî 1820 (0035/H-0101): hücrenin %24'ü (7.763 km²) boyanmıyor, şerit 10 km, kıyıya yakınlık %0
   ⇒ ne seyrelt ne kafes sınıfı; mekanizma ÖLÇÜLEMEDİ
```

## Ⓒ Madde madde — A/B ile çözülür mü?

"A çözer" = GORUNUM-ABCD'deki tek sahiplik (çok kaynaklı Dijkstra, eşit-bedel sınırı, deniz
geçilmez, nehir bedeli) **doğru kurulursa** kusur yapısal olarak doğamaz. "B çözer" = enklav
kuralıyla maskeli dolgu. Şartlar Ⓓ'de.

| # | madde | bugün (koşu 11) | sınıf | A/B? |
|---|---|---|---|---|
| 1 | 0021/H-0030 | — | sefer oku · ateş işareti (kısmen indi) | ❌ MOTOR DEĞİL → UI/HARITA-VERI (yanlış grup) |
| 2 | 0030/H-0018 | kusur ölçülmedi | dulkadir tek dönem 1360-1515 | ✅ A (tazelik şartıyla) |
| 3 | 0035/H-0072 | örtüşme 0 · geçersiz 3 | uzun düz Voronoi kenarı | ✅ A |
| 4 | 0035/H-0101 | Buraymî %24 boş | ölçülemedi (Ⓑ⑤) | 🟡 A büyük ihtimalle — sınanamaz |
| 5 | 0040/H-0001 ×9 | örtüşme 4.697 → kafes 127 | süs taşması + seyrelt | ✅ A+B (maske) |
| 6 | 0040/H-0002 | Helsinki 1.727 km² almanya | deniz aşırı devir | ✅ A (deniz geçilmez) |
| 7 | 0040/H-0003 ×3 | hücresiz 43.624 | 200 km tavanı | ✅ B (boşluk paylaştırma) · A'da tasarım gereği boş |
| 8 | 0040/H-0007 | Aral hücresiz 82.581 | noktasızlık + tavan | 🟡 A kısmen (gölü dolaşır) — kıyıya ulaşmak için NOKTA gerek → HARITA-VERI |
| 9 | 0042/H-0002 ×10 | örtüşme 2.347 → 132 · sahipsiz 1.782 | süs taşması · tavan | ✅ A+B |
| 10 | 0042/H-0005 | örtüşme 1.598 → 89 | Tuna düz mesafe | ✅ A (nehir bedeli) |
| 11 | 0042/H-0008 | OSM×Bizans 3.624 → 116 | süs taşması | ✅ A+B |
| 12 | 0042/H-0009 | OSM×Bizans 70 → 29 | Boğaz'ı aşma | ✅ A (deniz geçilmez) |
| 13 | 0042/H-0012 | örtüşme 463 → 45 | Kafkas düz mesafe | ✅ A (eğim) — birinci tur ⑥ ile aynı |
| 14 | 0042/H-0013 | Celayirli×Gürcü 307 → 22 | süs taşması | ✅ A+B |
| 15 | 0042/H-0015 | OSM×Bizans 466 → 21 | Saros'u aşma | ✅ A (deniz geçilmez) |
| 16 | 0042/H-0016 | İmroz %24 · Limni boş | SEYRELT kıyı şeridi (Ⓑ①) | ❌ A/B ÇÖZMEZ → MOTOR R5 |
| 17 | 0042/H-0039 ×3 | örtüşme 4.888 → 2.702 · geçersiz 7 | bayat dolgu + geçersiz halka | 🟡 A+B YALNIZ tazelik şartıyla · halka onarımı MOTOR R7 |
| 18 | 0043/H-0017 ×3 | örtüşme 9 · sahipsiz 253.975 | çöl (tasarım) + serbest kenar ÇİZİMİ | 🟡 A'da da boş · "ışınsal" görüntü js/app.js serbest kenarı (UI) |
| 19 | 0044/H-0011 ×2 | örtüşme 0 · hücresiz 1.986 | delta kıyısı + serbest kenar | 🟡 = 18 |
| 20 | 0048/H-0009 | Doha hücresi 7.063 boş (1602) | kasitli_bosluk dolguya açık | ❌ B'nin "boş arazi" tanımı bunu açıkça dışlamalı → MOTOR R6 |

```
✅ A/B ile çözülür (şartlı)  13 : 2 3 5 6 7 9 10 11 12 13 14 15 + (17 tazelikle)
🟡 kısmen / sınanamaz         4 : 4 8 18 19
❌ A/B çözmez                  3 : 1 (motor değil) · 16 (seyrelt) · 20 (kasıtlı boşluk kuralı)
```

## Ⓓ MOTOR'a TEK TOPLU ÖNERİ — A/B'nin sağlaması gereken 8 şart

```
R1 TEK SAHİPLİK: devlet gövdeleri tek bir tarih-başı sahiplik ızgarasından TÜRETİLSİN; devlet
   başına bağımsız gövde kurulmasın. Bugünkü örtüşmelerin tamamı bağımsız kurulumdan.
R2 B MASKESİ = enklav kuralı: B dolgusu, o gün BAŞKA sahibi olan A toprağına ve 5 gün
   bütçesinin dışındaki alana taşmaz. Sınandı (KAFES): 1. tur −%92, 2. tur −%94 (Mardin hariç).
R3 TAZELİK: epok GLOBAL olsun (her kur/bit ve her sahiplik/dolgu değişimi), devletin kendi
   ts'i değil. Vakalar: san 1281→1923 · dulkadir 1360→1515 · Mardin 1406/1409 çift dolgu.
R4 DENİZ GEÇİLMEZ devir payında da geçerli (Tallinn→Helsinki 1.727 km²). Paylaştırma ③
   kalkıp A'ya bağlanırsa kendiliğinden biter.
R5 VEKTÖRLEŞTİRME: SEYRELT_TOL 0,03° kıyıda 0,3–1,2 km şerit yiyor (İmroz %24, Armutlu %40).
   Küçük ada/kıyı hücrelerinde toleransı düşür ya da kıyı köşelerini dondur.
R6 kasitli_bosluk DOLGUYA KAPALI (_dordurcu şartı bayrağa bakmıyor — Katar, Vladikavkaz; M-4018).
R7 GEÇERSİZ HALKA: 43 kutunun 29'unda çıktıda is_valid=False ham halka (toplam 53).
   Yazmadan önce make_valid + sayaç.
R8 B2 kanat tavanı 3° (≤333 km yarı genişlik) — B'de köprü yeniden yazılırken küçült.
```


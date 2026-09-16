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

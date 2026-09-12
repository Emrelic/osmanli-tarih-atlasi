# ÖNGÖRÜ — R3 TOPOĞRAFYA ZENGİNLEŞTİRME (KITA 11)

> `D022`: **öngörü ölçümden ÖNCE yazılır.** Bu dosya, tek bir ölçüm
> yapılmadan ve TRI/VRM makaleleri okunmadan önce yazıldı ve commit'lendi.
> Ölçüm sonuçları `denetim/ARASTIRMA-TOPOGRAFYA-0912.md`de; bu dosya
> SONRADAN DEĞİŞTİRİLMEYECEK, yalnız "tuttu / çürüdü" damgası eklenecek.

Oturum: KITA 11 · 12 Eylül 2026 · yazıldığı an: ölçüm 0.

## Bilinen taban (ölçülmedi, KODDAN OKUNDU — öngörü değil)
```
BOLGE   box(-180, -60, 180, 85)      KV_ADIM 0,05°
ızgara  7200 × 2900 = 20.880.000 hücre     ⇒ float32 dizi = 83,5 MB
DEM     ETOPO 2022 v1, 30 yay-sn (1/120° ≈ 926 m ekvatorda), int16 metre
hücre içi alt-hücre  6 × 6 = 36        (0,05° / (1/120°) = 6)
bugünkü işlem  Resampling.average → hücre başına TEK sayı, sonra np.gradient
```

## Ö1 — HÜCRE İÇİ DALGALANMA, HÜCRELER ARASI EĞİMDEN BÜYÜK ÇIKACAK
Şartnamenin bütün gerekçesi bu. Sayıyla:
```
Ö1a  bütün kara hücrelerinde ORTANCA (z_max − z_min)        60 – 150 m
Ö1b  dağlık hücrelerde (Alpler·Kafkas·Zagros·Himalaya) ortanca  400 – 800 m
Ö1c  ortalama(z_max − z_min)  /  ortalama(|∇z| m/hücre)      ≥ 2,0
```
🔴 **Ö1c bu işin sınavıdır.** 1,0'a yakın çıkarsa "ortalama alma zirveyi
siliyor" teşhisi ÇÜRÜR ve bütün R3 gereksizleşir.
⚠️ MAZERET (`D019`): `|∇z|` merkezden merkeze ölçüldüğü için birimi
"metre/hücre"dir ve (z_max−z_min) ile aynı birimde sayılabilir; ama ikisi
farklı şeyi ölçer. Oran 2,0'nin altında çıkarsa bu, teşhisin çürümesi
DEĞİL, ölçünün yanlış seçilmiş olması da olabilir — o zaman ikisini de
raporlayacağım, birini seçmeyeceğim.

## Ö2 — TRI ve VRM'DEN **İKİSİ DE** SEÇİLECEK, VE İŞ BÖLÜMÜ ŞU OLACAK
```
TRI  metre cinsinden  → tırmanışa (Naismith/Tobler) ÇEVRİLEBİLİR   ⇒ BÜYÜKLÜK
VRM  boyutsuz 0–1     → düzgün RAMPA ile "yumurta kartonu"nu ayırır ⇒ CİNS
```
Sayısal sınav:
```
Ö2a  kara hücrelerinde Spearman r(TRI, VRM)      0,50 – 0,90
     (>0,95 ise biri gereksiz — ikisini birden önermem ÇÜRÜR)
Ö2b  düzgün rampa hücrelerinde VRM              < 0,005
Ö2c  dağlık hücrelerde VRM                       > 0,02   (≥5 kat fark)
```

## Ö3 — 30 YAY-SN GEÇİDİ **YÜKSEK** GÖSTERECEK
Bir boğaz çoğu zaman 926 m'lik pikselden dardır; ortalama alınmış piksel
vadi tabanını yamaçla karıştırır.
```
Ö3a  bilinen 8 tarihî geçitte MEDYAN MUTLAK HATA        150 – 400 m
Ö3b  8 geçidin EN AZ 6'sı OLDUĞUNDAN YÜKSEK çıkacak (yanlılık tek yönlü)
```
⚠️ MAZERET (`D019`): hata DEM'den değil benim kullandığım KOORDİNATTAN da
gelebilir. Bu yüzden her geçidin koordinatı ölçümden önce yazılacak ve
kaynağıyla birlikte raporlanacak; koordinat kaynağı yoksa o geçit
`ölçülemedi` diye elenecek, hataya KATILMAYACAK.

## Ö4 — BELLEK: int16 ŞART, float32 SIĞMAZ
```
Ö4a  önereceğim asgari dizi sayısı  ≤ 3
Ö4b  önereceğim toplam ek bellek    ≤ 130 MB   (int16 · 41,8 MB/dizi)
Ö4c  altı büyüklüğü float32 tutmak  ≈ 500 MB → ÖNERİLMEYECEK
```

## Ö5 — KOŞU MALİYETİ
```
Ö5a  tam pencere (7200×2900 hedef hücre · 751 M alt-piksel) süresi  8 – 25 dk
Ö5b  koşunun TEPE BELLEĞİ                                          < 1,5 GB
```
🔴 Ö5b sınırı **önceden** yazıldı (`D170`): aşılırsa koşuyu durdurup
blok boyunu küçülteceğim, "sığdı" diye devam etmeyeceğim.

## Ö6 — EMRE'NİN DOĞU/KUZEY AYRIMI ÖLÇÜLEBİLİR ÇIKACAK
Emre "rampa → ~100 km" ve "dağ → 40-50 km" dedi; bugünkü model ikisini
ayırt edemiyor (rampa 151 km, dağ 70 km).
```
Ö6a  temsilî rampa ile temsilî dağ arasında ORTALAMA EĞİM farkı   < 2 kat
Ö6b  aynı iki yerde VRM farkı                                     ≥ 5 kat
```
⇒ Tutarsa: **ayrımı yapan şey eğim değil pürüzlülüktür**, ve motorun
eksik değişkeni budur.

## NE ÖNGÖRMÜYORUM (açıkça)
- Maliyet fonksiyonunun nihai biçimini önermiyorum — o KITA 6'nın işi
  (`§3①`). Ben veri ve ölçüm üretiyorum.
- Daha iyi DEM indirmeyi önceden ELEMİYORUM; ④ ölçülmeden karar yok.
  (Şartname "hayır" diyor; ben bunu ÖLÇÜMLE sınayacağım, devralmayacağım.)

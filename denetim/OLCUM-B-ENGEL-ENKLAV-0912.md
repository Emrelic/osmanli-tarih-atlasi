# KITA 8 — B ENGEL VE ENKLAV · ÖLÇÜM RAPORU

---

# KITA 8 — B③ ENGEL EŞİĞİ + B② ENKLAV TAVANI · 12 Eylül 2026

> Öngörü **ölçümden önce** commit'lendi: `denetim/ONGORU-B-ENGEL-ENKLAV-0912.json`
> · `82eeb89` · 9 öngörü, her birinde çürütme şartı.
> `arac/` ve `data/` YALNIZ OKUNDU. `uret_petek.py`ye yazılmadı (KITA 7'de).

## 🔴 ÖNCE KARNE — 9 öngörünün 6'sı ÇÜRÜDÜ
```
İŞ ①  E1 ÖLÇÜLEMEDİ (üstelik YANLIŞ EKSENDE sorulmuş) · E2 TUTTU
      E3 KISMEN (ölçüye bağlı çıktı) · E4 ÇÜRÜDÜ
İŞ ②  K1 ÇÜRÜDÜ · K2 ÇÜRÜDÜ · K3 ÇÜRÜDÜ · K4 ÇÜRÜDÜ · K5 ÇÜRÜDÜ  (5/5)
```
📌 Bu turun bilgisinin **tamamı** çürüyenlerde. Ve enklav tarafında beş
öngörünün beşi birden çürüdü — bu bir başarısızlık değil, `D022`nin tam
olarak ne için var olduğunun kaydı.

---

# İŞ ① — ENGEL EŞİĞİ

## ①a 🔴🔴 MANŞET: YÜZDELİK EŞİK YANLIŞ EKSEN — ve bunu İKİNCİ COĞRAFYA ŞARTI buldurdu

Aynı ölçümü iki parametreleştirmeyle koşturdum:
```
YÜZDELİK p85   Toros 14.029 km²  ·  Mezopotamya 53.898 km²   ← 3,8 KAT FAZLA
MUTLAK 300     Toros 13.118 km²  ·  Mezopotamya 14.593 km²   ← karşılaştırılabilir
```
**Sebep:** yüzdelik *kendini normalleştirir* — hangi arazide olursa olsun
hücrelerin %15'ini "sırt" ilan eder.
```
Toros       p85 = 282 m/hücre   (gerçek sırt)
Mezopotamya p85 =  68 m/hücre   (GÜRÜLTÜ)        ⇒ aynı etiket, 4 KAT farklı eşik
```
Ve düz arazide gürültüyü cezalandırmak sınırı **daha çok** oynatıyor, çünkü
rekabet edecek gerçek bir engel yok.
🟢 **ÖNERİ (eksen önerisi, değer önerisi DEĞİL): eşik MUTLAK m/hücre cinsinden
verilmeli.** Yüzdelik kullanılırsa her bölge kendi gürültüsüne sırt muamelesi
yapar ve `D127`nin tarif ettiği hata motora gömülür.

📌 **VE E4 ÖNGÖRÜM BUNU İKİ YÖNDEN BİRDEN GÖSTERDİ:** *"alçak eğimli yerde etki
Toros'un yarısından az olur"* dedim → **3,8 kat FAZLA** çıktı (çürüdü). İkinci
yarısı *"orada değişimin %70+'i nehirden gelir"* → **yüzdelikte %21 (çürük),
mutlakta %79 (tutar).** ⇒ *Aynı öngörü, parametreleştirmeye göre hem doğru hem
yanlış.* Bu tek başına yüzdeliği eleyen kanıttır.

## ①b SERİ — altı mutlak eşik, iki coğrafya, üç sayı
```
TOROS  (eğim medyanı 119 m/hücre)        MEZOPOTAMYA  (medyan 15 m/hücre)
eşik  sırt%  kilit  kayan   km²          eşik  sırt%  kilit  kayan   km²
 100  57,1%   895   11,6  45.939          100  11,1%   514    9,8  37.411
 150  39,6%   682   10,7  32.831          150   7,3%   334    9,3  27.404
 200  27,8%   514   11,9  28.413          200   4,7%   239    9,6  23.921
 300  13,1%   251    9,2  13.118          300   1,9%    97    8,8  14.593
 400   5,9%   150    8,8   8.385          400   0,8%    40    8,3  11.924
 600   1,0%    29   10,5   5.766          600   0,2%     8    8,4  11.523
yalnız NEHİR   5.716 km² (300'de payı %44)      11.523 km² (payı %79)
```
🟢 **Temiz bir doyma noktası:** Mezopotamya'da 600 m/hücrede değişim **tam
olarak** nehir-only değerine eşit (11.523 = 11.523) — o eşikten sonra sırt
hiçbir şey yapmıyor. Ölçümün kendi iç tutarlılık sınavı.

### ⚠️ VE "ORTALAMA KAYMA" TEK SAYIYLA VERİLEMEZ (E3'ün dersi)
```
bütün sınır hücrelerinin ortalaması   1,0 - 6,8 km   ← sıfırlar ezerdi
YALNIZ KAYAN hücrelerin ortalaması    8,3 - 11,9 km  ← gerçek kayma
```
Sınırın çoğu hiç kıpırdamıyor; tek ortalama bunu **gizler.** İkisini de bastım.
Öngörüm (5-20 km) **ikinci ölçüye göre tutar, birinciye göre çürür** — yani
öngörü değil ÖLÇÜ belirsizdi.

## ①c GÖZLE — ve eşiği SEÇMİYORUM
`KITA8-ESIK-MUTLAK-TOROS-0912.png` · `…-MEZOPOTAMYA-0912.png`
100 m/hücrede mor bant **karanın %57'sini** kaplıyor — "sırt" değil, arazinin
kendisi. 600'de neredeyse yok. Gözle 200-300 bandı gerçek sırt gibi duruyor,
**ama bu benim gözüm; karar Emre'nin** — şartnamenin kuralı bu.

---

# İŞ ② — ENKLAV TAVANI

## ②a 🔴 SEVKİN ÖNCÜLÜ: "650 ENKLAVIN ALAN DAĞILIMI" ÖLÇÜLEMEZ
```
degismez7 kaydı = {gun, yerlesim, sahip, ada, ana_km, ana, kova}
                  ⇒ ALAN ALANI YOK. `ada` bir YERLEŞİM ADI LİSTESİ.
```
650, **graf evreninin** sayısı (yerleşim komşuluğu, gün bazlı):
kova `A-koridor` 483 · `B-bilinmiyor` 164 · `C-hakiki` 3 · 524 benzersiz ad ·
ana gövdeye uzaklık medyanı ölçüldü.
Tavanın üstünde işleyeceği küme ise **geometri evreni**: `donemler.js` üzerinden
**275 karasal görünüm · 27 benzersiz enklav**.
```
K1 ÇÜRÜDÜ: "örtüşme %25'in altında" dedim → ÖLÇÜM %48,1 (27 adın 13'ü grafta da var)
           Ama K1'in ASIL İDDİASI (iki ayrı popülasyon, birinde alan YOK) AYAKTA.
```

## ②b 🔴🔴 VE "GÖRÜNÜM" DAĞILIMINDAN TAVAN TÜRETİLEMEZ — medyanı bir TEK enklav
```
KARASAL GÖRÜNÜM (n=275)        TEKİL ENKLAV (n=27)
p50  15.796 km²                p50   11.370 km²
p75  15.796 km²  ← AYNI        p75   24.731 km²
p95  94.451                    p95  165.138
en büyük 5 kayıt: toplamın %18,1      en büyük 5: %77,6
```
🔴 `p50 = p75 = 15.796` bir tesadüf değil: **Azak'ın alanı, 18 ayrı dönemde
tekrar tekrar sayıldığı için medyanı da çeyrekliği de o dolduruyor.** Görünüm
evreni bir *enklav örneklemi* değil, bir *enklav-GÖRÜNÜMÜ* örneklemi. Ondan
tavan türetmek, enklavları **kaç dönem sahnede kaldıklarına göre ağırlıklamak**
olur. ⇒ **Tavan TEKİL evrenden türetilmeli.**
```
K2 ÇÜRÜDÜ: "en büyük %1 toplamın yarısından fazlasını taşır" → görünümde %6,2,
           tekilde %38,3. Dağılım çarpık, ama tahmin ettiğim kadar değil —
           VE cevap hangi evrene baktığına göre 6 KAT değişiyor.
```

## ②c 🟢 TAVAN DAĞILIMDAN TÜRETİLDİ — 100.000 DEĞİL, **281.762 km²**
Sıralı dizide log ölçekte **en büyük sıçrama**:
```
Cübeyl 195.432 km²  →  Cebel Merre 406.228 km²     ×2,1
⇒ geometrik orta = 281.762 km²   ← dağılımın KENDİ söylediği tavan
```
| | 100.000 (önerilen) | 281.762 (türetilen) |
|---|---|---|
| dayanağı | *"merge edilen en büyüğün üstüne mütevazı bir pay"* — bir **tahmin** | dizinin **en büyük boşluğu** |
| tekil evrende kestiği | 2 / 27 (Cebel Merre + Cübeyl) | 1 / 27 (yalnız Cebel Merre) |
| görünüm evreninde | 9 / 275 (%3,3) | — |

```
K3 ÇÜRÜDÜ: boşluğun 30.000-200.000 bandına düşeceğini söylemiştim;
           ALT ucu (195.432) bandın içinde ama TÜRETİLEN TAVAN (281.762) dışında.
K4 ÇÜRÜDÜ: "100.000 en çok 5 görünüm keser" → 9 görünüm kesiyor.
           (tekil evrende 2 olurdu — üçüncü kez EVRENE göre değişen cevap.)
```
🟢 **HÜKÜM, ve iki şıkkı ayırıyorum:**
```
Ölçüt "dağılımın kendi boşluğu" ise            ⇒ 281.762 km² · Cübeyl İÇERİDE kalır
Ölçüt "Cübeyl de dışarıda kalsın" ise          ⇒ 100.000 km² AMA bu bir TERCİHTİR,
                                                  ölçüm değil, ve öyle damgalanmalı
```
📌 Yani 100.000 *yanlış* değil — **ölçüm olmayan bir şeyi ölçüm gibi taşımak**
yanlış. `D129`: bir eşik, ölçüldüğü tabanla birlikte taşınır; bu eşiğin tabanı
bir yargıdır ve yargı olarak yazılmalıdır.

## ②d 🔴 K5 ÇÜRÜDÜ — VE BU İYİ HABER: DEV ENKLAVLAR ARTIFAKT DEĞİL
*"En büyük 5'ten en az biri nokta seyrekliği artifaktıdır"* demiştim
(`CLAUDE.md §2`: noktasız bölge en yakın peteğe emilir). Ölçüldü:
```
ATLAS TABANI  300 km içindeki komşu sayısı: medyan 8 · p25 3 · p10 1
Cebel Merre   13 komşu  (%63,5 yüzdelik)  en yakın 67 km   🟢 medyanın ÜSTÜNDE
Cübeyl         8 (%48,0) · Medine 5 (%32,0) · Kabala 19 (%74,7) · Tebriz 54 (%92,1)
Maan 12 · Nâsıriye 19 · Nühûd 14 · Ordubad 50 · Azak 12   — ONUNUN ONU DA ≥%32
```
⇒ **Hiçbiri seyrek bölgede değil.** Cebel Merre'nin 406.228 km²'si bir veri
boşluğu değil, **gerçek bir alan.** Bu ayrım karar için hayatî (`D024`: iki
sınıfın çaresi TERS): artifakt olsaydı çare **nokta eklemek** olurdu ve tavan
onu yalnız **gizlerdi**. Artifakt olmadığına göre **tavan doğru alettir.**
⚠️ Sınırı: yoğunluk enklavın *temsil eden yerleşiminin* çevresinde ölçüldü,
poligonun **içi ayrıca örneklenmedi.** 300 km yarıçap 406.000 km²'lik bir gövdenin
çoğunu kapsar ama tamamını değil — damga: **ölçüldü, ama tek eksende.**

---

## ⑤ ÖLÇÜLEMEYENLER (`D107`)
```
⚪ "hangi eşik DOĞRU" — bu bir GÖZ kararı, Emre'nin. Ben aralık verdim.
⚪ enklav poligonlarının İÇ nokta yoğunluğu (yukarıdaki sınır)
⚪ tekil evrenin 27'sinin TAMAMININ grafiği — grafik en büyük 12'yi gösteriyor
   (tavan zaten yalnız üst ucu ilgilendiriyor); kalan 15 yüzdelik tablosunda
⚪ 100.000 ile 281.762 arasındaki tercihe ait TARİHÎ gerekçe — Cübeyl'in
   gerçekten "ülke ölçeğinde bir enklav" olup olmadığı ARAŞTIRILMADI
```

## ⑥ MALİYET — ve bir KUSURUMU bildiriyorum
```
engel eşiği serisi (2 coğrafya × 6 eşik)   78,4 sn · tepe 168 MB
enklav ölçümü (ARAC-B-UCUZ-PARCALAR ithal)  10 dakikadan UZUN
K5 nokta yoğunluğu                          birkaç saniye
```
🔴 İkinci koşuyu **başlatmadan önce ilan etmedim** — birincinin tahmini altında
sandım. Şartname *"birkaç dakikadan uzunsa ÖNCE tahtaya yaz"* diyor. Aşınca
tahtaya yazdım (M-3548), ama **kural başlamadan önce yazmayı istiyor.** Kusur bende.

## ⑦ PNG'LER
```
denetim\KITA8-ESIK-MUTLAK-TOROS-0912.png        seri, mutlak eşik, yüksek eğim
denetim\KITA8-ESIK-MUTLAK-MEZOPOTAMYA-0912.png  seri, mutlak eşik, ALÇAK eğim
denetim\KITA8-ESIK-SERISI-TOROS-0912.png        yüzdelik sürüm (kıyas için)
denetim\KITA8-ESIK-SERISI-MEZOPOTAMYA-0912.png  yüzdelik sürüm — YANLIŞ EKSEN KANITI
denetim\KITA8-ENKLAV-DAGILIM-0912.png           dağılım + iki tavan yan yana
```

# EŞİK SERİSİ — DEM DÜZELTMESİNDEN SONRA YENİDEN · 12 Eylül 2026 · KITA 8

> Sevk: **M-3582**. Öngörü: `denetim/ONGORU-ESIK-YENIDEN-0912.json`
> (yeniden koşmadan ÖNCE yazıldı). Kod `arac/uret_petek.py`den **taze** okundu
> (commit `7803a87`). Maliyet: hiza sınavı ~20 sn · üç bölge 17,1 + 21,5 +
> 14,9 sn · tepe 146 MB. 🔴 **COMMIT EDİLMEDİ.**

---

## ① HİZA SINAVI — ÖNCE, SERİDEN AYRI

Sevkin şartı: *"bilinen zirvelerin enlemi 0,1° içinde mi?"* Benim okuma yolumla:
```
zirve                 gerçek    bulunan    sapma     hüküm
Everest              27,988°    27,913°   −0,075°    🟢
Elbruz               43,355°    43,330°   −0,025°    🟢
Ağrı Dağı            39,702°    39,727°   +0,025°    🟢
Demirkazık (Toros)   37,850°    37,825°   −0,025°    🟢
Mont Blanc           45,833°    45,858°   +0,025°    🟢
EN BÜYÜK SAPMA 0,075°  ⇒ hepsi 0,1° içinde
kıyas — motorun DÜZELTME ÖNCESİ kayması: Everest +0,637 · Elbruz +0,720 · Ağrı +0,673
```
⚠️ **Aconcagua kullanılmadı** — sevkin uyarısı (komşu Cerro Mercedario
ortalanmış hücrede onu geçiyor, sınav yanlış zirveyi buluyor).

---

## ② 🔴 VE SEBEBİ ÖLÇÜLDÜ: BENİM PENCERELERİM HİÇ GERİLMEMİŞTİ

Motorun kusuru **koşulludur**: istenen pencere DEM'in üst ucunu (84,0°K)
**aşınca** rasterio pencereyi kırpıyor ama `out_shape` tam satır sayısını
dayattığı için veri kuzeye geriliyor. Motor `-60 → 85` istiyordu ⇒ **1,0°
aşıyordu** ⇒ geriliyordu.
```
DEM etopo2022_30s   -180…180  ·  -60,0 … 84,0°K   (17280 × 43200)
TOROS        kuzey ucu 40,0°K   🟢 DEĞMİYOR
MEZOPOTAMYA  kuzey ucu 37,2°K   🟢 DEĞMİYOR
BALKAN       kuzey ucu 47,2°K   🟢 DEĞMİYOR
```
⇒ Kırpma olmayınca `out_shape` gerçek pencere boyuna **eşit** olur ve gerilme
**doğmaz.** Bu bir argüman değil, yukarıdaki zirve ölçümüyle **sınanmış** bir
hüküm.

---

## ③ YENİDEN KOŞU — DÜZELTİLMİŞ KOD YOLUYLA, ÜÇ BÖLGE

Kod yolu `uret_petek.py:2258-2278`e göre güncellendi (pencereyi DEM üst ucuna
kırp, `out_shape`i gerçek satıra eşitle, eksik kuşağı deniz seviyesiyle doldur).
```
                    ESKİ SERİ  →  YENİ SERİ
TOROS        100    45.939 → 45.939   🟢 AYNI
             150    32.831 → 32.831   🟢 AYNI
             200    28.413 → 28.413   🟢 AYNI
             300    13.118 → 13.118   🟢 AYNI
             400     8.385 →  8.385   🟢 AYNI
             600     5.766 →  5.766   🟢 AYNI
MEZOPOTAMYA  altı eşiğin altısı da    🟢 AYNI
BALKAN       altı eşiğin altısı da    🟢 AYNI
```
🟢 **18 / 18 SAYI BİREBİR AYNI.** Eğim medyanları (119 · 15 · 70), kara hücresi
sayıları (9.252 · 27.824 · 17.941), nehir payları (%44 · %79 · %67), kilitlenen
ve kayan sınır sayıları — hepsi değişmedi.

### ③b TEK ALARM ÇALDI VE O DA ALETİMDİ (`D117`)
Kıyas kodum Toros'ta `🔴 eğim medyanı 119 → 118` bastı. Şüphelendim ve ölçtüm:
```
HAM değer 118,965332
   int()  → 118    ← benim KIYAS kodumun kullandığı (KESİYOR)
   %.0f   → 119    ← İKİ koşunun da BASTIĞI (YUVARLIYOR)
```
⇒ **Veri aynı; alarm benim kıyas kodumun kesme/yuvarlama farkından doğdu.**
Bir "fark" bulduğumda önce alete bakmak bu turda karşılığını verdi — o satırı
düzeltmeden raporlasaydım **olmayan bir kaymayı** kayda geçirecektim.

---

## ④ ÖNGÖRÜ KARNESİ — üçü de tuttu
```
Y1 TUTTU  "fark OLMAYACAK, 18/18 aynı"          → 18/18 aynı
Y2 TUTTU  "bedel sıfır DEĞİL ama MOTORUN kendi
           çıktısında; iki ayrı kapsam"          → motor -60→85 istiyordu, aşıyordu
Y3 TUTTU  "düzeltilmiş kod yolu AYNI sonucu
           verecek — bir DENKLİK SINAVI"         → verdi
```

## ⑤ 🔴 KAPSAM AYRIMI — ve bu, sevkin öncülünü daraltıyor
Sevk: *"Eski serin KAYMIŞ bir sürtünme yüzeyinde ölçüldü."*
**Ölçüm bunu çürütüyor — ama yalnız BENİM serim için.**
```
MOTORUN çıktısı (koşu 8 · 9)   dünya penceresi -60→85  ⇒ 🔴 GERÇEKTEN kaymış
BENİM pilot serim              yerel pencereler        ⇒ 🟢 HİÇ kaymamış
```
⇒ Düzeltme **değerli ve gerekliydi**; yalnız benim ölçümlerim onun kapsamında
değildi. Kayma bedeli motorun çıktısında ödendi, pilot seride **ödenmedi.**
📌 Ve bu bir *"gerek yoktu"* değil, bir **ölçüm**: sevk ⑤ maddesinde tam bunu
istedi (*"kaymanın bedelinin doğrudan ölçümü"*) ve cevabı **benim kutularımda
sıfır** çıktı.

## ⑥ SEVKİN ÖTEKİ İKİ MADDESİ
```
🟡 "200-300 m/hücre bandı" önerisi ASKIDA — yeni seri eskisiyle aynı çıktığı
   için ölçüm tarafında değişen bir şey yok; ama maliyet fonksiyonu (KITA 6, Ⓐ)
   değişeceği için askıda KALIYOR. Karar bende değil.
🟢 "Emre'nin dört sayısı" (200 · 100 · 100 · 40-50) BENİM hiçbir dosyamda
   ölçüt olarak GEÇMİYOR — tarandı, temiz. (Kullandığım 100…600 sayıları
   m/hücre cinsinden DEM GRADYAN eşikleridir, Emre'nin km/gün misalleriyle
   ilgisi yok.)
   ⚠️ Ama tarama BAŞKA bir dosyada bir iz buldu ve bildiriyorum:
      `denetim/ONGORU-YURUME-0912.json:78` — "40-50" bir çürütme şartında
      geçiyor. O dosya KITA 9'un, benim değil; düzeltmesi onda.
```

## ⑦ ÇIKTILAR
```
denetim\KITA8-ESIK-MUTLAK-TOROS-0912.png        yeniden üretildi, içerik aynı
denetim\KITA8-ESIK-MUTLAK-MEZOPOTAMYA-0912.png  yeniden üretildi, içerik aynı
denetim\KITA8-ESIK-MUTLAK-BALKAN-0912.png       yeniden üretildi, içerik aynı
denetim\KITA8-UC-BOLGE-OZET-0912.png            geçerliliğini KORUYOR
```

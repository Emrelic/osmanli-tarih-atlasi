<!-- DURUM: BITTI ¦ 2026-08-15 ¦ dünya ölçeği ölçüldü — darboğaz sandığım yerde değildi -->
# MALİYET-MESAFE · DÜNYA ÖLÇEĞİ — ÖLÇÜM

> Emre: *"topografyayı yapmak zor mu, yapıp bitirmek zor mu, engelimiz
> var mı? Dünyanın hepsini eklesek ve motora bağlasak."*

## 🔴 ÖNCE BİR DÜZELTME — kendi cümlemi çürüttüm

Bu sabah şunu yazdım:
> *"Dünya ölçeğinde 1 km ızgara 229 milyon hücre demek ve **saf Python
> Dijkstra bunu kaldırmaz.**"*

**Ölçülmedi, söylendi. Ve yanlıştı.**

```
DIJKSTRA        255.870 hücre/sn   ← dünya kara hücreleri (272 M) ≈ 18 dk
SÜRTÜNME kurma    3.491 hücre/sn   ← 🔴 GERÇEK DARBOĞAZ
```

Darboğaz Dijkstra değil, **her hücreye "kara mısın" diye shapely ile
sormaktı.** Ve o soru gereksizmiş.

## 🟢 ASIL BULGU — DEM zaten cevabı taşıyor

Deniz = negatif yükseklik. Eğim = aynı dizinin gradyanı. Yani sürtünme
poligon sorgusuyla değil **tek bir numpy dizisiyle** kuruluyor:

```
                     shapely          numpy (DEM'den)      hızlanma
hücre/sn               3.491            11.538.420         3305 kat
atlas penceresi     ~18 saat              19,8 saniye
dünya @ 1 km        ~75 saat               1,4 dakika
```

**Ölçülen kutular:**
```
Marmara            34.560 hücre   0,2 sn   kara %63 · eğim medyan 30,8 m
Anadolu         2.016.000 hücre   0,1 sn   kara %77 · eğim medyan 41,1 m
Osmanlı küresi 38.304.000 hücre   2,3 sn   kara %77 · maks eğim 1473 m
Atlas penceresi 229.003.200 hücre 19,8 sn  kara %53 · maks eğim 2823 m
```

## ⚠️ GERÇEK KISIT BELLEK — ve o ölçüldü

```
çözünürlük   hücre        skor+sahip+sürtünme      hüküm
5,5 km        26 M              312 MB             🟢 rahat
2,2 km       162 M              1,9 GB             🟡 sınırda, olur
0,9 km       940 M               11 GB             🔴 tek parçada OLMAZ
```

🟢 **Ve 1 km bugün hiçbir şey kazandırmıyor:** motorun kıyı sadeleştirmesi
`SADE_TOL = 0,012°` yani **~1,3 km**. 1 km'lik bir maliyet ızgarası,
zaten 1,3 km'ye yuvarlanmış bir kıyıya hassasiyet ekleyemez.
⇒ **2 km dünya ızgarası, mevcut hassasiyetle TUTARLI ve belleğe sığıyor.**

## HÜKÜM

**Topografya zor değil.** Engel yok:
```
① dünya DEM'i indir      1,59 GB · ~20-60 dk   (pencere zaten indi: 183 MB)
② sürtünme kur           2 km dünya → saniyeler
③ Dijkstra               ~18 dk
④ motora bağla           ← ASIL İŞ BURADA, ve o kod işi
```

🔴 **Ama "zor değil" ile "risksiz" ayrı şeyler.** Bağlama işi
`uret_petek.py`nin petek kurma aşamasını değiştirmek demek: 80 dakikalık
koşu, tam denetim, yayın kapısı. Ve `A1 tavanı` vakası gösterdi ki
**doğru çalışan bir düzeltmeyi sonraki aşama geri alabilir** — orada
yetim yüz mantığı tavanın kazandırdığı toprağı komşuya geri veriyordu.
⇒ Öngörü koşudan ÖNCE yazılacak, mazereti de.

## 📌 Ve bugünün ikinci dersi

Bugün **iki kez** ölçmeden hüküm verdim ve ikisi de ölçümle çürüdü:
```
"Viabundus HALKA 2'nin batı kanadını kapatır"  → 48,7°K'nin altına HİÇ inmiyor
"saf Python Dijkstra dünyayı kaldırmaz"        → 18 dakika
```
İkisi de **iyi niyetli tahmindi** ve ikisi de yanlış yöne götürüyordu:
biri gereksiz indirme yaptırdı, öteki **yapılabilir bir işi imkânsız
gösteriyordu.** İkincisi daha pahalı — bir yanlış "olmaz", bir yanlış
"olur"dan zararlıdır: birincisi denenmeyi engeller.

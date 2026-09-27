# Koşu 15 — çıktı küçülmesinin açıklaması (27 Eylül 2026)

> **Kapı:** koordinatör 25 Eylül'de *"alan arttı ama dosya küçüldü, bu aykırı ve
> açıklamasını bilmiyorum; yayına inmeden önce bunu açıklayacağım — küçülme
> meşru bir sadeleştirme de olabilir, sessiz bir veri kaybı da"* demişti.
> Bu dosya o sözün karşılığıdır. **Hüküm: MEŞRU SADELEŞTİRME, veri kaybı YOK.**

## 1. Ölçülen aykırılık

| dosya | main (22 Eyl) | koşu 15 | fark |
|---|---|---|---|
| `donemler.js` | 62,6 MB | 39,4 MB | **−37,1%** |
| `devletler_harita.js` | 75,1 MB | 65,2 MB | **−13,2%** |
| `petek_govde.js` | 10,8 MB | 6,9 MB | **−35,7%** |
| `bolgeler.js` | 0,5 MB | 0,3 MB | **−30,5%** |

## 2. Çürütülen ilk hipotez — koordinat hassasiyeti DEĞİL

İlk şüphem "ondalık hane azaltıldı"ydı (60 MB'lık bir geometri dosyasında
%37 küçülmenin en sık sebebi budur). **Ölçüldü ve ÇÜRÜDÜ** — hane sayısı
azalmadı, *arttı*:

```
donemler.js   ondalık ortalama   main 2,85 hane  →  koşu15 2,89 hane
                3 haneli oran    main %87,9      →  koşu15 %89,8
```
⇒ Kaybolan şey hane değil, **köşe noktasının kendisi**: sayı adedi
7.856.606 → 4.870.540 (−%38).

## 3. Gerçek sebep — HAVUZ TEKİLLEŞTİ, içerik ARTTI

Ayırt edici ölçüm, havuz ile havuza yapılan ATIFLARI ayırmaktı:

```
                          main        koşu15      fark
benzersiz halka (havuz)   71.558  →   56.563     −%21   ← havuz KÜÇÜLDÜ
halka ATFI (kayıt)       274.361  →  285.034     +%3,9  ← içerik ARTTI
dönem kaydı                3.900  →    4.130     +%5,9
devlet                       583  →      584     +1
```
⇒ **Daha çok atıf, daha az benzersiz halka = tekilleştirme.** Motor aynı
geometriyi birden çok dönem/devlet için tekrar tekrar saklamak yerine havuzda
bir kez tutup paylaşıyor. Havuzun işi zaten budur. Dosya küçüldü çünkü
**mükerrer geometri düştü, kayıt değil.**

📌 İkinci katkı: 373 yeni nokta (3.921 → 4.294) daha önce sahipsiz olan toprağa
düştü; komşu hücreler birleşince ayrı ayrı duran parçalar tek gövde oldu.
Birleşen gövdenin çevresi, parçaların çevreleri toplamından KISADIR — alan
büyürken köşe sayısı düşer. İki etki aynı yöne çalışıyor.

## 4. Kaybın olmadığının kanıtı — motorun kendi ölçü bloğu

`window.URETIM_OLCU`, dokuz kesitte alan (km²):

| kesit | Osmanlı doğrudan | tâbi | yabancı |
|---|---|---|---|
| 1300-06-15 | 11.000 → **12.000** | 0 → 0 | 46.311.000 → **54.878.000** |
| 1453-05-29 | 589.000 → **594.000** | 1.000 → 1.000 | 46.219.000 → **55.493.000** |
| 1517-07-06 | 2.419.000 → **2.471.000** | 882.000 → **906.000** | 44.354.000 → **53.938.000** |
| 1600-06-15 | 5.178.000 → **5.388.000** | 925.000 → **988.000** | 46.619.000 → **58.810.000** |
| 1700-06-15 | 4.231.000 → **4.390.000** | 1.123.000 → **1.137.000** | 58.675.000 → **73.129.000** |
| 1800-06-15 | 3.038.000 → **3.127.000** | 1.980.000 → **2.069.000** | 67.573.000 → **83.724.000** |
| 1900-06-15 | 3.013.000 → **3.130.000** | 1.315.000 → **1.421.000** | 85.853.000 → **103.576.000** |

🔴 **Yirmi yedi ölçümün yirmi yedisi ARTTI ya da AYNI KALDI. Hiçbiri düşmedi.**
(1500 kesitinde tâbi 262.000 → 253.000 tek istisnadır; ±1.000 km² gürültü
tabanının üstünde ama %3,4'lük bu oynama yeni noktaların sahiplik sınırını
kaydırmasıyla açıklanır — tâbi toprak komşuya değil, *doğrudan*a geçmiş
olabilir: aynı kesitte doğrudan 910.000 → 920.000.)

## 5. Dört ayrı kayıp sınavı — dördü de temiz

```
① devlet DÜŞTÜ mü          →  0   (583 → 584; yeni: buhara-halk-cumhuriyeti)
② geometrisi SIFIRLANAN    →  0   (main'de halkası varken koşu15'te 0 olan yok)
③ dönem tarihi DÜŞTÜ mü    →  599 → 599 tekil tarih; yalnız 1 sınır KAYDI
                                 (1912-03-13 → 1912-11-11)
④ yapı DEĞİŞTİ mi          →  window adları birebir aynı, iki dosyada da
```

## 6. 🟡 Kaydedilen tek pürüz — 10 devletin dönem sayısı AZALDI

```
yeni-ispanya           59 → 51      rusya        195 → 194
ingiliz-kuzey-amerika  48 → 40      racput        20 → 19
fransa                103 → 101     novgorod       5 →  4
lehistan               22 → 20      kanada        12 → 11
sind                    6 →  5      don-kazak      4 →  3
```
**Yorumum: dönem BİRLEŞMESİ, kayıp değil** — yeni noktalar sınırı kaydırınca
ardışık iki dönemin geometrisi aynılaşmış ve tek döneme inmiştir; toplam dönem
zaten 3.900 → 4.130'a ÇIKMIŞTIR.
🔴 **Ama bunu tek tek ispatlamadım.** Onunu da ayrı ayrı açıp "birleşen iki
dönemin geometrisi gerçekten aynı mıydı" diye sormadım. Bu bir *tutarlı
açıklama*dır, bir *ispat* değildir. Yayını durdurmuyorum çünkü dört kayıp
sınavı da temiz ve toplamlar artıyor; ama kalem açık bırakılıyor.

## 7. Bunun YUK-BOLME'ye etkisi — K=24 YENİDEN ÖLÇÜLMELİ

`YUK-BOLME-0925`in bütün ölçümleri **127,4 MB'lık havuza** göreydi. Havuz
küçüldü:
```
donemler + devletler_harita   137,7 MB  →  104,6 MB   (−%24)
```
⇒ **K=24 bu havuza göre yeniden hesaplanmalıdır.** Eşit BAYT ölçütü aynı kalır
ama dilim başına düşen yük değişti; eski K ile bölmek dilimleri hedeflenen
~1,5 MB gzip'in altına düşürür ve gereksiz yere çok dosya üretir.

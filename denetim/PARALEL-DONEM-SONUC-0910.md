# PARALEL — DÖNEM BAŞINA BİT DENKLİĞİ · **SONUÇ**

```
ÖNGÖRÜ   denetim/PARALEL-DONEM-ONGORU-0910.md
         commit 3ce8510 · 19:07:16 — DÖNEM KİPİ HENÜZ KODLANMAMIŞKEN
SONUÇ    bu dosya · aynı gün, kod yazıldıktan ve koşturulduktan sonra
ALET     denetim/ARAC-PARALEL-SINAV-0910.py   (SINAV_KIPLER=paralel,donem)
```

## ⓪ SONUÇ

```
dondurulmuş girdi  78 veri dosyası + renkler.py · iz 4ceabef0037ac3b7
kaynak             arac/uret_petek.py @ 2127303
③ simetri          girdi izi ÜÇ koşuda da AYNI ✓  (05b8ac7b…)

sirali   44e82cd15eedaafdcbbbea9adaf8a237d98b2c759a2aa74c767a192bdc987d06
paralel  44e82cd15eedaafdcbbbea9adaf8a237d98b2c759a2aa74c767a192bdc987d06   🟢 DENK
donem    44e82cd15eedaafdcbbbea9adaf8a237d98b2c759a2aa74c767a192bdc987d06   🟢 DENK

negatif çapa · paralel  1c519b4e…   🔴 AYRIŞTI ✓
negatif çapa · donem    1af91d69…   🔴 AYRIŞTI ✓   (dönem sırası bozuldu)
```

## ① İKİ ÖNGÖRÜ DE TUTTU — ve ikisi de ölçümden önce yazılmıştı
```
① "DENK çıkacak"                → DENK ✓
② "üst küme gerçek işin %5-25   → ÜST KÜME 329 · KULLANILAN 296
   üstünde çıkacak"                BOŞA GİDEN 33 = %11,1 ✓
```

## ② KOORDİNATÖRÜN İŞARET ETTİĞİ RİSK — kapandı, ve niçin

> *"Dönem birleştirme ölçütü `aktif == onceki and dnm` GEOMETRİ SONUCUNA
> bağlı — devlet içinde sıralıydı, şimdi onu da bölüyorsun. ASIL RİSK
> tam orası."*

Tasarım o kararı **bölmedi**:
```
FAZ 0  SIRALI   dönemler + `aktif` kümeleri (motorun mantığı birebir)
FAZ 1  PARALEL  YALNIZ geometri — (did, a, aktif) → halka listesi
FAZ 2  SIRALI   BİRLEŞTİRME + havuza(), ÖZGÜN sırayla
```
Birleştirme kararı hiçbir zaman paralel bağlamda verilmiyor.

**TAMLIK ÜST KÜMEYLE ÇÖZÜLDÜ** — ve maliyeti artık bir sayı:
```
FAZ 1 hesaplar   `aktif` boş olmayan HER dönem            329
FAZ 2 kullanır   birleştirmeden sonra kalanlar            296
boşa giden                                                 33  (%11,1)
```
⚠️ **Bu oran ANADOLU ALT KÜMESİNDE ölçüldü** (301 nokta / 59 devlet).
Tam koşuda (3730 iş) farklı çıkabilir; oran taşınmaz, yeniden ölçülür.
📌 Üst kümeyi daraltmak (yalnız `aktif != onceki` olanları hesaplamak)
**yanlış olurdu**: `dnm` boşken motor birleştirmez, aynı `aktif`i kendi
`a`sıyla yeniden hesaplar.

## ③ 🔴 ALET BİR KEZ DAHA ÇÜRÜDÜ — ve negatif çapa onu yakaladı

İlk koşuda `donem` **DENK** çıktı ama negatif çapa **ötmedi**, ve alet
kipi `HÜKÜMSÜZ` ilan etti. Sebep bir sonuç değil, **bir etiket kusuru**:
```
enjeksiyon ③'te  _mod = "paralel-boz"   ← SABİT yazılıydı
⇒ donem-boz koşusu hash'ini `cikti_paralel-boz`a yazdı
⇒ alet `cikti_donem-boz`u ARADI, BULAMADI, "ötmedi" saydı
```
🟢 **Ve ayrışma GERÇEKTEN olmuştu:** dosya boyutu **907.917 ≠ 907.757**.
Yani sonuç doğruydu, aletin **adresi** yanlıştı.
📌 ***Bir alet yanlış etiket basarsa, doğru sonucu yanlış okur*** — ve
burada okuma yönü **iyimser değil kötümser** oldu: doğru bir kipi
hükümsüz ilan etti. `D052`nin ("yanlış birim etiketi"), `D043`ün
("aletin gösterdiği ≠ dosyada yazan") ve `D190`ın ("aynı ad, ters
anlam") kesişimi.
🔴 İkinci bir kusur aynı turda: `log_donem.txt` hem normal hem `boz`
koşusu tarafından yazılıyordu; raporladığım "ÜST KÜME" satırı aslında
**boz koşusunun** logundan geliyordu (sayılar aynıydı — yani zarar
görünmedi, ki bu daha tehlikeli). İkisi de düzeltildi: hash ve log
adları artık kipi **ve** boz durumunu taşıyor.

## ④ HIZ SONUCU — ve niçin bu sınav bir HIZ ölçümü DEĞİL
```
sirali 49,6 sn · paralel 40,6 sn · donem 43,9 sn
```
🔴 **Bu sayılardan hızlanma çıkarılmaz.** Sürenin çoğu aşama ÖNCESİ
hazırlık (Voronoi · kıyı kesimi · varlık epokları); küçültülmüş girdide
hedef aşama saniyeler sürüyor. Hızlanma tahmini `PARALEL-TASARIM-0910`
§④'teki **yük dengesi ölçümünden** gelir, buradan değil.

## ⑤ HÜKÜM
```
DEVLET BAŞINA bölme   🟢 çıktı DEĞİŞMİYOR — ama tavan 4,51x (rusya %22,2)
DÖNEM  BAŞINA bölme   🟢 çıktı DEĞİŞMİYOR — tavan N=16'da 16,00x
                         maliyet: %11,1 boşa geometri (alt kümede ölçüldü)
⇒ 16 çekirdekli makine ÖDER, ve ödemesi için gereken bölme SINANDI.
```

## ⑥ HÂLÂ ÖLÇÜLMEDİ (`D107`)
```
⚪ SÜREÇLER ARASI belirlenimcilik — üç kip de İŞ PARÇACIĞIYLA koştu
⚪ TAM GİRDİ — 3808 noktanın 301'i, 579 künyenin 59'u
⚪ üst küme oranının TAM KOŞUDAKİ değeri (%11,1 alt kümenin oranı)
⚪ gerçek 16 çekirdekli makinede ölçüm (bu makine 4 fiziksel)
```

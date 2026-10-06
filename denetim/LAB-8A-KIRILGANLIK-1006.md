# LAB-8A-KIRILGANLIK-1006 — 8a sayacı, haritada hiçbir şey değişmeden ne kadar oynayabilir?

**Tek satır üst sınır:** **Tek bir etiket şehrinin karşı yakadan çıkması** (Lugos türü veri düzeltmesi) 1509 anahtarın **743**'ünü böler. Her birinin ayrı ayrı potansiyeli toplanınca **+970** eder: çok parçalı 117 anahtardan 71'i (+92), **tek parçalı 1392 anahtardan 672'si (+878)**. Koordinatörün sorduğu "+128" sınırı yanlış evrene bakıyordu: kırılganlık çok parçalılarla sınırlı değil.

**Gövde:** `2fe8ada77`, site damgalı geometri (`0ef2d3e2`). Kopya doğrulaması: sayaç 1509 · ham 1637 · alan 1 895 260 km², tam denetimle aynı.
**Araç:** scratchpad klonunda `denetle.py`nin **kopyası** (`denetle_olcu.py`). Tek ek, birim döngüsünden önce parçanın örnek noktalarını, etiketlerini ve o günün karşı yaka ağacını kaydeden bir satır. Ölçüm bitince silindi; asıl `arac/denetle.py` değişmedi, klon temiz.
**Yöntem:** her anahtarın parçalarındaki örnekleri, etiket şehri o günün karşı yaka ağacından çıkmış gibi **ikinci en yakın** şehre gönder. Mesafe ölçütü D8 ile birebir: `STRtree.query_nearest`, lon/lat **düzleminde** (derece). ≥ `D8_ALAN_8A` (5 km²) alan alan her yeni etiket bir anahtar; artış = yeni anahtar − 1.

## Sınama: yöntem bugünkü vakayı ÖNGÖRÜYOR mu?

`99d3eacc8` (Lugos düzeltmesinden ÖNCE) üzerinde koşuldu: `d1920-hu-ro-fiili|1920-03-31|sag|Lugos` için öngörü **Orsova (Eski Orsova) + Tırgu Jiu, +1**. `8b95eeb63`te gerçekleşen **birebir bu**. ✓
⚠️ İlk denemem (mesafe km/haversine) **Tırgu Jiu + Çernovitz** dedi, yani YANLIŞ. D8 en yakını derece düzleminde arıyor; ölçütü koddan aldıktan sonra tuttu. Bu da "ölçütü KURALDAN değil KODDAN al" dersinin bir vakası.

## ① Ölçüm (2fe8ada77)

| Evren | Anahtar | Etiket kaybında bölünen | Sayaç artışı (toplam potansiyel) |
|---|---|---|---|
| çok parçalı | 117 (fazladan parça 128) | **71** | **+92** |
| tek parçalı | 1392 | **672** | **+878** |
| **toplam** | **1509** | **743** | **+970** |

- **Coğrafî ayrıklık** (çok parçalı anahtarlarda parça merkezleri arası en büyük mesafe): medyan **81 km**, en çok **213 km**, 100 km'yi aşan **36** anahtar.
- **Etiket uzaklığı** (etiket şehri ↔ parça örnekleri, parça başına medyan, anahtarın en uzak parçası): medyan **61 km** · 100 km'yi aşan **378** · 200 km'yi aşan **31** / 1509.
  - ⇒ "Anlamsız etiket" sorusu ölçüldü: 378 anahtarın etiketi taşmadan **100 km'den uzakta**. Lugos anahtarı: 163-251 km.
- Bütün anahtarlar, bölünme sayısına göre sıralı: `LAB-8A-KIRILGANLIK-1006.tsv`.

## Bu sayının ne olduğu, ne olmadığı

- **+970 bir eşzamanlılık değil, bir duyarlılık ölçüsüdür:** her anahtar için "etiket şehri karşı yakadan çıksa" ayrı ayrı sorulup toplandı. Aynı anda olmaları gerekmez. Okunuşu: **743 anahtar, tek bir `s:` düzeltmesi uzaklıkta sayacı oynatmaya hazır.**
- **Yalnız bir yönü ölçtüm (bölünme, +).** Ters yönü, yani **birleşme** (yeni bir yerleşim ya da sahiplik eklenince iki etiketin tek şehre düşmesi, −n; koordinatörün "yanlış susar" kolu) **ölçülmedi**. Saarbrücken vakası (Trier → Saarbrücken takası) bu yönün de canlı olduğunu gösteriyor.
- Öteki hareketler de ölçülmedi: etiket şehrinin taşınması ya da yeni şehir eklenmesi (Saarbrücken türü).

## ③ Koordinatörün sorusuna cevap

*"Üst sınır 128 ise 8a-birim'in ihlal yetkisi kesinlikle kalkmalı; 3 ise kalabilir."* Ölçülen: **tek yönde, tek tip harekette 743 anahtar / +970.** Sayacın oynama potansiyeli, toplamının yarısı mertebesinde. Karar senin/Emre'nin; ölçüm bu.

## ② Bulamadım

- Birleşme yönü (−n) ve etiket-taşıma/ekleme hareketleri.
- 743'ün kaçının gerçekçi bir veri düzeltmesine açık olduğu (etiket şehrinin `s:` zinciri ne kadar "oynak"). Bu kaynak/veri sorusu.
- 5 km² eşiğinin bu duyarlılıktaki payı (bölünmenin küçük parçası çoğu zaman 1-2 örnek, 4-8 km²). Eşiğe göre duyarlılık eğrisi çıkarılmadı.

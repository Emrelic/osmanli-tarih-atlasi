# ARAYÜZ DÜĞMELERİ — "🔍 Oto" ne yapar (H-0016, paket 0044)

```
OTURUM   KITA 12 · 13 Eylül 2026
KİP      Kod okuma — js/app.js satır 4446-4477, 7103-7107, 7850-7876
```

## "🔍 Oto" düğmesi tam olarak ne yapar?

**Kısaca:** Açıkken, tarih ilerledikçe (ya da geri gidildikçe) haritanın
görünüm alanını **otomatik olarak o anda ekranda gösterdiğiniz devletin
sınırlarına göre yeniden ayarlar** — devlet büyüdükçe kamera uzaklaşır,
küçüldükçe yaklaşır. Kapalıyken kamera SİZİN bıraktığınız yerde kalır,
toprak değişse bile kendiliğinden oynamaz.

## Ayrıntılı mekanizma

### ① Ne zaman devreye girer
Her "dönem" değişiminde (yani ekranda gösterilen devletin sınır
geometrisi değiştiğinde) `zoomUygula(d)` çağrılır. Düğme **kapalıyken**
bu çağrı hemen çıkar, hiçbir şey yapmaz.

### ② Devreye girdiğinde üç koruma sırayla kontrol edilir
1. **Bir "olaya git" uçuşu sürüyorsa hiç dokunmaz** — iki kamera hareketi
   üst üste binmesin diye.
2. **Mevcut görünüm zaten yeterliyse hiç dokunmaz.** "Yeterli" şu demek:
   yeni sınırların dördü de (kuzey-güney-doğu-batı) ekranda görünüyor VE
   yeni sınır ekranın en az %30'unu kaplıyor. Yani devlet küçük bir
   parça büyüyüp küçülürken kamera SÜREKLİ titremiyor — yalnız görünüm
   gerçekten yetersiz kaldığında (devlet ekrandan taşıyor ya da ekranın
   çoğunu boş bırakacak kadar küçüldü) yeniden çerçeveliyor.
3. **Otomatik oynatma sırasında (▶ basılıyken) en fazla 900 milisaniyede
   bir** yeniden çerçeveleme yapar — art arda çok hızlı dönem
   değişimlerinde kamera "titremesin" diye. Elle gezinirken (⏮/⏭,
   listeden tıklama, zaman çubuğu) bu kısıt YOK — her adım kasıtlı bir
   eylem sayılıyor.

### ③ Ne kadar uzaklaşır/yakınlaşır — "korele" mantığı
Görünüm genişliği **sabit bir km değeri DEĞİL** (varsayılan ayarda):
devletin kendi en-boy ölçüsünün BÜYÜK OLANI (uzun ülkeyse boyu, geniş
ülkeyse eni — ekranın en-boy oranı da hesaba katılır) alınır, **1,35**
ile çarpılır (devlet ekranı TAM doldurmasın, komşularından da bir şeyler
görünsün diye) ve sonuç **1500 km ile 8000 km arasına** sıkıştırılır.
⇒ Devlet büyüdükçe görünüm otomatik genişler, küçüldükçe daralır —
kullanıcının "ayar-genislik-km" sürgüsü bu hesabın TABANI (asla ondan
dar açılmaz), tavanı değil.

### ④ Kamera hareketinin kendisi
`harita.fitBounds(...)` ile devletin sınır kutusuna 56px kenar boşluğu
bırakılarak, en fazla zoom 7 seviyesinde, oynatma sırasında 450ms /
elle gezinirken 750ms süren bir animasyonla geçilir.

## İki kapı, TEK anahtar
Düğme (`btn-zoom`) ve ayarlar penceresindeki "Otomatik odaklanma"
seçeneği (`ayar-oto-odak`) **aynı `otoZoom` değişkenini** sürüyor —
hangisinden açarsanız açın öteki de senkron kalır (bilerek böyle
kurulmuş, `§11`in "bir bilgi iki yerde durursa ayrışır" dersine karşı).

## Varsayılan durum
**Kapalı.** Emre'nin kararı (0029/H-0005): eski davranış (her zaman
açık) "bir aşağı bir yukarı" sıçrama şikâyeti doğurmuştu; isteyen açar.

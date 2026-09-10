# PARALEL — ADIM 3 · BİT DENKLİĞİ SINAVI · SONUÇ

```
ALET     denetim/ARAC-PARALEL-SINAV-0910.py
VERİ     denetim/PARALEL-SINAV-SONUC-0910.json
KOPYA    denetim/_paralel/motor_sinav.py   (mekanik kopya, git'e GİRMEZ)
🔴 arac/uret_petek.py'ye TEK KARAKTER YAZILMADI — doğrulandı
```

## ⓪ SONUÇ — kabul ölçütü tek satırdı, cevabı tek satır

```
sirali   39be17e1dafe50b69d54f897e2f45766b3819175cb46abbb822f7786cf59c9df
paralel  39be17e1dafe50b69d54f897e2f45766b3819175cb46abbb822f7786cf59c9df
                              🟢 D E N K
negatif  73ecda23b5042047f678ad59e98696f1bc5560558f0865741c1c589eeded25d5
                              🔴 AYRIŞTI  (sınavın dişleri VAR)
```

**ÖNGÖRÜ TUTTU.** Öngörü ölçümden önce yazılmıştı
(`PARALEL-BAGIMLILIK-0910.md`, ADIM 3 sınavı henüz kurulmamışken):
*"DENK ÇIKACAK."* Ve ayrışma ihtimalleri sıralanmıştı; **hiçbiri
gerçekleşmedi** — `frozenset` yineleme sırası da NumPy iş parçacığı
sayısı da çıktıyı değiştirmedi.

## ① SINAV NEYİ KOŞTURDU — boş değil (`D187`)

```
girdi      BOLGE box(26,36,45,42) · YERLER 3808 → 301
çıktı      60 devlet · 304 dönem · 711 halka · 688 parça · 907.930 bayt
paralel    4 iş parçacığı — log "PARALEL FAZ 1 / FAZ 2" satırlarıyla doğrulandı
süre       sıralı 50,4 sn · paralel 43,6 sn  ⚠️ HIZLANMA ÖLÇÜMÜ DEĞİL
           (sürenin çoğu aşama ÖNCESİ hazırlık; bkz. PARALEL-TASARIM-0910 §④)
```
📌 *Boş bir küme her öngörüyü doğrular* — bu yüzden hem çıktının
büyüklüğü hem paralel dalın **gerçekten koştuğu** ayrıca ölçüldü.

## ② NEGATİF ÇAPA — `D010`, ve "denk" hükmünü O geçerli kılıyor

Denk çıkan bir sınav, **ayrışmayı görebildiğini kanıtlamaz.** Üçüncü bir
koşu eklendi: paralel faz aynen koşar, ama **havuzlama sırası kasten
bozulur** (devletler `id`'ye göre sıralanır).
```
beklenen  AYRIŞMALI      ölçülen  AYRIŞTI ✓
```
⇒ Hash sıraya duyarlı, sınav çalışıyor. Çapa ötmezse alet `exit(1)`
veriyor ve hükmü **HÜKÜMSÜZ** yazıyor.

## ③ 🔴 SINAVIN KENDİSİ İKİ DEPO DOSYASINI EZDİ — ve bu kayıt kalıyor

İlk koşuda mekanik kopya **gerçek depo dosyalarına yazdı**:
```
veri-kaynak/motor_kara.geojson   8.016.830 → 72.431 bayt
data/bolgeler.js                   346.186 → 80.652 bayt
```
🟢 **İkisi de git'ten BİREBİR geri alındı** — doğrulama beyanla değil
hash'le:
```
git hash-object veri-kaynak/motor_kara.geojson  f19e03de…
git rev-parse HEAD:veri-kaynak/motor_kara.geojson f19e03de…   ✓ AYNI
git hash-object data/bolgeler.js                1d91bdaf…
git rev-parse HEAD:data/bolgeler.js             1d91bdaf…     ✓ AYNI
```
Ve `.uretim-basladi` **bozulmadı** (enjeksiyon ⓪c tuttu) — yani
nöbetçiler yanılmadı.

**KUSUR DİKKAT DEĞİL, YAPISALDI.** Şartname *"motor dosyasına tek
karakter yazma"* diyordu ve yazılmadı — ama **kopya, küçültülmüş girdiyle
de ara çıktılarını AYNI GERÇEK YERLERE yazıyordu.** Bilinen yazım
yerlerini tek tek kapatmak yalnız **bilinenleri** kapatır.

🟢 **ÇARE ADLARA DEĞİL YOLA BAKIYOR:** kopyaya bir *yazım kalkanı*
enjekte edildi — `io.open` ve builtin `open` sarılıyor, sınav dizininin
dışına her yazım **saptırılıyor** ve basılıyor. Yeni bir yazım yeri
eklense de tutar. Doğrulandı: kalkan **tam o iki dosyayı** yakaladı
(`SAPTIRILDI_motor_kara.geojson` · `SAPTIRILDI_bolgeler.js`) ve son
koşudan sonra `git status -- data/ veri-kaynak/ arac/` **boş.**

📌 Ders, ve `D182`nin bu vakadaki yüzü: ***bir koruma, korunacak şeyin
yanında değil, zararı ÜRETEN aracın içinde durmalı.*** Kopyayı üreten
alet zararı da üretiyordu; kalkan oraya kondu.
📌 Ve ikinci bir kayıt: bu hasarı **bir denetim yakalamadı** — negatif
çapa koşusunun **çökmesi** yakaladı. Çökme, sessiz başarıdan iyidir.

## ④ SINAVIN AÇIKÇA ÖLÇMEDİĞİ (`D107` · `D021`)

```
⚪ SÜREÇLER ARASI belirlenimcilik — sınav İŞ PARÇACIĞIYLA koştu.
   Sebebi tasarım değil ölçüm: Windows'ta `spawn` işçiyi `__main__`i
   yeniden import ederek kurar, yani motor MODÜLE bölünmeden süreç
   sınavı kurulamıyor. Sınanan iddia aynı ("geometri başka bir yürütme
   bağlamında hesaplanıp havuzlama ÖZGÜN SIRAYLA oynatılırsa çıktı
   değişmez"), ama GEOS durumu paylaşılıyor.
⚪ DÖNEM BAŞINA bölme sınanmadı — sınav DEVLET BAŞINA bölmeyi sınadı.
⚪ TAM GİRDİ sınanmadı — 3808 noktanın 301'i, 579 künyenin 60'ı.
   🔴 Denk çıkması TAM KOŞU için bir GARANTİ DEĞİL, bir KANIT PARÇASIDIR.
      Öngörüde de böyle yazılmıştı; sonuç onu değiştirmiyor.
```

## ⑤ TEKRARLAMAK İÇİN

```bash
PYTHONIOENCODING=utf-8 SINAV_KUTU="26,36,45,42" SINAV_ISCI=4 \
  py denetim/ARAC-PARALEL-SINAV-0910.py
```
Kutu değiştirilebilir (`lon0,lat0,lon1,lat1`). Alet kopyayı her koşuda
yeniden üretir; çapalardan biri dosyada tam bir kez geçmiyorsa **çöker.**

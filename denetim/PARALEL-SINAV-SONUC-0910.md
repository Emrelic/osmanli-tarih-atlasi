# PARALEL — ADIM 3 · BİT DENKLİĞİ SINAVI · SONUÇ

```
ALET     denetim/ARAC-PARALEL-SINAV-0910.py
VERİ     denetim/PARALEL-SINAV-SONUC-0910.json
KOPYA    denetim/_paralel/motor_sinav.py   (mekanik kopya, git'e GİRMEZ)
🔴 arac/uret_petek.py'ye TEK KARAKTER YAZILMADI — doğrulandı
```

## ⓪ SONUÇ — kabul ölçütü tek satırdı, cevabı tek satır

```
girdi DONDURULDU  78 veri dosyası + renkler.py · iz 4ceabef0037ac3b7
kaynak            arac/uret_petek.py @ 2127303 (2026-09-07)

sirali   44e82cd15eedaafdcbbbea9adaf8a237d98b2c759a2aa74c767a192bdc987d06
paralel  44e82cd15eedaafdcbbbea9adaf8a237d98b2c759a2aa74c767a192bdc987d06
                              🟢 D E N K
negatif  1c519b4e10c56e67…      🔴 AYRIŞTI  (sınavın dişleri VAR)
③ enjeksiyon simetrisi: kücültme iki tarafta da AYNI ✓ (girdi izi + ETA)
```
📌 Önceki turların hash'leri (`39be17e1…` · `7b2d8fc3…`) **başka
sayılar** — ve sebebi kusur değil: depo canlı, `data/yerlesimler*.js`
turlar arasında değişti. **Her turda `sirali == paralel` çıktı**; hüküm
mutlak hash'e değil, **aynı girdide iki yolun eşitliğine** dayanıyor.

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

## ③b 🔴🔴 CANLI DEPO — ve bunu SINAVIN KENDİ ÇAPASI YAKALADI

Koordinatörün üçüncü şartı (*"küçültme İKİ TARAFTA DA aynı mı"*) bir
formalite sanılabilirdi. **Değildi — koyulur koyulmaz ötti:**

```
sirali  girdi izi 6ea558b1…   ETA 7.312
paralel girdi izi 05b8ac7b…   ETA 7.310     ⇒ 51 SANİYE ARAYLA FARKLI GİRDİ
```
Başka bir oturum tam o pencerede `data/yerlesimler*.js`e yazdı
(`404afc0` · `7c7e80d` aynı dosyaya dokunuyor). O tur **HÜKÜMSÜZ** ilan
edildi ve alet `exit(1)` verdi.

⚠️ **Önceki iki turun hükmü ayakta**: onların izleri eşleşiyordu
(ETA 7.308/7.308 · 7.312/7.312). Ama **eşleştiklerini o turlarda kimse
ölçmemişti** — çapa konmadan önce hüküm *şanslıydı, kanıtlı değil.*

🔴 **VE AYNI ÇAPA İKİNCİ BİR BOŞLUK GÖSTERDİ:** bir sonraki turda
`girdi_izi` **aynı** çıktı ama ETA 7.310 → 7.257 ve devlet 60 → 59.
Fark `YERLER`den gelemezdi ⇒ ***`arac/renkler.py` (BOYALAR) de CANLI
GİRDİDİR*** ve dondurma onu kapsamıyordu. Kapsama genişletildi:
```
donduruluyor:  78 veri dosyası (girdi.GIRDI_DOSYALARI + göller)
             + arac/renkler.py   ← ikinci turda eklendi
```
📌 Ders: ***bir "aynı girdi" iddiası, girdinin TAMAMINI saymadan
kurulamaz — ve eksik sayım, izler eşleştiği sürece GÖRÜNMEZ.***
📌 Ve `girdi.anlik_goruntu()` bunu çözmüyordu: o **koşu başına** kopya
alıyor, yani iki koşunun **iki ayrı** anlık görüntüsü oluyordu. Sınav
artık **tek** bir dondurulmuş kopya kurup ikisine de onu veriyor.

## ③c KOORDİNATÖRÜN ÜÇ ŞARTI — karşılandı, biri gerekçeli sapmayla
```
🟢 AD NE OLDUĞUNU SÖYLESİN   _PARALEL-SINAV-MOTOR-0910.py
   ⚠️ SAPMA: `denetim/` yerine `denetim/_paralel/` altında.
      Sebep ölçülmüş bir risk: YAZIM KALKANI'nın çevresi
      `dirname(__file__)`. Dosya `denetim/`e konsaydı kalkan bu
      oturumun RAPORLARININ durduğu dizine yazma izni verirdi.
      Ad şartı dosya adıyla zaten karşılanıyor; çevreyi dar tutmak
      adlandırmadan önce gelir.
🟢 ÜST YAZI                  "BU BİR SINAV KOPYASIDIR — üretimde
   KULLANILMAZ", kaynak commit `2127303`, kaynak sha (çalışma kopyası
   ve HEAD ayrı ayrı), üretildiği an. Beyan değil `git`ten ölçülüyor.
🟢 ENJEKSİYON SINANIYOR      §③b — ve ilk koşuşunda gerçek bir olay yakaladı.
```

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

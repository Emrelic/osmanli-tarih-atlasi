# KRONOLOJİ OYNATILIRKENKİ TAKILMA — ÖLÇÜLDÜ

> Brifingin `④` maddesi bunu *"koşu bitince tarayıcıda"* diye açık bırakmıştı.
> Koşu 7b bitti (r6711), ölçüm koşuldu. **7 Eylül 07:5x · localhost:8777**
> Ölçülen yayın: koşu 7b sonrası, merge adım 1-3 inmiş hâli.

## ① AÇILIŞ — brifingin sayısının İKİ KATINDAN FAZLA

```
domHazır            20.546 ms
load                20.590 ms
transfer            103,65 MB · 179 script
devletler_harita.js 54.710 KB · 15.931 ms   ← TEK BAŞINA yükün yarısı
```
🔴 Brifing *"~9,2 sn AYRIŞTIRMA"* diyordu. Bugün **20,5 sn**.
⚠️ İkisi aynı şeyi ölçmüyor olabilir (o *ayrıştırma*, bu *domHazır*) —
ama büyüklük mertebesi değişmiş ve `devletler_harita.js` koşu 7b'de
büyüdü (53,4 MB). **Karşılaştırma yaklaşıktır; ölçüm kesindir.**

## ② 🔴 OYNATMA — HER 0,8 SANİYEDE BİR DONUYOR

Ölçüt: `setTimeout(0)` gecikmesi = ana iş parçacığının ne kadar **bloklu**
olduğu. Render'a bağlı değil, `document.visibilityState = "visible"` iken
alındı.

```
BOŞTA (60 örnek)      ortanca 15,9 · azami 16,3 · >50ms  0
OYNARKEN (900 örnek)  ortanca 15,8 · azami 498  · >100ms 21
DURDUKTAN SONRA       ortanca 15,9 · azami 16,4 · >50ms  0
```
```
oynatma süresi          17,3 sn      (1281 → 1299)
donma (>100 ms)         21 kez       ⇒ 0,8 SANİYEDE BİR
en uzun beş             498 · 430 · 400 · 388 · 354 ms
bloklu geçen toplam     4.954 ms     ⇒ oynatmanın %28,6'sı
p99                     240,9 ms
```

🔴 **HÜKÜM: oynatma sürekli yavaş DEĞİL, PERİYODİK OLARAK DONUYOR.**
Ortanca kare bütçesi normal (15,8 ms ≈ 60 fps); kusur **ortalamada değil
kuyrukta**. Kullanıcı bunu *"akıcı ama zıplıyor"* diye görür.
🟢 Ve donma **yalnız oynatırken**: öncesi ve sonrası temiz (>50 ms → 0).
⇒ Sebep sayfa yükü ya da bellek değil, **her tarih adımında yapılan iş.**

## ③ BUNUN `④`ÜN ÇÖZÜM ÖNERİSİYLE İLİŞKİSİ

Brifing *"geometri `<script>`ten çıkıp `fetch()`+JSON olmalı"* diyor ve o
**açılışı** çözer (20,5 sn). Ama bu ölçüm gösteriyor ki **oynatma donması
ayrı bir sorun**: sayfa yüklendikten sonra, bellek 313-676 MB arasında
salınırken, her adımda yeniden hesap yapılıyor.
⇒ İki kalem AYRI ve çareleri farklı. Birini çözmek ötekini çözmez.

## ③b 🔴 SEBEP ÖLÇÜLDÜ — VE KODUN KENDİ NOTU YARIM DOĞRU ÇIKTI

`js/app.js:6231` bir **dürüstlük notu** taşıyor ve sebebi adıyla veriyor:
> *"1317 ögelik lineer bir tarama mikrosaniyeler sürer — yani bu, ölçülen
> ~400 ms'in KAYNAĞI DEĞİL. **Asıl yük `guncelle()` içindeki DOM ve
> `setData` işinde.**"*

Ölçtüm — ve *"asıl yük"* **yarıdan azı**:
```
pencere              15.251 ms   (oynatma, 1304 → 1308)
TOPLAM BLOK           3.464 ms   %22,7
   guncelle()         1.540 ms   %10,1   ⇒ blokun %44,4'ü
   AÇIKLANAMAYAN      1.924 ms           ⇒ blokun %55,6'sı
guncelle çağrı 12 · azami 328 ms · uzun görev 18 · en uzun 371·352·329·283·249
```
🔴 **HÜKÜM: `guncelle()` gerçek bir kaynak ama ÇOĞUNLUK DEĞİL.** Notun
*"asıl yük"* ifadesi düzeltilmeli — bloklanmanın **%55,6'sı** onun dışında
ve **ölçülmedi**.
📌 Ve ikisini **aynı pencerede** ölçmek şarttı: ilk turda `guncelle`yi 12
sn'lik bir pencerede (%7,5), toplam bloğu 17,3 sn'lik başka bir pencerede
(%28,6) ölçmüştüm. İki ayrı pencereden oran çıkarmak `§11`in *"aynı sayı
≠ aynı vaka"* tuzağıdır; tek pencerede yeniden ölçüldü.
🟢 Ve `longtask` atıfı işe yaramadı (`unknown/window`) — sebebi bulan şey
**kodun kendi notu** oldu, alet değil.

## ③c 🔴 BLOKLANMA ÜÇE AYRILDI — ve ORTADA YENİ BİR KAYNAK VAR

Dokuz aday fonksiyon sarmalandı, aynı pencerede ölçüldü (15.345 ms):
```
BLOK toplam                      3.553 ms   %23,2
  tarihAyarla (guncelle'yi İÇERİR) 1.090 ms   %30,7 · 16 çağrı · azami 241
  olayaGit                           849 ms   %23,9 ·  4 ÇAĞRI · azami 243  🆕
  isaretYanipSon                       1 ms   %0    ·  3 çağrı
  ────────────────────────────────────────────────────────────
  AÇIKLANAMAYAN                    1.614 ms   %45,4
```
🟢 `tarihAyarla !== guncelle` (ölçüldü) ama sayıları **birebir aynı** ⇒
`tarihAyarla` `guncelle`yi sarıyor ve kendisi neredeyse hiçbir şey
yapmıyor. Çift saymadım.

🔴 **YENİ BULGU — `olayaGit`: DÖRT çağrıda 849 ms, çağrı başına ~212 ms.**
`guncelle` 16 çağrıda 1090 ms (çağrı başına 68 ms). ⇒ ***`olayaGit` çağrı
başına `guncelle`nin ÜÇ KATI pahalı*** ve kimse ona bakmamış. Az çağrılıyor
olması onu ucuz göstermiş.
📌 `§11`in *"sayım birimi"* ailesinin bu turdaki vakası: toplam maliyet
küçük görünüyor çünkü **çağrı sayısı** küçük, ama **birim maliyet** en
yüksek olan o.

⚪ **%45,4 AÇIKLANAMIYOR** — ve muhtemelen sarmalanabilir bir JS
fonksiyonu değil: `setData` çağrıldıktan sonra MapLibre'nin kendi
işi (yeniden üçgenleme, döşeme). Bu bir **hipotez**, ölçülmedi.

## ③d 🔴🔴 ③c ÇÜRÜDÜ — `olayaGit` PAHALI DEĞİL, KENDİ İŞİ **SIFIR**

`③c`de *"`olayaGit` çağrı başına `guncelle`nin ÜÇ KATI pahalı"* yazmıştım.
**YANLIŞ.** Kaynağı okuyunca görüldü: `olayaGit` gövdesinde `tarihAyarla(o.gi)`
**çağırıyor** ⇒ ölçtüğüm 849 ms **KAPSAYAN** süreydi ve `guncelle`nin
1090'ıyla **ÇAKIŞIYORDU**. Çift saydım.

Yığın tutan bir sarmalayıcıyla **DIŞLAYAN (self)** süre ölçüldü:
```
pencere 15.343 ms · BLOK 2.913 ms (%19,0)
  guncelle            SELF 1.002 ms · 12 çağrı ·  83,5 ms/çağrı · azami 280
  haritayiOlayaGotur  SELF   328 ms ·  3 çağrı · 109,3 ms/çağrı · azami 201  🆕
  obGoster            SELF     5 ms ·  8 çağrı
  tarihAyarla         SELF     1 ms  ← hepsi `guncelle`de
  olayaGit            SELF     0 ms  ← TAMAMI çocuklarında, KENDİ İŞİ YOK
  kameraKilitle · agirBaslat  SELF 0
  ─────────────────────────────────────────────────────────────
  ölçülen SELF toplam 1.336 ms
  AÇIKLANAMAYAN       1.577 ms   %54,1
```
🟢 **GERÇEK YAPRAKLAR İKİ:** `guncelle` (toplamda en büyük) ve
`haritayiOlayaGotur` (**çağrı başına en büyük**, 109,3 ms).
🔴 Ve `olayaGit` bir **saf sarmalayıcı** — onu optimize etmek hiçbir şey
kazandırmaz. `③c`nin hükmü geri alınmıştır.

📌 **DERS:** kapsayan süreyi birim maliyet gibi okumak, bir sarmalayıcıyı
darboğaz sanmaya yol açar. `§11`in *"sayım birimi"* ailesi — ve bu sefer
birim değil **kapsam** yanlıştı. Ölçümü düzelten şey bir alet değil,
**fonksiyonun gövdesini okumak** oldu.

## ④ ÖLÇMEDİKLERİM

```
⚪ Donmanın SEBEBİ — hangi fonksiyon blokluyor. Profil alınmadı.
⚪ Farklı hız kademelerinde davranış — yalnız varsayılan hızda ölçüldü.
⚪ Farklı dönemler — 1281-1299 aralığı ölçüldü; gövde sayısı arttıkça
   (1600+, yüzlerce devlet sahnede) donma ARTABİLİR ve bu ÖLÇÜLMEDİ.
⚪ Yayındaki (GitHub Pages) hâli — ölçüm YEREL sunucuda (localhost:8777).
🔴 Açılış karşılaştırması: brifingin 9,2 sn'si ile bu 20,5 sn AYNI ÖLÇÜT
   OLMAYABİLİR. "İki katına çıktı" demiyorum; "bugün 20,5 sn" diyorum.
```

# D265 — Ölçülen ama BASILMAYAN sayı, ölçülmemiş sayıyla aynı işe yarar

**Slogan:** Bir denetim kalemi eklenirken sorulacak soru *"hesaplanıyor mu"* DEĞİL,
**"nerede basılıyor"**dır. Üretilip hiçbir yere ulaşmayan ölçüm bir hesap hatası değil
**teslim hatası**dır — ve sessizdir, çünkü hesap doğrudur.

Tarih: 5-6 Ekim 2026 gecesi · Aynı şekilli kusur **BİR GECEDE ÜÇ KEZ** çıktı, üçünü de
ayrı oturumlar buldu. 🆕 Aynı gece **iki yüz daha** eklendi (aşağıda): sınıf, "basılmayan
sayı"dan **"ulaşmayan ÇIKTI"**ya genişledi.

## Üç vaka, aynı şekil
```
O7            112 kronoloji maddesi VERİDE var, EKRANDA yok
              js/app.js:7035 deseni iki alt çizgili 7 değişkeni eliyordu.
              🔴 Ve Değişmez 2 o 112 maddeyi SAYIYORDU ⇒ kırılmaları "kapatıyorlar"
              ama kullanıcı değişimi hiç görmüyor. Senkron kapısı YANLIŞ TEMİZ.

kapsam:"dis"   87 madde KAPI sayıyor, varsayılan EŞİKTE görünmüyor
              O7 düzeltmesi 112'yi ekrana getirdi, ama 94'ü `kapsam:"dis"` ve
              varsayılan dış eşikte 87'si yine gizli. Ayrışma 112'den 87'ye indi,
              SIFIRLANMADI.

yer_id_bos      4 birim ARAÇ hesaplıyor, TABLODA görünmüyor
              kronoloji_say.js yer_id_bos'u sayıyor (satır 122/146), ama
              durum_tablosu.py'nin BASAN kısmı o alanı hiç okumuyor.
```

## Niçin bu sınıf tehlikeli
① **Hesap doğrudur**, yani hiçbir sınav ötmez. Kusur sayıda değil **yolda**.
② Araç "çalışıyor" görünür: koşar, çıkış 0 verir, sayı üretir.
③ Bir sonraki oturum o sayının **var olduğunu** varsayar ve aramaz.
④ `D240`in kardeşi: orada araç biçim değişince **yanlış sayı** verir; burada **doğru sayı**
verir ve kimse görmez. İkisi de "denetim var ≠ o soruyu soruyor" ailesinden, ama bu daha
sessiz — yanlış sayı bir gün çelişir, basılmayan sayı hiç çelişmez.

## Kural
1. Yeni bir ölçüm/denetim kalemi eklenirken **basıldığı yer de aynı commit'te** gösterilir.
   Hesaplayan satır ile basan satır ayrı commit'lere düşerse ikincisi unutulur.
2. Bir sayıyı düşürmek meşrudur, **sessizce** düşürmek değildir. Evren daralıyorsa
   (`yer_id` 1633 → 1629) fark **adıyla** basılır: *"boş yer_id: 4"*.
3. Bir aracı doğrulamak: hesapladığı alan kümesi ile **bastığı** alan kümesi karşılaştırılır.
   Fark varsa adıyla listelenir. Sınav sorusu budur, çıkış kodu değil.
4. `§1.5` ELLE YAZILMAZ kuralının (`D199`) ikinci yüzü bu: tablo üretilir, ama **üretilen
   her alan tabloya giriyor mu** diye ayrıca sorulur.

## Ölçülmesi gereken (bu gece sipariş edildi)
`kronoloji_say.js` · `durum_tablosu.py` · `denetle.py` · `odak_olc.py`: **kaç alan
hesaplanıyor, kaçı basılıyor?** Bir gecede üç kez çıkan bir desenin dördüncüsü
muhtemelen duruyor.

İlgili: [`D240`](D240-arac-modeli-bicim-degisince.md) · [`D199`](D199-durum-tablosu-elle-yazilmaz.md) ·
`CLAUDE.md §11` ("denetim var ≠ o soruyu soruyor")


## 🆕 İki yeni yüz — aynı gece, ve ikincisinin bedeli ÖLÇÜLDÜ
Sınıf yalnız SAYInın basılmaması değil; **üretilen hiçbir şeyin yoluna devam etmemesi.**
Üç yüzün üçünde de iş ZATEN YAPILMIŞTIR ve üçü de *"yapılmamış"* gibi görünür:

```
① ÖLÇÜLEN SAYI BASILMIYOR      (yukarıdaki üç vaka)
② ÖLÇÜLEN ÇIKTI COMMITLENMİYOR GLM1 TDV kesik ölçümü: 2.682 dosya ölçüldü, üç dosya
                               00:53-01:07'de diske yazıldı, takipsiz kaldı. Ne
                               origin/main'de ne uzak dallarda. GLM commitleyemez (dış
                               YZ); boru hattı KOORDİNATÖRDE ve koordinatör atladı.
                               Bir başka oturum "bu ölçüm yapılmamış" diye bakıyordu.
③ YAZILAN ÇARE İNDİRİLMİYOR    W10'un bekçi kimlik düzeltmesi (D266) main'de ÜÇ DIFF
                               DOSYASI olarak duruyordu, koda UYGULANMAMIŞTI.
                               `bekci_olc` "ASILI (süreç var, nabız YOK)" bastı.
```

### ③'ün ölçülmüş bedeli — ve niçin bu yüz en pahalısı
Koordinatör `ASILI`yı gördü ve **"kod YAZILMADI"** diye okudu; bir kalem açıp işçi
istedi. Doğrusu **"kod İNMEDİ"**ydi. İrtibat oturumu *"ZATEN YAPILDI, yeni işçi
açmadım"* diyerek kalemi durdurdu — yoksa taze bir kıta, bitmiş bir işi yeniden
yapacaktı.
🔴 **İki teşhis AYNI BELİRTİYİ verir ve çareleri ZITTIR:**
```
"kod yazılmadı"  → çare: İŞÇİ AÇ          (bedel ≈ 82.000 token taze taban)
"kod inmedi"     → çare: KUYRUĞU AKIT     (bedel ≈ üç `git apply`)
```
Uygulama sonrası ölçüm: `ASILI 1 → 0`; 1610 damgası `BITMIS` oldu ve **sebebini bastı**
(*"PID 20764'ün bugünkü sahibi son nabızdan 19982 sn SONRA başlamış"*). Yani çare
baştan beri doğruydu ve iki gün boyunca bir yanlış alarm üretmeye devam etti.

## Kural — 2. maddeye EK
4. 🔴 **Bir kalem AÇMADAN ÖNCE "bu iş zaten yapılmış ve İNMEYİ bekliyor olabilir mi"
   diye KUYRUĞA bakılır.** Belirti, işin yapılıp yapılmadığını söylemez; yalnız
   SONUCUN ortada olmadığını söyler.
5. 🔴 **Dış YZ'nin ya da commitleyemeyen bir işçinin çıktısını COMMITLEMEK, o işi
   verenin borcudur.** "Diske yazıldı" teslim değildir (§7.1 ⑤: *commit teslim
   değildir* kuralının tersi yönü — burada commit bile yok).
6. İrtibat/koordinasyon oturumu **"diskte bekleyen, mesajı gelmemiş"** satırını tutar.
   Bu satır, 4. maddeyi uygulanabilir kılan tek şeydir; yoksa kuyruk görünmez ve
   "indi mi" sorusu her seferinde elle aranır.

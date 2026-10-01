# D249 — Kişi/hanedan adı bir yerleşim adıyla eşleşir, ve BELİRSİZLİK SINAVI bunu GÖRMEZ

**Slogan:** 🔴 **`ARAC-ODAK-BELIRSIZ` "aynı ad, iki UZAK nokta" arar; bu adların havuzda TEK noktası vardır ⇒ belirsiz sayılmazlar — ama metin o yeri kastetmiyordur. "David" Panama'ya, "Roman" Romanya'ya, "Sena" Mozambik'e, "Bulgar" Kazan'a çözülüyordu ve hiçbir kapı ötmezdi.**

## Vaka — 1 Ekim 2026, `ARAC-ODAK-ONER-1001.js` ilk koşusu

Yayın kapısının "YENİ KAPSAM: 6 dosyada 245 odaksız" kalemini kapatmak için
bir ÖNERİCİ yazıldı: odaksız maddenin BAŞLIK metninde geçen yer adını havuzda
arar ve `yer_id` önerir. İlk koşu 57 öneri verdi. Gözle okununca **dördü
yanlıştı** ve dördü de aynı sınıftandı:

```
Bulgar  havuz 54,976/49,03   = İDİL (Volga) BULGAR, Kazan yakını
        madde "II. Basileios Bulgar Devleti'ni yıkıp…"  = BALKAN Bulgarları
        ⇒ ~2.000 km sapma

David   havuz 8,43/-82,43    = DAVID, PANAMA
        madde "Taşir kralı David Anhoghin'e saldırdı"   = Ermeni KRALI

Sena    havuz -17,45/35,03   = SENA, MOZAMBİK
        madde "Lakşmanasena Sena tahtına çıktı"         = Bengal HANEDANI

Roman   havuz 46,925/26,93   = ROMAN, ROMANYA
        madde "Roman Mstislaviç … öldü"                 = Rus KNEZİ
```

Üçü **kişi/hanedan**, biri **devlet** adı. Ortak nokta: eşleşen kelime
maddenin **ÖZNESİ**, mekânı değil.

## 🔴 NİÇİN VAR OLAN KAPI BUNU GÖREMEZ

`D242`nin aleti (`ARAC-ODAK-BELIRSIZ-1001.js`) şunu sorar:

> bir ad BİRDEN ÇOK noktaya mı çözülüyor, ve o noktalar UZAK mı?

Dördünün de havuzda **tek** noktası var. ⇒ Belirsiz değiller, sapma 0°,
alet susar. Ve `odak_cozum.js` de susar çünkü ad **çözülüyor.**

```
D242 sınıfı   ad ÇOK noktaya çözülüyor, yanlışını seçiyor   → ölçülebilir
D249 sınıfı   ad TEK noktaya çözülüyor, ama METİN başka      → ölçülemez
                şey diyor                                      (cümle anlamı)
```

📌 İkincisini dizgiden ayırt etmek için cümleyi ANLAMAK gerekir. ⇒ Otomatik
çare yoktur; **adlı liste** vardır (`KISI_YA_DA_DEVLET`), ve asıl çare
aracın **ÖNERMESİ, UYGULAMAMASIDIR.**

## DERS

```
① Bir eşleşmenin TEK olması DOĞRU olduğunu göstermez.
   Belirsizlik yokluğu, isabet değildir.
② Özel ad eşleştiren her araç, KİŞİ adlarını da eşleştirir —
   tarih metninde kişi adı yer adından ÇOK daha sıktır.
③ Bir öneriyi toptan uygulamanın kısayolu yoktur: 57 kalemin 4'ü
   (%7) yanlıştı ve dördü de ancak GÖZLE görüldü.
   ⇒ Araç "ÖNERİR, UYGULAMAZ" diye tasarlanmalı; uygulayan okur.
④ Ve liste bir TAVAN DEĞİL: yeni bir ad doğarsa öteki önerilerin
   arasına karışır. Liste geçmişi kapatır, geleceği kapatmaz.
```

🔴 Ve bu sınıfın tehlikesi `D242`den **büyüktür**: orada kamera yanlış yere
uçuyordu ve bir gün biri fark edebilirdi. Burada kaydın `yer_id`si **yanlış
bir yere kalıcı olarak yazılacaktı** ve sonraki her denetim onu "çözülüyor,
tek nokta, belirsiz değil" diye TEMİZ sayacaktı — yani kusur kendi kanıtını
üretecekti.

## ÖLÇÜM

```
taranan odaksız madde       245
tek adlı öneri (ilk koşu)    57
  bunlardan YANLIŞ            4   (%7)
liste eklendikten sonra      53 öneri · 5 kalem KİŞİ/DEVLET kovasında
belirsiz (D242) kovası        1   ("Mora" — yine o)
birden çok ad                14   (hangisi odak, araç bilemez)
hiç ad bulunamadı           172   (%70 — çoğunun metninde yer adı YOK)
```

📌 %70'in yer adı taşımaması da bir ölçümdür: 245 odaksızın çoğu mekanik
olarak kapanamaz, **araştırma ister.** "Odaksız 245" bir veri girişi
borcudur, bir araç borcu değil.

## BAĞLI

`D242` (çözülüyor ≠ doğru yere çözülüyor) · `D247` (iki ölçümün uyuşması
doğrulama değildir) · `D204` (ölçülemedi ≠ yok ≠ temiz) ·
`denetim/ARAC-ODAK-ONER-1001.js` · `denetim/ODAK-ONERI-1001.json`

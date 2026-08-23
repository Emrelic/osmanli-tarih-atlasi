# -*- coding: utf-8 -*-
"""ÖNGÖRÜ — UÇUŞ ANİMASYONU oturumu · 22 Ağustos 2026

🔴 BU DOSYA ÖLÇÜMDEN ÖNCE YAZILDI VE DEĞİŞTİRİLMEYECEK.

`CLAUDE.md §11`: *"Sonradan yazılan beklenti, ölçümü gördükten sonra farkında
olmadan ona göre şekillenir ve hiçbir zaman yanlış çıkmaz — yani hiçbir şey
öğretmez. Önce yazılan beklenti YANLIŞ ÇIKABİLİR, ve ancak yanlış çıkabilen
bir şey bilgi taşır."*

Ve ikinci ayağı (`§11`, RENK 2 vakası): **mazeret de önceden yazılır.**
Ölçümden sonra *"ha o zaten şuna duyarlıydı"* demek, mazereti bulguya
benzetir. Aşağıda her kalemin yanında MAZERETİ OLUP OLMADIĞI yazıyor.

────────────────────────────────────────────────────────────────────────────
ÖLÇÜM ORTAMI — ve onun ÖNCEDEN İLAN EDİLEN sınırı
────────────────────────────────────────────────────────────────────────────
Tarayıcı paneli görüntülenmiyor ⇒ sayfa KOMPOZİT EDİLMİYOR:

    window.innerWidth      0          document.visibilityState   "hidden"
    #harita kutusu         0x0        harita.getStyle()          undefined
    haritaHazir            false      harita.loaded()            false
    tuval (yedek yol)      400x300    WebGL 2.0 bağlamı          VAR

⚠️ Bunun İKİ sonucu var ve ikisi de ölçüme müdahale ediyor:

  ① `zoomUygula` ilk satırında `if (!otoZoom || !haritaHazir) return;`
     ⇒ oto-zoom bu ortamda KENDİLİĞİNDEN SUSAR. Emre'nin tarayıcısında
     susmaz. ⇒ Ölçerken `haritaHazir` ZORLA `true` yapılacak. Bu bir
     hile değil, ortam farkının TELAFİSİ — ve önceden ilan ediliyor.

  ② `requestAnimationFrame` gizli sekmede ateşlemiyor ⇒ `flyTo(duration:300)`
     ÖLÇÜLDÜ: kamerayı ANINDA hedefe koyuyor, `isMoving()` false.
     ⇒ Animasyonun AKIŞKANLIĞI bu ortamda ÖLÇÜLEMEZ. Ölçülebilen tek şey
     HANGİ METODUN HANGİ PARAMETREYLE çağrıldığıdır (şartname §5'in kendi
     reçetesi). *"Ölçemediğini ölçmedim diye yaz"* — yazıyorum: **animasyonun
     görüntüsünü ölçemiyorum, yalnız çağrıları ölçüyorum.**

────────────────────────────────────────────────────────────────────────────
TEŞHİS — koddan ÇIKARILDI, henüz ÖLÇÜLMEDİ (ayrı satır, `§11`)
────────────────────────────────────────────────────────────────────────────
ÖLÇTÜĞÜM   `js/app.js`te kamerayı süren ON ayrı çağrı yeri var:

    satır 362    fitBounds   devletiYay()        imparatorluk gövdesi
    satır 2763   fitBounds   zoomUygula()        dönem değişimi
    satır 3236   flyTo z6.2  dizin/şehir tıklaması
    satır 3312   flyTo z6.2  dizin/yerleşim tıklaması
    satır 4381   fitBounds   bölge seçici
    satır 4664   fitBounds   uçuş motoru — "yer yok" dalı
    satır 4717   jumpTo      uçuş motoru — KİP A
    satır 4740   easeTo      uçuş motoru — KİP B yatay
    satır 4746   flyTo       uçuş motoru — KİP B eğik
    satır 5357   flyTo z6.5  maddeAc() — devlet kronolojisi sekmesi

⇒ Onun yalnız ÜÇÜ (4717/4740/4746) odaklama motorundan geçiyor.

ÇIKARDIĞIM (ölçüm değil): Emre'nin *"bir yakın bir uzak"* şikâyeti
**tek bir tıklamada İKİ ZIT KAMERA KOMUTU** verilmesinden geliyor. Üç
kullanıcı yolunun ÜÇÜNDE de aynı desen var:

    olay listesi tıklaması   app.js:2936  tarihAyarla(o.gi)  →  guncelle()
                                          →  zoomUygula()  →  fitBounds(İMPARATORLUK)
                             app.js:2938  haritayiOlayaGotur(o)  →  flyTo(NOKTA)

    ⏭ / ⏮ düğmesi           app.js:4973  tarihAyarla(...)   →  fitBounds(İMPARATORLUK)
                             app.js:4974  haritayiOlayaGotur →  flyTo(NOKTA)

    devlet kronolojisi       app.js:5341  tarihAyarla(gi)    →  fitBounds(İMPARATORLUK)
                             app.js:5357  flyTo(z 6.5 SABİT)

⇒ Aynı karede: önce imparatorluğa aç (z~4), sonra noktaya in (z~6,2-6,5).
   Ve `zoomUygula`nın `kapsiyor && oran > 0.3` koruması bunu BAZEN
   susturduğu için etki DÜZENSİZ — *"PAT ORADA PAT BURADA"* bunun tarifi.

────────────────────────────────────────────────────────────────────────────
DENEY DÜZENİ — üç koşu, hepsinde kamera metotları SARMALANIP sayılacak
────────────────────────────────────────────────────────────────────────────
A) BUGÜNKÜ KOD · varsayılan ayar (localStorage TEMİZ) · haritaHazir=true
   ⏭ düğmesine 8 kez basılır.
B) BUGÜNKÜ KOD · `ucus-ac` ELLE işaretlenir · aynı 8 adım.
C) DÜZELTİLMİŞ KOD · varsayılan ayar · aynı 8 adım.

────────────────────────────────────────────────────────────────────────────
ÖNGÖRÜLER — damgalı, mazeretiyle
────────────────────────────────────────────────────────────────────────────
"""

ONGORU = [
    # ── A KOŞUSU — bugünkü kod, varsayılan ayar ────────────────────────────
    dict(
        no="A1",
        iddia="Motor çağrısı (jumpTo+easeTo+flyTo, haritayiOlayaGotur'dan) = 0",
        sayi=0,
        gerekce="`ucus-ac` HTML'de `checked` taşımıyor ve `haritayiOlayaGotur` "
                "ilk satırında `if (!ucusAcEl.checked) return;` — kök sebep ①.",
        mazeret="YOK. Bu koordinatörün ①. adayının doğrudan sınavı. Sıfırdan "
                "farklı çıkarsa aday ÇÜRÜR ve uçuş zaten çalışıyor demektir; "
                "o zaman şikâyetin sebebi BAŞKA yerdedir.",
    ),
    dict(
        no="A2",
        iddia="zoomUygula kaynaklı fitBounds >= 1",
        sayi=">=1",
        gerekce="Her ⏭ `tarihAyarla` çağırıyor, o `guncelle`yi, o `zoomUygula`yı. "
                "8 adımda en az bir dönem sınırı geçilir.",
        mazeret="VAR — ve sınırı şu: `kapsiyor && oran>0.3` koruması 8 adımın "
                "hepsini yutabilir (ölçülmüş: dönem geçişlerinin %90,5'i sabit "
                "kalıyor). 0 çıkarsa mazerete SIĞINMAM: adım sayısını 40'a "
                "çıkarıp TEKRAR ölçerim. 40 adımda da 0 ise aday ② ÇÜRÜR.",
    ),

    # ── B KOŞUSU — bugünkü kod, uçuş elle açık ─────────────────────────────
    dict(
        no="B1",
        iddia="Motor çağrısı > 0 (uçuş açılınca motor gerçekten ateşliyor)",
        sayi=">0",
        gerekce="Tek engel `ucus-ac`ti; kaldırılınca motorun kalan yolu sağlam.",
        mazeret="YOK. 0 çıkarsa motorun İKİNCİ bir sessiz kapısı var demektir "
                "(`_ekrandaMi` + zoom farkı < 0,6 → S2 erken dönüşü en güçlü aday) "
                "ve teşhisim eksikti.",
    ),
    dict(
        no="B2",
        iddia="AYNI 8 ADIMDA hem fitBounds hem motor çağrısı görülür — "
              "yani iki mekanizma AYNI kamerayı sürüyor",
        sayi="ikisi de >0",
        gerekce="Kök sebep ②'nin tek doğrudan sınavı budur.",
        mazeret="YOK — ve bu, bütün öngörü kümesinin en önemli kalemi. "
                "fitBounds 0 çıkarsa ÇATIŞMA YOKTUR, kamera hakemi yazmak "
                "gereksiz bir iş olur ve şartnamenin ①. kalemi düşer.",
    ),
    dict(
        no="B3",
        iddia="Aynı ⏭ basışında fitBounds ile motor çağrısı arasındaki süre "
              "< 50 ms (yani iki komut AYNI KAREDE, biri ötekini keser)",
        sayi="<50 ms",
        gerekce="`tarihAyarla` ve `haritayiOlayaGotur` art arda iki satır; "
                "araya hiçbir bekleme girmiyor.",
        mazeret="VAR — `tarihAyarla` içinde ağır bir çizim varsa 50 ms aşılabilir. "
                "Aşarsa öngörüyü çürümüş sayarım ama TEŞHİS ayakta kalır: "
                "önemli olan sıra, süre değil.",
    ),

    # ── C KOŞUSU — düzeltmeden sonra ───────────────────────────────────────
    dict(
        no="C1",
        iddia="jumpTo = 0 — kamera HİÇBİR ZAMAN ışınlanmaz",
        sayi=0,
        gerekce="Emre'nin kabul ölçütü ①. `hizliGecis` dalı jumpTo yerine "
                "önceki uçuşu KESİP yenisini başlatacak (MapLibre devralıyor).",
        mazeret="YOK. Bu, Emre'nin cümlesinin birebir sınavı.",
    ),
    dict(
        no="C2",
        iddia="zoomUygula kaynaklı fitBounds = 0 (uçuş sürerken oto-zoom SUSAR)",
        sayi=0,
        gerekce="Kamera hakemi: olay uçuşu, oto-zoom'dan ÖNCELİKLİ.",
        mazeret="YOK. >0 çıkarsa hakem çalışmıyor demektir. "
                "⚠️ Ama oto-zoom SİLİNMEYECEK — `btn-zoom` elle açıldığında ve "
                "olay uçuşu YOKKEN hâlâ çalışmalı; onu ayrıca sınayacağım.",
    ),
    dict(
        no="C3",
        iddia="Motor çağrısı >= 6 (8 adımın en az 6'sı gerçek bir geçiş üretir)",
        sayi=">=6",
        gerekce="Kalan <=2 adım S2 dalına düşebilir (hedef zaten ekranda ve "
                "yakınlık doğru → yalnız işaret yanıp söner, kamera oynamaz).",
        mazeret="VAR — 8 olayın kaç tanesinin `yer_id`si çözülüyor ÖLÇÜLMEDİ. "
                "`yer_id` boşsa 'yer yok' dalına düşer. 6'nın altına inerse "
                "ÖNCE çözülen yer_id sayısını ölçerim; mazeret ancak o sayı "
                "düşükse geçerlidir, yoksa motorda kusur var demektir.",
    ),
    dict(
        no="C4",
        iddia="Yay yüksekliği (`curve`) mesafeyle ORANTILI: "
              "100 km'de <= 1,15 · 3000 km'de >= 1,50",
        sayi="1,15 / 1,50",
        gerekce="Emre: *'100 km'lik geçişte kıtaya çıkmak saçma.'* "
                "Bugün `curve` sabit 1,42 (ayar-irtifa) — mesafeyi hiç görmüyor.",
        mazeret="VAR ama DAR — eşiği ben seçiyorum, dolayısıyla 'tutması' "
                "şaşırtıcı değil. ⇒ Bu kalem bilgi taşımaz, YALNIZCA "
                "uygulandığının kaydıdır. Bilgi taşıyan kalem C5'tir.",
    ),
    dict(
        no="C5",
        iddia="maddeAc'in SABİT z6.5 flyTo'su kalkınca, devlet kronolojisi "
              "sekmesinde ardışık iki maddede zoom farkı < 0,3 kalır "
              "(bugün: imparatorluk fitBounds ~z4 ile z6.5 arası, fark > 2)",
        sayi="<0,3",
        gerekce="*'Bir yakın bir uzak'* şikâyetinin ölçülebilir hâli bu.",
        mazeret="YOK. Bu, Emre'nin üçüncü cümlesinin doğrudan sınavı ve "
                "ölçtüğüm sayı benim seçtiğim bir eşik değil, KODDAN gelen "
                "iki sabitin (6.5 ve fitBounds sonucu) farkı.",
    ),
]

if __name__ == "__main__":
    import io, sys
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
    print(__doc__)
    print("=" * 76)
    for o in ONGORU:
        print("%-4s %s" % (o["no"], o["iddia"]))
        print("     beklenen : %s" % o["sayi"])
        print("     gerekce  : %s" % o["gerekce"])
        print("     MAZERET  : %s" % o["mazeret"])
        print("-" * 76)
    print("toplam kalem: %d  ·  mazereti OLMAYAN: %d"
          % (len(ONGORU), sum(1 for o in ONGORU if o["mazeret"].startswith("YOK"))))

# Envanter 1119 - ozet (betikle uretildi: envanter.py)

Olcum agaci: worktree HEAD (59ce255cf). Kronoloji: 18821 madde (OLAYLAR*/KRONOLOJI*), yer alani dolu madde: odak_yer=174 yer_id=12949 yer=9078; node vm ile 134 data betigi yuklendi, yukleme hatasi=0. Yerlesim: 5648 kayit (girdi.yukle).

## Sinif basina satir sayisi

- a-sahipsiz-yerlesim: 207
- b-bos-alan: 375
- c1-asiret-kunye: 85
- c2-asiret-penceresi: 142
- c3-asiret-devletsiz-nokta: 153
- d-kaynaksiz-s-donemi: 133
- e-bosluk-donemi: 1328
- e2-beyan-edilen-bosluk-listesi: 5
- f-bos-toprak-arazi: 119

Toplam satir: 2547

## Dogrulama (denetle.py tanimlariyla)

- (a) degismez1 sahipsiz AD: 207 (denetle.py BEKLENEN_SAHIPSIZ tavani 210)
- (a) cins dagilimi: {'devletsiz-yerlesim': 70, 'kabile': 61, 'devletsiz': 37, 'col': 1, 'insansiz': 9, 'veri-yok': 26, 'hata': 2, 'BEYANSIZ(bos:yok)': 1}
- (b) BOS_ALANLAR: 375, cins: {'col': 1, 'devletsiz': 38, 'devletsiz-yerlesim': 115, 'dogrulanmis': 1, 'hata': 6, 'insansiz': 13, 'kabile': 153, 'veri-yok': 48}
- (c1) asiret/konfederasyon kunyesi: 85 satir = 70 siki (devletler.js tur ~ kabile|konfeder|boylar|gocebe VEYA ad ~ konfederasyon|asiret|kabile|boylar|kavim) + 15 'YALNIZ-federasyon' (tur/ad federasyon; cogu modern/devlet federasyonu, asiret degil; c2'ye alinmadi); c2 = siki kunyelere bagli yerlesim-pencere (yerlesim basina bir satir) ciftleri: 142; c3 (kabile noktalari = BOS_ALANLAR kabile alt kumesi): 153
- (d) kaynaksiz s: 'hicbiri' yerlesim: 43, donem: 133 (kayit_kaynaksiz=2267, donem_ici=2224, s_tasiyan=5229; yalniz 'hicbiri' listelendi)
- (e) __BOSLUK__ donemi: 1328 (yerlesim: 935), bunlardan BEYAN_EDILEN_BOSLUK ile eslesen: 0; BEYAN_EDILEN_BOSLUK listesi: 5 tuple
- (f) arazi-tipi bos toprak: 119 yer; alt tur: {'col': 55, 'bozkir': 23, 'dag': 19, 'vaha': 7, '?': 14, 'bataklik': 1}

## Ayni yerin birden cok sinifta gecisi

Birden cok sinifta yer sayisi: 374 (c1 ve e2 kunye/liste satirlari haric; c3 = b'nin kabile alt kumesi, f cogu zaman b ile ortusur: beklenen)
- a-sahipsiz-yerlesim + b-bos-alan: 94
- b-bos-alan + c3-asiret-devletsiz-nokta: 65
- a-sahipsiz-yerlesim + b-bos-alan + f-bos-toprak-arazi: 44
- a-sahipsiz-yerlesim + b-bos-alan + c3-asiret-devletsiz-nokta: 36
- c2-asiret-penceresi + e-bosluk-donemi: 33
- b-bos-alan + c3-asiret-devletsiz-nokta + f-bos-toprak-arazi: 25
- a-sahipsiz-yerlesim + b-bos-alan + c3-asiret-devletsiz-nokta + f-bos-toprak-arazi: 19
- b-bos-alan + e-bosluk-donemi: 18
- a-sahipsiz-yerlesim + b-bos-alan + e-bosluk-donemi: 6
- a-sahipsiz-yerlesim + b-bos-alan + c2-asiret-penceresi + c3-asiret-devletsiz-nokta + d-kaynaksiz-s-donemi: 4
- b-bos-alan + f-bos-toprak-arazi: 4
- b-bos-alan + e-bosluk-donemi + f-bos-toprak-arazi: 4
- c2-asiret-penceresi + f-bos-toprak-arazi: 3
- c2-asiret-penceresi + d-kaynaksiz-s-donemi: 3
- d-kaynaksiz-s-donemi + e-bosluk-donemi: 3
- b-bos-alan + c2-asiret-penceresi: 2
- c2-asiret-penceresi + e-bosluk-donemi + f-bos-toprak-arazi: 2
- e-bosluk-donemi + f-bos-toprak-arazi: 2
- a-sahipsiz-yerlesim + b-bos-alan + c3-asiret-devletsiz-nokta + e-bosluk-donemi: 1
- a-sahipsiz-yerlesim + b-bos-alan + c2-asiret-penceresi + c3-asiret-devletsiz-nokta: 1
- a-sahipsiz-yerlesim + b-bos-alan + d-kaynaksiz-s-donemi: 1
- b-bos-alan + d-kaynaksiz-s-donemi + f-bos-toprak-arazi: 1
- b-bos-alan + c3-asiret-devletsiz-nokta + e-bosluk-donemi: 1
- b-bos-alan + c2-asiret-penceresi + c3-asiret-devletsiz-nokta + e-bosluk-donemi: 1
- c2-asiret-penceresi + d-kaynaksiz-s-donemi + e-bosluk-donemi: 1

## Bagli kronoloji maddesi en cok ilk 20 (yer adi = odak_yer/yer_id/yer esitligi; tum siniflardaki yerler)

- 156  Londra  [d-kaynaksiz-s-donemi, e-bosluk-donemi]
- 146  Paris  [e-bosluk-donemi]
- 116  Tebriz  [e-bosluk-donemi]
- 110  Viyana  [e-bosluk-donemi]
- 104  Tunus  [e-bosluk-donemi]
- 90  Halep  [e-bosluk-donemi]
- 86  Şam  [e-bosluk-donemi]
- 85  Pekin (Hanbalık)  [e-bosluk-donemi]
- 79  Konya  [e-bosluk-donemi]
- 73  Edirne  [e-bosluk-donemi]
- 69  Buhara  [e-bosluk-donemi]
- 69  Atina  [e-bosluk-donemi]
- 62  Belgrad  [e-bosluk-donemi]
- 59  Trablus  [e-bosluk-donemi]
- 58  Delhi  [c2-asiret-penceresi, e-bosluk-donemi]
- 57  Xi'an (Chang'an)  [e-bosluk-donemi]
- 57  Isfahan  [e-bosluk-donemi]
- 55  Mekke  [e-bosluk-donemi]
- 52  Tilimsan  [e-bosluk-donemi]
- 51  Semerkant  [e-bosluk-donemi]

## Hic maddesi olmayan

- a-sahipsiz-yerlesim: 176 / 207 benzersiz ad
- b-bos-alan: 283 / 375 benzersiz ad
- c1-asiret-kunye: 84 / 84 benzersiz ad
- c2-asiret-penceresi: 58 / 134 benzersiz ad
- c3-asiret-devletsiz-nokta: 148 / 153 benzersiz ad
- d-kaynaksiz-s-donemi: 16 / 43 benzersiz ad
- e-bosluk-donemi: 319 / 935 benzersiz ad
- e2-beyan-edilen-bosluk-listesi: 1 / 4 benzersiz ad
- f-bos-toprak-arazi: 99 / 119 benzersiz ad
- TUM siniflar (c1 haric) benzersiz yer: 1415, maddesiz: 648

Not: BEYAN_EDILEN_BOSLUK 5 tuple'i 'donemler arasi bosluk' beyanidir (ornegin Cenne 1700-1818); verideki d:__BOSLUK__ donemleriyle ayni sey DEGIL, bu yuzden e satirlariyla eslesme 0. e = d:'__BOSLUK__' ile acikca boyanan donemler (beyanli/BEYANLI kaynakli olanlar neden sutununda).
Not: d sinifi: 43 yerlesim / 133 donem (gorevde '44 / ~148' denmisti; bugunku denetle.kaynaksizlik_olc 'hicbiri' = 43 yerlesim). Kayit duzeyi kaynaksiz (kayit_kaynaksiz=2267) ama donem-ici kaynakli olanlar listelenmedi.
Not: sahipsiz (a) sinifinda cins BOS_ALANLAR.cins'ten gelir; 'devletsiz-yerlesim' = devletsiz SEHIR (yerlesim var, devlet yok), 'devletsiz' = bos arazi. BOS_ALANLAR'da yok ve bos: alani yok = BEYANSIZ sahipsiz (denetle 1c tavani).
Not: kronoloji eslesmesi ad tam esitligi (odak_yer|yer_id|yer); 'Tekirdag' gibi yazim farklari (Dellis/Dellîs vakasi) kacirilir - alt sinir.
Not: c1 kunye satirinda kron sayisi 'devlet/devletler' alani kunye id'sine esit madde sayisidir (yer esitligi degil).

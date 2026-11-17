# TANIK DÜZELTME — kuzey_avrupa_1 / _2 / _ayri (UMIT, 17 Kasım 2026)

Yöntem: her `ilk.kaynak` sayfası (lex.dk, snl.no) tarayıcıda açıldı, sayfa gövdesinden yıl cümlesi çıkarıldı, `ilk.tanik` birebir (kaynağın dilinde) yazıldı. Hiçbir kayıtta kesinlik düşürülmedi, ilk kaldırılmadı. Okunamayan sayfa yok. Vikipedi kullanılmadı (hepsi lex.dk = Den Store Danske, snl.no = Store norske leksikon; ikisi de genel ulusal ansiklopedi, akademik/hakemli değil).
Denetim: `py -I arac/sehir_tarihce.py denetle` her üç dosyada ihlal 0.

Sayım (30 kayıt): (a) tek cümle birebir = 17 · (b) iki cümlelik = 8 · (b3) üç cümlelik zayıf-b = 5 · (c) düşürülen/kaldırılan = 0 · (d) okunamadı = 0.

## (a) tek cümle, ad + yıl aynı cümlede
- karlskrona-se: tanık tam cümleye genişletildi (lex.dk/Karlskrona)
- randers-dk: boştu -> "Navnet Randers nævnes 1080-86 som Randeros, Randros..." (lex.dk/Randers)
- svendborg-dk: "Byen nævnes..." (ad yok) -> "Navnet Svendborg nævnes 1229 som Swineburgh..." (lex.dk/Svendborg)
- akureyri-is: parça -> tam cümle "Danske og norske købmænd sejlede ... sidst i 1500-tallet., og Akureyri spillede..." (lex.dk/Akureyri); içerik ticaret seferi, kent kuruluşu değil
- bodo-no: boştu -> "Bodø fikk status som kjøpstad i 1816, men ..." (snl.no/Bodø); ayrıca snl 1775 'kremmerleie'
- falun-se: Danca (lex) tanık, kaynak snl idi -> snl "Falun vokste fram omkring Falu gruva, som var i drift fra 1000-tallet, og fikk byprivilegier i 1641." (snl.no/Falun)
- hamar-no: parça -> "Hamar blev grundlagt i midten af 1000-tallet ... blev i 1152 bispesæde ..." (lex.dk/Hamar)
- hameenlinna-fi: parça (ad yok) -> "Den er den eldste byen ... Tavastehus slott ... 1200-tallet." (snl.no/Tavastehus)
- kuopio-fi: parça -> "Kuopio ble allerede på 1500-tallet ... mellom 1549 og 1552." (snl.no/Kuopio)
- lulea-se: lex-Danca -> snl "Byen ble først anlagt i 1621 ved den gamle Luleå kyrkby ..., men flyttet i 1649 ..." (snl.no/Luleå). DİKKAT: ilk.t 1649 taşınma yılı; ilk kuruluş 1621 — karar sizde, t değiştirilmedi
- molde-no: boştu -> "Da Molde ble kjøpstad i 1742, ..." (snl.no/Molde); ikinci teyit lex.dk/Molde "blev købstad i 1742" (iki genel ansiklopedi)
- moss-no: boştu -> "Moss omtales i 1560 som ladested og ble kjøpstad i 1720 ..." (snl.no/Moss); tek kaynak. DİKKAT: 1560 ladested anılışı var, ilk.t 1720 bırakıldı
- ostersund-se: İngilizce -> snl "Östersund ble grunnlagt i 1786, og har vært residensstad ..." (snl.no/Östersund)
- oulu-fi: lex-Danca -> snl "Uleåborg fikk byrettigheter og ble grunnlagt i 1605 av Karl 9." (snl.no/Uleåborg = Oulu)
- skien-no: boştu -> "Skien ... nevnes første gang i Sverres saga, i beretningen om slaget ved Fimreite i 1184." (snl.no/Skien); 1184 savaş yılı, tek kaynak
- trondheim-no: boştu -> "Trondheim ble etter tradisjonen grunnlagt av Olav Tryggvason, ... i året 997." (snl.no/Trondheim); tek kaynak
- vaxjo-se: "Som bispesæde fra 1170 blev Växjö i middelalderen ..." (lex.dk/Växjö)

## (b) iki cümlelik tanık (ic_not'a yazıldı)
- soro-dk (lex.dk/Sorø): "Byens historie ... Sorø Klosters og Sorø Akademis ... Bortset fra disse ... Christian 4. i 1622 ..."
- vadso-no (snl.no/Vadsø): "Den eldste bebyggelsen lå på ... Vadsøya ... Allerede på 1500-tallet ... fiskevær" (ad Vadsøya)
- kalmar-se (lex.dk/Kalmar): "Kalmar er en af Sveriges ældste byer ... Den fik bymæssig bebyggelse ... omkring 1200 ..."
- linkoping-se (lex.dk/Linköping): "Linköping ligger i et rigt landbrugsområde... Stedet blev et kirkeligt centrum i 1100-t., ..."
- nykoping-se (snl.no/Nyköping): "Nyköping er en av Sveriges eldste byer. Et fransiskanerkloster fra 1280-årene ..."; tek kaynak
- turku-fi (snl.no/Åbo): "Åbo er Finlands eldste by. Byen ble grunnlagt i 1229 ..."
- vanha-vaasa-fi (lex.dk/Vaasa): "Byen blev grundlagt i 1606 af Karl 9. Det gamle Vaasa nedbrændte ..."
- drammen-no (snl.no/Drammen): boştu -> "Omkring 1600 omtales Bragernes ... i 1715 ... Bragernes og Strømsø ... kjøpstadsrettigheter. I 1811 ... kjøpstaden Drammen." 1715 cümlesinde "Drammen" adı yok; tek kaynak

## (b3) üç cümlelik, ZAYIF — ad yıl cümlesinde değil, aynı paragrafta; sizin kararınız (istenirse (c)'ye düşürülür)
- harnosand-se (lex.dk/Härnösand): ad 1. cümlede, "Den blev grundlagt i 1585" 3. cümlede
- karlstad-se (lex.dk/Karlstad): 1584 cümlesi "navn af hertug Karl", ad "Karlstad" 3. cümlede
- mikkeli-fi (snl.no/Mikkeli, sayfa adı "S:t Michel"): ad 1., "kjøpstad fra 1838" 3. cümlede
- orebro-se (lex.dk/Örebro): "midten af 1200-t." cümlesinde ad yok; "Örebro" 3. cümlede — ÇOK ZAYIF
- tonsberg-no (snl.no/Tønsberg): boştu -> "871 Offisielt grunnleggelsesår for Tønsberg. ... ingen arkeologiske bevis ... eldre enn 900-tallet."; snl ayrıca 1135 Orderic Vitalis ilk yazılı anılış; tek kaynak

## Tek kaynak kalanlar (ikinci kaynak bulunamadı, ic_not'ta beyan)
drammen, moss, nykoping, skien, tonsberg, trondheim (snl yalnız). molde: lex ikinci teyit. bodo: lex+snl 1816 (zaten çift). Britannica / akademik üçüncü kaynak bu turda aranmadı.

Değişen dosyalar: data/sehir_tarihce_kuzey_avrupa_1.js, _2.js, _ayri.js (commit edilmedi).

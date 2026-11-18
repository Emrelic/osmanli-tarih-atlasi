# YAZILAMADI — Kuzey Avrupa parti 9 (UMIT, 19 Kasım 2026)

Aday: BORC-GUNCEL-UMIT.tsv blok=kuzey-avrupa, `eklenen` dolu = 139 satır (görev "≈48" demişti; ölçü 139). Mükerrer (data/sehir_tarihce_*.js ad+3 km): 5 (Kolding, Nykøbing Falster, Helsingborg, Mariehamn, Norwich). Önceki YAZILAMADI-KUZEY-3..8'de adı geçen: 4 (Esbjerg, Alta, Birmingham, Húsavík; Esbjerg yine de Britannica'da yıllı bulundu, yazıldı). Yazılan: 21 (`data/sehir_tarihce_kuzey_9.js`, hepsi TEK KAYNAK = Britannica /place/ görünür gövde).
Britannica taraması (tarayıcı içi fetch) yalnız ~95 adı denedi; kalanı (Norveç/İsveç bir kısmı, İrlanda 20, İzlanda 13 vb.) taranmadı.

## Sebep: Britannica /place/ yok (404) — başka kaynak aranmadı
Sandvika, Helsingør, Næstved, Køge, Skellefteå, Borlänge, Trollhättan, Södertälje, Kouvola, Seinäjoki, Kajaani, Leicester, Middlesbrough, Sarpsborg, Gjøvik, Harstad, Mo i Rana, Kongsvinger, Larvik, Kongsberg, Aasiaat, Maniitsoq, Qaanaaq, Ísafjörður, Akranes, Keflavík, Hafnarfjörður, Selfoss, Tvøroyri.

## Sebep: sayfa var ama kuruluş/ilk anılış yılı yok (yalnız belediye/üniversite/modern olay)
Herning, Espoo (süzgeç boş), Vantaa (1972 şehir statüsü), Sandnes, Kingston upon Hull (dok 1778 vb.), Bradford, Stoke-on-Trent, Swansea, Dundee (1892 şehir), Reading, Wolverhampton, Chelmsford (1914 piskoposluk), Swindon (1841 demiryolu), Bedford (yıl yok), Bournemouth, Milton Keynes, Truro, Salisbury (kesik).

## Sebep: kaynak var, kuruluş değil ya da hükümdarlık zinciri karmaşık (BEKLEYEN; kaynak elde)
- Hammerfest (Britannica: "Chartered in 1789"): Danimarka-Norveç → İsveç-Norveç 1814 geçişi sahip zinciri + geçiş olayı ister; atlandı.
- Newry (imtiyaz 1157), Lisburn, Armagh, İrlanda'nın 20 ilçe şehri: İrlanda/İngiltere egemenlik zinciri (1603, 1801, 1922) kaynaksız yazılamaz.
- Newport (1385 imtiyaz, kale ~1126), Wrexham: Galler zinciri (Gal beylikleri → İngiltere).
- Aberdeen: "reputedly founded in 580" efsane/belirsiz; 1489/1498 imtiyaz İskoçya→1707 geçişi ister.
- Sunderland (674 manastır = Monkwearmouth, şehir değil), Coventry (1043 manastır), Ripon (651 manastır), Taunton ("about 710": yaklaşık, Wessex zinciri, İngiltere künyesi 927'de başlıyor), Maidstone (1747 son imtiyaz), Guildford ("earliest known charter 1257" = en erken tanınan imtiyaz, ilk anılış değil), Brighton (1754 tatil modası), Eskilstuna (12. yy ticaret merkezi yıl yok; imtiyaz 1659 ilk değil), Peterborough/Sheffield/Norwich-benzeri: Britannica gövdesinde yıl çıkmadı.
- Tasiilaq (1895 ticaret/misyon istasyonu): kaynak kuruluşu "established" der ama istasyon, yerleşim değil; yazılabilir ama zincir 1900'den 5 yıl önce, Greenland Danimarka — sonraki partiye.
- Lerwick, Stornoway, Honningsvåg, Barentsburg, Ny-Ålesund, İzlanda/Faroe geri kalanı, Dundalk vb.: bu partide taranmadı.

## Engel
`data/yerlesimler_hint_adalar.js` Defender yüzünden okunamıyor: araç geçici dizinde stub'la (boş dizi) koşturuldu; çıktı kuzey şehirleri için etkilenmez (atlas noktası yok). Çıktı denetle 0 (ihlal 0, uyarı 0).

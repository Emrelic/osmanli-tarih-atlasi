# PARTİ 5 sonuç (13 Kasım 2026, SON parti) — 52 yerleşim, 102 listeli dönemden 93'ü kaynaklandı

Ön tarama (`p5_tara.py`, `tara5.json`): 102 listeli dönemin 93'ü hâlâ kaynaksız ve f/t eşleşir; **9 dönem dokunulmadı** (aşağıda). `uygula_parti5.py` 93/93 nesneye `kaynak:` ekledi (beklenen 93, ESİT). Üç dosya `node --check` temiz. `git diff --stat`: a78_avrupa 21 ekleme/21 silme, ek7 16/16, avrupa 15/15 (toplam 52 satır = 52 yerleşim; commit/push yapılmadı). `dogrula_parti5.py`: eklenen kaynak dizgileri geri alınınca üç dosya da HEAD ile özdeş (yalnız ekleme; 34+22+37 = 93 kayıt). Her alıntı `_ham/` metninde (boşluk ve noktalama öncesi/sonrası boşluk normalleştirilmiş) birebir arandı: sıfır sorun, ≤25 kelime, çift tırnak/ters eğik çizgi yok. Betikler: `p5_veri.py` (alıntılar, p4_veri sabitlerini yeniden kullanır) → `kaynaklar-parti5.json` → `uygula_parti5.py` → `dogrula_parti5.py`.

Teknik not: Çek iki yerleşim (České Budějovice, Třeboň) dosyasında dönem nesneleri tırnaklı anahtarlı (`{"f":…,"d":…}`) yazılmış; kaynak da `"kaynak":` biçiminde eklendi.

## ① Basamak sayıları (93 dönem)
- TDV: 1 (Kesriye 1374-1385, `__BOSLUK__` dilimi; TDV «KESRİYE», M. Kiel).
- Ulusal akademik ansiklopedi: 92 — Treccani 80 (Enciclopedia on line / Enciclopedia Italiana / Dizionario di storia), Store norske leksikon 10 (Norveç 9 şehir + Östersund), lex.dk 2 yalnız (Karlskrona; Kristianstad'ın 2 dönemi Treccani Scania ile birlikte). HLS/VLE/Latvijas ansiklopedi sayfalarına gidilmedi (Treccani+SNL+lex yetti).
- Britannica 1911 (KISMİ DESTEK): 0.
- Ortak ülke/bölge notu, `[ÜLKE GENELİ: şehre özgü teyit yok]` önekli: 53 dönem. Ülke/bölge-geneli kaynak parçası içeren, şehre özgü cümle de olan: ek 30 civarı (ör. Ravenna/Rimini 1861, güney İtalya 1861-Gaeta, Kaunas).
- bulunamadı: 0. **Dokunulmayan: 9** (aşağıda).

## Dokunulmayan 9 dönem
Norveç 9 limanı/şehri (Ålesund, Molde, Kristiansund, Røros, Sogndal, Lillehammer, Hamar, Skien, Haugesund) `1537-01-01 → 1814-01-14 danimarka` dönemi: dal içinde başka commit ile `t=1814-02-19`'a değişmiş ve zaten kaynaklı (`NORVEÇ 1814 … [KAYNAKLI]`). Listedeki f/t artık eşleşmiyor; dokunulmadı. Bu 9 yerleşimin 1281-1537 dönemi kaynaklandı.

## ② ÇELİŞKİ (10 dönem; dönemler dokunulmadı, çözülmedi — karar sizde)
1. **Pisa 1281-01-01→1406-10-09 (piza):** Treccani «nel 1399, la città viene addirittura venduta a Gian Galeazzo Visconti (per poi tornare indipendente nel 1402)»; atlas tüm dönemi piza yazıyor.
2. **Reggio Calabria 1281-01-01→1861-02-13 (napoli):** Treccani «la città dopo i Vespri rimase solidale con la Sicilia» ve «passata a questi ultimi per la pace di Caltabellotta (1302)»; atlas 1281'den itibaren napoli.
3. **Reggio Calabria 0553-01-01→1059-01-01 (bizans):** Treccani Arap fethi 901, Langobard Landolfo 916-918, Palermo emirleri 1001-27 anlatır; Normanların alışını 1060 verir (atlas bizans, t=1059).
4. **Cosenza 0553-01-01→1059-01-01 (bizans):** Treccani Calabria/Cosenza «annesso al ducato di Benevento e poi al principato di Salerno (847)», Bizans'ın yeniden alışı 9. yy.
5-7. **Cēsis, Daugavpils, Rēzekne 1917-11-07→1918-11-18 (sovyet-rusya):** Treccani Lettonia: Livonya/Kuronya «occupate dai Tedeschi nella Prima guerra mondiale», bağımsızlık 18 Kasım 1918.
8. **Šiauliai 1917-11-07→1918-02-16 (sovyet-rusya):** Treccani Lituania: 1915'ten Alman işgali; Şubat 1918 Litvanya devletinin yeniden ilanı.
9. **Sion 1417-01-01→2000-12-31 (isvicre)** ve 10. **Martigny 1475-01-01→2000-12-31 (isvicre):** Treccani Sion/Vallese: piskoposluk yönetimi 1798'e dek, 1802-10 bağımsız cumhuriyet, 1810-13 Fransız Simplon départementı, 1815'ten Konfederasyon.

## ③ NOT/BEYAN (68 dönemde; düzeltme yok), başlıcaları
- **Yıl farkı:** Pisa/Lucca Langobard girişi 569/570 (atlas 568); Ostrogot sonu Ekim 552 (atlas 553); Reggio'nun Normanlara geçişi 1060 (atlas 1059); Ancona papalık iadesi 1815 (atlas f=1814-04-16); Kaunas Rusya'ya katılış 1796 (atlas 1795-10-24); Novgorod 1475/1480 (atlas 1478-01-15); Innsbruck/Tirol Viyana Kongresi 1815 (atlas 1814-06-03); Bohemya Habsburg tahtı 29 Ekim 1526 (atlas 23 Ekim); Letonya 4 Ağustos 1940 (atlas 5 Ağustos); Roskilde 26 Şubat 1658 (kaynak takvimi belirtmez; atlas 1658-03-08).
- **Devlet etiketi:** Tirol/Vorarlberg 1805-14 kaynakta Bavyera (atlas `almanya`); Sion 1281-1417 Kutsal Roma feodu olarak piskoposluk; Kesriye 1374-85 dilimin sahibi Musacci Arnavut Prensliği (atlas `__BOSLUK__`; d değiştirilmedi).
- **Gün kaynakta yok (yıl düzeyinde):** Odoakar 476, Teodorik 493, Langobard sonu 774, Napoli Krallığı sonu (Şubat 1861), Çekoslovakya 1918/1939, Avusturya 1918, Siena 1555/1557, Kristianstad/Karlskrona 1658, Savoya 1860 (kaynak Mart 1860; atlas 14 Haziran), Hulst/Terneuzen Burgonya 1384/1477.
- **Aynı gün teyit:** Ravenna 18 Mart 1860, Ancona 29 Eylül 1860, Kaunas 18 Ağustos 1915 (kuşatmanın son günü), Letonya 18 Kasım 1918, Ravenna/Rimini t=17 Mart 1861.
- Siena 1530'dan itibaren imparatorluk garnizonu; Bari 1464'ten Sforza feodu; Jämtland 1645'e dek Norveç tacı altında (atlas dilimi 1537'de biter).

## ④ KISMİ DESTEK (Britannica 1911) ve ÜLKE GENELİ listesi
- KISMİ DESTEK: yok (0).
- ÜLKE GENELİ / BÖLGE DÜZEYİ öneki (şehre özgü cümle yok, 53 dönem): Pisa ve Lucca geç antik/erken Orta Çağ (Toscana bölgesi + ülke notları; 11 dönem), Cosenza/Reggio 476-553 (4), Norveç 9 şehir 1281-1537 (9), Hulst/Terneuzen Burgonya (2), Enschede (1), Clervaux (1), Letonya 1940-41 (6 şehir), Šiauliai 1940-41 (1), Petseri/Abrene 1281-1348 (2), Petseri 1917-1920 (1), Porkhov/Şelon (4), České Budějovice/Třeboň (4), Feldkirch (2), Landeck/Lienz (4), Bourg-Saint-Maurice/Thonon/Annemasse (3). Şehre özgü kanıtı olan ve etiketsiz bırakılanlar: Ravenna, Rimini, Ancona, Siena, Pisa (Meloria/1406), Lucca Langobard, güney İtalya şehirleri, Kaunas, Innsbruck, Bregenz, Sion/Martigny, Kesriye, Östersund (SNL Jämtland).

## ⑤ Çekilemeyenler
- Treccani: Tirolo, Ivan IV, Gaeta, Felkirch/Lienz/Landeck/Hulst/Terneuzen/Martigny/Thonon/Annemasse/Clervaux/Jelgava/Rēzekne/Porkhov/Petseri şehir maddeleri çekilemedi (genel hata sayfası) — bölge/ülke maddesine (Vorarlberg, Innsbruck, Toscana, Lettonia, Russia vb.) dayanıldı, ÜLKE GENELİ etiketiyle.
- Treccani Cesis maddesi başka bir kısaltma çıktı (CESIS), kullanılmadı. Treccani Daugavpils/Šiauliai/Liepāja/Ventspils kısa madde: tarih içermiyor; ülke maddeleri kullanıldı.
- snl.no Brömsebro, lex.dk Roskilde ikinci URL (404). HLS ve ulusal Baltık ansiklopedilerine gidilmedi.
- Öneri: Sion/Martigny (isvicre 1417/1475→2000), Reggio Calabria ve Cosenza (bizans), Pisa (1399-1402), Letonya/Litvanya 1917-18 dönemleri için ÇELİŞKİ kararı; ayrıca Karlskrona'nın 1281-1658 dönemi (şehir kuruluşu kaynakta doğrulanmadı) mükerrer/var-mıydı denetimi için işaretlenebilir.

# EPOK-SAHIP-OLCUM-1009 — EPOK diff'leri bugünkü main'de (1edf7f9a) 2s AÇIK'ı ne yapar?

> 9 Ekim 2026 · makine UMIT · ağaç `C:\atlas-epok2` (detached `origin/main` = `1edf7f9a`)
> YALNIZ ÖLÇÜM. Commit/push yok.

## ① ÖNGÖRÜ — ölçümden ÖNCE yazıldı

- Taban (1edf7f9a): 2s AÇIK **184** (aab05acd'nin "sonra" ölçümü; Gürcistan 2s AÇIK'ı oynatmadı varsayımı).
- EPOK'un eski tabandaki ölçümü 185→185 (KOORD+KRONO net 0). KOORD 6 GÜN birimi açar,
  KRONO 6'sını kapatır; Mostar'ın kapattığı kırılma Hersek 1483 (Mostar) — EPOK'un dokunduğu
  14 kayıt + Veles ile coğrafî/zamansal ortaklığı YOK (Levant/Yemen/Adriyatik/Anadolu, 1281-1454).
- ⇒ Öngörü: **(b) değil, (a) da değil — net 0**: SONRA 2s AÇIK **184** (≤ tavan 184), fark listesi
  BOŞ (açılan 0 · kapanan 0). Koordinatörün "185 > 184" kaygısı, eski tabandaki 185'in tavanla
  eşit olmasından okunan bir çıkarım; eski taban 185'i Mostar kalemini de içeriyordu.
  Eğer +1 çıkarsa en olası aday Draç/Korfu/Malta 1282-03-30 GÜN biriminin KRONO'yla kapanmaması.
- 5a-muaf 1→2 (Çanakkale) ⇒ çıkış 1 (tavan 1). 4d 324→323 (taban 4d'nin bugün de 324 olduğu varsayımıyla).
- D8: worktree'de `devletler_harita.js`/`donemler.js` yok ⇒ `kodla.py coz-c` ile `*_parcalar`dan
  kurulabilir; kurulursa çıkış taban 2 (yalnız bilinen D8 körlüğü) bekliyorum.

---

## ② Yöntem
- Ağaç `C:\atlas-epok2` = `origin/main` `1edf7f9a`. D8 girdileri EPOK'un yoluyla kuruldu:
  `py arac/kodla.py coz-c data data/devletler_harita.js devlet` (172,7 MB) ve `… donemler.js donem`
  (58,5 MB) ⇒ D8a/8b ÖLÇÜLDÜ (8a 1505/1508 · 8b 82/82); kalan çıkış-2 sebebi bilinen
  "D8 körlük 18 (hat,gün)" — EPOK tabanındakiyle aynı kova.
- 2s AÇIK `--ayrinti`de basılmıyor (yalnız 2/2i/2t basılır) ⇒ liste, `denetle.py`nin KENDİ
  işlevleriyle (`degismez2(..., ("s",), yer_sarti=True)` → `kapsam_disi` → `yil_temsili_ayir`,
  çekirdek evren = `KUYRUK_DOSYALARI` dışı) döküldü; sayılar `denetle.py` satırıyla birebir
  tuttu (taban 1721/184/791/166, sonra 1724/184/792/170). Betik scratchpad'de, depoya girmedi.
- ⚠️ Tuzak: `denetle.py > dosya` yönlendirmesi dosyanın başını NUL baytla ezdi (alt süreç aynı
  dosyaya yazıyor); `| cat > dosya` ile düzgün alındı.
- Her iki diff `git apply --check` temiz (1edf7f9a üstünde).

## ③ 2s AÇIK — önce/sonra, ADIYLA fark

| koşu | 2s yabancı | **AÇIK** | kapsam dışı | yıl-temsilî |
|---|---|---|---|---|
| taban 1edf7f9a | 1721 | **184** (tavan 184) | 791 | 166 |
| + KOORD | 1724 | **186** | 792 | 170 |
| + KOORD + KRONO | 1724 | **184** ✓ | 792 | 170 |

- **KOORD yalnız:** açılan 2 GÜN birimi — `1282-03-30 Draç · Korfu · Malta` ve `1291-05-18 Akkâ · Beyrut · Sayda`.
- **KOORD+KRONO vs taban: AÇIK listesi BİREBİR AYNI** (184 satırın gün + ad listesi `diff` 0 satır).
  Açılan 0 · kapanan 0. KRONO'nun iki maddesi iki birimi YER anarak kapattı (2sk YER 2073→2079).
- **Mostar'ın kapattığı kırılma:** `1466-06-01 kayıp Trebinye` (aab05acd veri kısmı ters
  uygulanınca AÇIK'a geri dönen TEK kalem; Trebinye günü 1466-06-01 → 1466-01-01 yapılıp
  yıl-temsilî kovasına geçmişti). Bu kalem EPOK'lu farkta **GERİ GELMİYOR**.
- **Çapraz sınav (Mostar'sız taban = eski taban eşdeğeri):** Mostar ters + EPOK yok ⇒ 185;
  Mostar ters + EPOK ⇒ 185, listeler BİREBİR aynı. ⇒ EPOK her iki tabanda da net **0**.

### Hüküm: **(c)**
EPOK hiçbir zaman +1 getirmedi. EPOK raporundaki "185 (tavan 185)" EPOK'un kendi etkisi
değil, eski tabanın kendi sayısıydı (o 185'in içinde Trebinye 1466-06-01 vardı). Mostar o
kalemi kapattı, tavan 184'e indi; EPOK bugünkü main'e inerse 2s AÇIK **184 = tavan 184**,
2s'te çıkış 1 YOK. (a) yanlış: yeni AÇIK yok (Levant 1291 ve Adriyatik 1282 KRONO ile kapanıyor).
(b) yanlış: EPOK'un +1'i yok ki Mostar'ınkiyle aynı kalem olsun. **2s tavanına dokunulmaz.**

### Yan kovalar (ihlal değil)
- Yıl-temsilî 166→170: YENİ kova `1289-01-01 Trablusşam` · `1299-01-01 Hama` · `1303-01-01 Diyarbakır` ·
  `1368-01-01` (Draç, Borneo noktalarıyla AYNI güne düştü — o kova önce KAPSAM DIŞIydı, Draç
  girince kapsam içine taşındı); mevcut kovalara katılan `1330-01-01 Köprülü (Veles)` · `1386-01-01 Korfu`.
  Tavan 151 zaten aşılmış (166), hüküm etkilenmez — ama +4 borç.
- Kapsam dışı 791→792: −`1368-01-01` (yukarıdaki taşınma) +`1454-01-01` +`1517-01-01` (Aden/Zebîd, Yemen).

## ④ Öteki değişmezler — önce → sonra (KOORD+KRONO, tavan yazılmadan)

| değişmez | önce | sonra | not |
|---|---|---|---|
| **5a-muaf** | 1 (tavan 1) ✓ | **2 ✗** | yeni: Çanakkale `kur:1452` + `devir_beyani` (EPOK-SAHIP-1008, TDV canakkale). LİSTE: Uzunköprü + Çanakkale. **Tek ihlal ⇒ çıkış 1.** |
| **4d** | 324 (beklenen 324) | **323** | çıkan: `Malta napoli 1281-01-01→1530-03-24, künye 1282-03-30` (napoli 24→23 dönem). İyileşme ⇒ tavan 323'e İNMELİ (§3.4③). |
| 1 sahipsiz | 309 | 309 | |
| 2 Osmanlı | 624 / 0 açık | 624 / 0 | |
| 2sk yalnız-taraf | 2250 | 2250 | YER 2073→2079 |
| 2i | 171 / 1 | 171 / 1 | |
| 2t | 13 | 13 | |
| 3z | m: 491 · kd 60 | m: 507 · kd 66 | şema borcu, ihlal değil |
| 4 / 4c / 4s / 5 | 0 / 127 / 5 / 0 | aynı | |
| 5c | 2450 | 2449 | Çanakkale `kur:` aldı |
| 7 enklav 🧊 | 733 | 734 | ihlal sayılmıyor |
| kaynaksız `s:` | 1912 | 1905 | iyileşme |
| 8a / 8b | 1505 / 82 | aynı | motor çıktısını ölçer — veri diff'i koşu olmadan görünmez |
| kronoloji madde | 2208 | 2210 | |
| **çıkış** | **2** (yalnız D8 körlük) | **1** (5a-muaf) | tavanlar yazılırsa 2'ye döner (D8 körlük, tabanla aynı kova) |

**Öngörü ↔ ölçüm:** 2s net 0 / fark listesi boş — TUTTU. 5a 1→2 ve 4d 324→323 — TUTTU.
D8 kuruldu — TUTTU. Öngörmediğim: Draç'ın 1368 Borneo kovasını kapsam dışından yıl-temsilîye taşıması.

## Tavan önerisi (§3.4: işçi önerir, koordinatör yazar; diff'le AYNI commit)
- `5a-muaf` 1 → **2** (LİSTE: Uzunköprü · Çanakkale)
- `4d` 324 → **323**
- `BEKLENEN_ACIK_S` **184 kalır** (değişmez).
- EPOK raporunun BOYA ŞARTI (6 renksiz kimlik, resuli/tahiri renk çakışması) bu ölçümün kapsamı dışında, geçerliliğini korur.

## Ek — taban 1edf7f9a 2s AÇIK TAM LİSTESİ (184; gün · ad). KOORD+KRONO sonrası liste bununla birebir aynı.
```
1311-03-15  Tırhala | Yenişehir (Larissa)
1324-06-19  Kalyari (Cagliari)
1345-09-25  Serez
1354-03-02  Bolayır | Maydos (Eceabat)
1366-08-01  Bolayır | Maydos (Eceabat)
1371-09-26  Dedeağaç (Alexandroupoli) | Malak Dervent (Lalkovo) | Uluköy (Akçadam) | Umur Fakih (Fakia) | Uzunköprü
1376-09-01  Bolayır | Maydos (Eceabat)
1381-06-01  İshaklı
1383-09-19  Gevgili (Gevgelija) | Kılkış (Avrathisar)
1387-04-09  Lanzaka (Lagkadas) | Praviște (Eleftheroupoli)
1387-11-01  Bistâm | Burûcird | Dâmgan | Erdekân | Erdistan | Gulpâygân | Hemedan | Isfahan | Kasr-ı Şîrîn | Kazvin | Kirmanşah | Kum | Kâşân | Nihâvend | Nâin | Simnân | Sâve | Tahran | Yezd
1392-11-01  Akçakoca | Devrek | Eflani | Karadeniz Ereğli
1393-06-01  Ladik (Amasya) | Merzifon | Osmancık | Tokat | Çorum
1393-09-01  Babadağı (Babadag) | İshakçı (Isaccea)
1395-08-01  Beykoz
1402-07-28  Ahtapolu (Ahtopol) | Aksaray | Akşehir | Alaşehir | Anadolu Hisarı | Arapkir | Ayasuluk (Selçuk) | Balat (Palatia) | Behisni (Besni) | Beykoz | Birgi | Bolayır | Burdur | Debre (Dibra) | Dedeağaç (Alexandroupoli) | Demirköy | Dereköy (Kırklareli) | Doyran | Elhova (Elhovo) | Elmalı | Emet (Eğrigöz) | Ermenek | Erzincan | Eğirdir | Ferecik (Feres) | Filorina (Florina) | Finike | Gevgili (Gevgelija) | Görice (Korçë) | Havsa | Hısn-ı Mansûr (Adıyaman) | Ilgın | Karabiga | Karaferye (Veria) | Karahisâr-ı Sâhib (Afyon) | Karapınar | Karpuzlu (Yenikarpuzlu) | Kaş (Antiphellos) | Kelkit | Kemah | Kesriye (Kastoria) | Kofçaz | Kâhta | Köprülü (Veles) | Küfkaynapınarı (Azatlı) | Kılkış (Avrathisar) | Ladik (Amasya) | Lalapaşa | Lanzaka (Lagkadas) | Malak Dervent (Lalkovo) | Malko Tırnova | Maydos (Eceabat) | Meriç (İpsala kuzeyi) | Merzifon | Milas | Mustafapaşa (Svilengrad) | Orestiada (Kumçiftliği) | Osmancık | Praviște (Eleftheroupoli) | Prevadi (Provadia) | Rezve (Rezovo) | Saroz kuzey kıyısı | Seydişehir | Simav | Sofulu (Soufli) | Stérna | Tavşanlı | Tire | Tosya | Távri | Uluborlu | Uluköy (Akçadam) | Umur Fakih (Fakia) | Ustrumca (Strumica) | Uzunköprü | Uşak | Vize | Vodina (Edessa) | Yalvaç | Yenice-i Vardar | Çeşme | Üsküdar | İshaklı | İskeçe | İğneada | İştip (Štip) | Şarköy | Şehirköy (Pirot)
1402-09-15  Aksaray | Burdur | Denizli | Ermenek | Eğirdir | Ilgın | Isparta | Konya | Söke | Uluborlu | Yalvaç
1403-02-01  Ahtapolu (Ahtopol) | Rezve (Rezovo) | İğneada
1404-03-01  Akyazı | Anadolu Hisarı | Bergama | Beykoz | Eskişehir | Gebze | Hereke | Kandıra | Karabiga | Karacahisar | Pelekanon (Eskihisar) | Samandıra | Üsküdar | İzmit
1406-10-21  Gence
1410-06-15  Bolayır | Debre (Dibra) | Dedeağaç (Alexandroupoli) | Demirköy | Dereköy (Kırklareli) | Dimetoka | Doyran | Drama | Edirne | Elhova (Elhovo) | Eski Zağra (Stara Zagora) | Ferecik (Feres) | Filibe | Filorina (Florina) | Gelibolu | Gevgili (Gevgelija) | Görice (Korçë) | Gümülcine | Havsa | Karaferye (Veria) | Karpuzlu (Yenikarpuzlu) | Kavala | Kesriye (Kastoria) | Keşan | Kofçaz | Köprülü (Veles) | Köstendil | Küfkaynapınarı (Azatlı) | Kılkış (Avrathisar) | Kırklareli | Lalapaşa | Lanzaka (Lagkadas) | Lüleburgaz | Malak Dervent (Lalkovo) | Malkara | Malko Tırnova | Manastır | Maydos (Eceabat) | Meriç (İpsala kuzeyi) | Mustafapaşa (Svilengrad) | Nevrokop (Gotse Delçev) | Niğbolu | Niş | Ohri | Orestiada (Kumçiftliği) | Petriç | Plevne | Praviște (Eleftheroupoli) | Prevadi (Provadia) | Rusçuk | Saroz kuzey kıyısı | Serez | Sofulu (Soufli) | Sofya | Stérna | Tatarpazarcığı | Tekirdağ | Távri | Tırhala | Tırnova | Uluköy (Akçadam) | Umur Fakih (Fakia) | Ustrumca (Strumica) | Uzunköprü | Varna | Vidin | Vize | Vodina (Edessa) | Yenice-i Vardar | Yenişehir (Larissa) | Çimpe | Çirmen | Çorlu | Üsküp | İhtiman | İpsala | İskeçe | İzdin (Lamia) | İştip (Štip) | Şarköy | Şehirköy (Pirot) | Şumnu
1411-02-17  Absu (Hypsu) | Adranos (Orhaneli) | Akhisar (Pamukova) | Akyazı | Anadolu Hisarı | Ankara | Armutlu | Aydos Kalesi | Ayvalık | Balıkesir | Behramkale (Assos) | Bergama | Beykoz | Biga | Bilecik | Bozüyük | Bursa | Dimbos | Domaniç | Edremit | Erdek | Ermeni Derbendi | Eskişehir | Gebze | Gemlik (Kios) | Geyve | Gölyazı (Apollonia) | Harmankaya | Hereke | Kandıra | Karabiga | Karacahisar | Karamürsel | Karatigin | Karaçepüş | Kestel | Kirmasti (M.Kemalpaşa) | Kite (Kete) | Kulacahisar | Köprühisar (Yenişehir) | Leblebicihisar | Lefke (Osmaneli) | Marmaracık | Mekece | Mihaliç (Karacabey) | Mudanya | Pazaryeri | Pelekanon (Eskihisar) | Samandıra | Söğüt | Ulubat | Yalova | Yarhisar | Yenişehir (Bursa) | Çanakkale | Üsküdar | İmralı Adası | İnegöl | İzmit | İznik
1412-10-30  Şibenik (Sebenico)
1413-07-05  Absu (Hypsu) | Adranos (Orhaneli) | Akhisar (Pamukova) | Akyazı | Amasya | Anadolu Hisarı | Ankara | Armutlu | Aydos Kalesi | Ayvalık | Balıkesir | Behramkale (Assos) | Bergama | Beykoz | Biga | Bilecik | Bolayır | Bozüyük | Bursa | Debre (Dibra) | Dedeağaç (Alexandroupoli) | Demirköy | Dereköy (Kırklareli) | Dimbos | Dimetoka | Domaniç | Doyran | Drama | Edirne | Edremit | Elhova (Elhovo) | Erdek | Ermeni Derbendi | Eskişehir | Ferecik (Feres) | Filorina (Florina) | Gebze | Gelibolu | Gemlik (Kios) | Gevgili (Gevgelija) | Geyve | Gölyazı (Apollonia) | Görice (Korçë) | Gümülcine | Harmankaya | Havsa | Hereke | Kandıra | Karabiga | Karacahisar | Karaferye (Veria) | Karamürsel | Karatigin | Karaçepüş | Karpuzlu (Yenikarpuzlu) | Kavala | Kesriye (Kastoria) | Kestel | Keşan | Kirmasti (M.Kemalpaşa) | Kite (Kete) | Kofçaz | Kulacahisar | Köprühisar (Yenişehir) | Köprülü (Veles) | Küfkaynapınarı (Azatlı) | Kılkış (Avrathisar) | Kırklareli | Ladik (Amasya) | Lalapaşa | Lanzaka (Lagkadas) | Leblebicihisar | Lefke (Osmaneli) | Lüleburgaz | Malak Dervent (Lalkovo) | Malkara | Malko Tırnova | Manastır | Marmaracık | Maydos (Eceabat) | Mekece | Meriç (İpsala kuzeyi) | Merzifon | Mihaliç (Karacabey) | Mudanya | Mustafapaşa (Svilengrad) | Nevrokop (Gotse Delçev) | Ohri | Orestiada (Kumçiftliği) | Osmancık | Pazaryeri | Pelekanon (Eskihisar) | Petriç | Praviște (Eleftheroupoli) | Prevadi (Provadia) | Rusçuk | Samandıra | Samsun | Saroz kuzey kıyısı | Serez | Sivas | Sivrihisar | Sofulu (Soufli) | Stérna | Söğüt | Tekirdağ | Tokat | Távri | Tırhala | Ulubat | Uluköy (Akçadam) | Umur Fakih (Fakia) | Ustrumca (Strumica) | Uzunköprü | Varna | Vize | Vodina (Edessa) | Yalova | Yarhisar | Yenice-i Vardar | Yenişehir (Bursa) | Yenişehir (Larissa) | Çanakkale | Çankırı | Çimpe | Çirmen | Çorlu | Çorum | Üsküdar | Üsküp | İmralı Adası | İnegöl | İpsala | İskeçe | İzdin (Lamia) | İzmit | İznik | İştip (Štip) | Şarköy | Şumnu
1430-10-01  Ayasaranda (Sarandë)
1439-08-27  Kragujevac | Yagodina (Jagodina) | Çaçak
1443-11-21  Arlon | Bastogne | Neufchâteau (Belçika) | St. Vith (Sankt Vith) | Virton | Wiltz
1451-06-30  Bordo
1453-05-29  Alonisos | Batnoz (Patmos) | Boğaziçi (Rumeli yakası) | Silivri | İskiathos | İskiros (Skyros) | İskopelos
1456-06-01  Kili
1459-06-20  Kragujevac | Yagodina (Jagodina) | Çaçak
1461-06-01  Akçakoca | Bolu | Devrek | Eflani | Karadeniz Ereğli | Konurapa (Düzce) | Mudurnu | Tosya
1470-07-12  Karistos (Kızılhisar)
1475-06-06  Maykop (Çerkezya) | Soçi (Sâşe) | Tuapse | İnkirman (Kalamita)
1478-01-15  Arhangelsk | Kandalakşa | Kola | Lovozero (Luyavr) | Mezen | Novgorod | Petsamo (Peçenga) | Ponoy | Porkhov | Ust-Tsilma | Varzuga | Vologda | Şelon havzası (Soltsı)
1479-01-20  Barselona | Kalyari (Cagliari) | Madrid | Mayorka (Palma) | Menorka (Mahon) | Sasari (Sassari) | Sevilla | Valensiya | İbiza
1482-03-27  Arlon | Bastogne | Neufchâteau (Belçika) | St. Vith (Sankt Vith) | Virton | Wiltz
1500-08-01  Bryansk
1507-05-01  Esterâbâd (Gürgân)
1507-05-24  Dihistan ovası (Meşhed-i Misriyân) | Tebbes | Zerenc (Sîstan)
1510-12-02  Bocnûrd | Bîrcend | Dihistan ovası (Meşhed-i Misriyân) | Ebîverd | Esferâyin | Esterâbâd (Gürgân) | Hürmüz Adası | Kelât-ı Nâdirî | Kişm (Qeshm) | Kâin | Kûçân | Meşhed | Nesâ | Nîşâbur | Sebzevâr | Serahs | Tebbes | Turbet-i Câm | Turbet-i Haydariye | Turşiz (Kâşmer) | Tûs | Zerenc (Sîstan)
1514-08-01  Smolensk
1514-09-06  Ardahan | Doğubayazıt | Erzincan | Siirt
1515-09-19  Babū | Cumai (Birlikköy) | Ḩīmū
1516-05-01  Çemişgezek
1516-08-24  Akra | Arapkir | Behisni (Besni) | Birecik | Ceylanpınar | Divriği | Duhok | Hısn-ı Mansûr (Adıyaman) | Jadlā’ | Kâhta | Mercihamis (Yurtbağı) | Qaţţīnah | Rewândiz | Sincan | Sincar | Telafer | Tirwānīsh | Zaho | İmâdiye (Amêdî)
1517-05-19  Benhâ (Kalyûbiye) | Bilbîs (Şarkiye) | Bürüllüs (Baltîm) | Demenhûr (Damanhur) | Dessûk | Ebûkîr | El-Arîş | Fâkûs | Kafrüşşeyh | Katye | Mahalletülkübrâ | Mansûre | Menzile | Mersâ Matruh | Mît Gamr | Sellûm | Sâlihiyye | Tanta | Şibînülkûm (Menûfiye)
1517-07-06  Bedir | Hurma (Tâif doğusu) | Râbiğ | Türabe | Zebîd
1523-06-06  Borås | Härnösand | Iisalmi | Joensuu | Jokkmokk | Jukkasjärvi | Jyväskylä | Kokkola | Kuopio | Lappeenranta | Luleå | Mikkeli | Mora | Norrköping | Nurmes | Nyköping | Oulu | Pori | Rovaniemi | Savonlinna | Sodankylä | Stokholm | Tampere | Tornio | Umeå | Vaasa | Västerås | Växjö | İnari
1526-08-29  Bosna Brod'u (Bosanski Brod) | Bosna Dubiçası (Bosanska Dubica) | Bosna Novi'si (Bosanski Novi) | Bregenz | Breslau (Wrocław) | Brno | Eperjes (Prešov) | Feldkirch | Freistadt | Fülek (Fiľakovo) | Glatz (Kłodzko) | Gleiwitz (Gliwice) | Gmünd (Aşağı Avusturya) | Innsbruck | Jasenovaç (Jasenovac) | Jeseník (Freiwaldau) | Kassa (Košice) | Kattowitz (Katowice) | Kostayniçe (Kostajnica) | Krupa (Bosanska Krupa) | Landeck | Liegnitz (Legnica) | Lienz | Linz | Lugos (Lugoj) | Maribor (Marburg) | Munkács (Mukacheve) | Nitra (Nyitra) | Olomouc | Oppeln (Opole) | Sisak | Tokaj | Ungvár (Uzhhorod)
1526-09-01  Brassó (Braşov) | Debrecen | Erdel (Kaloşvar) | Erdel Belgradı (Gyulafehérvár) | Segesvár (Sighişoara) | Varad (Oradea) | Yanova (Ineu)
1526-10-22  Broumov (Braunau) | Hradec Králové | Prag | Třeboň (Wittingau) | České Budějovice (Budweis)
1534-09-22  Annaba
1534-12-04  Kasr-ı Şîrîn | Kifri | Tuz Hurmatu
1540-10-02  Nadin | Vrana (Urana)
1547-01-16  Abrene (Pıtalovo) | Arhangelsk | Bryansk | Kandalakşa | Kola | Kursk | Lovozero (Luyavr) | Mezen | Moskova | Nijniy Novgorod | Novgorod | Novgorod-Seversk | Orel | Petsamo (Peçenga) | Petseri (Peçori) | Ponoy | Porkhov | Pustozersk | Putivl | Ryazan | Smolensk | Tula | Ust-Tsilma | Varzuga | Vologda | Çernigov | Şelon havzası (Soltsı)
1548-08-24  Bacirge (Esendere) | Balıklı | Gōrabī | Kilise | Şemdinli (Şemdinni) | Şeyhrumi (Yücelen)
1550-06-12  Helsinki
1551-07-26  Brassó (Braşov) | Erdel Belgradı (Gyulafehérvár) | Segesvár (Sighişoara)
1552-10-02  Kazan | Simbirsk
1566-04-15  Folegandros | Kimolos (Argentiera) | Koçbaba (Serifos) | Murted (Kea) | Namfi (Anafi) | Santorini | Sifnos (Yavuzca) | Termiye (Kythnos)
1578-08-01  Ts’q’altbila | Zazalo
1578-08-09  Batum | Hulo (Acara) | Makhalak’auri | Murvaneti | Sohum
1591-04-13  Cenne (Djenné) | Gao | Timbuktu
1621-09-15  Cēsis (Wenden) | Pärnu | Riga | Tartu (Dorpat)
1622-05-01  Bender Abbas (Gamrûn) | Hürmüz Adası | Kişm (Qeshm) | Ras el-Hayme (Cülfâr) | Şârika
1623-11-28  Erbil | Halepçe | Kasr-ı Şîrîn | Kifri | Tuz Hurmatu | Şehrizor
1635-10-22  Seyûn (Sayvan)
1636-04-17  Tambov
1638-12-24  Halepçe | Kifri | Tuz Hurmatu
1638-12-25  Erbil
1650-01-26  Maskat | Suhâr | Sûr
1654-01-18  Sloboda bozkırı
1663-09-24  Nitra (Nyitra)
1672-10-18  Braslav (Bratslav) | Vinnitsa (Vinnytsia)
1682-09-16  Eperjes (Prešov) | Fülek (Fiľakovo) | Kassa (Košice) | Munkács (Mukacheve) | Tokaj | Ungvár (Uzhhorod)
1685-08-19  Nitra (Nyitra)
1686-09-30  Sin (Sinj)
1687-08-01  Elafonisos (Cervi) | Mora (Tripoliçe)
1687-08-06  İnebahtı
1687-08-12  Brassó (Braşov) | Erdel Belgradı (Gyulafehérvár) | Segesvár (Sighişoara)
1687-09-06  Baç (Bács) | Varadin (Petrovaradin)
1687-09-29  Ösek (Osijek)
1687-09-30  Herseknovi (Herceg Novi)
1688-06-01  Lugos (Lugoj)
1690-09-09  Yagodina (Jagodina)
1698-12-13  Lindi | Mikindani | Pangani
1699-01-26  Bar (Podolya) | Braslav (Bratslav) | Gyula (Göle) | Jasenovaç (Jasenovac) | Kamaniçe | Kostayniçe (Kostajnica) | Meciboj (Mejibuji) | Nadin | Uman | Vinnitsa (Vinnytsia) | Vrana (Urana) | Yazlofça (Yazlovets) | Çehrin (Çigirin)
1717-08-18  Yagodina (Jagodina)
1718-07-21  Ayamavra (Lefkada) | Bosna Brod'u (Bosanski Brod) | Bosna Dubiçası (Bosanska Dubica) | Krayova (Craiova) | Rimnik (Râmnicu Vâlcea) | Turnu Severin | Tırgu Jiu | Çuha Adası (Kythira)
1720-08-02  Annemasse | Aosta | Bourg-Saint-Maurice | Thonon
1722-08-08  Ağraham burnu
1723-10-01  Kasr-ı Şîrîn
1735-03-21  Salyan
1735-08-23  Ağraham burnu
1736-09-02  Çelyabinsk
1739-09-18  Krayova (Craiova) | Rimnik (Râmnicu Vâlcea) | Turnu Severin | Tırgu Jiu | Yagodina (Jagodina)
1739-09-28  Bosna Brod'u (Bosanski Brod) | Bosna Dubiçası (Bosanska Dubica)
1772-08-05  Elbing (Elbląg)
1774-07-21  Anapa | Bozkır (Deşt-i Kıpçak) | Camboyluk bozkırı | Kabartay (Nalçik) | Kerç | Kuban (Yekaterinodar) | Kuban Nogay bozkırı | Kuban deltası bozkırı | Kızıkermen (Gazi Kerman) | Maykop (Çerkezya) | Soçi (Sâşe) | Stavropol–Kuma bozkırı | Taman | Tuapse | Yedisan bozkırı | Yediçkul bozkırı | Yenikale
1775-06-16  Zaporojye Seçi
1790-04-16  Orsova (Eski Orsova)
1792-09-12  Mersa'l-Kebîr | Oran
1795-04-01  Cübeyl | Katîf | Ukayr (Uceyr)
1795-10-24  Białystok | Brest-Litovsk | Częstochowa | Grodno | Kielce | Kovel | Lutsk (Łuck) | Pinsk | Radom (Polonya) | Rivne (Równe) | Volodymyr-Volynskyi (Włodzimierz) | Łódź
1798-10-23  Butrint (Butrinto)
1801-09-12  Tiflis | Zagem (Kaheti)
1803-02-25  Brixen (Bressanone)
1805-07-20  Bedir | Yenbu
1805-12-26  Bregenz | Feldkirch | Innsbruck | Landeck | Lienz
1806-11-28  Częstochowa | Kielce | Radom (Polonya) | Varşova | Łódź
1809-10-14  Cetin (Cetingrad) | Drežnik (Drežnik Grad) | Gospić | Karlovac | Kostayniçe (Kostajnica) | Ljubljana | Sisak | Udbina
1811-11-01  Bedir | Yenbu
1812-05-28  Kahul (Cahul) | Orhei | Soroka (Soroca)
1815-01-13  Hurma (Tâif doğusu) | Türabe
1815-06-09  St. Vith (Sankt Vith)
1818-09-01  Hâil
1818-09-09  Buraydâ (Kasîm) | Cübeyl | Dilem (Harc) | Havta (Havtat Benî Temîm) | Hurma (Tâif doğusu) | Katîf | Lahsa | Leylâ (Eflâc) | Necid içi | Nefud çölü | Riyad | Türabe | Ukayr (Uceyr) | Uneyze | Şakrâ
1819-08-13  Havta (Havtat Benî Temîm) | Leylâ (Eflâc)
1821-01-04  Berber | Debbe | Ebû Hamed | Kerma | Merevî
1821-03-25  Egina (Aegina) | Kulluk (Salamis)
1821-08-19  Bâra | Nühûd
1824-06-01  Buraydâ (Kasîm) | Dilem (Harc) | Durban | Havta (Havtat Benî Temîm) | Leylâ (Eflâc) | Necid içi | Nefud çölü | Uneyze | Şakrâ
1829-09-14  Maykop (Çerkezya) | Soçi (Sâşe) | Tuapse
1833-07-28  Mustagānim
1839-05-13  Cicel
1841-05-30  Muaskar
1844-02-12  Batna
1844-03-04  Ayn Temûşent | Bû Sa'âde | Dellîs | Mesîle | Sûk Ahrâs | Tebesse
1849-05-01  Ferasan (Farasan) | Kemeran (Kamaran)
1852-12-04  Gardâye
1859-06-04  Milano
1860-06-14  Annemasse | Bourg-Saint-Maurice | Thonon
1861-02-13  Otranto | Pantelerya | Trapani
1864-05-21  Ayamavra (Lefkada) | Kefalonya | Korfu | Paksos (Paxos) | Zaklise (Zakynthos) | Çuha Adası (Kythira) | İthaki
1866-10-03  Venedik
1868-05-14  Semerkant
1871-01-18  Berlin | Breslau (Wrocław) | Elbing (Elbląg) | Gdansk | Glatz (Kłodzko) | Gleiwitz (Gliwice) | Kattowitz (Katowice) | Klaipėda (Memel) | Königsberg | Liegnitz (Legnica) | Oppeln (Opole) | Poznan | Torun (Toruń)
1878-03-03  Arpaçay (Akyaka) | Artvin | Beri | Borçka | Digor | Hanak | Hulo (Acara) | Iğdır | Küçükperveli | Makhalak’auri | Posof | Sarp | Saylıca | Şavşat
1878-07-13  Babadağı (Babadag) | Yergöğü (Giurgiu) | İbrail | İshakçı (Isaccea)
1880-10-03  Ouesso | İmpfondo
1882-09-01  Bâra
1882-09-07  Kordofan | Kordofan (Ubeyyid)
1883-06-17  Mbandaka
1890-11-23  Wiltz
1891-01-24  Dilem (Harc) | Havta (Havtat Benî Temîm) | Leylâ (Eflâc)
1896-09-01  Bobo-Diulasso | Tenkodogo | Vagadugu (Ouagadougou)
1901-12-20  Kisumu
1902-01-15  Buraydâ (Kasîm) | Dilem (Harc) | Dir'iye (Necid) | Havta (Havtat Benî Temîm) | Leylâ (Eflâc) | Necid içi | Uneyze | Şakrâ
1903-01-15  Sokoto
1909-06-02  Biltine | Fada (Ennedi) | Iriba | Ounianga | Vara (Wara)
1912-10-26  Doyran | Gevgili (Gevgelija) | Köprülü (Veles) | Ustrumca (Strumica) | Üsküp | İştip (Štip)
1912-11-03  Prizren
1913-03-26  Küfkaynapınarı (Azatlı) | Uluköy (Akçadam) | Vize
1913-05-30  Dedeağaç (Alexandroupoli) | Dimetoka | Drama | Elhova (Elhovo) | Ferecik (Feres) | Girit (Resmo) | Gümülcine | Hanya | Kandiye (Girit) | Kavala | Malak Dervent (Lalkovo) | Nevrokop (Gotse Delçev) | Orestiada (Kumçiftliği) | Petriç | Praviște (Eleftheroupoli) | Serez | Sitiye (Sitia) | Sofulu (Soufli) | Stérna | Távri | Umur Fakih (Fakia) | Çirmen | İsfakiye (Sfakia) | İskeçe
1915-06-10  Kemeran (Kamaran)
1916-05-23  Cenîne | El-Fâşir | Nyala
1916-06-10  Hurma (Tâif doğusu) | Türabe
1916-06-16  Râbiğ
1916-07-27  Bedir
1916-09-01  Arusa (Arusha) | Babati | Banyo | Bukoba | Dodoma | Garua (Garoua) | Kalenga (Hehe) | Kilosa | Kilva Kivince | Lindi | Marua (Maroua) | Mbeya | Mikindani | Morogoro | Mosi (Moshi) | Mpvapva | Mvanza | Ngaunder (Ngaoundéré) | Pangani | Rey Buba | Singida | Sumbavanga | Tabora (Kazeh) | Tibati | Ucici (Ujiji)
1917-03-11  Halepçe | Kifri
1917-03-15  Abakan ostrogu | Abalak | Abrene (Pıtalovo) | Ahılkelek (Akhalkalaki) | Ahıska | Ak-Meçit (Perovsk) | Akkirman | Akmescid | Akmola (Akmolinsk) | Akşa (Akşinsk kalesi) | Alay vadisi (bölge) | Alazeya ostrogu | Albazin | Aleksandrovsk (Kuzey Sahalin) | Almatı (Vernıy) | Aluşta | Anapa | Andican | Ardahan | Arhangelsk | Arpaçay (Akyaka) | Artvin | Astara | Astrahan | Ayagöz (Sergiopol) | Ayan | Azak | Açinsk | Ağraham burnu | Aşkale | Bahmut | Bahçesaray | Bakü | Balagansk | Balaklava (Cembalo) | Balasagun (Ak-Beşim) | Bar (Podolya) | Baraba bozkırı | Barguzin | Barnaul | Batum | Bauntovsk | Bayburt | Başkurt toprakları (İdil-Ural) | Belgorod | Bender | Berde (Karabağ) | Berdiçev (Berdychiv) | Berezov | Beri | Białystok | Biysk | Blagoveşçensk | Bodaybo | Bolgrad (Bolhrad) | Bolşeretsk | Borisoglebsk | Borçka | Bozkır (Deşt-i Kıpçak) | Braslav (Bratslav) | Bratsk ostrogu | Brest-Litovsk | Bryansk | Bulun | Camboyluk bozkırı | Cizzah | Cēsis (Wenden) | Dalmatovo | Daugavpils (Dünaburg) | Demyanskoye | Derbend | Digor | Dihistan ovası (Meşhed-i Misriyân) | Don bozkırı (Sal) | Donets bozkırı | Dudinka | Ebîverd | Ereş | Erzincan | Erzurum | Eski Kırım (Solhat) | Essey | Eçmiyadzin | Garabogaz (Bekdaş) | Gence | Gijiga | Gorbitsa (Gorbiçenskaya) | Grodno | Gunt vadisi (bölge) | Gözleve (Kezlev) | Gümrü (Aleksandropol) | Güney Başkurt bozkırı | Habarovka | Hacıbey (Odessa) | Hanak | Hantayka zimovyesi | Harkov | Hatanga | Helsinki | Hokand | Hopa | Horog (Khorog) | Hotin | Hucend | Hulo (Acara) | Iisalmi | Irbit | Irgen | Irgiz (Irgız) | Issık Göl havzası | Iğdır | Jigansk | Jitomir (Zhytomyr) | Joensuu | Jyväskylä | Kabala | Kabansk | Kabartay (Nalçik) | Kahul (Cahul) | Kainsk (Baraba) | Kala-i Vamar (Rûşan) | Kalmuk bozkırı | Kamaniçe | Kamışin | Kamışlov | Kandalakşa | Kansk | Karakul (Pamir, bölge) | Karasubazar | Karkaralinsk (Karkaralı) | Kars | Kaunas | Kazak bozkırı (İşim) | Kazakevičevo (Kazakevičeva stanitsası) | Kazalinsk (Kazalı) | Kazan | Kefe | Kelkit | Kerç | Kiev | Kili | Kirensk | Kliçatak (Suser) | Kokkola | Kola | Kolıvan (Çaus) | Kopal (Kapal) | Kostantinov (Starokostiantyniv) | Kovel | Krasnovodsk (Türkmenbaşı) | Krasnoyarsk | Kremençuk | Kuba | Kuban (Yekaterinodar) | Kuban Nogay bozkırı | Kuban deltası bozkırı | Kuopio | Kurgan | Kursk | Kutaisi | Kuzey Sahalin (bölge) | Kuznetsk | Kökçetav (Kokçetav) | Küçükperveli | Kızıkermen (Gazi Kerman) | Kızıl-Tura | Lappeenranta | Lenkeran | Lovozero (Luyavr) | Lublin | Lubnı | Lutsk (Łuck) | Mahmudâbâd | Makhalak’auri | Mangazeya | Mangışlak | Mankup | Markovo | Maykop (Çerkezya) | Meciboj (Mejibuji) | Merv (Mari) | Mezen | Mikkeli | Minsk | Minusinsk | Moskova | Murvaneti | Nabil kıyısı (bölge) | Nahçıvan | Narva | Narım | Narın (Naryn) | Nelkan | Nerçinsk | Nesâ | Nijnekamçatsk | Nijnekolımsk | Nijneudinsk | Nijniy Novgorod | Nijniy Tagil | Nikolayevsk (Amur ağzı) | Norapat | Novaya Zemlya güneyi | Novaya Zemlya kuzeyi | Novgorod | Novgorod-Seversk | Nurmes | Obdorsk (Salehard) | Ohotsk | Olyokminsk | Olyutorsk (Arhangelsk) | Omsk | Onor | Or Kapı (Ferahkirman) | Ordubad | Orel | Orhei | Ostrogojsk | Ostrovnoye (Anyuy panayırı) | Oulu | Oş | Pamirski Post (Murgab) | Pavlodar (Koryakov) | Pelım ostrogu | Penjinsk ostrogu | Penza | Perm | Petropavlovsk (Kızılcar) | Petrovsk (Saratov) | Petsamo (Peçenga) | Petseri (Peçori) | Pinsk | Podşiversk | Polotsk | Poltava | Ponoy | Pori | Porkhov | Poronay yukarısı (bölge) | Posof | Pustozersk | Putivl | Pärnu | Revan | Riga | Rivne (Równe) | Rize | Rostov (Don) | Rovaniemi | Ryazan | Rykovskoye (Kirovskoye) | Rēzekne (Rositten) | Rın kumulları (Volga-Yayık arası) | Salyan | Samara | Samarovo | Saratov | Sarp | Sarıkamış | Savonlinna | Sayansk ostrogu | Saylıca | Sayram (İsficâb) | Selenginsk | Semerkant | Semipalatinsk | Simbirsk | Sloboda bozkırı | Smolensk | Sodankylä | Sofiysk (Amur) | Soroka (Soroca) | Soçi (Sâşe) | Srednekolımsk | Sretensk | St. Petersburg | Stavropol–Kuma bozkırı | Sudak (Suğdak) | Sumı | Suntar | Surgut | Suzak (Sozak) | Syzran | Sığnak (Sunak Kurgan) | Tallinn (Reval) | Taman | Tambov | Tampere | Tara | Taraz (Evliya-Ata) | Tarki (Tarku) | Tartu (Dorpat) | Tauysk | Taşkent | Telembinsk | Terek deltası (Kızlar) | Tiflis | Tigil | Tobolsk (İsker) | Tomsk | Tornio | Trabzon | Troitsk | Tsaritsyn | Ts’q’altbila | Tuapse | Tula | Turinsk | Turuhansk | Tümen (Çimgi-Tura) | Türkistan (Yesi) | Udskoy ostrogu | Ufa | Uman | Ural eteği | Ust-Kamenogorsk | Ust-Maya | Ust-Olenyok zimovyesi | Ust-Tsilma | Ust-Yansk | Uyandina (Nijneindigirsk) zimovyesi | Vaasa | Varzuga | Vaygaç | Verhneangarsk ostrogu | Verhnekamçatsk | Verhnekolımsk | Verhneudinsk | Verholensk | Verhoturye | Verhoyansk | Vilnius | Vilyuysk | Vinnitsa (Vinnytsia) | Vitebsk | Vitim (Vitimskoye zimov'e / Vitimskiy ostrog) | Vladikavkaz | Vladivostok | Volodymyr-Volynskyi (Włodzimierz) | Vologda | Voloçanka (Voloçanı zimovyesi) | Voronej | Yakutsk | Yalta | Yalutorovsk | Yama zimovyesi | Yamal ucu | Yedisan bozkırı | Yediçkul bozkırı | Yekaterinburg | Yelisavetgrad (Aziz Yelizaveta Kalesi) | Yenikale | Yeniseysk | Yerbogaçen | Zagem (Kaheti) | Zaporojye Seçi | Zaural Başkurt toprakları | Zaysan | Zazalo | Zaşiversk | Zeya (Zeyskiy Sklad) | Zlatoust | Zmeinogorsk | Çehrin (Çigirin) | Çeleken | Çelyabinsk | Çerkask (Razdory) | Çernigov | Çimkent | Çita | Çuguyev | Özi | İlimsk (Ilimskiy ostrog) | İlyinsk | İmperator limanı | İnari | İnkirman (Kalamita) | İrkutsk | İsmail | İzyum | İşkâşim (Pamir) | Şadrinsk | Şamahı | Şavşat | Şeki (Nuha) | Şelon havzası (Soltsı) | Şuşa | Şâbüran | Šiauliai
1917-11-07  Abakan ostrogu | Abalak | Abrene (Pıtalovo) | Ahılkelek (Akhalkalaki) | Ahıska | Ak-Meçit (Perovsk) | Akkirman | Akmescid | Akmola (Akmolinsk) | Akşa (Akşinsk kalesi) | Alay vadisi (bölge) | Alazeya ostrogu | Albazin | Aleksandrovsk (Kuzey Sahalin) | Almatı (Vernıy) | Aluşta | Anapa | Andican | Ardahan | Arhangelsk | Arpaçay (Akyaka) | Artvin | Astara | Astrahan | Ayagöz (Sergiopol) | Ayan | Azak | Açinsk | Ağraham burnu | Aşkale | Bahmut | Bahçesaray | Bakü | Balagansk | Balaklava (Cembalo) | Balasagun (Ak-Beşim) | Bar (Podolya) | Baraba bozkırı | Barguzin | Barnaul | Batum | Bauntovsk | Bayburt | Başkurt toprakları (İdil-Ural) | Belgorod | Bender | Berde (Karabağ) | Berdiçev (Berdychiv) | Berezov | Beri | Białystok | Biysk | Blagoveşçensk | Bodaybo | Bolgrad (Bolhrad) | Bolşeretsk | Borisoglebsk | Borçka | Bozkır (Deşt-i Kıpçak) | Braslav (Bratslav) | Bratsk ostrogu | Brest-Litovsk | Bryansk | Bulun | Camboyluk bozkırı | Cizzah | Cēsis (Wenden) | Dalmatovo | Daugavpils (Dünaburg) | Demyanskoye | Derbend | Digor | Dihistan ovası (Meşhed-i Misriyân) | Don bozkırı (Sal) | Donets bozkırı | Dudinka | Ebîverd | Ereş | Erzincan | Erzurum | Eski Kırım (Solhat) | Essey | Eçmiyadzin | Garabogaz (Bekdaş) | Gence | Gijiga | Gorbitsa (Gorbiçenskaya) | Grodno | Gunt vadisi (bölge) | Gözleve (Kezlev) | Gümrü (Aleksandropol) | Güney Başkurt bozkırı | Habarovka | Hacıbey (Odessa) | Hanak | Hantayka zimovyesi | Harkov | Hatanga | Helsinki | Hokand | Hopa | Horog (Khorog) | Hotin | Hucend | Hulo (Acara) | Iisalmi | Irbit | Irgen | Irgiz (Irgız) | Issık Göl havzası | Iğdır | Jigansk | Jitomir (Zhytomyr) | Joensuu | Jyväskylä | Kabala | Kabansk | Kabartay (Nalçik) | Kahul (Cahul) | Kainsk (Baraba) | Kala-i Vamar (Rûşan) | Kalmuk bozkırı | Kamaniçe | Kamışin | Kamışlov | Kandalakşa | Kansk | Karakul (Pamir, bölge) | Karasubazar | Karkaralinsk (Karkaralı) | Kars | Kaunas | Kazak bozkırı (İşim) | Kazakevičevo (Kazakevičeva stanitsası) | Kazalinsk (Kazalı) | Kazan | Kefe | Kelkit | Kerç | Kiev | Kili | Kirensk | Kliçatak (Suser) | Kokkola | Kola | Kolıvan (Çaus) | Kopal (Kapal) | Kostantinov (Starokostiantyniv) | Kovel | Krasnovodsk (Türkmenbaşı) | Krasnoyarsk | Kremençuk | Kuba | Kuban (Yekaterinodar) | Kuban Nogay bozkırı | Kuban deltası bozkırı | Kuopio | Kurgan | Kursk | Kutaisi | Kuzey Sahalin (bölge) | Kuznetsk | Kökçetav (Kokçetav) | Küçükperveli | Kızıkermen (Gazi Kerman) | Kızıl-Tura | Lappeenranta | Lenkeran | Lovozero (Luyavr) | Lublin | Lubnı | Lutsk (Łuck) | Mahmudâbâd | Makhalak’auri | Mangazeya | Mangışlak | Mankup | Markovo | Maykop (Çerkezya) | Meciboj (Mejibuji) | Merv (Mari) | Mezen | Mikkeli | Minsk | Minusinsk | Moskova | Murvaneti | Nabil kıyısı (bölge) | Nahçıvan | Narva | Narım | Narın (Naryn) | Nelkan | Nerçinsk | Nesâ | Nijnekamçatsk | Nijnekolımsk | Nijneudinsk | Nijniy Novgorod | Nijniy Tagil | Nikolayevsk (Amur ağzı) | Norapat | Novaya Zemlya güneyi | Novaya Zemlya kuzeyi | Novgorod | Novgorod-Seversk | Nurmes | Obdorsk (Salehard) | Ohotsk | Olyokminsk | Olyutorsk (Arhangelsk) | Omsk | Onor | Or Kapı (Ferahkirman) | Ordubad | Orel | Orhei | Ostrogojsk | Ostrovnoye (Anyuy panayırı) | Oulu | Oş | Pamirski Post (Murgab) | Pavlodar (Koryakov) | Pelım ostrogu | Penjinsk ostrogu | Penza | Perm | Petropavlovsk (Kızılcar) | Petrovsk (Saratov) | Petseri (Peçori) | Pinsk | Podşiversk | Polotsk | Poltava | Ponoy | Pori | Porkhov | Poronay yukarısı (bölge) | Posof | Pustozersk | Putivl | Pärnu | Revan | Riga | Rivne (Równe) | Rize | Rostov (Don) | Rovaniemi | Ryazan | Rykovskoye (Kirovskoye) | Rēzekne (Rositten) | Rın kumulları (Volga-Yayık arası) | Salyan | Samara | Samarovo | Saratov | Sarp | Sarıkamış | Savonlinna | Sayansk ostrogu | Saylıca | Sayram (İsficâb) | Selenginsk | Semerkant | Semipalatinsk | Simbirsk | Sloboda bozkırı | Smolensk | Sodankylä | Sofiysk (Amur) | Soroka (Soroca) | Soçi (Sâşe) | Srednekolımsk | Sretensk | St. Petersburg | Stavropol–Kuma bozkırı | Sudak (Suğdak) | Sumı | Suntar | Surgut | Suzak (Sozak) | Syzran | Sığnak (Sunak Kurgan) | Tallinn (Reval) | Taman | Tambov | Tampere | Tara | Taraz (Evliya-Ata) | Tarki (Tarku) | Tartu (Dorpat) | Tauysk | Taşkent | Telembinsk | Terek deltası (Kızlar) | Tiflis | Tigil | Tobolsk (İsker) | Tomsk | Tornio | Trabzon | Troitsk | Tsaritsyn | Ts’q’altbila | Tuapse | Tula | Turinsk | Turuhansk | Tümen (Çimgi-Tura) | Türkistan (Yesi) | Udskoy ostrogu | Ufa | Uman | Ural eteği | Ust-Kamenogorsk | Ust-Maya | Ust-Olenyok zimovyesi | Ust-Tsilma | Ust-Yansk | Uyandina (Nijneindigirsk) zimovyesi | Vaasa | Varzuga | Vaygaç | Verhneangarsk ostrogu | Verhnekamçatsk | Verhnekolımsk | Verhneudinsk | Verholensk | Verhoturye | Verhoyansk | Vilnius | Vilyuysk | Vinnitsa (Vinnytsia) | Vitebsk | Vitim (Vitimskoye zimov'e / Vitimskiy ostrog) | Vladikavkaz | Vladivostok | Volodymyr-Volynskyi (Włodzimierz) | Vologda | Voloçanka (Voloçanı zimovyesi) | Voronej | Yakutsk | Yalta | Yalutorovsk | Yama zimovyesi | Yamal ucu | Yedisan bozkırı | Yediçkul bozkırı | Yekaterinburg | Yelisavetgrad (Aziz Yelizaveta Kalesi) | Yenikale | Yeniseysk | Yerbogaçen | Zagem (Kaheti) | Zaporojye Seçi | Zaural Başkurt toprakları | Zaysan | Zazalo | Zaşiversk | Zeya (Zeyskiy Sklad) | Zlatoust | Zmeinogorsk | Çehrin (Çigirin) | Çeleken | Çelyabinsk | Çerkask (Razdory) | Çernigov | Çimkent | Çita | Çuguyev | Özi | İlimsk (Ilimskiy ostrog) | İlyinsk | İmperator limanı | İnari | İnkirman (Kalamita) | İrkutsk | İsmail | İzyum | İşkâşim (Pamir) | Şadrinsk | Şamahı | Şavşat | Şeki (Nuha) | Şelon havzası (Soltsı) | Şuşa | Şâbüran | Šiauliai
1918-02-16  Kaunas | Vilnius | Šiauliai
1918-02-24  Narva | Pärnu | Tallinn (Reval) | Tartu (Dorpat)
1918-03-03  Aşkale
1918-04-01  Tuz Hurmatu
1918-04-14  Murvaneti
1918-09-21  Nablus
1918-09-27  Maan
1918-10-08  Deyrülkamer (Dayr al-Kamer) | Sûr (Tyre) — Lübnan
1918-10-13  Trablusşam
1918-10-26  Qaţţīnah | Rakka
1918-10-30  Babū | Cumai (Birlikköy) | Ebha (Asir) | Erbil | Ferasan (Farasan) | Hudeyde | Jadlā’ | Kerkük | Kevkebân | Malikiye (Derik) | Mersin | Moha | Sa'de | Sana | Silopi | Sincan | Taiz | Zebîd | Şehrizor | Şehâre | Ḩīmū
1918-11-08  Akra | Duhok | Gōrabī | Rewândiz | Sincar | Telafer | Tirwānīsh | Zaho | İmâdiye (Amêdî)
1918-12-01  Akureyri | Batum | Murvaneti | Reykjavík
1918-12-27  Poznan
1919-05-26  Hurma (Tâif doğusu) | Türabe
1920-02-02  Petseri (Peçori)
1920-12-02  Revan
1921-11-02  Dûmetülcendel (Cevf) | Hâil | Nefud çölü | Teymâ
1922-06-03  Kattowitz (Katowice)
1923-07-24  Batnoz (Patmos) | Bozbaba (Ay Strati) | Fornoz (Fourni) | Herke (Halki) | Karpatos | Kaşot (Kasos) | Kelemez (Kalimnos) | Limni | Lindos | Midilli | Molova (Molyvos) | Nikarya (İkarya) | Rodos | Sakız | Sömbeki (Simi) | Taşoz | İleryoz (Leros) | İlyaki (Tilos) | İncirli (Nisiros) | İpsara (Psara) | İstanbulya (Astipalya) | İstanköy
```

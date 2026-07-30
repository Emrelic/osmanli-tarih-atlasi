# Kronolojiye yazılacak 81 yabancı devir · 30 Temmuz 2026

**Kaynak:** `py arac/denetle_statu.py --ayrinti` (B bölümü).
**Kime:** kronoloji yoğunlaştırma oturumu.

## Bu liste ne

`s:` → `s:` yabancı el değiştirmelerinden **±30 günde kronoloji maddesi
olmayan** ve **gerçek gün taşıyan** olanlar. Toplam 234 devrin 154'ünün maddesi
yok; bu dosya o 154'ün **gün hassasiyetli** 81'ini listeler. Kalan 73'ü
`YYYY-01-01`'e yuvarlanmış, onlar için ±30 gün ölçütü haksız (CLAUDE.md §4).

**Neden "ucuz kazanç":** gün biliniyorsa tarih zaten bir kaynaktan gelmiştir.
Yazan oturum günü nereden bulduysa maddenin dayanağı da oradadır — bu yeni
araştırma değil, yazı işi.

**Neden önemli:** Değişmez 2 yalnız `d:` ve `v:` sınırlarını kırılma sayar.
İki YABANCI devlet arasındaki devri hiçbir denetim sormaz — ama harita o gün
renk değiştirir. 17 Ekim 1797'de Kefalonya Venedik mavisinden Fransa rengine
döner, kronoloji susar. Kullanıcının en çok şikâyet ettiği hata sınıfının
(sessiz toprak değişimi) yabancı devletlerdeki tam karşılığı.

## Ölçek

- **81 devir olayı · 557 yerleşim-devir çifti**
- Yüzyıl dağılımı: 14. yy 6 · 15. yy 6 · 16. yy 14 · 17. yy 7 · **18. yy 20** ·
  **19. yy 26** · 20. yy 2

## Yazarken

- Madde tarihi **tabloda yazan günün kendisi** olmalı; ±30 gün penceresi
  denetimin toleransıdır, hedef değil.
- Kaynak kuralı değişmedi: İslâm dünyası ve komşuları için TDV esas, slug
  `<title>` ile doğrulanır (CLAUDE.md §4). Avrupa içi devirler (Lehistan
  taksimleri, Campo Formio, Nystad) TDV kapsamı dışında olabilir; standart
  akademik referans yeterli.
- **Aynı gün birden çok devir varsa tek madde yetebilir.** 1795-10-24'te
  Lehistan'ın üçe bölünmesi tabloda üç satır ama tarihte tek olaydır.
- Tabloda yalnız ilk 6 yerleşim yazılı; tamamı için:
  `py arac/denetle_statu.py --ayrinti`

## Denetim bunu nasıl takip ediyor

`BEKLENEN_SS_MADDESIZ_GERCEKGUN = 81` bir **tavandır**. Madde yazıldıkça sayı
düşer; tavanı da düşürmek gerekir, yoksa denetim yeni borcu göremez. Tavan
aşılırsa `denetle_statu.py` çıkış kodu 1 verir.

---

| # | tarih | devir | nokta | yerleşimler |
|---|---|---|---|---|
| 1 | 1310-08-15 | `bizans` → `sovalye` | 9 | Herke (Halki), Kelemez (Kalimnos), Lindos, Rodos, Sömbeki (Simi), İleryoz (Leros) … (+3) |
| 2 | 1311-03-15 | `bizans` → `katalan` | 2 | Tırhala, Yenişehir (Larissa) |
| 3 | 1326-10-09 | `esrefogullari` → `hamid` | 2 | Beyşehir, Seydişehir |
| 4 | 1335-12-01 | `ilhanli` → `iran` | 117 | Abâdân, Ahar (Karadağ), Ahvaz, Akra, Ammâre, Astara … (+111) |
| 5 | 1344-10-28 | `aydin` → `sovalye` | 3 | Aydın, Çeşme, İzmir |
| 6 | 1387-11-01 | `iran` → `timurlu` | 13 | Bistâm, Burûcird, Dâmgan, Erdekân, Erdistan, Erâk (Sultânâbâd) … (+7) |
| 7 | 1406-10-21 | `timurlu` → `karakoyunlu` | 21 | Ahar (Karadağ), Astara, Berde (Karabağ), Bîcâr, Culfa, Halhâl … (+15) |
| 8 | 1466-10-19 | `almanya` → `lehistan` | 1 | Gdansk |
| 9 | 1468-04-01 | `karakoyunlu` → `akkoyunlu` | 21 | Ahar (Karadağ), Astara, Berde (Karabağ), Bîcâr, Culfa, Halhâl … (+15) |
| 10 | 1471-08-28 | `fas` → `portekiz` | 1 | Tanca |
| 11 | 1489-02-26 | `lusignan` → `venedik` | 6 | Baf (Paphos), Girne (Kyrenia), Lefkoşa, Limasol, Magosa, Tuzla (Larnaka) |
| 12 | 1492-01-02 | `granada` → `ispanya` | 1 | Granada |
| 13 | 1501-07-01 | `akkoyunlu` → `safevi` | 21 | Ahar (Karadağ), Astara, Berde (Karabağ), Bîcâr, Culfa, Halhâl … (+15) |
| 14 | 1501-07-01 | `iran` → `safevi` | 16 | Ağraham burnu, Bakü, Derbend, Erdebil, Ereş, Gence … (+10) |
| 15 | 1507-05-24 | `timurlu` → `iran` | 18 | Bocnûrd, Bîrcend, Dihistan ovası (Meşhed-i Misriyân), Ebîverd, Esferâyin, Kelât-ı Nâdirî … (+12) |
| 16 | 1509-05-17 | `zeyyani` → `ispanya` | 1 | Oran |
| 17 | 1510-07-25 | `hafsi` → `ispanya` | 1 | Trablus |
| 18 | 1510-12-02 | `iran` → `safevi` | 24 | Bocnûrd, Bîrcend, Dihistan ovası (Meşhed-i Misriyân), Ebîverd, Esferâyin, Esterâbâd (Gürgân) … (+18) |
| 19 | 1515-04-01 | `iran` → `portekiz` | 2 | Ras el-Hayme (Cülfâr), Şârika |
| 20 | 1515-04-01 | `safevi` → `portekiz` | 2 | Hürmüz Adası, Kişm (Qeshm) |
| 21 | 1516-01-23 | `almanya` → `ispanya` | 1 | Amsterdam |
| 22 | 1530-03-24 | `ispanya` → `sovalye` | 1 | Trablus |
| 23 | 1530-03-24 | `napoli` → `sovalye` | 1 | Malta |
| 24 | 1535-11-01 | `milanoduka` → `ispanya` | 1 | Milano |
| 25 | 1561-11-28 | `almanya` → `lehistan` | 1 | Riga |
| 26 | 1581-07-26 | `ispanya` → `hollanda` | 1 | Amsterdam |
| 27 | 1611-06-13 | `rusya` → `lehistan` | 1 | Smolensk |
| 28 | 1617-02-27 | `rusya` → `isvec` | 1 | St. Petersburg |
| 29 | 1650-01-26 | `portekiz` → `umman` | 4 | Buraymî, Maskat, Suhâr, Sûr |
| 30 | 1654-01-18 | `lehistan` → `rusya` | 1 | Poltava |
| 31 | 1654-10-03 | `lehistan` → `rusya` | 1 | Smolensk |
| 32 | 1661-01-23 | `portekiz` → `ingiltere` | 1 | Tanca |
| 33 | 1667-01-30 | `lehistan` → `rusya` | 1 | Kiev |
| 34 | 1703-05-27 | `isvec` → `rusya` | 1 | St. Petersburg |
| 35 | 1708-09-29 | `ispanya` → `ingiltere` | 1 | Menorka (Mahon) |
| 36 | 1714-03-07 | `ispanya` → `avusturya` | 1 | Milano |
| 37 | 1720-02-24 | `ispanya` → `italya` | 2 | Kalyari (Cagliari), Sasari (Sassari) |
| 38 | 1721-08-30 | `isvec` → `rusya` | 1 | Riga |
| 39 | 1722-08-23 | `safevi` → `rusya` | 1 | Derbend |
| 40 | 1735-03-10 | `rusya` → `safevi` | 2 | Bakü, Derbend |
| 41 | 1736-03-08 | `safevi` → `iran` | 124 | Abâdân, Ahar (Karadağ), Ahvaz, Astara, Ağraham burnu, Bakü … (+118) |
| 42 | 1747-06-20 | `iran` → `hive` | 5 | Hazârasp, Hîve, Köhne Ürgenç (Gürgenç), Küngrat, Yeni Ürgenç |
| 43 | 1768-05-15 | `ceneviz` → `fransa` | 2 | Ayacyo (Ajaccio), Bastia (Korsika) |
| 44 | 1772-08-05 | `lehistan` → `avusturya` | 2 | Lvov, Yazlofça (Yazlovets) |
| 45 | 1793-01-23 | `lehistan` → `almanya` | 2 | Gdansk, Poznan |
| 46 | 1793-01-23 | `lehistan` → `rusya` | 5 | Bar (Podolya), Kamaniçe, Meciboj (Mejibuji), Minsk, Çehrin (Çigirin) |
| 47 | 1795-10-24 | `lehistan` → `almanya` | 1 | Varşova |
| 48 | 1795-10-24 | `lehistan` → `avusturya` | 1 | Krakov |
| 49 | 1795-10-24 | `lehistan` → `rusya` | 1 | Vilnius |
| 50 | 1797-05-12 | `venedik` → `avusturya` | 1 | Venedik |
| 51 | 1797-06-14 | `ceneviz` → `fransa` | 1 | Cenova |
| 52 | 1797-10-17 | `venedik` → `avusturya` | 10 | Brakya (Brač), Cres (Cherso), Hvar (Lesina), Korçula (Kurzola), Krk (Veglia), Mliyet (Mljet) … (+4) |
| 53 | 1797-10-17 | `venedik` → `fransa` | 8 | Kefalonya, Korfu, Parga, Preveze, Vonitsa, Zaklise (Zakynthos) … (+2) |
| 54 | 1800-09-05 | `fransa` → `ingiltere` | 1 | Malta |
| 55 | 1802-03-25 | `ingiltere` → `ispanya` | 1 | Menorka (Mahon) |
| 56 | 1809-09-17 | `isvec` → `rusya` | 1 | Helsinki |
| 57 | 1810-02-20 | `gurcistan` → `rusya` | 1 | Kutaisi |
| 58 | 1814-01-14 | `danimarka` → `isvec` | 1 | Oslo |
| 59 | 1815-06-09 | `fransa` → `sardinya` | 1 | Cenova |
| 60 | 1815-06-09 | `lehistan` → `rusya` | 1 | Varşova |
| 61 | 1815-11-05 | `fransa` → `ingiltere` | 6 | Kefalonya, Korfu, Parga, Zaklise (Zakynthos), Çuha Adası (Kythira), İthaki |
| 62 | 1820-01-08 | `umman` → `ingiltere` | 2 | Ras el-Hayme (Cülfâr), Şârika |
| 63 | 1828-02-10 | `iran` → `rusya` | 3 | Astara, Lenkeran, Revan |
| 64 | 1859-06-04 | `avusturya` → `sardinya` | 1 | Milano |
| 65 | 1861-02-13 | `napoli` → `italya` | 6 | Messina, Napoli, Palermo, Pantelerya, Sirakuza, Trapani |
| 66 | 1861-03-17 | `sardinya` → `italya` | 3 | Cenova, Milano, Torino |
| 67 | 1861-03-17 | `toskana` → `italya` | 2 | Elba, Floransa |
| 68 | 1864-05-21 | `ingiltere` → `yunanistan` | 5 | Kefalonya, Korfu, Zaklise (Zakynthos), Çuha Adası (Kythira), İthaki |
| 69 | 1866-10-03 | `avusturya` → `italya` | 1 | Venedik |
| 70 | 1870-09-20 | `papalik` → `italya` | 1 | Roma |
| 71 | 1881-01-30 | `turkmen` → `rusya` | 3 | Dihistan ovası (Meşhed-i Misriyân), Ebîverd, Nesâ |
| 72 | 1882-03-10 | `adal` → `italya` | 1 | Aseb |
| 73 | 1884-07-18 | `somali` → `ingiltere` | 6 | Berbera, Bulhar, Burao, Erigavo, Hargeysa, Lasanod |
| 74 | 1887-01-06 | `adal` → `habesistan` | 2 | Cîcîga, Harar |
| 75 | 1888-12-01 | `somali` → `italya` | 2 | Galkayo, Obbiya |
| 76 | 1889-04-07 | `somali` → `italya` | 5 | Alula, Ayl, Bender Kāsım (Bosaso), Garove, Hafun |
| 77 | 1891-02-06 | `mehdi` → `ingiltere` | 1 | Tokar |
| 78 | 1898-09-02 | `mehdi` → `darfur` | 3 | Cenîne, El-Fâşir, Nyala |
| 79 | 1899-01-19 | `mehdi` → `ingiltere` | 20 | Berber, Bâra, Debbe, Dongola, Ebû Hamed, Ed-Düveym … (+14) |
| 80 | 1902-01-15 | `sammar` → `suud` | 6 | Buraydâ (Kasîm), Dir'iye (Necid), Necid içi, Riyad, Uneyze, Şakrâ |
| 81 | 1905-06-07 | `isvec` → `norvec` | 1 | Oslo |

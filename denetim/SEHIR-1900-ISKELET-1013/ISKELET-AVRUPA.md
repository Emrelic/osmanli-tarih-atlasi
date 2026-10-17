# 1900 İDARÎ İSKELETİ — AVRUPA (Osmanlı Avrupa toprakları hariç) + RUS İMPARATORLUĞU (tamamı)

Ölçüm: UMIT değil bu oturumun makinesi, 2026-10-13. Ham indirmeler: `scratchpad/indir_avrupa/`.

## Kaynak notu (önce oku)
- **The Statesman's Year-Book 1900 archive.org'da BULUNAMADI.** archive.org'daki erişilebilir en yakın baskı
  **SYB 1896** (`statesmansyearbo1896londuoft`, ham metin `indir_avrupa/syb1896.txt`). Sayıların çoğu buradan;
  1896→1900 arası değişen yerler (Yunanistan 1899, Bulgaristan, Sırbistan) ayrıca işaretlendi. Sonraki baskı 1919.
- **Rusya:** 1897 Birinci Genel Sayımı, il/uyezd tablosu (Demoscope Weekly, `demoscope.ru/weekly/ssp/rus_gub_97.php?reg=1..89`,
  89 sayfanın hepsi indirildi: `indir_avrupa/demo/`, sayım: `indir_avrupa/demo_count.txt`). Alanlar kv. verst → km² (×1,1381).
  Demoscope'taki Yakutsk alanı (346 880 kv. verst) hanesi eksik: **ЭСБЕ "Якутская область"** 3 489 689 kv. verst diyor — ESBE değeri kullanıldı.
- **Statoids** (statoids.com, "Change history" bölümleri) — `indir_avrupa/statoids/`.
- **HistoGIS** (ÖAW, `histogis.acdh.oeaw.ac.at` API, 1900-01-01'de geçerli şekiller) — Avusturya Bezirkshauptmannschaft sayısı.
- **Johnson, E. A. (1991)** *German Crime, Death and Socioeconomic Data 1871–1914*, GESIS ZA8069, doi 10.4232/1.8069 — Alman Kreis sayısı.
- **territorial.de** (Rolf Jehke, resmî kaynaklı) — Prusya Regierungsbezirk listesi çapraz kontrol.
- Vikipedi yalnız ipucu; geçtiği yerde "vikipedi — doğrulanmadı" yazılı.
- Merkez (şehir) adları: listelenen il adları kaynaktan; il **merkezi** kaynak tabloda yoksa genel bilgiyle yazıldı ve
  şüpheli olanlar "(doğrulanmadı)" ile işaretlendi.

---

## A. RUS İMPARATORLUĞU

### Rus İmparatorluğu — bağımsız
- baskent_1900: Sankt-Peterburg (modern adı: Sankt-Peterburg) · kat 1
- katman1: guberniya / oblast (+ Sahalin) · **89 birim** (Finlandiya hariç) · ortalama alan ≈ 241 000 km² (bölgelere göre aşağıda)
  - **Avrupa Rusyası (50):** Arhangelsk, Astrahan, Kişinev (Besarabya), Vilna (Vilnius), Vitebsk, Vladimir, Vologda,
    Jitomir (Volın), Voronej, Vyatka (Kirov), Grodno, Novoçerkassk (Don Kazak Oblastı), Yekaterinoslav (Dnipro), Kazan,
    Kaluga, Kiev, Kovno (Kaunas), Kostroma, Mitava (Jelgava; Kurland), Kursk, Riga (Livonya), Minsk, Mogilev, Moskova,
    Nijni Novgorod, Novgorod, Petrozavodsk (Olonets), Orenburg, Oryol, Penza, Perm, Kamenets-Podolski (Podolya), Poltava,
    Pskov, Ryazan, Samara, Sankt-Peterburg [kat 1], Saratov, Simbirsk (Ulyanovsk), Smolensk, Simferopol (Tavrida),
    Tambov, Tver, Tula, Ufa, Harkov, Herson, Çernigov, Revel (Tallinn; Estlandiya), Yaroslavl
  - **Polonya / Visla ülkesi (10):** Varşova, Kalisz, Kielce, Łomża, Lublin, Piotrków, Płock, Radom, Suwałki, Siedlce
  - **Kafkasya (11):** Bakü, Temir-Han-Şura (Buynaksk; Dağıstan obl.), Yelizavetpol (Gence), Kars (Kars obl.),
    Yekaterinodar (Krasnodar; Kuban obl.), Kutais, Stavropol, Vladikavkaz (Terek obl.), Tiflis (Tbilisi),
    Novorossiysk (Karadeniz gub., 1896), Erivan (Yerevan)
  - **Sibirya + Uzakdoğu (9):** Blagoveşçensk (Amur obl.), Krasnoyarsk (Yenisey), Çita (Zabaykal obl.), İrkutsk,
    Vladivostok (Primorskaya obl.; merkez 1888'den — doğrulanmadı), Aleksandrovsk (Sahalin), Tobolsk, Tomsk, Yakutsk
  - **Orta Asya / Bozkır (9):** Omsk (Akmola obl.), Aşkabat (Zakaspi obl.), Semerkand, Semipalatinsk,
    Verny (Almatı; Semireçye), Taşkent (Sırderya), Orenburg (Turgay obl. idaresi Orenburg'da oturur — doğrulanmadı;
    fiilen 2. kez sayılmadı), Uralsk (Oral), Yeni Margilan / Skobelev (Fergana obl.)
- katman2: uyezd / okrug / otdel · **762 birim** (Amur obl. "uyezde bölünmez" → 1 sayıldı) · ortalama alan ≈ 28 200 km²
  - Avrupa Rusyası 50 gub.: 504 uyezd · ort. ≈ 9 550 km² ·· Polonya 10 gub.: 84 uyezd · ort. ≈ 1 510 km²
  - Kafkasya: 75 uyezd/okrug/otdel · ort. ≈ 6 250 km² ·· Orta Asya: 44 uyezd/otdel · ort. ≈ 81 300 km²
  - Sibirya+Uzakdoğu: 56 okrug (Amur 1 dahil) · ort. ≈ 231 000 km²
- katman3: volost (köy kantonu) — SYB 1896: "canton or volost", Avrupa Rusyası'nda **10 530** (sayı SYB 1896, s. 857 bölgesi)
- kaynak: 1897 sayımı / Demoscope (yukarıda); SYB 1896 "Russia — Area and Population"; ЭСБЕ "Якутская область" (Yakutsk alanı)
- not: Ham Demoscope listesinde 4 mükerrer satır ayıklandı (Don "Çerkassk okrugu" 2×, Novgorod'da il satırı 2×, Olonets'te
  Pudoj 2×) — düzeltmeli Don=9, Novgorod=11, Olonets=7. Genel-valilikler (Varşova, Kiev, Vilna, Moskova, Kafkas Naibliği,
  Türkistan, Bozkır, İrkutsk, Amur) guberniya **üstü** bir katmandır ama doğrudan toprak bölmez; ayrı sayılmadı.
  1897 → 1 Ocak 1900 arasında il düzeyinde değişiklik bulamadım (Kola uyezdi 1899'da Aleksandrovsk adını aldı — uyezd sayısı değişmez).
  Toplam alan (Finlandiya hariç) ≈ 21 490 000 km² (Demoscope + ESBE Yakutsk + Amur).

### Finlandiya Grandüklüğü — tâbi (Rus Çarı = Grandük; ayrı senato, para, gümrük)
- baskent_1900: Helsingfors (modern adı: Helsinki) · kat 2
- katman1: lääni / län (vilayet) · **8 birim** · ortalama alan ≈ 46 700 km² · merkezler: Helsingfors/Helsinki (Uusimaa/Nyland),
  Åbo/Turku (Turku-Pori), Tavastehus/Hämeenlinna (Häme), Viborg/Viipuri (Viipuri), S:t Michel/Mikkeli, Kuopio,
  Nikolaistad/Vaasa, Uleåborg/Oulu
- katman2: kihlakunta (härad) — **bulunamadı**
- kaynak: SYB 1896 Russia tablosu "3. Grand-Duchy of Finland" (8 il adı + alan toplamı 144 255 mil² ≈ 373 600 km²); statoids ufi
- not: alan göller dahil (SYB: %11–15 göl).

### Buhara Emirliği — protektora (Rus vasalı)
- baskent_1900: Buhara (modern adı: Buxoro) · kat 2
- katman1: beklik (bekstvo) · **≈ 25–28 birim** · ortalama alan ≈ 9 000 km² · merkezler: **bulunamadı** (tam liste yok)
- katman2: amlakdarlık — bulunamadı
- kaynak: alan SYB 1896 "Bokhara" (≈ 92 000 mil² ≈ 238 000 km²); beklik sayısı: Özbek akademik makaleleri Logofet'e (25) ve
  Maev'e (28) atfen; 1912 için 26 bek + 11 amlakdarlık (journal.buxdu.uz, inscience.uz — ikincil, doğrulanmadı)
- not: tahmin aralığı; TDV "Buhara", "Buhara Hanlığı", "Mangıtlar" maddelerinde idarî taksimat **yok** (bakıldı).

### Hive Hanlığı — protektora (Rus vasalı)
- baskent_1900: Hive (modern adı: Xiva) · kat 2
- katman1: beklik/hakimlik — **bulunamadı**
- kaynak: SYB 1896 "Khiva" (alan 22 320 mil² ≈ 57 800 km²)

---

## B. ORTA AVRUPA

### Alman İmparatorluğu — bağımsız (federal)
- baskent_1900: Berlin · kat 1
- katman1: Bundesstaat · **26 birim** · ortalama alan ≈ 20 800 km² · merkezler: Straßburg (Elsass-Lothringen), Dessau,
  Karlsruhe, München, Bremen, Braunschweig, Hamburg, Darmstadt, Detmold, Lübeck, Schwerin, Neustrelitz, Oldenburg,
  Berlin [Prusya; kat 1], Greiz, Gera, Altenburg, Coburg + Gotha (çift başkent), Meiningen, Dresden, Weimar, Bückeburg,
  Rudolstadt, Sondershausen, Arolsen, Stuttgart
  - Prusya'nın içinde **eyalet (Provinz) katmanı**: 12 Provinz + Berlin + Hohenzollern = **14** · merkezler (Oberpräsident):
    Königsberg (Kaliningrad), Danzig (Gdańsk), Potsdam (Brandenburg), Stettin (Szczecin), Posen (Poznań), Breslau (Wrocław),
    Magdeburg (Sachsen), Schleswig (Schleswig-Holstein; statoids "Kiel" diyor — çelişki, doğrulanmadı), Hannover, Münster,
    Kassel (Hessen-Nassau), Koblenz (Rheinprovinz), Sigmaringen (Hohenzollern)
- katman2: Regierungsbezirk düzeyi (orta kademe) · **61 birim** = Prusya 35 RB + Bavyera 8 RB + Saksonya 4 Kreishauptmannschaft
  + Württemberg 4 Kreis + Baden 4 Landeskommissärbezirk + Hessen 3 Provinz + Elsass-Lothringen 3 Bezirk ·
  ortalama alan ≈ 8 100 km² (yalnız orta kademesi olan devletlerin 495 800 km²'si üzerinden). 19 küçük devlette orta kademe YOK.
- katman3: Kreis / Bezirksamt / Amtshauptmannschaft / Oberamt · **≈ 1 047** (Prusya 583) · ort. ≈ 516 km²
- kaynak: statoids ude (26 devlet, alan, başkent; alt bölümler tablosu); territorial.de il sayfaları (Prusya RB'leri:
  Ostpr. 2, Westpr. 2, Brandenburg 2, Pommern 3, Posen 2, Schlesien 3, Sachsen 3, S-H 1, Hannover 6, Westfalen 3,
  Hessen-Nassau 2, Rhein 5, Hohenzollern 1 = 35; Allenstein 1905, Kattowitz/Zichenau sonra); HistoGIS 1900 geçerli
  "Governmental District" kayıtları (38, Holstein ve Hohenzollern ayrık tutulmuş — tutarlı); SYB 1896 (Württemberg 4 Kreis /
  64 Oberamt; Elsass-Lothringen 3 Bezirk / 22 Kreis); Kreis toplamı Johnson 1991 GESIS ZA8069 ("1047 counties", Prusya "583")
- not: Johnson'ın 1 047'si 1871–1912 dönemi için harmonize birimdir; 1 Ocak 1900 kesin sayısı **doğrulanmadı**.
  Bavyera 1900: HistoGIS'te 144 Bezirksamt + 40 amtsfreie Stadt (yinelenen başlıklar ayıklanarak).

### Avusturya-Macaristan: Avusturya (Sislaytanya, "Reichsrat'ta temsil edilen krallık ve ülkeler") — bağımsız (ikili monarşi)
- baskent_1900: Viyana (Wien) · kat 1
- katman1: Kronland · **17 birim** · ortalama alan ≈ 17 700 km² · merkezler: Wien (Aşağı Avusturya), Linz, Salzburg, Graz,
  Klagenfurt, Laibach (Ljubljana), Triest (Trieste), Görz (Gorizia), Parenzo (Poreč; İstirya diyeti — doğrulanmadı),
  Innsbruck (Tirol), Bregenz (Vorarlberg; Statthalterei Innsbruck'ta), Prag (Praha), Brünn (Brno), Troppau (Opava),
  Lemberg (Lviv), Czernowitz (Çernivtsi), Zara (Zadar)
- katman2: politischer Bezirk (Bezirkshauptmannschaft) + Statutarstadt · **≈ 374 birim** (≈ 346 BH + ≈ 28 statülü şehir) ·
  ortalama alan ≈ 800 km²
- katman3: Gerichtsbezirk (adlî) — sayılmadı
- kaynak: kronland listesi ve alan SYB 1896 Austria-Hungary tablosu (Austria toplam 115 903 mil² ≈ 300 200 km²);
  BH sayısı HistoGIS (Cisleithanien Districts 1868–1914 kaynakları, 1900-01-01'de geçerli, başlık tekilleştirilerek)
- not: HistoGIS ham sayım 407 kayıt (yinelenen dönem dilimleri); tekil 374. Statülü şehir sayısı 1900'de 28–33 aralığında
  olabilir (Trient vb. listede görünmüyor) — **tahmin ±10**. Galiçya 1900: 78 powiat (WebSearch özeti, doğrulanmadı).

### Avusturya-Macaristan: Macaristan Krallığı (asıl) — bağımsız (ikili monarşi)
- baskent_1900: Budapeşte · kat 1 (ikili monarşinin ikinci başkenti)
- katman1: vármegye (komitat) · **63 + Budapeşte = 64** (+ Fiume corpus separatum) · ortalama alan ≈ 4 400 km² ·
  merkezler (statoids): Kassa (Košice), Nagyenyed (Aiud), Arad, Alsókubin (Dolný Kubín), Zombor (Sombor), Pécs,
  Aranyosmarót (Zlaté Moravce), Gyula, Beregszász (Berehove), Beszterce (Bistrița), Nagyvárad (Oradea), Miskolc,
  Brassó (Brașov), Budapest [kat 1], Makó, Csíkszereda (Miercurea Ciuc), Szeged, Esztergom, Fogaras (Făgăraș),
  Rimaszombat (Rimavská Sobota), Győr, Debrecen, Sepsiszentgyörgy (Sfântu Gheorghe), Eger, Ipolyság (Šahy), Déva (Deva),
  Szolnok, Erzsébetváros (Dumbrăveni), Kolozsvár (Cluj), Komárom, Lugos (Lugoj), Liptószentmiklós (Liptovský Mikuláš),
  Máramarossziget (Sighetu Marmației), Marosvásárhely (Târgu Mureș), Magyaróvár (Mosonmagyaróvár), Segesvár (Sighișoara),
  Balassagyarmat, Nyitra (Nitra), [Pest-Pilis-Solt-Kiskun → Budapest], Pozsony (Bratislava), Eperjes (Prešov),
  Kaposvár, Sopron, Nyíregyháza, Nagykároly (Carei), Nagyszeben (Sibiu), Székesfehérvár, Lőcse (Levoča), Zilah (Zalău),
  Dés (Dej), Temesvár (Timișoara), Szekszárd, Torda (Turda), Nagybecskerek (Zrenjanin), Trencsén (Trenčín),
  Turócszentmárton (Martin), Székelyudvarhely (Odorheiu Secuiesc), Nagyszőllős (Vynohradiv), Ungvár (Ujhorod),
  Szombathely, Veszprém, Zalaegerszeg, Sátoraljaújhely, Besztercebánya (Banská Bystrica); + Fiume (Rijeka)
- katman2: járás (szolgabírói járás) · **≈ 442** · ortalama alan ≈ 630 km²
- katman3: ayrıca 25 törvényhatósági jogú város (il statülü şehir) var — sayı **doğrulanmadı**
- kaynak: komitat ve merkez listesi statoids uhu ("64 comitate"); alan SYB 1896 (Hungary incl. Transylvania 108 258 mil²
  ≈ 280 400 km²); járás sayısı **vikipedi — doğrulanmadı** (hu.wikipedia "Járás": 1914 sonunda 442; 1900 için bulunamadı)
- not: 442 1914 değeridir, 1900 için **tahmin**.

### Hırvatistan-Slavonya Krallığı — tâbi (Macar tacına bağlı özerk, kendi ban'ı ve saborı)
- baskent_1900: Agram (Zagreb) · kat 2
- katman1: županija · **8 birim** · ortalama alan ≈ 5 400 km² · merkezler: Gospić (Lika-Krbava), Ogulin (Modruš-Rijeka),
  Zagreb, Varaždin, Bjelovar (Bjelovar-Križevci), Požega, Osijek (Virovitica), Vukovar (Srijem) — merkezler doğrulanmadı
- katman2: kotar · **≈ 70** · ortalama alan ≈ 620 km²
- kaynak: alan SYB 1896 (16 773 mil² ≈ 43 400 km²); kotar: hu.wikipedia "Járás" (1914: 70) — **vikipedi, doğrulanmadı**;
  SYB 1896: sabor seçimi "21 town districts and 69 rural districts" (seçim bölgesi, idarî değil)

### Bosna-Hersek — Avusturya-Macaristan işgal/idaresi (hukuken Osmanlı) — **Osmanlı araştırmacısıyla çakışabilir**
- baskent_1900: Saraybosna · kat 2
- katman1: Kreis (okrug) · **6 birim** · ortalama alan ≈ 8 500 km² · merkezler: Saraybosna, Banja Luka, Bihać, Travnik,
  Tuzla (Dolnja Tuzla), Mostar (Kreis merkezleri SYB'de tek tek yok — doğrulanmadı)
- katman2: Bezirk (kotar) · **48** · ortalama alan ≈ 1 070 km²
- kaynak: SYB 1896 "Bosnia and Herzegovina": "6 district (Kreis) and 48 county (Bezirk) authorities"
- not: SYB alanı 23 262 mil² veriyor (≈ 60 250 km², fazla görünüyor); hesap ≈ 51 200 km² ile yapıldı (tahmin).

### İsviçre Konfederasyonu — bağımsız
- baskent_1900: Bern (federal şehir) · kat 1
- katman1: kanton · **22 birim** (25 kanton/yarım kanton) · ortalama alan ≈ 1 900 km² · merkezler: Zürich, Bern, Luzern,
  Altdorf, Schwyz, Sarnen, Stans, Glarus, Zug, Fribourg, Solothurn, Basel, Liestal, Schaffhausen, Herisau/Trogen (Appenzell
  A.Rh.; doğrulanmadı), Appenzell, St. Gallen, Chur, Aarau, Frauenfeld, Bellinzona, Lausanne, Sion, Neuchâtel, Genève
- katman2: Bezirk / district / Amt — **bulunamadı** (SYB 1896 yalnız "her kantonda Amtsbezirke var" der)
- kaynak: SYB 1896 Switzerland; statoids uch

### Lihtenştayn Prensliği — bağımsız · baskent Vaduz · kat 1 · katman1: 2 Landschaft (Oberland, Unterland) · kaynak: genel bilgi (doğrulanmadı)

---

## C. BATI AVRUPA

### Fransa Cumhuriyeti — bağımsız
- baskent_1900: Paris · kat 1
- katman1: département · **87 birim** (86 + Territoire de Belfort) · ortalama alan ≈ 6 200 km² · merkezler: Bourg (Ain), Laon,
  Moulins, Digne, Gap, Nice, Privas, Mézières, Foix, Troyes, Carcassonne, Rodez, Marseille, Caen, Aurillac, Angoulême,
  La Rochelle, Bourges, Tulle, Ajaccio, Dijon, Saint-Brieuc, Guéret, Périgueux, Besançon, Valence, Évreux, Chartres, Quimper,
  Nîmes, Toulouse, Auch, Bordeaux, Montpellier, Rennes, Châteauroux, Tours, Grenoble, Lons-le-Saunier, Mont-de-Marsan, Blois,
  Saint-Étienne, Le Puy, Nantes, Orléans, Cahors, Agen, Mende, Angers, Saint-Lô, Châlons-sur-Marne, Chaumont, Laval, Nancy,
  Bar-le-Duc, Vannes, Nevers, Lille, Beauvais, Alençon, Arras, Clermont-Ferrand, Pau, Tarbes, Perpignan, Lyon, Vesoul, Mâcon,
  Le Mans, Chambéry, Annecy, Paris [kat 1], Rouen, Melun, Versailles, Niort, Amiens, Albi, Montauban, Draguignan, Avignon,
  La Roche-sur-Yon, Poitiers, Limoges, Épinal, Auxerre, Belfort
- katman2: arrondissement · **362** · ortalama alan ≈ 1 480 km²
- katman3: canton · 2 881; commune · 36 144
- kaynak: SYB 1896 France "Local Government": "86 departments, or 87 if the territory of Belfort…"; "362 arrondissements,
  2,881 cantons, and 36,144 communes"; statoids yfr (merkez değişiklik tarihleri: Ain→Bourg, Ardennes→Mézières, Var→Draguignan)
- not: Cezayir'in 3 departmanı Afrika araştırmacısına bırakıldı. Alan ≈ 536 400 km².

### Belçika Krallığı — bağımsız
- baskent_1900: Brüksel · kat 1
- katman1: province · **9** · ortalama alan ≈ 3 270 km² · merkezler: Antwerpen, Brüksel (Brabant), Brugge (Batı Flandre),
  Gent (Doğu Flandre), Mons (Hainaut), Liège, Hasselt (Limburg), Arlon (Lüksemburg), Namur
- katman2: arrondissement administratif · **41** · ortalama alan ≈ 720 km²
- kaynak: SYB 1896 Belgium ("nine provinces", alan 29 455 km²; adlî arrondissement 26); idarî arrondissement sayısı statoids
  ube'den geri hesap (bugün 43; 1962'de Mouscron +1, Brüksel 3'e bölündü +2, 1970'te 1 birleşme −1 → 1962 öncesi 41) — **hesap, doğrulanmadı**

### Hollanda Krallığı — bağımsız
- baskent_1900: Amsterdam (hükûmet: 's-Gravenhage) · kat 1
- katman1: provincie · **11** · ortalama alan ≈ 3 000 km² · merkezler: Groningen, Leeuwarden, Assen, Zwolle, Arnhem, Utrecht,
  Haarlem (Kuzey Hollanda), 's-Gravenhage (Güney Hollanda), Middelburg, 's-Hertogenbosch, Maastricht
- katman2: **yok** (doğrudan gemeente ≈ 1 100; sayı doğrulanmadı)
- kaynak: SYB 1896 Netherlands; statoids unl

### Lüksemburg Grandüklüğü — bağımsız (Hollanda ile şahsî birlik 1890'da bitti)
- baskent_1900: Lüksemburg · kat 1
- katman1: district · **3** · ort. ≈ 860 km² · merkezler: Lüksemburg, Diekirch, Grevenmacher
- katman2: canton · **12** · ort. ≈ 215 km²
- kaynak: statoids ulu (3 district, cantons); SYB 1896 (alan 998 mil²); kanton sayısı genel bilgi — doğrulanmadı

### Birleşik Krallık (Büyük Britanya ve İrlanda) — bağımsız
- baskent_1900: Londra · kat 1
- katman1: kurucu ülke · **4** · ort. ≈ 78 700 km² · merkezler: Londra (İngiltere) [kat 1], Edinburgh (İskoçya),
  Dublin (İrlanda; Lord Lieutenant), Galler — idarî merkez yok
- katman2: administrative county · **127** = İngiltere 49 (Londra dahil, Monmouth hariç) + Galler 13 (Monmouth dahil) +
  İskoçya 33 + İrlanda 32 · ortalama alan ≈ 2 480 km² (+ ayrıca il statülü county borough'lar: İngiltere'de 1889'da 57,
  İrlanda'da 6 — 1900 kesin sayısı bulunamadı)
- katman3: urban/rural district, burgh — sayılmadı
- kaynak: statoids ugb ("administrative counties of England between 1900 and 1974" 49; Galler 13; İskoçya 33;
  "By 1900, Ireland was subdivided into 32 counties")
- not: katman2'nin sancak boyutuna en yakın birim olduğu dikkat çekici.
### Cebelitarık — sömürge · merkez Cebelitarık · kat 2 · alt bölüm yok
### Malta — sömürge · merkez Valletta · kat 2 · alt bölüm: bulunamadı
### Man Adası, Manş Adaları (Jersey, Guernsey) — taç bağımlılığı · alt bölüm sayılmadı

### İspanya Krallığı — bağımsız
- baskent_1900: Madrid · kat 1
- katman1: provincia · **49** (Balear ve Kanarya birer il dahil) · ortalama alan ≈ 10 300 km² · merkezler: Vitoria (Álava),
  Albacete, Alicante, Almería, Ávila, Badajoz, Palma (Baleares), Barcelona, Burgos, Cáceres, Cádiz, Santa Cruz de Tenerife
  (Canarias), Castellón, Ciudad Real, Córdoba, La Coruña, Cuenca, Gerona, Granada, Guadalajara, San Sebastián (Guipúzcoa),
  Huelva, Huesca, Jaén, León, Lérida, Logroño, Lugo, Madrid [kat 1], Málaga, Murcia, Pamplona (Navarra), Orense, Oviedo,
  Palencia, Pontevedra, Salamanca, Santander, Segovia, Sevilla, Soria, Tarragona, Teruel, Toledo, Valencia, Valladolid,
  Bilbao (Vizcaya), Zamora, Zaragoza
- katman2: partido judicial (adlî, idarî değil) · **≈ 500 — tahmin** (kaynak bulunamadı) · ort. ≈ 1 000 km²
- kaynak: SYB 1896 Spain ("forty-nine provinces", 1887 sayımı tablosu)
- not: 1898 sonrası sömürgeler (Fernando Po, Río de Oro vb.) Afrika'ya bırakıldı.

### Portekiz Krallığı — bağımsız
- baskent_1900: Lizbon · kat 1
- katman1: distrito · **21** (kıta 17 + Azorlar 3 + Madeira 1) · ort. ≈ 4 400 km² · merkezler: Aveiro, Beja, Braga, Bragança,
  Castelo Branco, Coimbra, Évora, Faro, Guarda, Leiria, Lizbon, Portalegre, Porto, Santarém, Viana do Castelo, Vila Real,
  Viseu, Angra do Heroísmo, Horta, Ponta Delgada, Funchal
- katman2: concelho · **≈ 263 — tahmin** (1895'te kaldırılıp 1898'de kısmen geri kurulanlar; kesin 1900 sayısı bulunamadı)
- kaynak: SYB 1896 Portugal ("seventeen districts" + Azores, Madeira); statoids upt ("1900: … distritos → concelhos → paróquias")

### Andorra — bağımsız (ortak senyörlük) · Andorra la Vella · kat 1 · katman1: 6 parròquia (genel bilgi, doğrulanmadı)
### Monako Prensliği — bağımsız · Monako · kat 1 · alt bölüm yok
### San Marino — bağımsız · San Marino · kat 1 · katman1: 9 castello (genel bilgi, doğrulanmadı)

### İtalya Krallığı — bağımsız
- baskent_1900: Roma · kat 1
- katman1: provincia · **69** · ortalama alan ≈ 4 150 km² · merkezler: Alessandria, Cuneo, Novara, Torino, Genova, Porto Maurizio
  (Imperia), Bergamo, Brescia, Como, Cremona, Mantova, Milano, Pavia, Sondrio, Belluno, Padova, Rovigo, Treviso, Udine,
  Venezia, Verona, Vicenza, Bologna, Ferrara, Forlì, Modena, Parma, Piacenza, Ravenna, Reggio Emilia, Arezzo, Firenze,
  Grosseto, Livorno, Lucca, Massa (Massa e Carrara), Pisa, Siena, Ancona, Ascoli Piceno, Macerata, Pesaro (Pesaro e Urbino),
  Perugia, Roma [kat 1], Aquila, Campobasso, Chieti, Teramo, Avellino, Benevento, Caserta, Napoli, Salerno, Bari, Foggia,
  Lecce, Potenza, Catanzaro, Cosenza, Reggio Calabria, Caltanissetta, Catania, Girgenti (Agrigento), Messina, Palermo,
  Siracusa, Trapani, Cagliari, Sassari
- katman2: circondario (60 ilde) + distretto (Mantova ve 8 Veneto ilinde) · **284** (197 + 87) · ortalama alan ≈ 1 010 km²
- katman3: comune · 8 259 (Ekim 1895)
- kaynak: SYB 1896 Italy: "69 provinces : of which 60 are divided into territories, and 9 … into districts. There are 197
  territories and 87 districts"; il adları SYB tablosu
- not: SYB'ye göre distrettilerin çoğu "de facto kaldırılmış, adda var". Alan ≈ 286 600 km².

---

## D. KUZEY AVRUPA

### Danimarka Krallığı — bağımsız
- baskent_1900: Kopenhag · kat 1
- katman1: amt + Kopenhag şehri · **19** (18 amt + 1) · ort. ≈ 2 000 km² · merkezler: Aalborg, Aarhus, Rønne (Bornholm),
  Kopenhag (Københavns amt), Hillerød (Frederiksborg), Hjørring, Holbæk, Maribo, Odense, Præstø amt (merkez doğrulanmadı),
  Randers, Ribe, Ringkøbing, Sorø, Svendborg, Thisted, Vejle, Viborg
- katman2: herred (adlî/tarihî) — **sayılmadı/bulunamadı**
- kaynak: statoids udk ("In 1900, Denmark contained 18 counties and one municipality"; alan 38 455 km²)

### İzlanda — tâbi/bağımlı ülke (Danimarka) · merkez Reykjavík · kat 2
- katman1: amt · **3** (Suður, Vestur, Norður-og-Austur) · merkezler: Reykjavík (Güney ve Batı amt), Akureyri (Kuzey-Doğu) —
  merkezler doğrulanmadı · katman2: sýsla — bulunamadı · kaynak: statoids uis ("In 1900, Iceland consisted of three amter")
### Faroe Adaları — Danimarka amtı · Tórshavn · kat 2 · alt bölüm sýsla (bulunamadı)
### Grönland — Danimarka sömürgesi (coğrafî olarak Amerika; Amerika araştırmacısına bırakıldı)

### İsveç Krallığı (İsveç-Norveç birliği) — bağımsız
- baskent_1900: Stockholm · kat 1
- katman1: län + Stockholm şehri (överståthållare) · **25** (24 + 1) · ortalama alan ≈ 18 000 km² · merkezler: Stockholm,
  Uppsala, Nyköping, Linköping, Jönköping, Växjö, Kalmar, Visby, Karlskrona, Kristianstad, Malmö, Halmstad, Göteborg,
  Vänersborg, Mariestad, Karlstad, Örebro, Västerås, Falun, Gävle, Härnösand, Östersund, Umeå, Luleå
- katman2: fögderi (kronofogde bölgesi) · **117** · ortalama alan ≈ 3 850 km²
- katman3: länsman bölgesi 520; härad (adlî) sayılmadı
- kaynak: SYB 1896 Sweden "Local Government": "each of the 24 governments … 117 baillies (Kronofogdar) and 520 sub-officers (Länsman)"
- not: alan ≈ 450 000 km² (SYB tablosu; göller dahil).

### Norveç Krallığı (İsveç-Norveç birliği) — bağımsız (ayrı hükûmet)
- baskent_1900: Kristiania (modern adı: Oslo) · kat 1
- katman1: amt (18) + şehir (Kristiania, Bergen) · **20** · ortalama alan ≈ 16 100 km² · merkezler: Kristiania (şehir + Akershus),
  Smaalenene (merkez doğrulanmadı), Hamar (Hedemarken), Kristians amt (merkez doğrulanmadı), Drammen (Buskerud),
  Jarlsberg og Larvik (merkez doğrulanmadı), Skien (Bratsberg), Arendal (Nedenes), Kristiansand (Lister og Mandal),
  Stavanger, Bergen (şehir + Søndre Bergenhus), Nordre Bergenhus (merkez doğrulanmadı), Molde (Romsdal), Trondhjem
  (Søndre Trondhjem), Nordre Trondhjem (merkez doğrulanmadı), Bodø (Nordland), Tromsø, Vadsø (Finmarken)
- katman2: fogderi · **56** (+ 39 şehir ayrı) · ortalama alan ≈ 5 750 km²
- katman3: herred (kırsal komün) 514
- kaynak: SYB 1896 Norway "Local Government": "twenty districts … the towns of Kristiania and Bergen, and 18 'Amts' …
  subdivided into 39 towns and 56 'Fogderier'"; alan 124 445 mil² ≈ 322 300 km²

---

## E. BALKANLAR (Osmanlı Avrupa toprakları hariç)

### Yunanistan Krallığı — bağımsız
- baskent_1900: Atina · kat 1
- katman1: nomos (nomarşi) · **25–26** (1899 reformu) · ortalama alan ≈ 2 600 km² · merkezler (1896'daki 16'nın bölünmesinden
  türetildi — **doğrulanmadı**): Atina (Attika), Livadia (Beotya), Lamia (Ftiotis), Amfissa (Fokis), Mesolongi (Etolya-Akarnanya),
  Karpenisi (Evritanya), Patras (Ahaya), Pirgos (Elis), Tripoli (Arkadya), Nafplio (Argolis), Korint (Korintiya), Sparta
  (Lakedaimon), Gitio (Lakoniki), Kalamata (Mesenya), Kiparissia (Trifilya), Larissa, Volos (Magnisia), Trikala, Karditsa,
  Arta, Korfu, Ermupoli (Kiklad), Halkis (Eğriboz), Argostoli (Kefalonya), Zakintos
- katman2: eparhia — **bulunamadı**
- kaynak: SYB 1896 Greece ("16 nomarchies", 1881 ilhakı dışında); statoids ugr (1896 tablosunda 16 departman);
  en.wikipedia "Prefectures of Greece" (1899'da kurulan 14 nomos: Achaea, Argolis, Attica, Boeotia, Corinthia, Elis, Evrytania,
  Karditsa, Lacedaemon, Lakoniki, Magnesia, Phocis, Phthiotis, Trifylia) — **vikipedi — doğrulanmadı**
- not: 16 → (9 ikiye bölünme) → 25; "26" sık anılır, fark Lefkada olabilir — **belirsiz**. 1909'da yeniden birleştirildi.
  Girit (1898'den özerk, Osmanlı metbuluğu) Osmanlı araştırmacısına bırakıldı.

### Sırbistan Krallığı — bağımsız
- baskent_1900: Belgrad · kat 1
- katman1: okrug · **15** (SYB 1896; Belgrad ve Niş şehirleri ayrıca kendi idaresi) · ort. ≈ 3 200 km² · merkezler (statoids'in
  1910 listesi, 17 okrug — 1900'deki 15'e uyarlanamadı, **doğrulanmadı**): Belgrad, Gornji Milanovac, Kragujevac, Negotin (Krajina),
  Kruševac, Ćuprija (Morava), Niş, Pirot, Šabac (Podrinje), Požarevac, Čačak (Rudnik), Smederevo, Zaječar (Timok), Prokuplje
  (Toplica), Užice, Valjevo, Vranje
- katman2: srez — **bulunamadı**
- kaynak: SYB 1896 Servia ("15 provinces or counties, 1,290 communes"; alan 19 050 mil² ≈ 49 300 km²); statoids urs (1910)
- not: 1900'ün 15 mi 17 mi olduğu **belirsiz**.

### Romanya Krallığı — bağımsız
- baskent_1900: Bükreş · kat 1
- katman1: județ · **32** (Eflak 17, Boğdan 13, Dobruca 2) · ort. ≈ 4 100 km² · merkezler: Pitești (Argeș), Brăila, Buzău,
  Târgoviște (Dâmbovița), Craiova (Dolj), Târgu Jiu (Gorj), Călărași (Ialomița), Bükreş (Ilfov) [kat 1], Turnu Severin
  (Mehedinți), Câmpulung (Muscel), Slatina (Olt), Ploiești (Prahova), Râmnicu Sărat, Caracal (Romanați), Turnu Măgurele
  (Teleorman), Râmnicu Vâlcea (Vâlcea), Giurgiu (Vlașca), Bacău, Botoșani, Galați (Covurlui), Dorohoi, Huși (Fălciu), Yaş,
  Piatra (Neamț), Focșani (Putna), Roman, Fălticeni (Suceava), Tecuci, Bârlad (Tutova), Vaslui, Köstence (Constanța), Tulça
- katman2: plasă · **227** · ort. ≈ 580 km²
- katman3: komün 2 791 (71 kent, 2 720 kır)
- kaynak: SYB 1896 Roumania: "Wallachia is divided into seventeen, Moldavia into thirteen, and Dobrogea into two districts …
  227 arrondissements (plasi) and 2,791 communes"; il merkezleri genel bilgi (doğrulanmadı)
- not: SYB alanı 48 307 mil² (≈ 125 100 km²); hesap ≈ 131 000 km² ile.

### Karadağ Prensliği — bağımsız
- baskent_1900: Cetinje · kat 1
- katman1: nahiye / askerî komutanlık · **8** ("eight military commands", 1879 statüsü) — merkezler **bulunamadı**
- katman2: kapetanija · **80** · ort. ≈ 115 km²
- kaynak: SYB 1896 Montenegro: "By the 'Administrative Statute' of 1879, the country was divided into 80 districts and eight
  military commands"; alan ≈ 9 080 km² (tahmin)

### Bulgaristan Prensliği (Doğu Rumeli dahil) — tâbi (Osmanlı metbuluğu)
- baskent_1900: Sofya · kat 2 (tâbi devlet başkenti)
- katman1: okrug · **22** (Doğu Rumeli'nin 6'sı dahil) · ort. ≈ 4 450 km² · merkezler: **tam liste bulunamadı**
  (1901 reformundan sonraki 12 merkez — statoids "1909" listesi: Burgas, Köstendil, Plevne, Filibe, Rusçuk, Şumnu, Sofya,
  Eski Zağra, Tırnova, Varna, Vidin, Vraca — 1900'deki 22'nin içindedir, diğer 10 **doğrulanmadı**)
- katman2: okolia — **bulunamadı** (1901 kanunuyla 71 okolia — popüler kaynak, doğrulanmadı)
- kaynak: SYB 1896 Bulgaria: "Bulgaria has been redivided into 22 districts (including the six districts of Eastern Roumelia)";
  alan 24 360 + 13 500 mil² ≈ 98 000 km²
- not: 1901'de 12 okruga indirildi; 1 Ocak 1900 hâli 22.

---

## Özet

| birim | kat1 sayısı | katman1 sayısı | katman2 sayısı | katman2 ort. alan (km²) |
|---|---|---|---|---|
| Rus İmparatorluğu (Finlandiya hariç) | 1 | 89 guberniya/oblast | 762 uyezd/okrug | ≈ 28 200 (Avr. Rusya 9 550 · Polonya 1 510 · Kafkasya 6 250 · Orta Asya 81 300 · Sibirya 231 000) |
| Finlandiya Grandüklüğü (tâbi) | 0 | 8 lääni | bulunamadı | — |
| Buhara Emirliği (protektora) | 0 | ≈ 25–28 beklik (tahmin) | bulunamadı | — |
| Hive Hanlığı (protektora) | 0 | bulunamadı | bulunamadı | — |
| Alman İmparatorluğu | 1 | 26 devlet (+ Prusya içinde 14 Provinz) | 61 Regierungsbezirk-düzeyi (katman3: ≈ 1 047 Kreis, ort. ≈ 516) | ≈ 8 100 |
| Avusturya (Sislaytanya) | 1 | 17 Kronland | ≈ 374 Bezirk + statülü şehir | ≈ 800 |
| Macaristan (asıl) | 1 | 64 vármegye (Budapeşte dahil) + Fiume | ≈ 442 járás (1914, vikipedi) | ≈ 630 |
| Hırvatistan-Slavonya (tâbi) | 0 | 8 županija | ≈ 70 kotar (vikipedi) | ≈ 620 |
| Bosna-Hersek (A-M idaresi) | 0 | 6 Kreis | 48 Bezirk | ≈ 1 070 |
| İsviçre | 1 | 22 kanton | bulunamadı | — |
| Lihtenştayn | 1 | 2 | — | — |
| Fransa | 1 | 87 département | 362 arrondissement | ≈ 1 480 |
| Belçika | 1 | 9 province | 41 arrondissement (hesap) | ≈ 720 |
| Hollanda | 1 | 11 provincie | yok | — |
| Lüksemburg | 1 | 3 district | 12 canton | ≈ 215 |
| Birleşik Krallık | 1 | 4 kurucu ülke | 127 administrative county | ≈ 2 480 |
| Cebelitarık, Malta (sömürge) | 0 | — | — | — |
| İspanya | 1 | 49 provincia | ≈ 500 partido judicial (tahmin, adlî) | ≈ 1 000 |
| Portekiz | 1 | 21 distrito | ≈ 263 concelho (tahmin) | ≈ 350 |
| Andorra, Monako, San Marino | 3 | (6 / 0 / 9) | — | — |
| İtalya | 1 | 69 provincia | 284 circondario+distretto | ≈ 1 010 |
| Danimarka | 1 | 19 (18 amt + Kopenhag) | bulunamadı | — |
| İzlanda + Faroe (Danimarka'ya bağlı) | 0 | 3 + 1 amt | bulunamadı | — |
| İsveç | 1 | 25 (24 län + Stockholm) | 117 fögderi | ≈ 3 850 |
| Norveç | 1 | 20 (18 amt + 2 şehir) | 56 fogderi | ≈ 5 750 |
| Yunanistan | 1 | 25–26 nomos (1899) | bulunamadı | — |
| Sırbistan | 1 | 15 okrug (1900'de 17 olabilir) | bulunamadı | — |
| Romanya | 1 | 32 județ | 227 plasă | ≈ 580 |
| Karadağ | 1 | 8 nahiye/komutanlık | 80 kapetanija | ≈ 115 |
| Bulgaristan Prensliği (tâbi) | 0 | 22 okrug | bulunamadı | — |

**Toplam (bölgem):**
- **Kat 1 merkezi: 24** — St. Peterburg, Berlin, Viyana, Budapeşte, Paris, Roma, Madrid, Lizbon, Londra, Brüksel, Amsterdam,
  Lüksemburg, Bern, Kopenhag, Stockholm, Kristiania, Atina, Belgrad, Bükreş, Cetinje, Vaduz, Monako, San Marino, Andorra la Vella.
- **Kat 2 merkezi (tekil şehir, kat 1'lerle çakışanlar düşülerek): ≈ 649** — Rusya 87 (89 birim − St. Peterburg − Orenburg/Turgay
  çakışması) · Finlandiya 8 · Buhara + Hive başkentleri 2 · Almanya 39 (25 devlet başkenti, Coburg+Gotha çift → 26; + 13 Prusya
  eyaleti) · Avusturya 16 · Macaristan 62 + Fiume 1 + Hırvatistan 8 = 71 · Bosna 6 · Fransa 86 · İtalya 68 · İspanya 48 ·
  Portekiz 20 · Birleşik Krallık 2 (Edinburgh, Dublin) · Belçika 8 · Hollanda 11 · Lüksemburg 2 · İsviçre 21 · Danimarka 17 ·
  İzlanda 2 + Faroe 1 · İsveç 23 · Norveç 18 · Yunanistan 24 · Sırbistan 14 · Romanya 31 · Bulgaristan 22 (liste eksik) ·
  Malta + Cebelitarık 2.
  - Bunlardan **merkezi adıyla listelenemeyen**: Buhara beklikleri (≈ 26), Hive, Karadağ (8), Bulgaristan'ın 10 okrugu;
    "doğrulanmadı" işaretli merkezler ≈ 30.
- **Kat 1 + kat 2 toplamı ≈ 673.**
- **Katman2 merkezi (birim) ≈ 3 830 + ölçülemeyenler** — Rusya 762 · Almanya 61 (Kreis düzeyi alınırsa ≈ 1 047) · Avusturya ≈ 374
  · Macaristan ≈ 442 · Hırvatistan ≈ 70 · Bosna 48 · Fransa 362 · İtalya 284 · İspanya ≈ 500 (tahmin) · Portekiz ≈ 263 (tahmin)
  · BK 127 · Belçika 41 · Lüksemburg 12 · İsveç 117 · Norveç 56 · Romanya 227 · Karadağ 80.
  Ölçülemeyen (bulunamadı): Finlandiya, Buhara, Hive, İsviçre (≈ 180 tahmin edilir ama kaynaksız), Danimarka, İzlanda,
  Yunanistan, Sırbistan, Bulgaristan. Hollanda'da bu katman yok.

**Karar için gözlem:** katman2 ortalama alanı ülkeden ülkeye 100 kat oynuyor — Karadağ ≈ 115, Portekiz ≈ 350, Macaristan/
Avusturya/Romanya 580–800, Fransa/İtalya/İspanya ≈ 1 000–1 500, BK county ≈ 2 500, İskandinav ≈ 4 000–6 000, Almanya RB ≈ 8 100,
Avrupa Rusyası uyezdi ≈ 9 550, Asya Rusyası 80 000–230 000 km². Sancak ölçütü (Osmanlı araştırmacısından gelecek) ile
karşılaştırıldığında, "kategori 3"ün tek bir katman adıyla değil **alan bandıyla** seçilmesi gerekebilir: ör. Almanya'da RB yerine
Kreis çok küçük, Rusya'da uyezd Avrupa'da uygun, Asya'da ise guberniya bile sancak boyutunun çok üstünde.

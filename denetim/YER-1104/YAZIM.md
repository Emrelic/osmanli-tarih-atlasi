# YAZIM — kronolojide atlasla eşleşmeyen yer adları: sınıf özeti ve eşleme tablosu

Ölçen: LAB SALI · 4 Kasım 2026 · `yer_sinifla.py`. Evren: olaylar*.js + kronoloji_sinir*.js `yer` alanı, üst düzey ayırıcılarla (/ , ; · ve) bölünmüş parçalar; eşleşme = normalleştirilmiş ad kökü ya da parantez içi eş ad (nokta_aday.py ile aynı ölçüt).

Not: önceki sayım (1.529) ayırıcı parantez içlerini de bölüyordu; düzeltilmiş ayırıcıyla **1247 farklı ad, 1657 anılma**.

## Sınıf özeti

| sınıf | ad | anılma | anlamı |
|---|---|---|---|
| EKSİK | 485 | 539 | atlasta olmayan yerleşim adayı → EKSIK-ADAY.md |
| BÖLGE/ÜLKE | 379 | 616 | yer değil: ülke, bölge, ırmak, deniz, devlet adı |
| YABANCI-YAZI | 134 | 159 | Latin dışı yazı (Çince, Kiril, İbranice…) — çoğu Latin yazımlı eşinin kopyası |
| ROTA/YAKLAŞIK | 112 | 117 | 'X yakını', 'X → Y', 'X sınırı' gibi yaklaşık ya da güzergâh ifadesi |
| YAZIM | 62 | 104 | atlasta başka yazımla var — eşleme kaydı (aşağıda) |
| DÖNEM/KÜLTÜR | 47 | 79 | arkeolojik dönem, kültür, evre adı |
| YAPI | 15 | 21 | saray, kale, cami, liman |
| SEMT | 13 | 22 | İstanbul semti / yapı adı |

## Eşleme tablosu (YAZIM)

**YÜKSEK** = eş-ad tablosu ya da yazım oranı ≥ 0,95 — KASA mekanik ekleyebilir (kronoloji maddesinin `yer_id`'si hedef yapılır ya da hedef kayda eş ad eklenir). **DOĞRULA** = bulanık eşleşme, KASA gözle onaylamalı (yanlış eşler elendi ama kalan olabilir).

| kronolojideki ad | anılma | hedef atlas kaydı | güven | ölçüt | örnek madde |
|---|---|---|---|---|---|
| Budapeşte | 13 | Peşte | YÜKSEK | eş-ad tablosu | 1867-06-08 — I. Franz Joseph Budapeşte'de Macaristan kralı olarak taç giydi — ikili |
| Endican | 9 | Andican | YÜKSEK | eş-ad tablosu | 1227-01-01 — Karaşar: Karaşar Çağatay Han’ın ulus payına dahil oldu |
| Ekbatana | 7 | Hemedan | YÜKSEK | eş-ad tablosu | -0147-01-01 — Ekbatana, Hemedan: Selevkos Imparatorlugu → Part (Arsakid) Imparatorlu |
| Pergamon | 5 | Bergama | YÜKSEK | eş-ad tablosu | -0128-01-01 — Aristonikos yenildi; Bergama topraklarından Asia eyaleti kuruldu |
| Sardes | 5 | Sart | YÜKSEK | eş-ad tablosu | -0386-01-01 — Kral Barışı (Antalkidas): Anadolu Rum kentleri ve Kıbrıs Pers'e bırakı |
| Ktesifon | 3 | Ktesiphon | YÜKSEK | eş-ad tablosu | 0198-01-01 — Septimius Severus Mezopotamya'yı eyalet yaptı; Ktesifon yağmalandı |
| Syrakusai | 3 | Sirakuza | YÜKSEK | eş-ad tablosu | -0026-01-01 — Roma, İskenderiye: Roma Cumhuriyeti → sahipsiz aralık |
| Tell al-ʿUbaid | 2 | Tell al-Ubaid | YÜKSEK | 0.96 | -3799-01-01 — Ubaid kültürü (güney Mezopotamya): Ubaid dönemi sona erer (Carter & Ph |
| Diyarbekir | 2 | Diyarbakır | YÜKSEK | eş-ad tablosu | 1507-01-01 — Şah İsmail'in Diyarbekir seferi: Akkoyunlu'nun son merkezleri düştü |
| Szigetvár | 2 | Zigetvar | YÜKSEK | eş-ad tablosu | 1918-11-19 — Sırp birlikleri Szigetvár'a girdi — Güney Somogy'un işgali |
| Kahire önü | 1 | Kahire | YÜKSEK | ad başı | 1517-01-22 — Ridaniye — Mısır'ın fethi ve hilâfet |
| Yanya gölü | 1 | Yanya | YÜKSEK | ad başı | 1822-02-14 — Tepedelenli Ali Paşa'nın öldürülmesi — Yanya kuşatmasının sonu |
| Menzile gölü | 1 | Menzile | YÜKSEK | ad başı | 1859-04-25 — Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu |
| Süveyş berzahı | 1 | Süveyş | YÜKSEK | ad başı | 1859-04-25 — Süveyş Kanalı kazısının başlaması ve Portsaid'in kuruluşu |
| Thessalonike | 1 | Selanik | YÜKSEK | eş-ad tablosu | -0166-01-01 — Makedonya Roma tarafından dört özerk bölgeye (merides) ayrıldı |
| Bizantion | 1 | İstanbul | YÜKSEK | eş-ad tablosu | -0354-01-01 — Sosyal Savaş sona erdi: Bizans, Khios, Rodos ve Kos İkinci Atina Birli |
| Seleukeia Pieria | 1 | Seleukeia | YÜKSEK | ad başı | -0245-01-01 — III. Ptolemaios Laodike Savaşı'nda Suriye'yi ve Mezopotamya'yı işgal e |
| Ekbatana (Hamedan) | 1 | Hemedan | YÜKSEK | eş-ad tablosu | -0624-01-01 — Kyaksares (Umakištar) Medya tahtına çıktı |
| Irkutsk Oblast | 1 | İrkutsk | YÜKSEK | ad başı | -22206-01-01 — Mal'ta (Belaya Nehri, Baykal yakini) - MA-1 bireyi: Mal'ta (MA-1): Üst |
| Ebukır koyu | 1 | Ebûkîr | YÜKSEK | ad başı | 1798-08-01 — Ebukır (Nil) deniz muharebesi — Napolyon'un donanmasının imhası |
| İstanbul surları | 1 | İstanbul | YÜKSEK | ad başı | 1453-04-06 — İstanbul kuşatması başladı |
| Necid güneybatısı | 1 | Dir'iye (Necid) | YÜKSEK | ad başı | 1891-01-01 — Müleydâ Savaşı — İkinci Suud Devleti'nin sonu, Necid Râşidîler'e geçti |
| Sevâkin ardalanı | 1 | Sevâkin | YÜKSEK | ad başı | 1891-03-03 — Grenfell kolunun Sinkat'tan geçişi — Sinkat Mehdî idaresinden çıkıp İn |
| Belen Geçidi | 1 | Belén | YÜKSEK | ad başı | 1832-07-29 — Belen (Beylan) Geçidi bozgunu — Çukurova açıldı |
| Konya Ereğlisi (Aktepe) ordugâhı | 1 | Konya | YÜKSEK | ad başı | 1553-10-05 — Şehzade Mustafa'nın Konya Ereğlisi'nde idamı |
| Belgrad yakınları | 1 | Belgrad | YÜKSEK | ad başı | 1739-07-22 — Hisarcık (Grocka) Zaferi — Belgrad yolunun açılması |
| Kazvin yakınları | 1 | Kazvin | YÜKSEK | ad başı | 1746-09-04 — Kerden Antlaşması — Osmanlı-İran savaşlarının sonu |
| Rusçuk karşısı | 1 | Rusçuk | YÜKSEK | ad başı | 1811-10-14 — Slobozia Bozgunu — Tuna ordusunun kuşatılması |
| Süveyş Kanalı | 1 | Süveyş | YÜKSEK | ad başı | 1915-01-14 — Birinci Kanal Harekâtı: Süveyş'e Sina çölü üzerinden taarruz |
| Güneybatı Arabistan | 1 | Avustralya İç Kesimi (Güney — Nullarbor/Güneybatı) | YÜKSEK | ad başı | 1871-01-01 — Asîr'in doğrudan idareye alınması |
| Bursa yakınları | 1 | Yenişehir (Bursa) | YÜKSEK | ad başı | 1513-04-24 — Şehzade Ahmed'in Yavuz Selim'in emriyle idamı |
| İstanbul tersaneleri | 1 | İstanbul | YÜKSEK | ad başı | 1572-06-13 — Kılıç Ali Paşa'nın yeniden kurduğu donanma denize indi |
| Hartum karşısı | 1 | Hartum | YÜKSEK | ad başı | 1898-09-02 — Ümmüdurman Muharebesi — Mehdî devletinin yıkılışı |
| Ozark yaylası | 1 | Springfield (Missouri, Ozark) | YÜKSEK | ad başı | 1829-01-01 — Springfield kuruldu — Ozark yaylasında ilk kalıcı yerleşim |
| İznik yöresi | 1 | İznik | YÜKSEK | ad başı | 1096-10-21 — Kılıcarslan Pierre l'Ermite'in başındaki Haçlı kitlesini imha etti |
| Niksar yolu | 1 | Niksar | YÜKSEK | ad başı | 1101-01-01 — Kılıcarslan, Dânişmendli Gümüştegin Gazi ile Niksar'a yürüyen Lombard  |
| Eskişehir yöresi | 1 | Eskişehir | YÜKSEK | ad başı | 1147-01-01 — Alman İmparatoru Konrad'ın ordusu Eskişehir yöresinde yenildi; Fransa  |
| Samsun yöreleri | 1 | Samsun | YÜKSEK | ad başı | 1339-01-01 — Eretna, Tokat, Kayseri ve Samsun yörelerini kendisine bağladı |
| Arabat oku | 1 | Arabat | YÜKSEK | ad başı | 1771-06-29 — Arabat Kalesi'nin düşmesi; Kerç, Yenikale ve Taman'ın Rus eline geçmes |
| Aleşki | 2 | Aleşki Seçi | DOĞRULA | ad başı | 1711-01-01 — Zaporojye Kazakları Kırım hanının izniyle Aleşki Seçi'ni kurdu |
| Thebai | 1 | İstefe (Tebai) | DOĞRULA | 0.91 | -0315-01-01 — Kassandros Thebai'yi yeniden kurdurdu |
| Thebai (Boiotia) | 1 | İstefe (Tebai) | DOĞRULA | 0.91 | -0334-01-01 — Thebai İskender'in emriyle yıkıldı |
| Selinus | 1 | Selinous (Selinunte) | DOĞRULA | 0.93 | -0408-01-01 — Hannibal Mago Selinus ve Himera'yı yıktı: Kartaca batı Sicilya'ya yerl |
| Megara | 1 | Megara Hyblaia (Megara Hyblaea) | DOĞRULA | ad başı | -0445-01-01 — Otuz Yıl Barışı: Atina kara imparatorluğunu (Boiotia, Megara, Akhaia)  |
| Lothagam North Pillar Site | 1 | Lothagam North | DOĞRULA | ad başı | -3001-01-01 — Lothagam North Pillar Site (Turkana Gölü, Kenya): anıtsal mezarlık pla |
| Mal'ta | 1 | Malta | DOĞRULA | 0.91 | -22206-01-01 — Mal'ta (Belaya Nehri, Baykal yakini) - MA-1 bireyi: Mal'ta (MA-1): Üst |
| Carthago | 1 | Cartago (Kosta Rika) | DOĞRULA | 0.93 | -0759-01-01 — Karthago - kuruluş geleneği 814/813 vs arkeolojik ~760: Kartaca: kesin |
| Hallan Çemi Tepesi | 1 | Hallan Çemi | DOĞRULA | ad başı | -9659-01-01 — Hallan Çemi: başlar |
| Tirol | 1 | Tirol Kalesi (Tirolo) | DOĞRULA | 0.91 | 1363-01-26 — Margarete Maultasch Tirol'ü Habsburglara devretti: Innsbruck ve Landec |
| Aricia (Latium) | 1 | Arica | DOĞRULA | 0.91 | -0504-01-01 — Aricia Savaşı: Etrüskler, Kyme'li Aristodemos tarafından yenildi |
| Tilsit | 1 | Tişît (Tichitt) | DOĞRULA | 0.91 | 1807-07-09 — Tilsit Antlaşması — Prusya topraklarının yarısını kaybetti, Varşova Du |
| Kasrılkebir | 1 | Kasrülkebîr | DOĞRULA | 0.91 | 1578-08-04 — Vâdisseyl (Kasrılkebir) Savaşı — Osmanlı desteğindeki Abdülmelik Porte |
| Oltenitsa | 1 | Oltenița | DOĞRULA | 0.94 | 1853-11-11 — Oltenitsa Zaferi: Tuna cephesinde ilk Osmanlı başarısı |
| Port Said | 1 | Portsaid | DOĞRULA | 0.94 | 1869-11-17 — Süveyş Kanalı'nın açılışı: Mısır üzerinden Hint yolunun kısalması |
| Cibali | 1 | Cibâl | DOĞRULA | 0.91 | 1633-09-01 — Cibali Yangını |
| Talış (Lenkeran-Astara) | 1 | Talmis | DOĞRULA | 0.91 | 1828-02-22 — Türkmençay Antlaşması: Revan ve Talış'ın Rusya'ya geçişi |
| Şarkıyye | 1 | Bilbîs (Şarkiye) | DOĞRULA | 0.93 | 1882-09-13 — Tel el-Kebîr Muharebesi — Urâbî ordusunun dağılması |
| Mersâ (La Marsa) | 1 | Mersâ Matruh | DOĞRULA | ad başı | 1883-06-08 — Mersâ (La Marsa) Sözleşmesi — Tunus himayesinin tamamlanması |
| Milyâne | 1 | Miyâne | DOĞRULA | 0.92 | 1184-04-14 — Benî Gāniye Bicâye, Cezayir, Milyâne ve Tunus'u istilâ etti |
| Dihistan | 1 | Dihistan ovası (Meşhed-i Misriyân) | DOĞRULA | ad başı | 1035-08-01 — Mesud barış yaptı: Dihistan Çağrı Bey'e, Nesâ Tuğrul Bey'e, Ferâve Mûs |
| Yedisan | 1 | Yedisan bozkırı | DOĞRULA | ad başı | 1770-08-12 — Yedisan ve Bucak Nogaylarının Rus himayesine geçmesi |
| Orkapı (Perekop) | 1 | Or Kapı (Ferahkirman) | DOĞRULA | 0.92 | 1771-06-26 — Orkapı hattının Ruslara geçmesi |
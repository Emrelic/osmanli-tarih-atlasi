# ORTAAV tur 2 raporu (web doğrulama)

Yöntem: Bash `curl -sL -A "Mozilla/5.0"` ile Treccani (Enciclopedia Italiana 1929-37: Baviera, Sassonia, Austria, Stiria, Tirolo, Polonia, Slesia, Boemia, Moravia, Avari, Gepidi, Unni, Russia, Kiev, Mosca, Smolensk, Cernigov, Polock, Borgogna, Burgundi, Meclemburgo, Wurttemberg, Livonia, Cumani) ve Deutsche Biographie / NDB (Albrecht der Bär, Hermann von Salza, Heinrich II. Jasomirgott) metin olarak okundu; alıntılar sayfa metninde arandı. Betikler scratchpad'de, depoya girmedi.

## 1) Sayılar (tur 2 sonu)
| Dilim | Kayıt | okundu | kismen-okundu | taslak | Eklenen |
|---|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 | 0 |
| B | 5 | 0 | 0 | 5 | 0 |
| C | 28 | 1 | 1 | 26 | 1 (hun-avrupa) |
| D | 27 | 0 | 10 | 17 | 3 (kiev-rusu, arles-kralligi, polotsk-knezligi) |
| E | 33 | 3 | 10 | 20 | 3 (silezya-piast, cernigov-knezligi, smolensk-knezligi) |
Elenen: 0. Toplam 93 kayıt: 4 okundu (hun-avrupa, tirol-kontlugu, krakov-dukaligi, silezya-piast), 21 kismen-okundu, 68 taslak. Taslak kalanlar aday kaynak satırlarını korur; uydurma künye yazılmadı.

## 2) Önemli bulgular (atlas düzeltmesi için)
- **bohemya**: Treccani Boemia kalıtsal kraliyet tacı 1198 (Filip, Svevia), Innocentius III teyidi 1204, Sicilya Altın Bulla'sı 1212 verir. Mevcut `bohemya` f=1000 (krallık) bu kaynakla desteklenmiyor; 870 dükalık + 1198/1212 krallık ayrımı önerilir (f=870 okunmadı).
- **stiriya-dukaligi t=1192**: Treccani: dükalık 1180; Otakar IV 1186 Georgenberg ile Babenberg'e bıraktı, Babenberg 1192'de devraldı. 1192 yalnız Otakar hanedanının sonudur; dükalık Babenberg/Habsburg altında sürer (künye genişletilmeli ya da ardıl künye). Çelişki değil, künye "Otakar evresi" adıyla tutarlı ama t polity sonu değildir.
- **avusturya**: NDB: Privilegium minus Eylül 1156 Regensburg (ay hassasiyeti); 17 Eylül günü okunmadı.
- **brandenburg**: NDB'de 11 Haziran 1157 günü YOK; 1134 Nordmark lehen, Pribislaw'dan sonra Brandenburg; f yıl hassasiyetine indirildi.
- **Polonya**: Treccani 1138 parçalanma ve 1320 Łokietek taç giyme OKUNDU (krakov-dukaligi, silezya t=1335 Trentschin).
- **arles**: f=933 okundu; Treccani 1038'den itibaren imparatorluğa gevşek bağlılık der; t=1032 yalnız hanedan sonu olabilir.
- **smolensk**: Treccani 1395 teslim (Vitoldo); mevcut t=1404.
- **cernigov**: Treccani 1026 (Mstislav başkenti); 1024 katedral inşası.
- **hun-avrupa**: c.370 – 454 (Nedao); Dengizico 468/469; mevcut 370-455 uyumlu.
- **teuton-sovalyeleri / teuton-devleti çift künye**: NDB Hermann von Salza: Rimini Altın Bulla'sı Mart 1226, Ceprano 1230. İki künye (dogu-avrupa 1230-1525 / orta-avrupa 1230-1525) aynı polity; birleştirilmesi öneri (kaynak künye tarihlerini ayırmıyor; 1230 Kruszwica okunmadı).

## 3) Ulaşılamayan / yapılmayan
- PVL (archive.org `russianprimarych...` 401, Cross çevirisi yalnız ses dosyası): 882 (Oleg Kiev) kronik tarihi okunamadı; Treccani Oleg 879-912 verir. Kiev Rus'u f=882 mevcut künye `var` (≤25 yıl).
- `vladimir-suzdal` (1157-1281), `galicya-volhinya`, `bavyera` (907), `meissen`, `utrecht-piskoposlugu`, `almanya`: Treccani sayfası yok/boş ya da ilgili tarih sayfada çıkmadı; OKUNMADI. Treccani `halic`, `vladimir-suzdal`, `meissen` 404/boş.
- B dilimi (5 kayıt: Heuneburg, Kimmerler, Olbia, Tyras, Savromatlar) ve C dilimindeki kabile birlikleri bu turda doğrulanamadı (taslak).
- Rugi/Heruli/Skiri/Gepid vb. için Jordanes/Eugippius tam metni aranmadı (zaman).

## 4) İstekler
1. Vladimir-Suzdal, Galiçya-Volhinya, Bavyera, Meissen, Utrecht için Martin *Medieval Russia* / Cambridge History of Russia I, NDB (Heinrich der Löwe, Otto von Wittelsbach), Lexikon des Mittelalters içeren ayrı kaynak turu.
2. Bohemya künyesi (870/1198) ve teuton çift künye birleştirme kararı ana oturumda.
3. Karar: Krakov/Silezya/Büyük Polonya alt dükalıkları ayrı mı, `polonya-erken` içinde mi?

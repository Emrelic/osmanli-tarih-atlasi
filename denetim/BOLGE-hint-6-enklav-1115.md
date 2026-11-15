# BOLGE hint — Adım 6: Enklav / eksklav (15 Kasım 2026)

Ölçüm: kutudaki Avrupa/Çin-dışı sömürge limanlarının `s:` pencereleri (node `vm`); `eksklav:`/`enklav:` bayrakları `VERI-YAPISI.md` §"enklav ↔ eksklav". Harita çıktısı (petek koşusu) ölçülmedi. **Değişmez 8 ölçülemedi** (ana checkout'ta ölçülemez).

## 1. Modellenmiş enklavlar (yerleşim pencereleri)
| Yerleşim | Pencereler (özet) | Gözlem |
|---|---|---|
| **Goa** | Behmenî 1347-08-03→Bîcâpûr 1490→**portekiz-hindistani-goa 1510-11-25→1961-12-19**→Hindistan | 25 Kasım 1510 Albuquerque'nin kesin fethi ile uyumlu görünür (kaynak okunmadı) |
| **Diu** | Gucerat 1407→**portekiz-hindistani-goa 1535-10-25→1961-12-19** | 1535 antlaşması; Diu kuşatması 1509 (Diu Deniz Savaşı 1509-02-03 künye-içi) |
| **Daman** (Portekiz 1559–1961) | **YOK** — yerleşim yok | eksik enklav; Goa+Diu+Daman = Estado da Índia |
| **Bombay** | Gucerat→**portekiz 1534-12-23**→ingiltere 1665-02-18→ingiliz-hindistani 1757-06-23 | 1534 Basein; 1665 İngiliz: tutarlı |
| **Pondişeri** | fransa 1674→hollanda 1693-09-06→fransa 1699-09-01→ingiltere 1761-01-16→fransa 1765→ingiltere 1778-10-18→fransa 1785→ingiltere 1793-08-23→**fransa-cumhuriyet 1816-12-04→1954-11-01**→Hindistan | zengin; 1793'te `fransa` künyesi t=1792-09-22'yi aşıyor (Adım 3) |
| **Çandernagor** | fransa 1688→ingiltere 1757-03-23→fransa 1763→ingiltere 1793-06-10→fransa-cumhuriyet 1816-12-04→**1950-05-02** | Çandernagor'un Hindistan'a devri 1950 (fiilî) / 1954 (hukukî) — bkz. S10 |
| **Karaikal, Mahé, Yanam** (Fransız) | **YOK** | eksik enklav (Fransız Hindistanı 5 loji) |
| **Tranquebar** | Vijayanagara→nayak 1532→**danimarka 1620-11-19→1845-02-22**→ingiliz-hindistani | doğru model; ama künye `danimarka-hindistani` (yerleşimsiz) ile `danimarka` KİMLİK KOPUKLUĞU (Adım 1, K1) |
| **Serampore** (Danimarka 1755–1845) | **YOK** | eksik |
| **Nagapatnam** | vijayanagara→portekiz 1554→**hollanda 1658→1781-11-12**→ingiliz-hindistani | Hollanda Nagapattinam 1658 ✓ (fiilî) |
| **Koçin/Kolam/Kannûr** | Portekiz 1502/1503/1505→Hollanda 1661–63→İngiliz | tutarlı (Hollanda 1663-01-07 Kochi) |
| **Kolombo** | seylan-sinhala→portekiz 1518-09-01→hollanda 1656-05-12→ingiltere 1796-02-16 | Seylan-özel künyeler (`portekiz-seylani` Y2, `hollanda-seylani` Y2, `ingiliz-seylan` Y3) var, ama Kolombo penceresi bunlara değil genel `portekiz`/`hollanda`/`ingiltere` künyelerine bağlı → Kolombo haritada Avrupa devleti rengiyle, Seylan künyeleriyle değil (tutarsızlık; hangisinin esas olduğu kararı KASA'nın) |
| **Hûglî** | Bengal→**portekiz 1580–1632-06-24**→Mughal | Portekiz Hugli 1632 (Şah Cihan kuşatması) ✓ yaklaşık |
| **Kalküta** | ingiltere 1690-08-24→bengal-nevabligi 1756-06-20→ingiliz-hindistani 1757-01-02 | 1690 Job Charnock tarihi; 20 Haziran 1756 Kalküta düşüşü ✓ |
| **Madras** | ingiltere 1639→fransa 1746-09-21→ingiltere 1749-08-21 | ✓ (La Bourdonnais, Madras 1746) |
(Bu hizalamalar tarihî bilgiyle uyumlu görünüyor; **gün teyidi için kaynak okunmadı.**)

## 2. Eksik / sorunlu enklavlar
1. **Daman, Mahé, Karaikal, Yanam, Serampore, Chinsura (Hollanda 1656–1825), Masulipatnam (Hollanda), Pulicat (Hollanda), Surat'ın Avrupa kolonileri (Hollanda/Fransa/İngiliz 17. yy)** — haritada yerleşim yok; petek motoru bunları çevre devlete emer (Mughal/Nevab/Marathi). Değişmez 3/yaklaşıklık: beyansız yaklaşıklık değil çünkü o yer kronolojide yer almıyor; ama Fransız/Danimarka künyeleri bu yüzden yerleşimsiz kalıyor.
2. `fransiz-hindistani` ve `danimarka-hindistani` künyeleri boş; `fransa-cumhuriyet` ve `danimarka` künyeleri kullanılıyor. Öneri: ya yerleşim pencerelerinde `d:` bu künyelere çevrilsin ya da künyeler kaldırılsın (renk `#3286b9`, `#03a6ff`).
3. **Eksklav bayrağı:** Goa/Daman/Diu, Pondişeri/Karaikal/Mahé/Yanam, Tranquebar ana gövdeden kopuk, hinterlandsız kıyı kalesi; `s:` pencerelerinde `eksklav:true` / `enklav:true` taranmadı → bu raporda **ölçülmedi** (`VERI-YAPISI.md` §220; `yerlesimler*.js` yasak, kuyruğa).
4. **Değişmez 8** (şehir bölgesi ülke sınırını aşamaz): ölçülemedi; Goa (Portekiz, kıyı) ve Pondişeri (Fransız) tipik risk noktalarıdır — koşu sonrası görünür.
5. **S10:** Çandernagor pencere sonu 1950-05-02 (fiilî devir) vs. hukukî 9 Haziran 1952 (de jure) / 1954 (Pondişeri) — hangi gün esas, kaynak okunmadı.
6. Maldivler (İngiliz himayesi 1887–1965) künyesi yerleşimsiz; Male haritada boyanmaz (kuyruk).

## 3. Portekiz Goa/Diu ↔ yan künyeler
`portekiz-hindistani-goa` (f 1505, t 1961-12-19): Y2 (Goa, Diu); Hint-Portekiz maddesi: E1 (1961-12-19 Hindistan'ın ilhakı; atlas kendi künyesini "dayanak sayılamaz" olarak beyan etmiş). Künye ömrü ✓ (1505 Francisco de Almeida'nın ilk valiliği; Goa 1510).

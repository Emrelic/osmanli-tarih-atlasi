# Avusturya (Habsburg) ek okuma: envanter ve konu listesi (Aşama 1)

Dal `ekokuma-avusturya-1125` · LAB · 25 Kasım 2026 · şartname: `origin/ekokuma-sartname-1125:denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md`.
Ölçüm ağacı: bu worktree, `origin/main` ucu `ba268233c`. Betikler scratchpad'de (`envanter.js`, `bag_sina.js`); repoya konmadı.

## 1. Künyeler (`data/devletler.js`, ölçüldü)

| id | ad | f | t | künye kronolojisi |
|---|---|---|---|---|
| `avusturya-marki` | Avusturya Markı (Babenberg) | 0976-01-01 | 1156-09-17 | 3 |
| `avusturya-dukaligi` | Avusturya Dükalığı (Babenberg, II. Ottokar) | 1156-09-17 | 1276-11-21 | 11 |
| `habsburg` | Habsburg Avusturya | 1282-12-27 | 1918-11-12 | 14 |
| `macaristan-habsburg` | Macaristan Krallığı (Habsburg tacı) | 1526-12-17 | 1918-11-16 | 7 |
| `habsburg-hollandasi` | Habsburg Hollandası | 1482-03-27 | 1581-07-26 | 4 |
| `avusturya-hollandasi` | Avusturya Hollandası | 1714-01-01 | 1795-10-01 | 7 |
| `avusturya-cumhuriyet` | Avusturya I. Cumhuriyeti | 1918-11-12 | 1938-03-13 | 12 |
| `avusturya-ikinci-cumhuriyet` | Avusturya II. Cumhuriyeti | 1945-04-27 | (sürüyor) | 9 |

Kartlarda `devlet:"habsburg"` kullanılır (1282–1918 bütün Habsburg Avusturyası tek künyededir; ayrı
"Avusturya İmparatorluğu 1804" ya da "Avusturya-Macaristan 1867" künyesi YOK).

## 2. Kronoloji maddeleri (ölçüldü)

- `KRONOLOJI_HABSBURG` (`data/kronoloji_habsburg.js`): 117 madde, 1526-08-29 → 1918-11-11. Avusturya'nın
  kendi anlatısının ana omurgası (Osmanlı cephesi + iç tarih + kültür).
- `KRONOLOJI_COK_HABSBURG`: 9 madde (Tirol 1363, Viyana 1515, Worms 1521, Erdel 1687–1691, Burgenland 1921).
- `OLAYLAR_AVMAC_A/B/C/FINAL_1029`, `OLAYLAR_AVUSTURYA_MACAR_1027`: ~40 sınır/yer maddesi (Babenberg'den AB'ye).
- `olaylar.js` ve ekleri: Osmanlı cephesi maddeleri (1529, 1683 "II. Viyana Kuşatması bozgunu", Zenta, Karlofça…).
- Mevcut Avusturya ek okuması: `data/ekokuma_avusturya.js` 3 kart (Eugen hafızası, 1683–1718 askerî geri kalış,
  1736–39 savaşı) + `ekokuma_dunya.js` `dunya3-prens-eugen-kimdir` + antlaşma kartları (1533, 1547, 1562, 1568,
  Karlofça karşı-anlatı). Bunlar TEKRARLANMAZ.

## 3. Kronoloji boşlukları (ek okuma dalında YAZILMADI; listelendi)

Ölçüm: aşağıdaki olaylar için Avusturya evreninde gün maddesi bulunamadı (`envanter.js` anahtar kelime taraması;
taramanın kaçırdığı başka adlı madde olabilir, ikinci bakış gerekli):
1. Maximilian I'in Burgonyalı Maria ile evliliği (1477) — "Bella gerant alii" evlilik politikasının başlangıcı.
2. V. Karl'ın tahttan çekilmesi ve hanedanın İspanya/Avusturya kollarına bölünmesi (1556).
3. Maria Theresia'nın Pressburg'da Macar kraliçesi olarak taç giymesi (1741) ve "vitam et sanguinem" diyeti (1741).
4. Maria Theresia'nın Bohemya kraliçesi olarak taç giymesi (Prag, 1743-05-12, ADB'de; NDB'de yok).
5. Franz Joseph ile Elisabeth'in evliliği (1854).
6. Meksika İmparatoru Maximilian'ın kurşuna dizilmesi (1867).
7. Temmuz Krizi: Avusturya'nın Sırbistan'a ültimatomu (1914-07-23).
8. I. Karl'ın tahta çıkışı (1916-11-21 Franz Joseph'in ölüm maddesi var, ayrı cülus maddesi yok) ve Sixtus mektupları (1917).
9. II. Leopold'un kısa saltanatı (1790–1792) ve Pillnitz Bildirisi (1791).
10. Kara Mustafa Paşa'nın idamı Avusturya kronolojisinde yok (Osmanlı tarafında aranmalı).
11. 1938 Anschluss Avusturya evreninde `OLAYLAR_AVMAC_C_1029` 1938-03-12'de var; 1938-04-10 halkoylaması yok.

## 4. Konu adayları (68)

Sütunlar: **ilgi sinyali** = konunun nerede tartışıldığı (bu oturumda forum/arama sayımı YAPILMADI; sinyal türü
uzman tahminidir, Aşama 3 öncesi ölçülmeli) · **bağ** = `gün|başlık parçası` (bu dosyadaki her bağ
`bag_sina.js` ile madde evreninde arandı, sonuç §6) · **tür** · **kaynak** (okundu/okunmadı) · **yaygın yanlış → akademik durum**.

Kaynak kısaltması: NDB = *Neue Deutsche Biographie* (deutsche-biographie.de, Bayerische Akademie der Wissenschaften).

### İlk 40 (sıralı)

| # | konu | ilgi sinyali | bağ | tür | kaynak | yaygın yanlış → akademik durum |
|---|---|---|---|---|---|---|
| 1 | Maria Theresia: hükümdar kaydı | okul müfredatı (AT), belgesel/dizi | `1740-10-20|Maria Theresia` | hükümdar | NDB 16 (1990) Wandruszka — **okundu** | "imparatoriçeydi" → kendi unvanı kraliçe (Macar/Bohemya); "Kaiserin" eşinin seçimiyle (1745) |
| 2 | Mayerling: veliaht Rudolf'un ölümü — cinayet mi intihar mı? | komplo kitapları, belgesel, film | `1889-01-30|Mayerling` | tartisma/magazin | NDB 22 (2005) Urbanitsch — **okundu** | "Siyasi suikast" → NDB: Vetsera'yı öldürüp intihar; ayrıntılarda açık noktalar |
| 3 | Pragmatik Yaptırım: bir kâğıt imparatorluğu korur mu? | ders kitapları, sınav | `1713-04-19|Pragmatik` | sebep-sonuc | NDB 11 (1977) Braubach — **okundu** | "Garantiler işe yaradı" → 1740'ta hemen çöktü, bedeli ağır ödünler |
| 4 | II. Joseph: aceleci reformcu | AT/CZ hafıza, "aydınlanmış despot" tartışması | `1781-10-13|Hoşgörü` | kimdir | NDB 10 (1974) Wagner — **okundu** | "Ölmeden her şeyi geri aldı" → Hoşgörü, kilise reformu, serfliğin kaldırılması kaldı |
| 5 | Wallenstein hain miydi? | Schiller dramı, CZ/DE hafıza | `1634-02-25|Wallenstein` | tartisma | NDB 27 (2020) Kampmann — **okundu** | "Kesin hain" → Pekař/Srbik ayrışması, karar yok |
| 6 | Metternich: kişi kartı | "gerici" imgesi, 1815 düzeni | `1848-03-13|Metternich` | kisi | NDB 17 (1994) Aretin — **okundu** | "Sadece baskı" → barışı koruma başarısı + reform yapmama |
| 7 | Prag'da pencereden atılma: gübre yığını efsanesi | popüler tarih, mem | `1618-05-23|Pencereden` | magazin | NDB 16 (1990) Hojda (Martinitz) — **okundu** | "Gübreye düştüler" → NDB: dik yamaç düşüşü yumuşattı |
| 8 | Veliaht Rudolf: kişi kartı | Mayerling'in öteki yüzü: liberal veliaht | `1889-01-30|Mayerling` | kisi | NDB 22 Urbanitsch — **okundu** | "Sadece romantik figür" → gizli gazete yazıları, Kronprinzenwerk |
| 9 | 1683: kahve ve kruvasan Viyana'ya kuşatmadan mı kaldı? | TR+AT popüler anlatı, turizm | `1683-09-12|Kahlenberg` | karsi-anlati | Karl Teply, *Die Einführung des Kaffees in Wien* (1980) — okunmadı | Kolschitzky/kruvasan → akademik çalışmalar efsane der (teyit gerekli) |
| 10 | Kahlenberg: Sobieski mi, Lorraine mi? | PL–AT hafıza rekabeti | `1683-09-12|Kahlenberg` | karsi-anlati | NDB "Karl V. von Lothringen" — okunmadı | Tek kahraman anlatısı → koalisyon zaferi |
| 11 | Saraybosna 1914: suikast ve "yanlış dönüş" | belgesel, ders | `1914-06-28|Saraybosna` | savas-hikayesi | NDB 5 (1961) "Franz Ferdinand" — okunmadı | Tek tetik anlatısı → Temmuz Krizi'nin karar zinciri |
| 12 | Franz Ferdinand: trializm mi, büyük Avusturya mı? | AT/BA/HR tartışma | `1914-06-28|Saraybosna` | kimdir | NDB 5 — okunmadı | "Slav dostu reformcu" → tasarıları belirsiz |
| 13 | Ausgleich 1867: eşit ortaklık mı, Macar zaferi mi? | HU–AT hafıza | `1867-05-29|Ausgleich` | tartisma | NDB "Andrássy" / "Deák" — okunmadı | — |
| 14 | Elisabeth (Sisi) miti ve 1898 suikastı | film, turizm | `1898-09-10|Elisabeth` | magazin | NDB 4 "Elisabeth" — okunmadı | "Sissi filmleri" → gerçek biyografi |
| 15 | Franz Joseph: 68 yıllık saltanat | ders, hafıza | `1848-12-02|Franz Joseph` | hükümdar | NDB 5 — okunmadı | — |
| 16 | Viyana Kongresi: "dans eden kongre" | ders | `1815-06-09|Viyana Kongresi` | tartisma | NDB Metternich (dolaylı okundu) | "Sadece balo" → kalıcı denge düzeni |
| 17 | 1529 Viyana: kuşatma neden kalktı? | TR popüler | `1529-09-27|Viyana` | sebep-sonuc | TDV "Viyana" — okunmadı | Mevcut Osmanlı kartlarıyla mükerrer tarama gerekli |
| 18 | Zitvatorok: "eşitlik" ne demekti? | TR ders | `1606-11-11|Zitvatorok` | antlasma | TDV "Zitvatorok" — okunmadı | "Osmanlı geriledi" → protokol eşitliği, toprak değil |
| 19 | Beyaz Dağ 1620: Çek "karanlık çağ" (temno) anlatısı | CZ ulusal hafıza | `1620-11-08|Beyaz Dağ` | karsi-anlati | NDB "Ferdinand II." — okunmadı | "Temno" → yeniden değerlendirme |
| 20 | Vestfalya 1648 Habsburg için ne değiştirdi? | ders, uluslararası ilişkiler | `1648-10-24|Vestfalya` | sebep-sonuc | — okunmadı | "Egemenlik sisteminin doğumu" mitine akademik itiraz |
| 21 | VI. Karl ve Pasarofça: en geniş sınır | TR ders | `1718-07-21|Pasarofça` | sebep-sonuc | NDB 11 Braubach — **okundu** (dolaylı) | — |
| 22 | 1739 Belgrad: kazanılanın geri verilişi | TR ders | `1739-09-18|Belgrad Antlaşması` | tartisma | NDB 11 Braubach — **okundu** (dolaylı) | Mevcut `avusturya-1736-1739` kartıyla örtüşme kontrolü |
| 23 | Silezya'nın kaybı ve Maria Theresia'nın "intikam" savaşı | DE/AT | `1763-02-15|Hubertusburg` | sebep-sonuc | NDB 16 Wandruszka — **okundu** (dolaylı) | — |
| 24 | Renversement des alliances 1756 | diplomasi tarihi | `1756-01-01|Renversement` | sebep-sonuc | NDB "Kaunitz" — okunmadı | — |
| 25 | Zorunlu ilköğretim 1774 | eğitim tarihi | `1774-01-01|Schulordnung` | teknik-bilimsel | NDB "Felbiger" — okunmadı | — |
| 26 | Serfliğin kaldırılması 1781 | ders | `1781-11-01|Serfliğin` | sebep-sonuc | NDB 10 Wagner — **okundu** (gün vermiyor) | — |
| 27 | Austerlitz: Üç İmparator | Napolyon ilgisi | `1805-12-02|Austerlitz` | savas-hikayesi | — okunmadı | — |
| 28 | Kutsal Roma İmparatorluğu'nun sonu 1806 | ders, "ne kutsal ne Roma" sözü | `1806-08-06|Kutsal Roma` | tartisma | NDB "Franz II." — okunmadı | Voltaire sözünün bağlamı |
| 29 | Marie Louise'in Napolyon'la evliliği | magazin | `1810-04-01|Marie Louise` | magazin | — okunmadı | — |
| 30 | 1848 Viyana ve Macar devrimi | HU hafıza | `1849-04-14|Habsburg hâkimiyetinden` | tartisma | — okunmadı | — |
| 31 | Rus yardımıyla Macar devriminin bastırılması | HU–RU | `1849-08-13|Macar ayaklanmasının` | sebep-sonuc | — okunmadı | Kossuth'un Osmanlı'ya iltica bağı |
| 32 | Königgrätz: Almanya'dan çıkış | DE/AT | `1866-07-03|Königgrätz` | savas-hikayesi | — okunmadı | — |
| 33 | Bosna-Hersek ilhakı 1908 | TR/BA/RS | `1908-10-06|Bosna-Hersek` | sebep-sonuc | TDV "Bosna-Hersek" — okunmadı | — |
| 34 | Berlin 1878: işgal mi idare mi? | TR/BA | `1878-07-13|Berlin Kongresi` | antlasma | TDV — okunmadı | — |
| 35 | Ringstrasse ve surların yıkılışı | şehir tarihi, turizm | `1857-12-20|Ringstrasse` | mimari | — okunmadı | — |
| 36 | Mendel: manastırdaki genetik | bilim tarihi | `1866-01-01|Mendel` | teknik-bilimsel | NDB "Mendel" — okunmadı | "Hemen unutuldu" anlatısı tartışmalı |
| 37 | Freud ve Viyana 1900 | kültür tarihi | `1900-01-01|Freud` | teknik-bilimsel | NDB "Freud" — okunmadı | — |
| 38 | 1873 Dünya Sergisi ve Borsa çöküşü | ekonomi tarihi | `1873-05-09|Borsa` | sebep-sonuc | — okunmadı | — |
| 39 | Hofkriegsrat 1556: Osmanlı'ya karşı daimî ordu | askerî tarih | `1556-01-01|Hofkriegsrat` | teknik-bilimsel | — okunmadı | — |
| 40 | Rudolf II'nin Prag'ı: Brahe ve Kepler | bilim tarihi, simya mitleri | `1600-01-01|Kepler` | magazin | NDB "Rudolf II." — okunmadı | "Deli imparator" klişesi |

### 41–68 (sırasız)

| # | konu | bağ | tür | kaynak |
|---|---|---|---|---|
| 41 | Mohaç ve Habsburg mirası: evlilik politikası | `1526-08-29|Habsburg mirasının` | sebep-sonuc | okunmadı |
| 42 | Ferdinand'ın Bohemya seçimi | `1526-10-23|Bohemya` | sebep-sonuc | okunmadı |
| 43 | Güns 1532: küçük kale, büyük gecikme | `1532-08-05|Güns` | savas-hikayesi | okunmadı |
| 44 | Nagyvárad 1538 gizli anlaşması | `1538-02-24|Nagyvárad` | antlasma | okunmadı |
| 45 | Eğri 1552: Macar destanı | `1552-09-04|Eğri` | karsi-anlati | okunmadı |
| 46 | Augsburg Din Barışı | `1555-09-25|Augsburg` | sebep-sonuc | okunmadı |
| 47 | Ferdinand'ın ölümü ve mirasın üçe bölünmesi | `1564-07-25|üçe bölünmesi` | sebep-sonuc | okunmadı |
| 48 | Haçova 1596 Avusturya gözünden | `1596-10-26|Haçova` | karsi-anlati | okunmadı |
| 49 | Bocskai ayaklanması | `1604-10-15|Bocskai` | sebep-sonuc | okunmadı |
| 50 | Bruderzwist: Rudolf–Matthias | `1608-01-01|Bruderzwist` | magazin | okunmadı |
| 51 | Majestätsbrief 1609 | `1609-07-09|Majestätsbrief` | sebep-sonuc | okunmadı |
| 52 | Sen Gotar ve "zafere rağmen" Vasvár | `1664-08-09|Vasvár` | tartisma | okunmadı |
| 53 | Wesselényi tertibi | `1671-04-30|Wesselényi` | sebep-sonuc | okunmadı |
| 54 | Kutsal İttifak 1684 | `1684-03-05|Kutsal İttifak` | antlasma | okunmadı |
| 55 | Budin 1686 Habsburg gözünden | `1686-09-02|Budin` | karsi-anlati | okunmadı |
| 56 | Diploma Leopoldinum ve Erdel | `1691-12-04|Diploma Leopoldinum` | antlasma | okunmadı |
| 57 | Rákóczi ayaklanması ve Osmanlı'ya sığınma | `1711-04-29|Szatmár` | sebep-sonuc | okunmadı |
| 58 | Karlskirche: veba adağı ve Habsburg baroku | `1714-01-01|Karlskirche` | mimari | okunmadı |
| 59 | Franz Stephan ve Habsburg-Lothringen | `1745-09-13|Franz Stephan` | aile-kunyesi | NDB 16 (dolaylı okundu) |
| 60 | Haugwitz reformu | `1749-01-01|Haugwitz` | teknik-bilimsel | NDB 16 — okundu (dolaylı) |
| 61 | Galiçya'nın ilhakı ve Lehistan paylaşımı | `1772-01-01|Galiçya` | karsi-anlati | okunmadı |
| 62 | Son Osmanlı-Habsburg savaşı 1788 ve Joseph'in komutası | `1788-02-09|Son Osmanlı-Habsburg` | savas-hikayesi | NDB 10 — okundu |
| 63 | Ziştovi 1791 | `1791-08-04|Ziştovi` | antlasma | okunmadı |
| 64 | ABGB 1811: hâlâ yürürlükteki medenî kanun | `1811-06-01|Abgb` | teknik-bilimsel | okunmadı |
| 65 | Solferino ve Kızılhaç'ın doğuşu | `1859-06-24|Solferino` | dis-yankilar | okunmadı |
| 66 | Zweibund 1879 | `1879-10-07|Zweibund` | sebep-sonuc | okunmadı |
| 67 | Semmering demiryolu | `1854-07-17|Semmering` | teknik-bilimsel | okunmadı |
| 68 | Burgenland 1921 ve Sopron halkoylaması | `1921-10-13|Venedik Protokolü` | tartisma | okunmadı |

## 5. Aşama 2'de yazılan 8 örnek

`data/hukumdar_avusturya.js` (Maria Theresia) · `data/kisi_avusturya.js` (Metternich, veliaht Rudolf) ·
`data/ekokuma_dev_avusturya_01.js` (Mayerling-tartisma, Pragmatik Yaptırım-sebep-sonuc, II. Joseph-kimdir,
Wallenstein-tartisma, Prag pencere-magazin). Konu 1–8'in karşılığıdır.

## 6. Bağ sınaması

`node bag_sina.js <worktree> denetim/EKOKUMA-AVUSTURYA-KONU.md <kart dosyaları>` — `js/app.js`ten
`_ekNorm`, `_ekBagGun`, `_ekBagEslesir`, `ekKartBagliMi` işlevlerini METİN OLARAK okuyup aynısını koşturur.
Sonuç bu dosyanın commit mesajında ve Aşama 2 raporundadır.

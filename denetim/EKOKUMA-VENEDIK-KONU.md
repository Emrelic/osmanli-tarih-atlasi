# Venedik ek okuma: envanter ve konu listesi (25 Kasım 2026)

Şartname: `denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md` (dal `ekokuma-sartname-1125`), 1. aşama.
Ölçüm: bu dalın ağacı (`origin/main` üstünde), `data/*.js` dosyaları Node ile yüklenerek.

## 1. Envanter

### Künyeler (`data/devletler.js`)

| id | Ömür | Künye içi kronoloji |
|---|---|---|
| venedik | 0697-01-01 / 1797-05-12 | 10 madde |
| euboea-negroponte | 1204-01-01 / 1470-07-12 | 4 |
| girit-venedik | 1204-08-12 / 1669-09-27 | 11 |
| kibris-venedik | 1489-02-26 / 1571-08-01 | 4 |
| venedik-1848 | 1848-03-22 / 1849-08-22 | 5 |
| lombardiya-venedik (Habsburg krallığı; Venedik Cumhuriyeti'nin devamı değil) | 1815-06-09 / 1866-10-12 | 5 |

Süzgece `harita:"venedik"` boya anahtarı ve ad eşleşmesi takıldı; Venezuela künyeleri ayıklandı.

### Kronoloji

Tekilleştirilmiş **283 satır** (tam döküm en altta). Başlıca kaynak dosya `data/kronoloji_venedik.js`
(87 madde). Yüzyıllara dağılım: VII 2 · VIII 1 · IX 1 · X 1 · XI 3 · XII 12 · XIII 36 · XIV 44 ·
XV 58 · XVI 35 · XVII 48 · XVIII 23 · XIX 18 · XX 1. Bir olay birkaç dosyada ayrı satır olabilir;
sayı olay sayısı değil satır sayısıdır.

### Mevcut kartlar

Başlığında, kimliğinde ya da bağında Venedik geçen **21 ek okuma kartı** var; çoğu Osmanlı
cephesinden. Yeni kartlar bunları tekrar etmez:
antlaşma (Zadar 1358, Dagno 1448, 1479, 1503, 1540, 1573, 1718 iki kart) · Kıbrıs'ın devri 1489 ·
1463 savaşı · Eğriboz 1688 · İstendil 1715 · Mora 1715 ve Mora idaresi (iki kart) · el değiştiren
yerler · yedi savaş tartışması · deniz savaşları · Karlofça karşı anlatısı · Campo Formio (iki kart) ·
1770 notası.

`KISILER` içinde Venedik'le doğrudan ilgili kayıtlar: `enrico-dandolo`, `francesco-morosini`,
`caterina-cornaro` (diğer eşleşmeler Venedik'le savaşan Osmanlı ve Avrupalı figürler).
Doge için hükümdar kaydı (`HUKUMDAR_VENEDIK`) yok.

### Kronoloji boşlukları

Aşağıdakiler 283 satırın başlıklarında bulunamadı (başlık araması; gövde metinleri taranmadı).
**Buradaki yüzyıl ve yıllar okunmuş kaynağa dayanmaz, yalnız arama ipucudur; madde yazılmadan
önce ayrıca kaynaklanır.** Bu dalda kronoloji maddesi yazılmadı.

- VII–XI. yüzyıl çok seyrek (toplam 8 satır): dükalık merkezinin Rialto'ya taşınması, Aziz Markos
  naaşının getirilişi, IX–X. yüzyıl imparatorluk ahitnameleri.
- 1204 paylaşım antlaşmasının (Partitio) kendi maddesi; 1261'de Latin İmparatorluğu'nun sonunun
  Venedik'e etkisi.
- XIV–XV. yüzyıl: Cenova'ya karşı 1350'lerdeki yenilgi, Francesco Foscari'nin seçilmesi ve
  indirilmesi, Carmagnola'nın yargılanıp idamı, matbaanın gelişi ve Aldus Manutius.
- XVI–XVII. yüzyıl: 1575–77 vebası (yalnız 1577 yangını ve 1630 vebası var), Palmanova, Paolo
  Sarpi (yalnız aforoz krizi var), Galileo'nun Venedik yılları, ilk halka açık opera, Elena Cornaro
  Piscopia.
- XVIII. yüzyıl: 1720 ile 1797 arasında `kronoloji_venedik.js` başlıklarında yalnız 1720, 1755,
  1784, 1789 ve 1797 var; kültür hayatı (Vivaldi, Goldoni, Casanova) hiç yok.

### Envanterde görülen veri sorunları (düzeltilmedi, takip işi)

- 1204-08-12 için iki farklı anlatım: "Girit Venedik'e satıldı" ve "Venedikliler Kandiye'yi alır".
- Girit'in kaybı `kronoloji_venedik.js`te 1669-09-06, künyelerde 1669-09-27 (künyenin `ic_not`u bu
  çelişkiyi beyan ediyor).
- 1499-1503 savaşının sonu 1502-12-14 ve 1503-01-01 diye iki ayrı maddede.
- `data/kronoloji_venedik.js` başlık yorumu "henüz canlı değil" diyor; dosya `index.html`deki paket
  listesinde.
- `venedik` künyesinin `kaynak:` alanı yalnız "venedik" yazıyor.

- Örnek kartlar yazılırken görülenler: `1192-06-21` Dandolo'nun seçilme maddesi — okunan DBI maddesi yalnız
  selefin 14 Haziran 1192'de öldüğünü yazıyor, 21 Haziran teyit edilemedi. `1688-04-08` "Atina'nın geri
  alınışı" — Laborde'daki tanık mektubu kalenin 4 Nisan'da bırakıldığını söylüyor. `1082-01-01` ferman
  maddesinde 1082/1092 tartışması beyan edilmeli. `KISILER`deki `enrico-dandolo` kaydı seçilmeyi
  "1 Haziran 1192" diye veriyor ve `enrico-dandolo` ile `caterina-cornaro` kayıtları Britannica'ya dayanıyor.

### Konu listesinin okunuşu

- **Akademik kaynak:** "okundu" yalnız bu turda açılıp okunan kaynak demektir. "Okunmadı" satırındaki
  eser adları **aday listesidir**: künyeleri de henüz doğrulanmadı, hiçbir olgu onlardan alınmadı.
  Bu satırlarda "akademik durum" bilerek yazılmadı; kart yazılırken kaynak okunup doldurulur.
- **İlgi:** `A1` mit ve efsane araması · `A2` Türkçe Venedik-Osmanlı araması · `A3` Faliero,
  Carmagnola, Foscari, Casanova araması · `A4` 1573 barışı ve "kol-sakal" sözü araması
  (25 Kasım 2026, dört genel web araması; sonuçlar yalnız ilgi sinyalidir, A1 zayıf kaldı).
  `Ö` = ön değerlendirme, **ilgi ölçülmedi**. Sıralama bu yüzden kısmen editör yargısıdır.
- **Bağlanacağı madde:** ters tırnak içindeki `gün|başlık parçası`, `js/app.js` eşleştirme kuralıyla
  283 satıra karşı sınandı; her biri tek satır buluyor. 283 satır dışındaki maddeler sınanmadı.

## 2. Sıralı konu listesi (80 konu)

### İlk 40 (öncelik sırasıyla)

| # | Konu | Tür | Bağlanacağı madde | Akademik kaynak | İlgi | Yaygın yanlış / tartışma sorusu |
|---|---|---|---|---|---|---|
| 1 | Dördüncü Haçlı Seferi İstanbul’a niçin saptı; Venedik planladı mı? | tartisma | `1204-04-13\|IV. Haçlı` | Harris, "The Debate on the Fourth Crusade"; Villehardouin (Marzials); DBI Dandolo; Barker (TMR 2004); TDV Haçlılar — **okundu** (Queller & Madden, Angold, Phillips yalnız aktarımla) | A1 | "Her şeyi Venedik tezgâhladı". **Akademik durum:** uzlaşma yok; 1202 tarihli sanılan Venedik-sultan antlaşması Hanotaux'dan beri geçersiz (Harris). ÖRNEK KART YAZILDI |
| 2 | Enrico Dandolo kimdir; onu Bizanslılar mı kör etti? | kimdir | `1192-06-21\|Dandolo` | DBI Dandolo (Cracco); Villehardouin; Barker; Brzozowska — **okundu** (Madden'ın kitabı okunmadı) | A1 | Körlük rivayeti. **Akademik durum:** körlük kesin, Bizanslılarca yapıldığı kanıtlanmamış. ÖRNEK KART YAZILDI |
| 3 | Doge Andrea Gritti: İstanbul’da zindandan dükalığa | hükümdar | `1523-05-20\|Gritti` | DBI Andrea Gritti ve Alvise Gritti (Benzoni) — **okundu** | Ö | Hayat hikâyesinin Osmanlı yüzü az bilinir. **Akademik durum:** balyos olan akrabası Battista'ydı; casusluk gerçekti. ÖRNEK HÜKÜMDAR KAYDI YAZILDI |
| 4 | Caterina Cornaro Kıbrıs’tan kendi isteğiyle mi vazgeçti? | kimdir | `1489-02-26\|tahttan çekildi` | DBI Caterina Corner (1979); TDV Kıbrıs — **okundu** (yeni literatür aranmadı) | Ö | "Gönüllü bağış" anlatısı. **Akademik durum:** zorla bindirme emri belgeli. ÖRNEK KART YAZILDI |
| 5 | 1082 mi 1092 mi: Venedik’e verilen altın mühürlü ferman Bizans’ı batırdı mı? | antlasma | `1082-01-01\|Altın Bulla` | Tafel-Thomas I; Jacoby 1994; Morossi 2018; Laiou ve Dagron (EHB) — **okundu** (Frankopan yalnız özet) | Ö | Tarih ve etki tartışmalı. **Akademik durum:** tarih tartışmalı; "çöküşü başlattı" hükmü nitelendirilmeli. ÖRNEK KART YAZILDI |
| 6 | Venedik Gettosu: kelime nereden geliyor, ne kuruldu? | sebep-sonuc | `1516-03-29\|Ghetto` | Ravid 1992; Calabi (Storia di Venezia); Katz (açık örnek bölüm) — **okundu** | Ö | "İlk Yahudi mahallesi". **Akademik durum:** ad Venedik kökenli; "ilk kapalı mahalle" yanıltıcı. ÖRNEK KART YAZILDI |
| 7 | Magosa 1571: teslimden sonra Bragadin niçin öldürüldü? | savas-hikayesi | `1571-08-01\|Magosa’nın düşüşü` | DBI Bragadin (Ventura); TDV Kıbrıs, Lala Mustafa Paşa, Magosa; Strauss (OTAM 44) — **okundu** (Hill ve Osmanlı vakanüvisleri okunmadı) | Ö | Tek taraflı iki anlatı. **Akademik durum:** esir katliamı haberinin doğruluğu çözülmüş değil. ÖRNEK KART YAZILDI |
| 8 | Parthenon’u kim, nasıl havaya uçurdu? | karsi-anlati | `1687-09-26\|Parthenon` | Laborde 1854 (belge neşri); DBI Morosini; TDV Atina — **okundu** (Mommsen 1941 ve Paton okunmadı) | Ö | "Türkler patlattı" / "kazara". **Akademik durum:** Venedik havan bombası içerideki mühimmatı ateşledi; kasıt konusunda anlatılar ayrışıyor. ÖRNEK KART YAZILDI |
| 9 | İnebahtı’nı kazanan Venedik niçin 1573’te Kıbrıs’ı bırakıp ayrı barış yaptı? | tartisma | `1573-03-07\|Kıbrıs'ın terki` | Işıksel, Tarih Dergisi 2022 makalesi (yazar/başlık teyit edilecek); Capponi 2006 — okunmadı | A4 | "İhanet" mi zorunluluk mu (mevcut antlaşma kartıyla mükerrer yazılmayacak) |
| 10 | "Siz kolumuzu kestiniz, biz sakalınızı tıraş ettik": söz gerçek mi? | karsi-anlati | `1573-03-07\|Kıbrıs'ın terki` | Barbaro raporları; Osmanlı-Venedik çalışmaları — okunmadı | A4: kaynağı doğrulanamadı | Sözün birincil kaynağı sorgulanacak |
| 11 | Balyos: elçi mi, tüccar mı, casus mu? | sebep-sonuc | `1523-05-20\|Gritti` | TDV balyos; Dursteler, Venetians in Constantinople, 2006 — okunmadı | A2 | "Balyos yalnız casustu" |
| 12 | Venedik’in kara efsanesi: Onlar Konseyi gizli polis devleti miydi? | tartisma | `1310-06-15\|Onlar Konseyi` | de Vivo 2007; Preto, I servizi segreti di Venezia, 1994 — okunmadı | A1 | Gizli polis ve keyfî idam imgesi |
| 13 | Marino Faliero: tahtın üstündeki kara örtü | savas-hikayesi | `1355-04-17\|Faliero` | DBI "Falier, Marino"; arca.unive.it çalışması (A3) — okunmadı | A3 | Byron’ın romantik anlatısı |
| 14 | Venedik 1498’den sonra gerçekten çöktü mü? Baharat yolu efsanesi | tartisma | `1498-05-20\|Ümit Burnu` | Lane, Venice: A Maritime Republic, 1973; Pullan (ed.) 1968 — okunmadı | A1 | "Ümit Burnu bir günde bitirdi" |
| 15 | Venedik efsanesi: "Serenissima" ne kadar huzurluydu? | tartisma | `1297-02-28\|Serrata` | Grubb, J. Modern History 58 (1986) — okunmadı | Ö | Kusursuz anayasa imgesi |
| 16 | Serrata: Büyük Konsey bir günde mi kapandı? | sebep-sonuc | `1297-02-28\|Serrata` | Rösch; Ruggiero; Lane 1971 — okunmadı | Ö | Tek günlük darbe sanılması |
| 17 | Girit’te Aziz Titus isyanı: Latinler kendi anavatanına karşı | savas-hikayesi | `1363-08-09\|Aziz Titus` | McKee, Uncommon Dominion, 2000 — okunmadı | Ö | İsyanın yalnız Rum isyanı sanılması |
| 18 | Chioggia 1379-1380: lagüne giren düşman nasıl kuşatıldı? | savas-hikayesi | `1380-06-24\|Chioggia` | Lane 1973 — okunmadı | Ö | — |
| 19 | Gelibolu 1416: ilk büyük Osmanlı-Venedik deniz çarpışması | savas-hikayesi | `1416-05-29\|Gelibolu deniz savaşı` | Fabris; Setton II — okunmadı | Ö | — |
| 20 | Selanik 1423-1430: savunulamayan armağan | sebep-sonuc | `1430-03-29\|Selânik` | Mertzios; Vryonis; TDV selanik — okunmadı | Ö | — |
| 21 | 1479 sonrası: Gentile Bellini Fatih’in sarayında | magazin | `1479-01-25\|İstanbul Antlaşması — birinci` | National Gallery katalog yazıları; Raby — okunmadı | Ö | Portrenin bugünkü hâli ne kadar Bellini’nin? |
| 22 | Fatih’in zehirlenmesi iddiası ve Venedik suikast dosyaları | tartisma | `1479-01-25\|İstanbul Antlaşması — birinci` | Babinger; Preto 1994; TDV mehmed-ii — okunmadı | Ö | "Venedik zehirletti" |
| 23 | İki Foscari: oğlunu sürgüne yollayan doge | kimdir | **madde yok** | Romano, The Likeness of Venice, 2007 — okunmadı | A3: bulgu az | Byron/Verdi anlatısı (kronoloji boşluğu) |
| 24 | Carmagnola: hain mi, günah keçisi mi? | tartisma | **madde yok** | DBI "Bussone, Francesco" — okunmadı | A3 | Kronoloji boşluğu |
| 25 | Cambrai Ligi ve Agnadello: bir günde kaybedilen kara devleti | savas-hikayesi | `1509-05-14\|Agnadello` | Gullino (ed.) 2011; Gilbert 1973 — okunmadı | Ö | — |
| 26 | Preveze 1538: Doria niçin çekildi; Venedik ne dedi? | karsi-anlati | `1538-09-28\|Preveze` | Setton III; TDV preveze-deniz-savasi — okunmadı | Ö | Tek taraflı zafer/ihanet anlatısı |
| 27 | İnebahtı 1571: kazanan taraf ne kazandı? | savas-hikayesi | `1571-10-07\|İnebahtı` | Capponi, Victory of the West, 2006 — okunmadı | Ö | "Osmanlı deniz gücü bitti" |
| 28 | Uluç/Hasan, Gazanfer, Safiye: Venedik doğumlu Osmanlılar ve "Venedikli sultan" karışıklığı | tartisma | `1573-03-07\|Kıbrıs'ın terki` | Dursteler 2011 (Renegade Women); Peirce 1993; Pedani — okunmadı | A2 | Nurbanu’nun Venedikli asilzade olduğu iddiası |
| 29 | 1582 Correzione ve "genç" soylular | sebep-sonuc | `1582-01-01\|Correzione` | Lowry; Bouwsma 1968 — okunmadı | Ö | — |
| 30 | 1606 Aforoz krizi ve Paolo Sarpi: Papa’ya hayır diyen şehir | tartisma | `1606-04-17\|Interdetto` | Bouwsma 1968; DBI "Sarpi" — okunmadı | Ö | — |
| 31 | 1618 "İspanya tertibi": komplo gerçekten var mıydı? | tartisma | `1618-05-18\|İspanya tertibi` | Preto 1994 — okunmadı | Ö | Tertibin gerçekliği |
| 32 | Girit Savaşı: Kandiye niçin yirmi yılı aşkın direndi? | savas-hikayesi | `1669-09-06\|Kandiye’nin teslimi` | Setton 1991; TDV girit, kandiye; Greene 2000 — okunmadı | Ö | — |
| 33 | Patrisyenlik satılık: savaşın anayasal faturası | sebep-sonuc | `1646-03-01\|Patrisyenliğin` | Sabbadini 1995 — okunmadı | Ö | — |
| 34 | Francesco Morosini: "Peloponezli" kahraman mı, yağmacı mı? | kimdir | `1685-06-01\|Morosini` | DBI "Morosini, Francesco" — okunmadı | Ö | Mevcut Mora talanı kartına atıf |
| 35 | Korfu 1716: kurtaran asker mi, aziz mi, fırtına mı? | karsi-anlati | `1716-08-20\|Korfu` | Hatzopoulos 1999; TDV korfu — okunmadı | Ö | Mucize anlatısı |
| 36 | 1797: Cumhuriyet teslim mi oldu, kendini mi feshetti? | tartisma | `1797-05-12\|Büyük Konsey’in kendini feshi` | Scarabello; Del Negro (Storia di Venezia VIII) — okunmadı | Ö | Manin ve "korkak son doge" |
| 37 | Doge Ludovico Manin: son dükanın kötü şöhreti | kimdir | `1789-03-09\|Manin` | DBI "Manin, Lodovico" — okunmadı | Ö | Korkaklık imgesi |
| 38 | Lido olayı 1797: bir top ateşi savaş bahanesi mi oldu? | savas-hikayesi | `1797-04-20\|Lido` | Del Negro 1998 — okunmadı | Ö | — |
| 39 | Tersane (Arsenale): sanayi öncesi fabrika mıydı? | teknik-bilimsel | `1538-09-28\|Preveze` | Davis, Shipbuilders of the Venetian Arsenal, 1991 — okunmadı | Ö | "Günde bir kadırga" |
| 40 | Duka altını Doğu Akdeniz’de nasıl ortak para oldu? | teknik-bilimsel | `1284-10-31\|Duka` | Lane & Mueller, Money and Banking, 1985 — okunmadı | Ö | — |

### 41 ve sonrası (sıra bağlayıcı değil)

| # | Konu | Tür | Bağlanacağı madde | Akademik kaynak | İlgi | Yaygın yanlış / tartışma sorusu |
|---|---|---|---|---|---|---|
| 41 | San Marco’nun naaşı İskenderiye’den kaçırıldı mı? | karsi-anlati | **madde yok** | Geary, Furta Sacra, 1978 — okunmadı | Ö | "Domuz eti altında" anlatısı (kronoloji boşluğu) |
| 42 | İlk doge Anafesto gerçekten yaşadı mı? | tartisma | `0697-01-01\|Geleneğe göre` | DBI; Ortalli — okunmadı | Ö | Geleneksel liste |
| 43 | 1171 tutuklamaları: Bizans ile kopuş | sebep-sonuc | `1171-03-12\|Manuel` | Madden 1993 — okunmadı | Ö | — |
| 44 | 1177 Venedik Barışı: imparator Papa’nın ayağına kapandı mı? | karsi-anlati | `1177-07-24\|Venedik Barışı` | Brown; Stroll — okunmadı | Ö | Boynuna basma efsanesi |
| 45 | Marco Polo Çin’e gerçekten gitti mi? | tartisma | `1295-01-01\|Polo` | Vogel, Marco Polo Was in China, 2013; Wood 1995 (karşı görüş) — okunmadı | Ö | "Hiç gitmedi" |
| 46 | Curzola 1298 ve Marco Polo’nun esareti | tartisma | `1298-09-08\|Curzola deniz bozgunu` | Larner 1999 — okunmadı | Ö | Esaretin hangi savaşta olduğu |
| 47 | 1348 Kara Ölüm ve karantinanın doğuşu | teknik-bilimsel | `1348-01-25\|Kara Ölüm` | Crawshaw, Plague Hospitals, 2012 — okunmadı | Ö | "Karantinayı Venedik icat etti" (Dubrovnik 1377 sorusu) |
| 48 | Zadar 1358: Dalmaçya’dan çekiliş | antlasma | `1358-02-18\|Zadar Antlaşması — Dalmaçya` | mevcut kart antlasma10-zadar-1358 — okunmadı | Ö | Mevcut: yalnız ek açı |
| 49 | Padova 1405: Carrara’ların sonu ve kara devleti | sebep-sonuc | `1405-01-01\|Padova` | Law; Knapton — okunmadı | Ö | — |
| 50 | 1409 Dalmaçya’nın satın alınması: bir ülke kaç dukaya? | sebep-sonuc | `1409-07-09\|satın alınması` | Raukar; O’Connell 2009 — okunmadı | Ö | — |
| 51 | Eğriboz 1470: Anna Erizzo efsanesi | karsi-anlati | `1470-07-12\|Eğriboz’un` | Setton II; Venedik kronikleri — okunmadı | Ö | Kahraman kız ve ikiye biçilen komutan |
| 52 | İşkodra 1479: kuşatma ve göç | savas-hikayesi | `1479-01-25\|İşkodra Venedik` | Schmitt 2001 — okunmadı | Ö | — |
| 53 | Akkoyunlulara gönderilen toplar niçin yetişmedi? | sebep-sonuc | `1473-02-01\|top` | Uzunçarşılı; Setton II — okunmadı | Ö | — |
| 54 | Friuli’de Osmanlı akınları: korku ve gerçek | karsi-anlati | `1477-10-30\|Friuli` | Pedani — okunmadı | Ö | — |
| 55 | 1499-1503 savaşı ve balyossuz yıllar | sebep-sonuc | `1499-08-12\|Sapienza` | Gullino; TDV balyos — okunmadı | A2 | Mevcut 1503 kartına atıf |
| 56 | Modon ve Koron: "cumhuriyetin iki gözü" | savas-hikayesi | `1500-08-10\|Modon` | Davies & Davis (ed.) 2007 — okunmadı | Ö | — |
| 57 | Polesella 1509: kıyıdan toplarla batırılan filo | savas-hikayesi | `1509-12-22\|Polesella` | Mallett & Hale 1984 — okunmadı | Ö | — |
| 58 | Rönesans’ın matbaa başkenti: Aldus Manutius | teknik-bilimsel | **madde yok** | Lowry, The World of Aldus Manutius, 1979 — okunmadı | Ö | Kronoloji boşluğu |
| 59 | Venedik’te basılan Arapça Kur’an | tartisma | **madde yok** | Nuovo 1987 — okunmadı | Ö | "Papa yaktırdı" anlatısı (kronoloji boşluğu) |
| 60 | Fondaco dei Turchi ve Müslüman tüccarlar | sebep-sonuc | `1573-03-07\|Kıbrıs'ın terki` | Kafadar 1986; Pedani — okunmadı | Ö | Kendi maddesi yok |
| 61 | Korfu 1537: Kanûnî’nin geri döndüğü kale | savas-hikayesi | `1537-08-25\|üçüncü savaşın` | TDV korfu; Setton III — okunmadı | Ö | — |
| 62 | 1540 Ege kayıpları ve Anabolu | antlasma | `1540-10-02\|Üçüncü savaşın sonu` | mevcut kart antlasma4-venedik-1540 — okunmadı | Ö | Mevcut: tekrar yazılmaz |
| 63 | 1577 Doge Sarayı yangını ve yeniden yapım kavgası | mimari | `1577-05-20\|yangını` | Howard, The Architectural History of Venice — okunmadı | Ö | — |
| 64 | Rialto Köprüsü yarışması: efsane projeler | mimari | `1591-01-01\|Rialto Köprüsü` | Calabi & Morachiello 1987 — okunmadı | Ö | "Michelangelo da proje verdi" |
| 65 | Kamu bankası 1587: iflaslardan sonra | teknik-bilimsel | `1587-04-01\|Banco` | Lane & Mueller; Luzzatto — okunmadı | Ö | — |
| 66 | Uskoklar: korsan mı sınır savaşçısı mı? | tartisma | `1615-01-01\|Uskok` | Bracewell, The Uskoks of Senj, 1992 — okunmadı | Ö | — |
| 67 | 1630 vebası ve Salute Kilisesi | mimari | `1630-01-01\|veba` | Hopkins 2000 — okunmadı | Ö | — |
| 68 | Palmanova: yıldız biçimli ideal kale-kent | mimari | **madde yok** | Pollak 2010 — okunmadı | Ö | Kronoloji boşluğu |
| 69 | Galileo’nun dürbünü ve Venedik Senatosu | teknik-bilimsel | **madde yok** | Biagioli 2006 — okunmadı | Ö | "Dürbünü Galileo icat etti" (kronoloji boşluğu) |
| 70 | İlk halka açık opera binası | magazin | **madde yok** | Rosand, Opera in Seventeenth-Century Venice, 1991 — okunmadı | Ö | Kronoloji boşluğu |
| 71 | Elena Cornaro Piscopia: ilk kadın doktora mı? | kimdir | **madde yok** | DBI "Corner, Elena Lucrezia" — okunmadı | Ö | Kronoloji boşluğu |
| 72 | Karnaval ve maske: sınırsız özgürlük müydü? | magazin | **madde yok** | Johnson, Venice Incognito, 2011 — okunmadı | Ö | Kronoloji boşluğu |
| 73 | Casanova’nın Kurşunlar zindanından kaçışı: ne kadarı doğru? | tartisma | **madde yok** | Casanova’nın anlatısı + arşiv çalışmaları — okunmadı | A3: zayıf | Kronoloji boşluğu |
| 74 | Sakız 1694-1695: beş ayda alınıp verilen ada | savas-hikayesi | `1695-02-09\|Sakız` | Setton 1991; TDV sakiz-adasi — okunmadı | Ö | Mevcut deniz savaşları kartına atıf |
| 75 | Dalmaçya’da Venedik-Osmanlı sınırı ve Morlaklar | sebep-sonuc | `1688-09-11\|Knin` | Wolff, Venice and the Slavs, 2001 — okunmadı | Ö | — |
| 76 | Angelo Emo ve donanmanın son seferi | kimdir | `1784-05-01\|Emo` | DBI "Emo, Angelo" — okunmadı | Ö | — |
| 77 | Campo Formio: bir cumhuriyet pazarlık malı | antlasma | `1797-10-17\|Campoformio` | mevcut ihtilal-venedik-paylasimi kartı — okunmadı | Ö | Yalnız hüküm kartı |
| 78 | 1848 San Marco Cumhuriyeti: Manin eski Venedik’i mi diriltti? | sebep-sonuc | `1848-03-22\|Arsenal’i ele geçirdi; San Marco Cumhuriyeti ilan edildi, Manin` | Ginsborg, Daniele Manin and the Venetian Revolution, 1979 — okunmadı | Ö | Son doge ile aynı soyad |
| 79 | Girit 1211: Venedikli iskâncılar ve Rum toprak sahipleri | sebep-sonuc | `1211-09-10\|Carta` | McKee 2000; Gasparis — okunmadı | Ö | — |
| 80 | Eğriboz üçlüleri: bir adada ortak egemenlik | sebep-sonuc | `1256-06-14\|Eğriboz` | Jacoby 1971 — okunmadı | Ö | — |

### Notlar

- "madde yok" satırları kronoloji maddesi yazılmadan karta bağlanamaz.
- Aynı maddeye birden çok konu bağlıysa (ör. 1573, 1479, 1538) seri üretimde madde başına kart
  yoğunluğu ayrıca gözetilmeli.
- Ulusal ve dinî hassasiyetli konularda (1204, Magosa, getto, Mora, Uskoklar) iki tarafın
  anlatısı ayrı kaynaklardan verilmeli.

## 3. Seri üretim, 02. parti (`data/ekokuma_dev_venedik_02.js`, 20 kart)

Bu partideki konuların bir kısmı yukarıdaki tabloda "okunmadı" görünür; güncel kaynak durumu kartın
kendi `kaynak`, `teyit` ve `ic_not` alanlarındadır. Orseolo ve Kallergis tabloda olmayan konulardır.

16 kart `teyitli`, 4 kart `teyitsiz` (Serrata: kısmen okunan bölüm ve tarih yazımı aktarımı;
Gelibolu: kayıp rakamları aktarım; 1618: sonuç başka bir araştırmacının aktarımı; Angelo Emo:
çürütme okunmamış esere dayanır). 01. partide 4 `teyitli` (Gritti, Cornaro, getto, Magosa),
4 `teyitsiz` (Dandolo, 1204, ferman, Parthenon).

Etiket sınırı: bir yazarın vakanüvis geleneğini ya da eserin sonraki alımlanışını kendi sözüyle
özetlediği cümleler (Faliero, Girit, Sarpi, Manin) aktarım sayılmadı. Daha sıkı ölçüt istenirse
bu dört kart yeniden etiketlenmelidir.

Erişilemeyenler: Tiepolo ve Calergi için denenen biyografi adresleri boş döndü (Tiepolo için başka
ansiklopedi maddesi okundu); bir üniversite sitesi otomatik erişimi reddetti, aşılmadı.

### Parti sırasında görülen kronoloji uyuşmazlıkları (düzeltilmedi, takip işi)

| Madde | Okunan kaynağın söylediği |
|---|---|
| 1789-03-09 Manin'in seçilmesi | 9 Mayıs 1789 (gün ve ay karışmış olabilir; ikinci kaynakla sınanmalı) |
| 1000 Orseolo seferi | bazı kaynaklar 998 |
| 1716-08-20 Korfu | büyük hücum 18 Ağustos gecesi |
| 1618-05-18 "İspanya tertibi" | tek gün yok; olaylar 12-18 Mayıs |
| 1784-05-01 Emo | atama 6 Mart 1784; mayıs günü yok |
| 1685-06-01 Mora seferi | gün kaynakta yok |
| 1479-01-25 İstanbul Antlaşması | gün okunan kaynaklarda yok (o kartın konusu antlaşma değil) |
| 1538-09-28 Preveze | bir biyografi "Ekim", TDV 28 Eylül |

## 4. 03. parti (`data/ekokuma_dev_venedik_03.js`, 20 kart: 17 `teyitli`, 3 `teyitsiz`)

`teyitsiz`: 1171 tutuklamaları (sebebe dair anlatılar aktarım) · Kara Ölüm (ölü sayıları ve Senato
kararları aktarım) · Rialto bankası (konuşma metinleri özetten).
Atlanan: 1646'da satılığa çıkan soyluluk (metin yalnız çok uzun bölümlerde, baştan sona okunmadı).

| Madde | Okunan kaynağın söylediği (düzeltilmedi, takip işi) |
|---|---|
| 1298-09-08 Curzola | savaş 7 Eylül |
| 1348-01-25 Kara Ölüm | okunan bölümde bu gün depremin günü; vebanın geliş günü yok |
| 1284-10-31 Duka | kaynak yalnız 1284 |
| 1482-05-03 Ferrara | okunan iki madde bu günü vermiyor |
| 1577-05-20 Doge Sarayı yangını | iki biyografi 20 Aralık 1577 |
| 1755-01-01 Querini vakası | olay 12-13 Ağustos 1761 |
| 1587-04-01 Rialto bankası | 11 Nisan 1587 |
| 1695-02-09 Sakız | TDV çıkarmayı 22 Şubat'a koyar |
| 1582-01-01 Correzione | kriz Ekim 1582; ek kurul 1583'te kaldırıldı |
| 1615-01-01 Uskok Savaşı | Aralık 1615 - 26 Eylül 1617 |

## 5. 04. parti (`data/ekokuma_dev_venedik_04.js`, 16 kart, hepsi `teyitli`)

Polesella için iki ajan ayrı kart yazdı (görev listesi çakıştı); birleştirilmeden biri çıkarıldı.
Yazılamayanlar: Ümit Burnu (bölüm çok uzun, okunmadı) · 1529 Bologna Barışı (okunan maddelerde
Venedik tarafı yok; ilgili uzun madde okunmadı) · 1797 Lido (uygun madde bulunamadı; bir 1912
yayını bağlantı hatasıyla inmedi) · 1477 Friuli akınları (ölçüte uyan metin okunmadı) · Knin
(denenen biyografide yok) · 1299 Milano ve 1281 Orvieto (yeterince aranmadı) · bir PDF 403 verdi.
Bu turda denenmeyen yedekler: Treviso 1339, 1409 Dalmaçya'nın satın alınması.

| Madde | Okunan kaynağın söylediği (düzeltilmedi, takip işi) |
|---|---|
| 1500-08-10 Modon ve Koron | bir biyografi 9 Ağustos; TDV yalnız ay |
| 1509-12-22 Polesella | bir biyografi 21 Aralık, bir başkası 22 Aralık |
| 1420-10-01 Friuli'nin fethi | gün doğrulanmadı; Udine'ye giriş 6 Haziran |
| 1381-08-08 Torino Barışı | gün okunan metinlerde yok |
| 1428-01-01 Brescia ve Bergamo | Ferrara Barışı 19 Nisan 1428 |
| 1495-07-06 Fornovo | bir biyografi 5-6 Temmuz |
| 1499-08-12 Sapienza | `ekokuma_dunya.js` bağ anahtarı 28 Ağustos |
| 1645-08-22 Hanya | TDV 19 Ağustos |
| 1684-03-05 Kutsal İttifak | 5 Mart gayriresmî sonuç, 6 Mart imza |
| 1211-09-10 Girit fermanı | kaynaklar yalnız Eylül; 10 Eylül ve "Carta" adı geçmiyor |
| 1656-06-26 Çanakkale | biyografiler gün konusunda ayrışıyor (23 / 26 Haziran) |

## 6. Erişim kuralı denetimi (25 Kasım 2026, gece)

Kural (koordinatör): engel veren sayfa User-Agent taklidi, tarayıcı, ayna, önbellek ya da aktarım aracıyla çekilmez; "okunamadı" yazılır.

**Bulgu:** Yazar talimatındaki indirme komutu tarayıcıyı andıran `Mozilla/5.0 research-reader` başlığını taşıyordu (talimatı bu işi yöneten oturum yazdı). TDV İslâm Ansiklopedisi iş sırasında Cloudflare engeli verdi; sonrasında bir ajan web aktarım aracını, yöneten oturum ve sonraki ajanlar aynı başlığı kullandı. TDV'ye dayanan **17 kayıt** (16 ek okuma kartı + 1 kişi kaydı) `teyitsiz` ve yayın adayı değil; 14'ü yeni düştü, 3'ü zaten `teyitsiz`di. Kartlar silinmedi; metinleri değiştirilmedi.

Öteki alan adları için başlık eklenmeden birer istek yapıldı (treccani.it, dergipark.org.tr, archive.org, Fordham, Royal Holloway, Maryland, AMU Pressto, Ignatianum): hepsi 200, engel izi yok (AMU dosyası boyut sınırında kesildi). Korfu makalesinin PDF sitesi sınanmadı. Fordham ilk denemede bakım sayfası döndürmüş, ardından aktarım aracı kullanılmıştı (3 kayıt, zaten `teyitsiz`). Denetim diskteki betik ve dosyalara dayanır; ajan oturum dökümleri okunmadı.

**Güncel toplam: 63 ek okuma kartı = 39 `teyitli` + 24 `teyitsiz`.** Yukarıdaki bölümlerdeki parti sayıları bu denetimden öncesine aittir. 05. parti ajanları durduruldu; yarım çıktıları depoya alınmadı.

## 7. Çok dilli onarım ve 05. parti (26 Kasım 2026)

**Güncel durum (bu bölüm öncekilerin sayılarının yerini alır):** 75 ek okuma kartı, 75 `teyitli`, 0 `teyitsiz`;
ayrıca 3 hükümdar/kişi kaydı (3 `teyitli`). Kaynağında TDV olan kayıt yok.
`teyit_kapsam:"bolum"` taşıyan 30 kayıt, uzun bir eserin yalnız ilgili bölümüne dayanır; "eserin tamamı" ölçütü istenirse
bu alanla süzülür. `editor_incelemesi` taşıyanlar: Magosa (Osmanlı tarafı belirgin kısa) ve Friuli 1477 (zayıf kart).

**Erişim:** İndirme yalnız ortak araçla yapıldı (varsayılan User-Agent; TDV ve arşiv/ayna adresleri reddedilir; engel sayfası
silinir, alan bir daha denenmez; her istek günlükte). Engel veren alanlar: unitesi.unive.it, arca.unive.it, katalog.marmara.edu.tr, air.uniud.it. Ajanların araç dışında sayfa çekip
çekmediği dökümlerinden denetlenmedi; kanıt dosyaları günlükle eşlendi (onarım dosyalarında önceki turdan kalan TDV dışı
metinler ve PDF'ten yeniden çıkarılan birkaç metin vardır).

**Diller:** İtalyanca/Venedik dili, Türkçe, İngilizce, Almanca, Lehçe, Hırvatça/Boşnakça. Yunanca ve Slovence akademik anlatı
arandığı konularda bulunamadı; Fransızca ve Rusça metin okunamadı ya da bulunamadı.

**Yazılamayan konular:** Ayamavra 1684, İnebahtı 1687 (tam anlatı okunamadı); 05. partinin M yedekleri (Korfu 1207, Bologna 1529) bu turda yazılmadı.

| Madde | Okunan kaynağın söylediği (düzeltilmedi) |
|---|---|
| 1716-08-20 Korfu | okunanlar 18 / 22 Ağustos |
| 1538-09-28 Preveze | 27 / 28 Eylül |
| 1537-08-25 Korfu | 25 / 26 Ağustos |
| 1423-09-14 Selanik | 14 / 24 Eylül |
| 1500-08-10 Modon | 9 / 10 Ağustos; Koron 1500 / 1501 |
| 1686-07-10 Modon | bir yayın 8 / 9 / 12 Temmuz |
| 1684-08-06 Ayamavra | atlas "yaz 1684"; bir biyografi 6 Ağustos |
| 1714-12-08 savaş ilanı | bir yayın 8 Aralık, biri Kasım |
| 1477-10-30 Friuli akını | gün ve "çan kulesinden görüldü" ayrıntısı doğrulanamadı |
| Anabolu maddesi, kişi alanı | Königsmarck'ın adı Otto Wilhelm olmalı |

## Ek: kronoloji envanteri (283 satır)

Süzgeç: dosya ya da kayıt Venedik’e ait olanlar ile başlığında Venedik veya bir Venedik soyadı geçenler. Süzgeç başlığa baktığı için başlıkta adı geçmeyen ortak maddeler listede olmayabilir; listeye yalnız anılan maddeler de girmiştir.

| Gün | Başlık | Dosya |
|---|---|---|
| 0697-01-01 | Geleneğe göre Venedik'in ilk dogu Paolo Lucio Anafesto seçildi | kronoloji_cok_ms1_1000_ortaavrupa_italya.js |
| 0697-01-01 | Venedik ilk dogesini seçti: Paulo Lucio Anafesto | olaylar_ortacag_italya_dogu_avrupa.js |
| 0727-01-01 | Orso, Bizans karşıtı askerî ilanla ilk seçilmiş dogu oldu | kronoloji_cok_ms1_1000_ortaavrupa_italya.js |
| 0814-01-01 | Frank-Bizans antlaşması Venedik'in bağımsızlığını güvenceye aldı | kronoloji_cok_ms1_1000_ortaavrupa_italya.js |
| 1000-01-01 | Venedik Dükü II. Pietro Orseolo'nun Dalmaçya seferi | kronoloji_cok_once1281_avrupa.js |
| 1002-01-01 | Venedik donanması Bari kuşatmasını kaldırır | kronoloji_cok_once1281_avrupa.js |
| 1081-01-01 | Robert Guiscard Bizans'a karşı Arnavutluk kıyısına çıkar | kronoloji_cok_once1281_avrupa.js |
| 1082-01-01 | Bizans İmparatoru Alexios Komnenos Venedik'e Altın Bulla (krizobol) ile geniş ticaret ayrıcalıkları verdi | olaylar_ortacag_italya_dogu_avrupa.js |
| 1105-01-01 | Zadar ve Dalmaçya şehirleri Koloman'ın hâkimiyetini tanıdı | kronoloji_cok_once1281_avrupa.js |
| 1124-07-07 | Kudüs Krallığı Venedik donanmasıyla Sûr'u aldı | kronoloji_cok_once1281_ortadogu.js |
| 1125-01-01 | Venedikliler korsan yuvası olan Modon'u yerle bir etti | olaylar_ortacag_italya_dogu_avrupa.js |
| 1133-01-01 | Split (Spalato): venedik cumhuriyeti → macaristan krallığı (bağımsız dönem) | kronoloji_sinir_once1281_geriye.js |
| 1167-01-01 | Lombard Birliği kurulur | kronoloji_cok_once1281_avrupa.js |
| 1171-01-01 | Venedik donanması Dubrovnik’e boyun eğdirip kont atadı | olaylar_ortacag_bekleyen_acik.js |
| 1171-03-12 | Manuel Komnenos imparatorluktaki bütün Venedikliler’i tutuklattı | olaylar_ortacag_bizans_balkan.js |
| 1177-01-01 | Venedik Barışı: Konrad von Wittelsbach Mainz'den vazgeçip Salzburg'u aldı | kronoloji_cok_once1281_avrupa2.js |
| 1177-01-01 | Venedik Antlaşması: Friedrich Barbarossa ile Papa III. Alexander barışır; Lombardiya Birliği ile altı yıllık ateşkes | olaylar_ortacag_bati_avrupa.js |
| 1177-07-21 | Venedik Barışı: Barbarossa, Papa III. Alexander'ı tanır | kronoloji_cok_once1281_avrupa.js |
| 1177-07-24 | Venedik Barışı: İmparator Barbarossa ile Papa III. Alexander San Marco'da barıştı | olaylar_ortacag_italya_dogu_avrupa.js |
| 1192-06-21 | Enrico Dandolo 85 yaşında doge seçildi | olaylar_ortacag_italya_dogu_avrupa.js |
| 1201-01-01 | Cenevizlilerle ticaret antlaşması, ayrıcalıklar Venedik'e de genişletildi | kronoloji_anadolu.js |
| 1203-07-17 | IV. Haçlı Seferi ordusu İstanbul'a girip II. İsaakios'u ve oğlunu tahta çıkardı | kronoloji_cok_once1281_anadolu.js |
| 1204-01-01 | Bizans'ın paylaşılmasıyla Dubrovnik üzerinde Venedik hâkimiyeti güçlendi | kronoloji_cok_once1281_avrupa.js |
| 1204-04-13 | Haçlılar Konstantinopolis'i ele geçirdi; Bonifacio imparatorluk seçimini Baudouin'e kaptırdı | kronoloji_cok_once1281_avrupa2.js |
| 1204-04-13 | IV. Haçlı Seferi'nde Bizans'ı yağmalayarak Ege'de geniş koloni imparatorluğu kurdu | devletler.js:venedik |
| 1204-08-12 | Girit Venedik'e satıldı | olaylar_t5_1000b.js |
| 1204-08-12 | Venedikliler Dördüncü Haçlı Seferi sırasında Kandiye'yi alır; şehir adadaki Venedik idaresinin merkezi olur. | devletler.js:girit-venedik |
| 1205-01-01 | Ragusa (Dubrovnik) yerel kont Damiano Giuda'nın kısa yönetiminin ardından Venedik'e bağlandı | olaylar_ortacag_italya_dogu_avrupa.js |
| 1205-01-01 | Doge Enrico Dandolo ölçülü bir geri çekilme sırasında öldü | olaylar_ortacag_italya_dogu_avrupa.js |
| 1207-01-01 | Korfu Venedik’e teslim oldu: Venedikli soyluların on lordluğu | olaylar_ortacag_bekleyen_acik.js |
| 1209-01-01 | Ravano dalle Carceri Venedik ile ittifak antlaşması yaptı | kronoloji_cok_once1281_avrupa2.js |
| 1209-01-01 | Venedikliler Modon'u (yeniden) alıp iskân etti ve savunmasını güçlendirdi | olaylar_ortacag_italya_dogu_avrupa.js |
| 1210-06-20 | Epir Despotu Mikael Venedik Dojları’na bağlandı | olaylar_ortacag_bizans_balkan.js |
| 1211-09-10 | Venedik'te Girit için Carta Concessionis iskân fermanı ilan edildi; ilk Venedikli yerleşimciler 20 Mart 1212'de adaya gitti. | devletler.js:girit-venedik |
| 1214-01-01 | Epir Despotluğu Venedik'in Korfu kolonisini ilhak etti | kronoloji_cok_once1281_anadolu.js |
| 1216-01-01 | Ravano dalle Carceri öldü; Venedik bailosu Pietro Barbo varisler arası kavgaya karıştı | kronoloji_cok_once1281_avrupa2.js |
| 1217-05-11 | Venedik ile Cenova arasındaki Girit uğruna savaş antlaşmayla sona erdi; adada Cenova destekli Enrico Pescatore dönemi bitti. | devletler.js:girit-venedik |
| 1223-01-01 | Venedik ve Kıbrıs Frankları ile ticarî antlaşmalar | kronoloji_anadolu.js |
| 1256-06-14 | Eğriboz'un üç lordu Venedik'i tek hâkim olarak kabul eden anlaşma yaptı | kronoloji_cok_once1281_avrupa2.js |
| 1258-01-01 | Karydi Savaşı: Achaia Prensi Eğriboz müttefiklerini yendi | kronoloji_cok_once1281_avrupa2.js |
| 1258-05-06 | Venedik-Eğriboz antlaşması yeni bailo Barozzi ile yenilendi | kronoloji_cok_once1281_avrupa2.js |
| 1262-01-01 | Achaia Prensi ile Eğriboz lordları arasındaki çekişme 1262 antlaşmasıyla kesin biçimde çözüldü | kronoloji_cok_once1281_avrupa2.js |
| 1263-01-01 | Settepozzi'de Cenova Venedik'e yenildi; Cremona ateşkesi imzalandı | olaylar_ortacag_italya_dogu_avrupa.js |
| 1271-01-01 | Karystoslu şövalye Licario Bizans desteğiyle adadaki kaleleri almaya başladı | kronoloji_cok_once1281_avrupa2.js |
| 1281-01-01 | Levant imparatorluğu — XIII. yüzyıl sonunda Venedik'in elindekiler | kronoloji_venedik.js |
| 1281-07-03 | Orvieto Antlaşması: Anjou, Venedik ve Latin İmparatoru Philippe Bizans’a karşı ittifak kurdu | olaylar_ortacag_bizans_balkan.js |
| 1282-01-01 | Alexios Kallergis önderliğinde o zamana dek en büyük Girit isyanı başladı. | devletler.js:girit-venedik |
| 1284-10-31 | Duka altınının basılması | kronoloji_venedik.js |
| 1291-05-18 | Akkâ'nın düşüşü — Levant ticaretinin yeniden kurulması | kronoloji_venedik.js |
| 1295-01-01 | Polo'lar yirmi altı yıl sonra Venedik'e dönüyor | olaylar_gezginler.js |
| 1296-01-01 | Venedik-Ceneviz savaşı Boğaz'a taşındı, Galata yakıldı | kronoloji_bizans.js |
| 1297-02-28 | Serrata — Büyük Konsey'in kapanması | kronoloji_venedik.js |
| 1298-09-08 | Curzola deniz zaferi — Venedik rekabetinin zirvesi | kronoloji_italya.js |
| 1298-09-08 | Curzola deniz bozgunu — Ceneviz rekabetinin zirvesi | kronoloji_venedik.js |
| 1299-01-01 | Alexios Kallergis Barışı imzalandı; genel af ve Giritli soylulara haklar verildi. | devletler.js:girit-venedik |
| 1299-05-25 | Milano Barışı — Venedik ile ilk büyük savaşın sonu | kronoloji_italya_sehir.js |
| 1304-01-01 | Venedikliler Eğriboz şehrini surlarla tahkim eder. | devletler.js:euboea-negroponte |
| 1308-01-01 | Ferrara Savaşı — Venedik'in şehri işgali | kronoloji_italya_sehir.js |
| 1309-03-27 | Venedik'in aforoz edilmesi ve Ferrara'dan çıkarılması | kronoloji_italya_sehir.js |
| 1310-06-15 | Tiepolo-Querini tertibi ve Onlar Konseyi'nin kurulması | kronoloji_venedik.js |
| 1311-01-01 | Pag halkı Venedik Cumhuriyeti'nin hâkimiyetini gönüllü tanıdı | kronoloji_cok_venedik.js |
| 1313-01-01 | Pag'ın Venedik hâkimiyeti sona erdi, ada yeniden Macar-Hırvat krallığına döndü | kronoloji_cok_venedik.js |
| 1322-03-01 | Šibenik, Šubić kontları ile Venedik arasında kalıp Venedik'e bağlandı | olaylar_2s_0918.js |
| 1322-04-17 | Trogir, Bribirli knezlere karşı Venedik'e bağlandı | olaylar_2s_0918.js |
| 1327-09-18 | Split'te Macar egemenliği sona erdi — Venedik idaresi başladı | olaylar_2s_0918.js |
| 1331-01-01 | Pula Venedik idaresine girdi | kronoloji_sinir_avrupa_bati.js |
| 1333-01-01 | Aydınoğlu Umur Bey'in Eğriboz'a ilk akınları başlar. | devletler.js:euboea-negroponte |
| 1335-01-01 | Semadirek Venedikliler'den Cenevizli Gattilusio ailesine geçti | olaylar_ek5.js |
| 1339-01-24 | Treviso'nun alınması — ilk Terraferma tecrübesi | kronoloji_venedik.js |
| 1341-01-01 | Sanudo hanedanının Venedik himayesine yaklaşması | kronoloji_naksa_dukaligi.js |
| 1343-01-01 | Devlet iflası — taç mücevherleri Venedik'e rehin verildi | kronoloji_bizans.js |
| 1345-01-01 | Pag yeniden Venedik hâkimiyetini tanıdı | kronoloji_cok_venedik.js |
| 1345-01-01 | Venedik'in Muda konvoyları başladı | kronoloji_memluk.js |
| 1348-01-25 | Kara Ölüm | kronoloji_venedik.js |
| 1352-01-01 | Kadıköy: Osmanlı Devleti hâkimiyetine girdi — «1352’de Venedikliler’e yenilen Ceneviz donanmasına yardım amacıyla Kadıköy ve Üsküdar’a…» | kronoloji_sinir_once1281_geriye.js |
| 1352-02-13 | Boğaz Savaşı — Venedik-Bizans-Aragon ittifakına karşı direniş | kronoloji_italya_sehir.js |
| 1353-04-01 | Venedik ile ticaret antlaşmasının kesinleşmesi | kronoloji_anadolu.js |
| 1355-04-17 | Doge Marino Faliero'nun idamı | kronoloji_venedik.js |
| 1357-01-01 | Split'te Venedik idaresi sona erdi — Macar hâkimiyeti yeniden başladı | olaylar_2s_0918.js |
| 1357-07-09 | Trogir Venedik'in himayesinden çıktı — Macar hâkimiyeti yeniden başladı | olaylar_2s_0918.js |
| 1357-12-14 | Šibenik Venedik'ten ayrıldı — Macar hâkimiyetine geçti | olaylar_2s_0918.js |
| 1358-01-01 | Dubrovnik üzerindeki Venedik hâkimiyeti sona erdi | kronoloji_cok_ince_avrupa_amerika.js |
| 1358-02-18 | Zadar Antlaşması — Dalmaçya'nın Macaristan'a bırakılması | kronoloji_venedik.js |
| 1358-02-18 | Zadar Antlaşması — Dubrovnik, Venedik'ten Macaristan himayesine geçti | olaylar_2s_0918.js |
| 1363-01-01 | Venedikli feodal beyler Aziz Titus İsyanı'nı başlattı; Kandiye isyancıların eline geçti. | devletler.js:girit-venedik |
| 1363-08-09 | Girit'te Aziz Titus isyanı — sömürge yönetimine karşı ayaklanma | kronoloji_venedik.js |
| 1364-01-01 | Venedik donanması 7 Mayıs'ta geldi ve isyancı Kandiye 9 Mayıs'ta teslim oldu; isyan bastırıldı. | devletler.js:girit-venedik |
| 1371-01-01 | İsa Bey'in Venedik antlaşmasını yenilemesi | kronoloji_anadolu.js |
| 1378-07-01 | Chioggia Savaşı'nın başlaması | kronoloji_venedik.js |
| 1379-08-16 | Chioggia'nın ele geçirilmesi — Venedik lagününe girilmesi | kronoloji_italya.js |
| 1379-08-16 | Chioggia'nın düşüşü — düşman lagünün içinde | kronoloji_venedik.js |
| 1380-06-24 | Chioggia'nın geri alınması — kuşatanın kuşatılması | kronoloji_venedik.js |
| 1381-08-08 | Torino Barışı — Ceneviz rekabetinin kırılması ve otuz ailenin konseye alınması | kronoloji_venedik.js |
| 1386-01-01 | Korfu (Kerkyra) Venedik'e bağlandı | kronoloji_cok_venedik.js |
| 1390-01-01 | Ghisi hanedanının sönmesi: Tinos, Mikonos ve Delos vasiyetle Venedik'e geçti | kronoloji_naksa_dukaligi.js |
| 1390-01-01 | Osmanlı ile ilk ticaret imtiyazları | kronoloji_venedik.js |
| 1392-01-01 | Draç, Thopia hanedanından Venedik'e bırakıldı | kronoloji_sinir_zincir_1281sonra_1024.js |
| 1393-05-01 | Leş'in (Alessio) Dukagjinler tarafından Venedik'e bırakılması | olaylar_ok104.js |
| 1395-01-01 | Venedik'in Atina'yı geçici olarak yönetmeye başlaması | kronoloji_atina_dukaligi.js |
| 1400-01-01 | Venedik'in Şam'daki ticaret hakları | kronoloji_memluk.js |
| 1402-01-01 | Antonio I Acciaiuoli'nin Atina'yı Venedik'ten geri alması | kronoloji_atina_dukaligi.js |
| 1402-07-28 | Kadıköy: Osmanlı hâkimiyeti sona erdi — «1352’de Venedikliler’e yenilen Ceneviz donanmasına yardım amacıyla Kadıköy ve Üsküdar’a…» | kronoloji_sinir_once1281_geriye.js |
| 1404-01-01 | Belluno ve Feltre Venedik'e geçti | kronoloji_sinir_avrupa_bati.js |
| 1405-01-01 | Padova, Verona ve Vicenza'nın alınması — Terraferma siyaseti | kronoloji_venedik.js |
| 1405-11-17 | Venedik Padova'yı aldı — Carrara senyörlüğünün sonu | kronoloji_sinir_avrupa_bati.js |
| 1407-01-01 | İnebahtı Venedik'in eline geçti | kronoloji_cok_venedik.js |
| 1409-07-09 | Dalmaçya'nın satın alınması | kronoloji_venedik.js |
| 1409-07-31 | Zadar Venedik idaresine girdi — Santa Intrada | olaylar_2s_0918.js |
| 1412-01-01 | Şibenik yeniden Venedik Cumhuriyeti'nin idaresine girdi | olaylar_2s_1019.js |
| 1416-05-29 | Venedik Gelibolu açıklarında Osmanlı donanmasını yendi | kronoloji_bizans.js |
| 1416-05-29 | Gelibolu deniz savaşı — Osmanlı donanmasının imhası | kronoloji_venedik.js |
| 1416-05-29 | Gelibolu deniz yenilgisi (Venedik) | olaylar_ek.js |
| 1420-06-22 | Trogir Venedik idaresine girdi | olaylar_2s_0918.js |
| 1420-10-01 | Friuli'nin fethi — Aquileia patrikliğinin sonu | kronoloji_venedik.js |
| 1423-01-01 | Selânik'in Bizans'tan devralınması | kronoloji_venedik.js |
| 1423-09-14 | Selanik Venedik'e devredildi — savunulamayan şehrin satışı | kronoloji_bizans.js |
| 1423-09-14 | Selanik'in Venedik'e devri | olaylar_ek.js |
| 1428-01-01 | Brescia ve Bergamo'nun alınması — Terraferma'nın en geniş hâli | kronoloji_venedik.js |
| 1430-03-29 | Selânik'in kaybı | kronoloji_venedik.js |
| 1441-11-20 | Cremona Barışı — Milano ile sınırın çizilmesi | kronoloji_venedik.js |
| 1448-10-04 | İskender Bey ile Venedik arasında Dagno barışı | kronoloji_cok_arnavut.js |
| 1453-05-29 | İstanbul'un fethi: Bizans İmparatorluğu sona erer, Kuzey Sporad adaları Venedik'e sığınır | kronoloji_cok_senkron_0930.js |
| 1453-05-29 | İstanbul'un fethi — Levant düzeninin çöküşü | kronoloji_venedik.js |
| 1454-04-09 | Lodi Barışı — İtalya'da güçler dengesi | kronoloji_venedik.js |
| 1463-01-01 | Birinci Osmanlı-Venedik Savaşı'nın başlaması | kronoloji_venedik.js |
| 1463-01-01 | Osmanlı ile ilk büyük savaş — Arnavutluk ve Mora çekişmesi (1479'a dek) | devletler.js:venedik |
| 1463-01-01 | Osmanlı-Venedik savaşı (1463-1479) başlar. | devletler.js:euboea-negroponte |
| 1463-07-28 | On altı yıllık Osmanlı-Venedik Savaşı'nın başlaması | olaylar_ek5.js |
| 1463-08-20 | İskender Bey Venedik'le anlaşıp Osmanlı-Venedik savaşına katıldı | kronoloji_cok_arnavut.js |
| 1466-01-01 | Osmanlı-Venedik Savaşı'nda Venedikliler Osmanlı hâkimiyetindeki Atina'yı yağmaladı | kronoloji_cok_venedik.js |
| 1469-01-01 | Livno ve batı Bosna'nın kesin ilhakı — Venedik sınırının kurulması | olaylar_ek10.js |
| 1470-07-12 | Eğriboz'un (Negroponte) kaybı | kronoloji_venedik.js |
| 1470-07-12 | II. Mehmed'in şahsen yönettiği kuşatma ve sokak çarpışmalarının ardından Eğriboz Osmanlı'ya geçer. | devletler.js:euboea-negroponte |
| 1472-01-01 | Venedik'e elçi gönderildi — ateşli silâh talebi | kronoloji_akkoyunlu.js |
| 1473-01-01 | Venedik Gradisca'yı Osmanlı akınlarına karşı kale yaptı | kronoloji_sinir_avrupa_bati.js |
| 1473-02-01 | Venedik on altı top ve bin tüfek gönderdi — hiçbiri ulaşmadı | kronoloji_akkoyunlu.js |
| 1477-10-30 | Osmanlı akıncılarının Friuli'ye ulaşması | kronoloji_venedik.js |
| 1478-01-01 | Heşt Bihişt Sarayı — Venedikli tacirlerin hayranlıkla anlattığı yapı | kronoloji_akkoyunlu.js |
| 1478-06-16 | Kruya (Akçahisar) teslim oldu — direnişin kalesi düştü | kronoloji_cok_arnavut.js |
| 1479-01-25 | İşkodra Venedik'ten Osmanlı'ya geçti — Zeta'nın kuzey komşusu değişti | kronoloji_balkan.js |
| 1479-01-25 | İstanbul Antlaşması — birinci savaşın sonu | kronoloji_venedik.js |
| 1479-01-25 | İstanbul Antlaşması — Arnavutluk/İşkodra Osmanlı'da kaldı | devletler.js:venedik |
| 1482-01-01 | Tuz Savaşı — Venedik ve Papalığın Ferrara'ya saldırması | kronoloji_italya_sehir.js |
| 1482-01-01 | Zaklise'nin (Zakynthos) yıllık haraç karşılığı Venedik'e bırakılması | olaylar_ek5.js |
| 1482-05-03 | Ferrara Savaşı ve Polesine'in alınması | kronoloji_venedik.js |
| 1484-08-07 | Bagnolo Barışı — Polesine'nin Venedik'e bırakılması | kronoloji_italya_sehir.js |
| 1489-02-26 | Kıbrıs'ın devralınması | kronoloji_venedik.js |
| 1489-02-26 | Kraliçe Katerina Cornaro Kıbrıs'ı Venedik'e devretti — Haçlı devletinin sonu | olaylar_ek16.js |
| 1489-02-26 | Kıbrıs Krallığı'nı devraldı (Lüzinyan hanedanının sonu) | devletler.js:venedik |
| 1489-02-26 | Caterina Cornaro tahttan çekildi; Kıbrıs Venedik Cumhuriyeti'ne geçti. | devletler.js:kibris-venedik |
| 1490-02-01 | Kıbrıs haracının Venedik tarafından Memlük sultanına ödenmesi | kronoloji_memluk.js |
| 1494-09-01 | İtalya Savaşları'nın başlaması | kronoloji_venedik.js |
| 1495-07-06 | Fornovo ve Venedik Ligi | kronoloji_venedik.js |
| 1496-01-01 | Đurađ Crnojević Venedik'e kaçtı, kardeşi Stefan Osmanlı'nın eline geçti | kronoloji_balkan.js |
| 1498-05-20 | Ümit Burnu yolunun açılması — baharat tekelinin kırılması | kronoloji_venedik.js |
| 1499-08-12 | Sapienza (Zonchio) deniz bozgunu | kronoloji_venedik.js |
| 1499-08-26 | İnebahtı'nın teslimi — Korint körfezinin ağzı Venedik'ten alınıyor | olaylar_ek10.js |
| 1500-08-10 | Modon ve Koron'un kaybı — "cumhuriyetin iki gözü" | kronoloji_venedik.js |
| 1502-12-14 | Osmanlı-Venedik Savaşı'nın sona ermesi ve barış | olaylar_ek5.js |
| 1503-01-01 | İkinci savaşın sonu | kronoloji_venedik.js |
| 1508-12-10 | Cambrai Ligi — bütün Avrupa'nın Venedik'e karşı ittifakı | kronoloji_venedik.js |
| 1509-05-14 | Agnadello bozgunu — Terraferma'nın bir günde kaybı | kronoloji_venedik.js |
| 1509-07-17 | Padova'nın geri alınması — çöküşün durdurulması | kronoloji_venedik.js |
| 1509-12-22 | Polesella Deniz Savaşı — Venedik nehir filosunun topla imhası | kronoloji_italya_sehir.js |
| 1511-01-01 | I. Maximilian Gradisca'yı ve Ampezzo vadisini (Cortina) Venedik'ten aldı | kronoloji_sinir_avrupa_bati.js |
| 1516-03-29 | Ghetto'nun kurulması | kronoloji_venedik.js |
| 1516-10-01 | Brescia'nın geri alınması — Terraferma'nın toparlanması | kronoloji_venedik.js |
| 1523-05-20 | Andrea Gritti'nin doge seçilmesi ve "renovatio urbis" | kronoloji_venedik.js |
| 1529-12-23 | Bologna Barışı — İtalya savaşlarından çekilme | kronoloji_venedik.js |
| 1537-08-25 | Korfu kuşatması ve üçüncü savaşın başlaması | kronoloji_venedik.js |
| 1537-08-25 | Korfu kuşatması ve Venedik'le savaş | olaylar_ek5.js |
| 1537-10-01 | Barbaros'un Ege seferi: Venedik'in doğrudan yönettiği adaların alınması | olaylar_ek5.js |
| 1538-01-01 | Venedikliler Dalmaçya'da Ostrovica, Obrovac ve Scardona'yı aldı, Osmanlı da Nadin'i ele geçirdi | kronoloji_cok_venedik.js |
| 1538-09-28 | Preveze deniz savaşı | kronoloji_venedik.js |
| 1540-10-02 | Osmanlı-Venedik antlaşmasıyla hükümranlığın resmen devri | kronoloji_naksa_dukaligi.js |
| 1540-10-02 | Üçüncü savaşın sonu — Ege mevzilerinin bırakılması | kronoloji_venedik.js |
| 1548-06-01 | Venedik'in Halep'te konsolosluk açması | olaylar_ek14.js |
| 1570-07-02 | Lala Mustafa Paşa komutasındaki Osmanlı ordusu Limasol yakınında karaya çıktı. | devletler.js:kibris-venedik |
| 1570-09-09 | Lefkoşa'nın düşüşü | kronoloji_venedik.js |
| 1570-09-09 | Lefkoşa Osmanlılara düştü; Girne birkaç gün içinde teslim oldu. | devletler.js:kibris-venedik |
| 1571-01-01 | Bar (Antivari) ve Ülgün (Dulcigno) Venedik'ten alındı — Arnavut kıyısında fetih tamamlandı | kronoloji_cok_arnavut.js |
| 1571-05-25 | Kutsal Birlik'in kurulması | kronoloji_venedik.js |
| 1571-08-01 | Magosa'nın düşüşü — Kıbrıs'ın kaybı | kronoloji_venedik.js |
| 1571-08-01 | Kıbrıs Osmanlı'ya düştü (İnebahtı zaferine rağmen) | devletler.js:venedik |
| 1571-08-01 | Magosa teslim oldu; Venedik'in adadaki son tutunumu sona erdi. | devletler.js:kibris-venedik |
| 1571-10-07 | İnebahtı (Lepanto) deniz zaferi | kronoloji_venedik.js |
| 1573-03-07 | Osmanlı-Venedik Antlaşması — Kıbrıs'ın terki | kronoloji_venedik.js |
| 1573-03-07 | Venedik'le İstanbul Antlaşması — Kıbrıs'ın tanınması | olaylar_ek5.js |
| 1577-05-20 | Doge Sarayı yangını | kronoloji_venedik.js |
| 1582-01-01 | 1582 Correzione — Onlar Konseyi'nin yetkilerinin kısılması | kronoloji_venedik.js |
| 1587-04-01 | Banco della Piazza di Rialto — devlet bankası | kronoloji_venedik.js |
| 1591-01-01 | Rialto Köprüsü'nün taştan yapılması | kronoloji_venedik.js |
| 1592-01-01 | Split'te Bosna ticaretine açık liman (scala) kuruldu | kronoloji_cok_bosna.js |
| 1606-04-17 | Aforoz krizi (Interdetto) — kilise karşısında devletin üstünlüğü | kronoloji_venedik.js |
| 1615-01-01 | Uskok Savaşı — Avusturya ile Adriyatik çatışması | kronoloji_venedik.js |
| 1618-05-18 | "İspanya tertibi" — gerçekliği tartışmalı bir komplo | kronoloji_venedik.js |
| 1630-01-01 | Büyük veba | kronoloji_venedik.js |
| 1630-01-02 | Bernardo Strozzi'nin Venedik'e gitmesi — Ceneviz Barok'unun ihracı | kronoloji_italya_sehir.js |
| 1638-01-01 | Venedik donanması Avlonya'ya saldırdı — tazminatla kapanan kriz | kronoloji_cok_arnavut.js |
| 1645-01-01 | Girit Savaşı başladı: Osmanlı donanması Haziran 1645'te adaya çıktı ve Ağustos'ta Hanya düştü. | devletler.js:girit-venedik |
| 1645-06-23 | Girit Savaşı başladı — Osmanlı donanması Aya Todori önüne geldi | kronoloji_venedik.js |
| 1645-08-22 | Hanya'nın fethi — elli dört günlük kuşatmanın sonu | kronoloji_venedik.js |
| 1646-01-01 | Resmo (Rethymno) Osmanlı eline geçti. | devletler.js:girit-venedik |
| 1646-03-01 | Patrisyenliğin satışa çıkarılması — savaşın anayasal bedeli | kronoloji_venedik.js |
| 1648-01-01 | Kandiye kuşatması Mayıs 1648'de başladı; Venedik adada yalnızca Kandiye ve birkaç kaleyi elinde tutuyordu. | devletler.js:girit-venedik |
| 1648-03-31 | Klis'in Venedik'e kaybı | olaylar_ek5.js |
| 1648-05-01 | Kandiye kuşatmasının başlaması | kronoloji_venedik.js |
| 1656-06-26 | Çanakkale deniz zaferi — Boğaz'ın ablukası | kronoloji_venedik.js |
| 1657-07-19 | Çanakkale'de ablukanın kırılması | kronoloji_venedik.js |
| 1669-09-06 | Kandiye'nin teslimi — Girit'in kaybı | kronoloji_venedik.js |
| 1669-09-06 | Kandiye uzun kuşatmanın ardından anlaşmayla teslim olur; Girit Osmanlı'ya geçer. | devletler.js:girit-venedik |
| 1669-09-27 | Kandiye'nin düşüşüyle Girit kaybedildi | devletler.js:venedik |
| 1684-01-01 | Venedikliler Dalmaçya cephesinde pek çok kaleyi zaptetti | kronoloji_cok_venedik.js |
| 1684-01-01 | Kutsal İttifak Savaşı'nda Mora'yı fethetti (1699'a dek) | devletler.js:venedik |
| 1684-03-05 | Kutsal İttifak'a katılma | kronoloji_venedik.js |
| 1684-08-06 | Ayamavra'nın (Lefkada) Venedik'e kaybı | olaylar_ek5.js |
| 1684-09-29 | Preveze ve Vonitsa'nın Venedik'e kaybı — Epir kıyısının açılışı | olaylar_ek6.js |
| 1685-06-01 | Mora seferinin başlaması — Morosini'nin taarruzu | kronoloji_venedik.js |
| 1685-08-11 | Koron'un Venedik'e kaybı | olaylar_ek5.js |
| 1686-07-10 | Modon'un Venedik'e kaybı | olaylar_ek6.js |
| 1686-08-30 | Anabolu'nun (Nauplion) Venedik'e kaybı — Mora Savaşı'nın dönüm noktası | olaylar_ek17.js |
| 1686-09-30 | Sin (Sinj) Kalesi'nin Venedik'e kaybı — Dalmaçya iç kesimi | olaylar_2s_1019.js |
| 1687-07-01 | İnebahtı, komşu kalelerle birlikte Venedik'e teslim oldu | kronoloji_cok_venedik.js |
| 1687-07-01 | İnebahtı'nın (Lepanto) Venedik'e geçişi | olaylar_ki117.js |
| 1687-08-01 | Gördüs'ün (Korint) Venedik'e bırakılması | olaylar_ek6.js |
| 1687-09-26 | Atina'nın alınması ve Parthenon'un patlaması | kronoloji_venedik.js |
| 1687-09-30 | Herseknovi'nin Venedik'e kaybı — Kotor körfezinin ağzı | olaylar_2s_1019.js |
| 1688-01-01 | Karadağlılar Venedik himayesine girdi | kronoloji_balkan.js |
| 1688-04-08 | Atina'nın geri alınışı — Venedik'in çekilişi | olaylar_ek5.js |
| 1688-09-11 | Knin'in Venedik'e kaybı — 166 yıllık Dalmaçya sınır kalesi düştü | olaylar_ek8.js |
| 1688-10-20 | Eğriboz kuşatmasının başarısızlığı | kronoloji_venedik.js |
| 1688-10-20 | Venedik'in Eğriboz kuşatmasının püskürtülmesi | olaylar_ek5.js |
| 1690-09-17 | Avlonya ve Kanina kaleleri Venedik'in eline düştü | olaylar_ki117.js |
| 1691-03-15 | Venedik, Arnavutluk'ta aldığı kaleleri yıkıp çekildi | olaylar_ki117.js |
| 1692-01-01 | Granbosa Kalesi'nin kaybı | kronoloji_venedik.js |
| 1692-01-01 | Granbosa Kalesi'nin fethi — Girit'in Venedik'te kalan kayalık kalelerinden biri | olaylar.js |
| 1694-09-21 | Sakız'ın alınması | kronoloji_venedik.js |
| 1695-02-09 | Sakız'ın geri kaybedilmesi | kronoloji_venedik.js |
| 1699-01-26 | Karlofça Antlaşması: Kamaniçe ve Podolya Lehistan-Litvanya'ya, Mora Venedik'e, Macaristan Avusturya'ya | kronoloji_cok_senkron_0930.js |
| 1699-01-26 | Karlofça Antlaşması — Mora'nın Venedik'e bırakılması | kronoloji_venedik.js |
| 1699-01-26 | Karlofça ile Mora resmen Venedik'e bağlandı | devletler.js:venedik |
| 1714-12-08 | Son Osmanlı-Venedik Savaşı'nın başlaması | kronoloji_venedik.js |
| 1714-12-08 | Venedik'e savaş ilanı — Mora seferinin hazırlığı | olaylar_ek5.js |
| 1715-01-01 | Suda ve Spinalonga kalelerinin fethi — Girit'te son Venedik izinin silinmesi | olaylar.js |
| 1715-06-05 | İstendil (Tinos): Venedik'in Ege'deki son adasının teslimi | olaylar_ek5.js |
| 1715-09-01 | Ayamavra (Lefkada) yeniden Osmanlı hâkimiyetine geçti | kronoloji_cok_venedik.js |
| 1715-09-07 | Mora'nın kaybı — Damad Ali Paşa harekâtı | kronoloji_venedik.js |
| 1715-09-07 | Osmanlı, Mora'yı geri aldı | devletler.js:venedik |
| 1716-04-13 | Avusturya ile Venedik ittifak kurdu — 1716-1718 Osmanlı-Avusturya Savaşı'nın kapısı | olaylar_ek5.js |
| 1716-08-20 | Korfu savunması — son zafer | kronoloji_venedik.js |
| 1718-07-21 | Pasarofça Antlaşması: Belgrad, Banat ve Küçük Eflak Avusturya'ya; Venedik Dalmaçya'da kazanır | kronoloji_cok_senkron_0930.js |
| 1718-07-21 | Pasarofça Antlaşması — Mora'nın kesin kaybı | kronoloji_venedik.js |
| 1720-01-01 | Silahlı tarafsızlık siyasetine geçiş | kronoloji_venedik.js |
| 1755-01-01 | Angelo Querini vakası — anayasal muhalefetin bastırılması | kronoloji_venedik.js |
| 1784-05-01 | Angelo Emo'nun Kuzey Afrika seferi — donanmanın son harekâtı | kronoloji_venedik.js |
| 1789-03-09 | Ludovico Manin'in doge seçilmesi — son doge | kronoloji_venedik.js |
| 1797-04-20 | Lido olayı — Fransız gemisine ateş açılması | kronoloji_venedik.js |
| 1797-05-12 | Büyük Konsey'in kendini feshi — cumhuriyetin sonu | kronoloji_venedik.js |
| 1797-05-12 | Venedik Cumhuriyeti sona erdi: Büyük Konsey kendini feshetti | olaylar_napolyon_italya_1028.js |
| 1797-05-12 | Napolyon Cumhuriyet'e son verdi, Campo Formio ile Avusturya'ya bırakıldı | devletler.js:venedik |
| 1797-10-17 | Campo Formio — Belçika'nın kaybı, Venedik'in kazanılması | kronoloji_habsburg.js |
| 1797-10-17 | Campoformio Antlaşması — Venedik'in Avusturya'ya verilmesi | kronoloji_venedik.js |
| 1797-10-17 | Campo Formio Antlaşması — Venedik'in Avusturya ve Fransa arasında paylaşılması | olaylar_ek16.js |
| 1798-10-23 | Fransa'nın Epir kıyısındaki eski Venedik mülklerini Tepedelenli Ali Paşa'ya kaybetmesi — Nikopolis yenilgisi | kronoloji_cok_fransa.js |
| 1815-04-07 | Lombardiya-Venedik Krallığı'nın Avusturya'ya bağlanması | kronoloji_italya.js |
| 1815-06-09 | Viyana Kongresi Habsburg'ların Lombardiya ve eski Venedik Cumhuriyeti üzerindeki hakkını tanıdı; Lombardiya-Venedik Krallığı kuruldu. | devletler.js:lombardiya-venedik |
| 1848-03-18 | Milano'da Beş Gün ayaklanması başladı (18-22 Mart); Radetzky 22 Mart akşamı Dörtgen kalelerine çekilmeye başladı. | devletler.js:lombardiya-venedik |
| 1848-03-22 | Manin Venedik Arsenali'ni aldı: San Marco Cumhuriyeti ilan edildi | olaylar_napolyon_italya_1028.js |
| 1848-03-22 | Venedik'te Manin Arsenal'i ele geçirdi; Avusturya yönetimi çöktü, San Marco Cumhuriyeti ilan edildi. | devletler.js:lombardiya-venedik |
| 1848-03-22 | Daniele Manin Arsenal'i ele geçirdi; San Marco Cumhuriyeti ilan edildi, Manin başkan oldu. | devletler.js:venedik-1848 |
| 1848-03-26 | Avusturya birlikleri Venedik'ten çekildi. | devletler.js:venedik-1848 |
| 1848-08-07 | Castelli başkanlığındaki geçici hükümet yetkisini Piyemonte komiserlerine devretti (Kuzey İtalya Krallığı ile birleşme). | devletler.js:venedik-1848 |
| 1848-08-13 | Piyemonte'nin çöküşünden sonra meclis yeniden cumhuriyet ilan etti; Manin olağanüstü yetkilerle yeniden başkan seçildi. | devletler.js:venedik-1848 |
| 1849-08-22 | Venedik Avusturya'ya teslim oldu: San Marco Cumhuriyeti sona erdi | olaylar_napolyon_italya_1028.js |
| 1849-08-22 | Manin teslim kararını verdi; teslim belgesini Avusturya generali Gorzkowski imzaladı, Venedik Avusturya'ya teslim oldu. | devletler.js:venedik-1848 |
| 1859-11-10 | Zürih Antlaşması: Avusturya Lombardiya'yı (Mantova ve Peschiera hariç) III. Napolyon'a, o da Sardinya'ya devretti. | devletler.js:lombardiya-venedik |
| 1866-08-23 | Prag Barışı: Avusturya Venedik dışındaki topraklarını korudu, Prusya Schleswig-Holstein'ı aldı | olaylar_avmac_final_1029.js |
| 1866-10-03 | Viyana Antlaşması: Avusturya Venedik'i İtalya'ya bırakır | kronoloji_cok_senkron_0930.js |
| 1866-10-03 | Viyana Barışı — Venedik'in kaybı | kronoloji_habsburg.js |
| 1866-10-03 | Viyana Barışı — Venedik ve Veneto İtalya'ya geçti | kronoloji_sinir_avrupa_bati.js |
| 1866-10-03 | Viyana Antlaşması: Venetya ve Friuli'nin çoğu Fransa aracılığıyla İtalya'ya devredildi. | devletler.js:lombardiya-venedik |
| 1866-10-21 | Venedik plebisiti | kronoloji_italya.js |
| 1921-10-13 | Venedik Protokolü — Macaristan Burgenland'ı Avusturya'ya devretmeyi, Sopron'da plebisiti kabul etti | olaylar_avmac_c_1029.js |

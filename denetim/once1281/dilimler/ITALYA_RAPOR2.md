# ITALYA tur 2 raporu (web doğrulama)

Yöntem: Bash `curl -sL -A "Mozilla/5.0"` ile Treccani (Enciclopedia on line, Enciclopedia Italiana 1929-37, Dizionario Biografico degli Italiani), Perseus (Thucydides, Herodotos, Polybios), LacusCurtius (Cassius Dio 53), thelatinlibrary (Ovidius Fasti 1) metin olarak okundu; alıntılar sayfa metninde arandı. Çalışma betikleri scratchpad'dedir, depoya girmedi.

## 1) Sayılar (dilim dosyaları, tur 2 sonu)
| Dilim | Kayıt | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 |
| B | 45 | 12 | 24 | 9 |
| C | 23 | 3 | 15 | 5 |
| D | 24 | 6 | 16 | 2 |
| E | 32 | 5 | 27 | 0 |
| Toplam | 124 | 26 | 82 | 16 |

Eklenen: 1 (`della-torre-signoria`, E). Elenen: 1 (`golasecca-kulturu` -> `ITALYA_ELENEN.json`, gerekçe: Treccani 'Cultura di Golasecca' arkeolojik kültür, siyasî birim değil). `okundu` = dayanak sayfa bu oturumda açıldı ve f/t'nin ikisi de kaynakla desteklendi; `kismen-okundu` = polity varlığı ve en az bir uç okundu, öteki uç/gün okunmadı (her kayıtta `ic_not`ta ayrıldı). Taslak değerler `ic_not`ta «taslak f/t değeri: …» diye saklandı.

Taslakta kalanlar (kaynak sayfa bulunamadı/okunamadı): villanova-kulturu, nuragik-sardinya, etrusk-velzna, etrusk-felsina, elea-velia, lokroi-epizephyrioi, kartaca-sardinya, segesta-elymoi, piceni, herakleia-lukanya, kartaca-sicilya, mamertin-devleti, italia-birligi-sosyal-savas, cottius-krallik, taranto-emirligi, garigliano-muslim.

## 2) Atlas düzeltme önerilerinin sınanması (kaynaklı)
- **bati-roma**: t atlas 0476-08-28 hiçbir kaynakta yok. DBI Odoacre (Scrofani 2013): 23 Ağustos 476 ordu Odoakar'ı rex ilan etti; «primi di settembre» Ravenna'ya girip Romulus'u indirdi (geleneksel 4 Eylül okunmadı). `t=0476-09-01` (ay). Nepos 480'e dek (Treccani Giulio Nepote; DBI) augustus unvanını korudu: alternatif son 480. f=395 yılı Treccani Arcadio ile okundu, gün okunmadı. bolge bati-avrupa -> italya önerisi aynen geçerli.
- **odoakar**: f=476-08-23 DBI ile okundu (gün). t 493 (iki kaynak); 03-05 günü okunmadı -> yıl. **dogu-got**: f 493, t taslak 553 destek bulmadı: Treccani Ostrogoti: Teia 552 Ekim'de Monte Lattari'de öldü, son garnizon Conza 555 -> `t=0552-10-01`.
- **langobard**: 568 (gelenek) / 569 (Treccani Longobardi); son 774 iki kaynakta, Haziran okunmadı. **karolenj-italya**: t=962 yılı okundu; Regno Italico 951'de Otto ile Germen krallığına bağlandı (Treccani Berengario II).
- **cenova**: 1005 desteklenmedi. Enciclopedia Italiana: ilk 3 yıllık Compagna 1098 (Caffaro'ya dayanır), 1100 ilk resmî haçlı seferi -> `f=1098` (alternatif 1099, okunmadı).
- **sicilya-kralligi**: kontluk/fetih 1061-1091, Palermo 1072 başı (EI Sicilia); **kral unvanı 1130** (Anacleto II, Treccani Ruggero II; 25 Aralık günü okunmadı), 1139 (Innocentius II). Atlas f=1072 kontluk dönemini kapsıyor: ya 1072/1130 ayrımı ya künye adı düzeltmesi gerekir. Vespri 31 Mart 1282 (Treccani) – atlas t 30 Mart: tek kaynakla gün seçilmedi, t yıl düzeyinde.
- **sicilya-emirligi**: künye (947-1091) Ağlabî evresini (827; Palermo 831; Ağlabîler 800-909, Fâtımî 910) ve Kelbî evresi başlangıcını (948, EI) kapsamıyor; son 1091 (Noto/Butera). Önerim: 827-1091 tek polity, iç evreler `ic_not`.
- **milano-dukaligi f=1097**: yanlış etiket. Treccani Milano: komün 1097; Della Torre signoria 1260-1277 (yeni kayıt eklendi); Visconti signoria 1277 (Desio; Treccani 'Visconti 1278-1447'); **dukalık 11 Mayıs 1395** (gün okundu). `milano-komunu t=1260`, `visconti-signoria f=1277, t=1395-05-11`.
- **verona-scaliger / della-scala mükerrer**: Treccani 'Della Scala': Mastino I 1259'da podestà, «ufficialmente inizio la signoria scaligera (1277)»; Treccani Verona: Mastino ölümü 1277, Alberto kaptan; 1387'de Visconti'ye geçti. 1262 hiçbir okunan kaynakta yok -> tek künye `della-scala` 1277-1387 öneriyorum, `verona-scaliger` silinsin/birleşsin.
- **roma-komunu**: f 1143 (Treccani Senato: Innocentius II ölümü sonrası senato), 1144 (Treccani Roma); t=1155 (Treccani Roma: Arnaldo terk edilince komün papalığa boyun eğdi); atlas t=1188 (Clemens III) okunmadı; Senato 1191'de tek senatör, 1204'te papa atamalı (Treccani Senato).
- **Gün düzeltmeleri**: Ezzelino ölümü «forse il 1° ottobre 1259» (DBI), atlas/taslak 1259-09 desteklenmedi; Cagliari yargıçlığı sonu 20 Temmuz 1258 (EI Sardegna, Santa Igia); Amalfi 839-1131 ve Napoli 763-1139 (EI doğrudan parantez içi); Salerno 849 (Treccani) vs 839 (EI) vs 847 (EI Capua): üç kaynak çelişir, 849 seçildi; Gaeta f atlas 836/taslak 839 desteklenmedi (EI: 9. yy sonu, bağımsızlık 150 yıl, 1032'de bitti -> f null, t=1032).
- **Bağlı polity yanlışları**: Bologna komünü f=1116 değil 1106 (Guastalla) / 1114 (kale yıkımı) (Treccani); Piacenza komünü 1090 (Treccani), taslak 1126; Parma konsülleri 1149 (taslak 1100); Cremona 1098 ✓; Padova 1138 ✓; Perugia komün onayı 1186 (taslak 1139); Brixen prens-piskoposluk 1027-1803 ✓ okundu.
- **Antik**: Kroton t=277 MÖ (-0276), Messana t=289 MÖ (-0288), Rhegion t=282 MÖ (-0281, Roma garnizonu), Neapolis t=326 MÖ (-0325, foedus aequum), Tarquinia t=281 MÖ, Mozia t=397 MÖ (-0396), Siracusa t=212 MÖ (-0211), Capua t=211 MÖ (-0210), Turi f=444 MÖ (-0443). Megara Hyblaia 728/483 MÖ ve Selinus/Akragas/Gela göreli tarihleri Thukydides 6.3-4 hesabıyla birebir uyumlu.

## 3) Ulaşılamayan / yetersiz kalan kaynaklar
- Perseus'ta Livius sayfaları 503 verdi (Livius 4.44, 8.22 okunamadı: Cumae 421, Neapolis 326 tarihleri Treccani'den). thelatinlibrary Livius adresleri geçersiz çıktı.
- Treccani'de maddesi açılamayan başlıklar (404/ana sayfa): Mamertini, Locri, Velia, Naxos, Nuragici, Villanoviana, Piceni, Cozio, Ottone I, Carlo Magno, Giulio Nepote DBI girişi.
- Pleiades, Der Neue Pauly, OCD, Oxford Dictionary of Byzantium, Dictionary of the Middle Ages bu turda açılmadı (Pleiades API erişimi var, yer kimlikleri aranmadı).
- TDV bu bölge için kullanılmadı (Sicilya emirliği/Aglabî için TDV 'Sıkıllıye' maddesi ayrıca denenmeli; `islamansiklopedisi.org.tr` curl ile erişilebiliyor).
- Treccani 'Enciclopedia Italiana' (1929-37) tarihleri eskidir; Wickham, Loud (Guiscard), Matthew (Norman Sicily), Epstein (Genoa), Waley (Italian City-Republics) gibi modern akademik basılı eserler okunamadı. `okundu` işaretli kayıtlar çoğu zaman EI ve DBI'ya dayanır; kaynak kuralındaki ikinci bağımsız akademik kaynak (çift teyit) yalnız şunlarda var: Odoakar, Napoli dukalığı, Kroton t, Selinus t, Britanya İmp.

## 4) Tamamlama: neyi eklemedim
Tur 1 raporundaki sığ yerler büyük oranda duruyor: Lombard dukalıkları (Trento, Lucca-Tuscia), Roma Dukalığı/Pentapolis/Comacchio, Bizans Sicilya/Kalabria temaları, Monte Cassino, Malta (Arap dönemi), Korsika; Etrüsk Arretium/Perusia/Cortona/Vetulonia/Rusellae/Fiesole/Spina; Magna Graecia'dan Hipponion, Kaulonia, Siris, Kamarina; Cisalpina'dan Orobii/Salassi; komünlerde Vicenza, Treviso, Mantova, Lodi, Como (atlasta var), Ferrara, Ravenna, Rimini, Lucca/Siena erken, Orvieto, Arezzo, Pistoia, Faenza, Forlì, Imola; Malaspina/Este/Guidi/Aldobrandeschi/Alberti kontlukları. Tamlık iddiası yok.

## 5) İstekler
1. Yukarıdaki künye düzeltmelerini (cenova 1098, sicilya-kralligi 1072/1130 ayrımı, milano komün/Torriani/Visconti/dükalık dörtlüsü, della-scala tek künye) ana oturum atlasa uygular mı, karar Emre'de.
2. `dogu-got` t ve `bati-roma` t için Emre'nin «kuruluş/bitiş» tanımı: Teia'nın ölümü (552) mi, son garnizon (555) mi; Romulus'un indirilişi (476) mi, Nepos'un ölümü (480) mi?
3. Roma komünü (1143-1155) papalığa bağlı enklav mı ayrı künye mi, ve Kartaca'nın Sicilya/Sardinya parçaları (tur 1'den kalan soru) için karar.
4. Taslakta kalan 16 kayıt için ikinci bir oturum Pleiades JSON + Perseus ile okusun (Pleiades erişimi var, yer kimlikleri aranmadı).

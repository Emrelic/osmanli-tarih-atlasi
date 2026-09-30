# KRONO-ATLANTIK-A-0929 — DÜZELTME defteri

Dosyalar: `data/kronoloji_fransa.js` · `kronoloji_ispanya.js` · `kronoloji_portekiz.js` (düzeltme için bu
paketin; madde EKLENMEDİ). Uygulayıcı `denetim/ARAC-KRONO-ATLANTIK-A-0929-UYGULA.py` (kuru koşu varsayılan,
her alan değişimi maddenin bloğunda TEK eşleşme şartı, `--parti2`/`--parti3`). Ham denetim:
`denetim/KRONO-ATLANTIK-A-0929-bulgu-<dosya>.json` (her bulgu: i · satır · sınıf · öneri · kanıt · güven).

## 1. UYGULANAN — 30 düzeltme (kaynağı AÇILMIŞ, yüksek güven)

| dosya:satır | eski t | yeni t | ne | kaynak (maddeye yazıldı) |
|---|---|---|---|---|
| fransa:277 | 1536-02-18 | = | d+kaynak: metin TASLAKTIR, tasdik edilmedi; ilk tasdikli genel kapitülasyon 1569 | TDV `imtiyazat` (gövde okundu) |
| fransa:447 | 1720-01-01 | **1720-10-07** | Yirmisekiz Mehmed Çelebi'nin hareketi; kabul 21 Mart 1721 `gun`'da | TDV `yirmisekiz-celebi-mehmed-efendi` (okundu) |
| fransa:607 | 1794-08-01 | **1794-03-11** | École polytechnique kuruluş kararı | polytechnique.edu resmî tarihçe |
| fransa:667 | = | = | başlık: "imparator ilanı" → **taç giyme** (ilan 1804-05-18 ayrı madde, COK) | Conseil constitutionnel |
| fransa:762 | 1830-11-25 | **1830-02-25** | Hernani ilk temsili | BnF Essentiels · Larousse |
| fransa:797 | 1853-10-04 | **1854-03-27** | Fransa'nın savaş ilanı; 🔴 eski kaynaktaki tırnaklı "TDV alıntısı" TDV'de BİREBİR YOK — kaldırıldı, gerçek TDV cümlesi yazıldı | TDV `fransa` · Britannica |
| fransa:877 | 1881-03-28 | **1882-03-28** | Ferry zorunlu+laik ilköğretim yasası (parasızlık 1881-06-16) | Sénat |
| ispanya:328 | 1565-05-18 | **1565-05-19** | Malta: donanma adaya vardı (TDV esas) | TDV `malta` (İ. Bostan; okundu) |
| ispanya:333 | 1565-09-07 | **1565-09-08** | kuşatma kalktı | TDV `malta` |
| ispanya:353 | 1574-08-25 | **1574-09-12** | Tunus; Halkulvâdî 24 Ağustos; komutan Koca Sinan + Kılıç Ali (d düzeltildi); 🔴 eski dayanak ATLAS kaydıydı | TDV `tunus` (okundu) |
| ispanya:491 | 1701-05-01 | **1702-05-15** | Büyük İttifak'ın savaş ilanı (1 Mayıs 1701 için hiçbir olay yok) | Britannica · Kamen 1969 |
| ispanya:541 | 1737-06-02 | **1738-04-18** | RAH kuruluş kararnamesi | rah.es Real Cédula fundacional |
| ispanya:551 | 1741-03-20 | **1741-05-20** | Cartagena: 20 Mart hiçbir uca denk gelmiyordu | Britannica · Lynch 1989 |
| ispanya:670 | 1808-07-22 | **1808-07-19** | Bailén muharebesi (22 = kapitülasyon) | Britannica · Esdaile 2002 |
| ispanya:779 | 1912-03-30 | **1912-11-27** | İspanyol protektorası (30 Mart = Fransa-Fas Fes antlaşması) | Britannica · Payne |
| portekiz:120 | 1471-08-24 | **1471-08-28** | Tanca (24 Ağustos = Arzila) | TDV `tanca` (okundu) |
| portekiz:293 | 1547-11-01 | **1549-02-12** | Aden'in geri alınışı = başlıktaki "son" | TDV `piri-reis` |
| portekiz:308 | 1552-08-01 | **1552-01-01** | Hürmüz: TDV Ağustos'u desteklemiyor (Ekim 1552 sonrası); gün bilinmediğinden yıl | TDV `piri-reis` |
| portekiz:402 | 1761-01-19 | **1761-09-19** | köle girişi yasağı alvarası | ANTT · Afro-Ásia 60 |
| portekiz:407 | 1772-01-01 | **1772-08-28** | Coimbra Estatutos onayı | uc.pt |
| portekiz:461 | 1834-05-24 | **1834-05-26** | Evoramonte | BNP purl.pt/27157 |
| portekiz:505 | 1911-03-22 | **1911-04-20** | Kilise-devlet ayrılığı kararnamesi | parlamento.pt |
| portekiz:520 | 1923-10-29 | **1923-01-01** | 🔴 pencere UÇ İŞARETİ tarih diye yazılmıştı; `kapsam_genis` kaldırıldı (odaksız + kapsam_genis = kamera Osmanlı'ya uçuyordu), `yer_id:"Lizbon"` (parti 3) | CLAUDE.md §4 |
| portekiz:110 · 115 · 239 · 426 | = | = | gün DOĞRU çıktı; "bulunamadı" kaynağı adlı kaynakla değişti | Infopédia · Russell 2000 · EVE FCSH-UNL · Arquivo Nacional (BR) |
| portekiz:229 | = | = | Selman Reis/Cidde: `gun` + TDV kaynağı | TDV `selman-reis` |
| portekiz:174 | = | = | Jerónimos: kurumun kendisi "1501 ya da 1502" diyor → `gun` | mosteirojeronimos.torrebelem.gov.pt |

Odak etkisi (`odak_olc.py --dosya kronoloji_portekiz.js`): ODAKSIZ 21→20, BEYANLI→yabancı 10→9, kırık 0.

## 2. UYGULANMAYAN öneriler — orta/düşük güven ya da hüküm gerektiren (koordinatör)

Tarihi/başlığı tartışmalı maddeler; dosyaya YAZILMADI. `kaynak-zayif` sınıfı §4'te sayılır.

### `kronoloji_fransa.js` — uygulanmayan tarih/metin önerileri (15)

| i | satır | mevcut t | başlık | sınıf | güven | öneri | kanıt |
|---|---|---|---|---|---|---|---|
| 72 | 457 | 1740-01-01 | I. Mahmud'un kapitülasyonlara süreklilik kazandırması | tarih-yanlis | orta | 1740-05-28 | BnF Patrimoines partagés 'Capitulations' (heritage.bnf.fr/bibliothequesorient/en/capitulations): 1740 kapitülasyonu 28 Mayıs 1740'ta imzalandı; TDV 'fransa' yalnız yıl verir |
| 57 | 382 | 1648-01-30 | Fronde isyanının başlaması | tarih-yanlis | orta | 1648-05-13 (Arrêt d'Union) ya da 1648-08-26 (Barikatlar Günü) — hangisi 'başlangıç' sayılacaksa; lit de justice 1648-01-15 | Larousse 'la Fronde' + Universalis 'Fronde: les barricades de 1648': 15 Ocak lit de justice, 13 Mayıs arrêt d'union, 26 Ağustos barikatlar |
| 39 | 282 | 1539-08-10 | Villers-Cotterêts Fermanı — Fransızcanın resmî idare dili ol | sahte-kesinlik | orta | 1539-08-25 (Légifrance kaydının tarihi); metin tarihsizdir, açıklamaya '10-25 Ağustos arası' notu | Légifrance 'Ordonnance du 25 août 1539 sur le fait de la justice' (legifrance.gouv.fr/loda/id/LEGITEXT000006070939); 10 Ağustos'u destekleyen akademik kaynak yok |
| 159 | 892 | 1889-05-06 | Eyfel Kulesi'nin açılışı | tarih-yanlis | orta | 1889-03-31 (kulenin açılışı) ya da 1889-05-15 (halka açılış) | toureiffel.paris 'La Tour: clou de l'Exposition universelle de 1889': 31 Mart 1889 açılış, 15 Mayıs halka açık |
| 71 | 452 | 1720-05-01 | Mississippi Balonu'nun patlaması — John Law'ın çöküşü | sahte-kesinlik | orta | 1720-05-21 (hisse ve banknot değerini indiren arrêt = çöküşün dönüm noktası) | Arama özetleri 21 Mayıs 1720 arrêt'ini verir; akademik dayanak önerisi: A. E. Murphy, 'John Law: Economic Theorist and Policy-Maker' (OUP 1997) — sayfa doğrulanmadı |
| 176 | 977 | 1917-04-17 | Saint-Jean-de-Maurienne Antlaşması | tarih-yanlis | orta | 1917-04-19 (Saint-Jean-de-Maurienne konferansı); metin 26 Nisan, onay 18 Ağu-26 Eyl 1917. TDV ile çelişki — hüküm koordinatörde | Britannica 'Agreement of Saint-Jean-de-Maurienne' (arama özeti; sayfa 403): konferans 19 Nisan 1917; TDV 'fransa' '17 Nisan 1917' der |
| 74 | 467 | 1756-01-01 | Diplomatik Devrim ve Yedi Yıl Savaşları'na giriş | tarih-yanlis | orta | 1756-05-01 (I. Versay Antlaşması, Fransa-Avusturya ittifakı = Diplomatik Devrim) | Genel akademik bilgi (Britannica 'Diplomatic Revolution'); web ile doğrulanmadı |
| 51 | 352 | 1624-04-29 | Richelieu'nün kral başdanışmanı olması | metin-celiski | orta | 29 Nisan 1624 yalnız kraliyet konseyine giriş; 'principal ministre' 1624-08-13. Başlık 'konseye girişi' olmalı ya da tarih 1624-08-13 | Genel akademik bilgi (Britannica 'Cardinal Richelieu'); web ile doğrulanmadı |
| 35 | 262 | 1526-01-14 | Madrid Antlaşması — I. François'nın serbest bırakılması | metin-celiski | orta | İmza 1526-01-14 doğru; serbest bırakılış (Bidassoa'da değiş tokuş) 1526-03-17 — başlıktan 'serbest bırakılması' çıkarılmalı | Genel akademik bilgi (R. J. Knecht, 'Renaissance Warrior and Patron', CUP 1994); web ile doğrulanmadı |
| 119 | 692 | 1808-09-27 | Erfurt Kongresi — Napolyon-Çar Aleksandr görüşmesi | metin-celiski | orta | Kongre 27 Eylül-14 Ekim 1808; tarih doğru ama gün için dayanak TDV değil — akademik kaynak adıyla yazılmalı | TDV 'fransa' önbelleği: '1808 Ekiminde Erfurt'ta Çar Aleksandr ile buluşan Napolyon' (gün yok) |
| 28 | 227 | 1494-09-02 | İtalyan Savaşları'nın başlaması — VIII. Charles'ın Napoli se | sahte-kesinlik | dusuk | Gün kaynaksız; kaynaklar Montgenèvre geçişini 3 Eylül 1494 (Asti 9/11 Eylül) verir — akademik kaynakla gün yazılmalı ya da 1494-01-01 | Web aramasında 2 Eylül desteklenmedi; 3 Eylül geçiş raporlanıyor (dogrulanmadi) |
| 46 | 327 | 1589-08-01 | III. Henri'nin suikastı ve Valois hanedanının sona ermesi | metin-celiski | dusuk | Bıçaklanma 1589-08-01, ölüm (hanedanın sonu) 1589-08-02; açıklama ölüme vurgu yaptığından ya 08-02 ya başlık ayrılmalı | Genel akademik bilgi (R. J. Knecht, 'Hero or Tyrant? Henry III', 2014); web ile doğrulanmadı |
| 30 | 237 | 1515-09-14 | Marignano Savaşı | metin-celiski | dusuk | Muharebe 13-14 Eylül 1515 (açıklama 'iki günlük' diyor); başlangıç 13 Eylül — seçim bilinçliyse not düşülmeli | Genel akademik bilgi; web ile doğrulanmadı |
| 67 | 432 | 1701-09-07 | İspanya Veraset Savaşı'nın başlaması | metin-celiski | dusuk | 7 Eylül 1701 Lahey Büyük İttifak antlaşmasıdır; resmî savaş ilanları 1702-05-15. Başlık 'Büyük İttifak'ın kurulması' olmalı ya da tarih 1702-05-15 | Genel akademik bilgi; web ile doğrulanmadı |
| 145 | 822 | 1863-06-10 | Meksika Seferi — Maximilian'ın imparator ilanı hazırlığı | sahte-kesinlik | dusuk | 10 Haziran 1863 Forey'nin Meksiko'ya girişi olarak savunulabilir; ama başlık 'Maximilian'ın imparator ilanı hazırlığı' — Notables Meclisi tacı 1863-07-10'da önerdi. Olay netleştirilip gün kaynaklanmalı | Web ile doğrulanmadı |

`kaynak-zayif` (uygulanmayan): **161** madde — tam liste `denetim/KRONO-ATLANTIK-A-0929-bulgu-fransa.json`.

### `kronoloji_ispanya.js` — uygulanmayan tarih/metin önerileri (14)

| i | satır | mevcut t | başlık | sınıf | güven | öneri | kanıt |
|---|---|---|---|---|---|---|---|
| 13 | 152 | 1492-01-01 | Nebrija'nın Kastilya Dilbilgisi'nin yayımlanması | sahte-kesinlik | yuksek | 1492-08-18 — Gramática kolofon tarihi (Salamanca, 18 Ağustos 1492) | Nebrija Gramática kolofonu 18 Ağustos 1492 (BNE kaydı) — yaygın bilinen tarih |
| 15 | 162 | 1499-01-01 | Alcalá de Henares Üniversitesi'nin kuruluşu | sahte-kesinlik | orta | 1499-04-13 (VI. Aleksander kuruluş bullası) | Alcalá Üniversitesi tarihçesi: bula de 13 de abril de 1499 — web ile ayrıca doğrulanmadı |
| 17 | 172 | 1502-01-01 | Kastilya'daki müslümanlara zorla vaftiz ya da sürgün dayatıl | sahte-kesinlik | orta | 1502-02-12 (Sevilla pragmatiği; bazı kaynaklar 14 Şubat verir) — ay kesin, gün ikili | es.wiki Pragmática de conversión forzosa (yalnız yer bulmak için); L.P. Harvey, Muslims in Spain 1500-1614 |
| 24 | 211 | 1520-05-29 | Comuneros İsyanı başladı | tarih-yanlis | orta | Toledo ayaklanması Nisan 1520 (16 Nisan yaygın); 29 Mayıs Segovia ayaklanmasıdır | Junta de Castilla y León arşiv sayfası: "abril y mayo de 1520" Toledo ve Segovia; 29-05-1520 Segovia |
| 54 | 373 | 1580-06-01 | Osmanlı ile fiilî ateşkes | tarih-yanlis | orta | Margliani ateşkesi Şubat 1580 (21 Mart 1580–Ocak 1581 süreli); üç yıllık ateşkes 1581-02-04. 1 Haziran için olay bulunamadı | historystudies.net "Ottoman-Spanish Relations from Struggle to Truce": ateşkes 21 Mart 1580; 4 Şubat 1581 üç yıllık |
| 61 | 412 | 1609-04-04 | Moriskoların sürgün fermanının uygulanmaya başlaması | metin-celiski | orta | 4 Nisan 1609 KARAR günüdür (TDV); başlık "sürgün kararı" olmalı, ya da uygulama için Valensiya fermanı 1609-09-22 | TDV moriskolar: "4 Nisan 1609'da sürgün yolu benimsendi" — uygulama değil karar |
| 84 | 531 | 1717-01-01 | Casa de Contratación Cádiz'e taşındı | sahte-kesinlik | dusuk | 1717-05-12 (Casa de Contratación'ı Cádiz'e taşıyan kararname) — dogrulanmadi | García-Baquero, Cádiz y el Atlántico — web'de doğrulanmadı |
| 87 | 546 | 1736-01-01 | Fransız-İspanyol Jeodezi Seferi (Ekvator ölçümü) | tarih-yanlis | orta | 1735 (Jorge Juan ve Ulloa Mayıs 1735'te Cádiz'den ayrıldı; Fransızlar Mayıs 1735 La Rochelle) — 1736 Quito'ya varış | Britannica "La Condamine": expedition sailed 1735 |
| 123 | 734 | 1836-01-01 | Mesta'nın (göçebe koyun yetiştiricileri loncası) kaldırılmas | sahte-kesinlik | dusuk | 1836-01-31 (Real Orden) — gün doğrulanmadı, yıl doğru | Klein, The Mesta (1920) — gün web'de doğrulanmadı |
| 135 | 805 | 1514-01-01 | Complutensian Poliglot İncil'in basımına başlandı | metin-celiski | orta | 1514-01-10 Yeni Ahit cildinin basımı TAMAMLANDI (baskı daha önce başladı); başlık "ilk cildin basımı tamamlandı" olmalı | Complutensian Polyglot NT kolofonu 10 Ocak 1514 (Bataillon, Erasmo y España) — web ile ayrıca doğrulanmadı |
| 136 | 810 | 1527-08-01 | Valladolid Konferansı — Erasmusçu hümanizmin sınandığı topla | tarih-yanlis | dusuk | Konferans 1527 yazında (Haziran sonu açılış, Ağustos'ta vebayla askıya alındı); 1 Ağustos dayanaksız — dogrulanmadi, 1527-01-01 daha güvenli | R. Dixon "Erasmism in Spain: The Valladolid Conference of 1527" (UNM); es.wiki yalnız "1527, 16 oturum" |
| 143 | 845 | 1627-01-01 | Kraliyet hazinesinin iflası (dördüncü büyük iflas) | metin-celiski | orta | 1627 iflası dördüncü değil: 1557, 1560, 1575, 1596, 1607, 1627 (altıncı) | Elliott, Imperial Spain / Parker: ödeme durdurmaları 1557·1560·1575·1596·1607·1627 |
| 143 | 845 | 1627-01-01 | Kraliyet hazinesinin iflası (dördüncü büyük iflas) | sahte-kesinlik | orta | 1627-01-31 (ödeme durdurma kararnamesi) | Elliott, The Count-Duke of Olivares: bankruptcy decree 31 January 1627 |
| 148 | 870 | 1786-01-01 | Goya birinci saray ressamı oldu | metin-celiski | yuksek | 1786-06-25 = "pintor del rey"; "primer pintor de cámara" 1799 — başlık düzeltilmeli, gün 25 Haziran | Museo del Prado "Goya y la corte ilustrada" + biyografiler: 25 Haziran 1786 pintor del rey; 1799 primer pintor de cámara |

`kaynak-zayif` (uygulanmayan): **79** madde — tam liste `denetim/KRONO-ATLANTIK-A-0929-bulgu-ispanya.json`.

### `kronoloji_portekiz.js` — uygulanmayan tarih/metin önerileri (13)

| i | satır | mevcut t | başlık | sınıf | güven | öneri | kanıt |
|---|---|---|---|---|---|---|---|
| 2 | 81 | 1383-12-06 | 1383-1385 Bunalımı başladı — Kastilya'ya karşı tahta veraset | metin-celiski | orta | Başlık: 'Aviz üstadı João, Kont Andeiro'yu öldürdü — 1383-85 bunalımı ayaklanmaya dönüştü' (t:1383-12-06 korunur). kaynak: "RTP Ensina, 'A morte do Conde Andeiro' · Infopédia 'Crise de 1383-1385'" | RTP Ensina/Infopédia: 6 Aralık'ta Aviz üstadı Andeiro'yu öldürdü; kriz Fernando'nun 22 Ekim 1383 ölümüyle başladı |
| 10 | 125 | 1482-01-19 | São Jorge da Mina (Elmina) kalesi inşa edildi | sahte-kesinlik | orta | t:1482-01-21 (temel taşı / inşaat başlangıcı) ya da başlığı 'Azambuja filosu Elmina'ya vardı' yap. kaynak: "HPIP (Heritage of Portuguese Influence), 'Elmina [São Jorge da Mina]' + A. W. Lawrence / J. Vogt, Portuguese Rul | Arama sonuçları: filo 19 Ocak 1482'de Benya ağzına vardı, inşaat 21 Ocak 1482'de başladı; HPIP sayfası sertifika hatası nedeniyle açılamadı |
| 11 | 130 | 1483-04-01 | Diogo Cão, Kongo Nehri ağzına ulaştı | sahte-kesinlik | orta | t:1483-01-01 (yıl-yalnız; São Jorge padrão'su Damião Peres'e göre 23-26 Nisan 1483 — gün kullanılacaksa o, kaynağıyla) · kaynak: "Damião Peres, História dos Descobrimentos Portugueses" (sayfa dogrulanmadi) | Arama: geleneksel kronoloji Ağu 1482; Peres'e göre padrão 26 Nisan 1483. 1 Nisan hiçbir kaynakta yok |
| 17 | 164 | 1500-01-01 | Casa da Índia kuruldu — baharat tekelinin idare merkezi | sahte-kesinlik | orta | Metne 'ilk yazılı iz 1501, kurumsal teşkil 1503 civarı' yazılmalı; kaynak: "ICS-ULisboa proje 'The Archive of Casa da Índia (1500-1642)' · Infopédia 'Casa da Índia'" | ICS/Infopédia arama özetleri: 1500, 1501 (ilk belge), 1503 (Casa da Guiné e Mina ile birleşme) tarihleri ayrışıyor |
| 23 | 194 | 1508-03-01 | Chaul Deniz Savaşı — Hint Okyanusu'nda ilk Portekiz yenilgis | sahte-kesinlik | orta | t:1508-03-01 → yıl-ay hassasiyeti metinde belirtilmeli ya da gün (bazı kaynaklar 24 Mart?) dogrulanmadi; kaynak: TDV `selman-reis` / `husyn-kurdi` + Subrahmanyam, The Career and Legend of Vasco da Gama ya da Couto-Correi | pt.wikipedia 'Batalha de Chaul' yalnız 'Março de 1508'; gün kaynakla doğrulanamadı |
| 31 | 234 | 1517-01-01 | Seylan'a ulaşıldı — tarçın adası | metin-celiski | yuksek | Başlık: 'Kolombo'da ilk Portekiz kalesi / Seylan'da kalıcı üs' (1517-18) ya da ayrı madde 1505 'ilk varış'. kaynak: TDV `portekiz` + "Encyclopaedia of Portuguese Expansion, 'City of Colombo'" | eve.fcsh.unl.pt/en/places/city-colombo ve Britannica 'Portuguese in Sri Lanka 1505-1658': 1505 varış, 1518 Lopo Soares kale |
| 36 | 263 | 1537-01-01 | Coimbra Üniversitesi kalıcı olarak Coimbra'ya taşındı | metin-celiski | orta | Cümle 'ilk yıllarda şehirdeki kolejlerde, 1544'ten itibaren kraliyet sarayında' olarak düzeltilmeli; kaynak: Universidade de Coimbra, 'De 1537 até à Reforma Pombalina' (uc.pt/ciuc/fduc) | uc.pt tarih sayfası 1537 naklini anlatır; saray alımı 1544 (UC Alta e Sofia bilgisi — sayfa satırı dogrulanmadi) |
| 40 | 283 | 1541-04-10 | Cristóvão da Gama, Habeşistan'a yardım kuvveti çıkardı | sahte-kesinlik | orta | Kuvvet Massawa/Arkiko'da karaya çıktı, Estêvão da Gama 9 Temmuz 1541'de Hindistan'a döndü; gün dogrulanmadi → t:1541-01-01 ya da Castanhoso anlatısından gün (Whiteway çevirisi, Hakluyt Soc. 1902) | Arama (Revista da Armada 2008 s.132 + EN özetleri): filo 8/9 Temmuz 1541'de Massawa'dan ayrıldı; 10 Nisan için kaynak yok |
| 61 | 392 | 1755-11-02 | Pombal, Lizbon'un yeniden inşasını üstlendi | sahte-kesinlik | orta | Gün kaynaksız: ya 1755-11-01'e bağlı metinde anılmalı ya da yeniden inşa planının resmî tarihi (Eugénio dos Santos planı / 1758 alvarası — dogrulanmadi) kullanılmalı; aksi hâlde 1755-01-01 | Mevcut kaynak yalnız 'yeniden inşa planı, ızgara düzeni' diyor; 2 Kasım'ı destekleyen kaynak bulunamadı |
| 68 | 431 | 1808-03-07 | Rio de Janeiro, Portekiz İmparatorluğu'nun fiilî başkenti ol | metin-celiski | yuksek | Rio maddesinden liman açılışı cümlesi çıkarılmalı ya da 'Salvador'da açmış olduğu limanlar' diye düzeltilmeli | Arquivo Nacional (BR) Carta Régia 28 Jan 1808, Salvador'da düzenlendi |
| 73 | 456 | 1828-06-30 | Dom Miguel kendini mutlak kral ilan etti — Liberal Savaşlar  | tarih-yanlis | orta | t:1828-07-11 (Três Estados'un assento'su / aklamasyon; Cortes 23 Haziran 1828'de toplandı) · kaynak: "Library of Congress kaydı: 'assento dos… tres estados do reino de Portugal de 11 de julho de 1828' (A. da Silva Lopes  | loc.gov/item/37022418 çağdaş eser başlığı 11 Temmuz 1828 assento'sunu anar; 30 Haziran için kaynak bulunamadı |
| 78 | 485 | 1886-02-20 | 'Pembe Harita' — Angola-Mozambik kıtasal iddiası ilan edildi | tarih-yanlis | orta | t:1886-05-12 (Pembe Harita'nın ilk resmî eklendiği Portekiz-Fransa sözleşmesi, Paris) · kaynak: "Infopédia 'Mapa cor-de-rosa' · Assembleia Nacional Popular (Gine-Bissau), 'História da Guiné-Bissau'" | Infopédia/parlamento.gw: 12 Mayıs 1886 Portekiz-Fransa sözleşmesi, haritanın ilk resmî sürümü ekli |
| 84 | 515 | 1917-02-01 | Portekiz Seferi Kolordusu Batı Cephesi'ne gönderildi | tarih-yanlis | orta | t:1917-01-30 (1. Tugay Tejo'dan ayrıldı; Brest'e çıkış 2 Şubat 1917) · kaynak: "RTP Ensina, 'A primeira partida para França'" | RTP Ensina: 30 Ocak 1917'de üç İngiliz buharlısı 1. Tugayı taşıdı, 2 Şubat'ta Brest'te karaya çıktı |

`kaynak-zayif` (uygulanmayan): **12** madde — tam liste `denetim/KRONO-ATLANTIK-A-0929-bulgu-portekiz.json`.


## 3. KÜNYE ATFI — dosyanın tamamı tek künyeye bağlanıyor

🔴 `devlet:` alanı eski (`KRONOLOJI_<X>`) dosyada OKUNMAZ (BAGLAMA'nın M-5426 cevabı): tek çare bu maddeleri `kronoloji_cok_*.js`e TAŞIMAK. Taşıma bu paketin yetkisinde değil (şartname: eski dosyaya ekleme yok; taşıma = silme+ekleme). Hüküm koordinatörde; tablo hazır:

### Künye atfı — `KRONOLOJI_FRANSA`'nın `fransa-cumhuriyet`e ait 92 maddesi (t ≥ 1792-09-22)

Hepsi bugün `fransa` (987→1792-09-22) künyesine bağlanıyor. Önerilen `devlet:"fransa-cumhuriyet"`. İlk/son: i92 1792-09-22 … i183 1923-07-24. Dizinler: 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183

### Künye atfı — `KRONOLOJI_ISPANYA`'nın 1479-01-20 öncesi 7 maddesi

| i | t | başlık | önerilen künye |
|---|---|---|---|
| 0 | 1340-10-30 | Río Salado Savaşı — Merînî-Nasrî ittifakının kesin yenilgisi | kastilya + portekiz (+ granada, merini karşı taraf) |
| 1 | 1385-08-14 | Aljubarrota Savaşı — Portekiz bağımsızlığı Kastilya karşısında pekişti | portekiz + kastilya |
| 2 | 1391-06-04 | Sevilla'da başlayan toplu Yahudi katliamları bütün Kastilya'ya yayıldı | kastilya (Aragon'a da yayıldı → + aragon) |
| 3 | 1412-06-24 | Caspe Uzlaşması — Aragon tahtına Trastámara hanedanı geçti | aragon |
| 4 | 1469-10-19 | İsabel ile Fernando'nun evliliği — iki taç aynı hanedanda birleşti | kastilya + aragon |
| 5 | 1474-12-13 | İsabel, Kastilya kraliçesi ilan edildi | kastilya |
| 6 | 1478-11-01 | İspanyol Engizisyonu kuruldu | kastilya |


## 4. KAYNAK BORCU — bu paketin çözemediği, en büyük kusur

| dosya | ölçüm |
|---|---|
| `kronoloji_fransa.js` | **158/184** maddenin `kaynak:` alanı yalnız **"standart ders kitabı bilgisi"** (TDV 22 · diğer 4). CLAUDE.md §4: kaynak AÇIKÇA yazılır — bu ifade kaynak değildir |
| `kronoloji_ispanya.js` | ~72 madde adsız "standart akademik kaynak (Kamen)" ya da eser adı olmadan yazar; **12 madde Kamen'in *Spain 1469-1714*'ünü 1714 SONRASI olaylar** için anıyor (Trafalgar, Cádiz Anayasası…) — eserin kapsamı dışı |
| atlas kaydı dayanak | ispanya: Preveze [36], Tunus [49]/[70] `devletler.js`/`yerlesimler.js`/`savaslar.js`i kaynak gösteriyor (D207 ihlali); fransa: 5 madde |

Denetim ajanları 184 Fransa maddesinin 158'ini tek tek web kaynağıyla DOĞRULAMADI (genel bilgiyle tutarlı
buldu) — yani "tarih-yanlış 10" bir ALT sınırdır. Öneri: bu borç ayrı bir "kaynak takma" paketi ister
(madde başına adlı kaynak; ~250 madde). Bu paketin 30 düzeltmesi yalnız ölçülmüş kusurları kapattı.

## 5. Künyenin KENDİ kronolojisi eziliyor
Üç dosya da `derinKronolojiBindir`in `=` atamasıyla künyenin kendi maddelerini siliyor: fransa 3 · ispanya 5 ·
portekiz 4 (BAGLAMA'nın ezme listesinde var; çaresi app.js'te, BAGLAMA M-5417). Ek bulgu: `aragon` künyesinin
kendi "1282-01-01" Sicilya maddesi yer tutucu — gerçek gün 1282-08-30 (Pedro'nun Trapani çıkarması, GEC).

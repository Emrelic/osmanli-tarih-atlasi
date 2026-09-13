# FERHAT PAŞA 1590 · GÜNEY YARI (lat < 36,0°K) — ÖLÇÜM

```
OTURUM   FERHATPASA-GUNEY · 13 Eylül 2026 · koşu aktif → data/ DONUK, yalnız öneri
KAPSAM   Emre'nin poligonu ∩ lat < 36,0 : Şehrizor sınırı · Kirmanşah · Hemedan ·
         Nihavend · Burucird · Luristan · Huzistan · Basra ardı → Behbehan · İsfahan batısı
KARDEŞ   kuzey yarı  → denetim/*FERHATPASA-SEHIR-MATRISI*
         9 yer (Kasr-ı Şirin · Zencan · Sultaniye · Bicar · Merivan · Sakız · Bane ·
         Serdeşt · Mahabad) → denetim/*0047*   (burada yalnız "bkz.")
```

## ⓪ ÖNGÖRÜLER — ÖLÇÜMDEN ÖNCE yazıldı (D022)

Atlası ve kaynakları henüz OKUMADAN, hafızadan:

```
Ö1  Poligonun güney yarısında atlas noktası 25-45 arası.
Ö2  1590-03-21'de atlas: Şehrizor · Kirmanşah(?) · Hemedan · Nihavend · Luristan
    Osmanlı ya da tâbi; Huzistan (Dizful · Şuşter · Hüveyze) SAFEVÎ ya da Müşa'şa'
    (yarı-bağımsız, Safevî tâbisi). Osmanlı sayısı 5-12.
Ö3  Kaynak hükmü: Ferhat Paşa (İstanbul) 1590 ile Osmanlı'ya bırakılan güney
    bölgeleri = Şehrizor, Luristan (bir kısmı), Nihavend, Hemedan (1589 fethi).
    Kirmanşah için bağımsız kaynak BULUNAMAYACAK (tahmin: ≥%50).
    Huzistan'ın Osmanlı'ya geçtiğine dair kaynak YOK (Hüveyze Müşa'şa' Safevî tarafı).
Ö4  Kusur 2-6: en olası sınıflar ① Hemedan / Nihavend Osmanlı dönemi eksik ya da
    günü yanlış ② Luristan'ın (Hürremâbâd) 1590 statüsü tâbi yerine Safevî ya da
    tersi ③ 1603-1607 geri alışların günleri.
Ö5  1603-10-21 kesiti güney yarıda 1590 ile AYNI (Abbas'ın güney taarruzu
    Tebriz'den sonra — Hemedan/Nihavend 1603 sonrası). 1612-11-20'de hepsi Safevî
    (Şehrizor hariç).
Ö6  Kaynak gelenekleri arası anlaşmazlık en az 1: Nihavend kalesinin kuruluş/fetih
    yılı (1587 ↔ 1589) ya da Luristan'ın bağlılık biçimi.
MAZERET  Ö1 poligon sınırı yaklaşık çizildiği için ±5 kayabilir; Ö2'nin sayısı
         atlasın Kürt beylikleri için tâbi/doğrudan ayrımına bağlı.
```

---

## ⓪ KISA CEVAP — HEMEDAN (koordinatörün öncelik sorusu)

```
HEMEDAN    1590-1603 SAFEVÎ. Osmanlı 1588'de Hemedan valisini yendi ve vilayeti YAĞMALADI,
           ama şehri tutmadı. Şah 1590'da, 1595-96'da ve 1602-03'te Hemedan'a Safevî valisi
           atıyor (Monshi s.587 · 690 · 825). Antlaşma maddesinde Hemedan YOK (Kütükoğlu
           1962:195-196). Osmanlı beylerbeyilikleri Mihriban · Pelengân · Nihavend (Küpeli 2010).
           ⇒ atlas d:1590-03-21→1603-10-21 KUSUR (A1)
NİHÂVEND   OSMANLI — yalnız KALE, Hemedan vilayetinin "kalbinde". 1588 → 1603.
           ⇒ atlas başlangıcı antlaşma günü; kaynak 1588 (A4, şıklı)
ÇAPA KURALI  "Hemedan Osmanlı'daysa batısı Osmanlı" → ÖNCÜL TUTMUYOR. Kural 1593-1603 için
           kaynakla da ÇELİŞİYOR: Nihâvend kalesi Safevî topraklarıyla çevrili bir ADA
           ("Ottomans would march through their tribal territory … to the fort", Monshi s.824),
           ve Hemedan'ın batısındaki Luristan 1592/93'ten itibaren Safevî.
```
Ara not `main`e 15:5x'te SendMessage ile gönderildi.

## ① EVREN VE KESİT — atlas BUGÜN (`ARAC-FERHATPASA-GUNEY-KESIT-0913.py`)

Poligon köşeleri atlas noktalarından (İsfahan · Behbehan sabit — ad eşleşmesi "Isfahan"/"Behbehân" yazımıyla tutmadı, koordinatlar aynı).
**İç 32 · kenar (<~60 km dışarıda) 11 = 43.** Bunların 4'ü 0047'nin (bkz.), 4'ü pencerede yok (`kur:` 1636 · 1808 · 1812 · 1869) ⇒ **35 hüküm.**

```
                     85-06  90-03  00-06  03-10  12-11     atlas zinciri
Şehrizor·Kerkük·Halepçe·Tuz·Kifri·Hânekîn·Kût·Vâsıt·Tikrit·Sâmerrâ·Fellûce·Bağdat
                     OSM    OSM    OSM    OSM    OSM       d 1534/1554→1623
Ammâre·Kürne·Basra·Fâv·Abâdân   OSM hep                    d 1546→
Hemedan              saf    OSM    OSM    saf    saf       d 1590-03-21→1603-10-21
Kirmanşah            saf    OSM    OSM    saf    saf       aynı
Nihâvend             saf    OSM    OSM    saf    saf       aynı
Burûcird             saf    OSM    OSM    saf    saf       aynı + y:"antlasma"
Luristan             saf    OSM    OSM    saf    saf       aynı + y:"antlasma"
Sâve·Kum·Kâşân·Gulpâygân·Isfahan·Tahran·Dizfûl·Şüşter·Havîza·Ahvaz·Râmhürmüz·Behbehân·Zagros içi
                     saf hep
bkz. 0047            Bâne·Merîvan·Bîcâr·Kasr-ı Şîrîn  saf hep
```
📌 Beş Zagros kaydının beşi de **antlaşma gününde** başlıyor. Yani atlas bir fetih değil bir **hukukî metin** boyamış, ve metnin saymadığı Hemedan ile Burûcird'i de içine katmış.

## ② KAYNAKLAR — ne okundu, hangi gelenek

| kaynak | gelenek | tür | nasıl okundu | ne verdi |
|---|---|---|---|---|
| Eskandar Beg Monshi, *History of Shah ʿAbbas*, tr. Savory (1978) | **IR** birincil (EN çeviri) | kronik | archive.org djvu metni, 3,3 M karakter, `ARAC-…-METINARA` + `ARALIK` | s.580-587 · 593 · 643-645 · 675-677 · 690 · 824-826 · 840 · 851-852 |
| Iranica NEHĀVAND · ATĀBAKĀN-E LORESTĀN · IRAQ iv · SAFAVID DYNASTY · CHRONOLOGY 1 · ʿABBĀS I · KALHOR · HAMADĀN iii | **EN** | ansiklopedi | `ARAC-KITA29-IRANICAPASAJ` | Nihâvend 998/1589-1602/03 · Şâhverdî · "Šahrazur to the Ottomans" · Hûzistan sınırı tanımsız |
| TDV `nihavend--iran` · `hemedan` · `luristan` · `huzistan` · `kirmansah` · `murad-iii` · `safeviler` · `abbas-i` · `sehrizor` · `basra` · `ferhad-pasa` · `cigalazade-sinan-pasa` | **TR** | ansiklopedi | `ARAC-KITA13-TDVPASAJ` | 1588 kale · "Hemedan civarı" · Luristan 1590→1603 · Hûzistan Safevî |
| Kütükoğlu 1962 s.195-196 (antlaşma maddeleri), **aktaran** Efe & Kızıl, dergipark 318610 | **TR** | hakemli (ikincil aktarım) | pypdf | madde listesi — Hemedan YOK |
| Küpeli 2010, *History Studies* Ortadoğu özel sayısı s.227-244 | **TR** | hakemli | pypdf (18 s., metinsiz 0) | Mihriban · Pelengân · Nihavend beylerbeylikleri · Şehrizor/Hüveyze kaybı · 1639 sınırnamesi |
| Heper & Öntuğ 2022, *Karadeniz Araştırmaları* 73 | **TR** | hakemli | pypdf | 1590: "Luristan ve Şehrizor" |
| Matthee 2018 (çev. Külbilge), *Cihannüma* IV/2 | **EN→TR** | hakemli | pypdf, 26 s. | Hemedan/Nihâvend/Kirmanşah **0 eşleşme** (1578-90 savaşının SEBEPLERİ üzerine) |
| *Tarihin Peşinde* 21, M21_11 | TR | dergi | pypdf, 14 s. | 0 eşleşme |
| TDV `nihavend` (302 ÖLÜ) · `burucird` · `huveyze` · `sustar` · `behbehan` · `hurremabad` · `zuhab` · `erdelan` · `kasr-i-sirin` (302) | — | — | HTTP kodu | slug ölü; canlı karşılıklar: `nihavend--iran` · `tuster` · `huzistan` |
| Iranica `farhad-pasha` · `lorestan` · `nahavand` · `mosasa` · `hoveyza` · `shushtar` · `kermanshah-ii`… | — | — | 404 | slug YOK — NEHĀVAND madde adı `nehavand` |

🔴 **OKUMADIM:** Bacqué-Grammont (FR) · Röhrborn, *Provinzen und Zentralgewalt Persiens* (DE — yalnız künye bulundu, metin erişilemedi) · Petrushevsky (RU) · *Cambridge History of Iran* c.6 · Kütükoğlu 1962/1993'ün KENDİSİ (atıflar makaleler üzerinden) · Türk Dünyası Ansiklopedisi "Hemedân" (WebFetch gövdeyi getiremedi — **ölçülemedi**) · Ermeni/Gürcü/Azerbaycan kaynakları (güney yarıyla ilgisiz).
🔴 **KULLANILMADI (§4 kırmızı):** arama motoru YZ özetleri — biri "late 1587 … captured the city of Hemedan" dedi; dayanağı okunamayan bir sayfa ve Monshi'nin "pillaged … before retiring" cümlesine ters. Vikipedi yalnız Iranica adresini buldurdu.

## ③ HÜKÜM TABLOSU — 35 yer (1590-03-21 · 1603-10-21 · 1612-11-20)

`K` = kaynakta ADIYLA (1588-1604 bağlamı) · `Ö` = örtülü (Emre'nin enklav kuralı / Safevî iç bölge) · gelenek: TR / IR / EN

| yer | 1590-03-21 | 1603-10-21 | 1612-11-20 | K/Ö | gelenek | atlas | not |
|---|---|---|---|---|---|---|---|
| **Hemedan** | **SAFEVÎ** | SAFEVÎ | SAFEVÎ | K | IR·EN·TR | 🔴 OSM | **A1** |
| **Nihâvend** | OSMANLI (kale, 1588'den) | SAFEVÎ (1603 ortası) | SAFEVÎ | K | TR·IR·EN | 🟡 başı 1590 | **A4** şıklı |
| **Burûcird** | SAFEVÎ? (kaynak 1593'te Safevî) | SAFEVÎ | SAFEVÎ | K (1593) | IR | 🔴 OSM | **A2** şıklı |
| **Luristan** (Hürremâbâd) | OSMANLI **tâbi** | SAFEVÎ (1592/93'ten) | SAFEVÎ | K | IR·EN·TR (**çelişki**) | 🔴 1592-1603 OSM | **A3** şıklı |
| Kirmanşah | OSMANLI (tâbi?) | OSM→SAF (1603 sonu-1604) | SAFEVÎ | Ö (Kalhor dolaylı) | IR | ✓ | C2 |
| Şehrizor | OSMANLI | OSMANLI | **Safevî işgali?** | K | TR·EN | ✓ / ⚪ 1612 | ek bulgu |
| Kerkük | OSMANLI | OSMANLI | OSMANLI? | K ("Şehrizor (Kerkük)") | TR | ✓ | |
| Halepçe | OSMANLI | OSMANLI | **Safevî işgali?** | Ö | TR | ✓ / ⚪ 1612 | ek bulgu |
| Tuz Hurmatu · Kifri · Hânekîn | OSMANLI | OSMANLI | OSMANLI | Ö | — | ✓ | |
| Bağdat | OSMANLI | OSMANLI | OSMANLI | K | IR·TR | ✓ | Uzun Ahmed 1603-04 celâlî |
| Kût · Vâsıt · Tikrit · Sâmerrâ · Fellûce | OSMANLI | OSMANLI | OSMANLI | Ö | — | ✓ | |
| Basra | OSMANLI (Efrâsiyâb, yarı-bağımsız) | OSMANLI | OSMANLI | K (TDV basra [381]) | TR | ✓ | |
| Ammâre · Kürne · Fâv | OSMANLI | OSMANLI | OSMANLI | Ö | — | ✓ | |
| **Abâdân** | ⚪ BULUNAMADI | ⚪ | ⚪ | — | TR (1837 dolaylı) | ⚪ | C4 |
| Dizfûl · Şüşter | SAFEVÎ | SAFEVÎ | SAFEVÎ | K | IR·TR | ✓ | |
| Havîza | SAFEVÎ tâbisi (Müşa'şa') | SAFEVÎ tâbisi | SAFEVÎ tâbisi (**TR: Hüveyze elden çıktı**) | K | IR·EN·TR | ✓ (tür nüansı) | çelişki ② |
| Râmhürmüz | SAFEVÎ | SAFEVÎ | SAFEVÎ | K (Monshi 1005/1596-97) | IR | ✓ | |
| Kum · Kâşân · Isfahan | SAFEVÎ | SAFEVÎ | SAFEVÎ | K | IR | ✓ | |
| Sâve · Gulpâygân · Tahran · Ahvaz · Behbehân · Zagros içi | SAFEVÎ | SAFEVÎ | SAFEVÎ | Ö-Safevî iç | — | ✓ | |
| Bâne · Merîvan · Bîcâr · Kasr-ı Şîrîn | **bkz. 0047** | | | | | | ⚠️ Kasr-ı Şîrîn notu §⑦ |
| Senendec · Erâk · Nâsıriye · Muhammere | pencerede yok | | | | | | |

**SAYILAR (35):** atlas doğru **30** (16 Osmanlı · 13 Safevî · Kirmanşah örtülü) · **kusur 4** (Hemedan · Burûcird · Luristan · Nihâvend başlangıcı) · **belirsiz 1** (Abâdân) ·
örtülü: Osmanlı **13** (Halepçe · Tuz · Kifri · Hânekîn · Kût · Vâsıt · Tikrit · Sâmerrâ · Fellûce · Ammâre · Kürne · Fâv · Kirmanşah) + Safevî iç **6**.
Pencere dışı ek: 1612'de Şehrizor · Halepçe ⚪ (Küpeli; gün ve yıl yok).

## ④ KUSUR LİSTESİ → `YAMA-FERHATPASA-GUNEY-0913.json`

```
A1  Hemedan    d 1590-03-21→1603-10-21 SİL                        Monshi s.587·690·825 · Iranica NEHĀVAND · TDV hemedan · Kütükoğlu listesi
A2  Burûcird   a) SİL   b) t→1593-01-01                            Monshi s.643-644
A3  Luristan   a) t→1592-01-01   b) t→1593-01-01                   Monshi s.643-644 · Iranica ATĀBAKĀN ↔ TDV luristan "1603"
A4  Nihâvend   a) f→1588-01-01   b) dokunma                        TDV nihavend--iran "996 (1588) sonları" · Monshi 997/1588-89 ↔ Iranica 1589
    bitiş 1603-10-21: DOKUNMA — yıl doğru, gün kaynaksız; 1603-01-01 Nevruz 1603'ten önceye düşer, kaynağa ters
```

## ⑤ BENZETİM — yamalar bellekte (`ARAC-FERHATPASA-GUNEY-BENZETIM-0913.py A|B`)

```
                    A (öneri)                         B
Değişmez 1          4 kayıt × 1580-1620 günlük: 0     3 kayıt: 0
dönem sağlığı       ✓                                 ✓
Değişmez 2          1592-01-01 ✓ (0 gün) İLGİSİZ      1593-01-01 🔴 AÇIK (181 gün)
                    1588-01-01 ✓ İLGİSİZ              —
1592-06-15 kesiti   Luristan saf · Nihâvend OSM ADA   Luristan OSM
```
🔴 **ALET KUSURU, ÖLÇÜLDÜ:** bölüm 3 "yeni kırılma günü"nü `yeni − eski` küme farkıyla buluyor. `1588-01-01` günü başka bir kayıtta ZATEN kırılma olduğu için **listelenmedi.** Günü elle sınadım: en yakın madde aynı gün, konusu *"Hünernâme'nin II. cildinin tamamlanması"*. `1592-01-01`de de aynı durum var: *"Dâvud Ağa'nın hassa mimarbaşı olması"*. İkisi de Değişmez 2'yi **teknik olarak geçiyor ama ilgisiz** (`§11` D006 · D147). Bu yüzden JSON'da `madde_istekleri_degismez2` bölümüne iki madde isteği yazdım.

## ⑥ SINIR HATTI — güney yarı (`ARAC-FERHATPASA-GUNEY-HAT-0913.py`)

Düğüm = (Osmanlı atlas noktası | Safevî atlas noktası) **orta noktası**. Koordinat uydurulmadı. **Hattın batısı/güneybatısı Osmanlı.**

```
1590-03-21                              1593-06-15 (Luristan Safevî)
 1 Şehrizor|Bâne        35.775 45.655    1 Şehrizor|Bâne        35.775 45.655
 2 Halepçe|Merîvan      35.350 46.082    2 Halepçe|Merîvan      35.350 46.082
 3 Kirmanşah|Bîcâr      35.093 47.335    3 Kirmanşah|Bîcâr      35.093 47.335
 4 Kirmanşah|Hemedan    34.556 47.790    4 Kirmanşah|Hemedan    34.556 47.790
 5 Nihâvend|Hemedan     34.495 48.446    5 Kirmanşah|Luristan   33.901 47.710
 6 Nihâvend|Burûcird    34.044 48.564    6 Kût|Luristan         33.000 47.087
 7 Luristan|Burûcird    33.692 48.554    7 Kût|Dizfûl           32.448 47.110
 8 Luristan|Dizfûl      32.935 48.379    8 Ammâre|Havîza        31.646 47.610
 9 Kût|Dizfûl           32.448 47.110    9 Kürne|Havîza         31.234 47.759
10 Ammâre|Havîza        31.646 47.610   10 Basra|Ahvaz          30.914 48.226
11 Kürne|Havîza         31.234 47.759   11 Fâv|Abâdân           30.158 48.388
12 Basra|Ahvaz          30.914 48.226   + OSMANLI ADASI Nihâvend 34.191 48.377 (1593-1603)
13 Fâv|Abâdân           30.158 48.388
```
⚠️ Düğüm 1-3'ün Safevî tarafı 0047'ye bağlı. Düğüm 3 Ardalan/Pelengân'ın yanından geçiyor ve orada atlas noktası yok. Küpeli'ye göre Pelengân **Osmanlı beylerbeyiliği**ydi. Düğüm 13'ün doğusu (Abâdân) belirsiz. Iranica IRAQ iv [120]: *"exact borders … in Khuzestan remained undefined"*. Yani Hûzistan kesimi kaynakta da **çizgi değil, kuşak.**

## ⑦ GELENEKLER ARASI ANLAŞMAZLIKLAR

```
① LURİSTAN BİTİŞİ   TR  TDV luristan: "Abbas … tam olarak bağladı (1603)"
                    EN  Iranica SAFAVIDS [288]: 1601-03 bağlamında "chasing the Ottomans out of … Lorestān"
                    IR  Monshi s.643-644: 1000/1591-92 bağlılık · 1002/1593-94 Hürremâbâd işgali
                    EN  Iranica ATĀBAKĀN: Şâhverdî Bağdat'a kaçtı, 1594-95 iade, 1597-98 idam
                    ⇒ 2'ye 2 GÖRÜNÜYOR ama "1603" iddiaları TARİHSİZ bağlamda, Monshi YILLI.
                      Olası uzlaşma: 1603'teki "Luristan", Luristan SINIRINDAKİ Nihâvend kalesi
                      (Monshi s.583 "on the borders of Lorestān"). ÇIKARIM — ölçülmedi.
② HÜVEYZE           TR  Küpeli s.232: Uzun Ahmed'in ölümüyle "Şehrizor ve Hüveyze'nin elden çıkması"
                        ⇒ 1603'e kadar Osmanlı tarafında demek
                    IR  Monshi s.675-677 (1004/1595-96): Seyyid Mübârek Safevî'ye biat etti, vali
                    ⇒ Müşa'şa' iki tarafa da oynuyor (Monshi s.699 aynı şeyi söylüyor).
                      Atlas safevi — tür nüansı, KUSUR SAYILMADI
③ NİHÂVEND BAŞI     TR TDV + IR Monshi 1588(-89) ↔ EN Iranica 998/1589 (Iranica Monshi'ye dayanıyor,
                    yılı kaydırmış görünüyor)
④ ANTLAŞMA LİSTESİ  TR Kütükoğlu maddeleri: Nihavend · Luristan · Şehrizor (Hemedan, Kirmanşah, Huzistan YOK)
                    TR Bilge 2005 (aktaran Efe & Kızıl): "+ Ardelan · Kirmanşah · Huzistan"
                    ⇒ AYNI GELENEK İÇİNDE ŞİŞME. Huzistan'ı TDV huzistan [75] ve Monshi çürütüyor
⑤ HEMEDAN ŞEHRİ     arama motoru özeti: "1587 sonu şehri ele geçirdi" (dayanağı OKUNAMADI) ↔
                    Monshi "pillaged … before retiring" + Safevî valileri ⇒ kaynak değil, KAYDEDİLDİ
```
**0047 için not:** Kasr-ı Şîrîn (34.52/45.58) bu hattın **Osmanlı tarafında** kalıyor. Monshi s.840 ve s.851'e göre Zohāb–Zanjir kuşağındaki Kalhor beyleri 1604'e kadar Bağdat'a bağlıydı. Atlas ise orayı safevi gösteriyor.
**Kuzey yarı için not:** SEHIR-MATRISI raporundaki Ö9 *"Hemedan için kaynaklar Osmanlı der"* öngörüsü, bu ölçüme göre ÇÜRÜYOR.

## ⑧ EMRE'NİN ÇAPA KURALI — güney yarıda sınandı

```
Kural     "Bicar, Hemedan, Sultaniye Osmanlı'da kaldıysa batısındaki tüm topraklar Osmanlı"
Öncül     Hemedan 1590-1603 SAFEVÎ ⇒ bu çapadan kural İŞLETİLEMEZ
Enklav    "enklav olamaz" varsayımı KAYNAKLA ÇELİŞİYOR: 1593-1603 Nihâvend kalesi Safevî
          toprağıyla çevrili Osmanlı adası (Monshi s.824, açıkça)
Batıda Safevî   Hemedan boylamının (48,52°D) batısında Safevî kalan, kaynaklı yerler:
          Luristan/Hürremâbâd 48,36 (1592/93'ten) · Dizfûl 48,40 · Havîza 48,08 (1590'da da)
⇒ Güney yarı için doğru çapa HEMEDAN değil NİHÂVEND KALESİ + LURİSTAN (1590) — ve 1593'ten
  sonra Kirmanşah/Kalhor kuşağı. Enklav kuralı Kirmanşah için kullanıldı (örtülü), Nihâvend
  için kullanılamaz.
```

## ⑨ ÖNGÖRÜ KARNESİ

| # | öngörü | ölçüm | hüküm |
|---|---|---|---|
| Ö1 | nokta 25-45 | iç 32 (+11 kenar) | 🟢 TUTTU |
| Ö2 | 1590 atlas Osmanlı 5-12; Hûzistan Safevî | Osmanlı **15** (iç); Hûzistan safevi ✓ | 🟡 YARIM (sayı çürüdü) |
| Ö3 | kaynak: Hemedan Osmanlı'ya bırakıldı · Kirmanşah kaynaksız · Hûzistan için Osmanlı kaynağı yok | Hemedan **SAFEVÎ** · Kirmanşah yalnız dolaylı ✓ · Hûzistan: Bilge 2005 listesi ve Küpeli (Hüveyze) Osmanlı tarafı diyor | 🔴 ÇÜRÜDÜ (en önemli kalemde) |
| Ö4 | kusur 2-6; sınıf ① Hemedan/Nihâvend ② Luristan ③ 1603-07 günleri | 4 · ① ✓ ② ✓ ③ ✗ | 🟡 YARIM |
| Ö5 | 1603-10-21 kesiti 1590 ile aynı; 1612'de Şehrizor hariç hepsi Safevî | Nihâvend 1603 ortası, Luristan 1592/93 düştü ⇒ **aynı değil**; 1612'de Şehrizor da Safevî işgalinde olabilir | 🔴 ÇÜRÜDÜ |
| Ö6 | ≥1 gelenekler arası çelişki | 5 (§⑦) | 🟢 TUTTU |

📌 Çürüyen Ö3 şunu gösteriyor: hafıza, fetih seferinin YOLU ile TASARRUFU aynı şey sanmıştı ("Hemedan seferi" = "Hemedan Osmanlı"). Atlas da aynı yanlışı yapmış: Burûcird ve Hemedan'ı antlaşma gününde boyamış.

## ⑩ NE ÖLÇEMEDİM (D107)

```
BULUNAMADI   Abâdân'ın 1590 sahibi · Burûcird'in 1590-92 sahibi · Nihâvend kalesinin düşüş GÜNÜ ·
             Kirmanşah ŞEHRİNİN adıyla 1590 kaydı · Şehrizor'un 1604-1619 düşüş/dönüş yılı ·
             "Mihriban" beylerbeyiliğinin yeri (Küpeli 1639 sınırnamesinde Şehrizor'da bir kale)
ÖLÇÜLEMEDİ   Türk Dünyası Ansiklopedisi "Hemedân" (gövde gelmedi) · Pelengân'ın koordinatı
             (atlasta nokta yok, UYDURULMADI)
OKUMADIM     Kütükoğlu 1962/1993 · Röhrborn · Bacqué-Grammont · Petrushevsky · Cambridge Hist.
             Iran 6 · Monshi'nin Farsça aslı · BOA tahrir/mühimme · Iranica LORESTAN/KERMANSHAH
             tarih maddeleri (slug bulunamadı, 404)
```

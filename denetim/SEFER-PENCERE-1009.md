# SEFER-PENCERE-1009 — sefer okunun görünürlük penceresi (ÖLÇÜM; karar: şimdilik B)

Oturum: SEFER-PENCERE-1009 (UMIT) · görevi veren UMIT İRTİBAT · ağaç `C:\atlas-pencere` = `origin/main` `5921a031` · diff YOK, sınav YOK (UMIT İRTİBAT kararı: B — dokunma; A koordinatöre/Emre'ye gidiyor).

Tetikleyen: `d85-kefe-donanma-1454` (`t:"1454-07-14"`) ok 1454-06-01'den bir sonraki maddeye (1455) kadar görünüyor.

## 1. KURAL (ölçüldü — `js/app.js:6069-6094`, origin/main 5921a031)

```
aktif = m._fiKirpik <= t && t < m._tiKirpik
_tiKirpik = t'den SONRAKİ ilk olay (olaylar dizisi); sonraki olay yoksa m.ti
```
Sabit bir gün payı YOK; pay kronolojiden türüyor. Yorum birebir: *"VE SONU DA ÇAPASINA KIRPILIR — yukarıdaki kuralın ÖTEKİ UCU. Ok, `t`sinden SONRAKİ İLK OLAYA kadar görünür; o olaya gelince düşer. Sayı uydurulmuyor, KRONOLOJİDEN türüyor"* (son — 24 Ağustos).

## 2. GEREKÇE

- Commit `82aa96e8` (24 Ağustos 2026). Önceden `_tiKirpik = m.ti` ve `t < ti` yüzünden ok **kendi `t` maddesinde kayboluyordu**; uzatma "ok kendi maddesinde görünsün, bir sonraki maddede düşsün" için yapıldı (başlangıç ucundaki 23 Ağustos kırpmasının simetriği).
- Kara seferi dönüş yolu gibi başka bir gerekçe BULUNAMADI. Tasarım "📜 Olay olay" kipine göre düşünülmüş; "⏱ Zaman akışı" kipini anan bir karar/ders bulunamadı.

## 3. ETKİ — headless Chrome, gerçek index.html, app.js'in kendi `seferGuncelle`'si

- Ok: **131** · kronoloji maddesi (`olaylar`, panel sayacıyla aynı dizi): **1795**
- `t`'yi aşan ok: **126 / 131** · fazla gün ortanca **36** · en büyük **943**
- 🔴 `t` ile düştüğü gün arasında panelde madde olan ok: **0 / 131**
  ⇒ **"Olay olay" kipinde fark SIFIR**: her madde adımında ok bugün de yalnız kendi maddesine kadar görünüyor. Fark yalnız "Zaman akışı" kipinde (ay/sn · 6 ay/sn · 2 yıl/sn · 10 yıl/sn) ve zaman çubuğu kaydırılırken görünür.
- ⚠️ Kefe kaydı bu ölçümde YOK: `2669c14c` (DENIZ-OKU) ve `831d7fe7` (SEFER-OKU) yalnız `origin/makine/umit`te, origin/main'de değil (UMIT İRTİBAT düzeltti).

### `t`'yi aşan oklar — fazla gün sırasıyla (ADIYLA)

| fazla gün | ok | tür | kademe | t | düştüğü gün (sonraki madde) |
|---:|---|---|:-:|---|---|
| 943 | Katalan Kumpanyası'nın Anadolu seferi (1303-1305) | sefer |  | 1305-06-01 | 1308-01-01 |
| 790 | Osmanlı'nın Çukurova seferi (1485) — Adana ve Tarsus'un alınışı | sefer |  | 1485-11-01 | 1488-01-01 |
| 692 | Prut seferi (1711) | sefer |  | 1711-08-01 | 1713-06-24 |
| 540 | Varna Haçlı seferi (1444) | sefer |  | 1444-11-10 | 1446-05-05 |
| 540 | Varna seferi (1444) | sefer |  | 1444-11-10 | 1446-05-05 |
| 507 | Otlukbeli seferi (1473) | sefer |  | 1473-08-11 | 1475-01-01 |
| 486 | Savoy Haçlı seferi (1366) — Gelibolu'nun kaybı | deniz |  | 1366-09-01 | 1368-01-01 |
| 437 | Girit harekâtı (1645) | deniz |  | 1645-09-01 | 1646-11-13 |
| 400 | Eğri-Haçova seferi (1596) | sefer |  | 1596-11-26 | 1598-01-01 |
| 400 | Dolgorukov ordusunun Orkapı'dan Kefe'ye yürüyüşü — Kırım'ın istilâsı (1771) | sefer |  | 1771-07-01 | 1772-08-05 |
| 389 | Şçerbatov kolunun Arabat'tan Kerç, Yenikale ve Taman'a yürüyüşü (1771) | sefer |  | 1771-07-12 | 1772-08-05 |
| 333 | Memlük ordusunun karşı taarruzu (1488-1490) — Ağaçayırı ve Kayseri kuşatması | kusatma |  | 1490-06-01 | 1491-05-01 |
| 289 | Golitsın'ın Hotin seferi — Podolya'dan Dinyester'e (1769) | sefer |  | 1769-09-19 | 1770-07-06 |
| 271 | Elmpt kolunun Hotin'den Yaş'a yürüyüşü (1769) | sefer |  | 1769-10-07 | 1770-07-06 |
| 259 | Panin'in Bender'den Akkirman'a harekâtı (1770) | sefer |  | 1770-10-09 | 1771-06-26 |
| 242 | Necid seferi (1816-18) | sefer |  | 1818-09-09 | 1819-05-10 |
| 241 | Niğbolu seferi (1396) | sefer |  | 1396-11-01 | 1397-07-01 |
| 230 | Savcı Bey isyanı (1373) | isyan |  | 1373-05-15 | 1374-01-01 |
| 222 | Hotin seferi (1621) — II. Osman | kusatma |  | 1621-10-09 | 1622-05-20 |
| 204 | Pelekanon (Maltepe) seferi (1329) | sefer |  | 1329-06-10 | 1330-01-01 |
| 200 | Uzun Sefer (1443) — Niş-Sofya-İzladi seferi | sefer |  | 1443-11-24 | 1444-06-12 |
| 192 | Mora çıkarması (1825) | deniz |  | 1825-06-22 | 1826-01-01 |
| 172 | Rodos seferi (1522) | kusatma |  | 1523-01-05 | 1523-06-27 |
| 168 | Sadrazam Yûsuf Ziyâ Paşa ordusunun El-Ariş'ten Hanka'ya (Heliopolis) ilerleyişi (1800) | sefer |  | 1800-03-20 | 1800-09-05 |
| 158 | Viyana seferi (1529) | kusatma |  | 1529-10-16 | 1530-03-24 |
| 152 | Kosova seferi (1389) | sefer |  | 1389-08-01 | 1390-01-01 |
| 151 | Rusların Silistre'yi boşaltması (1836) | tahliye |  | 1836-01-01 | 1836-06-01 |
| 148 | Şahkulu yayılıyor | isyan |  | 1512-08-05 | 1513-01-01 |
| 131 | Edirne Vak'ası — âsilerin İstanbul'dan Edirne'ye yürüyüşü (1703) | isyan |  | 1703-08-22 | 1704-01-01 |
| 124 | Müttefik donanmasının Navarin'e gelişi (1827) | deniz |  | 1827-10-20 | 1828-02-22 |
| 121 | Timur'un Sivas seferi (1400) | kusatma |  | 1400-09-01 | 1401-01-01 |
| 116 | II. Murad'ın İstanbul kuşatması (1422) | kusatma |  | 1422-09-06 | 1423-01-01 |
| 114 | Suriye harekâtı (1831-32) | sefer | ✓ | 1832-07-29 | 1832-11-21 |
| 111 | İstanbul seferi (1453) | sefer |  | 1453-06-29 | 1453-10-19 |
| 98 | Tosun Paşa'nın Hicaz seferi (1811-13) | sefer |  | 1813-01-23 | 1813-05-02 |
| 93 | Mohaç seferi (1526) | sefer |  | 1526-09-29 | 1527-01-01 |
| 91 | Zigetvar seferi (1566) | kusatma |  | 1566-10-01 | 1567-01-01 |
| 90 | Otranto çıkarması (1480) | deniz |  | 1481-02-01 | 1481-05-03 |
| 87 | Mısır kuvvetlerinin Mora'dan Girit'e çekilişi (1828) | tahliye |  | 1828-10-05 | 1829-01-01 |
| 87 | Mısır ordusunun Suriye ve Çukurova'dan çekilişi (1841) | tahliye |  | 1841-02-25 | 1841-05-24 |
| 86 | Vehhâbîlerin Kerbelâ baskını (1801) | akin |  | 1801-04-01 | 1801-06-27 |
| 77 | Rus ordusunun Yeşilköy'e gelişi (1878) | sefer |  | 1878-03-03 | 1878-05-20 |
| 75 | Turahan Bey'in Mora seferi (1423) — Hexamilion'un yıkılışı | akin |  | 1423-06-30 | 1423-09-14 |
| 73 | Koca Sinan Paşa'nın Eflak seferi (1595) | sefer |  | 1595-10-19 | 1596-01-01 |
| 71 | Belgrad kuşatması (1440) | kusatma |  | 1440-10-21 | 1441-01-01 |
| 68 | Sinan Paşa'nın Eflak'tan çekilişi — Yergöğü köprüsü (1595) | cekilme |  | 1595-10-24 | 1596-01-01 |
| 64 | Preveze harekâtı (1538) | deniz |  | 1538-10-28 | 1539-01-01 |
| 61 | Kırım harekâtı (1475) | sefer |  | 1475-12-01 | 1476-02-01 |
| 61 | Napolyon'un Suriye seferi — Akkâ'ya yürüyüş (1799) | sefer |  | 1799-03-19 | 1799-05-20 |
| 61 | Napolyon'un Suriye seferi (1799) — Akkâ kuşatması | sefer |  | 1799-03-19 | 1799-05-20 |
| 60 | Özdemiroğlu'nun Tebriz seferi (1585) | sefer |  | 1585-11-01 | 1586-01-01 |
| 57 | Girit İsyanı'nın başlaması (1866) | isyan |  | 1866-08-21 | 1866-10-18 |
| 56 | Mihelson ordusunun Yaş'tan Bükreş'e ilerleyişi (1806) | sefer |  | 1806-12-25 | 1807-02-20 |
| 56 | Vehhâbîlerin Kerbelâ baskını (1801) | akin |  | 1801-05-01 | 1801-06-27 |
| 50 | Belgrad garnizonunun çekilmesi (1867) | cekilme |  | 1867-04-18 | 1867-06-08 |
| 49 | Rus kolunun İzyum'dan Azak'a yürüyüşü (1736) | sefer |  | 1736-07-13 | 1736-09-01 |
| 47 | Arnavutluk İsyanı (1910) | isyan |  | 1910-04-01 | 1910-05-19 |
| 44 | Yûsuf Ziyâ Paşa'nın Hanka'dan Kahire'ye girişi — Fransız işgalinin sonu (1801) | sefer |  | 1801-07-17 | 1801-08-31 |
| 40 | Napolyon'un Akkâ'dan Kahire'ye çekilişi (1799) | cekilme |  | 1799-06-14 | 1799-07-25 |
| 40 | Napolyon'un Akkâ'dan çekilişi (1799) | cekilme |  | 1799-06-14 | 1799-07-25 |
| 38 | I. Petro'nun II. Azak seferi — Voronej'den Don aşağı (1696) | sefer |  | 1696-07-19 | 1696-08-27 |
| 38 | Rus donanmasının Büyükdere'ye gelişi (1833) | deniz |  | 1833-02-20 | 1833-03-31 |
| 37 | Yavuz'un Tebriz'den Amasya'ya dönüşü (1514) | cekilme |  | 1514-11-24 | 1515-01-01 |
| 35 | Mısır seferi (1516-17) | sefer |  | 1517-02-22 | 1517-03-30 |
| 35 | Kıbrıs harekâtı (1570) | deniz |  | 1571-09-01 | 1571-10-07 |
| 34 | Müttefik donanma harekâtı (1840) | deniz |  | 1840-11-27 | 1841-01-01 |
| 34 | Münnich'in Bahçesaray'dan Orkapı'ya dönüşü (1736) | cekilme |  | 1736-07-28 | 1736-09-01 |
| 33 | Akkâ kuşatması sırasında Fransız kollarının Nâsıra ve Tabor dağına harekâtı (1799) | sefer |  | 1799-04-16 | 1799-05-20 |
| 31 | Vehhâbîlerin Medine'yi kuşatıp işgali (1805) | kusatma |  | 1805-06-01 | 1805-07-03 |
| 30 | Nâdir Şah'ın Musul'dan çekilişi (1743) | cekilme |  | 1743-12-01 | 1744-01-01 |
| 30 | Timur'un Anadolu'dan çekilişi (1403) | cekilme |  | 1403-08-01 | 1403-09-01 |
| 30 | Eflak İsyanı — İpsilanti'nin Boğdan'a geçişi (1821) | isyan |  | 1821-02-22 | 1821-03-25 |
| 28 | Napolyon'un İbrahim Bey'i Salihiye'ye kadar kovalaması (1798) | sefer |  | 1798-08-11 | 1798-09-09 |
| 26 | Sudan seferi (1820-21) | sefer |  | 1821-08-19 | 1821-09-15 |
| 25 | Viyana seferi (1683) | kusatma |  | 1683-09-13 | 1683-10-09 |
| 24 | Vehhâbîlerin Mekke kuşatması ve şehrin teslimi (1805-06) | kusatma |  | 1806-01-01 | 1806-01-26 |
| 24 | Rus filosunun Baltık'tan Çeşme'ye yolu (1769-70) | deniz |  | 1770-07-07 | 1770-08-01 |
| 24 | Rus donanmasının takibi ve Çeşme baskını (1770) | deniz |  | 1770-07-07 | 1770-08-01 |
| 24 | İngiliz donanmasının Çanakkale'den İstanbul önlerine gelişi (1807) | deniz |  | 1807-02-20 | 1807-03-17 |
| 23 | Hicaz seferinin piyade kolu: Süveyş'ten Yenbu'ya deniz yolu (1811) | deniz |  | 1811-10-01 | 1811-10-25 |
| 22 | Büyük Taarruz (1922) | sefer |  | 1922-09-18 | 1922-10-11 |
| 22 | Abdülaziz'in Avrupa seyahati (1867) | seyahat |  | 1867-08-07 | 1867-08-30 |
| 22 | General Diebitsch'in Silistre'den Edirne'ye ilerleyişi (1829) | sefer |  | 1829-08-22 | 1829-09-14 |
| 21 | Rus ordusunun Kişinev'den Zimniça'ya ilerleyişi (1877) | sefer |  | 1877-06-27 | 1877-07-19 |
| 19 | Fransız filosunun Toulon'dan Malta üzerinden İskenderiye'ye yolu (1798) | deniz |  | 1798-07-01 | 1798-07-21 |
| 19 | Birinci Kanal Harekâtı — Birüssebi'den Süveyş Kanalı'na (1915) | sefer |  | 1915-02-03 | 1915-02-23 |
| 18 | Bağdat seferi (1638) | kusatma |  | 1639-01-01 | 1639-01-20 |
| 18 | Potemkin'in Olviopol'den Bender'e harekâtı (1789) | sefer |  | 1789-11-14 | 1789-12-03 |
| 18 | Suvorov ve Coburg'un Fokşani'den Rimnik'e harekâtı (1789) | sefer |  | 1789-09-22 | 1789-10-11 |
| 17 | Anadolu ilerleyişi (1832-33) | sefer | ✓ | 1833-02-02 | 1833-02-20 |
| 17 | Nâdir Şah'ın Kerkük ve Erbil üzerinden Musul'a yürüyüşü (1743) | kusatma |  | 1743-10-05 | 1743-10-23 |
| 16 | Irakeyn (Tebriz-Bağdat) seferi (1534-35) | sefer |  | 1535-01-01 | 1535-01-18 |
| 16 | Desaix'nin Yukarı Mısır seferi — Kahire'den Asvan'a (1798-99) | sefer |  | 1799-02-01 | 1799-02-18 |
| 15 | Kafkas İslâm Ordusu'nun Gence'den Bakü'ye yürüyüşü (1918) | sefer | ✓ | 1918-09-15 | 1918-10-01 |
| 14 | Potemkin ordusunun Olviopol'den Özi'ye yürüyüşü ve kuşatma (1788) | sefer |  | 1788-12-17 | 1789-01-01 |
| 13 | Timur'un yürüyüşü (1402) | sefer |  | 1402-09-01 | 1402-09-15 |
| 13 | Çaldıran seferi (1514) | sefer |  | 1514-08-23 | 1514-09-06 |
| 13 | 1918 Doğu ileri harekâtı — Erzincan–Erzurum–Kars | sefer | ✓ | 1918-04-23 | 1918-05-07 |
| 12 | Osmanlı donanmasının İskenderiye'ye teslimi (1839) | teslim |  | 1839-07-14 | 1839-07-27 |
| 11 | Panin ordusunun Yelisavetgrad'dan Yedisan bozkırı üzerinden Bender'e yürüyüşü (1770) | sefer |  | 1770-09-27 | 1770-10-09 |
| 10 | Rumyantsev'in Prut boyunca Kartal'a (Kagul) ilerleyişi (1770) | sefer |  | 1770-08-01 | 1770-08-12 |
| 9 | İkinci Sırp İsyanı (1815) | isyan |  | 1815-04-23 | 1815-05-03 |
| 9 | Sarıkamış Harekâtı — kuşatma kolu (10. Kolordu, İd–Oltu–Bardız–Sarıkamış) (1914) | sefer | ✓ | 1915-01-04 | 1915-01-14 |
| 9 | Sarıkamış Harekâtı — Sol Cenah Ordusu'nun Erzurum'a ricatı (1915) | cekilme |  | 1915-01-04 | 1915-01-14 |
| 8 | Yavuz'un Tebriz'e yürüyüşü (1514) | sefer |  | 1514-09-06 | 1514-09-15 |
| 8 | Alemdar Mustafa Paşa'nın Rusçuk'tan İstanbul'a yürüyüşü (1808) | sefer |  | 1808-07-19 | 1808-07-28 |
| 8 | Alemdar Mustafa Paşa'nın İstanbul'a yürüyüşü (1808) | sefer |  | 1808-07-19 | 1808-07-28 |
| 7 | Napolyon'un İskenderiye'den Kahire'ye yürüyüşü — Piramitler (1798) | sefer |  | 1798-07-24 | 1798-08-01 |
| 7 | Birinci Kanal Harekâtı — Birüssebi'ye çekiliş (1915) | cekilme |  | 1915-02-15 | 1915-02-23 |
| 6 | Nizip seferi (1839) | sefer |  | 1839-06-24 | 1839-07-01 |
| 5 | Timur'un İzmir seferi (1402) | kusatma |  | 1402-12-14 | 1402-12-20 |
| 5 | Niğbolu Haçlı seferi (1396) | sefer |  | 1396-09-25 | 1396-10-01 |
| 5 | Münnich'in Hotin ve Yaş harekâtı (1739) | sefer |  | 1739-09-12 | 1739-09-18 |
| 4 | Abdülmelik'in Kasrülkebir yürüyüşü (1578) | sefer |  | 1578-08-04 | 1578-08-09 |
| 4 | Sebastian'ın Fas seferi (1578) — Portekiz çıkarması | sefer |  | 1578-08-04 | 1578-08-09 |
| 4 | Münnich'in Kırım seferi — Çariçanka'dan Bahçesaray'a (1736) | sefer |  | 1736-07-08 | 1736-07-13 |
| 4 | Berg kolunun Moloçna'dan Orkapı önüne yürüyüşü (1770) | sefer |  | 1770-10-04 | 1770-10-09 |
| 2 | Vehhâbîlerin Medine'yi alışı (1805) | kusatma |  | 1805-06-30 | 1805-07-03 |
| 2 | Münnich'in Dinyeper'den Özi'ye yürüyüşü (1737) | sefer |  | 1737-07-11 | 1737-07-14 |
| 2 | Lacy'nin Arabat okundan Karasubazar'a seferi (1737) | sefer |  | 1737-08-01 | 1737-08-04 |
| 2 | Hareket Ordusu'nun Selanik'ten İstanbul'a yürüyüşü (1909) | sefer |  | 1909-04-24 | 1909-04-27 |
| 1 | Şçerbatov kolunun Geniçesk'ten Arabat okuyla Arabat kalesine yürüyüşü (1771) | sefer |  | 1771-06-29 | 1771-07-01 |
| 1 | Karadeniz Baskını — Yavuz'un Sivastopol bombardımanı (1914) | deniz |  | 1914-10-30 | 1914-11-01 |
| 1 | Karadeniz Baskını — Gayret-i Vataniye ve Muavenet-i Milliye'nin Odesa baskını (1914) | deniz |  | 1914-10-30 | 1914-11-01 |
| 1 | Karadeniz Baskını — Midilli ve Berk-i Satvet'in Kerç ve Novorossiysk harekâtı (1914) | deniz |  | 1914-10-30 | 1914-11-01 |
| 1 | Karadeniz Baskını — Hamidiye'nin Kefe (Feodosiya) bombardımanı (1914) | deniz |  | 1914-10-30 | 1914-11-01 |

`t`'yi aşmayan 5 ok (sonraki madde `t`nin ertesi günü): Suûd'un Tâif ve Mekke harekâtı (1803) · I. Petro'nun Prut seferi — Rus ordusunun Stănilești'ye inişi (1711) · Vehhâbîlerin Tâif ve Mekke seferi (1803) · Osmanlı donanmasının Mora'dan Çeşme'ye çekilişi (1770) · Golitsın ordusunun Kiev'den Podolya'ya yürüyüşü (1769)

## 4. SEÇENEKLER

- **A — tek satır:** `m._tiKirpik = Math.min(sonraki, m.ti + 1)` ⇒ ok `t` gününün sonunda düşer. Olay olay kipinde ölçülen fark 0 (24 Ağustos'un amacı korunur); Zaman akışında yukarıdaki 126 ok erken kaybolur. Hiçbirinde arada madde yok, "erken kaybolan kara seferi" ölçütüyle bozulan yok — ama uzun seferlerin (Katalan +943, Prut +692) `t` sonrası görünürlüğü gider. **Tasarım kararıdır — koordinatör/Emre.**
- **B — dokunma (ŞİMDİLİK SEÇİLEN, UMIT İRTİBAT):** Kefe'nin 07-15→1455 görünürlüğü yalnız Zaman akışında kalır.

A seçilirse yapılacak (UMIT İRTİBAT yeniden çağıracak): diff origin/main `js/app.js` + makine/umit'te uygulanabilirlik; sınav iki yönde headless (Kefe 07-14 görünür / 07-15 gizli · Çaldıran bozulmadı · olay olay kipinde 131 okun görünürlüğü madde madde aynı).

## § A UYGULAMASI — 9 Ekim 2026 (Emre kararı "A", koordinatör aktardı)

**Diff:** `denetim/SEFER-PENCERE-1009.diff` — yalnız `js/app.js`, 10+/3− (iki kod satırı + yorum). Temel `origin/main` `0c4b383c`.
```
m._tiKirpik = m.ti + 1;                                        // eskiden m.ti (sonraki olay yoksa)
if (isFinite(sonraki)) m._tiKirpik = Math.min(sonraki, m.ti + 1);   // eskiden = sonraki
```
- İstenen tek satır `Math.min` satırıdır. İkinci satır "sonraki olay yok" (külliyatın sonu) dalı: orada `m.ti` kalsaydı ok
  KENDİ `t` gününde görünmezdi (24 Ağustos'un düzelttiği kusurun aynısı) — tutarlılık için o da `m.ti + 1`.
- `sonraki` tanım gereği her zaman `> m.ti` ⇒ `Math.min` fiilen her zaman `m.ti + 1` verir; döngü artık sonucu etkilemiyor
  (iz için bırakıldı, yorumda yazılı). İstenirse ileride sadeleştirilebilir.
- Yorum güncellendi: 24 Ağustos gerekçesi + 9 Ekim Emre kararı, kısa.

**Uygulanabilirlik (ölçüldü, `git apply --check --cached`):**
```
temiz origin/main 0c4b383c                                ✓
main + ZAMAN-PAKET-1009.diff (-C1)  → sonra SEFER-PENCERE  ✓
main + SEFER-PENCERE → sonra ZAMAN-PAKET-1009.diff (-C1)  ✓  (ZAMAN-PAKET'in kendi bir parçası -C1 ile bağlam daraltıyor: "Context reduced to (1/1)", hata değil)
diff dosyası: LF · BOM yok · CR 0 · 1769 bayt
```

**Sınav — `denetim/ARAC-SEFER-PENCERE-SINAV-1009.js` (headless Chrome, gerçek index.html, iki kol aynı ağaçta app.js değiştirilerek):**
```
KOL yamasız · 132 ok · 1663 madde günü
  ✓ t'yi aşan ok > 0                                    127/132   (5921a031'de 126/131; main'e Kefe + Rodos ikiye bölünmesi indi)
  ✓ Kefe 1454-07-14 görünür / ✓ 07-15 GÖRÜNÜR (eski davranış — sınavın öbür yönü)
  ✓ Çaldıran 1514-08-23 (kendi t günü) görünür
KOL yamalı · 132 ok
  ✓ t'yi aşan ok = 0                                    0/132
  ✓ Kefe 1454-07-14 görünür · ✓ 07-15 gizli
  ✓ Çaldıran 1514-08-23 görünür
KARŞILAŞTIR — "olay olay" kipi, 132 ok × 1663 madde günü
  ✓ görünürlüğü farklı ok 0/132
KONTROL YÖNÜ (karşılaştırıcı kör mü?): yamalı kolda tek okun tek gününü bozdum ("Nâdir Şah'ın Musul'dan çekilişi")
  ✗ 1/132 — YAKALADI, çıkış 1
```
Kullanım: `node denetim/ARAC-SEFER-PENCERE-SINAV-1009.js olc <port> <yamasiz|yamali> <cikti.json>` ·
`… karsilastir <yamasiz.json> <yamali.json>` · çıkış 0 temiz / 1 beklenti tutmadı / 2 ölçülemedi.
⚠️ Sınav paketlenmiş veriyi okur: kaynak değiştiyse önce `py arac/paketle.py yenile` (yalnız worktree'de yapıldı; değişen kaynak 0).

**Etki:** "Olay olay" kipinde hiçbir okun hiçbir madde gününde görünürlüğü değişmiyor (ölçüldü). "Zaman akışı" kipinde
127 ok `t` gününün sonunda düşüyor (önceden sonraki maddeye kadar sürüyordu — liste yukarıdaki tabloda).
Erken kaybolan kara seferi YOK: her ok kendi `t` gününde görünür kalıyor (Çaldıran sınandı; 132 okun hepsi için
`tiK - ti = 1`).
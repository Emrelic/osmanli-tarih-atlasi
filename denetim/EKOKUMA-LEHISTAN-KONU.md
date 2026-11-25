# Lehistan ek okuma: envanter ve konu listesi (Aşama 1)

Dal `ekokuma-lehistan-1125` · LAB · 25 Kasım 2026 · şartname: `origin/ekokuma-sartname-1125:denetim/EKOKUMA-DEVLETLER-SARTNAME-1125.md`.
Ölçüm ağacı: bu worktree, `origin/main` ucu `ba268233c`. Betikler scratchpad'de (`envanter.js`, `bag_sina.js`, `konu_bag.js`); repoya konmadı.
Madde evreni: `data/olaylar*.js` + `data/kronoloji*.js` + `data/devletler.js` künye kronolojileri = **32.324 madde** (ölçüldü).

## 1. Künyeler (`data/devletler.js`, ölçüldü)

| id | ad | f | t | künye kronolojisi |
|---|---|---|---|---|
| `polonya-erken` | Polonya Krallığı (Birlik Öncesi) | 0966-01-01 | 1569-07-01 | 12 |
| `litvanya-buyuk-dukalik` | Litvanya Büyük Dükalığı | 1236-01-01 | 1569-07-01 | 4 |
| `lehistan` | Lehistan-Litvanya Birliği | 1569-07-01 | 1795-10-24 | 12 |
| `kraliyet-prusyasi` | Kraliyet (Polonya) Prusyası | 1466-10-19 | 1772-09-13 | 4 |
| `mazovya-dukaligi` | Mazovya Dükalığı | 1138-01-01 | 1526-03-10 | 4 |
| `kazak-hetmanligi` | Kazak Hetmanlığı | 1648-01-01 | 1764-11-21 | 7 |
| `varsova-dukaligi` | Varşova Büyük Dukalığı | 1807-07-09 | 1815-06-09 | 7 |
| `kongre-polonyasi` | Kongre Polonyası | 1815-06-09 | 1915-08-05 | 7 |
| `krakow-serbest-sehri` | Krakov Serbest Şehri | 1815-05-03 | 1846-11-11 | 5 |
| `polonya-naiplik-kralligi` | Polonya Naiplik Krallığı | 1916-11-05 | 1918-11-11 | 3 |
| `polonya` | Polonya Cumhuriyeti (II. Cumhuriyet) | 1918-11-11 | 1939-10-06 | 7 |
| `polonya-genel-hukumeti` | Polonya Genel Hükûmeti | 1939-10-06 | 1945-01-17 | 5 |
| `polonya-halk` | Polonya (PKWN → Halk Cumhuriyeti) | 1944-07-22 | 1989-12-31 | 12 |
| `polonya-iii-cumhuriyet` | Polonya Cumhuriyeti (III. Cumhuriyet) | 1989-12-31 | (sürüyor) | 5 |

Kartlarda `devlet:"lehistan"` kullanıldı (1569–1795; Osmanlı ile temasın asıl dönemi). 1569 öncesi konular
`polonya-erken`, 1918 sonrası `polonya` künyesine yazılmalı (Aşama 3'te her kartta ayrı karar).

## 2. Kronoloji maddeleri (ölçüldü)

- `KRONOLOJI_LEHISTAN` (`data/kronoloji_lehistan.js`): **78 madde**, 1569-07-01 → 1797-01-09 (siyaset, savaş, din, kültür).
  Lehistan anlatısının ana omurgası.
- `KRONOLOJI_COK_LEHISTAN` (`data/kronoloji_cok_lehistan.js`): **69 madde**, 1295-06-26 → 1922-06-20 (Piast/Jagiellon + 19.-20. yy. seçkisi).
- `KRONOLOJI_SINIR_LEHISTAN_UKRAYNA_1028`: 21 sınır maddesi (1314 → 1939); `KRONOLOJI_SINIR_POLONYA_1915`: 3.
- `lehistan` künyesi: 12 madde; `OLAYLAR_EK16` (Litvanya/Livonya/Moskova cephesi): 17; `KRONOLOJI_COK_UKRAYNA`: 11;
  `OLAYLAR_EK5` (Osmanlı cephesi: 1621 Hotin, 1672 sefer, Kamaniçe, Uman, 1769 Hotin): 7.
- Anahtar kelime taramasıyla (Leh/Polon/Sobieski/Hotin/Kamaniçe/Bucaş/Kazak/…) evrende **592 madde** eşleşti; bunun
  önemli kısmı başka devlet bağlamıdır (Rusya, Kırım, İsveç, Habsburg).
- **Mevcut Osmanlı ek okumasında Lehistan** (TEKRARLANMAZ, ölçüldü): `antlasma-bucas-1672`, `sebep-sonuc-bucas-1672`,
  `savas-kamanice-1672`, `antlasma4-hotin-1621`, `antlasma4-rus-savasi-1768-sebep`, `antlasma7-zuravno-1676`,
  `bakis-polonya`, `karsi-viyana-1683`, `karsi-karlofca-1699`, `statu-lehistan`, `statu-ukrayna-kazak-hatmanligi`,
  `tartisma-lehistan-paylasimlari-1772-1795`, `tartisma-lehistan-ikinci-paylasim-1793`, `savas-viyana-karlofca-1683-1699`,
  `antlasma10-*` (Thorn 1466, Kraków 1525, Vilnius 1561, Lublin 1569, Yam Zapolski 1582, Deulino 1618),
  `tartisma-kirimrus-esir-ticareti`. Bu yüzden Bucaş, Kamaniçe, Zuravno, paylaşımlar ve Lublin için yeni kart
  ancak farklı bir açıdan (Leh tarafı, kişi, sonuç) yazılmalı.

## 3. Kronoloji boşlukları ve uyuşmazlıklar (ek okuma dalında YAZILMADI; listelendi)

Ölçüm: aşağıdakiler için Lehistan evreninde gün maddesi bulunamadı (anahtar kelime taraması; başka adla yazılmış
madde olabilir) ya da okunan kaynak atlastan farklı gün veriyor.
1. **Ţuţora/Cecora ölüm günü:** atlas `1620-10-07` "Hatman Żółkiewski öldürüldü"; PSB atölyesi biyografisi **6 Ekim 1620**. Düzeltme adayı.
2. **Kutsal İttifak'a katılım:** atlas `1684-01-01` "(Linz)"; PSB atölyesi Sobieski biyografisi **5 Mart 1684**. Gün eklenebilir.
3. Sobieski'nin taç giymesi (1676-02-02, Krakov) — madde yok (seçim 1674-05-21 var).
4. Ciğerdelen (Parkany) muharebeleri 1683-10-07 (yenilgi) ve 1683-10-09 (zafer), Estergon'un alınması 1683 — Lehistan evreninde yok.
5. Lviv önünde Tatar yenilgisi 1675-08-22 — yok.
6. Sobieski'nin Boğdan seferleri 1686 ve 1691; Kamaniçe kuşatması 1687 — yok.
7. Biały Kamień 1604-09-23 (Chodkiewicz) — yok (Kircholm 1605-09-27 var).
8. Byczyna 1588-01-24 — yok.
9. Kremlin'deki Leh garnizonunun teslimi (1612) — yok (Kłuszyn 1610-07-04 ve Deulino 1618 var).
10. Zborów muharebesi 1649-08-15 ve Beresteczko 1651-06-28/30 — Lehistan evreninde yok (Zboriv antlaşması 1649-08-18 var).
11. Mątwy 1666 (Lubomirski rokoşu) — yok.
12. Batory'nin seçimi (1575 Aralık) — yalnız taç giyme 1576-05-01 var.
13. 1617 Busza (Jaruga) anlaşması — yok (Ţuţora'nın öncesi).
14. 1863 Ocak Ayaklanması `1863-01-01` (yıl düzeyi); gün (22 Ocak) teyit edilmeli.
15. Polonezköy (Adampol) kuruluşu 1842, Mickiewicz'in İstanbul'da ölümü 1855, Sadık Paşa'nın Kazak alayı 1853–56 — Osmanlı evreninde arandı, bulunamadı.
16. Bem'in (Murad Paşa) Osmanlı'ya sığınması 1849 — Lehistan/Osmanlı evreninde Bem anahtarıyla madde bulunamadı.

## 4. Konu adayları (70)

Sütunlar: **ilgi** = ilgi sinyali. Bu oturumda forum/arama sayımı YAPILMADI; bütün sinyaller **tahmin**dir
(ders kitabı / popüler tarih / Türk-Leh kamuoyu ilgisi), Aşama 3 öncesi ölçülmeli. **bağ** = `gün|başlık parçası`
(her bağ `konu_bag.js` ile madde evreninde arandı, §6; "—" = madde yok, §3'e bak). **kaynak**: okundu / okunmadı (aday).
Kısaltmalar: PSB-W = Polski Słownik Biograficzny atölyesinin Wilanów Sarayı Müzesi'ndeki biyografisi; TDV = TDV İslâm Ansiklopedisi.

### İlk 40 (sıralı)

| # | konu | ilgi | bağ | tür | kaynak | yaygın yanlış → akademik durum |
|---|---|---|---|---|---|---|
| 1 | Hotin 1621: kim kazandı? | tahmin: yüksek (TR+PL ders kitabı) | `1621-10-09\|Osmanlı seferi durduruldu` | tartisma | okundu: TDV Hotin (Kołodziejczyk), TDV Osman II, Kalwat (Wilanów) | "Osmanlı zaferi" ya da "Leh zaferi" → sefer hedefine ulaşmadı, iki taraf da zafer ilan etti — **KART YAZILDI** |
| 2 | Hotin 1673: Sobieski'nin sabah hücumu | tahmin: yüksek (PL) | `1673-11-11\|Hotin zaferi` | savas-hikayesi | okundu: TDV Hotin, Widacka (Wilanów) | kayıp sayıları tek taraflı → Osmanlı kaynağıyla karşılaştırılmalı — **KART YAZILDI** |
| 3 | Hotin zaferi tahtı nasıl getirdi? | tahmin: orta | `1674-05-21\|Sobieski kral seçildi` | sebep-sonuc | okundu: PSB-W Sobieski, TDV Hotin | "zafer = taht" → seçimli krallıkta zafer sermaye, ama parti tabanı yoktu — **KART YAZILDI** |
| 4 | Kłuszyn 1610 ve Leh prensinin çarlığı | tahmin: yüksek (RU+PL) | `1610-07-04\|Kluşino` | savas-hikayesi | okundu: PSB-W Żółkiewski, Kalwat | "Lehler Moskova'yı fethetti" → boyarlar Władysław'ı seçti, garnizon sonra teslim oldu — **KART YAZILDI** |
| 5 | Żółkiewski'nin başı | tahmin: orta (magazin) | `1620-10-07\|Cecora` | magazin | okundu: PSB-W Żółkiewski | — → baş sarayda asıldı, dul eşi satın aldı; fidye miktarı okunmadı — **KART YAZILDI** |
| 6 | III. Jan Sobieski (hükümdar kaydı) | tahmin: çok yüksek | `1674-05-21\|Sobieski kral seçildi` | hükümdar | okundu: PSB-W Sobieski | "Avrupa'yı tek başına kurtaran kral" → Boğdan seferleri fiyasko, iç siyasette zayıf — **KAYIT YAZILDI** |
| 7 | Stanisław Żółkiewski (kişi) | tahmin: orta | `1620-10-07\|Cecora` | kişi | okundu: PSB-W | — — **KAYIT YAZILDI** |
| 8 | Jan Karol Chodkiewicz (kişi) | tahmin: orta | `1621-10-09\|Osmanlı seferi durduruldu` | kişi | okundu: Kalwat | ölüm günü yaygın kaynaklarda 24 Eylül; okunan kaynakta yok — **KAYIT YAZILDI** |
| 9 | Viyana 1683: "Avrupa'yı Sobieski mi kurtardı?" | tahmin: çok yüksek | `1683-09-12\|Kahlenberg` | tartisma | okunmadı: Wójcik, *Jan Sobieski* (PIW); Stoye; TDV Merzifonlu Kara Mustafa | tek kahraman anlatısı → koalisyon, başkomutanlık tartışması; `karsi-viyana-1683` ile çakışmamalı |
| 10 | Kanatlı hüsarlar: efsane ve gerçek | tahmin: çok yüksek (internet) | `1605-09-27\|Kircholm` | teknik-bilimsel | okunmadı: Sikora, hakemli makaleler (*Studia i Materiały do Historii Wojskowości*) | "kanatlar ses çıkarıp atları korkutuyordu" → işlev tartışmalı |
| 11 | Kircholm 1605 | tahmin: yüksek | `1605-09-27\|Kircholm` | savas-hikayesi | okundu (kısmen): Kalwat | sayılar abartılı mı? |
| 12 | Liberum veto: bir soylu bir meclisi dağıtabilir mi? | tahmin: yüksek | `1652-03-09\|Liberum veto` | sebep-sonuc | okunmadı: PSB Siciński; Konopczyński *Liberum veto* | "Lehistan'ı veto yıktı" → tek sebep değil |
| 13 | Lehistan Osmanlı'nın haraçgüzarı oldu mu? (Bucaş'ın Leh tarafı) | tahmin: yüksek (TR) | `1672-10-18\|haraç` | karsi-anlati | okundu: TDV Bucaş (İnbaşı), Widacka | Leh meclisi reddetti; `statu-lehistan` ile çakışmamalı |
| 14 | Stefan Batory: Osmanlı'nın adayı mı? | tahmin: orta-yüksek | `1576-05-01\|Stefan Batory` | tartisma | okundu (kısmen): TDV Polonya ("Osmanlı Báthory'yi destekledi") | "Osmanlı kralı" → Erdel voyvodası, Habsburg adayına karşı |
| 15 | Henri de Valois'nın kaçışı | tahmin: orta | `1574-06-18\|Henri de Valois` | magazin | okunmadı: PSB; Fransız akademik | — |
| 16 | Varşova Konfederasyonu: Avrupa'da din hoşgörüsü | tahmin: orta | `1573-01-28\|Varşova Konfederasyonu` | tartisma | okunmadı | "Avrupa'nın ilk hoşgörü yasası" → kapsamı soylularla sınırlı |
| 17 | 3 Mayıs Anayasası: "Avrupa'nın ilk yazılı anayasası" mı? | tahmin: çok yüksek | `1791-05-03\|anayasa` | karsi-anlati | okunmadı | "ilk" iddiası (ABD 1787) → "Avrupa'da ilk modern yazılı" tartışmalı |
| 18 | Hmelnitski ayaklanması | tahmin: çok yüksek (UA/PL) | `1648-05-16\|Hmelnitski` | sebep-sonuc | okunmadı: Plokhy; TDV Kazaklar | Yahudi katliamları ölçülü dille; ulusal anlatılar ayrışır |
| 19 | Potop (İsveç Tufanı) ve Jasna Góra | tahmin: yüksek (PL, Sienkiewicz) | `1655-07-21\|Potop` | karsi-anlati | okunmadı | roman ile tarih farkı |
| 20 | Pereyaslav 1654 | tahmin: yüksek (UA/RU) | `1654-01-18\|Pereyaslav Andı` | tartisma | okunmadı | "birleşme" vs "ittifak" yorumları |
| 21 | Birinci paylaşım: Osmanlı neden seyirci kaldı? | tahmin: yüksek (TR) | `1772-08-05\|Birinci taksim` | sebep-sonuc | okundu (kısmen): TDV Polonya | `tartisma-lehistan-paylasimlari` ile çakışmamalı; Leh açısı |
| 22 | "Osmanlı paylaşımları hiç tanımadı" anlatısı | tahmin: çok yüksek (TR sosyal medya) | `1795-10-24\|Üçüncü taksim` | karsi-anlati | okundu: TDV Polonya (tanıma meselesini yazmıyor); okunmadı: Kołodziejczyk, Reychman | "Lehistan elçisinin yeri boş bırakıldı" → belgesi gösterilmeli |
| 23 | Kościuszko ayaklanması ve Racławice tırpancıları | tahmin: yüksek | `1794-04-04\|Racławice` | savas-hikayesi | okunmadı | — |
| 24 | Praga katliamı 1794 | tahmin: orta (hassas) | `1794-11-04\|Praga katliamı` | tartisma | okunmadı | sayılar tartışmalı; ölçülü dil |
| 25 | Stanisław August Poniatowski: hain mi, reformcu mu? | tahmin: orta | `1764-09-07\|Poniatowski` | kimdir | okunmadı | Katerina'nın sevgilisi imgesi |
| 26 | Bar Konfederasyonu ve 1768 savaşı | tahmin: orta | `1768-02-29\|Bar Konfederasyonu` | sebep-sonuc | okundu (kısmen): TDV Polonya | `antlasma4-rus-savasi-1768-sebep` ile çakışmamalı |
| 27 | Varna 1444: Leh-Macar kralının ölümü | tahmin: yüksek (TR+PL) | `1444-11-10\|Varna Muharebesi` | karsi-anlati | okunmadı | "kral kaçtı/yaşıyor" efsaneleri |
| 28 | Grunwald 1410 | tahmin: çok yüksek (PL) | `1410-07-15\|Grunwald` | savas-hikayesi | okunmadı | milli mit |
| 29 | Jadwiga: "kral" olarak taç giyen kraliçe | tahmin: orta | `1384-10-16\|Jadwiga` | magazin | okunmadı | "kraliçe değil kral" ünvanı |
| 30 | Krewo Birliği belgesi tartışması | tahmin: düşük-orta | `1385-08-14\|Krewo` | tartisma | okunmadı | belgenin niteliği tartışmalı |
| 31 | İlk Osmanlı-Leh barışı 1489 | tahmin: orta (TR) | `1489-03-22\|Osmanlı-Lehistan barış` | antlasma | okundu (kısmen): TDV Polonya | — |
| 32 | "Ebedî barış" 1533 | tahmin: orta | `1533-01-01\|ebedî barış` | antlasma | okundu (kısmen): TDV Polonya | "ebedî" = iki hükümdarın ömrü |
| 33 | Kozmin bozgunu 1497 | tahmin: düşük | `1497-01-01\|Kozmin` | savas-hikayesi | okundu (kısmen): TDV Polonya | — |
| 34 | Ali Ufkî Bey (Wojciech Bobowski) | tahmin: orta (TR müzik) | — (madde yok) | kişi | okundu: TDV Ali Ufkî Bey | "17 dil" ve doğum yeri teyitsiz |
| 35 | Kamaniçe'nin Osmanlı dönemi (Leh tarafı) | tahmin: orta | `1672-08-27\|Kamaniçe düştü` | mimari | okundu: TDV Kamaniçe (Kołodziejczyk) | `savas-kamanice-1672` ile çakışmamalı; minare-Meryem heykeli |
| 36 | Zuravno 1676 (Leh tarafı) | tahmin: düşük | `1676-10-27\|Zuravno` | antlasma | okunmadı | `antlasma7-zuravno-1676` var |
| 37 | Karlofça'da Lehistan: Podolya'nın dönüşü | tahmin: orta | `1699-01-26\|Podolya, Kamaniçe` | sebep-sonuc | okundu (kısmen): TDV Kamaniçe | `karsi-karlofca-1699` ile çakışmamalı |
| 38 | Lublin Birliği: birlik mi ilhak mı? (Litvanya açısı) | tahmin: orta | `1569-07-01\|Lublın birliği` | tartisma | okunmadı | `antlasma10-lublin-1569` var |
| 39 | Brest Birliği 1596 ve Uniat kilisesi | tahmin: orta (UA) | `1596-01-01\|Brest Birliği` | sebep-sonuc | okunmadı | — |
| 40 | Kopernik: Polonyalı mı Alman mı? | tahmin: çok yüksek (internet) | `1473-02-19\|Kopernik` | karsi-anlati | okunmadı | milliyet tartışması anakronik |

### 41–70 (sırasız)

| # | konu | ilgi | bağ | tür | kaynak | yaygın yanlış → akademik durum |
|---|---|---|---|---|---|---|
| 41 | Kopernik'in ölümü ve kitabın basılışı | tahmin | `1543-05-24\|Kopernik` | teknik-bilimsel | okunmadı | "ölüm döşeğinde kitabı gördü" rivayeti |
| 42 | Heweliusz ve Ay haritası | tahmin | `1647-01-01\|Heweliusz` | teknik-bilimsel | okunmadı | — |
| 43 | Raków Akademisi ve Polonyalı Kardeşler | tahmin | `1602-01-01\|Raków` | tartisma | okunmadı | — |
| 44 | Polonyalı Kardeşler'in sürgünü 1658 | tahmin | `1658-07-20\|Polonyalı Kardeşler` | sebep-sonuc | okunmadı | — |
| 45 | Lwów Yeminleri: Meryem kraliçe | tahmin | `1656-04-01\|Lwów` | magazin | okunmadı | — |
| 46 | Zamość: ideal Rönesans şehri | tahmin | `1580-04-10\|Zamość` | mimari | okunmadı | — |
| 47 | Wilanów Sarayı | tahmin | `1677-01-01\|Wilanów` | mimari | okunmadı | — |
| 48 | Zygmunt Şapeli | tahmin | `1519-01-01\|Zygmunt Şapeli` | mimari | okunmadı | — |
| 49 | Kochanowski ve Lehçe edebiyat | tahmin | `1580-01-01\|Treny` | kimdir | okunmadı | — |
| 50 | Bona Sforza: zehir rivayetleri | tahmin: yüksek (magazin) | `1518-04-18\|Bona Sforza` | magazin | okunmadı | zehirlenme rivayeti |
| 51 | Krakov Akademisi 1364/1400 | tahmin | `1364-05-12\|Krakov Akademisi` | sebep-sonuc | okunmadı | — |
| 52 | Nihil novi 1505 | tahmin | `1505-01-01\|Nıhıl novi` | sebep-sonuc | okunmadı | — |
| 53 | Neminem captivabimus 1430 | tahmin | `1430-01-01\|Jedlnia` | sebep-sonuc | okunmadı | — |
| 54 | Piotrków statüleri: köylü toprağa bağlandı | tahmin | `1496-01-01\|Piotrków` | sebep-sonuc | okunmadı | — |
| 55 | Kili ve Akkirman 1484: Karadeniz kapısı | tahmin: orta (TR) | `1484-08-03\|Akkirman` | sebep-sonuc | okunmadı: TDV Akkirman | — |
| 56 | Prusya biatı 1525 | tahmin | `1525-01-01\|Prusya biatı` | antlasma | okunmadı | `antlasma10-krakow-1525` var |
| 57 | Wehlau 1657: Prusya bağımsızlaşıyor | tahmin | `1657-09-19\|Wehlau` | sebep-sonuc | okunmadı | — |
| 58 | Andrusovo 1667 | tahmin | `1667-01-30\|Andrusovo` | antlasma | okunmadı | — |
| 59 | II. Jan Kazimierz'in tahttan çekilme konuşması | tahmin | `1668-09-16\|Jan Kazimierz` | magazin | okunmadı | "kehanet" konuşması |
| 60 | Güçlü August ve Sakson dönemi | tahmin | `1697-01-01\|Güçlü` | kimdir | okunmadı | — |
| 61 | Sessiz Sejm 1717 | tahmin | `1717-02-01\|Sessiz Sejm` | sebep-sonuc | okunmadı | — |
| 62 | Leszczyński ve Lehistan Veraset Savaşı | tahmin | `1733-09-12\|Leszczyński` | tartisma | okunmadı | — |
| 63 | Poltava'nın Lehistan'a etkisi | tahmin | `1709-07-08\|Poltava` | sebep-sonuc | okunmadı | — |
| 64 | Targowica: "hainler" konfederasyonu | tahmin | `1792-05-14\|Targowica` | tartisma | okunmadı | — |
| 65 | Połaniec Beyannamesi | tahmin | `1794-05-07\|Połaniec` | sebep-sonuc | okunmadı | — |
| 66 | Dąbrowski Lejyonları ve milli marş | tahmin: yüksek | `1797-01-09\|Dąbrowski` | karsi-anlati | okunmadı | — |
| 67 | Varşova Düklüğü (Napolyon) | tahmin | `1807-07-07\|Varşova Düklüğü` | sebep-sonuc | okunmadı | devlet: `varsova-dukaligi` |
| 68 | Kasım Ayaklanması ve Büyük Göç (Osmanlı'ya sığınanlar) | tahmin: yüksek (TR) | `1831-09-08\|Kasım Ayaklanması` | sebep-sonuc | okunmadı: TDV Polonezköy | devlet: `kongre-polonyasi` |
| 69 | Ocak Ayaklanması 1863 | tahmin | `1863-01-01\|Ocak Ayaklanması` | savas-hikayesi | okunmadı | gün teyitsiz (§3/14) |
| 70 | Polonezköy (Adampol) ve Sadık Paşa (Czajkowski) | tahmin: yüksek (TR) | — (madde yok) | kimdir | okunmadı: TDV "Polonezköy", "Mehmed Sâdık Paşa" | "Osmanlı Lehistan'a sadık kaldı" anlatısı |

## 5. Aşama 2 örnekleri (8)

| dosya / ad alanı | id | tür | bağ |
|---|---|---|---|
| `data/ekokuma_dev_lehistan_01.js` · `EKOKUMA_DEVLEHISTAN01` | `devlehistan-hotin-1621-kim-kazandi` | tartisma | `1621-10-09\|Osmanlı seferi durduruldu` + `1621-10-09\|Hotin Seferi ve Hotin Antlaşması` |
| 〃 | `devlehistan-klusino-1610` | savas-hikayesi | `1610-07-04\|Kluşino` |
| 〃 | `devlehistan-zolkiewski-basi-1620` | magazin | `1620-10-07\|Cecora` |
| 〃 | `devlehistan-hotin-1673` | savas-hikayesi | `1673-11-11\|Hotin zaferi` |
| 〃 | `devlehistan-hotin-tahta-1673` | sebep-sonuc | `1673-11-11\|Hotin zaferi` + `1674-05-21\|Sobieski kral seçildi` |
| `data/hukumdar_lehistan.js` · `HUKUMDAR_LEHISTAN` | `jan-iii-sobieski` | hükümdar | 1673-11-11, 1674-05-21, 1683-09-12, 1696-06-17 |
| `data/kisi_lehistan.js` · `KISI_LEHISTAN` | `zolkiewski-stanislaw` | kişi (komutan) | `1620-10-07\|Cecora` + `1620-09-01\|Ţuţora savaşları` |
| 〃 | `chodkiewicz-jan-karol` | kişi (komutan) | `1621-10-09\|Osmanlı seferi durduruldu` |

Türler: tartisma, savas-hikayesi (2), magazin, sebep-sonuc = 4 tür + 1 hükümdar + 2 kişi. Hepsinde `devlet:"lehistan"`.
İlk taslakta Bucaş (antlasma) ve Kamaniçe (savas-hikayesi) kartları yazılmıştı; Osmanlı tarafında aynı başlıkta kart
olduğu (`antlasma-bucas-1672`, `savas-kamanice-1672`) ölçülünce çıkarıldı, yerine Kłuszyn ve Żółkiewski magazin kartı kondu.

**Okunan kaynaklar (bu oturumda gövdesi okundu):** TDV "Hotin" (D. Kołodziejczyk, c.18, 1998, s.253-254);
TDV "Osman II"; TDV "Kamaniçe" (D. Kołodziejczyk, c.24, 2001, s.274-275); TDV "Bucaş Antlaşması" (M. İnbaşı);
TDV "Polonya"; TDV "Ali Ufkî Bey"; Wilanów Sarayı Müzesi: PSB atölyesi biyografileri "Jan III Sobieski of the Janina
coat of arms" (2010) ve "Stanisław Żółkiewski h. Lubicz" (2007); W. Kalwat, "Jan Karol Chodkiewicz" (2007);
H. Widacka, "Bitwa pod Chocimiem" (2007). Okuma WebFetch ile yapıldı (sayfa metninden özet); doğrudan alıntı yok.
**Okunamayan:** Encyklopedia PWN (bot korumalı "Serwis Nieaktywny" sayfası), iPSB (sertifika hatası), PSB basılı
ciltleri. TDV "Lehistan" yalnız "bk. POLONYA" göndermesi.

## 6. Bağlama sınaması (ölçüldü)

`bag_sina.js` `js/app.js`'ten `_ekNorm`, `_ekBagGun`, `_ekBagEslesir`, `ekKartBagliMi` fonksiyonlarının metnini kesip
koşturur; 32.324 maddelik evrende her kartın göründüğü maddeleri ve aynı gündeki görünmediği maddeleri basar.
Sonuç: **8 kaydın 18 bağ değerinden boş bağ 0.** Kartlar yalnız Lehistan maddelerinde ve aynı olayın Osmanlı maddesinde
(1621-10-09 `OLAYLAR_EK5` "Hotin Seferi ve Hotin Antlaşması") görünür. 1683-09-12'de Sobieski kaydı Habsburg, Erdel,
Orta Macar, Balkan, Kırım ve Osmanlı Viyana maddelerinde **görünmez** (yalnız "Sobieski" geçen iki Lehistan maddesi).
Kongre benzeri çok maddeye düşen bağ yok. İlk taslakta "1672-08-27|Kamaniçe" Kırım maddesine de düşüyordu; kart çıkarıldı.
§4'teki konu bağları `konu_bag.js` ile ayrıca arandı: **66 ayrı bağ, boş 0** (hepsi evrende en az bir maddeye düşüyor).
İkiden çok maddeye düşen 4 bağ Aşama 3'te daraltılmalı (başka devlet maddelerinde de görünür):
`1648-05-16|Hmelnitski` (3: Kırım, Lehistan, dünya bölge) · `1410-07-15|Grunwald` (4: Polonya künyesi, Töton künyesi,
Almanya, Lehistan) · `1569-07-01|Lublın birliği` (5) · `1709-07-08|Poltava` (6: İsveç, Ukrayna, Rusya…).
Bu sınama kart yazılmamış konular için yalnız bağın varlığını ölçer; kartın yanlış maddede görünmemesi kart yazılınca
`bag_sina.js` ile ayrıca sınanmalı.

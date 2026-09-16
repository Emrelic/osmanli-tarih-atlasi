# -*- coding: utf-8 -*-
"""D5-ASYA — data/kronoloji_sinir_asya.js ÜRETİR (window.KRONOLOJI_SINIR_ASYA).

Şartname: oturumlar/GERIYE-SARMA-0916.md ADIM 3 · M-4153 ("taraflar[] iki id").
Biçim data/kronoloji_almanya.js ile aynı; ek alanlar: taraflar:[a,b] (devletler: aynı, geriye uyum) · sinir_kaydi.
Her madde yalnız OKUNMUŞ kaynağa dayanır (denetim/D5-ASYA-0916.md). Atlas dayanak değildir (CLAUDE.md §4).
Hanedan/devlet geçişleri (1910 · 1911 · 1917) SINIR olayı sayılmaz, yazılmaz.
Sınav: node denetim/ARAC-D5-ASYA-SINA-0916.js
"""
import io, os, json
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)

IBS = "IBS No. %d %s (ABD Dışişleri Coğrafyacılığı)"
AIT13 = "Aitchison, Treaties, Engagements and Sanads c. XIII (Calcutta 1933)"
BAL = "D. Balland, 'Boundaries iii. Boundaries of Afghanistan', Encyclopaedia Iranica IV/4"
RIAA = "UN RIAA vol. XI s. 481–517 (Affaire de l'île de Timor)"
IBRU = "N. Deeley, The International Boundaries of East Timor, IBRU Boundary & Territory Briefing 3/5 (Durham 2001)"

AF, RU, QG, CN, MN = "afganistan", "rusya", "qing-hanedani", "cin-cumhuriyeti", "mogolistan"
IH, TB, SI, FC, HD = "ingiliz-hindistani", "tibet-ganden-phodrang", "siyam-chakri", "fransiz-cinhindi", "hollanda-dogu-hint"
EN, SW, PT, JP, JS = "ingiltere", "sarawak-brooke", "portekiz", "meiji-japonya", "joseon"
MA, CK, SV = "ingiliz-malaya", "cammu-kesmir", "sovyet-rusya"

SH, NP, AIT2 = "sih-imparatorlugu", "nepal", "Aitchison, Treaties, Engagements and Sanads c. II (Calcutta 1909)"

# (t, taraflar, b, tur, onem, dunya, sinif, d, kaynak, sinir_kaydi, yer_id)
M = [
# ---------------- G7 (1699-01-26 → 1606-11-11) ----------------
("1689-08-27", [QG, RU], "Nerçinsk Antlaşması — ilk Rus–Mançu sınırı", "antlasma", 5, 4, "YOK",
 "IBS'e göre Rusya ile Mançu İmparatorluğu arasındaki ilk sınır bu antlaşmayla kuruldu: hat Argun'u Şilka'ya kadar izledi, oradan kuzeye dönüp Yablonovıy ve Stanovoy sıradağlarının su ayrımıyla Pasifik'e uzandı. Mançular Rusları Amur'daki karakollarını bırakmaya zorladı; yine de IBS'e göre Rusya yaklaşık 230.000 km² toprağın hakkını kazandı. Uda ırmağı ile dağlar arasındaki ırmakların aidiyeti açık bırakıldı. IBS antlaşmanın günü için yalnız '27 Ağustos 1689' der, takvimini belirtmez.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g7-rusya-qing-BILINMIYOR-nercinsk-1689", ""),
# ---------------- G6 (1774-07-21 → 1699-01-26) ----------------
("1727-10-12", [QG, RU], "Bur Antlaşması ve protokolleri — Moğolistan'ın kuzeyinde Rus–Çin sınırı çizildi", "antlasma", 5, 4, "YOK",
 "20 Ağustos 1727'de Bur ırmağı kıyısında imzalanan antlaşma ve ardından değişilen protokoller, Rus–Çin sınırını Argun'dan batıya, Moğolistan'ın kuzeyinden Kara İrtiş vadisine kadar tanımladı. 12 Ekim 1727 Abagatuy protokolü Kiahta'nın doğusunda 63 işaret, 27 Ekim 1727 Bur protokolü batısında 24 nokta belirledi. IBS'e göre bu anlaşmalarla Rusya Moğolistan'ın kuzeyinde yaklaşık 100.000 km² toprak kazandı. Kiahta Antlaşması'nın imza günü kaynaklarda tartışmalıdır (21, 24 ya da 27 Ekim 1727).",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-mn-BILINMIYOR-rusya-qing", ""),
# ---------------- G5 (1815-06-09 → 1774-07-21) ----------------
("1792-01-01", [NP, TB], "Çin–Nepal antlaşması — Himalaya sınırı belirsiz bırakıldı", "antlasma", 3, 2, "YOK",
 "1792'de (gün kaynakta yok; tarih alanı yalnız yılı taşır) Çin ile Nepal arasında yapılan antlaşma, IBS'e göre Himalaya'nın güneyindeki bazı toprakları Tibet'e bırakıyor görünür; ama kesin hükümleri belirsizdir. Nepal–Tibet sınırı bu antlaşmadan sonra da ancak fiilî bir çizgi olarak kaldı.",
 IBS % (50, "China–Nepal"), "g5-np-tb-FIILI-1792", ""),
# ---------------- G4 (1878-07-13 → 1815-06-09) ----------------
("1816-03-04", [IH, TB], "Sugauli ile Kali'nin batısı İngiliz idaresine geçti — Kumaon'un Tibet sınırı İngiliz sınırı oldu", "antlasma", 3, 2, "YOK",
 "Sugauli Antlaşması'nın 5. maddesiyle Nepal Raca'sı, Kali ırmağının batısındaki ülkelerle her türlü bağından vazgeçti. Böylece bu ülkelerin Tibet'e bakan yüzü İngiliz Hindistanı'nın sınırına dönüştü. Bu kesimde Tibet ile bir sınır antlaşması bulunamadı; hat 1923'te de yalnız fiilîydi.",
 AIT2, "d1923-ih-tb-FIILI-batihimalaya", ""),
("1816-03-04", [IH, NP], "Sugauli Antlaşması yürürlükte — Nepal ovalarını İngilizlere bıraktı", "antlasma", 5, 3, "YOK",
 "2 Aralık 1815'te Segowlee'de (Sugauli) imzalanan antlaşmanın onaylı nüshası 4 Mart 1816'da Nepal temsilcisine teslim edildi. 3. madde Kali–Rapti, Rapti–Gandak, Gandak–Kosi ve Mechi–Teesta arasındaki ovaları ve Mechi'nin doğusundaki tepeleri Şirket'e bıraktı. 8 Aralık 1816 muhtırasıyla Gandak–Rapti Terai'si Nepal'e geri verildi ve sınırın ortak komiserlerce belirlenmesi kararlaştırıldı.",
 AIT2, "g4-ih-np-BILINMIYOR-1816", ""),
("1842-09-17", [SH, TB], "Ladakh–Tibet mektubu — 'eski sınırlar' teyit edildi", "diplomasi", 3, 2, "YOK",
 "Ladakh ile Tibet arasında yazılan mektup, iki tarafın eski sınırlarını tanıdı; ama sınırı tarif etmedi, koordinat vermedi. Ladakh o yıllarda Sih İmparatorluğu'na bağlı Dogra idaresindeydi. Bu kesimde 1923'te bile iki taraf arasında antlaşmayla çizilmiş bir hat yoktu.",
 "Ladakh–Tibet mektubu metni (tibetjustice.org, van Walt van Praag derlemesi) · " + IBS % (85, "China–Pakistan"), "g4-sih-tb-FIILI-ladakh-1842", ""),
("1856-03-24", [NP, TB], "Nepal–Tibet barışı — sınır çizilmedi", "antlasma", 3, 2, "YOK",
 "Nepal ile Tibet arasındaki barış antlaşması Kerong ve Kuti çevresindeki bazı reayayı Nepal'e bıraktı, ama sınırı ayrıntılı olarak tarif etmedi. IBS'e göre iki ülke arasındaki çizgi 1960–1963 anlaşmalarına kadar yalnız fiilî bir sınırdı; daha eski 1792 antlaşmasının hükmü de belirsizdir.",
 IBS % (50, "China–Nepal"), "d1923-np-tb-FIILI", ""),
("1858-05-28", [QG, RU], "Aigun Antlaşması — Amur Rus–Çin sınırı oldu", "antlasma", 5, 4, "YOK",
 "16 (28) Mayıs 1858'de imzalanan antlaşma Amur'un sol kıyısını Rusya'ya, sağ kıyısını Çin'e bıraktı; nehir içindeki hattı ise tanımlamadı. Ussuri ile Pasifik arasındaki toprağı iki devlet ortak yönetecekti. Zeya ile Holdoldzin arasındaki sol kıyıda yaşayan Mançu köylüleri ('64 köy') Mançu idaresinde kalacaktı. IBS'e göre Rusya yaklaşık 598.000 km² toprak kazandı. Mançu imparatoru 2 Haziran, çar 8 Temmuz 1858'de onayladı.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g4-rusya-qing-BILINMIYOR-dogu-1858", ""),
("1860-08-13", [HD, PT], "Lizbon Antlaşması yürürlükte — Timor'da ilk Hollanda–Portekiz sınırı", "antlasma", 3, 2, "YOK",
 "20 Nisan 1859'da Lizbon'da imzalanan sınır ve toprak değişimi antlaşmasının onayları 13 Ağustos 1860'ta değişildi. IBRU'ya göre bu, mevcut bağlılıklara dayanan çok genel bir sınırlandırmaydı; Timor'daki Hollanda ve Portekiz enklavlarını da kaldırmadı.",
 IBRU, "g3-hd-pt-BILINMIYOR-timor-1860", ""),
("1860-10-24", [EN, QG], "Peking Konvansiyonu — Kowloon İngiltere'ye bırakıldı", "antlasma", 4, 3, "YOK",
 "Konvansiyonun 6. maddesiyle Çin, Kowloon yarımadasının bugünkü Boundary Street'in güneyinde kalan kısmını ve Stonecutters adasını İngiltere'ye bıraktı. Böylece Hong Kong ile Çin arasında ilk kara sınırı doğdu; 1898'deki Yeni Topraklar kirasıyla sınır kuzeye taşındı.",
 IBS % (13, "China–Hong Kong"), "g4-en-qing-BILINMIYOR-kowloon-1860", ""),
("1860-11-01", [IH, NP], "Katmandu Antlaşması — batı Terai Nepal'e iade edildi", "antlasma", 3, 2, "YOK",
 "İngiltere, Kali ile Gorakhpur arasındaki ovaları Nepal'e geri verdi. Antlaşmanın 3. maddesi yeni sınırın kâgir direklerle işaretlendiğini söyler; Genel Vali 15 Kasım 1860'ta onayladı.",
 AIT2, "g4-ih-np-BILINMIYOR-1860", ""),
("1860-11-14", [QG, RU], "Pekin Ek Antlaşması — Ussuri'nin doğusu Rusya'ya geçti", "antlasma", 5, 4, "YOK",
 "2 (14) Kasım 1860'ta imzalanan antlaşmanın 1. maddesi Ussuri'yi ve oradan Sungaça, Hanka gölü ve Tumen'e uzanan kara hattını sınır yaptı; hat haritada 20 noktayla gösterildi ve 1861'de bu noktalara ahşap direkler dikildi. Antlaşma Türkistan'da da ilk kez bir Mançu–Rus sınırı öngördü: mevcut Çin karakol hattı.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-cn-BILINMIYOR-dogu-rusya-qing", ""),
("1864-10-07", [QG, RU], "Tarbagatay (Çuguçak) Protokolü — Orta Asya'da Rus–Çin sınırı çizildi", "antlasma", 4, 3, "YOK",
 "25 Eylül (7 Ekim) 1864'te imzalanan protokol, Pekin Antlaşması'nın öngördüğü Türkistan sınırını Moğolistan'dan güneybatıya, Hokand'ın sınırı sayılan yaklaşık 40°15' kuzey – 74°40' doğuya kadar çizdi. Hattın çoğu Orta Asya'nın ana su ayrımıydı. IBS'e göre birçok nokta Doğu Türkistan'daki karışıklık yüzünden belirsiz kaldı.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g4-rusya-qing-BILINMIYOR-kazak-1864", ""),
("1868-07-03", [SI, IH], "İngiliz–Siyam Sözleşmesi onaylandı — Tenasserim sınırı çizildi", "antlasma", 3, 2, "YOK",
 "Sözleşme Salween'den güneye Moei (Thaungyin) nehrini, ardından su ayrımını ve Pakchan nehrini ağzına kadar Tenasserim ile Siyam arasında sınır yaptı; onaylar 3 Temmuz 1868'de değişildi. Sözleşmenin imza günü kaynaklarda çelişkilidir (8 Şubat ya da 8 Eylül 1868).",
 IBS % (63, "Burma–Thailand"), "g3-si-ih-BILINMIYOR-1868", ""),
("1873-01-31", [AF, RU], "İngiliz–Rus anlaşması — Amuderya Afganistan'ın kuzey sınırı sayıldı", "antlasma", 4, 3, "YOK",
 "İngiltere ile Rusya, Badahşan'ı ve Sarıkul gölüne kadar Vahan'ı Afganistan toprağı saydı; Amuderya'yı Hoca Salar geçidine kadar Afganistan'ın kuzey sınırı kabul etti ve buradan İran sınırına kadarki hattın bir karma komisyonca çizilmesini öngördü (1885).",
 IBS % (26, "Afghanistan–U.S.S.R. (rev. 1983)") + " · " + BAL, "g3-af-rusya-DEGISTI-amuderya-1873", ""),
("1875-01-07", [IH, NP], "Dhundwa tepeleri anlaşması — Hindistan–Nepal sınırında düzeltme", "antlasma", 2, 1, "YOK",
 "Anlaşma, Arrah Nuddee ile Bagowra Tal arasındaki Dhundwa tepeleri kesiminde sınırın düzlüğe inen alt çıkıntıların eteğinden geçeceğini belirledi.",
 AIT2, "d1923-ih-np-BILINMIYOR", ""),
# ---------------- G3 (1914-07-28 → 1878-07-13) ----------------
("1881-08-19", [QG, RU], "İli (St. Petersburg) Antlaşması onaylandı — Rus–Çin sınırı Tekes'ten Kara İrtiş'e yeniden çizildi", "antlasma", 4, 3, "E",
 "12 (24) Şubat 1881'de imzalanan antlaşmanın onayları 7 (19) Ağustos 1881'de değişildi. Çin, Zaysan ve Markakol çevresini Rusya'ya bıraktı; hat 1882–1884 protokolleriyle ayrıntılandırılıp kısmen işaretlendi.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-cn-BILINMIYOR-batialtay-rusya-qing", ""),
("1884-05-22", [QG, RU], "Novi-Margelan protokolü — Kaşgar kesiminde Rus–Çin sınırı ayrıntılandı", "antlasma", 2, 2, "E",
 "1864 Tarbagatay Protokolü'nün Kizil Jik Dawan'dan kuzeye uzanan hattı, 25 Kasım 1882 Kaşgar protokolünün ardından Novi-Margelan'da imzalanan protokolle ayrıntılandırıldı. IBS, protokol haritalarının hiçbirini bulamadığını belirtir.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-cn-BILINMIYOR-kirgiz-rusya-qing", ""),
("1885-09-10", [AF, RU], "Londra protokolü — Afgan–Rus sınırı Zülfikar'dan doğuya tarif edildi", "antlasma", 4, 3, "E",
 "İngiltere ile Rusya'nın Londra'da imzaladığı protokol, Afganistan'ın kuzeybatı sınırını Harirud üzerindeki Zülfikar'dan Amuderya'ya doğru tarif etti. Karma komisyon ilk sınır direğini 12 Kasım 1885'te dikti.",
 BAL + " · " + IBS % (26, "Afghanistan–U.S.S.R. (rev. 1983)"), "g3-af-rusya-BILINMIYOR-bati-1885", ""),
("1887-06-26", [QG, FC], "Pekin Sözleşmesi — Tonkin–Çin sınırı çizildi", "antlasma", 4, 3, "E",
 "Fransa ile Çin arasında imzalanan sözleşme, Tonkin Körfezi'nden Kara Irmak'a kadar Tonkin–Çin sınırını ayrıntılı olarak tarif etti; Paris meridyeni 105°43' doğusundaki adalar Çin'e, batısındakiler Annam'a bırakıldı. Laos kesimini belirlemedi.",
 IBS % (38, "China–Viet-Nam") + " · " + IBS % (34, "China–Laos"), "g3-qing-fc-BILINMIYOR-tonkin-1887", ""),
("1888-01-26", [AF, RU], "Kham Ab son protokolü — Afgan–Rus sınırının batı kesimi tamamlandı", "antlasma", 3, 2, "E",
 "22 Temmuz 1887 Petersburg uzlaşmasının ardından imzalanan son protokolle hat Amuderya kıyısındaki Kham Ab'a bağlandı. Zülfikar–Kham Ab arası 79 direkle işaretlenmiş oldu.",
 BAL + " · " + IBS % (26, "Afghanistan–U.S.S.R. (rev. 1983)") + " · " + AIT13, "d1923-af-sscb-bati", ""),
("1888-08-20", [JS, RU], "Seul Tumen Ticaret Nizamnamesi — Kore–Rusya ortak sınırı anıldı", "antlasma", 2, 1, "C",
 "Kore ile Rusya arasındaki Tumen ticaret nizamnamesi Tumen nehrinden 'ortak sınır' diye söz etti; hattı tanımlamadı. Çarlık hükümeti 1911'de bu sınırın durumunun belirsiz olduğunu Japonya'ya bildirecekti.",
 IBS % (59, "Korea–U.S.S.R."), "g3-joseon-rusya-BILINMIYOR-tumen", ""),
("1890-08-27", [IH, TB], "Kalküta Sözleşmesi onaylandı — Sikkim–Tibet sınırı su ayrımına bağlandı", "antlasma", 3, 2, "C",
 "17 Mart 1890'da İngiltere ile Çin arasında imzalanan sözleşmenin onayları Londra'da değişildi. 1. madde sınırı Gipmochi dağından başlayıp Teesta'ya akan suları ayıran sırta bağladı; 2. madde Sikkim üzerindeki İngiliz himayesini tanıdı. 1895 sınır komisyonu sonuç alamadı.",
 "Kalküta Sözleşmesi metni, BFSP vol. 82 s. 9–11 (tibetjustice.org) · Aitchison c. II (1909)", "d1923-ih-tb-BILINMIYOR-sikkim", ""),
("1891-06-20", [HD, EN], "Londra Sözleşmesi — Borneo'da Hollanda–İngiliz sınırı 4°10' ve 4°20' paralellerine bağlandı", "antlasma", 4, 3, "E",
 "İngiltere ile Hollanda, Borneo'daki sınırı doğu kıyısında 4°10' kuzey paraleliyle başlatıp 117° doğu – 4°20' kuzeye, oradan batıya paralel boyunca ve ana su ayrımı üzerinden çizdi; Sebatik adası paralel üzerinden bölündü.",
 IBS % (45, "Indonesia–Malaysia"), "g2-hd-en-sebatik-1891", ""),
("1891-06-20", [HD, SW], "Londra Sözleşmesi — Sarawak ile Hollanda Borneosu arası su ayrımına bağlandı", "antlasma", 3, 2, "C",
 "Aynı sözleşmenin 3. maddesi sınırı ana su ayrımı üzerinden Tanjung Datu'ya kadar uzattı. IBS'e göre su ayrımının yeri 1965'te bile yeterince bilinmiyordu.",
 IBS % (45, "Indonesia–Malaysia"), "d1923-hd-sw-suayrimi-1", ""),
("1893-10-03", [SI, FC], "Fransız–Siyam Barış Antlaşması — Siyam Mekong'un sol yakasından vazgeçti", "antlasma", 5, 4, "YOK",
 "Siyam, Mekong'un sol yakasındaki topraklar ile nehirdeki bütün adalar üzerindeki haklarından Fransa lehine vazgeçti. Böylece sınır Mekong'un Siyam kıyısı oldu; onaylar Şubat 1894'te değişildi.",
 IBS % (20, "Laos–Thailand"), "g3-si-fc-DEGISTI-laos-1893", ""),
("1893-11-12", [AF, IH], "Durand anlaşması — Afgan–Hint 'nüfuz alanları' hattı", "antlasma", 5, 4, "YOK",
 "Afgan Emiri ile İngiliz Hindistanı adına Durand'ın Kabil'de imzaladığı anlaşma (No. XII), Vahan'dan İran sınırına kadar ekli haritada gösterilen hattı iki tarafın nüfuz alanlarının sınırı saydı. Hat 1894–1896 komisyonlarıyla kesim kesim işaretlendi; harita Aitchison'da basılmamıştır.",
 AIT13 + " · " + BAL, "g1-af-ih-BILINMIYOR-durand-1893", ""),
("1893-12-20", [QG, RU], "Barlık protokolü — Tarbagatay kesiminde Rus–Çin sınırı düzeltildi", "antlasma", 2, 1, "E",
 "1864 Tarbagatay Protokolü ve 1881 antlaşmasıyla çizilen hattın Barlık dağları kesimi bir protokolle ayrıntılandırıldı.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-cn-BILINMIYOR-kazak-rusya-qing", ""),
("1894-08-23", [IH, QG], "Londra Konvansiyonu onaylandı — Burma–Çin sınırının güneyi tarif edildi", "antlasma", 3, 2, "YOK",
 "1 Mart 1894'te imzalanan İngiliz–Çin konvansiyonu Burma–Çin sınırını 25°35' kuzeydeki 'yüksek konik tepe'nin güneyinde tarif etti; kuzeyini ileriye bıraktı. Hat 1897'de değiştirildi.",
 IBS % (42, "Burma–China"), "g3-ih-cn-BILINMIYOR-guney-1894", ""),
("1894-10-17", [SI, IH], "İngiliz–Siyam sınır haritaları değişildi — kuzey Burma–Siyam sınırı işaretlendi", "antlasma", 3, 2, "E",
 "1889–1893 İngiliz tespiti ve 1893'te başlayan karma komisyon işaretlemesinin sonunda, sınırı gösteren imzalı ve mühürlü üç paftalık haritalar değişildi. Mae Sai kesiminde sınır nehrin ortasıydı.",
 IBS % (63, "Burma–Thailand"), "d1923-si-ih-1", ""),
("1895-03-11", [AF, RU], "İngiliz–Rus Pamir notaları — Afgan–Rus sınırı Zorkul'a ve Pamir'e uzatıldı", "antlasma", 4, 3, "E",
 "İngiltere ile Rusya arasındaki notalar Pence ve Pamir nehirlerini ve Zorkul gölünün doğusunu sınır saydı. 1895 yazında Pamir Komisyonu 12 direk dikti; Emir 1894'te Şugnan ve Roşan'dan, Buhara Ekim 1896'da Darvaz'dan çekildi.",
 AIT13 + " · " + IBS % (26, "Afghanistan–U.S.S.R. (rev. 1983)"), "d1923-af-sscb-pamir", ""),
("1895-03-11", [AF, QG], "Pamir notaları — Vahan koridorunun doğu ucu Çin sınırına dayandı", "antlasma", 3, 2, "YOK",
 "1895 Pamir hattı Povalo-Şveykovski zirvesinde 'Çin topraklarının sınırına' ulaştı; notaların 3. maddesi Çin ile ileride bir anlaşma öngördü. O anlaşma yapılmadı; Afgan–Çin sınırı 1963'e kadar haritalardaki 'geleneksel' çizgi olarak kaldı.",
 AIT13 + " · " + IBS % (89, "Afghanistan–China"), "g3-af-cn-FIILI-vahan-qing", ""),
("1895-03-11", [QG, RU], "Pamir'de Rus–Çin sınırı antlaşmasız kaldı", "antlasma", 3, 2, "YOK",
 "Kizil Jik Dawan'ın güneyinde Rus–Çin sınırını tarif eden bir antlaşma yoktur; hat 1895 İngiliz–Rus Pamir anlaşmasından doğdu ve Çin'e danışılmadan çizildi.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g3-sscb-cn-FIILI-pamir-rusya-qing", ""),
("1896-01-15", [IH, FC], "İngiliz–Fransız Deklarasyonu — Mekong Burma–Laos sınırı oldu", "antlasma", 4, 3, "E",
 "İngiltere ile Fransa, Mekong'un talvegini Çin üçlü noktasından Nam Kok ağzına kadar iki tarafın topraklarının ya da nüfuz alanlarının sınırı ilan etti (3. madde).",
 IBS % (33, "Burma–Laos"), "d1923-ih-fc-mekong", ""),
("1896-08-07", [QG, FC], "1895 Tamamlayıcı Sözleşme onaylandı — Tonkin ve Laos'un Çin sınırı yeniden çizildi", "antlasma", 3, 2, "E",
 "20 Haziran 1895'te imzalanan Fransız–Çin tamamlayıcı sözleşmesi 1887 hattının Yünnan kesimlerini değiştirdi ve Laos–Çin sınırını ilk kez su ayrımları ve Muong-mang toprağı üzerinden belirledi; onaylar 7 Ağustos 1896'da değişildi.",
 IBS % (38, "China–Viet-Nam") + " · " + IBS % (34, "China–Laos"), "g3-cn-fc-BILINMIYOR-tonkin-qing", ""),
("1897-06-05", [IH, QG], "Peking Anlaşması onaylandı — Burma–Çin sınırının güneyi yeniden çizildi", "antlasma", 4, 3, "E",
 "4 Şubat 1897'de imzalanan anlaşma 1894 konvansiyonunu değiştirerek güney sınırını 63 yıl sürecek biçimde kurdu; Namwan toprağı Çin egemenliğinde kalarak İngiltere'ye daimî kiraya verildi. Karma komisyon 1897–1900'de işaretledi; Wa eyaletleri kesiminde anlaşma sağlanamadı.",
 IBS % (42, "Burma–China"), "g3-ih-cn-guney1-1-qing", ""),
("1899-03-14", [CK, QG], "Macdonald hattı notası — Keşmir–Sincan sınırı önerildi, Çin kabul etmedi", "diplomasi", 3, 2, "YOK",
 "İngiltere, Hunza ile Sincan arasında Karakurum su ayrımına dayanan bir sınır hattını Çin'e bildirdi. Çin hattı hiç kabul etmedi; 1899–1947 resmî haritaları sınırı çok farklı gösterdi.",
 IBS % (85, "China–Pakistan"), "g3-ck-cn-FIILI-karakurum-qing", ""),
("1899-03-19", [EN, QG], "Hong Kong Yeni Toprakları'nın kara sınırı tespit edildi", "antlasma", 3, 2, "YOK",
 "9 Haziran 1898 Peking Konvansiyonu ile 99 yıllığına kiralanan Yeni Toprakların kara sınırı 1899'da tespit edildi; Sham Chun nehrinin kuzey kıyısı sınır sayıldı. Tespitin günü IBS'te çelişkilidir (başlıkta 14, metinde 19 Mart).",
 IBS % (13, "China–Hong Kong"), "g3-en-cn-BILINMIYOR-hongkong-qing", ""),
("1904-02-13", [SI, FC], "Fransız–Siyam Sözleşmesi — Mekong'un sağ yakasında yeni sınır", "antlasma", 4, 3, "C",
 "Sözleşme Luang Prabang karşısında Nam Kop havzasının batısındaki sırtı ve güneyde Dangrek su ayrımını sınır yaptı; 29 Haziran 1904 anlaşması kuzey ucu Nam Heung Nga'ya kaydırdı. Onay günü kaynaklarda 7 ya da 9 Aralık 1904 diye çelişkilidir.",
 IBS % (20, "Laos–Thailand") + " · " + IBS % (40, "Cambodia–Thailand"), "g3-si-fc-kara-1904-1", ""),
("1905-09-05", [JP, RU], "Portsmouth Antlaşması — Sahalin 50. paralelden bölündü", "antlasma", 5, 5, "E",
 "Rusya ile Japonya arasındaki barış antlaşmasının 9. maddesi 50. kuzey paralelini Sahalin'de Japonya'nın kuzey sınırı yaptı; ek madde karma sınır komisyonu kurdu. Komisyon 1906–1907'de dört astronomik ve on yedi ara taş dikti.",
 "Portsmouth Antlaşması metni (worldjpn.net, Tokyo Üniv.) · Nakagiri, NAOJ Arşiv Bülteni no. 288", "g2-jp-sscb-sahalin-rusya", ""),
("1907-03-23", [SI, FC], "Fransız–Siyam Antlaşması — Kamboçya–Siyam sınırı yeniden çizildi", "antlasma", 5, 3, "C",
 "Antlaşma ve protokolü Kamboçya–Siyam sınırını Koh Kong kıyısından Dangrek'e kadar yeniden çizdi (Battambang'ın batı sınırını izleyerek), 1904 çizgisinin Büyük Göl'ün batısı ve kuzeybatısında kalan kısmını geçersiz kıldı ve Laos kesimlerini teyit etti. Karma komisyon 1907–1909 haritalarını hazırladı.",
 IBS % (40, "Cambodia–Thailand") + " · " + IBS % (20, "Laos–Thailand"), "d1923-si-fc-kambocya", ""),
("1908-08-29", [HD, PT], "1904 Timor Sözleşmesi yürürlüğe girdi", "antlasma", 3, 2, "E",
 "1 Ekim 1904'te La Haye'de imzalanan sözleşmenin onayları değişildi. Sözleşme Maucatar'ın Portekiz'e, Noimuti'nin Hollanda'ya devrini ve Oecussi ile orta Timor sınırlarını tarif etti; devir, sınır tespit belgelerinin imzasına bağlandı (4. madde).",
 RIAA + " · " + IBRU, "g2-hd-pt-orta-1908", ""),
("1909-07-09", [SI, MA], "Bangkok Antlaşması onaylandı — Siyam–Malaya sınırı çizildi", "antlasma", 5, 3, "C",
 "10 Mart 1909'da imzalanan İngiliz–Siyam antlaşmasının onayları Londra'da değişildi. Birinci ek Siyam–Malaya sınırını Perlis haliçinden Golok nehrine kadar tarif etti.",
 IBS % (57, "Malaysia–Thailand"), "d1923-si-ma", ""),
("1909-09-04", [JS, QG], "Gando Anlaşması — Kore–Çin sınırı Tumen'e bağlandı", "antlasma", 3, 2, "YOK",
 "Japonya ile Çin'in Pekin'de imzaladığı anlaşmanın 1. maddesi Tumen nehrini Çin ile Kore arasındaki sınır saydı ve Paektu dağındaki kaynaklar arasında hattı 1713 sınır anıtından başlattı; hangi derenin kastedildiği tartışmalı kaldı.",
 IBS % (17, "China–Korea"), "g3-joseon-cn-BILINMIYOR-yalu-tumen-qing", ""),
("1913-11-05", [CN, MN], "Rus–Çin Pekin Deklarasyonu — Dış Moğolistan'ın sınırları konferansa bırakıldı", "antlasma", 4, 3, "YOK",
 "Rusya ile Çin, Dış Moğolistan'ın Çin metbuluğunda özerkliğini kabul eden deklarasyonda sınırları açıkça belirsiz bıraktı ve Kobdo–Altay sınırını sonraki konferanslara havale etti.",
 IBS % (173, "China–Mongolia"), "g2-cn-mn-FIILI-1913", ""),
("1914-06-25", [HD, PT], "Timor sınırı hakem kararı — Oecussi'nin doğu sınırı belirlendi", "antlasma", 3, 2, "E",
 "3 Nisan 1913 tahkim sözleşmesiyle kurulan hakemlik Paris'te kararını verdi: 1904 sözleşmesinin 3. madde 10. bendi Hollanda tezine göre yorumlandı ve sınırın 1:50.000 ölçekli harita üzerinden ölçülmesi emredildi.",
 RIAA + " · " + IBRU, "g2-hd-pt-oecussi-1914", ""),
("1914-07-03", [IH, TB], "Simla Sözleşmesi — İngiltere ve Tibet McMahon hattını imzaladı, Çin imzalamadı", "antlasma", 4, 3, "YOK",
 "Simla'da parafe edilen sözleşmenin 9. maddesi sınırları ekli haritadaki hatlara bağladı. Aynı gün McMahon ile Lonchen Shatra metni iki hükümet için bağlayıcı ilan etti. Resmî 1929 Aitchison derlemesi yalnız sözleşmenin parafe edildiğini yazar ve hattı anmaz.",
 "Simla Sözleşmesi metni (tibetjustice.org; FO 535/17 no. 231) · Aitchison c. XIV (1929)", "d1923-ih-tb-FIILI-mcmahon", ""),
# ---------------- G2 (1918-11-11 → 1914-07-28) ----------------
("1915-06-07", [MN, CN], "Kiahta Üçlü Anlaşması — Dış Moğolistan'ın sınırı sancak sınırlarına bağlandı", "antlasma", 4, 3, "YOK",
 "Rusya, Çin ve Dış Moğolistan arasında Kiahta'da imzalanan anlaşma Dış Moğolistan'ı Çin metbuluğu altında özerk saydı. 11. madde sınırı yalnız sancak ve aymak sınırlarına atıfla genel olarak tarif etti ve bir karma komisyon öngördü; bu komisyon hiç kurulmadı. Hat 1962–1964'e kadar hukuken çizilmemiş kaldı.",
 IBS % (173, "China–Mongolia") + " — md. XI", "d1923-cn-mn-FIILI", ""),
("1915-06-12", [CN, RU], "Horgos nehri boyunca Rus–Çin sınırlandırma protokolü", "antlasma", 2, 1, "C",
 "1881 İli Antlaşması'nın Horgos nehrini ayırıcı hat sayan hükmü, nehrin dağdan çıktığı noktadan İli'ye kadar bir protokolle sınırlandırıldı. Protokol nehir içindeki hattın talveg mi orta hat mı olduğunu belirtmiyor; işaretleme de anılmıyor.",
 IBS % (64, "China–U.S.S.R. (rev. 1978)"), "g2-sscb-cn-BILINMIYOR-kazak-rusya", ""),
("1915-09-28", [HD, EN], "Londra Anlaşması — Borneo'da Hollanda–Kuzey Borneo sınırı işaretlendi", "antlasma", 3, 2, "E",
 "İngiltere ile Hollanda, 17 Şubat 1913 tarihli Tawao ortak komisyon raporunu kabul etti. 1891 hattı yerinde tespit edildi: Sebatik adasının iki kıyısına iki, 4°20' paraleli üzerindeki nehir geçişlerine dört sütun dikildi. Kuzey Borneo o tarihte İngiliz himayesinde şirket yönetimindeydi.",
 IBS % (45, "Indonesia–Malaysia"), "d1923-hd-en-sebatik", ""),
("1916-08-17", [HD, PT], "Timor sınırını düzenleyen protokol — Maucatar ve Noimuti değişimi", "antlasma", 3, 2, "E",
 "1904 sözleşmesinin 4. maddesi Maucatar ve Noimuti devrini sınır tespit belgelerinin imzasına bağlıyordu. IBRU kronolojisine göre sınırları düzenleyen protokol 17 Ağustos 1916'da La Haye'de imzalandı; bu günün dayanağı tek kaynaktır ve tablo düzeni bozuk okunmuştur.",
 RIAA + " (md. 4) · " + IBRU + ", kronoloji tablosu", "d1923-hd-pt-orta", ""),
# ---------------- G1 (1923-10-29 → 1918-11-11) ----------------
("1919-08-08", [AF, IH], "Ravalpindi Antlaşması — Afganistan Hindistan sınırını kabul etti", "antlasma", 4, 3, "YOK",
 "Ravalpindi'de imzalanan İngiliz–Afgan antlaşmasının 5. maddesiyle Afganistan, merhum Emir'in kabul ettiği Hindistan sınırını kabul etti. Hayber'in batısında işaretsiz kalan kesimi bir İngiliz komisyonu 23 Ağustos – 2 Eylül 1919'da çizdi. Balland'a göre 'Hint-Afgan sınırı' ifadesi ilk kez bu dönemin metinlerinde geçer.",
 AIT13 + " · " + BAL, "g1-af-ih-BILINMIYOR-durand-1919", ""),
("1920-01-01", [JP, SV], "Japonya kuzey Sahalin'i işgal etti", "isgal", 3, 2, "D",
 "Japonya, Sahalin'in 1905'ten beri Rusya'da kalan kuzey yarısını Temmuz 1920'de işgal etti (gün kaynakta yok; tarih alanı yalnız yılı taşır). Hukukî sınır 50. paralel olarak kaldı, ama işgal süresince iki yakası da Japon elindeydi. 20 Ocak 1925 Pekin Sözleşmesi çekilmeyi en geç 15 Mayıs 1925'e bağladı.",
 "FRUS 1921 vol. II doc. 698 · Pekin Temel Sözleşmesi 20.01.1925 Protokol A md. III (LNTS vol. 34)", "d1923-jp-sscb-sahalin", "Aleksandrovsk (Kuzey Sahalin)"),
("1922-02-06", [AF, IH], "Kabil Antlaşması yürürlükte — Torham Afganistan'a geçti", "antlasma", 4, 3, "YOK",
 "22 Kasım 1921'de imzalanan Kabil Antlaşması'nın onayları 6 Şubat 1922'de değişildi. 2. madde ve Ek I 1919 hattını teyit ederken Torham sırtını ve Kabil nehri yatağının Shilman Khwala Banda – Palosai arasını Afganistan'a bıraktı; yeni hat 4 Aralık 1921'de yerinde hizalanmıştı.",
 AIT13 + " · " + BAL, "d1923-af-ih-BILINMIYOR-durand", ""),
]

BAS = """// =====================================================================
// SINIR KRONOLOJİSİ — ASYA (D5-ASYA) · geriye sarma G1–G7 (1923-10-29 → 1606-11-11)
// =====================================================================
// 🔴 ÜRETİLMİŞ DOSYA — elle düzenleme; üretici denetim/ARAC-D5-ASYA-KRONOLOJI-0916.py
// window.KRONOLOJI_SINIR_ASYA — şartname oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Ek alanlar: taraflar:[a,b] (sınırın iki tarafı; devletler: aynı) · sinir_kaydi (data/d_sinirlar_asya.js) · sinif.
// Hanedan/devlet geçişleri (1910 Kore ilhakı · 1911 Çin · 1911 Moğolistan · 1917 Rusya) SINIR olayı değildir, yazılmadı.
// index.html'e koordinatör bağlar. Sınav: node denetim/ARAC-D5-ASYA-SINA-0916.js

window.KRONOLOJI_SINIR_ASYA = [
"""
satir = []
for t, tr, b, tur, onem, dunya, sinif, d, kaynak, kayit, yer in sorted(M, key=lambda m: m[0]):
    o = {"t": t, "devlet": tr[0], "taraflar": tr, "devletler": tr, "b": b, "tur": tur, "onem": onem, "dunya": dunya,
         "kapsam": "dis", "yer_id": yer}
    if not yer:
        o["kapsam_genis"] = True
    o["etiket"] = ["sinir", "diplomasi" if tur != "isgal" else "isgal"] + tr + ["konu-siyasi", "sinif-" + sinif]
    o.update({"d": d, "kaynak": kaynak, "sinif": sinif, "sinir_kaydi": kayit})
    satir.append(json.dumps(o, ensure_ascii=False, separators=(",", ":")))
with io.open("data/kronoloji_sinir_asya.js", "w", encoding="utf-8", newline="\n") as f:
    f.write(BAS + ",\n".join(satir) + "\n];\n")
print("madde:", len(M))

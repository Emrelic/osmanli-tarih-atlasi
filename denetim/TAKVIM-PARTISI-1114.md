# TAKVIM-PARTISI-1114 — 1582-10-15 sonrasi Julyen (eski takvim) gunu kalmis olabilecek kayitlar (HAZIRLIK, veri degismedi)

Tarih: 14 Kasim 2026 · dal: umit-1113-takvim · taban: origin/umit-1113-karlofca-kalas (+ origin/main antlasma_madde_* dosyalari ayri okundu) · KURAL: CLAUDE.md "Jülyen/Gregoryen siniri" (Emre, 4 Kasim 2026).

Bu dosya yalniz hazirliktir; hicbir data/ dosyasina yazilmadi, denetle/paketle/surum_damgala kosturulmadi.

## 0. Yontem ve JDN dogrulamasi

- Tarama: data/olaylar*.js, kronoloji*.js (kronoloji_sinir*, kronoloji_cok* dahil), ekokuma_antlasma*.js, antlasma_haritalari.js, savaslar.js, devletler.js, padisahlar.js, kisiler.js yuklendi (21.774 gun-hassasiyetli kayit), her kaydin TUM metin alanlari "Julyen/O.S./N.S./eski takvim/eski uslup/vieux style/Rus takvimi/(JÜL" ifadelerine tarandi (>=1582-10-15: 324 aday kayit, 287 tanesi 1926 oncesi). Her adayda "Julyen D Ay" / "D Ay (Julyen)" kaliplari cikarilip JDN ile Gregoryene cevrildi ve atlas t ile karsilastirildi (ATLAS=JULYEN / ZATEN-GREG / CELISKI / SAYI-YOK), kalan 116 kayit tek tek okundu.
- 34 antlasma_madde_* dosyasi (HEAD) + origin/main'deki 20 yeni dosya (Yedi Ada, Edirne 1829, Akkirman, Bukres 1812, Hunkar Iskelesi, Londra 1830/1840, Iskenderiye, Paris 1802, Kal a-i Sultaniyye, Rus/Ingiliz/Iki Sicilya 1799, Yergogu, Prusya 1790, Kibris, Balta Limani, Arta-Volos, ABD, Erzurum 1823) kok `t` + `kaynak` metni tarandi. NOT: adimlar[] icinde gun alani YOKTUR (adimlar yalniz ozet/bolum/yer/konu tasir); gun yalniz kok `t` ve ana kronoloji maddesindedir.
- Onceki taramalar birlestirildi: denetim/TAKVIM-1104/ (Rus 162 satir, Yunan 180, Hindistan 63; yalniz TARIH_DUZELT/OS_DUZELT satirlari, canlilik yeniden olculdu) ve denetim/TAKVIM-JULYEN-LISTE-1113.md (Britanya/Irlanda/somurge; bu listeye SAYI olarak eklenmedi).

### Julyen -> Gregoryen farki (JDN ile dogrulandi; Python `arac/gun.py` ile ayni sayac, proleptik Gregoryen)

Formul: JDN_G = d + floor((153m'+2)/5) + 365y' + floor(y'/4) - floor(y'/100) + floor(y'/400) - 32045; JDN_J = ... - 32083 (a=floor((14-m)/12), y'=y+4800-a, m'=m+12a-3). Sinav (hepsi beklenenle ayni): 1779-03-10 J = 1779-03-21 G (+11) · 1711-07-12 J = 1711-07-23 G (+11) · 1918-01-31 J = 1918-02-13 G (+13) · 1582-10-05 J = 1582-10-15 G (0 sinir) · 1800-03-21 J = 1800-04-02 G (+12) · 1700-02-18 J = 1700-02-28 G (+10).

Sinir DUZELTMESI: fark Julyen ETIKET tarihine gore degisir ve gecis Julyen 29 Subat gunudur (Gregoryen takvimde yok): J 1700-02-28 = G 1700-03-10 (+10), J 1700-02-29 = G 03-11 (+11), J 1700-03-01 = G 03-12; J 1800-02-29 = G 03-12 (+12); J 1900-02-29 = G 03-13 (+13), J 1900-03-01 = G 03-14. Yani gorevdeki tablo ("1700-03-01.. +11 / 1800-03-01.. +12 / 1900-03-01.. +13") Julyen gunleri icin dogru, tek fark Julyen 29 Subat 1700/1800/1900 gunleridir (+11/+12/+13 uygulanir). Gregoryen gun uzerinden okunursa gecis G 1700-03-11, 1800-03-12, 1900-03-13 olur. Mevcut kayitlarda bu pencerede tarih YOK (denetlendi).

Surekli farklar: 1582-10-05..1700-02-28 J: +10 · 1700-02-29..1800-02-28: +11 · 1800-02-29..1900-02-28: +12 · 1900-02-29..1918-01-31: +13 (Sovyet Rusya 1918-02-01 J = 14 Subat G; Bulgaristan 1916-04-01/14, Romanya/Sirbistan 1919, Yunanistan 1923-02-16 J = 03-01 G; Isvec 1700-1712 arasi "isvec takvimi" ve 1753 gecisi ayri: Isvec 1712-1753 Julyen, 1700-02-29..1712-02-30 "Isvec takvimi" = Gregoryen -1 gun; Ingiltere 1752-09-02 J = 09-14 G).

## 1. Ozet sayilar

| Sinif | Adet | Not |
|---|---|---|
| AÇIK (atlas gunu Julyen kalmis, kaynak Julyen gunu verdigi icin cevrilebilir) | **48 satir** | tek tek listeli (bolum 2); kayit sayisi 1 satir = 1 madde; Stolbovo 3 madde, 1725-01-28 iki ayri madde |
| BELİRSİZ (takvim belli degil / kaynaklar celisiyor / onerilen gun Julyen farkina uymuyor) | **35** | bolum 3 (+ asagidaki 613 notsuz kayit) |
| ZATEN GREGORYEN (Julyen gunu beyanli, atlas t = Gregoryen karsiligi) | **193** | 171 ana kronoloji/olay kaydi (kw taramasi) + 22 antlasma_madde kok `t` (bolum 4) |
| ZATEN GREGORYEN, CIKARIM (takvim beyani yok; Julyen taraf icermiyor / Gregoryen cagi) | 31 antlasma_madde dosyasi | bolum 4 |
| Denetlenmemis evren | 613 | Julyen takvimli devletlerin (Rus/Isvec/Sirp/Karadag/Romen/Bulgar/Yunan/Gurcu/Ukrayna/Kirim/Lehistan sinir) gun-hassasiyetli kronoloji maddesi, 1582-10-15..1923-03-01, HICBIR takvim notu tasimiyor (713 kayittan 100 notlu). Rus tarafi TAKVIM-1104 ile 162 satirda tarandi (yukaridaki AÇIK), kalan 5 grup ilk kez burada sayiliyor; her biri BELIRSIZ sayilir |

Ana bulgu (iki yon): antlasma_madde_* kok `t` degerleri Gregoryen ve beyanli (22/22 Julyen-taraf antlasmada) — madde dosyalarinda acik yok, TEK ISTISNA yediada1800 (kok t=1800-03-21 Julyen; dosya kendisi "2 Nisan ONERILIR" diyor, KASA'ya birakilmis). Acik asil ANA KRONOLOJI maddelerinde: aynalikavak madde dosyasi 1779-03-21 iken ana madde (olaylar_ek5) 1779-03-10 Julyen gunu; Yedi Ada ana maddesi + devletler.js septinsular 1800-03-21; Stolbovo (3 madde + 4 yerlesim kirilmasi) 1617-02-27.

## 2. AÇIK kayitlar (tarih sirasi)

Sutunlar: id · kayit (dosya + baslik) · mevcut atlas gunu · kaynak notu · onerilen Gregoryen (+fark gun) · ayni gunde kirilmasi olan yerlesim sayisi (yerlesimler*.js d:/s:/kd: f/t degeri tam o gun) · anahtar etkisi (ceviri_*_olay_*.js `<DIZI>:<t>:<idx>` anahtari kac dilde + olay_taraf `<t>|<b>` anahtari) · grup (YENI = bu tarama; RUS1104/YUNAN1104 = TAKVIM-1104 TARIH_DUZELT/OS_DUZELT, canlilik + beklenen fark yeniden olculdu).

| id | kayit | atlas gunu | kaynak | Gregoryen onerisi | ayni gun kirilma | anahtar etkisi | grup |
|---|---|---|---|---|---|---|---|
| TK-RUS-002 | kronoloji_rusya `Moskova Patrikliği kuruldu` | 1589-01-26 | 26 января (5 февраля) 1589 г. Константинопольский патриарх Иеремия II с сонмом епископов совершил интронизацию | 1589-02-05 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| Y-01 | olaylar_2s_0919 `Tsaritsyn kalesi ilk kez belgede anildi` | 1589-07-02 | kaynak alani: "2 iyulya 1589 g." GUN (Julyen; Miladi 12 Temmuz) - atlas Julyen gunu yazmis; ic_not yok, kaynak | 1589-07-12 (+10) | 1: Tsaritsyn | 5 dil + 1 taraf | YENI |
| TK-RUS-003 | kronoloji_rusya `\"Yasak Yıllar\" kararnamesi — köylü kaçışının y` | 1597-11-24 | 24 ноября (4 декабря) 1597 г. вышел Указ царя Фёдора Иоанновича об «урочных летах» - kaynak O.S. 24 Kasim; N.S | 1597-12-04 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-004 | kronoloji_rusya `Rurik hanedanı sona erdi, Boris Godunov çar seçi` | 1598-01-07 | Фёдор Иоаннович скончался 7 (17) января 1598 г. и был погребён в Архангельском соборе Московского Кремля. С ни | 1598-01-17 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| Y-07a | kronoloji_isvec `Stolbova Antlaşması — Rusya'nın Baltık` | 1617-02-27 | Stolbovo 27 Subat (Julyen) = 9 Mart Gregoryen (prlib.ru 27 fevralya (9 marta) 1617; TAKVIM-1104 TK-RUS-009); a | 1617-03-09 (+10) | 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg) | 0 dil + 0 taraf | YENI |
| Y-07b | olaylar_ek16 `Stolbova Antlaşması — Rusya Baltık` | 1617-02-27 | Stolbovo 27 Subat (Julyen) = 9 Mart Gregoryen (prlib.ru 27 fevralya (9 marta) 1617; TAKVIM-1104 TK-RUS-009); a | 1617-03-09 (+10) | 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg) | 6 dil + 1 taraf | YENI |
| Y-07c | olaylar_ek16 `Stolbovo Antlaşması — Rusya İnger` | 1617-02-27 | Stolbovo 27 Subat (Julyen) = 9 Mart Gregoryen (prlib.ru 27 fevralya (9 marta) 1617; TAKVIM-1104 TK-RUS-009); a | 1617-03-09 (+10) | 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg) | 6 dil + 1 taraf | YENI |
| Y-02 | kronoloji_cok_rusya `Tambov kalesi kuruldu` | 1636-04-17 | gun: "17 Nisan 1636 (Julyen; kaynak Gregoryen karsiligini 27 Nisan verir)"; atlas t=Julyen gunu | 1636-04-27 (+10) | 1: Tambov | 0 dil + 0 taraf | YENI |
| TK-RUS-011 | kronoloji_rusya `I. Aleksey (\"Sessiz\") tahta çıktı` | 1645-07-13 | Михаил Фёдорович Романов скончался 23 июля 1645 года в Москве, на следующий день после своего 49-го дня рожден | 1645-07-23 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-012 | kronoloji_rusya `Sobornoye Ulojenie — serfliğin hukuki olarak kal` | 1649-01-29 | 29 января (8 февраля) 1649 г. Земский собор принял новый свод законов Российского государства — Соборное уложе | 1649-02-08 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-019 | kronoloji_rusya `Streltsı isyanı — Sofya naipliği başladı` | 1682-05-15 | 15 (25) мая 1682 г. в Москве начался стрелецкий бунт, в результате которого у власти оказалась царевна Софья - | 1682-05-25 (+10) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-028 | kronoloji_rusya `İlk Rus gazetesi \"Vedomosti\" yayımlandı` | 1703-01-02 | 2 (13) января 1703 г. в Москве в свет вышел первый номер первой русской газеты под заглавием — «Ведомости о во | 1703-01-13 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-039 | kronoloji_rusya `Rusya İmparatorluğu ilan edildi` | 1721-10-22 | 22 октября (2 ноября) 1721 года в ознаменование победы России в Северной войне (1700–1721) царь Пётр I принял  | 1721-11-02 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-040 | kronoloji_rusya `Rütbeler Cetveli (Tabel o Rangah) yayımlandı` | 1722-01-24 | 24 января (4 февраля) 1722 г. императором Петром I был утверждён закон о порядке государственной службы в Росс | 1722-02-04 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-043 | kronoloji_rusya `Bilimler Akademisi kuruldu` | 1724-01-28 | 28 января (8 февраля) 1724 г. указом Правительствующего Сената был введён в действие именной указ императора П | 1724-02-08 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-044 | kronoloji_rusya `I. Petro öldü` | 1725-01-28 | 28 января (10 февраля) 1725 г. первый российский император скончался и был похоронен в Петропавловском соборе  | 1725-02-08 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-045 | kronoloji_rusya `I. Petro öldü` | 1725-01-28 | 28 января (10 февраля) 1725 г. первый российский император скончался ... Его преемницей стала жена, Екатерина  | 1725-02-08 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| Y-03 | olaylar_2s_0919 `Temernik gumrugu (Elizaveta fermani)` | 1749-12-15 | kaynak alani: "15 dekabrya 1749 g." GUN (Julyen), veriyle birebir - atlas Julyen | 1749-12-26 (+11) | 1: Rostov (Don) | 5 dil + 1 taraf | YENI |
| TK-RUS-060 | kronoloji_rusya `İmparatorluk Güzel Sanatlar Akademisi kuruldu` | 1757-11-06 | 6 (17) ноября 1757 г. в Петербурге, указом Сената была основана Академия художеств — kaynak O.S. 6 Kasim; N.S. | 1757-11-17 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-062 | kronoloji_rusya `Soyluların Özgürlüğü Fermanı` | 1762-02-18 | 18 февраля (1 марта) 1762 г. Пётр III издал Манифест «О даровании вольности и свободы всему российскому дворян | 1762-03-01 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-073 | kronoloji_rusya `Pugaçev idam edildi, valilik reformu yapıldı` | 1775-01-10 | 1775 год. 21 января (10 января ст.ст.) на Болотной площади в Москве был казнен Емельян Пугачев. — kaynak O.S.  | 1775-01-21 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| Y-04 | olaylar_ek5 `Aynalikavak Tenkihnamesi` | 1779-03-10 | antlasma_madde_aynalikavak.js kaynak alani: Noradounghian 10 mars = Julyen; Gregoryen 21 Mart (hicri 3 Rebiule | 1779-03-21 (+11) | - | 6 dil + 0 taraf | YENI |
| TK-RUS-075 | kronoloji_rusya `Soylulara ve Şehirlere Beratlar` | 1785-04-21 | 21 апреля (2 мая) 1785 г. Екатерина II подписала два законодательных акта: — O.S. 21 Nisan; N.S. 2 Mayis; atla | 1785-05-02 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-080 | kronoloji_rusya `Pavel, veraset kanununu değiştirdi` | 1797-04-05 | 5 (16) апреля 1797 г., в день своего коронования, император Павел I обнародовал Акт о престолонаследии, — O.S. | 1797-04-16 (+11) | - | 0 dil + 0 taraf | RUS1104 |
| Y-05 | olaylar_ek17 `Yedi Ada Cumhuriyeti kuruldu (12 maddelik soz.)` | 1800-03-21 | TDV yedi-ada-cumhuriyeti 21 Mart 1800; commit fc6cdbd91 notu: 21 Mart Rus Julyen = 2 Nisan Gregoryen; ic_not_d | 1800-04-02 (+12) | 7: Çuha Adası (Kythira), Korfu, Ayamavra (Lefkada), Kefalonya +3 | 5 dil + 0 taraf | YENI |
| YUN-126B | olaylar `Yunan İsyanı başladı` | 1821-03-25 | 25 March 1821 Julian = 6 April Gregorian (Annunciation) | 1821-04-06 (+12) | 19: Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras) +15 | 7 dil + 0 taraf | YUNAN1104 |
| YUN-174B | savaslar `Mora isyanı` | 1821-03-25 | 25 March (Julian)=6 April | 1821-04-06 (+12) | 19: Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras) +15 | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-095 | kronoloji_rusya `` | 1825-12-14 | 14 (26) декабря 1825 года в Санкт-Петербурге на Сенатской площади произошло вооружённое выступление декабристо | 1825-12-26 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-161B | olaylar_ek6 `Atina'nın yeni Yunan devletine bırakılması` | 1833-03-31 | Osman Efendi surrendered Acropolis 31 March 1833 | 1833-04-12 (+12) | 1: Atina | 6 dil + 0 taraf | YUNAN1104 |
| YUN-54A | kronoloji_balkan `Atina'nın başkent ilanı` | 1834-09-18 | 18/30 September 1834 | 1834-09-30 (+12) | - | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-105 | kronoloji_rusya `Sankt-Peterburg – Tsarskoye Selo demiryolu açıld` | 1837-10-30 | 30 октября (11 ноября) 1837 г. в Санкт-Петербурге состоялось торжественное открытие первой в России — O.S. 30  | 1837-11-11 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-56A | kronoloji_balkan `Anayasa ayaklanması` | 1843-09-03 | 3 September 1843 | 1843-09-15 (+12) | - | 0 dil + 0 taraf | YUNAN1104 |
| YUN-58A | kronoloji_balkan `Patrikhane tomosu` | 1850-06-29 | dated 29 June 1850 | 1850-07-11 (+12) | - | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-109 | kronoloji_rusya `I. Nikolay öldü, II. Aleksandr tahta çıktı` | 1855-02-18 | Император Николай I скончался 18 февраля (2 марта) 1855 г. в Санкт-Петербурге, похоронен в Петропавловском соб | 1855-03-02 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-113 | kronoloji_rusya `` | 1861-02-19 | 19 февраля (3 марта) 1861 г. в Петербурге император Александр II подписал манифест «О всемилостивейшем дарован | 1861-03-03 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-59A | kronoloji_balkan `Otto'nun tahttan indirilmesi` | 1862-10-10 | On the night of 10 October 1862 | 1862-10-22 (+12) | - | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-116 | kronoloji_rusya `Adlî reform — bağımsız mahkemeler kuruldu` | 1864-11-20 | 20 ноября (2 декабря) 1864 г. император Александр II ввёл в действие одновременно четыре новых законодательных | 1864-12-02 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-123 | kronoloji_rusya `Hive Hanlığı himayeye alındı` | 1873-08-12 | 12 (24) августа 1873 г. в летней резиденции хивинского хана — Саду Гендемиан — туркестанский генерал-губернато | 1873-08-24 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-63A | kronoloji_balkan `Trikopis'in iflası ilanı` | 1893-12-10 | 10/12/1893 | 1893-12-22 (+12) | - | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-139 | kronoloji_rusya `İlk genel nüfus sayımı yapıldı` | 1897-01-28 | Первая всеобщая перепись населения, охватившая всю территорию Российской империи, кроме Финляндии, проводилась | 1897-02-09 (+12) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-69A | kronoloji_balkan `Evangelika (kanlı Perşembe)` | 1901-11-08 | 8 November 1901 (Old Style) | 1901-11-21 (+13) | - | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-148 | kronoloji_rusya `` | 1905-10-17 | 17 (30) октября 1905 г. император Николай II подписал Высочайший Манифест «Об усовершенствовании государственн | 1905-10-30 (+13) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-149 | kronoloji_rusya `İlk Devlet Duması toplandı` | 1906-04-27 | 27 апреля (10 мая) 1906 г. в Петербурге в Тронном зале Зимнего дворца состоялся торжественный приём депутатов  | 1906-05-10 (+13) | - | 0 dil + 0 taraf | RUS1104 |
| TK-RUS-150 | kronoloji_rusya `Stolıpin toprak reformu başladı` | 1906-11-09 | 9 (22) ноября 1906 г. по инициативе председателя Совета министров Петра Аркадьевича Столыпина был издан указ о | 1906-11-22 (+13) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-73A | kronoloji_balkan `Venizelos başbakan` | 1910-10-06 | 19.10.1910 | 1910-10-19 (+13) | - | 0 dil + 0 taraf | YUNAN1104 |
| YUN-24A | devletler `Sisam'ın Yunanistan'a katılması` | 1912-11-11 | 11/24 November 1912 | 1912-11-24 (+13) | 1: Sisam | 0 dil + 0 taraf | YUNAN1104 |
| TK-RUS-152 | kronoloji_rusya `Romanov Hanedanı'nın 300. yıl kutlamaları` | 1913-02-21 | Празднование 300-летия Дома Романовых, 21 февраля (6 марта) 1913 года : [фрагменты кинохроники ...] — kaynak O | 1913-03-06 (+13) | - | 0 dil + 0 taraf | RUS1104 |
| YUN-153B | olaylar_ek5 `Bozcaada ve İmroz'un geri alınışı — Atina Antlaş` | 1913-11-01 | Athens Treaty 1/14 Nov 1913 | 1913-11-14 (+13) | 2: Bozcaada, İmroz | 6 dil + 0 taraf | YUNAN1104 |

Notlar (AÇIK):
- Y-04 Aynalikavak: ana madde olaylar_ek5 (OLAYLAR_EK5:259) 1779-03-10; antlasma_madde_aynalikavak.js kaynak alani "Noradounghian 10 mars = Julyen; hicri 3 Rebiulevvel 1193 = G 21 Mart" ile kok t=1779-03-21 yapmis, ana madde "11 gun erken" diye KASA borcu birakmis. Tasinirsa birlikte guncellenecek: ekokuma_antlasma4.js (sonuc.t, `olay:["1779-03-10|Aynalikavak"]`), ekokuma_statu.js (olay), ekokuma_tartisma.js (olay `1779-03-10|Aynalikavak`), yer_yama.js (2 satir, t:"1779-03-10"), 6 dilde ceviri anahtari `OLAYLAR_EK5:1779-03-10:0` -> `...1779-03-21:k`. kronoloji_kirim 1779-01-01 yil-hassasiyetli, etkilenmez. Kirilma YOK (antlasma toprak degistirmiyor).
- Y-05 Yedi Ada: kaynak TDV yedi-ada-cumhuriyeti 21 Mart 1800 (takvim yok); Julyen oldugu hicri 8 Zilkade 1214 tablo hesabi (G 2-3 Nisan) ile teyitli — HICRI-TEYITLI AÇIK, antlasma_madde_yediada1800.js (origin/main) "2 Nisan ONERILIR" diyor. Baglananlar: olaylar_ek17.js (1800-03-21), devletler.js septinsular `f:"1800-03-21"` (kunye + nested olay satiri), 7 yerlesimin kirilmasi (Korfu, Kefalonya, Ithaki, Ayamavra, Zaklise, Cuha Adasi, Paksos; yerlesimler.js + yerlesimler_ek_adalar.js), ceviri 5 dil. Ic_not_d TDV korfu "3 Nisan 1800" ile celiskiyi ZATEN beyan ediyor ve tasimayla (2 Nisan) 1 gun fark kalir — tasimadan once TDV korfu 3 Nisan ile hakemli karar gerekir.
- Y-01/Y-03: kaynak Rus belge/portal (hakemli degil), Julyen beyani kaynak alaninda; Tsaritsyn/Rostov kirilmalari (yerlesimler.js kur:/s:f) AYNI Julyen gunune bagli, birlikte tasinmali; kirilma kaynagi da Julyen gunune dayanir.
- Y-07: Stolbovo 27 Subat 1617 Julyen = 9 Mart G; 3 madde + 4 yerlesimin (Novgorod, Yam, Koporye, Oresek) kirilmasi 27 Subat; Isvec Julyen kullandigi icin iki taraf ayni Julyen gunune bagli. Kirilmalar yerlesimler_h2_rusya.js + yerlesimler.js / _ek29.js icinde.
- RUS1104 satirlari: TAKVIM-1104 Rus taramasi (kaynak: prlib.ru, Runivers, ESBE); bu turda yalniz canlilik (t hala Julyen mi) + J->G fark tutarliligi dogrulandi. Kaynak okuma yeniden yapilmadi. TK-RUS-008 (1613), 031 (1709 Poltava), 144/143 (1905-01-22) bu arada UYGULANMIS (t artik Gregoryen).
- YUNAN1104: Yunan Kilisesi/Meclis tarihleri (devletler.js 1912-11-11 Sisam dahil) 1104 taramasinda O.S. beyanli (fhw.gr, Church of Greece, NKUA); YUN-153B (olaylar_ek5 1913-11-01 Atina Antlasmasi): kronoloji_balkan zaten 1913-11-14, 42 yerlesim kirilmasi zaten 11-14 — ana madde tasininca TUTARLI olur. YUN-126B + YUN-174B 1821-03-25 (olaylar.js + savaslar.js): 19 yerlesim kirilmasi 25 Mart 1821 Julyen gunune bagli (Annunciation, Yunan kaynagi 25 Mart J = 6 Nisan G).

## 3. BELİRSİZ kayitlar

Kaynagi okuyamadigim / kaynaklari celisen / onerisi Julyen farkina uymayan kayitlar; uygulama YOK.

| kayit | neden |
|---|---|
| olaylar_2s_0919 1590-07-12 Saratov kalesi | kaynak "Miladi" diyor ama ayni dosyada Tsaritsyn Julyen yazilmis; "takvim ekseni belirsiz" (kendi ic_not'u) |
| kronoloji_cok_rusya 1648-10-14 Nijneudinsk | gun "Pokrov gunu - Rus kaynagi, Julyen": Pokrov 1 Ekim O.S. = 11 Ekim G (1648); 14 Ekim bu iki gunle de tutmaz |
| olaylar_ek3 / savaslar / kronoloji_rusya 1696-07-18/19 Azak | uc kaynak: ESBE 18 Temmuz (J), prlib 19 (29) Temmuz, TDV 6 Agustos; kronoloji_rusya 07-18, olaylar_ek3 + savaslar 07-19; takvim varyanti "CEVRILMEDI" (savaslar ic_not) |
| kronoloji_isvec 1714-10-11 XII. Karl Osmanli topraklarindan ayrildi | iki kaynak bir ay farkli; Isvec 1712-1753 Julyen; EB1911 takvim yok |
| olaylar_ek5 1737-07-11 Ozi dususu | TDV 11 Temmuz; ESBE 2 Temmuz eski takvim = 13 Temmuz; "ayrisma" ic_not'ta beyanli |
| kronoloji_hollanda 1652-07-10 I. Ingiliz-Hollanda Savasi | ic_not_gun: takvim OLCULEMEDI (Ingiliz ilani Julyen olabilir) |
| olaylar_ek5 1774-06-25 Kozluca | ic_not_gun: akademik kaynakla Julyen/Gregoryen ayrimi olculmedi; ekokuma_antlasma2 1774-06-20 baglantisi var |
| olaylar_p0917kosu13 1789-11-01 Avusturya Bukres isgali | gun "Kasim 1789 basi (eski takvim)" ay hassasiyeti |
| kronoloji_cok_gurcistan 1810-02-17 Rusya Abhazya ilani | gun "takvim belirtilmemis; muhtemelen Julyen" (+12 = 1810-03-01); kaynak okunmadi |
| olaylar_2s_0918 1853-07-28 Ak-Mecit | ic_not_d: Rus kaynaklari Julyen kullanir; takvim cozulmeden gun degistirilmedi (G karsiligi 9 Agustos) |
| kronoloji_sinir_komsu 1869-12-13 Rus-Iran Atrek anlasmasi | IBS tek tarih; "Julyen olabilir" |
| olaylar_ek5 1877-07-19 Plevne + kronoloji_balkan Plevne gunleri | TDV gunleri tam 12 gun fark (Rumi/Julyen) - akademik kaynakla OLCULMEDI (ic_not_gun) |
| kronoloji_balkan 1877-09-01 Niksic/Podgorica/Bar | ESBE Julyen ile cevrildi ama atlas ay hassasiyetinde; CELISKI sinifi, gun uygulanamaz |
| olaylar_ek10 1912-11-21 Gumulcine | Erturk 9 Kasim (Bulgar, Julyen ise 22 Kasim G); 1 gun fark; yeniden okunmadi |
| olaylar_ek5 1912-11-25 Sakiz cikarmasi | TDV 25 Kasim; Hellenic Navy 10 Kasim J = 23 Kasim; TDV esas, celiski beyanli |
| olaylar_ek5 + kronoloji_cok_yunanistan 1912-10-30 Tasoz | TDV 30 Ekim; Hellenic Navy 18 Ekim J = 31 Ekim G; TDV esas |
| olaylar_2s_0920 1912-10-22 Pristine | TDV rakami hatali sayilmis; iki akademik kaynagin gunu alinmis; Julyen 2 Ekim okunsa savas oncesi |
| kronoloji_sinir_asya_zincir_1024 1917-11-27 Hokand Muhtariyeti | TDV takvim belirtmez; Julyen ise G 10 Aralik; cevrilmedi (belirsiz) |
| kronoloji_sinir_asya_zincir_1024 1918-01-31 Hokand dagitildi | TDV takvim belirtmez; Julyen ise G 13 Subat; cevrilmedi (belirsiz) |
| kronoloji_cok_sirbistan 1835-02-15 Sretenje Anayasasi (Y-06) | kaynak "15 Subat / eski takvimle 2 Subat": 2 Subat J +12 = 14 Subat; 15 Subat +13 modern donusum gibi; 1 gun sapma, uygulanamaz |
| olaylar_0073_iran_yanya 1822-02-14 Tepedelenli Ali Pasa | 14 Subat vs 24 Ocak: 21 gun fark, takvimle aciklanamaz (ic_not_gun beyani) |
| kronoloji_cok_ingiltere 1601-12 Barton ahidnamesi; kronoloji_ingiltere yila indirilen 10 madde (Globe 1599, Hak Dilekcesi 1628, ...) | gun yalniz guvensiz kaynakta oldugu icin 14 Ekim 2026 kararindan YILA indirilmis; Julyen gunleri ic_not_t'de duruyor - uygulanacak gun yok |
| TAKVIM-1104 Hindistan HICRI satirlari (9: Nizamulmulk 1748, Cihangir 1627, Sah Cihan 1666, Evrengzib 1669/1687/1707, Haydarabad 1724, Ekber 1605, Dara Sukuh 1659) | takvim hicri; gun hicriye gore yeniden hesaplanmali; sonuc kaynak okumadan verilemez |
| TK-RUS-007 (kronoloji_rusya 1612-11-04 -> 1612-11-01) | onerilen 1612-11-01; kaynak 22-26 Ekim (1-5 Kasim) aralik, atlas 11-04 aralik icinde; tek gun secilemez |
| TK-RUS-022 (kronoloji_rusya 1696-07-18 -> 1696-07-29) | kaynak 19 (29) Temmuz; atlas 18 Temmuz; ESBE 18 Temmuz Julyen; TDV 6 Agustos (3 kaynak celiski) |
| TK-RUS-024 (kronoloji_rusya 1697-03-09 -> 1697-03-20) | kaynak 10 Mart O.S. = 20 Mart N.S. (1697: +10); atlas 03-09 (1 gun kayma) |
| TK-RUS-030 (yerlesimler_h2_rusya 1703-09-11 -> 1703-09-09) | kaynak 29 Agustos (9 Eylul); atlas 09-11 (2 gun sapma, Julyen degil) |
| TK-RUS-058 (kronoloji_rusya 1755-01-25 -> 1755-01-23) | kaynak 12 (23) Ocak 1755; atlas 01-25 (2 gun sapma) |
| TK-RUS-064 (kronoloji_rusya 1764-05-13 -> 1764-05-16) | kaynak 5 (16) Mayis 1764; atlas 05-13 (3 gun sapma) |
| TK-RUS-141 (kronoloji_rusya 1898-11-14 -> 1898-10-26) | kaynak 14 (26) Ekim 1898; atlas 11-14 (ay hatasi, takvim degil) |
| TK-RUS-131 (kronoloji_rusya 1881-05-15 -> 1882-05-15) | ESLESME_HATASI: kaynak 3 Mayis 1882 hukuk metni, atlas yili 1881 |
| TK-RUS-033 (kronoloji_rusya 1711-07-21 -> 1711-07-23) | Prut: Rus nusha 12 (23) Temmuz; Osmanli nusha + Noradounghian 21 Temmuz (madde dosyasi karari: 21 Temmuz); celiski, takvim farki degil |
| TK-RUS-034 (yerlesimler_h2_rusya 1711-07-21 -> 1711-07-21) | Prut yerlesim yorum satiri (Azak/Taganrog); ayni celiski |
| TK-RUS-053 (yerlesimler_h2_rusya 1739-09-18 -> 1739-09-29) | Belgrad: madde dosyasi Rus nushanin gunu Gregoryen yazili (18 Eylul); ZATEN karari, 1104 onerisi celisir |
| TK-RUS-096 (kronoloji_rusya 1826-06-15 -> 1826-06-15) | Vak a-i Hayriyye: takvim kaymasi degil (TDV Gregoryen) |

Ayrica: ayni t'de ZATEN uygulanmis TAKVIM-1104 satirlari (TK-RUS-008, 031, 143, 144) ve yorum satirlari (094, 112, 147: oneri = atlas; 009 -> Y-07, 014 Pereyaslav kirilmalari zaten 01-18, 023 Azak yorum) sayilmadi. 613 notsuz Julyen-cagi kayit: kronoloji_rusya 121, kronoloji_isvec 64, kronoloji_balkan 100, kronoloji_lehistan 49 (Lehistan Gregoryen ->buyuk olasilikla ZATEN), kronoloji_cok_ukrayna 23, kronoloji_sinir_avrupa_orta 58, kronoloji_sinir_lehistan_ukrayna_1028 36, kronoloji_sirbistan 16, kronoloji_cok_romanya 15, kronoloji_cok_sirbistan 15, kronoloji_kirim 22, kronoloji_sinir_komsu 23, kronoloji_gurcistan 13, ... (Lehistan 49+6, sinir_lehistan_ukrayna 36 ve sinir_avrupa_orta 58 = 149 kayit Gregoryen tarafli bolgeler oldugundan risk daha dusuktur).

## 4. ZATEN GREGORYEN (beyanli) — ozet

Ana kronoloji/olay kaydi: 171 kayit (otomatik: atlas t, kayittaki Julyen gununun JDN ile cevrilmis karsiligina ya da acik yazili Gregoryen gune esit). Dosya dagilimi: kronoloji_ingiltere 43, kronoloji_cok_rusya 16, savaslar 10, olaylar_p0063 10, olaylar_p0056 7, devletler 5, olaylar_dunya_bolge_1109 5, kronoloji_isvec 5, olaylar_p0917kosu13 5, kronoloji_cok_senkron_0930 5, kronoloji_rusya 4, olaylar_ek16 4, kronoloji_sinir_komsu 4, kronoloji_kirim 4, olaylar_ek5 4, kronoloji_cok_ince_avrupa_amerika 3, olaylar_ek10 3, kronoloji_sinir_nokta2 2, olaylar_p0060 2, kronoloji_cok_romanya 2, kronoloji_cok_sirbistan 2, kronoloji_cok_karadag 2, kronoloji_balkan 2, kronoloji_sinir_lehistan_ukrayna_1028 2, kronoloji_hindistan 1, kronoloji_sinir_avrupa_bati 1, olaylar_2s_0919 1, kronoloji_hollanda 1, kronoloji_cin 1, kronoloji_sinir_asya 1, kronoloji_cok_ukrayna 1, kronoloji_almanya 1, olaylar_ek6 1, olaylar_p0065 1, olaylar_p0043kirim 1, olaylar_ek 1, kronoloji_gurcistan 1, olaylar_bk_zincir_1024 1, kronoloji_sinir_iskandinavya 1, kronoloji_sinir_amerika 1, kronoloji_cok_yunanistan 1, kronoloji_cok_arnavut 1, kronoloji_sinir_avrupa_orta 1, olaylar_p0917taraf 1. Ornekler: Poltava 1709-07-08, Fredriksten 1718-12-11, Abo 1743-08-18 (ISVEC-1113); Hotin 1739-08-28, Or Kapi 1736-06-01, Akkirman 1770-10-09, Ozi 1788-12-17, Bender 1789-11-14, Kili 1790-10-24, Rusçuk 1811-07-04, Silistre 1810-06-10; Gulistan 1813-10-24 · Kurekcay 1805-05-26 · Baku 1806-10-15 · Nahcivan 1827-07-08 (kronoloji_sinir_komsu); Sirbistan Krallik 1882-03-06 · Tirnova 1879-04-28 · Cuza 1859-02-05 · Limni 1912-10-21. Ince not: 171 sayisi kayit-alani eslesmesidir; ayni olay birden fazla dosyada tekrar edebilir.

antlasma_madde kok `t` (22, beyanli): ayastefanos 1878-03-03 (19 Subat/3 Mart) · baltalimani 1849-05-01 (19 Nisan J) · belgrad 1739-09-18 (Rus nusha Gregoryen; J 7 Eylul) · berlin 1878-07-13 (J 1 Temmuz) · bukres 1812-05-28 (16 Mayis J) · bulgar1909-04-19 (6 Nisan J) · edirne 1829-09-14 (2 Eylul J) · akkirman 1826-10-07 (25 Eylul J) · arta-volos 1832-07-21 (9 Temmuz J) · hunkar 1833-07-08 (26 Haziran J) · istanbul 1700-07-14 (3 Temmuz J, tablo ic tutarli) · kucuk kaynarca 1774-07-21 (10 Temmuz J) · londra 1830-02-03 (22 Ocak J) · londra 1913-05-30 (17 Mayis J) · pasarofca 1718-07-21 (Ingiliz J 10 Temmuz) · prut 1711-07-21 (Rus nusha 12 Temmuz J = 23 Temmuz G; atlas Osmanli nushasi, beyanli) · rus1799 1799-01-03 (23 Aralik 1798 J) · yas 1792-01-09 (29 Aralik 1791 J) · aynalikavak (madde dosyasi) 1779-03-21 · refah 1906-10-01 · bogazlar 1841-07-13 · ingiliz1799 1799-01-05.

Cikarimla ZATEN (31 madde dosyasi; ayrica yediada1800 = AÇIK Y-05, takvim cumlesi yok; Julyen taraf yok ya da Gregoryen cagi): zitvatorok 1606 (Habsburg Gregoryen) · vasvar 1664 · karlofca 1699 · zistovi 1791 · kerden 1746 · bucas 1672 · abd1830 · londra1840 · iskenderiye1840 · paris1802 · paris1856 · kalai1809 · prusya1790 · iki sicilya1799 · yergogu1790 · kibris1878 · balta1838 · erzurum1823/1847 · ittifak1854 · alman ittifaki 1914 · brest-litovsk 1918-03-03 (Sovyet Rusya 14 Subat 1918'de gecti, imza G) · mondros · sevr · mudanya · lozan (Yunanistan 1923-03-01'de gecti) · moskova · kars · gumru · ankara · trablus1910.

Ana madde tutarsizligi (takvim DEGIL, kayit icin): Yas 1792 ana madde olaylar_ek5 1792-01-10 (TDV hicri 15 Cemaziyelevvel 1206) vs antlasma_madde_yas 1792-01-09 (Noradounghian 29 Aralik 1791 J = 9 Ocak G).

## 5. Bagli kirilma ozeti

Ayni gun (tam t) yerlesim kirilmasi olan AÇIK kayit satiri: **12 / 48**; toplam (yerlesim x kayit) eslesme 64. Hepsinde kirilma gunu kronoloji gunuyle birlikte kaynak Julyen gune dayaniyor (ayni kaynak):
- Y-01 1589-07-02: 1: Tsaritsyn
- Y-07a 1617-02-27: 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg)
- Y-07b 1617-02-27: 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg)
- Y-07c 1617-02-27: 4: Novgorod, Yam (Yamburg, Kingisepp), Koporye (Kaporye), Oreşek (Nöteborg)
- Y-02 1636-04-17: 1: Tambov
- Y-03 1749-12-15: 1: Rostov (Don)
- Y-05 1800-03-21: 7: Çuha Adası (Kythira), Korfu, Ayamavra (Lefkada), Kefalonya +3
- YUN-126B 1821-03-25: 19: Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras) +15
- YUN-174B 1821-03-25: 19: Atina, Mora (Tripoliçe), Modon, Balyabadra (Patras) +15
- YUN-161B 1833-03-31: 1: Atina
- YUN-24A 1912-11-11: 1: Sisam
- YUN-153B 1913-11-01: 2: Bozcaada, İmroz

Yeni (Gregoryen) gunde ZATEN kirilma bulunanlar (ana madde tasinirsa TUTARLI olur): YUN-153B 1913-11-14 (42), TK-RUS-014 1654-01-18 (4), TK-RUS-034 1711-07-21 (4, Prut; celiski). Hicbir AÇIK kaydin yeni gununde yeni kirilma yok.

## 6. Anahtar etkisi toplami (yeniden adlandirilacak)

- ceviri_*_olay_*.js `<DIZI>:<t>:<idx>` anahtari: **52** (dil dosyasi x madde; idx ayni dizide ayni t'deki sira, t degisince yeni t'deki siraya gore yeniden hesaplanir)
- olay_taraf.js `<t>|<b>` anahtari: **4**
- kronoloji_rusya.js / kronoloji_cok_rusya.js / kronoloji_balkan.js maddeleri ceviri ve olay_taraf anahtari TASIMIYOR (0 anahtar); anahtar etkisi yalniz olaylar_* dizilerinde (OLAYLAR_2S_0919, OLAYLAR_EK5/EK6/EK16/EK17, OLAYLAR, SAVASLAR, DEVLETLER).
- Sayim bu dal tabaninda yapildi; origin/main'de ceviri dosyalari yeniden uretilmis olabilir. Uygulama oncesi yeniden say.

## 7. Olculmedi / sinirlar

- Kaynaklar yeniden OKUNMADI (web/TDV/ESBE sorgusu yapilmadi): her AÇIK satirin kaynak notu atlasin kendi `ic_not*`/`gun`/`kaynak` alanindan veya TAKVIM-1104 teslimlerinden alindi; "kaynak Julyen gunu verir" hukmu bu alanlara dayanir. Y-01/Y-03 Rus portal kaynaklari akademik degil (kaynak kurali geregi tasimadan once hakemli ikinci kaynak aranmali).
- Britanya/Irlanda/somurge (1583-1752) ve Hindistan taramasi (TAKVIM-JULYEN-LISTE-1113.md: A 19 satir grubu, B 12; 3 kayit commit aae25e6be ile uygulandi) bu listenin SAYILARINA dahil edilmedi; Britanya Gregoryen gecisi sonrasi (1752+) kayitlar (Halifax 1752, 1799/1809/1830/1840 Ingiliz antlasmalari) Gregoryen, aday degil.
- Yalniz takvim ifadesi tasiyan kayitlar otomatik yakalandi. Hicbir not tasimayan ama kaynagi Julyen olan kayit (Stolbovo gibi, ancak TAKVIM-1104 tarafindan fark edildi) bu taramada yakalanamaz: bu 613 kayitlik evrende BELIRSIZ.
- Bulgaristan (1916), Sirbistan/Romanya (1919) tarafli 1916-1919 kayitlari yalniz notlulari tarandi; notsuzlar BELIRSIZ evrende.
- Kirilma taramasi yerlesimler*.js d:/s:/kd: icindeki f/t degerlerini tam eslestirir (+-30 gun yakin sayilari ham veridedir, tabloya alinmadi); kirilmanin kaynaginin Julyen gune dayandigi, kirilma `kaynak:` metninden okunmadi — yalniz AYNI t degerinin tasindigi olculdu.
- denetle/antlasma_dogrula/paketle/surum_damgala kosturulmadi; ana checkout'ta Degismez 2 olculmedi.

## 8. PARTI 2 durumu (umit-1113-takvim2)

UYGULANDI (15 olay, kronoloji_rusya + yer_yama + etiket_yama; Hive icin kronoloji_ozbek yansimasi): TK-RUS-044/045 (1725-02-08), 060, 062, 075, 080, 095, 105, 109, 113, 116, 123, 139, 148, 149, 150. Kaynak prlib.ru, hakemli ikinci kaynak okunmadi (ic_not_gun beyanli).
BELIRSIZ BIRAKILDI (KASA karari: hakemsiz kaynak): TK-RUS-073 (yalniz Runivers); Yunan kayitlari YUN-126B/174B (1821-03-25, Vikipedi+sigmalive), 161B (Atina 1833, protothema), 54A, 56A, 58A, 59A, 63A, 69A, 73A (kaynak yok/ham), 24A (Sisam, Vikipedi); TK-RUS-152 (butce asildi, ertelendi).
ERTELENDI (bagimlilik agi buyuk): YUN-153B Bozcaada/Imroz 1913-11-01: yerlesimler.js (satir 690-691), yer_yama*.js, ekokuma_antlasma4, ekokuma_p76c, bolge_pencere, donemler_ust/devlet_harita_ust (uretilmis), 6 dil ceviri anahtari; kaynak FRUS belge neşri (1/14 Nov 1913) ama ayri parti ister.
Kalan AÇIK/uygulanmamis: 48 satirdan 15 parti 1 (002,003,004,012,019,028,039,040,043, Stolbovo x3, Tambov, Aynalikavak, Yedi Ada) + 16 parti 2 = 31 uygulandi; 17 kalir (Y-01, Y-03, TK-RUS-011 BELIRSIZ; 073, 152; 12 Yunan satiri 126B,174B,161B,54A,56A,58A,59A,63A,69A,73A,24A,153B).

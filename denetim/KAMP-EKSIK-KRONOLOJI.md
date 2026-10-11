# KAMP-EKSIK-KRONOLOJI — birinci tur (K0, `oturumlar/KAMPANYA-DUNYA-1010.md §2`)

Taban: `main` (ölçüm anında `HEAD..origin/main` = 0). Hiçbir `data/*.js` dosyasına dokunulmadı.
Dosyalar:
- `denetim/KAMP-EKSIK-KRONOLOJI-LISTE.csv` — 228 künye (evren tanımı aşağıda)
- `denetim/KAMP-EKSIK-KRONOLOJI-KRONOLOJI.csv` — 211 madde, `§3` şeması
- bu dosya — gerekçe, kaynak seti, `bulunamadı`, çelişkiler

## 1. Evren — "228 anılmayan" İKİ AYRI soru

Koordinatörün deseni (`"<id>"` tam eşleşme, `data/olaylar*.js` + `data/kronoloji*.js`, 184 dosya) yeniden
koşturuldu: **228 · birebir aynı**. 168'i yerleşim verisinde `"<id>"` olarak geçiyor (haritada kimlik).

Ama `js/app.js:15345` (`derinKronolojiBindir`) künyeye kronolojiyi ÜÇ yoldan bağlar:

| yol | 228 içinde |
|---|---|
| ⓐ `data/devletler.js` künye-içi `kronoloji:[]` dolu | **224** |
| ⓑ `KRONOLOJI_<ID>` dosya adıyla bağlı | 2 |
| ⓒ `"id"` metin geçişi (koordinatörün ölçtüğü) | 0 (tanım gereği) |
| **üç yoldan da BOŞ** | **4** — `gozleroglu` · `harezm-halk-cumhuriyeti` · `buhara-halk-cumhuriyeti` · `luksemburg-hollanda-birligi` |

⇒ 224 künyenin künye sekmesinde 1-11 madde GÖRÜNÜYOR; ama bu maddeler **kaynaksız, yersiz, çoğu
`YYYY-01-01`**, ve ana kronoloji dosyalarının evreninde (yer_id · kaynak · Değişmez 2) YOKLAR. Bu turda
ölçüldü: araştırılan 57 künyede künye ya da künye-içi kronolojiyle **69 çelişki** çıktı (Ek B) —
yani künye-içi maddeler "anılmış" sayılırsa yanlış veri anılmış sayılır. Hangi evrenin "anılmış"
sayılacağı koordinatörün hükmüdür; bu tur iki evreni de raporlar.

Gevşek desen (`id` tırnaksız, kelime sınırıyla) 43 künyede daha geçiş buldu; örneklenenlerin hepsi
YORUM satırıydı (ör. `kronoloji_anadolu.js:8` "…saruhan…"), madde değil ⇒ sayıyı değiştirmez.

## 2. Bu turda araştırılan 57 künye ve seçim

Dört boş künye + TDV'nin birincil olduğu (İslâm dünyası / Osmanlı ve komşuları) ailelerden 53 künye;
beş paralel araştırma grubu: A Anadolu (11) · B Balkanlar/Latin (13) · C Arabistan/Levant (12) ·
D İran/Kafkasya/Orta Asya (11) · E K. Afrika/Bozkır/misc (10). Seçim bir ÖNCELİK HÜKMÜ değildir:
kaynak kuralının en sağlam uygulandığı yerden başlandı. Kalan **171 künye** (ağırlıkla K. Amerika 38 ·
B. Afrika 34 · D. Afrika 20 · Orta/Güney Afrika 30 · GD Asya 14) ikinci tura kalır — **yarım
bırakılan yerin adı budur** (`LISTE.csv`de bu 57 dışındaki satırlar).

## 3. Sayılar

| | |
|---|---|
| madde | **211** (57 künye) |
| kesinlik | gün 50 · ay 20 · yıl 95 · yıl-hicri 38 · yaklaşık 8 |
| `harita_degisimi = EVET` | 165 |
| doğuş maddesi | 45/57 (eksik 12 — Ek C) |
| yıkılış maddesi | 54/57 (eksik 3 — Ek C) |
| `bulunamadı` satırı | 21 (Ek A) |
| künyeyle çelişki | 69 (Ek B) |
| biçim kapısı (tarih ↔ kesinlik, kaynaksız satır) | 0 kusur |

## 4. Kaynak seti ve sözleşmeler

- **TDV İslâm Ansiklopedisi birincil**: madde gövdeleri doğrudan GET ile okundu (HTTP kodu kontrol;
  302 = ölü slug, ör. `mutahharten`, `cemisgezek`, `harfusogullari` — kapsayıcı yer/kişi maddesine
  geçildi: `erzincan`, `kemah`, `akkoyunlular`, `harfus`, `balebek`…). TDV araması JS ile yüklendiği için
  curl'den sonuç vermedi; slug'lar elle denendi.
- TDV dışı: Belleten (Tugay 1972, Acaroğlu 1990), Osmanlı Araştırmaları LVII (Emecen 2021), Vasiliev
  1936, Fondation Napoléon kronolojisi, EB1911 (Wikisource), Rusya Başkanlık Kütüphanesi (prlib.ru).
- ⚠️ **Britannica ve Iranica her istekte HTTP 403** verdi. B grubunun Britannica'ya dayanan satırları
  britannica.com alan-kısıtlı ARAMA ÖZETİNDEN alıntılıdır ve `kaynak` alanında böyle beyan edilmiştir.
  🟡 **`luksemburg-hollanda-birligi`nin 4 maddesi YALNIZ bu yolla kaynaklıdır** — sayfanın kendisi
  okunmadı; ikinci kaynakla doğrulanmadan yazıma alınmamalı. (Öteki 3 Britannica satırında TDV de var.)
- Vikipedi hiçbir maddede dayanak değildir; yalnız Vikipedi'de bulunan günler (ör. Buhara 1920-10-08,
  Harezm/Buhara 1924-10-27, Kuaytî 1967-11-30, Nebhânî 1154) KULLANILMADI → `bulunamadı`/çelişki.
- **Hicrî sözleşme** (`CLAUDE.md §4`) uygulandı: hicrî aralık ∩ kaynağın mîlâdî yılı (∩ ay), kesişimin
  ilk günü; hicrî yıl metinde. Dönüşüm tablo hesabıdır (±1-2 gün). **1582 öncesi Jülyen** (TDV'nin
  mîlâdî karşılıkları Jülyen), sonrası Gregoryen. 🟡 Atlasta yazılı bir Jülyen/Gregoryen sözleşmesi
  bulunamadı — proleptik Gregoryen istenirse 1582 öncesi günler 8-10 gün kayar (hüküm koordinatörde).
- "Kronoloji sistemi" (`§4.4`, yüksek/orta/düşük) bu evrende uygulanmaz: en eski madde MS 745.

## 5. Açık kaynak çelişkileri — hüküm koordinatörde (araştırmacı hükmetmez)

- `sutayogullari` 1353: TDV `diyarbakir` 1353 der, TDV `celayirliler` 1364 der (iki TDV maddesi).
- `yezd-atabegligi` doğuş: iki TDV maddesi kurucu sultanı farklı veriyor (Sencer / Arslanşah) → OLGU
  çelişkisi, `ÖLÇÜLEMEDİ`.
- `suriye-arap-kralligi` Şam'ın işgali: TDV `faysal-i` 14 Temmuz 1920, TDV `sam--suriye` 25 Temmuz.
- `rif-cumhuriyeti` Annual: iki TDV maddesi "22 Haziran 1921", künye özeti 22 Temmuz → ikinci kaynak gerek.
- `tekrur` sonu: TDV `el-hac-omer` 1893-94, TDV `mali` 1898.
- `nebhani` sonu: künye 1515 (sahil kolu?); TDV `yarubiler` Nebhânî iç hâkimiyetinin 1615/1624'e kadar
  sürdüğünü ima ediyor → künye kapsamı sorusu.
- `sani-emirligi` t 1913-07-29: TDV o antlaşmanın yürürlüğe GİRMEDİĞİNİ yazar; kaynaklı tâbiyet değişimi
  1916-11-03 İngiliz himayesi.
- `koco-uygur` t 1209: TDV'ye göre tâbiyet yılı, devlet sonu değil (Moğol idaresinde 1368'e kadar).
- `kumuk-samhalligi` 1578/1606: TDV hükmü Dağıstan geneli için — bölgeden şehre taşınan hüküm ⇒ HALKA
  (`kaynakli_halka_*`) ALINMAZ.
- `sarki-rumeli` sonu: Tugay 18 Eylül 1885, Acaroğlu "6 Eylül" — büyük olasılıkla Rumî/Jülyen farkı
  (12 gün), ölçülmedi.

## Ek A — `bulunamadı` (21 satır, adıyla)

| künye | tür | nerelere bakıldı |
|---|---|---|
| `ahiler` | dogus | TDV ankara (gövde okundu): Ankara 1304-1341 İlhanlılara tâbi, 1341'den Osmanlı'ya dek Eretnaoğulları idaresinde; Ahi idaresinin başlangıcına dair tarih YOK. TDV ahilik: Ankara için tarih yok. TDV ahi-elvan-camii: tarih yok. 'ahi-serefeddin' slug 302. ⇒ künye f 1290 dayanaksız; ayrıca TDV ankara 1304-1341 İlhanlı tâbiliği diyor, 'Ahi Birliği' bağımsız polity olarak kaynakta yok (ÖLÇÜLEMEDİ). |
| `sutayogullari` | dogus | TDV'de müstakil madde yok (sutayogullari/sutay 302, künye notu); TDV diyarbakir yalnız 1343-1353 İbrâhim Şah hâkimiyetini verir; TDV celayirliler, cobanogullari, ilhanlilar gövdelerinde 'Sutay' geçmiyor (grep). Polity kökeni (Emîr Sutay'ın Diyarbekir valiliği) yalnız Vikipedi'de (en.wikipedia.org/wiki/Sutayids) — tek dayanak olamaz; akademik kaynak (ör. Faruk Sümer) bu turda okunmadı. |
| `cemisgezek-beyligi` | dogus | TDV: cemisgezek, cemiskezek, cemisgezek-beyligi, cemisgezek-sancagi, cemisgezek-kalesi, melkisi, melkisiler, dersim, pertek → hepsi 302; tunceli/harput/akkoyunlular/karakoyunlular gövdelerinde kuruluş tarihi yok (harput: 1085 sonrası Çubukoğulları Çemişkezek çevresini kapsadı — Melkîşî ile ilgisi yok). Künye f 1281 pencere başıdır (künye notu). Akademik tur bu oturumda tekrarlanmadı. |
| `cemisgezek-beyligi` | yikilis | Beyliğin kesin sonu (Kanûnî devri) için TDV'de tarih bulunamadı (tunceli, akkoyunlular, harput, erzincan, kemah gövdeleri tarandı). Künye t 1420 yukarıdaki 1452 tanığıyla gerilimde. |
| `dukagin` | yikilis | TDV les (Osmanlı fethi yılsız; giriş paragrafında yalnız 'Osmanlı dönemi 1478-1912' aralığı — Leş'in, prensliğin değil), TDV dukakinzade-ahmed-pasa (yıl yok), TDV arama 'Dukagin' (4 başlık, hepsi kişi), WebSearch akademik kaynak (yalnız Vikipedi + aile sitesi döndü — kırmızı çizgi). Künyenin 1479-01-25'i Osmanlı-Venedik antlaşma günüdür, prensliğin sonu olarak kaynakta OKUNMADI. |
| `crnojevic-zetasi` | dogus | TDV karadag (1482 ve kuruluş yılı yok), Emecen 2021 (ailenin hâkimiyeti '1430'lu yıllardan itibaren' — on yıl, yıl değil; Ivan'ın tahta çıkışı 1465). Künyenin 1482'si (Cetinje'ye taşınma) yalnız Vikipedi'de görüldü — dayanak olamaz. Öneri: künye f: ya 1465 (Ivan, Emecen) ya da beyanlı boşluk; karar koordinatörde. |
| `teodoro` | dogus | TDV arama 'Mankup' (0 başlık), 'Mangub' (6 içerik eşleşmesi: gedik-ahmed-pasa, haci-giray-i/ii, karadeniz, kefe, kirim — hiçbiri kuruluş yılı vermiyor); Vasiliev, The Goths in the Crimea (1936) içindekiler — yalnız 'XIV. yüzyılda Rum hükümdarlar Got reislerinin yerini aldı' (yüzyıl, yıl değil). Künyenin 1349'u kaynaksız. |
| `nebhani` | dogus | TDV uman (Nebhânîler yalnız 'bir süre ... hâkimiyetinde kalan' ifadesiyle, tarihsiz) · TDV arama 'nebhaniler' (afrika, uman, ya'rubîler, zengibar — hiçbirinde kuruluş yılı yok) · TDV arama 'Nebhânî' (yalnız kişiler) · web: yalnız Vikipedi '1154' (tek dayanak olamaz). Künye f 1281 zaten pencere başı (künye özetinde beyanlı). |
| `sabah-emirligi` | dogus | TDV kuveyt: şehir 'XVIII. yüzyılın başlarında' Utûb kabilesince kurulmuş, 'XVIII. yüzyılın sonlarından itibaren' kaymakamlar bu kabile şeyhlerinden atanmış — YIL YOK. TDV al-i-sabah ve mubarek-es-sabah koçan (tarihsiz). Britannica 403. ⇒ künye f 1795-04-01 DAYANAKSIZ (TDV'de 1795 yalnız İngiliz ticaret merkezinin 1795'e kadar Küveyt'te kalmasıyla geçiyor — §4⑧ tuzağı: o rakam emirliğin kuruluşunu tarihlemiyor) |
| `yezd-atabegligi` | dogus | TDV yezd + kakuyiler okundu: kuruluşa YIL verilmiyor. kakuyiler: Sencer Yezd'i son Kâkûyî'nin iki kızına iktâ edip atabeg atadı (yıl yok); yezd: Rükneddin Sâm'ın atabeg tayini Arslanşah b. Tuğrul (1161-1177) dönemine konuyor — iki TDV maddesi kurucu sultan konusunda ÇELİŞİYOR (OLGU çelişkisi, ÖLÇÜLEMEDİ). Iranica 'Atābakān-e Yazd' HTTP 403. ⚠️ Künyenin f 1141'i kuruluş değil Gerşâsb'ın Katvan'da ölümüdür (aşağıdaki madde) — CELISIYOR |
| `yezd-atabegligi` | tabiyet | TDV yezd: Salgurşah'ın Hülâgû'ya itaati anlatılıyor ama YIL verilmiyor — madde yazılmadı |
| `tahiri-horasan` | baskent | TDV tahiriler--horasan: idare merkezinin Merv'den Nîşâbur'a taşındığı Abdullah b. Tâhir'e bağlanıyor ama YIL verilmiyor (yalnız ölümü 230/844) — madde yazılmadı |
| `sacogullari` | baskent | TDV sacogullari: Erdebîl'in başkent oluşu için tarih yok (yalnız Yûsuf'un Erdebîl'e dönüşü anılıyor) — künyedeki 'Merâga → Erdebîl' bu turda tarihlendirilemedi |
| `kumuk-samhalligi` | dogus | TDV kumuklar (şemhallik için kuruluş yılı yok, yalnız VII. yy Hazar bağlamı) · TDV arama 'şemhal' (lekler, darginlar, kafkasya, osman-pasa-ozdemiroglu) · TDV dagistan (şemhal hiç anılmıyor). Kuruluş yılı BULUNAMADI. Not: künye f 1578-11-01 kuruluş değil Osmanlı tâbiliği penceresidir |
| `kumuk-samhalligi` | yikilis | Şemhalliğin nihaî ilgası için TDV kumuklar yalnız genel '1867 yılına kadar Çarlık Rusyası'nın hâkimiyeti altına girdiler' diyor (bütün Dağıstan kavimleri, ilga değil) — yıkılış günü/yılı BULUNAMADI |
| `kaheti-kralligi` | dogus | TDV gurcistan: üç krallığa bölünme I. Alexandre (1412-1442) sonrasına konuyor, YIL yok · EB1911 'Georgia' (Wikisource) kendi içinde çelişiyor: 'the partition in 1424' ve Alexandre'ın oğullarına bölüşümü · Wikipedia 1465/1466 (George VIII) — tek dayanak olamaz, akademik teyit bulunamadı · Iranica/Britannica HTTP 403. Kuruluş yılı BULUNAMADI (ÖLÇÜLEMEDİ: EB1911 çelişkisi) |
| `kuba-hanligi` | dogus | TDV kuba--azerbaycan: Hüseyin Han hanlığı 'XVII. yüzyılın sonlarına doğru' kurdu — YIL yok, madde yazılmadı. ⚠️ Künye f 1735-01-01 kuruluş değil merkezin Hudad'dan Kuba'ya taşınmasıdır — CELISIYOR (hanlık ondan önce vardı) |
| `uygur-kaganligi` | baskent | Ordubalık'ın kuruluş yılı: TDV ordubalik (arama sayfası; ayrı gövde yok), uygurlar, türkistan parçası — kuruluş yılı/kurucu kağan bulunamadı. |
| `koco-uygur` | tabiyet | Karahıtay tâbiiyeti: TDV turfan yalnız 'XII. yüzyılda Karahıtaylar'a bağlanan' diyor; yıl yok ⇒ madde yazılmadı. uygurlar maddesinde de yıl yok. |
| `kerayit` | dogus | TDV: kerayit/kerayitler/ong-han ayrı madde yok (302); arama 'Kerâyit' ve 'Kerayit' yalnız cengiz-han ve hulagu maddelerinde geçiş veriyor, kuruluş yılı yok. Britannica 403. Künye f:1199 bir kuruluş değil, 1199 seferinin yılıdır. |
| `nayman` | dogus | TDV: nayman/naymanlar/tayang-han ayrı madde yok (302); arama 'Nayman' 26 isabet (cengiz-han, gurhan, karahitaylar, inak...) — kuruluş yılı yok. TDV mogollar Naymanlar için yalnız 1209'a kadar itaat altına alındığını söylüyor. Künye f:1199 bir kuruluş değil, bir yenilgi yılıdır. |

## Ek B — künye / künye-içi kronoloji ile ÇELİŞEN maddeler (69)

Atlas referans değildir (`CLAUDE.md §4`): çelişkide ATLAS düzelir — düzeltme koordinatörün sırasıdır.

| künye | kaynaklı tarih | çelişki |
|---|---|---|
| `ahiler` | 1363-03-01 | CELISIYOR: künye t 1354-01-01 — TDV murad-i'ye göre Ankara 1354 sonrası el değiştirdi ve ahiler kaleyi 1363 baharında teslim etti; künyenin bitişi 1354 ise 1354-1363 arası temsil edilmiyor |
| `alaiye` | 1427-01-01 | CELISIYOR: künye kronolojisi satıcıyı 'Karamanoğulları' diyor; TDV satıcının Karaman b. Savcı Bey olduğunu belirtiyor (yıl uyuşuyor) |
| `ammarogullari` | 1346-04-24 | CELISIYOR: künye kronolojisi 1347-01-01 — kaynak 747/1346-47; hicrî sözleşmeye göre 1346-04-24 (ayrıca ada kısa süre sonra geri bırakıldı) |
| `ammarogullari` | 1370-07-26 | CELISIYOR: künye kronolojisi 1371-01-01 — kaynak 772/1370-71; hicrî sözleşmeye göre 1370-07-26 |
| `ammarogullari` | 1393-05-01 | CELISIYOR (hassasiyet): künye kronolojisi 1393-01-01 — kaynak ay veriyor: Mayıs 1393 |
| `atina-dukaligi` | 1204-01-01 | CELISIYOR: künye f: 1205-01-01; TDV 1204 |
| `atina-dukaligi` | 1387-01-01 | CELISIYOR: künye ozeti/katalan künyesi 1388 diyor; TDV 1387 (Britannica WebSearch özeti 1388 — tarih çelişkisi, TDV esas) |
| `atina-dukaligi` | 1456-05-01 | CELISIYOR: künye t: 1458-06-04; TDV şehrin düşüşünü Mayıs 1456 verir, 1458 için yalnız padişahın ziyaretini anar (Akropolis teslimi TDV'de yok) |
| `buhara-halk-cumhuriyeti` | 1920-01-01 | CELISIYOR: künye f 1920-10-08 günü TDV'de ve akademik kaynakta bulunamadı (yalnız Wikipedia); TDV 1920 (yıl) |
| `buhara-halk-cumhuriyeti` | 1924-10-01 | CELISIYOR: künye t 1924-10-27 günü kaynaksız (TDV yalnız Ekim 1924; 27 Ekim yalnız Wikipedia türevlerinde) |
| `cebri` | 1417-02-18 | CELISIYOR: künye f 1417-01-01 — h. 820 1 Ocak 1417'yi dışlıyor (hicrî yıl Şubat 1417'de başlar); hicrî sözleşmeye göre 1417-02-18 |
| `cebri` | 1521-07-27 | CELISIYOR (iç): künye kronolojisinde aynı olay hem 1521-01-01 (toprak-kayip) hem 1521-07-27 (savas) — kaynak tek gün veriyor, 1521-01-01 maddesi 07-27'ye alınmalı |
| `cebri` | 1524-10-29 | CELISIYOR: künye t 1524-01-01 — h. 931 Ekim 1524'te başlar, 1524-01-01 kaynağın dışladığı gün; hicrî sözleşmeye göre 1524-10-29 |
| `cemisgezek-beyligi` | 1452-01-01 | CELISIYOR: künye t 1420 'Kara Yülük Şeyh Hasan'dan aldı, kendi başına idare sona erdi' diyor; TDV'de 1452'de Çemişgezek hâkimi Şeyh Hasan Akkoyunlularca hâlâ itaate alınmaya çalışılıyor — 1420 bitişi ya da yerel hanedanın tâbi devamı yeniden ölçülmeli |
| `crnojevic-zetasi` | 1496-01-01 | CELISIYOR: künye t: 1499-01-01 (kaynaksız); Emecen son yılı 1496 veriyor. 1499 metinde yalnız Đurađ'ın Kotor'a dönüş BEKLENTİSİ olarak geçer |
| `dejanovic-prensligi` | 1371-01-01 | CELISIYOR (gün): künye f: 1371-09-26 Çirmen gününden devralınmış; kaynak yalnız yıl veriyor (kuruluş savaşın ARDINDAN) |
| `dejanovic-prensligi` | 1395-01-01 | CELISIYOR (gün): künye t: 1395-05-17 Rovine günü olarak devralınmış; üç TDV maddesi de yalnız 1395 diyor |
| `dukagin` | 1444-03-01 | CELISIYOR: künye kronolojisi 1444-03-02 diyor, TDV 1 Mart 1444; ayrıca Dukagin katılımı TDV'de yok |
| `eyyubi-meyyafarikin` | 1185-04-03 | CELISIYOR: künye f 1185-01-01 hicrî yılın dışladığı güne düşüyor; doğrusu 1185-04-03 (h. 581) |
| `fransiz-misir-seferi` | 1798-06-30 | CELISIYOR: künye f:1798-07-01. TDV iskenderiye '30 Haziran 1798' diyor; Fondation Napoléon çıkarmayı 1 Temmuz, şehrin alınmasını 2 Temmuz 1798 veriyor. TDV esas alındı, kaynaklar arası 2 günlük fark beyan edildi. |
| `fransiz-misir-seferi` | 1801-08-01 | CELISIYOR: künye t:1801-10-02 ve kronoloji 'Amiens Antlaşması ile sona erdi' — TDV Ağustos 1801 diyor; Amiens Antlaşması Mart 1802'dir, 2 Ekim 1801 tahliyeye dayanmıyor. Ek: İskenderiye kapitülasyonu yaygın olarak 2 Eylül 1801 verilir (resmî London Gazette'te yer alır, bu oturumda okunmadı) — gün gerekiyorsa ayrıca doğrulanmalı. |
| `galzay` | 1709-03-12 | CELISIYOR: künye f 1709-04-21 günü TDV'de yok (kandehar 1121/1709, safeviler 1709 — yalnız yıl); gün akademik kaynakta da bu turda doğrulanamadı |
| `galzay` | 1722-11-10 | CELISIYOR: künye kronolojisi 1722-10-23 diyor; TDV safeviler 30 Muharrem 1135 / 10 Kasım 1722 |
| `galzay` | 1738-03-01 | CELISIYOR: künye t 1738-01-01; TDV Zilkade 1150 (Mart 1738) |
| `gozleroglu` | 1408-05-27 | CELISIYOR: künye f 1408-01-01 hicrî sözleşmeye aykırı (h. 811 1 Ocak 1408'i dışlar), yıl uyuşuyor |
| `harfusogullari` | 1520-11-01 | CELISIYOR: künye f 1521-01-01 — isyan 1520 sonbaharında başlayıp 27 Ocak 1521'de bitti; yerleşme 1520 de olabilir, 1521 tek başına kaynaklı değil |
| `idrisi` | 0985-05-23 | CELISIYOR: künye t:0985-01-01 — hicrî gün sözleşmesine göre 0985-05-23 olmalı. |
| `kaheti-kralligi` | 1578-01-01 | CELISIYOR: künye kronolojisi 1578-08-09 diyor; TDV'ye göre itaat Tiflis'in 24 Ağustos'ta alınmasından SONRA — 9 Ağustos imkânsız |
| `katalan` | 1387-01-01 | CELISIYOR: künye t: 1388-05-02; TDV 1387 (Britannica WebSearch özeti 1388 — tarih çelişkisi, TDV esas; 2 Mayıs günü hiçbir kaynakta okunmadı) |
| `katalan` | 1391-01-01 | CELISIYOR: künye t: 1388-05-02 Neopatras kolunu dışarıda bırakıyor (künye ozeti 'birkaç yıl daha sürdü' diyor); kaynak son Katalan merkezinin 1391'de el değiştirdiğini gösteriyor. ⚠️ Çıkarım: TDV Katalan sonunu ADIYLA tarihlemiyor, Nerio idaresinin başlangıcını veriyor |
| `kerayit` | 1199-01-01 | CELISIYOR: künye f:1199 bu olaya bağlanmış — bu bir savaştır, Kerâyit devletinin doğuşu değil. |
| `kibris-ingiliz` | 1878-07-15 | CELISIYOR: künye f:1878-06-04 imza günüdür; idarenin fiilen/resmen devri 15 Temmuz 1878. Harita değişimi yürürlük günüyle olmalı (karar koordinatörde). |
| `kibris-krallik` | 1426-01-01 | CELISIYOR (gün): künye kronolojisi 1426-07-07 ve 'TDV kapsam dışı' diyor; TDV olayı KAPSIYOR ama yalnız yıl veriyor (Hirokitia adı ve gün TDV'de yok) |
| `koco-uygur` | 1209-01-01 | CELISIYOR: künye t:1209-01-01 devletin SONU olarak kullanılıyor; TDV'ye göre 1209 bir tâbiiyet değişimidir, devlet Moğol idaresinde varlığını sürdürdü (aşağıdaki yikilis satırı). |
| `koco-uygur` | 1368-01-01 | CELISIYOR: künye t:1209. TDV turfan ayrıca İdikut sülâlesinin 1353'te İdikut olan Sangga ve Budashri'den sonra Hos-hang devrinde bittiğini söylüyor (yıl yok) — son için 1368 TDV uygurlar'ın verdiği yıldır; sınır kaydırması koordinatör hükmüdür. |
| `konstantin-beyligi` | 1837-10-13 | CELISIYOR: künye t: 1844-03-04 (veriden devralınmış, kaynaksız); TDV beyliğin merkezinin düşüşünü 13 Ekim 1837 verir |
| `kuayti-sultanligi` | 1967-01-01 | CELISIYOR (gün doğrulanamadı): künye t 1967-11-30 — TDV yemen/aden/hadramut gün vermiyor; Britannica 403; yalnız Vikipedi 17 Eylül 1967 (MKC monarşiyi devirdi) ve 30 Kasım 1967 (devletin feshi) veriyor — Vikipedi tek dayanak olamaz. Ayrıca harita için 17 Eylül 1967 devrilişi 30 Kasım'dan önce olabilir: akademik kaynakla doğrulanmalı |
| `kuba-hanligi` | 1806-01-01 | CELISIYOR: künye kronolojisi 1806-10-03 günü çıkarımdır (kendi notunda da), TDV yalnız 1806 |
| `kumuk-samhalligi` | 1578-01-01 | CELISIYOR: künye f 1578-11-01 günü TDV'de yok (yalnız yıl, bölge çapında) |
| `kumuk-samhalligi` | 1606-01-01 | CELISIYOR: künye t 1607-01-01; TDV dagistan Osmanlı hâkimiyetinin ucunu 1606 veriyor (1607 Şamahı'nın düşüşü) |
| `magrave-sicilmase` | 0976-08-29 | CELISIYOR: künye f:0976-01-01 — hicrî gün sözleşmesine göre 0976-08-29 olmalı (h. 366 976-08-29'da başlar; 1 Ocak 976 kaynağın dışladığı gün). |
| `magrave-sicilmase` | 1053-04-22 | CELISIYOR: künye t:1053-01-01 — sözleşmeye göre 1053-04-22. Ek not: TDV maddesi 976-1053 arasındaki Mağrâve emîrlerini adlandırmıyor ve 445 fethinin Mağrâve yönetimine son verdiğini AÇIKÇA söylemiyor; 'Murâbıt fethi = Mağrâve sonu' bağı künyenin çıkarımıdır. |
| `mutahharten` | 1401-01-01 | CELISIYOR: künye kronolojisi 1401'i 'Timur'a itaat' diye veriyor; TDV'de 1401 Yıldırım Bayezid'in Erzincan-Kemah'ı alıp Mutahharten'i tâbi kıldığı yıldır |
| `nayman` | 1199-01-01 | CELISIYOR: künye f:1199 bu yenilgiye bağlanmış — Nayman devletinin doğuşu değil. |
| `nebhani` | 1615-01-31 | CELISIYOR: künye t 1515-04-01 — TDV uman 1515'i hiç vermiyor (yalnız 1507 sahil şehirleri); TDV yarubiler Ya'rubîlerin 'Nebhânîler'den sonra' 1615 (alt. 1624) geldiğini söylüyor ⇒ Portekiz yalnız sahili aldı, Nebhânî iç hâkimiyeti ~1615-1624'e dek sürmüş görünüyor. ÖLÇÜLEMEDİ: atlas künyesi yalnız sahil kolunu mu temsil ediyor — koordinatör hükmü |
| `ramazanoglu` | 1352-02-18 | CELISIYOR: künye f 1352-01-01 hicrî sözleşmeye aykırı (h. 753 1 Ocak 1352'yi dışlar) |
| `ramazanoglu` | 1516-08-24 | CELISIYOR: künye kronolojisi tâbiyet değişimini 1517-01-22'ye (Ridâniye) koyuyor; TDV'de tevcih Mercidâbık (24 Ağustos 1516) sonrasında, Ridâniye'de ise Mahmud Bey öldü |
| `ramazanoglu` | 1608-04-17 | CELISIYOR: künye t 1608-01-01 hicrî sözleşmeye aykırı; ayrıca TDV bunu yalnız rivayet olarak veriyor |
| `rif-cumhuriyeti` | 1921-06-22 | CELISIYOR: künye özeti '22 Temmuz 1921' diyor; iki TDV maddesi de '22 Haziran 1921' yazıyor. Yaygın akademik tarih Temmuz 1921'dir — TDV'de ay hatası ihtimali; öncül tartışmalı ⇒ ÖLÇÜLEMEDİ, haritaya girmeden önce ikinci akademik kaynakla doğrulanmalı. |
| `rif-cumhuriyeti` | 1926-05-21 | CELISIYOR: künye t:1926-05-27; TDV fas 21 Mayıs 1926 diyor (TDV abdulkerim-el-hattabi yalnız yıl veriyor, gün çelişkisi yok). Başka kaynaklarda 26/27 Mayıs teslim günü geçiyor (Britannica 403, okunamadı) — TDV esas alındı, kesin hüküm koordinatörde. |
| `sacogullari` | 0889-05-05 | CELISIYOR: künye f 0889-01-01 hicrî yılın dışladığı güne düşüyor; doğrusu 0889-05-05 (h. 276) |
| `sacogullari` | 0893-03-22 | CELISIYOR: künye kronolojisi 0893-01-01; doğrusu 0893-03-22 (h. 280) |
| `sacogullari` | 0929-09-08 | CELISIYOR: künye t 0929-01-01; TDV Şâban 317 (Eylül 929) |
| `sani-emirligi` | 1871-01-01 | CELISIYOR: künye f 1871-09-20 — TDV yalnız '1871 sonbaharında' diyor; 09-20 günü kaynaksız (künyenin kendi notu da bunu beyan ediyor) |
| `sani-emirligi` | 1913-07-29 | CELISIYOR: künye t 1913-07-29 bunu SON sayıyor — TDV antlaşmanın 'yürürlüğe girmediğini' yazıyor; Osmanlı varlığı I. Dünya Savaşı'yla sona erdi (TDV gün vermiyor) |
| `sani-emirligi` | 1916-11-03 | CELISIYOR: künye t 1913-07-29 — kaynak 1913 antlaşmasını yürürlüksüz sayıyor; tâbiyet değişimi TDV'de 3 Kasım 1916 (Osmanlı garnizonunun çıkış günü TDV'de bulunamadı) |
| `saruhan` | 1310-05-31 | CELISIYOR: künye f 1313-01-01'i kesin veriyor; TDV 713/1313'ün çağdaş kaynağa dayanmadığını, fethin yalnız 710 (1310) sonrası olduğunu söylüyor |
| `saruhan` | 1402-08-17 | CELISIYOR: künye kronolojisi 1402-07-28 (Ankara Savaşı günü); TDV dirilişi 17 Ağustos 1402 diye günüyle veriyor |
| `saruhan` | 1416-03-01 | CELISIYOR: künye t 1416-09-01 — TDV gün/ay vermiyor (yalnız 819/1416); künye kronolojisindeki '1410 son' maddesi TDV ile çelişiyor (Manisa kolu 1411'den sonra, 1415'ten önce bitti) |
| `suud-ikinci` | 1824-01-01 | CELISIYOR: künye f 1824-06-01 — TDV (necid, riyad, suudi-arabistan) yalnız 1824 yılı veriyor; 06-01 günü kaynaksız |
| `suud-ikinci` | 1891-01-01 | CELISIYOR: künye t 1891-01-24 (Müleyde) — TDV yalnız 1891 yılı veriyor, Müleyde TDV'de hiç geçmiyor (arama 0 sonuç); gün kaynaksız |
| `tahiri-horasan` | 0873-08-01 | CELISIYOR: künye t 0873-01-01; TDV Şevval 259 (Ağustos 873) |
| `teke` | 1373-05-14 | CELISIYOR: künye kronolojisi 1373-01-01; TDV günü 14 Mayıs 1373 veriyor |
| `topia` | 1392-01-01 | CELISIYOR: künye kronolojisi 1392'yi 'toprak-kayip / Kruya elden çıktı' diye yazıyor; TDV'de kasaba aile içinde (Helena) kalıyor |
| `yezd-atabegligi` | 1141-08-05 | CELISIYOR: künye f 1141-01-01 kuruluş sayıyor; TDV 536/1141'i Gerşâsb'ın ölümü için veriyor, atabeg tayini sonradır (yılı yok) |
| `yezd-atabegligi` | 1318-03-04 | CELISIYOR: künye t 1318-01-01 hicrî yılın dışladığı güne düşüyor; doğrusu 1318-03-04 (h. 718) |
| `zend` | 1766-06-08 | CELISIYOR: künye kronolojisi 1765-01-01 diyor, TDV 1180 (1766-67) |
| `zend` | 1779-03-01 | CELISIYOR: künye kronolojisi 1779-01-01 (yıl uyuşuyor, TDV ayı Mart veriyor) |
| `zend` | 1794-12-23 | CELISIYOR: künye t 1794-01-01; TDV Aralık 1794 (Cemâziyelâhir 1209) veriyor |

## Ek C — doğuş / yıkılış kapsaması

- madde yazılan künye: **57**
- doğuş maddesi olan: 45 · eksik: `ahiler`, `cemisgezek-beyligi`, `crnojevic-zetasi`, `kaheti-kralligi`, `kerayit`, `kuba-hanligi`, `kumuk-samhalligi`, `nayman`, `nebhani`, `sabah-emirligi`, `teodoro`, `yezd-atabegligi`
- yıkılış maddesi olan: 54 · eksik: `cemisgezek-beyligi`, `dukagin`, `kumuk-samhalligi`

# KAMP-EKSIK-KRONOLOJI — 1. + 2. tur (K0, `oturumlar/KAMPANYA-DUNYA-1010.md §2`)

## 0. 2. tur (11 Ekim 2026) — iş bölümü ve sonuç
Koordinatör 228'i ikiye böldü: **A–M bu oturumda**, N–Z `KAMP-EKSIK-KRONOLOJI-B`de (M-5931/M-5932:
"ilk yarı" = 114 ile "A–M" = 132 farklı evren; harf ölçütü A–M alındı, 1. turda yapılmış 21 N–Z künye
B'ye adıyla bildirildi). A–M evreni **132 künye — 132'sinin HEPSİ için satır var** (madde ya da gerekçeli
`bulunamadı`); 126'sında en az bir kaynaklı madde, 6'sında yalnız `bulunamadı`
(`adar` · `betsileo` · `birom-plato` · `buna` · `dacu` · `kaonde-ila`).
2. tur: 96 künye, altı grup (F/G B. Afrika · H K. Amerika + Belize · I D./G. Afrika · J G./GD/D. Asya ·
K Orta Afrika + karışık) → **263 madde**, 83 `bulunamadı`, 65 çelişki. Toplam dosya (iki tur): **474 madde ·
153 künye** (147 maddeli). Aşağıdaki §1-§5 1. turun metnidir; §3 sayıları ve Ek A/B/C İKİ TURU kapsar.

### 2. tur kaynak notları
- Britannica çoğunlukla Cloudflare doğrulamasına (403) takıldı — **doğrulama AŞILMADI.** Okunan yollar:
  uygulamanın yerleşik tarayıcısında sayfanın kendisi (I) · tam tarayıcı başlıklı curl, yalnız 200 dönenler
  (F, H, J) · web.archive.org 2025 kopyaları, kaynak alanında beyanlı (K). Arama özetine dayanan satırlar
  `zayif:true` (2. turda 7: danzig ×2 · don-kazak 1570 · liptako 1897 · medang ×2 lisans makalesi ·
  hosut 1637 "atıf yapmayın" taslağı). İki turda toplam **14 zayıf satır** (Ek D) — yazıma alınmadan
  ikinci kaynak gerekir.
- UNESCO General History of Africa V-VII (G) **sahistory.org.za aynasından** indirildi (UNESCO'nun kendi
  sitesi değil); bazı sayfa numaraları dizinden çıkarıldı (yaklaşık), alıntılar birebir.
- Kuzey Amerika (H): Kappler *Indian Affairs: Laws and Treaties* (antlaşma metinleri, imza günleri) ·
  The Canadian Encyclopedia · Dictionary of Canadian Biography · Handbook of Texas · eyalet ansiklopedileri ·
  NPS · history.state.gov. Bosque Redondo maddeleri bir "Friends of" derneği sitesine dayanıyor (beyanlı).
- Halk künyeleri (K. Amerika, Afrika): kaynakta kuruluş olayı yok ⇒ doğuş `bulunamadı`; kaynaklıysa
  "ilk tarihî kayıt" `tur:diger` olarak yazıldı. Doğuş kapsamasının düşük olması (Ek C) bu sınıftandır.

### 2. turun koordinatör hükmü bekleyen kalemleri
- Künye ucu kaynakla ÇOK uzak: `matamba` t 1744 (yalnız göstermelik vasallık) ↔ krallık ~1909'a kadar ·
  `hawaii-seflikleri` t 1795 ↔ Kauai/Niihau 1810 · `kutai` t 1908 ↔ 1960 · `dogu-sumatra-sultanliklari`
  t 1858 (vasallık) ↔ Siak 1945 · `gane` t ↔ son kalıntı 1240 (ardıl Susu mu?) · `burundi` t 1916 kaynaksız
  (1890/1903 bağımsızlık kaybı · 1919 manda · 1966 monarşi sonu?) · `griqua` t 1878 ↔ Griqualand East 1874.
- Kaynak çelişkisi: `dahomey` Fransız yenilgisi 1892 (Britannica) ↔ 1893 (TDV benin) · `banda-adalari`
  Portekiz ilhakı (Britannica 1512) ↔ TDV "hiç üs kurmadılar" = OLGU çelişkisi, ÖLÇÜLEMEDİ ·
  `bonacolsi` başlangıç Treccani 1273-07-18 ↔ Britannica 1276.
- Künye kaynağı yanlış: `hosut` TDV `kalmuklar` Kökönor Hoşutlarını kapsamıyor · `arua` bölüm yazarı
  Métraux değil Nimuendajú.


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
kaynak kuralının en sağlam uygulandığı yerden başlandı. 1. turdan sonra kalan 171 künyenin A–M kısmı (96) 2. turda tamamlandı (§0); N–Z kısmı
`KAMP-EKSIK-KRONOLOJI-B`dedir — **bu oturumun sınırı A–M'dir.**

## 3. Sayılar

| | |
|---|---|
| | 1. tur | **iki tur toplam** |
|---|---|---|
| madde | 211 (57 künye) | **474** (147 maddeli künye · 153 satırlı) |
| kesinlik | gün 50 · ay 20 · yıl 95 · yıl-hicri 38 · yaklaşık 8 | gün 117 · ay 31 · yıl 246 · yıl-hicri 42 · yaklaşık 38 |
| `harita_degisimi = EVET` | 165 | 349 |
| doğuş maddesi olan künye | 45 | 79 (Ek C) |
| yıkılış maddesi olan künye | 54 | 133 (Ek C) |
| `bulunamadı` satırı | 21 | 104 (Ek A) |
| künyeyle çelişki | 69 | 134 (Ek B) |
| `zayif` satır | 7 (Britannica arama özeti) | 14 (Ek D) |
| biçim kapısı (tarih ↔ kesinlik, kaynaksız satır) | 0 kusur | 0 kusur |

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

## Ek A — `bulunamadı` (104 satır, adıyla)

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
| `adar` | dogus | TDV nijer, hevsa, sokoto (gövde okundu: Tahoua/Konni yalnız coğrafî ya da 'Birnin Konni'ye uzanan arazi ihya edildi' bağlamında, Adar kuruluşu yok) · TDV slug 'tahoa','gobir' 302 · Britannica 'Tahoua' (200; tarih yok) · Persée araması (sonuç listesi okunamadı). Künyenin 1281-01-01'i atlas ufkudur, kaynak değil. |
| `adar` | yikilis | TDV nijer (yalnız 1904 'Zinder askerî bölgesi'), sokoto, hevsa · Britannica 'Birni-Nkonni' 403 (Cloudflare) · Konni katliamı 8 Mayıs 1899 (Voulet-Chanoine) yalnız Vikipedi ve LRB blog'unda — akademik/kurumsal dayanak bulunamadı. Künye t:1899-01-01 doğrulanamadı. |
| `aro-konfederasyonu` | dogus | Britannica 'Arochukwu' (200, gövde okundu): Aro'nun 18.-19. yüzyılda güneydoğu Nijerya'ya hâkim olduğunu söylüyor, kuruluş yılı vermiyor · TDV nijerya (Aro kuruluşu yok). Künyenin 1690-01-01'i dayanaksız. |
| `bate` | dogus | TDV gine (gövde okundu): 'Diafunu'dan gelen müslüman Mandinkalar Kankan, Bate ... gibi şehirleri kurarak' — YIL YOK. Britannica 'Kankan' (200): Kankan'ı 18. yüzyılda Soninke tüccarların kurduğunu söylüyor — künyenin 1650'si (17. yy) ile ÇELİŞİYOR ve TDV'nin 'Diafunu Mandinkaları' anlatısından farklı. Yıl yazılamadı. |
| `birom-plato` | dogus | Halk; kaynakta kuruluş olayı yok. Britannica 'Birom' (200; yalnız dans ve Jos maddesine atıf) · TDV nijerya. Künyenin 1281-01-01'i atlas ufkudur. |
| `birom-plato` | yikilis | Britannica 'Birom'/'Jos' atfı: İngilizlerin bölgedeki kalay yataklarını 'about 1903' öğrendiğini söylüyor — bu bir İLHAK/fetih olayı DEĞİL; künyenin t:1903-01-01'i büyük olasılıkla bu cümleden türetilmiş, dayanak sayılamaz. Plato seferi için kabul edilir kaynak bulunamadı. |
| `borgu` | dogus | TDV benin (Borgu/Bariba yalnız nüfus ve 19. yy İslâmlaşma bağlamında) · Britannica 'Borgu' 403/404. Künyenin 1281-01-01'i atlas ufkudur. |
| `buna` | dogus | Britannica 'Bouna' (200, Côte d'Ivoire/Precolonial kingdoms atfı): 'created in the late 17th century by Bounkani, an immigrant from Dagomba' — YIL YOK. Künyenin 1690-01-01'i yıl olarak dayanaksız. TDV fildisi-sahili, burkina-faso (Buna yok). |
| `buna` | yikilis | Samori kuvvetlerinin Buna'yı alışı (Aralık 1896) ve Braulot'nun öldürülmesi (20 Ağustos 1897) yalnız Vikipedi/turizm sayfalarında; kabul edilir kaynak bulunamadı. TDV samori-ture Buna'yı anmıyor. Künye t:1897-01-01 doğrulanamadı. |
| `bundu` | dogus | M. A. Gomez, Pragmatism in the Age of Jihad: The Precolonial State of Bundu (Cambridge UP 1993) bölüm özetleri (cambridge.org, 200): kuruluş 'late seventeenth century', Malik Sy kurucu — YIL YOK. Künyenin 1690-01-01'i ve Malik Sî'nin ölümü 1699 yalnız Vikipedi'de; doğrulanamadı. |
| `bundu` | yikilis | Fransız himayesinin kesin tarihi: Gomez bölüm özetleri tarih vermiyor; '1845 antlaşması / 1858 kesin Fransız denetimi' yalnız Vikipedi (1911 ansiklopedi alıntısı) — tek dayanak olamaz. A. Rançon 'Le Bondou' (1894, Gutenberg) okunmadı. Künye t:1858-01-01 doğrulanamadı. |
| `dagbon` | dogus | Britannica 'Dagomba' (200): 'According to tradition, the Dagomba kingdom was founded by northern invaders in the 14th century' — YIL YOK ve künyenin 1401'i (15. yy) ile yüzyıl düzeyinde ÇELİŞİYOR; TDV gana 'XV. yüzyılda kuzeydeki Dagomba ... devletleri' diyor (yine yıl yok). Kaynaklar yüzyılda bile ayrışıyor. |
| `damagaram` | dogus | Britannica 'Zinder' (200): 'capital of a Muslim dynasty established in the 18th century' — YIL YOK. 1731 (kuruluş) ve 1736 (Zinder başkent) yalnız Vikipedi/ADF dergisi; André Salifou, Le Damagaram (Niamey 1971) erişilemedi. TDV slug 'zinder','damagaram' 302; TDV nijer/bornu Damagaram'ı anmıyor. |
| `damagaram` | tabiyet | Britannica 'Zinder': hanedanın Bornu egemenliğinden 'in the mid-19th century' kurtulduğunu söylüyor — YIL YOK, madde yazılmadı. |
| `eve-notse` | dogus | Britannica 'Ewe' (200): 'The Ewe never formed a single centralized state, remaining a collection of independent communities' — künyenin 'Notse Birliği'ni bir DEVLET olarak tanımlaması bu cümleyle ÇELİŞİYOR (koordinatöre: künye türü sorgulanmalı). Kuruluş olayı/yılı yok; künyenin 1281-01-01'i atlas ufkudur. Notse'den çıkış (Agorkoli) için kabul edilir kaynak bulunamadı. |
| `eve-notse` | yikilis | Ayrı bir yıkılış olayı yok: Britannica Ewe'nin tek merkezî devlet kurmadığını söylüyor; künyenin t:1884-07-05 ucu karşılığı bu dosyadaki 1884 TABİYET maddesidir (TDV togo, yalnız yıl). Notse merkezli birliğin sonu için kabul edilir kaynak bulunamadı. |
| `gambiya-mandinka` | dogus | TDV gambia (tarih bölümü, Davut Dursun) ve GHA V (Kaabu/Mande prenslikleri) tarandı: Niumi/Kombo/Vuli için kuruluş olayı ve yılı yok; GHA V Mande prensliklerinin Kaabu'ya bağlandığını yüzyıl düzeyinde anlatır. Künyenin 1281 'Mali'nin çözülmesiyle bağımsızlaştılar' maddesi kaynaksız (Mali 1281'de çözülmüyordu). |
| `gane` | dogus | TDV gane (Abdülazîz el-Alevî) kuruluş hakkında bilgi olmadığını açıkça söylüyor; TDV mali yalnız 'milâttan sonra ilk binyıl' diyor. Yıl yok. |
| `gurma` | dogus | GHA V bölüm 12 (Izard & Ki-Zerbo, 'From the Niger to the Volta') Gulmance devletinin başlangıcını 'muhtemelen XV. yy ya da en erken XIV. yy sonu' diye verir; Buricimba'nın We köyüne varışı 'yaklaşık 1500'lerin ortası'. Yıl yok. TDV burkina-faso Gurma devletini tarihlendirmiyor. |
| `gyaaman` | dogus | GHA V (bölüm 12 ve 14) Gyaaman/Bron devletini Denkyira-Adansi göçmenlerinin (Aduana klanı) kurduğunu ve Tan Date'nin XVII. yy'da güçlendirdiğini yazar; kuruluş yılı yok. 1690 yalnız Vikipedi'de. |
| `ingiliz-altin-kiyisi` | baskent | Başkentin Cape Coast'tan Accra'ya (Christiansborg) taşınması LoC'de yılsız; GHA VI/VII'de yıl bulunamadı. |
| `jukun-kvararafa` | dogus | TDV'de Kvararafa/Jukun maddesi yok (slug 302; kano/nijerya maddelerinde geçmiyor). GHA V/VI kuruluş tarihi vermiyor; Kvararafa'yı XIV. yy Kano Kroniği bağlamında anar (köle vergisi, Yaji 1349-85). |
| `jukun-kvararafa` | yikilis | TDV nijerya yalnız 1914'e kadar Nijerya'nın tamamına yakınının İngilizlere geçtiğini söylüyor; GHA VII'de Jukun/Wukari geçmiyor. Wukari'nin İngiliz idaresine giriş yılı bulunamadı. |
| `kenedugu` | dogus | GHA VI bölüm 25 (Kenedugu Traoré'leri XVIII. yy'da Sikasso çevresinde örgütlendi; 'Between 1850 and 1860, Laula founded the power of the Traoré'), GHA V bölüm 12 ('only in about the nineteenth century'). Kuruluş yılı yok. |
| `kevkev` | dogus | TDV gao: Kevkev Krallığı 'IX. yüzyılda ortaya çıkan' — yalnız yüzyıl; yıl yok. |
| `kru-grebo` | dogus | Halk; kaynakta kuruluş olayı yok. GHA VI bölüm 24 Grebo'nun kıyı kolunun 'en az 1701'den beri' yerleşik olduğunu yazar (yıl değil, alt sınır). |
| `abenaki` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: The Canadian Encyclopedia 'Abenaki', Britannica 'Abenaki'. Künyenin f:1281 atlas ufkudur. |
| `mikmak` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: The Canadian Encyclopedia 'Mi'kmaq' ve 'Peace and Friendship Treaties'. |
| `maliseet` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: The Canadian Encyclopedia 'Maliseet', Britannica 'Malecite'. |
| `beothuk` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: DCB 'Shawnadithit', The Canadian Encyclopedia 'Beothuk'. TCE ilk olası Avrupa kaydını 'perhaps 1501' diye şüpheli veriyor. |
| `miami` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Britannica 'Miami'; Ohio History Central sayfaları 404. |
| `choctaw` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Encyclopedia of Alabama 'Choctaws', OHS 'Choctaw'. Künye de kuruluş tarihi olmadığını yazıyor. |
| `cikasav` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Encyclopedia of Alabama 'Chickasaws', Mississippi Encyclopedia 'Chickasaws', OHS 'Chickasaw'. |
| `mandan` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: NPS Knife River 'Mandan', Britannica (Mandan sayfası 403). |
| `hidatsa` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: NPS Knife River 'Hidatsa', Britannica 'Hidatsa'. |
| `karga` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Kappler (Fort Laramie 1851, Crow 1868); Britannica 'Crow' 3 denemede 403. Künyenin 1743 'ilk Avrupa teması' maddesi kurumsal kaynakla doğrulanamadı. |
| `aleut` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: NPS 'Unangax̂ History and Culture', Britannica 'Aleut'. |
| `alutiiq` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Alutiiq Museum 'History'. Müze bölgede 7.800 yıldan uzun yerleşim yazıyor; kuruluş olayı yok. |
| `mohave` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Kappler; Britannica 'Mohave'/'Mojave-people' 404/403. |
| `klamath` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Kappler, Oregon Encyclopedia ('klamath' slugları 404, 'modoc_war' 200); Britannica 'Klamath' 403/404. |
| `meskalero-apaci` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Handbook of Texas 'Apache Indians', Britannica 'Apache'. Künye f:1281 atlas ufku. |
| `apaci-ovalar` | dogus | halk; kaynakta kuruluş olayı yok. Bakılan: Britannica 'Apache', OHS 'Apache Tribe of Oklahoma'. Künye f:1281 atlas ufku. |
| `ingiliz-hondurasi` | diger | 1884 Jamaika'dan ayrılma (künye kronoloji 1884-01-01): LoC Country Studies sayfa 11-12 ve Britannica 'Belize/History' okunan metinlerinde bulunamadı; künyenin dayanağı Worldmark arama özeti. Doğrulanmadı. |
| `antandroy` | dogus | Halk; kaynakta kuruluş olayı yok. Britannica 'Antandroy' (tarayıcıyla doğrudan okundu): yalnız Merina/Sakalava'dan bağımsız kaldıkları ve 1895'te beş küçük devlete bölünmüş oldukları; TDV madagaskar Antandroy'u anmıyor. Künye f 1281 pencere başıdır. |
| `betsileo` | dogus | Britannica 'Betsileo' (doğrudan okundu): 'başlangıçta çok sayıda özerk klana bölünmüştü' — kuruluş olayı/yılı yok. TDV madagaskar yalnız etnik grup olarak anar. Künye f 1281 pencere başıdır. |
| `betsileo` | yikilis | Britannica 'Betsileo': Merina 'erken 19. yüzyılda' fethetti (yıl yok); Britannica Madagascar 1650-1810: Andrianampoinimerina (h. 1787-1810) Betsileo'yu fethetti (yıl yok); TDV madagaskar: I. Radama (1810-1828) adanın 2/3'üne hâkim oldu (Betsileo adı yok). ⇒ künye t 1830-01-01 DAYANAKSIZ; kaynaklar fethi 1787-1810 (Andrianampoinimerina) ile 'erken 19. yy' arasına koyuyor, 1830'u değil. |
| `betsimisaraka` | dogus | Britannica 'Betsimisaraka' (doğrudan okundu): krallığı Ratsimilaho 'erken 18. yüzyılda' kurdu — YIL YOK. Britannica Madagascar 1650-1810: '18. yüzyılda' konfederasyon. ⇒ künye f 1712-01-01 bu kaynaklarda yok. |
| `merina-oncesi` | dogus | Britannica 'Merina': Merina 15. yüzyılda yaylaya girip kısa sürede küçük bir krallık kurdu (yüzyıl); Britannica Madagascar 1650-1810: İmerina '16. yüzyılın sonlarına doğru' Ikopa vadisinde kuruldu (yüzyıl). İki Britannica metni yüzyılda ÇELİŞİYOR, yıl yok ⇒ künye f 1401-01-01 dayanaksız (ÖLÇÜLEMEDİ). |
| `burundi` | dogus | Britannica 'Burundi: History' (doğrudan okundu): Tutsi monarşisi '16. yüzyılda' Ntare Rushatsi (Ntare I) tarafından kuruldu — YIL YOK; köken rivayetleri (Ruanda / Buha) çelişik. TDV 'burundi' 302 (ölü slug). UPenn Burundi kronolojisi 1858 öncesi tarih vermiyor. ⇒ künye f 1680-01-01 kaynakla ÇELİŞİYOR (kaynak 16. yy diyor) ama yıl yazılamaz. |
| `burundi` | yikilis | Künye t 1916-06-06 (Belçika işgali) için gün/yıl veren kabul edilir kaynak BULUNAMADI: Britannica Burundi/German East Africa yalnız 'Birinci Dünya Savaşı'ndan sonra Belçika'ya verildi', Britannica Tanzania 'İngiliz ilerleyişi 1916'dan itibaren' (Burundi'ye özgü değil), UPenn kronolojisinde 1916 yok. Ayrıca krallık KURUM olarak 1966'ya dek sürdü: Britannica 'Burundi: History' — Temmuz 1966'da Mwambutsa oğlu tarafından tahttan indirildi, oğlu da Kasım 1966'da devrilip Birinci Cumhuriyet ilan edildi. Polity sonu tanımı (bağımsızlığın kaybı 1903 mü, monarşinin sonu 1966-11 mi) koordinatörün hükmü. |
| `fipa-nyakyusa` | dogus | Halk birliği. Britannica 'Fipa' (doğrudan okundu): Milansi merkezli segmanter devlet '300-500 yıl önce' kuruldu (göreli, yıl yok). Britannica 'Nyakyusa': siyasî tarih/tarih yok. Künye f 1281 pencere başıdır. |
| `hehe` | dogus | Britannica 'Hehe' (doğrudan okundu): Munyigumba halkları 'mid-19th century' tek siyasî birlikte topladı — YIL YOK. Britannica 'Mkwawa' derlemesinde '…in 1879, under his son Mkwawa, a powerful state was built up' kesik parçası var (öncesi paywall) — Munyigumba'nın kuruluşunu tarihlemiyor. Redmayne, 'Mkwawa and the Hehe Wars' (JAH 9/3, 1968) PDF'i Cambridge'ten indirilemedi (HTML döndü). ⇒ künye f 1850-01-01 dayanaksız. |
| `kamba` | dogus | Halk; kaynakta kuruluş olayı yok. Britannica 'Kamba' (doğrudan okundu): tarih vermiyor; Britannica eastern Africa 'Northeastern Bantu' (kısmen, paywall): Kamba atalarının Shungwaya kökeni 'tartışmalı', tarih yok. TDV kenya yalnız nüfus oranı. Künye f 1281 pencere başıdır. |
| `kaonde-ila` | dogus | Halk; kaynakta kuruluş olayı yok. Britannica 'Kaonde' (doğrudan okundu): bugünkü yurtlarına '16. ve 17. yüzyıllarda' yerleştiler, Lunda'yı metbû tanıdılar; '18. yüzyılda' özerk şeflikler — YIL YOK. Britannica 'Ila' 404. Britannica 'Lewanika': Lozi kralı Ila ve Toka'yı yağmalayıp denetimini genişletti (tarih yok). Künye f 1281 pencere başıdır. |
| `kaonde-ila` | yikilis | Kaonde/İla'nın İngiliz idaresine giriş günü/yılı kabul edilir kaynakta BULUNAMADI: Britannica Zambia (External contacts / Colonial rule) yalnız 1889 BSAC beratı, 1890'larda antlaşmalar ve 1911 Kuzey Rodezya birleşmesini verir; TDV zambiya 1890 Lewanika himayesi ve 1894 kabulü (Kaonde/İla'ya özgü değil). Künye t 1900-01-01 dayanaksız. |
| `kenya-kuzey-halklari` | dogus | Merkezî devlet kurmamış pastoral halklar; kuruluş olayı yok. Britannica 'Turkana' (kısmen, paywall): Turkana bugünkü topraklarına 'yaklaşık 200 yıl önce' kuzeydoğu Uganda'dan geldi (göreli, yıl yok); Britannica 'Boran'/'Rendille' 404; TDV kenya bu halkları yalnız Müslüman etnik grup olarak anar. Künye f 1281 pencere başıdır. |
| `griqua` | dogus | Halk/karma topluluk; kaynakta devletleşme olayı ve yılı yok. Britannica 'Griqualand West': bölge Griqualarca '18. yüzyılın sonlarında' iskân edildi (yüzyıl); Britannica 'Griqua': '19. yüzyıl halkı'. Griquatown/Kokstad/Philippolis Britannica maddeleri 404. ⇒ künye f 1804-01-01 dayanaksız. |
| `herero` | dogus | Halk; kaynakta kuruluş olayı yok. Britannica 'Herero' (doğrudan okundu): başlangıçta yerel reislere bağlı özerk birimler; Britannica Namibia: kil sistemleri 'sonunda bir baş şefe' bağlandı, Maherero 1870 civarı baş şef olarak belirdi (yıl yok). Künye f 1281 pencere başıdır. |
| `manica` | dogus | Britannica 'Manyika' (doğrudan okundu): Manyika dilli Mutasa ve Makoni krallıklarının 'en az 17. yüzyılın başından beri' var olduğu söylenir — kuruluş yılı yok. TDV mozambik Manica'yı anmıyor. Künye f 1281 pencere başıdır. |
| `bemba` | yikilis | Bemba'nın İngiliz Güney Afrika Şirketi idaresine giriş günü/yılı kabul edilir kaynakta BULUNAMADI: Britannica Zambia (External contacts) yalnız 'Bemba ... böyle bir meydan okumayla karşılaşmadı ve derinden bölünmüştü' (tarihsiz); Roberts 1970 yalnız 1898 Mwamba ölümü ve Şirket görevlisi Young'ın 1898 kaydı; 3 Kasım 1898 Şirket seferi yalnız Vikipedi'de (Joseph Dupont maddesi) — tek dayanak olamaz. Künye t 1899-01-01 dayanaksız (olası doğru aralık 1898-1899, ölçülemedi). |
| `bali-warmadewa` | dogus | 914 Blanjong yazıtı yalnız Vikipedi + turizm/kültür siteleri (budayabali, denpasartourism, nowbali) ile bulunabildi; bunlar da Saka 825/835 ve 911/913/914 arasında çelişiyor. Undiksha akademik makalesi 403 verdi. Britannica 'Bali' yazıtı ve Warmadewa adını anmıyor (yalnız Udayana-Mahendradatta evliliği, yılsız). Coedès 1968 açılamadı. Künye f 0914 doğrulanamadı |
| `banda-adalari` | dogus | Orang kaya meclislerinin bir kuruluş olayı/yılı yok: TDV 'banda-adalari' ve Britannica 'Banda Islands' okundu, ikisi de kuruluş vermiyor. Künye f 1281-01-01 pencere ucu |
| `dogu-sumatra-sultanliklari` | dogus | Toplu künye; Jambi'nin 1615 İslâm sultanlığı kuruluşu için kaynak bulunamadı (TDV 'sumatra', 'endonezya' Jambi'yi yalnız dil/idarî bölge olarak anıyor; Britannica 'Jambi' sayfası tarih vermiyor). Bileşenlerden Siak'ın kuruluşu ayrı satırda (tur diger) |
| `dogu-sumatra-sultanliklari` | tabiyet | 1858 'Korte Verklaring' / Hollanda vassallığı için okunabilir akademik kaynak bulunamadı (Britannica 'Siak', 'Sumatra' 403; TDV 'sumatra' toplu cümle) |
| `dogu-sumatra-sultanliklari` | yikilis | Dört sultanlığın toplu bir yıkılış günü yok; yalnız Siak için 1945 bulundu (yukarıda, tur diger) |
| `gova-makassar` | dogus | Gova devletinin kuruluş yılı bulunamadı; Britannica (South Sulawesi) yalnız 'yaklaşık 1530'dan sonra en güçlü devlet' diyor. Künye f 1281-01-01 pencere ucu |
| `hariphunchai` | dogus | Kuruluş yılı yok: Britannica 'Mangrai' Mon krallığının merkezini 'since the 9th century' diye anıyor (yılsız); Camadevivamsa'nın 629/750 tarihleri yalnız Vikipedi'de. Künye f 1000-01-01 desteklenmiyor (Britannica'ya göre krallık daha eski) |
| `kediri` | dogus | Bölünme yılı kaynakta yok: Britannica 'Kaḍiri' yalnız 'Airlangga ölmeden önce (1049) krallığı ikiye böldü' diyor — 1049 ölümü tarihliyor, bölünmeyi değil. 1042/1045 yalnız Vikipedi. Künye f 1042-01-01 doğrulanamadı |
| `kutai` | tabiyet | Künyenin 1908 'tam Hollanda denetimi' maddesi için kaynak bulunamadı (TDV 'borneo' yalnız ad düzeyinde; Britannica 'Kutai' 403) |
| `magindanao-sultanligi` | yikilis | 1888 için okunabilir akademik kaynak bulunamadı: TDV 'filipinler' 1888'i anmıyor (yalnız 1898 Paris, 1903-1913 Amerikan askerî yönetimi); Kyoto Review of Southeast Asia makalesi Datu Utto'yu anlatıyor ama 1888 vermiyor; Britannica 'Maguindanao'/'Cotabato' 403. Vikipedi bitişi 1888/1899/1926 arasında tartışmalı veriyor. Künye t 1888 doğrulanamadı |
| `medang` | yikilis | Pralaya (Wurawari saldırısı, Dharmawangsa'nın ölümü) yılı okunabilir akademik kaynakta bulunamadı: Unesa makalesi olayı yılsız anıyor; Britannica 'Airlangga' 8 denemede 403; 1016 yalnız Vikipedi'de, Endonezya kaynakları 1006 diyor (tartışmalı). Künye t 1016 doğrulanamadı |
| `gond-kralliklari` | dogus | Garha-Mandla kuruluş olayı/yılı akademik kaynakta yok: TDV 'gond' arama, 'ekber-sah' (Garha-Katanga Gond Racalığı'nın Ekber'e bağlanışını YILSIZ anıyor); Britannica 'Mandla' kuruluş vermiyor; Sangram Shah 1480 yalnız Vikipedi. Künye f 1301-01-01 doğrulanamadı |
| `gond-kralliklari` | yikilis | 1781 (Sagar Marathalarının ilhakı, Narhar Shah) yalnız Vikipedi'de (Imperial Gazetteer'e atıfla); mandla.nic.in DNS hatası, Britannica 'Gondwana' 403, EB1911 'Mandla' tarih vermiyor. Künye t 1781 doğrulanamadı |
| `kalikut` | dogus | Zamorinliğin kuruluş yılı bulunamadı: TDV'de 'kalikut' maddesi yok (yalnız arama içerikleri), 'malabar' maddesi Zamorin kuruluşunu vermiyor; Britannica 'Kozhikode' ve EB1911 'Calicut' kuruluş vermiyor; Britannica 'zamorin' 403. Künye f 1281-01-01 pencere ucu |
| `banda-gbaya` | dogus | halk; kaynakta kuruluş olayı yok. TDV orta-afrika-cumhuriyeti: Banda kabilesi XVIII. yy ortalarında ülkenin kuzeybatısına yerleşti (yıl yok); Britannica 'Gbaya': Gbaya göçü 'early in the 19th century' (yıl yok); Britannica 'Banda': devletsiz (stateless). Künyenin 1281-01-01 kuruluşu ve 1800-01-01 maddesi kaynaksız — yıl yazılamaz. |
| `kanem-tubu` | dogus | halk/kabile sahası; TDV cad Tûbûları (Teda ve Daza) Çad'ın asıl yerli müslüman grubu olarak tanımlar, kuruluş olayı ve yıl vermez; Britannica 'Teda' da tarih vermez. Künyenin 1281-01-01 kuruluşu kaynaksız. |
| `mangbetu` | yikilis | Universalis yalnız 'Belçikalıların Kongo'yu 1885'te işgaline kadar' der — bu Kongo Hür Devleti'nin kuruluşunu tarihler, Mangbetu topraklarının fiilen alınışını değil; Britannica 'Mangbetu' tarih vermez; Vikipedi 1892 der (tek dayanak olamaz). Künyenin 1895-01-01'i kaynaksız. |
| `matamba` | dogus | Britannica 'Matamba': Kimbundu konuşanlarca 'before the 16th century' kuruldu — yıl yok. Künyenin 1281-01-01'i kaynaksız. |
| `arua` | dogus | halk; kaynakta kuruluş olayı yok (Nimuendajú, HSAI c.3 'The Arua'). |
| `charrua` | dogus | halk; kaynakta kuruluş olayı yok (HSAI c.1 Serrano 'The Charrua'; Britannica 'Charrúa'). Künyenin 1281-01-01'i kaynaksız. |
| `dacu` | dogus | TDV darfur: Dâcûların Dârfûr'da ilk devleti kurduğu 'kabul edilmektedir' ve 'XIII ve XIV. yüzyıllar boyunca' hâkim oldukları — yüzyıl var, yıl yok. Künyenin 1200-01-01'i kaynaksız. (TDV'de müstakil Dâcû maddesi yok; arama 4 madde içi geçiş verdi: Dârfûr, Kıraat, Sudan, Vedây.) |
| `dacu` | yikilis | Yıl yok ve TDV kendi içinde ayrışıyor: TDV darfur ticarî hâkimiyetin Tuncûrlara geçişini 'XV. yüzyılda' tamamlanmış sayar; TDV sudan 'Dâcûlar XV. yüzyılın sonlarında iktidarı Tuncûrlar'a kaptırdı' der. Künyenin 1400-01-01'i her iki ifadeyle de ÇELİŞİR (en az XV. yüzyıl, sudan maddesine göre yüzyıl sonu) — yıl yazılamaz, künye bitişi yeniden ele alınmalı. |
| `hawaii-seflikleri` | dogus | şeflikler; kaynakta kuruluş olayı yok. Britannica 'Hawaii: History': ilk yerleşim 'as early as 300 ce' olabilir, Tahitili yerleşim 9. yy'da başladı — künyenin 1190'ı (Wilmshurst vd. 2011) ile ÇELİŞİR; ikisi de şefliklerin kuruluşunu değil adaya yerleşimi tarihler. Yıl yazılmadı. |

## Ek B — künye / künye-içi kronoloji ile ÇELİŞEN maddeler (134)

Atlas referans değildir (`CLAUDE.md §4`): çelişkide ATLAS düzelir — düzeltme koordinatörün sırasıdır.

| künye | kaynaklı tarih | çelişki |
|---|---|---|
| `abenaki` | 1725-12-01 | CELISIYOR: künye t/kronoloji 1725-12-15 gün veriyor; kaynak yalnız ay (Aralık 1725) veriyor ve Aralık 1725 imzacısı olarak Penobscot'u adlandırıyor, Abenakilerin katılımını 1726'ya koyuyor — gün 15 bu kaynakla doğrulanmadı |
| `ahiler` | 1363-03-01 | CELISIYOR: künye t 1354-01-01 — TDV murad-i'ye göre Ankara 1354 sonrası el değiştirdi ve ahiler kaleyi 1363 baharında teslim etti; künyenin bitişi 1354 ise 1354-1363 arası temsil edilmiyor |
| `alaiye` | 1427-01-01 | CELISIYOR: künye kronolojisi satıcıyı 'Karamanoğulları' diyor; TDV satıcının Karaman b. Savcı Bey olduğunu belirtiyor (yıl uyuşuyor) |
| `aleut` | 1760-01-01 | CELISIYOR: künye t 1784-08-14 (Kodiak/Awa'uq) Aleut'a değil Alutiiq'e ait bir olay; kaynak Aleut adalarının Rus sömürgesine dönüşünü 1760'a kadar tamamlanmış sayıyor |
| `ammarogullari` | 1346-04-24 | CELISIYOR: künye kronolojisi 1347-01-01 — kaynak 747/1346-47; hicrî sözleşmeye göre 1346-04-24 (ayrıca ada kısa süre sonra geri bırakıldı) |
| `ammarogullari` | 1370-07-26 | CELISIYOR: künye kronolojisi 1371-01-01 — kaynak 772/1370-71; hicrî sözleşmeye göre 1370-07-26 |
| `ammarogullari` | 1393-05-01 | CELISIYOR (hassasiyet): künye kronolojisi 1393-01-01 — kaynak ay veriyor: Mayıs 1393 |
| `antandroy` | 1896-08-06 | CELISIYOR: künye t 1900-01-01 — kaynakta 1900 yok; hukukî son 6 Ağustos 1896 ilhakı, fiilî birleşme 'Gallieni 1905'te ayrıldığında tamamlanmıştı' |
| `apaci-ovalar` | 1700-01-01 | CELISIYOR: künye kronoloji 1700-01-01 'Missouri yukarısında Kiowa ve Sioux baskısıyla' çekilme diyor; bu kaynak 1700'ü bir yerleşim tanıklığı olarak veriyor, çekilme olarak değil — Kiowa/Sioux iddiası doğrulanmadı |
| `arakan` | 1433-01-01 | CELISIYOR: künye kronolojisi kuruluşu 1430-01-01 veriyor, TDV 1433 (künye f 1281-01-01 ise pencere ucu; Mrauk-U öncesi Launggret dönemi TDV'de 1404 işgaliyle anılıyor) |
| `arakan` | 1784-01-01 | CELISIYOR: künye t 1785-01-02, TDV 1784 (EB1911 'Arakan' ise 1782 diyor; TDV esas alındı) |
| `aro-konfederasyonu` | 1902-01-01 | CELISIYOR: künye t:1902-03-01 (ay hassasiyeti); kaynak yalnız '1900–02' aralığını veriyor, ay/gün desteklenmiyor. Künyenin 1901-11-28 ve 1901-12-28 kronoloji günleri bu turda kabul edilir kaynakla doğrulanamadı (London Gazette 19 Eylül 1902, sayı 27473 taranmış PDF — metin okunamadı). |
| `atina-dukaligi` | 1204-01-01 | CELISIYOR: künye f: 1205-01-01; TDV 1204 |
| `atina-dukaligi` | 1387-01-01 | CELISIYOR: künye ozeti/katalan künyesi 1388 diyor; TDV 1387 (Britannica WebSearch özeti 1388 — tarih çelişkisi, TDV esas) |
| `atina-dukaligi` | 1456-05-01 | CELISIYOR: künye t: 1458-06-04; TDV şehrin düşüşünü Mayıs 1456 verir, 1458 için yalnız padişahın ziyaretini anar (Akropolis teslimi TDV'de yok) |
| `banda-adalari` | 1512-01-01 | CELISIYOR: künye 1512'yi ilk Avrupalı temas (antlaşma) olarak yazıyor; Britannica 'ilhak' diyor, TDV üs bile kurulmadığını söylüyor — olgu çelişkisi |
| `banda-gbaya` | 1903-12-29 | CELISIYOR: künye t 1903-01-01 (uydurma gün); kaynak 29 Aralık 1903 |
| `basuto` | 1824-01-01 | CELISIYOR: künye f 1822-01-01 — kaynak Thaba Bosiu'nun işgalini 1824'e koyuyor (Britannica 'Moshoeshoe' maddesi aynı olayı 'late 1810s and early 1820s' diye geniş veriyor; yıl veren tek metin 1824) |
| `basuto` | 1866-01-01 | CELISIYOR (hassasiyet): künye kronolojisi 1866-04-11 gün veriyor; Britannica yalnız yıl veriyor (gün bu turda kabul edilir kaynakta okunmadı) |
| `bate` | 1881-01-01 | CELISIYOR: künye t:1879-01-01 ('standart yıl'); TDV 1881 diyor (1878 = Yukarı Nijer, 1881 = Kankan). |
| `betsimisaraka` | 1791-01-01 | CELISIYOR: künye t 1817-01-01 — kaynak çöküşü 1791'e koyuyor (26 yıl önce); 1817 Merina'nın Tamatave'yi alışıdır (aşağıda). Künyenin 1791 'bölünme' maddesiyle UYUSUYOR |
| `bharatpur-cat` | 1722-01-01 | CELISIYOR: künye f 1733-01-01 (Bedan Singh); Britannica özerklik tanınmasını 1722'ye, şehrin kuruluşunu 'yaklaşık 1733'e veriyor |
| `bharatpur-cat` | 1949-01-01 | CELISIYOR: künye t 1948-03-18 (Matsya Birliği'ne katılış — dayanağı Vikipedi); Britannica Racastan'a katılışı 1949 veriyor, Matsya Birliği'ni anmıyor. Matsya günü bu turda akademik kaynakla doğrulanamadı |
| `bonacolsi` | 1273-07-18 | CELISIYOR: künye f 1273-01-01 (yıl doğru, gün uydurma); DBI 18 Temmuz 1273. Ayrıca Britannica ve Enciclopedia Italiana senyörlüğü 1276'dan başlatır (DBI 1276 unvanını geç kronik Aliprandi'ye dayandırıp doğrulanmamış sayar) |
| `borgu` | 1898-06-14 | CELISIYOR: künye t:1898-01-01; kaynak 14 Haziran 1898 günü veriyor. |
| `buhara-halk-cumhuriyeti` | 1920-01-01 | CELISIYOR: künye f 1920-10-08 günü TDV'de ve akademik kaynakta bulunamadı (yalnız Wikipedia); TDV 1920 (yıl) |
| `buhara-halk-cumhuriyeti` | 1924-10-01 | CELISIYOR: künye t 1924-10-27 günü kaynaksız (TDV yalnız Ekim 1924; 27 Ekim yalnız Wikipedia türevlerinde) |
| `bundu` | 1860-01-01 | CELISIYOR: künye t:1858-01-01 'Fransız nüfuzuna girdi' diyor; kabul edilir kaynakta 1858 yok, Fransız eksenli düzen 1860 barışıyla kuruluyor. |
| `burundi` | 1903-05-24 | CELISIYOR (hassasiyet): künye kronolojisi 1903-01-01 — kaynak gün veriyor (24 Mayıs 1903). Not: Vikipedi ve bir Çek makalesinin arama özeti 6 Haziran 1903 diyor (okunamadı) — gün tartışmalı |
| `cebri` | 1417-02-18 | CELISIYOR: künye f 1417-01-01 — h. 820 1 Ocak 1417'yi dışlıyor (hicrî yıl Şubat 1417'de başlar); hicrî sözleşmeye göre 1417-02-18 |
| `cebri` | 1521-07-27 | CELISIYOR (iç): künye kronolojisinde aynı olay hem 1521-01-01 (toprak-kayip) hem 1521-07-27 (savas) — kaynak tek gün veriyor, 1521-01-01 maddesi 07-27'ye alınmalı |
| `cebri` | 1524-10-29 | CELISIYOR: künye t 1524-01-01 — h. 931 Ekim 1524'te başlar, 1524-01-01 kaynağın dışladığı gün; hicrî sözleşmeye göre 1524-10-29 |
| `cemisgezek-beyligi` | 1452-01-01 | CELISIYOR: künye t 1420 'Kara Yülük Şeyh Hasan'dan aldı, kendi başına idare sona erdi' diyor; TDV'de 1452'de Çemişgezek hâkimi Şeyh Hasan Akkoyunlularca hâlâ itaate alınmaya çalışılıyor — 1420 bitişi ya da yerel hanedanın tâbi devamı yeniden ölçülmeli |
| `charrua` | 1831-04-11 | CELISIYOR: künye t 1831-01-01 (uydurma gün); kaynak 11 Nisan 1831 |
| `cikasav` | 1830-08-31 | CELISIYOR: künye kronoloji 1830-01-01 (yıl başı); kaynak günü veriyor: 31 Ağustos 1830 |
| `crnojevic-zetasi` | 1496-01-01 | CELISIYOR: künye t: 1499-01-01 (kaynaksız); Emecen son yılı 1496 veriyor. 1499 metinde yalnız Đurađ'ın Kotor'a dönüş BEKLENTİSİ olarak geçer |
| `dagbon` | 1899-11-14 | CELISIYOR: künye t:1899-01-01; antlaşma 14 Kasım 1899 günlü. (Alman Adibo seferi Aralık 1896 yalnız Vikipedi/haber kaynaklarında — doğrulanamadı.) |
| `dahomey` | 1892-01-01 | CELISIYOR: künye kronolojisi bu olayı 1893-01-01'e (TDV benin: '1893'te ... Abomey'e giren Fransız birlikleri') koyuyor; Britannica 1892 diyor. İki kaynak bir yıl ayrışıyor — ÖLÇÜLEMEDİ, koordinatöre. |
| `danzig-serbest-sehri-1807` | 1814-01-02 | CELISIYOR: künye kronolojisinde 1814-01-02 'işgal/çekilme', bitiş 1814-02-04; arama özeti bitişi 2 Ocak 1814'e koyar — 4 Şubat günü doğrulanamadı |
| `darul-kuti` | 1911-01-12 | CELISIYOR: künye t 1911-04-12; kaynak 12 Ocak 1911 (ay farkı — künyenin günü kaynaksız) |
| `dashun` | 1645-01-01 | CELISIYOR: künye t 1647-01-01 ('Li Zicheng öldü'), Britannica ölümü 1645 veriyor |
| `dejanovic-prensligi` | 1371-01-01 | CELISIYOR (gün): künye f: 1371-09-26 Çirmen gününden devralınmış; kaynak yalnız yıl veriyor (kuruluş savaşın ARDINDAN) |
| `dejanovic-prensligi` | 1395-01-01 | CELISIYOR (gün): künye t: 1395-05-17 Rovine günü olarak devralınmış; üç TDV maddesi de yalnız 1395 diyor |
| `dogu-sumatra-sultanliklari` | 1945-01-01 | CELISIYOR: künye t 1858-01-01 (Hollanda 'Korte Verklaring' vassallığı) — bileşen Siak kaynakta 1945'e kadar sürüyor; 1858 bir yıkılış değil tâbiyettir |
| `don-kazak` | 1570-01-03 | CELISIYOR: künye f 1570-01-01; gelenek 3 Ocak 1570 (ve gün Jülyen takvimiyle); belgenin sahiciliği tartışmalı |
| `dukagin` | 1444-03-01 | CELISIYOR: künye kronolojisi 1444-03-02 diyor, TDV 1 Mart 1444; ayrıca Dukagin katılımı TDV'de yok |
| `eyyubi-meyyafarikin` | 1185-04-03 | CELISIYOR: künye f 1185-01-01 hicrî yılın dışladığı güne düşüyor; doğrusu 1185-04-03 (h. 581) |
| `fipa-nyakyusa` | 1891-01-01 | CELISIYOR: künye t 1890-11-04 — bu gün kabul edilir kaynakta okunmadı; Britannica protektorayı 1891 veriyor, fiilî boyunduruk 'yüzyıl başına kadar' (Fipa/Nyakyusa'ya özgü gün yok) |
| `fransiz-ekvator-afrikasi` | 1959-01-01 | CELISIYOR: künye t 1958-01-01; Britannica 1959 (gün kaynakta yok; 1958 Topluluk üyeliği MJP'de Çad için 'État membre de la Communauté en 1958' olarak geçer — özerkleşme 1958, federasyonun bitişi 1959) |
| `fransiz-misir-seferi` | 1798-06-30 | CELISIYOR: künye f:1798-07-01. TDV iskenderiye '30 Haziran 1798' diyor; Fondation Napoléon çıkarmayı 1 Temmuz, şehrin alınmasını 2 Temmuz 1798 veriyor. TDV esas alındı, kaynaklar arası 2 günlük fark beyan edildi. |
| `fransiz-misir-seferi` | 1801-08-01 | CELISIYOR: künye t:1801-10-02 ve kronoloji 'Amiens Antlaşması ile sona erdi' — TDV Ağustos 1801 diyor; Amiens Antlaşması Mart 1802'dir, 2 Ekim 1801 tahliyeye dayanmıyor. Ek: İskenderiye kapitülasyonu yaygın olarak 2 Eylül 1801 verilir (resmî London Gazette'te yer alır, bu oturumda okunmadı) — gün gerekiyorsa ayrıca doğrulanmalı. |
| `futa-toro` | 1890-01-01 | CELISIYOR: künye t 1881-01-01 ('Fransız fethi 1881'); TDV tekrur son ilhakı 1890'a koyuyor, TDV senegal'de 1881 geçmiyor — künye ucu 1890'a çekilmeli |
| `galzay` | 1709-03-12 | CELISIYOR: künye f 1709-04-21 günü TDV'de yok (kandehar 1121/1709, safeviler 1709 — yalnız yıl); gün akademik kaynakta da bu turda doğrulanamadı |
| `galzay` | 1722-11-10 | CELISIYOR: künye kronolojisi 1722-10-23 diyor; TDV safeviler 30 Muharrem 1135 / 10 Kasım 1722 |
| `galzay` | 1738-03-01 | CELISIYOR: künye t 1738-01-01; TDV Zilkade 1150 (Mart 1738) |
| `gane` | 1076-08-05 | CELISIYOR: künye t 1076-01-01 hicrî sözleşmeye aykırı (h. 469 1 Ocak 1076'yı dışlar); ayrıca TDV mali'ye göre devlet 1076'da bitmedi (aşağıdaki 1240 maddesine bak) |
| `gane` | 1240-01-01 | CELISIYOR: künye t 1076 = başşehrin düşüşü; TDV mali devletin son bulmasını 1240 verir. TDV gane de Susu'nun başşehri XIII. yy başında aldığını yazar. Künye t ya 1240'a uzatılmalı ya da 1076-1240 arası ardıl yapıya (Susu) bağlanmalı — sınıflandırma koordinatörde |
| `gova-makassar` | 1667-11-18 | CELISIYOR (küçük): gün UYUSUYOR, ama künye metni antlaşmayı 'Somba Opu Kalesi'nin düşmesinin ardından' diye yazıyor; Somba Opu 1669'da düştü (savaş antlaşmadan sonra yeniden başladı) |
| `gozleroglu` | 1408-05-27 | CELISIYOR: künye f 1408-01-01 hicrî sözleşmeye aykırı (h. 811 1 Ocak 1408'i dışlar), yıl uyuşuyor |
| `griqua` | 1874-10-01 | CELISIYOR: künye t 1878-01-01 — kaynak son Griqua devletinin ilhakını Ekim 1874'e koyuyor; 1878 kaynakta yok |
| `gyaaman` | 1895-07-01 | CELISIYOR: künye t 1895-01-01 'Fransız himayesine girdi' — kaynakta 1895'teki olay Samori fethi (Temmuz 1895-Ocak 1896); Fransız himaye antlaşması (1888, Treich-Laplène) yalnız Vikipedi/zayıf kaynakta, bu turda doğrulanamadı |
| `harfusogullari` | 1520-11-01 | CELISIYOR: künye f 1521-01-01 — isyan 1520 sonbaharında başlayıp 27 Ocak 1521'de bitti; yerleşme 1520 de olabilir, 1521 tek başına kaynaklı değil |
| `hariphunchai` | 1281-01-01 | CELISIYOR: künye t 1292-01-01, Britannica 1281 (Vikipedi 1281/1292 arasında kendiyle çelişiyor) |
| `hawaii-seflikleri` | 1795-01-01 | CELISIYOR: künye 1795'i şefliklerin SONU sayıyor; kaynakta Kauai ve Niihau 1795'te birleşme dışında |
| `hawaii-seflikleri` | 1810-01-01 | CELISIYOR: künye t 1795-01-01; son şeflik 1810'da katıldı (15 yıl fark) |
| `herero` | 1904-01-12 | CELISIYOR (anlam): künye t 1904-01-12 'son' olarak kodlanmış — bu gün Herero'nun ayaklanmayı BAŞLATTIĞI gündür, toprağı kaybettiği gün değil |
| `herero` | 1904-08-11 | CELISIYOR: künye t 1904-01-12 — toprak kaybı 11 Ağustos 1904 Waterberg yenilgisidir (Ocak 1904 ayaklanmanın başlangıcı) |
| `hosut` | 1637-01-01 | CELISIYOR: künye f 1636-01-01, kaynak 1637 (aynı metin Hoşut devletini '1637–1724' diye tarihliyor) |
| `ibadan` | 1893-08-01 | CELISIYOR: künye t 1893-08-15 — 15 Ağustos günü yalnız Vikipedi'de ('citation needed'); akademik kaynakta yalnız ay (Ağustos 1893). Kesinlik ay'a indirilmeli |
| `idrisi` | 0985-05-23 | CELISIYOR: künye t:0985-01-01 — hicrî gün sözleşmesine göre 0985-05-23 olmalı. |
| `ingiliz-kuzey-rodezya` | 1890-06-01 | CELISIYOR (hassasiyet): künye f 1890-01-01 — kaynak ayı veriyor (Haziran 1890) |
| `ingiliz-nyasaland` | 1893-01-01 | CELISIYOR: künye özeti 'İngiliz Orta Afrikası' adını 1891'den başlatıyor; Britannica bu adı 1893'ten veriyor |
| `ingiliz-siyera-leon` | 1896-01-01 | CELISIYOR: künye 1896-08-01 (ay: 'Ağustos sonu'); bu turda okunan Hargreaves metninde yalnız yıl var, 'Ağustos sonu' ifadesi bulunamadı — kesinlik yıl'a inmeli ya da ay kaynağı yeniden gösterilmeli |
| `jukun-kvararafa` | 1671-01-01 | CELISIYOR: künye 1673-01-01 'Kano'yu ele geçirdi' — GHA V aynı olayı 1671'e koyuyor ve şehrin alındığını değil halkın kaçtığını yazıyor |
| `kaheti-kralligi` | 1578-01-01 | CELISIYOR: künye kronolojisi 1578-08-09 diyor; TDV'ye göre itaat Tiflis'in 24 Ağustos'ta alınmasından SONRA — 9 Ağustos imkânsız |
| `kalikut` | 1765-01-01 | CELISIYOR: künye t 1766-01-01, Britannica + EB1911 (iki madde) 1765. TDV 'haydar-ali-han' Malabar'ın ilhakını yılsız anıyor |
| `kasance` | 1630-01-01 | CELISIYOR: künye f 1620-01-01; Britannica 'about 1630' |
| `kasance` | 1911-01-01 | CELISIYOR: künye t 1910-01-01; Britannica 'about 1911' |
| `katalan` | 1387-01-01 | CELISIYOR: künye t: 1388-05-02; TDV 1387 (Britannica WebSearch özeti 1388 — tarih çelişkisi, TDV esas; 2 Mayıs günü hiçbir kaynakta okunmadı) |
| `katalan` | 1391-01-01 | CELISIYOR: künye t: 1388-05-02 Neopatras kolunu dışarıda bırakıyor (künye ozeti 'birkaç yıl daha sürdü' diyor); kaynak son Katalan merkezinin 1391'de el değiştirdiğini gösteriyor. ⚠️ Çıkarım: TDV Katalan sonunu ADIYLA tarihlemiyor, Nerio idaresinin başlangıcını veriyor |
| `kenedugu` | 1875-01-01 | CELISIYOR: künye hukumdar maddesi 1877 (Tieba tahta çıkışı); GHA VI '1875 onwards' |
| `kerayit` | 1199-01-01 | CELISIYOR: künye f:1199 bu olaya bağlanmış — bu bir savaştır, Kerâyit devletinin doğuşu değil. |
| `kevkev` | 1009-08-25 | CELISIYOR: künye maddesi 1009-01-01 hicrî sözleşmeye aykırı (h. 400 1 Ocak 1009'u dışlar) |
| `kibris-ingiliz` | 1878-07-15 | CELISIYOR: künye f:1878-06-04 imza günüdür; idarenin fiilen/resmen devri 15 Temmuz 1878. Harita değişimi yürürlük günüyle olmalı (karar koordinatörde). |
| `kibris-krallik` | 1426-01-01 | CELISIYOR (gün): künye kronolojisi 1426-07-07 ve 'TDV kapsam dışı' diyor; TDV olayı KAPSIYOR ama yalnız yıl veriyor (Hirokitia adı ve gün TDV'de yok) |
| `klamath` | 1864-10-14 | CELISIYOR: künye t/kronoloji 1864-01-01 (yıl başı); kaynak günü veriyor: 14 Ekim 1864 |
| `koco-uygur` | 1209-01-01 | CELISIYOR: künye t:1209-01-01 devletin SONU olarak kullanılıyor; TDV'ye göre 1209 bir tâbiiyet değişimidir, devlet Moğol idaresinde varlığını sürdürdü (aşağıdaki yikilis satırı). |
| `koco-uygur` | 1368-01-01 | CELISIYOR: künye t:1209. TDV turfan ayrıca İdikut sülâlesinin 1353'te İdikut olan Sangga ve Budashri'den sonra Hos-hang devrinde bittiğini söylüyor (yıl yok) — son için 1368 TDV uygurlar'ın verdiği yıldır; sınır kaydırması koordinatör hükmüdür. |
| `komanci` | 1875-06-02 | CELISIYOR: künye t 1875-01-01 (yıl başı); kaynak günü veriyor: 2 Haziran 1875 |
| `konstantin-beyligi` | 1837-10-13 | CELISIYOR: künye t: 1844-03-04 (veriden devralınmış, kaynaksız); TDV beyliğin merkezinin düşüşünü 13 Ekim 1837 verir |
| `kuayti-sultanligi` | 1967-01-01 | CELISIYOR (gün doğrulanamadı): künye t 1967-11-30 — TDV yemen/aden/hadramut gün vermiyor; Britannica 403; yalnız Vikipedi 17 Eylül 1967 (MKC monarşiyi devirdi) ve 30 Kasım 1967 (devletin feshi) veriyor — Vikipedi tek dayanak olamaz. Ayrıca harita için 17 Eylül 1967 devrilişi 30 Kasım'dan önce olabilir: akademik kaynakla doğrulanmalı |
| `kuba` | 1600-01-01 | CELISIYOR: künye f 1625-01-01 (Shyaam); Britannica 'about 1600' (Quick Facts 'c. 1600 - c. 1910') |
| `kuba` | 1910-01-01 | CELISIYOR: künye t 1900-01-01 ('Kongo Hür Devleti'ne bağlandı'); Britannica 'about 1910', Belçika Kongosu |
| `kuba-hanligi` | 1806-01-01 | CELISIYOR: künye kronolojisi 1806-10-03 günü çıkarımdır (kendi notunda da), TDV yalnız 1806 |
| `kumuk-samhalligi` | 1578-01-01 | CELISIYOR: künye f 1578-11-01 günü TDV'de yok (yalnız yıl, bölge çapında) |
| `kumuk-samhalligi` | 1606-01-01 | CELISIYOR: künye t 1607-01-01; TDV dagistan Osmanlı hâkimiyetinin ucunu 1606 veriyor (1607 Şamahı'nın düşüşü) |
| `kutai` | 1960-01-01 | CELISIYOR: künye t 1908-01-01 ('Hollanda'nın tam doğrudan denetimi') — kaynakta 1908 olayı yok, krallık 1960'a kadar sürüyor; 1908 en fazla bir tâbiyet adımıdır (kaynaksız). Harita için HAYIR: 1949 sonrası Endonezya içinde |
| `magrave-sicilmase` | 0976-08-29 | CELISIYOR: künye f:0976-01-01 — hicrî gün sözleşmesine göre 0976-08-29 olmalı (h. 366 976-08-29'da başlar; 1 Ocak 976 kaynağın dışladığı gün). |
| `magrave-sicilmase` | 1053-04-22 | CELISIYOR: künye t:1053-01-01 — sözleşmeye göre 1053-04-22. Ek not: TDV maddesi 976-1053 arasındaki Mağrâve emîrlerini adlandırmıyor ve 445 fethinin Mağrâve yönetimine son verdiğini AÇIKÇA söylemiyor; 'Murâbıt fethi = Mağrâve sonu' bağı künyenin çıkarımıdır. |
| `maliseet` | 1760-02-22 | CELISIYOR: künye kronoloji 1760-02-01 (ay, gün 1'e sabitlenmiş) — kaynak günü veriyor: 22 Şubat 1760. Künye t 1761-01-01 de Maliseet için tutmuyor: Maliseet'in kendi antlaşması 1760'tır, 1761 antlaşmaları Mi'kmaq topluluklarınındır |
| `mangbetu` | 1860-01-01 | CELISIYOR: künye 1859-01-01 'bölünme' maddesi; Universalis saltanatı 1860'ta bitirir |
| `matamba` | 1744-01-01 | CELISIYOR: künye 1744'ü 'son' sayıyor; kaynakta 1744 yalnız nominal vasallık, krallık 1767 bölünmesi ve 1890'lar savaşlarıyla sürüyor |
| `matamba` | 1909-01-01 | CELISIYOR: künye t 1744-01-01; kaynak krallığın 1909 seferine kadar sürdüğünü söylüyor (≈165 yıl fark) |
| `merina-oncesi` | 1787-01-01 | CELISIYOR: künye t 1787 'birleştirdi' diyor; kaynakta 1787 yalnız saltanatın başlangıcıdır, birleşme değil |
| `merina-oncesi` | 1797-01-01 | CELISIYOR: künye t 1787-01-01 — kaynak birleşmeyi 'about 1797' veriyor (1787 tahta çıkış yılı); ardıl `merina` künyesinin başlangıcı da buna göre gözden geçirilmeli |
| `mikmak` | 1761-06-25 | CELISIYOR: künye t 1761-01-01 (gün yok diye yıl başı); kaynak iki gün veriyor: 1761-06-25 (ana imza) ve 1761-10-12 (Chignecto/Pictou katılımı). Antlaşmalar toprak devri içermediği için harita değişimi HAYIR yazıldı; bu, künye t'sinin harita anlamını da sorgulatır |
| `mohave` | 1865-03-03 | CELISIYOR: künye t/kronoloji 1865-01-01 (yıl başı); kaynak günü veriyor: 3 Mart 1865 |
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

- madde yazılan künye: **147**
- doğuş maddesi olan: 79 · eksik: `abenaki`, `ahiler`, `aleut`, `alutiiq`, `antandroy`, `apaci-ovalar`, `aro-konfederasyonu`, `arua`, `bali-warmadewa`, `banda-adalari`, `banda-gbaya`, `bate`, `beothuk`, `betsimisaraka`, `borgu`, `bundu`, `burundi`, `cemisgezek-beyligi`, `charrua`, `choctaw`, `cikasav`, `crnojevic-zetasi`, `dagbon`, `damagaram`, `dogu-sumatra-sultanliklari`, `eve-notse`, `fipa-nyakyusa`, `gambiya-mandinka`, `gane`, `gond-kralliklari`, `gova-makassar`, `griqua`, `gurma`, `gyaaman`, `hariphunchai`, `hawaii-seflikleri`, `hehe`, `herero`, `hidatsa`, `jukun-kvararafa`, `kaheti-kralligi`, `kalikut`, `kamba`, `kanem-tubu`, `karga`, `kediri`, `kenedugu`, `kenya-kuzey-halklari`, `kerayit`, `kevkev`, `klamath`, `kru-grebo`, `kuba-hanligi`, `kumuk-samhalligi`, `maliseet`, `mandan`, `manica`, `matamba`, `merina-oncesi`, `meskalero-apaci`, `miami`, `mikmak`, `mohave`, `nayman`, `nebhani`, `sabah-emirligi`, `teodoro`, `yezd-atabegligi`
- yıkılış maddesi olan: 133 · eksik: `aleut`, `bemba`, `bundu`, `burundi`, `cemisgezek-beyligi`, `dogu-sumatra-sultanliklari`, `dukagin`, `eve-notse`, `gond-kralliklari`, `jukun-kvararafa`, `kumuk-samhalligi`, `magindanao-sultanligi`, `mangbetu`, `medang`

## Ek D — `zayif` satırlar (14) — ikinci kaynak olmadan yazıma alınmamalı

- `danzig-serbest-sehri-1807` 1814-01-02
- `danzig-serbest-sehri-1807` 1815-01-01
- `don-kazak` 1570-01-03
- `hosut` 1637-01-01
- `katalan` 1311-01-01
- `kibris-krallik` 1192-01-01
- `liptako` 1897-01-01
- `luksemburg-hollanda-birligi` 1815-06-09
- `luksemburg-hollanda-birligi` 1839-01-01
- `luksemburg-hollanda-birligi` 1867-05-11
- `luksemburg-hollanda-birligi` 1890-11-23
- `medang` 0732-01-01
- `medang` 0929-01-01
- `selanik-kralligi` 1225-01-01

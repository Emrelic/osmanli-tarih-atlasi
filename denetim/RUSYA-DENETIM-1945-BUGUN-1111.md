# RUSYA DENETİMİ — 1945-09-02 → bugün (2026-11-11)

Yalnız denetim: `data/` altında hiçbir dosya değişmedi. Ölçüm KASA'da, `claude/bold-ramanujan-703e89`
worktree'sinde, `origin/main` 7a3659d54 üstünde yapıldı; üretilmiş dosyalar `coz-c` ile çözüldü.
Kaynak teyidini alt ajan yaptı. Okunan kaynaklar: prlib.ru, ru.wikisource (Ведомости), kremlin.ru,
consultant.ru, docs.cntd.ru, hoppou.go.jp, yle.fi, FRUS, Çin Dışişleri, un.org, regjeringen.no.

> ⚠️ **BRE uyarısı.** bigenc.ru botları reddetti (401 ve bağlantı reddi). **[BRE\*]** işaretli
> alıntılar arama motoru dizinindeki parçalardır: gün güvenilir, kelime kelime doğruluk teyitsiz.
> Yalnız [BRE\*]'a dayanan bir düzeltmeden önce sayfa tarayıcıda açılmalı.
> Erişilemeyen adresler: https://bigenc.ru/ ve https://old.bigenc.ru/ (Emre tarayıcıda açabilir).

> 🔴 **Ufuk.** Atlasın zaman çubuğu ve veri ufku **2000-12-31**'de biter (`js/app.js:199-200`,
> `girdi.py VERI_UFKU`). 2001 sonrası haritada **gösterilemez**, yalnız kronolojide yaşar. Bunlar:
> Abhazya ve Güney Osetya'nın tanınması (2008), Rusya–Çin (2004, 2008), Barents (2010), Kırım (2014),
> 2022 ilhakları. Aşağıda "ufuk dışı" diye ayrıca işaretlidir.

---

## ① KRONOLOJİ: doğru mu, yeterli mi?

### ①a Var olan maddelerde hata

| # | Kimlik | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| K1 | `devletler.js:375` sovyet-rusya `tur:"son"` | `t:"1991-12-25"` "bayrak indirildi, SSCB dağıldı"; künye `t:"1991-12-26"` | Декларация № 142-Н, **26.12.1991** (Ведомости ВС СССР 1991 № 52, ru.wikisource): «Союз ССР как государство и субъект международного права прекращает свое существование». 25.12 ise Gorbaçov'un istifası ve RSFSR'nin adının değiştiği gündür (Закон № 2094-I, consultant.ru; prlib.ru/history/619792) | ÇELİŞKİ | "son" maddesi `1991-12-26`'ya taşınsın (142-N). 25.12 ayrı madde: "Gorbaçov istifa etti; RSFSR'nin adı Rusya Federasyonu oldu" |
| K2 | `devletler.js:366-370` sovyet-rusya `ozet`, `ic_not_t`, `kaynak` | ozet "25 Aralık 1991'de dağıldı — OH" der. ic_not_t, Britannica'nın "31 Aralık" özetini çelişki olarak taşır. `kaynak:"bulunamadı"` | 142-N (K1) | KAYNAKSIZ | kaynak: 142-N metni ve TDV 'rusya' (30.12.1922). ozet 26 Aralık'a göre düzeltilsin; birincil metin 26'yı verdiği için 31 Aralık notu kapanabilir |
| K3 | `devletler.js:16094` rusya-federasyonu `ozet` | "Mevcut 'sovyet-rusya' t'si 1991-12-26 olmalı." | sovyet-rusya `t` zaten 1991-12-26 | KAYNAKSIZ (bayat not) | Cümle silinsin |
| K4 | `kronoloji_sinir_halef_1923_2000.js:319` | 1991-12-26 "Belarus (Brest-Litovsk, Pinsk, Grodno) Sovyet egemenliğinden çıktı" | Ölçüm: bu üç nokta haritada **1991-08-25**'te `belarus`a geçiyor | ÇELİŞKİ (bayat madde) | Madde silinsin ya da `1991-08-25`'e taşınıp `:303` ile birleştirilsin |
| K5 | `kronoloji_sinir_halef_1923_2000.js:320` | 1991-12-26 "Ukrayna (Lvov, Kovel, Lutsk, Rivne…) bağımsız Ukrayna'ya kaldı" | Ölçüm: Lvov vd. **1991-08-24**'te `ukrayna`ya geçiyor | ÇELİŞKİ (bayat madde) | Silinsin ya da `:302`'ye (1991-08-24) katılsın |
| K6 | `kronoloji_sinir_halef_1923_2000.js:318` | 1991-12-25 "RSFSR'nin adı Rusya Federasyonu oldu… Viipuri, Petsamo" | Haritada geçiş 1991-12-26. Ad değişikliği 25.12 doğru (Закон № 2094-I) | ÇELİŞKİ (1 gün) | Toprak geçişi `:321` (12-26) ile birleşsin; 12-25 maddesi yalnız ad değişikliği olarak kalsın (K1 ile aynı) |
| K7 | `kronoloji_sinir_halef_1923_2000.js:99` | `taraflar` içinde `"sovyetler-birligi"` | `devletler.js`'te bu kimlik **yok** (0 eşleşme) | KAYNAKSIZ (yanlış kimlik) | `sovyet-rusya` |
| K8 | `devletler.js:16095-16103` rusya-federasyonu kronolojisi | 1993-10-04 kaynağı thecollector.com ve russialist.org; 1999-12-31 money.cnn; 2000-03-26 everycrsreport; 2014-03-18 weforum.org | CLAUDE.md'ye göre popüler tarih sitesi kaynak olamaz. Yerine: 1993 için Указ № 1400 (21.09.1993) ve BRE "Российская Федерация"; 1999-12-31 için kremlin.ru Yeltsin bildirisi; 2014-03-18 için kremlin.ru: «Договор… подписан 18 марта 2014 года» | KAYNAKSIZ (zayıf) | Kaynaklar değişsin; günler doğru |
| K9 | `devletler.js` ickerya `kronoloji[0]` | 1991-11-01 kaynağı missedhistory.com (popüler) | [BRE\*] «подписал 1.11.1991 указ «О государственном суверенитете Чеченской Республики»»; TDV 'Çeçenistan' 1 Kasım 1991 | KAYNAKSIZ (zayıf) | Kaynak TDV ve BRE olsun; gün doğru. 6.9.1991 darbesi ayrı madde olabilir |
| K10 | ickerya `t:"2000-02-06"` | ic_not: "gün yalnız Vikipedi'de; ZAYIF" | [BRE\*] KTO 1999-2000: «6 февраля 2000 г. … Грозный полностью перешёл под контроль ОГВ» | KAYNAKSIZ (artık teyitli) | Kaynak BRE; gün doğru |
| K11 | kirgizistan künye kaynağı | timesca.com, "ZAYIF KAYNAK" | BRE «Перестройка» tablosu: 31.08.1991 | KAYNAKSIZ | Kaynak değişsin; gün doğru |
| K12 | transdinyester künye kaynağı | e-ir.info ve Vikipedi | [BRE\*] ПМР: «2.9.1990 провозглашена Приднестровская Молдавская ССР (ПМССР) в составе СССР» | KAYNAKSIZ | Kaynak BRE; gün doğru. **Not:** ilan edilen yapı SSCB içinde bir cumhuriyetti (bkz. H6) |
| K13 | belarus `kronoloji` 1991-12-08 Belovej | kaynak Vikipedi (Alma-Ata Protocol) | prlib.ru/history/619792: «8 декабря 1991 г. в Белоруссии в селе Вискули…» | KAYNAKSIZ | Kaynak prlib. `kronoloji_cok_rusya.js:609` Belovej maddesinin `devletler` listesine `ukrayna` eklensin |
| K14 | ukrayna kronolojisi: 1991-12-01, 1994-07-10, 2004-12-26, 2014-03-18, 2022-02-24 | kyivpost, pbs, weforum, cfr | Rada ve MSK resmî kayıtları | KAYNAKSIZ (zayıf) | Kaynaklar değişsin; günler bu turda yeniden ölçülmedi |
| K15 | `kronoloji_sinir_adalar_dogu_asya.js:23` Kuril çıkarması 1945-08-18 | kaynak Pacific Wrecks (ikincil) ve "Stephan 1974 — teyit bekliyor" | VOV ansiklopedisi (histrf): «18 августа 1945 г. начались ожесточенные бои за остров Шумшу… завершились лишь 23 августа»; prlib.ru/history/1172670: «С 19 августа по 1 сентября 1945 г.» | ÇELİŞKİ (Rus kaynakları 18 ile 19 arasında ayrışıyor) | 18 kalsın; kaynak histrf olsun, prlib'in 19 Ağustos'u `ic_not`ta beyan edilsin |
| K16 | Bağımsızlık günlerinin ölçütü | ukrayna, moldova, ozbekistan, kirgizistan, tacikistan **bildiri** gününü alıyor; azerbaycan (18.10), kazakistan, turkmenistan **anayasa yasası** gününü | Azerbaycan: 30.08.1991 «Декларация о восстановлении государственной независимости», 18.10.1991 Anayasal Akt (president.az) | ÇELİŞKİ (ölçüt karışık) | **Emre karar verecek:** ① her cumhuriyette ilk bağımsızlık bildirisi (Azerbaycan → 1991-08-30) ya da ② her cumhuriyette hukukî kesinleşme. Bugünkü karışık seçim beyan edilmemiş |
| K17 | ermenistan-cumhuriyeti f 1991-09-23 | ozet, 21.09 referandum ile 23.09 ilan ayrımını beyan ediyor | president.am, parliament.am: 21.09 referandum, 23.09 ilan | doğru | Bulgu yok. Brief'teki "21 Eylül" referandum günüdür |
| K18 | litvanya-cumhuriyeti-yeniden f 1990-03-11 | Act No. I-12 (refworld) | Gün BRE tablosunda var; yasa metni ajanca açılmadı | doğru (Rus tarafı teyitsiz) | — |

**Kaynakla aynı günü taşıyan, doğru bulunan uçlar:**
- **1991 bağımsızlıkları:** Ukrayna 24.08, Belarus 25.08, Moldova 27.08, Özbekistan 31.08, Kırgızistan 31.08, Tacikistan 09.09, Türkmenistan 27.10, Kazakistan 16.12, Gürcistan 09.04, Estonya 20.08, Letonya 21.08; Litvanya 11.03.1990.
- **Fiilî yapılar:** Güney Osetya 29.05.1992, Transdinyester 02.09.1990, İçkerya 01.11.1991 ve 06.02.2000.
- **1945-1946 toprakları:** Güney Sahalin ve Kurillerin RSFSR'ye katılışı 02.02.1946 (prlib.ru/history/1172073); Karpat-Ötesi 29.06.1945 (FRUS 1945 c. IV); Potsdam ve Königsberg 02.08.1945.
- **Öteki:** Baltık bağımsızlığının SSCB'ce tanınması 06.09.1991 ([BRE\*] Estonya, Letonya); Sohum 27.09.1993 ([BRE\*] Абхазия); Rusya'nın Güney Osetya'yı tanıması 26.08.2008 (kremlin.ru Ukaz № 1261); Kırım 18.03.2014 (kremlin.ru).

### ①b Yeterlilik: standart kronolojide olup atlasta olmayanlar (EKSİK-MADDE)

Yöntem: Rus akademik takvimi (prlib.ru "История России" günleri, BRE "СССР" ve "Российская Федерация"
olay tabloları) ile dünya kronolojisinin (Britannica, Cambridge History of Russia c. III) ortak
çekirdeğinden 54 olay listelendi ve `data/*.js`'te **aynı gün** arandı. **31'i hiçbir dosyada yok.**
✅ işaretli günleri alt ajan kaynakla teyit etti. Ötekiler standart kronolojinin günüdür; maddeye
yazılmadan önce teyit edilmeli. Cambridge cildi bu turda açılmadı.

| Gün | Olay | Kaynak (öneri) | Not |
|---|---|---|---|
| 1946-03-15 | Halk Komiserleri Sovyeti, Bakanlar Kurulu'na dönüştü | Закон СССР 15.03.1946 | |
| 1947-12-14 | Para reformu ve karnenin kaldırılması | Постановление СМ СССР и ЦК № 4004 (14.12.1947) | |
| 1949-01-25 | KEİK (СЭВ) kuruldu (kuruluş bildirisi) | BRE "Совет экономической взаимопомощи" | 8 Ocak toplantısı mı, 25 Ocak ilanı mı: teyit |
| 1949-08-29 | İlk Sovyet atom bombası denemesi (Semipalatinsk) | BRE "Атомный проект СССР" | Kazakistan coğrafyası |
| 1950-02-14 | Sovyet-Çin Dostluk, İttifak ve Yardımlaşma Antlaşması | Çin Dışişleri; FRUS | Port Arthur hükümleri bu antlaşmada |
| 1953-06-26 | Beria tutuklandı | prlib | |
| 1953-08-12 | Sovyet hidrojen bombası denemesi (RDS-6s) | BRE | |
| **1954-02-19** ✅ | **Kırım oblastı RSFSR'den Ukrayna SSC'ye devredildi** (kanun 26.04.1954) | [BRE\*] «Согласно указу Президиума ВС СССР от 19.2.1954 и закону СССР от 26.4.1954» | En önemli eksik (bkz. H3) |
| 1955-05 (ay) ✅ | Sovyet birlikleri Port Arthur'dan çekildi | mil.ru: «завершены в мае 1955 г.» | **Gün bulunamadı:** `1955-05-01` + "[yalnız ay teyitli]" |
| **1956-01-26** ✅ | Porkkala Finlandiya'ya iade edildi | yle.fi (2006): sınır bariyeri 26.1.1956'da kalktı | |
| 1956-10-19 | Sovyet-Japon Ortak Bildirisi (Habomai ve Şikotan vaadi) | Japonya MOFA | Kuril meselesinin hukukî düğümü |
| 1969-03-02 ✅ | Damanski (Zhenbao) adası çatışması | [BRE\*] Sovyet-Çin sınır çatışması | |
| 1972-05-26 | SALT I ve ABM antlaşmaları | BRE | |
| 1975-08-01 | Helsinki Nihaî Senedi (sınırların dokunulmazlığı) | AGİK metni | |
| 1977-10-07 | 1977 SSCB Anayasası | BRE "Конституция СССР 1977" | |
| 1982-11-10 | Brejnev öldü | prlib | Andropov maddesi (11-12) var, ölüm maddesi yok |
| 1987-12-08 | INF antlaşması | | |
| 1989-05-25 | Halk Temsilcileri Kongresi toplandı | BRE | |
| 1990-03-14 | Anayasanın 6. maddesi (SBKP tekeli) kaldırıldı | Закон СССР 14.03.1990 | |
| **1990-06-12** | RSFSR Egemenlik Bildirisi | Декларация о гос. суверенитете РСФСР | rusya-federasyonu ozet'inde geçiyor, maddesi yok |
| 1991-03-17 | Birliğin korunması referandumu | | |
| **1991-12-21** ✅ | **Alma-Ata Bildirisi** (11 cumhuriyet; BDT genişledi) | prlib.ru/history/619829: «21 декабря 1991 г. в г. Алма-Ата…» | Yalnız Özbekistan'ın BDT üyeliği maddesi var |
| 1991-12-25 ✅ | Gorbaçov istifa etti; RSFSR'nin adı Rusya Federasyonu oldu | Закон № 2094-I (consultant.ru) | Bugün "bayrak indi, SSCB dağıldı" maddesine sıkışmış (K1) |
| 1992-01-02 | Fiyatlar serbest bırakıldı | Указ № 297 (03.12.1991) | |
| 1992-03-31 | Federasyon Antlaşması | | Tataristan ve Çeçenya imzalamadı |
| 1995-02 ✅ | Federal güçler Grozni'yi aldı (Şubat ortası; gün yok) | [BRE\*] «Грозный в целом был освобождён» | "Mart 1995" yanlış olur |
| 1996-08-06 ✅ | Çeçen kuvvetleri Grozni'yi geri aldı | Gün Kommersant'tan; BRE yalnız "Ağustos" | Hasavyurt'un öncülü |
| 1998-08-17 | Rusya borç moratoryumu (default) | | |
| 1999-08-07 | Basayev'in Dağıstan baskını | | İkinci savaşın başlangıcı |
| 1999-09-30 | İkinci Çeçen Savaşı'nın kara harekâtı başladı | | |
| 1991-05-16 ✅ | SSCB-Çin doğu kesimi sınır anlaşması | Rus resmî metni görülmedi; PA-X | Ufuk içinde bir sınır maddesi |
| *ufuk dışı* 2004-10-14 ✅ | Rusya-Çin ek sınır anlaşması | docs.cntd.ru/document/901945334 | |
| *ufuk dışı* **2008-10-14** ✅ | Tarabarov ve Bolşoy Ussuriyski'nin yarısı Çin'e devredildi; protokol yürürlüğe girdi | Çin Dışişleri basın toplantısı, 14.10.2008 | 21.07.2008 imza günüdür, devir değil |
| *ufuk dışı* 2008-08-08 | Rusya-Gürcistan savaşı | | |
| *ufuk dışı* 2008-08-26 ✅ | Rusya **Abhazya**'yı tanıdı (Ukaz № 1260) | kremlin.ru/acts/bank/27957 | Yalnız Güney Osetya'nın tanınması maddesi var |
| *ufuk dışı* 2010-09-15 ✅ | Rusya-Norveç Barents antlaşması (yürürlük 2011-07-07) | un.org BM kayıt 49095; regjeringen.no | |
| *ufuk dışı* 2014-03-21 ✅ | FKZ № 6-ФКЗ (Rus hukukunda katılım) | kremlin.ru/acts/bank/38220 | |
| *ufuk dışı* 2014-03-27 ✅ | BM Genel Kurulu 68/262 (ilhakı geçersiz saydı) | digitallibrary.un.org | Uluslararası taraf |
| *ufuk dışı* 2014-04 (ay) | DNR ve LNR ilânları | BRE ve prlib yalnız "Nisan 2014" | **Gün akademik kaynakta bulunamadı** |
| *ufuk dışı* 2022-02-21 ✅ | Rusya DNR ve LNR'yi tanıdı (Ukaz № 71, 72) | publication.pravo.gov.ru 0001202202220001/2 | |
| *ufuk dışı* 2022-09-30 ✅ | Dört bölgenin ilhak antlaşmaları | kremlin.ru/events/president/news/69465 | |
| *ufuk dışı* 2022-10-12 ✅ | BM Genel Kurulu ES-11/4 | digitallibrary.un.org | Uluslararası taraf |

**Birden çok olayı tek maddede toplayan maddeler (ayrılmalı):**
- `devletler.js:375` "bayrak indirildi, SSCB dağıldı" (25.12): istifa ve ad değişikliği (25.12) ile 142-N (26.12) iki ayrı madde olmalı (K1).
- rusya-federasyonu 1994-12-11 "Birinci Çeçen Savaşı": başlangıç var, ama Grozni'nin alınması (1995-02) ve geri alınması (1996-08-06) yok. Hasavyurt (1996-08-31) zaten ayrı madde, doğru.
- İkinci Çeçen Savaşı'nın başlangıcı yok; yalnız sonu var (`ickerya` t 2000-02-06).
- `kronoloji_sinir_adalar_dogu_asya.js:22` (1945-09-02) tek maddede Kurilleri (SSCB), Ogasawara'yı (ABD) ve Hainan'ı (Çin) topluyor. Japon hükümetine göre Kuril adalarının işgal günleri ayrıdır: Etorofu 28.08, Kunaşir ve Şikotan 01.09, Habomai 03.09, tamamı 05.09.1945 (hoppou.go.jp). Rus kaynağı ise «ко 2 сентября… вся Курильская гряда была очищена» diyor. Taraflar ayrışıyor; Rus kaynağı Habomai için bulunamadı, üçüncü bağımsız kaynakla teyit edilene kadar beyanlı kalmalı.

---

## ② HARİTA UYUMU

**Ölçüm:** 1945-09-02 sonrasında taraflarından biri `sovyet-rusya` ya da `rusya-federasyonu` olan
**545 yerleşim kırılması** var, **17 gün×taraf kovasında** toplanıyor (tam liste ⓐ). `py arac/denetle.py`
sonuçları: Değişmez 1 ✓ (312 sahipsiz, beklenenle aynı), **Değişmez 2 ✓ 0 açık**, 2i ✓ 0 açık, 4 ✓.
Bu dönemde Rusya taraflı Değişmez 2 ihlali yok. ⚠️ Değişmez 7 ve 8 **ölçülemedi**: makinede aynı anda
6 denetle koştu ve bellek tükendi. Benim sürecim 25 dk ilerlemeyince durduruldu (yalnız kendi PID'im);
çıkış kodu okunmadı.

ⓐ **Kırılma kovaları (gün → taraf: nokta sayısı):**
- 1945-09-02 meiji-japonya→sovyet: 11
- 1990-03-11 →litvanya: 4
- 1991-04-09 →gürcistan: 18
- 1991-08-20 →estonya: 4 · 08-21 →letonya: 7 · 08-24 →ukrayna: 86 · 08-25 →belarus: 10 · 08-27 →moldova: 6
- 1991-08-31 →kırgızistan: 5, →özbekistan: 13 · 09-09 →tacikistan: 10 · 09-23 →ermenistan: 5
- 1991-10-18 →azerbaycan: 16 · 10-27 →türkmenistan: 11 · 12-16 →kazakistan: 34
- 1991-12-26 sovyet→rusya-federasyonu: 301
- 2000-02-06 ickerya→RF: 4

Her kovanın günü ilgili künyenin `f`'siyle aynı.

| # | Kimlik | Durum | Sınıf | Öneri |
|---|---|---|---|---|
| H1 | `devletler.js:15468` gurcistan-cumhuriyeti `1993-09-27 tur:"toprak-kayip"` "Abhazya Gürcü denetiminden çıktı" | **Madde var, kırılma yok.** Sohum (`yerlesimler.js`) 1991-04-09'dan 2000-12-31'e kadar `gurcistan-cumhuriyeti`. Abhazya künyesi yok (③ D1) | SESSİZ-DEĞİŞİM (ters yön: kırılması olmayan madde) | Abhazya künyesi açılıp Sohum'a (ve bir Gagra/Gudauta noktasına) `1993-09-30` kırılması yazılsın ([BRE\*]: 30.9'da Gürcistan sınırına çıkıldı). Ya da madde "fiilî" diye beyan edilip `tur` değiştirilsin. Seçim ⓒ'ye bağlı |
| H2 | rusya-federasyonu `2014-03-18 toprak-kazanc` ve ukrayna `2014-03-18 toprak-kayip` | Ufuk dışı: harita 2000-12-31'de durduğu için kırılma yazılamaz. Ama bu türler "toprak el değiştirdi" der | ÇELİŞKİ (beyansız) | ⓒ'deki seçeneklerden biri beyan edilsin. En azından taraf tutmayan bir tür (`tur:"ilhak-ilani"` gibi) ve `ic_not` |
| H3 | Kırım 1954 | Haritada birlik cumhuriyetleri yok; bütün SSCB tek `sovyet-rusya`. 1954 devri haritada görünmez ve görünmemeli. Ama Kırım noktaları (Akmescid, Akyar/Sivastopol, Kefe, Kerç, Bahçesaray…) 1991-08-24'te `ukrayna`ya geçiyor. **Bu kırılmanın nedeni 1954 devridir ve kronolojide maddesi yok** | EKSİK-MADDE | `1954-02-19` maddesi eklensin (①b). [BRE\*] Sevastopol için «решение о передаче Севастополя в состав УССР не принималось» der; bu Rus tezidir. Ukrayna ve dünya tarafında 1978 Ukrayna SSC anayasası Sevastopol'u cumhuriyet şehri sayar. İki taraf `ic_not`a yazılsın, harita değişmesin: Sevastopol 1991-2000 arasında fiilen de hukuken de Ukrayna'daydı |
| H4 | `yerlesimler_p0037.js` Białystok | `sovyet-rusya[1944-07-01..1945-01-17] → polonya-halk`. 1945-01-17 Varşova maddesine bağlanmış | Kızıl Ordu şehri **1944-07-27**'de aldı (Boćkowski, *Studia Podlaskie* 15, 2005). PKWN-SSCB anlaşması 27.07.1944. Kesin sınır antlaşması **1945-08-16** (ru.wikisource). Polonya idaresine fiilî geçiş günü **bulunamadı**; iki aday da teyitsiz: 1944-08-02 voyvoda atanması, 1944-09-20 Belostok oblastının kaldırılması | TARİH-HATA | 1917-1945 oturumuna devredilsin. Sovyet giriş günü 1944-07-27. Polonya'ya geçiş için kaynak bulunana kadar savunulabilir uç 1945-08-16'dır (antlaşma); 1945-01-17 değildir |
| H5 | `yerlesimler.js` Bender | 1991-08-27'den 2000'e `moldova` | Bender 19-21.06.1992 çatışmalarından beri PMR denetiminde. BRE yalnız "1992 yazı" diyor; gün akademik kaynakta **bulunamadı** | SINIR (fiilî/hukukî seçimine bağlı) | ⓒ'ye bağlı. Fiilî seçilirse savunulabilir uç `1992-07-21` (ateşkes, [BRE\*] teyitli) + beyan |
| H6 | Tiraspol, Rîbnița (`yerlesimler_halef_1946.js`) | 1990-09-02'den itibaren `transdinyester` | [BRE\*]: ilan edilen yapı "ПМССР в составе СССР"; SSCB 22.12.1990'da ilanı geçersiz saydı. 1990-91'de alan hukuken SSCB'deydi | ÇELİŞKİ (beyansız fiilî seçim) | Seçim beyan edilsin (ⓒ). Hukukî seçimde f → 1991-08-27 ya da 1992-07-21 |
| H7 | Grozni, Gudermes, Şali, Urus-Martan | 1991-11-01'den 2000-02-06'ya kesintisiz `ickerya` | Grozni 1995-02'den 1996-08-06'ya federal denetimdeydi ([BRE\*]; Kommersant) | SINIR (fiilî seçimle tutarsız) | Fiilî seçilirse Grozni'ye 1995-02 → 1996-08-06 arası RF dönemi; 1995-02'nin günü yok, "[yalnız ay]" beyanı |
| H8 | Lüşun (Port Arthur) | 1945-09-02'den `cin-cumhuriyeti` | 14.08.1945 antlaşması: ortak deniz üssü, fiilen Sovyet askerî idaresi. Çekilme Mayıs 1955 (mil.ru) | SINIR (beyan önerisi) | Egemenlik Çin'de, harita doğru. `ic_not` ile 1950-02-14 ve 1955-05 maddeleri eklensin |
| H9 | `azerbaycan-milli-hukumeti` (1945-12-12..1946-12-12) | Künye ve 4 kronoloji maddesi var, ama **hiçbir nokta bu künyeyle boyanmıyor** (Tebriz ve Erdebil 1925-2000 `iran`) | TDV 'Tebriz', TDV 'Azerbaycan' | SESSİZ-DEĞİŞİM (ters yön: künye haritada yok) | Tebriz, Erdebil ve Urmiye'ye 1945-12-12..1946-12-12 dönemi yazılsın. Sovyet işgali `isg:` olarak da düşünülebilir |
| H10 | Habomai ve Şikotan | Nokta yok; petek bu adaları en yakın noktaya emer (Kunaşir ya da Hokkaido). **Ölçülmedi** (üretilmiş harita okunmadı) | — | — | Haritadaki sahiplerine bakılmalı. Gerekirse Şikotan noktası açılsın (1945-09-01, hoppou.go.jp) |
| H11 | `kronoloji_sinir_adalar_dogu_asya.js:22` 1945-09-02 | 11 Kuril kırılması maddeyle aynı gün ✓ | Rus kaynağı «ко 2 сентября» ✓ | — | Bulgu yok |
| H12 | Königsberg 1945-08-02, Klaipėda 1945-01-28, Ungvár ve Munkács 1945-06-29, Petsamo 1944-09-19, Viipuri 1944-06-20; Petseri ve Abrene 1991-12-26'da RF'ye | Kaynakla uyumlu. Petseri ve Abrene Ocak 1945'te RSFSR'ye iç devirle geçtiği için 1991'de Estonya ya da Letonya'ya değil RF'ye kalmaları doğru; iç devrin maddesi yok | — | — | İsteğe bağlı: 1945-01-16 Pskov oblastı devri için `ic_not` |

### ⓒ Fiilî denetim mi, uluslararası tanınma mı? (Emre'nin kararı)

Atlasın seçimi **hiçbir yerde beyan edilmemiş** (`VERI-YAPISI.md`, `MIMARI.md` ve `CLAUDE.md` tarandı)
ve **kendi içinde tutarsız**:
- Fiilî yapı olarak boyananlar: Transdinyester (1990), Dağlık Karabağ (1991), Güney Osetya (1992), İçkerya (1991-2000).
- Boyanmayan: Abhazya (1993-).
- Hukukî sahibinde bırakılanlar: Bender (Moldova), Şuşa 1992 sonrası (Azerbaycan); Grozni ise 1995-96'da da İçkerya'da.

İki tarafın çizgisi:
- **Rus kaynakları** (kremlin.ru, FKZ 6-ФКЗ, BRE): Kırım 18.03.2014'ten, dört bölge 30.09.2022'den
  itibaren Rusya'nın parçasıdır. Abhazya ve Güney Osetya 26.08.2008'den beri egemen devlettir.
- **Uluslararası hukuk ve dünya kaynakları** (BM Genel Kurulu 68/262 ve ES-11/4; Gürcistan'ı tanıyan
  devletlerin büyük çoğunluğu, ki BRE de bunu kaydeder): bu katılımlar geçersizdir. Kırım ve dört bölge
  Ukrayna'nın, Abhazya ve Güney Osetya Gürcistan'ın, Transdinyester Moldova'nın toprağıdır.
- Günlerde iki taraf arasında çelişki yok; **ayrışma statüdedir.**

Seçenekler (hiçbiri taraf tutmuyor):
1. **Fiilî denetim + beyan:** bütün tanınmamış yapılar boyanır (Abhazya ve Bender eklenir). Künyede
   "fiilî, tanınmamış" beyanı, BM kararı `ic_not`ta.
2. **Uluslararası tanınma:** tanınmamış yapılar boyanmaz, ana devlette kalır ve kronolojide madde olarak
   yaşar. Transdinyester, Dağlık Karabağ, Güney Osetya ve İçkerya noktaları ana devlete döner.
3. **Karma:** hukukî sahip boyanır, fiilî yapı ikinci bir katmanla (tarama, çizgi) gösterilir. Bu motor işidir.

Ufuk 2000'de kaldıkça 2014 ve 2022 yalnız kronoloji sorusudur. H2'deki `toprak-kazanc` ve
`toprak-kayip` türleri 1. seçeneği ima ediyor. Hangi seçenek seçilirse seçilsin tür adları ve beyan
buna göre uyumlanmalı.

---

## ③ ÖBÜR DEVLETLER (Rusya çevresi, 1945-09-02 → 2000-12-31)

**Ölçüm:** bu dönemde enlem 30-82°, boylam 10-180° (Alaska dahil) içinde boyanan 119 künye çıkarıldı.
Rusya'yla sınırı ya da Sovyet bağı olan **52'si** tek tek denetlendi:
- 15 ardıl cumhuriyet
- 4 fiilî yapı: transdinyester, daglik-karabag, guney-osetya, ickerya
- Avrupa: Finlandiya, Norveç, Polonya (halk, III. Cumhuriyet), Çekoslovakya, Macaristan (halk), Romanya (halk, cumhuriyet), Bulgaristan (halk), DDR, Almanya Müttefik İşgali, Avusturya II. Cumhuriyet
- Güney ve Orta Asya: Türkiye, İran, Afganistan, Moğolistan HC, Azerbaycan Millî Hükûmeti
- Doğu Asya: Çin Cumhuriyeti, ÇHC, Doğu Türkistan (Gulca), Tibet, Japon Kore, ABD Askerî Hükûmeti Kore, Kuzey Kore Sovyet idaresi, Kuzey Kore, Güney Kore, Meiji Japonya, Japonya Devleti
- ABD (Alaska) ve öteki komşular

**(a) UYDURMA-DEVLET: 0.** Küçük ve kısa ömürlü yapıların hepsi akademik kaynakta geçiyor:
- transdinyester: [BRE\*] ПМР
- daglik-karabag: de Waal, *Black Garden*
- guney-osetya: Tagliavini/IIFFMCG 2009; [BRE\*]
- ickerya: TDV 'Çeçenistan'
- kuzey-kore-sovyet-idaresi: LoC Country Study
- dogu-turkistan-cumhuriyeti-gulca: TDV 'Doğu Türkistan' (bu turda açılmadı; künyedeki kaynaktan)
- azerbaycan-milli-hukumeti: TDV 'Tebriz'

**(b) f/t ve alan:**

| # | Künye | Atlasta | Kaynak | Sınıf | Öneri |
|---|---|---|---|---|---|
| D-b1 | `devletler.js:179` `iran` | `t:"2026-08-07"`. ozet "Emre'nin 7 Ağustos 2026 kararı" ve "haritada hiç boyanmaz" diyor; oysa künye 87 noktayı 1925-2000 arası boyuyor | İran İslam Cumhuriyeti sürüyor. 2026-08-07 bir **karar günü**, devletin sonu değil | TARİH-HATA | `t` kaldırılsın (açık uç); ozet'teki "hiç boyanmaz" bayat. 1979-04-01 rejim değişimi ayrı künye mi, madde mi: Emre'nin kararı |
| D-b2 | `devletler.js:7896` `afganistan` "Bârekzâyî Emirliği", `tur:"emirlik"`, `t` yok | 1819'dan 2000'e tek künye | Monarşinin sonu 17.07.1973 (TDV 'Afganistan'); Afganistan Demokratik Cumhuriyeti 1978-04-30 → 1992-04-28; Taliban İslâm Emirliği 1996-09-27 | EKSİK-DEVLET / TARİH-HATA | `t` → 1973-07-17. Ardıllar: Afganistan Cumhuriyeti (Davud, 1973-1978), ADC (1978-1992; 1979-12-24 Sovyet müdahalesi maddesi bu künyeye bağlanır), İslâm Devleti (1992-), Taliban (1996-, fiilî; ⓒ'ye bağlı) |
| D-b3 | azerbaycan-milli-hukumeti | Künye var, haritada alanı yok | TDV 'Tebriz' | SESSİZ | Bkz. H9 |
| D-b4 | Ardıl cumhuriyetler ve fiilî yapılar | `f` günleri kaynakla aynı (①a sonundaki liste) | — | — | — |

**(c) EKSİK-DEVLET:**

| # | Yapı | Dönem | Kaynak | Not |
|---|---|---|---|---|
| D1 | **Abhazya** (fiilî) | 1993-09-30 fiilî ayrılık → 1999-10-12 bağımsızlık aktı → 2008-08-26 Rusya'nın tanıması (ufuk dışı) | [BRE\*] Абхазия; kremlin.ru Ukaz № 1260 | Güney Osetya atlasta varken bu eksiklik tutarsız (H1) |
| D2 | **Kürdistan Cumhuriyeti (Mahabad)** | 1946-01-22 → 1946-12-15 (Sovyet işgal bölgesinde) | TDV 'Mahabad' (bu turda açılmadı; **gün teyitsiz**) | Azerbaycan Millî Hükûmeti'nin eşi. Mahabad noktası 1925-2000 `iran` |
| D3 | Afganistan'ın ardılları | Bkz. D-b2 | TDV 'Afganistan' | |
| D4 | Gagavuzya (aday) | 1990-08-19 ilan → 1994-12-23 özerklik yasası | Rus ve Moldova akademik kaynağı aranmadı | Fiilî denetimi Transdinyester ölçüsünde değildi. **Devlet olarak kaynakta ayrıca doğrulanmalı**; şimdilik yalnız aday |
| D5 | DNR ve LNR | 2014-04 → 2022-09-30 (ufuk dışı) | BRE ve prlib yalnız "Nisan 2014" | Ufuk 2000'de kaldıkça yalnız kronoloji sorusu |

---

## Sayılar

| Başlık | Denetlenen | Hatalı | Eksik |
|---|---|---|---|
| ① Kronoloji | 263 madde tarandı: 30 künyenin 1945 sonrası 208 kronoloji maddesi ve olay/sınır dosyalarından 55 madde. Bunların ~45'inin günü kaynakla karşılaştırıldı | **16** (K1-K16; K17-K18 temiz). Dağılım: 2 bayat toprak maddesi, 1 yanlış kimlik, 9 zayıf ya da eksik kaynak, 4 tarih ya da ölçüt çelişkisi | **31** eksik olay (54'lük listeden: ufuk içi 22, ufuk dışı 9) ve 4 tek maddeye sıkışmış çok olaylı madde |
| ② Harita | 545 yerleşim kırılması (17 kova) ve 12 tematik vaka (H1-H12) | **9 uyumsuz** (H1-H9). Değişmez 2 ölçütüyle ihlal 0 | H10 ölçülmedi |
| ③ Devletler | 52 künye tek tek denetlendi (boyanan 119 künye listelendi) | 2 künyede tarih ya da kapsam hatası (iran `t`, afganistan); 1 künye haritada alansız | Şüpheli ya da uydurma **0**. Eksik **3 kesin** (Abhazya, Mahabad, Afganistan'ın ardılları) **ve 2 aday** (Gagavuzya, DNR/LNR) |

**Ölçülemeyenler:**
- Değişmez 7 ve 8: bellek tükendi, denetle durduruldu.
- Habomai ve Şikotan'ın haritadaki sahibi: üretilmiş harita okunmadı.
- BRE sayfaları doğrudan açılamadı; alıntılar [BRE\*] işaretli.
- Kaynakta bulunamayan günler: Białystok'un Polonya'ya geçişi, Port Arthur çekilmesi, Bender'in PMR'ye geçişi, DNR ve LNR ilanları. Habomai ve Şikotan için Rus kaynağı da bulunamadı.
- 1945-09-02 öncesi (Kaliningrad, Karpat-Ötesi, Petsamo, Polonya sınırı) yalnız 1945 sonrasına etkisi kadar denetlendi; asıl dönemleri 1917-1945 oturumundadır.

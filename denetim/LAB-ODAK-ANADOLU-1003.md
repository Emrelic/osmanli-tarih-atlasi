# LAB-ODAK-ANADOLU-1003: `kronoloji_cok_once1281_anadolu.js` ilk 40 odaksız madde

- Tarih: 2026-10-01 · Makine: EMRE (LAB) · Dal: `lab-odak-1003` (origin/main f07a6be9'dan)
- Kova: **YENİ KAPSAM** (koordinatör ölçümüyle; 204'lük kova). Dosyada 175 madde var, bunların 71'i odaksız. Bu rapor dosya sırasıyla **ilk 40**'ı kapsıyor.
- Yöntem: Her maddenin metni okundu ve olayın **geçtiği** yer arandı (başlıktaki ilk yer adı alınmadı). Dayanak olarak kaydın kendi `kaynak` alanındaki TDV maddesi ham indirilip **sınırsız** tarandı. TDV dışındaki 3 kalemde Encyclopaedia Iranica ham metni okundu.
- **Atlas havuzu:** `index.html`'in yüklediği 69 `data/` betiği node'da çalıştırıldı ve `YERLESIMLER*` ile `SEHIRLER` dizilerinden **4.300 koordinatlı ad** toplandı. `AD_KONUM` havuzu (`js/app.js`) bu kaynaklardan oluşuyor. Eşleştirme `adKonumBul` kuralıyla yapıldı: birebir ad ya da " (" öncesi.

## Özet

| Sonuç | Adet | Kalemler |
|---|---|---|
| ① atlasta VAR | **0** | — |
| ② atlasta YOK | 10 | #3 #27 Dvin · #4 Şemkûr · #21 Harran · #22 Habur çayı · #23 Meyyâfârikîn · #29 #30 Tel İfrîn · #33 #39 Ani |
| ③ yersiz | 25 | #1 #2 #6 #7 #8 #9 #10 #11 #12 #13 #14 #15 #16 #17 #18 #20 #24 #25 #28 #31 #32 #34 #37 #38 #40 |
| bulunamadı | 4 | #19 #26 #35 #36 |
| BEKLET | 1 | #5 (iki olay tek kayıtta) |

**Bu partide uygulanabilir `yer_id` yok.** Kafkasya ve Güneydoğu Anadolu'nun 11.-12. yüzyıl merkezleri havuzda bulunmuyor.
🔴 **Atlas boşluğu:** Havuzda **Ani, Ahlat, Dvin, Silvan (Meyyâfârikîn), Ergani, Harran ve Şemkir YOK.** Ani bu partide 2 olayın yeri (#33, #39) ve 2 olayın konusu (#9, #40). Dvin 2 olayın yeri (#27, #3). Yeni nokta açılacaksa en yüksek getiri **Ani** ve **Dvin**'de.
(Havuzda bulunan komşular: `Kars`, `Gence`, `Tiflis`, `Şeki (Nuha)`, `Şamahı`, `Derbend`, `Harput (Elazığ)`, `Kâhta`, `Palu`, `Hasankeyf`, `Bitlis`, `Mardin`, `Diyarbakır`, `Urfa`, `Malatya`, `Erzurum`. Hiçbiri bu 40 olayın **geçtiği** yer değil.)

## ② Atlasta YOK (10)

| # | t | Yer | Dayanak (birebir) |
|---|---|---|---|
| 3 | 1022 | Dvin | TDV seddadiler: «413'te (1022) Ermeniler'den aldığı Dvin'in idaresini oğlu Ebü'l-Esvâr Şâvur'a (Şâver) verdi.» |
| 4 | 1026 | Şemkûr | TDV seddadiler: «…tekrar Şemkûr'u kuşatan Gürcü Kralı Giorgi'yi yenilgiye uğrattı (1026).» |
| 21 | 1104-05-07 | Harran | TDV haclilar: «…Harran'ı ele geçirmek üzere çıktıkları seferde … yapılan savaşta (7 Mayıs 1104)…» (ORTADOGU-1002 #20 ile aynı olay) |
| 22 | 1107-06-14 | Habur çayı | TDV selcuklular: «…Kılıcarslan esir düşmemek için karşıya geçmek amacıyla atını Habur çayına sürdü ve sulara gömülerek hayatını kaybetti (500/1107).» Aynısını TDV inalogullari de veriyor. |
| 23 | 1109 | Meyyâfârikîn (Silvan) | TDV meyyafarikin: «Meyyâfârikīn, Şevval 502'de (Mayıs 1109) Ahlatşahlar'ın kurucusu Sökmen el-Kutbî tarafından ele geçirildi.» |
| 27 | 1118 | Dvin | TDV seddadiler: «…Togan Arslan 512'de (1118) tekrar Dvin'e saldırdı ve Menûçihr'i öldürerek şehri topraklarına kattı.» |
| 29 | 1119 | Tel İfrîn | TDV dilmacogullari: «İlgazi, Togan Arslan'ın yardımıyla Antakya Haçlı Prensi Roger'i Tel İfrîn'de ağır bir yenilgiye uğrattı…» **= 1001 #10 (mükerrer; koordinatör hükmü geçerli)** |
| 30 | 1119-06-28 | Tel İfrîn | = 1001 #11 (mükerrer çiftinin öteki yarısı) |
| 33 | 1126 | Ani | TDV seddadiler: «…Ermeni ileri gelenleri şehri Fazl'a teslim etmeye mecbur oldular.» (Yıl: Iranica «in 1126 Abu'l-Aswār II's son Fażlun IV…») |
| 39 | 1154 | Ani | TDV saltuklular: «Ani'de baskına uğrayan Saltuklular mağlûp oldu. İzzeddin Saltuk ve çok sayıda asker esir düştü.» · TDV ahlatsahlar: «Gürcü Kralı Giorgi, 1154 yılında Saltuklu Hükümdarı İzzeddin Saltuk'u ağır bir yenilgiye uğrattıktan sonra…» ⚠️ TDV'nin iki maddesi kralın adında ayrılıyor (saltuklular/seddadiler "Dimitri", ahlatsahlar "Giorgi"). |

## ③ Yersiz (25)

| # | t | Gerekçe (TDV/Iranica dayanağı) |
|---|---|---|
| 1 | 1003 | İki ayrı yerin ilhakı: «…Fazl, Şaşvaş ve Sotk'u topraklarına kattı.» Havuzda ikisi de yok. |
| 2 | 1014 | Bir devletin yıkılışı: «1014 yılında kazandığı zaferle Bulgar Devleti'ni yıkarak arazisini imparatorluğa ilhak etti.» Savaşın yeri verilmiyor. |
| 6 | 1030 | Bölge: Iranica «…the Rus, who had sailed in 38 boats up to Shirvan, where they inflicted a heavy defeat on the Shirvanshah Manučehr.» Şirvan bir bölge. `Şamahı` havuzda var ama kaynak şehir adı vermiyor. |
| 7 | 1040 | Bölge (krallık): Iranica «…attacking his Armenian neighbor and brother-in-law David Anhoghin of Tashir, albeit unsuccessfully». |
| 8 | 1043 | Ölüm ve halef (Iranica Āl-e Hāšem: «ʿAbd-al-Malek b. Manṣūr (d. 434/1043)»). Not: Emirliğin merkezi `Derbend` havuzda var, ancak olay bir yerde "geçmiyor". |
| 9 | 1045 | Bölgenin ilhakı: «1045 yılında bu bölgenin de Bizans'a ilhakı ile…» Kaydın `yer` alanında "Ani" yazıyor, kaynak ise "bu bölge" diyor. |
| 10 | 1053 | Adı verilmeyen kaleler: «Gürcüler'e ait bazı sınır kalelerini ele geçirip buraları tahkim etti.» |
| 11 | 1057 | «1057'deki askerî darbe İsaakios Komnenos'u tahta çıkardı.» Yer verilmiyor. |
| 12 | 1061 | Ölüm ve halef: «Nasrüddevle 453'te (1061) vefat edince yerine oğlu Nizâmeddin … geçti.» |
| 13 | 1064 | Tâbiyet: «…Kral IV. Bagrat sonunda Selçuklular'a tâbi olmayı kabul etti…» |
| 14 | 1068 | İtaat: «1068'de Gürcistan seferi sırasında Sultan Alparslan'a itaat arzeden Ferîburz». |
| 15 | 1068 | Sefer: «Şekkî bölgesini itaat altına aldıktan sonra Gürcü Kralı Bagrat üzerine yürüyüp bazı yerleri fethetti.» Kaynak bir ilk hedef adlandırıyor, ama bu bir **bölge**. Havuzdaki `Şeki (Nuha)` bir şehir; eşlemek kaynağın söylemediğini söylemek olur. |
| 16 | 1076 | Sefer: «…Karthili'ye kadar gelip … bölgenin sorumluluğunu Serheng Savtegin'e verdi (1076).» |
| 17 | 1080 | Halef: «472'de (1080) ölen Nizâmeddin'in yerine büyük oğlu Nâsırüddevle Mansûr geçti.» |
| 18 | 1086 | Sefer: «Sultan Melikşah son olarak 1086'da büyük bir ordu ile bir defa daha Kafkaslar'a geldi ve bölgeyi tamamen itaat altına aldı.» |
| 20 | 1100 | Devir: «…idaresini kuzeni Baudouin du Bourg'a devrederek Kudüs'e gitti…» (madde Urfa kontluğunu anlatıyor) |
| 24 | 1110 | Köyler ve bağımsızlık: «504 (1110-11) yılında Silvan'a bağlı birçok köyü…» |
| 25 | 1110 | Birkaç yıla yayılan seferler: «Musul Valisi Mevdûd'un 1110'da başlayıp daha sonra devam eden üç seferi…» |
| 28 | 1118 | Devir (Urfa kontluğu). |
| 31 | 1121 | İktâ (idarî tahsis): «…Meyyâfârikīn'ı (Silvan) ona iktâ etti.» Olay Meyyâfârikîn'de geçmiyor. |
| 32 | 1122-11-19 | Ölüm ve bölünme: «…Zerdenâ Kalesi üzerine bir sefere çıktığı sırada hastalandı ve 19 Kasım 1122'de öldü.» Ölüm yeri verilmiyor. |
| 34 | 1128 | Halef: «…yerine altı yaşındaki yeğeni ve İbrâhim'in oğlu Sökmen geçti (1128-1185).» |
| 37 | 1144 | Dört yer: «…Zengî de Ergani, Hâlâr, Tulhum, Çermük gibi kale ve kasabaları ele geçirdi (538/1144)» |
| 38 | 1150 | İki olay ve birden çok yer: «…Kara Arslan, Gerger ve Harput'u ele geçirdi (1150).» Aynüddevle olayı ayrı. (`Harput (Elazığ)`, `Kâhta`, `Palu` havuzda var, `Gerger` yok.) |
| 40 | 1155 | İsyan ve halef: «…Ermeni rahibeler isyan ederek Saltuk'un yerine kardeşi V. Fazl'ın geçirilmesini sağladılar». Yer açıkça yazılmıyor. |

## Bulunamadı (4): olay bir yerde geçmiş, ama kaynak yeri vermiyor

| # | t | Durum |
|---|---|---|
| 19 | 1091-04-29 | TDV pecenekler (kaydın kaynağı bizans'ta Levunion yok): «Bizanslılar … müttefiki Kıpçaklar ile birlikte Peçenekler'i ağır bir yenilgiye uğrattılar (29 Nisan 1091).» Gün var, **Levunion adı yok**. (`Enez` havuzda var; yakınlık bir çıkarım olur.) |
| 26 | 1110 | TDV gurcistan: «Gürcü kuvvetlerini bozguna uğratarak bazı şehirleri tahrip etti (503/1110).» Gence yalnızca Gürcülerin ulaştığı nokta; savaşın yeri değil. |
| 35 | 1130 | TDV seddadiler: «Ancak Erzen Emîri Kurti'nin Dvin'i geri almak için giriştiği savaşta öldü (524/1130).» Savaş Dvin **için**; yeri yazılmıyor. |
| 36 | 1130 | TDV haclilar: «…II. Bohemund'un hâkimiyeti 1130'da Dânişmendliler ile yaptığı savaşta ölmesiyle son buldu.» Yer yok. |

## BEKLET (1)
- **#5 · 1030:** Kayıt **iki ayrı olayı** birleştiriyor: (a) Fazl'ın Gürcü baskınında 10.000 asker kaybetmesi (yer verilmiyor; Iranica bu çatışmayı 1027'ye koyuyor ve 1030'u alternatif tarih olarak veriyor) ve (b) Askereveyh'in **Beylekān**'da isyanı (TDV: «Aynı yıl oğlu Askereveyh (Askerûye) Beylekān'da isyan etti.»; Beylekān havuzda yok). Tek odak, kaydın iki yarısından birini yok sayar. Bölünüp bölünmeyeceği koordinatörün kararı.

## Denetim notları
- **#21 ve ORTADOGU-1002 #20:** Harran Savaşı (7 Mayıs 1104) iki bölge dosyasında ayrı `b` metinleriyle duruyor. Tel İfrîn'deki mükerrerle aynı sınıf (`t`+`b` tekilleştirmesi ikisini de geçirir).
- **#9:** Kaydın `yer: "Ani"` alanı kaynakta yok; kaynak "bu bölge" diyor. `yer`→`yer_id` türetmesinde bu da dayanaksız bir nokta üretirdi.
- **#39:** TDV'nin iki maddesi 1154'teki Gürcü kralını farklı adlandırıyor. Dimitri (1125-1156) dönemi 1154 ile uyuşuyor, ama bu benim çıkarımım; ölçülemedi.

## Bulamadıklarım
- #19, #26, #35 ve #36'nın yeri (kaynakta yok).
- #5'in ilk yarısının yeri.
- Iranica dışındaki birincil kaynaklar okunmadı.

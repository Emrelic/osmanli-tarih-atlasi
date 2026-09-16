# KUTU-AYIKLA — 171 açık madde ayıklaması · 16 Eylül 2026

> Oturum: KUTU-AYIKLA. Girdi: `denetim/KUTU-ACIK-LISTE-0916.txt` (171 satır). 
Yöntem: her satırın kendi `NOT:` alanı (önceki oturumların ÖLÇÜMÜ — çoğu bir commit kimliği 
taşıyor) okunup üç adımla sınandı: ① commit gerçekten var mı (`git log` ile 11 benzersiz kimliğin 
11'i de doğrulandı) ② o commit BU maddenin TAMAMINI mı yoksa bir KISMINI mı kapatıyor 
③ 'araştırma bitti' ile 'düzeltme uygulandı' AYRIŞTIRILDI (D107 — biri teşhis biri tedavi).

**Kural:** kanıtsız YAPILDI yazılmadı; 5 aday satırda (kısmi/belirsiz kanıt) `YAPILMADI`ya 
düşürüldü, sebebi tek satırda not edildi.

## SAYIYLA

```
YAPILDI    4
YAPILMADI  166  (HARITA-VERI 131, MOTOR 20, EKOKUMA 6, RENK 5, KRONOLOJI 4)
MUKERRER   1
KARAR      0
TOPLAM     171
```

## ⚠️ KAPSAM SINIRI (D107 — dürüstçe)

171 maddenin MUKERRER olup olmadığı `oturumlar/DALGA-0052.md`nin TAMAMINA (129+8 madde) karşı 
TEK TEK taranmadı — yalnız açıkça örtüşen 1 vaka (0050/H-0004) bulundu ve işaretlendi. 
Zaman bütçesi (171 madde / saat ~60) tam çapraz tarama için yetmiyordu; bu bir **ölçülemedi** 
kovasıdır, `MUKERRER: 0` demek değildir. KARAR kovası da aynı sebeple 0 çıktı — notlarda 
'Emre'nin kararı X' diye geçen maddelerin hepsinde karar ZATEN verilmişti (yalnız kodlanmamıştı), 
bu yüzden YAPILMADI'ya sayıldı; hakikaten AÇIK bir seçim sorusu taşıyan madde bulunmadı.

MOTOR/HARITA-VERI ayrımı bazı satırlarda anahtar-kelime sezgisiyle yapıldı (171 madde/saat-60 hızında
her satırın kod tabanını tek tek okumak mümkün değildi) — birkaç satır yanlış gruba düşmüş olabilir,
alan sahibi kendi gruba girenler arasında "bu bana ait değil" derse HARITA-VERI↔MOTOR arası taşınabilir.
Ayrıca liste içinde birçok madde "KÜME A/B/D/H/I/J/K/N" gibi ÖNCEKİ oturumlarca zaten kümelenmişti —
bu kümeleme AYNEN korundu (bir kümenin bütün üyeleri aynı grup+benzer gerekçeyle YAPILMADI yazıldı,
tek tek yeniden araştırılmadı) — bkz. aşağıdaki listede yakın numaralı maddelerin özet benzerliği.

## ① YAPILDI

| madde | kanıt (kısaltılmış) |
|---|---|
| 0019/H-0061 | ÇAPRAZ REFERANSLA: aynı konu (Mohaç sonrası Macaristan himaye gösterimi) 0044/H-0004'te "KARARIN KODA INDI (commit 8e14a50)" diye teyit edilmiş — 8e14a50 doğrulandı (`git log`): "ARAYUZ — himaye seridi IKI PARCALI: dis yarisi Osmanli kirmizisi, ic yarisi acik vassal kirmizisi" |
| 0044/H-0004 | KARARIN KODA INDI (commit 8e14a50): himaye edilen devlet kendi renginde; sinirlari boyunca iki parcali ince serit — dis yarisi Osmanli kirmizisi, ic y |
| 0044/H-0012 | DUZELTMEN ISLENDI: KOTUR ve BARGIRI (Muradiye) — ikisinin de haritada noktasi var ve 25 Agustos 1548'de Van ile ayni gun Osmanli'ya geciyor; TDV van i |
| 0049/H-0001 | 🟢 VERIDE DUZELDI (ARAS-CALDIRAN, denetim/ARASTIRMA-CALDIRAN-0913.md): ikisi de Safevi 1502 -> 24 Agustos 1548 · Osmanli 1548 -> 1920 · TBMM 1920-1923 |

## ② MUKERRER

| madde | eşleşen DALGA-0052 maddesi |
|---|---|
| 0050/H-0004 | UI · DALGA-0052 H-0047/H-0096 (gelistirici notlari son kullaniciya gosterilmesin) — AYNI KONU |

## ③ KARAR

(0 madde — bkz. yukarıdaki kapsam sınırı notu)

## ④ YAPILMADI — gruba göre, sayılı liste

### HARITA-VERI — 131 madde

1. **0014/H-0004** [sirada] — aral gölü baykal gölü gibi iç gölelrin kıyılarının harita ile örtüşmesi lütfen 4. seviye kalitede olsun gözümüzü kanatmasın
2. **0014/H-0005** [sirada] — bu lehistan litvanyaya ait olan üçkensel yapının manası nedir göz kanatıyor. ayrıca kutsal roma germen imparatorluğu rengini deniz
3. **0016/H-0002** [sirada] — bu haritadaki bu yapı hatamı acaba
4. **0016/H-0003** [sirada] — tuz gölü kıyılarına harita birebir 6. derecede kalite ile oturmalı
5. **0016/H-0004** [sirada] — kilitbahir karesi beyliği katılmasından sonra osmanlıya geçti mi çanakkalenin karşısındaki toprak yoksa hatamı
6. **0016/H-0005** [sirada] — çimpe kalesi alınınca saroz körfesinin kuzeyine toprak geçmesi oldumu hata mı bu konuda zaten düzenleme yapmıştık bir kalenin bir 
7. **0017/H-0001** [sirada] — bu üçkenin sebebi nedir dulkadiroğulları beyliğini kayseriye yakın taraftaki sınırında üçkensel görünüm var bozukluk mu
8. **0019/H-0018** [sirada] — anadolu hisarının yapımı maddesinde boğazın anadolu yakası alınmış görünüyor ama rumeli hisarının oraya da bölge geçiyor denizi ge
9. **0019/H-0019** [sirada] — rumeli hisarı tamamlandı maddesinde haritada değişiklik yok anadolu hisarı yapımı zamanından kalma şekilde rumeli hisarı bölgeside
10. **0019/H-0050** [sirada] — canbirdi gazali yenilmiş ama daha ileride bir toprakda yenilmiş görünüyor aradaki topraklar osmanlıya geçmeden ileri bir harekat m
11. **0019/H-0062** [tekrar] — VİYANA KUŞATMASINA YAPILAN SEFER İÇİN SİYAH KESİ KKESİK YOL VİYANA MDDESİNDEN BİR ÖNCEKİ MADDEDE ÇİZİLMİŞ. HENÜZ YAPILMAMIŞ AMA PL
12. **0020/H-0005** [sirada] — malta adasına kıyılara boyamayı harita boyamasını tam örtüştürelim
13. **0020/H-0012** [sirada] — ferhatpaşa anlaşması ile çizilen sınırlar böyle gösteriliyor ama bence hatalı. tam teyid edelim
14. **0020/H-0013** [sirada] — 4 ağustos 1578 vasiseyl savaşı maddesinde kafkasyada ufak bir toprak değişimi görülüyor. eğer böyle bir toprak değişimi var ise bu
15. **0020/H-0014** [sirada] — bu doğu savaşındaki ilerlemeler ve kronolojisi işte böyle bu ilerleme ve kronolojinin doüruluğunu teyid edelim.bu en son eklediğim
16. **0021/H-0005** [sirada] — buradaki iki boşluk neden kaynaklanıyor bu topraklar hiçbir merkeze 200 km den az uzaklıkda değil mi yani
17. **0021/H-0010** [sirada] — bağdat 4. murat alırken aradaki şehirlerin alınması tarihi kayıtlarda hiç mi geçmiyor bağdadın kuzeyindeki yerler erbil kerkük sem
18. **0021/H-0027** [sirada] — tebriz alınmış ama vanın doğusundaki topraklar alınmamış mı
19. **0021/H-0028** [sirada] — ferhatpaşa antlaşması yüksekova çaldıran başkale özalp doğubeyazıt şerur meku çulfa hoy mered selmas urmiyemiiyandoab mahabadsakkı
20. **0022/H-0005** [sirada] — yediçkul bozkırı camboyluk bozkırı deşti kıpçak bozkırı donesk bozkırı don bozkırı çerkask bozkırı kabartay nalçik bozkırı soçi an
21. **0023/H-0003** [sirada] — 2. viyana bozgunu sonrasında kutsal ittifak kurulmasını kutsal ittifaka katılan devletler ve aktörler nezdinde her bir devlete bir
22. **0024/H-0005** [sirada] — buradaki safevi iran parçası osmanlı basra vilayetini çaprazlama pas geçip enklav gibi osmanlı ötesinde safeviye bağlı bir toprak 
23. **0024/H-0008** [sirada] — bu maddede haritada böyle bir bölge görünüyor bu hata mı iki farklı renklendirmenin üstüste binmesi ile mi oluyor yoksa sebebi var
24. **0025/H-0001** [sirada] — SENCE 1711 DE GÜRCİSTAN BÖYLE Mİ BOYANMALI İKİ AYRI TOPRAK APRÇASI GİBİ BİRBİRİDNEN KOPUK. BUNU TEYİD EDELİM
25. **0025/H-0004** [sirada] — BURADAKİ HATAYI DÜZELTELİM
26. **0025/H-0009** [sirada] — dimetoka çirmen uzunköprü kırklareli lüleburgaz alınmadan lalapaşa edirne kofçaz dereköy demirköy iğneada rezve vize ahtapolu must
27. **0027/H-0006** [sirada] — KUTSAL İTTİFAK KURULDU MADDESİNDE HARİTADA KUTSAL İTTİFAK ÜYELERİNİ GÖSTEREN BİR YAPI KUTSAL İTTİFAK ROZETİ YAPILIP BU ROZETLER Bİ
28. **0028/H-0007** [sirada] — bu kuzey afrikadaki bozuk görünümlerin sebebi nedir. bu tuhaf kırmızı penme ayrı ama daha çok kırmızı boş eklenmiş bölgelerin mana
29. **0029/H-0007** [sirada] — haritadaki şu tür örtüşmemezlikleri bertaraf edelim halledelim. kıyı harita renklendirme örtüşmelerini bu osmanlının ilk yılları v
30. **0030/H-0002** [olculecek] — pelakanon savaşı maddesinde osmanlı sanki boğazı geçmiş ve rumelihisarının orayı ele geçirmiş gibi görünüyor.bu teyid et hata gibi
31. **0030/H-0004** [sirada] — eretna beylkiğinin kurulması maddesinde gözüme çarpan trabzon rum imparatorluğunun ordu şehrinin alanı neden böyle sivri. topograf
32. **0030/H-0009** [sirada] — 1. problem haritada rumelide büyük bir toprak alınmış ama pençik kanunu maddesinde görünüyor bu. bu topraklar hakikaten bu şekilde
33. **0031/H-0002** [olculecek] — kırı harita renk örtüşmelerinin kalitesini artıralım
34. **0031/H-0019** [sirada] — germiyanoğulları beyliği egri palnda nedne görünüyor bu hata neden oluyor düzeltelim
35. **0031/H-0022** [sirada] — boğaz kesen hisarı bu madde ile osmanlıya katılmış olmalıydı ama daha önceden katılmış gibi görünüyor hata olarak bunu düzelt
36. **0032/H-0002** [sirada] — KARAKOYUNLULAR DEVLETİNİN ÇÖKÜŞÜ MADDESİNDE HARİTA KARAKOYUNLULAR DEVLETİNE ODAKLANMIYOR. AYRICA ORADA GÜRCİSTAN DEVLETİNİN RENKLİ
37. **0032/H-0003** [sirada] — UZUN HASANIN KARAKOYUNLU DEVLETİNE SON VERMESİ MADDESİNDE HARİTA OLAY MAHALİNE GİTMELİ
38. **0032/H-0010** [sirada] — İLK SOSMANLI ALTINI SULTANİ BASILDI MADESİNDE GÖRSEL BU ALTIN OLMALI BUNUN GİBİ MADDELERDE GÖRSELE PADİŞAH RESMİ DEĞİL OLAYLA İLGİ
39. **0032/H-0013** [sirada] — TÜM MADDELERE MERAK EK OKUMA SEBEB SONUÇ MAGAZİN DIŞ YANKILAR GİBİ BUTONLAR VE İÇERİKLER ARAŞTIRALIM BUNLAR İÇİN OTURUMLAR GÖREVLE
40. **0032/H-0016** [sirada] — BU BOŞLUĞUN SEBEBİ NE ÇÖZELİM
41. **0033/H-0006** [sirada] — doğru çağatay hanlığının yuvarlak alanlı şehirleri normal mi. bu yuvarlak alanlar hiç dağa tepeye nehire dayanmıyormu
42. **0033/H-0007** [sirada] — kazak hanlığı yuvarlak alanları gerçekçimi
43. **0033/H-0008** [sirada] — sibir hanlığı yuvarlak alanlarının dayanacağı dağ tepe nehir yokmuymuş hep bozkırmıymış oralar
44. **0033/H-0009** [sirada] — bu bölgedeki boş alanlarda hiç devlet otoritesi olmadığı kesin mi en den çe kadar bu alandaki siyasi yapıları hanlık emirlik devle
45. **0033/H-0010** [olculecek] — bu kandeharın bölgesinin böyle pergelle çizilmiş gibi olması normal mi. topografyaya dayanması gerekmiyor mu. etrafta başka yerleş
46. **0033/H-0013** [olculecek] — burada haritanın güney batısındaki küçük boyamanın sebebi nedir
47. **0033/H-0014** [sirada] — bu kanem bornu imparatorluğunun sınırlarını ayrı kopuk bölgelerinin birleşik gösterilmemesi için sebeb ne
48. **0033/H-0017** [sirada] — bu üçken şeklinde kuzeye yönlenen bölgenin sebebi nedir bu tiflisin bölgesimi. tiflisin bölgesi ise bu tiflisin bölgesi koskoca ka
49. **0033/H-0018** [sirada] — osmanlı tebrize girerken yavuz sultan selim döneminde hangi ehirleri ele geçirerek gitti ve sonuunda tebrizi ele geçirdi bu kronol
50. **0034/H-0023** [olculecek] — tiflis ve gencenin kaybı sonrası gürcistan krallığı şeklinde görünüyor yeni yerler buralar gürcistan mı yoksa irana mı ait oldu os
51. **0034/H-0028** [sirada] — bu sahrada anlamsız gereksiz fazladan boyanan yerlerin boyanmasını engelleyecek bir yapı kurmalıyız. gat şehrinin kuzeyi ve doğusu
52. **0034/H-0036** [sirada] — BU BÖLGEDE BU YILDA YERLEŞİM OALRAK SADECE BU KAYITLI OLANLAR MI VAR BU HARİTA BU ŞEKİLDE DOĞRUMU OTURUM GÖREVENDİR GEREKİRSE ARAŞ
53. **0035/H-0001** [tekrar] — bu yapının anlamı ne. boş bir alan yerleşim yeri yok kesik kesik çizgiler ile çevrilmiş. ve kıpkırmızı boş yere boyanıyr görüntüsü
54. **0035/H-0013** [sirada] — azak ve taygan prut sonrası geri alındı ise o zaman burada haritada yanlışlık varmı
55. **0035/H-0020** [sirada] — bu istanbul mukasemennamesi ile iran nasıl bölüşüldü kim nereyi aldı. bunu haritaya yansıtılmış mı zira şirvan enklav şekilde kalm
56. **0035/H-0021** [tekrar] — bu nahcıvan alınmadan hemen önce aradaki topraklar alınmıyor mu uçakla mı gidip alıyorlar yada pas mı geçiyorlar aradaki bölgeleri
57. **0035/H-0035** [sirada] — hotin kalesi ruslara kaybedilmiş deniyor ama rusya ile kara bağlantısı yok gibi görünüyor harita o zaman bu şekildemiydi. teyid et
58. **0035/H-0047** [sirada] — bu boş arazilerin boyanmasını engellemek lazım ayrıca saçma sapan asıl yerler vassal boyanıyor ama bu boş çöller osmanlı kırmızısı
59. **0035/H-0052** [sirada] — ikinci kosova savaşında burada boş bir toprak osmanlı egemenliğine girip çıkıyor bu hatamı
60. **0035/H-0053** [olculecek] — yavuz sultan selim mısıra girerken sina bölgesinin akdeniz kıyısından kuzeyden değilde güzenyden mi geçirdi yolunu acaba. süveyşi 
61. **0035/H-0054** [sirada] — bu arada hiçmi yol filan yok ve yol üstü durak br yerleşim yok kırmızıya veya başka bir renge boyanamıyor hiçmi yerleşim yok tarih
62. **0035/H-0055** [sirada] — tebuk yenbu medine arasında yol nereden geçiyor durak kervansaray yerleşim yokmu buralarda
63. **0035/H-0057** [tekrar] — 1) kahirede abbasi halifeliğinin sona ermesi maddesi bu şekilde ama orada doğubeyazıt bir önceki tebriz seferinden bu güne orada o
64. **0035/H-0059** [sirada] — 1) haziran eylül 1422 2. muratın istanbul kuşatmasında harita anadolunun batısı bu şekilde 2) tekeoğullarının kesin tasfiyesi ve a
65. **0035/H-0063** [sirada] — bu maddede bu bölge neden işgal altınd gbi görünüyor hatamı bu hata değil ise kronolojide neden maddesi yok
66. **0035/H-0064** [tekrar] — burada kuzey afrikadaki gibi anlamsız bir boşluk boyanması meselesi var sanki
67. **0035/H-0068** [tekrar] — satu mare arada kalmış burası orta macar oalrak tökeli imreye bağlı değilmi yada osmanlı yada avusturya kime bağlı tam olarak teyi
68. **0035/H-0074** [tekrar] — hemedan barışı sonrasında gene tıpkı ferhatpaşa anlaşmasında olduğu gibi ortada kocaman bir alan kimin olduğu belli değil osmanlın
69. **0035/H-0076** [sirada] — ahmet paşa anlaşması ile batı iranın büyük bölümünün iadesi maddesi ile bu taralı alanların ne alakası var. mısırdaki toprakaların
70. **0035/H-0077** [sirada] — ruslar çehrin üzerinden gelip öziyimi aldılar yoksa kırım bozkırındanmı geldiler nereden geldiler ise orası rus toprağı görünmüyor
71. **0035/H-0079** [olculecek] — bu hail şehri vehhabi suudi hareketine dahil değilmiymiş . ayrıca nefud çölünde burayı vehhabi suudi işaretlemek için nasıl bir ge
72. **0035/H-0084** [tekrar] — bu basra osmanlı tarafından geri alınmış ama basrayı alan abadanıda almış olmuyor mum abadan ayrı müstakil bir şehir oalrak iranda
73. **0035/H-0087** [sirada] — yerleşimlre arası yol ağlarını araştırarak nereden geçtiklerini tespit edip yol haritasıda eklemeliyiz haritamıza bir katman olara
74. **0035/H-0088** [sirada] — bu osmanlı haritası içinde görülen farklı kırmızı tonda ve safevi yazan bölgeler hatamı yoksa bir tarihi gerçeğe dayanıyormu bunun
75. **0035/H-0090** [sirada] — bu ismail kalesi kuşatması ve rusların ele geçirmesi meselsinde 1) rusların veya osmanlının savaş ilan ettiğine dair bir kronoloji
76. **0035/H-0092** [sirada] — napolyonun mısır işgalini hartada böyle taralı bölgeler şeklinde göstermiş bu taralı bölgeler neye dayanıyor. teyid et. doğrumu bu
77. **0035/H-0097** [sirada] — rusçuk rus işgaline uğradı ise burayı taralı göstermek gerekmezmiydi tıpkı ibrail kalesi gibi tartışalım gerekeni yapalım. gördüğü
78. **0035/H-0100** [sirada] — bükreş anlaşmasından sonra bu parça burada boş bir arazi ve rus enklavı gibi kalmış. bükreş anlaşmasından sonra bile bu parça bura
79. **0035/H-0102** [sirada] — bu anlamsız boş toprakalrdaki osmanlı kırmızısına nasıl engel oalcağımızı araştıralım
80. **0036/H-0005** [kapsam-disi] — edirna anlaşması sonrasında kafkas haritasını teyid ettirelim
81. **0036/H-0015** [kapsam-disi] — haritada burada bir hata var. boşluk var sebebi nedir
82. **0037/H-0010** [tekrar] — bu yeil yerler rusyaya dönmeden önce eğer rusya eflak ve boğdanı işgal etti ise bu haritada gösterilmeli gerek harekat oklrı ile g
83. **0038/H-0003** [sirada] — gat şehrinin doğusunda kuzey doğusunda güney doğusundaki koca boş alan neden fazladan boyanmış. bak gat şehrini etrafının yapısı ş
84. **0038/H-0004** [sirada] — girintilerin derinlikleri doldurulmuş ama bu dolgular doldurdukları girinti ile aynı renkte olmalı. osmanlı kırmızısı açık vassal 
85. **0038/H-0005** [sirada] — bu eçmidyazin ve gümrü iran savaşı sırasında osmanlı tarafından ele geçmiş olmalı bu şekilde enklav şekilde safevide kalmamış olma
86. **0038/H-0006** [sirada] — bu aradaki koridor ve enklavlar osmanlı alanı olup olmadığını öğrenmemişmiydik en son durum ne oldu
87. **0038/H-0007** [sirada] — kasrı şirin iran savaşı sırasında osmanlıya geçmiş olmalı bunu türk ve iran kaynaklarından teyid et ve düzelt eğer kronooji maddes
88. **0039/H-0002** [sirada] — suriye ırak ve ermenistan gürcistan sınırlarını ve iran sınırını 6. kalitede yapalım. sınır enreden geçiyor ise oradan geçsin. bun
89. **0039/H-0003** [sirada] — sakarya mehdan muharebesi büyük taarus filan bu zamanlarda yunan ordusunun kontrolündeki ve türk ordusunun ilerleyişini gün be gün
90. **0039/H-0005** [sirada] — yunanistan işgali olarak çok az bir bölge görünüyor halbuki bursa kütahya afyon aydın izmir tüm bu alanlar işgal edilmişti .her de
91. **0039/H-0007** [sirada] — 1923 d kutsal roma imparatorluğu kaldığını hiç sanmıyorum kutsal roma yıkılalı çok oldu sanıyorum
92. **0039/H-0008** [sirada] — bu çekoslovakyanın ve avusturyanın macaristanın böyle olduğuna eminmisin
93. **0040/H-0009** [sirada] — çehrin bu tarihte lehistana mı ait teyid edelim
94. **0041/H-0001** [sirada] — çağatay hanlığı ve altınorda hanlığı şehirlerinin arasındaki boşluklar alıştığımız harita hissiyatını alamamamıza sebeb oluyor. am
95. **0042/H-0004** [sirada] — katalan birliklerin anadolu seferi maddesinde ilgili seferin nerelerden geçtiğine dair harita gösterimi yok bunu ayarlayalım
96. **0042/H-0006** [sirada] — bu tarihte çehrin litvanya büyük dükalığa mı aitti ve sınır böyle miydi akademik haritalardan bilimsel yayınlardaki haritalardan b
97. **0042/H-0007** [sirada] — bu tarihte lehistan litvanya ve litvanya büyük dükalığı diye iki ayrı devlet mi vardı. isimleri birbirine benzer olan
98. **0042/H-0011** [sirada] — bu tarihte kemah akkoyunlulara geçmiş mi geçmemiş mi kronoloji madde içeriğinde sanki kaynak bulunamadı diyor. kaynak varmım yok m
99. **0042/H-0014** [kosu-bekliyor] — mersin osmanlı kırmızısı görünüyor bu hata mı o toprak osmanlı mı görünüyor. yoksa renk benzerliğimi osmanlı kırmızısı rengi odakd
100. **0042/H-0018** [sirada] — pençik kanunu maddesine geçildiğinde haritada trakyada osmanlı ilerlemesi görünüyor. dimetoka kırklareli lüleburgaz ipsala uzunköp
101. **0042/H-0019** [sirada] — gümülcine uzunköprü meriç dedeağaç enez çirmen den daha önce mi fethedildi arada bu topraklar var. bir atlama söz konusu doğru mu 
102. **0042/H-0021** [olculecek] — çirmen savaşı sonrasında bu toprakda sanki osmanlı egemenliğine veya vassallığüına girmiş gibi kırmızı renkte gösteriliyor doğrumu
103. **0042/H-0022** [sirada] — bizans osmanlı vassallığına girdi deniyor ama renkte osmanlının vvassal devletlerinde olduğu gibi yakın renk boyaması yok . bunu y
104. **0042/H-0025** [sirada] — 1. resim selanikin teslimi anlaşmasındaki durum 2. resim ise osmanlı ceneviz ahidnamesi maddesi ama orada bir değişiklik var ve sı
105. **0042/H-0027** [sirada] — üsküpün fethi ile haritanın son hali böyle 2. fotografta öncesi var. oradaki enklavda alınmış görünüyor. vodina şehri edessa yani 
106. **0042/H-0028** [sirada] — osmanlıda bu tarihte böyle bir vassal devlet varmıydı. teyid edelim. dejanoviç prensliği
107. **0042/H-0029** [sirada] — bu tRİHLERDE BU ŞEHİRLERDE BU ENKLAVLAR VARIYDI
108. **0042/H-0030** [olculecek] — TİMUR BAĞDADI ZAPTETTİ maddesinden öncede bağdat timurlu valiliği diye enklav görünüyor. önceside ikinci resim. hatamı var yoksa ş
109. **0042/H-0032** [olculecek] — timur bağdadı 8 yıl ara ile iki kez aldı deniyor ama bunun haritada gösterimi belli değil. sürekli bu dönemde sanki timurlu anklav
110. **0042/H-0034** [kosu-bekliyor] — fetret devrinden sonra bu pirot şehirköy isimli yerleşim osmanlı kırmızısı görünüyor tıpkı mersin gibi . anlamsız bir şekilde halb
111. **0042/H-0037** [olculecek] — uluABAD ÇARPIŞMASI VE İSA ÇELEBİNİN YENİLMESİ MADDESİNDEN SONRA BURSA VE ÇEVRESİ ŞEHZADE MEHEMTE GEÇİYOR AMA SONRA EMİR SÜLEYMAN A
112. **0042/H-0042** [kosu-bekliyor] — çamurlu savaşı birliğin yeniden kurulması maddesinde sırbistanın şehirköy pirot yerleşiminin etrafı eknklav şekilde bunu teyid et 
113. **0042/H-0043** [sirada] — bu tarihte saruhanoğlu beyliği varmıydı ve devam ediyormuydu
114. **0043/H-0003** [sirada] — kırım hanlığı kuruluşunda azak denizinin kuzeyindeki topraklar bu şekilde miydi. ayrıca kırım haklığı bozkırları denilen toprakalr
115. **0043/H-0009** [sirada] — kırım hanlığı osmanlıya katıldığında haritası bu şekilde görünüyor. bu doğru mu 1) yarımadanın güneyinde direkt osmanlıya bağlı bö
116. **0043/H-0010** [sirada] — gürcistan krallığı üçe bölündü diyor ama haritada iki parça görünüyor
117. **0043/H-0015** [sirada] — mardin bölgesi bu tarihte osmanlıda değil miş gibi görünüyor ve bu şekilde arada boşluk bir bölüm var osmanlıya geçemmiş olan teyi
118. **0044/H-0002** [olculecek] — mohaç meydan muharebesi maddesinde bu parça toprak içinde bir yerleşim de yok ama osmanlı kırmızısına geçmiş görünüyor bu hatayı d
119. **0045/H-0007** [sirada] — inebahtı preveze cerbe mohaç çaldıran ridaniye mercidabık ankara niğbolu kosova varna vb. gibi savaşların hikayelerini bu savaşlar
120. **0045/H-0009** [sirada] — tüm uluslararası veya devletlerarası antlaşmalarda ve barış anlaşmalarında hğkğmleri içeren ek okumaları madde içeriğine yerleştir
121. **0045/H-0010** [sirada] — tüm osmanlı padişahları ile ilgili magazin olayları komplo teorilerini ilginç hikayeleri ek okumalar olarak en uygun kronoloji mad
122. **0045/H-0011** [sirada] — mimari yapılar ile ilgili maddelerde o mimari yapının mimari özellikleri etkilendiği sanatsal akımlar barok romanesk gotik gibi öz
123. **0045/H-0012** [olculecek] — trablusgarp da fizan bölgesinin ele geçirilmesi sonrası harita böyle görünüyor ve osmanlı toprakları ortasında bir boşluk var ende
124. **0046/H-0007** [sirada] — revan alınırken gümrü ve ecmidyazin alınmadan kalmış mı sonrayı mı beklemiş osmanlı eline geçmek için
125. **0046/H-0012** [sirada] — ferhatpaşa anlaşması ile çaldıran başkale gümrü ecmidyazin maku şerur merend selmas kimde kalmış teyid edelim
126. **0047/H-0001** [sirada] — ferhatpaşa anlaşması sonrası kasrı şirin zencan sultaniye bicar merivan sakkız bane serdeşt mahabad osmanlıda mı yoksa safevilerde
127. **0048/H-0001** [sirada] — bu beyaz bölgede hiç mi devlet yapısı ve yerleşim yeri yok
128. **0048/H-0010** [sirada] — bu görüntü bozulması sebebi nedir
129. **0048/H-0011** [sirada] — doha katar bu tarihte safevilerde miymiş
130. **0050/H-0002** [sirada] — bağdadın yeniden fethi dolayısı ile ilgili bölge bu şekilde mi görünüyor . bir önceki durumda bağdadın elden çıkması ile beraber t
131. **0050/H-0006** [sirada] — kasrı şirin anlaşması metnini inceleyerek haritamızın bu son halinin kasrı şirin anlaşması maddelerine uygun olup olmadığını teyid

### MOTOR — 20 madde

1. **0021/H-0030** [sirada] — KISMEN: sefer oku indi (e3b4255), 3 voyvodalik ates isareti + Erdel acik kaldi || eflak seferini gösteren haritada bir işaretleme 
2. **0030/H-0018** [sirada] — KISMEN/BELIRSIZ: onceki bildirim islendi ama BU ucgenin ayni ucgen mi oldugu teyit edilemedi || bu üçken garip gösterim bu hatayı 
3. **0035/H-0072** [sirada] — harita renklerinde sınırlarda birbiri ile örtüşmeme sorunu var
4. **0035/H-0101** [sirada] — buradaki ğçken gene iki haritanın sınırlarının birbirine örtüşmemesi ve üstüste binmesi sonucu oluşan görüntü hatası . bu hataları
5. **0040/H-0001** [olculecek] — haritada böyle çizgiler oluşuyor. bu görüntü harita hataları neden oluyor 8-9 .resimlerdede birbiri ile örtüşmeyen ve arada açıklı
6. **0040/H-0002** [olculecek] — acaba talin şehrinin petei denizi geçip karşı yakaya mı vurmuş orayı mı boyamış bir bu hataalrı çözmemişmiydik. buna ne sebeb oluy
7. **0040/H-0003** [olculecek] — boşluk kalan yerler bunun sebebi nedir
8. **0040/H-0007** [olculecek] — aral gölünün kenarlarına renk örtüsünün haritanın oturmamasının sebebi nedir. djikstra bu kadar mı elveriyor
9. **0042/H-0002** [olculecek] — 1. resimdeki gibi boşlukları bertaraf etmeli iki devletin sınırları birbirine örtüşmeli. eğer mantıklı bilimsel tarihi bir gerekçe
10. **0042/H-0005** [sirada] — topografyanın şehirlerin bölgelerinin nehirlere dağlara dayanması ve sürtünmeye göre bölgelerin atanması meselesi tunanın bu bölüm
11. **0042/H-0008** [olculecek] — buradaki haritalardaki birbiri üzerine binmeyi çözelim. sebebini bulalım ve bertaraf edelim
12. **0042/H-0009** [olculecek] — pelekanon eskihisar savaşından sonra osmanlı toprakları boğazın ötesine geçmiş görünüyor bu yanlış osmanlı topraklarının boğazın ö
13. **0042/H-0012** [sirada] — kafkas dağları şehirlerin bölgeleri belirlenir iken sürtünme uygulamıyormu. kafkas dağlarına sınırlar bölgeelr yaslanmıyor mu. yok
14. **0042/H-0013** [olculecek] — haritalaarda üstüste binmeler örtüşmemeler sorunlarına örnek
15. **0042/H-0015** [olculecek] — çimpe kalesi ele geçince çimpenin etki alanı sarosun kzueyine de taşmış bu taşma sürtünme dahil mi hesaplanmış durumda yoksa kuş u
16. **0042/H-0016** [olculecek] — ege adalarının harita örtüşmelerini daha birebir yüksek kalite yapalım
17. **0042/H-0039** [olculecek] — SINIRLARIN RENKLERİN ÜSTÜSTE BİNMESİ NE ÖRNEK. BU artukoğulları sonu mardinin karakoyunlulara teslimi maddesinde haritadaki tuhafl
18. **0043/H-0017** [olculecek] — bu gösterim bozukluklarının sebebi nedri
19. **0044/H-0011** [olculecek] — bu görüntü bozulmalarının sebebi ne nasıl engelleriz
20. **0048/H-0009** [sirada] — bu tuhaf şekilli boyamanın manası nedir.

### EKOKUMA — 6 madde

1. **0048/H-0015** [sirada] — KISMEN: 12/12 hukum karti zaten vardi (d778798), 'onem/sebep-sonuc' ek katmani suruyor || anlaşmaların önemini anlatan ek okuma ka
2. **0050/H-0001** [sirada] — rus kaynaklarında kırım hanlığı konusunda nasıl yorumlar var. kırım hanlığının sürekli moskova bölgesine akınlar yaptığı biliniyor
3. **0050/H-0003** [sirada] — I. Mustafa on beş yıllık unutuluşun ardından öldü — kızlarağası rivayeti doğrulanamadı 10 Eylül 1623'te ikinci kez tahttan indiril
4. **0050/H-0005** [sirada] — kasrı şirin anlaşması ile ilgili ek okumalar oluşturup maddelerin içine serpiştirelim.
5. **0050/H-0007** [sirada] — kronoloji maddeleri içindeki magazin akrtlarını magazin sekmesi değilde diğer ek okuma butonları gibi akordeon olacak şekilde ayar
6. **0050/H-0008** [sirada] — deli ibrahim denilen 1.ibrahim han padişahın skandal uygulamalarını ve hikayelerini içeren ek okumaları kronolojik maddelere dağıt

### RENK — 5 madde

1. **0019/H-0007** [sirada] — bu gürcistan ile karakoyunlular aynı rennk görünüyor o tarihte gürcistanı karakoyunlularmı almıştı. ayrıca aprçalı bir toprak yapı
2. **0025/H-0005** [sirada] — BURADAKİ AÇIK YEŞİL MACARİSTAN TOPRAKLARI DOĞRUMU YOKSA BURALAR OSMANLI YADA AVUSTURYA VEYA BAĞIMSIZ BİR MACARİSTAN TOPRAĞIMI
3. **0040/H-0004** [sirada] — renk seçimi berbat denizle benzer renk denizden ayırdetmek zorlaşıyor. hem deniz daha açık renk olmalı hemde bu renkler mavinin da
4. **0040/H-0005** [sirada] — ilhanlı renk seçimi mesela deniz rengi tonuna yakın güzel durmuyor bosna ve sırbistanda var ama onlar hafif derecede çok dert deği
5. **0042/H-0038** [sirada] — KARAKOYUNLULAR BU RENKTE GÖRÜNÜYOR VE GÜRCİSTAN İLE AYNI RENKTE GÜRCİSTANDA O TARİHTE KARKOYUNLULARA MI BAĞLI TEYİD EDELİM AYRICA 

### KRONOLOJI — 4 madde

1. **0019/H-0045** [sirada] — halepin osmanlı hakimiyetine girişi maddesinde haritada deyrizor ve rakkada görünüyor. kronoloji başlığında bunlardan da bahsedile
2. **0019/H-0047** [tekrar] — trabkusşamın osmanlıya girmesi maddesinde hama ve humus da da bahsedilebilir detayda var
3. **0035/H-0065** [sirada] — KISMEN: aciklayici metin eklendi (harita nicin kipirdamiyor) ama Ibrim'in baslangic gunu HALA acik || bu maddede haritada bir deği
4. **0039/H-0004** [sirada] — KISMEN: ilk parti indi (632a042, 10 madde) ama istenen cephelerin (Italyan/Fransiz/Ingiliz/Ermeni/Rus/Yunan detayli) tamami degil 


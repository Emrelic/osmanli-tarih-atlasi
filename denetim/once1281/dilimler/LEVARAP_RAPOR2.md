# LEVARAP rapor 2 (Tur 2: web doğrulama + tamamlama)

Web erişimi vardı (WebFetch/WebSearch çalıştı). Kaynak durumu: TDV sayfaları (slug doğru verilince) açılıyor; Britannica 403; encyclopedia.com yalnız doğru slug'da (Ammon, Arpad, Kedar okundu); Vikipedi aracı olarak okundu, dipnotlardaki akademik eserlere AÇILMADI.

## 1. Sayılar
| Dilim | Kayıt | okundu | kismen-okundu | taslak |
|---|---|---|---|---|
| A | 0 | 0 | 0 | 0 |
| B | 25 | 0 | 23 | 2 (kades, kenan-sehir-devletleri) |
| C | 10 | 0 | 10 | 0 |
| D | 8 | 2 (tulunoglu, esved-ansi-yemen) | 6 | 0 |
| E | 17 | 0 | 17 | 0 |
| Toplam | 60 | 2 | 56 | 2 |

Eklenen 10: antakya-dukaligi, filaretos-prensligi, yemame-museylime, esved-ansi-yemen, abna-yemen, hospitaller-krak, hospitaller-margat, tevton-montfort, culenda-umman, tryphon-devleti (10 kayıt; culenda D, tryphon C). Elenen 1: dekapolis (`LEVARAP_ELENEN.json`; Vikipedi "probably never an official political union"). Toplam kayıt 51 - 1 + 10 = 60.

"kismen-okundu" anlamı: tarihler Vikipedi (aracı) maddesinden ve/veya TDV/Encyclopedia.com'dan okundu; maddenin dayandığı akademik eserler (Bryce, Hawkins, Robin, Rohmer vb.) `kaynak`ta künyesiyle anıldı ama AÇILMADI. Brif "Vikipedi tek dayanak olamaz" uyarınca bu kayıtlar "okundu" yapılmadı. Yalnız TDV'den okunanlar (Tolunoğulları, Esved el-Ansî) "okundu".

Başlıca düzeltilen tarihler (eski taslak -> yeni): amurru t -1174 -> -1199 (c. MÖ 1200); nagar -2599..-2199 -> -2599..-2299; birlesik-israil f -1029 -> -1046; bit-adini f -0899 -> -0999; ammon f -1199 -> -1099, t -0579 -> -0581; moab t -0579 -> -0581; edom f -1199 -> -1299, t -0549 -> -0552; kedar f -0799 -> -0737 (ilk anılış); lihyan f -0599 -> -0499; gerrha -0399..0100 -> -0649..0299; arvad t -0331 -> -0258; iturya t 0092 -> 0049; emesa -0089..0078 -> -0063..0078; habes-yemen aynı; cerrahi f 0980/t 1029 -> 0979/1071; lulu-halep f 1004 -> 1002; sur-kadilari 1063..1089 teyit (özet düzeyi); cebele t 1109-07-23 (gün); eyyubi-sam gün hassasiyeti yıla indirildi; eyyubi-humus f 1174 -> 1179; eyyubi-kerek f 1227 -> 1229, t 1263 -> 1249 (TDV); sayda f 1110-12; yafa f 1151 -> 1100.

Eşleme: 60 kaydın tamamı mevcut_once1281.tsv'ye karşı yeniden bakıldı. var-kisa: byblos, tire, sidon, arvad (fenike-sehirleri), hamat (yeni-hitit), habes-yemen (himyar), eyyubi-sam (eyyubi); diğerleri eksik.

## 2. Ulaşılamayan / kanıtlanamayan
- Okunmadı (taslak kaldı): kades, kenan-sehir-devletleri. Kades'te bağımsız krallık süresi ve Kenan toplu kaydı polity olarak zayıf (Amarna kral listesi).
- Akademik tam metin açılamadı: Britannica (403), Encyclopaedia of Islam, Der Neue Pauly, CAH, Pleiades, DergiPark (denenmedi/yetmedi). Sur ve Cebele kadıları için yalnız Toyo Bunko/J-STAGE arama özeti görüldü, tam metin açılmadı.
- Eksikler ve nedenleri: Abilene başlangıcı (yalnız ikincil özetler), Mekke fethi günü (TDV'de değil, okunmadı), Kerek'in 1249 sonrası akıbeti, Nizari Suriye'nin kuruluş yılı (Kadmus/Mısyâf 1132-1141 teyitsiz; alternatif 1172), Cülendâ f (kaynak yok -> null).
- Yazılmayan adaylar ve gerekçe: Saba/Himyar/Hadramut iç hanedanları (Mükarrib dönemi, Malik dönemi, Zû-Reydân, Saba ikinci krallığı MS ~100-275): Vikipedi'de bunlar 'Saba' ve 'Himyar' künyesinin içinde evreler; ayrı polity kaydı çıkaracak akademik kaynak (Robin 2015, Nebes 2023) açılamadığı için yazılmadı. Not: Saba MS ~100'de Himyar'dan ayrılıp 275'te Himyar tarafından kesin fethedildi; Himyar MÖ ~110'da Kataban'dan ayrıldı (Vikipedi, Korotayev'e dayanıyor). Atlas saba/himyar künyeleri bu açıdan gözden geçirilmeli.
- Yazılmayan adaylar: Hospitaller/Tevton dışı Haçlı lordlukları (Kayseriye, Hayfa), Ptolemaios Koile-Suriye (eyalet), Dimaşk Aretas III (nabatiye içinde), Ebu'l-Verd (okunmadı), Hurmuz/Kays (iran ajanı), Mahra (okunmadı), Halep/Dimaşk Selçuklu kolları (suriye-selcuklu ile bir mi sorusu açık).

## 3. İstekler
- Mükerrer id'ler (ic_not'ta "mükerrer riski"): nagar, hana-terqa (mezopotamya), tulunoglu (misir-sudan), hamat, patina-unqi (yeni-hitit), kades, mukis-alalah, nuhasse (Hitit/anadolu). Birleştirmeyi ana oturum yapsın; benim tarafımdaki tarihler Wikipedia-aracılı.
- Emre kararları: (a) fenike-sehirleri'ni ayır (byblos/tire/sidon/arvad) mı? (b) Haçlı alt lordlukları ve Hospitaller/Tevton kale-toprakları (oltre-urdun, celile, yafa, sayda, beyrut, krak, margat, montfort) atlasa künye olsun mu? Bunlar kudus-kralligi/trablus-kontlugu/antakya-prinkipsligi içinde alt birim. (c) magan (bölge adı), abna-yemen (TDV: sosyal sınıf), antakya-dukaligi (Bizans eyaleti), tryphon-devleti (Selevkos içi rakip kral), tenuh (TDV: ittifak) polity sayılsın mı? ELENEN adayları.
- hamdani-halep künyesi (t=1004) Lü'lü' kaydıyla (f=1002) örtüşüyor; künye 1002'de bitirilip 1002-1015 Lü'lü', 1015-1024 Fâtımî doğrudan olarak doldurulabilir (Mansûr devrildi 1015/16, Mirdâsîler 1024). Öneri: Lü'lü'iler künyeye alınsın.
- Eyyûbî sülâleleri: atlas `eyyubi` (1171-1250) Kahire; Dımaşk kolu eyyubi-sam olarak yeni. Kerek için 1249 sonrası kaynak gerekli.
- Üst üste binme: beni-ammar-trablussam (1070-1109-07-23) ile cebele-kadilari; hamdani-yemen ve Yufiri sınırları bu bölgeyi etkilemedi.
- Tur 3 için öneri: Akademik tam metin (DergiPark, JSTOR özeti, Brill EI3, Pleiades) elimizde açılabilen bir erişimle "kismen-okundu" kayıtların yarısı "okundu" olur. Öncelik: byblos/tire/sidon/arvad (Elayi), ammon/moab/edom (Routledge, MacDonald, Tyson), lihyan (Rohmer-Charloux 2015), awsan (Robin 2015).

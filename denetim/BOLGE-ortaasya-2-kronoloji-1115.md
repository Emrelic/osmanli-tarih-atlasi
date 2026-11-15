# BOLGE-ortaasya-2-kronoloji-1115 — Orta Asya kronoloji teyidi (UMIT, 15 Kasım 2026)

## Kapsam ve dürüst sınır (önce oku)
- Evren: `taraflar:` (gömülü ∪ `data/olay_taraf.js`) içinde 83 Orta Asya künyesinden birini adlandıran madde = **881 madde** (635'i 1281 öncesi, 246'i 1281 ve sonrası). 18734 maddelik kronoloji evreninden node `vm` ile okundu.
- **Bu oturumda 881 maddenin her birine bağımsız ikinci kaynak bulunmadı.** Yapılan: (a) her maddenin `kaynak:` alanı sınıflandırıldı; (b) TDV'den doğrudan OKUNAN maddeler: `seybani-han`, `seybaniler`, `hive-hanligi` (islamansiklopedisi.org.tr, 15 Kasım 2026, WebFetch özeti); (c) Rusça/İngilizce arama özetleri (Wikipedia-yansıları, bigenc.ru, booksite.ru, Rus Başkanlık Kütüphanesi) yalnız ipucu sayıldı — **okunmadı** olarak işaretli; (d) iç tutarlılık ve takvim (Jülyen/Gregoryen) denetimi.
- İki PDF (izvestiahist.isu.ru id=421 ve bulletin-histsocpolit.kaznpu.kz 1914/847) çekildi, metin çıkarılamadı (sıkıştırılmış PDF akışı) → **okunmadı**, hakem kararında sayılmadı.
- Hakem kararı kuralı (CLAUDE.md): TDV'ye karşı en az iki bağımsız **okunmuş** akademik kaynak yoksa mevcut kalır. Bu yüzden aşağıdaki çelişkilerin hiçbiri veriye yazılmadı; hepsi karar bekleyen listededir.

## Kaynak sınıfı dağılımı (madde `kaynak:` alanından)
| sınıf | 1281 öncesi | 1281 ve sonrası |
|---|---|---|
| TDV adıyla | 541 | 180 |
| diğer akademik (Çince/İranica/Britannica/Majumdar/Rachewiltz/Mackerras…) | 89 | 33 |
| **atlas-içi kaynak** (kaynak alanı atlas dosyası/künyesi; "atlas referans değildir") | 5 | 7 |
| **jenerik** ("standart akademik kaynak (Cambridge History of Central Asia)" — cilt/sayfa yok) | 0 | 26 |
| kaynaksız | 0 | 0 |
Gün hassasiyeti: 295 madde gün taşıyor, 586 madde `-01-01`/`-01-02` (yıl/ay hassasiyeti).

### Kaynak sorunu olan madde listesi (atlas-içi + jenerik; kaynakları adlı hâle getirme işi)
| sınıf | t | taraf | dosya:idx | madde |
|---|---|---|---|---|
| atlas-ici | -3819-01-01 | anau-ia-kultur | olaylar_arkeoloji_gecis:3 | Anau: sahip dönemi sona erer — Anau IA (Namazga öncesi/Meana |
| atlas-ici | 0562-01-01 | gokturk-1,eftalit | kronoloji_sinir_dogu_500_1281:90 | Göktürkler Semerkant’ı Eftalit nüfuzundan aldı |
| atlas-ici | 0582-01-01 | dogu-gokturk,gokturk-1 | kronoloji_sinir_dogu_500_1281:209 | Göktürk kağanlığı ikiye bölündü; Ötüken Doğu Göktürk’te kald |
| atlas-ici | 0646-10-29 | tang,xueyantuo | kronoloji_sinir_dogu_500_1281:211 | Xueyantuo dağıldı; Tiele ülkeleri Tang valiliklerine bağland |
| atlas-ici | 0682-01-01 | dogu-gokturk-2,tang | kronoloji_sinir_dogu_500_1281:215 | Kutluğ İlteriş Ötüken’de II. Göktürk Kağanlığı’nı kurdu |
| atlas-ici | 1347-01-02 | mogulistan | kronoloji_orta_asya:144 | Tuğluk Timur Çağatay ulusunun doğu kanadında han ilân edildi |
| atlas-ici | 1510-12-02 | buhara | kronoloji_ozbek:3 | Şeybânî Han'ın Merv'de yenilip öldürülmesi |
| atlas-ici | 1514-01-02 | mogulistan,yarkent-hanligi | kronoloji_orta_asya:148 | Sultan Said Han Yarkent (Sa'îdiyye) Hanlığı'nı kurdu |
| jenerik | 1611-01-01 | buhara | kronoloji_ozbek:21 | İmam Kulı Han döneminde hanlık zirveye ulaştı |
| atlas-ici | 1634-01-02 | cungar | kronoloji_orta_asya:175 | Hara Hula Cungarya'da Oyrat Hanlığı'nı yeniden canlandırdı |
| jenerik | 1636-01-01 | buhara | kronoloji_ozbek:22 | Şîrdâr Medresesi tamamlandı (Semerkant, Registan) |
| jenerik | 1660-01-01 | buhara | kronoloji_ozbek:23 | Tillâkârî Medresesi tamamlandı — Registan üçlemesi tamam |
| jenerik | 1721-01-01 | hokand | kronoloji_ozbek:57 | Şahruh Bey'in ölümü, Abdülkerim'in tahta çıkışı |
| jenerik | 1740-01-01 | buhara | kronoloji_ozbek:25 | Nâdir Şah'ın istilası — Buhara ve Hîve nominal vassal oldu |
| jenerik | 1758-01-01 | hokand | kronoloji_ozbek:58 | Erdene Bey döneminde sınırların genişlemesi |
| jenerik | 1800-01-01 | buhara | kronoloji_ozbek:27 | Şah Murad'ın ölümü, Emir Haydar'ın tahta çıkışı |
| jenerik | 1812-01-01 | hokand | kronoloji_ozbek:60 | Muhammed Ömer Han'ın Rusya ile diplomatik ilişki başlatması |
| jenerik | 1822-01-01 | hokand | kronoloji_ozbek:61 | Muhammed Ali Han'ın tahta çıkışı |
| jenerik | 1825-01-01 | hive | kronoloji_ozbek:49 | Allahkulı Han döneminde hanlığın parlak çağı |
| jenerik | 1826-01-01 | buhara | kronoloji_ozbek:28 | Nasrullah Han'ın kanlı taht kavgasıyla iktidara gelişi |
| jenerik | 1826-01-01 | hokand | kronoloji_ozbek:62 | Doğu Türkistan'a askerî destek gönderilmesi |
| jenerik | 1831-01-01 | hokand | kronoloji_ozbek:63 | Çin (Qing) ile antlaşma — Doğu Türkistan'dan çekiliş |
| jenerik | 1840-01-01 | hokand | kronoloji_ozbek:64 | Buhara'ya karşı yenilgi |
| jenerik | 1842-01-01 | buhara | kronoloji_ozbek:30 | Nasrullah Han'ın Hokand'ı geçici olarak ilhakı |
| jenerik | 1842-06-01 | hokand | kronoloji_ozbek:65 | Muhammed Ali Han'ın Buhara Emiri tarafından idamı |
| jenerik | 1842-06-24 | buhara | kronoloji_ozbek:29 | Nasrullah Han, İngiliz subayları Stoddart ve Conolly'yi idam |
| jenerik | 1860-01-01 | buhara | kronoloji_ozbek:31 | Nasrullah Han'ın ölümü, Muzafferüddin'in tahta çıkışı |
| jenerik | 1864-01-01 | hive | kronoloji_ozbek:51 | Seyyid Muhammed Rahim Bahadır Han'ın tahta çıkışı |
| jenerik | 1864-01-01 | hokand | kronoloji_ozbek:66 | Rus ilerleyişi — Evliyaata ve Çimkent'in kaybı |
| atlas-ici | 1865-06-29 | hokand | kronoloji_ozbek:67 | Taşkent'in fethi |
| atlas-ici | 1868-06-02 | buhara | kronoloji_ozbek:32 | Buhara Emirliği Rus himayesine girdi |
| jenerik | 1873-01-01 | hive | kronoloji_ozbek:53 | Osmanlı'nın Hîve'ye ittifak girişimi |
| jenerik | 1873-01-01 | hokand | kronoloji_ozbek:69 | Hokand'da büyük halk ayaklanması başladı |
| atlas-ici | 1873-08-24 | hive | kronoloji_ozbek:52 | Hîve Hanlığı Rus himayesine girdi |
| jenerik | 1885-01-01 | buhara | kronoloji_ozbek:33 | Muzafferüddin'in ölümü, Abdülahad Han'ın tahta çıkışı |
| jenerik | 1910-01-01 | buhara | kronoloji_ozbek:35 | Abdülahad Han'ın ölümü — son emir Alim Han tahta çıktı |
| jenerik | 1910-01-01 | buhara | kronoloji_ozbek:36 | Buhara ulemasının Osmanlı'ya yardım çağrısı |
| jenerik | 1920-02-02 | hive | kronoloji_ozbek:54 | Son Han Seyyid Abdullah'ın tahttan çekilmesi |

## Teyit edilen (okunan kaynakla)
| madde | atlas | kaynak | sonuç |
|---|---|---|---|
| Hive son han Seyyid Abdullah'ın tahttan çekilişi | 1920-02-02 | TDV hive-hanligi (okundu): «2 Şubat 1920» | **TEYİT**; ama atlas `kaynak:` "standart akademik kaynak (Cambridge…)" — gerçek dayanak TDV |
| Hârizm Halk Cumhuriyeti ilanı | 1920-04-26 | TDV hive-hanligi (okundu): «26 Nisan 1920» | **TEYİT** |
| Hive'nin Ruslarca ele geçirilişi | 1873-05-29 | TDV hive-hanligi (okundu): «29 Mayıs 1873» | TDV ile **aynı**; takvim şüphesi aşağıda (T1) |
| Perovsky seferi / Beş-Tumak | 1839-12-05 | TDV hive-hanligi (okundu): sefer 14 Kasım 1839, savaş 5 Aralık 1839 | TDV ile **aynı**; takvim şüphesi (T2) |
| Şeybânîlerin kuruluşu / sonu | 1500 / 1599 (yıl) | TDV seybaniler (okundu): 905/1500 · 1007/1599 | yıl **TEYİT** (gün yok) |
| Herat'ın alınışı | 1507 (yıl; künye t 1507-05-24) | TDV seybaniler/seybani-han (okundu): «913'te (1507)» | yıl TEYİT; gün KASA'nın ÇELİŞKİ-1113 notunda teyitsiz |
| Şeybânî Han'ın ölümü | 1510-12-02 | TDV seybani-han (okundu): «29 Şâban 916 (1 Aralık 1510)» | **ÇELİŞKİ** (aşağıda C1) |

## Çelişen / şüpheli maddeler (karar bekliyor; veri DEĞİŞMEDİ)
**C1 — Merv Savaşı / Şeybânî Han'ın ölümü.** Atlasta üç kayıt: `kronoloji_cok_senkron_0930.js` 1510-12-01; `olaylar_ek11.js`, `kronoloji_iran.js`, `kronoloji_ozbek.js` 1510-12-02. TDV `seybani-han` ölümü 1 Aralık 1510 verir (okundu); savaş günü TDV'de yok. İngilizce arama özetleri (Wikipedia-yansıları) 2 Aralık der — Vikipedi tek dayanak olamaz, okunmuş ikinci akademik kaynak yok → **TDV günü 1 Aralık ile atlas 2 Aralık çelişiyor, hakem kararı çıkmadı**. Çelişki `data/savas_kunye_3.js` (`kunye-merv-1510`) içinde zaten beyanlı. **Düzeltme yazılmadı**: 1510-12-02 kırılması `yerlesimler.js`'te (Merv, Herat, Nesâ, Serahs… ~60 pencere) + `yerlesimler_ortaasya2.js` + `yer_yama*.js`'te kök salmış; taşımak yasak dosyaya dokunur. Öneri: KASA koşu sonrası, ≥2 okunmuş kaynakla (Savory/Iranica «Esmāʿīl I Ṣafawī» VIII/6 s.628-636 yalnız atıf olarak görüldü, okunmadı) karar versin.
**T1 — Hive 1873 (Jülyen/Gregoryen).** TDV «29 Mayıs 1873» der (takvim belirtmez); aynı olayı İngilizce özet «10 Haziran 1873» (=Jülyen 29 Mayıs +12) olarak da veriyor; Rusça AiF özeti 29 Mayıs. Hive'nin düşüşü Rus kaynaklarında Jülyen takvimle yazılıyor; atlas kuralı (1582-10-15 sonrası Gregoryen, geç geçen yerlerde çevir + iki günü `ic_not`ta) uygulanırsa **1873-06-10**. Aynı künyenin Gendemiyan antlaşması maddesi 1873-08-24 (Rus Başkanlık Kütüphanesi özeti 24 Ağustos 1873 = Jülyen 12 Ağustos) Gregoryen yazılmış → **aynı künyede iki takvim karışık**. TDV gövdesinde 24 Ağustos okunamadı (özet «anılmıyor») ve madde `kaynak:`ı "TDV hive-hanligi" diyor → kaynak/gün uyuşmazlığı. Kırılma yok (Hîve penceresi 1873'te değişmez) → D2 etkisi yok. Karar: çevirme ≥2 okunmuş akademik kaynak ister (Gródekov, *Хивинский поход 1873 года*; Becker, *Russia's Protectorates in Central Asia*; ikisi de okunmadı).
**T2 — Perovsky 1839.** TDV «14 Kasım 1839 gönderildi / 5 Aralık 1839 Beş-Tumak savaşı» (Jülyen olması muhtemel; +12 gün = 26 Kasım / 17 Aralık). Okunmuş ikinci kaynak yok.
**T3 — Taşkent 1865.** Yerleşim penceresi `Taşkent` hokand→rusya **1865-06-17**; kronoloji maddesi `kronoloji_ozbek.js` **1865-06-29** (aynı olay, 12 gün fark = Jülyen 17 Haziran ↔ Gregoryen 29 Haziran). Rusça arama özetleri şehrin düşüşünü 15 Haziran 1865 (Jülyen; Gregoryen 27 Haziran) gösteriyor — 15 vs 17 Haziran çelişkisi de var. Madde ve pencere ±30 günde eşleştiği için D2 sorunu yok; **ama gün ikisinde farklı takvimde**. Pencere `yerlesimler_ek15.js`'te (kuyruk: YERLESIMLER-JS-KUYRUK değil, ek15 serbest ama kaynak okunamadığından yazılmadı).
**T4 — Sibirya Kazakları Nizamnamesi.** `kronoloji_orta_asya.js` 1822-06-22 «22 Haziran 1822'de … tebliğ etti» ve `kaynak:` TDV `kazaklar` ("1822, 1824, 1867, 1868 ve 1891 düzenlemelerini temel sayar" — **TDV yalnız yıl veriyor**, gün TDV'den gelmiyor). Rusça arama özetleri: «Устав о сибирских киргизах» **22 Temmuz 1822** (Jülyen; Gregoryen 3 Ağustos 1822) (Irkutsk *İzvestiya* ve Kazak ped. dergisi özetleri; bir makale 22 Haziran der, özet bunu yazım hatası sayıyor). PDF'ler okunamadı. → Atlasın 22 Haziran günü kaynaksız görünüyor ve takvim karışık; **karar bekliyor**.
**T5 — Hokand'ın ilgası.** `hokand` künye t 1876-02-19 ve Hokand/Taşkent… pencereleri; Rus kaynak özetleri «19 Şubat 1876» (Jülyen? Rus ansiklopedisi booksite.ru) ve «Kokand şehri 5(17) Şubat 1876 işgal» veriyor. Gregoryen karşılığı 2 Mart 1876 olabilir; okunmadı. `Alay vadisi (bölge)` penceresi 1876-02-19'a bağlı.
**T6 — Buhara himayesi 1868-06-02** (Zerabulak): `kaynak:` "TDV buhara-hanligi + kronoloji_rusya.js ile çapraz" (atlas-içi). TDV günü okunmadı.
**T7 — Çandavar (Gurlu/Gâhadavâla) 1193 ↔ 1194**: `taraflar: gurlu` ile iki madde 1193-01-01 (Majumdar/TDV Hindistan), biri 1194-01-01 (Britannica) aynı olay için; atlas-içi yıl çelişkisi (üçü de tek olay). Okunmadı.
**T8 — Mükerrer günler.** Orhon yazıtları: Kültigin yazıtı 0732-01-01 ↔ 0732-08-21 ve Bilge Kağan 0735-01-01 ↔ 0735-09-24 (aynı olay iki madde: yıl-hassasiyetli ve gün-hassasiyetli); Karahanlı Buhara 0999-01-01 ↔ 0999-10-01; Mültan 1175-01-01 ↔ 1175-07-22; Ediger 1552-01-01 ↔ 1552-11-01; Zencan/Zerenc 1040-01-01 ↔ 1040-09-11 → çift madde, yıl hassasiyetli olan gün hassasiyetliyle birleşmeli (çeviri anahtarı etkisi: `<DIZI>:<t>:<idx>` + `olay_taraf.js` `<t>|<b>` birlikte taşınır; KASA).
**T9 — Atlas-içi / jenerik kaynak.** 12 atlas-içi (5 + 7) ve 26 jenerik madde: kaynak alanı adlı yayına (cilt/sayfa/yazar) bağlanmadan kaynak sayılamaz. Liste yukarıda. 3 madde `kaynak:`ında atlas künyesine atıf var (Moğulistan 1347-01-02, Yarkent 1514-01-02, Cungar 1634-01-02): künyenin kendine atfı.
**T10 — Çağatay/Timurlu/Hive 'Jülyen' dışı günler:** Timurlu t 1507-05-24 KASA ÇELİŞKİ-1113 notunda gün teyitsiz (19-27 Mayıs aralığı); bu oturum yeni kaynak okuyamadı (Iranica 403).

## Madde yoğunluğu: büyük boşluklar (künye ömrü içinde 1281+, madde yok ≥ 50 yıl)
| künye | boşluk |
|---|---|
| hive | 1747 → 1825 (78 yıl) |
| turkmen | 1639 → 1750 (111 yıl) |
| mogulistan | 1514 → 1606 (92 yıl) |
| yarkent-hanligi | 1606 → 1678 (72 yıl) |
| cagatay | 1282 → 1346 (64 yıl) |
| sibir-hanligi | 1495 → 1552 (57 yıl) |
| hokand | 1758 → 1812 (54 yıl) |
| buhara | 1660 → 1710 (50 yıl) |
Hive'nin 1747-1825 boşluğunda TDV `hive-hanligi` maddesinde anlatılan olaylar (Kongrat hanedanının başlangıcı 1804 civarı, Arabşâhî sonu) maddesizdir; yazılması TDV okumasıyla yapılabilir (ben yalnız ölçtüm, yazmadım: yıl-hassasiyetli yeni madde bu aşamada kaynak okunmadan eklenmez).

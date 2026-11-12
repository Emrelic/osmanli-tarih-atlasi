# İRAN DENETİMİ (Safevî→Afşar→Zend→Kaçar dış kenarları) — 12 Kasım 2026 ek denetim

Ölçüm: makine UMIT, worktree `reverent-allen-bb8c39`, HEAD `85896cb29`, salt okuma (yalnız bu dosya yazıldı). Girdi: scratchpad
çıkarımları (`yerlesimler.json` 335 yerleşim, `d2_yakin.tsv`, `b2_etkin.tsv`) + `data/` grep/Read. Ağır komut koşturulmadı.
Mevcut rapor: `denetim/IRAN-DENETIM-1111.md` (64 bulgu, 12 Kasım ekiyle). Aşağıdakiler onda **geçmeyen** konulardır; 1111'de
geçenler (Zend 1747/1751, Kaçar kuruluşu, Şiraz 1792, Horasan/Meşhed, Tarki, Revan ovası, Herat 1856, Merv 1785 maddesizliği,
Ahal 1860, Abâdân, Zerenc, Kandehar 1595-1709, Dera Gazi Han 1739/1747) yinelenmedi.

## ① Ne ölçtüm (sayılarla)
- 1111'in 723 satırı baştan sona okundu; kapsanan konu listesi çıkarıldı.
- 42 yerleşimin 1700-1930 zinciri döküldü: Körfez (Basra, Manama, Hürmüz, Kişm, Bender Abbas, Bûşehr, Maskat), Huzistan
  (Ahvaz, Dizfûl, Râmhürmüz), doğu (Kâbil, Gazne, Peşâver, Attock, Râvalpindi, Delhi, Lahor, Multan, Tatta, Belh, Feyzâbâd,
  Bempûr), Mâverâünnehir (Hîve grubu 5, Buhara, Merv), Kafkasya (Tiflis, Revan, Nahçıvan, Ordubad, Gence, Şamahı, Şeki, Kuba,
  Bakü, Derbend, Lenkeran, Şuşa).
- `d2_yakin.tsv`'de 1730-1749 arasında 24 kırılma grubu ayrıca okundu.
- Kronoloji maddesi: yaklaşık 20 tane (olaylar_ek5/ek8/ek13, kronoloji_iran, kronoloji_sinir_komsu 240-245, devletler.js künye maddeleri).
- Okunan kaynaklar: TDV «Nâdir Şah (İran)», «Benderabbas», «Uman», «Bahreyn», «Basra», «Belh», «Hîve Hanlığı», «Tiflis», «Merv»;
  Iranica (uygulama tarayıcısında, aynı köken içinden) NADER SHAH, AFGHANISTAN x, BANDAR-E ʿABBĀS(I), BAHRAIN iii, BASRA,
  ZAND DYNASTY, KHIVA, KABUL iii, BAMPŪR ii.
- **Bulgu: 9** (E1-E9) ve **4 karar sorusu**.

## ② Ne bulamadım / ölçemedim
- **Belh 1737-1747 (Afşar):** atlasta 1514-1751 arası kesintisiz `buhara`. Iranica NADER SHAH'a göre Rızâ Kulı, Nâdir Hindistan'dayken
  (1738-39) «Belh'in kuzeyinde ve Ceyhun'un güneyinde» toprak kazanıyordu. Bu, Belh'in o tarihte zaten Afşar elinde olduğunu ima
  ediyor ama alınış yılını vermiyor. TDV «Belh» ve TDV «Nâdir Şah» ise Belh'i hiç anmıyor. Iranica BALKH iii çekilemedi (slug bulunamadı).
  → Bulgu sayılmadı; Iranica BALKH iii ya da Lockhart okununca tekrar bakılmalı.
- **Umman/Maskat'ın Afşar işgali (1737-1744):** TDV «Nâdir Şah»: «Bahreyn ve Uman'a hâkim oldu» (tarih vermiyor). Iranica NADER SHAH'a göre
  Umman seferleri «başarısız» kaldı. TDV «Uman» İran işgalini anmıyor. Kaynaklar çelişiyor, üçüncü kaynak yok → **beyanlı, değişiklik önerilmez** (④-3).
- **Belûcistan / Mekrân:** atlasta Kalat, Gvâdir, Çâhbehâr ve Ketta noktaları yok. Tek nokta Bempûr: 1747-1794 `zend`, ardından `kacar`.
  Iranica BAMPŪR ii 1841/1844 isyanlarını anıyor ama Zend'in ya da Kaçar'ın oraya ne zaman hâkim olduğunu vermiyor → ölçülemedi.
  TDV «Uman», Gevâdir'in (Gvâdir) Uman'a bağlı olduğunu söylüyor; atlasta nokta olmadığı için haritaya etkisi yok.
- **Huzistan / Ka'b:** Ahvaz, Dizfûl ve Râmhürmüz'ün Afşar→Zend→Kaçar zinciri Müşa'şa' ve Ka'b yarı-bağımsızlığını göstermiyor.
  Bu turda kaynak okunmadı.
- **Merv 1884-01-01:** TDV «Merv» yalnız «1884'te» diyor; yıl kuralına uygun, bulgu değil. Iranica MARV slug'ı 404 verdi.
- **Kafkas hanlıkları 1795-1828:** Zubov 1796 (kronoloji_sinir_komsu 240-245), Gence 1804, Bakü/Kuba 1806, Revan 1827-10-13 (TDV), Tebriz 1827-10-25,
  Lenkeran 1812-1813 ve 1826-27 zaten yazılmış ve kaynaklı. Yalnız E9 eksik kaldı.
- Bulunmayan gün: Lütf Ali / Kirman yok (1111'de). Nâdir'in Bahreyn'i alış günü yok (Lockhart okunmadı).

## ③ Bulgular

### E1 — Kâbil, Gazne, Peşâver, Attock, Râvalpindi 1738-01-01'de Afşar'a geçiyor: Kandehar'dan 82 gün önce, hicrî 1151'den önce, maddesiz [TAKVİM · SESSİZ-DEĞİŞİM]
- Kimlik: `yerlesimler_asya.js:545` Kâbil, `:557` Gazne, `:519` Peşâver, `:499` Attock, `:507` Râvalpindi. Hepsinde
  `babur-imparatorlugu → afsar` **1738-01-01** (kaynak alanı boş). d2_yakin'de ±30 günde bulunan tek madde
  «Volga kıyısında Stavropol kalesi kuruldu»; olayla alâkasız, yani grup fiilen maddesiz.
- Atlasta: Kandehar `galzay→afsar` 1738-03-24 (Eski Kandehar ve Nâdirâbâd). Atlasa göre Kâbil, Kandehar'dan önce düşüyor.
- Kaynak: TDV «Nâdir Şah (İran)» (islamansiklopedisi.org.tr/nadir-sah--iran): «Zilkade 1150'de (Mart 1738) Kandehar'ı ele geçirdi»;
  ardından «Gazne, Kâbil, Celâlâbâd ve Peşâver'e hâkim oldu». Iranica AFGHANISTAN x (Balland): «fall of Qandahār, 1150/1738;
  of Kabul, 1151/1738». Hicrî 1151, 1738-04-20 civarında başlıyor (1111 ekindeki 1150 = 1 May 1737 – 19 Nis 1738 tablosunun devamı; ±1 gün).
- Öneri: Gazne ve Kâbil için `afsar` f = **1738-04-20** (1151 ∩ 1738 kesişiminin ilk günü; `ic_not`ta hicrî beyan, «gün teyitsiz»).
  Peşâver de en erken bu gün olmalı; Nâdir'in Peşâver'e girişi bundan sonra (gün kaynaktan okunmalı). Değişmez 2 için yeni madde gerekli:
  «Nâdir Şah Gazne, Kâbil ve Peşâver'i aldı» (TDV nadir-sah--iran + Iranica AFGHANISTAN x). Attock ve Râvalpindi için E2'ye bakın.

### E2 — Attock ve Râvalpindi İndus'un doğusunda; 1738-1747 Afşar boyanmaları kaynağa aykırı [SINIR]
- Kimlik: `yerlesimler_asya.js:499` Attock (33.766 K / 72.36 D), `:507` Râvalpindi (33.598 K / 73.048 D). İkisi de 1738-1747 `afsar`,
  1747-06-20'den sonra `afgan-durrani`.
- Kaynak: TDV «Nâdir Şah (İran)»: Bâbürlülerle yapılan barışla «İndus nehrinin batısında kalan yerleri topraklarına kattı»;
  Lahor'u ise yalnız ele geçirip geri verdi (atlas da Lahor ve Multan'ı 1752'ye kadar `babur-imparatorlugu` tutuyor, tutarlı).
  Iranica AFGHANISTAN x, Dürrânîlerin «Indus'un sol (doğu) yakası»nı 1765'te kaybettiğini söylüyor. Doğu yakası 1752'de
  (Lahor/Multan devri) Dürrânî'ye geçmişti.
- Koordinat notu: iki nokta da İndus'un doğusunda. Attock şehri (Campbellpur) nehrin ~10 km doğusunda, Râvalpindi ~80 km
  doğusunda. Bu bir koordinat okumasıdır, GeoNames ile ölçülmedi.
- Öneri: Attock ve Râvalpindi 1738-1752 arasında `babur-imparatorlugu` kalsın (Lahor/Multan zinciri, «zincir Lahor'dan devralındı»),
  1752-04-01'den sonra `afgan-durrani` olsun. 1747-06-20 kırılması bu iki noktadan kalksın.

### E3 — Hîve grubu (5 yerleşim) 1740 ve 1747'de el değiştiriyor; Değişmez 2 evreninde Hîve maddesi yok [SESSİZ-DEĞİŞİM · EKSİK-MADDE]
- Kimlik: `yerlesimler.js:2383` Hîve, `:2390` Hazârasp, `:2403` Köhne Ürgenç, `:2413` Yeni Ürgenç, `:2426` Küngrat.
  Kırılmalar: `hive→afsar` 1740-01-01 ve `afsar→hive` 1747-06-20. 1740 grubunu ±30 günde «karşılayan» maddeler 1739-12-12 tarihli
  Kabartay ve Özi maddeleri; alâkasız. `olaylar*`/`kronoloji_sinir*` içinde 1738-1740 için Hîve, İlbars ya da Hârizm maddesi
  bulunamadı (grep).
- Kaynak: TDV «Hîve Hanlığı»: Hindistan dönüşü «ertesi yıl» (1740) Nâdir Şah «Hîve'yi işgal etti ve İlbars Han ile ileri gelen
  beylerini idam ettirdi», «1747'de öldürülmesine kadar Hîve'yi kendi tayin ettiği valilerle idare etmeye çalıştı».
  Iranica KHIVA: «captured Khiva after a brief military campaign in 1740». İki kaynak da yalnız yıl veriyor, bu yüzden
  1740-01-01 yıl kuralına uygun.
- Öneri: madde ekle: 1740-01-01 «Nâdir Şah Hîve'yi aldı, İlbars Han idam edildi» (yıl; «gün teyitsiz»; TDV hive-hanligi + Iranica KHIVA).
  1747 dönüşü Nâdir'in ölüm maddesiyle karşılanıyor, ama TDV'nin «valilerle idare etmeye çalıştı» ifadesi fiilî denetimin
  1747'den önce gevşediğini düşündürüyor; ölçülmedi.

### E4 — Bahreyn 1717-1753 `umman`: madde TDV'ye dayandığını söylüyor ama TDV'de yok; iki kaynak bu dönemle çelişiyor [KAYNAKSIZ · ÇELİŞKİ]
- Kimlik: `yerlesimler.js:1366` Manama: `umman` 1717-01-01..1753-01-01, ardından `zend`. Madde `olaylar_ek13.js:298-303`
  «Ummanlılar'ın Bahreyn'i istilâsı», `kaynak:"bahreyn"`. Maddenin kendi `ic_not_d`'si de «iç ayrıntı kesinleştirilemedi» diyor.
- Kaynak: TDV «Bahreyn» (GET ile okundu): 1602 ve 1783 cümleleri var; **1717'den ve Umman'dan söz etmiyor**. TDV «Nâdir Şah (İran)»:
  Nâdir «Basra körfezinde güçlü bir donanma oluşturarak Bahreyn ve Uman'a hâkim oldu» (tarihsiz; 1736-1743 arası).
  Iranica BAHRAIN iii: İran hâkimiyeti ancak **1753**'te, Bûşehr Şeyhi Nâsır adayı **Arap Hûle (Howayla) kabilesinden** aldığında fiilî oldu.
  Yani 1753'teki öncül sahip Umman değil, Hûle.
- Ayrıca: Iranica BAHRAIN iii (Ramazani'yi alıntılayarak) Portekizlilerin 1622'de çıkarıldığını yazıyor; TDV 1602 diyor.
  Atlas TDV'yi esas almış, doğru; Iranica'nın yılı `ic_not`a yazılabilir.
- Öneri: 1717-1753 dönemi şu hâliyle kaynaksız. Merdiven ①-③'e göre ayrılması gereken dilimler: Umman istilası (1717, kaynak bulunmalı)
  · Afşar (Nâdir; TDV nadir-sah--iran, gün yok) · Hûle (… → 1753, Iranica). Gün bulunana kadar dönem BEYANLI YAKLAŞIKLIK olarak
  işaretlensin ve maddenin `kaynak:`ı düzeltilsin (TDV bahreyn 1717 demiyor).

### E5 — Bender Abbas, Hürmüz ve Kişm 1793-1868/1876 Umman idaresinde; atlas kesintisiz Zend/Kaçar boyuyor [SINIR · EKSİK-MADDE]
- Kimlik: `yerlesimler.js:2163` Bender Abbas (Gamrûn), `:1896` Hürmüz Adası, `:1903` Kişm. Üçü de `zend` 1747-1794 →
  `kacar` 1794-1925 (kaynak alanı boş). Değişmez 2 evreninde kiralama ya da Umman maddesi yok (grep: olaylar*, kronoloji_sinir*, kronoloji_iran).
- Kaynak: TDV «Benderabbas»: «1793'te Benderabbas ve civarını Maskat imamı Seyyid Sultan b. Ahmed satın aldı»; 1854'te İranlılar şehri
  işgal etti; 1856 antlaşmasıyla «idaresi yirmi yıllık bir süre için yine Maskat imamına bırakıldı»; «Antlaşmanın bitiminde şehir
  İran'ın egemenliğine geçti (1876)». TDV «Uman»: Seyyid Sultan devrinde «Kişm ve Hürmüz limanları yanında Benderabbas, Lince,
  Gevâdir limanları da Uman'a bağlı idi». Iranica BANDAR-E ʿABBĀS(I): 1793 fermanı, Mînâb ile Hamîr arasındaki 150 km kıyıyla
  Kişm ve Hürmüz adalarında Maskat sultanının nüfuzunu tanıdı; kiralama 1855'te 20 yılla sınırlandı; «the Qajars gained final control
  of the port in **1868**».
- Çelişki: kesin dönüş günü TDV'ye göre 1876, Iranica'ya göre 1868. TDV esas; Iranica `ic_not`a. Iranica'nın 1868'i fiilî denetimi,
  TDV'nin 1876'sı hukukî egemenliği anlatıyor olabilir (KARAR 5'e göre harita fiilî denetimi gösterir) → ④-1.
- Öneri: üç yerleşim için Umman idaresi dilimi (`umman`, ya da hukukî İran egemenliği vurgulanacaksa `v:`) **1793-01-01** (yıl) → [1854 İran işgali → 1856
  yeniden Umman] → 1868/1876 olsun. Madde: «Bender Abbas, Hürmüz ve Kişm Maskat'a bırakıldı (1793)», «1856 antlaşması», «Bender Abbas'ın İran'a dönüşü».

### E6 — Basra'nın Zend'den geri alınışı «1779-04-01»: kaynak yalnız yıl veriyor, ay seçilmiş; Kerim Han'ın ölüm günü üç yerde farklı [TARİH-HATA]
- Kimlik: `yerlesimler.js:884` Basra `zend` 1776-04-16..**1779-04-01**. Madde `olaylar_ek8.js:224` `t:"1779-04-01"`, `gun:"1779"`,
  `kaynak:"basra"`. Maddenin metni Kerim Han'ın ölümü için «2 Mart 1779» diyor; 1111'e göre atlasta 1779-03-01 (TDV «Mart 1779»),
  `zend` künye maddesinde ise 1779-01-01.
- Kaynak: TDV «Basra»: «Şehir 1775-1779 yılları arasında Sâdık Han tarafından zaptedildiyse de tekrar geri alındı» (ay yok).
  Iranica BASRA: teslim «1190/1776» (1190 h. 1776-02-20'de başlıyor; 1776-04-16 bununla uyumlu, gün teyitsiz). Kerim Han'ın
  ölümü üzerine (1193/1779) Sâdık Han şehirden çekildi, ardından «a brief period of direct control by the Montafeq tribe» geldi,
  sonra Osmanlı döndü.
- Öneri: Zend dönemi 1779-04-01'de bitmesin; Sâdık Han'ın çekilişiyle bitsin. Gün kaynakta yok; Kerim Han'ın ölümünden önce olamayacağı için
  alt sınır 1779-03-01, «[yalnız yıl teyitli; gün teyitsiz]». 04-01 ayının dayanağı yoksa `ic_not`ta beyan edilsin.
  Müntefik ara dönemi için merdiven: kaynak bulunursa `__BOSLUK__` yerine Müntefik künyesi. Kerim Han'ın ölüm günü tek değere indirilsin (1111 B3 notuyla birlikte).

### E7 — Tiflis yağması `1795-01-01`: TDV ayı veriyor, `ic_not` «TDV ay vermiyor» diyor [TARİH-HATA]
- Kimlik: `data/kronoloji_iran.js:276` `t:"1795-01-01"`, «Tiflis'in yağmalanması», `ic_not_gun`: TDV kacarlar/zendler… «gün/ay vermiyor».
- Kaynak: TDV «Tiflis» (Mustafa Aydın): Ağa Muhammed Şah «Eylül 1795'te düzenlediği seferde Tiflis'i tahrip etti».
- Öneri: `t:"1795-09-01"` (ay hassasiyeti) ve `ic_not`: «TDV tiflis: Eylül 1795». Haritada kırılma yok, doğru: baskın egemenliği
  değiştirmedi, Tiflis 1762-1801 `gurcistan`. Değişmez 2'ye etkisi yok.
- Yan not: aynı TDV maddesi Georgievsk'i «24 Temmuz 1784» diye veriyor; atlas 1783-08-04 (Gregoryen; kaynağı Gürcü ansiklopedisi).
  TDV-içi bir yıl hatası olabilir; değişiklik önerilmez, `ic_not`a eklenebilir.

### E8 — Bâbürlü künyesinde «Nâdir Delhi'yi yağmaladı» 1739-01-01: kaynak ay veriyor, Karnal maddesi yok [TARİH-HATA · EKSİK-MADDE]
- Kimlik: `devletler.js:5453` `{odak_yer:["Delhi"], t:"1739-01-01", tur:"savas"}`. Öte yandan `kronoloji_iran.js:240`'ta 1739-03-13.
- Kaynak: TDV «Nâdir Şah (İran)»: «Zilkade 1151'de (Şubat 1739) Lahor'a, bir ay sonra Delhi'ye hâkim oldu». Iranica NADER SHAH:
  «battle of Karnāl near Delhi in February 1739». Karnal'ın günü (24 Şubat 1739) bu iki kaynakta yok.
- Öneri: künye maddesi en az Zilhicce 1151'in ilk gününe alınsın (≈1739-03-12, tablo hesabı; gün teyitsiz). Böylece
  kronoloji_iran'la (1739-03-13) tek gün olur; o günün kaynağı da yazılsın. Haritada kırılma yok, doğru: Iranica'ya göre barış
  Hindistan'ı «Nâdir'in uzak metbuluğu altında» Muhammed Şah'a geri verdi.

### E9 — Nahçıvan ve Ordubad'ın 1827-07-08 Rus işgali yalnız ru.wikipedia'ya dayanıyor [KAYNAKSIZ]
- Kimlik: `yerlesimler.js:792` Nahçıvan ve `:2258` Ordubad, `{f:"1827-07-08", t:"1828-02-22", d:"rusya"}`. Kaynak alanı:
  «ru.wikipedia (İPUCU, kaynak değil): … 26 июня 1827». Komşu Revan'ın 1827-10-13'ü ise TDV revan'a dayanıyor.
- Takvim: 26 Haziran 1827 (Jülyen) = 8 Temmuz 1827 (Gregoryen). Çevrim doğru.
- Öneri: TDV «Nahçıvan» ya da Iranica (NAḴJAVĀN / RUSSO-PERSIAN WARS) ile teyit edilsin. Teyit edilene kadar kayıt «ipucu, teyitsiz»
  diye beyanlı kalsın (CLAUDE.md: Vikipedi tek dayanak olamaz). Değişiklik önerilmez.

## ④ Karar gereken — Emre'ye öneriyle
1. **Bender Abbas, Hürmüz, Kişm (E5):** Umman idaresi `s:` (fiilî denetim, KARAR 5) mı, yoksa `v:` (İran egemenliği altında kiralama) mı
   olsun? Taraflar: TDV benderabbas «satın aldı / idaresi bırakıldı», Iranica «lease … final control 1868». **Önerim:** `s:umman`
   1793 → 1868 (fiilî, Iranica). TDV'nin 1876'sı `ic_not`ta hukukî egemenlik günü olarak dursun. TDV esas kuralı egemenlik gününe uygulanır, harita fiilî denetimi gösterir.
2. **Attock ve Râvalpindi (E2):** İndus doğusu 1738-1752 arasında Bâbürlü. **Önerim:** Lahor zincirine bağlansın. Koordinatın
   yakası Emre/GeoNames ölçümüyle teyit edilmeli.
3. **Umman'ın Afşar işgali:** TDV «Uman'a hâkim oldu», Iranica «seferler başarısız». **Önerim:** Maskat kesintisiz `umman` kalsın,
   iki kaynak bir kronoloji maddesinde beyan edilsin. Üçüncü kaynak (Lockhart, *Nadir Shah*, 1938; Floor, *Iranian Studies* 20, 1987)
   okunmadan harita değişmesin.
4. **Tatta (Sind) 1739-1747:** Tatta İndus'un batısında; TDV'ye göre bu topraklar Nâdir'e katıldı, ama Kalhora hanedanı yönetimde
   kaldı. Atlas 1701-1843 kesintisiz `sind` gösteriyor. **Önerim:** `v:afsar` 1739-1747 (metbuluk). Gün kaynakla bulunmadan yazılmasın.

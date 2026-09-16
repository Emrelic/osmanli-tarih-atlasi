// =====================================================================
// SINIR KRONOLOJİSİ — D3-AVRUPA-BATI (Batı Avrupa kara sınırları)
// =====================================================================
// window.KRONOLOJI_SINIR_AVRUPA_BATI — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Her madde data/d_sinirlar_avrupa_bati.js'teki bir E/F/D hat değişikliğine bağlıdır
// (`sinir_id`). Biçim data/kronoloji_almanya.js ile aynı; EK alanlar:
//   devletler : ilgili İKİ devletin kimliği
//   sinir_id  : d_sinirlar_avrupa_bati.js kayıt kimliği (önek eşleşmesi: -1/-2 parçaları dahil)
// index.html'e BAĞLANMADI (koordinatör yapacak).
//
// KAPSAM: GERİYE SARMA G1 (1918-11-11 → 1923-10-29) ve G2 (1914-07-28 → 1918-11-11).
// G2'de hat değişikliği yalnız Finlandiya'nın ayrılmasıdır; 1914-18 cephe ve işgal hatları
// (Belçika, Lüksemburg, Kuzey Fransa, İtalya cephesi) koordinatı kesin olmadığı için ne
// kayıt ne madde aldı. Rusya'daki 1917 Şubat/Ekim hükûmet değişiklikleri hattı değiştirmedi,
// yalnız kayıtların taraf kimliğini böldü — madde almadı.
// G1 ayrıca: pencereyi AÇAN
// Villa Giusti ateşkesi (1918-11-03; G1 kaydının başlangıcı). C değişiklikleri madde
// ALMADI. İSTİSNA: Rapallo (hukukî sınıfı E/C, haritada koordinatı yok — YOK kaydı)
// başlıca bir antlaşma olduğu için madde aldı; `sinir_id` YOK kaydını gösterir.
//
// KAYNAK (§4): FRUS = ABD Dışişleri Foreign Relations of the United States
// (history.state.gov, metin okundu) · IBS = International Boundary Study
// (library.law.fsu.edu/Digital-Collections/LimitsinSeas/pdf/ibsNNN.pdf, metin okundu) ·
// LNTS c.3 (Tartu) · irishstatutebook.ie (1922 Anayasası md. 83).
// Saint-Germain'in yürürlük GÜNÜ okunabilir bir kaynakta BULUNAMADI ⇒ madde YIL düzeyinde.
// TDV bu coğrafyayı bu taneciklikte kapsamıyor (CLAUDE.md §4 TANECİKLİK boşluğu).

window.KRONOLOJI_SINIR_AVRUPA_BATI = [

{ t:"1917-12-06", devlet:"finlandiya", devletler:["finlandiya","isvec"], sinir_id:"d1923-fi-se",
  b:"Finlandiya bağımsızlığını ilan etti — İsveç ve Norveç ile sınırlar Finlandiya'nın oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","konu-siyasi","finlandiya","isvec","norvec","sovyet-rusya"],
  d:"Rusya'ya bağlı Finlandiya Büyük Dükalığı bağımsızlığını ilan etti. 1809 Fredrikshamn Barışı ve 1810 sınır sözleşmesiyle Torne–Muonio ırmakları boyunca çizilen İsveç sınırı ile 1751 Strömstad hattına dayanan Norveç sınırının batı kesimi değişmeden yeni devletin sınırı oldu; Finlandiya resmî kayıtları 1809-1917 ve 1918 sonrası dönemleri aynı belgelerle anlatır. Petsamo kesimi ise 1920'ye kadar Rusya'da kaldı. Bağımsızlık ilanının günü okunabilir bir kaynakta doğrulanamadı; gün finlandiya künyesinden devralındı.",
  kaynak:"MML, Suomen–Ruotsin rajankäynti 2006, §2.1-2.2 (1809-1917 / 1918 sonrası) · Store norske leksikon 'riksgrensen' · Tartu Barışı md. 4 (LNTS c.3)" },

{ t:"1918-11-03", devlet:"italya", devletler:["italya","habsburg"], sinir_id:"d1918-it-ch-isgal",
  b:"Villa Giusti Ateşkesi — Güney Tirol'ün Brenner'e kadar İtalyan işgaline bırakılması", tur:"ateskes", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","ateskes","konu-siyasi","italya","habsburg","isvicre"],
  d:"Avusturya-Macaristan ile imzalanan ateşkes, tahliye edilecek toprağın sınırını Stelvio'nun kuzeyinden Adige ve Eisach kaynaklarına, Reschen ve Brenner'e uzanan su bölümü olarak çizdi. Bu hattın gerisi Müttefik (fiilen İtalyan) işgaline bırakıldı; böylece Vinschgau'nun İsviçre ile komşu kesimi İtalya'nın fiilî sınırı oldu. Toblach ve Tarvis çevresinde ateşkes hattı sonraki antlaşma hattından ayrılır. Ateşkesin yürürlük saati kaynakta geçmiyor.",
  kaynak:"FRUS 1918 Supp. 1 c.1 d362 (ateşkes şartları, I.3) · d373 (imza bildirimi)" },

{ t:"1918-11-11", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"d1918-fr-de-isgal",
  b:"Compiègne Ateşkesi — Alsas-Loren'in tahliyesi ve Fransız işgali", tur:"ateskes", onem:5, dunya:4, kapsam:"dis", yer_id:"Strazburg",
  etiket:["sinir","ateskes","konu-siyasi","fransa-cumhuriyet","almanya"],
  d:"Almanya ile imzalanan ateşkesin ikinci maddesi Belçika, Fransa, Lüksemburg ve Alsas-Loren'in kısa bir süre içinde tahliyesini ve Müttefik birliklerince işgalini öngördü. Alsas-Loren böylece 1870 sınırına kadar fiilen Fransız idaresine geçti; Alsas'ın İsviçre ile, Lorraine'in Lüksemburg ile olan sınırları da yeniden Fransa'nın fiilî sınırı oldu. Hukukî devir Versay Antlaşması'nın yürürlüğünü bekledi; antlaşmanın 51. maddesi egemenliği geriye yürür biçimde ateşkes gününden başlattı. İşgalin fiilen tamamlandığı gün kaynakta yok.",
  kaynak:"FRUS 1918 Supp. 1 c.1 d384 (şartlar, A.2) · d420 (11 Kasım 1918 imzası) · Versay md. 51 (Avalon)" },

{ t:"1920-01-10", devlet:"fransa-cumhuriyet", devletler:["fransa-cumhuriyet","almanya"], sinir_id:"d1923-fr-de",
  b:"Versay Antlaşması yürürlüğe girdi — Alsas-Loren hukuken Fransa'ya döndü", tur:"toprak-kazanc", onem:5, dunya:5, kapsam:"dis", yer_id:"Strazburg",
  etiket:["sinir","antlasma","konu-siyasi","fransa-cumhuriyet","almanya"],
  d:"İlk onay tutanağının imzalanmasıyla Versay Antlaşması yürürlüğe girdi. Antlaşmanın 27. maddesi Fransa–Almanya sınırını 18 Temmuz 1870 sınırı olarak belirledi; 51. madde 1871 öncesi sınır antlaşmalarını yeniden yürürlüğe koydu. Saar Havzası aynı antlaşmanın 45-50. maddeleriyle Milletler Cemiyeti idaresine bırakıldığından, sınırın Saar kesimi Fransa ile Saar Bölgesi arasında kaldı. Ayrıntılı delimitasyon antlaşması 14 Ağustos 1925'te imzalandı.",
  kaynak:"FRUS 1919 Paris Peace Conference c. XIII ch1 (yürürlük) · Versay md. 27, 45-50, 51 (Avalon) · Fransız Senatosu raporu l01-276" },

{ t:"1920-01-10", devlet:"belcika", devletler:["belcika","almanya"], sinir_id:"d1923-be-de",
  b:"Versay Antlaşması ile Eupen-Malmedy ve Tarafsız Moresnet Belçika'ya geçti", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","belcika","almanya"],
  d:"Versay Antlaşması'nın 32-34. maddeleri 1816'dan beri ortak yönetilen Tarafsız Moresnet'i ve Eupen ile Malmedy bölgelerini Belçika'ya bıraktı. 35. madde yedi üyeli bir komisyonu yeni hattı yerinde belirlemekle görevlendirdi. Komisyon raporunu 6 Kasım 1922'de Aachen'de tamamladı; Raeren–Kalterherberg demiryolu hattı Belçika'ya bırakıldı. Eupen-Malmedy'nin kesin devrine ilişkin Milletler Cemiyeti kararının günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Versay md. 32-35 (Avalon) · IBS No. 7 Belgium–Germany" },

{ t:"1920-01-01", devlet:"italya", devletler:["italya","avusturya-cumhuriyet"], sinir_id:"d1923-it-at",
  b:"Saint-Germain Antlaşması yürürlüğe girdi — Güney Tirol ve Tarvis İtalya'ya", tur:"toprak-kazanc", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","avusturya-cumhuriyet"],
  d:"10 Eylül 1919'da imzalanan Saint-Germain Antlaşması'nın 27(2). maddesi Avusturya–İtalya sınırını Reschen, Brenner ve Karn Alpleri boyunca çizdi; Güney Tirol ile Tarvis İtalya'ya geçti. Büyükelçiler Konferansı 22 Temmuz 1920'de demarkasyon talimatını verdi, işaretleme 1924'te bitti. Metnin 'yerinde belirlenecek' dediği üç alt kesim (Reschen, Drava geçişi, Thörl) 1923'te henüz kesinleşmemişti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 58 (Revised) Austria–Italy (md. 27 alıntısı, 1920 talimatı, 1924 demarkasyonu)" },

{ t:"1920-01-01", devlet:"italya", devletler:["italya","isvicre"], sinir_id:"d1923-it-ch-saintgermain",
  b:"Güney Tirol'le birlikte eski Avusturya–İsviçre sınırının bir kesimi İtalya–İsviçre sınırı oldu", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","isvicre"],
  d:"Saint-Germain Antlaşması'yla Güney Tirol'ün İtalya'ya geçmesi, İtalya–İsviçre sınırını Cima Garibaldi'den Piz Lad'a kadar 53,5 km uzattı. Hat eski Avusturya–İsviçre sınırıydı ve değişmeden devralındı. İki ülke bu kesimi 1920-1927 arasında yeniden işaretledi ve çalışmayı 1927-1928 nota teatisiyle kabul etti. Tarih yalnız YIL düzeyindedir: antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"IBS No. 12 Italy–Switzerland" },

{ t:"1920-07-05", devlet:"danimarka", devletler:["danimarka","almanya"], sinir_id:"d1923-dk-de",
  b:"Kuzey Schleswig Danimarka'ya geçti — yeni Danimarka–Almanya sınırı", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","plebisit","konu-siyasi","danimarka","almanya"],
  d:"Versay Antlaşması'nın 109-114. maddeleri Schleswig'de halk oylaması öngördü. Birinci bölge 10 Şubat 1920'de Danimarka'yı seçti. Başlıca Müttefik Devletler ile Danimarka arasında 5 Temmuz 1920'de Paris'te imzalanan antlaşmayla Kuzey Schleswig Danimarka'ya geçti ve 1864 Viyana Antlaşması'nın Kongeå hattı yerini yeni sınıra bıraktı. Versay'ın 111. maddesiyle kurulan komisyon hattı Temmuz 1920 – Mayıs 1921 arasında 1:5.000 ölçekli 18 paftada işaretledi. Hat o günden beri değişmedi.",
  kaynak:"IBS No. 81 Denmark–Germany (Viyana 1864, halk oylaması, Paris 5 Temmuz 1920, komisyon haritaları)" },

{ t:"1920-11-12", devlet:"italya", devletler:["italya","yugoslavya"], sinir_id:"d1923-it-shs",
  b:"Rapallo Antlaşması — İtalya ile SHS Krallığı arasında Julian Alpleri sınırı ve Fiume Serbest Devleti", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","italya","yugoslavya"],
  d:"İtalya ile Sırp-Hırvat-Sloven Krallığı Rapallo'da doğu sınırlarını belirledi. Hat Peč'ten Julian Alplerinin su bölümüyle Castua'ya indi. Zara İtalya'ya bırakılarak bir anklav oldu; Fiume serbest devlet ilan edildi; hattı yerinde çizmek için karma bir komisyon kuruldu. Bu hattın koordinatı haritada yoktur: 1947 Paris Antlaşması'yla neredeyse tamamı ortadan kalktı. Antlaşmanın yürürlük günü okunabilir bir kaynakta bulunamadı.",
  kaynak:"Rapallo Antlaşması md. 1-5 (LNTS c.18 s.397-403, forost.ungarisches-institut.de kopyası) · İtalya ile Barış Antlaşması 1947 md. 3 (UK TS 1948/50)" },

{ t:"1920-12-31", devlet:"finlandiya", devletler:["finlandiya","norvec"], sinir_id:"d1923-fi-no-petsamo",
  b:"Tartu Barışı yürürlüğe girdi — Petsamo Finlandiya'ya geçti, Norveç'le yeni sınır", tur:"toprak-kazanc", onem:4, dunya:3, kapsam:"dis", yer_id:"",
  etiket:["sinir","antlasma","konu-siyasi","finlandiya","norvec","sovyet-rusya"],
  d:"14 Ekim 1920'de imzalanan Tartu Barışı'nın 4. maddesi Petsamo'yu Finlandiya'ya bıraktı; bölgenin kuzeybatı sınırı eski Rusya–Norveç sınırı olarak kaldı. Böylece 1826 sözleşmesiyle çizilip 1896'da işaretlenen hat Norveç–Finlandiya sınırı oldu ve Norveç'in Rusya ile ortak kara sınırı sona erdi. Onayların değişim günü kaynaklar arasında çelişkili: League of Nations Treaty Series 31 Aralık 1920 (Moskova), ABD Dışişleri çalışması 14 Şubat 1921 (Helsinki) veriyor.",
  kaynak:"Tartu Barışı md. 4 ve onay tutanağı (LNTS c.3 No. 91) · IBS No. 24 Norway–USSR · IBS No. 74 Finland–USSR (çelişen tarih)" },

{ t:"1922-12-06", devlet:"irlanda-serbest-devlet", devletler:["irlanda-serbest-devlet","ingiltere"], sinir_id:"d1923-ie-gb",
  b:"İrlanda Serbest Devleti kuruldu — Kuzey İrlanda ile sınır uluslararası sınır oldu", tur:"kurulus", onem:5, dunya:4, kapsam:"dis", yer_id:"Dublin",
  etiket:["sinir","antlasma","konu-siyasi","irlanda-serbest-devlet","ingiltere"],
  d:"İngiliz-İrlanda Antlaşması'nı uygulayan 1922 Anayasası, ilanın en geç 6 Aralık 1922'de yapılmasını şart koştu. Sınır, 1920 İrlanda Hükûmeti Yasası'nın Kuzey İrlanda'ya ayırdığı altı kontluğun sınırıydı. Antlaşmanın 12. maddesi sınırın bir komisyonca düzeltilebileceğini öngörüyordu. 1923'te bu komisyon henüz kurulmamıştı; 1925 anlaşması onun yetkisini kaldırıp hattı olduğu gibi sabitledi. İlanın kesin günü kaynakta geçmiyor.",
  kaynak:"Constitution of the Irish Free State Act 1922, md. 83 ve Antlaşma md. 11-12 (irishstatutebook.ie) · Government of Ireland Act 1920 s.1(2) (legislation.gov.uk) · Treaty (Confirmation of Amending Agreement) Act 1925" },

];

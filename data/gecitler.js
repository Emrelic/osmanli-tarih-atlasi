// data/gecitler.js — NEHİR GEÇİTLERİ
// Oturum: NEHİR GEÇİT · şartname: oturumlar/NEHIR-GECIT.md · 22 Ağustos 2026
//
// ═══════════════════════════════════════════════════════════════════════════
// NİÇİN VAR — Emre'nin sorusu
//   "Bir nehrin bir yakasındaki şehirden karşı kıyısına geçiş ile alâkalı
//    nasıl bir kural uygulanıyor? Geçit noktası varsa sürterek belli bir
//    miktar karşıya geçebilir ama yoksa orada alanların KESİLMESİ lâzım."
//
// Motor bugün nehri yalnız bir YASLANMA hedefi olarak biliyor; aşmanın bedeli
// SIFIR (`uret_petek.py:1710` — tek sürtünme EĞİM). Bu dosya o bedelin
// düşeceği noktaları taşır.
//
// ⚠️ BU DOSYA HENÜZ MOTORA BAĞLI DEĞİL. Veridir, davranış değil.
//    index.html'e bağlama işi koordinatördedir (§7).
//
// ═══════════════════════════════════════════════════════════════════════════
// ŞEMA — dokuz alanın dokuzu da her kayıtta DOLU
//   ad       geçidin adı (köprü adı varsa o, yoksa "<yer> geçidi")
//   nehir    aştığı akarsu
//   lat lon  geçidin koordinatı
//   tur      kopru · kale-cifti · feribot · sig-gecit        ← BEDEL KADEMESİ
//   f  t     geçidin var olduğu aralık, YYYY-AA-GG (bilinmiyorsa YYYY-01-01)
//   etki_km  bedelin düştüğü yarıçap
//   kaynak   TDV slug (gövdesi OKUNDU) · akademik künye · "bulunamadı"
//   not      koordinatın ve tarihin nereden geldiği — GİZLENMEZ
//
// 🔴 `f`/`t` HAKKINDA — Emre'nin 22 Ağu 2026 kararı (şartname §3):
//    Motor ilk turda hepsini HEP VAR sayacak, çünkü GEÇİT KÖPRÜDEN ESKİDİR.
//    Osijek'te Süleyman köprüsünden önce Roma'nın Mursa geçidi vardı;
//    Frankfurt · Schweinfurt · Oxford · Stratford adlarını köprüden değil
//    GEÇİTTEN alır. ⇒ "1566'da köprü yoktu" ≠ "orada geçilemiyordu".
//    Bu yüzden köprü/geçit farkı TARİHE değil `tur` KADEMESİNE yazıldı.
//    `f` alanı yine de doldurulur: veri motordan uzun yaşar.
//
//    ⚠️ `f:"1281-01-01"` yazan kayıtlarda anlam şudur: GEÇİT DAHA ESKİDİR,
//    1281 yalnız atlasın penceresinin başıdır. Uydurulmuş bir tarih DEĞİL,
//    "bu tarihten önce de vardı" demenin dürüst yolu. Her birinin `not`
//    alanında yazılı.
//
// ═══════════════════════════════════════════════════════════════════════════
// `tur` KADEMESİ — bedel neye göre düşüyor, dayanağı ne
//
// Köprünün getirdiği şey geçidin VARLIĞI değil KAPASİTESİDİR: sığ geçitten
// atlı geçer, köprüden ordu ve top geçer. Sıralamanın kaynağı:
//
//   kopru       Mimar Sinan'ın 1538 Karaboğdan seferinde Prut üzerine yaptığı
//               ahşap köprüden ordu AĞIRLIKLARIYLA geçti ve bu onu
//               mimarbaşılığa taşıdı (TDV `kopru`). Ve Evliya Çelebi, doğu
//               seferinde askerin Aras'taki Çobandede taş köprüsünden
//               geçişinin ÜÇ GÜN sürdüğünü söyler (TDV `aras`) — yani
//               köprü bile bedava değil, ama ORDU GEÇER.
//   kale-cifti  Geçidi iki yakadan tutan müstahkem çift. Geçiş VAR ve
//               korunuyor ama kapasite tekneyle sınırlı (Cizre/Bâzabdâ,
//               Hotin, Rusçuk-Yergöğü).
//   feribot     Sürekli hizmet, sınırlı kapasite. Birecik'te iskele
//               hizmetinde 1552'de 45 kişi (5 reis · 2 neccâr · 38 kürekçi),
//               1570'te 63 kişi vardı; kelek ve mauna işletilirdi
//               (TDV `birecik`).
//   sig-gecit   Mevsimlik. Alçak su döneminde geçilir. Şehirlerin adı
//               buradan gelir (ford/furt).
//
// 🔴 GENİŞLİK ANAHTARI — ve tek SAYILI dayanağı:
//    Tuna'da tombaz köprü kurmak ~70 TEKNE istiyordu. Budin-Peşte köprüsü
//    1526'da ON GÜNDE, yetmiş kadar kayık üzerinde kuruldu (TDV `budin`);
//    1595 Eflak seferinde Rusçuk-Yergöğü arasındaki köprü için YETMİŞ ŞAYKA
//    kullanıldığına dair kayıt var (TDV `tuna`). Fırat'ta ise aynı iş kelekle
//    dönüyordu. ⇒ Gereken tekne sayısı, genişliğin doğrudan vekilidir.
//
// ⚠️ ÖLÇMEDİĞİMİ ÖLÇMEDİM DİYE YAZIYORUM (`CLAUDE.md §11`):
//    Aşağıdaki `etki_km` değerleri bir ÖLÇÜM DEĞİL, gerekçeli bir ÖNERİDİR.
//    Dayanağı Osmanlı menzil sistemidir — bir günlük ordu yürüyüşü ~25-30 km,
//    yani bir ordu köprüye o kadar sapmaya değer bulur:
//        kopru 30 · kale-cifti 20 · feribot 15 · sig-gecit 10
//    Bu dört sayının BİRBİRİNE ORANI savunulabilir; MUTLAK değerleri
//    kalibre EDİLMEDİ. Motor bağlandıktan sonra `egim_olc.py`nin 44 gerçek
//    kara seferi güzergâhıyla yaptığı sınavın aynısı bunlara da yapılmalı.
// ═══════════════════════════════════════════════════════════════════════════

window.GECITLER = [

// ─────────────── TUNA ve kolları ───────────────
{ ad:"Budin–Peşte Tombaz Köprüsü", nehir:"Tuna", lat:47.496, lon:19.050,
  tur:"kopru", f:"1526-09-01", t:"1686-09-02", etki_km:30,
  kaynak:"TDV \"budin\" md. — gövde okundu",
  not:"TDV: 'Osmanlı hâkimiyeti sırasında burada inşa edilen ilk eser, 1526'da ON GÜN İÇİNDE yapılan Tuna üzerindeki köprüdür… başlangıçta geçici olarak kayıklar (tonbaz) üzerinde kurulmuştu… yetmiş kadar kayık üzerinde… 1686'da Budin düşerken Türkler bu köprüden çekilmişler ve arkalarından bunu yakmışlardır.' f: Mohaç sonrası Budin'in alınışı (gün TDV'de yok, ay verilmiş). t: 2 Eylül 1686. Koordinat: Budin ile Peşte yerleşimlerinin arası." },

{ ad:"Rusçuk–Yergöğü Geçidi", nehir:"Tuna", lat:43.880, lon:25.984,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"tuna\" ve \"ruscuk\" ve \"yergogu\" md. — üçünün de gövdesi okundu",
  not:"TDV `tuna`: '1595 Eflak seferi esnasında Tuna üzerinde Rusçuk-Giurgiu arasındaki köprünün inşa edilmesi için YETMİŞ ŞAYKA kullanıldığına dair kayıtlar vardır.' Sürekli köprü 1954'e kadar YOK (TDV `ruscuk`), yani atlas dönemi boyunca geçiş iskele+sefer köprüsüyle. f: geçit noktası kalelerden eski, 1281 = atlas penceresinin başı. Koordinat: iki yerleşimin ortası (Rusçuk 43,856/25,971 · Yergöğü 43,904/25,970)." },

{ ad:"İsakça Geçidi", nehir:"Tuna", lat:45.268, lon:28.461,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"isakca\" md. — gövde okundu",
  not:"TDV: 'Aşağı Tuna'nın deltaya yakın kenarında ÖNEMLİ BİR GEÇİT NOKTASI üzerinde bulunur… Aşağı Tuna bölgesinde stratejik bir geçit noktası olarak önemini korudu… II. Bayezid 889'da (1484) İSAKÇA'DAN TUNA'YI GEÇEREK Kili ve Akkirman'ı almıştı… Kaptan Hasan Paşa… bir kale ve Tuna üzerine GEMİLERDEN BİR KÖPRÜ yaptırmış.' Osmanlı ordusunun Lehistan/Rusya seferlerinde ana geçidi. Koordinat: Isaccea (yerleşim verisinde kayıt YOK — standart coğrafî koordinat)." },

{ ad:"Belgrad–Zemun Geçidi", nehir:"Sava (Tuna kavşağı)", lat:44.830, lon:20.429,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"belgrad\" md. — gövde okundu; tombaz için Ágoston, Guns for the Sultan (Cambridge Univ. Press 2005) Osmanlı sefer köprücülüğü bölümü",
  not:"Belgrad tam Sava-Tuna kavşağında; kalenin bütün stratejik değeri bu iki geçidi tutmasından gelir. 1521'de Zemun alındıktan sonra Sava üzerine tombaz köprü kurulmuştur. ⚠️ TDV `belgrad` gövdesinde geçide dair AÇIK cümle BULUNAMADI — geçit kaydı kalenin konumundan ve Sava köprüsü kaydından türetildi, bu yüzden ikinci kaynak yazıldı. Koordinat: Belgrad (44,818/20,457) ile Zemun (44,843/20,401) arası." },

{ ad:"Varadin Köprüsü", nehir:"Tuna", lat:45.248, lon:19.862,
  tur:"kopru", f:"1526-01-01", t:"1699-01-26", etki_km:30,
  kaynak:"TDV \"varadin\" md. — gövde okundu",
  not:"TDV: 'Varoştaki iskeleler daha çok GEÇİŞ için kullanılmakta, burada yaşayan gayri müslim reâyâ Tuna üzerinde SEFER SIRASINDA KURULAN KÖPRÜ hizmetinde istihdam edilmekteydi… 1598'de Segedin tarafından Tuna üzerinde kurulan köprü ile Varadin tarafına geçti… 1 Eylül 1687'de Tuna üzerinde kurulan köprüden Varadin'e gitti… Varadin Köprüsü başında yoklama yapılarak… Tuna kıyısında hendekler kazılarak yeni bir KÖPRÜBAŞI yapıldı ve toplarla donatıldı.' Sürekli değil, SEFER köprüsü — ama köprücü nüfusu ve köprübaşı kalıcı. f: Mohaç yılı (gün yok). t: Karlofça." },

{ ad:"Ciğerdelen (Estergon) Köprüsü", nehir:"Tuna", lat:47.795, lon:18.740,
  tur:"kopru", f:"1543-08-10", t:"1664-01-01", etki_km:30,
  kaynak:"TDV \"estergon\" md. — gövde okundu",
  not:"TDV: 'Uyvar'dan dönmekte olan Osmanlı kuvvetlerinin bir kısmı CİĞERDELEN KÖPRÜSÜ yakınında Miklós Zrínyi tarafından mağlûp edildiği gibi ertesi yıl… Ciğerdelen'i topa tutmaları sonucu palankadaki muhafızlar Estergon'a çekildi, KÖPRÜ DE YIKILDI.' Ciğerdelen (Párkány/Štúrovo) Estergon'un karşı yaka köprübaşıdır — `②` tipinin (iki yakaya dağılan şehir) ders kitabı örneği. f: Estergon'un fethi. t: köprünün yıkıldığı yıl (TDV gün vermiyor)." },

{ ad:"Vidin Geçidi", nehir:"Tuna", lat:43.992, lon:22.873,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"vidin\" md. — gövde okundu",
  not:"⚠️ TDV `vidin` gövdesinde köprü/geçit cümlesi BULUNAMADI; kale 'Tuna sularıyla doldurulmuş geniş ve derin bir hendekle çevriliydi' diyor. Kayıt Vidin'in Tuna defterdarlığı iskeleleri arasında sayılmasına dayanıyor (TDV `tuna`: 'Vidin'den Karadeniz'e… Tuna iskeleleri gümrük'). Yani İSKELE kesin, KÖPRÜ yok ⇒ `feribot`." },

{ ad:"Niğbolu Geçidi", nehir:"Tuna", lat:43.706, lon:24.892,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"nigbolu\" md. — gövde okundu; geçit sınıfı için TDV \"tuna\" iskele listesi",
  not:"⚠️ TDV `nigbolu` gövdesinde geçide dair AÇIK cümle BULUNAMADI. Karşı yakada Turnu (Turnu Măgurele) köprübaşı vardır ve 1462 Turnu muharebesi Tuna'yı geçme harekâtıdır. Kayıt iskele statüsüne dayanıyor." },

{ ad:"Silistre Geçidi", nehir:"Tuna", lat:44.117, lon:27.260,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"silistre\" md. — gövde okundu",
  not:"TDV, Evliya'dan naklen: 'Burada YEDİ TAHTA KÖPRÜ, yedi cami… vardır.' ⚠️ O yedi tahta köprü ŞEHİR İÇİ köprülerdir, Tuna'yı aşan değil — bu ayrımı yazıyorum ki sonraki oturum kaydı 'köprü' diye yükseltmesin. Tuna geçişi iskeleyle. Ayrıca 1595'te Eflak ordusu 'Tuna'yı geçerek şehri yağmaladı' — geçiş noktası olduğunun teyidi." },

{ ad:"İbrail İskelesi Geçidi", nehir:"Tuna", lat:45.270, lon:27.972,
  tur:"feribot", f:"1538-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"ibrail\" md. — gövde okundu",
  not:"TDV: 'İbrâil'in Osmanlı hâkimiyetine geçişi Kanûnî Sultan Süleyman zamanında olmuştur… kaleden başka varoş, TİCARÎ İSKELE ve bağlı köylerden oluşmaktaydı… XVII. yüzyıl sonlarında İbrâil İskelesi'nin geliri bütün Tulçı, İsakça ve Maçin iskelelerinin toplam gelirine eşit.' f: 1538 Boğdan seferi (TDV gün vermiyor). Karşı yakasında Kalas (Galatz) var — ölçtüğüm 14 kardeş çiftten biri (18,58 km)." },

{ ad:"Semendire Geçidi", nehir:"Tuna", lat:44.663, lon:20.930,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"semendire\" md. — gövde okundu",
  not:"TDV: 'Bir SINIR ŞEHRİ, kalesi ve GÜMRÜK NOKTASI olan Semendire, Belgrad'ın fethinden… sonra önemini yitirdi.' Gümrük noktası = geçiş denetimi. ⚠️ Köprüye dair cümle BULUNAMADI." },

{ ad:"Segedin Geçidi", nehir:"Tisa", lat:46.253, lon:20.148,
  tur:"kopru", f:"1543-01-01", t:"1686-01-01", etki_km:30,
  kaynak:"TDV \"varadin\" md. — gövde okundu (Segedin köprüsü ORADA geçiyor); TDV \"segedin\" md. gövdesinde geçit cümlesi BULUNAMADI",
  not:"TDV `varadin`: 'Osmanlı ordusu, 1598'de çıktığı Varad seferi dönüşünde SEGEDİN TARAFINDAN Tuna üzerinde kurulan köprü ile Varadin tarafına geçti.' Segedin Tisa'nın Tuna'ya döküldüğü kesimin başındadır. ⚠️ İki nehir karışmasın diye yazıyorum: TDV cümlesi 'Tuna' diyor ama Segedin TİSA üzerindedir — kaynağın kendi ifadesini değiştirmedim, ayrımı buraya yazdım. Bu kayıt Tisa geçidi olarak tutuldu; kaynağın Tuna demesi bir sonraki oturumca ayrıca sınanmalı." },

{ ad:"Turnu Severin (Demirkapı) Geçidi", nehir:"Tuna", lat:44.632, lon:22.656,
  tur:"sig-gecit", f:"1281-01-01", t:"1923-10-29", etki_km:10,
  kaynak:"bulunamadı — TDV'de müstakil madde yok; dayanak: Trajan köprüsü ve Demirkapı boğazı için standart akademik literatür (ör. Şerban & Popescu, Danube Iron Gates historical navigation çalışmaları)",
  not:"Tuna'nın Demirkapı boğazından çıktığı yer; Roma'nın Trajan köprüsü (MS 105) buradaydı ve ayakları Osmanlı döneminde de görülüyordu. ⚠️ Osmanlı devrinde ayakta bir köprü YOK ⇒ `sig-gecit`. Koordinat: Turnu Severin yerleşim kaydı (44,632/22,656)." },

// ─────────────── SAVA · DRAVA · DRİNA · NERETVA · VARDAR ───────────────
{ ad:"Böğürdelen (Šabac) Geçidi", nehir:"Sava", lat:44.750, lon:19.694,
  tur:"kale-cifti", f:"1476-02-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"bogurdelen\" md. — gövde okundu",
  not:"TDV: '1475 sonlarına doğru başlayan kuşatma 1476 ŞUBATINDA kalenin ele geçirilmesiyle sonuçlandı.' Kale Sava'nın güney yakasında, Sirem'e geçişi tutar. ⚠️ Köprüye dair cümle BULUNAMADI ⇒ `kale-cifti`, `kopru` DEĞİL. f: 1476 Şubat (TDV gün vermiyor)." },

{ ad:"Ösek Köprüsü (Sultan Süleyman Köprüsü)", nehir:"Drava", lat:45.554, lon:18.695,
  tur:"kopru", f:"1566-01-01", t:"1687-08-12", etki_km:30,
  kaynak:"bulunamadı (TDV'de `osek` ve `osijek` slugları ÖLÜ, `ösek` maddesi YOK); TDV \"varadin\" md. Ösek Kalesi'ni anıyor; dayanak: Hegyi Klára ve Ágoston Gábor'un Osmanlı Macaristan'ı üzerine hakemli çalışmaları",
  not:"Kanûnî'nin Zigetvar seferi (1566) için Drava bataklığı üzerine kurulan uzun ahşap köprü. ⚠️ TDV'de MÜSTAKİL MADDESİ YOKTUR — bunu gizlemiyorum. TDV `varadin` gövdesi 1687'de 'Ösek Kalesi'ne bir miktar asker bırakıp' diyerek yerin varlığını teyit ediyor ama köprüyü anmıyor. f: 1566 (Zigetvar seferi yılı; gün TDV'de yok). t: 12 Ağustos 1687 Mohaç bozgunu, Osmanlı Slavonya'dan çekildi." },

{ ad:"Drina Köprüsü (Sokollu Mehmed Paşa Köprüsü)", nehir:"Drina", lat:43.783, lon:19.288,
  tur:"kopru", f:"1577-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"drina-koprusu\" md. — gövde okundu",
  not:"TDV: kitâbesinde 'Bârekallāh aceb cisr-i kebîr ü eltâf-sene 985 (1577-78)'; 'Köprünün mimarı Hassa Başmimarı SİNAN'dır… Tezkiretü'l-ebniye'de köprü anılmaktadır… 179 m.' Bosna'yı Sırbistan'a bağlayan ana geçit. f: 985 hicrî = 1577-78, gün bilinmiyor ⇒ YYYY-01-01 (§4)." },

{ ad:"Mostar Köprüsü (Stari Most)", nehir:"Neretva", lat:43.343, lon:17.808,
  tur:"kopru", f:"1566-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"mostar-koprusu\" md. — gövde okundu",
  not:"TDV: 'hem Osmanlı kaynaklarında hem günümüzdeki Batı kaynaklarında köprünün 974'te (1566-67) tamamlandığı görüşü hâkimdir… Mimar Hayreddin'in eseri… Neretva nehrinin EN DERİN VE EN DAR YERİNE kurulan köprü tek gözlü.' 🟢 VE BU KAYIT `f` TARTIŞMASININ CANLI ÖRNEĞİ: TDV aynı maddede 'XV. yüzyılın ikinci yarısında Osmanlılar'ın fethettiği şehir TAHTADAN BİR KÖPRÜ ETRAFINDA KURULDUĞU için buraya Most (köprü)… deniliyordu' diyor — yani 1566'dan ÖNCE de geçiliyordu. Şartname §3'ün 'geçit köprüden eskidir' kuralının birebir vakası." },

{ ad:"Köprülü (Veles) Köprüsü", nehir:"Vardar", lat:41.716, lon:21.775,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"koprulu\" md. — gövde okundu",
  not:"TDV: 'Bylazora adının sonundaki \"ora\"… eski İlirya dilinde (ure) KÖPRÜ anlamına gelir. İsmin sonundaki bu kelime Antik dönemden itibaren Vardar nehri üzerinde bir köprünün bulunduğunu gösterir… Köprüyü koruma ve onarma görevi… OTUZ HIRİSTİYAN AİLESİNE vergi kolaylığı karşılığında verilmişti… Kâtib Çelebi ve Evliya Çelebi'nin taştan ve sağlam diye bahsettiği köprü.' 🟢 Şehrin ADI köprüden geliyor — 'geçit-şehir ilkesi'nin (Oxford/Frankfurt) Balkan karşılığı. f: köprü antik, 1281 = atlas penceresinin başı. Koordinat: Veles (yerleşim verisinde kayıt YOK — standart coğrafî koordinat)." },

// ─────────────── MERİÇ · ERGENE · TUNCA ───────────────
{ ad:"Uzunköprü (Cisr-i Ergene)", nehir:"Ergene", lat:41.267, lon:26.688,
  tur:"kopru", f:"1443-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"uzunkopru--ergene\" md. — gövde okundu",
  not:"TDV: 'Âşıkpaşazâde'ye… göre 829 (1426)… yapımına başlanmış ve 847'de (1443) TAMAMLANMIŞTIR… 174 GÖZDEN meydana gelen köprüde en büyük kemer açıklığı 14 metreyi bulmaktadır… II. Murad ve beraberindekilerle birlikte açılışı yapılan.' 1392 m uzunluğunda. 🟢 Şehrin adı köprüden gelir (eski adı Ergene / Cisr-i Ergene). f: 847 h. = 1443, gün yok. ⚠️ Slug tuzağı: `uzunkopru` ÖLÜ, doğrusu `uzunkopru--ergene` — `§4`in `--sehir/--ulke` desenine yeni bir üye." },

{ ad:"Cisr-i Mustafa Paşa (Svilengrad) Köprüsü", nehir:"Meriç", lat:41.766, lon:26.207,
  tur:"kopru", f:"1529-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"meric\" md. — gövde okundu",
  not:"TDV `meric`: 'Bulgaristan'ın Svilengrad şehri Osmanlı dönemindeki adını Meriç üzerine yapılan CİSR-İ MUSTAFA PAŞA'dan… almıştır.' 🟢 İkinci 'adını köprüden alan şehir' vakası. ⚠️ Köprünün İNŞA TARİHİ TDV `meric` maddesinde YOK; `cisr-i-mustafa-pasa` ve `svilengrad` slugları ÖLÜ. f:1529 Çoban Mustafa Paşa'nın banilik dönemine dayandırıldı ve BU BİR TAHMİNDİR — gün/yıl kesinliği yok, sonraki oturum doğrulasın. Koordinat: Mustafapaşa (Svilengrad) yerleşim kaydı." },

{ ad:"Edirne Meriç–Tunca Köprüleri", nehir:"Meriç", lat:41.677, lon:26.556,
  tur:"kopru", f:"1361-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"meric\" md. — gövde okundu",
  not:"TDV: 'Meriç Tunca ile birlikte Edirne'nin mimarisini de etkilemiş ve âdeta buraya KÖPRÜLER ŞEHRİ dedirtecek kadar çok sayıda köprü yapılmasına yol açmıştır… Osmanlı döneminin Rumeli'deki ünlü \"orta yol\"u Edirne'den ötede Meriç vadisini izliyor.' Rumeli'nin ana yol düğümü. f: Edirne'nin fethi (1361; gün ihtilaflı, YYYY-01-01 yazıldı §4)." },

{ ad:"Dimetoka Köprübaşı Geçidi", nehir:"Meriç (Kızıldeli kolu)", lat:41.348, lon:26.497,
  tur:"kopru", f:"1361-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"dimetoka\" md. — gövde okundu",
  not:"TDV mahalle listesinde 'KÖPRÜBAŞI' mahallesi var (76 müslüman · 84 gayri müslim erkek nüfus) ve 'Köprübaşı Mescidi minaresinin bir kısmı' ile 'XV. yüzyıla ait KÖPRÜBAŞI CAMİİ' günümüzde de mevcut. ⚠️ Köprünün kendisi anlatılmıyor, VARLIĞI mahalle ve cami adından çıkarılıyor — bu bir ÇIKARIMDIR, ölçüm değil (`§11 B10`). etki_km köprü olduğu hâlde 20 verildi: Meriç'in ana yatağı değil kolu." },

{ ad:"Ferecik İskelesi Geçidi", nehir:"Meriç", lat:40.897, lon:26.172,
  tur:"feribot", f:"1358-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"ferecik\" md. — gövde okundu",
  not:"TDV: '1553'te burayı gören Fransız seyyahı Pierre Belon… ayrıca NEHİR KIYISINDAKİ BİR İSKELEDEN ve MERİÇ'TE GEZEN TEKNELERDEN de söz eder.' ⇒ tekne var, köprü yok ⇒ `feribot`. f: Âlî'ye göre 759 (1358) fethi. Karşı yakasında İpsala — ölçtüğüm 14 kardeş çiftten biri (17,85 km)." },

// ─────────────── TURLA (Dinyester) · PRUT · ÖZİ (Dinyeper) · DON · İDİL ───────────────
{ ad:"Hotin Geçidi", nehir:"Turla (Dinyester)", lat:48.510, lon:26.492,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"hotin\" md. — gövde okundu",
  not:"TDV: 'Hotin ayrıca, Orta Avrupa'dan ve Baltık'tan gelip İstanbul'a uzanan tarihî ticaret yolları üzerinde ÖNEMLİ BİR GEÇİT YERİ durumundaydı… Buranın karşısında TURLA ÜSTÜNDE BİR KÖPRÜ KURULDU (İzvança/Zuravno).' ⚠️ O köprü SEFER köprüsüdür (1676 Zurawno), kalıcı değil ⇒ `kale-cifti`. 🟢 Hotin `CLAUDE.md §3`ün 'Boğdan voyvodalıktır ama Hotin rayası doğrudan Osmanlı'dır' vakasının ta kendisi — yani bu geçidin siyasî değeri belgede zaten yazılı." },

{ ad:"Bender (Tighina) Geçidi", nehir:"Turla (Dinyester)", lat:46.831, lon:29.481,
  tur:"kale-cifti", f:"1538-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"tuna\" md. — gövde okundu",
  not:"TDV `tuna`: '1538'de Boğdan seferi neticesinde bu vasal prensliğin güneydoğu kısmının yanı sıra TİGHİNA (BENDER) KALESİ dahil Bucak'ın Osmanlı Devleti'ne katılmasıyla KIRIM TATAR ATLILARINA BAHÇESARAY İLE BUDİN ARASINDA BİR KORİDOR AÇILMIŞTI.' 🔴 Bu cümle bir geçit kaydından fazlasıdır: bir KORİDORUN kilit taşı. f: 1538 (gün yok). ⚠️ TDV `bender` slugu Osmanlı kalesini DEĞİL, İran liman şehirlerini açıyor (`bender-abbas` vb.) — `§4 ②` tuzağı, kaydı `tuna` maddesinden aldım." },

{ ad:"Akkirman Geçidi", nehir:"Turla ağzı (Dinyester limanı)", lat:46.197, lon:30.343,
  tur:"feribot", f:"1484-08-05", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"akkirman\" md. ve TDV \"isakca\" md. — ikisinin de gövdesi okundu",
  not:"TDV `isakca`: 'II. Bayezid 889'da (1484) İsakça'dan Tuna'yı geçerek Kili ve AKKİRMAN'ı almıştı.' ⚠️ Burası nehir GEÇİDİ değil LİMAN AĞZIDIR ve bunu açıkça yazıyorum: Dinyester burada haliçtir, karşıya geçiş tekneyledir ⇒ `feribot`. f: Akkirman'ın fethi 5 Ağustos 1484 (yaygın kabul). Kaydın kendisi tartışmalı olabilir — sonraki oturum 'bu bir geçit mi liman mı' diye sorsun." },

{ ad:"Prut Köprüsü (Mimar Sinan, Karaboğdan seferi)", nehir:"Prut", lat:47.160, lon:27.800,
  tur:"kopru", f:"1538-01-01", t:"1538-12-31", etki_km:30,
  kaynak:"TDV \"kopru\" md. — gövde okundu",
  not:"TDV: 'Kanûnî Sultan Süleyman'ın KARABOĞDAN SEFERİNDE (1538) ordunun AĞIRLIKLARIYLA BİRLİKTE PRUT NEHRİNİ GEÇEBİLMESİ için MİMAR SİNAN'ın yaptığı muhkem AHŞAP KÖPRÜ çok beğenilmiş ve sonradan kendisinin MİMARBAŞILIĞA TAYİNİNE sebep olmuştur.' 🔴 BU KAYIT VERİ DEĞİL, KALİBRASYONDUR: `kopru` kademesinin 'ordu ve ağırlık geçer' tanımının kaynağı budur. ⚠️ Köprü SEFERLİKTİR — `f` ve `t` aynı yıl, kalıcı değil. Koordinat YAKLAŞIKTIR: TDV yeri vermiyor, Yaş'ın doğusunda Prut hattına konuldu (47,16/27,80). Bu bir TAHMİNDİR." },

{ ad:"Özi (Oçakov) Geçidi", nehir:"Özi (Dinyeper) ağzı", lat:46.625, lon:31.542,
  tur:"feribot", f:"1492-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"ozu\" md. — gövde okundu",
  not:"TDV: 'kalenin önünde BİR İSKELESİ bulunduğu, KÜÇÜK BİR FİLONUN bu sularda görev yaptığı, Akkirman, Kili ve İsmâil'e buradan mal taşındığı bilinmektedir.' ⚠️ Yine haliç/liman — Dinyester-Akkirman kaydıyla aynı çekince geçerli. f: kalenin kuruluşu (1492, gün yok)." },

{ ad:"Azak Geçidi", nehir:"Ten (Don) ağzı", lat:47.113, lon:39.423,
  tur:"feribot", f:"1475-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"azak\" md. — gövde okundu",
  not:"⚠️ TDV `azak` gövdesinde geçit/köprü cümlesi BULUNAMADI; yalnız '1711'de… Prut zaferinden sonra Azak'taki donanma imha edildi' geçiyor — yani su ulaşımı var, karşıya geçiş kaydı yok. Kayıt Don ağzının konumuna dayanıyor ve ZAYIFTIR; sonraki oturum çürütebilir." },

{ ad:"Ejderhan (Astrahan) Geçidi", nehir:"İdil (Volga) deltası", lat:46.348, lon:48.033,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV'de `ejderhan` ve `astrahan` slugları ÖLÜ; dayanak: standart akademik literatür (Volga deltası ve Hazar ticaret yolu çalışmaları)",
  not:"İdil deltası; karşıya geçiş kayık ve salla. ⚠️ TDV maddesi ARANDI, BULUNAMADI — iki slug da ölü, `§4`in 'aramadan yok deme' kuralı uygulandı ve sonuç yine yok. Bu bir SONUÇTUR, uydurmaktan iyidir." },

// ─────────────── FIRAT ───────────────
{ ad:"Birecik Geçidi", nehir:"Fırat", lat:37.026, lon:37.977,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"birecik\" md. ve TDV \"firat\" md. — ikisinin de gövdesi okundu",
  not:"🔴 `feribot` KADEMESİNİN SAYILI DAYANAĞI BU KAYITTIR. TDV `birecik`: 'İskele emini nehir ulaşımının sağlandığı KELEK VE MAUNA gemilerinin idaresine bakıyordu… Birecik'te iskele hizmetinde bulunanların sayısı, 1552'de beşi reis, ikisi neccâr ve otuz sekizi kürekçi olmak üzere KIRK BEŞ; 1570'te ise altısı reis, üçü neccâr ve elli dördü kürekçi olmak üzere ALTMIŞ ÜÇ kişi idi… Kuzey Suriye'den Mezopotamya'ya yapılan kervan ticaretinin GEÇİT NOKTASI üzerinde bulunduğundan.' TDV `firat`: 'Birecik Köprüsü'nün inşasından ÖNCE Gaziantep'i Urfa'ya bağlayan yol burada KESİNTİYE UĞRAR, taşıtlar ve yolcular BASİT SALLARLA (KELEK) karşı kıyıya ulaşırlardı.' ⇒ atlas dönemi boyunca köprü YOK; ilk köprü 1956. Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat." },

{ ad:"Rakka Köprüsü", nehir:"Fırat", lat:35.953, lon:39.008,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"rakka\" md. — gövde okundu",
  not:"TDV: 'Abdülmelik, Fırat'ın KARŞI KIYISINA iki sarayla NEHRİN ÜZERİNE BİR KÖPRÜ yaptırdı.' ⚠️ Bu köprü EMEVÎ devrindendir (VII-VIII. yy) ve TDV onun atlas döneminde ayakta olup olmadığını SÖYLEMİYOR — kayıt `f:1281` ile atlas penceresine açıldı ama bu bir VARSAYIMDIR. Ayrıca Moğol tahribatı (1258 sonrası) anlatılıyor. 🔴 Sonraki oturum bunu ÇÜRÜTEBİLİR; kademe `feribot`a düşebilir." },

{ ad:"Rumkale Geçidi", nehir:"Fırat", lat:37.278, lon:37.859,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"firat\" md. — gövde okundu",
  not:"TDV: 'Fırat, doğu kıyısı boyunda uzanan ÇOK DİK YAMAÇLI BİR KAYA SIRTI üzerine inşa edilmiş olan RUMKALE'nin de (sonraki dönemlerde Kal'atü'l-müslimîn) eteklerinden geçer.' Kale geçidi tutar; geçişin kendisi teknedir. Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat, Halfeti yakını." },

{ ad:"Cerablus (Karkamış) Geçidi", nehir:"Fırat", lat:36.825, lon:38.014,
  tur:"sig-gecit", f:"1281-01-01", t:"1923-10-29", etki_km:10,
  kaynak:"bulunamadı — TDV'de `cerablus`, `karkamis`, `rum-kalesi` slugları ÖLÜ; dayanak: Karkamış/Cerablus geçidi için standart Yakındoğu tarihî coğrafya literatürü",
  not:"Fırat'ın Anadolu'dan Suriye'ye çıktığı klasik geçit; Hitit-Asur devrinden beri kullanılıyor. ⚠️ TDV maddesi ARANDI, YOK. Koordinat: Cerablus yerleşim kaydı (36,825/38,014)." },

// ─────────────── DİCLE ───────────────
{ ad:"Cizre (Bâzabdâ) Geçidi", nehir:"Dicle", lat:37.330, lon:42.190,
  tur:"kale-cifti", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"cizre\" md. — gövde okundu",
  not:"🔴 EN AÇIK GEÇİT KAYDI. TDV: 'Cizre'nin bulunduğu yörede, eski çağlarda Bâzabdâ Kalesi adı verilen bir kale ve bu kalenin yakınında da DİCLE NEHRİ ÜZERİNDE BİR GEÇİT YERİ vardı… Anadolu'yu Kuzey Mezopotamya'ya bağlayan, BÜYÜK İSKENDER'İN DE DİCLE'Yİ AŞARKEN KULLANDIĞI bu ÖNEMLİ GEÇİT NOKTASINI kontrol eden… Bâzabdâ Kalesi.' Ayrıca 'Sâsânîler döneminden kaldığı sanılan KÖPRÜNÜN KALINTILARI' ve Artuklu eseri 'Cizre Köprüsü' anılıyor. ⚠️ Artuklu köprüsünün atlas döneminde ayakta olduğu TDV'de yazmıyor ⇒ ihtiyatla `kale-cifti`, `kopru` DEĞİL. Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat." },

{ ad:"Diyarbakır (Âmid) On Gözlü Köprüsü", nehir:"Dicle", lat:37.911, lon:40.237,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"diyarbakir\" md. — gövde okundu",
  not:"TDV: 'Nasrüddevle'nin uzun süren saltanatı esnasında (1021-1061)… DİCLE KÖPRÜSÜ yaptırıldı' ve 'Buradaki önemli eserler arasında, DİCLE ÜZERİNDEKİ ON GÖZLÜ KÖPRÜ ile (1064-1065) bu köprüye bakan Gazi Köşkü sayılabilir.' Mervânî eseri, atlas dönemi boyunca ayakta. f: köprü 1064-65'te yapıldı, yani atlas penceresinden ÖNCE ⇒ 1281 = pencerenin başı." },

{ ad:"Musul Geçidi", nehir:"Dicle", lat:36.340, lon:43.130,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"dicle\" md. — gövde okundu",
  not:"TDV `dicle`: 'Dicle'nin ulaşımdaki rolü… Diyarbakır'dan MUSUL'a kadar KELEK VE KAYIKLAR, Musul'dan sonra dibi düz ırmak taşıtları ve Bağdat'tan sonra vapurlarla devam etmiştir.' ⚠️ TDV `musul` slugu ÖLÜ (`el-musul` · `musul--sehir` de denendi, ikisi de ölü) — kayıt `dicle` maddesinden alındı. `§4`: aradım, yok." },

{ ad:"Bağdat Köprüleri", nehir:"Dicle", lat:33.340, lon:44.361,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"bagdat\" md. — gövde okundu",
  not:"TDV: 'Hârûnürreşîd devrinde Bağdat'ta ÜÇ TANE KÖPRÜ vardı… 997'de Bahâüddevle Sûkusselâsâ'da ÜÇÜNCÜ BİR KÖPRÜ inşa etti… Köprüleri ve rıhtımları yeniden inşa ettirdi. Merkez köprüyü dar ve yıkılmaya meyyal gördü ve onu yenileyip genişletti. İbn Havkal, biri kullanılmayan İKİ KÖPRÜ gördüğünü ifade eder.' Bağdat köprüleri TOMBAZDIR (kayık üstü), taş değil — bu yüzden sık yenileniyor. Kademe yine de `kopru`: kalıcı hizmet ve ordu geçirir." },

// ─────────────── SEYHAN · CEYHAN · KIZILIRMAK · YEŞİLIRMAK · SAKARYA ───────────────
{ ad:"Adana Taşköprü", nehir:"Seyhan", lat:37.000, lon:35.321,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"adana\" md. — gövde okundu",
  not:"TDV: 'Seyhan üzerindeki Taşköprü'nün, Iustinianos tarafından muhtemelen aynı yerde YİRMİ BİR GÖZLÜ olarak yeniden yaptırıldığı (VI. yy)… çeşitli dönemlerde tamir görmüş.' Çukurova'nın ana geçidi; Halep-Anadolu yolunun düğümü. f: köprü VI. yy, 1281 = pencerenin başı." },

{ ad:"Misis (Mopsuestia) Köprüsü", nehir:"Ceyhan", lat:36.958, lon:35.625,
  tur:"kopru", f:"1281-01-01", t:"1832-01-01", etki_km:30,
  kaynak:"TDV \"misis\" md. — gövde okundu",
  not:"TDV: 'Misis yakınında Ceyhan üzerinde Bizans İmparatoru BÜYÜK KONSTANTİNOS'un yaptırdığı köprü, 1736'da orta kemerinin yıkılıp kullanılmaz hale gelmesi üzerine 1766 yılında ONARILDI. Köprü 1832'de… İbrâhim Paşa kumandasındaki Mısır kuvvetlerine karşı Belen'de savaşan Osmanlı ordusu tarafından TAHRİP EDİLDİ.' Ayrıca Mervân 125 (743) yılında 'Adana ile Misis arasında VELÎD KÖPRÜSÜ'nü yaptırdı'. 🔴 t: 1832 — köprü Osmanlı ordusunca kendi elleriyle yıkıldı; kesin bir kapanış tarihi (gün TDV'de yok). Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat (Yakapınar)." },

{ ad:"Osmancık Koyunbaba Köprüsü", nehir:"Kızılırmak", lat:40.980, lon:34.800,
  tur:"kopru", f:"1489-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"osmancik\" md. — gövde okundu",
  not:"🟢 KADEME GEÇİŞİNİN EN TEMİZ VAKASI. TDV: 'Kızılırmak nehrinin Tosya-Merzifon yoluyla kesiştiği ÖNEMLİ BİR GEÇİŞ NOKTASINDA… Kasabanın iki kısmını birleştiren… Koyun Baba… KIZILIRMAK ÜZERİNDEKİ TAHTA KÖPRÜNÜN YERİNE bir köprünün inşasını vaad eden II. Bayezid'in tahta geçişinden sonra yaptırıldığı kayıtlıdır… köprü 894 (1489) yılında TAMAMLANMIŞTIR.' ⇒ 1489 ÖNCESİ tahta köprü VARDI. Şartname §3'ün 'geçit köprüden eskidir' kuralı burada belgeyle görünüyor: kayıt 1489'da `kopru`ya YÜKSELİYOR, ondan önce de geçiliyordu." },

{ ad:"Çeşnigir Köprüsü", nehir:"Kızılırmak", lat:39.796, lon:33.586,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı — TDV'de `cesnigir` ve `cesnigir-koprusu` slugları ÖLÜ; dayanak: Cevdet Çulpan, Türk Taş Köprüleri (TTK, Ankara 1975) — TDV'nin `aras` ve `uzunkopru--ergene` maddelerinin de dayandığı standart eser",
  not:"Ankara-Kırşehir yolunun Kızılırmak geçidi; Selçuklu devrinden. ⚠️ TDV maddesi ARANDI, YOK. Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat (Kırıkkale, Kesikköprü kuzeyi)." },

{ ad:"Amasya Yeşilırmak Köprüleri", nehir:"Yeşilırmak", lat:40.650, lon:35.833,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"TDV \"amasya\" md. — gövde okundu",
  not:"TDV: 'şehrin ortasından geçen Yeşilırmak üzerinde BİR TAHTA, ÜÇ DE TAŞ KÖPRÜ mevcuttu.' ⚠️ Bunlar ŞEHİR İÇİ köprülerdir — Silistre'nin yedi tahta köprüsü gibi. Ama Amasya'da nehir şehrin ortasından geçtiği için şehir içi köprü AYNI ZAMANDA nehir geçididir; Silistre'de değildi (orada Tuna şehrin YANINDAN geçer). İki vakayı ayıran şey bu; ayrımı yazıyorum ki kural sanılmasın. etki_km 20: vadi dar." },

{ ad:"Geyve (Justinianus / Beşköprü) Geçidi", nehir:"Sakarya", lat:40.508, lon:30.288,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı — TDV'de `geyve`, `geyve--ilce`, `justinianus-koprusu`, `bes-kopru`, `sangarios` slugları ÖLÜ; TDV \"sakarya\" md. gövdesinde köprü/geçit cümlesi YOK; dayanak: Justinianus'un Sangarius Köprüsü için Prokopios, De Aedificiis V.3 ve standart Bizans mimarlık literatürü",
  not:"⚠️ TDV BU GEÇİDİ HİÇ KONUŞMUYOR — beş slug denendi, beşi de ölü, `sakarya` maddesinde tek cümle yok. Bu, `CLAUDE.md §4`ün TANECİKLİK boşluğu vakası: TDV bölgeyi görüyor ama bu tanecikte susuyor. 🟢 VE ÖLÇÜMÜM BU KAYDI DESTEKLİYOR: Geyve↔Mekece kardeş çiftinin ortak sınırı nehre ORTALAMA 0,99 km — ölçtüğüm 14 çiftin EN İYİSİ. Yani motor burada zaten doğru davranıyor. Koordinat: Geyve yerleşim kaydı." },

// ─────────────── ARAS · KÜR ───────────────
{ ad:"Çobandede Köprüsü", nehir:"Aras", lat:40.021, lon:41.750,
  tur:"kopru", f:"1298-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"aras\" md. — gövde okundu",
  not:"🔴 `kopru` KADEMESİNİN SAYILI DAYANAĞI BU KAYITTIR. TDV: 'İlhanlılar zamanında vezir Emîr Çoban tarafından 1297 yılında yaptırılan… YEDİ KEMERLİ (1878'den beri altı kemerli) taş köprü… inşası 2,5 YIL SÜREN, muazzam köprü… Bu tarihî köprü daha sonra BİRÇOK ASKERÎ BİRLİĞİN savaş sırasında faydalandığı bir yol teşkil etmiştir. Meselâ TİMUR'a ait kuvvetler bu köprüden geçtiği gibi Akkoyunlu emîrlerinin bu köprü yakınında savaştıkları da bilinmektedir. EVLİYA ÇELEBİ, zamanındaki doğu seferinde ASKERİN BU KÖPRÜDEN GEÇİŞİNİN ÜÇ GÜN SÜRDÜĞÜNÜ söyler… IV. Murad'ın Revan seferinde (1635)… Çobandede Köprüsü YENİDEN ONARILMIŞ.' ⇒ 'Köprü bile bedava değil, ama ordu geçer' hükmünün kaynağı. f: yapımına 1297'de başlandı, 2,5 yıl sürdü ⇒ 1298/1300 civarı; TDV kesin bitiş yılı vermiyor, 1298-01-01 yazıldı ve BU BİR YAKLAŞTIRMADIR. Koordinat: yerleşim verisinde kayıt YOK — Pasinler ovası, standart coğrafî koordinat." },

{ ad:"Nahçıvan Gemi Köprüsü Geçidi", nehir:"Aras", lat:39.209, lon:45.412,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"aras\" ve \"nahcivan\" md. — ikisinin de gövdesi okundu",
  not:"TDV `aras`: Tuğrul Bey 'Mart 1064'te… Nahcıvan'a ulaştı ve ordusunun bu noktadan Aras nehrinin KARŞI YAKASINA GEÇİŞİNİ SAĞLAMAK İÇİN GEMİLERDEN (bazı kaynaklara göre KAYIKLARDAN) KURDURDUĞU BİR KÖPRÜDEN faydalandı.' TDV `nahcivan`: 'Moğollar'ın istilâsının ardından han, çarşı, kervansaray, ARAS NEHRİ ÜZERİNDEKİ KÖPRÜLER YIKILIP ORTADAN KALKMIŞ.' 🔴 İKİNCİ CÜMLE BİRİNCİYİ SINIRLIYOR: köprüler Moğol istilâsında (XIII. yy) yıkıldı ⇒ atlas döneminde (1281+) taş/sürekli köprü YOK ⇒ kademe `kopru` DEĞİL `feribot`. Kaynağın kendi metni kademeyi düşürdü." },

{ ad:"Culfa Geçidi", nehir:"Aras", lat:38.955, lon:45.630,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV'de `culfa`, `cufa`, `culfa--sehir` slugları ÖLÜ; dayanak: Safevî-Osmanlı ticaret yolları üzerine standart akademik literatür (ör. Rudi Matthee, The Politics of Trade in Safavid Iran, Cambridge Univ. Press 1999)",
  not:"İran ipek ticaretinin Aras geçidi; Şah Abbas'ın 1604'te Culfa halkını İsfahan'a sürmesi (Yeni Culfa) buranın önemini gösterir. ⚠️ TDV maddesi ARANDI, YOK. Koordinat: Culfa yerleşim kaydı (38,955/45,630)." },

{ ad:"Tiflis (Metehi) Köprüsü", nehir:"Kür (Kura)", lat:41.716, lon:44.783,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"tiflis\" md. — gövde okundu",
  not:"TDV: 'Şehrin doğusunda KÜR IRMAĞI ÜZERİNDE İNŞA EDİLMİŞ KÖPRÜYLE ufak bir kale olan soldaki METEHİ'ye ulaşıldığını… yazar.' Kafkasya'nın ana geçidi. ⚠️ TDV `kura` slugu Kür nehrini DEĞİL, 'kur'a/falcılık' maddesini açıyor — `§4 ②` tuzağının bir üyesi daha (`ordu` · `saray` · `cin` · `bender` ailesi). Nehir kaydı `tiflis` maddesinden alındı." },

// ─────────────── NİL ───────────────
{ ad:"Kahire–Cîze Geçidi", nehir:"Nil", lat:30.047, lon:31.243,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"TDV \"kahire\" md. — gövde okundu",
  not:"TDV: 'Zaman içerisinde yapılan MUHTELİF KÖPRÜLERLE Fustat'a bağlanan CÎZE her zaman tarihî ve kültürel önemini korudu… Cîze yolundaki İKİ KÖPRÜNÜN üzerinde bulunan Karakuş adına yazılmış kitâbeler bunların da SELÂHADDİN dönemine ait olduğunu göstermektedir… Kalavun'un, 883-885'te (1478-1480) Kayıtbay'ın ve 1087'de (1676) Hüseyin Paşa'nın adlarını taşıyan TAMİR KİTÂBELERİ bulunan İKİ KÖPRÜ KALMIŞTIR.' 🟢 Tamir kitâbeleri 1480 ve 1676 — yani köprüler atlas dönemi boyunca AYAKTA, bu kayıt sağlam." },

{ ad:"Asvan Geçidi", nehir:"Nil", lat:24.089, lon:32.899,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"asvan\" md. — gövde okundu",
  not:"TDV: 'İslâm'ın ilk devirlerinden itibaren Sudan'dan hacca gidenler ASVAN'DAN KALKIP ÇÖLÜ GEÇEREK Ayzâb'a varırlar, oradan da gemiyle Cidde'ye ulaşırlardı.' ⇒ Asvan bir yol düğümü ve Nil geçişi tekneyle. ⚠️ Köprüye dair cümle YOK ⇒ `feribot`." },

// ─────────────── NİJER ───────────────
{ ad:"Kabara (Tinbüktü) İskelesi Geçidi", nehir:"Nijer", lat:16.700, lon:-3.020,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"tinbuktu\" md. — gövde okundu",
  not:"TDV: 'Şehir, eski kervan yolları üzerindeki ulaşım merkezi olma özelliğini yitirmiş olsa da NEHİR ULAŞIMI (İSKELESİ OLAN KABARA ŞEHRİ VASITASIYLA) açısından önemini sürdürmektedir.' Tinbüktü Nijer'in ~15 km kuzeyindedir; nehir limanı Kabara'dır ve geçit oradadır. Koordinat Kabara'ya konuldu (Tinbüktü'nün kendi kaydı 16,775/-3,009). ⚠️ Köprü YOK — Nijer'de atlas dönemi boyunca köprü yoktur." },

{ ad:"Gao Geçidi", nehir:"Nijer", lat:16.272, lon:-0.040,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV \"gao\" md. gövdesi OKUNDU ama geçit/köprü cümlesi YOK; dayanak: Songay İmparatorluğu ve Nijer nehir ulaşımı üzerine standart akademik literatür (ör. John O. Hunwick, Timbuktu and the Songhay Empire, Brill 1999)",
  not:"Songay'ın başkenti, Nijer'in doğu dirseğinde. ⚠️ TDV maddesi okundu, geçit anlatılmıyor — bu bir TANECİKLİK boşluğudur (`§4`), coğrafî değil: TDV Gao'yu görüyor ama nehir geçişini konuşmuyor. Koordinat: Gao yerleşim kaydı." },

{ ad:"Cenne (Djenné) Geçidi", nehir:"Bani (Nijer kolu)", lat:13.906, lon:-4.555,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV'de müstakil geçit kaydı yok; dayanak: Hunwick, Timbuktu and the Songhay Empire (Brill 1999) ve Cenne-Ceno kazı literatürü",
  not:"Cenne bir ADA ŞEHRİDİR — Bani ve Nijer'in taşkın ovasında, yılın bir kısmında suyla çevrili. ⇒ Karşıya geçiş yıl boyu tekneyle. ⚠️ TDV geçidi konuşmuyor. Koordinat: Cenne yerleşim kaydı." },

// ─────────────── CEYHUN (Amuderya) · İNDUS · GANJ ───────────────
{ ad:"Tirmiz Geçidi", nehir:"Ceyhun (Amuderya)", lat:37.224, lon:67.278,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"tirmiz\" md. — gövde okundu",
  not:"TDV: 'Burası aynı zamanda nehri takip ederek Hârizm ülkesinden Aral gölüne doğru geçen TİCARET GEMİLERİ VE BALIKÇI KAYIKLARININ LİMANI olmuştur… KAYIKLARLA KÖPRÜ KURARAK Ceyhun nehri ortasında yer alan Cezîretü Osman adasına ulaştı.' 🔴 Mâverâünnehir ile Horasan arasındaki ANA geçit — Ceyhun'un tarihî sınır oluşu tam buradan geçer. ⚠️ Kalıcı köprü yok (ilk köprü 1982 Hayratan). Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat. 🟢 DÜZELTME: bu kaydın ilk hâlinde 'Amuderya motorun nehir verisinde YOK, bu kayıt sınanamaz' yazıyordu ve YANLIŞTI. Sebep bir ad eşleşmesiydi: verideki ad `Amu  Darya` — ÇİFT BOŞLUKLU. 'Amu Darya' diye arayınca bulamadım. Ölçtüm: nehir motorun süzgecinden GEÇİYOR (scalerank 5) ve bu geçit ona 3 km uzakta ⇒ kayıt SINANABİLİR. `CLAUDE.md §11`: ölçüm doğruydu, EVRENİ dardı." },

{ ad:"Kerki Geçidi", nehir:"Ceyhun (Amuderya)", lat:37.836, lon:65.203,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV'de `kerki` ve `kerki--sehir` slugları ÖLÜ; TDV \"ceyhun\" ve \"amuderya\" md. gövdeleri OKUNDU, geçit cümlesi YOK; dayanak: Buhara Hanlığı ve Ceyhun geçitleri üzerine standart Orta Asya tarihî coğrafya literatürü",
  not:"Buhara'dan Belh'e giden yolun Ceyhun geçidi. ⚠️ TDV `amuderya` maddesinin gövdesi neredeyse BOŞ (yalnız bir görsel başlığı: 'Amuderya'da kayıklar') — `§4 ④` boilerplate/kısa gövde sınıfı. Aradım, yok. 🟢 Nehir motor verisinde VAR (Tirmiz kaydındaki ad-eşleşmesi düzeltmesine bak); bu geçit motorun çizdiği yatağa 0 km ⇒ SINANABİLİR." },

{ ad:"Attock (Atak) Geçidi", nehir:"İndus (Sind)", lat:33.766, lon:72.360,
  tur:"kale-cifti", f:"1581-01-01", t:"1923-10-29", etki_km:20,
  kaynak:"bulunamadı — TDV'de `attok` ve `atek` slugları ÖLÜ; TDV \"sind\" md. gövdesi OKUNDU, geçit cümlesi YOK; dayanak: Bâbürlü tarihi üzerine standart akademik literatür (Ekber'in Attock kalesi, 1581)",
  not:"Kâbil-Lahor yolunun İndus geçidi; Ekber Şah 1581'de Attock kalesini tam bu geçidi tutmak için yaptırdı. ⚠️ TDV `sind` maddesi bölgeyi anlatıyor ama geçidi konuşmuyor — TANECİKLİK boşluğu. f: 1581 (kale yılı; gün yok). Koordinat: yerleşim verisinde kayıt YOK — standart coğrafî koordinat." },

{ ad:"Benâres (Vârânasî) Geçidi", nehir:"Ganj", lat:25.317, lon:83.006,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"TDV \"benares\" md. — gövde okundu",
  not:"TDV: 'GANJ NEHRİNİN SOLUNDA bulunan… bu eski şehir, bir Hindu merkezi ve aynı zamanda kutsal bir yerdir.' 🔴 VE BU KAYIT `④` SORUSUNUN CANLI ÖRNEĞİDİR: Benâres kasten TEK YAKADADIR — karşı yaka (Ramnagar tarafı) dinî sebeple boş bırakılmıştır. Yani 'kıyı şehri karşı yakayı alır' ön hükmünün İSTİSNASI var ve sebebi coğrafî değil DİNÎ. Geçiş kayıkla; Ganj'da atlas dönemi boyunca köprü yok. ⚠️ TDV `ganj` ve `ganj--nehir` slugları ÖLÜ." },

{ ad:"Patna (Azîmâbâd) Geçidi", nehir:"Ganj", lat:25.594, lon:85.138,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı — TDV \"patna\" md. gövdesi OKUNDU, geçit/köprü cümlesi YOK; dayanak: Bengal-Bihar nehir ticareti üzerine standart akademik literatür",
  not:"Ganj'ın Bengal'e açılan ana limanı; Bâbürlü devrinde Azîmâbâd. ⚠️ TDV maddesi okundu, geçit anlatılmıyor. Koordinat: Patna yerleşim kaydı." },

// ─────────────── AVRUPA — TDV KAPSAMI DIŞI, AÇIKÇA YAZILI ───────────────
// 🔴 `CLAUDE.md §4` ölçümü: TDV'nin Batı Avrupa kapsaması **%0**. Aşağıdaki
//    beş kayıt için TDV maddesi ARANMADI DEĞİL — kapsamadığı ÖLÇÜLMÜŞ bir
//    coğrafya olduğu için doğrudan akademik dayanağa gidildi (`§4`in izin
//    verdiği yol). Her birinde dayanak AÇIKÇA yazılı.
{ ad:"Paris (Grand Pont / Petit Pont)", nehir:"Sen (Seine)", lat:48.857, lon:2.352,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı (TDV Batı Avrupa'yı kapsamıyor — ölçülmüş oran %0, `CLAUDE.md §4`); dayanak: Marcel Poëte ve sonrası Paris kent tarihi standart literatürü; Île de la Cité köprüleri",
  not:"Paris bir ADA ŞEHRİDİR (Île de la Cité) ve iki köprüsü kuzey-güney geçişini tutar — şehrin var oluş sebebi bu geçittir. `②` tipinin (iki yakaya dağılan şehir) Batı Avrupa örneği." },

{ ad:"Londra Köprüsü", nehir:"Tames (Thames)", lat:51.507, lon:-0.128,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı (TDV Batı Avrupa'yı kapsamıyor); dayanak: Old London Bridge (1209 tamamlandı) üzerine standart İngiliz kent tarihi literatürü",
  not:"Atlas penceresi açıldığında (1281) taş köprü zaten 72 yıldır ayakta. Thames'in en aşağı geçidi — Londra'nın konumunu belirleyen şey budur." },

{ ad:"Köln Geçidi", nehir:"Ren (Rhein)", lat:50.938, lon:6.960,
  tur:"feribot", f:"1281-01-01", t:"1923-10-29", etki_km:15,
  kaynak:"bulunamadı (TDV Batı Avrupa'yı kapsamıyor); dayanak: Ren üzerinde Roma sonrası köprüsüzlük ve Schiffbrücke tarihi üzerine standart Alman kent tarihi literatürü",
  not:"⚠️ ÖNEMLİ VE SEZGİYE AYKIRI: Köln'de Roma köprüsünden sonra Orta Çağ ve erken modern devir boyunca SÜREKLİ KÖPRÜ YOKTUR; geçiş tekne ve tombaz köprüyle olurdu (ilk kalıcı köprü XIX. yy). ⇒ kademe `kopru` DEĞİL `feribot`. Bir 'büyük şehir = köprü vardır' varsayımı burada yanlış olurdu." },

{ ad:"Tuleytula (Toledo) Alcántara Köprüsü", nehir:"Tajo (Tagus)", lat:39.863, lon:-4.028,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı (TDV'de `tuleytula` denenmedi — bu kayıt Endülüs sonrası döneme ait); dayanak: Toledo'nun Roma-İslâm devri köprüleri üzerine standart İber yarımadası kent tarihi literatürü",
  not:"⚠️ KAYNAK ÇEKİNCESİ AÇIK: `tuleytula` slugunu SINAMADIM — sınadığım slug listesinde `toledo` vardı ve o ölüydü. TDV'nin İberya kapsaması %80 ölçülmüş (`§4`), yani madde OLABİLİR. Bir sonraki oturum `tuleytula` slugunu denesin; benim eksiğimdir. Tajo Toledo'da derin bir menderes içinde akar — şehir üç yandan suyla çevrilidir." },

{ ad:"Kurtuba (Córdoba) Roma Köprüsü", nehir:"Vâdilkebîr (Guadalquivir)", lat:37.888, lon:-4.779,
  tur:"kopru", f:"1281-01-01", t:"1923-10-29", etki_km:30,
  kaynak:"bulunamadı — `kurtuba` slugu SINANMADI (eksiğim); dayanak: Endülüs kent tarihi standart literatürü",
  not:"⚠️ Toledo kaydıyla aynı çekince: TDV'nin İberya kapsaması %80'dir ve `kurtuba` maddesi büyük ihtimalle VARDIR — denemedim. Kaydı yazdım ama kaynağı 'bulunamadı' değil 'SINANMADI' diye işaretliyorum; ikisi aynı şey değildir ve karıştırmak `§7.1 ④`ün ihlali olur." }

];

// ═══════════════════════════════════════════════════════════════════════════
// ⚠️ BU DOSYADA OLMAYANLAR — ve niçin (kapsanmayan yeri kapsanmış göstermemek
//    için, `CLAUDE.md §11`: "örneklem dışını temiz ilan etme")
//
//  🔴 AMAZON — `ne_10m_rivers.geojson` verisinin TAMAMINDA yok. Ölçtüm.
//     Kural yazılabilir, SINANAMAZ; kayıt yazmadım.
//  🔴 MİSSOURİ · MİSSİSSİPPİ — veride VARLAR ama atlas PENCERESİNİN dışında
//     kalıyorlar. ⚠️ Bu, Amazon'unkinden BAŞKA bir sebeptir ve ayrımı
//     yazıyorum: pencere büyürse bunlar kendiliğinden canlanır, Amazon
//     canlanmaz — onun için önce VERİ gerekir.
//
//  🟢 AMUDERYA (Ceyhun) — BU SATIRIN İLK HÂLİ YANLIŞTI, düzeltildi.
//     "Motor süzgecinden geçmiyor" yazmıştım; ölçünce GEÇTİĞİ çıktı
//     (scalerank 5). Beni yanıltan şey verideki adın `Amu  Darya` diye
//     ÇİFT BOŞLUKLU yazılmış olmasıydı. ⇒ Tirmiz ve Kerki kayıtları
//     SINANABİLİR. `CLAUDE.md §11`: ölçüm doğru, evren dar.
//
//  🔴 MOTORUN GERÇEK NEHİR DELİKLERİ — ölçtüm, geçit koordinatından
//     motorun çizdiği en yakın yatağa uzaklık:
//        Drina  (Vişegrad)      114 km        Neretva (Mostar)   192 km
//        Tames  (Londra)        228 km        Vâdilkebîr (Kurtuba) 214 km
//        Vardar (Köprülü)        68 km
//     Bu beş nehir motorun süzgecinden GEÇMİYOR; kayıtları yazdım ama
//     bugün SINANAMAZLAR. ⚠️ Ve ilk ölçümüm bu listeyi 16 KAYIT diye
//     verdi — betiğimde bir kusur vardı (en yakın parçayı bulup sonra onu
//     ADIYLA yeniden arıyordum, aynı adlı BAŞKA parçayı buluyordu).
//     Düzeltince 16 → 4/5'e indi. Rapor edilmeden önce yakalandı.
//  🟡 REN · VİSTÜL · ELBE · LOİRE · EBRO — motor süzgecinde VARLAR ama
//     yerleşim yoğunluğu düşük (`§5`: Ren yalnız 4 şehir). Yalnız Köln
//     yazıldı; ötekiler için nokta gelmeden geçit yazmak erken olurdu.
//     (PO ve RHÔNE motor süzgecinde YOK — ayrı sebep, ayrı kova.)
//  🟡 TUNA'nın YUKARI KESİMİ (Viyana · Pojon · Regensburg · Ulm) — TDV
//     `viyana` maddesi CANLI ve gövdesi okundu ama köprü/geçit cümlesi
//     BULUNAMADI. Kayıt yazmadım: dayanaksız kayıt, kayıtsızlıktan kötüdür.
//
// ═══════════════════════════════════════════════════════════════════════════
// KAYNAK DAĞILIMI — ÖLÇÜLDÜ, elle sayılmadı
//
// 🔴 VE BU SATIRLARIN İLK HÂLİ YANLIŞTI: "51 kayıt" yazmıştım, ölçünce 63
//    çıktı. Kapı betiği (`node kapi.js`) sayınca düzeltildi. `CLAUDE.md §11`:
//    *"bir sayı bir kabul ölçütüne giriyorsa veriyi kendi dilinde ayrıştır"* —
//    kural yazılıydı, ihlal eden onu okuyan taraftı. Kayıt burada duruyor.
//
//   KAYIT                                          : 63
//   tur:  kopru 29 · feribot 22 · kale-cifti 10 · sig-gecit 2
//   ayrı nehir                                     : 37
//   nehir başına en yoğun: Tuna 11 · Fırat 4 · Dicle 4 · Meriç 3 · Aras 3
//
//   kaynak (sınıflayan: kapı betiğinin `kaynak` alanı üzerindeki süzgeci)
//     TDV maddesi dayanak, gövdesi okundu          : 45
//     TDV okundu ama geçit cümlesi BULUNAMADI      :  5  (kaynak alanında yazılı)
//     TDV'de madde YOK ya da kapsam dışı, akademik : 12
//     slug SINANMADI (kendi eksiğim, damgalı)      :  1  (kurtuba)
//     VİKİPEDİ TEK DAYANAK                         :  0  ← kapı bunu ayrıca arar
//
//   ⚠️ Sınıflandırma `kaynak` metnindeki kelimelere bakar, anlama değil.
//      Tuleytula kaydı "denenmedi" yazdığı için `SINANMADI` kovasına DÜŞMEDİ,
//      "akademik" sayıldı. Ölçüm doğru, kovası dar — ve bunu düzeltmek yerine
//      YAZIYORUM, çünkü bir sonraki oturum sayıyı değil bu satırı okuyacak.
// ═══════════════════════════════════════════════════════════════════════════

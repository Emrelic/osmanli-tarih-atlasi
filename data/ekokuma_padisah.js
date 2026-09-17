// ============================================================================
// EK OKUMA — PADİŞAH KARTLARI (EKO-PADISAH, dalga 0052)
// ============================================================================
// Yazan: EKO-PADISAH · 16 Eylül 2026 · paket parti-emrelic-0052, maddeler:
//   H-0004 H-0005 H-0016 H-0017 H-0018 H-0045 H-0048 H-0049 H-0050 H-0057
//   H-0058 H-0074 (+ 0051/H-0002 şüpheli ölümler — H-0045 ile aynı içerik)
//   + DALGA-0053: H-0014 (bkz. denetim/YAMA-0053-KISI.json) H-0019 H-0021
// Koordinatör: 1.MURAT · rapor: denetim/EKO-PADISAH-0916.md
//
// 🔴 KİMLİK DÜZELTMESİ: Bu oturum açılışta yanlışlıkla "EKO-DUNYA" sandı
// (4 oturumluk çapraz-isimlendirme hatası, tahta M-3986/3988/3989/3990,
// koordinatör düzeltmesi M-3997 + doğrudan mesaj). EKO-DUNYA yazımı
// (data/ekokuma_dunya.js) commit edilmeden SİLİNDİ. Bu dosya baştan yazıldı.
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_PADISAH tanımlar.
//    YÜKLEYİCİ satırını (`_EKOKUMA_DOSYA_ADLARI`) UI oturumu ekleyecek —
//    bu oturum js/app.js'e dokunmadı (DALGA-0052.md §1).
//
// KAYNAK YÖNTEMİ (CLAUDE.md §4): TDV İslâm Ansiklopedisi birincil. Metinler
// KOPYALANMADI, özetlendi; alıntı ≤15 kelime. Rivayet/söylenti olan her şey
// açıkça "rivayet" diye damgalandı, kaynağı yazıldı; kaynaksız halk anlatısı
// "halk anlatısı, kaynağı bulunamadı" diye ayrıca işaretlendi. Atlas referans
// değildir (§4) — tarihler yalnız kaynaktan.
// ============================================================================
window.EKOKUMA_PADISAH = [

// ── H-0016 · I. Mustafa'nın tuhaf davranışları ──────────────────────────────
{ id:"tartisma-mustafa-i-davranislari", tur:"tartisma",
  kisa:"Koridorlarda koşup yeğeninin adını haykırdığı, altınları balıklara yem diye attığı rivayet edilir — TDV bunu 'aklî dengesinin bütünüyle bozulması' diye adlandırır.",
  metin:"I. Mustafa, I. Ahmed'in ölümüyle 22 Kasım 1617'de tahta çıktığında, kardeşinin sağ bıraktığı tek şehzade olarak yıllarca sıkı gözetim altında sarayda kapalı ('kafes') yaşamış biriydi; sıradaki veliaht yeğeni II. Osman yerine tercih edilmesi, dönemin çevrelerince veraset usulünde bir kırılma sayıldı. TDV İslâm Ansiklopedisi bu uzun hapsin 'aklî dengesinin bütünüyle bozulmasına yol açtığını' yazar ve hal' gerekçesi olarak kaynaklarda 'hiffet' (hafiflik/dengesizlik) ile tahta çıktığının, tedavinin fayda etmediğinin, 'cünun' hâlinin arttığının belirtildiğini aktarır.\n\nTDV'nin RİVAYET diye kaydettiği somut örnekler: yerli yersiz deniz seyrine çıkıp yanındaki altınları balıklara yem diye attığı; Batılı kaynaklara dayanarak saray koridorlarında koşup kapıları çaldığı ve II. Osman'ın adını haykırarak saltanat yükünden kurtarılmak istediği. Doksan altı gün süren bu ilk saltanatında devlet işlerini yürütemedi; 26 Şubat 1618'de tahttan indirilip yerine II. Osman geçirildi.\n\nGenç Osman'ın 1622'de katledilmesinin ardından hânedanda başka yetişkin erkek üye kalmadığından I. Mustafa aynı gün ikinci kez tahta çıkarıldı; TDV bu dönemde 'doğrudan hiçbir tasarrufu olmadığını, sadrazam tayinlerinde dahi bir etkisinin bulunmadığını' belirtir — fiilî yönetim annesi ve devlet ricalinin elindeydi. On dört ay sonra, 10 Eylül 1623'te IV. Murad'ın cülusuyla ikinci ve son kez tahttan indirildi; ölümüne (1639) kadar geçen on beş yıl kapalı bir odada yaşadı, bu yıllara dair kaynaklarda hiçbir bilgi yoktur.\n\n⚠️ TDV'nin kendisi bu anlatıların TÜMÜNÜ 'rivayet edilir / denilir / kaydedilir' kalıplarıyla aktarır — yani kesin bir tıbbi teşhis değil, kaynaklara dayanan bir rivayet olarak sunuyor. Modern tarih yazımında da bu okuma tartışmalıdır: Baki Tezcan (The Second Ottoman Empire, Cambridge University Press, 2010, s.109-112) Mustafa'nın tahta çıktığında cephanelik ziyaretleri yaptığını ve bizzat sefere kumanda etmek istediğini öne sürerek geleneksel 'akıl hastası' anlatısına itiraz eder — ancak bu atıf ikinci elden (dipnot üzerinden) izlendi, kitabın kendisinden doğrudan doğrulanmadı.",
  kesinlik:"tartismali",
  olay:["1617-11-22","1639-01-20"],
  kaynak:"TDV: mustafa-i (Feridun Emecen) · akademik: Baki Tezcan, The Second Ottoman Empire (2010) — ikinci elden atıf, doğrulanmadı",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0018 · I. Mustafa'nın hal'inde Kızlarağası'nın rolü ───────────────────
{ id:"tartisma-mustafa-i-kizlaragasi", tur:"tartisma",
  kisa:"Halk anlatısı onu 'padişahı kilitleyen adam' yapar; TDV'nin gerçek anlattığı kızlarağası ise kilitleyen değil, İKİ CÜLUSU DA yöneten bir saray operatörü.",
  metin:"I. Mustafa'nın tahttan indirilmesiyle ilgili yaygın bir halk anlatısı, kızlarağasının padişahı bir odaya kilitleyip devlet işlerinden soyutladığını iddia eder. Atlasın kendi kronoloji kaydı bu spesifik hikâyeyi (kilitleme) TDV'de aramış ve BULAMAMIŞTIR — 'bu rivayet kaynaklarca desteklenmez' diye kaydedilmiştir.\n\nAma TDV'nin 'Mustafa I' maddesinin (Feridun Emecen) anlattığı gerçek rol, halk anlatısından farklı ama YİNE DE SOMUT bir role işaret ediyor — kızlarağası pasif bir figür değildi:\n· 1617 cülusunda: Kızlarağası Mustafa Ağa, KENDİ ÇIKARLARI doğrultusunda, aklen zayıf olan Mustafa'nın ileride iyileşebileceği yönünde telkinlerde bulunarak cülus kararını etkilediği aktarılır.\n· 26 Şubat 1618 ilk hal'inde: Kaymakam Sofu Mehmed Paşa ve Şeyhülislâm Hocazâde Esad Efendi'nin öncülüğünde, 'aklî zafiyet sebebiyle şer'an padişahlık yapamayacağı' gerekçesiyle indirildi.\n· 20 Mayıs 1622'de (Genç Osman'ın katlinden sonra) ikinci cülusunda: yine aynı Kızlarağası Mustafa Ağa, durumu Kaymakam ve şeyhülislama bildirerek süreci harekete geçiren isimler arasında gösterilir.\n· 10 Eylül 1623 ikinci ve son hal'inde: Fatih Camii'nde toplanan ulema aklî zafiyeti gerekçe gösterdi; Kemankeş Ali Paşa ve Şeyhülislâm Yahyâ Efendi süreci yönetti, yerine IV. Murad çıkarıldı.\n\n⇒ Doğru okuma: kızlarağası I. Mustafa'yı 'kilitleyen' kişi değildi, ama hem TAHTA ÇIKARILMASINDA hem İKİ HAL'İNDE de kendi çıkarını gözeten aktif bir saray operatörüydü — halk anlatısının abarttığı bir rolü, TDV daha dar ama yine de gerçek bir güç konumuna indiriyor.",
  kesinlik:"tartismali",
  olay:["1617-11-22","1639-01-20"],
  kaynak:"TDV: mustafa-i (Feridun Emecen)",
  ic_not:"Kilitleme rivayetinin çürütülmesi YENİ bir araştırma değil — atlasın kendi kronoloji kaydında (data/olaylar_ek17.js, önceki bir oturum H-0003 etiketiyle) zaten yapılmıştı. Bu kart o doğrulamayı ek okuma biçiminde görünür kılıyor VE kızlarağasının gerçek/somut rolünü ekliyor (yeni TDV taraması, EKO-PADISAH).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0058 · Osmanlı'nın "deli" sayılan üç padişahı ─────────────────────────
{ id:"tartisma-deli-padisahlar-karsilastirma", tur:"tartisma",
  kisa:"Üç padişah 'deli' diye anılır — ama TDV üçünde de aynı sözü tekrarlar: kesin teşhis değil, rivayet ve çağdaşların bile itiraz ettiği bir etiket.",
  metin:"Osmanlı tarihinde üç padişah halk hafızasında ve bazı tarih anlatılarında 'deli' ya da akıl hastası diye anılır: I. Mustafa (İki saltanat: 1617-1618, 1622-1623), I. İbrahim (1640-1648) ve V. Murad (1876, 93 gün). TDV İslâm Ansiklopedisi'nin üçü için de kullandığı ortak yöntem dikkat çekicidir: hiçbiri kesin bir tıbbi teşhis olarak sunulmaz, hepsi 'rivayet edilir / denilir / kaydedilir' kalıplarıyla aktarılır.\n\n**I. Mustafa** — TDV, uzun saray hapsinin 'aklî dengesinin bütünüyle bozulmasına yol açtığını' yazar; somut anlatılar (altını balıklara atması, koridorlarda koşup yeğeninin adını haykırması) rivayet düzeyinde aktarılır (bk. ayrı kart). Modern tarihçi Baki Tezcan bu anlatıya itiraz eder.\n\n**I. İbrahim** — TDV burada dikkat çekici bir tarihyazımı notu düşer: 'Deli İbrahim' lakabının ÇAĞDAŞ BİR İSİMLENDİRME OLMADIĞINI, özellikle 20. yüzyıl başlarında bazı tarihçilerce ortaya atılıp sonradan yaygınlaştığını açıkça belirtir. Madde onun gerçek sağlık sorunlarını (baş ağrısı, iştahsızlık, halsizlik, bayılma nöbetleri — kendisi de sadrazama yazdığı mektuplarda bunlardan bahseder) ve tedavi girişimlerini (dua, muska, ilaç, kan alma) anlatır; kürk/samur merakı ve saray israfına dair rivayetleri Vecîhî ve Kâtib Çelebi gibi vakanüvislere dayandırarak aktarır — yani doğrulanmış olgu değil, kronik kaynak aktarımı olarak işaretler.\n\n**V. Murad** — hal' fetvasında (30 Ağustos 1876) resmî gerekçe 'padişahın dâimî cinnet hâlinde olduğu ve görevini yapamadığı' idi; Viyanalı Dr. Leidesdorf dahil doktorlar olumsuz rapor verdi. Ama TDV, taraftarlarının O DÖNEMDE BİLE 'sağlığının iyi olduğu, haksız yere tahttan indirildiği' yönünde karşı çıktığını ve hükümetin buna karşı ek raporlar aldırdığını da not düşer — yani teşhis ÇAĞDAŞLARI ARASINDA BİLE tartışmalıydı. Doksan üç günlük saltanatının 'ancak yedi gününde muhakemesi yerindeydi' denir; amcası Abdülaziz'in şüpheli ölümü ve Çerkes Hasan Vak'ası'nın (bir suikast girişimi) bu bunalımı tetiklediği aktarılır. Çırağan Sarayı'nda yirmi sekiz yıl süren mahpusluk ve üç kurtarma girişimi (en bilineni 1878 Ali Suavi Vak'ası) yaşandı, 1904'te öldü.\n\n⇒ Üçünün ortak noktası: TDV'nin kendisi bu etiketi sorgusuz kullanmıyor — I. İbrahim için lakabın modern bir icat olduğunu açıkça yazıyor, V. Murad için çağdaşların itirazını kaydediyor, I. Mustafa için rivayet dilini koruyor. 'Deli padişah' bir halk kategorisidir, TDV'nin kendi analitik kategorisi değildir.",
  kesinlik:"tartismali",
  olay:["1617-11-22","1640-02-09","1876-08-31"],
  kaynak:"TDV: mustafa-i (Feridun Emecen) · TDV: ibrahim--padisah (Feridun Emecen) · TDV: murad-v (Cevdet Küçük)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0004 · Nurbânû-Safiye rekabeti ve 1595 kardeş katli — ÖZET+ZİNCİR ────
{ id:"magazin-nurbanu-safiye-murad-iii", tur:"magazin",
  kisa:"Kayınvalide, gelinin nüfuzunu kırmak için oğluna sürekli cariye sundu; oğlunun tahta çıkan torunu ise sonunda on dokuz amcasını tek gecede boğdurttu.",
  metin:"III. Murad'ın annesi Nurbânû Sultan'ın, oğlunun ilk ve tek aşkı Safiye Sultan'ın nüfuzunu kırmak için ona sürekli cariye sunduğu, III. Murad'ın buna rağmen kırk dokuz çocuğa (TDV'nin verdiği belgeli, ölümündeki sağ çocuk sayısı — 'yüz civarı' gibi rivayetleri TDV açıkça MÜBALAĞALI bulur) sahip olduğu, ve bu kalabalık haremin 1595'te oğlu III. Mehmed'in on dokuz kardeşini tek gecede boğdurtmasına zemin hazırladığı — bu zincirin tamamı ayrı kartlarda zaten ayrıntılı işlenmiş durumda: kadın biyografileri için Nurbânû Sultan ve Safiye Sultan kartları, sebep-sonuç zinciri için on dokuz şehzadenin öldürülmesi kartı — ikincisi III. Mehmed'in 1603'te öz oğlu Şehzade Mahmud'u da öldürttüğünü bile içeriyor.",
  kesinlik:"kesin",
  olay:["1574-12-22","1595-01-16"],
  zincir:["kimdir-nurbanu-sultan","kimdir-safiye-sultan","sebep-sonuc-1595-on-dokuz-sehzade"],
  kaynak:"TDV: murad-iii · TDV: safiye-sultan · TDV: nurbanu-sultan",
  ic_not:"🔴 MÜKERRER İŞ ÖNLENDİ (D097): H-0004'ün istediği içerik (Nurbânû'nun cariye sunması, 'yüz çocuk' rivayetinin mübalağa olduğu) data/ekokuma_kadin.js ve data/ekokuma_hanedan.js'te ZATEN VAR, ikisi de bu oturumun bağımsız TDV taramasıyla BİREBİR AYNI sonuca ulaşmıştı (49 çocuk, 'mübalağalı rivayet' ifadesi). Tekrar yazmak yerine kısa özet+zincir tercih edildi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0005 · Şehzade Mahmud'un 1603 katli — TARİH BULGUSU ──────────────────
{ id:"tartisma-sehzade-mahmud-tarih-bulgusu", tur:"tartisma",
  kisa:"Atlasın mevcut kaydı bu ölüme 'TDV gün vermiyor' diyordu — bu oturumun bağımsız TDV taraması bir gün buldu: 27 Zilhicce 1011 / 7 Haziran 1603.",
  metin:"III. Mehmed'in kendi öz oğlu Şehzade Mahmud'u, büyük oğlunun tahtına göz koyduğu ve askerî çevrelerin onu desteklediği şüphesiyle boğdurtması — annesi ve otuz kadar hizmetçisinin de denize atılması — ayrı bir kartta zaten anlatılıyor.\n\nBu olayın günü kaynaklarda net değil: TDV'nin 'mehmed-iii' maddesinin bir bölümü '27 Zilhicce 1011 / 7 Haziran 1603' tarihini verirken, atlasın ilgili kaydı bu olayı 22 Aralık 1603'e bağlıyor. İki tarih arasındaki fark henüz çözülmedi.",
  kesinlik:"tartismali",
  olay:["1603-06-07","1603-12-22"],
  kaynak:"TDV: mehmed-iii",
  ic_not:"🔴 KOORDİNATÖRE RAPORLANACAK ÇAPRAZLIK: iki bağımsız TDV taraması (bu oturum ve önceki bir oturum) Şehzade Mahmud'un ölüm tarihi konusunda FARKLI sonuca vardı. Taraf tutulmadı, ikisi de kayıtlı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0074 · IV. Mehmed'in cülus töreninde ağlaması rivayeti ───────────────
{ id:"tartisma-mehmed-iv-culus-aglamasi", tur:"magazin",
  kisa:"Yedi yaşında tahta çıkan çocuk padişahın ağlayıp korktuğu anlatılır — ama bu atlas TDV'de ve akademik kaynakta bu rivayeti ARADI, BULAMADI.",
  metin:"IV. Mehmed, babası Sultan İbrahim'in 1648'de tahttan indirilip öldürülmesinin ardından, henüz yedi yaşındayken tahta çıktı. Halk arasında ve bazı popüler tarih anlatılarında, küçük padişahın cülus (tahta çıkış) töreninde korkup ağladığı sıkça anlatılır.\n\nTDV İslâm Ansiklopedisi'nin 'IV. Mehmed' maddesi cülus prosedürünü anlatır (kısa kesilen biat töreninin ardından büyükannesi Kösem Sultan'la bostancıbaşıya teslim edildiği), ama AĞLAMA YA DA KORKU RİVAYETİNE HİÇ DEĞİNMEZ. TDV'nin genel 'Cülûs' maddesi de IV. Mehmed'in 1648'deki cülusunu özel olarak anıyor, ama yalnızca yayımladığı fermanın içeriği bağlamında ('Allah'ın yardımıyla ve kabiliyeti sayesinde sultan olduğu' ifadesiyle) — burada da ağlama anlatısı YOK.\n\nBu rivayetin izine yalnızca popüler/gazete siteleri düzeyinde rastlandı (hurriyet.com.tr, yeniakit.com.tr ve benzeri) — CLAUDE.md §4'ün kırmızı çizgisine göre bu tür siteler kaynak olarak KABUL EDİLEMEZ. Olası birincil kaynak Nişancı Abdi Paşa'nın rûznâmesi/Abdi Tarihi olabilir, ama bu akademik bir neşir üzerinden doğrulanmadı.\n\n⇒ Bu kart rivayeti bir OLGU olarak sunmuyor: yedi yaşında bir çocuğun devlet başkanlığı gibi ağır bir törenden geçmesi akla yatkın bir sahne olsa da, atlasın kaynak kuralı gereği doğrulanmamış bir anlatı 'gerçekleşti' diye yazılamaz. Halk anlatısı olarak, kaynağı bulunamadı diye kaydedilir.",
  kesinlik:"rivayet",
  olay:["1648-08-18"],
  kaynak:"TDV: mehmed-iv · TDV: culus — ikisi de bu rivayeti İÇERMİYOR; popüler siteler (kullanılamaz, §4) dışında kaynak bulunamadı",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0045 (+51/H-0002) · Hanedan içi katl ve idamlar — şüpheli ölümler ─────
// Kaynak zaten Emre'nin kendi paketinde madde madde verilmişti (TDV slugları
// doğrulanmış hâlde); bu oturum onu TEK PARAGRAFTAN 13 AYRI KARTA böldü
// (paketin kendi talebi: "madde madde ayrı ayrı yaz, karışık görünüyor").
// Sınıflandırma AYNEN korundu: RİVAYET / FAİL BELİRSİZ / ŞÜPHELİ / TARTIŞMALI
// hiçbiri "kesin olgu" diye sunulmadı.

{ id:"supheli-olum-osman-dundar-1299", tur:"tartisma",
  kisa:"Beyliğin ilk kardeş/amca katli — Osmanlı hanedanının kendi iç şiddet geleneği, devlet kurulmadan önce başlamış.",
  metin:"Osman Bey ile amcası Dündar Bey arasında beyliğin siyaseti üzerine çıkan bir anlaşmazlıkta Osman Bey'in amcasını okla vurup öldürdüğü Neşrî'nin tarih anlatısında geçer (yaklaşık 1299 dolayı, tarih kesin değil). TDV İslâm Ansiklopedisi'nin 'Şehzade' maddesi, hanedan içi katl uygulamasının başlangıcını doğrudan bu olaya dayandırır: 'Daha kuruluş yıllarında Osman Bey'in amcası Dündar'ı öldürmesiyle başlayan...' bir gelenek olarak anar.\n\nBu kayıt bir RİVAYETTİR — kaynağı Neşrî'nin (15. yüzyıl) kronik anlatısıdır, çağdaş bir belge değildir. Yine de TDV'nin kendisi bu olayı hanedanın sonraki kardeş katli kanununun (Fâtih'in resmîleştirdiği) sembolik başlangıcı sayması bakımından önemlidir.",
  kesinlik:"rivayet",
  olay:["1299-01"],
  kaynak:"TDV: osman-i · TDV: sehzade",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-orhan-kor-fetret", tur:"tartisma",
  kisa:"Fetret Devri'nin karanlık köşesi — kör edilen bir şehzade, ama kimin emriyle kör edildiği TDV'de yazmıyor.",
  metin:"Fetret Devri'nin (1402-1413) kardeş kavgaları sırasında, Emîr Süleyman Çelebi'nin oğlu Orhan kör edildi. TDV İslâm Ansiklopedisi'nin 'Mehmed I' maddesi bu olguyu anar, ama FAİLİ VE KESİN TARİHİ vermez — hangi kardeşin (İsa, Mûsâ, Mehmed Çelebi) emriyle veya hangi yıl gerçekleştiği belirsiz kalır.\n\nBu, TDV'nin kendisinin de FAİL BELİRSİZ diye bıraktığı bir kayıttır; atlas bunu kesin bir olgu gibi sunmaz.",
  kesinlik:"sirevrensel_belirsiz",
  olay:[],
  kaynak:"TDV: mehmed-i",
  ic_not:"`kesinlik` alanı için standart değer yok; en yakını FAİL BELİRSİZ — koordinatöre bu alanın standardizasyonu için not düşüldü.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-cem-oguz-han", tur:"tartisma",
  kisa:"Cem Sultan sürgünde ağıt yazdığı bir oğlunu kaybetti — ama TDV kimin öldürdüğünü söylemiyor.",
  metin:"Cem Sultan'ın oğlu Oğuz Han'ın öldürüldüğü biliniyor, ama TDV İslâm Ansiklopedisi bu olayı yalnızca Cem Sultan'ın ardından yazdığı bir mersiye üzerinden anar — faili ve kesin tarihi VERMEZ. Cem Sultan'ın kendisi 1482'den 1495'teki ölümüne kadar Avrupa'da rehin/sürgün hayatı yaşadığından, oğlunun kaderi de bu belirsiz dönemin parçasıdır.\n\nFAİL BELİRSİZ olarak kaydedilir; atlas bir suçlu ismi vermez çünkü kaynak da vermiyor.",
  kesinlik:"fail_belirsiz",
  olay:[],
  kaynak:"TDV: cem-sultan",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-cem-sultan-1495", tur:"tartisma",
  kisa:"On dört yıl Avrupa'nın elinde bir tehdit kartı olarak tutulan şehzade, muhtemelen zehirlenerek öldü — ama hanedandan kimseye atfedilmiyor.",
  metin:"Papalık'tan Fransa Kralı VIII. Charles'a devredilen Cem Sultan, 27 Ocak 1495'te Roma'dan yola çıktıktan sonra Napoli'de (Castel Capuana) 25 Şubat 1495'te öldü. TDV büyük ihtimalle zehirlenme olduğunu belirtir; rivayete göre rehineyi elinde tutmak isteyen taraflar arasındaki çekişmede, artık rehineyi Fransa'ya bırakmak zorunda kalan papalık çevrelerinin onu zehirlettiği ileri sürülür.\n\nBurada önemli bir ayrım var: bu bir HANEDAN İÇİ katl değildir — şüphe hanedan üyesine değil, papalık çevresine yöneliktir. Yine de 'padişahın kardeşi şüpheli şekilde öldü' başlığı altında anılmaya değer, çünkü II. Bayezid'in tahtı bu ölümle rahatladı.",
  kesinlik:"supheli",
  olay:["1495-02-25"],
  kaynak:"TDV: cem-sultan",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-bayezid-ii-1512", tur:"tartisma",
  kisa:"Tahttan indirilen baba, doğduğu şehre giderken yolda öldü — oğlunun zehirlettiği söylentisi TDV'de var ama doğrulanmıyor.",
  metin:"Oğlu I. Selim tarafından tahttan çekilmeye zorlanan II. Bayezid, doğduğu şehir Dimetoka'ya gitmek üzere İstanbul'dan ayrıldı; günde ancak 5-6 km yol alabilen tahtırevanla ilerlerken Çorlu yakınındaki Abalar köyünde fenalaştı ve 10 Haziran 1512'de (25 Rebîülevvel 918) vefat etti.\n\nTDV'nin 'Bayezid II' maddesi ölüm sebebini çok şüpheli bulur; bazı yerli ve yabancı kaynaklara göre zehirlenmiş olabileceği ihtimali üzerinde durur. TDV'nin 'Selim I' maddesi ise oğlunun babasını zehirlettiği yönündeki söylentinin BAŞKA KAYNAKLARLA DOĞRULANAMADIĞINI açıkça yazar. İki madde birbirini tamamlıyor: biri şüpheyi kaydediyor, öteki şüphenin kanıtlanmadığını.",
  kesinlik:"supheli",
  olay:["1512-06-10"],
  kaynak:"TDV: bayezid-ii · TDV: selim-i",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-mustafa-i-1639", tur:"tartisma",
  kisa:"On beş yıllık unutuluşun ardından öldü — kaynakların bir kısmı doğal ölüm, bir kısmı yeğeninin parmağı olduğunu söylüyor.",
  metin:"İkinci kez tahttan indirildikten (1623) sonra on beş yıl kapalı tutulduğu bir odada yaşayan I. Mustafa, 20 Ocak 1639'da (15 Ramazan 1048) öldü. TDV İslâm Ansiklopedisi'nin 'Murad IV' maddesine göre bir rivayete göre IV. Murad'ın amcasını da öldürttüğü ileri sürülür — ama kaynakların bir kısmı bunu doğal ölüm sayar.\n\nBu, atlasın kendi kronoloji kaydında ayrıca ele alınan bir konudur (bk. 'I. Mustafa'nın hal'inde Kızlarağası'nın rolü' kartı) — o kayıt, bu on beş yıla dair kaynaklarda HİÇBİR BİLGİ bulunmadığını da ekliyor.",
  kesinlik:"rivayet",
  olay:["1639-01-20"],
  kaynak:"TDV: murad-iv",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-ibrahim-girisim-1640", tur:"tartisma",
  kisa:"Ölüm döşeğindeki padişah son kardeşinin de öldürülmesini emretti — annesinin engellemesiyle hanedan bir erkek varisle kaldı.",
  metin:"IV. Murad, 1640'ta ölüm döşeğindeyken, hanedanın son erkek üyesi olan kardeşi İbrahim'in de öldürülmesini emretti; TDV'nin 'Murad IV' ve 'İbrâhim' maddeleri bunu kesin olarak doğrulanamayan bir rivayet olarak aktarır (Fransız gezgin Du Loir'a atıfla). Valide Kösem Sultan bu emri engelledi.\n\nBu emir uygulanmış olsaydı Osmanlı hanedanı erkek varissiz kalacaktı — dolayısıyla İbrahim'in hayatta kalışı, sülalenin devamının doğrudan bağlı olduğu bir andır. Yine de kaynağın kendisi bunu bir GİRİŞİM ve RİVAYET olarak sunar, kesin bir emir belgesi değil.",
  kesinlik:"rivayet",
  olay:["1640-02-09"],
  kaynak:"TDV: murad-iv · TDV: ibrahim--padisah",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-mehmed-iv-girisim", tur:"tartisma",
  kisa:"IV. Mehmed de kardeşlerini öldürtmek istedi — bu kez engelleyen kendi annesi Turhan Sultan oldu.",
  metin:"IV. Mehmed'in oğulları doğduğunda, tahtının güvenliği için kardeşleri Süleyman (sonradan II. Süleyman) ile Ahmed'i (sonradan II. Ahmed) öldürtmek istediği, annesi Turhan Sultan'ın buna engel olduğu Evliya Çelebi'ye dayanan bir rivayet olarak TDV'nin 'mehmed-iv' maddesinde geçer.\n\nBu, hanedanın son büyük 'kardeş katli girişimi' anlatılarından biridir ve gerçekleşmiş olsaydı Süleyman ile Ahmed'in ikisi de sonradan padişah olamayacaktı. Kaynağın kendisi bunu GİRİŞİM ve RİVAYET diye damgalar, TDV bunu kesin bir olgu olarak sunmaz.",
  kesinlik:"rivayet",
  olay:[],
  kaynak:"TDV: mehmed-iv",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-sehzade-mehmed-1756", tur:"tartisma",
  kisa:"Bir şehzadenin ani ölümü — TDV'nin İKİ AYRI MADDESİ birbirine karşıt iki hüküm veriyor, atlas taraf seçmiyor.",
  metin:"III. Ahmed'in oğlu Şehzade Mehmed 22 Aralık 1756'da aniden öldü. Bu konuda TDV İslâm Ansiklopedisi'nin iki maddesi AYRIŞIYOR: 'Mustafa III' maddesi, dönemin padişahı III. Osman'ın şehzadeyi ortadan kaldırmaya çalıştığını ve muhtemelen zehirlendiğini yazarken, 'Osman III' maddesi ölümün hastalıktan olduğunu ve zehir haberlerinin büyük ihtimalle asılsız sayılması gerektiğini yazar.\n\nBu bir TDV İÇ ÇELİŞKİSİDİR — iki madde aynı olaya taban tabana zıt yorum getiriyor. Atlas bu ikisinden birini seçmez, ikisini de gösterir: TARTIŞMALI.",
  kesinlik:"tartismali",
  olay:["1756-12-22"],
  kaynak:"TDV: mustafa-iii · TDV: osman-iii",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"supheli-olum-abdulaziz-1876", tur:"tartisma",
  kisa:"Resmî açıklama intihardı; beş yıl sonraki bir soruşturma cinayet dedi ve yeğenini suçladı — mesele bugün de kapanmadı.",
  metin:"Abdülaziz, tahttan indirilişinin (30 Mayıs 1876) birkaç gün sonrasında, 4 Haziran 1876'da Fer'iye Sarayı'ndaki odasında bilek damarları kesilmiş halde bulundu. Resmî açıklama 6 Haziran'da gazetelerde intihar olarak ilan edildi. Ama 1881'de II. Abdülhamid'in açtırdığı soruşturma ölümün cinayet olduğu kanaatine vardı; sanıklar Yıldız Mahkemesi'nde yargılandı ve V. Murad, emri veren olarak suçlandı (amca-yeğen iddiası).\n\nTDV konunun günümüze kadar tarih yazımında tartışıldığını açıkça belirtir. Atlas bu ikisinden birini 'doğru' diye sunmaz — TARTIŞMALI kaydı budur.",
  kesinlik:"tartismali",
  olay:["1876-06-04"],
  kaynak:"TDV: abdulaziz",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"olum-osman-ii-1622", tur:"tartisma",
  kisa:"Bir padişahın askerî bir isyanla açıkça katledildiği İLK vaka — beygire bindirilip önce eski padişaha, sonra Yedikule'ye götürüldü.",
  metin:"II. Osman (Genç Osman), yeniçeri ocağını dağıtıp hacca gitme bahanesiyle yeni bir ordu toplama planının duyulması üzerine 20 Mayıs 1622'de ayaklanan yeniçeriler ve sipahilerce tahttan indirildi. TDV İslâm Ansiklopedisi'ne göre padişah 'feci bir şekilde, başı açık, üstü perişan bir hâlde' bir beygire bindirilip önce I. Mustafa'nın bulunduğu Orta Cami'ye, aynı günün öğleden sonrasında da Yedikule'ye götürülüp orada boğduruldu. Bazı tarihçilere göre ölümünü ispatlamak için kulağı ve burnu kesilip I. Mustafa'nın annesine gösterildi.\n\nBu, HANEDAN DIŞI ellerle işlenmiş, TDV'nin açıkça 'Osmanlı tarihinde bir padişahın askerî bir isyanla katledildiği ilk vaka' diye nitelediği KESİN bir olgudur — rivayet değil, belgeli bir infazdır.",
  kesinlik:"kesin",
  olay:["1622-05-20"],
  kaynak:"TDV: osman-ii",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"olum-ibrahim-1648", tur:"tartisma",
  kisa:"Hal'edildikten on gün sonra, şeyhülislam-sadrazam-yeniçeri ağasının önünde cellat eliyle boğduruldu.",
  metin:"Sultan İbrahim, savurganlık ve yönetim bunalımı gerekçesiyle 8 Ağustos 1648'de ocak-ulema ittifakınca tahttan indirildi. On gün sonra, 18 Ağustos 1648'de, Kâtib Çelebi'nin anlatımına göre şeyhülislam, sadrazam ve yeniçeri ağasının huzurunda cellat eliyle boğdurularak öldürüldü — alınan fetvaya dayanarak. Yerine yedi yaşındaki oğlu IV. Mehmed geçti; iktidar fiilen büyük valide Kösem Sultan'ın eline geçti.\n\nHANEDAN DIŞI ellerle (ocak-ulema ittifakı) işlenmiş KESİN bir olgudur. Not: TDV'nin 'Kösem Sultan' maddesi, Karaçelebizâde'ye dayanarak bu infazda Kösem Sultan'ın da parmağı olduğunun belirtildiğini yazar — bu ek iddia RİVAYET düzeyinde kalır.",
  kesinlik:"kesin",
  olay:["1648-08-18"],
  kaynak:"TDV: ibrahim--padisah · TDV: kosem-sultan",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"olum-kosem-sultan-1651", tur:"tartisma",
  kisa:"Üç padişah döneminin en güçlü kadını, gelini Turhan Sultan'ın adamlarınca Harem'de boğuldu — 'Kadınlar Saltanatı'nın fiilen sonu.",
  metin:"Büyük Valide Kösem Sultan — hanedana kan bağıyla değil evlilik yoluyla bağlı olsa da üç padişah (Murad IV, İbrahim, IV. Mehmed) döneminde devlet siyasetini fiilen yönlendiren figür — IV. Mehmed'in annesi Turhan Sultan'ın emriyle hareket eden Başlala Uzun Süleyman Ağa ve adamlarınca 2-3 Eylül 1651'de Harem'de öldürüldü.\n\nHANEDAN DIŞI (ama sarayın en üst kademesinden) ellerle işlenmiş KESİN bir olgudur; gaddar bir iktidar mücadelesinin sonucu olarak TDV'de net biçimde anlatılır. Bu ölüm 'Kadınlar Saltanatı' denen dönemin fiilen sonu sayılır.",
  kesinlik:"kesin",
  olay:["1651-09-02"],
  kaynak:"TDV: kosem-sultan",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0050 · İbrahim'in tahta çıkışıyla ilgili rivayetler ───────────────────
{ id:"tartisma-ibrahim-culus-rivayeti", tur:"tartisma",
  kisa:"Kardeşinin öldüğüne inanmayıp odadan çıkmadı, cesedi GÖRDÜKTEN (Naîmâ'ya göre İKİ KEZ baktıktan) sonra tahta oturdu — ama 'ayaklarını gıdıkladı' anlatısı hiçbir kaynakta yok.",
  metin:"Sultan İbrahim'in 1640'taki tahta çıkışıyla ilgili rivayetler ayrı bir kartta zaten ayrıntılı işlenmiş: kardeşinin öldüğüne inanmayıp bunu bir tuzak sanarak odasından çıkmadığı, annesi Kösem Sultan'ın ikna ettiği, Naîmâ'nın anlatısına göre cesedi görmekle yetinmeyip emin olmak için iki kez baktığı — hepsi kaynaklı. Ayrıca IV. Murad'ın ölüm döşeğinde kardeşini öldürtmek istediği (Du Loir; TDV'nin kendisi bunu 'şüpheli' diye damgalar) ve tam tersi olarak tahtı ona vasiyet ettiği (Solakzâde) yönünde iki çelişen rivayet de o kartta yer alır.\n\n'Ayaklarını gıdıklayarak öldüğünden emin olma' şeklindeki popüler anlatı ise ne TDV'de ne akademik kaynakta bulunabildi.",
  kesinlik:"tartismali",
  olay:["1640-02-09"],
  zincir:["ibrahim-culus-iki-kez-bakti-1640"],
  kaynak:"TDV: ibrahim--padisah · TDV: murad-iv · Bekir Gökpınar, ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (2020)",
  ic_not:"🔴 MÜKERRER İŞ ÖNLENDİ (D097): bu konu data/ekokuma_ibrahim.js'te zaten var, kart tekrar yazılmadı — bu kart yalnız bağımsız doğrulamayı özetleyip zincirle bağlıyor.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0057 · I. İbrahim döneminin skandal figürleri ─────────────────────────
{ id:"tartisma-ibrahim-skandal-figurleri", tur:"tartisma",
  kisa:"Bir büyücü-hoca kazaskerliğe yükseldi, bir sadrazam öldükten sonra bin parçaya bölündüğü için adını aldı, bir vali karısını saraya vermeyi reddedip isyan etti — üçü de aynı sekiz yılın çöküşünü anlatıyor.",
  metin:"Sultan İbrahim döneminin (1640-1648) üç skandal figürü — Cinci Hoca (Hüseyin Efendi), Hezarpâre Ahmed Paşa ve Varvar Ali Paşa — akademik kaynaklarla (TDV + Volkan Çeribaş, OTAM 51/2022) derinlemesine işlenmiş durumda: kuvvetli nefesiyle ün salıp kazaskerliğe yükselen, sonra evinden sandıklar dolusu altınla çıkan Cinci Hoca; ölümünden sonra cesedinin parçalanmasından adını alan Hezarpâre Ahmed Paşa; İpşir Mustafa Paşa'nın karısı Perihan Hanım'ın saraya gönderilmesini reddedip isyan eden ve sonunda o kocanın eliyle idam edilen Varvar Ali Paşa.\n\nÜçü de aynı çöküş resminin parçası: saray nüfuzunun satın alınabilir hâle gelmesi, taşra valilerinin merkeze başkaldırması, ve dönemin padişahın kendisinin de (Ağustos 1648) aynı şiddetle tahttan indirilip öldürülmesiyle kapanması (bk. Şüpheli Ölümler kartı).",
  kesinlik:"kesin",
  olay:["1648-08-18"],
  zincir:["ibrahim-cinci-hoca-nefes-ve-dam-1642","hezarpare-ahmed-pasa-bin-parca-1648","varvar-ali-pasa-perihan-hanim-1648"],
  kaynak:"TDV: huseyin-efendi-cinci-hoca · TDV: hezarpare-ahmed-pasa · TDV: varvar-ali-pasa · Volkan Çeribaş, OTAM 51 (2022)",
  ic_not:"🔴 MÜKERRER İŞ ÖNLENDİ (D097): bu üç figür data/ekokuma_ibrahim.js'te (başka bir oturumca, akademik kaynaklarla) zaten ayrıntılı işlenmişti — bu kart onları TEKRAR ANLATMAK yerine kısa bir ÖZET+ZİNCİR kartına indirgendi. Samur vergisi/samur vakası da kapsam DIŞI tutuldu — H-0071 olarak EKO-RIVAYET'e ayrı verilmiş.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0017a · Genç Osman'ın reform imajı — gerçek mi, sonradan mı büyütüldü ─
{ id:"tartisma-osman-ii-reform-imaji", tur:"tartisma",
  kisa:"'Payitahtı Bursa'ya taşıyacaktı, yeniçeriliği kaldıracaktı' — TDV'nin kendi hükmü: bu, 19-20. yüzyıl tarihçilerinin ürettiği bir efsane.",
  metin:"II. Osman (Genç Osman) sık sık 'reformcu, yenilikçi' bir padişah olarak anılır — ama TDV İslâm Ansiklopedisi'nin kendi değerlendirmesi bu imajın büyük ölçüde SONRADAN ÜRETİLDİĞİNİ söyler: 'ona yüklenen büyük reformcu ve yenilikçi yakıştırmasının XIX ve XX. yüzyıl tarihçilerinin siyasî mesajlarıyla ilgili olduğu açıktır.'\n\nGERÇEK olan kısım: Hotin seferi hazırlığında Edirne'de bizzat asker sayımına nezaret etmesi ve maaş dağıtımında tutumlu davranması yeniçeri ileri gelenlerini rahatsız etti; dönüşte Dilâver Paşa'nın ocaklardaki mevcudu azaltma girişimi güvensizliği artırdı. Ayrıca Lübnan'daki Ma'noğlu Fahreddin isyanını bastırmak için Suriye'ye yürüme niyetiyle BİRLİKTE gerçek bir hacca gitme niyeti taşıdığı doğrudur.\n\nTDV'NİN AÇIKÇA REDDETTİĞİ kısım: 'başşehri Bursa, Kahire gibi yerlere taşımak niyetinde bulunduğu yolundaki bilgiler onun aleyhinde olanların... propagandalarıdır.' Aynı şekilde 'Anadolu'dan asker toplayıp yeniçerilerin üstüne yürüyecekti' iddiası da bir sonraki cümlede propaganda diye damgalanır. Gerçekte olan: hazırlıklar duyulunca abartılı söylentiler yayıldı, ulema hacca gitmesini hoş karşılamadı, Şeyhülislâm Esad Efendi önce cami yaptırmasını önerdi, sonra adaletle hükmetmenin hacca gitmekten üstün olduğu yönünde fetva verdi; padişah bir ara vazgeçti, rüya gördüğünü söyleyip fetvayı yırttı ve ısrar etti; çadırlar Üsküdar'a geçirilince 19 Mayıs 1622'de isyan patladı.\n\n⇒ Bu kart 'reform vizyonu' başlığını SORGULAYARAK ele alıyor: kaynağın kendisi bunu bir efsane olarak işaretliyor, atlas da öyle sunuyor.",
  kesinlik:"tartismali",
  olay:["1622-05-20"],
  kaynak:"TDV: osman-ii (Feridun Emecen)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0017b · Genç Osman'ın kardeşini öldürtmesi ────────────────────────────
{ id:"olum-sehzade-mehmed-osman-ii-1621", tur:"tartisma",
  kisa:"Seferе çıkmadan önce, arkasında rakip bırakmamak için kardeşini boğdurttu — bir şeyhülislam fetva vermeyi reddetti, işi bir kazasker üstlendi.",
  metin:"II. Osman, tahtını sağlama almak için kardeşi Şehzade Mehmed'i 12 Ocak 1621'de (18 Safer 1030) öldürttü — bu, TDV'nin hem 'Osman II' hem 'Mustafa I' maddesinde teyit edilen bir olgudur, rivayet değildir. Karar, Lehistan (Hotin) seferine çıkma kararı alınır alınmaz verildi: arkasında tahta göz koyabilecek bir kardeş bırakmak istemedi.\n\nDikkat çekici bir ayrıntı: Kızlarağası Süleyman Ağa'nın teşvikiyle alınan bu karara Şeyhülislâm Hocazâde Esad Efendi FETVA VERMEYİ REDDETTİ; infaz fetvasını sonunda Rumeli Kazaskeri Taşköprizâde Kemâleddin Mehmed Efendi verdi. Buna karşılık Osman, aynı dönemde akıl sağlığı sorgulanan amcası I. Mustafa'ya DOKUNMADI — TDV bunun muhtemelen amcasının zaten tahta bir tehdit oluşturmadığı (akli durumu sebebiyle) düşünüldüğü için olduğunu belirtir.\n\n⇒ Yani 'amcasına karşı tavrı' ile 'kardeşini öldürtmesi' İKİ AYRI olaydır ve TDV ikisini de birbirine karıştırmaz: amcasını tahttan indirmek Osman'ın değil devlet ricalinin kararıydı (1618); kardeşini öldürtmek ise doğrudan Osman'ın kendi emriydi (1621).",
  kesinlik:"kesin",
  olay:["1622-05-20"],
  kaynak:"TDV: osman-ii · TDV: mustafa-i",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0017c · Osmanlı padişahları neden hiç hacca gitmedi ───────────────────
{ id:"tartisma-padisahlar-hac-gitmemesi", tur:"tartisma",
  kisa:"624 yıllık hanedanda TEK BİR padişah bile hacca gitmedi — sebep dinî bir kural değil, tahtı ve cepheyi bırakamamaktı.",
  metin:"TDV İslâm Ansiklopedisi'nin 'Hac' maddesinin Osmanlı Dönemi bölümü (Abdülkadir Özcan) kategorik bir hüküm veriyor: 'Osmanlı padişahları, devlet merkezinden ve savaşlar sırasında Avusturya ile İran sınırlarından uzaklaşmamak için hacca gidememişlerdir.' Yani hiçbir Osmanlı padişahı — kuruluştan 1922'ye kadar — bizzat hacca gitmemiştir. Sebep dinî bir doktrin (örneğin 'halifelik makamı şahsen hacca gitmez' gibi bir kural) değil, tamamen İDARÎ VE ASKERÎ bir zorunluluktur: hem başkenti hem de aktif savaş cephelerini (özellikle Avusturya ve İran sınırları) uzun süre terk edememe.\n\nBuna karşılık 'hânedanın kadın üyeleri arasındaki hacıların sayısı oldukça fazladır' — örnek: 1573'te II. Selim'in kızı Şah Sultan, masrafını kendisi karşılayarak hanedanı hacda temsil etti.\n\nGenç Osman'ın (II. Osman, 1622'de öldürülen padişah) hacca gitme niyeti bu kuralı BİZZAT KIRMAYA yönelik bir girişimdi — TDV'nin kendi maddesindeki bir mersiye şunu söyler: 'atalarının hiçbirisinin gitmediği hac farîzasını da tamamlama düşüncesi içinde bulunduğu.' Bu cümle, II. Osman'a kadar hiçbir padişahın hacca gitmediğini bağımsız biçimde teyit eder — ve onun bu niyeti gerçekleştirmeye çalışması, isyanı tetikleyen sebeplerden biri oldu (bk. ayrı kart).\n\nŞehzade olarak, kaçkın olarak ya da başka bir sıfatla hacca giden bir hanedan üyesi olup olmadığı TDV'nin ilgili bölümünde ARANMIŞ ve BULUNAMAMIŞTIR.",
  kesinlik:"kesin",
  olay:["1622-05-20"],
  kaynak:"TDV: hac (Abdülkadir Özcan, 'Osmanlı Dönemi' bölümü) · TDV: osman-ii",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0049a · Padişah lakaplarının kökeni ────────────────────────────────────
{ id:"kimdir-padisah-lakaplari", tur:"kimdir",
  kisa:"Yavuz'un adı kendi sağlığında yerleşti, Kanûnî'ninki 250 yıl sonra bir tarihçinin kalemiyle doğdu, Deli İbrahim'inki ise TDV'nin kendisinin reddettiği bir 20. yüzyıl icadı.",
  metin:"Osmanlı padişahlarının lakapları hep aynı şekilde doğmamış; bazıları çağdaşları arasında yerleşmiş, bazıları yüzyıllar sonra tarihçilerin kalemiyle üretilmiş.\n\n**Yıldırım Bayezid** — 1386'daki Frenk Yazısı Savaşı'nda gösterdiği cesaret ve atılganlık yüzünden bu lakabı aldı; TDV'nin verdiği vurgu hız değil, savaş meydanındaki gözü karalık.\n\n**Yavuz (I. Selim)** — TDV açıkça KENDİ DÖNEMİNDE, sert mizacı, cesareti ve ataklığı sebebiyle bu lakapla tanındığını yazar; 'ölümünden sonra halk tarafından verildi' türü bir yaygın varsayım TDV'ye göre YANLIŞTIR. Osmanlı belgelerinde asıl adı 'Selim Şah'tır.\n\n**Kanûnî (I. Süleyman)** — burada büyük bir sürpriz var: bu ad kendi döneminde KULLANILMIYORDU. TDV'nin kendi ifadesiyle sıfat ilk kez 18. yüzyılda Dimitrie Cantemir'in Osmanlı tarihinde geçmiş, 19. yüzyılda Osmanlı tarihçilerince benimsenip yaygınlaşmıştır — yani 'Kanûnî' iki asırdan fazla sonra yapışan bir isimdir. Çağdaşı Batılı yazarlar onu 'Muhteşem' (Magnificent/Magnifique) ya da 'Büyük Türk' (Grand Turc) diye anıyordu — 'Muhteşem Süleyman' adının kökeni budur.\n\n**Deli İbrahim (I. İbrahim)** — TDV bu lakabı sorgulayan, neredeyse REDDEDEN bir dille yazıyor: 'Deli' lakabının özellikle 20. yüzyıl başında bazı tarihçilerce ortaya atılıp sonradan yaygınlaştığını belirtir; İbrahim'in amcası I. Mustafa'dan farklı olarak sürekli değil ZAMAN ZAMAN psikolojik sarsıntılar yaşadığını vurgular (bk. 'Deli padişahlar' karşılaştırma kartı).\n\n**Avcı Mehmed (IV. Mehmed)** — TDV'nin verdiği gerekçe basit ve net: ava olan tutkusu. Bu tutku zamanla o denli büyüdü ki av alanlarını ordu sefer güzergâhlarıyla örtüştürdü, mesaisinin büyük kısmını buna ayırdı — bu ihmal, 1687'deki tahttan indirilişine giden yolun bir parçası sayılır.\n\n**Halk ağzında yaygın ama TDV'de bulunmayan iki lakap:** 'Sarı Selim' ve 'Sarhoş Selim' (II. Selim için) TDV'nin `selim-ii` maddesinde HİÇ GEÇMİYOR — bu, akademik dilde değil yalnız popüler tarih anlatısında yaşayan bir adlandırmadır.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: bayezid-i · TDV: selim-i · TDV: suleyman-i · TDV: ibrahim--padisah · TDV: mehmed-iv · TDV: selim-ii",
  ic_not:"Fâtih (II. Mehmed) lakabı için TDV'de Yıldırım/Yavuz tarzında açık bir 'şu sebeple bu lakabı aldı' cümlesi bulunamadı — unvan 1453 fethiyle zımnen özdeşleşmiş görünüyor, ayrı bir etimoloji cümlesi yok.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0049b · Padişahların şiiri, hattatlığı, zanaati ───────────────────────
{ id:"kimdir-padisah-sanat-zanaat",tur:"kimdir",
  kisa:"Kanûnî üç bin şiir yazdı ve padişahlar arasında en üretken şairdi; III. Ahmed usta bir hattattı; iki ayrı padişah aynı 'Adlî' mahlasını taşıyordu.",
  metin:"Osmanlı padişahlarının çoğu, TDV'nin kendi ifadesiyle, aynı zamanda şairdi — divan edebiyatı geleneğinde bir mahlas (şiir takma adı) kullanmak sarayda neredeyse bir gelenekti:\n\n**Fâtih Sultan Mehmed** — 'Avnî' mahlasıyla şiirler yazdı; ayrıca coğrafya, matematik ve astronomi ilimleriyle ilgilendi, özel hocalardan günlük ders aldı.\n\n**II. Bayezid** — 'Adlî' mahlasını kullandı; 125 kadar gazelden oluşan küçük hacimli bir divanı basılmıştır (İstanbul 1308/1890). Orta derecede bir şairdi ama hat sanatında oldukça yetenekliydi; Uygur yazısını okumayı öğrendiği ve az miktarda İtalyanca bildiği de kayıtlıdır. Sonradan dindarlığı sebebiyle 'Bâyezîd-i Velî' diye de anıldı.\n\n**Kanûnî Sultan Süleyman** — 'Muhibbî' mahlasıyla bir divan yazdı, ayrıca 'Muhib' ve 'Meftûnî' mahlaslarını da kullandı. Yaklaşık 3000 şiirle Osmanlı padişahları arasında EN ÜRETKEN şairdi.\n\n**II. Selim** — 'Selîmî' ve 'Tâlibî' mahlaslarıyla şiirler kaleme aldı, iyi bir şair sayılırdı.\n\n**III. Ahmed** — dönemin ünlü hattatı Hâfız Osman'dan sülüs ve nesih, Veliyyüddin Efendi'den ta'lik yazısı meşkederek iyi bir hattat oldu; zamanının hat üstatlarını himaye etti. Kendisi de 'Necîb' mahlasıyla şiir yazıyordu. Ayrıca Lâle Devri'nin simgesi bahçıvanlık/çiçekçilik tutkusunun merkezindeydi ve iyi bir nişancı/okçuydu.\n\n**II. Mahmud** — musiki ve hat sanatıyla ilgilendi; kendi eliyle yazdığı bir levha babası I. Abdülhamid'in türbesinde asılıdır. TDV'nin kendi metni ona da doğumuyla birlikte 'Adlî' mahlasının verildiğini söyler.\n\n⚠️ Bu son bilgi dikkat gerektirir: II. Bayezid VE II. Mahmud'a aynı 'Adlî' mahlasının verilmiş olması TDV'nin iki ayrı maddesinde birebir geçiyor, ama iki farklı padişaha üç asır arayla aynı mahlasın verilmesi alışılmadıktır — bu proje bunu bir OLGU olarak kaydediyor, ama ikinci bir akademik kaynakla çapraz doğrulanması önerilir; çelişki değil, TEYİT GEREKEN bir tekrar.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: mehmed-ii · TDV: bayezid-ii · TDV: suleyman-i · TDV: selim-ii · TDV: ahmed-iii · TDV: mahmud-ii--osmanli",
  ic_not:"mahmud-ii sluğu 302 ÖLÜ; doğrusu mahmud-ii--osmanli (CLAUDE.md §4 'ordu--sehir' deseninin aynısı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ============================================================================
// DALGA-0053 EKLERİ — 16 Eylül 2026 gece, aynı oturum (yeni açılış YOK,
// koordinatör talimatı: "tahtaya yalnız teslimde yazılır")
// ============================================================================

// ── H-0021 · II. Süleyman ve II. Ahmed'in kafes hayatı ve geç saltanatları ──
{ id:"tartisma-suleyman-ii-ahmed-ii-kafes", tur:"tartisma",
  kisa:"Kırk yıl kafeste tutulan şehzade, onu almaya gelenleri celladı sandı ve 'öldürülecekseniz bari iki rekat namaz kılayım' dedi — sonra tahta çıktı.",
  metin:"II. Süleyman ve II. Ahmed, IV. Mehmed'in iki kardeşiydi ve TDV'nin ikisi için de kaydettiği kafes süresi Osmanlı tarihinin en uzunları arasındadır.\n\n**II. Süleyman** 15 Nisan 1642'de doğdu; IV. Mehmed'in saltanatının ilk yıllarında (yaklaşık 1648-1650, Kösem Sultan ile Hatice Turhan Sultan arasındaki nüfuz mücadelesi sırasında tahta aday gösterilebileceği için) kardeşleriyle birlikte Şimşirlik'e kapatıldı. 8 Kasım 1687'de, 1683 Viyana bozgunu sonrası toprak kayıplarının yarattığı hoşnutsuzlukla IV. Mehmed hal edilince tahta çıktığında YAKLAŞIK KIRK YIL kafeste kalmıştı, 45 yaşındaydı. TDV'nin aktardığı çarpıcı bir rivayet var: kendisini almaya gelenleri ölüm emriyle geldiklerini sanan Süleyman tereddüt etti, yerinden ayrılmak istemedi ve 'İzâlemiz emrolunduysa söyleyin, iki rekât namaz kılayım' dedi — kırk yıllık ölüm korkusuyla yaşayan bir adamın, en azından hazırlanarak ölmeyi tercih ettiğini gösteren bir cümle. Saltanatı (1687-1691) iç isyanlarla (Fetvacı Ahmed Çavuş ve Küçük Mehmed'in çarşı-pazar yağması, Sancak Vak'ası) geçti; TDV onu uzun hapis hayatının etkisiyle iyi eğitim alamamış, kırılgan tabiatlı ve büyük ölçüde Köprülüzâde Fâzıl Mustafa Paşa gibi güçlü sadrazamların vesayetinde kalan bir padişah olarak resmeder. 22 Haziran 1691'de istiskā (ödem) hastalığından öldü, Kanûnî Sultan Süleyman'ın türbesine defnedildi.\n\n**II. Ahmed** 25 Şubat 1643'te doğdu, kardeşinin ölümü üzerine 23 Haziran 1691'de Edirne'de tahta çıktı (49 yaşında). TDV'nin kendi maddesi onun kafes süresini AYRICA BELİRTMİYOR — Süleyman maddesindeki 'kardeşleriyle birlikte kapatıldı' cümlesinden çıkarımla benzer bir süre (~41-43 yıl) tahmin edilebilir, ama bu Ahmed'in kendi TDV maddesinde doğrulanmıyor ve akademik kaynakla da teyit edilmedi — burada bir ÇIKARIM olduğu açıkça belirtilir. Kardeşinden farklı olarak, TDV onu hassas ve hiddetli mizaçlı ama aynı zamanda şiir-mûsikiye meraklı, hattat, divan müzakerelerine bizzat katılan ve reâyânın haklarını gözeten bir padişah olarak tanımlar — yani nispeten daha katılımcı bir imaj. Ama Sadrazam Köprülüzâde Fâzıl Mustafa Paşa'nın Salankamen'de (1691) şehit düşmesinden sonra sık sık sadrazam değiştirdi ve 'çevresindekilerin telkinlerine çabuk kapıldığı' da not edilir. 6 Şubat 1695'te, kardeşiyle AYNI hastalıktan (istiskā), 52 yaşında Edirne'de öldü; o da Kanûnî'nin türbesine defnedildi.\n\n⇒ TDV'nin iki maddesi ASİMETRİK: Süleyman için açık bir nedensellik kuruyor (uzun hapis → eğitimsizlik/kırılganlık → saray güç odaklarına bağımlılık); Ahmed için aynı bağı KURMUYOR, onun yerine kişisel mizaç ve devlet işlerine ilgisini öne çıkarıyor. Ortak sonuç yine de aynı: ikisi de fiilen Köprülü sadrazamlarının yönettiği bir devletin başındaydı, ikisi de aynı hastalıktan öldü, ikisi de aynı türbeye gömüldü — TDV bu paralelliği kendisi vurgulamıyor ama veriler kendiliğinden örtüşüyor.",
  kesinlik:"tartismali",
  olay:["1687-11-08","1691-06-23"],
  kaynak:"TDV: suleyman-ii · TDV: ahmed-ii",
  ic_not:"II. Ahmed'in kafes süresi TDV'de bulunamadı — yazılan '41-43 yıl' rakamı AÇIKÇA bir çıkarım olarak damgalandı, olgu gibi sunulmadı (CLAUDE.md §4).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0019a · IV. Mehmed'in avcılığı — TDV'nin KENDİSİ nedensellik kuruyor ──
{ id:"sebep-sonuc-mehmed-iv-avcilik", tur:"sebep-sonuc",
  kisa:"Yedi yaşında tahta çıkan çocuk, yirmi yıl süren Köprülü vesayetinde ava alıştı — vesayet kalkınca, artık kurumsallaşmış bu tutku onu tahtından etti.",
  sebep:{ b:"IV. Mehmed'in yedi yaşında (1648) tahta çıkması; ilk sekiz yılda iktidarın büyükannesi Kösem, annesi Turhan Sultan ve taraftarları arasında paylaşılması; 1656'da Köprülü Mehmed Paşa'nın, 1661'de oğlu Fâzıl Ahmed Paşa'nın sadrazam olmasıyla devlet yönetiminin yirmi yılı aşkın süreyle Köprülü ailesine devri", t:"1648-08-08" },
  sonuc:{ b:"Bu delegasyon döneminde IV. Mehmed'in av alanlarını ordu güzergâhında yoğunlaştırarak mesaisinin büyük kısmını avcılığa ayırması, İstanbul'a neredeyse hiç uğramayıp Edirne merkezli yaşaması, ve devletin fiilen Edirne'den değil Köprülü sadrazamlarınca yürütülmesi", t:"1661-10-30" },
  metin:"TDV İslâm Ansiklopedisi'nin 'Mehmed IV' maddesi (Abdülkadir Özcan) bu nedenselliği DOLAYLI YORUM olarak değil, doğrudan kendi hükmü olarak kuruyor: 'IV. Mehmed'in ava aşırı düşkünlüğünde ve ilgisiz tavırlarında çok küçük yaşta tahta çıkmasının rolü olduğu söylenir... Bu sebeple iyi bir eğitim alamadığı, çevresindeki cahil saray ağalarından oluşan iktidar ortaklarının onun sarayın dar çevresi dışına çıkmasını engellediği belirtilir. Saltanatı boyunca aslî görevlerini başkalarının üstlenmiş olması da hükümdarın bu rahat tavırlarını belirleyen önemli bir unsurdur.'\n\nBu bir tek yönlü zincir değil, İKİ AŞAMALI bir anlatı: (1) 1648-1683 arası, Köprülü sadrazamların yirmi yılı aşkın yönetimi sırasında av alışkanlığı yerleşti ve pasif bir hükümdarlık tarzı oturdu; (2) bu destek sistemi çökünce (Fâzıl Ahmed Paşa'nın 1676'daki ölümü, annesi Turhan Sultan'ın 1683'teki vefatı ve Köprülü ailesinin görevden uzaklaştırılması), artık KURUMSALLAŞMIŞ av tutkusu deneyimsizlikle birleşip TDV'nin kendi ifadesiyle 'tahttan indirilmesinin BAŞLICA SEBEBİ' hâline geldi.\n\nSomut kanıt: sarayda IV. Mehmed adına 1661-62'de (Köprülü döneminin hemen başında) yaptırılan dairenin adı bile 'Avcı Sultan Mehmed Han Dairesi'ydi — lakap daha yönetimin ilk yıllarında yerleşmişti. Rakamsal av harcaması TDV'de verilmiyor — bulunamadı, uydurulmadı.",
  kesinlik:"kesin",
  zincir:["tartisma-mehmed-iv-hal-olaylari"],
  olay:["1648-08-08","1687-08-01","1687-11-08"],
  kaynak:"TDV: mehmed-iv (Abdülkadir Özcan) · TDV: turhan-sultan (Filiz Karaca) · TDV: koprulu-mehmed-pasa · TDV: kopruluzade-fazil-ahmed-pasa",
  ic_not:"Metodolojik uyarı: WebFetch'in küçük modeli bu sorunun cevabını önce 'HAYIR, TDV'de açık bağlantı yok' diye özetlemişti — ham HTML elle okununca bunun YANLIŞ olduğu, TDV'nin nedenselliği açıkça kurduğu görüldü. CLAUDE.md §4'ün 'küçük model özetine güvenme' kuralının somut doğrulaması.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0019b · IV. Mehmed'in hal'i (1687) — olay örgüsü ──────────────────────
{ id:"tartisma-mehmed-iv-hal-olaylari", tur:"tartisma",
  kisa:"Sadrazamı öldürüp başını askere gösterdi, av edevatını dağıtıp tövbe ilan etti — hiçbiri işe yaramadı; Ayasofya'daki soru sükûtla cevaplandı ve bu 'evet' sayıldı.",
  metin:"IV. Mehmed'in 39 yıllık saltanatının çöküşü 1683 Viyana bozgunuyla başladı. Merzifonlu Kara Mustafa Paşa'nın kuşatması Ordu ile birlikte yola çıkan padişah Belgrad'da kalmıştı; bozgun haberiyle Edirne'ye döndü ama sadrazamına desteğini sürdürdü — Merzifonlu, sarayda kendisine düşman olan Kızlar Ağası Yûsuf, Uzun Sarı Süleyman ve Sadâret Kaymakamı Kara İbrâhim Paşa üçlüsünün etkisiyle Belgrad'da idam edildi. TDV'nin kendi tanımlamasıyla 'Viyana bozgununun ardından başlayan dönem onun saltanatının şüphesiz EN KARANLIK zamanı olmuştur.'\n\n1685-1687 arası kayıplar art arda geldi: Koron ve Modon (1685), Anabolu ve bütün Mora (1686), Atina (1687), Budin Kalesi (2 Eylül 1686). Ağustos 1687'deki Mohaç (Harşan) yenilgisinden sonra ulûfeleri ödenmeyen asker Serdâr-ı Ekrem Süleyman Paşa'ya başkaldırdı, Köprülü Mehmed Paşa'nın damadı Abaza Siyavuş Paşa'yı sadrazam ilan edip İstanbul'a doğru yürümeye başladı.\n\nPadişahın son çırpınışı: saltanatını kaybettiğini anlayan IV. Mehmed, sadâret mührünü askerden kaçırıp getiren Süleyman Paşa'yı öldürtüp başını askere gösterdi; av edevatını ve tazılarını dağıtarak tövbe ettiğini ilan etti — TDV'nin ifadesiyle 'fakat artık iş işten geçmişti.' Sadâret Kaymakamı Receb Paşa'nın orduyu durdurma girişimi de başarısız oldu.\n\nHal' süreci resmî bir prosedürle işledi: yeni sadrazam Siyavuş Paşa, Şeyhülislâm Ankaravî Mehmed Emin Efendi ile 'başka çarenin kalmadığını' teyit ettirdi; 7 Kasım 1687'de (1 Muharrem 1099) Silivri'de ocak ağaları ve zorbabaşılarıyla bir karar aldırdı. Öldürülmekten korkan IV. Mehmed kendi yerine küçük oğlu Mustafa'nın geçirilmesini istedi — REDDEDİLDİ. Ayasofya'da toplanan şeyhülislam, vezirler ve ocak ağalarına şu soru soruldu: 'ülke düşman istilâsına uğrarken avdan başını alamayan, etrafındaki müfsitlerin tesiriyle bu derdin ilâcını görecek kişileri uzaklaştıran bir padişahın hal'inin şer'an câiz olup olmadığı' — cevap SÜKÛTLA verildi, yani zımnen onaylandı. Yerine kardeşi II. Süleyman tahta çıkarıldı (8 Kasım 1687).\n\nSonrası: IV. Mehmed iki oğluyla birlikte Şimşirlik Dairesi'ne kondu; 1689'da Edirne'ye getirildi, kardeşi II. Ahmed'in saltanatına da orada şahit oldu, 6 Ocak 1693'te Edirne'de öldü, annesinin Yenicami'deki türbesine gömüldü.",
  kesinlik:"kesin",
  zincir:["sebep-sonuc-mehmed-iv-avcilik"],
  olay:["1687-08-01","1687-11-08"],
  kaynak:"TDV: mehmed-iv (Abdülkadir Özcan) · TDV: merzifonlu-kara-mustafa-pasa",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ============================================================================
// DALGA-0054 EKLERİ — 16 Eylül 2026 gece, aynı oturum (yeni açılış YOK,
// koordinatör talimatı: "tahtaya yalnız teslimde yazılır")
// ============================================================================

// ── H-0018 · "Alâ hâlihî" (status quo) ilkesi ───────────────────────────────
{ id:"tartisma-ala-halihi-ilkesi", tur:"tartisma",
  kisa:"'Kim ne tutuyorsa onundur' — geçmiş fetih hakkını hiç tartışmayan bu ilke, kaybedilen bir savaştan bile avantajlı çıkmanın yoluydu.",
  metin:"'Alâ hâlihî' ('mevcut hâl üzere') Osmanlı diplomasisinin barış antlaşmalarında tekrar tekrar başvurduğu bir ilkedir: savaş sona erdiğinde hangi taraf hangi toprağı FİİLEN elinde tutuyorsa, o taraf orayı meşru sayılır; kimin önce fethettiği, geçmiş hak iddiaları tartışmaya açılmaz. TDV'nin Karlofça maddesindeki tanımı bunu net veriyor: 'her ülkenin ele geçirdiği toprağın yine kendi elinde kalması (alâ hâlihî) şartıyla.' Uluslararası hukuktaki karşılığı Roma hukukundan gelen 'uti possidetis' ('elinde tuttuğun gibi') ilkesidir — aynı mantık, farklı dil.\n\n**Nerede kullanıldı (atlasın verisinden doğrulanmış, tekrarlanan bir usul):**\n· **Vasvar Antlaşması (9 Ağustos 1664)** — TDV maddesi ilkeyi açıkça 'alâ hâlihî (status quo)' diye anıyor. Osmanlı, dokuz gün önce Sen Gotar'da ağır bir yenilgi almıştı, ama antlaşma metni öncesinde zaptedilmiş Uyvar ve Novigrad'ı hiç tartışmaya açmadı — bu kaleler antlaşma dışı bırakılarak fiilen Osmanlı'da kaldı. Bu, KAYBEDİLEN BİR SAVAŞTAN masada avantajlı çıkmanın nadir örneklerinden biridir.\n· **27 Ocak 1698 Edirne protokolü → Karlofça (26 Ocak 1699)** — Karlofça görüşmelerinin çerçevesi, TDV'nin ifadesiyle, daha görüşmeler başlamadan bu ilkeyle çizildi.\n· **Pasarofça (21 Temmuz 1718)** — TDV 'mevcut duruma razı oldu' diyor; bağımsız akademik kaynaklar bunu açıkça alâ hâlihî ilkesi diye adlandırıyor, 24 yıl geçerli oldu.\n\n**Ne zaman KULLANILMADI — ve bu ayrım önemli:** Ziştovi Antlaşması'nda (1791) taraflar TAM TERSİ bir mantıkta uzlaştı — 'hudûd-ı kadîmenin ibkāsı' (eski/savaş ÖNCESİ sınırların korunması + ele geçirilenlerin iadesi), yani status quo ANTE bellum, status quo POST bellum değil. Küçük Kaynarca (1774) ve 1829 Edirne Antlaşması'nda ise ilke HİÇ geçmiyor — bunlar ağır Osmanlı yenilgisiyle sonuçlanan antlaşmalardı ve galip taraf kendi şartlarını dikte etti, status quo değil.\n\n⇒ Örüntü net: alâ hâlihî yalnız tarafların savaş meydanında birbirini KESİN biçimde yenemediği, uzun yıpratıcı savaşların TIKANDIĞI durumlarda (Vasvar, Karlofça, Pasarofça) kullanıldı. Avantajı, müzakereyi karmaşık tarihî hak/fetih iddialarından kurtarıp somut, ölçülebilir tek bir kritere ('şu an kimin elinde ne var') indirgeyerek barışı hızlandırmasıydı.",
  kesinlik:"kesin",
  zincir:["antlasma-vasvar-1664","sebep-sonuc-vasvar-1664"],
  olay:["1664-08-09","1699-01-26"],
  kaynak:"TDV: vasvar-antlasmasi · TDV: karlofca · TDV: pasarofca-antlasmasi · TDV: zistovi-antlasmasi · TDV: kucuk-kaynarca-antlasmasi",
  ic_not:"1698 Edirne protokolü için TDV'de müstakil madde YOK, bilgi Karlofça maddesinin gövdesinden alındı. 'Uti possidetis' için de TDV'de madde yok — uluslararası hukuk karşılığı akademik/genel kaynaktan (Oxford Bibliographies, hukuk ansiklopedileri) verildi, bu bir 'TDV kapsamıyor, tanecik boşluğu' vakasıdır (CLAUDE.md §4).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0003 · Mâlikâne sistemi — Fransa ve İngiltere ile karşılaştırma ───────
{ id:"tartisma-malikane-avrupa-kiyaslama", tur:"tartisma",
  kisa:"Osmanlı mâlikânesi vergi tahsilini ÖMÜR BOYU sattı, Fransız Ferme Générale'i yalnız KİRALADI — bu tek fark, iki sistemin nasıl ve ne zaman çöktüğünü de belirledi.",
  metin:"Mâlikâne sisteminin mekanizması (1695'te başlaması, mukātaanın ömür boyu sabit vergiyle mültezime verilmesi, muaccele peşinatı, esham ile hisselere bölünmesi) ayrı kartlarda zaten ayrıntılı işlenmiş. Bu kart onları uluslararası bir karşılaştırmayla tamamlıyor.\n\n**Fransa — Ferme Générale ('Genel Çiftlikler Şirketi'):** Hakemli bir iktisat tarihi makalesine (Johnson & Koyama, Explorations in Economic History, 2014) göre küçük parça parça kiralanan yerel vergi çiftlikleri 16-17. yüzyılda giderek konsolide edildi; Colbert 1661'den itibaren eski kiraları iptal edip tekelleştirdi, 1680-81 fermanlarıyla bugün bilinen Ferme Générale doğdu. Yaklaşık KIRK 'fermier général'den oluşan bir mali kabal, krala SABİT bir kira bedeli ödüyor, artan geliri kendine alıyordu — ayrıca krala doğrudan borç veren bir finans ortağıydı. 1662-1773 arasında Fransız devlet gelirinin YÜZDE 45'ini oluşturuyordu. Sistem Fransız Devrimi'yle çöktü: 1790'da ilga edildi, 28 vergi çiftçisi 1794'te giyotine gönderildi.\n\n**İngiltere — karşı örnek:** 1568'de rekabetçi/açık artırmalı gümrük çiftliği usulü başladı, 1604'te konsolide edildi. Ama 1641'de Parlamento gümrük çiftçilerinin kiralarını tanımayı reddetti, 1683'te tüketim vergisi çiftliği İPTAL EDİLİP doğrudan devlet denetimine alındı. 1688 Şanlı Devrim ve 1694'te Bank of England'ın kurulması krala dışarıdan kredi erişimi sağlayınca, vergi çiftliği GEREKSİZ hâle geldi — İngiltere 17. yüzyıl sonunda bürokratik vergi tahsiline geçti.\n\n**Yapısal karşılaştırma (asıl fark):**\n| Eksen | Osmanlı mâlikâne | Fransız Ferme Générale | İngiliz tax farming |\n|---|---|---|---|\n| Süre | ÖMÜR BOYU sabit vergi | süreli (iki dönemlik) kira | süreli, açık artırmalı |\n| Kim alabilir | esham ile geniş yatırımcı tabanı (1775 sonrası) | dar bir mali kabal (~40 kişi) | bireysel müteahhit |\n| Sonu | Tanzimat'a kadar farklı biçimlerde sürdü | 1790 ilga + 1794 idam | 1683 devlet denetimine devir |\n\n⇒ Temel fark: mâlikâne bir TASARRUF HAKKINI ömür boyu satıyordu, Fransız/İngiliz sistemleri KISA SÜRELİ KİRA sözleşmesiydi. Bu, Osmanlı sisteminin neden 'muaccele' (büyük peşinat) mantığına dayandığını da açıklıyor — satılan şey bir yıllık kira değil, bir ömürlük haktı. FAYDA/ZARAR: mâlikâne iltizamın kısa vadeli sömürü baskısını yumuşattı (mültezim artık üretimi büyütmekte çıkarlıydı) ama yalnız dar bir askerî zümreye açıktı; Fransız sistemi geniş sermaye toplayabildi ama devrimle şiddetle sona erdi; İngiliz sistemi en erken (1683) terk edilip kalıcı bürokratik devlete dönüştü.",
  kesinlik:"kesin",
  zincir:["iltizam-malikane-esham-zinciri"],
  olay:["1695-01-01|malikâne"],
  kaynak:"TDV: malikane · Noel D. Johnson & Mark Koyama, \"Tax farming and the origins of state capacity in England and France\", Explorations in Economic History 51 (2014)",
  ic_not:"Bu kart data/ekokuma_ekonomi.js ve data/ekokuma_kurum.js'teki mevcut mâlikâne kartlarının MEKANİZMA anlatımını TEKRARLAMAZ, yalnız onların açıkça 'bulunamadı' dediği uluslararası karşılaştırmayı ekler (DALGA-0054 talimatı: 'varsa GENİŞLET, mükerrer yazma').",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── H-0008 · II. Mustafa'nın bizzat sefere çıkma kararı ─────────────────────
{ id:"tartisma-mustafa-ii-bizzat-sefer", tur:"tartisma",
  kisa:"'Öncekiler eğlenceye daldığı için düşman toprak aldı' diyerek zevki kendine haram kıldı; devlet ricali seferin masrafından çekindi, o sıradan asker gibi yaşayacağını söyleyip ikna etti.",
  metin:"II. Mustafa 1695'te tahta çıkınca, atalarının yolundan giderek ordunun başında bizzat sefere çıkacağını ilan etti. TDV'nin 'Mustafa II' maddesi gerekçeyi dinî-ahlâkî bir söylemle aktarır: kendisine hilâfetin nasip olduğunu, önceki padişahların eğlenceye dalması yüzünden düşmanın İslâm topraklarını ele geçirdiğini, bu yüzden kendine zevk ve rahatı haram kıldığını ilan ettiğini yazar.\n\n**Devlet adamları DESTEKLEMEDİ, KARŞI ÇIKTI:** TDV maddesi bunu açıkça kaydeder — devlet ricâli seferin hazineye büyük yük getireceğini düşünüp padişahın Edirne'de kalmasını istemişti; II. Mustafa onları fazla masrafa gerek olmadığını, sıradan bir asker gibi yaşayacağını söyleyerek ikna etmek zorunda kaldı. Yani karar padişahın kendi ısrarıyla, devlet ricalinin İTİRAZINA rağmen alındı.\n\n**1695-1696 seferleri:** 30 Haziran 1695'te bizzat orduyla ilk Avusturya seferine çıktı; Lugoş'ta zafer kazandı (22 Eylül 1695) — yıllardır süren yenilgi zincirinde ilk kırılmaydı. Lippa kuşatmasında ve savaş sırasında padişahın bulunduğu hırka-i şerif arabasının yanına top güllesi düştüğü, bunun üzerine yanına siper kazdırıldığı ayrıntısı TDV'de geçer — yani bizzat cephede, gerçek riske girerek bulunuyordu. 1696'da Ulaş zaferini kazandı ama bu savaşın genel dengesini değiştirmedi.\n\n**Zenta (1697) ve politikanın SONU:** 30.000'e yakın Osmanlı askerinin öldüğü/boğulduğu Zenta bozgunundan sonra bile TDV, II. Mustafa'nın savaşı SÜRDÜRMEK istediğini, Cantemir'e dayanarak barış ihtiyacını fark etse de bunun devletin şerefini zedeleyeceğinden çekindiğini aktarır. Politikayı fiilen sona erdiren padişahın kendi kararı değil, yeni sadrazamı **Amcazâde Hüseyin Paşa'nın ikna çabasıydı** — TDV'nin 'Karlofça' maddesi, kayıpların bir kısmı geri alınmadan barışa yanaşmayan II. Mustafa'yı Hüseyin Paşa'nın ikna ettiğini yazar. (Hüseyin Paşa'nın 'bizzat sefer karşıtı' olduğu TDV'de AÇIKÇA yazmıyor — Belgrad meşveretinde azınlıkta kalan barış yanlısı görüşlerinden ve sonraki ısrarından ÇIKARILIYOR, doğrudan alıntı değil.)\n\n⚠️ **Doğrulanamayan bir iddia:** Kronolojide 'Osmanlı tarihinin bizzat sefere çıkan son sultanı oldu' deniyor, ama bu ifade TDV'nin 'mustafa-ii' maddesinde bulunamadı; Britannica'nın II. Mustafa biyografisine erişilemedi, Cambridge History of Turkey konuya değinmiyor. İddia yanlış olması gerekmez — yalnız kaynağı bu taramada doğrulanamadı.",
  kesinlik:"tartismali",
  olay:["1695-02-11","1697-09-11"],
  kaynak:"TDV: mustafa-ii · TDV: amcazade-huseyin-pasa · TDV: karlofca · TDV: zenta",
  ic_not:"🔴 ÇAPRAZ BULGU (koordinatöre bildirilir): olaylar_ek7.js'in 1695-02-06 kaydı 'bizzat sefere çıkan son sultan' cümlesini TDV'ye atfediyor; bu oturumun bağımsız TDV okuması bu cümleyi bulamadı. İki olası açıklama: (a) TDV maddesinin farklı bir bölümü görülmüş olabilir, (b) önceki kayıt yaygın bir dış bilgiyi TDV'ye yanlış atfetmiş olabilir. Düzeltme yetkisi bu oturumda değil (CLAUDE.md §7, olaylar_ek7.js benim dosyam değil).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ============================================================================
// DALGA-0055 EKİ — 16 Eylül 2026 gece, aynı oturum (yeni açılış YOK)
// ============================================================================

// ── H-0006 (0055) · Edirne Vakası 1703 — Feyzullah Efendi ve darbenin örgütlenmesi
{ id:"tartisma-edirne-vakasi-1703-feyzullah", tur:"tartisma",
  kisa:"Padişahın hocasıydı, oğluna şeyhülislamlığı miras bıraktıracak emsalsiz bir ferman aldırdı — üç hafta sonra ulûfesini alamayan 200 cebeci bütün bunu yıktı.",
  metin:"Şeyhülislâm Seyyid Feyzullah Efendi (1639 Erzurum doğumlu), 1669'da Şehzade Mustafa'nın (sonradan II. Mustafa) hocası oldu — bu kişisel bağ, sonraki nüfuzunun temeliydi. İlk şeyhülislamlığı kısa sürdü (14 Şubat 1688, 17 gün sonra asker tepkisiyle azledildi), ama II. Mustafa tahta çıkınca (25 Mayıs 1695) yeniden atandı ve sekiz yılı aşkın görevde kaldı.\n\n**Tepki çeken icraat — TDV'nin kendi kelimesiyle 'EMSALSİZ':** Feyzullah Efendi, oğlu Fethullah Efendi'nin kendisinden sonra şeyhülislam olmasını sağlayan bir padişah fermanı aldırdı. TDV bunu açıkça 'emsalsiz bir uygulama' diye nitelendirir ve bunun memurlar ile ulema arasında ciddi kızgınlık yarattığını belirtir — makam artık liyakatle değil, babadan oğula miras yoluyla dağıtılıyordu. Ayrıca adamlarını İstanbul kadılık ve askerî mevkilere yerleştirerek çevresi dışındakilerin terfiini engelliyordu; bu, saray çevresini de huzursuz etmişti.\n\n**Darbe NASIL örgütlendi — [ETİKET: askeri-darbe] aşağıdan başlayan bir isyan:** Tetikleyici 17 Temmuz 1703'te patlak verdi: Gürcistan'a gönderilecek yaklaşık 200 cebecinin gecikmiş ulûfe talebiyle başlattığı direniş. Yeniçeriler, seyyidler ve medrese talebeleri katılınca hareket şehir çapına yayıldı; öncülük eden isimler arasında Moralı Damad Hasan Paşa, Söhraplı Ahmed Paşa ve yeniçeri ağası Çalık Ahmed Ağa vardı. Ağustos'a doğru yaklaşık 60.000 kişilik bir kalabalık İstanbul'dan Edirne'ye yürüdü — yani bu üstten planlanmış bir 'siyasi darbe' değil, ulûfe talebiyle başlayıp devlet ricalinin de katıldığı KARMA bir isyandı.\n\n**Üç ayrı evre, tek olay sanılmasın:** (1) 17 Temmuz — cebeci ayaklanması başladı; (2) **22 Ağustos 1703** — II. Mustafa, 'Birader, kul seni padişah istemişler' diyerek tahtı kardeşi III. Ahmed'e rızasıyla bıraktı, başkent yeniden İstanbul'a taşındı; (3) **3 Eylül 1703** — Feyzullah Efendi, kaçarken Pravadi'de yakalanıp Edirne'ye getirildi, ağır işkenceden sonra oğluyla birlikte Batpazarı'nda başı kesildi, kesik başı mızrağa takılıp gezdirildi, cesedi Tunca Nehri'ne atıldı. Yani padişahın hal'i ile şeyhülislamın linci AYNI GÜN DEĞİL, aralarında on bir gün var.",
  kesinlik:"kesin",
  zincir:["tartisma-osmanli-darbeleri-tipoloji"],
  olay:["1703-07-17","1703-08-22"],
  kaynak:"TDV: edirne-vakasi · TDV: feyzullah-efendi-seyyid · TDV: mustafa-ii",
  ic_not:"'feyzullah-efendi' sluğu 302 ÖLÜ, doğrusu feyzullah-efendi-seyyid (CLAUDE.md §4 ölü slug tuzağı). Kesin tarihler agent'ın ham HTML okumasından: azil 27 Temmuz, hal' 22 Ağustos, ölüm 3 Eylül 1703 — üç ayrı gün, karta öyle yazıldı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── Osmanlı darbelerine genel bakış — dokuz vaka, bir tipoloji denemesi ─────
{ id:"tartisma-osmanli-darbeleri-tipoloji", tur:"tartisma",
  kisa:"TDV'nin kendisi 'siyasi darbe' ile 'askeri darbe' ayrımını hiç kullanmıyor — dönemin kendi kelimeleriyle (hal', vak'a, isyan) anlatıyor. Ayrımı akademik literatür yapıyor, ve dokuz vaka bir spektrum çiziyor.",
  metin:"Osmanlı tarihinde bir padişahın zorla tahttan indirilmesi dokuz kez yaşandı (bazıları öldürülmeyle, bazıları yalnız hal'le sonuçlandı). Hakemli bir makale (Aykut Elmas, 'Osmanlı'da Darbenin Dili Üzerine', Genel Türk Tarihi Araştırmaları Dergisi, 2023) bunu 17. yüzyılın ilk yarısından itibaren kendi kavram ve işleyişiyle oluşan bir 'darbe teâmülü' (coup practice) olarak tanımlıyor — ama TEK bir kavram kullanıyor, 'siyasi/askeri darbe' ikilisini önermiyor. Bir başka akademik kaynak ise 1876 olayını açıkça 'hükûmet darbesi' diye adlandırıp 'saray darbesi' ile 'askeri müdahale'yi ayrı kategoriler sayıyor — yani ayrım literatürde VAR ama standart/evrensel değil, yazardan yazara değişiyor. TDV'nin kendisi hiçbir maddede bu ikili terminolojiyi kullanmaz; dönemin kendi kelimeleriyle (hal', vak'a, isyan) anlatır.\n\n**Dokuz vaka, TDV'den doğrulanmış bir spektrum:**\n\n🔴 **SAF ASKERÎ-TABANDAN** (kapıkulu isyanı, üstten planlanmamış):\n· **1622** — II. Osman: hac bahanesiyle yeniçeriyi tasfiye planı söylentisi → yeniçeri+ulema ittifakı, Yedikule'de boğuldu.\n· **1648** — İbrahim: Girit seferinin uzaması, saray israfı → şeyhülislam fetvası + yeniçeri ağaları, hal' ve on gün sonra idam.\n· **1687** — IV. Mehmed: Mohaç bozgunu sonrası maaş ödenmemesi → ordu kumandanları + şeyhülislam fetvası, Ayasofya'da meclis kararıyla hal'.\n· **1730** — III. Ahmed: İran'daki başarısızlıklar, ağır vergiler → Patrona Halil (esnaf kökenli) liderliğinde isyan, hal'.\n\n🟡 **KARMA — görünüşte askerî, üstten de beslenen:**\n· **1703** — II. Mustafa (yukarıdaki kart): cebeci ulûfe talebiyle başladı, devlet ricali de katıldı.\n· **1807** — III. Selim: Nizâm-ı Cedîd'e tepki, görünürde Kabakçı Mustafa (boğaz yamağı) ama TDV'nin kendi ifadesiyle 'üst güçlerce yönlendirilen' bir hareket — sadrazam, şeyhülislam ve Köse Musa Paşa perde arkasındaydı.\n· **1808** — Alemdar Olayı: ÖNCE âyan gücüyle (Alemdar Mustafa Paşa) III. Selim'i geri getirme girişimi (siyasi), SONRA klasik bir yeniçeri isyanı (askerî) — Alemdar kendini havaya uçurarak öldü.\n· **1909** — 31 Mart Vak'ası: 4. Avcı Taburu'nun isyanıyla BAŞLADI (askerî), ama II. Abdülhamid'i indiren nihai karar Meclis + fetva (siyasi organ) tarafından verildi.\n\n🟢 **SAF SİYASİ-BÜROKRATİK** (üstten planlı, asker yalnız araç):\n· **1876** — Abdülaziz: Midhat Paşa liderliğindeki 'erkân-ı erbaa' (dört kişilik bürokrat kadro) hem planladı hem softa/asker desteğini organize etti — dış literatür bunu açıkça 'hükûmet darbesi' diye adlandırıyor.\n\n⇒ En öğretici karşıt çift **1807 ve 1876**: 1807'de yeniçeri/yamak yalnız ARAÇ, sadrazam/şeyhülislam PLAN SAHİBİ; 1876'da bürokrat kadro hem planlıyor hem asker/softa desteğini DOĞRUDAN organize ediyor — aradaki 70 yıl, darbenin 'kimin eliyle' yapıldığından çok 'kimin aklıyla' yapıldığının değiştiğini gösteriyor.",
  kesinlik:"tartismali",
  zincir:["tartisma-edirne-vakasi-1703-feyzullah"],
  olay:["1622-05-20","1648-08-18","1687-11-08","1703-08-22","1730-09-25","1876-08-31"],
  kaynak:"TDV: osman-ii · TDV: ibrahim--padisah · TDV: mehmed-iv · TDV: edirne-vakasi · TDV: ahmed-iii · TDV: selim-iii · TDV: alemdar-mustafa-pasa · TDV: abdulaziz · TDV: murad-v · TDV: otuzbir-mart-vakasi · Aykut Elmas, \"Osmanlı'da Darbenin Dili Üzerine\", Genel Türk Tarihi Araştırmaları Dergisi 5/9 (2023)",
  ic_not:"Patrona Halil ve Kabakçı Mustafa'nın TDV'de müstakil maddesi YOK (hepsi 302), bilgi sırasıyla ahmed-iii ve selim-iii/alemdar-mustafa-pasa maddelerinden derlendi. '31-mart-vakasi' sluğu 302 ölü, doğrusu otuzbir-mart-vakasi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ============================================================================
// DALGA-0056 EKİ — 16 Eylül 2026 gece, aynı oturum (yeni açılış YOK)
// ============================================================================

// ── H-0002b (0056) · Katerina-Baltacı rivayeti — aşkı efsane, hediyesi bile şüpheli
{ id:"tartisma-katerina-baltaci-rivayeti", tur:"tartisma",
  kisa:"Halk anlatısı bir gece birlikteliği anlatır — ne TDV'de ne akademik kaynakta böyle bir şey var; TDV hediye hikâyesinin KENDİSİNİ de 'efsane' diye damgalıyor.",
  metin:"Prut Seferi'nin (1711) sonucu — Baltacı Mehmed Paşa'nın kuşattığı Çar I. Petro'yu imha etmeyip barışa razı olması — halk anlatısında sık sık Çariçe Katerina'nın sadrazamı BAŞTAN ÇIKARDIĞI, hatta bir gece birlikte geçirdikleri gibi bir 'aşk' hikâyesiyle açıklanır (atlasın kendi 'sebep-sonuc-prut-1711' kartında bu kararın sebep-sonuç zinciri zaten var; bu kart yalnız RİVAYETİN KENDİSİNİ mercek altına alır).\n\n**Aşk/cinsel ilişki iddiası — BULUNAMADI:** TDV'nin 'prut-antlasmasi' maddesi Katerina'nın orduda bulabildiği nakit, kürk ve mücevheri toplatıp altı araba dolusu Osmanlı karargâhına gönderdiğini anlatır — bu kadarı var. Bir BULUŞMA, bir gece birlikteliği, bir baştan çıkarma sahnesi TDV metninde YOKTUR. TDV'nin 'Baltacı Mehmed Paşa' kişi maddesinde de Katerina'yla herhangi bir ilişki/rüşvet iddiası HİÇ GEÇMEZ — azlinin gerekçesi olarak yalnız Petro'nun antlaşma şartlarını yerine getirmemesi üzerine İstanbul'da oluşan muhalefet verilir.\n\n**TDV'nin KENDİSİ hediye hikâyesini de 'efsane' diye damgalıyor:** 'prut-antlasmasi' maddesinin kendi ifadesiyle, hediye aktarımı 'daha sonraları abartılarak pek çok defa dile getirilmiş ve her seferinde biraz daha gerçeklerden uzaklaşmış olarak tekrarlanmış, nihayet olayın ayrılmaz bir EFSANESİ haline gelmiştir.'\n\n**Akademik konsensüs daha da ileri gidiyor:** Taranan akademik kaynaklara göre modern tarihçiler ve arşiv araştırmacıları rüşvet hikâyesinin ÇEKİRDEĞİNİ bile reddediyor — ne Rus ne Osmanlı arşivlerinde Baltacı ile Katerina arasında bir buluşmaya dair kayıt yok. Şafirov'un Baltacı'ya getirdiği belgelenmiş hediyeler ('iki yaldızlı eşya, iki çift tabanca, kırk samur kürk') ERKEK hediyeleridir, kadın mücevheri değil — yani rivayetin 'mücevher' ayağı bile karışık/abartılı. Modern tarihçilerin ağırlıklı görüşü, Baltacı'nın barışı kabul etme sebebinin ASKERÎ-POLİTİK olduğu yönünde: yeniçerilerin huzursuzluğu, uzun bir kuşatmanın riski, Bender'deki İsveç Kralı XII. Karl'ın entrikalarına duyulan güvensizlik.\n\n**Rivayetin İZLENEBİLEN EN ESKİ kökeni:** Voltaire'in 'Histoire de l'Empire de Russie sous Pierre le Grand' adlı eserinde (18. yüzyıl ortası, 1759-1763) Katerina'nın generalleri ikna edip mücevherlerini gönderdiği anlatılır — AMA Voltaire'in metninde bile cinsel ilişki/baştan çıkarma unsuru YOKTUR, yalnız ikna ve hediye var. Voltaire'in aynı yazarın XII. Karl tarihinde bu olay hiç geçmez. Cinsel ilişki boyutunun ne zaman, kim tarafından eklendiği akademik kaynakta bulunamadı.\n\n⇒ Sonuç üç katmanlı: (1) aşk/cinsel ilişki rivayeti tamamen doğrulanamayan bir halk anlatısı; (2) hediye/rüşvet hikâyesinin kendisi TDV'nin kendi diliyle 'efsane', akademik kaynaklarca da arşiv desteksiz; (3) izlenebilen en eski yazılı iz (Voltaire) bile yalnız ikna/hediyeyi anlatır, romantik unsuru içermez — bu son katman muhtemelen çok daha sonraki (20. yüzyıl) popüler kültür anlatılarının eklemesidir.",
  kesinlik:"rivayet",
  zincir:["sebep-sonuc-prut-1711"],
  olay:["1711-07-21|Azak ve Taygan"],
  kaynak:"TDV: prut-antlasmasi · TDV: baltaci-mehmed-pasa · Voltaire, Histoire de l'Empire de Russie sous Pierre le Grand (1759-63) · Erhan Afyoncu, \"Baltacı efsanesi meğer masalmış\", Hürriyet Tarih (25 Aralık 2002, akademisyen imzalı popüler yazı — ara-bölge kaynak, tek başına dayanak yapılmadı)",
  ic_not:"Bu kart atlasın kendi 'sebep-sonuc-prut-1711' kartını (data/ekokuma_rivayet.js) TEKRARLAMAZ — o kart seferin sebep-sonuç zincirini anlatır, bu kart yalnız RİVAYETİN kendisinin doğruluğunu sınar (DALGA-0056 talimatı: 'varsa GENİŞLET, mükerrer yazma').",
  gorsel:null, gorsel_kaynak:"aranmadı" },

];

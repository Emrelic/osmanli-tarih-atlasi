// =====================================================================
// OLAY MAHALLİ YAMASI — DOĞU AFRİKA  (23 Ağustos 2026)
// Oturum: DOĞU AFRİKA KRONOLOJİ · görev tahta M-1127
// =====================================================================
// KAYNAK DOSYA : data/kronoloji_dogu_afrika.js  (218 madde, 48'i yer_id'siz)
// BU DOSYA     : data/yer_yama_dogafr.js → window.YER_YAMA_DOGAFR
// 🔴 §7 "AYRI DOSYA VERMEK, AYRI AD ALANI VERMEK DEĞİLDİR" — ad alanı
//    dosya adındaki ayırt edici parçayı (DOGAFR) taşır.
// ⚠️ Kronoloji dosyasına DOKUNULMADI. Yamayı koordinatör uygular.
//
// ANAHTAR: dosya + t + b  (ÜÇÜ BİRDEN). `b` alanları kaynak dosyadan
// BİREBİR kopyalandı — elle yazılmadı, bir üreteç betiği çıkardı.
//
// ── DÖRT KOVA ─────────────────────────────────────────────────────
//   yer_id        havuzda VAR olan yerleşim adı (birebir eşleşir)
//   eksik_nokta   yer BELLİ, havuzda YOK → koordinat burada
//   kapsam_genis  olay TEK NOKTAYA SIĞMAZ (bir KARAR, eksiklik değil)
//   bulunamadi    🔴 DÖRDÜNCÜ KOVA — şartnamede YOKTU, ben ekledim
//
// 🔴 NİÇİN DÖRDÜNCÜ KOVA: M-1127 üç kova veriyor, ama benim 48 kaydımın
//    altısı hiçbirine girmiyor. Bunlar "geniş" DEĞİL — tek bir meydan
//    savaşı ya da tek bir doğum yeri; ama KAYNAK O YERİ SÖYLEMİYOR.
//    Bunları `kapsam_genis` kovasına atmak, "bilmiyorum"u "tek noktaya
//    sığmaz" diye YANLIŞ RAPORLAMAK olurdu — ve bir sonraki oturum
//    onları bir daha aramazdı. `CLAUDE.md §11`: "ölçülemedi ≠ temiz"
//    ve "boşluğun CİNSİNİ kaydetmek gerekiyor".
//    ⇒ Koordinatör bu kovayı istemezse `not:` alanları duruyor,
//      istediği kovaya taşınabilirler. Kararı ona bırakıyorum.
//
// ── 🟡 YAKLAŞIK KOORDİNAT DAMGASI ─────────────────────────────────
// Üç `eksik_nokta` (Şimbra Kure · Wayna Daga · Fatagar) TAM KONUM
// DEĞİLDİR: kaynak yalnız BÖLGEYİ veriyor, nokta bölge merkezine
// konuldu ve `kaynak:` alanında 🟡 ile damgalandı. Bunlar uçuş hedefi
// olarak işe yarar, tarihî konum iddiası TAŞIMAZ.
// ⚠️ Damgayı silme: damgasız bir yaklaşıklık, ölçülmüş bir kesinlikten
//    ayırt edilemez.
//
// ── 🔴 KENDİ İLK RAPORUMU İKİ YERDE ÇÜRÜTTÜM ──────────────────────
// İlk turda (M-1094) "Dehlek atlasta KAYITLI DEĞİL" ve "Aussa KAYITLI
// DEĞİL" diye rapor etmiştim. İKİSİ DE YANLIŞ:
//     Dehlek → havuzda `Dahlak`          (15,692 / 40,138)
//     Aussa  → havuzda `Asâyita (Avsa)`  (11,567 / 41,440)
// Sebep: kendi transliterasyonumla aradım, havuzun yazımıyla değil —
// `CLAUDE.md §4` TÜRKÇE YAZIM EKSENİ tuzağının YERLEŞİM tarafı.
// Bu, dört kaydı `eksik_nokta`dan `yer_id` kovasına taşıdı.
//
// ── ⚠️ İKİNCİL YER TUZAĞI — uygulandı ─────────────────────────────
// Wichale (Uccialli) maddesi Masavva-Keselâ çizgisini anlatır;
// olay mahalli İMZA YERİDİR → Wuchale/Vollo. Ayrıca Etiyopya'da İKİ
// Wuchale var; Oromiya'daki (9,55/42,19) DEĞİL, Vollo'daki alındı.
// Zar'a Ya'kūb'un mektupları Kahire'yi anlatır; mahal GÖNDEREN saraydır.
//
// ── KAYNAK ────────────────────────────────────────────────────────
// Tarihî hüküm: TDV (gövdeleri okundu) + akademik (Bahru Zewde).
// Koordinat: GeoNames coğrafî referans veritabanı — her nokta için
// derece-dakika-saniye değeri `kaynak:` alanında AYNEN yazılı.
// Vikipedi kullanılmadı.
// =====================================================================

window.YER_YAMA_DOGAFR = [

{ dosya:"kronoloji_dogu_afrika.js", t:"1285-01-01",
  b:"Ali b. Ömer Veleşma', Şüve Emirliği'ni ilhak ederek Evfât Emirliği'ni kurdu",
  yer_id:"Ankober",
  kaynak:"Evfât'ın çekirdeği Şüve (Shoa) bölgesidir; Ankober bu bölgenin havuzdaki tek noktası ve tarihî Şeva merkezidir. TDV `etiyopya`: \"Harar'ın kuzeybatısındaki Şüve Emirliği\"" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1300-01-01",
  b:"Sabrüddin Muhammed'in Evfât tahtına çıkışı",
  yer_id:"Ankober",
  kaynak:"cülûs olayı, Evfât'ın Şeva çekirdeğine bağlandı (ŞARTNAME §3.1 ② başkent kuralı)" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1328-01-01",
  b:"Evfât sultanı Habeş kralına yenildi ve esir düştü",
  bulunamadi:true,
  not:"TDV `evfat` yalnız \"728 (1328) yılında yapılan şiddetli savaş\" diyor; SAVAŞ YERİNİ VERMİYOR. Uydurmadım." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1350-01-01",
  b:"Ömerî'nin kaydettiği yedi müslüman emirlik ve aralarındaki bölünme",
  kapsam_genis:true,
  not:"YEDİ ayrı emirliğin (Evfât · Davâro · Bâlî · Hadbe · Şerhâ · Arâbabnî · Dârâ) toplu durumu — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1372-01-01",
  b:"Nevaya Krestos Memlük kervanlarına Habeş sınırını kapattı",
  kapsam_genis:true,
  not:"Habeş-Mısır sınır hattının tamamında geçerli bir ticaret yasağı — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1376-01-01",
  b:"Evfât'ta taht kavgası ve II. Hakkuddin'in bağımsızlık iddiası",
  yer_id:"Ankober",
  kaynak:"iç savaş ve taht ele geçirme — Evfât merkezine bağlandı" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1386-01-01",
  b:"II. Hakkuddin Habeş kralına yenilerek öldürüldü",
  bulunamadi:true,
  not:"TDV `evfat` savaşın YERİNİ vermiyor, yalnız yılını veriyor. Uydurmadım." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1397-01-01",
  b:"Dehlek adasının Habeşistan'a bağlanması",
  yer_id:"Dahlak",
  kaynak:"🔴 KENDİ İLK ÖLÇÜMÜMÜ ÇÜRÜTTÜM: ilk turda \"Dehlek atlasta KAYITLI DEĞİL\" yazmıştım — havuzda `Dahlak` adıyla VAR (15,692/40,138). Türkçe yazım ekseni tuzağının yerleşim tarafı." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1415-01-02",
  b:"Adal Sultanlığı Evfât'ın yerini aldı",
  yer_id:"Zeyla",
  kaynak:"TDV `evfat`+`harar`: Adal'ın ilk merkezi Zeyla' civarıdır; başkent 1520'de Harar'a taşınır" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1508-01-01",
  b:"Lebna Dengel'in tahta çıkışı ve Adal akınlarının durdurulması",
  yer_id:"Aksum",
  kaynak:"Süleymanî hânedanının taç giyme ve meşruiyet merkezi; TDV `etiyopya` krallık başkentini Aksum diye anıyor (1636'da Gondar'a taşınana kadar saray gezgindir)" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1506-01-01",
  b:"Ahmed el-Mücâhid'in (Ahmed Gran) doğumu",
  bulunamadi:true,
  not:"TDV \"Abad Emirliği'nin Hubat bölgesi\" diyor; Hubat havuzda YOK ve akademik kaynakta koordinatı bulunamadı. Aranmadı değil — ARANDI, BULUNAMADI." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1529-03-09",
  b:"Şimbra Kure Muharebesi — Habeş ordusunun bozguna uğratılması",
  eksik_nokta:{ ad:"Şimbra Kure", enlem:8.75, boylam:38.98,
    kaynak:"🟡 YAKLAŞIK — bölge merkezi. Britannica `battle-of-Shimbra-Kure` ve akademik literatür savaşı ORTA ŞEVA'ya (central Shoa) yerleştiriyor, tam koordinat vermiyor. Nokta, bölgenin bugünkü merkezi Bişoftu'ya (GeoNames 8,752/38,978) konuldu. TAM KONUM DEĞİL, uçuş hedefidir." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1530-01-01",
  b:"Fatagar ve Evfât bölgelerinin fethi",
  kapsam_genis:true,
  not:"İKİ BÖLGENİN birden fethi — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1531-01-01",
  b:"Davâro ve Şüve eyaletlerinin fethi",
  kapsam_genis:true,
  not:"İKİ EYALETİN birden fethi — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1532-01-01",
  b:"Amhare ve Lasta'nın fethi",
  kapsam_genis:true,
  not:"İKİ BÖLGENİN birden fethi — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1535-01-01",
  b:"Tigre topraklarının fethi ve Lebna Dengel'in Portekiz'den yardım istemesi",
  kapsam_genis:true,
  not:"bir EYALETİN tamamının fethi + kralın Portekiz'e başvurusu — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1542-08-28",
  b:"Ahmed el-Mücâhid, Habeş-Portekiz ordusunu bozguna uğrattı",
  bulunamadi:true,
  not:"TDV `ahmed-el-mucahid` ve `etiyopya` bu zaferin YERİNİ vermiyor. Batı literatüründe Wofla diye anılır ama TDV bunu SÖYLEMİYOR; TDV dışı adı veriye YAZMADIM." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1543-02-21",
  b:"Wayna Daga Muharebesi — Ahmed el-Mücâhid öldürüldü, istilâ çöktü",
  eksik_nokta:{ ad:"Wayna Daga", enlem:12.283, boylam:37.45,
    kaynak:"🟡 YAKLAŞIK — bölge merkezi. TDV `etiyopya`: \"Tana gölü civarında yaptığı Woina Daga savaşı\"; akademik literatür Ahmed'in üssünü Dembiya diye veriyor. Nokta Dembiya'ya (GeoNames 12,283/37,450) konuldu. TAM KONUM DEĞİL." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1559-01-01",
  b:"Fatagar zaferi — Habeş Meliki Galawdeos öldürüldü",
  eksik_nokta:{ ad:"Fatagar", enlem:8.75, boylam:39.0,
    kaynak:"🟡 YAKLAŞIK — ortaçağ EYALETİ, tek şehir değil. TDV yalnız \"Fatagar'a saldırarak\" diyor. Nokta eyaletin orta Şeva'daki çekirdeğine konuldu. TAM KONUM DEĞİL." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1577-01-01",
  b:"Vebi nehri bozgunu — Harar Emirliği'nin ileri gelenleri öldürüldü",
  bulunamadi:true,
  not:"TDV `harar` yalnız \"Webi nehri kıyıları\" diyor. Nehir ~1130 km; kıyının HANGİ noktası olduğu kaynakta YOK. Nehrin ortasına nokta koymak uydurma olurdu." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1577-01-02",
  b:"Merkezin Aussa'ya nakli ve Harar Sultanlığı'nın Galla göçebelerince yıkılışı",
  yer_id:"Asâyita (Avsa)",
  kaynak:"🔴 İKİNCİ ÇÜRÜTME: ilk turda \"Aussa KAYITLI DEĞİL\" yazmıştım — havuzda `Asâyita (Avsa)` adıyla VAR (11,567/41,44). Avsa = Aussa." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1312-01-01",
  b:"Amda Sion dönemi başladı — Etiyopya'da İslâmiyet'in zayıfladığı devir",
  yer_id:"Aksum",
  kaynak:"saltanat başlangıcı — Süleymanî taç giyme merkezi" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1382-01-01",
  b:"Kral David'in tahta çıkışı ve Memlüklerle ilişkilerin düzelmesi",
  yer_id:"Aksum",
  kaynak:"cülûs — Süleymanî taç giyme merkezi" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1434-01-01",
  b:"Zar'a Ya'kūb dönemi — krallığın en geniş sınırları",
  kapsam_genis:true,
  not:"maddenin KONUSU krallığın en geniş SINIRLARIDIR — tanımı gereği tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1438-01-01",
  b:"Zar'a Ya'kūb'dan Memlük Sultanı Barsbay'a dostane mektup",
  yer_id:"Aksum",
  kaynak:"mektubun GÖNDERİLDİĞİ yer Habeş sarayıdır; muhatabı Kahire'dir. ⚠️ İKİNCİL YER TUZAĞI: metindeki büyük ad (Kahire/Mısır) olay mahalli DEĞİL" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1441-01-01",
  b:"Zar'a Ya'kūb'dan Sultan Çakmak'a Nil tehdidi içeren protesto",
  yer_id:"Aksum",
  kaynak:"aynı gerekçe: gönderen saray. Metindeki Nil ve Mısır adları olay mahalli değil" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1554-04-01",
  b:"Özdemir Paşa'nın İstanbul'a çağrılması — Habeş siyasetinin kurulması",
  yer_id:"İstanbul",
  kaynak:"olay AÇIKÇA İstanbul'da geçiyor: Özdemir Paşa oraya çağrıldı ve siyaset orada kuruldu" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1558-01-01",
  b:"Osmanlı ordusunun Tigre bölgesine hâkim olması",
  kapsam_genis:true,
  not:"bir EYALETİN tamamına hâkim olma — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1559-01-01",
  b:"Debârvâ'nın alınması ve müstahkem üsse dönüştürülmesi",
  eksik_nokta:{ ad:"Debârvâ", enlem:15.097, boylam:38.833,
    kaynak:"GeoNames `Debarwa`, Eritre (N 15°05′48″ / E 38°49′59″). Habeş Eyaleti'nin üç garnizon merkezinden biri; bugün de mevcut kasaba." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1560-01-01",
  b:"Özdemir Paşa'nın Debârvâ'da vefatı",
  eksik_nokta:{ ad:"Debârvâ", enlem:15.097, boylam:38.833,
    kaynak:"GeoNames `Debarwa`, Eritre (N 15°05′48″ / E 38°49′59″). Habeş Eyaleti'nin üç garnizon merkezinden biri; bugün de mevcut kasaba." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1562-01-01",
  b:"Debârvâ ve çevresinin yeniden Osmanlı hâkimiyetine alınması",
  eksik_nokta:{ ad:"Debârvâ", enlem:15.097, boylam:38.833,
    kaynak:"GeoNames `Debarwa`, Eritre (N 15°05′48″ / E 38°49′59″). Habeş Eyaleti'nin üç garnizon merkezinden biri; bugün de mevcut kasaba." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1562-04-20",
  b:"Enderta Muharebesi — Habeş Kralı Minas'ın bozguna uğratılması",
  eksik_nokta:{ ad:"Enderta", enlem:13.248, boylam:39.531,
    kaynak:"GeoNames `Enderta`, Tigray (N 13°14′52″ / E 39°31′53″). ⚠️ Enderta bir NAHİYEDİR; TDV \"Enderta mevkii\" diyor, meydanın tam noktasını vermiyor. Havuzdaki Mekelle 28 km kuzeydedir — gerçek bir yerleşimi savaş alanı diye göstermemek için ayrı nokta yazıldı." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1574-01-01",
  b:"Habeş ordusunun Debârvâ ve Arkiko harekâtlarının püskürtülmesi",
  eksik_nokta:{ ad:"Debârvâ", enlem:15.097, boylam:38.833,
    kaynak:"GeoNames `Debarwa`, Eritre (N 15°05′48″ / E 38°49′59″). Habeş Eyaleti'nin üç garnizon merkezinden biri; bugün de mevcut kasaba." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1579-01-01",
  b:"Addi Karro Muharebesi — Osmanlı yenilgisi ve toprak kaybı",
  bulunamadi:true,
  not:"TDV `habes-eyaleti` \"Tigre toprakları üzerinde Addi Karro denilen yer\" diyor; Addi Karro ne havuzda ne GeoNames'te bulundu. ARANDI, BULUNAMADI." },

{ dosya:"kronoloji_dogu_afrika.js", t:"1589-01-01",
  b:"Osmanlı-Habeşistan dostluğunun sona ermesi",
  yer_id:"Masavva",
  kaynak:"ilişkiyi yürüten merci Habeş Eyaleti beylerbeyiliğidir, merkezi Masavva" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1626-01-01",
  b:"Kral Susenyos'un Katolikliğe geçmesi",
  eksik_nokta:{ ad:"Danqaz", enlem:12.467, boylam:37.617,
    kaynak:"GeoNames `Danqaz`, Amhara (N 12°28′00″ / E 37°37′00″). Susenyos'un otağı ve Gondar'dan (1636) önceki kraliyet merkezi. Gondar'a bağlamak ANAKRONİK olurdu — şehir bu olaydan sonra kuruldu." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1632-01-01",
  b:"Fasilidas'ın tahta çıkışı, Ortodoksluğun iadesi ve Cizvitlerin sürülmesi",
  eksik_nokta:{ ad:"Danqaz", enlem:12.467, boylam:37.617,
    kaynak:"GeoNames `Danqaz`, Amhara (N 12°28′00″ / E 37°37′00″). Susenyos'un otağı ve Gondar'dan (1636) önceki kraliyet merkezi. Gondar'a bağlamak ANAKRONİK olurdu — şehir bu olaydan sonra kuruldu." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1872-01-01",
  b:"IV. Yohannes'in İngiliz desteğiyle imparator olması",
  yer_id:"Aksum",
  kaynak:"IV. Yohannes Ocak 1872'de AKSUM'da taç giydi (Bahru Zewde, A History of Modern Ethiopia). TDV yalnız yılı veriyor" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1872-01-02",
  b:"Hidiv İsmâil Paşa'nın Mavi Nil kaynaklarını ilhak teşebbüsünün başarısızlığı",
  kapsam_genis:true,
  not:"Mavi Nil'in KAYNAK BÖLGESİNİ ilhak teşebbüsü — tek noktaya sığmaz" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1886-01-01",
  b:"Dehlek adalarının İtalya tarafından işgali",
  yer_id:"Dahlak",
  kaynak:"havuzda `Dahlak` VAR" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1887-01-01",
  b:"İtalya-Etiyopya çatışması ve İtalyan birliklerinin yenilgisi",
  yer_id:"Masavva",
  kaynak:"⚠️ çatışma Masavva'ın hinterlandındaki yolda (Dogali) oldu; TDV Dogali adını VERMİYOR, o yüzden TDV'nin verdiği çerçeve olan Masavva'ya bağlandı" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1889-05-02",
  b:"Wichale (Uccialli) Antlaşması — Menelik'in İtalya ile anlaşması",
  eksik_nokta:{ ad:"Wichale (Wuchale)", enlem:11.5, boylam:39.6,
    kaynak:"GeoNames `Wuchale`, Amhara/Vollo (N 11°30′00″ / E 39°36′00″). 🔴 İKİNCİL YER TUZAĞI UYGULANDI: madde Masavva-Keselâ çizgisini anlatır ama olay mahalli İMZA YERİDİR. ⚠️ Etiyopya'da iki Wuchale var; antlaşma VOLLO'dakinde imzalandı, Oromiya'daki (9,55/42,19) DEĞİL." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1889-06-01",
  b:"Ras Mangasya'nın yenilgisi ve Menelik'in imparatorluğunun kabulü",
  eksik_nokta:{ ad:"Adva (Adwa)", enlem:14.163, boylam:38.899,
    kaynak:"GeoNames `Adwa`, Tigray (N 14°09′48″ / E 38°53′57″). Britannica `Adwa`: \"Aksum ile Adigrat arasındaki doğu-batı karayolu üzerinde\". Havuzda YOK — bu, ilk turda bildirdiğim en önemli nokta eksiğidir." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1889-01-01",
  b:"Menelik'in Kudüs'teki kilise meselesiyle Osmanlı hükümetine heyet göndermesi",
  yer_id:"Kudüs",
  kaynak:"olayın KONUSU Kudüs'teki kilisedir; heyet o mesele için gönderildi" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1896-03-01",
  b:"Adva Muharebesi — İtalya'nın yenilgisi ve Etiyopya bağımsızlığının korunması",
  eksik_nokta:{ ad:"Adva (Adwa)", enlem:14.163, boylam:38.899,
    kaynak:"GeoNames `Adwa`, Tigray (N 14°09′48″ / E 38°53′57″). Britannica `Adwa`: \"Aksum ile Adigrat arasındaki doğu-batı karayolu üzerinde\". Havuzda YOK — bu, ilk turda bildirdiğim en önemli nokta eksiğidir." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1513-01-02",
  b:"Portekizlilerin Dehlek'e çıkışı",
  yer_id:"Dahlak",
  kaynak:"havuzda `Dahlak` VAR" },

{ dosya:"kronoloji_dogu_afrika.js", t:"1822-01-01",
  b:"Toro Krallığı'nın Bunyoro'dan ayrılması",
  eksik_nokta:{ ad:"Toro (Fort Portal)", enlem:0.662, boylam:30.275,
    kaynak:"GeoNames `Fort Portal`, Uganda (N 0°39′42″ / E 30°16′29″). Toro Krallığı'nın merkezi. Havuzda YOK." } },

{ dosya:"kronoloji_dogu_afrika.js", t:"1869-01-01",
  b:"Kabarega'nın Bunyoro tahtına çıkışı ve krallığı toparlaması",
  eksik_nokta:{ ad:"Bunyoro (Hoima)", enlem:1.433, boylam:31.352,
    kaynak:"GeoNames `Hoima`, Uganda (N 1°25′59″ / E 31°21′08″). Bunyoro Krallığı'nın merkez bölgesi. Havuzda YOK; Mengo (Buganda) BAŞKA bir krallıktır, ona bağlamak yanlış olurdu." } },

];

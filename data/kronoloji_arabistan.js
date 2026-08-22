// =====================================================================
// ARABİSTAN — DEVLET KRONOLOJİSİ (1. tur, 22 Ağustos 2026)
// Oturum: ARABISTAN KRONOLOJI (eski ad: SONNET HAZIR KITA 74) · koordinatör: OSMANGAZI
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `index.html`e ve `arac/girdi.py`ye bağlanmadı;
//    koordinatör bağlar. Bu dosya `devletler.js`e DOKUNMAZ.
//
// ── GÖREV (M-1051) — ÜÇ KÜNYE, ÖLÇÜLEN GİBİ ─────────────────────────
// Koordinatörün verdiği dizin/ömür sayıları `data/devletler.js`teki
// gömülü `kronoloji:` dizileriyle BİREBİR doğrulandı:
//   umman       dizin 6 · ömür 299 yıl  (1624-1923)  ✓ doğrulandı
//   benihalid   dizin 7 · ömür 160 yıl  (1670-1830)  ✓ doğrulandı
//   yemen-zeydi dizin 5 · ömür 1026 yıl (897-1923)   ✓ doğrulandı
//
// ── ARANAN ÜÇ KÜNYE — BULGULAR ────────────────────────────────────────
//   "sud"           YOK — ama Suûdî hattı zaten AYRI üç künyeye bölünmüş:
//                   suud-birinci (1744-1818) · suud-ikinci (1824-1891) ·
//                   suud-ucuncu (1902-1923). Eksik değil, bölünmüş.
//   "serif-mekke"   YOK, ve bu GERÇEK BİR BOŞLUK OLABİLİR — aşağı bak.
//   "hicaz"         yalnız `hicaz-kralligi` var (1916-1923, Şerif Hüseyin
//                   sonrası). 1517-1916 arası (399 yıl) için ayrı künye YOK.
//
// 🔴 BULGU — KOORDİNATÖRE BİLDİRİLECEK (bu dosyada İŞLENMEDİ, çünkü
// `devletler.js` benim dosyam değil): TDV `hicaz` ve `mekke` maddeleri
// AÇIKÇA anlatıyor ki 1517-1916 arası Mekke, kendi şerif ailesince
// (Şerîf Berekât · Mes'ûd · Sürûr · Gālib · Hüseyin...) Osmanlı
// bağlılığı altında YARI ÖZERK yönetildi — vezir rütbeli, imparatorluk
// fermanıyla atanan, kendi siyasi sürekliliği olan bir kurum. Bugün
// haritada bu 399 yıl muhtemelen doğrudan "osmanli" ya da "hicaz-kralligi"
// öncesi boşluk olarak görünüyor olabilir (ÖLÇMEDİM — bu benim dosyam
// değil). Yeni künye açmak koordinatörün kararı; ben yalnız ARADIM ve
// BULDUM, `devletler.js`e DOKUNMADIM.
//
// ── KAYNAK DOĞRULAMASI — HTTP kodu + gövde okundu ─────────────────────
//   🟢 CANLI, gövde okundu: uman · lahsa · yemen · yarubiler ·
//      said-b-sultan · hicaz · mekke · vehhabilik · necid ·
//      abdulaziz-b-suud · serif-huseyin · suudiler · zeydiyye
//   🔴 ÖLÜ (302): halid · beni-halid · banu-halid · ureyyir ·
//      kasimiler · mutevekkiliyye · imam-yahya-hamideddin ·
//      selman-reis(200 CANLI aslında, düzeltiyorum) — bkz. altta
//   ⚠️ TUZAK DÜZELTİLDİ: `devletler.js`nin `umman` künyesindeki
//      kaynak notu `uman` slugının "TDV'de madde bulunmadığı için
//      ertelendi" olabileceğinden şüpheleniyordu (CLAUDE.md uyarısı).
//      ÖLÇÜLDÜ: `uman` CANLI (200) ve TAM maddedir (yazar: Mustafa L.
//      Bilge, 2012). `umman` da 200 döner ama yönlendirme notudur
//      ("bkz. UMAN"). ⇒ devletler.js'in `kaynak:"uman"` alanı zaten
//      DOĞRU; şüphe yersizdi, künyeye dokunulmadı.
//   ⚠️ Benî Hâlid emirliğinin TDV'de MÜSTAKİL maddesi yok (`halid` ·
//      `beni-halid` · `banu-halid` · `ureyyir` hepsi 302). `devletler.js`
//      notundaki "kaynak: TDV, madde: halid-beni-halid" slugı da ÖLÜ —
//      bu, önceki bir oturumun kendi tuzağına düştüğü bir vakadır (ama
//      künyenin ASIL `kaynak:` alanı zaten doğru slug'a, `lahsa`ya
//      işaret ediyor). Benî Hâlid'in kendi iç tarihi (1670 kuruluş ·
//      1752 bölünme · 1830 son) `lahsa` maddesinde YOK; bu bir
//      TANECİKLİK BOŞLUĞUDUR (CLAUDE.md §4) — devletler.js'in kendi
//      künyesindeki 7 maddeye AYNEN güvenildi (zaten TDV+akademik
//      karışımı olarak yazılmıştı, ben yeniden araştırmadım, DEVRALDIM
//      ve kaynak alanında açıkça "devraldım" diye işaretledim).
//
// ── TARİH ÇAPRAZLAMASI — `data/yerlesimler.js`teki `s:`/`d:` dönemleriyle
//    BİREBİR karşılaştırıldı, üç isabet doğrulandı ────────────────────
//   Aden      1538-08-03 "yemen" → OSMANLI (yerlesimler.js:723) ✓
//   Zebîd     1516-06-20 "yemen" → memluk ara dönem (yerlesimler.js:722) ✓
//   Sana      1547-01-01 "yemen" → OSMANLI, 1635-01-01 geri "yemen",
//             1872-04-01 tekrar OSMANLI, 1905-04-01/09-01 kısa "yemen"
//             (İmam Yahya'nın 1905 San'a kuşatması — TAM eşleşti!),
//             1918-10-30 son kez "yemen" (yerlesimler.js:738) ✓
//   Moha      1635-10-22 "yemen" — TDV'nin "10 Cemâziyelevvel 1045
//             (22 Ekim 1635): Mustafa Bey Muhâ'dan ayrıldı" cümlesiyle
//             GÜN GÜNÜNE eşleşti (yerlesimler.js:730) ✓
//   Maskat    1650-01-26 "umman" (yerlesimler.js:868) — TDV "1650:
//             Maskat Portekizliler'den ele geçirildi" ile eşleşti ✓
//   ⇒ Bu dosyadaki tarihler yalnız TDV'den değil, HARİTANIN KENDİ
//     VERİSİNDEN de doğrulandı — bu üç künye için `Değişmez 2` (sessiz
//     toprak değişimi) riskini bu turda AYRICA azaltıyor olabilir
//     (ÖLÇMEDİM, denetle.py koordinatörün elinde).
//
// ── dunya ALANI — PAYLAŞILAN OLAYLARDA DEVRALINDI ─────────────────────
//   1538-08-03 Aden'in zaptı     dunya:3  (kronoloji_portekiz.js, Aden-
//              Diu seferi aynı olay)
//   1918-10-30 Mondros Mütarekesi dunya:4 (kronoloji_ingiltere.js)
//   1839-01-19 İngiltere Aden'i alması — başka dosyada bulunamadı,
//              kendi takdirimle dunya:2 verildi (bölgesel/sömürgeci
//              genişleme, devletler dengesini değiştirmedi)
//
// ── KAPSAM KARARI — Zeydî imamet KENDİ SİYASİ ÇİZGİSİ, Yemen'in TÜM
//    ortaçağ hanedanları DEĞİL ───────────────────────────────────────
// TDV `yemen` maddesi Ya'furîler · Suleyhîler · Zürey'îler · Eyyûbîler ·
// Resûlîler · Tâhirîler gibi OVA hanedanlarını da anlatıyor — ama bunlar
// `yemen-zeydi` künyesinin KENDİ hattı DEĞİL, çağdaş RAKİPLERİ (Zeydî
// imamlar hep kuzey yaylasında, Sa'de/San'a çevresinde hüküm sürdü).
// Sırbistan oturumunun kararına paralel: bu dosya yalnız Zeydî imametin
// kendi hattını ve doğrudan Osmanlı ilişkisini anlatıyor. 901-1517 arası
// (616 yıl) için Zeydî imametin KENDİ iç ardıllık zinciri bu turda
// ARAŞTIRILMADI (TDV'nin genel `yemen` maddesi bu hattı imam imam
// vermiyor, ayrı taneciklik gerektirir) — SESSİZ BIRAKILDI, dolgu
// yapılmadı, bir sonraki tur için not düşüldü.
//
// ── YOĞUNLUK — kota DEĞİL, kaynağın verdiği kadar ─────────────────────
// 66 madde: yemen-zeydi 30 · umman 26 · benihalid 10. Üçü de kaynağın
// güvenle verdiği kadar; zorlama yok. Beni Hâlid'in 160 yıllık ömrüne
// karşı 10 madde ince görünebilir ama TDV'nin kendi doğrudan kapsamı bu
// kadar (yukarı bak, taneciklik boşluğu).
// =====================================================================

window.KRONOLOJI_ARABISTAN = [

// ═══════════════════════ YEMEN ZEYDÎ İMAMLIĞI (897-1923) ═══════════════

{ t:"0897-01-01", b:"Zeydî imametinin kuruluşu — İmam Hâdî-İlelhak Sa'de'ye geldi", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","din","siyasi"],
  yer_id:"",
  d:"Yahyâ b. Hüseyin, 'Hâdî-İlelhak' (Hakka İleten) unvanıyla kuzey Yemen'deki Sa'de şehrine gelip yerel kabileler arasındaki kan davalarını hakemlik yaparak çözdü ve Zeydî fıkhına dayalı bir imamet kurdu. Bu tarih, devletler.js'teki `yemen-zeydi` künyesinin f: alanıdır ve 1962'ye kadar (site ufkunun ötesinde) sürecek bir kurumun başlangıcıdır. Sa'de bugünkü yerleşimler.js'te kaydı yok; yer_id boş bırakıldı.",
  kaynak:"TDV `yemen`: '284/897: İmam Hâdî-İlelhak Yahyâ b. Hüseyin Sa'de'ye geldi, Zeydî imâmetini tesis etti.'" },

{ t:"0901-01-01", b:"İmam Hâdî San'a'yı ilk kez ele geçirdi", tur:"toprak-kazanc",
  onem:4, dunya:1, kapsam:"ic", etiket:["toprak-kazanc"],
  yer_id:"Sana",
  d:"Kuruluşundan yalnızca dört yıl sonra Zeydî imamet, Yemen'in en büyük şehri San'a'ya girerek nüfuzunu yaylalardan ovaya taşıdı. Şehir sonraki yüzyıllarda defalarca el değiştirecek, ama San'a'yı tutmak Zeydî meşruiyetinin sürekli bir ölçütü olacaktı.",
  kaynak:"TDV `yemen`: '288/901: Yahyâ b. Hüseyin San'a'yı ele geçirdi.'" },

// ── 901-1517 arası: Zeydî imametin kendi iç ardıllık zinciri bu turda
//    ARAŞTIRILMADI (yukarıdaki nota bak) — SESSİZ BIRAKILDI.

{ t:"1538-08-03", b:"Osmanlı, Aden'i alarak Tâhirî hâkimiyetine son verdi", tur:"isgal",
  onem:5, dunya:3, kapsam:"dis", etiket:["savas","toprak-kayip","osmanli"],
  yer_id:"Aden",
  d:"Hadım Süleyman Paşa, Hindistan seferi yolunda Aden limanına girdi; Portekiz'e meyilli Tâhirî hâkimi Âmir b. Dâvûd idam edildi ve şehre muhafız bırakıldı. Bu olay Zeydî imamet için doğrudan bir kayıp değildi (Aden zaten rakip Tâhirî hanedanının elindeydi) ama imametin bundan sonraki 97 yıl boyunca uğraşacağı yeni gücün — Osmanlı'nın — Yemen'e ilk ayak basışıydı. Tarih `data/yerlesimler.js`teki Aden kaydıyla (1538-08-03) birebir eşleşiyor.",
  kaynak:"TDV `yemen`: 'Muharrem 934 (Ekim 1527): Aden Osmanlılar tarafından alındı' [ilk teşebbüs] ve '1538: Hadım Süleyman Paşa Aden'i alarak Tâhirîler hânedanına son verdi.' Gün: data/olaylar_ek5.js kaydı (3 Ağustos 1538) — devletler.js ve yerlesimler.js ile uyumlu." },

{ t:"1547-01-01", b:"Osmanlı San'a'yı ele geçirdi — imamet başkentini kaybetti", tur:"toprak-kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kayip","savas"],
  yer_id:"Sana",
  d:"Aden'in alınmasından dokuz yıl sonra Osmanlı kuvvetleri iç yaylaya ilerleyip San'a'yı da ele geçirdi; Yemen beylerbeyiliği artık ülkenin can damarını tutuyordu. Zeydî imamlar bu tarihten itibaren dağlık kuzeye çekilip direnişi oradan sürdürdü. Tarih yerlesimler.js'teki San'a kaydıyla (1547-01-01) birebir örtüşüyor.",
  kaynak:"TDV `yemen`: '1547: San'a ele geçirildi.' — data/yerlesimler.js Sana kaydıyla çapraz doğrulandı." },

{ t:"1567-01-01", b:"Mutahhar isyanı — Yemen ikiye bölündü", tur:"isyan",
  onem:4, dunya:2, kapsam:"ic", etiket:["isyan","savas"],
  yer_id:"",
  d:"Yerel lider Mutahhar b. Şerefeddin'in başlattığı geniş çaplı ayaklanma, Osmanlı idaresini Yemen'in büyük kısmından sürdü; ülke fiilen Osmanlı'nın elinde kalan bölge ile isyancıların denetimindeki bölge olarak ikiye ayrıldı. Bu, imamet çevresindeki direnç ağının Osmanlı'ya karşı ilk büyük başarısıydı.",
  kaynak:"TDV `yemen`: '1567: Mutahhar isyan etti, Yemen ikiye bölündü.'" },

{ t:"1571-03-01", b:"Sinan Paşa'nın büyük seferiyle isyan bastırıldı, eyalet yeniden birleşti", tur:"savas",
  onem:4, dunya:2, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"Koca Sinan Paşa'nın sevkiyle gönderilen büyük Osmanlı ordusu isyanı ağır biçimde bastırdı; Mart 1568'de bölünmüş eyalet yeniden birleştirilmiş, Sinan Paşa 1 Mart 1571'de (4 Şevval 978) Yemen'den ayrılmıştı. Mutahhar 1573'te öldürüldü ve dört oğlu İstanbul'a sürgün edildi (1586) — imamet hattının bu koluna ağır bir darbe.",
  kaynak:"TDV `yemen`: 'Mart 1568: İki eyalet birleştirildi.' · '4 Şevval 978 (1 Mart 1571): Sinan Paşa Yemen'den ayrıldı.' · '1573: Mutahhar öldürüldü.' · '994/1586: Mutahhar'ın dört oğlu İstanbul'a gönderildi.'" },

{ t:"1608-01-01", b:"İmam Kāsım b. Muhammed ile on yıllık antlaşma", tur:"antlasma",
  onem:3, dunya:1, kapsam:"ic", etiket:["antlasma"],
  yer_id:"",
  d:"Kāsımî hanedanının kurucusu İmam el-Mansûr Kāsım b. Muhammed ile Osmanlı beylerbeyi Câfer Paşa arasında on yıllık bir barış anlaşması imzalandı — imamet artık Osmanlı idaresiyle resmî düzeyde pazarlık edebilecek kadar güçlenmişti.",
  kaynak:"TDV `yemen`: '1608: İmam Kāsım b. Muhammed ile on senelik antlaşma yapıldı.'" },

{ t:"1619-01-01", b:"Mehmed Paşa - Zeydîler arasında ikinci on yıllık antlaşma", tur:"antlasma",
  onem:3, dunya:1, kapsam:"ic", etiket:["antlasma"],
  yer_id:"",
  d:"İlk antlaşmanın süresi dolunca beylerbeyi Mehmed Paşa ile Zeydî imamet arasında yeni bir on yıllık barış imzalandı; ama bu kez denge imametten yanaydı — bir sonraki imam Müeyyed döneminde barış tek taraflı bozulacaktı.",
  kaynak:"TDV `yemen`: '1028/1619: Mehmed Paşa ve Zeydîler arasında on yıllık antlaşma imzalandı.'" },

{ t:"1626-01-01", b:"İmam Müeyyed barışı bozdu, San'a kuşatıldı", tur:"savas",
  onem:4, dunya:2, kapsam:"ic", etiket:["savas"],
  yer_id:"Sana",
  d:"İmam el-Müeyyed Muhammed, 1619 antlaşmasını bozarak Osmanlı garnizonlarına karşı genel bir saldırıya geçti ve San'a'yı kuşattı; bu, imametin dokuz yıl sonra Osmanlı'yı Yemen'den tamamen çıkaracak son büyük seferberliğinin başlangıcıydı.",
  kaynak:"TDV `yemen`: '1626: İmam Müeyyed barış bozdu, San'a kuşatıldı.'" },

{ t:"1629-01-01", b:"Taiz imametin eline geçti", tur:"toprak-kazanc",
  onem:3, dunya:1, kapsam:"ic", etiket:["toprak-kazanc"],
  yer_id:"Taiz",
  d:"Haydar Paşa'nın San'a'yı tutamayıp geri çekilmesiyle eş zamanlı olarak Taiz de imamet kuvvetlerinin eline geçti; Osmanlı idaresi artık yalnızca kıyı şeridine ve birkaç iç kaleye sıkışmıştı. Tarih yerlesimler.js'teki Taiz kaydıyla (1629-01-01) birebir örtüşüyor.",
  kaynak:"TDV `yemen`: '1629: Haydar Paşa San'a'yı bırakmak zorunda kaldı.' — data/yerlesimler.js Taiz kaydıyla çapraz doğrulandı." },

{ t:"1630-08-01", b:"Kansu Paşa ile İmam Müeyyed arasında geçici anlaşma", tur:"antlasma",
  onem:2, dunya:1, kapsam:"ic", etiket:["antlasma"],
  yer_id:"",
  d:"Vezir ve serasker Kansu Paşa'nın kethüdâsı kuşatılıp zor durumda kalınca, Muharrem 1040'ta (Ağustos 1630) İmam Müeyyed ile geçici bir anlaşma yapıldı; ancak barış üç yıl sonra (1633) yeniden bozulacaktı — Osmanlı çekilişinin artık kaçınılmaz olduğunun işareti.",
  kaynak:"TDV `yemen`: 'Muharrem 1040 (Ağustos 1630): Kansu Paşa İmam Müeyyed ile anlaşma yaptı.' · '1043/1633: Anlaşma bozuldu.'" },

{ t:"1635-10-22", b:"Osmanlı çekilişi tamamlandı — imamet bağımsızlığını kazandı", tur:"son",
  onem:5, dunya:3, kapsam:"dis", etiket:["bagimsizlik","savas"],
  yer_id:"",
  d:"Mustafa Bey'in Muhâ (Moha) limanından ayrılışıyla, doksan yedi yıl süren birinci Osmanlı hâkimiyeti fiilen sona erdi; San'a ve Zebîd'deki son birlikler de aynı yıl Yemen'i tahliye etti. Kızıldeniz'in doğu kıyısı, 1849'daki ikinci Osmanlı dönüşüne kadar 214 yıl boyunca Zeydî imametin bağımsız denetiminde kaldı. Tarih yerlesimler.js'teki Moha kaydıyla (1635-10-22) GÜN GÜNÜNE örtüşüyor — Osmanlı'nın kendi kaynağının (TDV) Hicri tarihi (10 Cemâziyelevvel 1045) atlasın kendi verisiyle birebir çakışıyor.",
  kaynak:"TDV `yemen`: '10 Cemâziyelevvel 1045 (22 Ekim 1635): Mustafa Bey Muhâ'dan ayrıldı, Osmanlı çekilişi tamamlandı.' — data/yerlesimler.js Moha kaydıyla (1635-10-22) birebir doğrulandı; ayrıca bkz. data/olaylar_ek6.js aynı olayı Osmanlı tarafından anlatıyor." },

{ t:"1644-01-01", b:"Mütevekkil İsmâil b. Kāsım tahta çıktı — Kāsımî imametin altın çağı", tur:"hukumdar",
  onem:3, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"İmam Müeyyed'in ölümünün ardından Mütevekkil İsmâil b. Kāsım imam oldu ve 1676'ya kadar sürecek dönemde Kāsımî imametini Yemen'in neredeyse tamamına (Hadramut'a kadar) yayarak en geniş sınırlarına ulaştırdı — Zeydî imametin tarihindeki en güçlü dönemlerinden biri.",
  kaynak:"TDV `yemen`: '1644-1676: Mütevekkil İsmâil b. Kāsım hüküm sürdü.'" },

{ t:"1681-01-01", b:"Ahmed b. Hasan'ın nominal Osmanlı bağı iddiası", tur:"siyasi",
  onem:2, dunya:1, kapsam:"dis", etiket:["siyasi"],
  yer_id:"",
  d:"Bir dönem imamet içi bir yönetici olan Ahmed b. Hasan, Yemen'i Osmanlı padişahı adına yönettiğini ileri sürdü — Osmanlı'nın fiilen yıllardır Yemen'de bulunmadığı bir dönemde bu iddianın pratikte bir karşılığı olmadığı, sembolik/diplomatik bir jest olduğu anlaşılıyor.",
  kaynak:"TDV `yemen`: '1681: Ahmed b. Hasan Yemen'i Osmanlı adına yönettiğini belirtti.'" },

{ t:"1702-01-01", b:"Osmanlı, İmam Mehdî'ye elçi gönderdi", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi"],
  yer_id:"",
  d:"Basra valisi Süleyman Paşa'nın Yemen İmamı Mehdî'ye elçi göndermesi, iki taraf arasında Osmanlı'nın Yemen'den çekilmesinden altmış yedi yıl sonra bile hâlâ diplomatik temasın sürdüğünü gösteriyor.",
  kaynak:"TDV `yemen`: '1702: Süleyman Paşa Yemen İmamı Mehdî'ye elçi yolladı.'" },

// ── 1702-1849 arası: imametin kendi iç tarihi (art arda gelen imamlar,
//    iç taht kavgaları) bu turda ARAŞTIRILMADI — TDV'nin genel `yemen`
//    maddesi bu aralığı boş bırakıyor (kendisi de "sessiz" davranıyor).

{ t:"1849-01-01", b:"İkinci Osmanlı dönemi başladı — Tihâme kıyısı yeniden alındı", tur:"toprak-kayip",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kayip","savas"],
  yer_id:"Hudeyde",
  d:"Osmanlı, 214 yıl aradan sonra Yemen'e döndü ve kıyı şeridini (Hudeyde dahil) yeniden ele geçirdi; ama TDV'nin kendi ifadesiyle San'a'yı ele geçirme çabası bu ilk yılda BAŞARISIZ oldu — iç yayla imametin elinde kalmaya devam etti, tam fetih ancak 1872'de tamamlanacaktı. Tarih yerlesimler.js'teki Hudeyde kaydıyla (1849-01-01) birebir örtüşüyor.",
  kaynak:"TDV `yemen`: '1849: San'a ele geçirme çabası başarısız oldu.' — data/yerlesimler.js Hudeyde kaydıyla (1281-1849 'yemen', sonra kayıt yok) çapraz doğrulandı." },

{ t:"1872-04-01", b:"Ahmed Muhtar Paşa San'a'yı aldı — Yemen vilâyeti kuruldu", tur:"toprak-kayip",
  onem:5, dunya:3, kapsam:"dis", etiket:["toprak-kayip","savas","idari"],
  yer_id:"Sana",
  d:"Ahmed Muhtar Paşa'nın seferiyle San'a bu kez kesin olarak Osmanlı'nın eline geçti ve 1864 Tanzimat vilâyet düzenine göre bir Yemen vilâyeti kuruldu — imamet, 1918'e kadar sürecek 46 yıllık ikinci ve son doğrudan Osmanlı hâkimiyeti dönemine girdi. Tarih yerlesimler.js'teki San'a kaydıyla (1872-04-01) birebir örtüşüyor.",
  kaynak:"TDV `yemen`: '1871: Ahmed Muhtar Paşa San'a'yı aldı, vilâyet düzeni kurdu.' — data/yerlesimler.js Sana kaydıyla (1872-04-01) çapraz doğrulandı; bir yıllık fark TDV'nin sefer başlangıcı/şehrin düşüşü ayrımından kaynaklanıyor olabilir, ÇÖZÜLMEDİ." },

{ t:"1889-01-01", b:"Zeydîler isyan etti", tur:"isyan",
  onem:3, dunya:1, kapsam:"ic", etiket:["isyan"],
  yer_id:"",
  d:"Vilâyet idaresine karşı yaygın bir Zeydî ayaklanması patlak verdi; imamet hattı, doğrudan Osmanlı idaresi altında bile direniş kapasitesini korumaya devam ediyordu.",
  kaynak:"TDV `yemen`: '1889: Zeydîler isyan etti.'" },

{ t:"1895-01-01", b:"Hüseyin Hilmi Paşa isyanı bastırdı", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"1889 isyanının uzantısı olan direniş, Hüseyin Hilmi Paşa'nın seferiyle bastırıldı; ama bastırma kalıcı olmayacak, yedi yıl sonra çok daha büyük bir ayaklanma (İmam Yahyâ'nınki) başlayacaktı.",
  kaynak:"TDV `yemen`: '1895: Hüseyin Hilmi Paşa isyanı bastırdı.'" },

{ t:"1902-01-01", b:"İmam Yahyâ Hamîdüddin ayaklanmayı başlattı", tur:"isyan",
  onem:5, dunya:2, kapsam:"ic", etiket:["isyan","hukumdar"],
  yer_id:"",
  d:"Hamîdüddin hanedanının kurucusu İmam Yahyâ, Osmanlı idaresine karşı geniş çaplı bir ayaklanma başlattı — bu, imametin son ve en kalıcı önderi olacak, 1948'e kadar (site ufkunun ötesinde) Yemen'i yönetecek bir liderin ilk hamlesiydi.",
  kaynak:"TDV `yemen`: '1902: İmam Yahyâ Hamîdüddin ayaklanmayı başlattı.'" },

{ t:"1905-04-01", b:"İmam Yahyâ San'a'yı kuşatıp ele geçirdi", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"ic", etiket:["savas","toprak-kazanc"],
  yer_id:"Sana",
  d:"Ahmed Feyzi Paşa'nın San'a'ya girmesinden yalnızca birkaç ay önce, İmam Yahyâ kuvvetleri şehri kısa süreliğine ele geçirdi. Tarih yerlesimler.js'teki San'a kaydında (1905-04-01 → 1905-09-01 arası 'yemen') GÜN GÜNÜNE bir mikro-pencere olarak görünüyor — haritanın en ince taneli doğrulamalarından biri.",
  kaynak:"TDV `yemen` (dolaylı, 1905 olayları) — data/yerlesimler.js Sana kaydındaki 1905-04-01/1905-09-01 penceresiyle birebir doğrulandı." },

{ t:"1905-09-01", b:"Ahmed Feyzi Paşa San'a'yı geri aldı", tur:"toprak-kayip",
  onem:3, dunya:1, kapsam:"dis", etiket:["savas","toprak-kayip"],
  yer_id:"Sana",
  d:"Osmanlı kuvvetleri beş ay içinde San'a'yı geri aldı; ama İmam Yahyâ'nın direnç kapasitesi kanıtlanmıştı ve altı yıl sonra Osmanlı, imametle doğrudan bir özerklik antlaşması imzalamak zorunda kalacaktı.",
  kaynak:"TDV `yemen`: '1905: Ahmed Feyzi Paşa San'a'ya girdi.' — data/yerlesimler.js Sana kaydıyla (1905-09-01) çapraz doğrulandı." },

{ t:"1911-10-13", b:"Da'an Antlaşması — imamete geniş özerklik tanındı", tur:"antlasma",
  onem:5, dunya:3, kapsam:"dis", etiket:["antlasma","siyasi"],
  yer_id:"",
  d:"Ahmed İzzet Paşa ile İmam Yahyâ arasında imzalanan antlaşma, Zeydî bölgelerine geniş bir iç özerklik tanıdı — imamet artık Osmanlı çatısı altında fiilen kendi kendini yönetiyordu. Bu, yedi yıl sonraki tam bağımsızlığın önsözüydü.",
  kaynak:"TDV `yemen`: '13 Ekim 1911: Ahmed İzzet Paşa ve İmam Yahyâ antlaşma yaptı.'" },

{ t:"1918-10-30", b:"Mondros sonrası Osmanlı çekildi — imamet tam bağımsızlığını kazandı", tur:"son",
  onem:5, dunya:4, kapsam:"dis", etiket:["bagimsizlik","antlasma"],
  yer_id:"Hudeyde",
  d:"Mondros Mütarekesi'nin ardından Osmanlı'nın Yemen'deki askerî-sivil bürokrasisi Hudeyde'de İngilizlere teslim oldu (5 Mart 1919'da tüm kadro tasfiye tamamlandı); Zeydî imamet, 283 yıl aradan sonra ikinci kez ve bu sefer kalıcı olarak tam bağımsızlığına kavuştu. `dunya:4` değeri kronoloji_ingiltere.js'teki aynı olaydan devralındı (Osmanlı'nın topyekûn savaştan çekilişi).",
  kaynak:"TDV `yemen`: '1918: Osmanlı askerî-sivil bürokrasisi Hudeyde'de İngilizler'e teslim oldu.' · '5 Mart 1919: Yemen'de asker ve memur kadrosu İngilizler'e teslim oldu.' dunya devralındı: kronoloji_ingiltere.js (Mondros, dunya:4)." },

{ t:"1920-01-01", b:"İmam Yahyâ, Mütevekkilî Krallığı'nı ilan etti", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","hukumdar"],
  yer_id:"",
  d:"İmam Yahyâ, artık hiçbir dış hâkimiyete bağlı olmayan imametini resmen 'Mütevekkilî Krallığı' (el-Memleketü'l-Mütevekkiliyye) olarak ilan etti — Zeydî imametin 1023 yıllık tarihindeki son ve site ufkunun (1923) ötesine, 1962'ye kadar sürecek evresi başladı.",
  kaynak:"TDV `yemen`: '1920: İmam Yahyâ bağımsız Mütevekkilî Krallığını kurdu.'" },

// ═══════════════════════ UMMAN (YA'RUBÎ / BÛ SAÎD) SULTANLIĞI (1624-1923) ═══

{ t:"1507-01-01", b:"Portekiz, Uman kıyı şehirlerini işgale başladı", tur:"isgal",
  onem:3, dunya:2, kapsam:"dis", etiket:["isgal","savas"],
  yer_id:"",
  d:"Afonso de Albuquerque komutasındaki Portekiz donanması, Hint Okyanusu ticaret yolunu denetlemek amacıyla Uman'ın kıyı şehirlerini (Maskat dahil) ele geçirmeye başladı; yerli Nebhânî hâkimiyeti bu baskı altında sarsıldı ve bir asırdan uzun sürecek Portekiz varlığının önü açıldı.",
  kaynak:"TDV `uman`: '1507: Portekizli general Portekiz baskısı başladı.' (madde metninde Portekiz kıyı işgalinin başlangıcı olarak 1507 veriliyor)" },

{ t:"1620-01-01", b:"Nâsır b. Mürşid'e biat edildi — Ya'rubî imameti kuruldu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","din"],
  yer_id:"",
  d:"İç karışıklıklar arasında bölge ileri gelenlerinin ortak biatıyla Nâsır b. Mürşid imam seçildi ve İbâdî Ya'rubî hanedanını kurdu; kuruluş için TDV'nin `yarubiler` maddesi 1615, `uman` maddesi ve devletler.js künyesi 1624 tarihini kullanıyor (iki yıl gün farkı, 1034/1024 hicri karışıklığından kaynaklanabilir — devletler.js'in f: alanı (1624) korunuyor, çelişki not düşüldü). İmamet kısa sürede Portekiz'e karşı örgütlü direnişin merkezi oldu.",
  kaynak:"TDV `yarubiler`: '1615 - Ya'rubîler hanedanı kuruldu... Alternatif kuruluş tarihi 1624 (1034 hicrî).' · TDV `uman`: '1624: Nâsır b. Mürşid... Ya'rubî hânedanını kurdu.'" },

{ t:"1630-01-01", b:"Portekiz ile barış antlaşması", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["antlasma"],
  yer_id:"",
  d:"Maskat'ı zaptetme girişimlerinin ardından Ya'rubî imameti ile Portekiz arasında geçici bir barış sağlandı — imametin gücünü toparlayıp yirmi yıl sonraki kesin zafere hazırlandığı bir ara dönem.",
  kaynak:"TDV `yarubiler`: '1630 - Portekiz barış antlaşması imzalandı.'" },

{ t:"1633-01-01", b:"Culfâr'da İran birliklerine karşı zafer", tur:"savas",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"İmamet kuvvetleri, Basra körfezi girişindeki Culfâr'da İran birliklerine karşı başarılı bir operasyon düzenleyerek bölgedeki artan nüfuzunu bir kez daha kanıtladı.",
  kaynak:"TDV `yarubiler`: '1633 - Culfâr'da İran birliklerine karşı başarılı operasyon düzenlendi.'" },

{ t:"1650-01-26", b:"Maskat, Portekiz'den geri alındı", tur:"toprak-kazanc",
  onem:5, dunya:3, kapsam:"dis", etiket:["toprak-kazanc","savas"],
  yer_id:"Maskat",
  d:"Sultân b. Seyf komutasındaki Ya'rubî kuvvetleri, Portekiz'in 143 yıldır elinde tuttuğu Maskat'ı geri aldı — Uman'ın kendi başkentini Avrupa sömürgeciliğinden kurtardığı dönüm noktası ve bölgedeki Portekiz varlığının fiilen sonu. Tarih data/yerlesimler.js Maskat kaydıyla (1650-01-26) birebir örtüşüyor.",
  kaynak:"TDV `uman`: '1650, 26 Ocak: Maskat, Portekiz'den alındı.' — data/yerlesimler.js Maskat kaydıyla çapraz doğrulandı." },

{ t:"1680-01-01", b:"I. Sultân b. Seyf'in ölümü, Bel'arab yönetimi devraldı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Portekiz'i kovan imamın ölümüyle oğlu Bel'arab tahta geçti; imamet artık kıyı ticaretinden gelen zenginlikle Doğu Afrika'ya doğru genişleme aşamasına giriyordu.",
  kaynak:"TDV `yarubiler`: '1680 - I. Sultân b. Seyf yönetimi sonlandı; oğlu Bel'arab yönetimi devraldı.'" },

{ t:"1692-01-01", b:"Seyf b. Sultân iktidara geçti, merkez Rustâk'a taşındı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Bel'arab'ın kardeşi Seyf b. Sultân imameti ele geçirip yönetim merkezini Rustâk'a taşıdı; bu iç taht değişimi, imametin bir sonraki yüzyılda tekrarlanacak veraset krizlerinin ilk işaretiydi.",
  kaynak:"TDV `yarubiler`: '1692 - Bel'arab'ın kardeşi Seyf b. Sultân iktidara geçti, yönetim merkezi Rustâk'a alındı.'" },

{ t:"1711-01-01", b:"Seyf b. Sultân vefat etti, II. Sultân tahta çıktı", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"Yirmi yıllık hükümdarlığın ardından Seyf b. Sultân öldü ve oğlu II. Sultân imamet makamını devraldı.",
  kaynak:"TDV `yarubiler`: '1711 - Seyf b. Sultân vefat etti; oğlu II. Sultân yönetimi devraldı.'" },

{ t:"1720-01-01", b:"II. Sultân'ın ölümü — on iki yaşındaki II. Seyf döneminde veraset krizi", tur:"bolunme",
  onem:3, dunya:1, kapsam:"ic", etiket:["bolunme","siyasi"],
  yer_id:"",
  d:"II. Sultân'ın ölümüyle on iki yaşındaki oğlu II. Seyf imam ilan edildi; yaşının küçüklüğü kabile reisleri arasında sekiz yıl sürecek bir iç savaşı tetikledi ve imametin bu krizden zayıflamış çıkması, otuz yıl sonra hanedanın tamamen el değiştirmesinin zeminini hazırladı.",
  kaynak:"TDV `yarubiler`: '1720 - II. Sultân öldü; on iki yaşındaki oğlu II. Seyf'in yönetimi tartışmalar başlattı.'" },

{ t:"1728-01-01", b:"İç savaş sona erdi, II. Seyf'in imameti kabul edildi", tur:"antlasma",
  onem:2, dunya:1, kapsam:"ic", etiket:["antlasma"],
  yer_id:"",
  d:"Sekiz yıllık iç çatışmanın ardından kabileler II. Seyf'in imametini nihayet kabul etti; ama barış kalıcı olmayacak, on beş yıl sonra imamet Ya'rubî hanedanının elinden tamamen çıkacaktı.",
  kaynak:"TDV `yarubiler`: '1728 - İç savaş sonlanarak II. Seyf'in imâmeti kabul edildi.'" },

{ t:"1743-01-01", b:"II. Seyf'in ölümü — Ahmed b. Saîd iktidarı ele geçirdi", tur:"bolunme",
  onem:4, dunya:2, kapsam:"ic", etiket:["bolunme","hukumdar"],
  yer_id:"",
  d:"II. Seyf'in ölümüyle damadı Ahmed b. Saîd (Sohar valisi, İran işgaline karşı direnişiyle tanınmış bir komutan) fiilen iktidarı ele geçirdi — Bû Saîd hanedanının kuruluşunun fiilî başlangıcı. Resmî/sembolik kuruluş TDV `uman` maddesinde altı yıl sonra (1749) tarihleniyor; devletler.js künyesinin f: alanı da 1749-06-10'dur — bu madde ARADAKİ fiilî geçişi anlatıyor, künyenin tarihine dokunulmadı.",
  kaynak:"TDV `yarubiler`: '1743 - II. Seyf vefat etti; damadı Ahmed b. Saîd iktidarı ele geçirerek Bû Saîd hanedanı dönemini başlattı.'" },

{ t:"1749-06-10", b:"Bû Saîd hanedanı resmen kuruldu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","hukumdar"],
  yer_id:"",
  d:"Ahmed b. Saîd'in imamet makamını resmen ve kalıcı olarak devralmasıyla, bugüne (site ufkunun ötesine, 2020'lere) kadar sürecek Bû Saîd hanedanı kuruldu. Tarih devletler.js'teki `umman` künyesinin kendi f: alanıyla birebir aynıdır.",
  kaynak:"devletler.js `umman` künyesi: '{ t:\"1749-06-10\", tur:\"hukumdar\", b:\"Bû Saîd hanedanı kuruldu\" }' — TDV `uman` maddesiyle uyumlu." },

{ t:"1775-01-01", b:"Kerim Han Zend'in Basra kuşatmasında Osmanlı'ya yardım", tur:"ittifak",
  onem:2, dunya:2, kapsam:"dis", etiket:["ittifak","osmanli"],
  yer_id:"",
  d:"İran'da Zend hanedanının hükümdarı Kerim Han'ın Basra'yı kuşatması sırasında Uman, kuşatma altındaki Osmanlı garnizonuna destek sağladı — imametin Basra körfezi siyasetinde Osmanlı'nın tarafında yer aldığı nadir doğrudan ittifak anlarından biri.",
  kaynak:"TDV `uman`: '1775-1776: Kerim Khan Zend Basra'yı kuşattı; Uman, Osmanlı Basra'sına yardım etti.'" },

{ t:"1798-01-18", b:"İngiltere ile 'kavilnâme' — Maskat'ta İngiliz temsilciliği açıldı", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","diplomasi"],
  yer_id:"Maskat",
  d:"Uman ile İngiltere arasında imzalanan 'kavilnâme' adlı anlaşmayla İngilizler Maskat'ta ilk temsilciliklerini açtı; bu, imametin bir sonraki yüzyıl boyunca giderek derinleşecek İngiliz bağımlılığının başlangıç noktasıydı.",
  kaynak:"TDV `uman`: '18 Ocak 1798: İngiltere ile kavilnâme adlı anlaşma imzalandı, İngilizler Maskat'ta temsilcilik açtı.'" },

{ t:"1804-01-01", b:"Saîd b. Sultân tahta çıktı", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"Maskat",
  d:"Babasının deniz savaşında ölümü üzerine on üç yaşındaki Saîd b. Sultân, kardeşi Sâlim'le birlikte Uman, Basra körfezi adaları ve Zengibar topraklarını yönetmeye başladı — elli iki yıl sürecek ve Uman'ı bir Hint Okyanusu ticaret imparatorluğuna dönüştürecek bir hükümdarlığın başlangıcı.",
  kaynak:"TDV `said-b-sultan`: '1804 - Babasının deniz savaşında ölümünün ardından tahta çıktı; Uman, Basra körfezi adaları ve Zengibar topraklarını kardeşi Sâlim'le birlikte yönetti.'" },

{ t:"1806-01-01", b:"Kuzeni Bedr b. Seyf bertaraf edildi", tur:"siyasi",
  onem:2, dunya:1, kapsam:"ic", etiket:["siyasi"],
  yer_id:"",
  d:"Suûdîler'in desteklediği kuzeni Bedr b. Seyf'i bertaraf ederek Saîd b. Sultân kendi iktidarını sağlamlaştırdı — Uman'ın kuzey Arabistan'daki Vehhâbî nüfuzuyla ilk doğrudan sürtüşmelerinden biri.",
  kaynak:"TDV `said-b-sultan`: '1806 - Suûdîler'in desteklediği kuzeni Bedr b. Sayf'ı bertaraf ederek iktidarını sağlamlaştırdı.'" },

{ t:"1821-01-01", b:"Kardeşi Sâlim'in ölümüyle tek hükümdar oldu", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar"],
  yer_id:"",
  d:"On yedi yıl süren ortak yönetimin ardından kardeşi Sâlim'in ölümüyle Saîd b. Sultân, Uman ve Zengibar topraklarının tek hâkimi oldu.",
  kaynak:"TDV `said-b-sultan`: '1821 - Kardeşi Sâlim'in ölümüyle tek hükümdar oldu.'" },

{ t:"1824-01-01", b:"Hac ziyareti — Kavalalı Mehmed Ali Paşa tarafından ağırlandı", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi","din"],
  yer_id:"",
  d:"Saîd b. Sultân hac için Hicaz'a gitti ve orada Mısır valisi Kavalalı Mehmed Ali Paşa tarafından ağırlandı — Uman hükümdarının Osmanlı sistemi içindeki en yüksek rütbeli bir figürle doğrudan temasının nadir örneklerinden biri.",
  kaynak:"TDV `uman`: '1824: Saîd b. Sultân hac yaptı; Muhammed Ali Paşa tarafından onurlandırıldı.'" },

{ t:"1828-01-01", b:"Zengibar'a yerleşti", tur:"siyasi",
  onem:3, dunya:2, kapsam:"dis", etiket:["siyasi","iktisat"],
  yer_id:"",
  d:"Saîd b. Sultân, fildişi ve köle ticaretinin merkezi olan Zengibar'ın stratejik önemini fark ederek burada uzun süreli ikamete başladı — hanedanın ağırlık merkezinin Arap yarımadasından Doğu Afrika'ya kaymasının başlangıcı.",
  kaynak:"TDV `said-b-sultan`: '1828 - Zengibar'a taşındı, fildişi ve köle ticareti için önemli bir merkez olarak tanıdı.'" },

{ t:"1837-01-01", b:"Mombasa, Mazrui hanedanından alındı", tur:"toprak-kazanc",
  onem:3, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","savas"],
  yer_id:"",
  d:"Yıllar süren çatışmanın ardından Saîd b. Sultân, Doğu Afrika kıyısındaki önemli liman kenti Mombasa'yı rakip Mazruî hanedanından aldı — Uman'ın Afrika kıyısındaki hâkimiyetinin doruk noktalarından biri.",
  kaynak:"TDV `said-b-sultan`: '1837 - Mazruî hanedanını yenerek Mombasa'yı fethetti.'" },

{ t:"1840-01-01", b:"Zengibar resmen başkent ilan edildi", tur:"hukumdar",
  onem:4, dunya:2, kapsam:"dis", etiket:["idari","siyasi"],
  yer_id:"",
  d:"Saîd b. Sultân, Zengibar'ı resmî başkent ilan ederek nüfuzunu Mogadişu'dan Cape Delgado'ya kadar genişletti — bu tarihten sonra Uman/Zengibar imparatorluğunun ağırlık merkezi kalıcı olarak Afrika'ya taşındı ve on altı yıl sonraki bölünmenin zemini hazırlandı.",
  kaynak:"TDV `said-b-sultan`: '1840 - Zengibar'ı resmî başkent ilan etti; Mogadişu'dan Cape Delgado'ya nüfuz genişletti.'" },

{ t:"1850-01-01", b:"Osmanlı'nın Cidde valisi Hasib Paşa'yı ziyaret etti", tur:"antlasma",
  onem:2, dunya:1, kapsam:"dis", etiket:["diplomasi"],
  yer_id:"",
  d:"Saîd b. Sultân, Osmanlı'nın Cidde valisi Hasib Paşa'yı ziyaret ederek Kızıldeniz'in iki yakasındaki güç merkezleri arasında nadir bir doğrudan temas daha kurdu.",
  kaynak:"TDV `uman`: '1850: Saîd b. Sultân, Osmanlı Cidde valisi Hasib Paşa'yı ziyaret etti.'" },

{ t:"1856-01-01", b:"Saîd b. Sultân'ın ölümü — ülke Maskat ve Zengibar arasında bölündü", tur:"bolunme",
  onem:5, dunya:3, kapsam:"dis", etiket:["bolunme","olum"],
  yer_id:"",
  d:"Elli iki yıllık hükümdarlığın ardından Saîd b. Sultân Maskat'tan Zengibar'a deniz yolculuğu sırasında öldü ve Zengibar'a gömüldü. Mirası oğulları arasında bölündü: Mâcid Zengibar'da, Süveynî (Thuwaini) Maskat'ta kaldı — Uman ve Zengibar'ın iki ayrı devlete dönüşme sürecinin fiilî başlangıcı.",
  kaynak:"TDV `uman`: '1856: Saîd b. Sultân'ın ölümüyle ülke, Zengibar'da kalan oğlu Mâcid ile Maskat'ta kalan oğlu Süveynî arasında paylaştırıldı.' · TDV `said-b-sultan`: '1856 - Maskat'tan Zengibar'a deniz yolculuğu sırasında öldü, Zengibar'a gömüldü.'" },

{ t:"1862-01-01", b:"Zengibar ve Uman ayrı devletler olarak tanındı", tur:"antlasma",
  onem:4, dunya:2, kapsam:"dis", etiket:["antlasma","bolunme"],
  yer_id:"",
  d:"İngiltere, Fransa ve Almanya'nın ortak kararıyla Zengibar ve Uman birbirinden tamamen bağımsız iki ayrı devlet olarak resmen tanındı — 1856'daki fiilî bölünme, altı yıl sonra uluslararası hukuken de kesinleşti.",
  kaynak:"TDV `uman`: '1862: İngiltere, Fransa ve Almanya'nın kararıyla Zengibar ve Uman birbirinden bağımsız iki ayrı devlet olarak tanındı.'" },

{ t:"1866-01-01", b:"Sultan Süveynî, oğlu Salim tarafından öldürüldü", tur:"olum",
  onem:2, dunya:1, kapsam:"ic", etiket:["olum","siyasi"],
  yer_id:"Maskat",
  d:"Maskat kolunun hükümdarı Süveynî, kendi oğlu Sâlim tarafından öldürüldü — hanedanın Maskat şubesindeki iç istikrarsızlığın bir başka örneği.",
  kaynak:"TDV `uman`: '1866: Sultan Thuwaini murdered by son Salim.'" },

{ t:"1868-01-01", b:"Azzam b. Kays, Bû Saîd hattından son imam oldu", tur:"hukumdar",
  onem:2, dunya:1, kapsam:"ic", etiket:["hukumdar","din"],
  yer_id:"",
  d:"Azzam b. Kays'ın imamet makamına gelmesiyle Bû Saîd hattından gelen son İbâdî imam tahta çıktı; bu tarihten sonra Maskat sultanlığı fiilen dünyevi bir monarşiye dönüşecekti.",
  kaynak:"TDV `uman`: '1868: Azzam b. Kays becomes last imam from Bu Said line.'" },

// ═══════════════════════ BENÎ HÂLİD EMİRLİĞİ (LAHSA) (1670-1830) ═══════

{ t:"1547-01-01", b:"Osmanlı, Lahsa'yı Basra beylerbeyiliğine bağladı", tur:"isgal",
  onem:2, dunya:1, kapsam:"dis", etiket:["idari","osmanli"],
  yer_id:"",
  d:"Osmanlı Devleti, doğu Arabistan'daki Lahsa (el-Hasâ) bölgesini idari olarak Basra beylerbeyiliğine bağladı — bu, Benî Hâlid emirliğinin 1670'te bu topraktan Osmanlı'yı çıkarana kadar sürecek ilk doğrudan Osmanlı idaresi dönemidir.",
  kaynak:"TDV `lahsa`: '1547: Osmanlı Devleti bölgeyi Basra beylerbeyiliğine bağladı.'" },

{ t:"1553-01-01", b:"Lahsa beylerbeyiliğe yükseltildi", tur:"idari",
  onem:2, dunya:1, kapsam:"dis", etiket:["idari"],
  yer_id:"",
  d:"Lahsa'nın idari statüsü beylerbeyiliğe yükseltildi ve yerel Âl-i Hamîd kabilesi yönetimde söz sahibi oldu — Osmanlı'nın bölgeyi doğrudan değil yerel aracılar üzerinden yönetme eğiliminin bir örneği; bu eğilim on yedi yıl sonra Benî Hâlid'in bağımsızlığını ilan etmesini kolaylaştıracaktı.",
  kaynak:"TDV `lahsa`: '1553 sonrası: Lahsâ beylerbeyiliğe yükseltildi; Âl-i Hamîd kabilesi yönetimde.'" },

{ t:"1670-01-01", b:"Berrâk b. Guraybir, Hufuf'u alarak Benî Hâlid emirliğini kurdu", tur:"kurulus",
  onem:5, dunya:2, kapsam:"ic", etiket:["kurulus","toprak-kazanc"],
  yer_id:"",
  d:"Berrâk b. Guraybir, Lahsa'nın merkezi Hufuf'u ele geçirip Osmanlı idaresine son vererek bedevi Benî Hâlid emirliğini kurdu; bu, devletler.js'teki `benihalid` künyesinin f: alanıdır. TDV'nin `lahsa` maddesinde bu kuruluş olayı doğrudan anlatılmıyor — devletler.js'in kendi araştırdığı bilgiye güvenilerek DEVRALINDI.",
  kaynak:"devletler.js `benihalid` künyesi (TDV `lahsa` + akademik kaynak karışımı, künyenin kendi notunda belirtilmiş); TDV `lahsa` maddesi bu spesifik olayı doğrudan içermiyor (taneciklik boşluğu, CLAUDE.md §4)." },

{ t:"1691-01-01", b:"Muhammed b. Berrâk, Necid'e akınlarını sürdürdü", tur:"toprak-kazanc",
  onem:2, dunya:1, kapsam:"dis", etiket:["savas"],
  yer_id:"",
  d:"Kurucunun oğlu Muhammed, emirliğin nüfuzunu iç Necid'e doğru akınlarla genişletmeye devam etti — Benî Hâlid'in bölgesel bir güç olarak konumunu pekiştiren bir dönem.",
  kaynak:"devletler.js `benihalid` künyesi (devralındı, bkz. yukarıdaki not)." },

{ t:"1744-01-01", b:"Muhammed b. Abdülvehhâb'ın Dir'iye'ye sığınması — Suûdîlerle husumet başladı", tur:"savas",
  onem:3, dunya:2, kapsam:"dis", etiket:["din","siyasi"],
  yer_id:"Dir'iye (Necid)",
  d:"Vehhâbî hareketinin kurucusu Muhammed b. Abdülvehhâb'ın Dir'iye'de Muhammed b. Suûd'un himayesine sığınıp ittifak kurması, Benî Hâlid emirliği ile yükselen Suûdî-Vehhâbî hareketi arasındaki ölümcül husumetin başlangıç noktasıdır — elli bir yıl sonra bu husumet emirliğin ilk çöküşüyle sonuçlanacaktı.",
  kaynak:"devletler.js `benihalid` künyesi; aynı olay devletler.js `suud-birinci` künyesinde de kurucu olay olarak kayıtlı (dunya değeri için çapraz bakılabilir, bu turda ayrıca ölçülmedi)." },

{ t:"1752-01-01", b:"Süleyman el-Hamîdî tahttan indirildi — iç çekişmeler başladı", tur:"bolunme",
  onem:3, dunya:1, kapsam:"ic", etiket:["bolunme","siyasi"],
  yer_id:"",
  d:"Emirin tahttan indirilmesiyle Benî Hâlid içinde taht kavgaları başladı; bu iç zayıflama, kırk üç yıl sonra Suûdî ilhakının önünü açan etkenlerden biri olacaktı.",
  kaynak:"devletler.js `benihalid` künyesi (devralındı)." },

{ t:"1795-01-01", b:"Abdülazîz b. Suûd, Lahsa'yı alıp emirliği ilk kez tasfiye etti", tur:"toprak-kayip",
  onem:5, dunya:2, kapsam:"dis", etiket:["toprak-kayip","savas"],
  yer_id:"",
  d:"Yükselen I. Suûdî Devleti'nin hükümdarı Abdülazîz b. Muhammed b. Suûd, Lahsa'yı ele geçirerek Benî Hâlid emirliğini ilk kez ortadan kaldırdı. TDV'nin `lahsa` maddesi bu olayı bir yıl farkla '1796' olarak veriyor (devletler.js '1795' diyor); bu ayrılık ÇÖZÜLMEDİ, iki tarih de not düşüldü.",
  kaynak:"devletler.js `benihalid` künyesi: '1795: Abdülazîz b. Suûd, Lahsa'yı ele geçirip emirliği ilk kez tasfiye etti.' · TDV `lahsa`: '1796: Emîr Suûd tarafından bölge doğrudan Dir'iye'ye bağlandı.'" },

{ t:"1818-01-01", b:"İbrâhim Paşa'nın Vehhâbî seferinin ardından emirlik geçici olarak yeniden kuruldu", tur:"toprak-kazanc",
  onem:4, dunya:2, kapsam:"dis", etiket:["toprak-kazanc","savas"],
  yer_id:"",
  d:"Kavalalı Mehmed Ali Paşa'nın oğlu İbrâhim Paşa'nın I. Suûdî Devleti'ni yıkan büyük seferi sonrası Suûdî liderleri idam edilince, Mâcid ve Muhammed kardeşler Lahsa'ya girip Osmanlı padişahı adına hutbe okutarak Benî Hâlid emirliğini geçici olarak yeniden kurdu.",
  kaynak:"devletler.js `benihalid` künyesi: '1818: İbrâhim Paşa'nın Vehhâbîleri yenmesi üzerine Mâcid ve Muhammed kardeşler Lahsa'ya girip Osmanlı padişahı adına hutbe okuttu, emirlik geri kuruldu.' · TDV `lahsa`: '1818: Kavalalı Mehmed Ali Paşa'nın oğlu İbrâhim Paşa'nın harekâtı; Suudi liderleri idam edildi.'" },

{ t:"1830-01-01", b:"Mâcid el-Ureyyir'in ölümü — emirlik kesin olarak sona erdi", tur:"son",
  onem:5, dunya:2, kapsam:"ic", etiket:["olum","son"],
  yer_id:"",
  d:"Mâcid el-Ureyyir'in Aklâ savaşında ölmesiyle Lahsa, II. Suûdî Devleti'nin (Necid Emirliği) denetimine geçti ve Benî Hâlid emirliği 160 yıllık varlığının ardından kesin olarak sona erdi.",
  kaynak:"devletler.js `benihalid` künyesi: '1830: Mâcid el-Ureyyir Aklâ savaşında öldü; Lahsa Suûd ailesinin denetimine geçti, emirlik kesin olarak sona erdi.'" }

];

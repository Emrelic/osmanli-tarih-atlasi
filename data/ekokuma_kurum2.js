// ============================================================================
// EK OKUMA — OSMANLI KURUMLARI 2 (DALGA-0066, EKO-KURUM2 oturumu)
// ============================================================================
// Yazan: EKO-KURUM2 (Sonnet) · 17 Eylül 2026 · paket 0066, maddeler H-0014 H-0016
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_KURUM2 tanımlar.
//    Yükleyici satırı (`_EKOKUMA_DOSYA_ADLARI`) 1.MURAT ekleyecek — bu oturum
//    js/ dosyasına dokunmadı.
//
// ŞEMA: data/ekokuma_kurum.js ile BİREBİR — { id, tur, kisa, metin, kesinlik,
// olay, kaynak }. `olay:` alanındaki tarihler TDV metninden — atlasın kendi
// verisinden DEVŞİRİLMEDİ (§4).
//
// KAYNAK YÖNTEMİ — CLAUDE.md §4 ("atlas referans değildir") ve kırmızı çizgi.
// Her slug önce WebSearch ile doğrulandı (TDV canlı sonuç döndü mü), sonra
// WebFetch ile gövdesi okunup ÖZETLENDİ — metin KOPYALANMADI (alıntılar en
// çok 15 kelime, tırnak içinde).
//   Kullanılan sluglar: muhendishane-i-bahri-i-humayun · vergi · cizye
//
// 🔴 H-0014'te KAYNAĞIN KENDİSİ İKİ TARİH VERİYOR (CLAUDE.md §4⑥ "kaynak
// bazen uyarı vermez, kendiyle çelişir" — bildirilmesi taraf seçmekten
// değerli): Fransız arşiv belgelerine göre 29 Nisan 1775, Osmanlı hicrî
// kaydına göre Cemâziyelevvel 1189 (yaklaşık Temmuz 1775) — iki ay farklı.
// İkisi de metinde AÇIKÇA yazıldı, tercih yapılmadı.
//
// H-0016 için `olay:` alanı 1775-06-01 tarihiyle data/olaylar_ek14.js'teki
// "Esham sisteminin ihdası" maddesine bağlanıyor (şartnamenin istediği gibi);
// cizyenin 1856'da kaldırılışı TDV metninde GÜN vermiyor, §4 gereği
// YYYY-01-01 yazıldı.
// ============================================================================
window.EKOKUMA_KURUM2 = [

// ── H-0014 · Mühendishâne-i Bahrî-i Hümâyun (1775) ──────────────────────────
{ id:"teknik-muhendishane-i-bahri-i-humayun", tur:"teknik-bilimsel",
  kisa:"Çeşme'de yanan bir donanmanın külünden bir okul doğdu — ilk müdürü Osmanlı değil, Macar asıllı bir Fransız baronuydu.",
  metin:"■ NİÇİN KURULDU\n"
    +"1768-1774 Osmanlı-Rus savaşındaki teknik yetersizlikler ve özellikle 1770 Çeşme baskınının donanmayı neredeyse yok etmesi, eğitimli denizci subay ihtiyacını açıkça ortaya koydu. Mühendishâne-i Bahrî-i Hümâyun bu ihtiyaca cevap olarak I. Abdülhamid döneminde, Sadrazam Derviş Mehmed Paşa'nın üçüncü sadâreti sırasında kuruldu.\n\n"
    +"■ İKİ AYRI TARİH — KAYNAK KENDİ İÇİNDE ÇELİŞİYOR\n"
    +"TDV maddesi kuruluşu iki farklı tarihle veriyor ve ikisini de uzlaştırmıyor: Fransız arşiv belgelerine göre açılış 29 Nisan 1775; Osmanlı kaydına göre ise Cemâziyelevvel 1189 (aşağı yukarı Temmuz 1775) — yaklaşık iki aylık bir fark var. Bu kart ikisini de aktarıyor, taraf tutmuyor.\n\n"
    +"■ İLK KADRO — VE BİR BARON\n"
    +"İlk müdür, daha önce Osmanlı hizmetinde topçu ıslahatıyla tanınan Macar asıllı Fransız Baron de Tott'tu. İlk öğrenciler eski kaptanlardan ve yüksek rütbeli memurların çocuklarından seçildi; ilk matematik hocası Gilles Jean-Marie Brazzer de Kermovan, ilk başhoca ise Cezayirli Seyyid Hasan Bey'di (Rus savaşı yüzünden bir yıl içinde kaptan olarak ayrıldı, 1787'de idam edildi).\n\n"
    +"■ MÜFREDAT: MATEMATİKTEN DENİZ MÜHENDİSLİĞİNE\n"
    +"Eğitim başlangıçta ağırlıklı olarak matematikti; Cezayirli Gazi Hasan Paşa'nın isteğiyle deniz mühendisliği, geometri ve coğrafyaya kaydırıldı. 1190'da (1776) bir nizamnâme hazırlanıp on talebe kaydedildi.\n\n"
    +"■ FRANSIZ MÜHENDİSLER\n"
    +"1198'de (1784) Halil Hamîd Paşa'nın sadâretinde okul yeniden düzenlendi, kadroya Lafitte-Clavé ve Monnier gibi Fransız mühendisler katıldı. Jacques Balthazar Brun 1793-1798 arası gemi inşası bölümünü kurup yönetti; Benoît gemi inşası derslerini, Parale uygulamalı dersleri üstlendi. Osmanlı hocaları arasında Seyyid Osman, Gelenbevî İsmâil, Palabıyık Mehmed, Ali Bahar, Mehmed Sâlih, Kasabbaşızâde İbrâhim ve Mehmed Rûhuddin Efendi sayılıyor.\n\n"
    +"■ 1195 → ADI DEĞİŞTİ, 1210 → İKİYE BÖLÜNDÜ\n"
    +"1195'te (1781) okul Mühendishâne-i Tersâne-i Âmire adını aldı. 1210'da (1795) kara mühendisliği eğitimi ayrılıp Mühendishâne-i Berrî-i Hümâyun adıyla ayrı bir kurum kuruldu — deniz ve kara mühendisliği o tarihten sonra iki ayrı okuldu. 1212'de (1797) dersler dört gruba organize edildi: harita-coğrafya, seyr-i sefâin, gemi inşası, istihkâm.\n\n"
    +"■ GERİLEME VE TAŞINMA\n"
    +"1807'de Nizâm-ı Cedîd'in sona ermesiyle eğitim bir süre ihmal edildi. Okul 1830'da Heybeliada'ya taşındı, 1846'da bu taşınma kalıcı hâle geldi.\n\n"
    +"■ TARİHSEL ÖNEMİ\n"
    +"TDV, kurumu Türk eğitim tarihinde 'modern anlamda ilk defa kurulan mektep' olarak nitelendiriyor; bugünkü Deniz Harp Okulu'nun temelini oluşturur.",
  kesinlik:"kesin",
  olay:["1775-04-29|Mühendishâne-i Bahrî-i Hümâyun (Fransız arşiv tarihi)","1795-01-01|Mühendishâne-i Berrî-i Hümâyun ayrıldı"],
  kaynak:"TDV: muhendishane-i-bahri-i-humayun" },

// ── H-0016 · Osmanlı vergi sistemi ──────────────────────────────────────────
{ id:"teknik-osmanli-vergi-sistemi", tur:"teknik-bilimsel",
  kisa:"Bir reayanın ne kadar vergi ödeyeceği önce dinine, sonra oturduğu yere bakardı — imparatorluk boyunca TEK bir vergi cetveli hiç olmadı.",
  metin:"■ İKİ KATEGORİ: ŞER'Î VE ÖRFÎ\n"
    +"Osmanlı vergileri (tekâlîf) iki ana kümede toplanırdı: tekâlîf-i şer'iyye (İslâmî temelli — zekât, öşür, haraç, cizye) ve tekâlîf-i örfiyye (padişahın kanununa dayalı — avârız, ağnam resimleri, çeşitli rüsûm/resimler). TDV'nin tabiriyle tekâlîf, 'nakdî, aynî ve bedenî yükümlülükleri' kapsardı — yani vergi her zaman para olarak alınmazdı.\n\n"
    +"■ KİM TOPLARDI\n"
    +"Vergi tahsilinde muhassıl, mütesellim, cizyedar, bâcbân gibi görevliler çalışırdı. Tanzimat öncesinde toplama işi çoğunlukla iltizam (vergi çiftçiliği) usulüyle özel kişilere ihale edilirdi — devlet doğrudan toplamak yerine tahsil hakkını satardı (bk. ayrı kart: iltizam sistemi). TDV, bu usulün dönemler boyunca 'zulüm ve suistimal' endişesi yarattığını kaydediyor.\n\n"
    +"■ ÜLKE GENELİNE EŞİT MİYDİ — HAYIR, İKİ EKSENDE FARKLIYDI\n"
    +"Vergi yükü tek bir cetvele bağlı değildi; hem BÖLGEDEN BÖLGEYE hem DİNE göre değişirdi. Gayrimüslimler cizye (kişi başına baş vergisi) öderken Müslümanlar öşür ve haraç öderdi. Tanzimat'ın ilk aşamalarında Hicaz ve İstanbul gibi bazı bölgeler vergi ayrıcalığı taşıyordu — yani coğrafya da belirleyiciydi, yalnız din değil.\n\n"
    +"■ CİZYE — GELİRE GÖRE ÜÇ KADEME\n"
    +"Zimmî (gayrimüslim tebaa) erkeklerden alınırdı; çocuk, kadın, kör, malûl, işsiz ve fakir muaftı. Din adamları başlangıçta muaftı, 1691'den sonra malûller dışında hepsi mükellef sayıldı. Üç gelir kademesi vardı — a'lâ (zengin), evsat (orta hâlli), ednâ (fakir) — ve miktar şer'î dirhem/altınla sabitti: sırasıyla 48/24/12 dirhem ya da 4/2/1 dinar. Esedî kuruşa çevrilince zamanla arttı: 1691'de 9/4,5/2,25 kuruş, 1834'te 60/30/15 kuruşa çıktı. Tahsilatı haraççı/cizyedar yapar, 'defter-i cizye-i gebrân' denen kayıt defterleri her üç yılda bir ('nev-yâfte yılı') teftiş edilirdi.\n\n"
    +"■ CİZYENİN SONU\n"
    +"Cizye 1856 Islahat Fermanı ile kaldırıldı — eşitlik ilkesi gayrimüslimlerin de askerliğe tâbi olmasını gerektirince eski ayrım anlamını yitirdi. Yerine, askerlikten muafiyet karşılığı 'bedel-i askerî' adlı bir ödeme getirildi; bu uygulama 1907'ye kadar sürdü.\n\n"
    +"■ TAHSİL TAKVİMİ\n"
    +"Tanzimat öncesinde tahsilat 'rûz-i hızır' ve 'rûz-i kāsım' diye iki taksite bölünürdü (yaklaşık bahar ve güz). Tanzimat sonrasında ise vergi borcu on iki taksite yayılırken, rüsûmat 'aynen veya bedelen hemen' tahsil ediliyordu — yani nakit vergiyle mal/hizmet vergisi farklı takvimlerde işliyordu.\n\n"
    +"■ ESHAM İLE BAĞI (1775)\n"
    +"Esham, bir vergi TÜRÜ değildi — mukātaa (vergi kaynağı) gelirinin hisselere bölünüp satıldığı bir BORÇLANMA yöntemiydi; Küçük Kaynarca'nın 7,5 milyon kuruşluk tazminat yükü karşısında 1775'te ihdas edildi (bk. data/olaylar_ek14.js, 1775-06-01). Yani devlet doğrudan vergiyi artırmak yerine, gelecekteki vergi/mukātaa gelirini bugünden nakde çevirdi — bu, klasik tekâlîf sisteminin dışında, ona EK bir mali araçtı.",
  kesinlik:"kesin",
  olay:["1775-06-01|Esham sisteminin ihdası","1856-01-01|Islahat Fermanı (cizyenin kaldırılışı)"],
  kaynak:"TDV: vergi · cizye" },

// ============================================================================
// EK — DALGA-0068 turu (17-18 Eylül 2026), maddeler H-0020 · H-0014
// Sluglar: muhendishane-i-berri-i-humayun · nizam-i-cedid (ikisi de WebFetch
// ile okundu, kopyalanmadı). H-0014 numarası DALGA-0066'daki H-0014'ten
// FARKLI bir maddedir — her dalga kendi H-numarasını sıfırdan verir.
// ============================================================================

// ── H-0020 · Mühendishânelerin sonraki hayatı ───────────────────────────────
{ id:"teknik-muhendishane-ardil-okullar", tur:"teknik-bilimsel",
  kisa:"İki mühendishaneden biri bugünkü bir üniversitenin, öteki bugünkü bir harp okulunun ilk çekirdeği oldu — ve ikisi de aynı Nizâm-ı Cedîd rüzgârından doğdu.",
  metin:"■ MÜHENDİSHÂNE-İ BERRÎ-İ HÜMÂYUN (1795) — İTÜ'NÜN VE HARBİYE'NİN ORTAK KÖKÜ\n"
    +"Deniz mühendishanesinden yirmi yıl sonra, 1210'da (1795) Hasköy'de kara mühendisleri yetiştirmek için kuruldu; TDV'nin kendi ifadesiyle 'Nizâm-ı Cedîd'in en önemli kurumlarından biri'ydi. İlk hocalar tamamen Türk'tü — başlarında Abdurrahman Efendi vardı, yabancı öğretmen YOKTU; 1801'de ihtida etmiş bir İngiliz mühendis (Selim/Bailey adıyla anılan) kadroya katıldı. Müfredat istihkâm, harita/arazi ölçümü (kadastro), topçuluk ve diferansiyel-integral hesaba kadar uzanan ileri matematik, ayrıca Fransızca ve Arapça dersleriydi.\n\n"
    +"■ BERRÎ'NİN ZİKZAKLI YOLU\n"
    +"1806'da Eyüp'e taşındı ve bağlı olduğu askerî birlikten ayrıldı; 1808'de eski Hasköy binasına döndü. 1826-1839 arası ihmal edilen bir dönem yaşadı, II. Mahmud'un ıslahatlarıyla yeniden canlandırıldı. 1883'te ona bağlı olarak Hendese-i Mülkiyye Mektebi (sivil mühendislik okulu) açıldı, 1908'de ayrı bir sivil mühendislik mektebi kuruldu. 1928-1944 arası çeşitli eğitim reformlarından geçti.\n\n"
    +"■ İKİ AYRI SONUÇ, TEK KÖK\n"
    +"TDV bu kurumu 'İstanbul Teknik Üniversitesi'nin ilk çekirdeği' olarak tanımlıyor — İTÜ resmen 1944'te bu miras üzerine kuruldu. Aynı madde ayrıca Mühendishâne-i Berrî'nin 'Harp Okulu'nun da ilk çekirdeğini oluşturduğunu' belirtiyor — yani TEK bir 1795 kurumu, biri sivil (İTÜ) biri askerî (Harbiye/Kara Harp Okulu) iki ayrı köke dallandı.\n\n"
    +"■ MÜHENDİSHÂNE-İ BAHRÎ-İ HÜMÂYUN (1775) — DENİZ HARP OKULU'NUN KÖKÜ\n"
    +"1775'te kurulan deniz mühendishanesi (bk. ayrı kart: H-0014/DALGA-0066) 1195'te (1781) Mühendishâne-i Tersâne-i Âmire adını aldı, 1210'da (1795) Berrî'den ayrılıp yalnız deniz eğitimine odaklandı, 1830'da Heybeliada'ya taşındı ve 1846'da bu taşınma kalıcı oldu. TDV bu kurumu bugünkü Deniz Harp Okulu'nun temeli sayıyor.\n\n"
    +"■ ORTAK DESEN\n"
    +"İki mühendishane de aynı krizden (1768-1774 Rus savaşı, 1770 Çeşme) doğdu, aynı reform paketinin (Nizâm-ı Cedîd, bk. ayrı kart H-0014/DALGA-0068) parçasıydı ve ikisi de defalarca ad/bina değiştirerek 19. yüzyılı aştı — kesintisiz değil, ama KOPMADAN 20. yüzyıla ulaştı.",
  kesinlik:"kesin",
  olay:["1795-01-01|Mühendishâne-i Berrî-i Hümâyun kuruldu","1883-01-01|Hendese-i Mülkiyye Mektebi açıldı","1944-01-01|İstanbul Teknik Üniversitesi kuruldu"],
  kaynak:"TDV: muhendishane-i-berri-i-humayun · muhendishane-i-bahri-i-humayun" },

// ── H-0014 (DALGA-0068) · Nizâm-ı Cedîd ─────────────────────────────────────
{ id:"teknik-nizam-i-cedid", tur:"teknik-bilimsel",
  kisa:"Bir ordu savaş meydanında değil, oy birliğiyle ateşkes isteyerek yenildiğini kabul etti — ve o toplantıdan bütün bir reform çağı doğdu.",
  metin:"■ SEBEP — ŞUMNU'DAKİ OY BİRLİĞİ\n"
    +"1787-1792 Osmanlı-Rus/Avusturya savaşındaki ağır yenilgiler ve Ziştovi (Avusturya ile) Antlaşması, ordunun ve devlet erkânının kurumsal zaafını açıkça ortaya koydu. Ordu ve idare üst kademesi 11 Ağustos 1791'de Şumnu'da toplanıp savaşa devam edilemeyeceğine OY BİRLİĞİYLE karar verdi — III. Selim'i kapsamlı bir ıslahat programına iten doğrudan dönüm noktası budur.\n\n"
    +"■ İÇERİK — SİVİL VE ASKERÎ HER ŞEYİN YENİDEN DÜZENLENMESİ\n"
    +"Nizâm-ı Cedîd (1792-1807) Avrupa disiplininde eğitilmiş yeni bir ordunun kurulmasını, bu ordunun masrafını karşılamak için ayrı bir hazine olan İrâd-ı Cedîd'in açılmasını, Mühendishâne-i Berrî-i Hümâyun'un (1795) kurulup Mühendishâne-i Bahrî-i Hümâyun'un (1775) ıslah edilmesini, mühendishaneye bağlı bir matbaanın (1797) açılmasını, İstanbul ve Anadolu'da yeni kışlalar inşasını ve zahire nezaretinin (tahıl idaresi) suistimali önleyecek biçimde yeniden düzenlenmesini kapsadı. Reform kadrosunun başında Sadrazam Koca Yûsuf Paşa ve Mustafa Reşid gibi bürokratlar vardı; ulema tarafında Tatarcık Abdullah Efendi gibi isimler sürece destek verdi.\n\n"
    +"■ DİRENİŞ — 'BİD'AT' VE VERGİ YÜKÜ\n"
    +"Yeniçeriler, geleneksel askerî zümreler ve muhafazakâr çevreler reformu bid'at (dine aykırı yenilik) ve 'Avrupalılaşma' olarak gördü; taşrada ise yeni orduyu finanse eden ağır vergiler halk tepkisine yol açtı.\n\n"
    +"■ SONUÇ — KABAKÇI İSYANI\n"
    +"25-29 Mayıs 1807'de Kabakçı Mustafa önderliğinde, Şeyhülislâm Topal Atâullah'ın desteğiyle patlak veren isyan Nizâm-ı Cedîd'i lağvetti, III. Selim'i tahttan indirdi ve reform liderlerinin idamıyla sonuçlandı.\n\n"
    +"■ ÖNEM VE ETKİ — YENİLGİ, AMA KALICI ETKİ\n"
    +"Kurumsal olarak çökmesine rağmen Nizâm-ı Cedîd sonraki Tanzimat reformlarına ve II. Mahmud'un kendi yeniden yapılanmasına, özellikle 1826 Vaka-i Hayriye'de (Yeniçeri Ocağı'nın kaldırılışı) zemin hazırladı — II. Mahmud, aynı direnişi bu kez askerî güçle ezerek III. Selim'in yarım kalan programını tamamladı.\n\n"
    +"■ İLGİNÇ AYRINTI — VERGİDEN DEĞİL YENİ BİR HAZİNEDEN\n"
    +"Reformun finansmanı mevcut tekâlif sistemine (bk. ayrı kart: Osmanlı vergi sistemi) ek yük bindirmek yerine AYRI bir hazine (İrâd-ı Cedîd) kurularak sağlandı — yani III. Selim, yeni orduyu eski vergi düzenine dokunmadan, kendi kendine yetecek bir mali yapı içinde finanse etmeye çalıştı.",
  kesinlik:"kesin",
  olay:["1791-08-11|Şumnu kararı","1807-05-25|Kabakçı İsyanı başladı"],
  kaynak:"TDV: nizam-i-cedid" }

];

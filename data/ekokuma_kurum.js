// ============================================================================
// EK OKUMA — OSMANLI KURUMLARI (DALGA 0052, EKO-KURUM oturumu)
// ============================================================================
// Yazan: EKO-KURUM · 16 Eylül 2026 · paket 0052, maddeler H-0031 H-0032
// H-0051 H-0052 H-0055 H-0056 H-0075 H-0085 H-0086 H-0091 H-0093 H-0094
// (H-0087 bu dosyada DEĞİL — mevcut bir kartın (data/ekokuma.js) düzeltme
// önerisi, denetim/EKO-KURUM-0916.md'de ayrıca yazıldı; o dosya bu
// oturumun değil, DÜZENLEME önerisi rapora yazıldı, kod DOKUNULMADI).
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_KURUM tanımlar.
//    YÜKLEYİCİ: `_EKOKUMA_DOSYA_ADLARI` listesine "ekokuma_kurum" satırı
//    UI oturumunca eklenecek — bu oturum js/ dosyasına dokunmadı, tahtaya
//    "dosyam hazır" yazıldı.
//
// KAYNAK YÖNTEMİ — CLAUDE.md §4 ("atlas referans değildir", 13 Eylül 2026
// kararı) ve kırmızı çizgi (yalnız TDV/akademik) uygulandı. Her slug HTTP
// koduyla ÖNCE tarandı (200/302), sonra WebFetch ile gövdesi okunup
// ÖZETLENDİ — metin KOPYALANMADI. Tarama sonucu:
//   200 (gövde okundu, kullanıldı): vezir · kazasker · defterdar ·
//     seyhulislam · kethuda · divan-i-humayun · narh · tahrir · medrese ·
//     kadi · malikane · eflak · bogdan · erdel · kirim · hicaz · naima ·
//     nesri · cevdet-pasa (bk. altında) · cezayir · fas
//   302 (ÖLÜ, §4③ tuzağı — alternatif slug bulunup kullanıldı):
//     vezir-i-azam→vezir · serdar-i-ekrem→serdar · iltizam→malikane ·
//     kirim-hanligi→kirim · fas--sehir→fas
//   🔴 CANLI YÖNLENDİRME KÜTÜĞÜ (D109): ahmed-cevdet-pasa 200 döndü AMA
//     gövde yalnız "bk. CEVDET PAŞA" — asıl madde `cevdet-pasa` slugunda,
//     ayrıca çekildi.
//   ② TUZAĞI (canlı slug, YANLIŞ madde, CLAUDE.md §4): `dayi` 200 döndü
//     ama madde FIKIH terimi (dayı = anne tarafından akraba), Cezayir'in
//     dayılık kurumuyla İLGİSİZ — KULLANILMADI, Cezayir'in dayı dönemi
//     bilgisi `cezayir` maddesinin kendisinden alındı (o madde ocak
//     dönemlerini zaten anlatıyor).
//   🔴 BULUNAMADI: vecihi (tarihçi Vecihî Hasan Efendi) — denenen slug
//     302 döndü, alternatif aranmadı (zaman sınırı); karta YAZILMADI.
//
// ŞEMA: mevcut data/ekokuma.js (teknik-bilimsel) ve data/ekokuma_celali.js
// (kimdir) ile BİREBİR — { id, tur, [ad|kisa], metin, kesinlik, olay,
// kaynak }. `ad:` yalnız kimdir türünde (başlık), ötekilerde `kisa:` ilk
// satır görevi görüyor. `olay:` alanındaki tarihler TDV metninden — atlasın
// kendi verisinden DEVŞİRİLMEDİ (§4).
// ============================================================================
window.EKOKUMA_KURUM = [

// ── H-0031 · Osmanlı devlet kademeleri ──────────────────────────────────────
{ id:"teknik-osmanli-devlet-kademeleri", tur:"teknik-bilimsel",
  kisa:"Vezirlikten şeyhülislamlığa: bir memurun kaç basamak tırmanması gerekirdi ve her basamağın adı neydi?",
  metin:"Osmanlı merkez teşkilatı iki koldan yürürdü — seyfiye/mülkiye (kılıç ve kalem eliyle idare) ile ilmiye (şer'î bilgiyle idare) — ve her kolun kendi kademe merdiveni vardı.\n\n"
    +"■ VEZİR VE SADRAZAM\n"
    +"Kaynaklarda vezir, paşa, sahib, âsaf, vekil, lala gibi unvanlarla iç içe kullanılırdı; Divan-ı Hümayun'daki en kıdemli vezir sadrazam unvanını taşırdı. İlk vezirler (Hacı Paşa, ~1348'den itibaren) ulemadan, çoğu kadılıktan gelirdi — 1385-1453 arası makam neredeyse tamamen Çandarlı ailesinin elindeydi. 1453'te Fâtih'in emriyle sadrazam Çandarlı Halil'in tutuklanıp idam edilmesi bu düzeni kökten değiştirdi: makam ulema kökenli yöneticilerden kul (devşirme) kökenli komutanlara geçti. Kurum 1656'ya gelindiğinde zayıflamıştı; Köprülü Mehmed Paşa'nın atanması otoriteyi yaklaşık elli yıl sürecek biçimde yeniden tesis etti.\n\n"
    +"■ KAZASKER — İLMİYENİN EN ÜSTÜ\n"
    +"Kazaskerlik I. Murad'ın ilk yıllarında (762/1361 ya da 763/1362 dolayı) kuruldu, muhtemelen Anadolu Selçuklu modelinden alındı; ilk kazasker Bursa kadılığından bu göreve geçen Çandarlı Kara Halil'di. Fâtih'in son yıllarında (Karamânî Mehmed Paşa'nın önerisiyle) makam Rumeli ve Anadolu kazaskerliği diye ikiye bölündü; I. Selim döneminde kısa süreliğine Arap-Acem kazaskerliği de açıldı ama sonra Anadolu kazaskerliğine katıldı. Görev başlangıçta askerî-hukukî davalara ve sefer eşliğine bakardı; zamanla asıl işi kadı ve müderris atama-azil düzenini yürütmek oldu.\n\n"
    +"■ DEFTERDAR — HAZİNENİN VEKİLİ\n"
    +"Fâtih'in kanunnâmesiyle biçimlenen defterdarlık, padişahın maliye üzerindeki vekili sayılırdı: hazineden izinsiz para çıkmaz, malî nizamnameler onun elinden geçer, vergi toplayanların reâyayı ezmesi onun denetimine tabi olurdu. Fâtih döneminde Rumeli ve Anadolu defterdarlığı diye ikiye bölündü; 16-17. yüzyıllarda Arap-Acem, ikinci ve üçüncü defterdarlıklar eklendi. III. Selim'den sonra kurum yeniden düzenlendi ve 1841'de Maliye Nezâreti'ne dönüştü.\n\n"
    +"■ ŞEYHÜLİSLAM — FETVANIN SAHİBİ\n"
    +"Molla Fenârî'nin 1425'te Bursa müftülüğüne atanması, Osmanlı müftülük/şeyhülislamlık makamının başlangıcı sayılır. Görevin özü fetva vermekti; ayrıca bütün kadı ve müderrislerin atamalarını denetler, büyük vakıfları gözetir, kılıç kuşanma töreni gibi merasimlerde yer alırdı. Başlangıçta sadrazama tâbi sayılan makam, 16-17. yüzyıllarda meşveret meclislerinde onunla eşit ağırlıkta bir ortağa dönüştü.\n\n"
    +"■ KETHÜDA — HER KADEMENİN KENDİ VEKİLİ\n"
    +"Farsça kedhudâ'dan (ev/köy sahibi) gelen bu unvan tek bir makam değil, bir MODELdI: sadâret kethüdâsı (sadrazamın baş yardımcısı) en önemlisiydi; ayrıca vilâyet kethüdâsı, kapı kethüdâsı (taşra görevlilerinin İstanbul temsilcisi), kul/yeniçeri kethüdâsı, esnaf kethüdâsı gibi onlarca alt tür vardı. Esnaf kethüdaları loncayı hükûmete karşı temsil eder, ustalar arası uyuşmazlığı çözer, fiyat uygunluğunu gözetirdi; 16-17. yüzyılda lonca ihtiyarlarının gölgesinden çıkıp fiilî lider hâline geldiler. Kurum 1826 sonrası merkezileşmeyle geriledi.\n\n"
    +"■ SERDAR-I EKREM\n"
    +"Padişah bizzat sefere çıkmadığında orduya tam yetkiyle kumanda eden vezire verilen unvandır — çoğunlukla sadrazamın kendisiydi, ama başka bir vezire de verilebilirdi; yetkisi padişah adına savaş ve barış kararı almaya kadar uzanırdı.",
  kesinlik:"kesin",
  olay:["1453-06-01|Çandarlı Halil","1425-01-01|Molla Fenârî"],
  kaynak:"TDV: vezir · kazasker · defterdar · seyhulislam · kethuda" },

// ── H-0032 · Osmanlı idari yapısı ve değişimi ───────────────────────────────
{ id:"teknik-osmanli-idari-yapi-degisimi", tur:"teknik-bilimsel",
  kisa:"Bir devlet üç asır boyunca aynı çatı altında toplandı, sonra o çatı sessizce boşaldı — karar mekanizması aynı sarayın içinde bir avludan ötekine taşındı.",
  metin:"■ DİVAN-I HÜMAYUN — DEVLETİN TEK MASASI\n"
    +"15. yüzyıl ortasından 17. yüzyıl başına kadar Osmanlı idaresinin en üst karar organı Divan-ı Hümayun'du: sadrazam, üç-yedi kubbealtı veziri, kazaskerler, nişancı ve defterdarlar aynı toplantıda otururdu — şeyhülislamın divanda resmî bir koltuğu yoktu. Divan hem yürütme organı hem de en yüksek mahkemeydi; statüsü ne olursa olsun herkes doğrudan dilekçeyle başvurabilir, görevliler her şikâyeti dinlemek zorundaydı — bu açıklık Batılı gözlemcileri hayrete düşürürdü. Kararlar kesinleşmeden önce padişaha 'arza çıkar', yani bizzat sunulurdu; toplantılar sarayın ikinci avlusunda katı bir törenle yürütülürdü.\n\n"
    +"■ MERKEZİN SESSİZ TAŞINMASI\n"
    +"17. yüzyıldan itibaren fiilî yetki sadrazamın kendi konağındaki 'ikindi divanı'na kaymaya başladı. 18. yüzyılda Divan-ı Hümayun büyük ölçüde törensel bir kabuğa döndü; gerçek idare sadrazamın makamı olan Bâb-ı Âsafî'nin (sonraki adıyla Bâb-ı Âli) elindeydi. II. Mahmud döneminde bu yapı tamamen kaldırılıp Avrupa tipi nezaretler (bakanlıklar) kuruldu.\n\n"
    +"■ TAŞRA: EYALET VE SANCAK\n"
    +"Merkezin dışında idare eyalet (beylerbeylik) ve onun alt birimi sancak üzerine kuruluydu; her kademenin kendi kadısı, defterdarı ve askerî-idarî amiri vardı — merkezdeki bakanlık modelinin küçültülmüş bir kopyası gibi işlerdi. Klasik dönemde eyalet-sancak sistemi tımarlı sipahi düzenine bağlıydı; 17. yüzyıldan itibaren merkezi hazineye bağlı iltizam/malikâne usulleri öne çıktıkça bu bağ zayıfladı (bkz. ayrı kart: İltizam sistemi).",
  kesinlik:"kesin",
  // EKO-ILGI-0073 (0073/H-0018, Emre): bu kart Vak'a-i Hayriyye maddesinde
  // görünüyordu ve Emre "alakası yok" dedi. İki kusur birden vardı:
  // ① "1826-06-15" diye bir kronoloji günü YOK (madde 1826-06) — bağ ÖKSÜZDÜ,
  // ② kartın konusu Divan-ı Hümayun → Bâbıâli geçişi, ocağın kaldırılışı değil.
  // Kendi konusunun maddesine taşındı (OLAYLAR_EK14, 1451-06-01).
  olay:["1451-06-01|Divan-ı Hümayun"],
  kaynak:"TDV: divan-i-humayun" },

// ── H-0051 · Narh defterleri ─────────────────────────────────────────────────
{ id:"teknik-narh-defterleri", tur:"teknik-bilimsel",
  kisa:"Bir loncanın ustası ile kadı aynı masada oturup ekmeğin fiyatına karar verirdi — ve kışın süt fiyatı yazın verdiğinden başka olurdu.",
  metin:"■ NE İÇİN VARDI\n"
    +"Narh, temel mal ve hizmetlere üst fiyat sınırı koyan bir devlet uygulamasıydı; amacı halkın (özellikle gıda maddelerinde) makul fiyattan alışverişini güvenceye almaktı.\n\n"
    +"■ KİM BELİRLERDİ\n"
    +"Fiyatı belirleyen makam İstanbul kadısıydı, ama tek başına değil: ilgili esnafın (loncanın) görüşü alınırdı. Et, süt ürünleri, ekmek gibi kalemlerde yeniçeri ağası ya da başka askerî görevliler ve lonca kethüdaları da sürece katılırdı; piyasadaki uygunluğu muhtesib (çarşı denetçisi) izlerdi.\n\n"
    +"■ DEFTERLERİN KENDİSİ\n"
    +"Günümüze yalnız iki narh defteri ulaşmıştır: 1600 ve 1640 tarihli. 1640 defteri özellikle kapsamlıdır — yalnız gıda ve giyim değil, hizmet fiyatlarını ve hijyen standartlarını da içeren neredeyse tam bir piyasa el kitabı gibidir.\n\n"
    +"■ MEVSİMSEL VE OLAĞANÜSTÜ DEĞİŞİM\n"
    +"Fiyatlar mevsime göre (yaz-kış süt ürünleri gibi), hasat sonrasında ve savaş/abluka/kıtlık/doğal âfet gibi olağanüstü hâllerde yeniden belirlenirdi; sikke ayarındaki değişiklikler de (bk. ayrı kart: tağşiş) genel bir fiyat revizyonunu tetiklerdi.\n\n"
    +"■ SONU\n"
    +"Kadıların bu yetkisi 19. yüzyıl ortasına kadar sürdü. 1851'de kurulan bir Fiyat Dairesi etkisiz kaldı, 1854'te yerini Şehremaneti'ne bağlı bir Narh Meclisi'ne bıraktı. 1856'ya gelindiğinde mahkeme sicillerinde fiyat kayıtları görünmez oldu ve sebze-meyve-ekmek dışındaki narh uygulamaları serbest piyasaya bırakılarak büyük ölçüde kaldırıldı.",
  kesinlik:"kesin",
  olay:["1640-01-01|narh defteri"],
  kaynak:"TDV: narh" },

// ── H-0052 · Tahrir defterleri ───────────────────────────────────────────────
{ id:"teknik-tahrir-defterleri", tur:"teknik-bilimsel",
  kisa:"Bir imparatorluk otuz yılda bir kendini yeniden sayardı — kim öldü, kim büyüdü, hangi tarla kimin elinde: bugün elimizdeki en eski kayıt 1431'den.",
  metin:"■ AMAÇ\n"
    +"Tahrir, vergi mükelleflerini ve yükümlülüklerini kaydetmek için yapılan sayımdı; devletin reâyânın nerede yaşadığını, ne işle uğraştığını, mal ve ürün kaynaklarını bilmesini sağlardı.\n\n"
    +"■ YÖNTEM\n"
    +"Sayım heyetleri (emin, kâtip, kadı ve yerel görevlilerden oluşan) eski kayıtları güncel durumla karşılaştırırdı: nüfus değişimini işler, yeni yetişkinleri deftere ekler, ölenleri düşerdi.\n\n"
    +"■ NE KAYDEDİLİRDİ\n"
    +"Defterlerde mükellefin adı ve mesleği, hane statüsü (evli/bekâr), toprak varlığı, köy adı, vergi kategorileri (çeşitli aşarlar, hane vergileri), hayvan sayıları ve görevlilerin gelirleri gibi ayrıntılı bilgi bulunurdu.\n\n"
    +"■ ZAMAN İÇİNDE\n"
    +"Sistem 14. yüzyılda ortaya çıktı; bugüne ulaşan en eski tahrir defteri 1431 tarihlidir. Başlangıçta yaklaşık her otuz yılda bir ya da yeni padişah cülûsunda yenilenirdi; 16. yüzyıl boyunca çoğu eyalette standart uygulamaydı.\n\n"
    +"■ GERİLEME\n"
    +"Klasik tahrir sistemi 16. yüzyıl sonundan itibaren giderek terk edildi. Savaşlar, isyanlar ve merkezi hazineye artan bağımlılık tımar düzenini zayıflatınca, 17. yüzyılda olağanüstü vergi (avârız) sayımları geleneksel tahrirlerin yerini almaya başladı.",
  kesinlik:"kesin",
  olay:["1431-01-01|en eski tahrir defteri"],
  kaynak:"TDV: tahrir" },

// ── H-0055 · Osmanlı eğitim sistemi ─────────────────────────────────────────
{ id:"teknik-osmanli-egitim-sistemi", tur:"teknik-bilimsel",
  kisa:"Bir öğrencinin kaç akçelik hocadan ders aldığı, hangi kitabı okuduğu kadar önemliydi — ve bu merdiven onu ya kadılığa ya müderrisliğe çıkarırdı.",
  metin:"■ ÜÇ ÖLÇÜT, TEK HİYERARŞİ\n"
    +"Osmanlı medreseleri üç eksende sıralanırdı: okutulan esas kitaba göre (Tecrîd, Miftâh, Telvîh medreseleri…), müderrisin günlük yevmiyesine göre (yirmi ile altmış akçe arası) ve kurumsal statüye göre. 1470'te kurulan Sahn-ı Semân (Sekiz Avlu) ve Tetimme medreseleri zirveyi oluşturuyordu; 18. yüzyıla gelindiğinde basamaklar iyice karmaşıklaşmış, ibtidâ-i hâric'ten dârülhadise uzanan uzun bir merdiven doğmuştu.\n\n"
    +"■ MÜFREDAT\n"
    +"Temel dersler Arapça sarf-nahiv, mantık, kelâm, belâgat, fıkıh, hadis ve tefsirdi; 'Ders-i Nizâmî' standart müfredatı temsil ederdi. Üst düzey medreseler ayrıca tıp, matematik ve astronomi okuturdu. Ders kitapları Arapça olsa da (Teftâzânî, Cürcânî gibi âlimlerin eserleri) fiilî anlatım dili Türkçeydi.\n\n"
    +"■ KARİYER YOLU\n"
    +"Medreseyi bitirip icâzet alan öğrenci müderris, kadı ya da müftü olarak görev alabilirdi — eğitim ve yargı kademeleri iç içeydi (bkz. ayrı kart: kadı). Kurumsal sıralama zaman zaman hocanın kıdemine göre de değişebiliyordu.\n\n"
    +"■ ZİRVE VE GERİLEME\n"
    +"Süleymaniye külliyesi (1550-1557) sistemin doruk noktasıydı. 18. yüzyıldan itibaren medreseler 'hantallaşıp esnekliğini kaybetti', teknik eğitim Mühendishâne gibi ayrı askerî okullara kaydı. 19. yüzyıl ıslahat girişimleri kalıcı olmadı; 1924'teki Tevhîd-i Tedrîsat kanunuyla medreseler Maarif Nezâreti'ne devredildi ve kısa süre sonra kapatıldı.",
  kesinlik:"kesin",
  olay:["1470-01-01|Sahn-ı Semân","1924-03-03|Tevhîd-i Tedrîsat"],
  kaynak:"TDV: medrese" },

// ── H-0056 · Osmanlı hukuk sistemi ──────────────────────────────────────────
{ id:"teknik-osmanli-hukuk-sistemi", tur:"teknik-bilimsel",
  kisa:"Bir kadı aynı anda hem şeriatın hem padişahın kanununun adamıydı — ve mahkemesi çarşıyı, yetimin malını, kale bakımını da kapsardı.",
  metin:"■ İKİ KAYNAK, TEK UYGULAYICI\n"
    +"Osmanlı hukuku iki katmanlıydı: değişmez kabul edilen şer'î hukuk (şeriat) ve padişahın ihtiyaca göre çıkardığı kanun/kanunnâme (örfî hukuk). Bu ikisini aynı anda uygulayan görevli kadıydı — kaynağın kendi tabiriyle 'şer'î hukuk adamı ama aynı zamanda mülkî erkândan biri'.\n\n"
    +"■ KADININ ATANMASI VE YÜKSELMESİ\n"
    +"Kadı, padişah beratıyla atanır, kazaskerlik defterlerine (rûznâmçe) kaydedilirdi. Adaylar medresede eğitim görür, mülâzemet denen bir bekleme/sınav sürecinden geçer, hiyerarşinin en alt kademesinden başlayıp kıdemle yükselirdi (bkz. ayrı kart: medrese).\n\n"
    +"■ YETKİ ALANI — YALNIZ DAVA DEĞİL\n"
    +"Kadının görevi mahkeme salonunun çok ötesine geçerdi: sefer sırasında ordunun ikmal ve lojistiğinden, kale bakımından, kamu düzeninden sorumluydu; noter gibi çalışıp sözleşme, vasiyet ve mülk devirlerini sicil defterlerine işlerdi; çarşıyı ve narhı denetler (bkz. ayrı kart: narh defterleri), vakıfları gözetir, yetim mallarını yönetir, halk ile merkez arasında aracılık ederdi.\n\n"
    +"■ FETVA VE ŞEYHÜLİSLAM\n"
    +"Hukukun ikinci ayağı fetva mekanizmasıydı: şeyhülislam (ya da yerel müftüler) hanefî fıkhına göre soruları cevaplar, bu fetvalar mahkemelerde ve idari kararlarda ağırlık taşırdı — kimi zaman padişahın tahttan indirilmesi gibi son derece siyasi konularda bile (bkz. ayrı kart: devlet kademeleri).",
  kesinlik:"kesin",
  olay:["1425-01-01|Molla Fenârî"],
  kaynak:"TDV: kadi · seyhulislam" },

// ── H-0075 · İltizam sistemi ─────────────────────────────────────────────────
{ id:"teknik-iltizam-sistemi", tur:"teknik-bilimsel",
  kisa:"Devlet vergiyi kendi toplamadı, satışa çıkardı — ve bu satış modeli bir asır sonra kendi krizini üretince, devlet aynı işi 'ömür boyu' satmaya başladı.",
  metin:"■ İLTİZAMIN İŞLEYİŞİ\n"
    +"Klasik iltizamda bir bölgenin vergi toplama hakkı açık artırmayla (müzayede) satılırdı; süre kısaydı, genelde bir-üç yıllık bir 'tahvil' dönemi (mukātaa) kapsardı. Mültezim (yüklenici) devlete peşin ya da taksitli bir bedel taahhüt eder, karşılığında o bölgenin vergisini toplayıp elinde tutardı.\n\n"
    +"■ NİÇİN KRİZE DÖNÜŞTÜ\n"
    +"17. yüzyıl sonunun uzayan savaşları hazineyi tüketirken toprak kayıpları geliri azalttı. Kısa süreli sözleşmesi olan mültezimler yatırımlarını hızla geri almak için reâyâyı ağır vergilendiriyor, bu da üretim kapasitesini eritiyordu — vergilendirme ile üretim arasında birbirini boğan bir kısır döngü doğmuştu.\n\n"
    +"■ MALİKÂNE (1695) — ÇÖZÜM ÖNERİSİ\n"
    +"Devlet müzayedeli kısa dönem yerine 1695'ten itibaren 'malikâne' usulünü getirdi: mukātaa artık ömür boyu (kaydı hayat şartıyla) veriliyor, yıllık vergi SABİTLENİYOR ve 'muaccele' denen büyük bir peşinat devlete önceden ödeniyordu. Mültezim artık üretimi büyütüp sabit yükümlülüğün üzerindeki fazlayı kendisi alacağı için toprağı geliştirmekte ve reâyâya kredi vermekte çıkarlı hâle geldi — devlet, mültezim ve üretici çıkarları teorik olarak aynı yöne çekildi.\n\n"
    +"■ DİĞER DEVLETLERLE KIYAS — ÖLÇÜLEMEDİ\n"
    +"Bu dönemde Fransa (ferme générale) ve başka Avrupa devletlerinin de benzer vergi-iltizamı usulleri uyguladığı genel tarih bilgisidir, ama bu kart için okunan TDV kaynağı (malikâne maddesi) bu kıyası KENDİSİ yapmıyor — karşılaştırmalı rakam ya da doğrudan atıf vermiyor. §4 kuralı gereği bu kıyas burada YAZILMADI; ayrı bir akademik kaynak taraması gerektirir, `bulunamadı`.",
  kesinlik:"kesin",
  olay:["1695-01-01|malikâne"],
  kaynak:"TDV: malikane" },

// ── H-0085 · Osmanlı'da doğrudan-olmayan yönetim statüleri ──────────────────
{ id:"teknik-osmanli-tabi-statu-listesi", tur:"teknik-bilimsel",
  kisa:"Osmanlı toprakları tek renkte boyanmazdı — Eflak'tan Kırım'a, her birinin kendi sözleşmesi, kendi vergisi, kendi hükümdar seçme usulü vardı.",
  metin:"Aşağıdaki beş bölge, klasik dönemde doğrudan sancak/eyalet idaresi ALTINDA DEĞİL, kendine özgü bir bağ şekliyle Osmanlı'ya bağlıydı — beşi de kaynağa göre, beşi de ayrı ayrı:\n\n"
    +"■ EFLAK (1373'ten) — TÂBİ VOYVODALIK\n"
    +"Voyvoda Vlaicu 1373'te Osmanlı üstünlüğünü tanıdı; iç işlerde bağımsızlığını korudu. Mircea 1394 Rovine yenilgisinin ardından 1417'de tâbiliği kesinleştirdi. Segedin Antlaşması Eflak'ın hem İstanbul'a haraç ödemesini hem voyvodalarının nominal olarak Macar krallarına bağlı sayılmasını düzenleyen bir uzlaşma getirdi. Yerli voyvoda, bağımsız bir Ortodoks metropolitliği ve toprak sahibi boyarlar aracılığıyla iç yönetimini sürdürdü; karşılığında yıllık haraç ödedi, dış siyasette Osmanlı'ya tâbi oldu ve (başlangıçta) toprağında sürekli Osmanlı garnizonu bulunmadı. Bu düzen 1716'ya kadar sürdü — o tarihte yerli voyvodalar yerine Fenerli Rum yöneticiler atanmaya başlandı (1821'e kadar).\n\n"
    +"■ BOĞDAN (1455'ten) — AYNI MODELİN KUZEY KOLU\n"
    +"Voyvoda II. Petru Aron 1455'ten itibaren yıllık 2000 altın haraç ödeyerek özerkliğini korudu; Fâtih iç işlerine karışmadı, bölgeyi doğrudan sancak yapmadı. Haraç zamanla arttı (Büyük Ştefan'ın haleflerinde yıllık 12.000 düka). Boğdan da 1710'lardan itibaren Fenerli yönetime geçti.\n\n"
    +"■ ERDEL (1541'ten) — SEÇİLMİŞ AMA ONAYLI PRENSLİK\n"
    +"1540'ta babası ölünce Erdel 1541'de tâbi bir voyvodalığa dönüştürüldü, János Zsigmond prens oldu. Haraç başlangıçta 10.000 altındı, 17. yüzyılda 40.000'e çıktı. İç işlerde geniş özerkliği vardı, dış işlerde İstanbul'a bağlıydı; prens seçiminde son söz sultanındı — 1613'te Bethlen Gábor'un 'bağımsız prens' olarak atanması buna örnektir.\n\n"
    +"■ KIRIM HANLIĞI (1475'ten) — ASKERÎ YÜKÜMLÜLÜĞÜ OLAN TEK VASSAL\n"
    +"Mengli Giray'ın 1475 anlaşmasıyla han Osmanlı himayesini kabul etti; iç işlerde geniş özerklik korunurken kıyı kaleleri (Kefe, Sudak, Mangub) doğrudan Osmanlı idaresine geçti. Öteki üç prenslikten farklı olarak Kırım hanları Osmanlı seferlerine (Moskova, Lehistan, Habsburg, Safevî cephelerinde) düzenli asker göndermek zorundaydı. Taht kavgalarında sultanın onayı belirleyiciydi — Eflak/Boğdan'da yerel boyar etkisi daha belirleyiciyken, Kırım'da Osmanlı desteği vazgeçilmezdi.\n\n"
    +"■ HİCAZ — ŞERİFLİK, AYRI BİR SINIF\n"
    +"Hicaz'da yönetim Mekke Şerifi ile Osmanlı valisi arasında bölünmüştü; şerifin bedevî Arap ilişkilerini yürütme ve hac yollarını güvenceye alma gibi imtiyazlı yetkileri vardı. Merkezî hükûmet şerif ile valinin görev sınırını hiçbir zaman net çizmedi, bu da sürekli yetki çatışması doğurdu. 1840'a kadar bölge fiilen Mısır yönetimi üzerinden idare edildi; sonrasında doğrudan Osmanlı denetimi güçlendi. Sistem 1908'de atanan Şerif Hüseyin'in merkezileşmeye direnip 1916'da İngiliz destekli isyanıyla sona erdi.\n\n"
    +"■ ORTAK DESEN\n"
    +"Dördü de (Kırım hariç) aynı iskeleti paylaşır: yerli/seçilmiş yönetici + sabit ya da artan haraç + dış siyasette bağımlılık + (başlangıçta) garnizonsuzluk. Ayrışan eksen askerî yükümlülüktür (Kırım) ve zamanla merkezîleşme derecesidir (Eflak/Boğdan 18. yüzyılda Fenerli idareyle, Hicaz 19. yüzyılda doğrudan valilik ağırlığıyla merkeze yaklaştı).",
  kesinlik:"kesin",
  olay:["1373-01-01|Eflak tâbiiyeti","1455-01-01|Boğdan tâbiiyeti","1541-01-01|Erdel voyvodalığı","1475-01-01|Kırım himayesi","1840-01-01|Hicaz"],
  kaynak:"TDV: eflak · bogdan · erdel · kirim · hicaz" },

// ── H-0086 · Eflak-Boğdan-Erdel'in iç/dış hakları ───────────────────────────
{ id:"teknik-eflak-bogdan-erdel-haklari", tur:"teknik-bilimsel",
  kisa:"Bu üç voyvodalık ne tam bağımsızdı ne bir Osmanlı sancağı — aradaki çizgi vergide, orduda ve prensin kimin onayıyla tahta çıktığında duruyordu.",
  metin:"Genel listeye ek olarak, üç Balkan/Karpat voyvodalığının somut yetki paylaşımı:\n\n"
    +"■ İÇ İŞLER\n"
    +"Üçünde de yerli voyvoda/prens iç yönetimi elinde tuttu: Eflak'ta yerli boyarlar ve bağımsız bir Ortodoks metropolitlik, Boğdan'da benzer bir yerel idare, Erdel'de macar/sekel/sas 'üç millet' meclisi kendi iç düzenini sürdürdü. Osmanlı hiçbirinin gündelik idaresine karışmadı.\n\n"
    +"■ VERGİ (HARAÇ)\n"
    +"Üçü de sabit ya da artan bir yıllık haraçla yükümlüydü: Eflak ve Boğdan'da meblağ zamanla katlanarak arttı (Boğdan'da 2.000'den 12.000 altına), Erdel'de 10.000'den 40.000 altına çıktı. Bu ödeme HARAÇ'tı, doğrudan vergi değil — miktar merkezî hazineye değil voyvodanın kendi hazinesinden toplu ödenirdi.\n\n"
    +"■ ASKER BULUNDURMA\n"
    +"Okunan TDV maddeleri üçü için de düzenli, zorunlu bir Osmanlı ordusuna asker verme yükümlülüğünden AÇIKÇA söz etmiyor — bu, düzenli sefer katılımı Osmanlı seferberliğinin standart bir parçası olan Kırım Hanlığı'ndan (bk. H-0085) temel farkıdır. Erdel prensleri siyasi koşullar zorladığında Osmanlı seferlerine katılmıştır, ama bu maddede bir 'zorunlu kontenjan' rakamı yok — `ölçülemedi`.\n\n"
    +"■ DIŞ İŞLERİ VE PRENS ATAMASI\n"
    +"Üçünde de dış siyaset Osmanlı onayına bağlıydı. Prens/voyvoda ataması yerel değildi: Erdel'de sultan doğrudan müdahale edip prens atayabiliyordu (Bethlen Gábor örneği, 1613); Eflak-Boğdan'da ise 1716/1710'dan sonra yerli hanedanlar tamamen devre dışı kalıp İstanbul'un doğrudan atadığı Fenerli Rum yöneticilere geçildi — bu, üçünün de zamanla merkeze YAKLAŞTIĞI, uzaklaşmadığı ortak bir eğilimdir.\n\n"
    +"■ GARNİZON\n"
    +"Klasik dönemde üçünde de kalıcı Osmanlı garnizonu YOKTU (Eflak maddesi bunu açıkça belirtiyor); bu, kıyı kalelerine (Kefe vb.) doğrudan garnizon konan Kırım'la tezat oluşturur.",
  kesinlik:"kesin",
  olay:["1613-01-01|Bethlen Gábor","1716-01-01|Fenerli idare"],
  kaynak:"TDV: eflak · bogdan · erdel" },

// ── H-0091a · Osmanlı tarihçiliğinin kaynakları (genel) ─────────────────────
{ id:"teknik-osmanli-tarihciligi-kaynaklari", tur:"teknik-bilimsel",
  kisa:"Bu atlasın kronolojisi boşluktan gelmiyor — arkasında adı bilinen, yöntemi tartışılan, kimi zaman birbirini çürüten bir vakanüvisler zinciri var.",
  metin:"Osmanlı tarihinin yazılı hafızası, sarayın resmî görevlendirdiği vakanüvislerden bağımsız kalemlere kadar geniş bir yelpazeye dayanır. Bu ek okumada okunan üç isim, üç farklı çağı ve üç farklı yöntemi temsil eder — her birinin kendi kartı ayrıca var:\n\n"
    +"■ NEŞRÎ (ö. 1520) — İLK ELEŞTİREL BAKIŞ\n"
    +"Erken dönem Osmanlı tarihini derleyip Âşıkpaşazâde gibi önceki kaynakları sistematik biçimde tartan, olayları neden-sonuç bağıyla açıklamaya çalışan ilk isim sayılır.\n\n"
    +"■ NAİMA (ö. 1716) — İLK RESMÎ VAKANÜVİS\n"
    +"1702'de imparatorluğun ilk resmî tarihçisi (vakanüvis) unvanını taşıyan isimdir; eseri 1592-1660 arasını canlı bir anlatımla kaydeder.\n\n"
    +"■ AHMED CEVDET PAŞA (1823-1895) — MODERN YÖNTEMİN KÖPRÜSÜ\n"
    +"Klasik anlatı geleneğiyle modern kaynak eleştirisini birleştiren, Avrupa tarihini de işin içine katan son büyük vakanüvis-hukukçudur.\n\n"
    +"■ SORULMASI GEREKEN AMA BULUNAMAYAN İSİM\n"
    +"Vecihî Hasan Efendi (17. yüzyıl vakanüvisi) için denenen TDV sluğu (`vecihi`) ölü çıktı; alternatif slug bu turda aranmadı — `bulunamadı`, ayrı kart yazılmadı.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: naima · nesri · cevdet-pasa" },

{ id:"kimdir-nesri", tur:"kimdir",
  ad:"Neşrî kimdi? — Türkçe yazan ilk 'eleştirel' Osmanlı tarihçisi",
  kisa:"Adı bile kesin bilinmeyen bir Bursa müderrisi, 'tarih Türkçe yazılmamış' diye kızıp altı ciltlik bir dünya tarihi yazdı.",
  metin:"Gerçek adı kaynaklarda kesin değil; 'Hüseyin b. Eyne Bey' olduğu tahmin edilir. Karamanlı kökenliydi, I. Selim'in hizmetinde bulundu, eğitimini Bursa'da tamamladı ve II. Bayezid döneminde Sultâniye Medresesi'nde ders verdi (ö. 926/1520).\n\n"
    +"En önemli eseri Kitâb-ı Cihannümâ'dır — kendi ifadesine göre 'başka ilimlerde çok eser varken tarih dağınık kaldığı, Türkçe yazılmış bir tarih de bulunmadığı' için kaleme aldığı bir dünya tarihi. Eser aslında yaratılıştan kendi zamanına kadar altı bölümden oluşuyordu; bugüne yalnız İslam-öncesi Türk tarihi ve Osmanlı tarihi bölümü ulaştı. Elimizdeki nüshalar 1485, 1512 ya da 1516'ya kadar uzanır; Osmanlı kısmı kuruluştan II. Bayezid'in orta saltanat yıllarına kadar gelir.\n\n"
    +"TDV onu 'gerçeği aramaya çalışan ilk Osmanlı tarihçisi' sayar: kaynaklarını (özellikle Âşıkpaşazâde'yi) sistemli biçimde karşılaştırıp olayları yalnız sıralamak yerine neden-sonuç ilişkisiyle açıklamaya çalıştı — Osmanlı tarihçiliğinde eleştirel yöntemin ilk belirtisi sayılır.",
  kesinlik:"kesin",
  olay:[],
  kaynak:"TDV: nesri" },

{ id:"kimdir-naima", tur:"kimdir",
  ad:"Naîmâ kimdi? — imparatorluğun ilk RESMÎ tarihçisi",
  kisa:"Halep'te doğan bir saray kâtibi, otuz yaşlarında devletin ilk 'vakanüvis'i (resmî tarihçi) unvanını aldı.",
  metin:"Asıl adı Mustafa'ydı; 1065 (1655) dolayında Halep'te doğdu, ö. 1128/1716. Osmanlı bürokrasisinde saray görevlisi olarak başlayıp divan kâtipliğine yükseldi; 'Naîmâ' devlet hizmetinde aldığı mahlastı. Önce Kalaylıkoz Ahmed Paşa'nın, sonra Amcazâde Hüseyin Paşa'nın himayesinde idarede ilerledi.\n\n"
    +"1114 (1702) dolayında imparatorluğun İLK resmî tarihçisi (vakanüvis) unvanını aldı; görevi Hüseyin Paşa için tarihî kayıtları derleyip düzenlemekti. Bu görevin yanında taşra muhasebeciliği ve hazine defterdarlığı gibi idari görevlerde de bulundu; Ağustos 1716'da öldü.\n\n"
    +"Ana eseri Ravzatü'l-Hüseyn (halk arasında 'Naîmâ Tarihi'), büyük ölçüde daha önceki bir yazarın (Ahmed Efendi) notlarına dayanır; son hâli yaklaşık 1000-1070 (1592-1660) yıllarını kapsar ve ölümünden sonra, 1147'de (1734) İbrâhim Müteferrika tarafından iki cilt hâlinde basıldı — Türkçe olarak matbaada basılan ilk büyük tarih eserlerinden biridir. TDV'ye göre eseri canlı anlatımı, olayların arka planına dair titiz dikkati ve çok sayıda kaynağı ustalıkla birleştirmesiyle sonraki Osmanlı tarihçileri ve modern araştırmacılar için etkili bir örnek oldu.",
  kesinlik:"kesin",
  olay:["1702-01-01|Naîmâ vakanüvis oldu","1734-01-01|Ravzatü'l-Hüseyn basıldı"],
  kaynak:"TDV: naima" },

{ id:"kimdir-ahmed-cevdet-pasa", tur:"kimdir",
  ad:"Ahmed Cevdet Paşa kimdi? — hem tarihçi hem kanun yapan devlet adamı",
  kisa:"Bulgaristan'ın küçük bir kasabasından çıkıp Osmanlı'nın ilk medenî kanununu yazan adam, aynı zamanda imparatorluğun son büyük vakanüvisiydi.",
  metin:"1239'da (1823) bugünkü Bulgaristan'daki Lofça'da doğdu, 1312'de (1895) öldü. İstanbul'da sıkı bir medrese ve dil eğitimi aldı, dönemin önde gelen âlimlerinden ders gördü. Kadılık, müfettişlik, valilik ve adliye nazırlığı gibi görevlerde bulunurken bir yandan da yoğun bir bilimsel üretim sürdürdü.\n\n"
    +"En tanınmış eseri Târîh-i Cevdet'tir — 1774 Küçük Kaynarca Antlaşması'ndan 1826'da Yeniçeri Ocağı'nın kaldırılışına kadar uzanan olayları anlatan on iki ciltlik bir tarih. Klasik Osmanlı vakanüvisliğinden farklı olarak Avrupa tarihini de kapsamlı biçimde işler ve İbn Haldun'un tarih felsefesinden etkilenen, kurumsal çöküşü ve olaylar arası neden-sonuç bağını inceleyen analitik bir yöntem kullanır; dönemine göre sade bir dil tercih eder.\n\n"
    +"Tarihçiliğin ötesinde en kalıcı mirası hukuk alanındadır: Mecelle'nin (Osmanlı medenî kanunu, İslam devletleri arasında bu türün ilk derlemesi) hazırlanmasına öncülük etti; Fransız hukukunun toptan alınmasına karşı çıkıp yerli fıkıh birikiminin güncel ihtiyaca uyarlanmasını savundu. Ayrıca Dîvân-ı Ahkâm-ı Adliyye (temyiz mahkemesi) ve Mekteb-i Hukuk (hukuk okulu) gibi modern adlî kurumları kurdu — Osmanlı hukuk altyapısını kökten yeniden şekillendirdi.\n\n"
    +"TDV'ye göre klasik ve modern Osmanlı tarihçiliği arasında bir köprü kurdu: geleneksel anlatı biçimini sistemli kaynak değerlendirmesi ve karşılaştırmalı analizle birleştirdi; eğitim reformları ve dil çalışmalarıyla da Türk fikir hayatını etkiledi.",
  kesinlik:"kesin",
  // EKO-ILGI-0073: "1826-06-15" diye bir kronoloji günü yok (madde 1826-06) —
  // bağ öksüzdü, kart bu maddede HİÇ çıkmıyordu. Gün düzeltildi (ilgi doğru:
  // Târîh-i Cevdet tam 1774-1826 arasını anlatır).
  olay:["1774-07-21|Küçük Kaynarca","1826-06-15|Hayriyye"],
  kaynak:"TDV: cevdet-pasa" },

// ── H-0093 · Cezayir'de dayı idaresi ────────────────────────────────────────
{ id:"teknik-cezayir-dayilik", tur:"teknik-bilimsel",
  kisa:"İstanbul'un atadığı bir yönetici sonunda göreve hiç gelemez oldu — Cezayir'de asıl gücü kendi seçtikleri dayılar toplamıştı.",
  metin:"■ OSMANLI HÂKİMİYETİNİN BAŞLANGICI (1516'dan)\n"
    +"Cezayir halkı İspanyol işgaline karşı yardım istedi; kardeşler Oruç ve Hızır (Barbaros) Reis 1516'da Cezayir'i aldı. Hayreddin Barbaros, Osmanlı padişahının desteğini alıp şehirde onun adına hutbe okutarak bölgeyi resmen Osmanlı idaresine bağladı.\n\n"
    +"■ 'GARP OCAKLARI' — YARI ÖZERK BİR ASKERÎ SİSTEM\n"
    +"Cezayir, Garp Ocakları denen yarı özerk askerî-idarî yapı içinde yönetildi; sistem dört evreden geçti: beylerbeyilik dönemi (1518-1587), paşalar dönemi (1587-1659), ağalar dönemi (1659-1671) ve deyler dönemi (1671-1830).\n\n"
    +"■ İSTANBUL'LA İLİŞKİ — SIKI DEĞİL GEVŞEK\n"
    +"Bağ, tipik bir eyalet idaresinden çok daha gevşekti: dayı sistemi merkezî otoriteye ciddi meydan okumalar üretti, deyler İstanbul'un gönderdiği valileri defalarca reddetti ve kendi dış ilişkilerini bağımsızca yürüttü. Kaynağın ifadesiyle Osmanlı hükûmeti Cezayir ocağına sıkı merkezîleşme yerine daha SERBEST bir idare uyguladı. Deyler bağımsızca savaş ilan edip barış yapabiliyor, kendi antlaşmalarını imzalıyor, İstanbul'un gönderdiği valileri kabul etmiyordu; 1729-1731'de İstanbul zor kullanmaya kalkışınca Osmanlı'nın iç krizleri Cezayirli korsanları bu baskıdan koruyacak zemini sağladı.\n\n"
    +"■ ASKERÎ YAPI\n"
    +"Kuvvetler Anadolu'dan devşirilen askerlerle, Berberi kabilelerinden toplanan yerel süvarilerin ('mehâzin') birleşiminden oluşuyordu; 1630'larda toplam yaklaşık 20.000 kişiye ulaşıyordu.\n\n"
    +"■ VERGİ DEĞİL, KORSANLIK GELİRİ\n"
    +"Gelirin esas kaynağı İstanbul'a ödenen haraç değil, korsanlık faaliyetiydi — klasik tâbi devlet ilişkisinin (bkz. H-0085/H-0086: Eflak/Boğdan/Erdel/Kırım) tam tersine dönmüş bir mali modeldi.\n\n"
    +"■ DAYI UNVANI — TDV'DE AYRI BİR TUZAK\n"
    +"TDV'nin `dayi` maddesi bu idari unvanı DEĞİL, fıkıhtaki 'anne tarafından akraba (dayı)' terimini anlatır — canlı slug, ilgisiz madde (CLAUDE.md §4②). Bu kartın dayılık bilgisi tamamen `cezayir` maddesinin kendisinden alındı.\n\n"
    +"■ TUNUS, LİBYA, MISIR, SUDAN, SOMALİ, ETİYOPYA — ARAŞTIRILMADI\n"
    +"Şartname aynı analizi bu bölgeler için de istiyordu; zaman sınırı nedeniyle bu turda YAPILAMADI — `bulunamadı`, sonraki bir tura bırakılmalı.",
  kesinlik:"kesin",
  olay:["1516-01-01|Cezayir'in Osmanlı'ya bağlanması"],
  kaynak:"TDV: cezayir" },

// ── H-0094 · Osmanlı-Fas ilişkileri ─────────────────────────────────────────
{ id:"teknik-osmanli-fas-iliskileri", tur:"teknik-bilimsel",
  kisa:"Osmanlı bir Fas şehrini dokuz ay elinde tuttu, sonra hiç geri dönmedi — geri kalan üç asır elçi ve hediye alışverişiyle geçti.",
  metin:"■ TEK KISA İŞGAL — FAS ŞEHRİ, 1554\n"
    +"Osmanlılar Fas'ı (Fez'i) hiçbir zaman kalıcı biçimde ele geçirmedi. Tek somut askerî varlık, komutan Sâlih Paşa yönetimindeki kuvvetlerin 1554'te Fas şehrini alıp yalnız dokuz ay elde tutmasıdır.\n\n"
    +"■ VÂDİÜLMEHÂZİN SAVAŞI (1578) — DESTEK, İLHAK DEĞİL\n"
    +"Sa'dî hükümdarı Mevlây Muhammed Fas'ı birleştirmeye çalışırken Cezayir'den Osmanlı yayılması bir tehdit olarak görülüyordu. Osmanlı destekli Sultan Abdülmelik'in Portekiz Kralı Sebastian'ı yendiği Vâdiülmehâzin (Ksar el-Kebir) Savaşı (1578) tarihe geçse de bu zafer kalıcı bir Osmanlı hâkimiyeti KURMADI — Fas bağımsız bir Sa'dî devleti olarak kaldı.\n\n"
    +"■ İLİŞKİNİN ASIL BİÇİMİ: ELÇİ VE HEDİYE\n"
    +"İki devlet arasındaki bağ esas olarak elçi gidip gelmesi ve hediye teatisinden ibaretti — düzenli bir tâbilik ya da vassallık ilişkisi kurulmadı. Sultan Ahmed el-Mansûr gibi Sa'dî hükümdarları İstanbul'la yazışmayı sürdürse de, törensel tanıma meselelerinde gerginlikler yaşandı.\n\n"
    +"■ ALAVî (FİLALİ) DÖNEMİ — İLİŞKİ ZAYIFLIYOR\n"
    +"1631 sonrasında iktidara gelen Alavî (Filali) hanedanı döneminde Osmanlı nüfuzu iyice geriledi. 1830'da Fransızlar Cezayir'i işgal ettiğinde Tilimsân (Tlemcen) halkının Fas'tan koruma araması, TDV'nin ifadesiyle Osmanlı Devleti'nin bölgeyle kalan 'organik bağının' sonunu simgeler.\n\n"
    +"■ HARAÇGÜZARLIK / HİMAYE / MÜTTEFİKLİK — HİÇBİRİ RESMEN KURULMADI\n"
    +"Okunan TDV maddesine göre Fas hiçbir dönemde Eflak/Boğdan/Erdel/Kırım gibi haraç ödeyen bir tâbi statüsüne (bkz. H-0085) girmedi, resmî bir himaye anlaşması da kurulmadı — ilişki baştan sona iki bağımsız Müslüman devlet arasındaki diplomatik/dinî nezaket düzeyinde kaldı; açık bir savaş hâli de madde metninde geçmiyor (Vâdiülmehâzin bir Osmanlı-Fas savaşı değil, Fas'ın kendi taht mücadelesiydi).",
  kesinlik:"kesin",
  olay:["1554-01-01|Fas şehri","1578-08-04|Vâdiülmehâzin"],
  kaynak:"TDV: fas" }

];

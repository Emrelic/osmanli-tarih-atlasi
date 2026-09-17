// ============================================================================
// EK OKUMA — ANTLAŞMA HÜKÜMLERİ + ÖNEM + SEBEP-SONUÇ (pilot) · KITA 21 · 13 Eylül 2026
// ============================================================================
// Paket 0045 H-0009 (Emre): antlaşmalara hükümleri içeren ek okuma, ayrıca
// antlaşmanın önemi ve sebep-sonucu.
// Şartname: oturumlar/KITA-21-ANTLASMA-0045.md · rapor: denetim/BULGU-KITA21-ANTLASMA-0913.md
//
// KAPSAM — ölçüldü: şartnamenin 12 adayının 12'si de `data/savaslar.js`
// ANTLASMALAR'da tek cümlelik temel kartla VAR; madde madde detay kartı
// (`data/ekokuma.js`, tur:"antlasma") yalnız 4'ünde (Karlofça · Pasarofça ·
// Küçük Kaynarca · Berlin). Bu dosya DETAYSIZ kalan 8'ini taşır.
//
// ŞEMA — yeni alan İCAT EDİLMEDİ, iki mevcut tür birlikte kullanıldı:
//   tur:"antlasma"     id · tur · olay · metin · kesinlik · kaynak
//                      (mevcut 4 kartla aynı biçim — js/app.js ekKartHtml bu
//                       türü SON ÇARE dalıyla çiziyor ve yalnız DİZGİ alanları
//                       basıyor; `hukumler:[...]` gibi bir dizi GÖRÜNMEZDİ)
//   tur:"sebep-sonuc"  id · tur · kisa · sebep{b,t} · sonuc{b,t} · bag · metin ·
//                      kesinlik · zincir · olay   (bag = ÖNEMİ)
// `olay:` değerleri çekirdek (olaylar*.js) maddelerin `t`'siyle BİREBİR —
// doğrulayıcı her birini sınadı. `zincir:[]` bilerek boş: app.js zincir
// bağlantısını yalnız window.EKOKUMA'da arıyor, burada kırık bağ olurdu.
//
// 🔴 YÜKLEYİCİ (D099): bu dosya bugün app.js'in ekOkumaMerakYukle listesinde
// YOK ⇒ eklenene kadar ekrana gelmez. İstek tahtada KITA 12'ye yazıldı (M-3656).
//
// KAYNAK: TDV gövdeleri okundu, metin KOPYALANMADI — özetlendi. Üç antlaşmanın
// müstakil TDV maddesi ölü (belgrad-antlasmasi · bukres-antlasmasi 302);
// hükümleri ülke/şehir maddelerinden toplandı ve `kaynak:`ta öyle yazıldı.
// ============================================================================
// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —
// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.
window.EKOKUMA_ANTLASMA2 = [

// ── 1555 AMASYA ─────────────────────────────────────────────────────────────
{
  id: "antlasma-amasya-1555",
  tur: "antlasma",
  olay: ["1555-05-29"],
  metin: "TDV'ye göre Amasya barışı madde madde imzalanmış bir metinden çok, Kanûnî'nin Şah Tahmasb'a gönderdiği cevap mektubuna dayanır; antlaşmanın esaslarını belirleyen bu mektup Safevî elçisine divanda 1 Haziran 1555'te verildi. Üç temel hüküm: ① Safevî elçisi, İran'da ilk üç halifeye, sahabeye ve Hz. Âişe'ye lanet okuma törenlerinin (teberrâîlik) yasaklanacağına dair teminat verdi. ② Karşı taraftan bir saldırı gelmedikçe Osmanlı sınır beyleri İran'a karşı harekete geçmeyecekti. ③ Kutsal yerleri ziyarete gidecek İranlı hacıların Osmanlı topraklarından geçmesine izin verildi. Metin sınırları tek tek saymasa da antlaşma; Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîlerce tanınması anlamına geliyordu. Barış, Tahmasb'ın ölümünden sonra II. İsmâil tahta çıkana kadar yaklaşık yirmi beş yıl yürürlükte kaldı.",
  kesinlik: "kesin",
  kaynak: "TDV: amasya-antlasmasi", ic_not_kaynak:"eski kaynak: TDV: amasya-antlasmasi (gövde okundu)"
},
{
  id: "sebep-sonuc-amasya-1555",
  tur: "sebep-sonuc",
  kisa: "Şah hiç savaşmadı — Kanûnî'yi barışa ne getirdi?",
  sebep: {
    b: "Nahcıvan Seferi'nde Şah Tahmasb'ın meydan savaşından kaçıp ordunun yolunu yakıp yıkması, Kanûnî'nin Amasya'da kışlayıp Safevîlerin kutsal saydığı Erdebil'i tehdit etmesi ve şahın mütareke istemesi",
    t: "1554-09-26"
  },
  sonuc: {
    b: "Amasya Antlaşması: Irak ve Doğu Anadolu'daki Osmanlı hâkimiyetinin Safevîlerce kabul edildiği, iki devlet arasındaki ilk antlaşma",
    t: "1555-05-29"
  },
  bag: "Önemi: TDV bu barışı Osmanlı Devleti ile İran arasında yapılan ilk antlaşma olarak tanımlar. Bir dostluk mektuplaşması görünümünde olsa da Bağdat'tan Kars'a uzanan hattaki Osmanlı hâkimiyetini karşı tarafa kabul ettirdi ve çeyrek asır boyunca doğu sınırını sakinleştirdi.",
  metin: "Safevîlerin Tebriz Seferi'nden sonra Doğu Anadolu'ya yaptığı akınlar Kanûnî'yi yeniden sefere çıkardı. Tahmasb büyük orduya karşı koyamayacağını bildiği için karşısına çıkmadı; ordunun geçeceği yerleri yaktı, suları zehirletti, halkı göç ettirdi. Erzak sıkıntısı ve yaklaşan kış yüzünden Osmanlı ordusu Nahcıvan'dan çekildi. Kanûnî Erzurum'dayken şahın mütareke isteği kabul edildi (26 Eylül 1554). Padişahın Amasya'da kışlaması ve Erdebil'i tahrip tehdidi Tahmasb'ı telaşlandırdı: elçisi Ferruhzâd Bey 17 Mayıs 1555'te Amasya'ya geldi, 22 Mayıs'ta divanda kabul edilip barış isteyen mektubu sundu.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1555-05-29"],
  kaynak: "TDV: amasya-antlasmasi"
},

// ── 1606 ZİTVATOROK ─────────────────────────────────────────────────────────
{
  id: "antlasma-zitvatorok-1606",
  tur: "antlasma",
  olay: ["1606-11-11"],
  metin: "Görüşmeler Zsitva'nın Tuna'ya karıştığı yerde 29 Ekim 1606'da başladı ve antlaşma 11 Kasım 1606'da imzalandı; Osmanlı tarafını Budin Beylerbeyi Kadızâde Ali Paşa temsil etti. TDV'nin saydığı başlıca hükümler: ① Habsburg imparatoru ile padişah arasında baba-oğul ilişkisi kuruldu; Osmanlılar bundan sonra Habsburg hükümdarı için 'Beç kralı' yerine imparator (çasar/kayzer) unvanını kullanacaktı. ② Savaş sırasında hangi taraf nereyi aldıysa orası onda kaldı; Eğri, Kanije ve Estergon Osmanlı'da kaldı, ancak imparatorun elçileri onay aşamasında Kanije'yi isteyebilecekti. ③ Habsburglar yıllık vergi ödemeyecek, bir defaya mahsus 200.000 kuruş değerinde hediye gönderecekti. ④ Kale işgal etmek ve esir almak yasaklandı, eldeki esirler iade edilecekti. ⑤ Osmanlı'ya bağlı köylerin vergisini Osmanlı memurları değil köy muhtarları toplayacak, krala vergi vermeyen soylular Osmanlı'ya da vermeyecekti. ⑥ Habsburg imparatoru ile Macarlar arasındaki Viyana barışının kararları tanındı. ⑦ Barış yirmi yıl için yapıldı. Tarafların elindeki metinler birbirini tutmuyordu (Vác Kalesi, köylünün vergi ödeme biçimi, geri alınan yerlerdeki vergiler); İstanbul'da sunulan metin, Habsburgların üç yıl sonra yeniden vergi ödeyeceğini ve Erdel'in Osmanlı hâkimiyetinde olduğunu da yazıyordu. Habsburgların istediği metin ancak padişahın barışı 1615'te yeniden onaylamasıyla tanındı.", ic_not_metin:"eski önek: ⚠️",
  kesinlik: "tartismali",
  kaynak: "TDV: zitvatorok-antlasmasi", ic_not_kaynak:"eski kaynak: TDV: zitvatorok-antlasmasi (gövde okundu)"
},
{
  id: "sebep-sonuc-zitvatorok-1606",
  tur: "sebep-sonuc",
  kisa: "Bir unvan niçin bir kaleden ağır bastı?",
  sebep: {
    b: "1593'te başlayan uzun savaşın iki tarafı da malî sıkıntıya düşürmesi; Anadolu'da Celâlî ayaklanmaları, doğuda Safevî karşı taarruzu ve Erdel Prensi Bocskay'ın Habsburglara isyanı",
    t: "1593-07-01"
  },
  sonuc: {
    b: "Zitvatorok Antlaşması: Habsburg hükümdarının padişahın dengi sayıldığı ve yıllık verginin kalktığı barış",
    t: "1606-11-11"
  },
  bag: "Önemi: TDV'ye göre bu, Habsburg-Osmanlı ilişkilerinde padişahın tek taraflı iyi niyetine bağlı olarak değil ortak müzakereyle karara bağlanan ilk antlaşmaydı; iki hükümdar eşit taraf olarak görüştü ve diplomatik teamülde Osmanlı'nın Hıristiyan rakibi karşısındaki üstünlüğü sona erdi.",
  metin: "Barış yoklamaları 1596'dan beri sefer mevsimi dışındaki kış aylarında yapılıyor ama sonuç vermiyordu. 1604 Kasımında Erdel Prensi István Bocskay'ın Habsburglara karşı ayaklanması görüşmeleri kesti; Macar soyluları iki büyük güç arasında belirleyici taraf hâline geldi. Sadrazam Lala Mehmed Paşa önce savaşı sürdürmeyi yeğledi, fakat 1606 Haziranında sefer hazırlığı sırasında öldü. Antlaşma sonradan altı kez uzatıldı ve şartları altmış yıl boyunca yürürlükte kaldı.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1593-07-01", "1606-11-11"],
  kaynak: "TDV: zitvatorok-antlasmasi"
},

// ── 1639 KASR-I ŞİRİN ───────────────────────────────────────────────────────
{
  id: "antlasma-kasr-i-sirin-1639",
  tur: "antlasma",
  olay: ["1639-05-17"],
  metin: "Müzakereler Kasr-ı Şirin yakınında, dağ eteğindeki Zühâb'da 14 Mayıs 1639'da başladı, üç gün sürdü ve antlaşma 17 Mayıs'ta imzalandı; bu yüzden bazı kaynaklar onu Zühâb Antlaşması diye anar. Başlıca hükümler (TDV): ① Irâk-ı Arab denilen Bağdat, Basra ve Şehrizor bölgesi Osmanlı'da kaldı. ② Revan Safevîlere bırakıldı. ③ Safevîlerin Irak'a ve Kars, Ahıska, Van yönüne saldırıları önlenecekti. ④ Safevîler Osmanlı'nın Basra körfezindeki hâkimiyetini kabul etti. Görüşmelerden önce Sadrazam Kemankeş Kara Mustafa Paşa, Kars'ın İran'a verilmesi karşılığında önerilen barışı reddetmişti. IV. Murad İstanbul'a dönmüş olduğu için metin Safevî elçisi Muhammed Kulı Han tarafından İstanbul'a götürüldü ve antlaşma 1639 Kasımı sonunda kesin olarak onaylandı. TDV, iki devlet arasındaki 2185 km'lik sınırın yalnız Ağrı Dağı ile Şattülarap arasındaki 1296 km'lik kısmının tartışmalı olduğunu kaydeder.",
  kesinlik: "kesin",
  kaynak: "TDV: kasrisirin-antlasmasi · murad-iv", ic_not_kaynak:"eski kaynak: TDV: kasrisirin-antlasmasi · murad-iv (gövde okundu)"
},
{
  id: "sebep-sonuc-kasr-i-sirin-1639",
  tur: "sebep-sonuc",
  kisa: "Üç günlük müzakere niçin iki asır sınır oldu?",
  sebep: {
    b: "IV. Murad'ın Bağdat'ı geri alması, Safevî ordusunun Kasr-ı Şirin'e çekilmesi ve 1630'dan beri Azerbaycan ile Irak cephelerinde süren savaşlardan iki tarafın da yorulması",
    t: "1638-12-24"
  },
  sonuc: {
    b: "Kasr-ı Şirin (Zühâb) Antlaşması: Irak Osmanlı'da, Revan Safevîlerde kaldı",
    t: "1639-05-17"
  },
  bag: "Önemi: TDV'ye göre Osmanlı-Safevî anlaşmazlığına kesin olarak son verdi ve sonraki yüzyıllarda esas alındı: 1746 Kerden Antlaşması onu yeniledi, 1823 ve 1847 Erzurum antlaşmaları sınır meselelerini onu temel alarak çözdü.",
  metin: "Barışın ekonomik getirisi de oldu. Şah Abbas'ın başkenti Tebriz'den İsfahan'a taşıması ve Ermeni tüccarları için Yeni Culfa'yı kurması ticaret yollarını güneye kaydırmıştı; barış ortamında İran ipeği ve kumaşları Bağdat üzerinden Halep'e, Musul üzerinden Diyarbekir ve Anadolu şehirlerine taşındı. TDV'nin aktardığı rakamlara göre İran'ın ipek ihracatı 1640-1670 arasında yaklaşık yarı yarıya arttı. Bu dengeli dönem, Afşar hânedanının kurucusu Nâdir Şah'ın 1736'da iktidara gelişine kadar sürdü.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1638-12-24|Bağdat", "1639-05-17", "1736-03-08", "1746-09-04", "1847-05-31"],
  kaynak: "TDV: kasrisirin-antlasmasi · murad-iv"
},

// ── 1739 BELGRAD ────────────────────────────────────────────────────────────
{
  id: "antlasma-belgrad-1739",
  tur: "antlasma",
  olay: ["1739-09-18", "1739-10-03"],
  metin: "Hükümler, TDV İslâm Ansiklopedisi'nin Avusturya, Rusya, Sırbistan ve Belgrad maddelerinden derlenmiştir. AVUSTURYA ile: ① Avusturya, 1718 Pasarofça'da kazandığı yerleri — Banat hariç — geri verdi. ② Belgrad Osmanlı'ya teslim edildi; Avusturya'ya geçmiş olan Kuzey Sırbistan'ın bir kısmı yeniden Osmanlı yönetimine girdi. RUSYA ile: ③ Rusya, savaşın sonlarında ele geçirdiği Özi'yi ve Hotin'i, işgal ettiği Boğdan'la birlikte terk etti. ④ Azak Kalesi yıkılacak ve bulunduğu bölge iki tarafın da uzak duracağı 'boş arazi' sayılacaktı; TDV bunu Osmanlı için önemli bir kazanım olarak değerlendirir.", ic_not_metin:"eski: TDV'de bu antlaşmanın müstakil maddesi bulunamadı (belgrad-antlasmasi adresi ölü); hükümler … maddelerinden toplandı.",
  kesinlik: "kesin",
  kaynak: "TDV: avusturya · rusya · sirbistan · belgrad", ic_not_kaynak:"eski kaynak: TDV: avusturya · rusya · sirbistan · belgrad (gövde okundu; müstakil madde bulunamadı)"
},
{
  id: "sebep-sonuc-belgrad-1739",
  tur: "sebep-sonuc",
  kisa: "21 yıl önce kaybedilen Belgrad masada nasıl döndü?",
  sebep: {
    b: "Rusya ve müttefiki Avusturya'nın Osmanlı'ya karşı iki cephede giriştiği 1736-1739 savaşında Avusturya'nın yenilmesi ve Belgrad'ı geri almak için yürütülen harekât",
    t: "1737-01-01"
  },
  sonuc: {
    b: "Belgrad Antlaşması: Belgrad ve Kuzey Sırbistan geri alındı, Azak yıkılıp iki tarafın da uzak duracağı bölge oldu",
    t: "1739-09-18"
  },
  bag: "Önemi: TDV'ye göre Avusturya'nın doğuya yayılması durdu ve Balkanlardaki sınırı sonraki yaklaşık 140 yılda pek değişmedi; Rusya ise 1774 Küçük Kaynarca Antlaşması'na kadar Karadeniz'den uzak tutuldu.",
  metin: "Barış iki imparatorluk arasında uzun bir sükûnet dönemi açtı. Avusturya, Maria Theresia döneminde veraset savaşları ve Prusya ile savaşlar yüzünden sıkıştığında Osmanlı bu zayıflıktan yararlanmayı seçmedi; Prusya Kralı II. Friedrich'in ısrarlı ittifak tekliflerine uzak kaldı. Rusya ise savaşı müttefikinden çok daha etkili yürüttüğü için Balkanlarda Habsburgların karşısına ciddi bir rakip olarak çıkmaya başladı. Belgrad'a dönüşün bedeli de ağırdı: 1741 tahririne göre Kuzey Sırbistan'daki 1546 köyün 721'i terk edilmişti. Belgrad Kalesi yeniden yapılarak ülkenin en büyük kalesi hâline getirildi.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1738-08-01", "1739-07-22", "1739-09-18", "1739-10-03"],
  kaynak: "TDV: avusturya · rusya · sirbistan · belgrad"
},

// ── 1792 YAŞ ────────────────────────────────────────────────────────────────
{
  id: "antlasma-yas-1792",
  tur: "antlasma",
  olay: ["1792-01-10"],
  metin: "On üç madde, bir giriş ve bir kapanıştan oluşan antlaşma 10 Ocak 1792'de Yaş'ta Rusça ve Türkçe metinler hâlinde mühürlenip değiştirildi. Temeli, Kalas'ta kabul edilen beş maddelik ön barıştı (mukaddime-i sulhiyye). Başlıca hükümler (TDV): ① 1774 Küçük Kaynarca Antlaşması geçerli sayıldı. ② Turla (Dinyester) nehri sınır oldu: sol kıyısı Rusya'ya, sağ kıyısı Osmanlı'ya ait olacaktı. ③ Rusya'nın işgal ettiği Eflak ve Boğdan, önceki antlaşmalarla tanınan imtiyazları teyit edilerek iade edildi; halk savaşın yıkımı yüzünden iki yıl vergiden muaf tutulacak, göç eden aileler dönebilecek, Bucak dâhil bölgedeki kaleler Osmanlı'ya bırakılacaktı. ④ Öteki bölgelerde sınırlar savaş öncesine döndü. ⑤ Kuban bölgesinden Rus topraklarına saldırı olursa gasp edilen mallar ve esirler bulunup iade edilecek, sorumlular cezalandırılacak, zarar ödenecekti; Rusya bölge için istediği 'serbestî' ve askerî müdahale hakkından vazgeçti. ⑥ Tiflis hanının topraklarına saldırılmayacaktı. ⑦ Garp Ocakları korsanlarının Rus gemilerine verdiği zarar, başvurudan sonra en geç iki ay içinde ödenecekti. ⑧ Esirler serbest bırakıldı; işgal altındaki yerler 15 Mayıs'a kadar boşaltılacak ve karşılıklı büyükelçilik heyetleri gönderilecekti. Bir talep ise düştü: Rusya 12 milyon kuruşluk (24.000 kese) savaş tazminatı istiyordu; İstanbul'daki meclis taksitle ödemeyi kabul etmeye karar vermişti, fakat Kuban maddesinde uzlaşılınca Bezborodko çariçenin tazminattan tamamen vazgeçtiğini ilan etti.", ic_not_metin:"eski: 🔴 Ve bir talep düştü:",
  kesinlik: "kesin",
  kaynak: "TDV: yas-antlasmasi", ic_not_kaynak:"eski kaynak: TDV: yas-antlasmasi (gövde okundu)"
},
{
  id: "sebep-sonuc-yas-1792",
  tur: "sebep-sonuc",
  kisa: "Ordu savaşmayı reddetti — barışı imzalatan bu muydu?",
  sebep: {
    b: "Rusya'nın 1783'te Kırım'ı ilhak etmesi ve Osmanlı'nın Kırım'ı geri almak hedefiyle Rusya'ya savaş ilan etmesi; Avusturya'nın da Rusya safında savaşa girmesi",
    t: "1787-08-16"
  },
  sonuc: {
    b: "Yaş Antlaşması: Turla nehri sınır oldu, Kırım'ı geri alma umudu sona erdi",
    t: "1792-01-10"
  },
  bag: "Önemi: TDV'ye göre Kırım'ı geri alma hayali bitti ve Rusya'nın Gürcistan'a uzanmasıyla Kafkaslardan gelecek tehlike görüldü. Ordunun savaşamayacağını açıkça beyan etmesi devletin her alanda yeniden yapılanmasını acil kıldı; barış Nizâm-ı Cedîd reformlarının başlangıcı oldu.",
  metin: "Maçin bozgunundan (9 Temmuz 1791) sonra ordugâhta toplanan sivil ve asker ileri gelenler ordunun savaşacak gücü kalmadığını kabul etti ve barıştan yana bir mazbata mühürledi. TDV bunu Osmanlı tarihinde emsali olmayan, ordunun savaşmayı reddetmesi anlamında bir 'boykot' diye niteler; savaşın sürmesini isteyen III. Selim'e barıştan başka seçenek bırakılmadı. Avrupa'daki gelişmeler de etkiliydi: İngiltere Özi'nin Rusya'da kalmasına savaş tehdidine varan bir sertlikle karşı çıkmış, Fransız İhtilâli'nin monarşiler için yarattığı tehlike II. Katerina'yı Türk savaşını bitirmeye itmişti. Barıştan sonra karşılıklı gönderilen büyük elçilik heyetleri, bu geleneğin son örneği oldu.",
  kesinlik: "kesin",
  zincir: [],
  // PAKET-A2 13 Eyl (D181): "1787-08-17" → "1787-08-16". PAKET-A3 aynı gün olaylar_ek5.js'teki savaş
  // ilanı maddesini TDV yas-antlasmasi'na göre 16 Ağustos'a çekti (0035/H-0090); bu bağ SESSİZCE koptu
  // ve yalnız ARAC-A2-BAG-0913.js --hepsi yakaladı ("o gün evrende madde YOK"). sebep.t zaten 16'ydı.
  olay: ["1783-04-19", "1787-08-16", "1792-01-10", "1792-06-01"],
  kaynak: "TDV: yas-antlasmasi"
},

// ── 1812 BÜKREŞ ─────────────────────────────────────────────────────────────
{
  id: "antlasma-bukres-1812",
  tur: "antlasma",
  olay: ["1812-05-28"],
  metin: "Hükümler, TDV İslâm Ansiklopedisi'nin Boğdan, Rusya ve Sırbistan maddelerinden derlenmiştir. ① Prut nehri Osmanlı-Rus sınırı oldu. ② Boğdan'ın doğu kısmı, en önemli yerleri olan Akkirman, Kili ve Bender ile birlikte Rusya'ya bırakıldı; Rusların Besarabya adını verdiği bu bölge 1918'e kadar 106 yıl Rus yönetiminde kaldı. ③ 1804'ten beri ayaklanma hâlindeki Sırplara kısmî özerklik verilmesi kabul edildi. TDV'nin Rusya maddesi, Napolyon'un Moskova seferine çıkması yüzünden savaşın pek ağır olmayan şartlarla sona erdiğini yazar.", ic_not_metin:"eski: TDV'de bu antlaşmanın müstakil maddesi bulunamadı (bukres-antlasmasi adresi ölü); hükümler … maddelerinden toplandı.",
  kesinlik: "kesin",
  kaynak: "TDV: bogdan · rusya · sirbistan", ic_not_kaynak:"eski kaynak: TDV: bogdan · rusya · sirbistan (gövde okundu; müstakil madde bulunamadı)"
},
{
  id: "sebep-sonuc-bukres-1812",
  tur: "sebep-sonuc",
  kisa: "Napolyon Moskova'ya yürürken masada ne kurtarıldı?",
  sebep: {
    b: "Fransızlara karşı kurulan Osmanlı-Rus ittifakının, Rusların Mora ve adalardaki Rumları isyana teşvik etmesiyle bozulması ve 1806'da yeniden başlayan savaş",
    t: "1806-01-01"
  },
  sonuc: {
    b: "Bükreş Antlaşması: Besarabya Rusya'ya geçti, Sırplara kısmî özerklik tanındı",
    t: "1812-05-28"
  },
  bag: "Önemi: Prut sınırıyla Besarabya 106 yıl sürecek bir Rus yönetimine girdi. TDV'ye göre Sırplara tanınan özerklikle birlikte, Ortodoks ve Slav halkların Osmanlı idaresine karşı açıkça kışkırtılıp desteklendiği bir döneme girildi.",
  metin: "Özerklik hükmü hemen yerine getirilmedi: daha geniş haklar isteyen Sırpların isyanı 1813'te bastırıldı, Belgrad geri alındı ve isyanın lideri Karadjordje Avusturya'ya kaçtı. Ama 1815'te Miloş Obrenoviç'in önderliğinde ikinci Sırp isyanı çıktı; o da aynı yıl bastırılmasına rağmen bu tarihten sonra Sırplara tanınan imtiyazlar genişletilmeye başlandı ve mesele 1826 Akkerman Antlaşması'yla yeniden masaya geldi.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1804-02-14", "1806-12-22", "1812-05-28", "1813-10-05", "1815-04-23"],
  kaynak: "TDV: rusya · sirbistan · bogdan"
},

// ── 1829 EDİRNE ─────────────────────────────────────────────────────────────
{
  id: "antlasma-edirne-1829",
  tur: "antlasma",
  olay: ["1829-09-14"],
  metin: "Antlaşma asıl metin, ona ekli bir sözleşme ve bir senetten oluşuyordu; on altı maddelik metin 'ebedî barış'tan söz ediyordu. Başlıca hükümler (TDV): ① Rumeli'de sınır Prut ve Tuna boyunca uzanıp Hızırilyas ağzında Karadeniz'e ulaştı; Tuna kolları arasındaki Yılan adaları Rusya'da kaldı, ama orada karantina dışında istihkâm yapılmayacak, nehrin Osmanlı'ya ait sağ kıyısı da iskân edilmeyecekti. ② Osmanlı, Rusya'nın Erivan ve Nahcıvan hanlıklarını ilhakını tanıdı; Ahıska ve Ahılkelek Rusya'ya bırakıldı (md. 2-4). ③ Eflak ve Boğdan kendi ayrı idarelerine kavuştu, Rusya iki prensliğin refahına kefil oldu; ek senede göre voyvodalar yerli boyarlarca ömür boyu seçilecek, halk Rusların çekilmesinden sonra iki yıl vergiden muaf olacaktı (md. 5). ④ Akkerman Antlaşması'nın Sırbistan hükümleri uygulanacak, Sırbistan'dan ayrılmış altı nahiye geri verilecekti (md. 6). ⑤ Boğazlar, Rus ticaret gemilerine ve Osmanlı ile savaşta olmayan devletlerin Rus limanlarına giden ticaret gemilerine açık olacaktı (md. 7). ⑥ Rus tüccarlarının 1806 savaşındaki zararı için on sekiz ayda dört taksitle 1,5 milyon Macar altını; savaş tazminatı olarak da Ahıska, Ahılkelek, Anapa ve Poti gibi kalelerle birlikte 10 milyon Macar altını ödenecekti (md. 9). ⑦ Osmanlı, üç devletin Yunanistan hakkındaki anlaşmalarını, yani Yunanistan'ın bağımsızlığını kabul etti (md. 10). ⑧ Eflak, Boğdan ve Silistre savaş tazminatı bitene kadar rehin olarak Rus işgalinde kalacaktı (md. 11 ve ek sözleşme).",
  kesinlik: "kesin",
  kaynak: "TDV: edirne-antlasmasi", ic_not_kaynak:"eski kaynak: TDV: edirne-antlasmasi (gövde okundu)"
},
{
  id: "sebep-sonuc-edirne-1829",
  tur: "sebep-sonuc",
  kisa: "Rus ordusu Edirne'deyken pazarlık payı kalmış mıydı?",
  sebep: {
    b: "1821 Mora isyanına İngiltere, Fransa ve Rusya'nın müdahalesi, Navarin'de Osmanlı donanmasının batırılması ve Rusya'nın 1828'de savaş açması",
    t: "1828-04-26"
  },
  sonuc: {
    b: "Edirne Antlaşması: Yunanistan'ın bağımsızlığı kabul edildi, Tuna ağzı ve Kafkas kaleleri Rusya'ya geçti",
    t: "1829-09-14"
  },
  bag: "Önemi: TDV'ye göre Rus ilerleyişini durduramayan Osmanlı diplomaside de başarı elde edemedi ve galibin dikte ettiği şartları kabul etmek zorunda kaldı; kabul edilen 11,5 milyon Macar altınlık ödeme hazinenin kaldıramayacağı kadar ağırdı.",
  metin: "Rus ordusu 22 Ağustos 1829'da direnişle karşılaşmadan Edirne'ye girdi, Kırklareli ve Lüleburgaz'ı da işgal etti; Rus gemileri İstanbul Boğazı'na saldırırken bir filo da Çanakkale Boğazı'nı ablukaya aldı. Prusya'nın arabuluculuğuyla Edirne'ye giden Osmanlı delegeleri, ticaret tazminatındaki küçük bir değişiklik dışında Rus şartlarını hafifletemedi. Yük sonradan azaltıldı: 1830'da tazminat 8 milyon Felemenk altınına indirildi ve Yunanistan'ın tam bağımsızlığının kabulü şartıyla 1 milyon daha silindi; 1834 Ocağında 5 milyona düşürüldü. Tazminata bağlanan Rus çekilmesi Eflak-Boğdan'dan ancak 1834'te, Silistre'den 8 Nisan 1836 sözleşmesiyle gerçekleşti.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1821-03-25", "1827-07-06", "1827-10-20", "1828-04-26", "1829-09-14", "1830-02-03", "1834-01-01|Eflak"],  // PAKET-A2 13 Eyl: 1834-01-01'de 6 madde (Zollverein, Ladakh…), yalnız Eflak-Boğdan çekilmesi ilgili
  kaynak: "TDV: edirne-antlasmasi"
},

// ── 1856 PARİS ──────────────────────────────────────────────────────────────
{
  id: "antlasma-paris-1856",
  tur: "antlasma",
  olay: ["1856-03-30"],
  metin: "Otuz dört maddelik antlaşma 30 Mart 1856'da imzalandı, onaylar 27 Nisan'da değiştirildi; Osmanlı'yı Sadrazam Âlî Paşa ve Paris sefiri Mehmed Cemil Bey temsil etti. Başlıca hükümler (TDV): ① İmzacı devletler Osmanlı'nın bağımsızlığını ve toprak bütünlüğünü ortak çıkarlarının ayrılmaz parçası saydıklarını ilan etti; Osmanlı Avrupa devletler sisteminin eşit üyesi kabul edildi ve Avrupa hukukundan yararlanacaktı. ② Karadeniz tarafsız ve silahsız hâle getirildi; orada bulundurulacak gemilerin sayısı ve niteliği Rusya ile Osmanlı arasında sonra belirlenecekti. ③ Tuna uluslararası statüye kondu; nehirde serbest gemi işletmeciliği, kıyı devletlerinin temsilcilerinden oluşan daimî bir komisyona bırakıldı. ④ Eflak ve Boğdan'ı tek devlet yapma önerisi Osmanlı ve Avusturya'nın itirazıyla reddedildi; iki prenslik Bâbıâli'nin verdiği imtiyazlarla eski hâliyle kaldı. ⑤ Rusya işgal ettiği Kars'ı iade etti; bu iade, Rusya'nın Besarabya'dan toprak bırakması meselesiyle birlikte pazarlık edildi. ⑥ 18 Şubat 1856 Islahat Fermanı antlaşmanın 9. maddesinde anıldı; Bâbıâli fermanın antlaşmaya bir 'senet' olarak girmesine karşı çıktı ve ifadeyi yalnız fermanın 'yüksek değerinin takdir edildiği' biçimine çevirebildi. ⑦ Antlaşma 1774 Küçük Kaynarca Antlaşması'nı yürürlükten kaldırdı. Âlî Paşa'nın gündeme getirdiği kapitülasyonların kaldırılması ise sağlanamadı; yalnız destek vaadi alındı.", ic_not_metin:"eski önek: ⚠️",
  kesinlik: "kesin",
  kaynak: "TDV: paris-antlasmasi", ic_not_kaynak:"eski kaynak: TDV: paris-antlasmasi (gövde okundu)"
},
{
  id: "sebep-sonuc-paris-1856",
  tur: "sebep-sonuc",
  kisa: "Kâğıt üzerinde Avrupa'ya kabul — sahada ne değişti?",
  sebep: {
    b: "Rusya'nın Osmanlı'daki Ortodoks halk üzerinde uluslararası geçerli bir himaye hakkı istemesi, 'kutsal yerler' çekişmesi ve 1853'te başlayan Kırım Savaşı",
    t: "1853-10-04"
  },
  sonuc: {
    b: "Paris Antlaşması: Osmanlı Avrupa devletler sistemine eşit üye kabul edildi, Karadeniz tarafsızlaştırıldı",
    t: "1856-03-30"
  },
  bag: "Önemi: TDV'ye göre Küçük Kaynarca, Akkerman ve Edirne antlaşmalarının Rusya'ya tanıdığı üstünlüğe son verdi, 1841 Boğazlar düzenini değiştirdi ve Rusya'nın II. Katerina'dan beri süren Osmanlı yönündeki genişlemesine set çekildiği şeklinde yorumlandı. Islahat Fermanı sebebiyle devleti önemli bir anayasal değişimin içine de soktu.",
  metin: "Verilen güvenceler kısa sürede işlemez oldu. Fransa 1870-1871'de Prusya'ya yenilince Rusya, o savaş bitmeden Karadeniz maddesine artık uymayacağını ilan etti; TDV bunu yaklaşan büyük Osmanlı-Rus savaşının ilk işareti sayar. Toprak bütünlüğü garantisi 1877-1878 savaşındaki büyük parçalanmayı önleyemedi. Savaşın bıraktığı borç yükü ve Islahat Fermanı'nın uygulanmasında yaşanan toplumsal çatışmalar sonraki dönemi belirledi. TDV, Berlin Kongresi'nde (1878) Bismarck'ın hakkını savunmaya çalışan Osmanlı delegelerine Avrupa hukukunun onlar için olmadığını söyleyerek çıkıştığını aktarır — 1856'da kazanılan statünün ne kadar kâğıt üzerinde kaldığının işareti.",
  kesinlik: "kesin",
  zincir: [],
  olay: ["1853-10-04", "1856-02-18", "1856-03-30", "1877-04-24", "1878-07-13"],
  kaynak: "TDV: paris-antlasmasi"
},

// ══ PAKET-A2 (13 Eylül 2026) · paket 0045 H-0009 — ANTLAŞMA KARTLARI, DALGA 3 ═════════
// Rapor: denetim/PAKET-A2-EKOKUMA-0913.md. Telif: denetim/ARAC-A2-KOPYA-0913.js.
{
  "id": "antlasma-istanbul-1700",
  "tur": "antlasma",
  "olay": [
    "1700-07-14"
  ],
  "metin": "Karlofça'da Rusya ile kalıcı barış yapılamamış, yalnız iki yıllık, beş maddelik bir mütareke imzalanabilmişti (24 Ocak 1699): Râmi Mehmed Efendi Azak'ı bırakmaya razıydı ama Dinyeper ağzındaki kalelerin boşaltılmasını istiyordu, Rus elçisi ise tam yetkili olmadığını söylüyordu. Görüşmeler birkaç ay sonra İstanbul'da aynı Osmanlı heyeti ile Rus elçisi Ukrayntsev arasında sürdü; TDV karlofca maddesine göre on dört maddelik antlaşma 27 Muharrem 1112 / 14 Temmuz 1700'de imzalandı. TDV maddeleri tek tek saymaz; bildirdiği esaslar: ① Azak Kalesi Rusya'ya bırakıldı. ② Toprak meselelerinde genellikle Osmanlı istekleri kabul edildi. ③ Kırımlıların Rusya'ya akın yapmaması ve vergi talepleri konusunda Rus istekleri kabul edildi. ④ Rusya İstanbul'da elçi seviyesinde bir sefir bulundurma hakkı elde etti. ⑤ Rus elçisinin, ticaret gemilerinin Karadeniz'de serbestçe dolaşması talebi reddedildi. Osmanlı hükümeti antlaşmadan sonra, Rusya'ya bırakılan Azak'a karşı Karadeniz'in güvenliği için Kerç Boğazı'nda Yenikale'yi inşa ettirdi; bu bir antlaşma hükmü değil, sonrasında alınmış bir tedbirdir. TDV rusya maddesi imza gününü 13 Temmuz 1700 olarak verir; karlofca maddesinin hicrî tarihli kaydı 14 Temmuz'dur.",
  "kesinlik": "kesin",
  "kaynak": "TDV: karlofca · azak · mustafa-ii · rusya (gün 13 Temmuz)", "ic_not_kaynak": "eski kaynak: TDV: karlofca (gövde okundu, HTTP 200) · azak (gövde okundu, HTTP 200) · mustafa-ii (gövde okundu, HTTP 200) · rusya (gövde okundu, HTTP 200 — gün 13 Temmuz) · ölü: istanbul-antlasmasi (302), istanbul-antlasmasi-1700 (302), karlofca-antlasmasi (302) · 14 maddenin tam listesi: bulunamadı (TDV Râşid, II, 494-502'yi gösteriyor)"
},

{
  "id": "antlasma-ferhad-pasa-istanbul-1590",
  "tur": "antlasma",
  "olay": [
    "1590-03-21",
    "1590-01-01|Luristan"
  ],
  "metin": "TDV'de Ferhad Paşa Antlaşması'nın müstakil maddesi yoktur; hükümleri Safevîler, III. Murad, Luristan ve Ferhad Paşa maddelerinden toplanır. Luristan maddesi onu '998'de (1590) İstanbul'da yapılan antlaşma' diye anar. Gence'nin 1 Eylül 1588'de Osmanlı eline geçmesi ve yeni şah I. Abbas'ın iç karışıklıklarla uğraşması barışı gündeme getirdi; şah, Haydar Mirza başkanlığında kalabalık bir elçilik heyetini İstanbul'a yolladı (TDV murad-iii tarih olarak 11 Rebîülevvel 998 / 18 Ocak 1590'ı verir), serdar Ferhad Paşa da heyetle birlikte dönerek anlaşmada rol oynadı. Esaslar: ① Savaş boyunca alınan topraklar Osmanlı'da kaldı. TDV'nin Safevîler maddesindeki listeyi bölge bölge toplarsak: Kafkasya'da Gürcistan, Dağıstan, Şirvan ve Karabağ ile Gence; Azerbaycan'da Tebriz ve Karacadağ; batı İran ve Irak tarafında Luristan, Nihâvend, Kürdistan, Şehrizor ve Bağdat. ② Osmanlı tarafı, İran'daki hutbelerde ilk üç halifenin lânetle anılmasına son verilmesini şart olarak kabul ettirdi. ③ 1578'de başlayan uzun ve yıpratıcı savaş böylece sona erdi. Batı cephesi güvenceye kavuşan Şah Abbas doğuda Özbeklere yöneldi. Kazanımlar kalıcı olmadı: Luristan'ı Abbas 1603'te yeniden bağladı, Tebriz 21 Ekim 1603'te, Gence 1606'da, Şirvan ve Gürcistan 1608'de Safevîlere geçti. Antlaşmanın kesin günü bilinmez; kaynaklar yalnız yılı (998/1590) verir.", "ic_not_metin": "eski: Bağlı maddelerin taşıdığı 21 Mart 1590 günü okunan TDV maddelerinde bulunamadı; TDV yalnız yılı (998/1590) verir.",
  "kesinlik": "kesin",
  "kaynak": "TDV: safeviler · murad-iii · luristan · ferhad-pasa · tebriz", "ic_not_kaynak": "eski kaynak: TDV: safeviler (gövde okundu, HTTP 200) · murad-iii (gövde okundu, HTTP 200) · luristan (gövde okundu, HTTP 200) · ferhad-pasa (gövde okundu, HTTP 200) · tebriz (gövde okundu, HTTP 200) · gence (HTTP 200, 1590 hükmü gövdede yok) · ölü: ferhad-pasa-antlasmasi (302) · 21 Mart 1590 günü: bulunamadı"
},

{
  "id": "antlasma-prut-1711",
  "tur": "antlasma",
  "olay": [
    "1711-07-21|Azak ve Taygan"
  ],
  "metin": "Prut Antlaşması'nın özgün Türkçe metni mevcut değildir; TDV, Nâme-i Hümâyûn Defteri'ndeki kaydın yedi hususa vurgu yaptığını, Rusça metnin de özgün olmayan, yedi madde hâlinde bir kopya olduğunu belirtir. Belge, asıl barışın İstanbul'da yapılacağını söyleyen, mütareke niteliğinde bir temessüktür ('Prut Amannâmesi'); 21 Temmuz 1711'de imzalandı, 22 Temmuz'da çarca onaylandı, 23 Temmuz'da teati edildi. Hükümler: ① Rusya Azak Kalesi'ni çevresi ve cephanesiyle birlikte geri verecekti. Taygan ile Kamenka kaleleri ve Samara ırmağı kıyısına kurulan Yenikale yerle bir edilecek, Kamenka'daki toplar ve cephane Osmanlı'ya bırakılacak; iki taraf da bu yerlerde bir daha kale kurmayacaktı. ② Lehistan'a, bu devlete ve Kırım'a tâbi Kazaklara müdahale edilmeyecekti. ③ Tüccarlar karadan ve denizden İstanbul'a gelip gidebilecek, ancak elçi sıfatıyla kimse ikamet etmeyecekti. ④ Müslüman esirler serbest bırakılacaktı. ⑤ İsveç kralının güvenle ülkesine dönmesine engel olunmayacaktı. ⑥ İki taraf birbirinin ahalisine zarar vermeyecekti. Ayrıca Rus ordusunun serbestçe çekilip yolda Tatar ve İsveç saldırılarından korunması, Şafirov ile Mihail Şeremetyev'in şartlar yerine gelene kadar rehin kalması öngörüldü. İki metin arasında fark vardı: Türkçe metin Lehistan'a müdahaleyi Rusya'ya yasaklarken Rusça metin bunu iki devlete teşmil ediyordu. Rus toplarının ve Azak donanmasının teslimi, Kantemir'in iadesi, savaş tazminatı gibi istenmesi düşünülen şartlar temessüke girmedi.",
  "kesinlik": "kesin",
  "kaynak": "TDV: prut-antlasmasi", "ic_not_kaynak": "eski kaynak: TDV: prut-antlasmasi (gövde okundu, HTTP 200) · ölü: prut-savasi (302), prut (302)"
},

{
  "id": "antlasma-hunkar-iskelesi-1833",
  "tur": "antlasma",
  "olay": [
    "1833-07-08"
  ],
  "metin": "Mehmed Ali Paşa'nın kuvvetleri Konya'da Osmanlı ordusunu yenip (21 Aralık 1832) Kütahya'ya kadar gelince, İngiltere'yi yanına çekemeyen Bâbıâli Rus yardımını kabul etti; Rus filosu 20 Şubat 1833'te Büyükdere önlerine demirledi, 5 Nisan'da 5000 kişilik bir kuvvet Beykoz'da karaya çıkıp Hünkâr İskelesi'nde karargâh kurdu. Çarın olağanüstü elçisi Orlov'un teklif ettiği savunma ittifakı, Serasker Hüsrev Paşa'nın Emirgân'daki yalısında 8 Temmuz 1833'te imzalandı. Sekiz yıl geçerli, biri gizli yedi maddeydi: ① İki devlet arasında 'ebedî sulh ve ittifak' kuruldu; ittifak yalnız saldırıya karşı korunma amacı taşıyordu. ② 14 Eylül 1829 Edirne Antlaşması ve ona dahil önceki antlaşmalar, 26 Nisan 1830 Petersburg senedi ve 1832 Yunanistan tanzimnâmesi aynen onaylandı. ③ Rusya, yeniden ihtiyaç duyulursa gereken kara ve deniz kuvvetini göndermeyi taahhüt etti; bu kuvvetlerin sevk ve idaresi Bâbıâli'de olacaktı. ④ Yardım gören taraf gelen kuvvetlerin iaşe masrafını da üstlenecekti. ⑤ Antlaşma sekiz yıl geçerli olacak, süre sonunda yenilenmesi yeniden görüşülecekti. ⑥ Onay iki ay içinde yapılacak, tasdiknameler İstanbul'da değiştirilecekti. ⑦ Gizli madde: Rusya, askerî yardımın ağır yükü yerine Osmanlı'nın Çanakkale Boğazı'nı kendi lehine kapatmasını ve hiçbir yabancı geminin geçişine izin vermemesini kabul ettirdi. Gizli madde duyulunca İngiltere ve Fransa protesto edip donanmalarını Çanakkale önlerine gönderdi. TDV, Bâbıâli'nin bir ölçüde Rus korumacılığına girdiğini kabul eder, ama bunu vasallığa indirgemeyi abartı sayar. Süresi dolan antlaşma yenilenmedi; yerine 13 Temmuz 1841 Londra Boğazlar Mukavelenâmesi geldi.",
  "kesinlik": "kesin",
  "kaynak": "TDV: hunkar-iskelesi-antlasmasi", "ic_not_kaynak": "eski kaynak: TDV: hunkar-iskelesi-antlasmasi (gövde okundu, HTTP 200) · ölü: hunkar-iskelesi (302)"
},

{
  "id": "antlasma-ayastefanos-1878",
  "tur": "antlasma",
  "olay": [
    "1878-03-03",
    "1878-01-31"
  ],
  "metin": "93 Harbi'nde Rus orduları doğuda Erzurum'a, batıda İstanbul önlerine gelince Bâbıâli 31 Ocak 1878'de Edirne Mütarekesi'ni imzaladı. Osmanlı adına Hariciye Nâzırı Safvet Paşa ile Berlin sefiri Sâdullah Bey'in, Rusya adına İgnatyev ile Nelidof'un yürüttüğü görüşmeler sonunda 3 Mart 1878'de Ayastefanos'ta yirmi dokuz maddelik antlaşma imzalandı. Başlıca hükümler: ① Romanya, Karadağ ve Sırbistan bağımsız devlet olarak tanındı; Karadağ'ın toprakları Adriyatik kıyısına ulaşacak, Niş Sırbistan'a geçecekti. ② Besarabya Romanya'dan Rusya'ya geçecek, bunun karşılığı olarak Dobruca Romanya'ya bırakılacaktı. ③ Bulgaristan, Tuna'dan Ege'ye, Arnavutluk'tan Karadeniz'e uzanan, Osmanlı'ya bağlı özerk bir prenslik olacaktı; prensini halk serbestçe seçecek, Avrupa devletleri onaylayacak, Osmanlı tasdik edecek, prens Avrupa hânedanlarından olmayacaktı. ④ Bosna-Hersek'te, Rumeli'nin Hristiyan bölgelerinde ve Doğu Anadolu'da Ermenilerin yaşadığı yerlerde Rusya ve Avusturya denetiminde ıslahat yapılacak; Girit'te 1868 nizamnâmesi uygulanacaktı. ⑤ Osmanlı'ya 1.410.000.000 rublelik savaş tazminatı yüklendi. Borcun büyük bölümü toprakla kapatılacaktı: Rumeli'den bazı yerler ile Kars, Ardahan, Batum ve Doğubayazıt Rusya'ya geçecekti. Tazminattan geriye 300.000.000 ruble kalıyordu; o da nakden kapatılacaktı. ⑥ Rus ordusu, Bulgaristan bu hükmün dışında tutularak, Rumeli'den üç ay, Doğu Anadolu'dan altı ay içinde çekilecekti. ⑦ Rus tebaası savaş öncesindeki gibi ticaret yapabilecek, Rus konsoloslukları onları resmen himaye edebilecekti. TDV antlaşmayı panslavizm siyasetinin zaferi sayar; dengeyi tek taraflı bozduğu için başta İngiltere itiraz etti ve hükümler 13 Haziran 1878'de toplanan Berlin Kongresi'nde yeniden ele alınıp değiştirildi.",
  "kesinlik": "kesin",
  "kaynak": "TDV: ayastefanos-antlasmasi", "ic_not_kaynak": "eski kaynak: TDV: ayastefanos-antlasmasi (gövde okundu, HTTP 200) · ölü: ayastefanos (302)"
},

{
  "id": "antlasma-mondros-1918",
  "tur": "antlasma",
  "olay": [
    "1918-10-30|Mondros Mütarekesi"
  ],
  "metin": "Bulgaristan'ın 29 Eylül 1918'de ateşkes imzalayıp savaştan çekilmesiyle Osmanlı'nın müttefikleriyle kara bağlantısı koptu. Ahmed İzzet Paşa hükümetinin barış teklifi Amiral Calthorpe'a iletildi; Bahriye Nâzırı Rauf Bey başkanlığındaki heyet, Limni'nin Mondros Limanı'ndaki Agamemnon zırhlısında dört günlük görüşmeden sonra 30 Ekim 1918'de Calthorpe'un dikte ettirdiği metni imzaladı. Başlıca hükümler: ① Sınırların korunması ve iç güvenlik için gerekenden fazla asker derhal terhis edilecekti. ② Osmanlı donanması elinde yalnız kıyı güvenliğine yetecek küçük gemileri tutacak, geri kalan savaş gemilerini İtilâf devletlerine bırakacaktı. ③ Arap vilayetlerindeki birlikler (Hicaz, Asîr, Yemen, Suriye, Irak) silah bırakacak; Trablus ile Bingazi'de bulunan Osmanlı subayları da teslim olacaktı. ④ Boğazlar serbest geçişe açılacak; Türk sularındaki torpil tarlalarının yerleri gösterilip temizlenmesine yardım edilecekti. ⑤ Resmî kullanım dışındaki telsiz, telgraf ve telefon haberleşmesi İtilâf memurlarınca denetlenecekti. ⑥ Demiryolları ve limanlar İtilâf kuvvetlerine açılacak, Toros tünelleri işgal edilecekti. ⑦ Osmanlı, İttifak devletleriyle bütün ilişkisini kesecek; Alman ve Avusturya subay, memur ve vatandaşları ülkeyi en kısa zamanda terk edecekti. ⑧ İran'ın kuzeybatısı ve Güney Kafkasya'daki Osmanlı kuvvetleri savaş öncesi sınırlara çekilecekti. ⑨ 7. madde, müttefiklerin güvenliğini tehdit eden bir durumda herhangi bir stratejik noktanın işgaline imkân veriyordu. ⑩ 24. madde, İngilizce metinde 'Ermeni vilâyetleri' diye geçen altı vilâyette (Erzurum, Van, Harput, Diyarbakır, Sivas, Bitlis) karışıklık çıkması hâlinde İtilâf kuvvetlerine işgal hakkı tanıyordu. Birkaç gün sonra İngilizlerin 7. maddeye dayanarak Musul'u işgal etmesi kuşkuları doğruladı; Kasım 1918'den itibaren işgaller ülkenin her yanına yayıldı.",
  "kesinlik": "kesin",
  "kaynak": "TDV: mondros-mutarekesi", "ic_not_kaynak": "eski kaynak: TDV: mondros-mutarekesi (gövde okundu, HTTP 200) · ölü: mondros (302)"
},

{
  "id": "sebep-sonuc-hunkar-iskelesi-1833",
  "tur": "sebep-sonuc",
  "kisa": "Mısır ordusu Kütahya'dayken Rus filosu niçin Boğaz'a girdi?",
  "sebep": {
    "b": "Mehmed Ali Paşa kuvvetlerinin Konya'da Osmanlı ordusunu yenip İstanbul'u tehdit etmesi; Fransa ve İngiltere'den destek bulamayan Bâbıâli'nin Rus yardımını kabulü",
    "t": "1832-12-21"
  },
  "sonuc": {
    "b": "Hünkâr İskelesi savunma ittifakı ve Çanakkale Boğazı'nın Rusya lehine kapatılmasını öngören gizli madde",
    "t": "1833-07-08"
  },
  "bag": "Önemi: TDV'ye göre gizli madde Mısır meselesini devletler arası bir Boğazlar meselesine dönüştürdü; Avrupa'da krize yol açtı, Metternich'in aracılığıyla Münchengrätz Antlaşması'nı (18 Eylül 1833) doğurdu ve sekiz yıllık süre dolunca yerini 1841 Londra Boğazlar Mukavelenâmesi aldı.",
  "metin": "İbrâhim Paşa'nın ordusu 21 Aralık 1832'de Konya'da Sadrazam Mehmed Reşid Paşa'yı yenip 2 Şubat 1833'te Kütahya'ya ulaşınca hem başşehir hem hânedan tehdit altına girdi. Bâbıâli Rusya'yı yardıma çağırırken bu daveti Fransa ve İngiltere'yi harekete geçirmek için bir koz olarak da kullanmak istedi; Rusya ise fırsat vermeden filosunu Büyükdere'ye demirletti (20 Şubat), ardından kara kuvvetlerini Beykoz'a çıkardı (5 Nisan). Kütahya görüşmeleriyle Mısır ve bütün Suriye vilayetleri ile Adana Mehmed Ali tarafına bırakıldı (ferman 6 Mayıs). Rus kuvvetleri yine de çekilmedi; Orlov'un getirdiği ittifak teklifi, yardımın ağır faturası olarak 8 Temmuz'da imzalandı ve iki gün sonra Rus filosu ile kara kuvvetleri Boğaz'dan ayrıldı. TDV, İstanbul'da Rus ittifakına duyulan infialin arkasında Mehmed Ali Paşa'nın Avrupa'da yürüttüğü propagandayı da görür.",
  "kesinlik": "kesin",
  "zincir": [],
  "olay": [
    "1832-12-21",
    "1833-07-08",
    "1841-07-13"
  ],
  "kaynak": "TDV: hunkar-iskelesi-antlasmasi", "ic_not_kaynak": "eski kaynak: TDV: hunkar-iskelesi-antlasmasi (gövde okundu, HTTP 200)"
},

{
  "id": "sebep-sonuc-mondros-1918",
  "tur": "sebep-sonuc",
  "kisa": "Bir mütareke niçin işgalin kapısını açtı?",
  "sebep": {
    "b": "Filistin-Suriye cephesinin çöküşü ve Bulgaristan'ın ateşkes imzalayıp savaştan çekilmesiyle Trakya ile İstanbul'un saldırıya açık kalması",
    "t": "1918-09-29"
  },
  "sonuc": {
    "b": "Mondros Mütarekesi: ordunun ve donanmanın dağıtılması, 7. ve 24. maddelerle İtilâf devletlerine işgal hakkı",
    "t": "1918-10-30"
  },
  "bag": "Önemi: TDV Mondros'u Osmanlı Devleti'nin altı asırlık tarihinin sonunun habercisi sayar; 7. ve 24. maddelerin istismarıyla başlayan işgaller Mustafa Kemal Paşa önderliğindeki İstiklâl Savaşı'nı ve Türkiye Cumhuriyeti'nin kuruluşunu doğurdu.",
  "metin": "19 Eylül 1918'de Filistin-Suriye cephesinde başlayan İngiliz taarruzu Osmanlı kuvvetlerini bozguna uğrattı; 29 Eylül'de Bulgaristan'ın çekilmesiyle müttefiklerle kara bağlantısı kesildi. Osmanlı'nın İspanya aracılığıyla yaptığı iki barış teklifi (5 ve 12 Ekim) cevapsız kaldı; güvensizlik oyu alan Talat Paşa hükümetinin yerine Ahmed İzzet Paşa hükümeti kuruldu (14 Ekim) ve esir İngiliz General Townshend aracılığıyla Amiral Calthorpe'a ulaşıldı. Wilson prensiplerine güvenen hükümet heyeti, yönetime karışılmaması ve ülkeye yabancı asker çıkarılmaması beklentisiyle gönderdi; imzalanan metin ise Osmanlı savunma sistemini neredeyse bütünüyle çözüyordu. İngilizlerin birkaç gün içinde 7. maddeye dayanarak Musul'u işgal etmesi kuşkuları doğruladı; İttihat ve Terakkî 1 Kasım'da kendini feshetti, Enver, Cemal ve Talat paşalar ülkeyi gizlice terk etti.",
  "kesinlik": "kesin",
  "zincir": [],
  "olay": [
    "1918-09-29",
    "1918-10-30|Mondros Mütarekesi"
  ],
  "kaynak": "TDV: mondros-mutarekesi", "ic_not_kaynak": "eski kaynak: TDV: mondros-mutarekesi (gövde okundu, HTTP 200)"
},

// ══ PAKET-EK2 (13 Eylül 2026) · paket 0048 H-0015 — "her antlaşmaya: ① hükümler ② önem, sebep-sonuç" ══
// ÖLÇÜM (denetim/PAKET-EK2-0913.md §4): Emre'nin/brifingin saydığı 12 antlaşmanın 12'si de
// hüküm kartına ZATEN sahipti; ÖNEM/sebep-sonuç kartı eksik olanlar Karlofça · Pasarofça ·
// Küçük Kaynarca · Berlin idi (Berlin'e bağlı tek s-s kartı Paris 1856'nınki). Çekirdekte
// HİÇ kartı olmayan iki 17. yüzyıl antlaşması (Vasvar · Bucaş) için ikisi birden yazıldı.
// Kaynak: TDV karlofca · pasarofca-antlasmasi · kucuk-kaynarca-antlasmasi · berlin-antlasmasi ·
// vasvar-antlasmasi · bucas-antlasmasi (hepsi 13 Eylül'de çekildi, HTTP 200, gövde okundu).
// Mevcut hüküm kartları (data/ekokuma.js) TEKRARLANMADI; yalnız onlarda olmayan hükümler eklendi.

// ── 1664 VASVAR ─────────────────────────────────────────────────────────────
{ id:"antlasma-vasvar-1664", tur:"antlasma",
  olay:["1664-08-09","1664-08-09|Vasvár"],
  metin:"On madde, Türkçe ve Latince iki nüsha. ① Osmanlı ve Habsburg birlikleri Erdel'den aynı anda çekilecek, Erdel'deki imparatorluk garnizonları ülkeyi terk edecek, Erdel prensi serbest seçimle belirlenecekti. ② Szatmár ve Szabolcs bölgeleri Habsburg yönetimine bağlandı. ③ Székelyhíd Kalesi bir daha kullanılmamak üzere yıkılacaktı. ④-⑤ Rákóczi ve Kemény aileleri başta olmak üzere kimse Erdel'e dışarıdan karışmayacak; iki devlet birbirinin düşmanına yardım etmeyecekti. ⑥ Zrínyi'nin Kanije karşısında yaptırdığı ve 1664 yazında Osmanlılarca alınıp yakılan Yenikale yeniden yapılmayacaktı. ⑦ Karışıklıkta iki tarafa sığınan Erdel soyluları memleketlerine dönüp aile mülklerine sahip çıkabilecekti. ⑧ I. Leopold'e, topraklarını korumak için Vág nehrinin öte yakasında yeni bir kale yapma izni verildi. ⑨ Sınırlarda çete faaliyetleri önlenecekti. ⑩ Antlaşma yirmi yıl yürürlükte kalacak, dört ay içinde büyükelçiler karşılıklı gönderilecekti. Metne yazılmayan ama sonucu belirleyen iki nokta: 'alâ hâlihî' ilkesiyle antlaşmadan önce alınan Uyvar ve Novigrad Osmanlı'da kaldı; Fâzıl Ahmed Paşa nakit para isteğinden vazgeçti, Habsburglar 200.000 kara kuruş değerinde hediye göndermeyi kabul etti.",
  kesinlik:"kesin",
  kaynak:"TDV: vasvar-antlasmasi" },
{ id:"sebep-sonuc-vasvar-1664", tur:"sebep-sonuc",
  kisa:"Sen Gotar'da ağır kayıp, masada kazanç — Macaristan'daki en geniş Osmanlı sınırı nasıl çizildi?",
  sebep:{ b:"Erdel'e Habsburg müdahalesi, Zrínyi'nin Kanije karşısına kale kurması ve Fâzıl Ahmed Paşa'nın 1663'te Uyvar'ı alan seferi", t:"1663-09-24" },
  sonuc:{ b:"Vasvar Antlaşması: iki tarafın da Erdel'den çekilmesi, Uyvar ve Novigrad'ın Osmanlı'da kalması, yirmi yıllık barış", t:"1664-08-09" },
  bag:"Önemi: TDV bu antlaşmayı Osmanlıların Macaristan'daki en geniş sınırlarını belirleyen metin olarak tanımlar. Hukuk bakımından da bir yenilik taşır: Zitvatorok'ta barış padişahın kişisel taahhüdüne dayanırken IV. Mehmed'in onay ahidnâmesi, onun soyundan gelecek hükümdarları da bağlıyordu — devletin sürekliliği ilkesi. Ama barış Macar soylularını küstürdü; bu hoşnutsuzluk Tököli isyanına ve 1670'lerin ikinci yarısında iki imparatorluğun yeniden karşı karşıya gelmesine yol açtı.",
  metin:"Kriz Erdel'de başladı: II. Rákóczi'nin ölümünden sonra Osmanlılar 27 Ağustos 1660'ta Varad'ı aldı, Erdel soyluları ise bazı kalelere Alman askeri yerleştirilmesine razı oldu. İstanbul'daki Habsburg elçisi Simon Reniger ile iki yıl süren görüşmelerde Reîsülküttâb Şâmîzâde Mehmed Efendi'nin 1662 taslağı, sonradan imzalanacak maddelerin çoğunu zaten içeriyordu; Viyana işi ağırdan alınca Fâzıl Ahmed Paşa 1663'te sefere çıktı ve Uyvar'ı altı haftalık kuşatmayla aldı. 1664'te Zrínyi ve Hohenlohe'nin Ocak ve Nisan aylarındaki beklenmedik saldırılarından sonra müttefikler Nisan sonunda Kanije'yi kuşattı; kuşatma ancak Haziran başında kaldırılabildi ve Osmanlılar Haziran sonunda Zrínyi'nin Yenikalesi'ni alıp yaktı. 1 Ağustos 1664'te Rába nehrini geçmeye çalışan Osmanlı birlikleri Montecúccoli'nin ordusu karşısında ağır kayıp verdi (Sen Gotar). Bu yenilgi Osmanlı karargâhında barış isteğini güçlendirdi; sekiz gün sonra Fâzıl Ahmed Paşa'nın otağında metinler değiştirildi. I. Leopold daha iyi şartlar umarak onayı geciktirdi, fakat ordusunun durumu ve imparatorluk meclisinin savaşa isteksizliği yüzünden 9 Eylül'de onayladı; tasdik törenle 27 Ekim 1664'te Uyvar yakınında yapıldı. Tarih notu: antlaşma 9 Ağustos 1664'te imzalandı; Türkçe metindeki tarihin yanlış çevrilmesi yüzünden Batı tarih yazımında 10 Ağustos diye geçer.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1663-09-24|Uyvar","1664-08-01|Sen Gotar","1664-08-09","1664-08-09|Vasvár"],
  kaynak:"TDV: vasvar-antlasmasi" },

// ── 1672 BUCAŞ ──────────────────────────────────────────────────────────────
{ id:"antlasma-bucas-1672", tur:"antlasma",
  olay:["1672-10-18|Bucaş"],
  metin:"Dört gün süren görüşmelerden sonra dört madde. ① Lehistan'dan ayrılıp Osmanlı ordusuna katılan Lipka Tatarlarına ve mallarına dokunulmayacak, Osmanlı ülkesine göçmek isteyenlere engel olunmayacaktı. ② Leh kralı Osmanlı hazinesine her yıl 22.000 altın pîşkeş ödeyecekti; Leh topraklarına Tatar ya da Kazak saldırısı olursa kral durumu önce Kamaniçe beyine, sonuç alınamazsa İstanbul'a bildirecekti. ③ Podolya bütünüyle Osmanlı'ya bırakıldı: teslim edilmemiş kalelerdeki Leh askerleri malları ve silahlarıyla çıkabilecek ama top ve cephane bırakacaktı; Podolya dışında alınan Rus kale ve palankaları iade edilecek, sınır anlaşmazlıkları hakemlerle çözülecekti. Palanka sahibi Leh soyluları vergilerini vermek şartıyla yerlerinde kalabilecek, onlardan devşirme alınmayacak, camiye çevrilenler dışındaki kiliselere dokunulmayacaktı. ④ Ukrayna Kazaklara bırakıldı: oradaki kalelerden Leh askeri iki ay içinde çıkacaktı. Padişahın 23 Ekim tarihli ahidnâmesi ayrıntıları ekledi: karşılıklı saldırmazlık, Lehistan'ın Kırım'a verdiği yıllık vergiyi sürdürmesi ve Kırım hanının Leh ülkesine akınları önlemesi, Lehistan'ın Osmanlı düşmanlarına asker ya da para yardımı yapmaması, Lviv (İlbav) için 80.000 kuruş pîşkeş ve Kamaniçe dışında kırk sekiz palankanın Osmanlıya teslimi.",
  kesinlik:"kesin",
  kaynak:"TDV: bucas-antlasmasi" },
{ id:"sebep-sonuc-bucas-1672", tur:"sebep-sonuc",
  kisa:"Podolya'yı kazandıran barış niçin bir yıl bile dayanmadı?",
  sebep:{ b:"IV. Mehmed'in Lehistan seferi: Kamaniçe'nin on günlük kuşatmayla alınması ve Lviv'in (İlbav) sıkıştırılması", t:"1672-08-27" },
  sonuc:{ b:"Bucaş Antlaşması: Podolya'nın Osmanlı eyaleti olması, Lehistan'ın yıllık pîşkeş ödemeyi kabulü", t:"1672-10-18" },
  bag:"Önemi: Kamaniçe ve Podolya'yla Osmanlı, Kırım'ın anahtarı sayılan bölgeye yerleşti; Doroşenko idaresindeki Ukrayna Osmanlı'ya bağlı özerk bir yapı kazandı ve Lipka Tatarlarına göç yolu açıldı. Ama tam da bu kazanç Lehistan için kabul edilemezdi: Leh meclisi antlaşmayı ağır bulup reddetti ve yeni vergiler koydu. 1673'ten itibaren savaş yeniden başladı ve Karlofça'ya kadar sürdü; aradaki 1676 ve 1678 antlaşmaları Bucaş'ı esas aldı. Lehistan savaşla geri alamadığı Kamaniçe'ye ancak 1699'da Karlofça'ya eklenen bir maddeyle kavuştu.",
  metin:"Kamaniçe 27 Ağustos 1672'de düşünce Osmanlı tarafı Lehistan'ı kalıcı bir barışa zorlamaya başladı: 4 Eylül'de Leh kralına Podolya'nın Osmanlı'ya ait olduğunu kabul etmedikçe seferin süreceği bildirildi, 6 Eylül'de ordu kralın oturduğu Lviv'e yürüdü. Kral 19 Eylül'de barış istedi; Lviv'in Podolya'nın dışında kaldığını ileri sürerek kuşatmanın kaldırılması karşılığında para önerdi. Ordu 3 Ekim'de Bucaş palankasını kuşatınca Leh elçileri geldi ve Kaymakam Kara Mustafa Paşa başkanlığındaki heyetle 14-16 Ekim'de görüştü. Antlaşma 18 Ekim'de imzalandı; Türkçe metni Fâzıl Ahmed Paşa, Latince metni Leh elçileri mühürledi. Elçilerin ricasıyla Podolya dışında kalan Bucaş palankası Lehistan'a geri verildi ve aynı akşam bir fermanla Leh kralına aman ilan edildi. Ancak Lehistan geri vermeyi üstlendiği kale ve palankaların bir bölümünü elinde tuttu ve Osmanlı'ya karşı düşmanca bir siyasete yöneldi; Osmanlı yönetimi ikinci bir sefere karar verdi.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1672-08-27|Kamaniçe","1672-10-18|Bucaş","1673-11-11|Hotin","1699-01-26|Kamaniçe"],
  kaynak:"TDV: bucas-antlasmasi" },

// ── 1699 KARLOFÇA — önem / sebep-sonuç (hüküm kartı: data/ekokuma.js) ────────
{ id:"sebep-sonuc-karlofca-1699", tur:"sebep-sonuc",
  kisa:"Savaşı kaybeden taraf masada nasıl dimdik oturdu?",
  sebep:{ b:"1683 Viyana bozgunuyla başlayan on altı yıllık çok cepheli savaş: Venedik'in Mora'dan kuzeye ilerleyişi, 1696'da Azak'ın düşmesi ve 1697 Zenta yenilgisi", t:"1697-09-11" },
  sonuc:{ b:"Karlofça: Macaristan ve Erdel'in Avusturya'ya, Podolya'nın Lehistan'a, Mora'nın Venedik'e bırakılması; Rusya ile yalnız mütareke", t:"1699-01-26" },
  bag:"Önemi: TDV Karlofça'yı Osmanlı tarihinde bir dönüm noktası sayar — devlet ilk kez bu ölçüde geniş toprak kaybını bir antlaşmayla kabul etti, barış arabulucu devletlerin (İngiltere, Hollanda) masasında yapıldı ve Zitvatorok'ta kabul edilip uygulanamayan Osmanlı-Avusturya eşitliği yeniden yazıldı. Buna rağmen TDV'ye göre Osmanlı heyeti yenik bir tarafın ezikliğini göstermedi: Tımışvar'ı ve Bosna'daki Bihke gibi kaleleri elde tutarak kaybedilen yerleri ileride geri alma imkânını korudu. Osmanlı devlet adamları antlaşmayı kalıcı bir barıştan çok bir mütareke gibi gördü — bu bakış 1711'de Prut'ta ve ardından Venedik'e açılan Mora savaşında karşılığını buldu.",
  metin:"Barışa giden yolda iki taraf da yorgundu. Osmanlı cephesinde Zenta'dan sonra ordu Tuna'ya çekilmiş, Venedik Mora'dan kuzeye ilerleyip Atina'yı ve Dalmaçya-Bosna'da birçok kaleyi almış, Ruslar 1696'da Azak'ı ele geçirmişti. Sadrazam Amcazâde Hüseyin Paşa, barışa ancak kayıpların bir kısmı geri alınınca razı olacak olan II. Mustafa'yı ikna etti; gerekçeleri halkın olağanüstü vergiler altında ezilmesi, boşalan köyler, asker ve mühimmat bulmanın imkânsızlaşması, Anadolu'da asayişsizlik ve Rumeli'de isyanlardı. Karşı tarafta Avusturya, patlaması beklenen İspanya veraseti meselesi yüzünden barış istiyordu; Venedik ona uydu, ama Lehistan ve Rusya istediklerini alamadıkları için savaşın sürmesinden yanaydı. Edirne'de 27 Ocak 1698'de imzalanan ön protokol 'alâ hâlihî' (herkes elindekini tutar) ilkesini kabul etti. Karlofça'da 13 Kasım 1698'de başlayan görüşmeler, dört kapılı büyük bir çadırda yetmiş iki günde otuz altı oturum sürdü. Reîsülküttâb Râmi Mehmed Efendi eski antlaşma metinlerini inceleyip uzmanlardan rapor aldı; Avusturya delegesi Marsigli bile Hıristiyan delegelerin zaman zaman acınacak duruma düştüğünü yazdı. En uzun çekişme Venedik'le oldu: Avusturya, Osmanlı istekleri kabul edilmezse Venedik'in savaşı yalnız sürdüreceğini söyleyince uzlaşıldı. Rus delegesi protokolü tanımadığı için Rusya ile yalnız iki yıllık mütareke yapıldı; barış 14 Temmuz 1700'de İstanbul'da imzalandı. Şartlar Viyana, Varşova ve Venedik'te beğenilmedi. İkinci delege Mavrokordato'nun sonradan imparatordan nişan alması onun Osmanlı çıkarına aykırı davrandığı ithamlarına yol açtı; TDV bu ithamların ihtiyatla karşılanması gerektiğini söyler.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1697-09-11|Zenta","1698-11-13|Karlofça","1699-01-26|Karlofça"],
  kaynak:"TDV: karlofca" },

// ── 1718 PASAROFÇA — önem / sebep-sonuç (hüküm kartı: data/ekokuma.js) ───────
{ id:"sebep-sonuc-pasarofca-1718", tur:"sebep-sonuc",
  kisa:"Mora geri alındı ama Belgrad gitti — Karlofça'nın rövanşı niçin tersine döndü?",
  sebep:{ b:"Karlofça'nın rövanşını alma arzusu: Venedik'e açılan savaş ve Avusturya'nın 1716'da Venedik'le ittifak kurup savaşa girmesi, Varadin ve Belgrad yenilgileri", t:"1716-08-05" },
  sonuc:{ b:"Pasarofça: Mora Osmanlı'da kaldı; Banat, Küçük Eflak, Belgrad dahil Kuzey Sırbistan ve Kuzey Bosna Avusturya'ya geçti", t:"1718-07-21" },
  bag:"Önemi: TDV'ye göre antlaşma Venedik'ten çok Avusturya'nın işine yaradı; Osmanlı büyük toprak kaybıyla Orta Avrupa'dan çekilmekle kalmadı, Avrupa gözünde güçlü bir devlet olmaktan çıkmaya başladı. Aynı günlerde imzalanan ticaret antlaşması Avusturya tüccarına %3 gümrükle serbest alışveriş, bütün limanlarda konsolosluk ve tercüman bulundurma hakkı tanıdı; karşılığında Osmanlı da Avusturya topraklarında şehbenderlik açabilecekti ve Viyana'ya bir şehbender gönderildi. Belgrad ve Kuzey Sırbistan ancak 1739 Belgrad Antlaşması'yla geri alındı.",
  metin:"Osmanlı devlet adamları Karlofça'yı bir mütareke gibi görüyordu. Prut'ta Rusya'yı durdurduktan sonra antlaşmayı bozduğunu ileri sürdükleri Venedik'e savaş açtılar; Osmanlı ordusu ve donanması bu savaşta üstün geldi. Sadrazam Damad Ali Paşa Avusturya'nın tarafsız kalmasını umdu, ama Prens Eugène savaş yanlısıydı ve 13 Nisan 1716'da Avusturya-Venedik ittifakı imzalandı. İstanbul'da bazı devlet adamları birkaç önemsiz adayı Venedik'e geri verip Avusturya'yı yatıştırmayı önerdi; sadrazam onları ölümle tehdit edince sustular ve savaş ilan edildi. Ali Paşa Varadin'de şehit düştü, Banat ve Tımışvar Avusturya'ya geçti, 1717'de Belgrad da düştü. Barış sarayda iki kutbu karşı karşıya getirdi: savaş yanlılarının başında Nûman Paşa ve Köprülüzâdeler vardı, yüksek fiyatlarla kazanan esnaf da savaşın sürmesini istiyordu; halk ise bezgindi ve padişah barıştan yanaydı. VI. Karl'ın Bosna, Sırbistan ve Eflak'ı isteyen ağır şartları III. Ahmed'i öfkelendirdi, fakat İngiltere ve Hollanda elçilerinin aracılığıyla görüşmeler mevcut durum üzerinden yapılmaya razı olundu. 5 Haziran 1718'de başlayan müzakerelerde Avusturya önce Rákóczi ve adamlarının teslimini şart koştu, Osmanlı reddetti ve Avusturya geri adım attı. Aslında iki taraf da savaşacak durumda değildi: Avusturya İspanya ile yeni bir çatışmanın eşiğindeydi. Osmanlı on beş yıllık barış istedi, Avusturya'nın yirmi dört yıl önerisi kabul edildi. Yetmiş günün sonunda Avusturya ve Venedik antlaşmaları 21 Temmuz 1718'de imzalandı.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1714-12-08|Venedik","1716-08-05|Varadin","1717-08-18|Belgrad","1718-07-21|Pasarofça"],
  kaynak:"TDV: pasarofca-antlasmasi" },

// ── 1774 KÜÇÜK KAYNARCA — önem / sebep-sonuç (hüküm kartı: data/ekokuma.js) ─
{ id:"sebep-sonuc-kucuk-kaynarca-1774", tur:"sebep-sonuc",
  kisa:"Kuşatılmış bir ordugâhta imzalanan barış, bir asır boyunca niçin yanlış okundu?",
  sebep:{ b:"Hazırlıksız ilan edilen 1768 savaşı: Kırım'ın ve Eflak-Boğdan'ın işgali, Çeşme baskını, Bükreş görüşmelerinin çöküşü ve 1774'te Kozluca bozgunuyla Şumnu'daki ordugâhın kuşatılması", t:"1774-06-20" },
  sonuc:{ b:"Küçük Kaynarca: Kırım Hanlığı'nın Osmanlı'dan siyaseten kopması, Rus gemilerine Karadeniz ve Akdeniz'de serbestlik, 15.000 kese tazminat", t:"1774-07-21" },
  bag:"Önemi: TDV'ye göre bu savaş hem Osmanlı zaafını bütün açıklığıyla gösterdi hem de Rusya'nın büyük bir güç olarak ortaya çıktığını belgeledi. Rusya'nın 1775'te bastırdığı resmî Fransızca tercümede İstanbul'da yapılacak kilise 'Rus' değil 'Rum' kilisesi diye çevrildi; bu tahrif Rusya'ya Osmanlı Ortodoksları üzerinde genel bir himaye iddiası verdi ve Kırım Savaşı'nın sebepleri arasına girdi. İddia ancak 1856 Islahat Fermanı ve Paris Antlaşması'yla resmen sona erdi. Buna karşılık Kırım üzerindeki hilafet bağının Ruslarca tanınması, kaybı telafi etmese de önemli bir kazanç sayılır.",
  metin:"Savaş Rusya'nın Lehistan'ın iç işlerine karışması ve Kırım sınırındaki saldırıları yüzünden, haklı sebeplerle ama hiçbir hazırlık yapılmadan ilan edildi. Ruslar kısa sürede Kırım'ı ve Eflak-Boğdan'ı işgal edip Tuna'yı aştı. Osmanlı ordusunda kötü yönetim, disiplinsizlik, iflas eden menzil düzeni ve iaşe sıkıntısı genel bir çözülmeyi haber veriyordu. Rus tarafı da rahat değildi; ülkeyi sarsan Pugaçev isyanı onu barış görüşmelerine yöneltti — Büyük Friedrich bu savaşı 'körlerle tek gözlülerin savaşı' diye nitelemişti. 1772-1773'te Fokşan ve Bükreş'te yapılan görüşmelerde Kırım'a bağımsızlık verilmesi şeriata aykırı görüldü, kalelerin terki ve tazminat da İstanbul'daki ulemanın sert tepkisiyle reddedildi; savaş Mart 1773'te yeniden başladı. 1774 baharında Ruslar Kozluca'da Osmanlı kuvvetlerini ağır bir yenilgiye uğrattı (TDV'ye göre 25 Haziran) ve Şumnu'daki karargâhı kuşattı. Mareşal Rumyantsov'un barış mektubu, bozgunda tercümanlar bile kaçıştığı için birkaç gün çevrilmeden kaldı. 7-8000 kişisi kalmış ordugâh kuşatma altındayken Rumyantsov mütareke ilan etmeden, savaş sürerken görüşmeyi şart koştu. Osmanlı delegeleri Ahmed Resmî ve Münib efendiler 16, 17 ve 21 Temmuz'da Küçük Kaynarca'da görüştü; ağır hasta sadrazamın onayı gelince antlaşma 21 Temmuz 1774 akşamı imzalandı. II. Katerina şartları beklenenden tatminkâr buldu.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1768-10-06|Rus","1774-06-25|Kozluca","1774-07-21|Kaynarca"],
  kaynak:"TDV: kucuk-kaynarca-antlasmasi" },
{ id:"tartisma-kucuk-kaynarca-rivayetleri", tur:"tartisma",
  baslik:"Küçük Kaynarca hakkında anlatılan üç hikâye — ve kaynakların cevabı",
  kisa:"Uyuklayan bir delegenin tazminatı hatırlatması, Prut'un intikamı için beklenen bir tarih, bir generalin anısına seçilen köy… TDV üçünü de dayanaksız bulur.",
  metin:"① 'Dirsek keyfi': İkinci delege İbrâhim Münib Efendi'nin görüşmelerde dirseğine dayanıp uyukladığı, uyanıp herkesin kendisine baktığını görünce konuyu takip ediyormuş gibi 'gelelim tazminat meselesine' dediği ve Rusların zaten vazgeçtiği tazminatı bu yüzden devlete 4,5 milyon rubleye mal ettiği anlatılır. TDV'ye göre bunun yakıştırmadan öte dayanağı yoktur: Ruslar tazminattan hiç vazgeçmemiş, Bükreş'te 50.000 kese istemişlerdi; sadrazam başmurahhasa, 20.000 keseye kadar bir talebi uzatmadan kabul etme, gerekirse 40.000 keseye çıkma yetkisi vermişti. Tazminat en sona bırakılan münferit bir madde olduğu için gündeme getirilmesi doğal olarak sona kaldı.\n\n② 'Prut'un intikamı': Rusların antlaşmayı 17 Temmuz'da hazır olduğu hâlde Prut Antlaşması'nın imza günü olan 21 Temmuz'a kadar beklettiği ileri sürülür (Hammer, Zinkeisen, Jorga, Danişmend). TDV'ye göre sadrazamın onayı 21 Temmuz'da gelmiş ve aynı gün imzalanmıştır; üstelik Prut Antlaşması da 21 değil 22 Temmuz'da imzalanıp 23'ünde teati edilmişti.\n\n③ 'Weissmann'ın hatırası': Barışın bir yıl önce orada ölen Rus generali Weissmann'ın anısına Küçük Kaynarca'da yapıldığı iddiası da yalnız Hammer'de geçer; TDV'ye göre Rumyantsov'un güzergâhı ve barışın önceden kesin olarak bilinemeyecek olması böyle bir kastı akla yatkın kılmaz.\n\nAyrıca antlaşmanın 'dört-yedi saatlik kısa bir görüşmeyle dikte edildiği' anlatısı da doğru değildir: üç ayrı günde saatlerce görüşülmüş ve Bükreş'te daha önce varılan uzlaşmalar esas alınmıştır.",
  bag:"Üç hikâye de aynı işlevi görür: ağır bir yenilgiyi bireysel bir gaflete ya da düşmanın sembolik bir hesabına bağlamak. TDV'nin karşı çıkışı ise arşiv belgelerine ve çağdaş Osmanlı kaynaklarına (Enverî, Vâsıf, Ahmed Resmî) dayanır.",
  not:"Antlaşmanın günü de kaynaklarda farklı yazılır: arşiv suretleri görüşmelerin başladığı 16 Temmuz'u, bazı birincil kaynaklar 17 Temmuz'u, Rus tarafı ise metinlerin teati edildiği 26 Temmuz'u esas alır. İmza 21 Temmuz 1774'tür.",
  kesinlik:"tartismali",
  olay:["1774-07-21|Kaynarca"],
  kaynak:"TDV: kucuk-kaynarca-antlasmasi" },

// ── 1878 BERLİN — önem / sebep-sonuç (hüküm kartı: data/ekokuma.js) ─────────
{ id:"sebep-sonuc-berlin-1878", tur:"sebep-sonuc",
  kisa:"Ayastefanos'u kim bozdu ve Osmanlı niçin masadan yine kayıpla kalktı?",
  sebep:{ b:"Rusya'nın Ayastefanos'ta kurduğu Büyük Bulgaristan'a İngiltere'nin, Avusturya'nın ve Balkan devletlerinin itirazı", t:"1878-03-03" },
  sonuc:{ b:"Berlin Antlaşması: Bulgaristan'ın üçe bölünmesi, Sırbistan, Karadağ ve Romanya'nın bağımsızlığı, Bosna-Hersek'in Avusturya işgaline, Kars-Ardahan-Batum'un Rusya'ya bırakılması", t:"1878-07-13" },
  bag:"Önemi: Ayastefanos yalnız iki devleti ilgilendiren bir savaş sonu antlaşmasıydı; Berlin Kongresi meseleyi Avrupa'nın büyük devletlerinin ortak konusu yaptı. TDV'ye göre 1856 Paris Antlaşması'nın Osmanlı toprak bütünlüğü ilkesi açıkça çiğnendi, savaşla ilgisi olmayan İran'a ve Yunanistan'a bile toprak verildi. Genel barışı sağlaması beklenen kongre, istenen sonucu vermedi ve sonraki ihtilafların kaynağı oldu.",
  metin:"Ayastefanos, Avrupa'daki güç dengesini hesaba katmadan Şark Meselesi'ni yalnız Rusya'nın çıkarına göre çözüyordu. İngiltere Rusya'nın Osmanlı toprakları üzerinde bu kadar nüfuz kazanmasını, Avusturya kendi Balkan hesaplarının ortasında büyük bir Bulgaristan doğmasını kabul edemedi. Yeni Balkan devletleri de hoşnutsuzdu: Sırbistan Bosna-Hersek'i ve Makedonya'nın bir kısmını istiyordu, Romanya Dobruca'yı alsa da Romenlerin yaşadığı Besarabya'yı Rusya'ya bırakmak istemiyordu. Hiçbir Avrupa devleti Rusya'nın Ege'ye ve Adriyatik'e inmesine razı olmayınca Rusya, başta istemediği kongreyi kabul etti. Kongreden önce İngiltere, Rusya'ya karşı Doğu Akdeniz'de üs olarak Kıbrıs'ı istedi ve verilmezse zorla alacağını bildirdi; kongrede İngiliz desteği uman Bâbıâli 4 Haziran 1878'de adayı devretti, 1 Temmuz tarihli ek antlaşmayla Rusya doğuda işgal ettiği yerleri geri verirse İngiltere'nin çekileceği ve mülkiyetin Osmanlı'ya ait olduğu yazıldı. Kongre 13 Haziran'da Bismarck başkanlığında toplandı. Osmanlı heyetinin başında Müşir Mehmed Ali Paşa vardı; yanında Nafia Nazırı Karatodori Paşa ile Osmanlı'nın Berlin elçisi Sâdullah Bey bulunuyordu. Osmanlı heyeti Ayastefanos şartlarının hafifletilmesini bekliyordu, ama her devlet kendi çıkarını korudu ve yardım beklenen İngiliz temsilcileri bile Osmanlı aleyhine görüş bildirdi. Bir ay sonra imzalanan altmış dört maddelik antlaşmanın, hüküm kartında yer almayan maddeleri de sonraki yılları biçimlendirdi: Girit'te 1868 nizamnamesinin uygulanması ve Avrupa'ya bilgi verilmesi, Kotur'un İran'a bırakılması, Tuna'nın savaş gemilerine kapalı ticaret gemilerine açık olması, Ermenilerin yaşadığı yerlerde ıslahat yapılması ve Boğazların 1841 Londra ve 1856 Paris antlaşmalarındaki statüde kalması.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1877-04-24|Harbi","1878-03-03|Ayastefanos","1878-07-13|Berlin"],
  kaynak:"TDV: berlin-antlasmasi" }

];

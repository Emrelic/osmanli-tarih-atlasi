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
window.EKOKUMA_ANTLASMA2 = [

// ── 1555 AMASYA ─────────────────────────────────────────────────────────────
{
  id: "antlasma-amasya-1555",
  tur: "antlasma",
  olay: ["1555-05-29"],
  metin: "TDV'ye göre Amasya barışı madde madde imzalanmış bir metinden çok, Kanûnî'nin Şah Tahmasb'a gönderdiği cevap mektubuna dayanır; antlaşmanın esaslarını belirleyen bu mektup Safevî elçisine divanda 1 Haziran 1555'te verildi. Üç temel hüküm: ① Safevî elçisi, İran'da ilk üç halifeye, sahabeye ve Hz. Âişe'ye lanet okuma törenlerinin (teberrâîlik) yasaklanacağına dair teminat verdi. ② Karşı taraftan bir saldırı gelmedikçe Osmanlı sınır beyleri İran'a karşı harekete geçmeyecekti. ③ Kutsal yerleri ziyarete gidecek İranlı hacıların Osmanlı topraklarından geçmesine izin verildi. Metin sınırları tek tek saymasa da antlaşma; Basra, Bağdat, Şehrizor, Van, Bitlis, Erzurum, Kars ve Atabegler yurdu üzerindeki Osmanlı hâkimiyetinin Safevîlerce tanınması anlamına geliyordu. Barış, Tahmasb'ın ölümünden sonra II. İsmâil tahta çıkana kadar yaklaşık yirmi beş yıl yürürlükte kaldı.",
  kesinlik: "kesin",
  kaynak: "TDV: amasya-antlasmasi (gövde okundu)"
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
  metin: "Görüşmeler Zsitva'nın Tuna'ya karıştığı yerde 29 Ekim 1606'da başladı ve antlaşma 11 Kasım 1606'da imzalandı; Osmanlı tarafını Budin Beylerbeyi Kadızâde Ali Paşa temsil etti. TDV'nin saydığı başlıca hükümler: ① Habsburg imparatoru ile padişah arasında baba-oğul ilişkisi kuruldu; Osmanlılar bundan sonra Habsburg hükümdarı için 'Beç kralı' yerine imparator (çasar/kayzer) unvanını kullanacaktı. ② Savaş sırasında hangi taraf nereyi aldıysa orası onda kaldı; Eğri, Kanije ve Estergon Osmanlı'da kaldı, ancak imparatorun elçileri onay aşamasında Kanije'yi isteyebilecekti. ③ Habsburglar yıllık vergi ödemeyecek, bir defaya mahsus 200.000 kuruş değerinde hediye gönderecekti. ④ Kale işgal etmek ve esir almak yasaklandı, eldeki esirler iade edilecekti. ⑤ Osmanlı'ya bağlı köylerin vergisini Osmanlı memurları değil köy muhtarları toplayacak, krala vergi vermeyen soylular Osmanlı'ya da vermeyecekti. ⑥ Habsburg imparatoru ile Macarlar arasındaki Viyana barışının kararları tanındı. ⑦ Barış yirmi yıl için yapıldı. ⚠️ Tarafların elindeki metinler birbirini tutmuyordu (Vác Kalesi, köylünün vergi ödeme biçimi, geri alınan yerlerdeki vergiler); İstanbul'da sunulan metin, Habsburgların üç yıl sonra yeniden vergi ödeyeceğini ve Erdel'in Osmanlı hâkimiyetinde olduğunu da yazıyordu. Habsburgların istediği metin ancak padişahın barışı 1615'te yeniden onaylamasıyla tanındı.",
  kesinlik: "tartismali",
  kaynak: "TDV: zitvatorok-antlasmasi (gövde okundu)"
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
  kaynak: "TDV: kasrisirin-antlasmasi · murad-iv (gövde okundu)"
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
  olay: ["1638-12-24", "1639-05-17", "1746-09-04", "1847-05-31"],
  kaynak: "TDV: kasrisirin-antlasmasi · murad-iv"
},

// ── 1739 BELGRAD ────────────────────────────────────────────────────────────
{
  id: "antlasma-belgrad-1739",
  tur: "antlasma",
  olay: ["1739-09-18"],
  metin: "TDV'de bu antlaşmanın müstakil maddesi bulunamadı (belgrad-antlasmasi adresi ölü); hükümler Avusturya, Rusya, Sırbistan ve Belgrad maddelerinden toplandı. AVUSTURYA ile: ① Avusturya, 1718 Pasarofça'da kazandığı yerleri — Banat hariç — geri verdi. ② Belgrad Osmanlı'ya teslim edildi; Avusturya'ya geçmiş olan Kuzey Sırbistan'ın bir kısmı yeniden Osmanlı yönetimine girdi. RUSYA ile: ③ Rusya, savaşın sonlarında ele geçirdiği Özi'yi ve Hotin'i, işgal ettiği Boğdan'la birlikte terk etti. ④ Azak Kalesi yıkılacak ve bulunduğu bölge iki tarafın da uzak duracağı 'boş arazi' sayılacaktı; TDV bunu Osmanlı için önemli bir kazanım olarak değerlendirir.",
  kesinlik: "kesin",
  kaynak: "TDV: avusturya · rusya · sirbistan · belgrad (gövde okundu; müstakil madde bulunamadı)"
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
  olay: ["1739-07-22", "1739-09-18", "1739-10-03"],
  kaynak: "TDV: avusturya · rusya · sirbistan · belgrad"
},

// ── 1792 YAŞ ────────────────────────────────────────────────────────────────
{
  id: "antlasma-yas-1792",
  tur: "antlasma",
  olay: ["1792-01-10"],
  metin: "On üç madde, bir giriş ve bir kapanıştan oluşan antlaşma 10 Ocak 1792'de Yaş'ta Rusça ve Türkçe metinler hâlinde mühürlenip değiştirildi. Temeli, Kalas'ta kabul edilen beş maddelik ön barıştı (mukaddime-i sulhiyye). Başlıca hükümler (TDV): ① 1774 Küçük Kaynarca Antlaşması geçerli sayıldı. ② Turla (Dinyester) nehri sınır oldu: sol kıyısı Rusya'ya, sağ kıyısı Osmanlı'ya ait olacaktı. ③ Rusya'nın işgal ettiği Eflak ve Boğdan, önceki antlaşmalarla tanınan imtiyazları teyit edilerek iade edildi; halk savaşın yıkımı yüzünden iki yıl vergiden muaf tutulacak, göç eden aileler dönebilecek, Bucak dâhil bölgedeki kaleler Osmanlı'ya bırakılacaktı. ④ Öteki bölgelerde sınırlar savaş öncesine döndü. ⑤ Kuban bölgesinden Rus topraklarına saldırı olursa gasp edilen mallar ve esirler bulunup iade edilecek, sorumlular cezalandırılacak, zarar ödenecekti; Rusya bölge için istediği 'serbestî' ve askerî müdahale hakkından vazgeçti. ⑥ Tiflis hanının topraklarına saldırılmayacaktı. ⑦ Garp Ocakları korsanlarının Rus gemilerine verdiği zarar, başvurudan sonra en geç iki ay içinde ödenecekti. ⑧ Esirler serbest bırakıldı; işgal altındaki yerler 15 Mayıs'a kadar boşaltılacak ve karşılıklı büyükelçilik heyetleri gönderilecekti. 🔴 Ve bir talep düştü: Rusya 12 milyon kuruşluk (24.000 kese) savaş tazminatı istiyordu; İstanbul'daki meclis taksitle ödemeyi kabul etmeye karar vermişti, fakat Kuban maddesinde uzlaşılınca Bezborodko çariçenin tazminattan tamamen vazgeçtiğini ilan etti.",
  kesinlik: "kesin",
  kaynak: "TDV: yas-antlasmasi (gövde okundu)"
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
  olay: ["1783-04-19", "1787-08-17", "1792-01-10", "1792-06-01"],
  kaynak: "TDV: yas-antlasmasi"
},

// ── 1812 BÜKREŞ ─────────────────────────────────────────────────────────────
{
  id: "antlasma-bukres-1812",
  tur: "antlasma",
  olay: ["1812-05-28"],
  metin: "TDV'de bu antlaşmanın müstakil maddesi bulunamadı (bukres-antlasmasi adresi ölü); hükümler Boğdan, Rusya ve Sırbistan maddelerinden toplandı. ① Prut nehri Osmanlı-Rus sınırı oldu. ② Boğdan'ın doğu kısmı, en önemli yerleri olan Akkirman, Kili ve Bender ile birlikte Rusya'ya bırakıldı; Rusların Besarabya adını verdiği bu bölge 1918'e kadar 106 yıl Rus yönetiminde kaldı. ③ 1804'ten beri ayaklanma hâlindeki Sırplara kısmî özerklik verilmesi kabul edildi. TDV'nin Rusya maddesi, Napolyon'un Moskova seferine çıkması yüzünden savaşın pek ağır olmayan şartlarla sona erdiğini yazar.",
  kesinlik: "kesin",
  kaynak: "TDV: bogdan · rusya · sirbistan (gövde okundu; müstakil madde bulunamadı)"
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
  olay: ["1804-02-14", "1806-12-22", "1812-05-28", "1813-10-05"],
  kaynak: "TDV: rusya · sirbistan · bogdan"
},

// ── 1829 EDİRNE ─────────────────────────────────────────────────────────────
{
  id: "antlasma-edirne-1829",
  tur: "antlasma",
  olay: ["1829-09-14"],
  metin: "Antlaşma asıl metin, ona ekli bir sözleşme ve bir senetten oluşuyordu; on altı maddelik metin 'ebedî barış'tan söz ediyordu. Başlıca hükümler (TDV): ① Rumeli'de sınır Prut ve Tuna boyunca uzanıp Hızırilyas ağzında Karadeniz'e ulaştı; Tuna kolları arasındaki Yılan adaları Rusya'da kaldı, ama orada karantina dışında istihkâm yapılmayacak, nehrin Osmanlı'ya ait sağ kıyısı da iskân edilmeyecekti. ② Osmanlı, Rusya'nın Erivan ve Nahcıvan hanlıklarını ilhakını tanıdı; Ahıska ve Ahılkelek Rusya'ya bırakıldı (md. 2-4). ③ Eflak ve Boğdan kendi ayrı idarelerine kavuştu, Rusya iki prensliğin refahına kefil oldu; ek senede göre voyvodalar yerli boyarlarca ömür boyu seçilecek, halk Rusların çekilmesinden sonra iki yıl vergiden muaf olacaktı (md. 5). ④ Akkerman Antlaşması'nın Sırbistan hükümleri uygulanacak, Sırbistan'dan ayrılmış altı nahiye geri verilecekti (md. 6). ⑤ Boğazlar, Rus ticaret gemilerine ve Osmanlı ile savaşta olmayan devletlerin Rus limanlarına giden ticaret gemilerine açık olacaktı (md. 7). ⑥ Rus tüccarlarının 1806 savaşındaki zararı için on sekiz ayda dört taksitle 1,5 milyon Macar altını; savaş tazminatı olarak da Ahıska, Ahılkelek, Anapa ve Poti gibi kalelerle birlikte 10 milyon Macar altını ödenecekti (md. 9). ⑦ Osmanlı, üç devletin Yunanistan hakkındaki anlaşmalarını, yani Yunanistan'ın bağımsızlığını kabul etti (md. 10). ⑧ Eflak, Boğdan ve Silistre savaş tazminatı bitene kadar rehin olarak Rus işgalinde kalacaktı (md. 11 ve ek sözleşme).",
  kesinlik: "kesin",
  kaynak: "TDV: edirne-antlasmasi (gövde okundu)"
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
  olay: ["1827-10-20", "1828-04-26", "1829-09-14", "1830-02-03"],
  kaynak: "TDV: edirne-antlasmasi"
},

// ── 1856 PARİS ──────────────────────────────────────────────────────────────
{
  id: "antlasma-paris-1856",
  tur: "antlasma",
  olay: ["1856-03-30"],
  metin: "Otuz dört maddelik antlaşma 30 Mart 1856'da imzalandı, onaylar 27 Nisan'da değiştirildi; Osmanlı'yı Sadrazam Âlî Paşa ve Paris sefiri Mehmed Cemil Bey temsil etti. Başlıca hükümler (TDV): ① İmzacı devletler Osmanlı'nın bağımsızlığını ve toprak bütünlüğünü ortak çıkarlarının ayrılmaz parçası saydıklarını ilan etti; Osmanlı Avrupa devletler sisteminin eşit üyesi kabul edildi ve Avrupa hukukundan yararlanacaktı. ② Karadeniz tarafsız ve silahsız hâle getirildi; orada bulundurulacak gemilerin sayısı ve niteliği Rusya ile Osmanlı arasında sonra belirlenecekti. ③ Tuna uluslararası statüye kondu; nehirde serbest gemi işletmeciliği, kıyı devletlerinin temsilcilerinden oluşan daimî bir komisyona bırakıldı. ④ Eflak ve Boğdan'ı tek devlet yapma önerisi Osmanlı ve Avusturya'nın itirazıyla reddedildi; iki prenslik Bâbıâli'nin verdiği imtiyazlarla eski hâliyle kaldı. ⑤ Rusya işgal ettiği Kars'ı iade etti; bu iade, Rusya'nın Besarabya'dan toprak bırakması meselesiyle birlikte pazarlık edildi. ⑥ 18 Şubat 1856 Islahat Fermanı antlaşmanın 9. maddesinde anıldı; Bâbıâli fermanın antlaşmaya bir 'senet' olarak girmesine karşı çıktı ve ifadeyi yalnız fermanın 'yüksek değerinin takdir edildiği' biçimine çevirebildi. ⑦ Antlaşma 1774 Küçük Kaynarca Antlaşması'nı yürürlükten kaldırdı. ⚠️ Âlî Paşa'nın gündeme getirdiği kapitülasyonların kaldırılması ise sağlanamadı; yalnız destek vaadi alındı.",
  kesinlik: "kesin",
  kaynak: "TDV: paris-antlasmasi (gövde okundu)"
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
  olay: ["1853-10-04", "1856-02-18", "1856-03-30"],
  kaynak: "TDV: paris-antlasmasi"
}

];

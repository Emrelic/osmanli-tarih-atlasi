// ============================================================================
// EK OKUMA — SAVAŞIN HİKÂYESİ (pilot, 12 kart)
// ============================================================================
// Yazan: KITA 20 · 13 Eylül 2026 · paket 0045 H-0007 · koordinatör 1.MURAT
// Şartname: oturumlar/KITA-20-SAVAS-HIKAYELERI-0045.md
// Emre: "İnebahtı, Preveze, Cerbe, Mohaç, Çaldıran, Ridaniye, Mercidabık,
//        Ankara, Niğbolu, Kosova, Varna vb. savaşların hikâyelerini bu
//        savaşların maddelerinin içinde ek okuma olarak vermeliyiz."
//
// 🔴 AD ALANI (CLAUDE.md §7): bu dosya YALNIZ window.EKOKUMA_SAVAS tanımlar.
//    window.EKOKUMA'ya dokunmaz.
//
// 🔴 YÜKLEYİCİ (D099) — BU DOSYA BUGÜNKÜ app.js'TE GÖRÜNMEZ:
//    ekOkumaMerakYukle() yalnız data/ekokuma.js + data/merak.js yükler.
//    Görünmesi için KITA 12'den (app.js sahibi) ÜÇ değişiklik istendi:
//    ① yükleyici listesine bu dosya ② EKOKUMA_TUR'a "savas-hikayesi"
//    ③ ekKartHtml'e bu şemanın dalı. Ayrıntı: denetim/TUR-KITA20-SAVAS-0913.md
//
// ── KAYNAK YÖNTEMİ ─────────────────────────────────────────────────────────
// Her kart, TDV İslâm Ansiklopedisi'nin ilgili SAVAŞ maddesinin gövdesi
// baştan sona OKUNARAK yazıldı (HTTP 200 + <title> + gövde, §4 üç tuzak).
// 11 savaşın 10'unda TDV'nin kendi savaş maddesi var; Cerbe'de yok, anlatı
// "cerbe" (yer) ve "piyale-pasa" (kişi) maddelerinden kuruldu.
// Kaynakta OLMAYAN hiçbir cümle karta konmadı. Kaynaklar ayrışıyorsa
// `tartisma:` alanına iki taraf da yazıldı, taraf SEÇİLMEDİ.
//
// ── TELİF ─────────────────────────────────────────────────────────────────
// Metinler TDV gövdesinden KOPYALANMADI; okunup kendi cümlelerimle yazıldı.
// Doğrulayıcı her kartı kaynak gövdesiyle karşılaştırıp en uzun ortak kelime
// dizisini ölçer (denetim/ARAC-KITA20-SAVAS-0913.js). TDV'deki tablo/görseller
// TDV kullanım şartlarınca başka ortamda yayımlanamaz — gorsel: null.
//
// ── ŞEMA ──────────────────────────────────────────────────────────────────
//   id · tur:"savas-hikayesi" · baslik · kisa (düğme ipucu, merak uyandırır)
//   tarih_metin · yer · taraflar:[{ad, komutan, kuvvet}]
//   oncesi · akis · sonuc        (üçü birlikte 150-300 kelime)
//   tartisma                     (kaynakların ayrıştığı yerler, taraf seçilmez)
//   kesinlik                     kesin | tartismali | iddia | rivayet (EK-OKUMA.md)
//   olay:[...]                   ÇEKİRDEK kronolojide (OLAYLAR*) BİREBİR var olan t
//                                değerleri — ekKartBagliMi() indexOf ile eşler.
//                                Çekirdekte ay hassasiyetli yazılmış maddeler
//                                ("1538-09") o biçimle yazıldı.
//   kaynak · gorsel · gorsel_kaynak
// ============================================================================

window.EKOKUMA_SAVAS = [

{ id:"savas-inebahti-1571", tur:"savas-hikayesi",
  baslik:"İnebahtı Deniz Savaşı (7 Ekim 1571)",
  kisa:"Donanmanın büyük kısmı bir öğleden sonra yok oldu; ama ertesi yaz denizde karşısına çıkacak bir düşman bulamadı.",
  tarih_metin:"7 Ekim 1571 · 17 Cemâziyelevvel 979",
  yer:"İnebahtı (Lepanto) körfezi",
  taraflar:[
    { ad:"Osmanlı donanması", komutan:"Kaptanıderyâ Müezzinzâde Ali Paşa · donanma serdarı Pertev Paşa · Cezayir beylerbeyi Uluç Ali Paşa", kuvvet:"yaklaşık 230 gemi, 25.000 savaşçı" },
    { ad:"Kutsal İttifak donanması (Papalık · Venedik · İspanya)", komutan:"Don Juan (İspanya) · Sebastiano Veniero (Venedik) · Marcantonio Colonna (Papalık)", kuvvet:"yaklaşık 243 gemi, 37.000 savaşçı" }
  ],
  oncesi:"Osmanlıların 1570'te Venedik yönetimindeki Kıbrıs'a sefer açması, Papalığın önderliğinde Venedik ile İspanya'yı 20 Mayıs 1571'de bir Haçlı ittifakında buluşturdu. Osmanlı donanması o yıl aylarca Girit, Mora ve Adriyatik kıyılarında dolaştı; eylül sonunda İnebahtı'ya vardığında gemiler yıpranmış, kürekçi ve asker eksilmişti. Müttefik filonun yaklaştığı haberi üzerine toplanan savaş meclisinde Uluç Ali Paşa korunaklı körfezde beklemeyi önerdi, Pertev Paşa da ona katıldı. Kaptanıderyâ Ali Paşa ise aldığı emri gerekçe göstererek mutlaka çarpışılmasını istedi.",
  akis:"İki filo 7 Ekim 1571'de körfezde karşılaştı. Öğleye doğru başlayan çarpışma gün batımına kadar sürdü ve taze müttefik donanması, uzun seferden yorgun düşmüş Osmanlı gemilerine ağır bastı. Müezzinzâde Ali Paşa ile on bir sancak beyi öldü; Pertev Paşa'nın gemisi batırıldı, kendisi yaralı olarak güçlükle kurtarıldı. Osmanlı tarafında 20.000 kişinin öldüğü, yaklaşık 190 geminin battığı ya da ele geçtiği ve gemilerde kürek çeken binlerce forsanın serbest kaldığı kaydedilir. Yalnız Uluç Ali Paşa kendi filosunu savaş alanından çıkarabildi. Müttefikler de binlerce ölü ve yaralı verdi; yaralananlar arasında Don Juan ile sonradan Don Kişot'u yazacak olan Cervantes de vardı.",
  sonuc:"İstanbul yenilgiyi 23 Ekim'de öğrendi; savaşta verilen terfiler geçersiz sayıldı, Uluç Ali'nin adı Kılıç'a çevrilip kaptanıderyâlık ona verildi. Kış boyunca tersanelerde yoğun bir gemi yapımı yürütüldü ve yeni donanma 13 Haziran 1572'de denize açıldı. Zaferin kalıcı bir karşılığı olmadı: Kıbrıs geri alınamadı, Venedik 1573'te yeni bir ahidnâmeyle tazminat ödemeyi kabul etti, Tunus 1574'te fethedildi. Buna karşın savaş, Avrupa'da Türklerin yenilmez olduğu inancını kırdı.",
  tartisma:"İki donanmanın gemi ve asker sayıları kaynaklarda birbirinden oldukça farklı verilir; buradaki rakamlar TDV maddesinin benimsediği yaklaşık değerlerdir.",
  kesinlik:"kesin",
  olay:["1571-10-07"],
  kaynak:"TDV: inebahti-deniz-savasi (DİA 22, 2000, s. 287-289)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-preveze-1538", tur:"savas-hikayesi",
  baslik:"Preveze Deniz Muharebesi (28 Eylül 1538)",
  kisa:"Sayıca geride kalan ve rüzgârı da karşısına alan donanma, rüzgâr dinince üstünlüğü ele geçirdi.",
  tarih_metin:"27-28 Eylül 1538 · asıl çarpışma 4 Cemâziyelevvel 945 (28 Eylül)",
  yer:"Preveze açıkları, Narda körfezinin girişi",
  taraflar:[
    { ad:"Osmanlı donanması", komutan:"Kaptanıderyâ Barbaros Hayreddin Paşa · Turgut Reis · Sâlih Reis · Seydi Ali Reis", kuvvet:"122 kadırga, yaklaşık 20.000 asker" },
    { ad:"Haçlı ittifakı donanması (İspanya · Papalık · Venedik · Portekiz · Malta · Ceneviz)", komutan:"Andrea Doria · Vincenzo Cappello (Venedik) · Marco Grimani (Papalık)", kuvvet:"kaynaklara göre değişir; yaklaşık 140 kalyon, 168 kadırga, 55.000 asker" }
  ],
  oncesi:"Barbaros Hayreddin Paşa'nın 1537'den sonra Ege'deki Venedik adalarını birer birer alması üzerine Papa III. Paolo'nun öncülüğünde Şubat 1538'de bir Hıristiyan ittifakı kuruldu. Andrea Doria komutasındaki müttefik donanması eylülde Preveze Kalesi'ni kuşattı, ancak Osmanlı donanmasının yaklaştığını öğrenince Korfu'ya çekildi. Barbaros 24 Eylül'de Preveze'ye gelip kaleyi onardı ve gemilerini körfezin içinde tuttu. Körfezin ağzı sığ olduğu için müttefiklerin büyük yelkenlileri içeri giremiyordu, ama çıkış da onların denetimindeydi.",
  akis:"Karaya asker çıkarıp kaleyi almaya yönelik müttefik denemeleri geri püskürtüldü. 27 Eylül'de Barbaros körfezden çıkıp hilâl düzeninde ateş açınca Doria filosunu geri çekti. Ertesi gün müttefikler savaş meclisinin kararıyla yeniden geldi. Barbaros merkezde, Sâlih Reis sağda, Seydi Ali Reis solda durdu; Turgut Reis'in filosu hattın gerisindeydi. Güneyden esen rüzgâr önce yelkenlilerden yanaydı, rüzgâr dinince kalyonlar kıpırdayamaz oldu. Kalyonların kısa menzilli gülleleri denize düşerken daha uzağa atan kadırga topları önce bu gemileri vurdu. Müttefiklerin Osmanlı donanmasını iki ateş arasına alma denemeleri Turgut Reis'in çevirme hareketiyle boşa çıktı. Beş saat süren çarpışmanın sonunda Doria, karanlıkta fenerlerini söndürerek çekildi.",
  sonuc:"Kaynaklara göre müttefikler 128 kalyon kaybetti. Zafer haberi 14 Ekim'de Boğdan seferinden dönen Kanûnî'ye Yanbolu'da ulaştı. TDV maddesine göre Preveze, gücünü asıl karada kurmuş olan Osmanlı Devleti'ni denizlerde de söz sahibi bir güce dönüştüren eşikti; kadırgaların kalyonlara üstün gelmesi de donanmada bu gemi türünün uzun süre tercih edilmesine yol açtı. Hıristiyan devletler ortak bir donanmayla ancak otuz üç yıl sonra, İnebahtı'da yeniden karşısına çıkabildi.",
  tartisma:"Müttefik donanmasının mevcudu kaynaklarda farklı verilir. Venedik komutanı Cappello'nun Doria'yı savaşmaktan kaçmakla suçladığı ileri sürülür; çekilme kararının gerekçesi tartışmalıdır.",
  kesinlik:"kesin",
  olay:["1538-09"],
  kaynak:"TDV: preveze-deniz-muharebesi (DİA 34, 2007, s. 343-345)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-cerbe-1560", tur:"savas-hikayesi",
  baslik:"Cerbe Deniz Savaşı ve Kalenin Fethi (1560)",
  kisa:"Deniz savaşı üç günde bitti; ada ise ancak iki buçuk ay sonra el değiştirdi.",
  tarih_metin:"11-14 Mayıs 1560 deniz savaşı · 30 Temmuz 1560 kalenin fethi",
  yer:"Cerbe (Djerba) adası, Tunus'un doğusunda Gabes körfezi",
  taraflar:[
    { ad:"Osmanlı donanması ve Trablusgarp kuvvetleri", komutan:"Kaptanıderyâ Piyâle Paşa · Trablusgarp beylerbeyi Turgut Paşa (Reis) · donanmada Uluç Ali Reis", kuvvet:"120 kadırga" },
    { ad:"İspanya yönetiminde müttefik Hıristiyan donanması", komutan:"bulunamadı — okunan iki TDV maddesi komutanın adını vermiyor", kuvvet:"sayıca Osmanlı donanmasından kalabalık" }
  ],
  oncesi:"Cerbe, Turgut Reis'in Batı Akdeniz akınlarında kullandığı bir üstü. Asıl hedefi Trablusgarp olan müttefik Haçlı donanması fırtınalar ve salgınlar yüzünden ancak 1560 başlarında adaya ulaşabildi; 12 Mart 1560'ta adayı ele geçirip burada sağlam bir kale yaptırdı. Turgut Reis hazırlıkları önceden İstanbul'a bildirmişti. Piyâle Paşa 120 kadırgalık donanmayla 28 Mart'ta İstanbul'dan çıktı, Modon'da ikmal yaptı, Malta yakınlarındaki Gozo adasını yağmaladıktan sonra Cerbe'ye yöneldi.",
  akis:"İki donanma arasındaki çatışma 11 Mayıs'ta başladı ve üç gün sürdü. Osmanlı donanmasının ikiye ayrılarak yaptığı manevra, kalabalık müttefik filosunu 14 Mayıs'ta dağıttı. Arşiv kaydına dayanan anlatıya göre müttefiklerin on dokuz kadırgası ele geçirildi, yirmi altı barçası tahrip edildi ve bir kısım gemi adadaki kaleye sığındı. Denizdeki yenilginin ardından müttefik askerleri kendi yaptıkları Cerbe Kalesi'ne kapandı. Kale karadan Turgut Paşa'nın kuvvetleri, denizden donanma tarafından kuşatıldı. İspanyol, İtalyan, Alman ve Maltalı askerlerin savunduğu kale yaklaşık iki ay dayandı ve 30 Temmuz 1560'ta düştü.",
  sonuc:"Ada Trablusgarp beylerbeyiliğine bağlandı, kalesi onarıldı. Piyâle Paşa eylül sonunda İstanbul'a döndü; beraberindeki esirler, ele geçirilen gemiler ve tutsak amiraller halkın ve padişahın gözü önünde karşılandı. Paşa bu başarı üzerine Şehzade Selim'in kızı Gevherhan Sultan'la evlendirildi. TDV'nin değerlendirmesiyle Cerbe, Barbaros'un Preveze'de başlattığı Akdeniz'deki Osmanlı üstünlüğünü pekiştiren zaferdir.",
  tartisma:"Müttefik kayıpları iki TDV maddesinde farklıdır: 'Cerbe' maddesi yetmişe yakın geminin batırıldığını ve yirmi kadarının ele geçirildiğini rivayet olarak aktarır; 'Piyâle Paşa' maddesi arşiv belgesine dayanarak on dokuz kadırga ve yirmi altı barça verir. Deniz zaferi bazı kronolojilerde 11 Mayıs'ta, bazılarında 14 Mayıs'ta durur; ikisi aynı üç günlük çatışmanın başı ve sonudur.",
  kesinlik:"kesin",
  olay:["1560-01-01","1560-05-14","1560-07-30"],
  kaynak:"TDV: cerbe (DİA 7, 1993, s. 391-392) · TDV: piyale-pasa (DİA 34, 2007, s. 296-297)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-mohac-1526", tur:"savas-hikayesi",
  baslik:"Mohaç Meydan Muharebesi (29 Ağustos 1526)",
  kisa:"Yaklaşık iki saat sürdü; bir krallığı üçe böldü ve bir buçuk asırlık bir mücadeleyi başlattı.",
  tarih_metin:"29 Ağustos 1526 · 20 Zilkade 932",
  yer:"Mohaç ovası, güney Macaristan",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Kanûnî Sultan Süleyman · Vezîriâzam ve Rumeli beylerbeyi İbrâhim Paşa · Semendire beyi Bâlî Bey · Bosna beyi Hüsrev Bey", kuvvet:"yaklaşık 80.000" },
    { ad:"Macar Krallığı ordusu", komutan:"Kral II. Layoş (Lajos) · Pál Tomori", kuvvet:"savaş anında 40-50.000; Leh, Çek ve Alman birlikleriyle" }
  ],
  oncesi:"Belgrad'ı 1521'de alan Kanûnî, Macaristan'ı başlangıçta Eflak ve Boğdan gibi kendisine bağlı bir ara bölge olarak düşünüyordu. Avrupa'daki gelişmeler takvimi hızlandırdı: Fransa Kralı I. François 1525'te Pavia'da V. Karl'a esir düşünce annesi padişahtan yardım istedi. Kanûnî, V. Karl'ın kız kardeşiyle evli olan ve Osmanlı elçilerini hapse attıran II. Layoş'a karşı sefere çıktı. Ordu 23 Nisan 1526'da İstanbul'dan ayrıldı, yağmurla bozulan yollarda ilerleyip Pétervárad'ı aldı ve Drava'yı gemilerden kurulan köprüyle geçti. Macar tarafında soylular bölünmüştü; Erdel voyvodası Szapolyai'nin kuvvetleri savaşa yetişmedi.",
  akis:"Macar komutanları, çamurlu arazide parça parça ilerleyen Osmanlı ordusunu ani bir ağır süvari hücumuyla dağıtabileceklerine inanıyordu. Osmanlı tarafının buna karşı bir planı vardı: öndeki Rumeli birlikleri hücum gelince iki yana açılacak, saldıranlar arkada zincirlenmiş topların ve tüfekli yeniçerilerin önüne düşecekti. Akıncılar da düşmanı arkadan sarmak için pusuya yatırıldı. Macar saldırısı ikindiye doğru başladı ve plan işledi: yeniçerilerin kademeli ateşi süvarileri dağıttı, akıncılar Macar ordugâhını ateşe verdi. Çarpışma yaklaşık iki saat sürdü. Tomori savaş alanında öldü, Kral II. Layoş kaçarken Csele deresinde boğuldu.",
  sonuc:"Sefer rûznâmesine göre gömülen Macar ölüleri sayılırken 20.000 piyade ve 4000 süvari cesedi bulundu, esirlerin sayısı 10.000'e ulaştı. Kanûnî 11 Eylül'de direnişle karşılaşmadan Budin'e girdi, iki hafta sonra geri döndü. Kralın ölümü taht meselesini doğurdu: Osmanlılar Szapolyai'yi kendilerine bağlı kral olarak kabul ederken V. Karl'ın kardeşi Ferdinand da tahtta hak iddia etti. Ortaçağ Macar toprakları üçe bölündü ve Osmanlılarla Habsburglar arasında 150 yıl sürecek mücadele başladı.",
  tartisma:"Osmanlı kaybı sefer rûznâmesinde elli-altmış, Celâlzâde'de 150 kişi olarak geçer; TDV gerçek sayının bunların epeyce üstünde olduğunu belirtir. Hicrî tarihin karşılığı 28 Ağustos görünse de savaşın çarşamba günü yapılmış olması 29 Ağustos'a denk düşer.",
  kesinlik:"kesin",
  olay:["1526-08-29"],
  kaynak:"TDV: mohac-muharebesi (DİA 30, 2020, s. 232-235)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-caldiran-1514", tur:"savas-hikayesi",
  baslik:"Çaldıran Savaşı (23 Ağustos 1514)",
  kisa:"Şah İsmâil'i esaretten kurtaran, 'Şah benim' diyerek öne atılan adamı oldu.",
  tarih_metin:"23 Ağustos 1514",
  yer:"Çaldıran ovası, İran Azerbaycanı",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Yavuz Sultan Selim · Anadolu beylerbeyi Hadım Sinan Paşa · Rumeli beylerbeyi Hasan Paşa", kuvvet:"yaklaşık 100.000; uzun yürüyüşten yorgun" },
    { ad:"Safevî ordusu", komutan:"Şah İsmâil · Ustaclu Muhammed Han", kuvvet:"en az Osmanlı ordusu kadar; süvari ağırlıklı ve dinç" }
  ],
  oncesi:"Şah İsmâil'in Anadolu'ya yolladığı halifeler geniş bir Şiî propagandası yürütüyor, Şahkulu ve Nur Ali Halife gibi ayaklanmalar büyük can kaybına yol açıyordu. 1512'de tahta çıkan I. Selim, şaha sığınan Şehzade Murad'ın iadesini istedi; gönderdiği elçi öldürülünce meseleyi savaşla çözmeye karar verdi. Fetvalar alındı ve TDV'ye göre sefer öncesinde Anadolu'da şah taraftarı olarak tespit edilen 40.000 kadar kişi ortadan kaldırıldı. Ordu, şahın emriyle yakılan ekin ve otlaklar yüzünden sıkıntı içinde doğuya yürüdü; Eleşkirt'te yeniçeriler padişahın otağına kurşun atacak kadar huzursuzlandı.",
  akis:"Ordu 23 Ağustos'ta Çaldıran'a varınca, devlet adamlarının bir gün dinlenme önerisine rağmen Selim'in kararıyla hemen savaş düzeni aldı. Merkezde padişah, yeniçeriler ve toplar; sağda Anadolu, solda Rumeli askeri vardı. Birbirine zincirlenen topların önüne araba ve develerden siper kurulmuştu. Savaş, Safevî seçkin süvarisinin iki kanada birden saldırmasıyla başladı. Sağ kanatta Sinan Paşa askerini planlı biçimde geri çekip düşmanı topların önüne getirdi; Safevî kanadı dağıldı, Ustaclu Muhammed Han öldü. Sol kanatta ise azepler zamanında çekilemedi, Rumeli beylerbeyi Hasan Paşa öldü ve saflar çözüldü. Yeniçerilerin müdahalesi dengeyi değiştirdi. Tüfekle yaralanan şahın atı yere yuvarlandı. O anda şaha çok benzeyen yakını Mirza Ali, üzerine gelen Osmanlı süvarisine kendini şah olarak tanıtıp teslim oldu; asıl şah bu sayede kaçabildi.",
  sonuc:"Şahın kaçmasıyla Safevî ordusu dağıldı, ordugâhı ve hazinesi Osmanlıların eline geçti. Osmanlı tarafında da Rumeli beylerbeyi ile on sancak beyi öldü. Selim 5 Eylül'de Tebriz'e girdi, bir hafta sonra yeniçerilerin itirazıyla kışlamadan geri döndü. Ertesi yıl Kemah alındı ve Dulkadır toprakları ilhak edildi; İdrîs-i Bitlisî'nin çabasıyla Diyarbekir'den Musul'a Güneydoğu Anadolu Osmanlı idaresine geçti. Tebriz'den Halep'e ve Bursa'ya giden ipek yolu Osmanlı denetimine girdi.",
  tartisma:"İki ordunun mevcudu kaynaklarda yaklaşık olarak verilir; kesin sayı bilinmez.",
  kesinlik:"kesin",
  olay:["1514-08"],
  kaynak:"TDV: caldiran-savasi (DİA 8, 1993, s. 193-195)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-ridaniye-1517", tur:"savas-hikayesi",
  baslik:"Ridâniye Savaşı (22 Ocak 1517)",
  kisa:"Memlükler toplarını kuma gömüp pusu kurmuştu; Osmanlı ordusu o hattın önünden hiç geçmedi.",
  tarih_metin:"22 Ocak 1517 · 28 Zilhicce 922",
  yer:"Ridâniye (Reydâniye), Kahire önleri",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Yavuz Sultan Selim · Vezîriâzam Hadım Sinan Paşa · Mustafa Paşa · Küçük Sinan Paşa · yeniçeri ağası Ayas Ağa", kuvvet:"son yoklamada 20.000" },
    { ad:"Memlük ordusu", komutan:"Sultan Tomanbay · Canbirdi Gazâlî", kuvvet:"yaklaşık 20.000" }
  ],
  oncesi:"Mercidâbık'ta ölen Kansu Gavri'nin yerine Memlük emirleri, onun Kahire'de naip bıraktığı Tomanbay'ı sultan seçti. Tomanbay'ın Gazze'ye yolladığı Canbirdi Gazâlî 21 Aralık 1516'da Sinan Paşa'ya yenilince Selim Kahire üzerine yürümeye karar verdi. Çöl yolunun susuzluğundan çekinenler vardı, fakat yağan yağmurlar geçişi kolaylaştırdı. Mısır'ın bağlılık karşılığında Tomanbay'a bırakılacağını bildiren Osmanlı elçileri öldürüldü. Tomanbay Mukattam dağından Nil'e uzanan bir hendek kazdırmış, topların bir kısmını kuma gömerek sürpriz bir ateş ve ardından süvari hücumu hazırlamıştı.",
  akis:"Bu plan esirlerden, casuslardan ve Memlük hizmetinden gelen Hayır Bey'in adamlarından öğrenildi. Osmanlı ordusu 22 Ocak sabahı hendek hattına doğru ilerledi, ama top menziline girmeden yönünü Mukattam dağına çevirip hattın yanından dolaştı. Toplarını çeviremeyen Memlük askeri siperden çıkıp açık düzlükte savaşmak zorunda kaldı. Osmanlı topçu ve tüfekçilerinin yoğun ateşi Memlük sol kanadını dağıttı; ateşe karşı sürülen develer ürküp geri kaçınca kendi süvarilerini ezdi. Tomanbay ve emirleri bütün güçleriyle padişahın bulunduğu kanada yüklendi; bu hücumda Vezîriâzam Hadım Sinan Paşa ağır yaralanıp öldü. Yedi sekiz saat süren çarpışmanın sonunda Memlük ordusu dağıldı.",
  sonuc:"Memlükler 4000 dolayında, Osmanlılar biraz daha az kayıp verdi. Tomanbay 27-28 Ocak gecesi 7000 kişiyle Kahire'ye girip üç gün sokak çarpışması yürüttü, sonra şehri terk etmek zorunda kaldı. Selim 15 Şubat'ta Kahire'ye girdi; 13 Nisan 1517'de Tomanbay'ın yakalanıp idam edilmesiyle Mısır'da Osmanlı idaresi yerleşti. TDV, sonucu belirleyen etkenin Memlüklerin topa sahip olmalarına rağmen onu savaş düzeninin bir parçası saymaması olduğunu vurgular.",
  tartisma:"Bazı kaynaklar tarihi 23 Ocak verir; TDV bunu hicrî takvimdeki bir günlük kaymanın hesaba katılmamasından doğan bir hata sayar. Sinan Paşa'yı yaralayan hücum konusunda iki anlatı vardır: Canbirdi Gazâlî'nin süvari hücumu ya da Tomanbay'ın onu padişah sanıp teke tek çarpışması; TDV ikincisinin doğru olma ihtimalini zayıf bulur.",
  kesinlik:"kesin",
  olay:["1517-01-22"],
  kaynak:"TDV: ridaniye-savasi (DİA 35, 2008, s. 87-88)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-mercidabik-1516", tur:"savas-hikayesi",
  baslik:"Mercidâbık Muharebesi (24 Ağustos 1516)",
  kisa:"Sefer İran'a karşı açılmış gibi görünüyordu; asıl hedef ancak yolda ilan edildi.",
  tarih_metin:"24 Ağustos 1516, pazar · 25 Receb 922",
  yer:"Dâbık sahrası, Halep'in yaklaşık 38 km kuzeyi",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Yavuz Sultan Selim · Vezîriâzam Hadım Sinan Paşa · Anadolu beylerbeyi Zeynel Paşa · Rumeli beylerbeyi Yûsuf (Küçük Sinan) Paşa · Şehsuvaroğlu Ali Bey", kuvvet:"80.000 dolayında, 12.000'i tüfekli yeniçeri" },
    { ad:"Memlük ordusu", komutan:"Sultan Kansu Gavri · Şam nâibi Sıbay · Halep nâibi Hayır Bey", kuvvet:"70-80.000 dolayında" }
  ],
  oncesi:"Çaldıran'dan sonra Doğu Anadolu'da ilerleyen Osmanlılar, Dulkadıroğulları meselesi ve Hicaz üzerindeki nüfuz yüzünden Memlüklerle karşı karşıya gelmişti. Selim, Suriye ile Mısır'ı almanın ticaret yollarını ve kutsal şehirlerin koruyuculuğunu kendisine kazandıracağını hesaplıyordu. Kansu Gavri'nin Şah İsmâil'le temas kurması ona bir gerekçe verdi. Sefer Safevîlere karşıymış gibi başladı; Memlük sultanı ise Abbâsî halifesi ve Osmanlı şehzadesi Kasım ile birlikte Halep'e geldi. Hedefin Memlükler olduğu ağustos başında açıklandı ve sultan, Safevîleri korumakla suçlandı. Antep 18 Ağustos'ta savaşmadan teslim oldu.",
  akis:"İki ordu 24 Ağustos sabahı Dâbık sahrasında karşılaştı. Osmanlı merkezinde padişah ve kapıkulu askerleri, önlerinde birbirine zincirlenmiş yaklaşık 300 top arabası ile tüfekli yeniçeriler vardı. Memlükler ateşli silahlarını etkili kullanmadı; sonucu süvari hücumunun ve kılıcın belirleyeceğine inanıyorlardı. İlk saldırıyı onlar yaptı, iki yana açılarak Osmanlı kanatlarını sarstı. Kanatlar merkezden takviye edilince tüfek ateşi hücumu durdurdu. Şam nâibi Sıbay öldü, Halep nâibi Hayır Bey savaşın kötüye gittiğini görüp çekildi ve Osmanlı merkezi Memlük sultanının bulunduğu yere yürüdü. İkindiye kadar süren çarpışmanın sonunda Memlük ordusu dağıldı.",
  sonuc:"Kansu Gavri'nin kaçarken aniden rahatsızlanıp atından düşerek öldüğü anlaşıldı. Tutsakların arasından boyun eğmeyi reddeden emirler de dâhil olmak üzere yaklaşık 2000 Memlük askeri öldürüldü, bir kısmı ise salıverildi. Selim Halep'e girip Abbâsî halifesini iyi karşıladı; Hama, Humus ve Şam birer birer teslim oldu. Savaş Suriye, Lübnan ve Filistin'i Osmanlılara bıraktı, Mısır yolunu açtı ve Memlük Sultanlığı'nın tarihten silinişinin ilk büyük adımı oldu.",
  tartisma:"Bazı araştırmalar yenilgiyi Hayır Bey ile Canbirdi Gazâlî'nin ihanetine bağlar; TDV çağdaş kaynaklara dayanarak bunun doğru olmadığını, ikisinin padişahla temasının savaş bittikten sonra olduğunu yazar. Ordu mevcudu için kaynaklar 120.000'e varan rakamlar verse de 80.000 civarı daha olası kabul edilir.",
  kesinlik:"kesin",
  olay:["1516-08"],
  kaynak:"TDV: mercidabik-muharebesi (DİA 29, 2004, s. 174-176)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-ankara-1402", tur:"savas-hikayesi",
  baslik:"Ankara Savaşı (28 Temmuz 1402)",
  kisa:"Osmanlı sultanı esir düştü; ordusunun bir kısmı çarpışmanın ortasında karşı tarafa geçmişti.",
  tarih_metin:"büyük ihtimalle 28 Temmuz 1402, cuma",
  yer:"Çubuk ovası, Ankara",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Yıldırım Bayezid · safında 20.000 kişilik Sırp birliği", kuvvet:"Timur'un fetihnâmesine göre 70.000, Behiştî'ye göre 90.000" },
    { ad:"Timur'un ordusu", komutan:"Timur", kuvvet:"160.000, çoğu süvari; otuzdan fazla fil" }
  ],
  oncesi:"Timur'un fetihleri Anadolu'ya uzanınca aynı topraklarda hak iddia eden Osmanlılarla çatışma kaçınılmaz hâle geldi. 1399'da Bağdat'ı alan Timur'dan kaçan Celâyirli Sultan Ahmed ile Karakoyunlu Kara Yusuf, Bayezid'e sığındı; Bayezid ikisini de geri vermedi ve iki hükümdar ağır sözlerle dolu mektuplar yazıştı. Timur Sivas'ı alıp yıktı, Bayezid de Timur'a bağlanan Erzincan emirini cezalandırmak için Erzincan ile Kemah'ı aldı. Timur 1402 baharında Kemah'ın iadesi, beyliklerden alınan toprakların geri verilmesi ve Kara Yusuf'un teslimi gibi şartlar öne sürdü; hepsi reddedilince Anadolu'ya yürüdü. Bayezid İstanbul kuşatmasını kaldırıp karşısına çıktı.",
  akis:"Çoğu piyade olan ordusuyla Bayezid, Timur'u Tokat yönündeki dağlık arazide karşılamayı planlamıştı. Casuslarıyla bunu öğrenen Timur başka bir yoldan Ankara'ya gelip kaleyi kuşattı. Bayezid hızlı bir yürüyüşle beklenmedik bir yoldan Çubuk ovasına indi, ama hemen saldırmayınca Timur bir gece içinde yeni bir cephe kurdu. Çarpışma sırasında Timur'un casusları aracılığıyla önceden kendi tarafına çektiği Kara Tatarlar saf değiştirdi; Germiyan başta olmak üzere bazı beylik askerleri de Timur'un yanındaki eski beylerine katıldı. Osmanlı ordusu çözüldü. Yanında kalan 3000 kişiyle direnmeyi sürdüren Bayezid sonunda esir düştü.",
  sonuc:"Bayezid esaret altında, 8 Mart 1403'te Akşehir'de öldü. Timur'un emirleri Anadolu'yu baştan başa yağmaladı; Osmanlıların ortadan kaldırdığı beylikler yeniden canlandı. Bayezid'in oğulları arasında başlayan taht mücadelesi, yani Fetret Devri, birçok yerin elden çıkmasına ve kardeşlerin birbirinin kanını dökmesine yol açtı. TDV'ye göre bu yenilgi Anadolu'da kurulmuş siyasî birliği dağıttı, Osmanlı fetihlerini ve İstanbul'un fethini yarım yüzyıla yakın geciktirdi.",
  tartisma:"Savaşın günü kaynaklardan kesin olarak çıkmaz; TDV 28 Temmuz 1402'yi 'büyük bir ihtimalle' diye verir. Ordu mevcutları kaynaklara göre değişir.",
  kesinlik:"kesin",
  olay:["1402-07-28"],
  kaynak:"TDV: ankara-savasi (DİA 3, 1991, s. 210-211) · TDV: bayezid-i (ölüm günü ve yeri)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-nigbolu-1396", tur:"savas-hikayesi",
  baslik:"Niğbolu Savaşı (25 Eylül 1396)",
  kisa:"Haçlı şövalyeleri kazıklarla örülü bir hatta daldı; atları ordugâha boş dönünce panik başladı.",
  tarih_metin:"25 Eylül 1396 · 21 Zilhicce 798",
  yer:"Niğbolu (Nikopol) Kalesi önleri, Tuna kıyısı",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"Yıldırım Bayezid · Şehzade Süleyman · Şehzade Mustafa · Anadolu beylerbeyi Timurtaş Paşa · Evrenos Bey · Sırp vasalı Stefan Lazareviç", kuvvet:"60-80.000" },
    { ad:"Haçlı ordusu", komutan:"Macar Kralı Sigismund · Jean de Nevers (Fransız birlikleri) · Eflak voyvodası Mircea", kuvvet:"yaklaşık 100.000; Macar, Fransız, Alman, İngiliz, Leh, Çek, İtalyan, İspanyol ve Eflak askerleri" }
  ],
  oncesi:"Yıldırım Bayezid 1394'te Tuna boyunda ilerleyip Silistre ile Niğbolu'yu almış, İstanbul'u da abluka altına sokmuştu. Tehdidi yakından hisseden Macar Kralı Sigismund'un çabasıyla, Fransa ile İngiltere arasındaki ateşkesin ve Roma ile Avignon'daki iki papanın desteğiyle geniş bir Haçlı ordusu toplandı ve 1396 yazında Buda'da bir araya geldi. Sigismund temkinli bir savunma savaşından yanaydı; Batılı şövalyeler ise hızla ilerleyip Türkleri ezmek ve Kudüs'e kadar gitmek istiyordu. Haçlılar Vidin'e girdi, Rahova'yı alıp içindekilerin çoğunu öldürdü ve 10 Eylül'de Niğbolu'yu kuşattı. Kaleyi Doğan Bey savunurken Bayezid İstanbul kuşatmasını kaldırıp kuzeye yürüdü.",
  akis:"Bayezid 24 Eylül'de Niğbolu yakınında ordugâh kurdu. Ertesi gün saldırıyı Haçlılar başlattı; öncülük uzun tartışmalardan sonra Fransız şövalyelerine verildi. Osmanlı düzeninde önde hafif birlikler, onların gerisinde ucu sivri kazıklardan bir hat ve okçular vardı. Geri çekilen öncüleri izleyen ağır zırhlı süvariler kazıklara ve oklara takıldı, atlarını kaybeden şövalyeler yaya kaldı. Başıboş dönen atları gören Macarlar Fransızların yok edildiğini sanınca Haçlı ordugâhında panik başladı. Fransızlar önlerindeki Rumeli birliklerini bozsa da yamaca doğru ilerlerken sol kanattaki Osmanlı kuvvetleri tarafından çevrildi. Sigismund'un son hücumu, Stefan Lazareviç'in Sırp birliklerinin yetişmesiyle püskürtüldü.",
  sonuc:"Jean de Nevers başta olmak üzere birçok soylu esir alındı; sağ kalanlar fidyeleri ödenince ülkelerine dönebildi. Sigismund bir kayıkla Tuna'daki Haçlı gemilerine ulaşarak kaçtı ve İstanbul'dan geçip Venedik'e gitti. Klasik anlamda son Haçlı seferi sayılan bu bozgun Bayezid'e İslâm dünyasında büyük şöhret kazandırdı, Osmanlıların Tuna'ya uzanan hâkimiyetini sağlamlaştırdı ve Macaristan'ı daha büyük bir tehdidin karşısında bıraktı.",
  tartisma:"Batı kaynaklarının Osmanlı ordusu için verdiği 200-400.000 rakamlarını TDV doğru bulmaz; mevcudun 80.000'e ulaşmamış olabileceğini belirtir. Kayıplar için kesin rakam yoktur; tahminler Osmanlı tarafı için 30.000 dolayında, Haçlılar için daha fazladır. Bayezid'in gece kale önüne kadar gidip dizdarla konuştuğuna dair anlatının doğruluğu şüphelidir.",
  kesinlik:"kesin",
  olay:["1396-09"],
  kaynak:"TDV: nigbolu-savasi (DİA 33, 2007, s. 89-92)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-kosova-1389", tur:"savas-hikayesi",
  baslik:"I. Kosova Savaşı (1389)",
  kisa:"Savaşı Osmanlılar kazandı, ama padişah savaş alanından sağ dönmedi.",
  tarih_metin:"15 Haziran 1389 (Batı kaynakları) · 19 Cemâziyelâhir 791",
  yer:"Kosova ovası",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"I. Murad · Şehzade Bayezid (sağ kanat) · Şehzade Yâkub (sol kanat)", kuvvet:"30.000'i biraz aşan; bağlı Anadolu beyliklerinin ve Balkan beylerinin askerleriyle" },
    { ad:"Müttefik Balkan ordusu", komutan:"Lazar · Vuk Brankoviç · Bosna Kralı Tvrtko'nun birlikleri", kuvvet:"Osmanlı ordusuna denk" }
  ],
  oncesi:"1371'deki Çirmen zaferinden sonra Sırp hükümdarı Lazar, I. Murad'ın üstünlüğünü tanımak zorunda kalmıştı. 1388'de Osmanlı birliklerinin Bosna Kralı Tvrtko karşısında yenilmesi ve Lazar ile Tvrtko arasında kurulan Osmanlı karşıtı iş birliği, Murad'ı doğrudan Lazar üzerine yürümeye yöneltti. Lazar'ın çevresinde Sırp, Boşnak, Hırvat, Arnavut, Bulgar, Macar ve Çek savaşçılardan oluşan bir ordu toplandı. Murad'ın ordusunda ise ona bağlı Anadolu beylikleriyle Balkan beylerinin askerleri de yer alıyordu.",
  akis:"Osmanlı ordusu savunma düzeninde bekledi; saldırıyı süvari gücü yüksek müttefik ordusu yaptı. Enverî'nin anlatımına göre ağır süvari hücumu okçular tarafından dağıtıldı. Çarpışma üç aşamada gelişti: ilk hücumun ardından müttefik saflarının dağılması, Vuk Brankoviç ile Tvrtko'nun birliklerinin savaş alanından çekilmesi ve son aşamada iki hükümdarın ölümü. Savaşın kazanıldığı anlaşıldıktan sonra I. Murad, yanında az kişi varken hançerlenerek öldürüldü. Esir düşen Lazar da ardından idam edildi. Ordugâhta tahta çıkarılan Bayezid, bir iç savaşa yol açmaması için kardeşi Yâkub'u öldürttü.",
  sonuc:"Kesin askerî başarı Osmanlıların oldu: Balkanlardaki yerel beylerin direnişi kırıldı, güneye inmenin ve Kuzey Sırbistan'a uzanmanın yolu açıldı. Uzun vadede savaş, Osmanlıların Balkanların güneyine yerleşmesine ve bölgenin toplumsal, ekonomik ve siyasî yapısının değişmesine zemin hazırladı. Sırp tarihyazımında ise Kosova, millî kimliğin oluşumunda merkezî bir destanın konusu oldu; 1989'da savaşın 600. yılı için Kosova ovasında düzenlenen tören, Yugoslavya'nın dağılmasına giden olayların başlangıç noktalarından biri sayılır.",
  tartisma:"Tarih tartışmalıdır: Batı kaynaklarındaki 15 Haziran 1389 eski takvime dayandığı için yeni takvimde 28 Haziran'a denk geldiği ileri sürülür. Murad'ın öldürülüşü farklı anlatılır: Osmanlı kaynakları yaralı gibi yaklaşan birinin suikastından söz eder; Enverî hançerleyenin, daha önce padişahın hizmetinde bulunup sonra kaçmış Miloş adlı bir Sırp beyi olduğunu yazar; Sırp ve Batı kaynakları ise önceden planlanmış bir saldırı anlatır. Brankoviç'in ihanetiyle savaşın kaybedildiği ve Bayezid'in suikastta parmağı olduğu iddialarını TDV dayanaksız bulur. Bazı Sırp kaynakları savaşı Sırp zaferi sayar.",
  kesinlik:"tartismali",
  olay:["1389-06-15"],
  kaynak:"TDV: kosova-savaslari (DİA 26, 2002, s. 221-224) · TDV: bayezid-i (Yâkub'un öldürülmesi)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-varna-1444", tur:"savas-hikayesi",
  baslik:"Varna Muharebesi (10 Kasım 1444)",
  kisa:"Tahttan çekilmiş bir sultan orduya geri çağrıldı; meydandan ayrılmayı reddetmesi savaşın gidişini değiştirdi.",
  tarih_metin:"10 Kasım 1444 · 28 Receb 848",
  yer:"Varna yakınları, Balkan dağlarının doğu etekleri",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"II. Murad · Anadolu beylerbeyi Karaca Bey · Rumeli beylerbeyi Şehâbeddin Şahin Paşa", kuvvet:"40.000 civarı" },
    { ad:"Haçlı ordusu", komutan:"Macar ve Leh Kralı Vladislav (I. Ulászló) · János Hunyadi · Kardinal Cesarini · Eflak prensi Vlad Drakul", kuvvet:"15.000 atlı ve biraz daha az piyade, 2000 araba; Eflak'tan 4000 asker" }
  ],
  oncesi:"1439'da Floransa'da kiliselerin birleşmesi kararlaştırılınca Papalık, Türkleri Balkanlardan çıkarmak için yeni bir Haçlı seferini desteklemeye başladı. János Hunyadi'nin 1442-1444 başarıları bu umudu büyüttü. II. Murad barış istedi ve Segedin'de bir antlaşma yapıldı; ardından yenilgilerin yükü, oğlu Alâeddin'in ölümü ve sükûnetin sağlandığı düşüncesiyle tahtı küçük oğlu II. Mehmed'e bıraktı. Ancak Papalık temsilcisi Kardinal Cesarini'nin yönlendirmesiyle Macar kralı 4 Ağustos 1444'te savaş ilan etti, bir Haçlı donanması da Çanakkale Boğazı'nı tuttu. Edirne'de telaş başlayınca II. Murad yeniden ordunun başına geçti ve Ceneviz gemileriyle İstanbul Boğazı'ndan karşıya geçti.",
  akis:"Haçlı ordusu Tuna'yı aşıp Şumnu'yu ve Karadeniz kıyısındaki kaleleri aldı, Varna önünde donanmayı beklemeye koyuldu. İki ordu 10 Kasım sabahı karşılaştı ve bir süre birbirini gözledi. Macarların sağ kanadı Osmanlının Anadolu kolunu çökertti; Anadolu beylerbeyi Karaca Bey çarpışırken öldü. Rumeli kolunda Dâvud Bey geri çekilir gibi yapıp ani bir dönüşle Nagyvárad piskoposunun birliğini yok etse de bu kanatta da dağılma başladı. Çekilme önerilerine rağmen meydanda kalan II. Murad'ı yeniçeriler kuşatıp korudu. Tam o sırada genç kral 500 atlıyla merkeze saldırdı; atı hendeğe düşünce yeniçeriler tarafından öldürüldü. Kralın ölümü Haçlı ordusunda paniğe yol açtı, toparlanan Osmanlı birlikleri yeniden saldırdı.",
  sonuc:"Kardinal Cesarini kaçış sırasında öldü, Hunyadi Eflak'a çekildi. İki taraf da 7-8000 civarında kayıp verdi. Zafer, II. Murad'ın içerideki otoritesini yeniden güçlendirdi; Hıristiyan dünyasında Osmanlıların Avrupa'dan çıkarılabileceği inancını sarstı ve kiliselerin birleşmesinden yardım bekleyen Bizans'ın umudunu boşa çıkardı. Hunyadi ise rövanş için hazırlanmayı sürdürdü.",
  tartisma:"Segedin'de varılan uzlaşmanın kalıcı bir antlaşma sayılıp sayılamayacağı, yoksa kısa süreli bir silah bırakışması mı olduğu tartışılır; Macar kralının metne yemin edip etmediği de açık değildir. II. Murad adına yazılan fetihnâme kralın yaralı olarak ordugâha getirilip başının vurulduğunu söyler; bu bilgi dönemin öteki kaynaklarıyla çelişir. Kralın kesik başının zafer nişanesi olarak gönderildiği bir rivayettir.",
  kesinlik:"kesin",
  olay:["1444-11-10"],
  kaynak:"TDV: varna-muharebesi (DİA 42, 2012, s. 527-530)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-kosova-1448", tur:"savas-hikayesi",
  baslik:"II. Kosova Savaşı (Ekim 1448)",
  kisa:"Varna'nın rövanşını almaya gelen Hunyadi, savaş arabalarının koruması altında ancak kaçabildi.",
  tarih_metin:"17 Ekim 1448'de başladı, üç gün sürdü · 18 Şâban 852",
  yer:"Kosova ovası",
  taraflar:[
    { ad:"Osmanlı ordusu", komutan:"II. Murad", kuvvet:"en iyimser tahminle 50.000 dolayında" },
    { ad:"Macar ordusu", komutan:"János Hunyadi (Osmanlı kaynaklarında Yanko)", kuvvet:"30-35.000; 8000 Eflak askeri ile Alman ve Çek paralı askerler dâhil" }
  ],
  oncesi:"Varna yenilgisinden sonra Macaristan'ın naibi János Hunyadi rövanş için yeni bir ittifak kurmaya çalıştı, ama Papalık, Venedik, Aragon ve Napoli'den destek alamadı. II. Murad ise 1448 yazında Arnavutluk'ta İskender Bey'e karşı sefer hâlindeydi ve Akçahisar'ı kuşatıyordu. Hunyadi, İskender Bey'le birleşmeyi de umarak harekete geçti. Sırp despotu Curac Brankoviç topraklarından geçmesine izin vermedi; Hunyadi yine de eylül sonunda Sırbistan'a girip Morava vadisine yöneldi. Haberi alan Murad kuvvetlerini Sofya'da toplayıp Kosova ovasına ilerledi.",
  akis:"Hunyadi'nin vurucu gücünü ağır zırhlı süvariler ve üzerlerinde top taşıyan savaş arabaları oluşturuyordu. Osmanlı düzeninde sağda Anadolu, solda Rumeli süvarileri, merkezde azep ve yeniçerilerin koruduğu padişah vardı; merkezin önünde bir hendek, kalkanlı ve mızraklı bir hat, develer ve toplar yer alıyordu. 17 Ekim'de başlayan ilk gün iki taraf birbirini yoklayan çarpışmalarla geçti; Osmanlılar Anadolu kolunu savaşa sokmayıp dinlendirdi. İkinci gün Macar süvarileri yeniçerilerin tuttuğu hatta ulaşıp onu yardı, fakat çekilmeyen yeniçeriler bu süvarileri çevirip destekten kopararak yok etti. Dinç Osmanlı kuvvetleri Macar ordusunun sol kolunu da kuşatıp bozdu; Eflak birlikleri savaş alanını terk etti. Üçüncü gün Macar ordusu dağılmıştı.",
  sonuc:"Macar ordusunun önde gelen komutanlarından bir kısmı öldü, çoğu esir düştü. Yardıma gelen İskender Bey savaş bittikten sonra yetişti ve geri döndü. Hunyadi kaçarken Sırplara esir düştü, sonra serbest bırakıldı. TDV'ye göre bu savaş Macarların Balkanlardaki etkisinin sonu oldu: Eflak üzerindeki Macar nüfuzu sarsıldı, Osmanlı hâkimiyeti pekişti ve Varna ile birlikte yeni bir Haçlı ittifakının önü kesilerek İstanbul'un fethi yaklaştı.",
  tartisma:"Osmanlı ordusunun mevcudu kaynaklarda abartılıdır; TDV en iyimser tahminin 50.000 civarı olduğunu belirtir. Hunyadi'nin savaş arabalarının sayısı kaynaklara göre 800 ile 2000 arasında değişir. Savaşa bizzat katılan tarihçi Âşıkpaşazâde muharebenin iki günde bittiğini yazar.",
  kesinlik:"kesin",
  olay:["1448-10-17"],
  kaynak:"TDV: kosova-savaslari (DİA 26, 2002, s. 221-224)",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];

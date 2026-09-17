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

// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —
// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.
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
  olay:["1570-07-23","1571-10-07","1572-06-01","1572-06-13","1573-03-07","1574-08-25"],
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
  olay:["1537-10-01","1538-09"],
  kaynak:"TDV: preveze-deniz-muharebesi (DİA 34, 2007, s. 343-345)",
  gorsel:null, gorsel_kaynak:"aranmadı" },

{ id:"savas-cerbe-1560", tur:"savas-hikayesi",
  baslik:"Cerbe Deniz Savaşı ve Kalenin Fethi (1560)",
  kisa:"Deniz savaşı üç günde bitti; ada ise ancak iki buçuk ay sonra el değiştirdi.",
  tarih_metin:"11-14 Mayıs 1560 deniz savaşı · 30 Temmuz 1560 kalenin fethi",
  yer:"Cerbe (Djerba) adası, Tunus'un doğusunda Gabes körfezi",
  taraflar:[
    { ad:"Osmanlı donanması ve Trablusgarp kuvvetleri", komutan:"Kaptanıderyâ Piyâle Paşa · Trablusgarp beylerbeyi Turgut Paşa (Reis) · donanmada Uluç Ali Reis", kuvvet:"120 kadırga" },
    { ad:"İspanya yönetiminde müttefik Hıristiyan donanması", komutan:"", ic_not_komutan:"eski komutan: bulunamadı — okunan iki TDV maddesi komutanın adını vermiyor", kuvvet:"sayıca Osmanlı donanmasından kalabalık" }
  ],
  oncesi:"Cerbe, Turgut Reis'in Batı Akdeniz akınlarında kullandığı bir üstü. Asıl hedefi Trablusgarp olan müttefik Haçlı donanması fırtınalar ve salgınlar yüzünden ancak 1560 başlarında adaya ulaşabildi; 12 Mart 1560'ta adayı ele geçirip burada sağlam bir kale yaptırdı. Turgut Reis hazırlıkları önceden İstanbul'a bildirmişti. Piyâle Paşa 120 kadırgalık donanmayla 28 Mart'ta İstanbul'dan çıktı, Modon'da ikmal yaptı, Malta yakınlarındaki Gozo adasını yağmaladıktan sonra Cerbe'ye yöneldi.",
  akis:"İki donanma arasındaki çatışma 11 Mayıs'ta başladı ve üç gün sürdü. Osmanlı donanmasının ikiye ayrılarak yaptığı manevra, kalabalık müttefik filosunu 14 Mayıs'ta dağıttı. Arşiv kaydına dayanan anlatıya göre müttefiklerin on dokuz kadırgası ele geçirildi, yirmi altı barçası tahrip edildi ve bir kısım gemi adadaki kaleye sığındı. Denizdeki yenilginin ardından müttefik askerleri kendi yaptıkları Cerbe Kalesi'ne kapandı. Kale karadan Turgut Paşa'nın kuvvetleri, denizden donanma tarafından kuşatıldı. İspanyol, İtalyan, Alman ve Maltalı askerlerin savunduğu kale yaklaşık iki ay dayandı ve 30 Temmuz 1560'ta düştü.",
  sonuc:"Ada Trablusgarp beylerbeyiliğine bağlandı, kalesi onarıldı. Piyâle Paşa eylül sonunda İstanbul'a döndü; beraberindeki esirler, ele geçirilen gemiler ve tutsak amiraller halkın ve padişahın gözü önünde karşılandı. Paşa bu başarı üzerine Şehzade Selim'in kızı Gevherhan Sultan'la evlendirildi. TDV'nin değerlendirmesiyle Cerbe, Barbaros'un Preveze'de başlattığı Akdeniz'deki Osmanlı üstünlüğünü pekiştiren zaferdir.",
  tartisma:"Müttefik kayıpları iki TDV maddesinde farklıdır: 'Cerbe' maddesi yetmişe yakın geminin batırıldığını ve yirmi kadarının ele geçirildiğini rivayet olarak aktarır; 'Piyâle Paşa' maddesi arşiv belgesine dayanarak on dokuz kadırga ve yirmi altı barça verir. Deniz zaferi bazı kronolojilerde 11 Mayıs'ta, bazılarında 14 Mayıs'ta durur; ikisi aynı üç günlük çatışmanın başı ve sonudur.",
  kesinlik:"kesin",
  olay:["1560-03-12","1560-05-14","1560-07-30"],
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
  olay:["1526-08-29","1526-09-01"],
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
  olay:["1514-08","1514-09-06","1514-09-15","1515-05-19","1515-06-13","1515-09-19"],
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
  olay:["1516-12-21","1517-01-22|Ridaniye","1517-01-27","1517-02-15","1517-04-13"],
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
  olay:["1516-07-30","1516-08","1516-08-28","1516-08-29","1516-09-27"],
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
  olay:["1399-11-01","1400-08-01","1401-02-01","1402-03-13","1402-07-28","1402-08-01|Şehzade","1402-09-15","1403-03-09"],  // PAKET-A2 13 Eyl: 1402-08-01'de 'Kara Yûsuf Bursa'dan Hille'ye gitti' maddesi de vardı
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
  olay:["1395-01-01|Niğbolu","1396-09-25"],  // PAKET-A2 13 Eyl: 1395-01-01'de 6 madde (Altın Orda, Atina, Memlük…), yalnız Niğbolu'nun fethi ilgili
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
  olay:["1388-08-27","1389-06-15"],
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
  olay:["1444-06-12","1444-11-10"],
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
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ══ PAKET-A2 (13 Eylül 2026) · paket 0032 H-0014 — OTRANTO ════════════════
// Rapor: denetim/PAKET-A2-EKOKUMA-0913.md · denetim: denetim/ARAC-A2-BAG-0913.js
// Bağ günlerinin ikisinde de ikişer madde var (olaylar_ek.js + kronoloji_italya.js),
// ikisi de AYNI olayı anlatıyor — "|Otranto" ayırıcısı ikisine de düşer, bilerek.
{ id:"savas-otranto-1480-1481", tur:"savas-hikayesi",
  baslik:"Otranto: çıkarma, on üç aylık işgal ve tahliye (1480-1481)",
  kisa:"İtalya'ya ayak basan tek Osmanlı ordusu bir yıldan fazla dayandı — sonunu bir meydan yenilgisi değil, gelmeyen yardım getirdi.",
  tarih_metin:"Apulia'ya çıkarma 28 Temmuz 1480 · Otranto'nun alınışı 11 Ağustos 1480 · şehrin boşaltılması 10 Eylül 1481",
  yer:"Otranto ve Apulia (Osmanlı kaynaklarında Pulya), Güney İtalya",
  taraflar:[
    { ad:"Osmanlı kuvvetleri", komutan:"Gedik Ahmed Paşa (1480 çıkarması) · Hayreddin Bey (1481'de şehirde bırakılan garnizon)", kuvvet:"Şehirde bırakılan garnizon 8000 kişi; çıkarma ordusunun toplam büyüklüğü bilinmiyor", ic_not_kuvvet:"eski: okunan kaynaklarda bulunamadı" },
    { ad:"Napoli Krallığı", komutan:"Kral I. Ferdinand (Ferrante) · oğlu Calabria Dükü Alfonso", kuvvet:"Alfonso'ya 1480'de verilen ordu 20.000 kişi; 1481 kuşatmasında karadan yerli birlikler, denizden Aragon kralının 40 gemisi" }
  ],
  oncesi:"Venedik'le 1479'da barış yapıldıktan sonra Fâtih Sultan Mehmed'in gözü, siyasî birliği olmayan İtalya'ya çevrildi. Aynı yıl Gedik Ahmed Paşa Kefalonya, Zanta ve Ayamavra'yı almış, Adriyatik'in karşı kıyısı Osmanlı'nın en yakın hedefi hâline gelmişti. Sefer öncesinde Papa IV. Sixtus ile Napoli kralı Floransa'ya karşı birleşmiş, Toskana'da savaşa tutuşmuşlardı; bu iç çatışma Osmanlı için uygun bir an sayıldı. Seferin asıl amacı konusunda kaynaklar aynı şeyi söylemez: Osmanlı kronikleri Arnavutluk'taki direnişi kırmayı öne çıkarır, bazı görüşler Venedik'in teşvikinden, bazıları da Fâtih'in İtalya'yı içine alan büyük bir fetih tasavvurundan söz eder.",
  akis:"Donanma Temmuz 1480'de Avlonya'dan yola çıktı ve 28 Temmuz'da Apulia kıyısına asker indirdi. Tursun Bey'in anlatımına göre Otranto surları bir süre direndi, ancak toplarla aşıldı; şehir 11 Ağustos'ta alındı. Kale savaşla alındığı için direnenlerin önde gelenlerinden bir kısmı idam edildi, bir kısmı esir düştü (ölenlerin sayısı ayrı bir tartışma kartında). Osmanlılar yıkılan surları onarıp şehri bir üsse çevirdi ve Lecce, Brindisi, Taranto yönüne akınlar yaptı; Alfonso'nun ordusu akıncıları durduramadı. Gedik Ahmed Paşa ertesi baharın büyük seferini hazırlamak için 8000 kişiyi Hayreddin Bey'in emrinde bırakıp Avlonya'ya döndü. Fâtih'in ölüm haberi (3 Mayıs 1481) ona orada ulaştı. Paşa donanma ve Otranto'daki askere yardım istedi; istek kabul edilmediği gibi kendisi de geri çağrıldı. Napoli kralı Arnavutluk'taki isyancıları destekleyip damadı Macar Kralı Matthias Corvinus'tan yardım isteyerek garnizonun ikmal yolunu kesti. Şehir karadan ve denizden altı ay kadar kuşatıldı; yiyecek ve su tükenince garnizon teslim oldu ve Otranto 10 Eylül 1481'de boşaltıldı.",
  sonuc:"İtalya'daki tek Osmanlı köprübaşı on üç ay sonra elden çıktı; Güney İtalya'da tutunma imkânı tamamen kayboldu, Epir ve Arnavutluk'ta da hâkimiyet bir süre sarsıldı. İbn Kemal ve Angiolello'ya göre esir düşen Osmanlı askerleri daha sonra Napoli kralının ordusuna alındı. II. Bayezid'den çekinen Napoli kralı barış istedi; ardından esirlerin karşılıklı geri verilmesini ve iki tarafın tebaasına ticaret serbestliği tanınmasını öngören bir anlaşma yapıldı. Fâtih'in İtalya'yı hedefleyen tasarısı onun ölümüyle birlikte kapandı.",
  tartisma:"Kaybın sebebi tartışmalıdır. TDV'nin Gedik Ahmed Paşa ve II. Bayezid maddeleri Otranto'nun düşüşünü doğrudan, yardım isteğinin reddine ve Cem Sultan'la başlayan taht mücadelesine bağlar. Aynı ansiklopedinin Otranto Seferi maddesi ise 'Bayezid Otranto'yla hiç ilgilenmedi' yorumunu tam isabetli bulmaz: yeni padişah, Gedik Ahmed Paşa'nın yerine İtalya ve Arnavutluk işleri için Rumeli Beylerbeyi Hadım Süleyman Paşa'yı görevlendirmişti; sonuç alınamamasının sebebi Napoli destekli Arnavut isyanıydı. Seferin niçin sürdürülmediği sorusu ayrıca 'Merak' kartında işleniyor.",
  kesinlik:"kesin",
  olay:["1480-08-11|Otranto","1481-09-10|Otranto"],
  kaynak:"TDV: otranto-seferi (Metin Ziya Köse) · TDV: gedik-ahmed-pasa · TDV: bayezid-ii (tahliye sonrası anlaşma)", ic_not_kaynak:"eski kaynak: TDV: otranto-seferi (Metin Ziya Köse; gövde okundu, HTTP 200) · TDV: gedik-ahmed-pasa (gövde okundu, HTTP 200) · TDV: bayezid-ii (gövde okundu, HTTP 200 — tahliye sonrası anlaşma) · ⚠️ 'otranto' ve 'otranto-kusatmasi' 302 ÖLÜ",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ══ PAKET-A2 (13 Eylül 2026) · paket 0045 H-0007 — SAVAŞ HİKÂYELERİ, DALGA 3 ══════════
// Budin 1541 · Haçova 1596 · Prut 1711 · Çeşme 1770 · Plevne 1877. Nizip 1839 ve Sinop 1853
// YAZILMADI (Nizip: TDV'de müstakil madde yok, akış/kuvvet bulunamadı · Sinop: TDV `sinop`
// baskını "1854 başları" diye tarihliyor, çekirdek madde 1853-11-30 — rapor §H-0007).
// Telif denetimi: denetim/ARAC-A2-KOPYA-0913.js; ilk taslakta Budin (12 kelime) ve Plevne
// (10 kelime) cümleleri yeniden yazıldı. Kaynakta OLMAYAN sayı: 0 (elle çözüldü: "elli sekiz",
// "kırk-elli", "50-100.000" biçim farkları).
{
  "id": "savas-budin-1541",
  "tur": "savas-hikayesi",
  "baslik": "Budin'in Alınışı ve Eyalete Dönüşü (1541)",
  "kisa": "Habsburg kuşatmasından kurtarılmak için sefere çıkılan şehir, himaye altındaki bir krallığın başkenti olmaktan çıkarılıp doğrudan bir Osmanlı beylerbeyiliğinin merkezi yapıldı.",
  "tarih_metin": "26 Ağustos 1541 (4 Cemâziyelevvel 948) Budin önlerine varış · 2 Eylül 1541 padişahın şehre girişi",
  "yer": "Budin (Buda), Tuna kıyısı, orta Macaristan",
  "taraflar": [
    {
      "ad": "Osmanlı ordusu",
      "komutan": "Kanûnî Sultan Süleyman",
      "kuvvet": "", "ic_not_kuvvet": "eski kuvvet: bulunamadı — okunan TDV gövdeleri sayı vermiyor"
    },
    {
      "ad": "Habsburg kuvvetleri (Budin'i kuşatan taraf)",
      "komutan": "Ferdinand (Habsburg)", "ic_not_komutan": "çıkarılan: sahadaki komutanın adı okunan gövdelerde geçmiyor",
      "kuvvet": "", "ic_not_kuvvet": "eski kuvvet: bulunamadı"
    },
    {
      "ad": "Budin'deki Szapolyai çevresi",
      "komutan": "Szapolyai'nin bebek oğlu küçük kral Sigismund · annesi dul kraliçe · piskopos Martinuzzi",
      "kuvvet": "", "ic_not_kuvvet": "eski kuvvet: bulunamadı"
    }
  ],
  "oncesi": "Mohaç yenilgisinin ardından Budin 11 Eylül 1526'da anahtarlarını Kanûnî'ye teslim etmiş, Macar soyluları ise tahta iki ayrı aday çıkarmıştı: bir kısmı János Szapolyai'yi (10 Kasım 1526), bir kısmı V. Karl'ın kardeşi Habsburg Ferdinand'ı (17 Aralık 1526) seçti. Ferdinand Ağustos 1527'de Buda'yı alınca Szapolyai padişahtan yardım istedi; Kanûnî Viyana üzerine yürürken şehri kısa bir mücadeleyle geri alıp Szapolyai'ye bıraktı. Denge 1540'ta bozuldu. Szapolyai 20 Temmuz 1540'ta öldüğünde geride birkaç günlük bir oğul vardı; ama iki yıl önce Ferdinand'la gizlice anlaşmış, vârissiz ölürse tahtın ona geçeceğini kabul etmişti. Ferdinand bu anlaşmaya dayanıp bütün Macaristan'ı istedi ve Mayıs 1541'de Budin'i kuşattı. Osmanlı yönetimi sınırın Tuna'da değil Budin'in batısında ve kuzeyinde olması gerektiği görüşündeydi; padişah yeniden Macaristan'a yürümeye karar verdi.",
  "akis": "Kanûnî 26 Ağustos 1541'de Budin önlerine ulaştı; padişahı şehrin dışında Szapolyai'nin bebek yaştaki oğlu Sigismund, onun dul annesi ve piskopos Martinuzzi karşıladı. Ferdinand'ın kuşatma kuvvetleriyle nasıl bir çarpışma yaşandığı kaynaklarda anlatılmaz. Belirleyici an bir meydan savaşı değil, bir el koyuştu: padişah veliahdı ve önde gelen Macar soylularını sur dışındaki otağına davet ettiği sırada yeniçeriler şehrin kilit noktalarını tuttu. Budin'in yalnız veliahd erginlik çağına gelinceye dek Osmanlı elinde kalacağı açıklandı; buna karşın şehre hemen bir beylerbeyi atandı ve merkeze bağlı yeni bir eyalet kuruldu. Küçük krala Erdel tarafının idaresi bırakıldı. Padişah 2 Eylül'de şehre girdi, Budin'in artık bir Osmanlı şehri olduğunu simgeleyen törenler yaptırdı ve yönetim atamalarını yaptı.", "ic_not_akis": "eski: okunan TDV gövdelerinde anlatılmıyor.",
  "sonuc": "Budin, tâbi bir Macar krallığının başkenti olmaktan çıkıp doğrudan yönetilen bir beylerbeyilik merkezine dönüştü; Kanûnî'nin Macaristan'da himaye siyasetinden kalıcı ilhaka geçişinin işaretidir. Habsburgların 1542'deki kalabalık ordulu geri alma denemesi başarısız kaldı. Mevâcib defterlerine göre kalede 1543'te 2965 Osmanlı muhafızı bulunuyordu. Şehir 1686'daki kuşatmayla elden çıkana kadar Osmanlı idaresinde kaldı.",
  "tartisma": "① Gün: TDV'nin I. Süleyman maddesi Budin önüne varışı 26 Ağustos, şehre girişi 2 Eylül 1541 olarak veriyor; yaygın olarak anılan 29 Ağustos 1541 günü bu maddelerde geçmez. ② TDV'nin Budin maddesi eyaletin kuruluşunu yalnız yıl düzeyinde (948/1541) veriyor. ③ Kuşatmanın Osmanlı ordusu gelince nasıl kaldırıldığı ve iki tarafın kuvvetleri kaynaklarda verilmez.", "ic_not_tartisma": "eski ifadeler: «atlasın bağlı maddelerindeki 29 Ağustos 1541 günü okunan TDV gövdelerinde (`budin`, `suleyman-i`) geçmiyor — o günün kaynağı ayrıca sınanmalı» · «okunan gövdelerde yok»",
  "kesinlik": "kesin",
  "olay": [
    "1541-08-29|Budin'in ilhakı",
    "1541-08-29|Budin'in fethi — Macaristan",
    "1541-08-29|Budin'in Osmanlı tarafından fethi"
  ],
  "kaynak": "TDV: budin · TDV: suleyman-i", "ic_not_kaynak": "eski kaynak: TDV: budin (gövde okundu, HTTP 200) · TDV: suleyman-i (gövde okundu, HTTP 200) · ölü: budin-eyaleti (302) · kuvvet sayıları ve kuşatmanın kaldırılış biçimi: bulunamadı",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

{
  "id": "savas-hacova-1596",
  "tur": "savas-hikayesi",
  "baslik": "Haçova Meydan Savaşı (26 Ekim 1596)",
  "kisa": "Merkezi yarılıp ağırlıkları yağmalanan Osmanlı ordusu, padişahın sahadan ayrılmaması sayesinde toparlandı ve bozguna dönmek üzere olan günü kesin bir zaferle kapattı.",
  "tarih_metin": "25 Ekim 1596 ilk çarpışmalar · 26 Ekim 1596 asıl muharebe (1004)",
  "yer": "Haçova (Mezőkeresztes) ovası ve bataklığı, Eğri yakını, kuzey Macaristan",
  "taraflar": [
    {
      "ad": "Osmanlı ordusu",
      "komutan": "III. Mehmed · Vezîriâzam Damad İbrâhim Paşa · pîşdar Cigalazâde Sinan Paşa · Rumeli kuvvetlerinin başında Sokulluzâde Hasan Paşa · padişahın hocası Sâdeddin Efendi · Kırım kuvvetleri",
      "kuvvet": "TDV: müttefik orduyla 'hemen hemen aynı sayıda'; ayrı bir rakam verilmiyor"
    },
    {
      "ad": "Avusturya imparatorluk ordusu ve müttefikleri (Alman, İspanyol, papalık, Floransa, Macar, Çek, Leh birlikleri)",
      "komutan": "Arşidük Maximilian · Erdel Voyvodası Zsigmond Báthory",
      "kuvvet": "50.000–100.000 (TDV aralık olarak veriyor)"
    }
  ],
  "oncesi": "Eflak, Boğdan ve Erdel'deki 1593 karışıklıklarıyla yeniden alevlenen Osmanlı-Habsburg savaşının (Uzun Harp) ilk yılları Osmanlılar için verimsiz geçmiş, stratejik Estergon 2 Eylül 1595'te kaybedilmişti. Babasının yerine yeni geçen III. Mehmed, yeniçerilerin baskısıyla, Kanûnî'den bu yana ordunun başında sefere çıkan ilk padişah oldu ve 20 Haziran 1596'da İstanbul'dan ayrıldı. Hedef olarak Osmanlıların daha önce alamadığı Eğri seçildi; yaklaşık 3400 muhafızı ve yedi topu olan kale, 170 topla kuşatılıp üç haftalık mücadeleden sonra 12 Ekim'de teslim oldu. Bu sırada Arşidük Maximilian ile Báthory'nin birleşik kuvvetleri Eğri'yi kurtarmak üzere yola çıkmış, yetişemeyince Osmanlı ordusuna saldırmak için fırsat kollamaya başlamıştı. Keşfe gönderilen Hadım Câfer Paşa 22 Ekim'de Haçova'da kalabalık müttefik ordusuyla çarpışıp kayıpla geri çekilince karargâhta moral bozuldu; kışın yaklaştığı öne sürülerek dönmek bile konuşuldu. Sâdeddin Efendi'nin teşvikiyle ileri gidilmesine karar verildi; ordu 24 Ekim'de Eğri'den çıktı ve iki taraf 25 Ekim'de karşı karşıya geldi.",
  "akis": "25 Ekim ikindisi küçük gruplar arasında başlayan çatışmalar ertesi gün genel muharebeye dönüştü. Osmanlı ordusu klasik düzende dizilmişti: merkezde padişah ve vezirler, kanatlarda Anadolu ve Rumeli askeri; önde birbirine zincirle bağlanmış toplardan bir savunma hattı vardı. Bataklığın gerisinde duran imparatorluk ordusunu yerinden oynatmak için Cigalazâde Sinan Paşa ileri atıldı, fakat ikindiye kadar top ve tüfek ateşiyle uzak tutuldu. İkindi vakti müttefikler alaylar hâlinde hücuma geçti: önce Sokulluzâde Hasan Paşa'nın Rumeli askerinden oluşan sağ kanat dağıldı, ardından merkezdeki hat yarıldı ve saldırganlar karargâhtaki ağırlıkları, hazine ve eşya sandıklarını yağmalamaya koyuldu. Tehlike padişahın çadırına kadar yaklaştı; İbrâhim Paşa ve bazı vezirler çekilmeyi, hatta padişahı kılık değiştirterek kaçırmayı önerdi. Sâdeddin Efendi, padişahın meydandan ayrılmasının ordunun dağılması anlamına geleceğini söyleyerek III. Mehmed'i yerinde tuttu; padişah sırtında Hırka-i Saâdet, dizinde Peygamber'e nispet edilen kılıçla sancağın altında kaldı. Yağmaya dalmış saldırganlar karargâhtaki hizmetli sınıfı tarafından kolayca geri atıldı. Padişahın yerinden kıpırdamadığını gören birlikler toparlanıp karşı hücuma geçti; müttefik ordusu panikle kaçmaya başladı ve büyük kısmı bataklığa sürülerek yok edildi.",
  "sonuc": "Osmanlı ordusunun zaferle biten en büyük meydan savaşlarından biri oldu; çağın tarihçileri onu Çaldıran ve Mohaç'ın bile üstünde tuttu. Buna karşın 1606'ya kadar süren savaşın gidişini askerî ya da siyasî bakımdan Osmanlı lehine çevirmedi. Cigalazâde Sinan Paşa 27 Ekim'de vezîriâzam yapıldı ve bir yoklama yaptırdı; savaştan kaçtığı ya da savaşa hiç katılmadığı belirlenenlerin dirlikleri ve ulûfeleri kesildi. Geçim kaynağını yitiren bu askerlerin Anadolu'da Celâlî gruplarına katılması iç karışıklıkları büyüttü. Padişahın İbrâhim Paşa'yı azledip Cigalazâde'yi getirme hamlesi de sarayda Safiye Sultan çevresince kısa sürede geri çevrildi. Savaşın kaba bir krokisi bugün Topkapı Sarayı Müzesi Arşivi'nde (E. 5539) bulunuyor.",
  "tartisma": "① Tarih: TDV `hacova-meydan-savasi` ilk çarpışmayı 25, asıl muharebeyi 26 Ekim 1596'ya koyarken TDV `cigalazade-sinan-pasa` savaşı '23-25 Ekim 1596' diye tarihliyor. ② Rivayet (TDV `mehmed-iii` aktarıyor): İbrâhim Paşa taraftarı tarihçi Hasanbeyzâde Ahmed ile ondan nakleden Solakzâde, Kâtib Çelebi ve Naîmâ, padişahın Eğri'den sonra İstanbul'a dönmek istediğini ve komutayı vezîriâzama bırakan bir yazı gönderdiğini, İbrâhim Paşa, Sâdeddin Efendi ve Gazanfer Ağa'nın onu kalmaya ikna ettiğini (24-25 Ekim) yazar; seferde bulunan öteki tarihçiler böyle bir olayı anmaz. ③ Kuvvet: müttefik ordusu için 50.000 ile 100.000 arasında geniş bir aralık veriliyor.",
  "kesinlik": "kesin",
  "olay": [
    "1596-10",
    "1596-10-26|Haçova bozgunu",
    "1596-10-26|Kırım kuvvetleri",
    "1596-10-12",
    "1596-06-20"
  ],
  "kaynak": "TDV: hacova-meydan-savasi · TDV: mehmed-iii · TDV: egri · TDV: cigalazade-sinan-pasa", "ic_not_kaynak": "eski kaynak: TDV: hacova-meydan-savasi (gövde okundu, HTTP 200) · TDV: mehmed-iii (gövde okundu, HTTP 200) · TDV: egri (gövde okundu, HTTP 200) · TDV: cigalazade-sinan-pasa (gövde okundu, HTTP 200) · ölü: hacova-meydan-muharebesi, hacova, hacova-savasi, hacova-muharebesi, mezokeresztes (302)",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

{
  "id": "savas-prut-1711",
  "tur": "savas-hikayesi",
  "baslik": "Prut Savaşı (19-21 Temmuz 1711)",
  "kisa": "Prut kıyısında Tatar süvarisi ile sadrazamın ordusu arasında sıkışan Çar I. Petro teslimin eşiğine geldi; ama ordusu silahlarıyla serbest bırakıldı ve bu karar o günden beri tartışılıyor.",
  "tarih_metin": "19 Temmuz 1711 kuşatma ve ilk çarpışma · 21 Temmuz 1711 antlaşmanın imzası · 23 Temmuz Rus ordusunun çekilişi (1123)",
  "yer": "Prut nehri kıyısı, Huşi sahrası dolayları, Boğdan",
  "taraflar": [
    {
      "ad": "Osmanlı ordusu ve Kırım kuvvetleri",
      "komutan": "Serdâr-ı ekrem Sadrazam Baltacı Mehmed Paşa · Kırım Hanı II. Devlet Giray · sadrazamın kâhyası Osman Ağa",
      "kuvvet": "toplam bilinmiyor; Rus karargâhına ulaşan habere göre İsakça'dan Tuna'yı geçen öncü kuvvet 40.000 (TDV, Râşid'e dayanarak)", "ic_not_kuvvet": "eski: toplam: bulunamadı"
    },
    {
      "ad": "Rus ordusu",
      "komutan": "Çar I. Petro · başkumandan Mareşal Şeremetyev · generaller Janus ve Rhenne · müttefiki Boğdan Voyvodası Dimitrie Cantemir",
      "kuvvet": "bilinmiyor; Osmanlı karargâhına Rus ordusu hakkında abartılı haberler ulaşıyordu", "ic_not_kuvvet": "eski kuvvet: bulunamadı — TDV sayı vermiyor; Osmanlı karargâhına Rus ordusu hakkında abartılı haberler geldiğini belirtiyor"
    }
  ],
  "oncesi": "1700 İstanbul barışıyla Azak'ı elinde tutan Rusya Karadeniz'e çıkmanın yolunu arıyordu. Petro önce İsveç'e yöneldi; Büyük Kuzey Savaşı'nın bir evresinde İsveç Kralı XII. Karl (Demirbaş Şarl) Poltava'da yenildi ve Ağustos 1709'da yaralı hâlde Osmanlı topraklarına sığındı. Konuk kralın İstanbul'daki çabaları, sadrazam değişiklikleri ve Rusya'nın barış şartlarına uymaması ilişkileri gerdi. 18 Ağustos 1710'da ikinci kez sadrazam olan Baltacı Mehmed Paşa, Kırım Hanı Devlet Giray başta olmak üzere devlet ileri gelenlerini savaşa karar vermiş buldu; sarayda 20 Kasım 1710'da toplanan büyük meclis savaş kararı aldı. Amaç Azak'ı geri almak ve Kırım'ı tehdit eden Özü boyundaki Rus kalelerini yıktırmaktı. Baltacı 19 Şubat 1711'de serdâr-ı ekrem oldu ve 9 Nisan'da İstanbul'dan çıktı. Rus ordusu Boğdan voyvodası Cantemir'le anlaşıp Yaş'a kadar geldi, ama yeterli erzak bulamadı, halktan da destek görmedi; Şeremetyev kuvvetlerini bölerek Janus ve Rhenne'yi iaşe aramaya gönderdi. Sadrazam haziranın son günlerinde İsakça'da Tuna'yı geçti.",
  "akis": "Tatar süvarisinin Prut'un sol kıyısındaki Huşi tepelerinde görünmesi, Petro'yu ikmal ve haberleşme yollarının kesileceği kaygısıyla ilerlemekten vazgeçirdi. Siret'e doğru çekilmeyi düşündü, ama aç ve yorgun askerleri, yemsizlikten her gün yüzlercesi ölen hayvanlarıyla bunu yapamadı. Savunmaya elverişli bir mevzi bulmak için kuzeye dönerken nehri yüzerek geçen Tatarların saldırısına uğradı ve tamamen kuşatıldı (19 Temmuz). Sadrazamın ordusu aynı gece kurulan köprüden geçip çarpışmaya katıldı; akşam karanlığına dek süren ilk gün Rusların direnişiyle geçti. Ertesi gün nehrin öbür yakasındaki birlikler de yetişip toplar devreye girince Rus ordugâhında umut söndü, yer yer beyaz bayrak açıldı. Çar, esir düşerse kendisinin hükümdar sayılmamasını isteyen bir emirnâme hazırladı; yarma hücumu önerisi, çarın da esir düşebileceği kaygısıyla reddedildi. Kançılar muavini Şafirov'un, çariçe Katerina'nın da desteklediği ateşkes teklifi benimsendi. Osmanlı karargâhında toplanan meşveret meclisi görüşmeye izin verdi; Şafirov ile mareşalin oğlu Mihail Şeremetyev ordugâha geldi ve pazarlık yirmi dört saat içinde bitti. Kırım Hanı'nın ve İsveç kralının temsilcisi Poniatowski'nin, Rus ordusunun birkaç gün içinde savaşmadan teslim olacağı uyarıları dinlenmedi. Antlaşma 21 Temmuz'da imzalandı, 22'sinde çar tarafından onaylandı, 23'ünde karşılıklı verildi; Rus ordusu aynı gün top ve tüfekleriyle, bayrakları açık, davul ve müzik eşliğinde çekildi. Kral Karl ordugâha ancak iş bittikten sonra yetişebildi.",
  "sonuc": "Prut Amannâmesi diye bilinen mütareke belgesine göre Azak arazisi ve mühimmatıyla geri verilecek; Taygan, Kamenka ve Samara kıyısındaki Yenikale yıkılacak; Rusya Lehistan'a ve Kazaklara karışmayacak; İstanbul'a tüccar gelebilecek ama elçi yerleşmeyecek; Müslüman esirler bırakılacak ve İsveç kralının ülkesine dönüşüne engel olunmayacaktı. Asıl barışın İstanbul'da yapılması öngörüldü. Aynı günlerde General Rhenne'nin İbrail'i teslim aldığı (23 Temmuz) haberi, askerin tepki göstermesinden korkulduğu için gizlendi. Barıştan sonra ağır suçlamalarla karşılaşan Baltacı 20 Kasım 1711'de azledilip sürgüne gönderildi; kâhyası Osman Ağa, Mektupçu Ömer Efendi ve Çavuşlar Kâtibi Abdülbâki 25 Aralık 1711'de idam edildi. Hükümlerin uygulanması sürüncemede kaldı; Rusya ancak yeni savaş ilanları ve tehditlerle 24 Haziran 1713 Edirne Antlaşması'na bağlanabildi. Petro'nun Voronej ve Azak'ta on altı yılda kurduğu düzen boşa gitti; TDV, dayandığı literatürle, Rusya'nın Karadeniz'e açılımının en az yarım yüzyıl geciktiğini belirtir.",
  "tartisma": "① Günler: TDV `prut-antlasmasi` kuşatmayı 19, imzayı 21, çarın onayını 22, teatiyi 23 Temmuz olarak veriyor; TDV `baltaci-mehmed-pasa` ise iki ordunun karşılaşmasını 18 Temmuz'a, antlaşmayı 22 Temmuz 1711'e koyuyor. ② Hediyeler: Rus ordugâhından toplanıp sadrazama gönderilen para, kürk ve mücevherin altı araba tuttuğu ve değerinin en az 200.000 duka altın kabul edildiği aktarılır; TDV, bu anlatının ve özellikle Katerina'nın rolünün zamanla abartılıp bir efsaneye dönüştüğünü vurgular, bununla birlikte hediyelerin barışın beklenmedik hızında önemli bir etken olduğunu da açık sayar. ③ 'Kaçırılan fırsat' mı, 'hesaplı siyaset' mi: bir görüşe göre çar esir alınabilir, ordusu silahsızlandırılabilirdi; öteki görüşe göre Rusya'yı tümden ezmek İsveç'i güçlendirecek ve Osmanlı çıkarına olmayacaktı. TDV iki tezi de aktarıyor. ④ Sürgün: `prut-antlasmasi` yalnız Limni diyor; `baltaci-mehmed-pasa` önce Midilli (Aralık 1711), sonra Limni (Temmuz 1712) sırasını veriyor.",
  "kesinlik": "kesin",
  "olay": [
    "1711-07-19",
    "1711-07-21|Prut Antlaşması — Azak",
    "1713-06-24|Rusya ile Edirne"
  ],
  "kaynak": "TDV: prut-antlasmasi · TDV: baltaci-mehmed-pasa", "ic_not_kaynak": "eski kaynak: TDV: prut-antlasmasi (gövde okundu, HTTP 200) · TDV: baltaci-mehmed-pasa (gövde okundu, HTTP 200) · ölü: prut-seferi, prut, prut-savasi (302) · iki ordunun toplam kuvveti: bulunamadı",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

{
  "id": "savas-cesme-1770",
  "tur": "savas-hikayesi",
  "baslik": "Çeşme Baskını (6-7 Temmuz 1770)",
  "kisa": "Rus filosunun önünden çekilip dar Çeşme limanına sığınan Osmanlı donanması, bir gecede ateş kayıklarıyla yakıldı; yalnız kaptanıderyânın gemisi kurtulabildi.",
  "tarih_metin": "5 Temmuz 1770 (11 Rebîülevvel 1184) limanın kuzeyindeki ilk çarpışma · 6-7 Temmuz 1770 limandaki baskın",
  "yer": "Çeşme Limanı ve kuzeyindeki açıklar (Koyun adaları, Toprak adası), İzmir kıyısı",
  "taraflar": [
    {
      "ad": "Osmanlı donanması",
      "komutan": "Kaptanıderyâ Hüsâmeddin Paşa · sağ kanat kumandanı Cezayirli Hasan Bey · Rodos Beyi Câfer Bey",
      "kuvvet": "toplam bilinmiyor; limanda yakılan gemi 'otuz kadar'", "ic_not_kuvvet": "eski: toplam: bulunamadı"
    },
    {
      "ad": "Rus donanması",
      "komutan": "Amiral Spiridov · İngiliz Amiral Elphinston · Aleksey Orlov ve kardeşi Theodore Orlov",
      "kuvvet": "bilinmiyor; filo İngiliz desteğiyle Akdeniz'e çıkmıştı", "ic_not_kuvvet": "eski kuvvet: bulunamadı — TDV sayı vermiyor; filonun İngiliz desteğiyle Akdeniz'e çıktığını belirtiyor"
    }
  ],
  "oncesi": "1768'de başlayan Osmanlı-Rus savaşında Rusya, Mora Rumlarını ayaklandırmak amacıyla donanmasını İngiliz desteğiyle Akdeniz'e çıkardı; filo 1770 başlarında Mora açıklarında faaliyete geçti. İlkbaharda Avrupa üzerinden kara yoluyla gelen Orlov kardeşlerin katılmasıyla güçlenen Rus donanması, Mora Seraskeri Muhsinzâde Mehmed Paşa'ya yardıma gönderilen Hüsâmeddin Paşa'nın filosunu Anabolu (Nauplia) önlerinde ve Suluca (Hydra) açıklarında başarısızlığa uğrattı. Osmanlı donanması Ege adaları arasından çekilip Sisam Boğazı'nı geçti ve Çeşme'nin kuzeyindeki Koyun adalarına vardığında Spiridov'un filosuyla yeniden karşılaştı. 5 Temmuz'da Çeşme limanının kuzeyinde, Toprak adasının güneydoğusunda hilal biçiminde savaş düzenine girildi. Çarpışmada Cezayirli Hasan Bey'in gemisi ile Spiridov'un gemisi alev alınca, ateşin kendilerine sıçramasından çekinen öteki gemiler iki taraftan da savaş alanından uzaklaştı.",
  "akis": "Cezayirli Hasan Bey karşı çıktığı hâlde Hüsâmeddin Paşa ile Câfer Bey donanmayı manevra alanı bulunmayan Çeşme limanının içine soktu; gemiler kıyıya yerleştirilen topların koruması altında birbirine çok yakın demirleyip savunma savaşına hazırlandı. Rus filosu bu fırsatı kaçırmadı: 6 Temmuz'da limanın ağzını kapattı ve içeriye ateş kayıkları saldı. Sıkışık demirlemiş Osmanlı gemilerinden otuz kadarı alevler içinde kaldı. 7 Temmuz sabahı donanmadan geriye yalnız Kaptanıderyâ Hüsâmeddin Paşa'nın baştardası kalmıştı; o da Sakız adasına kaçarak kurtuldu.",
  "sonuc": "Osmanlı tarafı donanmasının hemen tamamını ve 5000 dolayında askerini yitirdi. Yaralanan Câfer Bey ile Cezayirli Hasan Bey kara yoluyla İstanbul'a döndü, Hüsâmeddin Paşa kaptanıderyâlıktan alındı. II. Katerina, Aleksey Orlov'a 'Çeşmeski' unvanını verdi ve zaferin anısına Rusya'da bir anıt diktirdi. Önünde engel kalmayan Rus filosu Ege'de serbestçe dolaştı ve Çanakkale Boğazı'nı ablukaya aldı; ancak iyi tahkim edilmiş Boğaz'ı geçmeyi göze alamadı, Limni'ye asker çıkarıp kaleyi kuşatmakla yetindi ve Cezayirli Hasan Bey'in yetişmesiyle ada kurtarıldı. Abluka Osmanlı ticaretine ancak kısmen zarar verdi; fakat Rus filosunun 1774'e kadar Ege ve Akdeniz'deki varlığı Küçük Kaynarca Antlaşması'nın imzalanmasında önemli bir etken oldu.",
  "tartisma": "① Kuvvet: Kaynaklar iki filonun gemi ve asker mevcudunu vermez. ② Tarih: TDV'nin Çeşme Vak'ası maddesi ilk çarpışmayı 5 Temmuz, liman baskınını 6 Temmuz, sonucu 7 Temmuz sabahı olarak anlatıyor; III. Mustafa maddesi baskını '6-7 Temmuz 1770' diye tarihliyor — iki madde uyumlu. ③ Sorumluluk: TDV donanmanın limana sokulması kararını Hüsâmeddin Paşa ile Câfer Bey'e bağlıyor ve Hasan Bey'in buna karşı çıktığını yazıyor.", "ic_not_tartisma": "eski ifadeler: «bu kart sayı yazmadı» · «Hasan Paşa'nın kendi TDV maddesinin gövdesi çekilemediği için bu, ikinci bir kaynakla karşılaştırılamadı»",
  "kesinlik": "kesin",
  "olay": [
    "1770-07-06"
  ],
  "kaynak": "TDV: cesme-vakasi · TDV: mustafa-iii", "ic_not_kaynak": "eski kaynak: TDV: cesme-vakasi (gövde okundu, HTTP 200) · TDV: mustafa-iii (gövde okundu, HTTP 200) · tuzak: cesme (HTTP 200 ama madde su yapısı 'çeşme'dir, olay değil) · hasan-pasa-cezayirli (HTTP 200, madde gövdesi gelmedi) · ölü: cesme-baskini, cesme-savasi, gazi-hasan-pasa-cezayirli, hasan-pasa--cezayirli, gazi-hasan-pasa (302) · kuvvet sayıları: bulunamadı",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

{
  "id": "savas-plevne-1877",
  "tur": "savas-hikayesi",
  "baslik": "Plevne Savunması (Temmuz – 10 Aralık 1877)",
  "kisa": "Vidin'den yetişen bir kolordu küçük bir kasabayı toprak tabyalarla kaleye çevirdi, üç büyük taarruzu geri attı ve beş ay dayandıktan sonra ancak açlık ve başarısız bir yarma denemesiyle teslim oldu.",
  "tarih_metin": "7 Temmuz 1877 Plevne'ye varış · 8 ve 18 Temmuz I. ve II. muharebeler · 7-11 Eylül III. muharebe · Eylül ortasından itibaren kuşatma · 10 Aralık 1877 yarma harekâtı ve teslim (TDV'deki günler; takvim notu için bk. tartışma)",
  "yer": "Plevne (Pleven), Vid ırmağının kolu Tuçenitsa çayı kıyısı, Tuna'nın yaklaşık 30 km güneyi, kuzey Bulgaristan",
  "taraflar": [
    {
      "ad": "Osmanlı Vidin kolordusu",
      "komutan": "Müşir Osman Nûri Paşa (savunma sırasında 'gazi' unvanı verildi)",
      "kuvvet": "varışta 25.000 (yirmi beş tabur piyade, altı süvari bölüğü) · II. muharebede 33.000 muharip ve 58 top · yarma günü 40.000 nefer"
    },
    {
      "ad": "Rus ordusu ve Romen ordusu",
      "komutan": "Grandük Nikola · Batı Ordusu kumandanı General Krüdener · General Schilder (I. muharebe) · kuşatmada General Totleben · General Gurko · Çar II. Aleksandr",
      "kuvvet": "II. muharebede yaklaşık 60.000 ve 40-50 top · III. muharebede 100.000'i aşkın piyade ve süvari, 432 top"
    }
  ],
  "oncesi": "Rusya 24 Nisan 1877'de savaş ilan ettiğinde Osman Paşa, Sırp ve Rumenlerin olası hareketlerine karşı Vidin'de, Tuna cephesi serdârıekremi Abdülkerim Nâdir Paşa'nın emrinde bulunuyordu. Bir yıl önce Sırp savaşında kazandığı başarılarla ün yapmış ve müşir olmuştu. Ruslar Tuna'yı ciddi bir direnişle karşılaşmadan geçince Osman Paşa 1 Temmuz sabahı 25.000 kişiyle Niğbolu'yu kurtarmak ve Balkanlar'a doğru sarkan Rusların önünü kesmek için yola çıktı; yolda aldığı acil emirle Plevne'ye yöneldi ve 7 Temmuz'da kasabaya ulaştı. Sofya, Orhaniye, Lofça ve Bulgarani yollarının kavşağındaki bu küçük kasabada hemen sahra istihkâmları kurdurdu, avcı hendekleri kazdırdı ve toplarının çoğunu toprak siperlerin gerisine yerleştirdi.",
  "akis": "Grandük Nikola, ordusunun sağ yanında böyle bir kuvvet bırakmamak için saldırı emri verdi. İlk hamleyi 8 Temmuz'da General Schilder yaptı: istihkâmları bitmemiş, takviyesi gelmemiş ve uzun yürüyüşten yorgun çıkan Osmanlı birliklerini mevzilerinden atmak istedi, ama başaramadı; Ruslar savaşa soktukları kuvvetin yarısını, yetmiş dördü subay 3000 kadar ölü verdi (I. Plevne). Takviye alan Krüdener 18 Temmuz sabahı yeniden saldırdı; güneş batana dek süren çarpışmanın ardından Osman Paşa'nın ertesi akşamki karşı hücumu Rusları bozguna uğrattı, kaçanların bir kısmı Osma deresinde boğuldu (II. Plevne). Başarının arkasında topları istihkâmlara yerleştirip adeta seyyar tabyalar gibi kullanmak, piyadeyi toprak siperlerin ardına gizlemek ve Osmanlı askerinin elindeki Martini-Henry tüfekleriyle bol cephane vardı. Romen ordusunu da yanına alan Ruslar, 7 Eylül sabahından 11 Eylül sabahına kadar gece gündüz süren ağır bir topçu ateşinin ardından 11 Eylül'de genel taarruza kalktı; sabahtan akşama kadar süren bu hücum da sonuçsuz kaldı (III. Plevne). Şehri savaşla alamayacaklarını anlayan Ruslar kuşatmaya geçti ve komutayı General Totleben'e verdi; Gurko'nun Gurno-Dubnik ve Teliş mevzilerini almasıyla Plevne'nin bağlantısı tamamen kesildi. Erzakın tükenmek üzere olduğunu gören Osman Paşa teslim yerine yarma harekâtını seçti: 10 Aralık sabahı ordusunu ikiye ayırıp ilk Rus istihkâmlarına saldırdı. Birinci fırka üç büyük istihkâm ve on bir kadar top ele geçirdiyse de ihtiyatta bekleyen 20.000 kişilik kuvvet zamanında yetişemeyince hücum çözüldü. Vid suyuna doğru çekilme emri verdiği sırada atı şarapnelle vuruldu, kendisi sol bacağından yaralandı; önden ve arkadan sarılan ordunun direnemeyeceğini gören Osman Paşa, maiyetindeki komutanların ısrarıyla teslim oldu.",
  "sonuc": "Kayıp dengesi çok eşitsizdi: Osman Paşa'nın raporuna göre II. muharebe Ruslara 8000'den fazla ölüye ve bunun iki üç katı yaralıya, Osmanlılara ise 100 şehit ve 300 kadar yaralıya mal oldu; III. muharebede Rus kaybı üç general ve 350 subay dahil 15.550, Osmanlı şehit ve yaralısı 3-4000'di. Eylül ortasına gelindiğinde Rusların yalnız Plevne önündeki ölü ve yaralısı 50.000'e yaklaşmıştı. III. muharebeden sonra II. Abdülhamid Osman Paşa'ya 'gazi' unvanını verdi. Esir düşen paşa Rusya'da tutuldu, çar tarafından nişanla onurlandırıldı ve 12-13 Mart 1878'de törenle İstanbul'a döndü. Plevne'nin düşüşü Ruslara İstanbul yolunu açtı; savunmanın askerî kazancı ilerleyişi bir süre durdurmakla sınırlı kaldı, ama bütün Osmanlı ülkesinde yeni bir direniş ve millî heyecan dalgası yarattı, Avrupa kamuoyunda da geniş yankı buldu. Kuşatma sırasında harap olan şehrin Müslüman nüfusu savaştan sonra göç etti ve üçte ikisi evine dönemedi.",
  "tartisma": "① Takvim: TDV I. ve II. muharebeleri 8 ve 18 Temmuz, III. muharebeyi 7-11 Eylül, teslimi 10 Aralık 1877 olarak veriyor. Temmuz çarpışmaları başka yayınlarda 12 gün sonrasıyla anılabiliyor; bu fark Jülyen (Rus/Rumî) ile Gregoryen takvim farkına denk düşer. ② Kayıplar: II. muharebe sayıları Osman Paşa'nın kendi raporuna dayanıyor, yani tek taraflı. ③ Kuşatmanın başlangıcı: TDV'nin Gazi Osman Paşa maddesi 13 Eylül der; Plevne Muharebeleri maddesi gün vermez. ④ Komuta: TDV'nin Plevne maddesi Rus-Romen ordusunun başında Çar II. Aleksandr'ın bizzat bulunduğunu söylüyor; Plevne Muharebeleri maddesi harekâtı Grandük Nikola'nın emirleriyle anlatıyor.", "ic_not_tartisma": "eski ifadeler: «DOĞRULANMALI» · «TDV'nin bütün günleri aynı takvimle verip vermediği bu kartta akademik bir kaynakla sınanmadı. Bağlı '1877-07-19' maddesinin günü okunan TDV gövdelerinde geçmiyor.»",
  "kesinlik": "kesin",
  "olay": [
    "1877-07-19|Plevne savunmasının",
    "1877-12-10|Plevne'nin düşüşü: Tuna",
    "1877-12-10|Plevne'nin düşüşü — Gazi"
  ],
  "kaynak": "TDV: plevne-muharebeleri · TDV: gazi-osman-pasa · TDV: plevne", "ic_not_kaynak": "eski kaynak: TDV: plevne-muharebeleri (gövde okundu, HTTP 200) · TDV: gazi-osman-pasa (gövde okundu, HTTP 200) · TDV: plevne (gövde okundu, HTTP 200) · ölü: plevne-muharebesi, plevne--sehir, 93-harbi, osmanli-rus-savasi-1877-1878, osman-pasa--topal (302) · osman-pasa-gazi (HTTP 200, madde gövdesi gelmedi)",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

// ══ PAKET-EK2 (13 Eylül 2026) · paket 0048 H-0008 KANİJE + H-0006 HAÇOVA ═══════════════
// Kaynak: TDV `kanije` (Géza Dávid bibliyografyalı şehir maddesi) · `tiryaki-hasan-pasa` ·
// `mehmed-iii` · `hacova-meydan-savasi` · `cigalazade-sinan-pasa` · `celali-isyanlari`
// (hepsi 13 Eylül'de çekildi, HTTP 200, gövde okundu). Ölü: `kanije-muhasarasi` denenmedi —
// şehir ve kişi maddesi yetti. Haçova: A2'nin `savas-hacova-1596` kartı muharebeyi anlatıyor;
// buradaki kart YALNIZ yoklama → firari → Celâlî tartışmasını işler, akışı tekrarlamaz.
// `kaynak` alanı son kullanıcıya görünür; çalışma notları bu yorumda durur.
{
  "id": "savas-kanije-1601",
  "tur": "savas-hikayesi",
  "baslik": "Kanije Savunması (10 Eylül – 18 Kasım 1601)",
  "kisa": "Bir yıl önce alınmış, surları henüz onarılmamış bir sınır kalesi; yardım gelmeyen bir garnizon ve yetmiş gün sonra kuşatmayı kaldırıp çekilen kalabalık bir Habsburg ordusu.",
  "tarih_metin": "9-10 Eylül 1601 Habsburg ordusunun kale önüne gelişi · 17-18 Kasım 1601 kuşatmanın kaldırılışı (22 Cemâziyelevvel 1010)",
  "yer": "Kanije (Nagykanizsa), Batı Macaristan, Transdanubya",
  "taraflar": [
    {
      "ad": "Kanije'deki Osmanlı kuvvetleri",
      "komutan": "Kanije Beylerbeyi Tiryâkî Hasan Paşa · kethüdâsı İskender Bey",
      "kuvvet": "9000 kişi (TDV `tiryaki-hasan-pasa`)"
    },
    {
      "ad": "Habsburg ordusu ve müttefikleri",
      "komutan": "Prens (Arşidük) Ferdinand",
      "kuvvet": "bilinmiyor; kaynaklar yalnız 'kalabalık' der", "ic_not_kuvvet": "eski kuvvet: bulunamadı — okunan kaynaklar yalnız 'kalabalık' diyor"
    }
  ],
  "oncesi": "Kanije, Macar Kanizsai ailesinin iki yüzyıl elinde tuttuğu, XIII. yüzyıl sonunda yapılmış bir kaleydi. 1566'da hemen yakınındaki Sigetvar Osmanlılara geçince önemi birden arttı: kale doğrudan Habsburg kralına devredildi, bölgenin ünlü Macar komutanı György Thury buraya atandı ve kaleye iki yeni 'İtalyan tipi' burç eklendi. Uzun Harp sırasında Sadrazam Damad İbrâhim Paşa 1600 yazında Macaristan'a geldi. O sırada görevsiz olup Peçuy'da oturan Tiryâkî Hasan Paşa orduya katıldı; Ösek'teki savaş meclisinde (22 Ağustos 1600) önce Bobofça'nın, Bobofça vire ile teslim olunca (5 Eylül) Kanije'nin alınmasını savundu. Kale kırk günden fazla direndi ve anlaşmayla teslim oldu (20 ya da 22 Ekim 1600). Serbestçe çıkan Avusturyalı komutan Georg Paradeiser, kaleyi teslim ettiği için kendi tarafınca ölüme mahkûm edildi. Kanije hemen Sigetvar ve Peçuy'un bağlandığı yeni bir eyaletin merkezi yapıldı. Tiryâkî Hasan Paşa kış sonunda Belgrad'a gidip kendini buraya beylerbeyi atattı; yeni görevine geldiğinde Damad İbrâhim Paşa'nın öldüğü haberini aldı (10 Temmuz 1601). Kethüdâsını Belgrad'a yollayıp yeni serdarın Kanije'yi ihmal etmemesini ve askerle güçlendirmesini rica etti.",
  "akis": "Habsburg birlikleri 9 Eylül 1601'de kale önüne geldi. Hasan Paşa elindeki kuvvetle kalabalık orduya karşı direndi ve düşmanın genel hücumlarını geri püskürttü. Beklenen yardım gelmedi; kuşatma uzadıkça savunma giderek zorlaştı. Güz ilerleyip hava şartları kötüleşince bu kez kuşatan taraf sıkıştı. Hasan Paşa bu anı değerlendirerek kaleden bir çıkış harekâtı (huruç) yaptırdı ve Habsburg birliklerini ağır biçimde sarstı. Kayıpların büyüklüğü karargâhta bozgun havası yarattı ve Ferdinand'ın ordusu kuşatmayı kaldırıp çekildi. Yetmiş gün süren kuşatma böylece bir Osmanlı zaferiyle kapandı.",
  "sonuc": "Haber İstanbul'da büyük yankı uyandırdı. III. Mehmed Hasan Paşa'ya vezirlik hasları bağladı; üç değerli hil'at, kılıç ve üç at gönderdi. Paşayı ve bütün gazileri kutlayan hatt-ı hümâyununda onu 'ihtiyar kulum' ve 'müdebbir vezirim' diye andı. Hasan Paşa hemen kaleyi onarttı: top gülleleriyle yıkılan duvarlar eskisinden kalın yapıldı, yeni bir minare ve mescid, beylerbeyi sarayı ve cephane binası eklendi. Kuşatmacılardan ele geçen topların kalede bırakılmayıp Belgrad'a, mümkünse İstanbul'a götürülmesini, çünkü Boğaz'daki törenlerde kullanılacak kalitede olduklarını önerdi. Savunma serhad askeri için uzun süre bir moral kaynağı olarak anıldı. Kanije doksan yıl Osmanlı elinde kaldı: 1690'da 60.000 kişilik bir Habsburg ordusunun sıkı ablukası altında, hiçbir yerden yardım alamayan muhafızlar vire ile teslim oldu.",
  "tartisma": "① Günler iki TDV maddesinde farklı: `kanije` teslimi 20 Ekim 1600, kuşatmayı 10 Eylül – 17 Kasım 1601 olarak veriyor; `tiryaki-hasan-pasa` ve `mehmed-iii` teslimi 22 Ekim 1600 (13 Rebîülâhir 1009), kuşatmanın kaldırılışını 18 Kasım 1601 (22 Cemâziyelevvel 1010) olarak veriyor; ordunun kale önüne gelişi de 9 Eylül. ② Kanije'nin ilk beylerbeyi: `kanije` maddesi ilk atanan Hasan Paşa'nın Tiryâkî ile aynı kişi olup olmadığının rivayet çelişkileri yüzünden anlaşılamadığını söylüyor; `tiryaki-hasan-pasa` ilk atamayı Alacaetli Arnavut Hasan Paşa'ya veriyor ve Tiryâkî'nin sonradan atandığını anlatıyor. ③ Garnizonun büyüklüğü: `tiryaki-hasan-pasa` 9000 kişi diyor; Kanije Kalesi'nin olağan muhafız kadrosu ise `kanije` maddesine göre 1400 kadardı. ④ Savunma Osmanlı tarihlerinde türlü rivayetlerle ve destansı bir üslupla anlatılır (Peçuylu); gazavatnâmelerdeki kahramanlık sahneleri bu kartta kullanılmadı. ⑤ Çağdaşı Edirneli Mehmed paşayı olumsuz sıfatlarla anar; dönemin öteki müellifleri cesaretini, sabrını ve titizliğini över.",
  "kesinlik": "kesin",
  "olay": [
    "1600-10-20|Kanije",
    "1601-09-10|Kanije"
  ],
  "kaynak": "TDV: kanije · TDV: tiryaki-hasan-pasa · TDV: mehmed-iii",
  "gorsel": null,
  "gorsel_kaynak": "aranmadı"
},

{ id:"kahramanlik-kanije-destani", tur:"kahramanlik",
  baslik:"Kanije müdafaası nasıl bir destana dönüştü?",
  kisa:"Bir sınır kalesinin yetmiş günlük direnişi önce gazavatnâmelere, sonra Nâmık Kemal'in kaleminden bir kitaba, oradan XX. yüzyılın gazete tefrikalarına geçti.",
  metin:"Eski Türk edebiyatında Kanije üzerine yazılan ilk eserler, Tiryâkî Hasan Paşa'nın savunmasını anlatan gazavatnâmelerdir. Bunların çoğu müellifi bilinmeyen mensur metinlerdir ve genellikle 'Gazavât-ı Tiryâkî Hasan Paşa' adını taşır. Yazarı bilinenler arasında Ahmed b. Osman b. Sânî'nin 'Menâkıb-ı Tiryâkî Hasan Paşa'sı, Câfer İyânî'nin 'Cihâdnâme-i Hasan Paşa'sı ve 1600 seferine baştezkireci olarak katılmış olan tarihçi Hasanbeyzâde Ahmed Paşa'nın 'Kanije Fetihnâmesi' vardır.\n\nMuhtemelen Kafzâde Fâizî'ye ait 'Hasenât-ı Hasan', Nâmık Kemal'in 'Kanije' adlı kitabının aslını oluşturdu. Eser önce Ahmed Nâfiz takma adıyla (h. 1290), sonra Nâmık Kemal adıyla (h. 1303) basıldı; Hakkı Tarık Us 1941'de sadeleştirip Vakit gazetesinde tefrika etti ve 'Nâmık Kemal'in Kanije Muhasarası' adıyla kitaplaştırdı. Vahit Çabuk da gazavatnâmelerden birini sadeleştirerek 'Tiryaki Hasan Paşa'nın Gazaları ve Kanije Savunması' adıyla yayımladı (1978).\n\nİstanbul'un tepkisi de destanın parçasıdır: padişah kutlama hatt-ı hümâyununda paşayı 'ihtiyar kulum' ve 'müdebbir vezirim' diye andı, gazilerin hepsini kutladı. Bugün Nagykanizsa'da doksan yıllık Osmanlı dönemini hatırlatan tek eser, kaleyi 1690'da teslim eden son vali Mustafa Paşa'nın bir kiliseye yerleştirilmiş mezar taşıdır.",
  not:"Gazavatnâme ve roman anlatıları, çağdaş kroniklerle karşılaştırılmadan olgu sayılmamalıdır; TDV bu anlatıların destansı bir üslupla ve türlü rivayetlerle aktarıldığını belirtir.",
  kesinlik:"kesin",
  olay:["1601-09-10|Kanije","1690-04-13|Kanije"],
  kaynak:"TDV: kanije · TDV: tiryaki-hasan-pasa" },

{ id:"tartisma-hacova-firarileri-celali", tur:"tartisma",
  baslik:"Haçova'dan kaçanlar Celâlî mi oldu? — bir yoklamanın bedeli",
  kisa:"Zaferin ertesi günü yeni sadrazam orduyu saydırdı ve yerinde olmayan 30.000 kişinin dirliğini kesti. Bu kararın Anadolu'yu ateşe verip vermediği hâlâ tartışılır.",
  metin:"Haçova zaferinin ertesi günü (27 Ekim 1596) vezîriâzamlığa getirilen Cigalazâde Sinan Paşa, tımar sahipleri ve maaşlı askerler arasında bir yoklama yaptırdı. Savaştan kaçtığı ya da savaşa hiç katılmadığı belirlenen 30.000 kişinin dirlikleri ve ulûfeleri kesildi, bunlar ağır cezalara çarptırıldı. Karar çok eleştirildi; Cigalazâde bir buçuk ay kadar sonra sadaretten alındı. Geçim kaynağını yitiren askerlerin ne yaptığı konusunda TDV'nin maddeleri iki farklı vurgu yapar.\n\nGörüş 1 — Kıvılcım: TDV'nin Haçova Meydan Savaşı ve Cigalazâde Sinan Paşa maddeleri, dirliği kesilen askerlerin Anadolu'da Celâlî gruplarına katılarak karışıklıkları büyüttüğünü yazar. Bu okumaya göre yoklama, zaten gergin olan Anadolu'ya binlerce silahlı ve öfkeli adam gönderdi.\n\nGörüş 2 — Hızlandırıcı, kök sebep değil: TDV'nin Celâlî İsyanları maddesi (Müctebâ İlgürel) de kaçanların Karayazıcı Abdülhalim'in yanındaki âsilerin sayısını artırdığını kabul eder; ama bazı kaynakların Celâlî isyanlarını doğrudan bu cezalandırmaya bağlamasını doğru bulmaz. Ona göre on binlerce insanın âsi olmasının sebebi başıboş leventlerde, mağdur sipahilerde, işsiz suhtelerde ve sahipsiz köylüde aranmalıdır; Celâlî adı zaten 1519'dan beri kullanılıyordu.",
  bag:"İki görüş çelişmez, ölçek konusunda ayrışır: biri yoklamayı yangını tutuşturan kıvılcım, öteki zaten yanan bir ateşe dökülen yakıt gibi görür. Kesin olan, Haçova'nın askerî zaferinin Anadolu'da bir iç güvenlik bedeli doğurduğudur; zafer 1606'ya kadar süren savaşın gidişini de değiştirmedi.",
  not:"Zaferden sonra Cigalazâde'nin, Eğri'ye gelmeyip savaşa az kuvvet gönderen Kırım Hanı Gazi Giray'ı azlettirmesi de rakiplerince aleyhine kullanıldı.",
  kesinlik:"tartismali",
  olay:["1596-10-26|Haçova","1596-10-26|Haçova bozgunu","1599-01-01|Karayazıcı"],
  kaynak:"TDV: hacova-meydan-savasi · TDV: cigalazade-sinan-pasa · TDV: celali-isyanlari" }

];

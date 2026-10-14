// ============================================================================
// EK OKUMA — PADİŞAH MAGAZİN / İLGİNÇ HİKÂYE KARTLARI, İKİNCİ DALGA (ekokuma_padisah2)
// AD ALANI: yalnız window.EKOKUMA_PADISAH2 (js/app.js _EKOKUMA_DOSYA_ADLARI'nda).
// ============================================================================
// Yazan: KUTU-G3-1014 · 14 Ekim 2026 · paket 0045 / H-0010 (Emre: "tüm Osmanlı
// padişahları için magazin, komplo teorisi, ilginç hikâye ek okumaları").
// Ölçülen eksik: başlığında adı geçen kartı olmayan 13 padişah — I. Mehmed,
// I. Bayezid, III. Murad, III. Mehmed, II. Osman, II. Süleyman, II. Ahmed,
// I. Mahmud, III. Osman, I. Abdülhamid, Abdülmecid, Abdülaziz, VI. Mehmed.
// Bu taslak 13'ünün hepsine kart yazar (III. Mehmed ve VI. Mehmed için ikişer: 15 kart).
//
// TEKRAR TARAMASI (data/ekokuma*.js, node ile yüklenip baslik/kisa/metin tarandı):
//   kaçınılan mevcut hikâyeler — Bayezid'in esareti (bayezid1-esaret-aksehir-1403),
//   III. Mehmed'in cülus gecesi ve Şehzade Mahmud falı, Genç Osman'ın hac niyeti/katli/
//   reform imajı/Şehzade Mehmed katli, II. Süleyman-II. Ahmed kafes ve 'iki rekât namaz',
//   I. Mahmud'un Sünnet Odası tuzağı ve diri gömülme rivayeti, I. Abdülhamid'in Özi felci,
//   Abdülaziz'in ölümü, Abdülaziz'in Avrupa seyahati ayrıntısı (p76b), Nurbânû-Safiye
//   rekabeti, Şehzade Mehmed'in (1756) zehirlenme iddiası. Bu kartlar bunları anlatmaz.
//
// KAYNAKLAR (hepsi bu oturumda curl ile GET edildi, gövde okundu; 200 döndü):
//   TDV mehmed-i (Halil İnalcık) · TDV murad-ii (Halil İnalcık) · TDV bayezid-i (Halil
//   İnalcık) · TDV emir-sultan (Hüseyin Algül, Nihat Azamat) · TDV murad-iii (Bekir
//   Kütükoğlu) · TDV mehmed-iii (Feridun Emecen) · TDV osman-ii (Feridun Emecen) ·
//   TDV suleyman-ii (Abdülkadir Özcan) · TDV ahmed-ii (Mücteba İlgürel) · TDV
//   sakiz-adasi (Ali Fuat Örenç) · TDV mahmud-i--osmanli (Abdülkadir Özcan; 'mahmud-i'
//   slug'ı 302 = ölü) · TDV osman-iii (Fikret Sarıcaoğlu) · TDV abdulhamid-i (M. Münir
//   Aktepe) · TDV halil-hamid-pasa (Kemal Beydilli) · TDV abdulmecid (Cevdet Küçük) ·
//   TDV abdulaziz (Cevdet Küçük) · TDV mehmed-vi (Cevdet Küçük).
//
// BULUNAMAYANLAR / YAZILMAYANLAR:
//   · Abdülaziz'in horoz merakı — TDV abdulaziz'de yok; yazılmadı.
//   · III. Murad'ın rüya mektuplarının akademik neşri (Kitâbü'l-menâmât) — TDV maddesinde
//     anılmıyor, bu oturumda açılıp okunamadı; karta kaynak olarak yazılmadı.
//   · Kronolojide I. Mehmed'in vefatı (1421-06-25), II. Süleyman'ın vefatı (1691-06-22),
//     Halil Hamîd Paşa'nın azli/katli (1785), VI. Mehmed'in vefatı (1926-05-16) maddesi YOK;
//     kartlar en yakın uygun maddeye bağlandı (ic_not'larda).
//   · TDV iç çelişkisi: ahmed-ii Sakız işgalini '21 Eylül 1695' yazıyor (padişahın 6 Şubat
//     1695 ölümünden sonra) — TDV sakiz-adasi 8 Eylül 1694 kuşatma / 22 Şubat 1695 geri
//     alınış veriyor; karta 1694 yazıldı.
//
// BAĞ DOĞRULAMASI: her olay "t|alt dizgi" çifti data/olaylar*.js + kronoloji_sinir*.js
// node ile yüklenerek t birebir + alt dizgi b içinde (büyük/küçük harf duyarsız) sınandı.
// Metin TDV'den özetlendi, kopyalanmadı; doğrudan alıntılar 15 kelimenin altında.
// ============================================================================
window.EKOKUMA_PADISAH2 = [

// ── I. MEHMED (ÇELEBİ) ──────────────────────────────────────────────────────
{ id:"padisah2-mehmed1-rehine-duzmece",
  baslik:"I. Mehmed (Çelebi): Ölüm döşeğinde bir pazarlık ve 'Düzmece' lakabının doğuşu",
  tur:"tartisma",
  kisa:"Tahtı oğluna güvenle bırakmak için iki küçük şehzadesini Bizans'a rehine vermeye razı oldu; kardeşine yapışan 'Düzmece' lakabı ise bir propaganda olarak doğdu.",
  metin:"Çelebi Mehmed hayatının son yılında hastalandığında tek bir kaygısı vardı: büyük oğlu Murad'ın kavgasız tahta çıkması. Önündeki en büyük engel kendi kardeşi Mustafa'ydı. Semerkant'ta tutulan Mustafa'yı 1416'da Timurlu hükümdar Şâhruh serbest bırakmıştı; bazı Osmanlı beyleri onu hâlâ sultan sayıyordu ve Bizans imparatoru da onu elinde bir koz olarak tutuyordu.\n\nTDV'deki Halil İnalcık maddelerine göre Mehmed, Bizanslı tarihçi Dukas'ın aktardığı bir anlaşma yaptı: Murad Edirne'de babasının yerine geçecek, Anadolu'yu oğlu Mustafa alacak, sekiz ve yedi yaşlarındaki iki küçük oğlu Yûsuf ile Mahmud İstanbul'a, İmparator II. Manuel'in yanına rehine gönderilecekti. İmparator bunların bakımı için yıllık para alacak, karşılığında Mustafa'yı salıvermeyecekti.\n\nMehmed 25 Haziran 1421'de Edirne'de öldü. Vezirler, Mustafa'nın harekete geçmesinden korkarak ölümü bir süre gizli tuttu. Bursa'da tahta çıkan Murad ise kardeşlerini rehine vermeyi reddetti. Bunun üzerine Bizans, Limni'de tuttuğu Mustafa'yı serbest bırakıp gemilerle Gelibolu önlerine çıkardı.\n\nAsıl şaşırtıcı ayrıntı lakapta saklı. İnalcık'a göre Murad'ın taraftarları, Mustafa'nın çoktan öldüğü, ortaya çıkanın bir sahtekâr olduğu dedikodusunu yaydı. Tarih kitaplarına geçen 'Düzmece' adı, böylece bir veraset kavgasının silahı olarak doğdu. TDV'nin Yıldırım Bayezid maddesi ise Mustafa'yı, Bayezid'in hayatta kalan oğulları arasında sayar.",
  kesinlik:"tartismali",
  olay:["1421-08-15|Düzmece Mustafa"],
  kaynak:"TDV: mehmed-i (Halil İnalcık) · TDV: murad-ii (Halil İnalcık) · TDV: bayezid-i (Halil İnalcık)",
  ic_not:"Kronolojide I. Mehmed'in vefat maddesi (25 Haziran 1421) yok; kart, hikâyenin sonucu olan 1421-08-15 'Düzmece Mustafa ayaklanması' maddesine bağlandı. TDV murad-ii Mustafa'nın Gelibolu'ya çıkarılışını Ramazan 824 / Eylül 1421 diye verir — kronoloji maddesinin 15 Ağustos'u ile ayrışıyor; ayrıca ölçülmeli. Vefat maddesi eklenirse kart oraya da bağlanmalı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── I. BAYEZİD (YILDIRIM) ───────────────────────────────────────────────────
{ id:"padisah2-bayezid1-emir-sultan-meyhane",
  baslik:"I. Bayezid (Yıldırım): Damat derviş, kurumuş askerler ve 'dört köşede birer meyhane' menkıbesi",
  tur:"tartisma",
  kisa:"Menkıbeye göre Yıldırım, izinsiz evlenen kızını ve damadını öldürtmek istedi; Ulucami'de ise damadının tek cümlesiyle içkiye tövbe etti.",
  metin:"Yıldırım Bayezid'in damadı, Buhara'dan Bursa'ya gelen seyyid Emîr Sultan'dı. Bu evlilik ve Bursa Ulucamii etrafında Osmanlı'nın en sevilen menkıbelerinden bazıları doğdu. TDV'nin Emîr Sultan maddesi bunları anlatır, ama hangisinin menkıbe, hangisinin tarih olduğunu da ayırır.\n\nMenâkıb kitaplarına göre Bayezid'in kızı Hundi Hatun, gördüğü rüyalar üzerine, babası Rumeli'de seferdeyken onun rızasını almadan Emîr Sultan'la evlendi. Dönüşte öfkelenen padişah ikisini öldürmek için kırk kişilik bir birlik gönderdi; ama askerler şeyhin kerametiyle 'kadîd', yani kurumuş et gibi kaskatı kesildi. Bursa'daki Kaditler Mezarlığı'nın adının buradan geldiği rivayet edilir. Molla Fenârî'nin padişahı uyaran bir mektup yazdığı da anlatılır; TDV bu mektubun gerçek bir belge olma ihtimalini zayıf bulur. Mecdî ve Belîğ ise padişahın kızını kendi rızasıyla evlendirdiğini yazar. TDV'ye göre doğrusu da bu olmalıdır.\n\nEn meşhur menkıbe Ulucami'yle ilgilidir. İnşaat sırasında Bayezid damadına caminin nasıl olduğunu sorar. Emîr Sultan, dört köşesinde birer meyhaneden başka eksiği kalmadığını söyler. İğneli sözü anlayan padişah da içkiye tövbe eder. Bazı kaynaklar aynı sahneyi Somuncu Baba'ya bağlar.\n\nMenkıbenin dışında kalan bilgiler daha sadedir. TDV'ye göre Emîr Sultan, Molla Fenârî gibi âlimlerle birlikte Bayezid'in Timur'un elçilerini öldürtmesine engel oldu. Hammer'e göre padişahlara kılıç kuşatma geleneği de onun Yıldırım'a kılıç kuşatmasıyla başladı.",
  kesinlik:"rivayet",
  olay:["1399-06-01|Bursa Ulu Camii"],
  kaynak:"TDV: emir-sultan (Hüseyin Algül, Nihat Azamat) · TDV: bayezid-i (Halil İnalcık)",
  ic_not:"TDV bayezid-i Ulucami'nin inşasını 1400 diye tarihler; kronoloji maddesi 1399-06-01 'Bursa Ulu Camii tamamlandı'. İki tarih ayrı ölçülmeli (kitabe 802/1399-1400 olabilir; bu oturumda Ulucami maddesi açılamadı, 'ulucami' slug'ı genel madde çıktı). Kılıç kuşatma geleneğinin başlangıcı TDV'de iki görüşlü (Hammer: Yıldırım; Atâ Bey: II. Murad) — metinde Hammer'e atfedildi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── III. MURAD ──────────────────────────────────────────────────────────────
{ id:"padisah2-murad3-ruya-mektuplari",
  baslik:"III. Murad: Rüyalarını mektupla şeyhine yorumlatan padişah",
  tur:"magazin",
  kisa:"Gördüğü rüyaları düzenli olarak bir Halvetî şeyhine yazıp yorumlattı; hicrî 1000 yılının kıyamet beklentisi ise onu iyice saraya kapattı.",
  metin:"III. Murad'ın sarayında en nüfuzlu kişilerden biri ne vezir ne de paşaydı. Bu kişi bir rüya yorumcusuydu. TDV'nin III. Murad maddesine göre Halvetî şeyhi Şücâ, Murad henüz şehzadeyken bir rüyasını yorumlayarak onun güvenini kazandı. Murad tahta çıkınca da 'hünkâr şeyhi' oldu. Padişah rüyalarını düzenli olarak ona gönderip yorumlatıyordu. Şeyhin bu yakınlığı kullanıp iş takibi karşılığında rüşvet aldığı, büyük servet topladığı söylentileri yayıldı.\n\nMurad'ın bu iç dünyasını besleyen bir korku da vardı: hicrî 1000 yılı (1591-1592). O yıl büyük fitneler çıkacağı beklentisinin padişahın melankolik yapısını etkilediği anlaşılıyor. Kaynaklar onun iyice saraya kapandığını, cuma selamlıklarını bile uzun süre aksattığını eleştirir.\n\nAma aynı padişah meraklı bir okurdu. Alman seyyah Schweigger, onun özellikle tarih kitaplarını merakla okuduğunu yazar. Kılık değiştirip sokakları denetlediğini de ekler. Amerika'nın İspanyollarca keşfini anlatan Târîh-i Hind-i Garbî ile bir Fransa tarihi, onun dünya tarihine duyduğu merak üzerine hazırlatılan eserler arasındadır. Rasathâne yapımına izin veren de oydu.\n\n'Murâdî' mahlasıyla şiir yazdı. Selânikî'nin kaydettiği bir gazelinde, istediği gibi bir devlet adamı bulamamaktan yakınır. Gazel 'Gönlümün istediği bana bir âdem olsa' mısraıyla açılır. Sülüs, nesih ve ta'likte iyi bir hattat olduğu da kayıtlıdır.",
  kesinlik:"kesin",
  olay:["1574-12-22|III. Murad'ın cülûsu","1595-01-16|III. Murad'ın vefatı"],
  kaynak:"TDV: murad-iii (Bekir Kütükoğlu)",
  ic_not:"TDV 'rüyalarını muntazaman ona gönderip yorumlattığı bilinmektedir' der; mektupların akademik neşri (Özgen Felek, Kitâbü'l-menâmât) bu oturumda açılamadı, kaynak alanına yazılmadı — eklenecekse künyesi doğrulanmalı. Şeyh Şücâ için ayrı TDV maddesi aranan slug'larla bulunamadı (seyh-suca, suca, suca-efendi: 302). Hicrî 1000 kaygısı TDV'de 'görünmektedir' kalıbıyla, yani yorum olarak verilmiştir.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── III. MEHMED (1) ─────────────────────────────────────────────────────────
{ id:"padisah2-mehmed3-vaiz-gozyasi-sefer",
  baslik:"III. Mehmed: Vaizin sözüyle ağlayıp sefere çıkan padişah",
  tur:"tartisma",
  kisa:"Camide ulema ayağa kalkıp 'padişah niçin gazaya gitmiyor' diye sordu; vaizin bir cümlesiyle gözyaşına boğulan III. Mehmed ertesi yıl ordunun başına geçti.",
  metin:"1595 yazında Macaristan cephesinden kötü haberler art arda geliyordu. 2 Eylül 1595'te çok önem verilen Estergon Kalesi düştü. Dönemin tarihçisi Selânikî'ye göre İstanbul'da padişaha bizzat sefere çıkması için ağır bir baskı vardı. Bir cuma günü Süleymaniye Camii'nde hutbe okunurken ulemadan birçok kişi ayağa kalktı. Padişahın ve devlet erkânının niçin gazaya gitmediğini sorup genel seferberlik istediler. Yeniçeriler de artık yalnız padişahla sefere gideceklerini söylüyordu.\n\nAsıl sahne Eski Saray'da yaşandı. Hutbe okumak için çağrılan Ayasofya vaizi Muhyiddin Efendi, kalelerin birer birer düşman eline geçmesiyle İslâm ülkesinin çiğnendiğini söyledi. Bunun üzerine III. Mehmed gözyaşı döktü ve bizzat sefere çıkacağını açıkladı. Ardından en güvendiği lalası Mehmed Paşa'yı sadrazam yaptı. Ama hasta olan paşa dokuz gün sonra öldü. Padişah bu ölümle çok sarsıldı ve günlerce yas tuttu.\n\nYine de ertesi yıl ordunun başında yola çıktı. 1596 sonbaharında Eğri Kalesi alındı ve Haçova'da zafer kazanıldı. Böylece uzun bir aradan sonra ordunun başında sefere çıkan bir padişah oldu.\n\nPeki bu sefer bir baskının sonucu muydu? TDV'deki Feridun Emecen maddesi, baskıyı ayrıntılı biçimde anlatır. Ama vardığı sonuç farklıdır: padişahın gazaya çıkması 'mecbur bırakılmaktan çok kendi isteğinin' sonucudur. Ayrıca bizzat sefere çıkarak kazanacağı başarıyla, annesi Safiye Sultan'ın çevresinden iktidarı geri alabileceğini umduğu anlaşılıyor.",
  kesinlik:"tartismali",
  olay:["1596-06-20|bizzat sefere çıktı","1596-10-26|Haçova"],
  kaynak:"TDV: mehmed-iii (Feridun Emecen)",
  ic_not:"Kronoloji maddesinin başlığı 'yeniçeri baskısıyla bizzat sefere çıktı' — TDV hükmü (kendi isteği ağır basar) bu başlıkla gerilim hâlinde; kart bu gerilimi okura açıyor, madde başlığına dokunulmadı. 'Kanûnî'den sonra sefere bizzat çıkan ilk padişah' ifadesi TDV'de açıkça yazmadığı için metinden çıkarıldı (KUTU-G3 incelemesi).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── III. MEHMED (2) ─────────────────────────────────────────────────────────
{ id:"padisah2-mehmed3-kralice-orgu",
  baslik:"III. Mehmed: Kraliçe Elizabeth'in çalar saatli orgu ve bir dervişin kehaneti",
  tur:"magazin",
  kisa:"İngiltere kraliçesinin gönderdiği saatli orgu sarayda kurdurup hayranlıkla dinledi; ölümünden iki ay önce bir derviş ona 'elli altı gün sonra' büyük bir olay olacağını söyledi.",
  metin:"Yabancı gözlemciler III. Mehmed'i kısa boylu, şişman, açık tenli ve kara sakallı olarak anlatır. Avlanmayı severdi, ok yapımında ustaydı ve yanından kılıcını, yayını eksik etmezdi. Dönemin kaynakları onu saf, kolay inanan, son derece dindar ve çabuk üzülen biri olarak tanıtır.\n\nSarayındaki en şaşırtıcı eşya bir hediyeydi. İngiltere Kraliçesi I. Elizabeth, üzerinde çalar saat bulunan büyük bir org göndermişti. Padişah bu orgu sarayda kurdurdu ve hayranlıkla dinledi. TDV, onun Avrupa'daki gelişmeleri raporlarla izlemeye çalıştığını, İngiltere ve Fransa ile ilişkilere önem verdiğini de yazar.\n\nTahta çıkar çıkmaz yaptığı ilk işlerden biri de dikkat çekicidir. Babası III. Murad'ın sarayını dolduran ve devlet işlerine karışan cüceleri, dilsizleri ve öteki eğlence erbabını saraydan çıkardı. 'Adlî' mahlasıyla şiir yazdı.\n\nSaltanatının son yılı karanlıktı. Büyük oğlu Mahmud'u tahtına göz diktiği şüphesiyle öldürttü. Ardından doğudan Tebriz'in düşüşü gibi kötü haberler geldi. TDV'ye göre 27 Ekim 1603'te saraya giderken bir derviş ona yaklaştı. Elli altı gün sonra büyük bir olay olacağını, gafil bulunmaması gerektiğini söyledi. Padişahın hastalığı aralıkta ağırlaştı ve yaklaşık iki ay sonra öldü. Bir kaynak ölümünü şişmanlığa bağlı mide rahatsızlığına, bazıları da kalp krizine bağlar. Türbesi Ayasofya'nın bahçesindedir.",
  kesinlik:"kesin",
  olay:["1603-12-22|III. Mehmed'in vefatı"],
  kaynak:"TDV: mehmed-iii (Feridun Emecen; org bilgisi maddenin Mayers'e atfıyla)",
  ic_not:"TDV vefatı 16 Receb 1012 / 20 Aralık 1603 diye verir; kronoloji maddesi 1603-12-22. Metinde gün yazılmadı ('yaklaşık iki ay sonra'), çelişki ayrıca ölçülmeli. İlginç: 27 Ekim + 56 gün = 22 Aralık; kronoloji günü kehanetle örtüşüyor, TDV günüyle değil — bu karta yazılmadı. Orgun geliş yılı (1599, Thomas Dallam) TDV'de yok; yazılmadı.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── II. OSMAN (GENÇ OSMAN) ──────────────────────────────────────────────────
{ id:"padisah2-osman2-hur-esler-seken-kursun",
  baslik:"II. Osman (Genç Osman): Seken bir kurşun ve şeyhülislâmın kızıyla teamüle aykırı nikâh",
  tur:"magazin",
  kisa:"İlk oğlu, Hotin zaferini canlandıran bir gösteride seken kurşunla öldü; ardından cariye yerine hür kadınlarla evlenerek saray teamülünü bozdu.",
  metin:"Genç Osman, 1621'de Hotin seferinden dönerken Edirne'de bir oğlu olduğu haberini aldı ve çok sevindi. Venedik kaynakları annesi Ayşe Sultan'ı Rus ya da Ukrayna asıllı olarak anar. Kızlarağası Mustafa Ağa'nın azat edip kızı gibi yetiştirdiği bu kadının, padişah üzerinde büyük etkisi olduğunu da yazarlar. Osman hanımını ve Ömer adı verilen şehzadeyi yanına getirtti.\n\nİstanbul'a dönüşün ilk günlerinde, hanımının isteğiyle Hotin muharebesini canlandıran bir gösteri düzenlendi. Gösteri sırasında bir tüfekten seken kurşun küçük şehzadeye isabet etti. II. Osman, Şubat 1622'de oğlunu böyle kaybetti.\n\nKısa süre sonra yaptığı evlilikler sarayı ve ulemayı sarstı. Önce Pertev Paşa ailesinden bir kızla, ardından Şeyhülislâm Esad Efendi'nin kızı Âkıle ile nikâhlandı. Venedik raporlarına göre padişah, İslâmî şartlara uyarak hür asıldan dört kadınla evlenmek ve harem düzenini kökten değiştirmek istiyordu. Esad Efendi, önceki padişahların hep cariyelerle evlendiğini hatırlatıp bu nikâha şiddetle karşı çıktı. Sonunda rıza göstermek zorunda kaldı. TDV, bu evliliğin kırgın ulemayı yanına çekme hesabı olabileceğini düşünür.\n\nHesap tutmadı. Arpalıkları kesilen ulema ile ocağının geleceğinden korkan yeniçeriler birleşti. Üç ay sonra, Mayıs 1622'de Genç Osman tahtını ve hayatını kaybetti. Ondan geriye 'Fârisî' mahlasıyla yazdığı ve TDV'nin yüksek edebî güç taşıdığını söylediği şiirleri kaldı.",
  kesinlik:"kesin",
  olay:["1621-10-09|Hotin Seferi","1622-05-20|Genç Osman'ın yeniçeriler"],
  kaynak:"TDV: osman-ii (Feridun Emecen)",
  ic_not:"Şehzade Ömer'in ölümü TDV'de yalnız ay olarak (Şubat 1622) var; gün yazılmadı. 'Dört hür kadın' niyeti Venedik raporlarına dayanır, metinde öyle damgalandı. Başlıktaki 'iki yüz yıllık teamül' ifadesi TDV'de yok; Esad Efendi'nin 'önceki padişahlar daima câriyelerle izdivaç etti' sözünün okura uyarlanmış hâli — Emre isterse 'saray teamülünü bozdu' diye kısaltılabilir (kisa alanında da aynı).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── II. SÜLEYMAN ────────────────────────────────────────────────────────────
{ id:"padisah2-suleyman2-tahtirevan-son-yolculuk",
  baslik:"II. Süleyman: Saray tabaklarıyla ödenen bahşiş ve tahtırevanla orduya taşınan hasta padişah",
  tur:"magazin",
  kisa:"Cülus bahşişini ödemek için sarayın altın ve gümüş kapları eritildi; ölüm döşeğindeki padişah ise 'askere moral olsun' diye tahtırevanla ordugâha götürüldü.",
  metin:"II. Süleyman 1687'de kafesten çıkarılıp tahta oturtulduğunda devletin kasası boştu. Askere dağıtılması gereken cülus bahşişi için yeterli nakit bulunamadı. Bunun üzerine Enderun hazinesindeki ve saray ahırındaki altın ve gümüş kap kacak, kılıçlar ve başka eşyalar darphaneye gönderilip paraya çevrildi. Bu da yetmedi ve varlıklı kişilerden ek bir vergi alındı. Ödemeler tamamlanana kadar İstanbul sokaklarında zorbalar yağma yaptı.\n\nSaltanatının sonu da en az başı kadar çarpıcıdır. 1691 baharında padişah uzun süredir çektiği istiskā (vücutta su toplanması) yüzünden iyice şişmişti ve tedavisinden umut kesilmişti. Bu sırada bazı ulema ve ocak ileri gelenleri, padişah ölürse yerine IV. Mehmed'i ya da oğullarından birini getirmeyi tasarlıyordu. Bunu duyan Sadrazam Fâzıl Mustafa Paşa, padişahı Edirne'ye götürmeye karar verdi. Ağır hasta olan II. Süleyman, askere moral olacağı söylenerek ikna edildi. Tahtırevanla Davudpaşa ordugâhına taşındı. Söylentileri çıkaranlar Kıbrıs'a sürüldü.\n\nSadrazam son görüşmeleri için Edirne'ye bir saat uzaklıktaki Yonca Çeşmesi'ne geldi. Kaynaklara göre padişah onu yalnız kabul etti ve ağlayarak ordunun zaferi için dua etti. Bir hafta sonra, 22 Haziran 1691 Cuma günü öldü. Altı kadını vardı ama yaşayan çocuğu yoktu. Gençliğinde sülüs ve nesihte başarılı bir hattattı. Naaşı İstanbul'a getirilip Kanûnî'nin türbesinde, onun sağ yanına gömüldü.",
  kesinlik:"kesin",
  olay:["1687-11-08|II. Süleyman'ın cülûsu","1691-06-23|II. Ahmed'in tahta çıkışı"],
  kaynak:"TDV: suleyman-ii (Abdülkadir Özcan)",
  ic_not:"Kronolojide II. Süleyman'ın vefat maddesi (22 Haziran 1691) yok; kart ardılın cülus maddesine (1691-06-23) bağlandı. 'İki rekât namaz' rivayeti mevcut kartta (tartisma-suleyman-ii-ahmed-ii-kafes) olduğu için tekrar edilmedi. 'İmdâdiyye' metinde 'ek bir vergi' diye sadeleştirildi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── II. AHMED ───────────────────────────────────────────────────────────────
{ id:"padisah2-ahmed2-sakiz-hattat",
  baslik:"II. Ahmed: Divanı kaçırmayan hattat padişah ve göremediği Sakız zaferi",
  tur:"magazin",
  kisa:"Divan toplantılarını haftada dört güne çıkarıp hastayken bile katıldı; Sakız'ın kaybına çok üzüldü, ama adanın geri alındığını öğrenemeden öldü.",
  metin:"II. Ahmed, ağabeyi II. Süleyman'ın ölümü üzerine 23 Haziran 1691'de, kırk dokuz yaşında Edirne'de tahta çıktı. Kafes yıllarından geriye hassas ve hiddetli bir mizaç kalmıştı. TDV onu şiire ve musikiye meraklı, aynı zamanda hattat bir padişah olarak tanıtır. Çevresindekilerin telkinlerine çabuk kapılan bir yanı da vardı. Örneğin seferden dönen bir sadrazamı kızlarağasının etkisiyle azletti.\n\nAma devlet işlerinde şaşırtıcı bir titizlik gösterdi. Divan-ı Hümâyun'un işleri artınca, Kanûnî kanunnamesine uyarak divan toplantılarını haftada iki günden dört güne çıkardı. Toplantılarda bizzat bulunmayı alışkanlık hâline getirdi ve bunu hastalığı sırasında bile bırakmadı. Kaynaklar onun reayanın hakkını hep ön planda tuttuğunu yazar. Hazineyi korumak için vergi kaynaklarının ömür boyu kiraya verildiği malikâne usulü de onun döneminde başladı.\n\nSaltanatının son darbesi denizden geldi. Ordular Avusturya cephesine kaydırılınca Sakız adası korumasız kaldı. Eylül 1694'te Venedik, papalık, Floransa ve Malta gemileri adayı kuşatıp ele geçirdi. II. Ahmed bu habere çok üzüldü ve adanın kurtarılması için hazırlık emri verdi. Ama 6 Şubat 1695'te, elli iki yaşında istiskādan Edirne'de öldü. Osmanlı askeri on altı gün sonra, 22 Şubat 1695'te Sakız'a çıktı ve kaleyi kolayca geri aldı. Naaşı İstanbul'a getirilip ağabeyi gibi Kanûnî'nin türbesine gömüldü.",
  kesinlik:"kesin",
  olay:["1694-09-21|Sakız adasının kaybı","1695-02-06|II. Mustafa'nın cülusu","1695-02-22|Sakız'ın geri alınışı"],
  kaynak:"TDV: ahmed-ii (Mücteba İlgürel) · TDV: sakiz-adasi (Ali Fuat Örenç)",
  ic_not:"TDV ahmed-ii Sakız işgalini '21 Eylül 1695' yazar — padişahın ölümünden (6 Şubat 1695) sonraya düştüğü için maddenin iç çelişkisi; TDV sakiz-adasi kuşatmayı 8 Eylül 1694, geri alınışı 22 Şubat 1695 verir; karta 1694 yazıldı, gün yazılmadı (kronoloji maddesi 21 Eylül 1694 düşüş günü). Defin: TDV suleyman-ii ve ahmed-ii ikisini de Kanûnî türbesine koyar; türbe içindeki konum TDV ahmed-ii'de yazmadığı için 'yanına' denmedi. Malikâne cümlesi TDV ahmed-ii'den; mevcut tartisma-malikane-avrupa-kiyaslama kartıyla örtüşmez, yalnız anılır.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── I. MAHMUD ───────────────────────────────────────────────────────────────
{ id:"padisah2-mahmud1-kuyumcu-tamburi",
  baslik:"I. Mahmud: Kafesteki kuyumcu, satranç meraklısı ve Taksim'e adını veren padişah",
  tur:"magazin",
  kisa:"Yirmi yedi yıllık kafes hayatını kuyumculukla geçirdi; tahta çıkınca İstanbul'a kütüphaneler, çeşmeler ve bugün herkesin bildiği bir semt adı bıraktı.",
  metin:"I. Mahmud küçük bir çocukken babası II. Mustafa 1703'te tahttan indirildi. O da kardeşleriyle birlikte saraydaki kapalı daireye kapatıldı. TDV'ye göre bu yirmi yedi yıllık kafes hayatını çoğunlukla kuyumculukla uğraşarak geçirdi. 1730'da Patrona Halil isyanı amcası III. Ahmed'i tahttan indirince sıra ona geldi. Kaynaklara göre ona ilk biat eden amcası da bir öğüt verdi: devleti bizzat yönetmeli ve kimseye güvenmemeliydi.\n\nYeni padişah bu öğüdü tuttu. İsyancıların elebaşlarını iki ay içinde ortadan kaldırdıktan sonra yirmi dört yıl hüküm sürdü. TDV onu yumuşak huylu, barışsever ve vakur bir hükümdar olarak tanıtır. Cirit, at yarışı ve yüzmeden, özellikle de mehtap seyrinden hoşlanırdı. Lâleyi ve öteki çiçekleri çok severdi, satranç meraklısı olduğu da nakledilir. 'Sebkatî' mahlasıyla şiir yazdı. Muhtemelen tambur çalan bir sazendeydi ve bazı besteleri günümüze ulaştı.\n\nMerakı yalnız eğlenceyle sınırlı değildi. İbrahim Müteferrika'yı huzuruna çağırıp savaşları niçin kaybettiklerini ve ne yapılması gerektiğini sordu. Müteferrika'nın Usûlü'l-hikem adlı risalesi bu soru üzerine yazıldı.\n\nİstanbul'daki izleri hâlâ yaşıyor. Galata ve Beyoğlu yakasına su getirtti ve bu suyu yüzü aşkın çeşmeye dağıttı. Suyun bölündüğü maksem yüzünden 'Taksim' adı onun döneminden beri kullanılıyor. Cağaloğlu Hamamı'nı Ayasofya Kütüphanesi'ne gelir olsun diye yaptırdı. Ayasofya, Fatih ve Süleymaniye'de kütüphaneler açtı.",
  kesinlik:"kesin",
  olay:["1730-10-02|I. Mahmud'un cülusu","1754-12-13|I. Mahmud'un ölümü"],
  kaynak:"TDV: mahmud-i--osmanli (Abdülkadir Özcan)",
  ic_not:"'mahmud-i' slug'ı 302 (ölü); doğru madde mahmud-i--osmanli. Tamburîlik TDV'de 'muhtemelen', satranç 'nakledilir' kalıbıyla — metinde bu kayıtlar korundu. 'Yedi yaşında' hesabı: doğum 2 Ağustos 1696, Edirne Vak'ası 1703 (TDV); ay bilinmediği için 6-7 yaş arası — Emre isterse 'küçük yaşta' denebilir. Ölüm ve defin (Turhan Sultan türbesi) mevcut diri gömülme kartında anlatıldığı için tekrar edilmedi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── III. OSMAN ──────────────────────────────────────────────────────────────
{ id:"padisah2-osman3-gumus-civili-ayakkabi",
  baslik:"III. Osman: Gümüş çivili ayakkabılar gerçek mi? Kafesten çıkan padişahın tuhaf alışkanlıkları",
  tur:"tartisma",
  kisa:"Cariyelerle karşılaşmamak için haremde gümüş çivili ayakkabılarla dolaştığı anlatılır. TDV ise bu hikâyenin hiçbir kaynakta bulunmadığını yazar.",
  metin:"III. Osman hakkında en çok anlatılan hikâye şudur: kadınlardan hoşlanmayan padişah, haremde cariyeler karşısına çıkmasın diye ökçeleri gümüş çivili ayakkabılar giyermiş, ayak sesini duyan da önünden çekilirmiş. Hikâye yaygın ama TDV'nin III. Osman maddesi kesin bir not düşer: bu tekrarlanan rivayetin kaynağına rastlanmamıştır.\n\nKaynakların gerçekten anlattığı padişah daha da ilginçtir. III. Osman, babası II. Mustafa 1703'te tahttan indirilince kapalı şehzade dairesine kapatıldı. Tahta ancak 1754'te çıkabildi ve Osmanlı tarihinde bu dairede en uzun kalan şehzade oldu. Bu yarım asırdan geriye bilinen tek şey, taşınabilir küçük yazı masaları ve çekmeceler yaptığıdır. Padişah olunca yıllarını geçirdiği bu dairenin duvarlarını alçalttı, pencerelerini açtırdı, içine bahçe, havuz ve fıskiye yaptırdı.\n\nHareme gelince: kaynaklar ona ait dört kadından ve dört ikbalden söz eder. Çocuğu olmadı. Kaynaklardaki III. Osman, haremden kaçan biri değil, sık sık kılık değiştirip şehre karışan bir padişahtır. Çoğu zaman ulema kıyafeti giyer, kendini 'Edirneli Osman Ağa' diye tanıtırdı. Elçi alaylarını halkın arasında izlerdi. Aldığı meyveyi yolda yerdi. Yeni çıkan meyvelere ve kahveye düşkündü.\n\nÇağdaş tarihçiler aceleci olduğunda birleşir. Ansızın karar verir, sonra pişman olurdu. Rüşvetten ve yalandan da nefret ederdi. Üç yıllık saltanatında altı sadrazam değiştirdi.",
  kesinlik:"rivayet",
  olay:["1754-12-13|III. Osman'ın cülûsu","1757-10-30|III. Osman'ın ölümü"],
  kaynak:"TDV: osman-iii (Fikret Sarıcaoğlu)",
  ic_not:"TDV cümlesi birebir: 'gümüş çivili ayakkabılarla dolaştığına dair tekrarlanan rivayetlerin kaynağına rastlanmamıştır'. Rivayetin 'kadınlardan hoşlanmazdı' ve 'ayak sesini duyan çekilirdi' kısımları popüler anlatıdır; TDV'de geçmez, metinde rivayetin içeriği olarak verildi ve hemen ardından çürütüldü. TDV Şimşirlik dönemini 'elli üç yıl' diye anar (1703-1754 = 51; muhtemelen hicrî hesap) — metinde 'yarım asır' denildi. 'Dört ikbal' TDV'de 'en son sayısı dörde ulaşan ikballeri' diye geçer.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── I. ABDÜLHAMİD ───────────────────────────────────────────────────────────
{ id:"padisah2-abdulhamid1-halil-hamid-komplosu",
  baslik:"I. Abdülhamid: Kırk üç yıl kafes, bir gece yarısı azli ve Halil Hamîd Paşa komplosu",
  tur:"tartisma",
  kisa:"Gözde sadrazamını bir sabaha karşı azletti, birkaç hafta sonra da başını getirtti. Gerekçe, onu tahttan indirip yeğeni Selim'i getirme planıydı. Ama bu plan gerçekten var mıydı?",
  metin:"I. Abdülhamid, 1730'da babası III. Ahmed tahttan indirildiğinde beş yaşındaydı. Ağabeyi III. Mustafa ölünceye kadar sarayda göz hapsinde yaşadı. 21 Ocak 1774'te, kırk dokuz yaşında tahta çıktığında, TDV'nin ifadesiyle devlet işlerinde hiçbir tecrübesi yoktu. Hayatının kırk üç yılını kapalı bir dairede geçirmişti.\n\nSaltanatının en karanlık olayı, en başarılı sadrazamlarından Halil Hamîd Paşa'nın sonudur. Padişah paşanın hizmetinden memnuniyetini birçok kez göstermişti. Yine de 31 Mart 1785'te paşa sabaha karşı ansızın azledildi, Gelibolu'ya sürüldü ve bütün malına el konuldu. Önce ona Habeş eyaleti verildi, ama Bozcaada ve İstanköy'de yol hazırlığı yaparken bu görevden de alındı. 27 Nisan 1785'te idam edildi. Kesik başı İstanbul'a getirilip saray kapısında teşhir edildi.\n\nBu ani öfke, ardında olağanüstü bir sebep olduğunu düşündürdü. Yaygın açıklamaya göre paşa, yaşlı padişahı tahttan indirip yerine genç Şehzade Selim'i, yani ileride III. Selim olacak yeğeni getirmeyi planlamıştı. Plana karıştığı belirlenen şeyhülislâm, eski yeniçeri ağası ve bir vezir görevden alındı. İkisi de sonradan öldürüldü. Bu durum iddiayı güçlendiriyordu.\n\nAma TDV'deki Kemal Beydilli maddesi asıl sebebi başka yerde arar. Kırım'ın Ruslarca ilhakı karşısındaki sessizliği kamuoyunu öfkelendirmişti. Askerî yoklama reformları güçlü bir kesimi karşısına almıştı. Padişahın gözdesi Cezayirli Gazi Hasan Paşa da ona düşmandı. 'Tahttan indirme' suçlaması belki de bir gerekçeden ibaretti.",
  kesinlik:"tartismali",
  olay:["1774-01-21|I. Abdülhamid'in cülûsu","1789-04-07|I. Abdülhamid Özi"],
  kaynak:"TDV: abdulhamid-i (M. Münir Aktepe) · TDV: halil-hamid-pasa (Kemal Beydilli)",
  ic_not:"Kronolojide Halil Hamîd Paşa'nın azli (31 Mart 1785) ve katli (27 Nisan 1785) maddesi YOK — Değişmez 2 açısından sınır değişimi olmadığı için zorunlu değil, ama bu kart için en doğru bağ olurdu; madde eklenirse kart oraya da bağlanmalı. Şimdilik cülus ve vefat (ardıl Selim'in tahta çıktığı gün) maddelerine bağlandı. 'Kırk üç yıl' = 1730-1774, TDV abdulhamid-i'den hesap (5 yaşında hapis, 49 yaşında cülus). Başın teşhir yeri TDV'de 'Ortakapı' — metinde 'saray kapısında' denildi.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── ABDÜLMECİD ──────────────────────────────────────────────────────────────
{ id:"padisah2-abdulmecid-elcilik-balosu",
  baslik:"Abdülmecid: Elçilik balosuna giden, yabancı nişan takan ilk padişah",
  tur:"magazin",
  kisa:"Avrupalı bir prens gibi yetişti, Fransızca okudu, Batı musikisine hayrandı; yüzyıllık saray teamüllerini birer birer bozup Fransız elçisinin balosuna gitti.",
  metin:"Abdülmecid, TDV'nin ifadesiyle 'tıpkı Avrupalı bir prens gibi' yetiştirildi. Konuşacak ve okuduğunu anlayacak kadar Fransızca öğrendi. Avrupa yayınlarını izler, tanıştığı yabancılarla tartışırdı. Batı musikisine ve yaşayış tarzına hayrandı.\n\nKırım Savaşı yılları, onun saray teamüllerini bozduğu yıllar oldu. Yabancı elçilerin padişahla siyasî konuları doğrudan görüşmesi âdet değildi. Abdülmecid elçileri randevuyla kabul etmeye başladı. İngiliz elçisi Stratford Canning ise randevusuz girebiliyordu. Nüfuzu o kadar büyüktü ki diplomatlar ona 'taçsız sultan' diyordu. Avrupa hanedan üyelerinin ziyaretleri o güne kadar iade edilmezdi. Abdülmecid ise Fransız elçiliğine bizzat gidip Prens Napolyon'un ziyaretini iade etti. Osmanlı padişahları nişan verir ama almazdı. O, III. Napolyon'un Légion d'Honneur nişanını kabul etti. Bu vesileyle 4 Şubat 1856'da Fransız elçisinin verdiği baloya da katıldı. İki hafta sonra müttefiklerin istediği Islahat Fermanı ilan edildi.\n\nTDV onun hissî ve alıngan bir mizacı olduğunu yazar. Kadınlarının, kızlarının ve damatlarının telkinlerine kolayca kapılırdı. Yirmi yıllık saltanatında yirmi iki kez sadrazam değiştirdi. Dolmabahçe, Beykoz ve Küçüksu kasırlarını kısmen dış borçla yaptırdı. Babası gibi veremden, 25 Haziran 1861'de, henüz otuz dokuz yaşındayken Ihlamur Köşkü'nde öldü. Yerine geçen kardeşi Abdülaziz'in ilk işlerinden biri, onun kurduğu saray orkestrasını dağıtmak oldu.",
  kesinlik:"kesin",
  olay:["1856-02-18|Islahat Fermanı","1861-06-25|Abdülmecid'in vefatı"],
  kaynak:"TDV: abdulmecid (Cevdet Küçük) · TDV: abdulaziz (Cevdet Küçük)",
  ic_not:"Elçilerle doğrudan görüşme ve balolara katılma, tartisma-p75b-kirim-ittifak-kultur-borc kartında bir cümleyle geçiyor; bu kart padişahın şahsına odaklı, nişan/ziyaret iadesi/Canning/sadrazam sayısı orada yok. 'Yirmi yıllık saltanatında yirmi iki sadrazam değiştirdi' TDV cümlesi; değişiklik sayısı mı kişi sayısı mı olduğu TDV'de ayrılmıyor. Son cümle TDV abdulaziz'den.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── ABDÜLAZİZ ───────────────────────────────────────────────────────────────
{ id:"padisah2-abdulaziz-gures-ney-sirt",
  baslik:"Abdülaziz: Güreşen veliaht, ney üfleyen bestekâr ve 'sırtımdan geçsin' diyen padişah",
  tur:"magazin",
  kisa:"Veliahtken güreşip cirit attı, tahta çıkınca saray orkestrasını dağıtıp yerine Türk musikisi saz takımını koydu; Avrupa'dan dönünce orkestrayı geri getirdi.",
  metin:"Abdülaziz, ağabeyi Abdülmecid'in saltanatında oldukça serbest bir veliahtlık yaşadı. Kurbağalıdere'deki köşkünde ava çıkar, güreşir, yüzer, cirit atardı. İçkiden ve sefahatten uzak, sade bir hayat sürdü. Güçlü ve gösterişli yapısıyla, ağabeyinin israfından bıkanların umudu oldu. Kimileri onu geleceğin Yavuz'u olarak görüyordu.\n\nMusiki onun asıl tutkusuydu. Neyzen ve bestekâr Yûsuf Paşa'dan ders almıştı. Ney ve lavtayı çok iyi çalardı. Osmanlı padişahları arasında bestekâr olarak da yer alır. Hicazkâr ve şehnaz makamlarını o kadar severdi ki döneminin birçok şarkı ve marşı bu makamlarda bestelendi. Kendi eserlerinden bir hicaz sirto ile iki şarkı günümüze ulaştı. Tahta çıkınca Abdülmecid'in kurdurduğu saray orkestrası ve bandolarını kaldırdı, yerine Türk musikisi saz takımını getirdi. Opera ve tiyatro yerine orta oyunu seyretti. 1867'deki Avrupa seyahatinden dönünce ise fikir değiştirdi ve sarayda yeniden orkestra ile bando kurdurdu.\n\nTDV onun boş vakitlerinde resim yaptığını da yazar. Celî sülüste iyi bir hattat olduğu da eserlerinden anlaşılır.\n\nEn çok bilinen sözü ise bir demiryolu tartışmasından kalmıştır. İstanbul'u Paris'e bağlayacak hattın saray bahçesinden geçmesine itiraz edildi. Abdülaziz, demiryolu geçsin de 'isterse sırtımdan geçsin' diye cevap verdi. Onun döneminde ülkedeki demiryolu ağı 452 kilometreden 1344 kilometreye çıktı.",
  kesinlik:"kesin",
  olay:["1861-06-25|Sultan Abdülaziz'in cülûsu","1867-06-21|Abdülaziz'in Avrupa seyahati"],
  kaynak:"TDV: abdulaziz (Cevdet Küçük)",
  ic_not:"İstekteki 'horoz merakı' TDV abdulaziz'de bulunamadı; yazılmadı. Güreş merakı TDV'de yalnız veliahtlık yılları için var ('güreşmek'); 'pehlivan himayesi' gibi ek anlatılar yazılmadı. Avrupa seyahatinin ayrıntısı ekokuma_p76b'de olduğu için yalnız bir cümleyle anıldı. Demiryolu km rakamları TDV'de 'toplam' ağ için verilir (Anadolu'daki pay ayrıca 329 km).",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── VI. MEHMED (VAHDEDDİN) (1) ──────────────────────────────────────────────
{ id:"padisah2-mehmed6-malaya-son-gece",
  baslik:"VI. Mehmed (Vahdeddin): Malaya'ya binmeden önceki son gece",
  tur:"magazin",
  kisa:"Evrakını şöminede yaktırdı, mücevherleri hazineye iade edip makbuzunu cebine koydu, kutsal emanetleri almayı reddetti; İngiliz amirale nereye gitmek istediğini soran soruya 'tercihim yok' dedi.",
  metin:"Son Osmanlı padişahının İstanbul'dan ayrılışı için 17 Kasım 1922 Cuma sabahı kararlaştırıldı. Vahdeddin o son geceyi Yıldız'daki Cihannümâ Köşkü'nde geçirdi.\n\nTDV'nin anlattığı ayrıntılar bir veda sahnesinden çok bir hesap kapatmaya benzer. Kişisel eşyaları dışında değerli eşya ve mücevher almamaya özen gösterdi. Adamlarına tomar tomar evrakı şöminede yaktırdı. Bir gün önce saray hazinesine iade ettiği çok kıymetli mücevher çekmecesinin makbuzunu yanına aldı. Yaveri Zeki Bey, hilafete ait kutsal emanetleri de götürmeyi önerdi. Padişah bu öneriyi reddetti, çünkü bunlar ecdadının Türk milletine armağanıydı.\n\nSabah erkenden onu Yıldız Sarayı'ndan İngiliz işgal kuvvetleri komutanı General Harington bizzat aldı. Padişah ve maiyetindeki on kişi bir İngiliz taburunun selamıyla uğurlandı. Malaya adlı İngiliz gemisine bindiğinde, İngiltere'nin Akdeniz filosu komutanı onu kral adına karşıladı ve artık İngiliz toprağında, güvende olduğunu söyledi. Gitmek istediği bir yer olup olmadığını sordu. Vahdeddin'in hiçbir tercihi yoktu. Malta önerildi, kabul etti. Tek ricası, yapılacak açıklamada Malta'nın adının geçmemesi ve bildirinin öğleden sonra yayımlanmasıydı.\n\nYanında 20.000 İngiliz lirası vardı. Bu para, sürgünün ilk birkaç yılına bile yetmeyecekti.",
  kesinlik:"kesin",
  olay:["1922-11-17|Vahdeddin'in İstanbul'dan ayrılışı"],
  kaynak:"TDV: mehmed-vi (Cevdet Küçük)",
  ic_not:"Malaya'nın 'zırhlı' (HMS Malaya, savaş gemisi) olduğu TDV'de 'Malaya adlı gemi' diye geçer; 'zırhlı' nitelemesi genel bilgi — Emre isterse 'gemi' denebilir. Harington'ın unvanı ('işgal kuvvetleri komutanı') TDV'de yok, yalnız adı var. Son cümle (paranın yetmemesi) TDV'nin San Remo bölümüne dayanır; ayrıntısı ikinci kartta.",
  gorsel:null, gorsel_kaynak:"aranmadı" },

// ── VI. MEHMED (VAHDEDDİN) (2) ──────────────────────────────────────────────
{ id:"padisah2-mehmed6-san-remo-haciz",
  baslik:"VI. Mehmed (Vahdeddin): Cenazesine haciz konan son padişah",
  tur:"magazin",
  kisa:"San Remo'da öldüğünde esnafa 60.000 liret borcu vardı; haciz memurları tabutun bulunduğu odayı mühürledi, cenaze borç ödenene kadar bir ay bekledi.",
  metin:"Vahdeddin sürgünün ilk aylarını Malta'da, Hicaz'da ve Mısır'da geçirdi. Gittiği her yerden kısa sürede ayrılmak zorunda kaldı. Mayıs 1923'te İtalya'ya geldi ve San Remo'daki Villa Nobel'e yerleşti. Bir Müslüman ülkesine yerleşmek için yaptığı başvurular sonuçsuz kaldı. On altı ay tek başına yaşadı ve ailesine ancak hanedanın sürgün edildiği Mart 1924'te kavuştu. Kalabalıklaşan ev halkıyla Villa Mamolya'ya taşındı. Kaçıp gelenler de San Remo'da toplanınca orada küçük bir İstanbul oluştu.\n\nİstanbul'dan getirdiği 20.000 İngiliz lirası hızla eridi. TDV'ye göre bir kısmını dolandırıcılara kaptırdı. Bir kısmını da eski kayınbiraderi ve yaveri Zeki Bey kumarhanelerde harcadı. Para edecek ne varsa sattı. Sonunda padişahlık nişanını da satışa çıkardı. Madalyanın sahte olduğunu öğrenince, daha tahta çıktığı günlerde kendisine bu oyunu oynayanları hatırlayıp üzüldü. Tâif'te geçirdiği aylarda vatan hasretini anlatan şarkılar besteledi. Altmış üç eserinden kırk birinin notası bugüne ulaştı.\n\n16 Mayıs 1926'da öldüğünde alacaklılar kapıya dayandı. San Remo esnafına 60.000 liret borcu vardı. Haciz memurları villadaki bütün eşyayla birlikte cenazenin bulunduğu odayı da kilitleyip mühürledi. İtalyanlar borç tamamen ödenmeden defne izin vermedi. Para ancak bir ayda bulunabildi. Cenaze trenle Trieste'ye, oradan gemiyle Beyrut'a götürüldü. 3 Temmuz 1926'da Şam'daki Süleymaniye Camii'nin yanına gömüldü.",
  kesinlik:"kesin",
  olay:["1922-11-17|Vahdeddin'in İstanbul'dan ayrılışı"],
  kaynak:"TDV: mehmed-vi (Cevdet Küçük)",
  ic_not:"Kronolojide VI. Mehmed'in vefat maddesi (16 Mayıs 1926) yok; kart sürgünün başladığı 1922-11-17 maddesine bağlandı — vefat maddesi eklenirse oraya taşınmalı. TDV villayı 'Villa Mamolya' diye yazar; metinde TDV yazımı korundu. 'Süleymaniye Camii'nin yanına' — TDV 'Şam'daki Süleymaniye Camii'ne gömülmesi kararlaştırıldı' der; hazîre/kabristan ayrıntısı TDV'de yok.",
  gorsel:null, gorsel_kaynak:"aranmadı" }

];

// ============================================================================
// EK OKUMA — SULTAN İBRAHİM DÖNEMİ: SARAY HAYATI · SKANDAL · İLGİNÇ HİKÂYELER
// ============================================================================
// PAKET-EK-B · 14 Eylül 2026 · kutu parti-emrelic-0050 H-0008 · koordinatör 1.MURAT
// Rapor: denetim/PAKET-EK-B-0914.md
//
// ── YÜKLEYİCİ ───────────────────────────────────────────────────────────────
// `window.EKOKUMA_IBRAHIM` (§7 ad alanı: dosya adındaki ayırt edici parça
// değişken adında da var). `js/app.js _ekHavuz()` `^EKOKUMA(_[A-Z0-9]+)?$`
// desenini otomatik toplar; ama dosyanın yüklenmesi için `_EKOKUMA_DOSYA_ADLARI`
// dizisine "ekokuma_ibrahim" satırı GEREKİR (UI oturumunun işi — rapor §5).
//
// ── ŞEMA (ekokuma_magazin.js ile aynı; app.js ekKartHtml magazin dalı) ───────
//   { id, tur:"magazin", kisi:[padişah id], t, olay:[...], soru, baslik,
//     metin, not, kesinlik, kaynak, ic_not }
//   `t` bağlanan kronoloji maddesinin `t:`si ile birebir; `olay` listesi aynı
//   günü taşıyorsa `t` listeye devreder (app.js ekKartBagliMi). Çok maddeli
//   günlerde "gün|başlık parçası" ayırt edicisi kullanıldı.
//   `not` OKURA GÖRÜNÜR; `ic_not` üretim notudur, app.js _icNotAyikla ile
//   çizimden önce ayıklanır.
//
// ── KAYNAK — okunarak (gövde metni çıkarıldı, yalnız HTTP kodu değil) ────────
//   TDV: ibrahim--padisah · mustafa-i · kosem-sultan · huseyin-efendi-cinci-hoca ·
//        hezarpare-ahmed-pasa · varvar-ali-pasa · salih-pasa · haseki ·
//        kemankes-mustafa-pasa · valide-sultan · turhan-sultan
//   Akademik (DergiPark PDF, pypdf ile metni okundu):
//     Bekir Gökpınar, "Osmanlı Kronikleri Işığında Sultan İbrahim ve Dönemi
//       (1640-1648)", ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (Nisan 2020)
//     Volkan Çeribaş, "Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü:
//       Kemankeş Kara Mustafa Paşa ve Hezarpâre Ahmed Paşa", OTAM 51 (2022), 99-125
//     Birol Gündoğdu, "Delegitimizing Sultan Ibrahim", Mukaddime 17/1 (2026), 128-155
//   OKUNMADI (yalnız ikincil atıf): Peirce 1993 · Uluçay, Padişahların Kadınları
//     ve Kızları · Naîmâ/Vecîhî/Kâtib Çelebi'nin kendileri (akademik yayınların
//     aktarımıyla kullanıldı, metinde "…'ya göre" diye adıyla anılır).
//
// ── BULUNAMAYAN (ayrıntı her kartın ic_not'unda) ────────────────────────────
//   IV. Murad'ın naaşının "ayaklarını gıdıklama" anlatısı  — akademik kaynakta YOK
//   "Şişman kadın" / Şivekâr'ın arattırılması hikâyesi     — akademik kaynakta YOK
//   "Yeni Valide Mescidi" ile İbrahim dönemi bağı          — okunan kaynaklarda YOK
// ============================================================================

window.EKOKUMA_IBRAHIM = [

// ---------- 1640 · cülus ----------
{ id:"ibrahim-culus-iki-kez-bakti-1640", tur:"magazin", kisi:["ibrahim"],
  t:"1640-02-09", olay:["1640-02-09"],
  soru:"İbrahim ağabeyinin öldüğüne neden inanmadı?",
  baslik:"Odasından çıkmayan şehzade: 'Kendiniz gidip bakın'",
  metin:"IV. Murad'ın saltanatında kardeşleri Bayezid, Süleyman ve Kasım birer birer boğdurulmuştu; hanedanın hayatta kalan son erkeği İbrahim, sıranın kendisine geleceği korkusuyla yaşıyordu. Ağabeyi ölünce sadrazamın gönderdiği kapı ağası gelip tahtın artık onun olduğunu söyledi, ama İbrahim bunu kendisini odasından çıkarıp öldürmek için kurulmuş bir tuzak sandı ve dışarı adım atmadı. Naîmâ'nın anlatısına göre kapı ağası ile annesi Kösem Sultan koluna girip onu 'kendiniz gidip bakın' diyerek ikna etti; İbrahim ağabeyinin cesedini görmekle yetinmedi, emin olmak için iki kez baktı ve ancak ondan sonra tahta oturdu. Fransız gezgin Du Loir'ın naklettiği bir rivayet, IV. Murad'ın ölüm döşeğinde İbrahim'in öldürülmesini istediğini ve Kösem Sultan'ın buna engel olduğunu anlatır; Osmanlı tarihçisi Solakzâde ise tam tersine, ölmekte olan padişahın kardeşini yanına çağırıp tahtı ona vasiyet ettiğini yazar.",
  not:"Naaşa iki kez bakma sahnesi Naîmâ'nın anlatısına dayanır. Ölüm döşeğindeki öldürme emri bir yabancı gözlemcinin rivayetidir; Osmanlı kaynaklarında bunun tersini söyleyen bir anlatı da vardır.",
  kesinlik:"tartismali",
  kaynak:"TDV: ibrahim--padisah · kosem-sultan · Bekir Gökpınar, \"Osmanlı Kronikleri Işığında Sultan İbrahim ve Dönemi (1640-1648)\", ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (2020)",
  ic_not:"H-0008'in saydığı 'IV. Murad'ın ölüsünün ayaklarını gıdıklama' anlatısı OKUNAN HİÇBİR KAYNAKTA YOK: TDV ibrahim--padisah (gövde 42.926 kr, cülus sahnesi: 'ağabeyisinin cesedini gördükten sonra'), TDV kosem-sultan, Gökpınar 2020 (Naîmâ II/941-942 aktarımı: 'bizzat iki defa bakmıştır'), Çeribaş 2022, Gündoğdu 2026. TR/EN web aramasında yalnız popüler siteler çıktı ⇒ akademik dayanak bulunamadı, karta YAZILMADI. Du Loir rivayetini TDV 'kesin olarak doğrulanamayan' diye verir (okura 'rivayet' denerek aktarıldı). GÜN: TDV biat töreni 16 Şevval 1049 = 9 Şubat 1640 Perşembe; Gökpınar ölümü Topçular Kâtibi'ne dayanarak 9 Şubat verir; data/padisahlar.js murad4 olum '1640-02-08' — tutarsızlık raporda (padisahlar.js bu paketin dosyası değil)." },

// ---------- 1642-1648 · Cinci Hoca ----------
{ id:"ibrahim-cinci-hoca-nefes-ve-dam-1642", tur:"magazin", kisi:["ibrahim"],
  t:"1642-01-01", olay:["1642-01-01|Cinci","1648-08-08"],
  soru:"Cinci Hoca nasıl kazasker oldu, nasıl düştü?",
  baslik:"Kuvvetli nefesten damdan atlayışa: Cinci Hoca",
  metin:"Safranbolulu Hüseyin Efendi, İstanbul'da medresesini bitiremeden 'kuvvetli nefesi' ve okuduğu dualarla ün kazandı. Ruhsal sıkıntılar çeken Sultan İbrahim'i rahatlatması için Kösem Sultan tarafından saraya çağrıldı; padişahın gözdesi olunca kendisine Mahmud Paşa Camii yanında döşeli bir konak yapıldı, medrese eğitimini tamamlamamış hoca önce müderris, sonra padişah hocası ve 1644'te Anadolu kazaskeri oldu. Çağdaşı Karaçelebizâde onu padişahın içine kötü ruhlar gibi sızmış biri diye anar. İbrahim tahttan indirilince yeni padişahın cülus bahşişi için ondan para istendi; direnen hoca, evi basılınca paniğe kapılıp damdan komşunun evine atladı, saklandığı yerden çıkarılıp dövüldü. Evinden sandıklar dolusu altın ve mücevher, elliden fazla samur kürk çıktı; askere dağıtılan paralarına halk bir süre 'Cinci akçesi' dedi. Birkaç ay sonra, 1648 sonbaharında öldürüldü.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: huseyin-efendi-cinci-hoca · ibrahim--padisah · Volkan Çeribaş, \"Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü\", OTAM 51 (2022)",
  ic_not:"`cinci-hoca` slug'ı 200 ama YÖNLENDİRME KÜTÜĞÜ ('bk. HÜSEYİN EFENDİ, Cinci Hoca', D109); gerçek madde huseyin-efendi-cinci-hoca (gövde 8.092 kr okundu). Sahn müderrisliği Haziran 1642, kazaskerlik Mayıs 1644, damdan atlama Ağustos 1648 sonrası (cülus bahşişi), ölüm Şevval 1058 = Ekim-Kasım 1648 (kendi kronoloji maddesi yok). Karaçelebizâde nitelemesi TDV'deki 'ervâh-ı habîse gibi hulûl eden' ifadesinin çevirisidir. 1648-08-08 bağı: cülus bahşişi olayı o maddenin konusu." },

// ---------- 1644 · Kösem ile oğlu ----------
{ id:"ibrahim-kosem-anne-ogul-cekismesi", tur:"magazin", kisi:["ibrahim"],
  t:"1644-01-01", olay:["1644-01-01|Deli İbrahim","1648-08-08"],
  soru:"Kösem Sultan oğlu İbrahim'le neden bozuştu?",
  baslik:"Oğlunu kurtaran anne, sarayından çıkarılan vâlide",
  metin:"Kösem Sultan, IV. Murad kardeşlerini birer birer öldürtürken İbrahim'i âciz ve zavallı biri gibi göstererek kurtarmış, tahta çıkmasını da sağlamıştı. Oğlunun ilk yıllarında yeniden sarayın en güçlü kadını oldu, ama zamanla İbrahim onu dinlemez hâle geldi. Kösem, padişahın musâhibesi Şekerpâre Hatun'u saraydan uzaklaştırmak için büyük uğraş verdi ve sürgününü ancak güçlükle sağlayabildi. Tarihçi Vecîhî'ye göre büyük vâlide oğlunu kötü gidiş konusunda sık sık uyardı, İbrahim kulak asmadı; Kösem önce Harem'den çıkarılıp Topkapı'daki bir bahçeye, sonra Bakırköy'deki İskender Çelebi Bahçesi'ne yerleşmek zorunda bırakıldı. Bir rivayete göre padişah annesini Rodos'a sürmeyi bile düşündü. 1648'de hal' kararı getirildiğinde Kösem önce oğlunu savundu, sonunda torunu Mehmed'in tahta çıkarılmasına razı oldu; olayların içindeki tarihçi Karaçelebizâde, İbrahim'in boğdurulması kararında onun da payı olduğunu yazar.",
  not:"Rodos'a sürgün tasarısı bir rivayettir. Kösem'in idam kararındaki payı yalnız Karaçelebizâde'nin anlatısında geçer.",
  kesinlik:"tartismali",
  kaynak:"TDV: kosem-sultan · ibrahim--padisah",
  ic_not:"Karaçelebizâde'nin Kösem'i suçlayan ifadelerini TDV ibrahim--padisah 'başka kaynaklarla teyit edilememektedir' diye kaydeder; okur metnine yalnız 'yazar' diye aktarıldı. Bağ: 1644-01-01 günü iki madde taşır (olaylar_ek17 'Deli İbrahim' tartışması + kronoloji_kirim) ⇒ ayırt edici kondu. Tutarlılık: ekokuma_kadin.js kimdir-kosem-sultan kartıyla çelişki YOK (orada yalnız genel biyografi)." },

// ---------- 1647 · araba yasağı ve Sâlih Paşa ----------
{ id:"ibrahim-ot-arabasi-salih-pasa-1647", tur:"magazin", kisi:["ibrahim"],
  t:"1644-01-01", olay:["1644-01-01|Deli İbrahim"],
  soru:"Bir ot arabası sadrazamın canına mı mal oldu?",
  baslik:"Yolu kesen ot arabası ve kuyu ipiyle boğulan sadrazam",
  metin:"Rahatsızlıkları arttıkça Sultan İbrahim, nefesinin ya da okumasının iyi geldiğine inandığı kişilerin evlerine sık sık gitmeye başladı. Bu gezilerde yoluna araba çıkmasını istemediği için Sadrazam Sâlih Paşa'ya yolları denetletmesini emretti. Kaynakların çoğuna göre bir gün okunmak için Davutpaşa'da bir imamın evine giderken önüne bir ot arabası çıktı; emrinin uygulanmadığını düşünen padişah, o sırada ikindi divanını yöneten sadrazamı oraya çağırtıp aynı evde kuyu ipiyle boğdurdu (Eylül 1647). Tarihçi Vecîhî başka bir sebep anlatır: Sâlih Paşa'nın padişahı tahttan indirme konusunu şeyhülislâmla gizlice görüştüğünü, şeyhülislâmın buna yanaşmayıp durumu Kösem Sultan'a, onun da oğluna bildirdiğini yazar; bazı araştırmacılar bu ikinci anlatıyı daha güçlü bulur. Sadaret mührü padişahın musâhibesi Şekerpâre Hatun'un kocası Köse Mûsâ Paşa'ya gönderildi, ama o gelene kadar yerini tutan Ahmed Paşa mührü kendi üzerine geçirmeyi başardı.",
  not:"Sâlih Paşa'nın öldürülme sebebi kaynaklarda iki farklı biçimde anlatılır; kart ikisini de verir.",
  kesinlik:"tartismali",
  kaynak:"TDV: salih-pasa · ibrahim--padisah · hezarpare-ahmed-pasa · Volkan Çeribaş, \"Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü\", OTAM 51 (2022)",
  ic_not:"GÜN ÇELİŞKİSİ: TDV salih-pasa '16 Şâban 1057 / 16 Eylül 1647'; TDV hezarpare-ahmed-pasa '17 Eylül 1647'de … katli' ⇒ okura yalnız 'Eylül 1647' yazıldı. 'Daha güçlü bulur' = TDV ibrahim--padisah'ın 'daha kuvvetli olduğu tahmin edilen bir diğer rivayet' ifadesi; TDV salih-pasa ise 'eğer doğruysa' der. Olayın kendi kronoloji maddesi YOK; kart padişahın hastalığını ve okunmaya gitmesini anlatan 1644-01-01 tartışma maddesine bağlandı (tema bağı, gün bağı değil)." },

// ---------- 1647 · samur ----------
{ id:"ibrahim-samur-meraki-falci-hikayesi", tur:"magazin", kisi:["ibrahim"],
  t:"1647-01-01", olay:["1647-01-01|Samur"],
  soru:"İbrahim'in samur merakı bir masaldan mı doğdu?",
  baslik:"Falcı kadının masalı ve samurla döşenen köşkler",
  metin:"Sultan İbrahim'in adı samur kürk ve amber düşkünlüğüyle birlikte anılır. Naîmâ'nın Şârihülmenârzâde'den naklettiğine göre bu merak, Eyüp'te oturan ve 'Voyvoda Kızı' diye bilinen falcı bir kadının saraya ulaşan hikâyeleriyle başladı: kadın bir gece, eski zamanlarda elbisesinden yastığına kadar her şeyini samurdan yaptıran bir padişahı anlattı ve İbrahim bu hikâyeden etkilendi. Tarihçi Vecîhî, taşradaki vezir ve idarecilere köşklerini samur kürkle döşemelerinin emredildiğini, uymayanların görevden alındığını, vezir ve ulemâdan içi dışı samur birer elbise hediye istendiğini yazar. Sadrazam Ahmed Paşa bu merakı devlet ileri gelenlerinden toplanan bir samur ve amber bedeline dönüştürdü; bedeli yeniçeri ağalarından da isteyince padişahın sonunu hazırlayan isyan başladı. Arşiv belgelerini yeniden inceleyen yeni bir çalışma ise samurun sarayda diplomatik hediye ve törensel ihsan olarak dolaştığını, devleti batıran bir takıntıyı ise belgelerin doğrulamadığını ileri sürer.",
  not:"Falcı kadın hikâyesi tek bir kronikçinin aktarımına dayanan bir rivayettir. Samur merakının boyutu tarihçiler arasında tartışmalıdır.",
  kesinlik:"tartismali",
  kaynak:"TDV: ibrahim--padisah · hezarpare-ahmed-pasa · Volkan Çeribaş, \"Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü\", OTAM 51 (2022) · Birol Gündoğdu, \"Delegitimizing Sultan Ibrahim\", Mukaddime 17/1 (2026)",
  ic_not:"Falcı hikâyesi: Çeribaş 2022, dipnot 91 (Naîmâ, İpşirli neşri). Vecîhî ferman ve elbise hediyesi: TDV ibrahim--padisah (Vecîhî s. 79-80). Karşı görüş: Gündoğdu 2026 (BOA TS.MA.d. 7998, 10457, 551; sonuç: 'neither fully corroborates nor simply invalidates'). Bağ: 1647-01-01 üç madde taşır ⇒ '|Samur' ayırt edicisi. Bağlı kronoloji maddesi (olaylar_ek17) tur:'sebep-sonuc' ama kronoloji dosyasında; kart onu tekrar etmez, hikâyenin kişisel yüzünü anlatır." },

// ---------- 1647 · Telli Haseki ----------
{ id:"ibrahim-telli-haseki-nikahi", tur:"magazin", kisi:["ibrahim"],
  t:"1647-01-01", olay:["1647-01-01|Samur"],
  soru:"Telli Haseki için İstanbul'da gece neler oldu?",
  baslik:"Sekizinci haseki: nikâh, düğün ve gece açtırılan dükkânlar",
  metin:"Osmanlı padişahları câriyeleriyle nikâhlanmayı âdet edinmemişti. Sultan İbrahim bu teamülü bozarak sekizinci hasekisi Hümâşah'ı, kaynaklarda daha çok 'Telli Haseki' diye anılan gözdesini nikâhına aldı ve onun için sarayda gösterişli bir düğün yaptırdı; çevresindekilerden büyük hediyeler vermesi beklendi. Sultanahmet Meydanı'ndaki İbrahim Paşa Sarayı yeni hanımın oturması için döşendi. Bunun için gece yarısı hanlar ve bedestenler açtırıldı; içlerindeki değerli kumaşlar, samur ve vaşak kürkler, mücevherler parası sonra ödenmek üzere zorla alındı. Saraydaki bir oda samur kürklerle kaplandı; işi yürüten defterdar Halıcızâde, döşemede kusurlu malzeme kullandığı gerekçesiyle üç gece hapsedildi.",
  not:"Kaynaklarda Hümâşah ve Şah Sultan adlarıyla da anılır.",
  kesinlik:"kesin",
  kaynak:"TDV: ibrahim--padisah · haseki · Bekir Gökpınar, ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (2020) · Volkan Çeribaş, OTAM 51 (2022)",
  ic_not:"Nikâh ve düğün: TDV ibrahim--padisah ('sekizinci hasekisini (Telli Haseki, Hümâşah Sultan) nikâhına almış'); ad 'Şah Sultan (Telli Haseki)': TDV haseki. Gece açtırılan hanlar: TDV ibrahim--padisah. Halıcızâde'nin hapsi: Çeribaş 2022 (#619). NİKÂH GÜNÜ okunan akademik kaynaklarda YOK; Vikipedi 'Aralık 1647' diyor, İstanbul Ansiklopedisi (R. E. Koçu) maddesi kaynak göstermiyor ⇒ ikisi de dayanak sayılmadı, gün yazılmadı. Kendi kronoloji maddesi yok; samur maddesine bağlandı (döşeme samur kürkle)." },

// ---------- hasekiler ve paşmaklık ----------
{ id:"ibrahim-hasekiler-pasmaklik-eyaletler", tur:"magazin", kisi:["ibrahim"],
  t:"1648-05-01", olay:["1648-05-01|Varvar"],
  soru:"Padişah eyaletleri hasekilerine mi dağıttı?",
  baslik:"Yedi haseki, yüz bin kuruşluk haslar ve 'paşmaklık' eyaletler",
  metin:"Tahta çıktığında hanedanın tek erkek vârisi olan İbrahim'in çocuk sahibi olması, Kösem Sultan'ın ilk kaygısıydı; padişaha sunulan câriyelerin ve gözdelerin sayısı hızla arttı. Tarihçi Vecîhî, onun gözdelerini haseki yaptığını, bunlara yüklü haslar bağladığını ve seçkin eyalet ve sancakların 'paşmaklık' adıyla hasekilere verildiğini yazar. Dönem kaynaklarında yedi hasekinin yıllık haslarının yüz bin kuruşu bulduğu, hasekilerden birine Şam eyaletinin gelirinin ayrıldığı, makamların kadınların aracılığıyla ve rüşvetle alınıp satıldığı özellikle vurgulanır. Boşalan önemli eyaletlerin gözdelere hass olarak verilmesi Sadrazam Sâlih Paşa'yı bile rahatsız etti; Sivas Beylerbeyi Varvar Ali Paşa da 1648'deki başkaldırısını devlet işlerinin kadınların eline geçtiği iddiasına dayandırdı. Yeni araştırmalar ise kadınlara yönelik bu suçlamaların saltanatın son yıllarındaki siyasî gerginlikle ağırlık kazandığını hatırlatır. Bu kalabalık haremden doğan oğullardan üçü, IV. Mehmed, II. Süleyman ve II. Ahmed, sonradan padişah oldu.",
  not:"Hasekilerin sayısı ve gelirleri dönemin kroniklerine dayanır; bu anlatıların ne ölçüde abartılı olduğu tarihçiler arasında tartışılır.",
  kesinlik:"tartismali",
  kaynak:"TDV: ibrahim--padisah · kosem-sultan · salih-pasa · varvar-ali-pasa · haseki · Volkan Çeribaş, OTAM 51 (2022) · Birol Gündoğdu, \"Delegitimizing Sultan Ibrahim\", Mukaddime 17/1 (2026)",
  ic_not:"H-0008 'Şişman Kadın düşkünlüğü': Şivekâr'ın 'en şişman kadın' aranarak bulunduğu hikâyesi OKUNAN AKADEMİK KAYNAKLARDA YOK. Gökpınar 2020 yalnız 'Şivakar Sultan' adını hanımlar listesinde verir; TDV ibrahim--padisah 'Şîvekâr' adını zevceler arasında sayar, hikâyeyi anmaz; Çeribaş ve Gündoğdu anmaz. Vikipedi hikâyeyi Uluçay, Padişahların Kadınları ve Kızları (1992) s. 98'e atfeder — Uluçay OKUNMADI (D107) ⇒ karta YAZILMADI. Sayılar: Çeribaş #500 'yedi haseki … yüz bin guruş … Şam eyaletinin gelirlerini arpalık' (Naîmâ s. 1111 + Mehmed Halife); TDV/Vecîhî 'sekiz gözde' (7 + nikâhlı Telli). 'Yeni Valide Mescidi' ile bu dönem arasında bağ okunan kaynaklarda BULUNAMADI. Gündoğdu #330: kadın etkisi suçlamalarının 1644/45 sonrası keskinleştiği." },

// ---------- 1648 · Varvar Ali Paşa ----------
{ id:"varvar-ali-pasa-perihan-hanim-1648", tur:"magazin", kisi:["ibrahim"],
  t:"1648-05-01", olay:["1648-05-01|Varvar"],
  soru:"Varvar Ali Paşa hangi emirleri reddedip isyan etti?",
  baslik:"Bir kadını saraya göndermeyen paşa, onun kocası eliyle öldü",
  metin:"Bosnalı bir köy çocuğuyken devşirilen, sarayda doğancılıkla yükselen ve hayatını kendi yazdığı manzum bir eserde anlatan Varvar Ali Paşa, 1647 sonbaharında Sivas beylerbeyiyken İstanbul'dan iki emir aldı. Birincisi 'bayram harçlığı' adıyla 30.000 kuruş istiyordu; paşa eyaletin gelirini hesaplatıp bu paranın ödenemeyeceğini bildirdi. İkincisi, Anadolu Beylerbeyi İpşir Mustafa Paşa'nın Sivas'taki nikâhlı eşi Perihan Hanım'ın padişaha sunulmak üzere İstanbul'a gönderilmesiydi; Kâtib Çelebi'ye göre paşa bunu da geri çevirdi. Azledildi, öldürülmesi için gönderilenleri şehre sokmadı ve devlet işlerinin kadınların elinde kaldığını ilan ederek İstanbul'a yürümeye karar verdi. Evliya Çelebi, başkentteki bazı çevrelerin, hatta Kösem Sultan'ın onu mektuplarla cesaretlendirdiğini ileri sürer. Köprülü Mehmed Paşa'yı yenip esir alan Varvar Ali, 20 Mayıs 1648'de kendisine katılmaya geldiğini sandığı İpşir Mustafa Paşa'nın baskınına uğradı; karısının saraya gönderilmesini reddettiği adam onu yakalatıp idam ettirdi.",
  not:"İstanbul'dan gelen gizli destek mektupları yalnız Evliya Çelebi'nin anlatısında geçer.",
  kesinlik:"tartismali",
  kaynak:"TDV: varvar-ali-pasa · ibrahim--padisah",
  ic_not:"Emirler Ramazan 1057 = Ekim 1647 (TDV varvar-ali-pasa); Perihan Hanım adı ve ret: TDV varvar-ali-pasa (Kâtip Çelebi s. 1016); TDV ibrahim--padisah 'güzelliğiyle meşhur hanımının İstanbul'a yollanması emrine karşı çıkmış' der ve asıl sebebin beylerbeyilerin iki üç ayda bir azli olması gerektiğini (Vecîhî) ekler. Mektuplar: Evliya Çelebi II, 193-194. Makâlât 177 beyit. Bağlı kronoloji maddesi 1648-05-01 AY hassasiyetli (Mayıs 1648 → ayın 1'i; CLAUDE.md §4 üçüncü hassasiyet ekseni) — idam günü 20 Mayıs, maddenin kendi d: metninde de yazılı." },

// ---------- 1645 · Girit'i başlatan gemi ----------
{ id:"girit-seferi-sunbul-aga-gemisi-1645", tur:"magazin", kisi:["ibrahim"],
  t:"1645-04-01", olay:["1645-04-01"],
  soru:"Girit seferini bir harem ağasının gemisi mi açtı?",
  baslik:"Korsanların bastığı gemi ve 'Malta seferi' diye gizlenen hedef",
  metin:"Görevinden alınan Kızlarağası Sünbül Ağa, kalabalık maiyeti ve değerli eşyasıyla Mısır'a giderken gemileri Kerpe adası açıklarında Malta korsanlarının baskınına uğradı; mallar yağmalandı, Sünbül Ağa dahil yolculardan bazıları öldürüldü, bazıları esir alındı. Haber padişahı çok öfkelendirdi: İbrahim baskını kimin yaptığını İstanbul'daki elçilere sordurdu ve donanmanın hazırlanmasını emretti; Malta ve onun koruyucusu sayılan Venedik birden hedef hâline geldi. Avusturya elçisi Czernin'in raporlarına göre Osmanlı diplomatik çevrelerinde padişahın Malta'ya deniz seferi emrinden başka bir şey konuşulmuyordu; oysa asıl hedef Girit'ti ve bu, yabancı elçilerden ustalıkla saklandı. Donanma 30 Nisan 1645'te 'Malta seferi' diye İstanbul'dan ayrıldı; hedefin Girit olduğu ancak Navarin'den yola çıkılırken açıklandı. Böylece uzun yıllara yayılacak bir savaş başladı; yine de kaynaklar bu seferde padişahın öfkesinden çok stratejik hesapların ağır bastığını belirtir.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: ibrahim--padisah",
  ic_not:"YIL SORUNU: TDV ibrahim--padisah gövdesi baskını '1641 Temmuzunda' diye yazar, ama cümle Czernin heyetinin 1644 sonbaharı raporları bağlamında geçer ve Girit hazırlığını tetikleyen olay olarak anlatılır ⇒ gövde kendi içinde tutarsız görünüyor (CLAUDE.md §4 tuzak ⑥); başka akademik kaynakla sınanmadı ⇒ baskının yılı okura YAZILMADI. Donanmanın çıkışı 4 Rebîülevvel 1055 = 30 Nisan 1645; Navarin'den hareket 21 Haziran (TDV). Bağlı madde 1645-04-01 AY hassasiyetli ('Nisan 1645')." },

// ---------- 1646 · çocuk gelinler ve damat vezirler ----------
{ id:"ibrahim-cocuk-yastaki-kizlar-damat-vezirler", tur:"magazin", kisi:["ibrahim"],
  t:"1645-08-22", olay:["1645-08-22|Hanya'nın fethi"],
  soru:"İbrahim küçük kızlarını kimlerle evlendirdi?",
  baslik:"Dört yaşında gelin, iki yaşında eş: padişahın damat vezirleri",
  metin:"Kaynaklarda Sultan İbrahim'in garip karşılanan âdetlerinden biri, çocuk yaştaki kızlarını büyük şenliklerle vezirlere nikâhlamasıdır. Hanya'yı alan Silâhdar Yûsuf Paşa, padişahın henüz dört yaşındaki kızıyla evlendirilmiş bir damattı. Ne var ki Hanya'dan sarayın beklediği ganimeti getirmediği dedikoduları yayıldı; padişah Girit'in hemen tamamen alınmasını emredince paşa kış mevsimini gerekçe gösterip itiraz etti ve padişahla tartıştı. 22 Ocak 1646'da idam edildi. Kalemiyeden yetişip sadarete yükselen Ahmed Paşa'yı damat edinmek için ise padişah onu nikâhlı karısından ayırdı ve iki yaşındaki kızı Beyhan Sultan'la evlendirdi (Şubat 1648). Birkaç ay sonra bu damat da isyancıların eline düşecekti.",
  not:"",
  kesinlik:"kesin",
  kaynak:"TDV: ibrahim--padisah · hezarpare-ahmed-pasa · Bekir Gökpınar, ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (2020) · Volkan Çeribaş, OTAM 51 (2022)",
  ic_not:"Yûsuf Paşa: TDV ibrahim--padisah ('henüz dört yaşındaki kızıyla evlendirmiş olduğu Silâhdar Yûsuf Paşa', idam 5 Zilhicce 1055 / 22 Ocak 1646); Czernin'in rüşvet iddiası ve Sultanzâde Mehmed Paşa rekabeti karta alınmadı. Beyhan Sultan: TDV ibrahim--padisah 'Şubat 1648; TSMA E. 7112'; TDV hezarpare 'henüz iki yaşında olan kızı Beyhan Sultan'a namzet' (Eylül 1647); Çeribaş #564 'iki yaşındaki'. Genel ifade: Gökpınar #296. GÜN FARKI: TDV Hanya'nın teslimini 19 Ağustos 1645 verir, bağlı kronoloji maddesi 1645-08-22 — raporda. Bağ: 1645-08-22 üç madde taşır ⇒ ayırt edici." },

// ---------- 1648 · Hezarpâre ----------
{ id:"hezarpare-ahmed-pasa-bin-parca-1648", tur:"magazin", kisi:["ibrahim"],
  t:"1648-08-18", olay:["1648-08-18"],
  soru:"Sadrazama neden 'Hezarpâre' dendi?",
  baslik:"Klis'i saklayan sadrazamın 'bin parça' sonu",
  metin:"Güzel ve hızlı yazısıyla maliye kalemlerinden yetişen Ahmed Paşa, Eylül 1647'de, rivayete göre padişaha 300.000 kuruş sunarak sadrazam oldu. Venedikliler Dalmaçya'da Klis Kalesi'ni alınca bunu padişahtan sakladı, olanı küçük bir kilise ile birkaç önemsiz palankanın kaybı gibi gösterdi; gerçeği anlatan vezir Fazlı Paşa'yı padişah azarladı ve İstanbul'dan uzaklattırdı. Sarayda savaşın konuşulmasını bile yasakladı. Naîmâ, sadrazamın oğlunun düğününe çağırdığı yeniçeri ağalarını topluca öldürtmeyi tasarladığını, ağaların tuzağı sezip kaçtığını anlatır; bu komplo dönemin öteki kaynaklarında geçmez. Ağalar ve ulemâ ayaklanınca kılık değiştirip bir heybe altınla kaçtı, sığınmak istediği tanıdıklar kapılarını açmadı; bir ihbarla yakalanıp 7-8 Ağustos 1648 gecesi boğuldu. Evliya Çelebi'ye göre Atmeydanı'na atılan cesedi, insan yağının eklem ağrılarına iyi geldiği inancıyla parça parça edildi; 'bin parça' anlamındaki Hezarpâre lakabı buradan gelir. İstanbul'daki Paşabahçe semti de adını onun oradaki bahçesinden alır.",
  not:"Düğün tuzağı yalnız Naîmâ'nın kaynağında geçer; cesedin parçalanma sebebi Evliya Çelebi'nin anlatısıdır.",
  kesinlik:"tartismali",
  kaynak:"TDV: hezarpare-ahmed-pasa · ibrahim--padisah · Volkan Çeribaş, \"Sultan İbrahim Döneminde Sadaretin İki Farklı Yüzü\", OTAM 51 (2022)",
  ic_not:"Sadaret 21 Şâban 1057 / 21 Eylül 1647; 300.000 kuruş 'bir rivayete göre' (TDV hezarpare). Düğün komplosu: TDV ibrahim--padisah 'Naîmâ'nın kaynağına dayanarak zikrettiği bu komplo dönemin kaynaklarında yer almaz'. İnsan yağı: Evliya Çelebi I, 113 (TDV hezarpare). Ölüm 17-18 Receb 1058. Kendi kronoloji maddesi yok; hal' ve katl maddesine (olaylar_ek2, gun '8-18 Ağustos 1648') bağlandı." },

// ---------- 1648 · hal' günü ----------
{ id:"ibrahim-hal-gunu-yumruk-ve-oda-1648", tur:"magazin", kisi:["ibrahim"],
  t:"1648-08-08", olay:["1648-08-08","1648-08-18"],
  soru:"Tahttan indirildiği gün İbrahim ne yaptı?",
  baslik:"Mührü verdi, sadrazamı yumrukladı: hal' günü",
  metin:"7 Ağustos 1648 sabahı yeniçeri ağaları Atmeydanı'ndaki Orta Cami'de, ulemâ Fâtih Camii'nde toplandı ve Sofu Mehmed Paşa'yı sadrazam ilan etti. Sultan İbrahim yeni sadrazamı saraya çağırıp mührü verdi, yalnız damadı Ahmed Paşa'ya dokunulmamasını istedi. Topluluk bunu kabul etmeyince Mehmed Paşa kararı bildirmek için ikinci kez huzura çıktı; Kâtib Çelebi'ye göre padişah onu azarladı, ağır sözler söyledi, hatta yumrukladı. Ertesi gün hal' kararıyla gelen heyete Kösem Sultan önce 'camide cülus olmaz' diyerek karşı çıktı, küçük bir çocuğun tahta çıkarılmasının şer'an uygun düşmeyeceğini savundu; sonunda yedi yaşındaki Şehzade Mehmed'i ortaya çıkardı. Olayların içindeki Karaçelebizâde, içeriden İbrahim'in bağırışları duyulurken şaşkın duran şehzadenin koluna girip onu tahta oturttuğunu anlatır. Naîmâ'ya göre heyet eski padişahı ağır sözlerle suçladı, o da onlara bedduada bulundu. İbrahim, bir gün önceden hazırlanan iki kubbeli bir odaya yanında iki câriyesiyle kapatıldı; on gün sonra aynı odada boğdurulacaktı.",
  not:"Heyetle İbrahim arasındaki karşılıklı sözler Naîmâ'nın anlatısıdır; olayların içindeki Karaçelebizâde bu konuşmadan söz etmez.",
  kesinlik:"tartismali",
  kaynak:"TDV: ibrahim--padisah · hezarpare-ahmed-pasa · kosem-sultan · Bekir Gökpınar, ETÜ Sosyal Bilimler Enstitüsü Dergisi 10 (2020)",
  ic_not:"Yumruk: TDV ibrahim--padisah (Kâtib Çelebi II, 327); TDV hezarpare 'tartaklandı'. 'Camide cülus olmaz': Gökpınar #348 (Kâtip Çelebi 2016 II/987) — okura sözün anlamıyla aktarıldı. Karaçelebizâde'nin Naîmâ'daki sert sözleri: TDV ibrahim--padisah (Naîmâ IV, 326-327); TDV kararın gerekçelerini çoklu aktarır. Katl sahnesi ve sorumluluk tartışması magazin.js 'ibrahim-katli-kim-emretti-1648' kartında — bu kart onu TEKRAR ETMEZ, kilide kurşun ayrıntısı orada. H-0008 'kafese konup kafeste katledilmesi' = bu kart + o kart." }

];

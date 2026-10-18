// data/ekokuma_edebiyat.js — window.EKOKUMA_EDEBIYAT
// "edebiyat" türü ek okuma kartları — H-0003/H-0019/H-0020, paket 0045 pilotu.
// Şema: denetim/SEMA-EK-OKUMA-KULTUR-0913.md (KITA 17, 13 Eylül 2026).
// Ad alanı kuralı (§7): dosya adındaki ayırt edici parça (ekokuma_EDEBIYAT)
// değişken adında da (EKOKUMA_EDEBIYAT).
//
// 🔴 YÜKLEYİCİ (D099): bu dosya bugün js/app.js'in ekOkumaMerakYukle()
// listesinde DEĞİL — okunması için app.js'e ~üç satır gerekiyor
// (dosya listesine ekleme + EKOKUMA_TUR["edebiyat"] kaydı + ekKartHtml'e
// bir render dalı). KITA 12'den tahtadan istendi (app.js'in tek sahibi).
// Dosya bu turdan önce YOKTU (git log --oneline -1 -- bu dosya BOŞ döndü).
//
// 🔴🔴 TELİF KIRMIZI ÇİZGİSİ (ORTAK-0045-ICERIK-PROGRAMI.md §4):
//   Metinler KENDİ CÜMLELERİMLE yazıldı, TDV kopyalanmadı — istisna
//   `fuzuli-bagdat-kasidesi` kaydındaki TEK mısralık alıntı (16. yy
//   şiirinin kendisi kamu malı, TDV maddesinin aktardığı biçimiyle,
//   kaynağıyla işaretli, 1 mısra — kırmızı çizginin izin verdiği "en
//   çok 1-2 cümle" sınırının içinde).
//   Kalan bütün `alinti.metin` alanları "bulunamadı" — doğrulanmış bir
//   kamu malı NEŞİRDEN beyit alıntısı bu turda ARANMADI (modern
//   çeviri/şerhlerin çoğu telifli, kaynağı belirsiz alıntı KULLANILMADI).
//   Bütün `gorsel`/`gorsel_kaynak` alanları "bulunamadı" — 16-17. yy
//   şairlerinin döneminden bilinen bir portresi yok; Wikimedia Commons
//   taraması bu turda YAPILMADI (kapsam dışı, ayrı bir iş).
//
// ⚠️ Aynı sanatçının birden çok kartı `sanatci.hayat`/`sanatci.onem`
// metnini AYNEN tekrarlar (Bâkî 2, Fuzûlî 2, Nedîm 2) — bu bir D034
// riskidir (bir bilgi iki yerde durursa biri güncellenince öteki
// bayatlar) ama BUGÜN sınırlı: tek dosya, tek yazar, tek commit. Bir
// sonraki oturum bu üç kişiden birini DÜZELTİRSE, kişinin HER kartını
// birden güncellemesi gerektiğini bilsin diye bu not buraya bırakıldı.
// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —
// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.
window.EKOKUMA_EDEBIYAT = [
  { id:"baki-kanuni-mersiyesi", tur:"edebiyat",
    baslik:"Bâkî'nin Kanûnî Sultan Süleyman için mersiyesi",
    eser:{ ad:"Kanûnî Mersiyesi", tur:"mersiye" },
    sanatci:{ ad:"Bâkî (asıl adı Mahmud Abdülbâkî)",
      hayat:"933'te (1526-27) İstanbul'da fakir bir ailenin çocuğu olarak doğdu; babası Fâtih Camii müezzini Mehmed Efendi'ydi. Gençliğinde bir zanaat çıraklığıyla (saraçlık ya da serrâclık) hayata atıldı, medrese eğitimiyle yükseldi. 1008'de (1600) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Osmanlı şiirine söyleyiş gücü kazandıran\" büyük dîvân şairi; çağdaşlarınca \"Sultânü'ş-şuarâ\" (şairler sultanı) diye anıldı." },
    metin:"Kanûnî Sultan Süleyman'ın 1566 Eylülünde Sigetvar seferi dönüşünde ölüm haberi İstanbul'a ulaştığında Bâkî, sultana duyduğu bağlılığı ve onun yüce şahsiyetini dile getiren mersiyesini yazdı. Osmanlı edebiyatının en tanınmış mersiyelerinden sayılır; mersiyenin son kısmı, birkaç hafta sonra tahta çıkacak II. Selim'e bir bakıma zemin hazırlar.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı yapılmadı", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1566-09-01","1566-09-07"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Bâkî\" (Mehmed Çavuşoğlu, 1991) — https://islamansiklopedisi.org.tr/baki--sair" },

  { id:"baki-selim-culusiyesi", tur:"edebiyat",
    baslik:"Bâkî'nin II. Selim'e cülûsiye sunması",
    eser:{ ad:"Cülûsiye (II. Selim için)", tur:"cülûsiye (tahta çıkış kasidesi)" },
    sanatci:{ ad:"Bâkî (asıl adı Mahmud Abdülbâki)",
      hayat:"933'te (1526-27) İstanbul'da fakir bir ailenin çocuğu olarak doğdu; babası Fâtih Camii müezzini Mehmed Efendi'ydi. Gençliğinde bir zanaat çıraklığıyla (saraçlık ya da serrâclık) hayata atıldı, medrese eğitimiyle yükseldi. 1008'de (1600) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Osmanlı şiirine söyleyiş gücü kazandıran\" büyük dîvân şairi; çağdaşlarınca \"Sultânü'ş-şuarâ\" (şairler sultanı) diye anıldı." },
    metin:"Kanûnî mersiyesinin hemen ardından, II. Selim tahta çıktığında (15 Rebîülevvel 974 / 30 Eylül 1566) Bâkî yeni padişaha bir cülûsiye sundu. Umduğu câizeyi bulamadığı gibi o sıralarda Murad Paşa müderrisliğinden de azledildi; ancak 1569'da uzun bir mâzullük döneminden çıkabildi.",
    alinti:{ metin:"bulunamadı — bkz. \"baki-kanuni-mersiyesi\" kaydı", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — bkz. \"baki-kanuni-mersiyesi\" kaydı",
    kesinlik:"kesin", olay:["1566-09-24","1566-09-30"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Bâkî\" (Mehmed Çavuşoğlu, 1991) — https://islamansiklopedisi.org.tr/baki--sair" },

  { id:"fuzuli-bagdat-kasidesi", tur:"edebiyat",
    baslik:"Fuzûlî'nin Bağdat'ın fethi sonrası Kanûnî'ye kasidesi",
    eser:{ ad:"Bağdat Fetihnâmesi Kasidesi", tur:"kaside" },
    sanatci:{ ad:"Fuzûlî (asıl adı Mehmed)",
      hayat:"Doğum tarihi ve yeri kesin bilinmiyor; kaynaklar Bağdat civarında doğduğunu yazar ama yer konusunda birleşmez. Babasının adı Süleyman'dı. 963'te (1556) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Türk edebiyatının en büyük şairlerinden\"; Türkçe, Arapça ve Farsça divan yazabilecek kadar üç dile hâkimdi." },
    metin:"Kanûnî'nin 1534'te Bağdat'ı fethetmesinin ardından Fuzûlî, sultana beş kaside sundu. Bu jestle Fuzûlî, o âna kadar bağlı olduğu Safevî himayesinden çıkıp Osmanlı devlet adamlarının hâmîliğini aramaya yöneldi.",
    alinti:{ metin:"\"Geldi burc-ı evliyâya pâdişâh-ı nâmdâr\" — kasidenin ilk mısraı, TDV maddesinin aktardığı biçimiyle", kaynak:"TDV: fuzuli" },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1534-12-04"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Fuzûlî\" (Abdülkadir Karahan, 1996) — https://islamansiklopedisi.org.tr/fuzuli" },

  { id:"fuzuli-leyla-vu-mecnun", tur:"edebiyat",
    baslik:"Fuzûlî'nin Leylâ vü Mecnûn mesnevisini tamamlaması",
    eser:{ ad:"Leylâ vü Mecnûn", tur:"mesnevi" },
    sanatci:{ ad:"Fuzûlî (asıl adı Mehmed)",
      hayat:"Doğum tarihi ve yeri kesin bilinmiyor; kaynaklar Bağdat civarında doğduğunu yazar ama yer konusunda birleşmez. Babasının adı Süleyman'dı. 963'te (1556) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Türk edebiyatının en büyük şairlerinden\"; Türkçe, Arapça ve Farsça divan yazabilecek kadar üç dile hâkimdi." },
    metin:"Leylâ vü Mecnûn, Fuzûlî tarafından 1535'te, Kanûnî'nin Bağdat seferine katılan İstanbullu şairlerin isteği üzerine yazılıp tamamlandı. Arap yarımadasının eski bir aşk efsanesini işleyen eser, klasik Türk edebiyatının en güzel mesnevilerinden sayılır.",
    alinti:{ metin:"Çölde buluşan Leylâ'nın Mecnûn'a sözü: \"Ger ben ben isem nesin sen ey yâr / V'er sen sen isen neyim men-i zâr\" — TDV'nin Leylâ vü Mecnûn maddesinin aktardığı beyit", kaynak:"TDV: leyla-vu-mecnun" },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1535-01-01|Leylâ"],  // PAKET-A2 13 Eyl: 1535-01-01'de Tigre ve Çitor maddeleri de vardı
    kaynak:"TDV İslâm Ansiklopedisi, \"Fuzûlî\" (Abdülkadir Karahan, 1996) — https://islamansiklopedisi.org.tr/fuzuli" },

  { id:"nedim-lale-devri", tur:"edebiyat",
    baslik:"Nedîm'in Lâle Devri şiirinin öncüsü olarak öne çıkması",
    eser:{ ad:"Lâle Devri şiirleri", tur:"divan şiiri (dönem üslûbu)" },
    sanatci:{ ad:"Nedîm (asıl adı Ahmed)",
      hayat:"İstanbul'da muhtemelen 1092'de (1681) doğdu; babası kazasker torunu Kadı Mehmed Efendi, annesi Karaçelebizâdeler ailesindendi. 1143'te (1730) öldü.",
      onem:"TDV'nin tarifiyle \"divan şiirinde kendi adıyla anılan bir tarz ortaya koyan şair\" — sade ve nükteli üslûbuyla Lâle Devri'nin en tanınmış ismi oldu." },
    metin:"1718-1730 arasındaki Lâle Devri boyunca Nedîm, ifade sadeliği ve nükteli üslûbuyla yeni bir şiir tarzı geliştirdi. Nevşehirli Damad İbrahim Paşa'nın çevresinde gelişen bu tarz, divan şiirinde \"yerlileşme\" akımının en büyük temsilcisi sayılır — soyut mazmunlar yerine İstanbul'un günlük hayatı ve eğlence kültürü şiire girdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı yapılmadı", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1718-01-01|Nedîm","1718-05-09"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nedîm\" (Muhsin Macit) — https://islamansiklopedisi.org.tr/nedim--divan-sairi" },

  { id:"nedim-olumu", tur:"edebiyat",
    baslik:"Nedîm'in Patrona Halil isyanı sırasında ölümü",
    eser:null,
    sanatci:{ ad:"Nedîm (asıl adı Ahmed)",
      hayat:"İstanbul'da muhtemelen 1092'de (1681) doğdu; babası kazasker torunu Kadı Mehmed Efendi, annesi Karaçelebizâdeler ailesindendi. 1143'te (1730) öldü.",
      onem:"TDV'nin tarifiyle \"divan şiirinde kendi adıyla anılan bir tarz ortaya koyan şair\" — sade ve nükteli üslûbuyla Lâle Devri'nin en tanınmış ismi oldu." },
    metin:"1730'daki Patrona Halil isyanı sırasında Nedîm hayatını kaybetti; kaynaklara göre ya isyan dehşetinden hastalanarak ya da kaçmaya çalışırken evinin damından düşerek öldü — ölüm şeklinin ayrıntısı kaynaklarda AYRIŞIYOR. Ölümüyle birlikte Lâle Devri'nin şiirdeki en parlak sesi de susmuş oldu; devrin kendisi de aynı isyanla sona erdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı yapılmadı", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"tartismali", olay:["1730-09-25","1730-10-28"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nedîm\" (Muhsin Macit) — https://islamansiklopedisi.org.tr/nedim--divan-sairi" },

  { id:"nefi-idami", tur:"edebiyat",
    baslik:"Nef'î'nin hicivleri yüzünden idam edilmesi",
    eser:{ ad:"Sihâm-ı Kazâ", tur:"hiciv mecmuası" },
    sanatci:{ ad:"Nef'î (asıl adı Ömer)",
      hayat:"980 (1572) yıllarında Erzurum'un Pasinler (Hasankale) ilçesinde doğduğu tahmin ediliyor; bir sancak beyi ailesindendi. 1044'te (1635) öldü.",
      onem:"TDV'nin tarifiyle \"hiciv ve kasideleriyle ünlü divan şairi\" — güçlü ve iddialı üslûbuyla Osmanlı hiciv edebiyatının en dikkat çeken ismi sayılır." },
    metin:"Hicivleriyle tanınan Nef'î, Sihâm-ı Kazâ adlı hiciv mecmuası yüzünden 1635'te IV. Murad'ın emriyle idam edildi. Sadrazam Bayram Paşa onu teslim etti; Nef'î sarayın odunluğunda boğdurulup cesedi denize atıldı — kalemiyle kazandığı düşmanlıklar sonunu getirdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı yapılmadı", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1635-01-01|Nef'î"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nef'î\" (Metin Akkuş, 2006) — https://islamansiklopedisi.org.tr/nefi" },

{ id:"edebiyat-idam-edilen-sair-alim", tur:"edebiyat",
    baslik:"Kalemi ya da inancı yüzünden ölenler: Osmanlı'da idam edilen şair, âlim ve sûfîler",
    kisa:"Şeyh Bedreddin'den Nef'î'ye iki yüz yılı aşkın sürede bir fakih, bir müderris, bir medrese âlimi, iki sûfî şeyh ve iki şair idam edildi; kimi isyan, kimi zındıklık fetvası, kimi de bir hiciv yüzünden.",
    metin:"Osmanlı'da bir şairin, bir âlimin ya da bir tarikat şeyhinin hayatını kaybetmesine yol açan suçlamalar çoğu kez üç başlıkta toplanır: devlete karşı isyan, dinden sapma anlamına gelen \"zındıklık\" ya da \"ilhâd\" ithamı ve güçlü birini incitmiş bir hiciv. Aşağıdaki yedi örnek, TDV İslâm Ansiklopedisi'nin ilgili maddelerinde anlatıldığı biçimiyle sıralanmıştır; birkaçının tarihi kaynaklar arasında tartışmalıdır.\n\nEn erken örnek, fakih ve mutasavvıf Şeyh Bedreddin'dir. Çevresinde gelişen hareket isyana dönüşünce Çelebi Sultan Mehmed üzerine kuvvet gönderdi; yakalanan şeyh Serez'de padişahın huzuruna getirildi. Kurulan ilim heyeti, onun faaliyet ve görüşlerinin dinî hükümlerle bağdaşmadığına, bunun isyan sayılacağına ve malı ile ailesine dokunulmamak şartıyla idam edilmesi gerektiğine karar verdi; kararı heyetten Mevlânâ Haydar Acemî açıkladı. Bedreddin 823 (1420) yılında Serez'de idam edildi.\n\nII. Bayezid devrinde tanınmış âlim Molla Lutfî zındıklıkla suçlandı. Padişahın emriyle yapılan soruşturmanın ardından beş âlimden oluşan bir heyet, iki oturum ve iki yüz kadar tanık dinleyerek ölüm cezası verdi; Lutfî 25 Rebîülâhir 900'de (23 Ocak 1495) Atmeydanı'nda başı kesilerek idam edildi. TDV, kaynakların bu suçlamayı genellikle rakiplerinin kıskançlığına bağladığını ve modern araştırmacıların çoğunun ithamı asılsız saydığını belirtir.\n\nKanûnî Sultan Süleyman'ın ilk yıllarında Molla Kābız, Hz. İsa'nın Hz. Muhammed'den üstün olduğunu açıkça savununca Dîvân-ı Hümâyun'a çıkarıldı (8 Safer 934 / 3 Kasım 1527). Kazaskerler onu ikna edemeyince, toplantıyı kafes arkasından izleyen padişah yeni bir mahkeme kurulmasını istedi. Ertesi gün Şeyhülislâm Kemalpaşazâde görüşlerini çürüterek bunun zındıklık olduğunu bildiren fetvayı verdi, İstanbul kadısı da idamına hükmetti (9 Safer 934 / 4 Kasım 1527).\n\nAynı devirde sûfî şeyhler de bu ithamla yargılandı. Bayramî-Melâmî şeyhi İsmâil Maşûkī (Oğlan Şeyh), zındıklık ve ilhâd suçlamasıyla on iki müridiyle birlikte Atmeydanı'nda idam edildi; geleneksel kaynaklar 935 (1529) yılını verse de TDV, arşiv kayıtlarına dayanarak olayı 1539'a yerleştirir ve fetvanın Çivizâde Muhyiddin Mehmed Efendi'ye ait olması gerektiğini söyler. Hamza Bâlî ise Şeyhülislâm Ebüssuûd Efendi'nin \"zındık ise katli meşrûdur\" yolundaki fetvasından sonra İstanbul'da öldürüldü. TDV'ye göre onun inançlarının Sünnî esaslarla uyuşmaması, silsilesinin Safevîler'e uzanması ve yeniçeriler ile saray çevresindeki etkisi devleti rahatsız ediyordu; arşiv fermanlarına göre idam 1573 baharı ile yazı arasında olmalıdır.\n\nŞairlerin kaderini ise çoğunlukla hiciv belirledi. Figānî, Sadrazam İbrâhim Paşa'nın Atmeydanı'na diktirdiği heykelleri alaya alıyor gibi görünen bir beyitle paşaya şikâyet edildi; TDV, beytin aslında Gazneli Mahmud devrinden kalma eski bir söz olduğunu ve Figānî'ye mal edildiğini kaydeder. Şair yakalanıp işkence gördükten sonra büyük ihtimalle 1532 baharında asıldı. Bir asır sonra Nef'î, Sihâm-ı Kazâ adlı hiciv mecmuası yüzünden 1044 Şâbanında (Ocak 1635) Sadrazam Bayram Paşa tarafından teslim edildi ve sarayın odunluğunda boğdurulup cesedi denize atıldı.",
    alinti:{ metin:"Şeyh Hamza dahi ol tarikte zındık ise katli meşrûdur.", kaynak:"Ebüssuûd Efendi'nin fetvası, Lâ'lîzâde'nin aktarımıyla — TDV İslâm Ansiklopedisi, \"Hamza Bâlî\" (Nihat Azamat, 1997)" },
    gorsel:null, gorsel_kaynak:null,
    kesinlik:"tartismali",
    olay:["1416-05-01|Bedreddin","1635-01-01|Nef'î"],
    kaynak:"TDV İslâm Ansiklopedisi: \"Bedreddin Simâvî\" (Bilal Dindar, 1992) — https://islamansiklopedisi.org.tr/bedreddin-simavi · \"Molla Lutfî\" (Orhan Şaik Gökyay – Şükrü Özen, 2020) — https://islamansiklopedisi.org.tr/molla-lutfi · \"Molla Kābız\" (İlyas Üzüm, 2020) — https://islamansiklopedisi.org.tr/molla-kabiz · \"İsmâil Ma'şûkī\" (2001, gözden geçirme 2024) — https://islamansiklopedisi.org.tr/ismail-masuki · \"Hamza Bâlî\" (Nihat Azamat, 1997) — https://islamansiklopedisi.org.tr/hamza-bali · \"Figānî\" (Abdülkadir Karahan, 1996) — https://islamansiklopedisi.org.tr/figani · \"Nef'î\" (Metin Akkuş, 2006) — https://islamansiklopedisi.org.tr/nefi",
    ic_not:"Taslak (ek okuma alt ajanı, 2026-10-14). Bütün olgular yukarıdaki yedi TDV maddesinden WebFetch ile okundu. TARİH SAPMALARI (görev metnindeki aday yıllarla TDV ayrışıyor): Figānî görevde 1529 → TDV 938/1532 (\"büyük bir ihtimalle 1532 baharı\", gün yok). Maşûkī görevde 1529 → TDV 945 sonu/946 başı (1539), Atâî ve Melâmî kaynakları 935/1529; Akdağ 20 Zilhicce 945 (9 Mayıs 1539) sicil kaydını anar. Hamza Bâlî: Atâî 969, Münîrî 980; TDV arşiv fermanlarına göre 22 Nisan–25 Ağustos 1573 aralığı; yer Lâ'lîzâde'ye göre Süleymaniye Deveoğlu Çeşmesi önü, Atâî'ye göre Tahtakale. Bedreddin: TDV 823/1420, gün yok, emri veren padişahın adı idam cümlesinde geçmiyor (önceki kısımda kuvvet gönderen Çelebi Sultan Mehmed). Nef'î: TDV gün vermiyor, 1044 Şâban = Ocak 1635. Figānî maddesi idamı kimin emrettiğini söylemiyor (yalnız İstanbul subaşısının Tahtakale'de yakaladığı); metinde emir veren yazılmadı. Molla Lutfî maddesi fetvayı vereni ve son emri vereni adlandırmıyor; heyet: Hatibzâde Muhyiddin, Molla İzârî, Molla Arap, Efdalzâde Hamîdüddin, Molla Ehaveyn. OLAY BAĞLARI: kronolojide yalnız iki madde bulundu — olaylar.js \"Şeyh Bedreddin isyanı\" (t:1416-05-01; idam değil isyan maddesi) ve olaylar_ek14.js \"Nef'î'nin hicivleri yüzünden idam edilmesi\" (t:1635-01-01). Lutfî (1495-01-23), Kābız (1527-11-04), Maşûkī (1539), Hamza Bâlî (1573), Figānî (1532) ve Bedreddin'in idamı (1420) için olaylar*.js'te madde YOK — eklenirse olay: listesine bağlanmalı. ŞEMA: dosyadaki edebiyat kartlarının eser/sanatci alanları tek eser-tek sanatçı içindir; bu genel kartta kullanılmadı (render dalı kisa/metin ile çalışmıyorsa app.js'e bakılmalı). alinti: fetva cümlesi TDV maddesinden aynen (16. yy fetva metni, kamu malı, tek cümle). Görsel taraması yapılmadı. Görevde aday olan Hallâc-ı Mansûr Osmanlı olmadığı için dışarıda bırakıldı."
  }
];

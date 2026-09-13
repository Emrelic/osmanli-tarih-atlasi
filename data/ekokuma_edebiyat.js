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
window.EKOKUMA_EDEBIYAT = [
  { id:"baki-kanuni-mersiyesi", tur:"edebiyat",
    baslik:"Bâkî'nin Kanûnî Sultan Süleyman için mersiyesi",
    eser:{ ad:"Kanûnî Mersiyesi", tur:"mersiye" },
    sanatci:{ ad:"Bâkî (asıl adı Mahmud Abdülbâkî)",
      hayat:"933'te (1526-27) İstanbul'da fakir bir ailenin çocuğu olarak doğdu; babası Fâtih Camii müezzini Mehmed Efendi'ydi. Gençliğinde bir zanaat çıraklığıyla (saraçlık ya da serrâclık) hayata atıldı, medrese eğitimiyle yükseldi. 1008'de (1600) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Osmanlı şiirine söyleyiş gücü kazandıran\" büyük dîvân şairi; çağdaşlarınca \"Sultânü'ş-şuarâ\" (şairler sultanı) diye anıldı." },
    metin:"Kanûnî Sultan Süleyman'ın 1566 Eylülünde Sigetvar seferi dönüşünde ölüm haberi İstanbul'a ulaştığında Bâkî, sultana duyduğu bağlılığı ve onun yüce şahsiyetini dile getiren mersiyesini yazdı. Osmanlı edebiyatının en tanınmış mersiyelerinden sayılır; mersiyenin son kısmı, birkaç hafta sonra tahta çıkacak II. Selim'e bir bakıma zemin hazırlar.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı bu turda YAPILMADI", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1566-09-01"],
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
    kesinlik:"kesin", olay:["1566-09-30"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Bâkî\" (Mehmed Çavuşoğlu, 1991) — https://islamansiklopedisi.org.tr/baki--sair" },

  { id:"fuzuli-bagdat-kasidesi", tur:"edebiyat",
    baslik:"Fuzûlî'nin Bağdat'ın fethi sonrası Kanûnî'ye kasidesi",
    eser:{ ad:"Bağdat Fetihnâmesi Kasidesi", tur:"kaside" },
    sanatci:{ ad:"Fuzûlî (asıl adı Mehmed)",
      hayat:"Doğum tarihi ve yeri kesin bilinmiyor; kaynaklar Bağdat civarında doğduğunu yazar ama yer konusunda birleşmez. Babasının adı Süleyman'dı. 963'te (1556) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Türk edebiyatının en büyük şairlerinden\"; Türkçe, Arapça ve Farsça divan yazabilecek kadar üç dile hâkimdi." },
    metin:"Kanûnî'nin 1534'te Bağdat'ı fethetmesinin ardından Fuzûlî, sultana beş kaside sundu. Bu jestle Fuzûlî, o âna kadar bağlı olduğu Safevî himayesinden çıkıp Osmanlı devlet adamlarının hâmîliğini aramaya yöneldi.",
    alinti:{ metin:"\"Geldi burc-ı evliyâya pâdişâh-ı nâmdâr\" — kasidenin ilk mısraı, TDV maddesinin aktardığı biçimiyle", kaynak:"TDV: fuzuli" },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1534-12-04"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Fuzûlî\" (Abdülkadir Karahan, 1996) — https://islamansiklopedisi.org.tr/fuzuli" },

  { id:"fuzuli-leyla-vu-mecnun", tur:"edebiyat",
    baslik:"Fuzûlî'nin Leylâ vü Mecnûn mesnevisini tamamlaması",
    eser:{ ad:"Leylâ vü Mecnûn", tur:"mesnevi" },
    sanatci:{ ad:"Fuzûlî (asıl adı Mehmed)",
      hayat:"Doğum tarihi ve yeri kesin bilinmiyor; kaynaklar Bağdat civarında doğduğunu yazar ama yer konusunda birleşmez. Babasının adı Süleyman'dı. 963'te (1556) öldü.",
      onem:"TDV'nin tarifiyle \"klasik Türk edebiyatının en büyük şairlerinden\"; Türkçe, Arapça ve Farsça divan yazabilecek kadar üç dile hâkimdi." },
    metin:"Leylâ vü Mecnûn, Fuzûlî tarafından 1535'te, Kanûnî'nin Bağdat seferine katılan İstanbullu şairlerin isteği üzerine yazılıp tamamlandı. Arap yarımadasının eski bir aşk efsanesini işleyen eser, klasik Türk edebiyatının en güzel mesnevilerinden sayılır.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı bu turda YAPILMADI", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1535-01-01"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Fuzûlî\" (Abdülkadir Karahan, 1996) — https://islamansiklopedisi.org.tr/fuzuli" },

  { id:"nedim-lale-devri", tur:"edebiyat",
    baslik:"Nedîm'in Lâle Devri şiirinin öncüsü olarak öne çıkması",
    eser:{ ad:"Lâle Devri şiirleri", tur:"divan şiiri (dönem üslûbu)" },
    sanatci:{ ad:"Nedîm (asıl adı Ahmed)",
      hayat:"İstanbul'da muhtemelen 1092'de (1681) doğdu; babası kazasker torunu Kadı Mehmed Efendi, annesi Karaçelebizâdeler ailesindendi. 1143'te (1730) öldü.",
      onem:"TDV'nin tarifiyle \"divan şiirinde kendi adıyla anılan bir tarz ortaya koyan şair\" — sade ve nükteli üslûbuyla Lâle Devri'nin en tanınmış ismi oldu." },
    metin:"1718-1730 arasındaki Lâle Devri boyunca Nedîm, ifade sadeliği ve nükteli üslûbuyla yeni bir şiir tarzı geliştirdi. Nevşehirli Damad İbrahim Paşa'nın çevresinde gelişen bu tarz, divan şiirinde \"yerlileşme\" akımının en büyük temsilcisi sayılır — soyut mazmunlar yerine İstanbul'un günlük hayatı ve eğlence kültürü şiire girdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı bu turda YAPILMADI", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1718-01-01"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nedîm\" (Muhsin Macit) — https://islamansiklopedisi.org.tr/nedim--divan-sairi" },

  { id:"nedim-olumu", tur:"edebiyat",
    baslik:"Nedîm'in Patrona Halil isyanı sırasında ölümü",
    eser:null,
    sanatci:{ ad:"Nedîm (asıl adı Ahmed)",
      hayat:"İstanbul'da muhtemelen 1092'de (1681) doğdu; babası kazasker torunu Kadı Mehmed Efendi, annesi Karaçelebizâdeler ailesindendi. 1143'te (1730) öldü.",
      onem:"TDV'nin tarifiyle \"divan şiirinde kendi adıyla anılan bir tarz ortaya koyan şair\" — sade ve nükteli üslûbuyla Lâle Devri'nin en tanınmış ismi oldu." },
    metin:"1730'daki Patrona Halil isyanı sırasında Nedîm hayatını kaybetti; kaynaklara göre ya isyan dehşetinden hastalanarak ya da kaçmaya çalışırken evinin damından düşerek öldü — ölüm şeklinin ayrıntısı kaynaklarda AYRIŞIYOR. Ölümüyle birlikte Lâle Devri'nin şiirdeki en parlak sesi de susmuş oldu; devrin kendisi de aynı isyanla sona erdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı bu turda YAPILMADI", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"tartismali", olay:["1730-06-01"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nedîm\" (Muhsin Macit) — https://islamansiklopedisi.org.tr/nedim--divan-sairi" },

  { id:"nefi-idami", tur:"edebiyat",
    baslik:"Nef'î'nin hicivleri yüzünden idam edilmesi",
    eser:{ ad:"Sihâm-ı Kazâ", tur:"hiciv mecmuası" },
    sanatci:{ ad:"Nef'î (asıl adı Ömer)",
      hayat:"980 (1572) yıllarında Erzurum'un Pasinler (Hasankale) ilçesinde doğduğu tahmin ediliyor; bir sancak beyi ailesindendi. 1044'te (1635) öldü.",
      onem:"TDV'nin tarifiyle \"hiciv ve kasideleriyle ünlü divan şairi\" — güçlü ve iddialı üslûbuyla Osmanlı hiciv edebiyatının en dikkat çeken ismi sayılır." },
    metin:"Hicivleriyle tanınan Nef'î, Sihâm-ı Kazâ adlı hiciv mecmuası yüzünden 1635'te IV. Murad'ın emriyle idam edildi. Sadrazam Bayram Paşa onu teslim etti; Nef'î sarayın odunluğunda boğdurulup cesedi denize atıldı — kalemiyle kazandığı düşmanlıklar sonunu getirdi.",
    alinti:{ metin:"bulunamadı — kamu malı doğrulanmış bir neşirden beyit alıntısı bu turda YAPILMADI", kaynak:null },
    gorsel:null, gorsel_kaynak:"bulunamadı — dönemsel portre yok, bu turda görsel taraması yapılmadı",
    kesinlik:"kesin", olay:["1635-01-01"],
    kaynak:"TDV İslâm Ansiklopedisi, \"Nef'î\" (Metin Akkuş, 2006) — https://islamansiklopedisi.org.tr/nefi" }
];

// ============================================================================
// EK OKUMA KARTLARI — OSMANLI EKONOMİSİ (pilot, 5 kart)
// ============================================================================
// Yazan: KITA 28, 13 Eylül 2026. Şartname: `oturumlar/KITA-28-EKONOMI-0046.md`
// (paket 0046 H-0010). Emre'nin sözü: "Ekonomi maddelerinin içine Osmanlı
// ekonomisi hakkında ek okuma maddeleri yazalım."
//
// 🔴🔴 D099 — BU DOSYA `js/app.js`in STATİK NE DE DİNAMİK YÜKÜNDE.
//    `ekOkumaMerakYukle` (app.js:6505) YALNIZ ["data/ekokuma.js","EKOKUMA"]
//    ve ["data/merak.js","MERAK"] okuyor — sabit dizi, yeni dosya EKLENMEDEN
//    görünmez. `EKOKUMA_TUR`daki HER tür (app.js:6524) `window.EKOKUMA`
//    okuyor, `window.EKOKUMA_EKONOMI` DEĞİL. Beş yetim kardeş dosya zaten
//    aynı sebeple ekrana hiç çıkmıyor (ekokuma_antlasma2/edebiyat/magazin/
//    mimari/sh104 — KITA 26 da bunu bağımsız ölçtü, M-3690). Bu dosyayı
//    görünür kılmak için gereken app.js satırı KITA 12'ye (app.js sahibi)
//    ve koordinatöre (1.MURAT) tahtadan ayrıca bildirilecek — CLAUDE.md §7,
//    ORTAK-0045-ICERIK-PROGRAMI.md §②.
//
// ── ENVANTER — ayrıca bkz. `denetim/ADAY-EKONOMI-MADDELERI-0913.json` ──────
// `arac/denetle.py`nin `olaylari_yukle()`si ile ölçüldü: çekirdek 1354 madde,
// `etiket` içinde "ekonomi" geçen 108 madde. Emre'nin örnek listesindeki
// (tımar · tağşiş · iltizam/malikâne · esham · kapitülasyon · Balta Limanı ·
// ilk dış borç · 1875 moratoryum · Düyûn-ı Umûmiye) 20 kalemin **19'u
// kronolojide ZATEN VAR** — yalnız **kâime (ilk kâğıt para, 1840)** eksik ve
// KITA 14'e aday olarak yazıldı (kronolojiye BEN yazmadım, §7/görev kuralı).
//
// ── NİÇİN 5 KART BÖYLE SEÇİLDİ ──────────────────────────────────────────────
// Şartname adıyla beşini saydı: Balta Limanı · Düyûn-ı Umûmiye · malikâne
// sistemi · 1585 tağşişi · kapitülasyonların ekonomik etkisi. Aşağıdaki
// beşi bunlara birebir karşılık geliyor; ikisi (tağşiş↔Beylerbeyi, iltizam→
// malikâne→esham) doğal olarak İKİŞER-ÜÇER olaylık zincirlere büyüdü çünkü
// tek bir dated olay tek başına "sebep→sonuç" çiftini kuramıyordu.
//
// ── KAPİTÜLASYON KARTI — KITA 26 İLE ÇAKIŞMA ÖNLENDİ (tahta M-3694) ────────
// KITA 26 aynı gün `data/ekokuma_tartisma.js`e "kapitulasyon-zaaf-mi-arac-mi"
// kartını yazıyor (siyasi/egemenlik ekseni). Bu dosyadaki kart SAF EKONOMİK
// MEKANİZMA zincirini anlatır (1352→1536→1740→1838→1914, gümrük oranları ve
// mali bağımlılığın büyümesi); siyasi tartışmaya hiç girmez. İkisi ayrı
// `tur:` (sebep-sonuc / tartisma) ve ayrı dosyada, çakışma yok.
//
// ── KAYNAK — TDV, sayfa okunarak sınandı (CLAUDE.md §4) ────────────────────
//   baltalimani-muahedesi → HTTP 200, madde okundu: İngilizlerin Mehmed Ali
//     Paşa'ya karşı argümanı, Mustafa Reşid Paşa'nın rolü, tekel kaldırma ve
//     gümrük oranları (ihracat %3 / ithalat %5) doğrulandı.
//   duyun-i-umumiyye → HTTP 200, madde okundu: 1875 iflası, 1881 Muharrem
//     Kararnâmesi, yedi devlet temsilcili meclis, rüsûm-ı sitte, "devlet
//     içinde devlet" nitelemesi doğrulandı.
//   malikane → HTTP 200, madde okundu: iltizamın mali kısır döngüsü,
//     mukātaanın ömür boyu sabit vergiyle verilmesi, muaccele mekanizması
//     doğrulandı.
//   esham → HTTP 200, madde okundu: 1768-74 savaşı sonrası 7,5 milyon kuruş
//     Rusya tazminatının malikânenin sınırlarını aştırması, sehim mekanizması,
//     yıllık faizin 400.000'den 2 milyona çıkışı, 1792'de satışın durması —
//     RAKAMLAR TDV'DEN, tahmin değil (CLAUDE.md §4 "rakamlar yalnız kaynakla").
//   akce → HTTP 200, madde okundu — AMA 1585 tağşişinin "Amerikan gümüşü"
//     tetikleyicisini AÇIKÇA doğrulamadı (yalnız 1584-86 ayar tablolarını
//     verdi). Bu satır atlasın kendi `1585-01-01` kaydına (kaynak:"akce") ve
//     Osmanlı iktisat tarihi literatüründeki yaygın "fiyat devrimi" yorumuna
//     dayanır — `kesinlik:"tartismali"` bu yüzden.
//   fransa / kapitulasyon / ahidname → 1536 ve 1740 için atlasın KENDİ
//     kayıtlarının kaynağı + `ahidname` maddesi (İngiltere'nin %3 gümrük
//     avantajı ve rekabetçi baskı) okundu.
//   kapitulasyon (tam madde) → ÇEKİLEMEDİ, sayfa yalnız kısa tanım + çapraz
//     referans döndürdü (`bulunamadı` değil, madde kısa — D107'nin "okumadım"
//     değil "madde kısaymış" hâli). Zincirin dayanağı bu yüzden atlasın
//     kendi 1536/1740/1914 kayıtlarına ve `ahidname`ye kaydırıldı.
//
// ── ŞEMA (mevcut data/ekokuma.js ile BİREBİR) ──────────────────────────────
//   { id, tur:"sebep-sonuc", kisa, sebep:{b,t}, sonuc:{b,t}, bag, metin,
//     kesinlik, zincir:[...diğer kart id'leri...], olay:[...], kaynak }
// ============================================================================

window.EKOKUMA_EKONOMI = [

{ id:"1585-tagsis-fiyat-devrimi", tur:"sebep-sonuc",
  kisa:"Akçenin gümüşü bir gecede yarılandı — üç yıl sonra saray kuşatıldı.",
  sebep:{ b:"Çıldır Zaferi'yle başlayan on iki yıllık doğu (Osmanlı-Safevî) savaşının hazineyi tüketmesi ve aynı on yıllarda Yeni Dünya gümüşünün Akdeniz'e taşarak Avrupa çapında fiyatları yukarı çekmesi", t:"1578-08-09" },
  sonuc:{ b:"Akçenin gümüş içeriğinin âni biçimde düşürüldüğü Büyük Tağşiş — üç yıl içinde ulûfesi eriyen sipahi ve yeniçerilerin sarayı kuşattığı Beylerbeyi Vak'ası'na uzanan zincir", t:"1585-01-01" },
  bag:"TDV'nin Akçe maddesi 1584-86 arası ayar değişikliklerini (yüz dirhemden 800 akçe basılmaya başlanması) doğruluyor, ama tağşişin 'Amerikan gümüşü' tetikleyicisini kendisi açıkça yazmıyor — bu satır atlasın 1585-01-01 kaydının kendi metnine (\"uzun savaşların ve Amerikan gümüşünün baskısıyla\") ve Osmanlı iktisat tarihindeki yaygın 'fiyat devrimi' yorumuna dayanıyor, ikinci bağımsız bir TDV sayfasıyla ayrıca doğrulanmadı. 1589'daki Beylerbeyi Vak'ası ise TDV'nin Abdülkadir Şeyhî Efendi maddesiyle doğrudan bağlanıyor: tağşiş edilmiş akçeyle ödeme yapılması üzerine sipahi ve yeniçeriler sarayı kuşattı, şeyhülislam bu yüzden azledildi.",
  metin:"Tağşiş, sikkenin değerli maden (gümüş) oranını düşürüp aynı ağırlıkta daha fazla para basmaktır — devlete kısa vadede ek gelir sağlar ama halkın elindeki paranın alım gücünü eritir. 1585'te akçenin gümüş oranı keskin biçimde düşürüldü; ulûfesini (maaşını) akçeyle alan kapıkulu askeri bunu neredeyse anında hissetti, çünkü esnaf yeni akçeyle eski fiyattan mal satmayı reddediyordu. Sonuç zincirlemeydi: fiyatlar yükseldi (16. yüzyılın 'fiyat devrimi'), taşrada tımarlı sipahi düzeni geçim sıkıntısına girdi ve bu ortam Anadolu'daki asker kaçkını/eşkıya hareketlerini (Celâlî kargaşası) besleyen zeminlerden biri oldu — ama Celâlî isyanlarının İLK dalgası (1519, Şeyh Celâl ayaklanması) tağşişten önceye gittiği için, tağşişin etkisi 1590'lardan sonraki İKİNCİ ve daha büyük Celâlî dalgasıyla ilişkilendirilir, ilk dalgayla değil. 1589'da patlayan Beylerbeyi Vak'ası bu krizin İstanbul'a taşan yüzüydü: ulûfesi değersizleşen kapıkulu sarayı kuşattı, hesap sorulan isim şeyhülislam oldu.",
  kesinlik:"tartismali",
  zincir:["iltizam-malikane-esham-zinciri"],
  olay:["1578-08-09","1585-01-01","1589-06-01"],
  kaynak:"TDV: akce · abdulkadir-seyhi-efendi · atlasın 1585-01-01 kaydının kendi metni (kaynak: akce) — Amerikan gümüşü bağlantısı ikinci bir TDV sayfasıyla ayrıca doğrulanmadı" },

{ id:"iltizam-malikane-esham-zinciri", tur:"sebep-sonuc",
  kisa:"Devlet vergi toplama hakkını üç kez yeniden tasarladı — her seferinde bir önceki kriz doğurduğu için.",
  sebep:{ b:"İltizam sisteminde vergi tahsil hakkının kısa süreli (bir-üç yıllık) müzayedeyle satılmasının, mültezimi hızlı kâr için reâyayı aşırı vergilendirmeye ve mukātaanın üretim kapasitesini tüketmeye yöneltmesi — mültezim her değiştiğinde tekrarlayan bir mali kısır döngü", t:"1650-01-01" },
  sonuc:{ b:"Mâlikâne sisteminin yürürlüğe girmesiyle mukātaaların ömür boyu SABİT vergiyle mültezime (mâlikâneciye) verilmesi — vergi sabitken kâr serbest kalınca mültezimi artık reâyaya yatırım yapmaya teşvik etme denemesi", t:"1695-01-01" },
  bag:"TDV'nin Mâlikâne maddesine göre XVII. yüzyılın son çeyreğinde artan savaş giderleri ile azalan vergi gelirleri bir kısır döngü oluşturmuştu; mâlikâne 'bu paradoksu aşmayı sağlayacak bir kurum olarak düşünüldü'. Farkı: normal iltizamda müzayede yıllık vergi (mal) miktarı üzerinden yapılırdı, mâlikânede yıllık vergi miktarı hazine tarafından ÖNCEDEN sabitlenmişti ve mâlikâneci peşin bir meblağ (muaccele) ödeyerek hakkını kazanırdı. TDV'nin Esham maddesine göre mâlikâne talebi dar bir askerî zümreyle sınırlıydı (kadın ve gayrimüslimler dışarıda); 1768-74 Osmanlı-Rus Savaşı'ndan sonra Rusya'ya 7,5 milyon kuruş tazminat ödeme zorunluluğu çıkınca devlet bu sınırı aşmak zorunda kaldı ve esham sistemini tasarladı: mukātaa geliri sehim (hisse) hâlinde dilimlenip muaccele karşılığında satıldı, alıcı yönetime karışmıyor yalnız yatırdığı miktarla orantılı yıllık nakdî gelir alıyordu.",
  metin:"Üç sistem de aynı sorunu — devletin sürekli büyüyen mali ihtiyacını, doğrudan vergi toplama kapasitesi olmadan karşılamak — farklı biçimde çözmeye çalıştı. İltizamda kısalık (bir-üç yıl) mültezimi sömürüye itiyordu; mâlikâne ömür boyu sabit vergiyle bunu yumuşattı ama yalnız askerî zümreye açıktı, bu da talebi sınırlıyordu; esham mâlikâne hakkını hisselere bölüp -teoride- herkese satılabilir hâle getirerek talebi genişletti. Ama esham da kendi krizini doğurdu: TDV'nin Esham maddesine göre sistem hızla büyüdü (yıllık faiz ödemesi on yılda 400.000 kuruştan 2 milyon kuruşa çıktı) ve 1780'lerde maliyeciler hesap yaptığında, ölen sehim sahiplerinin yeniden satılan paylarından gelen gelirin ödenen yıllık faizin ancak küçük bir bölümünü karşıladığı görüldü; hazine artan faiz yükü altına girdi ve 1792'den itibaren yeni satışlar durduruldu. Mâlikâne satışlarının kendisi de 1840'larda tamamen sona erdi. Üçü birden Osmanlı mâliyesinin 17-18. yüzyılda 'gelirini artırmak için giderek daha karmaşık finansal araçlar icat etme, her aracın kendi krizini doğurması' döngüsünü gösterir.",
  kesinlik:"kesin",
  zincir:["1585-tagsis-fiyat-devrimi"],
  olay:["1650-01-01","1695-01-01","1775-06-01"],
  kaynak:"TDV: malikane · esham" },

{ id:"balta-limani-mehmed-ali-ticaret-acilimi", tur:"sebep-sonuc",
  kisa:"II. Mahmud'un Mehmed Ali'ye karşı İngiliz desteği araması, Osmanlı pazarını serbest ticarete açtı.",
  sebep:{ b:"Mehmed Ali Paşa'nın ordusunun Anadolu içlerine, Konya'ya kadar ilerlemesi — Mısır'ın imparatorluktan fiilen bağımsızlaşan bir askerî güce dönüştüğünün görünür hâle gelmesi", t:"1832-11-21" },
  sonuc:{ b:"Balta Limanı Ticaret Antlaşması'yla İngiltere'ye iç ticarette dahi en ayrıcalıklı statünün tanınması, yed-i vâhid (tekel) usulünün kaldırılması ve sabit düşük gümrük oranlarının (ihracat %3, ithalat %5) kabulü", t:"1838-08-16" },
  bag:"TDV'nin Baltalimanı Muahedesi maddesine göre İngilizler Osmanlı direncini kırmak için şu argümanı kullandı: yed-i vâhidin kaldırılması kabul edilirse, Mısır bir Osmanlı vilâyeti sayıldığından bu uygulama ORADA da geçerli olacak ve Mehmed Ali Paşa böylece merkeze 'baş kaldıramayacak' hâle gelecekti — yani antlaşmanın kendisi Mehmed Ali krizini dizginlemenin bir aracı olarak sunuldu. Muahedenin hazırlanmasında Hariciye Nâzırı Mustafa Reşid Paşa başrol oynadı.",
  metin:"Antlaşma İngiltere'ye yalnız dış ticarette değil, Osmanlı ülkesi İÇİNDEKİ ticarette de yerli tüccarla eşit (hatta bazı noktalarda daha avantajlı) statü tanıdı: mallar bir şehirden ötekine nakledilirken tezkire (izin belgesi) alma zorunluluğu olan yed-i vâhid usulü tamamen kaldırıldı. Gümrük oranları ihracatta %3'te sabitlenirken ithalatta %5 (artı iç nakil için %2) olarak belirlendi — bu oranlar 1740'tan beri süregelen kapitülasyon rejiminin (bkz. kapitülasyon zinciri kartı) doğal bir uzantısıydı, ama artık yalnız diplomatik bir ayrıcalık değil, PAZARIN TAMAMEN AÇILMASININ belgesiydi. Uygulamada perakende ticaret konusunda anlaşmazlık çıktı: Osmanlı hükümetinin bunu sınırlama çabaları başarısız oldu ve sonunda yabancı tüccarların yerli esnaf statüsünde iç ticarette de faaliyet göstermesi kabul edildi. Sonuç, gümrük korumasından yoksun yerli el sanatları ve manüfaktürün, aynı dönemde sanayileşmiş Avrupa üretimiyle korumasız rekabete girmesiydi.",
  kesinlik:"kesin",
  zincir:["kapitulasyon-diplomatik-araçtan-mali-bagimliliga"],
  olay:["1832-11-21","1838-08-16"],
  kaynak:"TDV: baltalimani-muahedesi" },

{ id:"1875-iflasi-duyun-i-umumiye", tur:"sebep-sonuc",
  kisa:"Devlet borcunu ödeyemedi — ve alacaklılar kendi gelir idarelerini kurdu.",
  sebep:{ b:"Osmanlı hükümetinin dış borç taksitlerini tam ödeyemez hâle gelip anapara ve faizin bir kısmını erteleme/indirme kararını tek taraflı ilan etmesi — fiilî mali iflas", t:"1875-10-06" },
  sonuc:{ b:"Muharrem Kararnâmesi ile borç anaparasının yarıdan fazla indirilmesi karşılığında, alacaklı yedi devletin temsilcilerinden oluşan Düyûn-ı Umûmiyye İdaresi'nin kurulup tuz, tütün, ipek, damga ve balık resmi gibi en verimli gelir kalemlerinin doğrudan bu idareye devredilmesi", t:"1881-12-20" },
  bag:"TDV'nin Düyûn-ı Umûmiyye maddesine göre Avrupalı alacaklıların baskısı ve devletler-arası bir denetim komisyonu kurulması tehdidine karşı Osmanlı hükümeti 'borçların devletler arası değil, şahıslardan alınan borçlar' olduğu argümanını öne sürerek 20 Aralık 1881 (28 Muharrem 1299) tarihli kararnâmeyi çıkardı. İngiliz, Fransız, Alman, Avusturya, İtalyan, Hollandalı ve Osmanlı alacaklıları temsil eden birer üyeden oluşan bir meclis kuruldu; başkanlık Fransız ve İngiliz temsilciler arasında dönüşümlü yürütüldü. İdare rüsûm-ı sitte (altı vergi) başta olmak üzere Bulgaristan vergisi, gümrük gelirleri ve tütün-tuz tekellerini doğrudan denetledi.",
  metin:"Düyûn-ı Umûmiyye, borç veren devletlerin Osmanlı maliyesine karşı ortak alacaklı sıfatıyla kurduğu, kendi memurlarını istihdam eden ve devletin en güvenilir gelir kalemlerini doğrudan tahsil eden bir kurumdu — teknik olarak Osmanlı hükümetinin bir dairesi sayılsa da fiilen devletin denetimi dışındaydı. TDV'nin değerlendirmesiyle idare 'devlet kaynaklarının verimli işletilmesinde ve borçların düzen içinde ödenmesinde faydalı' oldu, ama aynı zamanda 'devlet içinde devlet' hüviyeti kazanarak Osmanlı mâlî egemenliği üzerinde kalıcı bir dış kontrol mekanizmasına dönüştü. Kurumun ömrü uzundu: gelir kalemlerinin bir kısmı Cumhuriyet döneminde de bir süre bu çerçevede yönetilmeye devam etti.",
  kesinlik:"kesin",
  zincir:[],
  olay:["1875-10-06","1881-12-20"],
  kaynak:"TDV: duyun-i-umumiyye" },

{ id:"kapitulasyon-diplomatik-araçtan-mali-bagimliliga", tur:"sebep-sonuc",
  kisa:"562 yıl önce bir ittifak hediyesi olarak başladı, gümrük egemenliğini elinden alarak bitti.",
  sebep:{ b:"Orhan Gazi'nin Cenevizlilerle imzaladığı ilk ticari imtiyaz — dönemin diplomatik/askerî ittifak aracı olarak tasarlanmış, tek taraflı ve geri alınabilir bir bağış", t:"1352-01-01" },
  sonuc:{ b:"Kapitülasyonların I. Dünya Savaşı arifesinde Osmanlı hükümetince tek taraflı olarak kaldırılması — dört asır süren imtiyaz rejiminin, gümrük ve adlî egemenliği yapısal biçimde sınırlayan bir mali bağımlılık ağına dönüşmüş hâliyle sona ermesi", t:"1914-09-09" },
  bag:"Atlasın kendi 1536-02-18 kaydı (kaynak: fransa) bu dönüşümü tek cümlede özetliyor: 'o gün diplomatik araç olan kapitülasyonlar, yüzyıllar içinde mali bağımlılığın kapısına dönüşecekti.' TDV'nin Ahidnâme maddesi ara halkayı doğruluyor: Fransa'dan (1536) sonra İngiltere (1580) ve Hollanda (1612) benzer imtiyazlar aldı; 18. yüzyılda birden çok Avrupa devleti 'en çok kayrılan millet' statüsüne ulaştı, ve gümrük resmini ilk %3'e indirmeyi başaran İngilizlerin ardından %5 ödeyen ötekiler de İngiliz bayrağı altında ticaret yapmaya başladı — yani kapitülasyonlar arasında REKABETÇİ bir aşağı çekme dinamiği vardı. Atlasın 1740-05-30 kaydı ise dönüm noktasını taşıyor: imtiyazlar artık tek bir padişahla sınırlı olmaktan çıkıp kalıcı antlaşmaya bağlandı, 'tek taraflı feshedilemez hâle gelen kapitülasyon rejimi ancak Lozan'da kaldırılabildi' — 1914'teki kaldırma bile SAVAŞ KOŞULLARINDA, tek taraflı bir ilandı ve hukuken ancak 1923 Lozan'da kalıcı hâle geldi. TDV'nin kapitülasyon maddesinin kendisi kısa bir tanım sayfası ve bu geniş tarihsel çerçeveyi ayrıca doğrulamadı; zincirin dayanağı bu yüzden atlasın kendi 1536/1740/1914 kayıtlarına ve `ahidname` maddesine dayanıyor.",
  metin:"Kapitülasyon başta 'imtiyaz' demekti: bir Müslüman devletin, güvenli ticaret yapabilmeleri için Hıristiyan devletlere tek taraflı olarak tanıdığı bir bağıştı — padişah isterse geri alabilirdi, ve yabancı tüccar Osmanlı kadı mahkemesine değil kendi konsolosuna tâbi olurdu (adlî kapitülasyon). Zaman içinde üç eksende değişti: ① SÜREKLİLİK — 1352'de padişahın ölümüyle geçersiz kabul edilebilecek bir bağışken, 1740'tan sonra kalıcı antlaşmaya dönüştü; ② KAPSAM — önce yalnız gümrük ve yargı ayrıcalığıyken, 1838 Balta Limanı ile Osmanlı pazarının bütününün (iç ticaret dahil) serbest rekabete açılmasının hukuki zeminine genişledi; ③ SAYI — 16. yüzyılda bir-iki devletle sınırlıyken 19. yüzyılda hemen bütün büyük Avrupa devletine 'en çok kayrılan millet' hükmüyle otomatik yayıldı. Bu üç eksen birleşince kapitülasyon, başlangıçtaki 'diplomatik jest'ten, Osmanlı hükümetinin kendi gümrük tarifesini ve kendi topraklarındaki yabancıları yargılama yetkisini belirleyemediği yapısal bir kısıtlamaya dönüştü. Kaldırılması bile bunu gösterir: hükümet bunu ancak Avrupa'nın Birinci Dünya Savaşı'yla meşgul olduğu bir anda, tek taraflı bir ilanla yapabildi.",
  kesinlik:"tartismali",
  zincir:["balta-limani-mehmed-ali-ticaret-acilimi"],
  olay:["1352-01-01","1536-02-18","1740-05-30","1838-08-16","1914-09-09"],
  kaynak:"TDV: fransa · kapitulasyon (kısa tanım sayfası, tam madde çekilemedi) · ahidname · baltalimani-muahedesi · atlasın 1536-02-18 ve 1740-05-30 kayıtlarının kendi metni" }

];

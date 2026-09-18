// ============================================================================
// EK OKUMA KARTLARI — tartışma (pilot)
// ============================================================================
// Yazan: KITA 26, 13 Eylül 2026. Şartname: `oturumlar/KITA-26-TARTISMA-0046.md`
// (paket 0046, H-0003 · H-0004) + `oturumlar/ORTAK-0045-ICERIK-PROGRAMI.md`
// (telif + kaynak kırmızı çizgileri). Emre'nin kendi sözü:
//   H-0003 "rasathanenin yıktırılması gibi olaylar için tartışma şeklinde ek
//   okuma — sebep sonuç, tarihçilerin eleştirileri."
//   H-0004 "İngiltere'ye verilen kapitülasyonlar konusunda iki madde var.
//   Kapitülasyonların ne olduğunu, neden verildiğini, nasıl yarar ya da zarar
//   getirdiğini, bu konudaki tartışmaları ek okuma olarak koyalım."
//
// 🔴🔴 YÜKLEYİCİ BOŞLUĞU — ÖLÇÜLDÜ, tahtaya bildirildi (M-3690, 13 Eylül 2026).
// `js/app.js:6505` (`ekOkumaMerakYukle`) YALNIZ `data/ekokuma.js` ve
// `data/merak.js`'i sabit bir dizide yüklüyor; bu dosya o dizide YOK. Üstelik
// `EKOKUMA_TUR["tartisma"]` (app.js:6578) kaynağı `window.EKOKUMA` okuyor,
// `window.EKOKUMA_TARTISMA` DEĞİL — yani dosya yüklense bile değişken adı
// eşleşmiyor (D099: bir artefakt hiçbir aletin globuna girmiyorsa yapılmamış
// olmakla aynı sonucu verir). Aynı sebepten önceki beş kuyruk dosyası da
// (ekokuma_antlasma2/edebiyat/magazin/mimari/sh104) şu an EKRANDA GÖRÜNMÜYOR —
// tek başıma yeni açtığım bir kusur değil, var olan bir örüntünün altıncı
// örneği. KITA 12'ye (app.js'in tek sahibi, `§7`) ve koordinatöre (1.MURAT)
// tahtadan bildirildi; kart içeriği burada HAZIR, bağlama KITA 12'nin işi.
//
// 🟢 CEKİRDEK ÇAKIŞMASI — ÇÖZÜLDÜ (M-3698 → M-3725, KITA 14, 13 Eylül 2026).
// Bildirdiğim çakışma (`olaylar_ek7.js` t:"1580-02-01" vs `olaylar_ek2.js`
// t:"1580-06-01") KITA 14 tarafından ölçüldü: HÜKÜM MÜKERRER, iki ayrı
// aşama DEĞİL — TDV `ingiltere` maddesi tek olay anlatıyor ve YALNIZ YILI
// (1580) doğruluyor, iki maddenin de ay/gün alanı uydurmaydı (`§4`: tarih
// uydurma yasağı). Yapılan: `olaylar_ek2.js` kaydı KALDIRILDI (gerekçeli
// yorumla), `olaylar_ek7.js` kaydı `t:"1580-01-01"`e çekildi ve ek2'ye özgü
// bilgiler (Elizabeth-Murad mektuplaşması, 1581 Levant Company) TDV'den
// birebir alıntıyla oraya taşındı. Aşağıdaki kartın `olay:[...]` alanı bu
// yeni tek tarihi kullanacak şekilde GÜNCELLENDİ (13 Eylül 2026, aynı gün).
// Ayrıntı: `denetim/KITA14-0046-KAPITULASYON-SONUC-0913.md`.
// ⚠️ YAN NOT (KITA 14'in kendi bulgusu, dokunmadığı bir dosya): kuyruktaki
// `kronoloji_ingiltere.js:489` hâlâ eski `t:"1580-06-01"` (uydurma gün)
// taşıyor — çekirdek dışı olduğu için Değişmez 2'yi bozmuyor, ama dosyanın
// gerçek sahibi düzeltirse tutarlılık artar. Benim dosyam değil, dokunmadım.
//
// 🔴 KAPSAM SINIRI — KITA 28 ile tahtadan (M-3694/M-3697) anlaşıldı: KITA 28
// `data/ekokuma_ekonomi.js`de (tur:"sebep-sonuc") kapitülasyonların 1352→1914
// SAF EKONOMİK MEKANİZMA zincirini (Ceneviz → Fransa → süreklilik → Balta
// Limanı → kaldırılış) işliyor. Aşağıdaki kart o zincire GİRMEZ, yalnız
// İngiltere'nin 1580 imtiyazı özelinde SİYASİ/EGEMENLİK/ADLÎ AYRICALIK
// eksenini işler — iki kart birbirini tekrar etmez, tamamlar.
//
// ── TELİF ve KAYNAK (`ORTAK-0045-ICERIK-PROGRAMI.md §④`) ──────────────────
// Metinler kendi cümlelerimle yazıldı, TDV/akademik metin kopyalanmadı.
// Kullanılan TDV maddeleri (13 Eylül 2026 sınandı — HTTP 200 + gövde okundu):
//   takiyyuddin-er-rasid  CANLI — rasathanenin kuruluşu (1577), yıktırılışı
//                         (22 Ocak 1580/4 Zilhicce 987), fetva metni, siyasi
//                         çekişme, bilimsel önem değerlendirmesi tam okundu.
//   ingiltere             CANLI — Harborne'un 1578 görevi, ahidnamenin
//                         verilme gerekçesi (Sokullu Mehmed Paşa · Hoca
//                         Sâdeddin Efendi desteği, İspanya'ya karşı ortak
//                         çıkar) okundu; GÜN VERMİYOR, yalnız "1580".
//   imtiyazat             CANLI — kapitülasyonların tarihçesi (1569 Fransa ·
//                         1580 İngiltere · 1612 Hollanda), erken/geç dönem
//                         tarihçi değerlendirme farkı, 1838 Balta Limanı,
//                         1914/1923 kaldırılışı tam okundu.
//   ahidname              CANLI — ahidnamenin tek taraflı lütuftan karşılıklı
//                         antlaşmaya (muahede) dönüşümü okundu.
//   istanbul-rasathanesi  🔴 ÖLÜ (302, arama sayfasına yönleniyor) —
//                         `takiyyuddin-er-rasid` zaten doğru adres, ek arama
//                         gerekmedi.
//   kapitulasyon          CANLI ama gövde yalnız kısa TANIM veriyor (D067
//                         ailesi: canlı slug + kısa/boilerplate gövde);
//                         asıl tarihî anlatı `imtiyazat` ve `ahidname`
//                         maddelerinde — TDV'nin kendi "kapsayıcı madde YER/
//                         KAVRAM'da durur" deseni (`CLAUDE.md §4`).
//
// Şema (`data/ekokuma.js` başlığındaki tanım, `tur` değeri dışında AYNI):
//   { id, tur:"tartisma", kisa, sebep:{b,t}, sonuc:{b,t}, bag, metin,
//     kesinlik, zincir:[...], olay:[...], kaynak }
// `bag` alanı tartışma kartlarında GÖRÜŞ/KARŞI GÖRÜŞ metnini taşır — taraf
// tutulmaz, iki okuma da dayanağıyla verilir (KITA-26-TARTISMA-0046.md §①).
// ============================================================================

// 13 Eylül 2026 · EKOKUMA-DAGITIM-0913: bağ alanları (olay/baglanti/t) içerik okunarak yeniden dağıtıldı —
// gerekçe ve çakışma listesi denetim/EKOKUMA-DAGITIM-0913.md. Kart METİNLERİNE dokunulmadı.
window.EKOKUMA_TARTISMA = [

{ id:"istanbul-rasathanesi-yiktirilmasi-tartisma", tur:"tartisma",
  kisa:"Osmanlı'nın tek gözlemevi sekiz yıl sonra neden yıkıldı — dinî bir hüküm mü, saray içi bir hesaplaşma mı?",
  sebep:{ b:"Takıyyüddin er-Râsıd'ın, Tophane sırtlarında dönemin en donanımlı gözlemevlerinden birini kurması", t:"1577-01-01" },
  sonuc:{ b:"4 Zilhicce 987 (22 Ocak 1580) tarihli bir hatt-ı hümâyunla rasathanenin, içindeki bütün aletleriyle birlikte yıktırılması", t:"1580-01-22" },
  bag:"Resmî gerekçe Şeyhülislâm Kadızâde Ahmed Şemseddin Efendi'nin fetvasıydı: \"rasathaneler bulundukları ülkeleri felâkete sürükler.\" Ama TDV'nin kendi maddesi bunu tek başına yeterli görmüyor — olayı aynı zamanda Takıyyüddin'in saraydaki siyasî bağlantılarına ve rakiplerinin yürüttüğü bir yıpratma kampanyasına bağlıyor. Yani iki okuma bir arada duruyor: dinî hüküm bir ARAÇ mıydı, yoksa asıl sebebin kendisi miydi? TDV ikisini de anıp kesin bir taraf seçmiyor, ben de seçmiyorum.",
  metin:"Rasathane, Takıyyüddin'in 1577'de kurduğu ve zamanının en gelişmiş gözlem aletlerini barındıran bir kurumdu; TDV onu Osmanlı tarihindeki tek resmî gözlemevi ve Türk bilim tarihi için büyük önem taşıyan bir tesis olarak niteliyor. Yıkımdan sonra imparatorlukta resmî bir rasathane kurumu uzun süre yeniden tesis edilmedi. Bu, dönemi Tycho Brahe'nin Avrupa'daki çağdaş gözlemeviyle karşılaştıran tarihçiler için somut bir kayıp örneğidir — ama aynı olay, din ile devlet erki arasındaki ilişkinin 16. yüzyıl Osmanlı sarayında ne kadar iç içe geçtiğinin de bir örneğidir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1577-01-01|Rasathane","1580-01-22"],
  kaynak:"TDV: takiyyuddin-er-rasid" },

{ id:"ingiltere-kapitulasyon-1580-tartisma", tur:"tartisma",
  kisa:"İngiltere'ye verilen bu imtiyaz bir hoşgörü jesti miydi, yoksa hesaplı bir dış politika hamlesi mi?",
  sebep:{ b:"Elizabeth'in İstanbul'a gönderdiği William Harborne'un, Sokullu Mehmed Paşa ve Hoca Sâdeddin Efendi'nin desteğiyle, İngiliz tüccarlara Fransız ve Venedikliler'e tanınanla eşit ticarî imtiyaz için yürüttüğü müzakereler", t:"1578-01-01" },
  sonuc:{ b:"İngiliz tüccarlara ahidnâmeyle kapitülasyon tanınması ve ertesi yıl bu imtiyazı işletecek tekelci Levant Company'nin kurulması", t:"1581-09-11" },
  bag:"Asıl tartışma iki okuma arasında: ERKEN DÖNEM yorumu bu tür imtiyazları İslâm hukukunun eman/ahid geleneğinin bir uzantısı, karşılıklı ticarî çıkara dayanan bir \"hoşgörü politikası\" olarak okur — nitekim İngiltere'nin payına düşen de Fransa'ya zaten 1569'da verilmiş olanın bir tekrarıydı, yeni bir ilke değil. GEÇ DÖNEM eleştirisi ise TDV'nin kendi ifadesiyle bu imtiyazların (yargı muafiyeti dahil) zamanla \"Osmanlı Devleti'ni siyasî ve iktisadî bakımdan Batı Avrupa'ya bağımlı hale getirdiğini\" vurgular. İngiltere'nin 1580 payı tek başına bu sonucu doğurmadı — bunun geniş mekanizması (Ceneviz'den 1914'e) ayrı bir kartta işleniyor; burada yalnız bu TEK imtiyazın kendi bağlamı ve iki okuması var.", ic_not_bag:"çıkarılan: (`data/ekokuma_ekonomi.js`)",
  metin:"Kapitülasyon, Osmanlı'nın kendi ülkesinde güvenle ticaret yapabilmeleri için hıristiyan devletlere tanıdığı bir imtiyazdı; hukukî temeli ahidnâme adı verilen padişah belgesiydi. İngiltere'nin payına düşen imtiyaz salt bir ticaret meselesi değildi: 1578'de İstanbul'a gönderilen Harborne'un arkasında, Katolik İspanya'ya karşı Protestan İngiltere ile ortak çıkar arayan bir Osmanlı hesabı da vardı. Kısa vadeli sonucu somuttu — Levant Company Osmanlı topraklarındaki İngiliz ticaretini 1825'e kadar tek elde topladı ve iki ülke arasında kalıcı bir diplomatik ağ kurdu. Ahidnâmelerin kendisi de zamanla değişti: TDV'nin 'ahidname' maddesine göre başlangıçta tek taraflı ve dinî yeminle pekiştirilen bu belgeler, 19. yüzyılda 'muahede' (karşılıklı antlaşma) diline dönüştü — bu da Avrupa hükümdarlarının artık dilekçi değil eşit muhatap sayıldığının bir işaretidir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1580-01-01|İngiltere"],
  kaynak:"TDV: ingiltere · imtiyazat · ahidname" },

// ══ PAKET-A2 (13 Eylül 2026) · paket 0032 H-0014 — OTRANTO ════════════════
// Emre: "Otranto tahliyesi maddesine ek okuma, merak gibi butonları
// serpiştirelim; ayrıca Otranto'nun tahliyesindeki kanlı katliamları anlatan
// buton olabilir." 🔴 ÖLÇÜLDÜ: okunan kaynaklarda öldürmeler 1481 TAHLİYESİNDE
// değil 1480 ALINIŞINDA — kart bunu açıkça söylüyor ve iki maddeye de bağlı.
// Bu dosyanın `tartisma` şeması (sebep/sonuc) yerine son çare dalının okuduğu
// baslik + kisa/metin/bag/not alanları kullanıldı (ekokuma_dalga2.js başlığı).
{ id:"tartisma-otranto-1480-idamlar", tur:"tartisma",
  baslik:"Otranto'da 1480'de ne oldu? — \"Otranto şehitleri\" anlatısı ile Osmanlı kaynakları",
  kisa:"Katolik Kilisesi yaklaşık 800 kişinin inancından dönmediği için başının kesildiğini anlatır ve onları 2013'te aziz ilan etti; TDV ise direnen ileri gelenlerin idam edildiğini kabul edip sayının kilise propagandasıyla büyütüldüğünü söyler.",
  metin:"Osmanlı kuvvetleri Otranto'yu 11 Ağustos 1480'de, surları toplarla aşarak aldı. Şehrin alınmasının ardından yaşananlar iki ayrı gelenekte çok farklı anlatılır.\n\nKatolik Kilisesi'nin anlatısında kuşatma ve istiladan sağ kurtulan yaklaşık 800 kişi, inançlarını inkâr etmeyi reddettikleri için şehrin çevresinde başları kesilerek öldürülmüştür. \"Otranto şehitleri\" (Antonio Primaldo ve arkadaşları) diye anılan bu kişiler, Papa Francis tarafından 12 Mayıs 2013'te Roma'da Aziz Petrus Meydanı'nda yapılan törenle aziz ilan edildi.\n\nTDV'nin Otranto Seferi maddesi ise Tursun Bey başta olmak üzere Osmanlı kaynaklarına dayanır: şehir direnişle alındığı için karşı koyan ileri gelenlerin bir kısmı idam edilmiş, bir kısmı esir alınmıştır. Madde, ölenlerin sayısının abartılmasını açıkça kilise propagandasına bağlar.", ic_not_metin:"çıkarılan (ve PAKET-KRON2 1480-08-11 maddesini düzelttiğinden beri bayat): Atlasın kendi çıkarma maddesi de 800 rakamını anıyor; yani aynı olayın iki okuması bu kronolojinin içinde de yan yana duruyor.",
  bag:"İki anlatı olayın VARLIĞINDA değil, ÖLÇEĞİNDE ve SEBEBİNDE ayrışır: kaç kişi öldürüldü, ve öldürülme sebebi silahlı direniş miydi yoksa din değiştirmeyi reddetmek mi? TDV idamların olduğunu kabul eder ama dinî zorlama çerçevesini benimsemez; kilise geleneği ise bu çerçeveyi olayın özü sayar. Bu kart taraf seçmiyor; iki kaynağın ne söylediğini yan yana koyuyor.",
  not:"Tahliye (10 Eylül 1481) sırasında bir katliam anlatısı TDV'nin ilgili maddelerinde yer almaz: garnizon altı aylık kuşatmada yiyecek ve su bitince teslim oldu; İbn Kemal ve Angiolello'ya göre esirler sonradan Napoli ordusuna alındı. Kan dökülen an 1480'deki alınıştır. İdamların günü kaynaklarda verilmez.", ic_not_not:"eski not: 🔴 Tahliye (10 Eylül 1481) sırasında bir katliam anlatısı, okunan TDV maddelerinde (otranto-seferi · gedik-ahmed-pasa · bayezid-ii) YOK: … — kart bu yüzden iki maddeye de bağlandı. İdamların GÜNÜ okunan iki kaynakta verilmiyor (Vatikan metni yalnız '1480' diyor); günü uydurmamak için yazılmadı. Kilise anlatısının tarihî doğruluğunu inceleyen akademik bir çalışma bu kart için OKUNMADI.",
  kesinlik:"tartismali",
  olay:["1480-08-11|Otranto","1481-09-10|Otranto"],
  kaynak:"TDV: otranto-seferi · Resmî metin: Papa Francis'in 12 Mayıs 2013 aziz ilan töreni vaazı, vatican.va — https://www.vatican.va/content/francesco/en/homilies/2013/documents/papa-francesco_20130512_omelia-canonizzazioni.html", ic_not_kaynak:"eski kaynak: TDV: otranto-seferi (gövde okundu, HTTP 200) · Resmî metin: Papa Francis'in 12 Mayıs 2013 aziz ilan töreni vaazı, vatican.va — https://www.vatican.va/content/francesco/en/homilies/2013/documents/papa-francesco_20130512_omelia-canonizzazioni.html (okundu: '1480', 'about 800 people … beheaded') · ⚠️ 'otranto' 302 ÖLÜ" },

{ id:"dis-yankilar-otranto-1480", tur:"dis-yankilar",
  baslik:"Otranto İtalya'da nasıl yankılandı?",
  kisa:"Roma'nın İstanbul'dan sonra düşeceği korkusu yarımadayı sardı — ama işgalin ardından Napoli, Osmanlı'yla dostluk görüşmelerine oturdu.",
  metin:"TDV'nin Otranto Seferi maddesine göre çıkarma, neredeyse bütün Hıristiyan dünyasını endişeye düşüren ağır bir olay sayıldı. Roma'nın ele geçirilmesi, İstanbul'un fethinden sonra Hıristiyanlık için tam bir çöküş anlamına gelecekti; İtalya'da büyük bir panik başladı ve olay sonraki yüzyıllarda destanlara, kahramanlık hikâyelerine konu oldu.\n\nKorku bir birlik doğurmadı. TDV'nin Napoli maddesine göre İtalyan devletleri bir ittifak kurmaya çalıştı ve Napoli de katılmak istedi, fakat ittifak gerçekleşmedi. İtalya'daki devletleri yanına çekmek isteyen Fâtih bir barış girişiminde bulundu ve Napoli Kralı Ferrante'yi kazandı.\n\nOtranto geri alındıktan sonra da ilişki kopmadı: II. Bayezid'den çekinen Napoli kralı barış istedi, 1482-1485 arasında bir dizi yazışma yapılıp antlaşmalar imzalandı ve 1494'te bir Osmanlı elçilik heyeti Napoli'yi ziyaret etti; ancak sürekli bir münasebet kurulamadı. Olayın modern bir yankısı da var: şehrin alınışında öldürülenler 12 Mayıs 2013'te Katolik Kilisesi tarafından aziz ilan edildi (ayrı tartışma kartı).",
  not:"Dostluk görüşmelerinin belgeleri için TDV bibliyografyası iki çalışma gösteriyor: İ. Hakkı Uzunçarşılı, 'Otranto'nun Zaptından Sonra Napoli Kralı ile Dostluk Görüşmeleri', Belleten XXV/100 (1961) · Tayyib Gökbilgin, Napoli kralının II. Bayezid'e ve Gedik Ahmed Paşa'ya mektupları, POF XXII-XXIII (1976). Bu kart söz konusu çalışmaları TDV'nin aktarımı üzerinden kullanır.", ic_not_not:"eski: Bu kart onları OKUMADI, yalnız TDV'nin aktardığına dayanıyor.",
  kesinlik:"kesin",
  olay:["1480-08-11|Otranto","1481-09-10|Otranto"],
  kaynak:"TDV: otranto-seferi · TDV: napoli · TDV: bayezid-ii · Vatikan vaazı 12 Mayıs 2013 (vatican.va)", ic_not_kaynak:"eski kaynak: TDV: otranto-seferi (gövde okundu, HTTP 200) · TDV: napoli (gövde okundu, HTTP 200) · TDV: bayezid-ii (HTTP 200) · Vatikan vaazı 12 Mayıs 2013 (vatican.va, okundu)" },

// ══ EKO-TARTISMA (17 Eylül 2026) · paket 0066 H-0006 · H-0018 · H-0019 ════════
// Şartname: oturumlar/DALGA-0066.md + KADRO-1010-1015.md (OPUS HAZIR KITA 1013).
// Okunan kaynaklar (17 Eylül 2026, gövde okundu):
//   TDV polonya (HTTP 200; `lehistan` 200 ama yalnız yönlendirme kütüğü) · TDV prusya
//   · Hugo Lane, Lukowski'nin "The Partitions of Poland 1772, 1793, 1795" (Longman 1999)
//     kitabı hakkında eleştiri, H-Net HABSBURG, Ağustos 1999 (h-net.org/reviews/showrev.php?id=3315)
//   · TDV merzifonlu-kara-mustafa-pasa · TDV kirim · `murad-giray` 302 ÖLÜ (müstakil madde yok)
//   · Cihan Yalvar, "Suçlamaların Gölgesinde Bir Kırım Hanı: Murad Giray Han", YÜTAD 3/6 (2019), s.1-18 (PDF metni okundu)
//   · Nurettin Gemici, "Evliya Çelebi'ye Göre II. Viyana Muhasarasında Kırım Hanı'nın Yanlış
//     Tutumunun Sebepleri", Türkiyat Mecmuası 26/1 (2016), s.131-146 (PDF metni okundu)
//   · TDV sahin-giray (Feridun Emecen, 2010).
// Lukowski'nin kitabı ve Fisher'ın çalışmaları DOĞRUDAN okunmadı; kartta yalnız aktaranları
// (Lane · TDV bibliyografyası) üzerinden anılır. Günü kaynakta olmayan uçlar YYYY-01-01.
// 1683 bozgununun genel sebepleri ayrı kartta: ekokuma_vezir.js `tartisma-2viyana-bozgun-sebepleri`;
// aşağıdaki kart yalnız HANIN tutumunu işler.

{ id:"tartisma-lehistan-paylasimlari-1772-1795", tur:"tartisma",
  baslik:"Lehistan niçin üç kez paylaşıldı ve niçin karşı koyamadı?",
  kisa:"Avrupa'nın en büyük devletlerinden biri yirmi üç yılda haritadan silindi. Tarihçiler bunu hem komşuların iştahına hem de Lehistan'ın kendi siyasî düzenine bağlar; tartışma, iki sebepten hangisinin ağır bastığı üzerinedir.",
  sebep:{ b:"Rusya'nın desteklediği Kral Stanisław August'u tanımayan muhaliflerin Bar'da konfederasyon ilân etmesi ve Rus birliklerinin müdahalesiyle ülkede iç savaşın başlaması", t:"1768-02-29" },
  sonuc:{ b:"Son kral Stanisław August'un tahttan çekilmesi ve Lehistan'ın bağımsız bir devlet olarak Avrupa haritasından silinmesi", t:"1795-11-25" },
  metin:"Lehistan-Litvanya birliği 18. yüzyılda geniş topraklara sahipti ama merkezî gücü zayıftı. Kralı soylular seçiyordu ve her seçim yabancı devletlerin müdahalesine kapı açıyordu. Soylular mecliste tek bir üyenin itirazıyla kararı engelleyebilen liberum veto usulüne sıkı sıkıya bağlıydı, sürekli ordu da çok küçüktü. TDV'nin aktardığına göre Sadrazam Hekimoğlu Ali Paşa 1743'te Lehistan'ı, en küçük kararı almak için bile on binlerce soyluyu uzlaştırmak zorunda kalan bir devlet olarak tarif etmişti.\n\nPaylaşımlar üç ayrı adımda gerçekleşti. 1772'de Rusya, Prusya ve Avusturya, TDV'ye göre ülkenin yüzölçümünün yaklaşık %28'ini ve nüfusunun %38'ini aldı. Lehistan buna reformla karşılık verdi ve 3 Mayıs 1791 anayasasıyla oylamalarda çoğunluğu esas aldı ve kral seçimine son verip tahtı bir hanedana bağladı. Komşular bu gelişmeyi tehlikeli buldu. Osmanlı ile savaşını bitiren II. Katerina, Prusya ile anlaşarak müdahale etti. Bu yüzden 1793'teki ikinci paylaşım yalnız Rusya ile Prusya arasında yapıldı. Kościuszko önderliğindeki 1794 ayaklanması da sonucu değiştiremedi ve 1795'te Avusturya'nın da katılımıyla üç devlet ülkenin geri kalanını aralarında bölüştü. Paylaşımların iki kez üç, bir kez iki devlet arasında yapılmasının sebebi budur.\n\nOsmanlı tarafı olayın dışında değildi. 1768-1774 savaşı, Rus birliklerinin Bar konfederelerini Osmanlı topraklarına kadar kovalamasıyla başladı. TDV, bu savaştaki Osmanlı yenilgisinin 1772 paylaşımının önünü açtığını yazar. 1790'da Osmanlı ile ittifak kuran Prusya ise aynı sırada Lehistan topraklarından pay almayı planlıyordu.",
  bag:"BİRİNCİ OKUMA — komşuların iştahı: Lukowski'nin 1999 tarihli kitabı, H-Net'teki eleştirisinin özetlediği biçimiyle, sorumluluğu başta II. Katerina ile II. Friedrich'e yükler. Bu okumaya göre Rusya, Lehistan'ı kendisine bağlı tutabilmek için her ciddi reformun önünü kesti. Nitekim TDV'ye göre Katerina 1768 antlaşmasıyla Lehistan'ın mevcut anayasal düzenini güvence altına aldı ve böylece ülkenin güçlenmesini istemediğini gösterdi. Avusturya'nın küçük bir bölgeyi (Zips) işgal etmesi de kısa sürede büyük bir toprak paylaşımına dönüştü.\n\nİKİNCİ OKUMA — içerideki çözülme: Aynı kitap, soyluların ayrıcalıklarına sıkı sıkıya bağlı kalmasını ve aralarındaki birlik eksikliğini de ölümcül bir etken sayar. Veto usulü ve seçimle gelen krallık, yabancı elçilere her seçimde ve her mecliste araya girme fırsatı veriyordu.\n\nİki okuma birbirini dışlamaz. Lukowski'nin hükmü de iki etkenin birleşimidir, ama ağırlığı dış güçlere verir ve soyluların kusurlarını suç değil trajedi olarak görür. Eleştirmen Hugo Lane ise bu dengeyi tartışmaya açar. Ona göre Katerina'nın her adımını baştan planlanmış bir yok etme siyaseti gibi okumak, olaylara sonradan bakmanın izlerini taşır. Soylular arasında reform gerektiği yönünde büyüyen uzlaşma da yeterince görülmemiştir. Bu kart iki okumadan birini seçmiyor.",
  not:"Yüzölçümü ve nüfus oranları TDV'nin Polonya maddesinden alınmıştır. Lukowski'nin kitabı burada doğrudan değil, Hugo Lane'in H-Net HABSBURG listesinde Ağustos 1999'da yayımlanan eleştirisi üzerinden kullanılmıştır.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1768-10-08|Rusya'ya savaş ilanı","1772-08-05|Birinci Paylaşım","1793-01-23|İkinci Paylaşım","1795-10-24|Üçüncü Paylaşım"],
  kaynak:"TDV: polonya · TDV: prusya · Hugo Lane, J. Lukowski'nin 'The Partitions of Poland 1772, 1793, 1795' (Longman 1999) kitabı hakkında eleştiri, H-Net HABSBURG, Ağustos 1999 — http://www.h-net.org/reviews/showrev.php?id=3315" },

{ id:"tartisma-murad-giray-1683-viyana", tur:"tartisma",
  baslik:"1683'te Kırım hanı ihanet mi etti?",
  kisa:"Viyana bozgunundan sonra suç büyük ölçüde Kırım Hanı Murad Giray'a yüklendi ve han tahtından indirildi. Dönemin bazı kaynakları hanı suçlar, bazıları ise asıl sorumlunun sadrazam olduğunu söyler.",
  sebep:{ b:"Sefer meşveretinde Kırım Hanı Murad Giray'ın, Yanıkkale ve Komorn alınmadan Viyana üzerine yürünmemesini savunarak Sadrazam Merzifonlu Kara Mustafa Paşa'ya karşı çıkması", t:"1683-01-01" },
  sonuc:{ b:"Murad Giray'ın bozgundan sorumlu tutularak hanlıktan azledilmesi ve yerine II. Hacı Giray'ın getirilmesi", t:"1683-01-01" },
  metin:"TDV'nin Merzifonlu Kara Mustafa Paşa maddesine göre, Viyana'ya yürüme kararına sefer meşveretinde yalnız iki kişi karşı çıktı: Kırım Hanı Murad Giray ve Budin Valisi Uzun İbrahim Paşa. Sadrazam ikisine de düşman kesildi. Kuşatma sürerken Leh Kralı Jan Sobieski'nin ordusunun yaklaştığı haber alınınca, bu orduyu durdurma görevi hana verildi. TDV'ye göre han, sadrazamla arasındaki kırgınlık yüzünden ciddi bir harekâtta bulunmadı ve Leh ordusu Tuna'yı geçtikten sonra da yerinden kıpırdamadı. 12 Eylül'deki meydan savaşında han sol kanatta Sarı Hüseyin Paşa'nın yanındaydı. Beklenen Tatar yardımı gelmeyince o kanatta da panik başladı. Bozgundan sonra sadrazam önce İbrahim Paşa'yı idam ettirdi, ardından Murad Giray'ı azletti. Birkaç ay sonra kendisi de idam edildi.",
  bag:"SUÇLAYAN OKUMA: Olayların çağdaşı Silahdar Fındıklılı Mehmed Ağa, Cihan Yalvar'ın aktardığına göre, hanın bir tepeden Leh ordusunun köprüden geçişini seyrettiğini anlatır. Rivayete göre imamı saldırı için yalvarınca han, Osmanlı'nın Tatarlara yaptığı haksızlıkları sayıp onlara \"Tatar kadrin\" göstermek istediğini söylemiş. Silahdar hanı bozgunun sebeplerinden biri sayar. Nurettin Gemici bir adım daha ileri gidip Kırım hanları ile Leh kralları arasındaki eski dostluğun da hanın tutumunda payı olup olmadığını sorar.\n\nSAVUNAN OKUMA: Yalvar'ın incelediği Kırım kaynakları başka bir tablo çizer. Hanın kardeşi Mehmed Giray'ın tarihine göre han, düşmanın gücünü sadrazama defalarca yazmış ve topların siperlerden geri çekilmesini önermiş, karşılığında aşağılayıcı cevaplar almıştır. Aynı eser bozgunun tek sorumlusu olarak sadrazamı gösterir. Seyyid Muhammed Rıza da hanın suçsuz olduğunu, sadrazamın padişaha mektuplar yazarak suçu ona yüklediğini anlatır. Akdes Nimet Kurat da suçlamayı yersiz bulur, çünkü elde yeterli delil yoktur ve Osmanlılar yenildikleri savaşlarda Kırım hanlarını sık sık sorumlu tutmuştur. Hanın azli Kırım'da da kolay kabul görmedi. Mehmed Giray'a göre beyler önce yeni hanı istemediklerine yemin ettiler, ama kısa sürede sözlerinden döndüler.\n\nYalvar'ın vardığı sonuç ikisinin arasındadır. Bozgun yalnız hana yüklenemez: kuşatma topları getirilmemişti, kuşatma iki ayı aşmış ve ordu bitkin düşmüştü, sadrazam ise hatalar yapmıştı. Öte yandan sadrazamla hanın düşmanlığı, Tatar kuvvetlerinin ganimete yönelmesi ve savaştan bir gün önce yağmaya izin verilmesi de sonucu etkilemiştir. Yani hanın savaşa girmediği kaynaklarca büyük ölçüde kabul edilir. Tartışılan, bunun bir ihanet mi, kişisel bir küslük mü yoksa zaten kaybedilmiş bir savaşta askerini koruma kararı mı olduğudur.",
  not:"Hanın azlinin ve meşveretin günü okunan kaynaklarda verilmez; bu yüzden tarih yalnız yıl olarak yazıldı. Bozgunun top, sayı ve taktik yönleri ayrı bir kartta ele alınır.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1683-09-12|Viyana","1683-12-25|Kara Mustafa"],
  kaynak:"TDV: merzifonlu-kara-mustafa-pasa · TDV: kirim · Cihan Yalvar, 'Suçlamaların Gölgesinde Bir Kırım Hanı: Murad Giray Han', Yeditepe Üniversitesi Tarih Bölümü Araştırma Dergisi 3/6 (2019), s. 1-18 · Nurettin Gemici, 'Evliya Çelebi'ye Göre II. Viyana Muhasarasında Kırım Hanı'nın Yanlış Tutumunun Sebepleri', Türkiyat Mecmuası 26/1 (2016), s. 131-146, doi:10.18345/tm.45308" },

{ id:"tartisma-sahin-giray-hain-mi", tur:"tartisma",
  baslik:"Şahin Giray bir hain miydi, yoksa kandırılmış bir reformcu mu?",
  kisa:"Son Kırım hanı, Osmanlı ve Kırım kaynaklarında \"gâvur ortağı\" ve \"hain\" diye anıldı. TDV maddesi ise onu, Rusya tarafından kullanıldığını geç fark eden ama bağımsız bir Kırım düşüncesinden vazgeçmeyen bir reformcu olarak değerlendirir.",
  sebep:{ b:"Petersburg'a giden Kırım heyetinin başındaki Şahin Giray'ın II. Katerina tarafından resmen kabul edilmesi ve Rus sarayının desteğini kazanması", t:"1771-12-04" },
  sonuc:{ b:"Rusya'nın Kırım'ı ilhak ettiğini ilân etmesi (TDV'de 8 Nisan 1783; kronolojide yeni takvimle 19 Nisan)", t:"1783-04-19" },
  metin:"Şahin Giray 1745'te Edirne'de doğdu, Selanik'te bulundu ve gençliğinde Venedik'te Batı tarzı bir eğitim aldı. 1768-1774 savaşı sırasında Kırım'da Rusya'dan yana olan grubun içinde yer aldı. 1771'de Petersburg'a giden heyetin başında II. Katerina'nın yakın ilgisini kazandı ve Rus parasıyla desteklendi. Küçük Kaynarca Antlaşması Kırım'ı Osmanlı'dan siyaseten ayırdıktan sonra Rus desteğiyle han oldu (1777).\n\nHan olunca Kırım'ı hızla değiştirmeye girişti. Divanın yapısını değiştirdi ve ulemâyı dışarıda bıraktı. Başkenti Kefe'ye taşımaya çalıştı. Avrupa usulünde bir ordu kurmaya, soyluların ayrıcalıklarını kaldırıp herkesi vergiye bağlamaya ve kendi adına para bastırmaya yöneldi. Halk bu değişikliklere tepki gösterdi. Çıkan isyanlarda han iki kez Ruslara sığındı ve tahtını ancak Rus askerlerinin yardımıyla koruyabildi. Osmanlı 1779 Aynalıkavak uzlaşmasıyla hanlığını tanıdı. 1782'de Potemkin Kırım'a girdi ve 1783'te Rusya yarımadayı ilhak etti. Rusya, işi biten hanı saf dışı bıraktı. Şahin Giray bir süre gözetim altında yaşadı, sonra Osmanlı'ya sığındı. Rodos'a sürüldü ve Ağustos 1787'de orada idam edildi.",
  bag:"HAİN OKUMASI: Kırım'ın kaybını hazmedemeyen Osmanlı idarecileri ve tarihçileri ile Kırımlılar onu \"gâvur ortağı, hain, kâfir\" diye andı. TDV'ye göre I. Abdülhamid de Kırım'ın kaybının bütün sorumluluğunu ona yüklüyordu. Bu okumanın dayanakları somuttur: Rus parasıyla desteklenmesi, iki kez Rus askerine sığınması, Osmanlı'ya bağlı kalmadan han seçilebileceğine dair fetva aldırması ve iktidarının her kritik anda Rus süngüsüne dayanması. TDV de onun Kırım'ın Rus işgaline vasıta olduğunu kabul eder: Rusya'ya sürekli yaslanması ilhakın yolunu açtı.\n\nREFORMCU OKUMASI: TDV maddesinin yazarı Feridun Emecen başka bir tablo çizer. Ona göre Şahin Giray, bağımsız bir Kırım fikrini samimiyetle benimsemişti ve başlangıçta Rusya'nın bağımsızlık vaadine inanıyordu. Rusya'nın asıl amacının Kırım'ı doğrudan ele geçirmek olduğunu ve kendisinin kullanıldığını sonradan anladı, ama yolundan dönmedi. Ruslar da onun bazı reformlarından rahatsızdı. Emecen'e göre hanın asıl hatası ihanet değil, Kırım dışında yetiştiği için yarımadadaki kabile ve toprak dengelerini kavrayamaması ve reformları zamana yaymak yerine I. Petro gibi bir anda dayatmasıdır.\n\nİki okuma sonuçta birleşir: hanın politikası, Kırım'ı Rusya'ya açan bir yola girdi. Ayrıldıkları yer niyettir. Bir tarafa göre han Rusya'nın bilerek çalışan bir adamıydı, öbür tarafa göre Kırım'ı Osmanlı'dan bağımsız ve modern bir devlet yapmak isterken Rus siyasetine araç olmuştu. Osmanlı yönetimine kadar gelen \"Rusların adamı olarak Özü'yü ele geçirmek istiyor\" söylentileri için de TDV, bunun gerçekten hanın niyeti olup olmadığının bilinmediğini söyler.",
  not:"İdamın günü kaynakta yalnız \"Ağustosun ikinci haftası\" diye verilir. Konunun başlıca akademik incelemesi olarak TDV bibliyografyası Alan Fisher'ın 'The Russian Annexation of the Crimea 1772-1783' (Cambridge 1970) kitabını ve aynı yazarın Şahin Giray üzerine 1998 tarihli makalesini gösterir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1779-03-10|Aynalıkavak","1783-04-19|Kırım"],
  kaynak:"TDV: sahin-giray (Feridun Emecen, 2010)" },

// ══ EKO-TARTISMA (18 Eylül 2026) · DALGA-0067 H-0004 · DALGA-0068 H-0016 + H-0021 ═══
// Okunan kaynaklar (gövde/PDF metni okundu):
//   Gábor Ágoston, "Military Transformation in the Ottoman Empire and Russia, 1500-1800",
//     Kritika 12/2 (2011), s. 281-319 · Bora Efe, "Osmanlı Tarihinde Bir Felaket: Kartal Sahrası
//     (Kagul) Muharebesi", Uluslararası Doğu Avrupa Araştırmaları Dergisi 6/1 (2024), s. 117-156
//   · TDV mustafa-iii · ordu · nizam-i-cedid
//   · TDV polonya · prusya (Hertzberg planı) · H. Lane'in Lukowski eleştirisi (H-Net 1999)
//   · TDV riza-sah-pehlevi · kacarlar · Hossein Hassanpashaei, "İran-Fars Milli Kimliğinin
//     Oluşumu ve Türk Sorunu: 1800-1940", Bölgesel Araştırmalar Dergisi 6/1 (2022), s. 209-252
//   · A. A. Begdili ve dğr., "Rızâ Şah ve İran'da Milli Tarih Yazımı Projesi" (çev. Z. N. Celep),
//     Genel Türk Tarihi Araştırmaları Dergisi 4/8 (2022), s. 1009-1026.
// Aksan'ın çalışmaları DOĞRUDAN okunmadı. Kaçar hânedanının sonu için TDV riza-sah-pehlevi
// "31 Ocak 1924" diyor; çelişki `kacar` künyesinde zaten kayıtlı — kartta gün verilmedi.

{ id:"tartisma-osmanli-rus-ordusu-18yy", tur:"tartisma",
  baslik:"Osmanlı ordusu 18. yüzyılda Rusya'nın ne kadar gerisindeydi?",
  kisa:"1768-1774 savaşı iki ordu arasındaki farkı açıkça gösterdi. Tarihçiler bu farkın silahtan mı, yoksa askerin toplanma, eğitilme ve yönetilme biçiminden mi kaynaklandığını tartışır.",
  sebep:{ b:"I. Petro'nun Rusya'da düzensiz asker toplama usulü yerine düzenli bir asker alma sistemi kurması", t:"1705-01-01" },
  sonuc:{ b:"Kartal (Kagul) Ovası'nda kalabalık Osmanlı ordusunun, sayıca çok daha küçük Rus ordusu karşısında dağılması", t:"1770-08-01" },
  metin:"1768-1774 savaşı Osmanlı için bir dönüm noktası oldu. Ágoston'a göre bu savaş iki devlet arasındaki güç dengesinin temelden değiştiğini gösterdi. Rusya savaşı büyük ölçüde Osmanlı topraklarında yürüttü, Eflak, Boğdan ve Kırım'ı işgal etti ve Baltık donanması Çeşme'de Osmanlı donanmasını yaktı (1770).\n\nFarkı en çarpıcı biçimde Kartal Muharebesi gösterir. Bora Efe'nin aktardığına göre 1 Ağustos 1770'te 100 binin üzerindeki Osmanlı ordusu, yaklaşık 26-27 bin kişilik Rus ordusunun gece baskını karşısında dağıldı. Rus kaynakları Osmanlı ordusunu daha da kalabalık gösterir, Osmanlı vakanüvislerinden Mahmûd Sâbit ise 300 bin der. Rakamlar değişse de Osmanlı ordusu sayıca kat kat üstündü.\n\nİki ordunun farkı birkaç alanda ölçülebilir. Rusya 18. yüzyılda köylü ve soylulardan düzenli asker topladı; Ágoston'un aktardığı hesaplara göre yüzyıl boyunca iki milyonu aşkın kişi askere alındı. Subay yetiştirme de çok farklıydı. Rusya'da Denizcilik ve Matematik Okulu 1701'de açıldı, onu harbiye ve mühendislik okulları izledi. Ágoston'a göre 1765-1800 arasında yalnız topçu ve mühendis okulundan 15.000 mezun orduya katıldı. Osmanlı'da ise ilk Topçu Mektebi 1772'de, savaşın ortasında açıldı ve TDV'ye göre ancak bir yıl kadar yaşadı. Ágoston'a göre bu okulların mezun sayısı Rusya'dakilerle kıyaslanamayacak kadar azdı ve Osmanlı'nın Batı tarzında eğitilmiş bir subay sınıfı Tanzimat'a kadar oluşmadı.",
  bag:"GERİLEME OKUMASI: Bu okuma eskidir; Ágoston'a göre kökleri dönemin Osmanlı düşünürlerine uzanır, Avrupa merkezli tarih yazımı da onu güçlendirmiştir. Ona göre Osmanlı ordusu 'altın çağ' kurumlarının bozulması, yeniçerinin disiplinini yitirmesi ve İslâm dünyasının yeniliğe kapalı olduğu varsayımı yüzünden geri kaldı. Dönemin Osmanlı kaynakları da Kartal yenilgisini askerin disiplinsizliğine ve kolayca dağılmasına bağlar. TDV de III. Mustafa maddesinde savaşın hazırlıksız açıldığını, ordunun ehil olmayan ellere teslim edildiğini ve askerin savaştan kaçtığını yazar.\n\nDÖNÜŞÜM OKUMASI: Son kuşak Osmanlı tarihçileri 'gerileme' kavramını bir efsane sayar. Ágoston'un özetlediği biçimiyle bu çalışmalara göre Osmanlı ekonomisi ve savaş sanayii 18. yüzyılın ortalarına ya da sonlarına kadar ciddi biçimde gerilemedi; 17. yüzyılda devlet zayıflamadı, tersine yeni yollarla güçlendi.\n\nÁgoston iki okumanın arasında durur. Ona göre revizyonist çalışmalar 18. yüzyıldaki askerî geriliği yeterince açıklayamadı. Asıl fark silahta değil devletin gücü toplama biçimindeydi. Rusya merkezî ve otokratik bir yapıyla asker, para ve subayı doğrudan kendisi topladı; bunun bedeli ise serfliğin güçlenmesi oldu. Osmanlı'da yeniçeriler esnaflaşmış ve reforma direnen bir güç odağına dönüşmüştü. Devlet onların yerine koyacak bir kuvvete sahip olmadığı için giderek taşra valilerinin ve âyanın askerine dayandı. Ágoston iki yolun da kaçınılmaz olmadığını vurgular. Yani tartışma 'ne kadar geri' sorusundan çok 'neyde geri' sorusudur. Osmanlı ordusu sayıda geri değildi; Ágoston'un vurguladığı fark asker toplama, subay eğitimi, komuta ve devlet örgütlenmesindeydi.",
  not:"Kartal'daki asker sayıları kaynaklara göre değişir; Bora Efe makalesinde Rus ordusu için 23, 25 ve 27 bin gibi farklı tahminleri birlikte verir. Virginia Aksan'ın bu konudaki çalışmaları burada doğrudan değil, Ágoston'un atıfları üzerinden anılmıştır.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1770-07-06|Çeşme","1770-08-01|Kartal","1772-10-01|Topçu","1774-07-21|Küçük Kaynarca"],
  kaynak:"Gábor Ágoston, 'Military Transformation in the Ottoman Empire and Russia, 1500-1800', Kritika: Explorations in Russian and Eurasian History 12/2 (2011), s. 281-319 · Bora Efe, 'Osmanlı Tarihinde Bir Felaket: Kartal Sahrası (Kagul) Muharebesi', Uluslararası Doğu Avrupa Araştırmaları Dergisi 6/1 (2024), s. 117-156 · TDV: mustafa-iii · ordu" },

{ id:"tartisma-lehistan-ikinci-paylasim-1793", tur:"tartisma",
  baslik:"Lehistan'ın ikinci paylaşımı: reform mu felaketi getirdi, yoksa felaket zaten planlanmış mıydı?",
  kisa:"1791 anayasasıyla kendini toparlamaya çalışan Lehistan, iki yıl sonra Rusya ile Prusya arasında ikinci kez bölündü. Tartışma, reformun paylaşımı hızlandırıp hızlandırmadığı üzerinedir.",
  sebep:{ b:"Lehistan'ın 3 Mayıs 1791 anayasasıyla oylamada çoğunluk usulüne geçmesi ve kral seçimine son verip tahtı bir hanedana bağlaması", t:"1791-05-03" },
  sonuc:{ b:"Rusya ile Prusya'nın anlaşarak Lehistan'ı ikinci kez bölmesi", t:"1793-01-23" },
  metin:"Birinci paylaşımdan (1772) sonra Lehistan reform yoluna girdi. Dört yıl süren meclis 3 Mayıs 1791'de yeni bir anayasa kabul etti: kararlar artık oy çoğunluğuyla alınacak, hükümet meclise karşı sorumlu olacak, kral seçimi kalkacak ve taht bir hanedana bağlanacaktı. Lane'in özetlediği biçimiyle Lukowski'ye göre bu reformlar ancak Rusya'nın dikkati yeni bir Osmanlı savaşına dağıldığı için yapılabildi.\n\nKomşular yeni anayasayı tedirginlikle karşıladı; TDV'ye göre Fransız İhtilâli'nin fikirlerinin bulaştığı bir metin olarak görüldü. 1792'de Osmanlı ile savaşını bitiren II. Katerina Prusya ile anlaştı ve ikinci paylaşım yalnız bu iki devlet arasında yapıldı. TDV'ye göre Rusya yaklaşık 228.000 km² toprak ve 3 milyon nüfusla Ukrayna'nın tamamına yerleşti, Prusya 58.000 km² toprak ve 1.136.000 nüfusla Danzig dahil Baltık kıyısını aldı. Lehistan'a 240.000 km² toprak ve yaklaşık 3,5 milyon nüfus kaldı. 1794'teki Kościuszko ayaklanması sonucu değiştiremedi ve 1795'te devlet tamamen ortadan kalktı.\n\nOlayın Osmanlı ile doğrudan bir bağı var. TDV'ye göre Prusya Başbakanı Hertzberg'in 1787-1788'de hazırladığı plan, Avusturya'nın Osmanlı aleyhine büyümesini dengelemek için Lehistan'dan Danzig, Thorn, Posen ve Kaliç'in Prusya'ya bırakılmasını öngörüyordu. Prusya bu şehirleri 1793'te fiilen aldı. Aynı Prusya 31 Ocak 1790'da Osmanlı ile ittifak antlaşması imzalamıştı, ama bu ittifak Osmanlı'yı Rusya karşısında kurtarmadı.",
  bag:"REFORM PAYLAŞIMI HIZLANDIRDI: Bu okumaya göre 1791 anayasası komşuları ürküttü. Güçlenen bir Lehistan, Rusya'nın ülke üzerindeki denetimini bitirecek ve Prusya'nın toprak planlarını boşa çıkaracaktı. Paylaşım, reformun doğrudan bir tepkisiydi. TDV de komşuların anayasayı 'Fransız hastalığı' bulaşmış bir metin gibi gördüğünü aktarır.\n\nPAYLAŞIM ZATEN PLANLANMIŞTI: Öbür okumaya göre reform sebep değil, bahaneydi. Prusya'nın Danzig ve Thorn üzerindeki planı 1791'den önce, Osmanlı-Rus savaşı sırasında hazırlanmıştı. Bu okumada anayasa olmasaydı da komşular fırsatı değerlendirecekti. Lane'e göre Lukowski de paylaşımlardan sonra Lehistan'ın hayatta kalmasının neredeyse tamamen komşuların birbirleriyle rekabetine bağlı hâle geldiğini gösterir.\n\nLEHİSTAN'IN GÜCÜ NİÇİN YETMEDİ: İki okuma da Lehistan'ın askerî zayıflığı konusunda birleşir. Lane'in aktardığına göre ülkenin sürekli ordusu çok küçüktü. Yine Lane'e göre soylular ancak 1794'te gerçekten birleşti, o da artık çok geçti. Ayrıca Lehistan'ın dış desteği yoktu: Osmanlı savaştan yeni çıkmıştı, Prusya ise müttefik gibi görünüp paydan pay alan taraftı. Kart iki okumadan birini seçmiyor.",
  not:"Yüzölçümü ve nüfus rakamları TDV'nin Polonya maddesinden, Hertzberg planı TDV'nin Prusya maddesinden alınmıştır. Lukowski'nin kitabı doğrudan değil, Hugo Lane'in H-Net eleştirisi üzerinden kullanılmıştır. Üç paylaşımın genel sebepleri ayrı bir kartta ele alınır.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1790-01-31|Prusya","1791-05-03|Anayasa","1793-01-23|İkinci"],
  kaynak:"TDV: polonya · TDV: prusya · Hugo Lane, J. Lukowski'nin 'The Partitions of Poland 1772, 1793, 1795' (Longman 1999) kitabı hakkında eleştiri, H-Net HABSBURG, Ağustos 1999 — http://www.h-net.org/reviews/showrev.php?id=3315" },

{ id:"tartisma-kacar-sonrasi-iran-pehlevi", tur:"tartisma",
  baslik:"Kaçarlardan sonra İran'ı niçin bir Türk hanedanı yönetmedi?",
  kisa:"Kaçarlar, Türk kökenli hanedanların İran'daki son halkasıydı. Yerlerine geçen Pehlevîler bir aşiretten değil ordudan geldi ve İran'ı Fars dili ile İslâm öncesi geçmişe dayanan bir kimlik etrafında birleştirmeye çalıştı.",
  sebep:{ b:"Kazak Tugayı subayı Rıza Han'ın askerleriyle Tahran'a girerek hükümeti düşürmesi (darbe)", t:"1921-02-22" },
  sonuc:{ b:"Meclisin Rıza Han'ı şehinşah ilân etmesiyle Pehlevî hanedanının kurulması", t:"1925-12-12" },
  metin:"TDV'ye göre Kaçarlar, Anadolu'dan Azerbaycan'a göçmüş Türkmen obalarından çıkan bir hanedandı ve İran'ı 1796'dan 1925'e kadar yönetti. Hanedanın kurucusu Ağa Muhammed Şah zamanında ordunun büyük kısmı, çoğunlukla Türklerden oluşan atlı aşiret kuvvetleriydi. TDV'ye göre Kaçarlar Fransız, İngiliz, Avusturya ve Rus askerî heyetlerine rağmen eğitimli ve iyi silahlanmış bir düzenli ordu kuramadı; hazine de borç ve yabancılara verilen imtiyazlarla ayakta duruyordu.\n\nİktidarı ele geçiren Rıza Han bir aşiret reisi değil, bir askerdi. TDV'ye göre Mâzenderan'ın Alâşet köyünde doğdu, 1891'de girdiği Kazak Piyade Birliği'nde tuğgeneralliğe kadar yükseldi. 1921'de emrindeki yaklaşık 2.500 kişilik Kazak kuvvetiyle Tahran'a girdi. Önce savaş bakanı, 1923'te başbakan oldu. Kaçar Ahmed Şah Avrupa'dayken meclis onu tahttan indirdi ve 12 Aralık 1925'te Rıza Han'ı şehinşah ilân etti. Bu sırada Türkiye'deki değişimden etkilenen bazı milletvekilleri cumhuriyet bile önermişti.\n\nYani yönetim bir Türk aşiretinden bir Fars aşiretine geçmedi. Güç, aşiret atlılarına dayanan bir hanedandan modern bir birliğin komutanına geçti. Begdili ve arkadaşlarına göre yeni rejim Farsçayı millî dil ilan etti; basında, eğitimde ve yer adlarında öteki dilleri yasakladı.",
  bag:"FARSLAŞTIRMA OKUMASI: Bu okuma olayı bir etnik iktidar değişimi olarak görür. Savunucularından Hossein Hassanpashaei'ye göre 19. yüzyılda doğan İran milliyetçiliği, İslâm öncesi İran'ı yüceltip Araplar ile Türkleri iki 'öteki' hâline getirdi. Pehlevî rejimi de bu fikri devlet siyasetine dönüştürdü. Farsça zorunlu dil yapıldı, 'Azerbaycan' adı idarî bölümlerden çıkarıldı ve yeni il sınırları Fars olmayan grupları eritmeyi amaçladı. Bu okumaya göre Türk bir hanedanın gelmemesi tesadüf değil, Türk kimliğini geri plana iten bir projenin sonucuydu.\n\nİRANCI OKUMA: Begdili ve arkadaşlarının incelediği Pehlevî dönemi tarih yazımı ise kimliği etnik değil 'İranlılık' olarak tanımlar. Bu ideolojiye hizmet eden yazarlardan Ahmed Kesrevî'ye göre Azerbaycanlıların dili Türkçe olsa da Azerbaycan her zaman İran'ın bir parçasıydı. Kesrevî'nin Tebrizli olması dikkat çekicidir: Azerbaycan'da Türkçeden önce eski bir İran dilinin konuşulduğunu savunan eserini bir Azerbaycanlı yazdı. Aynı makale Rıza Şah'ın Fars olmayan kimlikleri ülkenin toprak bütünlüğü için tehdit saydığını ve tektipleştirici bir siyaset izlediğini de kabul eder.\n\nİki okuma olayın kendisinde değil anlamında ayrılır. İkisi de Pehlevî döneminde Farsçanın ve İslâm öncesi geçmişin öne çıkarıldığını kabul eder. Birine göre bu, Türklerin iktidardan dışlanmasıdır; ötekine göre modern bir ulus-devlet kurmanın yoludur. İktidar değişiminin kendisi ise TDV'nin anlatımında etnik değil askerî ve siyasîdir: bir darbe, bir meclis kararı ve bir hanedanın yerine başka bir hanedanın geçmesi.",
  not:"Darbenin günü kaynaklarda 21-22 Şubat 1921 olarak geçer; Begdili ve arkadaşları 22 Şubat (3 İsfend 1299) der. Kaçar hanedanının hangi gün sona erdiği kaynaklar arasında tartışmalıdır. Hassanpashaei'nin makalesi açıkça bir taraf tutar; kartta bu yüzden karşı okumayla birlikte verilmiştir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1921-02-21|Rıza Han","1923-10-28|Ahmed Şah"],
  kaynak:"TDV: riza-sah-pehlevi · TDV: kacarlar · Hossein Hassanpashaei, 'İran-Fars Milli Kimliğinin Oluşumu ve Türk Sorunu: 1800-1940', Bölgesel Araştırmalar Dergisi 6/1 (2022), s. 209-252 · Ali Asgar Begdili, Sepide Afşâr Rızaî, Mehdî Golcân, Alîrızâ Alîsufî, 'Rızâ Şah ve İran'da Milli Tarih Yazımı Projesi' (çev. Zühre Nur Celep), Genel Türk Tarihi Araştırmaları Dergisi 4/8 (2022), s. 1009-1026" }

];

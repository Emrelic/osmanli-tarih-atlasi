// =====================================================================
// PAKET 0056 — P08-KARADENIZ (14 Eylül 2026, 1.MURAT sevki · DALGA-SINIF2)
// Rapor: denetim/P08-KARADENIZ-0914.md · yama önerileri: denetim/YAMA-KARADENIZ-0914.json
// Kutu maddeleri: 0035/H-0090 (savaş başlangıçları · Eflak-Boğdan'a giriş)
//                 0035/H-0097 · H-0100 (1806-12 ve 1828-36 Tuna işgalleri)
//
// 🔴 TARİH KAYNAKTAN (CLAUDE.md §4 "ATLAS REFERANS DEĞİLDİR").
// 🔴 TAKVİM (D110): ESBE günleri JÜLYEN'dir. Gregoryen'e çevrildi:
//    18. yüzyıl +11 gün, 19. yüzyıl +12 gün. Her maddede ic_not_gun'da yazılı.
// Kaynaklar 14 Eylül 2026'da bu oturumca ham metinden okundu:
//   ESBE-TV  = Энциклопедический словарь Брокгауза и Ефрона, «Турецкие войны России»
//              (ru.wikisource, ham wikitext)
//   ESBE-SIL = ЭСБЕ «Силистрия» · ESBE-JUR = ЭСБЕ «Журжево или Журжа»
//   TDV      = islamansiklopedisi.org.tr gövdeleri (silistre · ruscuk · nigbolu)
// AD ALANI (§7): data/olaylar_p0056.js → window.OLAYLAR_P0056
// 🔴 index.html satırı BAĞLI DEĞİL (koordinatör ekler) — bağlanmadan CANLI
//   DEĞİLDİR (D099). denetle.py olaylar*.js glob'uyla okur.
// ⚠️ Silistre (1810-06-10 · 1829-06-30 · 1836-01-01) ve Rusçuk (1811-07-04)
//   maddeleri, YAMA-KARADENIZ-0914 inene kadar haritada KIRILMASIZ durur
//   (Değişmez 2t) — yama yerlesimler.js kilidi (P02 sırası) yüzünden bekliyor.
// =====================================================================

window.OLAYLAR_P0056 = [

// ── 1739 · Münnich Boğdan'da ─────────────────────────────────────────
{ t:"1739-08-28", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Stavuçani yenilgisi ve Hotin'in Ruslara teslimi (1736-1739 Osmanlı-Rus Savaşı)",
  gun:"28 Ağustos 1739 (Jülyen 17 Ağustos)",
  yer:"Stavuçani, Hotin yakını — Boğdan",
  yer_id:"Hotin",
  kisiler:"Mareşal Münnich (Minih), Serasker Veli Paşa",
  d:"1739 seferinde Rus ana ordusu Mareşal Münnich komutasında Lehistan toprağından geçerek Boğdan'a girdi ve Hotin yakınındaki Stavuçani'de Serasker Veli Paşa'nın ordusunu ağır bir yenilgiye uğrattı. Bu savaşın hemen ardından Hotin kalesi Ruslara teslim oldu ve Rus kuvvetleri Eylül başında Yaş'a girdi. Ancak Avusturya'nın ayrı barış yapması üzerine savaş, aynı ay imzalanan Belgrad Antlaşması ile sona erdi.",
  ic_not_gun:"ESBE-TV kendi içinde çelişik: bir bölümde '17 августа', başka bölümde '27' (Ağustos) diyor. 17 Ağustos Jülyen = 28 Ağustos Gregoryen alındı (PAKET-RUS SEFERLER rus-munih-hotin-yas-1739 f:1739-08-28 ile aynı gün, onun kaynağı ESBE «Ставчаны» — o madde bu oturumca OKUNMADI). Hotin'in teslim günü ve Yaş'a giriş (ESBE-TV '1 сентября' J = 12 Eylül G) ayrı madde yapılmadı.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '17 августа русское войско встретилось с Т.' · 'Вслед за ставучанской битвой пал и Хотин'",
  duygu:["⚔️"] },

// ── 1769 · Golitsin Dinyester'i geçiyor ──────────────────────────────
{ t:"1769-04-26", k:"savas", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Rus ordusunun Dinyester'i geçerek Boğdan'a girmesi (1768-1774 Osmanlı-Rus Savaşı)",
  gun:"26 Nisan 1769 (Jülyen 15 Nisan)",
  yer:"Dinyester, Hotin önleri — Boğdan",
  yer_id:"Hotin",
  kisiler:"Prens A. M. Golitsin",
  d:"Savaş ilanından yaklaşık altı ay sonra Rus ana ordusu Prens Golitsin komutasında Podolya'da toplandı. Boğdan metropoliti Dositey'in Moldova'yı Rus himayesine alma çağrısı üzerine Golitsin Dinyester'i geçti ve Yaş'a yürümeden önce Hotin'i almayı denedi. Bu ilk deneme başarısız oldu, ordu erzak sıkıntısı yüzünden Podolya'ya geri döndü; Hotin ancak Eylül 1769'da düştü.",
  ic_not_gun:"ESBE-TV '15 апреля он перешел Днестр' — Jülyen, +11 gün ⇒ 26 Nisan 1769 G. PAKET-RUS SEFERLER rus-golitsyn-hotin-1769 f:1769-04-25 yazıyor (kaynağı bu oturumca okunmadı) — 1 günlük fark bildirildi, bu madde ESBE-TV çevirisini taşır.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '15 апреля он перешел Днестр, но перед движением в Яссы попытался овладеть Хотиным'",
  duygu:["⚔️"] },

// ── 1788 · Rumyantsev Mogilev'de Dinyester'i geçiyor ─────────────────
{ t:"1788-07-01", k:"savas", kapsam:"ic", etiket:["savas","konu-askeri"],
  b:"Rus Ukrayna ordusunun Mogilev'de Dinyester'i geçip Boğdan'a girmesi (1787-1792 Osmanlı-Rus Savaşı)",
  gun:"1 Temmuz 1788 (Jülyen 20 Haziran)",
  yer:"Mogilev (Mohyliv-Podilskyi), Dinyester — Boğdan'ın kuzeyi",
  yer_kon:[48.446, 27.798],
  kisiler:"Mareşal Rumyantsev",
  d:"1787'de Osmanlı'nın savaş ilanıyla başlayan savaşta Rusya iki ordu kurdu: Potemkin'in ordusu Özi'yi kuşatırken Rumyantsev'in Ukrayna ordusu Dinyester ile Bug arasında Bender'i tehdit edecek ve Avusturya ile bağlantıyı tutacaktı. Rumyantsev bir kolu Hotin'i kuşatan Avusturyalılara destek için ayırdı, ana kuvvetleriyle Mogilev'de Dinyester'i geçerek Boğdan'a girdi. İsmail'e ve Tuna'ya uzanacak Rus harekâtının Boğdan ayağı böylece başladı.",
  ic_not_gun:"ESBE-TV '20 июня перешли через Днестр у Могилева' — Jülyen, +11 gün ⇒ 1 Temmuz 1788 G. Mogilev noktası atlasta yok, yer_kon kullanıldı (şehir merkezi, gazetteer koordinatı — Nominatim'le bu oturumda SINANMADI, yaklaşık).",
  ic_not_d:"Emre 0035/H-0090: 'Ruslar İsmail'e Boğdan üzerinden mi geldi?' — bu madde o sorunun 1788 ayağını cevaplar. Hotin 1788'de Avusturya garnizonuna kaldı (ESBE-TV 'где оставлен австрийский гарнизон'); işgalci Avusturya olduğu için isg:rusya önerilmedi (PAKET-RUS hükmü).",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'главные же силы Украинской армии 20 июня перешли через Днестр у Могилева'",
  duygu:["⚔️"] },

// ── 1806 · ilansız işgal ─────────────────────────────────────────────
{ t:"1806-11-23", k:"savas", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Rus ordusunun savaş ilan edilmeden Dinyester'i geçip Memleketeyn'i işgale başlaması (1806-1812 Osmanlı-Rus Savaşı)",
  gun:"23 Kasım 1806 (Jülyen 11 Kasım)",
  yer:"Dinyester hattı — Hotin, Bender, Akkirman, Kili",
  yer_id:"Hotin",
  kisiler:"General Michelson (Mihelson)",
  d:"Ekim 1806'da General Michelson'a Boğdan ve Eflak'ı işgal etme emri verildi; savaş henüz resmen ilan edilmemişti. Rus kuvvetleri Dinyester'i geçmeye başladı ve Hotin, Bender, Akkirman ile Kili kalelerinin komutanları kalelerini çarpışmadan teslim etti. Yalnız İsmail muhafızı Rus telkinlerine boyun eğmedi. Bâbıâli'nin savaş ilanı bu işgalden sonra geldi.",
  ic_not_gun:"ESBE-TV '11 ноября русские войска начали переходить Днестр' — Jülyen, +12 gün ⇒ 23 Kasım 1806 G. Dört kalenin teslim GÜNLERİ ayrı ayrı bu kaynakta yok (PAKET-RUS YAMA-RUS-0913 RUS-1806-KIL/HOT/BEN önerileri kendi günlerini taşıyor).",
  ic_not_d:"Emre 0035/H-0090: savaş başlangıcında 'Eflak-Boğdan'a giriş' maddesi istendi. Mevcut 1806-12-22 savaş ilanı maddesi (olaylar_ek5.js) bu girişten SONRADIR.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'хотя война формально и не была еще объявлена' · 'коменданты крепостей Хотин, Бендеры, Акерман и Килия уступили их без боя'",
  duygu:["⚔️"] },

{ t:"1806-12-25", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Miloradoviç'in Bükreş'e girmesi — Eflak'ın Rus işgali",
  gun:"25 Aralık 1806 (Jülyen 13 Aralık)",
  yer:"Bükreş, Eflak",
  yer_id:"Bükreş",
  kisiler:"General Miloradoviç, Rusçuk muhafızı Mustafa Paşa",
  d:"Rus ordusu Boğdan'a girdiğinde Rusçuk muhafızı Mustafa Paşa Bükreş'e bir kuvvet gönderdi ve bu kuvvet şehri tuttu. General Miloradoviç'in müfrezesi onları şehirden çıkardı; Osmanlı kuvveti Yergöğü'ne çekildi. Bükreş bu tarihten 1812 Bükreş Antlaşması'na kadar Rus işgalinde kaldı.",
  ic_not_gun:"ESBE-TV '13 декабря были вытеснены отрядом генерала Милорадовича' — Jülyen, +12 gün ⇒ 25 Aralık 1806 G. Veri Bükreş isg:rusya'yı 1806-11-30'dan başlatıyor; kaynak o tarihte şehri Rusçuk kuvvetinin tuttuğunu söylüyor (PAKET-RUS RUS-1806-BUK önerisi f:1806-12-25 — bu madde onun kırılmasını karşılar).",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'рущукский комендант Мустафа-паша выслал отряд войск к Букаресту' · '13 декабря были вытеснены'",
  duygu:["😔"] },

// ── 1810 · Silistre ──────────────────────────────────────────────────
{ t:"1810-06-10", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Silistre'nin Ruslara teslimi",
  gun:"10 Haziran 1810 (Jülyen 29 Mayıs)",
  yer:"Silistre, Tuna'nın sağ yakası",
  yer_id:"Silistre",
  kisiler:"General N. M. Kamenski",
  d:"1809 sonbaharında Bagration'un kuşatmasına dayanan Silistre, 1810 seferinde başkumandan Kamenski'nin emriyle yeniden kuşatıldı. Mayıs sonunda başlayan kuşatma işleri birkaç gün sürdü ve kale, garnizonun serbestçe çıkması şartıyla teslim oldu. Aynı günlerde Pazarcık fırtınayla alındı, Hezargrad düştü. Ruslar Silistre'yi bir yıl tuttu; 1811 baharında Kutuzov surları havaya uçurup kaleyi bıraktı.",
  ic_not_gun:"ESBE «Силистрия» '29-го мая крепость была сдана' — Jülyen, +12 ⇒ 10 Haziran 1810 G. 🔴 KAYNAK ÇELİŞKİSİ (1 gün): ESBE-TV aynı olayı '30 сдалась Силистрия' (30 Mayıs J = 11 Haziran G) diye veriyor. Özel madde («Силистрия») esas alındı, çelişki bildirildi. TDV silistre yalnız '1810'da şehir Ruslar tarafından bombalandı' der, gün vermez.",
  ic_not_d:"Veride Silistre'nin 1810-1811 işgal kaydı YOK (olaylar_ek21.js 1811-05-01 'Silistre'nin tahliyesi' maddesi kırılmasız duruyor). Öneri: YAMA-KARADENIZ-0914 SIL-1810.",
  kaynak:"ESBE «Силистрия» (ru.wikisource): '29-го мая крепость была сдана на условии свободного…' · ESBE «Турецкие войны России»: '30 сдалась Силистрия' · TDV silistre",
  duygu:["😔"] },

// ── 1810 · Niğbolu ve Kule ───────────────────────────────────────────
{ t:"1810-10-01", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Niğbolu ve Kule'nin (Turnu) direnmeden Ruslara teslimi",
  gun:"Ekim 1810",
  kesinlik:"ay",
  yer:"Niğbolu ve Kule (Turnu Măgurele), Tuna boyu",
  yer_id:"Niğbolu",
  kisiler:"General N. M. Kamenski, General Kutuzov",
  d:"Rusçuk ve Yergöğü'nün teslim olmasının ardından başkumandan Kamenski Sırbistan sınırına kadar Tuna kalelerini almak için nehir boyunca batıya yürüdü. Niğbolu ve karşı yakadaki Kule direnmeden teslim oldu; Rus müfrezeleri Plevne, Lofça ve Selvi'yi alıp tahkimatını yıktı. Ruslar Niğbolu'yu altı ay tuttu ve 1811 Nisanında kaleyi havaya uçurarak bıraktı.",
  ic_not_gun:"TDV nigbolu yalnız ayı verir ('1810 yılı Ekim ayında'); ESBE-TV yürüyüşün başlangıcını '9 окт.' (J = 21 Ekim G) verir, teslim günü yok. Ay kodu 1810-10-01 + kesinlik:'ay'. Veride Niğbolu isg:rusya f:1810-10-01 kesinlik alanı taşımıyor — YAMA-KARADENIZ NIG-KES.",
  kaynak:"TDV nigbolu: '1810 yılı Ekim ayında … Kutuzov'un kuvvetleri tarafından ele geçirildi' · ESBE «Турецкие войны России»: 'Никополь и Турно сдались без сопротивления'",
  duygu:["😔"] },

// ── 1811 · Rusçuk muharebesi ve boşaltma ─────────────────────────────
{ t:"1811-07-04", k:"savas", kapsam:"ic", etiket:["savas","toprak-kazanc","konu-askeri"],
  b:"Rusçuk Muharebesi ve Kutuzov'un Rusçuk'u yıkıp Tuna'nın sol yakasına çekilmesi",
  gun:"4 Temmuz 1811 (Jülyen 22 Haziran) — muharebe; çekilişin günü kaynakta yok",
  yer:"Rusçuk, Tuna'nın sağ yakası",
  yer_id:"Rusçuk",
  kisiler:"General Kutuzov, Sadrazam Ahmed Paşa",
  d:"Haziran başında Şumnu'dan çıkan sadrazam Rusçuk önünde Rus ordusuna saldırdı, yenilerek güneydeki tahkimli mevziine çekildi. Kutuzov kazandığı bu muharebeye rağmen Rusçuk'ta kalmayı tehlikeli buldu; kalenin istihkâmlarını yıktırdı ve bütün kuvvetlerini Tuna'nın sol yakasına geçirdi. Sadrazam boşaltılan Rusçuk'u yeniden aldı. Aynı yılın sonbaharında Osmanlı ordusunun Tuna'yı geçmesi Slobozia kuşatmasıyla sonuçlanacaktı.",
  ic_not_gun:"ESBE-TV 'а 22 атаковал русских у Рущука' (Haziran, Jülyen, +12 ⇒ 4 Temmuz 1811 G). Çekiliş günü yok. 🔴 D110 çelişkisi: TDV ruscuk '1811 Haziranında alınan ağır yenilgiler … sonra Ruslar geri çekilmeye zorlandı' diyor — TDV'nin 'Haziran'ı ESBE'nin Jülyen Haziranı olabilir; Gregoryen'de muharebe TEMMUZ'dadır. Veride Rusçuk isg t:1811-06-01 ve olaylar_ek21.js 1811-06-01 maddesi muharebeden 33 gün ÖNCE bitiyor — YAMA-KARADENIZ RUS-1811 (KARAR).",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'Кутузов … разрушив его укрепления, переправил все войска на левый берег' · 'По отступлении Кутузова на левый берег визирь занял Рущук' · TDV ruscuk",
  duygu:["⚔️"] },

// ── 1828 · Prut geçişi ───────────────────────────────────────────────
{ t:"1828-05-07", k:"savas", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Rus 6. Piyade Kolordusunun Prut'u geçip Memleketeyn'e girmesi (1828-1829 Osmanlı-Rus Savaşı)",
  gun:"7 Mayıs 1828 (Jülyen 25 Nisan)",
  yer:"Prut — Boğdan ve Eflak",
  yer_id:"Yaş",
  kisiler:"Mareşal Wittgenstein, General Geismar",
  d:"Rusya'nın savaş ilanının ardından Mareşal Wittgenstein'ın ordusu harekâta geçti. 6. Piyade Kolordusu Prut'u geçerek Boğdan ve Eflak'a girdi, öncüsü General Geismar komutasında Küçük Eflak'a yöneldi. Birkaç gün sonra 7. Kolordu İbrail'i kuşattı; 3. Kolordu ise İsmail ile Reni arasında Tuna'yı geçmeye hazırlandı. Memleketeyn 1834'e kadar Rus işgalinde kalacaktı.",
  ic_not_gun:"ESBE-TV '25 апр. 6-й пех. корпус вступил в княжества' — Jülyen, +12 ⇒ 7 Mayıs 1828 G. Mevcut 1828-04-26 savaş başlangıcı maddesi (olaylar_ek5.js) ilanı, bu madde girişi tarihler. PAKET-RUS isg önerisi (Yaş·Bükreş 1828 f:05-07) bu kırılmayı taşır.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): '25 апр. 6-й пех. корпус вступил в княжества' · '1 мая 7-й пех. корпус обложил крепость Браилов'",
  duygu:["⚔️"] },

// ── 1829 · Silistre ikinci kez ───────────────────────────────────────
{ t:"1829-06-30", k:"kayip", kapsam:"ic", etiket:["savas","toprak-kayip","konu-askeri"],
  b:"Silistre'nin Dibiç'e teslimi — 1836'ya kadar sürecek Rus işgali",
  gun:"30 Haziran 1829 (Jülyen 18 Haziran)",
  yer:"Silistre, Tuna'nın sağ yakası",
  yer_id:"Silistre",
  kisiler:"General Dibiç (Diebitsch), General Schilder",
  d:"1829 seferinin başında yeni Rus başkumandanı Dibiç ilk hedef olarak Silistre'yi seçti. General Schilder'in yönettiği kuşatma işlerine garnizon inatla karşı koydu; Dibiç kuvvetlerinin bir kısmını kuşatmada bırakıp sadrazamın arkasına yürüdü. Kuşatma sürdü ve kale teslim oldu. Ruslar Silistre'yi savaş bittikten sonra da 1836'ya kadar ellerinde tuttular.",
  ic_not_gun:"ESBE-TV 'и 18 июня крепость эта сдалась' (1829 bağlamı, Jülyen, +12 ⇒ 30 Haziran 1829 G). TDV silistre '1827-1828 savaşı esnasında Ruslar tekrar Silistre'yi aldılar' diyor — TDV yılı ESBE'nin kuşatma kronolojisiyle çelişiyor (ESBE 1828 kuşatması sonuçsuz, teslim 1829). Gün veren ESBE esas alındı, çelişki bildirildi.",
  ic_not_d:"Veride Silistre 1829-1836 Rus işgali YOK. Öneri: YAMA-KARADENIZ SIL-1829.",
  kaynak:"ESBE «Турецкие войны России» (ru.wikisource): 'осада Силистрии шла успешно, и 18 июня крепость эта сдалась' · ESBE «Силистрия»: 'В 1829 г. новый главнокомандующий, ген. Дибич, избрал первым предметом своих действий С.' · TDV silistre",
  duygu:["😔"] },

// ── 1836 · Silistre boşaltıldı ───────────────────────────────────────
{ t:"1836-01-01", k:"siyaset", kapsam:"ic", etiket:["toprak-kazanc","konu-diplomasi"],
  b:"Rusların Silistre'yi boşaltması",
  gun:"1836", kesinlik:"yil",
  yer:"Silistre",
  yer_id:"Silistre",
  d:"1829 Edirne Antlaşması'ndan sonra Ruslar Silistre'yi boşaltmadı ve kaleyi 1836'ya kadar elde tuttu. Rus askerlerinin çekilmesinden sonra vali Selim Paşa yarısı yıkılmış şehrin ortasına büyük, tek kubbeli bir cami yaptırdı.",
  ic_not_gun:"TDV silistre yalnız yıl verir ('Ruslar 1836'ya kadar Silistre'yi ellerinde tuttular'); gün bulunamadı, §4 gereği 1836-01-01 + kesinlik:'yil'. Tahliyenin antlaşmadaki tazminat şartına bağlanması bu oturumca okunan kaynakta YOK — yazılmadı.",
  kaynak:"TDV silistre: 'Ruslar 1836'ya kadar Silistre'yi ellerinde tuttular' · 'Rus askerlerinin şehri boşaltmasının ardından Vali Selim Paşa'",
  duygu:["📌"] },

];

// =====================================================================
// 1281 ÖNCESİ DOĞU ASYA — ÇOK KÜNYELİ KRONOLOJİ (ONCE1281-DOGU-ASYA, 30 Eylül 2026)
// Oturum: ONCE1281-DOGU-ASYA · koordinatör: YILDIRIM BAYEZIT
// Şartname: oturumlar/ONCE1281-KAMPANYA-ORTAK.md · kuşak 1000-01-01 → 1281-01-01
// =====================================================================
// ⚠️ index.html'e BAĞLANMADI — bağlamak koordinatörün işi. Motor ufku 1281'de
//    başladığı için bu maddeler bugün haritada GÖRÜNMEZ (ORTAK §0 — kusur değil).
//
// ── BAĞLAMA YOLU ─────────────────────────────────────────────────────
// window.KRONOLOJI_COK_ONCE1281_DOGU_ASYA → app.js cokTarafliKronolojiEkle:
// her madde `taraflar:[...]` listesindeki künyelere EKLENİR (ezmez).
// Taraf kimliklerinin bir kısmı YENİ künye önerisidir ve devletler.js'e
// girene kadar EŞLENEMEZ: denetim/ONCE1281-DOGU-ASYA-KUNYE.json (islem:"yeni").
//
// ── MÜKERRER DİSİPLİNİ ───────────────────────────────────────────────
// Künye-içi iskelet maddeleri (devletler.js'teki VE bu oturumun künye
// önerisindeki) burada TEKRARLANMADI. Aynı olay bir künyenin iskeletinde
// duruyorsa madde yalnız O OLAYI İSKELETİNDE TAŞIMAYAN künyeye bağlandı
// (ör. 1274 Japonya seferi kamakura iskeletinde var → burada yalnız
// yuan-hanedani + goryeo). 1300 öncesi mevcut kronoloji dosyaları tarandı
// (13721 maddelik evren): bölgede 1281 öncesi madde YOKTU.
//
// ── KAYNAK DÜRÜSTLÜĞÜ ────────────────────────────────────────────────
// TDV bu coğrafyada birincil olamaz (ORTAK §4). TDV'den birebir alınan
// cümleler `kaynak:` içinde tırnakla verildi (japonya · kore-cumhuriyeti ·
// karahitaylar · tayland · tibet · myanmar). Öteki maddelerde akademik eser
// ADIYLA verildi; kitap SAYFALARI bu oturumda AÇILMADI (Britannica 403).
// Günler: kaynaklar ay takvimi günü verir, Gregoryen dönüşüm UYDURULMADI —
// bütün maddeler YYYY-01-01 + `gun:` açıklaması (CLAUDE.md §4, §8).
//
// ── KAYNAK-DOĞRULAMA ────────────────────────────────────────────────
// 01.10.2026 KAYNAK-DOGRULA-DOGUASYA: 73 maddenin dayanağı yeniden açıldı.
// Açılmamış kitap atfı model belleğidir (CLAUDE.md §4) ⇒ dayanak sayılmadı:
//   ① TDV gövdesinde maddeyi destekleyen cümle GÖRÜLDÜ → kaynak:"TDV: …"
//   ③ açılamadı → kaynak:"bulunamadı"; denenen slug'lar ve eski atıf ic_not_kaynak'ta.
// Bütün TDV alıntıları çekilen gövdede birebir aranarak yazıldı. Maddeler SİLİNMEDİ,
// t/b/d DEĞİŞTİRİLMEDİ; yıl çelişkileri ic_not_kaynak'ta (13 · 45 · 56 · 57).
//
// ── ODAK (M-5662 DURDURUCU üzerine eklendi, 30 Eylül 2026) ────────────
// Her maddede TEK odak alanı var, adlar `sehirler` havuzunda (girdi.yukle,
// d/v/s süzgeci) TARANARAK seçildi — denetim/ARAC-ONCE1281-DOGU-ASYA-HAVUZ.py:
//   yer_id   = olay TAM o şehirde (44 madde; antlaşma imza yeri SAYILMAZ)
//   odak_yer = olay yakın/bölgesel; yalnız kamera, olay yeri İDDİASI DEĞİL (29)
// odak_kimlik YAZILMADI: 1281 öncesinde hiçbir künyenin o gün yerleşimi yok
// (odakKimlikSayisi 0 ⇒ kırık atıf). kapsam_genis YAZILMADI.
// 🔴 TUZAK: havuzdaki "Lin'an" = Jianshui (Yunnan, 23.6°K) — Güney Song
//    başkenti Lin'an için "Hangzhou" kullanıldı.
// Ölçüm (py arac/odak_olc.py --dosya …): KONUMLU 44 · KUTULU 29 · ODAKSIZ 0
// · çözülmeyen atıf 0. Serbest metin yer adı `yer:`de duruyor.
// =====================================================================

window.KRONOLOJI_COK_ONCE1281_DOGU_ASYA = [

// ─── ÇİN: Song · Liao · Batı Xia · Jin · Dali · Doğu Xia · Moğol ───────

{ t:"1005-01-01", b:"Chanyuan Antlaşması — Song, Liao'ya yıllık gümüş ve ipek ödemeyi kabul etti", tur:"antlasma", onem:4, dunya:2, kapsam:"ic",
  etiket:["antlasma","konu-siyasi","konu-diplomasi"], odak_yer:"Anyang", yer:"Chanyuan (Puyang, Hebei)", taraflar:["song"],
  d:"Liao ordusunun 1004 sonbaharında Sarı Irmak'a kadar ilerlemesi üzerine İmparator Zhenzong bizzat cepheye çıktı ve iki saray Chanyuan'da barış yaptı. Song, 'On Altı Vilayet'in Liao'da kalmasını fiilen kabul etti ve her yıl gümüş ile ipek göndermeyi üstlendi; iki hükümdar birbirine eşit 'kardeş' unvanıyla hitap etti. Antlaşma iki devlet arasında yüz yılı aşkın bir barış dönemini açtı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Denis Twitchett & Klaus-Peter Tietze, 'The Liao', The Cambridge History of China Vol. 6 (Cambridge UP, 1994) · Frederick W. Mote, Imperial China 900–1800 (Harvard UP, 1999).",
  gun:"1005 başı (antlaşma Jingde 1. yılın 12. ayında — Gregoryen Ocak 1005; gün kaynaktan alınmadı)",
  ic_not_t:"Olay liao-hanedani künye iskeletinde (öneri) var → burada yalnız song'a bağlandı." },

{ t:"1041-01-01", b:"Haoshuichuan Savaşı — Batı Xia, Song ordusunu ağır yenilgiye uğrattı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Yinchuan", yer:"Haoshuichuan (Guyuan yöresi, Ningxia)", taraflar:["bati-xia","song"],
  d:"Li Yuanhao'nun 1038'de imparatorluk ilan etmesi Song ile açık savaşa yol açtı. Xia ordusu 1040'ta Sanchuankou'da, 1041'de Haoshuichuan'da Song kuvvetlerini pusuya düşürerek büyük kayıplar verdirdi. Bu yenilgiler Song'u Xia'yla barış aramaya itti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).",
  gun:"1041 (yıl; gün kaynaktan alınmadı)" },

{ t:"1044-01-01", b:"Qingli barışı — Song, Batı Xia'ya yıllık hediye ödemeyi kabul etti", tur:"antlasma", onem:3, dunya:1, kapsam:"ic",
  etiket:["antlasma","konu-diplomasi"], odak_yer:"Kaifeng", yer:"Kaifeng", taraflar:["song"],
  d:"Üç yıllık yıpratıcı savaşın ardından iki taraf uzlaştı: Li Yuanhao Song'a karşı imparator unvanını resmî yazışmada bıraktı, Song ise her yıl ipek, gümüş ve çay göndermeyi kabul etti. Sınır ticaret pazarları yeniden açıldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).",
  gun:"1044 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"Olay bati-xia künye iskeletinde (öneri) var → burada yalnız song'a bağlandı." },

{ t:"1069-01-01", b:"Wang Anshi'nin 'Yeni Politikalar' reformu başladı", tur:"reform", onem:3, dunya:1, kapsam:"ic",
  etiket:["reform","konu-idari","konu-ekonomi"], yer_id:"Kaifeng", yer:"Kaifeng", taraflar:["song"],
  d:"İmparator Shenzong'un desteğiyle başbakan Wang Anshi, devlet gelirini artırıp orduyu güçlendirmek için köylüye devlet kredisi, vergi ve angarya düzenlemesi, köy milis sistemi gibi kapsamlı reformlar başlattı. Reformlar saray bürokrasisini 'yeniciler' ve 'muhafazakârlar' diye iki kampa böldü; bu bölünme hanedanın son yıllarına kadar siyaseti belirledi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Paul Jakov Smith, 'Shen-tsung's reign and the New Policies of Wang An-shih', The Cambridge History of China Vol. 5 Part One (Cambridge UP, 2009).",
  gun:"1069 (yıl; gün kaynaktan alınmadı)" },

{ t:"1077-01-01", b:"Như Nguyệt Savaşı — Đại Việt, Song istilasını Cầu nehrinde durdurdu", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Hanoi", yer:"Như Nguyệt (Cầu nehri, Bắc Ninh)", taraflar:["ly-hanedani","song"],
  d:"Lý komutanı Lý Thường Kiệt 1075'te Song'un güney sınır şehirlerine önleyici bir sefer düzenledi; Song 1076-77'de karşı istilaya geçti. Song ordusu Như Nguyệt (Cầu) nehri hattında durduruldu ve salgın hastalıklarla eriyince çekildi. Taraflar sınırda küçük değişikliklerle barıştı; Đại Việt bağımsızlığını korudu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (Cambridge UP, 2013).",
  gun:"1077 başı (yıl; gün kaynaktan alınmadı)" },

{ t:"1081-01-01", b:"Song'un Batı Xia'ya büyük seferi Lingzhou önünde çöktü", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Yinchuan", yer:"Lingzhou (Lingwu, Ningxia)", taraflar:["song","bati-xia"],
  d:"Xia sarayındaki iç karışıklığı fırsat bilen Shenzong beş koldan büyük bir sefer başlattı. Kollardan biri Lingzhou'yu kuşattı ama Xia, Sarı Irmak setlerini yıkıp kampları sular altında bırakınca ikmalsiz kalan ordu dağıldı. Ertesi yıl Yongle kalesinde ikinci bir büyük yenilgi geldi; Song'un Xia'yı ortadan kaldırma umudu bitti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).",
  gun:"1081 (yıl; gün kaynaktan alınmadı)" },

{ t:"1114-01-01", b:"Wanyan Aguda'nın Jurchenleri Ningjiang'da Liao ordusunu yendi", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","savas","konu-askeri"], odak_yer:"Cilin", yer:"Ningjiang (Songhua ırmağı, Jilin)", taraflar:["liao-hanedani"],
  d:"Liao'ya tâbi Jurchen boylarının reisi Aguda 1114'te ayaklanarak Ningjiang kalesini aldı ve üzerine gönderilen Liao ordusunu bozguna uğrattı. Bu zafer Jurchen boylarını onun etrafında birleştirdi; Aguda ertesi yıl Jin hanedanını ilan etti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1114 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"jin-hanedani f:1115 — olay künyeden önce olduğu için yalnız liao'ya bağlandı." },

{ t:"1122-01-01", b:"Jin, Liao'nun orta ve güney başkentlerini aldı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","toprak-kayip","fetih","konu-askeri"], yer_id:"Pekin (Hanbalık)", yer:"Zhongjing ve Nanjing (Pekin)", taraflar:["jin-hanedani","liao-hanedani"],
  d:"Jin ordusu 1120'de Liao'nun üst başkenti Shangjing'i aldıktan sonra 1122'de orta başkent Zhongjing'i ve Song ile anlaşma gereği Song'a bırakılması beklenen güney başkent (bugünkü Pekin) düştü. Liao imparatoru Tianzuo batıya kaçtı; devlet fiilen parçalandı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty' ve Twitchett & Tietze, 'The Liao', The Cambridge History of China Vol. 6 (1994).",
  gun:"1122 (yıl; iki başkent aynı yıl farklı aylarda düştü, günler kaynaktan alınmadı)" },

{ t:"1124-01-01", b:"Batı Xia, Jin'in üstünlüğünü tanıyıp ona tâbi oldu", tur:"vassal", onem:2, dunya:1, kapsam:"ic",
  etiket:["tabiiyet","konu-diplomasi"], yer_id:"Yinchuan (Ningxia)", yer:"Xingqing (Yinchuan)", taraflar:["bati-xia","jin-hanedani"],
  d:"Liao'nun çöküşü karşısında Xia hükümdarı Chongzong eski müttefikini bırakıp yükselen Jin'e bağlılık bildirdi. Bu, Xia'nın kuzeydoğu sınırını güvenceye aldı ve yüz yıla yakın bir Jin-Xia barışının temeli oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).",
  gun:"1124 (yıl; gün kaynaktan alınmadı)" },

{ t:"1138-01-01", b:"Lin'an (Hangzhou) Güney Song'un kalıcı başkenti oldu", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["baskent","konu-idari"], yer_id:"Hangzhou", yer:"Lin'an (Hangzhou)", taraflar:["song"],
  d:"Kaifeng'in 1127'de Jin'e düşmesinden sonra yıllarca yer değiştiren saray, 1138'de Hangzhou'ya yerleşti. Resmî olarak 'geçici saray' (xingzai) sayılan şehir fiilen Güney Song'un yüz kırk yıllık başkenti oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV cin--ulke yalnız dönem sınırı verir ('Güney Sung devrinden (1127-1279)') — 1138 başkent kararını DESTEKLEMEZ. Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Mote, Imperial China 900–1800 (1999).",
  gun:"1138 (yıl; gün kaynaktan alınmadı)" },

{ t:"1141-01-01", b:"Shaoxing Antlaşması — Song, Huai nehri sınırını ve Jin'e haraç ödemeyi kabul etti", tur:"antlasma", onem:4, dunya:2, kapsam:"ic",
  etiket:["antlasma","toprak-kayip","konu-diplomasi"], odak_yer:"Hangzhou", yer:"Lin'an (Hangzhou)", taraflar:["song","jin-hanedani"],
  d:"General Yue Fei'nin kuzeydeki başarılarına rağmen başbakan Qin Gui barış yolunu seçti; Yue Fei hapsedilip öldürüldü. Antlaşmayla sınır Huai nehri - Dasan geçidi hattına çekildi, Song kendini Jin'in tâbisi olarak tanıdı ve yıllık gümüş ile ipek ödemeyi üstlendi. Kuzey Çin kalıcı olarak Jin'de kaldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994) · Mote 1999.",
  gun:"1141 sonu (antlaşma yıl sonunda kararlaştırıldı, onayı 1142'ye sarkar; gün kaynaktan alınmadı)" },

{ t:"1153-01-01", b:"Jin başkentini Zhongdu'ya (Pekin) taşıdı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["baskent","konu-idari"], yer_id:"Pekin (Hanbalık)", yer:"Zhongdu (Pekin)", taraflar:["jin-hanedani"],
  d:"İmparator Hailing, devletin ağırlık merkezini Mançurya'dan Kuzey Çin'e kaydırmak için başkenti Shangjing'den bugünkü Pekin'e taşıdı ve şehri 'Orta Başkent' (Zhongdu) adıyla yeniden inşa ettirdi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1153 (yıl; gün kaynaktan alınmadı)" },

{ t:"1161-01-01", b:"Caishi Savaşı — Jin'in Yangzi'yi geçme girişimi Song donanmasına takıldı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","deniz-savasi","konu-askeri"], odak_yer:"Nanking", yer:"Caishi (Ma'anshan, Anhui)", taraflar:["song","jin-hanedani"],
  d:"Hailing İmparatoru Güney Song'u bitirmek için büyük bir sefer açtı. Yangzi'yi Caishi'de geçmeye çalışan Jin ordusu, Yu Yunwen komutasındaki Song donanmasının çarklı gemileri ve barutlu atış silahları karşısında geri püskürtüldü. Hailing kısa süre sonra kendi subaylarınca öldürüldü; sefer dağıldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1161 sonu (yıl; gün kaynaktan alınmadı)" },

{ t:"1209-01-01", b:"Moğollar Batı Xia başkentini kuşattı — Xia, Cengiz Han'a tâbi oldu", tur:"vassal", onem:3, dunya:2, kapsam:"ic",
  etiket:["tabiiyet","savas","konu-askeri"], yer_id:"Yinchuan (Ningxia)", yer:"Zhongxing (Yinchuan)", taraflar:["bati-xia","mogol-imparatorlugu"],
  d:"Cengiz Han'ın Xia'ya üçüncü seferinde Moğollar başkent Zhongxing'i kuşattı. Sarı Irmak setini yıkarak şehri su altında bırakma girişimi kendi kamplarını da basınca kuşatma kaldırıldı, ama Xia hükümdarı Xiangzong barış için kızını verip Moğol üstünlüğünü tanıdı ve asker desteği sözü verdi.",
  kaynak:"TDV: cengiz-han (CENGİZ HAN) — 'Cengiz Han 1210 yılı sonlarında Tangutlar üzerine yürüdü.' · 'Tangut Hükümdarı Şidurhu kızını Cengiz’e verdi ve bağlılığını arzetti.'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). ⚠️ YIL FARKI: açılan tek kaynak (TDV) tâbiliği 1210 sonuna koyar, madde t:1209. t DEĞİŞTİRİLMEDİ (görev kaynağı düzeltmek) — hüküm koordinatörde. Açılmayan eski akademik atıf (dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).", ic_not_t:"⚠️ İKİ OKUMA: madde 1209 'Xia tâbi oldu' diyor; TDV cengiz-han tâbiliği 1210 sonuna koyuyor ('Cengiz Han 1210 yılı sonlarında Tangutlar üzerine yürüdü.' · 'Tangut Hükümdarı Şidurhu kızını Cengiz’e verdi ve bağlılığını arzetti.'). Maddenin yılının dayanağı açılmamış kitap (Dunnell, CHC 6) ⇒ şu an DAYANAKSIZ. İki okuma da kayıtta; hüküm kaynak açılınca verilecek. [KAYNAK-DOGRULA-DOGUASYA 01.10.2026 (koordinatör hükmü: t KALIR)]",
  gun:"1209-1210 (yıl; kuşatma kışa sarktı, gün kaynaktan alınmadı)" },

{ t:"1211-01-01", b:"Cengiz Han Jin'e savaş açtı — Yehuling'de Jin ordusu bozguna uğradı", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Kalgan", yer:"Yehuling (Zhangjiakou kuzeyi)", taraflar:["jin-hanedani","mogol-imparatorlugu"],
  d:"Moğollar 1211'de Jin'in kuzey sınırını aştı; Yehuling (Yabani Tilki Sırtı) geçidinde Jin'in büyük sahra ordusu bozguna uğradı. Moğol akıncıları Kuzey Çin ovasını yağmaladı ve Zhongdu'nun kapılarına dayandı. Bu savaş Jin'in yirmi üç yıl sürecek çöküşünün başlangıcıdır.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV cengiz-han: '1212-1214 yılları arasında Cengiz Han’ın orduları birbiri arkasından dört defa Hıtay ülkesine girerek Hıtaylar’ı kendisine bağladı.' — 1211 ve Yehuling'i DESTEKLEMEZ. Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty' ve Thomas T. Allsen, 'The rise of the Mongolian empire', The Cambridge History of China Vol. 6 (1994).",
  gun:"1211 sonbaharı (yıl; gün kaynaktan alınmadı)" },

{ t:"1214-01-01", b:"Jin sarayı Zhongdu'yu bırakıp Kaifeng'e çekildi", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["baskent","toprak-kayip","konu-idari"], yer_id:"Kaifeng", yer:"Kaifeng (Bianjing)", taraflar:["jin-hanedani"],
  d:"Moğollarla yapılan geçici barıştan sonra İmparator Xuanzong başkenti güneye, Sarı Irmak'ın arkasındaki Kaifeng'e taşıdı. Cengiz Han bunu barışın bozulması saydı ve seferi yeniden başlattı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV cengiz-han yalnız 1212-1214 Hıtay seferlerini verir — 1214 saray taşınmasını DESTEKLEMEZ. Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1214 yazı (yıl; gün kaynaktan alınmadı)" },

{ t:"1215-01-01", b:"Zhongdu (Pekin) Moğollara düştü", tur:"fetih", onem:4, dunya:2, kapsam:"ic",
  etiket:["fetih","toprak-kayip","toprak-kazanc","konu-askeri"], yer_id:"Pekin (Hanbalık)", yer:"Zhongdu (Pekin)", taraflar:["jin-hanedani","mogol-imparatorlugu"],
  d:"Sarayın Kaifeng'e çekilmesinden sonra kuşatılan eski başkent 1215'te Moğollara teslim oldu ve yağmalandı. Kuzey Çin'in büyük kısmı Moğol denetimine girdi; Jin, Sarı Irmak'ın güneyindeki Henan'a sıkıştı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV cengiz-han yalnız 1212-1214 Hıtay seferlerini verir — 1215 Zhongdu düşüşünü DESTEKLEMEZ. Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Thomas T. Allsen, 'The rise of the Mongolian empire', The Cambridge History of China Vol. 6 (1994).",
  gun:"1215 yazı (yıl; gün kaynaktan alınmadı)" },

{ t:"1216-01-01", b:"Doğu Xia hükümdarı Puxian Wannu Moğollara geçici olarak boyun eğdi", tur:"vassal", onem:2, dunya:1, kapsam:"ic",
  etiket:["tabiiyet","konu-diplomasi"], odak_yer:"Liaoyang", yer:"Liaodong", taraflar:["dongxia","mogol-imparatorlugu"],
  d:"Jin'den kopan Puxian Wannu, Moğol baskısı karşısında oğlunu rehine göndererek Moğol üstünlüğünü tanıdı; ancak kısa süre sonra doğu Mançurya'ya çekilip devletini 'Doğu Xia' adıyla yeniden bağımsız ilan etti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1216 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"Teslim ile yeniden bağımsızlık arasındaki kronoloji eserlerde 1216-1217 arasında oynuyor — ölçülemedi." },

{ t:"1227-01-01", b:"Moğollar Batı Xia'yı yıktı — Tangut başkenti teslim oldu", tur:"fetih", onem:4, dunya:2, kapsam:"ic",
  etiket:["fetih","toprak-kazanc","konu-askeri"], yer_id:"Yinchuan (Ningxia)", yer:"Zhongxing (Yinchuan)", taraflar:["mogol-imparatorlugu"],
  d:"Xia'nın Harezm seferine asker göndermeyi reddetmesi üzerine Cengiz Han 1226'da son seferini başlattı. Kuşatılan başkent 1227 yazında teslim oldu, son hükümdar Mo öldürüldü ve Tangut devleti ortadan kalktı. Cengiz Han aynı yaz sefer sırasında öldü.",
  kaynak:"TDV: cengiz-han (CENGİZ HAN) — '1226’da tekrar Tangutlar ülkesine girerek Tangut Hükümdarı Şidurhu’yu ve bütün Tangut ileri gelenlerini öldürttü.' · 'Aynı yıl Tangut’un başşehrine bir sefer düzenledi.' · 'Ancak sefer sırasında tekrar hastalandı ve Ağustos 1227’de öldü.'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV başşehrin 1227'de TESLİMİNİ açıkça yazmaz; yıkılışı 1226-1227 seferine bağlar. Açılmayan eski akademik atıf (dayanak DEĞİL): Ruth Dunnell, 'The Hsi Hsia', The Cambridge History of China Vol. 6 (1994).",
  gun:"1227 yazı (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"Olay bati-xia künye iskeletinde (öneri) 'son' olarak var → burada yalnız mogol-imparatorlugu'na bağlandı. Cengiz'in ölümü ONCE1281-IRAN-TURKISTAN'ın payı (M-5562)." },

{ t:"1233-01-01", b:"Kaifeng Moğollara düştü — Jin imparatoru Caizhou'ya kaçtı", tur:"fetih", onem:3, dunya:1, kapsam:"ic",
  etiket:["fetih","toprak-kayip","konu-askeri"], yer_id:"Kaifeng", yer:"Kaifeng", taraflar:["jin-hanedani","mogol-imparatorlugu"],
  d:"Ögedey'in 1232'de başlattığı büyük kuşatma sonunda Jin'in son başkenti Kaifeng 1233'te teslim oldu. İmparator Aizong önceden güneydeki Caizhou'ya kaçmıştı; Song'un da katıldığı son kuşatma 1234'te Caizhou'yu düşürdü.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV mogollar: 'Cengiz Han’ın Kuzey Çin’de hüküm süren Kin Devleti’ne karşı başlattığı savaş ise ancak halefi Ögedey zamanında sona erdi (1234).' — 1233 Kaifeng düşüşünü DESTEKLEMEZ. Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Herbert Franke, 'The Chin dynasty', The Cambridge History of China Vol. 6 (1994).",
  gun:"1233 baharı (yıl; gün kaynaktan alınmadı)" },

{ t:"1235-01-01", b:"Moğol–Song savaşı başladı", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:["Xiangyang", "Çongqing", "Kaifeng"], yer:"Henan · Sichuan · Hubei cepheleri", taraflar:["song","mogol-imparatorlugu"],
  d:"Song'un 1234'te Kaifeng ve Luoyang'ı ele geçirme girişimi Moğolları kışkırttı. Ögedey 1235'te Song'a karşı üç koldan sefer başlattı; Sichuan başta olmak üzere sınır bölgeleri ağır tahribata uğradı. Savaş kırk dört yıl sürecek ve Song'un sonuyla bitecekti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Thomas T. Allsen, 'The rise of the Mongolian empire', The Cambridge History of China Vol. 6 (1994).",
  gun:"1235 (yıl; gün kaynaktan alınmadı)" },

{ t:"1253-01-01", b:"Kubilay'ın Yunnan seferi — Dali Krallığı Moğollara teslim oldu", tur:"fetih", onem:3, dunya:1, kapsam:"ic",
  etiket:["fetih","toprak-kazanc","konu-askeri"], yer_id:"Dali", yer:"Dali", taraflar:["mogol-imparatorlugu"],
  d:"Möngke Kağan'ın emriyle Kubilay, Song'u güneybatıdan kuşatmak için Tibet sınırı boyunca yürüyüp Dali'ye indi. Şehir teslim oldu, fiilî iktidarı elinde tutan Gao ailesinin ileri gelenleri öldürüldü; Duan hükümdarı Duan Xingzhi ise Moğol hizmetinde yerel yönetici olarak bırakıldı.",
  kaynak:"TDV: kubilay-kagan (KUBİLAY KAĞAN) — '1253’te Nan-çan Devleti’ne son verdi.'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV adı 'Nan-çan Devleti' — Dali Krallığı ile eşleme bizim yorumumuz. Açılmayan eski akademik atıf (dayanak DEĞİL): Bin Yang, Between Winds and Clouds (Columbia UP, 2009) · Morris Rossabi, Khubilai Khan: His Life and Times (California UP, 1988).",
  gun:"1253 sonu (sefer 1253 sonbaharı-kışı; şehrin alınışı bazı eserlerde Ocak 1254 — ölçülemedi)",
  ic_not_t:"Olay dali-kralligi künye iskeletinde (öneri) 'son' olarak var → burada yalnız mogol-imparatorlugu'na bağlandı." },

{ t:"1094-01-01", b:"Gao Shengtai Dali tahtını ele geçirdi — Duan hanedanı kısa süre kesintiye uğradı", tur:"hanedan", onem:2, dunya:1, kapsam:"ic",
  etiket:["hanedan","konu-siyasi"], yer_id:"Dali", yer:"Dali", taraflar:["dali-kralligi"],
  d:"Başbakanlık görevini kalıtsal hâle getiren Gao ailesinden Gao Shengtai, Duan hükümdarını tahttan indirip kendini 'Dazhong' devletinin hükümdarı ilan etti. İki yıl sonra tahtı Duan ailesine geri verdi; bundan sonraki devlete 'Sonraki Dali' denir ve gerçek iktidar Gao ailesinin başbakanlarında kaldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Bin Yang, Between Winds and Clouds: The Making of Yunnan (Columbia UP, 2009).",
  gun:"1094 (yıl; gün kaynaktan alınmadı). Tahtın iadesi 1096." },

{ t:"1259-01-01", b:"Möngke Kağan Diaoyu kalesi kuşatmasında öldü — Moğol ordusu Song cephesinden çekildi", tur:"olum", onem:4, dunya:3, kapsam:"ic",
  etiket:["olum","savas","konu-askeri","konu-siyasi"], odak_yer:"Çongqing", yer:"Diaoyu kalesi (Hezhou, Chongqing)", taraflar:["song","mogol-imparatorlugu"],
  d:"Möngke Kağan Sichuan'dan Song'a karşı yürüttüğü seferde aylardır direnen Diaoyu kalesini kuşatırken öldü. Kubilay Wuchang önündeki kuşatmayı bırakıp tahta aday olmak için kuzeye döndü; Moğol İmparatorluğu'ndaki veraset savaşı Song'a yirmi yıl daha kazandırdı.",
  kaynak:"TDV: kubilay-kagan (KUBİLAY KAĞAN) — '1259’da Mengü Kağan’ın vefatı üzerine Sung Devleti ile barış yaparak Moğolistan’a döndü'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV Diaoyu kuşatmasını ANMAZ; yalnız vefat yılını ve Song cephesinden dönüşü verir. Açılmayan eski akademik atıf (dayanak DEĞİL): Morris Rossabi, Khubilai Khan: His Life and Times (California UP, 1988) · Allsen, CHC Vol. 6 (1994).",
  gun:"1259 yazı (yıl; gün kaynaktan alınmadı)" },

{ t:"1273-01-01", b:"Xiangyang beş yıllık kuşatmadan sonra Moğollara teslim oldu", tur:"kusatma", onem:4, dunya:2, kapsam:"ic",
  etiket:["kusatma","fetih","toprak-kayip","konu-askeri"], yer_id:"Xiangyang", yer:"Xiangyang (Hubei)", taraflar:["song","yuan-hanedani"],
  d:"Han ırmağı üzerindeki ikiz kale Xiangyang-Fancheng 1268'den beri kuşatma altındaydı. İlhanlılardan getirilen karşı ağırlıklı mancınıklar surları dövünce Fancheng düştü ve Xiangyang komutanı Lü Wenhuan teslim oldu. Yangzi vadisinin yolu Yuan ordusuna açıldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cin--ulke 200 (ÇİN) · cengiz-han 200 · mogollar 200 · kubilay-kagan 200 · karahitaylar 200 — maddenin olayı/yılı bu gövdelerde YOK · hitaylar 302 · kitanlar 302 · mengu-kagan 302 · ogedey 302 · cin 200 = CİN (cin/şeytan maddesi, tuzak②, kullanılmadı) · başlık araması tangut/cürçen/kitan/möngke/ögeday: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Morris Rossabi, Khubilai Khan: His Life and Times (California UP, 1988).",
  gun:"1273 baharı (yıl; gün kaynaktan alınmadı)" },

{ t:"1276-01-01", b:"Güney Song başkenti Lin'an Yuan'a teslim oldu", tur:"fetih", onem:5, dunya:2, kapsam:"ic",
  etiket:["fetih","toprak-kayip","toprak-kazanc","konu-askeri"], yer_id:"Hangzhou", yer:"Lin'an (Hangzhou)", taraflar:["song","yuan-hanedani"],
  d:"Bayan komutasındaki Yuan ordusu Yangzi'yi aşıp başkente yaklaşınca imparatoriçe naibe küçük imparator Gong adına teslim oldu; imparator kuzeye götürüldü. Sadık bakanlar iki küçük prensi güneye kaçırarak direnişi kıyıda sürdürdü; son direniş 1279'da Yamen'de bitti.",
  kaynak:"TDV: kubilay-kagan (KUBİLAY KAĞAN) — 'Uzun bir mücadelenin ardından 1276’da Sung hânedanına nihayet verip Çin’in yegâne hâkimi durumuna geldi' · TDV: cin--ulke (ÇİN) — '1279 yılına kadar devam eden Sung hânedanından sonra' (bitiş yılı)", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Açılmayan eski akademik atıf (dayanak DEĞİL): Morris Rossabi, Khubilai Khan: His Life and Times (California UP, 1988).",
  gun:"1276 başı (yıl; gün kaynaktan alınmadı)" },

// ─── KORE: Goryeo ──────────────────────────────────────────────────────

{ t:"1010-01-01", b:"Liao'nun Goryeo'ya ikinci seferi — başkent Kaesong yağmalandı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer_id:"Kaesong", yer:"Kaesong", taraflar:["goryeo","liao-hanedani"],
  d:"Goryeo'daki bir saray darbesini bahane eden Liao İmparatoru Shengzong büyük bir orduyla Goryeo'ya girdi; kral Hyeonjong güneye kaçtı ve başkent Kaesong yakılıp yağmalandı. Liao ordusu geri çekilirken ağır kayıp verdi; savaş kesin sonuç vermedi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Michael J. Seth, A Concise History of Korea (Rowman & Littlefield, 2010) · Twitchett & Tietze, CHC Vol. 6 (1994).",
  gun:"1010 sonu (sefer 1010 sonunda başladı, Kaesong 1011 başında düştü; gün kaynaktan alınmadı)" },

{ t:"1019-01-01", b:"Gwiju Savaşı — Gang Gam-chan Liao ordusunu yok etti", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Ûicu", yer:"Gwiju (Kusong, Kuzey Pyongan)", taraflar:["goryeo","liao-hanedani"],
  d:"Liao'nun üçüncü büyük seferi 1018 sonunda başladı. Geri çekilen Liao ordusu Gwiju'da Gang Gam-chan komutasındaki Goryeo kuvvetlerince kıstırılıp neredeyse tamamen yok edildi. Ardından yapılan barışla Goryeo, Liao'nun üstünlüğünü sembolik olarak tanıdı ama toprağını ve bağımsızlığını korudu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Michael J. Seth, A Concise History of Korea (2010) · Ki-baik Lee, A New History of Korea (Harvard UP, 1984).",
  gun:"1019 başı (yıl; gün kaynaktan alınmadı)" },

{ t:"1044-01-01", b:"Goryeo'nun kuzey sınırındaki 'Bin Li Sur' (Cheolli Jangseong) tamamlandı", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["sinir","konu-askeri","konu-idari"], odak_yer:["Ûicu", "Hamhung"], yer:"Yalu ağzı → Doğu Denizi kıyısı", taraflar:["goryeo"],
  d:"Liao ve Jurchen akınlarına karşı 1033'te başlanan sur, Yalu ağzından doğu kıyısına kadar yarımadanın kuzeyini boydan boya kesti. Sur, Goryeo'nun kuzey sınırını bir yüzyıl boyunca belirledi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (Harvard UP, 1984).",
  gun:"1044 (yıl; inşaat 1033-1044, gün kaynaktan alınmadı)" },

{ t:"1107-01-01", b:"Yun Gwan'ın Jurchen seferi — kuzeydoğuda dokuz kale kuruldu", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","savas","konu-askeri"], odak_yer:"Hamhung", yer:"Hamhung ovası (kuzeydoğu Kore)", taraflar:["goryeo"],
  d:"Goryeo komutanı Yun Gwan, yeni kurduğu Byeolmuban ordusuyla kuzeydoğudaki Jurchen boylarına sefer düzenleyip dokuz kale kurdu. Kaleler Jurchen baskısı ve savunma maliyeti yüzünden 1109'da geri verildi; toprak kazancı kalıcı olmadı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984) · Seth 2010.",
  gun:"1107 (yıl; kaleler 1109'da iade edildi — gün kaynaktan alınmadı)" },

{ t:"1135-01-01", b:"Myocheong'un Pyongyang isyanı", tur:"isyan", onem:2, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-siyasi"], yer_id:"Pyongyang", yer:"Pyongyang (Seogyeong)", taraflar:["goryeo"],
  d:"Başkentin Pyongyang'a taşınmasını ve Jin'e karşı sert bir siyaseti savunan Budist rahip Myocheong, Kaesong aristokrasisinin karşı çıkması üzerine Pyongyang'da ayaklanıp ayrı bir devlet ilan etti. Kim Bu-sik komutasındaki saray ordusu isyanı bir yılı aşkın kuşatmadan sonra bastırdı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984).",
  gun:"1135 (yıl; bastırılış 1136, gün kaynaktan alınmadı)" },

{ t:"1170-01-01", b:"Askerî darbe — Goryeo'da subaylar iktidarı ele geçirdi", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["darbe","konu-siyasi"], yer_id:"Kaesong", yer:"Kaesong", taraflar:["goryeo"],
  d:"Sivil bürokratların aşağılamasına öfkelenen Jeong Jung-bu önderliğindeki subaylar, kral Uijong'un bir gezisi sırasında sivil memurları katletti ve kralı tahttan indirdi. Kral yerinde kaldı ama gerçek iktidar yüz yıl sürecek askerî yönetimlere geçti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984) · Seth 2010.",
  gun:"1170 (yıl; gün kaynaktan alınmadı)" },

{ t:"1196-01-01", b:"Choe Chung-heon iktidarı aldı — Choe askerî diktatörlüğü başladı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["darbe","konu-siyasi"], yer_id:"Kaesong", yer:"Kaesong", taraflar:["goryeo"],
  d:"Askerî yönetim döneminin kanlı iç çekişmelerinden sonra general Choe Chung-heon rakibi Yi Ui-min'i ortadan kaldırdı. Choe ailesi dört kuşak boyunca kralları atayıp azlederek ülkeyi yönetti; bu düzen 1258'e kadar sürdü.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984).",
  gun:"1196 (yıl; gün kaynaktan alınmadı)" },

{ t:"1232-01-01", b:"Goryeo sarayı Moğollara karşı Ganghwa adasına çekildi", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["baskent","konu-askeri","konu-idari"], yer_id:"Ganghwa", yer:"Ganghwa adası", taraflar:["goryeo","mogol-imparatorlugu"],
  d:"1231'deki ilk Moğol istilasından sonra Choe U, sarayı ve başkenti Moğol süvarisinin geçemeyeceği Ganghwa adasına taşıdı. Saray burada otuz yıla yakın direndi; bu sürede anakara art arda gelen Moğol seferleriyle harap oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV kore-cumhuriyeti yalnız istilanın yılını verir ('Koryo Devleti 1231’de Moğol istilâsına mâruz kaldı') — 1232 Ganghwa'ya çekilişi DESTEKLEMEZ. Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee 1984 (taşınma).",
  gun:"1232 (yıl; gün kaynaktan alınmadı)" },

{ t:"1259-01-01", b:"Goryeo Moğollarla barış yaptı — veliaht Moğol sarayına gitti", tur:"diplomasi", onem:3, dunya:1, kapsam:"ic",
  etiket:["antlasma","tabiiyet","konu-diplomasi"], odak_yer:"Ganghwa", yer:"Ganghwa → Moğol sarayı", taraflar:["goryeo","mogol-imparatorlugu"],
  d:"1258'de Choe diktatörlüğünün son temsilcisi öldürülünce saray Moğollarla uzlaşma yolunu seçti. Veliaht (sonraki kral Wonjong) Moğol sarayına gönderildi ve Kubilay ile görüştü; Goryeo krallığını ve hanedanını koruyarak Moğol üstünlüğünü kabul etti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984) · Seth 2010.",
  gun:"1259 (yıl; gün kaynaktan alınmadı)" },

{ t:"1270-01-01", b:"Saray Kaesong'a döndü — Sambyeolcho birlikleri isyan etti", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["isyan","baskent","konu-siyasi","konu-askeri"], yer_id:"Kaesong", yer:"Kaesong · Jindo adası", taraflar:["goryeo"],
  d:"Askerî yönetimin tamamen sona ermesiyle kral Wonjong Moğol isteğine uyup sarayı Ganghwa'dan Kaesong'a geri taşıdı. Askerî rejimin seçkin birlikleri Sambyeolcho buna karşı çıkıp ayrı bir saray kurdu ve önce Jindo, sonra Jeju adasına çekilerek direndi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984).",
  gun:"1270 (yıl; gün kaynaktan alınmadı)" },

{ t:"1273-01-01", b:"Sambyeolcho isyanı Jeju'da Goryeo–Moğol ortak kuvvetlerince bastırıldı", tur:"isyan", onem:2, dunya:1, kapsam:"ic",
  etiket:["isyan","konu-askeri"], yer_id:"Ceccu (Jeju)", yer:"Jeju adası", taraflar:["goryeo","yuan-hanedani"],
  d:"Jindo'nun 1271'de düşmesinden sonra Jeju'ya çekilen Sambyeolcho'nun son direnişi, Goryeo ve Yuan kuvvetlerinin ortak çıkarmasıyla kırıldı. Jeju bir süre doğrudan Moğol idaresine alındı ve Japonya seferinin hazırlık üslerinden biri oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kore-cumhuriyeti 200 (Koryo yalnız kuruluş 936-1392 ve 1231 Moğol istilası) · kore 302. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Ki-baik Lee, A New History of Korea (1984).",
  gun:"1273 (yıl; gün kaynaktan alınmadı)" },

{ t:"1274-01-01", b:"Yuan–Goryeo ortak donanmasının ilk Japonya seferi (Bun'ei) başarısız oldu", tur:"savas", onem:4, dunya:2, kapsam:"ic",
  etiket:["savas","deniz-savasi","konu-askeri"], yer_id:"Hakata (Fukuoka)", yer:"Tsushima · Iki · Hakata körfezi", taraflar:["yuan-hanedani","goryeo"],
  d:"Kubilay'ın elçilerine cevap vermeyen Japonya'ya karşı, gemileri Goryeo'da inşa edilen ortak bir donanma Tsushima ve Iki'yi alıp Hakata körfezine çıktı. Bir günlük çarpışmadan sonra gemilerine dönen kuvvetler fırtınaya yakalanıp ağır kayıpla geri döndü.",
  kaynak:"TDV: kubilay-kagan (KUBİLAY KAĞAN) — 'Kasım 1274’te yaklaşık 900 gemi ve 15.000 askerle başlatılan Japonya’yı istilâ teşebbüsü' · TDV: japonya (JAPONYA) — 'Moğollar 1274 ve 1281 yıllarında Japonya’yı istilâ etmeye çalıştılarsa da bu teşebbüsleri başarısızlıkla sonuçlandı'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Açılmayan eski akademik atıf (dayanak DEĞİL): Rossabi 1988.",
  gun:"Kasım 1274 (TDV kubilay-kagan AY verir; gün yok → YYYY-01-01, ay yazılmadı — CLAUDE.md §8)",
  ic_not_t:"kamakura künye iskeletinde 1274 maddesi var → burada kamakura'ya BAĞLANMADI." },

// ─── JAPONYA: Heian · Ōshū Fujiwara · Kamakura ─────────────────────────

{ t:"1086-01-01", b:"İmparator Shirakawa tahttan çekilip 'emekli imparator' (insei) yönetimini başlattı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Kyoto", yer:"Heian-kyō (Kyoto)", taraflar:["heian-japonya"],
  d:"Shirakawa tahtı küçük oğluna bırakıp manastır sarayından ülkeyi yönetmeye devam etti. Fujiwara naiplerinin gücünü kıran bu 'kapalı saray' (insei) düzeni bir yüzyıl boyunca Japon siyasetinin merkezi oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV japonya insei'yi yalnız örnekle anar ('1129’da İmparator Toba’nın yaptığı gibi bazıları yetkilerini terkederek din adamı oldular.') — 1086'yı vermez. Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): G. Cameron Hurst III, 'Insei', The Cambridge History of Japan Vol. 2 (Cambridge UP, 1999).",
  gun:"1086 (yıl; gün kaynaktan alınmadı)" },

{ t:"1156-01-01", b:"Hōgen Karışıklığı — saray çekişmesinde savaşçı aileler belirleyici oldu", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["ic-savas","konu-siyasi","konu-askeri"], yer_id:"Kyoto", yer:"Heian-kyō (Kyoto)", taraflar:["heian-japonya"],
  d:"Emekli imparator Toba'nın ölümü üzerine eski imparator Sutoku ile imparator Go-Shirakawa arasındaki veraset kavgası silahlı çatışmaya döndü. Taira no Kiyomori ve Minamoto no Yoshitomo'nun desteklediği Go-Shirakawa kazandı; ilk kez başkentteki bir siyasi kriz savaşçı ailelerin kılıcıyla çözüldü.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): The Cambridge History of Japan Vol. 2 (1999) · Vol. 3 (1990).",
  gun:"1156 yazı (yıl; gün kaynaktan alınmadı)" },

{ t:"1159-01-01", b:"Heiji Karışıklığı — Taira, Minamoto'yu saf dışı bıraktı", tur:"isyan", onem:3, dunya:1, kapsam:"ic",
  etiket:["ic-savas","konu-siyasi","konu-askeri"], yer_id:"Kyoto", yer:"Heian-kyō (Kyoto)", taraflar:["heian-japonya"],
  d:"Minamoto no Yoshitomo'nun başkentte giriştiği darbe, Kiyomori'nin dönüşüyle bastırıldı; Yoshitomo öldürüldü, küçük oğulları Yoritomo ve Yoshitsune sürgüne gönderildi. Taira ailesi sarayın tek askerî gücü hâline geldi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): The Cambridge History of Japan Vol. 2 (1999) · Vol. 3 (1990).",
  gun:"1159 sonu – 1160 başı (yıl; gün kaynaktan alınmadı)" },

{ t:"1167-01-01", b:"Taira no Kiyomori büyük devlet bakanı (daijō-daijin) oldu", tur:"siyaset", onem:2, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Kyoto", yer:"Heian-kyō (Kyoto)", taraflar:["heian-japonya"],
  d:"Bir savaşçı ailesinden gelen Kiyomori, sarayın en yüksek sivil makamına yükseldi; ailesi yüksek makamları ve eyaletleri tekeline aldı, kızını imparatorla evlendirdi. Taira'nın saraydaki bu tekeli öteki savaşçı ailelerin ve sarayın muhalefetini doğurdu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): The Cambridge History of Japan Vol. 2 (1999).",
  gun:"1167 (yıl; gün kaynaktan alınmadı)" },

{ t:"1180-01-01", b:"Genpei Savaşı başladı — Minamoto no Yoritomo Taira'ya karşı ayaklandı", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["ic-savas","konu-askeri"], odak_yer:"Kamakura", yer:"Izu · Kamakura (Kantō)", taraflar:["heian-japonya"],
  d:"Prens Mochihito'nun Taira'ya karşı çağrısı üzerine sürgündeki Yoritomo Izu'da ayaklandı ve kısa sürede Kantō savaşçılarını Kamakura'da etrafında topladı. Beş yıl süren savaş 1185'te Taira'nın Dan-no-ura deniz savaşında yok olmasıyla bitti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV japonya yalnız '1192’de Minamoto Yorimoto kendini şogun ilân ettirerek Kamakura’da askerî hükümetini kurdu.' der — 1180'i vermez. Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Jeffrey P. Mass, 'The Kamakura bakufu', The Cambridge History of Japan Vol. 3 (Cambridge UP, 1990).",
  gun:"1180 yazı (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"Dan-no-ura (1185) YAZILMADI: kamakura künye iskeletinin 1185 kuruluş maddesi aynı olayı taşıyor." },

{ t:"1187-01-01", b:"Fujiwara no Hidehira öldü — Hiraizumi, Yoritomo'nun kaçak kardeşi Yoshitsune'yi saklıyordu", tur:"olum", onem:2, dunya:1, kapsam:"ic",
  etiket:["olum","konu-siyasi"], odak_yer:["Morioka", "Sendai"], yer:"Hiraizumi", taraflar:["oshu-fujiwara"],
  d:"Genpei Savaşı'nın kahramanı Minamoto no Yoshitsune, ağabeyi Yoritomo'yla bozuşunca kuzeyde Hidehira'ya sığınmıştı. Hidehira'nın ölümünden sonra oğlu Yasuhira Kamakura'nın baskısına dayanamayıp 1189'da Yoshitsune'yi öldürdü, ama bu Yoritomo'nun Ōshū'ya yürümesini engellemedi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Mimi Hall Yiengpruksawan, Hiraizumi (Harvard UP, 1998) · Mass, CHJ Vol. 3 (1990).",
  gun:"1187 (yıl; gün kaynaktan alınmadı)" },

{ t:"1199-01-01", b:"Minamoto no Yoritomo öldü", tur:"olum", onem:3, dunya:1, kapsam:"ic",
  etiket:["olum","hukumdar","konu-siyasi"], yer_id:"Kamakura", yer:"Kamakura", taraflar:["kamakura"],
  d:"Kamakura şogunluğunun kurucusu Yoritomo'nun ölümünden sonra oğulları yaşça küçük ve etkisizdi; yönetim, eşi Hōjō Masako'nun ailesi Hōjō'nun başını çektiği bir danışma kuruluna geçti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV japonya Yoritomo'nun ölümünü vermez (yalnız 1192 şogunluk). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Jeffrey P. Mass, 'The Kamakura bakufu', The Cambridge History of Japan Vol. 3 (1990).",
  gun:"1199 başı (yıl; gün kaynaktan alınmadı)" },

{ t:"1203-01-01", b:"Hōjō Tokimasa şogunun naibi (shikken) oldu — Hōjō naipliği başladı", tur:"siyaset", onem:3, dunya:1, kapsam:"ic",
  etiket:["siyaset","konu-siyasi"], yer_id:"Kamakura", yer:"Kamakura", taraflar:["kamakura"],
  d:"İkinci şogun Yoriie'yi devirip küçük kardeşi Sanetomo'yu şogun yapan Tokimasa, 'shikken' makamını üstlendi. Bu makam Hōjō ailesinde kalıtsal oldu ve Kamakura'nın gerçek iktidarı 1333'e kadar Hōjō naiplerinde kaldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV japonya naipliği 'Bir asır süren (1233-1333) vasîlik döneminde Tokimasa ailesinden dokuz kişi vasîlik yaptı.' diye verir — madde t:1203 ile ÇELİŞİR (bkz. ic_not_t). 1203'ün dayanağı CHJ'ydi ve AÇILMADI. Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Mass, CHJ Vol. 3 (1990).",
  gun:"1203 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"⚠️ İKİ OKUMA: madde 1203 'Hōjō naipliği başladı' diyor; TDV japonya naipliği 1233'te başlatıyor ('Bir asır süren (1233-1333) vasîlik döneminde Tokimasa ailesinden dokuz kişi vasîlik yaptı.'). Maddenin yılının dayanağı açılmamış kitap (Mass, CHJ 3) ⇒ şu an DAYANAKSIZ. İki okuma da kayıtta; hüküm kaynak açılınca verilecek. [KAYNAK-DOGRULA-DOGUASYA 01.10.2026 (koordinatör hükmü: t KALIR)]" },

{ t:"1221-01-01", b:"Jōkyū Savaşı — emekli imparator Go-Toba'nın Kamakura'ya karşı ayaklanması bastırıldı", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["ic-savas","konu-askeri","konu-siyasi"], yer_id:"Kyoto", yer:"Kyoto", taraflar:["kamakura"],
  d:"Go-Toba, şogun Sanetomo'nun öldürülmesinden doğan boşluktan yararlanıp Hōjō naibine karşı savaşçıları silaha çağırdı. Kamakura ordusu birkaç hafta içinde Kyoto'yu aldı; üç emekli imparator sürgüne gönderildi, isyancıların toprakları Kamakura'ya bağlı savaşçılara dağıtıldı ve Kyoto'ya kalıcı bir Kamakura temsilciliği (Rokuhara) kondu.",
  kaynak:"TDV: japonya (JAPONYA) — 'Kyoto’da oturan imparator ailesiyle Kamakura’daki hükümet arasında 1221’de çıkan kavga sonunda hükümet Hojo hâkimlerinin eline geçti'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Açılmayan eski akademik atıf (dayanak DEĞİL): Mass, CHJ Vol. 3 (1990).",
  gun:"1221 yazı (TDV yıl verir; gün kaynaktan alınmadı)" },

{ t:"1232-01-01", b:"Goseibai Shikimoku (Jōei Kanunnamesi) ilan edildi", tur:"kanun", onem:3, dunya:1, kapsam:"ic",
  etiket:["kanun","konu-idari"], yer_id:"Kamakura", yer:"Kamakura", taraflar:["kamakura"],
  d:"Naip Hōjō Yasutoki, savaşçı sınıfın toprak ve miras anlaşmazlıklarını çözmek için 51 maddelik bir kanunname çıkardı. Savaşçılar için yazılan ilk kanun olan Shikimoku, sonraki yüzyıllarda da temel başvuru metni olarak kaldı.",
  kaynak:"TDV: japonya (JAPONYA) — '1232’de Joei Shimikou adıyla yeni bir kanun ilân edildi'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Açılmayan eski akademik atıf (dayanak DEĞİL): Mass, CHJ Vol. 3 (1990).",
  gun:"1232 (TDV yıl verir; gün kaynaktan alınmadı)" },

{ t:"1268-01-01", b:"Kubilay'ın ilk mektubu Japonya'ya ulaştı — Hōjō Tokimune naip oldu", tur:"diplomasi", onem:3, dunya:1, kapsam:"ic",
  etiket:["diplomasi","konu-diplomasi"], odak_yer:"Hakata", yer:"Dazaifu · Kamakura", taraflar:["kamakura"],
  d:"Goryeo aracılığıyla gönderilen Moğol mektubu Japonya'dan tâbiiyet ve ilişki kurmasını istiyordu. Kamakura cevap vermemeye karar verdi ve aynı yıl genç Hōjō Tokimune naipliğe getirildi; Kyushu kıyıları savunmaya hazırlandı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV japonya 200 (Heian/Kamakura özeti yalnız 794-1185, 1192, 1221, 1232, 1233-1333, 1274/1281 verir). Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Mass, CHJ Vol. 3 (1990) · Rossabi 1988.",
  gun:"1268 (yıl; gün kaynaktan alınmadı)" },

// ─── VİETNAM · CHAMPA · KMER ───────────────────────────────────────────

{ t:"981-01-01", b:"Bạch Đằng — Lê Hoàn, Song istilasını püskürttü", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], odak_yer:"Hai Phong", yer:"Bạch Đằng nehri · Chi Lăng", taraflar:["tien-le-hanedani","song"],
  d:"Đinh hanedanının karışıklığından yararlanmak isteyen Song, kara ve deniz yoluyla istilaya geçti. Tahta yeni çıkan Lê Hoàn istilacı orduları nehir ve geçitlerde yendi; Song komutanı öldürüldü. Lê Hoàn ardından Song'la haraç ilişkisini yeniden kurarak bağımsızlığı fiilen tanıttı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV camlar 200 (Viet-Çam ilişkisi yalnız yüzyıl düzeyinde) · vietnam 302 · başlık araması 'vietnam' → yalnız ÇAMLAR. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (Cambridge UP, 2013).",
  gun:"981 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"Kuşak altında (981 < 1000) ama künyenin başlıca toprak/savaş olayı; ORTAK §5 'mutlaka olması gerekenler' için alındı." },

{ t:"1005-01-01", b:"Lê Hoàn öldü — veraset kavgasından Lê Long Đĩnh galip çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], odak_yer:"Ninh Binh", yer:"Hoa Lư", taraflar:["tien-le-hanedani"],
  d:"Lê Hoàn'ın ölümünden sonra oğulları arasında aylarca süren taht kavgası çıktı; sonunda Lê Long Đĩnh kardeşini öldürüp tahta geçti. Kısa ve sert saltanatı 1009'daki ölümüyle bitince saray, muhafız komutanı Lý Công Uẩn'u tahta çıkardı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV camlar 200 (Viet-Çam ilişkisi yalnız yüzyıl düzeyinde) · vietnam 302 · başlık araması 'vietnam' → yalnız ÇAMLAR. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (2013).",
  gun:"1005 (yıl; gün kaynaktan alınmadı)" },

{ t:"1010-01-01", b:"Başkent Hoa Lư'dan Thăng Long'a (Hanoi) taşındı", tur:"idari", onem:3, dunya:1, kapsam:"ic",
  etiket:["baskent","konu-idari"], yer_id:"Hanoi (Thăng Long)", yer:"Thăng Long (Hanoi)", taraflar:["ly-hanedani"],
  d:"Lý Thái Tổ, dağlarla çevrili Hoa Lư'yu bırakıp Kızıl Irmak deltasının merkezindeki eski Çin valilik merkezi Đại La'ya yerleşti ve şehre 'Yükselen Ejderha' anlamında Thăng Long adını verdi. Şehir sonraki sekiz yüzyıl boyunca Vietnam'ın başkenti kaldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV camlar 200 (Viet-Çam ilişkisi yalnız yüzyıl düzeyinde) · vietnam 302 · başlık araması 'vietnam' → yalnız ÇAMLAR. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (2013).",
  gun:"1010 (yıl; gün kaynaktan alınmadı)" },

{ t:"1044-01-01", b:"Lý Thái Tông, Champa başkenti Vijaya'yı yağmaladı", tur:"savas", onem:3, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer_id:"Vijaya (Quy Nhơn)", yer:"Vijaya (Bình Định)", taraflar:["ly-hanedani","campa"],
  d:"Champa'nın sınır akınlarına karşılık Lý Thái Tông deniz yoluyla güneye sefer düzenledi. Cham kralı savaşta öldürüldü, başkent Vijaya alınıp yağmalandı ve binlerce esir kuzeye götürüldü; Đại Việt ile Champa arasındaki yüzyıllık savaşların ilk büyük darbesi buydu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV camlar yalnız yüzyıl düzeyi: 'XI. yüzyılda Çampa kuzeydeki topraklarının çoğunu Annam’a kaptırdı' — yıl vermez. Denenen: TDV camlar 200 (Viet-Çam ilişkisi yalnız yüzyıl düzeyinde) · vietnam 302 · başlık araması 'vietnam' → yalnız ÇAMLAR. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (2013) · Coedès 1968.",
  gun:"1044 (yıl; gün kaynaktan alınmadı)" },

{ t:"1069-01-01", b:"Champa kralı III. Rudravarman esir düştü — üç kuzey vilayet Đại Việt'e bırakıldı", tur:"toprak-kazanc", onem:4, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","toprak-kayip","savas","konu-askeri"], odak_yer:"Quang Tri", yer:"Bố Chính · Địa Lý · Ma Linh (Quảng Bình – Quảng Trị)", taraflar:["ly-hanedani","campa"],
  d:"Lý Thánh Tông ve komutanı Lý Thường Kiệt'in seferinde Vijaya yeniden düştü ve Cham kralı III. Rudravarman esir alındı. Kral serbest bırakılması karşılığında bugünkü Quảng Bình ve Quảng Trị'yi kapsayan üç vilayeti Đại Việt'e bıraktı. Bu, Vietnamlıların güneye yürüyüşünde (Nam tiến) ilk kalıcı toprak kazancıdır.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV camlar yalnız yüzyıl düzeyi: 'XI. yüzyılda Çampa kuzeydeki topraklarının çoğunu Annam’a kaptırdı' — 1069'u vermez. Denenen: TDV camlar 200 (Viet-Çam ilişkisi yalnız yüzyıl düzeyinde) · vietnam 302 · başlık araması 'vietnam' → yalnız ÇAMLAR. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): K. W. Taylor, A History of the Vietnamese (2013) · Coedès 1968.",
  gun:"1069 (yıl; gün kaynaktan alınmadı)" },

{ t:"1010-01-01", b:"I. Suryavarman Angkor'da tek hükümdar olarak hâkimiyetini kesinleştirdi", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Angkor (Siem Reap)", yer:"Angkor (Yasodharapura)", taraflar:["angkor-kmer"],
  d:"Kmer tahtı için 1000'lerin başında süren çekişmeden I. Suryavarman galip çıktı. Saltanatında imparatorluk batıda Menam havzasına (Lavo) kadar genişledi ve kraliyet memurlarının sadakat yemini yazıtlara geçirildi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kambocya 200 (Angkor yalnız IX-XV. yy düzeyinde) · camlar 200 · başlık araması angkor/kmer: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): George Coedès, The Indianized States of Southeast Asia (1968) · David Chandler, A History of Cambodia (2008).",
  gun:"1010 (yıl; hükümdar kendi saltanatını 1002'den sayar, rakibini 1010 dolayında yendi — gün kaynaktan alınmadı)" },

{ t:"1113-01-01", b:"II. Suryavarman tahta çıktı — Angkor Wat'ın kurucusu", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Angkor (Siem Reap)", yer:"Angkor", taraflar:["angkor-kmer"],
  d:"II. Suryavarman ülkeyi yeniden birleştirip Đại Việt ve Champa'ya seferler düzenledi, Çin'le ilişki kurdu. Vişnu'ya adadığı Angkor Wat tapınağı onun döneminde inşa edildi.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV kambocya 200 (Angkor yalnız IX-XV. yy düzeyinde) · camlar 200 · başlık araması angkor/kmer: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Coedès 1968 · Chandler 2008.",
  gun:"1113 (yıl; gün kaynaktan alınmadı)" },

{ t:"1145-01-01", b:"Kmer ordusu Champa başkenti Vijaya'yı aldı", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","toprak-kayip","fetih","konu-askeri"], yer_id:"Vijaya (Quy Nhơn)", yer:"Vijaya (Bình Định)", taraflar:["angkor-kmer","campa"],
  d:"II. Suryavarman Champa'yı istila edip Vijaya'yı aldı ve kuzey Champa'yı kendi atadığı bir prense bıraktı. Cham direnişi Jaya Harivarman I önderliğinde birkaç yıl içinde Kmer'i geri püskürttü.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). ⚠️ TDV camlar bu maddeyle ÇELİŞİR: 'Suryavarman, Vijaya’yı işgal ederek Çampa’nın kuzey topraklarını 1145 yılına kadar hâkimiyeti altında tuttu.' 1145'i işgalin SONU yapar; madde 1145'i ALINIŞ yapar. Alınış yılının dayanağı Coedès'ti ve AÇILMADI ⇒ t:1145 şu an dayanaksız. t değiştirilmedi — hüküm koordinatörde. Denenen: TDV kambocya 200 (Angkor yalnız IX-XV. yy düzeyinde) · camlar 200 · başlık araması angkor/kmer: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Coedès 1968.",
  gun:"1145 (yıl; Cham'ın kurtuluşu 1149 — gün kaynaktan alınmadı)",
  ic_not_t:"⚠️ İKİ OKUMA: madde 1145 'alınış' diyor; TDV camlar aynı yılı işgalin SONU olarak veriyor ('Suryavarman, Vijaya’yı işgal ederek Çampa’nın kuzey topraklarını 1145 yılına kadar hâkimiyeti altında tuttu.'). Maddenin yılının dayanağı açılmamış kitap (Coedès 1968) ⇒ şu an DAYANAKSIZ. İki okuma da kayıtta; hüküm kaynak açılınca verilecek. [KAYNAK-DOGRULA-DOGUASYA 01.10.2026 (koordinatör hükmü: t KALIR)]" },

{ t:"1177-01-01", b:"Cham donanması Tonle Sap'tan çıkıp Angkor'u yağmaladı", tur:"savas", onem:4, dunya:1, kapsam:"ic",
  etiket:["savas","konu-askeri"], yer_id:"Angkor (Siem Reap)", yer:"Angkor (Yasodharapura)", taraflar:["campa","angkor-kmer"],
  d:"Cham kralı IV. Jaya Indravarman, Mekong'dan yukarı çıkıp Tonle Sap gölünü geçen bir donanmayla Kmer başkentine baskın düzenledi; şehir yağmalandı ve Kmer kralı öldürüldü. Bu yenilgi, ülkeyi dört yıl içinde kurtaracak olan VII. Jayavarman'ın yükselişini hazırladı.",
  kaynak:"TDV: camlar (ÇAMLAR) — 'Çamlar’ın 1178’de Kimerler’in başşehri Angkor’u yağmalaması'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). ⚠️ YIL ÇELİŞKİSİ SÜRÜYOR: açılan tek kaynak TDV 1178 der, madde t:1177. 1177'nin dayanağı Coedès/Chandler'dı ve AÇILMADI ⇒ 1177 şu an dayanaksız. t değiştirilmedi — hüküm koordinatörde. Açılmayan eski akademik atıf (dayanak DEĞİL): Coedès 1968 · Chandler 2008.",
  gun:"1177 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"⚠️ İKİ OKUMA: madde 1177 diyor; TDV camlar yağmayı 1178'e koyuyor ('Çamlar’ın 1178’de Kimerler’in başşehri Angkor’u yağmalaması'). Maddenin yılının dayanağı açılmamış kitap (Coedès 1968 · Chandler 2008) ⇒ şu an DAYANAKSIZ. İki okuma da kayıtta; hüküm kaynak açılınca verilecek. [KAYNAK-DOGRULA-DOGUASYA 01.10.2026 (koordinatör hükmü: t KALIR)]" },

{ t:"1190-01-01", b:"VII. Jayavarman Vijaya'yı aldı — Champa ikiye bölündü", tur:"toprak-kazanc", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","toprak-kayip","fetih","konu-askeri"], yer_id:"Vijaya (Quy Nhơn)", yer:"Vijaya", taraflar:["angkor-kmer","campa"],
  d:"VII. Jayavarman Champa'ya karşı karşı saldırıya geçip Vijaya'yı aldı; ülke, biri Kmer sarayında yetişmiş bir prensin yönettiği iki parçaya bölündü. Cham tahtı üzerindeki Kmer denetimi sonraki otuz yıl boyunca sürdü.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV camlar VII. Jayavarman saldırılarını yalnız 'XII. yüzyılın sonlarından itibaren' diye verir — 1190'ı vermez. Denenen: TDV kambocya 200 (Angkor yalnız IX-XV. yy düzeyinde) · camlar 200 · başlık araması angkor/kmer: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Coedès 1968.",
  gun:"1190 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"angkor-kmer iskeletindeki 1181 (VII. Jayavarman'ın tahta çıkışı) burada tekrarlanmadı." },

{ t:"1203-01-01", b:"Champa doğrudan Kmer yönetimine alındı", tur:"isgal", onem:3, dunya:1, kapsam:"ic",
  etiket:["isgal","toprak-kayip","toprak-kazanc","konu-askeri"], yer_id:"Vijaya (Quy Nhơn)", yer:"Champa (Vijaya)", taraflar:["angkor-kmer","campa"],
  d:"VII. Jayavarman'ın ordusu Cham kralını tahttan indirdi ve Champa, bir Kmer valisinin yönetiminde imparatorluğun eyaleti hâline geldi. Bu dönem Kmer İmparatorluğu'nun en geniş sınırlarına ulaştığı dönemdir.",
  kaynak:"TDV: camlar (ÇAMLAR) — '1203-1220 yıllarında Çampa yine Kimer egemenliği altında kaldı.'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Açılmayan eski akademik atıf (dayanak DEĞİL): Coedès 1968.",
  gun:"1203 (yıl; gün kaynaktan alınmadı)" },

{ t:"1220-01-01", b:"Kmer Champa'dan çekildi — Cham krallığı bağımsızlığını geri aldı", tur:"toprak-kayip", onem:3, dunya:1, kapsam:"ic",
  etiket:["toprak-kayip","toprak-kazanc","konu-siyasi"], yer_id:"Vijaya (Quy Nhơn)", yer:"Champa (Vijaya)", taraflar:["angkor-kmer","campa"],
  d:"VII. Jayavarman'ın ölümünden sonra Kmer, Champa'daki işgalini sürdüremedi ve çekildi; tahta Cham soyundan II. Jaya Parameshvaravarman geçti. Bu çekiliş Kmer'in dış yayılmasının sonunu işaret eder.",
  kaynak:"TDV: camlar (ÇAMLAR) — '1203-1220 yıllarında Çampa yine Kimer egemenliği altında kaldı.'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Çekilme yılı TDV'deki dönemin bitiş ucundan (1220). Açılmayan eski akademik atıf (dayanak DEĞİL): Coedès 1968.",
  gun:"1220 (yıl; gün kaynaktan alınmadı)" },

// ─── BİRMANYA · TAYLAND ────────────────────────────────────────────────

{ t:"1044-01-01", b:"Anawrahta Pagan tahtına çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Pagan", yer:"Pagan (Bagan)", taraflar:["pagan"],
  d:"Anawrahta'nın tahta çıkışı Pagan'ın bir şehir-devletinden Birmanya'yı birleştiren bir krallığa dönüşmesinin başlangıcıdır. Sulu tarım bölgelerini örgütledi, Thaton seferiyle (1057, künyede) güneye yayıldı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV myanmar yalnız 1057 Thaton fethini verir ('1057 yılında Kral Anawratha’nın (Anoratha) komşu Monlar’ın başşehri Thaton’u alarak') — 1044 tahta çıkışı DESTEKLEMEZ. Denenen: TDV myanmar 200 (Pagan: IX. yy kuruluş, 1057 Thaton, 1287 yıkılış) · başlık araması pagan: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Michael Aung-Thwin, Pagan: The Origins of Modern Burma (Hawaii UP, 1985) (1044).",
  gun:"1044 (yıl; gün kaynaktan alınmadı)" },

{ t:"1084-01-01", b:"Kyansittha Pagan tahtına çıktı", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Pagan", yer:"Pagan (Bagan)", taraflar:["pagan"],
  d:"Anawrahta'nın oğlu Sawlu'nun Mon isyanında öldürülmesinden sonra komutan Kyansittha isyanı bastırıp tahta çıktı. Burma ve Mon unsurlarını uzlaştıran saltanatında Ananda tapınağı inşa edildi ve Pagan'ın iç birliği pekişti.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV myanmar 200 (Pagan: IX. yy kuruluş, 1057 Thaton, 1287 yıkılış) · başlık araması pagan: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Michael Aung-Thwin, Pagan: The Origins of Modern Burma (1985).",
  gun:"1084 (yıl; gün kaynaktan alınmadı)" },

{ t:"1256-01-01", b:"Narathihapate Pagan tahtına çıktı — son büyük kral", tur:"hukumdar", onem:2, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Pagan", yer:"Pagan (Bagan)", taraflar:["pagan"],
  d:"Tapınak bağışları yüzünden gelir kaybeden bir krallığı devralan Narathihapate'nin saltanatında Pagan, Kubilay'ın haraç talebini reddetti. Bu ret 1277 Ngasaunggyan savaşına ve 1287 Moğol istilasına (ikisi de künyede) giden yolu açtı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV myanmar 200 (Pagan: IX. yy kuruluş, 1057 Thaton, 1287 yıkılış) · başlık araması pagan: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Michael Aung-Thwin, Pagan: The Origins of Modern Burma (1985).",
  gun:"1256 (yıl; gün kaynaktan alınmadı)" },

{ t:"1275-01-01", b:"Ramkhamhaeng Sukhothai tahtına çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], yer_id:"Sukhothai", yer:"Sukhothai", taraflar:["sukhothai"],
  d:"Ramkhamhaeng'in saltanatında Sukhothai, çevredeki Tai beyliklerini tâbi kılarak güneyde Malay yarımadasına, batıda Mon bölgesine uzanan bir etki alanı kurdu; idarî ve hukukî düzenlemeler yaptı.",
  kaynak:"TDV: tayland (TAYLAND) — 'Kral Rama Khamheng döneminde (1275-1317) Sukothai Krallığı idarî, hukukî ve içtimaî alanda önemli yapılanmalar gerçekleştirdi'", ic_not_kaynak:"① TDV'de VAR — alıntılar gövdeden birebir doğrulandı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Wyatt 2003 ('1279 dolayı') AÇILMADI; t:1275 TDV ile uyumlu. Açılmayan eski akademik atıf (dayanak DEĞİL): Wyatt 2003 (saltanat başı 1279 dolayı der).",
  gun:"1275 (TDV'nin verdiği saltanat başı; gün yok)",
  ic_not_t:"⚠️ KAYNAK ÇELİŞKİSİ: TDV 1275, Wyatt 1279 dolayı. Tayland TDV'nin birincil olduğu coğrafya DEĞİL ama TDV açıkça yıl verdiği için ona uyuldu; koordinatör 1279'u seçerse t değişir." },

// ─── CAVA · SUMATRA · BALİ · FİLİPİN ───────────────────────────────────

{ t:"1003-01-01", b:"Srivicaya kralı Cūlāmaṇivarmadeva Song sarayına elçi gönderdi", tur:"diplomasi", onem:2, dunya:1, kapsam:"ic",
  etiket:["diplomasi","konu-diplomasi"], yer_id:"Palembang", yer:"Palembang → Kaifeng", taraflar:["srivijaya"],
  d:"Srivicaya, Cava'daki Medang'la süren savaştan çıkarken Song sarayıyla ilişkisini güçlendirdi; elçiler imparator adına yaptırılan bir Budist tapınağı için unvan ve çan istedi. Aynı kral Hindistan'daki Nagapattinam'da bir Budist manastırının inşasını da başlattı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV sumatra 200 (Srivijaya yalnız 'VII. yüzyıldan XIV. yüzyıla kadar' genel) · endonezya 200 · başlık araması sriv: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): George Coedès, The Indianized States of Southeast Asia (1968).",
  gun:"1003 (yıl; gün kaynaktan alınmadı)" },

{ t:"1030-01-01", b:"Sanghyang Tapak yazıtı — Sunda kralı Jayabupati belgelendi", tur:"hukumdar", onem:1, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], odak_yer:"Batavia", yer:"Cibadak (Sukabumi, Batı Cava)", taraflar:["sunda-pajajaran"],
  d:"Batı Cava'da bulunan dört taştan oluşan yazıt, Sunda kralı Sri Jayabupati'nin bir nehir kesimini kutsal alan ilan ettiğini kaydeder. Sunda krallığının 11. yüzyılda varlığını gösteren başlıca tarihli belgedir.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cava 200 (XII-XIII. yy yalnız Srivijaya/Kediri genel) · endonezya 200 (Singasari yalnız XVI. yy İslâmlaşma bağlamında) · sumatra 200. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): George Coedès, The Indianized States of Southeast Asia (1968).",
  gun:"1030 (yazıtın Saka yılından; gün kaynaktan alınmadı)",
  ic_not_t:"sunda-pajajaran künyesinin iskeletinde 1482 öncesi madde YOK; künyenin f:669 ile ilk maddesi arasında 800 yıl boş." },

{ t:"1037-01-01", b:"Airlangga Doğu Cava'yı yeniden birleştirdi", tur:"toprak-kazanc", onem:2, dunya:1, kapsam:"ic",
  etiket:["toprak-kazanc","konu-askeri"], odak_yer:"Surabaya", yer:"Kahuripan (Doğu Cava)", taraflar:["kahuripan"],
  d:"Pralaya'dan sonra küçük bir bölgede tahta çıkan Airlangga, 1030'larda Wurawari'yi ve öteki yerel güçleri yenerek Doğu Cava'yı yeniden tek yönetim altında topladı ve sarayını Kahuripan'a kurdu. Srivicaya'nın 1025 Çola darbesiyle zayıflaması ona deniz ticaretinde de alan açtı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cava 200 (XII-XIII. yy yalnız Srivijaya/Kediri genel) · endonezya 200 (Singasari yalnız XVI. yy İslâmlaşma bağlamında) · sumatra 200. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): George Coedès, The Indianized States of Southeast Asia (1968).",
  gun:"1037 (yıl; gün kaynaktan alınmadı)" },

{ t:"1268-01-01", b:"Kertanagara Singhasari tahtına çıktı", tur:"hukumdar", onem:3, dunya:1, kapsam:"ic",
  etiket:["hukumdar","konu-siyasi"], odak_yer:"Malang", yer:"Singhasari (Tumapel)", taraflar:["singhasari"],
  d:"Kertanagara, Cava'yı takımadaların merkezî gücü yapma hedefiyle Pamalayu (1275) ve Bali (1284) seferlerini düzenleyen, Kubilay'ın elçisini aşağılayan hükümdardır. 1292'deki ölümüyle krallık yıkıldı (ikisi de künyede).",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV cava 200 (XII-XIII. yy yalnız Srivijaya/Kediri genel) · endonezya 200 (Singasari yalnız XVI. yy İslâmlaşma bağlamında) · sumatra 200. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): George Coedès, The Indianized States of Southeast Asia (1968).",
  gun:"1268 (yıl; gün kaynaktan alınmadı)" },

// ─── TİBET: Guge · Sakya ───────────────────────────────────────────────

{ t:"1076-01-01", b:"Tholing konsili — Guge'de Budist keşişlerin büyük toplantısı", tur:"din", onem:1, dunya:1, kapsam:"ic",
  etiket:["din","konu-din"], odak_yer:"Leh", yer:"Tholing (Ngari)", taraflar:["guge"],
  d:"Guge kralının davetiyle Tibet'in dört bir yanından gelen keşişler Tholing'de toplandı. Konsil, Atisha'nın gelişiyle başlayan Budist canlanmanın ('ikinci yayılış') kurumsallaşmasını simgeler.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). TDV tibet: 'XI. yüzyılın ortalarında meşhur Hintli rahip Atisa’nın Tibet’e davet edilmesinin ardından Budizm tekrar canlanmaya başladı ve çeşitli mezhepler ortaya çıktı.' — 1076 Tholing konsilini vermez. Denenen: TDV tibet 200 (yıl yok: XI. yy ortası Atisa, XIII. yy ikinci yarısı Moğol nüfuzu) · budizm 200 · kubilay-kagan 200 · mogollar 200 · başlık araması dalay: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Matthew T. Kapstein, The Tibetans (Blackwell, 2006).",
  gun:"1076 (yıl; gün kaynaktan alınmadı)" },

{ t:"1247-01-01", b:"Sakya Pandita, Moğol prensi Köten'le Liangzhou'da görüştü", tur:"diplomasi", onem:3, dunya:2, kapsam:"ic",
  etiket:["diplomasi","tabiiyet","konu-diplomasi","konu-din"], odak_yer:"Lanzhou", yer:"Liangzhou (Wuwei, Gansu)", taraflar:["mogol-imparatorlugu"],
  d:"Moğol akınları karşısında Tibet'in önde gelen din adamı Sakya Pandita, Ögedey'in oğlu Köten'in çağrısına uyup Liangzhou'ya gitti. Görüşmede Tibet'in Moğol üstünlüğünü tanıması karşılığında Sakya tarikatının Moğollar adına aracı olması kararlaştırıldı; bu, sonraki Sakya-Yuan düzeninin temelidir.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV tibet 200 (yıl yok: XI. yy ortası Atisa, XIII. yy ikinci yarısı Moğol nüfuzu) · budizm 200 · kubilay-kagan 200 · mogollar 200 · başlık araması dalay: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Luciano Petech, Central Tibet and the Mongols (IsMEO, 1990) · Kapstein 2006.",
  gun:"1247 (yıl; gün kaynaktan alınmadı)",
  ic_not_t:"sakya künyesi (öneri) f:1264 — olay künyeden önce olduğu için yalnız mogol-imparatorlugu'na bağlandı; M-5562 listesinde YOKTU — ONCE1281-IRAN-TURKISTAN aynı olayı yazarsa mükerrer olur, teslimde bildirildi." },

{ t:"1268-01-01", b:"Moğol-Sakya idaresi Orta Tibet'te nüfus sayımı yaptı", tur:"idari", onem:2, dunya:1, kapsam:"ic",
  etiket:["idari","konu-idari"], odak_yer:"Lhasa", yer:"Orta Tibet (Ü-Tsang)", taraflar:["sakya"],
  d:"Kubilay'ın temsilcileri Sakya'nın desteğiyle Orta Tibet'te hane sayımı yaparak bölgeyi on üç 'myriarchy' (tümen) birimine böldü. Bu idari düzen Sakya'nın Yuan adına Tibet'i yönetmesinin çerçevesi oldu.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV tibet 200 (yıl yok: XI. yy ortası Atisa, XIII. yy ikinci yarısı Moğol nüfuzu) · budizm 200 · kubilay-kagan 200 · mogollar 200 · başlık araması dalay: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Luciano Petech, Central Tibet and the Mongols (1990).",
  gun:"1268 (yıl; gün kaynaktan alınmadı)" },

{ t:"1280-01-01", b:"Phagpa Lama öldü", tur:"olum", onem:2, dunya:1, kapsam:"ic",
  etiket:["olum","konu-din","konu-siyasi"], odak_yer:"Lhasa", yer:"Sakya", taraflar:["sakya"],
  d:"Kubilay'ın imparatorluk hocası ve Moğol dilleri için kendi adıyla anılan yazıyı (Phagpa yazısı) geliştiren Phagpa, Sakya'da öldü. Ölümünden sonra Tibet'teki Sakya yönetimi giderek Yuan'ın atadığı sivil yöneticilere (dpon-chen) dayandı.",
  kaynak:"bulunamadı", ic_not_kaynak:"③ dayanak açılmadı (KAYNAK-DOGRULA-DOGUASYA 01.10.2026). Denenen: TDV tibet 200 (yıl yok: XI. yy ortası Atisa, XIII. yy ikinci yarısı Moğol nüfuzu) · budizm 200 · kubilay-kagan 200 · mogollar 200 · başlık araması dalay: 0 sonuç. Açılmayan eski atıf (kitap sayfası açılmadı, dayanak DEĞİL): Luciano Petech, Central Tibet and the Mongols (1990) · Rossabi 1988.",
  gun:"1280 (yıl; gün kaynaktan alınmadı)" }

];

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

window.EKOKUMA_TARTISMA = [

{ id:"istanbul-rasathanesi-yiktirilmasi-tartisma", tur:"tartisma",
  kisa:"Osmanlı'nın tek gözlemevi sekiz yıl sonra neden yıkıldı — dinî bir hüküm mü, saray içi bir hesaplaşma mı?",
  sebep:{ b:"Takıyyüddin er-Râsıd'ın, Tophane sırtlarında dönemin en donanımlı gözlemevlerinden birini kurması", t:"1577-01-01" },
  sonuc:{ b:"4 Zilhicce 987 (22 Ocak 1580) tarihli bir hatt-ı hümâyunla rasathanenin, içindeki bütün aletleriyle birlikte yıktırılması", t:"1580-01-22" },
  bag:"Resmî gerekçe Şeyhülislâm Kadızâde Ahmed Şemseddin Efendi'nin fetvasıydı: \"rasathaneler bulundukları ülkeleri felâkete sürükler.\" Ama TDV'nin kendi maddesi bunu tek başına yeterli görmüyor — olayı aynı zamanda Takıyyüddin'in saraydaki siyasî bağlantılarına ve rakiplerinin yürüttüğü bir yıpratma kampanyasına bağlıyor. Yani iki okuma bir arada duruyor: dinî hüküm bir ARAÇ mıydı, yoksa asıl sebebin kendisi miydi? TDV ikisini de anıp kesin bir taraf seçmiyor, ben de seçmiyorum.",
  metin:"Rasathane, Takıyyüddin'in 1577'de kurduğu ve zamanının en gelişmiş gözlem aletlerini barındıran bir kurumdu; TDV onu Osmanlı tarihindeki tek resmî gözlemevi ve Türk bilim tarihi için büyük önem taşıyan bir tesis olarak niteliyor. Yıkımdan sonra imparatorlukta resmî bir rasathane kurumu uzun süre yeniden tesis edilmedi. Bu, dönemi Tycho Brahe'nin Avrupa'daki çağdaş gözlemeviyle karşılaştıran tarihçiler için somut bir kayıp örneğidir — ama aynı olay, din ile devlet erki arasındaki ilişkinin 16. yüzyıl Osmanlı sarayında ne kadar iç içe geçtiğinin de bir örneğidir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1577-01-01","1580-01-22"],
  kaynak:"TDV: takiyyuddin-er-rasid" },

{ id:"ingiltere-kapitulasyon-1580-tartisma", tur:"tartisma",
  kisa:"İngiltere'ye verilen bu imtiyaz bir hoşgörü jesti miydi, yoksa hesaplı bir dış politika hamlesi mi?",
  sebep:{ b:"Elizabeth'in İstanbul'a gönderdiği William Harborne'un, Sokullu Mehmed Paşa ve Hoca Sâdeddin Efendi'nin desteğiyle, İngiliz tüccarlara Fransız ve Venedikliler'e tanınanla eşit ticarî imtiyaz için yürüttüğü müzakereler", t:"1578-01-01" },
  sonuc:{ b:"İngiliz tüccarlara ahidnâmeyle kapitülasyon tanınması ve ertesi yıl bu imtiyazı işletecek tekelci Levant Company'nin kurulması", t:"1581-09-11" },
  bag:"Asıl tartışma iki okuma arasında: ERKEN DÖNEM yorumu bu tür imtiyazları İslâm hukukunun eman/ahid geleneğinin bir uzantısı, karşılıklı ticarî çıkara dayanan bir \"hoşgörü politikası\" olarak okur — nitekim İngiltere'nin payına düşen de Fransa'ya zaten 1569'da verilmiş olanın bir tekrarıydı, yeni bir ilke değil. GEÇ DÖNEM eleştirisi ise TDV'nin kendi ifadesiyle bu imtiyazların (yargı muafiyeti dahil) zamanla \"Osmanlı Devleti'ni siyasî ve iktisadî bakımdan Batı Avrupa'ya bağımlı hale getirdiğini\" vurgular. İngiltere'nin 1580 payı tek başına bu sonucu doğurmadı — bunun geniş mekanizması (Ceneviz'den 1914'e) ayrı bir kartta (`data/ekokuma_ekonomi.js`) işleniyor; burada yalnız bu TEK imtiyazın kendi bağlamı ve iki okuması var.",
  metin:"Kapitülasyon, Osmanlı'nın kendi ülkesinde güvenle ticaret yapabilmeleri için hıristiyan devletlere tanıdığı bir imtiyazdı; hukukî temeli ahidnâme adı verilen padişah belgesiydi. İngiltere'nin payına düşen imtiyaz salt bir ticaret meselesi değildi: 1578'de İstanbul'a gönderilen Harborne'un arkasında, Katolik İspanya'ya karşı Protestan İngiltere ile ortak çıkar arayan bir Osmanlı hesabı da vardı. Kısa vadeli sonucu somuttu — Levant Company Osmanlı topraklarındaki İngiliz ticaretini 1825'e kadar tek elde topladı ve iki ülke arasında kalıcı bir diplomatik ağ kurdu. Ahidnâmelerin kendisi de zamanla değişti: TDV'nin 'ahidname' maddesine göre başlangıçta tek taraflı ve dinî yeminle pekiştirilen bu belgeler, 19. yüzyılda 'muahede' (karşılıklı antlaşma) diline dönüştü — bu da Avrupa hükümdarlarının artık dilekçi değil eşit muhatap sayıldığının bir işaretidir.",
  kesinlik:"tartismali",
  zincir:[],
  olay:["1578-01-01","1580-01-01","1581-09-11"],
  kaynak:"TDV: ingiltere · imtiyazat · ahidname" }

];

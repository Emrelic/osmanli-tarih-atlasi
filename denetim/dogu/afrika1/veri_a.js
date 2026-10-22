// afrika1 — künyeler (KUNYE_YOK) ve anlatı kronolojisi. Alıntılar TDV metninden birebir (bu oturumda okundu).
const { tdv, H } = require('./ortak.js');
const T = (slug, ad, ...q) => tdv(slug, ad, ...q);

// ───────── KÜNYELER ─────────
const h306 = H(306, 918), h400 = H(400, 1009);
const KUNYE = [
  {
    id: 'auris-masties', ad: 'Aurès Krallığı (Masties, Iabdas, Dihya/Kâhine)', tur: 'krallik', bolge: 'kuzey-afrika', f: '0484-01-01', t: '0702-01-01',
    baskent: 'Evrâs (Aurès) dağlığı — kesin merkez kaynakta yok',
    ozet: 'Vandal egemenliğinden kopan Aurès Berberîleri’nin krallığı; son hükümdarı Cerâve kabilesinden Kâhine, Hassân b. Nu‘mân’a yenilip 702’de öldü.',
    kaynak: 'f: Merrills-Miles, The Vandals (2009) s.127-128 ve Modéran, Les Maures et l’Afrique romaine (2003) — Vikipedi «Kingdom of the Aurès» sayfasındaki dipnot atıfları; kitaplar bu oturumda AÇILMADI; Procopius, Vandalic War IV.13 (Iaudas) atıf, açılmadı | t: ' + T('berberiler', 'BERBERÎLER', 'Nihayet 702 yılında Hassân kesin hücuma geçti', 'Yapılan savaşta Berberîler mağlûp oldu', 'Kâhine savaş meydanında hayatını kaybetti'),
    kesinlik: { f: 'yil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'f=484 doğrulanamadı: yalnız ikincil atıf (Vikipedi dipnotları; Procopius’un yıl vermediği, 484’ün Huneric’in ölüm yılı olduğu çıkarımı). t ÇELİŞKİSİ (TDV içi): berberiler «702», ifrikiye/ifren «82/701» (hicrî 82 = 701-02-15…702-02-03 tablo); TDV berberiler esas, girdi taslağı 703 (Vikipedi/Julien-Le Tourneau) kullanılmadı. TDV ifrikiye: Kâhine Hassân’ı 77/696’da yenmişti. Merkezi tek yerleşim olarak kaynaklanamadığından yerleşim YAZILMADI → bölge boyanmaz.',
    kron: [['0484-01-01', 'kurulus', 'Aurès Krallığı Vandal egemenliğinden kopup fiilen bağımsızlaştı (Masties)', 'f: Merrills-Miles, The Vandals (2009) s.127-128 — Vikipedi dipnotu üzerinden atıf; açılmadı', 'yil'],
           ['0702-01-01', 'son', 'Kâhine savaşta öldü; Aurès Berberîleri dağıldı', T('berberiler', 'BERBERÎLER', 'Nihayet 702 yılında Hassân kesin hücuma geçti', 'Kâhine savaş meydanında hayatını kaybetti'), 'yil']]
  },
  {
    id: 'altava-mauro-roma', ad: 'Altava (Mauro-Roma) Krallığı', tur: 'krallik', bolge: 'kuzey-afrika', f: '0508-01-01', t: '0578-01-01', baskent: 'Altava (Ouled Mimoun)',
    ozet: 'Mauretania Caesariensis’te, Altava merkezli Hıristiyan Berberî krallığı; Masuna’nın 508 tarihli yazıtından bilinir, Garmul’un 578 yenilgisiyle dağıldı.',
    kaynak: 'Masuna’nın Altava tahkimat yazıtı (508) ve Garmul’un 578 yenilgisi — Vikipedi «Mauro-Roman Kingdom», «Masuna» sayfaları ÜZERİNDEN ATIF (yalnız ikincil; yazıt neşri ve Courtois/Modéran bu oturumda AÇILMADI); TDV berberiler (okundu) Bizans-Berberî çatışmasını anar ama krallığı adıyla anmaz',
    kesinlik: { f: 'yil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'ZAYIF KAYNAK: her iki uç da yalnız ikincil (Vikipedi aracılığıyla). 508 yazıtın tarihidir (krallığın başlangıcı değil, ilk tarihli tanık); Garmul’un saltanat başı kaynaklarda 550/570/579 diye değişir, 578 ortak uçtur. Altava’nın 508 öncesi ve 578 sonrası sahibi bulunamadı.',
    kron: [['0508-01-01', 'kurulus', 'Masuna’nın Altava’daki yazıtı: Mauro-Roma krallığının ilk tarihli tanığı', 'Masuna yazıtı (508) — Vikipedi «Masuna» üzerinden atıf; açılmadı', 'yil'],
           ['0578-01-01', 'son', 'Garmul’un Bizans karşısındaki yenilgisiyle Mauro-Roma krallığı dağıldı', 'Garmul 578 — Vikipedi «Mauro-Roman Kingdom» üzerinden atıf; açılmadı', 'yil']]
  },
  {
    id: 'wagadu-gane-erken', ad: 'Wagadu (Gāne) — Erken Dönem', tur: 'krallik', bolge: 'bati-afrika', f: '0701-01-01', t: '1076-01-01', baskent: 'Gāne (Kumbî Sâlih)',
    ozet: 'Batı Sudan’ın ilk büyük devleti; VIII. yüzyılda yönetim Soninke bir aileye geçti, X. yüzyılda Sanhâce Emirliği’ni yendi, 1076’da Murâbıtlar başkenti aldı.',
    kaynak: T('gane', 'GĀNE', 'Bir rivayete göre Gāne’de idare VIII. yüzyılda beyazlardan Soninke soyuna mensup Sudanlı bir aileye geçmiş ve 469 (1076-77) yılına kadar devam etmiştir', 'Murâbıtlar 1054 yılında Sanhâce Emirliği’nin eski başşehri Evdeguşt’u, 1076 yılında da Gāne şehrini ele geçirdiler') + ' | ' + T('mali', 'MALİ', 'Onların rivayetlerine göre Gāne en iyi dönemini 950-1050 yılları arasında yaşadı', 'Murâbıt Emîri Ebû Bekir b. Ömer devlet merkezi Kumbîsâlih’i 1076 yılında alınca Batı Afrika’nın bu ilk imparatorluğu yıkıldı'),
    kesinlik: { f: 'yuzyil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'AYNI POLİTY: atlas künyesi `gane` (1000-1076) bu devletin son yetmiş altı yılıdır → öneri: `gane` f’si 0701’e GENİŞLETİLSİN, bu kayıt iptal edilsin (iki kimlik 1000-1076’da çakışır). f=0701: TDV «VIII. yüzyılda idare Soninke aileye geçti» (yüzyıl hassasiyeti); TDV kuruluşu «İlkçağ’lardan itibaren» der ve tarih vermez. Girdinin başkent işareti «Kumbî Sâlih?» TDV mali ile (Kumbîsâlih) doğrulandı.',
    kron: [['0701-01-01', 'kurulus', 'Gāne’de idare Soninke soyuna mensup Sudanlı bir aileye geçti', T('gane', 'GĀNE', 'Bir rivayete göre Gāne’de idare VIII. yüzyılda beyazlardan Soninke soyuna mensup Sudanlı bir aileye geçmiş ve 469 (1076-77) yılına kadar devam etmiştir'), 'yuzyil'],
           ['1076-01-01', 'son', 'Murâbıtlar Gāne’nin başkentini alınca Gāne imparatorluğu yıkıldı', T('mali', 'MALİ', 'Murâbıt Emîri Ebû Bekir b. Ömer devlet merkezi Kumbîsâlih’i 1076 yılında alınca Batı Afrika’nın bu ilk imparatorluğu yıkıldı'), 'yil']]
  },
  {
    id: 'ibadi-imamlik-trablus', ad: 'Trablus İbâdî İmamlığı (Ebü’l-Hattâb el-Meâfirî)', tur: 'imamlik', bolge: 'kuzey-afrika', f: H(140, 757).t, t: '0761-08-01', baskent: 'Trablus → Kayrevan (758)',
    ozet: 'Hevvâre ve Zenâte İbâzîleri’nin Trablus’ta seçtiği Ebü’l-Hattâb’ın kurduğu imamlık; Kayrevan’ı alıp Trablus’tan Doğu Cezayir’e uzandı, Ağustos 761’de Abbâsîler’e yenildi.',
    kaynak: T('rustemiler', 'RÜSTEMÎLER', 'Onun tavsiyesiyle 140 (757) yılında Trablus’ta Hevvâre ve Zenâte İbâzîleri’ne imam seçilen Ebü’l-Hattâb, Kayrevan’ı ele geçirince Abdurrahman b. Rüstem’i oraya vali tayin etti (141/758)', 'Ebü’l-Hattâb, Abbâsîler’e yenildi ve çok sayıda taraftarıyla birlikte öldürüldü (144/761)') + ' | ' + T('kayrevan', 'KAYREVAN', 'Ardından şehri, Abbâsî Halifesi Ebû Ca‘fer el-Mansûr’un İfrîkıye ve Mağrib valiliğine getirdiği Muhammed b. Eş‘as el-Huzâî zaptetti (Cemâziyelevvel 144 / Ağustos 761)') + ' | ' + T('berberiler', 'BERBERÎLER', 'Ebü’l-Hattâb el-Meâfirî kumandasında harekete geçerek Verfecûmeliler’i Kayrevan’dan çıkardı ve Trablus’tan Doğu Cezayir’e kadar uzanan sahada bir devlet kurdu'),
    kesinlik: { f: 'yil', t: 'ay' }, boya_gerekli: true,
    ic_not: 'f: ' + H(140, 757).not + '. t: kaynak ay verir (Cemâziyelevvel 144 / Ağustos 761) → 0761-08-01 ay hassasiyeti. İmamlığın Trablus ve Kayrevan dışındaki yerleşimleri kaynakta adlandırılmadı (yalnız «Trablus’tan Doğu Cezayir’e»).',
    kron: [['KUNYE_F', 'kurulus', 'Trablus’ta Hevvâre ve Zenâte İbâzîleri Ebü’l-Hattâb el-Meâfirî’yi imam seçti', T('rustemiler', 'RÜSTEMÎLER', 'Onun tavsiyesiyle 140 (757) yılında Trablus’ta Hevvâre ve Zenâte İbâzîleri’ne imam seçilen Ebü’l-Hattâb'), 'yil'],
           ['0761-08-01', 'son', 'Abbâsî valisi Kayrevan’ı alıp Ebü’l-Hattâb’ı öldürdü; imamlık sona erdi', T('kayrevan', 'KAYREVAN', 'Muhammed b. Eş‘as el-Huzâî zaptetti (Cemâziyelevvel 144 / Ağustos 761)'), 'ay']]
  },
  {
    id: 'kevkev-erken', ad: 'Kevkev (Gao) — Erken Dönem', tur: 'krallik', bolge: 'bati-afrika', f: '0801-01-01', t: h400.t, baskent: 'Gao',
    ozet: 'Nijer’in sol kıyısında Gao merkezli, IX. yüzyılda ortaya çıkan Kevkev Krallığı; Songay Zâ hânedanının merkezi 400/1009-10’da Kukia’dan Gao’ya taşınınca Kevkev (Songay Zâ) dönemine geçti.',
    kaynak: T('gao', 'GAO', 'IX. yüzyılda ortaya çıkan Kevkev Krallığı’nın bölgedeki diğer krallıkları kendine bağlayacak kadar güçlenmesinde rol oynadı', 'Şehir 890 yılına doğru Songaylar’ın eline geçti', 'Songaylar’ın Zâ hânedanının on beşinci hükümdarı Kosoy’un müslüman olduktan sonra idare merkezini Kukia’dan Gao’ya taşıması (400/1009-10) şehrin tarihinde önemli bir dönüm noktası teşkil etmiştir'),
    kesinlik: { f: 'yuzyil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'AYNI POLİTY: atlas künyesi `kevkev` (Songay Zâ, f=1000-01-01) bunun devamıdır; öneri: `kevkev` f’si t ile (' + h400.t + ') hizalansın ya da iki kimlik tek künyede birleşsin. t: ' + h400.not + '. TDV gao: Gao «Muhtemelen VII. yüzyılın son yıllarında» kuruldu; Kevkev krallığı IX. yüzyılda ortaya çıktı (f yüzyıl hassasiyeti). TDV’nin «Şehir 890’a doğru Songaylar’ın eline geçti» cümlesi ile «Zâ hânedanı Kukia’dan Gao’ya 1009-10’da taşındı» cümlesi bir arada okunursa 890-1009 arası Gao’nun Songay ile Kevkev arasındaki konumu belirsizdir; kimlik ayrımı künye düzeyinde bırakıldı.',
    kron: [['0801-01-01', 'kurulus', 'Gao merkezli Kevkev Krallığı IX. yüzyılda bölgenin güçlü devleti olarak ortaya çıktı', T('gao', 'GAO', 'IX. yüzyılda ortaya çıkan Kevkev Krallığı’nın bölgedeki diğer krallıkları kendine bağlayacak kadar güçlenmesinde rol oynadı'), 'yuzyil'],
           [h400.t, 'son', 'Songay Zâ hükümdarı Kosoy idare merkezini Gao’ya taşıdı; Kevkev (Songay Zâ) dönemi başladı', T('gao', 'GAO', 'Songaylar’ın Zâ hânedanının on beşinci hükümdarı Kosoy’un müslüman olduktan sonra idare merkezini Kukia’dan Gao’ya taşıması (400/1009-10)'), 'yil']]
  },
  {
    id: 'tekrur-erken', ad: 'Tekrûr Krallığı — Erken Dönem', tur: 'krallik', bolge: 'bati-afrika', f: '0801-01-01', t: '1000-01-01', baskent: 'Tekrûr şehri (Aşağı Senegal)',
    ozet: 'IX. yüzyılda Aşağı Senegal civarında Tekrûr şehrinde kurulan, altın-tuz-tahıl ticaretinde rol oynayan ilk Tekrûr Krallığı; Gana ile çekişti.',
    kaynak: T('tekrur', 'TEKRÛR', 'Bilinen ilk Tekrûr Krallığı IX. yüzyılda Aşağı Senegal nehri dolaylarında Tekrûr şehrinde kuruldu', 'Batı Afrika’nın diğer güçlü devleti Gana İmparatorluğu ile sürekli çekişme halinde olan Tekrûr Krallığı IX ve X. yüzyıllarda bölgede büyük bir nüfuza sahipti'),
    kesinlik: { f: 'yuzyil', t: 'yuzyil' }, boya_gerekli: true,
    ic_not: 'AYNI POLİTY: atlas künyesi `tekrur-kralligi` (1000-1281) bunun devamıdır → öneri: `tekrur-kralligi` f’si 0801’e genişletilsin. t=1000-01-01 yalnız o künyeyle hizalama işaretidir; TDV bir bitiş tarihi vermez. Başkent Tekrûr şehrinin konumu için çift tanık bulunamadı (yerleşim YAZILMADI → bölge boyanmaz).',
    kron: [['0801-01-01', 'kurulus', 'Tekrûr şehrinde Aşağı Senegal’deki ilk Tekrûr Krallığı kuruldu', T('tekrur', 'TEKRÛR', 'Bilinen ilk Tekrûr Krallığı IX. yüzyılda Aşağı Senegal nehri dolaylarında Tekrûr şehrinde kuruldu'), 'yuzyil'],
           ['1000-01-01', 'son', 'Erken Tekrûr kaydı, atlasın Tekrûr Krallığı künyesine (1000-1281) devredildi', 'Hizalama işareti: tekrur-kralligi künyesi f=1000-01-01 (atlas; dayanak değil)', 'yuzyil']]
  },
  {
    id: 'zawila-hattabiler', ad: 'Zavîle (Fizan) Hattâbî Emirliği', tur: 'emirlik', bolge: 'kuzey-afrika', f: h306.t, t: '1190-01-01', baskent: 'Zavîle',
    ozet: 'Fizan’da Zevîle’yi merkez edinen, Hevvâre Berberîleri’nden İbn Hattâb ailesinin İbâzî emirliği; 918’de başlayıp Eyyûbî kumandanı Karakuş’un 1190’daki seferiyle sona erdi.',
    kaynak: T('fizan', 'FİZAN', 'Bölge 306 (918) yılında Berberîler’den İbn Hattâb el-Hevvârî’nin hâkimiyetine geçti', 'Bu aile bir ticaret merkezi olan Zevîle’ye yerleşti ve XII. yüzyıl başlarına kadar burada hüküm sürdü', '1190’da Mısır’dan gelen Eyyûbî kumandanlarından Şerefeddin Karakuş Benî Hattâb hâkimiyetine son verdi') + ' | ' + T('kanim', 'KÂNİM', 'Bu hânedanın ilk temas kurduğu müslüman devlet, Fizan’daki Zevîle’de hüküm sürmüş olan Berberîler’in Hevvâre kolundan İbâzî Benî Hattâb Emirliği’dir'),
    kesinlik: { f: 'yil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'f: ' + h306.not + '. t ÇELİŞKİSİ: TDV fizan aynı maddede hem «XII. yüzyıl başlarına kadar» hem «1190’da Karakuş son verdi» der; yıl veren cümle (1190) esas, girdi taslağı 1172 (kaynaksız) kullanılmadı. Atlasta Zevîle (Zawila) yerleşimi vardır (yama_afrika1.js ile 0500-1281 zinciri).',
    kron: [['KUNYE_F', 'kurulus', 'Fizan, İbn Hattâb el-Hevvârî’nin hâkimiyetine geçti; aile Zevîle’ye yerleşti', T('fizan', 'FİZAN', 'Bölge 306 (918) yılında Berberîler’den İbn Hattâb el-Hevvârî’nin hâkimiyetine geçti'), 'yil'],
           ['1190-01-01', 'son', 'Eyyûbî kumandanı Şerefeddin Karakuş Benî Hattâb hâkimiyetine son verdi', T('fizan', 'FİZAN', '1190’da Mısır’dan gelen Eyyûbî kumandanlarından Şerefeddin Karakuş Benî Hattâb hâkimiyetine son verdi'), 'yil']]
  },
];

// ───────── ANLATI MADDELERİ ─────────
// [t, b, tur, taraflar, yer, d, kaynak, gun, kesinlik, ic_not, ic_not_takvim, onem]
const A = [];
function m(o) { A.push(o); }
const h77 = H(77, 696), h78 = H(78, 697), h141 = H(141, 758);
m({ t: h77.t, b: 'Kâhine Hassân b. Nu‘mân’ı yendi', tur: 'savas', taraflar: ['auris-masties', 'emevi'], yer: 'Aurès (Evrâs)', onem: 3,
  d: 'Hassân b. Nu‘mân Kartaca’yı Bizans’tan aldıktan sonra Evrâs bölgesindeki Berberîler’in lideri Kâhine üzerine yürüdü ve savaşı kaybetti; Kâhine bölgenin kalelerini yıktırdı.',
  kaynak: T('ifrikiye', 'İFRÎKIYE', 'Hassân, ilk olarak Kartaca’yı Bizanslılar’dan geri aldı', 'Ancak Kâhine ile yaptığı savaşı kaybetti (77/696)') + ' | ' + T('berberiler', 'BERBERÎLER', 'Kâhine üzerine yürüyen Hassân Berberîler’le yaptığı savaşı kaybederek geri çekildi'),
  gun: '77/696 (TDV ifrikiye)', kesinlik: 'yil', ic_not: 'Yıl kaynağında hicrî+miladî; gün yok.', ic_not_takvim: h77.not });
m({ t: h78.t, b: 'Bizanslılar Kartaca’yı yeniden ele geçirdi', tur: 'savas', taraflar: ['bizans-afrika-eksarhligi', 'emevi'], yer: 'Kartaca (Carthage)', onem: 3,
  d: 'Hassân’ın Kâhine karşısındaki yenilgisinin ardından Bizanslılar kısa süre için Kartaca’yı geri aldı; Hassân 698’de şehri kesin olarak zaptetti.',
  kaynak: T('ifrikiye', 'İFRÎKIYE', 'Bu arada Bizanslılar da Kartaca’yı ele geçirdiler (78/697)') + ' | ' + T('berberiler', 'BERBERÎLER', 'Şehir tekrar Bizans’ın eline geçti'),
  gun: '78/697 (TDV ifrikiye)', kesinlik: 'yil', ic_not: 'TDV berberiler yalnız «Şehir tekrar Bizans’ın eline geçti» der, yıl vermez; ifrikiye 78/697 verir. Kartaca zincirine yazılmadı (kısa kesinti, 697-698).', ic_not_takvim: h78.not });
m({ t: h141.t, b: 'Ebü’l-Hattâb el-Meâfirî Kayrevan’ı ele geçirdi', tur: 'isgal', taraflar: ['ibadi-imamlik-trablus', 'emevi'], yer: 'Kayrevan', onem: 3,
  d: 'Trablus’ta imam seçilen Ebü’l-Hattâb İbâzî birlikleriyle Kayrevan’ı ele geçirdi (Sufrî Âsım el-Verfecûmî’nin 757’de aldığı şehri geri alarak) ve Abdurrahman b. Rüstem’i vali tayin etti; imamlığın sınırı Trablus’tan Doğu Cezayir’e uzandı.',
  kaynak: T('kayrevan', 'KAYREVAN', '140’ta (757) Sufrî Hâricîler’den Âsım el-Verfecûmî tarafından ele geçirilen Kayrevan’ı ertesi yıl İbâzî lideri Ebü’l-Hattâb el-Meâfirî geri aldı ve ileride Rüstemîler hânedanını kuracak olan Abdurrahman b. Rüstem’i buraya vali tayin etti') + ' | ' + T('rustemiler', 'RÜSTEMÎLER', 'Kayrevan’ı ele geçirince Abdurrahman b. Rüstem’i oraya vali tayin etti (141/758)'),
  gun: '141/758', kesinlik: 'yil', ic_not: 'Kayrevan atlas zincirinde 0745-0761 BEYANLI BOŞLUK: öneri → 0758 ibadi-imamlik-trablus, 0761-08 abbasi (yama Kayrevan için YAZILMADI: yerleşim mevcut, bu dilimler çakışır).', ic_not_takvim: h141.not });
m({ t: '0761-08-01', b: 'Muhammed b. Eş‘as Kayrevan’ı zaptetti; Ebü’l-Hattâb öldürüldü', tur: 'savas', taraflar: ['abbasi', 'ibadi-imamlik-trablus'], yer: 'Kayrevan', onem: 3,
  d: 'Abbâsî Halifesi Mansûr’un İfrîkıye ve Mağrib valisi Muhammed b. Eş‘as el-Huzâî Ağustos 761’de Kayrevan’ı zaptedip etrafını surlarla çevirdi; Ebü’l-Hattâb çok sayıda taraftarıyla öldürüldü, Abdurrahman b. Rüstem Cebelicezzûl’e çekildi.',
  kaynak: T('kayrevan', 'KAYREVAN', 'Ardından şehri, Abbâsî Halifesi Ebû Ca‘fer el-Mansûr’un İfrîkıye ve Mağrib valiliğine getirdiği Muhammed b. Eş‘as el-Huzâî zaptetti (Cemâziyelevvel 144 / Ağustos 761) ve etrafını surlarla çevirdi') + ' | ' + T('rustemiler', 'RÜSTEMÎLER', 'Ebü’l-Hattâb, Abbâsîler’e yenildi ve çok sayıda taraftarıyla birlikte öldürüldü (144/761)'),
  gun: 'Ağustos 761 (ay)', kesinlik: 'ay', ic_not: 'Ay hassasiyeti; gün yok.' });
m({ t: '0950-01-01', b: 'Gāne’nin en parlak dönemi (950-1050)', tur: 'siyaset', taraflar: ['wagadu-gane-erken'], onem: 3,
  d: 'Rivayetlere göre Gāne en iyi dönemini 950-1050 yılları arasında yaşadı; krallar yeryüzünün en zengin insanları sayılıyordu. İbn Havkal ve Ebû Ubeyd el-Bekrî’nin tanıklıkları bu dönemi yansıtır.',
  kaynak: T('mali', 'MALİ', 'Onların rivayetlerine göre Gāne en iyi dönemini 950-1050 yılları arasında yaşadı') + ' | ' + T('gane', 'GĀNE', 'Bu dönemden başlayarak Batı Sudan’daki çeşitli bölge ve halkları şemsiyesi altında toplayan en kuvvetli ve en mükemmel teşkilâta sahip devlet haline geldi'),
  gun: '950-1050 (aralığın başı)', kesinlik: 'onyil', ic_not: 'Aralık verilmiş; aralığın başı onyıl hassasiyetiyle yazıldı.' });
m({ t: '1076-01-01', b: 'Gāne’nin düşüşü üzerine Susu hâkimleri bağımsızlıklarını ilân etti', tur: 'bolunme', taraflar: ['murabitlar', 'wagadu-gane-erken'], onem: 3,
  d: 'Gāne’nin 1076’da düşmesi üzerine uzun yıllar Gāne’ye vergi ödeyen Susu hâkimleri bağımsızlıklarını ilân etti; Gāne Mema Tunkara, Susu Kante, Hingui Niakhaté ve Diara adlı dört küçük krallığa ayrıldı.',
  kaynak: T('gane', 'GĀNE', 'Gāne’nin 1076’da düşmesi üzerine daha önce uzun yıllar Gāne Devleti’ne vergi ödeyen Susu hâkimleri bağımsızlıklarını ilân etti') + ' | ' + T('mali', 'MALİ', 'Mema Tunkara, Susu Kante, Hingui Niakhaté ve Diara adlı dört küçük krallığa ayrılan Gāne'),
  gun: '1076', kesinlik: 'yil', ic_not: 'TDV gane/mali düşüş yılını 1076 (469/1076-77) verir.' });
m({ t: '1240-01-01', b: 'Mali İmparatorluğu Gāne topraklarının tamamını ele geçirdi', tur: 'siyaset', taraflar: ['mali-imparatorlugu', 'wagadu-gane-erken'], yer: 'Kumbî Sâlih (Gāne)', onem: 3,
  d: 'Dört küçük krallığa bölünmüş olan Gāne, 1240’ta Mali İmparatorluğu’nun topraklarının tamamını ele geçirmesiyle tarih sahnesinden silindi.',
  kaynak: T('mali', 'MALİ', 'Mema Tunkara, Susu Kante, Hingui Niakhaté ve Diara adlı dört küçük krallığa ayrılan Gāne, 1240 yılında Mali İmparatorluğu tarafından topraklarının tamamının ele geçirilmesiyle tarih sahnesinden silindi'),
  gun: '1240', kesinlik: 'yil', ic_not: 'Kumbî Sâlih yerleşiminin zincirinde 1240 bir kuyruk başlangıcıdır (kuyruk_gerekli); bu madde zincir kırılması değil, kuyruk işçisi için işarettir.' });
const h300 = H(300, 912), h434 = H(434, 1042);
m({ t: h300.t, b: 'Evdeguşt merkezli Sanhâce devleti karışık bir döneme girdi (300-420/912-1029)', tur: 'siyaset', taraflar: ['sahra-sanhaca'], yer: 'Evdeguşt (Awdaghust)', onem: 2,
  d: 'VIII. yüzyılın ikinci yarısında Evdegost’ta Lemtûne öncülüğünde kurulan Sanhâce devleti, Batı Sahrâ’nın tamamını hâkimiyetine alırken 300-420 (912-1029) arasında karışık bir dönem yaşadı.',
  kaynak: T('sanhace-beni-sanhace', 'SANHÂCE (Benî Sanhâce)', 'Bilâdüssûdan topraklarına seferler düzenleyen ve Nijer kıyılarına kadar Batı Sahrâ’nın tamamını hâkimiyeti altına alan bu devlet 300-420 (912-1029) yılları arasında karışık bir dönem yaşadı'),
  gun: '300-420/912-1029 (aralığın başı)', kesinlik: 'yil', ic_not: 'Aralığın başı alındı.', ic_not_takvim: h300.not });
m({ t: h434.t, b: 'Abdullah b. Yâsîn Senegal’deki ribâtta Sanhâce kabilelerini itaat altına aldı (Murâbıt hareketinin başı)', tur: 'siyaset', taraflar: ['sahra-sanhaca', 'murabitlar'], onem: 3,
  d: 'Cezûlî fakih Abdullah b. Yâsîn, Lemtûne lideri Yahyâ b. Ömer’le Senegal nehri üzerindeki bir adada ribât kurdu; Cüdâle ve Lemtûne başta olmak üzere Sanhâce kabilelerini itaat altına aldı. Bu hareket Murâbıtlar Devleti’ne dönüştü.',
  kaynak: T('murabitlar', 'MURÂBITLAR', 'Talebeleriyle beraber tebliğ ve cihad hareketi başlatarak Cüdâle ve Lemtûne başta olmak üzere Sanhâce’ye mensup kabileleri itaat altına aldı (434/1042-43)'),
  gun: '434/1042-43', kesinlik: 'yil', ic_not: 'Kaynak iki miladî yıl verir (1042-43); hicrî 434 ∩ 1042 ilk günü alındı.', ic_not_takvim: h434.not });
m({ t: '0859-01-01', b: 'Normanlar (Vikingler) Nekor’a çıkıp şehri yağmaladı', tur: 'isgal', taraflar: ['nekor-emirligi'], yer: 'Nekor (Temsaman)', onem: 2,
  d: 'Bekrî’nin anlatısına göre 244 (858-59) yılında bir Norman/Viking filosu Nekûr’a çıktı, şehri alıp çok sayıda kişiyi esir etti.',
  kaynak: 'Ebû Ubeyd el-Bekrî, el-Mesâlik ve’l-memâlik (244 H) — HeritageDaily «The Vikings in Africa» (2022) ikincil özeti ve Filipowiak, Szkło 4 (2017) atfı ÜZERİNDEN; kaynakların hiçbiri bu oturumda AÇILMADI',
  gun: '244 H (858-59)', kesinlik: 'yil', ic_not: 'ZAYIF KAYNAK: yalnız ikincil özet üzerinden atıf; yıl çevirisi (858/859) çelişkili — 859 işaret değeri. TDV berberiler Nekor’u yalnız «Rif’te Nakūr Emirliği» diye anar. Nekor yerleşimi çift tanık bulunamadığı için YAZILMADI.' });
const h155 = H(155, 772), h338 = H(338, 949), h343 = H(343, 954), h381 = H(381, 991), h458 = H(458, 1066);
m({ t: H(148, 765).t, b: 'Yıfrenî Ebû Kurre kendisini imam ilân etti', tur: 'isyan', taraflar: ['ifraniler-tilimsan', 'abbasi'], yer: 'Tilimsan', onem: 3,
  d: 'Sufriyye Hâricîleri’nin liderlerinden Ebû Kurre Abbâsîler’le savaştıktan sonra Orta Mağrib’in büyük kısmını hâkimiyeti altına aldı ve 148’de (765) kendisini imam ilân etti; Abbâsî ordusu karşısında Mağrib-i Aksâ’ya kaçtı.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', 'Ebû Kurre bir süre Abbâsîler’le savaştıktan sonra Orta Mağrib’in büyük kısmını hâkimiyeti altına aldı ve kendisini imam ilân etti (148/765)', 'Fakat üzerine gönderilen Abbâsî ordusu karşısında tutunamayıp Mağrib-i Aksâ’ya kaçtı'),
  gun: '148/765', kesinlik: 'yil', ic_not: 'Kaynak hicrî+miladî; gün yok.', ic_not_takvim: H(148, 765).not });
m({ t: h155.t, b: 'Berberîler Trablus yakınında Yezîd b. Hâtim’e yenildi (155/772)', tur: 'savas', taraflar: ['abbasi', 'ifraniler-tilimsan'], yer: 'Trablus', onem: 3,
  d: 'İfrîkıye valisi Ömer b. Hafs’ı öldürüp Tubne ve Kayrevan’ı alan Berberîler (Sufrî/İbâzî isyanı), Abbâsîler’in yeni valisi Yezîd b. Hâtim karşısında Trablus’taki savaşta yaklaşık 30.000 kayıp verdi.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', '154 (771) yılında valiyi öldürerek Tubne ve Kayrevan şehirlerini ele geçiren Berberîler, Abbâsîler’in yeni valisi Yezîd b. Hâtim karşısında Trablus’taki savaşta ağır bir hezimete uğrayıp 30.000 civarında kayıp verdiler (155/772)'),
  gun: '155/772', kesinlik: 'yil', ic_not: 'Gün yok.', ic_not_takvim: h155.not });
m({ t: h338.t, b: 'Yıfrenî Ya‘lâ b. Muhammed İfkân şehrini kurup emirliğini ilân etti', tur: 'kurulus', taraflar: ['ifraniler-tilimsan'], yer: 'İfkân', onem: 3,
  d: 'Fâtımîler’i destekleyen yakınlarının öldürdüğü Muhammed b. Sâlih’in yerine geçen oğlu Ya‘lâ 338’de (949-50) İfkân şehrini kurup emirliğini ilân etti; 343’te (954-55) Vehrân’ı aldı.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', 'Onun Fâtımîler’i destekleyen yakınları tarafından öldürülmesinden sonra yerine geçen oğlu Ya‘lâ 338’de (949-50) İfkân şehrini kurup emirliğini ilân etti'),
  gun: '338/949-50', kesinlik: 'yil', ic_not: 'Kaynak iki miladî yıl verir; hicrî 338 ∩ 949 ilk günü.', ic_not_takvim: h338.not });
m({ t: h343.t, b: 'Ya‘lâ b. Muhammed Vehrân’ı ele geçirdi ve Fâtımîler’e karşı ayaklandı', tur: 'siyaset', taraflar: ['ifraniler-tilimsan', 'fatimi'], yer: 'Vehrân', onem: 2,
  d: 'Ya‘lâ b. Muhammed 343’te (954-55) Vehrân’ı ele geçirdi, Mağrâve emîri Hayr b. Muhammed’le birlikte Fâtımîler’e karşı ayaklanıp Tâhert’e yürüdü, Tâhert ile Tanca arasını hâkimiyeti altına alıp hutbeyi Endülüs Emevî halifesi adına okuttu.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', '343’te (954-55) Vehrân şehrini ele geçiren Ya‘lâ, daha sonra kendisine katılan Mağrâve Emîri Hayr b. Muhammed ile birlikte Fâtımîler’e karşı ayaklanıp Tâhert’e yürüdü'),
  gun: '343/954-55', kesinlik: 'yil', ic_not: 'Vehrân bu kümenin yerleşimi değildir (zincir yazılmadı); bu yüzden madde tipi toprak-kazanc değil `siyaset` seçildi (Değişmez 2 yer eşleşmesi aranmasın). TDV iki miladî yıl (954-55) verir; hicrî 343 ∩ 954 ilk günü alındı.', ic_not_takvim: h343.not });
m({ t: h381.t, b: 'Yıfrenî Yeddû Endülüs Emevîleri’ne itaati bırakıp Fas’ı ele geçirdi', tur: 'isyan', taraflar: ['ifraniler-tilimsan', 'endulus-emevi'], yer: 'Fas (Fez)', onem: 2,
  d: 'Ya‘lâ’nın oğlu Yeddû aralarında çıkan anlaşmazlık üzerine 381’de (991) Endülüs Emevîleri’ne itaati bıraktı ve Fas şehrini ele geçirdi; kısa süre sonra ağır bir hezimete uğrayıp öldü.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', 'Fakat Yeddû aralarında çıkan anlaşmazlık üzerine 381’de (991) Endülüs Emevîleri’ne itaati terketti ve Fas şehrini ele geçirdi'),
  gun: '381/991', kesinlik: 'yil', ic_not: 'Fas (Fez) atlas yerleşiminin 1070 öncesi zinciri bu kümede yazılmadı; madde tipi isyan (Değişmez 2 evreni dışı).', ic_not_takvim: h381.not });
m({ t: h458.t, b: 'Murâbıtlar Şâle Benî İfren Emirliği’ni ortadan kaldırdı', tur: 'son', taraflar: ['murabitlar', 'ifraniler-tilimsan'], yer: 'Şâle (Salé)', onem: 3,
  d: 'Hammâme’nin Şâle’den Tâdlâ’ya uzanan bölgede kurduğu üçüncü Benî İfren emirliği son emîr Muhammed b. Ebü’l-Kemâl zamanında Murâbıtlar tarafından ortadan kaldırıldı (458/1066); Benî İfren’in bazı kolları Endülüs’e göç etti.',
  kaynak: T('ifren-beni-ifren', 'İFREN (Benî İfren)', 'Şâle Benî İfren Emirliği, son emîr Muhammed b. Ebü’l-Kemâl zamanında Murâbıtlar tarafından ortadan kaldırıldı (458/1066)'),
  gun: '458/1066', kesinlik: 'yil', ic_not: 'Şâle emirliğinin kuruluşu (Hammâme, 991 sonrası) TDV’de yıllandırılmaz → sala-emirligi-benifren için künye YAZILMADI (f bulunamadı).', ic_not_takvim: h458.not });
const h455 = H(455, 1063), h474 = H(474, 1081), h488 = H(488, 1095);
m({ t: h455.t, b: 'Hammû b. Mellîl Mehdiye önünde Temîm’e yenildi', tur: 'savas', taraflar: ['ziriler', 'sfaks-hammu-emirligi'], yer: 'Sfaks', onem: 2,
  d: 'Hammâdî emîri Nâsır b. Alennâs’ı metbû tanıyan Hammû 455’te (1063) Esbec, Adî ve başka Arap kabilelerinin desteğiyle Mehdiye üzerine yürüdü; Mehdiye yakınındaki savaşta Temîm karşısında ağır yenilgiye uğradı.',
  kaynak: T('sefakus', 'SEFÂKUS', 'Ardından Hammâdî Emîri Nâsır b. Alennâs’ı metbû tanıyan Hammû 455 (1063) yılında Esbec, Adî ve diğer bazı Arap kabilelerinin desteğiyle Mehdiye üzerine yürüdü', 'Ancak Mehdiye yakınlarında meydana gelen savaşta Temîm karşısında ağır bir yenilgiye uğradı'),
  gun: '455/1063', kesinlik: 'yil', ic_not: 'Gün yok.', ic_not_takvim: h455.not });
m({ t: h474.t, b: 'Temîm’in Sfaks’ı almak için gönderdiği ilk ordu başarısız oldu (474/1081)', tur: 'savas', taraflar: ['ziriler', 'sfaks-hammu-emirligi'], yer: 'Sfaks', onem: 2,
  d: 'Sefâkus’u almak için Temîm’in 474 (1081) ve 488 (1095) yıllarında gönderdiği ordular başarısız oldu; Temîm 493’te (1099) bizzat harekete geçip şehri aldı.',
  kaynak: T('sefakus', 'SEFÂKUS', 'Sefâkus’u almak için harekete geçen Temîm, 474 (1081) ve 488 (1095) yıllarında gönderdiği ordular başarısız olunca 493’te (1099) bizzat ordusunun başında Sefâkus üzerine yürüdü'),
  gun: '474/1081', kesinlik: 'yil', ic_not: 'Kaynak 474/1081 ve 488/1095 iki seferi birlikte verir; ikincisi aşağıda ayrı madde.', ic_not_takvim: h474.not });
m({ t: h488.t, b: 'Temîm’in Sfaks’a ikinci ordusu da başarısız oldu (488/1095)', tur: 'savas', taraflar: ['ziriler', 'sfaks-hammu-emirligi'], yer: 'Sfaks', onem: 2,
  d: 'Temîm’in 488’de (1095) gönderdiği ikinci ordu da Sefâkus’u alamadı; şehir 1099’a kadar Hammû’nun elinde kaldı.',
  kaynak: T('sefakus', 'SEFÂKUS', 'Sefâkus’u almak için harekete geçen Temîm, 474 (1081) ve 488 (1095) yıllarında gönderdiği ordular başarısız olunca'),
  gun: '488/1095', kesinlik: 'yil', ic_not: 'Gün yok.', ic_not_takvim: h488.not });
const h493 = H(493, 1099);
m({ t: h493.t, b: 'Sfaks’tan kaçan Hammû Kâbis emirine sığındı', tur: 'siyaset', taraflar: ['kabis-emirligi', 'sfaks-hammu-emirligi'], yer: 'Gabes', onem: 2,
  d: 'Temîm’in Sefâkus’u alması üzerine kaçmayı başaran Hammû Kâbis emirine sığındı; bu, Kâbis’in 1099’da hâlâ ayrı bir emirlik olduğunu gösterir.',
  kaynak: T('sefakus', 'SEFÂKUS', 'Kaçmayı başaran Hammû ise Kābis emîrine sığındı'),
  gun: '493/1099', kesinlik: 'yil', ic_not: 'Kâbis emirliğinin başlangıç ve bitiş yılları TDV’de yok (MS1 künyesi 1062-1148, ikincil).', ic_not_takvim: h493.not });
const h576 = H(576, 1180), h583 = H(583, 1187);
m({ t: h576.t, b: 'Benî Rend’den Ali b. Abdülazîz’in Kafsa isyanı Muvahhid kuşatmasıyla bastırıldı (576/1180)', tur: 'isyan', taraflar: ['muvahhidler', 'kafsa-benirend-emirligi'], yer: 'Kafsa', onem: 3,
  d: 'Şehir eşrafının daveti üzerine Kafsa’ya gelen Benî Rend’den Ali b. Abdülazîz 575’te (1180) yönetimi eline aldı; Ebû Yûsuf el-Mansûr şehri kuşattı, meyvelikleri tahrip edince isyancılar teslim oldu (576/1180); yönetime hükümdarın kardeşi Ebû Ali getirildi.',
  kaynak: T('kafsa', 'KAFSA', 'Ancak 575 (1180) yılında valiye karşı harekete geçen şehir eşrafının daveti üzerine Kafsa’ya gelen Benî Rend’e mensup Ali b. Abdülazîz yönetimi eline geçirdi', 'Şehir dışındaki meyvelikleri tahrip etmeye başlayınca isyancılar teslim oldu (576/1180)'),
  gun: '575-576/1180', kesinlik: 'yil', ic_not: 'Kafsa zincirinde Muvahhid kesintisiz yazıldı (kısa isyan modele alınmadı, BEYANLI).', ic_not_takvim: h576.not });
m({ t: h583.t, b: 'Karakuş ve Boz-aba Umre’de Muvahhidler’i yenip Kafsa’yı aldı (583/1187); Muvahhid üç ay sonra geri aldı', tur: 'savas', taraflar: ['ganiyeler', 'muvahhidler'], yer: 'Kafsa', onem: 3,
  d: 'Selâhaddîn-i Eyyûbî’nin gönderdiği Karakuş ve Boz-aba komutasındaki Oğuz birliği ve Ali b. Gāniye Kafsa yöresindeki Umre’de Muvahhidler’i bozguna uğrattı, Kafsa dahil İfrîkıye’nin (Tunus) tamamını aldı; Ebû Yûsuf el-Mansûr Eylül 1187’de Kafsa’yı kuşattı, üç aylık kuşatmanın ardından şehir teslim oldu.',
  kaynak: T('kafsa', 'KAFSA', 'Selâhaddîn-i Eyyûbî tarafından gönderilen Şerefeddin Karakuş ve Zeyneddin Boz-aba’nın emrindeki Oğuzlar’dan oluşan bir askerî birliğin de katıldığı ordusuyla Kafsa yöresindeki Umre’de Muvahhidler’i bozguna uğrattı (583/1187)', 'Ancak Muvahhidler’den Ebû Yûsuf el-Mansûr, üç ay sonra 583 Receb’i ortalarında (Eylül 1187) Kafsa’yı kuşattı'),
  gun: '583/1187', kesinlik: 'yil', ic_not: 'TDV içi: «üç ay sonra … (Eylül 1187)» iç tutarlılığı: TDV’nin Eylül 1187 ve «583 Receb ortaları» ifadesi Gregoryen/Jülyen ve tablo farkı taşır; Kafsa zincirine Gāniye kesintisi yazılmadı.', ic_not_takvim: h583.not });
const h448 = H(448, 1056);
m({ t: h448.t, b: 'Tekrûr kralı Labbi Murâbıt komutanına asker gönderdi', tur: 'ittifak', taraflar: ['tekrur-kralligi', 'murabitlar'], onem: 3,
  d: 'Kral Vâr Câbî’nin İslâm’a girmesiyle değişen Tekrûr’da oğlu Labbi 448’de (1056) Murâbıt komutanının emrine askerî birlik gönderdi ve Murâbıtlar’la iş birliği halinde çevredeki putperest kabilelerle savaştı.',
  kaynak: T('tekrur', 'TEKRÛR', 'Vâr Câbî’nin oğlu Labbi 448’de (1056) Murâbıt kumandanının emrine bir askerî birlik gönderdi ve Murâbıtlar’la iş birliği halinde çevredeki putperest kabilelerle savaştı'),
  gun: '448/1056', kesinlik: 'yil', ic_not: 'Gün yok.', ic_not_takvim: h448.not });
m({ t: '0890-01-01', b: 'Gao Songaylar’ın eline geçti', tur: 'siyaset', taraflar: ['kevkev-erken'], yer: 'Gao', onem: 2,
  d: 'IX. yüzyılda ortaya çıkan Kevkev Krallığı’nın merkezi Gao 890 yılına doğru Songaylar’ın eline geçti.',
  kaynak: T('gao', 'GAO', 'Şehir 890 yılına doğru Songaylar’ın eline geçti'),
  gun: '890 yılına doğru', kesinlik: 'yil', ic_not: '«yılına doğru» yaklaşıklığı; Gao zincirine yazılmadı (aynı TDV maddesi 1009-10’da Zâ hânedanının merkezi Gao’ya taşıdığını söyler; iki cümle arasındaki ilişki TDV’de açıklanmaz).' });
m({ t: '1324-01-01', b: 'Songay Sultanı Asibay Mali Sultanı Mense Mûsâ’ya biat etti; Gao Mali’ye bağlandı', tur: 'toprak-kayip', taraflar: ['mali-imparatorlugu', 'kevkev'], yer: 'Gao', yer_id: 'Gao', onem: 3,
  d: 'Mali Sultanı Gongon Mûsâ’ya yenilen Songay Sultanı Asibay ona biat edip iki küçük oğlunu rehin verdi; on beş yıl sonra oğullardan Ali Kolen kaçıp Gao’ya döndü ve Songaylar’ın Sonni dönemini (1339-1493) başlattı.',
  kaynak: T('gao', 'GAO', '1324 yılında Songay Sultanı Asibay mağlûp olduğu Mali Sultanı Gongon Mûsâ’ya biat etti ve küçük yaşlardaki iki oğlunu da ona rehin verdi'),
  gun: '1324', kesinlik: 'yil', ic_not: 'Gao’nun mevcut atlas zinciri 1324-01-01’de mali-imparatorlugu ile başlar (yama bu uca eşit).' });
m({ t: '1075-01-01', b: 'Hummay Benî Dûkû hânedanının yerine Kânim’de Seyfiyye (Benî Hummay) hânedanını başlattı', tur: 'hukumdar', taraflar: ['kanem-bornu'], onem: 3,
  d: 'Berberî asıllı Zegāveler’in Manan’da kurduğu Benî Dûkû Krallığı’nın son hâkimi Abdülcelîl’in (1071-1075) oğlu Hummay (1075-1086) bölge tarihinde yeni bir devir açtı; Kânim Devleti ona nisbetle Benî Hummay (Seyfiyye) diye anılır.',
  kaynak: T('kanim', 'KÂNİM', 'Kânim’e ilk yerleşenlerin ziraatçı ve hayvan yetiştiren So (Sao) toplumu olduğu, daha sonra Berberî asıllı Zegāveler’in bölgeyi ele geçirdikleri ve merkezi Manan’da Benî Dûkū Krallığı’nı kurdukları bilinmektedir', 'Benî Dûkū’nun son hâkimi Abdülcelîl olup (1071-1075) bölge tarihinde yeni bir devir açan bunun oğlu Hummay’dır (1075-1086)'),
  gun: '1075', kesinlik: 'yil', ic_not: 'Zağava (Zegāve) için künye YAZILMADI: TDV kuruluş yılı vermez (yalnız son hükümdar 1071-75); girdi f=0800 «taslak» doğrulanamadı; Zağava/Benî Dûkû kanem-bornu künyesinin (f=0800) öncesi/içi sayıldı. TDV: Kânim’in başkentinin Manan’daki yeri çözülmedi.' });

module.exports = { KUNYE, ANLATI: A.filter(x => !x._atla) };

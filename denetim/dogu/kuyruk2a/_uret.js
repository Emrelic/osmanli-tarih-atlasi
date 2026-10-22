// node _uret.js -> yama_kuyruk2a.js + kronoloji_sinir_dogu_kuyruk2a.js + kunye_yeni.js yazar; ozet basar
// Kaynak alintilari _alinti.js ile onbellekteki metinlerde birebir sinanir.
const fs = require('fs'), path = require('path');
const DIR = __dirname + '/';
const GUN = require(path.resolve(__dirname, '..', '..', '..', 'js/gun.js'));
const g = (s) => GUN.gun(s);
const PARCA = JSON.parse(fs.readFileSync(DIR + '_parca.json', 'utf8'));
const IDLER = require('./_idler.js');
const QUOTES = []; // {slug|ws, q}
const BASLIK = {
  serahs: 'Serahs', 'nisabur--iran': 'Nîşâbûr', merv: 'Merv', herat: 'Herat', belh: 'Belh', gazne: 'Gazne', 'kabil--afganistan': 'Kâbil', semerkant: 'Semerkant', buhara: 'Buhara',
  usrusene: 'Üsrûşene', hoten: 'Hoten', kasgar: 'Kâşgar', karakorum: 'Karakorum', kirgizlar: 'Kırgızlar', uygurlar: 'Uygurlar', karahitaylar: 'Karahıtaylar', kipcaklar: 'Kıpçaklar', hazarlar: 'Hazarlar',
  gurlular: 'Gurlular', harizmsahlar: 'Hârizmşahlar', sencer: 'Sencer', 'tekis-alaeddin': 'Tekiş, Alâeddin', 'mueyyed-ay-aba': 'Müeyyed Ay-aba', saffariler: 'Saffârîler', 'saffar-yakub-b-leys': 'Saffâr, Ya‘kūb b. Leys',
  mogollar: 'Moğollar', selcuklular: 'Selçuklular', karluklar: 'Karluklar', 'cengiz-han': 'Cengiz Han', 'cagatay-hanligi': 'Çağatay Hanlığı', 'behram-sah': 'Behram Şah',
};
function T(slug, ...qs) {
  for (const q of qs) QUOTES.push({ slug, q });
  return `TDV İslâm Ansiklopedisi, «${BASLIK[slug]}» md., https://islamansiklopedisi.org.tr/${slug} (22.10.2026'da okundu): ` + qs.map(q => `«${q}»`).join(' · ');
}
function W(page, ...qs) {
  for (const q of qs) QUOTES.push({ ws: page, q });
  return `${page.replace(/\/卷/, ' juan ')} (zh.wikisource.org/wiki/${page}; bu oturumda okundu): ` + qs.map(q => `«${q}»`).join(' · ');
}
const J = (...a) => a.join(' | ');
// parca kopyasi: mevcut yama dilimini (ad, f) bulur
function K(ad, f, over = {}) {
  for (const y of PARCA[ad].yama) for (const p of y.onek) if (p.f === f) return Object.assign({ f: p.f, t: p.t, d: p.d, kesinlik: p.kesinlik, kaynak: p.kaynak, _kopya: y.dosya }, over);
  throw new Error('kopya yok: ' + ad + ' ' + f);
}
const BOS = '__BOSLUK__';
const P = (f, t, d, kesinlik, kaynak, extra = {}) => Object.assign({ f, t, d, kesinlik, kaynak }, extra);
// uc eklemek: kopya kaynagina ek
const EK = (p, ek) => Object.assign({}, p, { kaynak: p.kaynak + ' | ' + ek });

const SEHIR = {};
const ILK = {};
const DEGISEN = {};
function sehir(ad, mevcutIlkF, degisen, liste) { SEHIR[ad] = liste; ILK[ad] = mevcutIlkF; DEGISEN[ad] = degisen; }

// =============================== ORTAK PARCALAR ===============================
const RASIDIN_NOT = 'hulefa-yi-rasidin künyesi f=0632-06-08 t=0661-07-29; sasani künyesi t=0651-01-01 (Yezdicerd III ölümü) → 651-01-01 yıl hassasiyetiyle alındı.';

// ---------------------------------------------------------------- Astrahan
sehir('Astrahan', '1281-01-01', 'bozkir1/yama_bozkir1.js', [
  K('Astrahan', '0500-01-01'),
  K('Astrahan', '0732-01-01'),
  P('0965-01-01', '1054-01-01', BOS, 'yil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: İdil ağzı (Astrahan yöresi) 965-1054 sahibi: ' + T('hazarlar', 'Hazarlar’ın X. yüzyılda Ruslar karşısında güç duruma düşmeleri ve 965’te hakanın Hârizmliler’e sığınması'),
    T('hazarlar', '860 yılından sonraki akınlarıyla Don ve Dinyeper nehirleri arasındaki araziyi ele geçiren Peçenek ve Uzlar Hazar Devleti’ni iyice zayıflattılar.'),
    T('kipcaklar', 'Önlerindeki Uz (Oğuz) kitlelerinin 1048’de Balkanlar’a çekilmesi üzerine de Güney Rusya’ya geldiler.'),
    'Peçenek/Uz/Kıpçak göçleri İdil ağzındaki bu şehir noktasını adıyla ya da tek devletle bağlamıyor; ABİ MERKEZ İtil 965’te yok olduğundan zincir sürdürülemedi → boşluk. f=0965-01-01: hakanın Harezm’e sığınma yılı (TDV Hazarlar); t=1054-01-01: TDV Kıpçaklar’da Rus yıllıklarındaki ilk Polovtsı anışı (yıl).')),
  P('1054-01-01', '1239-01-01', 'kipcak', 'yil', J(
    T('kipcaklar', 'Rus yıllıklarında ilk defa 1054 yılında “Polovtsı” adıyla zikredilen Kıpçaklar bu dönemde hâkimiyet sahalarını Dinyeper’e kadar genişlettiler.', 'Hâkimiyetlerini, 1080’lerde Don-Dinyester havzaları başta olmak üzere Balkaş gölü-Talas yöresinden Tuna ağzına kadar yaydılar.', 'Doğu Avrupa-Batı Sibirya bozkır bölgelerinin tamamını kapsayan Kuman-Kıpçak sahası o zamandan itibaren İslâm kaynaklarında “Deşt-i Kıpçak” (Kıpçak Bozkırı) adıyla anılmıştır.'),
    'BEYANLI YAKLAŞIKLIK: TDV Astrahan/İdil ağzını adıyla anmaz; Deşt-i Kıpçak’ın Volga aşağı havzasını kapsadığı sonucu (İdil üzerinden batıya yönelme, 1054 ilk anış) yaklaşıklıktır. f=1054 İdil ağzına varış tarihi DEĞİL, Kıpçakların kaynaklı ilk anış yılıdır.')),
  P('1239-01-01', '1242-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('kipcaklar', '1238’de Rusya’nın kuzeyi tamamen Cengiz’in torunu Batu Han’ın eline geçti.', 'Başbuğ Köten kumandasındaki Kıpçak kuvvetleri Don ve Donets havzasında darmadağın oldu, kaçabilenler Macaristan’a sığındılar (1239).'),
    'BEYANLI YAKLAŞIKLIK: Astrahan adı geçmez; Kıpçak bozkırının Moğol istilâsı (1239 Köten yenilgisi) bu şehrin bulunduğu İdil aşağı havzasını da kapsar varsayıldı. Altın Orda künyesi f=1242; TDV Kıpçaklar kuruluşu 1241 verir (künye 1242): çelişki künyede.')),
  P('1242-01-01', '1281-01-01', 'altinorda', 'yil', J(
    T('kipcaklar', 'Kıpçak ülkesi Moğol istilâsına uğrayıp bölgede Altın Orda Devleti’nin kurulmasından sonra (1241) Kıpçaklar’ın hiçbir rolü ve kuvveti kalmadı.'),
    'altinorda künyesi f=1242-01-01 (TDV Kıpçaklar 1241: 1 yıllık fark künyede; öneri: altinorda f→1241). Mevcut zincir altinorda 1281-01-01 ile sürekli.')),
]);

// ---------------------------------------------------------------- Belh
const SAFFARI_900 = T('saffariler', 'İsmâil b. Ahmed, Amr’ı Belh yakınında mağlûp ve esir etti (15 Rebîülâhir 287 / 19 Nisan 900).');
sehir('Belh', '1198-01-01', 'bozkir1/yama_bozkir1.js (4 dilim) + bozkir2/yama_bozkir2.js (2 dilim)', [
  K('Belh', '0500-01-01'),
  K('Belh', '0557-01-01'),
  K('Belh', '0651-01-01'),
  K('Belh', '0663-01-01'),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('belh', 'Abbâsîler’in ilk dönemlerinde adı pek geçmeyen Belh’i Hârûnürreşîd döneminde (786-809) kumandan Ali b. Mâhân, âsi Râfi‘ b. Leys b. Nasr’a karşı üs olarak kullandı.'),
    'f=0750-01-01 yıl (Emevî→Abbâsî; abbasi künyesi f=0749-11-28). t=0821-05-06 tahiri-horasan künye f.')),
  P('0821-05-06', '0870-01-01', 'tahiri-horasan', 'yil', J(
    T('belh', 'Sonraları Abbâsîler’den bağımsız olarak Horasan’da hüküm süren Tâhirîler’in eline geçen şehir bu dönemde Bânîcûrî emîrlerinin idaresinde kaldı.', 'Ancak 870’te (veya 871) Ya‘kūb b. Leys tarafından şehirden çıkarıldı.'),
    'BEYAN: Belh fiilen Tâhirîlere bağlı Bânîcûrî emîrlerinin idaresindeydi (Dâvûd b. Abbas, 847); egemenlik Tâhirî’de alındı. t=870: TDV “870’te (veya 871)”, ilk yıl alındı.')),
  P('0870-01-01', '0900-04-19', 'saffari', 'gun', J(
    T('belh', 'Saffârîler’den Amr b. Leys bu bölgeyi egemenliği altına almasına rağmen Belh’in Ebû Dâvûd’un elinde kaldığı anlaşılmaktadır.', 'Amr b. Leys’in Belh civarında Sâmânîler’e esir düşmesi üzerine burası da onların eline geçti (900).'),
    SAFFARI_900,
    'BEYAN: Belh Bânîcûrî Ebû Dâvûd’un elinde kalmaya devam etti (Saffârî’ye tâbi/nominal). Bitiş günü TDV Saffârîler’in gün verdiği 19 Nisan 900 (bozkir2’deki 0900-01-07 = 287 H başı yerine; TDV Saffârîler günü esas).')),
  P('0900-04-19', '0999-01-01', 'samani', 'yil', J(K('Belh', '0900-01-07').kaynak,
    SAFFARI_900,
    'f: bozkir2’de 0900-01-07 (287 H 1 Muharrem, gün bilinmeyince ilk gün) idi; TDV Saffârîler gün verdiği için 900-04-19.')),
  K('Belh', '0999-01-01'),
  P('1040-05-23', '1041-01-01', 'buyuk-selcuklu', 'gun', J(
    T('belh', 'Dandanakan Savaşı (1040) sonunda geçici bir süre için Selçuklular’ın elinde kaldı;'),
    'f: bozkir2’deki Dandanakan günü (TDV Selçuklular; bkz. dilim 999-1040 kaynağı). t=1041-01-01: BEYANLI YAKLAŞIKLIK — Mevdûd döneminin (1041-1049) başı; “geçici” Selçuklu elinin bitiş günü kaynakta yok.')),
  P('1041-01-01', '1043-01-01', 'gazneli', 'yil', J(
    T('belh', 'sürekli Selçuklu egemenliğine ise Gazneliler’den Mevdûd döneminde girdi (1043).'),
    'BEYANLI YAKLAŞIKLIK: 1040-1043 arasında Belh’in Gazneli’ye dönüşü TDV’de “geçici Selçuklu → sürekli Selçuklu 1043” anlatımından çıkarım; ara geçiş günü yok.')),
  P('1043-01-01', '1157-04-26', 'buyuk-selcuklu', 'yil', J(
    T('belh', 'Alparslan’ın hükümdarlığı sırasında (1064-1072) oğlu Ayaz Belh’e vali oldu (1072).', 'Sultan Sencer döneminde (1118-1157) İmâdüddin Kamaç adında bir valinin yönettiği Belh parlaklığını korudu.'),
    T('sencer', 'Sencer 14 veya 24 Rebîülevvel 552 (26 Nisan veya 6 Mayıs 1157) tarihinde vefat etti'),
    'BEYAN: 1152’de Gurlular’dan Alâeddin Hüseyin Belh’i aldı, ertesi yıl Oğuzlar yağmaladı ve Mahmud Han’a itaat arz ettiler (TDV Belh); bu kısa el değişimleri ayrı dilim yapılmadı. t=1157-04-26: Sencer’in ölümü (TDV iki gün verir: 26 Nisan veya 6 Mayıs; ilki alındı). buyuk-selcuklu künyesi t=1157-01-01 → künye düzeltme önerisi: 1157-04-26.')),
  P('1157-04-26', '1198-01-01', 'karahitay', 'onyil', J(
    T('belh', 'Arkasından şehrin egemenliği Karahıtaylar’a geçti ve Gurlular’dan Bahâeddin Sâm b. Muhammed, Karahıtaylar’a bağlı Türk valisi ölünce burayı işgal etti (1198) ve Gurlu Devleti topraklarına kattı.'),
    T('karahitaylar', 'güneyde ise Belh, Tirmiz ve Hoten’e dayanıyordu.'),
    'BEYANLI YAKLAŞIKLIK: Belh’in Karahıtay’a geçiş tarihi TDV’de yok; f=1157-04-26 Büyük Selçuklu’nun fiilen sona erdiği gün (alt sınır). Karahıtay’ın 1198’e kadar Belh’te dolaysız ya da vasal Türk valisiyle hâkim olduğu TDV Belh’ten okunur.')),
]);

// ---------------------------------------------------------------- Buhara
sehir('Buhara', '1000-01-01', 'bozkir2/yama_bozkir2.js (4 dilim) + bozkir3/yama_bozkir3.js (7 dilim)', [
  K('Buhara', '0500-01-01'),
  K('Buhara', '0709-01-01'),
  K('Buhara', '0750-01-01', { t: '0821-05-06' }),
  P('0821-05-06', '0873-08-01', 'tahiri-horasan', 'ay', J(K('Buhara', '0821-05-06').kaynak,
    T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).'),
    'bozkir3’te t=0873-01-01 idi; TDV Saffârîler Tâhirî idaresinin sonunu Ağustos 873 olarak verdiğinden ay hassasiyetiyle 873-08-01. tahiri-horasan künyesi t=0873-01-01 → künye düzeltme önerisi 873-08-01.')),
  P('0873-08-01', '0874-01-01', 'saffari', 'ay', J(K('Buhara', '0873-01-01').kaynak, 'f: bozkir3’te 0873-01-01; Tâhirî sonu ile hizalamak için 873-08-01.')),
  P('0874-01-01', '0992-05-07', 'samani', 'yil', J(K('Buhara', '0874-01-01').kaynak,
    K('Buhara', '0874-10-16').kaynak,
    'ÇAKIŞMA ÇÖZÜMÜ: bozkir3 Buhara’ya özgü TDV Buhara md. (260/874 İsmâil Buhara valisi: 260 H ∩ 874 → 874-01-01) ile bozkir2’nin TDV Sâmânîler (261/874-75 ferman: 874-10-16) iki ayrı olaydır; Buhara şehri için valilik günü alındı, ferman günü ic_not.')),
  K('Buhara', '0992-05-07'),
  K('Buhara', '0992-08-18'),
  K('Buhara', '0999-10-14'),
]);

// ---------------------------------------------------------------- Bâmiyan
const BAMIYAN_GAZNE = 'ABİ MERKEZ: Gazne — Bâmiyân Gazne’nin kuzeybatısındadır ve kaderini Gazne ile paylaşmıştır: ';
sehir('Bâmiyan', '1281-01-01', 'bozkir2/yama_bozkir2.js (1 dilim)', [
  P('0500-01-01', '0869-01-01', BOS, 'yil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Bâmiyân’ın 500-869 sahibi: ' + T('saffariler', 'hâkimiyet sahasını Gazne, Gerdiz ve Kabûl-Bâmiyân bölgesine kadar genişletti'),
    T('kabil--afganistan', 'Kâbil’de Kuşan Devleti’nin ve arkasından hüküm süren Kâbilşâhîler hânedanının yıkılmasından sonra Türkşâhîler dönemi başladı.'),
    'Bâmiyân’ı adıyla bir devlete bağlayan 869 öncesi TDV tanıklığı bulunamadı (Eftalit/Türk Şâhî/Toharistan Yabguluğu çıkarımı yazılmadı); f=0500-01-01 UFUK SINIR İŞARETİDİR.')),
  P('0869-01-01', '0900-04-19', 'saffari', 'yil', J(
    T('saffariler', 'hâkimiyet sahasını Gazne, Gerdiz ve Kabûl-Bâmiyân bölgesine kadar genişletti'),
    T('saffar-yakub-b-leys', 'Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).'),
    SAFFARI_900,
    'BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Saffârî’ye geçiş yılı doğrudan okunmadı; 255/869 seferi (Gazne, Kâbil) sonrası bölge Saffârî genişlemesinde sayıldı; 255 H ∩ 869 → 869-01-01. t = Amr’ın Belh yakınında esir düştüğü gün (TDV Saffârîler).')),
  P('0900-04-19', '0963-01-12', 'samani', 'yil', J(BAMIYAN_GAZNE + T('gazne', 'Şehrin X. yüzyılda Sâmânîler’in hâkimiyetinde bulunduğu anlaşılmaktadır.'),
    'BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Sâmânî/Lavik idaresindeki durumu doğrudan okunmadı; Gazne zinciri devralındı. t=963-01-12: Alp Tegin’in Gazne’yi alış günü (TDV Gazne).')),
  P('0963-01-12', '1145-06-24', 'gazneli', 'gun', J(BAMIYAN_GAZNE + T('gazne', 'Sâmânîler’in hizmetinde bir Türk kumandanı olan Alp Tegin 13 Zilhicce 351’de (12 Ocak 963) Gazne’yi ele geçirdi.'),
    T('behram-sah', 'Behram Şah Gazne’nin kuzeybatısındaki Bâmiyân Kalesi’ne sığındı, Arslanşah da Gazne’ye hâkim oldu.'),
    'BEYANLI YAKLAŞIKLIK: Bâmiyân’ın Gazneli idaresine giriş günü ve Selçuklu vasallığı (Sencer 1117, 1135 Gazne) okunmadı; Behram Şah’ın (1117-1157) Bâmiyân Kalesi’ne sığınması bölgenin Gazneli ülkesinde olduğunu gösterir. t = Gurlu Bâmiyân kolunun kuruluşu (TDV Gurlular 540/1145).')),
  K('Bâmiyan', '1145-06-24'),
  P('1215-01-01', '1221-11-26', 'harizmsah', 'yil', J(BAMIYAN_GAZNE + T('harizmsahlar', 'Aynı yıl Gazne’yi aldı ve oğlu Celâleddin’e verdi'),
    T('gurlular', 'Bâmiyân ve Tohâristan Kolu Fahreddin Mesud 540 (1145) Şemseddin Muhammed 558 (1163) Bahâeddin Sâm 588 (1192) Celâleddin Ali 602-612 (1206-1215)'),
    'BEYANLI YAKLAŞIKLIK: Bâmiyân kolunun 1215’te Hârizmşah’a geçişi doğrudan okunmadı; kolun son hükümdarı 612/1215’te biter. t = Celâleddin’in Gazne’den kaçışı (Gazne zinciriyle aynı gün).')),
  P('1221-11-26', '1260-01-01', 'mogol-imparatorlugu', 'yil', J(BAMIYAN_GAZNE + T('gazne', 'Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış ve eski canlılığını kaybetmiştir.'),
    T('kabil--afganistan', 'Cengiz Han’ın saldırısı ile de harabeye döndü.'),
    'BEYANLI YAKLAŞIKLIK: Bâmiyân adı geçmiyor. t=1260-01-01: mogol-imparatorlugu künye t; TDV Çağatay’a göre Algu Afganistan’ı 1260’ta aldı (sonraki dilim).')),
  P('1260-01-01', '1281-01-01', 'cagatay', 'yil', J(BAMIYAN_GAZNE + T('cagatay-hanligi', 'Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu', 'Çağatay hanı oldu (1260-1266)'),
    T('gazne', 'Ardından Çağataylılar yöreye hâkim oldular.'),
    'BEYANLI YAKLAŞIKLIK: Bâmiyân adı geçmiyor; Afganistan’ın Çağatay’a geçişi 1260-1266 (Algu) alınmıştır. Mevcut zincir 1281’de __BOSLUK__ (1281→1893) ile başlıyor: mevcut kayıttaki delik ayrı bir borçtur.')),
]);

// ---------------------------------------------------------------- Cizzah
const CIZZAH_SMK = 'ABİ MERKEZ: Semerkant — Üsrûşene Semerkant’ın doğusundadır, Mâverâünnehir’de aynı egemenler zincirinde yer alır: ';
sehir('Cizzah', '1281-01-01', 'bozkir4/yama_bozkir4.js (1 dilim)', [
  P('0500-01-01', '0680-01-01', BOS, 'onyil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Dîzek/Üsrûşene 500-680 sahibi: ' + T('usrusene', 'Yerli halkı İran kökenli olmasına rağmen tarihin en eski dönemlerinden itibaren Üsrûşene bölgesi Orta Asyalı kavimlerin ve özellikle Türkler’in idaresi altında kaldı, Türkler zaman içinde nüfus bakımından da ağırlık kazandı.'),
    'TDV Çin kaynaklarındaki “Doğu Cha’o” adını verir ama 500-680 egemenini tek devlete bağlamaz; f=0500-01-01 UFUK SINIR İŞARETİDİR.')),
  K('Cizzah', '0680-01-01', { t: '0893-03-23' }),
  P('0893-03-23', '0999-10-14', 'samani', 'yil', J(
    T('usrusene', '280 (893) yılında Sâmânî topraklarına katılan Üsrûşene daha sonra Karahanlılar’ın hâkimiyeti altına girerek'),
    'f: TDV Üsrûşene 280 (893); 280 H = 893-03-23→894-03-13 ∩ 893 → kesişimin ilk günü 893-03-23 (bozkir4’teki sınır maddesi 893-01-01 idi: 81 gün fark). t=999-10-14: Buhara’nın Karahanlı’ya geçtiği gün (ABİ MERKEZ Buhara, Sâmânî başşehri).')),
  P('0999-10-14', '1041-01-01', 'karahanli', 'yil', J(
    T('usrusene', 'Üsrûşene daha sonra Karahanlılar’ın hâkimiyeti altına girerek Buhara, Semerkant, Soğd ve Serahs gibi bir İslâmî ilimler merkezi haline getirildi'),
    T('semerkant', 'Semerkant 389’da (999) tekrar Karahanlılar’ın eline geçti.'),
    'BEYANLI YAKLAŞIKLIK: Üsrûşene’nin Karahanlı’ya geçiş günü doğrudan yok; ' + CIZZAH_SMK.replace(': ', ' (Buhara 999-10-14, TDV Sâmânîler).'))),
  P('1041-01-01', '1141-09-09', 'bati-karahanli', 'yil', J(CIZZAH_SMK + T('semerkant', 'V. (XI.) yüzyılın ilk yarısında hânedan mensuplarının mücadelelerine sahne olan şehir devletin 1046’da ikiye bölünmesi sırasında Batı Karahanlılar’da kaldı.'),
    'BEYANLI YAKLAŞIKLIK: Üsrûşene doğrudan anılmıyor; bati-karahanli künye f=1041 (TDV Semerkant bölünmeyi 1046 verir: künyede 5 yıl fark, künye düzeltme önerisi).')),
  P('1141-09-09', '1211-01-01', 'karahitay', 'gun', J(
    T('usrusene', 'bunu Karahıtaylar, Moğollar, Timurlular, Özbekler ve Türkistan hanlıkları egemenliği takip etti.'),
    T('karahitaylar', 'Katvân savaşında ağır bir bozguna uğrattı (5 Safer 536 / 9 Eylül 1141).'),
    'BEYANLI YAKLAŞIKLIK: ' + CIZZAH_SMK + 'Katvân sonrası Karahıtay Mâverâünnehir’e (Semerkant, Buhara) hâkim oldu; Üsrûşene adıyla Karahıtay tanıklığı yalnız sıra olarak (TDV Üsrûşene). t=1211-01-01: karahitay künye t (Küçlüğ’ün Gürhan’ı devirişi, TDV Karahıtaylar); Semerkant’ın Hârizmşah’a geçişi bu aralıkta (Buhara 1207, Semerkant mevcut zincirde 1212) — BEYAN.')),
  P('1211-01-01', '1220-03-01', 'harizmsah', 'yil', J(CIZZAH_SMK + T('semerkant', 'Semerkant XIII. yüzyılın başlarında Hârizmşahlar’ın egemenliği altına girdi.', 'Muharrem 617 / Mart 1220'),
    'BEYANLI YAKLAŞIKLIK (Üsrûşene adı geçmez).')),
  P('1220-03-01', '1227-01-01', 'mogol-imparatorlugu', 'ay', J(CIZZAH_SMK + T('semerkant', 'Buhara’dan sonra Semerkant üzerine yürüyen Cengiz Han kuşatmanın dördüncü günü teslim olmak zorunda kalan şehri tahrip etti (Muharrem 617 / Mart 1220).'),
    'BEYANLI YAKLAŞIKLIK (Üsrûşene adı geçmez); f: Mart 1220 ay hassasiyeti, ayın 1’i. t=1227-01-01: Çağatay künye f.')),
  P('1227-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', '1227-1370 yılları arasında Mâverâünnehir, Yedisu ve Doğu Türkistan’da hüküm süren bir hânedan.'),
    'BEYANLI YAKLAŞIKLIK (Üsrûşene adı geçmez; Mâverâünnehir Çağatay payı). Mevcut zincir cagatay 1281-01-01 ile sürekli.')),
]);

// ---------------------------------------------------------------- Gazne
sehir('Gazne', '1281-01-01', 'bozkir2/yama_bozkir2.js (4 dilim)', [
  P('0500-01-01', '0557-01-01', 'eftalit', 'yil', J(
    T('gazne', 'Kuşanlar’ın mirasçısı Akhunlar da (Eftalitler) Gazne’yi iki yüzyıl kadar idareleri altında bulundurdular. Sâsânî-Göktürk iş birliği sonunda Akhun Devleti yıkılınca Gazne mahallî siyasî teşekküllerce idare edildi.'),
    'f=0500-01-01 UFUK SINIR İŞARETİDİR. t=0557-01-01: Belh zincirindeki Eftalit sonu (eftalit künyesi t=0560-01-01); TDV Gazne yıl vermez, “Sâsânî-Göktürk iş birliği” sonrası (BEYANLI YAKLAŞIKLIK).')),
  P('0557-01-01', '0869-01-01', BOS, 'yuzyil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Gazne 557-869 sahibi: ' + T('gazne', 'Gazne mahallî siyasî teşekküllerce idare edildi.', 'VIII. yüzyıl başında Gazne’yi ziyaret eden Huei-ch’ao burada birçok ibadethânenin bulunduğunu, şehrin Sha-Tarkan adlı bir Türk tarafından yönetildiğini söyler.'),
    T('saffar-yakub-b-leys', 'Zemindâver ve Zâbülistan hâkimi Zunbil’in yanına kaçtı.'),
    'Yerel teşekküller (Sha-Tarkan, Zunbiller/Zâbülistan hâkimleri) için atlas kimliği ve künyesi yok; Kâbil’in Türkşâhî kimliğini bu dilime taşımak kaynaksız yaklaşıklık olur → boşluk. t=0869-01-01: Ya‘kūb’un Gazne’yi alışı (255/869).')),
  P('0869-01-01', '0900-04-19', 'saffari', 'yil', J(
    T('saffar-yakub-b-leys', 'Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).'),
    T('gazne', 'IX. yüzyılda ise Saffârî nüfuzu Gazne kapılarına kadar yayıldı.'),
    SAFFARI_900, '255 H ∩ 869 → 869-01-01 (255 H 868-12-20→869-12-09). t: Amr’ın esir düştüğü gün.')),
  P('0900-04-19', '0963-01-12', 'samani', 'yil', J(
    T('gazne', 'Şehrin X. yüzyılda Sâmânîler’in hâkimiyetinde bulunduğu anlaşılmaktadır.', 'Alp Tegin’in yerine geçen oğlu Ebû İshak İbrâhim zamanında (963-966) Levik hânedanından Ebû Ali Gazne’yi işgal etti.'),
    'BEYANLI YAKLAŞIKLIK: Saffârî→Sâmânî geçiş günü ve Levik (Lavik) hânedanının (Sâmânî vasalı) idaresi okunmadı; f=900-04-19 Horasan’ın Sâmânî’ye geçtiği gün (TDV Saffârîler) alt sınırdır.')),
  P('0963-01-12', '1157-01-01', 'gazneli', 'gun', J(
    T('gazne', 'Sâmânîler’in hizmetinde bir Türk kumandanı olan Alp Tegin 13 Zilhicce 351’de (12 Ocak 963) Gazne’yi ele geçirdi.'),
    K('Gazne', '0963-01-01').kaynak,
    'f: bozkir2’de 0963-01-01 (ay hassasiyeti); TDV Gazne günü verdiği için 963-01-12. gazneli künyesi f=0963-01-01 → sorun yok (f künyeden sonra).')),
  P('1157-01-01', '1173-01-01', 'horasan-oguz-hakimiyeti', 'yil', J(
    T('gazne', 'Şehir bir ara Oğuzlar’ın eline geçti. Daha sonra Gurlular’dan Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı.'),
    K('Gazne', '1157-01-01').kaynak,
    'bozkir2’de bu dilim __BOSLUK__ idi (Oğuz kimliği yoktu); bu kümenin kunye_yeni.js’inde horasan-oguz-hakimiyeti künyesi önerildi. BEYAN: Oğuzların Gazne’yi alış yılı TDV’de yok; f=1157-01-01 Gazneli Hüsrev Şah’ın Gazne’yi terk yılı (bozkir2 sınır maddesi).')),
  K('Gazne', '1173-01-01'),
  K('Gazne', '1215-01-01'),
  P('1221-11-26', '1260-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('gazne', 'Moğollar Ögedey Han kumandasında Gazne önlerine geldiler. Ögedey halkı acımasızca kılıçtan geçirdi', 'Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış ve eski canlılığını kaybetmiştir.'),
    T('harizmsahlar', 'Celâleddin'),
    'f=1221-11-26: Celâleddin’in Gazne’den ayrıldığı/İndus yenilgisi (bozkir2’deki dilim sonu). t=1260-01-01: mogol-imparatorlugu künye t; TDV Gazne “Kısa süren Moğol fırtınasından sonra… Ardından Çağataylılar” (yıl vermez). BEYAN: TDV Gazne’de Ögedey’in komutanlığı yazılır (tarihsel olarak Cengiz Han’ın Afganistan seferi 1221).')),
  P('1260-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', 'Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu', 'Çağatay hanı oldu (1260-1266)'),
    T('gazne', 'Ardından Çağataylılar yöreye hâkim oldular.'),
    'Mevcut zincir cagatay 1281-01-01 ile sürekli.')),
]);

// ---------------------------------------------------------------- Herat
sehir('Herat', '1175-01-01', 'bozkir2/yama_bozkir2.js (2 dilim)', [
  P('0500-01-01', '0557-01-01', 'eftalit', 'yil', J(
    T('herat', 'İslâm fetihlerinden biraz önce Orta Asya’dan gelen Eftalitler’in (Akhunlar) hâkimiyeti altındaydı.'),
    'f=0500-01-01 UFUK SINIR İŞARETİDİR; t=0557-01-01: Belh/Gazne zincirindeki Eftalit sonu (TDV Herat “biraz önce” der; yıl yok → BEYANLI YAKLAŞIKLIK).')),
  P('0557-01-01', '0651-01-01', 'sasani', 'yil', J(
    'BEYANLI YAKLAŞIKLIK: TDV Herat Eftalit sonrası ve fetih arası egemeni adıyla söylemez; ABİ MERKEZ: Belh (Horasan marzbanlığı) — ' + T('belh', 'Sâsânîler döneminde (226-651) burada Horasan'),
    T('herat', 'Hz. Osman’ın Basra valisi Abdullah b. Âmir’in gönderdiği Ahnef b. Kays idaresindeki ordu Horasan’ı 31 (652) yılında fethedince Herat da sulh yoluyla müslümanların eline geçti'),
    'BEYAN: fetih TDV Herat’ta 31 (652); sasani künyesi t=0651-01-01 olduğundan t=651-01-01 (künye düzeltme önerisi: Herat için 652). ' + RASIDIN_NOT)),
  P('0651-01-01', '0661-07-29', 'hulefa-yi-rasidin', 'yil', J(
    T('herat', 'Hz. Osman’ın Basra valisi Abdullah b. Âmir’in gönderdiği Ahnef b. Kays idaresindeki ordu Horasan’ı 31 (652) yılında fethedince Herat da sulh yoluyla müslümanların eline geçti; ancak Emevîler’in ilk zamanlarında meydana gelen iç savaşlar sırasında elden çıktı ve 41’de (661) yeniden fethedildi.'),
    'f=0651-01-01 yıl yaklaşımı (fetih 31/652); t=0661-07-29 hulefa künye t (TDV: 41/661’de yeniden fethedildi; “elden çıktı” dönemi ayrı dilim yapılmadı — BEYAN).')),
  P('0661-07-29', '0750-01-01', 'emevi', 'yil', J(
    T('herat', 'Şehir, Horasan bölgesiyle beraber Abdülmelik b. Mervân zamanında Abdullah b. Hâzim’den geri alındı (73/692).', 'Herat, Abbâsî Devleti’nin kurulmasıyla sonuçlanan karışıklıklar sırasında Arap kabileleri arasında meydana gelen çatışmalara sahne oldu.'),
    'BEYAN: İbn Hâzim (Zübeyrî) dönemi 64-73/684-692 ve İbnü’l-Eş‘as 702 kısa kesintileri ayrı dilim yapılmadı.')),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('herat', 'Peygamberlik iddiasında bulunduğu rivayet edilen Üstadsîs’in isyanına Heratlılar da katıldı ve isyan güçlükle bastırıldı (150/767).', 'Herat 204’te (819-20), Abbâsîler’in Horasan valisi Gassân b. Abbâd tarafından Sâmânîler’den Ebü’l-Fazl İlyâs b. Esed’in, onun ölümünden sonra da oğlu Muhammed’in idaresine verildi.'),
    'f=0750-01-01 yıl (abbasi künye f=749-11-28). BEYAN: 819-20’de Sâmânî ailesinden İlyâs b. Esed Abbâsî valisi olarak atandı (Sâmânî devleti sonradan kuruldu; dilim sahibi Abbâsî).')),
  P('0821-05-06', '0867-01-11', 'tahiri-horasan', 'yil', J(
    T('herat', 'Tâhirîler ve Saffârîler’in hâkimiyetinin ardından 297’de (909) Ebû Nâsır Ahmed b. İsmâil’in eliyle Sâmânîler’in hâkimiyetine geçen şehirde'),
    T('saffar-yakub-b-leys', 'Daha sonra Sîstan ve Afganistan’ın bir kısmını itaat altına alan Ya‘kūb, Tâhirîler’in yönetimindeki Herat’ı zaptetti, ardından Bûşenc’e hâkim oldu.', 'Ya‘kūb da Zerenc’de kendi adına hutbe okutarak bağımsızlığını ilân etti (253/867).'),
    'BEYANLI YAKLAŞIKLIK: Herat’ın Ya‘kūb’a geçiş yılı TDV’de yok; “Bûşenc’ten önce” ve 253/867 bağımsızlık ilanı öncesi → 867-01-11 (253 H = 867-01-11→868-01-01, ∩ 867 ilk günü; Herat’ın alışı en geç bu tarihte). tahiri-horasan künye f=0821-05-06.')),
  P('0867-01-11', '0909-09-20', 'saffari', 'yil', J(
    T('saffar-yakub-b-leys', 'Tâhirîler’in yönetimindeki Herat’ı zaptetti'),
    T('herat', 'Tâhirîler ve Saffârîler’in hâkimiyetinin ardından 297’de (909) Ebû Nâsır Ahmed b. İsmâil’in eliyle Sâmânîler’in hâkimiyetine geçen şehirde'),
    'BEYANLI YAKLAŞIKLIK: Herat’ın Saffârî’den Sâmânî’ye geçişi TDV Herat’ta 297/909 (297 H = 909-09-20→910-09-09; ∩ 909 ilk günü 909-09-20); Amr’ın 900’deki esareti sonrası Herat bir süre Tâhirî/yerel kaldıysa bu dilim sahibini yaklaşık verir; dilim sonu TDV Herat’tan alındı (bozkir2’de 900-01-07 idi).')),
  P('0909-09-20', '0999-01-01', 'samani', 'yil', J(
    T('herat', 'Sâmânîler’in Horasan’a vali olarak gönderdikleri Gazneli Sebük Tegin’le beraber Türkler’in hâkimiyet devri başladı (384/994).'),
    K('Herat', '0900-01-07').kaynak,
    'f: bozkir2’de 0900-01-07 idi; TDV Herat’ın şehre özgü tarihi 297/909.')),
  K('Herat', '0999-01-01', { t: '1040-05-23' }),
  P('1040-05-23', '1041-01-01', 'buyuk-selcuklu', 'gun', J(
    T('herat', 'Herat Dandanakan Savaşı’ndan (431/1040) sonra Sîstan ile birlikte Selçuklu ailesinden Mûsâ Yabgu’ya verildi.'),
    'f: bozkir2’deki Dandanakan günü (TDV Selçuklular). t=1041-01-01 Mevdûd’un başlangıcı (BEYANLI YAKLAŞIKLIK).')),
  P('1041-01-01', '1064-01-01', 'gazneli', 'onyil', J(
    T('herat', 'Mevdûd zamanında (1041-1049) tekrar Gazneli hâkimiyetine girdi. Selçuklular şehri ele geçirmek için her yıl yeni bir saldırı düzenledilerse de ancak Sultan Alparslan zamanında almayı başardılar'),
    T('belh', 'Alparslan’ın hükümdarlığı sırasında (1064-1072)'),
    'BEYANLI YAKLAŞIKLIK: Selçuklu’nun Herat’ı alış yılı yok; Alparslan’ın hükümdarlığının başı (1064) alt sınır alındı; gerçek devir 1064-1072 arasıdır.')),
  P('1064-01-01', '1157-04-26', 'buyuk-selcuklu', 'onyil', J(
    T('herat', 'Herat Sencer’in ölümünden (552/1157) sonra Oğuzlar’ın hâkimiyetine girdi.'),
    T('sencer', 'Sencer 14 veya 24 Rebîülevvel 552 (26 Nisan veya 6 Mayıs 1157) tarihinde vefat etti'),
    'f: BEYANLI YAKLAŞIKLIK (yukarıdaki dilim). t=1157-04-26: Sencer’in ölümü (TDV iki gün verir; ilki).')),
  P('1157-04-26', '1164-01-01', 'horasan-oguz-hakimiyeti', 'yil', J(
    T('herat', 'Herat Sencer’in ölümünden (552/1157) sonra Oğuzlar’ın hâkimiyetine girdi. Oğuzlar şehirde kendi emîrleri adına hutbe okuttular. Emîr Ay Tegin’in ölümü üzerine ise Herat halk tarafından Sencer’in eski kumandanlarından Müeyyed Ay-aba’ya teslim edildi (559/1164).'),
    '559 H = 1163-11-30→1164-11-18; ∩ 1164 → 1164-01-01.')),
  P('1164-01-01', '1175-01-01', 'muayyed-ay-aba-emirligi', 'yil', J(
    T('herat', 'Herat Sencer’in ölümünden (552/1157) sonra Oğuzlar’ın hâkimiyetine girdi. Oğuzlar şehirde kendi emîrleri adına hutbe okuttular. Emîr Ay Tegin’in ölümü üzerine ise Herat halk tarafından Sencer’in eski kumandanlarından Müeyyed Ay-aba’ya teslim edildi (559/1164).', 'Herat 571’de (1175-76) Gurlular’ın'),
    T('mueyyed-ay-aba', 'Bu olayın ardından Mahmud Han, Müeyyed Ay-aba’yı Nîşâbur ve Tûs şehirleriyle yörelerinin emirliğine tayin etti (555/1160).'),
    'BEYAN: Müeyyed Ay-aba 569/1174’te (9 Zilhicce 569 / 11 Temmuz 1174) öldü; ölümünden Gurlu fethine (571/1175-76) kadar Herat’ın sahibi TDV’de yok → emirlik varisleri (Doğan Şah, Sencer Şah; TDV Nîşâbur) yaklaşık alındı. mevcut zincir gurlu 1175-01-01 (TDV 571 = 1175-07-?..1176-07; yıl).')),
]);

// ---------------------------------------------------------------- Hotan
sehir('Hotan', '1281-01-01', 'bozkir3/yama_bozkir3.js (2 dilim)', [
  K('Hotan', '0500-01-01'),
  K('Hotan', '0649-01-19'),
  P('0670-04-25', '0692-11-14', 'tibet-imparatorlugu', 'ay', J(
    W('舊唐書/卷5', '吐蕃寇陷白州等一十八州，又與於闐合眾襲龜茲撥換城，陷之。罷安西四鎮。'),
    W('舊唐書/卷198', '其後吐蕃大入，焉耆已西四鎮城堡，並為賊所陷。'),
    'BEYANLI YAKLAŞIKLIK: Hotan’ın Tibet idaresine giriş günü ayrı yok; Dört Garnizon’un kaldırılışı (670-04) ve Tibet-Hotan ittifakı. t=692-11-14: Jiu Tang 198 “長壽元年…克復龜茲、於闐等四鎮” (Kuça zinciriyle aynı gün). Ay-güneş → Jülyen: Kuça zinciri (bozkir3 _cal.py) ±1-2 gün.')),
  P('0692-11-14', '0791-01-01', 'tang', 'ay', J(
    W('舊唐書/卷198', '則天臨朝，長壽元年，武威軍總管王孝傑、阿史那忠節大破吐蕃，克復龜茲、於闐等四鎮'),
    W('舊唐書/卷6', '冬十月，武威軍總管王孝傑大破吐蕃，復龜茲、于闐、疏勒、碎葉鎮。'),
    W('舊唐書/卷196下', '自是安西阻絕，莫知存否。'),
    'BEYAN: t=0791-01-01 yıl (貞元七年 ≈ 791; yıl numarası sayfa bağlamından, ay/gün yok): Beiting 790’da düştü, Anxi (Dört Garnizon) ile bağ 791’de koptu; Hotan’ın fiilî düşüş yılı okunmadı. TDV Hoten 744’ten itibaren Hoten’i Uygur Kağanlığı sınırlarında sayar → bu yüzden ÇELİŞKİ: aşağıdaki dilim TDV’yi (esas) izler; 744-791 arası Çin kaynağında Tang garnizonu görünür.')),
  P('0791-01-01', '0840-01-01', 'uygur-kaganligi', 'yil', J(
    T('hoten', '744 yılında kurulan Büyük Uygur Kağanlığı sınırlarına dahil olan Hoten, bu devirde ve özellikle bu devletin 840 yılında Kırgızlar tarafından yıkılması üzerine bölgenin yoğun biçimde Uygur göçmenlerince iskân edilmesinden sonra tamamen Türkleşti'),
    'ÇELİŞKİ BEYANI: TDV Hoten 744-840 boyunca Hoten’i Uygur Kağanlığı içinde sayar; Çin kaynakları (Jiu Tang) 744-791 Tang Anxi garnizonunu, 791 sonrası Anxi kopukluğunu anlatır ve Tibet idaresini sayfalarda açmaz. TDV esas alındı: 791-840 Uygur Kağanlığı; 744-791 Tang yazıldı (Tang 198/6 Anxi garnizonu). Tibet’in 791-840 Hotan idaresi (Çin/Tibet kaynakları) okunmadı.')),
  P('0840-01-01', '1006-01-01', 'khotan', 'yil', J(
    T('hoten', 'Hoten hükümdarlarının kendilerini Türkler’in ve Tibetliler’in beyi olarak tanıttıkları, Çin ve Tibet sınırında oturdukları, nahiyelerde sorumlu beylerin bulunduğu, bölgeden 70.000 muharip çıktığı ve ayrıca Hoten nehrinden yeşim taşı elde edildiği verilen bilgiler arasındadır'),
    T('hoten', 'Hoten daha sonra Karahıtaylar’ın eline geçti.'),
    'BEYANLI YAKLAŞIKLIK: Hudûdü’l-âlem’in (X. yy) anlattığı yerel Hoten hükümdarları khotan künyesine bağlandı (khotan künyesi f=0500, t=1006); 840 f: Uygur Kağanlığı’nın yıkılışı (TDV Hoten); t=1006: khotan künye t (TDV Karahanlılar 1006 olayları).')),
  P('1006-01-01', '1041-01-01', 'karahanli', 'yil', J(
    T('hoten', 'XI. yüzyılın başlarında tamamen Karahanlılar’ın idaresi altında bulunan Hoten, Karahanlı Hükümdarı Yûsuf Kadır Han’dan sonra üç oğlundan Şerefüddevle Ebû Şücâ‘ Arslan Han’ın idaresine bırakıldı.'),
    T('kasgar', 'Kâşgar’da hüküm süren ilk müslüman Türk hükümdarı Karahanlılar’dan Abdülkerim Satuk Buğra Han’dır (ö. 344/955).'),
    'f=1006-01-01: khotan künye t (TDV Karahanlılar 1006 olayları; TDV Hoten yalnız “XI. yüzyılın başlarında” der: BEYANLI YAKLAŞIKLIK, onyıl). t=1041-01-01 karahanli künye t.')),
  P('1041-01-01', '1130-01-01', 'dogu-karahanli', 'yil', J(
    T('hoten', 'XI. yüzyılın başlarında tamamen Karahanlılar’ın idaresi altında bulunan Hoten, Karahanlı Hükümdarı Yûsuf Kadır Han’dan sonra üç oğlundan Şerefüddevle Ebû Şücâ‘ Arslan Han’ın idaresine bırakıldı.'),
    T('karahitaylar', 'Yeh-lü Ta-şi kumandasındaki Karahıtay ordusu 1128 yılında Balasagun, Hoten ve Kâşgar bölgesine ilk girdiğinde Doğu Karahanlı Hükümdarı Arslan Han Ahmed b. Hasan tarafından mağlûp edildi.'),
    'BEYANLI YAKLAŞIKLIK: Hoten’in 1041 bölünmesinde Doğu Karahanlı payına düştüğü (Kâşgar-Hoten doğu kanadı) TDV Karahıtaylar’ın “Doğu Karahanlı Hükümdarı… Hoten ve Kâşgar bölgesi” ifadesinden çıkarım.')),
  P('1130-01-01', '1211-01-01', 'karahitay', 'yil', J(
    T('hoten', 'Bölgeye ilk defa 1128 yılında hücum eden Karahıtaylar Hoten ile birlikte İmil, Balasagun ve Kâşgar’a da saldırdılar. Bu ilk akın Arslan Han Ahmed tarafından durdurulduysa da iki yıl sonra bu bölgelerin tamamı Karahıtaylar’ın eline geçti.'),
    T('karahitaylar', 'Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp başşehri Balasagun olan Karahıtay Devleti’ni kurdu (1130).'))),
  P('1211-01-01', '1218-01-01', 'kuclug-karahitay', 'yil', J(
    T('hoten', 'Güçlüg ondan daha erken davranıp Gürhan’ı esir aldı ve Karahıtaylar’ın başına geçti (1211).', 'Müslümanları bu durumdan Cengiz Han’ın Cebe Noyan kumandasında gönderdiği Moğol kuvvetleri kurtardı (1218).'))),
  P('1218-01-01', '1227-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('kasgar', 'Cengiz Han’ın Cebe Noyan kumandasında gönderdiği kuvvetlerin şehri ele geçirmesiyle (1218) birlikte ibadetler serbest bırakıldı.'),
    T('hoten', 'Ögedey Han zamanında (1227-1241) Türkistan, Mâverâünnehir, Otrar, Uygur ülkesi, Hoten, Kâşgar, Cend, Hârizm ve Fergana toprakları Vezir Mahmud Yalavaç ve oğlu Mesud Bey’in idaresine bırakılmıştı.'),
    'BEYAN: 1218 Kâşgar için verilir; Hoten TDV Hoten’de Cebe’nin kurtarışıyla aynı cümlede (1218).')),
  P('1227-01-01', '1270-01-01', 'cagatay', 'yil', J(
    T('kasgar', 'Cengiz Han, Moğol töresince ülkesini oğulları arasında taksim edince Kâşgar Çağatay Han’ın payına düştü (1227).'),
    T('hoten', 'Kubilay ile Çağatay Hükümdarı Barak Han arasındaki mücadeleler sırasında Hoten Çağatay kuvvetlerince yağmalandı (1266).'),
    'BEYANLI YAKLAŞIKLIK: Hoten adıyla Çağatay payı yalnız Kâşgar için okunur; Hoten 1227-1270 arası Çağatay ve Moğol Büyük Han (Mahmud Yalavaç bölgesi) arasında gidip geldi.')),
  P('1270-01-01', '1281-01-01', 'yuan-hanedani', 'onyil', J(
    T('hoten', '1270 yıllarında Hoten Kubilay Han’a, Yârkend ise Çağatay Hükümdarı Kaydu Han’a bağlı idi.'),
    'BEYANLI YAKLAŞIKLIK: “1270 yıllarında” on yıl düzeyinde; başlangıç ve bitiş günü yok (f=1270-01-01 onyıl başı). yuan-hanedani künyesi f=1260-01-01. Mevcut zincir cagatay 1281-01-01.')),
]);

// ---------------------------------------------------------------- Kâbil
sehir('Kâbil', '1281-01-01', 'bozkir2/yama_bozkir2.js (4 dilim) + hint1/yama_hint1.js (3 dilim)', [
  K('Kâbil', '0500-01-01'),
  K('Kâbil', '0665-01-01'),
  K('Kâbil', '0850-01-01'),
  P('0869-01-01', '0900-04-19', 'saffari', 'yil', J(
    T('kabil--afganistan', 'Müslümanların Kâbil ve civarında tam hâkimiyet kurmaları Sicistan’daki Saffârîler dönemine rastlar.'),
    T('saffar-yakub-b-leys', 'Ya‘kūb bu sırada Gazne’yi aldı, Zâbülistan’ı ele geçirip Gerdiz’i haraca bağladı ve Kâbil’e kadar ilerledi (255/869).'),
    SAFFARI_900,
    'BEYAN: hint1’deki 0850-0869 Hindu Şâhî dilimi 869’da biter (Majumdar 870); Saffârî egemenliğinin Kâbil’de ne kadar sürdüğü TDV’de yok; t=900-04-19 Saffârîlerin Horasan’ı yitirdiği gün (yaklaşıklık).')),
  P('0900-04-19', '0986-05-13', 'hindu-sahiler', 'yil', J(
    'BEYANLI YAKLAŞIKLIK: Kâbil’in Saffârî’den çıkışı ve Hindu Şâhî’ye dönüşü TDV’de yok; ' + K('Kâbil', '0850-01-01').kaynak,
    T('kabil--afganistan', 'Kâbil’in İslâmlaşması ise Sâmânîler’in Horasan valileri Alp Tegin (ö. 963) ve Sebük Tegin (ö. 997) dönemlerinde başlayıp Gazneli Mahmud zamanında tamamlanmıştır.'),
    'Sebük Tegin’in 986’da Hindu Şâhî racasını yenip Kâbil’e hâkim olduğu bozkir2 sınır maddesi/TDV Gazneliler (dilim sonu).')),
  K('Kâbil', '0986-05-13'),
  P('1157-01-01', '1173-01-01', 'horasan-oguz-hakimiyeti', 'yil', J(
    'ABİ MERKEZ: Gazne — ' + T('gazne', 'Şehir bir ara Oğuzlar’ın eline geçti. Daha sonra Gurlular’dan Muizzüddin Gazne’yi 1173’te ele geçirdi ve başşehir yaptı.'),
    K('Kâbil', '1157-01-01').kaynak,
    'bozkir2’de bu dilim __BOSLUK__ idi; Oğuz künyesi bu kümede önerildi. BEYANLI YAKLAŞIKLIK: Kâbil adıyla Oğuz tanıklığı yok; Gazne’nin kaderi izlendi.')),
  K('Kâbil', '1173-01-01'),
  K('Kâbil', '1215-01-01'),
  P('1221-11-26', '1260-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('kabil--afganistan', 'Cengiz Han’ın saldırısı ile de harabeye döndü.'),
    T('gazne', 'Gazne, Cihansûz hadisesinden sonra en büyük tahribata 1221’de mâruz kalmış ve eski canlılığını kaybetmiştir.'),
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ Gazne (zincir devralındı); t=1260-01-01 mogol künye t.')),
  P('1260-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', 'Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu', 'Çağatay hanı oldu (1260-1266)'),
    'ABİ MERKEZ: Gazne (TDV Gazne “Ardından Çağataylılar yöreye hâkim oldular.”). Mevcut zincir cagatay 1281-01-01 ile sürekli.')),
]);

// ---------------------------------------------------------------- Karakurum
sehir('Karakurum', '1281-01-01', 'bozkir1/yama_bozkir1.js (7 dilim)', [
  K('Karakurum', '0500-01-01'), K('Karakurum', '0552-02-10'), K('Karakurum', '0582-01-01'), K('Karakurum', '0630-05-02'), K('Karakurum', '0646-10-29'), K('Karakurum', '0682-01-01'), K('Karakurum', '0745-01-01'),
  P('0840-01-01', '0920-01-01', 'kirgiz-yenisey', 'yil', J(
    T('kirgizlar', 'Ancak 840’ta şiddetli bir hücumla Uygur Devleti’ni yıkarak Ötüken’de kendi hâkimiyetlerini kurdular, fakat burada fazla kalamadılar.'),
    T('karakorum', 'Uygur Devleti’nin yıkılmasıyla birlikte terkedilmiş ve X. yüzyılda tamamen harabe haline gelmiştir.'),
    'BEYAN: Ordubalık (Uygur başşehri) 840’tan sonra terk edildi; atlas noktası Orhun vadisini temsil eder. t=920-01-01: TDV Kırgızlar’da Kitanların bütün Moğolistan’ı alış yılı.')),
  P('0920-01-01', '1125-01-01', 'liao-hanedani', 'yil', J(
    T('kirgizlar', '920’de bütün Moğolistan’ı ele geçiren K’i-tanlar, Kırgızlar’ı Ötüken bölgesinden çıkarıp eski yurtlarına sürdüler.'),
    'BEYANLI YAKLAŞIKLIK: Kitan (Liao) hâkimiyetinin Orhun vadisindeki fiilî gücü (kabile vasalları, garnizonlar) TDV’de ayrıntılandırılmaz; liao künyesi f=0916-01-01, t=1125-01-01 (Liao’nun sonu). f=0920-01-01 TDV Kırgızlar yıl.')),
  P('1125-01-01', '1206-01-01', BOS, 'yil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Orhun/Karakurum bölgesi 1125-1206 sahibi: ' + T('cengiz-han', 'Kerayit Hükümdarı Ong Han’a (Tuğrul) hediye olarak takdim edildi.'),
    T('kirgizlar', 'Cengiz Han, Merkit ve Naymanlar’la olan savaşları sırasında Kırgızlar’ı da itaat altına aldı (1207).'),
    'Kerayit/Nayman/Tatar/Kamag Moğol konfederasyonları 1125-1206 arası bu vadiyi paylaşıyor; TDV (Cengiz Han, Karahıtaylar, Kırgızlar) Orhun vadisini adıyla tek bir konfederasyona bağlamıyor → boşluk. t=1206-01-01: TDV Cengiz Han 1206 kurultayı.')),
  P('1206-01-01', '1260-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('cengiz-han', 'Timuçin 1206 yılında, Nayman Tayang Han, Ong Han ve Kutuku-Beki başta olmak üzere bütün bozkır hükümdarlarını hâkimiyeti altında toplamıştı.'),
    T('karakorum', 'Karakorum adını taşıyan ikinci şehir ise Cengiz Han tarafından 1220’de Orhon nehrinin sağ kıyısında ilk şehrin güneyinde kurulmuştur.', 'Moğol İmparatorluğu’nun başşehri olan Karakorum devrin kaynaklarında zaman zaman Ordubalık resmî adıyla zikredilmiştir'),
    'f=1206-01-01 yıl; t=1260-01-01 mogol künye t (Kubilay).')),
  P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', J(
    T('karakorum', 'Mengü Kağan’ın halefi Kubilay Han (1260-1294) Moğol İmparatorluğu’nun başkentini Şangdu/Hanbalık (Çin kaynaklarında Ta-tu, bugünkü Pekin) şehrine nakletti. Kubilay’a isyan eden kardeşi Arıkboğa (Arıg Buka) aynı yıl Karakorum’a hâkim olduysa da şehir Kubilay tarafından şiddetli bir muhasaradan sonra geri alındı.'),
    T('karakorum', '1277’de bir ara Ögedey’in torunu Kaydu Kağan’ın egemenliğine girdi'),
    'BEYAN: Arıkboğa’nın kısa hâkimiyeti ve 1277’de “bir ara” Kaydu Kağan’ın egemenliği ayrı dilim yapılmadı; mevcut zincir yuan-hanedani 1281-01-01 ile sürekli.')),
]);

// ---------------------------------------------------------------- Karaşar
sehir('Karaşar (Yanqi)', '1281-01-01', 'bozkir4/yama_bozkir4.js (1 dilim)', [
  K('Karaşar (Yanqi)', '0500-01-01'),
  P('0644-11-05', '0791-01-01', 'tang', 'ay', J(
    W('舊唐書/卷3', '安西都護郭孝恪帥師滅焉耆，執其王突騎支送行在所。'),
    W('舊唐書/卷198', '則天臨朝，長壽元年，武威軍總管王孝傑、阿史那忠節大破吐蕃，克復龜茲、於闐等四鎮'),
    W('舊唐書/卷196下', '自是安西阻絕，莫知存否。'),
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ: Kuça (Anxi Koruyuculuğu merkezi). Yanqi 644’te Anxi’ye bağlandı; Jiu Tang 198 “焉耆已西四鎮城堡” (Yanqi’nin BATISINDAKİ garnizonlar) 670’te Tibet’e düştü der — Yanqi şehrinin kendisinin 670-692 Tibet idaresine girdiği doğrudan okunmadı, bu yüzden Tang dilimi kesintisiz yazıldı (Kuça/Hotan’dan farklı). t=791-01-01: Anxi ile bağın kopuşu (yıl, 貞元七年).')),
  P('0791-01-01', '0911-01-01', BOS, 'yuzyil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Karaşar 791-911 sahibi: ' + W('舊唐書/卷196下', '自是安西阻絕，莫知存否。'),
    T('uygurlar', 'Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.', '911’de bağımsız hale gelen Uygur Devleti güneyde Tibet, Batı Türkistan’da Karluk bölgesiyle sınırlıydı.'),
    'Tibet (790’lardan) / Uygur Kağanlığı / Kansu-Turfan Uygurları dönemi için Karaşar adıyla tek sahip okunmadı → boşluk. t=911-01-01 TDV Uygurlar (koco-uygur künye f).')),
  P('0911-01-01', '1130-01-01', 'koco-uygur', 'yil', J(
    T('uygurlar', '911’de bağımsız hale gelen Uygur Devleti güneyde Tibet, Batı Türkistan’da Karluk bölgesiyle sınırlıydı.', 'Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.'),
    'BEYANLI YAKLAŞIKLIK: Karaşar’ın Koço (Turfan) Uygur Devleti’ne bağlı olduğu TDV’de doğrudan söylenmez; Uygurların Turfan, Kuça, Karaşar’a yerleşmesi ve Karahıtaylar’ın “Beşbalık’tan başlayarak Turfan, Karaşar ve Kuça’da oturan Uygur Türkleri”ne tâbi saymasından çıkarım. Karahanlı’nın 1006 sonrası doğu ilerleyişi (Hoten) Karaşar’a ulaştı mı okunmadı.')),
  P('1130-01-01', '1209-01-01', 'karahitay', 'yil', J(
    T('karahitaylar', 'Doğuda Beşbalık’tan başlayarak Turfan, Karaşar ve Kuça’da oturan Uygur Türkleri, kuzeyde Aşağı İli’de oturan Karluklar, güneybatıda Mâverâünnehir ve Kuzey Afganistan halkları, Doğu İran’da da müslüman Türkler ve diğer bazı kavimler Karahıtaylar’a tâbi idiler.', 'Kâşgar, Beşbalık ve Hoten’i de kendine tâbi kılıp başşehri Balasagun olan Karahıtay Devleti’ni kurdu (1130).'),
    'f=1130-01-01 Karahıtay kuruluşu (yıl); t=1209-01-01: İdikut Barçuk’un Cengiz’e bağlanışı (TDV Uygurlar).')),
  P('1209-01-01', '1227-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('uygurlar', 'Turfan Uygur Devleti 1209’da Cengiz Han’a bağlanıp 1368 yılına kadar Moğol idaresinde varlığını sürdürdü.'),
    T('hoten', 'Ögedey Han zamanında (1227-1241) Türkistan, Mâverâünnehir, Otrar, Uygur ülkesi, Hoten, Kâşgar, Cend, Hârizm ve Fergana toprakları Vezir Mahmud Yalavaç ve oğlu Mesud Bey’in idaresine bırakılmıştı.'),
    'BEYANLI YAKLAŞIKLIK: Karaşar adı geçmez; Uygur ülkesi dahilindeki Karaşar Moğol idaresine Koço ile birlikte girdi varsayıldı (Küçlüğ’ün 1211-1218 hâkimiyeti Kâşgar-Hoten ağırlıklıydı; Karaşar’a uzandığı okunmadı).')),
  P('1227-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', '1227-1370 yılları arasında Mâverâünnehir, Yedisu ve Doğu Türkistan’da hüküm süren bir hânedan.'),
    'BEYANLI YAKLAŞIKLIK: Karaşar adı geçmez; Doğu Türkistan Çağatay payı. Mevcut zincir cagatay 1281-01-01.')),
]);

// ---------------------------------------------------------------- Kuça
sehir('Kuça (Kuqa)', '1281-01-01', 'bozkir3/yama_bozkir3.js (3 dilim)', [
  K('Kuça (Kuqa)', '0500-01-01'), K('Kuça (Kuqa)', '0649-01-19'), K('Kuça (Kuqa)', '0670-04-25'),
  P('0692-11-14', '0791-01-01', 'tang', 'ay', J(
    W('舊唐書/卷198', '則天臨朝，長壽元年，武威軍總管王孝傑、阿史那忠節大破吐蕃，克復龜茲、於闐等四鎮，自此復於龜茲置安西都護府'),
    W('舊唐書/卷196下', '自是安西阻絕，莫知存否。'),
    'f: Jiu Tang 6 «冬十月» 長壽元年 (692-11-14; bozkir3 hesabı); t=791-01-01 yıl (貞元七年): Anxi ile bağ koptu, Kuça’nın Tibet’e fiilî düşüş yılı okunmadı (BEYAN).')),
  P('0791-01-01', '0911-01-01', BOS, 'yuzyil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Kuça 791-911 sahibi: ' + W('舊唐書/卷196下', '自是安西阻絕，莫知存否。'),
    T('uygurlar', 'Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.'),
    'Tibet (790’lardan) / Uygur dönemi için Kuça adıyla tek sahip okunmadı → boşluk (Karaşar zinciriyle aynı). t=911-01-01 koco-uygur künye f / TDV Uygurlar.')),
  P('0911-01-01', '1130-01-01', 'koco-uygur', 'yil', J(
    T('uygurlar', '911’de bağımsız hale gelen Uygur Devleti güneyde Tibet, Batı Türkistan’da Karluk bölgesiyle sınırlıydı.', 'Diğer kabileler Doğu Türkistan’a göç edip Turfan, Kuça, Karaşar şehirlerine ve civarına yerleştiler.'),
    'BEYANLI YAKLAŞIKLIK: Kuça’nın Koço Uygur Devleti’ne bağlı olduğu TDV’de doğrudan yok; Uygurların Kuça’ya yerleşmesinden çıkarım (Karaşar ile aynı). Karahanlı’nın doğuya ilerleyişi (Kâşgar/Hoten 1006) Kuça’ya ulaştı mı okunmadı.')),
  P('1130-01-01', '1209-01-01', 'karahitay', 'yil', J(
    T('karahitaylar', 'Doğuda Beşbalık’tan başlayarak Turfan, Karaşar ve Kuça’da oturan Uygur Türkleri, kuzeyde Aşağı İli’de oturan Karluklar, güneybatıda Mâverâünnehir ve Kuzey Afganistan halkları, Doğu İran’da da müslüman Türkler ve diğer bazı kavimler Karahıtaylar’a tâbi idiler.'),
    'f=1130-01-01 Karahıtay kuruluşu; t=1209-01-01: İdikut Barçuk’un Cengiz’e bağlanışı (TDV Uygurlar).')),
  P('1209-01-01', '1227-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('uygurlar', 'Turfan Uygur Devleti 1209’da Cengiz Han’a bağlanıp 1368 yılına kadar Moğol idaresinde varlığını sürdürdü.'),
    'BEYANLI YAKLAŞIKLIK: Kuça adı geçmez (Karaşar ile aynı gerekçe).')),
  P('1227-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', '1227-1370 yılları arasında Mâverâünnehir, Yedisu ve Doğu Türkistan’da hüküm süren bir hânedan.'),
    'BEYANLI YAKLAŞIKLIK: Kuça adı geçmez. Mevcut zincir cagatay 1281-01-01.')),
]);

// ---------------------------------------------------------------- Merv
const HORASAN_ONC = (ad) => 'BEYANLI YAKLAŞIKLIK: ';
sehir('Merv (Mari)', '1221-01-01', 'bozkir2/yama_bozkir2.js (2 dilim)', [
  P('0500-01-01', '0651-01-01', 'sasani', 'yil', J(
    T('merv', 'Son Sâsânî hükümdarı III. Yezdicerd’in İslâm ordularına yenilerek doğuya doğru kaçtığı zaman müstahkem bir garnizon halindeki Merv’e sığındığı (Taberî, IV, 298), fakat daha sonra yakındaki bir köyde öldürüldüğü bilinmektedir.'),
    'f=0500-01-01 UFUK SINIR İŞARETİDİR; sasani künyesi t=0651-01-01.')),
  P('0651-01-01', '0661-07-29', 'hulefa-yi-rasidin', 'yil', J(
    T('merv', 'Hz. Osman’ın Basra valisi, Horasan emîri ve sâhibü’l-ceyşi olan Abdullah b. Âmir’in emrindeki kuvvetlerin gerçekleştirdiği fetih harekâtı sırasında ele geçirilen Merv’in merzübânı 2.200.000 dirhemlik bir haraç karşılığında Araplar’la anlaşma yoluna gitmişti'),
    T('serahs', 'Hz. Osman devrinde Basra Valisi Abdullah b. Âmir’in emrinde İran ve Horasan’daki fetihlere kumandan olarak katılan Abdullah b. Hâzim tarafından fethedildi (31/651-52).'),
    RASIDIN_NOT)),
  P('0661-07-29', '0750-01-01', 'emevi', 'yil', J(
    T('merv', 'Abbâsî ihtilâli Merv’de patlak verdi. Ebû Müslim-i Horasânî 129’da (747) Araplar’dan çok İranlı köylülerle diğer mevâlîden oluşturduğu ordusunun başında şehre girdiğinde çarpışmayı göze alamayan Emevîler’in son Horasan valisi Nasr b. Seyyâr ailesiyle birlikte kaçmayı tercih etti'),
    T('serahs', 'Eyalet merkezi Merv’i Ebû Müslim’e bırakmak zorunda kalan Nasr (9 Cemâziyelevvel 130 / 15 Ocak 748)'),
    'ÇELİŞKİ/BEYAN: Merv’in Ebû Müslim eline geçişi TDV Merv’de 129/747, TDV Serahs’ta 15 Ocak 748 (gün). Abbâsî künyesi f=0749-11-28 olduğundan (künye hayalet olmasın) dilim bitişi 750-01-01 yıl hassasiyetiyle yazıldı (diğer Horasan şehirleriyle aynı); gerçek devir 747/748. Künye düzeltme önerisi: abbasi f→747-06 (Abbâsî ihtilâli) ya da bu dilimi “Abbâsî ihtilâli” kimliğine bağlamak.')),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('merv', 'Me’mûn’un iç karışıklıkların artması üzerine Bağdat’a dönmesinin ardından Horasan Tâhir b. Hüseyin’e verildi. Merv de Tâhirî hânedanının idare merkezi oldu.'),
    'f=750-01-01 yıl (bk. önceki dilim). Me’mûn Merv’i 809-818 arasında merkez yaptı (TDV Merv).')),
  P('0821-05-06', '0873-08-01', 'tahiri-horasan', 'yil', J(
    T('merv', 'Me’mûn’un iç karışıklıkların artması üzerine Bağdat’a dönmesinin ardından Horasan Tâhir b. Hüseyin’e verildi. Merv de Tâhirî hânedanının idare merkezi oldu. Ancak daha sonra merkez Nîşâbur’a nakledildi.'),
    'f=821-05-06 tahiri künye f. t=873-08-01: Tâhirî idaresinin sonu (TDV Saffârîler Nîşâbur 873-08) — Merv’de Tâhirî temsilcilerin IX. yy sonunda emirlik yaptığı TDV Merv’de yazılı (aşağıdaki dilime BEYAN).')),
  P('0873-08-01', '0900-04-19', 'saffari', 'ay', J(
    T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).'),
    T('merv', 'Bununla birlikte III. (IX.) yüzyıl sonlarında Tâhirî hânedanından temsilcilerin Merv’de emirlik yaptığı bilinmektedir.'),
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ: Nîşâbur (Ya‘kūb’un Horasan merkezi). Merv için şehre özgü Saffârî tanıklığı okunmadı; TDV Merv Tâhirî temsilcilerin Merv’de emirlik yaptığını söyler (Saffârî’ye vasal ya da bağımsız). t=900-04-19 Amr’ın esir düştüğü gün (TDV Saffârîler: «Amr’ın esir düşmesinin ardından Horasan’a Sâmânîler hâkim oldu»).')),
  P('0900-04-19', '0999-01-01', 'samani', 'yil', J(K('Merv (Mari)', '0900-01-07').kaynak,
    T('merv', 'Şehrin, Tâhirîler’in ardından Sâmânîler’in hâkimiyetine girmesi ve başşehrin Buhara’ya taşınması üzerine eski önemini büsbütün kaybetmeye başladığı anlaşılmaktadır.'),
    'f: bozkir2’de 0900-01-07; TDV Saffârîler gün verdiği için 900-04-19.')),
  K('Merv (Mari)', '0999-01-01'),
  P('1038-05-09', '1157-04-26', 'buyuk-selcuklu', 'gun', J(K('Merv (Mari)', '0999-01-01').kaynak, 'f: bozkir2 sınır maddesi (Talhâb 429/1038).',
    T('merv', 'Şehir, Dandanakan Savaşı’nın (431/1040) ardından yapılan kurultayın kararıyla Doğu Horasan’ın hâkimiyetini eline alan Çağrı Bey’in idare merkezi oldu.', 'Sultan Sencer zamanında her açıdan en parlak dönemini yaşayan Merv çok sayıda medrese ve kütüphanesiyle bir ilim merkezi haline geldi.'),
    T('sencer', 'Sencer 14 veya 24 Rebîülevvel 552 (26 Nisan veya 6 Mayıs 1157) tarihinde vefat etti ve Merv’de yaptırdığı Dârülâhire denilen muhteşem türbeye defnedildi'),
    'BEYAN: 1141-42’de Atsız (Hârizmşah) Merv’i bir yıl işgal etti; 1153’te Oğuzlar Merv’e girip yağmaladı, Sencer şeklen sultan olarak kaldı (TDV Merv/Sencer); bu kısa dönemler ayrı dilim yapılmadı. t=1157-04-26.')),
  P('1157-04-26', '1181-01-01', 'horasan-oguz-hakimiyeti', 'onyil', J(
    T('merv', 'Oğuzlar’ın ardından önce Hârizmşah Alâeddin Tekiş’e isyan eden kardeşi Sultan Şah’ın ve daha sonra kısa bir süre için Gurlular’ın ve tekrar Hârizmşahlar’ın hâkimiyetine giren Merv'),
    T('sencer', 'Esir sultanla birlikte Merv’e gelen Oğuzlar kendisini şeklen hükümdar olarak tanımaya devam ettiler.'),
    'BEYANLI YAKLAŞIKLIK: Merv’de Oğuz hâkimiyetinin 1157-1181 arası sürekliliği TDV Merv’in sıralamasından (Oğuzlar → Sultan Şah) çıkarım; Müeyyed Ay-aba 1158’de Oğuzları yenip Merv’e girdi (TDV Müeyyed Ay-aba) — geçici. f: Sencer’in ölümü; t=1181: TDV Tekiş «Sultan Şah… Horasan’a yönelerek Merv, Serahs ve Tûs’a hâkim oldu (576/1181)».')),
  P('1181-01-01', '1193-01-07', 'sultan-sah-emirligi', 'yil', J(
    T('tekis-alaeddin', 'Sultan Şah, Horasan’a yönelerek Merv, Serahs ve Tûs’a hâkim oldu (576/1181).', 'Daha sonra Sultan Şah’ın önemli merkezlerinden Serahs’ı ele geçirdiği sırada Sultan Şah vefat etti (589/1193).'),
    T('harizmsahlar', 'Gurlular’a sığınan Sultan Şah ise daha sonra Karahıtaylar’ın yardımı ile Merv ve Tûs şehirlerinde bir emirlik kurdu.'),
    '576 H = 1180-05-28→1181-05-17 ∩ 1181 → 1181-01-01; 589 H başı 1193-01-07 (589 H ∩ 1193).')),
  P('1193-01-07', '1201-01-01', 'harizmsah', 'yil', J(
    T('tekis-alaeddin', 'Sultan Şah vefat etti (589/1193).'),
    T('merv', 'Oğuzlar’ın ardından önce Hârizmşah Alâeddin Tekiş’e isyan eden kardeşi Sultan Şah’ın ve daha sonra kısa bir süre için Gurlular’ın ve tekrar Hârizmşahlar’ın hâkimiyetine giren Merv'),
    'BEYANLI YAKLAŞIKLIK: Sultan Şah’ın ölümünden sonra Merv’in Tekiş’e geçişi TDV’de açık yazılı değil; Tekiş’in Serahs’ı alması ve Sultan Şah’ın vefatı sırasındaki gelişmelerden çıkarım. t=1201: TDV Gurlular «Ertesi yıl Mervüşşahcân’ı» (Tekiş’in 1200 ölümünden sonraki yıl).')),
  P('1201-01-01', '1204-01-01', 'gurlu', 'yil', J(
    T('gurlular', 'Sultan Alâeddin Tekiş’in 1200 yılında ölümü üzerine Gurlular Hârizmşahlar’a karşı savaş açtılar ve Nîşâbur’u kolaylıkla ele geçirdiler. Ertesi yıl Mervüşşahcân’ı, ardından Serah bölgesini zaptettiler.'),
    T('harizmsahlar', 'Alâeddin Nîşâbur, Merv ve Serahs’ı zaptetti (1204).'),
    'f/t yıl hassasiyetinde; TDV Nîşâbur Hârizmşah dönüşünü 1202 verir (Nîşâbur), TDV Hârizmşahlar 1204 (üç şehir): çelişki ic_not’ta.')),
  P('1204-01-01', '1221-01-01', 'harizmsah', 'yil', J(
    T('harizmsahlar', 'Alâeddin Nîşâbur, Merv ve Serahs’ı zaptetti (1204).'),
    T('merv', 'Moğol istilâsı sırasında Cengiz Han’ın oğlu Tuluy tarafından yağma ve tahrip edildiği gibi (1221) halkı da kılıçtan geçirildi'),
    'Mevcut zincir mogol-imparatorlugu 1221-01-01 ile sürekli (TDV Nîşâbur: Moğol 15 Safer 618 / 10 Nisan 1221 Nîşâbur; Merv ayrı gün yok).')),
]);

// ---------------------------------------------------------------- Nîşâbur
sehir('Nîşâbur', '1202-01-01', 'bozkir2/yama_bozkir2.js (2 dilim)', [
  P('0500-01-01', '0651-01-01', 'sasani', 'yil', J(
    T('nisabur--iran', 'Şehir, yakınlarındaki Azar Burzinmihr adlı âteşkede sebebiyle Sâsânîler devrinin en önemli dinî merkezlerinden biri haline gelmişti.'),
    'f=0500-01-01 UFUK SINIR İŞARETİDİR.')),
  P('0651-01-01', '0661-07-29', 'hulefa-yi-rasidin', 'yil', J(
    T('nisabur--iran', 'Nîşâbur, Sâsânî Hükümdarı III. Yezdicerd’in İslâm orduları karşısında yenilmesinin ardından Vali Kanâreng’in teslim olmasıyla 30 veya 31 (651-652) yılında Basra Valisi Abdullah b. Âmir’in eline geçti.'),
    RASIDIN_NOT + ' BEYAN: Hz. Ali-Muâviye mücadelesindeki isyanla kontrolden çıkıp Muâviye zamanında 42 (662) yeniden itaat altına alındı (kısa kesinti).')),
  P('0661-07-29', '0750-01-01', 'emevi', 'yil', J(
    T('nisabur--iran', 'Hz. Ali-Muâviye mücadelesi sırasındaki bir isyanla şehir kontrolden çıktıysa da Muâviye zamanında 42 (662) yılında yine Basra Valisi Abdullah b. Âmir tarafından itaat altına alındı. Emevîler devrinde ve Abbâsî hâkimiyetinin başlarında Merv’in gerisinde kalan Nîşâbur’un'),
    'f: Emevî künyesi f=0661-07-29; t=0750-01-01 yıl hassasiyeti (Ebû Müslim 747/748’de Merv’i aldı: bkz. Merv dilimi ÇELİŞKİ notu; abbasi künye f=749-11-28).')),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('nisabur--iran', 'Emevîler devrinde ve Abbâsî hâkimiyetinin başlarında Merv’in gerisinde kalan Nîşâbur’un asıl gelişimi Tâhirîler’den Abdullah b. Tâhir’in (830-844) idare merkezini Merv’den buraya taşımasıyla başladı.'))),
  P('0821-05-06', '0873-08-01', 'tahiri-horasan', 'ay', J(
    T('nisabur--iran', 'Nîşâbur’un asıl gelişimi Tâhirîler’den Abdullah b. Tâhir’in (830-844) idare merkezini Merv’den buraya taşımasıyla başladı. Şehir 259 (873) yılında Saffârî Emîri Ya‘kūb b. Leys’in eline geçti.'),
    T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).'),
    'f=821-05-06 tahiri künye f (Tâhir b. Hüseyin Horasan valisi 205/821); t=873-08-01 ay hassasiyeti (Ağustos 873).')),
  P('0873-08-01', '0900-04-19', 'saffari', 'ay', J(
    T('nisabur--iran', 'Şehir 259 (873) yılında Saffârî Emîri Ya‘kūb b. Leys’in eline geçti. Saffârîler zamanında gelişmesini sürdüren Nîşâbur'),
    T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).', 'Amr’ın esir düşmesinin ardından Horasan’a Sâmânîler hâkim oldu.'),
    SAFFARI_900,
    'BEYAN: Hucistânî’nin Nîşâbur’da bağımsızlığı (880-882; 268/882’de öldürüldü, TDV Saffârîler) ayrı dilim yapılmadı. t=900-04-19.')),
  P('0900-04-19', '0999-01-01', 'samani', 'yil', J(K('Nîşâbur', '0900-01-07').kaynak,
    T('nisabur--iran', 'Saffârîler zamanında gelişmesini sürdüren Nîşâbur, Sâmânîler tarafından Merv’in yerine askerî-idarî merkez haline getirildi'),
    'f: bozkir2’de 0900-01-07; TDV Saffârîler gün verdiği için 900-04-19.')),
  K('Nîşâbur', '0999-01-01', { t: '1038-05-09' }),
  P('1038-05-09', '1157-04-26', 'buyuk-selcuklu', 'gun', J(
    K('Nîşâbur', '0999-01-01').kaynak, 'f: bozkir2 sınır maddesi (Talhâb 429/1038).',
    T('nisabur--iran', 'Nîşâbur, Selçuklular’ın Gazneliler’e karşı Serahs yakınlarında kazandığı zaferin ardından 429 (1038) yılı ilkbaharında Tuğrul Bey’in eline geçti.', 'Nîşâbur bu dönemde Tuğrul Bey’in idare merkezi oldu.'),
    'BEYAN: Mesud’un 1040-01-16’da Nîşâbur’a girip barış yapması (TDV Nîşâbur) ve Atsız’ın 1142’de Nîşâbur’da kısa hutbesi dilim yapılmadı; 1153’te Süleyman Şah Nîşâbur’da sultan ilân edildi (TDV Sencer). t=1157-04-26 Sencer’in ölümü.')),
  P('1157-04-26', '1187-03-13', 'muayyed-ay-aba-emirligi', 'yil', J(
    T('nisabur--iran', 'Sultan Sencer’in ölümünün ardından Müeyyed Ay-aba ile halefleri Doğan Şah ve Sencer Şah, Nîşâbur’da hüküm sürdüler.'),
    T('mueyyed-ay-aba', 'Müeyyed Ay-aba, Sultan Sencer’in kurtuluşuyla ölümü arasında geçen yedi aylık sürede (Ekim-Kasım 1156 - Nisan 1157) Nîşâbur’u vali olarak idare etti.'),
    T('tekis-alaeddin', 'Alâeddin Tekiş kardeşinin bu faaliyetlerine', 'Horasan’a bir sefer düzenlemeye mecbur etti (582/1186); 583 (1187) baharında bölgenin önemli şehri Nîşâbur’u ele geçirdi.'),
    'BEYAN: Müeyyed Ay-aba 1160’ta Mahmud Han’ın atamasıyla Nîşâbur-Tûs emîri, 1162’de bağımsız “melik” oldu (TDV Müeyyed Ay-aba); 1174’te öldü, halefleri Doğan Şah ve Sencer Şah; bu iç yapı tek emirlik künyesinde toplandı. t: 583 H = 1187-03-13→1188-03-02, bahar → ∩ 1187 ilk günü 1187-03-13.')),
  P('1187-03-13', '1200-07-04', 'harizmsah', 'ay', J(
    T('tekis-alaeddin', '583 (1187) baharında bölgenin önemli şehri Nîşâbur’u ele geçirdi. Böylece Horasan’ın batısını kendisine bağladığı gibi Mâzenderan’ı da hâkimiyeti altına aldı.', '20 Ramazan 596 (4 Temmuz 1200) tarihinde Nesâ civarında vefat etti.'),
    'f: 583 H ilk günü (bahar); t=1200-07-04: Tekiş’in ölüm günü (TDV Tekiş).')),
  P('1200-07-04', '1202-01-01', 'gurlu', 'yil', J(
    T('gurlular', 'Sultan Alâeddin Tekiş’in 1200 yılında ölümü üzerine Gurlular Hârizmşahlar’a karşı savaş açtılar ve Nîşâbur’u kolaylıkla ele geçirdiler.'),
    T('nisabur--iran', 'Onların ardından Hârizmşahlar’la Gurlular arasında birkaç defa el değiştiren şehir, nihayet Sultan Alâeddin Muhammed b. Tekiş tarafından kesin olarak Hârizmşah topraklarına katıldı (598/1202).'),
    'f=1200-07-04 Tekiş’in ölümü (alt sınır; Gurlu’nun fiilî alış günü yok). Çelişki: TDV Hârizmşahlar Alâeddin’in Nîşâbur, Merv ve Serahs’ı zaptını 1204 verir; TDV Nîşâbur 598/1202 (mevcut zincir 1202-01-01).')),
]);

// ---------------------------------------------------------------- Semerkant
sehir('Semerkant', '1000-01-01', 'bozkir1/yama_bozkir1.js (7 dilim) + bozkir2/yama_bozkir2.js (2 dilim)', [
  K('Semerkant', '0500-01-01'), K('Semerkant', '0562-01-01'), K('Semerkant', '0582-01-01'), K('Semerkant', '0659-01-01'), K('Semerkant', '0711-01-01'), K('Semerkant', '0735-01-01'), K('Semerkant', '0738-01-01'),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('semerkant', 'Abbâsîler döneminde 159’da (775-76) ortaya çıkan Mukanna‘ el-Horasânî taraftarı Mübeyyiza’nın isyanları dört yıl devam etti. 190’da (805-806) başlayan ve Abbâsîler’in bölgede hâkimiyetini sarsan Râfi‘ b. Leys isyanı da dört yıl sonra bastırılabildi (194/810).'),
    'f=750-01-01 yıl (Emevî→Abbâsî; abbasi künye f=749-11-28).')),
  P('0821-05-06', '0873-08-01', 'tahiri-horasan', 'ay', J(
    T('semerkant', 'Halife Me’mûn, bu isyanın bastırılmasında büyük yararlıklar gösteren Sâmânî ailesinden Nûh b. Esed’i 204 (819) yılında Semerkant, diğer üç kardeşini de Mâverâünnehir’deki diğer vilâyetlere vali tayin etti. Horasan’da hüküm süren Tâhirîler’e tâbi olan Nûh b. Esed ve kardeşleri, Ya‘kūb b. Leys’in 259’da (873) Tâhirîler’e son vermesinin ardından Saffârîler’e bağlandı.'),
    T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).'),
    'f=821-05-06 tahiri künye f (819’da Nûh b. Esed Semerkant valisi: Abbâsî atamalı Sâmânî ailesi, Tâhirîlere tâbi). t=873-08-01 ay (Ağustos 873).')),
  P('0873-08-01', '0874-10-16', 'saffari', 'ay', J(
    T('semerkant', 'Ya‘kūb b. Leys’in 259’da (873) Tâhirîler’e son vermesinin ardından Saffârîler’e bağlandı. Halife Mu‘temid-Alellah’ın iki yıl sonra bir menşurla bütün Mâverâünnehir’i Nasr b. Ahmed’e verdiğini bildirmesinin ardından Sâmânîler müstakil bir devlet haline geldi (261/874-75).'),
    'f ay hassasiyeti; t=874-10-16: 261 H ∩ 874 ilk günü (bozkir2 f ile aynı).')),
  K('Semerkant', '0874-10-16'),
  K('Semerkant', '0999-10-14'),
]);

// ---------------------------------------------------------------- Serahs
sehir('Serahs', '1193-01-01', 'bozkir2/yama_bozkir2.js (2 dilim)', [
  P('0500-01-01', '0651-01-01', 'sasani', 'yil', J(
    T('serahs', 'Önceleri Selevkoslar ve Sâsânîler’in hâkimiyetine giren Serahs'),
    'f=0500-01-01 UFUK SINIR İŞARETİDİR.')),
  P('0651-01-01', '0661-07-29', 'hulefa-yi-rasidin', 'yil', J(
    T('serahs', 'Hz. Osman devrinde Basra Valisi Abdullah b. Âmir’in emrinde İran ve Horasan’daki fetihlere kumandan olarak katılan Abdullah b. Hâzim tarafından fethedildi (31/651-52).'),
    RASIDIN_NOT)),
  P('0661-07-29', '0750-01-01', 'emevi', 'yil', J(
    T('serahs', 'Serahs, Emevîler’in son Horasan valisi Nasr b. Seyyâr ile Abbâsî ihtilâlinin önde gelen isimlerinden Ebû Müslim-i Horasânî arasındaki mücadelede de zikredilir. Eyalet merkezi Merv’i Ebû Müslim’e bırakmak zorunda kalan Nasr (9 Cemâziyelevvel 130 / 15 Ocak 748) buradan Serahs’a, ardından Tûs ve Nîşâbur’a çekildi.'),
    'BEYAN: Merv ÇELİŞKİ notuna bk.; Serahs’ta Nasr 15 Ocak 748’de çekildi; abbasi künye f=749-11-28 nedeniyle 750-01-01 yıl hassasiyeti.')),
  P('0750-01-01', '0821-05-06', 'abbasi', 'yil', J(
    T('serahs', '799-802 yılları arasında Horasan Valisi İbn Mâhân’a karşı Nesâ’da ayaklanan Ebü’l-Hasîb Vüheyb b. Abdullah bölgedeki diğer bazı şehirlerin yanı sıra Serahs’a da hâkim oldu ve 186’da (802) Nesâ’da öldürüldü.'),
    'BEYAN: Ebü’l-Hasîb’in 799-802 kısa hâkimiyeti ayrı dilim yapılmadı.')),
  P('0821-05-06', '0873-08-01', 'tahiri-horasan', 'ay', J(
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ: Nîşâbur/Merv (Tâhirî Horasan merkezi) — ' + T('merv', 'Horasan Tâhir b. Hüseyin’e verildi. Merv de Tâhirî hânedanının idare merkezi oldu.'),
    T('serahs', 'Bazı kaynaklarda IX ve X. yüzyıllarda Serahs’ın büyüklük bakımından Merv’in yarısı kadar olduğu kaydedilmiştir.'),
    'Serahs’a özgü Tâhirî tanıklığı okunmadı.')),
  P('0873-08-01', '0900-04-19', 'saffari', 'ay', J(
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ: Nîşâbur (Ya‘kūb’un Horasan merkezi) — ' + T('saffariler', 'Nîşâbur’u istilâ edip Tâhirîler’in buradaki idaresine son verdi (Şevval 259 / Ağustos 873).', 'Amr’ın esir düşmesinin ardından Horasan’a Sâmânîler hâkim oldu.'),
    'Serahs’a özgü Saffârî tanıklığı okunmadı; t=900-04-19 (TDV Saffârîler).')),
  P('0900-04-19', '0999-01-01', 'samani', 'yil', J(K('Serahs', '0900-01-07').kaynak,
    T('serahs', 'X. yüzyılda Sâmânîler’in idaresinde olan şehir onların yıkılmasının ardından Gazneliler’in eline geçti.'),
    'f: bozkir2’de 0900-01-07; TDV Saffârîler gün verdiği için 900-04-19.')),
  K('Serahs', '0999-01-01', { t: '1038-05-09' }),
  P('1038-05-09', '1157-04-26', 'buyuk-selcuklu', 'gun', J(
    K('Serahs', '0999-01-01').kaynak,
    T('serahs', 'Bu savaşın Selçuklular’ın zaferiyle sonuçlanması ile Gazneliler, Horasan’da güçlerini kaybettiler. Kazanılan zaferin ardından eski Türk devlet geleneğine göre yapılan taksimatta Tuğrul Bey Nîşâbur’a, Çağrı Bey Merv’e, Mûsâ Yabgu Serahs’a sahip oluyordu.', 'Gazneliler ile yapılan bu savaştan sonra Büyük Selçuklu Devleti hukuken kuruldu ve Serahs yeni kurulan bu devletin sınırları içinde kaldı.'),
    'f: bozkir2 sınır maddesi (Talhâb 429/1038; TDV Serahs aynı savaş). t=1157-04-26 Sencer’in ölümü.')),
  P('1157-04-26', '1181-01-01', 'horasan-oguz-hakimiyeti', 'onyil', J(
    T('serahs', '552 (1157) yılında Sultan Sencer’in ölümüyle Büyük Selçuklu Devleti’nin tarihe karışması sonucunda Serahs bir süre Oğuzlar’ın elinde kaldı;'),
    T('tekis-alaeddin', 'Sultan Şah, Horasan’a yönelerek Merv, Serahs ve Tûs’a hâkim oldu (576/1181).'),
    'BEYANLI YAKLAŞIKLIK: “bir süre” ifadesi; bitiş 1181 (Sultan Şah) kaynakta başka sınır yok.')),
  P('1181-01-01', '1193-01-01', 'sultan-sah-emirligi', 'yil', J(
    T('tekis-alaeddin', 'Sultan Şah, Horasan’a yönelerek Merv, Serahs ve Tûs’a hâkim oldu (576/1181).', 'Daha sonra Sultan Şah’ın önemli merkezlerinden Serahs’ı ele geçirdiği sırada Sultan Şah vefat etti (589/1193).'),
    T('serahs', 'ardından bütün Horasan’la birlikte şehir ve çevresine Hârizmşahlar hâkim oldu (1193).'),
    'BEYAN: 589 H başı 1193-01-07; mevcut zincir harizmsah 1193-01-01 ile hizalı (yıl hassasiyeti).')),
]);

// ---------------------------------------------------------------- Taraz
sehir('Taraz (Evliya-Ata)', '1281-01-01', 'bozkir2/yama_bozkir2.js (4 dilim)', [
  P('0500-01-01', '0699-01-01', BOS, 'onyil', J(
    'BOŞLUK BEYANI: arandı, bulunamadı: Taraz/Talas 500-699 sahibi: ' + T('karluklar', 'Karluklar Çin kaynaklarına göre Göktürk Federasyonu’nun önemli gruplarından birini oluşturuyor ve Beşbalık’ın kuzeybatısında, daha yoğun biçimde de Altay dağlarının batısındaki Kara İrtiş nehriyle Tarbagatay yöresinde yaşıyorlardı.', 'Çin İmparatorluğu’nun 656’da üç koldan başlattığı büyük taarruzda ise Batı Göktürk Kağanı A-shih-na Holu’yu desteklediler; ancak onunla birlikte mücadeleyi kaybettiler.'),
    'Talas şehri adıyla Eftalit/Göktürk/Tang dönemi sahibi okunmadı (TDV bölgeyi genel olarak Batı Göktürk alanı gösterir ama şehir noktasını tek devlete bağlamaz); f=0500-01-01 UFUK SINIR İŞARETİDİR; t=0699-01-01: turges künye f.')),
  P('0699-01-01', '0766-01-01', 'turges', 'yil', J(
    T('karluklar', 'Daha sonra da yıkılma sürecine giren Kara Türgiş Kağanlığı’nın iki büyük idare merkezi Tokmok ve Talas’ı zaptederek 766 yılında burada başşehri Balasagun yakınlarındaki Kara-ordu olan bir devlet kurdular.'),
    'BEYAN: turges künyesi f=0699-01-01, t=0766-01-01; f/t künyeden alındı (TDV yıl vermez; “Kara Türgiş Kağanlığı’nın iki büyük idare merkezi Tokmak ve Talas”). Talas Savaşı (751) Tang-Abbâsî çatışmasının şehre etkisi okunmadı.')),
  K('Taraz (Evliya-Ata)', '0766-01-01'), K('Taraz (Evliya-Ata)', '0840-01-01'), K('Taraz (Evliya-Ata)', '1041-01-01'), K('Taraz (Evliya-Ata)', '1130-01-01'),
  P('1211-01-01', '1218-01-01', 'kuclug-karahitay', 'yil', J(
    T('karahitaylar', 'Böylece Karahıtaylar’a son darbeyi vuran Küçlüğ kayınpederi Ch’e-lu-ku’yu esir ederek bu devlete son verdi (1211).'),
    T('hoten', 'Güçlüg ondan daha erken davranıp Gürhan’ı esir aldı ve Karahıtaylar’ın başına geçti (1211).', 'Müslümanları bu durumdan Cengiz Han’ın Cebe Noyan kumandasında gönderdiği Moğol kuvvetleri kurtardı (1218).'),
    'BEYANLI YAKLAŞIKLIK: ABİ MERKEZ: Balasagun (Karahıtay başşehri, Taraz’ın bağlı olduğu merkez) — Taraz adı geçmez. Hârizmşah Muhammed’in 1210’da Talas’ta (veya İlâmış sahrasında) Tayangu’yu yendiği (TDV Karahıtaylar) olayın Taraz’a hâkimiyet getirip getirmediği okunmadı.')),
  P('1218-01-01', '1260-01-01', 'mogol-imparatorlugu', 'yil', J(
    T('kasgar', 'Cengiz Han’ın Cebe Noyan kumandasında gönderdiği kuvvetlerin şehri ele geçirmesiyle (1218) birlikte ibadetler serbest bırakıldı.'),
    T('cagatay-hanligi', 'Batu Han zamanında Altın Orda’ya geçmiş olan Çu ve Yedisu havzalarını yeniden Çağatay Hanlığı topraklarına kattı.'),
    'BEYANLI YAKLAŞIKLIK: Cebe’nin 1218 seferi Küçlüğ’ü ortadan kaldırdı (TDV Hoten/Kâşgar); Taraz adı geçmez. 1218-1260: ulus ayrımı (Çağatay payı 1227 Mâverâünnehir/Yedisu; Çu-Yedisu Batu zamanında Altın Orda’ya geçmiş) Talas için okunamadı → birleşik Moğol İmparatorluğu yazıldı.')),
  P('1260-01-01', '1281-01-01', 'cagatay', 'yil', J(
    T('cagatay-hanligi', 'Algu da Arık-Buka adına Türkistan’da faaliyet göstermeye başladı. Çağatay Hanlığı toprakları yanında Hârizm ve Afganistan’ı da ele geçiren Algu, Kubilay Han’ın da desteğiyle Batu Han zamanında Altın Orda’ya geçmiş olan Çu ve Yedisu havzalarını yeniden Çağatay Hanlığı topraklarına kattı.'),
    'BEYANLI YAKLAŞIKLIK: Talas adı geçmez; Çu-Yedisu’nun Algu eliyle Çağatay’a dönüşü (1260-1266) alınmıştır. Mevcut zincir cagatay 1281-01-01.')),
]);

module.exports = { SEHIR, ILK, DEGISEN, QUOTES, T, W, K, P, g, IDLER, DIR, BASLIK };

// kuyrukyeni1 üretici: zincir_kuyruk.js + kronoloji_sinir_dogu_kuyrukyeni1.js
const fs = require('fs'), vm = require('vm'), path = require('path');
const DIR = __dirname, KOK = path.resolve(DIR, '..', '..', '..');
function yuk(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const adlar = {};
for (const d of (yuk(path.join(KOK, 'data/devletler.js')).DEVLETLER || [])) adlar[d.id] = d.ad;
for (const d of (yuk(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || [])) adlar[d.id] = adlar[d.id] || d.ad;
for (const k of fs.readdirSync(path.join(KOK, 'denetim/dogu'))) {
  const f = path.join(KOK, 'denetim/dogu', k, 'kunye_yeni.js');
  if (fs.existsSync(f)) { const w = yuk(f); for (const g of Object.keys(w)) for (const d of w[g]) adlar[d.id] = adlar[d.id] || d.ad; }
}
adlar['__BOSLUK__'] = 'boşluk (sahipsiz)';
const A = '; atıf, bu oturumda açılmadı';
const B = 'BEYANLI YAKLAŞIKLIK: ';

// ---- ortak kaynak metinleri ----
const K = {
  jos: 'Joseon Wangjo Sillok, Taejo 1/7/17 (17 Temmuz 1392 tahta çıkış; sillok.history.go.kr)' + A,
  ilhak: 'Japonya–Kore İlhak Antlaşması (22 Ağustos 1910 imza, 29 Ağustos 1910 ilan); Duus, P., The Abacus and the Sword, Berkeley 1995' + A,
  tesl: 'Japon kuvvetlerinin Seul’de ABD’ye teslim belgesi (9 Eylül 1945); Cumings, B., The Origins of the Korean War I, Princeton 1981' + A,
  rok: 'Kore Cumhuriyeti hükûmetinin ilanı (15 Ağustos 1948); Cumings, B., Korea’s Place in the Sun, 1997' + A,
  usam: 'Kore’de ABD Ordusu Askerî Hükûmeti (USAMGIK) 9 Eylül 1945–15 Ağustos 1948; Cumings 1981' + A,
  gor: 'Goryeo ülkesi bütünüyle Goryeo yönetiminde sürdü (Yuan’a vasal ama kendi hanedanı): Goryeosa (Jeong Inji vd., 1451) ve Cambridge History of China VI «Yuan–Korea»' + A,
  ming: 'Ming shi (Zhang Tingyu vd., 1739), juan 2 «Taizu ben ji» (Hongwu 1/8 = 1368 Eylül, Dadu’nun alınışı; künyeden gün)' + A,
  qing: 'Qing shi gao (1927), «Shizu ben ji» (Shunzhi 1/5 = 6 Haziran 1644 Dorgon Pekin’e girdi); Wakeman, F., The Great Enterprise, Berkeley 1985' + A,
  abdi: 'Qing hanedanı imparatorunun tahttan çekilme fermanı (12 Şubat 1912); Çin Cumhuriyeti Geçici Hükûmeti (Nanjing, 1 Ocak 1912)' + A,
  prc: 'Mao Zedong’un Çin Halk Cumhuriyeti’ni ilanı (1 Ekim 1949, Tiananmen)' + A,
  yuan: 'Yuan shi (Song Lian vd., 1370), juan 4–6 «Shizu ji» (Zhiyuan 8 = 1271 Yuan adının ilanı; atlas künyesi Yuan f=1260 ile uyumsuzluk için künye düzeltme önerisi)' + A,
};

const P = [];
function yer(ad, kume, o) { P.push(Object.assign({ ad, kume }, o)); }

// ---------- KORE (4 yerleşim, ortak zincir) ----------
function koreZincir(ad, kume, bolgeNot) {
  yer(ad, kume, {
    slices: [
      { f: '1281-01-01', d: 'goryeo', k: 'yil', devam: true, s: K.gor + ' | ' + bolgeNot },
      { f: '1392-07-17', d: 'joseon', k: 'gun', s: K.jos, b: 'Yi Seonggye Goryeo’yu devirip Joseon’u kurdu' },
      { f: '1910-08-29', d: 'japon-kore', k: 'gun', s: K.ilhak, b: 'Kore Japonya’ya ilhak edildi' },
      { f: '1945-09-09', d: 'abd-ordu-askeri-hukumeti-kore', k: 'gun', s: K.tesl + ' | BEYANLI YAKLAŞIKLIK: Japon teslimi 15 Ağustos 1945’te ilan edildi; 38. paralel güneyinde ABD idaresi fiilen 9 Eylül 1945’te başladı (atlas künyesi abd-ordu-askeri-hukumeti-kore f=1945-09-09)', b: '38. paralel güneyinde Japon idaresi bitti; ABD Ordusu Askerî Hükûmeti kuruldu' },
      { f: '1948-08-15', d: 'guney-kore', k: 'gun', s: K.rok, b: 'Kore Cumhuriyeti (Güney Kore) kuruldu' },
    ],
  });
}
koreZincir('Gimhae', 'koja1', 'Gimhae (Geumgwan Gaya merkezi, Goryeosa j.57 «金州») Goryeo/Joseon/Japon/ROK ülkesinde kaldı');
koreZincir('Goryeong (Daegaya)', 'koja1', 'Goryeong (Daegaya merkezi) aynı ardıl devlet zincirinde');
koreZincir('Sabi (Buyeo)', 'koja1', 'Sabi/Buyeo Güney Kore (Chungcheong) ülkesinde, 38. paralelin güneyinde');
koreZincir('Jindo', 'koja2', 'Jindo adası (Güney Jeolla) Goryeo’da; 1270-71 Sambyeolcho işgali zincirde ayrıdır');
// yinelenen Sanggyeong: cin2 kaydı kalır, koja1 silinir
yer('Sanggyeong (Longquanfu)', 'koja1', { sil: true, sil_not: 'cin2 kaydı (aynı koordinat 44.131/129.142, kur 0755-01-01, Liao shi juan 2-3 okundu) hem aynı zincire hem daha ayrıntılı kaynağa sahip; cin2 kalır. koja1 kaydı yalnız Xin Tangshu 219 + Liao shi 2 ile aynı iki dilimi taşıyordu.' });
yer('Sanggyeong (Longquanfu)', 'cin2', {
  bit: '0929-01-01',
  bit_kaynak: 'Liao shi juan 3 «Taizong shang» (Tianxian 4 = 929): Dongdan halkı Liaoyang’a (Dongping) taşındı, Sanggyeong/Tianfu boşaltıldı; cin2 kaydının kendi notu «Şehir 929’da terk (Dongdan halkı Liaoyang’a)» — Liao shi juan 3 (zh.wikisource.org/wiki/遼史/卷3; cin2 oturumunda okundu; bu oturumda yeniden açılmadı)',
  bit_not: 'kur 0755 ile bit 0929: terk edilen başkent; 929 sonrası aynı yerde sonraki yerleşim (Jin/Ming) bu kaydın dışında',
  slices: [],
});
yer('Xiazhou (Tongwancheng)', 'cin2', {
  bit: '0994-01-01',
  bit_kaynak: 'Song shi Taizong ben ji / juan 485 (Chunhua 5 = 994): Xiazhou kentinin surlarının yıkılması ve halkın Sui-Yin’e nakli; cin2 kaydının kendi s: kaynağı «yerleşim 994’te terk» (Song shi 485 okundu; yıkım emri atıf, açılmadı)',
  bit_not: 'idarî ad kâğıt üstünde sürdü; kent 994’te boşaltıldı. 1038 Batı Xia ilanı Xingqing’de (Yinchuan), bu yerleşimde değil',
  slices: [],
});

// ---------- ÇİN: Leshou ----------
const SD = 'Sima Guang, Zizhi tongjian ve Xin Wudai shi (Ouyang Xiu, 1053) ilgili benji bölümleri' + A;
const HB = B + 'Hebei (Hejian/Ying çevresi) Beş Hanedan–Song döneminde Yan (Liu Shouguang, 911-913), Liao ve Hebei askerî valileri nedeniyle yerel el değiştirmeler yıl düzeyinde izlenmedi; hanedan düzeyi sahip yazıldı. ';
yer('Leshou (Xianxian)', 'cin1', {
  onceki: 'tang',
  slices: [
    { f: '0907-06-01', d: 'sonraki-liang-5hanedan', k: 'yil', s: SD + ' | Zhu Wen Tang’dan tahtı aldı (Kaiping 1/4 = 907). ' + HB, b: 'Zhu Wen Tang’ı devirip Sonraki Liang’ı kurdu; Hebei Liang’a bağlandı' },
    { f: '0923-01-01', d: 'sonraki-tang-5hanedan', k: 'yil', s: SD + ' | Li Cunxu Sonraki Tang’ı kurdu (Tongguang 1 = 923). ' + HB, b: 'Sonraki Tang Liang’ı devirdi; Hebei Sonraki Tang’a geçti' },
    { f: '0936-01-01', d: 'sonraki-jin-5hanedan', k: 'yil', s: SD + ' | Shi Jingtang Sonraki Jin’i kurdu (936). ' + HB, b: 'Sonraki Jin Sonraki Tang’ın yerine geçti' },
    { f: '0947-01-01', d: 'sonraki-han-5hanedan', k: 'yil', s: SD + ' | Liu Zhiyuan Sonraki Han’ı kurdu (947). ' + HB, b: 'Sonraki Han Sonraki Jin’in yerine geçti' },
    { f: '0951-01-01', d: 'sonraki-zhou-5hanedan', k: 'yil', s: SD + ' | Guo Wei Sonraki Zhou’yu kurdu (951). ' + HB, b: 'Sonraki Zhou Sonraki Han’ın yerine geçti' },
    { f: '0960-01-01', d: 'song', k: 'yil', s: 'Song shi (Tuotuo vd., 1345), juan 1 «Taizu ben ji» (Zhao Kuangyin 960, Chenqiao)' + A + ' | Hejian (Ying/Xian zhou) Song-Liao sınırının Song tarafında; ' + HB, b: 'Zhao Kuangyin Song’u kurdu; Hejian Song’a bağlandı' },
    { f: '1127-01-01', d: 'jin-hanedani', k: 'yil', s: 'Jin shi (Tuotuo, 1344), juan 3 «Taizong ji» ve Song shi juan 23 «Qinzong ji» (Jingkang 2 = 1127)' + A + ' | ' + B + 'Hebei’nin Jin’e geçişi 1126-1128 arası kent kent oldu; Leshou/Xian zhou’ya özgü gün bulunamadı', b: 'Jin Hebei’yi Song’dan aldı (Jingkang olayı)' },
    { f: '1215-01-01', d: 'mogol-imparatorlugu', k: 'yil', s: 'Yuan shi juan 1 «Taizu ji» ve juan 150 «Shi Tianze»: 1213-1215 Moğol Hebei harekâtları' + A + ' | ' + B + 'Hebei Moğol/Jin arasında 1213-1220 el değiştirdi; Hejian çevresi için tek gün bulunamadı, 1215 yıl işareti', b: 'Moğollar Hebei’yi Jin’den aldı' },
    { f: '1260-01-01', d: 'yuan-hanedani', k: 'yil', s: K.yuan + ' | Kubilay 1260’ta han ilan edildi; Moğol İmparatorluğu bölünmeden Yuan’a geçiş (künye f=1260)', b: 'Moğol İmparatorluğu bölündü; Hebei Yuan Hanedanı’na kaldı' },
    { f: '1368-09-14', d: 'ming-hanedani', k: 'ay', s: K.ming + ' | ic_not: gün künyeden; Hebei Ming ordusuna 1368 Ağustos-Eylül’de düştü', b: 'Ming ordusu Dadu’yu aldı; Hebei Yuan’dan Ming’e geçti' },
    { f: '1644-04-25', d: '__BOSLUK__', k: 'gun', s: 'BOŞLUK BEYANI: arandı, bulunamadı: Chongzhen’in intiharı (25 Nisan 1644) ile Qing’in Pekin’e girişi (6 Haziran 1644) arasında Hebei’yi Li Zicheng’in Shun rejimi tuttu; atlasta Shun/Dashun kimliği yok (künye ihtiyacı) — Wakeman, The Great Enterprise 1985' + A, b: 'Chongzhen intihar etti, Ming Hebei’yi kaybetti; Li Zicheng’in Shun rejimi (atlasta kimliği yok)' },
    { f: '1644-06-06', d: 'qing-hanedani', k: 'gun', s: K.qing, b: 'Qing Pekin’e girdi; Hebei Qing’e bağlandı' },
    { f: '1912-02-12', d: 'cin-cumhuriyeti', k: 'gun', s: K.abdi, b: 'Qing imparatoru tahttan çekildi; Hebei Çin Cumhuriyeti’ne kaldı' },
    { f: '1949-10-01', d: 'cin-halk-cumhuriyeti', k: 'gun', s: K.prc + ' | ' + B + 'Hejian çevresi 1947-48’de fiilen KKP/Halk Kurtuluş Ordusu denetimindeydi (Pekin 31 Ocak 1949); 1937-45 Japon işgali (Kuzey Çin Geçici Hükûmeti/Wang Jingwei) ve 1945-49 iç savaş hanedan düzeyinde izlenmedi', b: 'Çin Halk Cumhuriyeti ilan edildi; Hebei ÇHC’ye bağlandı' },
  ],
});

// ---------- TİBET ----------
yer('Yarlung (Nêdong/Tsetang)', 'cin1', {
  onceki: 'tibet-imparatorlugu',
  slices: [
    { f: '0842-01-01', d: '__BOSLUK__', k: 'yil', s: 'BOŞLUK BEYANI: arandı, bulunamadı: Langdarma suikastı (842) sonrası Tibet İmparatorluğu çöktü («parçalanma çağı», ~842–1247); Yarlung vadisini imparatorluk soyundan yerel beyler tuttu, tek bir siyasî sahip olarak atlas kimliği yok; bu oturumda tek tek yerel hanedan kaynağı okunmadı — Snellgrove & Richardson, A Cultural History of Tibet 1968; Petech, Central Tibet and the Mongols 1990' + A, b: 'Tibet İmparatorluğu çöktü (Langdarma sonrası); Yarlung vadisi yerel beylerin eline geçti' },
    { f: '1264-01-01', d: 'sakya', k: 'yil', s: 'Petech, L., Central Tibet and the Mongols (Roma 1990) «Sa-skya yönetimi»; Shakabpa, Tibet: A Political History 1967' + A + ' | ' + B + 'Moğol–Yuan himayesinde Sakya idaresinin Yarlung (Nêdong) çevresine fiilî erişimi yıl düzeyinde; künye f=1264', b: 'Kubilay’ın Sakya yönetimine Tibet’in idaresini vermesi; Yarlung Sakya/Yuan idaresine girdi' },
    { f: '1354-01-01', d: 'tibet', k: 'yil', s: 'Petech 1990 «Phag-mo-gru-pa»: Changchub Gyaltsen Sakya’yı devirip Nêdong’u merkez yaptı (1354)' + A, b: 'Changchub Gyaltsen Sakya’yı devirdi; Nêdong merkezli Phagmodrupa yönetimi kuruldu' },
    { f: '1642-01-01', d: 'tibet-ganden-phodrang', k: 'yil', s: 'Shakabpa 1967; 5. Dalai Lama ve Gushri Han 1642 (Tsangpa’nın yıkılışı)' + A, b: 'V. Dalai Lama Gushri Han desteğiyle Tibet’in yönetimini aldı; Ganden Phodrang kuruldu' },
    { f: '1951-05-23', d: 'cin-halk-cumhuriyeti', k: 'gun', s: 'On Yedi Madde Antlaşması (23 Mayıs 1951, Pekin); Goldstein, M., A History of Modern Tibet 1913-1951, Berkeley 1989' + A + ' | BEYANLI YAKLAŞIKLIK: Qing amban/himaye (1720-1912) ve 1912-1950 fiilî bağımsızlık dönemi atlas künyesi tibet-ganden-phodrang içinde sayıldı; ÇHC fiilî idaresi Eylül 1951’de Lhasa’ya vardı', b: 'On Yedi Madde Antlaşması: Tibet ÇHC egemenliğini kabul etti' },
  ],
});

// ---------- GÜNEYDOĞU ASYA ----------
yer('Nakhon Pathom (Phra Pathom)', 'gdasya1', {
  slices: [
    { f: '1281-01-01', d: '__BOSLUK__', k: 'yil', devam: true, s: 'BOŞLUK BEYANI: arandı, bulunamadı: Nakhon Pathom’un 1281-1351 sahibi (Lavo/Kmer, Suphanburi ve Sukhothai nüfuz alanları arası); Coedès, The Indianized States of Southeast Asia 1968; Wyatt, Thailand: A Short History 1984' + A, },
    { f: '1351-01-01', d: 'ayutthaya', k: 'yil', s: 'Wyatt, D. K., Thailand: A Short History (Yale 1984) «Ayutthaya»: Ramathibodi 1351 Ayutthaya’yı kurdu; Nakhon Pathom Ayutthaya’nın batı çekirdek bölgesinde' + A + ' | ' + B + 'Nakhon Pathom’un Ayutthaya’ya katılış günü kaynakta yok; künye f=1351', b: 'Ramathibodi Ayutthaya’yı kurdu; Nakhon Pathom çevresi Ayutthaya’ya bağlandı' },
    { f: '1767-04-07', d: 'konbaung', k: 'gun', s: 'Wyatt 1984 «The Fall of Ayutthaya»: Burma ordusu Nisan 1767’de Ayutthaya’yı aldı' + A + ' | ' + B + 'Burma garnizonlarının Nakhon Pathom’u fiilen tuttuğuna dair yer kaydı yok; Ayutthaya havzası sahibi olarak yazıldı', b: 'Burma Ayutthaya’yı düşürdü; çevresi Konbaung denetimine girdi' },
    { f: '1767-12-28', d: 'tonburi', k: 'gun', s: 'Wyatt 1984: Phraya Taksin Burma’yı sürüp Thonburi’yi kurdu (künye f=1767-12-28; Taksin’in ilanı Aralık 1767)' + A, b: 'Taksin Burma’yı çıkardı; Thonburi Krallığı kuruldu' },
    { f: '1782-04-06', d: 'siyam-chakri', k: 'gun', s: 'Wyatt 1984: Chao Phraya Chakri (I. Rama) 6 Nisan 1782’de tahta çıktı; Rattanakosin' + A + ' | Siyam/Tayland 1939’dan Tayland; atlas künyesi siyam-chakri t yok (devam)', b: 'I. Rama Chakri Hanedanı’nı kurdu; Nakhon Pathom Rattanakosin Siyam’ında' },
  ],
});
yer('Halin (Hanlin)', 'gdasya1', {
  slices: [
    { f: '1281-01-01', d: '__BOSLUK__', k: 'yil', devam: true, s: 'BOŞLUK BEYANI: arandı, bulunamadı: Halin’in 1281-1313 sahibi (Pagan’ın çöküşü 1287-1297, Moğol akınları, Myinsaing kardeşler); Hall, A History of South-East Asia 1981; Harvey, History of Burma 1925' + A },
    { f: '1313-01-01', d: 'ava', k: 'yil', s: 'Harvey, G. E., History of Burma (1925) «Pinya, Sagaing and Ava»: Thihathu Pinya’yı kurdu (1313)' + A + ' | ' + B + 'Halin (Shwebo çevresi) Pinya/Sagaing/Ava merkezinin kuzeybatısında; ayrıntılı yerel kaynak yok', b: 'Pinya Krallığı kuruldu; Halin çevresi Yukarı Birmanya krallıklarına bağlandı' },
    { f: '1555-01-01', d: 'toungoo', k: 'yil', s: 'Harvey 1925: Bayinnaung Ava’yı aldı (Ocak 1555)' + A + ' | gün 1555-01-22 aktarılır; yıl işareti', b: 'Bayinnaung Ava’yı fethetti; Halin Toungoo’ya bağlandı' },
    { f: '1752-01-01', d: 'konbaung', k: 'yil', s: 'Harvey 1925: Alaungpaya Shwebo’da (Moksobo, Halin’in ~20 km yakını) isyan edip Konbaung’u kurdu (1752)' + A, b: 'Alaungpaya Shwebo’da Konbaung Hanedanı’nı kurdu' },
    { f: '1885-11-29', d: 'ingiliz-burma', k: 'gun', s: 'Üçüncü Anglo-Birman Savaşı: Mandalay’ın düşüşü ve Thibaw’ın teslimi (29 Kasım 1885); Upper Burma 1 Ocak 1886’da ilhak' + A, b: 'İngilizler Mandalay’ı alıp Thibaw’ı tahttan indirdi; Yukarı Birmanya İngiliz Burması’na katıldı' },
    { f: '1948-01-04', d: 'myanmar-birmanya', k: 'gun', s: 'Burma Bağımsızlık Yasası: 4 Ocak 1948 bağımsızlık' + A, b: 'Birmanya bağımsız oldu' },
  ],
});
yer('Muara Kaman (Kutai Martapura)', 'gdasya1', {
  kuyruk: '1281-01-01 → 2000-12-31',
  kuyruk_neden: 'Kutai Martapura’nın 1281 sonrası sürdüğü ve 1635’te Kutai Kertanegara’ya geçtiği Salasilah Kutai (yerel kronik) geleneğine dayanır; akademik teyit bu oturumda bulunamadı. Muara Kaman zincirini kurmak için gerekli: Kutai Kertanegara/Kutai Sultanlığı (1575-1908) ve Hollanda Doğu Hint (1908-1949) dilimleri, ama 1281-1575 arası kaynaksız.',
  slices: [],
});

// ---------- HİNT ----------
const MJ = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Bharatiya Vidya Bhavan, Bombay';
yer('Anuradhapura', 'hint1', {
  onceki: 'anuradhapura',
  kuyruk: '1215-01-01 → 2000-12-31',
  kuyruk_neden: 'Kalinga Magha istilası (1215) sonrası Rajarata/Anuradhapura’nın terk edilişi ve sonraki sahibi (Vanni beyleri, Kandy, Hollanda/İngiliz Seylanı) için bu oturumda kaynak okunmadı; akademik teyitsiz zincir yazılmadı.',
  slices: [
    { f: '1017-01-01', d: 'cola', k: 'yil', s: MJ + ', Vol. IV (1955) «Ceylon»: «in or shortly before A.D. 1017» Çola işgali (cin1 ucu); Anuradhapura Çola eline geçti (Mahinda V esir)' + A, b: 'Çola Rajaraja/Rajendra Anuradhapura’yı aldı; Sinhala krallığı kuzeyde Çola’ya geçti' },
    { f: '1070-01-01', d: 'seylan-sinhala', k: 'yil', s: MJ + ', Vol. V «Ceylon» ve Geiger, Culavamsa: Vijayabahu I Çola’yı kovdu (1070)' + A + ' | ' + B + 'Vijayabahu’nun merkezi Polonnaruwa; Anuradhapura onun hakimiyet alanında yazıldı', b: 'Vijayabahu I Çola’yı Seylan’dan çıkardı; Anuradhapura Sinhala krallığına döndü' },
  ],
});
yer('Banavasi', 'hint1', {
  onceki: 'kadamba-banavasi',
  slices: [
    { f: '0610-01-01', d: 'badami-calukya', k: 'onyil', s: MJ + ', Vol. III (1954) «Dynasties of South India»: Pulakesin II Banavasi Kadambalarını ezdi' + A, b: 'II. Pulakesin Banavasi Kadambalarını yendi; Banavasi Badami Çalukyalarına geçti' },
    { f: '0757-01-01', d: 'rastrakuta', k: 'yil', s: MJ + ', Vol. IV (1955) «Rashtrakutas»: Dantidurga Çalukya hâkimiyetini devirdi (c. 753-757)' + A + ' | künye f=0755; 757 badami-calukya t', b: 'Dantidurga Badami Çalukyalarını devirdi; Banavasi Rastrakuta’ya geçti' },
    { f: '0975-01-01', d: 'bati-calukya', k: 'yil', s: MJ + ', Vol. IV: Taila II Rastrakuta’yı yıktı (973-975); Banavasi Batı Çalukya idaresinde' + A, b: 'II. Taila Rastrakuta’yı devirdi; Banavasi Batı Çalukya’ya geçti' },
    { f: '1189-01-01', d: 'hoysala', k: 'yil', s: MJ + ', Vol. V «Hoysalas / Yadavas»' + A + ' | ' + B + 'Banavasi-12000 bölgesi Batı Çalukya çöküşünde Hoysala (Ballala II) ve Seuna/Yadava arasında paylaşıldı; Hoysala yazıldı, künye t=1343', b: 'Batı Çalukya çöktü; Banavasi çevresi Hoysala hâkimiyetine girdi' },
    { f: '1343-01-01', d: 'vijayanagara', k: 'yil', s: MJ + ', Vol. VI «Vijayanagara»' + A + ' | ' + B + 'Vijayanagara’nın Banavasi’yi tutuşu 1340-70 arası Hoysala/Delhi sonrası; yıl işareti = hoysala künye t', b: 'Hoysala sona erdi; Banavasi Vijayanagara İmparatorluğu’na bağlandı' },
    { f: '1565-01-01', d: 'nayak-devletleri', k: 'yil', s: 'Sewell, A Forgotten Empire 1900 «Talikota 1565»; Keladi Nayakları (Ikkeri/Bednur) bağımsızlaşma' + A + ' | ' + B + 'Keladi Nayakları Banavasi’yi tuttu (Shivappa Nayaka 17. yy); kesin bağımsızlık günü yok', b: 'Talikota yenilgisi sonrası Keladi Nayakları Banavasi’de bağımsızlaştı' },
    { f: '1763-01-01', d: 'meysur', k: 'yil', s: 'Haydar Ali’nin Bednur’u alışı (Mayıs 1763); Rao, Mysore Gazetteer' + A + ' | ' + B + 'Haydar Ali Bednur’u 1763’te aldı; kesin gün alınmadı', b: 'Haydar Ali Bednur’u (Keladi) alıp Banavasi’yi Meysur’a kattı' },
    { f: '1799-05-04', d: 'ingiliz-hindistani', k: 'gun', s: 'Srirangapatna’nın düşüşü, Tipu Sultan’ın ölümü (4 Mayıs 1799); Kanara İngiliz Şirketi’ne geçti' + A, b: 'Tipu Sultan öldü; Kuzey Kanara/Banavasi İngiliz Hindistanı’na geçti' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: 'Hindistan Bağımsızlık Yasası (15 Ağustos 1947)' + A, b: 'Hindistan bağımsız oldu; Banavasi Hindistan’a kaldı' },
  ],
});
yer('Chamba', 'hint1', {
  slices: [
    { f: '1281-01-01', d: 'chamba', k: 'onyil', devam: true, s: MJ + ', Vol. IV «The Hill State of Chamba»; Vogel, J. Ph., History of Chamba State 1911' + A + ' | ' + B + 'Mughal (1641), Sih (1809-1846) ve İngiliz (1846) üstünlükleri iç egemenliği kaldırmadı; Chamba rajaları yazıldı' },
    { f: '1948-04-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: 'Chamba’nın Himachal Pradesh’e katılışı (15 Nisan 1948); atlas künyesi chamba t=1948-01-01 (künye düzeltme önerisi: 1948-04-15)' + A, b: 'Chamba Himachal Pradesh’e katıldı; Hindistan egemenliğine girdi' },
  ],
});
yer('Kalinganagara (Mukhalingam)', 'hint1', {
  kuyruk: '1568-01-01 → 2000-12-31',
  kuyruk_neden: 'Gacapati çöküşü (1568) sonrası Srikakulam/Kalinga kıyısı Kutubşâhî-Bâbürlü-Haydarabad-İngiliz Kuzey Sirkarları zinciri için bu oturumda kaynak okunmadı.',
  slices: [
    { f: '1281-01-01', d: 'dogu-ganga', k: 'yil', devam: true, s: MJ + ', Vol. V «Eastern Gangas»' + A },
    { f: '1435-01-01', d: 'orissa', k: 'yil', s: MJ + ', Vol. VI «Gajapatis»: Kapilendra Gacapati tahtına çıktı (1434/35); Doğu Ganga hanedanı sona erdi' + A + ' | ic_not: 1434-35, 1435 seçildi; künye orissa Ganga+Gacapati birlikte', b: 'Kapilendra Gacapati Hanedanı’nı kurdu; Kalinga Gacapati Orissa’sına bağlandı' },
  ],
});
yer('Denduluru (Lendulura)', 'hint1', {
  onceki: 'vishnukundina',
  kuyruk: '1118-01-01 → 2000-12-31',
  kuyruk_neden: 'Vengi’nin 1118’de Çola’dan kopuşu sonrası Velanati Çodaları–Kakatiya–Reddi–Vijayanagara–Golkonda–Bâbürlü–Haydarabad–İngiliz Kuzey Sirkarları zinciri bu oturumda kaynaklı kurulamadı.',
  slices: [
    { f: '0631-01-01', d: 'dogu-calukya', k: 'onyil', s: MJ + ', Vol. III: Kubja Vishnuvardhana Vengi’de Doğu Çalukya’yı kurdu (c.624); Denduluru Vengi çekirdeğinde (Pedavegi ~5 km)' + A + ' | ' + B + 'Vişnukundina–Doğu Çalukya devri onyil düzeyi (631, cin zincirinin ucu)', b: 'Vişnukundina Hanedanı sona erdi; Denduluru Doğu Çalukya (Vengi) idaresine girdi' },
    { f: '1070-01-01', d: 'cola', k: 'yil', s: MJ + ', Vol. V «Kulottunga I»: Vengi–Çola birleşmesi (1070)' + A, b: 'I. Kulottunga Vengi tahtını alıp Doğu Çalukya’yı Çola ile birleştirdi' },
  ],
});
yer('Kaveripattinam (Puhar)', 'hint1', {
  onceki: 'kalabhra',
  slices: [
    { f: '0590-01-01', d: 'pallava', k: 'onyil', s: MJ + ', Vol. III: Simhavishnu Kalabhraları ezdi (c.575-590)' + A + ' | ' + B + 'Çola ülkesinde Pallava/Pandya/Muttaraiyar paylaşımı onyil düzeyi', b: 'Simhavishnu Kalabhra egemenliğine son verdi; Çola ülkesi Pallava’ya bağlandı' },
    { f: '0850-01-01', d: 'cola', k: 'onyil', s: MJ + ', Vol. IV «The Imperial Cholas»: Vijayalaya Thanjavur’u alıp Çola’yı yeniden kurdu (c.850)' + A, b: 'Vijayalaya Çola devletini yeniden kurdu; Kaveripattinam Çola’ya geçti' },
    { f: '1279-01-01', d: 'pandya', k: 'yil', s: MJ + ', Vol. V «Pandyas»: Jatavarman Sundara Pandya Çola’yı bitirdi (1279)' + A + ' | künye cola t=1279', b: 'III. Rajendra son Çola idi; Çola ülkesi İkinci Pandya İmparatorluğu’na geçti' },
    { f: '1323-01-01', d: 'delhi-sultanligi', k: 'yil', s: 'Hasan Nizami/Barani aktarımı: Malik Kafur 1311 akını, Ulugh Han (Muhammed b. Tuğluk) Pandya ülkesini alışı 1323' + A + ' | ' + B + 'Delhi’nin Ma’bar’ı doğrudan tutuşu 1323-35; künye pandya t=1323', b: 'Delhi Sultanlığı Ma’bar’ı (Pandya ülkesi) aldı' },
    { f: '1335-01-01', d: 'madurai-sultanligi', k: 'yil', s: 'Jalaluddin Ahsan Shah Madurai’de bağımsızlığını ilan etti (c.1335); Aiyangar, South India and Her Muhammadan Invaders 1921' + A, b: 'Celaleddin Ahsan Şah Delhi’den kopup Madurai Sultanlığı’nı kurdu' },
    { f: '1378-01-01', d: 'vijayanagara', k: 'yil', s: 'Sewell 1900; Kampana Udaiyar Madurai’yi aldı (c.1371-1378)' + A + ' | künye madurai-sultanligi t=1378; ' + B + 'Çola ülkesi Madurai’den ayrı olarak Vijayanagara’ya geçmiş olabilir; yıl işareti', b: 'Vijayanagara Madurai Sultanlığı’nı bitirdi; Çola ülkesi Vijayanagara’ya bağlandı' },
    { f: '1532-01-01', d: 'nayak-devletleri', k: 'yil', s: 'Sathyanatha Aiyar, History of the Nayaks of Madura 1924; Tancur Nayak Sevappa (c.1532/35)' + A + ' | ic_not: Sevappa tarih 1532-1535 arası', b: 'Sevappa Nayak Vijayanagara adına Tancur’da Nâyak yönetimini kurdu' },
    { f: '1676-01-01', d: 'tancur-maratha', k: 'yil', s: 'Ekoji (Venkoji) Tancur’u Nâyaklardan aldı (1674-76); Sarkar/Gazetteer' + A + ' | künye tancur-maratha f=1676', b: 'Ekoji Maratha Tancur’u Nâyaklardan aldı; Tancur Maratha Krallığı kuruldu' },
    { f: '1855-10-29', d: 'ingiliz-hindistani', k: 'gun', s: 'Tancur’un Lapse Doktrini ile İngiliz Hindistanı’na katılışı (II. Şivaji’nin ölümü, 29 Ekim 1855); Gazetteer of South India' + A + ' | atlas künyesi tancur-maratha t=1855-01-01 (künye düzeltme önerisi: 1855-10-29)', b: 'II. Şivaji öldü; Tancur Lapse Doktrini ile İngiliz Hindistanı’na katıldı' },
    { f: '1947-08-15', d: 'hindistan-cumhuriyeti', k: 'gun', s: 'Hindistan Bağımsızlık Yasası (15 Ağustos 1947)' + A, b: 'Hindistan bağımsız oldu; Kaveripattinam Hindistan’a kaldı' },
  ],
});
yer('Valabhi', 'hint1', {
  kuyruk: '0767-01-01 → 2000-12-31',
  kuyruk_neden: 'Valabhi’nin 770 civarı yıkımı (Majumdar: neden çözülmemiş) sonrası köy olarak sürdüğü ve Saurashtra zinciri (Çavda/Çaulukya/Gucerat Sultanlığı/Bâbürlü/Gaekwar/İngiliz/Hindistan) bu oturumda kaynaklı kurulamadı.',
  slices: [],
});
yer('Aror (Alor)', 'hint1', {
  kuyruk: '1010-01-01 → 2000-12-31',
  kuyruk_neden: '1010 sonrası Aror (Alor) için Gazneli/Karmatî-Mültan/Sûmra-Samma sınırı kaynak okunmadı; Aror 962 civarı Indus yatağı değişimiyle terk edilmiş olabilir (kaynak okunmadı). Bit kararı verilmedi.',
  slices: [],
});
yer('Karnasuvarna (Rangamati)', 'hint1', {
  kuyruk: '0637-01-01 → 2000-12-31',
  kuyruk_neden: '637 sonrası Karnasuvarna’nın varlığı ve konumu (Majumdar: kesin tespit edilemez) kaynaklı teyitli değil; var olduğu bilinmeyen yer için zincir yazılmadı. Çevre (Murşidâbâd) zincirinin sahibi başka yerleşimlerdedir.',
  slices: [],
});
yer('Ye (Yecheng)', 'cin1', {
  kuyruk: '0618-06-18 → 2000-12-31',
  kuyruk_neden: 'Ye 580’de yıkıldı, kent Anyang’a taşındı; 618 sonrası aynı noktada (Linzhang ilçesi içinde) yerleşim sürüp sürmediği kaynakla bu oturumda doğrulanmadı. Bit de yazılamadı çünkü cin1’in 581-618 Sui dilimi (abi merkez Anyang) zaten yerleşimi sürdü sayıyor.',
  slices: [],
});

// ---------- üretim ----------
const out = [], sinir = [];
function t_(x) { return x; }
for (const p of P) {
  const e = { ad: p.ad, kume: p.kume };
  if (p.sil) { e.sil = true; e.sil_not = p.sil_not; out.push(e); continue; }
  e.s_ek = [];
  const sl = p.slices || [];
  sl.forEach((s, i) => {
    const t = i + 1 < sl.length ? sl[i + 1].f : (p.kuyruk ? p.kuyruk.split(' ')[0] : '2000-12-31');
    const o = { f: s.f, t, d: s.d, kesinlik: s.k, kaynak: s.s };
    if (s.devam) o.devam = true;
    e.s_ek.push(o);
  });
  if (p.bit) { e.bit = p.bit; e.bit_kaynak = p.bit_kaynak; e.bit_not = p.bit_not; }
  if (p.kuyruk) { e.kuyruk_gerekli = p.kuyruk; e.kuyruk_neden = p.kuyruk_neden; }
  out.push(e);
  // sınır maddeleri
  sl.forEach((s, i) => {
    if (s.devam) return;
    const old = i > 0 ? sl[i - 1].d : (p.onceki || null);
    const yeniBos = s.d === '__BOSLUK__';
    const eskiBos = old === '__BOSLUK__';
    const kazanan = yeniBos ? old : s.d;
    let taraflar = yeniBos ? [old] : (old && !eskiBos ? [s.d, old] : [s.d]);
    if (!kazanan) return;
    taraflar = taraflar.filter(x => !['dogu-ganga','kadamba-banavasi','vishnukundina','anuradhapura','kalabhra'].includes(x));  // küme-dışı kimlik (hint1 künyesi); dogrula kuyrukyeni1 tek başına bilmez
    const ya = p.ad.replace(/ \(.*/, '');
    sinir.push({
      t: s.f, devlet: kazanan, taraflar,
      b: (s.b || (ya + ': devir')) + ' — ' + ya,
      tur: yeniBos ? 'toprak-kayip' : 'toprak-kazanc',
      onem: 2, dunya: 1, kapsam: 'dis',
      yer: ya, yer_id: p.ad,
      etiket: ['toprak-degisimi', 'konu-siyasi', 'dogu-kuyruk-1281-2000'],
      d: ya + ' yerleşiminin sahibi ' + (old ? (adlar[old] || old) : '?') + ' iken ' + (yeniBos ? 'sahipsiz kaldı (beyanlı boşluk)' : (adlar[s.d] || s.d) + ' oldu') + '. Gün/yıl hassasiyeti: ' + s.k + '.',
      kaynak: s.s,
      kesinlik: s.k,
      sinir_id: [],
    });
  });
}
fs.writeFileSync(path.join(DIR, 'zincir_kuyruk.js'),
  '// kuyrukyeni1: yeni yerleşimlerin 1281-sonrası kuyrukları. s_ek[0].f = kaydın mevcut son t (devam:true ise aynı sahip sürüyor).\nwindow.ZINCIR_DOGU_KUYRUKYENI1 = ' + JSON.stringify(out, null, 1) + ';\n');
fs.writeFileSync(path.join(DIR, 'kronoloji_sinir_dogu_kuyrukyeni1.js'),
  '// kuyrukyeni1: kuyruk zincirlerinin devir günleri için sınır maddeleri (Değişmez 2).\nwindow.KRONOLOJI_SINIR_DOGU_KUYRUKYENI1 = ' + JSON.stringify(sinir, null, 1) + ';\n');
console.log('yerlesim kaydi', out.length, 'sinir maddesi', sinir.length);

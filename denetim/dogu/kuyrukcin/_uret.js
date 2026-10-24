// kuyrukcin uretici: cin1/2/3 yama parcalarini + yeni dilimleri birlestirir; yama_kuyrukcin.js ve kronoloji_sinir_dogu_kuyrukcin.js yazar.
// node denetim/dogu/kuyrukcin/_uret.js
const fs = require('fs'), vm = require('vm');
const KOK = 'C:/atlas/.claude/worktrees/dogu/';
const DIR = KOK + 'denetim/dogu/kuyrukcin/';
const GUN = require(KOK + 'js/gun.js');
const onceki = require('./_onceki.js');
const ILK = JSON.parse(fs.readFileSync(DIR + '_mevcut_ilk.json', 'utf8'));

function yukle(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
// onceki kumelerin sinir maddeleri (kopyalamak icin)
const CIN_SINIR = [];
for (const k of ['cin1', 'cin2', 'cin3']) {
  const w = yukle(KOK + `denetim/dogu/${k}/kronoloji_sinir_dogu_${k}.js`);
  for (const g of Object.keys(w)) for (const m of w[g]) CIN_SINIR.push(Object.assign({ _k: k }, m));
}

// ---------- yardimcilar ----------
const AD = { 'song': 'Song', 'jin-hanedani': 'Jin (Curçen)', 'mogol-imparatorlugu': 'Moğol İmparatorluğu', 'yuan-hanedani': 'Yuan', 'bati-xia': 'Batı Xia',
  'dongxia': 'Doğu Xia (Pu-xian Wannu)', 'liao-hanedani': 'Liao', 'guney-tang': 'Güney Tang', 'yang-wu': 'Yang Wu', 'tang': 'Tang', 'wuyue': 'Wuyue',
  'sonraki-liang-5hanedan': 'Sonraki Liang', 'sonraki-tang-5hanedan': 'Sonraki Tang', 'sonraki-jin-5hanedan': 'Sonraki Jin', 'sonraki-han-5hanedan': 'Sonraki Han',
  'sonraki-zhou-5hanedan': 'Sonraki Zhou', 'min-krallik': 'Min', 'chu-ma': 'Chu (Ma)', 'guney-han-10krallik': 'Güney Han', 'onceki-shu': 'Önceki Shu', 'sonraki-shu': 'Sonraki Shu',
  'nan-ping-jingnan': 'Nan Ping (Jingnan)', 'kuzey-han-10krallik': 'Kuzey Han', 'tsongkha': 'Tsongkha' };
const ad = (d) => AD[d] || d;
const P = (f, t, d, kesinlik, kaynak) => ({ f, t, d, kesinlik, kaynak, _yeni: true });
const kopya = (sehir, d, f) => { const p = onceki[sehir].find(x => x.d === d && (!f || x.f === f)); if (!p) throw new Error('kopya yok ' + sehir + ' ' + d + ' ' + f); const { _dosya, ...o } = p; return Object.assign({}, o, { _kopya: _dosya }); };
const hepsi = (sehir) => onceki[sehir].map(p => { const { _dosya, ...o } = p; return Object.assign({}, o, { _kopya: _dosya }); });
const kay = (sehir, d, f) => onceki[sehir].find(x => x.d === d && (!f || x.f === f)).kaynak;

// ---------- ortak kaynak metinleri ----------
const SONG960 = "Tuotuo vd., Song shi, juan 1 «Taizu ben ji 1» (zh.wikisource.org/wiki/宋史/卷001): 「建隆元年春正月乙巳，大赦，改元，定有天下之號曰宋。」 · Xin Wudai shi, juan 12: 「七年春正月甲辰，遜于位。宋興。」 (Song'un kuruluşu 960-02-04; Zhou çocuk imparatorunun feragati 960-02-03 BEYANI: Kaifeng yamasıyla aynı)";
const Y1260 = "Song Lian vd., Yuan shi, juan 4 «Shizu ji 1» (zh.wikisource.org/wiki/元史/卷004): 「中統元年春三月戊辰朔，車駕至開平。…辛卯，帝即皇帝位」 ; «丙戌，建元中統，詔曰…可自庚申年五月十九日，建元為中統元年» · devir günü künye f=1260-01-01 (YIL DÜZEYİ; gerçek ilan 1260 3. ay 辛卯, ad 'Da Yuan' 1271: Yuan shi 7 «可建國號曰大元»)";
const JIN_SON = "Tuotuo vd., Jin shi, juan 18 «Aizong ji xia» (zh.wikisource.org/wiki/金史/卷18): 「己酉，承麟即皇帝位。…帝自縊于幽蘭軒。…末帝為亂兵所害，金亡。」 (天興三年 1. ay 己酉 = 1234-02-09 Jülyen; Jin künye t ile aynı)";
const BEYAN_5D = (sehir) => ` | ABİ MERKEZ: Luoyang (hanedan başkenti zinciri; cin2/cin3 yamasındaki aynı devir günleri) — ${sehir}'ın bu hanedanların valiliğine bağlı olduğu varsayımı; şehir adıyla devir kaynağı okunmadı, yerel isyan/özerklik dönemleri ayrıca okunmadı (BEYANLI YAKLAŞIKLIK).`;
const BEYAN_1260 = " | " + Y1260;

function bes_hanedan(sehir, kaynakSehir) {
  // Luoyang'in cin2/cin3 5-hanedan dilimlerini ikinci sehre nominal (abi merkez) olarak uyarlar
  const L = (d) => onceki['Luoyang'].find(x => x.d === d);
  const mk = (d, f, t) => P(f, t, d, L(d).kesinlik, L(d).kaynak + BEYAN_5D(sehir));
  return {
    liang: mk('sonraki-liang-5hanedan', '0907-06-01', '0923-11-19'),
    tang5: mk('sonraki-tang-5hanedan', '0923-11-19', '0937-01-11'),
    jin5: mk('sonraki-jin-5hanedan', '0937-01-11', '0947-01-10'),
    han5: P('0947-01-10', '0951-02-13', 'sonraki-han-5hanedan', 'gun', L('sonraki-han-5hanedan').kaynak + BEYAN_5D(sehir) + ' | BEYAN: 947-01-10→947-06-23 Liao işgal aralığı ' + sehir + ' için okunmadı; Han\'a bağlandı (Han ilanı: Xin Wudai shi 10 «辛未，皇帝即位，稱天福十二年»; Han\'ın başkente girişi 947-06-23).'),
    zhou5: mk('sonraki-zhou-5hanedan', '0951-02-13', '0960-02-04'),
  };
}

const SEHIR = {};   // ad -> {dilimler:[...], notlar:..}

// ============ Xi'an (Chang'an) ============
{
  const a = "Xi'an (Chang'an)";
  const b = bes_hanedan("Xi'an (Chang'an)");
  SEHIR[a] = [].concat(hepsi(a), [
    b.liang, b.tang5, b.jin5, b.han5, b.zhou5,
    P('0960-02-04', '1129-11-14', 'song', 'gun', SONG960 + " ‖ BİTİŞ: Tuotuo vd., Jin shi, juan 3 «Taizong ji» (zh.wikisource.org/wiki/金史/卷3): 「十月丙子朔，京兆府降。」 (天會七年 10. ay 丙子朔 = 1129-11-14 Jülyen); önceki giriş: 「宗翰復遣婁室攻下同、華、京兆、鳳翔，擒宋經制使傅亮。」 (天會六年 2. ay) — BEYAN: 1128'deki ilk fetih ile 1129-10 'teslim' arasındaki Song geri alımı kaynakta ayrıca okunmadı; kalıcı Jin devri 1129-11-14. Song'un Chang'an (Yongxing jun lu / Jingzhao fu) egemenliği Song shi coğrafya bölümünden okunmadı (Song shi 87; açılmadı) — Jin shi'nin 'Song valisi Fu Liang esir' ifadesi Song egemenliğini dolaylı teyit eder."),
    P('1129-11-14', '1231-10-10', 'jin-hanedani', 'gun', "Jin shi, juan 3 (1129-11-14 devri; üstte) ‖ BİTİŞ: Jin shi, juan 17 «Aizong ji shang» (zh.wikisource.org/wiki/金史/卷17): 「八年春正月，大元兵…夏四月丁巳朔，赦。…兩行省棄京兆，遷居民于河南，留慶山奴守之」 ; 「九月丙申，慈聖宮皇太后…慶山奴棄京兆東還」 (正大八年 9. ay 丙申 = 1231-10-10 Jülyen) · Yuan shi, juan 2: 「三年辛卯春二月，克鳳翔，攻洛陽、河中諸城，下之。」 · BEYAN: Qi (Liu Yu, 1130-1137) vasal dönemi Jin'e yazıldı (da-qi-liu-yu kimliği cin3 künyesinde; atlas'ta yok) — BEYANLI YAKLAŞIKLIK."),
    P('1231-10-10', '1260-01-01', 'mogol-imparatorlugu', 'gun', "Jin shi, juan 17 «慶山奴棄京兆東還» (正大八年 9. ay 丙申 = 1231-10-10) ‖ BİTİŞ: Moğol künye t=1260-01-01 (yıl düzeyi) · " + Y1260 + " · BEYAN: Jin'in terk ettiği şehre Moğol yönetiminin fiilî giriş günü kaynakta okunmadı; terk günü devir alındı (BEYANLI YAKLAŞIKLIK)."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260 + " · Yuan'ın Xi'an üzerindeki egemenliği (Moğol → Yuan, aynı hâkimiyet sürerken hanedan adı değişimi) künye devridir."),
  ]);
}

// ============ Luoyang ============
{
  const a = 'Luoyang';
  const o = hepsi(a);
  const cin1Tang = o.find(p => p.d === 'tang' && p.f === '0705-03-03');
  const an1 = o.find(p => p.d === 'an-lushan-yan' && p.f === '0756-01-18');
  const an2 = o.find(p => p.d === 'an-lushan-yan' && p.f === '0759-09-26');
  const bol = (p, f, t, ek) => Object.assign({}, p, { f, t, kaynak: p.kaynak + ek, _yeni: true, _kopya: undefined });
  const pre = o.filter(p => p.f < '0705-03-03');
  const bes = o.filter(p => p.f >= '0907-06-01' && p.f < '0960-02-04');
  SEHIR[a] = [].concat(pre, [
    bol(cin1Tang, '0705-03-03', '0756-01-18', " | BÖLÜNDÜ (kuyrukcin): cin1'in tek parça 'tang 705→907' dilimi, cin2'nin an-lushan-yan dilimleriyle ÇAKIŞIYORDU; Tang dilimi 756-01-18'de kesildi (Jiu Tang shu 9: 「丁酉，祿山陷東京」)."),
    an1,
    P('0757-01-01', '0759-09-26', 'tang', 'yil', "Jiu Tang shu, juan 10 «Suzong ji» (zh.wikisource.org/wiki/舊唐書/卷10): 「庚申，安慶緒與其黨奔河北。壬戌，廣平王入東京，…」 (Luoyang Tang'a döndü; gün/ay yok: YYYY-01-01 kuralı) ‖ BİTİŞ: Jiu Tang shu, juan 200 shang «Shi Siming»: 「九月，寇汴州，…又陷洛陽，與太尉光弼相拒。」 (759-09-26). BÖLÜNEN Tang dilimi (cin2 an-lushan-yan 756-01-18→757-01-01 ve 759-09-26→762-11-20 arasındaki aralık)."),
    an2,
    bol(cin1Tang, '0762-11-20', '0907-06-01', " | BÖLÜNDÜ (kuyrukcin): Tang dilimi 762-11-20'de (Jiu Tang shu 11: 「壬申，王師次洛陽北郊。…乙亥，雍王奏收東京…」) yeniden başlar; bitiş 907-06-01 değişmedi."),
  ], bes, [
    P('0960-02-04', '1126-11-29', 'song', 'gun', SONG960 + " ‖ BİTİŞ: Tuotuo vd., Jin shi, juan 3 «Taizong ji» (zh.wikisource.org/wiki/金史/卷3): 「十一月甲子，宗翰自太原趨汴。…乙亥，宗翰克隆德府。活女渡盟津。西京、永安軍、鄭州皆降。」 (天會四年 11. ay 乙亥 = 1126-11-29 Jülyen; 『西京』 = Song Xijing/Henan fu = Luoyang; 乙亥–庚辰 arası 1126-11-29..12-04 ±5 gün belirsizlik) · BEYAN: Jin shi 3 (天會六年 2. ay) 「遷洛陽、襄陽、穎昌、汝、鄭、均、房、唐、鄧、陳、蔡之民于河北」 — 1127-1128 Song/Jin aralığı ve Qi (Liu Yu, 1130-1137) dönemi Jin'e yazıldı; da-qi-liu-yu kimliği atlas'ta yok (cin3 künyesinde) — BEYANLI YAKLAŞIKLIK."),
    P('1126-11-29', '1233-07-17', 'jin-hanedani', 'gun', "Jin shi, juan 3 (1126-11-29; üstte) ‖ BİTİŞ: Jin shi, juan 18 «Aizong ji xia» (zh.wikisource.org/wiki/金史/卷18): 「六月己卯，官奴及其党…中京留守、權參政烏林答胡土棄城奔蔡」 ; 「壬午，中京破，留守兼便宜總帥強伸死之」 (天興二年 6. ay 壬午 = 1233-07-17 Jülyen; Jin 'Zhongjing' = Luoyang) · BEYAN: Jin shi 17 「三月丁亥，大元軍平中京，留守撒合輦投水死」 (天興元年 3. ay 丁亥 = 1232-03-29) Moğol ilk 'pacify'; Jin'in geri aldığı ve 1233-07-17'de kesin düştüğü kabul edildi (iki ifade arasında açıkça 'geri alma' kaydı okunmadı) — BEYANLI YAKLAŞIKLIK."),
    P('1233-07-17', '1260-01-01', 'mogol-imparatorlugu', 'gun', "Jin shi, juan 18 «壬午，中京破，留守兼便宜總帥強伸死之» (1233-07-17) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260),
  ]);
}

// ============ Nanking (Nanjing) ============
{
  const a = 'Nanking (Nanjing)';
  const o = hepsi(a);
  const pre = o.filter(p => p.f < '0618-06-18');
  const tg = o.find(p => p.d === 'guney-tang');
  SEHIR[a] = [].concat(pre, [
    P('0618-06-18', '0902-01-01', 'tang', 'yil', "Jiu Tang shu, juan 1 «甲子，高祖即皇帝位於太極殿» (618-06-18; cin1 sui diliminin bitişi) · BEYAN: 618-624 arası Jiangnan'daki rakip rejimler (Du Fuwei, Fu Gongshi vb.) ve 624-902 arası Tang valilikleri için şehir adıyla (Danyang/Shengzhou/Jinling) devir kaynağı OKUNMADI; Tang hanedan egemenliği nominal olarak yazıldı (BEYANLI YAKLAŞIKLIK; Yang Wu künye f=0902-01-01'e kadar). Bitiş: Xin Wudai shi, juan 61 «Wu shi jia» (zh.wikisource.org/wiki/新五代史/卷61): 「昇州刺史馮弘鐸來附」 (Yang Xingmi'ye bağlanış, yıl verilmiyor; Wu künyesi 902)."),
    P('0902-01-01', '0937-11-10', 'yang-wu', 'yil', "Xin Wudai shi, juan 61 «Wu shi jia»: 「昇州刺史馮弘鐸來附」 ; 「徐溫領昇州刺史，治舟師於金陵」 ; 「十四年，徐溫徙治金陵」 ; 「七月，改昇州大都督府為金陵府，拜徐溫金陵尹」 (Shengzhou/Jinling Wu'ya bağlı; yıl düzeyi: Yang Wu künye f=0902-01-01) ‖ BİTİŞ: cin3 guney-tang başlangıcı 937-11-10 (Xin Wudai shi 62: 「十月，溥遣攝太尉楊璘傳位於昪，國號齊，改元昇元」)."),
    tg,
    P('0976-01-01', '1275-03-27', 'song', 'yil', "cin3 guney-tang bitişi 976-01-01 (yıl düzeyi; Song, Jinling'i 975-976 kışında aldı) ‖ BİTİŞ: Song Lian vd., Yuan shi, juan 8 «Shizu ji 5» (zh.wikisource.org/wiki/元史/卷008): 「庚午，大軍次建康府，宋沿江制置使趙溍南走，都統、權兵馬司事徐王榮、翁福、茅世雄等及鎮軍曹旺以城降」 (至元十二年 2. ay 庚午 = 1275-03-27 Jülyen) · Song shi, juan 47: 「癸酉，都統徐旺榮迎大元兵入建康府」 (德祐元年 3. ay 癸酉 ≈ 1275-03-30; iki kaynak 3 gün farkı: Yuan shi esas alındı)."),
    P('1275-03-27', '1281-01-01', 'yuan-hanedani', 'gun', "Yuan shi, juan 8 «大軍次建康府…以城降» (1275-03-27) · Yuan'ın Jiankang yönetimi 1281 sonrası mevcut zincire sürer."),
  ]);
}

// ============ Jingzhou ============
{
  const a = 'Jingzhou';
  SEHIR[a] = [].concat(hepsi(a), [
    P('0963-01-01', '1275-05-03', 'song', 'yil', "cin2 nan-ping-jingnan bitişi 963-01-01 (Xin Wudai shi 69: Gao Jichong 963 teslim; yıl düzeyi) · Song'un Jingzhou (Jiangling fu) egemenliği Song shi 47'de «京湖宣撫…知江陵府» ifadeleriyle görülür ‖ BİTİŞ: Yuan shi, juan 8 (zh.wikisource.org/wiki/元史/卷008): 「丁未，阿里海牙遣郎中張鼎齎詔入江陵，宋…湖制置朱禩孫，湖北制置副使高達，京西湖北提刑青陽夢炎、李湜始出降」 ; 「阿里海牙入江陵，分道遣使招諭未下州郡」 (至元十二年 4. ay 丁未 = 1275-05-03 Jülyen) · Song shi, juan 47: 「戊申，京湖宣撫朱禩孫、湖北制置副使高達以江陵降，京湖北路相繼皆下」 (德祐元年 4. ay 戊申 = 1275-05-04; iki kaynak 1 gün farklı: Yuan shi esas)."),
    P('1275-05-03', '1281-01-01', 'yuan-hanedani', 'gun', "Yuan shi, juan 8 「阿里海牙入江陵」 (1275-05-03)."),
  ]);
}

// ============ Kaifeng (mevcut zincir 1000-01-01'de başlar) ============
{
  const a = 'Kaifeng';
  const o = hepsi(a).filter(p => p.f < '1000-01-01');
  const song = o.find(p => p.d === 'song');
  SEHIR[a] = o;  // song 0960-02-04 → 1000-01-01 zaten cin3'te; 1127-1138 parçaları mevcut zincirle çakıştığı için ATILDI
}

// ============ Hangzhou ============
{
  const a = 'Hangzhou';
  const o = hepsi(a);
  const wu = o.find(p => p.d === 'wuyue');
  const sg = o.find(p => p.d === 'song');
  SEHIR[a] = [
    Object.assign({}, wu, { t: '0978-06-09', _yeni: true, _kopya: undefined, kaynak: wu.kaynak + " | DÜZELTME (kuyrukcin): cin2 diliminin t'si 978-01-01 (yıl düzeyi) idi ve cin3 song diliminin f=978-06-09'u ile arasında 159 günlük boşluk bırakıyordu; Wuyue t=978-06-09 yapıldı (Song shi 4 «五月乙酉…錢俶獻其兩浙諸州», cin3)." }),
    sg,
  ];
}

// ============ Taiyuan ============
{
  const a = 'Taiyuan';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1126-09-21', '1234-02-09', 'jin-hanedani', 'gun', "Jin shi, juan 3 (zh.wikisource.org/wiki/金史/卷3): 「九月丙寅，宗翰克太原，執經略使張孝純。」 (天會四年 9. ay 丙寅 = 1126-09-21 Jülyen) ‖ BİTİŞ (BEYANLI): " + JIN_SON + " · BEYAN: 1217-1219 el değiştirmeleri tek bir kalıcı devir günü vermiyor — Jin shi 15: 「九月乙亥，下太原府，元帥左監軍兼知樞府事烏古論德升死之。」 (興定二年 9. ay) ; 「壬辰，以大元兵已定太原，河北事勢非復向日」 (三年 1. ay) ; 「戊子，遼州總領提控唐括狗兒帥師復太原府。」 (三年 6. ay: Jin geri aldı) · Yuan shi, juan 1: 「木華黎自西京入河東，克太原、平陽及忻、代、澤、潞、汾、霍等州。」 (十三年戊寅 = 1218). Jin shi 16-18'de Taiyuan'ın yeniden düştüğüne dair madde YOK; Moğol hâkimiyeti en geç Jin'in sonunda (1234-02-09) kabul edildi (BEYANLI YAKLAŞIKLIK); Yuan shi 2: 『茶合帶，太原府』 (1236 paylaşımı) Moğol sahipliğini teyit eder."),
    P('1234-02-09', '1260-01-01', 'mogol-imparatorlugu', 'gun', JIN_SON + " ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260),
  ]);
}

// ============ Zhengding ============
{
  const a = 'Zhengding';
  const b = bes_hanedan('Zhengding');
  SEHIR[a] = [].concat(hepsi(a), [
    b.jin5, b.han5, b.zhou5,
    P('0960-02-04', '1126-09-26', 'song', 'gun', SONG960 + " ‖ BİTİŞ: Jin shi, juan 3 (zh.wikisource.org/wiki/金史/卷3): 「辛未，宗望破…克真定，殺其守李邈。」 (天會四年 9. ay 辛未 = 1126-09-26 Jülyen; 『克真定』; metindeki 井陘 sentence'ı «辛未，宗望破宋…師閔于井陘，取天威軍»). Song egemenliği (Zhending fu / Hebei) bu kümede Song shi coğrafyasından okunmadı."),
    P('1126-09-26', '1225-05-09', 'jin-hanedani', 'gun', "Jin shi, juan 3 «克真定» (1126-09-26) ‖ BİTİŞ: Jin shi, juan 17 «Aizong ji shang» (zh.wikisource.org/wiki/金史/卷17): 「夏四月辛卯朔，恆山公武仙自真定府來奔。」 (正大二年 4. ay 辛卯朔 = 1225-05-09 Jülyen) · BEYAN: Yuan shi 1: 「木華黎徇地至真定，武仙出降。以史天倪為河北西路兵馬都元帥」 (1218) ; 「武仙以真定叛，殺史天倪。」; Jin shi 15: 「甲辰，威州刺史武仙…尋進仙權知真定府事」, 「真定招撫使武仙」 — 1218-1225 arası Wu Xian (Jin 'Hengshan gong') yönetiminde Jin-Moğol arası gidiş gelişler tek bir kalıcı gün vermiyor; Wu Xian'ın şehri terk ettiği gün (1225-05-09) Moğol devri alındı (BEYANLI YAKLAŞIKLIK)."),
    P('1225-05-09', '1260-01-01', 'mogol-imparatorlugu', 'gun', "Jin shi, juan 17 «恆山公武仙自真定府來奔» (1225-05-09) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · BEYAN: Şehre Moğol (Shi Tianze) yönetiminin giriş günü kaynakta okunmadı; Wu Xian'ın ayrılışı devir sayıldı."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260),
  ]);
}

// ============ Pekin (Hanbalık) ============
{
  const a = 'Pekin (Hanbalık)';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1123-01-04', '1123-05-07', 'jin-hanedani', 'gun', "Tuotuo vd., Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2): 「十二月，上伐燕京。…庚寅，遼統軍都監高六等來送款。上至燕京，入自南門，…遼知樞密院左企弓、虞仲文，…奉表降。」 (Tianfu 6 12. ay 庚寅 = 1123-01-04 Jülyen) ‖ BİTİŞ: Song shi, juan 22 «Huizong ji 4» (zh.wikisource.org/wiki/宋史/卷022): 「夏四月癸巳，金人遣楊璞以誓書及燕京、涿、易、檀、順、景、薊州來歸。」 (宣和五年 4. ay 癸巳 = 1123-05-07 Jülyen) · BEYAN: Song birliklerinin şehre fiilî giriş günü kaynakta ayrıca okunmadı; Jin'in teslim günü devir alındı (BEYANLI YAKLAŞIKLIK)."),
    P('1123-05-07', '1126-01-04', 'song', 'gun', "Song shi, juan 22: 「夏四月癸巳，金人遣楊璞以誓書及燕京、涿、易、檀、順、景、薊州來歸。」 (1123-05-07) ‖ BİTİŞ: Jin shi, juan 3 (zh.wikisource.org/wiki/金史/卷3): 「十二月庚子，宗翰下朔州。甲辰，宗望諸軍及宋郭藥師、張企徽、劉舜仁戰于白河。…丙午，郭藥師降，燕山州縣悉平。」 (天會三年 12. ay 丙午 = 1126-01-04 Jülyen) · Song shi, juan 22: 「郭藥師以燕山叛，北邊諸郡皆陷」 (宣和七年 12. ay 乙巳 = 1126-01-03; Jin shi esas alındı)."),
    P('1126-01-04', '1215-05-31', 'jin-hanedani', 'gun', "Jin shi, juan 3 「丙午，郭藥師降，燕山州縣悉平」 (1126-01-04) ‖ BİTİŞ: Song Lian vd., Yuan shi, juan 1 «Taizu ji» (zh.wikisource.org/wiki/元史/卷001): 「五月庚申，金中都留守完顏福興仰藥死，抹撚盡忠棄城走，明安入守之。」 (十年乙亥 5. ay 庚申 = 1215-05-31 Jülyen). Jin'in Zhongdu başkenti (1153) bu dilim içindedir."),
    P('1215-05-31', '1260-01-01', 'mogol-imparatorlugu', 'gun', "Yuan shi, juan 1 「明安入守之」 (1215-05-31) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260 + " · Pekin (Yanjing/Zhongdu) Yuan Dadu'su olarak 1264-1267 sonrası başkent; hanedan adı devri künye devridir."),
  ]);
}

// ============ Chengdu ============
{
  const a = 'Çengdu (Chengdu)';
  const o = hepsi(a);
  const sk = o.find(p => p.d === 'sonraki-tang-5hanedan');
  SEHIR[a] = [
    o.find(p => p.d === 'onceki-shu'),
    Object.assign({}, sk, { t: '0934-03-16', _yeni: true, _kopya: undefined, kaynak: sk.kaynak + " | DÜZELTME (kuyrukcin): cin2 diliminin t'si 934-01-01 (yıl düzeyi) idi, cin3 sonraki-shu diliminin f=934-03-16'sı ile arasında 74 günlük boşluk kalıyordu; t=934-03-16 yapıldı (Sima Guang ZZTJ 278: 「己巳，知祥卽皇帝位于成都」; cin3)." }),
    o.find(p => p.d === 'sonraki-shu'),
    P('0965-02-17', '1236-10-31', 'song', 'yil', "cin3 sonraki-shu bitişi 965-02-17 (Song Chengdu'yu aldı; Song shi 2) ‖ BİTİŞ (AY DÜZEYİ): Song Lian vd., Yuan shi, juan 2 «Taizong ji» (zh.wikisource.org/wiki/元史/卷002): 「冬十月，闊端入成都。」 (太宗八年丙申 = 1236; 10. ay ilk günü 1236-10-31 Jülyen) · BEYAN: Song shi 42: 「戊寅，復成都府」 (端平三年 11. ay = 1236-12-24 Jülyen civarı: Song geri aldı) ve sonraki yeniden düşüş (Song shi 43: 「大元兵入蜀，權成都府馮有碩…死於官守」) tek bir kalıcı gün olarak okunamadı; Yuan shi 3 (憲宗八年 = 1258): 「宋四川制置使蒲澤之攻成都」 ve 「都元帥紐隣留密里火者、劉黑馬等守成都」, Song shi 44 (寶祐六年): 「蜀中將帥雖未克復成都」 — 1258'de Chengdu'nun Moğol elinde olduğu kesin; devir günü olarak 1236 giriş ayı alındı (BEYANLI YAKLAŞIKLIK; 1236-12 Song geri alımı ve 1239 civarı yeniden Moğol fethi atlandı)."),
    P('1236-10-31', '1260-01-01', 'mogol-imparatorlugu', 'ay', "Yuan shi, juan 2 「冬十月，闊端入成都。」 (1236, 10. ay) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · ic_not: Yuan shi 3 «宋四川制置使蒲澤之攻成都» (1258)."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260 + " · Yuan shi 4: 「詔諭成都路侍郎張威安撫元、忠、綿、資、卭、彭等州」 (中統元年: Chengdu lu Yuan'da)."),
  ];
}

// ============ Yangzhou ============
{
  const a = 'Yangzhou';
  const o = hepsi(a);
  const yw = o[0];
  SEHIR[a] = [
    Object.assign({}, yw, { t: '0937-11-10', _yeni: true, _kopya: undefined, kaynak: yw.kaynak + " | DÜZELTME (kuyrukcin): cin2 diliminin t'si 937-10-01 idi; Güney Tang'ın başlangıcı cin3'te 937-11-10 (Nanking zinciri). Wu→Tang devri iki şehirde aynı günde yazıldı: t=937-11-10 (cin2 RAPOR önerisi 937-11-06; Xin Wudai 62: 「十月，溥遣攝太尉楊璘傳位於昪，國號齊，改元昇元」)." }),
    P('0937-11-10', '0958-04-09', 'guney-tang', 'gun', "Xin Wudai shi, juan 62 (zh.wikisource.org/wiki/新五代史/卷62): 「十月，溥遣攝太尉楊璘傳位於昪，國號齊，改元昇元」 (937-11-10; cin3) ‖ BİTİŞ: Xin Wudai shi, juan 12 «Zhou Shizong ji» (zh.wikisource.org/wiki/新五代史/卷12): 「五年…三月壬午朔，如泰州。丁亥，復如揚州。…己亥，克淮南十有四州，以江為界。」 (顯德五年 3. ay 己亥 = 958-04-09 Jülyen; 3. ay 壬午朔 = 958-03-23) · BEYAN: 顯德三年(956) 「丙戌，取揚州」 (Zhou aldı) ve aynı yıl 「揚、光、舒、滁州復入于唐」 (Tang geri aldı) — kalıcı devir 958-04-09'a alındı."),
    P('0958-04-09', '0960-02-04', 'sonraki-zhou-5hanedan', 'gun', "Xin Wudai shi, juan 12 「己亥，克淮南十有四州，以江為界」 (958-04-09) ‖ BİTİŞ: Zhou'nun sonu 960-02-04 (cin3 Kaifeng zinciri; " + SONG960.slice(0, 60) + "…)."),
    P('0960-02-04', '1276-08-23', 'song', 'gun', SONG960 + " ‖ BİTİŞ: Yuan shi, juan 9 «Shizu ji 6» (zh.wikisource.org/wiki/元史/卷009): 「秋七月乙未，行中書省…乙巳，朱煥以揚州降」 (至元十三年 7. ay 乙巳 = 1276-08-23 Jülyen) ; 「乙亥，斬宋淮東制置使李庭芝、都統姜才于揚州市」. Song egemenliği (Yangzhou, Huainan) Song shi 47'de 「庚午，大元兵至揚子橋，揚州都撥發官雷大震出戰死」 (德祐元年 4. ay) gibi ifadelerden dolaylı görülür; Song shi coğrafya bölümü açılmadı."),
    P('1276-08-23', '1281-01-01', 'yuan-hanedani', 'gun', "Yuan shi, juan 9 「乙巳，朱煥以揚州降」 (1276-08-23) · 「置行御史臺于揚州」 (至元十四年) Yuan idaresinin sürdüğünü gösterir."),
  ];
}

// ============ Fuzhou ============
{
  const a = 'Fuzhou';
  SEHIR[a] = [].concat(hepsi(a), [
    P('0945-01-01', '0947-01-01', 'guney-tang', 'yil', "Xin Wudai shi, juan 62 (zh.wikisource.org/wiki/新五代史/卷62): 「福州將李仁達殺王繼昌自稱留後，泉州將留從効亦殺其刺史黃紹頗，皆送款於文徽」 ; 「以延政為饒州節度使、李仁達為福州節度使、留從効為清源軍節度使」 (Güney Tang, Fuzhou'yu Li Rengda aracılığıyla nominal bağladı; yıl düzeyi) · BEYAN: Min'in dağılışı (cin2 t=945-01-01) sonrası Fuzhou'nun fiilî sahibi yerel komutan Li Rengda'dır; Güney Tang vasalliği BEYANLI YAKLAŞIKLIK. ‖ BİTİŞ: Wuyue'nin Fuzhou'yu alışı Xin Wudai shi 67'de (zh.wikisource.org/wiki/新五代史/卷67): 「…遂取福州而還，由是諸將皆服。佐立七年，襲封吳越國王…開運四年，佐卒」 — YIL KAYNAKTA YOK: en geç 開運四年 (947) Qian Zuo'nun ölümü; 947-01-01 üst sınır olarak yazıldı (kesinlik yil; ZZTJ 285-286 açılmadı)."),
    P('0947-01-01', '0978-06-09', 'wuyue', 'yil', "Xin Wudai shi, juan 67 「遂取福州而還」 (Wuyue Fuzhou'yu aldı; yıl 947 BEYANLI üst sınır) ‖ BİTİŞ: Song shi, juan 4 (cin3 Hangzhou yaması): 「五月乙酉，…錢俶獻其兩浙諸州」 (Wuyue → Song, 978-06-09; Hangzhou ile aynı devir) · BEYAN: Fuzhou'nun Wuyue'ya fiilen bağlı kalışı 978'e kadar (Xin Wudai 67 sayfa notundan, cin2 sınır maddesinin aktardığı «自唐乾寧二年…至皇朝太平興國三年國除» — bu oturumda doğrulanmadı; Xin Wudai 67 gövdesi: 「太平興國三年，詔俶來朝，俶舉族歸于京師，國除」); şehir adıyla 978 teslim kaydı okunmadı (Hangzhou'dan devralındı — BEYANLI YAKLAŞIKLIK)."),
    P('0978-06-09', '1276-12-29', 'song', 'gun', "Song shi, juan 4 (zh.wikisource.org/wiki/宋史/卷004): 「五月乙酉，…錢俶獻其兩浙諸州」 (978-06-09; Fuzhou Hangzhou'dan devralındı, BEYANLI YAKLAŞIKLIK) ‖ BİTİŞ: Song shi, juan 47 «Gong di ji» (zh.wikisource.org/wiki/宋史/卷047): 「十有一月…癸丑，大軍至福安府，知府王剛中以城降」 (景炎元年 11. ay 癸丑 = 1276-12-29 Jülyen) · BEYAN: 景炎元年 5. ay Duanzong'un Fuzhou'da tahta çıkışı (「宜中等乃立昰于福州，以爲宋主，改元景炎…改福州爲福安府」) Song hanedanı içinde; 景炎二年 (1277) 7-9. ay Song/Yuan gidiş gelişleri («九月…也的迷失將兵復取邵武，入福州») tek kalıcı gün vermiyor; 1276-12-29 devri esas."),
    P('1276-12-29', '1281-01-01', 'yuan-hanedani', 'gun', "Song shi 47 「知府王剛中以城降」 (1276-12-29) · Yuan shi 10: 「詔蒙古帶、唆都、蒲壽庚行中書省事于福州」 ; Yuan shi 11: 「置行中書省于福州」."),
  ]);
}

// ============ Kanton (Guangzhou) ============
{
  const a = 'Kanton (Guangzhou)';
  SEHIR[a] = [].concat(hepsi(a), [
    P('0971-02-28', '1278-12-29', 'song', 'gun', "cin2 guney-han bitişi 971-02-28 (Xin Wudai shi 65: 「開寶四年…二月，師度馬逕，鋹遣其右僕射蕭漼奉表降」; 「師次白田，鋹素衣白馬以降」) ‖ BİTİŞ: Song shi, juan 47 «Gong di ji» (zh.wikisource.org/wiki/宋史/卷047): 「閏月庚戌，王道夫棄廣州遁。壬戌，淩震遁。癸亥，大軍入廣州。」 (祥興元年 閏11. ay 癸亥: 閏11. ay ilk günü 庚戌 = 1278-12-16 Jülyen → 癸亥 = 1278-12-29) · BEYAN: 1276-1278 arasında Guangzhou birçok kez el değiştirdi (Song shi 47: 「六月丙子，雄飛入廣州」 景炎元年; 「壬子，趙溍入廣州」; 「十二月辛酉朔，趙溍棄廣州遁」; 景炎二年 「二月，大軍至廣州，縣人趙若岡以城降」; 「四月，…張鎮孫襲廣州取之」; 「十一月，塔出圍廣州。庚寅，張鎮孫以城降」; 祥興元年 「十五年正月，大軍夷廣州城」; 「三月…廣州都統淩震、轉運判官王道夫取廣州」) · Yuan shi 10: 「廣州張鎮孫叛，犯廣州」; son KALICI Yuan girişi 1278-12-29 alındı (BEYANLI YAKLAŞIKLIK; aradaki gidiş gelişler ayrı dilim yazılmadı)."),
    P('1278-12-29', '1281-01-01', 'yuan-hanedani', 'gun', "Song shi 47 「癸亥，大軍入廣州」 (1278-12-29)."),
  ]);
}

// ============ Changsha ============
{
  const a = 'Changsha';
  SEHIR[a] = [].concat(hepsi(a), [
    P('0951-01-01', '0952-01-01', 'guney-tang', 'yil', "Xin Wudai shi, juan 62 «Nan Tang shi jia» (zh.wikisource.org/wiki/新五代史/卷62): 「九年秋，楚人囚希萼於衡山，立其弟希崇，附于景，楚國大亂。景遣信州刺史邊鎬攻楚，破潭州，盡遷馬氏之族于金陵。…以邊鎬為湖南節度使」 (保大九年 = 951 sonbaharı; yıl düzeyi: cin2 chu-ma t=951-01-01 ile hizalı) ‖ BİTİŞ: 「十年，…楚人皆怨而叛，其將劉言攻邊鎬，鎬不能守，遯歸」 (952, yıl düzeyi)."),
    P('0952-01-01', '0960-02-04', 'sonraki-zhou-5hanedan', 'yil', "Xin Wudai shi, juan 66 «Chu shi jia» (zh.wikisource.org/wiki/新五代史/卷66): 「周廣順三年，言奉表京師，以邀封爵。…乃升朗州為武平軍，在武安軍上，以言為節度使，因以武安授進逵」 ; 「顯德元年，拜行逢武清軍節度使，權知潭州軍府事」 · BEYAN: 952-963 Tanzhou'nun (Changsha) fiilî sahibi Liu Yan / Wang Kui / Zhou Xingfeng'in Wuping-Wu'an jun valilikleridir (müstakil devlet künyesi yok); Sonraki Zhou/Song nominal egemenliği altında yazıldı (BEYANLI YAKLAŞIKLIK)."),
    P('0960-02-04', '1276-01-18', 'song', 'gun', SONG960 + " · Xin Wudai shi 66: 「建隆三年，行逢病，…行逢卒，子保權立。」 (Zhou Xingfeng 962 ölümü; Song idaresi 963'te tamamlanır — Song shi 483; açılmadı) ‖ BİTİŞ: Song shi, juan 47 (zh.wikisource.org/wiki/宋史/卷047): 「德祐二年春正月丁卯朔，大元兵自元年十月圍潭州，湖南安撫兼知州李芾拒守三月，大小戰數十合，力盡將破，芾闔門死」 · Yuan shi, juan 9: 「十三年春正月丁卯朔，克潭州，宋安撫使李芾盡室自焚死」 (至元十三年 1. ay 丁卯 = 1276-01-18 Jülyen; iki kaynak aynı gün)."),
    P('1276-01-18', '1281-01-01', 'yuan-hanedani', 'gun', "Yuan shi 9 「克潭州」 (1276-01-18) · Yuan shi 9 (至元十四年): 「潭州行省遣使上言：「廣南西路慶遠、欝林…皆降」」 (Tanzhou'da Yuan eyalet idaresi)."),
  ]);
}

// ============ Zhangye / Dunhuang / Liaoyang / Xining ============
{
  const a = 'Zhangye (Ganzhou)';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1038-01-01', '1226-01-01', 'bati-xia', 'yil', "Song Lian vd., Yuan shi, juan 60 «Dili zhi 3» (zh.wikisource.org/wiki/元史/卷060): 「甘州路…」; Zhangye (Ganzhou) Xia tarafında: Yuan shi 60 «山丹州…宋初為夏國所有，置甘肅軍» · Song shi 485 (cin2 piece: Ganzhou 1028 alındı); Xia kuruluşu 1038 (cin2/cin3 xiazhou-dangxiang bitişi) ‖ BİTİŞ (YIL DÜZEYİ): Yuan shi, juan 1 (zh.wikisource.org/wiki/元史/卷001): 「二十一年〔丙戌〕春…夏，避暑於渾垂山。取甘、肅等州。」 (1226 yazı; gün/ay yok: YYYY-01-01 kuralı)."),
    P('1226-01-01', '1260-01-01', 'mogol-imparatorlugu', 'yil', "Yuan shi, juan 1 「取甘、肅等州」 (1226) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · ic_not: Batı Xia künye t=1227-01-01; Zhangye 1226'da önce düştü."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260 + " · Yuan shi 60: 「甘州路…八年，改甘州路總管府」."),
  ]);
}
{
  const a = 'Dunhuang';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1038-01-01', '1227-01-01', 'bati-xia', 'yil', "Yuan shi, juan 60 «Dili zhi 3» (zh.wikisource.org/wiki/元史/卷060): 「沙州路，唐為沙州，又為燉煌郡。宋仍為沙州，景祐初，西夏陷瓜、沙、肅三州，盡得河西故地。金因之。元太祖二十二年，破其城以隸八都大王。」 (景祐初 = 1034-1038; cin2 xiazhou-dangxiang 1036-1038 ile Xia hâkimiyeti 1038 künyesine bağlanır; yıl düzeyi) ‖ BİTİŞ (YIL DÜZEYİ): 「元太祖二十二年，破其城以隸八都大王」 (1227; gün/ay yok: YYYY-01-01 kuralı; Batı Xia künye t=1227-01-01 ile aynı)."),
    P('1227-01-01', '1260-01-01', 'mogol-imparatorlugu', 'yil', "Yuan shi 60 「元太祖二十二年，破其城以隸八都大王」 (1227) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · ic_not: Shazhou'nun Çağatay/«Batu» vb. ulus paylaşımı ('八都大王') kaynakta atanan prens; Yuan merkezî yönetimi 1260 sonrası: Yuan shi 60 「十七年，升為沙州路總管府」."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260 + " · Yuan shi 60: 「十七年，升為沙州路總管府，瓜州隸焉」 (至元十七年 = 1280)."),
  ]);
}
{
  const a = 'Liaoyang';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1116-06-12', '1215-10-24', 'jin-hanedani', 'ay', "Jin shi, juan 2 «Taizu ben ji» (zh.wikisource.org/wiki/金史/卷2): 「閏月，高永昌據東京，使撻不野來求援。…五月，斡魯等敗永昌，撻不野擒永昌以獻，戮之于軍。東京州縣及南路系遼女直皆降。」 (Shouguo 2 5. ay, ay ilk günü 1116-06-12 Jülyen) ‖ BİTİŞ: Jin shi, juan 14 «Xuanzong ji shang» (zh.wikisource.org/wiki/金史/卷14): 「冬十月丙戌朔，翰林侍…遼東賊蒲鮮萬奴僭號，改元天泰」 (貞祐三年 10. ay 丙戌朔 = 1215-10-24 Jülyen) · Yuan shi, juan 1: 「冬十月，金宣撫蒲鮮萬奴據遼東，僭稱天王，國號大真，改元天泰」."),
    P('1215-10-24', '1216-11-11', 'dongxia', 'ay', "Jin shi 14 「遼東賊蒲鮮萬奴僭號，改元天泰」 (1215-10-24) · Yuan shi 1 「據遼東，僭稱天王，國號大真」 ‖ BİTİŞ (AY DÜZEYİ): Yuan shi, juan 1: 「十一年丙子春，還廬…冬十月，蒲鮮萬奴降，以其子帖哥入侍」 (1216, 10. ay ilk günü 1216-11-11 Jülyen) · BEYANLI YAKLAŞIKLIK: kaynaklarda şehir adı 'Liaoyang/Dongjing' ile Wannu hâkimiyeti açıkça geçmez (yalnız 『遼東』); Yuan shi, juan 119 'Muqali: 「乙亥，裨將蕭也先以計平定東京」' (gün yıl vermez; 1214-1215) Moğol'un Dongjing'i aldığını gösterir — iki ifade çelişkili: Wannu rejimi 1215-10'dan itibaren 'Liaodong'u elinde tuttuğu varsayıldı; atlas 'dongxia' künyesi f=1215-01-01 ile hizalı."),
    P('1216-11-11', '1260-01-01', 'mogol-imparatorlugu', 'ay', "Yuan shi 1 「冬十月，蒲鮮萬奴降，以其子帖哥入侍」 (1216-11-11) ; Yuan shi 2: 「五年癸巳…九月，擒萬奴」 (1233) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · BEYAN: Wannu 1217'de ayrılıp 'Doğu Xia' kurdu (künye 1215-1233); Liaoyang'ın bu dönemde Moğol mu Wannu mu elinde olduğu şehir adıyla okunmadı — BEYANLI YAKLAŞIKLIK."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260),
  ]);
}
{
  const a = 'Xining';
  SEHIR[a] = [].concat(hepsi(a), [
    P('1104-05-08', '1131-01-31', 'song', 'ay', "cin3 tsongkha bitişi 1104-05-08 (Song shi 492: 「三年，王厚復湟、鄯」; Xining/Huangzhou-Xiping) ‖ BİTİŞ (AY DÜZEYİ): Jin shi, juan 3 «Taizong ji» (zh.wikisource.org/wiki/金史/卷3): 「九年正月己亥朔，齊、高麗、夏遣使來賀。…宗弼、阿盧補撫定鞏、洮、河、樂、西寧、蘭、廓、積石等州。涇原、熙河兩路皆平。」 (天會九年 = 1131; 1. ay 己亥朔 = 1131-01-31 Jülyen; 『西寧』 = Xining) · BEYAN: Song'un 1104-1131 arası Xining (Xiping fu / Xining zhou) idaresi bu kümede Song shi coğrafyasından okunmadı; Jin'in 1131 'pacify' tarihi ay düzeyinde alındı."),
    P('1131-01-31', '1220-10-20', 'jin-hanedani', 'ay', "Jin shi, juan 3 「宗弼、阿盧補撫定鞏、洮、河、樂、西寧、蘭、廓、積石等州」 (1131-01) ‖ BİTİŞ: Jin shi, juan 16 «Xuanzong ji xia» (zh.wikisource.org/wiki/金史/卷16): 「己酉，夏人陷西寧州，尚書省都事僕散奴失不坐誅，駙馬都尉徒單壽春奪官一階，杖六十。」 (興定四年 9. ay 己酉 = 1220-10-20 Jülyen)."),
    P('1220-10-20', '1227-03-19', 'bati-xia', 'gun', "Jin shi, juan 16 「夏人陷西寧州」 (1220-10-20) ‖ BİTİŞ (AY DÜZEYİ): Yuan shi, juan 1 «Taizu ji» (zh.wikisource.org/wiki/元史/卷001): 「二十二年丁亥春…三月，破洮、河、西寧二州。」 (1227, 3. ay ilk günü 1227-03-19 Jülyen) · ic_not: Yuan shi dipnotu 『洮、河、西寧』 'iki' yerine 'üç' önerir (Jin shi 26)."),
    P('1227-03-19', '1260-01-01', 'mogol-imparatorlugu', 'ay', "Yuan shi 1 「三月，破洮、河、西寧二州」 (1227-03-19) ‖ BİTİŞ: Moğol künye t=1260-01-01 · " + Y1260 + " · Yuan shi 60 «Dili zhi 3»: 「西寧州…宋改為西寧州」."),
    P('1260-01-01', '1281-01-01', 'yuan-hanedani', 'yil', Y1260),
  ]);
}

// Dali ve Yinchuan: bosluk yok -> yama yazilmaz (rapor).

module.exports = { SEHIR, CIN_SINIR, GUN, AD, ad, ILK, DIR, KOK };

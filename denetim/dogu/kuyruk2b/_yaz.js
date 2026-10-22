// _yaz.js — _uret.js çıktısına devir (sınır) maddeleri + künye önerileri ekler ve dosyaları yazar.
const fs = require('fs'), path = require('path'), vm = require('vm');
const out = require('./_uret.js');
const KOK = path.resolve(__dirname, '..', '..', '..');
const DOGU = path.join(KOK, 'denetim/dogu');
function yukle(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); return sb.window; }
function liste(f) { const w = yukle(path.join(DOGU, f)); let L = []; for (const g of Object.keys(w)) L = L.concat(w[g]); return L; }
const kopya = (f, yerId, t, tur) => { const m = liste(f).find(x => x.yer_id === yerId && x.t === t); if (!m) throw new Error('sinir yok ' + f + ' ' + yerId + ' ' + t); const c = JSON.parse(JSON.stringify(m)); if (tur) c.tur = tur; return c; };
const ETK = ['toprak-degisimi', 'konu-askeri', 'dogu-500-1281'];
const sinir = out.sinir;

// yama dilimlerinden devir maddesi: tablo = { 'YER|f': {b, d, onem?, tur?, taraflar?, ic_not?} }
const TABLO = {
  // ── Siyâlkot ──
  'Siyâlkot|0540-01-01': { tur: 'toprak-kayip', tar: ['alkhon'], b: 'Siyâlkot: Alkhon (Mihirakula) hâkimiyeti sona erdi; şehrin sahibi kaynaklarda kayboldu', d: 'Mihirakula Yaşodharman ve Narasimhagupta tarafından yenildi ve Keşmir\'e çekildi; Sakala (Siyâlkot) bu andan sonra adlandırılmış bir hükümdara bağlanamıyor (yenilgi yılı kaynakta yok, c.530-540 arası onyıl).', ic: 'Yıl kaynakta yok; 540 Alkhon künye t (onyil).' },
  'Siyâlkot|0883-01-01': { tur: 'toprak-kazanc', tar: ['utpala-kesmir', 'hindu-sahiler'], b: 'Keşmir kralı Şankaravarman Takka-land\'ı (Siyâlkot dahil) Alakhana\'dan aldı', d: 'Utpala hanedanından Şankaravarman (883-902) Hindu Şâhî Lalliya\'nın himayesindeki Gürcara kralı Alakhana\'nın ülkesine girip Chenab doğusundaki Takka topraklarını ele geçirdi; Siyâlkot bu topraklarda yer alır.', ic: 'Fetih yılı yok: 883 hükümdarlık başı (onyil).' },
  'Siyâlkot|0902-01-01': { tur: 'toprak-kayip', tar: ['utpala-kesmir'], b: 'Şankaravarman öldü; Takka-land Thakkiya ailesine bırakıldı, Siyâlkot\'un sahibi kaynaklarda kayboldu', d: 'Şankaravarman Pratihara Mahendrapala\'dan aldığı Pencap topraklarını Thakkiya ailesinden bir görevliye verdi; bu idarenin süresi ve Keşmir\'e bağlılığı belirtilmez.', ic: 'Gün yok; 902 hükümdarlık sonu (onyil).' },
  'Siyâlkot|0991-01-01': { tur: 'toprak-kazanc', tar: ['hindu-sahiler'], b: 'Siyâlkot: Hindu Şâhîler Pencap\'a yerleşti (abi merkez Lahor, 991)', d: 'Lahor 991\'den sonra Hindu Şâhîlerin eline geçti; Siyâlkot Lahor\'un bağlı toprağı sayılarak Hindu Şâhî\'ye yazıldı (Siyâlkot\'a özgü tanık yok).', ic: 'BEYANLI YAKLAŞIKLIK, ABİ MERKEZ Lahor; en erken sınır.' },
  'Siyâlkot|1013-01-01': { tur: 'toprak-kazanc', tar: ['gazneli', 'hindu-sahiler'], b: 'Gazneli Mahmud Pencap\'ı Hindu Şâhîlerden aldı: Lahor ve Siyâlkot Gazneli oldu', d: 'Mahmud 1013-1014\'te Lahor\'u aldı ve kalesini tahkim edip garnizon kurdu; Siyâlkot\'a özgü tanık yok, Siyâlkot Lahor\'la birlikte yazıldı.', ic: 'BEYANLI YAKLAŞIKLIK, ABİ MERKEZ Lahor.' },
  'Siyâlkot|1185-01-01': { tur: 'toprak-kazanc', tar: ['gurlu', 'gazneli'], b: 'Gurlu Muizzüddin Siyâlkot kalesini Gaznelilerden aldı', d: 'Muizzüddin Muhammed Lahor kuşatmasından dönerken Siyâlkot kalesini zaptedip komutan Husayn b. Harmîl\'i yerleştirdi; Lahor ertesi yıl (1186) düştü.', ic: 'Kaynak içi çelişki: aynı eser 1184 ve 1185 verir; 1185 alındı, gün yok.' },
  'Siyâlkot|1206-01-01': { tur: 'toprak-kazanc', tar: ['delhi-sultanligi', 'gurlu'], b: 'Siyâlkot: Gurlu hâkimiyeti Delhi Sultanlığı\'na geçti (Aybeg, 1206)', d: 'Muizzüddin 1206\'da öldürülünce Kutbüddin Aybeg Hint Türk Sultanlığı\'nı kurdu; Siyâlkot\'a özgü ayrı tanık yok (BEYANLI YAKLAŞIKLIK), İltutmış Siyâlkot\'a ancak saltanatının sonlarında uzanır.', ic: 'Delhi künye f 1206 ile hizalı; Siyâlkot\'a özgü gün yok.' },
  // ── Gvalyar ──
  'Gvalyar (Gwalior)|0540-01-01': { tur: 'toprak-kayip', tar: ['alkhon'], b: 'Gwalior: Alkhon (Mihirakula) hâkimiyeti sona erdi; sahibi kaynaklarda kayboldu', d: 'Mihirakula c.530 yazıtıyla Gwalior\'a dek hükmediyordu; Yaşodharman ve Narasimhagupta karşısında geriledi, Gwalior bir sonraki adlı sahibine (Pratihara, c.815) dek kaynaklarda boşlukta.', ic: 'Yıl kaynakta yok; 540 Alkhon künye t (onyil).' },
  'Gvalyar (Gwalior)|0815-01-01': { tur: 'toprak-kazanc', tar: ['gurjara-pratihara'], b: 'Pratihara II. Nagabhata Gwalior\'a dek uzandı: Gwalior Gürcara-Pratihâra oldu', d: 'II. Nagabhata Çakrayudha\'yı yenip Kanauj\'u aldıktan sonra egemenliği doğuda Gwalior\'a kadar uzandı; Gwalior Ramabhadra\'dan beri Pratihara kalesi sayılır.', ic: 'Yıl hassasiyeti onyil: «About A.D. 815» Kanauj için; Gwalior\'a özgü gün/yıl yok.' },
  'Gvalyar (Gwalior)|0977-01-01': { tur: 'toprak-kazanc', tar: ['kachchhapaghata-gwalior', 'gurjara-pratihara'], b: 'Kachchhapaghata Vajradaman Gwalior\'u Pratihara\'dan aldı (en geç 977)', d: 'Gwalior\'u Chandella Dhanga da kısa süre ele geçirmişti; en geç 977\'de Vajradaman Pratihara imparatorunu yenip Gwalior\'a egemen oldu.', ic: 'En geç 977 (yıl); asıl fetih daha erken olabilir.' },
  'Gvalyar (Gwalior)|1210-01-01': { tur: 'toprak-kayip', tar: ['parihara-gwalior', 'delhi-sultanligi'], b: 'Aram Şah dönemi: Parihara Vigraha Gwalior\'u Müslümanlardan geri aldı', d: 'Kutbüddin Aybeg\'in ölümüyle (1210) Delhi\'de oluşan zayıflıkta Pratihara (Parihara) şefi Vigraha Gwalior\'da üstünlük kurdu; oğlu Malayavarman 1220\'de hüküm sürüyordu.', ic: '1210-11 yıl hassasiyeti.' },
  'Gvalyar (Gwalior)|1231-01-01': { tur: 'toprak-kazanc', tar: ['delhi-sultanligi', 'parihara-gwalior'], b: 'İltutmış Gwalior\'u Hindulardan geri aldı (629/1231)', d: 'İltutmış Aybeg\'in ölümüyle Hindular\'ın tekrar ele geçirdiği Gevâliyâr\'ı Devbul\'u yenerek geri aldı; Mâlvâ seferi onu izledi.', ic: 'TDV 629/1231 (629 H Ekim 1231-Ekim 1232): gün yok.' },
  'Gvalyar (Gwalior)|1236-01-01': { tur: 'toprak-kayip', tar: ['parihara-gwalior', 'delhi-sultanligi'], b: 'Rükneddin/Radiyye döneminde Gwalior kalesi terk edildi; Naravarman geri aldı', d: 'İltutmış\'ın ölümünden sonra Delhi garnizonu Gwalior kalesinden çekildi ve Pariharalar Malayavarman\'ın kardeşi Naravarman önderliğinde Gwalior\'a döndü (1247\'de hüküm sürüyordu).', ic: 'Kaynak Rükneddin (1236) ve Radiyye (1236-40) dönemlerini birlikte verir; 1236 alındı.' },
  'Gvalyar (Gwalior)|1258-01-01': { tur: 'toprak-kazanc', tar: ['delhi-sultanligi', 'parihara-gwalior'], b: 'Balaban Gwalior\'u fethedip Malik Nusrâteddin\'e verdi (1258)', d: 'Balaban 1258\'de Gwalior\'u aldı ve Malik Nusrâteddin\'i başına atadı; aynı yıl Şîr Hân Kol ve Gwalior vilayetlerine nakledildi.', ic: 'Kaynak 1251 seferinde de geçici bir alış anar; 1258 iki ayrı yerde teyitli.' },
  // ── Kannauc ──
  'Kannauc|0647-01-01': { tur: 'toprak-kayip', tar: ['harsha'], b: 'Kannauj: Harşa\'nın ölümü, imparatorluk dağıldı; şehrin sahibi yarım yüzyıl karanlıkta', d: 'Harşa\'nın ölümüyle imparatorluğu dağıldı; yarım yüzyıldan fazla süre Kannauj tarihi karanlıktır (700 civarı Yaşovarman\'a dek; Majumdar IV Önsöz).', ic: 'Harşa künye t=647 (yıl).' },
  'Kannauc|0700-01-01': { tur: 'toprak-kazanc', tar: ['yashovarman-kannauj'], b: 'Yaşovarman Kannauj\'da hüküm sürmeye başladı (c.700)', d: 'Bhavabhuti ve Vakpati\'nin hamisi büyük fatih Yaşovarman Kannauj\'a hâkimdir; hükümdarlığı kaynağa göre 700-740 arası (690 cülus ihtimali de anılır).', ic: 'Onyıl hassasiyeti: tarih «not definitely known».' },
  'Kannauc|0740-01-01': { tur: 'toprak-kayip', tar: ['yashovarman-kannauj'], b: 'Keşmir\'in Lalitaditya\'sı Yaşovarman\'ı yendi: Kannauj\'un sahibi kaynaklarda kayboldu', d: 'Lalitaditya Yaşovarman\'ı yok etti ve kaynaklar onu Kannauj\'un efendisi sayar, ancak «conventional account»ın ne kadarının tarihsel olduğu bilinmez; 783\'te Indrayudha\'ya dek Kannauj sahibi adlandırılamaz.', ic: 'Yaklaşık 740 (onyil); Karkota\'ya bağlanmadı.' },
  'Kannauc|0783-01-01': { tur: 'toprak-kazanc', tar: ['ayudha-kannauj'], b: 'Kannauj tahtında Ayudha hanedanı: Indrayudha 783\'te hüküm sürüyor', d: 'Jinasena\'nın 783 tarihli notu kuzeyde Indrayudha\'nın hüküm sürdüğünü söyler; Pratihara Vatsaraja ve Pala Dharmapala Kannauj\'u kendi vasallarına bırakmak için saldırdı, Dharmapala Çakrayudha\'yı tahta oturttu.', ic: '783 İNDRAYUDHA\'NIN İLK TARİHLİ TANIĞI (cülus yılı değil).' },
  'Kannauc|0815-01-01': { tur: 'toprak-kazanc', tar: ['gurjara-pratihara', 'ayudha-kannauj'], b: 'Pratihara II. Nagabhata Çakrayudha\'yı yenip Kannauj\'u başkent yaptı (c.815)', d: 'Nagabhata II Çakrayudha\'yı yenip krallığını ele geçirdi; Kannauj yaklaşık 815\'te Pratiharaların başkenti oldu.', ic: '«About A.D. 815» (yıl).' },
  'Kannauc|1019-01-01': { tur: 'toprak-kayip', tar: ['rashtrakuta-kannauj', 'gurjara-pratihara'], b: 'Mahmud Kannauj\'u yağmaladı; Pratihara Rajyapala Bari\'ye kaçtı, Raştrakûta Chandra Kannauj\'a hâkim oldu', d: 'Gazneli Mahmud Kannauj\'u aldı, Rajyapala Ganj\'ın karşı yakasındaki Bari\'ye çekildi; yaşanan karışıklıkta Raştrakûta Chandra Kannauj\'da üstünlük kurdu (cülus yılı kaynakta yok).', ic: 'f=1019 Pratihara\'nın Kannauj\'dan çıkışı; Chandra cülusu bilinmez.' },
  'Kannauc|1090-01-01': { tur: 'toprak-kazanc', tar: ['gahadavala', 'rashtrakuta-kannauj'], b: 'Gahadavala Chandradeva Kannauj tahtını Raştrakûta Gopala\'dan aldı (1090)', d: 'Chandradeva Kannauj\'u Raştrakûta Gopala\'dan alıp Banaras\'ı ikinci başkent yaptı; yazıtları 1090-1100 arasını kapsar.', ic: 'Yıl hassasiyeti: yazıtların ilk yılı; gün yok.' },
  'Kannauc|1193-01-01': { tur: 'toprak-kazanc', tar: ['gurlu', 'gahadavala'], b: 'Muizzüddin Chandawar\'da Jayachandra\'yı yendi: Kannauj Gurlu eline geçti (1193)', d: 'Muizzüddin Muhammed 1193\'te Chandawar\'da Gahadavala Jayachandra\'yı öldürüp ordusunu bozdu; Aybeg birkaç yıl içinde Kannevc dahil Doab kalelerini aldı.', ic: 'TDV Gahadavala 1090-1193; Majumdar 1193 savaş ama Harishchandra\'nın 1197\'de Kannauj\'da olması çelişkili; gün yok.' },
  'Kannauc|1206-01-01': { tur: 'toprak-kazanc', tar: ['delhi-sultanligi', 'gurlu'], b: 'Kannauj: Gurlu hâkimiyeti Delhi Sultanlığı\'na geçti (Aybeg, 1206)', d: 'Muizzüddin 1206\'da öldürülünce Kutbüddin Aybeg Hint Türk Sultanlığı\'nı kurdu; Kannauj\'a özgü ayrı tanık yok (BEYANLI YAKLAŞIKLIK), İltutmış\'ın fetihleri arasında Kannauj\'un anılması Aybeg\'in ilk fetihlerine atıfla açıklanır.', ic: 'Delhi künye f 1206 ile hizalı; gün yok.' },
  // ── Jambi ──
  'Jambi|1275-01-01': { tur: 'toprak-kayip', tar: ['singhasari', 'srivijaya'], b: 'Singhasari\'nin Pamalayu seferi: Malayu (Jambi) Cava üstünlüğüne girdi (1275)', d: 'Kritanagara Srivijaya\'nın gerilemesinden yararlanıp 1275\'te batıya bir sefer gönderdi ve Malayu üzerinde Cava egemenliği kurdu.', ic: 'Gün yok; Jambi\'ye özgü fetih günü kaynakta yok. 1286 Amoghapasa yazıtı Dharmasraya\'dadır (BEYAN).' },
  // ── Pyongyang ──
  'Pyongyang|0676-02-24': { tur: 'toprak-kayip', tar: ['tang'], b: 'Pyongyang: Tang Andong Koruyucu Genel Valiliği Liaodong\'a taşındı, şehir sahipsiz kaldı', d: 'Tang 儀鳳元年 ikinci ayında Andong Koruyucu Genel Valiliği\'ni Pyongyang\'dan Liaodong eski kentine taşıdı; şehir kaynaklara göre terk edilip yabanıl otlarla örtüldü (Samguk sagi, Goryeosa).', ic: 'Takvim: 儀鳳元年二月甲戌 = Jülyen 0676-02-24 (Gregoryen 0676-02-27), ±1 gün.', ict: 'Takvim: 儀鳳元年二月甲戌 → Jülyen 0676-02-24 (astronomik ay-güneş, ±1 gün; cin2/_cal.py)' },
  'Pyongyang|0918-07-25': { tur: 'toprak-kazanc', tar: ['goryeo'], b: 'Taejo Goryeo\'yu kurdu: Pyongyang yeniden iskân edilip Büyük Genel Valilik yapıldı (918)', d: 'Wang Geon 918\'de tahta çıkıp Goryeo\'yu kurdu; Pyongyang\'ın harap olduğunu görüp çevre illerden halk yerleştirerek şehri Büyük Genel Valilik yaptı.', ic: 'Dilim Taejo\'nun tahta çıkış gününden başlatıldı (yeniden iskân günü yok); Gregoryen 0918-07-30.', ict: 'Takvim: 六月丙辰 → Jülyen 0918-07-25 (Gregoryen 0918-07-30), ±1 gün.' },
  // ── Urasoe ──
  'Urasoe Gusuku (Chuzan merkezi)|1322-01-01': { tur: 'toprak-kazanc', tar: ['sanzan', 'ryukyu-shunten-eiso'], b: 'Urasoe Gusuku: Okinawa üçe ayrıldı, Chuzan krallığı Sanzan döneminin bir kolu oldu (c.1322)', d: 'Tamagusuku (1314-1336) döneminde ülke Chuzan, Sannan ve Hokuzan olmak üzere üçe bölündü; Urasoe/Shuri Chuzan\'ın merkezi olarak kaldı (yıl kroniklerde verilmez; 1322 sanzan künye f).', ic: 'Yıl kaynaksız: Chūzan Seikan ayrılış yılını vermez; atlas sanzan künyesi f=1322.' },
  // ── Aror ──
  'Aror (Alor)|0640-01-01': { tur: 'toprak-kazanc', tar: ['cac-sind', 'rai-sind'], b: 'Brahman Çaç Aror\'da Rai hanedanının tahtını ele geçirdi (640 sonrası)', d: 'Çaç, II. Sahasi Rai\'nin tahtını devralıp Brahman hanedanını kurdu; Majumdar Çaç\'ın cülusunu 640\'tan sonraya koyar.', ic: 'Onyıl hassasiyeti: «later than A.D. 640»; 640-01-01 en erken sınır.' }
};

// dilimlerden madde üret
function tarih(f) { return f; }
for (const y of out.yama.concat(out.yer.map(r => ({ ad: r.ad, s_onek: r.s })))) {
  const L = y.s_onek;
  for (let i = 0; i < L.length; i++) {
    const p = L[i], onc = L[i - 1];
    const key = y.ad + '|' + p.f;
    if (i === 0) continue;           // zincir başı: birlestir.js türetir
    const e = TABLO[key];
    if (!e) continue;                // kopya ya da sonra eklenecek
    const kazanan = (p.d === '__BOSLUK__') ? null : p.d;
    sinir.push({
      t: p.f, devlet: e.tar[0], taraflar: e.tar, b: e.b, tur: e.tur, onem: 3, dunya: 1, kapsam: 'dis',
      yer: y.ad, yer_id: y.ad, etiket: ETK.concat(['kuyruk2b']), d: e.d,
      kaynak: p.kaynak, kesinlik: p.kesinlik === 'gun' ? 'gun' : (p.kesinlik || 'yil'), gun: p.f, ic_not: e.ic + (e.ict ? ' | ' + e.ict : ''), sinir_id: []
    });
    if (e.ict) sinir[sinir.length - 1].ic_not_takvim = e.ict;
  }
}
// Urasoe 1322 (mevcut zincir başı) — son dilimin t'si
{
  const u = out.yama.find(y => y.ad === 'Urasoe Gusuku (Chuzan merkezi)');
  const e = TABLO['Urasoe Gusuku (Chuzan merkezi)|1322-01-01'];
  const p = u.s_onek[u.s_onek.length - 1];
  sinir.push({ t: '1322-01-01', devlet: e.tar[0], taraflar: e.tar, b: e.b, tur: e.tur, onem: 3, dunya: 1, kapsam: 'dis', yer: u.ad, yer_id: u.ad, etiket: ETK.concat(['kuyruk2b']), d: e.d, kaynak: p.kaynak, kesinlik: 'yil', gun: '1322', ic_not: e.ic, sinir_id: [] });
}
// kopya maddeler (kaynağı önceki işçinin; AYNEN)
const KOP = [
  ['hint1/kronoloji_sinir_dogu_hint1.js', 'Kannauc', '0550-01-01'], ['hint1/kronoloji_sinir_dogu_hint1.js', 'Kannauc', '0606-01-01'], ['hint1/kronoloji_sinir_dogu_hint1.js', 'Kannauc', '0612-01-01'],
  ['hint2/kronoloji_sinir_dogu_hint2.js', 'Gvalyar (Gwalior)', '1196-01-01'], ['hint2/kronoloji_sinir_dogu_hint2.js', 'Gvalyar (Gwalior)', '1206-01-01'],
  ['gdasya1/kronoloji_sinir_dogu_gdasya1.js', 'Jambi', '0519-01-01', 'toprak-kayip'], ['gdasya1/kronoloji_sinir_dogu_gdasya1.js', 'Jambi', '0644-01-01'], ['gdasya1/kronoloji_sinir_dogu_gdasya1.js', 'Jambi', '0689-01-01'],
  ['gdasya1/kronoloji_sinir_dogu_gdasya1.js', 'Quang Tri', '1000-01-01', 'toprak-kazanc'],
  ['koja1/kronoloji_sinir_dogu_koja1.js', 'Pyongyang', '0668-10-22'],
  ['koja2/kronoloji_sinir_dogu_koja2.js', 'Pyongyang', '1135-01-19'], ['koja2/kronoloji_sinir_dogu_koja2.js', 'Pyongyang', '1136-03-23'],
  ['hint1/kronoloji_sinir_dogu_hint1.js', 'Aror (Alor)', '0712-06-20'], ['hint1/kronoloji_sinir_dogu_hint1.js', 'Aror (Alor)', '0750-08-05'], ['hint1/kronoloji_sinir_dogu_hint1.js', 'Aror (Alor)', '0861-03-17']
];
for (const [f, yer, t, tur] of KOP) { const m = kopya(f, yer, t, tur); m.etiket = (m.etiket || []).concat(['kuyruk2b-kopya']); sinir.push(m); }
// Gvalyar 0977: hint2'nin kronoloji_cok maddesi sınır dosyasında yok → yukarıdaki TABLO yeni madde üretti.

// ── künye önerileri (KUNYE_YOK; boya_gerekli) ──
const M3 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu)';
const M4 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu)';
const M5 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu)';
const kunye = [
  { id: 'parihara-gwalior', ad: 'Parihara (Pratihâra) Hanedanı — Gwalior kolu', tur: 'krallik', bolge: 'guney-asya', f: '1210-01-01', t: '1258-01-01', baskent: 'Gopagiri (Gwalior)',
    ozet: 'Kuzey Hindistan\'da Gwalior\'u Delhi Sultanlığı\'ndan 1210-11\'de geri alan Pratihara (Parihara) kolu: Vigraha, Malayavarman (1220), Naravarman (1247); İltutmış ve Balaban Gwalior\'u tekrar aldı.',
    kaynak: M5 + ', «The Kachchhapaghatas»: «During the weak rule of Aram Shah (A.D. 1210-11), son of Qutb-ud-din, the Pratihara chief Vigraha established the supremacy of his family in Gwalior by defeating the Muslims.» · «Balban conquered Gwalior in A.D. 1258 and placed Malik Nusrat-ud-din in charge of it.»',
    kesinlik: { f: 'yil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'f=1210: Aram Şah 1210-11 (yıl; gün yok). t=1258: Balaban fethi (M5), ama M5 aynı eserde Jajapella kayıtlarında Gwalior\'un 1298\'e dek anıldığını ve 1251 seferinin geçici alış olduğunu söyler. Delhi 1231-1236 arasında araya girer (TDV iltutmis 629/1231) — künye aralığı bu ara dönemi kapsar, hayalet devlet DEĞİL (dilimde d:delhi-sultanligi).',
    kronoloji: [
      { t: '1210-01-01', tur: 'kurulus', b: 'Pratihara şefi Vigraha Gwalior\'da egemenlik kurdu', kaynak: M5 + ', «The Kachchhapaghatas»: «the Pratihara chief Vigraha established the supremacy of his family in Gwalior by defeating the Muslims.»' },
      { t: '1258-01-01', tur: 'son', b: 'Balaban Gwalior\'u fethetti', kaynak: M5 + ', «The Kachchhapaghatas»: «Balban conquered Gwalior in A.D. 1258 and placed Malik Nusrat-ud-din in charge of it.»' }
    ] },
  { id: 'yashovarman-kannauj', ad: 'Yaşovarman Krallığı (Kannauj)', tur: 'krallik', bolge: 'guney-asya', f: '0700-01-01', t: '0740-01-01', baskent: 'Kannauj',
    ozet: 'Harşa\'dan sonra Kannauj\'u yeniden ihya eden Yaşovarman (c.700-740), Keşmir\'in Lalitaditya\'sı tarafından yıkıldı.',
    kaynak: M3 + ', «Northern India during A.D. 650-750»: «The date of Yasovarman is not definitely known, but his reign may be placed between A.D. 700 and 740.» · «Whether he was killed or not, his power was utterly broken by Lalitaditya, and he fades out of history.»',
    kesinlik: { f: 'onyil', t: 'onyil' }, boya_gerekli: true,
    ic_not: 'f/t kaynağın kendi onyıllık aralığı; M3 cülusu 690 civarına çeken bir ihtimali de anar (Chalukya Vinayaditya\'nın yendiği «Kuzey Efendisi» özdeşliği).',
    kronoloji: [
      { t: '0700-01-01', tur: 'kurulus', b: 'Yaşovarman Kannauj\'da hüküm sürmeye başladı (700-740 aralığının başı)', kaynak: M3 + ', «Northern India during A.D. 650-750»: «his reign may be placed between A.D. 700 and 740.»' },
      { t: '0740-01-01', tur: 'son', b: 'Lalitaditya Yaşovarman\'ın gücünü kırdı', kaynak: M3 + ', «Northern India during A.D. 650-750»: «his power was utterly broken by Lalitaditya, and he fades out of history.»' }
    ] },
  { id: 'ayudha-kannauj', ad: 'Ayudha Hanedanı (Kannauj)', tur: 'krallik', bolge: 'guney-asya', f: '0783-01-01', t: '0815-01-01', baskent: 'Kannauj',
    ozet: 'Indrayudha (783\'te hüküm sürüyor) ve Pala Dharmapala\'nın tahta oturttuğu Çakrayudha ile Kannauj tahtı; Pratihara II. Nagabhata 815 civarı Çakrayudha\'yı yendi.',
    kaynak: M4 + ', «Rise and fall of the Pratihara empire»: «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north» · «Dharmapala placed on the throne a new ruler Chakrayudha, whose name-ending shows that he was probably connected with the ruling family.» · «Nagabhata defeated Chakrayudha and conquered his kingdom.»',
    kesinlik: { f: 'yil', t: 'onyil' }, boya_gerekli: true,
    ic_not: 'f=783 Indrayudha\'nın İLK TARİHLİ TANIĞI (Jinasena, Şaka 705); cülus yılı bilinmez, 740-783 arası Kannauj sahibi kaynakta yok (boşluk). Vatsaraja Indrayudha\'yı vasal olarak tuttu (varsayım), Dharmapala yerine Çakrayudha\'yı koydu: tâbi hükümdarlık, devlet sürekliliği Ayudha adıyla yazıldı. t=815 «About A.D. 815».',
    kronoloji: [
      { t: '0783-01-01', tur: 'kurulus', b: 'Indrayudha Kannauj\'da hüküm sürüyor (Jinasena 783)', kaynak: M4 + ', «Rise and fall of the Pratihara empire»: «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north»' },
      { t: '0815-01-01', tur: 'son', b: 'Nagabhata II Çakrayudha\'yı yenip Kannauj\'u aldı', kaynak: M4 + ', «Rise and fall of the Pratihara empire»: «Nagabhata defeated Chakrayudha and conquered his kingdom.»' }
    ] },
  { id: 'rashtrakuta-kannauj', ad: 'Raştrakûta Hanedanı (Kannauj–Budaun)', tur: 'krallik', bolge: 'guney-asya', f: '1019-01-01', t: '1090-01-01', baskent: 'Kannauj (Gadhipura)',
    ozet: 'Pratihara\'nın Kannauj\'dan çıkışından sonra (Mahmud 1018-19) Kannauj\'a hâkim olan Raştrakûta ailesi: Chandra, Vigrahapala, Bhuvanapala, Gopala; 1090 civarı Gahadavala Chandradeva Gopala\'dan tahtı aldı.',
    kaynak: M5 + ', «Northern India during 11th and 12th centuries — Kanauj»: «The first known king of this family is Chandra, who seems to have established his supremacy over Kanauj during the period of disorder that followed the invasion of Mahmud of Ghazni.» · «seized the throne of Kanauj from the Rashtrakuta ruler Gopala»',
    kesinlik: { f: 'yil', t: 'yil' }, boya_gerekli: true,
    ic_not: 'f=1019: Pratihara\'nın Kannauj\'dan son bulunuşu (TDV Pratiharalar 773-1019; M5 «ruled Kanauj up to A.D. 1019»); Chandra\'nın cülus yılı kaynakta YOK. t=1090 Chandradeva yazıtlarının ilk yılı. Gopala döneminde Ghaznavî Mahmûd b. İbrâhîm Kannauj\'u fethetti (1086-1090 arası, M5) — sonrasında aile Budaun\'a yerleşti; Budaun kolu bu künyenin kapsamı dışındadır.',
    kronoloji: [
      { t: '1019-01-01', tur: 'kurulus', b: 'Raştrakûta Chandra Mahmud\'un istilasını izleyen karışıklıkta Kannauj\'a hâkim oldu', kaynak: M5 + ', «Northern India during 11th and 12th centuries — Kanauj»: «Chandra, who seems to have established his supremacy over Kanauj during the period of disorder that followed the invasion of Mahmud of Ghazni.»' },
      { t: '1090-01-01', tur: 'son', b: 'Gahadavala Chandradeva Kannauj tahtını Raştrakûta Gopala\'dan aldı', kaynak: M5 + ', «Kanauj — the Gahadavalas»: «seized the throne of Kanauj from the Rashtrakuta ruler Gopala»' }
    ] }
];

// ── yaz ──
const H = (ad, ek) => '// ' + ad + ' — kuyruk2b (DOĞU 500-1281): ' + ek + '\n';
function js(adGlobal, baslik, obj) { return H(path.basename(adGlobal.file), baslik) + 'window.' + adGlobal.name + ' = ' + JSON.stringify(obj, null, 1) + ';\n'; }
fs.writeFileSync(path.join(__dirname, 'yama_kuyruk2b.js'), js({ file: 'yama_kuyruk2b.js', name: 'YAMA_DOGU_KUYRUK2B' }, 'hint1/hint2/gdasya1/koja1/koja2 yamalarının BİRLEŞİK, sürekli sürümü (her kayıt aynı ad\'lı küme yamalarının YERİNE geçer)', out.yama));
fs.writeFileSync(path.join(__dirname, 'kronoloji_sinir_dogu_kuyruk2b.js'), js({ file: 'kronoloji_sinir_dogu_kuyruk2b.js', name: 'KRONOLOJI_SINIR_DOGU_KUYRUK2B' }, 'yama dilimlerinin devir günleri (Değişmez 2); kopya olanlar önceki işçilerin maddelerinin AYNEN kopyası', sinir));
fs.writeFileSync(path.join(__dirname, 'kunye_yeni.js'), js({ file: 'kunye_yeni.js', name: 'DOGU_KUNYE_KUYRUK2B' }, '4 künye önerisi (parihara-gwalior, yashovarman-kannauj, ayudha-kannauj, rashtrakuta-kannauj)', kunye));
fs.writeFileSync(path.join(__dirname, 'yerlesimler_dogu_kuyruk2b.js'), js({ file: 'yerlesimler_dogu_kuyruk2b.js', name: 'YERLESIMLER_DOGU_KUYRUK2B' }, 'Aror (Alor): YENİ yerleşim — hint1 kaydı + hint3 rai-sind öneki birleşik (hint1\'in kaydının YERİNE geçer)', out.yer));
console.log('yama', out.yama.length, 'dilim', out.yama.reduce((a, y) => a + y.s_onek.length, 0), 'sinir', sinir.length, 'kunye', kunye.length, 'yer', out.yer.length);

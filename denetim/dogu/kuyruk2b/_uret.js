// _uret.js — kuyruk2b: 6 şehir (+Aror, +Urasoe) birleşik önek yamaları + devir (sınır) maddeleri + künye önerileri.
// Çalıştır: node denetim/dogu/kuyruk2b/_uret.js   (yazar: yama_kuyruk2b.js, kronoloji_sinir_dogu_kuyruk2b.js, kunye_yeni.js, yerlesimler_dogu_kuyruk2b.js)
const fs = require('fs'), vm = require('vm'), path = require('path');
const KOK = path.resolve(__dirname, '..', '..', '..');
const DOGU = path.join(KOK, 'denetim/dogu');
function yukle(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); return sb.window; }
function liste(f) { const w = yukle(path.join(DOGU, f)); let L = []; for (const g of Object.keys(w)) L = L.concat(w[g]); return L; }
const yamaOnce = (f, ad) => { const e = liste(f).find(y => y.ad === ad); if (!e) throw new Error('yama yok ' + f + ' ' + ad); return e.s_onek; };
const sinirOnce = (f, yerId, t) => { const m = liste(f).find(x => x.yer_id === yerId && x.t === t); if (!m) throw new Error('sinir yok ' + f + ' ' + yerId + ' ' + t); return JSON.parse(JSON.stringify(m)); };

// ── kaynak kısaltmaları (hepsi bu oturumda archive.org/TDV'den çekilip okundu; alıntılar _alinti.js ile sınanır) ──
const M3 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. III: The Classical Age, Bharatiya Vidya Bhavan, Bombay 1954 (archive.org: classicalage03bhar, tam metin okundu)';
const M4 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. IV: The Age of Imperial Kanauj, Bharatiya Vidya Bhavan, Bombay 1955 (archive.org: ageofimperialkan04bhar, tam metin okundu)';
const M5 = 'R. C. Majumdar (ed.), The History and Culture of the Indian People, Vol. V: The Struggle for Empire, Bharatiya Vidya Bhavan, Bombay 1957 (archive.org: struggleforempir05bhar, tam metin okundu)';
const COE = 'George Coedès, The Indianized States of Southeast Asia, ed. W. F. Vella, çev. S. B. Cowing, East-West Center Press, Honolulu 1968 (archive.org: theindianizedstatesofsoutheastasia, djvu tam metni okundu)';
const TDV = (slug, baslik) => 'TDV İslâm Ansiklopedisi, «' + baslik + '», https://islamansiklopedisi.org.tr/' + slug + ' (22.10.2026\'da okundu)';
const J = (...a) => a.filter(Boolean).join(' | ');
const S = (f, t, d, kesinlik, kaynak) => ({ f, t, d, kesinlik, kaynak });

const out = { yama: [], sinir: [], kunye: [], yer: [] };

// ═════════ SİYÂLKOT ═════════
{
  const a0 = yamaOnce('hint1/yama_hint1.js', 'Siyâlkot')[0];
  const s = [
    a0,
    S('0540-01-01', '0883-01-01', '__BOSLUK__', 'yil', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: Siyâlkot\'un 540-883 arası sahibi (polity/hanedan) kaynaklarda adlandırılmıyor.',
      M3 + ', Önsöz (K. M. Munshi): «Mihirakula then fell back on Kashmir which he captured, and died soon after.» (Alkhon\'un Pencap\'tan çekilişi; gün yok)',
      M3 + ', «Harsha and his time»: «The most important kingdom in the Punjab is called Cheh-ka, which probably stands for Takka. Its capital was near Sialkot and it extended from the Beas in the east to the Sindhu on the west.» (Xuanzang, 630-644 yolculuğu: Takka devleti VAR ama hanedanı/öncesi-sonrası adlandırılmıyor)',
      TDV('hindistan', 'Hindistan') + ': «başşehri Pencap’taki Siyâlkût’un birkaç mil kuzeyinde bulunan Takkadesa (Tâka)» (Arap coğrafyacıları; IX-X. yy)',
      'Takka\'nın 633→883 arası hanedan sürekliliği kaynakta kurulamadı ve atlasta Takka künyesi YOK (künye önerisi RAPOR.md). Komşu devletlerin sahipliği (Karkota, Gürcara-Pratihâra, Hindu Şâhî) Siyâlkot için kanıtlanamadı; M3 Lalitaditya\'nın seferlerini «conventional» sayar. Ufuk: f=0540 = alkhon künyesi t (onyil).'
    )),
    S('0883-01-01', '0902-01-01', 'utpala-kesmir', 'onyil', J(
      M4 + ', «Central and Western India», IX. Shahis: «King Sahkaravarman (A.D. 883- 902) of the Utpala dynasty of Kashmir invaded the kingdom of Alakhana and wrested from him Takka-land, which was the country adjoining the lower hills east of the Chenab.»',
      'BEYANLI YAKLAŞIKLIK: Siyâlkot Chenab\'in doğusunda, Takkadesa içinde (TDV Hindistan: Takkadesa Siyâlkût\'un kuzeyinde; M3: Cheh-ka başkenti Siyâlkot yakını). Fetih yılı kaynakta yok: f=883 Şankaravarman\'ın hükümdarlık başı, t=902 sonu (onyil; M4 başka yerde fetih için «early years of the tenth century» der).'
    )),
    S('0902-01-01', '0991-01-01', '__BOSLUK__', 'yil', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: 902-991 arası Siyâlkot sahibi.',
      M4 + ', IX. Shahis: «Sankaravarman, king of Kashmir, deprived the Pratihara Mahendrapala of his territories in the Punjab and handed them over to one of his officers, who belonged to the Thakkiya family.» (Thakkiya idaresinin süresi ve Keşmir\'e bağlılığı yazılı değil; Hindu Şâhî yayılmasının Siyâlkot\'u kapsayıp kapsamadığı kaynakta yok.)',
      'Lahor (abi merkez adayı) için de 902-982 sahibi TDV\'de yok (TDV Lahor: 982\'de Mültan emîri); bu yüzden abi merkez zinciri kurulamadı.'
    )),
    S('0991-01-01', '1013-01-01', 'hindu-sahiler', 'yil', J(
      TDV('lahor', 'Lahor') + ': «Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.»',
      'BEYANLI YAKLAŞIKLIK — ABİ MERKEZ: Lahor (Pencap\'ın siyasî-askerî merkezi; Siyâlkot Lahor\'un bağlı toprağı, her iki şehir de 1185-86\'da Hüsrev Melik\'in elinden Gurlulara geçti: M5 + TDV Hindistan). Siyâlkot\'a özgü Hindu Şâhî tanığı YOK. f=991 TDV\'nin «991\'den sonra»sı (en erken sınır).'
    )),
    S('1013-01-01', '1185-01-01', 'gazneli', 'yil', J(
      TDV('lahor', 'Lahor') + ': «Şehir 991’den sonra Hindûşâhîler’in, 1013-1014’te Gazneli Mahmud’un eline geçti.»',
      TDV('gazneliler', 'Gazneliler') + ' (Erdoğan Merçil): «Sonuçta Hüsrev Şah Gazne’yi terkederek Lahor şehrine yerleşti. Gazneliler bundan sonra Hindistan’daki topraklar üzerinde hüküm sürdüler.»',
      M5 + ', «The Ghaznavid invasion»: «In 1184 Muhzz-ud-din Muhammad again invaded Lahore but, having failed to capture it, ravaged the neighbouring districts. On his way back he captured the fort of Sialkot» (Siyâlkot kalesi Hüsrev Melik\'in elinde idi)',
      'BEYANLI YAKLAŞIKLIK — ABİ MERKEZ: Lahor (1013-14 → Gazneli; TDV). Siyâlkot\'a özgü ilk Gazneli tanığı 1184-85 (kale fethi); 1013-1184 arası Siyâlkot\'a özgü tanık yok.'
    )),
    S('1185-01-01', '1206-01-01', 'gurlu', 'yil', J(
      M5 + ', «Muhammad of Ghur»: «Peshawar was taken in A.D. 1178, Sialkot fell in A.D. 1185, and the following year Lahore was captured by treachery from Khusrav Malik, the last of the Ghaznavids»',
      TDV('hindistan', 'Hindistan') + ': «Muizzüddin Muhammed 1186’da Lahor’u zaptederek Hindistan’daki Gazneli hâkimiyetine son verdi»',
      'ÇELİŞKİ (ic_not): M5 Siyâlkot kalesinin alınışını bir yerde 1184\'te («In 1184 … captured the fort of Sialkot, and posted there Husain»), başka yerde 1185\'te («Sialkot fell in A.D. 1185») verir; gün yok. 1185 alındı (açık «fell in» cümlesi). Kale muhafızı Husayn b. Harmîl (M5); Hüsrev Melik\'in karşı hamlesi başarısız.'
    )),
    S('1206-01-01', '1281-01-01', 'delhi-sultanligi', 'yil', J(
      TDV('hindistan', 'Hindistan') + ': «DELHİ SULTANLIĞI (Kuzey ve Orta Hindistan, 1206-1526)»',
      M5 + ', «The Mamluk Sultans of Delhi»: «Before his death he managed to extend his rule up to Sialkot and Hajner in the north» (İltutmış, ö. 1236)',
      'BEYANLI YAKLAŞIKLIK: (a) 1206-c.1230 arası Siyâlkot\'a özgü tanık yok; M5: «Qaba- cha pushed to Multan and extended his hold over Lahore, Bhatinda» (Aram Şah dönemi), Delhi\'nin Pencap\'taki fiilî hâkimiyeti İltutmış\'ın Sialkot\'a uzanmasına dek tartışmalı; (b) M5: «tacitly acquiesced in the loss of Sindh and the Punjab west of the Beas line» (1257 sonrası Moğol vasalları) — Siyâlkot adı geçmez, Delhi\'de bırakıldı; 1281 mevcut zincir başı delhi-sultanligi ile süreklilik için.'
    ))
  ];
  out.yama.push({ ad: 'Siyâlkot', mevcut_zincir_basi: 'delhi-sultanligi 1281-01-01', degistirilen_yama: ['hint1'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): hint1 alkhon dilimi + 540→1281 kuyruk. İlk dilim f=0500-01-01 UFUK; son dilim t=1281-01-01 = mevcut zincir başı.', s_onek: s });
}

// ═════════ GVALYAR (Gwalior) ═════════
{
  const h2 = yamaOnce('hint2/yama_hint2.js', 'Gvalyar (Gwalior)'); // kachchhapaghata 977-1196, gurlu 1196-1206, delhi 1206-1210
  const s = [
    S('0500-01-01', '0540-01-01', 'alkhon', 'onyil', J(
      M3 + ', «The Hunas»: «An inscription dated in the fifteenth year of his reign (c. A.D. 530) shows that his sovereignty extended at least up to Gwalior»',
      'BEYANLI YAKLAŞIKLIK: f=0500-01-01 UFUK SINIR İŞARETİDİR (pencere başı); Gwalior\'a özgü c.530 öncesi tanık yok, Alkhon künyesi (0500-0540) Mihirakula\'nın bu yazıtına dayanır; t=540 Alkhon künye t (onyil).'
    )),
    S('0540-01-01', '0815-01-01', '__BOSLUK__', 'yil', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: Gwalior\'un 540-815 arası sahibi.',
      M3 + ', «Harsha and his time»: «In Central India there were three states in Bundelkhand, Gwalior, and Ujjain (E. Malava) ruled over by Brahmana kings.» (Xuanzang, 630-644: devlet adı/hanedanı/hükümdarı verilmiyor; Harşa\'ya bağlılığı M3\'e göre yalnız «assume» düzeyinde)',
      'Komşu devlet sahipliği (Harşa, Yaşovarman, Karkota) Gwalior için kanıtlanamadı; atlasta bu Brahmana devleti için künye yok.'
    )),
    S('0815-01-01', '0977-01-01', 'gurjara-pratihara', 'onyil', J(
      M4 + ', «Rise and fall of the Pratihara empire»: «In the east his sway extended up to Gwalior» (Nagabhata II, Kanauj\'un ~815\'te başkent oluşu çağı) · «Gwalior, which was a stronghold of the Pratiharas ever since the time of Ramabhadra, if not earlier still, fell into the hands of the Chandellas. A few years later the Kachchhapaghata chief Vajradaman conquered it after defeating the Pratihara Emperor.»',
      M5 + ', «The Kachchhapaghatas»: «Gwalior was under the sway of the Chandella Dhanga, a feudatory of the Pratihara Vinayakapala of Kanauj, in the third quarter of the tenth century A.D.»',
      'BEYANLI YAKLAŞIKLIK: f=815 Nagabhata II dönemi (onyil; M4 başka yerde yalnız «his sway extended up to Gwalior» der, yıl vermez; Ramabhadra\'dan beri «stronghold»). Çelişki: M4 Chandella Dhanga\'yı Gwalior\'u «ele geçiren», M5 Pratihara\'nın vasalı sayar; Gwalior\'a özgü ayrı Chandella künyesi/tarihi yok, Pratihara üstünlüğü altında bırakıldı. t=977 Vajradaman\'ın en geç tarihi (aşağıdaki dilim).'
    )),
    h2[0], h2[1], h2[2],
    S('1210-01-01', '1231-01-01', 'parihara-gwalior', 'yil', J(
      M5 + ', «The Kachchhapaghatas»: «During the weak rule of Aram Shah (A.D. 1210-11), son of Qutb-ud-din, the Pratihara chief Vigraha established the supremacy of his family in Gwalior by defeating the Muslims. His son and successor Malayavarman, who is known to have been ruling in A.D. 1220»',
      M5 + ', «The Mamluk Sultans of Delhi»: «the Pratlharas, commonly known as Pariharas, reoccupied Gwalior»',
      TDV('iltutmis', 'İltutmış') + ': «Kutbüddin Aybeg’in ölümüyle Hindular’ın tekrar ele geçirdiği Gevâliyâr’ı geri aldı (629/1231)» (Aybeg\'in ölümü 1210: TDV)',
      'Parihara (Pratihâra) Gwalior kolu atlasta künyesiz → kunye_yeni.js `parihara-gwalior` önerisi (boya gerekli). f=1210-01-01 yıl hassasiyeti (Aram Şah 1210-11; gün yok).'
    )),
    S('1231-01-01', '1236-01-01', 'delhi-sultanligi', 'yil', J(
      TDV('iltutmis', 'İltutmış') + ': «Kutbüddin Aybeg’in ölümüyle Hindular’ın tekrar ele geçirdiği Gevâliyâr’ı geri aldı (629/1231), arkasından da Mâlvâ’yı ve Bhilsa (Bilsan) Kalesi’ni zaptetti (632/1234).»',
      M5 + ', «Northern India during 11th and 12th centuries»: «Iltutmish conquered Gwalior by defeating Dewbul (Devavarma?), probably the successor of Malayavarman.»',
      'ÇELİŞKİ/HASSASİYET (ic_not): TDV 629 H = 1231; 629 H Ekim 1231-Ekim 1232\'dir, gün yok → yıl hassasiyetiyle 1231-01-01; M5 fetih yılı vermez. t=1236 aşağıda.'
    )),
    S('1236-01-01', '1258-01-01', 'parihara-gwalior', 'yil', J(
      M5 + ', «The Kachchhapaghatas» (Rukn-ud-din, İltutmış\'ın oğlu, döneminde olasılıkla): «that Gwalior was reconquered by Nrivarman (Naravarman), brother of Malayavarman, who is known to have been ruling in A.D. 1247»',
      M5 + ', «The Struggle for Empire — Delhi and the Hindu states»: «Raziyya was obliged to abandon the fortress»',
      'ÇELİŞKİ (ic_not): kaynak geri alış için Rükneddin (1236) ve Radiyye (1236-40) dönemlerini birlikte verir; yıl 1236 alındı (iki ihtimalin ilkinin yılı). Tek tanıklı yıl: «ruling in A.D. 1247». M5 Gwalior üzerindeki Chandella/Jajapella üstünlük iddialarını (1263 yazıtı) ayrıca anar; Gwalior\'a özgü sahiplik değişimi yazılmadı.'
    )),
    S('1258-01-01', '1281-01-01', 'delhi-sultanligi', 'yil', J(
      M5 + ', «The Kachchhapaghatas»: «Balban conquered Gwalior in A.D. 1258 and placed Malik Nusrat-ud-din in charge of it.»',
      M5 + ', «The Mamluk Sultans of Delhi»: «in A.D. 1258, Balban transferred Sher Khan to the interior provinces of Kol and Gwalior from the frontier area of Bhatinda»',
      'ÇELİŞKİ (ic_not): M5 başka yerde Balban\'ın 1251 seferinin «temporary capture of Narwar and Gwalior» ile sonuçlandığını ve Jajapella kayıtlarında bu yerlerin 1298\'e dek «uninterruptedly» anıldığını söyler; 1258 Delhi valiliği (Sher Khan\'ın Gwalior\'a atanması) iki ayrı yerde teyitli olduğu için alındı. 1281 mevcut zincir başı delhi-sultanligi.'
    ))
  ];
  out.yama.push({ ad: 'Gvalyar (Gwalior)', mevcut_zincir_basi: 'delhi-sultanligi 1281-01-01', degistirilen_yama: ['hint2'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): hint2 (977-1210) dilimleri korunup önü 0500\'e (ufuk) ve ardı 1281\'e tamamlandı.', s_onek: s });
}

// ═════════ KANNAUC (Kannauj) ═════════
{
  const h1 = yamaOnce('hint1/yama_hint1.js', 'Kannauc'); // gupta, maukhari, gauda-shashanka, harsha → 647
  const s = [
    h1[0], h1[1], h1[2], h1[3],
    S('0647-01-01', '0700-01-01', '__BOSLUK__', 'yil', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: Kannauj\'un 647-700 arası sahibi.',
      M4 + ', «Foreword»: «For more than half a century thereafter, the history of Kanauj is wrapt in obscurity. At the end of it, Yasovarman, a great conqueror and the patron of Bhavabhuti and Vakpati, is found ruling Kanauj.»',
      'f=647 harsha künye t. Arjuna/Arunasva ve Çin elçisi Wang Xuance olayları bu oturumda okunmadı (atıf; açılmadı).'
    )),
    S('0700-01-01', '0740-01-01', 'yashovarman-kannauj', 'onyil', J(
      M3 + ', «Northern India during A.D. 650-750»: «The date of Yasovarman is not definitely known, but his reign may be placed between A.D. 700 and 740.»',
      M3 + ', «Northern India during A.D. 650-750»: «Whether he was killed or not, his power was utterly broken by Lalitaditya, and he fades out of history.»',
      'Yaşovarman atlasta künyesiz → kunye_yeni.js `yashovarman-kannauj` önerisi (boya gerekli). Kaynak «accession c.690» ihtimalini de anar (M3); 700-740 kaynağın kendi aralığı (onyil).'
    )),
    S('0740-01-01', '0783-01-01', '__BOSLUK__', 'yil', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: Kannauj\'un 740-783 arası sahibi.',
      M3 + ', «Northern India during A.D. 650-750»: «By that victory, Lalitaditya not only made himself master of Kanauj» … «but also acquired the theoretical right of suzerainty over the vast conquests of his late enemy.» (… «It is difficult to say how far this conventional account may be regarded as historically true.» — Karkota\'nın Kannauj fiilî hâkimiyeti ve süresi kaynakta kurulamadı, bu yüzden Karkota\'ya BAĞLANMADI.)',
      M4 + ', «Rise and fall of the Pratihara empire»: Jinasena (783): «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north» — 783 sonrası tanık.'
    )),
    S('0783-01-01', '0815-01-01', 'ayudha-kannauj', 'onyil', J(
      M4 + ', «Rise and fall of the Pratihara empire»: «The first two lines of the verse tell us that in that year Indrayudha was ruling in the north» (Jinasena, Harivamsa, Şaka 705 = 783)',
      M4 + ', «Rise and fall of the Pratihara empire»: «Dharmapala placed on the throne a new ruler Chakrayudha, whose name-ending shows that he was probably connected with the ruling family.» · «Nagabhata defeated Chakrayudha and conquered his kingdom.»',
      'Ayudha hanedanı atlasta künyesiz → kunye_yeni.js `ayudha-kannauj` önerisi (boya gerekli). BEYAN: f=783 İNDRAYUDHA\'NIN İLK TARİHLİ TANIĞI (cülus yılı değil); Vatsaraja\'nın (Pratihara) ve Dharmapala\'nın (Pala) vasal/tâbi kılma girişimleri M4\'te anlatılır, Kannauj tahtı Ayudha elinde kaldı (puppet). t=815 Nagabhata II.'
    )),
    S('0815-01-01', '1019-01-01', 'gurjara-pratihara', 'yil', J(
      M4 + ', «Foreword»: «Ultimately Kanauj passed into the hands of the Pratiharas. About A.D. 815 it became the capital»',
      TDV('hindistan', 'Hindistan') + ': «Pratiharalar (Batı Hindistan ve Yukarı Ganj vadisi, 773-1019)»',
      M5 + ', «Kanauj»: «the Imperial Pratiharas ruled Kanauj up to A.D. 1019, and Rajyapala was the last king of this dynasty to be associated with that city»',
      'BEYAN: Rashtrakuta III. Indra\'nın 916 civarı Kannauj baskını geçici sayıldı (Pratihara dönüşü); atlas künyesi gurjara-pratihara t=1027 (Bari kolu), Kannauj\'dan çıkış 1019. f=815 «About» (yıl).'
    )),
    S('1019-01-01', '1090-01-01', 'rashtrakuta-kannauj', 'onyil', J(
      M5 + ', «Northern India during 11th and 12th centuries — Kanauj»: «The first known king of this family is Chandra, who seems to have established his supremacy over Kanauj during the period of disorder that followed the invasion of Mahmud of Ghazni.»',
      M5 + ', «Kanauj — the Gahadavalas»: «seized the throne of Kanauj from the Rashtrakuta ruler Gopala» (Chandradeva)',
      'Kannauj Raştrakûtaları (Gopala\'ya dek 4 kral: Chandra, Vigrahapala, Bhuvanapala, Gopala) atlasta künyesiz → kunye_yeni.js `rashtrakuta-kannauj` önerisi (boya gerekli). BEYAN: f=1019 Pratihara\'nın Kannauj\'dan çıkışı (Chandra\'nın cülus yılı kaynakta YOK); Ghaznavî Mahmûd b. İbrâhîm\'in 1086-1090 arası Kannauj\'u yağmalaması (M5) tahtı değiştirmedi. t=1090 Chandradeva yazıtlarının ilk yılı.'
    )),
    S('1090-01-01', '1193-01-01', 'gahadavala', 'yil', J(
      M5 + ', «Kanauj — the Gahadavalas»: «The inscriptions of Chandradeva, the dates of which range from A.D. 1090 to 1100, prove that he was in possession of Kanauj, Banaras, and Ayodhya.»',
      TDV('hindistan', 'Hindistan') + ': «Gahadavalalar (Kannevc, 1090-1193)»',
      M5 + ', «Kanauj — the Gahadavalas»: «after conquering Delhi and Ajmer from the Chahamanas, advanced with a large army against Jayachandra in A.D. 1193»',
      'ÇELİŞKİ (ic_not): TDV Gahadavala Kannevc 1090-1193 (esas alındı); M5 Chandawar savaşını 1193\'te verir ama Harishchandra\'nın 1197\'de Kanauj\'u elinde tuttuğunu söyler (kuyruk için bkz. sonraki dilim); Kuzey Hindistan yayınlarında 1194 de geçer, bu oturumda açılmadı.'
    )),
    S('1193-01-01', '1206-01-01', 'gurlu', 'yil', J(
      TDV('hindistan', 'Hindistan') + ': «Daha sonra kumandanlarından Kutbüddin Aybeg birkaç yıl içerisinde Kuhram, Sâmâne, Bedâûn, Kannevc, Gevâliyâr ve Kālincâr gibi yerleri»',
      'BEYANLI YAKLAŞIKLIK + ÇELİŞKİ: M5 «As Harischandra, son of Jayachandra … was in possession of Kanauj, Jaunpur, and Mirzapur Districts in A.D. 1197, it is obvious that he succeeded in wresting his paternal kingdom from the hands of the Muslims» → 1193-1197 arası ve sonrası Kannauj\'un fiilî sahibi iki kaynak arasında kesin değil; TDV (esas) Aybeg\'in birkaç yıl içinde Kannevc\'i aldığını söyler ve Gahadavala künyesi 1193\'te biter. Gurlu (Muizzeddin/Aybeg) 1193\'ten 1206 Delhi Sultanlığı\'na dek yazıldı; Harishchandra\'nın 1197 kaydı ic_not\'ta kalır.'
    )),
    S('1206-01-01', '1281-01-01', 'delhi-sultanligi', 'yil', J(
      TDV('hindistan', 'Hindistan') + ': «DELHİ SULTANLIĞI (Kuzey ve Orta Hindistan, 1206-1526)»',
      M5 + ', «The Mamluk Sultans of Delhi»: «the inclusion by his chronicler of Budaun, Kanauj and even Banaras among his conquest, can be understood only in this context, for these places had figured in Aibak’s initial conquests also»',
      'BEYANLI YAKLAŞIKLIK: Kannauj\'a özgü 1206-1281 ayrı tanık yok; Gahadavala kalıntısı (Adakkamalla) ve Budaun Raştrakûtaları Doab\'da direnmeye devam eder (M5); Delhi künyesi f=1206 ve mevcut zincir başı delhi-sultanligi 1281 ile süreklilik.'
    ))
  ];
  out.yama.push({ ad: 'Kannauc', mevcut_zincir_basi: 'delhi-sultanligi 1281-01-01', degistirilen_yama: ['hint1'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): hint1 (500-647) korunup 647→1281 tamamlandı.', s_onek: s });
}

// ═════════ JAMBİ ═════════
{
  const g1 = yamaOnce('gdasya1/yama_gdasya1.js', 'Jambi'); // kantoli, bosluk, melayu-jambi (→689)
  const s = [
    g1[0], g1[1], g1[2],
    S('0689-01-01', '1275-01-01', 'srivijaya', 'yil', J(
      COE + ', V-7: «between 689 and 692 Malayu was absorbed by Shih-li-fo-shih»',
      TDV('sumatra', 'Sumatra') + ': «Malay kökenli Budist bir krallık olan Srivijaya, VII. yüzyıldan XIV. yüzyıla kadar adanın en önemli siyasî gücü olarak varlığını sürdürmüştür.»',
      COE + ', «Srivijaya and its relations with the Cholas of Tanjore (1003-30)», s.143: Çola seferi 1025: «Malaiyur (the Malayu of the seventh century, that is, Jambi)»',
      'ÇELİŞKİ/BEYANLI YAKLAŞIKLIK (ic_not): ' + COE + ', XI-3: «Chan-pei (Jambi), the former Malayu, is not listed among the dependencies of San-fo-ch\'i» (Chao Ju-kua, 1225) ve «as early as 1079, and then in 1082 and 1088» Çin\'e kendi adına elçilik gönderdi — Jambi\'nin özerkliği 1079\'dan beri gösterilir; TDV (esas) Srivijaya\'yı VII-XIV. yy Sumatra\'nın siyasî gücü sayar ve atlas künyesi srivijaya başkentini «Palembang → Jambi (Melayu)» verir. f=689 I-tsing\'in verdiği 689-692 aralığının ilk yılı; t=1275 srivijaya künye t (Pamalayu).'
    )),
    S('1275-01-01', '1281-01-01', 'singhasari', 'yil', J(
      COE + ', XII-6: «In 1275, taking advantage of the decline of Srivijaya, he sent a military expedition to the west which established Javanese suzerainty over Malayu» (Kritanagara)',
      COE + ', XII-7: «was brought from Java (bhumi Java) to the country of gold» (1286 Amoghapasa yazıtı, Batang Hari, Dharmasraya)',
      'BEYAN: Singhasari üstünlüğü 1275 seferiyle kurulduğu söylenir, Jambi\'ye özgü fetih günü yok; Malayu merkezi bu dönemde Dharmasraya\'ya kaymıştır (1286 Amoghapasa yazıtı, upper Batang Hari). singhasari künyesi 1222-1292.'
    ))
  ];
  out.yama.push({ ad: 'Jambi', mevcut_zincir_basi: 'malay-sultanliklari 1281-01-01', degistirilen_yama: ['gdasya1'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): gdasya1 (500-689) korunup 689→1281 tamamlandı.', s_onek: s });
}

// ═════════ QUANG TRI ═════════
{
  const g1 = yamaOnce('gdasya1/yama_gdasya1.js', 'Quang Tri'); // linyi-champa 500→1000
  const s = [
    g1[0],
    S('1000-01-01', '1281-01-01', 'campa', 'yil', J(
      COE + ', VII-2: «finally abandoned this extremely vulnerable capital in the year 1000 and established himself at Vijaya, in the region of Binh-dinh.»',
      COE + ', s.141 («Three Great Kings»): Rudravarman III 1069\'da «his three northern provinces, corresponding approximately to Quang-binh and Quang-tri» terk etti',
      'Trần Trọng Kim, Việt Nam sử lược, I. Kitap III. Bölüm IV (vi.wikisource.org, okundu): «Những châu ấy nay ở địa-hạt tỉnh Quảng-bình và tỉnh Quảng-trị.» (Địa-lý, Ma-linh, Bố-chính; 1069)',
      COE + ', XII-12: 1306\'da Cha Man «in exchange for two Cham provinces situated north of the Col des Nuages» (Ô ve Lý) Trần prensesi Huyền Trân ile evlendi',
      'BEYANLI YAKLAŞIKLIK + ÇELİŞKİ (ic_not): Coedès 1069 devrini «Quang-binh ve Quang-tri\'ye yaklaşık karşılık gelen» üç kuzey il olarak verir (Trần Trọng Kim: Quảng-bình ve Quảng-trị); aynı Coedès 1306\'da Cham\'ın hâlâ Col des Nuages\'nın kuzeyinde iki ili (Ô ve Lý) elinde tuttuğunu söyler. Ô/Lý\'nin Quang Tri ilinin hangi kesimine denk geldiği ve Quang Tri şehir noktasının (16.75, 107.19) 1069\'da devredilen Ma-linh/Địa-lý/Bố-chính içinde mi, 1306\'ya dek Cham\'da kalan Ô içinde mi olduğu bu oturumda kaynakla belirlenemedi. Atlasın mevcut zinciriyle (campa 1281→1306) süreklilik için Champa yazıldı; 1069 Đại Việt devri YAZILMADI. 1103-04 geçici Cham saldırısı (Trần Trọng Kim: «đem quốc-vương là Chế ma Na» … «sang đánh lấy lại ba châu Ma-linh, Bố-chính») sahiplik değiştirmedi. f=1000 Vijaya\'ya taşınma; campa künye f. Emre\'ye soru: Quang Tri noktası 1069-1306 Đại Việt mi sayılsın (Ma-linh)? Karar için Đại Việt sử ký toàn thư sınır tanımı gerekir.'
    ))
  ];
  out.yama.push({ ad: 'Quang Tri', mevcut_zincir_basi: 'campa 1281-01-01', degistirilen_yama: ['gdasya1'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): gdasya1 (500-1000 linyi-champa) + 1000→1281 campa.', s_onek: s });
}

// ═════════ PYONGYANG ═════════
{
  const k1 = yamaOnce('koja1/yama_koja1.js', 'Pyongyang'); // goguryeo, tang(668→918), goryeo(918→1281)
  const k2 = yamaOnce('koja2/yama_koja2.js', 'Pyongyang'); // daewi, goryeo
  const goryeo918 = k1[2].kaynak.replace(/\s*·\s*DÖNEM KIRPILDI[\s\S]*$/, '');
  const s = [
    k1[0],
    S('0668-10-22', '0676-02-24', 'tang', 'gun', J(
      k1[1].kaynak,
      'Sima Guang, Zizhi tongjian 卷202 (zh.wikisource.org/wiki/資治通鑑/卷202, okundu), 儀鳳元年: «二月，甲戌，徙安東都護府於遼東故城» (Andong Koruyucu Genel Valiliği Pyongyang\'dan Liaodong eski kentine taşındı)',
      'Takvim (ic_not_takvim): 儀鳳元年二月甲戌 → Jülyen 0676-02-24 (Gregoryen 0676-02-27; astronomik ay-güneş takvimi, ±1 gün; cin2/_cal.py). Önceki koja1 dilimi bu şehre 668-918 arası «tang» yazmıştı ama kendi kaynağı (Samguk sagi 50, Goryeosa 58) şehrin terk edildiğini söyler; Tang dilimi 676-02-24\'te KISALTILDI.'
    )),
    S('0676-02-24', '0918-07-25', '__BOSLUK__', 'gun', J(
      'BOŞLUK BEYANI: arandı, bulunamadı: Pyongyang\'ın 676-918 arası sahibi YOK — şehir terk edilmişti: Kim Busik, Samguk sagi 卷50 (zh.wikisource.org/wiki/三國史記/卷50, okundu): «徃者新羅請兵於唐，以破高勾麗，故平壤舊都，鞠為茂草。» (Gung Ye\'nin 901 sözü) · Goryeosa 卷五十八 (zh.wikisource.org/wiki/高麗史/卷五十八, okundu): «太祖元年，以平壤荒廢，量徙鹽、白、黃、海、鳳諸州民，以實之，爲大都護府。»',
      'KARAR NOTU: Yerleşim bu dönemde fiilen YOK sayılabilir (CLAUDE.md: yoksa dönemi kırp); ama yama aracı sürekli önek ister, bu yüzden `__BOSLUK__` + beyan olarak yazıldı — motor «delik» çizer, doğru görünüm budur. Emre\'ye soru: 676-918 aralığı kırpılsın mı (yerleşim bu aralıkta sahneden çıksın), `__BOSLUK__` mu kalsın? (koja1 RAPOR da aynı soruyu sordu.) Silla\'nın 735\'te Tang\'dan aldığı Paegang (Taedong) güneyi Pyongyang\'ı kapsamaz: kaynak okunmadı (atıf; açılmadı).'
    )),
    S('0918-07-25', '1135-01-19', 'goryeo', 'gun', goryeo918),
    k2[0],
    k2[1]
  ];
  out.yama.push({ ad: 'Pyongyang', mevcut_zincir_basi: 'goryeo 1281-01-01', degistirilen_yama: ['koja1', 'koja2'], aciklama: 'BİRLEŞİK ÖNEK (kuyruk2b): koja1 (500-918) ile koja2 (1135-1281) arasındaki çakışma (koja1 goryeo 918→1281 ⊃ koja2 daewi 1135-36) çözüldü; Tang dilimi 676\'da kısaltıldı, 676-918 beyanlı boşluk.', uyari: 'Goryeosa j.26: Moğol Dongnyeong-bu (1270-1290) Pyongyang\'ı kapsıyordu; 1270-1281 arası sahip \'goryeo\' diye BEYANLI YAKLAŞIKLIK olarak bırakıldı (mevcut zincir başı goryeo 1281 olduğu için; yuan-hanedani 1270→1281 yazılırsa 1281\'de sahte bir devir doğar).', s_onek: s });
}

// ═════════ URASOE ═════════
{
  const k2 = yamaOnce('koja2/yama_koja2.js', 'Urasoe Gusuku (Chuzan merkezi)')[0];
  const s = [
    S('1187-01-01', '1322-01-01', 'ryukyu-shunten-eiso', 'yil', J(
      k2.kaynak,
      'Chūzan Seikan (1650) ja.wikisource.org/wiki/琉球國中山世鑑/卷二 (okundu): «此時ヨリ世衰ヘ政廢シテ朝覲會同ノ禮モ日ニ衰ヘ» · «國別レテ為三中山王山南王山北王トソ申ケル» (Tamagusuku\'nun 1314\'te tahta çıkışından sonra ülkenin üçe ayrılışı; yıl verilmez, hükümdarlık süresi 23 yıl)',
      'BEYANLI YAKLAŞIKLIK: 1314-1322 arası aynı hükümdarlık (Tamagusuku) sürer; sanzan künyesi f=1322 kaynaksızdır (Chūzan Seikan ayrılış yılını vermez). Çözüm: dilim 1187→1322 tek parça yazıldı; ryukyu-shunten-eiso künye t=1314 → 1322 GENİŞLETİLMELİ (künye önerisi RAPOR.md); aksi hâlde 1314-1322 hayalet devlet olur.'
    ))
  ];
  out.yama.push({ ad: 'Urasoe Gusuku (Chuzan merkezi)', mevcut_zincir_basi: 'sanzan 1322-01-01', degistirilen_yama: ['koja2'], aciklama: 'koja2 yaması 1187→1314 + boşluk 1314→1322 kapatıldı. Ad mevcut kayıtla AYNEN eşleşir (data/yerlesimler_nokta3.js; yer_ara.py ad \'Urasoe\' bulur). Mevcut kayıtta kur:1322 — yama uygulanınca kur 1187-01-01 (ilk kaynaklı tanık) olarak gözden geçirilmeli.', s_onek: s });
}

// ═════════ AROR (Alor) — YENİ yerleşim: hint1 kaydı + hint3 öneki ═════════
{
  const h3 = yamaOnce('hint3/yama_hint3.js', 'Aror (Alor)')[0];
  const rec = JSON.parse(JSON.stringify(liste('hint1/yerlesimler_dogu_hint1.js').find(y => y.ad === 'Aror (Alor)')));
  rec.s = [h3].concat(rec.s);
  rec.kuyruk_gerekli = rec.s[rec.s.length - 1].t + ' → 2000-12-31';
  rec.not = (rec.not || '') + ' · kuyruk2b: hint3\'ün 0500→0640 rai-sind öneki bu kayda eklendi (Aror atlasta YOK: yama değil, yeni yerleşim kaydıdır; hint3\'ün yaması UYGULANAMAZ, bu kayıt hint1\'in yerine geçer).';
  rec.kume = 'kuyruk2b';
  out.yer.push(rec);
}

module.exports = out;

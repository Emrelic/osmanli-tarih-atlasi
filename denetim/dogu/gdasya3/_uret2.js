// gdasya3: yerleşim + yama + dosya yazımı. Çalıştır: node _uret2.js
const U = require('./_uret.js');
const { kunye, kron, sinir, K, J, BEYAN, OUT, rapor, fs, path } = U;
const SUV = (konum, qs) => K('suv', konum, qs);

// ---------- YENİ YERLEŞİMLER ----------
const yer = [];
yer.push({
  ad: 'Daha (Kediri)', tur: 'sehir', lat: -7.8111, lon: 112.0047, g: 1, k: 3, kur: '1042-01-01', kesinlik: 'yil',
  s: [
    { f: '1042-01-01', t: '1222-01-01', d: 'kediri', kesinlik: 'yil', kaynak: J(K('coedes', 'IX-4', ['On the west was Panjalu, better known by the name Kadiri, which included the residencies of Kediri and Madiun, with an access to the sea on the bay of Surabaya', 'Its capital was Daha (present-day Kediri)']), BEYAN('Airlangga bölmesinin yılı kesin değil (Coedès \'ölümünden önce\', Hall ≈1045, Majumdar 1042 çıkarımı); 1042 alındı.')) },
    { f: '1222-01-01', t: '1281-01-01', d: 'singhasari', kesinlik: 'yil', kaynak: J(K('coedes', 'XI-8', ['In 1221 he marched on Kadiri and waged a decisive battle at Canter', 'Kadiri consequently became an integral part of the kingdom of Tumapel']), BEYAN('Savaş 1221, düşüş 1222 (Coedès); 1222 alındı.')) }
  ],
  kuyruk_gerekli: '1281-01-01 → 2000-12-31',
  not: 'kur: KURULUŞ DEĞİL, İLK TARİHLİ/YAZILI TANIK ALT SINIRI — Coedès Panjalu/Kadiri\'nin başkentini Daha (bugünkü Kediri) olarak verir; şehrin kuruluş yılı bilinmez, bölme yılı (≈1042) ilk tanık sayıldı. 1281 sonrası zincir kuyruk işçisine bırakıldı (Singhasari 1292\'de Jayakatwang\'ın Daha\'sı ile yıkıldı; Majapahit, Demak, Mataram sultanlığı, Hollanda Doğu Hint, Endonezya zinciri yazılmadı).',
  kaynak: 'koordinat (çift tanık): Wikidata Q11443 (Kediri şehri) P625 = -7.8111, 112.0047 · OSM Nominatim relation 9676375 (Kota Kediri) = -7.8111, 112.0046 · GeoNames 1640660 Kediri = -7.8167, 112.0167 (üç tanık 1,3 km içinde); Coedès: «Its capital was Daha (present-day Kediri)» (IX-4).'
});
yer.push({
  ad: 'Phayao', tur: 'sehir', lat: 19.1668, lon: 99.9021, g: 1, k: 3, kur: '1096-01-01', kesinlik: 'yil',
  s: [
    { f: '1096-01-01', t: '1281-01-01', d: 'phayao', kesinlik: 'yil', kaynak: J(K('hall', '7', ['the small independent T’ai state of P’ayao came into existence as early as 1096']), K('coedes', 'XII-5', ['Ngam Miiang, chief of Phayao, and Mangrai, chief of Chiangrai, who in 1287']), BEYAN('Hall devletin 1096\'dan önce var olduğunu söyler, başkent şehir adını vermez; Phayao şehri devletin merkezi sayıldı. 1281 epok sınırı; Phayao\'nun sonrası (1287 pakt, 1338/1411 öncesi bağımsızlık) kuyruğa bırakıldı.')) }
  ],
  kuyruk_gerekli: '1281-01-01 → 2000-12-31',
  not: 'kur: KURULUŞ DEĞİL — Hall\'ın \'as early as 1096\' ifadesi (Phayao devletinin varlığı için ALT SINIR). Hall konumu \'Raheng kuzeyi, Mepin-Mewang birleşimi\' diye verir (tutarsız); şehir koordinatı bugünkü Phayao kentidir (Coedès Phayao\'yu Ing nehri yukarısında anar). Hall (10672): Phayao 1411\'de \'once an independent T\'ai state\'.',
  kaynak: 'koordinat (çift tanık): OSM Nominatim node 367367305 (Phayao şehri) = 19.1668, 99.9021 · Wikidata Q1207122 (Phayao kasabası) P625 = 19.1652, 99.9036 (0,2 km); GeoNames 1151426 Phayao = 19.1920, 99.8788 (3,6 km).'
});

// ---------- YAMALAR ----------
const yama = [];
const ayrik = (f, t, d, kes, kay) => ({ f, t, d, kesinlik: kes, kaynak: kay });
const UFUK = 'UFUK SINIR İŞARETİ (0500-01-01): pencere başıdır, kuruluş değil. ';
const BOSLUKB = (neden) => 'BOŞLUK BEYANI: arandı, bulunamadı: ' + neden;

const ADBOSLUK = (ad) => `${ad}: 0500 öncesi/başlangıç için sahip tanığı yok`;

// Thaton
yama.push({
  ad: 'Thaton', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'pagan 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1057-01-01', 'thaton-mon', 'yil', J(UFUK, K('coedes', 'V-4', ['The tradition of the Mons places the center of their race at Sudhammavati (Thaton, at the mouth of the Sittang)']), K('hall', '7', ['Their principal centre in the latter country was Sudhammavati (Thaton) at the mouth of the River Sittang']), BEYAN('500-1057 arası Thaton için TARİHLİ tanık yok (Coedès: tek önemli arkeolojik kalıntı yok); Mon geleneği ve Hall \'principal centre\' ifadesi dayanak.'))),
    ayrik('1057-01-01', '1281-01-01', 'pagan', 'yil', J(K('coedes', 'IX-6', ["in 1057, after a three months' siege, he took the city of Thaton"]), K('hall', '6', ['the capture of the place and Makuta’s deportation to Pagan are historical facts']), 'Not: 1281 sonrası mevcut zincir: pagan 1281→1287, hanthawaddy 1287...'))
  ]
});
yama.push({
  ad: 'Moulmein (Mawlamyine)', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'pagan 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1057-01-01', 'thaton-mon', 'yil', J(UFUK, 'ABİ MERKEZ: Thaton — Hall: \'The Mons in Burma were mainly to the eastward of the Irrawaddy, and their settlements spread as far south as Tavoy\'', K('hall', '6', ['The Mons in Burma were mainly to the eastward of the Irrawaddy, and their settlements spread as far south as Tavoy']), K('hall', '7', ['Their principal centre in the latter country was Sudhammavati (Thaton) at the mouth of the River Sittang']), BEYAN('Moulmein/Martaban kıyısı Mon ülkesi içindedir, ama Moulmein adı kaynakta geçmez; zincir abi merkez Thaton\'dan devralındı (kaynak: "zincir Thaton\'dan devralındı").'))),
    ayrik('1057-01-01', '1281-01-01', 'pagan', 'yil', J('ABİ MERKEZ: Thaton — Coedès: Thaton\'un fethiyle bütün delta Pagan\'a teslim oldu; Hall: Anawrahta ve Sawlu Thaton\'un çok güneyine de ilerledi.', K('coedes', 'IX-6', ['The political result of the conquest of Thaton was the submission of the whole delta']), K('hall', '6', ['Anawrahta and his son, Sawlu, went on to conquer territories far to the south of Thaton']), BEYAN('zincir Thaton\'dan devralındı.')))
  ]
});
// Surabaya & Malang
const MEDANG_KAY = (ek) => J(K('coedes', 'VIII-3', ['for the first act of his successor Sindok ... is dated 929', 'The accession of Sindok marks the definitive transfer of the capital to the east, between the mountains Smeru and Wilis']), BEYAN(ek));
const KAH_KAY = (ek) => J(K('coedes', 'IX-4', ['in 1019 he was officially crowned with the title Sri Maharaja Rakai Halu', 'he established his residence in the east, at Kahuripan, the site of which has still not been identified']), ek && BEYAN(ek));
const KED_KAY = J(K('coedes', 'IX-4', ['Janggala lay to the east and must have included the region of Malang and the Brantas Delta with the ports of Surabaya, Rembang, and Pasuruhan', 'Janggala was soon absorbed by Panjalu']), SUV('\'The Kingdom of Kadiri\' bölümü, s. 278-280', ['the available evidence leads to the conclusion that the kingdom of Janggala did not last long']), BEYAN('Janggala payının Kadiri\'ye emilme yılı kaynakta yok; Majumdar artakalanı \'yarı bağımsız şefler\' sayar. Bölme yılı (1042) kesin değil (Coedès \'ölümünden önce\', Hall ≈1045).'));
const SING_KAY = K('coedes', 'XI-8', ['Kadiri consequently became an integral part of the kingdom of Tumapel', 'brought the former Janggala under his power']);
yama.push({
  ad: 'Surabaya', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'singhasari 1281-01-01',
  baslangic_eksik: '0500-01-01 → 0929-01-01 (Sindok öncesi Surabaya sahibi bu işçide yok)',
  s_onek: [
    ayrik('0929-01-01', '1016-01-01', 'medang', 'yil', MEDANG_KAY('Sindok başkenti Smeru-Wilis dağları arasına taşıdı; Surabaya adı geçmez, Brantas havzası krallığı olarak alındı.')),
    ayrik('1016-01-01', '1019-01-01', '__BOSLUK__', 'yil', BOSLUKB('1016 Pralaya\'dan 1019 taç giymeye dek Surabaya kıyısının sahibi (Coedès: Airlangga dağlarda keşiş yanında, krallık dağınık). ') + K('coedes', 'IX-4', ['the young Airlanga, then sixteen years old, took refuge among hermits']) ),
    ayrik('1019-01-01', '1042-01-01', 'kahuripan', 'yil', KAH_KAY()),
    ayrik('1042-01-01', '1222-01-01', 'kediri', 'yil', KED_KAY),
    ayrik('1222-01-01', '1281-01-01', 'singhasari', 'yil', SING_KAY)
  ]
});
yama.push({
  ad: 'Malang', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'singhasari 1281-01-01',
  baslangic_eksik: '0500-01-01 → 0929-01-01 (Sindok öncesi Malang sahibi bu işçide yok)',
  s_onek: [
    ayrik('0929-01-01', '1016-01-01', 'medang', 'yil', MEDANG_KAY('Sindok başkenti Smeru-Wilis dağları arasına taşıdı; Malang Semeru\'nun kuzeyidir ama kaynak adıyla anmaz.')),
    ayrik('1016-01-01', '1037-01-01', '__BOSLUK__', 'yil', BOSLUKB('1016 Pralaya\'dan Airlangga\'nın 1037\'de tahta oturmasına dek Malang bölgesinin sahibi: Coedès krallığın birçok rakip arasında bölündüğünü, Airlangga\'nın 1019\'da yalnız Surabaya-Pasuruan kuzey kıyısına hâkim olduğunu, 1028-29\'da fetihlere başladığını yazar. ') + K('coedes', 'IX-4', ['Airlanga began his campaigns in Java in 1028-29 with the aim of recovering his kingdom, divided among many competitors'])),
    ayrik('1037-01-01', '1042-01-01', 'kahuripan', 'yil', KAH_KAY('Malang adıyla anılan bir fetih tanığı yok; 1037 genişlemiş devletin doğu merkezi Kahuripan\'a yerleştiği yıl, Malang bölgesi Janggala payı (Coedès) ve Kahuripan\'a bağlı sayıldı.')),
    ayrik('1042-01-01', '1222-01-01', 'kediri', 'yil', KED_KAY),
    ayrik('1222-01-01', '1281-01-01', 'singhasari', 'yil', SING_KAY)
  ]
});
// Sukhothai & Suphan Buri
const KHM_KAY = (ek) => J(K('coedes', 'XII-5', ['the Khmers were dominant over this region at least from the time of Jayavarman VII and perhaps from the era of Suryavarman II']), BEYAN(ek));
yama.push({
  ad: 'Sukhothai', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'sukhothai 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1181-01-01', '__BOSLUK__', 'yil', J(UFUK, BOSLUKB('Sukhothai bölgesinin 500-1181 arası sahibi: Coedès Khmer kalıntılarının en geç Jayavarman VII\'den (1181), \'belki\' Suryavarman II\'den (1113) beri baskınlığını söyler; daha eski tanık yok (Hall, Coedès, Majumdar arandı). Dvaravati/Lavo bağı kaynakta bu şehir için gösterilmedi.'))),
    ayrik('1181-01-01', '1238-01-01', 'angkor-kmer', 'yil', KHM_KAY('Olay yılı yok; ALT SINIR Jayavarman VII saltanat başı (1181).')),
    ayrik('1238-01-01', '1281-01-01', 'sukhothai', 'yil', J(K('hall', '7', ['In 1238 two T’ai chiefs attacked and defeated the Khmer commander at Sukhot’ai']), K('coedes', 'XII-5', ['the two allies drove the Cambodian governor out of Sukhothai']), 'ÇELİŞKİ: Coedès tarihi ≈1220 hesaplar, Hall 1238; Hall alındı.'))
  ]
});
yama.push({
  ad: 'Suphan Buri', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'sukhothai 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1181-01-01', '__BOSLUK__', 'yil', J(UFUK, BOSLUKB('Suphan (Suphan Buri) için 1181 öncesi sahip tanığı: Coedès Dvaravati\'nin başkentinin Suphan bölgesinde olabileceğini çıkarır ama hiçbir tarihli kayıt vermez (V-4); Hall, Majumdar aranıp bulunamadı.'))),
    ayrik('1181-01-01', '1281-01-01', 'angkor-kmer', 'yil', J(K('coedes', 'XI-1', ['twenty-three statues named Jayabuddhamahanatha that have been preserved in many ... cities, among which are Lopburi, Suphan, Ratburi, Phetchaburi']), BEYAN('Heykel dikim yılı kaynakta yok; ALT SINIR 1181. DİKİŞ UYARISI: Rama Khamhaeng yazıtı (1292) Suphannaphum\'u fetihleri arasında sayar, Hall fetihleri 1283-87 arasına koyar (7) → mevcut zincirin \'sukhothai 1281\' başı en çok ~2-11 yıl erken olabilir; fetih günü kaynakta olmadığından 1281\'e dikildi.')))
  ]
});
// Chiang Rai
yama.push({
  ad: 'Chiang Rai', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'lan-na 1281-01-01',
  baslangic_eksik: '0500-01-01 → 1262-01-01 (şehir 1262\'de KURULDU: kur_oneri 1262-01-01; öncesi şehir yok)', kur_oneri: '1262-01-01',
  s_onek: [
    ayrik('1262-01-01', '1281-01-01', 'lan-na', 'yil', J(K('coedes', 'XII-5', ['The following year, moving his capital south, he founded Chiangrai']), 'Mangrai Ngoen Yang prenslerinin sonuncusudur; 1261\'de babasının yerine geçti (Coedès). Lan Na künyesi (atlas) f=1262 ile aynı yıl.'))
  ]
});
// Arakan
const ARK = J(K('hall', 'Ek I (Rulers of Arakan)', ['Launggyet dynasty, 17 kings, 1237-1433']), BEYAN('Kronik listesidir (yazıtla doğrulanmadı). Mrauk U şehri 1430\'da kurulur; Arakan merkez bölgesinin vekili olarak yazıldı.'));
const ARKB = J(UFUK, BOSLUKB('Arakan\'ın 500-1237 arası sahibi atlas kimliği olarak yok: Hall Candra hanedanını (Vesali, 4. yy ortası + 230 yıl) ve 8. yy ikinci hanedanını yazıtlardan, kroniklerin Dinnyawadi/Vesali/Pyinsa/Parin/Krit listelerini efsanevî ya da doğrulanamaz bulur; hiçbiri atlasta devlet künyesi değil (vesali-chandra ve dhanyawadi künyesiz).'));
yama.push({ ad: 'Mrauk U (Arakan)', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'arakan 1281-01-01', s_onek: [ayrik('0500-01-01', '1237-01-01', '__BOSLUK__', 'yil', ARKB), ayrik('1237-01-01', '1281-01-01', 'launggyet', 'yil', ARK)] });
yama.push({ ad: 'Sandoway (Thandwe)', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'arakan 1281-01-01', s_onek: [ayrik('0500-01-01', '1237-01-01', '__BOSLUK__', 'yil', ARKB), ayrik('1237-01-01', '1281-01-01', 'launggyet', 'yil', J('ABİ MERKEZ: Launggyet (Arakan merkezi) — ', ARK))] });
// Butuan
yama.push({
  ad: 'Butuan', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'filipin-racaliklari 1281-01-01',
  baslangic_eksik: '0500-01-01 → 1001-03-17 (kur_oneri: 1001-03-17 ilk yazılı tanık; öncesi için tarihli yazılı tanık bulunamadı)', kur_oneri: '1001-03-17',
  s_onek: [
    ayrik('1001-03-17', '1281-01-01', 'butuan', 'gun', J(K('scott', 's. 3, Ek I', ['come from Butuan on 17 March 1001', 'It has had mutual relations with Champa, but not much communication with China']), 'Butuan\'ın 1011\'den sonraki (1011-1281) sahibi için yeni elçilik tanığı bu oturumda okunmadı (Scott: Butuan 1420 Ağustos dilekçesi); polity butuan 1281 epok sınırına dek taşındı.', BEYAN('1011-1281 arası sürekliliği için doğrudan tanık yok; Butuan künyesi epok sınırı t=1281.')))
  ]
});
// Ternate & Tidore
const MOL = (ad) => J(UFUK, BOSLUKB(`${ad} için 1042 öncesi sahip tanığı: Hall Moluccas\'ın Kadiri dönemiyle birlikte siyasi-ticari önem kazanmaya başladığını yazar; öncesi için Hall, Coedès, Majumdar\'da tarihli tanık yok.`));
yama.push({
  ad: 'Ternate', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'ternate-sultanligi 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1042-01-01', '__BOSLUK__', 'yil', MOL('Ternate')),
    ayrik('1042-01-01', '1222-01-01', 'kediri', 'yil', J(K('hall', '4', ['Ternate was a vassal state of Kediri']), BEYAN('Vasallık yılı yok; Kadiri dönemi (1042-1222) sayıldı; Ternate künyesi (ms1) f=1257 bu oturumda kaynakta doğrulanamadı.'))),
    ayrik('1222-01-01', '1281-01-01', 'singhasari', 'yil', J(K('coedes', 'XI-8', ['Wu-nu-ku (the Moluccas)', 'the most recent seems to come after the fall of Kadiri']), 'Majumdar: Wu-nu-ku = Ternate (bölüm \'Suvarnadvipa\' liste notu).', BEYAN('Ternate\'nin Singhasari\'ye bağlılığı doğrudan yazılmaz; Chu-fan-chih Wu-nu-ku\'yu Cava krallığının bağlısı sayar. 1281 sonrası mevcut zincir ternate-sultanligi.')))
  ]
});
yama.push({
  ad: 'Tidore', koordinat: 'atlas mevcut kayıt (yeni koordinat yok)', mevcut_zincir_basi: 'tidore-sultanligi 1281-01-01',
  s_onek: [
    ayrik('0500-01-01', '1042-01-01', '__BOSLUK__', 'yil', MOL('Tidore')),
    ayrik('1042-01-01', '1222-01-01', 'kediri', 'yil', J('ABİ MERKEZ: Ternate/Moluccas grubu — ', K('hall', '4', ['Ternate was a vassal state of Kediri']), BEYAN('Tidore adı kaynakta yok; zincir Ternate\'den devralındı.'))),
    ayrik('1222-01-01', '1281-01-01', 'singhasari', 'yil', J('ABİ MERKEZ: Ternate/Moluccas grubu — ', K('coedes', 'XI-8', ['Wu-nu-ku (the Moluccas)', 'the most recent seems to come after the fall of Kadiri']), BEYAN('zincir Ternate\'den devralındı; Tidore adı yok.')))
  ]
});

// ---------- YAZIM ----------
function yaz(dosya, ad, veri) {
  const s = '// -*- coding: utf-8 -*-\n// gdasya3 — ' + ad + '\nwindow.' + ad + ' = ' + JSON.stringify(veri, null, 1) + ';\n';
  fs.writeFileSync(path.join(OUT, dosya), s, 'utf8');
}
for (const m of kron) { delete m.kesinlik_override; }
yaz('kunye_yeni.js', 'DOGU_KUNYE_GDASYA3', kunye);
yaz('kronoloji_cok_dogu_gdasya3.js', 'KRONOLOJI_COK_DOGU_GDASYA3', kron);
yaz('kronoloji_sinir_dogu_gdasya3.js', 'KRONOLOJI_SINIR_DOGU_GDASYA3', sinir);
yaz('yerlesimler_dogu_gdasya3.js', 'YERLESIMLER_DOGU_GDASYA3', yer);
yaz('yama_gdasya3.js', 'YAMA_DOGU_GDASYA3', yama);
const r = rapor();
console.log(JSON.stringify({ kunye: kunye.length, kron: kron.length, sinir: sinir.length, yer: yer.length, yama: yama.length, yamaDilim: yama.reduce((a, y) => a + y.s_onek.length, 0), alinti: r.parcaSay, dogru: r.dogru, kayip: r.kayip.length }));
for (const k of r.kayip) console.log('KAYIP', k);

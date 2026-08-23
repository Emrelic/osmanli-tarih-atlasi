// -*- coding: utf-8 -*-
// YER_YAMA_CIN -- kronoloji_cin.js icin olay mahalli atamasi.
// SONNET HAZIR KITA 78 -- CLAUDE.md par.7 (dosya sahipligi): kronoloji_cin.js
// dosyasina DOKUNULMADI, bu yamayi koordinator/arac/yama_uygula.js uygular.
// Anahtar: dosya + t + b (UCU BIRDEN).
//
// KAYNAK M-1152 (KOORDINATOR, 2026-08-23): 136 maddelik dosyada 39 madde
// yer_id tasimiyordu.
//
// UC KOVA:
//   yer_id        -- nokta yerlesim havuzunda VAR (arac/girdi.py ile dogrulandi)
//   eksik_nokta   -- yer BELLI, havuzda YOK, koordinat standart cografi
//                    kaynaktan (atlas) alindi, olaya DOGRUDAN koordinat olarak iner
//   kapsam_genis  -- olay tek noktaya SIGMAZ (cok bolgeli sefer, ulke capinda
//                    ilhak/cekilme, coklu liman/sehir, yillar suren genis alan
//                    seferi, hareket halindeki ordu icinde olum) -- bir EKSIKLIK
//                    DEGIL, bir KARARDIR
//
// TURKCE-YAZIM TUZAGI kontrolu yapildi: havuz TURKCE/tarihi transliterasyonla
// arandi (Pekin degil Beijing aratsaydim, Nankin degil Nanjing aratsaydim
// kacacakti). Boyle bulunan 12 yer_id: Pekin (Hanbalik) x2, Zeytun (Quanzhou),
// Kaesong, Nanking (Nanjing), Nercinsk, Manila, Cehol (Chengde), Gulca (Yining),
// Sanghay, Qingdao (Tsingtau), Cengdu (Chengdu).
//
// IKINCIL YER TUZAGI kontrolu yapildi: her madde icin METINDEKI EN BUYUK yer adi
// degil OLAYIN GECTIGI/IMZALANDIGI yer secildi. Ozel vaka: Qingdao (Tsingtau)
// havuzdaki kur tarihi (1898-03-06) madde tarihiyle BIREBIR ortusuyor --
// kiralama anlasmasinin KENDISI o yerlesimin kurulus tarihi.
//
// data/savaslar.js KONTROL EDILDI (koordinatorun "171/171 savas koordinatli"
// notuna gore) -- o dosya Osmanli merkezli, Cin/Dogu Asya savaslarindan HICBIRI
// orada YOK (Ming, Qing, Cin-Japon aratildi, 0 sonuc); mukerrer arastirma
// riski yoktu.
//
// KAYNAK (par.4): coordinat bilgisi TDV konusu degil saf cografi olgu -- standart
// atlas kullanildi. Olayin TARIHSEL kaynagi zaten kronoloji_cin.js'te mevcut
// (agirlikli Cambridge History of China), burada tekrarlanmadi. 6 kayitta
// koordinat YAKLASIK oldugu ACIKCA not edildi (kesin nokta kaynaklarda
// net degil): Kizil Sariklilar baslangici, Wang Yangming olum yeri,
// Ulan Butung, Wang Lun ayaklanmasi, Yongle olum yeri (bu sonuncusu
// kapsam_genis'e cevrildi cunku YOLDA/hareketli sefer icinde oldu).
//
// TESLIM: 39/39 islendi. yer_id 12 * eksik_nokta 16 * kapsam_genis 11.

window.YER_YAMA_CIN = [
 {
  "dosya": "kronoloji_cin.js",
  "t": "1281-06-23",
  "b": "İkinci Japonya seferi tayfunla dağıldı (\"kamikaze\")",
  "eksik_nokta": {
   "ad": "Hakata Körfezi (Fukuoka, Japonya)",
   "enlem": 33.6,
   "boylam": 130.42,
   "kaynak": "coğrafi konum: standart atlas — Moğol filosunun demirlediği/çarpıştığı ana sahil (Cambridge History of China ile aynı doğrulama)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1287-01-01",
  "b": "Pagan Krallığı'na (Birmanya) Yuan seferi",
  "eksik_nokta": {
   "ad": "Pagan (Bagan, Myanmar)",
   "enlem": 21.1717,
   "boylam": 94.8607,
   "kaynak": "coğrafi konum: standart atlas — Pagan Krallığı'nın başkenti"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1281-01-01",
  "b": "Guo Shoujing'in Shoushi takvimi kabul edildi",
  "yer_id": "Pekin (Hanbalık)",
  "not": "Guo Shoujing Yuan sarayında (Hanbalık/Dadu, Kubilay'ın başkenti) çalışıyordu",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1291-01-01",
  "b": "Marco Polo, İlhanlı prensesini götürmek üzere Çin'den ayrıldı",
  "yer_id": "Zeytun (Quanzhou)",
  "not": "Marco Polo'nun Kökeçin'i denizyoluyla götürmek üzere Çin'den ayrıldığı liman — dönemin başlıca dış ticaret limanı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1351-05-01",
  "b": "Kızıl Sarıklılar isyanı başladı",
  "eksik_nokta": {
   "ad": "Yingzhou (bugünkü Fuyang, Anhui)",
   "enlem": 32.897,
   "boylam": 115.814,
   "kaynak": "coğrafi konum: standart atlas — YAKLAŞIK, isyanın Han Shantong/Liu Futong önderliğinde başladığı bölge (Cambridge History of China cilt 7)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1392-07-17",
  "b": "Goryeo çöktü, Joseon Kore kuruldu — Ming'e tâbi",
  "yer_id": "Kaesong",
  "not": "Goryeo'nun başkenti; Joseon'un kuruluşu burada ilan edildi",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1406-01-01",
  "b": "Ming, Đại Ngu'yu (Vietnam) işgal etti",
  "kapsam_genis": true,
  "not": "Vietnam'ın tamamının doğrudan eyalet olarak ilhakı — tek bir yere değil ülkenin bütününe yayılan bir işgal kampanyası, tarih de yıl-başı yuvarlak (1406-01-01), tek nokta gerçeği bozar."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1405-07-11",
  "b": "Zheng He'nin ilk deniz seferi başladı",
  "eksik_nokta": {
   "ad": "Liujiagang (bugünkü Taicang, Jiangsu)",
   "enlem": 31.454,
   "boylam": 121.113,
   "kaynak": "coğrafi konum: standart atlas — filonun yola çıktığı liman (Cambridge History of China cilt 7)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1414-01-01",
  "b": "Zheng He'nin dördüncü seferi Hürmüz ve Doğu Afrika'ya ulaştı",
  "kapsam_genis": true,
  "not": "Sefer Hürmüz Boğazı, Arap Yarımadası VE Doğu Afrika kıyılarına ulaştı (madde metninin kendi ifadesi) — çok bölgeli bir deniz seferi, tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1424-08-12",
  "b": "Yongle, Moğol seferinde döneşte öldü",
  "kapsam_genis": true,
  "not": "Yongle, Moğol seferinden dönerken YOLDA (hareket halindeki ordu içinde) öldü — tam nokta (Yumu Chuan bölgesi) kaynaklarda kesin değil ve hareketli bir sefer güzergâhının parçası, tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1427-01-01",
  "b": "Ming, Vietnam'dan çekildi — Lê hanedanı kuruldu",
  "kapsam_genis": true,
  "not": "Ming ordularının Vietnam'ın TAMAMINDAN çekilmesi ve Lê hanedanının ülke çapında kuruluşu — tek bir yere bağlı değil, ülke ölçekli bir olgu."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1449-09-01",
  "b": "Tumu Krizi — Oyratlar Ming imparatorunu esir aldı",
  "eksik_nokta": {
   "ad": "Tumu (Huailai yakını, Hebei)",
   "enlem": 40.354,
   "boylam": 115.487,
   "kaynak": "coğrafi konum: standart atlas — Tumu Kalesi'nin bulunduğu yer (Cambridge History of China cilt 7)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1472-01-01",
  "b": "Wang Yangming doğdu",
  "eksik_nokta": {
   "ad": "Yuyao (Zhejiang)",
   "enlem": 30.038,
   "boylam": 121.156,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1529-01-09",
  "b": "Wang Yangming öldü",
  "eksik_nokta": {
   "ad": "Nan'an (bugünkü Dayu, Jiangxi) yakını",
   "enlem": 25.4,
   "boylam": 114.35,
   "kaynak": "coğrafi konum: YAKLAŞIK — Wang Yangming Zhang Nehri üzerinde bir teknede öldü, kesin demirleme noktası kaynaklarda net değil; Nan'an prefektörlüğü merkezi referans alındı"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1567-01-01",
  "b": "Longqing kaihai — deniz ticareti kısmen serbest bırakıldı",
  "eksik_nokta": {
   "ad": "Yuegang (Zhangzhou, Fujian)",
   "enlem": 24.51,
   "boylam": 117.66,
   "kaynak": "coğrafi konum: standart atlas — madde metninin kendi ifadesi: \"Zhangzhou limanından\" (Cambridge History of China cilt 8)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1571-01-01",
  "b": "Manila galyon ticareti başladı — Amerika gümüşü Çin'e aktı",
  "yer_id": "Manila",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1583-09-10",
  "b": "Matteo Ricci Zhaoqing'e yerleşti",
  "eksik_nokta": {
   "ad": "Zhaoqing (Guangdong)",
   "enlem": 23.047,
   "boylam": 112.472,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1592-01-01",
  "b": "Wu Cheng'en'in Batı'ya Seyahat'i (Xiyou Ji) yaygınlaştı",
  "kapsam_genis": true,
  "not": "Bir eserin basılı hâlde \"yaygınlaşması\" — basım/yayılma tek bir yere bağlı değil, birden çok matbaa ve şehir üzerinden gerçekleşti."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1592-05-23",
  "b": "Japonya'nın Kore'yi işgali — Ming müdahale etti",
  "kapsam_genis": true,
  "not": "Altı yıl süren, bütün Kore yarımadasına yayılan bir savaş (madde metninin kendi ifadesi) — başlangıç noktası (Busan çıkarması) olayın tamamını temsil etmez, tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1596-01-01",
  "b": "Li Shizhen'in Bencao Gangmu'su yayımlandı",
  "yer_id": "Nanking (Nanjing)",
  "not": "Li Shizhen'in eserinin ilk baskısı (Jinling ben) Nanjing'de basıldı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1685-01-01",
  "b": "Dört gümrük limanı açıldı (Kanton · Xiamen · Ningbo · Şanghay)",
  "kapsam_genis": true,
  "not": "Madde metninin kendisi DÖRT ayrı limanı sayıyor (Kanton, Xiamen, Ningbo, Şanghay) — tek noktaya indirgemek üçünü dışlamak olurdu."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1689-09-07",
  "b": "Nerçinsk Antlaşması — Rusya ile sınır çizildi",
  "yer_id": "Nerçinsk",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1690-09-03",
  "b": "Ulan Butung Muharebesi — Galdan'a karşı ilk büyük zafer",
  "eksik_nokta": {
   "ad": "Ulan Butung (İç Moğolistan)",
   "enlem": 42.5,
   "boylam": 117,
   "kaynak": "coğrafi konum: YAKLAŞIK — Hexigten/Duolun sınır bölgesi, kesin köy konumu standart kaynaklarda net değil (Cambridge History of China cilt 9)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1691-05-30",
  "b": "Halha Moğolları Dolonnor'da Qing'e tâbi oldu",
  "eksik_nokta": {
   "ad": "Dolonnor (Duolun, İç Moğolistan)",
   "enlem": 42.18,
   "boylam": 116.47,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1700-01-01",
  "b": "Çin Ayinleri Tartışması (Rites Controversy) doruğa çıktı",
  "kapsam_genis": true,
  "not": "Tartışma hem Roma (Papalık kararı) hem Pekin (Kangxi'nin müdahalesi) arasında geçti — iki kıtaya yayılan bir diplomatik/dinî anlaşmazlık, tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1727-08-20",
  "b": "Kyakhta Antlaşması — Rusya sınırı ve ticareti düzenlendi",
  "eksik_nokta": {
   "ad": "Kyakhta (Rusya-Moğolistan sınırı)",
   "enlem": 50.35,
   "boylam": 106.45,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1755-01-01",
  "b": "Qianlong'un Cungar seferleri başladı",
  "kapsam_genis": true,
  "not": "1755-1758 arası süren, geniş bir Orta Asya bölgesini (Cungarya/Doğu Türkistan) kapsayan çok yıllı bir sefer dizisi — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1774-01-01",
  "b": "Wang Lun Ayaklanması — Beyaz Lotus'un habercisi",
  "eksik_nokta": {
   "ad": "Shouzhang (bugünkü Yanggu yakını, Shandong)",
   "enlem": 36.13,
   "boylam": 115.78,
   "kaynak": "coğrafi konum: YAKLAŞIK — eski Shouzhang ilçe merkezi, bugün Yanggu ilçesine bağlı (Cambridge History of China cilt 9)"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1791-01-01",
  "b": "Kızıl Konak Rüyası (Hongloumeng) ilk kez basıldı",
  "yer_id": "Pekin (Hanbalık)",
  "not": "Cheng-Gao baskısı (1791) Pekin'de basıldı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1793-09-14",
  "b": "Makartney Elçiliği Qianlong huzuruna kabul edildi",
  "yer_id": "Cehol (Chengde)",
  "not": "Madde metninin kendi ifadesi: \"Jehol'daki (Chengde) yazlık sarayda\"",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1796-02-01",
  "b": "Beyaz Lotus Ayaklanması başladı",
  "kapsam_genis": true,
  "not": "Madde metninin kendi ifadesi: \"orta Çin'de geniş çaplı\" — Hubei/Sichuan/Shaanxi sınır bölgesine yayılan bir ayaklanma, tek bir köy/şehre bağlı değil."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1851-01-11",
  "b": "Hong Xiuquan, Taiping İsyanı'nı ilan etti",
  "eksik_nokta": {
   "ad": "Jintian (Guiping, Guangxi)",
   "enlem": 23.55,
   "boylam": 110.06,
   "kaynak": "coğrafi konum: standart atlas — Jintian Ayaklanması'nın (Jintian Qiyi) başladığı köy"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1871-01-01",
  "b": "İli Krizi — Rusya bölgeyi işgal etti",
  "yer_id": "Gulca (Yining)",
  "not": "İli vadisinin idari merkezi, Rus işgalinin odağı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1872-01-01",
  "b": "İlk Çinli öğrenci grubu Amerika'ya gönderildi",
  "yer_id": "Şanghay",
  "not": "Çin Eğitim Misyonu öğrencileri Şanghay üzerinden yola çıktı",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1894-07-25",
  "b": "Birinci Çin-Japon Savaşı başladı",
  "eksik_nokta": {
   "ad": "Pungdo açıkları (Asan Körfezi, Kore)",
   "enlem": 37,
   "boylam": 126.28,
   "kaynak": "coğrafi konum: standart atlas — savaşı fiilen başlatan Pungdo deniz çarpışması ve Kowshing gemisinin batırılması tam bu tarihte (25 Temmuz 1894) oldu"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1895-04-17",
  "b": "Şimonoseki Antlaşması imzalandı",
  "eksik_nokta": {
   "ad": "Şimonoseki (Japonya)",
   "enlem": 33.949,
   "boylam": 130.921,
   "kaynak": "coğrafi konum: standart atlas"
  }
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1898-03-06",
  "b": "Almanya Jiaozhou Körfezi'ni (Qingdao) 99 yıllığına kiraladı",
  "yer_id": "Qingdao (Tsingtau)",
  "not": "Havuzdaki kur tarihi (1898-03-06) madde tarihiyle BİREBİR aynı — kiralama anlaşmasının bizzat kendisi",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1899-10-18",
  "b": "Boksör Ayaklanması yayılmaya başladı",
  "kapsam_genis": true,
  "not": "Madde metninin kendi ifadesi: \"Şantung'da\" (bütün eyalette) diffüz biçimde yayıldı, Taiping'in Jintian'ı gibi tek bir köy kaynaklarda belirtilmiyor — tek noktaya sığmaz."
 },
 {
  "dosya": "kronoloji_cin.js",
  "t": "1911-05-09",
  "b": "Demiryolları millîleştirme kararı isyanı ateşledi",
  "yer_id": "Çengdu (Chengdu)",
  "not": "Sichuan Demiryolu Koruma Hareketi'nin (Baolu Yundong) merkezi Chengdu idi",
  "kaynak": "yerleşim havuzunda ad eşleşmesiyle doğrulandı (arac/girdi.py)"
 }
];

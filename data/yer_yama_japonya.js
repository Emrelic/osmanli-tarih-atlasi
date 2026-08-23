// JAPONYA OLAY MAHALLİ YAMASI — data/kronoloji_japonya.js için
//
// Oturum: GÜNEY ASYA KRONOLOJİ · tahta M-1156 · 23 Ağustos 2026
// AD ALANI: window.YER_YAMA_JAPONYA  (dosya adındaki ayırt edici parça
//           değişken adında da var — CLAUDE.md §7 son maddesi)
// Uygulayıcı: arac/yama_uygula.js.  Kronoloji dosyasına DOKUNULMADI.
//
// Anahtar: dosya + t + b (ÜÇÜ BİRDEN). `b` başlıkları elle yazılmadı,
// kronoloji dosyasından OKUNARAK üretildi — anahtar tutmama riski yok.
//
// ÜÇ KOVA:  yer_id (havuzda var) · eksik_nokta (yer belli, havuzda yok) ·
//           kapsam_genis (tek noktaya sığmaz)
// Bu partide kapsam_genis kararı ÇIKMADI: 23 maddenin 23'ünün de tek bir
// olay mahalli var. Dosyadaki 8 kapsam_genis maddesine DOKUNULMADI.

window.YER_YAMA_JAPONYA = [
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1543-08-25",
  "b": "Portekizliler Tanegaşima'ya ulaşıp ateşli silahı Japonya'ya tanıttı",
  "eksik_nokta": {
   "ad": "Tanegaşima (Nişinoomote)",
   "enlem": 30.73,
   "boylam": 131,
   "kaynak": "bulunamadı — TDV `japonya` maddesi Tanegaşima'yı anmıyor. Dayanak: George Sansom, A History of Japan II; adanın idarî merkezi Nişinoomote"
  },
  "not": "Portekizli tüccarlar Tanegaşima adasına çıktı; ada Kyuşu'nun güneyindedir, havuzdaki en yakın kayıt Kagoşima 130 km uzakta."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1571-10-01",
  "b": "Nobunaga, Enryaku-ji manastırını yakıp yıktı",
  "eksik_nokta": {
   "ad": "Enryaku-ji (Hiei Dağı)",
   "enlem": 35.07,
   "boylam": 135.84,
   "kaynak": "bulunamadı — dayanak: George Sansom, A History of Japan II"
  },
  "not": "Manastır Kyoto'nun kuzeydoğusundaki Hiei Dağı'ndadır (~10 km). Olay Kyoto'da değil manastırda geçti; şehir kaydına bağlamadım."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1575-06-28",
  "b": "Nagashino Savaşı: Nobunaga'nın tüfekli piyadesi Takeda süvarisini ezdi",
  "eksik_nokta": {
   "ad": "Nagaşino",
   "enlem": 34.92,
   "boylam": 137.56,
   "kaynak": "bulunamadı — dayanak: George Sansom, A History of Japan II; savaş alanı Nagaşino Kalesi (bugünkü Şinşiro, Aiçi)"
  },
  "not": "data/savaslar.js tarandı: Japonya savaşı YOK, mükerrer araştırma yapılmadı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1592-05-23",
  "b": "Hideyoshi Kore'yi işgal etti — Ming müdahale etti (Imjin Savaşı)",
  "yer_id": "Pusan",
  "kaynak": "Cambridge History of Japan IV — Hideyoşi ordusu 23 Mayıs 1592'de Pusan'a çıktı; havuzda kayıtlı (35,18 / 129,08)",
  "not": "Olay mahalli çıkarma yeridir. Savaşın tamamı Kore yarımadasına yayılır ama MADDE işgalin BAŞLAMASINI anlatıyor."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1598-09-18",
  "b": "Hideyoshi öldü, Kore'den çekilme başladı",
  "yer_id": "Kyoto",
  "kaynak": "George Sansom, A History of Japan II — Hideyoşi Fuşimi Kalesi'nde öldü; Fuşimi bugün Kyoto'nun bir semtidir",
  "not": "Başkent varsayımı DEĞİL: Fuşimi Kalesi fiilen Kyoto sınırları içindedir (~6 km)."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1600-10-21",
  "b": "Sekigahara Savaşı: Tokugawa Ieyasu üstünlüğü kesin olarak ele geçirdi",
  "eksik_nokta": {
   "ad": "Sekigahara",
   "enlem": 35.37,
   "boylam": 136.46,
   "kaynak": "bulunamadı — dayanak: George Sansom, A History of Japan II"
  },
  "not": "Havuzdaki en yakın kayıt Gifu, 28 km kuzeydoğuda. savaslar.js'te kayıt yok."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1637-12-17",
  "b": "Shimabara İsyanı patlak verdi",
  "eksik_nokta": {
   "ad": "Şimabara",
   "enlem": 32.79,
   "boylam": 130.37,
   "kaynak": "bulunamadı — dayanak: George Sansom, A History of Japan II"
  },
  "not": "İsyan Şimabara yarımadası ve Amakusa adalarında patladı; kuşatma Hara Kalesi'nde (32,63 / 130,26) bitti. Ayaklanmanın BAŞLADIĞI yer olarak Şimabara alındı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1798-01-01",
  "b": "Motoori Norinaga, \"Kojiki-den\"i tamamladı",
  "eksik_nokta": {
   "ad": "Matsusaka",
   "enlem": 34.58,
   "boylam": 136.53,
   "kaynak": "bulunamadı — dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "Motoori Norinaga ömrü boyunca Matsusaka'da (İse) yaşadı ve eserini orada tamamladı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1853-07-08",
  "b": "Komodor Perry'nin \"Kara Gemileri\" Uraga'ya demirledi",
  "eksik_nokta": {
   "ad": "Uraga",
   "enlem": 35.25,
   "boylam": 139.72,
   "kaynak": "bulunamadı — TDV `japonya` maddesi Perry'yi anıyor ama yer vermiyor ve tarihi 1854 diye yazıyor (ikinci geliş). Dayanak: W. G. Beasley, The Meiji Restoration"
  },
  "not": "Madde metni zaten Uraga diyor. Edo 48 km kuzeyde — körfezin ağzına demirlemek ile başkente girmek AYRI şeydir, Edo'ya bağlamadım."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1858-07-29",
  "b": "ABD ile \"eşitsiz\" Ansei Ticaret Antlaşması imzalandı",
  "eksik_nokta": {
   "ad": "Yokohama (Kanagava)",
   "enlem": 35.44,
   "boylam": 139.64,
   "kaynak": "bulunamadı — dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "İKİNCİL YER TUZAĞI: antlaşma Japonya'nın tamamını bağlıyor ama İMZA Kanagava açıklarında demirli USS Powhatan'da atıldı. İmza yeri alındı, devredilen imtiyazlar değil."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1872-10-04",
  "b": "Tomioka İpek Fabrikası açıldı",
  "eksik_nokta": {
   "ad": "Tomioka",
   "enlem": 36.25,
   "boylam": 138.89,
   "kaynak": "bulunamadı — dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "Fabrika Gunma vilâyetinde, Tokyo'nun 90 km kuzeybatısında. Başkente bağlamak yanlış olurdu."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1871-12-23",
  "b": "Iwakura Heyeti, Batı'yı incelemek üzere yola çıktı",
  "eksik_nokta": {
   "ad": "Yokohama (Kanagava)",
   "enlem": 35.44,
   "boylam": 139.64,
   "kaynak": "bulunamadı — dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "Heyet Yokohama limanından gemiyle yola çıktı. 1858 maddesiyle AYNI noktayı kullanıyorum — mükerrer nokta doğmasın."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1890-09-16",
  "b": "Ertuğrul Fırkateyni Kuşimoto açıklarında battı",
  "eksik_nokta": {
   "ad": "Kuşimoto (Oşima)",
   "enlem": 33.47,
   "boylam": 135.86,
   "kaynak": "japonya (TDV) — Ertuğrul'un Yokohama'ya varışını (7 Haziran 1890) verir, BATTIĞI yeri vermez. Batış yeri için dayanak: standart akademik kaynak (Selçuk Esenbel, Japonya-Osmanlı ilişkileri çalışmaları)"
  },
  "not": "TDV slugları `ertugrul-firkateyni` ve `ertugrul` ÖLÇÜLDÜ: ikisi de 302, madde YOK. Olay mahalli Yokohama DEĞİL — gemi dönüş yolunda Kii yarımadasının ucunda, Oşima açıklarında battı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1892-01-01",
  "b": "Yamada Torajirō, Ertuğrul yardım bağışlarını İstanbul'a götürdü",
  "yer_id": "İstanbul",
  "kaynak": "japonya (TDV): \"Gemiden kurtulanlarla birlikte İstanbul'a gelen Torajino Yamada ... İstanbul'da kaldı\"",
  "not": "Olay mahalli varışın olduğu yer. ⚠️ TDV Yamada'nın kurtulanlarla BİRLİKTE geldiğini söylüyor; madde metni ise bağışları AYRICA götürdüğünü yazıyor. Çerçeve farkı VAR ama yer_id değişmiyor — düzeltme kronoloji sahibinindir, ben dokunmadım."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1894-07-25",
  "b": "Birinci Çin-Japon Savaşı başladı",
  "eksik_nokta": {
   "ad": "Pungdo (Asan Körfezi)",
   "enlem": 37.05,
   "boylam": 126.42,
   "kaynak": "bulunamadı — dayanak: S. C. M. Paine, The Sino-Japanese War of 1894-1895 (Cambridge)"
  },
  "not": "Savaşın başladığı gün Pungdo deniz muharebesidir. Havuzdaki en yakın kayıt İnçon, 50 km kuzeydoğuda."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1895-04-17",
  "b": "Şimonoseki Antlaşması imzalandı — Tayvan Japonya'ya geçti",
  "eksik_nokta": {
   "ad": "Şimonoseki",
   "enlem": 33.96,
   "boylam": 130.94,
   "kaynak": "bulunamadı — TDV `simonoseki-antlasmasi` slug'ı ÖLÇÜLDÜ: 302, madde yok. Dayanak: S. C. M. Paine, a.g.e."
  },
  "not": "İKİNCİL YER TUZAĞI: madde başlığı Tayvan'ın devrini söylüyor; olay mahalli TAYVAN DEĞİL, imzanın atıldığı Şimonoseki'dir."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1902-01-30",
  "b": "İngiliz-Japon İttifakı imzalandı",
  "yer_id": "Londra",
  "kaynak": "bulunamadı (TDV) — dayanak: Marius B. Jansen, The Making of Modern Japan; ittifak Londra'da imzalandı. Havuzda kayıtlı (51,51 / -0,13)",
  "not": "Japonya maddesi ama olay mahalli Japonya'da değil."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1904-02-08",
  "b": "Rus-Japon Savaşı başladı",
  "yer_id": "Lüşun (Port Arthur)",
  "kaynak": "bulunamadı (TDV) — dayanak: Marius B. Jansen, a.g.e.; savaş Port Arthur baskınıyla başladı. Havuzda TÜRKÇE yazımla kayıtlı: \"Lüşun (Port Arthur)\" (38,81 / 121,22)",
  "not": "TÜRKÇE-YAZIM TUZAĞI: \"Port Arthur\" diye aramak yetmedi, havuzdaki kayıt \"Lüşun\" öneki taşıyor. Parça araması yapılmasa \"nokta yok\" hükmü YANLIŞ çıkacaktı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1905-09-05",
  "b": "Portsmouth Antlaşması Rus-Japon Savaşı'nı sona erdirdi",
  "eksik_nokta": {
   "ad": "Portsmouth (New Hampshire)",
   "enlem": 43.08,
   "boylam": -70.76,
   "kaynak": "bulunamadı — TDV `portsmouth-antlasmasi` ÖLÇÜLDÜ: 302. Dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "🔴 ATLAS PENCERESİNİN DIŞINDA (-70,76° B). İhlal değil, ama uçuş bu noktayı gösteremeyebilir — koordinatörün bilmesi gerek."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1910-08-29",
  "b": "Japonya Kore'yi ilhak etti",
  "yer_id": "Seul (Hanyang)",
  "kaynak": "bulunamadı (TDV `kore` slug'ı 302) — dayanak: Marius B. Jansen, a.g.e.; ilhak Seul'de ilân edildi. Havuzda kayıtlı (37,57 / 126,98)",
  "not": "İlhak antlaşması 22 Ağustos'ta imzalandı, 29 Ağustos'ta Seul'de resmen ilân edildi. Madde ilân gününü alıyor."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1911-02-21",
  "b": "ABD ile yeni antlaşmayla gümrük özerkliği geri kazanıldı",
  "eksik_nokta": {
   "ad": "Vaşington",
   "enlem": 38.9,
   "boylam": -77.04,
   "kaynak": "bulunamadı — dayanak: Marius B. Jansen, The Making of Modern Japan"
  },
  "not": "🔴 ATLAS PENCERESİNİN DIŞINDA (-77,04° B). Havuzda \"Vaşington\" da \"Washington\" da YOK — ikisi de arandı."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1914-08-23",
  "b": "Japonya, İtilaf Devletleri yanında I. Dünya Savaşı'na girdi",
  "yer_id": "Edo (Tokyo)",
  "kaynak": "bulunamadı (TDV) — dayanak: Marius B. Jansen, a.g.e.; savaş ilânı Tokyo'da yayımlandı. Havuzda \"Edo (Tokyo)\" olarak kayıtlı (35,69 / 139,69)",
  "not": "BAŞKENT VARSAYIMI DEĞİL: bir savaş ilânı hükûmet merkezinde yayımlanır ve fiilen orada yayımlandı. Qingdao kuşatması SONRA gelen ayrı bir olaydır."
 },
 {
  "dosya": "kronoloji_japonya.js",
  "t": "1919-01-18",
  "b": "Japonya, Paris Barış Konferansı'nda ırksal eşitlik önergesini sundu — reddedildi",
  "yer_id": "Paris",
  "kaynak": "bulunamadı (TDV) — dayanak: Marius B. Jansen, a.g.e. Havuzda kayıtlı (48,86 / 2,35)",
  "not": "⚠️ ÖLÇÜM NOTU: 18 Ocak 1919 konferansın AÇILIŞ günüdür; ırksal eşitlik önergesi 13 Şubat 1919'da sunuldu. Tarihi DEĞİŞTİRMEDİM (kronoloji dosyası benim değil), yalnız yer_id yazdım ve farkı bildiriyorum."
 }
];

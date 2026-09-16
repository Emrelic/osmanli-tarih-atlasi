// =====================================================================
// TÜRKİYE SINIR KRONOLOJİSİ — E / F / D sınır değişiklikleri (D1-TURKIYE · 16 Eylül 2026)
// =====================================================================
// window.KRONOLOJI_SINIR_TURKIYE — oturumlar/GERIYE-SARMA-0916.md ADIM 3.
// Biçim: data/kronoloji_almanya.js ile AYNI (oturumlar/KRONOLOJI-SARTNAME.md §3) + `taraflar`
// (ilgili İKİ devletin kimliği) + `hat` (data/d_sinirlar.js kayıt kimliği).
// index.html'e BAĞLANMADI — koordinatör bağlar.
//
// Kapsam: data/d_sinirlar.js'teki E ve D kayıtlarının BAŞLANGIÇLARI (G1: 1923 → 1918-11-11,
// ve G1 kayıtlarının 1918 öncesine uzanan başlangıçları). 1920-04-23 Osmanlı → TBMM kimlik
// geçişi bir SINIR DEĞİŞİKLİĞİ DEĞİLDİR, madde yazılmadı.
// Kaynak: IBS (ABD Dışişleri International Boundary Study) 28 · 29 · 41 · 49 · 163 tam metin;
// TDV kars · edirne · mudanya-mutarekesi · lozan-antlasmasi; M. Budak, ATAM Dergisi XIII/38 (1997).

window.KRONOLOJI_SINIR_TURKIYE = [

{ t:"1913-11-17", devlet:"osmanli", taraflar:["osmanli","kacar"], hat:"d1913-osm-ir-1",
  b:"İstanbul Protokolü — Türk-İran sınırının tahdidi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"İstanbul",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"Osmanlı ve İran temsilcileri İngiliz ve Rus elçileriyle birlikte, 1847 Erzurum Antlaşması'na dayanan Türk-İran sınırının tarifini imzaladı. Karma komisyon Ekim 1914'e kadar hattı Kotur çevresindeki yaklaşık 40 mil dışında yerinde işaretledi. 1923'teki Türkiye-İran sınırı bu hattır; 1932 ve 1937'de üç kesimde değişti.",
  kaynak:"IBS No. 28 Iran–Turkey (1964) s.5-7 · H. Efe–M. Kızıl, ERZSOSDE X-I (2017) s.77-90" },

{ t:"1915-09-06", devlet:"osmanli", taraflar:["osmanli","bulgaristan-kralligi"], hat:"d1915-osm-bg",
  b:"Sofya Sözleşmesi — Osmanlı-Bulgar sınırının düzeltilmesi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Sofya",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"Bulgaristan'ın savaşa Osmanlı yanında girmesi öncesinde imzalanan sözleşme, 1913 İstanbul Antlaşması'nın Osmanlı-Bulgar sınırını düzeltti. Hattın Doğu Trakya kesimi 1921'de Neuilly komisyonunca işaretlendi ve Lozan'da teyit edildi. Düzeltmenin Meriç ucundaki tam etkisi bu kayıtta ölçülmedi.",
  kaynak:"IBS No. 49 Bulgaria–Turkey (1965) s.10-12 — 'signed at Sofia, August 24 (September 6), 1915'" },

{ t:"1920-01-01", devlet:"yunanistan", taraflar:["yunanistan","bulgaristan-kralligi"], hat:"d1920-yunan-isgal-bg",
  b:"Doğu Trakya'nın Yunan işgali — Bulgar sınırında fiilî taraf değişti", tur:"isgal", onem:3, dunya:2, kapsam:"dis", yer_id:"Edirne",
  etiket:["isgal","sinir","konu-siyasi","konu-askeri"],
  d:"Temmuz 1920'de (gün bilinmiyor; tarih alanı yıl hassasiyetindedir) Yunan ordusu Edirne dahil Doğu Trakya'yı işgal etti. Hukukî Osmanlı-Bulgar hattı değişmedi, ama hattın Türk yakasında fiilen Yunan idaresi kuruldu. Sevr Antlaşması hiç yürürlüğe girmediği için bu durum hukukî değil fiilîdir. İşgal Mudanya Mütarekesi'yle sona erdi.",
  kaynak:"TDV edirne (M. Tayyib Gökbilgin): 'Temmuz 1920'de Yunan işgaline uğradı' — gün vermiyor" },

{ t:"1921-03-16", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","sovyet-rusya"], hat:"d1923-tr-sscb-gurcistan",
  b:"Moskova Antlaşması — Türk-Sovyet sınırının tahdidi", tur:"antlasma", onem:5, dunya:3, kapsam:"dis", yer_id:"Moskova",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"TBMM Hükûmeti ile Sovyet Rusya arasında imzalanan antlaşma Kars ve Ardahan'ı Türkiye'de, Batum'u Gürcistan'da bıraktı. Arpaçay ve Aras boyunca uzanan doğu sınırı bugünkü yerinde belirlendi; Nahçıvan'la temas da bu hatla doğdu. Hat 1925-26'da karma komisyonca işaretlendi.",
  kaynak:"TDV kars: 'Moskova (16 Mart 1921) ve Kars (13 Ekim 1921) antlaşmalarıyla yapılan son sınır tashihleri' · IBS No. 29 Turkey–U.S.S.R. (1964) s.4-6: 'The Treaty of Moscow (1921) delimited the boundary as it exists today'" },

{ t:"1921-10-13", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","sovyet-rusya"], hat:"d1923-tr-sscb-ermenistan",
  b:"Kars Antlaşması — doğu sınırının Kafkas cumhuriyetleriyle teyidi", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Kars",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"TBMM Hükûmeti, Sovyet Rusya'nın katılımıyla Ermenistan, Gürcistan ve Azerbaycan sovyet cumhuriyetleriyle Moskova Antlaşması'nın sınırını teyit eden antlaşmayı imzaladı. Kars bu antlaşmayla Türkiye sınırları içinde kaldı.",
  kaynak:"TDV kars · TDV agri: '16 Mart 1921 Moskova ve 13 Ekim 1921 Kars antlaşmalarıyla' · IBS No. 29 s.6" },

{ t:"1921-10-20", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","suriye-lubnan-mandasi"], hat:"d1923-tr-sy-dogu",
  b:"Ankara İtilafnamesi — Türkiye-Suriye sınırının tarifi", tur:"antlasma", onem:4, dunya:3, kapsam:"dis", yer_id:"Ankara",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"Fransa ile imzalanan itilafnamenin 8. maddesi sınırı Payas'ın hemen güneyinden Meydan-ı Ekbez'e, oradan Kilis'i Türkiye'de bırakarak Çobanbey istasyonuna çizdi. Hat Nusaybin'e kadar Bağdat demiryolunu, sonra Nusaybin-Cizre eski yolunu izliyordu; İskenderun Sancağı Suriye'de kaldı. Ayrıntılı tahdit 1926-1930 protokolleriyle yapıldı.",
  kaynak:"M. Budak, 'Ankara İtilafnâmesi Sürecinde Suriye Sınırı Üzerindeki Tartışmalar', Atatürk Araştırma Merkezi Dergisi XIII/38 (1997) s.405-406 · IBS No. 163 Syria–Turkey (1978) s.3-4" },

{ t:"1922-10-14", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","yunanistan"], hat:"d1922-mudanya-meric",
  b:"Mudanya ateşkes hattı Meriç'te yürürlüğe girdi — Yunan kuvvetleri Doğu Trakya'dan çekiliyor", tur:"antlasma", onem:4, dunya:2, kapsam:"dis", yer_id:"Mudanya",
  etiket:["antlasma","sinir","isgal","konu-siyasi","konu-askeri"],
  d:"11 Ekim'de imzalanan Mudanya Mütarekesi'ne Yunanistan 14 Ekim'de katıldı. Yunan kuvvetleri denizden Bulgar sınırına kadar Meriç'in öbür yakasına çekilecek, Doğu Trakya on beş günde boşaltılacaktı. Karaağaç dahil Meriç'in sağ kıyısı barışa kadar müttefik işgalinde kaldı. Böylece Türk-Yunan fiilî sınırı Meriç oldu.",
  kaynak:"TDV mudanya-mutarekesi (Cezmi Eraslan) md. 2, 3, 5 · IBS No. 41 Greece–Turkey (1964) s.4: 'signed the Mudania Armistice three days later on October 14, 1922'" },

{ t:"1923-07-24", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","yunanistan"], hat:"d1923-tr-gr-1",
  b:"Lozan Antlaşması — Türk-Yunan sınırı Meriç ve Karaağaç dirseğiyle belirlendi", tur:"antlasma", onem:5, dunya:4, kapsam:"dis", yer_id:"Lozan",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"Lozan'ın 2. maddesi Türk-Yunan sınırını Meriç mecrası olarak belirledi; Arda kavşağından Bosnaköy'ün aşağısına kadar Karaağaç'ı Türkiye'de bırakan bir kara hattı çizildi. Mudanya'nın fiilî hattı böylece hukukî sınıra dönüştü. Hat 1925-26'da karma komisyonca işaretlendi.",
  kaynak:"Lozan Antlaşması md. 2/2 (TTK tam metin) · TDV lozan-antlasmasi · IBS No. 41 s.2" },

{ t:"1923-07-24", devlet:"tbmm-turkiye", taraflar:["tbmm-turkiye","bulgaristan-kralligi"], hat:"d1923-tr-bg",
  b:"Lozan Antlaşması — Türk-Bulgar sınırının teyidi", tur:"antlasma", onem:3, dunya:2, kapsam:"dis", yer_id:"Lozan",
  etiket:["antlasma","sinir","konu-siyasi"],
  d:"Lozan'ın 2. maddesi Rezve ağzından Meriç'teki üçlü noktaya kadar Bulgaristan'ın o gün tahdit edilmiş güney sınırını Türkiye sınırı olarak kabul etti. Hat 1921'de işaretlenmişti; üçlü nokta 1926'da sabitlendi.",
  kaynak:"Lozan Antlaşması md. 2/1 (TTK tam metin): 'Bulgaristanın elyevm tahdit edilmiş olduğu şekilde cenup hududu' · IBS No. 49 s.10-12" }

];

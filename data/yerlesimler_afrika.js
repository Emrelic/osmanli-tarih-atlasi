// ============================================================================
// YERLEŞİM VERİ SETİ — OSMANLI AFRİKASI  (Oturum 14)
// ============================================================================
// data/yerlesimler.js ile AYNI ŞEMA. Ayrı dosya olmasının tek sebebi oturumlar
// arası dosya çakışmasını önlemektir; entegrasyon oturumu YERLESIMLER dizisiyle
// birleştirecektir. Alan sözlüğü: VERI-YAPISI.md.
//
// ---------------------------------------------------------------------------
// BU DOSYANIN SEBEBİ — ölçülmüş bir seyreklik
// ---------------------------------------------------------------------------
// Mısır 12, Tunus-Trablus kıyısı 8, Habeşistan 5, Somali 6 noktayla temsil
// ediliyordu; Anadolu 200, Balkanlar 198. İmparatorluğun en zengin eyaleti
// olan Mısır, Anadolu'nun on beşte biri çözünürlükteydi. Hepsi
// uret_petek.py'nin box(-12, 1.5, 62, 62) penceresinin İÇİNDE — yani eklenen
// her nokta ilk üretimde haritada görünür.
//
// ---------------------------------------------------------------------------
// ⚠️ TARİHLERİ SEÇME KURALI — Değişmez 2 (CLAUDE.md §3)
// ---------------------------------------------------------------------------
// Her d: ve v: dönem sınırı haritada bir KIRILMA'dır ve ±30 gün içinde bir
// kronoloji maddesi ister. Bu oturum olaylar*.js'e yazamaz. Bu yüzden yeni
// noktaların bütün d:/v: sınırları, MEVCUT verideki kırılma tarihlerine
// oturtuldu (Kahire 1517-02-15, Delta 1517-05-19, Yukarı Mısır 1517-04-13,
// Süveyş/Kızıldeniz 1517-01-22, Tunus 1574-08-25 / 1881-05-12, Trablus
// 1551-08-15 / 1912-10-18, Cezayir 1519-09-01 / 1552-01-01 ve Fransız işgal
// tarihleri, Habeş 1557-01-01 / 1885-02-05, Sudan 1821-01-04 / 1821-06-14 /
// 1821-08-19 / 1885-01-26 / 1899-01-19).
//
// Bunun bedeli aşağıda tek tek yazıldı: gerçek tarihi bu kümede karşılığı
// olmayan yedi yer, en yakın kapsanan tarihe YUVARLANDI (Mustagānim ve Cicel
// hariç — onlar gerçek tarihleriyle yazıldı ve ±30 gün içinde maddeleri var).
// Yuvarlananlar: Muaskar, Sîdî Bel Abbès, Nedrûme, Şelif, Tenes (1843-44 →
// 1844-03-04), Ağvât (1852-12-04 → 1854-12-02), Gardâye (1882 → 1854-12-02).
// Bu yedisi için kronoloji maddesi yazıldığında gerçek tarihlerine çekilmeli;
// listesi oturumlar/OTURUM-14-ILERLEME.md'de.
//
// s: → s: geçişleri (yabancıdan yabancıya) kırılma SAYILMAZ; Habeşistan,
// Somali ve Fas kayıtlarında gerçek tarihler serbestçe kullanıldı.
//
// ---------------------------------------------------------------------------
// ⚠️ SAHRA'YA NOKTA KONMADI
// ---------------------------------------------------------------------------
// Görev tanımı gereği çöl içine yeni nokta eklenmedi; mevcut 8 dolgu noktası
// (Sahra batısı, Hoggar, Tibesti, Fizan güneyi, Büyük Doğu Ergi, Batı çölü,
// Nûbe çölü, Sirte iç çölü) yerinde bırakıldı. Bu yüzden EKLENMEYEN, ama
// gerçekte Osmanlı kazası olan üç yer var — entegrasyon oturumuna bildirildi:
// Ğadâmis, Gât, Cağbûb (Senûsî merkezi). Sînâ'nın iç çölü de aynı sebeple
// boş bırakıldı: yalnız iki kıyı noktası (El-Arîş, Tûr) eklendi.
//
// ---------------------------------------------------------------------------
// ⚠️ KARA MASKESİNE OTURTULAN YEDİ KOORDİNAT
// ---------------------------------------------------------------------------
// Natural Earth 10m kara maskesi kıyı çizgisini basitleştirdiği için yedi
// kıyı noktası "denizde" çıktı; hepsi en yakın kara hücresine kaydırıldı.
// Kayma miktarı: Bürüllüs 0.5 km, Benzert 1.3, Halkulvâdî 1.0, Dellîs 0.6,
// Arkîko 0.5, Aseb 0.5, Bulhar 2.8 km. Bunlar konum hatası değil, maske
// çözünürlüğü düzeltmesidir; gerçek mevkiler eski değerlerdi.
//
// ---------------------------------------------------------------------------
// ⚠️ EKSİK DEVLET KİMLİKLERİ — bu dosya HİÇBİRİNİ eklemedi
// ---------------------------------------------------------------------------
// arac/renkler.py'de karşılığı olmayan siyasî yapılar, mevcut en yakın
// kimliğe emanet edildi. Tam liste ve gerekçeler OTURUM-14-ILERLEME.md'de.
// En önemlileri:
//   Darfur Sultanlığı  → nokta EKLENMEDİ (El-Fâşir yok; kimlik gelince eklenir)
//   Kaffa/Cimma/Vollayta (güney Habeşistan) → nokta EKLENMEDİ
//   Mecerteyn ve Hobyo sultanlıkları → "somali"
//   Avsa (Afar) sultanlığı → "adal"
// ============================================================================

window.YERLESIMLER_AFRIKA = [

// ===========================================================================
// 1) MISIR — Delta ve Aşağı Mısır
// ---------------------------------------------------------------------------
// Zincir: Memlûk → doğrudan Osmanlı → Kavalalı hanedanı (tâbi) → İngiliz
// himayesi. Delta ve Akdeniz kıyısı için Osmanlı devralma tarihi 1517-05-19
// (mevcut İskenderiye, Dimyat, Reşîd kayıtlarıyla aynı gün).
// ===========================================================================

{ ad:"Demenhûr (Damanhur)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:31.034, lon:30.470, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Dessûk", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:31.135, lon:30.647, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Kafrüşşeyh", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:31.112, lon:30.940, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Burullus gölünün kuzey kordonu; Delta'nın kuzey kıyısını Reşîd ile Dimyat
// arasında tutan tek nokta.
{ ad:"Bürüllüs (Baltîm)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.556, lon:31.090, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Tanta", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.786, lon:31.001, g:1, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Garbiye kâşifliğinin merkezi.
{ ad:"Mahalletülkübrâ", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.970, lon:31.168, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Menûfiye kâşifliğinin merkezi.
{ ad:"Şibînülkûm (Menûfiye)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.552, lon:31.011, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Kalyûbiye kâşifliğinin merkezi.
{ ad:"Benhâ (Kalyûbiye)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.466, lon:31.184, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Dakahliye kâşifliğinin merkezi.
{ ad:"Mansûre", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:31.038, lon:31.380, g:1, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Mît Gamr", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.718, lon:31.259, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Menzile", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:31.157, lon:31.937, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Şarkiye kâşifliğinin merkezi; Mısır'dan Suriye'ye giden ordu yolunun ilk
// menzili.
{ ad:"Bilbîs (Şarkiye)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.417, lon:31.567, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Fâkûs", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.729, lon:31.797, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Sînâ yolunun son Mısır menzili.
{ ad:"Sâlihiyye", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:30.793, lon:31.986, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// 1798 ve 1799 Ebûkîr muharebelerinin sahnesi.
{ ad:"Ebûkîr", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:31.317, lon:30.062, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Süveyş Kanalı şehirleri: kur: alanı motorca okunmuyor (MIMARI.md §3.1), ama
// kanaldan önce burada yerleşim yoktu; zaman dilimli Voronoi geldiğinde veri
// hazır olsun diye yazıldı. Dönem zincirleri Mısır'ın geneliyle aynı.
{ ad:"Portsaid", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.257, lon:32.284, g:0, k:4, m:"Kahire", kur:"1859-04-25",
  s:[{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[],
  v:[{f:"1859-04-25",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"İsmâiliye", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:30.588, lon:32.271, g:0, k:4, m:"Kahire", kur:"1863-04-27",
  s:[{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[],
  v:[{f:"1863-04-27",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Sînâ'nın kuzey kıyısı — Mısır ile Suriye arasındaki tek karayolu buradan
// geçer; Katye kervan ve hac yolu menzili, El-Arîş sınır kalesidir.
{ ad:"Katye", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:30.940, lon:32.633, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"El-Arîş", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:31.132, lon:33.798, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Marmarika kıyısı: İskenderiye ile Derne arasında 700 km boyunca hiç nokta
// yoktu, kıyı şeridi İskenderiye'nin peteğine emiliyordu.
{ ad:"Mersâ Matruh", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.353, lon:27.237, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Mısır-Trablusgarp sınırı; 1911 sınır düzenlemesinde Mısır'da kaldı.
{ ad:"Sellûm", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:31.545, lon:25.170, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// ===========================================================================
// 2) MISIR — Orta ve Yukarı Mısır (Nil vadisi)
// ---------------------------------------------------------------------------
// Osmanlı devralma tarihi 1517-04-13 (Tomanbay'ın idamı; mevcut Asyut ve
// Asvan kayıtlarıyla aynı gün).
// ===========================================================================

{ ad:"Atfîh", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:29.408, lon:31.257, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Benî Süveyf", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:29.074, lon:31.098, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Nil vadisinin batısındaki tek büyük vaha-ova; kendi noktası olmazsa Batı
// çölü dolgusuna ya da Kahire'ye emilir.
{ ad:"Feyyûm", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:29.309, lon:30.842, g:1, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Behnesâ", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:28.535, lon:30.650, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Minye", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:28.109, lon:30.750, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Mellevî", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:27.732, lon:30.841, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Deyrût", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:27.554, lon:30.809, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Tahtâ", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:26.768, lon:31.502, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Ahmîm", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:26.564, lon:31.745, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Osmanlı Yukarı Mısır'ının sancak merkezi (Circe sancağı).
{ ad:"Cirge (Girga)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:26.340, lon:31.891, g:1, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Ferşût", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:26.052, lon:32.158, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Kusayr limanı üzerinden Hicaz'a giden hac ve tahıl yolunun Nil ayağı.
{ ad:"Kına", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:26.164, lon:32.716, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Kûs", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:25.915, lon:32.760, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Uksur (Luksor)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:25.687, lon:32.640, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Esna", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:25.293, lon:32.554, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Edfû", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:24.978, lon:32.874, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Kûm Ombo", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"sehir", lat:24.476, lon:32.943, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// ===========================================================================
// 3) MISIR — Kızıldeniz kıyısı ve Sînâ
// ---------------------------------------------------------------------------
// Devralma tarihi 1517-01-22 (Ridâniye; mevcut Süveyş kaydıyla aynı gün).
// ===========================================================================

// Yukarı Mısır'ın Hicaz kapısı: Kına-Kusayr kervan yolu hac ve zahire
// nakliyesinin ana hattıydı.
{ ad:"Kusayr", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:26.104, lon:34.283, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-01-22",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Sefâce", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:26.733, lon:33.933, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-01-22",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Kusayr ile Halâib arasındaki 300 km'lik kıyı boşluğunu kapatır.
{ ad:"Ebû Ramâd (Şalâtîn)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:23.133, lon:35.600, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1517-01-22",t:"1557-01-01",d:"habesistan"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Sînâ'nın güney kıyısı: hac gemilerinin karantina ve su alma iskelesi.
// Yarımadanın İÇ çölüne nokta konmadı; mevcut "Sina güneyi" dolgusu kasten
// sahipsiz kalmaya devam ediyor.
{ ad:"Tûr (Sînâ)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"liman", lat:28.241, lon:33.623, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-01-22",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// Nûbe: İbrim kâşifliğinin güney ucu. Zincir mevcut İbrim kaydıyla birebir
// (Özdemir Paşa'nın Nûbe harekâtı, 1555). Mehdî isyanı sırasında Vâdî Halfâ
// Mısır elinde kaldı — Sudan zinciri DEĞİL, Mısır zinciri yazıldı.
{ ad:"Vâdî Halfâ", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"kale", lat:21.802, lon:31.352, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03",y:"kusatma"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// ===========================================================================
// 4) TUNUS EYALETİ
// ---------------------------------------------------------------------------
// Zincir: Hafsî → 1574-08-25 Osmanlı → 1881-05-12 Fransız himayesi.
// ⚠️ 1705'ten sonra fiilen Hüseynî hanedanının özerk idaresidir; mevcut
// verideki Tunus, Kayrevan, Gabes vb. kayıtları gibi bu dosyada da DOĞRUDAN
// (d:) yazıldı. Ocaklık ayrımı hepsine birlikte uygulanacak (görev tanımı).
// ===========================================================================

{ ad:"Benzert (Bizerte)", tur:"liman", lat:37.276, lon:9.858, g:1, k:3, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Tunus'un liman kalesi; 1535-1574 arası İspanyol garnizonu buradaydı.
{ ad:"Halkulvâdî", tur:"kale", lat:36.823, lon:10.295, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1535-07-21",d:"hafsi"},{f:"1535-07-21",t:"1574-08-25",d:"ispanya",enklav:true},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Mâtir (Mateur)", tur:"sehir", lat:37.040, lon:9.664, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// 1540-1741 arası Cenevizli Lomellini ailesinin mercan imtiyazıyla elinde
// tuttuğu ada-kale. Bu ara dönem VERİYE YAZILMADI: 1741 devralması için
// kronoloji maddesi yok, yazılsaydı Değişmez 2'yi açardı.
{ ad:"Tabarka", tur:"kale", lat:36.954, lon:8.758, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1544-01-01",d:"hafsi"},{f:"1544-01-01",t:"1741-06-12",d:"ceneviz"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[], v:[{f:"1741-06-12", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Bâce (Béja)", tur:"sehir", lat:36.733, lon:9.183, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Cendûbe", tur:"sehir", lat:36.501, lon:8.780, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Cezayir eyaletiyle sınır bölgesinin merkezi.
{ ad:"Kef", tur:"kale", lat:36.174, lon:8.705, g:0, k:3, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Nâbil (Nabeul)", tur:"sehir", lat:36.451, lon:10.735, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Kelîbiye burnu — Sicilya Boğazı'nın Afrika yakasındaki gözcü kalesi.
{ ad:"Kelîbiye", tur:"kale", lat:36.849, lon:11.094, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Zağvân", tur:"sehir", lat:36.402, lon:10.143, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Sûse", tur:"liman", lat:35.826, lon:10.638, g:1, k:3, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Munastır", tur:"kale", lat:35.778, lon:10.826, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Mehdiye", tur:"liman", lat:35.505, lon:11.062, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Kasrayn", tur:"sehir", lat:35.167, lon:8.836, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Kafsa", tur:"sehir", lat:34.425, lon:8.784, g:0, k:3, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Cerîd vahaları: Tunus eyaletinin çöl kapısı. Bunlar Sahra'nın İÇİ değil,
// şattların kuzey kıyısındaki hurmalık kasabalardır.
{ ad:"Tozer", tur:"sehir", lat:33.920, lon:8.134, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Nefta", tur:"sehir", lat:33.873, lon:7.878, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Medenîn", tur:"sehir", lat:33.354, lon:10.505, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Tatavin", tur:"sehir", lat:32.930, lon:10.451, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

{ ad:"Cerciş (Zarzis)", tur:"liman", lat:33.504, lon:11.112, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// Trablusgarp eyaletiyle sınır kasabası.
{ ad:"Bin Gerdân", tur:"sehir", lat:33.138, lon:11.220, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1574-08-25",d:"hafsi"},{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1574-08-25", t:"1705-07-17"}], v:[{f:"1705-07-17", t:"1881-05-12", k:"Tunus Ocaklığı (Hüseynîler)"}] },

// ===========================================================================
// 5) TRABLUSGARP EYALETİ (Trablus, Cebel, Sirte, Bingazi)
// ---------------------------------------------------------------------------
// Zincir: Hafsî → 1551-08-15 Turgut Reis ve Sinan Paşa'nın fethi → 1912-10-18
// İtalya (Uşi Antlaşması). Mevcut Misrata ve Derne kayıtlarıyla aynı günler.
// ⚠️ 1711-1835 arası Karamanlı hanedanının fiilî özerkliği veriye YAZILMADI —
// mevcut Trablus, Bingazi, Derne kayıtları gibi doğrudan bırakıldı.
// ===========================================================================

{ ad:"Zâviye", tur:"sehir", lat:32.757, lon:12.728, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Zuvâre", tur:"liman", lat:32.931, lon:12.082, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Cebelinefûse: Trablus'un güneyindeki dağ sırasının İbâzî kasabaları.
{ ad:"Nâlût", tur:"sehir", lat:31.868, lon:10.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Yefren", tur:"sehir", lat:32.063, lon:12.529, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Garyân", tur:"sehir", lat:32.172, lon:13.020, g:0, k:3, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Trablus ile Fizan arasındaki kervan yolunun ilk büyük menzili.
{ ad:"Mızde", tur:"sehir", lat:31.450, lon:12.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Hums (Lebde)", tur:"liman", lat:32.649, lon:14.262, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Zilten", tur:"sehir", lat:32.467, lon:14.568, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Benî Velîd", tur:"sehir", lat:31.746, lon:13.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Sirte körfezi: Misrata ile Bingazi arasında 600 km boyunca hiç nokta yoktu.
{ ad:"Sirte", tur:"liman", lat:31.205, lon:16.589, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Ecdâbiye", tur:"sehir", lat:30.755, lon:20.225, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Cebeliahdar (Yeşil Dağ): Bingazi ile Derne arasındaki verimli yayla.
{ ad:"Merc", tur:"sehir", lat:32.492, lon:20.833, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Beyzâ (Kirene)", tur:"sehir", lat:32.827, lon:21.858, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Derne ile Sellûm arasındaki tek liman; Mısır sınırına en yakın Osmanlı
// noktası.
{ ad:"Tobruk", tur:"liman", lat:32.077, lon:23.971, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15", t:"1711-03-01"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-03-01", t:"1835-05-26", k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// ===========================================================================
// 6) CEZAYİR EYALETİ
// ---------------------------------------------------------------------------
// Zincir: Zeyyânî → Osmanlı → Fransız işgali. Mevcut veri iki devralma tarihi
// kullanıyor: 1519-09-01 (Hayreddin Paşa'nın eyaleti Bâbıâli'ye bağlaması —
// merkez ve doğu) ve 1552-01-01 (batı ve Sahra kapısı, Tilimsan/Biskra/
// Tuggurt ile aynı). Yeni noktalar bu ikisine dağıtıldı.
// ⚠️ 1671'den sonra fiilen dayı idaresidir; mevcut kayıtlar gibi doğrudan
// (d:) bırakıldı.
// ⚠️ Fransız işgal tarihleri: beşi mevcut kırılmalara YUVARLANDI, ikisi
// (Mustagānim 1833-07-28, Cicel 1839-05-13) gerçek tarihiyle yazıldı çünkü
// ±30 gün içinde kronoloji maddesi var (Hünkâr İskelesi, Fırat geçişi).
// ===========================================================================

{ ad:"Blida", tur:"sehir", lat:36.470, lon:2.829, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"}] },

{ ad:"Miliana", tur:"sehir", lat:36.305, lon:2.229, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"}] },

{ ad:"Dellîs", tur:"liman", lat:36.908, lon:3.914, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Gerçek işgal 1843 (Ténès) — 1844-03-04'e yuvarlandı.
{ ad:"Tenes", tur:"liman", lat:36.507, lon:1.307, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1843-01-01",d:"abdulkadir"},{f:"1843-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Gerçek işgal 1843 (Şelif vadisi) — 1844-03-04'e yuvarlandı.
{ ad:"Şelif", tur:"sehir", lat:36.165, lon:1.334, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1843-01-01",d:"abdulkadir"},{f:"1843-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// General Desmichels 28 Temmuz 1833'te girdi; Hünkâr İskelesi maddesine 20 gün.
{ ad:"Mustagānim", tur:"liman", lat:35.931, lon:0.089, g:0, k:3, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1833-07-28",d:"abdulkadir"},{f:"1833-07-28",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Abdülkādir el-Cezâirî'nin ilk merkezi. Gerçek düşüş 1841-05 — 1844-03-04'e
// yuvarlandı.
{ ad:"Muaskar", tur:"sehir", lat:35.396, lon:0.140, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1841-01-01",d:"abdulkadir"},{f:"1841-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

{ ad:"Sîdî Bel Abbès", tur:"sehir", lat:35.194, lon:-0.641, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1843-06-12",d:"abdulkadir"},{f:"1843-06-12",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

{ ad:"Ayn Temûşent", tur:"sehir", lat:35.298, lon:-1.140, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Fas sınırına en yakın Osmanlı kasabası; iki devlet arasındaki sınır burada
// tanımlanır.
{ ad:"Nedrûme", tur:"sehir", lat:35.010, lon:-1.747, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-01-01",d:"abdulkadir"},{f:"1844-01-01",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Fransızlar 13 Mayıs 1839'da girdi; Fırat geçişi maddesine 22 gün.
{ ad:"Cicel", tur:"liman", lat:36.821, lon:5.766, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1839-05-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1839-05-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Kolo", tur:"liman", lat:37.000, lon:6.564, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1838-10-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Sikikde", tur:"liman", lat:36.876, lon:6.909, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1838-10-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Mîle", tur:"sehir", lat:36.450, lon:6.264, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1837-10-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1837-10-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Kalme (Guelma)", tur:"sehir", lat:36.462, lon:7.426, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1837-10-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1837-10-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Sûk Ahrâs", tur:"sehir", lat:36.286, lon:7.951, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1844-03-04", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Tebesse", tur:"sehir", lat:35.404, lon:8.124, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1844-03-04", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Batna", tur:"sehir", lat:35.556, lon:6.178, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1844-03-04", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Berc Bû Areric", tur:"sehir", lat:36.073, lon:4.761, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1838-10-13", k:"Ahmed Bey'in Konstantin beyliği"}] },

{ ad:"Mesîle", tur:"sehir", lat:35.705, lon:4.542, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

{ ad:"Bû Sa'âde", tur:"sehir", lat:35.212, lon:4.177, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1832-11-22", k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)"}] },

// Sahra'nın kuzey eşiğindeki iki vaha kasabası. Gerçek düşüşleri 1852-12-04
// (Ağvât) ve 1882 (Mîzâb) — ikisi de Tuggurt kırılmasına (1854-12-02)
// yuvarlandı; başka kapsanan tarih yok.
{ ad:"Ağvât", tur:"sehir", lat:33.800, lon:2.865, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1852-12-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1852-12-04", k:"Sahra vahalarının özerk idaresi"}] },

{ ad:"Gardâye", tur:"sehir", lat:32.490, lon:3.673, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1852-12-04",t:"1923-10-29",d:"fransa-cumhuriyet"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01", t:"1830-07-05", k:"Cezayir Ocaklığı (dayı idaresi)"},{f:"1830-07-05", t:"1852-12-04", k:"Sahra vahalarının özerk idaresi"}] },

// ===========================================================================
// 7) HABEŞ EYALETİ ve KIZILDENİZ'İN BATI KIYISI
// ---------------------------------------------------------------------------
// 1557'de Özdemir Paşa tarafından kuruldu (Sevâkin, Masavva, Arkîko). Zincir
// mevcut Sevâkin/Masavva kayıtlarıyla aynı: Memlûk → 1557-01-01 Osmanlı →
// 1885-02-05 İtalya (güney) / İngiltere (kuzey).
// ⚠️ İÇ HABEŞİSTAN HİÇBİR ZAMAN OSMANLI OLMADI — aşağıdaki bölüm 8'de ayrı
// yazıldı ve "habesistan" kimliğiyle boyanır. Kıyı ile içeri karıştırılmadı.
// ===========================================================================

// Masavva'nın karşı kıyısındaki liman; Habeş Eyaleti'nin üçüncü kurucu
// noktası (Bahrinegus'un merkezi).
{ ad:"Arkîko", tur:"liman", lat:15.548, lon:39.449, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"italya"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

// Mısır ile Sevâkin arasındaki kıyı; 1899 Anglo-Mısır sınırında Sudan'da
// kaldı.
{ ad:"Halâib", tur:"liman", lat:22.219, lon:36.647, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

{ ad:"Akīk", tur:"liman", lat:18.230, lon:38.200, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

// Sevâkin'in iç ardalanı (Bece ülkesi). 1883-1891 arası fiilen Mehdî
// kuvvetlerinin elindeydi; bu ara dönem yazılmadı, Sevâkin zinciri korundu.
{ ad:"Tokar", tur:"sehir", lat:18.427, lon:37.729, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1884-01-01",t:"1891-02-06",d:"mehdi",enklav:true},{f:"1891-02-06",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1884-01-01"}] },

{ ad:"Sinkat", tur:"sehir", lat:18.833, lon:36.833, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

// ===========================================================================
// 8) HABEŞİSTAN İMPARATORLUĞU — iç yayla
// ---------------------------------------------------------------------------
// Hiçbiri Osmanlı olmadı; hepsi "habesistan". Kendi noktaları olmazsa
// Masavva ve Sevâkin'in petekleri yaylaya taşar ve Habeşistan'ın kalbi
// Osmanlı boyanır (MIMARI.md §2 emilmesi).
// ⚠️ GÜNEY HABEŞİSTAN'A NOKTA KONMADI: Kaffa, Cimma, Vollayta, Sidamo 1890'lara
// kadar bağımsız krallıklardı, kimlikleri yok. "habesistan" yazmak yanlış
// olurdu; boş bırakıldı ve entegrasyon oturumuna bildirildi.
// ===========================================================================

{ ad:"Aksum", tur:"sehir", lat:14.128, lon:38.723, g:1, k:1,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Adua", tur:"sehir", lat:14.170, lon:38.898, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Şire", tur:"sehir", lat:14.103, lon:38.283, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Adigrat", tur:"sehir", lat:14.277, lon:39.462, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Mekelle", tur:"sehir", lat:13.497, lon:39.475, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Bogos: 1872-1884 arası Mısır (Kavalalı) işgalindeydi; bu ara dönem
// yazılmadı — kronoloji maddesi yok.
{ ad:"Kerene", tur:"sehir", lat:15.778, lon:38.451, g:0, k:0,
  s:[{f:"1281-01-01",t:"1872-01-01",d:"habesistan"},{f:"1884-06-03",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1923-10-29",d:"italya"}],
  d:[], v:[{f:"1872-01-01",t:"1884-06-03",k:"Mısır (Kavalalı)"}] },

{ ad:"Lalibela", tur:"sehir", lat:12.032, lon:39.047, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Sokota", tur:"sehir", lat:12.628, lon:39.033, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Zemene Mesafint (prensler devri) boyunca imparatorluk merkezi.
{ ad:"Debre Tabor", tur:"sehir", lat:11.855, lon:38.017, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Bahır Dar", tur:"sehir", lat:11.560, lon:37.400, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Sudan sınırındaki geçit; 1889 Mehdî-Habeş savaşının sahnesi.
{ ad:"Metemma", tur:"kale", lat:12.968, lon:36.155, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Dese", tur:"sehir", lat:11.133, lon:39.633, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Debre Berhan", tur:"sehir", lat:9.680, lon:39.532, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Şeva krallığının merkezi; Menelik buradan çıktı.
{ ad:"Ankober", tur:"sehir", lat:9.583, lon:39.733, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// Harar'ın doğusu; mevcut Harar kaydıyla aynı gün Habeşistan'a geçti.
{ ad:"Cîcîga", tur:"sehir", lat:9.350, lon:42.800, g:0, k:0,
  s:[{f:"1281-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1923-10-29",d:"habesistan"}], d:[] },

// Afar (Danâkil) kıyısı. Avsa sultanlığının kimliği yok, "adal" ile boyandı.
// Aseb: Rubattino şirketinin hakları 10 Mart 1882'de İtalyan devletine
// devredildi — koloninin resmî başlangıcı budur.
{ ad:"Aseb", tur:"liman", lat:13.009, lon:42.735, g:0, k:2,
  s:[{f:"1281-01-01",t:"1882-03-10",d:"adal"},{f:"1882-03-10",t:"1923-10-29",d:"italya",enklav:true}], d:[] },

// Fransız himayesi 1884'te kuruldu; GÜN DOĞRULANAMADI, bu yüzden proje
// kuralına göre YYYY-01-01 yazıldı (mevcut Zeyla kaydıyla aynı desen).
{ ad:"Tacûra", tur:"liman", lat:11.788, lon:42.882, g:0, k:0,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1923-10-29",d:"fransa-cumhuriyet",enklav:true}], d:[] },

// ===========================================================================
// 9) SOMALİ KIYISI
// ---------------------------------------------------------------------------
// Hiçbiri Osmanlı değildir. Zincir mevcut Berbera ve Mogadişu kayıtlarını
// izler: Adal → 1577-01-01 yerel sultanlıklar ("somali") → sömürge idaresi.
// ⚠️ Mecerteyn (Bosaso-Alula-Hafun) ve Hobyo sultanlıklarının ayrı kimliği
// yok; ikisi de "somali" ile boyandı.
// ⚠️ Barava (1.11°K) ve Kısmâyû (0.36°K) EKLENMEDİ — box(-12, 1.5, 62, 62)
// penceresinin güney sınırı 1.5°K, ikisi de dışarıda kalıyor.
// ===========================================================================

{ ad:"Merka", tur:"liman", lat:1.716, lon:44.772, g:0, k:0,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Beledveyne", tur:"sehir", lat:4.735, lon:45.204, g:0, k:0,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

{ ad:"Baydoa", tur:"sehir", lat:3.114, lon:43.649, g:0, k:0,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },

// Hobyo (Obbiya) sultanlığı İtalyan himayesini Aralık 1888'de kabul etti —
// Mecerteyn'den (7 Nisan 1889) birkaç ay önce. Gün bilinmediği için ayın
// 1'i yazıldı.
// 🔴 YEDİ KAYITTAN `italya` DÖNEMİ KALDIRILDI (31 Temmuz). Sebebi 39 yıllık
// çelişkiydi: veri 1888/1889'da İtalyan sahipliği başlatıyordu, TDV `somali` ise
// *"Mâcerteyn ve Obbia emirliklerine ait topraklar ise **1927'de** İtalyanlar
// tarafından işgal edildi"* diyor — atlasın ufkunun (1923-10-29) DÖRT YIL ötesi.
// 1889 antlaşmaları kâğıt üzerinde himaye kurdu, fiilî işgal olmadı.
//
// Üç ayrı TDV desteği: emirlikler işgal ânına kadar "hüküm süren" · Mâcerteyn
// "XIX. yüzyılda bağımsız hale geldi" · `muhammed-b-abdullah-hasan` 1903'te
// "Obbia'nın iç kesimlerinde" çarpışıldığını söylüyor (İtalyan idaresi olsa
// orada savaşılmazdı).
//
// ⚠️ `v:` (tâbi) YAZILMADI, bilerek: `v:` bir tâbiiyet İDDİASIDIR ve dayandığı
// 1889 himaye antlaşmalarından TDV hiçbir maddede söz etmiyor. Desteklediği tek
// şey bağımsızlık.
// ⚠️ Yeni kimlik de EKLENMEDİ (`obbia`/`macerteyn`): eklenseydi `somali → obbia`
// yine bir kırılma olurdu, yani yedi madde borcu geri gelirdi — (c)'yi cazip
// kılan faydanın tamamı kimlik EKLEMEMEYE bağlıydı. Üstelik geçişi 1888/1889'a
// koymak, "o gün toprak el değiştirdi" anlamını reddettikten sonra arka kapıdan
// geri sokardı. İkisi dizin kaydı olarak `devletler.js`'e girecek (Oturum 3),
// `harita:"somali"` ile aynı renge bağlı — palet hiç büyümez.
// ⇒ Değişmez 2s açığı yedi eksiliyor, MADDE YAZMADAN.
{ ad:"Obbiya", tur:"liman", lat:5.351, lon:48.527, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Galkayo", tur:"sehir", lat:6.770, lon:47.431, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Garove", tur:"sehir", lat:8.406, lon:48.483, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Ayl", tur:"liman", lat:7.980, lon:49.816, g:0, k:0,
  s:[{f:"1281-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// Mecerteyn sultanlığının merkezi ve Afrika Boynuzu'nun ucu.
{ ad:"Bender Kāsım (Bosaso)", tur:"liman", lat:11.284, lon:49.183, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Alula", tur:"liman", lat:11.968, lon:50.750, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

{ ad:"Hafun", tur:"liman", lat:10.437, lon:51.259, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1923-10-29",d:"somali"}], d:[] },

// Kuzeybatı kıyısı ve ardalanı: mevcut Berbera kaydıyla aynı zincir
// (1884-07-18 İngiliz himaye antlaşmaları).
{ ad:"Bulhar", tur:"liman", lat:10.401, lon:44.458, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Hargeysa", tur:"sehir", lat:9.560, lon:44.065, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Burao", tur:"sehir", lat:9.522, lon:45.534, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Lasanod", tur:"sehir", lat:8.477, lon:47.361, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

{ ad:"Erigavo", tur:"sehir", lat:10.616, lon:47.368, g:0, k:0,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1923-10-29",d:"ingiltere"}], d:[] },

// ===========================================================================
// 10) SUDAN ve NÛBE
// ---------------------------------------------------------------------------
// Zincir mevcut Hartum, Sennâr, Dongola, Kordofan kayıtlarıyla birebir:
// Nûbe krallıkları → 1504-01-01 Func (Sennâr) Sultanlığı → 1821 Kavalalı
// Mısır'ının fethi (tâbi) → 1885-01-26 Mehdî Devleti → 1899-01-19 İngiltere.
// Fetih tarihi coğrafyaya göre üçe ayrılır ve üçü de mevcut kırılmalardır:
// 1821-01-04 (Dongola/Nûbe), 1821-06-14 (Sennâr/Mavi Nil), 1821-08-19
// (Kordofan).
// ⚠️ DARFUR SULTANLIĞI'NA NOKTA KONMADI — kimliği yok; "funj" yazmak yanlış
// olurdu. El-Fâşir, kimlik eklendiğinde girer.
// ===========================================================================

{ ad:"Kerma", tur:"sehir", lat:19.600, lon:30.410, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Debbe", tur:"sehir", lat:18.056, lon:30.951, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Nil'in büyük kıvrımı; Kerîme (Karima) ve eski Napata bölgesi.
{ ad:"Merevî", tur:"sehir", lat:18.550, lon:31.850, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ebû Hamed", tur:"sehir", lat:19.535, lon:33.319, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Nil ile Sevâkin arasındaki kervan yolunun düğüm noktası.
{ ad:"Berber", tur:"sehir", lat:18.017, lon:33.983, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1884-05-01",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-01-04",t:"1884-05-01",k:"Mısır (Kavalalı)"}], d:[] },

// İsmâil Paşa'nın 1822'de yakılarak öldürüldüğü yer (kronolojide maddesi var).
{ ad:"Şendî", tur:"sehir", lat:16.691, lon:33.433, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Vad Medenî", tur:"sehir", lat:14.401, lon:33.519, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Ed-Düveym", tur:"sehir", lat:13.995, lon:32.334, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Kosti", tur:"sehir", lat:13.170, lon:32.663, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Kadârif", tur:"sehir", lat:14.036, lon:35.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Rusayris ve Fâzûğlî: Func Sultanlığı'nın Mavi Nil boyundaki güney ucu.
{ ad:"Rusayris", tur:"sehir", lat:11.861, lon:34.386, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

{ ad:"Fâzûğlî", tur:"sehir", lat:11.267, lon:34.783, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },

// Kordofan: mevcut Ubeyyid kaydıyla aynı gün (1821-08-19).
{ ad:"Bâra", tur:"sehir", lat:13.700, lon:30.367, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-01",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1821-08-19",t:"1882-09-01",k:"Mısır (Kavalalı)"}], d:[] },

// Batı Kordofan — Darfur ile Sennâr arasındaki tartışmalı kuşak. Darfur
// kimliği olmadığı için Kordofan zinciriyle yazıldı; kimlik gelince
// 1821 öncesi yeniden değerlendirilmeli.
{ ad:"Nühûd", tur:"sehir", lat:12.700, lon:28.433, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1785-01-01",d:"funj"},{f:"1785-01-01",t:"1821-08-19",d:"darfur"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1821-08-19",t:"1885-01-26",k:"Mısır (Kavalalı)"}] },

// Taka bölgesi 1840'ta Kavalalı Mısır'ı tarafından alındı ve Kesela şehri o
// yıl askerî karargâh olarak kuruldu (Ahmed Paşa Ebû Vidân dönemi). YIL
// doğrulandı, GÜN doğrulanmadı: 1840-07-15 seçilmesinin sebebi Londra
// Antlaşması maddesiyle aynı güne düşüp Değişmez 2'yi kapalı tutmasıdır.
// Gerçek gün bulunduğunda düzeltilmeli.
{ ad:"Kesela", tur:"sehir", lat:15.451, lon:36.400, g:0, k:3, m:"Hartum", kur:"1840-01-01",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1923-10-29",d:"ingiltere"}],
  v:[{f:"1840-01-01",t:"1885-01-26",k:"Mısır (Kavalalı)"}], d:[] },


// ===========================================================================
// 11) SAHRA'NIN ÜÇ OSMANLI KAZASI
// ---------------------------------------------------------------------------
// Oturum 14'ün görev tanımı Sahra'yı dışarıda bırakmıştı; merkez oturum bu
// üçünü istedi çünkü gerçekten Osmanlı kazasıydılar. Zincirler ait oldukları
// merkezle birebir aynı (Ğadâmis → Trablus, Gât → Murzuk/Fizan, Cağbûb →
// Bingazi), Karamanlı ocaklık ayrımı dâhil.
// ⚠️ Çöl dolgu noktaları (Büyük Doğu Ergi, Fizan güneyi, Hoggar, Sirte iç
// çölü, Batı çölü) YERİNDE BIRAKILDI — bunlar kasten sahipsizdir ve
// Değişmez 1'in 34'lük tabanı onlara dayanıyor.
// ===========================================================================

// Trablus'tan Sudan'a giden kervan yolunun en büyük vahası; Osmanlı kazası.
{ ad:"Ğadâmis", tur:"sehir", lat:30.133, lon:9.500, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1551-08-15",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Fizan'ın batı ucu; zincir mevcut Murzuk kaydıyla birebir (1577 tâbiiyeti).
{ ad:"Gât", tur:"sehir", lat:24.964, lon:10.180, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1577-01-01",t:"1711-03-01",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// Senûsî tarikatının 1856'da kurduğu çöl merkezi ve zâviyesi. kur: yazıldı;
// motor bugün okumuyor (MIMARI.md §3.1) ama öncesinde burada yerleşim yoktu.
{ ad:"Cağbûb", tur:"sehir", lat:29.744, lon:24.517, g:0, k:4, m:"Bingazi", kur:"1856-01-01",
  s:[{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1856-01-01",t:"1912-10-18"}],
  v:[] },

// ===========================================================================
// 12) DARFUR SULTANLIĞI
// ---------------------------------------------------------------------------
// ⚠️ `darfur` kimliği bu dosya yazılırken arac/renkler.py'de TANIMSIZDI.
// Merkez oturumun talimatı gereği noktalar `s:` alanı DOLU yazıldı — kimlik
// Oturum 16'da eklenince tek hamlede boyanacak. Kimlik eklenmeden koşturulan
// üretimde bu üç petek RENKSİZ kalır ve motor uyarı verir; beklenen davranış
// budur. renkler.py'ye DOKUNULMADI (DSATUR dengesi).
//
// Zincir: Keyra hânedanı (1603'ten; öncesi Tuncur krallığı, kimliği YOK ve
// `darfur` ile boyandı) → 1874-11-02 Mısır ilhakı (tâbi) → 1883-12-23 Mehdî →
// 1898-09-02 Ali Dinar'ın sultanlığı yeniden kurdu → 1916-05-23 İngiltere.
// İki `v:` sınırının maddesi olaylar_ek9.js'e yazıldı.
// k:0 ve m: YOK — Darfur egemen bir sultanlıktı; m:"Hartum" yazmak Değişmez 3
// çelişkisini altı kesitte birden artırırdı (ölçüldü).
// ===========================================================================

{ ad:"El-Fâşir", tur:"sehir", lat:13.630, lon:25.349, g:1, k:1,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

{ ad:"Nyala", tur:"sehir", lat:12.048, lon:24.882, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// Darfur'un batı ucu; Vaday Sultanlığı ile sınır. Vaday'ın kimliği de YOK.
{ ad:"Cenîne", tur:"sehir", lat:13.452, lon:22.445, g:0, k:0,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)"}] },

// ===========================================================================
// 13) GÜNEY HABEŞİSTAN KRALLIKLARI
// ---------------------------------------------------------------------------
// ⚠️ `kaffa`, `cimma`, `vollayta`, `sidamo` kimlikleri renkler.py'de TANIMSIZ
// — Darfur'la aynı durum, aynı gerekçe (merkez oturumun talimatı).
//
// Bu bölge 1890'lara kadar Habeş İmparatorluğu'na ait DEĞİLDİ; Oturum 14 bu
// yüzden buraya hiç nokta koymamıştı ve alan Addis ile Ogaden dolgusuna
// emiliyordu. Menelik'in güney seferleri:
//   Vollayta  1887-1894 savaşı, 1894'te ilhak            ✓ kaynaktan
//   Kaffa     1895 istilâsı, kral Gaki Şeroço 1897'de esir ✓ kaynaktan
//   Sidamo    yılı doğrulanamadı → OGRENILENLER §8 gereği YUVARLANMADI,
//             komşusu Kaffa'nın doğrulanmış 1897 tarihi kullanıldı
//   Cimma     1884'te Menelik'e vergiye bağlandı ama iç özerkliğini 1932'ye
//             kadar korudu — atlasın ufku 1923'te bittiği için `cimma` olarak
//             kalır. 1830 öncesi Ennarya/Gonga alanıdır, `kaffa` yazıldı.
// ⚠️ Gamo, Konso ve Hadiya'ya nokta KONMADI — kimlik yok, `habesistan` yazmak
// yanlış olurdu.
// ===========================================================================

{ ad:"Bonga (Kaffa)", tur:"sehir", lat:7.283, lon:36.233, g:0, k:1,
  s:[{f:"1281-01-01",t:"1897-09-10",d:"kaffa"},{f:"1897-09-10",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Cimma (Jiren)", tur:"sehir", lat:7.673, lon:36.834, g:0, k:0,
  s:[{f:"1281-01-01",t:"1830-01-01",d:"kaffa"},{f:"1830-01-01",t:"1923-10-29",d:"cimma"}], d:[] },

{ ad:"Sodo (Vollayta)", tur:"sehir", lat:6.860, lon:37.762, g:0, k:0,
  s:[{f:"1281-01-01",t:"1894-01-01",d:"vollayta"},{f:"1894-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

{ ad:"Yirgalem (Sidamo)", tur:"sehir", lat:6.750, lon:38.410, g:0, k:0,
  s:[{f:"1281-01-01",t:"1897-01-01",d:"sidamo"},{f:"1897-01-01",t:"1923-10-29",d:"habesistan"}], d:[] },

// ===========================================================================
// 14) PENCERE GÜNEYE AÇILDIĞINDA HAZIR — ŞU AN KAPALI
// ---------------------------------------------------------------------------
// Barava (1.106°K) ve Kısmâyû (0.358°K) `box(-12, 1.5, 62, 62)` penceresinin
// GÜNEY SINIRININ dışında. Kutu dışı nokta yazmak GÜVENLİ DEĞİL: uret_petek.py
// hücreyi `.intersection(BOLGE)` ile kırpıyor (265-276. satırlar), yani kutu
// dışındaki noktanın peteği BOŞ çıkar — bu tam olarak r83'te düzeltilen
// "sıfır alanlı petek" sınıfıdır. Bu yüzden kayıtlar YORUMDA bırakıldı;
// pencere güneye açıldığında yorumu kaldırmak yeterli.
//
// { ad:"Barava", tur:"liman", lat:1.106, lon:44.032, g:0, k:0,
//   s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1923-10-29",d:"italya"}], d:[] },
//
// { ad:"Kısmâyû", tur:"liman", lat:0.358, lon:42.545, g:0, k:0,
//   s:[{f:"1281-01-01",t:"1895-07-01",d:"somali"},{f:"1895-07-01",t:"1923-10-29",d:"ingiltere"}], d:[] },
//   ⚠️ Kısmâyû 1895'te İngiliz Doğu Afrika'sına katıldı (Zengibar'dan devren);
//   gün doğrulanmadı, açılışta kontrol edilmeli.

// ===========================================================================
// 15) MISIR'IN BATI ÇÖLÜ VAHALARI — hatalar 11 md.40
// ---------------------------------------------------------------------------
// Oturum 16'nın ölçümü: 1885'te batıdaki Cağbûb Osmanlı boyanıyor, hemen
// doğusundaki Mısır batı çölü boş. Boşluk motor kusuru DEĞİL — içindeki iki
// nokta kasten sahipsiz. Asimetri, vahalara hiç nokta konmamış olmasından.
//
// 🔴 TARİH UYDURULMADI. Bu dört vaha 1517'den beri Mısır'ın Nil vadisi
// idaresine bağlı kaldı; hiçbirinin ayrı bir el değiştirme tarihi yok. Bu
// yüzden dördü de KAHİRE'NİN DÖNEM YAPISINI birebir tekrarlar ve
// YENİ HİÇBİR KIRILMA ÜRETMEZ — Değişmez 2 için tek bir yeni madde gerekmez.
//
// ✅ 1914 DİKİŞİ KAPANDI (31 Temmuz). Bu satırlar eskiden şunu anlatıyordu:
// çekirdek dosya Mısır'ı `1914-11-05`te (savaş ilânı) İngiltere'ye çeviriyordu,
// bu dört vaha ise doğru tarihi (`1914-12-18`, himaye ilânı) taşıyordu ve arada
// 43 günlük görünür bir dikiş kalıyordu — kasıtlı bırakılmıştı, çelişkiyi
// gizlememek için.
//
// Çekirdek düzeltildi: **43 kayıt** `1914-11-05` → `1914-12-18` hizalandı.
// 🔴 Denetimin bunu görememesinin sebebi ölçüldü ve `CLAUDE.md §8`in yasağını
// doğruluyor: `olaylar.js`'teki `t:"1914-11"` AY hassasiyetli, ayın 1'ine
// genişliyor, 43 kırılmaya 4 gün kalıyor ve ±30 ölçütü TEMİZ diyor. Yani
// 43 Mısır kasabası, **Osmanlı'nın savaşa girişi** maddesinin altında el
// değiştiriyordu. Doğru madde (`1914-12-18`, "Mısır'ın İngiliz himayesine
// alınması") kronolojide zaten vardı — kronoloji doğru, veri geriydi.
// ⚠️ TDV `abbas-hilmi-ii` 19 Aralık diyor; o, hidivin AZLİ. Harita `v:`yi
// metbûun değişmesiyle bitirir, hanedanın değişmesiyle değil (hanedan devam
// etti) — 18 Aralık doğru.
// ⚠️ Kuveyt'in `1914-11-05`i BAŞKA bir olaydı ve dokunulmadı; o da ayrıca
// TDV'ye göre `1914-11-22`ye çekildi.
//
// 🔴 SİVA YAZILMADI. Siva 1820'ye kadar fiilen müstakil bir Berberî vahasıydı,
// Kavalalı Mehmed Ali o yıl ilhak etti. Ama TDV'de karşılığı YOK:
//   `siva` slug'ı ÖLÜ (arama sayfası, Sivas maddeleri çıkıyor)
//   `arama/?q=vaha` → dört alâkasız madde, Mısır vahası yok
//   `kavalali-mehmed-ali-pasa` maddesi Siva'dan HİÇ söz etmiyor
// En yakın kırılma 1820-07-20 (Sudan seferi), 201 gün uzakta — yuvarlanamaz.
// Kaynak yoksa uydurulmaz (KOORDINASYON.md §3): Siva DUZELTMELER.md §5'te
// iki ölçülmüş seçenekle merkeze bırakıldı.

{ ad:"Hârice (Vâhât)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"bolge", lat:25.440, lon:30.546, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Dâhile", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"bolge", lat:25.494, lon:28.976, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Ferâfire", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"bolge", lat:27.058, lon:27.970, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

{ ad:"Bahriye (Bâvîtî)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"}], tur:"bolge", lat:28.349, lon:28.864, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı"}] },

// ===========================================================================
// 16) LİBYA — hatalar 11 md.17 · Oturum 16'dan havale
// ---------------------------------------------------------------------------
// Oturum 16'nın ölçümü: çöl sınırının cetvelle çizilmiş görünmesi motor kusuru
// değil, NOKTA YOKLUĞU. 8 nokta / 1.540.913 km² = 192.614 km²/nokta;
// Batı Anadolu 1.868 km²/nokta (103 kat fark).
//
// Bu oturumda ölçülen petek alanları (shapely voronoi_diagram, aynı BOLGE):
//   Gât              270.915 km²      Murzuk (Fizan)   215.417 km²
//   Cağbûb           170.490 km²      Ğadâmis          118.999 km²
//   Bingazi           77.682 km²      Trablus           22.951 km²
// Karşılaştırma: Kahire 5.272 km², Konstantin 5.363 km².
// Yani tek bir Gât noktası Kahire'nin peteğinin 51 katını boyuyor.
//
// 🔴 MERKEZİN ŞARTI UYGULANDI: "eklenecek noktaların ÇOĞU kasten sahipsiz
// kalmalı — Osmanlı'nın Trablusgarp hâkimiyeti kıyı + vahaydı, çöle sahiplik
// atamak yanlış olur." Sekiz nokta eklendi, ALTISI kasten sahipsiz (3/4).
//
// ⚠️ BEKLENEN_SAHIPSIZ 34 → 40 OLMALI. `arac/denetle.py` Oturum 2'nin dosyası,
// dokunmadım. Denetim bu sayı güncellenene kadar Değişmez 1'i İHLAL raporlar;
// ihlal gerçek değil, beklentinin eskimesidir.
//
// İdarî noktalar YENİ KIRILMA ÜRETMEZ: kıyı/dağ noktaları Trablus'un,
// çöl vahaları Murzuk'un dönem yapısını birebir tekrarlar. Her iki zincirin de
// dört sınırı (1551-08-15 · 1711-03-01 · 1835-05-26 · 1912-10-15/18) zaten
// maddelidir.

// --- 16a) İDARE EDİLEN (2) — Trablus/Murzuk zinciri, yeni kırılma yok -------
// ⚠️ Sürt, Zuvâra ve Geryan İLK YAZILDI, SONRA SİLİNDİ: denetimin yakınlık
// kontrolü üçünü de 0.00 km'de mükerrer buldu — bu üç yer Faz 1'de zaten
// eklenmişti (Sirte:490, Zuvâre:455, Garyân:468). CLAUDE.md §11'in "yakın
// mükerrer yerleşim" tuzağı; kendi dosyamda, kendi noktalarımla tekrarladım.
// Denetimi yazmadan önce değil, yazdıktan SONRA koşturmanın bedeli.

{ ad:"Sokna", tur:"bolge", lat:29.070, lon:15.792, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Câlû", tur:"bolge", lat:29.033, lon:21.548, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

// --- 16b) KASTEN SAHİPSİZ (6) — hiçbir devletin idaresine girmedi ----------
// Bunlar Sahra ve Rub'ul Hâlî dolgu noktalarıyla AYNI SINIFTIR (CLAUDE.md §3):
// hiçbir dönem taşımazlar, tek işlevleri komşu peteğin çölü yutmasını
// engellemektir. Kufra bilerek buradadır: Senûsiyye'nin zâviyesi dinî bir
// merkezdi, Osmanlı idaresi oraya hiç ulaşmadı ve İtalya ancak 1931'de —
// atlasın kapsamı dışında — girdi.

{ ad:"Serîr", tur:"bolge", lat:27.500, lon:22.000, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Serîr çölü, Libya'nın güneydoğusunda insansız çakıllı çöl kesimi; tarih boyunca yerleşim ve devlet denetimi kaydı yok." },

{ ad:"Tâzirbû", tur:"bolge", lat:25.712, lon:21.061, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Tâzirbû vaha grubu çevresindeki geniş çöl, Kufra-Fizan güzergahı üzerinde olsa da fiilen devlet denetimi dışındaydı." },

{ ad:"Rebyâne", tur:"bolge", lat:24.200, lon:21.500, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Rebyâne kum deryası, Libya'nın en izole kesimlerinden biri; tarih boyunca yerleşimsiz ve devlet denetimi dışında." },

{ ad:"Vâv el-Kebîr", tur:"bolge", lat:25.363, lon:17.221, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Vâv el-Kebîr, Fizan'ın derin güneyinde ıssız bir çöl kesimi; Osmanlı Trablusgarp idaresinin ulaşamadığı bir alan." },

{ ad:"İdehân Murzuk", tur:"bolge", lat:26.200, lon:12.400, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"İdehân Murzuk kum denizi, Fizan'ın güneyinde yerleşimsiz bir alan; vaha kasabaları dışında devlet denetimi yok." },

{ ad:"Kufra (el-Cûf)", tur:"bolge", lat:24.209, lon:23.300, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"kabile", neden:"Kufra vahaları 19. yy ortasından itibaren Sünûsî tarikatının dinî-aşiret nüfuzu altına girdi (bir devlet değil, tarikat/aşiret ağı); öncesinde de fiilen denetimsizdi." },

// ===========================================================================
// 17) md.17'NİN İKİNCİ YARISI — Fizan'ın dokuz noktası (OTURUM-14-DUZELTMELER §15)
// ===========================================================================
// Kullanıcının şikâyeti: Libya çölünde sınırlar "cetvelle çizilmiş gibi".
//
// 🔴 ÖNCE TEŞHİS, SONRA LİSTE. Ölçüldü (1880-06-15, görünür kenar ölçütü):
// haritada görünen beş uzun düz çizginin BEŞİ DE `(boş) | OSMANLI` sınırı —
// yani Osmanlı ile başka bir devletin arasında değil, Osmanlı ile sahipsiz
// çölün arasında. Ve üç ayrı tarihte (1700/1880/1911) TIPATIP aynı: iki yüz
// yıl kımıldamayan bir çizgi.
//
// Sebebi nokta seyrekliği DEĞİL: uret_petek.py:347 petek sınırını nehir
// yatağına (~33 km) ya da dağ sırtına (~39 km) yaslar. Libya'da motorun
// okuduğu nehir parçası SIFIR, sırt olarak saydığı üç poligonun (Jabal bin
// Ghunaymah · Al Jabal al Akhdar · Tibesti) hiçbiri Fizan sınırında değil.
// Yaslanacak hiçbir şey yoksa sınır ham Voronoi orta dikmesi olarak kalır —
// ve orta dikme tanımı gereği düz bir doğrudur. Cetvel görüntüsü veri
// eksikliğinin değil, ÇÖLDE TOPOGRAFYA OLMAMASININ sonucu.
//
// 🔴 BU YÜZDEN NOKTA EKLEMENİN TAVANI ÖLÇÜLDÜ VE MÜTEVAZI:
//     bugünkü hâl  18 kenar · 4.298 km · en uzun 438 km
//     7 nokta      19 kenar · 4.010 km · en uzun 451 km  ⚠️ ARTTI
//     8 nokta      20 kenar · 4.137 km · en uzun 390 km
//     9 nokta      21 kenar · 3.931 km · en uzun 390 km   → -%11 / -%9
// md.17 nokta ekleyerek KAPANMAZ, yalnız yumuşar. Asıl kaldıraç motorda
// (§15f'de Oturum 16'ya iki seçenek ölçülü olarak verildi).
//
// ⚠️ DOKUZU BİRLİKTE ÇALIŞIR — LİSTEDEN NOKTA ÇIKARMA. Yedi nokta aşamasında
// en uzun kenarın artması tesadüf değil: İdehân Ubârî eklenince Gât'ın batı
// sınırı yeni tepe oluyor, onu ancak Tâsîlî n'Accer kırıyor. Biri çıkarılırsa
// yukarıdaki ölçüm geçersizdir.
//
// Yakınlık: dokuzu da 1.525 mevcut noktanın hepsiyle karşılaştırıldı, en
// yakın komşu 57,4 km (Ubârî → İdehân Murzuk). Sürt/Zuvâra/Geryan hatası
// (bkz. §16a notu) bu kez YAZMADAN ÖNCE ölçülerek engellendi.
//
// ⚠️ BEKLENEN_SAHIPSIZ 43 → 50. `arac/denetle.py` Oturum 2'nin dosyası.

// --- 17a) KASTEN SAHİPSİZ (7) — kum denizleri ve serîrler ------------------
// Hiçbir devletin idaresine girmedi; tek işlevleri komşu peteğin çölü
// yutmasını engellemek (CLAUDE.md §3, Sahra dolgu noktalarıyla aynı sınıf).

{ ad:"İdehân Ubârî", tur:"bolge", lat:25.900, lon:11.300, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"İdehân Ubârî kum denizi, Fizan'ın vaha zincirinin kenarında yerleşimsiz bir çöl kesimi, devlet denetimi dışında." },

{ ad:"Ramletü Murzuk", tur:"bolge", lat:24.600, lon:12.100, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Ramletü Murzuk, Murzuk vahası çevresindeki ıssız kumul alanı; kervan durağı dışında devlet denetimi kaydı yok." },

{ ad:"Vâdî Tanezzûft", tur:"bolge", lat:22.400, lon:11.300, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Vâdî Tanezzûft, Fizan'ın güneybatı ucunda ıssız bir vadi; tarih boyunca yerleşik devlet denetimi kaydı yok." },

{ ad:"Serîr Kalanşû", tur:"bolge", lat:28.200, lon:21.700, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Serîr Kalanşû, Libya'nın en ıssız çakıllı çöl kesimlerinden biri; devlet denetimi kaydı yok." },

{ ad:"Ramletü Zellâf", tur:"bolge", lat:25.600, lon:15.600, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Ramletü Zellâf kumulları, Fizan iç çölünde yerleşimsiz bir alan; devlet denetimi dışında." },

{ ad:"Ma'tan es-Sarra", tur:"bolge", lat:21.700, lon:21.850, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Ma'tan es-Sarra, Libya'nın en güney ucunda ıssız bir kuyu/vaha noktası; devlet denetimi kaydı yok." },

// ⚠️ Tâsîlî n'Accer LİBYA DEĞİL, CEZAYİR toprağıdır. Listeye Libya sınırını
// düzeltmek için değil, Gât'ın BATI peteğini sınırlamak için girdi — o petek
// bugün Cezayir çölüne taşıyor. Sahipsiz olması ayrıca doğru: Ahaggar-Tâsîlî
// Tuareg konfederasyonunun alanıydı, ne Osmanlı ne Fransa 1923'e kadar
// buraya idare kurdu.
{ ad:"Tâsîlî n'Accer", tur:"bolge", lat:25.300, lon:9.200, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Tâsîlî n'Accer platosu, Cezayir-Libya sınırında ıssız bir kayalık yayla; devlet denetimi kaydı yok." },

// --- 17b) İDARE EDİLEN (2) — Fizan kazaları, YENİ KIRILMA ÜRETMEZ ----------
// Sebha ve Ubârî Fizan'ın gerçek kaza merkezleridir; dönem zincirleri
// `yerlesimler.js`'teki Murzuk (Fizan) kaydıyla BİREBİR aynıdır, yani dört
// sınırın (1577-01-01 · 1711-03-01 · 1835-05-26 · 1912-10-18) dördü de zaten
// maddelidir. Değişmez 2'ye yeni yük binmez.
//
// 🔴 İkisi de zaten Osmanlı boyalı hücrenin İÇİNDE: Murzuk'un peteğini
// bölerler, sınırı DIŞARI TAŞIMAZLAR. Toprak büyümez — md.40'ta dört vahanın
// boş çölü yutması gibi bir etki burada yok, ölçüldü.

{ ad:"Sebha", tur:"sehir", lat:27.038, lon:14.428, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },

{ ad:"Ubârî", tur:"sehir", lat:26.590, lon:12.777, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"hafsi"},{f:"1912-10-18",t:"1923-10-29",d:"italya"}],
  d:[{f:"1577-01-01",t:"1711-03-01"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-03-01",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)"}] },



];

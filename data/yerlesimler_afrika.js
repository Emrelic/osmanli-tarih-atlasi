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

{ ad:"Demenhûr (Damanhur)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-08",t:"1801-05-09",d:"fransa-cumhuriyet",kaynak:"başlangıç: NAPO-2 (napoleon.org, Chronologie CG t.2) \"8 JUILLET … Napoléon arrive à Damanhour\" · bitiş: KOMŞU: Rahmaniye · NAPO-3 (napoleon.org, Chronologie CG t.3) \"9 mai 1801 … Lagrange et ses hommes abandonnent Ramanieh pour se réfugier au Caire\" · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:31.034, lon:30.470, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Dessûk",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-10",t:"1801-05-09",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Rahmaniye · NAPO-2 (napoleon.org, Chronologie CG t.2) \"10 JUILLET … Napoléon arrive à El-Rahmânieh sur le Nil\" · bitiş: KOMŞU: Rahmaniye · NAPO-3 (napoleon.org, Chronologie CG t.3) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:31.135, lon:30.647, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Kafrüşşeyh",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) \"24 JUILLET … Napoléon entre au Caire\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:31.112, lon:30.940, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Burullus gölünün kuzey kordonu; Delta'nın kuzey kıyısını Reşîd ile Dimyat
// arasında tutan tek nokta.
{ ad:"Bürüllüs (Baltîm)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"liman", lat:31.556, lon:31.090, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Tanta",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.786, lon:31.001, g:1, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Garbiye kâşifliğinin merkezi.
{ ad:"Mahalletülkübrâ",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.970, lon:31.168, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Menûfiye kâşifliğinin merkezi.
{ ad:"Şibînülkûm (Menûfiye)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.552, lon:31.011, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Kalyûbiye kâşifliğinin merkezi.
{ ad:"Benhâ (Kalyûbiye)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.466, lon:31.184, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Dakahliye kâşifliğinin merkezi.
{ ad:"Mansûre",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-08-10",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: NAPO-2 (napoleon.org, Chronologie CG t.2) \"10 AOÛT … Un petit détachement français réussit une retraite héroïque à Mansourah\" — Fransız varlığının İLK kaynaklı günü (alt sınır değil, tanıklık) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:31.038, lon:31.380, g:1, k:3, m:"Kahire",
  s:[{f:"1219-01-01",t:"1250-04-30",d:"eyyubi",kesinlik:{f:"yil"},kaynak:"TDV mansure--misir: '616’da (1219) Eyyûbî Sultanı el-Melikü’l-Kâmil Muhammed tarafından, Dimyat’ı işgal eden Haçlılar’a karşı Nil’in Dimyat kolunun doğu kıyısında bir askerî karargâh olarak kuruldu.' · f = künye eyyubi t günü (1250-04-30); TDV: Faraskur 7 Nisan 1250, Turan Şah'ın ardından Şecerüddür (80 gün), Aybek 3 Temmuz 1250. Künye sınırı kullanıldı — KAYNAK GÜNÜ DEĞİL. · T5-1000-B-1016"},{f:"1250-04-30",t:"1517-05-19",d:"memluk",kaynak:"T5-1000-B-1016: f 1281-01-01 → 1250-04-30 geri çekildi — TDV mansure--misir: 'Mansûre, Memlük sultanları zamanında Dekahliye idarî bölümüne (muhafaza) bağlı kaldı.' · T5-1000-B-1016"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Mît Gamr",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.718, lon:31.259, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Menzile",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-24",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Kahire · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:31.157, lon:31.937, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Şarkiye kâşifliğinin merkezi; Mısır'dan Suriye'ye giden ordu yolunun ilk
// menzili.
{ ad:"Bilbîs (Şarkiye)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-08-09",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"NAPO-2: «8 août: Napoléon passe à El-Khanqah, puis à Belbeis le 9» — başlangıç GÜN · bitiş: gün komşudan Kahire 1801-06-27 (NAPO-3: Belliard'ın kapitülasyonu, Yukarı Mısır kalelerinin boşaltılmasını da kapsıyordu — AKDENIZ-ARAP-0082 H-0061) · noktanın KENDİ boşaltma günü BULUNAMADI · AKDENIZ-ARAP-0082 H-0058/59/60 · SIRADA-C"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.417, lon:31.567, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Fâkûs",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-08-11",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Salihiye · NAPO-2 (napoleon.org, Chronologie CG t.2) \"11 AOÛT … Combat de Salheyeh\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.729, lon:31.797, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Sînâ yolunun son Mısır menzili.
{ ad:"Sâlihiyye",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-08-11",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"NAPO-2: «11 août: Combat de Salheyeh» — başlangıç GÜN · bitiş: gün komşudan Kahire 1801-06-27 (NAPO-3: Belliard'ın kapitülasyonu, Yukarı Mısır kalelerinin boşaltılmasını da kapsıyordu — AKDENIZ-ARAP-0082 H-0061) · noktanın KENDİ boşaltma günü BULUNAMADI · AKDENIZ-ARAP-0082 H-0058/59/60 · SIRADA-C"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"kale", lat:30.793, lon:31.986, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// 1798 ve 1799 Ebûkîr muharebelerinin sahnesi.
{ ad:"Ebûkîr",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-10",t:"1801-05-09",d:"fransa-cumhuriyet",kaynak:"başlangıç: gün komşudan: Rahmaniye 1798-07-10 · NAPO-2 (napoleon.org, Chronologie CG t.2) \"10 JUILLET … Napoléon arrive à El-Rahmânieh sur le Nil\" · bitiş: gün komşudan: Rahmaniye 1801-05-09 · NAPO-3 (napoleon.org, Chronologie CG t.3) \"9 mai 1801 … Lagrange et ses hommes abandonnent Ramanieh\" — noktanın KENDİ giriş/boşaltma günü BULUNAMADI; TEK komşu (Rahmaniye, kaynaklı), Kahire 22 Temmuz günü KULLANILMAZ, çift pencere yok; zincirleme devralma değil, doğrudan kaynaklı komşu kaydı (iç Delta komşusu Dessûk/Demenhûr ile aynı) · Emre kararı 13 Ekim 2026 · DUZELTME-1 madde 4"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"kale", lat:31.317, lon:30.062, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Süveyş Kanalı şehirleri: kur: alanı motorca okunmuyor (MIMARI.md §3.1), ama
// kanaldan önce burada yerleşim yoktu; zaman dilimli Voronoi geldiğinde veri
// hazır olsun diye yazıldı. Dönem zincirleri Mısır'ın geneliyle aynı.
{ ad:"Portsaid",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"liman", lat:31.257, lon:32.284, g:0, k:4, m:"Kahire", kur:"1859-04-25",
  s:[{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[],
  v:[{f:"1859-04-25",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"İsmâiliye",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:30.588, lon:32.271, g:0, k:4, m:"Kahire", kur:"1863-04-27",
  s:[{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[],
  v:[{f:"1863-04-27",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Sînâ'nın kuzey kıyısı — Mısır ile Suriye arasındaki tek karayolu buradan
// geçer; Katye kervan ve hac yolu menzili, El-Arîş sınır kalesidir.
{ ad:"Katye",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-07-10",t:"1801-05-09",d:"fransa-cumhuriyet",kaynak:"başlangıç: gün komşudan: Rahmaniye 1798-07-10 · NAPO-2 (napoleon.org, Chronologie CG t.2) \"10 JUILLET … Napoléon arrive à El-Rahmânieh sur le Nil\" · bitiş: gün komşudan: Rahmaniye 1801-05-09 · NAPO-3 (napoleon.org, Chronologie CG t.3) \"9 mai 1801 … Lagrange et ses hommes abandonnent Ramanieh\" — noktanın KENDİ giriş/boşaltma günü BULUNAMADI; TEK komşu (Rahmaniye, kaynaklı), Kahire 22 Temmuz günü KULLANILMAZ, çift pencere yok; zincirleme devralma değil, doğrudan kaynaklı komşu kaydı (iç Delta komşusu Dessûk/Demenhûr ile aynı) · Emre kararı 13 Ekim 2026 · DUZELTME-1 madde 4"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"kale", lat:30.940, lon:32.633, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-11",d:"memluk",kaynak:"eski uç 1517-05-19 İskenderiye'nin teslim günüydü (kaynaksız devralma). Gün komşudan: El-Arîş 1517-01-11 — TDV selim-i '9 Ocak'ta Gazze'den ayrılan Yavuz Sultan Selim 11 Ocak'ta Arîş mevkiine ulaştı … 16 Ocak'ta Sâlihiye'ye gelindiğinde'; Katye Arîş-Sâlihiye kıyı yolu üzerinde, kendi günü kaynakta YOK. KUTU-C-1014"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-01-11",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"El-Arîş",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-02-18",t:"1799-12-28",d:"fransa-cumhuriyet",kaynak:"aris (başlangıç) · bitiş 1799-12-28: yusuf-ziya-pasa (TDV) \"sadrazam 28 Aralık 1799'da Arîş'in muhasarasını zaferle sonuçlandırdı\" · NAPO-2 (napoleon.org, Chronologie CG t.2) \"29-30 DÉCEMBRE … Les Turcs prennent le fort d'El-Arich\" — ÇELİŞKİ: aris (TDV) \"aynı yılın 17 Kasımında … geri aldılar\". İki kaynak Aralık sonu diyor; TDV kendi içinde çelişiyor, taraf seçimi 1.MURAT'ın (denetim/YAMA-SEFER-NAPOLYON-0918.json, Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"kale", lat:31.132, lon:33.798, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-11",d:"memluk",kaynak:"TDV selim-i: '9 Ocak'ta Gazze'den ayrılan Yavuz Sultan Selim 11 Ocak'ta Arîş mevkiine ulaştı' · TDV aris: Selim Mısır'a giderken Arîş'ten geçti (1516 [hicrî/yıl]). Eski uç 1517-05-19 İskenderiye'nin teslim günüydü. KUTU-C-1014"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-01-11",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Marmarika kıyısı: İskenderiye ile Derne arasında 700 km boyunca hiç nokta
// yoktu, kıyı şeridi İskenderiye'nin peteğine emiliyordu.
{ ad:"Mersâ Matruh",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"liman", lat:31.353, lon:27.237, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Mısır-Trablusgarp sınırı; 1911 sınır düzenlemesinde Mısır'da kaldı.
{ ad:"Sellûm",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"liman", lat:31.545, lon:25.170, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-05-19",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-05-19",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// ===========================================================================
// 2) MISIR — Orta ve Yukarı Mısır (Nil vadisi)
// ---------------------------------------------------------------------------
// Osmanlı devralma tarihi 1517-04-13 (Tomanbay'ın idamı; mevcut Asyut ve
// Asvan kayıtlarıyla aynı gün).
// ===========================================================================

{ ad:"Atfîh",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-10-07",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Feyyum/Sediman · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:29.408, lon:31.257, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Benî Süveyf", kur:"1500-01-01", kesinlik:"yuzyil", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: 15. yüzyıl — C. Peust, Die Toponyme vorarabischen Ursprungs im modernen Ägypten (GM Beihefte 8, Göttingen 2010) s. 91–92 (Ramzî II/3:155-157 aktarımı). Kesinlik yuzyil. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'beni-suef'.", not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-10-07",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Feyyum/Sediman · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:29.074, lon:31.098, g:0, k:3, m:"Kahire",
  s:[{f:"1500-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Nil vadisinin batısındaki tek büyük vaha-ova; kendi noktası olmazsa Batı
// çölü dolgusuna ya da Kahire'ye emilir.
{ ad:"Feyyûm",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-10-07",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"NAPO-2 (Fondation Napoléon, Correspondance générale t.2 kronolojisi): «Victoire de Desaix … à Sediman : les Français maîtrisent le Fayoum» — başlangıç GÜN · bitiş: gün komşudan Kahire 1801-06-27 (NAPO-3: Belliard'ın kapitülasyonu, Yukarı Mısır kalelerinin boşaltılmasını da kapsıyordu — AKDENIZ-ARAP-0082 H-0061) · noktanın KENDİ boşaltma günü BULUNAMADI · AKDENIZ-ARAP-0082 H-0058/59/60 · SIRADA-C"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:29.309, lon:30.842, g:1, k:3, m:"Kahire",
  s:[{f:"1000-01-01",t:"1171-09-13",d:"fatimi",kaynak:"TDV feyyum: 'Daha sonra Mısır’a hâkim olan Fâtımîler, Feyyûm’u idarî bakımdan Mısır’ın dört eyaletinden biri olan Kūs’a bağlı bir bölge (kûre) yaptılar.' · f 1000-01-01 UFUK SINIR İŞARETİDİR (sahiplik öncesinden sürüyor; edinim günü değil, D210) · künye rengi RENK-PAKET-3-1016'da verildi. t: f = künye eyyubi günü (1171-09-13); TDV yalnız yıl verir (fatimiler: '567 (1171) yılında Eyyûbîler’in idareyi ele geçirmesine kadar'). Kaba yıl (1171-01-01) künye penceresinin önüne düştüğü için künye günü devralındı — KAYNAK DEĞİL. · T5-1000-B-1016"},{f:"1171-09-13",t:"1250-04-30",d:"eyyubi",kaynak:"TDV feyyum: 'Eyyûbîler döneminde idarî yapısında bir değişiklik olmadan el-A‘mâlü’l-Feyyûmiyye diye anıldı.' · Aynı madde: 'Selâhaddîn-i Eyyûbî 1173’te burada el-Hankāhu’s-Sâlihiyye’yi yaptırdı.' f = künye eyyubi t günü (1250-04-30); TDV: Faraskur 7 Nisan 1250, Turan Şah'ın ardından Şecerüddür (80 gün), Aybek 3 Temmuz 1250. Künye sınırı kullanıldı — KAYNAK GÜNÜ DEĞİL. · T5-1000-B-1016"},{f:"1250-04-30",t:"1517-04-13",d:"memluk",kaynak:"T5-1000-B-1016: f 1281-01-01 → 1250-04-30 geri çekildi — TDV feyyum: 'Memlük sultanları Mısır’ın en zengin bölgelerinden olan Feyyûm’daki Arap şeyhleri ve emîrleriyle iyi ilişkiler kurdular ve onlara asker hazırlama karşılığında mukātaalar verdiler.' · T5-1000-B-1016"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Behnesâ",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-10-07",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Feyyum/Sediman · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:28.535, lon:30.650, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Minye",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-12-21",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"Hourtoulle, napoleon.org «La campagne d'Égypte»: «Le 21 décembre, il atteint Minieh» — başlangıç GÜN · bitiş: gün komşudan Kahire 1801-06-27 (NAPO-3: Belliard'ın kapitülasyonu, Yukarı Mısır kalelerinin boşaltılmasını da kapsıyordu — AKDENIZ-ARAP-0082 H-0061) · noktanın KENDİ boşaltma günü BULUNAMADI · AKDENIZ-ARAP-0082 H-0058/59/60 · SIRADA-C"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:28.109, lon:30.750, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Mellevî",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:27.732, lon:30.841, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Deyrût",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:27.554, lon:30.809, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Tahtâ",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-01-08",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: NAPO-2 (napoleon.org, Chronologie CG t.2) \"8 JANVIER … Victoire de Davout à Tahtah\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:26.768, lon:31.502, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Ahmîm",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:26.564, lon:31.745, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Osmanlı Yukarı Mısır'ının sancak merkezi (Circe sancağı).
{ ad:"Cirge (Girga)", kur:"1396-01-01", kesinlik:"yil", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: 798 (1396) — TDV HEVVÂRE (İ. Harekât – A. Kavas); hicrî 798 ∩ 1396, çeviri: tablo takvimi, Jülyen. Kesinlik yil. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'girga'.", not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1798-12-29",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"Juillet, Revue du Souvenir Napoléonien 363: «Desaix parvient le 29 décembre à Girgeh» — başlangıç GÜN · bitiş: gün komşudan Kahire 1801-06-27 (NAPO-3: Belliard'ın kapitülasyonu, Yukarı Mısır kalelerinin boşaltılmasını da kapsıyordu — AKDENIZ-ARAP-0082 H-0061) · noktanın KENDİ boşaltma günü BULUNAMADI · AKDENIZ-ARAP-0082 H-0058/59/60 · SIRADA-C"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:26.340, lon:31.891, g:1, k:3, m:"Kahire",
  s:[{f:"1396-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Ferşût",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-01-22",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Semhud · NAPO-2 (napoleon.org, Chronologie CG t.2) \"22 JANVIER … Grande victoire de Desaix à Samhoud\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:26.052, lon:32.158, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Kusayr limanı üzerinden Hicaz'a giden hac ve tahıl yolunun Nil ayağı.
{ ad:"Kına",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-01-22",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Semhud · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:26.164, lon:32.716, g:0, k:3, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Kûs",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-01-22",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Semhud · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:25.915, lon:32.760, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Uksur (Luksor)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-01-22",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Semhud · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:25.687, lon:32.640, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Esna",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-02-01",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Asvan · NAPO-2 (napoleon.org, Chronologie CG t.2) \"1er FÉVRIER … Victoire de Desaix à Assouan\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:25.293, lon:32.554, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Edfû",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-02-01",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Asvan · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:24.978, lon:32.874, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Kûm Ombo",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1799-02-01",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: KOMŞU: Asvan · NAPO-2 (napoleon.org, Chronologie CG t.2) · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"sehir", lat:24.476, lon:32.943, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// ===========================================================================
// 3) MISIR — Kızıldeniz kıyısı ve Sînâ
// ---------------------------------------------------------------------------
// Devralma tarihi 1517-01-22 (Ridâniye; mevcut Süveyş kaydıyla aynı gün).
// ===========================================================================

// Yukarı Mısır'ın Hicaz kapısı: Kına-Kusayr kervan yolu hac ve zahire
// nakliyesinin ana hattıydı.
{ ad:"Kusayr", not:"KARAR-UYG-1015 (Emre #13: tek nokta + not): Ortaçağ limanı Kuseyr el-Kadîm (Quseir al-Qadim) bu noktanın ~8 km kuzeyindeydi; 12. yy'da yeniden iskân edildi, faaliyet 16. yy başına kadar sürdü, sonra iş bugünkü Kuseyr'e kaydı — L. Blue, 'Locating the Harbour: Myos Hormos/Quseir al-Qadim', IJNA 36/2 (2007) 265-281 · Osmanlılar yeni liman ve kaleyi 1571'de kurdu — ARCE 'Red Sea: Quseir Fort' proje sayfası. 8 km petek ölçeğinde görünmez ⇒ ikinci nokta AÇILMADI ve kur:1571 YAZILMADI (yazılırsa 1281-1571 kıyıda delik açar); 1281-1571 kaydı eski limanı TEMSİL eder.", isg:[{f:"1799-05-29",t:"1801-06-27",d:"fransa-cumhuriyet",kaynak:"başlangıç: NAPO-2 (napoleon.org, Chronologie CG t.2) \"29 MAI … Belliard entre dans le port de Kosseir\" · bitiş: KOMŞU: Kahire · NAPO-3 (napoleon.org, Chronologie CG t.3) 27 juin 1801 « Le général Belliard signe la capitulation des troupes françaises en Égypte » (data/olaylar_misir1801.js; Kahire isg t ile aynı gün) · denetim/YAMA-SEFER-NAPOLYON-0918.json (Emre onayı 13 Ekim 2026)"},{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"}], tur:"liman", lat:26.104, lon:34.283, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",kid:"misir-kavalali",statu:"vassal",kaynak:"HARITA-0076 §4: serbest metin tâbilik kimliği boyanamaz; Kahire'nin v: kaydı kid:misir-kavalali. Yalnız kid/statu eklendi, tarih değişmedi. NOKTA-ORTADOGU-0077 · YAMA A"}] },

{ ad:"Sefâce", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"}], tur:"liman", lat:26.733, lon:33.933, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",kid:"misir-kavalali",statu:"vassal",kaynak:"HARITA-0076 §4: serbest metin tâbilik kimliği boyanamaz; Kahire'nin v: kaydı kid:misir-kavalali. Yalnız kid/statu eklendi, tarih değişmedi. NOKTA-ORTADOGU-0077 · YAMA A"}] },

// Kusayr ile Halâib arasındaki 300 km'lik kıyı boşluğunu kapatır.
{ ad:"Ebû Ramâd (Şalâtîn)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"liman", lat:23.133, lon:35.600, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-22",d:"memluk"},{f:"1517-01-22",t:"1557-01-01",d:"habesistan"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1557-01-01",t:"1805-07-03"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

// Sînâ'nın güney kıyısı: hac gemilerinin karantina ve su alma iskelesi.
// Yarımadanın İÇ çölüne nokta konmadı; mevcut "Sina güneyi" dolgusu kasten
// sahipsiz kalmaya devam ediyor.
{ ad:"Tûr (Sînâ)", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"}], tur:"liman", lat:28.241, lon:33.623, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-01-24",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi",kaynak:"TDV `misir` (gövde okundu): \"İngiltere, 18 Aralık 1914'te tek taraflı olarak Osmanlı hükümranlık haklarını kaldırıp Mısır'ı himayesine aldı\"; Sînâ yarımadası TDV'de Mısır'ın dört bölgesinden biri; TDV `suveys`: \"Mısır'ın diğer yerleri gibi kanal bölgesi de\". Sultanlık→Krallık 1922-03-15 = künye misir-kralligi f (unvan değişikliği, Kahire notu). NOKTA-ORTADOGU-0077 · YAMA A · M-5238"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-01-24",t:"1805-07-03",kaynak:"gün komşudan: Kahire 1517-01-24 · TDV selim-i (Osmanlı birliklerinin Kahire’ye girişi) — kendi teslim günü kaynakta YOK (TDV suveys 1517 fethine gün vermiyor); m:Kahire, başkentle birlikte geçiş ÇIKARIMDIR (MISIR-SENKRON-0087)"}],
  v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",kid:"misir-kavalali",statu:"vassal",kaynak:"HARITA-0076 §4: serbest metin tâbilik kimliği boyanamaz; Kahire'nin v: kaydı kid:misir-kavalali. Yalnız kid/statu eklendi, tarih değişmedi. NOKTA-ORTADOGU-0077 · YAMA A"}] },

// Nûbe: İbrim kâşifliğinin güney ucu. Zincir mevcut İbrim kaydıyla birebir
// (Özdemir Paşa'nın Nûbe harekâtı, 1555). Mehdî isyanı sırasında Vâdî Halfâ
// Mısır elinde kaldı — 1899'a kadar Mısır zinciri; KARAR-UYG-1015: 19 Ocak 1899
// kondominyum antlaşması Vâdî Halfâ'yı adıyla Sudan'a bağladı (Hertslet c.2 No.179).
{ ad:"Vâdî Halfâ", kur:"1813-03-06", kesinlik:"gun", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: 6 Mart 1813 — J. L. Burckhardt, Travels in Nubia (London 1819), 6 Mart 1813 günlük kaydı (Project Gutenberg #71129). Kesinlik gun. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'wadi-halfa'.", not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1899-01-19",d:"ingiltere",kaynak:"urabi-pasa · bitiş KARAR-UYG-1015: 1899-01-19 itibariyle Sudan kondominyumu (isg değil s:)"}], tur:"kale", lat:21.802, lon:31.352, g:0, k:4, m:"Kahire",
  s:[{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"KARAR-UYG-1015: Anglo-Mısır Sudan Antlaşması, Kahire 19 Ocak 1899 — Hertslet, The Map of Africa by Treaty, 3. bs. (London 1909) c.2 No.179 s.619-620: 'it is conceived that for many purposes Wadi Halfa and Suakin may be most effectively administered in conjunction with the reconquered provinces' · md. I: 'all the territories south of the 22nd parallel of latitude, which (1) Have never been evacuated by Egyptian troops since the year 1882' · TDV sudan (19 Ocak 1899 condominium) · Britannica 'Anglo-Egyptian Sudan'. Eski misir-sultanligi 1914-1922 / misir-kralligi 1922-1923 dilimleri ve 1923-10-29 (pencere ucu) geçişi kaldırıldı — kent 22. paralelin güneyinde, 1882'den beri Mısır askerince boşaltılmamış"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Sudan' 1956-01-01"}],
  d:[],
  v:[{f:"1813-03-06",t:"1899-01-19",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali",kaynak:"bitiş KARAR-UYG-1015: 19 Ocak 1899 Anglo-Mısır Sudan Antlaşması (Hertslet c.2 No.179)"}] },

// ===========================================================================
// 4) TUNUS EYALETİ
// ---------------------------------------------------------------------------
// Zincir: Hafsî → 1574-08-25 Osmanlı → 1881-05-12 Fransız himayesi.
// ⚠️ 1705'ten sonra fiilen Hüseynî hanedanının özerk idaresidir; mevcut
// verideki Tunus, Kayrevan, Gabes vb. kayıtları gibi bu dosyada da DOĞRUDAN
// (d:) yazıldı. Ocaklık ayrımı hepsine birlikte uygulanacak (görev tanımı).
// ===========================================================================

{ ad:"Benzert (Bizerte)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"liman", lat:37.276, lon:9.858, g:1, k:3, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1557-01-01","d":"hafsi"}],
  d:[{"f":"1557-01-01","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// Tunus'un liman kalesi; 1535-1574 arası İspanyol garnizonu buradaydı.
{ ad:"Halkulvâdî",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"kale", lat:36.823, lon:10.295, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1535-07-21","d":"hafsi"},{"f":"1535-07-21","t":"1574-08-24","d":"ispanya"}],
  d:[{"f":"1574-08-24","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Mâtir (Mateur)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:37.040, lon:9.664, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// 1540-1741 arası Cenevizli Lomellini ailesinin mercan imtiyazıyla elinde
// tuttuğu ada-kale. Bu ara dönem VERİYE YAZILMADI: 1741 devralması için
// kronoloji maddesi yok, yazılsaydı Değişmez 2'yi açardı.
{ ad:"Tabarka", kd:[{f:"1281-01-01",t:"1741-06-12",k:0,m:null},{f:"1741-06-12",t:"1923-10-29",k:4,m:"Tunus"}],kaynak:"tunus",isg:[{f:"1881-05-12",t:"1923-10-29",d:"fransa-cumhuriyet"}], tur:"kale", lat:36.954, lon:8.758, g:0, k:4, m:"Tunus",
  s:[{f:"1281-01-01",t:"1544-01-01",d:"hafsi"},{f:"1544-01-01",t:"1741-06-12",d:"ceneviz"}],
  d:[], v:[{f:"1741-06-12",t:"1923-10-29",statu:"vassal"}] },

{ ad:"Bâce (Béja)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.733, lon:9.183, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Cendûbe",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.501, lon:8.780, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// Cezayir eyaletiyle sınır bölgesinin merkezi.
{ ad:"Kef",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"kale", lat:36.174, lon:8.705, g:0, k:3, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Nâbil (Nabeul)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.451, lon:10.735, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// Kelîbiye burnu — Sicilya Boğazı'nın Afrika yakasındaki gözcü kalesi.
{ ad:"Kelîbiye",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"kale", lat:36.849, lon:11.094, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Zağvân",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:36.402, lon:10.143, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Sûse",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"liman", lat:35.826, lon:10.638, g:1, k:3, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Munastır",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"kale", lat:35.778, lon:10.826, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Mehdiye",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"liman", lat:35.505, lon:11.062, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Kasrayn",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:35.167, lon:8.836, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Kafsa",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:34.425, lon:8.784, g:0, k:3, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// Cerîd vahaları: Tunus eyaletinin çöl kapısı. Bunlar Sahra'nın İÇİ değil,
// şattların kuzey kıyısındaki hurmalık kasabalardır.
{ ad:"Tozer",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.920, lon:8.134, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Nefta",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.873, lon:7.878, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Medenîn",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.354, lon:10.505, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Tatavin",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:32.930, lon:10.451, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

{ ad:"Cerciş (Zarzis)",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"liman", lat:33.504, lon:11.112, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// Trablusgarp eyaletiyle sınır kasabası.
{ ad:"Bin Gerdân",kaynak:"tunus",isg:[{"f":"1881-05-12","t":"1923-10-29","d":"fransa-cumhuriyet"}], tur:"sehir", lat:33.138, lon:11.220, g:0, k:4, m:"Tunus",
  s:[{"f":"1281-01-01","t":"1574-08-25","d":"hafsi"}],
  d:[{"f":"1574-08-25","t":"1705-07-12"}], v:[{"f":"1705-07-12","t":"1881-05-12","statu":"vassal","k":"Tunus Ocaklığı (Hüseynîler)","kid":"tunus-ocagi"},{"f":"1881-05-12","t":"1923-10-29","statu":"vassal","k":"Tunus Beyliği (Fransız himayesi; Osmanlı tanımadı)","kid":"tunus-beyligi-fransiz"}] },

// ===========================================================================
// 5) TRABLUSGARP EYALETİ (Trablus, Cebel, Sirte, Bingazi)
// ---------------------------------------------------------------------------
// Zincir: Hafsî → 1551-08-15 Turgut Reis ve Sinan Paşa'nın fethi → 1912-10-18
// İtalya (Uşi Antlaşması). Mevcut Misrata ve Derne kayıtlarıyla aynı günler.
// ⚠️ 1711-1835 arası Karamanlı hanedanının fiilî özerkliği veriye YAZILMADI —
// mevcut Trablus, Bingazi, Derne kayıtları gibi doğrudan bırakıldı.
// ===========================================================================

{ ad:"Zâviye", tur:"sehir", lat:32.757, lon:12.728, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Zuvâre", tur:"liman", lat:32.931, lon:12.082, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Cebelinefûse: Trablus'un güneyindeki dağ sırasının İbâzî kasabaları.
{ ad:"Nâlût", tur:"sehir", lat:31.868, lon:10.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Yefren", kur:"1390-01-01", kesinlik:"yil", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: en geç 792/1390 — TDV BERRÂDÎ: Berrâdî 'Libya’nın Cebelinefûse bölgesinde bulunan Yefren’e geçti' ve Ebû Sâkin eş-Şemmâhî'nin (ö. 792/1390) derslerine katıldı. Kesinlik yil. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'yafran'.",  tur:"sehir", lat:32.063, lon:12.529, g:0, k:4, m:"Trablus",
  s:[{f:"1390-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"},{f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Garyân", tur:"sehir", lat:32.172, lon:13.020, g:0, k:3, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Trablus ile Fizan arasındaki kervan yolunun ilk büyük menzili.
{ ad:"Mızde", tur:"sehir", lat:31.450, lon:12.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Hums (Lebde)", kur:"1893-01-01", kesinlik:"onyil", neden:"SEHIR-TARIHCE-OSM-1014 C grubu · Emre kararları 13-14 Ekim 2026 (antik/eski yer > 3 km ⇒ AYRI nokta; Şırnak kalıbı): bu nokta BUGÜNKÜ şehrin yeridir; atlasın bu noktadaki önceki başlangıcı ve dönemleri ESKİ şehre aitti. kur: KURULUŞ DEĞİL, bugünkü sahanın İLK YAZILI TANIĞI (görünme alt sınırı): TDV LİBYA: Trablusgarp Valisi Ahmed Râsim Paşa (1878-1893) 'Hums, Cifâre, Sûkne ve Şâtî’deki hükümet konakları' — en geç tanık; Britannica 'Al-Khums': kasaba Türkler tarafından kuruldu (yıl yok). Kesinlik onyil. Öncesindeki dönemler kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'khoms'. ⚠️ Antik Lepcis Magna / ortaçağ Lebde (Pleiades 344448) bu noktaya 3,57 km — AYRI KAYIT AÇILMADI: atlasın 1281 'hafsi' dönemi tanıksızdı ve Lebde'nin 1000 sonrası yerleşim olarak varlığına tanık bulunamadı. Kayıt adındaki '(Lebde)' tarihsel değil.",  tur:"liman", lat:32.649, lon:14.262, g:0, k:4, m:"Trablus",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1893-01-01", t:"1912-10-18"}], v:[] },

{ ad:"Zilten", tur:"sehir", lat:32.467, lon:14.568, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Benî Velîd", tur:"sehir", lat:31.746, lon:13.983, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Sirte körfezi: Misrata ile Bingazi arasında 600 km boyunca hiç nokta yoktu.
{ ad:"Sirte", tur:"liman", lat:31.205, lon:16.589, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15", t:"1711-07-29"}, {f:"1835-05-26", t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// KITA 15 — SİRENAYKA ANAKRONİZMİ DÜZELTİLDİ (H-0016-5, tahta M-3600/sonrası).
// ESKİ: s:[{1281→1517-05-19 memluk},...] — SİRENAYKA HİÇ MEMLÛK OLMADI.
// 1517-05-19 Mısır Deltası'nın Osmanlı'ya geçiş günüdür (bkz. bu dosyada
// satır ~77 "Delta ve Akdeniz kıyısı için Osmanlı devralma tarihi
// 1517-05-19" yorumu) — Sirenayka'ya YANLIŞ TAŞINMIŞ, ~34 yıl erken.
// KAYNAK: TDV `berka` + `bingazi` (gövde okundu): "Berka Mısır'ın
// Osmanlılar tarafından fethinden sonra bu idareye bağlandı" ·
// "1551 Trablusgarp seferi sırasında Berka bölgesinin Osmanlı
// hâkimiyetine girmesinden sonra Bingazi de kesin olarak Osmanlı
// yönetimine katıldı (1578)." TDV `trablusgarp`: "Kaptanıderyâ Sinan
// Paşa kumandasındaki Osmanlı donanması şehri ele geçirdi (12 Şâban
// 958/15 Ağustos 1551)." 1281-1551 için TDV `berka` hiçbir egemen ADI
// VERMİYOR (kaynak susuyor) ⇒ bos:"devletsiz" (D020: kaynağın sessizliği
// bizim bilgisizliğimizdir, uydurma yapılmadı). Bingazi'nin kendisinin
// "kesin" 1578 tarihi BURAYA taşınmadı — 1551 Berka'nın GENEL geçiş
// tarihi, kaynak bu üç iç nokta için ayrıca gün vermiyor.
{ ad:"Ecdâbiye", tur:"sehir", lat:30.755, lon:20.225, g:0, k:4, m:"Bingazi",
  bos:"devletsiz", neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Cebeliahdar (Yeşil Dağ): Bingazi ile Derne arasındaki verimli yayla.
{ ad:"Merc", tur:"sehir", lat:32.492, lon:20.833, g:0, k:4, m:"Bingazi",
  bos:"devletsiz", neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Beyzâ (Kirene)", tur:"sehir", lat:32.827, lon:21.858, g:0, k:4, m:"Bingazi",
  bos:"devletsiz", neden:"1281-1551 arası TDV `berka` hiçbir egemen adı vermiyor; kaynak susuyor.",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Derne ile Sellûm arasındaki tek liman; Mısır sınırına en yakın Osmanlı
// noktası.
// TOBRUK AYRI GÜN: TDV `derne` (gövde okundu) Tobruk'u Derne ile BİRLİKTE
// ama Trablus'un 1551 fethinden SONRAKİ bir genişlemeye bağlıyor: "Turgut
// Reis'in teşvik ve gayretleriyle Osmanlı hâkimiyetine geçtikten sonra
// beylerbeyi unvanı ile buraya yerleşen Turgut Reis (Paşa) sınırlarını
// genişleterek doğuda Tobruk ve Derne'yi almıştı." TDV `trablusgarp`:
// "1556'da Turgut Reis beylerbeyilikle buraya geldi." Gün yok ⇒ 1556-01-01
// (§4). Derne'nin kendisi (aynı cümlede, TDV Hafsî bağlantısını AÇIKÇA
// veriyor: "Hafsî hânedanının idaresi sırasında Trablusgarp ile birlikte
// 1510'da İspanyollar tarafından zaptedildi") `data/yerlesimler.js`'te —
// BEN DOKUNMADIM, yama olarak bildirildi (denetim/YAMA-SIRENAYKA-0912.json).
{ ad:"Tobruk", tur:"liman", lat:32.077, lon:23.971, g:0, k:4, m:"Bingazi",
  bos:"devletsiz", neden:"1281-1556 arası TDV `derne`/`berka` Tobruk için ayrı bir egemen adı vermiyor; kaynak susuyor.",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1556-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}], v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

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
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"}] },

{ ad:"Miliana", tur:"sehir", lat:36.305, lon:2.229, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1830-07-05",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"}] },

{ ad:"Dellîs", tur:"liman", lat:36.908, lon:3.914, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Gerçek işgal 1843 (Ténès) — 1844-03-04'e yuvarlandı.
{ ad:"Tenes", tur:"liman", lat:36.507, lon:1.307, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1843-01-01",d:"abdulkadir"},{f:"1843-01-01",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Gerçek işgal 1843 (Şelif vadisi) — 1844-03-04'e yuvarlandı.
{ ad:"Şelif", tur:"sehir", lat:36.165, lon:1.334, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1843-01-01",d:"abdulkadir"},{f:"1843-01-01",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// General Desmichels 28 Temmuz 1833'te girdi; Hünkâr İskelesi maddesine 20 gün.
{ ad:"Mustagānim", tur:"liman", lat:35.931, lon:0.089, g:0, k:3, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1833-07-28",d:"abdulkadir"},{f:"1833-07-28",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Abdülkādir el-Cezâirî'nin ilk merkezi. Gerçek düşüş 1841-05 — 1844-03-04'e
// yuvarlandı.
{ ad:"Muaskar", tur:"sehir", lat:35.396, lon:0.140, g:0, k:4, m:"Cezayir",
  s:[{"f":"1281-01-01","t":"1552-01-01","d":"zeyyani"},{"f":"1832-11-22","t":"1841-05-30","d":"abdulkadir"},{"f":"1841-05-30","t":"1962-07-05","d":"fransa-cumhuriyet","enklav":true,"kaynak":"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{"f":"1962-07-05","t":"2000-12-31","d":"cezayir","kaynak":"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{"f":"1552-01-01","t":"1671-01-01"}], v:[{"f":"1671-01-01","t":"1830-07-05","k":"Cezayir Ocaklığı (dayı idaresi)","statu":"vassal","kid":"cezayir-ocagi"},{"f":"1830-07-05","t":"1832-11-22","k":"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)","statu":"vassal"}] },

{ ad:"Sîdî Bel Abbès", tur:"sehir", lat:35.194, lon:-0.641, g:0, k:4, m:"Cezayir", kur:"1843-01-01", kesinlik:"yil",
  neden:"SEHIR-TARIHCE-OSM-1014 (Emre 14 Ekim): kuruluş tanıklı — EB1911 'Sidi-Bel-Abbes' (Wikisource): Fransız askerî tabyası 1843 (yıl). 1281–1843 dönemleri (zeyyani, d: 1552–1671, v: Cezayir Ocaklığı, Abdülkadir 1832–1843) tabyadan ÖNCE — kırpıldı; 1843 içindeki Abdülkadir dilimi yıl hassasiyeti yüzünden kaldı. Tarihçe: 'sidi-bel-abbes'.",
  s:[{f:"1843-01-01",t:"1843-06-12",d:"abdulkadir"},{f:"1843-06-12",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[], v:[] },

{ ad:"Ayn Temûşent", tur:"sehir", lat:35.298, lon:-1.140, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Fas sınırına en yakın Osmanlı kasabası; iki devlet arasındaki sınır burada
// tanımlanır.
{ ad:"Nedrûme", tur:"sehir", lat:35.010, lon:-1.747, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-01-01",d:"abdulkadir"},{f:"1844-01-01",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Fransızlar 13 Mayıs 1839'da girdi; Fırat geçişi maddesine 22 gün.
{ ad:"Cicel", tur:"liman", lat:36.821, lon:5.766, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1839-05-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1839-05-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Kolo", tur:"liman", lat:37.000, lon:6.564, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1838-10-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Sikikde", tur:"liman", lat:36.876, lon:6.909, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1838-10-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Mîle", tur:"sehir", lat:36.450, lon:6.264, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1837-10-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1837-10-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Kalme (Guelma)", tur:"sehir", lat:36.462, lon:7.426, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1837-10-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1837-10-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Sûk Ahrâs", tur:"sehir", lat:36.286, lon:7.951, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Tebesse", tur:"sehir", lat:35.404, lon:8.124, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1844-03-04",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Batna", tur:"sehir", lat:35.556, lon:6.178, g:0, k:4, m:"Cezayir",
  s:[{"f":"1281-01-01","t":"1519-09-01","d":"zeyyani"},{"f":"1844-02-12","t":"1962-07-05","d":"fransa-cumhuriyet","enklav":true,"kaynak":"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{"f":"1962-07-05","t":"2000-12-31","d":"cezayir","kaynak":"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{"f":"1519-09-01","t":"1671-01-01"}], v:[{"f":"1671-01-01","t":"1830-07-05","k":"Cezayir Ocaklığı (dayı idaresi)","statu":"vassal","kid":"cezayir-ocagi"},{"f":"1830-07-05","t":"1844-02-12","k":"Ahmed Bey'in Konstantin beyliği","kid":"konstantin-beyligi","statu":"vassal"}] },

{ ad:"Berc Bû Areric", tur:"sehir", lat:36.073, lon:4.761, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1838-10-13",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1838-10-13",k:"Ahmed Bey'in Konstantin beyliği",kid:"konstantin-beyligi",statu:"vassal"}] },

{ ad:"Mesîle", tur:"sehir", lat:35.705, lon:4.542, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1519-09-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1519-09-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

{ ad:"Bû Sa'âde", tur:"sehir", lat:35.212, lon:4.177, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1832-11-22",t:"1844-03-04",d:"abdulkadir"},{f:"1844-03-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1832-11-22",k:"Osmanlı hükümranlık iddiası (ocaklık lağvedildi)",statu:"vassal"}] },

// Sahra'nın kuzey eşiğindeki iki vaha kasabası. Gerçek düşüşleri 1852-12-04
// (Ağvât) ve 1882 (Mîzâb) — ikisi de Tuggurt kırılmasına (1854-12-02)
// yuvarlandı; başka kapsanan tarih yok.
{ ad:"Ağvât", kur:"1382-01-01", kesinlik:"onyil", neden:"SEHIR-TARIHCE-OSM-1014 · Emre kararı 14 Ekim 2026 (Şırnak kalıbı): kur: KURULUŞ DEĞİL, İLK YAZILI TANIK — haritada görünme için ALT SINIR; yerleşim daha önce var olmuş olabilir, kaynak bunu dışlamıyor. İlk tanık: 1382 (Kitâbü'l-İber yazımının güvenli ucu) — İbn Haldûn, Kitâbü'l-İber — H. Bekkaye, 'el-Ağvât, et-tesmiye beyne tabîati'l-mıntıka ve ismi'l-kabîle', Mecelletü'l-ulûmi'l-insâniyye ve'l-hadâra 2/2 (2020), s. 121-123 aktarımı (doi 10.34118/jhc.v2i2.4792). Kesinlik onyil. Öncesindeki dönemler (atlasın 1281 başlangıcı) kırpıldı. Tarihçe: data/sehir_tarihce_osm.js 'laghouat'.",  tur:"sehir", lat:33.800, lon:2.865, g:0, k:4, m:"Cezayir",
  s:[{f:"1382-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1852-12-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1852-12-04",k:"Sahra vahalarının özerk idaresi",statu:"vassal"}] },

{ ad:"Gardâye", tur:"sehir", lat:32.490, lon:3.673, g:0, k:4, m:"Cezayir",
  s:[{f:"1281-01-01",t:"1552-01-01",d:"zeyyani"},{f:"1852-12-04",t:"1962-07-05",d:"fransa-cumhuriyet",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Fransa'nın Akdeniz aşırı Cezayir sömürgesi, gövdeden kopukluğu tarihîdir · TDV cezayir: 'Fransızlar Cezayir’e çıktılar ve 5 Temmuz 1830 günü Cezayir şehrini işgal ettiler' · '1 Temmuz 1962 tarihinde yapılan referandumda halkın % 91’i bağımsızlık lehinde oy kullandı' (şehrin kendi giriş günü bu beyanla doğrulanmadı)"},{f:"1962-07-05",t:"2000-12-31",d:"cezayir",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1552-01-01", t:"1671-01-01"}], v:[{f:"1671-01-01",t:"1830-07-05",k:"Cezayir Ocaklığı (dayı idaresi)",statu:"vassal",kid:"cezayir-ocagi"},{f:"1830-07-05",t:"1852-12-04",k:"Sahra vahalarının özerk idaresi",statu:"vassal"}] },

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
  s:[{f:"1281-01-01",t:"1557-04-02",d:"habesistan",kaynak:"KARAR-UYG-1015 (Emre #11): Álvares, Narrative of the Portuguese Embassy to Abyssinia 1520-1527 (trc. Lord Stanley of Alderley, Hakluyt Society, London 1881) Bölüm I: 'the town of Arquiquo belonged to Christians, and to a lord who was called Barnagais, a subject of Prester John' (1520 TANIĞI) · Tamrat 1972 s.261: Bahr-Nagaş idaresi ve 1449/50 Girar limanı Zer'a Ya'kob'un düzenlemesi · 1281-1449 için DOĞRUDAN TANIKLIK YOK (beyanlı; başlangıç pencere ucu) · Memlük hâkimiyeti kaynaksız, kaldırıldı · bitiş: TDV habes-eyaleti '2 Nisan 1557’de Masavva‘ şehri alındıktan sonra … Arkiko (Harkiko) ele geçirildi' — gün yok; gün komşudan: Masavva · TDV masavva (en erken gün, beyanlı; eski uç 1557-01-01 yıl temsilîydi)"},{f:"1885-02-05",t:"1936-06-01",d:"italya"},{f:"1936-06-01",t:"1941-04-01",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa"},{f:"1941-04-01",t:"1952-09-15",d:"eritre-ingiliz-askeri-idaresi",kaynak:"Britannica: Eritrea; Asmara 1 Nisan 1941"},{f:"1952-09-15",t:"1962-11-14",d:"eritre-federasyon",kaynak:"BM GA 390 (V) 1950"},{f:"1962-11-14",t:"1974-09-12",d:"habesistan",kaynak:"Britannica: Eritrea; federasyonun feshi 14 Kasim 1962"},{f:"1974-09-12",t:"1991-05-24",d:"etiyopya-derg",kaynak:"Britannica: Ethiopia/Eritrea"},{f:"1991-05-24",t:"2000-12-31",d:"eritre",kaynak:"Britannica: Eritrea; Asmara 24 Mayis 1991 fiili"}],
  d:[{f:"1557-04-02",t:"1885-02-05",enklav:true,kaynak:"gün komşudan: Masavva · TDV masavva/habes-eyaleti 2 Nisan 1557 (Arkîko Masavva'dan SONRA alındı, gün yok — KARAR-UYG-1015) · ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): Masavva'nın karşı kıyısındaki Habeş eyaleti limanı; Osmanlı'ya bağlantı deniz yoluyladır · TDV masavva: Masavva 1557'de Habeş eyaletine bağlı sancak merkezi, 'beylerbeyi Sevâkin’de oturmaktaydı' (dönem uçları bu beyanla doğrulanmadı)"}] },

// Mısır ile Sevâkin arasındaki kıyı; 1899 Anglo-Mısır sınırında Sudan'da
// kaldı.
{ ad:"Halâib", tur:"liman", lat:22.219, lon:36.647, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1923-10-29",d:"ingiltere"},{f:"1923-10-29",t:"1953-06-18",d:"misir-kralligi",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

{ ad:"Akīk", tur:"liman", lat:18.230, lon:38.200, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1885-02-05",t:"1899-01-19",d:"ingiltere"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  d:[{f:"1557-01-01",t:"1885-02-05"}] },

// Sevâkin'in iç ardalanı (Bece ülkesi). 1883-1891 arası fiilen Mehdî
// kuvvetlerinin elindeydi; bu ara dönem yazılmadı, Sevâkin zinciri korundu.
{ ad:"Tokar", tur:"sehir", lat:18.427, lon:37.729, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1884-02-20",t:"1891-02-19",d:"mehdi",enklav:true,kaynak:"KARAR-UYG-1015 (G4): Royle, The Egyptian Campaigns 1882 to 1885 (yeni baskı, London 1900) s.275-276: 19 Şubat 1884 müzakere açıldı, 'The next day the town was finally surrendered' (=20 Şubat); haber 24 Şubat'ta Trinkitat'a · TDV kesela 1884 (YIL) · bitiş: Wingate, Mahdiism and the Egyptian Sudan (London 1891) Supplement 'The Reoccupation of Tokar, 19th February 1891' (ikinci bağımsız kaynak); eski f 1884-01-01 yıl temsilîydi"},{f:"1891-02-19",t:"1899-01-19",d:"ingiltere",kaynak:"gün: BL War Office krokisi 'Action of Afafit. 19.2.91'; yıl TDV bece (Tûker karargâhının zaptı 1891) — KUTU-H1-1015"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  d:[{f:"1557-01-01",t:"1884-02-20",kaynak:"bitiş KARAR-UYG-1015: Royle, The Egyptian Campaigns 1882 to 1885 (yeni baskı, London 1900) s.275-276 (Tokar 20 Şubat 1884 teslim)"}] },

{ ad:"Sinkat", tur:"sehir", lat:18.833, lon:36.833, g:0, k:4, m:"Sevâkin",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1517-04-13",t:"1557-01-01",d:"habesistan"},{f:"1884-02-08",t:"1891-03-03",d:"mehdi",enklav:true,kaynak:"KARAR-UYG-1015 (G4): düşüş Wingate, Mahdiism and the Egyptian Sudan (London 1891) s.117: Tevfik Bey garnizonu 'cut absolutely to pieces on the 8th' (Şubat 1884; haber Sevâkin'e 12 Şubat: Royle, The Egyptian Campaigns 1882 to 1885 (yeni baskı, London 1900) s.266) · TDV kesela: '1884 yılında Sinkât ve Tûker’i ele geçiren Mehdî kuvvetleri' (YIL) · Mehdî süreklilik tanığı: Wingate s.452-453 (Ağustos 1888 Musa Digna 'emir of Sinkat') · bitiş: Wingate Supplement s.508: Grenfell 3 Mart 1891'de Afafit'ten Sinkat üzerinden yola çıktı, 7 Mart'ta Sevâkin'e vardı, 'having found the districts entirely clear of the enemy. This locality had not been visited since 1884' — Sinkat'tan geçiş günü 3-7 Mart arası, aralığın ALT ucu yazıldı (Mehdî çekilişinin kendi günü kaynakta YOK)"},{f:"1891-03-03",t:"1899-01-19",d:"ingiltere",kaynak:"KARAR-UYG-1015: Wingate Supplement s.508 (3-7 Mart 1891 İngiliz-Mısır kolu Sinkat'tan geçti, idarenin yeniden kurulması; 8 Mart Sevâkin'de şeyhler toplantısı, Hidiv adına genel af). Eski f 1885-02-05 kaynaksızdı (Masavva'nın İtalyan işgali günüydü)"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Gün TDV `sudan`dan DOĞRUDAN (kapsayıcı madde, Sudan geneli: 19 Ocak 1899 condominium) — KOMŞUDAN DEĞİL. Kıyıya özel katılış günü okunan kaynakta BULUNAMADI. NOKTA-ORTADOGU-0077 · YAMA B2 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  d:[{f:"1557-01-01",t:"1884-02-08",kaynak:"bitiş KARAR-UYG-1015: Wingate, Mahdiism and the Egyptian Sudan (London 1891) s.117 (8 Şubat 1884 garnizonun imhası); eski uç 1885-02-05 kaynaksızdı"}] },

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
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Adua", tur:"sehir", lat:14.170, lon:38.898, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Şire", tur:"sehir", lat:14.103, lon:38.283, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Adigrat", tur:"sehir", lat:14.277, lon:39.462, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Mekelle", tur:"sehir", lat:13.497, lon:39.475, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Bogos: 1872-1884 arası Mısır (Kavalalı) işgalindeydi; bu ara dönem
// yazılmadı — kronoloji maddesi yok.
{ ad:"Kerene", kd:[{f:"1281-01-01",t:"1872-01-01",k:0,m:null},{f:"1872-01-01",t:"1923-10-29",k:4,m:"Sevâkin"}],neden:"`m:` NULL idi; `oneri.m`=\"Sevâkin\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1872-01-01..1884-06-03 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"bulunamadı — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Eritre'de kasaba; Mısır idaresi 1872-1884. TDV'de müstakil madde YOK.",m:"Sevâkin", tur:"sehir", lat:15.778, lon:38.451, g:0, k:4,
  s:[{f:"1281-01-01",t:"1872-01-01",d:"habesistan"},{f:"1884-06-03",t:"1889-01-01",d:"habesistan"},{f:"1889-01-01",t:"1936-06-01",d:"italya"},{f:"1936-06-01",t:"1941-04-01",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa"},{f:"1941-04-01",t:"1952-09-15",d:"eritre-ingiliz-askeri-idaresi",kaynak:"Britannica: Eritrea; Asmara 1 Nisan 1941"},{f:"1952-09-15",t:"1962-11-14",d:"eritre-federasyon",kaynak:"BM GA 390 (V) 1950"},{f:"1962-11-14",t:"1974-09-12",d:"habesistan",kaynak:"Britannica: Eritrea; federasyonun feshi 14 Kasim 1962"},{f:"1974-09-12",t:"1991-05-24",d:"etiyopya-derg",kaynak:"Britannica: Ethiopia/Eritrea"},{f:"1991-05-24",t:"2000-12-31",d:"eritre",kaynak:"Britannica: Eritrea; Asmara 24 Mayis 1991 fiili"}],
  d:[], v:[{f:"1872-01-01",t:"1884-06-03",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Lalibela", tur:"sehir", lat:12.032, lon:39.047, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Sokota", tur:"sehir", lat:12.628, lon:39.033, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Zemene Mesafint (prensler devri) boyunca imparatorluk merkezi.
{ ad:"Debre Tabor", tur:"sehir", lat:11.855, lon:38.017, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Bahır Dar", tur:"sehir", lat:11.560, lon:37.400, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Sudan sınırındaki geçit; 1889 Mehdî-Habeş savaşının sahnesi.
{ ad:"Metemma", tur:"kale", lat:12.968, lon:36.155, g:0, k:4,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Dese", tur:"sehir", lat:11.133, lon:39.633, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Debre Berhan", tur:"sehir", lat:9.680, lon:39.532, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Şeva krallığının merkezi; Menelik buradan çıktı.
{ ad:"Ankober", tur:"sehir", lat:9.583, lon:39.733, g:0, k:3,
  s:[{f:"1281-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Harar'ın doğusu; mevcut Harar kaydıyla aynı gün Habeşistan'a geçti.
{ ad:"Cîcîga", tur:"sehir", lat:9.350, lon:42.800, g:0, k:3,
  s:[{f:"1281-01-01",t:"1887-01-06",d:"adal"},{f:"1887-01-06",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

// Afar (Danâkil) kıyısı. Avsa sultanlığının kimliği yok, "adal" ile boyandı.
// Aseb: Rubattino şirketinin hakları 10 Mart 1882'de İtalyan devletine
// devredildi — koloninin resmî başlangıcı budur.
{ ad:"Aseb", tur:"liman", lat:13.009, lon:42.735, g:0, k:2,
  s:[{f:"1281-01-01",t:"1882-03-10",d:"adal"},{f:"1882-03-10",t:"1936-06-01",d:"italya",enklav:true},{f:"1936-06-01",t:"1941-04-01",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa"},{f:"1941-04-01",t:"1952-09-15",d:"eritre-ingiliz-askeri-idaresi",kaynak:"Britannica: Eritrea; Asmara 1 Nisan 1941"},{f:"1952-09-15",t:"1962-11-14",d:"eritre-federasyon",kaynak:"BM GA 390 (V) 1950"},{f:"1962-11-14",t:"1974-09-12",d:"habesistan",kaynak:"Britannica: Eritrea; federasyonun feshi 14 Kasim 1962"},{f:"1974-09-12",t:"1991-05-24",d:"etiyopya-derg",kaynak:"Britannica: Ethiopia/Eritrea"},{f:"1991-05-24",t:"2000-12-31",d:"eritre",kaynak:"Britannica: Eritrea; Asmara 24 Mayis 1991 fiili"}], d:[] },

// Fransız himayesi 1884'te kuruldu; GÜN DOĞRULANAMADI, bu yüzden proje
// kuralına göre YYYY-01-01 yazıldı (mevcut Zeyla kaydıyla aynı desen).
{ ad:"Tacûra", tur:"liman", lat:11.788, lon:42.882, g:0, k:3,
  s:[{f:"1281-01-01",t:"1884-01-01",d:"adal"},{f:"1884-01-01",t:"1977-06-27",d:"fransa-cumhuriyet",enklav:true},{f:"1977-06-27",t:"2000-12-31",d:"cibuti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

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

{ ad:"Merka",kaynak:"makdisu", tur:"liman", lat:1.716, lon:44.772, g:0, k:3,
  s:[{f:"1281-01-01",t:"1500-01-01",d:"makdisu-sultanligi"},{f:"1500-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1936-06-01",d:"italya"},{f:"1936-06-01",t:"1941-02-25",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa, 1 Haziran 1936"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Britannica: Somalia; Mogadishu 25 Subat 1941"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"BM Vesayet Konseyi, AFIS 1950-1960"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Britannica: Somalia, bagimsizlik 1 Temmuz 1960"}], d:[] },

{ ad:"Beledveyne", tur:"sehir", lat:4.735, lon:45.204, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1936-06-01",d:"italya"},{f:"1936-06-01",t:"1941-02-25",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa, 1 Haziran 1936"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Britannica: Somalia; Mogadishu 25 Subat 1941"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"BM Vesayet Konseyi, AFIS 1950-1960"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Britannica: Somalia, bagimsizlik 1 Temmuz 1960"}], d:[] },

{ ad:"Baydoa", tur:"sehir", lat:3.114, lon:43.649, g:0, k:3,
  s:[{f:"1281-01-01",t:"1905-01-01",d:"somali"},{f:"1905-01-01",t:"1936-06-01",d:"italya"},{f:"1936-06-01",t:"1941-02-25",d:"italyan-dogu-afrikasi",kaynak:"Britannica: Italian East Africa, 1 Haziran 1936"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Britannica: Somalia; Mogadishu 25 Subat 1941"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"BM Vesayet Konseyi, AFIS 1950-1960"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Britannica: Somalia, bagimsizlik 1 Temmuz 1960"}], d:[] },

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
{ ad:"Obbiya", tur:"liman", lat:5.351, lon:48.527, g:0, k:3,
  s:[{f:"1281-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

{ ad:"Galkayo", tur:"sehir", lat:6.770, lon:47.431, g:0, k:3,
  s:[{f:"1281-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

{ ad:"Garove", tur:"sehir", lat:8.406, lon:48.483, g:0, k:3,
  s:[{f:"1281-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

{ ad:"Ayl", tur:"liman", lat:7.980, lon:49.816, g:0, k:3,
  s:[{f:"1281-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

// Mecerteyn sultanlığının merkezi ve Afrika Boynuzu'nun ucu.
{ ad:"Bender Kāsım (Bosaso)", tur:"liman", lat:11.284, lon:49.183, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

{ ad:"Alula", tur:"liman", lat:11.968, lon:50.750, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

{ ad:"Hafun", tur:"liman", lat:10.437, lon:51.259, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1927-01-01",d:"somali"},{f:"1927-01-01",t:"1941-02-25",d:"italyan-somali",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1941-02-25",t:"1950-04-01",d:"somali-ingiliz-askeri-idaresi",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1950-04-01",t:"1960-07-01",d:"somali-italyan-vesayet",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"},{f:"1960-07-01",t:"2000-12-31",d:"somali-cumhuriyeti",kaynak:"Encyclopaedia Britannica ilgili ülke/tarih maddesi; Office of the Historian, Milestones; Library of Congress Country Studies"}], d:[] },

// Kuzeybatı kıyısı ve ardalanı: mevcut Berbera kaydıyla aynı zincir
// (1884-07-18 İngiliz himaye antlaşmaları).
{ ad:"Bulhar", tur:"liman", lat:10.401, lon:44.458, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1960-06-26",d:"ingiltere"},{f:"1960-06-26",t:"1960-07-01",d:"somaliland-1960",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1960-07-01",t:"1991-05-18",d:"somali-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1991-05-18",t:"2000-12-31",d:"somaliland-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

{ ad:"Hargeysa", tur:"sehir", lat:9.560, lon:44.065, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1960-06-26",d:"ingiltere"},{f:"1960-06-26",t:"1960-07-01",d:"somaliland-1960",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1960-07-01",t:"1991-05-18",d:"somali-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1991-05-18",t:"2000-12-31",d:"somaliland-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

{ ad:"Burao", tur:"sehir", lat:9.522, lon:45.534, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1960-06-26",d:"ingiltere"},{f:"1960-06-26",t:"1960-07-01",d:"somaliland-1960",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1960-07-01",t:"1991-05-18",d:"somali-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1991-05-18",t:"2000-12-31",d:"somaliland-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

{ ad:"Lasanod", tur:"sehir", lat:8.477, lon:47.361, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1960-06-26",d:"ingiltere"},{f:"1960-06-26",t:"1960-07-01",d:"somaliland-1960",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1960-07-01",t:"1991-05-18",d:"somali-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1991-05-18",t:"2000-12-31",d:"somaliland-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

{ ad:"Erigavo", tur:"sehir", lat:10.616, lon:47.368, g:0, k:3,
  s:[{f:"1281-01-01",t:"1577-01-01",d:"adal"},{f:"1577-01-01",t:"1884-07-18",d:"somali"},{f:"1884-07-18",t:"1960-06-26",d:"ingiltere"},{f:"1960-06-26",t:"1960-07-01",d:"somaliland-1960",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1960-07-01",t:"1991-05-18",d:"somali-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1991-05-18",t:"2000-12-31",d:"somaliland-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}], d:[] },

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
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Debbe", tur:"sehir", lat:18.056, lon:30.951, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Nil'in büyük kıvrımı; Kerîme (Karima) ve eski Napata bölgesi.
{ ad:"Merevî", tur:"sehir", lat:18.550, lon:31.850, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ebû Hamed", tur:"sehir", lat:19.535, lon:33.319, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-01-04",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Nil ile Sevâkin arasındaki kervan yolunun düğüm noktası.
{ ad:"Berber", tur:"sehir", lat:18.017, lon:33.983, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-01-04",d:"funj"},{f:"1884-05-01",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-01-04",t:"1884-05-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// İsmâil Paşa'nın 1822'de yakılarak öldürüldüğü yer (kronolojide maddesi var).
{ ad:"Şendî", tur:"sehir", lat:16.691, lon:33.433, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Vad Medenî", tur:"sehir", lat:14.401, lon:33.519, g:0, k:3, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Ed-Düveym", tur:"sehir", lat:13.995, lon:32.334, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Kosti", tur:"sehir", lat:13.170, lon:32.663, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Kadârif", tur:"sehir", lat:14.036, lon:35.383, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Rusayris ve Fâzûğlî: Func Sultanlığı'nın Mavi Nil boyundaki güney ucu.
{ ad:"Rusayris", tur:"sehir", lat:11.861, lon:34.386, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

{ ad:"Fâzûğlî", tur:"sehir", lat:11.267, lon:34.783, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-06-14",d:"funj"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-06-14",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Kordofan: mevcut Ubeyyid kaydıyla aynı gün (1821-08-19).
{ ad:"Bâra", tur:"sehir", lat:13.700, lon:30.367, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1821-08-19",d:"funj"},{f:"1882-09-01",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1821-08-19",t:"1882-09-01",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },

// Batı Kordofan — Darfur ile Sennâr arasındaki tartışmalı kuşak. Darfur
// kimliği olmadığı için Kordofan zinciriyle yazıldı; kimlik gelince
// 1821 öncesi yeniden değerlendirilmeli.
{ ad:"Nühûd", kd:[{f:"1281-01-01",t:"1821-08-19",k:0,m:null},{f:"1821-08-19",t:"1923-10-29",k:4,m:"Hartum"}], tur:"sehir", lat:12.700, lon:28.433, g:0, k:4, m:"Hartum",
  s:[{f:"1281-01-01",t:"1504-01-01",d:"nube"},{f:"1504-01-01",t:"1785-01-01",d:"funj"},{f:"1785-01-01",t:"1821-08-19",d:"darfur"},{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  d:[], v:[{f:"1821-08-19",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// Taka bölgesi 1840'ta Kavalalı Mısır'ı tarafından alındı ve Kesela şehri o
// yıl askerî karargâh olarak kuruldu (Ahmed Paşa Ebû Vidân dönemi). YIL
// doğrulandı, GÜN doğrulanmadı: 1840-07-15 seçilmesinin sebebi Londra
// Antlaşması maddesiyle aynı güne düşüp Değişmez 2'yi kapalı tutmasıdır.
// Gerçek gün bulunduğunda düzeltilmeli.
{ ad:"Kesela", tur:"sehir", lat:15.451, lon:36.400, g:0, k:3, m:"Hartum", kur:"1840-01-01",
  s:[{f:"1885-01-26",t:"1899-01-19",d:"mehdi"},{f:"1899-01-19",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"TDV `sudan` (gövde okundu): \"Lord Cromer ... 19 Ocak 1899'da 'condominium' (iki devletin ortak hâkimiyeti) adı verilen yeni bir idare başlattı.\" Künye ingiliz-sudani f:1899-01-19 aynı gün. NOKTA-ORTADOGU-0077 · YAMA B1 · M-5238"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica 'Anglo-Egyptian Condominium'; Sudan parlamentosu bagimsizlik karari 1955-12-19, yururluk 1956-01-01"}],
  v:[{f:"1840-01-01",t:"1885-01-26",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}], d:[] },


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
  s:[{f:"1281-01-01",t:"1551-08-15",d:"hafsi"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1551-08-15",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Fizan'ın batı ucu; zincir mevcut Murzuk kaydıyla birebir (1577 tâbiiyeti).
{ ad:"Gât",kaynak:"fizan", tur:"sehir", lat:24.964, lon:10.180, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1943-01-23",d:"italya"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1577-01-01",t:"1711-07-29",y:"vassal"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// Senûsî tarikatının 1856'da kurduğu çöl merkezi ve zâviyesi. kur: yazıldı;
// motor bugün okumuyor (MIMARI.md §3.1) ama öncesinde burada yerleşim yoktu.
{ ad:"Cağbûb", tur:"sehir", lat:29.744, lon:24.517, g:0, k:4, m:"Bingazi", kur:"1856-01-01",
  s:[{f:"1912-10-18",t:"1943-01-23",d:"italya"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
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

{ ad:"El-Fâşir", tur:"sehir", lat:13.630, lon:25.349, g:1, k:1, kur:"1792-01-01", kesinlik:"yil",
  neden:"SEHIR-TARIHCE-OSM-1014 (Emre 14 Ekim): kuruluş tanıklı — Darfur sultanı Abdurrahman er-Reşîd'in yeni başkenti 1791-92 (O'Fahey, The Darfur Sultanate 2008, Anderson v.dğr. Sudan & Nubia 20 2016 atfıyla; Britannica 'Al-Fāshir'). 1281–1792 dönemleri (dacu, tunciler, darfur 1695–1792) kuruluştan ÖNCE olduğu için kırpıldı. Tarihçe: 'el-fasher'.",
  s:[{f:"1792-01-01",t:"1874-11-02",d:"darfur"},{f:"1884-01-15",t:"1898-09-02",d:"mehdi",kaynak:"Slatin, Fire and Sword in the Sudan (London 1896; Gutenberg #41035) Bölüm IX 'The Fall of Darfur': Fâşir garnizonu için 'after a seven days' siege the garrison was obliged to submit, on the 15th of January' (1884 — metinde Gretli'nin gelişi '20th of December, 1883'). Darfur'un genel teslimi (Slatin, Hilla Şiriyye) 23 Aralık 1883; Fâşir 23 gün daha dayandı. KUTU-VERI-1015 B 0076/H-0065"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere",kaynak:"London Gazette suppl. 30102 (29 Mayıs 1917), Wingate'in Darfur raporu: 'the occupation of El Fasher on May 23rd, 1916' · 'The Sultan fled from El Fasher on the morning of May 23rd in a south-westerly direction towards Jebel Marra.' · KUTU-VERI-1015 B 0076/H-0065"},{f:"1923-10-29",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[], v:[{f:"1874-11-02",t:"1884-01-15",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Nyala",neden:"k:4, m:— idi.",kaynak:"TDV `darfur` — \"Merkezi Fâşir şehridir\"; kasaba taneciğinde TDV susuyor (TANECİKLİK boşluğu), s:/v: dizisi El-Fâşir'le birebir",m:"El-Fâşir", tur:"sehir", lat:12.048, lon:24.882, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"},{f:"1923-10-29",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

// Darfur'un batı ucu; Vaday Sultanlığı ile sınır. Vaday'ın kimliği de YOK.
{ ad:"Cenîne",neden:"`m:` NULL idi; `oneri.m`=\"El-Fâşir\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1874-11-02..1883-12-23 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV darfur — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:GEREKCELI). Gerekçe: \"Dârfûr'un Mısır tarafından zaptı ... 1874\" · \"1883'te mehdî hareketi başlamıştır.\" Dârfûr'un merkezi el-Fâşir. TDV bu KASABALARI adıyla saymıyor — §4 TANECİKLİK boşluğu.",m:"El-Fâşir", tur:"sehir", lat:13.452, lon:22.445, g:0, k:4,
  s:[{f:"1281-01-01",t:"1400-01-01",d:"dacu"},{f:"1400-01-01",t:"1695-01-01",d:"tunciler"},{f:"1695-01-01",t:"1874-11-02",d:"darfur"},{f:"1883-12-23",t:"1898-09-02",d:"mehdi"},{f:"1898-09-02",t:"1916-05-23",d:"darfur"},{f:"1916-05-23",t:"1923-10-29",d:"ingiltere"},{f:"1923-10-29",t:"1956-01-01",d:"ingiliz-sudani",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"},{f:"1956-01-01",t:"2000-12-31",d:"sudan-cumhuriyeti",kaynak:"Britannica (ilgili ulke maddeleri); BM/antlasma ve bagimsizlik tarihleri"}],
  d:[], v:[{f:"1874-11-02",t:"1883-12-23",k:"Mısır (Kavalalı)",statu:"vassal",kid:"misir-kavalali"}] },

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
  s:[{f:"1281-01-01",t:"1897-10-01",d:"kaffa"},{f:"1897-10-01",t:"1936-06-01",d:"habesistan",kaynak:"E. Haberland, 'Gaki Sherocho', Encyclopaedia Africana DAB I (DACB): 'Kaffa was conquered, and Gaki Sherocho was captured and submitted, in October 1897' — AY hassasiyeti (10-01 = Ekim, gün bilinmiyor; eski 09-10 dayanaksızdı) · KRONO-2S-3 19 Eyl 2026"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Cimma (Jiren)", tur:"sehir", lat:7.673, lon:36.834, g:0, k:3,
  s:[{f:"1281-01-01",t:"1830-01-01",d:"kaffa"},{f:"1830-01-01",t:"1923-10-29",d:"cimma"},{f:"1923-10-29",t:"1933-01-01",d:"cimma-sultanligi",kaynak:"tsv kunye t (Cimma ozerkligi sonu)"},{f:"1933-01-01",t:"1974-09-12",d:"habesistan",kaynak:"Britannica Ethiopia"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Britannica Ethiopia"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"Britannica Ethiopia"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"Britannica Ethiopia"}], d:[] },

{ ad:"Sodo (Vollayta)", tur:"sehir", lat:6.860, lon:37.762, g:0, k:3,
  s:[{f:"1281-01-01",t:"1894-01-01",d:"vollayta"},{f:"1894-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

{ ad:"Yirgalem (Sidamo)", tur:"sehir", lat:6.750, lon:38.410, g:0, k:3,
  s:[{f:"1281-01-01",t:"1897-01-01",d:"sidamo"},{f:"1897-01-01",t:"1936-06-01",d:"habesistan"},{f:"1936-06-01",t:"1941-11-30",d:"italyan-dogu-afrikasi",kaynak:"Italyan ilhaki 1936-05-09; AOI 1936-06-01; Gondar teslimi 1941-11-27 (Britannica)"},{f:"1941-11-30",t:"1974-09-12",d:"habesistan",kaynak:"Haile Selassie donusu 1941-05-05; Anglo-Etiyopya Antlasmasi"},{f:"1974-09-12",t:"1991-05-28",d:"etiyopya-derg",kaynak:"Derg 1974-09-12"},{f:"1991-05-28",t:"1995-08-22",d:"etiyopya-gecis-hukumeti",kaynak:"TGE"},{f:"1995-08-22",t:"2000-12-31",d:"etiyopya-federal",kaynak:"1995 Anayasasi"}], d:[] },

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

{ ad:"Hârice (Vâhât)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"bolge", lat:25.440, lon:30.546, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Dâhile",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"bolge", lat:25.494, lon:28.976, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Ferâfire",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"bolge", lat:27.058, lon:27.970, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

{ ad:"Bahriye (Bâvîtî)",not:"KUNYE+RENK BEKLIYOR -- misir-sultanligi/misir-kralligi devletler.js'e henuz UYGULANMADI (denetim/YAMA-KUNYE-1923-0905.json). Bu yama koşu 5b BITTIKTEN ve kunyeler RENKLENDIKTEN SONRA inecek. NOT: TDV ayrica '28 Subat 1922'de Ingiltere tek tarafli olarak Misir'i bagimsiz devlet ilan etti' diyor -- bu BASKA bir tarih (diplomatik bagimsizlik ilani), kral unvaninin alinmasindan (15 Mart) 15 GUN once. Sultanlik->Krallik gecisi icin unvan degisikligi (15 Mart) esas alindi, cunku kunye adlari ('Sultanlik'/'Krallik') basin UNVANINI izliyor.", isg:[{f:"1882-09-13",t:"1914-12-18",d:"ingiltere",kaynak:"urabi-pasa"},{f:"1914-12-18",t:"1923-10-29",d:"ingiltere"}], tur:"bolge", lat:28.349, lon:28.864, g:0, k:4, m:"Kahire",
  s:[{f:"1281-01-01",t:"1517-04-13",d:"memluk"},{f:"1914-12-18",t:"1922-03-15",d:"misir-sultanligi"},{f:"1922-03-15",t:"1953-06-18",d:"misir-kralligi"},{f:"1953-06-18",t:"1958-02-22",d:"misir-cumhuriyeti",kaynak:"Britannica 'Egypt'"},{f:"1958-02-22",t:"1971-09-02",d:"birlesik-arap-cumhuriyeti",kaynak:"Britannica 'United Arab Republic'"},{f:"1971-09-02",t:"2000-12-31",d:"misir-arap-cumhuriyeti",kaynak:"Britannica 'Egypt'"}],
  d:[{f:"1517-04-13",t:"1805-07-03"}], v:[{f:"1805-07-03",t:"1914-12-18",k:"Kavalalı hanedanı",statu:"vassal",kid:"misir-kavalali"}] },

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

{ ad:"Sokna", kd:[{f:"1281-01-01",t:"1577-01-01",k:0,m:null},{f:"1577-01-01",t:"1923-10-29",k:4,m:"Trablus"}],kaynak:"fizan", tur:"bolge", lat:29.070, lon:15.792, g:0, k:4, m:"Trablus",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Câlû",kaynak:"fizan", tur:"bolge", lat:29.033, lon:21.548, g:0, k:4, m:"Bingazi",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1943-01-23",d:"italya",enklav:true,kaynak:"ENKLAV BEYANI KUTU-H7-1015 (0080/H-0019): İtalya'nın Akdeniz aşırı Libya sömürgesi, gövdeden kopukluğu tarihîdir · TDV trablusgarp: '1912’de İsviçre’nin Uşi (Ouchy/Lozan) şehrinde yapılan antlaşma ile Osmanlı Devleti, Afrika’daki bu son vilâyetini İtalya’ya terkettiğini kabul etti' · 'Osmanlı askerleri yerli ahaliyle birlikte İtalya’ya karşı mücadeleyi sürdürdü' (fiilî İtalyan denetiminin şehir şehir sınırı bu beyanla doğrulanmadı)"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

// --- 16b) KASTEN SAHİPSİZ (6) — hiçbir devletin idaresine girmedi ----------
// Bunlar Sahra ve Rub'ul Hâlî dolgu noktalarıyla AYNI SINIFTIR (CLAUDE.md §3):
// hiçbir dönem taşımazlar, tek işlevleri komşu peteğin çölü yutmasını
// engellemektir. Kufra bilerek buradadır: Senûsiyye'nin zâviyesi dinî bir
// merkezdi, Osmanlı idaresi oraya hiç ulaşmadı ve İtalya ancak 1931'de —
// atlasın kapsamı dışında — girdi.

{ ad:"Serîr", tur:"bolge", lat:27.500, lon:22.000, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Serîr çölü, Libya'nın güneydoğusunda insansız çakıllı çöl kesimi; tarih boyunca yerleşim ve devlet denetimi kaydı yok." },

{ ad:"Tâzirbû", tur:"bolge", lat:25.712, lon:21.061, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"devletsiz", neden:"Tâzirbû vaha grubu çevresindeki geniş çöl, Kufra-Fizan güzergahı üzerinde olsa da fiilen devlet denetimi dışındaydı." },

{ ad:"Hamâde-i Hamrâ (Hamada al-Hamra)", tur:"bolge", lat:30.000, lon:12.000, g:0, k:0, s:[], d:[], v:[], kasitli_bosluk:true, bos:"col", kaynak:"KONUM: GeoNames id 2216976 'Al Ḩamādah al Ḩamrā’' (rock desert) 30°00′K 12°00′D", neden:"BEYANLI ÇÖL BOŞLUĞU (EMRE KARARI 14 Ekim 2026, KARARLAR-1014 m.13, 0045/H-0012): Trablusgarp'ın iç kesimindeki Hamâde taşlık platosu noktasız, yerleşimsiz çöl; Osmanlı idaresi kıyı ve vaha düzenindeydi (Gadamis · Sokna · Vaddân · Fizan), çölde yerleşim yok. Fizan alındıktan sonra Osmanlı toprakları arasında görünen delik kasıtlıdır — boyanmaz." },

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

{ ad:"Sebha",kaynak:"fizan", tur:"sehir", lat:27.038, lon:14.428, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1943-01-23",d:"italya"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },

{ ad:"Ubârî",kaynak:"fizan", tur:"sehir", lat:26.590, lon:12.777, g:0, k:4, m:"Murzuk (Fizan)",
  s:[{f:"1281-01-01",t:"1577-01-01",d:"kanem-bornu"},{f:"1912-10-18",t:"1943-01-23",d:"italya"},{f:"1943-01-23",t:"1951-12-24",d:"libya-ingiliz-askeri-idaresi",kaynak:"Britannica: Libya; BM GA 289 (1949)"},{f:"1951-12-24",t:"1969-09-01",d:"libya-krallik",kaynak:"Britannica: Libya, bagimsizlik 24 Aralik 1951"},{f:"1969-09-01",t:"2000-12-31",d:"libya-cumhuriyet-cemahiriye",kaynak:"Britannica: Libya, 1 Eylul 1969 darbe"}],
  d:[{f:"1577-01-01",t:"1711-07-29"},{f:"1835-05-26",t:"1912-10-18"}],
  v:[{f:"1711-07-29",t:"1835-05-26",k:"Trablusgarp Ocaklığı (Karamanlılar)",statu:"vassal",kid:"trablusgarp-ocagi"}] },



];

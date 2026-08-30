// window.YER_YAMA_KADEME_ZINCIR — KADEME ZİNCİRİ oturumu, 28 Ağustos 2026
//
// 15/65 kayıt TDV kaynağıyla doğrulanıp yazıldı. Kalan 50'i için veri-içi
// adaylar denetim/BULGU-KADEME-ZINCIR.md'de — henüz TDV/akademik kaynakla
// okunmadı, o yüzden buraya YAZILMADI (CLAUDE.md §4 kırmızı çizgi).
//
// 🔴 DÜZELTME (M-1442, YAMA KURTARMA): önceki sürüm bitişik dizge
// literalleri kullanmıştı (Python tarzı örtük birleştirme) — JS bunu
// YAPMAZ, `+` şart. node --check ile doğrulandı.

window.YER_YAMA_KADEME_ZINCIR = [
// ── KIRIM: KEFE SANCAĞI (doğrudan Osmanlı, d: alanı zaten bunu gösteriyor) ──
{ad:"Mankup", m:"Kefe",
 kaynak:"TDV `kefe` — \"XVI. yüzyılda Mangub, Suğdak, Kerç, Azak ve Taman adlı beş kaza mevcuttu\" · \"Kefe, Osmanlı'nın Kırım'da doğrudan yönetim kurduğu bölgenin merkezi konumundaydı\"",
 neden:"k:3, m:— idi. İLK TASLAĞIM Bahçesaray'dı (Kırım Hanlığı başkenti) — TDV okununca YANLIŞ çıktı: Mankup'un kendi verisi zaten d: (doğrudan Osmanlı) diyor, v: (tâbi/Hanlık) değil. TDV bunu doğruluyor: Mankup Kefe sancağının kazasıydı, Kırım Hanlığı'nın değil. Bu düzeltme AYRICA İnkirman'ı da kapatıyor: veride zaten m:'Mankup' yazılıydı ve TDV bunu da doğruluyor ('Balıklagu ve İnkerman da Mangub'a bağlı şehirlerdi')."},

// ── KIRIM: HANLIK TOPRAĞI (v: tâbi dönemi, Bahçesaray başkent) ──
{ad:"Gözleve (Kezlev)", m:"Bahçesaray",
 kaynak:"TDV `bahcesaray` — \"Kırım Hanlığı'nın idari merkezi\" (XVI. yy sonundan itibaren)",
 neden:"k:4, m:— idi. v: (tâbi Kırım) dönemindeki bir Hanlık limanı; Kefe'nin beş kazası arasında değil (bkz. Mankup notu)."},
{ad:"Or Kapı (Ferahkirman)", m:"Bahçesaray",
 kaynak:"TDV `bahcesaray` — aynı gerekçe",
 neden:"k:4, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında."},
{ad:"Akmescid", m:"Bahçesaray",
 kaynak:"TDV `bahcesaray` — aynı gerekçe",
 neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında."},
{ad:"Karasubazar", m:"Bahçesaray",
 kaynak:"TDV `bahcesaray` — aynı gerekçe",
 neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında."},
{ad:"Eski Kırım (Solhat)", m:"Bahçesaray",
 kaynak:"TDV `bahcesaray` — aynı gerekçe (not: Solhat, Bahçesaray'dan ÖNCEKİ hanlık başkentiydi, TDV'nin kendi metninde geçiyor: \"Solhat ve Kırk Yer önemini kaybetti\" Bahçesaray'ın yükselişiyle)",
 neden:"k:3, m:— idi. v: (tâbi Kırım) dönemi, Kefe'nin beş kazası dışında."},

// ── DARFUR SULTANLIĞI (merkezi El-Fâşir, TDV'nin kendi cümlesi) ──
// Not: ORHANGAZİ'nin şartnamesi bu kümeyi "merkezsiz, muafiyet" örneği
// olarak vermişti — TDV OKUNUNCA ÇÜRÜDÜ: "darfur" maddesi açıkça
// "Merkezi Fâşir şehridir" diyor. TDV kasaba tek tek bağlamıyor
// (TANECİKLİK boşluğu, CLAUDE.md §4) ama veride El-Fâşir zaten k:1 ve
// bu kayıtların s: dizisiyle (dacu→tunciler→darfur→mehdi→darfur→ingiltere)
// ve v: penceresiyle (1874-11-02 → 1883-12-23) BİREBİR AYNI — yani aynı
// idari-siyasî tarihi paylaşıyorlar, El-Fâşir'in kendisiyle birlikte.
{ad:"Nyala", m:"El-Fâşir",
 kaynak:"TDV `darfur` — \"Merkezi Fâşir şehridir\"; kasaba taneciğinde TDV susuyor (TANECİKLİK boşluğu), s:/v: dizisi El-Fâşir'le birebir",
 neden:"k:4, m:— idi."},
{ad:"Kutum", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe (Nyala'ya bkz.)",
 neden:"k:4, m:— idi."},
{ad:"Kebkâbiye", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Zâlincî", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Ed-Da'în", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Burâm", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Ümmü Keddâde", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Tîne (Dârfûr)", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Mellît", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Şa'riyye", m:"El-Fâşir", kaynak:"TDV `darfur` — aynı gerekçe",
 neden:"k:4, m:— idi."},
{ad:"Radom", m:"El-Fâşir",
 kaynak:"TDV `darfur` — aynı gerekçe. UYARI: bu Radom POLONYA'DAKİ şehir DEĞİL — koordinat 9,95°K/24,95°D, Güney Sudan/Darfur bölgesi (Radom Millî Parkı). ORHANGAZİ'nin şartnamesindeki 'Radom → Krakov' önerisi bu kaydı Polonya sanıyordu, YANLIŞ olurdu — s:/v: dizisi ötekilerle birebir aynı, Darfur kümesinin 11.'si.",
 neden:"k:4, m:— idi."},

// ── TEBRİZ EYALETİ (Ferhat Paşa 1585-1603 işgal penceresi) ──
{ad:"Hoy", m:"Tebriz",
 kaynak:"TDV `hoy` — \"Tebriz'e bağlı bir sancak merkezi haline getirilerek\" (1585, Şahkuluoğulları idaresinde, sancak beyi Alâeddin Bey)",
 neden:"k:3, m:— idi. d: 1585-09-25→1603-10-21, Tebriz'in kendi ilk işgal penceresiyle (1585-09-25→1603-10-21) BİREBİR AYNI gün."},
];

// 🔴 GERİ ÇEKİLDİ (30 Ağustos, ORHANGAZİ M-1705 — politika hükmü HAYIR):
// Ahar/Sarâb/Miyâne→Tebriz VE Segesvár→Erdel salt veri-içi tarih
// örtüşmesiyle yazılmıştı, TDV bu üçü için AÇIKÇA "X Tebriz'e/Erdel'e
// bağlıydı" demiyor (yalnız Hoy için diyor). Kayıt YUKARIDAKİ diziden
// SİLİNDİ, hüküm `bulunamadı`ya çevrildi — bkz. BULGU-KADEME-ZINCIR.md.
// Hoy→Tebriz KALDI çünkü TDV `hoy` maddesi doğrudan ve açıkça söylüyor.

// ⚠️ KALAN 50 KAYIT — biçim ve veri-içi adaylar denetim/BULGU-KADEME-ZINCIR.md'de.
// TDV/akademik kaynak okunmadan buraya eklenmedi.

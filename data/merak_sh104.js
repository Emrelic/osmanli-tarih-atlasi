// ============================================================================
// MERAK KARTI — SONNET HAZIR KITA 104, 1 Eylül 2026
// ============================================================================
// Paket: parti-emrelic-0032 / H-0014. MERAK.md'nin kendi kuyruğunda (§ "ON
// BİR SORU — kuyruk") ④ numaralı, hâlâ yazılmamış soru: "Otranto seferi
// Fatih'ten sonra niçin sürdürülmedi". Devralınan not (HUKUM-TASNIF.json)
// bu satırın bir KÜME ATAMASI olduğunu, tek tek ölçülmediğini söylüyordu —
// aşağıdaki kart TDV kaynaklarıyla gerçekten ölçülerek yazıldı.
//
// 🔴 KENDİ AD ALANIM — window.MERAK değil window.MERAK_SH104 (CLAUDE.md §7,
// "ayrı dosya = ayrı ad alanı"). index.html/js/app.js'e dokunmadım, o benim
// dosyam değil (§7). Koordinatör bir sonraki koşudan önce bu kaydı
// data/merak.js'in window.MERAK dizisine taşıyıp bağlayacak (M-1903 §④).
//
// ── BULGU — "Fatih öldü, sefer kendiliğinden söndü" YANLIŞ ─────────────────
// TDV'nin Gedik Ahmed Paşa maddesi açıkça gösteriyor: Fatih'in ölümünde sefer
// zaten DURMAMIŞTI — paşa ertesi ilkbaharda (1481) yeni bir İtalya seferi için
// Avlonya'da asker topluyor, donanmayı bekliyordu. Sürdürülmemesinin sebebi
// bir kendiliğinden sönme değil, II. Bayezid'in AÇIK ve doğrudan kararıydı:
// paşanın donanma/asker takviyesi talebini reddetti, kendisini de askerleriyle
// geri çağırdı. Otranto garnizonu bu yüzden yalnız kaldı ve teslim oldu.
//
// ── KAYNAK — TDV, gövde okunarak sınandı (CLAUDE.md §4) ─────────────────────
//   gedik-ahmed-pasa → HTTP 200, gövde okundu: "İtalya'da girişeceği yeni
//     fütuhat için ertesi ilkbaharda Avlonya bölgesinde asker toplayıp
//     donanmanın gelmesini beklerken Fâtih Sultan Mehmed'in ölüm haberini
//     aldı"; "donanma gönderilmesi ve Otranto Kalesi'ni savunan Osmanlı
//     askerlerine yardım sevkedilmesi ricasında bulunmasına rağmen istekleri
//     kabul edilmediği gibi kendisi de askerleriyle geri çağrıldı."
//   bayezid-ii → HTTP 200, gövde okundu: Otranto'nun kaybı Cem Sultan'la taht
//     mücadelesinin "ilk sonucu" sayılıyor; II. Bayezid "memleketi mâmur,
//     halkı refah içinde görmek isteyen", "mecbur olmadıkça savaştan uzak
//     kalmaya dikkat etmiş" bir hükümdar olarak tanımlanıyor; Cem meselesi onu
//     "çok dikkatli ve barışçı bir siyaset" izlemeye sürüklemiş.
//
// ── OLAY BAĞLANTISI — doğrulandı ────────────────────────────────────────────
// Üçü de data/olaylar_ek.js ve data/olaylar.js'de BİREBİR var olan t:
// değerleridir (dosyalar okunarak doğrulandı):
//   1480-08-11 → olaylar_ek.js "Otranto çıkarması"
//   1481-05    → olaylar.js "Fatih'in ölümü — Cem Sultan olayı"
//   1481-09-10 → olaylar_ek.js "Otranto'nun tahliyesi"
//
// ── ŞEMA (MERAK.md + js/app.js:3299-3305 sözleşmesi) ────────────────────────
//   { id, tur:"merak", soru, kisa, goruşler:[{tez,dayanak}], baglanti:[…],
//     kesinlik, kaynak }
// ============================================================================

window.MERAK_SH104 = [

{ id:"otranto-nicin-surdurulmedi", tur:"merak",
  soru:"Otranto seferi Fatih'ten sonra niçin sürdürülmedi?",
  kisa:"Sebep Fatih'in ölümü DEĞİL — II. Bayezid'in doğrudan kararıydı: Gedik Ahmed Paşa yardım istedi, reddedildi ve geri çağrıldı.",
  goruşler:[
    { tez:"Doğrudan sebep: yardım talebinin reddi",
      dayanak:"TDV'nin Gedik Ahmed Paşa maddesine göre paşa, ertesi ilkbaharda İtalya'da yeni fetihlere girişmek üzere Avlonya'da asker toplayıp donanmanın gelmesini beklerken Fâtih'in ölüm haberini aldı; donanma ve asker takviyesi istemesine rağmen II. Bayezid isteklerini reddetti ve kendisini askerleriyle birlikte geri çağırdı — Otranto garnizonu bu yüzden tek başına kaldı ve 1481'de teslim oldu." },
    { tez:"Taht mücadelesi kaynakları içe çevirdi",
      dayanak:"TDV'nin II. Bayezid maddesine göre Otranto'nun kaybı, aynı sırada patlak veren Cem Sultan'la taht mücadelesinin ilk sonucu sayılır; imparatorluğun dikkati ve askerî kaynağı kardeş çekişmesine kaydığında, uzakta tek başına savunulması pahalı bir köprübaşını sürdürmek öncelik olmaktan çıktı." },
    { tez:"Bayezid'in genel dış politika tercihi",
      dayanak:"Aynı TDV maddesi II. Bayezid'i 'memleketi mâmur, halkı refah içinde görmek isteyen' ve 'mecbur olmadıkça savaştan uzak kalmaya dikkat etmiş' bir hükümdar olarak tanımlar; Cem meselesi onu 'çok dikkatli ve barışçı bir siyaset' izlemeye sürükledi. Babasının aksine ihtiyatlı bu çizgi, İtalya'da yeni bir cepheyi büyütmek yerine var olanı tasfiye etmeyi seçti." }
  ],
  baglanti:["1480-08-11","1481-05","1481-09-10"],
  kesinlik:"tartismali",
  kaynak:"TDV: GEDİK AHMED PAŞA · BAYEZİD II" }

];

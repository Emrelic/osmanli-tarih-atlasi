// -*- coding: utf-8 -*-
// ═══════════════════════════════════════════════════════════════════════
// YER_YAMA_OWTRAD — OWTRAD tmcTRm1300 adaylarindan cikan YERLESIM ONERILERI
// window.YER_YAMA_OWTRAD          (§7: dosya adindaki ayirt edici parca
//                                  degisken adinda da duruyor)
// OPUS HAZIR KITA 82 · 25 Agustos 2026
// ═══════════════════════════════════════════════════════════════════════
//
// 🔴 BU DOSYA ONERIDIR — `girdi.py`ye BAGLANMAZ, motor OKUMAZ.
//    Her kayit bir TOPRAK IDDIASIDIR (§2: nokta petek acar). `yerlesimler*.js`e
//    ancak koordinator onayindan sonra ve TEK TEK gecer.
//
// SUZME ZINCIRI — 174 kenar / 154 dugumden buraya nasil gelindi:
//    154 dugum
//     -47  sentetik ara-nokta (cins:"ara-nokta") — yerlesim DEGIL
//     107 gercek adli
//     -41  koridor agimizda zaten var (M-1276; sonra 38'e duzeltildi, M-1278)
//      65  "yeni aday"
//     -53  🔴 YERLESIM HAVUZUNDA (2606 nokta) ZATEN VAR — 32 adla + 21 uc km
//      12  arastirilan
//      -3  ayni yer cikti (Ozu · Skopje · Kanizsa)
//      -1  kaynak bulunamadi (Oltenita)
//       8  ONERI  →  5 HAZIR · 3 EKSIK DAYANAK
//
// ⚠️ TARIH SECIMI — uydurulmadi, IKI KAYNAKTAN gelindi:
//    ① TDV govdesi gun veriyorsa O kullanildi (Prizren 20 Haziran 1455)
//    ② TDV yalniz YIL veriyorsa, AYNI KIRILMAYI tasiyan EN YAKIN KOMSU
//      kaydinin gunu kullanildi (Birecik ← Cerablus/Antep 1516-08-24)
//    Sebep: komsunun gunu zaten `Degismez 2` geregi bir kronoloji maddesiyle
//    eslesmis durumda. Yeni bir gun uydurmak, maddesiz bir kirilma yaratirdi.
//    🔴 ISTISNASI Prizren — asagida ayrica isaretli.
//
// ⚠️ `k:` (idari kademe) ve `m:` (bagli merkez) ALANLARI YAZILMADI.
//    VERI-YAPISI.md: "Bilinmiyorsa alani hic yazma. Eksik alan yanlis alandan
//    iyidir." Kademe, `Degismez 3`un cozulmemis `kd:` tasarimina bagli;
//    tahminle doldurmak o borcu buyutur.
//
// KAYNAK: her kayitta `dayanak` alani — TDV slug + BIREBIR ALINTI + yazar/cilt.
//
// 🔴 `yerlesim_mi` ALANI — "TDV'de maddesi var" YETMEZ
//    Koridor kaynagi YERLESIM ile KONAK/GECIT'i AYIRMIYOR; bizim havuzumuz
//    ayiriyor. Ve bir konagi yerlesim diye yazmak §2 geregi ETRAFINA PETEK
//    ACAR — yani haritada OLMAYAN bir sahiplik uretir.
//    ⇒ Her kayitta sorulan soru: TDV maddesi burayi bir YERLESIM olarak mi
//      yoksa bir menzil/gecit/kale olarak mi anlatiyor?
//    🟢 OLCUM: 5 HAZIR onerinin BESI DE IDARI STATU tasiyor (sancak/kaza/
//      eyalet merkezi ya da "baslica sehirleri" listesinde). Yani hicbiri
//      "yol ustunde bir durak" degil — ve bunu TDV'nin KENDI IDARI
//      TERIMLERI soyluyor, benim cikarimim degil.
// ═══════════════════════════════════════════════════════════════════════

window.YER_YAMA_OWTRAD = {

  // ═══════════════════════════════════════════════════════════
  // A · HAZIR — TDV dayanagi TAM, komsu tutarliligi saglandi
  // ═══════════════════════════════════════════════════════════
  hazir: [

    {
      no: "A-1", ad: "Birecik",
      owtrad: { lat: 37.033, lon: 37.967, ulke: "TR", kenar: 2, rol: "maj",
                komsu: ["Aleppo", "Urfa"] },
      oneri: { ad: "Birecik", tur: "sehir", lat: 37.033, lon: 37.967, g: 0,
               s: [{ f: "1281-01-01", t: "1516-08-24", d: "memluk" }],
               d: [{ f: "1516-08-24", t: "1923-10-29", y: "savas" }] },
      dayanak: "TDV `birecik` (İdris Bostan, TDV İA VI [1992], 187-189). " +
        "Gövde: Osmanlı hâkimiyetine 1516'da, Mercidâbık sonrası Yavuz Sultan " +
        "Selim'in Mısır seferi sırasında girmiştir. ALINTI: \"Osmanlılar " +
        "tarafından ele geçirildikten sonra bir sancak statüsü kazanan Birecik " +
        "1526'da Arap eyaletine bağlıydı.\" Öncesi uzun süre Memlük; " +
        "Karakoyunlu Kara Yûsuf 1418'de kuşatıp yağmalamış, Akkoyunlu kısa süre " +
        "tutmuş. 1568-1574 sonrası Halep eyaletine, 19. yy'da Urfa'ya bağlı kaza.",
      gun_secimi: "TDV yalnız '1516' diyor. Gün, EN YAKIN İKİ KOMŞUDAN alındı: " +
        "Cerablus (23,5 km) ve Antep, ikisi de memluk→d geçişini 1516-08-24'te " +
        "yapıyor. (Halep ve Rakka 1516-08-28 kullanıyor — 4 gün fark var, " +
        "yakın komşu tercih edildi.) Bitiş 1923-10-29: Birecik Urfa'yla birlikte " +
        "Türkiye'de kaldı, Urfa kaydı da 1923-10-29'a kadar gidiyor.",
      yerlesim_mi: "🟢 YERLEŞİM — ve dayanağı İDARÎ STATÜ. TDV: \"bir sancak " +
        "statüsü kazanan Birecik 1526'da Arap eyaletine bağlıydı\", 1568-74 " +
        "sonrası Halep eyaletine, 19. yy'da Urfa'ya bağlı KAZA merkezi. " +
        "Sancak ve kaza birer İDARÎ BİRİMDİR; bir menzil konağı sancak olmaz.",
      olcmedigim: "TDV'nin andığı Akkoyunlu ara dönemi ÖLÇÜLMEDİ — Urfa kaydı " +
        "1465-1507 akkoyunlu taşıyor, Birecik'inki taşımalı mı bilinmiyor. " +
        "Öneri Cerablus deseniyle (kesintisiz memlük) yazıldı; bu bir " +
        "TERCİH, ölçüm değil."
    },

    {
      no: "A-2", ad: "Prizren",
      owtrad: { lat: 42.214, lon: 20.740, ulke: "CS", kenar: 2, rol: "min",
                komsu: ["Scutari", "Skopje"] },
      oneri: { ad: "Prizren", tur: "sehir", lat: 42.214, lon: 20.740, g: 0,
               s: [{ f: "1281-01-01", t: "1455-06-20", d: "sirbistan" },
                   { f: "1912-10-22", t: "1923-10-29", d: "sirbistan" }],
               d: [{ f: "1455-06-20", t: "1912-10-22" }] },
      dayanak: "TDV `prizren` (Machiel Kiel, TDV İA XXXIV [2007], 349-351). " +
        "Fetih: 4 Receb 859 / 20 Haziran 1455, Fâtih Sultan Mehmed. ALINTI: " +
        "\"Sırp Krallığı'na dahil oldu ve 859'da (1455) Osmanlı fethine kadar " +
        "Sırbistan'ın bir parçası olarak kaldı.\" Çıkış 1912, I. Balkan Savaşı: " +
        "\"General Janković kumandasındaki Sırplar tarafından ele geçirildi.\" " +
        "1455-1912 boyunca sancak merkezi.",
      gun_secimi: "🔴 BURADA KOMŞU KULLANILMADI, TDV'nin KENDİ GÜNÜ kullanıldı. " +
        "Sebep: TDV hicrî günü veriyor (4 Receb 859), yani gün BİLİNİYOR. " +
        "Bitiş 1912-10-22 komşu Priştine'den alındı (TDV yalnız yıl veriyor).",
      yerlesim_mi: "🟢 YERLEŞİM — TDV 1455-1912 boyunca SANCAK MERKEZİ diyor, " +
        "geç dönemde PRİZREN VİLÂYETİ'nin merkezi. Bir vilâyet merkezi, " +
        "tanım gereği konak/geçit olamaz.",
      uyari: "🔴 YENİ KIRILMA GÜNÜ DOĞUYOR: 1455-06-20. Priştine 1455-06-01 " +
        "kullanıyor — 19 gün fark. Yani bu kayıt `Değişmez 2`ye YENİ bir " +
        "kırılma ekler ve ±30 gün içinde bir kronoloji maddesi ARANMALI. " +
        "Priştine'nin 1455-06-01 maddesi 19 gün uzakta olduğu için ±30 gün " +
        "penceresine GİRİYOR olabilir — AMA BEN BUNU ÖLÇMEDİM."
    },

    {
      no: "A-3", ad: "Debre",
      owtrad: { lat: 41.525, lon: 20.527, ulke: "MK", kenar: 3, rol: "min",
                komsu: ["Ohrida", "Scutari", "Skopje"] },
      oneri: { ad: "Debre", tur: "sehir", lat: 41.525, lon: 20.527, g: 0,
               s: [{ f: "1281-01-01", t: "1395-01-01", d: "sirbistan" },
                   { f: "1912-11-29", t: "1923-10-29", d: "sirbistan" }],
               d: [{ f: "1395-01-01", t: "1912-11-29" }] },
      dayanak: "TDV `debre` (Machiel Kiel, TDV İA EK-1 [2020], 311-313). " +
        "ALINTI: \"1395'te Osmanlılar tarafından fethedilinceye kadar Sırp " +
        "yönetimi altında kaldı.\" Öncesi: Sırp kralı Milutin, 1283'ten beri. " +
        "16. yy'dan itibaren birkaç kazalı sancak merkezi. Çıkış: Balkan " +
        "Savaşları — \"Şehrin ve eski kazanın doğu kısmı önce Sırp Krallığı'na, " +
        "ardından Yugoslavya'ya geçti.\"",
      gun_secimi: "TDV yalnız '1395' diyor ⇒ 1395-01-01 (§4: gün bilinmiyorsa " +
        "YYYY-01-01). Bitiş 1912-11-29, en yakın komşu Ohri'den (50,6 km).",
      yerlesim_mi: "🟢 YERLEŞİM — TDV: 16. yy'dan itibaren BİRKAÇ KAZALI " +
        "SANCAK MERKEZİ; ayrıca \"şehrin ve eski kazanın doğu kısmı\" " +
        "ifadesi geçiyor. Altında kazalar olan bir merkez, konak değildir.",
      olcmedigim: "🔴 FETRET ALT-DÖNEMLERİ YAZILMADI. Komşuları Ohri ve Üsküp " +
        "1402-1413 için suleyman-celebi / musa-celebi / mehmed-celebi " +
        "alt-dönemleri taşıyor. Debre de taşımalı MI, ölçmedim — TDV bundan " +
        "hiç söz etmiyor. ⇒ Kayıt bu hâliyle uygulanırsa komşularıyla " +
        "TUTARSIZ olur. Uygulamadan önce ölçülmeli."
    },

    {
      no: "A-4", ad: "Sibin (Sibiu)",
      owtrad: { lat: 45.800, lon: 24.150, ulke: "RO", kenar: 1, rol: "min",
                komsu: ["Brashov"] },
      oneri: { ad: "Sibin (Sibiu)", tur: "sehir", lat: 45.800, lon: 24.150, g: 0,
               s: [{ f: "1281-01-01", t: "1526-09-01", d: "macaristan" },
                   { f: "1687-08-12", t: "1918-11-11", d: "avusturya" },
                   { f: "1918-11-11", t: "1923-10-29", d: "romanya-kralligi" }],
               v: [{ f: "1526-09-01", t: "1541-08-29" },
                   { f: "1541-08-29", t: "1687-08-12" }] },
      dayanak: "TDV `erdel` (Kemal Karpat, TDV İA XI [1995], 280-283). ALINTI: " +
        "\"Başlıca şehirleri Sibiu (Macarca Nagyszeben, Almanca Hermannstadt), " +
        "Hunedoara (Macarca Hunyadvar) ve Fagaraş'tır.\" Erdel Osmanlı " +
        "tâbiiyetine 1541'de girdi, 1697'de Avusturya idaresine geçti. " +
        "⚠️ Kendi müstakil TDV maddesi ARANDI ve BULUNAMADI: `sibin`, `sibiu`, " +
        "`nagyszeben` üçü de HTTP 302. §4 gereği KAPSAYICI madde kullanıldı.",
      gun_secimi: "Bu kayıt tarih ÜRETMİYOR — İKİ KOMŞUSUNUN BİREBİR AYNI " +
        "desenini kopyalıyor: 'Erdel Belgradı (Gyulafehérvár)' ve " +
        "'Brassó (Braşov)' kayıtlarının s:/v: dizileri KARAKTER KARAKTER AYNI " +
        "(1526-09-01 · 1541-08-29 · 1687-08-12 · 1918-11-11). Sibiu ikisiyle " +
        "aynı Erdel'in şehri ve TDV onu başlıca şehirlerden sayıyor.",
      yerlesim_mi: "🟢 YERLEŞİM — TDV Erdel'in \"başlıca ŞEHİRLERİ\" listesinde " +
        "ADIYLA sayıyor (Sibiu · Hunedoara · Fagaraş). Bir bölgenin başlıca " +
        "şehri, yol üstünde bir durak değildir.",
      not: "🟢 LİSTEDEKİ EN GÜÇLÜ ÖNERİ: iki komşu ZATEN aynı deseni taşıyor, " +
        "TDV şehri ADIYLA sayıyor, ve tek bir yeni kırılma günü doğmuyor — " +
        "yani `Değişmez 2` hiç etkilenmiyor."
    },

    {
      no: "A-5", ad: "Foça",
      owtrad: { lat: 38.671, lon: 26.757, ulke: "TR", kenar: 1, rol: "min",
                komsu: ["Balikesir"], owtrad_adi: "Phocaea" },
      oneri: { ad: "Foça", tur: "liman", lat: 38.671, lon: 26.757, g: 0,
               s: [{ f: "1281-01-01", t: "1455-01-01", d: "ceneviz" },
                   { f: "1919-05-15", t: "1922-09-09", d: "yunanistan" }],
               d: [{ f: "1455-01-01", t: "1919-05-15" },
                   { f: "1922-09-09", t: "1923-10-29", y: "savas" }] },
      dayanak: "🔴 ÖNCE TUZAĞA DÜŞÜLDÜ, SONRA ÇIKILDI. `foca` slug'ı HTTP 200 " +
        "döndürüyor ve başlığı 'FOÇA' — ama açılan madde BOSNA-HERSEK'teki " +
        "Foča'dır (Nenad Moačanin, TDV İA XIII [1996], 166-167): \"Bosna-" +
        "Hersek'te Ceotina nehrinin Drina'ya kavuştuğu yerde bulunan bir şehir.\" " +
        "İzmir'deki Foça'nın müstakil maddesi ARANDI: `foca--izmir`, " +
        "`foca--sehir`, `eski-foca`, `yeni-foca` — DÖRDÜ DE 302. " +
        "§4 gereği KAPSAYICI madde denendi ve TUTTU: TDV `ceneviz` " +
        "(Aldo Gallotta, TDV İA VII [1993], 363-365) Foça'yı 14. yy Ceneviz " +
        "kolonileri arasında sayıyor ve ALINTI: \"Eski ve Yeni Foça 1455'te\" " +
        "Osmanlı hâkimiyetine geçti.",
      gun_secimi: "TDV yalnız '1455' diyor ⇒ 1455-01-01. Bitiş dizisi İzmir " +
        "kaydından alındı (42,8 km): 1919-05-15 Yunan işgali, 1922-09-09 geri " +
        "alınış. Midilli (1462-09-17) ve Sakız (1566-04-14) da ceneviz→d " +
        "deseni taşıyor, yani desen bölgede yerleşik.",
      yerlesim_mi: "🟢 YERLEŞİM — TDV `ceneviz` Foça'yı 14. yy Ceneviz " +
        "KOLONİLERİ arasında sayıyor (Galata · Edremit · İzmir · Sakız · Foça " +
        "· Midilli ile birlikte) ve \"ESKİ ve YENİ Foça\" diye İKİ yerleşimden " +
        "söz ediyor. Bir koloni ve şap ticaret merkezi, konak değildir. " +
        "⚠️ `tur:\"liman\"` seçildi (şehir değil): Foça'nın Ceneviz dönemindeki " +
        "işlevi limandı. Bu bir TERCİH — TDV bu ayrımı yapmıyor.",
      not: "🟢 Bu kayıt `§4`ün 'dar slug tutmazsa KAPSAYICI maddeyi dene' " +
        "kuralının canlı kazancı: kural olmasaydı `bulunamadı` yazılacaktı ve " +
        "yanlış olacaktı."
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // B · EKSIK DAYANAK — kayit YAZILMADI, cunku yarim kayit DELIK acar
  // ═══════════════════════════════════════════════════════════
  eksik_dayanak: [

    {
      no: "B-1", ad: "Aydos (Aytos)",
      owtrad: { lat: 42.700, lon: 27.250, ulke: "BG", kenar: 2, rol: "maj",
                komsu: ["Edirne", "frk04-tmc050503"] },
      elde_olan: "🟢 BAŞLANGIÇ TARİHİ VAR. Kendi maddesi yok (`aydos`, " +
        "`aydos-kalesi`, `aytos` — üçü de 302), ama KAPSAYICI madde verdi: " +
        "TDV `karinabad` (Machiel Kiel, TDV İA XXIV [2001], 490-492), " +
        "ALINTI: \"aynen Aydos'ta olduğu gibi mahallî aristokratlar bölgenin " +
        "kapılarını Osmanlılar'a açmıştır.\" Fetih: I. Murad, 770 (1369), " +
        "ÇATIŞMASIZ — yani `y:\"vassal\"` olabilir.",
      eksik: "🔴 BİTİŞ TARİHİ YOK ve KOMŞU DA YOK. Çevredeki Karinabad · " +
        "Prevadi · Aytos · Burgaz — DÖRDÜ DE yerleşim havuzunda YOK. En yakın " +
        "kayıtlı komşu Edirne, 200 km'den uzak ve bambaşka bir tarihi var. " +
        "Aydos'un Osmanlı'dan çıkışı (1878 Berlin? 1885 Şarkî Rumeli?) " +
        "ÖLÇÜLMEDİ.",
      yerlesim_mi: "🔴 BELİRSİZ — VE BU, EKSİĞİN İKİNCİSİ. TDV `karinabad` " +
        "Aydos'u yalnız KALE olarak anıyor; \"mahallî aristokratlar bölgenin " +
        "kapılarını Osmanlılar'a açmıştır\" cümlesi bir yerleşimi de ima eder " +
        "ama açıkça söylemez. Bugünkü Aytos bir kasabadır — ama bu BUGÜNKÜ " +
        "durumdur, 1369'unki değil. ⇒ Kale mi, kaleli kasaba mı: ÖLÇÜLMEDİ.",
      hukum: "ÖNERİ YAZILMADI. Bitişsiz bir `d:` dönemi ya 1923'e kadar " +
        "uzatılır (YANLIŞ — Aydos bugün Bulgaristan'da) ya da uydurulur. " +
        "İkisi de kabul edilemez. ⇒ Bulgaristan kuzeydoğusu için AYRI bir " +
        "araştırma gerekiyor; bu bölgede yerleşim havuzu ZATEN seyrek."
    },

    {
      no: "B-2", ad: "Korint (Corinth)",
      owtrad: { lat: 37.933, lon: 22.917, ulke: "GR", kenar: 2, rol: "min",
                komsu: ["Argos", "Athens"] },
      elde_olan: "TDV `mora` (Machiel Kiel & John Alexander, TDV İA XXX [2020], " +
        "278-283) Korinthos'u anıyor: \"Carlo Tocco tarafından davet edilen " +
        "Osmanlılar 1395'te...Corinth'i elinde tutan\". Mora'nın fethi: " +
        "1460 baharı, Fâtih. Kendi maddesi ARANDI: `korint`, `gordes` — " +
        "ikisi de 302.",
      eksik: "🔴 KORİNT'İN KENDİ FETİH GÜNÜ YOK. Kapsayıcı madde Mora'nın " +
        "genel fethini (1460) veriyor ama Korint'in ne zaman alındığını " +
        "AYRICA söylemiyor; 1395'teki cümle bir davet/nüfuz anlatıyor, fetih " +
        "değil. Komşu Atina 1456-06-04 kullanıyor — 1460'la 4 yıl fark var " +
        "ve hangisinin Korint'e uyduğu ÖLÇÜLMEDİ.",
      yerlesim_mi: "🟢 YERLEŞİM — TDV `mora` Korinthos'u Mora'nın başlıca " +
        "ANTİK ŞEHİRLERİ arasında sayıyor (\"Corinth, Sparta, Mantineia, " +
        "Megalopolis\"). Yerleşim olduğu tartışmasız; eksik olan TARİH.",
      hukum: "ÖNERİ YAZILMADI. 1456 ile 1460 arasından birini seçmek, " +
        "kaynağın söylemediğini söylemek olur."
    },

    {
      no: "B-3", ad: "Argos",
      owtrad: { lat: 37.633, lon: 22.733, ulke: "GR", kenar: 1, rol: "min",
                komsu: ["Corinth"] },
      elde_olan: "TDV `mora` İKİ tarih veriyor: ALINTI ① \"1397 Haziranında " +
        "Osmanlı birlikleri berzahı aşıp Venedikliler'in elindeki Argos'u " +
        "zaptetti\" · ALINTI ② \"1479 Argos Osmanlılar tarafından ele " +
        "geçirildi\". Ayrıca 1729-30'da Moralı Beşir Ağa külliyesi.",
      eksik: "🔴 İKİ FETİH ARASINDAKİ 82 YIL ÖLÇÜLMEDİ. 1397'de alınıp " +
        "1479'da yeniden alındıysa arada Venedik'e geri dönmüş olmalı — ama " +
        "TDV bunu söylemiyor. Bu boşluk yazılmadan kayıt açılırsa " +
        "`Değişmez 1` (sahipsizlik) ya da uydurma bir dönem doğar.",
      yerlesim_mi: "🟢 YERLEŞİM — TDV `mora` Argos'ta 1729-30'da \"Moralı " +
        "Beşir Ağa\" camii ve külliyesinin kurulduğunu yazıyor. Külliye " +
        "kurulan yer bir yerleşimdir; konakta külliye olmaz. " +
        "Eksik olan TARİH, cins DEĞİL.",
      hukum: "ÖNERİ YAZILMADI. 📌 Not: Argos, en yakın kaydımız Anabolu " +
        "(Nauplion) 9,4 km — 3 km kuralının DIŞINDA ve ikisi GERÇEKTEN AYRI " +
        "şehirdir, yani bu mükerrer değil GERÇEK bir boşluk. Araştırılmayı " +
        "hak ediyor, ama bugünkü dayanakla değil."
    }
  ],

  // ═══════════════════════════════════════════════════════════
  // C · ELENDI — aday DEGIL, ZATEN VAR
  // ═══════════════════════════════════════════════════════════
  elendi: [
    { ad: "Ozu", bizdeki: "Özi", km: 80.8,
      hukum: "AYNI YER — Özü/Özi/Oçakof. TDV `ozu` (Temel Öztürk, TDV İA " +
        "XXXIV [2007], 133-134) doğruladı: Ukrayna sınırları içinde, Aksu/Bug " +
        "ile Dnyeper'in Karadeniz'e kavuştuğu yarımadada; 1538 Süleyman " +
        "seferinden sonra Osmanlı, Aralık 1788'de Suvorov aldı, 1792 Yaş " +
        "Antlaşmasıyla Rusya'ya bırakıldı. " +
        "🔴 80,8 km'lik fark 1:8M TASLAK HARİTA sapmasıdır — ve İKİ SÜZGECİ " +
        "BİRDEN geçti: ad sadeleştirici 'ozu'/'ozi' farkını kaçırdı, mesafe " +
        "süzgeci 80 km olduğu için tutmadı. Yakalayan şey GÖZLE BAKMAK oldu. " +
        "⚠️ TDV'nin slug'ı `ozu`, bizim verimiz `Özi` — `ozi` slug'ı ÖLÜ (302)." },
    { ad: "Skopje", bizdeki: "Üsküp", km: 3.2,
      hukum: "AYNI YER. 3 km kuralını kıl payı aştı (0,2 km) ama Üsküp'ün " +
        "kendisi olduğu tartışmasız. Kural bir EŞİK, bir HÜKÜM değil." },
    { ad: "Kanizsa", bizdeki: "Kanije", km: 6.8,
      hukum: "AYNI YER — Nagykanizsa. TDV `kanije` (Géza Dávid, TDV İA XXIV " +
        "[2001], 307-308): fetih \"11 Rebîülâhir 1009'da (20 Ekim 1600)\", " +
        "1600'de eyalet merkezi oldu (Peçuy · Zigetvar · Pojega sancaklarıyla), " +
        "Ocak 1690'da elden çıktı. Bizdeki kayıt aynı yer; 6,8 km taslak " +
        "harita sapması." }
  ],

  // ═══════════════════════════════════════════════════════════
  // D · BULUNAMADI
  // ═══════════════════════════════════════════════════════════
  bulunamadi: [
    { ad: "Oltenita", lat: 44.083, lon: 26.633,
      arananlar: "`oltenita` (302) · TDV `eflak` (Kemal Karpat, TDV İA X " +
        "[1994], 466-469) gövdesi okundu.",
      hukum: "🔴 TDV'DE YOK. `eflak` maddesi 'Oltenia' (Küçük Eflak, BÖLGE) " +
        "diyor, 'Oltenița' (KASABA) demiyor — ad benzerliği YANILTICI, ikisi " +
        "farklı şeyler. Ve maddenin saydığı Tuna iskeleleri: \"Brǎila " +
        "(İbrâil) ve Giurgiu (Yergöğü, Yerkövü)\" — İKİSİ DE VERİMİZDE ZATEN " +
        "VAR. ⇒ Eflak'ın Tuna geçitleri kapsanmış durumda; Oltenița ayrıca " +
        "gerekmiyor. `bulunamadı` BİR SONUÇTUR." }
  ]
};

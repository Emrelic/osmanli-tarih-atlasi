// =============================================================================
// NOKTA ADALAR — İyon ve Ege'de NOKTASIZ ADA taraması
// kutu maddeleri: parti-emrelic-0021 / H-0011 · parti-emrelic-0022 / H-0004
// 19-20 Ağustos 2026
// =============================================================================
// 🔴 BU DOSYA HENÜZ `arac/girdi.py`ye BAĞLANMAMIŞTIR. Bağlama kararı
//    koordinatöründür (CLAUDE.md §5: canlı dosyanın tek otoritesi
//    `GIRDI_DOSYALARI`dır). Ad alanı §7 kuralına göre dosya adıyla eş:
//    `yerlesimler_ek_adalar.js` → `window.YERLESIMLER_EK_ADALAR`.
//
// ── ÖNCE: İKİ MADDE DE "TEYİD ET" MADDESİYDİ VE VERİ ZATEN DOĞRUYDU ─────────
//
//    H-0011 (1648-03-31 ekran görüntüsü): "şu çuha ve istendil adası
//    osmanlıda değil miymiş bu tarihte."
//    H-0004: "1672 de korfu kefalonya zakintos ve çuha adası ile istendil
//    tinos adası ithaki adası osmanlı kontrolünde değilmiymiş … ayamavra
//    lefkada adası için de geçerli aynı mesele."
//
//    Sekiz kaydın SEKİZİ de veride ölçüldü ve SEKİZİ de doğru çıktı
//    (1672-01-01 kesiti):
//
//      Korfu                 venedik  1281 → 1797-10-17          ✓ hiç Osmanlı OLMADI
//      Kefalonya             venedik  1500-12-24 → 1797-10-17    ✓ (Osmanlı 1479-1500)
//      İthaki                venedik  1500-12-24 → 1797-10-17    ✓ (Osmanlı 1479-1500)
//      Zaklise (Zakynthos)   venedik  1482-01-01 → 1797-10-17    ✓ (Osmanlı 1479-1482)
//      Çuha Adası (Kythira)  venedik  1281 → 1715-09-07          ✓ Osmanlı YALNIZ 1715-1718
//      İstendil (Tinos)      venedik  1281 → 1715-06-05          ✓ Venedik'in Ege'deki SON kalesi
//      Ayamavra (Lefkada)    OSMANLI  1479-08-01 → 1684-08-06    ✓ 1672'de gerçekten OSMANLI
//      Girit (Kandiye)       OSMANLI  1669-09-27'den             ✓
//
//    ⇒ H-0011'in cevabı: HAYIR, 1648'de ne Çuha ne İstendil Osmanlı'daydı;
//      ikisi de Venedik'teydi ve HARİTA ZATEN ÖYLE GÖSTERİYOR (ekran
//      görüntüsündeki açık sarı = venedik). Osmanlı'ya girişleri 1715'tir:
//      İstendil 5 Haziran 1715, Çuha 7 Eylül 1715 (Pasarofça 1718'de Çuha
//      Venedik'e geri döndü, İstendil dönmedi).
//    ⇒ H-0004'ün cevabı: yedi adanın altısı 1672'de VENEDİK, yalnız
//      AYAMAVRA Osmanlı — ve kayıtlar bunu zaten söylüyor.
//    📌 Yani iki maddede de düzeltilecek KRONOLOJİ yoktu. Düzeltilecek olan
//      GEOMETRİYDİ: aşağıdaki iki nokta.
//
// ── ÖLÇÜM: NOKTASIZ ADA TARAMASI ───────────────────────────────────────────
//    `ADA KURALI` (uret_petek.py:1400) şöyle çalışır: kara maskesinin
//    NOKTASI OLAN her bağlantılı parçası yalnız kendi noktaları arasında
//    paylaşılır. NOKTASI OLMAYAN parça için "eski davranış" geçerlidir —
//    yani CLAUDE.md §2 emilmesi: en yakın peteğe kapılır.
//    ⇒ Kusur adayı tam olarak NOKTASIZ BİLEŞENDİR, başka bir şey değil.
//
//    Kutu 19,0-27,6°D / 34,5-40,7°K · Natural Earth 10m · KARA_TOL 0,002
//    (motorun kendi maskesi ve toleransı):
//      116 kara bileşeni · kutuda 140 nokta · 40 bileşen > 0,8 km² NOKTASIZ
//    Kırkının otuz altısı DOĞRU boyanıyor (emici komşu, adanın gerçek
//    sahibiyle aynı) — örnekler: Antikythera → Çuha (venedik ✓) ·
//    Othonoi → Korfu (venedik ✓) · Kastos → İthaki (venedik ✓) ·
//    Meganisi → Ayamavra (Osmanlı ✓) · Gavdos → İsfakiye ✓ ·
//    Sapientza/Schiza → Modon ✓ · Spetses → Kranidi ✓ · Dia → Kandiye ✓
//    📌 Bu 36 sonuç "şans" değil TASARIM: emilme, komşusu doğruysa doğru
//      sonuç verir. Kural yalnız komşu YANLIŞ olduğunda ısırıyor.
//
//    DÖRDÜ yanlış boyanıyor. İkisi bu dosyada; ikisi ölçüldü, YAZILMADI
//    (gerekçesi en altta).
//
// ── ZİNCİR KURALI ──────────────────────────────────────────────────────────
//    İki kaydın da HİÇBİR yeni kırılma günü yok. Zincirler var olan
//    komşu kayıtlardan BİREBİR kopyalandı — Değişmez 2 borcu SIFIR:
//      Paksos     → `Korfu`nun zinciri (4 gün: 1797-10-17 · 1815-11-05 ·
//                   1864-05-21 · ufuk)
//      Elafonisos → `Mora (Tripoliçe)`nin zinciri (4 gün: 1460-05-29 ·
//                   1687-08-01 · 1715-07-01 · 1821-03-25)
//    Kasten böyle: ada ile bağlı olduğu gövde ayrı günler kullansaydı
//    aralarında KURGUSAL bir sınır doğardı (yerlesimler_ek.js'in Dalmaçya
//    kuyruğunda verilen kararın aynısı).
//
// ── KOORDİNAT ──────────────────────────────────────────────────────────────
//    İkisi de YAZILACAK hassasiyette (4 ondalık) kara maskesinde sınandı —
//    `covers()` ✓, kıyıya uzaklık 0,000 km, ve her biri KENDİ bileşeninin
//    içinde (Paksos ~19,9 km² · Elafonisos ~18,2 km²). Kaydırma GEREKMEDİ.
//    3 km mükerrer denetimi: en yakın mevcut nokta Paksos'ta 21,85 km
//    (Parga), Elafonisos'ta 27,93 km (Çuha Adası). İhlal YOK.
// =============================================================================

window.YERLESIMLER_EK_ADALAR = [

// ── ① PAKSOS (Paxos) ───────────────────────────────────────────────────────
// ÖLÇÜLEN KUSUR: Paksos+Antipaksos (~19,9 km²) noktasız; en yakın petek
// PARGA (21,85 km). Parga'nın zinciri 1819-05-10'da OSMANLI'ya dönüyor
// (Tepedelenli Ali Paşa'ya terk) ve 1913-03-06'ya kadar Osmanlı kalıyor.
// ⇒ Paksos haritada 1819-1913 arası, yani 93,8 YIL boyunca OSMANLI
//   boyanıyor. Oysa Paksos o yıllarda İngiliz himayesindeki Yedi Ada
//   Cumhuriyeti'nin (Cezâyir-i Seb'a-i Müctemia) yedi adasından biriydi ve
//   1864'te Yunanistan'a katıldı. HİÇ Osmanlı olmadı.
// ⚠️ İkinci bir pencere daha kapanıyor: Parga 1281-1401 arası `bizans`,
//   Korfu ise 1281'den itibaren `venedik`. Paksos, Korfu grubunun parçası
//   olduğu için Korfu'nun zinciri alındı — atlasın Korfu'ya uyguladığı
//   yazımın aynısı, ayrı bir iddia taşımıyor.
// KAYNAK: TDV `korfu` (200, gövdesi okundu): "Korfu tarih boyunca Yunan,
//   Roma, Bizans ve VENEDİK (1386-1797) hâkimiyetinde kaldı" ve madde
//   "Yedi Ada Cumhuriyeti"ni (Cezâyir-i Seb'a-i Müctemia) adıyla anıyor.
//   Paksos'un MÜSTAKİL maddesi TDV'de YOK — `paksos` slug'ı 302 döndü
//   (ölü); `yedi-ada` ve `cezayir-i-seba` da 302. Bu yüzden kaynak, konuyu
//   gerçekten kapsayan en yakın CANLI madde olan `korfu`dur (§4: "dar slug
//   tutmazsa kapsayıcı maddeyi dene").
{ ad:"Paksos (Paxos)", tur:"kale", lat:39.1975, lon:20.1867, g:0, k:4, m:"Yanya",
  kaynak:"korfu",
  s:[{f:"1281-01-01",t:"1797-10-17",d:"venedik"},
     {f:"1797-10-17",t:"1815-11-05",d:"fransa-cumhuriyet"},
     {f:"1815-11-05",t:"1864-05-21",d:"ingiltere"},
     {f:"1864-05-21",t:"1923-10-29",d:"yunanistan"}],
  d:[] },

// ── ② ELAFONİSOS (Cervi) ───────────────────────────────────────────────────
// 🟡 BU PARTİNİN EN ZAYIF KAYDI — ve zayıflığı burada AÇIKÇA yazılıdır.
// ÖLÇÜLEN KUSUR: Elafonisos (~18,2 km²) noktasız; en yakın petek ÇUHA
// ADASI (27,93 km, açık deniz aşırı). Çuha'nın zinciri 1281-1715 `venedik`,
// 1718-1797 `venedik`, 1815-1864 `ingiltere`.
// ⇒ Ada bugün haritada 1281-1715 arası VENEDİK boyanıyor. Oysa Elafonisos
//   Mora'nın (Vatika/Neapoli kıyısının) ~400 METRE açığındadır; Çuha ile
//   arasında 28 km açık deniz vardır.
// GEREKÇE — üç ayrı ayak, üçü de ATLASIN KENDİ VERİSİNDEN doğrulanabilir:
//   ① Venedik'in Pasarofça'da (1718) elinde kalan Levant mülkleri atlasta
//     NOKTA NOKTA yazılı: Korfu · Paksos · Ayamavra · İthaki · Kefalonya ·
//     Zaklise · Çuha + Parga · Preveze · Vonitsa. CERVİ BU LİSTEDE YOK.
//   ② Çuha'nın Venedik bağımlısı olarak anılan adası ANTİKİTHERA'dır
//     (Cerigotto) — atlasta o da zaten Çuha'ya kapılıyor ve DOĞRU çıkıyor.
//     Cervi ise Çuha ile Mora arasındaki BOĞAZIN adıdır, Venedik mülkü değil.
//   ③ İngiltere'nin 1850'de Cervi ve Sapientza'yı "İyon bağımlısı" sayan
//     iddiası GERİ ÇEKİLDİ (6 Temmuz 1850 mutabakatı). Yani ada İyon değil
//     Mora toprağı sayıldı. Atlas bugün o REDDEDİLMİŞ iddiayı çiziyor
//     (1815-1864 `ingiltere`).
// ⚠️ ÖLÇMEDİĞİM: Elafonisos'un 1460-1687 arasındaki idarî bağlılığını
//   BİRİNCİL bir kaynaktan doğrulayamadım. TDV'de `elafonisos` slug'ı 302
//   (ölü) ve `mora` maddesi bu tanecikte konuşmuyor (§4 "TANECİKLİK
//   boşluğu"). Yukarıdaki üç ayak bir ÇIKARIMDIR, bir ÖLÇÜM DEĞİLDİR.
//   Koordinatör bu kaydı reddederse gerekçe budur ve meşrudur.
// ⚠️ Mora kaydındaki `v:` Mısır (İbrâhim Paşa) penceresi BİLEREK
//   kopyalanmadı: 1825-1828 Mısır işgali Mora anakarasındaydı, adaya
//   uzandığı ölçülmedi. Ölçülmeyeni yazmamak, yanlış yazmaktan iyidir.
// KAYNAK: konuyu kapsayan en yakın CANLI TDV maddesi `mora` (200).
{ ad:"Elafonisos (Cervi)", tur:"kasaba", lat:36.4936, lon:22.9756, g:0, k:4,
  m:"Mora (Tripoliçe)",
  kaynak:"mora — Elafonisos'un müstakil TDV maddesi YOK (slug 302); ada Mora'nın 400 m açığında ve Pasarofça'nın Venedik mülk listesinde geçmiyor. HÜKÜM ÇIKARIMDIR, ölçüm değildir; üç ayağı dosya başında açıkça yazılıdır.",
  s:[{f:"1281-01-01",t:"1460-05-29",d:"bizans"},
     {f:"1687-08-01",t:"1715-07-01",d:"venedik"},
     {f:"1821-03-25",t:"1923-10-29",d:"yunanistan"}],
  d:[{f:"1460-05-29",t:"1687-08-01"},
     {f:"1715-07-01",t:"1821-03-25"}] },

];

// =============================================================================
// ÖLÇÜLDÜ, YAZILMADI — dördü de birer SONUÇTUR, boşluk değil
// =============================================================================
//
// ── ③ KALAMOS (~22,9 km²) — KAYNAK BULUNAMADI, KARAR KOORDİNATÖRÜN ─────────
//    Emici: AYAMAVRA (25,38 km) ⇒ 1479-08-01 → 1684-08-06 ve
//    1715-09-07 → 1718-07-21 arası OSMANLI boyanıyor (~186 yıl).
//    🔴 VE ATLAS KENDİ İÇİNDE ÇELİŞİYOR: 6 km ötedeki ikiz adası KASTOS
//      (~5,4 km²) İTHAKİ'ye kapılıyor (27,4 km, Ayamavra'dan 1,0 km yakın)
//      ve VENEDİK boyanıyor. Yani aynı ada çiftinin iki yarısı 186 yıl
//      boyunca ZIT renkte. Bu, hangisi doğru olursa olsun bir kusurdur.
//    ⚠️ Kalamos ve Kastos'un 1479-1684 arası bağlılığını (Ayamavra'yla mı
//      Osmanlı, İthaki'yle mi Venedik) §4'ün kabul ettiği bir kaynakla
//      DOĞRULAYAMADIM: `kalamos` slug'ı 302, `kefalonya` 302, TDV
//      `ayamavra` maddesi çevre adacıkları HİÇ anmıyor. Elde yalnız gezi
//      siteleri ve Vikipedi kaldı — ikisi de §4 kırmızı çizgisinde
//      KULLANILMAZ.
//    ⇒ Tahmin etmektense SORULDU (§7.1 ⑥: "kaynaklar çelişiyorsa hangisini
//      seçeceğine sen karar verme"). İki uçtan biri seçilene kadar nokta
//      YAZILMADI — çünkü yanlış seçim 186 yıllık BİR HATAYI 186 yıllık
//      BAŞKA BİR HATAYLA değiştirir (§3.5.1: iki uç da ölçülür).
//
// ── ④ GİRİT'İN ÜÇ VENEDİK KALESİ — BUGÜN YENİDEN ÖLÇÜLDÜ, KARAR AYNI ──────
//    CLAUDE.md §3.5.1 bunları "kapanmamış borç" diye sayıyor. `yerlesimler_
//    ek.js:52` ise "bu bir eksiklik değil, ÖLÇÜLMÜŞ BİR KARARDIR" diyor.
//    İki belge çelişiyordu; bugün ÜÇÜNCÜ kez ölçüldü ve `ek.js` haklı çıktı:
//
//      Suda (Souda)          35,4869 / 24,1136   kara maskesinde YOK (0,68 km açıkta)
//      Spinalonga            35,2985 / 25,7350   kara maskesinde YOK (0,27 km açıkta)
//      Granbosa (Gramvousa)  35,6167 / 23,5872   kara maskesinde YOK (1,88 km açıkta)
//
//    Üçü de AYRI BİR KARA BİLEŞENİ DEĞİL — yani ADA KURALI onları
//    koruyamaz. Girit bileşeni ~8.309 km²; üç nokta eklenirse (0,01°
//    ızgara, en yakın komşu) Girit'in şu kadarı VENEDİK boyanır:
//      Spinalonga 1.181 km² (%14,2) · Granbosa 622 km² (%7,5) ·
//      Suda 393 km² (%4,7)   ⇒ TOPLAM 2.196 km² = Girit'in %26,4'ü
//    (2026 ölçümü 2.163 km² / ~%26 demişti — sayı bugün de tuttu.)
//    ⇒ Bugünkü hata ~0 km² (adacıklar maskede bile yok). Önerilen
//      "düzeltme" 2.196 km²'yi 1669'dan itibaren Venedik boyardı.
//    📌 KURAL, tek cümlede: BİR ADA NOKTASI, ADA KENDİ KARA BİLEŞENİYSE
//      GÜVENLİDİR. Paksos ve Elafonisos öyle (kendi bileşenleri var, petek
//      taşamaz). Girit'in üç kalesi değil — onların peteği ADANIN
//      TAMAMINDAN pay ister.
//    ⇒ Bu üç kale YERLEŞİM tarafına DEĞİL, gösterim tarafına (savaş
//      işareti / şehir kartı) aittir. Granbosa'nın savaş işareti
//      19 Ağustos'ta `data/savaslar.js`e zaten eklendi; doğru yer orası.
//
// ── ⑤ DALMAÇYA ANAKARASI — BORÇ ZATEN KAPANMIŞ ────────────────────────────
//    CLAUDE.md §3.5.1: "Dalmaçya anakarası (0 nokta, Karlofça'nın yedi
//    kalesi yok)". ÖLÇÜLDÜ: 42,3-45,4°K / 15,0-19,0°D kutusunda 32 NOKTA
//    var; Zadar · Şibenik · Knin · Nadin · Vrana · Klis · Split · Sin ·
//    Kotor · Herseknovi · Bihaç'ın onbiri `yerlesimler_ek.js`te ve o dosya
//    `GIRDI_DOSYALARI`nda, yani CANLI.
//    ⇒ §3.5.1'in o satırı BAYAT. Aynı bölümdeki "Yukarı Macaristan sıfır
//      nokta" satırı 10 Ağustos'ta tam bu şekilde çürütülüp damgalanmıştı;
//      bu ÜÇÜNCÜ vaka. Damgalanması gereken satır: "Dalmaçya anakarası".
//
// ── ⑥ YAN BULGU: `Folegandros` KAYDI YANLIŞ ADADA ─────────────────────────
//    `yerlesimler.js:1396` → `Folegandros` lat:36.682 lon:25.125.
//    O koordinat SİKİNOS adasıdır; gerçek Folegandros 36,63 / 24,92'dedir
//    ve taramada 31,3 km²'lik NOKTASIZ bir bileşen olarak çıktı (20,4 km
//    öteden kendi adını taşıyan kayda kapılıyor).
//    🟢 RENK HATASI ÜRETMİYOR: iki adanın zinciri birebir aynı (venedik →
//      1566-04-15 Osmanlı). O yüzden ACİL DEĞİL — ama etiket 19 km yanlış
//      adanın üstünde duruyor.
//    ⇒ Düzeltmesi `yerlesimler.js`tedir (koordinatörün dosyası): kaydı
//      36,63/24,92'ye taşımak + ayrı bir `Sikinos` kaydı açmak. Bu dosyada
//      YAPILMADI — 0,00 km mükerrer üretirdi (§11).
// =============================================================================

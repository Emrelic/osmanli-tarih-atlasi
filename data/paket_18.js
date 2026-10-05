/* PAKET 18 — arac/paketle.py ile ÜRETİLDİ, ELLE DÜZENLENMEZ.
   4 kaynak dosya, sırası index.html'deki sıradır.
   Kaynağı değiştirdiysen: py arac/paketle.py yenile
   Tazelik kapıda sınanır: py arac/paketle.py sina */
/* ==== data/yerlesimler_ek_adalar.js ==== */
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
{ ad:"Paksos (Paxos)", kd:[{f:"1281-01-01",t:"1923-10-29",k:0,m:null}], tur:"kale", lat:39.1975, lon:20.1867, g:0, k:4, m:"Yanya",
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
{ ad:"Elafonisos (Cervi)", kd:[{f:"1281-01-01",t:"1460-05-29",k:0,m:null},{f:"1460-05-29",t:"1923-10-29",k:4,m:"Mora (Tripoliçe)"}], tur:"kasaba", lat:36.4936, lon:22.9756, g:0, k:4,
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

;
/* ==== data/yerlesimler_ek_bozkir.js ==== */
// =====================================================================
// KARADENİZ BOZKIRI — kutu `0021/H-0032` + `0022/H-0005` (20 Ağustos 2026)
// =====================================================================
// ⚠️ HENÜZ CANLI DEĞİL. `arac/girdi.py` → GIRDI_DOSYALARI'na EKLENMEDİ;
//    bağlamayı koordinatör yapar (§7 dosya sahipliği).
//
// ── EMRE NE SORDU ────────────────────────────────────────────────────
// H-0032: "bu kırım hanlığı bozkırında hiç yerleşim yeri yok mu o devirde
//          azak denizinin kuzeyinde ve doğusundaki topraklarda yerleşim yok mu"
// H-0005: yediçkul · camboyluk · deşti kıpçak · donesk · don · çerkask ·
//         kabartay-nalçik bozkırları ve soçi/anapa/tuapse/kuban/maykop —
//         "bu bozkırların 1678'de kırıma yada rusyaya yada lehistana yada
//          osmanlıya ait olup olmadığına SİSTEM NASIL KARAR VERİYOR"
//
// 🔴 ① İLK ÖLÇÜM ŞİKÂYETİN YARISINI ÇÜRÜTTÜ: yedi adın YEDİSİ DE VARDI.
//    Yediçkul · Camboyluk · Deşt-i Kıpçak (ek3, yerlesimler.js) · Donets ·
//    Don (Sal) · Çerkask (ek6) · Kabartay (yerlesimler.js) — hepsi canlı,
//    ve Emre'nin kendi ekran görüntüsünde (H-0032-1.png) etiketleri okunuyor.
//    ⇒ Eksik olan NOKTA değil; eksik olan, noktaların ARASI.
//
// ── ② "SİSTEM NASIL KARAR VERİYOR" — cevabı ölçüldü ─────────────────
// Sistem karar VERMİYOR (`CLAUDE.md §2`): noktasız her yer en yakın peteğe
// emilir. 1678-01-01, 615 karelik ızgara (0,5°, 44-51K / 28-48D):
//
//   rusya %37,1 · OSMANLI %18,0 · kirim %17,1 · don-kazak %8,8 ·
//   tâbi Kırım %4,2 · lehistan %3,9 · tâbi Boğdan %3,7 · zaporojye %2,6
//
// Ve kolların uzunluğu cevabın kendisidir — üç devlet aynı boşluğa
// 170-190 km öteden uzanıyor ve sınırı üçünün ORTA DİKMESİ çiziyor:
//   45,5K 43,5D → 190 km  Kalmuk bozkırı     rusya
//   45,0K 42,5D → 189 km  Kabartay (Nalçik)  kirim
//   45,5K 43,0D → 175 km  Don bozkırı (Sal)  don-kazak
//   48,5K 30,5D → 167 km  Soroka             tâbi Boğdan
//   48,0K 31,0D → 158 km  Özi                OSMANLI
// ⇒ Bu dosya o iki boşluğu kapatıyor: **Yedisan** ve **Kuban-Stavropol**.
//
// ── ③ KAYNAK (§4) ───────────────────────────────────────────────────
// TDV `giray` (200, gövdesi okundu):
//   "'Serasker sultan' unvanıyla Giray sultanlara Osmanlılar tarafından
//    KUBAN, BUCAK ve YEDİSAN'ın idaresi de bırakılmıştı."
// TDV `nogaylar` (200, gövdesi okundu):
//   "Yedisan, Camboyluk, Bucak ve Kuban Nogayları Kırım Hanlığı
//    denetiminde" (18. yy başı) · "1557-58'de Kazi Mirza önderliğinde bir
//    bölüm Nogay İdil'i geçip Kabarda bölgesine yerleşti" (= Küçük Nogay)
// ⇒ İkisi birlikte `kirim` kimliğini SABİTLİYOR: bölükler Nogay'dır,
//   İDARESİ Giray'ındır. Kardeş kayıtlar (Yediçkul · Camboyluk) da `kirim`;
//   bu dosya yeni bir tercih getirmiyor, var olanı sürdürüyor.
// 🔴 ÖLÜ SLUG ÖLÇÜLDÜ: `kuban` → arama sayfası, madde YOK (§4 ① tuzağı).
//    `kefe` (200) beş kazayı sayıyor — Mangub · Suğdak · Kerç · Azak ·
//    Taman — Temrük · Açu · Kopıl'ı ANMIYOR (aşağıya bak).
//
// ── ④ KIRILMA GÜNÜ ÜRETİLMEDİ (Değişmez 2) ──────────────────────────
// Kullanılan dört günün dördü de depoda ZATEN VAR ve maddelidir:
//   1281-01-01  başlangıç damgası (ev sözleşmesi)
//   1441-01-01  Kırım Hanlığı'nın kuruluşu — Kuban · Anapa · Maykop ·
//               Soçi · Tuapse · Kabartay hepsi bu günü kullanıyor
//   1502-03-01  Büyük Orda'nın yıkılışı — kronoloji maddesi VAR (ek5)
//   1783-04-19  Kırım'ın Rusya'ya ilhakı — madde `olaylar.js:122`
//   1792-01-09  Yaş Antlaşması — Hacıbey (Odessa) BU GÜNÜ kullanıyor,
//               madde `1792-01-10 Yaş Antlaşması` (±1 gün, tavan ±30)
// ⇒ Yeni gün SIFIR.
//
// ── ⑤ YAZILMAYANLAR ve NİÇİN ────────────────────────────────────────
// 🔴 MANIÇ / VOLGA-KUMA ARASI (45-46K / 44-46D) — EN BÜYÜK BOŞLUK (190 km)
//    ve KASTEN BOŞ BIRAKILDI. Orası 1632-1771 arası İdil Kalmuk
//    Hanlığı'nın sahasıdır; `devletler.js`te `kalmuk` kimliği YOK
//    (yalnız `cungar` = Cungarya ve `hosut` = Kokonor var).
//    ⇒ Oraya ne yazsam hayalet üretirdim: `kirim` yazmak Kırım'ı, `rusya`
//      yazmak Rusya'yı olmadığı yerde boyardı (§3.5).
//    📌 Ve bu bir KEŞİF DEĞİL: `yerlesimler_ek6.js:45-60` bu borcu
//      Ağustos'ta ölçmüş, TDV `kalmuklar`la sabitlemiş (hanlık 1632,
//      Rus hâkimiyeti 1724) ve reçetesini yazmış. Ben yalnız DURUYOR
//      olduğunu doğruladım. Künye gelince nokta yazılabilir.
// 🔴 TEMRÜK · KOPIL · AÇU (Kuban ağzı kaleleri) — YAZILMADI.
//    TDV `kefe` beş kazayı sayarken üçünü de anmıyor; TDV `kuban` ölü.
//    Akademik dayanak aranacaktı, ağ erişimi bu oturumda kararsızdı
//    (sınıflandırıcı düştü). ⇒ "bulunamadı" değil, **ARANMADI** —
//    ve ikisini birbirine karıştırmamak için böyle yazıyorum.
// 🟡 YENİKALE — kaynak var (savaslar.js:414, Küçük Kaynarca "Kerç,
//    Yenikale ve Azak") ama YAZILMADI: Kerç'e 10,4 km. Petek kazancı
//    ~sıfır, mükerrer riski gerçek (§11 "yakın mükerrer yerleşim").
//    Kasıtlı ret; kaynağı olduğu için kayda geçiyor.
//
// ── ⑥ EMRE'NİN ASIL SORUSUNA DÜRÜST CEVAP ───────────────────────────
// "Hiç yerleşim yok mu?" — Bozkırda **sürekli oturulan kasaba** gerçekten
// azdı; nüfus konar-göçerdi ve kışlaklar sabit yer adı bırakmadı. Yani
// haritanın `tur:"bolge"` dolgu noktalarıyla çalışması bir kaçamak değil,
// bozkırın kendi yapısının karşılığıdır. Kusur *noktaların yokluğu* değil,
// *aralarının 170-190 km olması*ydı — bu dosya onu kapatıyor.
// =====================================================================

window.YERLESIMLER_EK_BOZKIR = [

// ① YEDİSAN — Bug ile Dinyester arası bozkır. Özi'nin 158 km'lik ve
//    Soroka'nın 167 km'lik kolu buraya uzanıyordu.
//    Zincir Hacıbey (Odessa) ile aynı gün biter (1792-01-09, Yaş):
//    Hacıbey Yedisan'ın İÇİNDE bir kaledir, yani komşunun kendi günü.
//    ⚠️ `kirim` seçimi kardeş kayıtların (Yediçkul · Camboyluk) aynısıdır.
//    Bir tutarsızlık NOTU: Kırım çekirdeği depoda `v:` (tâbi) ile, bozkır
//    bölükleri `s:{d:"kirim"}` ile yazılmış — aynı siyasî yapı iki ayrı
//    biçimde. Bu dosya var olanı SÜRDÜRÜYOR; ayrımı koordinatöre bildirdim.
//    🔴 KONUM DÜZELTİLDİ (aynı gün, bağlandıktan sonra): 47,90/31,10 →
//    47,60/30,90. Sebep ÖLÇÜLDÜ: ilk konum kuzeyde 49,0K'ya kadar uzanıp
//    Braclav/Uman kuşağından 6 kare `lehistan`dan alıyordu — orası 1678'de
//    Kırım bozkırı DEĞİL. Yeni konumda kuzey erişimi 48,5K'da duruyor ve
//    `lehistan` devri 6 → 3. Kapanan boşluk neredeyse aynı (55 → 51 km
//    ortalama kazanç, 16 → 14 kare). §3.5.1: bir sınır kayması önerilince
//    İKİ UÇ DA ölçülür — bu, ÖTEKİ UÇTA doğan fazlalığın düzeltilmesidir.
{ ad:"Yedisan bozkırı", isg:[{f:"1770-08-12",t:"1774-07-21",d:"rusya",kaynak:"Руссев 2012 — Yedisan ordası Ağustos 1770'te Panin'le antlaşıp 'от Порты Оттоманской отщепились и отдаемся под протекцию императрицы' · ЭСБЕ «Ногаи» · Грибовский 2016 (1771-72 Kuban'a göçürülme). Hukukî bağ (hanlığa gevşek tâbilik) Kaynarca'ya kadar sürdü ⇒ v: KORUNDU, isg üstüne biner. ⚠️ GÜN KAYNAKTA YOK — 'в августе 1770 г.' (makale 'по старому стилю' diyor, Jülyen) ⇒ Gregoryen 12 Ağustos–11 Eylül; 1770-08-12 bir ALT SINIRDIR, olay günü DEĞİLDİR. Kırılmanın maddesi K-1 (data/olaylar_p0065.js, aynı gün). YAMA-SEFER1768-0917 Y-3 · 1.MURAT M-4500 · UYGULA-4 18 Eyl 2026."}], v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak:"Emre kararı D (13 Eyl 2026, oturumlar/KOSU10-SONRASI.md 0043/H-0003): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE. TDV `kirim`: 'Nogaylar'ın hana tâbiiyeti gevşek olup bunlar hanlık iddiasında bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek…' (denetim/ARASTIRMA-KIRIM-0912.md ③). Pencere = s:kirim ∩ Kırım'ın Osmanlı tâbiliği 1475-06-06 (Kefe fethi, olaylar.js) → 1774-07-21 (Küçük Kaynarca, olaylar.js); dışı s:kirim kaldı."}], neden:"VERI-KIRIM 14 Eyl 2026 ③ (Emre kararı D): s:kirim ∩ 1475-06-06→1774-07-21 → v: gevşek himaye (kid kirim, statu gevsek, himaye:true). ‖ `s:` kirim dönemini 1792-01-09'a kadar sürdürüyordu ama `d:` 1783-04-19'da Osmanlı'yı başlatıyordu ⇒ 8 yıl 9 ay ÇİFT SAHİPLİK. kirim, hanlığın sona erdiği güne (1783-04-19) çekildi. Kırılma günü DEĞİŞMEDİ, yalnız örtüşme kapandı.",kaynak:"külliyatın kendi maddeleri: \"1783-04-19 II. Katerina'nın manifestosuyla Rusya Kırım'ı, Taman'ı ve Kuban'ı ilhak etti — Kırım Hanlığı sona erdi\" ve \"1792-01-09 Yaş Antlaşması — Kırım'ın ilhakı tanındı, sınır Dinyester'e taştı\". Yeni tarih ARAŞTIRILMADI, yeni gün EKLENMEDİ — yalnız var olan iki gün tutarlı hâle getirildi.",s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda"},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1792-01-09",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}], tur:"bolge", lat:47.60, lon:30.90, g:0, k:0, d:[{f:"1783-04-19",t:"1792-01-09"}],
  // 🔴 MÜKERRER İKİNCİ `s:` KALDIRILDI — 10 Eylül 2026.
  //   İkinci kopya `kirim`i 1792-01-09'a kadar sürdürüyordu ve JS
  //   SONUNCUYU aldığı için KAZANIYORDU ⇒ yukarıdaki `d:` ile
  //   1783-04-19 → 1792-01-09 arası 8 YIL 9 AY ÇİFT SAHİPLİK.
  //   ⚠️ Yani kaydın KENDİ `neden:` alanında anlatılan düzeltme
  //   yazılmış ama MÜKERRER ANAHTAR TARAFINDAN EZİLMİŞTİ. `D046`nın veri
  //   içi yüzü: `neden:` alanını okuyan bir denetim düzeltmeyi UYGULANMIŞ
  //   sayar, çünkü metin orada duruyor — uygulanan `s:` ise ötekidir.
   },

// ② KUBAN NOGAY BOZKIRI — Kuban'ın kuzeyi, Yeya-Beysug arası.
//    Zincir Kuban (Yekaterinodar) kaydının BİREBİR aynısı; ona 183 km.
//    TDV `giray`: Kuban'ın idaresi Giray sultanlara bırakılmıştı.
//    🔴 KONUM DÜZELTİLDİ: 45,10/41,30 → 45,20/41,00. İlk konum güneyde
//    44,0K'daki Kafkas SIRTINDAN bir kare alıyordu (Sohum'un 136 km'lik
//    kolu); yeni konumda devirler 45,5-46,0K bozkır kuşağında kalıyor.
{ ad:"Kuban Nogay bozkırı", v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak:"Emre kararı D (13 Eyl 2026, oturumlar/KOSU10-SONRASI.md 0043/H-0003): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE. TDV `kirim`: 'Nogaylar'ın hana tâbiiyeti gevşek olup bunlar hanlık iddiasında bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek…' (denetim/ARASTIRMA-KIRIM-0912.md ③). Pencere = s:kirim ∩ Kırım'ın Osmanlı tâbiliği 1475-06-06 (Kefe fethi, olaylar.js) → 1774-07-21 (Küçük Kaynarca, olaylar.js); dışı s:kirim kaldı."}],  neden:"VERI-KIRIM 14 Eyl 2026 ③ (Emre kararı D): s:kirim ∩ 1475-06-06→1774-07-21 → v: gevşek himaye (kid kirim, statu gevsek, himaye:true). ‖ VERI-KIRIM 14 Eyl 2026 (YAMA-KIRIM2-0913, Emre kararı D öncesi adım ①): altinorda→kirim geçişi 1441 → 1502-03-01.", tur:"bolge", lat:45.20, lon:41.00, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda",kaynak:"TDV altin-orda-hanligi (Altın Orda 1241-1502) · TDV kirim (1502 Mengli Giray son darbe) · IEU 'Kuban' (Nogaylar Altın Orda dağıldıktan sonra Kuban'a yerleşip Kırım'la müttefik, tarih yok). 1441'de Kırım'ın Kuban hâkimiyeti BULUNAMADI; 1441-1502 Büyük Orda tasarrufu adıyla BULUNAMADI. GÜN: kaynak yalnız yıl; 1502-03-01 çekirdek madde olaylar_ek5.js günü (gun:'1502' — hassasiyet şişmiş, künye altinorda t:1502-01-01). denetim/ARASTIRMA-KIRIM2-0913.md ② + TDV nogaylar."},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ③ STAVROPOL–KUMA BOZKIRI (Küçük Nogay) — Kabartay'ın 189 km'lik kolunun
//    hedefi. TDV `nogaylar`: Kazi Mirza'nın bölüğü 1557-58'de İdil'i geçip
//    bu kuşağa yerleşti (Küçük Nogay); 18. yy başında Kırım denetiminde.
//    ⚠️ 42,40'ın DOĞUSUNA geçilmedi — orası Kalmuk sahası (§⑤).
//    🔴 KONUM DÜZELTİLDİ: 45,00/42,40 → 44,85/42,60. Ölçüm HER ÜÇ EKSENDE
//    de yeni konumu gösterdi: ortalama kazanç 63 → 70 km · `don-kazak`tan
//    devralınan kare 6 → 3 · kuzey erişimi 46,0K → 45,5K (Manıç'ın
//    güneyinde kalıyor). Kapsanan kare 22 → 20, yani bedeli iki kare.
{ ad:"Stavropol–Kuma bozkırı", v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak:"Emre kararı D (13 Eyl 2026, oturumlar/KOSU10-SONRASI.md 0043/H-0003): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE. TDV `kirim`: 'Nogaylar'ın hana tâbiiyeti gevşek olup bunlar hanlık iddiasında bulunanlarla yahut Ruslar ve Kazaklar'la birleşerek…' (denetim/ARASTIRMA-KIRIM-0912.md ③). Pencere = s:kirim ∩ Kırım'ın Osmanlı tâbiliği 1475-06-06 (Kefe fethi, olaylar.js) → 1774-07-21 (Küçük Kaynarca, olaylar.js); dışı s:kirim kaldı."}],  neden:"VERI-KIRIM 14 Eyl 2026 ③ (Emre kararı D): s:kirim ∩ 1475-06-06→1774-07-21 → v: gevşek himaye (kid kirim, statu gevsek, himaye:true). ‖ VERI-KIRIM 14 Eyl 2026 (YAMA-KIRIM2-0913, Emre kararı D öncesi adım ①): altinorda→kirim geçişi 1441 → 1502-03-01.", tur:"bolge", lat:44.85, lon:42.60, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda",kaynak:"TDV altin-orda-hanligi (Altın Orda 1241-1502) · TDV kirim (1502 Mengli Giray son darbe) · IEU 'Kuban' (Nogaylar Altın Orda dağıldıktan sonra Kuban'a yerleşip Kırım'la müttefik, tarih yok). 1441'de Kırım'ın Kuban hâkimiyeti BULUNAMADI; 1441-1502 Büyük Orda tasarrufu adıyla BULUNAMADI. GÜN: kaynak yalnız yıl; 1502-03-01 çekirdek madde olaylar_ek5.js günü (gun:'1502' — hassasiyet şişmiş, künye altinorda t:1502-01-01). denetim/ARASTIRMA-KIRIM2-0913.md ② TDV nogaylar: Kırım'a bağlı Küçük Nogay Kabarda-Azak arasına 1557-58'de geldi ⇒ 1502-1557 sahibi BULUNAMADI (açık soru)."},{f:"1774-07-21",t:"1783-04-19",d:"kirim"},{f:"1783-04-19",t:"1917-03-15",d:"rusya"},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

// ④ KUBAN DELTASI BOZKIRI — DALGA-0066/H-0022, denetim/YAMA-KARADENIZ-0917.json Y-3
//    (KARADENIZ-KAFKAS ölçtü, UYGULA-4 indirdi 18 Eylül 2026).
//    🔴 SEBEP §2 EMİLMESİ: Kuban deltası ile Azak'ın doğu kıyısında nokta YOKTU;
//    toprak ANAPA'nın peteğine emiliyor ve 1781'den itibaren Osmanlı DOĞRUDAN
//    boyanıyordu — taban gövdenin 3.075 km²'si Kuban'ın KUZEYİNDE kalıyor, oysa
//    TDV `anapa` Kuban'ın kuzeyini (Taman, Temrük, Açe, Açu) 1783'te RUSYA'da
//    sayıyor. Yamanın simülasyonu: Anapa 6.964 → 4.174 km², nehir kuzeyi
//    2.575 → 121 km². Konum bir YER ADI değil DOLGUDUR (Açu/Temrük'ün koordinatı
//    doğrulanamadı); 45,50/37,80 denenen üç konumun en iyisi (öteki ikisi 444 ve
//    482 km² bırakıyordu), ikinci bir nokta (45,90/38,30) Taganrog ve Azak'tan
//    büyük parça aldığı için REDDEDİLDİ.
//    Zaman çizgisi komşu "Kuban Nogay bozkırı" ile BİREBİR aynı ve aynı
//    kaynaklara dayanıyor (atlas taklidi değil: her dilimin kaynağı ayrı yazılı).
//    D002: en yakın mevcut nokta Anapa 77,4 km — 3 km eşiği temiz, ad çakışması yok.
{ ad:"Kuban deltası bozkırı", v:[{f:"1502-03-01",t:"1774-07-21",k:"Kırım Hanlığı",kid:"kirim",statu:"gevsek",himaye:true,kaynak:"Emre kararı D (13 Eyl 2026, oturumlar/KOSU10-SONRASI.md 0043/H-0003): hanlığın bozkır/nüfuz alanı GEVŞEK HİMAYE — komşu 'Kuban Nogay bozkırı' ve 'Kuban (Yekaterinodar)' ile aynı dönem ve aynı gerekçe (TDV `kirim`, TDV `nogaylar`)."}],  neden:"KARADENIZ-KAFKAS 17 Eyl 2026 (DALGA-0066 H-0022) ölçtü, UYGULA-4 18 Eyl 2026 indirdi: Kuban deltasında nokta yoktu, toprak Anapa'nın peteğine emilip Osmanlı doğrudan boyanıyordu (§2). Dolgu noktasıdır, yer adı değildir.", tur:"bolge", lat:45.50, lon:37.80, g:0, k:0, d:[],
  s:[{f:"1281-01-01",t:"1502-03-01",d:"altinorda",kaynak:"gün komşudan: Kuban Nogay bozkırı — onun kaynağı TDV altin-orda-hanligi + TDV kirim (yıl 1502, gün çekirdek madde olaylar_ek5.js). §4 şartlı komşu kuralı: komşunun günü kendi kaynağına dayanıyor, bu dolgu için kaynak gün vermiyor, aynı süreç ve bitişik toprak."},{f:"1774-07-21",t:"1783-04-19",d:"kirim",kaynak:"TDV kucuk-kaynarca-antlasmasi md. 3 — Kuban müstakil hanın idaresinde; Rusya'ya bırakılanlar yalnız Kılburun, Kerç, Yenikale · TDV sahin-giray — 1777'de Taman ve Kuban kabileleri Şâhin Giray'ı han tanıdı."},{f:"1783-04-19",t:"1917-03-15",d:"rusya",kaynak:"TDV cerkezler — 'Kırım Hanlığı 1783'te Rusya'ya ilhak edildi. Kuban nehri Osmanlı-Rus sınırı olarak belirlendi' · TDV anapa — 'Taman, Temrük, Açe ve Açu kalelerinin Kuban nehrinin kuzeyinde Rusya'da kalması'. Gün: çekirdek madde 1783-04-19."},{f:"1917-03-15",t:"1917-11-07",d:"rusya-gecici-hukumet"},{f:"1917-11-07",t:"1923-10-29",d:"sovyet-rusya"}] },

];

;
/* ==== data/yerlesimler_ek_ferhadpasa.js ==== */
// =====================================================================
// FERHAD PAŞA HATTI — Van eyaletinin DOĞU sancakları
// Oturum: FERHAD PAŞA HATTI · kutu 0021 / H-0019 · H-0027 · H-0028
//
// 🔴 BU DOSYA, ŞARTNAMEDE BEKLENEN İŞİ YAPMIYOR — ÇÜNKÜ O İŞ BAŞKA
//    ÇIKTI. Ölçüm (M-0827 · M-0831):
//      H-0028'in saydığı 18 yerin 18'i de veride ZATEN VAR.
//      py arac/nicin_bos.py --lat 38.045 --lon 44.010 --gun 1590-03-21 \
//         --yaricap 300   →   300 km içinde 44 nokta, en yakın 58,0 km
//      ⇒ `CLAUDE.md §2`nin sorusu ("o bölgede nokta var mı?") EVET.
//         Kusur NOKTASIZLIKTA değil, DÖNEM VERİSİNDE — ve o kayıtlar
//         BAŞKA DOSYALARDA (yerlesimler.js · ek26 · kalite4).
//    Bu dosya yalnız GERÇEKTEN EKSİK olan noktaları taşır.
//
// ⚠️ KAPSAM: dördü de Van eyaletinin DOĞU kuşağında, yani H-0019
//    ("Gümrü Başkale Çaldıran neden farklı renkte") ve H-0027 ("Van'ın
//    doğusundaki topraklar alınmamış mı") maddelerinin tam üstünde.
//    Van eyaletinin BATI sancakları (Adilcevaz · Ahlat · Müküs · Hizan)
//    da eksik ölçüldü ama KAPSAM DIŞI — koordinatöre bildirildi,
//    buraya YAZILMADI.
//
// ─────────────────────────────────────────────────────────────────────
// KAYNAK — TDV, HTTP koduyla ve İÇERİK OKUNARAK doğrulandı (`§4`)
//
//   van (200) — Van eyaletine bağlı birimlerin TAM listesi, birebir:
//     "Adilcevaz, Bitlis, Erciş, Muş, BARGİRİ, Hizan, Hakkâri, Müküs,
//      Kârkâr, Şırvi, Kisan, Espayrid, Ağakis, MAHMUDİ ve KOTUR"
//     ve: Van Kalesi'nin fethi 24 Ağustos 1548 → "bölge beylerbeyilik
//     haline getirildi"
//     🔴 Yani Mahmudi (Hoşap) ve Kotur, TDV'nin kendi listesinde OSMANLI
//        idarî birimidir. Bu, `ek26`nın aynı kuşağı `iran` yazmasını
//        doğrudan çürütür (o dosya benim değil — bildirildi, dokunulmadı).
//
//   hakkari (200) — "XVI. yüzyılın başlarında Osmanlı idaresine giren
//     yöre" ... Van fethedilince "kurulan Van eyaletine bağlandı" ve
//     "sahiplerine ait olarak kabul edilen sancaklardan (OCAKLIK) biri
//     haline getirildi". Çölemerik ve Gever (Yüksekova) bu birimde.
//     ⚠️ `colemerik` slug'ı 200 döndürür ama gövdesi TEK SATIR:
//        "bk. HAKKÂRİ" — ÇAPRAZ GÖNDERME STUB'I. O yüzden dayanak
//        `hakkari`ye bağlandı, `colemerik`e değil.
//
//   maku (200) — Kotur için ikinci dayanak, birebir:
//     "1639 yılında IV. Murad ... Kasrışîrin Antlaşması çerçevesinde
//      Safevîler'den bölgede bulunan KOTUR KALESİ'yle birlikte Mâkû
//      Kalesi'nin de yıkılmasını istedi"
//
// ─────────────────────────────────────────────────────────────────────
// KIRILMA GÜNLERİ — HİÇBİRİ YENİ DEĞİL, hepsi ÇEKİRDEKTE maddeli
//   1548-08-24  olaylar*: "Van'ın fethi ve doğu sınırının sabitlenmesi"
//   1639-05-17  olaylar.js:92 Kasr-ı Şîrîn Antlaşması
//   1281/1351/1467/1502 zinciri: Van kaydının (yerlesimler.js:234) kendi
//   günleri — birebir kopyalandı, yeni gün üretilmedi.
//   ⇒ `Değişmez 2` için SIFIR yeni kırılma günü.
//
// 3 KM MÜKERRER SINAVI (`§11`) — ÖLÇÜLDÜ, evren 2580 nokta:
//   Çölemerik 48,5 km (Yüksekova) · Hoşap 30,5 km (Başkale)
//   Bargiri   20,9 km (Çaldıran)  · Kotur 40,2 km (Özalp)
//   ⇒ dördü de GEÇER; en dar pay 20,9 km, eşiğin ~7 katı.
//
// ⚠️ `y:` ALANI BİLEREK YAZILMADI. Van 1548'de kuşatmayla alındı ama
//   TDV bu dört birim için EDİNİM BİÇİMİ söylemiyor. `VERI-YAPISI.md`:
//   "Bilinmiyorsa alanı hiç yazma. Eksik alan yanlış alandan iyidir."
//   İlk taslakta dördüne de `y:"kusatma"` yazmıştım — kaynaksızdı,
//   geri alındı.
// =====================================================================
window.YERLESIMLER_EK_FERHADPASA = [

// ───────── Van'ın GÜNEYDOĞUSU · Hakkâri ocaklığının merkezi ─────────
{ ad:"Çölemerik (Hakkâri)", tur:"sehir", lat:37.5744, lon:43.7408, g:0, k:3, m:"Van",
  // kaynak: hakkari — Van eyaletine bağlı OCAKLIK sancak; zincir Van
  // kaydıyla birebir aynı (aynı fetih, aynı eyalet).
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── Van'ın DOĞUSU · Mahmudi sancağının kale merkezi ─────────
{ ad:"Hoşap (Mahmudi)", tur:"kale", lat:38.2222, lon:43.7439, g:0, k:3, m:"Van",
  // kaynak: van — "Mahmudi" TDV'nin Van eyaleti birim listesinde ADIYLA
  // geçiyor. Hoşap Kalesi o sancağın merkezidir.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── Van'ın KUZEYDOĞUSU · Erciş ile Çaldıran arasındaki boşluk ─────────
{ ad:"Bargiri (Muradiye)", tur:"kale", lat:38.9931, lon:43.7669, g:0, k:3, m:"Van",
  // kaynak: van — "Bargiri" TDV'nin Van eyaleti birim listesinde geçiyor.
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1920-04-23",t:"1923-10-29",d:"tbmm-turkiye"}],
  d:[{f:"1548-08-24",t:"1920-04-23"}], v:[] },

// ───────── HATTIN EN DOĞUSU · Kotur geçidi ─────────
// 🔴 Bu kayıt H-0027'nin ("Van'ın doğusundaki topraklar alınmamış mı")
//    doğrudan cevabıdır: TDV Kotur'u Van eyaletinin BİRİMİ olarak sayar.
//    Bitişi 1639-05-17 Kasr-ı Şîrîn'e bağlandı, çünkü `maku` maddesi
//    Kotur Kalesi'ni tam o antlaşma çerçevesinde anıyor. 1639 SONRASI
//    için ayrı bir Osmanlı dayanağı BULUNAMADI — o yüzden uzatılmadı.
{ ad:"Kotur", tur:"kale", lat:38.4750, lon:44.3958, g:0, k:3, m:"Van",
  s:[{f:"1281-01-01",t:"1351-01-01",d:"ilhanli"},{f:"1351-01-01",t:"1467-01-01",d:"karakoyunlu"},{f:"1467-01-01",t:"1502-01-01",d:"akkoyunlu"},{f:"1502-01-01",t:"1548-08-24",d:"safevi"},{f:"1639-05-17",t:"1736-03-08",d:"safevi"},{f:"1736-03-08",t:"1747-06-20",d:"afsar"},{f:"1747-06-20",t:"1794-01-01",d:"zend"},{f:"1794-01-01",t:"1923-10-29",d:"kacar"}],
  d:[{f:"1548-08-24",t:"1639-05-17"}], v:[] },

];

;
/* ==== data/yerlesimler_ek_macaristan.js ==== */
// =====================================================================
// NOKTA MACARİSTAN — kutu paketi 0023 · H-0001 · H-0002 · H-0005
// İŞÇİ oturum · 19-20 Ağustos 2026
//
// window.YERLESIMLER_EK_MACARISTAN  (CLAUDE.md §7: dosya adındaki ayırt
// edici parça DEĞİŞKEN adında da var)
//
// 🔴 DOSYA HENÜZ BAĞLANMADI — `arac/girdi.py` GIRDI_DOSYALARI içinde YOK.
//    Bağlamak koordinatörün kararıdır ve AŞAĞIDAKİ DURDURUCU ÖDENMEDEN
//    yapılmamalıdır.
//
// ═════════ 🔴 DURDURUCU — BU DOSYA TEK BAŞINA BAĞLANMAZ ═════════
//
// Bu dosyadaki üç nokta 1682-09-16 → 1685-10-15 arası `v:` (tâbi) taşıyor:
// Tököli İmre'nin ORTA MACAR krallığı. Ama aynı krallığın ÇEKİRDEĞİ olan
// üç nokta BAŞKA bir dosyada duruyor ve bugün 1526'dan 1918'e kesintisiz
// `avusturya`:
//
//     data/yerlesimler_ek.js:94   Kassa (Košice)     ← Tököli'nin BAŞKENTİ
//     data/yerlesimler_ek.js:98   Eperjes (Prešov)
//     data/yerlesimler_ek.js:102  Tokaj
//
// Bu dosya o üçü düzeltilmeden bağlanırsa 1682-1685 arası harita ALACALI
// çıkar: Fülek · Ungvár · Munkács tâbi renkte, tam ortalarındaki Kassa
// Habsburg renginde. Yani DÜZELTME, DÜZELTTİĞİNDEN DAHA KÖTÜ GÖRÜNÜR.
// ⇒ Koordinatöre üç satırlık yama AYRICA bildirildi (rapor).
//
// 📌 Ve o üç kaydın yorumunda bu borç ZATEN yazılıydı — `yerlesimler_ek.js`
//    satır 85-93: "TÖKÖLİ BOŞLUĞU — bilerek YAZILMADI ... şehir şehir
//    denetim tarihi gerekiyor ve bulunamadı."
//    🟢 O ENGEL KALKTI: TDV `tokoli-imre` şehir şehir tarih vermiyor ama
//    TOPLU tarih veriyor — "15 Ekim 1685'te ... Tököli'yi yakalattı ...
//    Esir alındığı haberinin ulaşmasıyla beraber ... Munkács Kalesi'nin
//    DIŞINDA BÜTÜN KALE VE ŞEHİRLER TESLİM OLDU." Şehir şehir tarihe
//    gerek yok; kaynağın kendisi tek güne bağlıyor.
//
// ═════════ ① NİÇİN VARIM — ÖLÇÜM (CLAUDE.md §2, emilme) ═════════
//
// Emre H-0001'de sordu: "orta macaristan denilen ve tökeli imre'nin kralı
// ilan edildiği bölge neresi ... kaç tane macaristan var".
// Haritada ölçüldü — `arac/nicin_bos.py`, gün 1683-01-01, taban 2580 nokta:
//
//   yer                 en yakın nokta            mesafe   O GÜN SAHİBİ
//   Fülek  48,27/19,82  Eğri                       58,0 km  OSMANLI
//   Ungvár 48,62/22,30  Kassa                      76,4 km  avusturya
//   Munkács 48,44/22,72 Tokaj                     103,4 km  avusturya
//   Szatmár 47,79/22,87 Varad                     108,3 km  OSMANLI
//
// ⇒ İKİ AYRI HATA, ve `CLAUDE.md §3.5.1`in dediği gibi İKİ YÖNE DE:
//   Fülek ve Szatmár çevresi noktasız olduğu için OSMANLI peteğine
//   emiliyor — Osmanlı FAZLA görünüyor. Fülek 1593'ten, Szatmár hiçbir
//   zaman Osmanlı olmadı.
//   Ungvár-Munkács şeridi ise 76-103 km öteden Kassa/Tokaj'a emiliyor —
//   sahibi tesadüfen doğru ama sınır KURGUSAL, ve Orta Macar'ı ifade
//   edecek hiçbir nokta yok.
//
// 🔴 VE ASIL BULGU: Orta Macar Krallığı bu atlasta HİÇ YOK.
//   1683 kesitinde Yukarı Macaristan'ın üç noktası da (Kassa · Eperjes ·
//   Tokaj) `avusturya`. TDV `macaristan` ise açıkça yazıyor:
//   "Imre Thököly önderliğiyle Kuzey Macaristan'da bir prenslik
//    (Türkçe'si: Orta Macar) kurulmasına yol açtı (1682). Bununla ülke
//    1685'e kadar DÖRT parçaya bölündü."
//   ⇒ Harita 1682-1685 arası ülkeyi ÜÇE bölüyor, kaynak DÖRDE diyor.
//
// ═════════ ② TARİHLER — HİÇBİRİ UYDURULMADI ═════════
//
// 🟢 1682-09-16 · TDV `tokoli-imre` (müellif SÁNDOR PAPP), gövdesi okundu:
//    "Budin Beylerbeyi İbrâhim Paşa 16 Eylül'de Fülek Kalesi önünde İmre
//     Tököli'ye prenslik alâmetlerini verdi; IV. Mehmed'den de berat
//     alınmıştı. Buna göre Orta Macar adıyla yeni bir devlet kuruluyor,
//     bunun başına Orta Macar hâkimi unvanıyla Tököli getiriliyordu ...
//     vergi miktarı 40.000 kara kuruş olarak belirleniyor"
//    ⇒ Kronolojide TAM GÜN maddesi VAR: olaylar_ek5.js
//      "Tököli İmre'ye Orta Macar krallığı beratının verilmesi".
//      Değişmez 2 AÇILMIYOR.
//
// 🟢 1685-10-15 · aynı madde:
//    "15 Ekim 1685'te Serdar Melek İbrâhim Paşa'nın emriyle Varad Beylerbeyi
//     Ahmed Paşa kendisine yardım için gelen İmre Tököli'yi yakalattı ...
//     Esir alındığı haberinin ulaşmasıyla beraber İmre Tököli'nin eşi
//     Ilona Zrínyi'nin savunduğu Munkács Kalesi'nin DIŞINDA bütün kale ve
//     şehirler teslim oldu."
//    ⇒ En yakın kronoloji maddesi 1685-10-19 "Solnok'un kaybı" — 4 GÜN.
//      Değişmez 2 penceresi (±30) TUTUYOR, yeni kırılma günü doğmuyor.
//    ⚠️ TDV krallığın hukuken bitişini 2 Ocak 1686'ya bağlıyor ("Tököli
//      2 Ocak 1686'da Belgrad'da serbest bırakıldığında Orta Macar
//      Krallığı artık ortadan kalkmıştı"). O GÜN KULLANILMADI ve sebebi
//      ölçüldü: 1686-01-02'nin ±30 gününde madde YOK (en yakın 1685-10-19,
//      75 gün) ⇒ Değişmez 2'yi AÇARDI. Fiilî çöküş günü (15 Ekim) hem
//      kaynaklı hem maddeli; hukukî bitiş günü yalnız kaynaklı.
//      📌 Bu bir SADELEŞTİRMEDİR, ölçüm değil. 1686-01-02'ye bir madde
//         yazılırsa tarih oraya çekilmeli.
//
// ═════════ ③ NE YAZILMADI — ve niçin ═════════
//
// 🔴 FÜLEK'İN OSMANLI SANCAK DÖNEMİ (1554-1593) YAZILMADI.
//    TDV `budin` (HTTP 200, gövdesi okundu) 1568 sancak listesinde
//    **Filek**'i açıkça sayıyor: "Budin, Semendire, İzvornik, Vulçıtrın,
//    Pojega, Peçuy, İstolni Belgrad, Estergon, Segedin, Srem, Hatvan,
//    Şimontorna, Kopan, FİLEK, Seksar, Sigetvar, Seçen, Novigrad, Solnık,
//    Sekçöy". Yani dönem VAR ve TDV kaynaklı.
//    ⚠️ Ama GÜNLERİ yok: TDV ne fethi ne geri alınışı tarihlendiriyor,
//    kronolojide de 1554 ve Kasım 1593 civarında karşılık gelen madde YOK
//    (en yakın 1554-08-22 Şehrizor · 1593-07-01 Uzun Savaş'ın başlaması —
//    ikisi de BAŞKA olay). Uydurulmuş gün Değişmez 2'yi açardı.
//    ⇒ `yerlesimler_ek29.js`in Léva kararının aynısı: dönem yazılmadı,
//      borç KAYDEDİLDİ. İki kronoloji maddesi yazılınca açılmalı.
//    📌 Ve yazılmaması bugünkü hatayı BÜYÜTMÜYOR: 1560 ve 1580 kesitleri
//      ölçüldü, Fülek çevresini bugün `macaristan` (Eğri, 58 km) boyuyor —
//      yani zaten Habsburg tarafı. Kazanç 1593-1682 aralığında: o 89 yılda
//      bugün OSMANLI boyanıyor ve bu nokta onu kesiyor.
//
// 🔴 DEBRECEN YAZILMADI — ölçüldü, karar verilemedi.
//    58,3 km'den Varad'a (OSMANLI) emiliyor. Ama Debrecen Osmanlı tahrir
//    defterlerinde Solnok sancağı içinde geçen, üç tarafa birden vergi
//    veren muhtar bir kasabaydı; "Osmanlı boyanması" açıkça YANLIŞ
//    değil. Doğru statüsünü akademik kaynakta DOĞRULAYAMADIM ⇒ yazmadım.
//    kaynak: bulunamadı — TDV `debrecen`/`debrezin` sluglarının ikisi de
//    HTTP 302 (ölü); TDV `macaristan` Debrecen'i anıyor ama statüsünü
//    tartışmıyor.
//
// 🔴 SÁROSPATAK YAZILMADI — boşluk DEĞİL: Tokaj'a 25,9 km.
//
// ═════════ ④ 3 KM KURALI — ölçüldü ═════════
//    Dördünün de 2580 noktalık tabana en yakın komşusu:
//      Fülek   58,0 km (Eğri)     Ungvár  76,4 km (Kassa)
//      Munkács 103,4 km (Tokaj)   Szatmár 108,3 km (Varad)
//    Birbirlerine en yakın çift: Ungvár ↔ Munkács 36,0 km.
//    Hiçbiri 3 km eşiğine yaklaşmıyor.
//
// ═════════ ⑤ ORTAK ÇİZGİ — kardeş kayıtlardan, kendi seçimim DEĞİL ═════
//    `k:0` · `g:0` · 1526-08-29 (Mohaç) kırılması: dördü de Kassa ·
//    Eperjes · Tokaj · Sopron kayıtlarının çizgisiyle BİREBİR aynı.
//    `m:` YAZILMADI — Gyula (yerlesimler_ek5.js) gerekçesinin aynısı:
//    `k`/`m`'nin zaman boyutu yok (Değişmez 3), hangi merkez yazılsa
//    öbür dönemde çelişki üretirdi.
//    ⚠️ SADELEŞTİRME, ölçüm değil: Yukarı Macaristan 16-17. yüzyılda
//    Bocskai · Bethlen · I. Rákóczi György idaresine de girdi. Mevcut
//    Kassa/Eperjes/Tokaj kayıtları bu ara dönemleri MODELLEMİYOR; bu
//    dosya onlara uydu. Farklı yazsaydım aynı bölge içinde KURGUSAL bir
//    sınır doğardı.
//
// ═════════ ⑥ BAĞLAMADAN KOŞULAN DENETİM — hepsi TEMİZ ═════════
//    taban 2580 nokta · girdi.oku_dosya() ile (kendi ayrıştırıcım DEĞİL)
//      ad çakışması        0
//      3 km ihlali         0   (en yakın taban komşusu 58,1 km;
//                               kardeşler arası en yakın Ungvár↔Munkács 36,6 km)
//      Değişmez 1          boşluk 0 · çakışma 0 (dördünde de)
//      Değişmez 2          6 kırılmanın 6'sı pencerede — 0·3·0·3·0·0 gün
//      kimlik → renk       4/4 VAR (avusturya #bdab3f · macaristan #20d880 ·
//                          cekoslovakya #930c5d · romanya-kralligi #2828d8)
//      harita penceresi    4/4 içeride
//      motor_kara maskesi  4/4 karada
//
// 🔴 VE BİR ŞEYİ AÇIKÇA YAZIYORUM — DENETİM GEÇİYOR AMA SORU YARIM:
//    1682-09-16 ve 1685-10-15 bu atlasın YERLEŞİM katmanında YENİ kırılma
//    günleridir (kronolojide var, veride yoktu). 1682-09-16'nın TAM GÜN
//    maddesi var, sorun yok. Ama 1685-10-15'in en yakın maddesi 3 gün
//    ötedeki "Vânî Mehmed Efendi'nin sürgünde vefatı" — yani TOPRAKLA
//    İLGİSİZ bir madde. Değişmez 2'nin ±30 penceresi TUTUYOR ama
//    değişmezin VAR OLUŞ SEBEBİ tutmuyor (CLAUDE.md §3: "değişim, o güne
//    rastgele denk gelen alakasız bir maddenin altında belirir").
//    ⇒ Koordinatöre istendi: 1685-10-15'e "Tököli İmre'nin Varad'da
//      tutuklanması ve Orta Macar Krallığı'nın çöküşü" maddesi.
//      O madde yazılana kadar bu kayıtlar denetimi geçer ama kullanıcıya
//      YANLIŞ BAŞLIK gösterir.
//
// ═════════ ⑦ KAYNAK DURUMU — HTTP koduyla ölçüldü ═════════
//    🟢 CANLI  macaristan · erdel · budin · uyvar · estergon · egri ·
//              sigetvar · tokoli-imre   (200)
//    🔴 ÖLÜ    fulek · filek · debrecen · debrezin · munkac · munkacs ·
//              ungvar · satmar · sakmar · kalocsa · simontorna   (302)
//    ⇒ Dört noktanın hiçbirinin TDV'de müstakil maddesi YOK. Bu bir
//      COĞRAFÎ boşluk değil TANECİKLİK boşluğudur (CLAUDE.md §4): TDV
//      Macaristan'ı görüyor, kasaba düzeyinde konuşmuyor.
// =====================================================================

window.YERLESIMLER_EK_MACARISTAN = [

// ───────── ① FÜLEK — Orta Macar beratının VERİLDİĞİ yer ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.2701641 / 19.8222938 (Fiľakovo,
//   okres Lučenec, Banskobystrický kraj) — hafızadan yazılmadı.
// tur:"kale" — TDV `tokoli-imre` ondan "Fülek KALESİ" diye söz ediyor.
// kaynak: TDV `tokoli-imre` (200, gövdesi okundu) — 16 Eylül 1682 beratı;
//   TDV `budin` (200, gövdesi okundu) — 1568 sancak listesinde "Filek".
//   Osmanlı döneminin GÜNLERİ için: bulunamadı (bkz. dosya başı ③).
{ ad:"Fülek (Fiľakovo)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"kale", lat:48.2702, lon:19.8223, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1685-10-15",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1923-10-29",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ② UNGVÁR — Ung sancağı, Kuzeydoğu Macaristan ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.6223731 / 22.3022572 (Ужгород).
// TDV `tokoli-imre` Ungvár'ı ADIYLA ANMIYOR; bölgeyi anıyor:
//   "Kuzeydoğu Macaristan'a bağlı üç nahiyenin Kuruz askerlerinin kışı
//    geçirmeleri için İmre Tököli'ye devredilmesini kabul etti" (1680)
//   ve TDV `macaristan` "Kuzey Macaristan'da bir prenslik".
// ⚠️ ÖLÇMEDİM: Ungvár'ın Tököli'ye HANGİ GÜN geçtiğini bulamadım. `v:`
//   dönemi kaynağın TOPLU tarihine (16 Eylül 1682 kuruluş → 15 Ekim 1685
//   "bütün kale ve şehirler teslim oldu") yaslandı, şehrin kendi gününe
//   DEĞİL. Bu bir bölgesel yaslamadır ve öyle olduğu burada yazılıdır.
// kaynak: TDV `tokoli-imre` + TDV `macaristan` (ikisi de 200, gövdeleri
//   okundu). Şehrin kendi tarihçesi için: bulunamadı — TDV'de madde yok.
{ ad:"Ungvár (Uzhhorod)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1685-10-15 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği şehri. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"sehir", lat:48.6224, lon:22.3023, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1685-10-15",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1919-09-10",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919) · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1919-09-10",t:"1923-10-29",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919)"}],
  d:[],
  v:[{f:"1682-09-16",t:"1685-10-15",k:"Orta Macar Krallığı (Tököli İmre)",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ③ MUNKÁCS — TDV'nin ADIYLA SAYDIĞI TEK İSTİSNA ─────────
//
// Koordinat: OpenStreetMap/Nominatim 48.4421119 / 22.7185408 (Мукачево);
//   GeoNames 48.4424822 / 22.718 ile 40 m fark — ikisi de aynı yer.
//
// 🔴 BU KAYIT ÖTEKİLERDEN AYRI BİR `t:` TAŞIYOR ve sebebi KAYNAKTA:
//   TDV `tokoli-imre`: "İmre Tököli'nin eşi Ilona Zrínyi'nin savunduğu
//   Munkács (Munkacevo, bugünkü Ukrayna) Kalesi'nin DIŞINDA bütün kale ve
//   şehirler teslim oldu."  ⇒ Munkács 15 Ekim 1685'te teslim OLMADI.
//
// ⚠️ VE BURADA BİR SADELEŞTİRME VAR, ÖLÇÜM DEĞİL — açıkça yazıyorum:
//   Kalenin GERÇEK teslim tarihi 17 Ocak 1688'dir. O gün KULLANILMADI,
//   çünkü ±30 gününde kronoloji maddesi YOK: en yakın madde 1687-12-17
//   ("Eğri'nin kaybı") ve arada 31 GÜN var — pencereyi BİR GÜNLE
//   kaçırıyor. Yazsaydım Değişmez 2'yi açardım.
//   ⇒ Dönem 1687-12-17'ye yaslandı. Bu gün Munkács'ın kendi günü DEĞİL;
//     bölgesel bir yaslamadır ve seçilmesinin sebebi yakınlığın yanında
//     nedenselliktir: Eğri'nin düşmesiyle "Osmanlı Devleti'nin
//     Macaristan'daki kuzey kanadı tümüyle tasfiye edildi" (olaylar_ek6.js)
//     ve tamamen yalıtılan Munkács bir ay sonra teslim oldu.
//   🟢 ÇARESİ TEK SATIR: 1688-01-17'ye "Munkács Kalesi'nin teslimi —
//     Ilona Zrínyi'nin üç yıllık savunmasının sonu" maddesi yazılırsa
//     tarih GERÇEĞİNE çekilebilir. Koordinatöre bildirildi.
//
// kaynak: TDV `tokoli-imre` (200, gövdesi okundu) — Munkács istisnası ve
//   Ilona Zrínyi savunması TDV'nin kendi cümlesidir.
//   17 Ocak 1688 günü için: bulunamadı — TDV tarih VERMİYOR; tarih
//   yayımlanmış başvuru eserlerinde geçiyor ama HAKEMLİ akademik kaynakta
//   doğrulayamadım, o yüzden veriye YAZILMADI, yalnız burada kayıtlı.
{ ad:"Munkács (Mukacheve)",neden:"`m:` NULL idi; `oneri.m`=\"Kassa (Košice)\" kademe yamasında duruyordu ve hiçbir alet onu taşımıyordu (izdüşüm yalnız `.k` alıyor). Aynı yamanın `k:4` yarısı ZATEN inmiş (canlı k:4). Geçerli pencereler: 1682-09-16..1687-12-17 — `kd:` olarak YAZILAMADI, açık borç.  ||  ⚪ DEVRALDIM — kaynağa SORULMADI (beş örneklik yoklamanın dışında kaldı).",kaynak:"TDV macaristan — kademe yamasından DEVRALINDI (data/yer_yama_kademe.js, guven:HUKUM). Gerekçe: Orta Macar prensliği kalesi. TDV'de adı GEÇMİYOR (arandı).",m:"Kassa (Košice)", tur:"kale", lat:48.4421, lon:22.7185, g:0, k:4,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1682-09-16",d:"avusturya"},
     {f:"1688-01-17",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1919-09-10",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919) · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1919-09-10",t:"1923-10-29",d:"cekoslovakya",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '10 Eylül'de Avusturya ile Saint-Germain … antlaşmaları imzalandı' (1919)"}],
  d:[],
  v:[{f:"1682-09-16",t:"1688-01-17",k:"Orta Macar Krallığı — Ilona Zrínyi'nin Munkács savunması",kid:"orta-macar-kralligi",statu:"vassal"}] },

// ───────── ④ SZATMÁR — `v:` YAZILMADI, ve bu bir HÜKÜM ─────────
//
// Koordinat: OpenStreetMap/Nominatim 47.7891763 / 22.8725598 (Satu Mare).
//
// 🔴 ORTA MACAR DÖNEMİ YAZILMADI. Szatmár coğrafî olarak Kuzeydoğu
//   Macaristan'dadır, yani TDV'nin tarif ettiği bölgenin İÇİNDE. Ama
//   Szatmár KALESİ Habsburg garnizonlu bir sınır kalesiydi ve Tököli'nin
//   eline geçtiğini ne TDV'de ne akademik bir kaynakta DOĞRULAYABİLDİM.
//   ⇒ CLAUDE.md §11: "ATLAS SEFERİ DEĞİL TASARRUFU BOYAR." Bir bölgenin
//     içinde olmak, o kalenin düştüğü anlamına gelmez — `uyvar` sancak
//     listesinde adı geçen Komárom'un yazılmama gerekçesinin aynısı
//     (yerlesimler_ek29.js).
//   Karşı kanıt çıkarsa `v:[{f:"1682-09-16",t:"1685-10-15",...}]` eklenir
//   ve `s:` avusturya dönemi üçe bölünür.
//
// 🟢 YAZILMASININ SEBEBİ AYRI VE ÖLÇÜLDÜ: bugün Szatmár çevresini 108,3 km
//   öteden Varad (OSMANLI) boyuyor. Szatmár hiçbir zaman Osmanlı olmadı;
//   bu nokta o fazlalığı kesiyor. Yani kayıt Orta Macar için değil,
//   §2 EMİLMESİ için var.
//
// ⚠️ SADELEŞTİRME: Szatmár 17. yüzyılda Erdel ile Habsburg arasında
//   birkaç kez el değiştirdi (Partium). Kardeş kayıtların hiçbiri bu ara
//   dönemleri modellemiyor; ben de modellemedim. Eksik, ama YANLIŞ DEĞİL.
// kaynak: bulunamadı — TDV `satmar`/`sakmar` ölü (302); TDV `macaristan`
//   Szatmár'ı yalnız 1711 Szatmár Muahedesi bağlamında anıyor. Çizgi
//   kardeş kayıtlardan (Kassa · Eperjes · Tokaj, hepsi 1526-08-29).
{ ad:"Szatmár (Satu Mare)", tur:"sehir", lat:47.7892, lon:22.8726, g:0, k:3,
  s:[{f:"1281-01-01",t:"1526-08-29",d:"macaristan"},
     {f:"1526-08-29",t:"1918-11-11",d:"macaristan-habsburg",kaynak:"TDV macaristan (Géza Dávid): '1867'de iki ülke arasında bir uzlaşma meydana geldi. Avusturya-Macaristan monarşisi ortaya çıktı'; Trianon (4 Haziran 1920) Macaristan'ın kaybı, arazi 'Hırvatistan hariç' sayılır. Nokta Macar tacı (Transleithania) toprağı — iç taksimat için akademik alıntı: bulunamadı (denetim/ONCE1281-MACAR-TAC-1004.md). Önceki yazım `avusturya` (Habsburg Avusturya) idi."},
     {f:"1918-11-11",t:"1920-06-04",d:"macaristan-naiplik",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı' · ara dönem: Macar tacı 1918-11-11 → antlaşma (macaristan-naiplik künyesi 1918-11-16 — mevcut çekirdek verisinin 5 günlük emsali)"},
     {f:"1920-06-04",t:"1923-10-29",d:"romanya-kralligi",kaynak:"F8 (Emre, 5 Eki 2026): de jure devir antlaşma gününde — TDV birinci-dunya-savasi: '4 Haziran 1920'de Macaristan ile Trianon … antlaşmaları imzalandı'"}],
  isg:[{f:"1919-04-19",t:"1920-06-04",d:"romanya-kralligi",kaynak:"F8 fiilî devir: Muzeul Județean Satu Mare — http://muzeusm.ro/en/100-de-ani-de-la-eliberarea-satmarului-si-instaurarea-administratiei-romanesti/ — 'La 19 aprilie 1919, în sâmbăta de Paște, dr. Ilie Carol Barbul, cu un drapel în mână, a condus delegaţia locală care a întâmpinat Armata Română eliberatoare, contactând pe podul de peste Someş prima patrulă a Diviziei a II-a Cavalerie'"}],
  d:[], v:[] },

];

;

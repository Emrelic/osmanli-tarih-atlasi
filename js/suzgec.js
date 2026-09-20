// KRONOLOJİ SÜZGECİ — saf mantık katmanı (PLAN-ETIKET §8)
//
// ⚠️ BU DOSYA DOM'A DOKUNMAZ. Sebebi doğrudan 31 Temmuz'un dersinden geliyor:
// ARAYÜZ oturumunun tarayıcı paneli gün boyu açılmadı (gizli sekmede
// requestAnimationFrame hiç ateşlemiyor, MapLibre stili yüklemiyor) ve
// tarayıcıda hiçbir şey doğrulanamadı. DOM'suz bir modül ise node'da GERÇEK
// VERİYLE sınanabilir. Böylece işin mantık kısmı ölçülmüş olarak gelir,
// tarayıcıda doğrulanacak yalnız ince bir arayüz katmanı kalır.
// ⇒ Buraya `document`, `window.harita`, olay dinleyici GİRMEYECEK.
"use strict";

// ---------------------------------------------------------------------------
// 1. HANGİ ALAN — ÖLÇÜMLE KARARLAŞTIRILDI: `k:`
//
//   madde 989 · k: %100 · etiket: %100
//   k:      25 değer · DİZİ olan madde   0   ← TEK DEĞERLİ (bölüntü)
//   etiket: 20 değer · DİZİ olan madde 989   ← ÇOK DEĞERLİ (~1,7 etiket/madde)
//
// Belirleyici sebep DIŞLAMA, seçme değil. Kullanıcının cümlesi:
//   "...ama tahta geçmeler, hükümdar ölümleri, iç isyanlar KAPALI"
// Dışlama yalnız BÖLÜNTÜ üzerinde çalışır: `etiket:` çok değerli olduğu için
// `ayaklanma`+`siyaset` taşıyan bir madde "İÇ DÜZEN" kapatılınca YİNE görünür
// (siyaset açık). Kullanıcı "iç isyanları kapattım" der, isyan maddesi ekranda
// kalır, hiçbir hata çıkmaz. `k:` tek değerli olduğu için her madde tam bir
// kutuya düşer: kapatılan grup tam olarak kaybolur, sayılar toplanabilir.
//
// 📌 `etiket:` atılmadı — `PLAN-ETIKET`in dikey kesen KONU ekseni için doğru
// alan o. İkisi farklı iş yapıyor: **`k:` gruplar, `etiket:` kesişir.**
// ---------------------------------------------------------------------------

// Gruplama editoryaldır; sayılar 31 Temmuz ölçümünden (989 madde).
// ⚠️ Bir `k:` değeri BİRDEN ÇOK gruba konmaz — bölüntü olması bunu gerektirir.
// Yeni bir `k:` değeri veriye girer ve buraya yazılmazsa DIGER'e düşer; sessiz
// kaybolmaz (bkz. bilinmeyenler()).
var KONU_GRUPLARI = [
  { id: "askeri",  ad: "Askerî",        k: ["savas", "fetih", "kayip", "kusatma", "sefer"] },
  { id: "siyasi",  ad: "Siyasî",        k: ["siyaset", "antlasma", "diplomasi", "ittifak", "vassal"] },
  { id: "hanedan", ad: "Hânedan",       k: ["taht", "sadrazam", "darbe", "evlilik", "kurulus"] },
  // 23 Ağustos 2026, 0027/H-0002.5 — Emre: "konu süzgeci konularının
  // hepsi var mı, olması gereken başka etiket var mı araştıralım."
  // ÖLÇÜLDÜ: veride 29 ayrı `k:` değeri var, burada 25'i eşleniyordu.
  // Dördü SESSİZCE `diger`e düşüyordu — tam da bu dosyanın kendi
  // uyarısının haber verdiği kusur:
  //     mimari 26 · sosyoloji 13 · spor 5 · felsefe 1  =  45 madde
  // Gruplama İÇERİĞE bakılarak yapıldı, tahminle değil:
  //   mimari    → Mimar Sinan · Şehzade Camii · Büyükçekmece Köprüsü ·
  //               Kırkçeşme isâle hattı
  //   spor      → Okmeydanı · Kırkpınar · cirit
  //   felsefe   → Kınalızâde'nin ahlâk felsefesi
  //   sosyoloji → ilk kahvehaneler · ilk nüfus sayımı · 1864 Vilâyet
  //               Nizamnâmesi · 1869 Maârif Nizamnâmesi · Muhâcirîn
  //               Komisyonu — grup zaten `idari`/`kanun`/`reform`
  //               taşıyor, nizamnâme ve sayım tam o eksende.
  // 🔴 YENİ GRUP AÇILMADI: `CLAUDE.md §1.6` konu başlıklarını 8. boyut
  //    sayıyor ve KASTEN KAPALI tutuyor. Var olan değerleri var olan
  //    gruplara bağlamak sızıntı kapatmaktır; yeni grup açmak kapsam
  //    genişletmek olurdu.
  { id: "icduzen", ad: "İç düzen",      k: ["ayaklanma", "isyan", "reform", "kanun", "idari", "sosyoloji"] },
  { id: "kultur",  ad: "Kültür-bilim",  k: ["kultur", "bilim", "kesif", "mimari", "spor", "felsefe"] },
  { id: "iktisat", ad: "İktisat",       k: ["ekonomi"] },
  // ⚠️ `diger` GERÇEK BİR KATEGORİ DEĞİL, karışık torba (46 madde). Ayrı
  // duruyor ki "hepsini seç" ile "sınıflandırılmamışı da göster" ayrışsın.
  { id: "diger",   ad: "Sınıflandırılmamış", k: ["diger"] }
];

// k: değeri → grup id (tersine indeks, bir kez kurulur)
var _kGrup = null;
function grupIndeksi() {
  if (_kGrup) return _kGrup;
  _kGrup = {};
  for (var i = 0; i < KONU_GRUPLARI.length; i++) {
    var g = KONU_GRUPLARI[i];
    for (var j = 0; j < g.k.length; j++) _kGrup[g.k[j]] = g.id;
  }
  return _kGrup;
}

// Bir maddenin hangi gruba düştüğü.
// 🔴 10 Eylül 2026 — `k:` YOKSA `tur:` OKUNUR. Sebep ölçüldü: `KRONOLOJI_*`
// maddeleri (4838) `k:` taşımıyor ve HEPSİ `diger`e düşüyordu; kullanıcı
// "Sınıflandırılmamış"ı kapatsa bütün devlet kronolojileri sessizce
// kaybolurdu. `k:` taşıyan 1274 madde ETKİLENMEZ — sıra kasten `k:` önce.
// Tanınmayan değer yine "diger" (bkz. bilinmeyenler()).
function maddeGrubu(o) {
  var ix = grupIndeksi();
  if (!o) return "diger";
  if (o.k && ix[o.k]) return ix[o.k];
  if (o.tur && TUR_GRUP[o.tur]) return TUR_GRUP[o.tur];
  return ix[o.k] || "diger";
}

// ---------------------------------------------------------------------------
// 2. SÜZME SEMANTİĞİ — kullanıcı kararı
//     aynı aile içinde  → VEYA   (Askerî VEYA Siyasî)
//     aileler arasında  → VE     (konu VE coğrafya VE dönem)
// Bugün yalnız KONU ailesi var; coğrafya ailesi U4'ün sözlüğünü bekliyor.
// ⚠️ `aileler` nesnesi baştan çok aileli yazıldı ki coğrafya eklendiğinde bu
// fonksiyon DEĞİŞMESİN — aksi hâlde semantik iki yerde tanımlanır (§35).
// ---------------------------------------------------------------------------
// secim: { konu: ["askeri","siyasi"], ... }  — boş/eksik aile = O AİLE SÜZMEZ
function suz(olaylar, secim) {
  if (!olaylar) return [];
  var aileler = Object.keys(secim || {}).filter(function (a) {
    var s = secim[a];
    return s && s.length;                    // boş aile kısıt koymaz
  });
  if (!aileler.length) return olaylar.slice();
  return olaylar.filter(function (o) {
    for (var i = 0; i < aileler.length; i++) {
      var aile = aileler[i], secili = secim[aile];
      var deger = aile === "konu" ? maddeGrubu(o) : null;
      // VE: her ailenin şartı ayrı ayrı sağlanmalı
      if (secili.indexOf(deger) < 0) return false;
    }
    return true;                             // VEYA aile içinde indexOf ile
  });
}

// Grup başına madde sayısı — kutucukların yanında gösterilecek.
// ⚠️ Sayılar SÜZÜLMEMİŞ küme üzerinden verilir: kullanıcı bir grubu kapatınca
// diğerlerinin sayısı değişmemeli, yoksa "kapattığım şey ötekini de mi azalttı"
// diye okunur.
function grupSayilari(olaylar) {
  var s = {};
  for (var i = 0; i < KONU_GRUPLARI.length; i++) s[KONU_GRUPLARI[i].id] = 0;
  for (var j = 0; j < (olaylar || []).length; j++) s[maddeGrubu(olaylar[j])]++;
  return s;
}

// Veriye girmiş ama tabloda karşılığı olmayan `k:` değerleri.
// 📌 Bugün üç kez "sessizce eksik" vakası yaşandı; bu fonksiyon o sınıfı
// süzgeç için baştan kapatıyor — bilinmeyen değer DIGER'e düşer ama GÖRÜNÜR.
function bilinmeyenler(olaylar) {
  var ix = grupIndeksi(), yok = {};
  for (var i = 0; i < (olaylar || []).length; i++) {
    var k = olaylar[i] && olaylar[i].k;
    if (k && !ix[k]) yok[k] = (yok[k] || 0) + 1;
  }
  return yok;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. ÖNEM SÜZGECİ — Emre'nin 10 Eylül 2026 tarifi
//
//   "kişi bir devlet seçtiği zaman o devletin kronolojisini çalıştırmadan
//    önce bu ayarları yapmalı ... kendi bölgesindeki diğer devletlerle
//    ilgili hangi önemdeki maddeleri görmek istiyor ... ayrıca dünyayı
//    ilgilendiren önemli olayları görmek istiyor mu ... 5 çok önemli /
//    4 önemli / 3 orta / 2 önemsiz / 1 hiç önemli değil"
//
// 🔴 ÖLÇÜM ÖNCE — ve iki sayı bu tasarımı belirledi (10 Eylül 2026):
//     DEVLETLER[].kronoloji (KRONOLOJI_*)  4838 madde
//         onem  4838 (%100) · dunya 4838 · kapsam 4838   ← TAM PUANLI
//     olaylar (OLAYLAR*)                   1317 madde
//         onem    51        · k: 1274                    ← neredeyse PUANSIZ
//   ⇒ Bu süzgeç ODAK kronolojisi (devlet seçilince açılan liste) için
//     yazıldı; orada veri hazır. Osmanlı zaman çizgisine uygulanması
//     1272 maddenin puanlanmasını bekliyor (`oturumlar/ONEM-EKSENI-0910.md`).
//
// 🔴 ÜÇ DAL, VE ARALARINDA **VEYA** — `suz`un VE semantiğinden AYRI:
//   Emre üç ayrı soru soruyor ("iç olaylar" · "bölgesel dış olaylar" ·
//   "dünya olayları") ve bir madde BUNLARDAN BİRİNE girdiği için görünür.
//   VE olsaydı bir iç olay "dünya eşiğini de geçsin" diye elenirdi.
//   ⇒ Ayrı fonksiyon yazıldı; `suz` DEĞİŞTİRİLMEDİ (mevcut konu süzgeci
//     bu değişiklikten hiç etkilenmiyor — gerileme riski sıfır).
// ═══════════════════════════════════════════════════════════════════════════

// Bir dal KAPALI ise 0/null; açıksa 1-5 arası EŞİK (o değer ve ÜSTÜ geçer).
var ONEM_VARSAYILAN = { ic: 1, bolge: 4, dunya: 4, puansiz: true };

// `kapsam` alanı olmayan madde İÇ sayılır. Gerekçe ölçüm: kapsam taşımayan
// 1259 maddenin tamamı `olaylar*.js`te, yani çekirdek Osmanlı kronolojisi —
// kendi devletinin iç olayları. "dis" varsaymak onları bölge/dünya eşiğine
// tâbi kılar ve ÇOĞUNU SİLERDİ.
function kapsamOf(m) { return (m && m.kapsam === "dis") ? "dis" : "ic"; }

function sayi(x) { return (typeof x === "number" && isFinite(x)) ? x : null; }

// 🔴 PUANSIZ MADDE SESSİZCE ELENMEZ — `D015`: *ölçemediğini eleyen bir
// süzgeç onu temiz sayar.* Bir maddenin `onem`i yoksa o madde "önemsiz"
// DEĞİL, "ÖLÇÜLMEMİŞ"tir. İkisi aynı kovaya konursa 1272 çekirdek madde
// bir eşik açıldığı anda EKRANDAN KAYBOLUR ve kimse sebebini bilmez.
// ⇒ Varsayılan `puansiz:true` — göster, ve KAÇ TANE olduğunu SAY (`onemSay`).
function onemGecer(m, ayar) {
  ayar = ayar || ONEM_VARSAYILAN;
  var kapsam = kapsamOf(m);
  var onem = sayi(m && m.onem), bolge = sayi(m && m.bolge), dunya = sayi(m && m.dunya);

  // ① DÜNYA dalı — kapsamdan BAĞIMSIZ: dünya çapında bir olay, hangi
  //    devletin kronolojisinde durursa dursun dünya olayıdır.
  if (ayar.dunya && dunya !== null && dunya >= ayar.dunya) return true;

  // ② İÇ dal — bu devletin kendi olayları.
  if (kapsam === "ic" && ayar.ic) {
    if (onem === null) return !!ayar.puansiz;      // ÖLÇÜLMEDİ ≠ ÖNEMSİZ
    if (onem >= ayar.ic) return true;
  }

  // ③ BÖLGE dalı — komşu devletlerin olayları.
  //    ⚠️ `bolge` alanı bugün veride NEREDEYSE YOK (10 Eylül: 2 madde).
  //    Alan gelene kadar bu dal `onem`e geri düşer — ama geri düşüş
  //    BEYAN EDİLİR (`onemSay().bolgeVekil`), sessiz olmaz.
  if (kapsam === "dis" && ayar.bolge) {
    var b = (bolge !== null) ? bolge : onem;
    if (b === null) return !!ayar.puansiz;
    if (b >= ayar.bolge) return true;
  }
  return false;
}

function onemSuz(maddeler, ayar) {
  if (!maddeler) return [];
  return maddeler.filter(function (m) { return onemGecer(m, ayar); });
}

// Panelin dürüst kalması için: kaç madde puansız, kaç tanesi `bolge`
// yerine `onem` vekiliyle karar gördü. ⚠️ Bu sayılar SÜZÜLMEMİŞ küme
// üzerinden verilir (`grupSayilari` ile aynı gerekçe).
function onemSay(maddeler) {
  var s = { toplam: 0, ic: 0, dis: 0, puansiz: 0, puansizIc: 0, puansizDis: 0,
            bolgeVekil: 0, dunyaPuansiz: 0 };
  // 🔴 `puansizIc` / `puansizDis` AYRI SAYILIYOR ve sebebi bir ÖNGÖRÜ
  // ÇÜRÜMESİ: sınav ④ ilk yazımında *"puansiz:true açınca gelen fark = puansız
  // madde sayısı"* diye öngörülmüştü. Ölçüm 1264 yerine 1253 verdi, çünkü
  // `ic` dalı yalnız İÇ maddeleri görüyor — 11 puansız madde `kapsam:"dis"`
  // (Fort Laramie · Fontainebleau · Yeni İspanya…). Öngörü ayarlanmadı,
  // SAYAÇ AYRIŞTIRILDI: tek sayı iki ayrı davranışı gizliyordu.
  for (var i = 0; i < (maddeler || []).length; i++) {
    var m = maddeler[i];
    s.toplam++;
    if (kapsamOf(m) === "dis") s.dis++; else s.ic++;
    if (sayi(m.onem) === null) {
      s.puansiz++;
      if (kapsamOf(m) === "dis") s.puansizDis++; else s.puansizIc++;
    }
    if (kapsamOf(m) === "dis" && sayi(m.bolge) === null) s.bolgeVekil++;
    if (sayi(m.dunya) === null) s.dunyaPuansiz++;
  }
  return s;
}

// ---------------------------------------------------------------------------
// 4. KONU EKSENİ — `k:` YOKSA `tur:` (10 Eylül 2026)
//
// 🔴 SESSİZ BİR KUSUR ÖLÇÜLDÜ: `maddeGrubu` yalnız `k:`ye bakıyordu ve
//   `KRONOLOJI_*` maddeleri `k:` TAŞIMIYOR — 4838 maddenin 4838'i `diger`e
//   düşüyordu. Kullanıcı "Sınıflandırılmamış"ı kapatsa BÜTÜN devlet
//   kronolojileri kaybolurdu, ve hiçbir uyarı çıkmazdı.
//   ⇒ `k:` yoksa `tur:` okunur. `k:` taşıyan 1274 madde ETKİLENMEZ —
//     yani Osmanlı zaman çizgisinin davranışı BİREBİR aynı kalır.
//
// ⚠️ Aşağıdaki tablo `tur:`un 52 ayrı değerinin TAMAMI ölçülerek yazıldı
//   (10 Eylül, `KRONOLOJI_*` 4838 madde). Yeni bir değer girerse `diger`e
//   düşer — sessiz kaybolmaz (`bilinmeyenler`).
// 📌 `CLAUDE.md §1.6` 8. boyutu 2 Eylül 2026'da AÇTI; bu dosyanın yukarıdaki
//   *"yeni grup açılmadı, 8. boyut kasten kapalı"* notu O TARİHTE doğruydu.
//   Yine de yeni grup AÇILMIYOR: 52 değerin hepsi mevcut yediye bağlandı.
// ---------------------------------------------------------------------------
var TUR_GRUP = {
  savas: "askeri", kusatma: "askeri", sefer: "askeri", askeri: "askeri",
  deniz: "askeri", "ic-savas": "askeri", isgal: "askeri",
  fetih: "askeri", kayip: "askeri", "toprak-kazanc": "askeri",
  "toprak-kayip": "askeri", toprak: "askeri",

  siyaset: "siyasi", antlasma: "siyasi", diplomasi: "siyasi",
  ittifak: "siyasi", vassal: "siyasi", tabiiyet: "siyasi", itaat: "siyasi",
  kriz: "siyasi", anayasa: "siyasi", hukuk: "siyasi",

  hukumdar: "hanedan", hanedan: "hanedan", taht: "hanedan",
  sadrazam: "hanedan", darbe: "hanedan", evlilik: "hanedan",
  olum: "hanedan", dogum: "hanedan",
  kurulus: "hanedan", son: "hanedan", yikilis: "hanedan",
  bolunme: "hanedan", birlesme: "hanedan", baskent: "hanedan",

  isyan: "icduzen", ayaklanma: "icduzen", "ic-karisiklik": "icduzen",
  reform: "icduzen", kanun: "icduzen", idari: "icduzen",
  sosyal: "icduzen", sosyoloji: "icduzen", salgin: "icduzen",
  felaket: "icduzen",

  kultur: "kultur", bilim: "kultur", kesif: "kultur", mimari: "kultur",
  spor: "kultur", felsefe: "kultur", din: "kultur",
  teknoloji: "kultur", sehircilik: "kultur",

  ekonomi: "iktisat",
  diger: "diger"
};

// ---------------------------------------------------------------------------
// 5. TOPRAK SÜZGECİ — 13 Eylül 2026, 0042/H-0003 (PAKET-A1)
//
// Emre: *"sadece toprak eklenmesi ve toprak kaybedilmesi kronolojik
// maddelerini oynatsın sistem."*
// 🔴 ETİKETTEN DEĞİL KIRILMADAN TÜRETİLİR. `k:"fetih"/"kayip"` bir KONU
//   beyanıdır; toprağın haritada GERÇEKTEN değiştiğini söylemez (bir kuşatma
//   `fetih` taşıyıp sınırı değiştirmeyebilir, bir antlaşma `antlasma`
//   taşıyıp değiştirebilir). Haritanın kendisi ise değişim günlerini zaten
//   biliyor: Osmanlı dönemlerinin (`DONEMLER`) sınırları.
// KURAL `Değişmez 2`nin aynısı: her kırılma gününe EN YAKIN madde, fark
//   ≤ `pencere` (30) gün ise "toprak maddesi"dir. Aynı güne düşen öteki
//   maddeler de işaretlenir (beraberlik — hangisinin "asıl" olduğunu bu
//   katman bilemez). En yakın madde 30 günden uzaksa HİÇBİR madde
//   işaretlenmez: o kırılma maddesizdir ve bu süzgeç onu uyduramaz.
// ⚠️ KAPSAM: yalnız Osmanlı gövdesi (`DONEMLER` o/v). Yabancı devletlerin
//   kendi aralarındaki el değiştirmeleri bu süzgeçte YOK.
// maddeGunleri: ARTAN sırada gün indeksleri · kirilmaGunleri: gün indeksleri
// Döner: { isaretli: {index:true}, kirilma, maddeli, maddesiz }
function toprakIndeksleri(maddeGunleri, kirilmaGunleri, pencere) {
  var P = pencere == null ? 30 : pencere;
  var M = maddeGunleri || [], isaretli = {}, maddeli = 0, maddesiz = 0;
  for (var i = 0; i < (kirilmaGunleri || []).length; i++) {
    var k = kirilmaGunleri[i];
    if (!M.length) { maddesiz++; continue; }
    var lo = 0, hi = M.length - 1;               // ilk M[x] >= k
    while (lo < hi) { var md = (lo + hi) >> 1; if (M[md] < k) lo = md + 1; else hi = md; }
    var aday = lo;
    if (lo > 0 && Math.abs(M[lo - 1] - k) <= Math.abs(M[lo] - k)) aday = lo - 1;
    if (Math.abs(M[aday] - k) > P) { maddesiz++; continue; }
    maddeli++;
    var g = M[aday], j = aday;
    while (j >= 0 && M[j] === g) isaretli[j--] = true;
    j = aday + 1;
    while (j < M.length && M[j] === g) isaretli[j++] = true;
  }
  return { isaretli: isaretli, kirilma: (kirilmaGunleri || []).length,
           maddeli: maddeli, maddesiz: maddesiz };
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. KONU BAŞLIKLARI (26) + AFET — 13 Eylül 2026, PAKET-ETIKET-UYGULA
//
// Emre (0035/H-0066): 26 başlıklık konu listesi · (0035/H-0034): "deprem yangın
// sel gibi afetleri etiketleyelim". Öneri `data/etiket_yama.js` konu26 + afet
// bölümleri (PAKET-A5); VERİYE `denetim/ARAC-ETK-UYGULA-0913.py` ile yazıldı:
//   konu-<id> (25 başlık) · afet (26. başlık = üst etiket) · afet-<alt> (6 alt tür)
// 🔴 `k:` BÖLÜNTÜSÜNDEN AYRI BİR EKSEN. Yukarıdaki KONU_GRUPLARI tek değerli
//   (her madde tam bir gruba düşer); başlıklar ÇOK değerli (bir madde hem
//   Askerî hem Bilim olabilir — Emre'nin açık isteği). Bu yüzden:
//     · başlık seçimi BOŞSA süzmez (varsayılan: hiçbir şey gizlenmez)
//     · başlıklar arasında VEYA (seçilenlerden BİRİNİ taşıyan görünür)
//     · grup kutuları ve toprak kutusuyla VE
//   Sayılar toplanamaz (bir madde birden çok başlıkta) — bilerek.
// ⚠️ Etiket veride yoksa (eski önbellekli veri) sayı 0 görünür, madde SİLİNMEZ
//   yalnız o başlık seçilince gizlenir — sessiz kayıp değil, görünür sıfır.
// ═══════════════════════════════════════════════════════════════════════════
var KONU_BASLIKLARI = [
  { id: "askeri",     ad: "Askerî",                                etiket: "konu-askeri" },
  { id: "siyasi",     ad: "Siyasî",                                etiket: "konu-siyasi" },
  { id: "idari",      ad: "İdarî",                                 etiket: "konu-idari" },
  { id: "diplomasi",  ad: "Diplomasi ve uluslararası ilişkiler",   etiket: "konu-diplomasi" },
  { id: "kisiler",    ad: "Kişiler",                               etiket: "konu-kisiler" },
  { id: "isyan",      ad: "İç ayaklanma ve isyanlar",              etiket: "konu-isyan" },
  { id: "darbe",      ad: "Darbeler",                              etiket: "konu-darbe" },
  { id: "burokrasi",  ad: "Bürokrasi",                             etiket: "konu-burokrasi" },
  { id: "hanedan",    ad: "Hânedan",                               etiket: "konu-hanedan" },
  { id: "bilim",      ad: "Bilim teknoloji",                       etiket: "konu-bilim" },
  { id: "ekonomi",    ad: "Ekonomi",                               etiket: "konu-ekonomi" },
  { id: "din",        ad: "Din ve felsefe",                        etiket: "konu-din" },
  { id: "sanat",      ad: "Sanat",                                 etiket: "konu-sanat" },
  { id: "kultur",     ad: "Kültür",                                etiket: "konu-kultur" },
  { id: "spor",       ad: "Spor",                                  etiket: "konu-spor" },
  { id: "imar",       ad: "İmar ve mimari",                        etiket: "konu-imar" },
  { id: "egitim",     ad: "Eğitim",                                etiket: "konu-egitim" },
  { id: "islahat",    ad: "Yenileşme ve ıslahat",                  etiket: "konu-islahat" },
  { id: "sosyal",     ad: "Sosyal yaşam",                          etiket: "konu-sosyal" },
  { id: "afet",       ad: "Doğal afetler ve hastalıklar",          etiket: "afet" },
  { id: "demografi",  ad: "Demografi ve göç",                      etiket: "konu-demografi" },
  { id: "hukuk",      ad: "Hukuk düzeni",                          etiket: "konu-hukuk" },
  { id: "ulastirma",  ad: "Ulaştırma haberleşme altyapı",          etiket: "konu-ulastirma" },
  { id: "sanayi",     ad: "Sanayi tarım hayvancılık madencilik",   etiket: "konu-sanayi" },
  { id: "kesif",      ad: "Keşif ve icatlar",                      etiket: "konu-kesif" },
  { id: "magazin",    ad: "Magazin",                               etiket: "konu-magazin" }
];
// "Afet" başlığının altı alt türü — üst etiket `afet`, her biri ayrıca seçilebilir.
var AFET_ALT_TURLER = [
  { id: "afet-deprem",         ad: "Deprem" },
  { id: "afet-yangin",         ad: "Yangın" },
  { id: "afet-sel",            ad: "Sel ve taşkın" },
  { id: "afet-salgin",         ad: "Salgın hastalık" },
  { id: "afet-kitlik",         ad: "Kıtlık ve kuraklık" },
  { id: "afet-volkan-firtina", ad: "Volkan, tsunami, kasırga" }
];

// Seçilebilir bütün etiket değerleri (URL doğrulaması için).
function baslikEtiketleri() {
  return KONU_BASLIKLARI.map(function (h) { return h.etiket; })
    .concat(AFET_ALT_TURLER.map(function (a) { return a.id; }));
}

// secim: etiket dizisi ("konu-askeri", "afet-deprem" …). Boş/null → süzmez.
function baslikGecer(o, secim) {
  if (!secim || !secim.length) return true;
  var et = (o && o.etiket) || [];
  if (typeof et === "string") et = [et];
  for (var i = 0; i < secim.length; i++) if (et.indexOf(secim[i]) >= 0) return true;
  return false;
}

// Etiket başına madde sayısı — SÜZÜLMEMİŞ küme (grupSayilari ile aynı gerekçe).
function baslikSayilari(olaylar) {
  var s = {}, tum = baslikEtiketleri();
  for (var i = 0; i < tum.length; i++) s[tum[i]] = 0;
  for (var j = 0; j < (olaylar || []).length; j++) {
    var et = (olaylar[j] && olaylar[j].etiket) || [];
    if (typeof et === "string") et = [et];
    for (var k = 0; k < et.length; k++) if (s.hasOwnProperty(et[k])) s[et[k]]++;
  }
  return s;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🆕 PAKET-UI2 (13 Eylül 2026) — SAHİPLİK ANAHTARI · ANTLAŞMA FARKI · ODAK
// Emre'nin kararı (0035/H-0097 sonrası): *"antlaşma maddesi açılınca antlaşma
// öncesi ve sonrası harita, aradaki farklar yanıp sönsün — her antlaşma için."*
// DOM'suz: `js/app.js` çizer, `denetim/ARAC-UI2-FARK-0913.js` AYNI fonksiyonları
// gerçek veride koşar (D045 — ölçüm aleti ile uygulama iki ayrı mantık taşımaz).
// Yeni geometri YOK: fark, yerleşimin d/v/s dönemlerinden çözülür; çizimde
// motorun kendi peteği (PETEKLER, yerleşim adıyla) kullanılır.

// Haritanın öncelik kuralı (app.js `_yerlesimSerit` ile AYNI):
//   d varsa "osmanli" · yoksa v varsa "tabi:<kid>" · yoksa s varsa "s:<d>" · yoksa ""
// `gs` "YYYY-MM-DD" dizgisi; karşılaştırma dizgi — veri de dizgi tutuyor.
function sahipAnahtari(y, gs) {
  var i, p;
  for (i = 0; i < (y.d || []).length; i++) if ((p = y.d[i]).f <= gs && gs < p.t) return "osmanli";
  for (i = 0; i < (y.v || []).length; i++) if ((p = y.v[i]).f <= gs && gs < p.t) return "tabi:" + (p.kid || "");
  for (i = 0; i < (y.s || []).length; i++) if ((p = y.s[i]).f <= gs && gs < p.t) return "s:" + p.d;
  return "";
}
function _sgPad(n, w) { var s = String(n); while (s.length < w) s = "0" + s; return s; }
// "YYYY-MM-DD" ± gün (yıl < 1000 için de doğru: setUTCFullYear)
function gunKaydir(s, fark) {
  var p = String(s).split("-");
  var d = new Date(Date.UTC(2000, (+p[1] || 1) - 1, +p[2] || 1));
  d.setUTCFullYear(+p[0]);
  d.setUTCDate(d.getUTCDate() + fark);
  return _sgPad(d.getUTCFullYear(), 4) + "-" + _sgPad(d.getUTCMonth() + 1, 2) + "-" + _sgPad(d.getUTCDate(), 2);
}
// Sınır günü → o gün dönemi başlayan/biten yerleşimlerin indeksleri. Bir kez kurulur.
function sinirIndeksi(Y) {
  var by = {};
  (Y || []).forEach(function (y, i) {
    ["d", "v", "s"].forEach(function (a) {
      (y[a] || []).forEach(function (p) {
        [p.f, p.t].forEach(function (g) {
          if (!g) return;
          var l = by[g] || (by[g] = []);
          if (l[l.length - 1] !== i) l.push(i);
        });
      });
    });
  });
  return { gunler: Object.keys(by).sort(), by: by };
}
// Türkçe normalleştirici — `lower()`dan ÖNCE eşleme (CLAUDE.md §4: "İ".lower() iki kod noktası)
function sgNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return s.toLowerCase().replace(/['\u2018\u2019`\u02bc]/g, "").replace(/\s+/g, " ").trim();
}
var _SG_GENEL = /(^| )(buyuk dukaligi|kralligi|krallik|imparatorlugu|hanligi|hanedani|hanedanligi|cumhuriyeti|prensligi|dukaligi|beyligi|sultanligi|devleti|voyvodaligi|emirligi|carligi|kontlugu|despotlugu|seyhligi|konfederasyonu|monarsisi|serifligi|sehir devleti)(?= |$)/g;
// Künyenin "çekirdek adı": parantez içi atılır, kurum eki atılır. "Erdel Prensliği (Transilvanya)" → "erdel"
function kunyeCekirdek(ad) {
  return sgNorm(String(ad || "").split(" (")[0]).replace(_SG_GENEL, " ").replace(/\s+/g, " ").trim();
}
// Metinde çekirdek ad TAM KELİME olarak geçiyor mu? Özel ad Türkçede eki kesme
// işaretiyle alır ("Rusya'ya"); metin normalleştirilmeden ÖNCE kesme işareti
// BOŞLUĞA çevrilir (bkz. antlasmaTaraflari), yani ekli hâl de tam kelimedir.
// Kesmesiz yalnız yapım eki kabul: -li/-lı/-lu (+ler/lar) · -ler/-lar ("Venedikliler",
// "Habsburglarla"). ⚠️ İlk sürüm "5+ harfte önek yeter" diyordu; ölçüldü:
// `kazan` künyesi "kazandı"da, `dene` "denemesi"nde tutuyordu — yanlış taraf.
function _sgGeciyor(metinN, cekirdek) {
  if (!cekirdek || cekirdek.length < 3) return false;
  var i = -1;
  while ((i = metinN.indexOf(cekirdek, i + 1)) >= 0) {
    if (i > 0 && /[a-z0-9]/.test(metinN.charAt(i - 1))) continue;
    var j = i + cekirdek.length;
    while (j < metinN.length && /[a-z]/.test(metinN.charAt(j))) j++;
    var ek = metinN.slice(i + cekirdek.length, j);
    if (!ek || /^(l[iu](l[ae]r)?|l[ae]r)[a-z]{0,4}$/.test(ek)) return true;
  }
  return false;
}
// ANTLAŞMANIN TARAFLARI — { id: true } kümesi (künye id VE harita anahtarı).
//   ① osmanli HER ZAMAN (OLAYLAR* Osmanlı kronolojisi; dünya maddesinde yanlış
//      pozitifi ölçüm aleti sayar)  ② ANTLASMALAR kaydının `taraf` dizisi
//   ③ madde başlığı + metninde çekirdek adı geçen künyeler.
// ⚠️ Taraf süzgeci OLMADAN fark "o gün dünyada ne değişti"yi ölçer — ölçüldü:
//   1533 İstanbul Antlaşması'nda İnka→İspanya yanıp sönüyordu (D092 ailesi).
function antlasmaTaraflari(metin, ekTaraflar, kunyeler) {
  var T = { osmanli: true }, ix = {};
  (kunyeler || []).forEach(function (k) { if (k && k.id) ix[k.id] = k; });
  function ekle(id) {
    if (!id) return;
    T[id] = true;
    var k = ix[id];
    if (k && k.harita) T[k.harita] = true;
  }
  (ekTaraflar || []).forEach(ekle);
  var m = sgNorm(String(metin == null ? "" : metin).replace(/['‘’ʼ`]/g, " "));
  (kunyeler || []).forEach(function (k) {
    if (!k || !k.id || k.id === "osmanli") return;
    if (_sgGeciyor(m, kunyeCekirdek(k.ad))) ekle(k.id);
  });
  return T;
}
function sahipIlgiliMi(key, T) {
  if (!key) return false;
  if (key === "osmanli") return !!T.osmanli;
  if (key.indexOf("tabi:") === 0) { var kid = key.slice(5); return !!(T.osmanli || (kid && T[kid])); }
  if (key.indexOf("s:") === 0) { var d = key.slice(2); return d !== "__BOSLUK__" && !!T[d]; }
  return false;
}
// [basGun, sonGun] (ikisi de dahil) aralığındaki İLK sınır gününde, taraflardan
// birine dokunan el değiştirmeler. Yoksa null. Gün başına yalnız o gün sınırı olan
// yerleşimler bakılır — bütün dünya taranmaz (maliyet: sınır sayısı × birkaç kayıt).
function antlasmaFarki(Y, ix, basGun, sonGun, T) {
  var G = ix.gunler, lo = 0, hi = G.length;
  while (lo < hi) { var md = (lo + hi) >> 1; if (G[md] < basGun) lo = md + 1; else hi = md; }
  for (var k = lo; k < G.length && G[k] <= sonGun; k++) {
    var g = G[k], once = gunKaydir(g, -1), liste = [];
    var aday = ix.by[g];
    for (var n = 0; n < aday.length; n++) {
      var y = Y[aday[n]], a = sahipAnahtari(y, once), b = sahipAnahtari(y, g);
      if (a !== b && (sahipIlgiliMi(a, T) || sahipIlgiliMi(b, T))) liste.push({ i: aday[n], once: a, sonra: b });
    }
    if (liste.length) return { gun: g, once: once, degisim: liste, taranan: k - lo + 1 };
  }
  return null;
}
// ═══════════════════════════════════════════════════════════════════════════
// 🆕 DALGA-0074 H-0013 (ANTLASMA-KADEME-0074, 21 Eylül 2026) — ÜÇ KADEME.
// EMRE: *"1) savaştan önce · 2) savaş sonrası FİİLÎ durum (işgaller) · 3) barış
// antlaşmasından sonra."*
// 🔴 ÖLÇÜLEN TEŞHİS (denetim/ANTLASMA-KADEME-0074-PLAN.md): eksik olan kademe
// Emre'nin sandığı yerde değildi. Bugünkü "◀ Öncesi" düğmesi savaşın BAŞINI
// değil SONUNU gösteriyordu — `antlasmaFarki` penceredeki ilk sınır gününü
// bulup bir gün öncesini basıyor; savaş başıyla arası ÖLÇÜLDÜ: 80–5867 gün
// (Lozan 1530 · Mondros 1454 · Kaynarca 2111 · Karlofça 5674). Üstelik
// `sahipAnahtari` `isg:` alanını HİÇ okumaz, yani o hâl HUKUKÎ, fiilî değil.
// ⇒ ① kademesi YOKTU (kaynağı `ANTLASMALAR[].savas_basi` — 37/41 kayıtta dolu,
//   bugüne kadar hiç kullanılmamış alan), ② kademesi YARIMDI (işgal örtüsü yok).
// KAPSAM = **ORTA** (1.MURAT hükmü M-4893): fark kümesi ∪ ②'de taraf işgali
// altındaki ∪ pencerede işgali BİTEN yerleşimler. Ölçülen yük 23 KB/madde
// (DAR 12 · GENİŞ 85). DAR alınmadı çünkü üçüncü kademenin ASIL anlatısını
// kaçırıyor: işgal edilip antlaşmayla GERİ VERİLEN toprak `s:`te hiç
// değişmediği için bugünkü fark listesine girmiyor (Bükreş 1812 8→25 ·
// Bozcaada 1913 2→29 · Lozan 23→78). GENİŞ alınmadı: Lozan tek başına 406
// petek / 337 KB, ve o antlaşmanın değil dört yılın anlatısı.
// Veriyi ölçen alet: denetim/ARAC-ANTLASMA-{KADEME,ZINCIR,AYIRT,KAPSAM}-0074.js
function isgalAnahtari(y, gs) {
  var L = y.isg || [];
  for (var i = 0; i < L.length; i++) if (L[i].f <= gs && gs < L[i].t) return L[i].d || "";
  return "";
}
// `isg:` sınır günleri `sinirIndeksi`de YOKTUR (o yalnız d/v/s okur) — ölçüldü:
// 326 `isg:` kaydı, 238 yerleşimde, 132 ayrı gün. Bütün dünyayı taramak yerine
// bu 238'lik liste bir kez çıkarılır.
function isgalliYerlesimler(Y) {
  var L = [];
  (Y || []).forEach(function (y, i) { if ((y.isg || []).length) L.push(i); });
  return L;
}
// Üç kademenin ORTA kümesi → [{ i, fark, k1, k2, k2isg, k3 }]
//   k1 savaş başından bir gün önceki HUKUKÎ sahip ("" = kademe türetilemez)
//   k2 savaş sonu FİİLÎ sahip — taraf işgali varsa "isg:<kid>", yoksa hukukî
//   k3 antlaşma kırılması günündeki hukukî sahip
// ⚠️ TAM TARAMA YAPILMAZ. Ölçülen 111 ms ortalama / 662 ms azami (bugünkü fark
// 7 ms medyan) GENİŞ kapsamın 3921'lik taramasına aitti; ORTA kapsamda küme
// zaten fark listesi ∪ 238 işgalli yerleşimdir, `sahipAnahtari` yalnız o küme
// için çağrılır (Lozan'da 78 kayıt).
function kademeKumesi(Y, isgListe, degisim, k1gun, k2gun, k3gun, basGun, sonGun, T) {
  var kume = {}, sira = [];
  function al(i) { if (!kume[i]) { kume[i] = { i: i, fark: false }; sira.push(kume[i]); } return kume[i]; }
  (degisim || []).forEach(function (d) { var r = al(d.i); r.fark = true; r.k2h = d.once; r.k3 = d.sonra; });
  (isgListe || []).forEach(function (i) {
    var y = Y[i], g = isgalAnahtari(y, k2gun), ilgili = !!(g && T[g]);
    if (!ilgili) {
      var L = y.isg || [];
      for (var j = 0; j < L.length; j++) if (L[j].t >= basGun && L[j].t <= sonGun && T[L[j].d]) { ilgili = true; break; }
    }
    if (ilgili) al(i);
  });
  sira.forEach(function (r) {
    var y = Y[r.i], isg = isgalAnahtari(y, k2gun);
    r.k1 = k1gun ? sahipAnahtari(y, k1gun) : "";
    if (r.k2h === undefined) r.k2h = sahipAnahtari(y, k2gun);
    r.k2isg = (isg && T[isg]) ? isg : "";
    r.k2 = r.k2isg ? "isg:" + r.k2isg : r.k2h;
    if (r.k3 === undefined) r.k3 = sahipAnahtari(y, k3gun);
  });
  return sira;
}

// Bir sahiplik anahtarı verilen kimliklerden birine mi ait? (odak kutusu + halka için)
//   "osmanli" → d · tâbi dahil  ·  "eflak" → tabi:eflak, s:eflak, künye harita anahtarı,
//   ya da kid'siz v: döneminin `k` adı künyenin çekirdek adıyla başlıyorsa.
function sahipKimlikte(key, vK, ids, kunyeIx) {
  if (!key) return false;
  for (var i = 0; i < ids.length; i++) {
    var id = ids[i], kn = kunyeIx && kunyeIx[id], h = kn && kn.harita;
    if (id === "osmanli" && (key === "osmanli" || key.indexOf("tabi:") === 0)) return true;
    if (key === "tabi:" + id || key === "s:" + id || (h && (key === "s:" + h || key === "tabi:" + h))) return true;
    if (key === "tabi:" && vK && kn) {
      var c = kunyeCekirdek(kn.ad);
      if (c && sgNorm(vK).indexOf(c) === 0) return true;
    }
  }
  return false;
}
// O gün aktif v: döneminin `k` adı (kid'siz tâbi kayıtlar için)
function aktifVAdi(y, gs) {
  for (var i = 0; i < (y.v || []).length; i++) { var p = y.v[i]; if (p.f <= gs && gs < p.t) return p.k || ""; }
  return "";
}

// ═══════════════════════════════════════════════════════════════════════════
// 🆕 PAKET-ISYAN (13 Eylül 2026) — İSYAN TARAMASI SEÇİCİSİ (Emre: C2 kararı)
// Veri: data/isyan_tarama.js (window.ISYAN_TARAMA). DOM'suz: app.js çizer,
// denetim/ARAC-ISY-OLCUM-0913.js AYNI fonksiyonu gerçek veride koşar.
// Atlas burada yalnız GEOMETRİ SEÇİCİDİR: o gün `kimlik`e tâbi (v:, kid ya da
// kid'siz v:'nin `k` adı) görünen yerleşimler. d: (doğrudan Osmanlı) ve s:
// kayıtları SEÇİLMEZ — tarama tâbi zeminin üstüne biner.
// ═══════════════════════════════════════════════════════════════════════════
// gs günü aktif pencereler (f dahil, t hariç — atlasın dönem kuralı)
function isyanAktif(IT, gs) {
  var P = (IT && IT.pencereler) || [], r = [];
  for (var i = 0; i < P.length; i++) if (P[i].f <= gs && gs < P[i].t) r.push(P[i]);
  return r;
}
// → [{ i: yerleşim indeksi, p: pencere, yol: "atlas" | "kaynakli-uye" }] · kunyeIx: { id: künye }
// kimliksizUye (isteğe bağlı, ISYAN_TARAMA.kimliksiz_uye): { kimlik: { adlar:[…] } }
//   YALNIZ o gün aktif v: döneminde ne `kid` ne `k` olan kayda uygulanır; atlas
//   kimliği taşıyan kaydı ASLA ezmez (bkz. data/isyan_tarama.js açıklaması).
function _isyanKimliksizMi(y, gs) {
  for (var i = 0; i < (y.v || []).length; i++) {
    var p = y.v[i];
    if (p.f <= gs && gs < p.t) return !p.kid && !p.k;
  }
  return false;
}
function isyanSecim(Y, pencereler, gs, kunyeIx, kimliksizUye) {
  var out = [];
  if (!pencereler || !pencereler.length) return out;
  for (var n = 0; n < (Y || []).length; n++) {
    var y = Y[n], key = sahipAnahtari(y, gs);
    if (key.indexOf("tabi:") !== 0) continue;
    var vK = aktifVAdi(y, gs), bulundu = false;
    for (var j = 0; j < pencereler.length; j++) {
      if (sahipKimlikte(key, vK, [pencereler[j].kimlik], kunyeIx)) { out.push({ i: n, p: pencereler[j], yol: "atlas" }); bulundu = true; break; }
    }
    if (bulundu || !kimliksizUye || key !== "tabi:" || !_isyanKimliksizMi(y, gs)) continue;
    for (var m = 0; m < pencereler.length; m++) {
      var u = kimliksizUye[pencereler[m].kimlik];
      if (u && u.adlar && u.adlar.indexOf(y.ad) >= 0) { out.push({ i: n, p: pencereler[m], yol: "kaynakli-uye" }); break; }
    }
  }
  return out;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🆕 PAKET-UI3 (14 Eylül 2026) — İKİ İŞ, İKİSİ DE DOM'SUZ
// Aletler: denetim/ARAC-UI3-OLCUM-0914.js AYNI fonksiyonları gerçek veride koşar.
// ═══════════════════════════════════════════════════════════════════════════

// ── İŞ 1 · AYNI GÜN MADDESİ → O MADDENİN DEĞİŞTİRDİĞİ YERLEŞİMLER ─────────────
// Emre (kutu 0043/H-0019, karar "B", 14 Eylül): *"maddeye tıklayınca yalnız O
// MADDENİN değiştirdiği yerleşimler yanıp sönsün."* Sorun ATFEDİLEBİLİRLİK:
// harita bir günün değişimini bir kez çizer, hangisinin hangi maddeye ait
// olduğunu bilmez (1521-01-01: 10 yerleşim değişiyor, 3 madde var).
// KURAL (ölçülerek sabitlendi — rapor denetim/PAKET-UI3-0914.md §1):
//   aday = madde GÜNÜNDE (±0) sahibi değişen yerleşimler (gün−1 → gün, d > v > s)
//   ① yer_id  — yerleşim adı birebir ya da parantez öncesi çekirdeği
//   ② yer     — `yer:` metninin parçalarından biri adın çekirdeği/parantez içi adı
//   ③ başlık  — yerleşim çekirdek adı (≥4 harf) başlıkta TAM KELİME
//   ④ komşu   — ①-③ ile bağlanan bir yerleşimle AYNI el değiştirme (önce→sonra)
//               ve ondan ≤ komsuKm; aynı günün BAŞKA maddesine ①-③ ile bağlı
//               yerleşim ④ ile alınmaz. Zincir YOK (komşunun komşusu alınmaz).
// ⚠️ Metin (`d`) TARANMAZ: anlatı çevredeki yerleri anar, başlık ve yer alanları
//   maddenin kendi beyanıdır. Uydurma atıf, atıfsızlıktan kötüdür.
var MADDE_DEGISIM_AYAR = { komsuKm: 150, minHarf: 4 };

function gunDegisimleri(Y, ix, gs) {
  var once = gunKaydir(gs, -1), out = [], aday = (ix && ix.by[gs]) || [];
  for (var n = 0; n < aday.length; n++) {
    var y = Y[aday[n]], a = sahipAnahtari(y, once), b = sahipAnahtari(y, gs);
    if (a !== b) out.push({ i: aday[n], once: a, sonra: b });
  }
  return out;
}
// "Nikarya (İkarya)" → ["nikarya", "ikarya"] (çekirdek önce)
function _ydAdlar(ad) {
  var s = String(ad || ""), r = [sgNorm(s.split(" (")[0])];
  var m = s.match(/\(([^)]*)\)/);
  if (m) m[1].split(/[\/,;]/).forEach(function (p) { p = sgNorm(p); if (p) r.push(p); });
  return r;
}
function _ydKm(a, b) {
  if (typeof a.lat !== "number" || typeof b.lat !== "number") return Infinity;
  var R = 6371, r = Math.PI / 180, dLa = (b.lat - a.lat) * r, dLo = (b.lon - a.lon) * r;
  var h = Math.sin(dLa / 2) * Math.sin(dLa / 2) +
          Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
}
// ①-③: bu değişim bu maddeye DOĞRUDAN bağlı mı? → yol adı ya da ""
function _ydDogrudan(o, y) {
  var adlar = _ydAdlar(y.ad), cek = adlar[0];
  if (o.yer_id) {
    var yi = String(o.yer_id);
    if (yi === y.ad || yi === String(y.ad).split(" (")[0] || sgNorm(yi.split(" (")[0]) === cek) return "yer_id";
  }
  if (o.yer) {
    var parca = String(o.yer).split(/[,;\/·()]| ve /);
    for (var p = 0; p < parca.length; p++) {
      var pn = sgNorm(parca[p]);
      if (pn && adlar.indexOf(pn) >= 0) return "yer";
    }
  }
  if (o.b && cek && cek.length >= MADDE_DEGISIM_AYAR.minHarf &&
      _sgGeciyor(sgNorm(String(o.b).replace(/['‘’ʼ`]/g, " ")), cek)) return "baslik";
  return "";
}
// o: madde · gs: "YYYY-MM-DD" (madde günü) · kardesler: aynı günün öteki maddeleri
// Döner { gun, degisim:[…gün değişimleri], secilen:[{i,once,sonra,yol}], kardesin:n }
// ⑤ KONU ÖNCELİĞİ — aynı yerleşimi aynı günün iki maddesi ①-③ ile bağlıyorsa ve
//   biri kültür/iktisat konulu (maddeGrubu), öteki değilse, kültür/iktisat maddesi
//   o yerleşimi BIRAKIR. Ölçüldü: 1534-12-04 "Fuzûlî'nin … kasidesi" (k:kultur,
//   yer_id Bağdat) Bağdat fethinin 10 yerleşimini ikinci kez alıyordu.
function _ydIkincil(m) { var g = maddeGrubu(m); return g === "kultur" || g === "iktisat"; }
function maddeDegisimleri(o, gs, Y, ix, kardesler) {
  var deg = gunDegisimleri(Y, ix, gs), secilen = [], alindi = {}, kardesAl = {}, kardesAsil = {}, n, k;
  for (k = 0; k < (kardesler || []).length; k++) {
    if (kardesler[k] === o) continue;
    for (n = 0; n < deg.length; n++) if (_ydDogrudan(kardesler[k], Y[deg[n].i])) {
      kardesAl[deg[n].i] = true;
      if (!_ydIkincil(kardesler[k])) kardesAsil[deg[n].i] = true;
    }
  }
  var buIkincil = _ydIkincil(o), birakilan = 0;
  for (n = 0; n < deg.length; n++) {
    var yol = _ydDogrudan(o, Y[deg[n].i]);
    if (yol && buIkincil && kardesAsil[deg[n].i]) { birakilan++; continue; }
    if (yol) { secilen.push({ i: deg[n].i, once: deg[n].once, sonra: deg[n].sonra, yol: yol }); alindi[deg[n].i] = true; }
  }
  var dogrudan = secilen.slice();
  // 🔴 DÜZELTİLDİ (DALGA-0068 H-0015/H-0017/H-0016, ISGAL-TARAMA, 18 Eylül
  // 2026): "④ komşu" adımı AYNI (once,sonra) çiftini taşısa bile ≤150 km
  // şartı arıyordu. Bu, YEREL bir olayı (bir kuşatmanın komşu köyleri) doğru
  // ayırt ediyordu ama ÜLKE ÇAPINDA TEK bir olayı (hanedan değişimi, cumhuriyet
  // ilanı, toprak paylaşımı) `yer_id`ye yakın bir avuç peteğe KIRPIYORDU —
  // İran'ın Zend→Kaçar geçişi (25+ yerleşim, tek gün) yalnız 1-2 "leke",
  // Fransa Cumhuriyeti ilanı (13+ yerleşim, tek gün) yalnız Paris çevresi 5-6
  // bölge olarak görünüyordu; veri ÖLÇÜLDÜ, hepsi aynı gün aynı çifti
  // taşıyordu (denetim/ISGAL-TARAMA-0918.md). ⇒ Mesafe şartı KALDIRILDI —
  // aynı çift zaten güçlü bir bağdır (tam kimlik+tür dizgisi, örn.
  // "2:fransa"→"2:fransa-cumhuriyet"); iki BAĞIMSIZ olayın aynı gün aynı
  // çifti TESADÜFEN taşıması bu veri modelinde ölçülmedi ve ihtimali düşük.
  // ⚠️ Kalıntı risk: teorik olarak böyle bir tesadüf olursa madde YANLIŞ bir
  // yerleşimi de kardeş sayar — ölçülmedi, gözlem istenirse `komsuKm` geri
  // eklenebilir (sabit hâlâ burada duruyor, okunmuyor).
  for (n = 0; n < deg.length; n++) {
    var d = deg[n];
    if (alindi[d.i] || kardesAl[d.i]) continue;
    for (k = 0; k < dogrudan.length; k++) {
      var s = dogrudan[k];
      if (s.once === d.once && s.sonra === d.sonra) {
        secilen.push({ i: d.i, once: d.once, sonra: d.sonra, yol: "komsu" }); alindi[d.i] = true; break;
      }
    }
  }
  return { gun: gs, degisim: deg, secilen: secilen, kardesin: Object.keys(kardesAl).length, birakilan: birakilan };
}

// ── İŞ 2 · DIŞ OLAY ÖNEM SÜZGECİ (Osmanlı zaman çizgisi) ─────────────────────
// Emre (14 Eylül): *"'dış olayların 4 ya da 5 puan olanlarını göster' seçeneği
// işaretliyse — 4 üstü seçilirse 4 ve 5 puan olanlar kronolojide zikredilecek."*
// Eşik: "hepsi" | "4" | "5" | "0" (gösterme). Kural `onemGecer`in BÖLGE dalı
// (bolge yoksa onem) — ikinci bir kural yazılmadı.
//   · `kapsam` yok / "ic" / "konu" → HİÇ GİZLENMEZ (iç puansızlar bugünkü gibi)
//   · `kapsam:"dis"` + puanlı   → puan ≥ eşik ise görünür
//   · `kapsam:"dis"` + PUANSIZ  → yalnız "hepsi"de görünür (sayısı ayrıca döner)
// 🔴 İSTİSNA — Değişmez 2'nin ekrandaki karşılığı: gizlenen madde yüzünden bir
//   OSMANLI kırılması (kirilmaGunleri) ±pencere içinde GÖRÜNÜR maddesiz kalıyorsa,
//   tam listede o kırılmaya en yakın günün maddeleri görünür bırakılır
//   (`toprakIndeksleri`nin eşleşme kuralıyla aynı: en yakın gün, beraberlikte hepsi).
function disOnemGizliMi(m, esik) {
  if (kapsamOf(m) !== "dis" || esik === "hepsi") return false;
  if (esik === "0" || esik === 0) return true;
  return !onemGecer(m, { ic: 0, bolge: +esik, dunya: 0, puansiz: false });
}
// maddeler: gün sıralı · gunler: aynı sırada gün indeksleri · kirilmaGunleri: gün indeksleri
function disOnemGizli(maddeler, esik, gunler, kirilmaGunleri, pencere) {
  var P = pencere == null ? 30 : pencere, M = maddeler || [], G = gunler || [];
  var gizli = {}, istisna = [], puansiz = 0, puanli = 0, i;
  for (i = 0; i < M.length; i++) if (disOnemGizliMi(M[i], esik)) {
    gizli[i] = true;
    if (sayi(M[i].bolge) === null && sayi(M[i].onem) === null) puansiz++; else puanli++;
  }
  var gor = [];                                   // görünenlerin gün indeksleri (sıralı)
  for (i = 0; i < M.length; i++) if (!gizli[i]) gor.push(G[i]);
  function enYakin(dizi, k) {                     // |dizi[x]-k| en küçük x, yoksa -1
    if (!dizi.length) return -1;
    var lo = 0, hi = dizi.length - 1;
    while (lo < hi) { var md = (lo + hi) >> 1; if (dizi[md] < k) lo = md + 1; else hi = md; }
    return (lo > 0 && Math.abs(dizi[lo - 1] - k) <= Math.abs(dizi[lo] - k)) ? lo - 1 : lo;
  }
  var kurtar = {};
  for (var j = 0; j < (kirilmaGunleri || []).length; j++) {
    var kg = kirilmaGunleri[j], v = enYakin(gor, kg);
    if (v >= 0 && Math.abs(gor[v] - kg) <= P) continue;          // görünen madde var
    var t = enYakin(G, kg);
    if (t < 0 || Math.abs(G[t] - kg) > P) continue;               // zaten maddesiz — süzgeçten değil
    var g = G[t];
    for (i = t; i >= 0 && G[i] === g; i--) if (gizli[i]) kurtar[i] = kg;
    for (i = t + 1; i < G.length && G[i] === g; i++) if (gizli[i]) kurtar[i] = kg;
  }
  Object.keys(kurtar).forEach(function (x) {
    delete gizli[x];
    istisna.push({ i: +x, kirilma: kurtar[x] });
    if (sayi(M[x].bolge) === null && sayi(M[x].onem) === null) puansiz--; else puanli--;
  });
  istisna.sort(function (a, b) { return a.i - b.i; });
  return { gizli: gizli, istisna: istisna, gizliPuansiz: puansiz, gizliPuanli: puanli };
}

// Tarayıcıda global, node'da modül — dosya iki ortamda da sınanabilsin diye.
var _SG_DISA = { KONU_GRUPLARI: KONU_GRUPLARI, suz: suz, maddeGrubu: maddeGrubu,
                 grupSayilari: grupSayilari, bilinmeyenler: bilinmeyenler,
                 onemSuz: onemSuz, onemGecer: onemGecer, onemSay: onemSay,
                 ONEM_VARSAYILAN: ONEM_VARSAYILAN, TUR_GRUP: TUR_GRUP,
                 toprakIndeksleri: toprakIndeksleri,
                 // PAKET-ETIKET-UYGULA
                 KONU_BASLIKLARI: KONU_BASLIKLARI, AFET_ALT_TURLER: AFET_ALT_TURLER,
                 baslikEtiketleri: baslikEtiketleri, baslikGecer: baslikGecer,
                 baslikSayilari: baslikSayilari,
                 // PAKET-UI2
                 sahipAnahtari: sahipAnahtari, gunKaydir: gunKaydir, sinirIndeksi: sinirIndeksi,
                 sgNorm: sgNorm, kunyeCekirdek: kunyeCekirdek, antlasmaTaraflari: antlasmaTaraflari,
                 sahipIlgiliMi: sahipIlgiliMi, antlasmaFarki: antlasmaFarki,
                 sahipKimlikte: sahipKimlikte, aktifVAdi: aktifVAdi,
                 // DALGA-0074 H-0013 — antlaşmanın üç kademesi
                 isgalAnahtari: isgalAnahtari, isgalliYerlesimler: isgalliYerlesimler,
                 kademeKumesi: kademeKumesi,
                 // PAKET-ISYAN
                 isyanAktif: isyanAktif, isyanSecim: isyanSecim,
                 // PAKET-UI3
                 MADDE_DEGISIM_AYAR: MADDE_DEGISIM_AYAR, gunDegisimleri: gunDegisimleri,
                 maddeDegisimleri: maddeDegisimleri, disOnemGizliMi: disOnemGizliMi,
                 disOnemGizli: disOnemGizli };
if (typeof window !== "undefined") {
  window.SUZGEC = _SG_DISA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = _SG_DISA;
}

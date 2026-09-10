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

// Tarayıcıda global, node'da modül — dosya iki ortamda da sınanabilsin diye.
if (typeof window !== "undefined") {
  window.SUZGEC = { KONU_GRUPLARI: KONU_GRUPLARI, suz: suz, maddeGrubu: maddeGrubu,
                    grupSayilari: grupSayilari, bilinmeyenler: bilinmeyenler,
                    onemSuz: onemSuz, onemGecer: onemGecer, onemSay: onemSay,
                    ONEM_VARSAYILAN: ONEM_VARSAYILAN, TUR_GRUP: TUR_GRUP };
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KONU_GRUPLARI: KONU_GRUPLARI, suz: suz, maddeGrubu: maddeGrubu,
                     grupSayilari: grupSayilari, bilinmeyenler: bilinmeyenler,
                     onemSuz: onemSuz, onemGecer: onemGecer, onemSay: onemSay,
                     ONEM_VARSAYILAN: ONEM_VARSAYILAN, TUR_GRUP: TUR_GRUP };
}

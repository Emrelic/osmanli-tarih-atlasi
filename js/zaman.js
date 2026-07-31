// ZAMAN ÇİZGİSİ — saf mantık katmanı (yoğunluk şeridi + pencere)
//
// ⚠️ DOM'A DOKUNMAZ, `window`'dan HİÇBİR ŞEY OKUMAZ. `suzgec.js` ile aynı
// gerekçe: ARAYÜZ oturumunun tarayıcı paneli açılmıyor (gizli sekmede
// `requestAnimationFrame` hiç ateşlemiyor → MapLibre stili yüklemiyor →
// sayfa bozuk hâliyle birebir aynı görünüyor). DOM'suz modül node'da GERÇEK
// VERİYLE sınanabilir; tarayıcıda kalan yalnız çizim olur.
// Sondaki `window.ZAMAN = …` korumalı bir YAZMA'dır, okuma değil — davranış
// ortama bağlı değil.
"use strict";

// ---------------------------------------------------------------------------
// ÇÖZÜNÜRLÜK KARARI — ölçülerek kondu, kullanıcının "50 yıl"ı DEĞİL
//
// Kullanıcı "belli 50 yıl arasını görüntüleyebileceğimiz bir alan" dedi. Ölçüm
// bunun **pencere genişliği** olarak doğru, **gösterge çözünürlüğü** olarak
// kaba olduğunu gösterdi — ikisi ayrı sayı:
//   50 yıllık dilim → 14 çubuk; 1910'lar (en yoğun on yıl, 57 madde)
//                     1900'lerle karışıyor, yani tam kaybedilecek yerde
//   10 yıllık dilim → 65 çubuk; 1280-1920 arası HİÇ BOŞ DİLİM YOK
//                     (en az 1 · medyan 14 · en çok 57)
// ⇒ Şerit 10 yıllık, pencere 50 yıllık.
// ---------------------------------------------------------------------------
var DILIM_YIL = 10;
var PENCERE_YIL = 50;          // kullanıcının sayısı; aritmetiği tutuyor:
// 50 yıl = 18.262 gün; 900 px'lik çubukta 1 px = 20 gün. Ortalama madde
// aralığı 236 gün olduğuna göre madde başına ~12 piksel düşüyor — tıklanabilir
// hâle tam orada geliyor. Tam aralıkta (643 yıl) 1 px = 261 gün, yani BİR
// PİKSEL ORTALAMA BİR MADDE ATLIYOR ve seçim fiilen imkânsız.

function gunYil(g) { return new Date(g * 864e5).getUTCFullYear(); }
function yilGun(y) { return Math.round(Date.UTC(y, 0, 1) / 864e5); }
function dilimBasi(y) { return Math.floor(y / DILIM_YIL) * DILIM_YIL; }

// Yoğunluk dizisi. `gi` alanı gün indeksi (app.js'in gunIdx'i ile aynı birim).
// secili === null → süzme yok. Aksi hâlde `grupla(o)` ile grup bulunup bakılır.
//
// ⚠️ Şerit İKİ sayı taşıyor ve tasarımın en iyi parçası bu: `hepsi` (soluk) ve
// `secili` (koyu). Süzgeç açıkken kullanıcı HANGİ DÖNEMLERİN boşaldığını
// çizgide görüyor — "askerî maddeleri kapatınca 1683-1699 neredeyse boşalıyor"
// gibi bir okuma, süzgecin ve zaman çizgisinin ayrı ayrı veremeyeceği şey.
function yogunluk(olaylar, ilkYil, sonYil, secili, grupla) {
  var dilimler = [];
  for (var y = dilimBasi(ilkYil); y <= sonYil; y += DILIM_YIL)
    dilimler.push({ yil: y, hepsi: 0, secili: 0 });
  var ix = {};
  for (var i = 0; i < dilimler.length; i++) ix[dilimler[i].yil] = dilimler[i];
  for (var j = 0; j < (olaylar || []).length; j++) {
    var o = olaylar[j];
    var d = ix[dilimBasi(gunYil(o.gi))];
    if (!d) continue;
    d.hepsi++;
    if (!secili || (grupla && secili.indexOf(grupla(o)) >= 0)) d.secili++;
  }
  return dilimler;
}

// Zoom penceresi: merkez etrafında `genislikYil`, atlas sınırlarına KIRPILMIŞ.
// ⚠️ Kırpma kaydırarak yapılıyor, daraltarak değil: uçlara gidildiğinde pencere
// küçülseydi çubuğun ölçeği sessizce değişir ve "1 px kaç gün" sabit kalmazdı.
function pencere(merkezGun, genislikYil, altSinir, ustSinir) {
  var yari = Math.round(genislikYil * 365.25 / 2);
  var a = merkezGun - yari, b = merkezGun + yari;
  if (a < altSinir) { b += altSinir - a; a = altSinir; }
  if (b > ustSinir) { a -= b - ustSinir; b = ustSinir; }
  if (a < altSinir) a = altSinir;              // aralık pencereden darsa
  return { min: a, max: b };
}

// Pencerenin tam aralık içindeki konumu (genel görünüm şeridi için), 0-1 arası.
// 🔴 Bu bir süs değil ZORUNLU parça: bugün konum bağlamını ÇUBUĞUN KENDİSİ
// veriyor (sapın yeri = 643 yılın neresi). Zoom açılınca o bağlam kayboluyor
// ve geriye yalnız anlık bir tarih metni kalıyor — "neredeyim" der,
// "neyin neresindeyim" demez.
function pencereKonumu(p, altSinir, ustSinir) {
  var tam = ustSinir - altSinir;
  if (tam <= 0) return { bas: 0, son: 1 };
  return { bas: (p.min - altSinir) / tam, son: (p.max - altSinir) / tam };
}

// ---------------------------------------------------------------------------
// ŞU AN HANGİ OLAY — detay paneli hangi maddeyi göstersin?
//
// 🔴 ÖNERİLEN KURAL ÖLÇÜMLE ELENDİ. Öneri şuydu: *"`suanki` hangi olayın
// `sure` penceresi içindeyse o gösterilir"* (savaş işaretlerinin ve `anilan`
// mekanizmasının kullandığı pencere). Kapsamayı ölçtüm:
//     atlas aralığı        234.786 gün
//     bir pencerede olan   153.922  (%65,6)
//     HİÇBİR PENCEREDE     80.864  (%34,4) · 176 boşluk · en uzunu 10,0 YIL
// ⇒ O kuralla panel zamanın **üçte birinde boş** kalırdı ve 1289'dan itibaren
// on yıl boyunca hiçbir şey göstermezdi.
//
// ⇒ DOĞRUSU DAHA BASİT: panel, kronoloji listesinin vurguladığı maddeyi
// gösterir — yani `gi <= t` olan SON madde. Üç kazancı var:
//   1. asla boş kalmıyor (ilk maddeden öncesi hariç)
//   2. zaman ilerledikçe kendiliğinden ilerliyor — "takılı kalma" tanım gereği
//      imkânsız; 10 yıllık boşlukta aynı maddede durması TAKILMA DEĞİL, o
//      gerçekten en son olaydır
//   3. 🔴 ve asıl gerekçe: liste ile panel AYNI tanımı paylaşıyor. Pencere
//      kuralıyla gitseydik iki tanım **zamanın %34'ünde ayrışırdı** — liste
//      bir maddeyi vurgularken panel başkasını gösterirdi. Bu, düzeltmek
//      istediğimiz kusurun daha kötüsü olurdu.
//
// `gorunurMu` verilirse (süzgeç açıkken) gizlenmiş maddeler atlanır: kullanıcı
// o konuyu kapatmışsa panelde de görmemeli, ve listede vurgulanan satır zaten
// gizli olduğu için panel onu gösterirse ikisi yine ayrışır.
function suankiOlay(olaylar, t, gorunurMu) {
  var lo = 0, hi = olaylar.length - 1, bulunan = -1;
  while (lo <= hi) {                       // gi <= t olan son madde (ikili arama)
    var orta = (lo + hi) >> 1;
    if (olaylar[orta].gi <= t) { bulunan = orta; lo = orta + 1; } else { hi = orta - 1; }
  }
  if (bulunan < 0 || !gorunurMu) return bulunan;
  while (bulunan >= 0 && !gorunurMu(bulunan)) bulunan--;   // gizliyse geriye yürü
  return bulunan;
}

var _d = { DILIM_YIL: DILIM_YIL, PENCERE_YIL: PENCERE_YIL, gunYil: gunYil,
           suankiOlay: suankiOlay,
           yilGun: yilGun, dilimBasi: dilimBasi, yogunluk: yogunluk,
           pencere: pencere, pencereKonumu: pencereKonumu };
if (typeof window !== "undefined") window.ZAMAN = _d;
if (typeof module !== "undefined" && module.exports) module.exports = _d;

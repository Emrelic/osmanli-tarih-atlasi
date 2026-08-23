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

// Bir maddenin hangi gruba düştüğü. Tanınmayan `k:` → "diger".
function maddeGrubu(o) {
  var ix = grupIndeksi();
  return ix[o && o.k] || "diger";
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

// Tarayıcıda global, node'da modül — dosya iki ortamda da sınanabilsin diye.
if (typeof window !== "undefined") {
  window.SUZGEC = { KONU_GRUPLARI: KONU_GRUPLARI, suz: suz, maddeGrubu: maddeGrubu,
                    grupSayilari: grupSayilari, bilinmeyenler: bilinmeyenler };
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KONU_GRUPLARI: KONU_GRUPLARI, suz: suz, maddeGrubu: maddeGrubu,
                     grupSayilari: grupSayilari, bilinmeyenler: bilinmeyenler };
}

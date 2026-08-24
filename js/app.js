// ============================================================================
// Osmanlı Tarih Atlası — gün bazlı zaman çizgisi + dönem geometrileri
// Veri: data/donemler.js (dissolve edilmiş dönem kesitleri, bbox, km²),
//       data/olaylar(.js/_ek.js), data/padisahlar.js, data/kisiler.js, data/savaslar.js
// ============================================================================

"use strict";

// ---------- Gün bazlı tarih yardımcıları ----------
var AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
             "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
var AY_NO = {};
AYLAR.forEach(function (a, i) { AY_NO[a] = i + 1; });

function gunIdx(s) {                    // "1453-05-29" | "1453-05" -> gün indeksi
  var p = s.split("-");
  return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5);
}
function idxTarih(i) {                  // gün indeksi -> {y, a, g}
  var d = new Date(i * 864e5);
  return { y: d.getUTCFullYear(), a: d.getUTCMonth() + 1, g: d.getUTCDate() };
}
function idxYazi(i) {                   // gün indeksi -> "29 Mayıs 1453"
  var t = idxTarih(i);
  return t.g + " " + AYLAR[t.a - 1] + " " + t.y;
}
// "gun" metninden kesin gün çıkar ("29 Mayıs 1453", "26 Ağustos – 9 Eylül 1922"...)
function gunMetniIdx(gun, varsayilan) {
  if (!gun) return varsayilan;
  var m = gun.match(/(\d{1,2})\s+(Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)/);
  var y = gun.match(/(\d{4})/);
  if (m && y) return gunIdx(y[1] + "-" + AY_NO[m[2]] + "-" + m[1]);
  return varsayilan;
}

// ⚠️ GENEL KURAL (kullanıcı): UYDURMA KESİNLİK YASAK.
// "Eğer tam tarih günü gününe belli değilse '1 Ağustos 1366' deme, 'Ağustos
// 1366' yaz — 1 Ağustos demek yalan oluyor."
// Veride gün bilinmediğinde YYYY-01-01 yazılıyor (VERI-YAPISI.md konvansiyonu);
// arayüz bunu 1 Ocak diye göstererek olmayan bir kesinlik uyduruyordu.
// Öncelik: elle yazılmış `gun` alanı (doğru hassasiyeti zaten taşır) →
// ham tarihin biçiminden çıkarılan hassasiyet → son çare tam gün.
function kesinlikliYazi(ham, gi) {
  if (!ham) return idxYazi(gi);
  var p = ham.split("-");
  if (p.length < 3) return (p[1] ? AYLAR[(+p[1]) - 1] + " " : "") + p[0];
  if (p[1] === "01" && p[2] === "01") return p[0];          // konvansiyon: yalnız yıl
  return idxYazi(gi);
}
function olayTarihYazi(o) { return o.gun || kesinlikliYazi(o.t, o.gi); }

// ⚠️ savaslar.js ŞEMA GEÇİŞİ (Oturum 10'un devrettiği iş).
// Eskiden `taraf` serbest metindi ("Venedik") ve ekranda doğrudan yazılıyordu.
// Oturum 10 aynı adı devletler.js id DİZİSİNE çevirdi, eski metni `taraf_metin`e
// taşıdı ama arayüzü güncelleyemedi (dosya sahipliği dışındaydı) — sonuç: dizinde
// "Birinci Sırp isyanı — osmanli,sirbistan-prensligi" gibi id listeleri görünüyordu.
// Öncelik: elle yazılmış `taraf_metin` → id'lerin devletler.js'ten çözümü → ham metin.
// Osmanlı her kaydın bir tarafı olduğu için id listesinden düşürülür; "karşı taraf"
// zaten karşısındakini soruyor. Dizi tek elemanlıysa (iç isyan) o eleman yazılır.
// 🔴 8 Ağustos 2026 — bu sözlük YALNIZ `d.id` okuyordu ve `harita:` takma adını
// GÖRMÜYORDU. Ölçüldü: 248 künyenin `harita:` alanı var, bunların **22'sinin
// değeri hiçbir `id:` ile eşleşmiyor** — yani haritada `kaffa` · `sirbistan` ·
// `ceneviz` · `avusturya` gibi gövdelere tıklandığında kullanıcı künyenin adını
// değil HAM SLUG'ı görüyordu.
// 📌 Aynı kök bugün ÜÇ kez ısırdı: (1) ben `harita:`yi atlayıp §1.5'i yanlış ilan
// ettim ve bir oturumun üç bölümü boşa yazıldı; (2) RENK 2'nin künye ölçümü
// `kaffa`/`cimma`/`vollayta`/`sidamo`yu "künyesiz" sandı — dördü de dizindeydi;
// (3) burası. Kimlik eşleşmesi soran her yer `id:` ∪ `harita:` okumalı.
var _DEVLET_ADI = null;
function devletAdi(id) {
  if (!_DEVLET_ADI) {
    _DEVLET_ADI = {};
    (window.DEVLETLER || []).forEach(function (d) {
      if (d.id && !_DEVLET_ADI[d.id]) _DEVLET_ADI[d.id] = d.ad;
      if (d.harita && !_DEVLET_ADI[d.harita]) _DEVLET_ADI[d.harita] = d.ad;
    });
  }
  return _DEVLET_ADI[id] || id;
}
function karsiTaraf(k) {
  if (k.taraf_metin) return k.taraf_metin;
  var t = k.taraf;
  if (!t) return "—";
  if (!Array.isArray(t)) return t;
  var d = t.filter(function (x) { return x !== "osmanli"; });
  return (d.length ? d : t).map(devletAdi).join(", ");
}

var BASLANGIC = gunIdx("1281-01-01");
var BITIS     = gunIdx("1923-10-29");

// ---------- Dönem verisi ----------
// PETEK yapısı: her yerleşimin bölgesi bir kez tanımlanır; dönemler yalnızca
// eklenen/çıkan petek indekslerini tutar (delta). Aktif set dönem dönem kurulur.
var PETEKLER = window.PETEKLER || [];
// Gövde parçaları havuzda bir kez durur (window.PARCALAR); dönem kayıtları
// havuz indeksi taşır. Sayı → parça çözümü burada, yüklemede bir kez yapılır;
// aynı parça bütün dönemlerde tek nesne olarak paylaşılır. Eski format
// (indekssiz, doğrudan koordinat) de tanınır.
// 🔴 YÜK-SARTNAME.md C — MOTOR halka havuzlama yazacak (5,1 MB kazanç):
// `havuz[p]` artık bir POLİGON değil, TEK HALKA olabilir; hangi halkaların
// hangi poligonu oluşturduğunu `parcaHalka[p]` (havuz indeksi dizisi) söyler.
// Geriye uyumluluk: `parcaHalka` boşsa (eski üretim) davranış AYNEN eskisi gibi.
// ⚠️ Format kararı DİZİ BAŞINA bir kez veriliyor, İNDEKS BAŞINA değil — MOTOR'un
// ilk taslağı `ph ? ph.map(...) : havuz[p]` yazmıştı, o hâliyle PARCA_HALKA'da
// TEK bir delik sessizce eski davranışa düşer ve bozuk geometri üretir, kimse
// fark etmez. "Boş alan yok, niçin boş var" kuralı burada: delik varsa GÜRÜLTÜ
// ÇIKAR (throw), sessizce yanlış çizme.
function parcaCoz(dizi, havuz, parcaHalka) {
  if (!dizi) return null;
  var yeniBicim = !!(parcaHalka && parcaHalka.length);
  return { type: "MultiPolygon",
           coordinates: dizi.map(function (p) {
             if (typeof p !== "number") return p;         // eski format: doğrudan koordinat
             if (!yeniBicim) return havuz[p];              // eski veri: havuz zaten poligon
             var ph = parcaHalka[p];
             if (!ph) throw new Error("PARCA_HALKA deliği: " + p);
             return ph.map(function (h) { return havuz[h]; });
           }) };
}
var PARCALAR = window.PARCALAR || [];
var PARCA_HALKA = window.PARCA_HALKA || [];

// ⚠️ SERBEST KENAR — gövdenin SAHİPSİZ alanla komşu olduğu sınır parçaları.
// (hatalar 15 md.17-19 tartışmasından; Oturum 16 üretiyor, sözleşme: hat havuzu
// window.SERBEST + dönem kaydında "sb" indeks dizisi, PARCALAR/"o" ile aynı desen.)
//
// NEDEN AYRI ÇİZİLİYOR: iki DEVLET arasındaki sınır, kaba da olsa gerçek bir
// iddiadır — "yetki burada bölünüyordu". Devlet ile HİÇLİK arasındaki sınır ise
// hiçbir şeyin iddiası değil; nereye nokta koyduğumuzun artefaktı. Keskin çizgi
// orada olmayan bir kesinlik iddia ediyor.
// Ölçüldü (Oturum 16): Osmanlı gövde çevresinin köşe payı %1,7-3,1 ama UZUNLUK
// PAYI %17-22 — yani çevrenin beşte biri hiçliğe karşı sert çizgiyle çiziliyordu.
// Serbest kenarın ortalama parçası 29,6 km, gövde ortalaması 4,2 km: yedi kat kaba.
var SERBEST = window.SERBEST || [];
// Havuza PARALEL belirsizlik dizisi (km). Oturum 16 ölçtü: serbest kenar iki
// tohumun orta dikmesidir (sahipli yerleşim ↔ sahipsiz dolgu noktası), yani
// dolgu noktası d kadar oynarsa sınır d/2 kayar — belirsizlik = tohum arası / 2.
// DAĞILIM GENİŞ ve tek çıpayı imkânsız kılıyor (uzunlukla ağırlıklı medyan):
//     Arabistan 217,3 km · Sahra 181,9 · Libya-Mısır 150,7
//     Kafkasya   62,0 km · Rumeli  30,5 · Anadolu     23,4
// En dar ile en geniş arasında 9,3 KAT fark var. Hepsini aynı kalınlıkta çizmek
// tam da ölçtüğümüz farkı gizlemek olurdu: Anadolu'daki 23 km'lik kenar neredeyse
// gerçek bir sınır, Arabistan'daki 217 km'lik kenar neredeyse hiçbir şey söylemiyor.
var SERBEST_U = window.SERBEST_U || [];
// Her hat AYRI bir feature: kalınlık artık veriden geliyor (`u` özniteliği).
function hatCoz(dizi) {
  if (!dizi || !dizi.length) return null;
  return { type: "FeatureCollection",
           features: dizi.map(function (h) {
             var i = typeof h === "number" ? h : -1;
             return { type: "Feature",
                      properties: { u: i >= 0 ? (SERBEST_U[i] || 60) : 60 },
                      geometry: { type: "LineString",
                                  coordinates: i >= 0 ? SERBEST[i] : h } };
           }) };
}

var donemler = window.DONEMLER.map(function (d) {
  return { fi: gunIdx(d.f), ti: gunIdx(d.t), ad: d.ad, b: d.b, ao: d.ao,
           av: d.av || 0, e: d.e || [], c: d.c || [],
           o: parcaCoz(d.o, PARCALAR, PARCA_HALKA),
           v: parcaCoz(d.v, PARCALAR, PARCA_HALKA),
           // "sb" boşsa hiç yazılmıyor (çoğu dönemde çölle sınırdaşlık yok),
           // yani d.sb undefined olabilir — hatCoz bunu null'a çeviriyor.
           sb: hatCoz(d.sb),
           // ⚠️ `z` (şehzade payları) TAŞINMIYOR: donemler.js'in 462
           // döneminin hiçbirinde yok (0/462) ve tüketicisi kaldırıldı.
           _sonKapan: 1 };
});

// Bütün dönemlerin en büyük Osmanlı alanı — lejanttaki "zirvenin %N'i" için.
// Bir kez, açılışta: 462 kayıt, çalışma anında yeniden taranmıyor.
// ⚠️ Fetret dönemi (`z` dolu, tek gövde yok) zirveye KATILMIYOR: orada `ao`
// bütün ülkeyi değil şehzade paylarının toplamını temsil etseydi zirve
// yanıltıcı olurdu. Bugün o dönemlerde `ao` zaten kullanılmıyor.
var donemZirve = 0;
for (var _dz = 0; _dz < donemler.length; _dz++) {
  var _d = donemler[_dz];
  if (_d.ao > donemZirve) donemZirve = _d.ao;
}

// Her dönemin aktif petek listesini delta'lardan kur (bir kez, açılışta)
(function () {
  if (!PETEKLER.length) return;
  var aktif = {};
  donemler.forEach(function (d) {
    d.c.forEach(function (i) { delete aktif[i]; });
    d.e.forEach(function (i) { aktif[i] = 1; });
    d.petekler = Object.keys(aktif).map(Number);
  });
})();

// Bölge (k1/k2 merkez) sınırları — data/bolgeler.js. Her kayıt, merkeze bağlı
// yerleşim peteklerinin birleşimi; yalnız merkezin Osmanlı aralığında çizilir.
var bolgeler = (window.BOLGELER || []).map(function (b) {
  return { fi: gunIdx(b.f), ti: gunIdx(b.t),
           // `uy` = bölgeye bağlı yerleşimler. Etiketin ipucu metnine giriyor:
           // kullanıcı "bu bölge neyi kapsıyor" diye sorduğunda cevap orada.
           uy: b.uy || null,
           ft: { type: "Feature", properties: { ad: b.ad },
                 geometry: { type: "MultiPolygon", coordinates: b.g } } };
});
// 🔴 BÖLGE ETİKETİNE NİTELİK EKİ — ölçülmüş bir kusurun karşılığı.
// Kullanıcı İKİ KEZ aynı şeyi bildirdi: *"Çankırı'nın kuzeyinde garip bir
// Ankara etiketi daha var"* ve *"hakiki Bursa'nın doğusunda bir Bursa etiketi
// daha var, hata galiba."* İkisi de hata değil — ikinci etiket idarî BÖLGE.
// Ve sistematik: **62 bölgenin 62'si bir yerleşimle aynı adı taşıyor**;
// bölge etiketi ile aynı adlı şehir arası medyan 65 km, azami 460 (Basra).
// Kullanıcı iki vakada bildirdi, altmışı duruyordu.
//
// Üç yol ölçülüp ikisi elendi:
//   (c) etiketi bölgenin merkezine taşı → bölge kaydının `lat/lon`'u ZATEN
//       aynı adlı şehir; mesafe SIFIRA iner, iki etiket birebir üst üste biner
//   (b) görsel ayrımı güçlendir → stil farkı ZATEN var (kahve, normal yazım,
//       8-14 punto) ve kullanıcı buna rağmen iki kez ayırt edemedi. Stil
//       "farklı bir şey" der, "bu ne" sorusuna cevap vermez
//   (a) ada nitelik ekle → cevabı bir AD, ve bu uygulandı
//
// ⚠️ "eyaleti" DEĞİL: kurum türü alanı yok (`k:` yalnız 4×k1, 58×k2) ve kurum
// devirle değişiyor (beylerbeylik → eyalet → vilâyet). "bölgesi" zamandan
// bağımsız; "eyaleti" hangi tarihte doğru olduğu AYRI bir veri işi.
// ⚠️ `bolgeler.js` ÜRETİLMİŞ dosya — ek burada, çizim anında yapılıyor.
var BOLGE_EKI = " bölgesi";
function bolgeVerisi(t) {
  return { type: "FeatureCollection",
           features: bolgeler.filter(function (b) { return b.fi <= t && t < b.ti; })
                             .map(function (b) { return b.ft; }) };
}

// Yabancı devlet gövdeleri — data/devletler_harita.js. Her devlet kendi renginde
// boyanır; Osmanlı d/v dönemi aktifken üreteç o hücreleri devletten düşer.
var devletler2 = (window.DEVLET_HARITA || []);
var DEVLET_PARCALAR = window.DEVLET_PARCALAR || [];
var DEVLET_PARCA_HALKA = window.DEVLET_PARCA_HALKA || [];
devletler2.forEach(function (s) {
  s.dnm.forEach(function (p) {
    p.fi = gunIdx(p.f); p.ti = gunIdx(p.t);
    p.ft = { type: "Feature", properties: { renk: s.renk },
             geometry: parcaCoz(p.g, DEVLET_PARCALAR, DEVLET_PARCA_HALKA) };
  });
});
// ---------- Devlet etiketleri ----------
// ⚠️ Eskiden her devlete TEK etiket veriliyor ve üretimden gelen tek bir
// ağırlık merkezine (p.c) konuyordu. Sonuçları kullanıcı raporladı:
//   • Bizans'ın gövdesi Marmara + Trabzon + Mora'ya dağıldığı için etiketi
//     doğuya kayıyor, Kuzeybatı Anadolu'nun tamamı ADSIZ kalıyordu.
//   • Ceneviz'in etiketi İtalya'da kaldığı için Amasra, Sakız ve Midilli
//     kolonileri adsız görünüyordu ("burası Ceneviz kolonisi mi acaba").
//   • Memlûk, Karakoyunlu gibi devletlerin gövdeleri de adsız kalıyordu.
// Artık her AYRI GÖVDEYE kendi etiketi veriliyor ve çakışanlar eleniyor.

// Bir halkanın işaretli alanı, DERECE² — enlem düzeltmesi YOK, yani km² değil.
// (Yorum eskiden "enlem düzeltmesiyle" diyordu, kodda öyle bir düzeltme hiç
// olmadı.) İki kullanıcısı da derece² istiyor: etiket eşiği ve etiket puntosu
// ekran ölçüsüne bakar, gerçek yüzölçümüne değil. km² gereken yerde bunu
// KULLANMA — arac/denetle_bitisiklik.py'deki alan hesabı ayrıdır.
function halkaAlan(r) {
  var a = 0;
  for (var i = 0, j = r.length - 1; i < r.length; j = i++) {
    a += (r[j][0] - r[i][0]) * (r[j][1] + r[i][1]);
  }
  return Math.abs(a / 2);
}
function noktaIcinde(p, r) {
  var ic = false;
  for (var i = 0, j = r.length - 1; i < r.length; j = i++) {
    var xi = r[i][0], yi = r[i][1], xj = r[j][0], yj = r[j][1];
    if ((yi > p[1]) !== (yj > p[1]) && p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi) ic = !ic;
  }
  return ic;
}
// Etiket noktası: ağırlık merkezi. İçbükey gövdede merkez dışarı düşebilir —
// o zaman halkanın kendi noktalarından, sınıra en uzak olanı seçilir.
function etiketNoktasi(halka) {
  var sx = 0, sy = 0, n = halka.length - 1;
  for (var i = 0; i < n; i++) { sx += halka[i][0]; sy += halka[i][1]; }
  var c = [sx / n, sy / n];
  if (noktaIcinde(c, halka)) return c;
  var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (var k = 0; k < n; k++) {
    if (halka[k][0] < x0) x0 = halka[k][0];
    if (halka[k][0] > x1) x1 = halka[k][0];
    if (halka[k][1] < y0) y0 = halka[k][1];
    if (halka[k][1] > y1) y1 = halka[k][1];
  }
  var eniyi = null, enUzak = -1;
  for (var gy = 1; gy < 8; gy++) for (var gx = 1; gx < 8; gx++) {
    var p = [x0 + (x1 - x0) * gx / 8, y0 + (y1 - y0) * gy / 8];
    if (!noktaIcinde(p, halka)) continue;
    var d = Math.min(p[0] - x0, x1 - p[0], p[1] - y0, y1 - p[1]);
    if (d > enUzak) { enUzak = d; eniyi = p; }
  }
  return eniyi || c;
}

var devletImza = null;
var devletEtiketleri = [];      // aktif DOM işaretleri
var etiketAdaylari = [];        // {ad, c, alan} — dönem başına bir kez kurulur

function devletGuncelle(t) {
  if (!haritaHazir) return;
  var fs = [], et = [], imza = "";
  devletler2.forEach(function (s) {
    for (var i = 0; i < s.dnm.length; i++) {
      var p = s.dnm[i];
      if (p.fi <= t && t < p.ti) {
        imza += s.id + ":" + i + ";";
        // 🔴 21 Ağustos — KUSUR ③ (odak vurgusu) için: `p.ft` zaten "renk"
        // taşıyordu ama devletin KİMLİĞİNİ taşımıyordu (dolgu boyamak için
        // gerekmiyordu). `devlet-odak-vurgu` katmanı bunu FİLTRELEMEK için
        // istiyor. Aynı nesneye her kare YAZILIYOR (idempotent, zararsız) —
        // ayrı bir kopya çıkarmaya gerek yok, `devletler2` bu oturumun
        // BELLEK içi verisi (dosyaya yazılmıyor).
        p.ft.properties = p.ft.properties || {};
        p.ft.properties.id = s.id;
        fs.push(p.ft);
        // Her gövde parçası için ayrı etiket adayı
        var mp = p.ft.geometry.coordinates;
        for (var k = 0; k < mp.length; k++) {
          var dis = mp[k][0];
          if (!dis || dis.length < 4) continue;
          et.push({ ad: s.ad, id: s.id, c: etiketNoktasi(dis), alan: halkaAlan(dis) });
        }
        break;
      }
    }
  });
  if (imza === devletImza) return;
  devletImza = imza;
  harita.getSource("devlet").setData({ type: "FeatureCollection", features: fs });
  // Büyük gövde önce yerleşsin: çakışmada küçük olan elenir
  et.sort(function (a, b) { return b.alan - a.alan; });
  etiketAdaylari = et;
  etiketleriYerlestir();
}

// p5/H-0003 — kullanıcı: "haritaya yay" düğmesi: devlete tıkla, sınırlarını
// ekrana sığdır, üstten alttan taşırma. `devletler_harita.js` her devletin
// dönem gövdesini (dnm[].ft, MultiPolygon) zaten taşıyor — ayrı bir bbox
// tablosu TUTULMUYOR, aksi hâlde `suanki` değişince bayatlardı (§35).
// Sınır kutusu her tıklamada O ANKİ aktif döneme göre TAZE hesaplanıyor.
function devletEtiketiTiklandi() {
  devletiYay(this.dataset.devletId);
}
function devletiYay(id) {
  var s = null;
  for (var i = 0; i < devletler2.length; i++) if (devletler2[i].id === id) { s = devletler2[i]; break; }
  if (!s) return;
  var p = null;
  for (var k = 0; k < s.dnm.length; k++) {
    if (s.dnm[k].fi <= suanki && suanki < s.dnm[k].ti) { p = s.dnm[k]; break; }
  }
  if (!p) return;   // o an bu devlet sahnede değil (nesli tükenmiş/henüz doğmamış)
  var x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  var mp = p.ft.geometry.coordinates;
  for (var a = 0; a < mp.length; a++)
    for (var b = 0; b < mp[a].length; b++)
      for (var c = 0; c < mp[a][b].length; c++) {
        var nk = mp[a][b][c];
        if (nk[0] < x0) x0 = nk[0]; if (nk[0] > x1) x1 = nk[0];
        if (nk[1] < y0) y0 = nk[1]; if (nk[1] > y1) y1 = nk[1];
      }
  if (x0 === Infinity) return;
  // "üstten alttan taşırma" — kullanıcının kendi sözü. Sağda kronoloji sütunu
  // açıksa gövde onun ALTINDA kalmasın diye sağ payı sütun genişliği kadar
  // artırılıyor (H-0006'daki #yanpanel.katli ile aynı durum okunuyor).
  var yp = document.getElementById("yanpanel");
  var sagPay = 50 + (yp && !yp.classList.contains("katli") ? yp.getBoundingClientRect().width : 0);
  harita.fitBounds([[x0, y0], [x1, y1]],
    { padding: { top: 50, bottom: 50, left: 50, right: sagPay }, duration: 800, maxZoom: 7.5 });
}

// Çakışma elemesi. MapLibre'nin sembol katmanı çakışmayı kendi çözerdi ama o
// yazı tipi (glyphs) kaynağı ister; bu proje dış bağımlılık almıyor, bu yüzden
// eleme elle yapılıyor: ekrana yansıt, büyükten küçüğe yerleştir, kutusu
// yerleşmişlerden biriyle kesişeni gizle.
// Punto başına ortalama karakter genişliği (600 ağırlık, uppercase, +0.08em
// harf aralığı dahil). Eski sabit 11px'te 5.4px'ti; oran korunuyor ki çakışma
// elemesinin bugüne kadar ayarlanmış davranışı bozulmasın.
var KARAKTER = 5.4 / 11;

// ---------- İKİNCİ KADEME: bölge (eyalet) adları — md.21'in ikinci yarısı ----
// ⚠️ Görev tanımı "bölge isimleri hâlâ sabit puntoda" diyordu; ölçünce öyle
// çıkmadı — bölge adları HİÇ ÇİZİLMİYORDU. `data/bolgeler.js` her kayıtta
// `ad` taşıyor ama app.js yalnız `bolge-cizgi` (kesikli sınır) katmanını
// kuruyordu, hiçbir sembol/etiket katmanı yoktu. Yani sabit puntolu bir
// gösterimi düzeltmiyoruz, olmayan bir gösterimi açıyoruz.
//
// Katsayılar ÖLÇÜLEREK kondu (ORGANIZASYON §7.4 "ölçmeden eşik koyma"):
//   62 kayıt · alan 0,143 → 107,7 derece² (Rodos → Hartum) · oran 752×
//   %25=2,81  medyan=6,05  %75=12,43 · aynı anda sahnede en çok 61 bölge (1680)
// Band ölçülen aralığa YAYILDI: log2(107,7/0,143) = 9,56 kademe var, 8→14
// punto arası 6 punto ⇒ eğim 0,628. Medyan bölge 11,4 punto alıyor.
// §33'ün dersi burada da geçerli ve bu sefer baştan uygulandı: SÜRÜCÜ ALAN,
// sığma yalnız TAVAN. (§33'ün ilk denemesinde 86 gövdenin 40'ı tavana
// yapışmıştı ve sığma kısıtı "temiz" diyordu.)
var BOLGE_TABAN = 8, BOLGE_TAVAN = 14, BOLGE_EGIM = 0.628, BOLGE_REF = 0.143;
// bolge-cizgi ile AYNI eşik: adı, sınırı görünmeyen bir bölgeye yazmak
// "bu çizgisiz alan neyin nesi" sorusunu doğurur.
var BOLGE_ZOOM = 5.2;
var bolgeEtiketleri = [];

function etiketleriYerlestir() {
  devletEtiketleri.forEach(function (m) { m.remove(); });
  devletEtiketleri = [];
  bolgeEtiketleri.forEach(function (m) { m.remove(); });
  bolgeEtiketleri = [];
  var z = harita.getZoom();
  // Ekranda çok küçük kalan gövdeye etiket konmaz; yakınlaştıkça eşik düşer,
  // böylece adalar ve koloniler yakınlaşınca adlarını gösterir.
  var esik = 0.55 / Math.pow(2, z - 3);
  var yerlesen = [];
  // 23 Agustos 2026 — GORUS ALANI KIRPMASI.
  // OLCULDU (1281 kesiti, pencere Anadolu): 321 canli .devlet-etiket
  // isareti vardi ve cogu ekranin disindaydi ("Yuan Hanedani" Cin'de).
  // MapLibre HER Marker'i HER `move` olayinda yeniden konumlandirdigi
  // icin bunlar kare basina odenen bir bedel — hicbiri gorunmuyor.
  // PAY %20: kenardaki etiketin cakisma kutusu pencereyi asabilir; tam
  // sinirdan kesilseydi kenar etiketleri yerlesim duzenine katilmaz ve
  // ic taraftakiler yanlis yere otururdu.
  var _ep = null;
  try {
    var _eb = harita.getBounds();
    var _ex = (_eb.getEast() - _eb.getWest()) * 0.2;
    var _ey = (_eb.getNorth() - _eb.getSouth()) * 0.2;
    _ep = { b: _eb.getWest() - _ex, d: _eb.getEast() + _ex,
            g: _eb.getSouth() - _ey, k: _eb.getNorth() + _ey };
  } catch (eBnd) { _ep = null; }
  for (var i = 0; i < etiketAdaylari.length; i++) {
    var e = etiketAdaylari[i];
    if (e.alan < esik) continue;
    if (_ep && e.c && (e.c[0] < _ep.b || e.c[0] > _ep.d
                       || e.c[1] < _ep.g || e.c[1] > _ep.k)) continue;
    var pt = harita.project(e.c);
    // Punto gövde büyüklüğünden türer: "Mısır" ile "Ragusa" aynı boyutta
    // yazılmasın (md.21). Ayrı bir "büyük ülkeler listesi" tutulmuyor; sıra
    // veriden çıkıyor.
    //
    // ⚠️ İlk deneme YALNIZCA sığma kısıtıydı (etiket gövdesini aşmasın) ve
    // ÖLÇÜNCE ÇÖKTÜ: 1541 kesitinde eşiği geçen 86 gövdenin 40'ı tavana
    // yapıştı — Safevî İran ile Kazan Hanlığı aynı puntoyu aldı. Sebep,
    // yakınlaşınca gövdenin ekranda o kadar genişlemesi ki sığma hiçbir şeyi
    // bağlamıyor. Sürücü alanın kendisi olmalı; sığma sadece TAVAN.
    // Aynı kesitte yeni dağılım: tavanda 0, canlı bantta 58, tabanda 28
    // (tabandakiler İspanya/Britanya'nın ada kalıntıları — küçük kalmaları
    // doğru). Ölçüm defteri: OGRENILENLER.md §33.
    var pxDerece = 512 * Math.pow(2, z) / 360;
    var sigmaTavan = Math.sqrt(e.alan) * pxDerece * 0.85 / (e.ad.length * KARAKTER);
    var punto = 10 + 1.6 * (Math.log(e.alan / 0.5) / Math.LN2);
    punto = Math.max(10, Math.min(26, Math.min(punto, sigmaTavan)));
    var g = e.ad.length * KARAKTER * punto + 8, y = punto * 1.36;
    var kutu = { x0: pt.x - g / 2, x1: pt.x + g / 2, y0: pt.y - y / 2, y1: pt.y + y / 2 };
    var carpti = false;
    for (var j = 0; j < yerlesen.length; j++) {
      var o = yerlesen[j];
      if (kutu.x0 < o.x1 && kutu.x1 > o.x0 && kutu.y0 < o.y1 && kutu.y1 > o.y0) { carpti = true; break; }
    }
    if (carpti) continue;
    yerlesen.push(kutu);
    var el = document.createElement("div");
    el.className = "devlet-etiket";
    el.style.fontSize = punto.toFixed(1) + "px";
    el.textContent = e.ad;
    // p5/H-0003 — "haritaya yay": devlet adına tıklayınca o devletin O ANKİ
    // gövdesi ekrana sığdırılıyor. `e` for döngüsünün değişkeni olduğu için
    // kapanışa doğrudan alınmıyor — id, elemanın kendi dataset'ine yazılıp
    // tıklamada OKUNUYOR (§35: aynı bilgiyi iki değişkende taşımak yerine tek
    // yerde tutulan DOM'dan okunuyor).
    el.dataset.devletId = e.id;
    el.title = e.ad + " — haritaya yay";
    el.addEventListener("click", devletEtiketiTiklandi);
    devletEtiketleri.push(new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(e.c).addTo(harita));
  }

  // ---- İkinci kademe: bölge adları ----
  // Devletlerden SONRA yerleşiyor ve AYNI `yerlesen` dizisini paylaşıyor.
  // Sıra kasıtlı: çakışmada elenen taraf bölge olsun. Bir eyalet adı, ülke
  // adını asla itmemeli — kullanıcı önce "burası neresi", sonra "hangi eyalet"
  // sorusunu sorar.
  if (z < BOLGE_ZOOM) return;
  // Fetret Devri'nde bölge katmanı boşaltılıyor (guncelle: di === -2); adları
  // orada bırakmak çizgisiz bir haritada asılı yazı üretirdi.
  if (aktifDonem === -2) return;
  var bAday = [];
  for (var bi = 0; bi < bolgeler.length; bi++) {
    var b = bolgeler[bi];
    if (!(b.fi <= suanki && suanki < b.ti)) continue;
    // Geometri dönem boyunca sabit; etiket noktası ve alan kayıt başına BİR KEZ
    // hesaplanıp saklanıyor. Her karede yeniden hesaplansaydı 61 bölgenin
    // ağırlık merkezi her zoom hareketinde yeniden taranırdı.
    if (!b.ec) {
      var mp = b.ft.geometry.coordinates, enB = null, enA = 0;
      for (var mi = 0; mi < mp.length; mi++) {
        var dis = mp[mi][0];
        if (!dis || dis.length < 4) continue;
        var a = halkaAlan(dis);
        if (a > enA) { enA = a; enB = dis; }
      }
      // Devlette her gövdeye ayrı etiket veriliyor (Bizans vakası); bölgede
      // TEK etiket, en büyük parçaya. Sebep: bir eyaletin adacıkları ayrı
      // idarî birim değil, aynı eyaletin parçası — üç kez yazmak yanlış olur.
      b.ec = enB ? { c: etiketNoktasi(enB), alan: enA } : { yok: 1 };
    }
    if (b.ec.yok) continue;
    // ⚠️ `yazi` ile `ad` AYRI tutuluyor. Ölçüler (sığma tavanı, çakışma kutusu)
    // EKRANDA GÖRÜNEN metne göre hesaplanmalı; `ad` üzerinden hesaplansaydı
    // kutu ekin genişliği kadar DAR çıkardı. Bu, şehir işaretlerinde bugün
    // düzelttiğim kusurun ta kendisi (emoji yüzünden dar kutu → eleme
    // çakışmayı göremiyordu). Aynı hatayı ek koyarken tekrarlamıyorum.
    bAday.push({ ad: b.ft.properties.ad, yazi: b.ft.properties.ad + BOLGE_EKI,
                 uy: b.uy, c: b.ec.c, alan: b.ec.alan });
  }
  bAday.sort(function (a, b2) { return b2.alan - a.alan; });
  var pxDerece2 = 512 * Math.pow(2, z) / 360;
  for (var bk = 0; bk < bAday.length; bk++) {
    var be = bAday[bk];
    var bpt = harita.project(be.c);
    var bsigma = Math.sqrt(be.alan) * pxDerece2 * 0.85 / (be.yazi.length * KARAKTER);
    var bpunto = BOLGE_TABAN + BOLGE_EGIM * (Math.log(be.alan / BOLGE_REF) / Math.LN2);
    bpunto = Math.max(BOLGE_TABAN, Math.min(BOLGE_TAVAN, Math.min(bpunto, bsigma)));
    var bg = be.yazi.length * KARAKTER * bpunto + 6, by = bpunto * 1.36;
    var bkutu = { x0: bpt.x - bg / 2, x1: bpt.x + bg / 2,
                  y0: bpt.y - by / 2, y1: bpt.y + by / 2 };
    var bcarpti = false;
    for (var bj = 0; bj < yerlesen.length; bj++) {
      var bo = yerlesen[bj];
      if (bkutu.x0 < bo.x1 && bkutu.x1 > bo.x0 &&
          bkutu.y0 < bo.y1 && bkutu.y1 > bo.y0) { bcarpti = true; break; }
    }
    if (bcarpti) continue;
    yerlesen.push(bkutu);
    var bel = document.createElement("div");
    bel.className = "bolge-etiket";
    bel.style.fontSize = bpunto.toFixed(1) + "px";
    bel.textContent = be.yazi;
    // Bağlı yerleşimler ipucuda: "bu bölge neyi kapsıyor" sorusunun cevabı.
    if (be.uy && be.uy.length) bel.title = be.ad + " — " + be.uy.join(", ");
    bolgeEtiketleri.push(new maplibregl.Marker({ element: bel, anchor: "center" })
      .setLngLat(be.c).addTo(harita));
  }
}

// Aktif peteklerden GeoJSON kur
function petekVerisi(d) {
  if (!d.petekler) return bosVeri();
  var fs = [];
  d.petekler.forEach(function (i) {
    var p = PETEKLER[i];
    if (p && p.g && p.g.length) {
      fs.push({ type: "Feature", properties: { ad: p.a },
                geometry: { type: "MultiPolygon", coordinates: p.g } });
    }
  });
  return { type: "FeatureCollection", features: fs };
}
function donemBul(t) {
  for (var i = 0; i < donemler.length; i++) {
    if (donemler[i].fi <= t && t < donemler[i].ti) return i;
  }
  // Atlasın iki ucunda kırpma: 1281 öncesi ilk döneme, 1923 sonrası son döneme.
  if (t < donemler[0].fi) return 0;
  if (t >= donemler[donemler.length - 1].ti) return donemler.length - 1;
  // ⚠️ İÇ BOŞLUK — bugün yalnız Fetret Devri (1402-07-28 → 1413-07-05).
  // O aralıkta tek bir Osmanlı gövdesi yoktur; ülke şehzade payları arasında
  // bölünmüştür ve paylar devletler_harita.js'ten kendi renkleriyle çizilir.
  // Eskiden burada son dönem döndürülüyordu: zaman çubuğu 1405'e getirildiğinde
  // harita 1922-1923 sınırlarını gösteriyordu.
  // -2 döndürülür; -1 "henüz hiçbir dönem çizilmedi" için ayrılmıştır (aktifDonem).
  return -2;
}

// ---------- Harita ----------
// 🔴 SU RENGİ — TEK SABİT, İKİ KULLANIM (Emre'nin kararı, 24 Ağustos 2026:
// *"deniz ve göl mavisini bir tık daha açık mavi yapalım"*).
//
// ⚠️ ÖNCEDEN `#a8c8dc` İKİ AYRI YERDE ELLE YAZILIYDU: `zemin` (deniz) ve
//    `g-gol` (göller). Biri değiştirilip öteki unutulsaydı deniz ile göl
//    AYRI RENKTE olurdu ve kimse sebebini aramazdı — bu projede "bir
//    bilgi iki yerde durursa biri bayatlar" dersi defalarca ölçüldü.
//    ⇒ Renk değişirken sabit de doğdu; ikisi artık ayrışamaz.
//
// SEÇİM ÖLÇÜLDÜ, göz kararı DEĞİL:
//     #a8c8dc  L*=78,9   (eski)
//     #b4d0e2  L*=82,0   eskisinden ΔE 3,5 — fark edilmeyecek kadar az
//     #bcd6e6  L*=84,2   eskisinden ΔE 6,0 ✓ SEÇİLEN — "bir tık"
//     #c4dcea  L*=86,4   eskisinden ΔE 8,6 — iki tık
// 🟢 VE AÇILMA TEK BAŞINA BİR İHLALİ KAPATTI: 392 devlet renginin suya
//    en yakını `novgorod` (#84c9cf) idi, ΔE 14,5. Su açılınca 16,6'ya
//    çıktı ve ΔE<15 kovasında ihlal 1 → 0 oldu.
//    ⇒ Emre'nin iki isteği (suyu aç · suya yakın tonları yasakla) aynı
//      yöne çekiyormuş; birincisi ikincisinin işini kolaylaştırdı.
// Yasak eşiği `arac/renkler.py`de (`SU_ESIK_DE`) — orada gerekçesiyle.
var SU_RENGI = "#bcd6e6";
var harita = new maplibregl.Map({
  container: "harita",
  style: {
    version: 8,
    sources: {
      altlik: {
        type: "raster",
        tiles: ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}"],
        tileSize: 256,
        maxzoom: 8,
        // ⚠️ Bu satır 31 Temmuz'a kadar YANLIŞTI: kullanmadığımız
        // `historical-basemaps`e atıf veriyor, kullandığımız Natural Earth'e
        // vermiyordu. Motorun nehir/dağ/göl/kara vektörlerinin tamamı NE'den
        // geliyor (`veri-kaynak/`). Kaynak değişirse BURASI da değişmeli.
        attribution: "Altlık: Esri World Physical Map | Coğrafya verisi: Natural Earth (kamu malı) | Tarihî sınırlar: bu projenin kendi verisi"
      }
    },
    layers: [
      { id: "zemin", type: "background", paint: { "background-color": SU_RENGI } },
      { id: "altlik", type: "raster", source: "altlik" }
    ]
  },
  center: [30, 40],
  zoom: 5.5,
  minZoom: 2.5,
  maxZoom: 8,
  attributionControl: { compact: true }
});
harita.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-left");

var haritaHazir = false;

// ---------------------------------------------------------------------------
// ALTLIK KATMANLARI — kullanıcı kararı (31 Temmuz): kademeli geçiş
//   1. Esri altlığı şimdilik kalır
//   2. Üstüne bizim vektör katmanımız AÇILIR-KAPANIR eklenir   ← BURADAYIZ
//   3. Katman yeterince iyi görününce Esri kaldırılır
// Şartname: oturumlar/COGRAFYA-HATLAR.md · üretici: arac/uret_altlik.py
//
// 🔴 İKİ GRUP, VE AYRIM İŞİN ÖZÜ:
//   Grup A (kara·gol·nehir·dag_alan)  → gerçek coğrafya, Kademe 3'te ALTLIK olur
//   Grup B (nehir_motorun·sirt_motorun) → motorun FİİLEN yasladığı hedefler
// Aradaki fark bir kusur değil, TEŞHİS ARACIDIR: `nehir` 329 parça çizer,
// `nehir_motorun` 41. Farkı görmek, kırık ad eşleştirmesini gözle bulmaktır —
// Dicle'nin bir parçası yaslanıyor, bitişik parçası yaslanmıyor.
// `sirt_motorun` KAPALI HALKA: dağın etrafı, sırtı değil. `dag_alan` ile üst
// üste bakılınca "sınır dağın tepesinden geçmeli" kuralının neden henüz
// karşılanmadığı görünür.
// ⇒ Bu yüzden iki grup AYRI AYRI açılıp kapanır; birlikte açılırsa fark kaybolur.
var ALTLIK_KATMAN = {
  // Grup A — rasterin ALTINDA: altlığın yerine geçecek olan
  a: [
    { id: "g-kara", tip: "fill", kaynak: "kara",
      boya: { "fill-color": "#e8dfc8", "fill-opacity": 1 } },
    { id: "g-gol", tip: "fill", kaynak: "gol",
      boya: { "fill-color": SU_RENGI, "fill-opacity": 1 } },
    { id: "g-dag", tip: "fill", kaynak: "dag_alan", minzoom: 3.5,
      boya: { "fill-color": "#6d5636", "fill-opacity": 0.15 } },
    { id: "g-nehir", tip: "line", kaynak: "nehir", minzoom: 3.5,
      boya: { "line-color": "#4a86b8", "line-width": 0.6, "line-opacity": 0.75 } }
  ],
  // Grup B — rasterin ÜSTÜNDE: raster açıkken de görünmeli, çünkü işi
  // "fotoğraf ile motorun hattı uyuşuyor mu" sorusunu cevaplamak.
  // ⚠️ İKİSİ DE KESİKLİ. Bugünkü sınır katmanlarının hiçbiri kesikli değil;
  // desen tek başına ayırt edici olur ve renk körlüğünden etkilenmez.
  // Kullanıcı "bu bir devlet sınırı mı yoksa nehir mi" diye sormamalı.
  b: [
    { id: "g-nehir-motor", tip: "line", kaynak: "nehir_motorun", minzoom: 4.5,
      boya: { "line-color": "#00bcd4", "line-width": 1.5,
              "line-dasharray": [3, 2], "line-opacity": 0.95 } },
    { id: "g-sirt-motor", tip: "line", kaynak: "sirt_motorun", minzoom: 4.5,
      boya: { "line-color": "#e65100", "line-width": 1.5,
              "line-dasharray": [2, 2], "line-opacity": 0.9 } }
  ]
};

function altlikKur() {
  if (!window.ALTLIK) return;
  ["a", "b"].forEach(function (grup) {
    ALTLIK_KATMAN[grup].forEach(function (k) {
      if (!window.ALTLIK[k.kaynak]) return;
      // 🔴 `data/altlik.js` 5,3 MB (Natural Earth kara·göl·nehir·dağ) ve bu
      // kaynaklar KATMANLARI GİZLİ olsa da açılışta ekleniyor. Aynı
      // `maxzoom`/`buffer` sınırı burada da geçerli: atlasın yakınlık tavanı
      // ~8, zoom 18'e kadar döşeme piramidi kurmanın karşılığı YOK.
      // ⚠️ Ölçülmedi — uçuş bloğunun bu kaynaktan geldiğine dair kanıt YOK
      // (gizli katmanlar döşeme üretmemeli). Bedava sigorta olarak konuyor;
      // kazanç çıkarsa açılış süresinde çıkar.
      harita.addSource(k.id, { type: "geojson", maxzoom: 9, buffer: 32,
                               tolerance: 0.5,
                               data: window.ALTLIK[k.kaynak] });
      var kat = { id: k.id, type: k.tip, source: k.id, paint: k.boya,
                  layout: { visibility: "none" } };
      if (k.minzoom) kat.minzoom = k.minzoom;
      // Grup A rasterin ALTINA girer (yerine geçecek), Grup B ÜSTÜNE.
      // MapLibre'de "altlik"tan önce eklenen katman onun altında kalır.
      harita.addLayer(kat, grup === "a" ? "altlik" : undefined);
    });
  });
}

// Varsayılan KAPALI: bu bir hata ayıklama katmanı, atlasın kendisi değil.
//
// ⚠️ Grup A rasterin ALTINDA olduğu için raster açıkken görünmez — bu doğru
// katman sırası ama tek başına toggle'ı işlevsiz bırakır. O yüzden Grup A
// açılınca RASTER KAPANIR: kullanıcı Kademe 3'ün nasıl görüneceğini bugünden
// görür, ve şartnamedeki geçme ölçütü ("Esri kapatılınca harita hâlâ okunabilir
// mi") tek tıkla sınanabilir hâle gelir.
// ---------- VERİ SINIRI — "burası neden boş" sorusunun ekrandaki cevabı ----
// 🔴 Kullanıcı bugün BEŞ KEZ *"burası neden boş"* diye sordu (İran'ın doğusu,
// Orta Asya, İsveç'in kuzeyi…) ve beşinde de biz kazıp cevabı bulduk. Ölçüldü:
//   Tahran 51,4°D · Meşhed 59,6°D        → İÇERİDE
//   Buhara 64,4°D · Semerkant 66,9°D     → DIŞARIDA (lon > 62)
//   Stokholm 59,3°K                      → İÇERİDE
//   Kiruna 67,9°K · Tromsø 69,6°K        → DIŞARIDA (lat > 62)
// Yani beş ayrı şikâyet TEK BİR ŞEY: üretim penceresinin iki kenarı.
// ⇒ Kenar çizili olsaydı kullanıcı kendisi görürdü ve sormazdı.
// 📌 `§48`'in uygulaması: açıklayamadığında hipotez değil GÖRÜNÜRLÜK inşa et.
//
// ⚠️ DÖRDÜNCÜ DESEN GEREKİYOR — mevcut hatların hiçbirine benzememeli:
//   devlet sınırı düz · `bolge-cizgi` kesikli · `serbest` bulanık hâle ·
//   Grup B kesikli (camgöbeği/turuncu)
// En güçlü ayırt edici desen değil BİÇİM: bu bir DİKDÖRTGEN. Ne siyasî ne
// tabiî hiçbir sınır tam dikdörtgen değildir; kullanıcı "bu bir devlet sınırı
// mı" diye soramaz. Desen yine de ayrı: uzun çizgi + nokta (dash-dot).
// 🔴 2 Agustos 2026 — ARTIK MOTORDAN OKUNUYOR, ELLE KOPYA DEGIL.
// uret_petek.py donemler.js'e `window.VERI_SINIRI` yaziyor (BOLGE.bounds'tan
// turetilerek). Asagidaki dizi yalniz YEDEK: donemler.js yuklenmemisse.
// ⚠️ VE BU SATIR BIR KUSURU KAPATIYOR: ust duzey `var` window'a yazar ve
// app.js donemler.js'ten SONRA yukleniyor -- yani eski hali motorun yazdigi
// dogru degeri EZIYORDU. Kutu 62'den 146'ya acildi, "Veri siniri" dugmesi
// ESKI dikdortgeni cizmeye devam ediyordu (tarayicida olculdu).
var VERI_SINIRI = window.VERI_SINIRI || [-12, 1.5, 62, 62];
// 🔴 SABİT İKİ YERDE DURUYOR ve bu bilinçli bir istisna: Python sabitini
// tarayıcıya okutamıyorum. Sessiz bayatlamayı önlemek için ÇALIŞMA ANINDA
// doğrulanıyor — `altlik.js`'in kara katmanı aynı kutuyla kesilmiş olmalı.
// Ölçüldü: kara lon -12,0..62,0 · lat 1,5..62,0, yani birebir uyuyor.
// Biri `BOLGE`'yi açar da burayı unutursa konsol söyler; §35'in yapabildiğim
// en iyi hâli — çıktıyı paylaşamıyorum, ama uyuşmazlığı GÖRÜNÜR kılabiliyorum.
function veriSiniriDogrula() {
  var k = window.ALTLIK && window.ALTLIK.kara;
  if (!k || !k.features || !k.features.length) return;
  var W = 1e9, S = 1e9, E = -1e9, N = -1e9;
  (function gez(c) {
    if (typeof c[0] === "number") {
      if (c[0] < W) W = c[0]; if (c[0] > E) E = c[0];
      if (c[1] < S) S = c[1]; if (c[1] > N) N = c[1];
    } else { for (var i = 0; i < c.length; i++) gez(c[i]); }
  })(k.features.map(function (f) { return f.geometry.coordinates; }));
  var v = VERI_SINIRI, tol = 0.25;
  if (Math.abs(W - v[0]) > tol || Math.abs(S - v[1]) > tol ||
      Math.abs(E - v[2]) > tol || Math.abs(N - v[3]) > tol) {
    console.warn("Atlas: VERI_SINIRI (" + v.join(",") + ") altlık kutusuyla " +
                 "uyuşmuyor (" + [W, S, E, N].map(function (x) { return x.toFixed(1); }) +
                 "). uret_petek.py'deki BOLGE değişmiş olabilir — js/app.js güncellenmeli.");
  }
}
function veriSiniriKur() {
  var v = VERI_SINIRI;
  harita.addSource("veri-siniri", { type: "geojson", data: {
    type: "FeatureCollection", features: [{ type: "Feature", properties: {},
      geometry: { type: "LineString", coordinates: [
        [v[0], v[1]], [v[2], v[1]], [v[2], v[3]], [v[0], v[3]], [v[0], v[1]]] } }] } });
  harita.addLayer({ id: "veri-siniri-cizgi", type: "line", source: "veri-siniri",
    layout: { visibility: "none", "line-cap": "round" },
    paint: { "line-color": "#5b6b7a", "line-width": 2,
             "line-dasharray": [6, 2, 0.5, 2], "line-opacity": 0.75 } });
  veriSiniriDogrula();
}

function altlikGoster(grup, acik) {
  ALTLIK_KATMAN[grup].forEach(function (k) {
    if (harita.getLayer(k.id))
      harita.setLayoutProperty(k.id, "visibility", acik ? "visible" : "none");
  });
  if (grup === "a" && harita.getLayer("altlik"))
    harita.setLayoutProperty("altlik", "visibility", acik ? "none" : "visible");
}

harita.on("load", function () {
  altlikKur();
  veriSiniriKur();

  // Yabancı devletler: Osmanlı katmanlarının ALTINA çizilir
  // ═════════════════════════════════════════════════════════════════════
  // 🔴🔴 GEOJSON KAYNAK AYARLARI — ÖLÇÜLMÜŞ BİR DARBOĞAZIN ÇARESİ
  //
  // Emre'nin ekranından gelen ölçüm (22 Ağustos 2026, dördüncü tur):
  //     eğik — 7/220 kare · 2 fps · en uzun boşluk 1132 ms
  //     ÇİZİM (uçuştan önce): 231 ms · sehirGuncelle 150 ms
  //     UZUN GÖREV: tek blok 1144 ms · TOPLAM 9303 ms
  //
  // 3,6 saniyelik uçuşta 9,3 SANİYELİK uzun görev — ana iş parçacığı doymuş.
  // Ve ayrım kesin: BİZİM en ağır işlevimiz 150 ms, blok 1144 ms.
  // ⇒ Suçlu bizim JS'imiz DEĞİL, MapLibre'nin kaynak işlemesi.
  //
  // SEBEP: hiçbir `geojson` kaynağında `maxzoom` verilmemişti ⇒ MapLibre
  // varsayılanı **18** kullanıyor ve zoom 18'e kadar döşeme piramidi kuruyor.
  // Bu atlasın EN YAKIN görünümü bir sancak ölçeği (~zoom 8); 9-18 arası
  // döşemeler HİÇ GÖRÜNMÜYOR ama üretiliyor.
  // `buffer` varsayılanı da 128 px — ülke poligonu için gereksiz geniş.
  //
  // ⚠️ RİSK VE SINIRI: `maxzoom` aşıldığında MapLibre son seviyeyi BÜYÜTEREK
  // gösterir. 9'un üstünde sınır çizgileri bir tık kabalaşabilir. Atlasın
  // yakınlık tavanı zaten 8 olduğu için pratikte görünmemeli — ama bu
  // ÖLÇÜLMEDİ, gözle doğrulanacak. Kabalaşma görülürse `maxzoom` 10-11'e
  // çekilir; kazancın çoğu yine kalır (18 → 11 bile piramidin yarısıdır).
  //
  // 📌 Ve bu, dört turdur aradığım şeyin İLK KEZ ölçümle gösterilen hâli.
  // Önceki üç turda kendi kodumda hata aradım; ölçüm beni kütüphanenin
  // kaynak ayarlarına götürdü — oraya kendi başıma bakmazdım.
  var AGIR_GEOJSON = { type: "geojson", maxzoom: 9, buffer: 32,
                       tolerance: 0.5, data: null };
  function agirKaynak() {
    return { type: "geojson", maxzoom: AGIR_GEOJSON.maxzoom,
             buffer: AGIR_GEOJSON.buffer, tolerance: AGIR_GEOJSON.tolerance,
             data: bosVeri() };
  }

  harita.addSource("devlet", agirKaynak());
  harita.addLayer({ id: "devlet-dolgu", type: "fill", source: "devlet",
    paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.44 } });
  harita.addLayer({ id: "devlet-cizgi", type: "line", source: "devlet",
    paint: { "line-color": ["get", "renk"], "line-width": 1.5, "line-opacity": 0.85 } });
  // 🔴 21 Ağustos — KUSUR ③, Emre (ekran görüntüsü): "odaklanan ülke belirgin
  // bir renk ile boyanmalı — bu Osmanlı kırmızısı olabilir." AYNI `devlet`
  // kaynağından, AYNI feature'lar üzerinden — yalnız `["get","id"]` ODAK'ın
  // `harita`/`id` alanına eşit olanı süzüyor (odakKur() `vurguGuncelle()`
  // ile filtreyi her odak değişiminde günceller). Dolgunun ÜSTÜNE değil
  // `devlet-cizgi`nin ÜSTÜNE çiziliyor ki ülkenin KENDİ rengi (dolgu)
  // kaybolmasın — yalnız SINIRI Osmanlı kırmızısıyla kalınlaşıp belirginleşir.
  // Varsayılan filtre HİÇBİR ŞEYLE eşleşmez (`__yok__`) — filtre boş
  // bırakılsaydı MapLibre TÜM yabancı devletleri kırmızı çizerdi.
  harita.addLayer({ id: "devlet-odak-vurgu", type: "line", source: "devlet",
    filter: ["==", ["get", "id"], "__yok__"],
    paint: { "line-color": "#8e0b22", "line-width": 3.5, "line-opacity": 0.95 } });

  // ⚠️ GENEL KURAL (kullanıcı, hatalar 10.docx madde 1):
  //   "Osmanlı devletinin sınırlarını kalın kırmızı bir çizgi ile belirleyelim,
  //    vassal olan daha açık kırmızı olan devletleri de içine alan bir tık daha
  //    kalın kırmızı çizgi ile — hem vassal devletleri görmüş oluruz hem
  //    vassalların ayrı devlet olduğu algısını yıkmış oluruz."
  //
  // Bu tek karar hatalar 10'un 1, 2, 3 ve hatalar 11'in 21, 29, 31. maddelerini
  // birden kapatıyor. Hepsinde aynı şikâyet vardı: Kırım'ın yarısı kırmızı
  // yarısı pembe, Hotin Boğdan'ın içinde kırmızı, Romanya "bağlı mı değil mi"
  // belirsiz. Sebep, tâbi toprağın AYRI BİR DEVLET gibi çizilmesiydi.
  //
  // NASIL: gerçek birleşim (union) tarayıcıda hesaplanamaz — geometri kütüphanesi
  // yok. Bunun yerine HALE tekniği: Osmanlı ve tâbi gövdeleri tek kaynakta
  // toplanıp KALIN bir çizgiyle DOLGULARIN ALTINA çiziliyor. Dolgular üstünü
  // örtünce dışarıda kalan kısım bir dış çerçeve gibi görünür; iç sınırlar
  // dolgunun altında kaldığı için silinir. Union'ın görsel karşılığı budur ve
  // 442 dönem için ek geometri üretmeye gerek kalmaz.
  harita.addSource("imparatorluk", agirKaynak());
  harita.addLayer({ id: "imparatorluk-hale", type: "line", source: "imparatorluk",
    layout: { "line-cap": "round", "line-join": "round" },
    // Kalınlık 7 → 3.5 (kullanıcı: "yarı yarıya inceltelim"). Hale dolgunun
    // ALTINDA çizildiği için görünen kısım kalınlığın yarısı; yani ekranda
    // okunan çizgi 3.5 değil ~1.75 px. Sıfıra yaklaşırken kaybolmaması için
    // opaklık 0.95'te bırakıldı.
    paint: { "line-color": "#6d0d1c", "line-width": 3.5, "line-opacity": 0.95 } });

  harita.addSource("vassal", agirKaynak());
  // ⚠️ Renk yakınlaştırıldı (kullanıcı: "vassal devletlerin kırmızısı sadece bir
  // ton açık renk olmalı, burada kırmızı ve pembe olacak şekilde fark büyük,
  // ayrı devlet gibi görünüyorlar"). Eski: #d4707d @0.52 — Osmanlı #8e0b22
  // @0.68'e karşı hem ton hem doygunluk atlıyordu. Yeni ton aynı aileden.
  harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
    paint: { "fill-color": "#b2384a", "fill-opacity": 0.60 } });
  // Kesikli çizgi KALDIRILDI: "ayrı devlet" algısını en çok o üretiyordu.
  // Tâbi toprağın dış hattı artık imparatorluk halesinden geliyor.

  harita.addSource("osmanli", agirKaynak());
  harita.addLayer({ id: "osmanli-dolgu", type: "fill", source: "osmanli",
    paint: { "fill-color": "#8e0b22", "fill-opacity": 0.68 } });
  // Petek modunda iç çizgiler görünmesin diye çizgi katmanı yok; dolgu kendi
  // dış hattını fill-outline ile verir (aynı renk komşu petekte kaybolur).
  harita.addLayer({ id: "osmanli-cizgi", type: "line", source: "osmanli",
    paint: { "line-color": "#4d0713", "line-width": 1.8 } });

  // SERBEST KENAR — sahipsiz alanla komşu sınır: keskin çizgi yerine SÖNEN kenar.
  // Ölçüt kullanıcının cümlesinden: oraya bakınca "burada sınır yok" anlaşılmalı,
  // "şu sınır var" değil. Bu yüzden ayrı bir çizgi rengi YOK — dolgunun kendi
  // tonu, geniş ve bulanık, dışa doğru sönüyor.
  // İki katman üst üste: geniş+çok bulanık (hâle) + dar+az bulanık (çekirdek).
  // Tek katmanla ya çok siliktir ya da kenarı yine çizgi gibi okunur.
  // ⚠️ osmanli-cizgi'den SONRA ekleniyor ki sert kenarın üstünü örtsün.
  // ⚠️ KALINLIK ZOOM'A BAĞLI — ve sebebi kavramsal (Oturum 16'nın tespiti):
  // Bu bulanıklık bir GÖRSEL EFEKT değil, bir BELİRSİZLİK ÖLÇÜSÜ. Anlattığı şey
  // "yetkinin nerede bittiğini bilmiyoruz" ve o bilinmezlik KİLOMETREYLE ölçülür,
  // pikselle değil: çölde dolgu noktasını 100 km sağa koysak sınır 50 km kayardı.
  // Sabit piksel bunun TERSİNİ yapardı — uzaklaşınca hale daha çok YER kaplar
  // (belirsizlik büyümüş gibi), yaklaşınca daralır (kesinleşmiş gibi).
  // Bu yüzden genişlik her zoom kademesinde ikiye katlanıyor: hale SABİT BİR YER
  // GENİŞLİĞİNE karşılık geliyor, sabit bir piksel sayısına değil.
  // Çıpa: z4'te 14 px ≈ 60 km (30° enlemde). GEÇİCİ — Oturum 16 üretim sonrası
  // serbest kenar boyunca yerel nokta aralığının medyanını ölçecek ve "hale =
  // medyan aralığın yarısı" diye savunulabilir bir sayı verecek.
  // Kalınlık artık SABİT ÇIPA değil, VERİ: her hat kendi belirsizliğini taşıyor.
  // px/km dönüşümü Web Mercator'dan: 1 px = 78,27·cos(φ)/2^z km. 30° enlemde
  // payda ≈ 67,8. Yani genişlik_px = u_km × 2^zoom / 67,8 — zoom'a bağlılık
  // korunuyor (hale sabit YER genişliği), ama artık her yerde aynı yer genişliği
  // değil, o kenarın KENDİ belirsizliği kadar.
  //
  // 🔴 BU İKİ KATMAN 31 TEMMUZ'A KADAR HİÇ EKLENMİYORDU — düzeltildi.
  // Eski hâli şuydu ve `addLayer` fırlatıyordu:
  //     var PX_KM = ["/", ["^", 2, ["zoom"]], 67.8];
  //     var YER_GENISLIK = ["*", U, PX_KM];
  // MapLibre hatası: *"`zoom` expression may only be used as input to a
  // top-level `step` or `interpolate` expression"*. `["zoom"]` burada üç kat
  // gömülüydü (`*` içinde `/` içinde `^`), katman eklenmiyordu ve **sönen
  // kenar gösterimi hiç çizilmiyordu.** Yorumlar mekanizmayı uzun uzun
  // anlatıyordu; anlatılan şey ekranda yoktu. (`isg:` örtüsüyle aynı sınıf:
  // yazılmış görünüyor, çalışmıyor.)
  //
  // ⚠️ DÖNÜŞÜM YAKLAŞIK DEĞİL, BİREBİR. Taban-2 `exponential` interpolate'in
  // ara değer formülü  t = (2^(z−z₀) − 1)/(2^(z₁−z₀) − 1)  olduğu için, iki
  // durağa da u·2^z/67,8 eğrisinin kendi değerini koyduğumuzda sadeleşiyor:
  //     v₀ + t·(v₁ − v₀) = u·2^z⁰/67,8 · (1 + 2^(z−z₀) − 1) = u·2^z/67,8
  // Yani eski eğri KORUNUYOR — iki durak seçimi eğriyi değiştirmiyor, bu
  // özdeşlik her (z₀, z₁) çifti için geçerli. Duraklar haritanın gerçek zoom
  // aralığını (minZoom 2,5 · maxZoom 8) kuşatacak şekilde 2 ve 9 seçildi ki
  // uçlarda kırpma olmasın.
  // `["zoom"]` artık interpolate'in DOĞRUDAN girdisi; veriye bağlı `u` ise
  // durak DEĞERLERİNDE kalıyor — MapLibre ikisinin bu şekilde bir arada
  // kullanılmasına izin veriyor (zoom-ve-özellik fonksiyonu).
  // 🔴 ÜÇGEN/OK UCU DÜZELTMESİ (20 Ağustos 2026, KOORDİNATÖR görevi —
  // "ÜÇGEN OK DÜZELTME"; teşhis: denetim/BULGULAR-UCGEN-19AGU.md).
  // Yukarıdaki formül ÜST SINIRSIZDI: çölde u 270 km'ye çıkıyor, bu z7-z8'de
  // 400-1000 px'lik bulanık bant demekti; hattın kendi segmentleri çoğu yerde
  // 0,1-3 km olduğu için köşelerde genişlik/segment oranı 71-1056× çıkıyor ve
  // her keskin köşede dışarı fırlayan "üçgen/ok ucu" lobu doğuyordu (rapor §5.5).
  //
  // İKİ ÇARE tasarlanıp ÖLÇÜLDÜ (kayıtlar `denetim/` altında değil, bu görevin
  // tahta raporunda — ölçüm bu dosyanın Node ile okunmasıyla yapıldı, tarayıcı
  // bu oturuma açılamıyor):
  //   A) DÜZ PİKSEL TAVANI (["min", eğri, TAVAN]) — z5'te sınırlı (%15-30
  //      bağlanıyor), z7'de ağır (%81-92 bağlanıyor, TAVAN 64-96 px arası).
  //      Rapordaki 15 örnek hat 99-350 px'ten 80 px'e (%35-77 küçülme) iniyor.
  //   B) HATTIN KENDİ SEGMENT UZUNLUĞUNA GÖRE TAVAN (u_eff = min(u, K×segment))
  //      — K1-K5 kutularındaki en kötü segmentleri (0,1-3 km) 100-580× oranından
  //      K'ya (ör. 8×) düşürüyor, AMA havuzun TAMAMINDA (8884 segmentin
  //      %70,5'i, K=8) etkili oluyor: `u` (tohum-arası/2, KABA ölçek) ile
  //      polyline segmenti (sınır ayrıntısı, İNCE ölçek — medyan 5,96 km)
  //      TASARIM GEREĞİ farklı büyüklük mertebesinde; segment-bazlı tavan
  //      hâlenin VAR OLUŞ SEBEBİNİ (u farkını göstermek) yalnız K1-K5'te değil
  //      NEREDEYSE HER YERDE söndürüyor. ⇒ B'nin bedelsiz hâli YOK.
  // ⇒ SEÇİLEN: A, piksel tavanının sildiği bilgi TERS OPAKLIKLA telafi
  // ediliyor (geniş belirsizlik = daha SOLUK, artık sınırsız KALIN değil).
  // ⚠️ AÇIKÇA YAZIYORUM: A, K1-K5'teki mutlak taşmayı ve z7-z8 piksel
  // patlamasını ölçülebilir şekilde küçültüyor (350 px → 80 px gibi), ama
  // segment/köşe düzeyindeki asıl oransızlığı (0,1 km'lik bir segmentin 80 px
  // çizilmesi) TAM ÇÖZMÜYOR — o çözüm `arac/uret_petek.py` tarafında geometri
  // sadeleştirmesi (linemerge) gerektiriyor ve bu oturumun dosyası DEĞİL
  // (rapor §İKİNCİL zaten bunu öneriyor). Bu bir eksik değil, ölçülmüş bir
  // sınır — sonraki adres oraya yazıldı.
  var U = ["coalesce", ["get", "u"], 60];          // veri yoksa 60 km varsayılan
  var Z0 = 2, Z1 = 9;
  var TAVAN_PX = 80;                                // hâle (k=1) piksel tavanı — ölçüldü, yukarıdaki not
  function yerOlcek(k) {                            // k: hâle/çekirdek çarpanı
    var egri = ["interpolate", ["exponential", 2], ["zoom"],
                Z0, ["*", U, k * Math.pow(2, Z0) / 67.8],
                Z1, ["*", U, k * Math.pow(2, Z1) / 67.8]];
    return ["min", egri, TAVAN_PX * k];
  }
  var YER_GENISLIK = yerOlcek(1);
  var YER_BULANIK  = yerOlcek(0.85);
  var YER_CEKIRDEK = yerOlcek(0.35);
  var YER_CBULANIK = yerOlcek(0.28);
  // Tavanın sıkıştırdığı bilgi opaklığa taşınıyor — ölçülmüş çeyrekliklere
  // oturuyor: Q1 (55,9 km, "tipik" hat) eski değerinde kalıyor, MAX (273,8 km,
  // en belirsiz hat) en soluk uca iniyor. Aradaki hatlar doğrusal geçiyor.
  var YER_OPAKLIK  = ["interpolate", ["linear"], U, 56, 0.45, 274, 0.18];
  var YER_COPAKLIK = ["interpolate", ["linear"], U, 56, 0.50, 274, 0.20];
  harita.addSource("serbest", agirKaynak());
  harita.addLayer({ id: "serbest-hale", type: "line", source: "serbest",
    // line-join "round" → "bevel": round join keskin köşede yarıçapı
    // width/2 olan bir yay çıkıntısı bırakıyor (genişlik yüzlerce px'ken bu
    // yay tek başına bir "lob"tur); bevel köşeyi segmentlerin ZARFI dışına
    // HİÇ taşırmıyor. Ek maliyeti yok, ölçülmemiş ama tek yönlü güvenli.
    layout: { "line-cap": "round", "line-join": "bevel" },
    paint: { "line-color": "#8e0b22", "line-width": YER_GENISLIK,
             "line-blur": YER_BULANIK, "line-opacity": YER_OPAKLIK } });
  harita.addLayer({ id: "serbest-cekirdek", type: "line", source: "serbest",
    layout: { "line-cap": "round", "line-join": "bevel" },
    paint: { "line-color": "#8e0b22", "line-width": YER_CEKIRDEK,
             "line-blur": YER_CBULANIK, "line-opacity": YER_COPAKLIK } });

  // Bölge (eyalet) iç sınırları: ince kesikli çizgi, yakınlaşınca görünür
  harita.addSource("bolge", agirKaynak());
  harita.addLayer({ id: "bolge-cizgi", type: "line", source: "bolge", minzoom: 5.2,
    paint: { "line-color": "#5a3a24", "line-width": 0.9, "line-opacity": 0.5,
             "line-dasharray": [2, 3] } });
  // Görünmez tıklama hedefi: bolge-cizgi yalnız ÇİZGİ, gövdenin içine
  // tıklanınca hiçbir şey yakalanmazdı. opacity:0 bir fill katmanı,
  // MapLibre'de görünürlükten bağımsız olarak sorgulanabilir/tıklanabilir.
  harita.addLayer({ id: "bolge-dolgu-hit", type: "fill", source: "bolge", minzoom: 5.2,
    paint: { "fill-opacity": 0 } });

  // p2/H-0024 — kullanıcı: "eyalet merkezine tıklanınca kapsadığı alan kısa
  // bir an parlasın ve sönsün; basılı tutulursa parlak vaziyette kalsın ve
  // üstünde adı yazan bir metin görünsün."
  // 🔴 GÖREV TANIMI AÇIKÇA SINIRLADI: eyalet/sancak AYRIMI veriye henüz
  // işlenmedi (k:1 yalnız 4 noktada var), o yüzden burada YALNIZ parlama
  // mekanizması kuruluyor — ayrı bir "eyalet simgesi" ÇİZİLMİYOR. Tetikleyici
  // bugün için bölgenin KENDİ ALANINA (bolge-dolgu-hit) tıklamak/basılı
  // tutmak; simge veri gelince buraya bağlanacak.
  // Etiket metni bugünkü tek doğru ada dayanıyor (`bolgeler.js` `ad` + aynı
  // " bölgesi" eki BOLGE_EKI'de kullanılan) — "Anadolu Eyaleti" gibi kurum
  // adı UYDURULMADI, çünkü hangi bölgenin eyalet/sancak olduğu bugün bilinmiyor.
  harita.addSource("bolge-parlama", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "bolge-parlama-dolgu", type: "fill", source: "bolge-parlama",
    paint: { "fill-color": "#ffd700", "fill-opacity": 0,
             "fill-opacity-transition": { duration: 250 } } });
  harita.addLayer({ id: "bolge-parlama-cizgi", type: "line", source: "bolge-parlama",
    paint: { "line-color": "#ffd700", "line-width": 2.6, "line-opacity": 0,
             "line-opacity-transition": { duration: 250 } } });

  // ☠️ FETRET ŞEHZADE KATMANI KALDIRILDI (1 Ağustos 2026).
  // `sehzade` kaynağı ve iki katmanı buradaydı. Ölçüldü: `donemler.js`'in
  // 462 döneminin **hiçbirinde** `z` alanı yok (0/462), yani katman hiç
  // çizilmedi. Besleyen üretici `arac/uret_donemler.py` — CLAUDE.md'de zaten
  // "☠️ ESKİ MOTOR, kullanılmıyor" diye işaretli.
  // 🔴 Silme sebebi "kullanılmıyor" değil, ZARAR VERİYOR olması: koordinatör
  // kullanıcının "iki kırmızı bölge" şikâyetini bu katmana bağlayıp YANLIŞ
  // TEŞHİS kurdu. Ölü kod kusur üretmiyor ama teşhisi saptırıyor — sessiz
  // bozuk koddan farklı bir zarar.
  // ⇒ `z` bir gün geri gelirse kod git geçmişinde: bu satırdan önceki commit.

  // ⚠️ Hareket tipolojisi TÜR BAŞINA AYRI KATMAN gerektiriyor: MapLibre'de
  // `line-dasharray` veriyle sürülemeyen bir boya özelliği, yani tek katmanda
  // özellik başına farklı kesik deseni verilemiyor. Dokuz tür → dokuz ince
  // katman; her biri kendi `tur` değerine göre süzülüyor. Renk ve genişlik
  // veriyle sürülebildiği için onlar tek ifadede kalıyor.
  harita.addSource("seferler", agirKaynak());
  Object.keys(HAREKET).forEach(function (tur) {
    var h = HAREKET[tur];
    harita.addLayer({
      id: "sefer-cizgi-" + tur, type: "line", source: "seferler",
      filter: ["==", ["coalesce", ["get", "tur"], "sefer"], tur],
      layout: { "line-cap": "round", "line-join": "round" },
      paint: { "line-color": ["coalesce", ["get", "renk"], "#2b1006"],
               "line-width": h.kalinlik, "line-dasharray": h.desen }
    });
  });

  // ⚠️ GENEL KURAL (kullanıcı, hatalar 8.docx madde 1): "her ülkeye verilen
  // toprakları kırmızı ve diğer ülkenin renginde olacak şekilde ... taralı bir
  // şekilde ... toplam kaybı gösterecek şekilde ... antlaşmalarda bu yöntemi
  // uygulayalım bunu da genel kural yapalım."
  // Veri arac/uret_devirler.py'de üretiliyor; ölçüt (Osmanlı gövdesi @ savaş
  // başı) ∩ (alıcının gövdesi @ antlaşma). Tek günün farkı yetmiyordu çünkü
  // toprak antlaşma gününde değil savaş boyunca gidiyor: Karlofça'da Budin
  // 1686'da, Eğri 1687'de, Varad 1692'de düşmüştü.
  // Tarama deseni çalışma anında canvas'ta çiziliyor — dış dosya yok.
  devirDesenleriKur();
  harita.addSource("devir", agirKaynak());
  harita.addLayer({ id: "devir-dolgu", type: "fill", source: "devir",
    paint: { "fill-pattern": ["get", "desen"], "fill-opacity": 0.85 } });
  harita.addLayer({ id: "devir-cizgi", type: "line", source: "devir",
    paint: { "line-color": ["get", "renk"], "line-width": 1.6 } });

  // ⚠️ ÜÇÜNCÜ GÖSTERİM — İŞGAL (kullanıcı kararı, hatalar 11 sonrası):
  //   "direkt idare, vasallık ve işgal edilmiş ayrı topraklar gösterimi olarak
  //    üç ayrı gösterim olsun."
  // İşgalin devirden YAPISAL farkı var ve ayrı katman olmasının sebebi bu:
  //   devir bir OLAY  — antlaşma günü olur, 60-365 günlük pencerede gösterilir
  //   işgal bir DÖNEM — Bosna 1878-1908, Mısır 1882-1914+ boyunca sürer
  // Devir mantığını kullansaydık Bosna 30 yıl boyunca değil, 1878'de bir kez
  // parlayıp kaybolurdu. Bu yüzden isgalGuncelle pencere değil aralık bakar.
  //
  // Hukukî durum da farklı: işgal edilen yer NOMİNAL OLARAK hâlâ Osmanlı'nın —
  // Berlin'de Bosna Avusturya'ya ilhak edilmedi, "işgal ve idare" edildi; 1908'e
  // kadar padişahın adı hutbede okundu. Tarama tam olarak bunu anlatıyor:
  // altta sahibin rengi, üstünde işgalcinin rengi. İlhak olduğunda tarama biter,
  // alan düz işgalci rengine döner (madde 54: Bosna 1908'de bu geçişi yapmalı).
  isgalDesenleriKur();
  harita.addSource("isgal", agirKaynak());
  harita.addLayer({ id: "isgal-dolgu", type: "fill", source: "isgal",
    paint: { "fill-pattern": ["get", "desen"], "fill-opacity": 0.8 } });
  harita.addLayer({ id: "isgal-cizgi", type: "line", source: "isgal",
    layout: { "line-join": "round" },
    paint: { "line-color": ["get", "renk"], "line-width": 1.4,
             "line-dasharray": [3, 2] } });

  // ---------- BOŞLUĞUN CİNSİ — ARAYÜZ BOŞLUK CİNSİ görevi (15 Ağustos 2026) ----------
  // Emre: "Câlû'nun çevresinde bir devletin ya da devletsiz aşiret yapılarının
  // alanı var ise bunu ayrı bir renk ve işaretleme tekniği ile gösterelim.
  // Çöl ile aynı renkte durmasın."
  // `data/bos_alanlar.js` boşluğun CİNSİNİ zaten taşıyordu (192 kayıt), ama
  // harita hepsini aynı beyaza boyuyordu — Tuareg Amenokal'ının denetlediği
  // Hoggar ile insansız Rub'ul Hâlî ekranda ayırt edilemiyordu.
  //
  // 🔴 CİNS SÖZLÜĞÜ KOPYALANMADI — window.BOS_CINSLER doğrudan okunuyor. Aynı
  // bilgi iki yerde durursa biri güncellenince öteki bayatlar (bu projede
  // ölçülmüş bir kusur sınıfı).
  //   gosterim:"benek" → 34 `kabile` kaydı: yumuşak, KENARSIZ benek/doku.
  //     ⚠️ Keskin kenar ÇİZİLMEDİ — aşiret sahasının sınırı yoktur, mevsimlik
  //     ve geçirgendir; keskin bir çember olmayan bir kesinlik uydururdu.
  //   gosterim:"soru" → 9 `veri-yok` kaydı: soluk gri + "?" — "boş" ile
  //     "bilmiyoruz" AYNI ŞEY DEĞİL, bu ayrımın özü bu.
  //   gosterim:"bos" → `devletsiz`/`insansiz`/`hata` (149 kayıt) — ÇİZİLMEZ,
  //     bugünkü davranış DEĞİŞMEDİ (şartnamenin ⑤ maddesi).
  //
  // ⚠️ `yaricap_km` hepsinde null — KASITLI, kaynaksız yarıçap uydurulmadı.
  // Bu yüzden ALAN değil İŞARET çiziliyor: sabit piksel boyutlu bir benek,
  // coğrafi km² karşılığı YOK. Kaynaklı yarıçap geldikçe alan çizimine
  // geçilecek (şartnamenin ③② maddesi).
  //
  // ⚠️ ZAMAN BOYUTU YOK — kayıtlar zamansız, her tarihte AYNI çiziliyor. Kel
  // Ahaggar konfederasyonu ~1750'den itibaren teşkilatlı; 1281'de aynı yapı
  // yoktu. Bugünlük kabul edilebilir (bugünkü hâl zaten öyle) ama bu bir
  // ANAKRONİZMDİR — bir sonraki oturum bunu kusur diye yeniden keşfetmesin
  // diye buraya yazıldı (aynı not oturumlar/ARAYUZ-BOSLUK-ILERLEME.md'de de
  // var, şartnamenin ③③ maddesi).
  (function boslukKur() {
    var kayitlar = window.BOS_ALANLAR || [];
    var cinsler = window.BOS_CINSLER || {};
    if (!kayitlar.length) return;
    var boslukPopup = new maplibregl.Popup({ closeButton: true, closeOnClick: true, maxWidth: "300px", className: "bosluk-popup" });
    var kacBenek = 0, kacSoru = 0, kacHalka = 0;
    kayitlar.forEach(function (k) {
      var c = cinsler[k.cins];
      var gosterim = c && c.gosterim;
      // "halka" — 20 Ağustos 2026, Emre: *"yerli aşiretler filan ya da
      // DEVLETSİZ ŞEHİRLER var ise bunları haritada göstermek lâzım."*
      // Üçüncü glif: `devletsiz-yerlesim` cinsi (92 kayıt — Riyad · Hâil ·
      // Manama · Doha · Abu Dabi · Vladivostok · Taos Pueblo…). Boyanmayan
      // ama YERLEŞİMİ OLAN yerler. `benek`ten (aşiret) ve `soru`dan
      // (veri-yok) ayrı bir glif, çünkü ÜÇÜ ÜÇ AYRI ŞEY söylüyor:
      //   benek  "aşiret denetimi var, sınırı geçirgen"
      //   soru   "kaynak susuyor, BİLMİYORUZ"
      //   halka  "yerleşim var, devlete bağlı değil, hakkı saklı"
      if (gosterim !== "benek" && gosterim !== "soru" && gosterim !== "halka")
        return;                                        // "bos" -> hiç çizilmez
      // 🔴 21 Ağustos — Emre: "devletsiz şehirlerin isimlerini de şehir
      // devletlerinin yanına yazalım." `halka` glifi bugüne kadar yalnız
      // hover'da (`title`) ad taşıyordu; `.sehir .s-ad` deseniyle AYNI
      // görünürlükte bir isim eklendi — `benek`/`soru` DOKUNULMADI (Emre'nin
      // isteği özellikle "şehirler" diyordu; aşiret sahası ve "bilmiyoruz"
      // noktasının bir ŞEHİR ADI yok, ada yazacak bir şey olmazdı).
      if (gosterim === "halka") {
        var kutu = document.createElement("div");
        kutu.className = "bosluk-kutu";
        kutu.innerHTML = '<span class="bosluk-halka"></span><span class="bosluk-ad"></span>';
        kutu.querySelector(".bosluk-ad").textContent = k.ad;
        kutu.title = k.ad + " — " + (c ? c.ad : k.cins);
        kutu.addEventListener("click", function (e) {
          e.stopPropagation();
          var metin = (k.neden && k.neden.trim()) ? k.neden : (c ? c.aciklama : "");
          var govde = "<b>" + k.ad + "</b><br><i>" + (c ? c.ad : k.cins) + "</i>" +
            "<p>" + metin.replace(/</g, "&lt;") + "</p>";
          boslukPopup.setLngLat([k.lon, k.lat]).setHTML(govde).addTo(harita);
        });
        // `.sehir` düğümleriyle AYNI çapa/ofset — nokta solda, ad sağında,
        // haritadaki bütün yerleşim etiketleri tek bir hizalama dilinde.
        new maplibregl.Marker({ element: kutu, anchor: "left", offset: [-5, 0] })
          .setLngLat([k.lon, k.lat]).addTo(harita);
        kacHalka++;
        return;
      }
      var el = document.createElement("div");
      el.className = gosterim === "benek" ? "bosluk-benek" : "bosluk-soru";
      el.title = k.ad + " — " + (c ? c.ad : k.cins);
      el.addEventListener("click", function (e) {
        e.stopPropagation();
        var metin = (k.neden && k.neden.trim()) ? k.neden : (c ? c.aciklama : "");
        var govde = "<b>" + k.ad + "</b><br><i>" + (c ? c.ad : k.cins) + "</i>" +
          "<p>" + metin.replace(/</g, "&lt;") + "</p>";
        boslukPopup.setLngLat([k.lon, k.lat]).setHTML(govde).addTo(harita);
      });
      new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat([k.lon, k.lat]).addTo(harita);
      // 🔴 SAYAÇ DÜZELTİLDİ — eskiden `else kacSoru++` hem "soru" hem
      // "halka"yı TEK kovaya topluyordu (halka o zaman ayrı bir dala
      // düşmüyordu), günlük "N soru (veri-yok)" derken aslında iki ayrı
      // sınıfı toplayıp yanlış etiketle basıyordu.
      if (gosterim === "benek") kacBenek++; else kacSoru++;
    });
    console.log("Atlas: boşluğun cinsi — " + kacBenek + " benek (kabile) · "
                + kacSoru + " soru (veri-yok) · " + kacHalka + " halka (devletsiz yerleşim, adlı) çizildi.");
  })();

  koridorKur();

  var lejant = document.createElement("div");
  lejant.className = "lejant";
  lejant.innerHTML =
    // ⚠️ ÜÇ GÖSTERİM — kullanıcının kararı (hatalar 10 sonrası):
    //   "direkt idare, vasallık ve işgal edilmiş ayrı topraklar gösterimi olarak
    //    üç ayrı gösterim olsun. bağlı topraklarda fazla detaya girmeyelim.
    //    kalın kırmızı çizgi olsun hepsini toplasın. eyalet vasallık özerklik
    //    himaye falan detaya girersek karmaşa yaratabilir."
    // Yani veri şemasında hukukî statü ayrıntısı (sâlyâneli eyalet, ocaklık,
    // voyvodalık, himaye…) AÇILMIYOR — d: ve v: ikilisi korunuyor, ayrım görsel
    // katmanda yapılıyor.
    '<span><i style="background:#8e0b22"></i> Doğrudan idare</span>' +
    '<span><i style="background:#b2384a"></i> Bağlı / tâbi topraklar</span>' +
    // Üçüncü gösterim. Tarama SOLA yatık — antlaşma devirlerinin SAĞA yatık
    // taramasıyla karışmasın diye ayna simetrisi seçildi.
    '<span><i style="background:linear-gradient(-45deg,#8e0b22 0 62%,#555 62% 100%);background-size:8px 8px"></i> İşgal altında (nominal sahibi değişmemiş)</span>' +
    '<span><i style="background:none;border-top:3px solid #6d0d1c;height:0;align-self:center"></i> İmparatorluk sınırı (ikisini birlikte)</span>' +
    // 🔴 SÖNEN KENAR — ÖLÇÜLMÜŞ BİR ŞİKÂYETİ KAPATIYOR.
    // Kullanıcı 1326 ve 1331'de "iki ayrı kırmızı" gördü ve kusur sandı; ayrıca
    // "soluk kırmızı oka benzeyen yapılar" ve "Karadeniz köşesinde yuvarlak
    // hüzme" yazdı. Üçü de bu katman. Ölçüldü (Bitinya kutusu, lon 28,5-31,5 ·
    // lat 39,5-41,5):
    //     1300 → kutuda 0 hat        1326 → 1 hat, u 15,9 km
    //     1331 → 2 hat, u 9,6-19,6   1350 → 2 hat
    // Rengi Osmanlı dolgusunun TAM KENDİ kırmızısı (#8e0b22), %45 opaklık ve
    // bulanık: dolgunun üstüne binince ikinci, açık bir ton olarak okunuyor.
    // Genişlik u·2^z/67,8 — z5'te ~7,5 px.
    // ⇒ Kusur değil, ANLATILMAMIŞ ÖZELLİK. Görünen her yeni şey lejanta
    // girmezse kusur diye rapor ediliyor; bu satır tam onun için.
    '<span><i style="background:linear-gradient(90deg,rgba(142,11,34,.55),rgba(142,11,34,0));' +
    'filter:blur(1px)"></i> Belirsiz sınır — çöl/devletsiz alana açılan kenar</span>' +
    '<span><i style="background:none;border-top:2px dashed #5a3a24;height:0;align-self:center"></i> Bölge sınırı (yakınlaşınca)</span>' +
    '<span><i style="background:linear-gradient(90deg,#8877b8,#4e7d46,#4f7d4f,#b5885b)"></i> Komşu devletler (kendi renkleri)</span>' +
    // ARAYÜZ BOŞLUK CİNSİ — `ad` alanları BOS_CINSLER'den okunuyor, metin
    // burada İKİNCİ KEZ YAZILMIYOR (kopya = bayatlama riski).
    '<div class="lejant-baslik">Boşluğun cinsi</div>' +
    '<span><i class="bosluk-benek-ornek"></i> ' +
      ((window.BOS_CINSLER && window.BOS_CINSLER.kabile) ? window.BOS_CINSLER.kabile.ad : "aşiret / konfederasyon") +
      ' — sınırı yok, benek/doku ile gösterilir</span>' +
    '<span><i class="bosluk-soru-ornek"></i> ' +
      ((window.BOS_CINSLER && window.BOS_CINSLER["veri-yok"]) ? window.BOS_CINSLER["veri-yok"].ad : "veri yok") +
      ' — kaynak SUSUYOR, "boş" değil "bilmiyoruz"</span>' +
    // 🔴 `#alan-goster` BURADAN ÇIKARILDI — zaman çubuğuna taşındı (index.html).
    // Sebebi ölçüldü: bu kutunun bir gizle düğmesi var ve tercih
    // `localStorage`'da SAKLANIYOR (kullanıcı isteğiydi: "her açılışta yeniden
    // kapatmak gerekmesin"). Yani kullanıcı lejantı bir kez kapattıysa alan
    // göstergesi de KALICI OLARAK kapanıyordu.
    // Kullanıcı *"toprak kazandı mı kaybetti mi anlayamıyorum"* diye şikâyet
    // etmişti; çözümü tam da kendi kapatabildiği bir kutuya koymuşuz. Sınavda
    // "lejant dediğin yer neresi" demesinin sebebi terim değil, kutunun
    // görünmüyor olması olabilir.
    // 📌 Kural: kullanıcının şikâyetinin cevabı, kullanıcının kapatabildiği
    // bir yerde duramaz.
    //
    // p2/H-0017 + p2/H-0021 — kullanıcı: "Dimetoka'nın oradaki sembol tam
    // olarak ne anlama geliyor?" / "bu sarı gösterim, sarı semboller tam
    // olarak nedir?" İkisi de NOKTA sembollerini soruyordu ve lejant o güne
    // kadar yalnız toprak renklerini anlatıyordu — nokta sembolleri hiç
    // yoktu. "Sarı gösterim" .tur-kusatma .sv-ikon'un rengi (#b8860b,
    // koyu altın sarısı) — aşağıdaki liste koddan (YONTEM_SIMGE,
    // SAVAS_TUR_SIMGE, .s-fetih renkleri, .s-nokta boyutları) ÖLÇÜLEREK
    // çıkarıldı, tahmin edilmedi.
    '<div class="lejant-baslik">Yerleşim noktaları</div>' +
    '<span><i class="lj-nokta" style="width:7px;height:7px"></i> Küçük yerleşim</span>' +
    '<span><i class="lj-nokta" style="width:9px;height:9px"></i> Orta önemli merkez</span>' +
    '<span><i class="lj-nokta" style="width:12px;height:12px;background:var(--osmanli-kirmizi);border-color:#ffd700"></i> Büyük merkez</span>' +
    '<span><b class="lj-sim">⭐</b> Başkent</span>' +
    '<span><i class="lj-nokta lj-yaklasan" style="width:9px;height:9px"></i> Yaklaşan — 365 gün içinde değişecek yer (soluk, kesikli)</span>' +
    '<div class="lejant-baslik">Fetih sonrası ediniliş simgesi (~1,5 yıl görünür)</div>' +
    '<span><b class="lj-sim">⚔</b> Savaşla alındı</span>' +
    '<span><b class="lj-sim">♜</b> Kuşatmayla alındı</span>' +
    '<span><b class="lj-sim">📜</b> Antlaşmayla alındı</span>' +
    '<span><b class="lj-sim">🤝</b> Tâbiiyetle (itaatle) alındı</span>' +
    '<span><b class="lj-sim">🗝</b> İlhakla alındı</span>' +
    '<span><b class="lj-sim">👑</b> Mirasla alındı</span>' +
    '<span><b class="lj-sim">🏰</b> Kale</span>' +
    // p4/H-0008 — aynı yuva, mülkiyet değişmiyorsa savaş maddesini de gösterir;
    // lejant bu ikinci anlamı açıklamazsa kullanıcı yine "bu ne" diye sorar.
    '<span><b class="lj-sim">⚔</b> Aynı yuva — mülkiyet değişmiyorsa, o an anılan bir savaş/kuşatma/isyan maddesini gösterir</span>' +
    '<div class="lejant-baslik">Fetih tarihi rozeti (şehir adının yanında)</div>' +
    '<span><b class="lj-sim" style="color:#1e5d2a">+</b> Osmanlı’ya katıldı</span>' +
    '<span><b class="lj-sim" style="color:#4a4a4a">−</b> Osmanlı’dan çıktı</span>' +
    '<span><b class="lj-sim" style="color:#6d0d1c">→</b> tâbilik ⇄ doğrudan idare geçişi</span>' +
    '<div class="lejant-baslik">Savaş / olay işaretleri</div>' +
    '<span><b class="lj-sim">⚔</b> Meydan savaşı</span>' +
    '<span><b class="lj-sim" style="color:#b8860b">◎</b> Kuşatma (sarı, nabız gibi atar)</span>' +
    '<span><b class="lj-sim">🔥</b> İç isyan</span>' +
    '<span><b class="lj-sim">⚓</b> Deniz muharebesi</span>' +
    '<span><b class="lj-sim" style="color:#d32f2f">✕</b> Başarısız girişim</span>' +
    '<span><i style="background:#1b5e20"></i> Zafer (ad zemini)</span>' +
    '<span><i style="background:#8c0f26"></i> Yenilgi (ad zemini)</span>' +
    '<span><i style="background:#455a64"></i> Belirsiz sonuç (ad zemini)</span>' +
    '';
  document.getElementById("harita").appendChild(lejant);

  // hatalar 3.docx madde 2 — kullanıcı: "bu ekran gizlenebilir olmalı bir gizle
  // butonu aç butonu ile". Lejant haritanın sağ üstünü kaplıyor ve tam o köşede
  // Kafkasya/Gürcistan ile Ege adaları var; kullanıcı oraya bakmak isteyince
  // lejantı kaldıramıyordu. Tercih localStorage'da tutuluyor ki her açılışta
  // yeniden kapatmak gerekmesin.
  var lejantDugme = document.createElement("button");
  lejantDugme.className = "lejant-dugme";
  lejantDugme.title = "Lejantı gizle / göster";
  function lejantDurum(kapali) {
    lejant.classList.toggle("kapali", kapali);
    lejantDugme.classList.toggle("kapali", kapali);
    lejantDugme.textContent = kapali ? "☰" : "×";
    lejantDugme.setAttribute("aria-expanded", String(!kapali));
  }
  // 🔴 22 Ağustos 2026 — VARSAYILAN KAPALI. Emre: *"lejant penceresi de
  // sürekli açık duruyor."* Ölçüldü: kutu **547×567 piksel** ve haritanın
  // ortasını kaplıyor; 800 piksellik bir ekranda yarısından fazlası.
  // Eski koşul `=== "1"` idi: kayıt YOKSA açık geliyordu, yani her yeni
  // ziyaretçi haritayı örtülü görüyordu ve önce onu kapatması gerekiyordu.
  // ⇒ `!== "0"`: kullanıcı BİR KEZ açtıysa açık kalır, hiç dokunmadıysa
  //   KAPALI. Lejant bir başvuru aracıdır — lâzım olunca açılır, sürekli
  //   durması gereken bir şey değil.
  // 📌 Ve düğme yerinde duruyor (☰), yani özellik kaybolmuyor; yalnız
  //   VARSAYILAN değişiyor. Bugünkü `ayar-yakinlik` vakasının tersi: orada
  //   işe yaramayan bir denetim SİLİNDİ, burada işe yarayan bir denetimin
  //   yalnız başlangıç hâli düzeltildi.
  lejantDurum(localStorage.getItem("lejantKapali") !== "0");
  lejantDugme.addEventListener("click", function () {
    var kapali = !lejant.classList.contains("kapali");
    lejantDurum(kapali);
    localStorage.setItem("lejantKapali", kapali ? "1" : "0");
  });
  document.getElementById("harita").appendChild(lejantDugme);

  haritaHazir = true;
  aktifDonem = -1;

  // p2/H-0024 — bölge parlama mekanizması (yalnız mekanizma; simge YOK).
  // Tıklanan noktanın hangi AKTİF bölgeye düştüğü `noktaIcinde` ile elle
  // bulunuyor — `bolge-dolgu-hit` bir katman olsa da MapLibre'nin olay nesnesi
  // zaten `queryRenderedFeatures` ile ayrıştırıp `properties.ad`i veriyor,
  // ama MultiPolygon'un HANGİ parçası olduğunu ve dış halkasını vermiyor;
  // parlama katmanına tam o parçayı basmak için ham bolgeler dizisi kullanıldı.
  function bolgeninIcindekiKayit(lngLat) {
    var t = suanki;
    for (var i = 0; i < bolgeler.length; i++) {
      var b = bolgeler[i];
      if (t < b.fi || t >= b.ti) continue;
      var mp = b.ft.geometry.coordinates;
      for (var k = 0; k < mp.length; k++) {
        var dis = mp[k][0];
        if (dis && noktaIcinde([lngLat.lng, lngLat.lat], dis)) return b;
      }
    }
    return null;
  }
  var bolgeParlamaEtiket = null;
  function bolgeEtiketiGoster(ad, lngLat) {
    if (!bolgeParlamaEtiket) {
      bolgeParlamaEtiket = document.createElement("div");
      bolgeParlamaEtiket.className = "bolge-parlama-etiket";
      document.getElementById("harita").appendChild(bolgeParlamaEtiket);
    }
    bolgeParlamaEtiket.textContent = ad;
    var p = harita.project(lngLat);
    bolgeParlamaEtiket.style.left = p.x + "px";
    bolgeParlamaEtiket.style.top = p.y + "px";
    bolgeParlamaEtiket.style.display = "block";
  }
  function bolgeEtiketiGizle() {
    if (bolgeParlamaEtiket) bolgeParlamaEtiket.style.display = "none";
  }
  function bolgeParlamaGoster(ft) {
    harita.getSource("bolge-parlama").setData({ type: "FeatureCollection", features: [ft] });
    harita.setPaintProperty("bolge-parlama-dolgu", "fill-opacity", 0.45);
    harita.setPaintProperty("bolge-parlama-cizgi", "line-opacity", 0.9);
  }
  function bolgeParlamaGizle() {
    harita.setPaintProperty("bolge-parlama-dolgu", "fill-opacity", 0);
    harita.setPaintProperty("bolge-parlama-cizgi", "line-opacity", 0);
    bolgeEtiketiGizle();
  }
  var BOLGE_BASILI_ESIK = 350;   // ms — bu süreden kısa tık "parla ve sön", uzunu "basılı tut"
  var bolgeBasiliZamanlayici = null;
  var bolgeBasiliTutuluyor = false;
  var bolgeAktifKayit = null;
  function bolgeBasiliBaslat(e) {
    var b = bolgeninIcindekiKayit(e.lngLat);
    if (!b) return;
    bolgeAktifKayit = b;
    bolgeBasiliTutuluyor = false;
    bolgeParlamaGoster(b.ft);
    bolgeBasiliZamanlayici = setTimeout(function () {
      bolgeBasiliTutuluyor = true;
      bolgeEtiketiGoster(b.ft.properties.ad + BOLGE_EKI, e.lngLat);
    }, BOLGE_BASILI_ESIK);
  }
  function bolgeBasiliBitir() {
    if (bolgeBasiliZamanlayici) { clearTimeout(bolgeBasiliZamanlayici); bolgeBasiliZamanlayici = null; }
    if (!bolgeAktifKayit) return;
    if (bolgeBasiliTutuluyor) {
      bolgeParlamaGizle();
    } else {
      // kısa tık: bir an parlayıp kendiliğinden sönsün (fill-opacity-transition
      // 250ms bunu zaten yumuşatıyor, burada yalnız GÖRÜNÜR KALMA süresi veriliyor)
      setTimeout(bolgeParlamaGizle, 450);
    }
    bolgeAktifKayit = null;
    bolgeBasiliTutuluyor = false;
  }
  harita.on("mousedown", "bolge-dolgu-hit", bolgeBasiliBaslat);
  harita.on("touchstart", "bolge-dolgu-hit", bolgeBasiliBaslat);
  document.addEventListener("mouseup", bolgeBasiliBitir);
  document.addEventListener("touchend", bolgeBasiliBitir);
  harita.on("mouseenter", "bolge-dolgu-hit", function () { harita.getCanvas().style.cursor = "pointer"; });
  harita.on("mouseleave", "bolge-dolgu-hit", function () { harita.getCanvas().style.cursor = ""; });

  // ⚠️ GENEL KURAL — ETİKET KALABALIĞI (kullanıcı, hatalar 10 madde 25 ve
  // hatalar 11 madde 19-20):
  //   "Bu şehir noktaları bir kere kondu mu orada kalıyor, haritayı uzaktan
  //    bakınca karışıklığa sebep oluyor."
  //   "şehir isimleri küçük puntolar ile görünsün ancak kapladıkları bölgeyi
  //    geçmeyecek şekilde olsun ... bursa yazısı zoom out yapıldığında aynı
  //    puntoda kalarak Çanakkale'den Amasya'ya kadar uzanıyor olmamalı."
  //   "bu şehirler zoom yapılmasına bağlı olarak önemleri ve büyüklükleri
  //    ölçüsünde haritaya yazılmalıdırlar. Ama zoom out arttıkça haritadan
  //    çıkarılmalıdırlar."
  //
  // Ölçüldü: 587 işaret adayı var ve HEPSİ her ölçekte çiziliyordu — zoom'a
  // bağlı görünürlük hiç yoktu. Tek zoom kuralı `.yakin` sınıfıydı ve o da
  // yalnız d1 adlarını gizliyordu.
  //
  // Kademe: her işaretin `d` değeri (1-3) önem katmanı. Zoom düştükçe eşik
  // yükseliyor, yani yalnız üst katman kalıyor. Gizlemek yerine haritadan
  // ÇIKARIYORUZ — 587 DOM düğümü uzakta hem yavaş hem okunmaz.
  //   zoom < 4.0  → yalnız d3
  //   4.0 - 5.2   → d3 + d2
  //   5.2 - 6.3   → d3 + d2 + d1
  //   > 6.3       → hepsi (geçici işaretler dahil)
  //
  // 🔴 24 Ağustos 2026 — BU YORUM ÖLÇÜLDÜ VE YANLIŞTI. Eski hâli
  // *"başkentler: İstanbul, Bursa, Edirne, KAHİRE…"* diyordu. OPUS HAZIR
  // KITA 82 saydı (2606 nokta):
  //     g=3 → 5     g=2 → 164     g=1 → 372     g=0 → 2065
  //     z<4,0'da BÜTÜN DÜNYADA çizilen etiket: 5 —
  //         Söğüt · Bursa · Ankara · Edirne · İstanbul
  //     z<5,2'de: 169 (%6,5) ⇒ 2437 nokta (%93,5) ETİKETSİZ
  // ⇒ Kahire `g=2`, yani o beşin İÇİNDE DEĞİL; ve "…" üç noktası
  //   listenin devamı olduğunu ima ediyordu — devamı YOK, liste beş.
  //
  // ⚠️ VE BU KOZMETİK BİR DÜZELTME DEĞİL: yorum, geniş açıda dünyanın
  //    etiketli olduğu izlenimi veriyordu. Gerçekte `g` alanının %79'u
  //    boş ve kullanıcı geride bakarken çoğu yerde TEK BİR AD göremiyor.
  //    Emre'nin *"harita işaretlenmemiş"* şikâyetinin bir kısmı buradan
  //    geliyor olabilir — ve yorumu okuyan bir oturum sebebi başka yerde
  //    arardı. *Yanlış bir yorum, aramayı yanlış yöne çevirir.*
  function zoomEsigi() {
    var z = harita.getZoom();
    if (z < 4.0) return 3;
    if (z < 5.2) return 2;
    return 1;
  }
  var sonEsik = null;
  function zoomSinifi() {
    var el = document.getElementById("harita");
    var z = harita.getZoom();
    el.classList.toggle("yakin", z >= 5.2);
    // Punto da ölçeğe bağlı: uzakta ad kutusu peteğinden taşmasın diye küçülür.
    el.classList.toggle("cok-uzak", z < 4.0);
    el.classList.toggle("uzak", z >= 4.0 && z < 5.2);
    var e = zoomEsigi();
    if (e !== sonEsik) { sonEsik = e; sehirGuncelle(suanki); }
    etiketTazele();
  }
  // ⚠️ Etiket yerleşimi bugüne kadar YALNIZ dönem değişince hesaplanıyordu
  // (devletGuncelle → etiketleriYerlestir). İşaretler MapLibre marker'ı olduğu
  // için konumları zoom'da kendiliğinden düzeliyordu, ama PUNTO ve ÇAKIŞMA
  // ELEMESİ zoom'a bağlı olduğu hâlde bayat kalıyordu: uzaklaşınca etiketler
  // eski büyük puntolarında üst üste biniyor, yakınlaşınca elenmiş adlar geri
  // gelmiyordu. Bölge kademesi zoom eşiğine (5.2) bağlı olduğu için bu artık
  // seçenek değil — eşik geçildiğinde yeniden yerleşmesi ŞART.
  // Kare başına değil, kare sonunda: zoom olayı sürüklerken saniyede onlarca
  // kez ateşliyor ve yerleşim 61 bölge + ~86 gövde için DOM işareti kuruyor.
  var etiketBekleyen = 0;
  var etiketBorcu = false;
  function etiketTazele() {
    if (etiketBekleyen) return;
    // 23 Agustos 2026 — UCUS SIRASINDA ETIKET YERLESIMI YAPILMAZ.
    // OLCULDU ve "surekli yuk" imzasinin ASIL kaynagi buydu:
    //     harita.on("zoom", zoomSinifi)  ->  etiketTazele()
    // Bir ucus zoom'u HER KARE degistirir, yani bu dal saniyede ~60 kez
    // ateşliyordu ve her ateslemede IKI pahali is yapiyordu:
    //     etiketleriYerlestir()  147 isaret SIL + YENIDEN KUR (DOM)
    //     sehirGuncelle()        olculdu: 99-228 ms
    // Yani ucusun kendisi degil, ucusun TETIKLEDIGI yeniden yerlesim
    // is parcacigini dolduruyordu. Kare sayacinin %4'te takili kalmasinin
    // sebebi buydu.
    // VE yerlesim ucus sirasinda ZATEN GORUNMUYOR: harita-ucusta kurali
    // butun isaretleri display:none yapiyor. Yani bu hesap kimsenin
    // gormedigi bir sonuc icin yapiliyordu.
    // => Askiya alinir, BORC yazilir, varista BIR KEZ odenir.
    // OGRENILENLER: bir isi hizlandirmanin en ucuz yolu onu HIC YAPMAMAK;
    // ama yapilmayan is KAYDEDILMEZSE kaybolur, o yuzden etiketBorcu.
    if (KAMERA.olayBekliyor) { etiketBorcu = true; return; }
    etiketBekleyen = requestAnimationFrame(function () {
      etiketBekleyen = 0;
      if (!haritaHazir) return;
      etiketleriYerlestir();
      // ⚠️ Şehir işaretleri de zoom'a bağlı hâle geldi: görünürlük artık
      // yalnız `d >= zoomEsigi()` değil, ÇAKIŞMA elemesi de. Eşik sınıfı
      // değişmese bile yakınlaşınca yer açılıyor ve elenmiş işaretler geri
      // gelmeli. zoomSinifi'nin `e !== sonEsik` kapısı bunu kaçırırdı.
      sehirGuncelle(suanki);
    });
  }
  harita.on("zoom", zoomSinifi);
  // Borc odeyici: ucus bitince disaridan cagriliyor. etiketTazele bu
  // kapsamin ICINDE tanimli oldugu icin (kapanis) disariya ancak boyle
  // acilabiliyor — ayri bir kopya yazmak yerine AYNI fonksiyon cagriliyor.
  window.__etiketTazele = etiketTazele;
  window.__etiketBorcuOde = function () {
    if (!etiketBorcu) return;
    etiketBorcu = false;
    etiketTazele();
  };
  window.zoomEsigi = zoomEsigi;
  zoomSinifi();
  guncelle();
});

function bosVeri() { return { type: "FeatureCollection", features: [] }; }

function tekVeri(geo) { return { type: "FeatureCollection",
  features: geo.coordinates.length ? [{ type: "Feature", properties: {}, geometry: geo }] : [] }; }

// ---------- Şehir işaretleri (koordinat hassasiyetli; tarihe göre belirir/vurgulanır) ----------
// ÖNEMLİ: dış öğe MapLibre'nindir (konum sınıfları/transform'u oradadır) — ona
// dokunulmaz. Vurgu sınıfları yalnızca iç öğeye (.sehir) uygulanır; aksi hâlde
// işaretler konumunu kaybedip rastgele yerlere savrulur.
// Harita işaretleri: YERLESIMLER (petek veri seti) varsa ondan, yoksa eski
// SEHIRLER tablosundan beslenir. g:0 olanlar yalnızca petek içindir, çizilmez.
// ⚠️ GENEL KURAL (kullanıcı isteği): "Gümülcine'nin, Çatalca'nın, Çorlu'nun,
// Lüleburgaz'ın fethi maddesi olunca ve harita o bölgeye ilerleyince bu
// şehirlerin isimleri haritada görünmeli."
// Eskiden yalnız g>0 yerleşimlerin işareti vardı; g:0 olanlar (Çorlu,
// Lüleburgaz, Gümülcine ve yüzlercesi) petek üretimi için duruyor ama haritada
// hiç çizilmiyordu — maddesi okunurken şehir görünmüyordu.
// Artık HER yerleşim, el değiştirdiği anda adını gösteriyor; g:0 olanlar
// yalnız o pencerede (fetihten sonra YONTEM_SURE gün) görünüp kayboluyor,
// böylece harita kalabalıklaşmıyor.
// 🔴 KÖK SEBEP DÜZELTMESİ (Oturum 11'in ölçümü — hatalar 13 md.1/2 Varna,
// hatalar 15 md.3 İnebahtı, ve bütün "fetih maddesi var ama şehir yok" sınıfı).
// Süzgeç `y.d && y.d.length` idi: YALNIZ Osmanlı DOĞRUDAN idaresi olan kayıtlar
// işaret alıyordu. Yani harita bir şehrin adını ancak OSMANLI ELİNDEYKEN gösteriyordu.
// Ölçüldü: 285 kayıtta hiç `d:` yok → hiç işaret almıyorlar (28'inin gövdesi
// haritada ÇİZİLİYOR olmasına rağmen); 386 kayıtta `d:` var ama `g:0`, bunların
// 140'ı k≤3 (Varna, İnebahtı, Silistre, İşkodra, Temeşvar, Kamaniçe, Draç…).
// Sonuç: "Varna alınıyor, Varna etiketi haritada yok" — çünkü fetihten ÖNCE
// Varna'nın hiçbir dönemi işaret üretmiyordu.
// Artık üç statünün ÜÇÜ de (d: doğrudan · v: tâbi · s: yabancı) işaret penceresi
// üretiyor: şehir SAHNEDE olduğu sürece adını gösterebiliyor, yalnız bizimken değil.
// Kalabalık koruması aynen duruyor — g:0 olanlar "geçici", yani her el değiştirmeden
// sonra YONTEM_SURE gün görünüp kayboluyor; zoom kademesi ve go: sönmesi de yerinde.
var EPOK_DAMGASI = "1281-01-01";   // gerçek bir el değiştirme değil, atlasın başlangıcı
var ISARET_KAYNAK = (window.YERLESIMLER && window.YERLESIMLER.length)
  ? window.YERLESIMLER.filter(function (y) {
        return (y.d && y.d.length) || (y.v && y.v.length) || (y.s && y.s.length);
      })
      .map(function (y) {
        var pencereler = [];
        ["d", "v", "s"].forEach(function (alan) {
          (y[alan] || []).forEach(function (dn) {
            if (!dn || !dn.f) return;
            // 883 kaydın en erken dönemi tam 1281-01-01: bu bir tarih değil, epok
            // damgası. Ediniliş simgesini (⚔ ♜ 📜 vb.) geçici işaret olarak
            // saysaydık atlas açılır açılmaz 883 etiket birden belirip 550 gün
            // ekranda kalırdı — düzeltmeye çalıştığımız kalabalığın ta kendisi.
            // 🔴 TESPİH KUŞAK 0/1 sessiz kayıp taraması (4 Ağustos) — eskiden bu
            // satır PENCEREYİ TAMAMEN atlıyordu (`return`), yalnız simgeyi değil.
            // 130 yerleşimde (Londra, Paris, Berlin, Moskova… hepsi `s:` ile tek
            // pencereli, epoktan 1923'e sabit referans şehirleri) bu TEK pencere
            // atlanınca `kayitlar` boş kalıyordu — hiçbir zoomda, hiçbir tarihte
            // görünmüyorlardı. Ölçüldü: 130/1582 yerleşim `aktif` hiç olmuyordu.
            // ⇒ Pencere KALIR, yalnız edinme simgesi bastırılır — 883 kaydın çoğu
            // zaten ikinci bir pencereye sahip (ilk görünüşleri zaten simgesizdi,
            // fark etmezdi); 130'u için bu TEK pencere ve artık kayboluyorlardı.
            var epokBaslangici = dn.f === EPOK_DAMGASI && y.g === 0;
            pencereler.push({ f: dn.f, t: dn.t, d: Math.max(y.g, 1), b: y.g === 3,
                              y: epokBaslangici ? undefined : (alan === "d" ? dn.y : undefined) });
          });
        });
        pencereler.sort(function (a, b) { return a.f < b.f ? -1 : a.f > b.f ? 1 : 0; });
        return { ad: y.ad, tur: y.tur, lat: y.lat, lon: y.lon, gecici: y.g === 0,
                 // ⚠️ `g` BURADA TAŞINMALI. Eskiden taşınmıyordu çünkü tek
                 // kullanıcısı `pencereler[].d` idi; şehir öncelik sıralaması
                 // (sehirOncelikKur) onu doğrudan istiyor ve alan yoksa
                 // sıralamanın BİRİNCİ anahtarı sessizce etkisiz kalır —
                 // İstanbul ile Timbuktu aynı kovaya düşerdi.
                 g: y.g || 0,
                 go: y.go,   // önemin söndüğü gün (isteğe bağlı)
                 k: pencereler };
      })
  : (window.SEHIRLER || []);

var sehirler = ISARET_KAYNAK.map(function (s) {
  var dis = document.createElement("div");
  var ic = document.createElement("div");
  ic.className = "sehir";
  // `s-fetih`: fetih tarihi rozeti. VARSAYILAN BOŞ — yalnız `fethedilen:`
  // alanı olan bir madde sahnedeyken doluyor (bkz. sehirGuncelle).
  ic.innerHTML = '<span class="s-nokta"></span><span class="s-yontem"></span>' +
                 '<span class="s-ad"></span><span class="s-fetih"></span>';
  // ⚠️ GENEL KURAL (kullanıcı, hatalar 3.docx madde 1): "Dimbos, Kulacahisar,
  // Karacahisar, Adranos'ta görülen simgeler ... en başından beri yapıştı
  // gitmiyor. Madde geçtikten sonra bu simgeler kaldırılmalı."
  // Simge 🏰 idi ve tur:"kale" olan HER kayıtta kalıcıydı — Dimbos'un kalesi
  // 1303'te alınıp 1402'ye kadar aynı simgeyle duruyordu, yani yüz yıl boyunca
  // ekranda bir "olay" işareti gibi görünüyordu. Artık kale simgesi de ediniliş
  // yöntemi simgesiyle aynı pencereye bağlı: fetihten sonra YONTEM_SURE gün
  // görünür, sonra yalnız ad ve nokta kalır. Ad hiç kaldırılmıyor — kullanıcının
  // "şehirlerin isimleri haritada görünmeli" kuralı bozulmasın.
  ic.querySelector(".s-ad").textContent = s.ad;
  dis.appendChild(ic);
  return { s: s, ic: ic, gecici: !!s.gecici, kale: s.tur === "kale",
           go: s.go ? gunIdx(s.go) : null,
           yontemEl: ic.querySelector(".s-yontem"),
           fetihEl: ic.querySelector(".s-fetih"), ekli: false,
           mk: new maplibregl.Marker({ element: dis, anchor: "left", offset: [-5, 0] })
                 .setLngLat([s.lon, s.lat]),
           kayitlar: s.k.map(function (r) {
             return { fi: gunIdx(r.f), ti: gunIdx(r.t), d: r.d, b: !!r.b, y: r.y || "" };
           }) };
});

// Ediniliş yöntemi simgeleri (fetihten sonra ~1,5 yıl gösterilir)
//
// ⚠️ Bu nesne `y:` alanının ÜÇ otoritesinden biri; diğerleri veri ve
// VERI-YAPISI.md. Üçü 31 Temmuz'da ölçüldü ve hiçbiri diğerini tutmuyordu:
//   kusatma 85 · savas 77 · antlasma 67   → üçünde de var
//   vassal  13  belge ✗ · burada ✓        → belge geride
//   ilhak   11  belge ✗ · burada ✗        → 11 kayıt SİMGESİZ çiziliyordu
//   miras    2  belge ✓ · burada ✗        → 2 kayıt SİMGESİZ çiziliyordu
// Aşağıda `|| ""` var, yani tanımsız yöntem hata vermez — sessizce hiçbir şey
// çizmez. Eksiği görünür kılan hiçbir şey yoktu; ölçmeseydik bulunmazdı.
// 📌 `vassal` "tâbiyet/itaat yoluyla edinim" demek — `v:` KADEMESİYLE karışmasın.
// `d:` içinde `y:"vassal"` çelişki değil: yer doğrudan idareye geçmiştir, ama
// EDİNİMİ savaşla değil itaatle olmuştur (Basra'da şehrin anahtarlarının
// teslimi gibi). Bu yüzden silinmedi, tanımı yazıldı.
var YONTEM_SIMGE = {
  savas: "⚔", kusatma: "♜", antlasma: "📜",
  vassal: "🤝", ilhak: "🗝", miras: "👑"
};
var YONTEM_SURE = 550;   // gün

// ⚠️ GENEL KURAL — OLAYIN GEÇTİĞİ YER, OLAY ANLATILIRKEN GÖRÜNÜR
// (kullanıcı, hatalar 13 md.1): "bir yerin fethinden bahsediliyor ise kronolojide
// haritada gösterimde O YERİN GÖSTERİLMESİ lazım, o şehirlerin gösterilmesi lazım,
// ve KONU BİTİNCE o etiketin ortadan kalkması lazım."
// Somut vakası md.2: "Varna alınıyor ama Varna etiketi haritada yok."
//
// Neden sahiplik penceresi bunu çözmüyor: Varna 1391'de Osmanlı oldu ve `g:0`
// olduğu için işareti 550 gün sonra söndü. 1444 Varna Muharebesi anlatılırken
// şehir çoktan görünmez olmuştu — sahiplik DEĞİŞMEDİĞİ için yeni pencere açılmadı.
// Yani eksik olan "kim sahip" değil, "burada ŞU AN bir şey anlatılıyor" bilgisiydi.
//
// Eşleşme bir kez hesaplanıyor (958 madde × 911 işaret), her karede değil.
var OLAY_YERI = null;
// 🔴 KISA ADLI ŞEHİRLER 33 TANE VE HİÇBİRİ EŞLEŞMİYORDU.
// `ad.length >= 4` süzgeci onları tamamen dışarıda bırakıyordu; yani Şam
// anlatılırken Şam haritada belirmiyordu ve hiçbir denetim bunu söylemiyordu.
// Kusur küçük görünüyor ama şehirler büyük:
//
//   Van · Niş · Yaş · Özi · Şam · Fas · Ufa · Kum · Bar · Baç · Vaç · Nio
//   Krk · Rab · Pag · Vis · Kiş · Baf · Kaş · Hoy · Âne · Hît · Fâv · Lâr
//   Bem · Hâş · Tûs · Sûr · Kûs · Tûr · Kef · Ayl · Gât
//
// ⚠️ SÜZGECİ KALDIRMAK YANLIŞ OLURDU — ölçüldü: kısa adlarda düz alt dize
// araması 47 eşleşme veriyor ve **20'si yanlış** (Bar→Barbaros, Kef→Kefe,
// Kaş→…, Kum→…; dördünde eşleşmelerin HEPSİ yanlış).
//
// ⇒ Çözüm uzunluğa bağlı ve iki uç da ölçüldü:
//     kısa ad + İKİ YANLI kelime sınırı → +27 gerçek eşleşme · 0 yanlış pozitif
//        Şam(7) · Niş(5) · Yaş(5) · Van(3) · Özi(3) · Fas(2) · Vaç(1) · Baf(1)
//     aynı sınır UZUN adlara da konsaydı → 1333'ten 1290'a, yani −43 DOĞRU
//        eşleşme; sebebi Türkçe ekler ("Edirneye", "Vanı") — sınır sonu kesiyor
// 📌 Yani doğru çözümü yanlış kümeye uygulamak zarar veriyordu. `§19`'un
//    ölçülmüş hâli: sınır SOLA konur, sağa konmaz — kısa adlar hariç, orada
//    iki taraf da şart, yoksa "Bar" her "Barbaros"u yakalar.
// ⚠️ Süzgeci "sadeleştirmek" isteyen biri yukarıdaki 33 adı görsün diye liste
//    burada duruyor; kaldırılırsa o şehirler sessizce görünmez olur.
var HARF_SINIF = "A-Za-zÇĞİıÖŞÜçğöşü";
function kisaAdKalibi(ad) {
  var esc = ad.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(^|[^" + HARF_SINIF + "])" + esc + "(?![" + HARF_SINIF + "])");
}
function olayYeriKur() {
  // Kalıplar bir kez kurulur: 958 madde × 33 kısa ad = her koşuda 31.614 regex
  // derlemesi olurdu.
  var kalip = [];
  for (var k = 0; k < sehirler.length; k++) {
    var a = sehirler[k].s.ad.split(" (")[0];
    kalip[k] = (a.length > 0 && a.length < 4) ? kisaAdKalibi(a) : null;
  }
  OLAY_YERI = olaylar.map(function (o) {
    var metin = ((o.yer || "") + " " + (o.b || ""));
    var liste = [];
    for (var i = 0; i < sehirler.length; i++) {
      // Parantezli karşılık da eşleşsin: "Bapheus (Koyunhisar)" → "Bapheus"
      var ad = sehirler[i].s.ad.split(" (")[0];
      if (ad.length >= 4) {
        if (metin.indexOf(ad) >= 0) liste.push(i);      // gevşek: ek alabilir
      } else if (kalip[i] && kalip[i].test(metin)) {
        liste.push(i);                                   // sıkı: iki yanlı sınır
      }
    }
    return liste;
  });
}

// p4/H-0008 — kullanıcı, Hemedan örneği: "savaş yerinin haritada bir savaş
// simgesiyle gösterilmesi iyi olurdu." Ölçüldü: `window.SAVASLAR` (⚔/◎/🔥/⚓
// pencere-lejant sistemi) `olaylar`dan TAMAMEN BAĞIMSIZ, elle küratörlüğü
// yapılan ayrı bir veri seti — Hemedan'ın orada karşılığı yok ve olmayabilir
// de (`data/savaslar.js` bu oturumun dosyası değil, CLAUDE.md §7).
// ⇒ Yeni bir veri kümesi AÇILMADI. `olaylar[].k`/`etiket` zaten savaş türünü
// taşıyor, `OLAY_YERI` zaten maddeyi şehre bağlıyor — ikisi birleşince
// hiçbir veri dosyasına dokunmadan aynı sonuç çıkıyor. Glif SAVAS_TUR_SIMGE
// ile AYNI (kullanıcı lejanttan zaten öğrendi, yeni bir dil icat edilmedi).
var MUHAREBE_K = { savas: "meydan", kusatma: "kusatma", isyan: "isyan", ayaklanma: "isyan" };
function olayMuharebeTuru(o) {
  var tur = MUHAREBE_K[o.k];
  if (!tur && o.etiket) {
    for (var i = 0; i < o.etiket.length; i++) {
      tur = MUHAREBE_K[o.etiket[i]];
      if (tur) break;
    }
  }
  return tur ? SAVAS_TUR_SIMGE[tur] : null;
}

// ---------- Şehir görünürlük önceliği — (kova, alan, ad) ----------
// Kullanıcı kararı (a): şehir katmanı OLAYLARDAN BAĞIMSIZ, yakınlaştırmaya
// göre çalışır. Uzaktan yalnız önemli şehirler, yakınlaştıkça hepsi; olaylar
// açıkken o anki maddede geçenler EK olarak görünür.
// ⇒ Bağımlılık tersine çevrildi: eskiden şehir katmanı olaya muhtaçtı
// (`gecici` işaret ancak anıldığında görünürdü), artık olay katmanı şehir
// katmanına ekleme yapıyor.
//
// 🔴 SIRALAMA NEDEN BÖYLE — dört ölçüm sonucunda:
//   1) g: tek başına yetmiyor    → 846 kayıt tek kovada
//   2) tur: yetmiyor             → en büyük kova 416
//   3) anılma yetmiyor           → 538 tek kovada
//   4) ÜÇÜ BİRLİKTE              → en büyük ortak kova 299 (%65 azalma)
// Ve sürücü ALAN OLAMAZ: alan yakınlık değil ıssızlık ölçüyor — Timbuktu
// 2.820.792 km² ile birinci, İstanbul 750/951, Bursa 879/951. Alan sürücü
// olsaydı uzaklaşınca ekranda Sahra kalır, İstanbul kaybolurdu.
// ⇒ Roller ters: ÜÇLÜ KOVA sürücü, alan yalnız kova İÇİNDE eşitlik kırıcı.
//   Böylece Timbuktu (g:0·sehir·anılma 0) en alt kovada kalıyor ve alanı
//   yalnız kendi kovasının içinde işe yarıyor.
// Son basamak `ad`: petek koordinatları 3 ondalıkla yazılıyor (111 m) ve
// ölçüldü — 290 ardışık çiftin 2'sinde alan farkı gürültünün altında. Ad,
// yalnız o iki çiftte karar verir ve sırayı ÜRETİMDEN BAĞIMSIZ kılar.
var TUR_SIRA = { sehir: 0, liman: 1, kale: 2, bolge: 3 };
var sehirOncelik = null;              // öncelik sırasına dizilmiş indeksler
var sehirAnilma = null;               // kronoloji genelinde anılma sayısı

function sehirOncelikKur() {
  // Anılma sayısı: OLAY_YERI'nin tersi. BÜTÜN kronoloji üzerinden sabit bir
  // sayı — o anda sahnede olan maddeler değil. Yani statik bir "atlas bu
  // yerden ne kadar söz ediyor" ölçüsü; `anilan`la karıştırılmamalı.
  sehirAnilma = new Array(sehirler.length);
  for (var i = 0; i < sehirAnilma.length; i++) sehirAnilma[i] = 0;
  for (var oi = 0; oi < OLAY_YERI.length; oi++) {
    var L = OLAY_YERI[oi];
    for (var li = 0; li < L.length; li++) sehirAnilma[L[li]]++;
  }
  // Petek alanı — km². PETEKLER donemler.js'ten zaten yüklü, ek dosya YOK.
  // ⚠️ derece² değil km²: enlem düzeltmesi olmadan kuzeydeki hücreler haksız
  // yere büyük çıkar ve sıra ölçtüğümden başka olur.
  var alan = {};
  if (window.PETEKLER) {
    for (var pi = 0; pi < PETEKLER.length; pi++) {
      var p = PETEKLER[pi];
      if (!p || !p.g) continue;
      var km = 0;
      for (var gi = 0; gi < p.g.length; gi++) {
        var dis = p.g[gi][0];
        if (!dis || dis.length < 4) continue;
        var lat = 0;
        for (var q = 0; q < dis.length; q++) lat += dis[q][1];
        km += halkaAlan(dis) * 111.32 * 111.32 *
              Math.cos((lat / dis.length) * Math.PI / 180);
      }
      alan[p.a] = km;
    }
  }
  sehirOncelik = [];
  for (var s = 0; s < sehirler.length; s++) sehirOncelik.push(s);
  sehirOncelik.sort(function (a, b) {
    var A = sehirler[a].s, B = sehirler[b].s;
    var d = (B.g || 0) - (A.g || 0);                    if (d) return d;
    d = sehirAnilma[b] - sehirAnilma[a];                 if (d) return d;
    d = (TUR_SIRA[A.tur] === undefined ? 9 : TUR_SIRA[A.tur]) -
        (TUR_SIRA[B.tur] === undefined ? 9 : TUR_SIRA[B.tur]);
                                                         if (d) return d;
    d = (alan[B.ad] || 0) - (alan[A.ad] || 0);           if (d) return d;
    return A.ad < B.ad ? -1 : A.ad > B.ad ? 1 : 0;       // üretimden bağımsız son söz
  });
}

// p4/H-0011 — kullanıcı: "başkent yıldızı DİĞER DEVLETLER için de, hangisi
// başkent ise ONA koymalı." ÖLÇÜLDÜ VE ENGEL DOĞRULANDI: `data/devletler.js`
// künyesinde `baskent` TEK DEĞER — zaman penceresi yok, yani "İran'ın 1600'de
// başkenti neresiydi" sorusuna bugün veri cevap veremiyor. O iş devletler.js
// sahibini bekliyor (CLAUDE.md §7, bu oturum data/ dosyalarına yazamaz).
//
// ⇒ YALNIZ OSMANLI için yapılabildi — ve eski mekanizma (`y.g===3`, "büyük
// şehir" katmanı) buna YETMİYORDU: ölçüldü, g:3 olan BEŞ şehir var (Söğüt,
// Bursa, ANKARA, Edirne, İstanbul — Ankara hiç başkent olmadı) ve `b` her
// birine SÜREKLİ yapışıktı; 1453'ten sonra BEŞİ DE aynı anda yıldız
// taşıyordu. Kullanıcının "hepsine yıldız koymuş" şikâyeti tam bu.
// Doğrusu: dört ismin SIRASI tartışmasız (Söğüt→Bursa→Edirne→İstanbul),
// tarihler AYRI bir sabit tabloya YAZILMADI (§35) — her geçiş, o şehrin
// KENDİ `d:` (doğrudan Osmanlı) ilk periyodunun başlangıcından okunuyor;
// veri bir gün düzeltilirse yıldız da kendiliğinden düzelir.
// ⚠️ Bursa→Edirne geçişi bir YAKLAŞIKLIK: Edirne `d.f`si "ne zaman Osmanlı
// toprağı oldu"yu taşıyor, "ne zaman başkent oldu"yu birebir DEĞİL — TDV'de
// birkaç yıl ayrışabilir. Daha iyisi devletler.js künye işi bitmeden
// yapılamaz; bu, "yapılamadı + sebep" değil "yaklaşık yapıldı + sebep."
var OSMANLI_BASKENT_SIRA = ["Söğüt", "Bursa", "Edirne", "İstanbul"];
function osmanliBaskentPencereleriKur() {
  var basl = [];
  var ham = {};
  (window.YERLESIMLER || []).forEach(function (y) {
    if (OSMANLI_BASKENT_SIRA.indexOf(y.ad) >= 0 && !ham[y.ad]) ham[y.ad] = y;
  });
  for (var i = 0; i < OSMANLI_BASKENT_SIRA.length; i++) {
    var ad = OSMANLI_BASKENT_SIRA[i];
    var y = ham[ad];
    if (!y || !y.d || !y.d.length) continue;   // veri eksikse sessizce atla, uydurma yok
    basl.push({ ad: ad, fi: gunIdx(y.d[0].f) });
  }
  basl.sort(function (a, b) { return a.fi - b.fi; });
  for (var j = 0; j < basl.length; j++) {
    basl[j].ti = (j + 1 < basl.length) ? basl[j + 1].fi : Infinity;
  }
  return basl;
}
var OSMANLI_BASKENT = osmanliBaskentPencereleriKur();
function osmanliBaskentMi(ad, t) {
  for (var i = 0; i < OSMANLI_BASKENT.length; i++) {
    if (OSMANLI_BASKENT[i].ad === ad) return t >= OSMANLI_BASKENT[i].fi && t < OSMANLI_BASKENT[i].ti;
  }
  return false;
}

function sehirGuncelle(t) {
  if (!haritaHazir) return;
  if (!OLAY_YERI) olayYeriKur();
  if (!sehirOncelik) sehirOncelikKur();

  // O an sahnede olan maddelerin andığı yerleşimler — savaş işaretleriyle aynı
  // pencere kuralı (bir sonraki maddeye kadar, taban 60 tavan 365 gün).
  //
  // p4/H-0013 — kullanıcı: "bir iki madde sonra gerçekleşecek tarihî olaydan
  // önce, o olayda geçecek olan şehirleri haritada görünür kılmalıyız."
  // Sözleşme `oturumlar/OLCUM-ILERI-BAKIS.md §6`de yazılı ve NİHAİ:
  //   pencere 365 gün ileri · tavan YOK · gelecek işaretler öncelik
  //   listesinin EN SONUNDA · aynı işaret ama opaklık ~%55 + kesikli çerçeve ·
  //   süzgeç: gizlenmiş maddenin şehirleri gösterilmez.
  // Aynı O(n) taramaya bindiriliyor — ayrı bir geçiş açmak `olaylar`ı iki kere
  // gezmek olurdu (1000+ madde × her kare).
  var anilan = {}, fetihTarihi = {}, yaklasan = {}, savasSimgesi = {};
  for (var oi = 0; oi < olaylar.length; oi++) {
    var o = olaylar[oi];
    if (o.gi > t + 365) break;                 // ne şimdiki ne 365 gün içindeki gelecek
    if (o.sure === undefined) o.sure = sonrakiOlayaKadar(o.gi);
    if (o.gi > t) {
      // Henüz olmamış ama 365 gün içinde olacak — "yaklaşan" önizlemesi.
      // Süzgeç kuralı panelle AYNI: gizlenmiş maddenin şehri de gizli kalır.
      if (!olayDom[oi] || !olayDom[oi].classList.contains("suzuldu")) {
        var Ly = OLAY_YERI[oi];
        for (var liy = 0; liy < Ly.length; liy++) yaklasan[Ly[liy]] = true;
      }
      continue;
    }
    if (t < o.gi + o.sure) {
      var L = OLAY_YERI[oi];
      for (var li = 0; li < L.length; li++) anilan[L[li]] = true;
      // p4/H-0008 — bu madde savaş/muharebe türündeyse, andığı şehirlerin
      // ediniliş-simgesi yuvasına (boşsa) bir savaş simgesi düşüyor.
      var muhSimge = olayMuharebeTuru(o);
      if (muhSimge) {
        for (var lim = 0; lim < L.length; lim++) savasSimgesi[L[lim]] = { s: muhSimge, b: o.b };
      }
      // 🔴 FETİH TARİHİ ETİKETİ — YALNIZ `fethedilen:` ALANINDAN.
      // Kullanıcı: *"harita üzerinde fetih tarihi küçük punto ile gösterilsin."*
      // ⚠️ Bunu METİN EŞLEŞMESİNDEN türetmek ÖLÇÜLDÜ ve elendi: 1.360 madde-şehir
      // çiftinde 554'ü maddenin tarihini TEKRAR ederdi, 739'u ALAKASIZ bir tarih
      // gösterirdi (Fatih'in 1481 ölümü maddesinde Bursa'nın yanına "1326",
      // Rodos'a 170 yıl öteden bir tarih). Metin *"bahsedilen şehir"* ile
      // *"el değiştiren şehir"* arasında ayrım yapmıyor.
      // ⇒ Ayrımı ancak veri yapabilir. `fethedilen:` alanı bunun için açıldı.
      //
      // 🔴 KURAL: listede adı geçmeyen şehre tarih YAZILMAZ; alan yoksa madde
      // etiketsizdir. Güvenli taraf VARSAYILAN — bugün 991 madde alansız ve
      // hiç etiket çıkmıyor, 7 madde alanlı ve 10 ad taşıyor.
      // Ölçülmüş vakalar:
      //   1484-07-15 Kili · 1484-08-04 Akkirman → 20 gün arayla iki ayrı fetih;
      //     ±30 gün penceresi ikisini de her iki maddede buluyordu, alan ayırıyor
      //   1806-01-26 Böğürdelen'in KAYBI → alan YOK, dolayısıyla 25 gün ötedeki
      //     "Mekke'nin Vehhâbîlere kaybı" maddesine de etiket sızmıyor
      // 🔴 İKİ ALAN, İKİ YÖN — `kaybedilen:` sonradan geldi ve rozet onu
      // okumuyordu: 5 maddede 6 ad GÖRÜNMÜYORDU. Ölçüldü ve kapatıldı.
      // ⚠️ Kazanç ile kaybın AYRILMASI şart: 1463-06-01 maddesi aynı anda
      // Travnik'i kazanıp Yayça ile Srebrenik'i kaybediyor. Ayrım olmasa
      // Yayça 1463'te Osmanlı'ya geçmiş gibi okunurdu — kullanıcıya doğrudan
      // yanlış bilgi, bugün altı kez gördüğümüz sınıf.
      // 📌 Ayrım için YENİ bir görsel dil icat edilmedi: kronoloji listesi
      // zaten `k-fetih` yeşili ve `k-kayip` grisini kullanıyor. Kullanıcı o
      // ikiliyi panelde her gün görüyor; haritada aynısını görmesi öğrenme
      // gerektirmiyor. (Punto önem derecesini, renk devlet sahipliğini
      // anlatıyor; rozetin kendi rengi serbest olan tek eksendi.)
      // DÖRT ALAN, TEK OKUYUCU. Şema bilerek aynı şekilde: `[ad, ad, …]`.
      // ⚠️ `statu_vasal` bugün BOŞ (0 kayıt) ve yine de okunuyor — sebebi
      // dünkü kendi kusurum: `kaybedilen:` benden sonra gelmişti ve rozet onu
      // okumadığı için 5 maddede 6 ad ekranda hiç görünmedi. Alan büyüdüğünde
      // tüketici de büyümeli; dördünü tek döngüde okumak o riski kapatıyor.
      // 📌 Bu, "veri ile onu okuyan kod aynı dalgada gider" kuralının eksik
      // yarısıydı: kuralı ilk yazımda uyguladık, GENİŞLEMEDE uygulamamıştık.
      //
      // Sıra ÖNCELİK sırası: aynı ad birden çok alanda geçerse ilki kazanır.
      // Kili 1484'te hem fetih hem statü değişimi olabilir ve İKİSİ DE DOĞRU
      // (askerî olarak alındı, şema olarak tâbi voyvodalıktan doğrudan sancağa
      // geçti) — ama ekranda iki rozet çift kayıt gibi okunur.
      // ⚠️ Ölçüldü: bugün çakışan ad-madde çifti **0**. Yani bu bir savunma
      // dalı, ölü özellik değil — kod zaten her karede koşuyor, tekilleştirme
      // onun içinde üç satır. (Ölü ÖZELLİK silinir, ölü SAVUNMA kalır.)
      var yonler = [["fethedilen", "kazanc"], ["kaybedilen", "kayip"],
                    ["statu_dogrudan", "dogrudan"], ["statu_vasal", "vasal"]];
      for (var yi = 0; yi < yonler.length; yi++) {
        var alan = o[yonler[yi][0]];
        if (!alan || !alan.length) continue;
        for (var fi = 0; fi < alan.length; fi++) {
          var fad = String(alan[fi]).split(" (")[0];
          for (var si = 0; si < sehirler.length; si++) {
            if (sehirler[si].s.ad.split(" (")[0] === fad) {
              // Aynı şehir birden çok maddede geçerse EN SON (en yakın) kazanır;
              // AYNI maddede birden çok alanda geçerse İLK alan kazanır.
              if (!(fetihTarihi[si] && fetihTarihi[si].gi === o.gi))
                fetihTarihi[si] = { t: o.gun || idxYazi(o.gi),
                                    yon: yonler[yi][1], gi: o.gi };
              break;
            }
          }
        }
      }
    }
  }

  // Öncelik sırasında dolaşılıyor ve yerleşenlerin ekran kutuları tutuluyor:
  // büyük olan önce yerleşir, çakışan küçük elenir. Devlet ve bölge
  // etiketlerinde kurulu olan makinenin aynısı (ölçümü: taban 1·bant 47·tavan 0).
  // 🔴 `anilan` ARTIK MUAF DEĞİL, ÖNCELİKLİ — ölçüm bu kusuru buldu.
  // Eskiden `if (!anilan[mi]) yerlesenSehir.push(m)` yazıyordu, yani anılan
  // işaret elemeye HİÇ girmiyordu. Sonucu iki taraflıydı ve ikincisini
  // görmemiştim: kendisi elenmiyordu (istenen) AMA `tutulan`a da girmediği
  // için **kimseyi engellemiyordu** ve **birbirleriyle çakışabiliyordu**.
  // Ölçüldü (z5, 1302): Söğüt ve Domaniç DOM'da var, `tutulan`da yok,
  // `elenen`de yok — hiçbir yerde. 23 tutulan + 1 elenen = 24 aday, ikisi bu
  // toplamın dışında. Gözlenen dört çakışan çiftin hepsi buradan çıkıyordu.
  // ⇒ Doğrusu: anılanlar önce yerleşir (yani yerlerini KAPAR) ve kendi
  // aralarında da normal elenirler. Böylece `anilan` gerçekten koordinatöre
  // tarif ettiğim şey oluyor — ÖNCELİK YÜKSELTİCİ, muafiyet değil.
  var yerlesenSehir = [], anilanSehir = [], yaklasanSehir = [], asgariSehir = [];
  // ═══════════════════════════════════════════════════════════════════════
  // 🔴 GÖRÜNMEYEN ŞEHİR ELENİR — ölçülmüş darboğaz.
  // Canlı ölçüm: `sehirGuncelle` 318-716 ms sürüyordu ve 2900 şehrin
  // HEPSİNİ dolaşıyordu — ekranda bir avuç görünürken.
  // Pencere + %60 pay dışındaki şehir için:
  //   · dönem taraması yapılmaz (şehir başına O(dönem) döngü)
  //   · DOM'a dokunulmaz
  // ⚠️ AMA EKLİ OLANLAR KALDIRILIR: pencereden çıkan bir işaret ekranda
  //   asılı kalırsa, kaydırdıkça hayalet birikir. Eleme "unutmak" değil
  //   "temizleyip geçmek" olmalı.
  // ⚠️ Pay %60: kamera hareket ederken kenardan girecek şehirler hazır
  //   olsun diye. Sayı ÖLÇÜLMEDİ — dar gelirse işaretler geç belirir,
  //   geniş gelirse kazanç azalır. Gözle ayarlanacak.
  // 📌 Ve bu bir GÖRÜNÜM eleme, VERİ eleme DEĞİL: `sehirler` dizisi ve
  //   `kayitlar` dokunulmadan duruyor; yalnız o an ÇİZİLMEYECEK olanın
  //   hesabı atlanıyor.
  var _gp = null;
  try {
    var _b = harita.getBounds();
    var _dx = (_b.getEast() - _b.getWest()) * 0.6;
    var _dy = (_b.getNorth() - _b.getSouth()) * 0.6;
    _gp = { b: _b.getWest() - _dx, d: _b.getEast() + _dx,
            g: _b.getSouth() - _dy, k: _b.getNorth() + _dy };
  } catch (e) { _gp = null; }        // harita hazır değilse eleme YOK

  sehirOncelik.forEach(function (mi) {
    var m = sehirler[mi];
    // ⚠️ Koordinat `m.s`te, `m`de DEĞİL — tarayıcıda doğrulandı.
    // İlk yazımda `m.lon` yazmıştım: `undefined` olduğu için koşul hep
    // yanlış çıkacak ve eleme SESSİZCE HİÇ ÇALIŞMAYACAKTI. Kod koşardı,
    // denetim temiz derdi, kazanç sıfır olurdu.
    // 📌 `§11`: sessiz atlama, yanlış sonuçtan zor bulunur — yanlış sonuç
    // bir sayı gösterir, sessiz atlama HİÇBİR ŞEY göstermez.
    var _sk = m.s;
    if (_gp && _sk && (_sk.lon < _gp.b || _sk.lon > _gp.d
                       || _sk.lat < _gp.g || _sk.lat > _gp.k)) {
      if (m.ekli) { m.mk.remove(); m.ekli = false; }
      return;
    }
    var aktif = null;
    for (var i = 0; i < m.kayitlar.length; i++) {
      var r = m.kayitlar[i];
      if (r.fi <= t && t < r.ti) { aktif = r; break; }
    }
    // 🔴 GEÇİCİ İŞARET KAPISI KALDIRILDI (kullanıcı kararı a).
    // Eskiden buradaydı ve şöyleydi:
    //     if (aktif && m.gecici && t >= aktif.fi+YONTEM_SURE && !anilan[mi])
    //         aktif = null;
    // Yani 846 işaretin (%87,7) görünürlüğü OLAY eksenine bağlıydı: penceresi
    // kapanan işaret ancak o anki bir madde onu anıyorsa görünürdü. Kullanıcı
    // katmanların bağımsız olmasını istedi; artık görünürlüğü yakınlaştırma ve
    // çakışma belirliyor, `anilan` ise aşağıda ÖNCELİK YÜKSELTİCİ olarak duruyor.
    if (!aktif) {
      if (m.ekli) { m.mk.remove(); m.ekli = false; }
      return;
    }

    // ⚠️ ZAMANLA SÖNEN ÖNEM (kullanıcı, hatalar 11 madde 20):
    //   "sene 1800 olmuş hâlâ Söğüt Domaniç Karacahisar filan gibi
    //    yerleşimlerin haritada görünmesine gerek yok. Bu tarihî yerler etkisi
    //    geçtiği zaman, meselesi bittiği zaman haritadan kaldırılmalı genel
    //    kural olarak. Pelekanon hâlâ haritada görünüyor... ama tabii ki
    //    İstanbul Belgrad Bükreş Budin Kudüs Kahire gibi isimler sürekli
    //    kalabilir."
    //
    // Kök sebep VERİDEYDİ ve ölçüldü: Söğüt `g:3` — yani İstanbul, Bursa,
    // Edirne ile AYNI en üst katmanda; Karacahisar ve Pelekanon `g:2`.
    // Kuruluş devrinde doğruydu ama `g` alanının ZAMAN BOYUTU YOK — `m:`
    // alanının aynı kusuru (MIMARI §3.4).
    //
    // Şema değiştirmeden çözüm: isteğe bağlı `go:` alanı (önemin söndüğü gün).
    // O günden sonra işaret bir katman düşer; ikinci bir eşik geçilirse
    // tamamen geçici sayılır. Alan yoksa davranış eskisi gibi.
    var d = aktif.d;
    if (m.go && t >= m.go) d = Math.max(1, d - 2);
    // Maddede adı geçen yer, uzaklaşınca da görünür: olay anlatılırken okuyucunun
    // "nerede?" sorusunu cevaplamak zoom kademesinden önce gelir. `go:` sönmesini
    // de geçersiz kılar — Pelekanon 1329'da anlatılırken görünmeli, 1800'de değil.
    // p4/H-0013: "şimdiki" (anilan) her zaman "yaklaşan"dan daha güçlü — aynı
    // şehir ikisine de düşerse (art arda iki maddede geçiyorsa) önizleme
    // damgası yanlış okunur ("bu şimdi mi oldu"), o yüzden anilan öncelikli.
    var oncedenGoruluyordu = d >= zoomEsigi();
    var yalnizYaklasan = false;
    if (anilan[mi]) {
      d = Math.max(d, 2);
    } else if (yaklasan[mi]) {
      d = Math.max(d, 2);
      yalnizYaklasan = !oncedenGoruluyordu;   // sırf önizleme yüzünden mi görünüyor
    }
    // p2/H-0010 (koordinatör, 3 Ağustos) — "ASGARÎ İŞARETÇİ". Ölçüldü:
    // yerleşimlerin %82'si (1324/1615) `g:0` — yani bugünkü kural DIŞI
    // değil KURALIN KENDİSİ. Sebte, Melilla, Balaklava, Yalta, Sudak gibi
    // küçük ama gerçek yerler bu yüzden z≥5.2'ye kadar TAMAMEN görünmezdi.
    // İki seçici ölçüt ölçüldü ve İKİSİ DE ELENDİ (oturumlar/ASGARI-
    // ISARETCI-OLCUM.md): tur+kırılma → 534 aday (çok gevşek); kronolojide
    // anılma sayısı → 8 örneğin 6'sı hiç anılmıyor (ölçüt "önemi" değil
    // "veri eksikliğini" ölçüyor). ⇒ SEÇİCİ BİR ÖLÇÜT YOK, o yüzden ayrım
    // İDDİA EDİLMİYOR: `g:0` olan HER yerleşim eşit, isimsiz, soluk bir
    // nokta olarak HER zoomda görünür. Öncelik sırası (`sehirOncelik`)
    // zaten g:0'ı en sona koyuyor, çakışma elemesi normal şehirleri asla
    // itmez — aynı "gelecek işaretler listenin sonunda" deseni
    // (p4/H-0013), üçüncü kullanımı.
    var asgariMi = false;
    if (d < zoomEsigi()) {
      if (m.gecici) {
        asgariMi = true;
      } else {
        if (m.ekli) { m.mk.remove(); m.ekli = false; }
        return;
      }
    }

    var sinif = "sehir d" + d + (asgariMi ? " asgari" : "") +
                (osmanliBaskentMi(m.s.ad, t) && d >= 3 ? " baskent" : "") +
                (yaklasan[mi] && !anilan[mi] ? " yaklasan" : "");
    if (m.ic.className !== sinif) m.ic.className = sinif;
    // Pencere içindeyse: ediniliş yöntemi simgesi (⚔ ♜ 📜 🤝) ve kale ise 🏰.
    // Pencere dışında ikisi de kalkar — kalıcı simge bırakmıyoruz.
    var pencerede = t < aktif.fi + YONTEM_SURE;
    var simge = pencerede
      ? (m.kale ? "🏰" : "") + (aktif.y ? YONTEM_SIMGE[aktif.y] || "" : "")
      : "";
    // p4/H-0008 — ediniliş simgesi boşsa (mülkiyet o an değişmiyor) ve andığı
    // madde savaş türündeyse, aynı yuvada savaş simgesi çıkar. İkisi aynı anda
    // olmaz: mülkiyet değişimi zaten daha somut bir olgu, öncelik onda.
    var simgeBaslik = "";
    if (!simge && savasSimgesi[mi]) { simge = savasSimgesi[mi].s; simgeBaslik = savasSimgesi[mi].b; }
    if (m.yontemEl.textContent !== simge) m.yontemEl.textContent = simge;
    if (m.yontemEl.title !== simgeBaslik) m.yontemEl.title = simgeBaslik;
    // Fetih tarihi rozeti: yalnız `fethedilen:` listesinde adı geçen şehirde.
    // ⚠️ Kutu ölçüsü GERÇEK DOM'dan okunuyor (ikinci geçiş), yani rozet
    // eklenince çakışma elemesi onu kendiliğinden hesaba katıyor — bugün
    // emoji yüzünden yaşadığımız "dar kutu" kusuru burada tekrarlanamaz.
    var frz = fetihTarihi[mi] || null;
    // İŞARET — üç anlam, üç ayrı glif:
    //   +  toprak KAZANILDI     −  toprak KAYBEDİLDİ
    //   →  toprak EL DEĞİŞTİRMEDİ, statüsü değişti (tâbi ↔ doğrudan)
    // ⚠️ Statü ne kazanç ne kayıp; +/− ile göstermek yanlış olurdu. Ok,
    // "aynı yerde kaldı ama başka bir şey oldu" demenin en kısa hâli.
    var ISARET = { kazanc: "+ ", kayip: "− ", dogrudan: "→ ", vasal: "→ " };
    var ftar = frz ? (ISARET[frz.yon] || "") + frz.t : "";
    if (m.fetihEl.textContent !== ftar) m.fetihEl.textContent = ftar;
    // Sınıf yalnız değiştiğinde yazılıyor: her karede className atamak
    // gereksiz yeniden boyama üretir.
    var fsin = "s-fetih" + (frz ? " " + frz.yon : "");
    if (m.fetihEl.className !== fsin) m.fetihEl.className = fsin;
    // ⚠️ Rozet çok küçük; kelime sığmıyor. Renk körlüğünde `+`/`−` ayrımı
    // kalıyor ama iki statü yönü aynı oku paylaşıyor — sözel karşılık
    // ipucunda duruyor.
    var YAZI = { kazanc: "Osmanlı'ya katıldı", kayip: "Osmanlı'dan çıktı",
                 dogrudan: "tâbilikten doğrudan idareye geçti",
                 vasal: "doğrudan idareden tâbiliğe geçti" };
    var ftit = frz ? m.s.ad + " — " + YAZI[frz.yon] + " (" + frz.t + ")" : "";
    if (m.fetihEl.title !== ftit) m.fetihEl.title = ftit;

    if (!m.ekli) { m.mk.addTo(harita); m.ekli = true; }
    // Eleme ikinci geçişe bırakılıyor (aşağıda). `anilan` olanlar elemeye HİÇ
    // girmiyor: madde anlatılırken "nerede?" sorusunun cevabı kalabalıktan önce
    // gelir. Bu, katman 5'in katman 3'e yaptığı ekleme.
    // p4/H-0013 — sözleşme: "gelecek işaretler öncelik listesinin EN SONUNDA."
    // Yalnız SIRF önizleme yüzünden görünür olanlar (`yalnizYaklasan`) sona
    // atılıyor; zaten kendi tier'iyle görünecek bir şehir (büyük merkez, ya da
    // aynı anda anılan) kendi doğal sırasında kalıyor — önizleme onu geri
    // ittirmiyor, yalnız üstüne kesikli/soluk rozeti biniyor.
    if (anilan[mi]) anilanSehir.push(m);
    else if (yalnizYaklasan) yaklasanSehir.push(m);
    else if (asgariMi) asgariSehir.push(m);
    else yerlesenSehir.push(m);
  });
  // Anılanlar başa, yaklaşanlar sona, asgarî işaretçiler EN sona: dördü de
  // `sehirOncelik` sırasını koruyor, yalnız gruplar bütün olarak öne/arkaya
  // alınıyor (p4/H-0013 sözleşmesi + p2/H-0010'un aynı deseni). Asgarî
  // yaklaşandan bile geride — "bir yer var" bilgisi "yakında bir şey
  // olacak" bilgisinden daha düşük öncelikli, ikisi çakışırsa yaklaşan kazanır.
  yerlesenSehir = anilanSehir.concat(yerlesenSehir).concat(yaklasanSehir).concat(asgariSehir);

  // ---- İKİNCİ GEÇİŞ: çakışma elemesi, GERÇEK DOM kutusuyla ----
  // 🔴 İLK SÜRÜM KUTUYU TAHMİN EDİYORDU VE DAR ÇIKIYORDU. Ölçüldü (1302):
  //     z5  25 DOM → 16 görünür (9 elendi)   ama ekranda hâlâ 4 çakışan çift
  //     z6 101 DOM → 21 görünür (80 elendi)  ama 6 çakışan çift
  //   Yani makine bağlıydı ve ateşliyordu — kutusu gerçeğinden dardı.
  //   Çakışanların hepsinde Söğüt·Domaniç·Karacahisar·Kulacahisar vardı:
  //   EMOJİ taşıyanlar (👑 🏰 ⭐). Emoji genişliği karakter oranından büyük.
  //
  // ⚠️ Ve düzeltmesi "emoji için pay ekle" DEĞİL. Genişlik altı ayrı CSS
  // kuralına bağlı: .s-ad puntosu d1/d2/d3'e göre, ayrıca #harita.uzak /
  // .cok-uzak sınıflarına göre, .baskent bir de ::after ile " ⭐" ekliyor,
  // .s-nokta boyu ve 4px gap da işin içinde. Bunu JS'te modellemek aynı
  // sayıyı iki yerde tutmaktır (§35) ve CSS her değiştiğinde SESSİZCE bayatlar.
  // ⇒ Tahmin tamamen kaldırıldı; kutu tarayıcıdan okunuyor.
  //
  // Tek reflow: bütün yazmalar (addTo/sınıf/simge) yukarıda bitti, okumalar
  // burada toplu yapılıyor. Marker başına ekle-ölç-kaldır yapılsaydı her
  // işaret için ayrı yerleşim hesabı tetiklenirdi.
  var kutular = [];
  for (var ki = 0; ki < yerlesenSehir.length; ki++) {
    kutular.push(yerlesenSehir[ki].ic.getBoundingClientRect());
  }
  var tutulan = [];
  for (var ci = 0; ci < yerlesenSehir.length; ci++) {
    var r = kutular[ci];
    // ⚠️ SIFIR KUTU SESSİZ BİR DELİK: `continue` eden işaret ne eleniyor ne de
    // sonrakileri engelliyor. Üç işaretin birden buraya düşmesi, gözlenen
    // tabloyu (dört çiftin dördü de Söğüt/Domaniç/Karacahisar) BİREBİR üretir.
    if (!r || !r.width) continue;   // henüz yerleşmemiş
    var carpti = false;
    for (var ti = 0; ti < tutulan.length; ti++) {
      var o = tutulan[ti];
      if (r.left < o.right && r.right > o.left &&
          r.top < o.bottom && r.bottom > o.top) { carpti = true; break; }
    }
    if (carpti) {
      var mm = yerlesenSehir[ci];
      if (mm.ekli) { mm.mk.remove(); mm.ekli = false; }
    } else {
      tutulan.push(r);
    }
  }
}

// ---------- Savaş yerleri (⚔) ve sefer okları ----------
// ⚠️ GENEL KURAL (kullanıcı): görsel işaret, maddenin olayı bitince kalkar.
// Eskiden her muharebe işareti 730 gün (iki yıl) ekranda kalıyordu; o sürede
// başka muharebeler de olunca işaretler üst üste biniyor ve harita okunmaz
// hale geliyordu (Pelekanon, Dimbos, Kulacahisar, Adranos, Karacahisar aynı
// anda). Artık işaret BİR SONRAKİ KRONOLOJİ MADDESİNE kadar görünür.
// Taban 60 gün: hızlı oynatmada gözden kaçmasın. Tavan 365 gün: kronolojide
// boşluk olan dönemlerde tek işaret ekranı kilitlemesin.
var SAVAS_PENCERE_TABAN = 60;
var SAVAS_PENCERE_TAVAN = 365;
function sonrakiOlayaKadar(gi) {
  var en = SAVAS_PENCERE_TAVAN;
  for (var i = 0; i < olaylar.length; i++) {
    var d = olaylar[i].gi - gi;
    if (d > 0 && d < en) en = d;
  }
  return Math.max(SAVAS_PENCERE_TABAN, en);
}
// Olay türüne göre simge (kullanıcı isteği):
//   meydan muharebesi -> iki kılıç, kuşatma -> şehrin üstünde küçük çember,
//   iç isyan -> ateş, deniz muharebesi -> çapa. Kuşatma/muharebe başarısızsa
//   simgenin üstüne kırmızı bir çarpı biner.
var SAVAS_TUR_SIMGE = { meydan: "⚔", kusatma: "◎", isyan: "🔥", deniz: "⚓",
                        antlasma: "📜" };
// 🔴 ANTLAŞMALAR DA İŞARETLENİR — 19 Ağustos 2026, `0023/H-0017`.
// Emre: *"karlofça anlaşması maddesinde karlofça kasabası haritada
// gösterilmiyor."* Sebep İKİ katmanlıydı ve tek başına biri yetmiyordu:
//   ① `ANTLASMALAR` kayıtlarında `lat`/`lon` HİÇ YOKTU
//   ② bu dizi YALNIZ `SAVASLAR`ı okuyordu — koordinat yazılsa bile
//      görülmeyecekti
// ⇒ Yalnız ①'i düzeltmek "veri yazdım ama ekranda yok" derdi; yalnız ②'yi
// düzeltmek hiçbir şey değiştirmezdi. `CLAUDE.md §11`in "iki uç da ölçülür"
// kuralının arayüz tarafı.
// 📜 glifi İCAT EDİLMEDİ: lejant (`app.js:1067`) zaten *"📜 Antlaşmayla
// alındı"* diyor — kullanıcının öğrendiği dil korundu.
var savasIsaretleri = (window.SAVASLAR || [])
  .concat((window.ANTLASMALAR || []).map(function (a) {
    return { t: a.t, ad: a.ad, tur: "antlasma", lat: a.lat, lon: a.lon,
             sonuc: "belirsiz", sure: a.sure };
  }))
  .filter(function (s) { return s.lat; })
  .map(function (s) {
    var tur = s.tur || "meydan";
    var dis = document.createElement("div");
    var ic = document.createElement("div");
    ic.className = "savas-isaret tur-" + tur + " " + (s.sonuc || "belirsiz");
    ic.innerHTML = '<span class="sv-ikon"></span><span class="sv-ad"></span>';
    ic.querySelector(".sv-ikon").textContent = SAVAS_TUR_SIMGE[tur] || "⚔";
    ic.querySelector(".sv-ad").textContent = s.ad;
    // Başarısız kuşatma / kaybedilen muharebe: simgenin üzerine çarpı
    if (s.sonuc === "yenilgi") ic.classList.add("basarisiz");
    dis.appendChild(ic);
    return { gi: gunIdx(s.t), sure: s.sure || 0, ekli: false,
             mk: new maplibregl.Marker({ element: dis, anchor: "center" })
                   .setLngLat([s.lon, s.lat]) };
  });

function savasGuncelle(t) {
  if (!haritaHazir) return;
  savasIsaretleri.forEach(function (m) {
    // Pencere ilk gösterimde hesaplanır: `olaylar` dizisi bu noktadan SONRA
    // tanımlandığı için kurulum anında okunamaz.
    if (!m.sure) m.sure = sonrakiOlayaKadar(m.gi);
    var goster = t >= m.gi && t < m.gi + m.sure;
    if (goster && !m.ekli) { m.mk.addTo(harita); m.ekli = true; }
    else if (!goster && m.ekli) { m.mk.remove(); m.ekli = false; }
  });

  // p3/H-0002 — kullanıcı: "Niğbolu seferinde metinler, semboller üst üste
  // binmiş, okunmuyor." Ölçüldü: savas-isaret hiç çakışma elemesinden
  // GEÇMİYORDU; sehirGuncelle'deki DOM tabanlı ikinci geçiş (satır ~1470)
  // yalnız şehir işaretlerine bakıyordu. Bir kuşatma/muharebe çoğunlukla TAM
  // O ŞEHRİN üstünde olduğu için sv-ikon + sv-ad, o şehrin s-nokta + s-ad'ının
  // birebir üstüne biniyordu — Niğbolu 1396'da hem "Niğbolu" şehir etiketi hem
  // "Niğbolu Savaşı" işareti aynı noktada.
  // ⇒ Aynı yöntem: gerçek DOM kutusu, şehir öncelikli (o zaten kendi elemesini
  // geçmiş durumda). Sonra savaş işaretleri KENDİ aralarında da elenir —
  // aynı haftada birden çok muharebe olduğunda (ör. sefer güzergâhı) onlar da
  // çakışabiliyordu.
  // 🔴 ODAKTAKİ MUHAREBE ELENMEZ — 19 Ağustos 2026, `0023/H-0012·15·16`.
  // Emre: *"salankamen bozgunu ve bunun gibi diğer bozgun ve muharebe
  // yerleri haritada işaretli değil."* Üçünün de (Salankamen · Ulaş ·
  // Zenta) `savaslar.js` kaydı ve koordinatı ZATEN VARDI ve `sure`
  // penceresi de sağlamdı (`sonrakiOlayaKadar` en az 60 gün döndürüyor).
  // ⇒ Geriye tek aday kalıyor: AŞAĞIDAKİ ELEME. Üçü de kasabaların tam
  // üstünde geçmiş muharebeler; şehir etiketi öncelikli olduğu için
  // muharebe işareti siliniyordu.
  //
  // ⚠️ VE BU ÖLÇÜLMEDİ, AÇIKÇA YAZIYORUM: bu oturumun tarayıcısında harita
  // hiç çizilmedi, o yüzden elemeyi ateşleyip göremedim.
  //
  // 🔴 SEBEBİ 24 AĞUSTOS'TA ÖLÇÜLDÜ VE BU NOT YANLIŞTI. Eski hâli
  // *"WebGL başlamıyor"* diyordu. OPUS HAZIR KITA 82 ölçtü:
  //     WebGL ÇALIŞIYOR — `harita.painter` kurulu, ANGLE/D3D11 bağlamı var
  //     requestAnimationFrame 29,5 saniyede 0 KARE  ← GERÇEK SEBEP
  //     setInterval(16ms) aynı sürede 10 tik — yani sayfa CANLI
  // Pano compositing yapmıyor ⇒ rAF hiç ateşlemiyor ⇒ MapLibre render
  // döngüsü dönmüyor ⇒ stylesheet işlenmiyor ⇒ `load` doğmuyor ⇒
  // `haritaHazir` hiç `true` olmuyor.
  //
  // 📌 VE FARK PRATİKTİR, KELİME OYUNU DEĞİL: *"WebGL yok"* cümlesi
  //    okuyanı **"bu makinede ölçülemez"** diye vazgeçirir. Gerçek sebep
  //    *"pano görünmüyor"* ise, panoyu görünür kılan HER ortamda ölçüm
  //    YAPILABİLİR — nitekim koordinatörün panosu 1280×800'e
  //    ayarlandığında gerçek sayılar geldi.
  //    ⇒ Yanlış bir teşhis, yanlış bir sayıdan kötüdür: sayı düzeltilir,
  //      teşhis ise ARAMAYI DURDURUR.
  //
  // Kural yine de değiştirildi, çünkü
  // ÖLÇÜMDEN BAĞIMSIZ OLARAK YANLIŞ: kullanıcı bir muharebe maddesini
  // okurken o muharebenin işareti, yanındaki şehir etiketine feda edilemez.
  // O anda ekranın KONUSU odur.
  // 📌 Eğer Emre koşudan sonra hâlâ görmüyorsa sebep bu DEĞİLMİŞ demektir
  // ve teşhis yeniden kurulur — bu satır o zaman da doğru kalır.
  var odakGi = (sonVurgulanan >= 0 && olaylar[sonVurgulanan])
    ? olaylar[sonVurgulanan].gi : null;
  var tutulan = [];
  var korunan = [];
  for (var mk0 = 0; mk0 < savasIsaretleri.length; mk0++) {
    var mp = savasIsaretleri[mk0];
    if (!mp.ekli || odakGi === null || mp.gi !== odakGi) continue;
    var pel = mp.mk.getElement();
    var pr = pel ? pel.getBoundingClientRect() : null;
    if (pr && pr.width) { korunan.push(pr); tutulan.push(pr); }
  }
  for (var si = 0; si < sehirler.length; si++) {
    if (!sehirler[si].ekli) continue;
    var sr = sehirler[si].ic.getBoundingClientRect();
    if (sr && sr.width) tutulan.push(sr);
  }
  for (var mi2 = 0; mi2 < savasIsaretleri.length; mi2++) {
    var mm = savasIsaretleri[mi2];
    if (!mm.ekli) continue;
    if (odakGi !== null && mm.gi === odakGi) continue;   // odaktaki: dokunma
    var el = mm.mk.getElement();
    var r = el ? el.getBoundingClientRect() : null;
    if (!r || !r.width) continue;
    var carpti = false;
    for (var ti = 0; ti < tutulan.length; ti++) {
      var o = tutulan[ti];
      if (r.left < o.right && r.right > o.left &&
          r.top < o.bottom && r.bottom > o.top) { carpti = true; break; }
    }
    if (carpti) { mm.mk.remove(); mm.ekli = false; }
    else { tutulan.push(r); }
  }
}

// ---------- Antlaşma devirleri: taralı alanlar ----------
// Kullanıcı kuralı: kaybedilen toprak, OSMANLI KIRMIZISI ile ALICININ RENGİ
// çapraz taralı gösterilir; böylece "burası kaybedildi" ile "kim aldı" tek
// bakışta okunur. Desen 8×8 piksellik bir karo; MapLibre onu döşüyor.
var DEVIRLER = window.DEVIRLER || [];
var OSMANLI_KIRMIZI = [142, 11, 34];     // #8e0b22

function renkAyir(hex) {
  var h = String(hex).replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  var n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function devirDesenleriKur() {
  var K = 8;                                    // karo kenarı
  DEVIRLER.forEach(function (a) {
    a.alicilar.forEach(function (al) {
      var ad = "devir-" + al.id;
      if (harita.hasImage && harita.hasImage(ad)) return;
      var c = renkAyir(al.renk);
      var veri = new Uint8Array(K * K * 4);
      for (var y = 0; y < K; y++) {
        for (var x = 0; x < K; x++) {
          // çapraz şerit: (x+y) mod 8 < 4 → Osmanlı kırmızısı, değilse alıcı
          var osm = ((x + y) % K) < K / 2;
          var r = osm ? OSMANLI_KIRMIZI : c;
          var i = (y * K + x) * 4;
          veri[i] = r[0]; veri[i + 1] = r[1]; veri[i + 2] = r[2]; veri[i + 3] = 255;
        }
      }
      harita.addImage(ad, { width: K, height: K, data: veri });
    });
  });
}

// Devir katmanı yalnız antlaşma maddesinin penceresinde görünür — savaş
// işaretleriyle aynı kural (bir sonraki kronoloji maddesine kadar, taban 60
// tavan 365 gün). Aksi halde tarama haritayı kalıcı olarak kirletirdi.
function devirGuncelle(t) {
  if (!haritaHazir || !DEVIRLER.length) return;
  var fs = [];
  for (var i = 0; i < DEVIRLER.length; i++) {
    var a = DEVIRLER[i];
    if (a.gi === undefined) a.gi = gunIdx(a.t);
    if (a.sure === undefined) a.sure = sonrakiOlayaKadar(a.gi);
    if (t < a.gi || t >= a.gi + a.sure) continue;
    a.alicilar.forEach(function (al) {
      fs.push({ type: "Feature",
                properties: { desen: "devir-" + al.id, renk: al.renk, alici: al.ad },
                geometry: { type: "MultiPolygon", coordinates: al.parca } });
    });
  }
  harita.getSource("devir").setData({ type: "FeatureCollection", features: fs });
  devirLejanti(fs);
}

// Taralı alan tek başına anlamsız: hangi renk hangi ülke, yazmak şart.
function devirLejanti(fs) {
  var el = document.getElementById("devir-lejant");
  if (!el) {
    el = document.createElement("div");
    el.id = "devir-lejant";
    el.className = "devir-lejant";
    document.getElementById("harita").appendChild(el);
  }
  if (!fs.length) { el.style.display = "none"; lejantYerlestir(); return; }
  el.style.display = "";
  el.innerHTML = "<b>Antlaşmayla devredilen</b>" + fs.map(function (f) {
    return '<span><i style="background:linear-gradient(45deg,#8e0b22 0 25%,' +
           f.properties.renk + ' 25% 50%,#8e0b22 50% 75%,' +
           f.properties.renk + ' 75% 100%);background-size:8px 8px"></i> ' +
           f.properties.alici + "</span>";
  }).join("");
  lejantYerlestir();
}

// ---------- İşgal: taralı ve SÜREKLİ alanlar ----------
// Veri henüz üretilmedi; katman boş diziyle sağlam çalışıyor. Üretici
// arac/uret_devirler.py'ye eklenecek (dosya bende). Beklenen biçim:
//   window.ISGALLER = [{ id:"avusturya", ad:"Avusturya-Macaristan",
//                        renk:"#c8a24a", f:"1878-07-13", t:"1908-10-05",
//                        sahipRenk:"#8e0b22", parca:[...MultiPolygon...] }]
// f/t dahil-hariç: t günü artık işgal YOK (ilhak ya da tahliye o gün olur).
// sahipRenk verilmezse Osmanlı kırmızısı varsayılır.
//
// ⚠️ Boş dizi kasıtlı: data/olaylar_ek8.js vakasında dosya index.html'de
// yazılıydı ama git'e eklenmemişti ve 4 commit boyunca 404 verdi; `|| []`
// deseni sayesinde harita çökmedi, sadece o veri görünmedi. Aynı korumayı
// burada da baştan kuruyorum.
var ISGALLER = window.ISGALLER || [];

function isgalDesenleriKur() {
  var K = 8;
  ISGALLER.forEach(function (ig) {
    var ad = "isgal-" + ig.id;
    if (harita.hasImage && harita.hasImage(ad)) return;
    var c = renkAyir(ig.renk);
    var s = ig.sahipRenk ? renkAyir(ig.sahipRenk) : OSMANLI_KIRMIZI;
    var veri = new Uint8Array(K * K * 4);
    for (var y = 0; y < K; y++) {
      for (var x = 0; x < K; x++) {
        // Devir deseni (x+y) ile SAĞA yatık; işgal (x-y) ile SOLA yatık.
        // Ayna simetrisi bilerek: iki tarama yan yana düştüğünde hangisinin
        // "antlaşmayla gitti" hangisinin "işgal edildi" olduğu tek bakışta
        // ayrılıyor. Ayrıca işgalci şeridi 8'de 3 — daha ince, çünkü işgal
        // hukuken geçici; düz mülkiyet gibi ağır okunmamalı.
        var isgalci = ((x - y + K) % K) < 3;
        var r = isgalci ? c : s;
        var i = (y * K + x) * 4;
        veri[i] = r[0]; veri[i + 1] = r[1]; veri[i + 2] = r[2]; veri[i + 3] = 255;
      }
    }
    harita.addImage(ad, { width: K, height: K, data: veri });
  });
}

function isgalGuncelle(t) {
  if (!haritaHazir || !ISGALLER.length) return;
  var fs = [];
  for (var i = 0; i < ISGALLER.length; i++) {
    var ig = ISGALLER[i];
    if (ig.gi === undefined) ig.gi = gunIdx(ig.f);
    if (ig.gs === undefined) ig.gs = gunIdx(ig.t);
    if (t < ig.gi || t >= ig.gs) continue;      // devirden farkı: sabit aralık
    fs.push({ type: "Feature",
              properties: { desen: "isgal-" + ig.id, renk: ig.renk, isgalci: ig.ad },
              geometry: { type: "MultiPolygon", coordinates: ig.parca } });
  }
  harita.getSource("isgal").setData({ type: "FeatureCollection", features: fs });
  isgalLejanti(fs);
}

// Taralı alan tek başına anlamsız; devirde olduğu gibi burada da kim işgal etti
// yazmak şart. Ayrı kutu, çünkü ikisi aynı anda sahnede olabilir (1878: Berlin
// devirleri + Bosna işgali aynı gün).
function isgalLejanti(fs) {
  var el = document.getElementById("isgal-lejant");
  if (!el) {
    el = document.createElement("div");
    el.id = "isgal-lejant";
    el.className = "devir-lejant isgal-lejant";
    document.getElementById("harita").appendChild(el);
  }
  if (!fs.length) { el.style.display = "none"; lejantYerlestir(); return; }
  el.style.display = "";
  el.innerHTML = "<b>İşgal altında</b>" + fs.map(function (f) {
    return '<span><i style="background:linear-gradient(-45deg,#8e0b22 0 62%,' +
           f.properties.renk + ' 62% 100%);background-size:8px 8px"></i> ' +
           f.properties.isgalci + "</span>";
  }).join("");
  lejantYerlestir();
}

// ---------- Bağlamsal lejant yığını ----------
// Sol altta artık ÜÇ kutu var: devir · işgal · harekât. Üçü de bağlamsal —
// yalnız o tarihte anlamı olan görünüyor.
//
// ⚠️ Ofset matematiği eskiden isgalLejanti'nin İÇİNDEYDİ ve yalnız İKİ kutu
// varsayıyordu: "devir açıksa onun yüksekliği + 42, değilse 34". Üçüncü kutu
// eklenince bu yaklaşım kırılıyor — her kutunun kendisinden AŞAĞIDAKİ bütün
// görünür kutuların toplamını bilmesi gerekiyor, tek bir komşusunu değil.
// Bu yüzden hesap tek yere alındı; kutular yalnız "ben açığım/kapalıyım" der.
// 📌 Aynı ders: iki yerde duran hesap bayatlar ve hangisinin bayat olduğu
// bilinmez (OGRENILENLER §35'in yerleşim hâli).
var LEJANT_YIGIN = ["devir-lejant", "isgal-lejant", "sefer-lejant"];
function lejantYerlestir() {
  var alt = 34;
  for (var i = 0; i < LEJANT_YIGIN.length; i++) {
    var e = document.getElementById(LEJANT_YIGIN[i]);
    if (!e || e.style.display === "none" || !e.innerHTML) continue;
    e.style.bottom = alt + "px";
    alt += e.offsetHeight + 8;
  }
}

// ⚠️ GENEL KURAL — HAREKET TİPOLOJİSİ (kullanıcı kararı, hatalar 10-11 sonrası):
//   "sefer, geri çekilme, tahliye, kuşatma, bozgun, muharebe... bu ve bunun gibi
//    farklı olaylara farklı emojiler üretebiliriz. iç isyan filan, geri çekilme
//    ile taarruz etme okları, ya da Osmanlı donanmasının götürülüp Mısır'a teslim
//    edilmesi oku, ya da Abdülaziz'in seyahati oku aynı tarzda olmasın,
//    farklılıkları olsun. kazançlı sefer ile bozgun sonuçlu seferin ayrı
//    gösterimleri olsun."
//
// Bu ikisi ayrı eksende çözülüyor, çünkü ikisi ayrı soru:
//   HAREKETİN CİNSİ  → ok başı glifi + çizgi deseni   (tur alanı)
//   HAREKETİN SONUCU → renk doygunluğu + sonuç rozeti (sonuc alanı)
// Böylece "kazançlı sefer" ile "bozgunla biten sefer" aynı glifi taşır ama
// farklı okunur; "geri çekilme" ile "taarruz" ise glif düzeyinde ayrılır.
//
// Veri tarafı geriye dönük uyumlu: tur/sonuc yoksa eski davranış (dolu ok,
// kesikli çizgi) aynen sürüyor — mevcut 50 kaydın hiçbiri bozulmuyor.
var HAREKET = {
  sefer:    { glif: "➤", desen: [1.5, 1.5], kalinlik: 2.6, ad: "sefer" },
  cekilme:  { glif: "⇤", desen: [5, 4],     kalinlik: 2.2, ad: "geri çekilme" },
  tahliye:  { glif: "⇥", desen: [5, 4],     kalinlik: 2.2, ad: "tahliye" },
  akin:     { glif: "⇢", desen: [1, 2],     kalinlik: 1.8, ad: "akın" },
  kusatma:  { glif: "⊗", desen: [0.5, 2],   kalinlik: 2.4, ad: "kuşatma" },
  deniz:    { glif: "⚓", desen: [4, 3],     kalinlik: 2.4, ad: "deniz harekâtı" },
  teslim:   { glif: "⇲", desen: [2, 3],     kalinlik: 2.0, ad: "teslim / devir" },
  seyahat:  { glif: "❖", desen: [1, 3],     kalinlik: 1.6, ad: "seyahat" },
  isyan:    { glif: "✹", desen: [0.5, 1.5], kalinlik: 2.0, ad: "isyan" }
};
// Sonuç eksenі: aynı hareket kazançla da bozgunla da bitebilir.
var SONUC_ROZET = { zafer: "▲", yenilgi: "▼", belirsiz: "" };

// p4/H-0012 — kullanıcı: "isyan yayılma gösterimi: küçük ateş simgeleri,
// yayıldığı şehirlere oklarla bağlanmış." Tasarımı ve sınırlarını kullanıcı
// KENDİSİ koydu: taralı alan KULLANILAMAZ (işgale ayrılmış), farklı renk
// KULLANILAMAZ (ayrı devlet gibi görünür).
// 🔴 YENİ VERİ DOSYASI AÇILMADI — ikisi de zaten VARDI, birleştirilmediler:
//   ateş simgesi:  `window.SAVASLAR`da `tur:"isyan"` zaten 🔥 üretiyor
//                  (SAVAS_TUR_SIMGE, savasIsaretleri) — Şahkulu (Teke) ve
//                  (Sivas) ayrı ayrı zaten yanıp sönüyordu.
//   ok + desen:    `HAREKET.isyan` (glif "✹") ZATEN TANIMLI ama hiçbir
//                  `window.SEFERLER` kaydı `tur:"isyan"` kullanmıyordu — ölü
//                  kapasiteydi (YONTEM_SIMGE'nin `ilhak`/`miras`ı gibi).
// ⇒ Köprü: aynı isim önekini (" (" öncesi) paylaşan `tur:"isyan"` SAVASLAR
// kayıtları tarihe göre sıralanıp ardışık ikili ok'a çevriliyor. Bugün bu
// desene uyan TEK zincir Şahkulu (Teke → Sivas); veri değişirse (yeni bir
// çok-noktalı isyan eklenirse) kod ELLE DOKUNULMADAN yeni oku üretir.
function isyanYayilmaUret() {
  var grup = {};
  (window.SAVASLAR || []).forEach(function (s) {
    if (s.tur !== "isyan" || !s.lat || s.ad.indexOf(" (") < 0) return;
    var kok = s.ad.split(" (")[0];
    (grup[kok] = grup[kok] || []).push(s);
  });
  var out = [];
  Object.keys(grup).forEach(function (kok) {
    var nk = grup[kok];
    if (nk.length < 2) return;
    nk.sort(function (a, b) { return a.t < b.t ? -1 : a.t > b.t ? 1 : 0; });
    for (var i = 1; i < nk.length; i++) {
      var a = nk[i - 1], b = nk[i];
      out.push({
        fi: gunIdx(b.t), ti: gunIdx(b.t) + (b.sure || 400),
        yol: [[a.lon, a.lat], [b.lon, b.lat]], tur: "isyan",
        ad: kok + " yayılıyor", renk: "#bf360c", sonuc: b.sonuc || "belirsiz"
      });
    }
  });
  return out;
}

var seferler = (window.SEFERLER || []).concat(isyanYayilmaUret()).map(function (s) {
  var son = s.yol[s.yol.length - 1], onceki = s.yol[s.yol.length - 2];
  // ok başının dönüşü: son parçanın ekran yönü (kuzeyden saat yönünde derece)
  var dx = (son[0] - onceki[0]) * Math.cos(son[1] * Math.PI / 180);
  var dy = son[1] - onceki[1];
  var aci = Math.atan2(dx, dy) * 180 / Math.PI;
  var h = HAREKET[s.tur] || HAREKET.sefer;
  var el = document.createElement("div");
  var ic = document.createElement("div");
  ic.className = "sefer-ok tur-" + (s.tur || "sefer");
  ic.textContent = h.glif;
  el.appendChild(ic);
  // Sonuç rozeti ok başının yanına, DÖNMEDEN konur — döndürülürse ▲/▼ anlamını
  // kaybeder. Nötr sonuçta hiç eklenmez ki kalabalık yapmasın.
  var rozet = SONUC_ROZET[s.sonuc || "belirsiz"];
  if (rozet) {
    var rz = document.createElement("div");
    rz.className = "sefer-rozet rozet-" + s.sonuc;
    rz.textContent = rozet;
    el.appendChild(rz);
  }
  // ⚠️ Ok'un ADI yoktu. Bir sefer birkaç kronoloji maddesi boyunca sürdüğü için
  // (Katalan Kumpanyası 1303-09 → 1305-06, arada Sakarya seferi maddesi var)
  // kullanıcı okun neye ait olduğunu anlayamıyordu. Ad ok başına yazılıyor;
  // dönüş ok'a uygulandığı için yazı ayrı bir işaretle, dönüşsüz konuyor.
  // Taraf rengi: Osmanlı seferi koyu kırmızı-siyah, düşman seferi soğuk renk.
  var renk = s.renk || (s.taraf === "dusman" ? "#1b7a3f" : "#2b1006");
  ic.style.color = renk;
  // `isyanYayilmaUret()` fi/ti'yi hazır veriyor (SAVASLAR'ın kendi `sure`si
  // üstünden); window.SEFERLER hâlâ f/t METİN tarihinden hesaplatıyor.
  var fi = s.fi !== undefined ? s.fi : gunIdx(s.f);
  // 🔴 24 Ağustos 2026 — `+ 45` KALDIRILDI (0031/H-0012).
  // Emre: *"Timur'un İzmir seferi BİR SONRAKİ MADDEDE kesikli çizgi ile
  // betimlenmiş; bu çizgiyi AİT OLDUĞU KRONOLOJİ MADDESİYLE senkronize
  // etmeli."* Kök sebebi TİMUR SEFERLERİ oturumu buldu: her çizgi kendi
  // `t`sinden 45 gün daha ekranda kalıyordu — İzmir seferi 1402-12-14'te
  // biter, çizgi ~1403-01-28'e kadar durup ardındaki maddelere taşardı.
  // 61 SEFERLER kaydının HEPSİNİ etkiliyordu.
  // 📌 Ve bu sayı, aşağıdaki `_fiKirpik` yorumunun MAHKÛM ETTİĞİ şeyin
  //    ta kendisiydi: *"sabit bir gün tavanı (180 gibi) koysaydık O
  //    SAYIYI SAVUNAMAZDIK."* Yorum yazılmış, kardeş satır düzeltilmemiş.
  //    ⇒ Bir düzeltme, aynı kusurun BÜTÜN dallarında aranmalı — bugün
  //      bu dersin ikinci vakası (ilki `_varista`nın konumsuz dalı).
  var ti = s.fi !== undefined ? s.ti : gunIdx(s.t);
  return { fi: fi, ti: ti, ad: s.ad, yol: s.yol,
           // sonuc lejant için de lazım: rozet ancak sahnede o sonuçtan bir ok
           // varsa açıklanır (md.4.3 — açıklanmayan simge kalabalıktır).
           renk: renk, tur: (s.tur || "sefer"), sonuc: (s.sonuc || "belirsiz"),
           ekli: false,
           mk: new maplibregl.Marker({ element: el, anchor: "center", rotation: aci - 90 })
                 .setLngLat(son),
           ad_mk: (function () {
             var a = document.createElement("div");
             a.className = "sefer-ad";
             a.textContent = s.ad;
             return new maplibregl.Marker({ element: a, anchor: "top" }).setLngLat(son);
           })() };
});

function seferGuncelle(t) {
  if (!haritaHazir) return;
  var cizgiler = [], turler = {}, sonuclar = {};
  seferler.forEach(function (m) {
    // 🔴 23 Ağustos, 0029/H-0004 — OK KENDİ ÇAPASINDAN ÖNCE BELİRMEZ.
    // Emre: *"katalan birliklerin anadolu seferi oku BİR OLAY ERKEN
    // çıkıyor."* Ölçüldü ve haklı:
    //     Katalan seferi  f:1303-09-01  t:1305-06-01
    //     kronoloji maddesi             1305-06-01
    //     ⇒ ok, kendi maddesinden 21 AY önce çizilmeye başlıyordu.
    // Sistemik: 61 seferin 52'sinde `f` ile `t` farklı.
    //
    // KURAL VERİDEN TÜRETİLDİ, SAYI UYDURULMADI: ok, çapasından
    // (`ti`nin dayandığı gün) ÖNCEKİ OLAYDAN daha erken belirmez.
    // Emre'nin ifadesi zaten bu — *"bir olay erken"*. Sabit bir gün
    // tavanı (180 gibi) koysaydık o sayıyı savunamazdık; bu kural
    // kullanıcının ADIM ADIM ilerleyişiyle ölçülüyor.
    // ⚠️ ÖDÜNLEŞME: uzun seferlerde ok artık seferin TAMAMI boyunca
    //    değil, çapasından itibaren görünür. Kaybedilen "seferi
    //    ilerlerken izlemek", kazanılan "ait olmadığı maddede
    //    görünmemek". Emre ikincisini istedi.
    // 🟢 ASIL ÇARE VERİDEDİR: bu seferlerin BAŞINDA kronoloji maddesi
    //    yok. *"Katalan Kumpanyası Anadolu'ya geçti (1303)"* diye bir
    //    madde olsaydı ok orada belirirdi ve bu kurala gerek kalmazdı.
    //    Altı sefer bir yıldan uzun ve altısının da başı maddesiz.
    if (m._fiKirpik === undefined) {
      m._fiKirpik = m.fi;
      try {
        var capa = m.ti;                       // pencerenin dayandığı gün
        var oncekiOlay = -Infinity;
        for (var oi = 0; oi < olaylar.length; oi++) {
          if (olaylar[oi].gi < capa && olaylar[oi].gi > oncekiOlay)
            oncekiOlay = olaylar[oi].gi;
        }
        if (isFinite(oncekiOlay)) m._fiKirpik = Math.max(m.fi, oncekiOlay);
      } catch (e) { /* olaylar hazır değil — kırpma yok, eski davranış */ }
    }
    // 🔴 VE SONU DA ÇAPASINA KIRPILIR — yukarıdaki kuralın ÖTEKİ UCU.
    // Ok, `t`sinden SONRAKİ İLK OLAYA kadar görünür; o olaya gelince
    // düşer. Sayı uydurulmuyor, KRONOLOJİDEN türüyor:
    //     _fiKirpik : çapadan ÖNCEKİ olay       (baş — 23 Ağustos)
    //     _tiKirpik : `t`den SONRAKİ ilk olay   (son — 24 Ağustos)
    // Sonraki olay yoksa (külliyatın sonu) `m.ti` olduğu gibi kalır.
    if (m._tiKirpik === undefined) {
      m._tiKirpik = m.ti;
      try {
        var sonraki = Infinity;
        for (var si = 0; si < olaylar.length; si++) {
          if (olaylar[si].gi > m.ti && olaylar[si].gi < sonraki)
            sonraki = olaylar[si].gi;
        }
        if (isFinite(sonraki)) m._tiKirpik = sonraki;
      } catch (e2) { /* olaylar hazır değil — kırpma yok, eski davranış */ }
    }
    var aktif = m._fiKirpik <= t && t < m._tiKirpik;
    if (aktif) {
      cizgiler.push({ type: "Feature", properties: { renk: m.renk, tur: m.tur },
                      geometry: { type: "LineString", coordinates: m.yol } });
      turler[m.tur] = (turler[m.tur] || 0) + 1;
      if (m.sonuc !== "belirsiz") sonuclar[m.sonuc] = 1;
      if (!m.ekli) { m.mk.addTo(harita); m.ad_mk.addTo(harita); m.ekli = true; }
    } else if (m.ekli) { m.mk.remove(); m.ad_mk.remove(); m.ekli = false; }
  });
  harita.getSource("seferler").setData({ type: "FeatureCollection", features: cizgiler });
  seferLejanti(turler, sonuclar);
}

// ---------- KORİDOR AĞI (menzil yolları) — ARAYÜZ KORİDOR, 16 Ağustos 2026 ----------
// Altyapı ⑤ veri olarak bitmişti ama `denetle_yayin.py` şunu diyordu:
// "ÜRETİLİYOR AMA ÇİZİLMİYOR". `§40`: veri doğru olabilir ama KULLANICI GÖRMÜYOR.
//
// 🔴 ÖLÇÜM — borç şartnamede yazılandan BÜYÜKTÜ ve küçültülmedi:
//   şartname   "koridor_halka2.js + dört kol daha app.js OKUMUYOR"
//   ölçüm      `grep -in koridor js/app.js` → SIFIR SONUÇ
//   ⇒ `koridor.js` index.html'de YILLARDIR bağlıydı ve HİÇ çizilmiyordu.
//   Yani iş "iki dosya bağla" değil, "katmanı SIFIRDAN yaz"dı.
//   📌 Bağlanmış olmak çizilmek değildir — bu, aynı gün `OLAYLAR_7A4170`
//   vakasında da ölçüldü (yükleniyor + denetim okuyor + ekranda YOK).
//
// 🔴 DOSYA ADI LİSTESİ TUTULMUYOR ve sebebi bugün ölçüldü: bu dosyanın
// kronoloji tarafındaki `/^OLAYLAR(_EK\d*)?$/` süzgeci "desen" görünümlü bir
// ELLE LİSTEYDİ ve yeni adlandırma kuralı gelince sessizce bayatladı.
// Buradaki süzgeç adlandırmadan bağımsız: `KORIDOR[_<ek>]_DUGUM/_KENAR`
// biçimindeki HER global bulunur. Altıncı kol bağlandığında bu satıra
// dokunmaya gerek YOK — ve bu sefer cümle bir varsayım taşımıyor, çünkü
// süzgeç kolun ADINI değil BİÇİMİNİ tanıyor.
var KORIDOR = {
  dugum: {}, kenar: [],
  atlanan: { dugum: 0, kenar: 0 },
  yama: { dosya: 0, dugum: 0, kenar: 0, eksik: 0, tanimsiz: [] },
  acik: false
};

// 🔴 YAMA OKUMA — KOORDİNATÖR KARARI (M-0675 ③), 16 Ağustos 2026.
// D kolu koordinatsız düğümlere koordinat buluyor ve Boğaz kenarını ekliyor.
// Yamalar AYRI dosyalarda ve AYRI bir şekilde geliyor:
//     window.KORIDOR_YAMA_<6hane> = { dugum:[…], kenar:[…], eksik:[…] }
//
// 🔴 NİÇİN AYRI BİR SÜZGEÇ GEREKTİ — ve bu, bu dosyada AYNI SINIFIN ÜÇÜNCÜSÜ:
//   ① OLAYLAR süzgeci `_EK<n>` ADINI varsayıyordu   → 4 madde görünmedi
//   ② koridor.js index.html'de bağlıydı, çizim YOKTU → yıllarca görünmedi
//   ③ koridor süzgeci `_DUGUM`/`_KENAR` BİÇİMİNİ varsayıyordu → yamaların
//      23 düğümü + Boğaz kenarı GÖRÜNMEYECEKTİ (ölçüldü: 3 globalin 0'ı)
// 📌 Ders: ①'i düzeltirken "ada değil BİÇİME bağla" demiştim; biçim de bir
//    varsayımmış. ⇒ *Bir varsayımı kaldırmak, onu bir kademe daha görünmez
//    yapmak olabilir.* Çare varsayımı yok etmek değil — TANIMADIĞINI SAYMAK.
function koridorYamaUygula(ham) {
  Object.keys(window).forEach(function (k) {
    if (!/^KORIDOR_YAMA_[A-Za-z0-9]+$/.test(k)) return;
    var y = window[k];
    // 🔴 TANIMADIĞIM ŞEKLİ SESSİZCE ELEMİYORUM — koordinatörün açık şartı.
    // `koridor_yama_f5c9a5.js` şu an hâlâ DÜZ DİZİ (+ ayrı `_EKSIK`), yani
    // karardan önceki şekil. Onu "idare edip" kabul etseydim göçün
    // yapılmadığı GÖRÜNMEZ olurdu — tam da bu dosyanın üç kez ısırıldığı yer.
    if (!y || Array.isArray(y) || typeof y !== "object"
        || (!Array.isArray(y.dugum) && !Array.isArray(y.kenar))) {
      KORIDOR.yama.tanimsiz.push(k + " (" + (Array.isArray(y) ? "DİZİ" : typeof y) + ")");
      return;
    }
    KORIDOR.yama.dosya++;
    (y.dugum || []).forEach(function (d) {
      if (!d || !d.id || d.lat == null || d.lon == null) return;
      var v = ham[d.id];
      if (v) {
        // Var olan düğüme KOORDİNAT DOLDUR — kaydın geri kalanını (kol, tip,
        // kaynak) korumak şart: yama yalnız eksik olanı verir, kimlik değil.
        if (v.lat == null || v.lon == null) {
          v.lat = d.lat; v.lon = d.lon;
          v._yama = d.kaynak || true;
          KORIDOR.yama.dugum++;
        }
      } else {
        ham[d.id] = { id: d.id, ad: d.ad || d.id, lat: d.lat, lon: d.lon,
                      kol: d.kol || [], kaynak: d.kaynak || "", _yama: d.kaynak || true };
        KORIDOR.yama.dugum++;
      }
    });
    KORIDOR.yama.kenar += (y.kenar || []).length;
    // `eksik`: koordinatı ARANIP BULUNAMAYAN düğümler. Çizilmez ama SAYILIR —
    // "aradım, yok" ile "bakmadım" ayrı şeylerdir ve ikincisi sessizdir.
    KORIDOR.yama.eksik += Array.isArray(y.eksik) ? y.eksik.length : 0;
  });
}

function koridorTopla() {
  // ① BÜTÜN düğümler ham haritaya — koordinatsızlar DAHİL, çünkü yama tam
  //    onlara koordinat yazacak. Önce eleyip sonra yamalamak imkânsızdı.
  var ham = {};
  Object.keys(window).forEach(function (k) {
    if (!/^KORIDOR(_[A-Za-z0-9]+)?_DUGUM$/.test(k) || !Array.isArray(window[k])) return;
    window[k].forEach(function (d) {
      if (!d || !d.id) return;
      // Aynı düğüm iki dosyada olabilir (Belgrad hem koridor.js'te hem halka2'de,
      // ikincisi `boyar:false` bağlantı ucu). Koordinatlı kayıt önceliklidir;
      // koordinatsız bir kayıt koordinatlının üstüne YAZILMAZ.
      var v = ham[d.id];
      if (!v) ham[d.id] = Object.assign({}, d);
      else if ((v.lat == null || v.lon == null) && d.lat != null && d.lon != null)
        ham[d.id] = Object.assign({}, d);
    });
  });

  // ② YAMALAR — koordinat doldurur, yeni düğüm ekler
  koridorYamaUygula(ham);

  // ③ Koordinatı OLANLAR çizilir; kalan SAYILIR (sessizce düşmez)
  Object.keys(ham).forEach(function (id) {
    var d = ham[id];
    if (d.lat == null || d.lon == null) { KORIDOR.atlanan.dugum++; return; }
    KORIDOR.dugum[id] = d;
  });

  // ④ Kenarlar: hem `_KENAR` globalleri hem yamaların `kenar` dizisi
  var kenarlar = [];
  Object.keys(window).forEach(function (k) {
    if (/^KORIDOR(_[A-Za-z0-9]+)?_KENAR$/.test(k) && Array.isArray(window[k]))
      kenarlar = kenarlar.concat(window[k]);
    else if (/^KORIDOR_YAMA_[A-Za-z0-9]+$/.test(k) && window[k]
             && !Array.isArray(window[k]) && Array.isArray(window[k].kenar))
      kenarlar = kenarlar.concat(window[k].kenar);
  });
  kenarlar.forEach(function (e) {
    var a = KORIDOR.dugum[e.u1], b = KORIDOR.dugum[e.u2];
    if (!a || !b) { KORIDOR.atlanan.kenar++; return; }   // ucu koordinatsız
    KORIDOR.kenar.push({
      e: e, a: a, b: b,
      fi: gunIdx(e.f || "1539-01-01"),
      ti: gunIdx(e.t || "1839-01-01")
    });
  });
}

function koridorKur() {
  koridorTopla();
  if (!KORIDOR.kenar.length) { console.log("Atlas: koridor ağı — veri YOK, katman kurulmadı."); return; }

  harita.addSource("koridor-kenar", { type: "geojson", data: bosVeri() });
  harita.addSource("koridor-dugum", { type: "geojson", data: bosVeri() });

  // ŞART ① KORİDOR SINIR DEĞİL, YOL.
  // Sınır çizgileri DÜZ ve kırmızı (#8e0b22 ailesi); motor hatları camgöbeği
  // ve turuncu KESİKLİ; veri sınırı gri-mavi uzun kesik. Koridor bunların
  // hiçbirine benzemesin diye NOKTALI (kısa nokta dizisi) ve KEHRİBAR seçildi —
  // ve `line-cap:"round"` ile noktalar yuvarlak, yani "menzil boncuğu" gibi
  // okunuyor. Ayrıca hepsinin ÜSTÜNDE çizilmiyor: gövde dolgularının üstünde
  // ama sefer oklarının altında kalır (aşağıdaki beforeId'siz sıra bunu verir).
  harita.addLayer({
    id: "koridor-kenar-cizgi", type: "line", source: "koridor-kenar",
    layout: { visibility: "none", "line-cap": "round", "line-join": "round" },
    paint: {
      "line-color": "#c8861a",
      // ana kol kalın, tali ince — veri `kalinlik` alanını zaten taşıyor
      "line-width": ["case", ["==", ["get", "kalinlik"], "ana"], 2.6, 1.6],
      "line-dasharray": [0.4, 2.2],
      "line-opacity": 0.95
    }
  });

  // ŞART ③ KAYNAKSIZ DURAK GÖRÜNÜR OLSUN.
  // Duraklara `kaynakli` bayrağı basılıyor ve gösterim ONA göre ayrışıyor:
  //   kaynaklı  → İÇİ DOLU kehribar daire
  //   kaynaksız → İÇİ BOŞ (beyaz) daire, kehribar çember
  // Yani "bu durak seçildi" bilgisi tıklamayı BEKLEMEDEN ekranda duruyor;
  // tıklanınca açılan kart da bunu cümleyle söylüyor (aşağıda).
  // ⚠️ `["case", ["get","kaynakli"], …]` YAZMADIM ve sebebi ölçülemedi, o yüzden
  // riske girilmedi: MapLibre'nin ifade denetçisi `case` koşulunda BOOLEAN ister,
  // `["get", …]` ise `value` tipi döndürür — bazı sürümlerde "Expected boolean
  // but found value" ile addLayer'ı DÜŞÜRÜR. Bu oturumda tarayıcı paneli
  // görüntülenmediği için harita stili hiç yüklenmedi ve `addLayer` GERÇEKTEN
  // KOŞULAMADI ⇒ hangi davranışın geçerli olduğunu ÖLÇEMEDİM.
  // `["==", …, true]` her sürümde boolean döndürür ve iki hâlde de doğrudur.
  // 📌 Ölçemediğim bir şeyi "herhalde çalışır" diye bırakmak, bu projenin
  // "ölçülemedi ≠ temiz" kuralının tam ihlali olurdu.
  harita.addLayer({
    id: "koridor-dugum-daire", type: "circle", source: "koridor-dugum",
    layout: { visibility: "none" },
    paint: {
      "circle-radius": ["case", ["==", ["get", "kaynakli"], true], 4.2, 4.6],
      "circle-color": ["case", ["==", ["get", "kaynakli"], true], "#c8861a", "#fffaf0"],
      "circle-stroke-color": "#7a4f0c",
      "circle-stroke-width": 1.4,
      "circle-opacity": 0.95
    }
  });

  var koridorPopup = new maplibregl.Popup({ closeButton: true, closeOnClick: true, maxWidth: "320px", className: "koridor-popup" });
  harita.on("click", "koridor-dugum-daire", function (ev) {
    var p = ev.features[0].properties;
    var govde = "<b>" + p.ad + "</b><br><i>menzil durağı — " + (p.kol || "") + "</i>";
    // ŞART ③: kullanıcı neyin KESİN neyin ÇIKARIM olduğunu görmeli.
    if (!p.kaynakli) {
      govde += "<p class=\"koridor-uyari\">⚠️ <b>Bu durak SEÇİLMİŞTİR, kaynaktan alınmamıştır.</b> " +
        "TDV'nin menzil maddesi ana kolları sayar, <b>duraklarını saymaz</b>. " +
        "Durak, verideki mevcut yerleşimlerden ve bilinen ordu yolu hattından seçildi; " +
        "uydurulmadı ama <b>seçildi</b> — ikisi ayrı şeydir.</p>";
    } else {
      govde += "<p>Kaynak: " + String(p.kaynak).replace(/</g, "&lt;") + "</p>";
    }
    koridorPopup.setLngLat(ev.lngLat).setHTML(govde).addTo(harita);
  });
  harita.on("click", "koridor-kenar-cizgi", function (ev) {
    var p = ev.features[0].properties;
    var govde = "<b>" + p.baslik + "</b><br><i>menzil hattı — " + (p.kanat || "") + "/" + (p.kol || "") + "</i>";
    if (p.saat != null && p.saat !== "") {
      // ⚠️ "ölçüldü" ile "türetildi" AYRI: birincisi arşivden okunmuş saat,
      // ikincisi kuş uçuşu km / 4,25 km-sa kalibrasyonuyla HESAPLANMIŞ.
      // Veri bu ayrımı `saat_cinsi` ile taşıyor ve ekranda da ayrı duruyor.
      govde += "<p>≈ " + p.saat + " saat" +
        (p.saat_cinsi === "olculdu" ? " <b>(arşivden ölçüldü)</b>"
                                    : " <i>(kuş uçuşu km'den türetildi — ölçülmüş değil)</i>") + "</p>";
    } else {
      govde += "<p><i>Saat mesafesi bulunamadı.</i></p>";
    }
    govde += "<p class=\"koridor-kaynak\">Kaynak: " + String(p.kaynak).replace(/</g, "&lt;") + "</p>";
    koridorPopup.setLngLat(ev.lngLat).setHTML(govde).addTo(harita);
  });
  ["koridor-dugum-daire", "koridor-kenar-cizgi"].forEach(function (id) {
    harita.on("mouseenter", id, function () { harita.getCanvas().style.cursor = "pointer"; });
    harita.on("mouseleave", id, function () { harita.getCanvas().style.cursor = ""; });
  });

  console.log("Atlas: koridor ağı — " + Object.keys(KORIDOR.dugum).length + " düğüm · " +
    KORIDOR.kenar.length + " kenar kuruldu (koordinatsız atlanan: " +
    KORIDOR.atlanan.dugum + " düğüm, " + KORIDOR.atlanan.kenar + " kenar).");
  // 🔴 YAMA SATIRI AYRI BASILIYOR ve sebebi ölçülmüş: yamaların görünmediği
  // kusuru yakalayan şey bir denetim değil, YUKARIDAKİ "atlanan" SATIRIYDI.
  // Sayılmayan şey görünmez; görünmeyen şey yarın sıfırdan keşfedilir.
  console.log("Atlas: koridor yaması — " + KORIDOR.yama.dosya + " dosya · " +
    KORIDOR.yama.dugum + " düğüme koordinat · " + KORIDOR.yama.kenar +
    " kenar eklendi · " + KORIDOR.yama.eksik + " düğüm KOORDİNATI BULUNAMADI.");
  if (KORIDOR.yama.tanimsiz.length)
    console.warn("Atlas: koridor yaması — 🔴 TANINMAYAN ŞEKİL, OKUNMADI: " +
      KORIDOR.yama.tanimsiz.join(" · ") +
      "  ⇒ beklenen şekil: window.KORIDOR_YAMA_<6hane> = { dugum:[…], kenar:[…], eksik:[…] }" +
      "  (M-0675 ③). Bu satır, göç yapılmadığı hâlde 'çalışıyor' görünmesini engeller.");
}

// ŞART ② ZAMAN ÇERÇEVESİNE UY.
// Menzil sistemi TDV `menzil--osmanli`ya göre 1539'da teşkilatlandı, 1839'da
// posta teşkilâtıyla kaldırıldı. Zaman göstergesi 1281'deyken koridor
// ÇİZİLMEZ — yoksa anakronizm olur ve bu projenin en çok şikâyet edilen
// hatası tam olarak odur. Süzgeç kenarın KENDİ f/t'sinden okunuyor, sabit
// tarih GÖMÜLMEDİ: veri bir kolu başka bir aralıkla yazarsa katman ona uyar.
function koridorGuncelle(t) {
  if (!haritaHazir || !harita.getSource("koridor-kenar")) return;
  var kenarlar = [], canli = {};
  KORIDOR.kenar.forEach(function (m) {
    if (!(m.fi <= t && t < m.ti)) return;
    canli[m.e.u1] = 1; canli[m.e.u2] = 1;
    kenarlar.push({
      type: "Feature",
      properties: {
        baslik: m.a.ad + " → " + m.b.ad, kanat: m.e.kanat, kol: m.e.kol,
        kalinlik: m.e.kalinlik || "ana", saat: m.e.saat,
        saat_cinsi: m.e.saat_cinsi || "olculemedi", kaynak: m.e.kaynak || "bulunamadı"
      },
      geometry: { type: "LineString", coordinates: [[m.a.lon, m.a.lat], [m.b.lon, m.b.lat]] }
    });
  });
  // Düğüm yalnız CANLI bir kenara bağlıysa çizilir — tek başına duran bir
  // durak, hattı olmayan bir menzil demektir ve yanıltır.
  var dugumler = Object.keys(canli).map(function (id) {
    var d = KORIDOR.dugum[id];
    if (!d) return null;
    var ks = d.kaynak || "";
    return {
      type: "Feature",
      properties: {
        ad: d.ad, kol: (d.kol && d.kol.length ? d.kol[0] : ""),
        kaynak: ks || "bulunamadı",
        kaynakli: !(!ks || /bulunamad/i.test(ks))
      },
      geometry: { type: "Point", coordinates: [d.lon, d.lat] }
    };
  }).filter(Boolean);
  harita.getSource("koridor-kenar").setData({ type: "FeatureCollection", features: kenarlar });
  harita.getSource("koridor-dugum").setData({ type: "FeatureCollection", features: dugumler });
}

// ---------- Hareket lejantı (md.4.3) ----------
// Kullanıcı dokuz ok tipini görüyor ama hangisinin ne olduğunu bilmiyordu.
//
// 🔴 TASARIM KARARI — dokuzunu birden LİSTELEMİYORUZ, sahnedekini açıklıyoruz.
// Ana lejant zaten haritanın sağ üstünü kaplıyor ve kullanıcı bir kez
// "gizle butonu koy" demek zorunda kalmıştı (hatalar 3, md.2): tam o köşede
// Kafkasya ve Ege adaları var. Oraya dokuz satır daha eklemek aynı şikâyeti
// büyüterek geri getirirdi.
// Bunun yerine devir ve işgal lejantlarının kurduğu desen izleniyor: kutu
// yalnız O ANDA sahnede olan türleri sayar. Ölçüt de aynı — açıklanmayan
// simge kalabalıktır, sahnede olmayan simgenin açıklaması da kalabalıktır.
// ⇒ Ok yoksa kutu hiç görünmez; tek tip varsa tek satır.
function seferLejanti(turler, sonuclar) {
  var el = document.getElementById("sefer-lejant");
  if (!el) {
    el = document.createElement("div");
    el.id = "sefer-lejant";
    el.className = "devir-lejant sefer-lejant";
    document.getElementById("harita").appendChild(el);
  }
  var anahtarlar = Object.keys(turler);
  if (!anahtarlar.length) { el.style.display = "none"; lejantYerlestir(); return; }
  el.style.display = "";
  // HAREKET'teki tanım sırası korunuyor: kutu her tarihte aynı sırayla okunsun,
  // yoksa kullanıcı satırları saymak zorunda kalır.
  var sirali = Object.keys(HAREKET).filter(function (k) { return turler[k]; });
  var html = "<b>Harekât</b>" + sirali.map(function (k) {
    var h = HAREKET[k];
    // Çizgi deseni haritadakiyle AYNI orandan türetiliyor (h.desen), ayrıca
    // yazılmıyor — iki yerde duran sayı bayatlar (OGRENILENLER §35).
    var d = h.desen[0] * 2, b = h.desen[1] * 2;
    return '<span><i class="sefer-orn" style="background:repeating-linear-gradient(' +
           '90deg,#2b1006 0 ' + d + 'px,transparent ' + d + 'px ' + (d + b) + 'px)"></i>' +
           '<b class="sefer-glif">' + h.glif + '</b> ' + h.ad +
           (turler[k] > 1 ? ' <em>×' + turler[k] + '</em>' : '') + "</span>";
  }).join("");
  // Rozet ekseni AYRI: aynı hareket kazançla da bozgunla da bitebilir. Yalnız
  // sahnede o sonuçtan bir ok varsa açıklanıyor.
  if (sonuclar.zafer || sonuclar.yenilgi) {
    html += '<span class="sefer-sonuc">' +
            (sonuclar.zafer ? '<b>▲</b> kazanç ' : '') +
            (sonuclar.yenilgi ? '<b>▼</b> bozgun' : '') + "</span>";
  }
  el.innerHTML = html;
  lejantYerlestir();
}

// Dizin penceresinden bir şehre/yerleşime gitme — uçuş motorunun ayarlarını
// kullanır ama bir OLAY maddesi olmadığı için `haritayiOlayaGotur`a girmez
// (orada `yer_id`/`kapsam_genis` mantığı var, burada yok). Ortak olan tek şey
// yakınlık, süre ve yay hesabı; üçü de aynı fonksiyonlardan geliyor ki
// ⚙ ayarları her yerde AYNI anlama gelsin.
// ⚠️ Bu fonksiyon dosyada `kmDanZoom`/`ucusSuresiMs`/`ucusYayi`dan ÖNCE
// duruyor; JavaScript'te işlev bildirimleri yükseltildiği (hoisting) ve bu
// gövde ancak bir tıklamayla koştuğu için sorun yok.
function dizindenUc(lat, lon) {
  try {
    var kap = _haritaKutu();
    var km = kmArasi(harita.getCenter().lat, harita.getCenter().lng, lat, lon);
    harita.flyTo({ center: [lon, lat],
                   zoom: kmDanZoom(+_ayar("ayar-genislik-km", 1500), lat, kap.width),
                   duration: ucusSuresiMs(km),
                   curve: ucusYayi(km) });
  } catch (e) {
    harita.flyTo({ center: [lon, lat], zoom: 6.2, duration: 900 });   // eski davranışa düş
  }
}

// ---------- KAMERA HAKEMİ ----------------------------------------------
// 🔴 22 Ağustos 2026 — Emre: *"PAT ORADA PAT BURADA … harita odağı çat çat
// değişmemeli … bir yakın bir uzak, bir koca imparatorluğu gösteren tarzda
// da olmamalı."* Sebep ÖLÇÜLDÜ, tarayıcıda, kamera metotları sarmalanarak:
//
//   8 kez ⏭ (uçuş açıkken) · her metot çağrısı ve çağıranı kaydedildi
//     zoomUygula<guncelle          4 kez  fitBounds → İMPARATORLUK görünümü
//     haritayiOlayaGotur           7 kez  (3 flyTo z~6,03 + 4 fitBounds)
//   ⇒ AYNI SEKİZ ADIMDA İKİ MEKANİZMA AYNI KAMERAYI SÜRÜYOR.
//
// 🔴 Ve iki komut arasındaki süre ÖLÇÜLDÜ: **1811 · 1867 · 1911 · 2036 ms.**
// Bu, tahmin edilenden (`<50 ms`, "biri ötekini keser") KÖTÜ: `fitBounds`
// 750 ms'de TAMAMLANIYOR, ikinci komut ~1,9 sn SONRA geliyor. Kullanıcı bir
// kesme değil **İKİ AYRI TAMAMLANMIŞ HAREKET** görüyor — önce imparatorluğa
// açılıyor, duruyor, sonra noktaya iniyor. *"Pat orada pat burada"* budur.
//
// Çare bir zamanlayıcı YARIŞI değil, bir ÖNCELİK SIRASI:
//     ① kullanıcının elle gezinmesi   (zaten var: `zoomstart` + originalEvent)
//     ② olay uçuşu                     ← bu bloğun kurduğu şey
//     ③ oto-zoom (dönem değişimi)
// ⚠️ Oto-zoom SİLİNMİYOR — Emre'nin kendi isteği (`btn-zoom` "🔍 Oto").
// Uçuş varken SUSUYOR, yok olmuyor.
//
// 📌 Ve bayrak bir SÜREYE değil, bir KAPSAMA bağlı. `tarihAyarla` eşzamanlı
// çalıştığı için `try/finally` tam olarak `guncelle()`nin süresini kapsar;
// "kaç ms susayım" diye bir sihirli sayı YOK. (Ölçülen 1,9 sn'lik gecikme
// tam da böyle bir sayının niçin uydurulamayacağını gösteriyor: makineye,
// veriye ve o anki dönem yoğunluğuna göre değişiyor.)
// ═══════════════════════════════════════════════════════════════════════════
// KARE SAYACI — Emre: *"kesik kesik olmamalı, görüntü stabil akmalı."*
//
// 🔴 NİÇİN SAYAÇ, NİÇİN TAHMİN DEĞİL: "kesik kesik" iki APAYRI sebepten
// doğar ve ÇARELERİ TERS:
//     ① EASING  kareler düzgün akıyor ama HIZ profili yanlış
//               (sabit hızla gidip duruyor, yumuşama yok)  → eğri düzeltilir
//     ② KARE DÜŞMESİ  hız profili doğru ama kareler GELMİYOR
//               (ağır çizim ana iş parçacığını blokluyor)   → çizim ertelenir
// İkisi GÖZLE aynı görünür. Ayırt eden tek şey kare sayısıdır.
// 📌 Bugün üç kez tahmin yürütüp üçünde de yanıldım (kilit süresi · panel
//    titremesi · asıl sebep `prefers-reduced-motion`). Dördüncüde ölçüyorum.
//
// Çıktı örneği:
//   🎞 kare: 52/54 · 61 fps · en uzun boşluk 18 ms  → ✓ AKICI
//   🎞 kare: 19/54 · 22 fps · en uzun boşluk 210 ms → 🔴 KARE DÜŞÜYOR
// ═══════════════════════════════════════════════════════════════════════════
// UZUN İŞ KAYDEDİCİSİ — "ağır çizim" NEREDE?
//
// 🔴 NİÇİN: kare sayacı iki kez ölçtü ve ikisinde de aynı şeyi söyledi —
//     5/188 kare · 949 ms boşluk        (ilk ölçüm)
//     9/229 kare · 866 ms boşluk        (çizim yatışması eklendikten SONRA)
// Yani `idle` beklemek KURTARMADI ⇒ ağır iş uçuştan ÖNCE değil, uçuşun
// TAM ORTASINDA oluyor. Ama HANGİ iş olduğunu sayaç söylemiyor.
//
// 📌 Ve bugün dört kez tahmin yürütüp dördünde de yanıldım. Beşincide
// tahmin etmiyorum: bloklayan şeyi ADIYLA ölçüyorum.
//
// `PerformanceObserver('longtask')` tarayıcının kendi ölçümüdür — 50 ms'yi
// aşan her ana-iş-parçacığı bloğunu bildirir. Ona ek olarak bilinen ağır
// çizim işlevleri tek tek zamanlanıyor; ikisi birlikte "ne kadar" ile
// "kim" sorularını birden cevaplıyor.
var _AGIR = { en: 0, ad: "", uzun: 0, uzunTop: 0, acik: false };

function agirOlc(ad, is) {
  if (!_AGIR.acik) return is();
  var t0 = performance.now();
  try { return is(); }
  finally {
    var s = performance.now() - t0;
    if (s > _AGIR.en) { _AGIR.en = s; _AGIR.ad = ad; }
  }
}

var _longObs = null;
function agirBaslat() {
  // 🔴 GÖZLEMCİ SIZINTISI — 22 Ağustos, ölçüldü ve KENDİ ALETİMDEYDİ.
  // Eski hâl yeni bir `PerformanceObserver` kuruyor ama ESKİSİNİ
  // KAPATMIYORDU. Uçuşlar biriktikçe gözlemciler üst üste yığıldı ve aynı
  // görevi defalarca saydılar:
  //     toplam 9303 ms → 38288 ms   (aynı uzunlukta uçuşlarda)
  // "Bir uçuşta 38 saniye uzun görev" imkânsız bir sayıdır ve tam da bu
  // yüzden ele verdi.
  // ⚠️ `en uzun görev` etkilenmedi (765-1144 ms) — o hâlâ geçerli; ama
  // TOPLAM güvenilmezdi ve ben onu rapora yazıyordum.
  // 📌 `§11`: *aletin kendisi bozulunca, ölçtüğü şey değil ALET yanılır.*
  // Bugün üçüncü kez kendi aletimde kusur buldum (uzantı reddi · kaydedici
  // yanlış zamanda · şimdi bu). Alet de veridir, o da denetlenir.
  if (_longObs) { try { _longObs.disconnect(); } catch (e) {} _longObs = null; }
  _AGIR = { en: 0, ad: "", uzun: 0, uzunTop: 0, acik: true };
  if (typeof PerformanceObserver !== "function") return;
  try {
    _longObs = new PerformanceObserver(function (l) {
      l.getEntries().forEach(function (e) {
        _AGIR.uzunTop += e.duration;
        if (e.duration > _AGIR.uzun) _AGIR.uzun = e.duration;
      });
    });
    _longObs.observe({ entryTypes: ["longtask"] });
  } catch (e) { _longObs = null; }   // tarayıcı desteklemiyor — sessiz geç
}
function agirBitir() {
  _AGIR.acik = false;
  if (_longObs) { try { _longObs.disconnect(); } catch (e) {} _longObs = null; }
  var p = [];
  if (_AGIR.ad) p.push(_AGIR.ad + " " + Math.round(_AGIR.en) + " ms");
  if (_AGIR.uzun) p.push("en uzun görev " + Math.round(_AGIR.uzun) + " ms"
                         + " (toplam " + Math.round(_AGIR.uzunTop) + ")");
  return p.length ? p.join(" · ") : "ağır iş ölçülemedi";
}

var _KARE_SAYAC_ACIK = true;
function kareSayaciBaslat(beklenenMs, etiket) {
  if (!_KARE_SAYAC_ACIK || typeof requestAnimationFrame !== "function") {
    return function () {};
  }
  var t0 = performance.now(), son = t0, kare = 0, enUzun = 0, calisiyor = true;
  // ⚠️ `agirBaslat()` BURADA ÇAĞRILMIYOR — `olayaGit` onu çok daha erken
  // açıyor ki `tarihAyarla` da ölçüme girsin. Burada açsaydık, ilk turda
  // olduğu gibi bizim çizim işlevlerimiz kaydın DIŞINDA kalırdı.
  function tik(t) {
    if (!calisiyor) return;
    kare++;
    // İLK kareyi boşluk ölçümüne KATMA: `flyTo` çağrısı ile ilk karenin
    // arasında animasyonla ilgisi olmayan bir kurulum gecikmesi var.
    if (kare > 1) { var b = t - son; if (b > enUzun) enUzun = b; }
    son = t;
    requestAnimationFrame(tik);
  }
  requestAnimationFrame(tik);
  return function bitir() {
    if (!calisiyor) return;
    calisiyor = false;
    var gecen = performance.now() - t0;
    var beklenenKare = Math.max(1, Math.round(gecen / 16.67));
    var fps = Math.round(kare / (gecen / 1000));
    // Hüküm: kare oranı %85'in altındaysa ya da bir boşluk 50 ms'yi
    // aşıyorsa göz "kesik" görür. Eşikler ÖLÇÜLMEDİ — gözle ayarlanacak.
    var akici = (kare / beklenenKare) >= 0.85 && enUzun <= 50;
    // ⚠️ `%s`/`%d` yer tutucusu KULLANILMIYOR: bazı konsol okuyucuları onu
    // değiştirmeden basıyor ve satır okunmaz hâle geliyor (ölçüldü). Bu satırı
    // Emre okuyacak — biçim riski taşımasın diye düz birleştirme.
    var hukum = akici ? "✓ AKICI"
                      : (enUzun > 50 ? "🔴 KARE DÜŞÜYOR (ağır çizim)"
                                     : "🟡 kare oranı düşük");
    // 🔴 İKİNCİ SATIR ARTIK HER ZAMAN YAZILIYOR. Önce yalnız kötü hâlde
    // yazıyordum; satır gelmeyince "ölçüm mü boş, Emre mi kopyalamadı"
    // ayırt edilemedi ve bir tur kayboldu. Ölçüm, VARLIĞIYLA da bilgi verir.
    var satir = (etiket || "uçuş") + " — " + kare + "/" + beklenenKare
                + " kare · " + fps + " fps · en uzun boşluk "
                + Math.round(enUzun) + " ms · " + hukum
                + "\nÇİZİM (uçuştan önce): " + Math.round(_CIZIM_MS) + " ms"
                + "  ·  UÇUŞ SIRASINDA: " + agirBitir()
                // 🔴 DOM İŞARETİ SAYIMI — eleyip geri getirdiğim aday.
                // İlk ölçümde "tek 949 ms blok" görünce elemiştim: işaret
                // maliyeti KARE BAŞINA küçüktür, tek seferde bir saniye
                // olamaz. Ama yeni ölçüm başka bir şey söylüyor:
                //     ~5,8 sn uçuşta TOPLAM 4961 ms uzun görev
                // yani tek blok değil SÜREKLİ yük — ve o, işaretlerin
                // imzasıdır: MapLibre her `Marker`ı HER KAREDE yeniden
                // konumlandırır (N işaret = N DOM yazması × 60/sn).
                // 📌 Bir adayı elemek, onu SONSUZA KADAR elemek değildir:
                //    ölçüm değişince aday geri gelir. İlk eleme YANLIŞ
                //    değildi — o günkü ölçüme göre DOĞRUYDU.
                + "\nDOM işareti: "
                + document.querySelectorAll(".maplibregl-marker").length
                + "  ·  şehir katmanı: "
                + (document.querySelectorAll(".sehir-isaret").length
                   || document.querySelectorAll("[class*='isaret']").length);
    console.log("🎞 " + satir);
    // 🔴 EKRANA DA YAZ — Emre: *"hangi satırı yapıştıracağım anlamadım."*
    // Kullanıcıdan geliştirici konsolu açmasını istemek, ölçümü ULAŞILMAZ
    // kılar. Ölçüm, onu okuyacak kişinin BAKTIĞI yerde durmalı.
    // 📌 Bu, `§⑧③`in dersinin aynısı: orada sürgü zoom SAYISI gösteriyordu
    // ve Emre "ayarlar etki etmiyor" sandı — kusur mekanizmada değil
    // GÖRÜNÜRLÜKTEYDİ. Burada da ölçüm DOĞRUYDU, görünmüyordu.
    var kutu = document.getElementById("ucus-olcum");
    if (kutu) {
      kutu.textContent = satir;
      kutu.className = "ayar-olcum " + (akici ? "olcum-iyi" : "olcum-kotu");
    }
  };
}

// 🔴🔴 22 Ağustos 2026 — KİLİT SAYAÇ OLDU, ve sebebi ÖLÇÜLDÜ.
// Emre: *"uçuş modu çalışmıyor, şak şak ani geçiş yapıyor."* Ölçüm:
//
//   olayaGit()  KAMERA.olayBekliyor = true
//               tarihAyarla(o.gi)            ← oto-zoom SUSTURULUYOR
//               KAMERA.olayBekliyor = false  ← 🔴 KİLİT BURADA AÇILIYOR
//               haritayiOlayaGotur()         ← 🔴 UÇUŞ BURADA BAŞLIYOR
//
// ⇒ Kilit, uçuş BAŞLAMADAN bir satır önce açılıyordu. Uçuş 0,8-3 saniye
//   sürüyor ve o süre boyunca kamera KORUMASIZ: oynatma gün ilerletip dönem
//   değiştirdiğinde `zoomUygula` (satır ~2851) `fitBounds` atıyor, MapLibre
//   yeni kamera çağrısını DEVRALIYOR ve uçuş ortasında kesiliyor.
//   Kullanıcının gördüğü "ışınlanma" bu.
//
// 📌 Ve kusur mekanizmada değil SÜREDEYDİ: hakem doğruydu, `zoomUygula`
//   gerçekten susuyordu — ama YANLIŞ ARALIKTA. Bir korumanın DOĞRU olması
//   yetmiyor, DOĞRU SÜRE boyunca tutulması da gerekiyor.
//
// ⚠️ Boolean YETMEZ, SAYAÇ şart: uçuş sürerken kırpma da kilit istiyor ve
//   iç içe geçiyorlar. Boolean olsaydı içteki `false` dıştakini de açardı.
//   `olayBekliyor` bir GETTER olarak duruyor — mevcut okuyucular
//   (`zoomUygula`) tek satır bile değişmeden çalışmaya devam ediyor.
var KAMERA = { kilit: 0 };
Object.defineProperty(KAMERA, "olayBekliyor", {
  get: function () { return KAMERA.kilit > 0; }
});
function kameraKilitle() { KAMERA.kilit++; }
function kameraCoz() { KAMERA.kilit = Math.max(0, KAMERA.kilit - 1); }

// 🔴 KIRPMA BAYRAĞI — tanımı BURADA, kilidin yanında. Kullanıldığı yerler
// (`guncelle` 3691 · `tarihAyarla` 3785) bu satırdan ÖNCE geliyor; `var`
// yükseltmesi sayesinde çalışıyordu ama bir okuyucunun "burada tanımsız"
// diye düşünmesi için sebep vardı. Bayrak, kamera kilidinin kardeşi:
// ikisi de "şu an olağan akış DEĞİL" diyor.
//   kilit  → oto-zoom kameraya dokunmasın
//   bayrak → panel/liste/zaman çubuğu OYNAMASIN (harita çizilmeye devam eder)
var _kirpmaKilitli = false;
// Kirpma sirasinda atlanan agir guncellemelerin BORCU. Atlamak
// ucuzdur, ATLADIGINI UNUTMAK pahali: isaretler DOM'a hic
// eklenmeden kalir. Kilit birakilirken bir kez odenir.
var _kirpmaBorcu = false;

// Bir olaya gidilecekse ÜÇ ADIM BİRLİKTE yapılır ve `tarihAyarla`nın
// tetikleyeceği oto-zoom bu süre boyunca susar.
// ⚠️ `finally` şart: `guncelle()` fırlatırsa bayrak açık kalır ve oto-zoom
// bir daha HİÇ çalışmazdı — sessiz bir kilitlenme olurdu.
// `panelGoster` — `obGoster` çağrılsın mı (⏮/⏭ eskiden çağırmıyordu, öyle kaldı)
// `zorla`       — 🛩 anahtarını atla. ELLE yapılan her eylem (tıklama, ⏮/⏭)
//                 zorlar; YALNIZ otomatik akış anahtara tâbidir, çünkü
//                 anahtarın kendi metni *"sıradaki olaya GEÇİLİNCE"* diyor.
// 🔴🔴🔴 22 Ağustos 2026 — UÇUŞ, KENDİ ÇİZİMİNİN ÜSTÜNE BİNİYORDU.
// Emre'nin ekranından gelen ÖLÇÜM:
//     eğik — 5/188 kare · 2 fps · en uzun boşluk 949 ms · 🔴 KARE DÜŞÜYOR
// 949 ms'lik TEK bir boşluk. Bu "kare düşmesi" değil, ana iş parçacığının
// neredeyse tam bir saniye BLOKLANMASI.
//
// 📌 VE ÖLÇÜM BENİM BAŞ ŞÜPHELİMİ ELEDİ: "DOM işaretleri her karede yeniden
// konumlanıyor" diyordum. O maliyet kare başına küçüktür, tek seferde 949 ms
// olamaz. Ölçmeseydim yanlış yeri düzeltecektim — bugün dördüncü kez.
//
// GERÇEK SIRA:
//     ① tarihAyarla → setData(devasa GeoJSON)   hızlı DÖNER
//     ② flyTo başlar
//     ③ MapLibre GeoJSON'u AYRIŞTIRIR + GPU'ya yükler  ← 949 ms, ANA İŞ
//        PARÇACIĞINDA, yani ①'in FATURASI ②'den SONRA geliyor
//     ④ uçuş animasyonu aç kalır, 188 karenin 5'i çizilir
// `data/donemler.js` 22,7 MB — fatura o kadar.
//
// ⇒ ÇARE: ağır çizim BİTENE KADAR bekle, SONRA uç. MapLibre'nin `idle`
//   olayı tam bunu söyler: "yüklenecek veri ve çizilecek kare kalmadı."
// ⚠️ Emniyet zamanlayıcısı ŞART: `idle` bazı hâllerde HİÇ gelmez (gizli
//   sekme, sürekli akan kaynak) ve uçuş sonsuza kadar başlamazdı. Kilidin
//   `moveend` emniyetiyle aynı desen.
function _haritaSakinlesince(is) {
  if (!harita || !haritaHazir || typeof harita.once !== "function") { is(); return; }
  var yapildi = false, zaman = null;
  function calistir() {
    if (yapildi) return;
    yapildi = true;
    if (zaman) { clearTimeout(zaman); zaman = null; }
    try { harita.off("idle", calistir); } catch (e) { /* zaten çözülmüş */ }
    is();
  }
  harita.once("idle", calistir);
  // 🔴 23 Ağustos — TAVAN 1500 → 450 ms. ÖLÇÜLDÜ:
  //     tıklama       800 ms
  //     flyTo çağrısı 3539 ms   ⇒ ÖLÜ ZAMAN 2739 ms
  // Bunun 584 ms'i çizim (senkron, `tarihAyarla` içinde zaten biter);
  // kalanı bu `idle` beklemesi. Yeni bir bölgeye gidilirken `idle`
  // GEÇ gelir — karo yüklemesi sürer — ve kullanıcı o süreyi
  // *"tereddüt"* diye görür (Emre'nin şikâyeti).
  // ⇒ Karo yüklemesini beklemek GEREKSİZ: uçuş zaten yol boyunca
  //   karoları yeniden isteyecek. Beklenmesi gereken tek şey ağır
  //   ÇİZİM ve o senkron bittiği için 450 ms fazlasıyla yetiyor.
  zaman = setTimeout(calistir, 450);
}

// 🔴 ÖLÇÜM ALETİMDE KUSUR VARDI — 22 Ağustos, üçüncü tur.
// `agirBaslat()` kare sayacıyla birlikte, yani UÇUŞ BAŞLADIĞINDA açılıyordu.
// Ama `guncelle()` — `agirOlc` sarmalayıcılarının olduğu yer — uçuştan
// ÖNCE koşuyor. Kaydedici o sırada KAPALIYDI ⇒ "SUÇLU" satırı boş geldi.
// 📌 Ve bu boşluk BİLGİ taşıyor: 716 ms'lik blok bizim `*Guncelle`
// işlevlerimizde DEĞİL. Aletin susması da bir ölçümdür — ama ancak
// niçin sustuğunu bilirsen.
// ⇒ Kaydedici artık `tarihAyarla`yı DA kapsıyor ve iki fazı AYRI raporluyor:
//     ÇİZİM  = uçuştan önceki `tarihAyarla` (bizim JS'imiz)
//     UÇUŞ   = uçuş sırasındaki bloklar (MapLibre'nin içi)
// İkisinin hangisi büyükse çare oradadır.
var _CIZIM_MS = 0;

function olayaGit(o, panelGoster, zorla) {
  // 23 Agustos 2026 — H-0004. Emre: "bu maddede iken bir sonraki maddeye
  // tiklayinca iki madde birden geciliyor ... ikinci madde kendi sirasinda
  // da gosterime giriyor."
  //
  // CANLI OLARAK URETILDI (tahmin degil):
  //     liste[5].click()  ->  baslikta 6. MADDE gorundu
  //     suankiOlayI       ->  -1
  //     btn-ileri         ->  7      (6. madde ATLANDI)
  //
  // KOK SEBEP: bu fonksiyon olay NESNESINI aliyordu ama INDEKSINI hicbir
  // yere yazmiyordu. Sonra btn-ileri/btn-geri olayIndexTazele()yi cagirip
  // indeksi YENIDEN TARIYOR, ve tarama "gi <= suanki olan SON kayit"
  // dedigi icin ayni tarihli bir grupta GRUBUN SONUNU seciyor.
  // Veride 54 ayni-tarihli cift var, yani belirti 54 yerde uretilebilir.
  //
  // Tarama KASITLI VE DOGRU: zaman cubugu suruklenerek bir tarihe
  // gelindiginde o gunun butun maddeleri gecmistedir, grubun sonu dogru
  // cevaptir. Kusur taramada DEGIL, taramanin gereksiz yere calismasinda.
  // => Care: gosterilen maddenin indeksi BURADA yazilir; olayIndexTazele
  //    zaten "indeksin tarihi suankiyle ayniysa dokunma" diyor ve artik
  //    o kapidan donuyor. Surukleme yolu BIT BIT ayni kaliyor.
  //
  // indexOf -1 dondururse (devlet odagi gibi SUZULMUS bir listeden gelen
  // olay) indekse DOKUNULMUYOR — yanlis bir indeks yazmaktansa eski
  // davranis korunur.
  var _oi = olaylar.indexOf(o);
  if (_oi >= 0) suankiOlayI = _oi;
  kameraKilitle();
  agirBaslat();
  var _c0 = performance.now();
  try { tarihAyarla(o.gi); } finally { kameraCoz(); }
  _CIZIM_MS = performance.now() - _c0;
  if (panelGoster !== false) obGoster(o);
  // Kilidi `haritayiOlayaGotur` KENDİSİ alıyor, varışta bırakıyor.
  // Uçuş, ağır çizim yatıştıktan SONRA başlıyor (gerekçe yukarıda).
  _haritaSakinlesince(function () { haritayiOlayaGotur(o, zorla); });
}

// ---------- Otomatik yakınlaştırma ----------
// Oynatma sırasında titremeyi önlemek için: görünüm yeni sınırları zaten makul
// oranda kapsıyorsa veya son ayardan 900 ms geçmediyse yeniden çerçevelenmez.
// 🔴 23 Ağustos, 0029/H-0005 — VARSAYILAN KAPALI.
// Emre: *"bir sonraki maddeye geçince harita birden zoom in oluyor,
// sonra tekrar zoom out oluyor ... bir aşağı bir yukarı olmaması
// gerekiyor haritanın."*
// Sebep `zoomUygula`: her toprak değişiminde `fitBounds` çağırıp
// haritayı devletin sınırlarına yeniden çerçeveliyor. Sıçramalı, ve
// olaydan olaya geçerken göze vuruyor.
// ⇒ Varsayılan kapalı. Aynı ihtiyacın YUMUŞAK hâli `ayar-genislik-kip`
//   "korele" kipidir (0029/H-0006): görüş genişliği devletle birlikte
//   sürekli ölçekleniyor, sıçramadan.
// ⚠️ Mekanizma SİLİNMEDİ — Emre'nin kendi isteğiydi (`btn-zoom` "🔍 Oto")
//   ve isteyen açabiliyor. Değişen yalnız VARSAYILAN ve ayarın YERİ.
var otoZoom = false;
var sonZoomZamani = 0;
function zoomUygula(d) {
  if (!otoZoom || !haritaHazir) return;
  // ③ < ② — bir olay uçuşu sıradaysa oto-zoom kameraya HİÇ dokunmaz.
  if (KAMERA.olayBekliyor) return;
  // 🔴 KAPSAMA KORUMASI ARTIK HER ZAMAN ÇALIŞIYOR — eskiden `if (zamanlayici)`
  // bloğunun İÇİNDEYDİ, yani yalnız otomatik oynatmada. Elle gezen kullanıcı
  // (⏮/⏭, liste tıklaması, çubuk) korumasızdı ve HER dönem değişiminde harita
  // yeniden çerçeveleniyordu. Kullanıcı şikâyeti: *"Ankara Savaşı'ndan sonra
  // harita tak diye başka bir görünüme atlıyor."*
  // Ölçüldü — koruma elle gezerken de açık olsaydı:
  //     461 dönem geçişinin 417'sinde (%90,5) harita SABİT kalırdı
  //     yalnız 44'ünde (%9,5) gerçekten çerçeveleme gerekiyor
  // ⚠️ Niyet zaten buydu: yorum "oynatma sırasında titremeyi önlemek için"
  // diyordu. Ama elle gezen kullanıcının korumaya DAHA ÇOK ihtiyacı var —
  // o kendi yakınlığını bilinçli seçmiş oluyor.
  var g = harita.getBounds();
  var kapsiyor = g.getWest() <= d.b[0] && g.getEast() >= d.b[2] &&
                 g.getSouth() <= d.b[1] && g.getNorth() >= d.b[3];
  var oran = (d.b[2] - d.b[0]) / Math.max(0.001, g.getEast() - g.getWest());
  if (kapsiyor && oran > 0.3) return;
  // Zaman kısıtı YALNIZ oynatmada: elle atılan her adım bilinçli bir eylem,
  // 900 ms'lik bir gecikmeyle yutulmamalı.
  if (zamanlayici) {
    var simdi = Date.now();
    if (simdi - sonZoomZamani < 900) return;
    sonZoomZamani = simdi;
  }
  harita.fitBounds([[d.b[0], d.b[1]], [d.b[2], d.b[3]]],
                   { padding: 56, duration: zamanlayici ? 450 : 750, maxZoom: 7 });
}

// ---------- Padişah kartı ----------
var portreKutu = document.getElementById("padisah-portre");
var adKutu = document.getElementById("padisah-ad");
var saltanatKutu = document.getElementById("padisah-saltanat");
var sonPadisahId = null;

function padisahGuncelle(t) {
  var aktif = null;
  for (var i = 0; i < window.PADISAHLAR.length; i++) {
    var p = window.PADISAHLAR[i];
    if (gunIdx(p.from) <= t && t < gunIdx(p.to)) { aktif = p; break; }
  }
  if (!aktif) { adKutu.textContent = "—"; saltanatKutu.textContent = ""; return; }
  adKutu.textContent = aktif.ad;
  saltanatKutu.textContent = idxTarih(gunIdx(aktif.from)).y + " – " + idxTarih(gunIdx(aktif.to)).y;
  if (sonPadisahId === aktif.id + aktif.ad) return;
  sonPadisahId = aktif.id + aktif.ad;
  portreKutu.innerHTML = "";
  if (aktif.ozel) { portreKutu.textContent = aktif.id === "fetret" ? "⚔" : "☪"; return; }
  var img = new Image();
  img.src = "assets/portreler/" + aktif.id + ".jpg";
  img.alt = aktif.ad;
  img.onerror = function () {
    portreKutu.innerHTML = "";
    portreKutu.textContent = aktif.ad.replace(/^[IVX]+\.\s*/, "").charAt(0);
  };
  portreKutu.appendChild(img);
}

// ---------- Olay akışı (ana + ek liste birleşik, gün sıralı) ----------
// ARAYÜZ AYNI GÜN (10 Ağustos) — elle tutulan concat zinciri `OLAYLAR_EK15`'te
// duruyordu, `OLAYLAR_EK16` (58 madde) HİÇ concat edilmiyordu; index.html onu
// yüklüyordu ama app.js hiç okumuyordu (`denetle.py` glob ile okuduğu için
// "kapalı" sanıyordu — İÇERİK oturumunun bağımsız ölçtüğü "1219 - 1161 = 58"
// açığı BİREBİR buydu). ⇒ `CLAUDE.md §5`nin yerleşim tarafında zaten öğrendiği
// ders ("hangi dosya canlı, TEK doğru kaynak GIRDI_DOSYALARI, elle liste
// bayatlıyor") kronoloji tarafına da uygulandı: zincir artık ELLE DEĞİL,
// window'da tanımlı HER `OLAYLAR`/`OLAYLAR_EK<n>` anahtarını kendisi bulur.
// EK17 vb. bir sonraki dosya bağlandığında BU SATIRA dokunmaya gerek YOK.
// Sıralama: dizinin son adımı zaten `.gi`ye göre TAM SIRALAMA yapıyor (aşağıda
// `.sort`), yani anahtarların toplama SIRASI yalnız AYNI GÜNE denk gelen
// maddeler arasında hangisinin önce göründüğünü etkiler — o yüzden alfabetik
// değil, eski elle-zincirle AYNI doğal sırayı (OLAYLAR, EK, EK2…EK16) veren
// bir karşılaştırıcı kullanıldı; davranış bugünkünden FARKLI DEĞİL, yalnız
// kalıcı hâle geldi.
// 🔴 ARAYÜZ KORİDOR (16 Ağustos) — AYNI KUSUR İKİNCİ KEZ, ve sebebi YUKARIDAKİ
// ÇARENİN İÇİNDEYDİ. Yukarıdaki yorum *"EK17 vb. bir sonraki dosya bağlandığında
// BU SATIRA dokunmaya gerek YOK"* diyor — ama o cümle bir VARSAYIM taşıyordu:
// dosyaların `OLAYLAR_EK<n>` diye adlanacağı. `KRONOLOJI-KIRILMA.md §⓪` yeni
// oturumlara adı `data/olaylar_<UUID'nin ilk 6 hanesi>.js` diye DAYATTI ve
// `OLAYLAR_7A4170` süzgece TAKILDI: dosya index.html'de yükleniyor, denetle.py
// glob'la okuyor (Değişmez 2 gerçekten 0 açık), ama app.js listeye HİÇ KATMIYOR
// ⇒ dört madde kullanıcıya GÖRÜNMÜYORDU. `denetle_yayin.py` bunu satır satır
// söylüyordu: "OLAYLAR_7A4170 · app.js OKUMUYOR".
// 📌 DERS: elle listeyi desenle değiştirmek listeyi YOK ETMEZ, DESENİN İÇİNE
// SAKLAR. `/^OLAYLAR(_EK\d*)?$/` görünüşte bir desen, gerçekte "kabul ettiğim
// adların listesi"dir — ve sessizce bayatlar. Süzgeç artık ADLANDIRMA
// KURALINDAN bağımsız: `OLAYLAR` ile başlayan her global kabul edilir.
// ⚠️ Sıralama DAVRANIŞI DEĞİŞMEDİ: OLAYLAR(0) → _EK(1) → _EK2..EK16 aynı
// yerde; ad kuralına uymayanlar 999'a düşüp ARALARINDA ADA GÖRE sıralanır
// (kararlı ve öngörülebilir). Sıra yalnız AYNI GÜNE denk gelen maddeler
// arasında görünür — son `.sort` zaten `.gi`ye göre tam sıralama yapıyor.
function olaylarAnahtarSiraNo(k) {
  if (k === "OLAYLAR") return 0;
  var m = k.match(/^OLAYLAR_EK(\d*)$/);
  return m ? (m[1] ? +m[1] : 1) : 999;
}
var akisModu = null;   // aşağıda zaman kontrolü bölümünde atanır
var olayListe = document.getElementById("olay-listesi");
var olaylar = Object.keys(window)
  .filter(function (k) { return /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(window[k]); })
  .sort(function (a, b) {
    var f = olaylarAnahtarSiraNo(a) - olaylarAnahtarSiraNo(b);
    return f !== 0 ? f : (a < b ? -1 : a > b ? 1 : 0);
  })
  .reduce(function (acc, k) { return acc.concat(window[k] || []); }, [])
  .map(function (o) {
  var kaba = gunIdx(o.t);
  return Object.assign({ gi: o.t.split("-").length > 2 ? kaba : gunMetniIdx(o.gun, kaba) }, o);
}).sort(function (a, b) { return a.gi - b.gi; });

// ARAYÜZ AYNI GÜN (10 Ağustos) — "aynı gün iki madde" ile "mükerrer madde"
// kullanıcı için AYNI GÖRÜNÜYOR (`DOCX-TEMA-ESLEME.md ⑤`, Patrona vakası:
// Emre "birini kaldır" dedi, oysa iki ayrı olaydı). Emre'nin kendi çözümü:
// "1-2-3 diye numaralandıralım" (parti-0005/H-0006). `olaylar` zaten `.gi`ye
// göre TAM SIRALI (yukarıda) ve JS'in `.sort()`ı KARARLI (stable) olduğu
// için aynı `gi`ye sahip maddeler dizide ARDIŞIK durur — tek geçişte
// gruplanabilir. Yalnız 2+ maddeli günlere `_agGrup`/`_agSira` iliştiriliyor;
// tek maddeli 1118 gün DOKUNULMAZ (liste rozeti hiç çıkmaz, K1).
(function ayniGunGruplaKur() {
  var i = 0;
  while (i < olaylar.length) {
    var j = i;
    while (j + 1 < olaylar.length && olaylar[j + 1].gi === olaylar[i].gi) j++;
    if (j > i) {
      var grup = olaylar.slice(i, j + 1);
      for (var k = i; k <= j; k++) { olaylar[k]._agGrup = grup; olaylar[k]._agSira = k - i + 1; }
    }
    i = j + 1;
  }
})();
// ①②③… — grup en çok gördüğümüz büyüklükte (bugün 4) yeterli, üstüne "n."
// düşer; daire karakteri Emre'nin "1-2-3" isteğinin görsel karşılığı.
var AG_DAIRE = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];
function agDaireSayi(n) { return AG_DAIRE[n - 1] || (n + "."); }

// DUYGU-VE-SEKME-SARTNAME.md §A — "okuyanın tepkisi", TDV'ye BASMAZ. `title`
// ve ekran-okuyucu metni bunu açıkça söylüyor, "tarihin hükmü" değil (§A②④).
// ⚠️ Görünürlük CSS class ile yönetiliyor (`document.documentElement`
// üzerinde `duygu-kapali`) — 1.107 satırı checkbox her değiştiğinde yeniden
// KURMAK yerine, satırlar BİR KERE kurulur ve tek bir class geçişi hepsini
// aynı anda gösterir/gizler (§A⑤①: "ayar kapalıyken hiçbir emoji görünmüyor").
var DUYGU_ETIKET = {
  "🎉": "kutlama", "👑": "taç giyme / iktidar", "📜": "antlaşma / karar",
  "🤝": "ittifak / anlaşma", "⚔️": "savaş", "🏆": "zafer", "🏛": "kurum",
  "🏰": "kale / savunma", "🐎": "sefer / yolculuk", "✊": "direniş",
  "🌱": "yeni başlangıç", "🎌": "fetih / bayrak", "🎨": "sanat / kültür",
  "👥": "toplum", "💍": "evlilik", "💭": "düşünce / fikir", "💰": "ekonomi",
  "📋": "düzenleme", "📌": "önemli nokta", "🔬": "bilim", "🕊": "barış",
  "🕌": "din / kurum", "🗡": "çatışma", "🧭": "keşif", "⚖️": "adalet / hukuk",
  "😔": "hüzün", "😠": "öfke", "😢": "üzüntü", "😭": "ağlama",
  "😲": "şaşkınlık", "😨": "korku", "💔": "hayal kırıklığı",
  "👏": "alkış / takdir", "😀": "mutluluk", "🤮": "tiksinti"
};
function duyguEtiketleri(dizi) {
  return dizi.map(function (e) { return DUYGU_ETIKET[e] || "duygu"; }).join(", ");
}
// Emoji glif GÖRSEL, ekran okuyucu için `aria-hidden` — anlamı ayrı, görünmez
// bir metinle taşınıyor (§A⑤⑤: "gürültü yapmıyor, anlamlı etiket").
function duyguSpanUret(o) {
  if (!o.duygu || !o.duygu.length) return null;
  var span = document.createElement("span");
  span.className = "o-duygu";
  var glif = document.createElement("span");
  glif.setAttribute("aria-hidden", "true");
  glif.textContent = o.duygu.join(" ");
  var etiketMetni = "okuyanın tepkisi: " + duyguEtiketleri(o.duygu);
  span.title = etiketMetni;
  var srMetin = document.createElement("span");
  srMetin.className = "gorunmez-metin";
  srMetin.textContent = " (" + etiketMetni + ")";
  span.appendChild(glif);
  span.appendChild(srMetin);
  return span;
}

var olayDom = [];
olaylar.forEach(function (o, i) {
  var div = document.createElement("div");
  div.className = "olay k-" + o.k;
  // K1 (§ARAYUZ-AYNI-GUN.md) — rozet YALNIZ 2+ maddeli günde çıkar; "1/1"
  // göstermek gürültüdür ve kusuru olmayan yere işaret koyardı.
  var agRozetHtml = o._agGrup
    ? '<span class="o-ayni-gun-rozet" title="Bu günde ' + o._agGrup.length + ' olay var">' +
      agDaireSayi(o._agSira) + '</span>'
    : '';
  div.innerHTML = '<div class="o-tarih">' + agRozetHtml + olayTarihYazi(o) + '</div>' +
                  '<div class="o-baslik"></div>';
  div.lastChild.textContent = o.b;
  var duyguSpan = duyguSpanUret(o);
  if (duyguSpan) div.lastChild.appendChild(duyguSpan);
  // hatalar 14 md.1: "olay başlıklarının üzerine tıklayınca AYNI SÜTUNDA SAĞ ALTTA
  // açılması gerekmiyor muydu, neden ortada açılıyor?"
  // Kullanıcının beklediği panel ZATEN VARDI (#olay-bilgi, kronolojinin altında) ama
  // yalnız "olay olay" akış modunda açılıyordu; varsayılan "zaman akışı" modunda
  // tam ekran modal (detayAc) devreye giriyordu. İki ayrı gösterim, biri gizli.
  // Panel içi sürüm ayrıca DAHA ZENGİN: padişah portresi, muharebe künyesi, antlaşma
  // hükmü, kişi kartları. Yani modalı taşımak değil, iki modu da panele yöneltmek doğru.
  // 🔴 `olayaGit` — üçlü artık TEK KAPIDAN geçiyor (KAMERA hakemi). Eskiden
  // burada `tarihAyarla` + `obGoster` + `haritayiOlayaGotur` ayrı ayrı
  // duruyordu ve birincisi oto-zoom'u imparatorluğa açıyordu.
  div.addEventListener("click", function () { olayaGit(o, true, true); });
  div.addEventListener("contextmenu", function (e) { kopyaMenusuAc(e, o, div); });
  olayListe.appendChild(div);
  olayDom.push(div);
});

// ---------- SAĞ TIK → KOPYALA ----------
// 🔴 Emre, 24 Ağustos 2026: *"kronoloji maddelerine sağ tıklayıp kopyalama
// imkânı olsun. ve kronoloji madde başlıkları içeriklerine de aynı şekilde
// metni kopyalama imkânı olsun."*
//
// ÖLÇÜLDÜ — ALTYAPI SORUSU ÖNCE SORULDU:
//     `user-select: none`  css'te HİÇ YOK  ⇒ seçim teknik olarak SERBEST
//     `contextmenu` işleyicisi                    YOK
//     `navigator.clipboard` kullanımı             YOK
// Yani tarayıcının kendi sağ-tık menüsü zaten çalışıyor. Ama pratikte işe
// yaramıyor, çünkü SATIRIN KENDİSİ TIKLANABİLİR: metni sürükleyerek
// seçmeye kalkan kullanıcı maddeye ATLIYOR.
// ⇒ Kusur "kopyalanamıyor" değil "SEÇİLEMİYOR" — ikisi ayrı şey, ve
//   çaresi de ayrı: seçimi açmak değil, SEÇİM GEREKTİRMEYEN bir kopyalama
//   yolu vermek.
//
// ⚠️ VARSAYILAN MENÜ ENGELLENİYOR AMA BEDELİ ÖLÇÜLDÜ: tarayıcının kendi
//    menüsünde "araştır", "çeviri" gibi seçenekler de var. Onları kaybetmemek
//    için SHIFT + sağ tık varsayılan menüyü açık bırakıyor — tarayıcıların
//    kendi sözleşmesi de budur.
var _kopyaMenu = null;

function _kopyaMenusuKapat() {
  if (_kopyaMenu) { _kopyaMenu.remove(); _kopyaMenu = null; }
}
document.addEventListener("click", _kopyaMenusuKapat);
document.addEventListener("scroll", _kopyaMenusuKapat, true);
window.addEventListener("blur", _kopyaMenusuKapat);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") _kopyaMenusuKapat();
});

// Panoya yaz. `navigator.clipboard` yalnız GÜVENLİ BAĞLAMDA (https ya da
// localhost) var; dosyadan açılan bir kopyada YOK. O yüzden eski yol
// yedekte duruyor — "çalışmıyor" demek yerine sessizce ikinciye düşüyor.
function _panoyaYaz(metin, geri) {
  var bitti = function (ok) { if (geri) geri(ok); };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(metin).then(function () { bitti(true); },
                                                function () { bitti(false); });
      return;
    }
  } catch (e) { /* güvenli bağlam yok — aşağıdaki yola düş */ }
  try {
    var ta = document.createElement("textarea");
    ta.value = metin;
    ta.style.cssText = "position:fixed;left:-9999px;top:0;";
    document.body.appendChild(ta);
    ta.select();
    var ok = document.execCommand("copy");
    ta.remove();
    bitti(ok);
  } catch (e2) { bitti(false); }
}

// Bir kronoloji maddesinin TAM METNİ — panelde görünen sırayla.
// ⚠️ Alanların hepsi isteğe bağlı; boş olan satır HİÇ yazılmıyor ki
//    kopyalanan metinde boş başlıklar durmasın.
function olayMetniUret(o, tam) {
  var s = [];
  s.push(olayTarihYazi(o) + " — " + o.b);
  if (!tam) return s.join("\n");
  if (o.yer) s.push("Yer: " + o.yer);
  if (o.kisiler) s.push("Kişiler: " + o.kisiler);
  if (o.d) s.push("", o.d);
  if (o.kaynak) s.push("", "Kaynak: TDV " + o.kaynak);
  return s.join("\n");
}

function kopyaMenusuAc(e, o, kaynakEl) {
  if (e.shiftKey) return;            // SHIFT: tarayıcının kendi menüsü
  e.preventDefault();
  _kopyaMenusuKapat();

  var secili = String(window.getSelection ? window.getSelection() : "").trim();
  var secenekler = [];
  if (secili) secenekler.push(["Seçili metni kopyala", secili]);
  if (o) {
    secenekler.push(["Başlığı kopyala", olayMetniUret(o, false)]);
    secenekler.push(["Maddenin tamamını kopyala", olayMetniUret(o, true)]);
  } else if (kaynakEl) {
    // Panel: `o` yok, ekranda ne yazıyorsa o kopyalanır.
    var t = (kaynakEl.innerText || kaynakEl.textContent || "").trim();
    if (t) secenekler.push(["Bu bölümü kopyala", t]);
  }
  if (!secenekler.length) return;

  var m = document.createElement("div");
  m.className = "kopya-menu";
  secenekler.forEach(function (par) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = par[0];
    b.addEventListener("click", function (ev) {
      ev.stopPropagation();
      _panoyaYaz(par[1], function (ok) {
        // ⚠️ SESSİZ BAŞARI YOK: kullanıcı kopyalandığını GÖRMELİ, yoksa
        //    ikinci kez tıklar ve "çalışmıyor" der. Başarısızlık da
        //    söylenir — sessiz başarısızlık en kötüsü.
        b.textContent = ok ? "✓ kopyalandı" : "🔴 kopyalanamadı";
        setTimeout(_kopyaMenusuKapat, ok ? 550 : 1400);
      });
    });
    m.appendChild(b);
  });
  document.body.appendChild(m);

  // Ekran dışına taşmasın: önce ölç, sonra yerleştir.
  var g = m.getBoundingClientRect();
  var x = Math.min(e.clientX, window.innerWidth - g.width - 8);
  var y = Math.min(e.clientY, window.innerHeight - g.height - 8);
  m.style.left = Math.max(4, x) + "px";
  m.style.top = Math.max(4, y) + "px";
  _kopyaMenu = m;
}

// Detay paneli — `o` yok, ekrandaki metin kopyalanıyor.
(function () {
  var ob = document.getElementById("olay-bilgi");
  if (!ob) return;
  ob.addEventListener("contextmenu", function (e) {
    var hedef = e.target.closest("#ob-detay, #ob-baslik, #ob-ozel, #olay-bilgi");
    kopyaMenusuAc(e, aktifOlay || null, hedef || ob);
  });
})();

// ---------- KRONOLOJİ SÜZGECİ — arayüz katmanı (PLAN-ETIKET §8) ----------
// Mantık `js/suzgec.js`'te ve DOM'suz; node'da 20 sağlamayla sınandı. Burada
// yalnız INCE katman var: kutucuklar, sayılar, URL. Karar mantığı buraya
// KOPYALANMIYOR — iki yerde duran kural bayatlar (§35).
//
// 🔴 SÜZME = GİZLEME, SİLME DEĞİL. `olaylar` dizisine dokunulmuyor; yalnız
// satıra `.suzuldu` sınıfı biniyor. Sebebi mimarî: zaman göstergesi, ikili
// arama, "şimdiki" vurgusu ve harita senkronu hepsi indeks üzerinden çalışıyor.
// Diziyi süzseydik bütün indeksler kayardı ve süzgeç açılınca harita yanlış
// tarihe giderdi — kullanıcının göremeyeceği, denetimin ötmeyeceği bir hata.
var suzgecSecim = null;                       // null = süzme yok (hepsi açık)

function suzgecUygula() {
  var gizli = 0;
  for (var i = 0; i < olaylar.length; i++) {
    var gorunur = !suzgecSecim ||
                  suzgecSecim.indexOf(window.SUZGEC.maddeGrubu(olaylar[i])) >= 0;
    olayDom[i].classList.toggle("suzuldu", !gorunur);
    if (!gorunur) gizli++;
  }
  var sayacEl = document.getElementById("olay-sayac");
  if (sayacEl) sayacEl.dataset.gizli = gizli;   // olaylarGuncelle metni yazarken okur
  olaylarGuncelleZorla();
  suzgecUrlYaz();
}
// Sayaç metnini tazelemek için: olaylarGuncelle erken dönüyor (aynı indekste
// iş yapmıyor), süzgeç değişince metin bayat kalırdı.
function olaylarGuncelleZorla() {
  var eski = sonVurgulanan;
  sonVurgulanan = -1;
  olaylarGuncelle(suanki);
  if (eski === sonVurgulanan) return;
}

// ⚠️ SEÇİM URL'DE TAŞINIR — kullanıcı kararı: bir süzme sonucu PAYLAŞILABİLİR
// olmalı ("akademik başvuru kaynağı" iddiasının pratik karşılığı). Sonradan
// eklenmesi zor, baştan kolay.
function suzgecUrlYaz() {
  var u = new URL(window.location.href);
  if (suzgecSecim) u.searchParams.set("konu", suzgecSecim.join(","));
  else u.searchParams.delete("konu");
  window.history.replaceState(null, "", u);
}
function suzgecUrlOku() {
  var s = new URL(window.location.href).searchParams.get("konu");
  if (!s) return null;
  var gecerli = window.SUZGEC.KONU_GRUPLARI.map(function (g) { return g.id; });
  var secili = s.split(",").filter(function (g) { return gecerli.indexOf(g) >= 0; });
  // Hepsi seçiliyse süzme yok sayılır: URL'de kalıntı bırakmasın.
  return (!secili.length || secili.length === gecerli.length) ? null : secili;
}

(function suzgecKur() {
  if (!window.SUZGEC || !olayListe) return;    // modül yüklenmediyse sessizce yok
  var sayilar = window.SUZGEC.grupSayilari(olaylar);
  var kutu = document.createElement("div");
  kutu.id = "konu-suzgec";
  var baslik = document.createElement("button");
  baslik.className = "suzgec-baslik";
  baslik.textContent = "⛭ Konu süzgeci";
  var govde = document.createElement("div");
  govde.className = "suzgec-govde";

  suzgecSecim = suzgecUrlOku();
  window.SUZGEC.KONU_GRUPLARI.forEach(function (g) {
    var et = document.createElement("label");
    var kt = document.createElement("input");
    kt.type = "checkbox";
    kt.value = g.id;
    kt.checked = !suzgecSecim || suzgecSecim.indexOf(g.id) >= 0;
    kt.addEventListener("change", function () {
      var secili = [];
      govde.querySelectorAll("input:checked").forEach(function (e) { secili.push(e.value); });
      // Hepsi işaretliyse "süzme yok" — böylece sayaçta ve URL'de kalıntı olmaz.
      suzgecSecim = (secili.length === window.SUZGEC.KONU_GRUPLARI.length) ? null : secili;
      suzgecUygula();
    });
    et.appendChild(kt);
    var ad = document.createElement("span");
    ad.textContent = g.ad;
    et.appendChild(ad);
    // ⚠️ Sayı SÜZÜLMEMİŞ küme üzerinden: bir grubu kapatınca diğerlerinin sayısı
    // değişmemeli, yoksa "kapattığım şey ötekini de mi azalttı" diye okunur.
    var n = document.createElement("i");
    n.textContent = sayilar[g.id];
    et.appendChild(n);
    govde.appendChild(et);
  });

  baslik.addEventListener("click", function () {
    kutu.classList.toggle("acik");
  });
  kutu.appendChild(baslik);
  kutu.appendChild(govde);
  // 🔴 EMRE, 18 Ağustos 2026: "kronoloji sütununun üstünde, kronoloji
  // başlığının altında konu süzgeci SATIRINI İPTAL edip süzgeci kronoloji
  // yazısının YANINA koymalı. Kronoloji yazısının altında '706/1223 başlık'
  // yazısı olsun, ORTA KISMI süzgeç butonuna ayıralım."
  // Eskiden kutu `#olay-listesi`nin ÜSTÜNE ayrı bir satır olarak giriyordu ve
  // listeden dikey yer çalıyordu. Şimdi başlığın (h2) ORTASINA giriyor:
  //     [📜 Kronoloji]        [⛭ süzgeç]        [🛩 ⚙]
  //     [706 / 1223 başlık]
  // Açılır gövde `position:absolute` — açılınca başlığı büyütmüyor, listenin
  // üstüne biniyor (css/style.css #konu-suzgec).
  var _h2 = document.querySelector("#olay-akisi h2");
  var _ucus = document.getElementById("ucus-grup");
  if (_h2 && _ucus) _h2.insertBefore(kutu, _ucus);
  else olayListe.parentNode.insertBefore(kutu, olayListe);   // yedek: eski yer
  if (suzgecSecim) kutu.classList.add("acik");   // süzme açıksa gizli kalmasın
  suzgecUygula();
})();

// Titreme önleme: her tıkta 234 satırı yeniden boyamak yerine yalnızca eski ve
// yeni konum arasındaki satırlar güncellenir; kaydırma oynatmada seyreltilir.
var sonVurgulanan = -1;
// 🔴 `gecmis` SINIRI VURGUDAN AYRI TUTULUR (H-0019, 24 Ağustos 2026).
// Eskiden `sonVurgulanan` İKİ İŞ birden yapıyordu: vurgunun yeri VE `gecmis`
// boyamasının hangi aralıkta tazeleneceği. İkisi hep aynı olduğu için sorun
// yoktu. Beraberlikte (aynı güne iki madde) ayrılınca vurgu 101'de kalır,
// sınır 102'de — ve bir sonraki geri gidişte 102 aralığın DIŞINDA kalıp
// `gecmis` sınıfı bayat kalırdı: hata vermeyen, yanlış boyalı bir satır.
var sonYeni = -1;
var sonKaydirma = 0;
function olaylarGuncelle(t) {
  var lo = 0, hi = olaylar.length - 1, yeni = -1;
  while (lo <= hi) {                          // gi <= t olan son olay (ikili arama)
    var orta = (lo + hi) >> 1;
    if (olaylar[orta].gi <= t) { yeni = orta; lo = orta + 1; } else { hi = orta - 1; }
  }
  // Aynı güne iki madde düşerse kullanıcının GİTTİĞİ madde vurgulanır —
  // gerekçesi ve sınırı `zaman.js`teki `suankiOlay` başlığında.
  var vurgu = yeni;
  if (yeni >= 0 && suankiOlayI >= 0 && suankiOlayI < olaylar.length &&
      olaylar[suankiOlayI] && olaylar[suankiOlayI].gi === olaylar[yeni].gi &&
      !(olayDom[suankiOlayI] && olayDom[suankiOlayI].classList.contains("suzuldu")))
    vurgu = suankiOlayI;
  if (yeni === sonYeni && vurgu === sonVurgulanan) return;
  if (yeni !== sonYeni) {
    var a = Math.max(0, Math.min(yeni, sonYeni));
    var b = Math.min(olaylar.length - 1, Math.max(yeni, sonYeni));
    if (sonYeni < 0) { a = 0; b = olaylar.length - 1; }
    for (var i = a; i <= b; i++) olayDom[i].classList.toggle("gecmis", olaylar[i].gi <= t);
    sonYeni = yeni;
  }
  if (sonVurgulanan >= 0) olayDom[sonVurgulanan].classList.remove("simdiki");
  var sayacEl = document.getElementById("olay-sayac");
  if (sayacEl) {
    // ⚠️ Süzgeç açıkken gizlenen sayısı YAZILIR. Yoksa sayaç "994 başlık" der,
    // listede 905 satır görünür ve aradaki fark sessiz kalır — kullanıcı
    // eksikliği kusur sanar. Görünen her değişikliğin sayısı da görünmeli.
    var gizli = +(sayacEl.dataset.gizli || 0);
    sayacEl.textContent = (vurgu + 1) + " / " + olaylar.length + " başlık" +
                          (gizli ? "  ·  " + gizli + " gizli" : "");
  }
  if (vurgu >= 0) {
    olayDom[vurgu].classList.add("simdiki");
    var simdi = Date.now();
    if (!zamanlayici || simdi - sonKaydirma > 700) {
      sonKaydirma = simdi;
      // ⚠️ scrollIntoView BÜTÜN kaydırılabilir ATALARI kaydırır — `html` dâhil.
      // 7 Ağustos 2026: zaman çubuğu oynarken belge 217px kaydı ve ÜST BAR
      // ekranın dışına çıktı; kullanıcı "butonlar görünmüyor, panel butonunun
      // yarısı görünüyor" dedi. Asıl çare css/style.css'te (`html`e de
      // overflow:hidden), ama burada da kaynağı kesiyoruz: liste kabını ELLE
      // kaydırmak hiçbir atayı etkilemez.
      var _kap = olayDom[vurgu].parentElement;
      if (_kap && _kap.scrollHeight > _kap.clientHeight) {
        // 🔴 EMRE, 18 Ağustos 2026: "o madde EN BAŞTA görünmeli; sonraki
        // kronolojik maddeler ondan sonra ikinci üçüncü görünmeli."
        // Eskiden madde EKRANIN ORTASINA alınıyordu; ekranın üst yarısı
        // GEÇMİŞ maddelere gidiyordu. Başa alınınca aynı ekran SONRAKİ
        // maddeleri gösteriyor — "şimdi neredeyim, sırada ne var" tek bakışta.
        //
        // ⚠️ `offsetTop` KULLANILMIYOR ve sebebi ÖLÇÜLDÜ: offsetTop kaydırılan
        // kaba değil `offsetParent`a göredir; `#olay-listesi` konumlandırılmış
        // olmadığı için madde 157 px YUKARI kayıyor ve başın ÜSTÜNDE kalıyordu
        // (tarayıcıda ölçüldü: listenin üstünden -157 px). Kusur eski ortalama
        // kodunda da vardı, yalnız ortalama onu gizliyordu.
        // Geometri farkı her durumda doğru: kabın üstü ile maddenin üstü
        // arasındaki mesafe kadar kaydır.
        _kap.scrollTop += olayDom[vurgu].getBoundingClientRect().top
                          - _kap.getBoundingClientRect().top;
      } else {
        olayDom[vurgu].scrollIntoView({ block: "nearest", behavior: zamanlayici ? "auto" : "smooth" });
      }
    }
  }
  sonVurgulanan = vurgu;
}

// ---------- Olay detay penceresi ----------
var detayPencere = document.getElementById("olay-detay");
var detayIndex = -1;
function detayAc(i) {
  detayIndex = i;
  var o = olaylar[i];
  document.getElementById("detay-tarih").textContent = o.gun || idxYazi(o.gi);
  document.getElementById("detay-baslik").textContent = o.b;
  var meta = document.getElementById("detay-meta");
  meta.innerHTML = "";
  if (o.yer) { var y = document.createElement("span"); y.textContent = "📍 " + o.yer; meta.appendChild(y); }
  if (o.kisiler) { var k = document.createElement("span"); k.textContent = "👤 " + o.kisiler; meta.appendChild(k); }
  document.getElementById("detay-metin").textContent = o.d;
  var kaynakEl = document.getElementById("detay-kaynak");
  if (o.kaynak) {
    kaynakEl.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
    kaynakEl.textContent = "📖 Kaynak: TDV İslâm Ansiklopedisi";
    kaynakEl.style.display = "";
  } else { kaynakEl.style.display = "none"; }
  detayPencere.classList.remove("gizli");
}
document.getElementById("detay-kapat").addEventListener("click", function () {
  detayPencere.classList.add("gizli");
});
detayPencere.addEventListener("click", function (e) {
  if (e.target === detayPencere) detayPencere.classList.add("gizli");
});
// Pencere artık tam ekran örtü değil (hatalar 14 md.1) — sağ alta yaslanıyor ve
// harita açıkta kalıyor. Dolayısıyla "dışarı tıkla kapat" yolu fiilen kalktı;
// yerine ESC konuyor, yoksa kapatmanın tek yolu küçük ✕ düğmesi olurdu.
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !detayPencere.classList.contains("gizli")) {
    detayPencere.classList.add("gizli");
  }
});
document.getElementById("detay-git").addEventListener("click", function () {
  if (detayIndex >= 0) tarihAyarla(olaylar[detayIndex].gi);
  detayPencere.classList.add("gizli");
});

// ---------- Dizin penceresi (kişiler / savaşlar / antlaşmalar / seriler) ----------
var dizinPencere = document.getElementById("dizin");
// p2/H-0010 (denetim, 3 Ağustos) — kullanıcının kendi cümlesiyle "sessiz
// kayıp" sınıfı: mimar (4) ve edebiyatçı (4) kayıtları kisiler.js'te VARDI
// ama burada tanımlı olmadıkları için bu sekmede HİÇ görünmüyorlardı —
// veri doğru, ekran eksikti. `dizinDoldur`deki döngü yalnız bu sözlüğün
// KENDİ anahtarlarını geziyor (`Object.keys(TUR_ADI)`), yani kisiler.js'te
// yeni bir `tur` değeri açılırsa buraya da eklenmesi ŞART — aksi hâlde
// aynı sessiz kayıp tekrarlanır.
var TUR_ADI = { padisah:"Padişahlar", sadrazam:"Sadrazamlar", "vezir-pasa":"Vezirler ve Paşalar",
  komutan:"Komutanlar", denizci:"Denizciler", alim:"Âlimler", mimar:"Mimarlar",
  edebiyatci:"Edebiyatçılar", hanedan:"Hanedan",
  "yabanci-hukumdar":"Yabancı Hükümdarlar", "yabanci-komutan":"Yabancı Komutanlar", siyasi:"Siyasî Figürler" };

function dizinDoldur(sekme) {
  var kutu = document.getElementById("dizin-icerik");
  kutu.innerHTML = "";
  document.querySelectorAll("#dizin-sekmeler button").forEach(function (b) {
    b.classList.toggle("aktif", b.dataset.s === sekme);
  });
  function satir(sol, orta, sag, tik) {
    var d = document.createElement("div");
    d.className = "dz-satir" + (tik ? " tikla" : "");
    d.innerHTML = '<span class="dz-sol"></span><span class="dz-orta"></span><span class="dz-sag"></span>';
    d.children[0].textContent = sol; d.children[1].textContent = orta; d.children[2].textContent = sag;
    if (tik) d.addEventListener("click", tik);
    kutu.appendChild(d);
  }
  function baslik(ad) {
    var h = document.createElement("div"); h.className = "dz-grup"; h.textContent = ad; kutu.appendChild(h);
  }
  if (sekme === "kisiler") {
    baslik("Padişahlar (36) — tarih ilerledikçe üstteki kartta");
    var gruplar = {};
    (window.KISILER || []).forEach(function (k) { (gruplar[k.tur] = gruplar[k.tur] || []).push(k); });
    Object.keys(TUR_ADI).forEach(function (tur) {
      if (!gruplar[tur]) return;
      baslik(TUR_ADI[tur] + " (" + gruplar[tur].length + ")");
      gruplar[tur].forEach(function (k) { satir(k.ad, k.donem || "", k.not || ""); });
    });
  } else if (sekme === "savaslar") {
    (window.SAVASLAR || []).forEach(function (s) {
      var isaret = s.sonuc === "zafer" ? "✔" : s.sonuc === "yenilgi" ? "✖" : "◐";
      satir(kesinlikliYazi(s.t, gunIdx(s.t)), s.ad + " — " + karsiTaraf(s), isaret,
            function () { dizinPencere.classList.add("gizli"); tarihAyarla(gunIdx(s.t)); });
    });
  } else if (sekme === "antlasmalar") {
    (window.ANTLASMALAR || []).forEach(function (a) {
      satir(kesinlikliYazi(a.t, gunIdx(a.t)), a.ad + " — " + karsiTaraf(a), a.ozet,
            function () { dizinPencere.classList.add("gizli"); tarihAyarla(gunIdx(a.t)); });
    });
  } else if (sekme === "sehirler") {
    // 4 kademeli idari tasnif (yerlesimler.js "k" alanı; Osmanlı taksimatıyla birebir)
    var KADEME_ADI = { 1:"1. Kademe — Payitahtlar",
                       2:"2. Kademe — Eyalet / bölge merkezleri",
                       3:"3. Kademe — Sancak merkezleri ve kaleler",
                       4:"4. Kademe — Küçük birimler (kaza-karye)" };
    var kgruplar = { 1:[], 2:[], 3:[], 4:[] };
    (window.YERLESIMLER || []).forEach(function (y) {
      var don = (y.d || []).concat(y.v || []);
      if (!don.length || !y.k) return;   // komşular ve sahipsiz noktalar dizine girmez
      kgruplar[y.k].push({ ad: y.ad, tur: y.tur, lat: y.lat, lon: y.lon, m: y.m, kur: y.kur, don: don });
    });
    [1, 2, 3, 4].forEach(function (kd) {
      if (!kgruplar[kd].length) return;
      baslik(KADEME_ADI[kd] + " (" + kgruplar[kd].length + ")");
      kgruplar[kd].sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); })
      .forEach(function (s) {
        var ilk = s.don.reduce(function (a, b) { return a.f < b.f ? a : b; });
        var son = s.don.reduce(function (a, b) { return a.t > b.t ? a : b; });
        var koord = s.lat.toFixed(3) + "K, " + s.lon.toFixed(3) + "D" +
                    (s.kur ? " · kur. " + s.kur.slice(0, 4) : "");
        satir((s.tur === "kale" ? "🏰 " : "") + s.ad + (s.m ? " → " + s.m : ""), koord,
              idxYazi(gunIdx(ilk.f)) + " → " + idxYazi(gunIdx(son.t)),
              function () {
                dizinPencere.classList.add("gizli");
                otoZoom = false;
                document.getElementById("btn-zoom").classList.add("pasif");
                tarihAyarla(gunIdx(ilk.f));
                // 🔴 22 Ağustos — sabit `zoom: 6.2` KALDIRILDI. Dizinden bir
                // şehre gitmek de bir "olay mahalline gitme"dir; kullanıcının
                // ⚙ genişlik ayarını burada yok saymak, sonraki uçuşlarla
                // arasında bir zoom sıçraması üretiyordu (kabul ölçütü ③:
                // *"yakınlık ayarı sabit kalır"*).
                dizindenUc(s.lat, s.lon);
              });
      });
    });
  } else if (sekme === "yerlesimler") {
    // 🔴 NİÇİN "sehirler" SEKMESİ YETMEDİ — ölçüldü, 8 Ağustos 2026.
    // O sekme iki süzgeç uyguluyor: `if (!don.length || !y.k) return;`
    //   ① `y.k` yoksa atlıyor  → `k:` yalnız OSMANLI sahasında dolu (723 nokta),
    //      geri kalan 1538 YABANCI yerleşim dizinde HİÇ GÖRÜNMÜYORDU
    //   ② `d`/`v` yoksa atlıyor → yalnız `s:` (yabancı) dönemi olan nokta da yok
    // ⇒ Kullanıcı "Belgrad hangi tarihte kimdeymiş" diye sorabiliyordu ama
    //   "Tebriz hangi tarihte kimdeymiş" diye SORAMIYORDU.
    // Bu sekme SÜZGEÇSİZDİR: her yerleşim, her dönem, sahibiyle.
    // ⚠️ `sehirler` sekmesine DOKUNULMADI — o Osmanlı idarî tasnifini gösteriyor
    // ve işi başka. İki sekme iki soruya cevap veriyor, biri ötekinin yerini almaz.
    var YRL = window.YERLESIMLER || [];
    var arama = document.createElement("input");
    arama.className = "dz-arama";
    arama.placeholder = "Yerleşim ara — " + YRL.length + " kayıt (Byzantion? Konstantiniyye? İstanbul yazın)";
    kutu.appendChild(arama);
    var liste = document.createElement("div");
    kutu.appendChild(liste);

    function donemler(y) {
      // Dört kova da tek listede, KRONOLOJİK: kullanıcı "kimdeymiş" diye
      // sorduğunda `d`/`v`/`s`/`isg` ayrımını değil SIRAYI görmek istiyor.
      var hepsi = [];
      (y.d || []).forEach(function (p) { hepsi.push({ f:p.f, t:p.t, ad:"Osmanlı", cins:"doğrudan" }); });
      (y.v || []).forEach(function (p) { hepsi.push({ f:p.f, t:p.t, ad:"Osmanlı", cins:"tâbi" }); });
      (y.s || []).forEach(function (p) { hepsi.push({ f:p.f, t:p.t, ad:devletAdi(p.d), cins:"" }); });
      (y.isg || []).forEach(function (p) { hepsi.push({ f:p.f, t:p.t, ad:devletAdi(p.d), cins:"işgal" }); });
      hepsi.sort(function (a, b) { return a.f < b.f ? -1 : a.f > b.f ? 1 : 0; });
      return hepsi;
    }

    function detay(y) {
      liste.innerHTML = "";
      var geri = document.createElement("div");
      geri.className = "dz-satir tikla";
      geri.innerHTML = '<span class="dz-sol">← bütün yerleşimlere dön</span>';
      geri.addEventListener("click", function () { ciz(arama.value); });
      liste.appendChild(geri);

      var h = document.createElement("div");
      h.className = "dz-grup";
      h.textContent = y.ad + " — " + y.lat.toFixed(3) + "K, " + y.lon.toFixed(3) + "D" +
                      (y.tur ? " · " + y.tur : "") + (y.kur ? " · kuruluş " + y.kur.slice(0, 4) : "");
      liste.appendChild(h);

      var dn = donemler(y);
      if (!dn.length) {
        var b = document.createElement("div");
        b.className = "dz-satir";
        // `kasitli_bosluk` bir kusur DEĞİL bir HÜKÜMDÜR — `neden:` alanı
        // kullanıcının "burada niye hiçbir şey yok" sorusunun cevabıdır.
        b.innerHTML = '<span class="dz-sol"></span>';
        b.children[0].textContent = y.kasitli_bosluk
          ? "⬜ Kasıtlı boşluk — " + (y.neden || "gerekçe yazılmamış")
          : "⬜ Bu yerleşimin hiçbir dönemi kayıtlı değil";
        liste.appendChild(b);
      }
      dn.forEach(function (p) {
        var d = document.createElement("div");
        d.className = "dz-satir tikla";
        d.innerHTML = '<span class="dz-sol"></span><span class="dz-orta"></span><span class="dz-sag"></span>';
        d.children[0].textContent = p.ad + (p.cins ? " (" + p.cins + ")" : "");
        d.children[1].textContent = p.f + " → " + p.t;
        d.children[2].textContent = (function () {
          var yil = Math.round((gunIdx(p.t) - gunIdx(p.f)) / 365.25);
          return yil >= 1 ? yil + " yıl" : "";
        })();
        d.addEventListener("click", function () {
          dizinPencere.classList.add("gizli");
          otoZoom = false;
          document.getElementById("btn-zoom").classList.add("pasif");
          tarihAyarla(gunIdx(p.f));
          dizindenUc(y.lat, y.lon);          // aynı gerekçe — sabit 6.2 kalktı
        });
        liste.appendChild(d);
      });
    }

    function ciz(q) {
      liste.innerHTML = "";
      q = (q || "").toLocaleLowerCase("tr").trim();
      var bulunan = YRL.filter(function (y) {
        return !q || y.ad.toLocaleLowerCase("tr").indexOf(q) >= 0;
      });
      bulunan.sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); });
      var h = document.createElement("div");
      h.className = "dz-grup";
      h.textContent = q ? bulunan.length + " yerleşim bulundu"
                        : "Bütün yerleşimler (" + bulunan.length + ") — bir satıra tıkla, kronolojisi açılsın";
      liste.appendChild(h);
      // Uzun listeyi kırpmak yerine ilk 300'ü basıp KAÇ TANESİNİN
      // gösterilmediğini SÖYLÜYORUZ — sessiz kırpma "hepsi bu" diye okunur.
      bulunan.slice(0, 300).forEach(function (y) {
        var dn = donemler(y);
        var ilk = dn.length ? dn[0].f.slice(0, 4) : "—";
        var son = dn.length ? dn[dn.length - 1].t.slice(0, 4) : "—";
        var d = document.createElement("div");
        d.className = "dz-satir tikla";
        d.innerHTML = '<span class="dz-sol"></span><span class="dz-orta"></span><span class="dz-sag"></span>';
        d.children[0].textContent = (y.tur === "kale" ? "🏰 " : y.tur === "liman" ? "⚓ " : "") + y.ad;
        d.children[1].textContent = dn.length ? dn.length + " dönem" : "kayıt yok";
        d.children[2].textContent = ilk + " → " + son;
        d.addEventListener("click", function () { detay(y); });
        liste.appendChild(d);
      });
      if (bulunan.length > 300) {
        var u = document.createElement("div");
        u.className = "dz-grup";
        u.textContent = "… " + (bulunan.length - 300) + " yerleşim daha — aramayı daraltın";
        liste.appendChild(u);
      }
    }
    arama.addEventListener("input", function () { ciz(arama.value); });
    ciz("");
  } else if (sekme === "devletler") {
    // 🔴 TESPİH KUŞAK 0/1 sessiz kayıp taraması (4 Ağustos, arac/denetle_gorunur.py
    // ölçtü) — `sehzadelik` (4 kayıt: Fetret Devri'nin şehzade saltanatları) bu
    // sözlükte yoktu, TUR_ADI'nin mimar/edebiyatci'yi unutmasıyla AYNI hata sınıfı.
    var DEVLET_TUR_ADI = { imparatorluk:"İmparatorluklar", sultanlik:"Sultanlıklar", devlet:"Devletler",
      hanlik:"Hanlıklar", krallik:"Krallıklar", cumhuriyet:"Cumhuriyetler", prenslik:"Prenslikler",
      dukalik:"Dükalıklar", beylik:"Anadolu Beylikleri", ocaklik:"Kuzey Afrika Ocakları",
      hanedanlik:"Özerk Hanedanlıklar", sehzadelik:"Fetret Devri Şehzade Saltanatları",
      "gecici-isgal":"Geçici İşgaller / Statü Değişimleri" };
    var dgruplar = {};
    (window.DEVLETLER || []).forEach(function (d) { (dgruplar[d.tur] = dgruplar[d.tur] || []).push(d); });
    Object.keys(DEVLET_TUR_ADI).forEach(function (tur) {
      if (!dgruplar[tur]) return;
      baslik(DEVLET_TUR_ADI[tur] + " (" + dgruplar[tur].length + ")");
      dgruplar[tur].forEach(function (d) {
        satir(d.ad, d.baskent || "", (d.f || "") + " → " + (d.t || ""),
              function () { dizinPencere.classList.add("gizli"); tarihAyarla(gunIdx(d.f)); });
      });
    });
  } else if (sekme === "kartvizitler") {
    // PADISAH-KARTVIZITI.md — "kart sessizce kaybolamaz." Bu sekme K1-K5
    // kademelerindeki HERKESİ listeler; `vefat_id` çözülen satır tıklanıp
    // o maddeye götürüyor, çözülemeyen satır TIKSIZ kalıyor ama SİLİNMİYOR
    // — sağ sütunda "henüz kronolojiye bağlanmadı" yazıyor. Kırpma yok ·
    // boş alan yok · kayıp satır yok, aynı ilkenin üçüncü görünümü
    // (oturumlar/ARAYUZ-3-SARTNAME.md § "çapasız kart").
    if (!VEFAT_INDEX) vefatIndexKur();
    var K1 = (window.PADISAHLAR || []).filter(function (p) { return !p.ozel; })
      .filter(function (p, i, a) { return a.findIndex(function (q) { return q.id === p.id; }) === i; });
    var KV_KADEME = [
      { ad: "K1 — Padişahlar", kisi: K1 },
      { ad: "K2 — Taht mücadelesini kaybedenler", kisi: (window.KISILER || []).filter(function (k) { return k.tur === "sehzade"; }) },
      { ad: "K3 — Vâlide sultanlar ve hanedan kadınları", kisi: (window.KISILER || []).filter(function (k) { return k.tur === "valide" || k.tur === "hanedan"; }) },
      { ad: "K4 — Sadrazamlar", kisi: (window.KISILER || []).filter(function (k) { return k.tur === "sadrazam"; }) },
      { ad: "K5 — Komutanlar ve denizciler", kisi: (window.KISILER || []).filter(function (k) { return k.tur === "komutan" || k.tur === "denizci"; }) }
    ];
    KV_KADEME.forEach(function (grp) {
      if (!grp.kisi.length) return;
      var bagli = grp.kisi.filter(function (k) { return !!VEFAT_INDEX[k.id]; }).length;
      baslik(grp.ad + " (" + bagli + "/" + grp.kisi.length + " bağlı)");
      grp.kisi.forEach(function (k) {
        var orta = k.donem || ((k.from && k.to) ? k.from + " → " + k.to : "");
        var madde = VEFAT_INDEX[k.id];
        if (madde) {
          satir(k.ad, orta, idxYazi(madde.gi),
                function () { dizinPencere.classList.add("gizli"); tarihAyarla(madde.gi); obGoster(madde); });
        } else {
          satir(k.ad, orta, "henüz kronolojiye bağlanmadı");
        }
      });
    });
  } else {
    (window.SERILER || []).forEach(function (s) {
      var say = (window.SAVASLAR || []).filter(function (x) { return x.seri === s.id; }).length;
      satir(s.aralik, s.ad + (say ? " (" + say + " kayıtlı muharebe)" : ""), s.ozet);
    });
  }
}
var VEFAT_INDEX = null;
function vefatIndexKur() {
  VEFAT_INDEX = {};
  olaylar.forEach(function (o) { if (o.vefat_id) VEFAT_INDEX[o.vefat_id] = o; });
}
// p2/H-0010 — kullanıcı: "Hakkında butonuna artık gerek yok." Bütün
// hakkindaKur/bekleyenTablo mekanizması ve #hakkinda modalı (proje künyesi +
// BEKLEYENLER tablosu) bu yüzden kaldırıldı. `data/bekleyenler.js` başka
// hiçbir yerden okunmuyor (tek kullanıcısı buydu) ama dosya arac/uret_
// bekleyenler.py'nin ürettiği bir üretim çıktısı — o script'e dokunmak bu
// oturumun (ARAYÜZ) dosya sahipliği dışında, script etiketi silinmedi.

document.getElementById("btn-dizin").addEventListener("click", function () {
  dizinPencere.classList.remove("gizli");
  dizinDoldur("kisiler");
});
document.getElementById("dizin-kapat").addEventListener("click", function () {
  dizinPencere.classList.add("gizli");
});
dizinPencere.addEventListener("click", function (e) {
  if (e.target === dizinPencere) dizinPencere.classList.add("gizli");
});
document.querySelectorAll("#dizin-sekmeler button").forEach(function (b) {
  b.addEventListener("click", function () { dizinDoldur(b.dataset.s); });
});

// ---------- Zaman kontrolü ----------
var kaydirici = document.getElementById("zaman");
// 🔴 21 Ağustos — `tarihGoster` (#tarih-goster, alt çubuğun "gün ay yıl"
// göstergesi) KALDIRILDI: Emre "üst çubukta zaten bir tarih göstergesi
// var" dedi (PAKET 0026/H-0001) ve haklı — `ustbarTarih` (aşağıda) AYNI
// `idxYazi(suanki)` hesabını ZATEN yazıyordu, iki yerde aynı bilgi
// duruyordu. Öğe HTML'den silindi; burada da değişken TUTULMADI (null
// bırakıp `guncelle()`de sessiz `TypeError` riskini AÇIK bırakmak yerine).
var donemEtiketi = document.getElementById("donem-etiketi");
var btnOynat = document.getElementById("btn-oynat");
var hizSec = document.getElementById("hiz");
// p2/H-0010 — üst çubuğun ortası (tarih) ve sağdaki kocaman YIL.
var ustbarTarih = document.getElementById("ustbar-tarih");
var ustbarYil = document.getElementById("ustbar-yil");

kaydirici.min = BASLANGIC;
kaydirici.max = BITIS;
kaydirici.value = BASLANGIC;

var suanki = BASLANGIC;
var zamanlayici = null;
var aktifDonem = -1;

function alanYazi(km2) {
  if (km2 >= 1000000) return "≈ " + (km2 / 1000000).toFixed(2).replace(".", ",") + " milyon km²";
  return "≈ " + km2.toLocaleString("tr-TR") + " km²";
}

function guncelle() {
  if (ustbarTarih) ustbarTarih.textContent = idxYazi(suanki);
  if (ustbarYil) ustbarYil.textContent = idxTarih(suanki).y;
  var di = donemBul(suanki);
  if (haritaHazir && di === -2 && di !== aktifDonem) {
    // Fetret Devri: Osmanlı, tâbi ve bölge katmanları boşaltılır; sahnede yalnız
    // şehzade payları (devlet katmanı) kalır. zoomUygula çağrılmaz — kırpılacak
    // bir gövde yok, mevcut görüntü korunur.
    aktifDonem = di;
    harita.getSource("osmanli").setData(bosVeri());
    harita.getSource("vassal").setData(bosVeri());
    harita.getSource("imparatorluk").setData(bosVeri());
    harita.getSource("serbest").setData(bosVeri());
    harita.getSource("bolge").setData(bosVeri());
    // p23/H-0014 — etiketi ARTIK BURASI YAZMIYOR. Bu dal yalnız dönem
    // DEĞİŞTİĞİNDE giriliyor (`di !== aktifDonem`), yani buradan yazılan metin
    // sonraki bütün günlerde takılı kalıyordu. Tek yazan: tepeEtiketGuncelle().
    var alanBos = document.getElementById("alan-goster");
    if (alanBos) alanBos.textContent = "📐 tek gövde yok — paylar ayrı ayrı";
  } else if (haritaHazir && di >= 0 && di !== aktifDonem) {
    aktifDonem = di;
    var d = donemler[di];
    var osmVeri = d.o ? tekVeri(d.o) : petekVerisi(d);
    var vasVeri = d.v ? tekVeri(d.v) : bosVeri();
    harita.getSource("osmanli").setData(osmVeri);
    harita.getSource("vassal").setData(vasVeri);
    // İmparatorluk halesi: doğrudan + tâbi gövdeler TEK kaynakta. Kalın çizgi
    // dolguların ALTINDA çizildiği için yalnız dış çerçeve görünür, iç sınırlar
    // dolgunun altında kalıp silinir — union'ın görsel karşılığı.
    harita.getSource("imparatorluk").setData({
      type: "FeatureCollection",
      features: (osmVeri.features || []).concat(vasVeri.features || [])
    });
    // Serbest kenar: yalnız sahipsiz alanla sınırdaş olunan dönemlerde var.
    // hatCoz zaten FeatureCollection dönüyor (her hat kendi `u`sunu taşıyor).
    harita.getSource("serbest").setData(d.sb || bosVeri());
    harita.getSource("bolge").setData(bolgeVerisi(suanki));
    // p23/H-0014 — `d.ad` buradan YAZILMIYOR (yukarıdaki gerekçe).
    var alanEl = document.getElementById("alan-goster");
    if (alanEl) {
      {
        // ⚠️ ZİRVEYE GÖRE KONUM — kullanıcının asıl şikâyetinin cevabı.
        // Şikâyet "Rumeli şişik görünüyor" gibi duruyordu ama altındaki şey
        // "toprak kazandı mı kaybetti mi"yi GÖZLE yanlış okumaktı. Mercator'ün
        // 1/cos²φ şişmesi (41°K'de 1,8×) gözü yanıltıyor ve düzeltmesi pahalı:
        // küre MapLibre 4.7.1'de YOK, iki ana sürüm yükseltme gerekiyor.
        // ⇒ Gözün yapamadığını sayı yapıyor: her tarihte AYNI ölçeğe göre
        // okuma. Bu, projeksiyon bozulmasından tamamen bağımsız çalışır.
        var oran = donemZirve ? Math.round(100 * d.ao / donemZirve) : 0;
        // 🔴 YÖN OKU MİKTARSIZ — ve bu bir kısıt değil, ÖLÇÜLMÜŞ bir karar.
        // Ardışık dönem farkı 461/461 hesaplanabiliyor AMA işareti dönem adıyla
        // 27 vakada çelişiyor (386 işaretli farkın %7'si): 1671-01-01'de ad
        // "Katılım: Cezayir…" iken fark −596.000 km². Sebep kusur değil TANIM
        // FARKI — ad o kırılmada kimlerin katıldığını söyler, fark ise o günün
        // NET'ini verir. Miktarı maddenin yanına yazsaydık %93 doğru, %7 kendi
        // metniyle çelişen bir sayı çıkardı; en kötü tür, çünkü çoğu zaman
        // çalışır ve kimse şüphelenmez.
        // Yön ise her vakada doğru: "o gün toprak arttı/azaldı".
        // ⇒ Bildiğimiz kadarını gösteriyoruz, bilmediğimizi göstermiyoruz.
        var yon = "", yonAd = "";
        if (di > 0 && donemler[di - 1] && donemler[di - 1].ao !== undefined) {
          var onceki = donemler[di - 1].ao;
          if (d.ao > onceki) { yon = "▲"; yonAd = "bir önceki döneme göre arttı"; }
          else if (d.ao < onceki) { yon = "▼"; yonAd = "bir önceki döneme göre azaldı"; }
          // ⚠️ "değişmedi" 75 dönemde çıkıyor — seyrek değil. Simgesi olmalı ki
          // boşluk "veri yok" diye okunmasın; açıklaması title'da.
          else { yon = "–"; yonAd = "bir önceki döneme göre değişmedi"; }
        }
        alanEl.textContent = "📐 " + alanYazi(d.ao) +
          (d.av ? "  (+" + alanYazi(d.av).replace("≈ ", "") + " bağlı)" : "") +
          (oran ? "  ·  zirvenin %" + oran : "") +
          (yon ? "  " + yon : "");
        alanEl.title = yonAd
          ? yonAd + " (zirve: " + alanYazi(donemZirve).replace("≈ ", "") + ")"
          : "";
      }
    }
    zoomUygula(d);
  }
  // 🔴 SUÇLU ARAYIŞI — `agirOlc` sarmalayıcısı yalnız uçuş sürerken ölçer
  // (`_AGIR.acik`), öteki zaman doğrudan çağrıya düşer, maliyeti YOK.
  // Kare sayacı "866 ms boşluk" diyor ama KİMİN bloklattığını söylemiyor;
  // bu satırlar onu adıyla söyleyecek. Beşinci turda tahmin yürütmüyorum.
  // ═══════════════════════════════════════════════════════════════════
  // 🔴🔴 KIRPMA SIRASINDA YALNIZ TOPRAK ÇİZİLİR — ÖLÇÜLMÜŞ DARBOĞAZ
  //
  // Canlı ölçüm (22 Ağustos 2026, Emre'nin ekranı, tek bir olay tıklaması):
  //     sehirGuncelle  an  401 ms →  325 ms   ← gerçek tarih değişimi
  //     sehirGuncelle  an 2568 ms →  716 ms   ← KIRPMA
  //     sehirGuncelle  an 4220 ms →  591 ms   ← KIRPMA
  //                                  ───────
  //                                  1632 ms  (1307'si kırpmadan)
  //
  // Kırpma `tarihAyarla`yı dört kez çağırıyor ve her çağrı BÜTÜN çizim
  // zincirini yeniden koşturuyordu. Oysa kırpmanın işi TEK BİR ŞEY:
  // *"işte toprağın önceki hâli, işte sonraki."* Şehir işaretleri (2500+
  // DOM düğümü), savaşlar, seferler, koridorlar, devirler, işgaller
  // kırpmada DEĞİŞMEZ — yeniden kurulmalarının karşılığı YOK.
  //
  // ⚠️ `devirGuncelle` ve `isgalGuncelle` de KALIYOR: ikisi de toprak
  // görünümünün parçası (devir = el değiştirme oku, işgal = taralı örtü)
  // ve kırpmanın anlatmak istediği şeyin ta kendisi.
  // 🔴 Dışarıda kalan dördü GÖRSEL OLARAK DEĞİŞMEZ ama 1300 ms yiyordu.
  //
  // 📌 `§11`in *"iki aşama arasındaki boşluk"* ailesinin yeni üyesi: kırpma
  // DOĞRU çalışıyordu, çizim zinciri DOĞRU çalışıyordu — kusur, kırpmanın
  // ihtiyacı olmayan bir zinciri çağırmasındaydı.
  agirOlc("devletGuncelle", function () { devletGuncelle(suanki); });
  if (!_kirpmaKilitli) {
    agirOlc("sehirGuncelle", function () { sehirGuncelle(suanki); });
    agirOlc("savasGuncelle", function () { savasGuncelle(suanki); });
    agirOlc("seferGuncelle", function () { seferGuncelle(suanki); });
    agirOlc("koridorGuncelle", function () { koridorGuncelle(suanki); });
  } else {
    // 🔴 23 Agustos — BORC YAZILIYOR. 0027/H-0011: Emre "Hacova Meydan
    // Muharebesinin yeri haritada belli degil" dedi ve HAKLIYDI.
    // Bu atlama bugun eklendi (olculdu: 1307 ms kazandiriyor ve dordu de
    // kirpma sirasinda GORSEL OLARAK degismiyor) -- iyilestirme dogruydu,
    // ama ATLANANI BIR DAHA CAGIRMIYORDUM. Kirpma sirasinda dusen SON
    // guncelleme, isaretleri hic eklenmemis halde birakiyordu.
    // Belirti ARALIKLI: Granbosa ve Salankamen calisiyordu, Hacova
    // calismiyordu -- kirpmanin son cagriya denk gelip gelmemesine bagli.
    // Araliklilik onu daha sinsi yapar: "bende calisiyor" denip kapatilir.
    _kirpmaBorcu = true;
  }
  agirOlc("devirGuncelle", function () { devirGuncelle(suanki); });
  agirOlc("isgalGuncelle", function () { isgalGuncelle(suanki); });
  // 🔴🔴 22 Ağustos 2026 — KIRPMA SIRASINDA PANEL DONDURULUYOR.
  // Emre: *"ileri tuşuna basınca kronoloji maddelerinde ileri geri gösterim
  // bozukluğu yaşanıyor — Kaluğeran'dan ileri tıklayınca Estergon'un
  // Avusturya'ya kaybı maddesinde kronoloji maddeleri bir ileri bir geri
  // gidiyor."*
  //
  // ÖLÇÜM: öncesi/sonrası kırpması DÖRT kez `tarihAyarla` çağırıyor,
  // `tarihAyarla` → `guncelle()` → `olaylarGuncelle()` LİSTEYİ YENİDEN
  // KURUYOR. Yani liste dört kez bir gün geri, bir gün ileri gidiyordu.
  // Emre'nin örneği bunu doğruluyor: Estergon'un kaybı bir DÖNEM KIRILMASI,
  // yani kırpmanın tam ateşlendiği gün.
  //
  // 🔴 VE KUSUR BİR TASARIM KARARIMDAN: kırpmayı yazarken *"tek kapı
  // kullanayım, iki otorite doğmasın"* diyerek `tarihAyarla`yı seçmiştim.
  // Gerekçe genel olarak DOĞRU ama BURADA YANLIŞTI: kırpma bir ZAMAN
  // DEĞİŞİMİ değil, GÖRSEL BİR KARŞILAŞTIRMA. Kullanıcının bulunduğu an
  // değişmiyor — yalnız harita geçici olarak başka bir günü çiziyor.
  // ⇒ Kesme çizgisi burada: YUKARISI harita (çizilsin), AŞAĞISI panel
  //   (dokunulmasın). `sehir/savas/sefer/koridor/devir/isgal` hepsi harita
  //   katmanı, o yüzden yukarıda kaldı.
  if (_kirpmaKilitli) return;

  padisahGuncelle(suanki);
  olaylarGuncelle(suanki);
  tepeEtiketGuncelle();
  kronolojiSeritGuncelle();
  obTazele();
  baslikDamgala();
}

// ---------- Harita tepesindeki metin (p23/H-0014) ----------
// 🔴 EMRE: *"kronoloji maddeleri ileri ileri oynatılırken haritanın tepesindeki
// metin kronoloji maddesi ile aynı metin ve tarih olacak şekilde ayarlanmalı
// ama senkronize değil. tarih değişiyor ama metin değişmiyor takılıyor."*
//
// KUSUR ÖLÇÜLDÜ (19 Ağustos 2026) — `#donem-etiketi` DÖNEM adını taşıyordu
// (`donemler[di].ad`, motorun ürettiği "Kayıp: Budin, Peşte…" özeti) ve
// yalnız `di !== aktifDonem` dalından yazılıyordu. Yani metin dönem
// değişene kadar OLDUĞU GİBİ KALIYORDU:
//
//   tarih  8 Kasım 1687   madde  IV. Mehmed'in hal'i ve II. Süleyman'ın cülûsu
//                         tepe   Kayıp: Herseknovi   ← 26 Eylül'ün kaybı, TAKILI
//
// ⚠️ Ve ilk yedi ölçüm satırı TESADÜFEN uyuşuyordu, çünkü hepsi toprak kaybı
// maddesiydi. Kusur ancak toprak DEĞİŞMEYEN ilk maddede görünür oluyor —
// `§11`in "temiz çıkan örneklem, örneklemin dışını temiz ilan etmez" vakası.
//
// ⇒ Bölündü: madde başlığı kronolojiyle SENKRON akar; dönemin kendi adı
// `#tepe-degisim`e geçti ve YALNIZ değişimin gerçekleştiği gün görünür
// (`d.fi === suanki`). Böylece bir daha bayatlayamaz: bayatlayabilecek tek
// metin, artık yalnız bir gün yaşıyor.
var tepeDegisim = document.getElementById("tepe-degisim");
function tepeEtiketGuncelle() {
  if (!donemEtiketi) return;
  var o = sonVurgulanan >= 0 ? olaylar[sonVurgulanan] : null;
  donemEtiketi.textContent = o ? o.b : "";
  donemEtiketi.title = o ? (idxYazi(gunIdx(o.t)) + " — " + o.b) : "";
  if (!tepeDegisim) return;
  var di = donemBul(suanki);
  if (di === -2) {
    tepeDegisim.textContent = "Fetret Devri — şehzade payları";
  } else if (di >= 0 && donemler[di].fi === suanki) {
    tepeDegisim.textContent = donemler[di].ad || "";
  } else {
    tepeDegisim.textContent = "";
  }
}

// p2/H-0006 — panel katlıyken (#yanpanel.katli) kronoloji tamamen kaybolmasın:
// haritanın altında sene + tarih + en yakın geçmiş olayın başlığını gösteren
// ince bir şerit. Panel açıkken şerit zaten gizli, gereksiz DOM yazımı ucuz.
var kronolojiSerit = document.getElementById("kronoloji-serit");
function kronolojiSeritGuncelle() {
  if (!kronolojiSerit || kronolojiSerit.classList.contains("gizli")) return;
  var y = idxTarih(suanki).y;
  var o = sonVurgulanan >= 0 ? olaylar[sonVurgulanan] : null;
  kronolojiSerit.innerHTML =
    '<span class="ks-sene">' + y + '</span>' +
    '<span class="ks-tarih">' + idxYazi(suanki) + '</span>' +
    '<span class="ks-baslik">' + (o ? o.b : "") + '</span>';
}

// ---------- Detay paneli senkronu (kullanıcı şikâyeti) ----------
// ⚠️ *"Olaylar teker teker tıklanırken değişmeli. Eğer açık ise değişerek
// ilerlemeli, bir yere takılı kalmamalı."*
//
// Kusur ölçüldü: `obGoster` YALNIZ iki yerden çağrılıyordu — kronoloji satırına
// tıklayınca (`app.js:1725`) ve otomatik oynatmanın "olay olay" modunda.
// Çağrılmadığı yerler: ⏮/⏭ düğmeleri · zaman çubuğu sürüklenince · otomatik
// oynatmanın "zaman akışı" modunda. Yani panel açıkken tarih ilerliyor, panel
// son tıklanan maddede donuyordu.
//
// ⇒ Artık `guncelle()`'nin sonunda tek bir yerden tazeleniyor: tarihi değiştiren
// HANGİ yol olursa olsun panel onunla birlikte ilerliyor. Kaynağı da liste ile
// aynı (`ZAMAN.suankiOlay`), yani ikisi ayrışamaz.
//
// 🔴 PANEL KAPALIYSA AÇILMIYOR: kullanıcı kapattıysa kapalı kalır. Kendiliğinden
// açılan bir panel, kapatma düğmesini işlevsiz kılardı.
var obSonIndeks = -1;
function obTazele() {
  if (!window.ZAMAN || !obPanel || obPanel.classList.contains("gizli")) return;
  var i = window.ZAMAN.suankiOlay(olaylar, suanki, function (k) {
    return !olayDom[k].classList.contains("suzuldu");   // süzülmüş maddeyi atla
  }, suankiOlayI);                            // aynı güne iki madde: H-0019
  if (i < 0 || i === obSonIndeks) return;
  obSonIndeks = i;
  obGoster(olaylar[i]);
}

function tarihAyarla(t) {
  suanki = Math.max(BASLANGIC, Math.min(BITIS, t));
  // 🔴 Kırpma sırasında ZAMAN ÇUBUĞU da oynamaz. Kullanıcı bir gün geri
  // gitmedi — harita geçici olarak önceki hâli gösteriyor. Çubuğun
  // titremesi, olmayan bir zaman yolculuğunu varmış gibi gösterirdi.
  if (!_kirpmaKilitli) kaydirici.value = suanki;
  guncelle();
}

// ---------- PENCERE BAŞLIĞI DAMGASI ----------
// ⚠️ NEDEN VAR: kullanıcı bir kusuru ekran görüntüsüyle bildiriyor ve görüntü
// sohbete yapıştırılınca DOSYA ADI karşı tarafa ulaşmıyor. Sonuç: elde resim
// var ama "hangi yıl, neresi, hangi madde" yok. Dört kusur tam bu yüzden
// çözülemedi.
//
// Kare alan araç (UI Element Inspector) tarayıcının dışındadır; sayfanın JS
// durumunu okuyamaz. Okuyabildiği tek şey PENCERE BAŞLIĞIDIR. Bu yüzden
// document.title, o anki durumun tamamını taşır:
//
//   Osmanlı Tarih Atlası · 1361-02-01 · 41.35N 26.50E · z6 ·
//   g:8,131,1180,700 · b:44.1000,20.3000,38.2000,32.9000 · Edirne'nin fethi
//
//   g: harita tuvalinin EKRAN pikselindeki dikdörtgeni (sol,üst,en,boy)
//   b: görünen alanın sınırları (kuzey,batı,güney,doğu)
//
// g ve b olmadan araç, seçilen dikdörtgenin coğrafi karşılığını hesaplayamaz;
// yalnız harita merkezini yazabilirdi. İkisi birlikte, ekran pikselinden
// enlem/boylama tam dönüşüm sağlar (harita hiç döndürülmüyor ve eğilmiyor —
// app.js'te bearing/pitch hiç geçmiyor — bu yüzden Mercator matematiği kesin).
var _damgaSon = "";
var _tuvalDik = null;

function tuvalOlc() {
  try { _tuvalDik = harita.getCanvas().getBoundingClientRect(); } catch (e) { _tuvalDik = null; }
}

// Madde, listede vurgulanan maddeyle AYNI kaynaktan alınır (ZAMAN.suankiOlay).
// Başka bir tanım (örn. sonVurgulanan) kullanmak cazip ama zaman.js'te ölçülmüş:
// iki tanım zamanın %34'ünde ayrışıyor. Damganın listede görünenden başka bir
// madde yazması, çözmeye çalıştığımız karışıklığın daha kötüsü olurdu.
function damgaMadde() {
  if (!window.ZAMAN || !olaylar || !olaylar.length) return "";
  var i = window.ZAMAN.suankiOlay(olaylar, suanki, function (k) {
    return !olayDom[k] || !olayDom[k].classList.contains("suzuldu");
  }, suankiOlayI);                            // aynı güne iki madde: H-0019
  if (i < 0 || !olaylar[i]) return "";
  // "·" ayırıcıdır; madde metninde geçerse başlık yanlış bölünür.
  return String(olaylar[i].b || "").replace(/[·|]/g, "-")
         .replace(/\s+/g, " ").trim().slice(0, 90);
}

function baslikDamgala() {
  // ⚠️ `haritaHazir` ŞART DEĞİL. Şart koşulmuştu ve şu kusuru üretti: bayrak
  // yalnız MapLibre'in "load" olayında true oluyor, o da altlık stili inene
  // kadar beklyor; yavaş bir açılışta sayfa görünür haldeyken başlık hâlâ
  // damgasızdı ve o aralıkta alınan kareler tarihsiz çıkıyordu. Tarih ile
  // madde haritadan bağımsızdır — kamera hazır olmasa da yazılabilir.
  try {
    if (!_tuvalDik) tuvalOlc();
    var t = idxTarih(suanki);
    var iso = String(t.y).padStart(4, "0") + "-" +
              String(t.a).padStart(2, "0") + "-" +
              String(t.g).padStart(2, "0");

    var c = harita.getCenter(), z = harita.getZoom();
    var s = null;
    try { s = harita.getBounds(); } catch (e2) { s = null; }
    var parcalar = ["Osmanlı Tarih Atlası", iso,
      Math.abs(c.lat).toFixed(2) + (c.lat < 0 ? "S" : "N") + " " +
      Math.abs(c.lng).toFixed(2) + (c.lng < 0 ? "W" : "E"),
      "z" + (Math.round(z * 10) / 10)];

    // Tuvalin ekran koordinatı: pencere konumu + tarayıcı kromunun kalınlığı.
    // Yan kenarlıklar simetrik varsayılır (Chrome'da 0), üst krom farktan çıkar.
    if (_tuvalDik && s) {
      var dpr = window.devicePixelRatio || 1;
      var yan = Math.max(0, (window.outerWidth - window.innerWidth) / 2);
      var ust = Math.max(0, (window.outerHeight - window.innerHeight) - yan);
      parcalar.push("g:" + [
        Math.round((window.screenX + yan + _tuvalDik.left) * dpr),
        Math.round((window.screenY + ust + _tuvalDik.top) * dpr),
        Math.round(_tuvalDik.width * dpr),
        Math.round(_tuvalDik.height * dpr)].join(","));
      parcalar.push("b:" + [s.getNorth(), s.getWest(), s.getSouth(), s.getEast()]
        .map(function (v) { return v.toFixed(4); }).join(","));
    }

    var m = damgaMadde();
    if (m) parcalar.push(m);

    var yeni = parcalar.join(" · ");
    if (yeni !== _damgaSon) { _damgaSon = yeni; document.title = yeni; }
  } catch (e) {
    // Damga bir gösterim ayrıntısıdır; hatası atlası durdurmamalı.
    if (window.console) console.warn("başlık damgası yazılamadı:", e);
  }
}

harita.on("load", function () { tuvalOlc(); baslikDamgala(); });
harita.on("moveend", function () {
  tuvalOlc(); baslikDamgala();
  // 🔴 GÖRÜNÜM ELEMESİNİN ZORUNLU İKİNCİ YARISI.
  // `sehirGuncelle` artık pencere dışındaki şehirleri atlıyor. Kaydırma
  // ya da yakınlaşma pencereyi değiştirince, YENİ giren şehirlerin
  // hesabı hiç yapılmamış olur ve ekranda BELİRMEZLER.
  // ⇒ Eleme, tazeleme olmadan bir KUSURDUR: kazanç için görünürlüğü
  //   feda etmiş oluruz.
  // ⚠️ Kamera kilitliyken (uçuş · kırpma) ATLANIYOR: uçuşun her ara
  //   `moveend`inde tam tarama koşmak, tam da kaçındığımız yükü geri
  //   getirirdi. Uçuş bitince `_varista` zaten tazeliyor.
  if (haritaHazir && !KAMERA.olayBekliyor) {
    try { sehirGuncelle(suanki); } catch (e) { /* veri hazır değil */ }
    // 🔴 23 Agustos, 0027/H-0011 — YAKINSAMA GARANTISI (teshis DEGIL).
    // Emre: "Hacova Meydan Muharebesinin yeri haritada belli degil."
    // Olculdu: savasGuncelle DOGRU tarihle, KILITSIZ cagriliyor ve
    // isaret eklenmiyor; AYNI cagri bir an sonra elle yapilinca
    // ekleniyor. Uc hipotez (kirpma kilidi · sure onbellegi · dizi
    // kimligi) veriyle CURUTULDU, kok sebep BULUNAMADI.
    // ⇒ Buraya teshis degil EMNIYET yaziliyor: harita her
    //   yerlestiginde isaret katmanlari da tazeleniyor. Kusur
    //   ARALIKLI oldugu icin bu sart -- araliklilik onu sinsi yapar,
    //   bir sonraki oturum "bende calisiyor" deyip kapatabilir.
    // ⚠️ Kok sebep bulunursa bu blok GEREKSIZ hale gelir; o zaman
    //   KALDIRILMALI, ustune yenisi eklenmemeli.
    try { savasGuncelle(suanki); } catch (e) { }
    try { seferGuncelle(suanki); } catch (e) { }
    try { koridorGuncelle(suanki); } catch (e) { }
    // KIRPMANIN ZORUNLU IKINCI YARISI, ETIKET TARAFI. Devlet
    // etiketleri de artik gorus alanina gore kirpiliyor; `zoom`
    // olayi KAYDIRMADA atesLEMEZ, yani pan sonrasi disarida kalmis
    // etiketler geri gelmezdi. Ustteki sehir dersinin aynisi.
    try { if (window.__etiketTazele) window.__etiketTazele(); } catch (e2) { }
  }
});
harita.on("zoomend", baslikDamgala);
harita.on("resize", function () { tuvalOlc(); baslikDamgala(); });
window.addEventListener("resize", function () { tuvalOlc(); baslikDamgala(); });
// Açılışta hemen bir kez: altlık inene kadar geçen sürede de başlık damgalı
// olsun (o aralıkta alınan kareler tarihsiz kalmasın).
baslikDamgala();

kaydirici.addEventListener("input", function () {
  tarihAyarla(parseInt(kaydirici.value, 10));
});

// ---------- Olay bilgi paneli (olay-olay akışında harita üstünde yüzer) ----------
var obPanel = document.getElementById("olay-bilgi");
document.getElementById("olay-bilgi-kapat").addEventListener("click", function () {
  obPanel.classList.add("gizli");
});

// Kişi adını KISILER dizininde ara (fotoğraf/biyografi zenginleştirmesi için).
// Roma rakamı/sıfat önekleri ("II.", "Sultan", "Kral"...) atılır; eşleşme için
// en az bir anlamlı öz ad (≥4 harf) ortak olmalı — aksi hâlde "II. Mehmed" ile
// "II. Katerina" gibi yanlış eşleşmeler oluşur.
var ONEK = /^(i{1,3}|iv|v|vi{1,3}|ix|x{1,2})\.$/i;
var UNVAN = /^(paşa|sultan|efendi|çelebi|hatun|reis|gazi|kral|kraliçe|şah|çar|prens|amiral|general|kaptan|şeyh|hoca|emir|emîr|arşidük|papa|voyvoda|despot|imparator|müşir|serdar|hazretleri|rivayet|dolayı)$/i;
function ozAdlar(s) {
  return s.toLowerCase()
          .replace(/[()]/g, " ")
          .split(/[\s,]+/)
          .filter(function (w) { return w.length >= 4 && !ONEK.test(w) && !UNVAN.test(w); });
}
function tekilAd(a) {
  var o = [];
  for (var i = 0; i < a.length; i++) if (o.indexOf(a[i]) < 0) o.push(a[i]);
  return o;
}
// En çok öz ad örtüşen kaydı seçer. İki tarafta da birden çok öz ad varsa tek
// ortak kelime (ör. "Paşa"sı atılmış "Mehmed") yeterli sayılmaz.
function kisiBul(ad) {
  var t = ad.trim().toLowerCase();
  var tw = tekilAd(ozAdlar(ad));
  var liste = window.KISILER || [];
  var enIyi = null, enIyiSkor = 0;
  for (var i = 0; i < liste.length; i++) {
    if (liste[i].ad.toLowerCase() === t) return liste[i];
    var kw = tekilAd(ozAdlar(liste[i].ad));
    if (!tw.length || !kw.length) continue;
    var skor = 0;
    for (var a = 0; a < tw.length; a++) {
      for (var b = 0; b < kw.length; b++) {
        if (tw[a] === kw[b] ||
            (tw[a].length >= 6 && kw[b].indexOf(tw[a]) === 0) ||
            (kw[b].length >= 6 && tw[a].indexOf(kw[b]) === 0)) { skor++; break; }
      }
    }
    // örtüşme oranı: tek ortak kelimenin çok kelimeli bir kaydı yakalamasını önler
    if (skor / Math.max(tw.length, kw.length) < 0.5) continue;
    // 🔴 `min` DEĞİL `tw.length` — kullanıcı kusuru, ölçülerek düzeltildi.
    // Vaka: 1446 maddesinde 1916 Kûtülamâre zaferi görünüyordu.
    //   "Çandarlı Halil Paşa" tw=[çandarlı,halil]   (paşa UNVAN, elenir)
    //   "Halil Paşa (Kut)"    kw=[halil]            (kut < 4 harf, elenir)
    //   skor 1 · oran 1/2 = 0,5 (eşiği geçiyor) · gerekli min(2,1)=1 ⇒ EŞLEŞTİ
    // Yani AYIRT EDİCİ kelime (`çandarlı`) hiç tutmuyor, yalnız ortak ad
    // tutuyor — ve dizindeki kaydın adı KISALDIKÇA eşleşme KOLAYLAŞIYORDU.
    //
    // Yeni ölçüt: SORGU kaç ayırt edici kelime verdiyse o kadarı tutmalı.
    // "Çandarlı Halil Paşa" iki kelime veriyor ⇒ ikisi de tutmalı (skor 1 < 2,
    // eşleşme reddedilir). "Tomanbay" tek kelime veriyor ⇒ biri yeter.
    //
    // Ölçüldü (874 benzersiz ad): 45 eşleşme kayboluyor ve **45'inin 45'i**
    // ayırt edici kelimesi tutmayan şüpheli kümesinden geliyor; yeni yanlış
    // eşleşme 0. Kaybolanların büyük çoğunluğu zaten yanlıştı — "Hüseyin Hilmi
    // Paşa" → "Şah Sultan Hüseyin" (Safevî şahı), "Abbas Hilmi Paşa" →
    // "Şah I. Abbas", "Said Halim Paşa" → "Said bin Sultan".
    // ⚠️ Bedeli var ve gizlemiyorum: dördü beşi DOĞRU bağlantıydı ve artık
    // kurulmuyor — "Edmund Allenby" → "General Allenby", "I. Petro (Rusya)" →
    // "Çar I. Petro", "Ahmed Urâbî Paşa" → "Urâbî Paşa". Ortak yanları:
    // sorguda parantezli/ek nitelik var, dizinde yok.
    // ⇒ Takas bilinçli: EKSİK bağlantı kişi kartını hiç göstermez (sessiz
    // yokluk), YANLIŞ bağlantı başka birinin hayatını olgu diye gösterir.
    // İkincisi kullanıcıya doğrudan yanlış bilgi veriyordu.
    // 🔴 OLCUT SIMETRIK YAPILDI — KOORDINATOR, 10 Agustos 2026.
    // Yukaridaki yorum (3166) SIMETRIK bir kural tarif ediyordu:
    // "Iki tarafta da birden cok oz ad varsa tek ortak kelime yeterli
    // sayilmaz." Ama kod yalniz SORGU tarafina bakiyordu (tw.length);
    // ADAY tarafi (kw.length) hic sorulmuyordu. Yorum ile kod AYRISMISTI.
    //
    // Bedeli CANLI yayinda olculdu (KUTU DENETIM, parti-0004):
    //   "Kemal Reis"     -> Mustafa Kemal Pasa (Ataturk)
    //   "Seyh Ahmed Han" -> Koprulzade Fazil Ahmed Pasa
    //   "Mustafa Celebi" -> Merzifonlu Kara Mustafa Pasa
    // Ucunde de sorgu TEK ayirt edici kelimeye iniyor ("reis"/"han"/"celebi"
    // unvan sayilip atiliyor) ve tek kelime `gerekli=1` yapip o adi TASIYAN
    // BASKA BIRINE tutuyordu.
    //
    // 📌 Ve onceki duzeltmenin kendi yorumu "yeni yanlis eslesme 0"
    // diyordu — olcum DOGRUYDU, EVRENI DARDI: "yeni yanlislar" olculmus,
    // "eski yanlislar kapandi mi" olculmemisti (`C13`: bir duzeltme IKI
    // YONDE de sinanir).
    //
    // YENI OLCUT: iki taraftan HANGISI daha ayrintiliysa o belirler.
    //   "Kemal Reis"(1) vs "Namik Kemal"(2)  -> gerekli 2, skor 1 -> RED
    //   "Tomanbay"(1)   vs "Tomanbay"(1)     -> gerekli 1, skor 1 -> KABUL
    // ⚠️ TEKILLESTIRME SART: "Tomanbay (II. Tomanbay)" ayni kelimeyi iki
    //   kez tasiyor; tekillestirmeden kw.length=2 cikiyor ve Tomanbay
    //   KAYBOLUYORDU. Ilk olcumde tam bu gerileme yakalandi.
    //
    // OLCULDU (kronolojideki butun kisi adlari, ESKI vs YENI, iki yonde):
    //   22 yanlis eslesme dustu · Tomanbay KORUNDU · uc sikayet de KAPANDI
    //   "Halil Pasa": Candarli Hayreddin -> Halil Pasa (Kut)  [DUZELDI]
    // ⚠️ ARTIK KUSUR, saklanmiyor: "Aga Huseyin Pasa" eskiden Amcazade
    //   Huseyin Pasa'ya, simdi Sah Sultan Huseyin'e tutuyor. IKISI DE YANLIS
    //   (gercek kisi `kisiler.js`te YOK); yeni cevap daha da alakasiz.
    //   Asil care eslestirici degil VERI: `Kemal Reis` · `Cuneyd Bey` ·
    //   `Hadim Ali Pasa` · `Elvend Bey` · `Burak Reis` 281 kayitta HIC YOK.
    var gerekli = Math.max(tw.length, kw.length) >= 2 ? 2 : 1;
    if (skor >= gerekli && skor > enIyiSkor) { enIyi = liste[i]; enIyiSkor = skor; }
  }
  return enIyi;
}

// Bir ad, padişah listesindeki birine mi ait? (portre seçimi ve kişi kutusu filtresi)
// 🔴 PADİŞAHLIKLA BAĞDAŞMAYAN UNVANLAR — 24 Ağustos 2026 (0031/H-0015).
// Bir Osmanlı padişahı asla "Paşa" · "Reis" · "Ağa" · "Efendi" değildir;
// bu unvanı taşıyan kişi TANIM GEREĞİ padişah değildir.
// ⚠️ `bey` KASTEN YOK: erken Osmanlı hükümdarları "Osman Bey" ve "Orhan
//   Bey" diye anılır — eklemek DOĞRU eşleşmeleri kırardı.
// ⚠️ `sultan · han · gazi · çelebi` de YOK, çünkü BAĞDAŞIRLAR
//   (I. Mehmed "Çelebi", Osman "Gazi").
var PADISAH_OLAMAZ = /(^|\s)(paşa|pasa|reis|ağa|aga|efendi|hazretleri)(\s|$)/i;

function padisahEslesmesi(ad) {
  // 🔴 ÖLÇÜLMÜŞ KUSUR — süzgeç AYIRT EDİCİ kelimeyi yutuyordu.
  // Aşağıdaki koruma kuralı ("iki tarafta da birden çok öz ad varsa tek
  // ortak kelime yetmez") sağlamdır; ama `ozAdlar` "paşa"yı ATTIĞI için
  // iki kelimelik ad TEK kelimeye düşüyor ve koruma HİÇ DEVREYE GİRMİYOR:
  //     "Süleyman Paşa"   → ["süleyman"] → I. Süleyman (KANUNÎ)   1352!
  //     "Gazi Osman Paşa" → ["osman"]    → Osman Gazi (I. Osman)  1877!
  // İlki Orhan'ın oğlu (Çimpe'ye geçen), ikincisi Plevne müdafii.
  // ⇒ Süzgeç adın ayırt edici kısmını atıp geriye yalnız ÇAKIŞAN kısmı
  //   bırakıyordu: koruma, koruması gereken vakada susuyordu.
  //
  // 📌 Ve bu ölçüm bir hipotezi ÇÜRÜTEREK bulundu: önce "yabancı
  //    hükümdar adları çakışıyordur" sanılmıştı; 6064 madde tarandı ve
  //    yabancı kronolojiden gelen tek-kelimelik eşleşme SIFIR çıktı.
  //    Gerçek sınıf başkaydı — ve yalnız iki üyesi vardı.
  if (PADISAH_OLAMAZ.test(ad)) return null;
  var aw = ozAdlar(ad);
  if (!aw.length) return null;
  var sira = ad.trim().toLowerCase().match(/^(i{1,3}|iv|v|vi{1,3}|ix|x{1,2})\./);
  for (var j = 0; j < window.PADISAHLAR.length; j++) {
    var p = window.PADISAHLAR[j];
    if (p.ozel) continue;
    var pw = ozAdlar(p.ad);
    var psira = p.ad.toLowerCase().match(/^(i{1,3}|iv|v|vi{1,3}|ix|x{1,2})\./);
    var ortak = aw.filter(function (w) { return pw.indexOf(w) >= 0; }).length;
    if (ortak < (aw.length >= 2 ? 2 : 1)) continue;
    if (sira && psira && sira[1] !== psira[1]) continue;
    return p;
  }
  return null;
}
// O tarihte hüküm süren padişahı bul (panelde portre göstermek için)
function padisahBul(t) {
  for (var i = 0; i < window.PADISAHLAR.length; i++) {
    var p = window.PADISAHLAR[i];
    if (gunIdx(p.from) <= t && t < gunIdx(p.to)) return p;
  }
  return null;
}

// ---------- Kartvizit — PADISAH-KARTVIZITI.md ----------
// ⚠️ İsimden eşleştirme YAPILMIYOR (kisiBul/padisahEslesmesi bulanık —
// kartvizit 1-1 ve kesin bir bağ istiyor). `vefat_id`, önce PADISAHLAR'de
// sonra KISILER'de aranır; id alanları zaten benzersiz, tek fonksiyon
// iki kaynağı okuyor (oturumlar/ARAYUZ-3-SARTNAME.md §1).
function vefatKisiBul(id) {
  if (!id) return null;
  var i;
  for (i = 0; i < window.PADISAHLAR.length; i++) if (window.PADISAHLAR[i].id === id) return window.PADISAHLAR[i];
  for (i = 0; i < (window.KISILER || []).length; i++) if (window.KISILER[i].id === id) return window.KISILER[i];
  return null;
}
// Portre yoksa (K2-K5 için bugün hep böyle — hiç portre klasörü yok)
// kişinin TÜRÜNE göre bir rozet: boş bir "?" yerine kişinin ne olduğunu
// anlatan bir simge (mevcut savaş/antlaşma rozet mantığının aynısı).
var KARTVIZIT_ROZET = { padisah: "☾", sadrazam: "🕌", "vezir-pasa": "🕌",
  komutan: "⚔", denizci: "⚓", hanedan: "👑", alim: "📖", edebiyatci: "📖",
  mimar: "🏛", siyasi: "🕌" };

// DUYGU-VE-SEKME-SARTNAME.md §B — sekme kaydırıcısı. Sabit emoji/etiket
// eşleşmesi §B③'te çivilenmiş; her giriş kendi İÇERİĞİNİN olup olmadığını
// döndüren bir işlev taşıyor, `kartvizitSekmeleriKur` yalnız DOLU olanları
// sekme yapıyor. Yeni bir sekme (sebep-sonuç, ek okuma) eklemek bu diziye
// bir satır eklemek kadar ucuz olsun diye tasarlandı.
var KV_SEKME_TANIM = [
  { id: "kisi", etiket: "👤 Kişi", doluMu: function (k) { return !!(k.dogum || k.olum || k.baba); } },
  { id: "magazin", etiket: "🎭 Magazin", doluMu: function (k) {
      return !!(k.skandal || (k.esler && k.esler.length) || (k.cocuk && (k.cocuk.oglan || k.cocuk.kiz)));
    } }
];
var kvSeciliSekme = "kisi";

function kartvizitSekmeleriKur(k) {
  var sekmelerEl = obKartvizit.querySelector("#kv-sekmeler");
  var dolular = KV_SEKME_TANIM.filter(function (t) { return t.doluMu(k); });
  // §B③②: tek sekme kalıyorsa çubuk HİÇ çizilmez.
  sekmelerEl.innerHTML = "";
  sekmelerEl.classList.toggle("gizli", dolular.length <= 1);
  if (!dolular.some(function (t) { return t.id === kvSeciliSekme; })) {
    kvSeciliSekme = dolular.length ? dolular[0].id : "kisi";
  }
  dolular.forEach(function (t) {
    var b = document.createElement("button");
    b.className = "kv-sekme-btn" + (t.id === kvSeciliSekme ? " aktif" : "");
    b.textContent = t.etiket;
    b.addEventListener("click", function () {
      kvSeciliSekme = t.id;
      obKartvizit.querySelectorAll(".kv-sekme-btn").forEach(function (x) { x.classList.remove("aktif"); });
      b.classList.add("aktif");
      obKartvizit.querySelectorAll(".kv-panel").forEach(function (p) {
        p.classList.toggle("gizli", p.dataset.sekme !== t.id);
      });
    });
    sekmelerEl.appendChild(b);
  });
  var doluIdler = dolular.map(function (t) { return t.id; });
  obKartvizit.querySelectorAll(".kv-panel").forEach(function (p) {
    // İçeriği olmayan panel HİÇ görünmez (§B③①) — aktif sekmeden ayrı, bağımsız kural.
    var doluMu = doluIdler.indexOf(p.dataset.sekme) >= 0;
    p.classList.toggle("gizli", !doluMu || p.dataset.sekme !== kvSeciliSekme);
  });
}

var obKartvizit = document.getElementById("ob-kartvizit");
function kartvizitGuncelle(o) {
  if (!obKartvizit) return;
  if (!o.vefat_id) { obKartvizit.classList.add("gizli"); return; }
  var k = vefatKisiBul(o.vefat_id);
  if (!k) { obKartvizit.classList.add("gizli"); return; }   // id bozuk/silinmiş — sessizce göstermiyoruz, veri hatası ayrı denetimin işi
  obKartvizit.classList.remove("gizli");
  kartvizitSekmeleriKur(k);

  var kunye = obKartvizit.querySelector(".kv-kunye");
  var satirlar = [];
  if (k.dogum) satirlar.push("Doğum: " + k.dogum + (k.dogum_yer ? " · " + k.dogum_yer : ""));
  if (k.olum) satirlar.push("Ölüm: " + k.olum + (k.olum_yer ? " · " + k.olum_yer : "") + (k.olum_sebep ? " (" + k.olum_sebep + ")" : ""));
  if (k.baba) satirlar.push("Baba: " + k.baba);
  if (k.anne) satirlar.push("Anne: " + k.anne);
  if (k.tahta) satirlar.push("Tahta çıkış: " + k.tahta + (k.yas_tahta ? " (yaş " + k.yas_tahta + ")" : ""));
  if (k.saltanat_yil) satirlar.push("Saltanat: " + k.saltanat_yil + " yıl");
  if (k.lakap && k.lakap.length) satirlar.push("Lakap: " + k.lakap.join(", "));
  if (k.unvan && k.unvan.length) satirlar.push("Unvan: " + k.unvan.join(", "));
  kunye.textContent = satirlar.join("  ·  ");

  var magazin = obKartvizit.querySelector(".kv-magazin");
  var mSatir = [];
  if (k.esler && k.esler.length) mSatir.push("Eşleri: " + k.esler.join(", "));
  if (k.cocuk) mSatir.push("Çocukları: " + [k.cocuk.oglan ? k.cocuk.oglan + " oğlan" : "",
    k.cocuk.kiz ? k.cocuk.kiz + " kız" : ""].filter(Boolean).join(", "));
  magazin.textContent = mSatir.join("  ·  ");
  if (k.skandal) {
    var sk = document.createElement("div");
    sk.className = "kv-skandal";
    sk.textContent = k.skandal;
    magazin.appendChild(sk);
  }

  // "Nasıl bilirdiniz" — kartın kalbi. `ovgu` alanının varlığı, kartvizit
  // METNİNİN yazılıp yazılmadığının ölçütü (künye önce, içerik sonra
  // gelebilir — oturumlar/ARAYUZ-3-SARTNAME.md "çapasız kart" §B).
  var nb = obKartvizit.querySelector(".kv-nasil-bilirdiniz");
  if (k.ovgu || k.yergi || k.tartisma) {
    nb.classList.remove("kv-eksik");
    setKv(".kv-ovgu", "Övgü", k.ovgu);
    setKv(".kv-yergi", "Yergi", k.yergi);
    setKv(".kv-tartisma", "Tartışma", k.tartisma);
    setKv(".kv-tarihciler", "Tarihçiler", k.tarihciler);
  } else {
    // Boş alan yok, NİÇİN boş var — künye hazır ama "nasıl bilirdiniz"
    // henüz yazılmamışsa bu AÇIKÇA söylenir, bölüm sessizce boş kalmaz.
    nb.classList.add("kv-eksik");
    nb.querySelector(".kv-ovgu").textContent = "Bu kişinin kartviziti henüz yazılmadı.";
    setKv(".kv-yergi", "", ""); setKv(".kv-tartisma", "", ""); setKv(".kv-tarihciler", "", "");
  }
  function setKv(sec, etiket, metin) {
    var el = nb.querySelector(sec);
    el.textContent = metin ? etiket + ": " + metin : "";
  }
}

// K3 (§ARAYUZ-AYNI-GUN.md) — şeridin metni SAYIYI ÖNCE söyler: kullanıcının
// öğrenmesi gereken şey "kaç tane olduğu", "kaçıncısı" ikincil.
// K2 — pil tıklaması tarihAyarla+obGoster+haritayiOlayaGotur ÜÇÜNÜ birlikte
// çağırır; biri atlanırsa panel değişir harita değişmez — ki tam olarak
// düzelttiğimiz kusurun (p5/H-0006, ⏮/⏭'nin eski SAF TARİH karşılaştırması)
// bir başka biçimi olurdu.
function ayniGunSeridiGuncelle(o) {
  var kutu = document.getElementById("ob-ayni-gun");
  if (!kutu) return;
  kutu.innerHTML = "";
  if (!o._agGrup) return;                 // tek maddeli gün — şerit HİÇ çıkmaz
  var metin = document.createElement("span");
  metin.textContent = "Bu günde " + o._agGrup.length + " olay var — " + o._agSira + "/" + o._agGrup.length;
  kutu.appendChild(metin);
  var piller = document.createElement("span");
  piller.className = "ob-ayni-gun-piller";
  o._agGrup.forEach(function (kardes, idx) {
    var pil = document.createElement("button");
    pil.type = "button";
    var buAktif = kardes === o;
    pil.className = "ob-ayni-gun-pil" + (buAktif ? " etkin" : "");
    pil.textContent = agDaireSayi(idx + 1);
    pil.title = kardes.b;
    pil.disabled = buAktif;
    pil.setAttribute("aria-label", (idx + 1) + ". olay: " + kardes.b);
    pil.addEventListener("click", function () {
      var idxOlay = olaylar.indexOf(kardes);
      if (idxOlay >= 0) suankiOlayI = idxOlay;   // ⏮/⏭ kardeşten devam etsin
      olayaGit(kardes, true, true);              // K2'nin üçlüsü, KAMERA hakemli
    });
    piller.appendChild(pil);
  });
  kutu.appendChild(piller);
}

function obGoster(o) {
  document.getElementById("ob-tarih").textContent = o.gun || idxYazi(o.gi);
  document.getElementById("ob-baslik").textContent = o.b;
  ayniGunSeridiGuncelle(o);

  var meta = document.getElementById("ob-meta");
  meta.innerHTML = "";
  if (o.yer) { var y = document.createElement("span"); y.textContent = "📍 " + o.yer; meta.appendChild(y); }
  var kat = document.createElement("span"); kat.className = "ob-kat k-" + o.k;
  kat.textContent = o.k; meta.appendChild(kat);
  // §A④ — panelde de "okuyanın tepkisi" diye adlandırılır, satırdakiyle
  // aynı span/etiket üretimi (`duyguSpanUret`) yeniden kullanılıyor.
  var duyguSpanPanel = duyguSpanUret(o);
  if (duyguSpanPanel) { duyguSpanPanel.classList.add("ob-duygu"); meta.appendChild(duyguSpanPanel); }

  // Görsel: olayda adı geçen BELİRLİ bir padişah varsa onun portresi.
  // p4/H-0015 kuralının BİLEREK İSTİSNASI (PADISAH-KARTVIZITI.md): vefat
  // maddesi kişinin KENDİSİ hakkında, o günün padişahı hakkında değil —
  // Fatih'in ölüm maddesinde dönemin padişahı ARTIK II. Bayezid'dir ama
  // portre yine Fatih'in olmalı. `vefat_id` varsa bulanık yola hiç girilmez.
  var gorsel = document.getElementById("ob-gorsel");
  gorsel.innerHTML = "";
  var vefatKisi = o.vefat_id ? vefatKisiBul(o.vefat_id) : null;
  var pad = null, padBelirli = false;
  if (vefatKisi) {
    pad = vefatKisi; padBelirli = true;
  } else if (o.kisiler) {
    var adlar = o.kisiler.split(",");
    for (var i = 0; i < adlar.length && !pad; i++) pad = padisahEslesmesi(adlar[i]);
    if (pad) padBelirli = true;
  }
  // p5/H-0015 — kullanıcı: "padişahın resmini zaten yukarıda gösteriyoruz",
  // Pîrî Reis'in dünya haritası maddesinde tekrar çıkıyor. Ölçüldü: o madde
  // `kisiler:"Pîrî Reis"` taşıyor ama Pîrî Reis bir padişah değil, yani eski
  // kod `pad`i BULAMAYIP dönemin padişahına (`padisahBul`) düşüyordu — bu da
  // üst karttaki portrenin BİREBİR AYNISI. Eski `if (!pad) pad =
  // padisahBul(o.gi)` düşüşü KALDIRILDI: kart artık yalnız olayla BELİRLİ
  // biçimde bağlı bir padişah varsa (vefat_id ya da kisiler'de adı geçen bir
  // padişah) portre gösterir; aksi hâlde aşağıdaki rozet dalına düşer —
  // üstteki kartla aynı görseli ikinci kez basmaz.
  if (pad && !pad.ozel && padBelirli) {
    var img = new Image();
    img.src = "assets/portreler/" + pad.id + ".jpg";
    img.alt = pad.ad;
    // Portre yoksa (K2-K5'te bugün hep böyle) boş bir "?" değil, kişinin
    // TÜRÜNE göre bir rozet — vefat_id yolundaysa `tur` alanından, aksi
    // hâlde padişah her zaman aynı ay simgesini kullanır (eski davranış).
    var rozetGlif = vefatKisi ? (KARTVIZIT_ROZET[vefatKisi.tur] || "☾") : "☾";
    img.onerror = function () { gorsel.innerHTML = '<span class="ob-rozet">' + rozetGlif + '</span>'; };
    gorsel.appendChild(img);
    var alt = document.createElement("div");
    alt.className = "ob-gorsel-ad";
    alt.textContent = pad.ad;
    gorsel.appendChild(alt);
  } else {
    gorsel.innerHTML = '<span class="ob-rozet">' + (o.k === "savas" ? "⚔" : o.k === "antlasma" ? "📜" : "☾") + '</span>';
  }

  document.getElementById("ob-detay").textContent = o.d || "";

  // Ek veriler: muharebe künyesi / antlaşma hükmü / kişi kartları / kaynak
  var ozel = document.getElementById("ob-ozel");
  ozel.innerHTML = "";
  function kutu(baslik, icerik) {
    var d = document.createElement("div");
    d.className = "ob-kutu";
    d.innerHTML = '<b></b><span></span>';
    d.children[0].textContent = baslik;
    d.children[1].textContent = icerik;
    ozel.appendChild(d);
  }
  var sv = (window.SAVASLAR || []).filter(function (s) {
    return Math.abs(gunIdx(s.t) - o.gi) < 60 &&
           (o.b.indexOf(s.ad.split(" (")[0]) >= 0 || s.ad.indexOf(o.b.split(" —")[0]) >= 0);
  })[0];
  if (sv) {
    var seri = (window.SERILER || []).filter(function (x) { return x.id === sv.seri; })[0];
    kutu("Muharebe", sv.ad + " · karşı taraf: " + karsiTaraf(sv) + " · sonuç: " +
         (sv.sonuc === "zafer" ? "Osmanlı zaferi" : sv.sonuc === "yenilgi" ? "Osmanlı yenilgisi" : "belirsiz") +
         (seri ? " · dizi: " + seri.ad : ""));
  }
  var an = (window.ANTLASMALAR || []).filter(function (a) {
    return Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0;
  })[0];
  if (an) kutu("Antlaşma hükmü", karsiTaraf(an) + " ile · " + an.ozet);
  if (o.kisiler) {
    var yazilan = {};
    o.kisiler.split(",").slice(0, 4).forEach(function (ad) {
      if (padisahEslesmesi(ad)) return;          // padişah zaten portre olarak görünüyor
      var k = kisiBul(ad);
      if (k && !yazilan[k.ad]) {
        yazilan[k.ad] = 1;
        kutu(k.ad, (k.donem ? k.donem + " · " : "") + (k.not || ""));
      }
    });
  }
  if (o.kaynak) {
    var a = document.createElement("a");
    a.className = "ob-kaynak";
    a.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
    a.target = "_blank"; a.rel = "noopener";
    a.textContent = "📖 TDV İslâm Ansiklopedisi";
    ozel.appendChild(a);
  }
  kartvizitGuncelle(o);
  ekOkumaButonlariGuncelle(o);
  obPanel.classList.remove("gizli");
}

// ---------- EK OKUMA (sebep-sonuç · magazin) ve MERAK ----------
// EK-OKUMA.md + MERAK.md: kronoloji maddesinin özet penceresinde, varsa,
// üç kart türüne buton açılır. Veri dosyaları (`data/ekokuma.js`,
// `data/merak.js`) bu satırlar yazıldığı gün HENÜZ YOK — içerik oturumları
// yazacak; panel BOŞ VERİYLE çalışır hâlde kuruluyor.
// 🔴 İKİ KURAL (koordinatör, ikisi de bağlayıcı):
//   ① Buton yalnız kart VARSA çıkar — boş buton olmayan içeriği vaat eder.
//   ② `kesinlik:"rivayet"` kart GÖRSEL olarak da ayrılır (zemin + rozet);
//      metinde yazmak yetmez, hızlı geçen rozeti görür cümleyi görmez.
//
// Yükleme — ANSİKLOPEDİ EKSENİ Kural ①: bu iki dosya index.html'in statik
// <script> listesinde YOK (ana yük onlarsız 19,8 MB); ilk özet penceresi
// açılışında arka planda TEK SEFERLİK indiriliyor. Dosya henüz yoksa (404)
// sessizce hiçbir şey olmaz — buton hiç çıkmaz. Dosya bir gün ortaya
// çıkarsa (başka bir oturum yazınca) kod DOKUNULMADAN bir sonraki sayfa
// yüklemesinde kendiliğinden çıkar.
var EKOKUMA_DURUM = { yuklendi: false, deneniyor: false };
function ekOkumaMerakYukle(biterse) {
  if (EKOKUMA_DURUM.yuklendi || EKOKUMA_DURUM.deneniyor) { if (biterse) biterse(); return; }
  EKOKUMA_DURUM.deneniyor = true;
  var damga = (document.querySelector('script[src*="js/app.js"]') || {}).src || "";
  var v = (damga.match(/v=(r\d+)/) || [])[1];
  var kalan = 2;
  function biri() { kalan--; if (kalan <= 0) { EKOKUMA_DURUM.yuklendi = true; if (biterse) biterse(); } }
  [["data/ekokuma.js", "EKOKUMA"], ["data/merak.js", "MERAK"]].forEach(function (pair) {
    var s = document.createElement("script");
    s.src = pair[0] + (v ? "?v=" + v : "");
    s.onload = biri;
    s.onerror = biri;   // dosya henüz yok — sessiz, buton çıkmaz
    document.head.appendChild(s);
  });
}

// Bir kartın verilen kronoloji maddesine bağlı olup olmadığı — üç örnek
// şema üç farklı bağlama alanı kullanıyor (dosyalardaki kendi örnekleri),
// kod hepsini okuyor, tek bir ad dayatmıyor:
//   sebep-sonuç `olay:[...]`   magazin `t` (tek tarih)   merak `baglanti:[...]`
function ekKartBagliMi(kart, o) {
  // `tur` alanı olmayan kaynaklar (ANTLASMALAR) da güne bağlanır.
  if (kart.tur === "magazin" || !kart.tur) return kart.t === o.t;
  var liste = kart.olay || kart.baglanti || [];
  return liste.indexOf(o.t) >= 0;
}
var EKOKUMA_TUR = {
  "sebep-sonuc": { etiket: "🔗 Sebep-Sonuç", kaynak: function () { return window.EKOKUMA || []; } },
  "magazin":     { etiket: "🎭 Magazin",     kaynak: function () { return window.EKOKUMA || []; } },
  "merak":       { etiket: "❓ Merak",        kaynak: function () { return window.MERAK || []; } },
  // 🔴🔴 24 Ağustos 2026 — 0034/H-0010: *"TÜM ANLAŞMA içeren maddelerin
  // içine ANLAŞMA METNİ butonu"* (Emre).
  //
  // 🟢 VE TEK BİR KART YAZILMADI — VERİ ZATEN VARDI, DÖRDÜNCÜ VAKA.
  // OPUS HAZIR KITA 84 ölçtü: `ANTLASMALAR`ın 41/41'inde `ozet` VE
  // `topraklar` DOLU (en kısa 84, ortanca 137, en uzun 310 karakter) ve
  // `topraklar` gerçekten HÜKÜM anlatıyor:
  //   Küçük Kaynarca → "Kırım Hanlığı Osmanlı egemenliğinden çıkıp
  //     siyaseten bağımsız ilan edildi (dinî bağ hilafette kaldı)…"
  //   Balta Limanı  → "Toprak konusu yok; iç tekeller kaldırıldı,
  //     İngiliz mallarına düşük gümrük ve serbest ticaret hakkı…"
  //
  // ⚠️ Ve 41 kartı ELLE yazmak bir özellik değil BORÇ üretirdi: aynı olgu
  //    iki yerde durur, biri güncellenir, öteki bayatlar. Bu projede o
  //    ders üç kez ölçüldü. ⇒ Kopyalama YOK, doğrudan bağlanıyor.
  //
  // 📌 VE ÖLÇÜLEN TAVAN YANLIŞ SORUNUN CEVABIYMIŞ: "TDV 41'in 26'sını
  //    kapsıyor (%63)" doğruydu ama soru *"TDV neyi kapsıyor"*du; doğru
  //    soru *"kartta ne yazabiliriz"*. Cevabı 41/41. TDV artık bir kısıt
  //    değil, yalnız ZENGİNLEŞTİRME katmanı.
  //
  // `turAlaniYok`: bu kaynağın kayıtlarında `tur` alanı YOKTUR; süzgeç
  // `k.tur === tur` şartını uygulamaz, bağlanma yalnız güne bakar.
  // 🔴 KAYNAK İKİ KÜMEYİ BİRLEŞTİRİYOR — VE BU BİR KUSURUN ÇARESİ.
  // OPUS HAZIR KITA 84 zenginleştirme kartlarını `EKOKUMA`ya `tur:
  // "antlasma"` ile yazdı; kaynak yalnız `ANTLASMALAR` döndürdüğü için
  // o kartlar SESSİZCE GÖRÜNMÜYORDU — kayıt sağlam, yalnız hiç gelmiyor.
  // 📌 Ve bu, aşağıdaki SON ÇARE dalının önlediği şeyin KARDEŞİ: orada
  //    kayıt geliyor ama gövdesi çizilmiyordu, burada kayıt HİÇ GELMİYOR.
  //    Aynı sınıf, bir kademe yukarıda — ve ikisi de sessiz.
  // ⇒ TEMEL (`ANTLASMALAR`, 41/41 hüküm özeti) ÖNCE, DETAY (TDV'den
  //   madde madde çıkarılmış) SONRA. Sıra `concat` ile korunuyor:
  //   kullanıcı önce "ne oldu"yu, sonra "maddeleri"ni okur.
  "antlasma":    { etiket: "📜 Antlaşma hükümleri", turAlaniYok: true,
                   kaynak: function () {
                     return (window.ANTLASMALAR || []).concat(
                       (window.EKOKUMA || []).filter(function (k) {
                         return k.tur === "antlasma";
                       }));
                   } }
};

function ekOkumaButonlariGuncelle(o) {
  var kutu = document.getElementById("ob-ekokuma-butonlar");
  if (!kutu) return;
  // İlk çağrıda veri yoksa yükle, gelince AYNI maddeyi yeniden çiz — buton
  // "geldiğinde kendiliğinden çıkar."
  if (!EKOKUMA_DURUM.yuklendi) {
    ekOkumaMerakYukle(function () { if (aktifOlay === o) ekOkumaButonlariGuncelle(o); });
  }
  aktifOlay = o;
  kutu.innerHTML = "";
  Object.keys(EKOKUMA_TUR).forEach(function (tur) {
    var _tanim = EKOKUMA_TUR[tur];
    var eslesen = _tanim.kaynak().filter(function (k) {
      // `turAlaniYok` olan kaynakta her kayıt o türdendir (ANTLASMALAR);
      // ötekilerde kayıt kendi türünü taşır.
      return (_tanim.turAlaniYok || k.tur === tur) && ekKartBagliMi(k, o);
    });
    if (!eslesen.length) return;
    var b = document.createElement("button");
    b.className = "ob-ek-btn";
    // 🔴 24 Ağustos 2026 — 0032/H-0008: *"merak butonu güzel ama KONU
    // İÇERİĞİ İKİ KELİME BİLE OLSA BUTONDA YER ALMALI kullanıcı merak
    // etsin diye."*
    //
    // 🟢 VE YENİ ALAN AÇILMADI — ÇÜNKÜ ZATEN VARDI. OPUS HAZIR KITA 84
    // ölçtü: `kisa` alanı 14 merak kartının 14'ünde DOLU. Eksik olan veri
    // değil GÖSTERİMDİ; bu satır etiketi ve sayıyı basıyor, ipucunu
    // basmıyordu.
    // 📌 Bu projede "istenen şeyin altyapısı zaten vardı" vakası bir günde
    //    BEŞ KEZ yaşandı. Yeni bir alan icat etmek beş dakika, `git grep`
    //    ile var olanı aramak on saniye.
    //
    // ⚠️ İPUCU YALNIZ TEK KARTTA GÖSTERİLİR. Birden çok kart varsa hangi
    //    kartın ipucunun basılacağı KEYFÎ olurdu — biri seçilip ötekiler
    //    gizlenirse kullanıcı eksik olanı hiç bilmez. Çok kartta sayı
    //    zaten "burada birden fazla şey var" diyor; o dürüst bilgidir.
    var _et = EKOKUMA_TUR[tur].etiket;
    if (eslesen.length > 1) {
      b.textContent = _et + " (" + eslesen.length + ")";
    } else {
      // 🔴🔴 ALAN SEÇİMİ ÖLÇÜMLE DÜZELTİLDİ — ilk yazışta `kisa` seçilmişti
      // ve TAM TERSİNİ yapıyordu.
      //   soru  "Osmanlı Gürcistan'ı niçin bütünüyle ele geçirmedi?"
      //   kisa  "Gürcistan tek bir devlet değildi; Osmanlı batıyı tâbi
      //          kıldı, doğusu İran'la paylaşılan bir nüfuz alanı…"
      // `kisa` CEVABIN ÖZETİDİR. Butona basmak merakı UYANDIRMAZ,
      // SÖNDÜRÜR — oysa Emre'nin istediği tam tersi: *"kullanıcı MERAK
      // ETSİN diye."* Soru sorulur, cevap kartta verilir.
      // 📌 Bunu kod okuması değil TARAYICIDA ÖLÇÜM yakaladı: alan adı
      //    (`kisa`) kısa bir ipucu vaat ediyordu, gerçek içeriği ise
      //    82-154 karakterlik tam cümlelerdi. *Alanın ADI, taşıdığı
      //    şeyin tarifi değildir.*
      var _s = eslesen[0] || {};
      var _ham = String(_s.soru || _s.kisa || "").trim();
      // 52 karakter: en kısa soru 46 karakter, yani çoğu soru TAM sığıyor.
      // Sınır ondan hemen sonraya konuldu ki kırpma istisna olsun, kural
      // olmasın. Kırpma her zaman kelime sınırında.
      var _ip = _ham;
      if (_ip.length > 52) _ip = _ip.slice(0, 51).replace(/\s+\S*$/, "") + "…";
      b.textContent = _ip ? _et + " · " + _ip : _et;
      if (_ham) b.title = _et + " — " + _ham;
    }
    b.addEventListener("click", function () { ekOkumaPenceresiAc(tur, eslesen); });
    kutu.appendChild(b);
  });
}
var aktifOlay = null;   // ekOkumaButonlariGuncelle'nin gecikmeli geri çağrısı için

function ekEsc(s) {
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function kesinlikRozeti(k) {
  var YAZI = { kesin: "kesin", tartismali: "tartışmalı", iddia: "iddia", rivayet: "rivayet" };
  return '<span class="ek-kesinlik ' + ekEsc(k || "") + '">' + ekEsc(YAZI[k] || k || "?") + "</span>";
}
function ekKartHtml(k) {
  var rivayet = k.kesinlik === "rivayet";
  var h = '<div class="ek-kart' + (rivayet ? " rivayet" : "") + '">';
  h += kesinlikRozeti(k.kesinlik);
  if (k.tur === "sebep-sonuc") {
    h += "<h4>" + ekEsc(k.sebep && k.sebep.b) + " → " + ekEsc(k.sonuc && k.sonuc.b) + "</h4>";
    if (k.bag) h += '<p class="ek-alt">' + ekEsc(k.bag) + "</p>";
    if (k.metin) h += "<p>" + ekEsc(k.metin) + "</p>";
    if (k.zincir && k.zincir.length) {
      h += '<p class="ek-alt">İlgili: ' + k.zincir.map(function (id) {
        return '<span class="ek-zincir-link" data-id="' + ekEsc(id) + '">' + ekEsc(id) + "</span>";
      }).join(" ") + "</p>";
    }
  } else if (k.tur === "magazin") {
    h += "<h4>" + ekEsc(k.baslik) + "</h4>";
    if (k.metin) h += "<p>" + ekEsc(k.metin) + "</p>";
    if (k.not) h += '<p class="ek-alt">' + ekEsc(k.not) + "</p>";
  } else if (k.tur === "merak") {
    h += "<h4>" + ekEsc(k.soru) + "</h4>";
    if (k.kisa) h += "<p>" + ekEsc(k.kisa) + "</p>";
    (k.goruşler || k.gorusler || []).forEach(function (g, i) {
      h += '<div class="ek-goruş"><b>Görüş ' + (i + 1) + "</b>" + ekEsc(g.tez) +
           (g.dayanak ? " — " + ekEsc(g.dayanak) : "") + "</div>";
    });
  } else if (!k.tur && (k.ozet || k.topraklar)) {
    // 📜 ANTLAŞMA — `ANTLASMALAR` kaydı, `tur` alanı taşımaz.
    h += "<h4>" + ekEsc(k.ad || "Antlaşma") + "</h4>";
    if (k.taraf_metin) h += '<p class="ek-alt">' + ekEsc(k.taraf_metin) + "</p>";
    if (k.ozet) h += "<p>" + ekEsc(k.ozet) + "</p>";
    // ⚠️ `topraklar` alan adına rağmen YALNIZ toprak anlatmıyor: Balta
    //    Limanı kaydı "Toprak konusu yok; iç tekeller kaldırıldı…" diyor.
    //    Yani alan HÜKÜMLERİ taşıyor — başlık ona göre.
    if (k.topraklar) h += "<p><b>Hükümleri:</b> " + ekEsc(k.topraklar) + "</p>";
    if (k.savas_basi) h += '<p class="ek-alt">Bitirdiği savaş: ' + ekEsc(k.savas_basi) + "</p>";
  } else {
    // 🔴🔴 SON ÇARE DALI — VE BU DAL BUGÜNE KADAR YOKTU.
    // OPUS HAZIR KITA 84 ölçtü: `ekKartHtml` yalnız ÜÇ tür için dal
    // taşıyordu ve son bir `else` YOKTU. Bilinmeyen bir `tur` yazılırsa
    // kart **rozet + "Kaynak:" satırından ibaret** çıkıyordu — bütün
    // içerik görünmeden.
    // ⚠️ Ve sinsiliği: hata YOK, uyarı YOK, denetim ÖTMEZ. Yeni bir tür
    //    ekleyen oturum "yazdım ama görünmüyor" diye kendi verisinden
    //    şüphelenirdi; oysa veri doğru, GÖSTERİCİ eksikti.
    // 📌 İki değişiklik gerekiyormuş, bir değil: `EKOKUMA_TUR`a kayıt VE
    //    `ekKartHtml`e dal. Yalnız birincisini saymıştım.
    // ⇒ Bu dal bir tür için özel biçim vermez, ama HİÇBİR ŞEY
    //   göstermemeyi de imkânsız kılar: kaydın yazı taşıyan alanları
    //   olduğu gibi dökülür. Çirkin olabilir, GÖRÜNMEZ olamaz.
    if (k.baslik || k.ad || k.soru) h += "<h4>" + ekEsc(k.baslik || k.ad || k.soru) + "</h4>";
    ["ozet", "metin", "kisa", "not", "bag", "aciklama"].forEach(function (a) {
      if (k[a] && typeof k[a] === "string") h += "<p>" + ekEsc(k[a]) + "</p>";
    });
  }
  if (k.kaynak) h += '<p class="ek-alt">Kaynak: ' + ekEsc(k.kaynak) + "</p>";
  h += "</div>";
  return h;
}

var ekokumaPencere = document.getElementById("ekokuma-pencere");
function ekOkumaPenceresiAc(tur, kartlar) {
  document.getElementById("ekokuma-baslik").textContent = EKOKUMA_TUR[tur].etiket;
  var el = document.getElementById("ekokuma-icerik");
  el.innerHTML = kartlar.map(ekKartHtml).join("");
  // Zincir bağlantıları: sebep-sonuç kartları birbirine `zincir:` ile atıfta
  // bulunuyor; tıklanınca AYNI pencerede o karta atlanıyor ("bu neyin
  // sonucu, neye sebep oldu" gezinmesi — EK-OKUMA.md).
  var linkler = el.querySelectorAll(".ek-zincir-link");
  for (var i = 0; i < linkler.length; i++) {
    linkler[i].addEventListener("click", function () {
      var id = this.dataset.id;
      var hedef = (window.EKOKUMA || []).filter(function (k) { return k.id === id; })[0];
      if (hedef) ekOkumaPenceresiAc(hedef.tur, [hedef]);
    });
  }
  ekokumaPencere.classList.remove("gizli");
}
document.getElementById("ekokuma-kapat").addEventListener("click", function () {
  ekokumaPencere.classList.add("gizli");
});
ekokumaPencere.addEventListener("click", function (e) {
  if (e.target === ekokumaPencere) ekokumaPencere.classList.add("gizli");
});

// ---------- Oynatma: zaman akışı ve olay-olay akışı ----------
akisModu = document.getElementById("akis-modu");
var olayHizSec = document.getElementById("olay-hiz");

function moduUygula() {
  var olayModu = akisModu.value === "olay";
  hizSec.style.display = olayModu ? "none" : "";
  olayHizSec.style.display = olayModu ? "" : "none";
  if (!olayModu) obPanel.classList.add("gizli");
}
akisModu.addEventListener("change", function () {
  var calisiyordu = !!zamanlayici;
  if (calisiyordu) oynatDurdur();
  moduUygula();
  if (calisiyordu) oynatDurdur();
});
moduUygula();

// p5/H-0006 — kullanıcı: "aynı tarihli iki madde tek adımda geçiliyor."
// Ölçüldü: ⏮/⏭ ve "olay olay" akışı SAF TARİH karşılaştırması kullanıyordu
// (`gi > t` / `gi < t`). İki madde aynı günse (ör. Mercidabık + Ramazanoğulları
// ikisi de 1516-08-24), o tarihe bir kez ulaşılınca ikinci madde `> t`'yi hiç
// sağlamıyor ve TAMAMEN ATLANIYORDU — kullanıcı ikisini ayrı ayrı göremiyordu.
// ⇒ Gezinme artık TARİH değil SIRA NUMARASI (olaylar dizisindeki index)
// üzerinden yapılıyor. `suankiOlayI` en son hedeflenen maddenin indeksini
// tutuyor; ⏮/⏭ ondan ±1 gidiyor — aynı güne düşen komşu madde de dahil.
// Slider'la ya da başka bir yolla tarih değişip index bayatlarsa, ilk tık
// `olayIndexTazele` ile en yakın maddeye yeniden oturuyor.
var suankiOlayI = -1;
function olayIndexTazele() {
  if (suankiOlayI >= 0 && olaylar[suankiOlayI] && olaylar[suankiOlayI].gi === suanki) return;
  suankiOlayI = -1;
  for (var i = 0; i < olaylar.length; i++) {
    if (olaylar[i].gi <= suanki) suankiOlayI = i; else break;
  }
}

function oynatDurdur() {
  if (zamanlayici) {
    clearInterval(zamanlayici);
    zamanlayici = null;
    btnOynat.textContent = "▶";
    return;
  }
  if (suanki >= BITIS) tarihAyarla(BASLANGIC);
  btnOynat.textContent = "⏸";

  if (akisModu.value === "olay") {
    var bekleme = parseInt(olayHizSec.value, 10);
    var adimla = function () {
      olayIndexTazele();
      var i = suankiOlayI + 1;
      if (i >= olaylar.length) { oynatDurdur(); return; }
      suankiOlayI = i;
      olayaGit(olaylar[i]);                      // otomatik akış, KAMERA hakemli
    };
    adimla();
    zamanlayici = setInterval(adimla, bekleme);
  } else {
    var gunSn = parseInt(hizSec.value, 10);
    var adim = Math.max(1, Math.round(gunSn / 16));
    // 🔴🔴 DÖRDÜNCÜ SESSİZ DAL — 24 Ağustos 2026, OPUS HAZIR KITA 82 buldu.
    //
    // Üç sessiz dal bugün düzeltilmişti (konumsuz · konum işaretlenmemiş ·
    // aynı yerde). Bu dördüncüsü HİÇ SAYILMAMIŞTI ve en sinsisi:
    // "zaman akışı" kipinde `olayaGit` HİÇ ÇAĞRILMIYOR ⇒ `_varista` da,
    // `isaretYanipSon` da çağrılmıyor. Gün ilerler, maddeler geçer,
    // HİÇBİR olay mahalli yanıp sönmez.
    // ⚠️ Varsayılan kip "olay" olduğu için bu dal yalnız kullanıcı zaman
    //    akışına geçtiğinde görünür — Emre'nin şikâyetindeki
    //    ARALIKLILIĞIN ("bazı maddelerde yanıp sönmüyor") sebebi bu olabilir.
    // 📌 Ve dersin kendisi bu dosyada yazılıydı: *"bir düzeltme, aynı
    //    kusurun BÜTÜN dallarında aranmalı."* Üç dal arandı, dördüncüsü
    //    başka bir fonksiyonda olduğu için görülmedi — yani "bütün
    //    dallar" derken YALNIZ AYNI FONKSİYONA bakılmıştı.
    //
    // ⚠️ KAMERA OYNATILMIYOR VE BU KASITLI: zaman akışı kipini seçen
    //    kullanıcı "haritayı ben yönetiyorum, sen zamanı akıt" diyor.
    //    Her olayda uçmak o sözleşmeyi bozardı. Yalnız İŞARET yanıyor —
    //    "burada bir şey oldu" der, kadrajı değiştirmez.
    var _sonIsaretGun = suanki;
    zamanlayici = setInterval(function () {
      if (suanki >= BITIS) { oynatDurdur(); return; }
      var _onceki = suanki;
      tarihAyarla(suanki + adim);
      // Aralıkta kalan SON olayı işaretle. Birden çok olay varsa hepsini
      // ard arda yakmak titreme üretirdi; sonuncusu "gelinen an"dır.
      try {
        var _son = null;
        for (var _i = 0; _i < olaylar.length; _i++) {
          var _g = olaylar[_i].gi;
          if (_g > _onceki && _g <= suanki) _son = olaylar[_i];
          else if (_g > suanki) break;
        }
        if (_son && _son.gi !== _sonIsaretGun) {
          var _kon = olayKonumu(_son);
          if (_kon) { _sonIsaretGun = _son.gi; isaretYanipSon(_kon); }
        }
      } catch (eAkis) { /* işaret şart değil, akış durmasın */ }
    }, 62);
  }
}
btnOynat.addEventListener("click", oynatDurdur);
hizSec.addEventListener("change", function () {
  if (zamanlayici) { oynatDurdur(); oynatDurdur(); }
});
olayHizSec.addEventListener("change", function () {
  if (zamanlayici) { oynatDurdur(); oynatDurdur(); }
});

// ---------- Bölge önayarları ----------
// Seçilen bölgeye yakınlaşır; yakınlaşma otomatik zoom'u kapatır ki gezinti
// serbest kalsın. Yakınlaşınca küçük yerleşimlerin adları da açılır.
var BOLGELER = {
  anadolu:   [[25.5, 35.5], [45.5, 42.5]],
  rumeli:    [[18.5, 38.5], [29.5, 45.0]],
  avrupa:    [[15.5, 44.0], [24.0, 49.5]],
  ege:       [[23.0, 34.5], [29.5, 41.0]],
  karadeniz: [[27.0, 43.5], [41.0, 49.0]],
  kafkas:    [[38.5, 36.5], [51.0, 43.5]],
  suriye:    [[34.0, 29.0], [49.0, 38.0]],
  hicaz:     [[34.0, 12.0], [50.0, 30.0]],
  misir:     [[24.0, 13.0], [40.0, 32.5]],
  afrika:    [[-3.0, 27.0], [25.5, 38.0]]
};
document.getElementById("bolge").addEventListener("change", function () {
  var b = BOLGELER[this.value];
  if (!b) {
    otoZoom = true;
    document.getElementById("btn-zoom").classList.remove("pasif");
    if (aktifDonem >= 0) zoomUygula(donemler[aktifDonem]);
    return;
  }
  otoZoom = false;                       // bölgeye kilitlen, dönem değişince kaçma
  document.getElementById("btn-zoom").classList.add("pasif");
  harita.fitBounds(b, { padding: 40, duration: 850 });
});

// Coğrafya katmanları — iki grup AYRI AYRI açılır (birlikte açılırsa
// aralarındaki fark kaybolur ve bütün teşhis değeri o farkta).
[["btn-cografya", "a"], ["btn-motorhat", "b"]].forEach(function (c) {
  var dugme = document.getElementById(c[0]), acik = false;
  dugme.addEventListener("click", function () {
    acik = !acik;
    altlikGoster(c[1], acik);
    dugme.classList.toggle("etkin", acik);
  });
});

// Veri sınırı — varsayılan KAPALI. Atlasın kendisi değil, atlasın NEREDE
// BİTTİĞİNİ söyleyen bir işaret; sürekli açık dursa haritayı çerçeveler.
(function () {
  var d = document.getElementById("btn-verisiniri");
  if (!d) return;
  var acik = false;
  d.addEventListener("click", function () {
    acik = !acik;
    if (harita.getLayer("veri-siniri-cizgi"))
      harita.setLayoutProperty("veri-siniri-cizgi", "visibility", acik ? "visible" : "none");
    d.classList.toggle("etkin", acik);
  });
})();

// Koridor ağı — varsayılan KAPALI, "Veri sınırı" ile aynı desende.
// Sürekli açık dursa haritayı ağla örterdi; menzil yolları bir ARKA PLAN
// bilgisidir, atlasın kendisi değil.
// ⚠️ Düğme kapalıyken de `koridorGuncelle` çalışır (kaynak taze kalsın,
// açılınca doğru tarihi göstersin); görünürlük yalnız layout ile açılır.
(function () {
  var d = document.getElementById("btn-koridor");
  if (!d) return;
  d.addEventListener("click", function () {
    KORIDOR.acik = !KORIDOR.acik;
    ["koridor-kenar-cizgi", "koridor-dugum-daire"].forEach(function (k) {
      if (harita.getLayer(k))
        harita.setLayoutProperty(k, "visibility", KORIDOR.acik ? "visible" : "none");
    });
    d.classList.toggle("etkin", KORIDOR.acik);
  });
})();

// p2/H-0010 — "butonları aç": Dizin/Coğrafya/Motor hatları/Veri sınırı/Tam
// ekran düğmeleri artık üst barda tek tek durmuyor, bu düğmenin altına asılan
// bir panelde saklı. Dışarı tıklanınca ya da bir araç düğmesine tıklanınca
// kapanıyor — açık kalıp haritayı örtmesin diye.
(function () {
  var btn = document.getElementById("btn-menu");
  var panel = document.getElementById("menu-butonlar");
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    panel.classList.toggle("gizli");
  });
  panel.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") panel.classList.add("gizli");
  });
  document.addEventListener("click", function (e) {
    if (!panel.classList.contains("gizli") && !panel.contains(e.target) && e.target !== btn)
      panel.classList.add("gizli");
  });
})();

// Tam ekran
document.getElementById("btn-tamekran").addEventListener("click", function () {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen();
});
document.addEventListener("fullscreenchange", function () {
  document.getElementById("btn-tamekran").textContent = document.fullscreenElement ? "⤢" : "⛶";
  setTimeout(function () { harita.resize(); }, 120);
});

// Yan paneli katlama (haritaya azami alan)
// ═══════════════════════════════════════════════════════════════════
// PANEL — UC KADEME (Emre, 23 Agustos 2026 · 0027/H-0002.2 = H-0012)
// ═══════════════════════════════════════════════════════════════════
// *"panel butonu bastikca kapali dar genis kapali seklinde ayarlanan bir
//   buton olsun"* ve *"SOL TARAFTAKI DAR GENIS BUTONUNU KALDIRALIM"*
//
// ESKIDEN IKI BAGIMSIZ DURUM VARDI ve CARPILIYORLARDI:
//     .katli  (btn-panel)            panel tamamen gizli
//     .dar    (btn-panel-genislik)   panel %60 genislikte
// "katli + dar" ulasilabilir ama ANLAMSIZ bir haldi — gizli bir panelin
// genisligi neyi degistirir? Ve kullanici paneli kapatip actiginda hangi
// genislige donecegini onceden bilemiyordu.
// ⇒ Tek zincir: genis -> dar -> kapali -> genis. Anlamsiz bilesim artik
//   URETILEMEZ; iki durumun carpimi yerine uc noktali bir dongu var.
//
// ETIKET — 🔴 24 Agustos 2026'da DEGISTI (0031/H-0006, Emre'nin hukmu).
//
// ESKI HALI ve gerekcesi (kayit icin duruyor, cunku itiraz HAKLIYDI):
//   "Yazili kural 'metin TIKLAYINCA GIDILECEK kipi yazar' der ve IKI
//    durumda dogrudur (tek alternatif vardir, belirsizlik yok). UC
//    durumda 'Dar' yazan bir dugme 'su an dar mi' 'dar yapar mi' belli
//    degildir. Bu yuzden uc kademede etiket BULUNULAN hali yazar."
// O gerekce 0027/H-0012'den geliyordu ve kendi baglaminda dogruydu.
//
// 🔴 AMA 0031/H-0006 TERSINI ISTEDI ve Emre hukmu verdi: "gidecegi".
// Iki paket birbirinin tersini soyluyordu; ikisi ayni anda dogru olamaz.
// Karar kendi basima ALINMADI — celiski Emre'ye goturuldu, cevabi
// "1-gidecegi" oldu.
//
// 🟢 VE BELIRSIZLIK GERI GETIRILMEDI — cozum FIIL:
//   Bir durum adi ("Dar") iki turlu okunur; bir FIIL ("Daralt") tek
//   turlu okunur, cunku fiil zaten bir EYLEM soyler ve eylemin sonucu
//   hedef kademedir. Boylece hem Emre'nin hukmu (gidecegi durum) hem
//   eski itirazin korudugu sey (uc kademede belirsizlik olmasin)
//   AYNI ANDA saglaniyor.
//   ⇒ Etiket hedefi ADIYLA degil SONUCUYLA soyluyor:
//        genis  -> "Daralt"    (tiklayinca dar olur)
//        dar    -> "Kapat"     (tiklayinca kapanir)
//        kapali -> "Genislet"  (tiklayinca genis olur)
// 📌 `title` zaten hedefi yaziyordu ("tikla, DAR olsun") — yani veri
//    dogruydu, gorunen metin ondan AYRISIYORDU. Simdi ikisi ayni seyi
//    soyluyor; bir bilginin iki yerde AYRI durmasi bu projede defalarca
//    bayatlama uretti.
var PANEL_KADEMELER = ["genis", "dar", "kapali"];
var PANEL_ETIKET = { genis: "⇥ Daralt", dar: "⇤ Kapat", kapali: "⇥ Genislet" };
var PANEL_BASLIK = {
  genis: "Panel genis — tikla, DARALSIN",
  dar: "Panel dar — tikla, KAPANSIN",
  kapali: "Panel kapali — tikla, GENISLESIN"
};
var btnPanel = document.getElementById("btn-panel");

function panelKademeUygula(kademe, tuvaliTazele) {
  if (PANEL_KADEMELER.indexOf(kademe) === -1) kademe = "genis";
  var yp = document.getElementById("yanpanel");
  var katli = (kademe === "kapali");
  yp.classList.toggle("katli", katli);
  yp.classList.toggle("dar", kademe === "dar");
  btnPanel.textContent = PANEL_ETIKET[kademe];
  btnPanel.title = PANEL_BASLIK[kademe];
  btnPanel.setAttribute("aria-expanded", String(!katli));
  // p2/H-0006: panel katlaninca kronoloji tamamen kaybolmasin diye alttaki
  // ozet serit aciliyor; panel geri acilinca serit gereksiz, kapaniyor.
  if (kronolojiSerit) {
    kronolojiSerit.classList.toggle("gizli", !katli);
    if (katli) kronolojiSeritGuncelle();
  }
  // ⚠️ resize SART: kabin genisligi degisti, MapLibre tuvali eski
  // genislikte kalirsa sagda bos serit birakir.
  if (tuvaliTazele !== false) setTimeout(function () { harita.resize(); }, 60);
}

// ESKI TERCIHTEN GOC — sessizce sifirlamak yerine cevriliyor.
// Kullanicinin daha once sectigi genislik KAYBOLMAZ; "panelDar=1" diyen
// bir tarayici "dar" kademesiyle acilir. Eski anahtar SILINMIYOR: geri
// alinmasi gerekirse tercih hala orada duruyor.
(function () {
  var k = localStorage.getItem("panelKademe");
  if (!k) {
    k = (localStorage.getItem("panelDar") === "1") ? "dar" : "genis";
    localStorage.setItem("panelKademe", k);
  }
  panelKademeUygula(k, k !== "genis");
})();

btnPanel.addEventListener("click", function () {
  var yp = document.getElementById("yanpanel");
  var simdiki = yp.classList.contains("katli") ? "kapali"
              : (yp.classList.contains("dar") ? "dar" : "genis");
  var sonraki = PANEL_KADEMELER[(PANEL_KADEMELER.indexOf(simdiki) + 1) % 3];
  panelKademeUygula(sonraki);
  localStorage.setItem("panelKademe", sonraki);
});

// Otomatik yakınlaştırma düğmesi
var btnZoom = document.getElementById("btn-zoom");
btnZoom.addEventListener("click", function () {
  otoZoom = !otoZoom;
  btnZoom.classList.toggle("pasif", !otoZoom);
  if (otoZoom && aktifDonem >= 0) zoomUygula(donemler[aktifDonem]);
});

// 🔴 KULLANICI ELLE YAKINLAŞTIRIRSA OTOMATİK ÇERÇEVELEME KAPANIR.
// Kullanıcının cümlesi bir NİYET BEYANI: *"hangi zoomda ise o zoomda kalmalı."*
// Zoom hareketi "buraya bakmak istiyorum" demektir; ondan sonra haritayı
// kendiliğinden kaçırmak, kullanıcının kararını geri almaktır.
//
// ⚠️ Bu, kapsama korumasının YERİNE değil, ÜSTÜNE geliyor — ve gerekçesi
// ölçüldü: koruma tek başına 461 geçişin 417'sini (%90,5) susturuyor, ama
// kullanıcının bildirdiği vakayı SUSTURMUYOR. Ankara Savaşı'nda (1402-07-28)
// imparatorluk kutusu 20,4-40,4°D'den 26,4-28,2°D'ye çöküyor; yeni kutu
// eskisinin içinde ama oran 0,08 (< 0,3), yani koruma "çerçevele" diyor ve
// haklı olarak diyor — orada gerçekten bambaşka bir coğrafyaya bakılıyor.
// ⇒ O vakayı ancak kullanıcının kendi niyeti durdurabilir. İki mekanizma
// farklı işler: koruma GEREKSİZ hareketi eler, niyet GEREKLİ hareketi de
// kullanıcı istemiyorsa eler.
//
// 📌 Desen zaten var: bölge seçicisi de kilitlenirken `otoZoom = false` yapıyor
// (`app.js:2512`). Yeni bir kavram icat edilmiyor, var olan tutarlı hâle geliyor.
// ⚠️ `originalEvent` şartı zorunlu: `fitBounds`/`flyTo` da zoom olayı üretir,
// o şart olmasa otomatik çerçeveleme KENDİ KENDİNİ kapatırdı.
harita.on("zoomstart", function (e) {
  if (!e || !e.originalEvent || !otoZoom) return;
  otoZoom = false;
  btnZoom.classList.add("pasif");
});

// ---------- ARAYÜZ 4 — "haritayı olaya götür" (uçuş kipi) ----------
// oturumlar/ARAYUZ-4-SARTNAME.md. `map.flyTo`nun kendi eğrisi (van Wijk &
// Nuij) tam olarak istenen "eğik atış" — elle parabol hesabı YAZILMADI.
//
// Konum çözümü — BULANIK EŞLEŞME YOK (bugün beş kez yanlış çıktı, hepsi
// isim/skor tabanlıydı — kisiBul, K1 sayımı, MOTOR 3, Kösem, III. Ahmed).
// `yer_id` (yerleşim adı, birebir) ve `yer_kon` (savaş meydanları için
// [lat,lon]) — `vefat_id` deseninin aynısı, aynı sebeple.
function olayKonumu(o) {
  if (o.yer_kon && o.yer_kon.length === 2) return { lat: o.yer_kon[0], lon: o.yer_kon[1] };
  if (o.yer_id) {
    for (var i = 0; i < sehirler.length; i++) {
      var ad = sehirler[i].s.ad;
      // Birebir eşleşme + parantezli lakabın öncesi (deterministik dönüşüm,
      // skor YOK — "Bapheus (Koyunhisar)" gibi kayıtlar için tek esneklik).
      if (ad === o.yer_id || ad.split(" (")[0] === o.yer_id) return { lat: sehirler[i].s.lat, lon: sehirler[i].s.lon };
    }
  }
  return null;
}

// 🔴 `yakinlikKm` · `YAKINLIK_CAPA` · `yakinlikEtiket` SİLİNDİ (22 Ağu 2026).
// Üçü de yalnız `ayar-yakinlik` sürgüsünün etiketini besliyordu; o sürgü ÖLÜ
// çıktı (değeri hiçbir kamera kodu okumuyordu) ve kaldırıldı. Sürgü gidince
// bu üçü de çağrısız kaldı.
// `YASALAR A4`: **ölü ÖZELLİK kodu silinir, ölü SAVUNMA dalı KALIR.** Bunlar
// özellik kodu — bir etiketi biçimlendiriyorlardı, hiçbir şeyi korumuyorlardı.
//
// 📌 KAYIT — silinen ölçüm, yeniden ölçülmesin diye:
//   zoom→km dönüşümü MapLibre'nin KENDİ döşeme kuralıyla yapılıyordu:
//   512px, 256 DEĞİL (Google/Bing'in eski 256px kuralı burada tam 2× yanlış
//   sonuç veriyordu, ölçülüp düzeltilmişti).
//   Çapa noktaları GERÇEK haversine ölçümüydü, tahmin değil:
//     bir şehir ~66 km (İstanbul metropolü) · bir sancak ~141 km (Bosna)
//     Batı Anadolu ~521 km · Anadolu ~1.499 km · imparatorluk ~3.306 km
//   ⇒ Ters yön (`kmDanZoom`) YAŞIYOR ve uçuşun kalbi; bu bilgi orada duruyor.

// §A② — varsayılan AÇIK (şartnamenin kendi önerisi: "kapalıyken kimse
// varlığını bilmez"). `localStorage`ta hiç kayıt yoksa açık kalır; kullanıcı
// bir kez kapatırsa "0" yazılır ve o tercih kalıcı olur.
var duyguAcEl = document.getElementById("duygu-ac");
(function () {
  duyguAcEl.checked = localStorage.getItem("duyguAc") !== "0";
  document.documentElement.classList.toggle("duygu-kapali", !duyguAcEl.checked);
  duyguAcEl.addEventListener("change", function () {
    localStorage.setItem("duyguAc", duyguAcEl.checked ? "1" : "0");
    document.documentElement.classList.toggle("duygu-kapali", !duyguAcEl.checked);
  });
})();

// 🔴 `ucus-ac` onay kutusu 24 Ağustos 2026'da KALDIRILDI; yerini kip
// kutusundaki `pasif` seçeneği aldı (gerekçe index.html'de).
// Tek kapı burası: uçuş/ani/pasif kararını okuyan HER yer bunu çağırır.
// ⚠️ Ayrı ayrı `ucusKipEl.value !== "pasif"` yazmak cazipti; yazılmadı,
// çünkü bu projede aynı sorunun iki ayrı yerde sorulması defalarca
// ayrışma üretti (`§11`: "bir bilgi iki yerde duruyorsa biri bayatlar").
function ucusAcik() {
  return !!(ucusKipEl && ucusKipEl.value !== "pasif");
}
var ucusKipEl = document.getElementById("ucus-kip");
var obYerYokEl = document.getElementById("ob-yer-yok");
// Tercihler kalıcı — `lejantKapali`/`panel katli` ile aynı desen.
(function () {
  // 🔴 22 Ağustos — `=== "1"` İDİ ve HTML'deki `checked`i EZİYORDU: kayıt
  // yokken `null === "1"` false verir, yani kutu her temiz tarayıcıda
  // KAPALI açılırdı. `checked` özniteliğini eklemek TEK BAŞINA yetmezdi —
  // bu satır onu geri alıyordu. (`duygu-ac` aynı bloğun 20 satır üstünde
  // doğrusunu zaten yapıyor: `!== "0"`. İki kardeş kontrol, iki farklı
  // varsayılan mantığı — biri yanlıştı.)
  // GEÇİŞ — eski `ucusAc:"0"` tercihi kaybolmasın: `pasif`e çevrilir ve
  // eski anahtar SİLİNİR. Silinmezse kullanıcı kipi değiştirdiğinde her
  // açılışta geri gelirdi — sessiz ve bulunması zor bir kusur.
  if (localStorage.getItem("ucusAc") === "0") {
    localStorage.setItem("ucusKip", "pasif");
  }
  if (localStorage.getItem("ucusAc") !== null) localStorage.removeItem("ucusAc");
  if (localStorage.getItem("ucusKip")) ucusKipEl.value = localStorage.getItem("ucusKip");
  ucusKipEl.addEventListener("change", function () {
    localStorage.setItem("ucusKip", ucusKipEl.value);
    // Pasife geçilince ekranda duran "pasif" uyarısı bayatlamasın.
    if (ucusAcik() && obYerYokEl && /Pasif kip/.test(obYerYokEl.textContent))
      obYerYokEl.textContent = "";
  });
})();

// §⑧④(a) — koordinatör bunu AYAR değil GERÇEK KUSUR sayıyor: `flyTo`
// hedefi kabın GEOMETRİK merkezine koyar; `#kronoloji-serit` (yanpanel
// katlıyken haritanın ALTINDA duran şerit) açıksa nokta o şeridin arkasına
// düşebilir. ⚠️ ÖLÇÜLDÜ VE SINIRLI: `#yanpanel` açıkken (varsayılan durum)
// `#harita`nın KENDİ kabı zaten yanpanel'i DIŞLIYOR (`#govde{display:flex}`,
// `#harita{flex:1 1 auto}` — CSS'te ayrı sütun, üst üste binme YOK), yani
// o durumda merkezleme zaten doğru ve ofsete gerek yok. Tek doğrulanan
// örtüşme: yanpanel KATLIYKEN görünen `#kronoloji-serit` haritanın ALT
// kenarını kaplıyor — hedefi hafifçe YUKARI kaydırıyoruz. Emre'nin
// şikâyeti panel AÇIKKEN de sürerse bu ölçüm eksik demektir, gözle
// sınanmalı (§⑧⑤).
function haritaOfseti() {
  var serit = document.getElementById("kronoloji-serit");
  if (serit && !serit.classList.contains("gizli") && serit.offsetHeight) {
    return [0, -Math.round(serit.offsetHeight / 2)];
  }
  return [0, 0];
}

// §⑧④(b) — "aynı yerde iki olay → uçma." Art arda iki olay AYNI konuma
// düşüyorsa harita zaten oradadır, boşuna havalanmak göz yorar (§⑥⑤'in
// doğrudan uzantısı).
var sonUcusKonumAnahtari = null;
// §⑧④(c) — hızlı ⏭'de uçuşu ATLA, `jumpTo`ya düş. Eşik ÖLÇÜLMEDİ (görsel
// doğrulama bu ortamda mümkün değildi) — 500 ms, "art arda tıklama" için
// yaygın kabul edilen alt sınır (insan tepki/tıklama aralığının altı);
// Emre'nin gerçek kullanımında gözle ayarlanmalı, sabit sayı değil niyet.
var UCUS_HIZLI_ESIK_MS = 500;
var sonUcusZamani = 0;

// p2/H-0010 ④ — "ikisi de yoksa kart SESSİZCE ATLAMAZ." Yalnız uçuş
// AÇIKKEN gösterilir: kapalıyken kimse bir uçuş beklemiyor, açıklanacak
// bir yokluk da yok.
// §⑦ — nokta yeri olmayan olay sessiz kalmaz: o günkü imparatorluk
// sınırına (`donemler[i].b`) çerçevelenir. Metin niçin uzaklaşıldığını söyler.
// `zorla` — 🛩 anahtarını ATLA. Anahtarın kendi açıklaması *"SIRADAKİ OLAYA
// GEÇİLİNCE harita o yeri kendiliğinden ortalar"* diyor, yani o ayar OTOMATİK
// akış içindir. Kullanıcı bir maddeye ELLE tıkladıysa bu otomatik değildir —
// tıklamak zaten "beni oraya götür" demektir. (Bu ayrım `maddeAc`ta ölçümle
// bulunmuştu; motora bağlanırken KAYBOLMASIN diye parametreye dönüştürüldü.)
function haritayiOlayaGotur(o, zorla) {
  // 🔴 `pasif` kip HER YOLU kapatır — `zorla` DÂHİL. Gerekçesi Emre'nin
  // tanımı: *"harita o şekilde kalacaktır."* (Ayrıntı: index.html.)
  // ⚠️ `zorla` bayrağı artık yalnız belge değeri taşıyor; kaldırılmadı
  // çünkü çağıranların niyetini ("bu bir ELLE tıklama") anlatıyor ve
  // ileride pasif dışında bir ayrım gerekirse yeri hazır.
  if (!ucusAcik()) {
    // Sessiz kalınmaz: hiçbir şey yapmamak, kusurdan ayırt edilemez.
    if (obYerYokEl) obYerYokEl.textContent =
      "🛩 Pasif kip — harita bıraktığınız yerde duruyor. Geçiş biçimini " +
      "kronoloji başlığındaki kutudan değiştirebilirsiniz.";
    return;
  }
  var hedef = olayKonumu(o);
  if (!hedef) {
    sonUcusKonumAnahtari = null;   // genel görünüme düşünce "ayni yer" hafizasi da sifirlanir
    // 🔴🔴 22 Ağustos 2026 — BU DALIN ŞARTI DEĞİŞTİ, ve sebebi ÖLÇÜM.
    //
    // ESKİ HÂLİ: `yer_id` çözülemeyen HER madde imparatorluk sınırına
    // `fitBounds` yapıyordu (§⑦: "nokta yeri olmayan olay sessiz kalmaz").
    // O kural kendi içinde tutarlıydı — ama evren ölçülünce çöktü:
    //     Osmanlı kronolojisi        1223 madde
    //     konumu ÇÖZÜLEN              809
    //     🔴 KONUMSUZ                 414   = %33,9
    //     kapsam_genis:true             0   ← olaylar*.js'te HİÇBİRİNDE YOK
    //                                       (alan var ama data/kronoloji_*.js
    //                                        içinde: 24 dosya, 189 kayıt)
    // ⇒ Her ÜÇ maddeden BİRİ, "imparatorluk çapında olduğu için" değil,
    //   sadece `yer_id`si yazılmadığı için kıtaya açılıyordu. Ölçülmüş
    //   dizilim (8 adımlık koşu): fit(imparatorluk) → fly(z6,04) →
    //   fit(imparatorluk) → fit → fly(z6,03) …
    // 🔴 Emre'nin hükmü bunu doğrudan çürütüyor: *"harita odağı BİR YAKIN
    //   BİR UZAK, bir koca imparatorluğu gösteren tarzda da olmamalı."*
    //
    // ⇒ YENİ KURAL: imparatorluk görünümü artık bir DOLGU değil, bir BEYAN.
    //   Yalnız `kapsam_genis:true` maddelerde açılır. `yer_id` YOKLUĞU bir
    //   veri eksiğidir, "olay imparatorluk çapındaydı" demek DEĞİLDİR —
    //   ikisini aynı davranışa bağlamak, eksikliği bir hükümmüş gibi
    //   çizmekti.
    // 📌 `CLAUDE.md §11`: *"iki ayrı kusur tek satırda raporlanırsa, çareleri
    //   ters olsa bile aynı çare uygulanır."* Burada iki ayrı DURUM tek dala
    //   düşüyordu; ayrıldılar.
    // ⚠️ Ve madde SESSİZ KALMIYOR — §⑦'nin asıl kaygısı korunuyor: kamera
    //   yerinde kalır ama not YAZILIR, yani kullanıcı niçin bir şey
    //   olmadığını okur.
    if (!o.kapsam_genis) {
      if (obYerYokEl) {
        obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri işaretlenmemiş — harita yerinde kaldı.";
      }
      // 🔴 24 Ağustos — bu dal da SESSİZDİ ve aynı hükme tâbi (0031 →
      // "panel"). Konumu işaretlenmemiş bir maddede kamera KASTEN
      // yerinde kalıyor; kırpma da atmazsa hiçbir sinyal kalmıyordu.
      // ⚠️ İki sessiz dal vardı; biri düzeltilip öteki bırakılsaydı,
      //    kusur "düzeldi" sanılıp öteki daldan geri dönerdi — bu
      //    dosyada yazılı ders: *bir düzeltme, aynı kusurun BÜTÜN
      //    dallarında aranmalı.*
      var _kirptiNY = false;
      try { _kirptiNY = oncesiSonrasiKirp(o.gi); } catch (eKirp2) { }
      if (!_kirptiNY) panelSinyali();
      return;
    }
    var di = donemBul(o.gi);
    // 🔴 21 Ağustos — eskiden "ayar-kenarpay" okunuyordu, ama o id BAŞKA bir
    // sürgüyle (kenardan-giriş yüzdesi, § odakOfseti) ÇAKIŞIYORDU; ikisi de
    // aynı id'yi taşıdığı için `getElementById` hep İLKİNİ (yüzde olanı)
    // döndürüyor, bu satırın kastettiği "imparatorluk görünümü payı" (px)
    // sürgüsü HİÇ OKUNMUYORDU. Ad ayrıştırıldı (index.html), burada da.
    var kenar = +document.getElementById("ayar-imparatorluk-pay").value;
    if (di >= 0 && donemler[di].b) {
      var b = donemler[di].b;
      // 🔴 23 Ağustos, 0029 eki — İMPARATORLUK GÖRÜNÜMÜ ARTIK UÇUYOR.
      // Emre: *"bu haritaya hem ANİ bir şekilde ÇAT DİYE geçiliyor …
      // bu gösterim çat diye yapılmamalı. TIPKI UÇUŞ ANİMASYONUNDAKİ
      // GİBİ haritada yavaş yavaş sürüklenerek yapılmalı."*
      //
      // KÖK SEBEP BU GECEKİ UÇUŞ KUSURUNUN AYNISIYDI: eski çağrı
      //     fitBounds(..., { padding: kenar, duration: 800 })
      // `duration` taşıyor AMA `essential: true` YOK. `prefers-reduced-
      // motion` açıkken MapLibre animasyonu TAMAMEN ATLAR ve ışınlar.
      // O kusur bu gece UÇUŞ dalında bulunup düzeltilmişti; bu dal
      // ATLANMIŞTI.
      // 📌 Ders: bir düzeltme, aynı kusurun BÜTÜN dallarında aranmalı.
      //    Tek dal düzelince öteki sessizce kalıyor ve daha geç bulunuyor.
      //
      // ⇒ Ayrı bir animasyon YAZILMADI: `cameraForBounds` ile sınır
      //   merkez+zoom'a çevrilip AYNI `flyTo` yolundan geçiriliyor —
      //   aynı süre fonksiyonu, aynı yay, aynı `essential` kapısı.
      //   İki ayrı animasyon yolu olsaydı biri düzelirken öteki
      //   bayatlardı (`§11`: bir bilgi iki yerde durursa ayrışır).
      var _kam = null;
      try {
        _kam = harita.cameraForBounds([[b[0], b[1]], [b[2], b[3]]],
                                      { padding: kenar });
      } catch (e) { _kam = null; }
      if (_kam && _kam.center) {
        var _mc = harita.getCenter();
        var _km = kmArasi(_mc.lat, _mc.lng,
                          _kam.center.lat !== undefined ? _kam.center.lat : _kam.center[1],
                          _kam.center.lng !== undefined ? _kam.center.lng : _kam.center[0]);
        var _sr = ucusSuresiMs(_km);
        harita.flyTo({ center: _kam.center, zoom: _kam.zoom,
                       duration: _sr, curve: ucusYayi(_km), offset: [0, 0],
                       essential: ucusAcik() });
      } else {
        // `cameraForBounds` çözemezse eski yol — ama `essential` ile.
        harita.fitBounds([[b[0], b[1]], [b[2], b[3]]],
                         { padding: kenar, duration: 800,
                           essential: ucusAcik() });
      }
      // 🔴🔴 24 Ağustos 2026 — VARIŞ BU DALDA DA İŞLENİR (0031/H-0006 ·
      // H-0018 · H-0020 ve 0030/H-0005 — DÖRT ŞİKÂYET, TEK KÖK).
      //
      // Emre: *"her madde KENDİ HARİTA GÖSTERİMİ ile beraber teker teker
      // gösterilmesi sağlanmalı … şimdi ÜÇÜ BİRDEN BİTİYOR."*
      //
      // ÖLÇÜLDÜ (yayındaki sitede, Emre'nin adıyla andığı vakada):
      //     165 Devşirme       kapsam_genis · konum YOK → işaret YANMADI
      //     166 Düzmece Mustafa kapsam_genis · konum YOK → işaret YANMADI
      //                                                    kamera DURDU
      //     167 Cüneyd Bey      konum VAR              → işaret YANDI ✓
      // 166'da harita HİÇBİR ŞEY yapmıyordu: noktası olmadığı için işaret
      // yanmıyor, bir önceki madde de aynı imparatorluk görünümünü açtığı
      // için kamera da oynamıyor. Kullanıcı "pas geçildi" diyor — haklı.
      //
      // KÖK SEBEP: `_varista()` bu dalda HİÇ ÇAĞRILMIYORDU. Konumlu dal
      // onu çağırıyor, konumsuz dal 22 Ağustos'ta yazılırken atlanmış.
      // 📌 Ve bu, YUKARIDA YAZILI olan dersin tekrarı: *"bir düzeltme,
      //    aynı kusurun BÜTÜN dallarında aranmalı."* O ders `essential:`
      //    için yazılmıştı; `_varista` için uygulanmamıştı.
      //
      // ⚠️ YALNIZ KIRPMA EKLENDİ, İŞARET EKLENMEDİ — ve bu kasıtlı:
      //    `isaretYanipSon` bir NOKTAYA konur, konumsuz maddenin noktası
      //    YOKTUR. Çerçeve ortasına koymak, olmayan bir yeri işaret etmek
      //    olurdu — yanlış bilgi, bilgisizlikten kötüdür.
      // ⇒ Toprak da değişmiyorsa (bir ayaklanma gibi) harita yine sessiz
      //   kalır. O sessizlik DOĞRUDUR ama kullanıcı onu "atlandı" diye
      //   okuyor; o bir TASARIM sorusu ve Emre'ye soruldu.
      // 🔴 24 Ağustos — Emre'nin hükmü uygulandı (0031 SESSİZ ADIM → "panel").
      // Kırpma ATEŞLERSE harita zaten konuşuyor; ATEŞLEMEZSE bu adım
      // tamamen sessiz kalırdı ve Emre onu "pas geçildi" diye okuyordu.
      var _kirptiIG = false;
      try { _kirptiIG = oncesiSonrasiKirp(o.gi); } catch (eKirp) { }
      if (obYerYokEl) obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri yok — imparatorluk görünümüne geçildi.";
      if (!_kirptiIG) panelSinyali();
    } else if (obYerYokEl) {
      obYerYokEl.textContent = "📍 Bu olayın haritada yeri işaretlenmemiş.";
    }
    panelCarp();                        // konumsuz da olsa ADIM ATILDI
    return;
  }
  if (obYerYokEl) obYerYokEl.textContent = "";
  var konumAnahtari = hedef.lat.toFixed(3) + "," + hedef.lon.toFixed(3);
  // 🔴🔴 ÜÇÜNCÜ SESSİZ DAL — 24 Ağustos 2026'da bulundu (0032/H-0004).
  // Emre: *"ARZİLA … maddesinde YUVARLAK SİMGE YANIP SÖNEN YANMIYOR.
  // kullanıcının olay mahalini …"*
  // Bu satır "zaten oradayız" deyip dönüyordu — ama `_varista()`
  // ÇAĞIRMADAN. Arka arkaya AYNI YERDE geçen iki maddede ikincisinde ne
  // işaret yanıyordu, ne kırpma oluyordu, ne panel çarpıyordu.
  // 📌 Aynı kökün ÜÇÜNCÜ dalı: ① konumsuz dal ② imparatorluk dalı
  //    ③ burası. Dersin kendisi zaten yazılıydı — *"bir düzeltme, aynı
  //    kusurun BÜTÜN dallarında aranmalı"* — ve iki kez uygulanıp
  //    üçüncüde yine atlanmıştı. Bu sefer dallar SAYILDI.
  // ⚠️ Kamera yine oynamıyor (doğrusu bu — zaten oradayız); değişen tek
  //    şey, varışın İŞLENMESİ.
  if (konumAnahtari === sonUcusKonumAnahtari) { _varista(); return; }
  sonUcusKonumAnahtari = konumAnahtari;

  var simdi = performance.now();
  var hizliGecis = (simdi - sonUcusZamani) < UCUS_HIZLI_ESIK_MS;
  sonUcusZamani = simdi;

  // ═══ ODAKLAMA MOTORU — Emre'nin 20 Ağustos tarifi ═══════════════════════
  // Dört ayar, dördü de İNSAN BİRİMİNDE. Eskisi MapLibre'nin soyut
  // sayılarını (curve 1.42 · speed 1.2 · zoom 5.5) doğrudan kullanıcıya
  // gösteriyordu; Emre `p0019/H-0059`da *"uçuş ayarları hiç etki etmiyor
  // görünüyor"* dedi ve ölçüldü: ayarlar UYGULANIYORDU, ama etkileri
  // OKUNAMIYORDU. Kusur mekanizmada değil BİRİMDEYDİ.
  //   ① ayar-genislik-km   ekranda sağdan sola kaç km görünsün
  //   ② ayar-yerlesim      orta | kenar
  //   ③ ayar-hiz-kms + taban/tavan   süre = sınırla(mesafe/hız, taban, tavan)
  //   ④ ayar-hareket       egik (flyTo, yay) | yatay (easeTo, düz)
  var _kap = _haritaKutu();
  var yakinlik = kmDanZoom(gorusGenisligiKm(hedef.lat),
                           hedef.lat, _kap.width);
  var _kmMesafe = kmArasi(harita.getCenter().lat, harita.getCenter().lng,
                          hedef.lat, hedef.lon);
  var _sureMs = ucusSuresiMs(_kmMesafe);
  var ofset = odakOfseti(hedef, _kap);

  // 🔴 S2 — Emre'nin hükmü, birebir: *"Eğer ekran içinde ise ve uzaktan
  // bakma ayarı belli ise bir şey yapmasına gerek yok, sadece ilgili
  // animasyon … sembol işaret yanma sönme hareketi yapsın, İKİ KEZ YETER."*
  // ⚠️ İKİ ŞART BİRDEN: hedef görünüyor OLACAK **ve** yakınlık zaten
  // istenen ölçekte olacak. Yalnız birincisine bakmak yanlış olurdu —
  // hedef ekranda olabilir ama kıta ölçeğinden bakıyor olabiliriz; o zaman
  // "bir şey yapma" demek kullanıcıyı 6.000 km yükseklikte bırakırdı.
  // 📌 Ve bu, boşuna uçuşu da önlüyor: art arda aynı bölgedeki maddelerde
  // harita titremiyor.
  // 🔴 Eşik 0,6 → 0,25. Ölçüldü ki bu değişikliğin S2 sayısına etkisi
  // neredeyse SIFIR (200 olayda 120 → 121) — çünkü kamera bir kez uçunca
  // zoom tam `yakinlik`a oturur. Yani bu bir "daha çok uçsun" ayarı DEĞİL;
  // tek işi AÇILIŞ HÂLİNİ düzeltmek: harita z5,5'te başlıyor, kullanıcının
  // 1500 km ayarı z~6,04 istiyor ve 0,53'lük fark 0,6'nın altında kaldığı
  // için kamera o ölçeğe HİÇ YAKINSAMIYORDU. Bedeli 1 fazladan uçuş,
  // kazancı ayarın gerçekten uygulanması.
  // 🔴 22 Ağustos — VARIŞ ANI TEK KAPIDAN GEÇİYOR.
  // Emre: *"olay mahaline gelince VE DURUNCA … öncesi sonrası göz kırpar
  // gibi iki kez."* "Durunca" şartı üç ayrı dalda ayrı ayrı doğuyordu
  // (ekrandaysa hemen · `ani` kipinde jumpTo'dan sonra · uçuşta `moveend`);
  // üçünü ayrı ayrı çağırmak, birini unutmanın kesin yoluydu.
  // 📌 `KAMERA` hakemi kamerayı tek kapıya toplamıştı; bu da VARIŞI topluyor.
  function _varista() {
    isaretYanipSon(hedef);              // NEREDE olduğunu söyler
    oncesiSonrasiKirp(o.gi);            // NE OLDUĞUNU söyler
    panelCarp();                        // ADIM ATILDIĞINI söyler
  }

  if (_ekrandaMi(hedef, _kap) &&
      Math.abs(harita.getZoom() - yakinlik) < 0.25) {
    _varista();                         // kamera oynamıyor ⇒ varış ZATEN oldu
    return;
  }

  if (ucusKipEl.value === "ani") {
    // KİP A — tak diye, animasyonsuz. Kullanıcı BİLE BİLE seçtiyse meşru.
    // 🔴 22 Ağustos — `|| hizliGecis` ŞARTI KALDIRILDI. Eskiden art arda
    // <500 ms'lik geçişlerde uçuş kipindeyken de `jumpTo`ya düşülüyordu ve
    // Emre'nin ①. kabul ölçütü tam olarak bunu yasaklıyor: *"kamera hiçbir
    // zaman ışınlanmaz."* Gerekçe de zaten çürüktü — yorumun kendisi (aşağıda,
    // KİP B) `flyTo`nun önceki animasyonu KESTİĞİNİ, kuyruk OLUŞMADIĞINI
    // yazıyor. Yani "yarım kalmış uçuşların titremesi" diye bir şey yok:
    // MapLibre yeni çağrıyı DEVRALIYOR. Sıçratmaya gerek YOKTU.
    // 📌 `hizliGecis` ölü bir değişken değil — aşağıda SÜREYİ KISALTMAKTA
    //    kullanılıyor: hızlı ⏭'de uçuş kısalır ama YİNE DE UÇAR.
    harita.jumpTo({ center: [hedef.lon, hedef.lat], zoom: yakinlik, offset: ofset });
    _varista();                         // ani kipte varış ANINDA
  } else {
    // KİP B — uçuş. ⚠️ `flyTo` kendi içinde ÖNCEKİ animasyonu KESER
    // (MapLibre/Mapbox GL'nin belgelenmiş davranışı: yeni bir kamera
    // çağrısı öncekini kuyruğa almaz, DEVRALIR) — ⏭ üst üste basılırsa
    // önceki uçuş yarıda kesilip yenisi başlar, kuyruk OLUŞMAZ. Bu
    // oturumda harita render olmadığı için GÖZLE doğrulanamadı, ilk
    // gerçek kullanımda `⑥` sınaması yapılmalı.
    // ④ HAREKET BİÇİMİ — Emre: *"yatay hareket seçilir ise … harita zoomunu
    // değiştirmeden … eğik atışta ise harita önce zoom out olup belli bir
    // hızla yer değiştirecek ve sonra zoom in ile inecek."*
    // MapLibre ikisini de yerlisinde veriyor ve BAŞKA eğri kullanıyorlar:
    //   flyTo   van Wijk & Nuij parabolü — önce uzaklaşır, sonra yaklaşır
    //   easeTo  düz interpolasyon — yay YOK
    // ⚠️ Uzun mesafede `easeTo` haritayı ŞERİT gibi akıtır; `flyTo` zaten
    // bu yüzden icat edilmiş. O yüzden bir EŞİK var: eşiğin üstünde yatay
    // seçilse bile eğik atışa düşülür. Eşik AYARDA, yani Emre'nin seçimini
    // ezmiyor — sınırını kendisi koyuyor.
    var _kip = _ayarMetin("ayar-hareket", "egik");
    var _esik = +_ayar("ayar-yatay-esik", 1200);
    // 🔴 Hızlı ⏭'de artık SIÇRAMIYORUZ, KISALTIYORUZ. Eskiden bu durum
    // `jumpTo`ya düşüyordu (ışınlanma); şimdi uçuş sürüyor ama süresi
    // yarıya iniyor — hareket SÜREKLİ kalıyor, sabırsız kullanıcı da
    // beklemiyor. Alt sınır 220 ms: bunun altı göz için sıçramadan
    // ayırt edilemez hâle geliyor (ölçülmedi — gözle ayarlanmalı).
    var _sonSure = hizliGecis ? Math.max(220, _sureMs * 0.5) : _sureMs;
    // 🔴🔴🔴 22 Ağustos 2026 — `essential: true` VE UÇUŞUN HİÇ ÇALIŞMAMASININ
    // GERÇEK SEBEBİ BUYDU.
    //
    // Emre üç kez *"uçuş modu çalışmıyor, şak şak ani geçiş yapıyor"* dedi.
    // İki gerçek kusur bulunup düzeltildi (kamera kilidinin süresi · kırpmanın
    // panel titretmesi) ve İKİSİ DE İŞE YARAMADI. Ölçüm:
    //
    //     window.matchMedia("(prefers-reduced-motion: reduce)").matches → TRUE
    //
    // MapLibre GL'in BELGELENMİŞ davranışı: işletim sisteminde "hareketi
    // azalt" açıksa `flyTo`/`easeTo`/`panTo` animasyonu TAMAMEN ATLAR ve
    // anında sıçrar — TEK İSTİSNA `options.essential === true`.
    // ⇒ Kod doğruydu, ayarlar doğruydu, kilit doğruydu. **Kütüphane
    //   animasyonu SESSİZCE iptal ediyordu.** "Uçuş" ile "ani" kipinin aynı
    //   görünmesinin sebebi buydu.
    //
    // 📌 VE BU, BU PROJENİN EN PAHALI DERS AİLESİNİN YENİ BİR ÜYESİ:
    // *"denetim var ≠ o soruyu soruyor"* değil, *"kod doğru ≠ ÇALIŞIYOR"*.
    // Üç tur boyunca KENDİ kodumuzda hata aradık; hata KODUN DIŞINDAYDI —
    // tarayıcının/işletim sisteminin bir tercihinde. Ve o tercih hiçbir
    // hata, uyarı ya da log üretmiyor: sessizce davranış değiştiriyor.
    //
    // ⚠️ ETİK NOT — bu bir ERİŞİLEBİLİRLİK tercihini EZİYOR, o yüzden
    // KOŞULLU: yalnız kullanıcı 🛩 anahtarını AÇTIYSA. Uçuş bu uygulamanın
    // dekoru değil ÖZELLİĞİ ve kullanıcı onu arayüzden bilerek seçiyor —
    // yani bizim anahtarımız, bu özellik için kullanıcının hareket
    // tercihidir. Anahtar kapalıysa `essential` verilmiyor ve sistem
    // tercihi aynen geçerli.
    // 🔴 23 Ağustos 2026 — OFSET UÇUŞ ÖNCESİ ÇÖZÜLÜYOR.
    // Emre: *"uzun uçuşlar sırasında sistem önce havalanıyor sonra
    // nereye gideceğini şaşırıp tereddüt ediyor, bir sağa bir sola
    // hareket edip ondan sonra doğru yolunu buluyor."*
    //
    // YÖRÜNGE KARE KARE ÖLÇÜLDÜ (Macaristan 1526 → Demak 1527,
    // 10.880 km — atlasın en uzun ikinci uçuşu):
    //     1561 ms  lon 19,10  z2,50   HEDEFE VARDI (hedef 19,04)
    //     1777 ms  lon 26,70  z3,06   🔴 7,6° GERİ savruldu
    //     2728 ms  lon 19,12  z5,83   geri dönüyor
    //     boylam YÖN DEĞİŞİMİ: 2
    //
    // KÖK SEBEP: `offset` bir PİKSEL değeridir ve zoom değiştikçe
    // bambaşka bir coğrafî mesafeye karşılık gelir:
    //     z2,50 (uçuşun tepesi)   421 px  =  52°
    //     z6,41 (varış)           421 px  =  3,5°
    // ⇒ Ofset, uçuşun içine 48°'lik bir SALINIM gömüyordu.
    //
    // ÖLÇÜLEREK DOĞRULANDI — aynı uçuş iki kez koşuldu:
    //     ofsetli   yön değişimi 1 · geri savrulma 69,4°
    //     ofsetsiz  yön değişimi 0 · geri savrulma  0
    //
    // ⇒ Ofset KALDIRILMIYOR — VARIŞ ZOOM'unda coğrafî karşılığı
    //   hesaplanıp MERKEZE katılıyor, uçuş `offset:[0,0]` ile
    //   yapılıyor. Varışta ekran konumu AYNI, yol boyunca salınım YOK.
    // ⚠️ Formül canlı sınandı ve BİREBİR tuttu (aynı merkez, aynı
    //   piksel); ters işaret de denendi ve tutmadı — işaret ölçülerek
    //   seçildi, tahminle değil.
    var _merkez = _ofsetiMerkezeKat(hedef.lon, hedef.lat, yakinlik, ofset);
    var _ortak = { center: _merkez, zoom: yakinlik,
                   offset: [0, 0], duration: _sonSure,
                   essential: ucusAcik() };
    // 🔴 VARIŞI BEKLE — `moveend`, süre tahmini DEĞİL.
    // `flyTo`/`easeTo` kesilebilir (⏭ üst üste basılırsa MapLibre yeni
    // çağrıyı DEVRALIR), o yüzden "duration kadar bekle" YANLIŞ olurdu:
    // kesilen uçuşun kırpması, yeni uçuş sürerken ateşlerdi.
    // ⚠️ Ama `once("moveend")` tek başına da yetmez — uçuş hiç başlamazsa
    // (harita gizli sekmede, rAF donmuş) olay HİÇ gelmez ve kırpma sonsuza
    // kadar beklerdi. O yüzden emniyet zamanlayıcısı var ve İKİSİNDEN
    // hangisi önce gelirse ÖTEKİNİ İPTAL EDİYOR.
    var _vardi = false;
    var _varisTimer = null;
    // 🔴 KİLİT BURADA ALINIYOR — uçuş SÜRERKEN oto-zoom kameraya dokunamasın.
    // Eski kod kilidi `olayaGit` içinde, uçuş BAŞLAMADAN bir satır önce
    // bırakıyordu; uçuşun 0,8-3 saniyesi korumasızdı ve `zoomUygula`nın
    // `fitBounds`u uçuşu kesip ışınlanmaya çeviriyordu.
    kameraKilitle();
    // 🔴 DOM İŞARETLERİ UÇUŞ BOYUNCA GİZLİ — gerekçe ve ölçüm
    // `css/style.css` `.harita-ucusta` kuralının başında.
    // Tek sınıf değişimi: ~500 işaretin her biri için ayrı iş YAPILMIYOR.
    var _hkap = harita.getContainer();
    if (_hkap) _hkap.classList.add("harita-ucusta");
    // Kare sayacı uçuşla BİRLİKTE başlar, varışta biter. Ölçtüğü şey
    // TAM OLARAK uçuş süresi — öncesi ve sonrası değil.
    var _kareBitir = kareSayaciBaslat(_sonSure,
                       (_kip === "yatay" && _kmMesafe <= _esik) ? "yatay" : "eğik");
    function _varisBirKez() {
      if (_vardi) return;
      _vardi = true;
      if (_varisTimer) { clearTimeout(_varisTimer); _varisTimer = null; }
      harita.off("moveend", _varisBirKez);
      _kareBitir();                      // ÖNCE ölç — kırpma sayıya karışmasın
      // ⚠️ İşaretler ÖLÇÜMDEN SONRA geri geliyor: geri getirme işi (stil
      // yeniden hesabı) uçuşun kare sayısına karışmasın. Ve `_varista`dan
      // ÖNCE — kırpma sırasında işaretler görünür olmalı.
      if (_hkap) _hkap.classList.remove("harita-ucusta");
      kameraCoz();                       // uçuş bitti — koruma kalkıyor
      // SIRA ONEMLI: kameraCoz()tan SONRA. etiketTazele kilidi okuyor;
      // once cagrilsaydi borcu YENIDEN yazar ve hic odenmezdi.
      if (window.__etiketBorcuOde) window.__etiketBorcuOde();
      _varista();                        // kırpma kendi kilidini ALIYOR
    }
    harita.once("moveend", _varisBirKez);
    // ⚠️ Emniyet: uçuş hiç başlamazsa (harita gizli sekmede, rAF donmuş)
    // `moveend` HİÇ gelmez ve kilit sonsuza kadar açık kalırdı.
    //
    // 🔴 23 Ağustos — AMA EMNİYET AĞI KORUDUĞU ŞEYDEN ÖNCE ÖTÜYORDU.
    // Emre: *"uzun uçuşlar sırasında harita oraya gelene kadar göz kırpma
    // bitmiş oluyor ve kullanıcı bunu göremiyor."*
    // CANLI ÖLÇÜLDÜ:
    //     33358 ms  movestart
    //     35357 ms  KIRPMA BAŞLADI   ← uçuş HÂLÂ sürüyor
    //     37504 ms  moveend          ← harita 2147 ms SONRA varıyor
    // `_sonSure` 1600'dü, gerçek uçuş 4146 ms sürdü; zamanlayıcı 2000
    // ms'de ateşleyip VARIŞI ÇALDI. Tasarım doğruydu (kırpma `_varista`
    // içinde, tek kapıda) — erken açan şey bu zamanlayıcıydı.
    //
    // ⇒ Zamanlayıcı artık SÜREYE değil GERÇEK HAREKETE bakıyor:
    //   `isMoving()` hâlâ true ise uçuş sürüyordur, bekle ve yeniden
    //   yokla. Yalnız hareket DURDUYSA varış sayılır.
    // 📌 `CLAUDE.md §10`: *"bekçi her zaman GERÇEKLEŞMİŞ bir olaya
    //    bağlanır — geçen süreye, tahmine ya da bir oturumun 'bitiyorum'
    //    demesine değil."* O ders 9-bip bekçisi için yazılmıştı; aynı
    //    kusur burada da varmış.
    // ⚠️ SERT TAVAN 15 sn: `isMoving()` bir şekilde hiç false olmazsa
    //    (donmuş sekme) kilit sonsuza kadar kalmasın.
    var _varisBasi = performance.now();
    (function _varisYokla() {
      _varisTimer = setTimeout(function () {
        if (_vardi) return;
        var _hareketli = false;
        try { _hareketli = harita.isMoving(); } catch (e) { _hareketli = false; }
        if (_hareketli && (performance.now() - _varisBasi) < 15000) {
          _varisYokla();                 // hâlâ uçuyor — varış DEĞİL
          return;
        }
        _varisBirKez();
      }, _sonSure + 400);
    })();

    // 🔴 TEŞHİS SATIRI — bir sonraki "çalışmıyor" raporunu İZLENİM değil
    // ÖLÇÜM yapsın diye. Üç tur boyunca hangi dalın koştuğunu bilmeden
    // tahmin yürüttük; bu satır o tahmini gereksiz kılıyor.
    if (window.__UCUS_TESHIS !== false) {
      // ⚠️ Yer tutucu KULLANILMIYOR — bkz. `kareSayaciBaslat` içindeki not:
      // bazı konsol okuyucuları `%s`/`%d`yi değiştirmeden basıyor.
      // 🔴 Ve `%.0f` JavaScript'te ZATEN ÇALIŞMAZ (o C/Python biçimi) —
      // ilk yazımda onu kullanmışım, satır her konsolda bozuk çıkacaktı.
      console.log("🛩 uçuş: "
                  + ((_kip === "yatay" && _kmMesafe <= _esik) ? "easeTo(yatay)"
                                                             : "flyTo(eğik)")
                  + " · " + Math.round(_kmMesafe) + " km"
                  + " · " + Math.round(_sonSure) + " ms"
                  + " · zoom→" + yakinlik.toFixed(2)
                  + " · ofset[" + Math.round(ofset[0]) + "," + Math.round(ofset[1]) + "]"
                  + " · reduce-motion:"
                  + (window.matchMedia("(prefers-reduced-motion: reduce)").matches
                     ? "AÇIK" : "kapalı")
                  + " · essential:" + _ortak.essential);
    }

    if (_kip === "yatay" && _kmMesafe <= _esik) {
      harita.easeTo(_ortak);
    } else {
      // `curve` yayın tepe yüksekliği. `speed` VERİLMİYOR: `duration` ile
      // birlikte verilirse MapLibre `speed`i yok sayar ve ikisi çelişir —
      // süreyi biz hesapladığımız için (③) `duration` esastır.
      _ortak.curve = ucusYayi(_kmMesafe);
      harita.flyTo(_ortak);
    }
  }
}

// 🔴 OFSETİ MERKEZE KATAN DÖNÜŞÜM — uçuş salınımının çaresi.
// Bir piksel ofseti, VERİLEN ZOOM'daki coğrafî karşılığına çevirip
// hedefin merkezini kaydırır. Böylece `flyTo`ya ofset verilmez ve
// zoom değişirken ofsetin coğrafî büyüklüğü DEĞİŞMEZ.
//
// Web Mercator: dünya genişliği = 512 · 2^zoom piksel.
// Enlem için ters Gudermann (Mercator y → enlem) gerekiyor; boylam
// doğrusal olduğu için orada basit oran yetiyor.
//
// ⚠️ İŞARET ÖLÇÜLEREK SEÇİLDİ. MapLibre'de `offset`, HEDEFİN merkeze
//    göre piksel konumudur; merkez o yüzden TERS yöne kayar (eksi).
//    Artı işareti canlı denendi: hedef ekranda [1022,553]'e düştü,
//    eksi işareti [180,98] verdi ve `easeTo({offset})` ile BİREBİR
//    aynıydı — üç ondalık ve piksel hassasiyetinde.
function _ofsetiMerkezeKat(lon, lat, zoom, ofset) {
  if (!ofset || (!ofset[0] && !ofset[1])) return [lon, lat];
  var olcek = 512 * Math.pow(2, zoom);
  var x = (lon + 180) / 360;
  var s = Math.sin(lat * Math.PI / 180);
  var y = 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI);
  x -= ofset[0] / olcek;
  y -= ofset[1] / olcek;
  var n = Math.PI * (1 - 2 * y);
  return [x * 360 - 180,
          180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))];
}

// ── Odaklama yardımcıları ───────────────────────────────────────────────
// Ayrı tutuldular çünkü ÖLÇÜLEBİLİR olmaları gerekiyor: harita çizilmeden
// (bazı geliştirme panolarında pano 0×0 kaldığı için rAF hiç ateşlemiyor
//  ve MapLibre render döngüsü dönmüyor — WebGL'in kendisi ÇALIŞIYOR;
//  eski not "WebGL başlamıyor" diyordu ve ölçümle çürüdü) sayıları
// doğrulayabilmek için
// saf fonksiyon olmalılar. `odakla()` bunları çağırır, kendi matematiğini
// içinde saklamaz.
function _ayar(id, varsayilan) {
  var e = document.getElementById(id);
  return e && e.value !== "" ? +e.value : varsayilan;
}

// 🔴 HARİTA KUTUSU — `getBoundingClientRect()` DOĞRUDAN KULLANILMAZ.
// 20 Ağustos 2026'da ölçüldü: sayfa kompozit edilmeyen bir ortamda
// (görünmeyen sekme, arka planda pencere, başsız tarayıcı) bu çağrı
// **{width: 0, height: 0}** döndürüyor. Sessiz bir sonuç, ve iki dalı
// birden çürütüyordu:
//     _ekrandaMi   `p.x <= 0` şartı ⇒ HER ZAMAN false ⇒ S2 hiç ateşlemez
//     odakOfseti   yarımX = 0 ⇒ t = 0 ⇒ ofset HEP [0,0] ⇒ kenar kipi ölü
// ⚠️ Ve ikisi de HATA VERMİYORDU — "çalışıyor ama yanlış" sınıfı, yani
// `CLAUDE.md §11`in en zor bulunan cinsi. Kusuru gösteren şey çıktı değil,
// kabın kendisini ÖLÇMEK oldu.
// ⇒ Üç kademeli düşüş: gerçek kutu → offsetWidth → tuval → makul varsayılan.
function _haritaKutu() {
  var c = harita.getContainer();
  var r = c.getBoundingClientRect();
  if (r.width > 1 && r.height > 1) return r;
  var w = c.offsetWidth, h = c.offsetHeight;
  if (!(w > 1 && h > 1)) {
    try { var t = harita.getCanvas(); w = t.width; h = t.height; } catch (e) { /* yok */ }
  }
  return { width: (w > 1 ? w : 900), height: (h > 1 ? h : 620) };
}
function _ayarMetin(id, varsayilan) {
  var e = document.getElementById(id);
  return e && e.value ? e.value : varsayilan;
}

// ① EKRAN GENİŞLİĞİ → ZOOM.  Emre: *"ekranda sağ kenardan sol kenara kaç
// kilometrelik alan sığsın, bu sorunun cevabını veren bir ayar olsun."*
// MapLibre/Mercator'da  metre/piksel = 156543,03392 · cos(enlem) / 2^zoom
// ⇒ 2^zoom = 156543,03392 · cos(enlem) · genişlikPx / (km · 1000)
// 🔴 ENLEM ŞART: Mercator'da ölçek enlemle değişir. Aynı zoom Ekvator'da
// 2 kat geniş, 60°'de yarı geniş görünür. Enlemi hesaba katmayan bir
// "km ayarı" kullanıcıya yalan söyler — Kırım'da 1500 km diyip Yemen'de
// 3000 km gösterir. (Emre S1'de "orta enlem" dedi; hedefin enlemi alınıyor,
// çünkü kamera oraya gidiyor.)
function kmDanZoom(km, enlem, genislikPx) {
  km = Math.max(5, km || 1500);
  genislikPx = Math.max(200, genislikPx || 800);
  var mpp = (km * 1000) / genislikPx;                    // metre/piksel
  // 🔴🔴 24 Ağustos 2026 — SABİT İKİYE BÖLÜNDÜ, ve bu bir ÖLÇÜMLE bulundu.
  // 156543,03392 ekvatorda **256 piksellik** bir fayansın metre/pikselidir.
  // MapLibre **512 piksellik** fayans kullanır ⇒ aynı zoomda çözünürlük
  // yarısı kadardır. Bölünmemiş sabit, her çağrıda TAM BİR KADEME fazla
  // yakınlık döndürüyordu: istenen genişliğin YARISI gösteriliyordu.
  //
  // Ölçüm (Amasya, 1393-06-01):
  //     istenen  1919 km   ·   gerçek  846 km   ·   oran 1,97 ≈ 2,0
  //
  // ⚠️ Ve zararı bir sürgüden ibaret değildi: `gorusGenisligiKm` odak
  // devletin genişliğini **1,35 ile çarpıp** onu çerçeveye sığdırmayı
  // amaçlıyor. Yarıya inince 1,35 kat istek 0,675 kata dönüşüyordu —
  // yani devleti SIĞDIRMASI gereken çarpan, onu KESMEYİ garanti
  // ediyordu. Emre'nin *"Osmanlı topraklarının genelini harita dışında
  // tutarak"* şikâyetinin ikinci yarısı buydu.
  // 📌 `ayar-genislik-km` varsayılanı da 1500 → 750 yapıldı ve kayıtlı
  //   tercih bir kez yarıya indirildi; "sabit" kipinde ekran BİREBİR
  //   aynı kalsın diye. Kusura göre ayarlanmış tercih de taşınmazsa
  //   düzeltme, kullanıcı için bozulma gibi görünür.
  var z = Math.log(78271.51696 * Math.cos(enlem * Math.PI / 180) / mpp)
          / Math.LN2;
  return Math.max(0.5, Math.min(18, z));                 // MapLibre sınırı
}

// Büyük daire mesafesi (km) — süre hesabı ve eşik için.
function kmArasi(la1, lo1, la2, lo2) {
  var R = 6371, r = Math.PI / 180;
  var dLa = (la2 - la1) * r, dLo = (lo2 - lo1) * r;
  var a = Math.sin(dLa / 2) * Math.sin(dLa / 2) +
          Math.cos(la1 * r) * Math.cos(la2 * r) *
          Math.sin(dLo / 2) * Math.sin(dLo / 2);
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(a)));
}

// ③ SÜRE.  Emre'nin kendi gördüğü gerilim: *"Bursa'dan İstanbul'a mevzu
// bahis olduğunda bu çok yavaş olacaktır."* Ölçüldü:
//     sabit 1000 km/sn → Yemen-Kamaniçe 3,00 sn ✓ · Bursa-İstanbul 0,09 sn ✗
//     sabit 2 sn       → ikisi de 2 sn ✓ ama "hız" kelimesi anlamsız
// ⇒ HIZ TABANLI + SÜRE TABANI/TAVANI. Mesafe hissediliyor ama hiçbir uçuş
// ne göz kırpması ne eziyet oluyor.
// 🔴 0029/H-0006 — GÖRÜŞ GENİŞLİĞİ, ODAK DEVLETİN GENİŞLİĞİYLE KORELE.
// Emre: *"devlet küçük iken 1000 km, büyüdükçe 2000 3000 5000 km gibi
// artan bir şekilde ... hem kuzey güney hem doğu batı eksenindeki
// genişliğine korele ... fakat eğer kullanıcı isterse SABİT yapabilmeli."*
//
// ÖLÇÜ **BÜYÜK OLAN KENAR**, ortalama DEĞİL. Emre'nin kendi örnekleri
// bunu gerektiriyor: Şili ve İsveç kuzey-güney, Rusya doğu-batı uzar.
// Ortalama alsaydık ikisini de yanlış çerçevelerdik — uzun ülkeyi
// kırpar, geniş ülkeyi boşlukta bırakırdık.
//
// SLIDER ARTIK TABAN: kullanıcının seçtiği km, görüşün ALT SINIRI.
// Devlet ondan büyükse görüş devletle birlikte açılır; küçükse
// kullanıcının seçimi korunur. Böylece "kişi kaç km olacağına karar
// verdikten sonra" cümlesi de, "artıp azalmalı" cümlesi de sağlanıyor.
//
// PAY 1,35: devletin kendisi ekranı tam doldurmasın, çevresi de görünsün.
// Emre: *"o devleti seyretmek ister iken etrafındaki devletlerde neler
// oluyor buna da bakmak istiyor olabilir."*
// 🔴 0029/H-0001 + H-0005 — OTO-ODAK TEK KAPIDAN.
// Ayar (`ayar-oto-odak`) ve haritadaki düğme (`btn-zoom`) AYNI
// `otoZoom` değişkenini sürüyor. İkisini ayrı tutmak, `§11`in
// "bir bilgi iki yerde durursa biri güncellenince öteki bayatlar"
// kusurunu davet ederdi — bu projede o kusur ölçülmüş bir vakadır.
function _otoOdakUygula(acik) {
  otoZoom = !!acik;
  var d = document.getElementById("btn-zoom");
  if (d) d.classList.toggle("pasif", !otoZoom);
  var a = document.getElementById("ayar-oto-odak");
  if (a && (a.value === "acik") !== otoZoom) a.value = otoZoom ? "acik" : "kapali";
}

function gorusGenisligiKm(lat) {
  var taban = +_ayar("ayar-genislik-km", 1500);
  if (_ayarMetin("ayar-genislik-kip", "korele") !== "korele") return taban;
  var d = (typeof aktifDonem !== "undefined" && aktifDonem >= 0
           && typeof donemler !== "undefined" && donemler[aktifDonem])
          ? donemler[aktifDonem] : null;
  if (!d || !d.b) return taban;
  var ortLat = (d.b[1] + d.b[3]) / 2;
  var enKm  = (d.b[2] - d.b[0]) * 111.32 * Math.cos(ortLat * Math.PI / 180);
  var boyKm = (d.b[3] - d.b[1]) * 110.57;
  var buyuk = Math.max(Math.abs(enKm), Math.abs(boyKm));
  if (!isFinite(buyuk) || buyuk <= 0) return taban;
  // Boy ekseni baskınsa ekranın DAR kenarı sınırlar; genişliğe çevirirken
  // en-boy oranı hesaba katılıyor, yoksa uzun ülke ekrana sığmaz.
  var kap = document.getElementById("harita");
  var oran = (kap && kap.clientHeight) ? (kap.clientWidth / kap.clientHeight) : 1.6;
  if (Math.abs(boyKm) > Math.abs(enKm)) buyuk = Math.abs(boyKm) * oran;
  return Math.max(taban, Math.min(8000, buyuk * 1.35));
}

function ucusSuresiMs(kmMesafe) {
  var hiz   = Math.max(50, _ayar("ayar-hiz-kms", 1500));   // km/sn
  var taban = _ayar("ayar-sure-taban", 0.8);
  var tavan = Math.max(taban, _ayar("ayar-sure-tavan", 3.0));
  var ham   = kmMesafe / hiz;                     // "doğal" süre
  // 🔴 23 Ağustos — TAVAN ARTIK SERT DEĞİL, YUMUŞAK.
  // Emre: uzun uçuşlarda *"nereye gideceğini şaşırıp tereddüt ediyor"*.
  // ÖLÇÜLDÜ (Macaristan → Demak, 10.880 km — atlasın 2. en uzun uçuşu):
  //     1500 km/sn hızda gereken süre  7,25 sn
  //     sert tavan                     3,00 sn
  //     ⇒ 2,4 KAT sıkıştırma
  // Üstüne `ucusYayi(10.880)` = 1,81 (neredeyse âzamî yay). Yüksek yay
  // + sıkıştırılmış süre = sert, sıçrayan hareket.
  // ⇒ Tavanı aşan mesafelerde süre LOGARİTMİK açılıyor; mutlak tavan
  //   7 sn. Günlük uçuşlar DEĞİŞMİYOR — yalnız dev atlamalar uzuyor:
  //       2.000 km → 1,33 sn (tavanın altında, aynen)
  //       5.000 km → 3,21 sn
  //      10.880 km → 4,78 sn
  var sure = Math.min(tavan, ham);
  if (ham > tavan) sure = Math.min(7, tavan + Math.log(ham / tavan) / Math.LN2 * 1.4);
  return Math.max(taban, sure) * 1000;
}

// ④ YAY YÜKSEKLİĞİ — MESAFEYLE ORANTILI.  Emre: *"eğik atışta yay yüksekliği
// mesafeyle orantılı olmalı; 100 km'lik geçişte kıtaya çıkmak saçma."*
//
// 🔴 Eskiden `curve` SABİTTİ (`ayar-irtifa`, 1.42) ve mesafeyi HİÇ görmüyordu:
// Bursa→İznik (60 km) ile Yemen→Kamaniçe (3.900 km) AYNI yayla uçuluyordu.
// van Wijk & Nuij'de `curve` yayın tepe yüksekliğini belirler — büyüdükçe
// kamera daha çok yükselip daha çok alçalır.
//
// ⚠️ `ayar-irtifa` sürgüsü ÖLDÜRÜLMEDİ, ANLAMI DEĞİŞTİ: artık mutlak bir yay
// değil, bir ÇARPAN/merkez. Kullanıcının seçtiği değer "orta mesafedeki yay"
// olarak korunuyor, kısa/uzun mesafede onun etrafında yumuşakça geziniyor.
// Bir kontrolü sessizce yok saymak yerine kapsamını daraltmak — bu projenin
// `ayar-hiz` vakasında öğrendiği ders (ölü sürgüyü "çalışıyormuş gibi"
// etiketlemek yanıltıcıydı).
//
// Ölçek — ⚠️ bu tablo TARAYICIDA ÖLÇÜLDÜ, elle hesaplanmadı
// (ayar-irtifa = 1.42 varsayılanıyla):
//     30 km   → 1,02      taban; kamera neredeyse hiç yükselmez
//     50 km   → 1,02
//    100 km   → 1,07
//    250 km   → 1,22
//    800 km   → 1,40      ← eğrinin çapası: burada `merkez` değerini verir
//   1500 km   → 1,50
//   3000 km   → 1,61
//   8000 km   → 1,77
// 📌 İlk yazımda bu tabloyu ELLE hesaplayıp yazmıştım ve üç satırı YANLIŞTI
// (1000→1,35 · 3000→1,52 diyordu; ölçüm 1,61 dedi). Bu projenin yazılı dersi:
// *"bir bilgi iki yerde duruyorsa biri güncellenince öteki bayatlar"* — burada
// iki yer FORMÜL ile YORUM'du ve daha doğmadan ayrışmışlardı.
// 📌 Eğri logaritmik, çünkü ALGI logaritmik: 50→250 km'lik fark, 3000→8000
// km'lik farktan daha çok hissedilir.
function ucusYayi(kmMesafe) {
  var merkez = +_ayar("ayar-irtifa", 1.42);          // kullanıcının seçtiği orta yay
  var km = Math.max(1, kmMesafe || 1);
  // 800 km'de tam olarak `merkez` verir; iki yana log2 ile açılır.
  var t = Math.log(km / 800) / Math.LN2;             // -4 … +3,3 civarı
  var yay = merkez + t * 0.11;
  return Math.max(1.02, Math.min(1.9, yay));         // MapLibre'de <1 anlamsız
}

// Hedef şu an çerçevenin içinde mi? (S2'nin birinci şartı)
// Kenarlara yapışık olanı "içeride" saymamak için küçük bir iç pay var —
// tam kenardaki bir nokta görünüyor sayılsa kullanıcı onu ARAMAK zorunda
// kalırdı ve "bir şey olmadı" derdi.
// 🔴 22 Ağustos 2026 — PAY ARTIK SABİT 0,08 DEĞİL, KULLANICININ KENDİ AYARI.
//
// Kusur ölçülerek bulundu: düzeltmeden sonra 8 adımlık koşuda uçuş motorundan
// **sıfır** çağrı çıktı. Dallar tek tek sayıldı:
//     konumsuz 5/8   ·   S2 susturdu 3/8   ·   gerçek uçuş 0/8
// Üçünün de `zFark`ı 0,529-0,551 idi — yani 0,6'lık eşiğin **kıl payı**
// altında. Kamera z5,5'te takılı kalıyor, kullanıcının istediği ölçeğe
// (1500 km ⇒ z~6,04) HİÇ YAKINSAMIYORDU.
//
// ⚠️ Ve ilk teşhisim YANLIŞTI: *"zoom eşiği çok gevşek"* dedim. 200 olayda
// beş eşik denendi ve zoom eşiğinin neredeyse HİÇ etkisi olmadığı çıktı —
// çünkü kamera bir kez uçtuktan sonra zoom TAM `yakinlik`a oturuyor, fark
// ~0 oluyor. Etkiyi yapan tek şey KENAR PAYI:
//     zEşik 0,60 · pay %8    S2 120 · uçuş 50     ← bugünkü
//     zEşik 0,25 · pay %8    S2 121 · uçuş 49     ← zoom eşiği: ETKİSİZ
//     zEşik 0,25 · pay %18   S2 106 · uçuş 64     ← seçilen
//     zEşik 0,25 · pay %25   S2  91 · uçuş 79
//
// ⇒ Ve doğru sayı UYDURULMADI, ZATEN VARDI: `ayar-kenarpay` (varsayılan %18)
// kullanıcının *"pencereye hemen karenin ucundan değil, belli bir miktar
// içeriye"* tercihini tutuyor. Bir hedefi EKRANA GETİRİRKEN kullandığımız pay
// ile onu ZATEN GÖRÜNÜYOR SAYARKEN kullandığımız pay **aynı olmak zorunda** —
// yoksa kenara %10 uzaklıkta duran bir nokta "görünüyor" sayılır ama motor
// onu oraya asla koymazdı. İki ayrı sayı = iki ayrı otorite = ayrışırlar.
// 📌 Bu, `§11`in *"bir alan tasarlamadan önce zaten var olup olmadığını ölç"*
// dersinin küçük hâli: yeni bir eşik icat etmek yerine var olanı okuduk.
function _ekrandaMi(hedef, kap) {
  var p;
  try { p = harita.project([hedef.lon, hedef.lat]); } catch (e) { return false; }
  var oran = Math.max(0.02, Math.min(0.45, _ayar("ayar-kenarpay", 18) / 100));
  var payX = kap.width * oran, payY = kap.height * oran;
  return p.x >= payX && p.x <= kap.width - payX &&
         p.y >= payY && p.y <= kap.height - payY;
}

// İşaret yanıp sönmesi — İKİ KEZ (Emre: "iki kez yeter").
// Kamera oynamadığında kullanıcının "bir şey oldu mu" sorusunun cevabı bu.
// ⚠️ Kendi işaretini kuruyor ve söndürüyor: var olan şehir/savaş
// işaretlerini yakıp söndürmek onların kendi yaşam döngüsüne karışırdı
// (`savasGuncelle` çakışma elemesi yapıyor, elenen bir işareti yakmak
// görünmeyen bir şeyi yakmak olurdu).
// 🔴 PANEL ÇARPMASI — Emre'nin hükmü "2-panel" (24 Ağustos 2026).
// Bazı olayların haritada karşılığı YOKTUR: ne noktası vardır, ne o gün
// toprak değiştirir. Harita haklı olarak sessiz kalır ve kullanıcı onu
// *"haritada yaprak kıpırdamıyor"* diye okur. Sinyal HARİTAYA değil
// PANELE konuyor — olmayan bir yeri işaret etmek, hiç işaret etmemekten
// kötüdür.
// ⚠️ `void offsetWidth` ŞART: aynı sınıfı tekrar eklemek animasyonu
//    YENİDEN BAŞLATMAZ; tarayıcı "zaten o sınıf vardı" der ve arka
//    arkaya gelen iki maddede ikincisi sessiz kalırdı — yani düzeltmenin
//    kendisi, düzeltmeye çalıştığı kusuru üretirdi.
function panelCarp() {
  try {
    var el = document.getElementById("olay-bilgi");
    if (!el || el.classList.contains("gizli")) return;
    el.classList.remove("carpti");
    void el.offsetWidth;                       // akışı zorla — bkz. yukarı
    el.classList.add("carpti");
  } catch (e) { /* panel yok — sessiz geç */ }
}

var _yanipSonEl = null, _yanipSonZaman = null;
function isaretYanipSon(hedef) {
  try {
    if (_yanipSonZaman) { clearTimeout(_yanipSonZaman); _yanipSonZaman = null; }
    if (_yanipSonEl) { _yanipSonEl.remove(); _yanipSonEl = null; }
    var el = document.createElement("div");
    el.className = "odak-parlama";
    _yanipSonEl = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat([hedef.lon, hedef.lat]).addTo(harita);
    // CSS animasyonu 2 çevrim (0,55 sn × 2) — süre oradan geliyor, burada
    // TEKRARLANMIYOR ki ikisi ayrışmasın (iki yerde duran sayı bayatlar).
    _yanipSonZaman = setTimeout(function () {
      if (_yanipSonEl) { _yanipSonEl.remove(); _yanipSonEl = null; }
      _yanipSonZaman = null;
    }, 1250);
  } catch (e) { /* harita hazır değil — sessiz geç */ }
}

// ═══════════════════════════════════════════════════════════════════════════
// ÖNCESİ / SONRASI KIRPMASI — Emre, 22 Ağustos 2026, birebir:
//   *"Olay mahaline gelince ve durunca BİR ÖNCESİ SONRASI GÖSTERİM göz
//    kırpar gibi iki kez yanıp sönecek. Yani BİR ÖNCESİ HARİTANIN HÂLİ
//    gösterilecek, sonra SON HÂLİ gösterilecek."*
//
// 🔴 BUGÜNE KADAR YAPILAN ŞEY BU DEĞİLDİ. `isaretYanipSon` bir İŞARET
// (nokta) parlatıyordu — harita hiç değişmiyordu. Emre'nin istediği
// HARİTANIN KENDİ HÂLİ: toprak el değiştirdiyse "işte önce, işte sonra".
// Olayın ANLATAN kısmı bu; nokta parlaması yalnız YERİ gösteriyor.
// 📌 İkisi birbirinin yerine geçmez, ikisi de KALIYOR: işaret NEREDE
//    olduğunu, kırpma NE OLDUĞUNU söyler.
//
// ⚙️ NİÇİN `tarihAyarla` ÜZERİNDEN — ve niçin bu UCUZ:
// `guncelle()` ağır çizimi `di !== aktifDonem` şartının ARKASINDA tutuyor
// (app.js:3577). Yani gün geri alınınca dönem değişmiyorsa HİÇBİR ŞEY
// çizilmiyor. Ayrı bir çizim yolu yazmadım — `CLAUDE.md §11`in
// *"iki otorite doğar ve ayrışır"* dersi: tek kapı `tarihAyarla` kalıyor.
//
// ⚠️ VE HİÇBİR ŞEY DEĞİŞMEDİYSE KIRPMA YAPILMAZ. Boş bir kırpma,
// kullanıcıya "bir şey oldu" der ve YALAN söyler. Değişimin olup olmadığı
// İKİ eksende sınanıyor:
//     Osmanlı gövdesi  → donemBul(t) indeksi
//     yabancı gövdeler → aktif dönem imzası (devletGuncelle'nin ölçütü)
// 🔴 Tek eksene bakmak yetmez: Venedik'ten Osmanlı'ya geçen bir yer
//    ikisini de değiştirir, ama İKİ YABANCI arasında el değiştiren bir yer
//    (Venedik → Napoli) Osmanlı indeksini HİÇ oynatmaz.
var _kirpmaZaman = [], _kirpmaGun = null;

function _yabanciImza(t) {
  // `devletGuncelle`nin (app.js:301) imza ölçütünün AYNISI — yalnız çizim
  // yapmadan. Ölçüt orada değişirse burası da değişmeli; iki yerde duran
  // bir ölçüt bayatlar (bugün tahtada aynı sınıftan bir kusur ölçüldü).
  var im = "";
  try {
    devletler2.forEach(function (s) {
      for (var i = 0; i < s.dnm.length; i++) {
        var p = s.dnm[i];
        if (p.fi <= t && t < p.ti) { im += s.id + ":" + i + ";"; break; }
      }
    });
  } catch (e) { return null; }
  return im;
}

// (`_kirpmaKilitli` tanımı KAMERA kilidinin yanında — bkz. ~2830)
function _kirpmaKilidiBirak() {
  if (_kirpmaKilitli) {
    _kirpmaKilitli = false; kameraCoz();
    // 🔴 24 Ağustos 2026 — DAMGA DA BURADA TAZELENİR, ve sebebi ölçüldü.
    // `guncelle()` kırpma boyunca erken dönüyor (`if (_kirpmaKilitli)
    // return;`) ve `baslikDamgala` o satırın ALTINDA. Kilit bırakılırken
    // aşağıdaki borç dört işlevi ödüyordu; damga listede YOKTU. Sonuç:
    // kırpmadan sonra başlık ÖNCEKİ güne ve ÖNCEKİ maddeye takılı kalıyor.
    //
    // Ölçülen vaka: `suanki` 1393-06-01 (Amasya), başlık "1393-01-01 ·
    // Muzafferî". Durum doğruydu, DAMGA bayattı; elle bir çağrı anında
    // düzeltti ⇒ kusur hesapta değil ÇAĞRIDA.
    //
    // ⚠️ Ve bu kozmetik DEĞİL: damga bir ölçüm aletidir. `§11`de yazılı
    // ders (*"paneldeki N/TOPLAM sayısı görüntünün hangi yayından
    // olduğunu söyler"*) bayat bir damgayla çöker — bir ekran görüntüsü
    // YANLIŞ TARİHLENİR. İlk kurbanı bu ölçümün kendisi oldu.
    try { baslikDamgala(); } catch (e) { /* damga atlası durdurmaz */ }
  }
  // BORCU ODE — atlanan dort guncelleme burada BIR KEZ kosar.
  // Sira onemli: kilit ONCE birakilir, sonra odenir. Ters olsaydi
  // guncelle() yine `_kirpmaKilitli` gorup atlar ve borc HIC odenmezdi
  // (ayni tuzaga `etiketTazele`de dusmemek icin oradaki sira da boyle).
  if (_kirpmaBorcu) {
    _kirpmaBorcu = false;
    try { sehirGuncelle(suanki); } catch (e) { }
    try { savasGuncelle(suanki); } catch (e) { }
    try { seferGuncelle(suanki); } catch (e) { }
    try { koridorGuncelle(suanki); } catch (e) { }
  }
}

function kirpmayiDurdur() {
  for (var i = 0; i < _kirpmaZaman.length; i++) clearTimeout(_kirpmaZaman[i]);
  _kirpmaZaman = [];
  if (_kirpmaGun !== null) {
    var g = _kirpmaGun; _kirpmaGun = null;
    tarihAyarla(g);                 // kesildiyse SON hâle dön
  }
  _kirpmaKilidiBirak();
}

// `gun` — olayın günü (gün numarası). `once` onun bir GÜN öncesidir:
// atlas gün hassasiyetinde olduğu için "olaydan hemen önceki hâl" budur.
// 🔴 24 Ağustos 2026 — ARTIK BOOLEAN DÖNÜYOR: `true` = kırpma başladı.
// Sebebi Emre'nin hükmü (0031 SESSİZ ADIM → "panel"): kamera oynamayan
// VE kırpma da atmayan bir adımda panelde sinyal yanacak. Bunu bilmenin
// tek yolu kırpmanın ATEŞLEYİP ateşlemediğini SORMAK — eskiden bu
// fonksiyon sessizce dönüyordu ve çağıran taraf hiçbir şey öğrenmiyordu.
// 📌 Bu projede yazılı olan dersin ta kendisi: *"aletin BASMADIĞI ≠
//    ölçtüğü"* — sessiz atlama, yanlış sonuçtan daha zor bulunur, çünkü
//    yanlış sonuç bir sayı gösterir, sessiz atlama HİÇBİR ŞEY göstermez.
function oncesiSonrasiKirp(gun) {
  kirpmayiDurdur();
  if (!haritaHazir) return false;
  if (!_kirpmaAcik()) return false;
  var once = gun - 1;
  if (once < BASLANGIC) return false;

  // DEĞİŞİM VAR MI — yoksa hiç başlama
  var oIdx = donemBul(once), gIdx = donemBul(gun);
  var oIm = _yabanciImza(once), gIm = _yabanciImza(gun);
  if (oIdx === gIdx && oIm === gIm) return false;   // sessiz gün — kırpma YOK

  // 🔴 22 Ağustos — BİRİM DEĞİŞTİ, Emre: *"göz kırpma özelliği 1 SANİYE
  // sürsün."* Eskiden ayar "her hâl kaç ms" idi ve toplam süreyi kullanıcı
  // kafadan çarpmak zorundaydı (420 × 2 × 2 = 1680 ms). Şimdi ayar TOPLAM
  // SÜRE; hâl başına düşen pay ondan TÜRETİLİYOR.
  // 📌 Bu projede aynı ders ölçülmüştü: Emre *"uçuş ayarları hiç etki
  //    etmiyor görünüyor"* demişti ve ayarlar UYGULANIYORDU — okunamıyordu.
  //    *Kusur mekanizmada değil BİRİMDEYDİ.* Aynı hatayı yeni ayarda
  //    tekrarlamamak için ayar, kullanıcının DÜŞÜNDÜĞÜ birime çevrildi.
  //
  // 🔴 VARSAYILAN 900 ms — Emre: *"1 saniye uzun olabilir, 500 pır pır
  // edecekse 700 olsun, SEN KARAR VER."* Karar ve gerekçesi:
  // Asıl ölçüt TOPLAM değil, HÂL BAŞINA düşen süre. `adet:2` dört hâl demek:
  //     500 ms →  125 ms/hâl   pır pır — harita YENİDEN ÇİZİMİ bile bitmez
  //     700 ms →  175 ms/hâl   sınırda: "bir şey oldu" dersin, NE olduğunu göremezsin
  //     900 ms →  225 ms/hâl   ✓ tanıma eşiğinin üstünde
  //    1000 ms →  250 ms/hâl   iyi ama gereksiz uzun
  // ⚠️ VE SON HÂL BEKLEMİYOR, orada kalıyor: 900 ms'lik ayarda gözün
  //    gördüğü HAREKET 3 × 225 = 675 ms — Emre'nin hedeflediği aralık.
  //    Yani "toplam süre" ayarı, algılanan sürenin 4/3'ü.
  //
  // ⚠️ Alt sınır 150 ms (90 DEĞİL): altında MapLibre yeniden çizimi bitmeden
  //    sonraki hâle geçiliyor ve kullanıcı iki hâl değil BULANIKLIK görüyor.
  //    🔴 Bu sayı ÖLÇÜLMEDİ — çizim süresi haritanın yüküne göre değişir;
  //    gözle doğrulanacak ve gerekirse ölçülüp düzeltilecek.
  var adet = Math.max(1, +_ayar("ayar-kirpma-adet", 2));
  var toplam = +_ayar("ayar-kirpma-toplam-ms", 900);
  var ms = Math.max(150, Math.round(toplam / (adet * 2)));
  _kirpmaGun = gun;                              // kesilirse buraya dönülür

  // 🔴🔴 KİLİT ŞART — VE BU SATIR OLMADAN KIRPMA IŞINLANMA ÜRETİYORDU.
  // `tarihAyarla` → `guncelle()` → dönem değişti → `zoomUygula` → `fitBounds`.
  // Kırpma dört kez `tarihAyarla` çağırdığı için DÖRT `fitBounds` atıyordu:
  // kamera her kırpmada imparatorluk sınırlarına savruluyordu.
  // ⇒ Emre'nin gördüğü "şak şak"ın bir kısmı DOĞRUDAN BUYDU ve bugün ben
  //   yazdım. Ölçmeden yazmanın bedeli.
  _kirpmaKilitli = true;
  kameraKilitle();

  // Dizilim: (önce → sonra) × adet, ve HER ZAMAN `sonra`da biter.
  var sira = [];
  for (var c = 0; c < adet; c++) { sira.push(once); sira.push(gun); }
  sira.forEach(function (g, i) {
    _kirpmaZaman.push(setTimeout(function () {
      tarihAyarla(g);
      if (i === sira.length - 1) {
        _kirpmaGun = null; _kirpmaZaman = [];
        _kirpmaKilidiBirak();
      }
    }, i * ms));
  });
  return true;                                   // kırpma GERÇEKTEN başladı
}

// 🔴 PANEL SİNYALİ — Emre'nin hükmü, 0031 SESSİZ ADIM: *"panel"*.
//
// SORUN (ölçüldü, yayındaki sitede, Emre'nin adıyla andığı vakada):
//     165 Devşirme sistemi    konum YOK → işaret yanmadı
//     166 Düzmece Mustafa     konum YOK → işaret yanmadı · kamera DURDU
//     167 Cüneyd Bey          konum VAR → işaret yandı ✓
// 166'da harita HİÇBİR ŞEY yapmıyordu. Emre: *"pas geçiliyor."*
//
// ÜÇ ŞIK SUNULDU, EMRE (a)'YI SEÇTİ:
//   (a) sinyal HARİTADA değil PANELDE yansın        ← seçilen
//   (b) bu maddelere yer_id verelim — harita oynar ama YER UYDURURUZ
//   (c) olduğu gibi kalsın
// ⇒ Gerekçe: bir ayaklanmanın haritada karşılığı YOKTUR ve haritayı
//   konuşturmak YALAN olur; ama adımın kaybolması da kabul edilemez.
//   Panel, "bir şey oldu" demenin yalan söylemeyen yeridir.
//
// ⚠️ YALNIZ GERÇEKTEN SESSİZ ADIMDA ÇAĞRILIR. Her maddede çağrılsaydı
//    gürültü olurdu ve gürültü, sinyalin kendisini öldürür.
var _panelSinyalZaman = null;
function panelSinyali() {
  try {
    // ⚠️ HEDEF KİMLİKLE DEĞİL, AKRABALIKLA SEÇİLİYOR — ve bu kasıtlı.
    // İlk yazışta `olay-detay` id'si kullanılmıştı; ölçüldü ve o eleman
    // BAŞKA bir kapsayıcı (index.html:598, `class="gizli"` ile açılıyor),
    // oysa mesajın yazıldığı kart `ob-*` kardeşlerinin içinde (satır 308).
    // Gizli bir elemanı yakmak, HİÇ yakmamakla aynı şeydir — ve hiçbir
    // hata vermez, yani sessizce kaybolurdu.
    // ⇒ Sinyal, mesajın YAZILDIĞI elemanın kapsayıcısına konuyor: mesaj
    //   görünüyorsa sinyal de görünür. Bu bağ, id'lerin yeniden
    //   adlandırılmasından da etkilenmez.
    var k = (obYerYokEl && obYerYokEl.parentElement) || obYerYokEl;
    if (!k) return;
    if (_panelSinyalZaman) { clearTimeout(_panelSinyalZaman); }
    k.classList.remove("panel-sinyal");
    void k.offsetWidth;                 // reflow — sınıf yeniden takılsın
    k.classList.add("panel-sinyal");
    _panelSinyalZaman = setTimeout(function () {
      k.classList.remove("panel-sinyal");
      _panelSinyalZaman = null;
    }, 1100);
  } catch (e) { /* panel yok — sessiz geç */ }
}

function _kirpmaAcik() {
  var el = document.getElementById("ayar-kirpma-ac");
  if (el && !el.checked) return false;
  // 🔴 23 Ağustos, 0029/H-0001 — HIZLI OYNATMADA KIRPMA YOK.
  // Emre: *"1 olay/1 sn gibi hızlarda göz kırpma animasyonu kullanmamak
  // gerek ... yada varsayılan olarak belli hızlardan sonra göz kırpma
  // animasyonunu başlatmak mantıklı olabilir, buna da sen karar ver."*
  //
  // KARAR VE GEREKÇESİ — ölçüyle, tercihle değil:
  // Kırpma toplam süresi `ayar-kirpma-toplam-ms` (varsayılan 900 ms) ve
  // varıştan SONRA başlıyor (bugün düzeltildi). Olaylar arası bekleme
  // ondan kısaysa kırpma bir sonraki olaya taşar ve iki kırpma üst üste
  // biner — kullanıcı "titreme" görür, "vurgu" değil.
  // ⇒ ÖLÇÜT: bekleme, kırpmanın EN AZ İKİ KATI olmalı.
  //     900 ms kırpma ⇒ 1800 ms'den hızlı akışta kırpma YOK
  //     1 olay/1 sn  → kapalı      1 olay/2 sn → kapalı (1800 sınırında)
  //     1 olay/3 sn  → açık
  // Sabit bir hız listesi YAZILMADI: eşik kırpma süresinden TÜRÜYOR,
  // yani kullanıcı kırpmayı uzatırsa eşik de kendiliğinden yükselir.
  // 📌 Bu, `CLAUDE.md`nin "elle liste tutma, ölçüden türet" dersinin
  //    küçük bir uygulaması — iki sayı arasında sessiz bir tutarsızlık
  //    kalmasın diye.
  if (typeof zamanlayici !== "undefined" && zamanlayici
      && typeof akisModu !== "undefined" && akisModu
      && akisModu.value === "olay") {
    var bekleme = parseInt((olayHizSec && olayHizSec.value) || "5000", 10);
    var kirpma  = +_ayar("ayar-kirpma-toplam-ms", 900);
    if (bekleme < kirpma * 2) return false;
  }
  return true;
}

// ② YERLEŞİM — orta | kenar.  Emre: *"Kırım'da bir olay mı oldu yukarıdan
// ekrana girer. İran ile savaş mı çıktı sağdan pencereye girer… ama
// pencereye hemen karenin ucundan değil de belli bir miktar pencerenin
// içine doğru."*
// 🔴 S2 hükmü: hedef ZATEN EKRANDAYSA kamera OYNAMAZ — yalnız işaret
// yanıp söner. Ekran dışındaysa geldiği kenardan içeri girer.
// 📌 "Görünen alanın ortası" (S3) yapıdan geliyor: MapLibre'nin kabı
// `#harita`, `#yanpanel`in KARDEŞİ — yani tuval zaten panelin solunda
// bitiyor ve kabın ortası görünen alanın ortası. Ayrı bir düzeltme
// GEREKMİYOR; ölçüldü, uydurulmadı.
function odakOfseti(hedef, kap) {
  if (_ayarMetin("ayar-yerlesim", "orta") !== "kenar") return [0, 0];
  var W = kap.width, H = kap.height;
  var p;
  try { p = harita.project([hedef.lon, hedef.lat]); } catch (e) { return [0, 0]; }
  var pay = Math.max(0.02, Math.min(0.45, _ayar("ayar-kenarpay", 18) / 100));
  // Hedef şu an görünen çerçevenin İÇİNDEYSE: kamerayı oynatma (S2 + Emre'nin
  // ③. kuralı: *"olay mahalli zaten gösterim çerçevesi içinde ise haritanın
  // kaydırılmasına gerek yoktur"*).
  if (p.x >= 0 && p.x <= W && p.y >= 0 && p.y <= H) return [0, 0];

  // 🔴 22 Ağustos 2026 — KURAL DEĞİŞTİ, Emre'nin tarifi BİREBİR:
  //   *"Olay mahalli hem ÜST kenardan hem YAN kenardan EN AZ ekranın %15'i
  //    kadar içeri girecek. SADECE ÜST VEYA YAN DEĞİL, İKİ KENARDAN DA.
  //    Yatay doğrultuyu 100'e böl, 15. dilime denk gelecek şekilde soldan
  //    giriş yapacak. Dikey doğrultuda ekranı 100'e böl, 15. dilimde yer
  //    alacak şekilde üstten aşağıya doğru ekrana girecek."*
  //
  // ESKİ HÂLİ IŞIN TABANLIYDI: merkezden hedefe giden ışının "iç
  // dikdörtgen"i deldiği noktaya koyuyordu. O yöntem hedefi ışının ÇIKTIĞI
  // kenardan payı kadar içeri alır — ama ÖTEKİ eksende hedef ekranın tam
  // ortasında da olabilir, kenarına da yapışabilir. Emre'nin istediği bu
  // DEĞİL: **iki eksende de aynı anda %15.**
  //
  // ⇒ Yeni kural: hedef, iç dikdörtgenin GELDİĞİ YÖNDEKİ KÖŞESİNE oturur.
  //   Hangi köşe olduğunu, hedefin merkeze göre işareti söyler.
  //   Hedef tam bir eksende ortadaysa (dx≈0) o eksende ORTA kalır —
  //   yoksa hiç gerekmeyen bir kayma üretirdik.
  // 🔴 23 Ağustos 2026 — YÖN ARTIK ODAK DEVLETE GÖRE, kameraya göre DEĞİL.
  // Emre: *"osmanlı odağının DOĞUSUNDA vuku bulan olaylar için olay
  // mahalli ekranın sağ tarafından gösterime sokulacak … kuzeydeyse sağ
  // üstten, güneydeyse sağ alttan."*
  //
  // ESKİ HÂLİ referansı MEVCUT KAMERA MERKEZİ alıyordu ve ölçülmüş bir
  // kusur üretiyordu: İran'dan gelince Amasya sola düşüyor → sol kenara
  // yapışıyor → BATISINDAKİ OSMANLI TOPRAKLARI EKRAN DIŞINA İTİLİYOR.
  // Emre'nin gördüğü tam buydu.
  // ⇒ Referans ODAK DEVLETİN MERKEZİ. Amasya Osmanlı'nın doğusunda →
  //   sağdan girer → Osmanlı batıda çerçevede KALIR.
  // Kaynak zaten var (`donemler[aktifDonem].b`); `gorusGenisligiKm` de
  // aynı kaynağı okuyor, yeni bir veri yolu açılmadı.
  var _rx = W / 2, _ry = H / 2;                 // varsayılan: kamera merkezi
  try {
    var _od = (typeof aktifDonem !== "undefined" && aktifDonem >= 0
               && typeof donemler !== "undefined" && donemler[aktifDonem])
              ? donemler[aktifDonem] : null;
    if (_od && _od.b) {
      // 🔴 24 Ağustos 2026 — BURADA BİR "KUTUNUN İÇİNDEYSE ORTALA" KURALI
      // VARDI, KALDIRILDI. Ölçüldü: Emre'nin VERDİĞİ ÖRNEĞİN ta kendisinde
      // devreye girip isteğini etkisiz kılıyordu.
      //     102 Muzafferî (Şîraz) → 103 Amasya · odak kutusu doğu kenarı
      //     36,95 · Amasya 35,83 ⇒ İÇERİDE ⇒ [0,0] ⇒ ekranda %50/%50
      // Amasya'yı kutunun içine sokan şey MADDENİN KENDİSİ: fetih o gün
      // sınırla birlikte kutuyu da büyütüyor. ⇒ **Bir Osmanlı fethi tanımı
      // gereği hep kutunun içindedir**, yani kural, Emre'nin isteğinin en
      // çok işe yarayacağı sınıfın TAMAMINDA susuyordu.
      //
      // Gerekçem *"içerideyse dışarısı yoktur"* idi — kutuyu bir ÇERÇEVE
      // sanmak. Oysa kural çerçeve değil YÖN söylüyor (*"odağın
      // DOĞUSUNDA"*), ve doğu/batı kutuya değil MERKEZE göre ölçülür: bir
      // şehir kutunun içinde olup merkezin doğusunda olabilir.
      // 📌 Ölçüm doğruydu (nokta gerçekten içerideydi), ÇIKARIM yanlıştı.
      //
      // ⚠️ Ve asıl koruma zaten yukarıda: Emre'nin ③. kuralı, hedef
      // görünen çerçevedeyse kamerayı hiç oynatmıyor. Kenar yerleşimi
      // ancak hedef EKRAN DIŞINDAYKEN çalışır — yani gerçek bir sıçrama
      // varken, ki yönün anlamı tam oradadır. İkinci bir koruma eklemek,
      // birincisini görmemekti.
      var _om = harita.project([(_od.b[0] + _od.b[2]) / 2,
                                (_od.b[1] + _od.b[3]) / 2]);
      if (isFinite(_om.x) && isFinite(_om.y)) { _rx = _om.x; _ry = _om.y; }
    }
  } catch (eOdak) { /* dönem yok — kamera merkezine düşülür */ }
  var dx = p.x - _rx, dy = p.y - _ry;
  if (!dx && !dy) return [0, 0];
  var hedefX = W / 2, hedefY = H / 2;
  if (Math.abs(dx) > 1e-6) hedefX = (dx > 0) ? W * (1 - pay) : W * pay;
  if (Math.abs(dy) > 1e-6) hedefY = (dy > 0) ? H * (1 - pay) : H * pay;
  // `offset`, hedefin kabın MERKEZİNE göre piksel sapmasıdır.
  return [hedefX - W / 2, hedefY - H / 2];
}

// ⚙ Ayarlar penceresi — dört sürgü, `#ayarlar-pencere` (`#dizin`in aynı
// modal deseni). Değerler kalıcı, sürgünün yanında sayı olarak da yazılır.
(function () {
  var pencere = document.getElementById("ayarlar-pencere");
  // 🔴 ETİKET SAYIYI DEĞİL BİRİMİ GÖSTERİR — `p0019/H-0059`un asıl dersi.
  // Emre *"uçuş ayarları hiç etki etmiyor görünüyor"* dedi ve ölçüldü:
  // ayarlar UYGULANIYORDU. Sorun, `1.42` ve `1.2` gibi soyut sayıların
  // kullanıcıya HİÇBİR ŞEY söylememesiydi — etkiyi göremeyince "etki yok"
  // sanılıyordu. Artık her sürgünün yanında birimi yazıyor.
  var BIRIM = {
    "ayar-genislik-km": function (v) { return (+v >= 1000 ? (v / 1000).toFixed(1).replace(".0", "") + " bin km" : v + " km"); },
    "ayar-hiz-kms":     function (v) { return v + " km/sn"; },
    "ayar-sure-taban":  function (v) { return (+v).toFixed(1) + " sn"; },
    "ayar-sure-tavan":  function (v) { return (+v).toFixed(1) + " sn"; },
    "ayar-yatay-esik":  function (v) { return v + " km"; },
    "ayar-kenarpay":    function (v) { return "%" + v; },
    "ayar-imparatorluk-pay": function (v) { return v + " px"; },
    "ayar-irtifa":      function (v) { return v; }
    // 🔴 "ayar-hiz" (eski soyut 0.3-3 hız sürgüsü) BURADAN KALDIRILDI —
    // hiçbir uçuş hesabında okunmuyordu, ölçüldü (bkz. index.html'deki not).
    // Ölü bir kontrolü "hâlâ çalışıyormuş gibi" etiketlemek yanıltıcıydı.
  };
  [["ayar-irtifa", "ayarIrtifa"],
   ["ayar-kenarpay", "ayarKenarPay"],
   ["ayar-imparatorluk-pay", "ayarImparatorlukPay"],
   ["ayar-genislik-km", "ayarGenislikKm"], ["ayar-hiz-kms", "ayarHizKms"],
   ["ayar-sure-taban", "ayarSureTaban"], ["ayar-sure-tavan", "ayarSureTavan"],
   ["ayar-yatay-esik", "ayarYatayEsik"]].forEach(function (p) {
    // 🔴 TEK SEFERLİK GEÇİŞ — `kmDanZoom` sabiti düzeltildi (yukarı bak) ve
    // kayıtlı "görüş genişliği" tercihi KUSURLU davranışa göre seçilmişti.
    // Yarıya indirilmezse kullanıcının haritası bir gecede iki kat
    // uzaklaşırdı. Bayrak olmadan her açılışta tekrar bölerdi.
    if (p[0] === "ayar-genislik-km" && !localStorage.getItem("genislikKmYariland")) {
      var _eskiG = localStorage.getItem(p[1]);
      if (_eskiG) localStorage.setItem(p[1], String(Math.max(100, Math.round(+_eskiG / 2))));
      localStorage.setItem("genislikKmYariland", "1");
    }
    var girdi = document.getElementById(p[0]);
    var deger = document.getElementById(p[0] + "-deger");
    if (!girdi) return;                       // eski sürgü kaldırılmış olabilir
    var kayitli = localStorage.getItem(p[1]);
    if (kayitli) girdi.value = kayitli;
    var yaz = function () {
      if (deger) deger.textContent = (BIRIM[p[0]] || function (v) { return v; })(girdi.value);
    };
    yaz();
    girdi.addEventListener("input", function () {
      yaz();
      localStorage.setItem(p[1], girdi.value);
    });
  });
  // İki açılır liste (yerleşim · hareket biçimi) — sürgü değil, ayrı döngü.
  // 🔴 23 Ağustos, 0029/H-0006 ve H-0001 — iki yeni açılır liste.
  // `ayar-oto-odak` DEĞİŞTİĞİNDE `otoZoom`u da güncelliyor: bir ayarı
  // eklemek yetmez, OKUNDUĞU da gösterilmeli. Bu projede `ayar-yakinlik`
  // sürgüsü değerini kaydediyor ve etiketini güncelliyordu ama hiçbir
  // hesapta okunmuyordu — Emre sordu, ölçüldü, cevap HİÇBİR ŞEY çıktı ve
  // sürgü kaldırıldı. Aynı hataya düşülmüyor.
  [["ayar-yerlesim", "ayarYerlesim"], ["ayar-hareket", "ayarHareket"],
   ["ayar-genislik-kip", "ayarGenislikKip"], ["ayar-oto-odak", "ayarOtoOdak"]]
    .forEach(function (p) {
      var e = document.getElementById(p[0]);
      if (!e) return;
      var k = localStorage.getItem(p[1]);
      if (k) e.value = k;
      e.addEventListener("change", function () {
        localStorage.setItem(p[1], e.value);
        // Oto-odaklama ayarı DOĞRUDAN `otoZoom`u sürüyor; düğme (`btn-zoom`)
        // ile ayar aynı değişkeni paylaşıyor, iki ayrı doğruluk kaynağı
        // doğmasın diye. (`§11`: bir bilgi iki yerde durursa biri
        // güncellenince öteki bayatlar.)
        if (p[0] === "ayar-oto-odak") _otoOdakUygula(e.value === "acik");
      });
      if (p[0] === "ayar-oto-odak") _otoOdakUygula(e.value === "acik");
    });
  // 🔴 `ayar-yakinlik` KALDIRILDI — ÖLÜ SÜRGÜYDÜ (22 Ağustos 2026).
  // Emre sordu: *"bu ayarın ne işe yaradığını anlayamadım."* Ölçüldü, cevap
  // HİÇBİR ŞEY: değeri localStorage'a yazılıyor, etiketi güncelleniyordu ama
  // **hiçbir kamera kodu onu OKUMUYORDU.** Uçuş `ayar-genislik-km`yi okuyor.
  // ⚠️ Ve zararsız değildi: birinci sürgüyle aynı şeyi kontrol ediyormuş gibi
  // görünüyordu — kullanıcı onun niçin işe yaramadığını çözmeye çalıştı.
  // 📌 `CLAUDE.md §11` "yazılmış görünüyor" sınıfı. Ölü ÖZELLİK kodu silinir
  // (ölü SAVUNMA dalı kalır — o ayrım `YASALAR A4`te).
  document.getElementById("btn-ayarlar").addEventListener("click", function () {
    pencere.classList.remove("gizli");
  });
  document.getElementById("ayarlar-kapat").addEventListener("click", function () {
    pencere.classList.add("gizli");
  });
  pencere.addEventListener("click", function (e) {
    if (e.target === pencere) pencere.classList.add("gizli");
  });
})();

// Önceki / sonraki olaya atla — p5/H-0006: sıra numarası (index) üzerinden,
// bkz. suankiOlayI/olayIndexTazele yorumu.
document.getElementById("btn-geri").addEventListener("click", function () {
  olayIndexTazele();
  if (suankiOlayI <= 0) { suankiOlayI = -1; tarihAyarla(BASLANGIC); return; }
  suankiOlayI--;
  // ⏮ ELLE yapılan bir eylem ⇒ KAMERA hakemli + 🛩 anahtarını zorlar.
  // (Panel gösterimi eskisi gibi KAPALI — bu düğme paneli hiç açmıyordu.)
  olayaGit(olaylar[suankiOlayI], false, true);
});
document.getElementById("btn-ileri").addEventListener("click", function () {
  olayIndexTazele();
  if (suankiOlayI >= olaylar.length - 1) { tarihAyarla(BITIS); return; }
  suankiOlayI++;
  olayaGit(olaylar[suankiOlayI], false, true);   // ⏭ — aynı gerekçe
});

// Klavye: ←→ gün (Shift: yıl), boşluk oynat/durdur
document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
  if (e.key === "ArrowRight") { tarihAyarla(suanki + (e.shiftKey ? 365 : 1)); e.preventDefault(); }
  else if (e.key === "ArrowLeft") { tarihAyarla(suanki - (e.shiftKey ? 365 : 1)); e.preventDefault(); }
  else if (e.key === " ") { oynatDurdur(); e.preventDefault(); }
});

// ═══════════════════════════════════════════════════════════════════════
// DEVLET ODAĞI — "istersem Rusya seçip Rusya'nın kronolojisini oynatayım"
// ═══════════════════════════════════════════════════════════════════════
// 🔴 EMRE, 18 Ağustos 2026: *"haritanın odağını diğer devletlere ayarlayacak
// yapıyı kuralım; kronoloji, harita gösterimi, uçuş animasyonu ve kronolojik
// maddelerin kısa anlatımlarını madde açıklaması penceremize ayarlayalım."*
//
// 📌 ÖLÇÜLDÜ, ÖNCE: dört parçanın ÜÇÜ zaten vardı ve yalnız BİRİ eksikti.
//     veri     `devletler.js` 431 künye · 392'sinde kronoloji · 1636 madde
//     harita   `devletler_harita.js` gövdeler çiziliyor · `devletiYay(id)`
//              o devletin gövdesine yakınlaştıran fonksiyon HAZIRDI
//     uçuş     `flyTo` + `ucus-ac`/`ucus-kip` ayarları HAZIRDI
//     ekran    devlet odağı/seçimi:  0 geçiş        ← EKSİK OLAN TEK ŞEY
// ⇒ Bu blok yeni bir mekanizma kurmuyor, VAR OLANI Osmanlı'dan çözüyor.
//
// ⚠️ SARMALAMA, YENİDEN YAZMA DEĞİL: `padisahGuncelle` ve `olaylarGuncelle`
// dokunulmadan duruyor; odak yokken çağrı doğrudan onlara gidiyor. Böylece
// bugünkü Osmanlı davranışı BİT BİT aynı kalıyor ve bu blok kapatılınca
// (odak "—" seçilince) hiçbir iz bırakmıyor.
// 🔴 ÇOK SEKMELİ ARAYÜZ (20 Ağustos 2026, KOORDİNATÖR görevi) — DERİN
// kronolojilerin BELLEKTE bindirilmesi. `data/devletler.js`teki habsburg/
// rusya/lehistan künyeleri hâlâ ESKİ kısa listeyi taşıyor (ölçüldü: 14/15/12
// madde — "Osmanlı cephesinden bakılmış", kronoloji_*.js dosyalarının kendi
// yorumu). Derin dosyalar (107/141/112 madde) `data/devletler.js`e henüz
// BAĞLANMADI — o birleştirme dosyayı DEĞİŞTİRMEK anlamına gelir ve
// `data/*.js` BAŞKA OTURUMLARIN dosyası (§7). Burada yalnız ÇALIŞMA
// BELLEĞİNDEKİ künye nesnesinin `.kronoloji` alanı değiştiriliyor — hiçbir
// dosyaya yazılmıyor, sayfa yenilenince iz kalmıyor.
// ⚠️ Yeni bir devlet (`kronoloji_venedik.js` gibi) gelince: YALNIZ index.html'e
// `<script>` satırı yeter — aşağıdaki `derinKronolojiBindir()` artık DESENE
// bakıyor (21 Ağustos düzeltmesi, hemen altta), buraya elle satır eklemek
// GEREKMİYOR. Script satırı unutulursa devlet sessizce eski/kısa listede
// kalır — devlet seçici panelde yine görünür ama derin veri gelmez.
//
// 🔴 DESENE BAKIYOR, DOSYA LİSTESİNE DEĞİL (koordinatör görevi, 21 Ağustos) —
// eski hâli `{habsburg:.., rusya:.., lehistan:..}` sabit sözlüğüydü. Venedik/
// İran/Bizans `index.html`e bağlandığı gün bu sözlük GÜNCELLENMEMİŞTİ ⇒ üç
// dosya `window`da vardı ama hiçbirinin `.kronoloji`ye bindirilmiş hâli yoktu
// — script bağlamanın kendisi bile yetmiyor, TÜKETEN kod da desene bakmalı.
// Artık `window.KRONOLOJI_<ID>` deseni TARANIYOR; yeni bir devlet dosyası
// yalnız `index.html`e bir `<script>` satırıyla eklenince (bu dosyaya
// DOKUNMADAN) otomatik bindirilir. `id` = suffix küçük harfe çevrilmiş hâli
// (`KRONOLOJI_HABSBURG` → `habsburg`) — bugüne kadarki bütün dosyalar bu
// kalıba uyuyor (habsburg/rusya/lehistan/venedik/iran/bizans/kirim/
// macaristan); uymayan biri çıkarsa KRONOLOJI_ID_OZEL ile eşlenir.
var KRONOLOJI_ID_OZEL = {};             // { "KRONOLOJI_XYZ": "gercek-id" } — istisna için
(function derinKronolojiBindir() {
  var D = window.DEVLETLER || [];
  var bindirilen = [], eslenmeyen = [];
  Object.keys(window).forEach(function (anahtar) {
    if (anahtar.slice(0, 10) !== "KRONOLOJI_") return;
    var derin = window[anahtar];
    if (!derin || !derin.length) return;
    var id = KRONOLOJI_ID_OZEL[anahtar] || anahtar.slice(10).toLowerCase();
    var bulundu = false;
    for (var i = 0; i < D.length; i++) {
      if (D[i].id === id) { D[i].kronoloji = derin; bindirilen.push(id + " (" + derin.length + ")"); bulundu = true; break; }
    }
    if (!bulundu) eslenmeyen.push(anahtar + " → \"" + id + "\" (DEVLETLER'de böyle id yok)");
  });
  if (bindirilen.length) console.log("Atlas: derin kronoloji bindirildi — " + bindirilen.join(", "));
  // Sessiz kaybolma YOK — eşlenmeyen bir dosya "0 madde" gibi görünmesin.
  if (eslenmeyen.length) console.warn("Atlas: KRONOLOJI_* eşlenemedi — " + eslenmeyen.join(", "));
})();

(function odakKur() {
  var kunye = window.DEVLETLER || [];
  if (!kunye.length) return;
  var ODAK = null;                     // null = Osmanlı (varsayılan)
  var liste = document.getElementById("olay-listesi");
  if (!liste) return;

  // ---- adaylar: YALNIZ kronolojisi olan devletler ------------------------
  // 39 künyenin kronolojisi boş (hepsi Amerika: Arjantin · Cherokee ·
  // Cahokia · Haudenosaunee…). Onları listelemek, tıklayınca boş panel
  // açılan bir seçenek sunmak olurdu — "yok" ile "boş" ekranda aynı görünür.
  var adaylar = kunye.filter(function (d) {
    return d.kronoloji && d.kronoloji.length;
  }).sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); });

  function bul(id) {
    for (var i = 0; i < kunye.length; i++) if (kunye[i].id === id) return kunye[i];
    return null;
  }

  // =======================================================================
  // ÇOK SEKMELİ ARAYÜZ — Emre'nin tarifi (20 Ağustos 2026), birebir:
  // "ODAK'a EK OLARAK Rusya Lehistan Osmanlı Venedik kronolojilerini de
  // görmek istiyorsam onları seçebilmeliyim; ama BU EK devletlerden HANGİ
  // ÖNEMDEKİ maddelerin gösterileceğini ayarlayabilelim."
  //
  // KİLİT KURAL (koordinatörün görev tarifi, aynen): ODAK'ın kendi kronolojisi
  // HER ZAMAN TAM gösterilir — süzgeç YOK. EK devletler `dunya`/`kapsam` ile
  // SÜZÜLÜR. Bu ayrım aşağıdaki `birlesikTopla()`da tek yerde uygulanıyor.
  //
  // 🔴 OSMANLI EK OLARAK SUNULMUYOR — ölçülmüş bir sınır, kapatılmadı:
  // Osmanlı'nın kendi `olaylar` dizisinde (821 madde) `onem`/`dunya`/`kapsam`
  // alanlarının HİÇBİRİ yok (ölçüldü: 0/821). Süzülemeyen bir kaynağı "ek"
  // listesine koymak ya sahte bir sayı uydurmak ya da süzgeçsiz eklemek
  // olurdu — ikisi de KİLİT KURALI ihlal eder. Veri o alanları taşıyınca
  // (başka bir oturumun işi) bu liste OTOMATİK büyür — `adaylar`/`tumSatirlar()`
  // zaten `kunye` (DEVLETLER) üzerinden dinamik.
  var OSMANLI_SYNTH = { id: "osmanli", ad: "Osmanlı", harita: "osmanli" };
  var EK_SECILI = [];                          // seçili ek devlet id'leri, SIRALI
  var ekDunyaSel = document.getElementById("ek-dunya-esik");
  var ekYalnizDisKutu = document.getElementById("ek-yalniz-dis");
  var EK_DUNYA_ESIK = ekDunyaSel ? +ekDunyaSel.value : 4;
  var EK_YALNIZ_DIS = ekYalnizDisKutu ? ekYalnizDisKutu.checked : false;

  // Sabit bir renk seti + bilinmeyen id için deterministik üretim (hash→HSL);
  // yeni bir devlet eklenince elle renk atamak GEREKMEZ.
  var EK_RENK_SABIT = { osmanli: "#8e0b22", habsburg: "#c9932b", rusya: "#2e7d32", lehistan: "#a1272e" };
  function ekRenk(id) {
    if (EK_RENK_SABIT[id]) return EK_RENK_SABIT[id];
    var h = 0;
    for (var i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
    return "hsl(" + (h % 360) + ",52%,38%)";
  }

  // =======================================================================
  // 🔴 21 Ağustos — PAKET 0026/H-0001, Emre: "padişah ismi kronoloji seçme
  // combobox'ı ve ek devlet combobox'ı TEK OLSUN. Kronoloji combobox'ı
  // çoktan seçmeli olsun, tek tek işaretlenebilsin. İLK İŞARETLENEN 'odak
  // devlet' olacak, ikinci üçüncü seçilenler EK DEVLET kategorisinde."
  //
  // Eskiden İKİ ayrı kontrol vardı: `#odak-devlet` (tek seçimli <select>)
  // ve `#ek-devletler-*` (checkbox paneli). Şimdi TEK panel — `#devlet-
  // secici-liste` — ve ROL, TIKLAMA SIRASINDAN türüyor: `ODAK`/`EK_SECILI`
  // iç durumu DEĞİŞMEDİ (aşağıdaki `birlesikTopla/render/kartCiz/listeCiz`
  // hâlâ AYNI iki değişkeni okuyor) — yalnız bu durumu KURAN GİRDİ değişti.
  // Osmanlı (`OSMANLI_SYNTH`) hiçbir zaman EK_SECILI'ye giremez (yukarıdaki
  // "OSMANLI EK OLARAK SUNULMUYOR" notu hâlâ geçerli); Osmanlı satırı
  // yalnız ODAK'ı sıfırlar (ODAK = null).
  var secButon = document.getElementById("devlet-secici-buton");
  var secPanel = document.getElementById("devlet-secici-panel");
  var secListe = document.getElementById("devlet-secici-liste");

  function tumSatirlar() {                     // Osmanlı pinned + kronolojisi olan devletler
    return [OSMANLI_SYNTH].concat(adaylar);
  }

  function rolYaz() {
    if (!secButon) return;
    var ozet = ODAK ? ODAK.ad : "☪ Osmanlı";
    if (EK_SECILI.length) {
      ozet += " + " + EK_SECILI.length + " ek";
    }
    secButon.textContent = ozet + " ▾";
  }

  // 🔴🔴 22 Ağustos 2026 — BU FONKSİYON ÇAĞRILIYORDU AMA TANIMLI DEĞİLDİ,
  // ve kusur CANLI YAYINDAYDI. `satirTikla()` 5392'de `vurguGuncelle()`
  // çağırıyor; tanım yoktu ⇒ `ReferenceError` ⇒ fonksiyon ORADA patlıyor ve
  // ALTINDAKİ HİÇBİR SATIR ÇALIŞMIYOR:
  //     if (secPanel) secPanel.classList.add("gizli");   ← KUSUR ① düzeltmesi
  //     guncelle();                                       ← panel tazeleme
  //
  // 📌 VE ASIL BULGU: Emre'nin ÜÇ AYRI kusuru sandığımız şeyin TEK KÖKÜ bu.
  // Kusur ③ için yazılan çağrı, kusur ①'in düzeltmesini ÖLDÜRÜYORDU. Emre
  // "combobox kapanmıyor" diye şikâyet ettiğinde düzeltme ZATEN YAZILMIŞTI
  // (satır 5397) — yazılmış ama kendinden önceki bir satır yüzünden hiç
  // koşmuyordu.
  //
  // ⚠️ HİÇBİR DENETİM GÖRMEDİ: `node --check` TEMİZ geçiyor (sözdizimi
  // kusursuz), yayın kapısı da kod ÇALIŞTIRMIYOR. Kusur yalnız ÇALIŞMA
  // ANINDA, yalnız kullanıcı tıklayınca doğuyor. `CLAUDE.md §11`in
  // *"bir düzeltmenin veride inmesi haritada indiği anlamına gelmez"*
  // dersinin ARAYÜZ tarafı: **sözdiziminin temiz olması, çalıştığı anlamına
  // gelmez.** Tarayıcıda tıklamadan bilinemezdi ve tıklandı.
  //
  // Makine zaten kuruluydu (`devlet-odak-vurgu` katmanı, satır 746, filtresi
  // `__yok__`); eksik olan YALNIZ filtreyi güncelleyen bu üç satırdı.
  function vurguGuncelle() {
    if (!harita || !haritaHazir || !harita.getLayer
        || !harita.getLayer("devlet-odak-vurgu")) return;
    // ODAK yokken (Osmanlı) hiçbir gövde eşleşmemeli — filtreyi BOŞ bırakmak
    // MapLibre'de TÜM yabancı devletleri kırmızı çizerdi (satır 743 uyarısı).
    var kimlik = ODAK ? (ODAK.harita || ODAK.id) : "__yok__";
    harita.setFilter("devlet-odak-vurgu", ["==", ["get", "id"], kimlik]);
  }

  function satirTikla(id) {
    var eskiOdakId = ODAK ? ODAK.id : null;       // KUSUR ③ — odak GERÇEKTEN değişti mi?
    if (id === "osmanli") {
      ODAK = null;                              // Osmanlı her zaman odağı SIFIRLAR
    } else if (ODAK && ODAK.id === id) {
      // zaten ODAK'tı → kaldır; sıradaki EK varsa o ODAK'a YÜKSELİR
      var yeni = EK_SECILI.shift();
      ODAK = yeni ? bul(yeni) : null;
    } else {
      var i = EK_SECILI.indexOf(id);
      if (i >= 0) {
        EK_SECILI.splice(i, 1);                 // zaten EK'ti → kaldır
      } else if (!ODAK) {
        ODAK = bul(id);                         // ODAK boştu (Osmanlı) → İLK SEÇİM, ODAK OL
      } else {
        EK_SECILI.push(id);                     // ODAK doluydu → SIRADAKİ, EK OL
      }
    }
    // 🔴 21 Ağustos — Emre (ekran görüntüsü, KUSUR ③): "alttaki detay kutusu
    // hâlâ Osmanlı maddesini gösteriyor" — odak değişince `#olay-bilgi`
    // ESKİ devletin (ya da Osmanlı'nın) açık kalan maddesini göstermeye
    // devam ediyordu, hiçbir kod ona dokunmuyordu. Odak GERÇEKTEN
    // değiştiyse (ek devlet ekleme/çıkarma DEĞİL — yalnız odak) panel
    // KAPATILIR; yeni devletin rastgele bir maddesini ZORLA açmak yerine
    // (bu hem zaman çubuğunu hem haritayı `devletiYay`la YARIŞAN ikinci bir
    // konuma uçururdu) kullanıcı listeden kendi maddesini seçer.
    if ((ODAK ? ODAK.id : null) !== eskiOdakId && obPanel) obPanel.classList.add("gizli");
    panelDoldur();
    render();
    vurguGuncelle();          // KUSUR ③ — odaklanan devletin gövdesi belirgin renkle
    // 🔴 21 Ağustos — Emre (ekran görüntüsü, KUSUR ①): "kronoloji combobox'u
    // kapanmıyor, böyle açık kalıyor." Seçim yapılınca panel KAPANIR — normal
    // bir `<select>`in davranışı buydu, biz onu TEK panelde birleştirirken
    // (çoktan seçmeli, ama her tık bir SEÇİM/İŞLEM) bu kapanmayı unutmuşuz.
    if (secPanel) secPanel.classList.add("gizli");
    console.log("Atlas: odak → " + (ODAK ? ODAK.ad + " · " + ODAK.kronoloji.length + " kronoloji maddesi" : "Osmanlı (varsayılan)")
                + (EK_SECILI.length ? "  ·  ek: " + EK_SECILI.join(", ") : ""));
    guncelle();
  }

  function panelDoldur() {
    rolYaz();
    if (!secListe) return;
    secListe.innerHTML = "";
    tumSatirlar().forEach(function (d) {
      var rol = d.id === "osmanli" ? (!ODAK ? "odak" : null)
              : ODAK && ODAK.id === d.id ? "odak"
              : EK_SECILI.indexOf(d.id) >= 0 ? "ek" : null;
      var satir = document.createElement("div");
      satir.className = "devlet-secici-satir" + (rol ? " secili-" + rol : "");
      var nokta = document.createElement("span");
      nokta.className = "ek-nokta";
      nokta.style.background = ekRenk(d.id);
      var ad = document.createElement("span");
      ad.className = "dss-ad";
      ad.textContent = d.ad + (d.id !== "osmanli" ? " (" + d.kronoloji.length + ")" : "");
      var rozet = document.createElement("span");
      rozet.className = "dss-rozet";
      rozet.textContent = rol === "odak" ? "ODAK" : rol === "ek" ? "EK" : "";
      satir.appendChild(nokta); satir.appendChild(ad); satir.appendChild(rozet);
      satir.addEventListener("click", function () { satirTikla(d.id); });
      secListe.appendChild(satir);
    });
  }
  if (secButon && secPanel) secButon.addEventListener("click", function () {
    secPanel.classList.toggle("gizli");
  });
  if (ekDunyaSel) ekDunyaSel.addEventListener("change", function () {
    EK_DUNYA_ESIK = +ekDunyaSel.value; render();
  });
  if (ekYalnizDisKutu) ekYalnizDisKutu.addEventListener("change", function () {
    EK_YALNIZ_DIS = ekYalnizDisKutu.checked; render();
  });

  // ---- BİRLEŞİK LİSTE — ODAK'ın tamamı + EK devletlerin süzülmüşü --------
  // ⚠️ Süzme YALNIZ ek maddelere uygulanır (kilit kural). `m.dunya` yoksa
  // `m.onem`e, o da yoksa 3'e düşer — koordinatörün istediği "eksik alana
  // dayanıklı" davranış (dosyalar M-0873 şemasına GEÇİŞ hâlinde).
  function birlesikTopla() {
    var out = [];
    var odakKaynak = ODAK ? ODAK.kronoloji : olaylar;   // `olaylar`: Osmanlı'nın 821 maddesi
    var odakSahibi = ODAK || OSMANLI_SYNTH;
    odakKaynak.forEach(function (m) {
      var gi = m.gi !== undefined ? m.gi : gunIdx(m.t);
      out.push({ gi: gi, t: m.t, b: m.b, d: odakSahibi, m: m, odak: true });
    });
    EK_SECILI.forEach(function (id) {
      var d = bul(id);
      if (!d || !d.kronoloji) return;
      d.kronoloji.forEach(function (m) {
        var dunya = m.dunya != null ? m.dunya : (m.onem != null ? m.onem : 3);
        if (dunya < EK_DUNYA_ESIK) return;
        if (EK_YALNIZ_DIS && m.kapsam !== "dis") return;
        out.push({ gi: gunIdx(m.t), t: m.t, b: m.b, d: d, m: m, odak: false });
      });
    });
    out.sort(function (a, b) { return a.gi - b.gi; });
    return out;
  }

  var birlesikListe = [], birlesikDom = [];
  var sonVurgulananB = -1, sonKaydirmaB = 0;
  function birlesikCiz() {
    birlesikListe = birlesikTopla();
    liste.innerHTML = "";
    birlesikDom = birlesikListe.map(function (o) {
      var el = document.createElement("div");
      el.className = "olay ek-madde" + (o.odak ? " ek-odak" : "");
      var rozet = document.createElement("span");
      rozet.className = "ek-rozet";
      rozet.style.background = ekRenk(o.d.id);
      rozet.textContent = (o.d.ad || "?").split(" ")[0];
      var tarih = document.createElement("span");
      tarih.className = "o-tarih";
      tarih.textContent = (o.t || "").slice(0, 10);
      var baslik = document.createElement("span");
      baslik.className = "o-baslik";
      baslik.textContent = o.b || "";
      el.appendChild(rozet); el.appendChild(tarih); el.appendChild(document.createTextNode(" ")); el.appendChild(baslik);
      el.addEventListener("click", function () { maddeAc(o.d, o.m); });
      liste.appendChild(el);
      return el;
    });
    sonVurgulananB = -1;
    birlesikGuncelle(suanki);
  }

  // `olaylarGuncelle`nin ikili-arama + pencereli güncelleme desenini birebir
  // izliyor (bkz. dosyanın üstündeki asıl tanım) — 1223+ düğümü her karede
  // TAMAMEN taramamak için.
  function birlesikGuncelle(t) {
    if (!birlesikListe.length) return;
    var lo = 0, hi = birlesikListe.length - 1, yeni = -1;
    while (lo <= hi) {
      var orta = (lo + hi) >> 1;
      if (birlesikListe[orta].gi <= t) { yeni = orta; lo = orta + 1; } else { hi = orta - 1; }
    }
    var anaSayisi = 0;
    for (var ai = 0; ai < birlesikListe.length; ai++) if (birlesikListe[ai].odak) anaSayisi++;
    var sayacEl = document.getElementById("olay-sayac");
    if (sayacEl) {
      sayacEl.textContent = (yeni + 1) + " / " + birlesikListe.length + " madde  ·  "
        + anaSayisi + " ana + " + (birlesikListe.length - anaSayisi) + " ek";
    }
    if (yeni === sonVurgulananB) return;
    var a = Math.max(0, Math.min(yeni, sonVurgulananB));
    var b = Math.min(birlesikListe.length - 1, Math.max(yeni, sonVurgulananB));
    if (sonVurgulananB < 0) { a = 0; b = birlesikListe.length - 1; }
    for (var i = a; i <= b; i++) birlesikDom[i].classList.toggle("gecmis", birlesikListe[i].gi <= t);
    if (sonVurgulananB >= 0) birlesikDom[sonVurgulananB].classList.remove("simdiki");
    if (yeni >= 0) {
      birlesikDom[yeni].classList.add("simdiki");
      var simdi = Date.now();
      if (!zamanlayici || simdi - sonKaydirmaB > 700) {
        sonKaydirmaB = simdi;
        var _kap = birlesikDom[yeni].parentElement;
        if (_kap && _kap.scrollHeight > _kap.clientHeight) {
          _kap.scrollTop += birlesikDom[yeni].getBoundingClientRect().top
                            - _kap.getBoundingClientRect().top;
        } else {
          birlesikDom[yeni].scrollIntoView({ block: "nearest", behavior: zamanlayici ? "auto" : "smooth" });
        }
      }
    }
    sonVurgulananB = yeni;
  }

  // ---- odaklı kart: padişah portresinin yerine devlet künyesi -----------
  function kartCiz(d) {
    portreKutu.innerHTML = "";
    portreKutu.textContent = (d.ad || "?").charAt(0);
    adKutu.textContent = d.ad;
    saltanatKutu.textContent =
      (d.f || "").slice(0, 4) + " – " + (d.t || "").slice(0, 4)
      + (d.baskent ? " · " + d.baskent : "");
  }

  // ---- odaklı kronoloji listesi ----------------------------------------
  // Maddeler {t, tur, b}: gün · tür · kısa anlatım. `yer_id` YOK, yani
  // uçuşun hedefi maddenin yeri değil DEVLETİN O GÜNKÜ GÖVDESİ olabilir —
  // `devletiYay` tam bunu yapıyor. Olmayan bir koordinat uydurmuyoruz.
  function listeCiz(d) {
    liste.innerHTML = "";
    d.kronoloji.slice().sort(function (a, b) {
      return (a.t || "").localeCompare(b.t || "");
    }).forEach(function (m) {
      var el = document.createElement("div");
      el.className = "olay odak-madde";
      el.innerHTML = '<span class="olay-tarih">' + (m.t || "").slice(0, 10)
        + '</span> <span class="olay-baslik">' + (m.b || "").replace(/</g, "&lt;")
        + "</span>";
      el.addEventListener("click", function () { maddeAc(d, m); });
      liste.appendChild(el);
    });
    var sayac = document.getElementById("olay-sayac");
    if (sayac) sayac.textContent = d.kronoloji.length + " madde";
  }

  // ---- madde açıklaması: mevcut #olay-bilgi penceresine ----------------
  function maddeAc(d, m) {
    var gi = gunIdx(m.t);
    // 🔴 KAMERA hakemi — `tarihAyarla` oto-zoom'u tetikliyordu ve ~1,9 sn
    // sonra gelen uçuş onu eziyordu (ölçüldü). Bayrak `guncelle()`nin
    // tamamını kapsar; `finally` şart, yoksa bir fırlatma oto-zoom'u kalıcı
    // olarak susturur.
    KAMERA.olayBekliyor = true;
    try { tarihAyarla(gi); } finally { KAMERA.olayBekliyor = false; }
    if (obPanel) {
      obPanel.classList.remove("gizli");
      var bas = document.getElementById("ob-baslik");
      if (bas) bas.textContent = d.ad + " — " + (m.tur || "madde");
      var det = document.getElementById("ob-detay");
      if (det) det.textContent = (m.t || "") + " · " + (m.b || "");
    }
    // 🔴 UÇUŞ HER ZAMAN — `ucus-ac` anahtarına BAĞLANMAZ, ve bu bir ölçümle
    // düzeltildi. İlk yazımda ona bağlamıştım; tarayıcıda sınandı, anahtar
    // kapalıyken `fitBounds` çağrısı 0 çıktı. Sonra anahtarın KENDİ
    // açıklaması okundu: *"SIRADAKİ OLAYA GEÇİLİNCE harita o yeri
    // KENDİLİĞİNDEN ortalar"* — yani o ayar OTOMATİK akış içindir.
    // Kullanıcının bir maddeye elle tıklaması otomatik değildir; tıklamak
    // zaten "beni oraya götür" demektir. Ayarı ona bağlamak, kullanıcının
    // açık isteğini bir tercihe tâbi kılardı.
    // 🔴 21 Ağustos — `yer_id`/`kapsam_genis` (koordinatör görevi ④, M-0879).
    // Emre: *"tüm kronolojilerin haritadaki olay mahallini işaretlememiz
    // lâzım, yoksa uçuş modu saçmalıyor."* Eskiden HER tıklama, madde bir
    // yere mi bağlı yoksa imparatorluk çapında mı olduğuna BAKMADAN doğrudan
    // `devletiYay`e (devletin O GÜNKÜ TÜM gövdesi) gidiyordu — Viyana'ya
    // bağlı bir madde de, imparatorluk çapında bir madde de AYNI kamerayı
    // görüyordu. `olayKonumu()` zaten Osmanlı'nın kendi 821 maddesi için
    // KURULUYDU (`yer_id`→şehir koordinatı, bulanık eşleşme YOK); DEVLETLER
    // kronolojisi de AYNI alanı taşıyor, aynı fonksiyon YENİDEN KULLANILDI.
    // `yer_id` boş/çözülemez İSE (kapsam_genis:true dahil, ayrı bir dal
    // GEREKMİYOR — ikisi de "nokta yok" anlamına geliyor) eski davranışa
    // (devletin gövdesine fitBounds) DÜŞÜLÜR — regresyon yok.
    // 🔴 22 Ağustos — SABİT `zoom: 6.5` KALDIRILDI, madde ODAKLAMA MOTORUNA
    // bağlandı. Ölçüm: bu dal motoru bütünüyle atlıyordu, yani kullanıcının
    // ⚙ ayarları (genişlik-km · hız · süre taban/tavan · hareket biçimi ·
    // kenar payı) devlet kronolojisi sekmesinde HİÇ ETKİ ETMİYORDU.
    // Ve `d.harita` dalı (aşağıda) imparatorluk gövdesine `fitBounds`
    // yapıyor ⇒ ardışık iki maddede z~4 ile z6,5 arasında gidip geliniyordu:
    // Emre'nin *"bir yakın bir uzak"* şikâyetinin BU SEKMEDEKİ hâli.
    // ⚠️ `haritayiOlayaGotur` maddeyi olduğu gibi alıyor (`yer_id`/`yer_kon`/
    // `kapsam_genis` alanları Osmanlı maddeleriyle AYNI) — ayrı bir uyarlama
    // katmanı GEREKMİYOR, aynı fonksiyon yeniden kullanılıyor.
    var hedefYer = m.yer_id ? olayKonumu(m) : null;
    if (hedefYer) {
      try { haritayiOlayaGotur(m, true); } catch (e) { /* harita hazır değil */ }
    } else if (!m.kapsam_genis) {
      // 🔴 22 Ağustos — Osmanlı listesinde uygulanan kuralın AYNISI, ve
      // burada evren daha da büyük. Ölçüldü (26 `KRONOLOJI_*` değişkeni):
      //     toplam madde        2961
      //     yer_id YOK          1225   = %41,4
      //     kapsam_genis         189
      // ⇒ 1036 madde, "imparatorluk çapında olduğu için" DEĞİL, sadece
      //   `yer_id`si yazılmadığı için devletin bütün gövdesine açılıyordu.
      //   Sekmede bir maddeden ötekine geçerken kamera nokta ölçeği ile
      //   imparatorluk ölçeği arasında gidip geliyordu — *"bir yakın bir
      //   uzak"* şikâyetinin bu sekmedeki hâli.
      // 📌 Ve sekme AÇILIRKEN gövde zaten çerçeveleniyor (`render()` →
      //   `devletiYay`), yani kullanıcı devletin bütününü BİR KEZ görüyor.
      //   Her maddede oraya geri sıçramak bilgi eklemiyor, yalnız yoruyor.
      if (obYerYokEl) {
        obYerYokEl.textContent = "📍 Bu maddenin haritada nokta yeri işaretlenmemiş — harita yerinde kaldı.";
      }
    } else {
      // 🔴 `d.harita || d.id` — KÜNYE KİMLİĞİ ile HARİTA KİMLİĞİ AYRI ŞEYLER.
      // Ölçüldü: `habsburg` künyesinin `harita:` alanı **"avusturya"**dır ve
      // gövde o adla kayıtlı; `devletiYay("habsburg")` hiçbir şey bulamıyor,
      // hata da vermiyor, sessizce dönüyordu. 431 künyenin 248'inde `harita:`
      // alanı var ⇒ kusur çoğunluğu vuruyordu. Rusya'da görünmedi, çünkü
      // onun `harita:` alanı `id`siyle aynı — yani TEK ÖRNEKLE SINAMAK
      // bu kusuru kaçırırdı (`§11`: "ölçüm doğru, evren dar").
      // 🔴 24 Ağustos 2026 — `pasif` kipte bu dal da haritayı oynatmaz.
      // Kardeşi `haritayiOlayaGotur` ana kapıdan geçiyor; burası tek
      // başına kalmıştı. Aynı kip, aynı kural: harita bırakıldığı yerde.
      if (!ucusAcik()) {
        if (obYerYokEl) obYerYokEl.textContent =
          "🛩 Pasif kip — harita bıraktığınız yerde duruyor.";
      } else {
        try { devletiYay(d.harita || d.id); } catch (e) { /* sahnede değil */ }
      }
    }
  }

  // ---- Osmanlı'ya (varsayılana) dönüş — olayDom[] GERİ TAKILIR -----------
  // 🔴 KUSURDU ve Emre bildirdi (19 Ağustos 2026): *"osmanlı kronolojisi ve
  // diğer devletleri seçmek için kurcaladım ama osmanlı kronolojisine geri
  // döndüğüm zaman kronoloji maddeleri sütunda görünmedi."*
  // ESKİ HÂLİ `liste.innerHTML=""` + `olaylarGuncelleZorla()` — bu BOŞ
  // KALIYORDU çünkü `olaylarGuncelleZorla` listeyi KURMAZ, var olan
  // `olayDom[]` düğümlerinin vurgusunu tazeler; `innerHTML=""` o düğümleri
  // belgeden KOPARIR. Düğümler SİLİNMEZ, `olayDom[]` hepsini tutar — çare
  // yeniden kurmak değil GERİ TAKMAK (ucuz + dinleyiciler/süzgeç korunur).
  function osmanliListesineDon() {
    liste.innerHTML = "";
    for (var oi = 0; oi < olayDom.length; oi++) liste.appendChild(olayDom[oi]);
    olaylarGuncelleZorla();
    _padisahAsil(suanki);
  }

  // ---- TEK GİRİŞ NOKTASI — odak/ek seçimi hangi kombinasyonda olursa
  // olsun buradan geçer. EK_SECILI BOŞSA davranış BİT BİT ESKİSİYLE AYNI
  // (yeni özellik kullanılmıyorsa hiçbir şey değişmez). ---------------------
  function render() {
    if (EK_SECILI.length) {
      if (ODAK) { kartCiz(ODAK); try { devletiYay(ODAK.harita || ODAK.id); } catch (e) {} }
      else _padisahAsil(suanki);
      birlesikCiz();
    } else if (ODAK) {
      kartCiz(ODAK);
      listeCiz(ODAK);
      try { devletiYay(ODAK.harita || ODAK.id); } catch (e) { /* sahnede değil */ }
    } else {
      osmanliListesineDon();
    }
  }

  // ---- sarmalayıcılar ---------------------------------------------------
  var _padisahAsil = padisahGuncelle;
  padisahGuncelle = function (t) {
    if (EK_SECILI.length) return ODAK ? kartCiz(ODAK) : _padisahAsil(t);
    if (!ODAK) return _padisahAsil(t);
    kartCiz(ODAK);
  };
  var _olaylarAsil = olaylarGuncelle;
  olaylarGuncelle = function (t) {
    if (EK_SECILI.length) { birlesikGuncelle(t); return; }
    if (!ODAK) return _olaylarAsil(t);
    // odaklı listede "geçmiş" vurgusu: o güne kadar akmış maddeler
    var kk = liste.querySelectorAll(".odak-madde");
    var sirali = ODAK.kronoloji.slice().sort(function (a, b) {
      return (a.t || "").localeCompare(b.t || "");
    });
    for (var i = 0; i < kk.length && i < sirali.length; i++)
      kk[i].classList.toggle("gecmis", gunIdx(sirali[i].t) <= t);
  };

  panelDoldur();   // sayfa açılışında liste hazır, Osmanlı ODAK işaretli
  console.log("Atlas: devlet odağı hazır — " + adaylar.length
              + " devlet seçilebilir (Osmanlı + kronolojisi olanlar), tek listede.");
})();

// İlk çizim
guncelle();

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
  for (var i = 0; i < etiketAdaylari.length; i++) {
    var e = etiketAdaylari[i];
    if (e.alan < esik) continue;
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
      { id: "zemin", type: "background", paint: { "background-color": "#a8c8dc" } },
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
      boya: { "fill-color": "#a8c8dc", "fill-opacity": 1 } },
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
      harita.addSource(k.id, { type: "geojson", data: window.ALTLIK[k.kaynak] });
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
  harita.addSource("devlet", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "devlet-dolgu", type: "fill", source: "devlet",
    paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.44 } });
  harita.addLayer({ id: "devlet-cizgi", type: "line", source: "devlet",
    paint: { "line-color": ["get", "renk"], "line-width": 1.5, "line-opacity": 0.85 } });

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
  harita.addSource("imparatorluk", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "imparatorluk-hale", type: "line", source: "imparatorluk",
    layout: { "line-cap": "round", "line-join": "round" },
    // Kalınlık 7 → 3.5 (kullanıcı: "yarı yarıya inceltelim"). Hale dolgunun
    // ALTINDA çizildiği için görünen kısım kalınlığın yarısı; yani ekranda
    // okunan çizgi 3.5 değil ~1.75 px. Sıfıra yaklaşırken kaybolmaması için
    // opaklık 0.95'te bırakıldı.
    paint: { "line-color": "#6d0d1c", "line-width": 3.5, "line-opacity": 0.95 } });

  harita.addSource("vassal", { type: "geojson", data: bosVeri() });
  // ⚠️ Renk yakınlaştırıldı (kullanıcı: "vassal devletlerin kırmızısı sadece bir
  // ton açık renk olmalı, burada kırmızı ve pembe olacak şekilde fark büyük,
  // ayrı devlet gibi görünüyorlar"). Eski: #d4707d @0.52 — Osmanlı #8e0b22
  // @0.68'e karşı hem ton hem doygunluk atlıyordu. Yeni ton aynı aileden.
  harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
    paint: { "fill-color": "#b2384a", "fill-opacity": 0.60 } });
  // Kesikli çizgi KALDIRILDI: "ayrı devlet" algısını en çok o üretiyordu.
  // Tâbi toprağın dış hattı artık imparatorluk halesinden geliyor.

  harita.addSource("osmanli", { type: "geojson", data: bosVeri() });
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
  harita.addSource("serbest", { type: "geojson", data: bosVeri() });
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
  harita.addSource("bolge", { type: "geojson", data: bosVeri() });
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
  harita.addSource("seferler", { type: "geojson", data: bosVeri() });
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
  harita.addSource("devir", { type: "geojson", data: bosVeri() });
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
  harita.addSource("isgal", { type: "geojson", data: bosVeri() });
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
    var kacBenek = 0, kacSoru = 0;
    kayitlar.forEach(function (k) {
      var c = cinsler[k.cins];
      var gosterim = c && c.gosterim;
      if (gosterim !== "benek" && gosterim !== "soru") return; // "bos" -> hiç çizilmez
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
      if (gosterim === "benek") kacBenek++; else kacSoru++;
    });
    console.log("Atlas: boşluğun cinsi — " + kacBenek + " benek (kabile) · " + kacSoru + " soru (veri-yok) çizildi.");
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
  lejantDurum(localStorage.getItem("lejantKapali") === "1");
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
  //   zoom < 4.0  → yalnız d3 (başkentler: İstanbul, Bursa, Edirne, Kahire…)
  //   4.0 - 5.2   → d3 + d2
  //   5.2 - 6.3   → d3 + d2 + d1
  //   > 6.3       → hepsi (geçici işaretler dahil)
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
  function etiketTazele() {
    if (etiketBekleyen) return;
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
  sehirOncelik.forEach(function (mi) {
    var m = sehirler[mi];
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
  // hiç çizilmedi (`harita.getStyle()` undefined, WebGL başlamıyor), o
  // yüzden elemeyi ateşleyip göremedim. Kural yine de değiştirildi, çünkü
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
  var ti = s.fi !== undefined ? s.ti : gunIdx(s.t) + 45;
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
    var aktif = m.fi <= t && t < m.ti;
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

// ---------- Otomatik yakınlaştırma ----------
// Oynatma sırasında titremeyi önlemek için: görünüm yeni sınırları zaten makul
// oranda kapsıyorsa veya son ayardan 900 ms geçmediyse yeniden çerçevelenmez.
var otoZoom = true;
var sonZoomZamani = 0;
function zoomUygula(d) {
  if (!otoZoom || !haritaHazir) return;
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
  div.addEventListener("click", function () {
    tarihAyarla(o.gi);
    obGoster(o);
    haritayiOlayaGotur(o);
  });
  olayListe.appendChild(div);
  olayDom.push(div);
});

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
var sonKaydirma = 0;
function olaylarGuncelle(t) {
  var lo = 0, hi = olaylar.length - 1, yeni = -1;
  while (lo <= hi) {                          // gi <= t olan son olay (ikili arama)
    var orta = (lo + hi) >> 1;
    if (olaylar[orta].gi <= t) { yeni = orta; lo = orta + 1; } else { hi = orta - 1; }
  }
  if (yeni === sonVurgulanan) return;
  var a = Math.max(0, Math.min(yeni, sonVurgulanan));
  var b = Math.min(olaylar.length - 1, Math.max(yeni, sonVurgulanan));
  if (sonVurgulanan < 0) { a = 0; b = olaylar.length - 1; }
  for (var i = a; i <= b; i++) olayDom[i].classList.toggle("gecmis", olaylar[i].gi <= t);
  if (sonVurgulanan >= 0) olayDom[sonVurgulanan].classList.remove("simdiki");
  var sayacEl = document.getElementById("olay-sayac");
  if (sayacEl) {
    // ⚠️ Süzgeç açıkken gizlenen sayısı YAZILIR. Yoksa sayaç "994 başlık" der,
    // listede 905 satır görünür ve aradaki fark sessiz kalır — kullanıcı
    // eksikliği kusur sanar. Görünen her değişikliğin sayısı da görünmeli.
    var gizli = +(sayacEl.dataset.gizli || 0);
    sayacEl.textContent = (yeni + 1) + " / " + olaylar.length + " başlık" +
                          (gizli ? "  ·  " + gizli + " gizli" : "");
  }
  if (yeni >= 0) {
    olayDom[yeni].classList.add("simdiki");
    var simdi = Date.now();
    if (!zamanlayici || simdi - sonKaydirma > 700) {
      sonKaydirma = simdi;
      // ⚠️ scrollIntoView BÜTÜN kaydırılabilir ATALARI kaydırır — `html` dâhil.
      // 7 Ağustos 2026: zaman çubuğu oynarken belge 217px kaydı ve ÜST BAR
      // ekranın dışına çıktı; kullanıcı "butonlar görünmüyor, panel butonunun
      // yarısı görünüyor" dedi. Asıl çare css/style.css'te (`html`e de
      // overflow:hidden), ama burada da kaynağı kesiyoruz: liste kabını ELLE
      // kaydırmak hiçbir atayı etkilemez.
      var _kap = olayDom[yeni].parentElement;
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
        _kap.scrollTop += olayDom[yeni].getBoundingClientRect().top
                          - _kap.getBoundingClientRect().top;
      } else {
        olayDom[yeni].scrollIntoView({ block: "nearest", behavior: zamanlayici ? "auto" : "smooth" });
      }
    }
  }
  sonVurgulanan = yeni;
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
                harita.flyTo({ center: [s.lon, s.lat], zoom: 6.2, duration: 900 });
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
          harita.flyTo({ center: [y.lon, y.lat], zoom: 6.2, duration: 900 });
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
var tarihGoster = document.getElementById("tarih-goster");
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
  tarihGoster.textContent = idxYazi(suanki);
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
  devletGuncelle(suanki);
  sehirGuncelle(suanki);
  savasGuncelle(suanki);
  seferGuncelle(suanki);
  koridorGuncelle(suanki);
  devirGuncelle(suanki);
  isgalGuncelle(suanki);
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
  });
  if (i < 0 || i === obSonIndeks) return;
  obSonIndeks = i;
  obGoster(olaylar[i]);
}

function tarihAyarla(t) {
  suanki = Math.max(BASLANGIC, Math.min(BITIS, t));
  kaydirici.value = suanki;
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
  });
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
harita.on("moveend", function () { tuvalOlc(); baslikDamgala(); });
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
function padisahEslesmesi(ad) {
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
      tarihAyarla(kardes.gi);
      obGoster(kardes);
      haritayiOlayaGotur(kardes);
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
  if (kart.tur === "magazin") return kart.t === o.t;
  var liste = kart.olay || kart.baglanti || [];
  return liste.indexOf(o.t) >= 0;
}
var EKOKUMA_TUR = {
  "sebep-sonuc": { etiket: "🔗 Sebep-Sonuç", kaynak: function () { return window.EKOKUMA || []; } },
  "magazin":     { etiket: "🎭 Magazin",     kaynak: function () { return window.EKOKUMA || []; } },
  "merak":       { etiket: "❓ Merak",        kaynak: function () { return window.MERAK || []; } }
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
    var eslesen = EKOKUMA_TUR[tur].kaynak().filter(function (k) { return k.tur === tur && ekKartBagliMi(k, o); });
    if (!eslesen.length) return;
    var b = document.createElement("button");
    b.className = "ob-ek-btn";
    b.textContent = EKOKUMA_TUR[tur].etiket + (eslesen.length > 1 ? " (" + eslesen.length + ")" : "");
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
      tarihAyarla(olaylar[i].gi);
      obGoster(olaylar[i]);
      haritayiOlayaGotur(olaylar[i]);
    };
    adimla();
    zamanlayici = setInterval(adimla, bekleme);
  } else {
    var gunSn = parseInt(hizSec.value, 10);
    var adim = Math.max(1, Math.round(gunSn / 16));
    zamanlayici = setInterval(function () {
      if (suanki >= BITIS) { oynatDurdur(); return; }
      tarihAyarla(suanki + adim);
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
document.getElementById("btn-panel").addEventListener("click", function () {
  var yp = document.getElementById("yanpanel");
  var katli = yp.classList.toggle("katli");
  this.textContent = katli ? "⇤ Panel" : "⇥ Panel";
  // p2/H-0006: panel katlanınca kronoloji tamamen kaybolmasın diye alttaki
  // özet şerit açılıyor; panel geri açılınca şerit gereksiz, kapanıyor.
  if (kronolojiSerit) {
    kronolojiSerit.classList.toggle("gizli", !katli);
    if (katli) kronolojiSeritGuncelle();
  }
  setTimeout(function () { harita.resize(); }, 60);
});

// 🔴 PANEL GENİŞLİĞİ — İKİ KADEME (Emre, 19 Ağustos 2026)
// *"sağ alt bölüm genişliği şimdiki genişlik ve dar gösterim olarak iki
//  kademe olsun ve dar gösterim şimdiki genişliğin %60'ı kadar olsun.
//  geniş ve dar gösterim ayarlanabilsin."*
// Genişliğin kendisi CSS'te (`#yanpanel` / `#yanpanel.dar`); burada yalnız
// sınıf ve TERCİH var. Tercih `localStorage`ta, çünkü projede lejant
// (`lejantKapali`), duygu (`duyguAc`) ve uçuş (`ucusAc`) ayarları da böyle
// duruyor — kullanıcı her açılışta yeniden daraltmak zorunda kalmasın.
var btnPanelGenislik = document.getElementById("btn-panel-genislik");
function panelGenislikUygula(dar) {
  document.getElementById("yanpanel").classList.toggle("dar", dar);
  // Metin BULUNDUĞU kipi değil, TIKLAYINCA GİDİLECEK kipi yazar — "⇥ Panel"
  // düğmesindeki desenin aynısı (katlıyken "⇤ Panel" yazıyor).
  btnPanelGenislik.textContent = dar ? "↔ Geniş" : "↔ Dar";
  btnPanelGenislik.classList.toggle("etkin", dar);
  btnPanelGenislik.setAttribute("aria-pressed", String(dar));
}
// ⚠️ Bu satır haritadan SONRA koşuyor (harita js/app.js:549'da kuruluyor,
// bu blok ~4380'de). Yani kayıtlı tercih dar ise kabın genişliği harita
// kurulduktan SONRA değişiyor ⇒ resize ŞART, yoksa tuval eski genişlikte
// kalıp sağda boşluk bırakıyor. Ölçmedim: MapLibre 4.7.1'in kendi
// ResizeObserver'ı bunu zaten yakalar mı — yakalasa da ikinci bir resize
// zararsız, yakalamazsa tek çare bu.
panelGenislikUygula(localStorage.getItem("panelDar") === "1");
if (localStorage.getItem("panelDar") === "1") {
  setTimeout(function () { harita.resize(); }, 60);
}
btnPanelGenislik.addEventListener("click", function () {
  var dar = !document.getElementById("yanpanel").classList.contains("dar");
  panelGenislikUygula(dar);
  localStorage.setItem("panelDar", dar ? "1" : "0");
  setTimeout(function () { harita.resize(); }, 60);
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

// §⑧③ — Emre: "çok yaklaşıyor, etrafı göremiyorum." Sürgü zoom SAYISI
// gösteriyordu, insan zoom sayısıyla düşünmüyor. Gerçek km'yi MapLibre'nin
// KENDİ döşeme dönüşümüyle (512px, 256 DEĞİL — Google/Bing'in eski 256px
// kuralı burada YANLIŞ sonuç verir, ölçüldü ve düzeltildi: aradaki fark tam
// 2× çıkıyordu) hesaplıyoruz — `harita.getBounds()` ile ampirik doğrulandı.
function yakinlikKm(zoom) {
  var lat = harita.getCenter().lat;
  var genislikPx = harita.getContainer().offsetWidth || 973;
  var metrePerPiksel = Math.cos(lat * Math.PI / 180) * 2 * Math.PI * 6378137 / (512 * Math.pow(2, zoom));
  return Math.round(metrePerPiksel * genislikPx / 1000);
}
// Ölçülmüş çapa noktaları (gerçek şehir/bölge çiftleri arası haversine
// mesafesi — TAHMİN EDİLMEDİ): bir şehir ~66 km (İstanbul metropolü),
// bir sancak ~141 km (Bosna sancağı), Batı Anadolu ~521 km (Çanakkale-
// Antalya), Anadolu ~1.499 km (Çanakkale-Iğdır), imparatorluk ~3.306 km
// (Viyana kapıları-Basra).
var YAKINLIK_CAPA = [
  { km: 66, ad: "bir şehir" }, { km: 141, ad: "bir sancak" },
  { km: 521, ad: "Batı Anadolu" }, { km: 1499, ad: "Anadolu" },
  { km: 3306, ad: "imparatorluk" }
];
function yakinlikEtiket(zoom) {
  var km = yakinlikKm(zoom);
  var enYakin = YAKINLIK_CAPA[0], enKucukFark = Infinity;
  YAKINLIK_CAPA.forEach(function (c) {
    var fark = Math.abs(Math.log(km / c.km));
    if (fark < enKucukFark) { enKucukFark = fark; enYakin = c; }
  });
  var kmYazi = km >= 1000 ? (km / 1000).toFixed(1).replace(".0", "") + " bin km" : km + " km";
  return "~" + kmYazi + " (" + enYakin.ad + " ölçeğinde)";
}

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

var ucusAcEl = document.getElementById("ucus-ac");
var ucusKipEl = document.getElementById("ucus-kip");
var obYerYokEl = document.getElementById("ob-yer-yok");
// Tercihler kalıcı — `lejantKapali`/`panel katli` ile aynı desen.
(function () {
  ucusAcEl.checked = localStorage.getItem("ucusAc") === "1";
  if (localStorage.getItem("ucusKip")) ucusKipEl.value = localStorage.getItem("ucusKip");
  ucusAcEl.addEventListener("change", function () { localStorage.setItem("ucusAc", ucusAcEl.checked ? "1" : "0"); });
  ucusKipEl.addEventListener("change", function () { localStorage.setItem("ucusKip", ucusKipEl.value); });
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
function haritayiOlayaGotur(o) {
  if (!ucusAcEl.checked) { if (obYerYokEl) obYerYokEl.textContent = ""; return; }
  var hedef = olayKonumu(o);
  if (!hedef) {
    sonUcusKonumAnahtari = null;   // genel görünüme düşünce "ayni yer" hafizasi da sifirlanir
    var di = donemBul(o.gi);
    var kenar = +document.getElementById("ayar-kenarpay").value;
    if (di >= 0 && donemler[di].b) {
      var b = donemler[di].b;
      harita.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: kenar, duration: 800 });
      if (obYerYokEl) obYerYokEl.textContent = "📍 Bu olayın haritada nokta yeri yok — imparatorluk görünümüne geçildi.";
    } else if (obYerYokEl) {
      obYerYokEl.textContent = "📍 Bu olayın haritada yeri işaretlenmemiş.";
    }
    return;
  }
  if (obYerYokEl) obYerYokEl.textContent = "";
  var konumAnahtari = hedef.lat.toFixed(3) + "," + hedef.lon.toFixed(3);
  if (konumAnahtari === sonUcusKonumAnahtari) return;   // §⑧④(b) — zaten oradayız
  sonUcusKonumAnahtari = konumAnahtari;

  var simdi = performance.now();
  var hizliGecis = (simdi - sonUcusZamani) < UCUS_HIZLI_ESIK_MS;
  sonUcusZamani = simdi;

  var yakinlik = +document.getElementById("ayar-yakinlik").value;
  var ofset = haritaOfseti();
  if (ucusKipEl.value === "ani" || hizliGecis) {
    // KİP A — tak diye, animasyonsuz. §⑧④(c): uçuş kipindeyken de hızlı
    // art arda geçişte aynı yola düşer, yarım kalmış uçuşların titremesini
    // önler.
    harita.jumpTo({ center: [hedef.lon, hedef.lat], zoom: yakinlik, offset: ofset });
  } else {
    // KİP B — uçuş. ⚠️ `flyTo` kendi içinde ÖNCEKİ animasyonu KESER
    // (MapLibre/Mapbox GL'nin belgelenmiş davranışı: yeni bir kamera
    // çağrısı öncekini kuyruğa almaz, DEVRALIR) — ⏭ üst üste basılırsa
    // önceki uçuş yarıda kesilip yenisi başlar, kuyruk OLUŞMAZ. Bu
    // oturumda harita render olmadığı için GÖZLE doğrulanamadı, ilk
    // gerçek kullanımda `⑥` sınaması yapılmalı.
    harita.flyTo({
      center: [hedef.lon, hedef.lat], zoom: yakinlik, offset: ofset,
      curve: +document.getElementById("ayar-irtifa").value,
      speed: +document.getElementById("ayar-hiz").value
    });
  }
}

// ⚙ Ayarlar penceresi — dört sürgü, `#ayarlar-pencere` (`#dizin`in aynı
// modal deseni). Değerler kalıcı, sürgünün yanında sayı olarak da yazılır.
(function () {
  var pencere = document.getElementById("ayarlar-pencere");
  [["ayar-irtifa", "ayarIrtifa"], ["ayar-hiz", "ayarHiz"], ["ayar-kenarpay", "ayarKenarPay"]].forEach(function (p) {
    var girdi = document.getElementById(p[0]);
    var deger = document.getElementById(p[0] + "-deger");
    var kayitli = localStorage.getItem(p[1]);
    if (kayitli) girdi.value = kayitli;
    deger.textContent = girdi.value;
    girdi.addEventListener("input", function () {
      deger.textContent = girdi.value;
      localStorage.setItem(p[1], girdi.value);
    });
  });
  // `ayar-yakinlik` ayrı: etiketi zoom sayısı değil km (§⑧③, yakinlikEtiket).
  var yakinlikGirdi = document.getElementById("ayar-yakinlik");
  var yakinlikDeger = document.getElementById("ayar-yakinlik-deger");
  var yakinlikKayitli = localStorage.getItem("ayarYakinlik");
  if (yakinlikKayitli) yakinlikGirdi.value = yakinlikKayitli;
  yakinlikDeger.textContent = yakinlikEtiket(+yakinlikGirdi.value);
  yakinlikGirdi.addEventListener("input", function () {
    yakinlikDeger.textContent = yakinlikEtiket(+yakinlikGirdi.value);
    localStorage.setItem("ayarYakinlik", yakinlikGirdi.value);
  });
  document.getElementById("btn-ayarlar").addEventListener("click", function () {
    yakinlikDeger.textContent = yakinlikEtiket(+yakinlikGirdi.value);   // acilista harita merkezine gore taze
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
  tarihAyarla(olaylar[suankiOlayI].gi);
  haritayiOlayaGotur(olaylar[suankiOlayI]);
});
document.getElementById("btn-ileri").addEventListener("click", function () {
  olayIndexTazele();
  if (suankiOlayI >= olaylar.length - 1) { tarihAyarla(BITIS); return; }
  suankiOlayI++;
  tarihAyarla(olaylar[suankiOlayI].gi);
  haritayiOlayaGotur(olaylar[suankiOlayI]);
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
(function odakKur() {
  var kunye = window.DEVLETLER || [];
  if (!kunye.length) return;
  var ODAK = null;                     // null = Osmanlı (varsayılan)
  var liste = document.getElementById("olay-listesi");
  var sec = document.getElementById("odak-devlet");
  if (!sec || !liste) return;

  // ---- seçenekler: YALNIZ kronolojisi olan devletler --------------------
  // 39 künyenin kronolojisi boş (hepsi Amerika: Arjantin · Cherokee ·
  // Cahokia · Haudenosaunee…). Onları listelemek, tıklayınca boş panel
  // açılan bir seçenek sunmak olurdu — "yok" ile "boş" ekranda aynı görünür.
  var adaylar = kunye.filter(function (d) {
    return d.kronoloji && d.kronoloji.length;
  }).sort(function (a, b) { return a.ad.localeCompare(b.ad, "tr"); });
  adaylar.forEach(function (d) {
    var o = document.createElement("option");
    o.value = d.id;
    o.textContent = d.ad + " (" + (d.kronoloji.length) + ")";
    sec.appendChild(o);
  });

  function bul(id) {
    for (var i = 0; i < kunye.length; i++) if (kunye[i].id === id) return kunye[i];
    return null;
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
    tarihAyarla(gi);                       // zaman çubuğu o güne gider
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
    // 🔴 `d.harita || d.id` — KÜNYE KİMLİĞİ ile HARİTA KİMLİĞİ AYRI ŞEYLER.
    // Ölçüldü: `habsburg` künyesinin `harita:` alanı **"avusturya"**dır ve
    // gövde o adla kayıtlı; `devletiYay("habsburg")` hiçbir şey bulamıyor,
    // hata da vermiyor, sessizce dönüyordu. 431 künyenin 248'inde `harita:`
    // alanı var ⇒ kusur çoğunluğu vuruyordu. Rusya'da görünmedi, çünkü
    // onun `harita:` alanı `id`siyle aynı — yani TEK ÖRNEKLE SINAMAK
    // bu kusuru kaçırırdı (`§11`: "ölçüm doğru, evren dar").
    try { devletiYay(d.harita || d.id); } catch (e) { /* sahnede değil */ }
  }

  // ---- sarmalayıcılar ---------------------------------------------------
  var _padisahAsil = padisahGuncelle;
  padisahGuncelle = function (t) {
    if (!ODAK) return _padisahAsil(t);
    kartCiz(ODAK);
  };
  var _olaylarAsil = olaylarGuncelle;
  olaylarGuncelle = function (t) {
    if (!ODAK) return _olaylarAsil(t);
    // odaklı listede "geçmiş" vurgusu: o güne kadar akmış maddeler
    var kk = liste.querySelectorAll(".odak-madde");
    var sirali = ODAK.kronoloji.slice().sort(function (a, b) {
      return (a.t || "").localeCompare(b.t || "");
    });
    for (var i = 0; i < kk.length && i < sirali.length; i++)
      kk[i].classList.toggle("gecmis", gunIdx(sirali[i].t) <= t);
  };

  sec.addEventListener("change", function () {
    ODAK = sec.value ? bul(sec.value) : null;
    if (ODAK) {
      kartCiz(ODAK);
      listeCiz(ODAK);
      try { devletiYay(ODAK.harita || ODAK.id); } catch (e) { /* sahnede değil */ }
      console.log("Atlas: odak → " + ODAK.ad + " · "
                  + ODAK.kronoloji.length + " kronoloji maddesi");
    } else {
      // ---- Osmanlı'ya dönüş -------------------------------------------
      // 🔴 KUSURDU ve Emre bildirdi (19 Ağustos 2026): *"osmanlı kronolojisi
      // ve diğer devletleri seçmek için kurcaladım ama osmanlı kronolojisine
      // geri döndüğüm zaman kronoloji maddeleri sütunda görünmedi."*
      //
      // ESKİ HÂLİ  `liste.innerHTML = ""` + `olaylarGuncelleZorla()`
      // NİÇİN BOŞ KALIYORDU: iki işlev BAŞKA ŞEY yapıyor ve adları bunu
      // gizliyor. `olaylarGuncelleZorla` listeyi KURMAZ — var olan
      // `olayDom[]` düğümlerinin `.gecmis`/`.simdiki` VURGUSUNU tazeler.
      // `innerHTML = ""` ise o düğümleri belgeden KOPARIR. Yani kabı
      // boşaltıp, boş kaba "kendini tazele" diyordum.
      //
      // ⚠️ Düğümler SİLİNMİŞ değil KOPARILMIŞTI — `olayDom[]` hâlâ hepsini
      // tutuyor, dinleyicileriyle birlikte. Çare yeniden kurmak değil GERİ
      // TAKMAK: hem ucuz (1223 düğüm yeniden üretilmiyor), hem de tıklama
      // dinleyicileri, süzgecin `.suzuldu` sınıfları ve indeks düzeni
      // aynen korunuyor. Yeniden kursaydım süzgeç seçimi sessizce sıfırlanırdı.
      liste.innerHTML = "";
      for (var oi = 0; oi < olayDom.length; oi++) liste.appendChild(olayDom[oi]);
      olaylarGuncelleZorla();
      _padisahAsil(suanki);
      console.log("Atlas: odak → Osmanlı (varsayılan) · "
                  + olayDom.length + " madde geri takıldı");
    }
    guncelle();
  });

  console.log("Atlas: devlet odağı hazır — " + adaylar.length
              + " devlet seçilebilir (kronolojisi olanlar).");
})();

// İlk çizim
guncelle();

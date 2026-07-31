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
var _DEVLET_ADI = null;
function devletAdi(id) {
  if (!_DEVLET_ADI) {
    _DEVLET_ADI = {};
    (window.DEVLETLER || []).forEach(function (d) {
      if (!_DEVLET_ADI[d.id]) _DEVLET_ADI[d.id] = d.ad;
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
function parcaCoz(dizi, havuz) {
  if (!dizi) return null;
  return { type: "MultiPolygon",
           coordinates: dizi.map(function (p) {
             return typeof p === "number" ? havuz[p] : p; }) };
}
var PARCALAR = window.PARCALAR || [];

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
           o: parcaCoz(d.o, PARCALAR),
           v: parcaCoz(d.v, PARCALAR),
           // "sb" boşsa hiç yazılmıyor (çoğu dönemde çölle sınırdaşlık yok),
           // yani d.sb undefined olabilir — hatCoz bunu null'a çeviriyor.
           sb: hatCoz(d.sb),
           z: d.z || null };
});

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
           ft: { type: "Feature", properties: { ad: b.ad },
                 geometry: { type: "MultiPolygon", coordinates: b.g } } };
});
function bolgeVerisi(t) {
  return { type: "FeatureCollection",
           features: bolgeler.filter(function (b) { return b.fi <= t && t < b.ti; })
                             .map(function (b) { return b.ft; }) };
}

// Yabancı devlet gövdeleri — data/devletler_harita.js. Her devlet kendi renginde
// boyanır; Osmanlı d/v dönemi aktifken üreteç o hücreleri devletten düşer.
var devletler2 = (window.DEVLET_HARITA || []);
var DEVLET_PARCALAR = window.DEVLET_PARCALAR || [];
devletler2.forEach(function (s) {
  s.dnm.forEach(function (p) {
    p.fi = gunIdx(p.f); p.ti = gunIdx(p.t);
    p.ft = { type: "Feature", properties: { renk: s.renk },
             geometry: parcaCoz(p.g, DEVLET_PARCALAR) };
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
          et.push({ ad: s.ad, c: etiketNoktasi(dis), alan: halkaAlan(dis) });
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

// Çakışma elemesi. MapLibre'nin sembol katmanı çakışmayı kendi çözerdi ama o
// yazı tipi (glyphs) kaynağı ister; bu proje dış bağımlılık almıyor, bu yüzden
// eleme elle yapılıyor: ekrana yansıt, büyükten küçüğe yerleştir, kutusu
// yerleşmişlerden biriyle kesişeni gizle.
// Punto başına ortalama karakter genişliği (600 ağırlık, uppercase, +0.08em
// harf aralığı dahil). Eski sabit 11px'te 5.4px'ti; oran korunuyor ki çakışma
// elemesinin bugüne kadar ayarlanmış davranışı bozulmasın.
var KARAKTER = 5.4 / 11;

function etiketleriYerlestir() {
  devletEtiketleri.forEach(function (m) { m.remove(); });
  devletEtiketleri = [];
  if (!etiketAdaylari.length) return;
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
    devletEtiketleri.push(new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(e.c).addTo(harita));
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
        attribution: "Altlık: Esri World Physical Map | Sınır verisi: historical-basemaps (aourednik)"
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
harita.on("load", function () {
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
  var PX_KM = ["/", ["^", 2, ["zoom"]], 67.8];
  var U = ["coalesce", ["get", "u"], 60];          // veri yoksa 60 km varsayılan
  var YER_GENISLIK = ["*", U, PX_KM];
  var YER_BULANIK  = ["*", U, PX_KM, 0.85];
  var YER_CEKIRDEK = ["*", U, PX_KM, 0.35];
  var YER_CBULANIK = ["*", U, PX_KM, 0.28];
  harita.addSource("serbest", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "serbest-hale", type: "line", source: "serbest",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#8e0b22", "line-width": YER_GENISLIK,
             "line-blur": YER_BULANIK, "line-opacity": 0.45 } });
  harita.addLayer({ id: "serbest-cekirdek", type: "line", source: "serbest",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#8e0b22", "line-width": YER_CEKIRDEK,
             "line-blur": YER_CBULANIK, "line-opacity": 0.5 } });

  // Bölge (eyalet) iç sınırları: ince kesikli çizgi, yakınlaşınca görünür
  harita.addSource("bolge", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "bolge-cizgi", type: "line", source: "bolge", minzoom: 5.2,
    paint: { "line-color": "#5a3a24", "line-width": 0.9, "line-opacity": 0.5,
             "line-dasharray": [2, 3] } });

  // Fetret Devri şehzade payları — her şehzade kendi renginde
  harita.addSource("sehzade", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "sehzade-dolgu", type: "fill", source: "sehzade",
    paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.62 } });
  harita.addLayer({ id: "sehzade-cizgi", type: "line", source: "sehzade",
    paint: { "line-color": ["get", "renk"], "line-width": 2.2 } });

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
    '<span><i style="background:none;border-top:2px dashed #5a3a24;height:0;align-self:center"></i> Bölge sınırı (yakınlaşınca)</span>' +
    '<span><i style="background:linear-gradient(90deg,#8877b8,#4e7d46,#4f7d4f,#b5885b)"></i> Komşu devletler (kendi renkleri)</span>' +
    '<span id="alan-goster"></span>';
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

  var rozet = document.createElement("div");
  rozet.className = "taslak-rozet";
  rozet.textContent = "Sınırlar akademik atlas verisine dayalıdır; yaklaşıktır, doğrulama sürüyor";
  document.getElementById("harita").appendChild(rozet);

  haritaHazir = true;
  aktifDonem = -1;
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
  }
  harita.on("zoom", zoomSinifi);
  window.zoomEsigi = zoomEsigi;
  zoomSinifi();
  guncelle();
});

function bosVeri() { return { type: "FeatureCollection", features: [] }; }

// ---------- Fetret Devri şehzade payları ----------
var sehzadeEtiketleri = [];        // aktif HTML etiket işaretleri

function cokgenMerkezi(coords) {    // en büyük parçanın kaba ağırlık merkezi
  var enBuyuk = null, enBuyukAlan = -1;
  coords.forEach(function (poly) {
    var r = poly[0], alan = 0;
    for (var i = 0, j = r.length - 1; i < r.length; j = i++) {
      alan += (r[j][0] * r[i][1] - r[i][0] * r[j][1]);
    }
    alan = Math.abs(alan / 2);
    if (alan > enBuyukAlan) { enBuyukAlan = alan; enBuyuk = r; }
  });
  if (!enBuyuk) return null;
  var x = 0, y = 0;
  enBuyuk.forEach(function (p) { x += p[0]; y += p[1]; });
  return [x / enBuyuk.length, y / enBuyuk.length];
}

function sehzadeGuncelle(d) {
  if (!haritaHazir) return;
  sehzadeEtiketleri.forEach(function (m) { m.remove(); });
  sehzadeEtiketleri = [];
  if (!d.z || !d.z.length) {
    harita.getSource("sehzade").setData(bosVeri());
    return;
  }
  var fs = d.z.map(function (k) {
    return { type: "Feature", properties: { ad: k.a, renk: k.r },
             geometry: { type: "MultiPolygon", coordinates: k.g } };
  });
  harita.getSource("sehzade").setData({ type: "FeatureCollection", features: fs });
  d.z.forEach(function (k) {
    var merkez = cokgenMerkezi(k.g);
    if (!merkez) return;
    var dis = document.createElement("div");
    var ic = document.createElement("div");
    ic.className = "sehzade-etiket";
    ic.style.borderColor = k.r;
    ic.innerHTML = '<b></b><span></span>';
    ic.children[0].textContent = k.a;
    ic.children[1].textContent = "≈ " + Math.round(k.km / 1000) + " bin km²";
    dis.appendChild(ic);
    var mk = new maplibregl.Marker({ element: dis, anchor: "center" })
               .setLngLat(merkez).addTo(harita);
    sehzadeEtiketleri.push(mk);
  });
}
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
            // damgası. Geçici işaret olarak saysaydık atlas açılır açılmaz 883 etiket
            // birden belirip 550 gün ekranda kalırdı — düzeltmeye çalıştığımız
            // kalabalığın ta kendisi.
            if (dn.f === EPOK_DAMGASI && y.g === 0) return;
            pencereler.push({ f: dn.f, t: dn.t, d: Math.max(y.g, 1),
                              b: y.g === 3, y: alan === "d" ? dn.y : undefined });
          });
        });
        pencereler.sort(function (a, b) { return a.f < b.f ? -1 : a.f > b.f ? 1 : 0; });
        return { ad: y.ad, tur: y.tur, lat: y.lat, lon: y.lon, gecici: y.g === 0,
                 go: y.go,   // önemin söndüğü gün (isteğe bağlı)
                 k: pencereler };
      })
  : (window.SEHIRLER || []);

var sehirler = ISARET_KAYNAK.map(function (s) {
  var dis = document.createElement("div");
  var ic = document.createElement("div");
  ic.className = "sehir";
  ic.innerHTML = '<span class="s-nokta"></span><span class="s-yontem"></span><span class="s-ad"></span>';
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
           yontemEl: ic.querySelector(".s-yontem"), ekli: false,
           mk: new maplibregl.Marker({ element: dis, anchor: "left", offset: [-5, 0] })
                 .setLngLat([s.lon, s.lat]),
           kayitlar: s.k.map(function (r) {
             return { fi: gunIdx(r.f), ti: gunIdx(r.t), d: r.d, b: !!r.b, y: r.y || "" };
           }) };
});

// Ediniliş yöntemi simgeleri (fetihten sonra ~1,5 yıl gösterilir)
var YONTEM_SIMGE = { savas: "⚔", kusatma: "♜", antlasma: "📜", vassal: "🤝" };
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
function olayYeriKur() {
  OLAY_YERI = olaylar.map(function (o) {
    var metin = ((o.yer || "") + " " + (o.b || ""));
    var liste = [];
    for (var i = 0; i < sehirler.length; i++) {
      // Parantezli karşılık da eşleşsin: "Bapheus (Koyunhisar)" → "Bapheus"
      var ad = sehirler[i].s.ad.split(" (")[0];
      if (ad.length >= 4 && metin.indexOf(ad) >= 0) liste.push(i);
    }
    return liste;
  });
}

function sehirGuncelle(t) {
  if (!haritaHazir) return;
  if (!OLAY_YERI) olayYeriKur();

  // O an sahnede olan maddelerin andığı yerleşimler — savaş işaretleriyle aynı
  // pencere kuralı (bir sonraki maddeye kadar, taban 60 tavan 365 gün).
  var anilan = {};
  for (var oi = 0; oi < olaylar.length; oi++) {
    var o = olaylar[oi];
    if (o.gi > t) break;                       // liste tarihe göre sıralı
    if (o.sure === undefined) o.sure = sonrakiOlayaKadar(o.gi);
    if (t < o.gi + o.sure) {
      var L = OLAY_YERI[oi];
      for (var li = 0; li < L.length; li++) anilan[L[li]] = true;
    }
  }

  sehirler.forEach(function (m, mi) {
    var aktif = null;
    for (var i = 0; i < m.kayitlar.length; i++) {
      var r = m.kayitlar[i];
      if (r.fi <= t && t < r.ti) { aktif = r; break; }
    }
    // Geçici işaret: yalnız el değiştirme penceresinde görünür (genel kural).
    // ⚠️ AMA maddede adı geçiyorsa pencere kapalı olsa da görünür — "konu bitince
    // kalkar" kuralının diğer yarısı bu; madde geçince `anilan` boşalıyor.
    if (aktif && m.gecici && t >= aktif.fi + YONTEM_SURE && !anilan[mi]) aktif = null;
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
    if (anilan[mi]) d = Math.max(d, 2);
    if (d < zoomEsigi()) {
      if (m.ekli) { m.mk.remove(); m.ekli = false; }
      return;
    }

    var sinif = "sehir d" + d + (aktif.b && d >= 3 ? " baskent" : "");
    if (m.ic.className !== sinif) m.ic.className = sinif;
    // Pencere içindeyse: ediniliş yöntemi simgesi (⚔ ♜ 📜 🤝) ve kale ise 🏰.
    // Pencere dışında ikisi de kalkar — kalıcı simge bırakmıyoruz.
    var pencerede = t < aktif.fi + YONTEM_SURE;
    var simge = pencerede
      ? (m.kale ? "🏰" : "") + (aktif.y ? YONTEM_SIMGE[aktif.y] || "" : "")
      : "";
    if (m.yontemEl.textContent !== simge) m.yontemEl.textContent = simge;
    if (!m.ekli) { m.mk.addTo(harita); m.ekli = true; }
  });
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
var SAVAS_TUR_SIMGE = { meydan: "⚔", kusatma: "◎", isyan: "🔥", deniz: "⚓" };
var savasIsaretleri = (window.SAVASLAR || []).filter(function (s) { return s.lat; })
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
  if (!fs.length) { el.style.display = "none"; return; }
  el.style.display = "";
  el.innerHTML = "<b>Antlaşmayla devredilen</b>" + fs.map(function (f) {
    return '<span><i style="background:linear-gradient(45deg,#8e0b22 0 25%,' +
           f.properties.renk + ' 25% 50%,#8e0b22 50% 75%,' +
           f.properties.renk + ' 75% 100%);background-size:8px 8px"></i> ' +
           f.properties.alici + "</span>";
  }).join("");
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
  if (!fs.length) { el.style.display = "none"; return; }
  el.style.display = "";
  // İki lejant aynı köşeye yerleşiyor. Sabit CSS ofseti verirsek devir lejantı
  // yokken arada boşluk kalıyor, varken üst üste biniyorlar. devirGuncelle bu
  // fonksiyondan ÖNCE koştuğu için o kutunun gerçek yüksekliği burada ölçülebilir.
  var dl = document.getElementById("devir-lejant");
  var devirAcik = dl && dl.style.display !== "none" && dl.innerHTML;
  el.style.bottom = devirAcik ? (dl.offsetHeight + 42) + "px" : "34px";
  el.innerHTML = "<b>İşgal altında</b>" + fs.map(function (f) {
    return '<span><i style="background:linear-gradient(-45deg,#8e0b22 0 62%,' +
           f.properties.renk + ' 62% 100%);background-size:8px 8px"></i> ' +
           f.properties.isgalci + "</span>";
  }).join("");
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

var seferler = (window.SEFERLER || []).map(function (s) {
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
  return { fi: gunIdx(s.f), ti: gunIdx(s.t) + 45, ad: s.ad, yol: s.yol,
           renk: renk, tur: (s.tur || "sefer"), ekli: false,
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
  var cizgiler = [];
  seferler.forEach(function (m) {
    var aktif = m.fi <= t && t < m.ti;
    if (aktif) {
      cizgiler.push({ type: "Feature", properties: { renk: m.renk, tur: m.tur },
                      geometry: { type: "LineString", coordinates: m.yol } });
      if (!m.ekli) { m.mk.addTo(harita); m.ad_mk.addTo(harita); m.ekli = true; }
    } else if (m.ekli) { m.mk.remove(); m.ad_mk.remove(); m.ekli = false; }
  });
  harita.getSource("seferler").setData({ type: "FeatureCollection", features: cizgiler });
}

// ---------- Otomatik yakınlaştırma ----------
// Oynatma sırasında titremeyi önlemek için: görünüm yeni sınırları zaten makul
// oranda kapsıyorsa veya son ayardan 900 ms geçmediyse yeniden çerçevelenmez.
var otoZoom = true;
var sonZoomZamani = 0;
function zoomUygula(d) {
  if (!otoZoom || !haritaHazir) return;
  if (zamanlayici) {
    var g = harita.getBounds();
    var kapsiyor = g.getWest() <= d.b[0] && g.getEast() >= d.b[2] &&
                   g.getSouth() <= d.b[1] && g.getNorth() >= d.b[3];
    var oran = (d.b[2] - d.b[0]) / Math.max(0.001, g.getEast() - g.getWest());
    if (kapsiyor && oran > 0.3) return;
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
var akisModu = null;   // aşağıda zaman kontrolü bölümünde atanır
var olayListe = document.getElementById("olay-listesi");
var olaylar = (window.OLAYLAR || []).concat(window.OLAYLAR_EK || [])
                                    .concat(window.OLAYLAR_EK2 || [])
                                    .concat(window.OLAYLAR_EK3 || [])
                                    .concat(window.OLAYLAR_EK4 || [])
                                    .concat(window.OLAYLAR_EK5 || [])
                                    .concat(window.OLAYLAR_EK6 || [])
                                    .concat(window.OLAYLAR_EK7 || [])
                                    .concat(window.OLAYLAR_EK8 || [])
                                    .concat(window.OLAYLAR_EK9 || [])
                                    .concat(window.OLAYLAR_EK10 || [])
                                    .concat(window.OLAYLAR_EK11 || []).map(function (o) {
  var kaba = gunIdx(o.t);
  return Object.assign({ gi: o.t.split("-").length > 2 ? kaba : gunMetniIdx(o.gun, kaba) }, o);
}).sort(function (a, b) { return a.gi - b.gi; });

var olayDom = [];
olaylar.forEach(function (o, i) {
  var div = document.createElement("div");
  div.className = "olay k-" + o.k;
  div.innerHTML = '<div class="o-tarih">' + olayTarihYazi(o) + '</div>' +
                  '<div class="o-baslik"></div>';
  div.lastChild.textContent = o.b;
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
  });
  olayListe.appendChild(div);
  olayDom.push(div);
});

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
    sayacEl.textContent = (yeni + 1) + " / " + olaylar.length + " başlık";
  }
  if (yeni >= 0) {
    olayDom[yeni].classList.add("simdiki");
    var simdi = Date.now();
    if (!zamanlayici || simdi - sonKaydirma > 700) {
      sonKaydirma = simdi;
      olayDom[yeni].scrollIntoView({ block: "center", behavior: zamanlayici ? "auto" : "smooth" });
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
var TUR_ADI = { padisah:"Padişahlar", sadrazam:"Sadrazamlar", "vezir-pasa":"Vezirler ve Paşalar",
  komutan:"Komutanlar", denizci:"Denizciler", alim:"Âlimler", hanedan:"Hanedan",
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
  } else if (sekme === "devletler") {
    var DEVLET_TUR_ADI = { imparatorluk:"İmparatorluklar", sultanlik:"Sultanlıklar", devlet:"Devletler",
      hanlik:"Hanlıklar", krallik:"Krallıklar", cumhuriyet:"Cumhuriyetler", prenslik:"Prenslikler",
      dukalik:"Dükalıklar", beylik:"Anadolu Beylikleri", ocaklik:"Kuzey Afrika Ocakları",
      hanedanlik:"Özerk Hanedanlıklar", "gecici-isgal":"Geçici İşgaller / Statü Değişimleri" };
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
  } else {
    (window.SERILER || []).forEach(function (s) {
      var say = (window.SAVASLAR || []).filter(function (x) { return x.seri === s.id; }).length;
      satir(s.aralik, s.ad + (say ? " (" + say + " kayıtlı muharebe)" : ""), s.ozet);
    });
  }
}
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
    sehzadeGuncelle({});
    donemEtiketi.textContent = "Fetret Devri — şehzade payları";
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
    sehzadeGuncelle(d);
    donemEtiketi.textContent = d.ad;
    var alanEl = document.getElementById("alan-goster");
    if (alanEl) {
      if (d.z && d.z.length) {
        var toplam = d.z.reduce(function (s, k) { return s + k.km; }, 0);
        alanEl.textContent = "📐 " + alanYazi(toplam) + " (şehzade payları)";
      } else {
        alanEl.textContent = "📐 " + alanYazi(d.ao) +
          (d.av ? "  (+" + alanYazi(d.av).replace("≈ ", "") + " bağlı)" : "");
      }
    }
    zoomUygula(d);
  }
  devletGuncelle(suanki);
  sehirGuncelle(suanki);
  savasGuncelle(suanki);
  seferGuncelle(suanki);
  devirGuncelle(suanki);
  isgalGuncelle(suanki);
  padisahGuncelle(suanki);
  olaylarGuncelle(suanki);
}

function tarihAyarla(t) {
  suanki = Math.max(BASLANGIC, Math.min(BITIS, t));
  kaydirici.value = suanki;
  guncelle();
}

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
// En çok öz ad örtüşen kaydı seçer. İki tarafta da birden çok öz ad varsa tek
// ortak kelime (ör. "Paşa"sı atılmış "Mehmed") yeterli sayılmaz.
function kisiBul(ad) {
  var t = ad.trim().toLowerCase();
  var tw = ozAdlar(ad);
  var liste = window.KISILER || [];
  var enIyi = null, enIyiSkor = 0;
  for (var i = 0; i < liste.length; i++) {
    if (liste[i].ad.toLowerCase() === t) return liste[i];
    var kw = ozAdlar(liste[i].ad);
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
    var gerekli = Math.min(tw.length, kw.length) >= 2 ? 2 : 1;
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

function obGoster(o) {
  document.getElementById("ob-tarih").textContent = o.gun || idxYazi(o.gi);
  document.getElementById("ob-baslik").textContent = o.b;

  var meta = document.getElementById("ob-meta");
  meta.innerHTML = "";
  if (o.yer) { var y = document.createElement("span"); y.textContent = "📍 " + o.yer; meta.appendChild(y); }
  var kat = document.createElement("span"); kat.className = "ob-kat k-" + o.k;
  kat.textContent = o.k; meta.appendChild(kat);

  // Görsel: olayda adı geçen padişah varsa onun portresi, yoksa dönemin padişahı
  var gorsel = document.getElementById("ob-gorsel");
  gorsel.innerHTML = "";
  var pad = null;
  if (o.kisiler) {
    var adlar = o.kisiler.split(",");
    for (var i = 0; i < adlar.length && !pad; i++) pad = padisahEslesmesi(adlar[i]);
  }
  if (!pad) pad = padisahBul(o.gi);
  if (pad && !pad.ozel) {
    var img = new Image();
    img.src = "assets/portreler/" + pad.id + ".jpg";
    img.alt = pad.ad;
    img.onerror = function () { gorsel.innerHTML = '<span class="ob-rozet">☾</span>'; };
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
  obPanel.classList.remove("gizli");
}

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

function sonrakiOlayIndex(t) {
  for (var i = 0; i < olaylar.length; i++) if (olaylar[i].gi > t) return i;
  return -1;
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
      var i = sonrakiOlayIndex(suanki);
      if (i < 0) { oynatDurdur(); return; }
      tarihAyarla(olaylar[i].gi);
      obGoster(olaylar[i]);
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
  yp.classList.toggle("katli");
  this.textContent = yp.classList.contains("katli") ? "⇤ Panel" : "⇥ Panel";
  setTimeout(function () { harita.resize(); }, 60);
});

// Otomatik yakınlaştırma düğmesi
var btnZoom = document.getElementById("btn-zoom");
btnZoom.addEventListener("click", function () {
  otoZoom = !otoZoom;
  btnZoom.classList.toggle("pasif", !otoZoom);
  if (otoZoom && aktifDonem >= 0) zoomUygula(donemler[aktifDonem]);
});

// Önceki / sonraki olaya atla
document.getElementById("btn-geri").addEventListener("click", function () {
  for (var i = olaylar.length - 1; i >= 0; i--) {
    if (olaylar[i].gi < suanki) { tarihAyarla(olaylar[i].gi); return; }
  }
  tarihAyarla(BASLANGIC);
});
document.getElementById("btn-ileri").addEventListener("click", function () {
  for (var i = 0; i < olaylar.length; i++) {
    if (olaylar[i].gi > suanki) { tarihAyarla(olaylar[i].gi); return; }
  }
  tarihAyarla(BITIS);
});

// Klavye: ←→ gün (Shift: yıl), boşluk oynat/durdur
document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
  if (e.key === "ArrowRight") { tarihAyarla(suanki + (e.shiftKey ? 365 : 1)); e.preventDefault(); }
  else if (e.key === "ArrowLeft") { tarihAyarla(suanki - (e.shiftKey ? 365 : 1)); e.preventDefault(); }
  else if (e.key === " ") { oynatDurdur(); e.preventDefault(); }
});

// İlk çizim
guncelle();

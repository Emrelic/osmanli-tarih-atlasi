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
var donemler = window.DONEMLER.map(function (d) {
  return { fi: gunIdx(d.f), ti: gunIdx(d.t), ad: d.ad, b: d.b, ao: d.ao,
           av: d.av || 0, e: d.e || [], c: d.c || [],
           o: parcaCoz(d.o, PARCALAR),
           v: parcaCoz(d.v, PARCALAR),
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

// Bir halkanın işaretli alanı (derece²); enlem düzeltmesiyle kabaca km²'ye orantılı
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
    var g = e.ad.length * 5.4 + 8, y = 15;          // kaba kutu ölçüsü
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
    paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.30 } });
  harita.addLayer({ id: "devlet-cizgi", type: "line", source: "devlet",
    paint: { "line-color": ["get", "renk"], "line-width": 1.1, "line-opacity": 0.65 } });

  harita.addSource("vassal", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
    paint: { "fill-color": "#c96a4a", "fill-opacity": 0.42 } });
  harita.addLayer({ id: "vassal-cizgi", type: "line", source: "vassal",
    paint: { "line-color": "#a34d22", "line-width": 1.4, "line-dasharray": [3, 2] } });

  harita.addSource("osmanli", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "osmanli-dolgu", type: "fill", source: "osmanli",
    paint: { "fill-color": "#8e0b22", "fill-opacity": 0.68 } });
  // Petek modunda iç çizgiler görünmesin diye çizgi katmanı yok; dolgu kendi
  // dış hattını fill-outline ile verir (aynı renk komşu petekte kaybolur).
  harita.addLayer({ id: "osmanli-cizgi", type: "line", source: "osmanli",
    paint: { "line-color": "#4d0713", "line-width": 1.8 } });

  // Bölge (eyalet) iç sınırları: ince kesikli çizgi, yakınlaşınca görünür
  harita.addSource("bolge", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "bolge-cizgi", type: "line", source: "bolge", minzoom: 5.2,
    paint: { "line-color": "#5a3a24", "line-width": 0.9, "line-opacity": 0.5,
             "line-dasharray": [2, 3] } });

  // Fetret Devri şehzade payları — her şehzade kendi renginde
  harita.addSource("sehzade", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "sehzade-dolgu", type: "fill", source: "sehzade",
    paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.5 } });
  harita.addLayer({ id: "sehzade-cizgi", type: "line", source: "sehzade",
    paint: { "line-color": ["get", "renk"], "line-width": 2.2 } });

  harita.addSource("seferler", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "sefer-cizgi", type: "line", source: "seferler",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#2b1006", "line-width": 2.6, "line-dasharray": [1.5, 1.5] } });

  var lejant = document.createElement("div");
  lejant.className = "lejant";
  lejant.innerHTML =
    '<span><i style="background:#8e0b22"></i> Doğrudan Osmanlı toprağı</span>' +
    '<span><i style="background:#c96a4a"></i> Bağlı / özerk topraklar</span>' +
    '<span><i style="background:none;border-top:2px dashed #5a3a24;height:0;align-self:center"></i> Bölge sınırı (yakınlaşınca)</span>' +
    '<span><i style="background:linear-gradient(90deg,#8877b8,#4e7d46,#4f7d4f,#b5885b)"></i> Komşu devletler (kendi renkleri)</span>' +
    '<span id="alan-goster"></span>';
  document.getElementById("harita").appendChild(lejant);

  var rozet = document.createElement("div");
  rozet.className = "taslak-rozet";
  rozet.textContent = "Sınırlar akademik atlas verisine dayalıdır; yaklaşıktır, doğrulama sürüyor";
  document.getElementById("harita").appendChild(rozet);

  haritaHazir = true;
  aktifDonem = -1;
  // yakınlaşınca küçük şehir adları da görünsün
  function zoomSinifi() {
    document.getElementById("harita").classList.toggle("yakin", harita.getZoom() >= 5.2);
  }
  harita.on("zoom", zoomSinifi);
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
var ISARET_KAYNAK = (window.YERLESIMLER && window.YERLESIMLER.length)
  ? window.YERLESIMLER.filter(function (y) { return y.g > 0 && y.d && y.d.length; })
      .map(function (y) {
        return { ad: y.ad, tur: y.tur, lat: y.lat, lon: y.lon,
                 k: y.d.map(function (dn) {
                   return { f: dn.f, t: dn.t, d: y.g, b: y.g === 3, y: dn.y };
                 }) };
      })
  : (window.SEHIRLER || []);

var sehirler = ISARET_KAYNAK.map(function (s) {
  var dis = document.createElement("div");
  var ic = document.createElement("div");
  ic.className = "sehir";
  ic.innerHTML = '<span class="s-nokta"></span><span class="s-yontem"></span><span class="s-ad"></span>';
  ic.querySelector(".s-ad").textContent = (s.tur === "kale" ? "🏰 " : "") + s.ad;
  dis.appendChild(ic);
  return { s: s, ic: ic, yontemEl: ic.querySelector(".s-yontem"), ekli: false,
           mk: new maplibregl.Marker({ element: dis, anchor: "left", offset: [-5, 0] })
                 .setLngLat([s.lon, s.lat]),
           kayitlar: s.k.map(function (r) {
             return { fi: gunIdx(r.f), ti: gunIdx(r.t), d: r.d, b: !!r.b, y: r.y || "" };
           }) };
});

// Ediniliş yöntemi simgeleri (fetihten sonra ~1,5 yıl gösterilir)
var YONTEM_SIMGE = { savas: "⚔", kusatma: "♜", antlasma: "📜", vassal: "🤝" };
var YONTEM_SURE = 550;   // gün

function sehirGuncelle(t) {
  if (!haritaHazir) return;
  sehirler.forEach(function (m) {
    var aktif = null;
    for (var i = 0; i < m.kayitlar.length; i++) {
      var r = m.kayitlar[i];
      if (r.fi <= t && t < r.ti) { aktif = r; break; }
    }
    if (!aktif) {
      if (m.ekli) { m.mk.remove(); m.ekli = false; }
      return;
    }
    var sinif = "sehir d" + aktif.d + (aktif.b ? " baskent" : "");
    if (m.ic.className !== sinif) m.ic.className = sinif;
    var simge = (aktif.y && t < aktif.fi + YONTEM_SURE) ? YONTEM_SIMGE[aktif.y] || "" : "";
    if (m.yontemEl.textContent !== simge) m.yontemEl.textContent = simge;
    if (!m.ekli) { m.mk.addTo(harita); m.ekli = true; }
  });
}

// ---------- Savaş yerleri (⚔) ve sefer okları ----------
var SAVAS_PENCERE = 730;                     // muharebe işareti ~2 yıl görünür
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
    return { gi: gunIdx(s.t), sure: (s.sure || SAVAS_PENCERE), ekli: false,
             mk: new maplibregl.Marker({ element: dis, anchor: "center" })
                   .setLngLat([s.lon, s.lat]) };
  });

function savasGuncelle(t) {
  if (!haritaHazir) return;
  savasIsaretleri.forEach(function (m) {
    var goster = t >= m.gi && t < m.gi + m.sure;
    if (goster && !m.ekli) { m.mk.addTo(harita); m.ekli = true; }
    else if (!goster && m.ekli) { m.mk.remove(); m.ekli = false; }
  });
}

var seferler = (window.SEFERLER || []).map(function (s) {
  var son = s.yol[s.yol.length - 1], onceki = s.yol[s.yol.length - 2];
  // ok başının dönüşü: son parçanın ekran yönü (kuzeyden saat yönünde derece)
  var dx = (son[0] - onceki[0]) * Math.cos(son[1] * Math.PI / 180);
  var dy = son[1] - onceki[1];
  var aci = Math.atan2(dx, dy) * 180 / Math.PI;
  var el = document.createElement("div");
  var ic = document.createElement("div");
  ic.className = "sefer-ok";
  ic.textContent = "➤";
  el.appendChild(ic);
  // ⚠️ Ok'un ADI yoktu. Bir sefer birkaç kronoloji maddesi boyunca sürdüğü için
  // (Katalan Kumpanyası 1303-09 → 1305-06, arada Sakarya seferi maddesi var)
  // kullanıcı okun neye ait olduğunu anlayamıyordu. Ad ok başına yazılıyor;
  // dönüş ok'a uygulandığı için yazı ayrı bir işaretle, dönüşsüz konuyor.
  return { fi: gunIdx(s.f), ti: gunIdx(s.t) + 45, ad: s.ad, yol: s.yol, ekli: false,
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
      cizgiler.push({ type: "Feature", properties: {},
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
                                    .concat(window.OLAYLAR_EK7 || []).map(function (o) {
  var kaba = gunIdx(o.t);
  return Object.assign({ gi: o.t.split("-").length > 2 ? kaba : gunMetniIdx(o.gun, kaba) }, o);
}).sort(function (a, b) { return a.gi - b.gi; });

var olayDom = [];
olaylar.forEach(function (o, i) {
  var div = document.createElement("div");
  div.className = "olay k-" + o.k;
  div.innerHTML = '<div class="o-tarih">' + idxYazi(o.gi) + '</div>' +
                  '<div class="o-baslik"></div>';
  div.lastChild.textContent = o.b;
  div.addEventListener("click", function () {
    if (akisModu && akisModu.value === "olay") { tarihAyarla(o.gi); obGoster(o); }
    else detayAc(i);
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
      satir(idxYazi(gunIdx(s.t)), s.ad + " — " + s.taraf, isaret,
            function () { dizinPencere.classList.add("gizli"); tarihAyarla(gunIdx(s.t)); });
    });
  } else if (sekme === "antlasmalar") {
    (window.ANTLASMALAR || []).forEach(function (a) {
      satir(idxYazi(gunIdx(a.t)), a.ad + " — " + a.taraf, a.ozet,
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
    harita.getSource("bolge").setData(bosVeri());
    sehzadeGuncelle({});
    donemEtiketi.textContent = "Fetret Devri — şehzade payları";
    var alanBos = document.getElementById("alan-goster");
    if (alanBos) alanBos.textContent = "📐 tek gövde yok — paylar ayrı ayrı";
  } else if (haritaHazir && di >= 0 && di !== aktifDonem) {
    aktifDonem = di;
    var d = donemler[di];
    harita.getSource("osmanli").setData(d.o ? tekVeri(d.o) : petekVerisi(d));
    harita.getSource("vassal").setData(d.v ? tekVeri(d.v) : bosVeri());
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
    kutu("Muharebe", sv.ad + " · karşı taraf: " + sv.taraf + " · sonuç: " +
         (sv.sonuc === "zafer" ? "Osmanlı zaferi" : sv.sonuc === "yenilgi" ? "Osmanlı yenilgisi" : "belirsiz") +
         (seri ? " · dizi: " + seri.ad : ""));
  }
  var an = (window.ANTLASMALAR || []).filter(function (a) {
    return Math.abs(gunIdx(a.t) - o.gi) < 60 && o.b.indexOf(a.ad.split(" (")[0]) >= 0;
  })[0];
  if (an) kutu("Antlaşma hükmü", an.taraf + " ile · " + an.ozet);
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

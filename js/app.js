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

var BASLANGIC = gunIdx("1299-01-01");
var BITIS     = gunIdx("1923-10-29");

// ---------- Dönem verisi ----------
var donemler = window.DONEMLER.map(function (d) {
  return { fi: gunIdx(d.f), ti: gunIdx(d.t), ad: d.ad, b: d.b, ao: d.ao, av: d.av,
           o: { type: "MultiPolygon", coordinates: d.o },
           v: { type: "MultiPolygon", coordinates: d.v } };
});
function donemBul(t) {
  for (var i = 0; i < donemler.length; i++) {
    if (donemler[i].fi <= t && t < donemler[i].ti) return i;
  }
  return t < donemler[0].fi ? 0 : donemler.length - 1;
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
  harita.addSource("vassal", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "vassal-dolgu", type: "fill", source: "vassal",
    paint: { "fill-color": "#d98a63", "fill-opacity": 0.38 } });
  harita.addLayer({ id: "vassal-cizgi", type: "line", source: "vassal",
    paint: { "line-color": "#a34d22", "line-width": 1.4, "line-dasharray": [3, 2] } });

  harita.addSource("osmanli", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "osmanli-dolgu", type: "fill", source: "osmanli",
    paint: { "fill-color": "#b3122f", "fill-opacity": 0.55 } });
  harita.addLayer({ id: "osmanli-cizgi", type: "line", source: "osmanli",
    paint: { "line-color": "#4d0713", "line-width": 2.2 } });

  harita.addSource("seferler", { type: "geojson", data: bosVeri() });
  harita.addLayer({ id: "sefer-cizgi", type: "line", source: "seferler",
    layout: { "line-cap": "round", "line-join": "round" },
    paint: { "line-color": "#2b1006", "line-width": 2.6, "line-dasharray": [1.5, 1.5] } });

  var lejant = document.createElement("div");
  lejant.className = "lejant";
  lejant.innerHTML =
    '<span><i style="background:#b3122f"></i> Doğrudan Osmanlı toprağı</span>' +
    '<span><i style="background:#d98a63"></i> Bağlı / özerk topraklar</span>' +
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
function tekVeri(geo) { return { type: "FeatureCollection",
  features: geo.coordinates.length ? [{ type: "Feature", properties: {}, geometry: geo }] : [] }; }

// ---------- Şehir işaretleri (koordinat hassasiyetli; tarihe göre belirir/vurgulanır) ----------
// ÖNEMLİ: dış öğe MapLibre'nindir (konum sınıfları/transform'u oradadır) — ona
// dokunulmaz. Vurgu sınıfları yalnızca iç öğeye (.sehir) uygulanır; aksi hâlde
// işaretler konumunu kaybedip rastgele yerlere savrulur.
var sehirler = (window.SEHIRLER || []).map(function (s) {
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
var savasIsaretleri = (window.SAVASLAR || []).filter(function (s) { return s.lat; })
  .map(function (s) {
    var dis = document.createElement("div");
    var ic = document.createElement("div");
    ic.className = "savas-isaret " + (s.sonuc || "belirsiz");
    ic.innerHTML = '<span class="sv-ikon">⚔</span><span class="sv-ad"></span>';
    ic.querySelector(".sv-ad").textContent = s.ad;
    dis.appendChild(ic);
    return { gi: gunIdx(s.t), ekli: false,
             mk: new maplibregl.Marker({ element: dis, anchor: "center" })
                   .setLngLat([s.lon, s.lat]) };
  });

function savasGuncelle(t) {
  if (!haritaHazir) return;
  savasIsaretleri.forEach(function (m) {
    var goster = t >= m.gi && t < m.gi + SAVAS_PENCERE;
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
  return { fi: gunIdx(s.f), ti: gunIdx(s.t) + 45, ad: s.ad, yol: s.yol, ekli: false,
           mk: new maplibregl.Marker({ element: el, anchor: "center", rotation: aci - 90 })
                 .setLngLat(son) };
});

function seferGuncelle(t) {
  if (!haritaHazir) return;
  var cizgiler = [];
  seferler.forEach(function (m) {
    var aktif = m.fi <= t && t < m.ti;
    if (aktif) {
      cizgiler.push({ type: "Feature", properties: {},
                      geometry: { type: "LineString", coordinates: m.yol } });
      if (!m.ekli) { m.mk.addTo(harita); m.ekli = true; }
    } else if (m.ekli) { m.mk.remove(); m.ekli = false; }
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
                                    .concat(window.OLAYLAR_EK2 || []).map(function (o) {
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
    (window.SEHIRLER || []).forEach(function (s) {
      var ilk = s.k[0];
      var koord = s.lat.toFixed(3) + "K, " + s.lon.toFixed(3) + "D";
      satir((s.tur === "kale" ? "🏰 " : "") + s.ad, koord,
            idxYazi(gunIdx(ilk.f)) + " → " + idxYazi(gunIdx(s.k[s.k.length - 1].t)),
            function () {
              dizinPencere.classList.add("gizli");
              otoZoom = false;
              document.getElementById("btn-zoom").classList.add("pasif");
              tarihAyarla(gunIdx(ilk.f));
              harita.flyTo({ center: [s.lon, s.lat], zoom: 6.2, duration: 900 });
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
  if (haritaHazir && di !== aktifDonem) {
    aktifDonem = di;
    var d = donemler[di];
    harita.getSource("osmanli").setData(tekVeri(d.o));
    harita.getSource("vassal").setData(tekVeri(d.v));
    donemEtiketi.textContent = d.ad;
    var alanEl = document.getElementById("alan-goster");
    if (alanEl) {
      alanEl.textContent = "📐 " + alanYazi(d.ao) +
        (d.av ? "  (+" + alanYazi(d.av).replace("≈ ", "") + " bağlı)" : "");
    }
    zoomUygula(d);
  }
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

// Kişi adını KISILER dizininde ara (fotoğraf/biyografi zenginleştirmesi için)
function kisiBul(ad) {
  var t = ad.trim().toLowerCase();
  var liste = window.KISILER || [];
  for (var i = 0; i < liste.length; i++) {
    var k = liste[i].ad.toLowerCase();
    if (k === t || k.indexOf(t) === 0 || t.indexOf(k.split(" ")[0]) === 0) return liste[i];
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
    for (var i = 0; i < adlar.length && !pad; i++) {
      var ad = adlar[i].trim().toLowerCase();
      for (var j = 0; j < window.PADISAHLAR.length; j++) {
        var p = window.PADISAHLAR[j];
        if (!p.ozel && (ad.indexOf(p.ad.split(" (")[0].toLowerCase()) === 0 ||
                        p.ad.toLowerCase().indexOf(ad) === 0)) { pad = p; break; }
      }
    }
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
    o.kisiler.split(",").slice(0, 3).forEach(function (ad) {
      var k = kisiBul(ad);
      if (k) kutu(k.ad, (k.donem ? k.donem + " · " : "") + (k.not || ""));
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

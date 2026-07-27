// ============================================================================
// Osmanlı Tarih Atlası — Faz 0 çekirdek uygulama
// Zaman göstergesi (ay hassasiyeti) -> sınır katmanı + padişah kartı + olay akışı
// ============================================================================

"use strict";

// ---------- Tarih yardımcıları (ayIndeks = yıl*12 + (ay-1)) ----------
var AYLAR = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
             "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

function ayIdx(s) {              // "1453-05" -> indeks
  var p = s.split("-");
  return parseInt(p[0], 10) * 12 + (parseInt(p[1], 10) - 1);
}
function idxYazi(i) {            // indeks -> "Mayıs 1453"
  return AYLAR[i % 12] + " " + Math.floor(i / 12);
}

var BASLANGIC = ayIdx("1299-01");
var BITIS     = ayIdx("1923-10");

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
  center: [29, 40],
  zoom: 4,
  minZoom: 2.5,
  maxZoom: 8,
  attributionControl: { compact: true }
});
harita.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-left");

var haritaHazir = false;
harita.on("load", function () {
  // Vassal katmanı altta (açık ton, kesik çizgi), doğrudan topraklar üstte
  harita.addSource("vassal", { type: "geojson", data: bosVeri() });
  harita.addLayer({
    id: "vassal-dolgu",
    type: "fill",
    source: "vassal",
    paint: { "fill-color": "#d98a63", "fill-opacity": 0.32 }
  });
  harita.addLayer({
    id: "vassal-cizgi",
    type: "line",
    source: "vassal",
    paint: { "line-color": "#a34d22", "line-width": 1.2, "line-dasharray": [3, 2] }
  });

  harita.addSource("osmanli", { type: "geojson", data: bosVeri() });
  harita.addLayer({
    id: "osmanli-dolgu",
    type: "fill",
    source: "osmanli",
    paint: {
      "fill-color": "#b3122f",
      "fill-opacity": 0.42,
      "fill-opacity-transition": { duration: 400 }
    }
  });
  harita.addLayer({
    id: "osmanli-cizgi",
    type: "line",
    source: "osmanli",
    paint: { "line-color": "#6d0a1c", "line-width": 1.6 }
  });

  // Lejant
  var lejant = document.createElement("div");
  lejant.className = "lejant";
  lejant.innerHTML =
    '<span><i style="background:#b3122f"></i> Doğrudan Osmanlı toprağı</span>' +
    '<span><i style="background:#d98a63"></i> Bağlı / özerk topraklar</span>';
  document.getElementById("harita").appendChild(lejant);

  // taslak uyarısı rozeti
  var rozet = document.createElement("div");
  rozet.className = "taslak-rozet";
  rozet.textContent = "Sınırlar akademik atlas verisine dayalıdır; yaklaşıktır, doğrulama sürüyor";
  document.getElementById("harita").appendChild(rozet);

  haritaHazir = true;
  guncelle();
});

function bosVeri() { return { type: "FeatureCollection", features: [] }; }

// Parça -> GeoJSON geometrisi: ya hazır kesit (geo) ya elle çizili halkalar
function parcaGeometri(p) {
  if (p.geo && window.SNAPSHOTS && window.SNAPSHOTS[p.geo]) {
    return { type: "MultiPolygon", coordinates: window.SNAPSHOTS[p.geo] };
  }
  if (p.geo && window.VASSAL_GEO && window.VASSAL_GEO[p.geo]) {
    return { type: "MultiPolygon", coordinates: window.VASSAL_GEO[p.geo] };
  }
  return { type: "MultiPolygon",
           coordinates: p.halkalar.map(function (h) { return [h]; }) };
}

// Aktif tarihe göre bir listedeki geçerli parçaları GeoJSON'a çevir
function aktifVeri(liste, t) {
  var fs = [];
  for (var i = 0; i < liste.length; i++) {
    var p = liste[i];
    if (ayIdx(p.from) <= t && t < ayIdx(p.to)) {
      fs.push({ type: "Feature", properties: { ad: p.ad }, geometry: parcaGeometri(p) });
    }
  }
  return { type: "FeatureCollection", features: fs };
}

function sinirVerisi(t) { return aktifVeri(window.SINIRLAR, t); }
function vassalVerisi(t) { return aktifVeri(window.VASSALLAR || [], t); }

// ---------- Padişah kartı ----------
var portreKutu = document.getElementById("padisah-portre");
var adKutu = document.getElementById("padisah-ad");
var saltanatKutu = document.getElementById("padisah-saltanat");
var sonPadisahId = null;

function padisahGuncelle(t) {
  var aktif = null;
  for (var i = 0; i < window.PADISAHLAR.length; i++) {
    var p = window.PADISAHLAR[i];
    if (ayIdx(p.from) <= t && t < ayIdx(p.to)) { aktif = p; break; }
  }
  if (!aktif) { adKutu.textContent = "—"; saltanatKutu.textContent = ""; return; }

  adKutu.textContent = aktif.ad;
  saltanatKutu.textContent = idxYazi(ayIdx(aktif.from)) + " – " + idxYazi(ayIdx(aktif.to));

  if (sonPadisahId === aktif.id + aktif.ad) return;
  sonPadisahId = aktif.id + aktif.ad;

  // Portre varsa göster, yoksa baş harfli rozet
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

// ---------- Olay akışı ----------
var olayListe = document.getElementById("olay-listesi");
var olaylar = window.OLAYLAR.slice().sort(function (a, b) { return ayIdx(a.t) - ayIdx(b.t); });
var olayDom = [];

olaylar.forEach(function (o, i) {
  var div = document.createElement("div");
  div.className = "olay k-" + o.k;
  div.innerHTML = '<div class="o-tarih">' + idxYazi(ayIdx(o.t)) + '</div>' +
                  '<div class="o-baslik">' + o.b + '</div>';
  div.addEventListener("click", function () { detayAc(i); });
  olayListe.appendChild(div);
  olayDom.push(div);
});

var sonVurgulanan = -1;
function olaylarGuncelle(t) {
  var sonGecmis = -1;
  for (var i = 0; i < olaylar.length; i++) {
    var ot = ayIdx(olaylar[i].t);
    var d = olayDom[i];
    d.classList.toggle("gecmis", ot <= t);
    d.classList.toggle("simdiki", ot === t || (ot < t && (i === olaylar.length - 1 || ayIdx(olaylar[i + 1].t) > t)));
    if (ot <= t) sonGecmis = i;
  }
  // sadece "şimdiki" tek olay vurgulu kalsın
  for (var j = 0; j < olayDom.length; j++) {
    if (j !== sonGecmis) olayDom[j].classList.remove("simdiki");
  }
  if (sonGecmis >= 0 && sonGecmis !== sonVurgulanan) {
    olayDom[sonGecmis].scrollIntoView({ block: "center", behavior: "smooth" });
  }
  sonVurgulanan = sonGecmis;
}

// ---------- Olay detay penceresi ----------
var detayPencere = document.getElementById("olay-detay");
var detayIndex = -1;
function detayAc(i) {
  detayIndex = i;
  var o = olaylar[i];
  document.getElementById("detay-tarih").textContent = o.gun || idxYazi(ayIdx(o.t));
  document.getElementById("detay-baslik").textContent = o.b;

  var meta = document.getElementById("detay-meta");
  meta.innerHTML = "";
  if (o.yer) {
    var y = document.createElement("span");
    y.textContent = "📍 " + o.yer;
    meta.appendChild(y);
  }
  if (o.kisiler) {
    var k = document.createElement("span");
    k.textContent = "👤 " + o.kisiler;
    meta.appendChild(k);
  }

  document.getElementById("detay-metin").textContent = o.d;

  var kaynakEl = document.getElementById("detay-kaynak");
  if (o.kaynak) {
    kaynakEl.href = "https://islamansiklopedisi.org.tr/" + o.kaynak;
    kaynakEl.textContent = "📖 Kaynak: TDV İslâm Ansiklopedisi";
    kaynakEl.style.display = "";
  } else {
    kaynakEl.style.display = "none";
  }
  detayPencere.classList.remove("gizli");
}
document.getElementById("detay-kapat").addEventListener("click", function () {
  detayPencere.classList.add("gizli");
});
detayPencere.addEventListener("click", function (e) {
  if (e.target === detayPencere) detayPencere.classList.add("gizli");
});
document.getElementById("detay-git").addEventListener("click", function () {
  if (detayIndex >= 0) tarihAyarla(ayIdx(olaylar[detayIndex].t));
  detayPencere.classList.add("gizli");
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

function guncelle() {
  tarihGoster.textContent = idxYazi(suanki);
  if (haritaHazir) {
    var veri = sinirVerisi(suanki);
    harita.getSource("osmanli").setData(veri);
    harita.getSource("vassal").setData(vassalVerisi(suanki));
    donemEtiketi.textContent = veri.features.length
      ? veri.features[0].properties.ad
      : "";
  }
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

// Oynat / duraklat — hız: ayda bir adım, saniyede N ay
function oynatDurdur() {
  if (zamanlayici) {
    clearInterval(zamanlayici);
    zamanlayici = null;
    btnOynat.textContent = "▶";
  } else {
    if (suanki >= BITIS) tarihAyarla(BASLANGIC);
    var aylikHiz = parseInt(hizSec.value, 10);           // ay / saniye
    zamanlayici = setInterval(function () {
      if (suanki >= BITIS) { oynatDurdur(); return; }
      tarihAyarla(suanki + 1);
    }, Math.round(1000 / aylikHiz));
    btnOynat.textContent = "⏸";
  }
}
btnOynat.addEventListener("click", oynatDurdur);
hizSec.addEventListener("change", function () {
  if (zamanlayici) { oynatDurdur(); oynatDurdur(); }     // yeni hızla yeniden başlat
});

// Önceki / sonraki olaya atla
document.getElementById("btn-geri").addEventListener("click", function () {
  for (var i = olaylar.length - 1; i >= 0; i--) {
    if (ayIdx(olaylar[i].t) < suanki) { tarihAyarla(ayIdx(olaylar[i].t)); return; }
  }
  tarihAyarla(BASLANGIC);
});
document.getElementById("btn-ileri").addEventListener("click", function () {
  for (var i = 0; i < olaylar.length; i++) {
    if (ayIdx(olaylar[i].t) > suanki) { tarihAyarla(ayIdx(olaylar[i].t)); return; }
  }
  tarihAyarla(BITIS);
});

// Klavye: ← → ay ay, boşluk oynat/durdur
document.addEventListener("keydown", function (e) {
  if (e.target.tagName === "INPUT" || e.target.tagName === "SELECT") return;
  if (e.key === "ArrowRight") { tarihAyarla(suanki + (e.shiftKey ? 12 : 1)); e.preventDefault(); }
  else if (e.key === "ArrowLeft") { tarihAyarla(suanki - (e.shiftKey ? 12 : 1)); e.preventDefault(); }
  else if (e.key === " ") { oynatDurdur(); e.preventDefault(); }
});

// İlk çizim
guncelle();

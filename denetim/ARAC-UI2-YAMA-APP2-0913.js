// PAKET-UI2 · 13 Eylül 2026 · js/app.js ikinci yama — antlaşma farkının GEOMETRİSİ.
// Tarayıcı ölçümü: PETEKLER yalnız `a` (ad) taşıyor, `g` YOK (0/3808) — ilk sürüm
// Karlofça'da "13 bölgenin peteği yok" dedi. Gövde `data/petek_govde.js`te
// (PETEK_GOVDE[i] → PETEK_GOVDE_PARCA indeksleri, sıra PETEKLER ile aynı: 3808/3808,
// boş 1). index.html onu yüklemez; ilk antlaşma açılışında TEK SEFER tembel yüklenir.
// Her [eski, yeni] TAM BİR KEZ geçmeli; değilse hiçbir şey yazılmaz.
"use strict";
const fs = require("fs"), path = require("path");
const YOL = path.join(__dirname, "..", "js", "app.js");
let s = fs.readFileSync(YOL, "utf8");
const CRLF = s.indexOf("\r\n") >= 0;
if (CRLF) s = s.replace(/\r\n/g, "\n");
const Y = [];
const yama = (ad, eski, yeni) => Y.push({ ad, eski, yeni });

yama("petAd",
`    PETEKLER.forEach(function (p, i) { if (p && p.a && p.g && p.g.length) ANT_FARK.petAd[p.a] = i; });`,
`    PETEKLER.forEach(function (p, i) { if (p && p.a) ANT_FARK.petAd[p.a] = i; });`);

yama("yukle-imza",
`function _antlasmaYukle(o) {
  if (ANT_FARK.madde === o) return;
  ANT_FARK.madde = o;
  if (haritaHazir && harita.getSource("antlasma-fark")) {
    harita.getSource("antlasma-fark").setData({ type: "FeatureCollection", features: ANT_FARK.fs || [] });
  }
}`,
`function _antlasmaYukle(o, fs) {
  if (fs) ANT_FARK.fs = fs;
  if (ANT_FARK.madde === o && !fs) return;
  ANT_FARK.madde = o;
  if (haritaHazir && harita.getSource("antlasma-fark")) {
    harita.getSource("antlasma-fark").setData({ type: "FeatureCollection", features: ANT_FARK.fs || [] });
  }
}
// \`data/petek_govde.js\` — tembel, tek sefer, bekleyenler kuyruğu (ekOkumaMerakYukle
// deseni: D029 — erken/sahte "bitti" YOK). ⚠️ Dosya ZAMANSIZ taban geometridir
// (kendi başlığı: kur:/bit: devirlerini taşımaz) — vurgu için yeterli, sınır iddiası değil.
var _PETEK_GOVDE_YUK = { deneniyor: false, bekleyen: [], hata: false };
function _petekGovdeYukle(cb) {
  if (window.PETEK_GOVDE) { cb(); return; }
  _PETEK_GOVDE_YUK.bekleyen.push(cb);
  if (_PETEK_GOVDE_YUK.deneniyor) return;
  _PETEK_GOVDE_YUK.deneniyor = true;
  var damga = (document.querySelector('script[src*="js/app.js"]') || {}).src || "";
  var v = (damga.match(/v=(r\\d+)/) || [])[1];
  var sc = document.createElement("script");
  sc.src = "data/petek_govde.js" + (v ? "?v=" + v : "");
  function bitti() {
    _PETEK_GOVDE_YUK.deneniyor = false;
    var b = _PETEK_GOVDE_YUK.bekleyen; _PETEK_GOVDE_YUK.bekleyen = [];
    b.forEach(function (f) { try { f(); } catch (e) { console.error("[antlaşma farkı]", e); } });
  }
  sc.onload = bitti;
  sc.onerror = function () {
    _PETEK_GOVDE_YUK.hata = true;
    console.warn("[antlaşma farkı] data/petek_govde.js yüklenemedi — bölgeler çizilemedi, metin duruyor");
    bitti();
  };
  document.head.appendChild(sc);
}`);

yama("ozellikler",
`  var Y = window.YERLESIMLER || [], fs = [], eksik = 0, say = {};
  var x0 = 180, y0 = 90, x1 = -180, y1 = -90;
  r.f.degisim.forEach(function (d) {
    var y = Y[d.i];
    var an = _sahipAdi(d.once) + " → " + _sahipAdi(d.sonra);
    say[an] = (say[an] || 0) + 1;
    if (typeof y.lon === "number") { x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat); }
    var pi = ANT_FARK.petAd[y.ad];
    if (pi === undefined) { eksik++; return; }
    fs.push({ type: "Feature", properties: { once: _sahipRengi(d.once), sonra: _sahipRengi(d.sonra), ad: y.ad },
              geometry: { type: "MultiPolygon", coordinates: PETEKLER[pi].g } });
  });
  var kirilma = gunIdx(r.f.gun);
  var ozet = Object.keys(say).sort(function (a, b) { return say[b] - say[a]; })
    .map(function (k) { return k + " " + say[k]; }).join(" · ");
  yazi.textContent = (kirilma === o.gi ? "Aynı gün" : "Haritadaki kırılma " + (kirilma - o.gi) + " gün sonra (" + _khGunYazi(kirilma) + ")") +
    " · " + r.f.degisim.length + " yerleşim bölgesi el değiştirdi: " + ozet +
    (eksik ? " · " + eksik + " bölgenin peteği yok, çizilmedi" : "");
  kutuEl.title = r.f.degisim.map(function (d) { return Y[d.i].ad; }).join(", ");
  ANT_FARK.fs = fs;
`,
`  var Y = window.YERLESIMLER || [], say = {}, liste = [];
  var x0 = 180, y0 = 90, x1 = -180, y1 = -90;
  r.f.degisim.forEach(function (d) {
    var y = Y[d.i];
    var an = _sahipAdi(d.once) + " → " + _sahipAdi(d.sonra);
    say[an] = (say[an] || 0) + 1;
    if (typeof y.lon === "number") { x0 = Math.min(x0, y.lon); x1 = Math.max(x1, y.lon); y0 = Math.min(y0, y.lat); y1 = Math.max(y1, y.lat); }
    liste.push({ pi: ANT_FARK.petAd[y.ad], once: _sahipRengi(d.once), sonra: _sahipRengi(d.sonra), ad: y.ad });
  });
  var kirilma = gunIdx(r.f.gun);
  var ozet = Object.keys(say).sort(function (a, b) { return say[b] - say[a]; })
    .map(function (k) { return k + " " + say[k]; }).join(" · ");
  var anaMetin = (kirilma === o.gi ? "Aynı gün" : "Haritadaki kırılma " + (kirilma - o.gi) + " gün sonra (" + _khGunYazi(kirilma) + ")") +
    " · " + r.f.degisim.length + " yerleşim bölgesi el değiştirdi: " + ozet;
  var fsYerel = [];
  // Bölge geometrisi: PETEK_GOVDE[pi] → PETEK_GOVDE_PARCA poligonları (MultiPolygon).
  function ozellikleriKur() {
    var G = window.PETEK_GOVDE, P = window.PETEK_GOVDE_PARCA, eksik = 0;
    fsYerel = [];
    if (!G || !P) { yazi.textContent = anaMetin + " · bölge sınırları yüklenemedi (data/petek_govde.js)"; return; }
    liste.forEach(function (x) {
      var ix = (x.pi === undefined) ? null : G[x.pi];
      if (!ix || !ix.length) { eksik++; return; }
      fsYerel.push({ type: "Feature", properties: { once: x.once, sonra: x.sonra, ad: x.ad },
                     geometry: { type: "MultiPolygon", coordinates: ix.map(function (j) { return P[j]; }) } });
    });
    yazi.textContent = anaMetin + (eksik ? " · " + eksik + " bölgenin peteği yok, çizilmedi" : "");
  }
  kutuEl.title = r.f.degisim.map(function (d) { return Y[d.i].ad; }).join(", ");
  if (window.PETEK_GOVDE) {
    ozellikleriKur();
  } else {
    yazi.textContent = anaMetin + " · bölge sınırları yükleniyor…";
    _petekGovdeYukle(function () {
      if (!kutuEl.isConnected) return;               // bu arada başka madde açıldı
      ozellikleriKur();
      if (ANT_FARK.madde === o) _antlasmaYukle(o, fsYerel);
    });
  }
  ANT_FARK.fs = fsYerel;
`);

yama("dugme-yukle",
`    b.addEventListener("click", function () {
      _antlasmaYukle(o);`,
`    b.addEventListener("click", function () {
      _antlasmaYukle(o, fsYerel);`);
yama("goster-yukle",
`  ANT_FARK.dugmeler = { once: bOnce, sonra: bSonra };
  _antlasmaYukle(o);`,
`  ANT_FARK.dugmeler = { once: bOnce, sonra: bSonra };
  _antlasmaYukle(o, fsYerel);`);

let hata = 0;
for (const y of Y) { const n = s.split(y.eski).length - 1; if (n !== 1) { console.error("✗", y.ad, "eşleşme", n); hata++; } }
if (hata) { console.error("HİÇBİR ŞEY YAZILMADI"); process.exit(1); }
for (const y of Y) s = s.replace(y.eski, () => y.yeni);
if (CRLF) s = s.replace(/\n/g, "\r\n");
fs.writeFileSync(YOL, s);
console.log("✓", Y.length, "yama");

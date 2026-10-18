// ============================================================================
// ANTLAŞMA HARİTASI — bir barış antlaşması kronoloji maddesi açıldığında,
// "Haritada gör" DÜĞMESİYLE, antlaşmayla bırakılan bölgeleri boyayıp
// etiketleyen geçici katman. Emre, paket 0054 H-0020:
//   "tüm barış anlaşmaları ... kronolojik maddesinde ... haritada alınan
//   verilen bölgelerin boyanması taranması ve üstlerine ... etiketler
//   koyalım ... bu harita sadece o kronoloji maddesinde geçerli olacaktır"
// DALGA-0055 §A madde 1 (1.MURAT, 16 Eylül gece) — Karlofça pilotunun
// GENELLEMESİ: "maddede 'Haritada gör' düğmesi" — İLK sürüm (commit 1f45b2e)
// madde açılır açılmaz OTOMATİK çiziyordu; ~400 antlaşma maddesi olduğu için
// (DALGA-0055 §B ölçümü) otomatik çizim yerine EXPLICIT düğmeye geçildi —
// hem kullanıcı kontrolü hem gereksiz hesap yok.
//
// Veri: window.ANTLASMA_HARITALARI (data/antlasma_haritalari.js) — her kayıt
// bir antlaşmaya bağlı `bolgeler[]` listesi taşır, geometri KENDİ BAŞINA
// üretilmez, `data/hukuki_sinirlar.js` (window.HUKUKI_SINIRLAR, C katmanı)
// kayıtlarından TÜRETİLİR (D023). Şu an TEK kayıt (Karlofça, pilot); veriyi
// GENİŞLETECEK olan D-GEOARAC (DALGA-0055 §B, `denetim/ARAC-ANTLASMA-HARITA-
// 0916.py`) — şema tahtadan netleştirilecek, KOD DEĞİŞMEDEN yeni kayıtları
// okur (`_ahEslesenKayit` window.ANTLASMA_HARITALARI'nin TAMAMINI tarar).
//
// EŞLEŞTİRME app.js'in ZATEN KULLANDIĞI desenle AYNI (app.js:7991-7993,
// `ANTLASMALAR` için): kronoloji maddesinin `b` alanı antlaşma adını
// içeriyor mu + tarih ±60 gün içinde mi.
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// Tek entegrasyon noktası: app.js'in global `obGoster(o)` fonksiyonu
// (madde detay kartını dolduran fonksiyon, app.js:7909) monkey-patch ile
// sarılıyor — d_katman.js'in `guncelle()` sarmalama deseniyle AYNI yöntem.
// `obGoster` HER madde açılışında çağrılır: eşleşme varsa düğme EKLENİR
// (`#ob-ozel`e — app.js'in kendi kutu deseniyle aynı DOM, dokunulmuyor,
// yalnız APPEND ediliyor), yoksa/madde değişince önceki harita TEMİZLENİR.
// "Yalnız o maddede geçerli" şartı böylece korunuyor — düğmeye TIKLANMAMIŞ
// olsa bile madde kapanınca harita zaten hiç açılmamış/temiz kalıyor.
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA. Tahtadan UI'ya istendi — bkz. denetim/ANTLASMA-HARITA-0916.md.
// ============================================================================
"use strict";

function _ahHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}
function _ahHukukiIndeks() {
  var ix = {};
  (window.HUKUKI_SINIRLAR || []).forEach(function (k) { if (k && k.id) ix[k.id] = k; });
  return ix;
}

// ---- EŞLEŞTİRME: açılan kronoloji maddesi bir antlaşma haritasına denk mi? ---
function _ahEslesenKayit(o) {
  if (!o || !o.b || o.gi == null) return null;
  return (window.ANTLASMA_HARITALARI || []).filter(function (a) {
    return a.tarih && Math.abs(gunIdx(a.tarih) - o.gi) < 60 && o.b.indexOf(a.antlasma_ad) >= 0;
  })[0] || null;
}

// ---- BÖLGE GEOMETRİSİ — hukuki_sinirlar kaydından TARAFA düşen kısmı çıkarır ----
// bbox tipi (2 nokta/cetvel — bugün Karlofça'da tek örnek: Sava hattı): C
// katmanının KENDİ `_cKayitGeometrisi`sini kullanır (D023 — geometri ikinci
// kez yazılmaz), dönen iki yarımdan RENK eşleşmesiyle taraf'a ait OLANI seçer
// (`f.properties.renk`, `_cTarafRengi(tarafSirasi[i])` ile AYNI fonksiyonla
// üretildiği için birebir eşleşir — app.js:6079).
function _ahBolgePoligonu(sinirKaydi, taraf) {
  if (typeof _cKayitGeometrisi !== "function" || typeof _cTarafRengi !== "function") return null;
  if (!sinirKaydi || !sinirKaydi.kapsama || sinirKaydi.kapsama.tur !== "bbox") return null;
  var geo = _cKayitGeometrisi(sinirKaydi);
  if (!geo || !geo.dolgu || !geo.dolgu.length) return null;
  var istenenRenk = _cTarafRengi(taraf);
  var f = geo.dolgu.filter(function (x) { return x.properties.renk === istenenRenk; })[0];
  return f ? f.geometry : null;
}
// nokta-kümesi tipi (lehistan/venedik/bosna-kaleler) — kaydın kendi
// `hat.nokta_atamalari`sından, taraf'a atanmış VE koordinatı bilinen noktalar.
function _ahBolgeNoktalari(sinirKaydi, taraf) {
  var na = sinirKaydi && sinirKaydi.hat && sinirKaydi.hat.nokta_atamalari;
  if (!Array.isArray(na)) return [];
  return na.filter(function (n) { return n.taraf === taraf && n.lat != null && n.lon != null; });
}
function _ahCentroid(coords) {
  if (!coords.length) return null;
  var sx = 0, sy = 0;
  coords.forEach(function (c) { sx += c[0]; sy += c[1]; });
  return [sx / coords.length, sy / coords.length];
}
function _ahPoligonCentroid(geom) {
  if (!geom || geom.type !== "Polygon" || !geom.coordinates[0]) return null;
  var ring = geom.coordinates[0].slice(0, -1);   // son nokta ilkinin tekrarı
  return _ahCentroid(ring);
}

// 🆕 POSTIT-101 (Emre, 18 Ekim 2026): "bu yerleri böyle geometrik üçken şeklinde
// değil bölgeleri ile birlikte göstermek lazım. avusturyaya bırakılan yerler
// osmanlıya bırakılan yerler ayrı işaretlemeler ve renkler ile ... tüm
// anlaşmalarda". İki değişiklik:
// ① BÖLGE = YERLEŞİMİN PETEĞİ. Kaynakta adıyla anılan her yerin, haritanın
//   kendi motorunun verdiği peteği (`PETEK_GOVDE`, isyan taraması ve tâbi iç
//   sınırıyla AYNI tembel havuz) boyanır. Dışbükey kabuk (`zarf`) ÜÇ noktada
//   üçgen çıkıyor ve aradaki el değiştirmemiş yerleri (Zitvatorok: Budin,
//   Peşte, İstolni Belgrad) "bırakılan" gibi gösteriyordu — artık YALNIZ
//   petek bulunamayan bölgede yedek olarak çizilir.
//   Nokta → yerleşim eşleşmesi koordinatla (≤ 10 km, adı tutan önce): kayıttaki
//   adlar yerleşim adıyla birebir değil ("Vaç (Vác Kalesi)" ↔ "Vaç (Vác)").
// ② RENK HARİTA RENGİ DEĞİL, AYIRT EDİCİ RENK. Eski `_cTarafRengi("osmanli")`
//   haritadaki Osmanlı kırmızısıydı: Osmanlı toprağının üstünde görünmüyordu.
//   Her taraf için sabit bir işaret rengi; bir antlaşmada iki taraf aynı renge
//   düşerse sıradaki boş renk verilir. Düğmenin altında renk açıklaması çıkar.
var _AH_TARAF_RENK = {
  osmanli: "#f08c00", habsburg: "#1864ab", avusturya: "#1864ab", "macaristan-habsburg": "#1864ab",
  venedik: "#2b8a3e", rusya: "#7048e8", lehistan: "#c2255c", safevi: "#0c8599",
  kirim: "#a61e4d", "tbmm-turkiye": "#e03131", prusya: "#495057"
};
var _AH_YEDEK_RENK = ["#f08c00", "#1864ab", "#2b8a3e", "#7048e8", "#c2255c", "#0c8599", "#5c940d", "#862e9c"];
function _ahRenkleriAta(kayit) {
  var kullanilan = {}, sonuc = {};
  (kayit.bolgeler || []).forEach(function (b) {
    if (sonuc[b.taraf]) return;
    var r = _AH_TARAF_RENK[b.taraf];
    if (!r || kullanilan[r]) r = _AH_YEDEK_RENK.filter(function (x) { return !kullanilan[x]; })[0] || "#495057";
    kullanilan[r] = true; sonuc[b.taraf] = r;
  });
  return sonuc;
}
var _AH_PET = { adIx: null };
function _ahYerlesimPetegi(lon, lat, ad) {
  var G = window.PETEK_GOVDE, PP = window.PETEK_GOVDE_PARCA;
  if (!G || !PP || typeof PETEKLER === "undefined") return null;
  if (!_AH_PET.adIx) {
    _AH_PET.adIx = {};
    PETEKLER.forEach(function (q, j) { if (q && q.a) _AH_PET.adIx[q.a] = j; });
  }
  var enIyi = null, enIyiPuan = Infinity, kosLat = Math.cos(lat * Math.PI / 180);
  var kok = String(ad || "").split(" (")[0];
  (window.YERLESIMLER || []).forEach(function (y) {
    if (y.lat == null || y.lon == null || _AH_PET.adIx[y.ad] === undefined) return;
    var dx = (y.lon - lon) * 111.32 * kosLat, dy = (y.lat - lat) * 110.57;
    var km = Math.sqrt(dx * dx + dy * dy);
    if (km > 10) return;
    var puan = km - (kok && String(y.ad).split(" (")[0] === kok ? 100 : 0);
    if (puan < enIyiPuan) { enIyiPuan = puan; enIyi = y; }
  });
  if (!enIyi) return null;
  var ix = G[_AH_PET.adIx[enIyi.ad]];
  if (!ix || !ix.length) return null;
  return { ad: enIyi.ad, geometry: { type: "MultiPolygon", coordinates: ix.map(function (j) { return PP[j]; }) } };
}

// ---- KAYDI HARİTAYA DÖK — bölge başına dolgu + noktalar + tek etiket ---------
function _ahBolgeleriUret(kayit) {
  var ix = _ahHukukiIndeks();
  var dolguFeat = [], noktaFeat = [], etiketFeat = [], lejant = [];
  var renkler = _ahRenkleriAta(kayit);
  (kayit.bolgeler || []).forEach(function (bolge) {
    var renk = renkler[bolge.taraf] || "#495057";
    var etiketAnkraj = null, petekSayisi = 0, petekYok = [];
    // POSTIT-101 ①: noktanın peteğini dolgu olarak ekler; bulamazsa false.
    function petekEkle(n, kayitId) {
      var p = _ahYerlesimPetegi(n.lon, n.lat, n.ad);
      if (!p) { petekYok.push(n.ad); return false; }
      dolguFeat.push({ type: "Feature", properties: { renk: renk, kayit_id: kayitId, etiket: bolge.etiket,
        ad: n.ad, kaynak: n.kaynak || "" }, geometry: p.geometry });
      petekSayisi++;
      // Etiket noktaların ağırlık merkezine DEĞİL ilk boyanan yere: merkez çoğu kez
      // el değiştirmemiş toprağa düşer (Zitvatorok: Eğri-Kanije-Estergon → Budin).
      if (!etiketAnkraj) etiketAnkraj = [n.lon, n.lat];
      return true;
    }
    (bolge.sinir_id || []).forEach(function (sid) {
      var sinirKaydi = ix[sid];
      if (!sinirKaydi) { console.warn("ANTLAŞMA HARİTASI: '" + sid + "' HUKUKI_SINIRLAR'da yok."); return; }
      var poligon = _ahBolgePoligonu(sinirKaydi, bolge.taraf);
      if (poligon) {
        dolguFeat.push({ type: "Feature", properties: { renk: renk, kayit_id: sid, etiket: bolge.etiket }, geometry: poligon });
        if (!etiketAnkraj) etiketAnkraj = _ahPoligonCentroid(poligon);
      }
      var noktalar = _ahBolgeNoktalari(sinirKaydi, bolge.taraf);
      noktalar.forEach(function (n) {
        petekEkle(n, sid);
        noktaFeat.push({
          type: "Feature",
          properties: { renk: renk, ad: n.ad, kaynak: n.kaynak || "", kayit_id: sid, etiket: bolge.etiket },
          geometry: { type: "Point", coordinates: [n.lon, n.lat] }
        });
      });
      if (!etiketAnkraj && noktalar.length) {
        etiketAnkraj = _ahCentroid(noktalar.map(function (n) { return [n.lon, n.lat]; }));
      }
    });
    // 🆕 DALGA-0058 md.3b — `bolge.noktalar` DOĞRUDAN koordinat listesi (HUKUKI_SINIRLAR'da
    // kayıt YOKSA, örn. Pasarofça). `sinir_id` yolunun AYNI özellikleriyle (renk/etiket/kayit_id)
    // üretir, yalnız `kayit_id` burada `null` (hukuki_sinirlar'da bir karşılığı yok — tıklanınca
    // popup yalnız kendi `ad`/`kaynak`ını gösterir, C kaydına referans vermez).
    // 🆕 SIRADA-A-1012 (0066/H-0005, Emre 13 Ekim) — `bolge.zarf:true`: noktalar'ın DIŞ ZARFI
    // (dışbükey kabuk) dolgu olarak da çizilir. Zarf sınır DEĞİL, KAYNAKTA ADIYLA o devlete
    // geçtiği yazılı yerleşimlerin kapladığı çekirdek alandır (muhafazakâr: gerçek pay daha
    // geniş olabilir); kaba kutudan farkı, sonraki paylaşmaların (1793/1795) topraklarını
    // KAPSAMAMASIDIR.
    if (Array.isArray(bolge.noktalar)) {
      bolge.noktalar.forEach(function (n) { if (n.lat != null && n.lon != null) petekEkle(n, null); });
    }
    // POSTIT-101: zarf artık YEDEK — yalnız bu bölgenin hiçbir noktasına petek bulunamadıysa.
    if (bolge.zarf && Array.isArray(bolge.noktalar) && petekSayisi === 0) {
      var _zp = bolge.noktalar.filter(function (n) { return n.lat != null && n.lon != null; })
        .map(function (n) { return [n.lon, n.lat]; }).sort(function (a, b) { return a[0] - b[0] || a[1] - b[1]; });
      var _cz = function (o, a, b) { return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]); };
      var _alt = [], _ust = [];
      _zp.forEach(function (p) {
        while (_alt.length >= 2 && _cz(_alt[_alt.length - 2], _alt[_alt.length - 1], p) <= 0) _alt.pop();
        _alt.push(p);
      });
      _zp.slice().reverse().forEach(function (p) {
        while (_ust.length >= 2 && _cz(_ust[_ust.length - 2], _ust[_ust.length - 1], p) <= 0) _ust.pop();
        _ust.push(p);
      });
      var _halka = _alt.slice(0, -1).concat(_ust.slice(0, -1));
      if (_halka.length >= 3) {
        _halka.push(_halka[0]);
        var _zpoly = { type: "Polygon", coordinates: [_halka] };
        dolguFeat.push({ type: "Feature", properties: { renk: renk, kayit_id: null, etiket: bolge.etiket }, geometry: _zpoly });
        if (!etiketAnkraj) etiketAnkraj = _ahPoligonCentroid(_zpoly);
      }
    }
    if (Array.isArray(bolge.noktalar)) {
      bolge.noktalar.forEach(function (n) {
        if (n.lat == null || n.lon == null) { console.warn("ANTLAŞMA HARİTASI: '" + (n.ad || "?") + "' koordinatsız — atlandı."); return; }
        noktaFeat.push({
          type: "Feature",
          properties: { renk: renk, ad: n.ad, kaynak: n.kaynak || "", kayit_id: null, etiket: bolge.etiket },
          geometry: { type: "Point", coordinates: [n.lon, n.lat] }
        });
      });
      if (!etiketAnkraj && bolge.noktalar.length) {
        etiketAnkraj = _ahCentroid(bolge.noktalar.filter(function (n) { return n.lat != null && n.lon != null; })
          .map(function (n) { return [n.lon, n.lat]; }));
      }
    }
    // 🆕 DALGA-0066 H-0005 — `bolge.kutu` [lon0,lat0,lon1,lat1]: DOĞRUDAN bbox dikdörtgeni,
    // ne `sinir_id` (HUKUKI_SINIRLAR'da kayıt yok) ne `noktalar` (nokta değil, bir BÖLGE) yeterli
    // olduğu durumlar için — Lehistan'ın 1. Paylaşımı gibi, gerçek hat/çizgi kaynağı yok ama en
    // azından kaba bir bölge sınırı (D-KATMAN'ın kendi D_SINIRLAR ailesindeki "D-YOK" araştırma
    // kutularından TÜRETİLDİ, D023 — koordinat kendi başına üretilmedi). Kesinlik AÇIKÇA düşük:
    // etiket + siyah kontur ile "kabaca bu bölge" gösteriyor, hassas sınır İDDİA ETMİYOR.
    if (Array.isArray(bolge.kutu)) {
      var kt = bolge.kutu;
      var poligon = { type: "Polygon", coordinates: [[[kt[0], kt[1]], [kt[2], kt[1]], [kt[2], kt[3]], [kt[0], kt[3]], [kt[0], kt[1]]]] };
      dolguFeat.push({ type: "Feature", properties: { renk: renk, kayit_id: null, etiket: bolge.etiket }, geometry: poligon });
      if (!etiketAnkraj) etiketAnkraj = _ahPoligonCentroid(poligon);
    }
    if (etiketAnkraj) {
      etiketFeat.push({ type: "Feature", properties: { etiket: bolge.etiket, renk: renk },
        geometry: { type: "Point", coordinates: etiketAnkraj } });
    } else {
      console.warn("ANTLAŞMA HARİTASI: '" + bolge.etiket + "' için hiç geometri/nokta bulunamadı — etiket konulamadı.");
    }
    if (petekYok.length) console.warn("ANTLAŞMA HARİTASI: '" + bolge.etiket + "' — peteği bulunamayan: " + petekYok.join(", "));
    lejant.push({ renk: renk, etiket: bolge.etiket, petek: petekSayisi, eksik: petekYok });
  });
  return { dolgu: dolguFeat, nokta: noktaFeat, etiket: etiketFeat, lejant: lejant };
}

// ---- ÇİZ / TEMİZLE -------------------------------------------------------------
var _ahAktifId = null, _ahBekleyen = null;
function _ahTemizle() {
  _ahBekleyen = null;
  if (!_ahHazirMi() || !_ahAktifId) return;
  ["antlasma-harita-dolgu", "antlasma-harita-nokta", "antlasma-harita-etiket"].forEach(function (kaynak) {
    var s = harita.getSource(kaynak);
    if (s) s.setData(bosVeri());
  });
  _ahAktifId = null;
}
// 🆕 KUTU-G3-1014 (0054/H-0020, Emre: "alınan verilen bölgelerin boyanması
// TARANMASI ve üstlerine etiketler") — TARAMA. Her taraf rengi için çalışma
// anında 12×12'lik bir karo üretilir: köşegen şerit taraf renginde, arası
// SAYDAM; böylece altta zayıf düz dolgu + üstte taralı desen okunur ("burası
// bu antlaşmayla el değiştirdi") ve alttaki harita kaybolmaz. app.js'in
// devirDesenleriKur() karosuyla aynı teknik (dış dosya yok, fill-pattern).
// Desen adı renge bağlıdır: aynı renk iki kayıtta bir kez üretilir.
function _ahDesenAdi(renk) {
  return "ah-tarama-" + String(renk || "#8e0b22").replace(/[^0-9a-zA-Z]/g, "");
}
function _ahDesenKur(renk) {
  var ad = _ahDesenAdi(renk);
  if (harita.hasImage && harita.hasImage(ad)) return ad;
  var h = String(renk || "#8e0b22").replace("#", "");
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
  var n = parseInt(h, 16);
  if (isNaN(n)) n = 0x8e0b22;
  var c = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  var K = 12, veri = new Uint8Array(K * K * 4);
  for (var y = 0; y < K; y++) {
    for (var x = 0; x < K; x++) {
      var i = (y * K + x) * 4;
      if (((x + y) % K) < 4) {           // şerit: karonun 1/3'ü
        veri[i] = c[0]; veri[i + 1] = c[1]; veri[i + 2] = c[2]; veri[i + 3] = 235;
      }                                   // değilse 0,0,0,0 — saydam
    }
  }
  harita.addImage(ad, { width: K, height: K, data: veri });
  return ad;
}
// POSTIT-101: petek havuzu (~2 MB) yoksa önce BİR KEZ tembel yüklenir, sonra çizilir.
// `bitti(lejant)` çizim tamamlanınca çağrılır (düğme kutusu açıklamayı basar).
function _ahGoster(kayit, bitti) {
  if (!_ahHazirMi() || !harita.getSource("antlasma-harita-dolgu")) return;
  if (_ahAktifId === kayit.id) return;
  if (!window.PETEK_GOVDE && typeof _petekGovdeYukle === "function" &&
      !(typeof _PETEK_GOVDE_YUK !== "undefined" && _PETEK_GOVDE_YUK.hata)) {
    _ahBekleyen = kayit.id;
    _petekGovdeYukle(function () {
      if (_ahBekleyen !== kayit.id) return;      // bu arada madde değişti / kapatıldı
      _ahBekleyen = null;
      _ahGoster(kayit, bitti);
    });
    return;
  }
  var f = _ahBolgeleriUret(kayit);
  f.dolgu.forEach(function (ft) {
    try { ft.properties.desen = _ahDesenKur(ft.properties.renk); }
    catch (e) { console.warn("ANTLAŞMA HARİTASI: tarama deseni kurulamadı", e); }
  });
  harita.getSource("antlasma-harita-dolgu").setData({ type: "FeatureCollection", features: f.dolgu });
  harita.getSource("antlasma-harita-nokta").setData({ type: "FeatureCollection", features: f.nokta });
  harita.getSource("antlasma-harita-etiket").setData({ type: "FeatureCollection", features: f.etiket });
  _ahAktifId = kayit.id;
  if (bitti) bitti(f.lejant);
}

// ---- KATMAN KURULUMU (kendi "load" dinleyicisi, kalıcı) ------------------------
function _ahKatmaniKur() {
  if (!_ahHazirMi() || harita.getSource("antlasma-harita-dolgu")) return;
  try {
    harita.addSource("antlasma-harita-dolgu", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-dolgu", type: "fill", source: "antlasma-harita-dolgu",
      paint: { "fill-color": ["get", "renk"], "fill-opacity": 0.22 }
    });
    // KUTU-G3-1014 (0054/H-0020): düz dolgunun ÜSTÜNDE taralı desen + taraf renginde kontur.
    // Aynı kaynağı okur; temizleme/gösterme ayrıca bir şey gerektirmez.
    harita.addLayer({
      id: "antlasma-harita-tarama", type: "fill", source: "antlasma-harita-dolgu",
      filter: ["has", "desen"],
      paint: { "fill-pattern": ["get", "desen"], "fill-opacity": 0.9 }
    });
    harita.addLayer({
      id: "antlasma-harita-kontur", type: "line", source: "antlasma-harita-dolgu",
      paint: { "line-color": ["get", "renk"], "line-width": 2.2, "line-opacity": 0.95 }
    });
    harita.addSource("antlasma-harita-nokta", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-nokta", type: "circle", source: "antlasma-harita-nokta",
      paint: { "circle-radius": 7, "circle-color": ["get", "renk"], "circle-stroke-width": 2, "circle-stroke-color": "#1a1a1a" }
    });
    harita.addSource("antlasma-harita-etiket", { type: "geojson", data: bosVeri() });
    harita.addLayer({
      id: "antlasma-harita-etiket", type: "symbol", source: "antlasma-harita-etiket",
      layout: {
        "text-field": ["get", "etiket"], "text-size": 13, "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
        "text-allow-overlap": true
      },
      paint: { "text-color": "#1a1a1a", "text-halo-color": "#ffffff", "text-halo-width": 2 }
    });
    function popupAc(props, lngLat) {
      var satir = "<b>" + ekEsc(props.etiket || "") + "</b>";
      if (props.ad) satir += "<br>" + ekEsc(props.ad);
      if (props.kaynak) satir += "<br><small>" + ekEsc(props.kaynak) + "</small>";
      new maplibregl.Popup({ closeButton: true, maxWidth: "280px" }).setLngLat(lngLat).setHTML(satir).addTo(harita);
    }
    ["antlasma-harita-dolgu", "antlasma-harita-nokta"].forEach(function (lyr) {
      harita.on("click", lyr, function (e) { popupAc(e.features[0].properties, e.lngLat); });
      harita.on("mouseenter", lyr, function () { harita.getCanvas().style.cursor = "pointer"; });
      harita.on("mouseleave", lyr, function () { harita.getCanvas().style.cursor = ""; });
    });
  } catch (e) {
    console.error("ANTLAŞMA HARİTASI kurulamadı:", e);
  }
}
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _ahKatmaniKur);
}

// ---- DÜĞME — "#ob-ozel"e (app.js'in kendi ek-kutu konteyneri) tek buton ekler ---
function _ahDugmeEkle(kayit) {
  var ozel = document.getElementById("ob-ozel");
  if (!ozel) return;
  var kutu = document.createElement("div");
  kutu.className = "ob-kutu";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.style.cursor = "pointer";
  btn.style.padding = "4px 10px";
  btn.style.borderRadius = "4px";
  btn.style.border = "1px solid #0a2f5c";
  btn.style.background = "#fff";
  btn.style.color = "#0a2f5c";
  var KAPALI = "🗺️ Haritada gör — bırakılan bölgeler", ACIK = "✕ Haritadan kaldır";
  btn.textContent = KAPALI;
  // POSTIT-101 ②: renk açıklaması — hangi renk hangi tarafa kalan/bırakılan yer.
  var lej = document.createElement("div");
  lej.style.marginTop = "6px"; lej.style.fontSize = "12px"; lej.style.lineHeight = "1.5";
  lej.hidden = true;
  function lejantBas(L) {
    lej.innerHTML = "";
    (L || []).forEach(function (s) {
      var sat = document.createElement("div");
      var kare = document.createElement("span");
      kare.style.cssText = "display:inline-block;width:12px;height:12px;margin-right:6px;vertical-align:-2px;" +
        "border:2px solid " + s.renk + ";background:" + s.renk + "55";
      sat.appendChild(kare);
      sat.appendChild(document.createTextNode(s.etiket + (s.petek ? " (" + s.petek + " yer)" : "")));
      if (s.eksik && s.eksik.length) {
        var e = document.createElement("small");
        e.style.opacity = "0.7";
        e.textContent = " — bölgesi bulunamayan: " + s.eksik.join(", ");
        sat.appendChild(e);
      }
      lej.appendChild(sat);
    });
    lej.hidden = !(L && L.length);
  }
  btn.addEventListener("click", function () {
    if (_ahAktifId === kayit.id || _ahBekleyen === kayit.id) {
      _ahTemizle();
      lej.hidden = true;
      btn.textContent = KAPALI; btn.style.background = "#fff"; btn.style.color = "#0a2f5c";
    } else {
      btn.textContent = "⏳ Bölgeler yükleniyor…";
      _ahGoster(kayit, function (L) {
        lejantBas(L);
        btn.textContent = ACIK; btn.style.background = "#0a2f5c"; btn.style.color = "#fff";
      });
    }
  });
  kutu.appendChild(btn);
  kutu.appendChild(lej);
  ozel.appendChild(kutu);
}

// ---- obGoster() SARMALAMA — app.js'e dokunmadan "madde açıldı" bağlantısı ------
(function () {
  if (typeof window.obGoster !== "function") {
    console.warn("ANTLAŞMA HARİTASI: window.obGoster bulunamadı — bağlanamadı (script sırası app.js'ten önce mi?).");
    return;
  }
  var _ahEskiObGoster = window.obGoster;
  window.obGoster = function (o) {
    var r = _ahEskiObGoster.apply(this, arguments);
    try {
      _ahTemizle();   // her madde açılışında ÖNCE temizle — bir önceki maddenin
                       // haritası (düğmeye tıklanmış olsun olmasın) kalmasın
      var kayit = _ahEslesenKayit(o);
      if (kayit) _ahDugmeEkle(kayit);
    } catch (e) { console.error("[antlaşma haritası]", e); }
    return r;
  };
})();

// ODAK-ZOOM-1016 — sınav: devlet kronolojisinde toprak ≥ ekranın 1/8'i.
// Koşu:  node denetim/ARAC-ODAK-ZOOM-SINAV-1016.js      (çıkış 0 = hepsi geçti)
//
// İKİ KATMAN, İKİ YÖN:
//   A) SAF HESAP (js/odak_zoom.js) — Web Mercator, dünya genişliği 512·2^z px.
//      Düşmesi gereken yerde düşer + pay ≥ 1/8 + odak ekranda kalır (A1, A2) ·
//      düşmemesi gereken yerde düşmez: büyük gövde (A3, A4) · gövde yok (A5) ·
//      tamamı ekranda küçük gövde (A6). Alan ölçeri analitik değere karşı (A7, A8).
//   B) BAĞLANTI (js/app.js'teki ODAK-ZOOM-1016 bloğu, METNİNDEN kesilip sahte
//      haritayla koşturulur — Python/elle kopya YOK, `odak_cozum.js` dersi):
//      bağlam YOKKEN kamera komutları bit bit geçer (B1) · gezinti kapısında
//      flyTo süzülür (B2) · fitBounds süzülür ve flyTo'ya çevrilirken animasyon
//      seçenekleri korunur (B3) · fitBounds değişmiyorsa asıl fitBounds koşar ve
//      içindeki flyTo İKİNCİ KEZ süzülmez (B4) · ayar KAPALIYKEN dokunulmaz (B5) ·
//      gövde o gün yoksa dokunulmaz (B6) · Osmanlı maddesi kapsam dışı (B7).
//   C) İKİNCİ KURAL, saf (`odakZoomIkili`): ikisi sığıyor ⇒ ikisi birden (C1) ·
//      sığmıyor ⇒ yalnız madde ülkesi ≥ 1/8 (C2) · alt sınır iki yönde (C3) ·
//      ortak kadrajda bölge küçülürse yalnız madde (C4) · nokta bölgesi (C5).
//   D) İKİNCİ KURAL, bağlantı: ilgili ülkenin seçimi — yer sahibi (D1) · madde odak
//      toprağında ⇒ eski kural (D2) · odak_kimlik önceliği (D3) · taraflar (D4) ·
//      tâbi sahibi kimlik kutusuyla (D5) · nokta çevresi (D6) · hiçbiri yok (D7).
"use strict";
var fs = require("fs"), path = require("path"), vm = require("vm");
var KOK = path.join(__dirname, "..");
var OZ = require(path.join(KOK, "js", "odak_zoom.js"));

var gecen = 0, kalan = 0;
function sina(ad, kosul, ayrinti) {
  if (kosul) { gecen++; console.log("  ✓ " + ad + (ayrinti ? "  — " + ayrinti : "")); }
  else { kalan++; console.log("  ✗ " + ad + (ayrinti ? "  — " + ayrinti : "")); }
}
function kare(lon0, lat0, lon1, lat1) {
  return [[[lon0, lat0], [lon1, lat0], [lon1, lat1], [lon0, lat1], [lon0, lat0]]];
}
function ekranda(lon, lat, kam, W, H) {          // nokta kameranın ekranında mı (px)
  var S = 512 * Math.pow(2, kam.zoom);
  var p = OZ.merk(lon, lat), c = OZ.merk(kam.center[0], kam.center[1]);
  var x = (p[0] - c[0]) * S + W / 2, y = (p[1] - c[1]) * S + H / 2;
  return x >= 0 && x <= W && y >= 0 && y <= H;
}
var EKRAN = { width: 1200, height: 800 };

console.log("A) SAF HESAP — js/odak_zoom.js");
// A1 — küçük gövde (1°×1°, Balkan), odak KOMŞU toprakta, yakın zoom
(function () {
  var g = OZ.odakGovdeHazirla([kare(20, 44, 21, 45)]);
  var kam = { center: [22.6, 44.5], zoom: 8 };
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  var dogru = OZ.odakPay(g, OZ.merk(r.center[0], r.center[1])[0], OZ.merk(r.center[0], r.center[1])[1], r.zoom, 1200, 800);
  sina("A1 küçük gövde + yakın zoom ⇒ zoom DÜŞER", r.degisti && r.zoom < kam.zoom,
       "zoom " + kam.zoom + " → " + r.zoom + " · " + r.sebep);
  sina("A1 pay önce < 1/8, sonra ≥ 1/8", r.pay0 < 1 / 8 && r.pay >= 1 / 8 && dogru >= 1 / 8,
       "%" + (100 * r.pay0).toFixed(1) + " → %" + (100 * dogru).toFixed(1));
  sina("A1 odak noktası ekranda kalır", ekranda(22.6, 44.5, r, 1200, 800));
  // en YAKIN zoom: bir adım yukarısı eşiği tutmamalı (aynı merkezle)
  var c = OZ.merk(r.center[0], r.center[1]);
  sina("A1 en az uzaklaşma (0,1 yukarısı eşiğin altında)",
       OZ.odakPay(g, c[0], c[1], r.zoom + 0.1, 1200, 800) < 1 / 8 || r.sebep === "dustu-kaydi");
})();
// A2 — odak gövdeden UZAK (merkez kaydırma gerekir), çok yakın zoom
(function () {
  var g = OZ.odakGovdeHazirla([kare(10, 49.5, 12.5, 51.2)]);
  var kam = { center: [15.0, 50.3], zoom: 9 };
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  var c = OZ.merk(r.center[0], r.center[1]);
  var p = OZ.odakPay(g, c[0], c[1], r.zoom, 1200, 800);
  sina("A2 uzak odak ⇒ zoom düşer, merkez kayar, pay ≥ 1/8",
       r.degisti && r.zoom < 9 && p >= 1 / 8 && r.sebep === "dustu-kaydi",
       "zoom 9 → " + r.zoom + " · %" + (100 * p).toFixed(1) + " · " + r.sebep);
  sina("A2 odak noktası yine ekranda", ekranda(15.0, 50.3, r, 1200, 800));
})();
// A2b — eşik GEOMETRİK olarak ulaşılamaz (küçük gövde, odak uzakta): payın en
// büyük olduğu kamera — zoom düşer, pay ARTAR, odak ekranda kalır, ama YALAN
// söylemez (sebep "en-iyi", pay < 1/8 açıkça döner).
(function () {
  var g = OZ.odakGovdeHazirla([kare(10, 50, 11, 50.7)]);
  var kam = { center: [14.0, 50.3], zoom: 9 };
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  sina("A2b ulaşılamaz eşik ⇒ 'en-iyi': zoom düşer, pay artar, odak ekranda",
       r.sebep === "en-iyi" && r.zoom < 9 && r.pay > r.pay0 && r.pay < 1 / 8 && ekranda(14.0, 50.3, r, 1200, 800),
       "zoom 9 → " + r.zoom + " · %" + (100 * r.pay0).toFixed(1) + " → %" + (100 * r.pay).toFixed(1));
})();
// A3 — büyük gövde (imparatorluk 30°×20°), kamera içeride, yakın zoom
(function () {
  var g = OZ.odakGovdeHazirla([kare(20, 30, 50, 50)]);
  var kam = { center: [35, 40], zoom: 6.5 };
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  sina("A3 büyük gövde ⇒ zoom DEĞİŞMEZ", !r.degisti && r.zoom === 6.5,
       "pay %" + (100 * r.pay0).toFixed(1) + " · " + r.sebep);
})();
// A4 — büyük gövde ekrandan büyük, kenarından bakılıyor ama yine ≥ 1/8
(function () {
  var g = OZ.odakGovdeHazirla([kare(20, 30, 50, 50)]);
  var kam = { center: [50.5, 40], zoom: 6 };     // doğu kıyısı: yarısı gövde
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  sina("A4 imparatorluk kıyısı (pay≈%40) ⇒ DEĞİŞMEZ", !r.degisti, "pay %" + (100 * r.pay0).toFixed(1));
})();
// A5 — gövde yok
(function () {
  var kam = { center: [20, 40], zoom: 8 };
  var a = OZ.odakZoomAlt(kam, null, EKRAN), b = OZ.odakZoomAlt(kam, [], EKRAN),
      c = OZ.odakZoomAlt(kam, [[[]]], EKRAN);
  sina("A5 gövde yok (null · [] · boş halka) ⇒ DEĞİŞMEZ",
       !a.degisti && !b.degisti && !c.degisti && a.zoom === 8 && a.sebep === "govde-yok");
})();
// A6 — küçük şehir devleti TAMAMEN ekranda: uzaklaşmak payı yalnız küçültür
(function () {
  var g = OZ.odakGovdeHazirla([kare(18.0, 42.6, 18.3, 42.75)]);
  var kam = { center: [18.15, 42.67], zoom: 6 };
  var r = OZ.odakZoomAlt(kam, g, EKRAN);
  sina("A6 tamamı ekranda küçük gövde ⇒ DEĞİŞMEZ", !r.degisti && r.sebep === "tam-ekranda",
       "pay %" + (100 * r.pay0).toFixed(2));
})();
// A7 — alan ölçeri: tamamı içeride kare, analitik değer
(function () {
  var g = OZ.odakGovdeHazirla([kare(20, 44, 21, 45)]);
  var c = OZ.merk(20.5, 44.5), z = 7, S = 512 * Math.pow(2, z);
  var a = OZ.merk(20, 45), b = OZ.merk(21, 44);
  var beklenen = ((b[0] - a[0]) * S) * ((b[1] - a[1]) * S) / (1200 * 800);
  var olc = OZ.odakPay(g, c[0], c[1], z, 1200, 800);
  sina("A7 pay = analitik alan (tam içeride)", Math.abs(olc - beklenen) < 1e-9,
       olc.toFixed(6) + " = " + beklenen.toFixed(6));
  // yarısı kesik: merkez karenin sağ kenarında, kare ekrandan büyük ⇒ pay ≈ 0,5
  var c2 = OZ.merk(21, 44.5);
  var olc2 = OZ.odakPay(g, c2[0], c2[1], 10, 1200, 800);
  sina("A7 kırpılmış pay (kenarda) ≈ 0,5", Math.abs(olc2 - 0.5) < 1e-6, olc2.toFixed(6));
})();
// A8 — delikli gövde ve içbükey (L) gövde: sınır kutusu DEĞİL gerçek alan
(function () {
  var dis = [[20, 44], [22, 44], [22, 46], [20, 46], [20, 44]];
  var delik = [[20.5, 44.5], [20.5, 45.5], [21.5, 45.5], [21.5, 44.5], [20.5, 44.5]];
  var g = OZ.odakGovdeHazirla([[dis, delik]]), gTam = OZ.odakGovdeHazirla([[dis]]),
      gDel = OZ.odakGovdeHazirla([[delik]]);
  var c = OZ.merk(21, 45);
  var p = OZ.odakPay(g, c[0], c[1], 6.5, 1200, 800),
      beklenen = OZ.odakPay(gTam, c[0], c[1], 6.5, 1200, 800) - OZ.odakPay(gDel, c[0], c[1], 6.5, 1200, 800);
  sina("A8 delik düşülür", Math.abs(p - beklenen) < 1e-9, p.toFixed(5));
  var L = [[[20, 44], [22, 44], [22, 44.2], [20.2, 44.2], [20.2, 46], [20, 46], [20, 44]]];
  var gL = OZ.odakGovdeHazirla([L]);
  var cL = OZ.merk(21, 45);                       // L'nin iç köşesi — kutunun içi, gövdenin dışı
  var k = OZ.odakPay(gL, cL[0], cL[1], 10, 1200, 800);   // z10: ekran ±0,82° — kollara değmez
  sina("A8 içbükey gövde: sınır kutusunun içi ama gövdenin dışı ⇒ pay 0", k === 0, String(k));
})();

console.log("B) BAĞLANTI — js/app.js ODAK-ZOOM-1016 bloğu (metinden)");
var APP = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8");
var bas = APP.indexOf("// 🆕 ODAK-ZOOM-1016 — DEVLET KRONOLOJİSİNDE TOPRAK");
var son = APP.indexOf("// (`odakZoomAlt` ve `ODAK_ZOOM_SON`", bas);
sina("B0 blok app.js'te bulundu", bas > 0 && son > bas);
sina("B0 gezGit kapıya bağlı (devlet dalı, madde de geçer)",
     /else odakZoomKapisi\(o\.d, gezSuanki, function \(\) \{ maddeAc\(o\.d, o\.m\); \}, o\.m\);/.test(APP));
var BLOK = APP.slice(bas, son);

function ortam(ayarAcik, govdeVar, ek) {
  ek = ek || {};
  var W = 1200, H = 800, kayit = [];
  var harita = {
    _zoom: 8,
    getZoom: function () { return this._zoom; },
    getMinZoom: function () { return 0; },
    flyTo: function (s) { kayit.push(["flyTo", s]); return this; },
    easeTo: function (s) { kayit.push(["easeTo", s]); return this; },
    jumpTo: function (s) { kayit.push(["jumpTo", s]); return this; },
    // MapLibre gibi: fitBounds → cameraForBounds → this.flyTo
    fitBounds: function (b, s) {
      kayit.push(["fitBounds", s]);
      var k = this.cameraForBounds(b, s || {});
      return this.flyTo({ center: k.center, zoom: k.zoom, duration: s && s.duration });
    },
    cameraForBounds: function (b, s) {
      var pad = (s && typeof s.padding === "number") ? s.padding : 0;
      var a = OZ.merk(b[0][0], b[1][1]), c = OZ.merk(b[1][0], b[0][1]);
      var zx = Math.log2((W - 2 * pad) / ((c[0] - a[0]) * 512)), zy = Math.log2((H - 2 * pad) / ((c[1] - a[1]) * 512));
      var z = Math.min(zx, zy); if (s && s.maxZoom != null) z = Math.min(z, s.maxZoom);
      return { center: OZ.tersMerk((a[0] + c[0]) / 2, (a[1] + c[1]) / 2), zoom: z, bearing: 0 };
    }
  };
  var govde = { type: "MultiPolygon", coordinates: [kare(20, 44, 21, 45)] };
  var ctx = {
    console: { log: function () {}, error: console.error, warn: function () {} },
    ODAK_ZOOM: OZ,
    localStorage: { getItem: function () { return null; }, setItem: function () {} },
    document: { getElementById: function (id) {
      return id === "ayar-odak-zoom-ac" ? { checked: ayarAcik, addEventListener: function () {} } : null; } },
    harita: harita,
    _haritaKutu: function () { return { width: W, height: H }; },
    devletler2: [{ id: "sirp", dnm: [{ fi: 100, ti: 200, ft: { geometry: govde } }] }].concat(ek.devletler2 || []),
    // ikinci kuralın bağımlılıkları — app.js'teki adlarla, en sade biçimde
    DEVLETLER: ek.DEVLETLER || [], YERLESIMLER: ek.YERLESIMLER || [],
    SUZGEC: require(path.join(KOK, "js", "suzgec.js")),
    donemler: [], donemBul: function () { return -1; },
    _cDevletIx: function () { var ix = {}; (ek.DEVLETLER || []).forEach(function (d) { ix[d.id] = d; }); return ix; },
    _khGunStr: function () { return "1826-10-07"; },
    adKonumBul: function (ad) { var L = ek.YERLESIMLER || []; for (var i = 0; i < L.length; i++) if (L[i].ad === ad) return { ad: ad, lat: L[i].lat, lon: L[i].lon }; return null; },
    olayKonumu: function (m) { return m && m._c ? { lon: m._c[0], lat: m._c[1] } : null; },
    maddeOdakKutusu: function (o) {
      var ids = o && o.odak_kimlik, tk = ek.tabiKutu || {};
      if (ids && ids.length === 1 && tk[ids[0]]) return { kutu: tk[ids[0]] };
      return null;
    },
    devletAktifDonem: function (s, t) {
      for (var i = 0; i < s.dnm.length; i++) if (govdeVar && s.dnm[i].fi <= t && t <= s.dnm[i].ti) return s.dnm[i];
      return null;
    }
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(BLOK + "\nthis.odakZoomKapisi = odakZoomKapisi; this.getBag = function(){return ODAK_ZOOM_BAG;}; this.getSon = function(){return ODAK_ZOOM_SON;};", ctx);
  return { ctx: ctx, harita: harita, kayit: kayit };
}
var D = { id: "sirp", ad: "Sırp" };
// B1 — bağlam yokken geçiş (önce bir kapı açılıp kapanarak sarıcı kurulsun)
(function () {
  var o = ortam(true, true);
  o.ctx.odakZoomKapisi(D, 150, function () {});
  var s = { center: [22.6, 44.5], zoom: 8, duration: 1200, curve: 1.42, essential: true };
  o.harita.flyTo(s);
  sina("B1 bağlam YOK ⇒ flyTo seçenekleri AYNEN (aynı nesne)", o.kayit[0][1] === s && o.ctx.getBag() === null);
})();
// B2 — kapı içinde flyTo süzülür, animasyon seçenekleri korunur
(function () {
  var o = ortam(true, true);
  o.ctx.odakZoomKapisi(D, 150, function () {
    o.harita.flyTo({ center: [22.6, 44.5], zoom: 8, duration: 1200, curve: 1.42, essential: true, offset: [0, 0] });
  });
  var s = o.kayit[0] && o.kayit[0][1];
  sina("B2 kapıda flyTo ⇒ zoom düşer", s && s.zoom < 8, s && ("zoom → " + s.zoom));
  sina("B2 duration/curve/essential/offset korunur",
       s && s.duration === 1200 && s.curve === 1.42 && s.essential === true && s.offset && s.offset[0] === 0);
  sina("B2 kapıdan çıkınca bağlam temizlenir", o.ctx.getBag() === null);
  // easeTo / jumpTo da aynı süzgeçten
  var o2 = ortam(true, true);
  o2.ctx.odakZoomKapisi(D, 150, function () {
    o2.harita.easeTo({ center: [22.6, 44.5], zoom: 8, duration: 900 });
    o2.harita.jumpTo({ center: [22.6, 44.5], zoom: 8 });
  });
  sina("B2 easeTo ve jumpTo da süzülür", o2.kayit[0][1].zoom < 8 && o2.kayit[1][1].zoom < 8 && o2.kayit[0][1].duration === 900);
  // fırlatan iş bağlamı ASILI bırakmaz
  var o3 = ortam(true, true), atti = false;
  try { o3.ctx.odakZoomKapisi(D, 150, function () { throw new Error("x"); }); } catch (e) { atti = true; }
  sina("B2 iş fırlatsa da bağlam temizlenir (finally)", atti && o3.ctx.getBag() === null);
})();
// B3 — fitBounds (odak kutusu) süzülür → flyTo, seçenekler korunur
(function () {
  var o = ortam(true, true);
  o.ctx.odakZoomKapisi(D, 150, function () {
    o.harita.fitBounds([[22.4, 44.35], [22.8, 44.65]], { padding: 40, duration: 1200, essential: true });
  });
  var adlar = o.kayit.map(function (k) { return k[0]; }).join(",");
  var s = o.kayit[o.kayit.length - 1][1];
  sina("B3 fitBounds (küçük kutu, gövde dışında) ⇒ tek flyTo, zoom düşük",
       adlar === "flyTo" && s.zoom < o.harita.cameraForBounds([[22.4, 44.35], [22.8, 44.65]], { padding: 40 }).zoom,
       adlar + " · zoom → " + s.zoom.toFixed(2));
  sina("B3 duration/essential korunur", s.duration === 1200 && s.essential === true);
})();
// B4 — fitBounds gövdenin kendisi (devletiYay) ⇒ değişmez, asıl fitBounds koşar, iç flyTo süzülmez
(function () {
  var o = ortam(true, true);
  o.ctx.odakZoomKapisi(D, 150, function () {
    o.harita.fitBounds([[20, 44], [21, 45]], { padding: 50, duration: 800, maxZoom: 7.5 });
  });
  var adlar = o.kayit.map(function (k) { return k[0]; }).join(",");
  var beklenen = o.harita.cameraForBounds([[20, 44], [21, 45]], { padding: 50, maxZoom: 7.5 }).zoom;
  sina("B4 gövdenin kendisine fitBounds ⇒ DEĞİŞMEZ (fitBounds→flyTo, aynı zoom)",
       adlar === "fitBounds,flyTo" && Math.abs(o.kayit[1][1].zoom - beklenen) < 1e-12,
       adlar + " · zoom " + o.kayit[1][1].zoom.toFixed(2));
})();
// B5 — ayar kapalı
(function () {
  var o = ortam(false, true);
  var s = { center: [22.6, 44.5], zoom: 8 };
  o.ctx.odakZoomKapisi(D, 150, function () { o.harita.flyTo(s); });
  sina("B5 ayar KAPALI ⇒ dokunulmaz", o.kayit[0][1] === s && !o.harita.__odakZoomSarili);
})();
// B6 — gövde o gün yok
(function () {
  var o = ortam(true, false);
  var s = { center: [22.6, 44.5], zoom: 8 };
  o.ctx.odakZoomKapisi(D, 150, function () { o.harita.flyTo(s); });
  var son = o.ctx.getSon();
  sina("B6 gövde o gün YOK ⇒ zoom aynı", o.kayit[0][1].zoom === 8 && son && son.sebep === "govde-yok");
})();
// B7 — Osmanlı maddesi kapsam dışı
(function () {
  var o = ortam(true, true);
  var s = { center: [22.6, 44.5], zoom: 8 };
  o.ctx.odakZoomKapisi({ id: "osmanli" }, 150, function () { o.harita.flyTo(s); });
  sina("B7 Osmanlı ⇒ dokunulmaz", o.kayit[0][1] === s);
})();

console.log("C) İKİNCİ KURAL, SAF — odakZoomIkili (madde ülkesi + odak devlet)");
var EK = { width: 1200, height: 800 };
function kamEkraninda(gk, kam) {                  // hazırlanmış gövdenin kutusu kameranın ekranında mı
  var S = 512 * Math.pow(2, kam.zoom), c = OZ.merk(kam.center[0], kam.center[1]);
  var hw = EK.width / 2 / S, hh = EK.height / 2 / S;
  return gk.kutu[0] >= c[0] - hw - 1e-12 && gk.kutu[2] <= c[0] + hw + 1e-12 &&
         gk.kutu[1] >= c[1] - hh - 1e-12 && gk.kutu[3] <= c[1] + hh + 1e-12;
}
function payKam(g, kam) { var c = OZ.merk(kam.center[0], kam.center[1]); return OZ.odakPay(g, c[0], c[1], kam.zoom, EK.width, EK.height); }
// C1 — İKİSİ SIĞIYOR: odak (Eflak gibi) ile madde ülkesi (Boğdan gibi) komşu
(function () {
  var odak = OZ.odakGovdeHazirla([kare(22.5, 43.7, 27.5, 45.3)]);
  var ulke = OZ.odakGovdeHazirla([kare(26.2, 45.4, 28.6, 48.3)]);
  var kam = { center: [27.2, 47.1], zoom: 9 };
  var r = OZ.odakZoomIkili(kam, ulke, odak, EK);
  sina("C1 komşu ülke maddesi ⇒ kip 'ikisi'", r.kip === "ikisi" && r.degisti, "zoom 9 → " + r.zoom + " · alt " + (r.altZoom || 0).toFixed(2));
  sina("C1 iki gövde de TAMAMEN kadrajda", kamEkraninda(ulke, r) && kamEkraninda(odak, r));
  sina("C1 madde ülkesi ≥ 1/8", payKam(ulke, r) >= 1 / 8, "%" + (100 * payKam(ulke, r)).toFixed(1));
  sina("C1 zoom alt sınırın üstünde ve hedeften yakın değil", r.zoom >= r.altZoom - 1e-9 && r.zoom <= 9);
  sina("C1 madde noktası ekranda", ekranda(27.2, 47.1, r, EK.width, EK.height));
})();
// C2 — SIĞMIYOR: odak Portekiz gibi (batı ucu), madde ülkesi Rusya gibi (doğu) — ~5.000 km
(function () {
  var odak = OZ.odakGovdeHazirla([kare(-9, 37, -7, 42)]);
  var ulke = OZ.odakGovdeHazirla([kare(30, 45, 60, 60)]);
  var kam = { center: [37.6, 55.75], zoom: 8.5 };
  var r = OZ.odakZoomIkili(kam, ulke, odak, EK);
  sina("C2 uzak odak ⇒ kip 'yalniz-madde' (red: alt-sinir)", r.kip === "yalniz-madde" && r.redB === "alt-sinir",
       "alt " + (r.altZoom || 0).toFixed(2) + " · red " + r.redB);
  sina("C2 madde ülkesi yine ≥ 1/8", payKam(ulke, r) >= 1 / 8, "%" + (100 * payKam(ulke, r)).toFixed(1) + " · " + r.sebep);
  sina("C2 odak devlet kadraja SOKULMADI", !kamEkraninda(odak, r));
})();
// C3 — ALT SINIR iki yönde: aynı geometri, alt sınır gevşetilince 'ikisi' olur
(function () {
  var odak = OZ.odakGovdeHazirla([kare(-9, 37, -7, 42)]);
  var ulke = OZ.odakGovdeHazirla([kare(30, 45, 60, 60)]);
  var kam = { center: [37.6, 55.75], zoom: 8.5 };
  var r = OZ.odakZoomIkili(kam, ulke, odak, EK, { altZoom: 2 });
  sina("C3 alt sınır 2'ye indirilirse ⇒ 'ikisi' (sınırı koyan gerçekten alt sınır)", r.kip === "ikisi", "zoom → " + r.zoom);
  var r2 = OZ.odakZoomIkili(kam, ulke, odak, EK);
  sina("C3 varsayılan alt sınırda zoom ALTINA inilmez", r2.zoom >= OZ.IKILI_ZOOM_TABAN - 1e-9 && r2.zoom >= r.zoom,
       "zoom " + r2.zoom + " ≥ taban " + OZ.IKILI_ZOOM_TABAN);
  var a45 = OZ.odakAltZoom(45, 1200), a45dar = OZ.odakAltZoom(45, 375);
  var km = 40075016.686 * Math.cos(45 * Math.PI / 180) * 1200 / (512 * Math.pow(2, a45)) / 1000;
  sina("C3 alt sınır = 4.000 km ekran (45°, 1200 px)", Math.abs(km - 4000) < 1, "z " + a45.toFixed(2) + " ≈ " + km.toFixed(0) + " km");
  sina("C3 dar ekranda taban 3,5", a45dar === 3.5, "z " + a45dar);
})();
// C4 — iki ülke de geniş ama madde ülkesi ORTAK kadrajda 1/8'in altına düşer ⇒ yalnız madde
(function () {
  var odak = OZ.odakGovdeHazirla([kare(10, 40, 30, 52)]);           // büyük odak gövde
  var ulke = OZ.odakGovdeHazirla([kare(31, 41, 32, 41.6)]);          // küçük komşu
  var kam = { center: [31.5, 41.3], zoom: 9 };
  var r = OZ.odakZoomIkili(kam, ulke, odak, EK, { altZoom: 0 });
  sina("C4 ortak kadrajda bölge < 1/8 kalırsa ⇒ 'yalniz-madde' (red: bolge-kucuk-kalir)",
       r.kip === "yalniz-madde" && r.redB === "bolge-kucuk-kalir", "red " + r.redB + " · " + r.sebep);
})();
// C5 — küçük (nokta) bölge: 1/8'e yaklaşmadan ulaşılamaz; şart "tamamı ekranda"
(function () {
  var odak = OZ.odakGovdeHazirla([kare(22.5, 43.7, 27.5, 45.3)]);
  var nokta = OZ.odakKutuGovde([28.0, 46.0, 28.7, 46.7]); nokta.kucuk = true;
  var kam = { center: [28.35, 46.35], zoom: 9 };
  var r = OZ.odakZoomIkili(kam, nokta, odak, EK);
  sina("C5 nokta bölgesi + yakın odak ⇒ 'ikisi', nokta ekranda", r.kip === "ikisi" && kamEkraninda(nokta, r) && kamEkraninda(odak, r),
       "zoom → " + r.zoom);
  var r0 = OZ.odakZoomIkili(kam, nokta, null, EK);
  sina("C5 nokta bölgesi, odak gövdesi yok ⇒ DEĞİŞMEZ (zoom-in yok)", !r0.degisti && r0.zoom === 9 && r0.sebep === "nokta-bolge");
})();

console.log("D) İKİNCİ KURAL, BAĞLANTI — ilgili ülkenin seçimi (app.js bloğu)");
var SG = require(path.join(KOK, "js", "suzgec.js"));
function ortam2(madde) {
  var o = ortam(true, true, {
    devletler2: [
      { id: "eflak", dnm: [{ fi: 100, ti: 200, ft: { geometry: { coordinates: [kare(22.5, 43.7, 27.5, 45.3)] } } }] },
      { id: "bogdan", dnm: [{ fi: 100, ti: 200, ft: { geometry: { coordinates: [kare(26.2, 45.4, 28.6, 48.3)] } } }] },
      { id: "rusya", dnm: [{ fi: 100, ti: 200, ft: { geometry: { coordinates: [kare(28.5, 44.5, 60, 62)] } } }] }],
    DEVLETLER: [{ id: "eflak", ad: "Eflak", harita: "eflak" }, { id: "bogdan", ad: "Boğdan" }, { id: "rusya", ad: "Rusya" },
                { id: "kirim", ad: "Kırım Hanlığı" }],
    YERLESIMLER: [
      { ad: "Yaş", lat: 47.16, lon: 27.59, s: [{ d: "bogdan", f: "1300-01-01", t: "1900-01-01" }] },
      { ad: "Bükreş", lat: 44.43, lon: 26.1, s: [{ d: "eflak", f: "1300-01-01", t: "1900-01-01" }] },
      { ad: "Akkirman", lat: 46.19, lon: 30.35, s: [{ d: "rusya", f: "1812-01-01", t: "1900-01-01" }] },
      { ad: "Kefe", lat: 45.03, lon: 35.38, v: [{ kid: "kirim", f: "1475-01-01", t: "1900-01-01" }] }],
    tabiKutu: { kirim: [33, 44.4, 36.6, 46.2] }
  });
  var d = { id: "eflak", ad: "Eflak", harita: "eflak" };
  o.ctx.odakZoomKapisi(d, 150, function () { o.harita.flyTo({ center: madde._c, zoom: 9, duration: 1000 }); }, madde);
  return { o: o, son: o.ctx.getSon(), kam: o.kayit[0] && o.kayit[0][1] };
}
(function () {
  var x = ortam2({ t: "1826-10-07", yer_id: "Yaş", _c: [27.59, 47.16] });
  sina("D1 yer_id sahibi = komşu (Boğdan) ⇒ madde-ulkesi, kip ikisi",
       x.son.kural === "madde-ulkesi" && x.son.ulke.join() === "bogdan" && /^yer_id sahibi/.test(x.son.kaynak) && x.son.kip === "ikisi",
       x.son.kural + " · " + x.son.kaynak + " · " + x.son.kip + " · zoom → " + (x.kam && x.kam.zoom));
  var y = ortam2({ t: "1826-10-07", yer_id: "Bükreş", _c: [26.1, 44.43] });
  sina("D2 yer odak toprağında (Bükreş/Eflak) ⇒ İLK KURAL (odak-topraginda)", y.son.kural === "odak-topraginda", y.son.kural + " · " + y.son.sebep);
  var z = ortam2({ t: "1826-10-07", yer_id: "Akkirman", odak_kimlik: ["bogdan"], _c: [30.35, 46.19] });
  sina("D3 odak_kimlik, yer sahibinden ÖNCE gelir", z.son.kaynak === "odak_kimlik" && z.son.ulke.join() === "bogdan", z.son.kaynak);
  var t = ortam2({ t: "1826-10-07", taraflar: ["eflak", "rusya"], _c: [30, 46] });
  sina("D4 yer yok ⇒ taraflar, odak devlet ayıklanır", t.son.kaynak === "taraflar" && t.son.ulke.join() === "rusya", t.son.ulke.join());
  var k = ortam2({ t: "1826-10-07", yer_id: "Kefe", _c: [35.38, 45.03] });
  sina("D5 tâbi sahip (gövdesiz Kırım) ⇒ kimlik kutusu bölge olur", k.son.ulke.join() === "kirim" && k.son.bolge === "ulke-kutusu" && k.son.kural === "madde-ulkesi",
       k.son.kaynak + " · " + k.son.bolge + " · " + k.son.kip);
  var n = ortam2({ t: "1826-10-07", yer_id: "Bilinmeyen", _c: [29, 46] });
  sina("D6 ülke çözülemez ⇒ yer noktası çevresi (küçük bölge)", n.son.bolge === "yer-noktasi" && n.son.kural === "madde-ulkesi", n.son.bolge + " · " + n.son.sebep);
  var b = ortam2({ t: "1826-10-07", _c: [29, 46] });
  sina("D7 hiçbir yer/taraf yok ⇒ İLK KURAL (bolge-yok)", b.son.kural === "bolge-yok", b.son.kural);
})();

console.log("\nSONUÇ: " + gecen + " geçti · " + kalan + " kaldı");
process.exit(kalan ? 1 : 0);

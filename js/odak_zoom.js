// ODAK-ZOOM-1016 — DEVLET KRONOLOJİSİNDE KAMERA ALT SINIRI (saf mantık katmanı)
//
// Emre (16 Ekim 2026): *"Odakta yer alan devlet kronoloji maddeleri ilerletilirken
// ilgili devletin toprakları ekranın en az 1/8'i kadar yer kaplamalı; ona göre
// zoom out yapılmalı."*
//
// ⚠️ BU DOSYA DOM'A DOKUNMAZ (`js/suzgec.js` ile aynı ilke): `document`, `harita`,
// olay dinleyici GİRMEZ. Sebebi ölçülebilirlik — node'da sınanır
// (`denetim/ARAC-ODAK-ZOOM-SINAV-1016.js`). Haritaya bağlantı `js/app.js`te,
// `odakZoomKapisi` (devlet kronolojisi gezintisinin TEK ortak noktası `gezGit`).
//
// PROJEKSİYON — MapLibre'nin Web Mercator'ı: zoom z'de dünya genişliği
// 512·2^z piksel (512 px fayans; `kmDanZoom` notu, app.js). Hesap BİRİM
// Mercator'da (x,y ∈ [0,1]) yapılır; ekran kutusu birime çevrilir, gövde
// koordinatları her zoomda yeniden projekte EDİLMEZ (bir kez çevrilir).
//
// PAY = gövdenin GÖRÜNÜR ekran alanı / ekran alanı. SINIR KUTUSU DEĞİL GERÇEK
// ALAN: her halka ekran dikdörtgenine Sutherland–Hodgman ile kırpılır, alanı
// ayakkabı bağı (shoelace) ile alınır; delikler düşülür. Dikdörtgen dışbükey
// olduğu için içbükey halkada da kırpılmış ALAN doğrudur (kenar boyunca oluşan
// sıfır genişlikli köprüler alana katkı vermez).
//
// ⚠️ BİLİNEN SINIRLAR (beyan): ① 180. meridyeni aşan gövde sarılmaz (Bering,
//   Pasifik adaları) — kutu tek taraftan ölçülür, pay olduğundan KÜÇÜK çıkabilir
//   ⇒ en kötü hâlde fazladan biraz zoom out. ② Küre (globe) görünümünde ekran
//   alanı Mercator'dan farklıdır; düşük zoomda pay yaklaşıktır.
(function () {
"use strict";

var ODAK_ZOOM_ESIK = 1 / 8;
var ODAK_ZOOM_TAVAN = 9;        // yaklaşma tavanı (koordinatör, tarayıcı ölçümünden sonra)

function _oz_merk(lon, lat) {
  var la = Math.max(-85.05112878, Math.min(85.05112878, lat));
  var s = Math.sin(la * Math.PI / 180);
  return [(lon + 180) / 360, 0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)];
}
function _oz_tersMerk(x, y) {
  var n = Math.PI * (1 - 2 * y);
  return [x * 360 - 180, 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)))];
}
function _oz_alan(r) {                       // işaretli alan (birim²)
  var a = 0;
  for (var i = 0, n = r.length, j = n - 1; i < n; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
  return a / 2;
}

// GeoJSON MultiPolygon koordinatları (lon/lat) → birim Mercator halkaları +
// halka kutuları. Bir kez çağrılır; çıktı `odakPay`a defalarca verilir.
function odakGovdeHazirla(mp) {
  if (!mp || !mp.length) return null;
  var pol = [], top = 0, sx = 0, sy = 0;
  var X0 = Infinity, Y0 = Infinity, X1 = -Infinity, Y1 = -Infinity;
  for (var a = 0; a < mp.length; a++) {
    var p = mp[a];
    if (!p || !p.length) continue;
    var halkalar = [];
    for (var b = 0; b < p.length; b++) {
      var h = p[b];
      if (!h || h.length < 3) continue;
      var r = [], x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (var c = 0; c < h.length; c++) {
        var nk = h[c];
        if (!nk || typeof nk[0] !== "number" || typeof nk[1] !== "number") continue;
        var q = _oz_merk(nk[0], nk[1]);
        r.push(q);
        if (q[0] < x0) x0 = q[0]; if (q[0] > x1) x1 = q[0];
        if (q[1] < y0) y0 = q[1]; if (q[1] > y1) y1 = q[1];
      }
      if (r.length < 3) continue;
      var al = Math.abs(_oz_alan(r));
      halkalar.push({ r: r, k: [x0, y0, x1, y1], alan: al, delik: b > 0 });
      if (b === 0) {
        top += al; sx += al * (x0 + x1) / 2; sy += al * (y0 + y1) / 2;
        if (x0 < X0) X0 = x0; if (x1 > X1) X1 = x1;
        if (y0 < Y0) Y0 = y0; if (y1 > Y1) Y1 = y1;
      } else {
        top -= al;
      }
    }
    if (halkalar.length && !halkalar[0].delik) pol.push(halkalar);
  }
  if (!pol.length || !(top > 0)) return null;
  // Ağırlık noktası: dış halka kutu merkezlerinin ALAN ağırlıklı ortalaması —
  // merkez kaydırmanın yön vericisi, kesin centroid gerekmiyor.
  return { pol: pol, kutu: [X0, Y0, X1, Y1], alan: top, agirlik: [sx / (top || 1), sy / (top || 1)] };
}

// Halkayı eksen hizalı dikdörtgene kırp (Sutherland–Hodgman), |alan| döndür.
function _oz_kirpAlan(r, x0, y0, x1, y1) {
  var kenar = [
    function (p) { return p[0] >= x0; }, function (p) { return p[0] <= x1; },
    function (p) { return p[1] >= y0; }, function (p) { return p[1] <= y1; }];
  var kes = [
    function (a, b) { var t = (x0 - a[0]) / (b[0] - a[0]); return [x0, a[1] + t * (b[1] - a[1])]; },
    function (a, b) { var t = (x1 - a[0]) / (b[0] - a[0]); return [x1, a[1] + t * (b[1] - a[1])]; },
    function (a, b) { var t = (y0 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), y0]; },
    function (a, b) { var t = (y1 - a[1]) / (b[1] - a[1]); return [a[0] + t * (b[0] - a[0]), y1]; }];
  var cikis = r;
  for (var e = 0; e < 4 && cikis.length; e++) {
    var giris = cikis, ic = kenar[e], kx = kes[e];
    cikis = [];
    for (var i = 0; i < giris.length; i++) {
      var A = giris[(i + giris.length - 1) % giris.length], B = giris[i];
      var aI = ic(A), bI = ic(B);
      if (bI) { if (!aI) cikis.push(kx(A, B)); cikis.push(B); }
      else if (aI) cikis.push(kx(A, B));
    }
  }
  return cikis.length >= 3 ? Math.abs(_oz_alan(cikis)) : 0;
}

// Ekran kutusu (birim Mercator): merkez (cx,cy), zoom z, ekran W×H piksel.
function _oz_ekranKutusu(cx, cy, z, W, H) {
  var S = 512 * Math.pow(2, z);
  var hw = W / 2 / S, hh = H / 2 / S;
  return [cx - hw, cy - hh, cx + hw, cy + hh];
}

// Gövdenin ekrandaki payı (0..1). `g` = odakGovdeHazirla çıktısı.
function odakPay(g, cx, cy, z, W, H) {
  if (!g) return 0;
  var k = _oz_ekranKutusu(cx, cy, z, W, H);
  var ekran = (k[2] - k[0]) * (k[3] - k[1]);
  if (!(ekran > 0)) return 0;
  var gk = g.kutu;
  if (gk[2] < k[0] || gk[0] > k[2] || gk[3] < k[1] || gk[1] > k[3]) return 0;
  var top = 0;
  for (var a = 0; a < g.pol.length; a++) {
    var hs = g.pol[a];
    for (var b = 0; b < hs.length; b++) {
      var h = hs[b], hk = h.k, v;
      if (hk[2] < k[0] || hk[0] > k[2] || hk[3] < k[1] || hk[1] > k[3]) continue;   // tamamen dışarıda
      if (hk[0] >= k[0] && hk[2] <= k[2] && hk[1] >= k[1] && hk[3] <= k[3]) v = h.alan; // tamamen içeride
      else v = _oz_kirpAlan(h.r, k[0], k[1], k[2], k[3]);
      top += h.delik ? -v : v;
    }
  }
  return Math.max(0, Math.min(1, top / ekran));
}

// 🔴 ASIL İŞLEV — `odakZoomAlt(hedefKam, govde, ekran, secenek)`
//   hedefKam : { center: [lon, lat], zoom }   — kamera yolunun ZATEN hesapladığı hedef
//   govde    : odakGovdeHazirla çıktısı (ya da ham MultiPolygon koordinatı)
//   ekran    : { width, height } piksel (harita kabı)
//   secenek  : { esik (1/8) · adim (0,1 zoom) · minZoom (0) · enCokDusus (6) · kenarPx (60) }
// Dönüş: { center, zoom, degisti, pay0, pay, sebep }
// KURAL:
//   ① gövde yok/ölçülemiyor           → değişmez ("govde-yok")
//   ② pay ≥ eşik                       → değişmez ("yeterli") — imparatorluk hâli
//   ③ gövde zaten TAMAMEN ekranda ama pay < eşik → YAKLAŞ ("yaklasti"): pay ≥ eşik
//      olan EN UZAK zoom, tavan `tavanZoom` (9). Merkez gövde kutusunun ortası,
//      hedef (madde) noktası ekranda `kenarPx` içeride kalacak kadar ona doğru
//      çekilir; gövde ekranı AŞMAZ (kutuya oturan zoom `zf`in ötesine geçilmez).
//      `zf`/tavan'da eşik hâlâ tutmazsa o kamera ("yaklasti-tavan" /
//      "yaklasti-en-iyi"). Nokta kutusu (`g.kucuk`, tek şehir ± 0,35°) YAKLAŞMAZ
//      ("tam-ekranda"). 🔴 ESKİDEN burada "değişmez" yazıyordu ve tarayıcıda
//      ÖLÇÜLÜNCE çöktü (koordinatör, 604×657 ekran, Eflak 1718-07-21 Pasarofça):
//      kamera z 2,32'de, madde ülkesi Avusturya'nın payı %0,8 — kural ihlali, ve
//      "uzaya çıkmış" kamera tam da o. Kural zoom-IN'i de gerektiriyor.
//   ④ değilse zoom adım adım düşer; her adımda önce merkez ODAKTA denenir, yetmezse
//      merkez gövdeye doğru kaydırılır — odak noktası ekranda `kenarPx` içeride
//      kalacak kadar. Pay ≥ eşik olan EN YAKIN zoom seçilir ("dustu"/"dustu-kaydi").
//   ⑤ eşiğe hiç ulaşılamazsa (ince/dağınık gövde) payın EN BÜYÜK olduğu kamera,
//      yalnız payı gerçekten artırıyorsa ("en-iyi"); artırmıyorsa değişmez.
function odakZoomAlt(hedefKam, govde, ekran, secenek) {
  secenek = secenek || {};
  var esik = secenek.esik || ODAK_ZOOM_ESIK;
  var adim = secenek.adim || 0.1;
  var minZ = typeof secenek.minZoom === "number" ? secenek.minZoom : 0;
  var dusus = secenek.enCokDusus || 6;
  var kenar = typeof secenek.kenarPx === "number" ? secenek.kenarPx : 60;
  var sonuc = { center: hedefKam && hedefKam.center, zoom: hedefKam && hedefKam.zoom,
                degisti: false, pay0: null, pay: null, sebep: "" };
  if (!hedefKam || !hedefKam.center || typeof hedefKam.zoom !== "number") { sonuc.sebep = "hedef-yok"; return sonuc; }
  var g = govde && govde.pol ? govde : odakGovdeHazirla(govde);
  if (!g) { sonuc.sebep = "govde-yok"; return sonuc; }
  var W = ekran && ekran.width > 1 ? ekran.width : 900, H = ekran && ekran.height > 1 ? ekran.height : 620;
  var lon = hedefKam.center.lng !== undefined ? hedefKam.center.lng : hedefKam.center[0];
  var lat = hedefKam.center.lat !== undefined ? hedefKam.center.lat : hedefKam.center[1];
  var P = _oz_merk(lon, lat), z0 = hedefKam.zoom;
  var pay0 = odakPay(g, P[0], P[1], z0, W, H);
  sonuc.pay0 = sonuc.pay = pay0;
  if (pay0 >= esik) { sonuc.sebep = "yeterli"; return sonuc; }
  function tamIcinde(cx, cy, z) {
    var k = _oz_ekranKutusu(cx, cy, z, W, H), gk = g.kutu;
    return gk[0] >= k[0] && gk[2] <= k[2] && gk[1] >= k[1] && gk[3] <= k[3];
  }
  if (tamIcinde(P[0], P[1], z0)) {
    if (g.kucuk) { sonuc.sebep = "tam-ekranda"; return sonuc; }
    return _oz_yaklas(sonuc, g, P, z0, W, H, esik, adim, kenar,
                      typeof secenek.tavanZoom === "number" ? secenek.tavanZoom : ODAK_ZOOM_TAVAN);
  }
  var G = g.agirlik, en = null;
  var alt = Math.max(minZ, z0 - dusus);
  for (var z = z0 - adim; z >= alt - 1e-9; z -= adim) {
    var S = 512 * Math.pow(2, z);
    var p = odakPay(g, P[0], P[1], z, W, H);
    if (p >= esik) return _oz_bitir(sonuc, P, z, p, "dustu");
    if (!en || p > en.p) en = { c: P, z: z, p: p };
    // merkez gövdeye doğru — odak ekranda `kenar` px içeride kalacak kadar
    var mx = Math.max(0, W / 2 - kenar) / S, my = Math.max(0, H / 2 - kenar) / S;
    var C = [P[0] + Math.max(-mx, Math.min(mx, G[0] - P[0])),
             P[1] + Math.max(-my, Math.min(my, G[1] - P[1]))];
    var pc = odakPay(g, C[0], C[1], z, W, H);
    if (pc >= esik) return _oz_bitir(sonuc, C, z, pc, "dustu-kaydi");
    if (pc > en.p) en = { c: C, z: z, p: pc };
    if (tamIcinde(C[0], C[1], z)) break;          // bundan sonra uzaklaşmak payı yalnız küçültür
  }
  if (en && en.p > pay0 * 1.05) return _oz_bitir(sonuc, en.c, en.z, en.p, "en-iyi");
  sonuc.sebep = "ulasilamadi";
  return sonuc;
}
// ③'ün YAKLAŞMA dalı — gövde tamamen ekranda ve küçük kalıyor.
function _oz_yaklas(sonuc, g, P, z0, W, H, esik, adim, kenar, tavan) {
  var gk = g.kutu, pad = ODAK_IKILI_PAD;
  var bw = Math.max(1e-12, gk[2] - gk[0]), bh = Math.max(1e-12, gk[3] - gk[1]);
  // gövde kutusunun ekrana (pay ile) oturduğu zoom — "bölge ekranı aşmasın"
  var zf = Math.log(Math.min((W - 2 * pad) / (bw * 512), (H - 2 * pad) / (bh * 512))) / Math.LN2;
  var ust = Math.min(zf, tavan);
  if (!(ust > z0 + 1e-9)) { sonuc.sebep = "tam-ekranda"; return sonuc; }
  var Cg = [(gk[0] + gk[2]) / 2, (gk[1] + gk[3]) / 2];
  function merkez(z) {                     // gövde ortası, madde noktası ekranda kalacak kadar ona doğru
    var S = 512 * Math.pow(2, z);
    var mx = Math.max(0, W / 2 - kenar) / S, my = Math.max(0, H / 2 - kenar) / S;
    return [Math.max(P[0] - mx, Math.min(P[0] + mx, Cg[0])),
            Math.max(P[1] - my, Math.min(P[1] + my, Cg[1]))];
  }
  var en = null;
  for (var z = z0 + adim; z <= ust + 1e-9; z += adim) {
    var C = merkez(z), p = odakPay(g, C[0], C[1], z, W, H);
    if (p >= esik) return _oz_bitir(sonuc, C, z, p, "yaklasti");
    if (!en || p > en.p) en = { c: C, z: z, p: p };
  }
  // tavana / kutuya oturan zoom'a tam olarak da bak (adım ızgarası kaçırmasın)
  var Cu = merkez(ust), pu = odakPay(g, Cu[0], Cu[1], ust, W, H);
  if (pu >= esik) return _oz_bitir(sonuc, Cu, ust, pu, "yaklasti");
  if (!en || pu >= en.p) en = { c: Cu, z: ust, p: pu };
  if (en.p > sonuc.pay0 * 1.05)
    return _oz_bitir(sonuc, en.c, en.z, en.p, (ust === tavan && tavan < zf) ? "yaklasti-tavan" : "yaklasti-en-iyi");
  sonuc.sebep = "tam-ekranda";
  return sonuc;
}
function _oz_bitir(sonuc, c, z, p, sebep) {
  sonuc.center = _oz_tersMerk(c[0], c[1]);
  sonuc.zoom = Math.round(z * 1000) / 1000;
  sonuc.degisti = true; sonuc.pay = p; sonuc.sebep = sebep;
  return sonuc;
}

// ═══════════════════════════════════════════════════════════════════════════
// 🆕 İKİNCİ KURAL — MADDE ÜLKESİ + ODAK DEVLET BİRLİKTE (Emre, 16 Ekim 2026)
// *"Kronoloji maddesi etraftaki bir devletle ilgiliyse, maddenin ilgili olduğu
// devlet haritada gösterilir. Mümkünse hem odaktaki devlet hem maddenin ilgili
// olduğu ülke aynı ekranda gösterilir. Sığmayacaksa yalnız maddenin ilgili olduğu
// bölge ve ülke gösterilir. Ama maddedeki bölge ekranın en az 1/8'ini kaplamalı.
// İki ülkeyi kadraja sokmak için zoom uzaya kadar çıkmamalı."*
// Öncelik:
//   ① ZORUNLU  madde bölgesi ≥ 1/8 (`odakZoomAlt` bölge gövdesiyle)
//   ② TERCİH   odak devlet de aynı kadrajda — iki gövdenin ORTAK kutusuna oturan
//              kamera, YALNIZ bölge hâlâ ≥ 1/8 ise VE zoom alt sınırın üstündeyse
//   ③ sığmıyorsa ①'in kamerası
//   (④ madde odak toprağındaysa çağıran `odakZoomAlt`ı odak gövdesiyle çağırır)
// ALT SINIR: ekran genişliği ODAK_IKILI_KM (4.000 km) — Avrupa'nın batı-doğu
//   genişliği mertebesi; ötesi kıta/yarımküre ölçeğidir, "uzaya çıkmak" budur.
//   Enleme ve ekran genişliğine göre zoom'a çevrilir (512 px fayans), tabanı
//   ODAK_IKILI_ZOOM_TABAN (3,5) — dar (telefon) ekranda km eşiği z~2,4'e
//   düşürürdü; 3,5 orada ~1.800 km demektir.
// "KÜÇÜK BÖLGE" (`bolge.kucuk`, tek şehir ± 0,35° kutusu — ülke gövdesi
//   bulunamadı): 1/8'e ancak şehir ölçeğine YAKLAŞARAK ulaşılır; koordinatör
//   kararı: tek şehirde yakınlaşma YOK ⇒ ① kamerayı değiştirmez; ②'de şart
//   "kutu TAMAMEN ekranda"dır. (Ülke bölgesinde ① GEREKİRSE YAKLAŞIR — `_oz_yaklas`.)
var ODAK_IKILI_KM = 4000, ODAK_IKILI_ZOOM_TABAN = 3.5, ODAK_IKILI_PAD = 40;

// Ekran genişliği `km` olacak zoom (enlem `lat`, `W` px). 2^z = C·cos(lat)·W/(512·km·1000)
function zoomKmIcin(km, lat, W) {
  var c = Math.cos(Math.max(-85, Math.min(85, lat)) * Math.PI / 180);
  return Math.log(40075016.686 * c * W / (512 * km * 1000)) / Math.LN2;
}
function odakAltZoom(lat, W) {
  return Math.max(ODAK_IKILI_ZOOM_TABAN, zoomKmIcin(ODAK_IKILI_KM, lat, W));
}
// [lon0, lat0, lon1, lat1] kutusu → hazırlanmış gövde (tek dikdörtgen)
function odakKutuGovde(k) {
  if (!k || k.length !== 4 || !(k[2] > k[0]) || !(k[3] > k[1])) return null;
  return odakGovdeHazirla([[[[k[0], k[1]], [k[2], k[1]], [k[2], k[3]], [k[0], k[3]], [k[0], k[1]]]]]);
}
// Hazırlanmış gövdeleri BİRLEŞTİR (çokgen listeleri yan yana — farklı devletlerin
// gövdeleri örtüşmez; örtüşme olursa alan iki kez sayılır, beyan).
function odakGovdeBirlestir(liste) {
  var L = (liste || []).filter(function (g) { return g && g.pol; });
  if (!L.length) return null;
  if (L.length === 1) return L[0];
  var pol = [], top = 0, sx = 0, sy = 0, X0 = Infinity, Y0 = Infinity, X1 = -Infinity, Y1 = -Infinity;
  L.forEach(function (g) {
    pol = pol.concat(g.pol); top += g.alan; sx += g.alan * g.agirlik[0]; sy += g.alan * g.agirlik[1];
    X0 = Math.min(X0, g.kutu[0]); Y0 = Math.min(Y0, g.kutu[1]); X1 = Math.max(X1, g.kutu[2]); Y1 = Math.max(Y1, g.kutu[3]);
  });
  return { pol: pol, kutu: [X0, Y0, X1, Y1], alan: top, agirlik: [sx / top, sy / top] };
}
function _oz_kutuIcinde(gk, cx, cy, z, W, H) {
  var k = _oz_ekranKutusu(cx, cy, z, W, H);
  return gk[0] >= k[0] && gk[2] <= k[2] && gk[1] >= k[1] && gk[3] <= k[3];
}
// 🔴 `odakZoomIkili(hedefKam, bolge, odakG, ekran, secenek)`
//   bolge : hazırlanmış gövde (madde ülkesi/bölgesi); `bolge.kucuk = true` ⇒ nokta kutusu
//   odakG : hazırlanmış odak devlet gövdesi (yoksa ② denenmez)
// Dönüş: odakZoomAlt'ınkiyle aynı + { kip: "ikisi" | "yalniz-madde", altZoom, bolgePay, odakGorunur }
function odakZoomIkili(hedefKam, bolge, odakG, ekran, secenek) {
  secenek = secenek || {};
  var esik = secenek.esik || ODAK_ZOOM_ESIK;
  var W = ekran && ekran.width > 1 ? ekran.width : 900, H = ekran && ekran.height > 1 ? ekran.height : 620;
  var A;
  if (!bolge) {
    A = odakZoomAlt(hedefKam, null, ekran, secenek);   // "govde-yok" ⇒ değişmez
    A.kip = "yalniz-madde"; return A;
  }
  if (bolge.kucuk) {
    A = { center: hedefKam.center, zoom: hedefKam.zoom, degisti: false, pay0: null, pay: null, sebep: "nokta-bolge" };
  } else {
    A = odakZoomAlt(hedefKam, bolge, ekran, secenek);
  }
  A.kip = "yalniz-madde";
  if (!odakG || !A.center || typeof A.zoom !== "number") return A;
  // ② ORTAK KADRAJ — iki gövdenin birleşik kutusu, `ODAK_IKILI_PAD` px payla.
  var bk = bolge.kutu, ok = odakG.kutu;
  var U = [Math.min(bk[0], ok[0]), Math.min(bk[1], ok[1]), Math.max(bk[2], ok[2]), Math.max(bk[3], ok[3])];
  var uw = Math.max(1e-12, U[2] - U[0]), uh = Math.max(1e-12, U[3] - U[1]);
  var pad = typeof secenek.padPx === "number" ? secenek.padPx : ODAK_IKILI_PAD;
  var zf = Math.log(Math.min((W - 2 * pad) / (uw * 512), (H - 2 * pad) / (uh * 512))) / Math.LN2;
  var zB = Math.min(zf, A.zoom);                       // ASLA ①'in kamerasından yakın değil
  var cB = [(U[0] + U[2]) / 2, (U[1] + U[3]) / 2];
  var cLL = _oz_tersMerk(cB[0], cB[1]);
  var altZ = typeof secenek.altZoom === "number" ? secenek.altZoom : odakAltZoom(cLL[1], W);
  A.altZoom = altZ;
  var lon = hedefKam.center.lng !== undefined ? hedefKam.center.lng : hedefKam.center[0];
  var lat = hedefKam.center.lat !== undefined ? hedefKam.center.lat : hedefKam.center[1];
  var P = _oz_merk(lon, lat), kB = _oz_ekranKutusu(cB[0], cB[1], zB, W, H);
  var pGorunur = P[0] >= kB[0] && P[0] <= kB[2] && P[1] >= kB[1] && P[1] <= kB[3];
  var bPay = odakPay(bolge, cB[0], cB[1], zB, W, H);
  var bTamam = bolge.kucuk ? _oz_kutuIcinde(bk, cB[0], cB[1], zB, W, H) : bPay >= esik;
  A.bolgePay = bPay;
  if (zB >= altZ - 1e-9 && bTamam && pGorunur) {
    var B = { center: cLL, zoom: Math.round(zB * 1000) / 1000,
              degisti: Math.abs(zB - hedefKam.zoom) > 1e-6 || Math.abs(cB[0] - P[0]) > 1e-12 || Math.abs(cB[1] - P[1]) > 1e-12,
              pay0: A.pay0, pay: bPay,
              sebep: "ikisi", kip: "ikisi", altZoom: altZ, bolgePay: bPay,
              odakPay: odakPay(odakG, cB[0], cB[1], zB, W, H) };
    return B;
  }
  A.redB = zB < altZ - 1e-9 ? "alt-sinir" : (!bTamam ? "bolge-kucuk-kalir" : "odak-noktasi-disarida");
  return A;
}

var _OZ_DISA = { ESIK: ODAK_ZOOM_ESIK, odakGovdeHazirla: odakGovdeHazirla, odakPay: odakPay,
                 odakZoomAlt: odakZoomAlt, merk: _oz_merk, tersMerk: _oz_tersMerk,
                 odakZoomIkili: odakZoomIkili, odakAltZoom: odakAltZoom, zoomKmIcin: zoomKmIcin,
                 odakKutuGovde: odakKutuGovde, odakGovdeBirlestir: odakGovdeBirlestir,
                 IKILI_KM: ODAK_IKILI_KM, IKILI_ZOOM_TABAN: ODAK_IKILI_ZOOM_TABAN, TAVAN: ODAK_ZOOM_TAVAN };
if (typeof window !== "undefined") window.ODAK_ZOOM = _OZ_DISA;
if (typeof module !== "undefined" && module.exports) module.exports = _OZ_DISA;
})();

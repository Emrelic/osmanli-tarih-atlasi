// HARITA-0076 — CANLI MOTOR ÖLÇÜM FONKSİYONLARI
// ─────────────────────────────────────────────────────────────────────────
// Bu dosya UYGULAMAYA BAĞLANMAZ. index.html'e satır eklenmez.
// Kullanımı: siteyi yerelde aç (`py -m http.server 8777` → 127.0.0.1:8777),
// veri yüklenmesini bekle, bu dosyanın içeriğini tarayıcı konsoluna yapıştır.
// Hiçbir katmana, hiçbir kaynağa YAZMAZ — yalnız okur ve sayı basar.
//
// Niçin tarayıcıda: çakışma ve sivrilik, ÇİZİLEN gövdede doğuyor.
// `donemler.js`/`devletler_harita.js` havuzları delta tutuyor; gövdeyi
// app.js birleştiriyor. Ölçüm bu yüzden motorun kendi çıktısından alındı.
//
// Ölçülen sayılar ve tarihleri: denetim/HARITA-0076.md §2 ve §3.

// ═══ ① GÖVDE ÇAKIŞMASI ═══════════════════════════════════════════════════
// Bir hücreyi kaç AYRI gövde boyuyor? >= 2 ise çakışma.
// __ol("1884-01-01", 41, 60, 8, 24, 0.1)  ->  Hadramut (H-0072 · H-0073)
// __ol("1884-01-01", 21.4, 25.5, 41.9, 44.6, 0.02) -> Bulgaristan (H-0069)
// __ol("1913-03-06", 25.5, 29.5, 40, 42.5, 0.02)   -> Trakya (H-0136)
// __ol("1884-01-01", -15, 60, 10, 60, 0.25)        -> dünya taban çizgisi
window.__ol = function (gun, lon0, lon1, lat0, lat1, adim) {
  tarihAyarla(gunIdx(gun));
  var G = [];
  ["osmanli", "vassal", "himaye", "devlet"].forEach(function (sid) {
    var s = harita.getSource(sid); if (!s) return;
    var d; try { d = s.serialize().data; } catch (e) { return; }
    (d.features || []).forEach(function (f) {
      var ad = (f.properties && (f.properties.id || f.properties.devlet || f.properties.ad)) || sid;
      var polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates]
                : (f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : []);
      polys.forEach(function (p) {
        var r = p[0]; if (!r || r.length < 4) return;
        var b = [1e9, 1e9, -1e9, -1e9];
        for (var i = 0; i < r.length; i++) {
          if (r[i][0] < b[0]) b[0] = r[i][0]; if (r[i][1] < b[1]) b[1] = r[i][1];
          if (r[i][0] > b[2]) b[2] = r[i][0]; if (r[i][1] > b[3]) b[3] = r[i][1];
        }
        G.push({ k: sid, ad: ad, r: p, b: b });
      });
    });
  });
  function ic(ring, x, y) {
    var inside = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) inside = !inside;
    }
    return inside;
  }
  // delik halkaları düşülür — yoksa iç boşluklar "boyalı" sayılırdı
  function icPoly(p, x, y) {
    if (!ic(p[0], x, y)) return false;
    for (var h = 1; h < p.length; h++) if (ic(p[h], x, y)) return false;
    return true;
  }
  var kapli = 0, cakisan = 0, toplam = 0, ciftler = {};
  for (var x = lon0; x <= lon1; x += adim) for (var y = lat0; y <= lat1; y += adim) {
    toplam++;
    var hit = [];
    for (var i = 0; i < G.length; i++) {
      var g = G[i];
      if (x < g.b[0] || x > g.b[2] || y < g.b[1] || y > g.b[3]) continue;
      if (icPoly(g.r, x, y)) hit.push(g.k + ":" + g.ad);
    }
    var u = Array.from(new Set(hit));
    if (u.length >= 1) kapli++;
    if (u.length >= 2) {
      cakisan++; u.sort();
      for (var a = 0; a < u.length; a++) for (var bb = a + 1; bb < u.length; bb++) {
        var key = u[a] + " || " + u[bb]; ciftler[key] = (ciftler[key] || 0) + 1;
      }
    }
  }
  var top = Object.keys(ciftler).map(function (k) { return [k, ciftler[k]]; })
    .sort(function (p, q) { return q[1] - p[1]; }).slice(0, 12);
  return { gun: gun, govde: G.length, hucre: toplam, kapli: kapli, cakisan: cakisan,
           oran: +(100 * cakisan / Math.max(1, kapli)).toFixed(2), enCok: top };
};

// ═══ ② SİVRİ KÖŞE ════════════════════════════════════════════════════════
// Gövde kenarında iç açı < aciEsik ve iki kenar da >= kenarEsik ise SİVRİ.
// (Halka düzeyinde tıkızlık ölçmek BU SORUYU SORMUYOR — sivrilikler ayrı
//  halka değil, gövdenin çıkıntısıdır; bkz. denetim/HARITA-0076.md §3.)
// __aci("1884-01-01", 42.83, 44.68, 39.36, 40.03, 45, 0.05) -> H-0075
// __aci("1871-01-01", 40.46, 45.05, 18.27, 21.14, 45, 0.05) -> H-0022
// __aci("1884-01-01", 41.68, 46.90, 18.72, 21.27, 45, 0.05) -> H-0071
// __aci("1897-05-17", 23.00, 23.60, 39.00, 39.65, 45, 0.02) -> H-0093
window.__aci = function (gun, x0, x1, y0, y1, aciEsik, kenarEsik) {
  tarihAyarla(gunIdx(gun));
  var bul = [];
  ["osmanli", "vassal", "himaye", "devlet"].forEach(function (sid) {
    var s = harita.getSource(sid); if (!s) return;
    var d; try { d = s.serialize().data; } catch (e) { return; }
    (d.features || []).forEach(function (f) {
      var ad = (f.properties && (f.properties.id || f.properties.devlet || f.properties.ad)) || sid;
      var polys = f.geometry.type === "Polygon" ? [f.geometry.coordinates]
                : (f.geometry.type === "MultiPolygon" ? f.geometry.coordinates : []);
      polys.forEach(function (p) { p.forEach(function (r) {
        if (!r || r.length < 5) return; var n = r.length - 1;
        for (var i = 0; i < n; i++) {
          var B = r[i]; if (B[0] < x0 || B[0] > x1 || B[1] < y0 || B[1] > y1) continue;
          var A = r[(i - 1 + n) % n], C = r[(i + 1) % n];
          var v1 = [A[0] - B[0], A[1] - B[1]], v2 = [C[0] - B[0], C[1] - B[1]];
          var l1 = Math.hypot(v1[0], v1[1]), l2 = Math.hypot(v2[0], v2[1]);
          if (l1 < kenarEsik || l2 < kenarEsik) continue;
          var cos = (v1[0] * v2[0] + v1[1] * v2[1]) / (l1 * l2);
          cos = Math.max(-1, Math.min(1, cos));
          var aci = Math.acos(cos) * 180 / Math.PI;
          if (aci < aciEsik) bul.push({ ad: sid + ":" + ad, lon: +B[0].toFixed(3),
            lat: +B[1].toFixed(3), aci: +aci.toFixed(1), kenar: +Math.min(l1, l2).toFixed(3) });
        }
      }); });
    });
  });
  bul.sort(function (a, b) { return a.aci - b.aci; });
  var out = [];
  bul.forEach(function (x) {
    for (var j = 0; j < out.length; j++)
      if (Math.abs(out[j].lon - x.lon) < 0.15 && Math.abs(out[j].lat - x.lat) < 0.15) return;
    out.push(x);
  });
  return { gun: gun, ham: bul.length, tekil: out.length, ilk: out.slice(0, 8) };
};

// ═══ ③ C KATMANININ ÇİZDİĞİ DOLGU ════════════════════════════════════════
// O gün ekranda hangi `hukuki-sinir-dolgu` parçası var, bbox'ı ne?
// Dikdörtgen iddiasının canlı kanıtı budur (denetim/HARITA-0076.md §1).
window.__cDolgu = function (gun) {
  tarihAyarla(gunIdx(gun));
  return harita.queryRenderedFeatures({ layers: ["hukuki-sinir-dolgu"] }).map(function (x) {
    var b = [1e9, 1e9, -1e9, -1e9];
    (x.geometry.coordinates[0] || []).forEach(function (p) {
      b[0] = Math.min(b[0], p[0]); b[1] = Math.min(b[1], p[1]);
      b[2] = Math.max(b[2], p[0]); b[3] = Math.max(b[3], p[1]);
    });
    return { kayit: x.properties.kayit_id, renk: x.properties.renk,
             n: (x.geometry.coordinates[0] || []).length,
             bbox: b.map(function (v) { return +v.toFixed(3); }) };
  });
};

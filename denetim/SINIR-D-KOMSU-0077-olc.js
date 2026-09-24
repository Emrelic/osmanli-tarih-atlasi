// SINIR-D-KOMSU-0077 — hattın 5 km iki yanında doğru renk oranı (SINIR-DUNYA-0077 §4.2)
// Neden .js (şartname .py diyor): yaslama YALNIZ tarayıcıda, js/d_katman.js içinde
// yapılır (motor `hat`ı okumaz). Ekrandaki boyayı ölçmenin tek yolu tarayıcının
// `devlet` + `osmanli` kaynaklarını okumaktır. Kullanım (tarayıcı konsolu, gün
// seçildikten ve yaslama bittikten sonra):
//   fetch("denetim/SINIR-D-KOMSU-0077-olc.js").then(r=>r.text()).then(eval);
//   KOMSU_OLC(["d1923-gr-shs-1","d1923-gr-al"])      // ya da KOMSU_OLC() = ailenin aktif hepsi
// Örnek: her ADIM_KM'de bir hat noktası; o noktada hattın dik yönünde YAN_KM sola ve
// sağa. Sol = ilerleme yönünün solu (_dSeritTek ile AYNI kural: (-uy, ux)).
// Doğru = noktayı içeren gövde, o yanın tarafının harita kimliği (_dTarafGovdesi.hk).
// Boş (hiçbir gövde yok: deniz/göl/delik) ayrı sayılır; oran iki biçimde verilir.
(function () {
  var YAN_KM = 5, ADIM_KM = 2;
  function halkaIcinde(p, ring) {
    var ic = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      if (((yi > p[1]) !== (yj > p[1])) && (p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi)) ic = !ic;
    }
    return ic;
  }
  function poliIcinde(p, poly) {
    if (!halkaIcinde(p, poly[0])) return false;
    for (var h = 1; h < poly.length; h++) if (halkaIcinde(p, poly[h])) return false;
    return true;
  }
  // ham=true: yaslama UYGULANMAMIŞ gövdeler (devletler2'nin o günkü dönemi + donemler) —
  // hattı yeni yazılan (önceden YOK) bir kaydın ÖNCE değeri için.
  function govdeler(ham) {
    var out = [];
    if (ham) {
      devletler2.forEach(function (s) {
        for (var i = 0; i < s.dnm.length; i++) {
          var p = s.dnm[i];
          if (aktifAralik(p.fi, p.ti, suanki)) { ekle(s.id, p.ft && p.ft.geometry); break; }
        }
      });
      var d = donemler[aktifDonem];
      if (d) ((d.o ? tekVeri(d.o) : petekVerisi(d)).features || []).forEach(function (f) { ekle("osmanli", f.geometry); });
      return out;
    }
    function ekle(id, g) {
      if (!g) return;
      var ps = g.type === "Polygon" ? [g.coordinates] : g.type === "MultiPolygon" ? g.coordinates : [];
      ps.forEach(function (pl) { out.push({ id: id, poly: pl }); });
    }
    // MapLibre 4.7: `_data` = {geojson: FeatureCollection} (ilk sürüm `_data.features`
    // okuyordu ve pozitif kontrolde her noktayı "boş" saydı — B9 bunu yakaladı).
    function veri(ad) { var d = harita.getSource(ad)._data; return (d && d.geojson) || d; }
    var dv = veri("devlet");
    (dv.features || []).forEach(function (f) { ekle(f.properties && f.properties.id, f.geometry); });
    var os = veri("osmanli");
    (os && os.features || []).forEach(function (f) { ekle("osmanli", f.geometry); });
    return out;
  }
  function sahip(p, G) {
    for (var i = 0; i < G.length; i++) if (poliIcinde(p, G[i].poly)) return G[i].id;
    return null;
  }
  function ornekler(h) {
    var o = [];
    for (var i = 0; i + 1 < h.length; i++) {
      var p = h[i], q = h[i + 1];
      var kx = 111.32 * Math.cos((p[1] + q[1]) / 2 * Math.PI / 180), ky = 110.57;
      var ux = (q[0] - p[0]) * kx, uy = (q[1] - p[1]) * ky, L = Math.sqrt(ux * ux + uy * uy);
      if (L < 1e-6) continue;
      var n = Math.max(1, Math.round(L / ADIM_KM));
      var ox = (-uy / L) * YAN_KM / kx, oy = (ux / L) * YAN_KM / ky;
      for (var s = 0; s < n; s++) {
        var t = (s + 0.5) / n, x = p[0] + (q[0] - p[0]) * t, y = p[1] + (q[1] - p[1]) * t;
        o.push({ sol: [x + ox, y + oy], sag: [x - ox, y - oy] });
      }
    }
    return o;
  }
  window.KOMSU_OLC = function (idler, aile, ham) {
    var gun = suanki, G = govdeler(ham), sonuc = [];
    var dizi = window[aile || "D_SINIRLAR_KOMSU"] || [];
    dizi.forEach(function (k) {
      if (idler && idler.indexOf(k.id) < 0) return;
      if (!idler) {
        if (!Array.isArray(k.hat) || k.hat.length < 2 || k.f == null) return;
        if (gun < gunIdx(k.f) || (k.t != null && gun >= gunIdx(k.t))) return;
      }
      var tf = k.taraflar || [], solId = k.sol_taraf, sagId = tf.filter(function (x) { return x !== solId; })[0];
      var gs = _dTarafGovdesi(solId, gun), gr = _dTarafGovdesi(sagId, gun);
      var r = { id: k.id, sinif: k.sinif, yaslandi: _dYaslandiMi(k.id), sol: gs && gs.hk, sag: gr && gr.hk,
                n: 0, dogru: 0, yanlis: 0, bos: 0, yanlisKim: {} };
      if (!gs || !gr) { r.not = "taraf gövdesi yok"; sonuc.push(r); return; }
      ornekler(k.hat).forEach(function (o) {
        [[o.sol, gs.hk], [o.sag, gr.hk]].forEach(function (a) {
          r.n++;
          var s = sahip(a[0], G);
          if (s === a[1]) r.dogru++;
          else if (s == null) r.bos++;
          else { r.yanlis++; r.yanlisKim[s] = (r.yanlisKim[s] || 0) + 1; }
        });
      });
      r.oran_karada = r.dogru + r.yanlis ? +(100 * r.dogru / (r.dogru + r.yanlis)).toFixed(1) : null;
      r.oran_tum = r.n ? +(100 * r.dogru / r.n).toFixed(1) : null;
      sonuc.push(r);
    });
    return { gun: idxYazi(gun), gorunum: _dGorunum, sonuc: sonuc };
  };
})();

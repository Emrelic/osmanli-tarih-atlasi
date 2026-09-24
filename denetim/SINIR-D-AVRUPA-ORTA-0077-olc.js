// SINIR-D-AVRUPA-ORTA-0077 — hattın 5 km iki yanında doğru renk oranı (şartname §4.2).
// denetim/SINIR-D-ASYA-0077-olc.js'in BİREBİR kopyası (yalnız başlık + varsayılan aile);
// iki bölge aynı ölçüyle ölçülsün diye yeniden yazılmadı. Şartname .py der; yaslama
// tarayıcıda yapıldığı için ölçü de tarayıcıda koşar (ASYA'nın gerekçesi aynen).
// TARAYICIDA koşar: yaslama tarayıcıda (js/d_katman.js) yapılır, Python'da
// yeniden kurmak ölçüyü ölçülen şeyden ayırırdı. Kullanım (sayfa konsolu):
//   window.__OLC = { aileler:["D_SINIRLAR_AVRUPA_ORTA"], idler:null, gun:"1923-09-01", adim:10, ofset:5 };
//   eval(await fetch("denetim/SINIR-D-AVRUPA-ORTA-0077-olc.js?"+Date.now()).then(r=>r.text()));
//   // sonuç: window.__OLC_SONUC (özet) · window.__OLC_SONUC.hatlar (hat başına)
// İki ölçü verir:
//   ham  = petek gövdesi (devletler2 ft) — yaslama YOKKEN ekranda olacak olan
//   son  = ekranda çizilen (yaslanan gövde _dYaslaSon'dan, öbürleri ham)
// Nokta sahibi: noktayı içeren gövde; iki tarafın gövdesi öncelikli sorulur,
// hiçbiri değilse bütün o gün aktif gövdeler taranır. Hiçbir gövdede olmayan
// nokta (deniz/delik) paydadan ÇIKAR ve ayrıca sayılır.
(function () {
  var A = window.__OLC || {};
  var aileler = A.aileler || ["D_SINIRLAR_AVRUPA_ORTA"];
  var gun = gunIdx(A.gun || "1923-09-01");
  var ADIM = A.adim || 10, OFSET = A.ofset || 5;
  var sinifSuz = A.siniflar || null;

  function icinde(pt, ring) {
    var x = pt[0], y = pt[1], ic = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) ic = !ic;
    }
    return ic;
  }
  function mpIcinde(pt, mp) {
    for (var p = 0; p < mp.length; p++) {
      var poly = mp[p];
      if (!poly.length || !icinde(pt, poly[0])) continue;
      var delik = false;
      for (var h = 1; h < poly.length; h++) if (icinde(pt, poly[h])) { delik = true; break; }
      if (!delik) return true;
    }
    return false;
  }
  function poliOf(g) { var d = []; _dPoliEkle(d, g); return d; }

  // o gün aktif bütün gövdeler (ham)
  var govdeler = {};
  (devletler2 || []).forEach(function (s) {
    for (var i = 0; i < s.dnm.length; i++) {
      var p = s.dnm[i];
      if (aktifAralik(p.fi, p.ti, gun)) { govdeler[s.id] = poliOf(p.ft && p.ft.geometry); break; }
    }
  });
  var son = Object.assign({}, govdeler);
  var yaslananGovde = Object.keys(_dYaslaSon || {});
  yaslananGovde.forEach(function (hk) { if (hk !== "osmanli") son[hk] = _dYaslaSon[hk]; });
  var tumHk = Object.keys(govdeler);

  function sahip(pt, kume, once) {
    for (var i = 0; i < once.length; i++) if (once[i] && kume[once[i]] && mpIcinde(pt, kume[once[i]])) return once[i];
    for (var k = 0; k < tumHk.length; k++) if (kume[tumHk[k]] && mpIcinde(pt, kume[tumHk[k]])) return tumHk[k];
    return null;
  }

  // hat üzerinde ADIM km'de bir örnek + 5 km sol/sağ
  function ornekler(h) {
    var out = [], birikim = 0, sonraki = ADIM / 2;
    for (var i = 0; i + 1 < h.length; i++) {
      var la = h[i][1] * Math.PI / 180, kx = 111.32 * Math.cos(la), ky = 110.57;
      var dx = (h[i + 1][0] - h[i][0]) * kx, dy = (h[i + 1][1] - h[i][1]) * ky;
      var L = Math.sqrt(dx * dx + dy * dy);
      if (L === 0) continue;
      while (sonraki <= birikim + L) {
        var t = (sonraki - birikim) / L;
        var x = h[i][0] + t * (h[i + 1][0] - h[i][0]), y = h[i][1] + t * (h[i + 1][1] - h[i][1]);
        var nx = dy / L, ny = -dx / L;              // yönün SAĞI
        out.push({
          sag: [x + nx * OFSET / kx, y + ny * OFSET / ky],
          sol: [x - nx * OFSET / kx, y - ny * OFSET / ky]
        });
        sonraki += ADIM;
      }
      birikim += L;
    }
    return out;
  }

  var hatlar = [], atl = (typeof _dYaslaSayac !== "undefined" && _dYaslaSayac.atlanan) || [];
  aileler.forEach(function (aile) {
    (window[aile] || []).forEach(function (k) {
      if (!k.hat || k.sinif === "YOK") return;
      if (A.idler && A.idler.indexOf(k.id) < 0) return;
      if (sinifSuz && sinifSuz.indexOf(k.sinif) < 0) return;
      if (!aktifAralik(gunIdx(k.f), gunIdx(k.t), gun)) return;
      var tf = k.taraflar || [];
      var solT = k.sol_taraf, sagT = tf.filter(function (x) { return x !== solT; })[0];
      var gs = _dTarafGovdesi(solT, gun), gr = _dTarafGovdesi(sagT, gun);
      var hs = gs && gs.hk, hr = gr && gr.hk;
      var r = { id: k.id, aile: aile, sinif: k.sinif, km: Math.round(_dHatKm(k.hat)), sol: hs || ("?" + solT), sag: hr || ("?" + sagT),
                yaslandi: !!(_dYaslananlar || {})[k.id], n: 0,
                ham: { dogru: 0, yanlis: 0, bos: 0 }, son: { dogru: 0, yanlis: 0, bos: 0 }, yanlisOrnek: [] };
      r.atlanma = atl.filter(function (s) { return s.indexOf(k.id + ":") === 0; }).join(" | ");
      ornekler(k.hat).forEach(function (o) {
        [["sol", hs], ["sag", hr]].forEach(function (yb) {
          var pt = o[yb[0]], bek = yb[1];
          r.n++;
          [["ham", govdeler], ["son", son]].forEach(function (kk) {
            var s = sahip(pt, kk[1], [hs, hr]);
            if (!s) r[kk[0]].bos++;
            else if (s === bek) r[kk[0]].dogru++;
            else {
              r[kk[0]].yanlis++;
              if (kk[0] === "son" && r.yanlisOrnek.length < 3) r.yanlisOrnek.push([+pt[0].toFixed(3), +pt[1].toFixed(3), s]);
            }
          });
        });
      });
      ["ham", "son"].forEach(function (x) {
        var d = r[x].dogru + r[x].yanlis;
        r[x].oran = d ? Math.round(1000 * r[x].dogru / d) / 10 : null;
      });
      hatlar.push(r);
    });
  });
  function topla(f) {
    var t = { ham: { d: 0, y: 0 }, son: { d: 0, y: 0 }, km: 0, n: 0 };
    hatlar.filter(f).forEach(function (r) {
      t.km += r.km; t.n++;
      t.ham.d += r.ham.dogru; t.ham.y += r.ham.yanlis; t.son.d += r.son.dogru; t.son.y += r.son.yanlis;
    });
    t.ham.oran = (t.ham.d + t.ham.y) ? Math.round(1000 * t.ham.d / (t.ham.d + t.ham.y)) / 10 : null;
    t.son.oran = (t.son.d + t.son.y) ? Math.round(1000 * t.son.d / (t.son.d + t.son.y)) / 10 : null;
    return t;
  }
  window.__OLC_SONUC = {
    gun: A.gun || "1923-09-01", aileler: aileler, adim_km: ADIM, ofset_km: OFSET,
    hepsi: topla(function () { return true; }),
    E: topla(function (r) { return r.sinif === "E" || r.sinif === "F"; }),
    C: topla(function (r) { return r.sinif === "C"; }),
    yaslanan_hat: hatlar.filter(function (r) { return r.yaslandi; }).length,
    hatlar: hatlar
  };
  return window.__OLC_SONUC;
})();

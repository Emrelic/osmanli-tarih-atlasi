// SINIR-D-ORTADOGU-0077 — "hattın 5 km iki yanında doğru renk oranı" ölçüsü
// (oturumlar/SINIR-DUNYA-0077.md §4.2). TARAYICIDA koşar: yaslama js/d_katman.js'te,
// tarayıcıda kurulur; aynı hesabı Python'da taklit etmek ölçü değil model olurdu.
// Bu yüzden şartnamenin ".py" dediği yerde .js var (sapma teslimde bildirilir).
//
// Kullanım (önizleme sekmesinde, javascript_tool ile):
//   1) bu dosyanın metni sayfaya eval edilir → window.SDO_OLC tanımlanır
//   2) await SDO_OLC({ gun:"1923-09-01", aileler:["D_SINIRLAR_ORTADOGU"], adimKm:10, yanKm:5 })
// Dönen: hat başına { id, sinif, yaslandi, n, once, sonra } + toplam.
//   once  = A/B gövdeleri (devletler2 + osmanli dönemi) — yaslamasız, çizgisiz hâl
//   sonra = _dYaslaSon ile düzeltilmiş gövdeler — ekranda görünen hâl
// Doğru renk: hattın SOLUNDAKİ nokta sol_taraf'ın, SAĞINDAKİ öteki tarafın gövdesinde.
// Hiçbir gövdenin içinde olmayan nokta (deniz/boşluk/üçüncü devlet) "yanlış" sayılır
// ama ayrıca `baska` sayacında raporlanır — denizdeki örnek hat kusuru değildir.
// Deniz örneği ELENMEZ ölçüden: tarafların ikisinin de gövdesi yoksa nokta "hesapsız".
(function () {
  function pip(pt, ring) {
    var x = pt[0], y = pt[1], ic = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) ic = !ic;
    }
    return ic;
  }
  function mpIcinde(pt, mp) {
    for (var p = 0; p < mp.length; p++) {
      if (!pip(pt, mp[p][0])) continue;
      var delik = false;
      for (var h = 1; h < mp[p].length; h++) if (pip(pt, mp[p][h])) { delik = true; break; }
      if (!delik) return true;
    }
    return false;
  }
  function kutu(mp) {
    var k = [Infinity, Infinity, -Infinity, -Infinity];
    mp.forEach(function (p) { p[0].forEach(function (c) {
      if (c[0] < k[0]) k[0] = c[0]; if (c[1] < k[1]) k[1] = c[1];
      if (c[0] > k[2]) k[2] = c[0]; if (c[1] > k[3]) k[3] = c[1]; }); });
    return k;
  }
  function geo2mp(g) {
    if (!g) return [];
    if (g.type === "Polygon") return [g.coordinates];
    if (g.type === "MultiPolygon") return g.coordinates;
    return [];
  }
  // O günün bütün gövdeleri {hk: mp}; `yama` verilirse onun hk'leri değiştirilir
  function govdeler(gun, yama) {
    var G = {};
    devletler2.forEach(function (s) {
      for (var i = 0; i < s.dnm.length; i++) {
        var p = s.dnm[i];
        if (aktifAralik(p.fi, p.ti, gun)) { G[s.id] = geo2mp(p.ft && p.ft.geometry); break; }
      }
    });
    var osm = _dTarafGovdesi("osmanli", gun);
    if (osm) G.osmanli = osm.poli;
    if (yama) Object.keys(yama).forEach(function (hk) { G[hk] = yama[hk]; });
    var L = [];
    Object.keys(G).forEach(function (hk) { if (G[hk].length) L.push({ hk: hk, mp: G[hk], k: kutu(G[hk]) }); });
    return L;
  }
  function kimde(pt, L) {
    var r = [];
    for (var i = 0; i < L.length; i++) {
      var k = L[i].k;
      if (pt[0] < k[0] || pt[0] > k[2] || pt[1] < k[1] || pt[1] > k[3]) continue;
      if (mpIcinde(pt, L[i].mp)) r.push(L[i].hk);
    }
    return r;
  }
  // hat boyunca her adimKm'de bir örnek; her örnekte hatta dik yanKm sol/sağ
  function ornekler(h, adimKm, yanKm) {
    var out = [];
    for (var i = 0; i + 1 < h.length; i++) {
      var p = h[i], q = h[i + 1];
      var kx = 111.32 * Math.cos((p[1] + q[1]) / 2 * Math.PI / 180), ky = 110.57;
      var ux = (q[0] - p[0]) * kx, uy = (q[1] - p[1]) * ky, L = Math.sqrt(ux * ux + uy * uy);
      if (L < 1e-6) continue;
      var n = Math.max(1, Math.round(L / adimKm));
      for (var j = 0; j < n; j++) {
        var t = (j + 0.5) / n, m = [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
        var ox = (-uy / L) * yanKm / kx, oy = (ux / L) * yanKm / ky;
        out.push({ sol: [m[0] + ox, m[1] + oy], sag: [m[0] - ox, m[1] - oy] });
      }
    }
    return out;
  }
  function hk(taraf, gun) { var g = _dTarafGovdesi(taraf, gun); return g ? g.hk : null; }

  // Önizleme bölmesi gizliyken MapLibre yüklenmez (haritaHazir=false) ve yaslama
  // hiç koşmaz. Yaslamanın KENDİ kodu (_dYaslaGuncelle) burada kaynak yazımı
  // taklit edilerek koşturulur: hesap aynı, yalnız setData boşa gider.
  // Harita yüklüyse hiçbir şey taklit edilmez.
  window.SDO_YASLA = function (gunS) {
    var gun = gunIdx(gunS || "1923-09-01");
    suanki = gun;
    var t0 = performance.now(), taklit = !harita.loaded();
    if (taklit) {
      var di = donemBul(gun); if (di >= 0) aktifDonem = di;
      var asil = harita.getSource;
      harita.getSource = function () { return { setData: function () {} }; };
      try { _dYaslaImza = null; _dYaslaGuncelle(gun); } finally { harita.getSource = asil; }
    } else { _dYaslaImza = null; _dYaslaGuncelle(gun); }
    return { taklit: taklit, sn: Math.round((performance.now() - t0) / 100) / 10,
             yaslanan: Object.keys(_dYaslananlar).length, sayac: _dYaslaSayac };
  };

  window.SDO_OLC = function (o) {
    o = o || {};
    var gunS = o.gun || "1923-09-01", gun = gunIdx(gunS);
    var adim = o.adimKm || 10, yan = o.yanKm || 5;
    if (suanki !== gun) return { hata: "harita " + idxYazi(suanki) + " gününde; önce tarihAyarla(gunIdx('" + gunS + "')) ve yaslamayı bekle" };
    var once = govdeler(gun, null), sonra = govdeler(gun, _dYaslaSon || {});
    var satir = [], T = { n: 0, once: 0, sonra: 0, hesapsiz: 0 };
    (o.aileler || ["D_SINIRLAR_ORTADOGU"]).forEach(function (ad) {
      (window[ad] || []).forEach(function (k) {
        if (!Array.isArray(k.hat) || k.hat.length < 2) return;
        if (gun < gunIdx(k.f) || (k.t != null && gun >= gunIdx(k.t))) return;
        var sinif = _dEtkinSinif(k);
        if (o.siniflar && o.siniflar.indexOf(sinif) < 0) return;
        var solId = k.sol_taraf, sagId = (k.taraflar || []).filter(function (x) { return x !== solId; })[0];
        var hs = solId ? hk(solId, gun) : null, hr = sagId ? hk(sagId, gun) : null;
        var r = { aile: ad, id: k.id, sinif: sinif, yaslandi: _dYaslandiMi(k.id), km: Math.round(_dHatKm(k.hat)),
                  sol: solId + "→" + hs, sag: sagId + "→" + hr, n: 0, once: 0, sonra: 0, hesapsiz: 0, baska_once: {}, baska_sonra: {} };
        ornekler(k.hat, adim, yan).forEach(function (s) {
          [[s.sol, hs], [s.sag, hr]].forEach(function (pv) {
            if (!pv[1]) { r.hesapsiz++; return; }
            r.n++;
            var a = kimde(pv[0], once), b = kimde(pv[0], sonra);
            if (a.indexOf(pv[1]) >= 0) r.once++; else { var x = a.join("+") || "(boş)"; r.baska_once[x] = (r.baska_once[x] || 0) + 1; }
            if (b.indexOf(pv[1]) >= 0) r.sonra++; else { var y = b.join("+") || "(boş)"; r.baska_sonra[y] = (r.baska_sonra[y] || 0) + 1; }
          });
        });
        r.once_yuzde = r.n ? Math.round(100 * r.once / r.n) : null;
        r.sonra_yuzde = r.n ? Math.round(100 * r.sonra / r.n) : null;
        T.n += r.n; T.once += r.once; T.sonra += r.sonra; T.hesapsiz += r.hesapsiz;
        satir.push(r);
      });
    });
    T.once_yuzde = T.n ? Math.round(1000 * T.once / T.n) / 10 : null;
    T.sonra_yuzde = T.n ? Math.round(1000 * T.sonra / T.n) / 10 : null;
    return { gun: gunS, adimKm: adim, yanKm: yan, gorunum: _dGorunum, yaslaSayac: _dYaslaSayac, toplam: T, hatlar: satir };
  };
})();

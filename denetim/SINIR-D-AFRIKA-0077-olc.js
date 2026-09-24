// denetim/SINIR-D-AFRIKA-0077-olc.js — hattın 5 km iki yanında DOĞRU RENK ORANI, ÖNCE → SONRA
// SINIR-D-AFRIKA-0077 · 24 Eylül 2026 · ölçü şartname §4.2 (SINIR-DUNYA-0077.md)
//
// NEDEN .py DEĞİL: "SONRA" (yaslanmış gövde) yalnız tarayıcı belleğinde yaşar
// (js/d_katman.js `_dYaslaSon`); diske yazılmaz. Python'dan ölçülürse SONRA ölçülemez.
// Kullanım (sayfa açık, harita hazır, gün seçili):
//   eval(await (await fetch("denetim/SINIR-D-AFRIKA-0077-olc.js")).text());
//   SDA_OLC({ aile: "D_SINIRLAR_AFRIKA", km: 5, adim: 10, esle: {...}, ters: false })
//
// ÖNCE  = app.js'in kendi gövdesi (devletler2[].dnm[].ft) — yaslamasız.
// SONRA = _dYaslaSon[hk] varsa o, yoksa ÖNCE ile aynı gövde.
// Nokta DOĞRU ⇔ beklenen yanın gövdesinde VE öbür yanın gövdesinde değil.
// Beklenen gövde anahtarı _dTarafGovdesi ile aynı kuralla: künye harita: → yoksa id;
// `esle` verilirse (sömürge künyesi → metropol gövdesi) o önce gelir — BEYANDIR, ölçümün
// varsayımıdır, sonuçla birlikte basılır.
// `ters:true` NEGATİF KONTROL: sol_taraf ters çevrilir; doğru oran çökmeli.
// Yalnız E/F (hukukî görünümün yasladığı) ve isteğe bağlı C sınıfı ölçülür.
(function () {
  function pip(x, y, ring) {
    var ins = false;
    for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      var xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1];
      if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) ins = !ins;
    }
    return ins;
  }
  function icinde(mp, x, y) {
    if (!mp) return false;
    for (var p = 0; p < mp.length; p++) {
      if (!pip(x, y, mp[p][0])) continue;
      var delik = false;
      for (var h = 1; h < mp[p].length; h++) if (pip(x, y, mp[p][h])) { delik = true; break; }
      if (!delik) return true;
    }
    return false;
  }
  function govdeOnce(hk, gun) {
    if (hk === "osmanli") { var g = _dTarafGovdesi("osmanli", gun); return g ? g.poli : null; }
    var s = devletler2.find(function (x) { return x.id === hk; });
    if (!s) return null;
    for (var i = 0; i < s.dnm.length; i++) {
      var p = s.dnm[i];
      if (aktifAralik(p.fi, p.ti, gun)) { var pl = []; _dPoliEkle(pl, p.ft && p.ft.geometry); return pl.length ? pl : null; }
    }
    return null;
  }
  function hkBul(id, gun, esle) {
    if (esle && esle[id]) return esle[id];
    if (id === "osmanli") return "osmanli";
    var k = (window.DEVLETLER || []).find(function (x) { return x.id === id; });
    var hk = (k && k.harita) || id;
    if (!govdeOnce(hk, gun) && govdeOnce(id, gun)) hk = id;
    return hk;
  }
  window.SDA_OLC = function (o) {
    o = o || {};
    var gun = o.gun != null ? o.gun : suanki, km = o.km || 5, adim = o.adim || 10;
    var siniflar = o.siniflar || { E: 1, F: 1 };
    var dizi = window[o.aile || "D_SINIRLAR_AFRIKA"] || [];
    var hatlar = [], TOP = { once: 0, sonra: 0, n: 0 };
    dizi.forEach(function (k) {
      if (!k || !Array.isArray(k.hat) || k.hat.length < 2) return;
      if (o.idler && o.idler.indexOf(k.id) < 0) return;
      var s = _dEtkinSinif(k);
      if (!siniflar[s]) return;
      if (gun < gunIdx(k.f) || (k.t != null && gun >= gunIdx(k.t))) return;
      var tf = k.taraflar || [];
      var solId = k.sol_taraf, sagId = tf.filter(function (x) { return x !== solId; })[0];
      if (o.ters) { var t = solId; solId = sagId; sagId = t; }
      var hs = hkBul(solId, gun, o.esle), hr = hkBul(sagId, gun, o.esle);
      var r = { id: k.id, sinif: s, sol: solId + "→" + hs, sag: sagId + "→" + hr, ayni: hs === hr, n: 0, once: 0, sonra: 0 };
      var Gs0 = govdeOnce(hs, gun), Gr0 = govdeOnce(hr, gun);
      var Gs1 = (_dYaslaSon && _dYaslaSon[hs]) || Gs0, Gr1 = (_dYaslaSon && _dYaslaSon[hr]) || Gr0;
      r.govde = (Gs0 ? "s✓" : "s✗") + (Gr0 ? "r✓" : "r✗");
      var h = k.hat, birikim = adim / 2;
      for (var i = 0; i + 1 < h.length; i++) {
        var p = h[i], q = h[i + 1];
        var kx = 111.32 * Math.cos((p[1] + q[1]) / 2 * Math.PI / 180), ky = 110.57;
        var ux = (q[0] - p[0]) * kx, uy = (q[1] - p[1]) * ky, L = Math.sqrt(ux * ux + uy * uy);
        if (L < 1e-9) continue;
        var d = birikim;
        while (d <= L) {
          var t2 = d / L, cx = p[0] + (q[0] - p[0]) * t2, cy = p[1] + (q[1] - p[1]) * t2;
          var ox = (-uy / L) * km / kx, oy = (ux / L) * km / ky;       // ilerleme yönünün SOLU
          [[cx + ox, cy + oy, 1], [cx - ox, cy - oy, 0]].forEach(function (nk) {
            var bekS = nk[2] === 1;
            var ok0 = bekS ? (icinde(Gs0, nk[0], nk[1]) && !icinde(Gr0, nk[0], nk[1]))
                           : (icinde(Gr0, nk[0], nk[1]) && !icinde(Gs0, nk[0], nk[1]));
            var ok1 = bekS ? (icinde(Gs1, nk[0], nk[1]) && !icinde(Gr1, nk[0], nk[1]))
                           : (icinde(Gr1, nk[0], nk[1]) && !icinde(Gs1, nk[0], nk[1]));
            r.n++; if (ok0) r.once++; if (ok1) r.sonra++;
          });
          d += adim;
        }
        birikim = d - L;
      }
      r.oran_once = r.n ? Math.round(1000 * r.once / r.n) / 10 : null;
      r.oran_sonra = r.n ? Math.round(1000 * r.sonra / r.n) / 10 : null;
      r.yaslandi = _dYaslandiMi(k.id);
      hatlar.push(r);
      if (!r.ayni) { TOP.n += r.n; TOP.once += r.once; TOP.sonra += r.sonra; }
    });
    return {
      gun: idxYazi(gun), aile: o.aile || "D_SINIRLAR_AFRIKA", km: km, adim: adim, ters: !!o.ters,
      esle: o.esle ? Object.keys(o.esle).length + " beyanlı eşleme" : "yok",
      toplam_farkli_taraf: { n: TOP.n, once: TOP.n ? Math.round(1000 * TOP.once / TOP.n) / 10 : null,
                             sonra: TOP.n ? Math.round(1000 * TOP.sonra / TOP.n) / 10 : null },
      hatlar: hatlar
    };
  };
})();

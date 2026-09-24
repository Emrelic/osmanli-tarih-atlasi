// SINIR-D-AVRUPA-BATI-0077 — tarayıcı yarısı (javascript_tool ile sayfada koşar).
// Tarihi 1923-09-01'e kurar, yaslamanın yazdığı `devlet` kaynağını okur, her
// örnek noktanın o kaynakta hangi gövdeye düştüğünü sorar. Beklenen gövde
// d_katman.js'in kendi eşlemesiyle (_dTarafGovdesi → hk) bulunur. HİÇBİR ŞEY YAZMAZ.
(async function () {
  var N = await (await fetch("denetim/SINIR-D-AVRUPA-BATI-0077-noktalar.json?" + Date.now())).json();
  var gun = gunIdx(N.gun);
  // Pane gizliyken MapLibre stili yüklenmez (getSource undefined). O hâlde
  // `devlet`/`osmanli` için setData'yı yakalayan sahte kaynak takılır ve
  // yaslama DOĞRUDAN çağrılır — hesap d_katman.js'in kendisidir, yalnız çizim yok.
  // window.__OLC_YASLA === false → yaslamasız ham A/B gövdesi (karşılaştırma için).
  // Sahte kaynak HER ZAMAN takılır (MapLibre _data biçimi sürüme göre değişiyor)
  // ve ölçüm bitince asıl getSource geri konur.
  var sahte = {};
  var asil = harita.getSource;
  ["devlet", "osmanli"].forEach(function (a) { sahte[a] = { _data: null, setData: function (d) { this._data = d; } }; });
  harita.getSource = function (a) { return sahte[a] || asil.call(harita, a); };
  try { tarihAyarla(gun); } catch (e) { suanki = gun; }
  _dYaslaImza = null;
  if (window.__OLC_YASLA === false) {
    _dDevletKaynaginiYaz(gun, {});
  } else {
    _dYaslaGuncelle(gun);
    if (!harita.getSource("devlet")._data) _dDevletKaynaginiYaz(gun, {});   // yama yoksa ham
  }
  var fs = harita.getSource("devlet")._data.features;
  var yaslaSayac = JSON.parse(JSON.stringify(_dYaslaSayac));
  harita.getSource = asil;
  _dYaslaImza = null;
  var gov = fs.map(function (f) {
    var pl = []; _dPoliEkle(pl, f.geometry); return { id: f.properties.id, poli: pl };
  });
  var osm = (function () { var g = _dTarafGovdesi("osmanli", gun); return g ? g.poli : []; })();
  function sahip(x, y) {
    if (osm.length && _dNoktaPolide(x, y, osm)) return "osmanli";
    for (var i = 0; i < gov.length; i++) if (_dNoktaPolide(x, y, gov[i].poli)) return gov[i].id;
    return null;
  }
  var hkOn = {};
  function hk(t) {
    if (!(t in hkOn)) { var g = _dTarafGovdesi(t, gun); hkOn[t] = g ? g.hk : "YOK:" + t; }
    return hkOn[t];
  }
  var out = N.hatlar.filter(function (h) { return h.p; }).map(function (h) {
    var dg = 0, yn = 0, bs = 0, yanlislar = {};
    h.p.forEach(function (p) {
      var s = sahip(p[0], p[1]);
      if (s == null) bs++;
      else if (s === hk(p[2])) dg++;
      else { yn++; yanlislar[s] = (yanlislar[s] || 0) + 1; }
    });
    return { id: h.id, sinif: h.sinif, km: h.km, dogru: dg, yanlis: yn, bos: bs, yanlislar: yanlislar };
  });
  return JSON.stringify({ gun: N.gun, yasla: window.__OLC_YASLA === false ? "KAPALI" : yaslaSayac, gorunum: _dGorunum, hatlar: out });
})();

// kaynak_damga.js — KAYNAK DAMGASI (tarayıcı tarafı) · KAYNAK-ARAYUZ-1014, 14 Ekim 2026
//
// Emre'nin kuralı (14 Ekim 2026): her kronoloji maddesinde "Kaynaklar" bağlantısı
// olur, tıklanınca maddenin dayandığı kaynaklar DAMGASIYLA listelenir; yalnız
// güvensiz kaynağa (Vikipedi vb.) dayanan madde SİTEDE GÖSTERİLMEZ.
//
// Tablo: data/kaynak_guven.js (window.KAYNAK_GUVEN) — TEK DOĞRULUK KAYNAĞI.
// Bu dosya arac/kaynak_guven.py `Siniflayici`nın BİREBİR eşidir; eşlik
// denetim/KAYNAK-ARAYUZ-1014/esit_sina.py ile madde madde ölçülür (iki dil
// aynı maddeye farklı damga verirse site ile ölçüm ayrışır — o sınav kırılır).
//
//   window.KaynakDamga.damgala(kaynak, t) →
//     { damga: bos|bulunamadi|guvenli|ikincil|taninmayan|guvensiz,
//       alt: null|"C"|"adsiz",
//       parcalar: [{ p, kademe: A|B|K|C|Y|N|null, kodlar:[…], karisik, url }] }
//   window.KaynakDamga.gizli(madde) → true yalnız damga "guvensiz" ise
//
// Tablo yüklenmediyse KaynakDamga = null; çağıranlar hiçbir maddeyi gizlemez
// (tablo yokken içerik kaybetmek, damgasız göstermekten pahalıdır) ve konsola BAĞIRIR.
(function () {
  var T = window.KAYNAK_GUVEN;
  if (!T || !T.kaynaklar) {
    console.error("Atlas: data/kaynak_guven.js YÜKLENMEDİ — kaynak damgası ve güvensiz madde gizleme KAPALI");
    window.KaynakDamga = null;
    return;
  }
  var SIRA = { A: 0, B: 1, K: 2, C: 3, Y: 4, N: 5 };     // kaynak_guven.py KADEME_SIRA
  var ayirici = new RegExp(T.parcala.ayirici);
  var bulunamadi = new RegExp(T.bulunamadi_desen, "i");   // desen ^ ile başlar (Python .match)
  var slug = new RegExp(T.tdv_slug.desen);                // desen ^…$ (Python .match)
  var slugHaric = {};
  (T.tdv_slug.haric || []).forEach(function (s) { slugHaric[s] = true; });
  var slugUrl = T.tdv_slug.url_kalibi;
  var tdvKademe = "A";
  var girdiler = T.kaynaklar.map(function (e) {
    if (e.kod === "TDV") tdvKademe = e.kademe;
    var rx = (e.desen || []).map(function (p) { return new RegExp(p, "i"); })
      .concat((e.desen_duyarli || []).map(function (p) { return new RegExp(p); }));
    return { kod: e.kod, kademe: e.kademe, genel: !!e.genel, rx: rx,
             sonra: e.yalniz_sonra || null, once: e.once_kademe || null };
  });

  function metin(k) {
    if (k == null) return null;
    return Array.isArray(k) ? k.map(function (x) { return x == null ? "" : String(x); }).join(",") : String(k);
  }
  function parcala(k) {
    return metin(k).split(ayirici).map(function (p) { return p.trim(); })
      .filter(function (p) { return p; });
  }
  function tarihIso(t) {
    var m = /^(\d{1,4})(?:-(\d{1,2}))?(?:-(\d{1,2}))?/.exec(String(t == null ? "" : t).trim());
    if (!m) return null;
    function d(s, n) { s = String(s); while (s.length < n) s = "0" + s; return s; }
    return d(+m[1], 4) + "-" + d(+(m[2] || 1), 2) + "-" + d(+(m[3] || 1), 2);
  }
  function eslesen(s, tarih) {
    var ozel = [], genel = [];
    girdiler.forEach(function (g) {
      for (var i = 0; i < g.rx.length; i++) {
        if (g.rx[i].test(s)) {
          var kad = g.kademe;
          if (g.sonra && (tarih === null || tarih < g.sonra)) kad = g.once;
          (g.genel ? genel : ozel).push([g.kod, kad]);
          return;
        }
      }
    });
    return ozel.length ? ozel : genel;
  }
  function parcaSinifla(p, tarih) {
    var es = [], url = null;
    var m = slug.exec(p);
    if (m && !slugHaric[m[1]]) {
      es.push(["TDV", tdvKademe]);
      url = slugUrl.replace("{slug}", m[1]);
      if (m[2]) es = es.concat(eslesen(m[2], tarih));
    } else {
      es = eslesen(p, tarih);
    }
    if (!es.length) return { kademe: null, kodlar: [], karisik: false, url: url };
    var kad = {}, kod = {};
    es.forEach(function (x) { kod[x[0]] = true; kad[x[1]] = true; });
    var kodlar = Object.keys(kod).sort();
    if (kad.C && (kad.A || kad.B)) return { kademe: "C", kodlar: kodlar, karisik: true, url: url };
    var en = Object.keys(kad).sort(function (a, b) { return SIRA[a] - SIRA[b]; })[0];
    return { kademe: en, kodlar: kodlar, karisik: false, url: url };
  }
  function damgala(kaynak, t) {
    var k = metin(kaynak);
    if (k === null || !k.trim()) return { damga: "bos", alt: null, parcalar: [] };
    k = k.trim();
    var tarih = tarihIso(t);
    var parcalar = parcala(k).map(function (p) {
      var s = parcaSinifla(p, tarih); s.p = p; return s;
    });
    if (bulunamadi.test(k)) return { damga: "bulunamadi", alt: null, parcalar: parcalar };
    var kad = {};
    parcalar.forEach(function (x) { kad[x.kademe === null ? "null" : x.kademe] = true; });
    if (kad.A) return { damga: "guvenli", alt: null, parcalar: parcalar };
    if (kad.B) return { damga: "ikincil", alt: null, parcalar: parcalar };
    if (kad["null"] || kad.K) return { damga: "taninmayan", alt: null, parcalar: parcalar };
    if (kad.C) return { damga: "guvensiz", alt: "C", parcalar: parcalar };
    return { damga: "guvensiz", alt: "adsiz", parcalar: parcalar };
  }
  // Aynı madde nesnesi birçok yerden sorulur (liste, panel, odak) — sonuç nesneye bağlı önbellekte.
  var onbellek = typeof WeakMap === "function" ? new WeakMap() : null;
  function maddeDamga(m) {
    if (!m || typeof m !== "object") return damgala(null, null);
    if (onbellek && onbellek.has(m)) return onbellek.get(m);
    var r = damgala(m.kaynak, m.t);
    if (onbellek) onbellek.set(m, r);
    return r;
  }
  window.KaynakDamga = {
    damgala: damgala,
    maddeDamga: maddeDamga,
    gizli: function (m) { return maddeDamga(m).damga === "guvensiz"; },
    parcala: parcala,
    kodAd: (function () { var o = {}; T.kaynaklar.forEach(function (e) { o[e.kod] = e; }); return o; })(),
    surum: T.surum
  };
})();

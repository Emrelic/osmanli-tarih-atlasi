// ============================================================================
// GELİŞTİRİCİ NOTLARI — Emre haritada bir bölgeyi (kare · daire · kalem), bir
// kronoloji maddesini ya da bir arayüz öğesini işaretler, notunu yazar; not
// GitHub Issues'a (etiket `harita-notu`) kaydolur. Claude oturumları notu
// `py arac/not.py` ile okur, altına yazar, durumunu değiştirir. Emre 14 Ekim
// 2026: "gördüğümüz sıkıntılı alanları site üzerinde işaretlesek ve o bölüme
// metin olarak ilgili sıkıntıyı not düşsek".
//
// 🔴 NİÇİN ISSUES: site statik, yazacak sunucu yok. Notu `main`e dosya olarak
//    yazmak her notta bir yayın tetiklerdi (main'e push = yayın). Issues ortak
//    yerdir — hangi makineden girilirse girilsin aynı listeye düşer; yorum =
//    Claude'un cevabı, etiket = durum, kapatma = arşiv.
//
// 🔴 KİM GÖRÜR: kip yalnız deponun sahibinin token'ıyla açılır (dogrula()).
//    Token o tarayıcının localStorage'ında durur; ziyaretçi hiçbir şey görmez.
//    Depo açık olduğu için ISSUE'LAR GitHub'da herkese açıktır — sitede değil.
//    Açılış: adres çubuğunda `?gelistirici=1` ya da Ctrl+Alt+G.
//
// ÇOK BÖLGE (Emre 16 Ekim 2026): bir not = TEK post-it + 1..N bölge. Çizimi
//   Shift basılıyken bırakınca bölge taslağa eklenir, kip açık kalır; Shift'siz
//   son çizim (ya da Enter) forma geçer. Formda bölgeler numaralı listelenir,
//   ✕ ile tek tek silinir, "➕ Bölge ekle" metni koruyarak çizime döner. Biçim:
//   bolgeler() üstündeki yorum (v1 tek bölge AYNEN yazılır, v2 = liste).
//
// BAĞLAM: not kaydedilirken site kendisi yazar — gün, o anki kronoloji maddesi,
//   kamera, sürüm (?v=rNN), açık katmanlar, çizilen alandaki sahipler (örnek
//   noktalarla) ve yerleşimler (içindekiler + en yakınlar, o günkü sahipleriyle).
//   "Harita yanlış" raporunda ilk soru *orada yerleşim noktası var mı?* — notun
//   kendisi cevaplar.
//
// app.js'e DOKUNULMADI. Bağlantılar: `guncelle` ve `obGoster` sarmalanır
// (album.js'teki yöntem), app.js'in globalleri okunur: harita, suanki, olaylar,
// olayDom, sehirler, tarihAyarla, olayaGit, gunIdx, idxYazi, gunKonum, GUN.
// ============================================================================
"use strict";

(function () {
  var DEPO = "emrelic/osmanli-tarih-atlasi";
  var API = "https://api.github.com/repos/" + DEPO;
  var ETIKET = "harita-notu";
  var LS_TOKEN = "atlas_gh_token";
  var ISARET = "atlas-not v1";
  // Durum etiketleri `not:<anahtar>` — arac/not.py ile AYNI liste.
  var DURUM = {
    "acik":           { ad: "açık",              renk: "#39ff14" },
    "okundu":         { ad: "okundu",            renk: "#7fdbff" },
    "arastiriliyor":  { ad: "araştırılıyor",     renk: "#ffdc00" },
    "karar-bekliyor": { ad: "Emre'nin kararı",   renk: "#ff851b" },
    "cozuldu":        { ad: "çözüldü",           renk: "#2ecc40" },
    "dogru-bulundu":  { ad: "doğru bulundu",     renk: "#b10dc9" }
  };
  var GORUNURLUK = [
    { ad: "yalnız o gün", gun: 0 }, { ad: "± 1 ay", gun: 30 },
    { ad: "± 1 yıl", gun: 365, varsayilan: true }, { ad: "± 5 yıl", gun: 1826 },
    { ad: "± 25 yıl", gun: 9131 }
  ];

  var G = {
    acik: false, token: null, kim: null,
    notlar: [],                // {no, baslik, durum, url, yorum, veri, gi, fi, ti}
    kip: null,                 // "kare" | "daire" | "kalem" | "oge" | null
    cizim: null,               // {bas:[x,y], noktalar:[[x,y]...]}
    sonGeo: null,              // çizilen halka [lon,lat]
    markerlar: {},             // no → maplibregl.Marker (post-it)
    noMarkerlar: {},           // no → [Marker] bölge numaraları (çok bölgeli not)
    gorunen: null,             // görünür not kümesinin imzası (null = yeniden çiz)
    panelNo: null,
    // ÇOK BÖLGE (Emre 16 Ekim 2026: "bir post-it notu ve birden çok işaretlenmiş
    // çerçevelenmiş bölge olabilsin"). Yazılmakta olan notun bölgeleri burada
    // birikir; form kapanınca/kaydedilince boşalır.
    taslak: [],                // [{sekil, geo, merkez?, yaricap_km?}]
    taslakNo: [],              // taslak bölge numarası Marker'ları
    taslakMetin: "",           // "bölge ekle" sırasında formdaki metin korunur
    taslakGor: null,           // ... ve görünürlük seçimi
    ekleniyor: false           // formdan "➕ Bölge ekle" ile çizime çıkıldı
  };

  // ---------------------------------------------------------------- yardımcı
  function $(id) { return document.getElementById(id); }
  function el(tag, cls, metin) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (metin != null) e.textContent = metin;
    return e;
  }
  function bildir(m, hata) {
    var b = $("gn-bildirim");
    if (!b) { b = el("div"); b.id = "gn-bildirim"; document.body.appendChild(b); }
    b.textContent = m;
    b.className = hata ? "hata" : "";
    b.style.display = "block";
    clearTimeout(bildir._z);
    bildir._z = setTimeout(function () { b.style.display = "none"; }, hata ? 8000 : 3500);
  }
  function gunYazi(gi) { try { return GUN.dizgi(gi); } catch (e) { return String(gi); } }
  function surum() {
    var s = (document.querySelector('script[src*="js/app.js"]') || {}).src || "";
    return (s.match(/v=(r\d+)/) || [])[1] || "?";
  }
  function devletAd(id) {
    if (!id) return "—";
    if (id === "OSMANLI") return "Osmanlı";
    if (id === "OSM-TABI") return "Osmanlı tâbiî";
    var d = (window.DEVLETLER || []);
    for (var i = 0; i < d.length; i++) if (d[i].id === id) return d[i].ad || id;
    return id;
  }
  function km(a, b) {           // [lon,lat] iki nokta arası, haversine
    var R = 6371, r = Math.PI / 180;
    var dLa = (b[1] - a[1]) * r, dLo = (b[0] - a[0]) * r;
    var h = Math.sin(dLa / 2) * Math.sin(dLa / 2) +
            Math.cos(a[1] * r) * Math.cos(b[1] * r) * Math.sin(dLo / 2) * Math.sin(dLo / 2);
    return 2 * R * Math.asin(Math.sqrt(h));
  }
  function icinde(p, halka) {   // ışın atma, [lon,lat]
    var ic = false;
    for (var i = 0, j = halka.length - 1; i < halka.length; j = i++) {
      var xi = halka[i][0], yi = halka[i][1], xj = halka[j][0], yj = halka[j][1];
      if (((yi > p[1]) !== (yj > p[1])) &&
          (p[0] < (xj - xi) * (p[1] - yi) / (yj - yi) + xi)) ic = !ic;
    }
    return ic;
  }
  function kutu(halka) {
    var b = [180, 90, -180, -90];
    halka.forEach(function (p) {
      b[0] = Math.min(b[0], p[0]); b[1] = Math.min(b[1], p[1]);
      b[2] = Math.max(b[2], p[0]); b[3] = Math.max(b[3], p[1]);
    });
    return b;
  }
  function merkez(halka) {
    var b = kutu(halka);
    return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2];
  }
  function yuvarla(p) { return [Math.round(p[0] * 1e4) / 1e4, Math.round(p[1] * 1e4) / 1e4]; }

  // --------------------------------------------- BÖLGELER — İKİ BİÇİM
  // v1 (tek bölge, #1-#20 ve bugün tek bölgeyle yazılan her not):
  //     hedef: {tur:"harita", sekil, geo, merkez?, yaricap_km?} · veri.bolge: {...}
  // v2 (çok bölge, veri.surum = 2):
  //     hedef: {tur:"harita", sekil:"coklu", bolgeler:[{no, sekil, geo, ...}]}
  //     veri.bolgeler: [{no, orneklenen_nokta, sahipler, ...}]  (no ile eşleşir)
  // OKUYAN HER YER bu işlevden geçer — biçimi ikinci kez ayrıştıran kod yok.
  // Tek bölgeli not v1 olarak YAZILMAYA devam eder: eski okuyucular kırılmaz.
  function bolgeler(v) {
    var h = (v && v.hedef) || {};
    if (h.tur !== "harita") return [];
    function gecerli(g) { return Array.isArray(g) && g.length > 2; }
    if (Array.isArray(h.bolgeler)) {
      var bg = Array.isArray(v.bolgeler) ? v.bolgeler : [];
      return h.bolgeler.filter(function (b) { return b && gecerli(b.geo); }).map(function (b, i) {
        var no = b.no || i + 1;
        var bag = bg.filter(function (x) { return x && x.no === no; })[0] || bg[i] || null;
        return { no: no, sekil: b.sekil, geo: b.geo, merkez: b.merkez, yaricap_km: b.yaricap_km, baglam: bag };
      });
    }
    if (gecerli(h.geo))
      return [{ no: 1, sekil: h.sekil, geo: h.geo, merkez: h.merkez, yaricap_km: h.yaricap_km, baglam: v.bolge || null }];
    return [];
  }
  // Taslak bölge listesinden not hedefi: 1 bölge → v1 biçimi (aynen eskisi), 2+ → v2.
  function hedefKur(l) {
    if (l.length === 1) return Object.assign({ tur: "harita" }, l[0]);
    return { tur: "harita", sekil: "coklu",
             bolgeler: l.map(function (b, i) { return Object.assign({ no: i + 1 }, b); }) };
  }
  function tumKutu(rs) {
    var hepsi = [];
    rs.forEach(function (r) { hepsi = hepsi.concat(r.geo); });
    return kutu(hepsi);
  }
  // Post-it tek: tek bölgede bölgenin merkezi (eskisi gibi), çokta merkezlerin ortası.
  function postitYeri(rs) {
    if (rs.length === 1) return merkez(rs[0].geo);
    var x = 0, y = 0;
    rs.forEach(function (r) { var m = merkez(r.geo); x += m[0]; y += m[1]; });
    return yuvarla([x / rs.length, y / rs.length]);
  }
  var SEKIL_IKON = { kare: "▢", daire: "◯", kalem: "✎" };

  // ------------------------------------------------------------ GitHub API
  function gh(yol, yontem, govde) {
    var h = { "Accept": "application/vnd.github+json" };
    if (G.token) h["Authorization"] = "Bearer " + G.token;
    if (govde) h["Content-Type"] = "application/json";
    return fetch(yol.indexOf("http") === 0 ? yol : API + yol,
                 { method: yontem || "GET", headers: h, body: govde ? JSON.stringify(govde) : undefined })
      .then(function (r) {
        if (!r.ok) return r.text().then(function (t) { throw new Error("GitHub " + r.status + ": " + t.slice(0, 160)); });
        return r.status === 204 ? null : r.json();
      });
  }

  function dogrula(token) {
    G.token = token;
    return Promise.all([gh("https://api.github.com/user"), gh("")]).then(function (s) {
      var kim = s[0] && s[0].login, izin = (s[1] && s[1].permissions) || {};
      var sahip = kim && kim.toLowerCase() === DEPO.split("/")[0];
      if (!sahip && !izin.push && !izin.admin) throw new Error("bu token deponun sahibine ait değil");
      G.kim = kim;
      return kim;
    }).catch(function (e) { G.token = null; throw e; });
  }

  function notCoz(is) {
    var m = (is.body || "").match(/<!--\s*atlas-not v1\s*([\s\S]*?)\s*-->/);
    var v = null;
    if (m) { try { v = JSON.parse(m[1]); } catch (e) { v = null; } }
    if (!v) return null;
    var durum = "acik", son = null, oturum = [];
    (is.labels || []).forEach(function (l) {
      var n = typeof l === "string" ? l : l.name;
      if (n && n.indexOf("not:") === 0 && DURUM[n.slice(4)]) durum = n.slice(4);
      // POST-İT KUYRUĞU (arac/not.py): son sözü kim söyledi · notu hangi oturum aldı
      if (n && n.indexOf("son:") === 0) son = n.slice(4);
      if (n && n.indexOf("oturum:") === 0) oturum.push(n.slice(7));
    });
    if (!son && !is.comments) son = "emre";
    var gi = gunIdx(v.gun);
    return {
      no: is.number, baslik: is.title, durum: durum, url: is.html_url, son: son, oturum: oturum,
      yorum: is.comments || 0, veri: v, gi: gi,
      fi: v.gorunur ? gunIdx(v.gorunur.f) : gi,
      ti: v.gorunur ? gunIdx(v.gorunur.t) : gi
    };
  }

  function notlariYukle() {
    var hepsi = [];
    function sayfa(n) {
      return gh("/issues?labels=" + ETIKET + "&state=open&per_page=100&page=" + n).then(function (l) {
        l.forEach(function (is) { if (!is.pull_request) { var x = notCoz(is); if (x) hepsi.push(x); } });
        return l.length === 100 ? sayfa(n + 1) : null;
      });
    }
    return sayfa(1).then(function () {
      hepsi.sort(function (a, b) { return a.gi - b.gi || a.no - b.no; });
      G.notlar = hepsi;
      G.gorunen = null;
      hepsiniCiz();
      return hepsi;
    });
  }

  // ------------------------------------------------------------- BAĞLAM
  function suankiMadde() {
    try {
      var i = window.ZAMAN.suankiOlay(olaylar, suanki, function (k) {
        return !olayDom[k] || !olayDom[k].classList.contains("suzuldu");
      }, typeof suankiOlayI !== "undefined" ? suankiOlayI : -1);
      var o = olaylar[i];
      return o ? { t: o.t, gun: o.gun || null, b: o.b, yer: o.yer || null } : null;
    } catch (e) { return null; }
  }

  function sahipOku(ll) {
    try {
      var fs = harita.queryRenderedFeatures(harita.project(ll),
        { layers: ["osmanli-dolgu", "vassal-dolgu", "devlet-dolgu"] });
      if (!fs.length) return null;
      var f = fs[0];
      return f.layer.id === "osmanli-dolgu" ? "OSMANLI"
           : f.layer.id === "vassal-dolgu" ? "OSM-TABI" : (f.properties && f.properties.id) || "?";
    } catch (e) { return "?"; }
  }

  // Ham yerleşim kaydının `gun`deki sahibi — `d:` doğrudan Osmanlı, `v:` tâbi,
  // `s:` başka devlet (VERI-YAPISI.md). Dönemin uçları da döner: Claude
  // kırılmayı not okurken görsün. (`sehirler[].kayitlar[].d` bir BAYRAKTIR,
  // devlet kimliği değil — ilk denemede "[1]" yazdı.)
  function yerSahibi(y, gun) {
    function bak(l, kim) {
      for (var i = 0; l && i < l.length; i++) {
        var r = l[i];
        if (r.f <= gun && (gun < r.t || (gun === r.t && r.t === "2000-12-31")))
          return { id: kim || r.d, f: r.f, t: r.t };
      }
      return null;
    }
    return bak(y.d, "OSMANLI") || bak(y.v, "OSM-TABI") || bak(y.s, null);
  }
  function hamYerlesimler() {
    var l = [];
    Object.keys(window).forEach(function (k) {
      if (/^YERLESIMLER(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(window[k])) l = l.concat(window[k]);
    });
    return l;
  }

  function bolgeBaglami(halka) {
    var b = kutu(halka), say = {}, n = 0, ADIM = 9;
    // Harita o an hiç boyanmamışsa (sekme gizli, stil inmemiş) örnekler "boş"
    // döner — bu bir tanıklık DEĞİLDİR. Ölçülemedi ≠ boyasız.
    var cizili = 0;
    try { cizili = harita.queryRenderedFeatures({ layers: ["osmanli-dolgu", "vassal-dolgu", "devlet-dolgu"] }).length; } catch (e) {}
    if (!cizili) ADIM = 0;
    for (var i = 0; i < ADIM; i++) for (var j = 0; j < ADIM; j++) {
      var p = [b[0] + (b[2] - b[0]) * (i + 0.5) / ADIM, b[1] + (b[3] - b[1]) * (j + 0.5) / ADIM];
      if (!icinde(p, halka)) continue;
      var s = sahipOku(p) || "(boş)";
      say[s] = (say[s] || 0) + 1; n++;
    }
    var sahipler = Object.keys(say).sort(function (a, c) { return say[c] - say[a]; })
      .map(function (k) { return { id: k, ad: k === "(boş)" ? "boyasız" : devletAd(k), nokta: say[k] }; });
    if (!cizili) sahipler = [{ id: null, ad: "ÖLÇÜLEMEDİ (harita o an çizilmemişti)", nokta: 0 }];
    var mz = merkez(halka), ic = [], dis = [], gun = gunYazi(suanki), gorulen = {};
    hamYerlesimler().forEach(function (y) {
      if (typeof y.lon !== "number" || typeof y.lat !== "number" || !y.ad) return;
      var anah = y.ad + "|" + y.lon.toFixed(2) + "|" + y.lat.toFixed(2);   // aynı kayıt iki dosyada
      if (gorulen[anah]) return;
      gorulen[anah] = 1;
      var p = [y.lon, y.lat], d = yerSahibi(y, gun);
      var kayit = { ad: y.ad, tur: y.tur || null, lonlat: yuvarla(p), sahip: d ? d.id : null,
                    sahip_ad: d ? devletAd(d.id) : "sahipsiz", donem: d ? d.f + "→" + d.t : null };
      if (icinde(p, halka)) ic.push(kayit);
      else { kayit.km = Math.round(km(mz, p)); dis.push(kayit); }
    });
    dis.sort(function (a, c) { return a.km - c.km; });
    return { orneklenen_nokta: n, sahipler: sahipler,
             icindeki_yerlesimler: ic.slice(0, 40), icindeki_yerlesim_sayisi: ic.length,
             en_yakin_yerlesimler: dis.slice(0, 6) };
  }

  function baglamTopla(hedef) {
    var c = harita.getCenter(), bs = harita.getBounds();
    var katman = [];
    document.querySelectorAll("input[data-katman]").forEach(function (i) { if (i.checked) katman.push(i.getAttribute("data-katman")); });
    var v = {
      surum: 1, gun: gunYazi(suanki), gun_yazi: idxYazi(suanki),
      hedef: hedef, madde: suankiMadde(),
      kamera: { merkez: yuvarla([c.lng, c.lat]), zoom: Math.round(harita.getZoom() * 10) / 10,
                sinir: [bs.getWest(), bs.getSouth(), bs.getEast(), bs.getNorth()].map(function (x) { return Math.round(x * 1e3) / 1e3; }) },
      site_surumu: surum(), katmanlar: katman,
      ekran: window.innerWidth + "x" + window.innerHeight + " @" + (window.devicePixelRatio || 1),
      yazan: G.kim, olusturuldu: new Date().toISOString()
    };
    if (hedef.tur === "harita") {
      if (Array.isArray(hedef.bolgeler)) {          // v2: her bölgenin bağlamı AYRI
        v.surum = 2;
        v.bolgeler = hedef.bolgeler.map(function (b) { return Object.assign({ no: b.no }, bolgeBaglami(b.geo)); });
      } else v.bolge = bolgeBaglami(hedef.geo);
    }
    return v;
  }

  // Bir bölgenin insan okur satırları — v1'de "Hedef: harita bölgesi" başlığıyla
  // ve girintisiz (eski metnin AYNISI), v2'de "Bölge N" başlığı + girintili.
  function bolgeSatirlari(s, sekil, geo, bg, bas, ic) {
    var m = merkez(geo), b = kutu(geo);
    s.push(bas + " (" + sekil + ") · merkez " + m[1].toFixed(3) + "K " + m[0].toFixed(3) + "D · ≈ " +
           Math.round(km([b[0], m[1]], [b[2], m[1]])) + " × " + Math.round(km([m[0], b[1]], [m[0], b[3]])) + " km");
    if (!bg) { s.push(ic + "- **Bağlam:** yok"); return; }
    s.push(ic + "- **Alandaki sahipler** (" + bg.orneklenen_nokta + " örnek nokta): " +
           bg.sahipler.map(function (x) { return x.ad + (x.nokta ? " " + x.nokta : ""); }).join(" · "));
    s.push(ic + "- **İçindeki yerleşimler** (" + bg.icindeki_yerlesim_sayisi + "): " +
           (bg.icindeki_yerlesimler.length
             ? bg.icindeki_yerlesimler.map(function (x) {
                 return x.ad + " [" + x.sahip_ad + (x.donem ? " " + x.donem : "") + "]";
               }).join(", ")
             : "**YOK — bölge en yakın peteğe emilmiş olabilir**"));
    s.push(ic + "- **En yakın yerleşimler:** " +
           bg.en_yakin_yerlesimler.map(function (x) { return x.ad + " " + x.km + " km [" + x.sahip_ad + "]"; }).join(", "));
  }

  function govdeYaz(metin, v) {
    var s = [];
    s.push("**Not (" + (v.yazan || "Emre") + "):**", "", metin, "", "---",
           "**Bağlam** — site kendiliğinden yazdı", "");
    s.push("- **Tarih:** " + v.gun + " (" + v.gun_yazi + ")" +
           (v.gorunur ? " · görünür " + v.gorunur.f + " → " + v.gorunur.t : ""));
    if (v.madde) s.push("- **O anki kronoloji maddesi:** " + (v.madde.gun || v.madde.t) + " · " + v.madde.b);
    var h = v.hedef;
    if (h.tur === "harita") {
      var rs = bolgeler(v);
      if (Array.isArray(h.bolgeler)) {
        s.push("- **Hedef:** harita · " + rs.length + " bölge (" +
               rs.map(function (r) { return r.no + " " + r.sekil; }).join(", ") + ")");
        rs.forEach(function (r) { bolgeSatirlari(s, r.sekil, r.geo, r.baglam, "- **Bölge " + r.no + "**", "  "); });
      } else bolgeSatirlari(s, h.sekil, h.geo, v.bolge, "- **Hedef:** harita bölgesi", "");
    } else if (h.tur === "madde") {
      s.push("- **Hedef:** kronoloji maddesi · " + (h.gun || h.t) + " · " + h.b);
    } else if (h.tur === "oge") {
      s.push("- **Hedef:** arayüz öğesi · `" + h.secici + "` · \"" + h.metin + "\"");
    }
    s.push("- **Kamera:** z" + v.kamera.zoom + " · " + v.kamera.merkez[1] + "K " + v.kamera.merkez[0] + "D · sürüm " +
           v.site_surumu + " · katmanlar: " + v.katmanlar.join(", "));
    s.push("", "<!-- " + ISARET, JSON.stringify(Object.assign({ metin: metin }, v)).replace(/--/g, "-\\u002d"), "-->");
    return s.join("\n");
  }

  // --------------------------------------------------- harita kaynakları
  function kaynakKur() {
    if (!harita.getSource("gn-cizim")) {
      harita.addSource("gn-cizim", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
      harita.addLayer({ id: "gn-cizim-alan", type: "fill", source: "gn-cizim",
        paint: { "fill-color": "#39ff14", "fill-opacity": 0.15 } });
      harita.addLayer({ id: "gn-cizim-hat", type: "line", source: "gn-cizim",
        paint: { "line-color": "#39ff14", "line-width": 2.5 } });
    }
    if (!harita.getSource("gn-notlar")) {
      harita.addSource("gn-notlar", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
      harita.addLayer({ id: "gn-notlar-alan", type: "fill", source: "gn-notlar",
        paint: { "fill-color": "#39ff14", "fill-opacity": 0.08 } });
      harita.addLayer({ id: "gn-notlar-hat", type: "line", source: "gn-notlar",
        filter: ["==", ["geometry-type"], "Polygon"],
        paint: { "line-color": "#2bd10f", "line-width": 2, "line-dasharray": [2, 1.5] } });
      // Çok bölgeli notta post-it'ten her bölgenin merkezine İNCE bağ çizgisi.
      harita.addLayer({ id: "gn-notlar-bag", type: "line", source: "gn-notlar",
        filter: ["==", ["geometry-type"], "LineString"],
        paint: { "line-color": "#2bd10f", "line-width": 1, "line-opacity": 0.8, "line-dasharray": [1, 2] } });
    }
  }
  function kaynakHazir(f) {
    try { if (harita.isStyleLoaded()) { kaynakKur(); f(); return; } } catch (e) {}
    harita.once("idle", function () { try { kaynakKur(); f(); } catch (e) { console.warn("[geliştirici]", e); } });
  }
  // Taslak: biriken bölgeler (numaralı) + o an çizilmekte olan halka.
  function noIsaret(metin, ll, ipucu, tikla) {
    var d = el("div", "gn-bolge-no", String(metin));
    if (ipucu) d.title = ipucu;
    if (tikla) d.addEventListener("click", function (e) { e.stopPropagation(); tikla(); });
    return new maplibregl.Marker({ element: d, anchor: "center" }).setLngLat(ll).addTo(harita);
  }
  function cizimYaz(gecici) {
    // Numara işaretleri yalnız taslak DEĞİŞİNCE yeniden kurulur (sürükleme
    // sırasında her pointermove'da değil).
    var imza = G.taslak.map(function (b) { return merkez(b.geo).join(","); }).join("|");
    if (imza !== G.taslakImza) {
      G.taslakNo.forEach(function (m) { m.remove(); });
      G.taslakNo = G.taslak.map(function (b, i) { return noIsaret(i + 1, merkez(b.geo), "bölge " + (i + 1)); });
      G.taslakImza = imza;
    }
    var src = harita.getSource("gn-cizim");
    if (!src) return;
    var fs = [];
    G.taslak.forEach(function (b, i) {
      fs.push({ type: "Feature", properties: { bno: i + 1 }, geometry: { type: "Polygon", coordinates: [b.geo] } });
    });
    if (gecici && gecici.length > 2)
      fs.push({ type: "Feature", properties: {}, geometry: { type: "Polygon", coordinates: [gecici] } });
    src.setData({ type: "FeatureCollection", features: fs });
  }
  function taslakTemizle() {
    G.taslak = []; G.taslakMetin = ""; G.taslakGor = null; G.ekleniyor = false;
    cizimYaz(null);
  }
  function formAcik() { var f = $("gn-form"); return !!f && f.style.display === "block"; }

  // Çizilen bölgeyi taslağa ekler. `devam` (Shift basılı bırakıldı) → kip açık
  // kalır, sıradaki bölge çizilir; değilse forma geçilir.
  function bolgeEkle(bolge, devam) {
    G.taslak.push(bolge);
    if (devam) {
      cizimYaz(null);
      bildir("✏️ bölge " + G.taslak.length + " eklendi · Shift'le çizmeyi sürdür · Shift'siz çiz ya da Enter: nota geç");
      return;
    }
    kipKur(null);
    formAc({ tur: "harita" });
  }
  function taslakSil(i) {
    if (i < 0 || i >= G.taslak.length) return;
    G.taslak.splice(i, 1);
    cizimYaz(null);
  }

  // ------------------------------------------------------------ ÇİZİM
  function ekranHalka(c) {
    var r = harita.getCanvas().getBoundingClientRect(), pts = [];
    function ll(x, y) { var q = harita.unproject([x - r.left, y - r.top]); return yuvarla([q.lng, q.lat]); }
    var a = c.bas, z = c.son || c.bas;
    if (G.kip === "kare") {
      pts = [ll(a[0], a[1]), ll(z[0], a[1]), ll(z[0], z[1]), ll(a[0], z[1])];
    } else if (G.kip === "daire") {
      var R = Math.hypot(z[0] - a[0], z[1] - a[1]);
      for (var i = 0; i < 48; i++) {
        var t = i / 48 * 2 * Math.PI;
        pts.push(ll(a[0] + R * Math.cos(t), a[1] + R * Math.sin(t)));
      }
    } else {
      pts = c.noktalar.map(function (p) { return ll(p[0], p[1]); });
    }
    if (pts.length > 2) pts.push(pts[0].slice());
    return pts;
  }

  // Araç çubuğu düğmesi: aynı düğme ikinci kez basılınca kip kapanır; o an
  // taslakta bölge birikmişse (Shift'le) not formuna geçilir.
  function kipAyarla(k) {
    var yeni = (G.kip === k) ? null : k;
    kipKur(yeni);
    if (!yeni && G.taslak.length && !formAcik()) formAc({ tur: "harita" });
  }
  function kipKur(k) {
    G.kip = k;
    document.querySelectorAll("#gn-arac button[data-kip]").forEach(function (b) {
      b.classList.toggle("etkin", b.getAttribute("data-kip") === G.kip);
    });
    var harKip = G.kip && G.kip !== "oge";
    try {
      if (harKip) { harita.dragPan.disable(); harita.doubleClickZoom.disable(); harita.boxZoom.disable(); }
      else { harita.dragPan.enable(); harita.doubleClickZoom.enable(); harita.boxZoom.enable(); }
    } catch (e) {}
    harita.getCanvas().style.cursor = harKip ? "crosshair" : "";
    document.body.classList.toggle("gn-oge-kipi", G.kip === "oge");
    if (!G.kip) { G.cizim = null; cizimYaz(null); ogeVurgu(null); }
    var ip = { kare: "sürükle: kare çiz", daire: "merkezden sürükle: daire çiz",
               kalem: "basılı tutup çiz, bırakınca kapanır", oge: "not düşülecek düğmeye/menüye tıkla" };
    if (G.kip) bildir("✏️ " + ip[G.kip] + (G.kip !== "oge" ? " · Shift: bir bölge daha" : "") +
                      (G.taslak.length && G.kip !== "oge" ? " · " + G.taslak.length + " bölge hazır, Enter: nota geç" : "") +
                      " · Esc: vazgeç");
  }

  function cizimDinle() {
    var kap = harita.getContainer();
    kap.addEventListener("pointerdown", function (e) {
      if (!G.acik || !G.kip || G.kip === "oge" || e.button !== 0) return;
      if (e.target.closest && e.target.closest(".maplibregl-marker, .maplibregl-ctrl")) return;
      e.preventDefault(); e.stopPropagation();
      try { kap.setPointerCapture(e.pointerId); } catch (x) {}
      G.cizim = { bas: [e.clientX, e.clientY], son: null, noktalar: [[e.clientX, e.clientY]] };
    }, true);
    kap.addEventListener("pointermove", function (e) {
      if (!G.cizim) return;
      e.preventDefault(); e.stopPropagation();
      G.cizim.son = [e.clientX, e.clientY];
      var n = G.cizim.noktalar, s = n[n.length - 1];
      if (Math.hypot(e.clientX - s[0], e.clientY - s[1]) > 3) n.push([e.clientX, e.clientY]);
      cizimYaz(ekranHalka(G.cizim));
    }, true);
    function bitir(e) {
      if (!G.cizim) return;
      e.preventDefault(); e.stopPropagation();
      var c = G.cizim; G.cizim = null;
      c.son = c.son || [e.clientX, e.clientY];
      var buyuk = Math.hypot(c.son[0] - c.bas[0], c.son[1] - c.bas[1]) > 8;
      if (G.kip === "kalem") buyuk = c.noktalar.length > 4;
      if (!buyuk) { cizimYaz(null); bildir("çizim çok küçük — yeniden dene"); return; }
      var halka = ekranHalka(c);
      if (G.kip === "kalem" && halka.length > 300) {          // aşırı nokta: seyrelt
        var adim = Math.ceil(halka.length / 300), s = [];
        for (var i = 0; i < halka.length - 1; i += adim) s.push(halka[i]);
        s.push(s[0].slice()); halka = s;
      }
      var sekil = G.kip;
      var bolge = { sekil: sekil, geo: halka };
      if (sekil === "daire") {
        var m = merkez(halka);
        bolge.merkez = m; bolge.yaricap_km = Math.round(km(m, halka[0]));
      }
      bolgeEkle(bolge, !!e.shiftKey);
    }
    kap.addEventListener("pointerup", bitir, true);
    kap.addEventListener("pointercancel", function () { G.cizim = null; cizimYaz(null); }, true);
    // Çizim kipindeyken haritanın öteki tıklama işleyicileri (şehir/madde
    // paneli) koşmasın — rötuş çiziminde ölçülen kusurun aynısı (app.js:925).
    kap.addEventListener("click", function (e) {
      if (G.acik && G.kip && G.kip !== "oge") { e.stopPropagation(); e.preventDefault(); }
    }, true);
    window.addEventListener("keydown", function (e) {
      if (!G.acik) return;
      var harKip = G.kip && G.kip !== "oge";
      if (e.key === "Escape" && (G.kip || G.cizim)) {
        e.stopPropagation(); G.cizim = null;
        var formaDon = G.ekleniyor && G.taslak.length;
        kipKur(null);
        if (formaDon) formAc({ tur: "harita" });      // "bölge ekle"den vazgeç: forma dön
        else taslakTemizle();                         // notun tamamından vazgeç
      } else if (e.key === "Enter" && harKip && !G.cizim && G.taslak.length) {
        e.stopPropagation(); e.preventDefault();
        kipKur(null);
        formAc({ tur: "harita" });
      }
    }, true);
  }

  // ------------------------------------------------------ ÖĞE (arayüz) notu
  function secici(e) {
    var yol = [];
    while (e && e.nodeType === 1 && e !== document.body) {
      if (e.id) { yol.unshift("#" + CSS.escape(e.id)); break; }
      var tag = e.tagName.toLowerCase(), i = 1, k = e;
      while ((k = k.previousElementSibling)) if (k.tagName === e.tagName) i++;
      yol.unshift(tag + ":nth-of-type(" + i + ")");
      e = e.parentElement;
    }
    return yol.join(" > ");
  }
  var _vurgu = null;
  function ogeVurgu(e) {
    if (_vurgu) _vurgu.classList.remove("gn-oge-vurgu");
    _vurgu = e; if (e) e.classList.add("gn-oge-vurgu");
  }
  function ogeDinle() {
    function bizden(e) { return e.closest && e.closest("#gn-arac, #gn-form, #gn-panel, #gn-liste, #gn-bildirim"); }
    document.addEventListener("mouseover", function (e) {
      if (G.kip !== "oge" || bizden(e.target)) return;
      ogeVurgu(e.target);
    }, true);
    document.addEventListener("click", function (e) {
      if (G.kip !== "oge" || bizden(e.target)) return;
      e.preventDefault(); e.stopPropagation();
      var t = e.target;
      var hedef = { tur: "oge", secici: secici(t),
                    metin: (t.textContent || t.title || t.value || "").replace(/\s+/g, " ").trim().slice(0, 80) };
      kipKur(null);
      formAc(hedef);
    }, true);
  }

  // --------------------------------------------------------------- FORM
  // Harita notunda `hedef` yalnız {tur:"harita"}dır: bölgeler G.taslak'tan okunur
  // (form yeniden çizilse de — bölge silme / ekleme — metin ve seçim korunur).
  function formAc(hedef) {
    var f = $("gn-form");
    var harNot = hedef.tur === "harita";
    G.ekleniyor = false;
    if (!harNot && G.taslak.length) taslakTemizle();
    f.innerHTML = "";
    var ozet = harNot ? "🗺️ Harita · " + G.taslak.length + " bölge"
             : hedef.tur === "madde" ? "📜 Kronoloji maddesi: " + hedef.b
             : "🔘 Arayüz öğesi: " + (hedef.metin || hedef.secici);
    f.appendChild(el("div", "gn-form-bas", "Yeni not · " + gunYazi(suanki) + " (" + idxYazi(suanki) + ")"));
    f.appendChild(el("div", "gn-form-hedef", ozet));
    var ta = el("textarea"); ta.rows = 6;
    ta.placeholder = "Ne gördün? Ne araştırılsın / düzeltilsin / teyit edilsin?";
    if (harNot) ta.value = G.taslakMetin || "";
    var gs = null, ekle = null;
    function sakla() { G.taslakMetin = ta.value; if (gs) G.taslakGor = gs.value; }
    if (harNot) {
      // Bölge listesi: numara (haritadaki işaretle aynı) · şekil · ✕ sil
      var bl = el("div", "gn-bolge-liste");
      if (!G.taslak.length) bl.appendChild(el("div", "gn-bos", "bölge yok — ➕ ile ekle"));
      G.taslak.forEach(function (b, i) {
        var s = el("div", "gn-bolge-satir");
        s.appendChild(el("span", "gn-bolge-no gn-bolge-no-satir", String(i + 1)));
        s.appendChild(el("span", null, (SEKIL_IKON[b.sekil] || "") + " " + b.sekil +
                         (b.yaricap_km ? " · r ≈ " + b.yaricap_km + " km" : "")));
        var sil = el("button", "gn-bolge-sil", "✕"); sil.type = "button"; sil.title = "bölge " + (i + 1) + "'i sil";
        sil.onclick = function () { sakla(); taslakSil(i); formAc({ tur: "harita" }); };
        s.appendChild(sil);
        bl.appendChild(s);
      });
      ekle = el("button", "gn-bolge-ekle", "➕ Bölge ekle"); ekle.type = "button";
      ekle.title = "Formu kapatmadan bir bölge daha çiz (metin korunur)";
      ekle.onclick = function () {
        sakla();
        f.style.display = "none";
        G.ekleniyor = true;
        var son = G.taslak.length ? G.taslak[G.taslak.length - 1].sekil : "kare";
        kipKur(son);
        bildir("➕ bölge " + (G.taslak.length + 1) + ": çiz (araç çubuğundan şekil değiştirebilirsin) · Esc: forma dön");
      };
      bl.appendChild(ekle);
      f.appendChild(bl);
    }
    f.appendChild(ta);
    if (harNot) {
      var sat = el("label", "gn-form-satir", "Haritada görünsün: ");
      gs = el("select");
      GORUNURLUK.forEach(function (g, i) {
        var o = el("option", null, g.ad); o.value = i;
        if (G.taslakGor != null ? String(i) === String(G.taslakGor) : g.varsayilan) o.selected = true;
        gs.appendChild(o);
      });
      if (G.taslakGor != null) gs.value = G.taslakGor;
      sat.appendChild(gs); f.appendChild(sat);
    }
    var dg = el("div", "gn-form-dugmeler");
    var iptal = el("button", null, "Vazgeç"), kaydet = el("button", "gn-ana", "💾 Kaydet");
    iptal.type = kaydet.type = "button";
    if (harNot && !G.taslak.length) kaydet.disabled = true;
    dg.appendChild(iptal); dg.appendChild(kaydet); f.appendChild(dg);
    f.style.display = "block";
    setTimeout(function () { ta.focus(); }, 30);
    var gunHedef = suanki;
    function kapat() { f.style.display = "none"; taslakTemizle(); }
    iptal.onclick = kapat;
    ta.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) kaydet.click();
      if (e.key === "Escape") { e.stopPropagation(); kapat(); }
    });
    kaydet.onclick = function () {
      var metin = ta.value.trim();
      if (!metin) { ta.focus(); return; }
      if (harNot) {
        if (!G.taslak.length) { bildir("en az bir bölge çiz", true); return; }
        hedef = hedefKur(G.taslak);
      }
      kaydet.disabled = true; kaydet.textContent = "kaydediliyor…";
      var v = baglamTopla(hedef);
      if (gs) {
        var g = GORUNURLUK[+gs.value].gun;
        v.gorunur = { f: gunYazi(gunHedef - g), t: gunYazi(gunHedef + g) };
      }
      var ilk = metin.split("\n")[0];
      var baslik = "[" + v.gun + "] " + (ilk.length > 70 ? ilk.slice(0, 68) + "…" : ilk);
      gh("/issues", "POST", { title: baslik, body: govdeYaz(metin, v), labels: [ETIKET, "not:acik", "son:emre"] })
        .then(function (is) {
          kapat();
          var x = notCoz(is);
          if (x) { G.notlar.push(x); G.notlar.sort(function (a, b) { return a.gi - b.gi || a.no - b.no; }); }
          G.gorunen = null; hepsiniCiz();
          bildir("✅ Not #" + is.number + " kaydedildi");
        })
        .catch(function (e) {
          kaydet.disabled = false; kaydet.textContent = "💾 Kaydet";
          bildir("Kaydedilemedi: " + e.message, true);
        });
    };
  }

  // ---------------------------------------------------------- NOT PANELİ
  function durumCip(d) {
    var c = el("span", "gn-durum", (DURUM[d] || DURUM.acik).ad);
    c.style.background = (DURUM[d] || DURUM.acik).renk;
    return c;
  }
  // Sıra kimde: son sözü Claude söylediyse top Emre'dedir, Emre söylediyse Claude'da.
  function sonCip(n) {
    var c = el("span", "gn-son gn-son-" + (n.son || "yok"),
      n.son === "claude" ? "🤖 Claude yazdı" : n.son === "emre" ? "👤 Emre yazdı" : "? son yazan");
    c.title = n.son === "claude" ? "Sıra sende: Claude cevap/soru yazdı" : n.son === "emre" ? "Sıra Claude'da" : "";
    return c;
  }
  function oturumCip(n) {
    return n.oturum && n.oturum.length ? el("span", "gn-oturum", "🔒 " + n.oturum.join(", ")) : null;
  }

  function panelAc(n) {
    G.panelNo = n.no;
    var p = $("gn-panel");
    p.innerHTML = "";
    var kapat = el("button", "gn-kapat", "✕"); kapat.type = "button";
    kapat.onclick = function () { p.style.display = "none"; G.panelNo = null; };
    p.appendChild(kapat);
    var bas = el("div", "gn-panel-bas");
    bas.appendChild(el("b", null, "#" + n.no + " "));
    bas.appendChild(durumCip(n.durum));
    bas.appendChild(sonCip(n));
    var oc = oturumCip(n); if (oc) bas.appendChild(oc);
    p.appendChild(bas);
    p.appendChild(el("div", "gn-panel-tarih", n.veri.gun + " · " + (n.veri.gun_yazi || "")));
    p.appendChild(el("div", "gn-metin gn-emre", n.veri.metin || n.baslik));
    var det = el("details"); det.appendChild(el("summary", null, "bağlam"));
    var bl = [];
    if (n.veri.madde) bl.push("Madde: " + (n.veri.madde.gun || n.veri.madde.t) + " · " + n.veri.madde.b);
    var rs = bolgeler(n.veri);
    rs.forEach(function (r) {
      var bg = r.baglam, ic = rs.length > 1 ? "  " : "";
      if (rs.length > 1) bl.push("Bölge " + r.no + " (" + r.sekil + "):");
      if (!bg) { bl.push(ic + "bağlam yok"); return; }
      bl.push(ic + "Sahipler: " + bg.sahipler.map(function (x) { return x.ad + " " + x.nokta; }).join(" · "));
      bl.push(ic + "İçindeki yerleşimler: " + (bg.icindeki_yerlesimler.map(function (x) { return x.ad; }).join(", ") || "YOK"));
    });
    if (n.veri.hedef.tur === "oge") bl.push("Öğe: " + n.veri.hedef.secici);
    bl.push("Sürüm " + n.veri.site_surumu + " · z" + n.veri.kamera.zoom);
    det.appendChild(el("div", "gn-baglam", bl.join("\n")));
    p.appendChild(det);
    var yorumlar = el("div", "gn-yorumlar", n.yorum ? "yorumlar yükleniyor…" : "");
    p.appendChild(yorumlar);
    if (n.yorum) {
      gh("/issues/" + n.no + "/comments?per_page=100").then(function (l) {
        yorumlar.textContent = "";
        l.forEach(function (c) {
          var claude = /^\s*(🤖|\*\*Claude)/.test(c.body || "");
          var y = el("div", "gn-metin " + (claude ? "gn-claude" : "gn-emre"));
          y.appendChild(el("div", "gn-yazan", (claude ? "Claude" : c.user.login) + " · " + c.created_at.slice(0, 16).replace("T", " ")));
          y.appendChild(el("div", null, (c.body || "").replace(/^\s*🤖\s*/, "")));
          yorumlar.appendChild(y);
        });
      }).catch(function (e) { yorumlar.textContent = "yorumlar okunamadı: " + e.message; });
    }
    var ta = el("textarea"); ta.rows = 2; ta.placeholder = "Ek yaz (Claude'a cevap, karar…)";
    p.appendChild(ta);
    var dg = el("div", "gn-form-dugmeler");
    function dugme(ad, f, cls) { var b = el("button", cls, ad); b.type = "button"; b.onclick = f; dg.appendChild(b); return b; }
    dugme("💬 Ekle", function () {
      var m = ta.value.trim(); if (!m) return;
      gh("/issues/" + n.no + "/comments", "POST", { body: m }).then(function () {
        return gh("/issues/" + n.no + "/labels", "POST", { labels: ["son:emre"] });
      }).then(function () {
        return gh("/issues/" + n.no + "/labels/son%3Aclaude", "DELETE").catch(function () {});
      }).then(function () {
        n.yorum++; n.son = "emre"; ta.value = ""; panelAc(n); listeCiz();
      }).catch(function (e) { bildir("Eklenemedi: " + e.message, true); });
    });
    dugme("🎯 Git", function () { notaGit(n); });
    dugme("↗ GitHub", function () { window.open(n.url, "_blank", "noopener"); });
    dugme("🗄 Kaldır (arşivle)", function () {
      if (!window.confirm("#" + n.no + " arşive gönderilsin mi? Geliştirici kipinde artık görünmez.")) return;
      gh("/issues/" + n.no + "/labels", "POST", { labels: ["not:arsiv"] })
        .then(function () { return gh("/issues/" + n.no, "PATCH", { state: "closed", state_reason: "completed" }); })
        .then(function () {
          G.notlar = G.notlar.filter(function (x) { return x.no !== n.no; });
          p.style.display = "none"; G.panelNo = null; G.gorunen = null; hepsiniCiz();
          bildir("🗄 #" + n.no + " arşive gitti");
        }).catch(function (e) { bildir("Arşivlenemedi: " + e.message, true); });
    }, "gn-tehlike");
    p.appendChild(dg);
    p.style.display = "block";
  }

  function maddeBul(h) {
    for (var i = 0; i < olaylar.length; i++) if (olaylar[i].b === h.b && olaylar[i].t === h.t) return i;
    for (i = 0; i < olaylar.length; i++) if (olaylar[i].b === h.b) return i;
    return -1;
  }

  function notaGit(n) {
    var h = n.veri.hedef;
    if (h.tur === "madde") {
      var i = maddeBul(h);
      if (i >= 0) { olayaGit(olaylar[i], true, true); if (olayDom[i]) olayDom[i].scrollIntoView({ block: "center" }); }
      else tarihAyarla(n.gi);
    } else {
      tarihAyarla(n.gi);
      if (h.tur === "harita" && bolgeler(n.veri).length) {
        var b = tumKutu(bolgeler(n.veri));
        harita.fitBounds([[b[0], b[1]], [b[2], b[3]]], { padding: 120, maxZoom: Math.max(n.veri.kamera.zoom, 5), duration: 800 });
      } else if (h.tur === "oge") {
        var e = document.querySelector(h.secici);
        if (e) { e.scrollIntoView({ block: "center" }); e.classList.add("gn-oge-vurgu"); setTimeout(function () { e.classList.remove("gn-oge-vurgu"); }, 2500); }
      }
    }
    panelAc(n);
  }

  // --------------------------------------------------------- GÖRÜNÜRLÜK
  function haritaNotlariGuncelle() {
    if (!G.acik) return;
    var vis = G.notlar.filter(function (n) {
      return n.veri.hedef.tur === "harita" && bolgeler(n.veri).length && n.fi <= suanki && suanki <= n.ti;
    });
    var imza = vis.map(function (n) { return n.no + n.durum; }).join(",");
    if (imza === G.gorunen) return;
    G.gorunen = imza;
    // Not başına: her bölge bir poligon; çok bölgede post-it'ten her bölgeye bağ
    // çizgisi + bölge numarası. Görünürlük aralığı not başınadır (fi/ti) —
    // bölgeler birlikte görünür, birlikte kaybolur.
    var fs = [];
    vis.forEach(function (n) {
      var rs = bolgeler(n.veri), pt = postitYeri(rs);
      rs.forEach(function (r) {
        fs.push({ type: "Feature", properties: { no: n.no, bno: r.no }, geometry: { type: "Polygon", coordinates: [r.geo] } });
        if (rs.length > 1)
          fs.push({ type: "Feature", properties: { no: n.no, bno: r.no },
                    geometry: { type: "LineString", coordinates: [pt, merkez(r.geo)] } });
      });
    });
    var src = harita.getSource("gn-notlar");
    if (src) src.setData({ type: "FeatureCollection", features: fs });
    var yeni = {}, yeniNo = {};
    vis.forEach(function (n) {
      var rs = bolgeler(n.veri), m = G.markerlar[n.no];
      if (!m) {
        var d = el("div", "gn-postit" + (rs.length > 1 ? " gn-postit-cok" : ""));
        if (rs.length > 1) d.textContent = rs.length;
        d.title = "#" + n.no + " · " + n.baslik + (rs.length > 1 ? " · " + rs.length + " bölge" : "");
        d.addEventListener("click", function (e) { e.stopPropagation(); panelAc(n); });
        m = new maplibregl.Marker({ element: d, anchor: "center" })
          .setLngLat(postitYeri(rs)).addTo(harita);
      }
      m.getElement().style.background = (DURUM[n.durum] || DURUM.acik).renk;
      yeni[n.no] = m;
      if (rs.length > 1)
        yeniNo[n.no] = G.noMarkerlar[n.no] || rs.map(function (r) {
          return noIsaret(r.no, merkez(r.geo), "#" + n.no + " · bölge " + r.no, function () { panelAc(n); });
        });
    });
    Object.keys(G.markerlar).forEach(function (k) { if (!yeni[k]) G.markerlar[k].remove(); });
    Object.keys(G.noMarkerlar).forEach(function (k) {
      if (!yeniNo[k]) G.noMarkerlar[k].forEach(function (m) { m.remove(); });
    });
    G.markerlar = yeni; G.noMarkerlar = yeniNo;
  }

  function zamanNoktalari() {
    var sar = $("zaman-sarmal");
    if (!sar) return;
    var s = $("gn-zaman");
    if (!s) { s = el("div"); s.id = "gn-zaman"; sar.appendChild(s); }
    s.innerHTML = "";
    if (!G.acik) return;
    G.notlar.forEach(function (n) {
      var d = el("span", "gn-zaman-nokta");
      d.style.left = (100 * gunKonum(n.gi) / ZAMAN_KONUM_MAX) + "%";
      d.style.background = (DURUM[n.durum] || DURUM.acik).renk;
      d.title = "#" + n.no + " · " + n.baslik;
      d.addEventListener("click", function (e) { e.stopPropagation(); notaGit(n); });
      s.appendChild(d);
    });
  }

  function maddeRozetleri() {
    document.querySelectorAll(".gn-madde-postit").forEach(function (x) { x.remove(); });
    if (!G.acik) return;
    G.notlar.forEach(function (n) {
      if (n.veri.hedef.tur !== "madde") return;
      var i = maddeBul(n.veri.hedef);
      if (i < 0 || !olayDom[i]) return;
      var r = el("span", "gn-madde-postit", "📝");
      r.title = "#" + n.no + " · " + n.baslik;
      r.style.background = (DURUM[n.durum] || DURUM.acik).renk;
      r.addEventListener("click", function (e) { e.stopPropagation(); panelAc(n); });
      var hed = olayDom[i].querySelector(".o-baslik") || olayDom[i];
      hed.appendChild(r);
    });
  }

  function ogeRozetleri() {
    var kat = $("gn-oge-katman");
    if (!kat) { kat = el("div"); kat.id = "gn-oge-katman"; document.body.appendChild(kat); }
    kat.innerHTML = "";
    if (!G.acik) return;
    G.notlar.forEach(function (n) {
      if (n.veri.hedef.tur !== "oge") return;
      var e = null;
      try { e = document.querySelector(n.veri.hedef.secici); } catch (x) {}
      if (!e) return;
      var r = e.getBoundingClientRect();
      if (!r.width || !r.height) return;
      var b = el("span", "gn-postit gn-oge-postit");
      b.style.left = (r.right - 7) + "px"; b.style.top = (r.top - 7) + "px";
      b.style.background = (DURUM[n.durum] || DURUM.acik).renk;
      b.title = "#" + n.no + " · " + n.baslik;
      b.addEventListener("click", function (ev) { ev.stopPropagation(); panelAc(n); });
      kat.appendChild(b);
    });
  }

  function listeCiz() {
    var l = $("gn-liste");
    if (!l || l.style.display !== "block") return;
    l.innerHTML = "";
    var kapat = el("button", "gn-kapat", "✕"); kapat.type = "button";
    kapat.onclick = function () { l.style.display = "none"; };
    l.appendChild(kapat);
    var sende = G.notlar.filter(function (n) { return n.son === "claude"; }).length;
    var alinan = G.notlar.filter(function (n) { return n.oturum && n.oturum.length; }).length;
    l.appendChild(el("div", "gn-panel-bas", "Açık notlar (" + G.notlar.length + ") · 🤖 cevabını bekleyen " +
      sende + " · 👤 Claude'da " + (G.notlar.length - sende) + " · 🔒 oturumda " + alinan));
    if (!G.notlar.length) l.appendChild(el("div", "gn-bos", "açık not yok"));
    G.notlar.forEach(function (n) {
      var s = el("div", "gn-liste-satir");
      s.appendChild(durumCip(n.durum));
      s.appendChild(sonCip(n));
      var oc = oturumCip(n); if (oc) s.appendChild(oc);
      s.appendChild(el("span", "gn-liste-tarih", n.veri.gun));
      var ik = { harita: "🗺️", madde: "📜", oge: "🔘" }[n.veri.hedef.tur] || "";
      var bs = bolgeler(n.veri).length;
      if (bs > 1) ik += "×" + bs;
      s.appendChild(el("span", null, ik + " #" + n.no + " " + (n.veri.metin || n.baslik).slice(0, 90)));
      s.onclick = function () { notaGit(n); };
      l.appendChild(s);
    });
  }

  function hepsiniCiz() {
    var say = $("gn-sayi"); if (say) say.textContent = G.notlar.length;
    haritaNotlariGuncelle(); zamanNoktalari(); maddeRozetleri(); ogeRozetleri(); listeCiz();
    if (G.panelNo != null) {
      var n = G.notlar.filter(function (x) { return x.no === G.panelNo; })[0];
      if (!n) { $("gn-panel").style.display = "none"; G.panelNo = null; }
    }
  }

  // --------------------------------------------------------- ARAÇ ÇUBUĞU
  // Not kutularındaki tuşlar sitenin kısayollarına (boşluk = oynat/durdur,
  // oklar = gün) ULAŞMAZ — app.js'in kısayolu TEXTAREA'yı da dışlar ama bu
  // kutular kendi yalıtımını taşır (Emre 14 Ekim: boşluk yazılamıyordu).
  function kutuKur(id) {
    var d = $(id);
    if (d) return d;
    d = el("div"); d.id = id; d.style.display = "none";
    d.addEventListener("keydown", function (e) { e.stopPropagation(); });
    document.body.appendChild(d);
    return d;
  }

  function aracKur() {
    ["gn-form", "gn-panel", "gn-liste"].forEach(kutuKur);
    var a = $("gn-arac");
    if (a) { a.style.display = ""; return; }
    a = el("div"); a.id = "gn-arac";
    a.appendChild(el("span", "gn-arac-bas", "🛠"));
    function d(ad, ipucu, f, kip) {
      var b = el("button", null, ad); b.type = "button"; b.title = ipucu;
      if (kip) b.setAttribute("data-kip", kip);
      b.addEventListener("click", function (e) { e.stopPropagation(); f(); });
      a.appendChild(b); return b;
    }
    d("▢", "Kare çiz ve not düş · Shift basılı bırak: bir bölge daha", function () { kipAyarla("kare"); }, "kare");
    d("◯", "Daire çiz ve not düş · Shift basılı bırak: bir bölge daha", function () { kipAyarla("daire"); }, "daire");
    d("✎", "Kalemle çiz ve not düş · Shift basılı bırak: bir bölge daha", function () { kipAyarla("kalem"); }, "kalem");
    d("🔘", "Bir düğmeye / menüye not düş", function () { kipAyarla("oge"); }, "oge");
    var lb = d("📋", "Açık notlar", function () {
      var l = $("gn-liste"); l.style.display = l.style.display === "block" ? "none" : "block"; listeCiz();
    });
    var sy = el("span"); sy.id = "gn-sayi"; lb.appendChild(sy);
    d("⟳", "Notları yeniden yükle", function () {
      notlariYukle().then(function (l) { bildir(l.length + " açık not"); }).catch(function (e) { bildir(e.message, true); });
    });
    d("⏻", "Geliştirici kipini kapat (bu tarayıcıda token silinir)", function () {
      if (!window.confirm("Geliştirici kipi kapatılsın ve bu tarayıcıdaki token silinsin mi?")) return;
      try { localStorage.removeItem(LS_TOKEN); } catch (e) {}
      kapat();
    });
    var h = $("harita") || document.body;
    h.appendChild(a);
  }

  function ac(kim) {
    G.acik = true;
    document.body.classList.add("gelistirici");
    aracKur();
    kaynakHazir(function () {
      notlariYukle().then(function (l) {
        bildir("🛠 Geliştirici kipi · " + kim + " · " + l.length + " açık not");
        var q = (location.search.match(/[?&]not=(\d+)/) || [])[1];
        if (q) { var n = G.notlar.filter(function (x) { return x.no === +q; })[0]; if (n) notaGit(n); }
      }).catch(function (e) { bildir("Notlar okunamadı: " + e.message, true); });
    });
  }

  function kapat() {
    G.acik = false; G.token = null; G.notlar = [];
    kipKur(null); taslakTemizle();
    document.body.classList.remove("gelistirici");
    ["gn-arac", "gn-form", "gn-panel", "gn-liste"].forEach(function (id) { if ($(id)) $(id).style.display = "none"; });
    Object.keys(G.markerlar).forEach(function (k) { G.markerlar[k].remove(); });
    Object.keys(G.noMarkerlar).forEach(function (k) { G.noMarkerlar[k].forEach(function (m) { m.remove(); }); });
    G.markerlar = {}; G.noMarkerlar = {}; G.gorunen = null;
    var src = harita.getSource("gn-notlar");
    if (src) src.setData({ type: "FeatureCollection", features: [] });
    hepsiniCiz();
  }

  // Token bir kez girilir (her tarayıcıda), localStorage'da durur.
  function tokenSor() {
    var f = kutuKur("gn-form");
    f.innerHTML = "";
    f.appendChild(el("div", "gn-form-bas", "🛠 Geliştirici kipi"));
    var y = el("div", "gn-form-hedef");
    y.innerHTML = 'GitHub token\'ını gir (bir kez, bu tarayıcı için). Oluşturmak için: ' +
      '<a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">fine-grained token</a> · ' +
      'Repository access: <b>Only select → osmanli-tarih-atlasi</b> · Permissions: <b>Issues → Read and write</b>.';
    f.appendChild(y);
    var g = el("input"); g.type = "password"; g.placeholder = "github_pat_…"; g.autocomplete = "off";
    f.appendChild(g);
    var dg = el("div", "gn-form-dugmeler");
    var iptal = el("button", null, "Vazgeç"), tamam = el("button", "gn-ana", "Aç");
    iptal.type = tamam.type = "button";
    dg.appendChild(iptal); dg.appendChild(tamam); f.appendChild(dg);
    f.style.display = "block";
    setTimeout(function () { g.focus(); }, 30);
    iptal.onclick = function () { f.style.display = "none"; };
    g.addEventListener("keydown", function (e) { if (e.key === "Enter") tamam.click(); });
    tamam.onclick = function () {
      var t = g.value.trim(); if (!t) return;
      tamam.disabled = true; tamam.textContent = "doğrulanıyor…";
      dogrula(t).then(function (kim) {
        try { localStorage.setItem(LS_TOKEN, t); } catch (e) {}
        f.style.display = "none";
        ac(kim);
      }).catch(function (e) {
        tamam.disabled = false; tamam.textContent = "Aç";
        bildir("Açılamadı: " + e.message, true);
      });
    };
  }

  // ------------------------------------------------- app.js bağlantıları
  (function () {
    if (typeof window.guncelle === "function") {
      var eski = window.guncelle;
      window.guncelle = function () {
        var r = eski.apply(this, arguments);
        try { haritaNotlariGuncelle(); } catch (e) { console.warn("[geliştirici]", e); }
        return r;
      };
    }
    if (typeof window.obGoster === "function") {
      var eskiOb = window.obGoster;
      window.obGoster = function (o) {
        var r = eskiOb.apply(this, arguments);
        try {
          if (G.acik) {
            var oz = $("ob-ozel");
            if (oz) {
              var b = el("button", "gn-madde-dugme", "📝 Bu maddeye not");
              b.type = "button";
              b.onclick = function () { formAc({ tur: "madde", t: o.t, gun: o.gun || null, b: o.b }); };
              oz.appendChild(b);
            }
          }
        } catch (e) { console.warn("[geliştirici]", e); }
        return r;
      };
    }
  })();

  function baslat() {
    cizimDinle();
    ogeDinle();
    window.addEventListener("resize", function () { if (G.acik) ogeRozetleri(); });
    setInterval(function () { if (G.acik) ogeRozetleri(); }, 1500);
    window.addEventListener("keydown", function (e) {
      if (e.ctrlKey && e.altKey && (e.key === "g" || e.key === "G")) {
        e.preventDefault();
        if (!G.acik) tokenSor();
      }
    });
    var t = null;
    try { t = localStorage.getItem(LS_TOKEN); } catch (e) {}
    if (t) {
      dogrula(t).then(ac).catch(function (e) {
        console.warn("[geliştirici] kayıtlı token geçersiz:", e.message);
        if (/[?&]gelistirici=1/.test(location.search)) tokenSor();
      });
    } else if (/[?&]gelistirici=1/.test(location.search)) {
      tokenSor();
    }
  }

  window.GELISTIRICI = { G: G, yukle: notlariYukle, DURUM: DURUM,
    // sınav kancası (denetim/ARAC-GELISTIRICI-COKBOLGE-SINAV-1016.js) — davranış değiştirmez
    _ic: { notCoz: notCoz, bolgeler: bolgeler, hedefKur: hedefKur, govdeYaz: govdeYaz, baglamTopla: baglamTopla,
           bolgeEkle: bolgeEkle, taslakSil: taslakSil, formAc: formAc, kipAyarla: kipAyarla,
           haritaNotlariGuncelle: haritaNotlariGuncelle, postitYeri: postitYeri, notaGit: notaGit } };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", baslat);
  else baslat();
})();

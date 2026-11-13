// ============================================================================
// ANTLAŞMA MİKRO OYNATICISI — bir antlaşmanın maddelerini TEK TEK oynatır.
// UMIT 13 Kasım 2026 (KASA emri C, Emre isteği: Lozan/Sevr her madde tek tek,
// "Türkiye tüm ekranda" kadrajı, ileri/geri/oynat/duraklat, her adımda madde
// metni + haritada ilgili yer/bölge). GENEL ve yeniden kullanılabilir: antlaşma
// bilgisi bu dosyada YOK; data/antlasma_madde_*.js dosyaları
// window.ANTLASMA_MADDELERI dizisine kayıt iter:
//   { id, ad, t:"YYYY-MM-DD", kadraj:[bati,guney,dogu,kuzey], kaynak,
//     yerler:{ "Ad":[lon,lat] },
//     adimlar:[{ no:"12" | "37-45", bolum, ozet, yer:["Ad",...], konu, kaynak? }] }
// Eşleşme antlasma_harita.js ile AYNI desen: kronoloji maddesinin `b` alanı kayıt
// `ad`ını içerir ve `t` aynı gün ±60 gün. app.js'e DOKUNMAZ: window.obGoster
// ikinci kez sarılır (antlasma_harita.js'ten SONRA yüklenmeli), düğme #ob-ozel'e
// eklenir. Stil bu dosyadan enjekte edilir (css/style.css'e dokunulmaz).
// Harita: global `harita` (MapLibre); yer işaretleri HTML Marker, kamera fitBounds.
// ============================================================================
"use strict";
(function () {
  var AKTIF = null;   // { kayit, i, zaman, panel, isaretler }
  var ARALIK_MS = 6500;

  function gunFarki(a, b) {
    var x = Date.parse(a), y = Date.parse(b);
    return (isNaN(x) || isNaN(y)) ? 1e9 : Math.abs(x - y) / 86400000;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function eslesen(o) {
    var b = String((o && (o.b || o.baslik)) || "");
    return (window.ANTLASMA_MADDELERI || []).filter(function (k) {
      return b.indexOf(k.ad) >= 0 && gunFarki(o.t, k.t) <= 60;
    })[0] || null;
  }
  function hazirMi() {
    return typeof harita !== "undefined" && harita && typeof harita.fitBounds === "function";
  }
  function stilEkle() {
    if (document.getElementById("amo-stil")) return;
    var st = document.createElement("style");
    st.id = "amo-stil";
    st.textContent =
      ".amo-panel{margin-top:6px;border:1px solid #0a2f5c;border-radius:6px;background:#fff;color:#1a1a1a;padding:8px 10px;font-size:13px;line-height:1.4}" +
      ".amo-ust{display:flex;justify-content:space-between;align-items:center;gap:8px;font-weight:600;color:#0a2f5c}" +
      ".amo-metin{margin:6px 0;min-height:3.6em}.amo-bolum{font-size:11px;color:#555;margin-top:2px}" +
      ".amo-dugmeler{display:flex;gap:6px;align-items:center}.amo-dugmeler button{cursor:pointer;padding:3px 9px;border:1px solid #0a2f5c;border-radius:4px;background:#fff;color:#0a2f5c;font-size:14px}" +
      ".amo-dugmeler button.amo-ac{background:#0a2f5c;color:#fff}.amo-kayar{width:100%;margin-top:4px}" +
      ".amo-kaynak{font-size:11px;color:#555;margin-top:4px}" +
      ".amo-isaret{width:14px;height:14px;border-radius:50%;background:#c0392b;border:2px solid #fff;box-shadow:0 0 0 2px #c0392b;pointer-events:none}" +
      ".amo-etiket{position:absolute;left:18px;top:-4px;white-space:nowrap;font:600 12px sans-serif;color:#7b1d12;text-shadow:0 0 3px #fff,0 0 3px #fff}";
    document.head.appendChild(st);
  }

  function isaretleriTemizle() {
    if (AKTIF && AKTIF.isaretler) AKTIF.isaretler.forEach(function (m) { m.remove(); });
    if (AKTIF) AKTIF.isaretler = [];
  }

  function yerNoktalari(kayit, adim) {
    var pts = [];
    (adim.yer || []).forEach(function (ad) {
      var c = (kayit.yerler || {})[ad];
      if (c) pts.push({ ad: ad, c: c });
    });
    return pts;
  }

  function adimGoster(i) {
    if (!AKTIF) return;
    var k = AKTIF.kayit, n = k.adimlar.length;
    i = Math.max(0, Math.min(n - 1, i));
    AKTIF.i = i;
    var a = k.adimlar[i], p = AKTIF.panel;
    p.querySelector(".amo-ust b").textContent = k.ad + " — md. " + a.no + "  (" + (i + 1) + "/" + n + ")";
    p.querySelector(".amo-metin").textContent = a.ozet;
    p.querySelector(".amo-bolum").textContent = a.bolum || "";
    p.querySelector(".amo-kaynak").textContent = "Kaynak: " + (a.kaynak || k.kaynak || "");
    p.querySelector(".amo-kayar").value = String(i);
    isaretleriTemizle();
    if (!hazirMi()) return;
    var pts = yerNoktalari(k, a);
    pts.forEach(function (y) {
      var el = document.createElement("div");
      el.className = "amo-isaret";
      var et = document.createElement("span");
      et.className = "amo-etiket"; et.textContent = y.ad;
      el.appendChild(et);
      AKTIF.isaretler.push(new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat(y.c).addTo(harita));
    });
    try {
      if (pts.length === 0) {
        var K = k.kadraj;
        harita.fitBounds([[K[0], K[1]], [K[2], K[3]]], { padding: 40, duration: 900, maxZoom: 6, essential: true });
      } else if (pts.length === 1) {
        harita.easeTo({ center: pts[0].c, zoom: Math.max(harita.getZoom(), 6.5), duration: 900, essential: true });
      } else {
        var w = 180, s = 90, e = -180, no = -90;
        pts.forEach(function (y) { w = Math.min(w, y.c[0]); e = Math.max(e, y.c[0]); s = Math.min(s, y.c[1]); no = Math.max(no, y.c[1]); });
        harita.fitBounds([[w, s], [e, no]], { padding: 70, duration: 900, maxZoom: 7, essential: true });
      }
    } catch (err) { console.warn("[antlaşma oynatıcı] kamera", err); }
  }

  function durdur() {
    if (AKTIF && AKTIF.zaman) { clearInterval(AKTIF.zaman); AKTIF.zaman = null; }
    if (AKTIF && AKTIF.panel) {
      var b = AKTIF.panel.querySelector(".amo-oyna");
      if (b) { b.textContent = "▶"; b.classList.remove("amo-ac"); }
    }
  }
  function oynat() {
    if (!AKTIF || AKTIF.zaman) return;
    var b = AKTIF.panel.querySelector(".amo-oyna");
    b.textContent = "⏸"; b.classList.add("amo-ac");
    AKTIF.zaman = setInterval(function () {
      if (AKTIF.i >= AKTIF.kayit.adimlar.length - 1) { durdur(); return; }
      adimGoster(AKTIF.i + 1);
    }, ARALIK_MS);
  }
  function kapat() {
    if (!AKTIF) return;
    durdur(); isaretleriTemizle();
    if (AKTIF.panel && AKTIF.panel.parentNode) AKTIF.panel.parentNode.removeChild(AKTIF.panel);
    AKTIF = null;
  }

  function panelKur(kayit, kap) {
    stilEkle();
    var p = document.createElement("div");
    p.className = "amo-panel";
    p.innerHTML =
      '<div class="amo-ust"><b></b><button type="button" class="amo-kapat" title="Kapat" style="cursor:pointer;border:0;background:none;font-size:15px">✕</button></div>' +
      '<div class="amo-bolum"></div><div class="amo-metin"></div>' +
      '<div class="amo-dugmeler"><button type="button" class="amo-basa" title="Başa">⏮</button>' +
      '<button type="button" class="amo-geri" title="Geri">◀</button>' +
      '<button type="button" class="amo-oyna" title="Oynat / duraklat">▶</button>' +
      '<button type="button" class="amo-ileri" title="İleri">▶▶</button></div>' +
      '<input type="range" class="amo-kayar" min="0" max="' + (kayit.adimlar.length - 1) + '" value="0">' +
      '<div class="amo-kaynak"></div>';
    kap.appendChild(p);
    AKTIF = { kayit: kayit, i: 0, zaman: null, panel: p, isaretler: [] };
    p.querySelector(".amo-kapat").addEventListener("click", kapat);
    p.querySelector(".amo-basa").addEventListener("click", function () { durdur(); adimGoster(0); });
    p.querySelector(".amo-geri").addEventListener("click", function () { durdur(); adimGoster(AKTIF.i - 1); });
    p.querySelector(".amo-ileri").addEventListener("click", function () { durdur(); adimGoster(AKTIF.i + 1); });
    p.querySelector(".amo-oyna").addEventListener("click", function () { AKTIF.zaman ? durdur() : oynat(); });
    p.querySelector(".amo-kayar").addEventListener("input", function (e) { durdur(); adimGoster(Number(e.target.value)); });
    adimGoster(0);
  }

  function dugmeEkle(kayit) {
    var ozel = document.getElementById("ob-ozel");
    if (!ozel) return;
    var kutu = document.createElement("div");
    kutu.className = "ob-kutu";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.style.cssText = "cursor:pointer;padding:4px 10px;border-radius:4px;border:1px solid #0a2f5c;background:#fff;color:#0a2f5c";
    btn.textContent = "▶ Maddeleri tek tek oynat (" + kayit.adimlar.length + " adım)";
    btn.addEventListener("click", function () {
      if (AKTIF && AKTIF.kayit === kayit) { kapat(); return; }
      kapat();
      panelKur(kayit, kutu);
    });
    kutu.appendChild(btn);
    ozel.appendChild(kutu);
  }

  if (typeof window.obGoster !== "function") {
    console.warn("ANTLAŞMA OYNATICI: window.obGoster yok — bağlanamadı (script sırası?).");
    return;
  }
  var eski = window.obGoster;
  window.obGoster = function (o) {
    var r = eski.apply(this, arguments);
    try {
      kapat();   // madde değişince oynatıcı ve işaretler kalkar
      var k = eslesen(o);
      if (k) dugmeEkle(k);
    } catch (e) { console.error("[antlaşma oynatıcı]", e); }
    return r;
  };
  window.ANTLASMA_OYNATICI = { kapat: kapat, eslesen: eslesen };
})();

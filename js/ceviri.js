// ============================================================================
// ÇEVİRİ (CEVIRI-1103, Emre'nin 6. maddesi) — tasarım: denetim/CEVIRI-1103/TASARIM.md
//
// Kaynak dil Türkçedir. Her çeviri kaydı Türkçe metnin özetini (kaynak_ozet,
// FNV-1a 32 / UTF-8, 8 hane) taşır; Türkçe değişince özet tutmaz, kayıt BAYAT
// sayılır ve o madde Türkçe gösterilir. Yanlış dilde eski metin hiç görünmez.
//
// Sıra: data/*.js (Türkçe veri) → data/ceviri_dizin.js → BU DOSYA → app.js.
// Dil Türkçe değilse yalnız o dilin dosyaları document.write ile, app.js'ten
// ÖNCE eklenir (tembel: Türkçe okur hiçbir çeviri baytı indirmez). Sonra
// Ceviri.uygula() OLAYLAR*/DEVLETLER kayıtlarının metnini yerinde çevirir;
// Türkçe asıl `b_tr`/`d_tr`/`ad_tr` alanında kalır (başlıkla eşleştiren
// kodlar — antlaşma, sefer, geliştirici notu — Ceviri.trB(o) ile Türkçeye bakar).
// Arayüz metni sözlükle (data/ceviri_<dil>_arayuz.js) DOM üzerinde çevrilir.
// Dil seçimi: ?dil=en > localStorage "dil" > "tr". Değiştirmek sayfayı yeniler
// (`olaylar` sayfa boyunca sabit bir dizi — app.js 8431).
// ============================================================================
(function () {
  "use strict";
  var DIZIN = window.CEVIRI_DIZIN || { diller: [{ kod: "tr", ad: "Türkçe" }], dosyalar: {} };
  var VERI = { arayuz: {}, devlet: {}, olay: {} };
  var SAYAC = { olay_tamam: 0, olay_bayat: 0, olay_yok: 0, devlet_tamam: 0, devlet_bayat: 0, arayuz_eksik: {} };

  function dilSec() {
    var p = null;
    try { p = new URLSearchParams(location.search).get("dil"); } catch (e) {}
    var kayitli = null;
    try { kayitli = localStorage.getItem("dil"); } catch (e) {}
    var d = (p || kayitli || "tr").toLowerCase();
    var var_mi = DIZIN.diller.some(function (x) { return x.kod === d; });
    if (!var_mi) d = "tr";
    if (p) { try { localStorage.setItem("dil", d); } catch (e) {} }
    return d;
  }
  var DIL = dilSec();

  // FNV-1a 32 — UTF-8 baytları üzerinde; arac/ceviri.py `ozet()` ile birebir.
  function ozet(s) {
    s = String(s == null ? "" : s);
    var h = 0x811c9dc5;
    for (var i = 0; i < s.length; i++) {
      var c = s.charCodeAt(i);
      if (c >= 0xd800 && c <= 0xdbff && i + 1 < s.length) {   // vekil çift → tek kod noktası
        var c2 = s.charCodeAt(i + 1);
        if (c2 >= 0xdc00 && c2 <= 0xdfff) { c = 0x10000 + ((c - 0xd800) << 10) + (c2 - 0xdc00); i++; }
      }
      var b;
      if (c < 0x80) b = [c];
      else if (c < 0x800) b = [0xc0 | (c >> 6), 0x80 | (c & 63)];
      else if (c < 0x10000) b = [0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63)];
      else b = [0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63)];
      for (var j = 0; j < b.length; j++) { h ^= b[j]; h = Math.imul(h, 0x01000193) >>> 0; }
    }
    return ("0000000" + h.toString(16)).slice(-8);
  }

  // Madde kimliği: <dizi adı>:<t>:<aynı dizide aynı t'nin kaçıncısı>. Kimlik
  // kayarsa (araya aynı t'li madde girerse) özet tutmaz → Türkçe görünür;
  // yine de özet dizininden doğru çeviri bulunur (aşağıda `ozetIndeks`).
  function olayDizileri() {
    return Object.keys(window)
      .filter(function (k) { return /^(OLAYLAR(_[A-Za-z0-9_]+)?|KRONOLOJI_[A-Za-z0-9_]+)$/.test(k) && Array.isArray(window[k]); });
  }
  function kimlikle(dizi, ad, fn) {
    var say = {};
    for (var i = 0; i < dizi.length; i++) {
      var o = dizi[i];
      if (!o || typeof o !== "object") continue;
      var n = say[o.t] = (say[o.t] || 0) + 1;
      fn(o, ad + ":" + o.t + ":" + (n - 1));
    }
  }

  function uygula() {
    if (DIL === "tr") return;
    // özet → metin (alan başına): kimlik kaysa da aynı Türkçenin çevirisi bulunur
    var ozetIndeks = { b: {}, d: {} };
    Object.keys(VERI.olay).forEach(function (id) {
      var r = VERI.olay[id];
      if (r.b) ozetIndeks.b[r.b[1]] = r.b[0];
      if (r.d) ozetIndeks.d[r.d[1]] = r.d[0];
    });
    olayDizileri().forEach(function (ad) {
      kimlikle(window[ad], ad, function (o, id) {
        var r = VERI.olay[id] || {};
        ["b", "d"].forEach(function (alan) {
          var tr = o[alan];
          if (typeof tr !== "string" || !tr) return;
          var oz = ozet(tr), metin = null;
          if (r[alan] && r[alan][1] === oz) metin = r[alan][0];
          else if (ozetIndeks[alan][oz] != null) metin = ozetIndeks[alan][oz];
          if (metin) {
            o[alan + "_tr"] = tr; o[alan] = metin;
            if (alan === "b") SAYAC.olay_tamam++;
          } else if (alan === "b") {
            if (r.b) SAYAC.olay_bayat++; else SAYAC.olay_yok++;
          }
        });
        if (o.b_tr != null && o.d_tr == null && typeof o.d === "string" && o.d) o._ceviri_kismi = true;
      });
    });
    (window.DEVLETLER || []).forEach(function (dv) {
      var r = VERI.devlet[dv.id];
      if (!r || typeof dv.ad !== "string") return;
      if (r[1] === ozet(dv.ad)) { (DEVLET_AD = DEVLET_AD || {})[dv.ad] = r[0]; dv.ad_tr = dv.ad; dv.ad = r[0]; SAYAC.devlet_tamam++; }
      else SAYAC.devlet_bayat++;
    });
    document.documentElement.lang = DIL;
    // Sağdan sola diller: sayfa düzeni (harita solda, panel sağda) DEĞİŞMEZ; yalnız metin
    // blokları kendi yönünü bulur (css/style.css `.ceviri-rtl`, TASARIM.md §7).
    if (RTL[DIL]) document.documentElement.classList.add("ceviri-rtl");
  }
  var RTL = { ar: 1, fa: 1, he: 1, ur: 1 };

  // ---- Arayüz sözlüğü: metin düğümleri + title/placeholder/aria-label ----
  // Anahtar: kırpılmış Türkçe; rakam dizileri "#" ile şablonlanır ("12 madde" ↔ "# madde").
  var SABLON = /\d+(?:[.,]\d+)*/g;
  var DEVLET_AD = null;   // Türkçe ad → çeviri (seçici satırları "Ad (12)" biçiminde kurulur)
  function tekBul(s) {
    var A = VERI.arayuz;
    if (A[s] != null) return A[s];
    if (DEVLET_AD && DEVLET_AD[s] != null) return DEVLET_AD[s];
    return sablonBul(s);
  }
  // Birleştirilerek kurulan metin: "(okuyanın tepkisi: hüzün, savaş)", "Ad (12)".
  // Yalnız BÜTÜN harfli parçalar çevrilebiliyorsa uygulanır — yarı Türkçe çıktı yok.
  var AYRAC = /(\s*(?:: |, | · | — | \| |\(|\)|: ?$)\s*)/;
  function sozlukBul(s) {
    var m = tekBul(s);
    if (m != null) return m;
    var sayi = /^(.*\S)\s*\((\d+)\)$/.exec(s);
    if (sayi) { m = tekBul(sayi[1]); if (m != null) return m + " (" + sayi[2] + ")"; }
    var p = s.split(AYRAC);
    if (p.length < 2) return null;
    for (var i = 0; i < p.length; i++) {
      if (i % 2 === 1 || !/[A-Za-zÇĞİÖŞÜçğıöşü]/.test(p[i])) continue;
      var c = tekBul(p[i].trim());
      if (c == null) return null;
      p[i] = p[i].replace(p[i].trim(), c);
    }
    return p.join("");
  }
  function sablonBul(s) {
    var A = VERI.arayuz;
    if (!SABLON.test(s)) return null;
    SABLON.lastIndex = 0;
    var sayilar = s.match(SABLON);
    var k = s.replace(SABLON, "#");
    var m = A[k];
    if (m == null) return null;
    var i = 0;
    return m.replace(/#/g, function () { return sayilar[i++] || "#"; });
  }
  var ATLA = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1 };
  var NITELIK = ["title", "placeholder", "aria-label", "data-ipucu"];
  function metniCevir(dugum) {
    var ham = dugum.nodeValue;
    if (!ham || !/[A-Za-zÇĞİÖŞÜçğıöşü]/.test(ham)) return;
    var k = ham.trim();
    if (!k || k.length > 400) return;
    var m = sozlukBul(k);
    if (m != null) { dugum.nodeValue = ham.replace(k, m); return; }
    if (TOPLA && /[çğıöşüÇĞİÖŞÜ]|\b(ve|ile|bir|için)\b/.test(k)) SAYAC.arayuz_eksik[k] = (SAYAC.arayuz_eksik[k] || 0) + 1;
  }
  function ogeCevir(el) {
    for (var i = 0; i < NITELIK.length; i++) {
      var v = el.getAttribute && el.getAttribute(NITELIK[i]);
      if (!v) continue;
      var m = sozlukBul(v.trim());
      if (m != null && m !== v) el.setAttribute(NITELIK[i], m);
    }
  }
  function agacCevir(kok) {
    if (!kok) return;
    if (kok.nodeType === 3) { if (!(kok.parentNode && ATLA[kok.parentNode.nodeName])) metniCevir(kok); return; }
    if (kok.nodeType !== 1 || ATLA[kok.nodeName]) return;
    if (kok.closest && kok.closest("[data-ceviri-yok]")) return;
    ogeCevir(kok);
    var w = document.createTreeWalker(kok, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        if (n.nodeType === 1) return (ATLA[n.nodeName] || n.hasAttribute("data-ceviri-yok")) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n;
    while ((n = w.nextNode())) { if (n.nodeType === 3) metniCevir(n); else ogeCevir(n); }
  }
  var TOPLA = /[?&]ceviri_topla=1/.test(location.search);
  var gozcu = null;
  function arayuzBaslat() {
    if (DIL === "tr" || !Object.keys(VERI.arayuz).length) return;
    agacCevir(document.body);
    if (document.title) { var t = sozlukBul(document.title); if (t) document.title = t; }
    // Kayıtlar 30 ms'lik dilimlerle işlenir: sayfanın kendi gözcüsü ya da "metin
    // farklıysa yeniden yaz" döngüsü çeviriyle mikro-görev ping-pongu kurarsa
    // sayfa donmaz, en kötü 30 ms'de bir tur olur.
    var kuyruk = [], planli = false;
    gozcu = new MutationObserver(function (kayitlar) {
      for (var i = 0; i < kayitlar.length; i++) kuyruk.push(kayitlar[i]);
      // setTimeout (rAF değil): arka plandaki sekmede rAF hiç dönmez, kuyruk sonsuza dek bekler
      if (!planli) { planli = true; setTimeout(isle, 30); }
    });
    function isle() {
      planli = false;
      var liste = kuyruk; kuyruk = [];
      gozcu.disconnect();
      var dugumler = new Set();
      for (var i = 0; i < liste.length; i++) {
        var r = liste[i];
        if (r.type === "characterData") dugumler.add(r.target);
        else if (r.type === "attributes") ogeCevir(r.target);
        else for (var j = 0; j < r.addedNodes.length; j++) dugumler.add(r.addedNodes[j]);
      }
      dugumler.forEach(function (n) { if (n.isConnected) agacCevir(n); });
      ISLEM.tur++; ISLEM.dugum += dugumler.size;
      izle();
    }
    izle();
  }
  var ISLEM = { tur: 0, dugum: 0 };
  function izle() {
    gozcu.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: NITELIK });
  }

  // ---- Dil seçici (üst çubuk) ----
  function seciciKur() {
    if (DIZIN.diller.length < 2) return;
    var yer = document.getElementById("btn-panel");
    var sel = document.createElement("select");
    sel.id = "dil-secici";
    sel.setAttribute("data-ceviri-yok", "");
    sel.title = DIL === "tr" ? "Dil" : "Language";
    DIZIN.diller.forEach(function (d) {
      var op = document.createElement("option");
      op.value = d.kod; op.textContent = d.ad;
      if (d.kod === DIL) op.selected = true;
      sel.appendChild(op);
    });
    sel.addEventListener("change", function () {
      try { localStorage.setItem("dil", sel.value); } catch (e) {}
      var u = new URL(location.href);
      u.searchParams.set("dil", sel.value);
      location.href = u.toString();
    });
    if (yer && yer.parentNode) yer.parentNode.insertBefore(sel, yer.nextSibling);   // #btn-panel margin-left:auto → ikisi en sağda
    else document.body.appendChild(sel);
  }

  window.Ceviri = {
    dil: DIL,
    ozet: ozet,
    ekle: function (dil, tur, kayitlar) {
      if (dil !== DIL || !VERI[tur]) return;
      var h = VERI[tur];
      for (var k in kayitlar) {
        if (!Object.prototype.hasOwnProperty.call(kayitlar, k)) continue;
        // arayüzde anahtar Türkçenin kendisi → özet hep tutar; sözlükte yalnız metin durur
        if (tur === "arayuz") { if (kayitlar[k][1] === ozet(k)) h[k] = kayitlar[k][0]; }
        else h[k] = kayitlar[k];
      }
    },
    uygula: uygula,
    trB: function (o) { return o && o.b_tr != null ? o.b_tr : (o && o.b); },
    t: function (s) { var m = DIL === "tr" ? null : sozlukBul(s); return m == null ? s : m; },
    sayac: SAYAC,
    islem: function () { return ISLEM; },
    eksikler: function () { return Object.keys(SAYAC.arayuz_eksik).sort(); }
  };

  if (DIL !== "tr") {
    var liste = (DIZIN.dosyalar[DIL] || []);
    var html = "";
    for (var i = 0; i < liste.length; i++) {
      html += '<script src="data/' + liste[i][0] + '?v=' + liste[i][1] + '"><\/script>';
    }
    html += "<script>window.Ceviri.uygula();<\/script>";
    document.write(html);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { seciciKur(); arayuzBaslat(); });
  } else { seciciKur(); arayuzBaslat(); }
})();

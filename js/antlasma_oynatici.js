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
  // EMRELIC 13 Kasım 2026: eşleşme ORTAK yardımcıya taşındı (js/antlasma_eslesme.js: anahtarlar[],
  // antlasma_id, pencere_gun). Yardımcı yoksa (script sırası/önbellek) ESKİ kural aynen çalışır.
  function eslesen(o) {
    if (window.ANTLASMA_ESLESME) return window.ANTLASMA_ESLESME.eslesen(o);
    var b = String((o && (o.b || o.baslik)) || "");
    return (window.ANTLASMA_MADDELERI || []).filter(function (k) {
      var anahtarlar = (k.anahtarlar && k.anahtarlar.length) ? k.anahtarlar : [k.ad];
      return anahtarlar.some(function (a) { return b.indexOf(a) >= 0; }) && gunFarki(o.t, k.t) <= 60;
    })[0] || null;
  }
  // ---- ADIM BAŞLIĞI: çok taraflı antlaşmada `taraf` ayrı alan (LAB/Karlofça pilotu, KASA 13 Kasım) ----
  // adım.taraf="Venedik", no="3"  →  "Venedik md. 3";  taraf yoksa  →  "md. 3" (Lozan/Sevr: değişmedi).
  // ESKİ KAYIT uyumu: taraf yok ve no "Venedik 3" biçimindeyse (bölüm-başına string) taraf/no AYRIŞTIRILIR
  // (yalnız görüntü; veri değişmez): "Venedik 3" → "Venedik md. 3".
  var NON_TARAF = /^(ek|ekler|ek belge|protokol|madde|fıkra|annex|bölüm|kısım)$/i;
  // kayıttaki taraflar: `taraf` alanı ya da «Taraf 3» biçimli eski `no`'lar (bir kez hesaplanır)
  function bilinenTaraflar(kayit) {
    if (!kayit) return [];
    if (kayit._taraflar) return kayit._taraflar;
    var t = [];
    (kayit.adimlar || []).forEach(function (a) {
      var x = a.taraf ? String(a.taraf).trim() : "";
      if (!x) {
        var m = /^([^\d]*[^\d\s])\s+(\d[\d–\-]*)$/.exec(String(a.no == null ? "" : a.no).trim());
        if (m && !NON_TARAF.test(m[1])) x = m[1];
      }
      if (x && t.indexOf(x) < 0) t.push(x);
    });
    kayit._taraflar = t;
    return t;
  }
  function adimTarafNo(a, kayit) {
    var taraf = a.taraf ? String(a.taraf).trim() : "", no = String(a.no == null ? "" : a.no).trim();
    if (!taraf) {
      var m = /^([^\d]*[^\d\s])\s+(\d[\d–\-]*)$/.exec(no);
      // «Ek 1», «Protokol 2», «Madde 5» taraf DEĞİLDİR (bölüm adı): olduğu gibi kalır
      if (m && !NON_TARAF.test(m[1])) { taraf = m[1]; no = m[2]; }
      else {                                   // «Venedik giriş», «Venedik onay»: tarafı kayıttan bilinen taraflardan
        var b = bilinenTaraflar(kayit);
        for (var i = 0; i < b.length; i++) {
          if (no.indexOf(b[i] + " ") === 0) { taraf = b[i]; no = no.slice(b[i].length + 1); break; }
        }
      }
    }
    return { taraf: taraf, no: no };
  }
  // «md. » öneki YALNIZ sayısal numarada (UMIT 832beb5d6 kuralı): «Venedik md. 3», «md. 27-35»;
  // «Ek 1», «Venedik giriş», «Giriş» olduğu gibi gösterilir.
  function adimBaslik(a, kayit) {
    var x = adimTarafNo(a, kayit), sayisal = /^\d/.test(x.no);
    // üretici başlığa taraf adını zaten yazdıysa («Habsburg md. 1», «Genel çerçeve») ikinci kez ekleme
    var zatenVar = x.taraf && x.no.toLocaleLowerCase("tr").indexOf(x.taraf.toLocaleLowerCase("tr")) === 0;
    return (x.taraf && !zatenVar ? x.taraf + " " : "") + (sayisal ? "md. " : "") + x.no;
  }
  // Taraf süzgeci: kayıtta ≥ 2 farklı taraf varsa panelde "Tüm taraflar / Habsburg / Venedik …" seçici.
  function tarafSecici(kayit) {
    var gor = [], taraflar = [];
    (kayit.adimlar || []).forEach(function (a) {
      var t = adimTarafNo(a, kayit).taraf;
      if (t && gor.indexOf(t) < 0) { gor.push(t); taraflar.push(t); }
    });
    if (taraflar.length < 2) return "";
    return '<div class="amo-donem"><span>Taraf:</span><select class="amo-taraf"><option value="">Tüm taraflar</option>' +
      taraflar.map(function (t) { return '<option value="' + esc(t) + '">' + esc(t) + "</option>"; }).join("") + "</select></div>";
  }
  // ---- ÖNCE | SONRA (harita tarihi) -----------------------------------------
  // ÖNCE = kayıt.onceki_t (yoksa antlaşma günü − 1) · SONRA = kayıt.sonra_t (yoksa antlaşma günü).
  // Harita tarihi app.js'in genel `tarihAyarla(gün)`ı ile değişir; oynatıcı ✕ ile KAPATILIRKEN açılıştaki
  // tarih geri yüklenir (madde değişimiyle kapanışta DEĞİL: o zaman yeni madde kendi tarihine gitmiştir).
  function tarihKullanilabilir() {
    return typeof tarihAyarla === "function" && window.GUN && window.ANTLASMA_ESLESME;
  }
  function donemGunu(k, donem) {
    var E = window.ANTLASMA_ESLESME;
    return donem === "savas" ? E.savasOncesiGun(k) : donem === "once" ? E.oncekiGun(k) : E.sonrakiGun(k);
  }
  // 🔴 Harita boyaması güvencesi: app.js guncelle() petek verisini YALNIZ `haritaHazir && di !== aktifDonem`
  // iken setData ile çizer; harita (stil) henüz hazır değilken tarihAyarla çağrılırsa ya da guncelle() içinde
  // bir hata (örn. `points`) çizimi yarıda keserse aktifDonem yeni döneme işaretli kalıp harita ESKİ hâlde kalabilir.
  // Burada: tarih değiştikten sonra aktifDonem ≠ donemBul(suanki) ise aktifDonem sıfırlanıp guncelle() yeniden
  // çağrılır; harita hazır değilse hazır olana dek (≤ 8 sn) 400 ms aralıkla yeniden denenir. Hata yutulmaz, uyarılır.
  function haritaYenidenCizGuvence(deneme) {
    deneme = deneme || 0;
    try {
      if (typeof haritaHazir === "undefined" || typeof donemBul !== "function" || typeof guncelle !== "function") return;
      var di = donemBul(suanki);
      if (!haritaHazir) {
        if (deneme < 20) setTimeout(function () { haritaYenidenCizGuvence(deneme + 1); }, 400);
        return;
      }
      if (di >= 0 || di === -2 || di === -3) {
        if (aktifDonem !== di) { guncelle(); }                 // normal yol zaten çizdiyse dokunma
        else if (deneme === 0) {
          // aktifDonem doğru görünüyor ama çizim yarıda kalmış olabilir: bir kez zorla yeniden çiz
          var kaynak = harita && harita.getSource && harita.getSource("osmanli");
          if (kaynak && kaynak._data && kaynak._data.features && !kaynak._data.features.length && di >= 0) {
            aktifDonem = null; guncelle();
          }
        }
      }
    } catch (e) {
      console.warn("[antlaşma oynatıcı] harita yeniden çizim güvencesi", e);
      if ((deneme || 0) < 3) setTimeout(function () { haritaYenidenCizGuvence((deneme || 0) + 1); }, 600);
    }
  }
  function donemAyarla(donem) {
    if (!AKTIF || !tarihKullanilabilir()) return;
    var k = AKTIF.kayit;
    if (AKTIF.oncekiTarih == null && typeof suanki !== "undefined") AKTIF.oncekiTarih = suanki;
    AKTIF.donem = donem;
    AKTIF.donemKilit = Date.now() + 4000;      // obGoster sarmalayıcısı bu süre içinde paneli kapatmaz (aşağıda)
    try { tarihAyarla(GUN.gun(donemGunu(k, donem))); AKTIF.tarihDegisti = true; }
    catch (e) { console.warn("[antlaşma oynatıcı] tarih", e); }
    haritaYenidenCizGuvence();
    var p = AKTIF.panel;
    ["savas", "once", "sonra"].forEach(function (d) {
      var b = p.querySelector(".amo-" + d);
      if (b) b.classList.toggle("amo-ac", donem === d);
    });
    adimGoster(AKTIF.i);
  }
  // Bir yerin o günkü sahibi (haritadan TÜRETİLİR; veri yazılmaz). Yoksa null.
  function sahipAdiGunde(yerAdi, gunStr) {
    try {
      var Y = (window.YERLESIMLER || []).filter(function (y) { return y.ad === yerAdi; })[0];
      if (!Y || !window.SUZGEC || !SUZGEC.sahipAnahtari || typeof _sahipAdi !== "function") return null;
      return _sahipAdi(SUZGEC.sahipAnahtari(Y, gunStr));
    } catch (e) { return null; }
  }
  function etkiSatirlari(k, adim) {
    var cik = [], E = window.ANTLASMA_ESLESME;
    (adim.etki || []).forEach(function (e) {      // elle yazılmış etki (türetilemeyen durumlar)
      cik.push(esc(e.yer) + ": " + esc(e.once || "?") + " → " + esc(e.sonra || "?") + (e.not ? " · " + esc(e.not) : ""));
    });
    if (cik.length || !E) return cik;
    var o = E.etkiOnceGun(k), s = E.sonrakiGun(k);
    (adim.yer || []).slice(0, 6).forEach(function (ad) {
      var a = sahipAdiGunde(ad, o), b = sahipAdiGunde(ad, s);
      if (a == null || b == null) return;
      cik.push(esc(ad) + ": " + esc(a) + (a === b ? " (değişmedi)" : " → " + esc(b)));
    });
    return cik;
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
      ".amo-donem{display:flex;gap:6px;align-items:center;margin:4px 0;font-size:12px}.amo-donem button{cursor:pointer;padding:2px 10px;border:1px solid #0a2f5c;border-radius:4px;background:#fff;color:#0a2f5c}.amo-donem button.amo-ac{background:#0a2f5c;color:#fff}" +
      ".amo-etki{font-size:12px;color:#333;margin:2px 0}" +
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
    var k = AKTIF.kayit, L = AKTIF.liste, n = L.length;     // L: taraf süzgecinden geçen görünür adımlar
    if (!n) return;
    i = Math.max(0, Math.min(n - 1, i));
    AKTIF.i = i;
    var a = L[i], p = AKTIF.panel;
    p.querySelector(".amo-ust b").textContent = k.ad + " — " + adimBaslik(a, k) + "  (" + (i + 1) + "/" + n + ")";
    var m = p.querySelector(".amo-metin");
    m.textContent = a.dogrulanmadi ? "⚠ İÇERİK DOĞRULANMADI — " + a.ozet : a.ozet;
    m.style.background = a.dogrulanmadi ? "#fff3cd" : "";
    m.style.borderLeft = a.dogrulanmadi ? "3px solid #b8860b" : "";
    m.style.paddingLeft = a.dogrulanmadi ? "6px" : "";
    p.querySelector(".amo-bolum").textContent = a.bolum || "";
    p.querySelector(".amo-kaynak").textContent = "Kaynak: " + (a.kaynak || k.kaynak || "");
    p.querySelector(".amo-kayar").value = String(i);
    var et = p.querySelector(".amo-etki");
    if (et) {                                   // ÖNCE→SONRA sahiplik etiketleri (haritadan türetilir / adımda `etki[]`)
      var satirlar = etkiSatirlari(k, a);
      et.innerHTML = satirlar.length ? "<b>Haritada (ÖNCE → SONRA):</b><br>" + satirlar.join("<br>") : "";
    }
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
      if (AKTIF.i >= AKTIF.liste.length - 1) { durdur(); return; }
      adimGoster(AKTIF.i + 1);
    }, ARALIK_MS);
  }
  // geriYukle=true: kullanıcı ✕/düğme ile KAPATTI → ÖNCE|SONRA yüzünden değişen harita tarihi açılıştaki değere döner.
  // (Madde değişimiyle kapanışta geriYukle YOK: yeni madde kendi tarihine gitmiştir, ezilmemeli.)
  function kapat(geriYukle) {
    if (!AKTIF) return;
    var eski = AKTIF;
    durdur(); isaretleriTemizle();
    if (AKTIF.panel && AKTIF.panel.parentNode) AKTIF.panel.parentNode.removeChild(AKTIF.panel);
    AKTIF = null;
    if (geriYukle === true && eski.tarihDegisti && eski.oncekiTarih != null && typeof tarihAyarla === "function") {
      try { tarihAyarla(eski.oncekiTarih); } catch (e) { console.warn("[antlaşma oynatıcı] tarih geri", e); }
      // Kilit sırasında kart başka maddeyle yeniden kuruldu ve düğmesiz kaldı: ✕ sonrası açılış maddesi
      // yeniden gösterilince düğmeyi geri koy (app tarihe göre maddeyi kendisi açar; gecikmeli beklenir).
      setTimeout(function () { duguGeriKoy(eski.kayit); }, 900);
    }
  }

  function panelKur(kayit, kap) {
    stilEkle();
    var p = document.createElement("div");
    p.className = "amo-panel";
    p.innerHTML =
      '<div class="amo-ust"><b></b><button type="button" class="amo-kapat" title="Kapat" style="cursor:pointer;border:0;background:none;font-size:15px">✕</button></div>' +
      '<div class="amo-bolum"></div><div class="amo-metin"></div><div class="amo-etki"></div>' +
      ((kayit.onceki_yok || !tarihKullanilabilir()) ? "" :
        '<div class="amo-donem"><span>Harita:</span>' +
        (kayit.onceki_t ? '<button type="button" class="amo-savas" title="Savaştan önce (' + esc(donemGunu(kayit, "savas")) + ')">SAVAŞ ÖNCESİ</button>' : "") +
        '<button type="button" class="amo-once" title="Antlaşmadan önceki gün (' + esc(donemGunu(kayit, "once")) + ')">' + (kayit.onceki_t ? "ANTLAŞMA ÖNCESİ" : "ÖNCE") + '</button>' +
        '<button type="button" class="amo-sonra" title="Antlaşma günü (' + esc(donemGunu(kayit, "sonra")) + ')">SONRA</button></div>') +
      tarafSecici(kayit) +
      '<div class="amo-dugmeler"><button type="button" class="amo-basa" title="Başa">⏮</button>' +
      '<button type="button" class="amo-geri" title="Geri">◀</button>' +
      '<button type="button" class="amo-oyna" title="Oynat / duraklat">▶</button>' +
      '<button type="button" class="amo-ileri" title="İleri">▶▶</button>' +
      '<button type="button" class="amo-fark" title="Haritayı el değiştiren bölgelere (yoksa antlaşma kadrajına) çerçevele">⌖ Farka odaklan</button></div>' +
      '<input type="range" class="amo-kayar" min="0" max="' + (kayit.adimlar.length - 1) + '" value="0">' +
      '<div class="amo-kaynak"></div>';
    kap.appendChild(p);
    AKTIF = { kayit: kayit, i: 0, zaman: null, panel: p, isaretler: [], liste: kayit.adimlar.slice(), taraf: "" };
    p.querySelector(".amo-kapat").addEventListener("click", function () { kapat(true); });
    ["savas", "once", "sonra"].forEach(function (d) {
      var b = p.querySelector(".amo-" + d);
      if (b) b.addEventListener("click", function () { durdur(); donemAyarla(d); });
    });
    var ts = p.querySelector(".amo-taraf");
    if (ts) ts.addEventListener("change", function (e) {
      durdur();
      var t = e.target.value;
      AKTIF.taraf = t;
      AKTIF.liste = t ? AKTIF.kayit.adimlar.filter(function (a) { return adimTarafNo(a, AKTIF.kayit).taraf === t; }) : AKTIF.kayit.adimlar.slice();
      var ky = AKTIF.panel.querySelector(".amo-kayar");
      ky.max = String(Math.max(0, AKTIF.liste.length - 1));
      adimGoster(0);
    });
    // «Farka odaklan» (app.js ANT_FARK ile aynı kutu): el değiştiren bölgelerin çerçevesi; ANT_FARK o an yoksa kayıt kadrajı
    p.querySelector(".amo-fark").addEventListener("click", function () {
      durdur();
      if (!hazirMi()) return;
      var kb = (typeof ANT_FARK !== "undefined" && ANT_FARK && ANT_FARK.madde && ANT_FARK.kutu) ? ANT_FARK.kutu : AKTIF.kayit.kadraj;
      try { harita.fitBounds([[kb[0], kb[1]], [kb[2], kb[3]]], { padding: 50, duration: 900, maxZoom: 7, essential: true }); }
      catch (err) { console.warn("[antlaşma oynatıcı] farka odaklan", err); }
    });
    p.querySelector(".amo-basa").addEventListener("click", function () { durdur(); adimGoster(0); });
    p.querySelector(".amo-geri").addEventListener("click", function () { durdur(); adimGoster(AKTIF.i - 1); });
    p.querySelector(".amo-ileri").addEventListener("click", function () { durdur(); adimGoster(AKTIF.i + 1); });
    p.querySelector(".amo-oyna").addEventListener("click", function () { AKTIF.zaman ? durdur() : oynat(); });
    p.querySelector(".amo-kayar").addEventListener("input", function (e) { durdur(); adimGoster(Number(e.target.value)); });
    adimGoster(0);
  }

  var SON_MADDE = null;      // kilitsiz son obGoster maddesi (düğmenin sahibi)
  function duguGeriKoy(kayit) {
    if (AKTIF) return;
    var oz = document.getElementById("ob-ozel"), bs = document.getElementById("ob-baslik");
    if (!oz || !bs || oz.querySelector(".amo-dugme-kutu") || !SON_MADDE) return;
    if (bs.textContent !== SON_MADDE.b) return;          // kart başka maddede: dokunma
    if (eslesen(SON_MADDE) === kayit && kayit.adimlar && kayit.adimlar.length) dugmeEkle(kayit);
  }
  function dugmeEkle(kayit) {
    var ozel = document.getElementById("ob-ozel");
    if (!ozel) return;
    var kutu = document.createElement("div");
    kutu.className = "ob-kutu amo-dugme-kutu";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.style.cssText = "cursor:pointer;padding:4px 10px;border-radius:4px;border:1px solid #0a2f5c;background:#fff;color:#0a2f5c";
    btn.textContent = "▶ Maddeleri tek tek oynat (" + kayit.adimlar.length + " adım)";
    btn.addEventListener("click", function () {
      if (AKTIF && AKTIF.kayit === kayit) { kapat(true); return; }
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
      // ÖNCE|SONRA haritanın tarihini değiştirir → uygulama o güne ait maddeyi KENDİSİ açar (obGoster başka madde
      // ile çağrılır) ve eski kapat() oynatıcıyı kapatırdı (13 Kasım tarayıcı sınaması). Kilit süresince panel
      // yeni kartın #ob-ozel'ine TAŞINIR, kapatılmaz; kullanıcı ✕ ile kapatır (tarih geri yüklenir).
      if (AKTIF && AKTIF.donemKilit && Date.now() < AKTIF.donemKilit) {
        var oz = document.getElementById("ob-ozel");
        if (oz && AKTIF.panel) {
          var kt = document.createElement("div");
          kt.className = "ob-kutu";
          kt.appendChild(AKTIF.panel);
          oz.appendChild(kt);
        }
        return r;
      }
      kapat();   // madde değişince oynatıcı ve işaretler kalkar
      SON_MADDE = o;
      var k = eslesen(o);
      if (k && k.adimlar && k.adimlar.length) dugmeEkle(k);   // adımsız (yarım) kayıtta düğme ÇIKMAZ
    } catch (e) { console.error("[antlaşma oynatıcı]", e); }
    return r;
  };
  window.ANTLASMA_OYNATICI = { kapat: kapat, eslesen: eslesen };
})();

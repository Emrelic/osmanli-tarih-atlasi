// ============================================================================
// ZİYARETÇİ GÜNLÜĞÜ — toplama istemcisi (24 Kasım 2026; karar: denetim/YONETIM-KARAR-1124.md)
//
// NE YAPAR: izin veren ziyaretçinin kaba kullanımını (açılış, bakılan madde, oynat,
// uçuş kipi, dil, cihaz türü, sitede kalma süresi) rastgele bir takma numarayla
// Supabase `ziyaret_kaydet()` işlevine toplu gönderir (supabase/gunluk_g1.sql).
//
// NE YAPMAZ: IP, ad, e-posta, telefon, makine adı, parmak izi, şehir toplamaz.
// Ülkeyi SUNUCU ön kapısı verir (ham IP okunmaz); yoksa saat-dilimi tahmini (ZIYARETCI.ulke).
//
// İZİN: ilk açılışta Kabul / Reddet. Reddeden, ya da tarayıcısı "İzleme" (DNT) diyen
// ziyaretçi için HİÇBİR ŞEY kaydedilmez, numara bile üretilmez. Tercih localStorage "ka_cerez".
//
// app.js'e DOKUNMAZ: DOM'u dışarıdan dinler (#ob-baslik madde başlığı, #btn-oynat,
// localStorage "ucusKip", <html lang>). Geç yüklenir (defer + boşta kalınca), açılışı yavaşlatmaz.
//
// GERİ ALMA: ?cerez=sifirla  → tercihi ve numarayı siler, bildirimi yeniden gösterir
//            ?verilerimi_sil=1 → sunucudaki kayıtlarını (numara + giriş yaptıysa hesap) siler
// ============================================================================
(function () {
  "use strict";
  var AYAR = window.FORUM_AYAR || {};             // forum/ayar.js: aynı Supabase projesi, anon anahtar
  if (!AYAR.url || !AYAR.anonAnahtar) return;     // bağlantı yoksa sessizce çık
  var UA = navigator.userAgent || "";
  if (navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse|preview/i.test(UA)) return;

  var LS = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) {} }
  };
  var SS = {
    get: function (k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} }
  };
  var T = function (s) { try { return window.Ceviri && window.Ceviri.t ? window.Ceviri.t(s) : s; } catch (e) { return s; } };

  function rastgele(n) {
    var abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", s = "", i;
    try {
      var a = new Uint8Array(n); crypto.getRandomValues(a);
      for (i = 0; i < n; i++) s += abc.charAt(a[i] % abc.length);
    } catch (e) { for (i = 0; i < n; i++) s += abc.charAt(Math.floor(Math.random() * abc.length)); }
    return s;
  }

  // Giriş yapmış üyenin erişim anahtarı (süresi dolmamışsa); yoksa anon anahtar. Süresi dolmuş
  // anahtar PostgREST'te 401 verip TÜM toplu gönderimi kaybettirir — bu yüzden süre denetlenir.
  function yetkiAnahtari() {
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (/^sb-.*-auth-token$/.test(k)) {
          var o = JSON.parse(localStorage.getItem(k) || "null") || {};
          var s = o.currentSession || o;
          if (s && s.access_token && (!s.expires_at || s.expires_at > Date.now() / 1000 + 60)) return s.access_token;
        }
      }
    } catch (e) {}
    return AYAR.anonAnahtar;
  }

  function rpc(ad, govde, canli) {
    return fetch(AYAR.url + "/rest/v1/rpc/" + ad, {
      method: "POST", keepalive: !!canli, mode: "cors", credentials: "omit",
      headers: { "Content-Type": "application/json", "apikey": AYAR.anonAnahtar, "Authorization": "Bearer " + yetkiAnahtari() },
      body: JSON.stringify(govde)
    });
  }

  function cihazTuru() {
    var w = Math.min(screen.width || 0, screen.height || 0) || window.innerWidth;
    var dokunmatik = false;
    try { dokunmatik = window.matchMedia("(pointer:coarse)").matches; } catch (e) {}
    if (dokunmatik && w < 600) return "telefon";
    if (dokunmatik && w < 1100) return "tablet";
    return "masaustu";
  }
  function dilKodu() {
    var d = (LS.get("dil") || document.documentElement.lang || "tr").toLowerCase();
    return /^[a-z]{2,8}(-[a-z0-9]{2,8})?$/.test(d) ? d : "tr";
  }

  // ─── Özel istekler (geri alma) ───────────────────────────────────────────
  var q = "";
  try { q = location.search; } catch (e) {}
  var kisiNo = LS.get("ka_kisi");
  if (/[?&]verilerimi_sil=1/.test(q)) {
    var f = rpc("ziyaret_sil", { p_kisi: kisiNo || null });
    LS.del("ka_kisi"); LS.del("ka_cerez");
    (f && f.then ? f : Promise.resolve()).then(function () {
      try { alert(T("Kayıtlarınız silindi.")); } catch (e) {}
    }, function () {
      try { alert(T("Silme isteği gönderilemedi, sonra yeniden deneyin.")); } catch (e) {}
    });
    return;
  }
  // Tercihi sıfırlar ama numarayı TUTAR: önceki kayıtlar sunucuda duruyor; ziyaretçi bildirimde "Reddet" derse
  // (rızayı geri alma) o numaranın kayıtları silinir. Numara burada silinseydi eski kayıtlar sahipsiz kalırdı.
  if (/[?&]cerez=sifirla/.test(q)) { LS.del("ka_cerez"); }

  // ─── İzin ────────────────────────────────────────────────────────────────
  var izin = LS.get("ka_cerez");                  // "evet" | "hayir" | null (sorulmadı)
  var dnt = navigator.doNotTrack === "1" || window.doNotTrack === "1";
  if (dnt && izin !== "evet") return;             // tarayıcı "izleme" diyorsa sorma, kaydetme
  if (izin === "hayir") return;

  // ─── Toplama ─────────────────────────────────────────────────────────────
  var kuyruk = [];
  var oturum = SS.get("ka_oturum");
  if (!oturum) { oturum = rastgele(12); SS.set("ka_oturum", oturum); }
  var gorunurBas = document.visibilityState === "visible" ? Date.now() : 0;
  var gorunurMs = 0;
  var sonMadde = "";
  var sonUcus = null;
  var ana = !/\/(forum|yonetim|gizlilik)\//.test(location.pathname);

  function ekle(o, a, n) {
    var k = { o: o };
    if (a != null && a !== "") k.a = String(a).slice(0, 300);
    if (n != null) k.n = Math.max(0, Math.min(86400, Math.round(n)));
    kuyruk.push(k);
    if (kuyruk.length >= 12) gonder(false);
  }

  function gonder(canli) {
    if (!kisiNo || !kuyruk.length) return;
    var parti = kuyruk.splice(0, 50);
    var zy = window.ZIYARETCI || {};
    rpc("ziyaret_kaydet", {
      p_kisi: kisiNo, p_oturum: oturum, p_olaylar: parti,
      p_cihaz: cihazTuru(), p_dil: dilKodu(), p_ulke_ipucu: zy.ulke || null
    }, canli).catch(function () { /* sessiz: sayaç siteyi hiçbir zaman bozmaz */ });
  }

  function kalmaYaz() {
    var simdi = Date.now();
    if (gorunurBas) { gorunurMs += simdi - gorunurBas; gorunurBas = simdi; }
    var sn = Math.round(gorunurMs / 1000);
    gorunurMs = 0;
    if (sn > 0) ekle("kalma", null, sn);
  }

  function ucusKipi() { return (LS.get("ucusKip") || "").slice(0, 20); }
  function ucusKontrol() {
    var u = ucusKipi();
    if (u && u !== sonUcus) { sonUcus = u; ekle("ucus", u); }
  }

  var baslatZamani = 0;
  function baslat() {
    baslatZamani = Date.now();
    if (!kisiNo) {
      kisiNo = rastgele(24);
      LS.set("ka_kisi", kisiNo);
    }
    if (ana) {
      ekle("acilis");
      ucusKontrol();
      var son = LS.get("ka_son_dil"), d = dilKodu();
      if (son !== d) { LS.set("ka_son_dil", d); ekle("dil", d); }
    } else {
      ekle("sayfa", location.pathname.replace(/[^A-Za-z0-9_\-\/.]/g, "").slice(0, 100));
    }

    // Bakılan madde: kart başlığı değişince (app.js'e dokunmadan)
    var bas = document.getElementById("ob-baslik");
    if (bas && window.MutationObserver) {
      new MutationObserver(function () {
        var m = (bas.textContent || "").trim().slice(0, 120);
        if (!m || m === sonMadde) return;
        sonMadde = m;
        // Oynatma sürerken kart KENDİLİĞİNDEN değişir (app.js oynatDurdur: düğme ⏸) — ziyaretçinin
        // seçimi değildir, sayılmaz. Yalnız "oynat" tıklaması ayrıca kaydedilir.
        var ds = document.querySelector("#btn-oynat .dg-simge");
        if (ds && ds.textContent.indexOf("⏸") === 0) return;      // simgenin ardında görünmez işaret olabilir
        // Açılışta uygulama kendi açılış maddesini açar (js/acilis.js, ülkeye göre) — ziyaretçi seçmedi
        if (Date.now() - baslatZamani < 8000) return;
        var tar = document.getElementById("ob-tarih");
        var t = tar ? (tar.textContent || "").trim().slice(0, 40) : "";
        ekle("madde", t ? m + " · " + t : m);
      }).observe(bas, { childList: true, characterData: true, subtree: true });
    }
    // Oynat düğmesi
    document.addEventListener("click", function (ev) {
      var t = ev.target && ev.target.closest ? ev.target.closest("#btn-oynat") : null;
      if (t) ekle("oynat");
      else if (ev.target && ev.target.closest && ev.target.closest("#ucus-panel, #btn-ucus-ayar, #btn-ucus-genel, .ucus-secenek")) {
        setTimeout(ucusKontrol, 800);
      }
    }, true);

    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        kalmaYaz(); ucusKontrol(); gonder(true);
      } else { gorunurBas = Date.now(); }
    });
    window.addEventListener("pagehide", function () { kalmaYaz(); gonder(true); });
    setInterval(function () { if (document.visibilityState === "visible") { kalmaYaz(); ucusKontrol(); gonder(false); } }, 60000);
    gonder(false);
  }

  // ─── Bildirim (Kabul / Reddet) ───────────────────────────────────────────
  function bildirimGoster() {
    var kap = document.createElement("div");
    kap.id = "ka-cerez";
    kap.setAttribute("role", "dialog");
    kap.setAttribute("aria-label", T("İstatistik bildirimi"));
    kap.style.cssText = "position:fixed;left:10px;right:10px;bottom:14px;margin:0 auto;z-index:2147483000;" +
      "max-width:560px;box-sizing:border-box;background:#1c1f26;color:#eef0f4;border:1px solid #3a4150;" +
      "border-radius:10px;padding:12px 14px;font:13px/1.45 system-ui,Segoe UI,Roboto,sans-serif;" +
      "box-shadow:0 6px 24px rgba(0,0,0,.45)";
    var p = document.createElement("div");
    // İki ayrı çeviri anahtarı (js/ceviri.js cümle cümle eşler; rakam "#" şablonudur)
    p.textContent = T("Siteyi geliştirmek için ziyaretleri sayarız: hangi madde, hangi dil, ne kadar kalındı.") + " " +
      T("Ad, IP adresi, e-posta ya da telefon saklanmaz; yalnızca rastgele bir numara kullanılır. Kayıtlar 12 ay tutulur.");
    var a = document.createElement("a");
    a.href = "gizlilik/#istatistik"; a.textContent = " " + T("Ayrıntı");
    a.style.cssText = "color:#8ab4ff";
    p.appendChild(a);
    var sat = document.createElement("div");
    sat.style.cssText = "display:flex;gap:8px;justify-content:flex-end;margin-top:10px";
    function dugme(ad, ana2, fn) {
      var b = document.createElement("button");
      b.type = "button"; b.textContent = T(ad);
      b.style.cssText = "padding:6px 16px;border-radius:7px;font:inherit;cursor:pointer;border:1px solid #4b5568;" +
        (ana2 ? "background:#3b82f6;color:#fff;border-color:#3b82f6" : "background:transparent;color:#eef0f4");
      b.addEventListener("click", fn);
      return b;
    }
    sat.appendChild(dugme("Reddet", false, function () {
      // Rıza geri alma: bu numaraya ait sunucu kayıtları da silinir (varsa), sonra numara bırakılır.
      var k = LS.get("ka_kisi");
      if (k) { try { rpc("ziyaret_sil", { p_kisi: k }, true).catch(function () {}); } catch (e) {} }
      LS.set("ka_cerez", "hayir"); LS.del("ka_kisi"); kisiNo = null; kap.remove();
    }));
    sat.appendChild(dugme("Kabul", true, function () { LS.set("ka_cerez", "evet"); kap.remove(); baslat(); }));
    kap.appendChild(p); kap.appendChild(sat);
    document.body.appendChild(kap);
  }

  function ilk() {
    if (izin === "evet") baslat(); else bildirimGoster();
  }
  function bosta() {
    if (window.requestIdleCallback) window.requestIdleCallback(ilk, { timeout: 4000 });
    else setTimeout(ilk, 1500);
  }
  if (document.readyState === "complete") bosta();
  else window.addEventListener("load", bosta);

  window.KA_ZIYARET = {
    // konsoldan ya da gizlilik sayfasından: sunucudaki kayıtları sil
    sil: function () { return rpc("ziyaret_sil", { p_kisi: LS.get("ka_kisi") || null }); },
    tercih: function () { return LS.get("ka_cerez"); }
  };
})();

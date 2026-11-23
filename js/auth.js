/* ═══ ÜYELİK — giriş / üye ol (GIRIS-1124) ═════════════════════════════════════════
   Tasarım ve güvenlik kararları: denetim/GIRIS-TASARIM-1124.md · kurulum: denetim/GIRIS-KURULUM-1124.md
   · Kimlik hizmeti Supabase Auth (forum ile AYNI proje ve AYNI oturum). Şifre/OAuth/PKCE/token
     yenileme protokolünü BEN yazmam; barındırılan hizmetin hazır işlevleri kullanılır.
   · Açılışta bu dosya küçüktür; kimlik kütüphanesi (supabase-js, SRI'li, tam sürüm) YALNIZ
     düğmeye basılınca, adreste e-posta/OAuth dönüşü varsa ya da kayıtlı oturum varsa indirilir.
   · Kullanıcıdan gelen hiçbir değer innerHTML'e yazılmaz (yalnız textContent / setAttribute).
   · Metinler Türkçe SABİT dizgilerdir; js/ceviri.js DOM'dan sözlükle çevirir (21 dil).
   · "Yapılandırılmadı" (data/auth_ayar.js boş) → düğme açılır, bilgi verir, hata fırlatmaz.  */
(function () {
  "use strict";
  var AYAR = window.AUTH_AYAR || {};
  var YAPILANDI = !!(AYAR.url && AYAR.anonAnahtar);
  var KUTUPHANE = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js";
  var KUTUPHANE_SRI = "sha384-0w2KAL2YHP6wKOkUDzkCDGgVvfmHnj02DHeQ6XcHOgTfFsGyonKOpShMH1x6nk9o";
  var TURNSTILE = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
  var TEL = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);

  var sb = null, oturum = null, profil = null;
  var kutuphaneSoz = null, captchaKimlik = null, captchaJeton = null;
  var kok = null, govde = null, sonOdak = null, gorunum = "giris", sekme = "giris";
  var dugmeler = [];

  // ─── küçük DOM yardımcıları (innerHTML YOK) ───────────────────────────────────────
  function e(etiket, nitelik) {
    var n = document.createElement(etiket);
    for (var k in (nitelik || {})) {
      var v = nitelik[k];
      if (v == null || v === false) continue;
      if (k === "sinif") n.className = v;
      else if (k === "metin") n.textContent = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c == null || c === false) continue;
      n.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return n;
  }
  function bosalt(n) { while (n.firstChild) n.removeChild(n.firstChild); }
  var kimlikSayac = 0;
  function yeniId() { return "auth-a" + (++kimlikSayac); }
  function alan(etiket, girdi, ipucu) {
    var id = girdi.id || (girdi.id = yeniId());
    var s = e("div", { sinif: "auth-alan" }, e("label", { "for": id, metin: etiket }), girdi);
    if (ipucu) { var ip = e("p", { sinif: "auth-ipucu", id: id + "-ip", metin: ipucu }); girdi.setAttribute("aria-describedby", id + "-ip"); s.appendChild(ip); }
    return s;
  }
  function durumKutusu() { return e("p", { sinif: "auth-durum", role: "status", "aria-live": "polite" }); }
  function yaz(kutu, metin, hata) {
    kutu.textContent = metin || "";
    kutu.className = "auth-durum" + (hata ? " auth-hata" : "");
    if (hata) kutu.setAttribute("role", "alert"); else kutu.setAttribute("role", "status");
  }
  function dugme(metin, tur, tikla, sinif) {
    return e("button", { type: tur || "button", sinif: "auth-dugme " + (sinif || ""), metin: metin, onclick: tikla });
  }
  function baglanti(metin, tikla) { return e("button", { type: "button", sinif: "auth-baglanti", metin: metin, onclick: tikla }); }
  function sayfaBaglantisi(metin, adres) { return e("a", { href: adres, target: "_blank", rel: "noopener", metin: metin }); }

  // ─── yönlendirme (açık yönlendirme / open redirect koruması) ───────────────────────
  function geriAdres() {
    var izinli = AYAR.izinliKokenler || [];
    var o = location.origin;
    var yerel = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(o);
    if (!yerel && izinli.indexOf(o) < 0) o = izinli[0] || o;   // allowlist dışı köken → kanonik adres
    return o + "/";
  }

  // ─── tembel yükleme ──────────────────────────────────────────────────────────────
  function betikYukle(adres, sri) {
    return new Promise(function (coz, red) {
      var s = document.createElement("script");
      s.src = adres; s.async = true;
      if (sri) { s.integrity = sri; s.crossOrigin = "anonymous"; }
      s.onload = function () { coz(); };
      s.onerror = function () { red(new Error("yuklenemedi")); };
      document.head.appendChild(s);
    });
  }
  function kutuphane() {
    if (sb) return Promise.resolve(sb);
    if (!YAPILANDI) return Promise.reject(new Error("yapilandirilmadi"));
    if (!kutuphaneSoz) {
      var hazir = (window.supabase && window.supabase.createClient) ? Promise.resolve() : betikYukle(KUTUPHANE, KUTUPHANE_SRI);
      kutuphaneSoz = hazir.then(function () {
        sb = window.supabase.createClient(AYAR.url, AYAR.anonAnahtar, {
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" }
        });
        sb.auth.onAuthStateChange(function (olay, s) {
          // geri çağrının içinde await YOK (kimlik kütüphanesi kilitlenmesin) → sonraya bırak
          setTimeout(function () { oturumDegisti(olay, s); }, 0);
        });
        return sb.auth.getSession().then(function (r) { oturum = r.data && r.data.session; return profilYukle(); }).then(function () {
          adresTemizle(); dugmeleriBoya(); return sb;
        });
      }).catch(function (h) { kutuphaneSoz = null; throw h; });
    }
    return kutuphaneSoz;
  }
  function profilYukle() {
    if (!sb || !oturum) { profil = null; return Promise.resolve(); }
    return sb.from("profiller").select("kullanici_adi,gorunen_ad").eq("id", oturum.user.id).maybeSingle()
      .then(function (r) { profil = r && r.data || null; }, function () { profil = null; });
  }
  function oturumDegisti(olay, s) {
    var eskiId = oturum && oturum.user && oturum.user.id;
    oturum = s;
    if (olay === "PASSWORD_RECOVERY") { gorunumAc("yeniSifre"); return; }
    var yeniId2 = s && s.user && s.user.id;
    if (yeniId2 !== eskiId) {
      profilYukle().then(function () {
        dugmeleriBoya();
        if (kok && !kok.hidden && yeniId2 && (gorunum === "giris" || gorunum === "kayit" || gorunum === "sihirli" || gorunum === "kod")) gorunumAc("hesabim");
        if (kok && !kok.hidden && !yeniId2 && gorunum === "hesabim") gorunumAc("giris");
      });
    } else dugmeleriBoya();
  }
  function adresTemizle() {   // e-posta/OAuth dönüşünden sonra adreste kod/hata kalmasın
    try {
      var u = new URL(location.href), degisti = false;
      ["code", "error", "error_code", "error_description"].forEach(function (k) { if (u.searchParams.has(k)) { u.searchParams.delete(k); degisti = true; } });
      if (/access_token|refresh_token|error/.test(u.hash)) { u.hash = ""; degisti = true; }
      if (degisti) history.replaceState(null, "", u.pathname + (u.search || "") + u.hash);
    } catch (x) { /* eski tarayıcı */ }
  }
  function adresteDonusVar() {
    return /[?&](code|error_description)=/.test(location.search) || /access_token|error_description/.test(location.hash || "");
  }
  function kayitliOturumVar() {
    try {
      for (var i = 0; i < localStorage.length; i++) { if (/^sb-.+-auth-token$/.test(localStorage.key(i))) return true; }
    } catch (x) { /* özel pencere */ }
    return false;
  }

  // ─── CAPTCHA (Turnstile) ─────────────────────────────────────────────────────────
  function captchaKur(yer) {
    captchaJeton = null;
    if (!AYAR.turnstileSiteKey) return;
    var kutu = e("div", { sinif: "auth-captcha", "data-ceviri-yok": "" });
    yer.appendChild(kutu);
    betikYukle(TURNSTILE).then(function () {
      if (!window.turnstile || !kutu.isConnected) return;
      captchaKimlik = window.turnstile.render(kutu, {
        sitekey: AYAR.turnstileSiteKey, theme: "light",
        callback: function (j) { captchaJeton = j; },
        "expired-callback": function () { captchaJeton = null; },
        "error-callback": function () { captchaJeton = null; }
      });
    }, function () { /* kutu yüklenmezse gönderimde uyarı çıkar */ });
  }
  function captchaIste(durum) {
    if (!AYAR.turnstileSiteKey) return true;
    if (captchaJeton) return true;
    yaz(durum, "Lütfen robot olmadığınızı doğrulayın.", true);
    return false;
  }
  function captchaSecenek() { return AYAR.turnstileSiteKey && captchaJeton ? { captchaToken: captchaJeton } : {}; }
  function captchaSifirla() {
    captchaJeton = null;
    try { if (window.turnstile && captchaKimlik != null) window.turnstile.reset(captchaKimlik); } catch (x) { /* geç */ }
  }

  // ─── şifre gücü ─────────────────────────────────────────────────────────────────
  var YAYGIN = ["password", "parola", "sifre", "şifre", "12345678", "123456789", "1234567890", "qwertyuiop", "qwerty123", "iloveyou", "admin123", "welcome1", "kronoatlas", "osmanli", "istanbul", "galatasaray", "fenerbahce", "besiktas", "trabzonspor"];
  function sifreSorunlari(s, kisitlar) {
    var s2 = [];
    if (s.length < 10) s2.push("En az 10 karakter olmalı.");
    var sinif = (/[a-zçğıöşü]/.test(s) ? 1 : 0) + (/[A-ZÇĞİÖŞÜ]/.test(s) ? 1 : 0) + (/\d/.test(s) ? 1 : 0) + (/[^A-Za-z0-9çğıöşüÇĞİÖŞÜ]/.test(s) ? 1 : 0);
    if (s.length < 14 && sinif < 3) s2.push("Büyük harf, küçük harf, rakam ve simgeden en az üçünü kullanın (ya da 14+ karakter yazın).");
    var kucuk = s.toLowerCase();
    if (s.length < 16 && YAYGIN.some(function (y) { return kucuk.indexOf(y) >= 0; })) s2.push("Çok yaygın bir şifre ya da sözcük içeriyor.");
    if (/^(.)\1+$/.test(s) || /(0123|1234|2345|3456|4567|5678|6789|abcd|qwer)/i.test(s)) s2.push("Ardışık ya da tekrarlayan karakterler kullanmayın.");
    (kisitlar || []).forEach(function (k) { k = (k || "").toLowerCase(); if (k.length >= 4 && kucuk.indexOf(k) >= 0) s2.push("Şifre kullanıcı adınızı ya da e-postanızı içermemeli."); });
    return s2.filter(function (m, i) { return s2.indexOf(m) === i; });
  }
  // Sızmış-şifre kontrolü: HIBP k-anonimlik — şifrenin SHA-1'inin yalnız ilk 5 karakteri gönderilir.
  function sizmisMi(s) {
    if (!(window.crypto && crypto.subtle && window.fetch)) return Promise.resolve(false);
    var veri = new TextEncoder().encode(s);
    return crypto.subtle.digest("SHA-1", veri).then(function (b) {
      var hex = Array.prototype.map.call(new Uint8Array(b), function (x) { return ("0" + x.toString(16)).slice(-2); }).join("").toUpperCase();
      var on = hex.slice(0, 5), son = hex.slice(5);
      var iptal = window.AbortController ? new AbortController() : null;
      var zaman = setTimeout(function () { if (iptal) iptal.abort(); }, 4000);
      return fetch("https://api.pwnedpasswords.com/range/" + on, { headers: { "Add-Padding": "true" }, signal: iptal ? iptal.signal : undefined, referrerPolicy: "no-referrer" })
        .then(function (r) { clearTimeout(zaman); return r.ok ? r.text() : ""; })
        .then(function (t) {
          return t.split("\n").some(function (satir) {
            var p = satir.trim().split(":");
            return p[0] === son && parseInt(p[1], 10) > 0;
          });
        });
    }).catch(function () { return false; });   // ağ yoksa engelleme (açık hata): kural denetimi yine geçerli
  }
  function sifreAlani(etiket, otomatik, kisitlaGetir) {
    var g = e("input", { type: "password", required: true, minlength: "10", autocomplete: otomatik || "new-password", "aria-required": "true" });
    var olcer = e("div", { sinif: "auth-olcer", "aria-hidden": "true" }, e("span"));
    var liste = e("ul", { sinif: "auth-kurallar", "aria-live": "polite" });
    var goz = e("button", { type: "button", sinif: "auth-goz", metin: "Göster", "aria-pressed": "false", onclick: function () {
      var ac = g.type === "password"; g.type = ac ? "text" : "password";
      goz.textContent = ac ? "Gizle" : "Göster"; goz.setAttribute("aria-pressed", String(ac));
    } });
    function guncelle() {
      bosalt(liste);
      var s = g.value, sorun = s ? sifreSorunlari(s, kisitlaGetir ? kisitlaGetir() : []) : [];
      sorun.forEach(function (m) { liste.appendChild(e("li", { metin: m })); });
      var puan = !s ? 0 : sorun.length ? Math.min(2, 1 + (s.length > 7 ? 1 : 0)) : (s.length >= 14 ? 4 : 3);
      olcer.firstChild.style.width = (puan * 25) + "%";
      olcer.className = "auth-olcer p" + puan;
    }
    g.addEventListener("input", guncelle);
    var kap = e("div", { sinif: "auth-alan" }, e("label", { "for": (g.id = yeniId()), metin: etiket }), e("div", { sinif: "auth-sifre-sar" }, g, goz), olcer, liste);
    return { kap: kap, girdi: g };
  }

  // ─── hata metni ──────────────────────────────────────────────────────────────────
  function hataMetni(h) {
    var kod = (h && (h.code || h.error_code)) || "", m = (h && h.message) || "", d = h && h.status;
    if (kod === "invalid_credentials" || /Invalid login credentials/i.test(m)) return "E-posta/kullanıcı adı ya da şifre yanlış.";
    if (kod === "email_not_confirmed" || /not confirmed/i.test(m)) return "E-postanız henüz doğrulanmadı. Gelen kutunuzdaki doğrulama bağlantısına tıklayın.";
    if (kod === "weak_password" || /weak|pwned|leaked/i.test(m)) return "Bu şifre kabul edilmedi (zayıf ya da sızmış listelerde). Başka bir şifre deneyin.";
    if (kod === "user_already_exists" || /already registered/i.test(m)) return "Bu e-posta ile zaten bir hesap var. Giriş yapmayı ya da şifre sıfırlamayı deneyin.";
    if (kod === "over_request_rate_limit" || kod === "over_email_send_rate_limit" || d === 429 || /rate limit|too many/i.test(m)) return "Çok fazla deneme yapıldı. Biraz bekleyip yeniden deneyin.";
    if (kod === "otp_expired" || /expired|invalid.*token|token.*invalid/i.test(m)) return "Kod ya da bağlantı geçersiz veya süresi dolmuş. Yenisini isteyin.";
    if (kod === "captcha_failed" || /captcha/i.test(m)) return "Robot doğrulaması başarısız. Sayfayı yenileyip yeniden deneyin.";
    if (kod === "signup_disabled" || /signups not allowed/i.test(m)) return "Yeni üyelik şu an kapalı.";
    if (kod === "provider_disabled" || /provider.*not enabled|Unsupported provider/i.test(m)) return "Bu giriş yöntemi henüz etkinleştirilmedi.";
    if (/Failed to fetch|NetworkError|yuklenemedi/i.test(m)) return "Bağlantı kurulamadı. İnternetinizi kontrol edip yeniden deneyin.";
    return "Bir sorun oluştu. Biraz sonra yeniden deneyin.";
  }
  function genelHata(durum, h) { yaz(durum, hataMetni(h), true); }

  // ─── düğmeler (menü + masaüstü üst çubuk) ─────────────────────────────────────────
  function etiketMetni() { return oturum ? "@" + ((profil && profil.kullanici_adi) || ((oturum.user.email || "").split("@")[0]) || "hesap") : "Giriş / Üye ol"; }
  function dugmeleriBoya() {
    dugmeler.forEach(function (d) {
      var kisa = d.getAttribute("data-kisa") === "1";
      d.textContent = "";
      d.appendChild(document.createTextNode("👤 "));
      d.appendChild(e("span", { metin: oturum ? etiketMetni() : (kisa ? "Giriş" : "Giriş / Üye ol"), "data-ceviri-yok": oturum ? "" : null }));
      d.setAttribute("aria-label", oturum ? "Hesabım" : "Giriş yap ya da üye ol");
      d.title = oturum ? "Hesabım" : "Giriş yap ya da üye ol";
      d.classList.toggle("auth-giris-var", !!oturum);
    });
  }
  function dugmeKur() {
    var menu = document.getElementById("menu-butonlar");
    if (menu && !document.getElementById("btn-hesap")) {
      var grup = e("div", { sinif: "menu-grup", id: "mg-hesap" }, e("div", { sinif: "menu-grup-baslik", metin: "Hesap" }));
      var d = e("button", { type: "button", id: "btn-hesap", sinif: "auth-menu-dugme", "aria-haspopup": "dialog", onclick: function (ev) { ev.stopPropagation(); ac(); } });
      grup.appendChild(d); dugmeler.push(d);
      menu.insertBefore(grup, menu.firstChild);
    }
    if (!TEL && !document.getElementById("btn-hesap-ust")) {   // masaüstü: üst çubukta da görünür; telefonda yalnız ☰ menüsünde
      var yer = document.getElementById("dil-secici") || document.getElementById("btn-panel");
      var u = e("button", { type: "button", id: "btn-hesap-ust", sinif: "auth-ust-dugme", "data-kisa": "1", "aria-haspopup": "dialog", onclick: function () { ac(); } });
      if (yer && yer.parentNode) { yer.parentNode.insertBefore(u, yer.nextSibling); dugmeler.push(u); }
    }
    dugmeleriBoya();
  }

  // ─── pencere ────────────────────────────────────────────────────────────────────
  function pencereKur() {
    if (kok) return;
    govde = e("div", { sinif: "auth-kutu", role: "dialog", "aria-modal": "true", "aria-labelledby": "auth-baslik", tabindex: "-1" });
    kok = e("div", { sinif: "auth-perde", id: "auth-pencere", hidden: true }, govde);
    kok.addEventListener("mousedown", function (ev) { if (ev.target === kok) kapat(); });
    kok.addEventListener("keydown", function (ev) {
      if (ev.key === "Escape") { ev.stopPropagation(); kapat(); return; }
      if (ev.key !== "Tab") return;
      var odak = govde.querySelectorAll("a[href],button:not([disabled]),input:not([disabled]),select,textarea,[tabindex='0']");
      if (!odak.length) return;
      var ilk = odak[0], son = odak[odak.length - 1];
      if (ev.shiftKey && document.activeElement === ilk) { ev.preventDefault(); son.focus(); }
      else if (!ev.shiftKey && document.activeElement === son) { ev.preventDefault(); ilk.focus(); }
    });
    document.body.appendChild(kok);
  }
  function ac(ilk) {
    pencereKur();
    sonOdak = document.activeElement;
    var menu = document.getElementById("menu-butonlar"); if (menu && !menu.classList.contains("gizli")) menu.classList.add("gizli");
    kok.hidden = false; document.documentElement.classList.add("auth-acik");
    if (!YAPILANDI) { gorunumAc("yapilandirilmadi"); return; }
    gorunumAc(ilk || (oturum ? "hesabim" : "giris"));
    kutuphane().then(function () { if (!kok.hidden && oturum && (gorunum === "giris" || gorunum === "kayit")) gorunumAc("hesabim"); }, function (h) {
      if (!kok.hidden && !govde.querySelector(".auth-yukleme-hata")) govde.appendChild(e("p", { sinif: "auth-durum auth-hata auth-yukleme-hata", role: "alert", metin: hataMetni(h) }));
    });
  }
  function kapat() {
    if (!kok) return;
    kok.hidden = true; document.documentElement.classList.remove("auth-acik");
    captchaSifirla();
    if (sonOdak && sonOdak.focus) { try { sonOdak.focus(); } catch (x) { /* geç */ } }
  }
  function kabuk(baslik, sekmeli, icerik) {
    bosalt(govde);
    var ust = e("div", { sinif: "auth-ust" },
      e("h2", { id: "auth-baslik", metin: baslik }),
      e("button", { type: "button", sinif: "auth-kapat", "aria-label": "Kapat", title: "Kapat", metin: "×", onclick: kapat }));
    govde.appendChild(ust);
    if (sekmeli) {
      var liste = e("div", { sinif: "auth-sekmeler", role: "tablist" });
      [["giris", "Giriş"], ["kayit", "Üye ol"]].forEach(function (t) {
        var secili = sekme === t[0];
        liste.appendChild(e("button", { type: "button", role: "tab", sinif: "auth-sekme" + (secili ? " secili" : ""), "aria-selected": String(secili), tabindex: secili ? "0" : "-1", metin: t[1],
          onclick: function () { gorunumAc(t[0]); },
          onkeydown: function (ev) { if (ev.key === "ArrowRight" || ev.key === "ArrowLeft") { ev.preventDefault(); gorunumAc(t[0] === "giris" ? "kayit" : "giris"); var s = govde.querySelector("[role=tab][aria-selected=true]"); if (s) s.focus(); } } }));
      });
      govde.appendChild(liste);
    }
    var ic = e("div", { sinif: "auth-icerik", role: sekmeli ? "tabpanel" : null });
    icerik.forEach(function (c) { if (c) ic.appendChild(c); });
    govde.appendChild(ic);
    return ic;
  }
  function odakla(n) { setTimeout(function () { try { (n || govde).focus(); } catch (x) { /* geç */ } }, 0); }
  function gorunumAc(ad, veri) {
    pencereKur(); gorunum = ad; captchaJeton = null;
    if (ad === "giris" || ad === "kayit") sekme = ad;
    var f = { yapilandirilmadi: vYapilandirilmadi, giris: vGiris, kayit: vKayit, sihirli: vSihirli, kod: vKod, dogrula: vDogrula,
      unuttum: vUnuttum, yeniSifre: vYeniSifre, hesabim: vHesabim, silOnay: vSil }[ad] || vGiris;
    f(veri || {});
  }
  window.addEventListener("pageshow", function () { /* geri-ileri önbelleği: pencere kapalı başlar */ });

  // ─── ortak parçalar ─────────────────────────────────────────────────────────────
  function sosyalDugmeleri(durum, onayKutusu) {
    var SAG = [
      ["google", "Google ile devam et", "G", "g"],
      ["azure", "Microsoft ile devam et (Windows, Outlook, Hotmail)", "M", "m"],
      ["facebook", "Facebook ile devam et", "f", "f"],
      ["apple", "Apple ile devam et", "", "a"],
      ["github", "GitHub ile devam et", "", "h"]
    ];
    var s = AYAR.saglayicilar || {}, kap = e("div", { sinif: "auth-sosyal" }), say = 0;
    SAG.forEach(function (p) {
      if (!s[p[0]]) return;
      say++;
      kap.appendChild(e("button", { type: "button", sinif: "auth-sosyal-dugme s-" + p[3], onclick: function () {
        if (onayKutusu && !onayKutusu.checked) { yaz(durum, "Önce aydınlatma metnini okuduğunuzu onaylayın.", true); onayKutusu.focus(); return; }
        yaz(durum, "Yönlendiriliyor…");
        kutuphane().then(function (c) {
          var secenek = { redirectTo: geriAdres() };
          if (p[0] === "azure") secenek.scopes = "email";
          return c.auth.signInWithOAuth({ provider: p[0], options: secenek });
        }).then(function (r) { if (r && r.error) genelHata(durum, r.error); }, function (h) { genelHata(durum, h); });
      } }, e("span", { sinif: "auth-logo", "aria-hidden": "true", metin: p[2] }), e("span", { metin: p[1] })));
    });
    if (!say) return null;
    return kap;
  }
  function rizaKutusu(zorunlu) {
    var k = e("input", { type: "checkbox", id: yeniId(), required: !!zorunlu, "aria-required": zorunlu ? "true" : null });
    var satir = e("div", { sinif: "auth-riza" }, k, e("label", { "for": k.id },
      e("span", { metin: "16 yaşından büyük olduğumu beyan eder, " }),
      sayfaBaglantisi("aydınlatma metnini ve gizlilik politikasını", "gizlilik/"),
      e("span", { metin: " okuduğumu ve kişisel verilerimin bunlara uygun işlenmesini kabul ettiğimi onaylarım." })));
    return { kap: satir, girdi: k };
  }
  function gizlilikNotu() {
    return e("p", { sinif: "auth-not" }, e("span", { metin: "Devam ederek " }), sayfaBaglantisi("aydınlatma metnini ve gizlilik politikasını", "gizlilik/"), e("span", { metin: " kabul etmiş olursunuz." }));
  }
  function eposta() { return e("input", { type: "email", required: true, autocomplete: "email", inputmode: "email", maxlength: "254", autocapitalize: "none", spellcheck: "false", "aria-required": "true" }); }
  function bekleme(d, sn) {   // yeniden gönder düğmesi bekleme sayacı
    d.disabled = true; var asil = d.getAttribute("data-asil") || d.textContent; d.setAttribute("data-asil", asil);
    var kalan = sn;
    (function tik() {
      if (!d.isConnected) return;
      if (kalan <= 0) { d.disabled = false; d.textContent = asil; return; }
      d.textContent = asil + " (" + kalan + ")"; kalan--; setTimeout(tik, 1000);
    })();
  }

  // ─── görünümler ─────────────────────────────────────────────────────────────────
  function vYapilandirilmadi() {
    kabuk("Giriş", false, [
      e("p", { metin: "Giriş henüz yapılandırılmadı." }),
      e("p", { sinif: "auth-ipucu", metin: "Üyelik hizmeti kurulduğunda bu pencereden e-posta, Google, Microsoft ya da Facebook ile giriş yapabileceksiniz. Harita ve kronoloji üye olmadan kullanılabilir." }),
      dugme("Tamam", "button", kapat, "birincil")
    ]);
    odakla(govde.querySelector(".auth-dugme"));
  }

  function vGiris() {
    var durum = durumKutusu();
    var kim = e("input", { type: "text", required: true, autocomplete: "username", maxlength: "254", autocapitalize: "none", spellcheck: "false", "aria-required": "true" });
    var sifre = e("input", { type: "password", required: true, autocomplete: "current-password", "aria-required": "true" });
    var gonder = dugme("Giriş yap", "submit", null, "birincil");
    var kimEtiket = AYAR.kullaniciAdiGirisi ? "E-posta ya da kullanıcı adı" : "E-posta";
    if (!AYAR.kullaniciAdiGirisi) { kim.type = "email"; kim.setAttribute("inputmode", "email"); }
    var form = e("form", { novalidate: false, onsubmit: function (ev) {
      ev.preventDefault();
      var k = kim.value.trim();
      if (!k || !sifre.value) { yaz(durum, "E-posta/kullanıcı adı ve şifre gerekli.", true); return; }
      if (!captchaIste(durum)) return;
      gonder.disabled = true; yaz(durum, "Giriş yapılıyor…");
      kutuphane().then(function (c) {
        if (k.indexOf("@") < 0) {   // kullanıcı adı → e-postayı sunucu çözer (listeyi sızdırmaz; Edge Function)
          return c.functions.invoke("kullanici-girisi", { body: { kimlik: k, sifre: sifre.value, captcha: captchaJeton || null } }).then(function (r) {
            if (r.error || !r.data || !r.data.oturum) {
              var d = r.data && r.data.hata;
              var yan = r.error && r.error.context && r.error.context.status;
              if (d === "dogrulanmamis") return { error: { code: "email_not_confirmed" } };
              if (yan === 429 || d === "cok_deneme") return { error: { code: "over_request_rate_limit" } };
              return { error: { code: "invalid_credentials" } };
            }
            return c.auth.setSession({ access_token: r.data.oturum.access_token, refresh_token: r.data.oturum.refresh_token });
          });
        }
        return c.auth.signInWithPassword({ email: k, password: sifre.value, options: captchaSecenek() });
      }).then(function (r) {
        gonder.disabled = false; sifre.value = ""; captchaSifirla();
        if (r && r.error) {
          if ((r.error.code === "email_not_confirmed" || /not confirmed/i.test(r.error.message || "")) && k.indexOf("@") > 0) { gorunumAc("dogrula", { eposta: k, yeniden: true }); return; }
          genelHata(durum, r.error); return;
        }
        yaz(durum, "Giriş yapıldı.");
      }, function (h) { gonder.disabled = false; captchaSifirla(); genelHata(durum, h); });
    } },
      alan(kimEtiket, kim), alan("Şifre", sifre),
      e("div", { sinif: "auth-satir" }, baglanti("Şifremi unuttum", function () { gorunumAc("unuttum", { eposta: kim.value.indexOf("@") > 0 ? kim.value.trim() : "" }); })),
      e("div", { sinif: "auth-captcha-yer" }), gonder, durum);
    var sosyal = sosyalDugmeleri(durum, null);
    var ic = kabuk("Giriş", true, [sosyal, sosyal ? e("p", { sinif: "auth-ayrac", metin: "ya da" }) : null, form,
      e("p", { sinif: "auth-ayrac", metin: "ya da" }),
      dugme("Şifresiz giriş: e-postama bağlantı / kod gönder", "button", function () { gorunumAc("sihirli"); }, "ikincil"),
      gizlilikNotu()]);
    captchaKur(form.querySelector(".auth-captcha-yer"));
    odakla(kim);
  }

  function vKayit() {
    var durum = durumKutusu();
    var kadi = e("input", { type: "text", required: true, pattern: "[A-Za-z0-9_.]{3,30}", maxlength: "30", autocomplete: "username", autocapitalize: "none", spellcheck: "false", "aria-required": "true" });
    var ep = eposta();
    var sf = sifreAlani("Şifre", "new-password", function () { return [kadi.value, (ep.value.split("@")[0] || "")]; });
    var riza = rizaKutusu(true);
    var gonder = dugme("Üye ol", "submit", null, "birincil");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault();
      var ad = kadi.value.trim(), posta = ep.value.trim();
      if (!/^[A-Za-z0-9_.]{3,30}$/.test(ad)) { yaz(durum, "Kullanıcı adı 3–30 karakter olmalı: harf, rakam, alt çizgi ve nokta.", true); kadi.focus(); return; }
      var sorun = sifreSorunlari(sf.girdi.value, [ad, posta.split("@")[0]]);
      if (sorun.length) { yaz(durum, sorun[0], true); sf.girdi.focus(); return; }
      if (!riza.girdi.checked) { yaz(durum, "Devam etmek için aydınlatma metnini onaylamalısınız.", true); riza.girdi.focus(); return; }
      if (!captchaIste(durum)) return;
      gonder.disabled = true; yaz(durum, "Kontrol ediliyor…");
      var c0;
      kutuphane().then(function (c) {
        c0 = c;
        return c.rpc("kullanici_adi_musait", { ad: ad }).then(function (r) { return r.error ? true : r.data !== false; }, function () { return true; });
      }).then(function (musait) {
        if (!musait) { gonder.disabled = false; yaz(durum, "Bu kullanıcı adı alınmış; başka bir ad deneyin.", true); kadi.focus(); return null; }
        return sizmisMi(sf.girdi.value).then(function (sizdi) {
          if (sizdi) { gonder.disabled = false; yaz(durum, "Bu şifre bilinen veri sızıntılarında geçiyor. Başka bir şifre seçin.", true); sf.girdi.focus(); return null; }
          yaz(durum, "Kaydediliyor…");
          return c0.auth.signUp({ email: posta, password: sf.girdi.value, options: Object.assign({
            emailRedirectTo: geriAdres(),
            data: { kullanici_adi: ad, kvkk_riza: true, kvkk_surum: AYAR.rizaSurumu || "" } }, captchaSecenek()) });
        });
      }).then(function (r) {
        if (r === null || r === undefined) return;
        gonder.disabled = false; captchaSifirla(); sf.girdi.value = "";
        if (r.error) { genelHata(durum, r.error); return; }
        // Hesap var/yok bilgisi sızmasın: her durumda aynı "doğrulama gönderdik" ekranı.
        gorunumAc("dogrula", { eposta: posta });
      }, function (h) { gonder.disabled = false; captchaSifirla(); genelHata(durum, h); });
    } },
      alan("Kullanıcı adı", kadi, "3–30 karakter: harf, rakam, alt çizgi ve nokta. Herkese açık görünür."),
      alan("E-posta", ep), sf.kap, riza.kap, e("div", { sinif: "auth-captcha-yer" }), gonder, durum);
    var sos = sosyalDugmeleri(durum, riza.girdi);
    kabuk("Üye ol", true, [form, sos ? e("p", { sinif: "auth-ayrac", metin: "ya da" }) : null, sos]);
    captchaKur(form.querySelector(".auth-captcha-yer"));
    odakla(kadi);
  }

  function vSihirli(v) {
    var durum = durumKutusu(), ep = eposta(); if (v.eposta) ep.value = v.eposta;
    var riza = rizaKutusu(true), gonder = dugme("Bağlantı ve kod gönder", "submit", null, "birincil");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault();
      if (!riza.girdi.checked) { yaz(durum, "Devam etmek için aydınlatma metnini onaylamalısınız.", true); riza.girdi.focus(); return; }
      if (!captchaIste(durum)) return;
      var posta = ep.value.trim();
      gonder.disabled = true; yaz(durum, "Gönderiliyor…");
      kutuphane().then(function (c) {
        return c.auth.signInWithOtp({ email: posta, options: Object.assign({ emailRedirectTo: geriAdres(), shouldCreateUser: true,
          data: { kvkk_riza: true, kvkk_surum: AYAR.rizaSurumu || "" } }, captchaSecenek()) });
      }).then(function (r) {
        gonder.disabled = false; captchaSifirla();
        if (r.error) { genelHata(durum, r.error); return; }
        gorunumAc("kod", { eposta: posta });
      }, function (h) { gonder.disabled = false; captchaSifirla(); genelHata(durum, h); });
    } },
      e("p", { metin: "E-posta adresinize tek kullanımlık bir giriş bağlantısı ve kod göndeririz. Şifre gerekmez." }),
      alan("E-posta", ep), riza.kap, e("div", { sinif: "auth-captcha-yer" }), gonder, durum);
    kabuk("Şifresiz giriş", false, [form, baglanti("← Şifreyle girişe dön", function () { gorunumAc("giris"); })]);
    captchaKur(form.querySelector(".auth-captcha-yer"));
    odakla(ep);
  }

  function vKod(v) {
    var durum = durumKutusu(), kod = e("input", { type: "text", required: true, inputmode: "numeric", autocomplete: "one-time-code", pattern: "[0-9]{6,8}", maxlength: "8", "aria-required": "true" });
    var gonder = dugme("Kodu doğrula", "submit", null, "birincil");
    var yeniden = dugme("Yeniden gönder", "button", function () {
      yeniden.disabled = true;
      kutuphane().then(function (c) { return c.auth.signInWithOtp({ email: v.eposta, options: Object.assign({ emailRedirectTo: geriAdres() }, captchaSecenek()) }); })
        .then(function (r) { if (r.error) { yeniden.disabled = false; genelHata(durum, r.error); } else { yaz(durum, "Yeni kod gönderildi."); bekleme(yeniden, 60); } }, function (h) { yeniden.disabled = false; genelHata(durum, h); });
    }, "ikincil");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault(); gonder.disabled = true; yaz(durum, "Doğrulanıyor…");
      kutuphane().then(function (c) { return c.auth.verifyOtp({ email: v.eposta, token: kod.value.trim(), type: "email" }); })
        .then(function (r) { gonder.disabled = false; if (r.error) genelHata(durum, r.error); else yaz(durum, "Giriş yapıldı."); }, function (h) { gonder.disabled = false; genelHata(durum, h); });
    } },
      e("p", { sinif: "auth-baslik-p" }, e("span", { metin: "Kod ve bağlantı şu adrese gönderildi: " }), e("strong", { metin: v.eposta, "data-ceviri-yok": "" })),
      e("p", { sinif: "auth-ipucu", metin: "E-postadaki bağlantıya tıklayabilir ya da kodu aşağıya yazabilirsiniz. Gelmediyse gereksiz (spam) klasörüne bakın." }),
      alan("Giriş kodu", kod), gonder, yeniden, durum);
    kabuk("E-postanızı kontrol edin", false, [form, baglanti("← Geri", function () { gorunumAc("sihirli", { eposta: v.eposta }); })]);
    bekleme(yeniden, 60); odakla(kod);
  }

  function vDogrula(v) {
    var durum = durumKutusu();
    var yeniden = dugme("Doğrulama e-postasını yeniden gönder", "button", function () {
      yeniden.disabled = true;
      kutuphane().then(function (c) { return c.auth.resend({ type: "signup", email: v.eposta, options: Object.assign({ emailRedirectTo: geriAdres() }, captchaSecenek()) }); })
        .then(function (r) { if (r.error) { yeniden.disabled = false; genelHata(durum, r.error); } else { yaz(durum, "Doğrulama e-postası yeniden gönderildi."); bekleme(yeniden, 60); } }, function (h) { yeniden.disabled = false; genelHata(durum, h); });
    }, "ikincil");
    kabuk(v.yeniden ? "E-postanız doğrulanmadı" : "Neredeyse tamam", false, [
      e("p", null, e("strong", { metin: v.eposta, "data-ceviri-yok": "" }), e("span", { metin: " adresine bir doğrulama bağlantısı gönderdik. Bağlantıya tıklayınca hesabınız açılır ve giriş yapabilirsiniz." })),
      e("p", { sinif: "auth-ipucu", metin: "E-posta birkaç dakikada gelmezse gereksiz (spam) klasörüne bakın. Doğrulamadan giriş yapılamaz." }),
      yeniden, durum, baglanti("← Girişe dön", function () { gorunumAc("giris"); })
    ]);
    if (!AYAR.turnstileSiteKey) bekleme(yeniden, 30);
    odakla(govde.querySelector(".auth-dugme"));
  }

  function vUnuttum(v) {
    var durum = durumKutusu(), ep = eposta(); if (v.eposta) ep.value = v.eposta;
    var gonder = dugme("Sıfırlama bağlantısı gönder", "submit", null, "birincil");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault(); if (!captchaIste(durum)) return;
      gonder.disabled = true; yaz(durum, "Gönderiliyor…");
      kutuphane().then(function (c) { return c.auth.resetPasswordForEmail(ep.value.trim(), Object.assign({ redirectTo: geriAdres() }, captchaSecenek())); })
        .then(function (r) {
          captchaSifirla();
          if (r.error && !/rate|too many/i.test(r.error.message || "")) { gonder.disabled = false; genelHata(durum, r.error); return; }
          if (r.error) { gonder.disabled = false; genelHata(durum, r.error); return; }
          yaz(durum, "Bu adreste bir hesap varsa sıfırlama bağlantısı gönderildi. Gelen kutunuzu kontrol edin."); bekleme(gonder, 60);
        }, function (h) { gonder.disabled = false; genelHata(durum, h); });
    } }, e("p", { metin: "Hesabınızın e-posta adresini yazın; şifre sıfırlama bağlantısı gönderelim." }), alan("E-posta", ep), e("div", { sinif: "auth-captcha-yer" }), gonder, durum);
    kabuk("Şifremi unuttum", false, [form, baglanti("← Girişe dön", function () { gorunumAc("giris"); })]);
    captchaKur(form.querySelector(".auth-captcha-yer"));
    odakla(ep);
  }

  function vYeniSifre() {
    pencereAcikOlsun();
    var durum = durumKutusu();
    var sf = sifreAlani("Yeni şifre", "new-password", function () { return [profil && profil.kullanici_adi, oturum && oturum.user && (oturum.user.email || "").split("@")[0]]; });
    var gonder = dugme("Şifreyi değiştir", "submit", null, "birincil");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault();
      var sorun = sifreSorunlari(sf.girdi.value, []);
      if (sorun.length) { yaz(durum, sorun[0], true); return; }
      gonder.disabled = true; yaz(durum, "Kontrol ediliyor…");
      sizmisMi(sf.girdi.value).then(function (sizdi) {
        if (sizdi) { gonder.disabled = false; yaz(durum, "Bu şifre bilinen veri sızıntılarında geçiyor. Başka bir şifre seçin.", true); return null; }
        return kutuphane().then(function (c) { return c.auth.updateUser({ password: sf.girdi.value }); });
      }).then(function (r) {
        if (r === null || r === undefined) return;
        gonder.disabled = false; sf.girdi.value = "";
        if (r.error) { genelHata(durum, r.error); return; }
        yaz(durum, "Şifreniz değiştirildi."); setTimeout(function () { gorunumAc("hesabim"); }, 900);
      }, function (h) { gonder.disabled = false; genelHata(durum, h); });
    } }, e("p", { metin: "Yeni şifrenizi belirleyin." }), sf.kap, gonder, durum);
    kabuk("Yeni şifre", false, [form]); odakla(sf.girdi);
  }
  function pencereAcikOlsun() { pencereKur(); kok.hidden = false; document.documentElement.classList.add("auth-acik"); }

  function vHesabim() {
    var durum = durumKutusu();
    if (!oturum) { gorunumAc("giris"); return; }
    var kadi = (profil && profil.kullanici_adi) || "", posta = oturum.user.email || "";
    var cikis = dugme("Çıkış yap", "button", function () {
      cikis.disabled = true;
      kutuphane().then(function (c) { return c.auth.signOut(); }).then(function () { oturum = null; profil = null; dugmeleriBoya(); gorunumAc("giris"); }, function (h) { cikis.disabled = false; genelHata(durum, h); });
    }, "birincil");
    var indir = dugme("Verilerimi indir (JSON)", "button", function () {
      indir.disabled = true; yaz(durum, "Hazırlanıyor…");
      kutuphane().then(function (c) { return c.rpc("verilerimi_indir"); }).then(function (r) {
        indir.disabled = false;
        if (r.error) { genelHata(durum, r.error); return; }
        var paket = { disa_aktarma: new Date().toISOString(), hesap: { eposta: posta, kimlik: oturum.user.id }, veri: r.data };
        var a = e("a", { href: URL.createObjectURL(new Blob([JSON.stringify(paket, null, 2)], { type: "application/json" })), download: "kronoatlas-verilerim.json" });
        document.body.appendChild(a); a.click(); a.remove(); yaz(durum, "Verileriniz indirildi.");
      }, function (h) { indir.disabled = false; genelHata(durum, h); });
    }, "ikincil");
    var sil = dugme("Hesabımı ve verilerimi sil", "button", function () { gorunumAc("silOnay"); }, "tehlike");
    kabuk("Hesabım", false, [
      e("dl", { sinif: "auth-kunye" },
        e("dt", { metin: "Kullanıcı adı" }), e("dd", { metin: kadi ? "@" + kadi : "—", "data-ceviri-yok": "" }),
        e("dt", { metin: "E-posta" }), e("dd", { metin: posta, "data-ceviri-yok": "" })),
      e("div", { sinif: "auth-eylemler" }, cikis, indir),
      e("p", { sinif: "auth-not" }, sayfaBaglantisi("Aydınlatma metni ve gizlilik politikası", "gizlilik/"), e("span", { metin: " · " }), e("a", { href: "forum/", metin: "Forum" })),
      e("div", { sinif: "auth-tehlike-bolge" }, sil), durum
    ]);
    odakla(cikis);
  }

  function vSil() {
    var durum = durumKutusu(), kadi = (profil && profil.kullanici_adi) || (oturum && oturum.user.email) || "";
    var onay = e("input", { type: "text", required: true, autocomplete: "off", autocapitalize: "none", spellcheck: "false" });
    var gonder = dugme("Kalıcı olarak sil", "submit", null, "tehlike");
    var form = e("form", { onsubmit: function (ev) {
      ev.preventDefault();
      if (onay.value.trim() !== kadi) { yaz(durum, "Yazdığınız ad eşleşmiyor.", true); return; }
      gonder.disabled = true; yaz(durum, "Siliniyor…");
      kutuphane().then(function (c) { return c.rpc("hesabi_sil").then(function (r) { if (r.error) throw r.error; return c.auth.signOut({ scope: "local" }); }); })
        .then(function () { oturum = null; profil = null; dugmeleriBoya(); kabuk("Hesabınız silindi", false, [e("p", { metin: "Hesabınız ve ona bağlı verileriniz kalıcı olarak silindi." }), dugme("Tamam", "button", kapat, "birincil")]); },
          function (h) { gonder.disabled = false; genelHata(durum, h); });
    } },
      e("p", { sinif: "auth-hata-metin", metin: "Bu işlem GERİ ALINAMAZ: hesabınız, profiliniz ve forumdaki konu/mesajlarınız silinir." }),
      alan("Onaylamak için kullanıcı adınızı (ya da e-postanızı) aynen yazın", onay), gonder, durum);
    kabuk("Hesabı sil", false, [form, baglanti("← Vazgeç", function () { gorunumAc("hesabim"); })]);
    odakla(onay);
  }

  // ─── başlangıç ──────────────────────────────────────────────────────────────────
  function basla() {
    dugmeKur();
    if (!YAPILANDI) return;
    // Oturum varsa ya da adreste e-posta/OAuth dönüşü varsa kimlik kütüphanesi şimdi yüklenir.
    if (adresteDonusVar() || kayitliOturumVar()) {
      var git = function () {
        kutuphane().then(function () {
          if (adresteDonusVar() && !oturum && !/error/.test(location.search + location.hash)) return;
        }, function () { /* sessiz: düğmeye basılınca hata gösterilir */ });
        if (/error_description=/.test(location.search + location.hash)) {
          var u = new URLSearchParams(location.search.replace(/^\?/, "") || (location.hash || "").replace(/^#/, ""));
          var kod = u.get("error_code") || "", msg = u.get("error_description") || "";
          ac("giris");
          if (govde) { var d = govde.querySelector(".auth-durum"); if (d) yaz(d, hataMetni({ code: kod, message: msg }), true); }
          adresTemizle();
        }
      };
      (window.requestIdleCallback || function (f) { setTimeout(f, 1200); })(git, { timeout: 3000 });
    }
  }
  window.Auth = { ac: ac, kapat: kapat, oturumVar: function () { return !!oturum; } };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", basla); else basla();
})();

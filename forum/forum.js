/* ═══ KRONOATLAS KAHVEHANE — FORUM F1 (17 Kasım 2026) ═════════════════════════
   Tek sayfa, hash yönlendirmeli:
     #/              bölümler
     #/b/<id>        bölümün konuları
     #/k/<id>        konu + iç içe cevaplar + tepkiler
     #/yeni/<bolum>?tarih=&lng=&lat=&z=&madde=&etiket=   yeni konu (harita bağlamıyla)
     #/giris · #/kayit · #/sifre · #/profil
   GÜVENLİK: kullanıcı metni HİÇBİR ZAMAN innerHTML'e girmez — her şey textContent /
   createElement ile kurulur. Yetki kararı tarayıcıda değil, veritabanı RLS'indedir;
   buradaki "düzenle/sil" düğmelerinin gizlenmesi yalnız görünüştür. */
(function () {
  "use strict";

  var AYAR = window.FORUM_AYAR || {};
  var govde = document.getElementById("forum-govde");
  var oturumAlani = document.getElementById("oturum-alani");
  var sb = null;
  var oturum = null;      // supabase session
  var profil = null;      // public.profiller satırı
  var SAYFA = 30;
  var EMOJILER = ["👍", "❤️", "😂", "😮", "🤔", "📚"];
  var UNVAN = {
    ogretmen: "Öğretmen", akademisyen: "Akademisyen", arastirmaci: "Araştırmacı",
    ogrenci: "Öğrenci", merakli: "Meraklı"
  };
  var ROL = { moderator: "Moderatör", yonetici: "Yönetici" };

  // ─── küçük yardımcılar ──────────────────────────────────────────────────────
  function el(ad, ozellik) {
    var e = document.createElement(ad);
    if (ozellik) {
      for (var k in ozellik) {
        if (!Object.prototype.hasOwnProperty.call(ozellik, k)) continue;
        var v = ozellik[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === "metin") e.textContent = v;
        else if (k === "sinif") e.className = v;
        else if (k.indexOf("on") === 0) e.addEventListener(k.slice(2), v);
        else e.setAttribute(k, v === true ? "" : v);
      }
    }
    for (var i = 2; i < arguments.length; i++) {
      var c = arguments[i];
      if (c === null || c === undefined || c === false) continue;
      if (Array.isArray(c)) c.forEach(function (x) { if (x) e.appendChild(typeof x === "string" ? document.createTextNode(x) : x); });
      else e.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    }
    return e;
  }
  function bosalt(e) { while (e.firstChild) e.removeChild(e.firstChild); }
  function goster() {
    bosalt(govde);
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) govde.appendChild(arguments[i]);
    try { govde.focus({ preventScroll: true }); } catch (x) { /* eski tarayıcı */ }
  }
  function hata(mesaj) { return el("p", { sinif: "hata", role: "alert", metin: mesaj }); }
  function bilgi(mesaj) { return el("p", { sinif: "bilgi", metin: mesaj }); }

  // Supabase/Postgres hatasını Türkçe ve kısa söyle
  function hataMetni(h) {
    if (!h) return "Bilinmeyen hata.";
    var m = (h.message || String(h));
    if (/Invalid login credentials/i.test(m)) return "E-posta ya da şifre yanlış.";
    if (/Email not confirmed/i.test(m)) return "E-posta adresiniz henüz doğrulanmadı. Gelen kutunuzdaki bağlantıya tıklayın.";
    if (/User already registered/i.test(m)) return "Bu e-posta ile zaten bir hesap var. Giriş yapmayı ya da şifre sıfırlamayı deneyin.";
    if (/Password should be at least/i.test(m)) return "Şifre en az 8 karakter olmalı.";
    if (/rate limit/i.test(m)) return "Çok sık denediniz; birkaç dakika sonra tekrar deneyin.";
    if (/row-level security/i.test(m)) return "Bu işlem için yetkiniz yok.";
    if (/Failed to fetch|NetworkError/i.test(m)) return "Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.";
    return m;
  }

  // Göreli zaman ("3 saat önce"), üzerine gelince tam tarih
  function zaman(iso) {
    var t = new Date(iso);
    var fark = (Date.now() - t.getTime()) / 1000;
    var s;
    if (fark < 60) s = "az önce";
    else if (fark < 3600) s = Math.floor(fark / 60) + " dakika önce";
    else if (fark < 86400) s = Math.floor(fark / 3600) + " saat önce";
    else if (fark < 86400 * 7) s = Math.floor(fark / 86400) + " gün önce";
    else s = t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
    return el("time", { datetime: iso, title: t.toLocaleString("tr-TR"), metin: s });
  }

  // Düz metin → paragraflar; yalnız http(s) bağlantıları tıklanır olur
  var URL_RE = /(https?:\/\/[^\s<>"']+)/g;
  function metinGovde(metin) {
    var kap = el("div", { sinif: "metin" });
    String(metin).split(/\n{2,}/).forEach(function (par) {
      var p = el("p");
      var parcalar = par.split(URL_RE);
      parcalar.forEach(function (parca, i) {
        if (i % 2 === 1) {
          var temiz = parca.replace(/[.,;:!?)]+$/, "");
          var artik = parca.slice(temiz.length);
          p.appendChild(el("a", { href: temiz, rel: "nofollow noopener noreferrer", target: "_blank", metin: temiz }));
          if (artik) p.appendChild(document.createTextNode(artik));
        } else if (parca) {
          var satirlar = parca.split("\n");
          satirlar.forEach(function (s, j) {
            if (j > 0) p.appendChild(el("br"));
            if (s) p.appendChild(document.createTextNode(s));
          });
        }
      });
      kap.appendChild(p);
    });
    return kap;
  }

  function yazarRozeti(y) {
    if (!y) return el("span", { sinif: "yazar", metin: "silinmiş üye" });
    return el("span", { sinif: "yazar" },
      el("strong", { metin: y.gorunen_ad || y.kullanici_adi }),
      y.gorunen_ad ? el("span", { sinif: "kadi", metin: " @" + y.kullanici_adi }) : null,
      el("span", { sinif: "unvan unvan-" + y.unvan, metin: UNVAN[y.unvan] || y.unvan }),
      ROL[y.rol] ? el("span", { sinif: "unvan unvan-rol", metin: ROL[y.rol] }) : null);
  }

  function modMu() { return profil && (profil.rol === "moderator" || profil.rol === "yonetici"); }
  function benimMi(satir) { return oturum && satir && satir.yazar_id === oturum.user.id; }

  function hashParcala() {
    var h = location.hash.replace(/^#/, "") || "/";
    var q = {};
    var soru = h.indexOf("?");
    if (soru >= 0) {
      new URLSearchParams(h.slice(soru + 1)).forEach(function (v, k) { q[k] = v; });
      h = h.slice(0, soru);
    }
    return { yol: h.split("/").filter(Boolean), q: q };
  }
  function git(h) { if (location.hash === h) yonlendir(); else location.hash = h; }

  // ─── oturum ────────────────────────────────────────────────────────────────
  async function profilYukle() {
    profil = null;
    if (!oturum) return;
    var r = await sb.from("profiller").select("*").eq("id", oturum.user.id).maybeSingle();
    if (!r.error) profil = r.data;
  }

  function oturumCiz() {
    bosalt(oturumAlani);
    if (oturum && profil) {
      oturumAlani.appendChild(el("a", { href: "#/profil", sinif: "ust-dugme", metin: "👤 " + (profil.gorunen_ad || profil.kullanici_adi) }));
      oturumAlani.appendChild(el("button", { type: "button", sinif: "ust-dugme", metin: "Çıkış", onclick: async function () {
        await sb.auth.signOut();
      } }));
    } else {
      oturumAlani.appendChild(el("a", { href: "#/giris", sinif: "ust-dugme", metin: "Giriş" }));
      oturumAlani.appendChild(el("a", { href: "#/kayit", sinif: "ust-dugme vurgu", metin: "Üye ol" }));
    }
  }

  // ─── sayfalar ──────────────────────────────────────────────────────────────
  async function sayfaBolumler() {
    goster(bilgi("Bölümler yükleniyor…"));
    var r = await sb.from("bolumler").select("*").order("sira");
    if (r.error) return goster(hata(hataMetni(r.error)));
    var liste = el("ul", { sinif: "bolum-liste" });
    var sayaclar = await Promise.all(r.data.map(function (b) {
      return sb.from("konular").select("id", { count: "exact", head: true }).eq("bolum_id", b.id).eq("silindi", false);
    }));
    r.data.forEach(function (b, i) {
      var n = sayaclar[i] && sayaclar[i].count;
      liste.appendChild(el("li", null,
        el("a", { href: "#/b/" + b.id, sinif: "bolum-kart" },
          el("span", { sinif: "bolum-simge", "aria-hidden": "true", metin: b.simge || "💬" }),
          el("span", { sinif: "bolum-yazi" },
            el("strong", { metin: b.ad }),
            el("span", { sinif: "aciklama", metin: b.aciklama || "" })),
          el("span", { sinif: "sayi", metin: (n == null ? "–" : n) + " konu" }))));
    });
    goster(
      el("h1", { metin: "Kahvehane" }),
      el("p", { sinif: "giris-yazi", metin: "Osmanlı kahvehanesi sohbetin ve münazaranın evidir. Haritada gördüğünüzü, kronolojide okuduğunuzu burada tartışın." }),
      liste);
  }

  async function sayfaBolum(id, sayfa) {
    sayfa = Math.max(0, sayfa || 0);
    goster(bilgi("Konular yükleniyor…"));
    var b = await sb.from("bolumler").select("*").eq("id", id).maybeSingle();
    if (b.error || !b.data) return goster(hata("Bölüm bulunamadı."));
    var r = await sb.from("konular")
      .select("id,baslik,olusturma,son_etkinlik,mesaj_sayisi,kilitli,sabit,silindi,baglam_tarih,baglam_etiket,yazar:profiller(kullanici_adi,gorunen_ad,unvan,rol)")
      .eq("bolum_id", id).eq("silindi", false)
      .order("sabit", { ascending: false }).order("son_etkinlik", { ascending: false })
      .range(sayfa * SAYFA, sayfa * SAYFA + SAYFA);
    if (r.error) return goster(hata(hataMetni(r.error)));
    var fazla = r.data.length > SAYFA;
    var satirlar = r.data.slice(0, SAYFA);
    var tablo = el("ul", { sinif: "konu-liste" });
    if (!satirlar.length) tablo.appendChild(el("li", { sinif: "bos", metin: "Bu bölümde henüz konu yok. İlk konuyu siz açın!" }));
    satirlar.forEach(function (k) {
      tablo.appendChild(el("li", { sinif: "konu-satir" + (k.sabit ? " sabit" : "") },
        el("a", { href: "#/k/" + k.id, sinif: "konu-baslik" },
          k.sabit ? el("span", { sinif: "isaret", title: "Sabitlenmiş", metin: "📌 " }) : null,
          k.kilitli ? el("span", { sinif: "isaret", title: "Kilitli", metin: "🔒 " }) : null,
          k.baslik),
        el("div", { sinif: "konu-alt" },
          yazarRozeti(k.yazar), " · ", zaman(k.olusturma),
          k.baglam_tarih ? el("span", { sinif: "baglam-rozet", title: k.baglam_etiket || "", metin: "🗺 " + tarihYaz(k.baglam_tarih) }) : null),
        el("div", { sinif: "konu-sayac" },
          el("span", { metin: k.mesaj_sayisi + " cevap" }),
          el("span", { sinif: "son" }, "son: ", zaman(k.son_etkinlik)))));
    });
    var gezinti = el("div", { sinif: "sayfalama" },
      sayfa > 0 ? el("a", { href: "#/b/" + id + "?s=" + (sayfa - 1), metin: "← Yeni konular" }) : null,
      fazla ? el("a", { href: "#/b/" + id + "?s=" + (sayfa + 1), metin: "Eski konular →" }) : null);
    goster(
      el("nav", { sinif: "iz" }, el("a", { href: "#/", metin: "Kahvehane" }), " › ", b.data.ad),
      el("div", { sinif: "baslik-satir" },
        el("h1", { metin: (b.data.simge ? b.data.simge + " " : "") + b.data.ad }),
        el("a", { href: oturum ? "#/yeni/" + id : "#/giris", sinif: "dugme vurgu", metin: oturum ? "+ Yeni konu" : "Konu açmak için giriş yapın" })),
      b.data.aciklama ? el("p", { sinif: "aciklama", metin: b.data.aciklama }) : null,
      tablo, gezinti);
  }

  function tarihYaz(d) {
    try {
      var p = String(d).split("-");
      var t = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
      return t.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
    } catch (x) { return String(d); }
  }

  function baglamKutusu(k) {
    if (!k.baglam_tarih && k.baglam_lng == null && !k.baglam_madde && !k.baglam_etiket) return null;
    var q = new URLSearchParams();
    if (k.baglam_tarih) q.set("tarih", k.baglam_tarih);
    if (k.baglam_lng != null && k.baglam_lat != null) { q.set("lng", k.baglam_lng); q.set("lat", k.baglam_lat); }
    if (k.baglam_zoom != null) q.set("z", k.baglam_zoom);
    if (k.baglam_madde) q.set("madde", k.baglam_madde);
    return el("aside", { sinif: "baglam-kutu" },
      el("strong", { metin: "🗺 Harita bağlamı" }),
      k.baglam_etiket ? el("div", { metin: k.baglam_etiket }) : null,
      k.baglam_tarih ? el("div", { metin: "Tarih: " + tarihYaz(k.baglam_tarih) }) : null,
      k.baglam_lng != null ? el("div", { metin: "Konum: " + (+k.baglam_lat).toFixed(3) + "° K, " + (+k.baglam_lng).toFixed(3) + "° D" }) : null,
      el("a", { href: "../?" + q.toString(), metin: "Atlasta bu ana git →" }));
  }

  // Tepki şeridi: hedef = {konu_id} ya da {mesaj_id}
  function tepkiSeridi(hedef, tepkiler) {
    var kap = el("div", { sinif: "tepkiler" });
    function ciz() {
      bosalt(kap);
      EMOJILER.forEach(function (e) {
        var bunlar = tepkiler.filter(function (t) { return t.emoji === e; });
        var benim = oturum && bunlar.some(function (t) { return t.kullanici_id === oturum.user.id; });
        if (!bunlar.length && !oturum) return;
        kap.appendChild(el("button", {
          type: "button", sinif: "tepki" + (benim ? " benim" : "") + (bunlar.length ? "" : " sifir"),
          "aria-pressed": benim ? "true" : "false",
          title: oturum ? (benim ? "Tepkini geri al" : "Tepki ver") : "Tepki vermek için giriş yapın",
          onclick: async function () {
            if (!oturum) return git("#/giris");
            this.disabled = true;
            var r;
            if (benim) {
              var q = sb.from("tepkiler").delete().eq("kullanici_id", oturum.user.id).eq("emoji", e);
              q = hedef.konu_id ? q.eq("konu_id", hedef.konu_id) : q.eq("mesaj_id", hedef.mesaj_id);
              r = await q;
              if (!r.error) tepkiler = tepkiler.filter(function (t) { return !(t.emoji === e && t.kullanici_id === oturum.user.id); });
            } else {
              var satir = { emoji: e, kullanici_id: oturum.user.id };
              if (hedef.konu_id) satir.konu_id = hedef.konu_id; else satir.mesaj_id = hedef.mesaj_id;
              r = await sb.from("tepkiler").insert(satir);
              if (!r.error) tepkiler = tepkiler.concat([satir]);
            }
            if (r.error) alert(hataMetni(r.error));
            ciz();
          }
        }, e + (bunlar.length ? " " + bunlar.length : "")));
      });
    }
    ciz();
    return kap;
  }

  // Metin düzenleme alanı (yeni cevap, düzenleme)
  function yaziFormu(ilk, dugmeYazi, kaydet, iptal) {
    var alan = el("textarea", { rows: "4", maxlength: "10000", required: true, "aria-label": "Mesajınız" });
    alan.value = ilk || "";
    var durum = el("span", { sinif: "durum", "aria-live": "polite" });
    var gonder = el("button", { type: "submit", sinif: "dugme vurgu", metin: dugmeYazi });
    var form = el("form", { sinif: "yazi-formu", onsubmit: async function (ev) {
      ev.preventDefault();
      var m = alan.value.trim();
      if (!m) return;
      gonder.disabled = true; durum.textContent = "Gönderiliyor…";
      var h = await kaydet(m);
      gonder.disabled = false;
      durum.textContent = h ? hataMetni(h) : "";
    } }, alan, el("div", { sinif: "form-alt" }, gonder,
      iptal ? el("button", { type: "button", sinif: "dugme", metin: "Vazgeç", onclick: iptal }) : null, durum));
    setTimeout(function () { alan.focus(); }, 0);
    return form;
  }

  async function sayfaKonu(id) {
    goster(bilgi("Konu yükleniyor…"));
    var YAZAR = "yazar:profiller(kullanici_adi,gorunen_ad,unvan,rol)";
    var kr = await sb.from("konular").select("*,bolum:bolumler(id,ad)," + YAZAR).eq("id", id).maybeSingle();
    if (kr.error) return goster(hata(hataMetni(kr.error)));
    if (!kr.data) return goster(hata("Konu bulunamadı ya da kaldırılmış."));
    var k = kr.data;
    var mr = await sb.from("mesajlar").select("*," + YAZAR).eq("konu_id", id).order("olusturma").limit(1000);
    if (mr.error) return goster(hata(hataMetni(mr.error)));
    var mesajlar = mr.data;
    var kimlikler = mesajlar.map(function (m) { return m.id; });
    var tr1 = await sb.from("tepkiler").select("konu_id,mesaj_id,emoji,kullanici_id").eq("konu_id", id);
    var tr2 = kimlikler.length ? await sb.from("tepkiler").select("konu_id,mesaj_id,emoji,kullanici_id").in("mesaj_id", kimlikler) : { data: [] };
    var tepkiler = (tr1.data || []).concat(tr2.data || []);
    document.title = k.baslik + " — Kahvehane";

    // Konu gövdesi
    var konuMetin = el("div", null, metinGovde(k.govde));
    var konuIslem = el("div", { sinif: "islemler" });
    if (benimMi(k) || modMu()) {
      konuIslem.appendChild(el("button", { type: "button", sinif: "bag", metin: "Düzenle", onclick: function () {
        bosalt(konuMetin);
        konuMetin.appendChild(yaziFormu(k.govde, "Kaydet", async function (m) {
          var r = await sb.from("konular").update({ govde: m }).eq("id", k.id);
          if (r.error) return r.error;
          sayfaKonu(id);
        }, function () { bosalt(konuMetin); konuMetin.appendChild(metinGovde(k.govde)); }));
      } }));
      konuIslem.appendChild(el("button", { type: "button", sinif: "bag tehlike", metin: "Sil", onclick: async function () {
        if (!confirm("Bu konuyu kaldırmak istediğinize emin misiniz?")) return;
        var r = await sb.from("konular").update({ silindi: true }).eq("id", k.id);
        if (r.error) return alert(hataMetni(r.error));
        git("#/b/" + k.bolum_id);
      } }));
    }
    if (modMu()) {
      konuIslem.appendChild(el("button", { type: "button", sinif: "bag", metin: k.kilitli ? "Kilidi aç" : "Kilitle", onclick: async function () {
        var r = await sb.from("konular").update({ kilitli: !k.kilitli }).eq("id", k.id);
        if (r.error) return alert(hataMetni(r.error));
        sayfaKonu(id);
      } }));
      konuIslem.appendChild(el("button", { type: "button", sinif: "bag", metin: k.sabit ? "Sabitlemeyi kaldır" : "Sabitle", onclick: async function () {
        var r = await sb.from("konular").update({ sabit: !k.sabit }).eq("id", k.id);
        if (r.error) return alert(hataMetni(r.error));
        sayfaKonu(id);
      } }));
    }

    var konuKart = el("article", { sinif: "mesaj konu-ana" },
      el("header", { sinif: "mesaj-ust" }, yazarRozeti(k.yazar), " · ", zaman(k.olusturma),
        k.duzenlenme ? el("span", { sinif: "duzenlendi", title: new Date(k.duzenlenme).toLocaleString("tr-TR"), metin: " (düzenlendi)" }) : null),
      konuMetin,
      tepkiSeridi({ konu_id: k.id }, tepkiler.filter(function (t) { return t.konu_id === k.id; })),
      konuIslem);

    // Mesaj ağacı
    var cocuklar = {};
    mesajlar.forEach(function (m) {
      var u = m.ust_mesaj_id || 0;
      (cocuklar[u] = cocuklar[u] || []).push(m);
    });
    function mesajCiz(m, derinlik) {
      var metinKap = el("div", null, m.silindi ? el("p", { sinif: "silindi", metin: "Bu mesaj kaldırıldı." }) : metinGovde(m.govde));
      var cevapYeri = el("div", { sinif: "cevap-yeri" });
      var islem = el("div", { sinif: "islemler" });
      if (!m.silindi && !k.kilitli && oturum) {
        islem.appendChild(el("button", { type: "button", sinif: "bag", metin: "Cevapla", onclick: function () {
          bosalt(cevapYeri);
          cevapYeri.appendChild(yaziFormu("", "Cevabı gönder", async function (metin) {
            var r = await sb.from("mesajlar").insert({ konu_id: k.id, ust_mesaj_id: m.id, govde: metin, yazar_id: oturum.user.id });
            if (r.error) return r.error;
            sayfaKonu(id);
          }, function () { bosalt(cevapYeri); }));
        } }));
      }
      if (!m.silindi && (benimMi(m) || modMu())) {
        islem.appendChild(el("button", { type: "button", sinif: "bag", metin: "Düzenle", onclick: function () {
          bosalt(metinKap);
          metinKap.appendChild(yaziFormu(m.govde, "Kaydet", async function (metin) {
            var r = await sb.from("mesajlar").update({ govde: metin }).eq("id", m.id);
            if (r.error) return r.error;
            sayfaKonu(id);
          }, function () { bosalt(metinKap); metinKap.appendChild(metinGovde(m.govde)); }));
        } }));
        islem.appendChild(el("button", { type: "button", sinif: "bag tehlike", metin: "Sil", onclick: async function () {
          if (!confirm("Bu mesajı kaldırmak istediğinize emin misiniz?")) return;
          var r = await sb.from("mesajlar").update({ silindi: true }).eq("id", m.id);
          if (r.error) return alert(hataMetni(r.error));
          sayfaKonu(id);
        } }));
      }
      var kart = el("article", { sinif: "mesaj", id: "m" + m.id },
        el("header", { sinif: "mesaj-ust" }, yazarRozeti(m.yazar), " · ",
          el("a", { href: "#/k/" + k.id + "?m=" + m.id, sinif: "kalici" }, zaman(m.olusturma)),
          m.duzenlenme ? el("span", { sinif: "duzenlendi", metin: " (düzenlendi)" }) : null),
        metinKap,
        m.silindi ? null : tepkiSeridi({ mesaj_id: m.id }, tepkiler.filter(function (t) { return t.mesaj_id === m.id; })),
        islem, cevapYeri);
      var dal = el("div", { sinif: "dal" + (derinlik >= 4 ? " duz" : "") }, kart);
      var alt = cocuklar[m.id] || [];
      if (alt.length) {
        var altKap = el("div", { sinif: "alt-dal" });
        alt.forEach(function (c) { altKap.appendChild(mesajCiz(c, derinlik + 1)); });
        dal.appendChild(altKap);
      }
      return dal;
    }
    var agac = el("section", { sinif: "mesajlar", "aria-label": "Cevaplar" });
    (cocuklar[0] || []).forEach(function (m) { agac.appendChild(mesajCiz(m, 0)); });

    var yeniCevap;
    if (k.kilitli && !modMu()) yeniCevap = bilgi("🔒 Bu konu kilitli; yeni cevap yazılamaz.");
    else if (!oturum) yeniCevap = el("p", { sinif: "bilgi" }, "Cevap yazmak için ", el("a", { href: "#/giris", metin: "giriş yapın" }), " ya da ", el("a", { href: "#/kayit", metin: "üye olun" }), ".");
    else yeniCevap = el("section", { sinif: "yeni-cevap" }, el("h2", { metin: "Cevap yaz" }),
      yaziFormu("", "Gönder", async function (metin) {
        var r = await sb.from("mesajlar").insert({ konu_id: k.id, govde: metin, yazar_id: oturum.user.id });
        if (r.error) return r.error;
        sayfaKonu(id);
      }));

    goster(
      el("nav", { sinif: "iz" }, el("a", { href: "#/", metin: "Kahvehane" }), " › ",
        k.bolum ? el("a", { href: "#/b/" + k.bolum.id, metin: k.bolum.ad }) : "?"),
      el("h1", null, k.kilitli ? "🔒 " : "", k.baslik),
      k.silindi ? hata("Bu konu kaldırılmış (yalnız siz ve moderatörler görüyor).") : null,
      baglamKutusu(k),
      konuKart,
      el("h2", { sinif: "cevap-sayi", metin: mesajlar.length + " cevap" }),
      agac,
      yeniCevap);

    var hedefM = hashParcala().q.m;
    if (hedefM) {
      var hedef = document.getElementById("m" + hedefM);
      if (hedef) { hedef.classList.add("vurgulu"); hedef.scrollIntoView({ block: "center" }); }
    }
  }

  async function sayfaYeniKonu(bolumId, q) {
    if (!oturum) return git("#/giris");
    var b = await sb.from("bolumler").select("*").order("sira");
    if (b.error) return goster(hata(hataMetni(b.error)));
    var secim = el("select", { required: true, "aria-label": "Bölüm" });
    b.data.forEach(function (x) {
      var o = el("option", { value: x.id, metin: x.ad });
      if (String(x.id) === String(bolumId)) o.selected = true;
      secim.appendChild(o);
    });
    var baslik = el("input", { type: "text", maxlength: "200", minlength: "3", required: true, placeholder: "Konunun başlığı" });
    var metin = el("textarea", { rows: "10", maxlength: "20000", required: true, placeholder: "Ne düşünüyorsunuz? Kaynak verirseniz tartışma güçlenir." });

    // Harita bağlamı atlastan geldiyse (adres parametreleri)
    var bag = {};
    if (/^\d{4}-\d{2}-\d{2}$/.test(q.tarih || "")) bag.baglam_tarih = q.tarih;
    var lng = parseFloat(q.lng), lat = parseFloat(q.lat), z = parseFloat(q.z);
    if (isFinite(lng) && isFinite(lat) && Math.abs(lng) <= 180 && Math.abs(lat) <= 90) { bag.baglam_lng = lng; bag.baglam_lat = lat; }
    if (isFinite(z) && z >= 0 && z <= 22) bag.baglam_zoom = z;
    if (q.madde) bag.baglam_madde = String(q.madde).slice(0, 200);
    if (q.etiket) bag.baglam_etiket = String(q.etiket).slice(0, 200);
    var bagVar = Object.keys(bag).length > 0;
    if (q.etiket && !q.baslik) baslik.value = String(q.etiket).slice(0, 200);
    if (q.baslik) baslik.value = String(q.baslik).slice(0, 200);
    var bagKutu = bagVar ? baglamKutusu(bag) : null;
    var bagTut = bagVar ? el("input", { type: "checkbox", checked: true }) : null;

    var durum = el("span", { sinif: "durum", "aria-live": "polite" });
    var gonder = el("button", { type: "submit", sinif: "dugme vurgu", metin: "Konuyu aç" });
    var form = el("form", { sinif: "yeni-konu", onsubmit: async function (ev) {
      ev.preventDefault();
      gonder.disabled = true; durum.textContent = "Gönderiliyor…";
      var satir = { bolum_id: +secim.value, baslik: baslik.value.trim(), govde: metin.value.trim(), yazar_id: oturum.user.id };
      if (bagVar && bagTut.checked) Object.assign(satir, bag);
      var r = await sb.from("konular").insert(satir).select("id").single();
      gonder.disabled = false;
      if (r.error) { durum.textContent = hataMetni(r.error); return; }
      git("#/k/" + r.data.id);
    } },
      el("label", null, "Bölüm", secim),
      el("label", null, "Başlık", baslik),
      el("label", null, "Mesaj", metin),
      bagVar ? el("div", { sinif: "baglam-sec" }, bagKutu, el("label", { sinif: "satir" }, bagTut, " Bu harita bağlamını konuya ekle")) : null,
      el("div", { sinif: "form-alt" }, gonder, el("a", { href: bolumId ? "#/b/" + bolumId : "#/", sinif: "dugme", metin: "Vazgeç" }), durum));
    goster(el("nav", { sinif: "iz" }, el("a", { href: "#/", metin: "Kahvehane" }), " › Yeni konu"),
      el("h1", { metin: "Yeni konu aç" }), form);
    baslik.focus();
  }

  function adresGeri() {
    // E-posta doğrulama ve şifre sıfırlama bağlantıları bu sayfaya döner
    return location.origin + location.pathname;
  }

  function sayfaGiris() {
    if (oturum) return git("#/");
    var eposta = el("input", { type: "email", required: true, autocomplete: "email" });
    var sifre = el("input", { type: "password", required: true, autocomplete: "current-password" });
    var durum = el("p", { sinif: "durum", "aria-live": "polite" });
    var gonder = el("button", { type: "submit", sinif: "dugme vurgu", metin: "Giriş yap" });
    goster(el("section", { sinif: "kimlik-kart" },
      el("h1", { metin: "Giriş" }),
      el("form", { onsubmit: async function (ev) {
        ev.preventDefault();
        gonder.disabled = true; durum.textContent = "Giriş yapılıyor…";
        var r = await sb.auth.signInWithPassword({ email: eposta.value.trim(), password: sifre.value });
        gonder.disabled = false;
        if (r.error) { durum.textContent = hataMetni(r.error); return; }
        git("#/");
      } },
        el("label", null, "E-posta", eposta),
        el("label", null, "Şifre", sifre),
        el("div", { sinif: "form-alt" }, gonder), durum),
      el("p", null, el("a", { href: "#/sifre", metin: "Şifremi unuttum" }), " · ", el("a", { href: "#/kayit", metin: "Hesabınız yok mu? Üye olun" }))));
    eposta.focus();
  }

  function sayfaKayit() {
    if (oturum) return git("#/");
    var kadi = el("input", { type: "text", required: true, pattern: "[a-zA-Z0-9_.]{3,30}", maxlength: "30", autocomplete: "username",
      title: "3–30 karakter: harf, rakam, alt çizgi ve nokta" });
    var gad = el("input", { type: "text", maxlength: "60", autocomplete: "name", placeholder: "İsteğe bağlı (ör. Ahmet Yılmaz)" });
    var unvan = el("select", { required: true });
    Object.keys(UNVAN).forEach(function (u) { unvan.appendChild(el("option", { value: u, metin: UNVAN[u], selected: u === "merakli" })); });
    var eposta = el("input", { type: "email", required: true, autocomplete: "email" });
    var sifre = el("input", { type: "password", required: true, minlength: "8", autocomplete: "new-password" });
    var onay = el("input", { type: "checkbox", required: true });
    var durum = el("p", { sinif: "durum", "aria-live": "polite" });
    var gonder = el("button", { type: "submit", sinif: "dugme vurgu", metin: "Üye ol" });
    goster(el("section", { sinif: "kimlik-kart" },
      el("h1", { metin: "Üye ol" }),
      el("form", { onsubmit: async function (ev) {
        ev.preventDefault();
        gonder.disabled = true; durum.textContent = "Kaydediliyor…";
        var ad = kadi.value.trim();
        var var_mi = await sb.from("profiller").select("id").eq("kullanici_adi", ad).maybeSingle();
        if (var_mi.data) { gonder.disabled = false; durum.textContent = "Bu kullanıcı adı alınmış; başka bir ad deneyin."; return; }
        var r = await sb.auth.signUp({
          email: eposta.value.trim(), password: sifre.value,
          options: { emailRedirectTo: adresGeri(), data: { kullanici_adi: ad, gorunen_ad: gad.value.trim(), unvan: unvan.value } }
        });
        gonder.disabled = false;
        if (r.error) { durum.textContent = hataMetni(r.error); return; }
        goster(el("section", { sinif: "kimlik-kart" },
          el("h1", { metin: "Neredeyse tamam ✉️" }),
          el("p", null, el("strong", { metin: eposta.value.trim() }), " adresine bir doğrulama bağlantısı gönderdik. Bağlantıya tıkladığınızda hesabınız açılır."),
          el("p", { sinif: "aciklama", metin: "E-posta birkaç dakikada gelmezse gereksiz (spam) klasörüne bakın." })));
      } },
        el("label", null, "Kullanıcı adı", kadi),
        el("label", null, "Görünen ad", gad),
        el("label", null, "Unvan", unvan),
        el("label", null, "E-posta", eposta),
        el("label", null, "Şifre (en az 8 karakter)", sifre),
        el("label", { sinif: "satir" }, onay, " Saygılı ve kaynaklı tartışma kurallarına uyacağım."),
        el("div", { sinif: "form-alt" }, gonder), durum),
      el("p", null, el("a", { href: "#/giris", metin: "Zaten üye misiniz? Giriş yapın" }))));
    kadi.focus();
  }

  function sayfaSifre() {
    var eposta = el("input", { type: "email", required: true, autocomplete: "email" });
    var durum = el("p", { sinif: "durum", "aria-live": "polite" });
    goster(el("section", { sinif: "kimlik-kart" },
      el("h1", { metin: "Şifre sıfırlama" }),
      el("form", { onsubmit: async function (ev) {
        ev.preventDefault();
        durum.textContent = "Gönderiliyor…";
        var r = await sb.auth.resetPasswordForEmail(eposta.value.trim(), { redirectTo: adresGeri() });
        durum.textContent = r.error ? hataMetni(r.error) : "Bu adrese kayıtlı bir hesap varsa sıfırlama bağlantısı gönderildi.";
      } }, el("label", null, "E-posta", eposta),
        el("div", { sinif: "form-alt" }, el("button", { type: "submit", sinif: "dugme vurgu", metin: "Bağlantı gönder" })), durum)));
  }

  function sayfaYeniSifre() {
    var sifre = el("input", { type: "password", required: true, minlength: "8", autocomplete: "new-password" });
    var durum = el("p", { sinif: "durum", "aria-live": "polite" });
    goster(el("section", { sinif: "kimlik-kart" },
      el("h1", { metin: "Yeni şifre belirleyin" }),
      el("form", { onsubmit: async function (ev) {
        ev.preventDefault();
        var r = await sb.auth.updateUser({ password: sifre.value });
        if (r.error) { durum.textContent = hataMetni(r.error); return; }
        durum.textContent = "Şifreniz değişti.";
        setTimeout(function () { git("#/"); }, 1200);
      } }, el("label", null, "Yeni şifre (en az 8 karakter)", sifre),
        el("div", { sinif: "form-alt" }, el("button", { type: "submit", sinif: "dugme vurgu", metin: "Kaydet" })), durum)));
  }

  function sayfaProfil() {
    if (!oturum || !profil) return git("#/giris");
    var gad = el("input", { type: "text", maxlength: "60" }); gad.value = profil.gorunen_ad || "";
    var unvan = el("select");
    Object.keys(UNVAN).forEach(function (u) { unvan.appendChild(el("option", { value: u, metin: UNVAN[u], selected: u === profil.unvan })); });
    var bio = el("textarea", { rows: "4", maxlength: "1000" }); bio.value = profil.biyografi || "";
    var durum = el("p", { sinif: "durum", "aria-live": "polite" });
    goster(el("section", { sinif: "kimlik-kart" },
      el("h1", { metin: "Profilim" }),
      el("p", null, "Kullanıcı adı: ", el("strong", { metin: "@" + profil.kullanici_adi }), " · E-posta: ", el("span", { metin: oturum.user.email })),
      el("form", { onsubmit: async function (ev) {
        ev.preventDefault();
        durum.textContent = "Kaydediliyor…";
        var r = await sb.from("profiller").update({ gorunen_ad: gad.value.trim() || null, unvan: unvan.value, biyografi: bio.value.trim() || null })
          .eq("id", profil.id).select().single();
        if (r.error) { durum.textContent = hataMetni(r.error); return; }
        profil = r.data; oturumCiz(); durum.textContent = "Kaydedildi.";
      } },
        el("label", null, "Görünen ad", gad),
        el("label", null, "Unvan", unvan),
        el("label", null, "Hakkımda", bio),
        el("div", { sinif: "form-alt" }, el("button", { type: "submit", sinif: "dugme vurgu", metin: "Kaydet" })), durum)));
  }

  // ─── yönlendirici ──────────────────────────────────────────────────────────
  var sifreKurtarma = false;
  async function yonlendir() {
    document.title = "Kahvehane — KRONOATLAS Forumu";
    if (sifreKurtarma) return sayfaYeniSifre();
    var h = hashParcala(), y = h.yol;
    try {
      if (!y.length) return await sayfaBolumler();
      if (y[0] === "b" && y[1]) return await sayfaBolum(+y[1], +(h.q.s || 0));
      if (y[0] === "k" && y[1]) return await sayfaKonu(+y[1]);
      if (y[0] === "yeni") return await sayfaYeniKonu(y[1], h.q);
      if (y[0] === "giris") return sayfaGiris();
      if (y[0] === "kayit") return sayfaKayit();
      if (y[0] === "sifre") return sayfaSifre();
      if (y[0] === "profil") return sayfaProfil();
      goster(hata("Sayfa bulunamadı."), el("p", null, el("a", { href: "#/", metin: "Kahvehane'ye dön" })));
    } catch (x) {
      console.error(x);
      goster(hata(hataMetni(x)));
    }
  }

  // ─── açılış ────────────────────────────────────────────────────────────────
  async function basla() {
    if (!AYAR.url || !AYAR.anonAnahtar || !window.supabase) {
      oturumAlani.textContent = "";
      goster(el("h1", { metin: "Kahvehane" }),
        bilgi(!window.supabase ? "Forum kütüphanesi yüklenemedi. İnternet bağlantınızı kontrol edip sayfayı yenileyin."
                               : "Forum henüz bağlanmadı (deneme sürümü). Yakında açılacak."));
      return;
    }
    sb = window.supabase.createClient(AYAR.url, AYAR.anonAnahtar, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" }
    });
    // E-posta bağlantısından dönüşte adres ?code=… taşır; supabase-js oturumu kurar.
    var ilk = await sb.auth.getSession();
    oturum = ilk.data.session;
    await profilYukle();
    oturumCiz();
    sb.auth.onAuthStateChange(function (olay, s) {
      if (olay === "PASSWORD_RECOVERY") sifreKurtarma = true;
      if (olay === "USER_UPDATED") sifreKurtarma = false;
      var degisti = (s && s.user && s.user.id) !== (oturum && oturum.user && oturum.user.id);
      oturum = s;
      if (degisti || olay === "PASSWORD_RECOVERY") {
        setTimeout(async function () { await profilYukle(); oturumCiz(); yonlendir(); }, 0);
      }
    });
    if (/[?&]code=/.test(location.search)) history.replaceState(null, "", location.pathname + location.hash);
    window.addEventListener("hashchange", yonlendir);
    yonlendir();
  }
  basla();

  // YAPIM AŞAMASINDADIR penceresi (Emre, 18 Kasım 2026) — oturum başına bir kez.
  (function yapim() {
    var pen = document.getElementById("yapim-pencere");
    var tm = document.getElementById("yapim-tamam");
    if (!pen || !tm || /[?&]gelistirici=1/.test(location.search)) return;
    try { if (sessionStorage.getItem("yapimGoruldu") === "1") return; } catch (e) { /* göster */ }
    function kapa() {
      try { sessionStorage.setItem("yapimGoruldu", "1"); } catch (e) { /* özel pencere */ }
      pen.hidden = true;
      document.removeEventListener("keydown", tus);
    }
    function tus(ev) { if (ev.key === "Escape") kapa(); }
    pen.hidden = false;
    tm.addEventListener("click", kapa);
    document.addEventListener("keydown", tus);
    try { tm.focus(); } catch (e) { /* odak */ }
  })();
})();

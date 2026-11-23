// YÖNETİM PANELİ (24 Kasım 2026) — yalnız yönetici. Veri: Supabase ziyaret_ozet() (supabase/gunluk_g1.sql).
// 🔴 GÜVENLİK: toplama işlevine HERKES yazabilir ⇒ ayrıntı alanları (madde başlığı vb.) güvenilmez
// metindir. Panel hiçbir değeri HTML olarak basmaz: yalnız textContent / createElement.
// Yetki sunucudadır (forum_rol() = 'yonetici'); bu dosya yalnız göstermedir.
(function () {
  "use strict";
  var AYAR = window.FORUM_AYAR || {};
  var govde = document.getElementById("y-govde");
  var oturumAlani = document.getElementById("y-oturum");
  var sb = null;
  var gun = 30;

  function el(ad, sinif, metin) {
    var e = document.createElement(ad);
    if (sinif) e.className = sinif;
    if (metin != null) e.textContent = metin;
    return e;
  }
  function temizle(k) { while (k.firstChild) k.removeChild(k.firstChild); }
  function sayi(n) { return (n == null ? 0 : Number(n)).toLocaleString("tr-TR"); }
  function sureYaz(sn) {
    if (sn == null) return "—";
    if (sn < 90) return sn + " sn";
    return Math.round(sn / 60) + " dk";
  }
  var ULKE_AD = null;
  function ulkeAdi(kod) {
    if (!kod || kod === "??") return "bilinmiyor";
    try {
      if (!ULKE_AD) ULKE_AD = new Intl.DisplayNames(["tr"], { type: "region" });
      return ULKE_AD.of(kod) + " (" + kod + ")";
    } catch (e) { return kod; }
  }
  var CIHAZ_AD = { masaustu: "Bilgisayar", telefon: "Telefon", tablet: "Tablet", "??": "bilinmiyor" };

  function giris(mesaj) {
    temizle(govde);
    var f = el("form", "giris");
    var l1 = el("label", null, "E-posta"), e = el("input"); e.type = "email"; e.required = true; e.autocomplete = "username"; l1.appendChild(e);
    var l2 = el("label", null, "Şifre"), s = el("input"); s.type = "password"; s.required = true; s.autocomplete = "current-password"; l2.appendChild(s);
    var b = el("button", "vurgu", "Giriş yap"); b.type = "submit";
    var d = el("div", "hata", mesaj || "");
    f.appendChild(el("div", "bilgi", "Yönetici hesabıyla giriş yapın."));
    f.appendChild(l1); f.appendChild(l2); f.appendChild(b); f.appendChild(d);
    f.addEventListener("submit", async function (ev) {
      ev.preventDefault(); b.disabled = true; d.textContent = "";
      var r = await sb.auth.signInWithPassword({ email: e.value.trim(), password: s.value });
      b.disabled = false;
      if (r.error) { d.textContent = "Giriş başarısız: " + r.error.message; return; }
      baslat();
    });
    govde.appendChild(f);
  }

  function kart(k, deger, etiket) {
    var c = el("div", "kart"); c.appendChild(el("b", null, deger)); c.appendChild(el("span", null, etiket)); k.appendChild(c);
  }
  function liste(baslik, satirlar, ad, deger, kaynakKisi, genis) {
    var k = el("section", "kutu" + (genis ? " genis" : ""));
    k.appendChild(el("h2", null, baslik));
    if (!satirlar || !satirlar.length) { k.appendChild(el("div", "bos", "Henüz kayıt yok.")); return k; }
    var enCok = 1; satirlar.forEach(function (x) { enCok = Math.max(enCok, Number(deger(x)) || 0); });
    satirlar.forEach(function (x) {
      var r = el("div", "satir");
      var a = el("div", "ad", ad(x)); a.title = ad(x);
      var cb = el("div", "cubuk"); cb.style.width = Math.max(2, (Number(deger(x)) || 0) / enCok * 100) + "%";
      r.appendChild(a); r.appendChild(cb); r.appendChild(el("div", "sayi", sayi(deger(x))));
      k.appendChild(r);
    });
    return k;
  }

  function ciz(o) {
    temizle(govde);
    var arac = el("div", "arac");
    var sec = el("select");
    [[7, "Son 7 gün"], [30, "Son 30 gün"], [90, "Son 90 gün"], [365, "Son 12 ay"]].forEach(function (p) {
      var op = el("option", null, p[1]); op.value = p[0]; if (p[0] === gun) op.selected = true; sec.appendChild(op);
    });
    sec.addEventListener("change", function () { gun = Number(sec.value); baslat(); });
    var yen = el("button", null, "Yenile"); yen.addEventListener("click", baslat);
    arac.appendChild(sec); arac.appendChild(yen);
    govde.appendChild(arac);

    var kk = el("div", "kartlar");
    kart(kk, sayi(o.ziyaretci), "tekil ziyaretçi (takma numara)");
    kart(kk, sayi(o.uye_ziyaretci), "giriş yapmış üye");
    kart(kk, sayi(o.oturum), "oturum");
    kart(kk, sayi(o.toplam_olay), "kayıtlı olay");
    kart(kk, sureYaz(o.ort_kalma_sn), "ortalama kalma (parça başı)");
    kart(kk, sayi(o.oynat), "oynat tıklaması");
    govde.appendChild(kk);

    var iz = el("div", "izgara");
    iz.appendChild(liste("Günlük tekil ziyaretçi", o.gunluk, function (x) { return x.gun; }, function (x) { return x.ziyaretci; }, null, true));
    iz.appendChild(liste("Ülke (kaba)", o.ulke, function (x) { return ulkeAdi(x.ad); }, function (x) { return x.kisi; }));
    iz.appendChild(liste("Cihaz", o.cihaz, function (x) { return CIHAZ_AD[x.ad] || x.ad; }, function (x) { return x.kisi; }));
    iz.appendChild(liste("Dil", o.dil, function (x) { return x.ad; }, function (x) { return x.kisi; }));
    iz.appendChild(liste("Uçuş kipi", o.ucus, function (x) { return x.ad; }, function (x) { return x.adet; }));
    iz.appendChild(liste("En çok bakılan maddeler", o.madde, function (x) { return x.ad; }, function (x) { return x.adet; }, null, true));
    iz.appendChild(liste("Giriş yapan üyeler (olay sayısı)", o.uyeler, function (x) {
      return x.kullanici + " · " + sureYaz(x.kalma_sn) + " · son " + String(x.son || "").slice(0, 10);
    }, function (x) { return x.olay; }, null, true));
    govde.appendChild(iz);
    var not = el("p", "bilgi", "Dönem başı: " + String(o.bas || "").slice(0, 10) + " · günlük özet arşivi: " + sayi(o.arsiv_gun) + " satır. " +
      "Ülke ve cihaz sayıları tekil kişi sayısıdır; çerezini silen ya da başka tarayıcıdan gelen yeni kişi sayılır.");
    govde.appendChild(not);
  }

  async function baslat() {
    temizle(govde); govde.appendChild(el("p", "bilgi", "Yükleniyor…"));
    var s = await sb.auth.getSession();
    var oturum = s.data.session;
    temizle(oturumAlani);
    if (!oturum) { giris(); return; }
    oturumAlani.appendChild(el("span", null, oturum.user.email || ""));
    var cik = el("button", null, "Çıkış");
    cik.addEventListener("click", async function () { await sb.auth.signOut(); baslat(); });
    oturumAlani.appendChild(cik);
    var r = await sb.rpc("ziyaret_ozet", { p_gun: gun });
    if (r.error) {
      temizle(govde);
      var yetki = /yalnız yönetici/i.test(r.error.message || "");
      govde.appendChild(el("p", "hata", yetki
        ? "Bu hesap yönetici değil. Yetki, Supabase'te profiller.rol = 'yonetici' ile verilir."
        : "Veri alınamadı: " + (r.error.message || "bilinmeyen hata") + (/does not exist|schema cache/i.test(r.error.message || "") ? " — supabase/gunluk_g1.sql koşturuldu mu?" : "")));
      return;
    }
    ciz(r.data || {});
  }

  if (!AYAR.url || !AYAR.anonAnahtar || !window.supabase) {
    govde.textContent = "Bağlantı kurulamadı (Supabase kütüphanesi yüklenemedi).";
    return;
  }
  sb = window.supabase.createClient(AYAR.url, AYAR.anonAnahtar, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
  });
  baslat();
})();

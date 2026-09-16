// ============================================================================
// ALBÜM — kronoloji maddesinde "Albüm" ek okuma satırı. DALGA-0059.md madde 1
// (arayüz, 1.MURAT): "GORSEL_MADDE'de o maddeye olay ile bağlı birden çok
// görsel varsa albüm olarak göster (padişah resim albümünün deseni,
// app.js ~5070)." Veri D4-AFRIKA'dan gelecek (Levnî, Surnâme-i Vehbî).
//
// PADİŞAH DESENİ — app.js:5069 `portreAlbumuAc(p)`: `#portre-albumu-pencere`
// penceresini `#portre-albumu-icerik`e figure/img/figcaption kartları
// basarak dolduruyor, "gizli" sınıfını kaldırıyor. Bu dosya AYNI pencereyi
// (yeni bir modal İCAT ETMEDEN, D023) kronoloji maddesi için kullanıyor —
// kapatma/arkaplan-tıklama davranışı zaten app.js'te GENEL (padişaha özel
// değil), bu yüzden dokunulmadı, otomatik çalışıyor.
//
// GÖRSEL TOPLAMA — `maddeGorseliniGuncelle` (app.js:8344, madde detayındaki
// KÜÇÜK inline kartları basan fonksiyon) İLE AYNI eşleştirme/lisans/dedup
// kuralları BİREBİR TEKRARLANDI (D023 — mantık aynı, `_ekBagEslesir` ve
// `_gorselLisansGosterilebilirMi` app.js'in KENDİ global fonksiyonları,
// tekrar yazılmadı): `GORSEL_MADDE`de `olay` ile bu maddeye bağlı TÜM
// kayıtlar (`tur` ne olursa olsun — "madde"/"portre"/"albüm" hepsi
// `gorseller || [kayit]` ile aynı yoldan geçer, padişahın da yaptığı gibi),
// lisansı gösterilebilir (PD ailesi/CC0) ve `url`+`gorsel_alt` dolu olanlar.
// "Birden çok" şartı ≥2 görsel — TEK görsel için buton ÇIKMAZ, o zaten
// `#ob-madde-gorsel`de (app.js'in kendi inline kartı) görünüyor; albüm
// EK bir büyük galeri görünümü sunuyor, inline kartların YERİNE geçmiyor.
//
// index.html/app.js'e DOKUNULMADI. Tek entegrasyon noktası: `obGoster(o)`
// monkey-patch (antlasma_harita.js/d_katman.js'teki AYNI yöntem — üçü de
// BAĞIMSIZ sarmalıyor, zincirleniyor, birbirini BOZMUYOR). Akordeon
// (`#ob-ekokuma-butonlar`, `ekAkordeonKur`) BİLEREK kullanılmadı: o iç
// durumu (`_ekAkordeonAcik`, DOM POZİSYONUNA göre indeksleme) kırılgan —
// dışarıdan satır eklemek risk taşırdı. Bunun yerine `#ob-ozel`e (antlaşma
// haritası düğmesiyle AYNI konteyner) basit bir düğme ekleniyor.
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA. Tahtadan UI'ya istendi.
// ============================================================================
"use strict";

function _albumGorselleriTopla(o) {
  if (typeof _ekBagEslesir !== "function" || typeof _gorselLisansGosterilebilirMi !== "function") return [];
  var gorulenKayit = {}, gorulenUrl = {}, out = [];
  (window.GORSEL_MADDE || []).forEach(function (g) {
    var tutar = (g.olay || []).some(function (v) { return _ekBagEslesir(v, o); });
    if (!tutar) return;
    var anahtar = g.id || g.url || JSON.stringify(g.olay);
    if (gorulenKayit[anahtar]) return;
    gorulenKayit[anahtar] = true;
    (g.gorseller || [g]).forEach(function (r) {
      if (!_gorselLisansGosterilebilirMi(r.lisans)) return;
      if (!r.url || !r.gorsel_alt) return;
      if (gorulenUrl[r.url]) return;
      gorulenUrl[r.url] = true;
      out.push(r);
    });
  });
  return out;
}

// Padişah penceresini (app.js:5069-5107, `portre-albumu-*`) YENİDEN kullanır.
function _albumAc(baslik, gorseller) {
  var pencere = document.getElementById("portre-albumu-pencere");
  var baslikEl = document.getElementById("portre-albumu-baslik");
  var icerik = document.getElementById("portre-albumu-icerik");
  if (!pencere || !baslikEl || !icerik) return;
  baslikEl.textContent = baslik;
  icerik.innerHTML = "";
  gorseller.forEach(function (r) {
    var fig = document.createElement("figure");
    fig.className = "portre-albumu-kart";
    var img = new Image();
    img.src = r.url; img.alt = r.gorsel_alt;
    img.onerror = function () { fig.remove(); };
    fig.appendChild(img);
    var cap = document.createElement("figcaption");
    var ust = [r.eser, r.sanatci, r.yil].filter(Boolean).join(" · ");
    cap.textContent = ust || r.gorsel_alt;
    if (r.gorsel_kaynak) {
      var a = document.createElement("a");
      a.href = r.gorsel_kaynak; a.target = "_blank"; a.rel = "noopener";
      a.textContent = " kaynak" + (r.lisans ? " · " + r.lisans : "");
      cap.appendChild(a);
    }
    fig.appendChild(cap);
    icerik.appendChild(fig);
  });
  pencere.classList.remove("gizli");
}

function _albumDugmeEkle(o, gorseller) {
  var ozel = document.getElementById("ob-ozel");
  if (!ozel) return;
  var kutu = document.createElement("div");
  kutu.className = "ob-kutu";
  var btn = document.createElement("button");
  btn.type = "button";
  btn.style.cursor = "pointer";
  btn.style.padding = "4px 10px";
  btn.style.borderRadius = "4px";
  btn.style.border = "1px solid #0a2f5c";
  btn.style.background = "#fff";
  btn.style.color = "#0a2f5c";
  btn.textContent = "🖼️ Albüm — " + gorseller.length + " görsel";
  btn.addEventListener("click", function () {
    _albumAc((o.b || "Albüm") + " — resim albümü", gorseller);
  });
  kutu.appendChild(btn);
  ozel.appendChild(kutu);
}

// ---- obGoster() SARMALAMA — app.js'e dokunmadan "madde açıldı" bağlantısı ------
(function () {
  if (typeof window.obGoster !== "function") {
    console.warn("ALBÜM: window.obGoster bulunamadı — bağlanamadı (script sırası app.js'ten önce mi?).");
    return;
  }
  var _albumEskiObGoster = window.obGoster;
  function _albumIsleGoster(o) {
    // GORSEL_MADDE app.js'in KENDİ tembel yükleyicisinden geliyor
    // (ekOkumaMerakYukle, app.js:8499) — ilk çağrıda henüz gelmemiş olabilir;
    // maddeGorseliniGuncelle/ekOkumaButonlariGuncelle'nin AYNI bekleme
    // deseni: veri gelince, HÂLÂ AYNI maddedeysek (aktifOlay === o), yeniden dene.
    if (typeof EKOKUMA_DURUM !== "undefined" && !EKOKUMA_DURUM.yuklendi && typeof ekOkumaMerakYukle === "function") {
      ekOkumaMerakYukle(function () { if (typeof aktifOlay === "undefined" || aktifOlay === o) _albumIsleGoster(o); });
      return;
    }
    var gorseller = _albumGorselleriTopla(o);
    if (gorseller.length >= 2) _albumDugmeEkle(o, gorseller);   // "birden çok görsel" şartı
  }
  window.obGoster = function (o) {
    var r = _albumEskiObGoster.apply(this, arguments);
    try { _albumIsleGoster(o); } catch (e) { console.error("[albüm]", e); }
    return r;
  };
})();

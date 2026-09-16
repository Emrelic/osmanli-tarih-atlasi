// ============================================================================
// D KATMANI — 1923'ten geriye sarılan sınırların KOORDİNATLA belirlenmiş hattı.
//
// 16 Eylül 2026 akşamı Emre A-D dört kademeyi A-F ALTI KADEMEYE genişletti
// (oturumlar/GORUNUM-ABCD-0916.md en üst bölüm, BAĞLAYICI):
//   A  sürtünmeli yürüyüş · B  A'nın dolgulu hâli · C  belgeli KABA sınır
//   D  FİİLÎ kesin sınır (koordinatı belli, hukuken geçersiz — işgal/ateşkes hattı)
//   E  HUKUKÎ kesin sınır (barış antlaşması/protokol)  — ESKİ "D" = BU
//   F  E + uluslararası tanınma (Milletler Cemiyeti/büyük devletler)
// İki görünüm: HUKUKÎ = F>E>C (D hiç gösterilmez) · FİİLÎ = D>F>E>C.
// Program: oturumlar/GERIYE-SARMA-0916.md, D-KATMAN satırı.
//
// GEÇİŞ DÖNEMİ: bölge oturumları henüz `sinif` alanını yazmadı (yalnız eski
// `kategori`: D|C|fiili|D-YOK var, hepsi node'da doğrulandı — 16 Eylül 19:40
// itibarıyla 5 dosya, 159 kayıt, `sinif` alanı SIFIR). `_dEtkinSinif` bu
// yüzden `kategori`den GERİ DÜŞÜYOR (eşleme aşağıda, GORUNUM-ABCD'nin kendi
// tablosu): D→E · fiili→D · C→C · D-YOK→YOK. Bir kayıt `sinif` yazınca o
// alan `kategori`nin ÖNÜNE geçer, kod değişmeden.
//
// D_SINIRLAR AİLESİ — oturumlar/GERIYE-SARMA-0916.md §1 Kadro:
//   window.D_SINIRLAR               data/d_sinirlar.js              (D1-TURKIYE)
//   window.D_SINIRLAR_KOMSU         data/d_sinirlar_komsu.js        (D2-KOMSU)
//   window.D_SINIRLAR_AVRUPA_BATI   data/d_sinirlar_avrupa_bati.js  (D3-AVRUPA-BATI)
//   window.D_SINIRLAR_AVRUPA_ORTA   data/d_sinirlar_avrupa_orta.js  (D3-AVRUPA-ORTA)
//   window.D_SINIRLAR_ORTADOGU      data/d_sinirlar_ortadogu.js     (D4-ORTADOGU)
//   window.D_SINIRLAR_AFRIKA        data/d_sinirlar_afrika.js       (D4-AFRIKA)
//   window.D_SINIRLAR_ASYA          data/d_sinirlar_asya.js         (D5-ASYA)
//   window.D_SINIRLAR_AMERIKA       data/d_sinirlar_amerika.js      (D5-AMERIKA)
//   window.D_SINIRLAR_OKYANUSYA     data/d_sinirlar_okyanusya.js    (D5-OKYANUSYA)
// Hepsi Array.isArray ile güvenli kontrol edilir; dosya yoksa sessizce atlanır.
//
// index.html/app.js'e DOKUNULMADI (CLAUDE.md §7 — o dosyalar ARAYÜZ'ün).
// İki entegrasyon noktası kendi içinde çözüldü (bkz. denetim/D-KATMAN-0916.md §2):
//   ① katman kurulumu — kendi `harita.on("load", ...)` dinleyicisi.
//   ② canlı güncelleme — app.js'in global `guncelle()`u monkey-patch ile sarılıyor.
// Görünüm anahtarı (HUKUKÎ/FİİLÎ) de kendi MapLibre `addControl`ıyla kendi
// ekliyor — app.js/index.html'e satır eklemek GEREKMEDİ.
// index.html'e TEK gereken satır: bu dosyanın <script> etiketi, js/app.js'ten
// SONRA (+ data/d_sinirlar*.js dosyalarının kendi <script> etiketleri —
// henüz index.html'e hiçbiri bağlı değil, tahtadan istendi).
// ============================================================================
"use strict";

// ---- SINIF STİLİ / ÖNCELİK ------------------------------------------------
var D_SINIF_ONCELIK_HUKUKI = { F: 3, E: 2, C: 1 };            // D burada YOK
var D_SINIF_ONCELIK_FIILI = { D: 4, F: 3, E: 2, C: 1 };
var D_HAT_RENK = "#0a2f5c";
// 🆕 DALGA-0055 §A madde 2 (1.MURAT) — Osmanlı vasalının sınır çizgisi "açık
// kırmızı" olsun, iç dolgu DEĞİŞMEZ. Renk app.js'in KENDİ vasal-şerit rengiyle
// AYNI (`himaye-serit-ic`, app.js:1508: "line-color": "#d4707d") — yeni bir
// ton İCAT EDİLMEDİ, var olan görsel dille eşleşti. İç dolgu zaten bu dosyada
// HİÇ çizilmiyor (D-KATMAN yalnız çizgi çizer, §9 — GORUNUM-ABCD tasarımı),
// yani "iç dolgu değişmez" şartı otomatik sağlanıyor.
// Kapsam Emre'nin AÇIKÇA saydığı üçle SINIRLI (Eflak/Boğdan/Erdel) — genel
// "her prenslik/vassal" kuralı DEĞİL: devletler.js'te statik bir "vasal"
// bayrağı yok (yalnız `tur:"prenslik"` gibi POLİTİK TÜR var, tâbilik
// yerleşim seviyesinde zaman-pencereli `v:` kaydı — D188 "kümeyi bilmeden
// hüküm verme"). Genişletme istenirse 1.MURAT'a sorulacak (bkz. rapor §…).
var D_VASAL_RENK = "#d4707d";
var D_VASAL_TARAF_IDLERI = { eflak: 1, bogdan: 1, erdel: 1 };
function _dCizgiRengi(kayit) {
  var tf = kayit.taraflar || [];
  for (var i = 0; i < tf.length; i++) if (D_VASAL_TARAF_IDLERI[tf[i]]) return D_VASAL_RENK;
  return D_HAT_RENK;
}
var D_SINIF_STIL = {
  F: { genislik: 3.5, dash: null, opaklik: 1 },       // hukukî + tanınmış — en kalın, düz
  E: { genislik: 2.8, dash: [6, 2], opaklik: 1 },       // hukukî — uzun kesik
  D: { genislik: 2.5, dash: [1, 2], opaklik: 0.75 },    // fiilî/de facto — sık kesik, soluk
  C: { genislik: 2.2, dash: [2, 2], opaklik: 0.85 }     // belge kaba — orta kesik
};
var D_SINIF_ETIKET = {
  F: "hukukî (uluslararası tanınmış)", E: "hukukî", D: "fiilî (de facto, hukuken geçersiz)", C: "belge kaba"
};

// kategori → sinif (GORUNUM-ABCD-0916.md en üst bölümün kendi eşleme tablosu).
// "D kanıtı varsa F" — F kanıtı D-KUNYE'nin tanınma tablosundan (henüz yok,
// denetim/TANINMA-1923-0916.json) gelecek; o gelene kadar eski kategori:"D"
// hep E'ye düşer (temkinli — F'yi kanıtsız iddia etmemek D107'nin kuralı).
function _dEtkinSinif(k) {
  if (k.sinif) return k.sinif;
  if (k.kategori === "D") return "E";
  if (k.kategori === "fiili") return "D";
  if (k.kategori === "C") return "C";
  return "YOK";   // "D-YOK" ya da tanınmayan/eksik kategori
}

function _dHazirMi() {
  return typeof harita !== "undefined" && harita && typeof harita.getSource === "function";
}

// ---- VERİ TOPLAMA ----------------------------------------------------------
var _D_AILELER = [
  "D_SINIRLAR", "D_SINIRLAR_KOMSU", "D_SINIRLAR_AVRUPA_BATI", "D_SINIRLAR_AVRUPA_ORTA",
  "D_SINIRLAR_ORTADOGU", "D_SINIRLAR_AFRIKA", "D_SINIRLAR_ASYA", "D_SINIRLAR_AMERIKA",
  "D_SINIRLAR_OKYANUSYA"
];
function _dKayitlariTopla() {
  var out = [];
  _D_AILELER.forEach(function (ad) {
    var dizi = window[ad];
    if (Array.isArray(dizi)) out = out.concat(dizi);
  });
  return out;
}
var _dIndeksOnbellek = null, _dIndeksSayisi = -1;
function _dKayitIndeksi() {
  var tum = _dKayitlariTopla();
  if (!_dIndeksOnbellek || _dIndeksSayisi !== tum.length) {
    _dIndeksOnbellek = {};
    tum.forEach(function (k) { if (k && k.id) _dIndeksOnbellek[k.id] = k; });
    _dIndeksSayisi = tum.length;
  }
  return _dIndeksOnbellek;
}

// ---- GÖRÜNÜM ANAHTARI -------------------------------------------------------
var _dGorunum = "hukuki";   // "hukuki" | "fiili"

// ---- AKTİF KAYITLAR (pencere) ------------------------------------------------
// 🔴 ÖNCELİK (F>E>C / D>F>E>C) BURADA VERİ BASTIRMASI OLARAK UYGULANMIYOR —
// denendi, GERÇEK VERİYLE ÇÜRÜDÜ (tarayıcıda sınandı, D-KATMAN-0916.md §10):
// ilk tasarım "aynı taraflar (sırasız) + aynı gün aktif ⇒ tek grup, yalnız en
// yüksek sınıf kalır" kuralını kullanıyordu. D1'in `d1923-tr-sy-dogu` (sinif E)
// ve `d1923-tr-sy-bati` (sinif C) kayıtları AYNI taraflar'ı taşıyor ama
// sınırın İKİ AYRI COĞRAFİ PARÇASI (doğu/Hatay-batı) — taraflar-eşleşmesi
// "aynı segmentin alternatifi" ile "aynı devlet çiftinin başka bir parçası"nı
// AYIRT EDEMİYOR, ve grup kuralı `tr-sy-bati`yi HER İKİ görünümde de SESSİZCE
// SİLİYORDU (D089: veri modelinin ifade edemediği bir ilişkiyi ifade edebildiği
// bir ilişkiye çevirmek yaklaşıklama değil BAŞKA BİR İDDİADIR). Şema "aynı
// fiziksel segment" için ortak bir anahtar taşımadığı sürece BASTIRMA YOK —
// öncelik yalnız ÇİZİM SIRASINDA kullanılıyor (bkz. _dKatmaniKur: layer'lar
// C→E→F→D sırayla eklenir, üstteki geometrik çakışmada üstte görünür).
// Açık soru (D-KUNYE/1.MURAT'a): gerçek bir hukukî/fiilî SAPMASI olduğunda
// (aynı segment, iki sınıf) bunu ayırt edecek bir alan (örn. `parca_grubu`
// ya da `sapma_of:"<id>"`) şemaya eklenmeli mi?
function _dAktifKayitlar(gun) {
  var izinliSiniflar = (_dGorunum === "fiili")
    ? { D: 1, F: 1, E: 1, C: 1 }
    : { F: 1, E: 1, C: 1 };            // hukukî görünüm D'yi hiç göstermez
  var sonuc = [];
  _dKayitlariTopla().forEach(function (k) {
    if (!k || !Array.isArray(k.hat) || k.hat.length < 2 || k.f == null) return;
    var sinif = _dEtkinSinif(k);
    if (!izinliSiniflar[sinif]) return;
    var f = gunIdx(k.f);
    if (gun < f) return;
    if (k.t != null && gun >= gunIdx(k.t)) return;   // D061/D195: açık uç BİTİŞE kadar
    sonuc.push({ kayit: k, sinif: sinif });
  });
  return sonuc;
}

// ---- POPUP METNİ ------------------------------------------------------------
function _dDayanakSatirlari(kayit) {
  var d = kayit.dayanak;
  if (!Array.isArray(d) || !d.length) return "";
  var GOSTER = 2;
  var satirlar = d.slice(0, GOSTER).map(function (c) {
    var baslik = c.ad || c.kaynak || "";
    var tarih = c.tarih ? " (" + c.tarih + ")" : "";
    var alinti = c.alinti ? ": “" + c.alinti + "”" : "";
    return ekEsc(baslik + tarih) + (alinti ? ekEsc(alinti) : "");
  });
  if (d.length > GOSTER) satirlar.push("+" + (d.length - GOSTER) + " kaynak daha");
  return satirlar.join("<br>");
}
function _dPopupHtml(kayit, sinif) {
  var ust = "<b>" + ekEsc(kayit.id || "D sınırı") + "</b>";
  var alt = [D_SINIF_ETIKET[sinif] || sinif || ""];
  if (kayit.uzunluk_km != null) alt.push(kayit.uzunluk_km + " km");
  if (kayit.kesinlik_km != null) alt.push("kesinlik ±" + kayit.kesinlik_km + " km");
  var dayanakHtml = _dDayanakSatirlari(kayit);
  return ust + "<br><small>" + alt.filter(Boolean).join(" · ") + "</small>" +
    (dayanakHtml ? "<br><small>" + dayanakHtml + "</small>" : "");
}

// ---- GEOMETRİ / GÜNCELLEME ---------------------------------------------------
var _dAktifImza = null;
function _dSinirGuncelle(gun) {
  if (!_dHazirMi() || !harita.getSource("d-sinir-hat")) return;
  var aktif = _dAktifKayitlar(gun);
  var imza = _dGorunum + "|" + aktif.map(function (a) { return a.kayit.id + ":" + a.sinif; }).join("+");
  if (imza === _dAktifImza) return;
  _dAktifImza = imza;
  var feat = aktif.map(function (a) {
    return {
      type: "Feature",
      properties: { kayit_id: a.kayit.id, sinif: a.sinif, renk: _dCizgiRengi(a.kayit) },
      geometry: { type: "LineString", coordinates: a.kayit.hat }
    };
  });
  harita.getSource("d-sinir-hat").setData({ type: "FeatureCollection", features: feat });
}

// ---- GÖRÜNÜM KONTROLÜ (MapLibre custom control, top-right — boşta) -----------
function _DGorunumKontrolu() {}
_DGorunumKontrolu.prototype.onAdd = function () {
  var el = document.createElement("div");
  el.className = "maplibregl-ctrl maplibregl-ctrl-group";
  el.style.background = "#fff";
  el.style.fontSize = "11px";
  el.style.fontFamily = "inherit";
  var dugmeler = {};
  function boyaDugmeler() {
    Object.keys(dugmeler).forEach(function (deger) {
      var aktif = (_dGorunum === deger);
      dugmeler[deger].style.background = aktif ? D_HAT_RENK : "#fff";
      dugmeler[deger].style.color = aktif ? "#fff" : "#222";
    });
  }
  function dugmeYap(etiket, deger, aciklama) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = etiket;
    b.title = "D sınırları görünümü: " + aciklama;
    b.style.display = "block";
    b.style.width = "100%";
    b.style.border = "none";
    b.style.padding = "4px 8px";
    b.style.cursor = "pointer";
    b.addEventListener("click", function () {
      if (_dGorunum === deger) return;
      _dGorunum = deger;
      boyaDugmeler();
      if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
        _dSinirGuncelle(suanki);
      }
    });
    dugmeler[deger] = b;
    return b;
  }
  el.appendChild(dugmeYap("D: Hukukî", "hukuki", "F > E > C — yalnız barış antlaşması/protokolle kararlaştırılmış sınırlar; fiilî hat gösterilmez"));
  el.appendChild(dugmeYap("D: Fiilî", "fiili", "D > F > E > C — hukuken geçersiz olsa da fiilî/de facto hat varsa O gösterilir"));
  boyaDugmeler();
  this._el = el;
  return el;
};
_DGorunumKontrolu.prototype.onRemove = function () {
  if (this._el && this._el.parentNode) this._el.parentNode.removeChild(this._el);
};

// ---- KATMAN KURULUMU (şemadan bağımsız, kalıcı) -------------------------------
function _dKatmaniKur() {
  if (!_dHazirMi() || harita.getSource("d-sinir-hat")) return;   // iki kez kurma
  try {
    harita.addSource("d-sinir-hat", { type: "geojson", data: bosVeri() });
    // Ekleme sırası = çizim sırası (MapLibre sonra eklenen layer'ı ÜSTE çizer).
    // C→E→F→D: hem HUKUKÎ (F üstte, sonra E, sonra C) hem FİİLÎ (D en üstte)
    // önceliğini TEK sabit sırayla karşılar — iki geometrik olarak çakışan
    // hat varsa (bugün örneği yok) üstteki görünür; veri BASTIRILMAZ (yukarı
    // bkz. _dAktifKayitlar başlığındaki not).
    var SINIFLAR = ["C", "E", "F", "D"];
    SINIFLAR.forEach(function (sinif) {
      var s = D_SINIF_STIL[sinif];
      var paint = { "line-color": ["get", "renk"], "line-width": s.genislik, "line-opacity": s.opaklik };
      if (s.dash) paint["line-dasharray"] = s.dash;
      harita.addLayer({
        id: "d-sinir-hat-" + sinif, type: "line", source: "d-sinir-hat",
        filter: ["==", ["get", "sinif"], sinif],
        layout: { "line-join": "round", "line-cap": "round" },
        paint: paint
      });
    });
    var LAYERS = SINIFLAR.map(function (s) { return "d-sinir-hat-" + s; });
    LAYERS.forEach(function (lyr) {
      harita.on("click", lyr, function (e) {
        var p = e.features[0].properties;
        var kayit = _dKayitIndeksi()[p.kayit_id];
        if (!kayit) return;
        new maplibregl.Popup({ closeButton: true, maxWidth: "280px" })
          .setLngLat(e.lngLat)
          .setHTML(_dPopupHtml(kayit, p.sinif))
          .addTo(harita);
      });
      harita.on("mouseenter", lyr, function () { harita.getCanvas().style.cursor = "pointer"; });
      harita.on("mouseleave", lyr, function () { harita.getCanvas().style.cursor = ""; });
    });
    harita.addControl(new _DGorunumKontrolu(), "top-right");
  } catch (e) {
    console.error("D KATMANI kurulamadı:", e);
  }
}

// Kendi "load" dinleyicisi — app.js'in load işleyicisinden bağımsız.
if (typeof harita !== "undefined" && harita && typeof harita.on === "function") {
  harita.on("load", _dKatmaniKur);
}

// guncelle() SARMALAMA — app.js'e dokunmadan canlı güncelleme.
// `guncelle` app.js'te üst seviyede tanımlı gerçek bir global (IIFE'siz
// dosya) — bu dosya app.js'TEN SONRA yüklenmek ZORUNDADIR.
(function () {
  if (typeof window.guncelle !== "function") {
    console.warn("D KATMANI: window.guncelle bulunamadı — canlı güncelleme BAĞLANAMADI (script sırası app.js'ten önce mi?).");
    return;
  }
  var _dEskiGuncelle = window.guncelle;
  window.guncelle = function () {
    var r = _dEskiGuncelle.apply(this, arguments);
    if (typeof haritaHazir !== "undefined" && haritaHazir && typeof suanki !== "undefined") {
      _dSinirGuncelle(suanki);
    }
    return r;
  };
})();

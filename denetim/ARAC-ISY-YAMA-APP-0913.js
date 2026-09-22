// PAKET-ISYAN · 13 Eylül 2026 · js/app.js yaması (tek sefer).
// node denetim/ARAC-ISY-YAMA-APP-0913.js
// Her çapa TAM BİR KEZ eşleşmeli; eşleşmezse HİÇBİR şey yazılmaz ve çıkış 1.
// Uygulandıktan sonra tekrar koşulursa "zaten uygulanmış" der ve çıkar.
"use strict";
const fs = require("fs"), path = require("path");
const P = path.join(__dirname, "..", "js", "app.js");
let s = fs.readFileSync(P, "utf8");
if (s.indexOf("function isyanGuncelle(") >= 0) { console.log("zaten uygulanmış — çıkılıyor"); process.exit(0); }

const YAMALAR = [];

// ① Katman: işgalin ÜSTÜ, antlaşma farkının ALTI
YAMALAR.push(["katman",
`             "line-dasharray": [3, 2] } });

  // 🆕 PAKET-UI2 — ANTLAŞMA FARKI katmanı`,
`             "line-dasharray": [3, 2] } });

  // 🆕 PAKET-ISYAN — İSYAN TARAMASI (bkz. isyanGuncelle). Emre'nin C2 kararı:
  // tâbi zemin rengi KORUNUR, üstüne ŞEFFAF zeminli tarama biner. İşgalin
  // ÜSTÜNDE, antlaşma farkının ALTINDA. Çizgi katmanı BİLEREK YOK: tarama petek
  // başına çizildiği için kenar çizgisi voyvodalığın içine hücre sınırı çizerdi
  // (vassal-dolgu'dan kesikli çizginin kaldırılma gerekçesiyle aynı).
  isyanDesenleriKur();
  harita.addSource("isyan", agirKaynak());
  harita.addLayer({ id: "isyan-dolgu", type: "fill", source: "isyan",
    paint: { "fill-pattern": ["get", "desen"], "fill-opacity": 0.95 } });

  // 🆕 PAKET-UI2 — ANTLAŞMA FARKI katmanı`]);

// ② Fonksiyonlar: bağlamsal lejant yığınından hemen önce
YAMALAR.push(["fonksiyonlar",
`// ---------- Bağlamsal lejant yığını ----------`,
`// ---------- 🆕 PAKET-ISYAN: isyan taraması (Emre, 13 Eylül 2026 — C2) ----------
// Veri: data/isyan_tarama.js (window.ISYAN_TARAMA) — kaynaklı pencereler.
// Seçici: js/suzgec.js isyanSecim (o gün pencerenin kimliğine TÂBİ görünen
// yerleşimler; d:/s: seçilmez). Geometri: motorun peteği PETEKLER[i].g —
// elle çizim YOK, petek_govde.js YÜKLENMEZ (PETEKLER zaten bellekte).
// İşgal deseninden AYRIMI: ① zemin ŞEFFAF (işgalde sahip rengi basılı, burada
// tâbi rengi alttan görünür) ② SAĞA yatık (x+y) ince çizgi ③ lejant "İsyan".
// 🔴 BÜTÇE: kare başına yalnız pencere anahtarı karşılaştırması (5 pencere);
// seçim + setData ancak aktif pencere KÜMESİ değişince (ölçüm: ARAC-ISY-OLCUM).
// ⚠️ Seçim anahtar değiştiği GÜNÜN sahipliğiyle yapılır; bir pencere içinde
// tâbi kaydı değişirse (bugünkü veride yok, ölçüldü) yeniden seçilmez.
var ISYAN = { anahtar: null, petAd: null, kunyeIx: null, eksik: 0, fs: [] };
function _isyanRenk(tur) {
  if (tur === "habsburg") return (typeof _DEVLET_RENK !== "undefined" && _DEVLET_RENK && _DEVLET_RENK.avusturya) || "#bdab3f";
  return "#2a1608";
}
function isyanDesenleriKur() {
  var K = 10;
  ["isyan", "habsburg"].forEach(function (tur) {
    var ad = "isyan-" + tur;
    if (harita.hasImage && harita.hasImage(ad)) return;
    var c = renkAyir(_isyanRenk(tur)), veri = new Uint8Array(K * K * 4);
    var kalin = tur === "habsburg" ? 3 : 2, alfa = tur === "habsburg" ? 240 : 215;
    for (var y = 0; y < K; y++) {
      for (var x = 0; x < K; x++) {
        if (((x + y) % K) >= kalin) continue;           // şeffaf piksel: tâbi zemin görünür
        var i = (y * K + x) * 4;
        veri[i] = c[0]; veri[i + 1] = c[1]; veri[i + 2] = c[2]; veri[i + 3] = alfa;
      }
    }
    harita.addImage(ad, { width: K, height: K, data: veri });
  });
}
function isyanGuncelle(t) {
  var IT = window.ISYAN_TARAMA;
  if (!haritaHazir || !IT || !IT.pencereler || !harita.getSource("isyan")) return;
  var PN = IT.pencereler, anahtar = "";
  for (var i = 0; i < PN.length; i++) {
    var p = PN[i];
    if (p.gi === undefined) { p.gi = gunIdx(p.f); p.gs = gunIdx(p.t); }
    if (t >= p.gi && t < p.gs) anahtar += p.id + ";";
  }
  if (anahtar === ISYAN.anahtar) return;
  ISYAN.anahtar = anahtar;
  var fs = [], SG = window.SUZGEC;
  ISYAN.eksik = 0;
  if (anahtar && SG && SG.isyanSecim) {
    if (!ISYAN.petAd) {
      ISYAN.petAd = {};
      PETEKLER.forEach(function (q, j) { if (q && q.a) ISYAN.petAd[q.a] = j; });
      ISYAN.kunyeIx = {};
      (window.DEVLETLER || []).forEach(function (k) { if (k && k.id) ISYAN.kunyeIx[k.id] = k; });
    }
    var gs = _khGunStr(t), Y = window.YERLESIMLER || [];
    SG.isyanSecim(Y, SG.isyanAktif(IT, gs), gs, ISYAN.kunyeIx).forEach(function (sec) {
      var pi = ISYAN.petAd[Y[sec.i].ad], pt = (pi === undefined) ? null : PETEKLER[pi];
      if (!pt || !pt.g || !pt.g.length) { ISYAN.eksik++; return; }
      fs.push({ type: "Feature",
                properties: { desen: "isyan-" + sec.p.tur, tur: sec.p.tur, kimlik: sec.p.kimlik,
                              pencere: sec.p.id, ad: Y[sec.i].ad },
                geometry: { type: "MultiPolygon", coordinates: pt.g } });
    });
  } else if (anahtar) {
    console.warn("[isyan taraması] js/suzgec.js eski sürüm (önbellek) — tarama çizilmedi");
  }
  ISYAN.fs = fs;
  harita.getSource("isyan").setData({ type: "FeatureCollection", features: fs });
  isyanLejanti(fs);
}
function isyanLejanti(fs) {
  var el = document.getElementById("isyan-lejant");
  if (!el) {
    el = document.createElement("div");
    el.id = "isyan-lejant";
    el.className = "devir-lejant isyan-lejant";
    document.getElementById("harita").appendChild(el);
  }
  if (!fs.length) { el.style.display = "none"; lejantYerlestir(); return; }
  var LJ = (window.ISYAN_TARAMA && window.ISYAN_TARAMA.lejant) || {}, grup = {}, sira = [];
  fs.forEach(function (f) {
    var k = f.properties.tur;
    if (!grup[k]) { grup[k] = {}; sira.push(k); }
    grup[k][devletAdi(f.properties.kimlik).split(" (")[0]] = 1;
  });
  el.style.display = "";
  el.innerHTML = "<b>İsyan</b>" + sira.map(function (tur) {
    return '<span><i style="background:repeating-linear-gradient(45deg,' + _isyanRenk(tur) +
           ' 0 2px,transparent 2px 6px),#b2384a"></i> ' + (LJ[tur] || tur) + " · " +
           Object.keys(grup[tur]).join(", ") + "</span>";
  }).join("") + (ISYAN.eksik ? '<span class="isyan-eksik">' + ISYAN.eksik + " bölgenin peteği yok, çizilmedi</span>" : "");
  lejantYerlestir();
}
function _isyanTarihYazi(s, kes) {
  var p = String(s).split("-");
  if (kes === "yil") return p[0];
  if (kes === "ay") return AYLAR[(+p[1] || 1) - 1] + " " + p[0];
  return (+p[2]) + " " + AYLAR[(+p[1] || 1) - 1] + " " + p[0];
}
// Bağlı madde (ISYAN_TARAMA.maddeler: t + başlık öneki) açılınca pencere özeti.
// Tarama tarihe bağlıdır: madde açılınca harita o güne gider ve o gün aktif
// pencereler kendiliğinden çizilir — bu kutu yalnız NEYİN niçin tarandığını söyler.
function isyanMaddeKutusu(o, ozelEl) {
  var IT = window.ISYAN_TARAMA;
  if (!IT || !ozelEl || !o || !o.b) return;
  var bagli = (IT.maddeler || []).some(function (m) { return m.t === o.t && o.b.indexOf(m.b) === 0; });
  if (!bagli) return;
  var gs = _khGunStr(o.gi);
  var kutuEl = document.createElement("div");
  kutuEl.className = "ob-kutu ob-isyan";
  var bas = document.createElement("b");
  bas.textContent = "🗺 İsyan taraması (Eflak · Boğdan · Erdel)";
  kutuEl.appendChild(bas);
  (IT.pencereler || []).forEach(function (p) {
    var aktif = p.f <= gs && gs < p.t;
    var durum = aktif ? "bu gün taralı" : (gs < p.f ? "henüz başlamadı" : "sona erdi");
    var kay = [];
    (p.kaynak || []).forEach(function (k) { var a = k.slug ? "TDV " + k.slug : "History of Transylvania"; if (kay.indexOf(a) < 0) kay.push(a); });
    var sat = document.createElement("span");
    sat.className = "isyan-satir" + (aktif ? " aktif" : "");
    sat.textContent = (aktif ? "▣ " : "□ ") + devletAdi(p.kimlik).split(" (")[0] + " · " +
      (p.tur === "habsburg" ? "Habsburg idaresi" : "isyan") + " · " +
      _isyanTarihYazi(p.f, p.kesinlik_f) + " → " + _isyanTarihYazi(p.t, p.kesinlik_t) +
      " · " + durum + " · kaynak: " + kay.join(", ");
    sat.title = p.not || "";
    kutuEl.appendChild(sat);
  });
  var dip = document.createElement("span");
  dip.className = "isyan-dip";
  var gizli = false;
  try { gizli = haritaHazir && harita.getLayer("isyan-dolgu") && harita.getLayoutProperty("isyan-dolgu", "visibility") === "none"; } catch (e) { }
  dip.textContent = "Tâbi rengi korunur, tarama üstüne biner (Emre'nin C2 kararı). Bitiş günü hariçtir; " +
    "ay kesinliğindeki sınırlar ayın 1'ine kodlanmıştır. Ayrıntı ve iç kırılmalar satırın ipucunda." +
    (gizli ? " ⚠️ Siyasî katman kapalı — tarama şu an görünmüyor." : "");
  kutuEl.appendChild(dip);
  ozelEl.appendChild(kutuEl);
}

// ---------- Bağlamsal lejant yığını ----------`]);

// ③ Lejant yığını
YAMALAR.push(["lejant-yigin",
`var LEJANT_YIGIN = ["devir-lejant", "isgal-lejant", "sefer-lejant"];`,
`var LEJANT_YIGIN = ["devir-lejant", "isgal-lejant", "isyan-lejant", "sefer-lejant"];   // PAKET-ISYAN: isyan-lejant`]);

// ④ Gün değişimi zinciri (kırpmada da çizilir: toprak görünümünün parçası)
YAMALAR.push(["zincir",
`  agirOlc("isgalGuncelle", function () { isgalGuncelle(suanki); });`,
`  agirOlc("isgalGuncelle", function () { isgalGuncelle(suanki); });
  // PAKET-ISYAN — kare başına yalnız anahtar karşılaştırması (bkz. isyanGuncelle).
  agirOlc("isyanGuncelle", function () { isyanGuncelle(suanki); });`]);

// ⑤ Katman seçici: Siyasî kovası
YAMALAR.push(["katman-kova",
`|hukuki-sinir-|halka-|antlasma-fark)/ }`,
`|hukuki-sinir-|halka-|antlasma-fark|isyan-)/ }`]);

// ⑥ Madde paneli
YAMALAR.push(["obGoster",
`  try { antlasmaFarkiGoster(o, ozel); } catch (eAnt) { console.error("[antlaşma farkı]", eAnt); }`,
`  try { antlasmaFarkiGoster(o, ozel); } catch (eAnt) { console.error("[antlaşma farkı]", eAnt); }
  // PAKET-ISYAN — isyan taramasına bağlı maddelerde kaynaklı pencere özeti.
  try { isyanMaddeKutusu(o, ozel); } catch (eIsy) { console.error("[isyan taraması]", eIsy); }`]);

// app.js CRLF satır sonu taşıyor: çok satırlı çapalar "\n" ile yazıldı ⇒ dosyanın
// kendi satır sonuna çevrilir (ilk koşuda "katman" çapası bu yüzden 0 eşleşti).
const EOL = s.indexOf("\r\n") >= 0 ? "\r\n" : "\n";
for (const y of YAMALAR) { y[1] = y[1].replace(/\r?\n/g, EOL); y[2] = y[2].replace(/\r?\n/g, EOL); }
let hata = 0;
for (const [ad, eski] of YAMALAR) {
  const n = s.split(eski).length - 1;
  console.log(ad.padEnd(14), "eşleşme", n);
  if (n !== 1) hata++;
}
if (hata) { console.log("✗ YAZILMADI — çapa eşleşmesi 1 değil"); process.exit(1); }
for (const [, eski, yeni] of YAMALAR) s = s.replace(eski, () => yeni);
fs.writeFileSync(P, s, "utf8");
console.log("✓ app.js yazıldı ·", YAMALAR.length, "yama");

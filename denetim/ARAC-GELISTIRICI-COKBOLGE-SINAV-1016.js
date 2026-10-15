// ARAC-GELISTIRICI-COKBOLGE-SINAV-1016 — çok bölgeli geliştirici notu (Emre 16 Ekim 2026:
// "bir post-it notu ve birden çok işaretlenmiş çerçevelenmiş bölge olabilsin").
//
//   node denetim/ARAC-GELISTIRICI-COKBOLGE-SINAV-1016.js        çıkış 0 = hepsi geçti · 1 = biri düştü
//
// TARAYICI YOK, AĞ YOK: js/gelistirici.js `vm` içinde SAHTE DOM + SAHTE harita +
// SAHTE GitHub API (fetch, bellekte issue deposu) ile koşar — 6cd31899e'nin tarayıcıda
// yaptığı sahte API sınavının node karşılığı. Gerçek token / gerçek istek YOK; sahte
// fetch tanımadığı her URL'de sınavı DÜŞÜRÜR.
// Python tarafı: arac/not.py içe aktarılır, `gh` sahtesiyle değiştirilir (ağ yok).
//
// İKİ YÖNDE: ① yeni kod eski (v1) notu okur, üç bölgeli (v2) notu yazar/okur, bölge
// siler · ② tek bölgeli yazım ESKİ KODLA bayt bayt aynıdır · ③ ters yön: ESKİ kod
// (32e2b48e7 / 6cd31899e) v2 notu OKUYAMAZ — sınav farkı görüyor demektir.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), os = require("os");
const { execSync, spawnSync } = require("child_process");

const KOK = path.resolve(__dirname, "..");
const ESKI_JS = "32e2b48e7", ESKI_PY = "6cd31899e";   // değişiklikten önceki son sürümler
let gecti = 0, dustu = 0;
function sina(ad, kosul, ayrinti) {
  if (kosul) { gecti++; console.log("  ✓ " + ad); }
  else { dustu++; console.log("  ✗ " + ad + (ayrinti ? "  →  " + ayrinti : "")); }
}

// ------------------------------------------------------------- sahte DOM
class El {
  constructor(tag) {
    this.tagName = String(tag).toUpperCase(); this.children = []; this.style = {}; this.className = "";
    this._l = {}; this._a = {}; this.parentElement = null; this._t = ""; this.id = "";
    this.disabled = false; this.type = ""; this.title = ""; this.placeholder = ""; this.rows = 0; this.selected = false;
    if (this.tagName === "SELECT") {
      let v = null;
      Object.defineProperty(this, "value", {
        get: () => v != null ? v : ((this.children.filter(c => c.selected)[0] || this.children[0] || {}).value),
        set: x => { v = String(x); } });
    } else this.value = "";
  }
  get classList() {
    const s = this, l = () => s.className.split(/\s+/).filter(Boolean);
    return { add: c => { if (!l().includes(c)) s.className = l().concat(c).join(" "); },
             remove: c => { s.className = l().filter(x => x !== c).join(" "); },
             toggle: (c, f) => { const v = f === undefined ? !l().includes(c) : f;
                                 if (v) s.classList.add(c); else s.classList.remove(c); return v; },
             contains: c => l().includes(c) };
  }
  appendChild(c) { c.parentElement = this; this.children.push(c); return c; }
  remove() { const p = this.parentElement; if (p) p.children = p.children.filter(x => x !== this); this.parentElement = null; }
  set innerHTML(v) { this.children = []; this._t = ""; }
  get innerHTML() { return ""; }
  set textContent(v) { this._t = String(v); this.children = []; }
  get textContent() { return this._t + this.children.map(c => c.textContent).join(""); }
  addEventListener(t, f) { (this._l[t] = this._l[t] || []).push(f); }
  setAttribute(k, v) { this._a[k] = String(v); }
  getAttribute(k) { return this._a[k] == null ? null : this._a[k]; }
  querySelector() { return null; }
  querySelectorAll() { return []; }
  closest() { return null; }
  focus() {} setPointerCapture() {} scrollIntoView() {}
  getBoundingClientRect() { return { left: 0, top: 0, right: 100, bottom: 100, width: 100, height: 100 }; }
}
function agac(kok, f, l) { l = l || []; if (f(kok)) l.push(kok); kok.children.forEach(c => agac(c, f, l)); return l; }

// ------------------------------------------------------------- gün ekseni
const GUN0 = Date.UTC(1000, 0, 1);
function gunIdx(s) { const m = String(s).match(/^(\d{4})-(\d{2})-(\d{2})/); return m ? Math.round((Date.UTC(+m[1], m[2] - 1, +m[3]) - GUN0) / 864e5) : 0; }
function dizgi(gi) { return new Date(GUN0 + gi * 864e5).toISOString().slice(0, 10); }

// ------------------------------------------------------------- ortam kur
// kaynak: gelistirici.js metni · döner: {ctx, api, harita, markerlar}
function ortam(kaynak) {
  const body = new El("body"), kap = new El("div"), tuval = new El("canvas");
  const kaynaklar = {}, katmanlar = [], markerlar = [], istekler = [];
  const harita = {
    getSource: id => kaynaklar[id],
    addSource: (id, o) => { kaynaklar[id] = { data: o.data, setData(d) { this.data = d; } }; },
    addLayer: l => katmanlar.push(l),
    isStyleLoaded: () => true, once() {}, getCanvas: () => tuval, getContainer: () => kap,
    unproject: p => ({ lng: p[0], lat: p[1] }),
    project: ll => ({ x: ll[0], y: ll[1] }),
    // Sahte boya: boylam < 30 Osmanlı · ≥ 40 Safevî · arası boyasız. {layers} tek
    // başına gelirse "harita çizili mi" sorusudur → evet.
    queryRenderedFeatures: (a) => {
      if (a && a.layers) return [{}];
      if (a.x < 30) return [{ layer: { id: "osmanli-dolgu" }, properties: {} }];
      if (a.x >= 40) return [{ layer: { id: "devlet-dolgu" }, properties: { id: "SAFEVI" } }];
      return [];
    },
    getCenter: () => ({ lng: 30, lat: 38 }), getZoom: () => 5.2,
    getBounds: () => ({ getWest: () => 10, getSouth: () => 28, getEast: () => 50, getNorth: () => 46 }),
    dragPan: { enable() {}, disable() {} }, doubleClickZoom: { enable() {}, disable() {} }, boxZoom: { enable() {}, disable() {} },
    fitBounds: b => { harita._fit = b; }
  };
  class Marker {
    constructor(o) { this.el = o.element; this.kalkti = false; markerlar.push(this); }
    setLngLat(ll) { this.ll = ll; return this; }
    addTo() { return this; }
    remove() { this.kalkti = true; }
    getElement() { return this.el; }
  }
  // SAHTE GitHub API — bellekte issue deposu. Tanımadığı URL → hata (sınav düşer).
  const api = { issues: [], sayac: 0, istekler };
  function fetch(url, o) {
    o = o || {}; istekler.push((o.method || "GET") + " " + url);
    const yol = url.replace("https://api.github.com", "");
    const yanit = (d, st) => Promise.resolve({ ok: true, status: st || 200, json: () => Promise.resolve(d), text: () => Promise.resolve("") });
    if (!url.startsWith("https://api.github.com/")) return Promise.reject(new Error("SAHTE API: dış URL " + url));
    if (yol === "/user") return yanit({ login: "emrelic" });
    if (yol === "/repos/emrelic/osmanli-tarih-atlasi") return yanit({ permissions: { push: true } });
    if (yol === "/repos/emrelic/osmanli-tarih-atlasi/issues" && o.method === "POST") {
      const g = JSON.parse(o.body), no = ++api.sayac;
      const is = { number: no, title: g.title, body: g.body, labels: g.labels.map(n => ({ name: n })),
                   html_url: "https://github.com/x/" + no, comments: 0, state: "open" };
      api.issues.push(is); return yanit(is, 201);
    }
    if (yol.startsWith("/repos/emrelic/osmanli-tarih-atlasi/issues?")) return yanit(api.issues.slice());
    return Promise.reject(new Error("SAHTE API: tanınmayan istek " + yol));
  }
  class SabitTarih extends Date { constructor(...a) { a.length ? super(...a) : super("2026-10-16T09:00:00.000Z"); } }
  const document = {
    body, readyState: "complete", createElement: t => new El(t), addEventListener() {},
    getElementById: id => agac(body, e => e.id === id)[0] || null,
    querySelector: () => null, querySelectorAll: () => []
  };
  const ctx = {
    document, harita, maplibregl: { Marker }, fetch, console,
    localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    _l: {}, addEventListener: function (t, f) { (this._l[t] = this._l[t] || []).push(f); },
    location: { search: "" }, innerWidth: 1440, innerHeight: 900, devicePixelRatio: 1,
    CSS: { escape: s => s }, Date: SabitTarih, JSON, Math, Object, Array, String, Promise, Error,
    setTimeout: (f, ms) => { const t = setTimeout(f, ms); if (t.unref) t.unref(); return t; },
    clearTimeout, setInterval: () => 0, confirm: () => true,
    suanki: gunIdx("1600-06-15"), olaylar: [], olayDom: [], suankiOlayI: -1,
    ZAMAN: { suankiOlay: () => -1 }, GUN: { dizgi }, gunIdx, idxYazi: gi => "Y" + dizgi(gi),
    gunKonum: gi => gi, ZAMAN_KONUM_MAX: 1e6, tarihAyarla() {}, olayaGit() {},
    DEVLETLER: [{ id: "SAFEVI", ad: "Safevî Devleti" }],
    YERLESIMLER: [
      { ad: "Selanik", lon: 21, lat: 41, d: [{ f: "1430-03-29", t: "1912-11-08" }] },
      { ad: "Tebriz", lon: 45, lat: 38, s: [{ d: "SAFEVI", f: "1501-01-01", t: "1736-01-01" }] }
    ],
    YERLESIMLER_EK: [{ ad: "Kudüs", lon: 35.2, lat: 31.8, d: [{ f: "1516-12-30", t: "1917-12-09" }] }]
  };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(kaynak, ctx, { filename: "gelistirici.js" });
  const ic = ctx.GELISTIRICI._ic, G = ctx.GELISTIRICI.G;
  G.acik = true; G.kim = "emrelic";
  // gn-form vb. kutular aracKur'da açılır; burada elle kurulur.
  ["gn-form", "gn-panel", "gn-liste"].forEach(id => { const d = new El("div"); d.id = id; d.style.display = "none"; body.appendChild(d); });
  harita.addSource("gn-cizim", { data: { type: "FeatureCollection", features: [] } });
  harita.addSource("gn-notlar", { data: { type: "FeatureCollection", features: [] } });
  return { ctx, ic, G, api, harita, markerlar, kaynaklar, body };
}
const bekle = () => new Promise(r => setImmediate(r));
async function tik(n) { for (let i = 0; i < (n || 5); i++) await bekle(); }

// Bölgeler (lon,lat): 1 kare Selanik'i kapsar · 2 daire Tebriz'i · 3 kalem boş (Kudüs yakın)
const KARE = { sekil: "kare", geo: [[20, 40], [22, 40], [22, 42], [20, 42], [20, 40]] };
function daire(m, r, n) { const l = []; for (let i = 0; i < n; i++) { const t = i / n * 2 * Math.PI; l.push([m[0] + r * Math.cos(t), m[1] + r * Math.sin(t)]); } l.push(l[0].slice()); return l; }
const DAIRE = { sekil: "daire", geo: daire([45, 38], 1, 16), merkez: [45, 38], yaricap_km: 111 };
const KALEM = { sekil: "kalem", geo: [[33, 33], [34, 33.5], [34.5, 34], [33.5, 34.6], [33, 33]] };
const kopya = o => JSON.parse(JSON.stringify(o));
const JSKOD = fs.readFileSync(path.join(KOK, "js/gelistirici.js"), "utf8");
function jsonCoz(body) { const m = body.match(/<!--\s*atlas-not v1\s*([\s\S]*?)\s*-->/); return m ? JSON.parse(m[1]) : null; }
function formDugme(o, metin) { return agac(o.ctx.document.getElementById("gn-form"), e => e.tagName === "BUTTON" && e.textContent.indexOf(metin) >= 0); }
function formMetin(o) { return agac(o.ctx.document.getElementById("gn-form"), e => e.tagName === "TEXTAREA")[0]; }
function formSatir(o) { return agac(o.ctx.document.getElementById("gn-form"), e => e.className === "gn-bolge-satir"); }

(async function () {
  // ESKİ kod — git'ten okunur (diske yazılmaz), iç işlevleri sınav için dışa açılır.
  const eskiJs = execSync("git show " + ESKI_JS + ":js/gelistirici.js", { cwd: KOK, encoding: "utf8" })
    .replace("window.GELISTIRICI = { G: G, yukle: notlariYukle, DURUM: DURUM };",
             "window.GELISTIRICI = { G: G, yukle: notlariYukle, DURUM: DURUM, _ic: { govdeYaz: govdeYaz, baglamTopla: baglamTopla, notCoz: notCoz, haritaNotlariGuncelle: haritaNotlariGuncelle } };");
  if (eskiJs.indexOf("_ic: {") < 0) { console.log("eski kod dışa açılamadı"); process.exit(1); }

  // ---------------------------------------------------------------- 1
  console.log("1 · ESKİ BİÇİM (v1, tek bölge — #1-#20 gibi) yeni kodla okunur ve çizilir");
  const E = ortam(eskiJs);
  const v1hedef = Object.assign({ tur: "harita" }, kopya(KARE));
  const v1v = E.ic.baglamTopla(v1hedef); // görünürlük formun hesabıyla aynı: ± 1 yıl = ± 365 gün
  v1v.gorunur = { f: dizgi(gunIdx("1600-06-15") - 365), t: dizgi(gunIdx("1600-06-15") + 365) };
  const v1govde = E.ic.govdeYaz("Selanik çevresi 1600'de yanlış boyalı", v1v);   // ESKİ kodun yazdığı gövde
  const v1is = { number: 7, title: "[1600-06-15] Selanik", body: v1govde, labels: [{ name: "harita-notu" }, { name: "not:acik" }], html_url: "u7", comments: 0, state: "open" };
  const Y = ortam(JSKOD);
  const n1 = Y.ic.notCoz(v1is), r1 = Y.ic.bolgeler(n1.veri);
  sina("v1 not çözülür", !!n1 && n1.no === 7);
  sina("v1 → tam 1 bölge, no 1, şekil kare", r1.length === 1 && r1[0].no === 1 && r1[0].sekil === "kare");
  sina("v1 bölgenin geo'su aynen", JSON.stringify(r1[0].geo) === JSON.stringify(KARE.geo));
  sina("v1 bağlamı (veri.bolge) bölgeye bağlı, Selanik içinde",
       r1[0].baglam && r1[0].baglam.icindeki_yerlesimler.some(x => x.ad === "Selanik"));
  Y.G.notlar = [n1]; Y.G.gorunen = null; Y.ic.haritaNotlariGuncelle();
  let f = Y.kaynaklar["gn-notlar"].data.features;
  sina("v1 haritada: 1 poligon, 0 bağ çizgisi", f.filter(x => x.geometry.type === "Polygon").length === 1 &&
       f.filter(x => x.geometry.type === "LineString").length === 0, JSON.stringify(f.map(x => x.geometry.type)));
  let canli = Y.markerlar.filter(m => !m.kalkti);
  sina("v1 haritada: 1 post-it, 0 bölge numarası", canli.filter(m => /gn-postit/.test(m.el.className)).length === 1 &&
       canli.filter(m => /gn-bolge-no/.test(m.el.className)).length === 0);
  sina("v1 post-it yeri ESKİSİYLE AYNI (bölge merkezi)", JSON.stringify(canli[0].ll) === JSON.stringify([21, 41]), JSON.stringify(canli[0].ll));

  // ---------------------------------------------------------------- 2
  console.log("2 · TEK BÖLGELİ YAZIM eski kodla BAYT BAYT aynı (geriye uyum yazımda da)");
  const Y2 = ortam(JSKOD);
  Y2.ic.bolgeEkle(kopya(KARE), false);
  sina("tek bölge çizilince form açılır", Y2.ctx.document.getElementById("gn-form").style.display === "block");
  formMetin(Y2).value = "Selanik çevresi 1600'de yanlış boyalı";
  agac(Y2.ctx.document.getElementById("gn-form"), e => e.tagName === "SELECT")[0].value = "2";   // ± 1 yıl
  formDugme(Y2, "Kaydet")[0].onclick(); await tik();
  const yeniTek = Y2.api.issues[0];
  sina("tek bölgeli not kaydedildi", !!yeniTek);
  sina("tek bölgeli gövde === eski kodun gövdesi", yeniTek && yeniTek.body === v1govde,
       yeniTek && ("ilk fark: " + [...yeniTek.body].findIndex((c, i) => c !== v1govde[i])));

  // ---------------------------------------------------------------- 3
  console.log("3 · ÜÇ BÖLGELİ NOT (kare + daire + kalem, Shift ile ardışık) yazılır ve okunur");
  const Y3 = ortam(JSKOD);
  Y3.ic.bolgeEkle(kopya(KARE), true);
  Y3.ic.bolgeEkle(kopya(DAIRE), true);
  sina("Shift'li iki çizimde form AÇILMAZ, taslak 2", Y3.ctx.document.getElementById("gn-form").style.display !== "block" && Y3.G.taslak.length === 2);
  sina("taslak bölgeler haritada numaralı (1, 2)", Y3.G.taslakNo.map(m => m.el.textContent).join(",") === "1,2");
  Y3.ic.bolgeEkle(kopya(KALEM), false);
  sina("Shift'siz üçüncü çizimde form açılır", Y3.ctx.document.getElementById("gn-form").style.display === "block");
  sina("formda 3 numaralı bölge satırı", formSatir(Y3).length === 3 &&
       formSatir(Y3).map(s => s.children[0].textContent).join(",") === "1,2,3");
  sina("taslak çizimi: 3 poligon + 3 numara", Y3.kaynaklar["gn-cizim"].data.features.length === 3 && Y3.G.taslakNo.filter(m => !m.kalkti).length === 3);
  formMetin(Y3).value = "Üç yerde aynı kusur: sınır kayık";
  formDugme(Y3, "Kaydet")[0].onclick(); await tik();
  const is3 = Y3.api.issues[0], j3 = is3 && jsonCoz(is3.body);
  sina("üç bölgeli not kaydedildi (sahte API)", !!is3 && !!j3);
  sina("JSON: surum 2, hedef.bolgeler 3 (no 1,2,3), v1 alanları YOK",
       j3.surum === 2 && j3.hedef.bolgeler.map(b => b.no).join(",") === "1,2,3" && !j3.hedef.geo && !j3.bolge);
  sina("JSON: her bölgenin bağlamı ayrı (bolgeler[] 3, no eşli)", Array.isArray(j3.bolgeler) && j3.bolgeler.map(b => b.no).join(",") === "1,2,3");
  sina("bölge 1 bağlamı: Osmanlı + Selanik içinde",
       j3.bolgeler[0].sahipler[0].id === "OSMANLI" && j3.bolgeler[0].icindeki_yerlesimler.map(x => x.ad).join() === "Selanik");
  sina("bölge 2 bağlamı: Safevî + Tebriz içinde",
       j3.bolgeler[1].sahipler[0].id === "SAFEVI" && j3.bolgeler[1].icindeki_yerlesimler.map(x => x.ad).join() === "Tebriz");
  sina("bölge 3 bağlamı: içi boş, en yakın Kudüs",
       j3.bolgeler[2].icindeki_yerlesim_sayisi === 0 && j3.bolgeler[2].en_yakin_yerlesimler[0].ad === "Kudüs");
  sina("daire bölgesi yarıçapını taşır", j3.hedef.bolgeler[1].yaricap_km === 111);
  sina("insan okur gövde: 'Hedef: harita · 3 bölge' + Bölge 1/2/3 başlıkları",
       /\*\*Hedef:\*\* harita · 3 bölge/.test(is3.body) && [1, 2, 3].every(k => is3.body.indexOf("- **Bölge " + k + "** (") >= 0));
  sina("insan okur gövde: bölge 3'te 'YOK — peteğe emilmiş' uyarısı", /Bölge 3[\s\S]*YOK — bölge en yakın peteğe/.test(is3.body));
  sina("kayıttan sonra taslak boşaldı", Y3.G.taslak.length === 0 && Y3.G.taslakNo.filter(m => !m.kalkti).length === 0);
  const n3 = Y3.G.notlar.filter(n => n.no === is3.number)[0], r3 = n3 && Y3.ic.bolgeler(n3.veri);
  sina("okuyucu: 3 bölge, bağlamları no ile eşli", r3 && r3.length === 3 && r3.every(r => r.baglam && r.baglam.no === r.no));
  Y3.G.gorunen = null; Y3.ic.haritaNotlariGuncelle();
  f = Y3.kaynaklar["gn-notlar"].data.features;
  const pt = Y3.ic.postitYeri(r3);
  sina("haritada: 3 poligon + 3 bağ çizgisi", f.filter(x => x.geometry.type === "Polygon").length === 3 &&
       f.filter(x => x.geometry.type === "LineString").length === 3);
  sina("bağ çizgileri post-it'ten başlar", f.filter(x => x.geometry.type === "LineString").every(x => JSON.stringify(x.geometry.coordinates[0]) === JSON.stringify(pt)));
  canli = Y3.markerlar.filter(m => !m.kalkti);
  const postit = canli.filter(m => /gn-postit/.test(m.el.className));
  sina("TEK post-it, üstünde '3'", postit.length === 1 && postit[0].el.textContent === "3");
  sina("haritada 3 bölge numarası (1,2,3)", canli.filter(m => /gn-bolge-no/.test(m.el.className)).map(m => m.el.textContent).join(",") === "1,2,3");
  Y3.ctx.suanki = gunIdx("1700-01-01"); Y3.ic.haritaNotlariGuncelle();
  sina("görünürlük aralığı not başına: dışında bütün bölgeler + post-it + numaralar kalkar",
       Y3.kaynaklar["gn-notlar"].data.features.length === 0 && Y3.markerlar.every(m => m.kalkti));
  Y3.ctx.suanki = gunIdx("1600-06-15"); Y3.ic.notaGit(n3);
  sina("'Git' bütün bölgeleri kapsayan kutuya uçar", JSON.stringify(Y3.harita._fit) === JSON.stringify([[20, 33], [46, 42]]), JSON.stringify(Y3.harita._fit));

  // ---------------------------------------------------------------- 4
  console.log("4 · BÖLGE SİLME ve '➕ Bölge ekle'");
  const Y4 = ortam(JSKOD);
  Y4.ic.bolgeEkle(kopya(KARE), true); Y4.ic.bolgeEkle(kopya(DAIRE), true); Y4.ic.bolgeEkle(kopya(KALEM), false);
  formMetin(Y4).value = "silme sınavı";
  formSatir(Y4)[1].children[2].onclick();                // bölge 2 (daire) ✕
  sina("bölge 2 silindi: kalan kare, kalem", Y4.G.taslak.map(b => b.sekil).join(",") === "kare,kalem");
  sina("form yeniden numaralı (1,2) ve metin KORUNDU",
       formSatir(Y4).map(s => s.children[0].textContent).join(",") === "1,2" && formMetin(Y4).value === "silme sınavı");
  sina("taslak çizim 2 poligon + 2 numara", Y4.kaynaklar["gn-cizim"].data.features.length === 2 && Y4.G.taslakNo.filter(m => !m.kalkti).map(m => m.el.textContent).join(",") === "1,2");
  formDugme(Y4, "Bölge ekle")[0].onclick();
  sina("'➕ Bölge ekle': form gizlenir, son şeklin kipi açılır", Y4.ctx.document.getElementById("gn-form").style.display === "none" && Y4.G.kip === "kalem" && Y4.G.ekleniyor);
  Y4.ic.bolgeEkle(kopya(DAIRE), false);
  sina("eklenen bölgeyle forma dönülür: 3 satır, metin korundu", formSatir(Y4).length === 3 && formMetin(Y4).value === "silme sınavı");
  formSatir(Y4)[0].children[2].onclick();                 // kare ✕
  formDugme(Y4, "Kaydet")[0].onclick(); await tik();
  const j4 = jsonCoz(Y4.api.issues[0].body);
  sina("silmeden sonra kayıt: 2 bölge, yeniden numaralı (1 kalem, 2 daire)",
       j4.hedef.bolgeler.map(b => b.no + b.sekil).join(",") === "1kalem,2daire" && j4.bolgeler.length === 2);
  const Y5 = ortam(JSKOD);
  Y5.ic.bolgeEkle(kopya(KARE), true); Y5.ic.bolgeEkle(kopya(DAIRE), false);
  formMetin(Y5).value = "teke düştü";
  formSatir(Y5)[1].children[2].onclick();
  formDugme(Y5, "Kaydet")[0].onclick(); await tik();
  const j5 = jsonCoz(Y5.api.issues[0].body);
  sina("bire inen not v1 biçiminde yazılır (hedef.geo + bolge, surum 1)", j5.surum === 1 && Array.isArray(j5.hedef.geo) && !!j5.bolge && !j5.hedef.bolgeler);
  const Y6 = ortam(JSKOD);
  Y6.ic.bolgeEkle(kopya(KARE), false);
  formSatir(Y6)[0].children[2].onclick();
  sina("bütün bölgeler silinince Kaydet kapalı", formDugme(Y6, "Kaydet")[0].disabled === true && formSatir(Y6).length === 0);

  const tus = (o, key) => (o.ctx._l.keydown || []).forEach(f => f({ key, stopPropagation() {}, preventDefault() {} }));
  const Y7 = ortam(JSKOD);
  Y7.ic.kipAyarla("kare"); Y7.ic.bolgeEkle(kopya(KARE), true); Y7.ic.bolgeEkle(kopya(KARE), true);
  tus(Y7, "Enter");
  sina("Shift'le iki bölge + Enter → forma geçilir (2 satır)", Y7.ctx.document.getElementById("gn-form").style.display === "block" && formSatir(Y7).length === 2);
  const Y8 = ortam(JSKOD);
  Y8.ic.kipAyarla("daire"); Y8.ic.bolgeEkle(kopya(DAIRE), true);
  tus(Y8, "Escape");
  sina("çizim kipinde Esc → taslak tamamen silinir, form açılmaz", Y8.G.taslak.length === 0 && Y8.G.kip === null &&
       Y8.ctx.document.getElementById("gn-form").style.display !== "block");
  const Y9 = ortam(JSKOD);
  Y9.ic.bolgeEkle(kopya(KARE), false); formMetin(Y9).value = "kalsın"; formDugme(Y9, "Bölge ekle")[0].onclick();
  tus(Y9, "Escape");
  sina("'Bölge ekle'den Esc → forma dönülür, bölge ve metin korunur", Y9.ctx.document.getElementById("gn-form").style.display === "block" &&
       Y9.G.taslak.length === 1 && formMetin(Y9).value === "kalsın");
  const Y10 = ortam(JSKOD);
  Y10.ic.kipAyarla("kalem"); Y10.ic.bolgeEkle(kopya(KALEM), true); Y10.ic.kipAyarla("kalem");
  sina("Shift'le bölge biriktirip aynı araç düğmesine basınca forma geçilir", Y10.ctx.document.getElementById("gn-form").style.display === "block" && formSatir(Y10).length === 1);

  // ---------------------------------------------------------------- 5
  console.log("5 · TERS YÖN — ESKİ okuyucu v2'yi göremez (sınav farkı ölçüyor)");
  const E2 = ortam(eskiJs);
  const eskiN = E2.ic.notCoz(is3);
  let eskiCizdi = true;
  try { E2.G.notlar = [eskiN]; E2.G.gorunen = null; E2.ic.haritaNotlariGuncelle();
        eskiCizdi = E2.kaynaklar["gn-notlar"].data.features.length === 3; } catch (e) { eskiCizdi = false; }
  sina("eski gelistirici.js üç bölgeyi ÇİZEMEZ (beklenen)", !eskiCizdi);

  // ---------------------------------------------------------------- 6
  console.log("6 · arac/not.py iki biçimi okur (py, sahte gh — ağ yok)");
  const gec = fs.mkdtempSync(path.join(os.tmpdir(), "cokbolge-"));
  fs.writeFileSync(path.join(gec, "v1.json"), JSON.stringify(v1is));
  fs.writeFileSync(path.join(gec, "v2.json"), JSON.stringify(is3));
  const eskiPy = execSync("git show " + ESKI_PY + ":arac/not.py", { cwd: KOK, encoding: "utf8" });
  fs.writeFileSync(path.join(gec, "not_eski.py"), eskiPy);
  fs.writeFileSync(path.join(gec, "kos.py"), [
    "import sys, json, io, contextlib, importlib.util",
    "def yukle(ad, yol):",
    "    s = importlib.util.spec_from_file_location(ad, yol); m = importlib.util.module_from_spec(s); s.loader.exec_module(m); return m",
    "m = yukle('not_yeni', sys.argv[1]); e = yukle('not_eski', sys.argv[2])",
    "iss = {k: json.load(open(sys.argv[3] + '/' + k + '.json', encoding='utf-8')) for k in ('v1', 'v2')}",
    "def sahte(hedef):",
    "    def gh(yol, *a, **k):",
    "        if yol.startswith('/issues/') and yol.endswith('comments?per_page=100'): return []",
    "        if yol.startswith('/issues/'): return hedef",
    "        if yol.startswith('/issues?'): return [iss['v1'], iss['v2']]",
    "        raise RuntimeError('SAHTE gh: tanınmayan ' + yol)",
    "    return gh",
    "class A: pass",
    "def oku(mod, k):",
    "    mod.gh = sahte(iss[k]); a = A(); a.no = iss[k]['number']; b = io.StringIO()",
    "    try:",
    "        with contextlib.redirect_stdout(b): mod.k_oku(a)",
    "    except Exception as x: return 'ISTISNA ' + type(x).__name__",
    "    return b.getvalue()",
    "def liste(mod):",
    "    mod.gh = sahte(None); a = A(); a.hepsi = False; a.durum = None; b = io.StringIO()",
    "    with contextlib.redirect_stdout(b): mod.k_liste(a)",
    "    return b.getvalue()",
    "print(json.dumps({'y1': oku(m, 'v1'), 'e1': oku(e, 'v1'), 'y2': oku(m, 'v2'), 'e2': oku(e, 'v2'), 'liste': liste(m),",
    "                  'b1': len(m.bolgeler(m.coz(iss['v1'])[0])), 'b2': [r['no'] for r in m.bolgeler(m.coz(iss['v2'])[0])]}))"
  ].join("\n"));
  const p = spawnSync("py", ["-X", "utf8", path.join(gec, "kos.py"), path.join(KOK, "arac/not.py"), path.join(gec, "not_eski.py"), gec],
                      { encoding: "utf8", env: Object.assign({}, process.env, { PYTHONIOENCODING: "utf-8", ATLAS_GH_TOKEN: "", GITHUB_TOKEN: "" }) });
  let P = null;
  try { P = JSON.parse(p.stdout); } catch (e) { console.log(p.stdout, p.stderr); }
  sina("py koştu", !!P, p.stderr && p.stderr.slice(0, 300));
  if (P) {
    sina("not.py bolgeler(): v1 → 1 · v2 → [1,2,3]", P.b1 === 1 && P.b2.join(",") === "1,2,3");
    sina("not.py oku v1: çıktı ESKİ not.py'nin çıktısıyla AYNEN", P.y1 === P.e1 && P.y1.indexOf("[bağlam JSON — bolge]") >= 0 && P.y1.indexOf("[geo halkası]") >= 0);
    sina("not.py oku v2: 3 bölge başlığı numarasıyla",
         P.y2.indexOf("[3 bölge — tek not, tek post-it]") >= 0 && P.y2.indexOf("[bölge 1 · kare]") >= 0 &&
         P.y2.indexOf("[bölge 2 · daire · r ≈ 111 km]") >= 0 && P.y2.indexOf("[bölge 3 · kalem]") >= 0);
    sina("not.py oku v2: her bölgenin bağlam JSON'u + geo halkası",
         [1, 2, 3].every(k => P.y2.indexOf("[bağlam JSON — bölge " + k + "]") >= 0 && P.y2.indexOf("[geo halkası — bölge " + k + "]") >= 0) &&
         P.y2.indexOf('"ad": "Tebriz"') >= 0);
    sina("not.py liste: v2 '3 bölge: kare, daire, kalem', v1 'harita (kare)'",
         P.liste.indexOf("harita (3 bölge: kare, daire, kalem)") >= 0 && P.liste.indexOf("harita (kare)") >= 0);
    sina("TERS YÖN: eski not.py v2'yi okuyamaz (beklenen)", /^ISTISNA/.test(P.e2) || P.e2.indexOf("[bölge 1") < 0);
  }
  fs.rmSync(gec, { recursive: true, force: true });

  const yasak = [].concat(Y.api.istekler, Y2.api.istekler, Y3.api.istekler, Y4.api.istekler, Y5.api.istekler)
    .filter(u => !/ https:\/\/api\.github\.com\/repos\/emrelic\/osmanli-tarih-atlasi\/issues$/.test(u));
  sina("sahte API dışına / beklenmeyen uca istek YOK", yasak.length === 0, yasak.join(" | "));

  console.log("\nSONUÇ: " + gecti + " geçti · " + dustu + " düştü");
  process.exit(dustu ? 1 : 0);
})().catch(e => { console.log("SINAV ÇÖKTÜ:", e && e.stack); process.exit(1); });

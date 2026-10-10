// HARITA-ON-YUZ-1010 — bant/B ön yüz sınavının JS koşucusu.
// js/app.js'ten GERÇEK işlevleri (adıyla, parantez sayarak) çeker, sahte bir
// harita + DOM içinde koşturur. Python sürücüsü: ARAC-BANT-ON-YUZ-SINAV-1010.py
// Kullanım: node <bu> <app.js yolu>  → stdout'a JSON sonuç
"use strict";
const fs = require("fs"), vm = require("vm");
const KAYNAK = fs.readFileSync(process.argv[2], "utf8");

function islevCek(ad) {
  const bas = KAYNAK.search(new RegExp("^function " + ad + "\\(", "m"));
  if (bas < 0) throw new Error("işlev yok: " + ad);
  let i = KAYNAK.indexOf("{", bas), d = 0, q = null;
  for (; i < KAYNAK.length; i++) {
    const c = KAYNAK[i], n = KAYNAK[i + 1];
    if (q) { if (c === "\\") { i++; continue; } if (c === q) q = null; continue; }
    if (c === "/" && n === "/") { i = KAYNAK.indexOf("\n", i); continue; }
    if (c === "/" && n === "*") { i = KAYNAK.indexOf("*/", i) + 1; continue; }
    if (c === '"' || c === "'") { q = c; continue; }
    if (c === "{") d++;
    if (c === "}" && --d === 0) return KAYNAK.slice(bas, i + 1);
  }
  throw new Error("kapanmadı: " + ad);
}
function satirCek(desen) {
  const m = KAYNAK.match(desen);
  if (!m) throw new Error("satır yok: " + desen);
  return m[0];
}

// ---- sahte dünya ----
function dunyaKur() {
  const W = {
    katman: { "ufuk-bant-alan": "none" }, kaynak: {}, setDataSay: 0,
    betikler: [], rozet: { textContent: "" },
  };
  W.harita = {
    getLayoutProperty: (id, p) => { if (!(id in W.katman)) throw new Error("katman yok"); return W.katman[id]; },
    setLayoutProperty: (id, p, v) => { W.katman[id] = v; },
    getSource: (id) => ({ setData: (v) => { W.kaynak[id] = v; W.setDataSay++; } }),
  };
  function radyo(v) { return { name: "ufuk-gun", value: String(v), checked: v === 5, disabled: v > 5 }; }
  const radyolar = [radyo(5), radyo(7), radyo(10)];
  W.radyolar = radyolar;
  const dinleyici = {};
  const seg = {
    title: "",
    addEventListener: (t, f) => { dinleyici[t] = f; },
    querySelectorAll: () => radyolar,
    closest: () => ({ classList: { toggle() {} }, addEventListener() {} }),
  };
  W.tetikle = (v) => dinleyici.change({ target: radyolar.find(r => r.value === String(v)) });
  const dolguLabel = { title: "", classList: { add(c) { dolguLabel.sinif = c; } }, em: { textContent: "" },
                       querySelector: () => dolguLabel.em };
  const dolguKutu = { checked: true, disabled: false, closest: () => dolguLabel };
  W.dolguKutu = dolguKutu; W.dolguLabel = dolguLabel;
  W.document = {
    getElementById: (id) => id === "ufuk-segment" ? seg : id === "kat-sayi-ufuk" ? W.rozet : null,
    querySelector: (s) => /data-katman="dolgu"/.test(s) ? dolguKutu : null,
    createElement: () => { const s = {}; W.betikler.push(s); return s; },
    head: { appendChild: () => {} },
  };
  return W;
}

function baglamKur(W, ek) {
  const ctx = {
    harita: W.harita, document: W.document, console: { debug() {}, warn() {}, error() {}, log() {} },
    performance: { now: () => 0 }, window: {}, fetch: () => new Promise(() => {}),
    suanki: 100, bosVeri: () => ({ type: "FeatureCollection", features: [] }),
    parcaCoz: (g) => ({ type: "MultiPolygon", coordinates: g.length ? [[[[0, 0], [1, 0], [1, 1], [0, 0]]]] : [] }),
    aktifAralik: (fi, ti, t) => fi <= t && t < ti,
    gunIdx: (s) => parseInt(String(s).slice(0, 4), 10),
    DOLGU_RENK: { OSMANLI: "#8e0b22", bizans: "#6a1b9a", venedik: "#1565c0" },
    dolgular: [],
  };
  vm.createContext(ctx);
  const parca = [
    satirCek(/^var ACIK_TON_KAT = .*$/m),
    "var ufukGun = 5, ufukVeri = null, ufukHavuz = [], ufukParca = [], ufukYukleniyor = false, ufukBekleyen = [], ufukImza = null, ufukHata = null;",
    satirCek(/^var UFUK_BICIMLER = .*$/m), satirCek(/^var UFUK_DOSYALAR = .*$/m),
  ].concat(["renkAyir", "acikTon", "ufukAcik", "ufukRozet", "ufukSurum", "ufukYukle",
            "ufukGuncelle", "ufukSecimEsitle", "ufukSeciciKur", "bVeriKapisi"].map(islevCek));
  vm.runInContext(parca.join("\n"), ctx);
  if (ek) vm.runInContext(ek, ctx);
  return ctx;
}

function sahteBant() {
  // 3 birikimli bant, her birinde 3 devlet; tümü t=100'de etkin
  const kayit = (d) => ({ d, fi: 50, ti: 150, g: [1], ft: null });
  return [5, 7, 10].map(g => ({ ad: "<=" + g, gun: g, dnm: ["bizans", "venedik", "OSMANLI"].map(kayit) }));
}

function lab(h) {
  const c = [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16) / 255)
    .map(v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const X = (0.4124 * c[0] + 0.3576 * c[1] + 0.1805 * c[2]) / 0.95047;
  const Y = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  const Z = (0.0193 * c[0] + 0.1192 * c[1] + 0.9505 * c[2]) / 1.08883;
  const t = v => v > 0.008856 ? Math.cbrt(v) : 7.787 * v + 16 / 116;
  return [116 * t(Y) - 16, 500 * (t(X) - t(Y)), 200 * (t(Y) - t(Z))];
}
const dE = (a, b) => Math.hypot(...lab(a).map((v, i) => v - lab(b)[i]));

const S = {};
function sina(ad, f) { try { const r = f(); S[ad] = { ok: !!r.ok, ...r }; } catch (e) { S[ad] = { ok: false, hata: String(e) }; } }

// T1 — A (5): bant çizilmez, dosya İNDİRİLMEZ
sina("T1_A_cizilmez_indirilmez", () => {
  const W = dunyaKur(), C = baglamKur(W);
  C.ufukSeciciKur();
  W.tetikle(5);
  C.ufukVeri = sahteBant(); C.ufukGuncelle(100);   // veri olsa bile 5'te çizmemeli
  const oz = (W.kaynak["ufuk-bant"] || { features: [] }).features.length;
  return { ok: W.betikler.length === 0 && oz === 0 && W.katman["ufuk-bant-alan"] === "none",
           betik: W.betikler.length, ozellik: oz, gorunurluk: W.katman["ufuk-bant-alan"] };
});
// T2/T3 — 7 ve 10: katman çizilir, YALNIZ seçili bant, renk devletin AÇIĞI
function cizim(g) {
  const W = dunyaKur(), C = baglamKur(W);
  C.ufukVeri = sahteBant(); C.ufukGun = g; W.katman["ufuk-bant-alan"] = "visible";
  C.ufukGuncelle(100);
  const fs_ = (W.kaynak["ufuk-bant"] || { features: [] }).features;
  const des = fs_.map(f => ({ kim: f.properties.kim, renk: f.properties.renk, dE: dE(C.DOLGU_RENK[f.properties.kim], f.properties.renk) }));
  return { fs_, des, C };
}
for (const g of [7, 10]) {
  sina("T" + (g === 7 ? 2 : 3) + "_" + g + "_yalniz_secili_bant_acik_renk", () => {
    const { fs_, des, C } = cizim(g);
    const banttan = new Set(fs_.map(f => C.ufukVeri.findIndex(b => b.dnm.some(r => r.ft === f))));
    const beklenen = C.ufukVeri.findIndex(b => b.gun === g);
    const minDE = Math.min(...des.map(d => d.dE));
    return { ok: fs_.length === 3 && banttan.size === 1 && banttan.has(beklenen) && minDE > 1.0,
             ozellik: fs_.length, bantlar: [...banttan], minDE: +minDE.toFixed(2),
             renkler: des.map(d => d.kim + ":" + d.renk + " ΔE " + d.dE.toFixed(1)) };
  });
}
// T4 — bant dosyası YOK: beyanlı hâl (rozet sebep söyler), SESSİZ boş değil
sina("T4_bant_dosyasi_yok_beyanli", () => {
  const W = dunyaKur(), C = baglamKur(W);
  C.ufukSeciciKur();
  W.tetikle(7);
  const s = W.betikler[0]; if (!s) return { ok: false, neden: "betik istenmedi" };
  s.onerror();
  const isaretli = W.radyolar.filter(r => r.checked).map(r => r.value);
  return { ok: W.rozet.textContent.trim().length > 0 && W.katman["ufuk-bant-alan"] === "none" && isaretli.join() === "5",
           rozet: W.rozet.textContent, isaretli, gorunurluk: W.katman["ufuk-bant-alan"] };
});
// T5 — dolgu.js YOK: B anahtarı beyanlı (pasif + gerekçe), çökme yok
sina("T5_dolgu_yok_B_beyanli", () => {
  const W = dunyaKur(), C = baglamKur(W);
  C.bVeriKapisi();
  return { ok: W.dolguKutu.disabled === true && W.dolguKutu.checked === false &&
               /üretilmedi/.test(W.dolguLabel.title) && /üretilmedi/.test(W.dolguLabel.em.textContent),
           disabled: W.dolguKutu.disabled, title: W.dolguLabel.title, em: W.dolguLabel.em.textContent };
});
// Ek: acikTon sınır değerleri
sina("T6_acikTon_formulu", () => {
  const W = dunyaKur(), C = baglamKur(W);
  const o = C.acikTon("#8e0b22"), b = C.acikTon("#ffffff"), s = C.acikTon("#000000");
  return { ok: o === "#a53c4e" && b === "#ffffff" && s === "#333333",
           osmanli: o, beyaz: b, siyah: s, dE_osmanli: +dE("#8e0b22", o).toFixed(1) };
});
process.stdout.write(JSON.stringify(S));

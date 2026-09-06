// KÖRFEZ ÜÇLÜSÜ — çakışma GERÇEK Mİ, yoksa ÜST KÜME Mİ?
//
// `_sahiplik_uygula.py` "≥2 dosya AYNI alanı yazıyor VE değerler farklı"
// deyince ÇAKIŞMA basar. Ama iki yama biri ötekinin ÜST KÜMESİ olabilir
// (Kasr-ı Şîrîn'de böyle çıkmıştı) — o zaman karar mekaniktir, hüküm
// gerekmez.
//
// 🔴 GÖZLE BAKIP "aynı görünüyor" DEMEK ÖLÇÜM DEĞİLDİR. Bu alet dönemleri
//    ALAN ALAN karşılaştırır ve farkı ADIYLA basar.
//
// KULLANIM:  node denetim/ARAC-KORFEZ-USTKUME-0906.js

const fs = require("fs"), vm = require("vm");
const HEDEF = ["Doha (Katar)", "Kuveyt", "Manama (Bahreyn)"];

function oku() {
  const kayit = {};   // ad -> { dosya -> y }
  for (const f of fs.readdirSync("data")) {
    if (!/^yer(lesim|_yama).*\.js$/.test(f)) continue;
    const d = { window: {} };
    vm.createContext(d);
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), d); } catch (e) { continue; }
    for (const k of Object.keys(d.window)) {
      const A = d.window[k];
      if (!Array.isArray(A)) continue;
      for (const y of A) if (y && HEDEF.indexOf(y.ad) >= 0) {
        (kayit[y.ad] = kayit[y.ad] || {})[f] = y;
      }
    }
  }
  return kayit;
}

// bir donemi karsilastirilabilir bir anahtara cevir
const anah = (p) => p.f + "|" + p.t + "|" + (p.d || "");
// donemin TUM alanlari
const tam = (p) => JSON.stringify(Object.keys(p).sort().reduce((o, k) => (o[k] = p[k], o), {}));

const K = oku();
for (const ad of HEDEF) {
  const dosyalar = K[ad] || {};
  const temel = dosyalar["yerlesimler.js"];
  const yamalar = Object.keys(dosyalar).filter((f) => f !== "yerlesimler.js");
  console.log("");
  console.log("═══ " + ad + " ═══");
  console.log("  taban: yerlesimler.js" + (temel ? "" : "  (YOK)"));
  for (const f of yamalar) {
    const y = dosyalar[f];
    const notlar = [];
    for (const alan of ["d", "s", "v", "isg"]) {
      const A = (y[alan] || []), T = ((temel || {})[alan] || []);
      if (!A.length) continue;
      const Tanah = new Set(T.map(anah));
      const Aanah = new Set(A.map(anah));
      const ayni = A.length === T.length && A.every((p) => Tanah.has(anah(p)));
      // alan alan fark
      const ekAlan = new Set();
      for (const p of A) {
        const e = T.find((q) => anah(q) === anah(p));
        if (e) for (const k of Object.keys(p)) if (!(k in e)) ekAlan.add(k);
      }
      const eksik = T.filter((q) => !Aanah.has(anah(q))).map(anah);
      const yeni = A.filter((p) => !Tanah.has(anah(p))).map(anah);
      let hkm;
      if (ayni && !ekAlan.size) hkm = "TABANLA AYNI (no-op)";
      else if (ayni && ekAlan.size) hkm = "UST KUME — yalniz alan EKLIYOR: " + [...ekAlan].join(",");
      else hkm = "FARKLI  yeni:[" + yeni.join(" ") + "]  dusen:[" + eksik.join(" ") + "]";
      notlar.push("    " + alan + ": " + hkm);
    }
    console.log("  " + f);
    notlar.forEach((n) => console.log(n));
    if (!notlar.length) console.log("    (d/s/v/isg alani yok — skaler yama)");
  }
}

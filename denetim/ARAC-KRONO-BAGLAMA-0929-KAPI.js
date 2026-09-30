// ARAC-KRONO-BAGLAMA-0929-KAPI.js — `app.js`in iki kronoloji bindiricisini
// (derinKronolojiBindir + cokTarafliKronolojiEkle) GERÇEK kaynağından çalıştırır.
// `denetim/ARAC-KRONO-BAGLAMA-0929-KAPI.py` çağırır; stdout'a tek JSON.
//
// 🔴 Mantık KOPYALANMAZ (CLAUDE.md §9 odak dersi): iki IIFE `js/app.js`ten
//    başlangıç/bitiş işaretleriyle KESİLİR ve bir vm bağlamında koşar. Sonuç
//    DAVRANIŞTAN okunur: bir `KRONOLOJI_*` dizisi koşudan sonra bir künyenin
//    `.kronoloji`si OLMUŞSA bağlıdır; olmamışsa eşlenmemiştir. Koşudan önce
//    dolu olan künye kronolojisi dosyayla değişmişse EZİLMİŞTİR.
//    `app.js` değişirse bu ölçüm kendiliğinden takip eder.
//
// GİRDİ argv[2] = JSON { kok, dosyalar:[yol…] (index.html sırası, app.js'ten ÖNCEKİLER), app }
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const G = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const loglar = [];
const konsol = {
  log: (...a) => loglar.push(["log", a.join(" ")]),
  warn: (...a) => loglar.push(["warn", a.join(" ")]),
  error: (...a) => loglar.push(["error", a.join(" ")]),
  info: () => {}, debug: () => {},
};
const ctx = vm.createContext({ console: konsol });
ctx.window = ctx; ctx.self = ctx;

const yuklemeHatasi = [];
for (const d of G.dosyalar) {
  try {
    vm.runInContext(fs.readFileSync(path.resolve(G.kok, d), "utf8"), ctx, { filename: d });
  } catch (e) { yuklemeHatasi.push(d + ": " + String(e && e.message || e).slice(0, 200)); }
}

// ---- iki IIFE'yi app.js'ten KES -------------------------------------------
const app = fs.readFileSync(path.join(G.kok, G.app), "utf8");
const BAS = "var KRONOLOJI_ID_OZEL";
const SON = "(function odakKur()";
const i0 = app.indexOf(BAS), i1 = app.indexOf(SON);
if (i0 < 0 || i1 < 0 || i1 <= i0 || app.indexOf(BAS, i0 + 1) >= 0) {
  process.stdout.write(JSON.stringify({ hata: "app.js işaretleri bulunamadı ya da tekil değil", i0, i1 }));
  process.exit(0);
}
const kesit = app.slice(i0, i1);
if (kesit.indexOf("derinKronolojiBindir") < 0 || kesit.indexOf("cokTarafliKronolojiEkle") < 0) {
  process.stdout.write(JSON.stringify({ hata: "kesit iki IIFE'yi içermiyor" }));
  process.exit(0);
}

// ---- koşudan ÖNCE fotoğraf ------------------------------------------------
const D = ctx.DEVLETLER || [];
const once = {};                                   // id -> özgün künye dizisi
D.forEach(d => { if (d && d.id) once[d.id] = d.kronoloji || null; });
const tekAnahtar = Object.keys(ctx).filter(k => k.slice(0, 10) === "KRONOLOJI_" &&
  !/^KRONOLOJI_(SINIR|COK)_/.test(k) && Array.isArray(ctx[k]) && ctx[k].length);
const cokAnahtar = Object.keys(ctx).filter(k => /^KRONOLOJI_(SINIR|COK)_[A-Z0-9_]+$/.test(k));

vm.runInContext(kesit, ctx, { filename: G.app + "#kronoloji-kesiti" });

// ---- DAVRANIŞTAN oku -----------------------------------------------------
const kisa = m => ({ t: m.t, b: m.b });
const bagli = [], eslenmeyen = [], ezilen = [];
tekAnahtar.forEach(k => {
  const dizi = ctx[k];
  const alan = D.filter(d => d && d.kronoloji === dizi);
  // cok-tarafli ekleyici künyenin dizisini .slice() ile kopyalayabilir; kopyada
  // dosyanın İLK maddesi nesne olarak aynıdır ⇒ ikinci işaret.
  const alan2 = alan.length ? alan : D.filter(d => d && Array.isArray(d.kronoloji) &&
    dizi.length && d.kronoloji.indexOf(dizi[0]) >= 0 && d.kronoloji !== once[d.id]);
  if (!alan2.length) {
    eslenmeyen.push({ anahtar: k, madde: dizi.length });
    return;
  }
  alan2.forEach(d => {
    bagli.push({ anahtar: k, id: d.id, madde: dizi.length });
    const eski = once[d.id];
    if (eski && eski.length && eski !== dizi) {
      // künyenin özgün maddelerinden koşudan sonra EKRANDA OLMAYANLAR (nesne kimliğiyle);
      // bunlardan aynı `t`de bir dosya maddesi kalanlar "yerine geçen", kalmayanlar KAYIP
      const son = d.kronoloji || [];
      const kayip = eski.filter(m => son.indexOf(m) < 0);
      const karsiliksiz = kayip.filter(m => !son.some(o => o.t === m.t));
      if (kayip.length)
        ezilen.push({ anahtar: k, id: d.id, kunye_madde: eski.length, dosya_madde: dizi.length,
                      kayip: kayip.length, karsiliksiz: karsiliksiz.length,
                      kunye: eski.map(kisa), dosya: dizi.map(kisa), karsiliksiz_madde: karsiliksiz.map(kisa) });
    }
  });
});

process.stdout.write(JSON.stringify({
  dosya_sayisi: G.dosyalar.length, yukleme_hatasi: yuklemeHatasi,
  kunye: D.length, tek_anahtar: tekAnahtar.length, cok_anahtar: cokAnahtar.length,
  bagli, eslenmeyen, ezilen,
  app_konsol: loglar.filter(l => /KRONOLOJ|kronoloji/.test(l[1])),
}));

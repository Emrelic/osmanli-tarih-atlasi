// OYNATMA YAMASI SINAVI — ikili arama, eski lineer taramaya EŞDEĞER Mİ?
//
// `js/app.js` "zaman akışı" dalında, aralıkta kalan SON olayı bulan lineer
// tarama ikili aramayla değiştirildi. Eşdeğerlik VARSAYILMAZ, ölçülür:
// gerçek kronoloji dizisi üzerinde iki mantık yan yana koşturulur.
//
// 🔴 `C13` gereği İKİ YÖNDE de sınanır:
//    GEÇME    : binlerce rastgele aralıkta iki mantık AYNI cevabı vermeli
//    ATEŞLEME : bilerek bozulmuş bir ikili arama YAKALANMALI — yoksa sınav
//               "her zaman geçen" bir sınavdır ve hiçbir şey ölçmez.
//
// KULLANIM:  node denetim/ARAC-OYNATMA-SINAV-0906.js

const fs = require("fs"), vm = require("vm");
const c = { window: {} };
vm.createContext(c);
for (const f of fs.readdirSync("data")) {
  if (/^olaylar.*\.js$/.test(f)) {
    try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), c); } catch (e) {}
  }
}
let O = [];
for (const k of Object.keys(c.window)) {
  if (/^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(c.window[k])) {
    O = O.concat(c.window[k]);
  }
}
const gi = (t) => {
  const s = t.length === 7 ? t + "-01" : t;
  return Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +s.slice(8, 10)) / 864e5);
};
const olaylar = O.filter((o) => o && o.t).map((o) => ({ gi: gi(o.t), b: o.b }))
  .sort((a, b) => a.gi - b.gi);

console.log("kronoloji maddesi: " + olaylar.length);
console.log("aralik: " + olaylar[0].gi + " .. " + olaylar[olaylar.length - 1].gi);

// ── eski: lineer tarama ────────────────────────────────────────────────
function eski(onceki, suanki) {
  let son = null;
  for (let i = 0; i < olaylar.length; i++) {
    const g = olaylar[i].gi;
    if (g > onceki && g <= suanki) son = olaylar[i];
    else if (g > suanki) break;
  }
  return son;
}

// ── yeni: ikili arama ──────────────────────────────────────────────────
function yeni(onceki, suanki, boz) {
  let lo = 0, hi = olaylar.length;
  while (lo < hi) {
    const or = (lo + hi) >> 1;
    // `boz` ATEŞLEME sınavı içindir: `<=` yerine `<` kullanmak sınır
    // vakalarını kaydırır. Sınav bunu YAKALAMAZSA sınav bozuktur.
    if (boz ? olaylar[or].gi < suanki : olaylar[or].gi <= suanki) lo = or + 1;
    else hi = or;
  }
  return (lo > 0 && olaylar[lo - 1].gi > onceki) ? olaylar[lo - 1] : null;
}

function kosu(boz) {
  const ilk = olaylar[0].gi - 400, son = olaylar[olaylar.length - 1].gi + 400;
  let ayrisan = 0, denendi = 0;
  // ① rastgele araliklar
  let x = 20260906;
  const rnd = () => (x = (x * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
  for (let n = 0; n < 40000; n++) {
    const a = ilk + Math.floor(rnd() * (son - ilk));
    const b = a + Math.floor(rnd() * 400);
    denendi++;
    const e = eski(a, b), y = yeni(a, b, boz);
    if ((e ? e.gi : -1) !== (y ? y.gi : -1)) ayrisan++;
  }
  // ② SINIR vakalari: her maddenin TAM gunu — kaydirmalar burada yakalanir
  for (const o of olaylar) {
    for (const [a, b] of [[o.gi - 1, o.gi], [o.gi, o.gi], [o.gi - 1, o.gi - 1],
                          [o.gi, o.gi + 1], [o.gi - 2, o.gi + 2]]) {
      denendi++;
      const e = eski(a, b), y = yeni(a, b, boz);
      if ((e ? e.gi : -1) !== (y ? y.gi : -1)) ayrisan++;
    }
  }
  return { denendi, ayrisan };
}

console.log("");
const g = kosu(false);
console.log("GECME YOLU   : " + g.denendi.toLocaleString("tr-TR") +
            " vaka · ayrisan " + g.ayrisan);
const a = kosu(true);
console.log("ATESLEME YOLU: " + a.denendi.toLocaleString("tr-TR") +
            " vaka · ayrisan " + a.ayrisan + "  (bilerek bozulmus arama)");
console.log("");
if (g.ayrisan === 0 && a.ayrisan > 0) {
  console.log("[OK] Ikili arama eski lineer taramaya ESDEGER,");
  console.log("     ve sinav bozuk bir aramayi YAKALIYOR.");
  process.exit(0);
}
if (g.ayrisan !== 0) console.log("[X] ESDEGER DEGIL — " + g.ayrisan + " vaka ayrisiyor");
if (a.ayrisan === 0) console.log("[X] SINAV BOZUK — bozulmus aramayi yakalamiyor");
process.exit(1);

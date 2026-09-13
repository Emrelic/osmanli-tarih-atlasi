// PAKET-A1 · 0042/H-0003 — "yalnız toprak değişimi" süzgecinin ölçümü (salt okuma)
// Kullanım: node denetim/ARAC-A1-TOPRAK-0913.js [--liste]
// js/suzgec.js toprakIndeksleri()'ni app.js ile AYNI evrende koşar:
//   maddeler  = window.OLAYLAR* (kapsam:"konu" hariç), gi'ye göre sıralı
//   kırılmalar = window.DONEMLER[i].f  (i ≥ 1) — haritanın ÇİZDİĞİ değişim günleri
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const S = require(path.join(KOK, "js/suzgec.js"));
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1])
  .filter(f => /olaylar|donemler/.test(f));
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of dosyalar) {
  try { vm.runInContext(fs.readFileSync(path.join(KOK, f), "utf8"), ctx, { filename: f }); }
  catch (e) { console.log("YUKLENEMEDI", f, e.message); }
}
const AY = { Ocak:1, Şubat:2, Mart:3, Nisan:4, Mayıs:5, Haziran:6, Temmuz:7, Ağustos:8, Eylül:9, Ekim:10, Kasım:11, Aralık:12 };
const gunIdx = s => { const p = s.split("-"); return Math.round(Date.UTC(+p[0], (+p[1] || 1) - 1, +p[2] || 1) / 864e5); };
const gunMetniIdx = (gun, v) => {
  if (!gun) return v;
  const m = gun.match(/(\d{1,2})\s+(Ocak|Şubat|Mart|Nisan|Mayıs|Haziran|Temmuz|Ağustos|Eylül|Ekim|Kasım|Aralık)/), y = gun.match(/(\d{4})/);
  return (m && y) ? gunIdx(y[1] + "-" + AY[m[2]] + "-" + m[1]) : v;
};
const olaylar = Object.keys(ctx).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(ctx[k]))
  .flatMap(k => ctx[k]).filter(o => o && o.t && o.kapsam !== "konu")
  .map(o => Object.assign({ gi: o.t.split("-").length > 2 ? gunIdx(o.t) : gunMetniIdx(o.gun, gunIdx(o.t)) }, o))
  .sort((a, b) => a.gi - b.gi);
const D = ctx.DONEMLER || [];
const kir = D.slice(1).map(d => gunIdx(d.f));
const r = S.toprakIndeksleri(olaylar.map(o => o.gi), kir, 30);
const isaretli = Object.keys(r.isaretli).map(Number).sort((a, b) => a - b);
console.log("madde:", olaylar.length, "| DONEMLER:", D.length, "| kırılma günü:", r.kirilma,
            "| maddeli:", r.maddeli, "| maddesiz (>30 g):", r.maddesiz);
console.log("toprak maddesi (işaretli):", isaretli.length, "/", olaylar.length);
// k: etiketiyle karşılaştırma — etiketten türetmek ne verirdi
const etiket = olaylar.filter(o => /^(fetih|kayip)$/.test(o.k || "")).length;
const kesisim = isaretli.filter(i => /^(fetih|kayip)$/.test(olaylar[i].k || "")).length;
console.log("k:fetih|kayip taşıyan:", etiket, "| bunlardan işaretli:", kesisim,
            "| işaretli ama k başka:", isaretli.length - kesisim);
// Sınav: bilinen iki kırılma
for (const [ad, g] of [["İstanbul 1453-05-29", "1453-05-29"], ["Mohaç 1526-08-29", "1526-08-29"]]) {
  const gi = gunIdx(g), i = olaylar.findIndex(o => o.gi === gi);
  console.log("  sınav", ad, "→ madde", i >= 0 ? (r.isaretli[i] ? "İŞARETLİ" : "işaretsiz") : "yok", i >= 0 ? olaylar[i].b.slice(0, 50) : "");
}
if (process.argv.includes("--liste")) for (const i of isaretli) console.log("  " + olaylar[i].t + "  " + (olaylar[i].b || "").slice(0, 70));

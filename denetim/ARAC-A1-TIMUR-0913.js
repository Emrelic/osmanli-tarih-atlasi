// PAKET-A1 · 0042/H-0035 + H-0036 — Timur sefer oklarının görünürlük penceresi
// Kullanım: node denetim/ARAC-A1-TIMUR-0913.js
// app.js seferGuncelle()'nin _fiKirpik/_tiKirpik kuralını (038e686 Seçenek B
// dahil) app.js'teki `olaylar` ile AYNI evrende (window.OLAYLAR* , dunyaAcik
// yokken kapsam:"konu" hariç) yeniden üretir; her Timur seferi için okun
// hangi kronoloji maddelerinde ekranda olduğunu listeler. Salt okuma.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const dosyalar = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
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
const yaz = i => new Date(i * 864e5).toISOString().slice(0, 10);
const olaylar = Object.keys(ctx).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(ctx[k]))
  .flatMap(k => ctx[k]).filter(o => o && o.t && o.kapsam !== "konu")
  .map(o => Object.assign({ gi: o.t.split("-").length > 2 ? gunIdx(o.t) : gunMetniIdx(o.gun, gunIdx(o.t)) }, o))
  .sort((a, b) => a.gi - b.gi);
console.log("olaylar (app evreni):", olaylar.length);
for (const s of (ctx.SEFERLER || []).filter(s => /Timur/.test(s.ad))) {
  const fi = gunIdx(s.f), ti = gunIdx(s.t);
  let once = -Infinity; for (const o of olaylar) if (o.gi < ti && o.gi > once) once = o.gi;
  let bas = isFinite(once) ? Math.max(fi, once) : fi;
  const eskiBas = bas;
  bas = Math.min(bas, fi + Math.floor((ti - fi) / 2));
  let sonra = Infinity; for (const o of olaylar) if (o.gi > ti && o.gi < sonra) sonra = o.gi;
  const son = isFinite(sonra) ? sonra : ti;
  const icinde = olaylar.filter(o => o.gi >= bas && o.gi < son);
  const eskiIcinde = olaylar.filter(o => o.gi >= eskiBas && o.gi < son);
  console.log("\n" + s.ad + "  f:" + s.f + " t:" + s.t);
  console.log("  görünür pencere  " + yaz(bas) + " → " + yaz(son) + "  (" + (son - bas) + " gün) · Seçenek B öncesi başlangıç " + yaz(eskiBas));
  console.log("  okun göründüğü madde: " + icinde.length + " (B öncesi " + eskiIcinde.length + ")");
  for (const o of icinde) console.log("    " + o.t + "  " + (o.b || "").slice(0, 70));
}

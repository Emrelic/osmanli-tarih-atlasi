// ③ ATIF ÖLÇÜMÜ — eşlenmeyen KRONOLOJI_* dosyalarının maddelerine künye atfı.
// argv[2] = kök · argv[3..] = dosyalar (data/kronoloji_x.js). stdout: JSON.
// Otomatik atıf kaynakları (sırayla; ilk tutan yazılır, hepsi kayda geçer):
//   ALAN   maddenin kendi devlet/devletler/taraflar alanı gerçek künye id'si
//   ETIKET etiket[] içinde gerçek künye id'si
//   BASLIK başlıkta künyenin tam adı (yalnız TEK künye adı geçiyorsa)
// Künye id'si UYDURULMAZ: devletler.js'ten okunur.
const fs = require("fs"), path = require("path"), vm = require("vm");
const kok = process.argv[2];
const ctx = vm.createContext({ console }); ctx.window = ctx;
vm.runInContext(fs.readFileSync(path.join(kok, "data/devletler.js"), "utf8"), ctx);
const D = ctx.DEVLETLER;
const ix = {}; D.forEach(d => ix[d.id] = d);
const norm = s => String(s || "").replace(/İ/g, "i").replace(/I/g, "ı").toLowerCase()
  .normalize("NFKD").replace(/[̀-ͯ]/g, "");
// ad sözlüğü: künye `ad` (parantezsiz) — 5 harften kısa adlar (belirsiz) alınmaz
const adlar = [];
D.forEach(d => {
  [d.ad].concat(d.adlar || d.diger_adlar || []).forEach(a => {
    const n = norm(String(a || "").split(" (")[0]).trim();
    if (n.length >= 5) adlar.push([n, d.id]);
  });
});
const sonuc = {};
for (const f of process.argv.slice(3)) {
  const onceK = new Set(Object.keys(ctx));
  vm.runInContext(fs.readFileSync(path.join(kok, f), "utf8"), ctx, { filename: f });
  const anahtar = Object.keys(ctx).filter(k => !onceK.has(k) && /^KRONOLOJI_/.test(k))[0];
  const dizi = ctx[anahtar] || [];
  const alanlar = {}; const maddeler = [];
  dizi.forEach((m, i) => {
    Object.keys(m).forEach(k => alanlar[k] = (alanlar[k] || 0) + 1);
    const ham = [].concat(m.taraflar || m.devletler || (m.devlet ? [m.devlet] : []));
    const alan = ham.filter(x => ix[x]), alanYok = ham.filter(x => !ix[x]);
    const etk = [].concat(m.etiket || m.etiketler || []).filter(x => typeof x === "string" && ix[x]);
    const b = norm(m.b) + " " + norm(m.a || "");
    const bas = [...new Set(adlar.filter(([n]) => new RegExp("(^|[^a-z])" + n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z]|$)").test(norm(m.b))).map(x => x[1]))];
    let atif = null, yol = null;
    if (alan.length) { atif = alan; yol = "ALAN"; }
    else if (etk.length) { atif = [...new Set(etk)]; yol = "ETIKET"; }
    else if (bas.length === 1) { atif = bas; yol = "BASLIK"; }
    maddeler.push({ i, t: m.t, b: m.b, ham, alanYok, etk, bas, atif, yol });
  });
  sonuc[f] = { anahtar, madde: dizi.length, alanlar, maddeler };
}
process.stdout.write(JSON.stringify(sonuc));

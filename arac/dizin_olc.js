// DIZIN EKSIKSIZLIK OLCUMU (salt okuma). Kullanim: node arac/dizin_olc.js [--json]
// index.html'deki <script src="data/..."> dosyalarini bir vm icinde yukler, window.* kurar.
const fs = require("fs"), vm = require("vm"), path = require("path");
const kok = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(kok, "index.html"), "utf8");
const srcs = [...html.matchAll(/<script src="(data\/[^"?]+)/g)].map(m => m[1]);
const win = {}; win.window = win; win.console = console;
const ctx = vm.createContext(win);
const yuk = [];
for (const s of srcs) {
  try { vm.runInContext(fs.readFileSync(path.join(kok, s), "utf8"), ctx, { filename: s }); yuk.push(s); }
  catch (e) { console.error("YUKLENEMEDI", s, e.message.slice(0, 80)); }
}
module.exports = { win, srcs, yuk };
if (require.main === module) {
  const ks = Object.keys(win).filter(k => /^[A-Z0-9_]+$/.test(k) && Array.isArray(win[k]));
  console.log("yuklenen script:", yuk.length, "/", srcs.length);
  console.log(ks.map(k => k + "=" + win[k].length).filter(x => !/^OLAYLAR_|^KRON|^YERLESIMLER_|^YER_/.test(x)).join(" "));
  const ol = Object.keys(win).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(win[k])).reduce((a, k) => a.concat(win[k]), []);
  console.log("OLAYLAR* madde:", ol.length);
  const f = {}; ol.forEach(o => Object.keys(o).forEach(k => f[k] = (f[k] || 0) + 1));
  console.log(Object.entries(f).sort((a, b) => b[1] - a[1]).map(e => e.join(":")).join(" "));
}

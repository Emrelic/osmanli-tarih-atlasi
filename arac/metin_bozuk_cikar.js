// metin_bozuk.py çağırır: sitenin yüklediği data/*.js'leri sanal pencerede koşturur,
// OLAYLAR* ve KRONOLOJI* dizilerinin maddelerini [{dizi, t, n, b, d}] olarak stdout'a JSON verir.
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const kok = process.argv[2] || ".";
const oku = p => fs.readFileSync(path.join(kok, p), "utf8");
const html = oku("index.html").replace(/<!--[\s\S]*?-->/g, "");
const srcs = [...html.matchAll(/<script[^>]*src="(data\/[^"?]+)/g)].map(m => m[1])
  .filter(s => !/^data\/ceviri_/.test(s));
const win = { document: { createElement: () => ({ style: {} }), getElementById: () => null, addEventListener() {} },
  addEventListener() {}, localStorage: { getItem: () => null } };
win.window = win;
const ctx = vm.createContext(win);
const hatalar = [];
for (const s of srcs) { try { vm.runInContext(oku(s), ctx, { filename: s }); } catch (e) { hatalar.push(s + ": " + e.message); } }
const olay = [];
for (const ad of Object.keys(win).filter(k => /^(OLAYLAR|KRONOLOJI)(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(win[k]))) {
  const say = {};
  for (const o of win[ad]) {
    if (!o || typeof o !== "object") continue;
    const n = say[o.t] = (say[o.t] || 0) + 1;
    olay.push({ dizi: ad, t: o.t, n: n - 1, b: typeof o.b === "string" ? o.b : "", d: typeof o.d === "string" ? o.d : "" });
  }
}
process.stdout.write(JSON.stringify({ hatalar, olay }));

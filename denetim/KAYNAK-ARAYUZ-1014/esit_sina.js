// esit_sina.js — js/kaynak_damga.js'i tarayıcı gibi yükleyip stdin'deki maddeleri damgalar.
// Girdi (stdin, JSON): [{ i, kaynak, t }]  ·  Çıktı (stdout, JSON): [{ i, damga, alt, kad:[…] }]
// Çağıran: denetim/KAYNAK-ARAYUZ-1014/esit_sina.py
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.resolve(__dirname, "..", "..");
const ctx = vm.createContext({ window: {}, console: console, WeakMap: WeakMap });
for (const f of ["data/kaynak_guven.js", "js/kaynak_damga.js"])
  vm.runInContext(fs.readFileSync(path.join(KOK, f), "utf8"), ctx, { filename: f });
const KD = ctx.window.KaynakDamga;
if (!KD) { console.error("KaynakDamga yüklenmedi"); process.exit(2); }
const girdi = JSON.parse(fs.readFileSync(0, "utf8"));
const cikti = girdi.map(x => {
  const r = KD.damgala(x.kaynak, x.t);
  return { i: x.i, damga: r.damga, alt: r.alt, kad: r.parcalar.map(p => p.kademe) };
});
process.stdout.write(JSON.stringify(cikti));

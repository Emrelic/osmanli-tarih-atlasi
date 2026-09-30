// DEVLET-500-1000 — teslim kapısı: taraf kimliği (devletler.js ∪ künye önerisi) · k sözlüğü · gün/yıl sayımı
//   node denetim/ARAC-DEVLET-500-1000-KAPI.js
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(KOK, "data/devletler.js"), "utf8"));
const VAR = new Set(window.DEVLETLER.map(d => d.id));
const O = JSON.parse(fs.readFileSync(path.join(__dirname, "DEVLET-500-1000-KUNYE.json"), "utf8"));
const ONERI = new Set(O.kayitlar.map(k => k.id));
eval(fs.readFileSync(path.join(KOK, "data/kronoloji_cok_500_1000.js"), "utf8"));
const L = window.KRONOLOJI_COK_500_1000;
// k sözlüğü: öteki KRONOLOJI_COK dosyalarında kullanılan değerler
const kS = new Set();
for (const f of fs.readdirSync(path.join(KOK, "data"))) {
  if (!/^kronoloji_cok_.*\.js$/.test(f) || f === "kronoloji_cok_500_1000.js") continue;
  const s = fs.readFileSync(path.join(KOK, "data", f), "utf8");
  for (const m of s.matchAll(/\bk\s*:\s*"([^"]+)"|"k"\s*:\s*"([^"]+)"/g)) kS.add(m[1] || m[2]);
}
let esz = 0, gun = 0, yil = 0, kYok = new Set();
for (const m of L) {
  for (const t of m.taraflar || []) if (!VAR.has(t) && !ONERI.has(t)) { esz++; console.log("  EŞLENEMEYEN:", m.t, t); }
  if (!kS.has(m.k)) kYok.add(m.k);
  if (/-01-01$/.test(m.t)) yil++; else gun++;
}
console.log("madde", L.length, "· eşlenemeyen taraf", esz, "· gün", gun, "· yıl/ay (YYYY-01-01)", yil);
console.log("k sözlük evreni", kS.size, "· sözlükte olmayan k:", [...kYok].join(", ") || "0");
console.log("taraf dağılımı: devletler.js'te", L.flatMap(m => m.taraflar).filter(t => VAR.has(t)).length,
  "· yalnız öneride", L.flatMap(m => m.taraflar).filter(t => !VAR.has(t) && ONERI.has(t)).length);

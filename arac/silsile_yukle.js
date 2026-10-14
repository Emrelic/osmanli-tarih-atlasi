// silsile_yukle.js — arac/silsile_olc.py'nin JS yükleyicisi (SALT OKUR).
//
// Kronoloji/olay dosyaları TARAYICI GİBİ yüklenir (`vm`, paylaşılan `window`),
// regex ile sayılmaz — `arac/kronoloji_say.js`teki dersin aynısı: biçim, yorum
// ve boşluk sayımı etkileyemez.
//
// Girdi : argv[2] = dosya listesi (satır başına bir yol, KÖKE göre)
// Çıktı : stdout'a tek JSON
//   { dosyalar: [{dosya, diziler:[{ad, n}], hata}],
//     maddeler: [{dosya, dizi, i, t, b, d, yer, yer_id, yer_kon}] }
// Yalnız `window.*` altındaki ÜST DÜZEY dizilerin nesneleri madde sayılır;
// `alt_kronoloji` adımları madde DEĞİLDİR (ekranın ayrı madde gösterdiği kadar).
"use strict";
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const KOK = path.resolve(__dirname, "..");
const liste = fs.readFileSync(process.argv[2], "utf8")
  .split(/\r?\n/).map(s => s.trim()).filter(Boolean);

const window = {};
const ctx = vm.createContext({ window, console: { log() {}, warn() {}, error() {} } });
const cikti = { dosyalar: [], maddeler: [] };

function metin(x) {
  if (x === undefined || x === null) return null;
  if (Array.isArray(x)) return x.map(String);
  return typeof x === "object" ? JSON.stringify(x) : String(x);
}

for (const rel of liste) {
  const kayit = { dosya: rel, diziler: [], hata: null };
  const once = new Map(Object.keys(window).map(k => [k, window[k]]));
  try {
    const kod = fs.readFileSync(path.join(KOK, rel), "utf8");
    vm.runInContext(kod, ctx, { filename: rel });
  } catch (e) {
    kayit.hata = String(e && e.message || e);
  }
  for (const k of Object.keys(window)) {
    const v = window[k];
    if (once.has(k) && once.get(k) === v) continue;   // bu dosya dokunmadı
    if (!Array.isArray(v)) continue;
    let n = 0;
    v.forEach((m, i) => {
      if (!m || typeof m !== "object" || Array.isArray(m)) return;
      n++;
      cikti.maddeler.push({
        dosya: rel, dizi: k, i,
        t: metin(m.t), b: metin(m.b), d: metin(m.d),
        yer: metin(m.yer), yer_id: metin(m.yer_id),
        yer_kon: Array.isArray(m.yer_kon) ? m.yer_kon : null,
        kisiler: metin(m.kisiler), ad: metin(m.ad),
      });
    });
    kayit.diziler.push({ ad: k, n });
  }
  cikti.dosyalar.push(kayit);
}
process.stdout.write(JSON.stringify(cikti));

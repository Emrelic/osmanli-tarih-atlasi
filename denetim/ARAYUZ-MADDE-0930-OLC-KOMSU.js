// ARAYUZ-MADDE-0930 — H-0014 ölçümü: suzgec.js `maddeDegisimleri` ESKİ ↔ YAMALI
// Kullanım: node denetim/ARAYUZ-MADDE-0930-OLC-KOMSU.js <yerlesim.json> <eski suzgec.js> <yeni suzgec.js>
// Evren: index.html'in yüklediği OLAYLAR* dizileri (app.js deseni: /^OLAYLAR(_…)?$/).
const fs = require("fs");
const [, , yJson, eskiYol, yeniYol] = process.argv;
global.window = {};
const W = global.window;
eval(fs.readFileSync("data/devletler.js", "utf8"));
const html = fs.readFileSync("index.html", "utf8");
// 🔴 index.html veriyi `data/paket_NN.js` içinde PAKETLİ yükler — yalnız
// `data/olaylar*` aramak 4 dosya / 23 madde buluyordu (ölçüldü). Bütün data/ betikleri.
const scriptler = [...html.matchAll(/<script[^>]+src="(data\/[^"?]*\.js)/g)].map(m => m[1]);
for (const s of scriptler) { try { eval(fs.readFileSync(s, "utf8")); } catch (e) { console.error("OKUNAMADI", s, e.message); } }
let M = [];
Object.keys(W).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k)).forEach(k => { if (Array.isArray(W[k])) M = M.concat(W[k]); });
const Y = JSON.parse(fs.readFileSync(yJson, "utf8"));

function yukle(yol) {
  delete W.SUZGEC;
  eval(fs.readFileSync(yol, "utf8"));
  return W.SUZGEC;
}
const ESKI = yukle(eskiYol), YENI = yukle(yeniYol);
function pad(t) { const p = String(t).split("-"); return p[0].padStart(4, "0") + "-" + (p[1] || "01").padStart(2, "0") + "-" + (p[2] || "01").padStart(2, "0"); }
const gunGrup = {};
M.forEach(o => { if (o && o.t) (gunGrup[pad(o.t)] = gunGrup[pad(o.t)] || []).push(o); });
const ixE = ESKI.sinirIndeksi(Y), ixY = YENI.sinirIndeksi(Y);
let madde = 0, degisen = 0, eklenen = 0, dusen = 0;
const ornek = [];
for (const gs of Object.keys(gunGrup).sort()) {
  const K = gunGrup[gs];
  for (const o of K) {
    madde++;
    const a = ESKI.maddeDegisimleri(o, gs, Y, ixE, K).secilen.map(s => s.i);
    const b = YENI.maddeDegisimleri(o, gs, Y, ixY, K).secilen.map(s => s.i);
    const ek = b.filter(i => a.indexOf(i) < 0), du = a.filter(i => b.indexOf(i) < 0);
    if (ek.length || du.length) {
      degisen++; eklenen += ek.length; dusen += du.length;
      ornek.push(gs + " · " + o.b + " · +" + ek.map(i => Y[i].ad).join(", ") + (du.length ? " · −" + du.map(i => Y[i].ad).join(", ") : ""));
    }
  }
}
console.log("evren: olaylar dosyası", scriptler.length, "· madde", madde, "· yerleşim", Y.length);
console.log("sonucu değişen madde", degisen, "· eklenen yerleşim", eklenen, "· düşen", dusen);
ornek.forEach(s => console.log("  " + s));
if (!ESKI.maddeDegisimleri || !YENI.maddeDegisimleri) console.log("🔴 ÖLÇÜLEMEDİ: maddeDegisimleri dışa açık değil");

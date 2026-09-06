// 1923-10-28 DUNYA KESITI — hangi kimlik, kac nokta, hangi bolge, hangi
// komsularla SINIRDAS. Amac: sinir denetimini OTURUMLARA BOLMEK icin taban.
//
// Komsuluk KABA olcuulur: iki kimligin noktalari arasindaki EN KISA mesafe.
// Bu bir Voronoi komsulugu DEGIL — gercek komsuluk uret_petek'ten cikar.
// Burada amac oncelik siralamak, geometri kurmak degil (ACIKCA yazildi).
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = process.argv[2] || "1923-10-28";

function baglam(y) {
  const d = { window: {} };
  vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d);
  return d.window;
}
const KUNYE = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUNYE[k.id] = k;

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const sahip = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return "OSMANLI";
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return "OSMANLI-tabi";
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return p.d;
  return null;
};
const grup = {};
for (const y of N) {
  if (y.bit && y.bit <= G) continue;
  if (y.kur && y.kur > G) continue;
  const s = sahip(y);
  if (!s) continue;
  (grup[s] = grup[s] || []).push(y);
}
const R = 6371, rad = (x) => x * Math.PI / 180;
const km = (a, b) => {
  const dla = rad(b.lat - a.lat), dlo = rad(b.lon - a.lon);
  const h = Math.sin(dla / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dlo / 2) ** 2;
  return 2 * R * Math.asin(Math.min(1, Math.sqrt(h)));
};
const ids = Object.keys(grup).sort((a, b) => grup[b].length - grup[a].length);

// en kisa mesafe matrisi (kaba) — 300 km altini SINIRDAS say
const YAKIN = 300;
const komsu = {};
for (let i = 0; i < ids.length; i++) {
  for (let j = i + 1; j < ids.length; j++) {
    let en = Infinity;
    for (const a of grup[ids[i]]) {
      for (const b of grup[ids[j]]) {
        const d = km(a, b);
        if (d < en) en = d;
        if (en < 1) break;
      }
      if (en < 1) break;
    }
    if (en <= YAKIN) {
      (komsu[ids[i]] = komsu[ids[i]] || []).push([ids[j], en]);
      (komsu[ids[j]] = komsu[ids[j]] || []).push([ids[i], en]);
    }
  }
}
console.log("=== " + G + " DUNYA KESITI ===");
console.log("sahnedeki kimlik: " + ids.length + "   noktali toplam: " +
  ids.reduce((a, k) => a + grup[k].length, 0));
console.log("");
console.log("kimlik                        nokta  bolge            komsu  kunye penceresi");
for (const id of ids) {
  const k = KUNYE[id] || {};
  const ko = (komsu[id] || []).sort((a, b) => a[1] - b[1]);
  console.log("  " + id.padEnd(28) + String(grup[id].length).padStart(5) + "  " +
    String(k.bolge || (id === "OSMANLI" || id === "OSMANLI-tabi" ? "(osmanli)" : "?")).padEnd(16) +
    String(ko.length).padStart(5) + "  " + (k.f || "?") + " -> " + (k.t || "?"));
}
console.log("");
console.log("=== SINIR CIFTLERI (en yakin nokta <= " + YAKIN + " km) ===");
const cift = [];
for (const a of Object.keys(komsu)) for (const [b, d] of komsu[a]) if (a < b) cift.push([d, a, b]);
cift.sort((x, y) => x[0] - y[0]);
console.log("toplam cift: " + cift.length);
for (const [d, a, b] of cift) {
  console.log("  " + String(d.toFixed(0)).padStart(4) + " km   " + a.padEnd(26) + b);
}

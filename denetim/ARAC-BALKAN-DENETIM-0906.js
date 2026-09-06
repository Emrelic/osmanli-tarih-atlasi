// BALKAN-DOGU AVRUPA — 1923-10-28 kesitinin TAM KIMLIK DENETIMI.
//
// 🔴 SURUM 2 (6 Eylul, ogleden sonra): bolge olcutu DEGISTI.
//    Surum 1 `ARAC-1923-TRIYAJ`in BAGIMSIZ dikdortgenlerini kullaniyordu
//    ve o kutular ORTUSUYOR + BOSLUK BIRAKIYOR (olculdu: 43 ortak · 122
//    oksuz). Artik TEK OTORITE `ARAC-BOLGE-KUTU-0906.js` — bir CASCADE,
//    yani BOLUNTU: her nokta ILK eslesen kovaya girer.
//    ⇒ Kendi olcutumu TAKLIT ETMIYORUM, otoriteyi CAGIRIYORUM.
//
// SORDUKLARI (1923-10-28'de AKTIF her nokta-donem icin):
//   4c  donem kunye penceresini ASIYOR mu   (t > kunye.t + tolerans)
//   4d  donem kunye penceresinden ONCE mi basliyor (f < kunye.f)
//   KUNYESIZ  kimlik ne `id` ne `harita:` anahtari olarak var
//   RENKSIZ   BOYALAR'da yok  ⇒ cizilmez (§8 harita deligi)
// 🔴 denetle.py'nin KOVA YAPISINI tasiyorum: HAYALET_TOLERANS_GUN=400
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge, SAHIP } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";
const TOLERANS = 400;
const BENIM = new Set(["BALKANLAR", "DOGU-AVRUPA"]);

function baglam(y) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(y, "utf8"), d); return d.window;
}
const DEV = baglam("data/devletler.js").DEVLETLER || [];
const KUNYE = {}, HARITA = {};
for (const k of DEV) { KUNYE[k.id] = k; if (k.harita) (HARITA[k.harita] = HARITA[k.harita] || []).push(k); }
const BOYALAR = new Set(
  (fs.readFileSync("arac/renkler.py", "utf8").match(/^\s*"([a-z0-9-]+)":\s*\(/gm) || [])
    .map(s => s.match(/"([a-z0-9-]+)"/)[1]));

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const gun = (s) => Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5;
const aktif = (y) => {
  for (const p of (y.d || [])) if (p.f <= G && G < p.t) return { id: "OSMANLI", p };
  for (const p of (y.v || [])) if (p.f <= G && G < p.t) return { id: "OSMANLI-tabi", p };
  for (const p of (y.s || [])) if (p.f <= G && G < p.t) return { id: p.d, p };
  return null;
};

const kume = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) &&
  BENIM.has(bolge(y)) && aktif(y));
const bal = kume.filter(y => bolge(y) === "BALKANLAR").length;
console.log("=== BALKAN-DOGU AVRUPA · " + G + " · OTORITE: ARAC-BOLGE-KUTU-0906 ===");
console.log("BALKANLAR " + bal + " + DOGU-AVRUPA " + (kume.length - bal) +
  " = " + kume.length);
const kimlikler = [...new Set(kume.map(y => aktif(y).id))];
console.log("BENZERSIZ kimlik: " + kimlikler.length);
console.log("");

const kusur = { hayalet: [], erken: [], kunyesiz: [], renksiz: [] };
for (const y of kume) {
  const a = aktif(y);
  if (a.id.startsWith("OSMANLI")) continue;
  let k = KUNYE[a.id], cozum = "id";
  if (!k && HARITA[a.id]) { k = HARITA[a.id][0]; cozum = "harita:" + a.id + " -> " + k.id; }
  if (!k) { kusur.kunyesiz.push([y.ad, a.id]); continue; }
  if (gun(a.p.t) - gun(k.t) > TOLERANS)
    kusur.hayalet.push([y.ad, a.id, cozum, k.t, a.p.t,
      ((gun(a.p.t) - gun(k.t)) / 365.25).toFixed(1), bolge(y)]);
  if (gun(k.f) - gun(a.p.f) > TOLERANS)
    kusur.erken.push([y.ad, a.id, k.f, a.p.f,
      ((gun(k.f) - gun(a.p.f)) / 365.25).toFixed(1), bolge(y)]);
  const anahtar = k.harita || k.id;
  if (!BOYALAR.has(anahtar)) kusur.renksiz.push([y.ad, a.id, anahtar]);
}

function dok(baslik, liste, bicim) {
  console.log("--- " + baslik + " : " + liste.length);
  const gr = {};
  for (const r of liste) (gr[r[1]] = gr[r[1]] || []).push(r);
  for (const id of Object.keys(gr).sort((a, b) => gr[b].length - gr[a].length)) {
    console.log("   " + bicim(id, gr[id]));
    console.log("      " + gr[id].map(x => x[0]).slice(0, 14).join(" · ") +
      (gr[id].length > 14 ? " …" : ""));
  }
  console.log("");
}
dok("🔴 4c HAYALET (donem kunyeyi >400 gun ASIYOR)", kusur.hayalet,
  (id, g) => id.padEnd(22) + String(g.length).padStart(3) + " nokta · kunye t:" +
    g[0][3] + " · veri t:" + g[0][4] + " · " + g[0][5] + " yil FAZLA" +
    (g[0][2] === "id" ? "" : "   [" + g[0][2] + "]"));
dok("🔴 4d ERKEN (donem kunyeden >400 gun ONCE basliyor)", kusur.erken,
  (id, g) => id.padEnd(22) + String(g.length).padStart(3) + " nokta · kunye f:" +
    g[0][2] + " · veri f:" + g[0][3] + " · " + g[0][4] + " yil ERKEN");
console.log("--- 🔴 KUNYESIZ KIMLIK : " + kusur.kunyesiz.length);
for (const r of kusur.kunyesiz) console.log("   " + r[1].padEnd(24) + r[0]);
console.log("");
console.log("--- 🔴 RENKSIZ (cizilmez) : " + kusur.renksiz.length);
for (const r of kusur.renksiz) console.log("   " + r[1].padEnd(24) + r[0]);
console.log("");
console.log("--- KIMLIK DAGILIMI (bolge kirilimli) ---");
const say = {};
for (const y of kume) {
  const s = aktif(y).id, b = bolge(y);
  say[s] = say[s] || { BALKANLAR: 0, "DOGU-AVRUPA": 0 };
  say[s][b]++;
}
for (const s of Object.keys(say).sort((a, b) =>
  (say[b].BALKANLAR + say[b]["DOGU-AVRUPA"]) - (say[a].BALKANLAR + say[a]["DOGU-AVRUPA"])))
  console.log("   " + s.padEnd(26) + String(say[s].BALKANLAR).padStart(4) +
    " + " + String(say[s]["DOGU-AVRUPA"]).padStart(4) +
    " = " + String(say[s].BALKANLAR + say[s]["DOGU-AVRUPA"]).padStart(4));

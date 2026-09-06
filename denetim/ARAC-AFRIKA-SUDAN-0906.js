// `ingiliz-sudani` — künye 1923'ü TUTUYOR, ama BENİM 501 noktamda YOK.
// Nerede kullanılıyor, rengi var mı, ve kaç noktam onun yerine
// `ingiltere` taşıyor?
//
// 🔴 RENK `harita:` ANAHTARINA bakar, `id`ye DEĞİL — koordinatör bunu
//   aynı gün İKİ KEZ kaçırdı ve ikisinde de SESSİZ kaldı. Bu yüzden
//   burada `id` VE `harita:` ikisi de çözülüyor.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} }; vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (Array.isArray(A)) for (const y of A)
      if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const dev = { window: {} }; vm.createContext(dev);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), dev);
const D = dev.window.DEVLETLER || [];
const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);
const alt = (y) => {
  if (akt(y.d).length) return "OSMANLI";
  if (akt(y.v).length) return "OSMANLI-tabi";
  const s = akt(y.s)[0]; return s ? s.d : null;
};

// ① künye + RENK durumu
console.log("=== ① ADAY KÜNYELER — künye VE renk ===");
let BOYALAR = {};
try {
  const py = execSync("py -X utf8 -c \"import sys;sys.path.insert(0,'arac');" +
    "import json,renkler;print(json.dumps(renkler.BOYALAR))\"",
    { encoding: "utf-8", maxBuffer: 1 << 24 });
  BOYALAR = JSON.parse(py);
} catch (e) { console.log("  ⚠️ renkler.py okunamadı: " + String(e).slice(0, 90)); }
console.log("  BOYALAR anahtarı: " + Object.keys(BOYALAR).length);

for (const id of ["ingiliz-sudani", "buganda", "somali", "umman-zengibar",
                  "adal", "cimma", "habesistan", "liberya"]) {
  const k = D.find(x => x.id === id);
  if (!k) { console.log("  🔴 " + id + " — KÜNYE YOK"); continue; }
  const anahtar = k.harita || k.id;          // renk harita:ya bakar
  const renk = BOYALAR[anahtar];
  const tutar = k.f <= G && G < k.t;
  console.log("  " + (tutar ? "🟢" : "⚪") + " " + id.padEnd(20) +
    k.f + "->" + k.t +
    "  harita:" + String(k.harita || "(yok)").padEnd(16) +
    " renk:" + (renk ? String(renk) : "🔴 YOK"));
}

// ② `ingiliz-sudani` veride NEREDE
console.log("\n=== ② `ingiliz-sudani` veride kullanılıyor mu ===");
const canli = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G));
const kul = canli.filter(y => alt(y) === "ingiliz-sudani");
console.log("  1923'te bu kimliği taşıyan nokta: " + kul.length);
const bd = {};
for (const y of kul) bd[bolge(y)] = (bd[bolge(y)] || 0) + 1;
for (const [b, n] of Object.entries(bd)) console.log("    " + b + " " + n);
// herhangi bir tarihte
let herhangi = 0;
for (const y of N) for (const p of (y.s || [])) if (p.d === "ingiliz-sudani") herhangi++;
console.log("  HERHANGİ bir tarihte `ingiliz-sudani` dönemi: " + herhangi);

// ③ Sudan kutusunda `ingiltere` taşıyan noktalarım
console.log("\n=== ③ SUDAN KUTUSUNDA `ingiltere` taşıyan noktalarım ===");
console.log("    (Anglo-Mısır Sudanı ~ lat 3.5..22, lon 22..38.6)");
const bende = canli.filter(y => alt(y) && bolge(y) === "SAHRA-ALTI-AFRIKA");
const sudan = bende.filter(y => alt(y) === "ingiltere" &&
  y.lat >= 3.5 && y.lat <= 22 && y.lon >= 22 && y.lon <= 38.6);
console.log("  " + sudan.length + " nokta:");
for (const y of sudan) console.log("    " + y.ad.padEnd(24) +
  " lat " + y.lat.toFixed(2) + " lon " + y.lon.toFixed(2));

// ④ aynı kutuda BAŞKA kimlik taşıyanlar — sınır ölçülür (§3.5.1 iki uç)
const baska = bende.filter(y => alt(y) !== "ingiltere" &&
  y.lat >= 3.5 && y.lat <= 22 && y.lon >= 22 && y.lon <= 38.6);
console.log("\n  aynı kutuda BAŞKA kimlik taşıyan: " + baska.length);
for (const y of baska) console.log("    " + y.ad.padEnd(24) + alt(y));

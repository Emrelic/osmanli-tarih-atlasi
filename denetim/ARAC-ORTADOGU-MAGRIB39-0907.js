// denetim/ARAC-ORTADOGU-MAGRIB39-0907.js — ORTADOĞU · 7 Eylül 2026
// ---------------------------------------------------------------------------
// 39 MAĞRİB GÜNÜNÜN **TAMAMI** + künye çapraz kontrolü.
//
// 🔴 NİÇİN AYRI ALET: `ARAC-AVRUPA-MAGRIB-ELE-0907.js:79` listeyi
//    `.slice(0, 14)` ile KIRPIYOR. 39 gün ölçülüyor, 14'ü basılıyor —
//    kalan 25 görünmüyor. Bu gecenin dersi: *"kırpılmış bir çıktı da
//    bir ölçüm değildir"* (`tail`i görülmemiş çıktı, ölçülmemiş kuyruk).
// 🟢 ÖLÇÜT AYNEN DEVRALINDI, yeniden türetilmedi: `BENIM` kümesi · `UC`
//    uçları · `magrib()` yüklemi (satır 20-23) birebir kopyalandı ve
//    kaynağı burada YAZILI. Kendi kutumu kursaydım başka bir evren
//    ölçerdim — nitekim ilk denememde 100 gün çıktı.
// 🔴 VERİ YAZMAZ.
// ---------------------------------------------------------------------------
const fs = require("fs"), vm = require("vm");

// ── ölçüt: AVRUPA'nın aletinden AYNEN (ARAC-AVRUPA-MAGRIB-ELE-0907.js:20-23)
const BENIM = new Set(["KUZEY-AVRUPA", "BATI-ORTA-AVRUPA", "IBERYA", "ITALYA"]);
const UC = new Set(["1281-01-01", "1923-10-29"]);
const magrib = (y) => y.lat < 38.0 && y.lon >= -17 && y.lon <= 25 && y.lat > 19;
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const { execSync } = require("child_process");

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
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
const gun = {};
for (const y of N) {
  const b = bolge(y);
  const kendi = new Set();
  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || []))
      for (const g of [p.f, p.t]) if (g && !UC.has(g)) kendi.add(g);
  for (const g of kendi) {
    const G = (gun[g] = gun[g] || { avrupa: new Set(), magrib: new Set() });
    if (BENIM.has(b)) (magrib(y) ? G.magrib : G.avrupa).add(y.ad);
  }
}
const D = JSON.parse(fs.readFileSync("denetim/DAYANAK-GUNLER-0907.json", "utf8"));
const kirli = [];
for (const g of (D.gunler || []).filter(g => BENIM.has(g.sahip))) {
  const d = gun[g.gun] || { avrupa: new Set(), magrib: new Set() };
  if (d.magrib.size > 0 && d.avrupa.size === 0)
    kirli.push({ ...g, magrib: d.magrib.size, adlar: [...d.magrib] });
}

// ── künye çapraz kontrolü (⑱'in kuralı) — KAYNAK DEĞİL, ÇAPRAZ KONTROL
const c = { window: {} }; vm.createContext(c);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), c);
const KK = Object.keys(c.window).find(x => Array.isArray(c.window[x]));
const GK = {};
for (const k of c.window[KK])
  for (const alan of ["f", "t"])
    if (k[alan]) (GK[k[alan]] = GK[k[alan]] || []).push(k.id + "." + alan);

console.log("=== 39 MAĞRİB GÜNÜ — TAMAMI (alet 14'ünü basıyordu) ===");
console.log("toplam: " + kirli.length + " gün · " +
  kirli.reduce((s, x) => s + x.nokta, 0) + " nokta\n");
console.log("GÜN          nokta  KÜNYE ÇAPRAZ                      ÖRNEK YER");
let ck = 0;
for (const g of kirli.sort((a, b) => b.nokta - a.nokta)) {
  const k = GK[g.gun];
  if (k) ck++;
  console.log(g.gun.padEnd(12) + String(g.nokta).padStart(5) + "  " +
    (k ? k.join(", ") : "—").padEnd(33) + " " +
    (g.adlar || []).slice(0, 3).join(" · "));
}
console.log("\n🟡 künye çaprazı OLAN gün : " + ck + " / " + kirli.length);
console.log("🔴 çaprazı OLMAYAN        : " + (kirli.length - ck));
console.log("\n⚠️ Künyenin günü BİR KAYNAK DEĞİLDİR (§4) — bu bir ÇAPRAZ");
console.log("   KONTROLDÜR. Dayanak yine TDV'den gelir.");

// EMSAL ÖLÇÜMÜ — Toskana/Orta İtalya noktaları 1796-1861 arasını NASIL yazmış?
//
// NİÇİN: YONTEM §③ — "komşusunun kullandığı gün, kendi seçtiğinden
// DAYANAKLIDIR". Elba için gün seçmeden ÖNCE emsali ölçüyorum.
// Ölçülen: Napolyon dönemi ifade edilmiş mi · 1860-03-22 / 1861-03-17
// geçişi hangi kimlikle yazılmış · toskana künyesi (t:1860-03-22) aşılmış mı.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const c = { window: {} };
  vm.createContext(c);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), c); } catch (e) { continue; }
  for (const k of Object.keys(c.window)) {
    const A = c.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}

// Toskana kutusu + Elba çevresi
const IC = N.filter(y => y.lat >= 42.0 && y.lat <= 44.6 && y.lon >= 9.5 && y.lon <= 12.5);
console.log("=== TOSKANA KUTUSU (42,0-44,6 K / 9,5-12,5 D) — " + IC.length + " nokta ===");
for (const y of IC.sort((a, b) => a.ad.localeCompare(b.ad))) {
  const z = (y.s || []).filter(p => p.t > "1780-01-01")
    .map(p => p.f + ">" + p.t + " " + p.d).join("  |  ");
  console.log("  " + y.ad.padEnd(22) + (z || "(1780 sonrası s: dönemi YOK)"));
}

// Kim hangi günü kullanıyor — tüm külliyat
console.log("");
console.log("=== BU GUNLERI KAC KAYIT KULLANIYOR (tum kulliyat) ===");
for (const g of ["1815-06-09", "1860-03-22", "1861-03-17", "1801-02-09", "1805-03-18", "1809-05-24", "1814-05-04"]) {
  const kul = [];
  for (const y of N)
    for (const p of (y.s || []).concat(y.d || [], y.v || []))
      if (p.f === g || p.t === g) kul.push(y.ad + (p.d ? "/" + p.d : ""));
  console.log("  " + g + "  " + String(kul.length).padStart(4) + "  " +
    kul.slice(0, 6).join(", ") + (kul.length > 6 ? " ..." : ""));
}

// Napolyon dönemi künyeleri VAR MI (tahmin etme, TARA)
console.log("");
console.log("=== NAPOLYON DONEMI KUNYELERI — taranarak ===");
const c2 = { window: {} }; vm.createContext(c2);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), c2);
const K = c2.window.DEVLETLER || [];
for (const k of K)
  if (/napol|fransa|lucca|etruria|toskana|italya|sardinya|piombino|elba/i.test(k.id + " " + k.ad))
    console.log("  " + k.id.padEnd(26) + k.f + " -> " + k.t + "   " + k.ad);

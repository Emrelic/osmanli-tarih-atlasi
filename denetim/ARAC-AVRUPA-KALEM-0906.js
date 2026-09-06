// KALEM ÖLÇÜM ALETİ — bir kimliğin AVRUPA kovasındaki durumunu döker.
//
//   node denetim/ARAC-AVRUPA-KALEM-0906.js <kimlik> [<kimlik> ...]
//
// Döktüğü: noktalar · TAM `s:`/`d:`/`v:`/`isg:` zincirleri · künye penceresi
// ve AŞIM (tolerans 400) · komşu noktaların aynı günü kullanıp kullanmadığı.
//
// 🔴 `isg:` DÖRDÜNCÜ ALAN OLARAK OKUNUR (şartname §⑥): ORTADOĞU yalnız `v:`ye
//   bakıp "42 yıl anakronizm" yazdı ve kendi çürüttü.
// 🔴 Zincirin TAMAMI basılır, SÜZÜLMEZ: `NEHİR SÜRTÜNME` bir ölçüm filtresi
//   (t >= 1900) yüzünden dört ortaçağ kırılmasını silen bir yama yazmıştı.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

const HEDEFLER = process.argv.slice(2);
if (!HEDEFLER.length) { console.log("kullanım: node ... <kimlik> [<kimlik> ...]"); process.exit(1); }
const G = "1923-10-28", TOLERANS = 400;

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const KUN = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUN[k.id] = k;

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push({ y, f });
  }
}
const gn = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5);

// hangi günü kaç kayıt kullanıyor — komşu kuralı (YONTEM §③) için
const GUN = {};
for (const { y } of N)
  for (const p of (y.s || []).concat(y.d || [], y.v || [], y.isg || []))
    for (const g of [p.f, p.t]) if (g) GUN[g] = (GUN[g] || 0) + 1;

for (const hedef of HEDEFLER) {
  const k = KUN[hedef];
  console.log("");
  console.log("=".repeat(76));
  console.log("KİMLİK: " + hedef + (k ? "   künye " + k.f + " -> " + k.t + "   " + k.ad
    : "   🔴 KÜNYE YOK"));
  console.log("=".repeat(76));

  const bulunan = N.filter(({ y }) =>
    ["s", "d", "v", "isg"].some(a => (y[a] || []).some(p => p.d === hedef)));
  console.log("nokta: " + bulunan.length);

  const gunler = new Set();
  for (const { y, f } of bulunan.sort((a, b) => a.y.ad.localeCompare(b.y.ad))) {
    console.log("");
    console.log("  " + y.ad + "   (" + y.lat + ", " + y.lon + ")   data/" + f);
    for (const alan of ["d", "v", "s", "isg"]) {
      for (const p of (y[alan] || [])) {
        const kk = KUN[p.d] || {};
        let bayrak = "";
        if (p.d && kk.t && gn(p.t) - gn(kk.t) > TOLERANS)
          bayrak = "  🔴 AŞIM " + (gn(p.t) - gn(kk.t)) + " gün";
        else if (p.d && kk.f && gn(kk.f) - gn(p.f) > TOLERANS)
          bayrak = "  🔴 ERKEN " + (gn(kk.f) - gn(p.f)) + " gün";
        else if (p.d && kk.t && gn(p.t) > gn(kk.t))
          bayrak = "  🟢 aşım " + (gn(p.t) - gn(kk.t)) + " gün (tolerans içi)";
        const aktif = p.f <= G && G < p.t ? " ◀ 1923'te AKTİF" : "";
        console.log("     " + alan.padEnd(4) + p.f + " > " + p.t + "  " +
          String(p.d || "(Osmanlı)").padEnd(24) + bayrak + aktif);
        if (p.d === hedef) { gunler.add(p.f); gunler.add(p.t); }
      }
    }
  }
  console.log("");
  console.log("  --- bu kimliğin kırılma günleri · kaç kayıt kullanıyor (komşu kuralı) ---");
  for (const g of [...gunler].sort())
    console.log("     " + g + "   " + String(GUN[g] || 0).padStart(4) + " kayıt" +
      ((GUN[g] || 0) <= 1 ? "   🟡 YALNIZ BU KAYIT" : ""));
}

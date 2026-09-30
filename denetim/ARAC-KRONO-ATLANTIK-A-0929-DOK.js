// KRONO-ATLANTIK-A-0929 — üç dosyanın maddelerini denetim için düz JSON'a döker (salt okuma)
// Koşu: node denetim/ARAC-KRONO-ATLANTIK-A-0929-DOK.js <çıktı-dizini>
const fs = require("fs"), vm = require("vm"), path = require("path");
const out = process.argv[2];
const ctx = { window: {} }; vm.createContext(ctx);
for (const k of ["fransa", "ispanya", "portekiz"]) {
  vm.runInContext(fs.readFileSync(`data/kronoloji_${k}.js`, "utf8"), ctx);
  const L = ctx.window["KRONOLOJI_" + k.toUpperCase()];
  const satir = fs.readFileSync(`data/kronoloji_${k}.js`, "utf8").split("\n");
  const dok = L.map((m, i) => {
    // maddenin dosyadaki satırı: t+b birlikte geçen ilk satır
    const ln = satir.findIndex(s => s.includes(`"${m.t}"`) && s.includes(m.b.slice(0, 20)));
    return { i, satir: ln >= 0 ? ln + 1 : null, t: m.t, gun: m.gun, b: m.b, tur: m.tur,
             onem: m.onem, dunya: m.dunya, yer_id: m.yer_id, kaynak: m.kaynak, d: m.d, ic_not_d: m.ic_not_d };
  });
  fs.writeFileSync(path.join(out, `${k}.json`), JSON.stringify(dok, null, 1));
  console.log(k, dok.length, "satırı bulunamayan", dok.filter(x => !x.satir).length);
}

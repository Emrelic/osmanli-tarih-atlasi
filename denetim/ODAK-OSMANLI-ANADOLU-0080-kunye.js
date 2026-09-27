// Künye bakıcı: node denetim/ODAK-OSMANLI-ANADOLU-0080-kunye.js <id> [<id>…]  → id · ad · f · t · harita
const fs = require("fs"), path = require("path");
global.window = global;
eval(fs.readFileSync(path.join(__dirname, "..", "data/devletler.js"), "utf8"));
const ix = {}; (window.DEVLETLER || []).forEach(d => { if (d && d.id) ix[d.id] = d; });
for (const id of process.argv.slice(2)) {
  const d = ix[id];
  console.log(d ? [id, d.ad, d.f, d.t, d.harita || ""].join(" · ") : id + " · 🔴 KÜNYEDE YOK");
}

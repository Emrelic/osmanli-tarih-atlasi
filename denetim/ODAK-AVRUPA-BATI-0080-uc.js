// Bir kimliğin o gün sahip olduğu yerleşimlerden kutunun UÇLARINI basar (odak kutusunu
// bozan aykırı noktayı bulmak için). node uc.js <havuz.json> <gun> <id>
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
global.window = {};
eval(fs.readFileSync(path.join(KOK, "data/devletler.js"), "utf8"));
const SG = require(path.join(KOK, "js/suzgec.js"));
const kix = {}; (window.DEVLETLER || []).forEach(d => { if (d && d.id) kix[d.id] = d; });
const Y = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const gs = process.argv[3], ids = process.argv[4].split(",");
const L = Y.filter(y => typeof y.lat === "number" &&
  SG.sahipKimlikte(SG.sahipAnahtari(y, gs), SG.aktifVAdi(y, gs), ids, kix));
const by = (k, s) => L.slice().sort((a, b) => s * (a[k] - b[k])).slice(0, 3).map(y => y.ad + "(" + y.lat + "," + y.lon + ")").join(" · ");
console.log("n", L.length, "\n batı:", by("lon", 1), "\n doğu:", by("lon", -1), "\n güney:", by("lat", 1), "\n kuzey:", by("lat", -1));

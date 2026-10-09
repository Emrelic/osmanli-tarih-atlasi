// app.js'in isyan kutusunu (isyanMaddeKutusu + _isyanTarihYazi + isyanLejanti) GERÇEK kaynak metniyle,
// sahte DOM'la, verilen isyan_tarama.js'e karşı koşar; çizilen metni basar. Kullanım: node app_isyan_sina.js <isyan.js>
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const app = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");
function cek(ad) {
  const i = app.indexOf("function " + ad + "(");
  if (i < 0) throw new Error("yok: " + ad);
  let d = 0, j = app.indexOf("{", i);
  for (let k = j; k < app.length; k++) { if (app[k] === "{") d++; else if (app[k] === "}") { d--; if (!d) return app.slice(i, k + 1); } }
}
function El() { this.c = []; this.textContent = ""; this.title = ""; this.className = ""; }
El.prototype.appendChild = function (x) { this.c.push(x); };
function metin(e) { return (e.className ? "[" + e.className + "] " : "") + e.textContent + (e.title ? " {title:" + e.title.slice(0, 60) + "}" : "") + "\n" + e.c.map(metin).join(""); }
const ctx = { window: {}, document: { createElement: () => new El() }, haritaHazir: false, harita: null,
  AYLAR: ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"],
  devletAdi: (k) => k, _khGunStr: (g) => g, console };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[2], "utf8"), ctx);
for (const ad of ["_isyanTarihYazi", "isyanMaddeKutusu"]) vm.runInContext(cek(ad), ctx);
const IT = ctx.window.ISYAN_TARAMA;
let cikti = "";
for (const m of IT.maddeler || []) {
  const kap = new El();
  ctx.isyanMaddeKutusu({ t: m.t, b: m.b, gi: m.t }, kap);
  cikti += "== " + m.t + " " + m.b + "\n" + kap.c.map(metin).join("");
}
process.stdout.write(cikti);

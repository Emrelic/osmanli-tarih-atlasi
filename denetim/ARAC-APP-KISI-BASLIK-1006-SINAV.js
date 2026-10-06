// APP-KISI-BASLIK-1006 sınavı — app.js'in GERÇEK `dizinDoldur("kisiler")` dalı sahte DOM'da koşar.
// Kullanım: node ARAC-APP-KISI-BASLIK-1006-SINAV.js <app.js> [<kisiler.js>]   · çıkış 0 = geçti
// İki yön: tanınmayan tür (sehzade) ve türsüz kayıt ekranda + konsolda SAYILI görünmeli;
// tanınan türler eskisi gibi; K3 başlığı veriye uymalı.
const fs = require("fs"), vm = require("vm");
const src = fs.readFileSync(process.argv[2], "utf8");
const bas = src.indexOf("var TUR_ADI = {");
const fd = src.indexOf("function dizinDoldur(sekme) {");
let i = src.indexOf("{", fd), der = 0, son = -1;
for (; i < src.length; i++) { if (src[i] === "{") der++; else if (src[i] === "}") { der--; if (der === 0) { son = i + 1; break; } } }
const kesit = src.slice(bas, son);
const yazi = [], uyari = [];
function el() { return { className: "", textContent: "", children: [{}, {}, {}], set innerHTML(v) {}, appendChild(c) { if (c.className === "dz-grup") yazi.push("§" + c.textContent); else yazi.push(c.children[0].textContent); }, addEventListener() {}, classList: { toggle() {}, add() {} } }; }
const kutu = el();
const ctx = { console: { log() {}, warn: (...a) => uyari.push(a.join(" ")) },
  document: { getElementById: () => kutu, querySelectorAll: () => [], createElement: () => el() } };
ctx.window = ctx; vm.createContext(ctx);
ctx.KISILER = [
  { ad: "Mimar Sinan", tur: "mimar" },
  { ad: "Cem Sultan", tur: "sehzade" },          // tanınmayan tür
  { ad: "Turhan Hatice", tur: "valide" },        // tanınmayan tür
  { ad: "Adsız kayıt" },                         // tür alanı YOK
];
vm.runInContext(kesit + "\ndizinDoldur('kisiler');", ctx);
const S = [
  ["S1 tanınan tür (Mimarlar) görünür", yazi.includes("§Mimarlar (1)") && yazi.includes("Mimar Sinan")],
  ["S2 tanınmayan 'sehzade' ham adıyla görünür", yazi.includes("§Sehzade (1)") && yazi.includes("Cem Sultan")],
  ["S3 tanınmayan 'valide' görünür", yazi.includes("§Valide (1)") && yazi.includes("Turhan Hatice")],
  ["S4 türsüz kayıt görünür", yazi.includes("§(tür belirtilmemiş) (1)") && yazi.includes("Adsız kayıt")],
  ["S5 konsol 3 kaydı SAYAR", uyari.some(u => /olmayan tür: 3 kayıt/.test(u))],
  ["S6 tanınan tür sırası TUR_ADI'den önce gelir", yazi.indexOf("§Mimarlar (1)") < yazi.indexOf("§Sehzade (1)")],
  ["S7 K3 başlığı veriye uyar (\"kadınları\" yok)", !/K3 — Vâlide sultanlar ve hanedan kadınları/.test(src) && /K3 — Hanedan üyeleri ve vâlide sultanlar/.test(src)],
];
if (process.argv[3]) {  // gerçek veri: kisiler.js'in bütün kayıtları sekmede mi?
  const c2 = {}; c2.window = c2; vm.createContext(c2); vm.runInContext(fs.readFileSync(process.argv[3], "utf8"), c2);
  yazi.length = 0; uyari.length = 0; ctx.KISILER = c2.KISILER;
  vm.runInContext("dizinDoldur('kisiler');", ctx);
  const satirN = yazi.filter(x => x[0] !== "§").length;
  S.push(["S8 GERÇEK kisiler.js: " + c2.KISILER.length + " kaydın hepsi sekmede (" + satirN + ")", satirN === c2.KISILER.length]);
}
let ok = 0; S.forEach(([a, v]) => { console.log((v ? "✓ " : "✗ ") + a); if (v) ok++; });
console.log(ok + "/" + S.length); process.exit(ok === S.length ? 0 : 1);

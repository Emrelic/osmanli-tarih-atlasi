// KRONOLOJI-COK-1006 ölçüm koşumu: index.html'in yükleme sırasıyla data/*.js → vm,
// sonra js/app.js'in GERÇEK kronoloji kesiti (KRONOLOJI_ID_OZEL … odakKur öncesi).
// Kullanım: node cok_olc.js <kök> <çıktı.json> [--yapay]
//   --yapay: sınav için bir maddeye pencere dışı taraf eklenir (iki yönlü sınav)
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = process.argv[2], OUT = process.argv[3], YAPAY = process.argv.includes("--yapay");
const ON15 = ["CIN", "HINDISTAN", "JAPONYA", "MISIR", "OZBEK", "ANADOLU", "ARABISTAN", "BALKAN", "DOGU_AFRIKA",
  "GUNEY_ASYA", "IRAN_ARDILLARI", "ITALYA_SEHIR", "KUZEYAFRIKA", "ORTA_ASYA", "SIRBISTAN"].map(x => "KRONOLOJI_" + x);
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const srcs = [...html.matchAll(/src="(data\/[^"?]+)/g)].map(m => m[1]);
const log = [];
const ctx = { console: { log: (...a) => log.push(["log", a.join(" ")]), warn: (...a) => log.push(["warn", a.join(" ")]), error: (...a) => log.push(["error", a.join(" ")]) } };
ctx.window = ctx; ctx.self = ctx;
ctx.document = { documentElement: { classList: { add() {}, remove() {} }, style: {}, setAttribute() {} }, addEventListener() {}, getElementById() { return null; }, querySelector() { return null; } };
const hata = [];
vm.createContext(ctx);
for (const s of srcs) { try { vm.runInContext(fs.readFileSync(path.join(KOK, s), "utf8"), ctx, { filename: s }); } catch (e) { hata.push(s + ": " + e.message); } }
console.log("data betiği", srcs.length, "hata", hata.length, hata.join(" | "));
// kaynak dizilerin kimlik kaydı (ekleyiciden ÖNCE)
const kaynak = {};
for (const k of Object.keys(ctx)) if (/^KRONOLOJI_/.test(k) && Array.isArray(ctx[k])) kaynak[k] = ctx[k].slice();
let yapayM = null;
if (YAPAY) {
  // sınav: CIN'in ilk taraflı maddesine pencere dışı bir taraf (`kamakura`, 1185-1333) ekle
  yapayM = ctx.KRONOLOJI_CIN.find(m => m.taraflar && +String(m.t).slice(0, 4) > 1400);
  yapayM.taraflar = yapayM.taraflar.concat(["kamakura"]);
}
const app = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8").split("\n");
const bas = app.findIndex(l => l.startsWith("var KRONOLOJI_ID_OZEL"));
const son = app.findIndex(l => l.startsWith("(function odakKur"));
vm.runInContext(app.slice(bas, son).join("\n"), ctx, { filename: "app.js-kesit" });
// ölçüm: her kaynak dizinin maddesi kaç künyeye indi (nesne kimliğiyle)
const yer = new Map();
for (const d of ctx.DEVLETLER) (d.kronoloji || []).forEach(m => { if (!yer.has(m)) yer.set(m, []); yer.get(m).push(d.id); });
const sonuc = {};
for (const [k, arr] of Object.entries(kaynak)) {
  let inen = 0, cift = 0, tarafsiz = 0, tarafli = 0;
  arr.forEach(m => { const y = yer.get(m) || []; if (y.length) inen++; cift += y.length;
    if (m.taraflar || m.devletler || m.devlet) tarafli++; else tarafsiz++; });
  sonuc[k] = { n: arr.length, inen, cift, tarafli, tarafsiz };
}
const yapaySonuc = yapayM ? { t: yapayM.t, b: yapayM.b, indigi: yer.get(yapayM) || [] } : null;
fs.writeFileSync(OUT, JSON.stringify({ sonuc, log, yapay: yapaySonuc, bas: bas + 1, son: son + 1 }, null, 1));
const t15 = ON15.reduce((s, k) => (s.inen += (sonuc[k] || {}).inen || 0, s.cift += (sonuc[k] || {}).cift || 0, s), { inen: 0, cift: 0 });
console.log("kesit app.js:" + (bas + 1) + "-" + son, "· 15 dosya: inen", t15.inen, "çift", t15.cift);
ON15.forEach(k => console.log(" ", k, JSON.stringify(sonuc[k])));
if (yapaySonuc) console.log("YAPAY:", JSON.stringify(yapaySonuc));
log.filter(x => /çok taraflı|ÇOK|pencere|eşlenemedi|taraf/i.test(x[1])).forEach(x => console.log("  [" + x[0] + "]", x[1].slice(0, 400)));
// --- fark dökümü: taraflı ama inmeyen (madde × künye) çiftleri ve sebebi
if (process.argv.includes("--fark")) {
  const ix = {}; ctx.DEVLETLER.forEach(d => ix[d.id] = d);
  const kaynakAdi = new Map(); for (const [k, arr] of Object.entries(kaynak)) arr.forEach(m => { if (!kaynakAdi.has(m)) kaynakAdi.set(m, k); });
  for (const k of ON15) for (const m of kaynak[k]) for (const id of (m.taraflar || m.devletler || (m.devlet ? [m.devlet] : []))) {
    const d = ix[id]; if (!d) continue; if ((d.kronoloji || []).includes(m)) continue;
    const es = (d.kronoloji || []).find(o => o.t === m.t && o.b === m.b);
    console.log("FARK", k.slice(10), m.t, id, "|", String(m.b).slice(0, 55), "| sebep:", es ? "t+b ikiz ← " + (kaynakAdi.get(es) || "künyenin kendi maddesi") : "BİLİNMİYOR");
  }
}

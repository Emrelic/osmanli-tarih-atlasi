// GUN-SAYACI-C0-1009 SINAVI — node eşi. Python sınavı bunu çağırır; tek başına da koşar.
// Kullanım: node denetim/ARAC-GUN-SAYACI-C0-SINAV-1009.js <kok> <kip>
//   kip ikiz    → js/gun.js ile vektör özeti + sınırlar + biçim varyantları + geçersizler (JSON)
//   kip yamasiz → app.js'in GERÇEK gunIdx/idxTarih'i: negatif yıl · 0001-0099 · dizgi sırası (JSON)
//   kip evren   → index.html'in yüklediği data/ betikleri vm'de eval; her madde t + künye f/t için
//                 gunIdx (bugünkü) ve GUN.gun (yeni) — JSON
const fs = require("fs"), path = require("path"), vm = require("vm"), crypto = require("crypto");
const KOK = process.argv[2], KIP = process.argv[3];
const GUN = require(path.join(path.resolve(KOK), "js", "gun.js"));
const SINIRLAR = ["-2999-01-01", "-0001-12-31", "0000-01-01", "0000-02-29", "0001-01-01", "0099-12-31",
                  "0100-01-01", "1281-01-01", "1582-10-04", "1582-10-15", "1923-10-29", "1945-09-02",
                  "9999-12-31"];
const VARYANT = ["908-03-01", "0908-03-01", "+000908-03-01", "1453", "1453-05", "1453-05-01",
                 "-2999", "-002999-01-01", "-0", "+1923-10-29", "0330-05-11", "330-05-11"];
const GECERSIZ = ["", "1923-13-01", "abc", "1281-02-30", "1900-02-29", "1453/05/29", " 1453", "1453-5-1",
                  "1453-05-00", "1234567-01-01", "--1453"];

function appGunIdx() {
  const app = fs.readFileSync(path.join(KOK, "js", "app.js"), "utf8");
  const c = {};
  vm.runInNewContext(app.slice(app.indexOf("function gunIdx(s)"), app.indexOf("function idxYazi(i)"))
                     + ";this.gunIdx=gunIdx;this.idxTarih=idxTarih;", c);
  return c;
}
function dene(f) { try { return { v: f() }; } catch (e) { return { hata: e.constructor.name + ": " + e.message }; } }

let cikti;
if (KIP === "ikiz") {
  const h = crypto.createHash("sha256");
  const bas = GUN.gun("-2999-01-01"), son = GUN.gun("9999-12-31");
  let kimlikHata = 0;
  for (let z = bas; z <= son; z++) {
    const s = GUN.dizgi(z), g = GUN.gun(s), y = GUN.yil(z);
    if (g !== z) kimlikHata++;
    h.update(z + "|" + s + "|" + y + "\n");
  }
  cikti = {
    aralik: [bas, son], gun_sayisi: son - bas + 1, ozet: h.digest("hex"), kimlik_hata: kimlikHata,
    sinir: SINIRLAR.map(s => [s, dene(() => GUN.gun(s))]),
    varyant: VARYANT.map(s => [s, dene(() => GUN.gun(s))]),
    gecersiz: GECERSIZ.map(s => [s, dene(() => GUN.gun(s))]),
    yil_yazi: [1453, 1, 0, -1, -2999].map(y => [y, GUN.yilYazi(y)]),
    dizgi_hass: [["gun", GUN.dizgi(GUN.gun("-2999-03-01"), "gun")], ["ay", GUN.dizgi(GUN.gun("-2999-03-01"), "ay")],
                 ["yil", GUN.dizgi(GUN.gun("-2999-03-01"), "yil")], ["10000", GUN.dizgi(GUN.gun("+010000-01-01"))]],
  };
} else if (KIP === "yamasiz") {
  const A = appGunIdx();
  const neg = ["-2999-01-01", "-0499-03-01", "0000-01-01"].map(s => {
    const g = A.gunIdx(s); return [s, g, A.idxTarih(g).y, GUN.gun(s), GUN.yil(GUN.gun(s))];
  });
  let kayik = 0, toplam = 0;
  for (let z = GUN.gun("0001-01-01"); z < GUN.gun("0100-01-01"); z++) { toplam++; if (A.gunIdx(GUN.dizgi(z)) !== z) kayik++; }
  const L = ["-2999-01-01", "-1199-06-15", "-0499-01-01", "0000-01-01", "330-05-11", "1281-01-01"];
  cikti = { negatif: neg, d0099: [kayik, toplam],
            dizgi_sira: [...L].sort(), sayi_sira: [...L].sort((a, b) => GUN.gun(a) - GUN.gun(b)) };
} else if (KIP === "evren") {
  const A = appGunIdx();
  const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
  const srcs = [...html.matchAll(/<script[^>]+src="(data\/[^"?]+)/g)].map(m => m[1]);
  const ctx = { console: { log() {}, warn() {}, error() {} } };
  ctx.window = ctx; ctx.self = ctx; ctx.document = { addEventListener() {}, querySelector() { return null; } };
  vm.createContext(ctx);
  const hata = [];
  for (const s of srcs) {
    try { vm.runInContext(fs.readFileSync(path.join(KOK, s), "utf8"), ctx, { filename: s }); }
    catch (e) { hata.push(s + ": " + String(e.message).slice(0, 120)); }
  }
  const tarih = new Set();
  for (const k of Object.keys(ctx)) {
    if (!(/^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) || /^KRONOLOJI_[A-Z0-9_]+$/.test(k)) || !Array.isArray(ctx[k])) continue;
    for (const m of ctx[k]) if (m && m.t != null) tarih.add(String(m.t));
  }
  for (const d of (ctx.DEVLETLER || [])) {
    for (const x of [d.f, d.t]) if (x != null) tarih.add(String(x));
    for (const m of (d.kronoloji || [])) if (m && m.t != null) tarih.add(String(m.t));
  }
  const satir = [...tarih].sort().map(s => [s, dene(() => A.gunIdx(s)).v ?? null, dene(() => GUN.gun(s))]);
  cikti = { betik: srcs.length, eval_hata: hata, tarih: satir };
} else {
  console.error("kip: ikiz | yamasiz | evren"); process.exit(2);
}
process.stdout.write(JSON.stringify(cikti));

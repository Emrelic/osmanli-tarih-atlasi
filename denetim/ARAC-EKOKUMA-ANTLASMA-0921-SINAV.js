// SINAV — ekokuma_antlasma6.js kartlarının her biri GERÇEKTEN görünüyor mu?
// Ölçüt: kart, bağlandığı kronoloji maddesinde app.js'in eşleşme mantığıyla
// (ekKartBagliMi + tur süzgeci) çıkıyor mu; ve BAŞKA maddelere taşıyor mu.
// Koşu: node denetim/ARAC-EKOKUMA-ANTLASMA-0921-SINAV.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const KOK = path.resolve(__dirname, "..");
const ctx = { console }; ctx.window = ctx; ctx.localStorage = { getItem: () => null, setItem: () => {} };
vm.createContext(ctx);
function yukle(rel) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) return false;
  try { vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: rel }); return true; } catch (e) { console.error("HATA " + rel + ": " + e.message); return false; }
}
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const re = /<script\s+src="(data\/[^"?]+\.js)/g; let m;
while ((m = re.exec(html))) yukle(m[1]);
const appjs = fs.readFileSync(path.join(KOK, "js/app.js"), "utf8");
const li = appjs.indexOf("var _EKOKUMA_DOSYA_ADLARI = ["), lj = appjs.indexOf("\n];", li);
const govde = appjs.slice(li, lj).replace(/\/\/[^\n]*/g, "");
const re2 = /"([a-z0-9_]+)"/g; let m2;
while ((m2 = re2.exec(govde))) yukle("data/" + m2[1] + ".js");

function _ekNorm(s) {
  s = String(s == null ? "" : s)
    .replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c")
    .replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
function _ekBagGun(v) { const s = String(v == null ? "" : v), i = s.indexOf("|"); return i < 0 ? s : s.slice(0, i); }
function _ekBagEslesir(v, o) {
  if (v == null) return false;
  const s = String(v), i = s.indexOf("|");
  if (i < 0) return s === o.t;
  if (s.slice(0, i) !== o.t) return false;
  const ayirt = _ekNorm(s.slice(i + 1));
  return !ayirt || _ekNorm(o.b).indexOf(ayirt) >= 0;
}
function ekKartBagliMi(kart, o) {
  const liste = ((ctx.EKOBAG_ONERI || {})[kart.id]) || kart.olay || kart.baglanti || [];
  for (let i = 0; i < liste.length; i++) if (_ekBagEslesir(liste[i], o)) return true;
  if (kart.tur === "magazin" || !kart.tur) {
    if (!_ekBagEslesir(kart.t, o)) return false;
    for (let j = 0; j < liste.length; j++) if (_ekBagGun(liste[j]) === o.t) return false;
    return true;
  }
  return false;
}
function _ekHavuz() {
  return Object.keys(ctx).filter(k => /^EKOKUMA(_[A-Z0-9]+)?$/.test(k) && Array.isArray(ctx[k])).reduce((a, k) => a.concat(ctx[k]), []);
}
const olaylar = Object.keys(ctx).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k) && Array.isArray(ctx[k]))
  .reduce((a, k) => a.concat(ctx[k]), []).filter(o => o.kapsam !== "konu");

const kartlar = ctx.EKOKUMA_ANTLASMA6 || [];
// 1) havuz sınavı: dosya _ekHavuz regexine giriyor mu?
const havuzda = _ekHavuz().filter(k => (k.id || "").indexOf("antlasma6-") === 0).length;
console.log("kart sayisi:", kartlar.length, "· _ekHavuz()'da gorunen:", havuzda);
// 2) tur sınavı: app.js EKOKUMA_TUR anahtarlarından biri mi?
const TANIMLI = ["sebep-sonuc","magazin","merak","tartisma","teknik-bilimsel","kimdir","dis-yankilar","kahramanlik","menkibeler","sok-haberler","edebiyat","savas-hikayesi","karsi-anlati","antlasma"];
const turHata = kartlar.filter(k => TANIMLI.indexOf(k.tur) < 0);
console.log("tanimsiz tur tasiyan kart:", turHata.length, turHata.map(k => k.id + ":" + k.tur).join(",") || "");
// 3) bağ sınavı
let gorunen = 0, gorunmeyen = [], tasan = [];
for (const k of kartlar) {
  const dusen = olaylar.filter(o => ekKartBagliMi(k, o));
  if (dusen.length === 0) gorunmeyen.push(k.id);
  else {
    gorunen++;
    if (dusen.length > 1) tasan.push(k.id + " → " + dusen.length + " madde: " + dusen.map(o => o.t + " " + o.b.slice(0, 40)).join(" | "));
    console.log("  ✓", k.id, "→", dusen[0].t, dusen[0].b.slice(0, 60));
  }
}
console.log("");
console.log("GORUNEN:", gorunen, "/", kartlar.length, "· GORUNMEYEN:", gorunmeyen.join(", ") || "-");
console.log("BIRDEN COK MADDEYE DUSEN:", tasan.length ? "\n  " + tasan.join("\n  ") : "0 (temiz)");
// 4) ters yön sınavı: uydurma bir bağ GERÇEKTEN tutmuyor mu (boş küme tuzağı)
const sahte = { id: "sinav-sahte", tur: "sebep-sonuc", olay: ["1489-02-26|BOYLEBIRKELIMEYOK"] };
console.log("TERS YON SINAVI (tutmaması gereken bağ):", olaylar.filter(o => ekKartBagliMi(sahte, o)).length === 0 ? "✓ tutmadı" : "🔴 TUTTU — sınav bozuk");

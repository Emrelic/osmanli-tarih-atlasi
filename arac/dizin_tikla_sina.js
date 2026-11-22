// DIZIN TIKLAMA SINAMASI (salt okuma): app.js dzKisiOlayi / dzDevletOlayi mantigini veriyle kosturur,
// secilen maddenin kisiyle gercekten ilgili olup olmadigini olcer. Kullanim: node arac/dizin_tikla_sina.js
const { win } = require("./dizin_olc.js");
const ol = Object.keys(win).filter(k => /^OLAYLAR(_[A-Za-z0-9_]+)?$/.test(k) && Array.isArray(win[k])).reduce((a, k) => a.concat(win[k]), []);
function gi(t) { const m = /^(-?\d+)-(\d\d)-(\d\d)$/.exec(t || ""); if (!m) return null; return +m[1] * 372 + (+m[2] - 1) * 31 + (+m[3] - 1); }
ol.forEach(o => { o.gi = gi(o.t); });
const dzAd = x => String(x || "").replace(/\(.*?\)/g, " ").toLocaleLowerCase("tr").replace(/\s+/g, " ").trim();
function ilk(pred) { let en = null; ol.forEach(o => { if (o.gi != null && pred(o) && (!en || o.gi < en.gi)) en = o; }); return en; }
function kisiOlayi(k) {
  const ad = dzAd(k.ad);
  return ilk(o => {
    if (o.kisi_id === k.id || o.vefat_id === k.id) return true;
    return ad.length > 4 && typeof o.kisiler === "string" && o.kisiler.toLocaleLowerCase("tr").indexOf(ad) >= 0;
  });
}
const yil = s => { const m = /(-?\d{3,4})/.exec(String(s || "")); return m ? +m[1] : null; };
const out = { kisi: [], kartvizit: 0 };
let bag = 0, yok = 0, supheli = [];
(win.KISILER || []).forEach(k => {
  const m = kisiOlayi(k);
  if (!m) { yok++; return; }
  bag++;
  const my = yil(m.t), dn = String(k.donem || "").match(/\d{3,4}/g);
  if (dn && my != null) {
    const a = +dn[0], b = +dn[dn.length - 1];
    if (my < a - 60 || my > b + 60) supheli.push([k.ad, k.donem, m.t, m.b.slice(0, 70)]);
  }
});
console.log("KISILER", (win.KISILER || []).length, "bagli", bag, "bagsiz", yok, "donem-disi supheli", supheli.length);
supheli.slice(0, 40).forEach(s => console.log(" ", s.join(" | ")));
// devlet
let dv = 0, dvyok = 0, dvuzak = 0; const uz = [];
(win.DEVLETLER || []).forEach(d => {
  const m = ilk(o => o.devlet === d.id || o.devlet_id === d.id || (Array.isArray(o.taraflar) && o.taraflar.indexOf(d.id) >= 0));
  if (!m) { dvyok++; return; }
  dv++;
  const f = gi(d.f);
  if (f != null && m.gi < f - 366) { dvuzak++; if (uz.length < 15) uz.push([d.id, d.f, m.t]); }
});
console.log("DEVLETLER bagli", dv, "madde yok (f'ye gider)", dvyok, "madde f'den >1y once (f'ye gider)", dvuzak);
uz.forEach(u => console.log(" ", u.join(" | ")));
// savas lat/lon
const sv = win.SAVASLAR || [];
console.log("SAVASLAR", sv.length, "lat/lon yok", sv.filter(s => s.lat == null || s.lon == null).length);
// serilerin ilk savasi
const ser = win.SERILER || [];
console.log("SERILER", ser.length, "savassiz seri", ser.filter(s => !sv.some(x => x.seri === s.id)).map(s => s.id).join(","));
// kaynak damga
require("vm").runInContext(require("fs").readFileSync(require("path").join(__dirname, "..", "js", "kaynak_damga.js"), "utf8"), win);
const KD = win.KaynakDamga, KG = win.KAYNAK_GUVEN;
console.log("KaynakDamga", !!KD, "KAYNAK_GUVEN", !!KG);
if (KD && KG) {
  const say = {}; ol.forEach(o => { const r = KD.damgala(o.kaynak || "", o.t); say[r.damga] = (say[r.damga] || 0) + 1; });
  console.log("damga dagilimi", JSON.stringify(say), "tanimli:", Object.keys(KG.damgalar).join(","));
  Object.keys(say).forEach(k => { if (!KG.damgalar[k]) console.log("  TANIMSIZ damga:", k, say[k]); });
}

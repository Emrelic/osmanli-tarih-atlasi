// ARAC-HALKA-FETIH-KIYAS-0913 — HALKA-FETIH · 13 Eylül 2026
// data/kaynakli_halka_fetih.js için: ① yüzyıl · kesinlik sayımı ② MEVCUT HALKALARLA kıyas (ferhatpasa · tekil · kronoloji):
//   aynı yer + örtüşen pencere + farklı devlet = ÇELİŞKİ · aynı yer aynı devlet = bilgi (tarih farkı)
// ③ ATLAS DOLGUSU kıyası: tanıklık penceresinin SON günü atlas o yerde Osmanlı (d/v) boyamıyor mu?
//   🔴 Atlas referans DEĞİLDİR (§4) — "atlas düzeltilecek adayı", kaynak okunmadı, hüküm değil.
// Pencere hesabı app.js'in GERÇEK `kaynakliHalkaPencere` kodu (ARAC-HALKA-KRONOLOJI-KIYAS-0913 ile aynı sökme).
// Kullanım: node denetim/ARAC-HALKA-FETIH-KIYAS-0913.js [--json yol]
const fs = require("fs");
const L = require("./ARAC-HALKA-KRONOLOJI-YUKLE-0913.js");
const app = L.oku("js/app.js");
function sok(ad) {
  const i = app.indexOf("function " + ad + "("); if (i < 0) throw new Error("app.js'te yok: " + ad);
  let j = app.indexOf("{", i), d = 0;
  for (let k = j; k < app.length; k++) { if (app[k] === "{") d++; else if (app[k] === "}" && --d === 0) return app.slice(i, k + 1); }
  throw new Error("kapanmayan: " + ad);
}
eval(["_khKes", "_khGunUTC", "_khParca", "_khBirimBasi", "_khBirimSonu", "kaynakliHalkaPencere"].map(sok).join("\n")
  .replace(/^function (\w+)/gm, "global.$1 = function $1"));
const { ix: yerIx } = L.yerlesimler();
const yukle = (dosya, ad) => { global.window = {}; eval(L.oku(dosya)); return (window[ad] || []).map(r => Object.assign({ _dosya: dosya.replace(/^data\/kaynakli_halka_|\.js$/g, "") }, r)); };
const HF = yukle("data/kaynakli_halka_fetih.js", "KAYNAKLI_HALKA_FETIH");
const DIGER = yukle("data/kaynakli_halka_ferhatpasa.js", "KAYNAKLI_HALKA_FERHATPASA")
  .concat(yukle("data/kaynakli_halka_tekil.js", "KAYNAKLI_HALKA_TEKIL"), yukle("data/kaynakli_halka_kronoloji.js", "KAYNAKLI_HALKA_KRONOLOJI"));
const gunStr = g => new Date(g * 864e5).toISOString().slice(0, 10);
const say = (arr, f) => arr.reduce((a, r) => { const k = f(r); a[k] = (a[k] || 0) + 1; return a; }, {});
const out = { toplam: HF.length };
out.yuzyil = Object.fromEntries(Object.entries(say(HF, r => Math.floor((+(r.tarih || r.f).slice(0, 4) - 1) / 100) + 1 + ". yy")).sort((a, b) => parseInt(a[0]) - parseInt(b[0])));
out.kesinlik = say(HF, r => r.kesinlik);
out.kaynak_tdv = HF.filter(r => r.kaynak.slug).length;

// ② mevcut halkalarla
const celiski = [], ayniYer = [];
for (const r of HF) {
  const p = kaynakliHalkaPencere(r); if (!p) continue;
  for (const t of DIGER.filter(t => t.yer === r.yer)) {
    const q = kaynakliHalkaPencere(t); if (!q) continue;
    const ortus = p[0] < q[1] && q[0] < p[1];
    const satir = { hf: r.id, hf_pencere: gunStr(p[0]) + "→" + gunStr(p[1]), diger: t._dosya + ":" + t.id, diger_devlet: t.devlet, diger_pencere: gunStr(q[0]) + "→" + gunStr(q[1]), ortusuyor: ortus };
    if (t.devlet !== r.devlet && ortus) celiski.push(satir); else ayniYer.push(satir);
  }
}
out.celiski = celiski; out.ayni_yer = ayniYer;

// ③ atlas dolgusu (yalnız aday listesi)
const gunNo = s => { const p = _khParca(s); return p ? _khGunUTC(p.y, p.a, p.g) : null; };
function atlasSahip(y, g) {
  const ic = p => { const f = gunNo(p.f), t = gunNo(p.t); return f != null && t != null && f <= g && g < t; };
  const s = new Set();
  for (const p of y.d || []) if (ic(p)) s.add("osmanli");
  for (const p of y.v || []) if (ic(p)) s.add("osmanli(tabi)");
  for (const p of y.s || []) if (ic(p)) s.add(p.d);
  for (const p of y.isg || []) if (ic(p)) s.add("isg:" + (p.d || p.k || "?"));
  return [...s];
}
const osm = arr => arr.some(s => s === "osmanli" || s === "osmanli(tabi)");
const aday = [];
for (const r of HF) {
  const p = kaynakliHalkaPencere(r); const y = (yerIx[r.yer] || [])[0]; if (!p || !y) continue;
  const g = p[1] - 1, sahip = atlasSahip(y, g);
  if (osm(sahip)) { if (!sahip.includes("osmanli")) aday.push({ id: r.id, yer: r.yer, gun: gunStr(g), atlas: sahip.join("+"), sinif: "TÂBİ BOYANIYOR (doğrudan değil)", rapor: r.rapor.split(" · türetme")[0] }); continue; }
  let sinif = "GERÇEK UYUŞMAZLIK";
  if (g < _khGunUTC(1281, 1, 1)) sinif = "ATLAS PENCERESİ ÖNCESİ";
  else for (let dd = 1; dd <= 30; dd++) if (osm(atlasSahip(y, g + dd)) || osm(atlasSahip(y, g - dd))) { sinif = "GÜN FARKI ≤30 (atlas " + (osm(atlasSahip(y, g + dd)) ? "+" : "−") + dd + " gün)"; break; }
  aday.push({ id: r.id, yer: r.yer, gun: gunStr(g), atlas: sahip.length ? sahip.join("+") : "SAHİPSİZ", sinif, rapor: r.rapor.split(" · türetme")[0] });
}
out.atlas_adayi = aday;
out.atlas_sinif = say(aday, a => a.sinif.replace(/ \(atlas.*$/, ""));
const ji = process.argv.indexOf("--json");
if (ji > 0) fs.writeFileSync(process.argv[ji + 1], JSON.stringify(out, null, 1));
console.log("TOPLAM " + out.toplam + " · TDV slug'lı " + out.kaynak_tdv);
console.log("YÜZYIL   " + JSON.stringify(out.yuzyil));
console.log("KESİNLİK " + JSON.stringify(out.kesinlik));
console.log("\nMEVCUT HALKALARLA ÇELİŞKİ (aynı yer · örtüşen pencere · farklı devlet): " + celiski.length);
for (const c of celiski) console.log("  " + JSON.stringify(c));
console.log("AYNI YER, ÖBÜR İLİŞKİLER: " + ayniYer.length);
for (const c of ayniYer) console.log("  " + JSON.stringify(c));
console.log("\nATLAS DOLGUSU O GÜN OSMANLI (d) GÖSTERMİYOR — düzeltilecek ADAYI: " + aday.length + " / " + HF.length);
console.log("  sınıf: " + JSON.stringify(out.atlas_sinif));
for (const a of aday) console.log("  " + a.yer.padEnd(18) + a.gun + "  atlas: " + a.atlas.padEnd(22) + a.sinif + "  ← " + a.rapor);

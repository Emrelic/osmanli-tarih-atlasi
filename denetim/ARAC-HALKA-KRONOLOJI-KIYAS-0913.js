// ARAC-HALKA-KRONOLOJI-KIYAS-0913 — HALKA-KRONOLOJI · 13 Eylül 2026
// ADIM 4 · SAYIM + KIYAS. data/kaynakli_halka_kronoloji.js için:
//   ① devlet · bölge (devletler.js `bolge`) · yüzyıl sayımı
//   ② ÇELİŞKİ: aynı yer, kesin pencereleri ÖRTÜŞEN, devleti FARKLI tohum halkası (ferhatpasa · tekil)
//      + aynı devlet ama tarih uyuşmazlığı (bilgi)
//   ③ ATLAS DOLGUSU ile kıyas: tanıklık penceresinin SON günü (ele geçirmeden sonra) atlasın o yerde
//      boyadığı sahip (d/v ⇒ osmanli · s ⇒ kimlik · isg ⇒ ikincil) tanıklığın devletini İÇERMİYOR mu?
//      🔴 Atlas referans DEĞİLDİR (§4): uyuşmazlık "atlas düzeltilecek adayı" olarak listelenir, hüküm değil.
// Pencere hesabı app.js'in GERÇEK `kaynakliHalkaPencere` kodudur (ARAC-HALKA-SINA-0913 ile aynı sökme).
// Kullanım: node denetim/ARAC-HALKA-KRONOLOJI-KIYAS-0913.js [--json yol]
const fs = require("fs"), path = require("path");
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
const { Y, ix: yerIx } = L.yerlesimler();
const { ix: kunye } = L.devletler();
const yukle = (dosya, ad) => { global.window = {}; eval(L.oku(dosya)); return window[ad] || []; };
const KR = yukle("data/kaynakli_halka_kronoloji.js", "KAYNAKLI_HALKA_KRONOLOJI");
const TOHUM = yukle("data/kaynakli_halka_ferhatpasa.js", "KAYNAKLI_HALKA_FERHATPASA").concat(yukle("data/kaynakli_halka_tekil.js", "KAYNAKLI_HALKA_TEKIL"));
const gunStr = g => new Date(g * 864e5).toISOString().slice(0, 10);
const say = (arr, f) => arr.reduce((a, r) => { const k = f(r); a[k] = (a[k] || 0) + 1; return a; }, {});
const sirala = o => Object.fromEntries(Object.entries(o).sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)));
const out = {};
out.toplam = KR.length;
out.devlet = sirala(say(KR, r => r.devlet));
out.bolge = sirala(say(KR, r => r.devlet === "osmanli" ? "(osmanli — atlas çekirdeği, künyesiz)" : (kunye[r.devlet] || {}).bolge || "?"));
out.yuzyil = Object.fromEntries(Object.entries(say(KR, r => Math.floor((+(r.tarih || r.f).slice(0, 4) - 1) / 100) + 1 + ". yy")).sort((a, b) => parseInt(a[0]) - parseInt(b[0])));
out.kesinlik = say(KR, r => typeof r.kesinlik === "object" ? "aralik" : r.kesinlik);
out.yer_bolgesi = sirala(say(KR, r => { const y = (yerIx[r.yer] || [])[0]; return y ? (y.lat > 0 ? "K" : "G") + (y.lon < 20 ? "·batı<20°D" : y.lon < 45 ? "·20-45°D" : "·doğu>45°D") : "?"; }));

// ② tohum halkalarıyla çelişki
const celiski = [], ayniDevletFark = [];
for (const r of KR) {
  const p = kaynakliHalkaPencere(r); if (!p) continue;
  for (const t of TOHUM.filter(t => t.yer === r.yer)) {
    const q = kaynakliHalkaPencere(t); if (!q) continue;
    const ortus = p[0] < q[1] && q[0] < p[1];
    if (t.devlet !== r.devlet && ortus) celiski.push({ kr: r.id, kr_devlet: r.devlet, kr_pencere: gunStr(p[0]) + "→" + gunStr(p[1]), tohum: t.id, tohum_devlet: t.devlet, tohum_pencere: gunStr(q[0]) + "→" + gunStr(q[1]) });
    else if (t.devlet === r.devlet) ayniDevletFark.push({ kr: r.id, kr_pencere: gunStr(p[0]) + "→" + gunStr(p[1]), tohum: t.id, tohum_pencere: gunStr(q[0]) + "→" + gunStr(q[1]), ortusuyor: ortus });
    else ayniDevletFark.push({ kr: r.id, kr_devlet: r.devlet, tohum: t.id, tohum_devlet: t.devlet, tohum_pencere: gunStr(q[0]) + "→" + gunStr(q[1]), ortusuyor: false, not: "farklı devlet, pencereler örtüşmüyor — sıralı el değiştirme olabilir" });
  }
}
out.tohum_celiski = celiski;
out.tohum_ayni_yer_diger = ayniDevletFark;

// ③ atlas dolgusu kıyası (yalnız aday listesi)
const gunNo = s => { const p = _khParca(s); return p ? _khGunUTC(p.y, p.a, p.g) : null; };
function atlasSahip(y, g) {
  const ic = (p) => { const f = gunNo(p.f), t = gunNo(p.t); return f != null && t != null && f <= g && g < t; };
  const s = new Set();
  for (const p of y.d || []) if (ic(p)) s.add("osmanli");
  for (const p of y.v || []) if (ic(p)) s.add("osmanli(tabi)");
  for (const p of y.s || []) if (ic(p)) s.add(p.d);
  for (const p of y.isg || []) if (ic(p)) s.add("isg:" + (p.d || p.k || "?"));
  return [...s];
}
const kunyeHarita = id => (kunye[id] || {}).harita;
const atlasAday = [];
for (const r of KR) {
  const p = kaynakliHalkaPencere(r); const y = (yerIx[r.yer] || [])[0]; if (!p || !y) continue;
  const g = p[1] - 1;   // pencerenin SON günü — ele geçirme o birim içinde bir yerde; birimin sonunda sahip olmalı
  const sahip = atlasSahip(y, g);
  const eslesir = sahip.some(s => { const c = s.replace(/^isg:/, "").replace("(tabi)", "");
    return c === r.devlet || (kunyeHarita(r.devlet) && c === kunyeHarita(r.devlet)) || (kunye[c] && kunye[c].harita && kunye[c].harita === kunyeHarita(r.devlet)); });
  if (eslesir) continue;
  // sınıf: atlas penceresi (1281) ÖNCESİ ⇒ kıyas yok · ±30 gün içinde atlas aynı devleti gösteriyor ⇒ GÜN FARKI
  //        (Değişmez 2 toleransı; teslim ≠ tahliye olabilir) · yoksa GERÇEK UYUŞMAZLIK
  const esle = gg => atlasSahip(y, gg).some(s => { const c = s.replace(/^isg:/, "").replace("(tabi)", "");
    return c === r.devlet || (kunyeHarita(r.devlet) && (c === kunyeHarita(r.devlet) || (kunye[c] && kunye[c].harita === kunyeHarita(r.devlet)))); });
  let sinif = "GERÇEK UYUŞMAZLIK";
  if (g < _khGunUTC(1281, 1, 1)) sinif = "ATLAS PENCERESİ ÖNCESİ (kıyas yok)";
  else { for (let dd = 1; dd <= 30; dd++) if (esle(g + dd) || esle(g - dd)) { sinif = "GÜN FARKI ≤30 (atlas " + (esle(g + dd) ? "+" : "−") + dd + " gün)"; break; } }
  atlasAday.push({ id: r.id, yer: r.yer, devlet: r.devlet, gun: gunStr(g), atlas: sahip.length ? sahip.join("+") : "SAHİPSİZ", sinif, rapor: r.rapor.split(" · türetme")[0] });
}
out.atlas_duzeltilecek_adayi = atlasAday;
out.atlas_sinif = say(atlasAday, a => a.sinif.replace(/ \(atlas.*$/, ""));
const ji = process.argv.indexOf("--json");
if (ji > 0) fs.writeFileSync(process.argv[ji + 1], JSON.stringify(out, null, 1));
console.log("TOPLAM " + out.toplam);
console.log("DEVLET   " + JSON.stringify(out.devlet));
console.log("BÖLGE    " + JSON.stringify(out.bolge));
console.log("YÜZYIL   " + JSON.stringify(out.yuzyil));
console.log("KESİNLİK " + JSON.stringify(out.kesinlik));
console.log("\nTOHUM HALKASIYLA ÇELİŞKİ (aynı yer · örtüşen pencere · farklı devlet): " + celiski.length);
for (const c of celiski) console.log("  " + JSON.stringify(c));
console.log("TOHUMLA AYNI YER, ÖBÜR İLİŞKİLER: " + ayniDevletFark.length);
for (const c of ayniDevletFark) console.log("  " + JSON.stringify(c));
console.log("\nATLAS DOLGUSU TANIKLIĞIN DEVLETİNİ GÖSTERMİYOR (pencere son günü) — düzeltilecek ADAYI: " + atlasAday.length + " / " + KR.length);
console.log("  sınıf: " + JSON.stringify(out.atlas_sinif));
for (const a of atlasAday) console.log("  " + a.yer.padEnd(22) + a.devlet.padEnd(22) + a.gun + "  atlas: " + a.atlas.padEnd(12) + a.sinif + "  ← " + a.rapor);

// 🔴 `1783-09-03` TOPLU KESİMİ — kaçı ABD DIŞINDA kaldı?
//
// Ölçüm: 60 dönem ucu bu günü kullanıyor, 30 nokta `ingiltere/fransa →
// abd` diye kesiliyor. 1783 Paris Antlaşması Onüç Koloni'nin sınırlarını
// çizdi; Kanada ve Yeni İspanya ONUN DIŞINDA kaldı.
//
// 🔴 KAMERIKA turumda TERS YÖNÜ düzeltmiştim: kaba Kanada kutum ABD'nin
//   Büyük Göller noktalarını (Michilimackinac · Green Bay · Prairie du
//   Chien …) `kanada`ya vermişti, elle listeyle düzelttim. AMA TERSİNİ
//   HİÇ SINAMADIM: `abd` verilen noktaların hangisi Kanada/Meksika'da?
//   ⇒ Bir düzeltmeyi TEK YÖNDE sınamak, öteki yönü açık bırakır
//     (`§3.5.1`: bir sınır kayması önerildiğinde İKİ UÇ DA ölçülür).
//
// ÖLÇÜT: komşu konvansiyonu — bir noktanın en yakın 6 komşusunun 1923'te
// çoğunluğu `kanada` ya da `meksika` ise, o nokta ŞÜPHELİ.
// ⚠️ Bu bir KANIT DEĞİL bir ŞÜPHE testi (§11: komşuluk bir ipucudur).
//   Her şüpheli AYRICA okunur.
//
// kullanım: node denetim/ARAC-1783-TOPLU-KESIM.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const G = "1923-10-28", GUN = "1783-09-03";

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};
const sah = y => { const p = (y.s || []).find(q => q.f <= G && G < q.t); return p ? p.d : null; };

// `1783-09-03`te `abd`ye geçen noktalar
const kesilen = K.filter(([y]) => (y.s || []).some(p => p.f === GUN && p.d === "abd"));
console.log("`" + GUN + "`te `abd`ye geçen nokta: " + kesilen.length + "\n");

const supheli = [], temiz = [];
for (const [y, f] of kesilen) {
  const kom = K.map(([o]) => [km(y.lat, y.lon, o.lat, o.lon), o])
    .filter(x => x[0] > 0.01).sort((a, b) => a[0] - b[0]).slice(0, 6);
  const say = {};
  for (const [, o] of kom) { const s = sah(o); if (s) say[s] = (say[s] || 0) + 1; }
  const sira = Object.entries(say).sort((a, b) => b[1] - a[1]);
  const bas = sira[0] || ["—", 0];
  const kayit = { ad: y.ad, lat: +y.lat.toFixed(3), lon: +y.lon.toFixed(3), dosya: f,
    komsu: sira.map(([k, v]) => k + " " + v).join(" · "),
    baskin: bas[0], baskinN: bas[1],
    onceki: (y.s || []).filter(p => p.t === GUN).map(p => p.d + " " + p.f).join(" · "),
    not: String(y.not || "").slice(0, 120) };
  if (bas[0] === "kanada" || bas[0] === "meksika") supheli.push(kayit); else temiz.push(kayit);
}

console.log("=".repeat(74));
console.log("🔴 ŞÜPHELİ — komşu çoğunluğu `kanada` ya da `meksika`: " + supheli.length);
console.log("=".repeat(74));
for (const s of supheli.sort((a, b) => b.baskinN - a.baskinN)) {
  console.log("\n  " + s.ad + "   (" + s.lat + ", " + s.lon + ")   [" + s.dosya + "]");
  console.log("     önceki dönem : " + s.onceki);
  console.log("     komşu (6)    : " + s.komsu);
  if (s.not) console.log("     not          : " + s.not);
}
console.log("\n" + "=".repeat(74));
console.log("🟢 TEMİZ — komşu çoğunluğu `abd`: " + temiz.length);
console.log("   " + temiz.map(t => t.ad).join(" · "));

fs.writeFileSync("denetim/_1783_supheli.json",
  JSON.stringify({ supheli, temiz: temiz.map(t => t.ad) }, null, 1) + "\n", "utf8");
console.log("\n-> denetim/_1783_supheli.json");

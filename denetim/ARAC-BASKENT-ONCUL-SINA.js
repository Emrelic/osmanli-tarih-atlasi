// 🔴 KENDİ ÖNCÜLÜMÜ SINIYORUM — ve koordinatör onu ONAYLADI, yani
//   çürürse iki taraf birden yanılmış olur.
//
// İDDİA (benim, M-3086): "Port-au-Prince yoksa bağımsız Haiti'nin
//   başkenti Jaragua'nın peteğinden boyanıyor — `§3.5.-1` YANLIŞ ATIF."
//
// 🔴 AMA `§2` şunu der: noktasız bölge en yakın peteğe emilir ve
//   O PETEĞİN SAHİBİYLE boyanır. Jaragua'nın 1804-1923 sahibi `haiti`.
//   ⇒ Boyanan KİMLİK zaten DOĞRU. Eksik olan kimlik değil YER.
//   O hâlde bu `§3.5.-1` (devlet var, yeri yanlış) DEĞİL — çünkü
//   yanlış bir devlet boyanmıyor.
//
// GERÇEK SORU: eksik nokta, gövdenin BİÇİMİNİ bozuyor mu? Yani ülke
//   toprağının bir kısmı KOMŞU ülkenin peteğine mi düşüyor?
//   Ölçüt: her aday başkent için — en yakın AYNI kimlikli nokta ile
//   en yakın FARKLI kimlikli nokta. İkincisi daha yakınsa, o bölge
//   komşuya emiliyor demektir.
//
// kullanım: node denetim/ARAC-BASKENT-ONCUL-SINA.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const GUN = "1923-10-28";

const ADAY = [
  ["Port-au-Prince", 18.5944, -72.3074, "haiti"],
  ["Cap-Haïtien", 19.7594, -72.1981, "haiti"],          // Haiti'nin kuzeyi
  ["Les Cayes (güney)", 18.1900, -73.7500, "haiti"],     // Haiti'nin batı ucu
  ["Nueva Guatemala de la Asunción", 14.6349, -90.5069, "guatemala"],
  ["Nukuʻalofa", -21.1393, -175.2049, "tonga-kralligi"],
];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push(y);
}
const aktif = (a, g) => Array.isArray(a) ? (a.find(p => p.f <= g && g < p.t) || null) : null;
const sahip = y => {
  const d = aktif(y.d, GUN); if (d) return "OSMANLI";
  const v = aktif(y.v, GUN); if (v) return v.k || "tabi";
  const s = aktif(y.s, GUN); if (s) return s.d;
  return null;
};
const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};

for (const [ad, la, lo, kimlik] of ADAY) {
  const sirali = K.map(y => [km(la, lo, y.lat, y.lon), y, sahip(y)])
    .sort((a, b) => a[0] - b[0]);
  const ayni = sirali.find(x => x[2] === kimlik);
  const farkli = sirali.find(x => x[2] && x[2] !== kimlik);
  console.log("=".repeat(72));
  console.log(ad + "   (" + la + ", " + lo + ")   olması gereken: " + kimlik);
  console.log("   en yakın AYNI kimlikli : " + (ayni
    ? ayni[0].toFixed(1) + " km  " + ayni[1].ad : "🔴 YOK"));
  console.log("   en yakın FARKLI kimlikli: " + (farkli
    ? farkli[0].toFixed(1) + " km  " + farkli[1].ad + "  (" + farkli[2] + ")" : "—"));
  if (ayni && farkli) {
    const emilir = farkli[0] < ayni[0];
    console.log("   ⇒ " + (emilir
      ? "🔴 FARKLI kimlik DAHA YAKIN — bu konum bugün " + farkli[2] + " boyanıyor"
      : "🟢 AYNI kimlik daha yakın — bu konum bugün de " + kimlik + " boyanıyor"));
  }
  console.log("   ilk 5 komşu: " + sirali.slice(0, 5)
    .map(x => x[1].ad + " " + x[0].toFixed(0) + "km/" + (x[2] || "—")).join(" · "));
}

console.log("\n" + "=".repeat(72));
console.log("HAİTİ-DOMİNİK SINIRI — gövdeyi kim böler?");
const hai = K.filter(y => sahip(y) === "haiti");
const dom = K.filter(y => sahip(y) === "dominik-cumhuriyeti");
console.log("  haiti noktası              : " + hai.length + "  ("
  + hai.map(y => y.ad + " " + y.lat.toFixed(2) + "," + y.lon.toFixed(2)).join(" · ") + ")");
console.log("  dominik-cumhuriyeti noktası: " + dom.length + "  ("
  + dom.map(y => y.ad + " " + y.lat.toFixed(2) + "," + y.lon.toFixed(2)).join(" · ") + ")");
// gerçek Haiti toprağında ızgara: 18,0-20,0 K · 74,5-71,7 B
let hn = 0, dn = 0, bn = 0, toplam = 0;
for (let a = 18.0; a <= 20.0; a += 0.1) for (let o = -74.5; o <= -71.75; o += 0.1) {
  const en = K.map(y => [km(a, o, y.lat, y.lon), sahip(y)]).sort((x, y) => x[0] - y[0])[0];
  toplam++;
  if (en[1] === "haiti") hn++;
  else if (en[1] === "dominik-cumhuriyeti") dn++;
  else bn++;
}
console.log("\n  Haiti toprağı kabaca (18,0-20,0K / 74,5-71,75B) ızgarası: "
  + toplam + " hücre");
console.log("     en yakın nokta `haiti`              : " + hn
  + "  (%" + Math.round(100 * hn / toplam) + ")");
console.log("     en yakın nokta `dominik-cumhuriyeti`: " + dn
  + "  (%" + Math.round(100 * dn / toplam) + ")  🔴 KOMŞUYA EMİLİYOR");
console.log("     başka                                : " + bn);
console.log("  ⚠️ Bu Voronoi'nin KABA bir taklidi — gerçek motor kıyı/göl/nehir");
console.log("     yaslamasıyla çalışır. Yön gösterir, ÖLÇÜ vermez.");

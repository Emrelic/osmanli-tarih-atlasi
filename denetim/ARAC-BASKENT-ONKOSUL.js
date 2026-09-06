// ÜÇ BAŞKENT — YAZMADAN ÖNCEKİ ÖN KOŞUL ÖLÇÜMÜ.
//
// Koordinatörün dört şartı (M-3087):
//   ① yalnız ÖNERİ, denetim/ altına, VERİ YAZMA
//   ② her nokta için akademik kaynak ADIYLA, bulunamazsa `bulunamadı`
//   ③ 3 km kuralı — 3 km içinde nokta var mı ÖLÇ; VARSA zaman çizgileri
//      FARKLI mı (farklıysa mükerrer DEĞİL)
//   ④ `kur:` için kaynak yoksa YAZMA
//
// 🔴 ③'ün doğru okunuşu (§11): 3 km bir YASAK değil bir ŞÜPHE EŞİĞİ, ve
//   şartı ZAMAN ÇİZGİLERİNİN AYNI olmasıdır. Kuralı doğuran vakalar
//   Varat/Varad (aynı yer iki kayıt) ve Afyon/Karahisâr-ı Sâhib (100 m,
//   ÇELİŞEN zaman çizgileri) — kusur yakınlık değil, aynı yerin iki kez
//   ve TUTARSIZ yazılması.
//
// Bu alet ayrıca KARDEŞ kayıtların zincirini basar: yeni nokta komşusunun
// konvansiyonunu izlemeli, kendi konvansiyonunu ICAT ETMEMELİ.
//
// kullanım: node denetim/ARAC-BASKENT-ONKOSUL.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");

const ADAY = [
  ["Port-au-Prince", 18.5944, -72.3074, "haiti",
    ["Jaragua (Taino cacicazgosu)", "Santo Domingo", "Higüey (Taino cacicazgosu)"]],
  ["Nueva Guatemala de la Asunción", 14.6349, -90.5069, "guatemala",
    ["Antigua Guatemala (Santiago de los Caballeros)", "Nojpetén (Tayasal / Flores)"]],
  ["Nukuʻalofa", -21.1393, -175.2049, "tonga-kralligi",
    ["Lapaha (Muʻa)"]],
];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
console.log("evren: " + K.length + " nokta\n");

global.window = {};
eval(fs.readFileSync("data/devletler.js", "utf8"));
const D = Object.keys(global.window).filter(k => Array.isArray(global.window[k]))
  .flatMap(k => global.window[k]).filter(d => d && d.id);
const OMUR = {};
for (const d of D) OMUR[d.id] = [d.f, d.t, d.ad];

const rad = x => x * Math.PI / 180;
const km = (a, b, c, d) => {
  const h = Math.sin(rad(c - a) / 2) ** 2
    + Math.cos(rad(a)) * Math.cos(rad(c)) * Math.sin(rad(d - b) / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
};
const zincir = y => (y.s || []).map(p => p.d + " " + p.f + "→" + p.t).join(" · ") || "(s: yok)";

for (const [ad, la, lo, kunye, kardesler] of ADAY) {
  console.log("=".repeat(74));
  console.log(ad + "   (" + la + ", " + lo + ")   hedef künye: " + kunye);
  const o = OMUR[kunye];
  console.log("   künye ömrü: " + (o ? o[0] + " .. " + o[1] + "   " + o[2] : "🔴 YOK"));

  // ③ 3 KM KURALI
  const yakin = K.map(([y, f]) => [km(la, lo, y.lat, y.lon), y, f])
    .filter(x => x[0] <= 3).sort((a, b) => a[0] - b[0]);
  console.log("\n   ③ 3 KM İÇİNDE: " + (yakin.length ? yakin.length + " nokta 🔴" : "0 nokta 🟢"));
  for (const [d, y, f] of yakin)
    console.log("      " + d.toFixed(2) + " km  " + y.ad + "   [" + f + "]\n         "
      + zincir(y));
  // en yakın nokta (3 km'nin dışında olsa da)
  const en = K.map(([y, f]) => [km(la, lo, y.lat, y.lon), y, f])
    .sort((a, b) => a[0] - b[0])[0];
  console.log("   en yakın nokta (mesafe ne olursa): " + en[0].toFixed(1) + " km  " + en[1].ad);

  console.log("\n   KARDEŞ KAYITLAR — konvansiyon (ICAT ETME, İZLE):");
  for (const ka of kardesler) {
    const e = K.find(([y]) => y.ad === ka);
    if (!e) { console.log("      🔴 bulunamadı: " + ka); continue; }
    const [y, f] = e;
    console.log("      " + y.ad + "   kur:" + (y.kur || "—") + "   [" + f + "]");
    console.log("         " + zincir(y));
    console.log("         alanlar: " + Object.keys(y).sort().join(" · "));
    if (y.kaynak) console.log("         kaynak: " + String(y.kaynak).slice(0, 120));
    if (y.not) console.log("         not   : " + String(y.not).slice(0, 160));
  }
  console.log("");
}

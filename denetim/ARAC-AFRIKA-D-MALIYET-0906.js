// AFRİKA D SINIFI — MALİYET ÖLÇÜMÜ, ve `habesistan` AYRIŞMASI.
//
// İKİ SORU:
//  ① Şartname "habesistan 64 nokta" diyor, ben 52 ölçtüm. NİÇİN?
//     (`§3` "ayrışırsa BİLDİR")
//  ② D sınıfı 418 nokta bir ADAY listesi. Gerçek maliyeti nedir —
//     kaç YENİ künye, kaç YENİ renk? `ARAC-ATIL-KUNYE` Afrika'da
//     SIFIR hazır künye buldu, yani Ortadoğu'nun emsali BURAYA
//     TAŞINMAZ (`§4`: bir bölgede ölçülen şey komşu bölge için bir
//     tahmin bile değildir).
//
// 🔴 KİMLİĞİ "YOK" İLAN ETMEDEN ÖNCE `devletler.js` TARANIR, tahmin
//   edilen id ARANMAZ (`urdun-emirligi` · `ingiliz-hindistani` vakaları).
//   Bu alet aday id'leri DEĞİL, künye `ad`/`ozet` metinlerini de tarar.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} }; vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (Array.isArray(A)) for (const y of A)
      if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const dev = { window: {} }; vm.createContext(dev);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), dev);
const D = dev.window.DEVLETLER || [];

const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);
const alt = (y) => {
  if (akt(y.d).length) return "OSMANLI";
  if (akt(y.v).length) return "OSMANLI-tabi";
  const s = akt(y.s)[0];
  return s ? s.d : null;
};
const canli = N.filter(y => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G) && alt(y));

// ① habesistan AYRIŞMASI — bütün noktaları, bölgeye göre
console.log("=== ① `habesistan` — 52 mi 64 mü ===");
const hab = canli.filter(y => alt(y) === "habesistan");
console.log("1923'te habesistan taşıyan nokta (KÜRESEL): " + hab.length);
const dag = {};
for (const y of hab) dag[bolge(y)] = (dag[bolge(y)] || 0) + 1;
for (const [b, n] of Object.entries(dag).sort((a, c) => c[1] - a[1]))
  console.log("   " + b.padEnd(22) + String(n).padStart(4) +
    (b === "SAHRA-ALTI-AFRIKA" ? "   <- BENİM KUTUM" : ""));
const dis = hab.filter(y => bolge(y) !== "SAHRA-ALTI-AFRIKA");
if (dis.length) {
  console.log("   kutumun DIŞINDAKİLER (enlem/boylam ile):");
  for (const y of dis) console.log("     " + y.ad.padEnd(20) +
    " lat " + y.lat.toFixed(2) + "  lon " + y.lon.toFixed(2) +
    "  -> " + bolge(y));
}

// ② D SINIFI — her metropol kimliğinin ALTINDA hangi sömürge yatıyor
console.log("\n=== ② D SINIFI — metropol başına nokta ve COĞRAFÎ KÜME ===");
const METROPOL = ["ingiltere", "fransa-cumhuriyet", "belcika", "portekiz", "italya"];
const bende = canli.filter(y => bolge(y) === "SAHRA-ALTI-AFRIKA");
for (const m of METROPOL) {
  const k = bende.filter(y => alt(y) === m);
  if (!k.length) continue;
  const la = k.map(y => y.lat), lo = k.map(y => y.lon);
  console.log("\n  " + m + "  —  " + k.length + " nokta");
  console.log("    kutu: lat " + Math.min(...la).toFixed(1) + ".." +
    Math.max(...la).toFixed(1) + "  lon " + Math.min(...lo).toFixed(1) +
    ".." + Math.max(...lo).toFixed(1));
  console.log("    örnek: " + k.slice(0, 8).map(y => y.ad).join(" · "));
}

// ③ ARDIL KÜNYE VAR MI — id TAHMİN EDİLMEZ, künye METNİ taranır
console.log("\n=== ③ SÖMÜRGE KÜNYESİ VAR MI — devletler.js TARANDI ===");
const ARA = ["kongo", "angola", "mozambik", "nijerya", "gana", "kenya",
  "uganda", "tanganyika", "rodezya", "senegal", "sudan", "somali",
  "eritre", "kamerun", "togo", "gine", "fildisi", "dahomey", "nijer",
  "cad", "gabon", "oubangui", "ubangi", "zambiya", "nyasaland",
  "sierra", "gambiya", "bechuana", "basuto", "swazi", "guney-afrika"];
const bulunan = [];
for (const a of ARA) {
  const eş = D.filter(k =>
    String(k.id || "").toLowerCase().includes(a) ||
    String(k.ad || "").toLowerCase().includes(a));
  for (const k of eş) {
    const tutar = k.f <= G && G < k.t;
    bulunan.push({ ara: a, id: k.id, ad: k.ad, f: k.f, t: k.t, tutar });
  }
}
const gor = new Set();
for (const b of bulunan) {
  if (gor.has(b.id)) continue; gor.add(b.id);
  console.log("  " + (b.tutar ? "🟢 1923 TUTUYOR " : "⚪ 1923 dışı   ") +
    String(b.id).padEnd(26) + " " + b.f + "->" + b.t + "  " + b.ad);
}
console.log("\n  taranan anahtar " + ARA.length + " · bulunan künye " +
  gor.size + " · 1923'ü TUTAN " + bulunan.filter(b => b.tutar).length);
const yok = ARA.filter(a => !bulunan.some(b => b.ara === a));
console.log("  🔴 HİÇ KÜNYE BULUNAMAYAN anahtar (" + yok.length + "): " +
  yok.join(" · "));

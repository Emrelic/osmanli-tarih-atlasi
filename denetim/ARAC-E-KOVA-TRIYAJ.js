// E KOVASI TRİYAJI — "1-5 dönem" bir KUSUR mu, yoksa o ülkenin atlastaki
// TÜM ayak izi mi?
//
// 🔴 Koordinatörün uyarısı: "bu bir ADAY listesi, kusur listesi DEĞİL".
//   Tonga'nın tek noktası olması DOĞRU olabilir. Sayı tek başına
//   hiçbir şey söylemiyor — komşuluk söylüyor:
//
//   ÖLÇÜT: bir kimliğin noktalarının etrafında, KENDİSİNE AİT OLMASI
//   BEKLENEN ama BAŞKA kimlik taşıyan nokta var mı?
//   Uygulaması: her kimliğin noktalarının çevresinde R km yarıçapta
//   hangi kimlikler var. Bir ülke kimliği KENDİ komşuluğunda azınlıksa,
//   toprağının bir kısmı başkasıyla boyanıyor olabilir.
//
// ⚠️ SINIRI ÖNCEDEN: bu bir SINIR ÖLÇÜMÜ DEĞİL. Ülke sınırı poligonumuz
//   yok; komşuluk bir İPUCU üretir, KANIT değil (§11: "komşuluk bir
//   ipucudur, kanıt değil — ve o vakada YANLIŞ YÖNE işaret ediyordu").
//   Çıktı bir ŞÜPHELİ listesidir; her satır ayrıca ölçülür.
//
// kullanım: node denetim/ARAC-E-KOVA-TRIYAJ.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const GUN = "1923-10-28";
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];
const R_KM = 300;

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
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
const benim = K.filter(([y]) => BENIM.includes(bolge(y)));

const E = ["tonga-kralligi", "yeni-zelanda", "guatemala", "panama-cumhuriyeti",
  "haiti", "uruguay-cumhuriyeti", "venezuela-cumhuriyeti", "dominik-cumhuriyeti",
  "kuba-cumhuriyeti", "paraguay-cumhuriyeti"];

for (const id of E) {
  const benimki = benim.filter(([y]) => sahip(y) === id);
  if (!benimki.length) { console.log("\n" + id + " — kutumda 0 nokta"); continue; }
  const la = benimki.map(x => x[0].lat), lo = benimki.map(x => x[0].lon);
  const yayilim = km(Math.min(...la), Math.min(...lo), Math.max(...la), Math.max(...lo));
  // komşuluk
  const komsu = {};
  for (const [y] of benimki) for (const [o] of benim) {
    if (o === y) continue;
    if (km(y.lat, y.lon, o.lat, o.lon) <= R_KM) {
      const s = sahip(o) || "(sahipsiz)";
      if (s !== id) komsu[s] = (komsu[s] || 0) + 1;
    }
  }
  const yad = Object.entries(komsu).sort((a, b) => b[1] - a[1]);
  const toplamYad = yad.reduce((s, x) => s + x[1], 0);
  const oran = toplamYad / (toplamYad + benimki.length);
  const damga = oran > 0.6 ? "🔴 ŞÜPHELİ" : oran > 0.3 ? "🟡" : "🟢";
  console.log("\n" + damga + "  " + id + "   " + benimki.length + " nokta · yayılım "
    + Math.round(yayilim) + " km · " + R_KM + " km'de YABANCI komşu " + toplamYad
    + " (%" + Math.round(oran * 100) + ")");
  console.log("      noktalar: " + benimki.map(x => x[0].ad).join(" · "));
  if (yad.length) console.log("      yabancı komşular: "
    + yad.slice(0, 6).map(([k, v]) => k + " " + v).join(" · "));
}

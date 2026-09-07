// ENKLAV-0907 — C-HAKİKİ (12) TEK TEK DOĞRULAMA
//
// 🔴 ŞARTNAMENİN ŞARTI: "gerçekten enklav mı, yoksa §2'nin NOKTASIZLIK
//    vakası mı? İkisi haritada AYNI görünür ve çareleri TERS."
//    ⇒ Bu alet o soruyu sorabilmek için üç şey döker:
//       ① kaydın TAM `s:`/`d:`/`v:` zinciri (süzgeçli bakış SİLDİĞİNİ göstermez)
//       ② o tarihte AYNI KİMLİĞİ taşıyan bütün noktalar (gövde nerede?)
//       ③ ada ile gövde ARASINDAKİ kutuda kaç nokta var, ve KİMİN
//          (noktasızlık mı, başka kimlik mi — `§2`: hangi yöne hata
//           ürettiği KOMŞUNUN kimliğine bağlı)
//
// ⚠️ Alet HÜKÜM VERMEZ. Enklav mı noktasızlık mı olduğu KAYNAK sorusudur.

const fs = require("fs");
const path = require("path");
const KOK = path.join(__dirname, "..");

global.window = {};
const gi = require("child_process").execSync(
  'py -c "import sys;sys.path.insert(0,\'arac\');import girdi;print(chr(10).join(girdi.GIRDI_DOSYALARI))"',
  { cwd: KOK, encoding: "utf8" }
).trim().split(/\r?\n/);
let okunan = 0;
for (const f of gi) {
  const yol = path.join(KOK, "data", f.trim());
  if (!fs.existsSync(yol)) throw new Error("GİRDİ DOSYASI YOK: " + yol);
  eval(fs.readFileSync(yol, "utf8"));
  okunan++;
}
const Y = Object.keys(global.window).filter(k => k.startsWith("YERLESIM"))
  .flatMap(k => global.window[k]);
if (okunan !== gi.length) throw new Error("okunan " + okunan + " != " + gi.length);
if (Y.length < 3000) throw new Error("YERLEŞİM ÇOK AZ: " + Y.length);

// denetle.py C-hakiki listesi (7 Eylül koşusu, --ayrinti)
const C = [
  { g: "1627-01-01", ad: "Gore (Gorée)",              kim: "hollanda",        km: 4476 },
  { g: "1683-01-01", ad: "Khami",                     kim: "ingiltere",       km: 4286 },
  { g: "1444-01-01", ad: "Gore (Gorée)",              kim: "portekiz",        km: 2640 },
  { g: "1583-01-01", ad: "Massangano",                kim: "portekiz",        km: 2226 },
  { g: "1604-01-01", ad: "Kambambe (Cambambe)",       kim: "portekiz",        km: 2188 },
  { g: "1816-12-04", ad: "Çandernagor",               kim: "fransa-cumhuriyet", km: 1514 },
  { g: "1816-12-04", ad: "Pondişeri",                 kim: "fransa-cumhuriyet", km: 1514 },
  { g: "1834-01-01", ad: "Danangombe (Rozvi)",        kim: "ingiltere",       km: 1154 },
  { g: "1625-01-01", ad: "Pemaquid",                  kim: "ingiltere",       km: 963 },
  { g: "1899-01-19", ad: "Delgo (Sükkût)",            kim: "ingiliz-sudani",  km: 962 },
  { g: "1632-01-01", ad: "Falmouth (Portland, Maine)", kim: "ingiltere",      km: 906 },
  { g: "1623-01-01", ad: "Portsmouth (New Hampshire)", kim: "ingiltere",      km: 829 },
];

const ix = {};
for (const y of Y) ix[y.ad] = y;

// 🔴 Ad TAHMİN EDİLMEZ, TARANIR (§4 Türkçe yazım ekseni + `ingiliz-hindistani`
//    vakası). Eşleşmeyen ad sessizce düşmez.
for (const c of C) {
  if (ix[c.ad]) continue;
  const aday = Y.filter(y => y.ad.startsWith(c.ad.slice(0, 12)));
  if (aday.length === 1) { c.gercekAd = aday[0].ad; }
  else throw new Error("AD BULUNAMADI: " + c.ad + " (aday " + aday.length + ")");
}

const R = 6371, rad = (d) => d * Math.PI / 180;
const mesafe = (a, b) => {
  const dla = rad(b.lat - a.lat), dlo = rad(b.lon - a.lon);
  const h = Math.sin(dla / 2) ** 2 +
            Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dlo / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};
const aktif = (dz, g) => (dz || []).filter(p => p.f <= g && g < p.t);
const sahip = (y, g) => {
  for (const p of aktif(y.d, g)) return "OSMANLI";
  for (const p of aktif(y.v, g)) return "tâbi";
  for (const p of aktif(y.s, g)) return p.d;
  return null;
};

for (const c of C) {
  const y = ix[c.gercekAd || c.ad];
  console.log("\n" + "=".repeat(74));
  console.log(c.g + "  " + y.ad + "  →  " + c.kim + "   (denetle: " + c.km + " km)");
  console.log("   konum " + y.lat.toFixed(3) + ", " + y.lon.toFixed(3) +
              (y.kur ? "   kur:" + y.kur : "") + (y.enklav ? "   🟢 enklav:" + y.enklav : ""));

  // ① TAM zincir — süzgeçsiz
  for (const alan of ["s", "d", "v", "isg"]) {
    for (const p of (y[alan] || [])) {
      const su = (p.f <= c.g && c.g < p.t) ? " ◀" : "";
      console.log("     " + alan + ": " + p.f + " → " + p.t + "  " +
                  (p.d || p.k || "").toString().padEnd(24) +
                  (p.kaynak ? " kaynak:" + p.kaynak : "") + su);
    }
  }

  // ② Aynı kimliği taşıyan bütün noktalar — GÖVDE NEREDE?
  const govde = Y.filter(o => o !== y && sahip(o, c.g) === c.kim);
  console.log("   ── aynı kimliği taşıyan başka nokta: " + govde.length);
  const yakin = govde.map(o => ({ ad: o.ad, km: mesafe(y, o) }))
                     .sort((a, b) => a.km - b.km).slice(0, 5);
  for (const o of yakin) console.log("      " + o.km.toFixed(0).padStart(6) + " km  " + o.ad);

  // ③ ARADAKİ KUTU — noktasızlık mı, başka kimlik mi?
  if (yakin.length) {
    const hedef = Y.find(o => o.ad === yakin[0].ad);
    const la0 = Math.min(y.lat, hedef.lat), la1 = Math.max(y.lat, hedef.lat);
    const lo0 = Math.min(y.lon, hedef.lon), lo1 = Math.max(y.lon, hedef.lon);
    const pay = 1.0;
    const ara = Y.filter(o => o !== y && o !== hedef &&
      o.lat >= la0 - pay && o.lat <= la1 + pay &&
      o.lon >= lo0 - pay && o.lon <= lo1 + pay);
    const say = {};
    for (const o of ara) { const s = sahip(o, c.g) || "—SAHİPSİZ/YOK—"; say[s] = (say[s] || 0) + 1; }
    console.log("   ── EN YAKIN GÖVDE NOKTASINA kadar olan kutuda " + ara.length +
                " nokta (o gün):");
    for (const [s, n] of Object.entries(say).sort((a, b) => b[1] - a[1]))
      console.log("      " + String(n).padStart(4) + "  " + s);
    if (ara.length === 0)
      console.log("      🔴 SIFIR NOKTA ⇒ §2 NOKTASIZLIK ŞÜPHESİ — enklav DEĞİL olabilir");
  }
}

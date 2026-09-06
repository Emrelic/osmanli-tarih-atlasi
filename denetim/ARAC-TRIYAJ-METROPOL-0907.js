// TRİYAJ METROPOL — 1923'te metropol kimliğini anakarası DIŞINDA taşıyan
// noktaların HUKUKÎ triyajı için DÖKÜM aleti.
//
// 🔴 NE ÖLÇER: ARAC-SOMURGE-KONVANSIYON-0907.js'in saydığı 803 noktayı
//    TEK TEK döker — ad · koordinat · kimlik · o günkü s: dönemi ·
//    `isg:` örtüsü var mı · `v:` var mı · `kaynak:` var mı.
// 🔴 NE ÖLÇMEZ: hukukî durumu. O KAYNAKTAN sorulur (§4), alet bilmez.
//    Bu alet yalnız triyajın GİRDİSİNİ üretir.
//
// ⚠️ Kutu ölçütü KABA: metropolün kendi toprağı da kutunun dışında
//    kalabilir (Doğu Prusya · Balear adaları). O yüzden çıktıda
//    "anakara dışı" bir HUKUKÎ SINIF DEĞİL, bir ADAYLIK işaretidir.

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
const Y = Object.keys(global.window)
  .filter(k => k.startsWith("YERLESIM"))
  .flatMap(k => global.window[k]);
if (okunan !== gi.length) throw new Error("okunan " + okunan + " != " + gi.length);
if (Y.length < 3000) throw new Error("YERLEŞİM ÇOK AZ: " + Y.length + " — sessiz sıfır");

// ── BEKLEYEN YAMALARIN KAPSADIĞI ADLAR ────────────────────────────────
// 🔴 "bekleyen" = denetim/ altındaki yer_yama_*.js (data/'ya HENÜZ taşınmamış).
//    data/ altındakiler ZATEN CANLI — girdi.py onları okuyor, yani
//    yukarıdaki Y kümesinde etkileri VAR. İkisini karıştırmak,
//    inmiş bir yamayı "bekliyor" saymaktır.
const bekleyenAdlar = new Set();
const bekleyenDosya = {};
for (const f of fs.readdirSync(path.join(KOK, "denetim"))) {
  if (!/^yer_yama_.*\.js$/.test(f)) continue;
  const metin = fs.readFileSync(path.join(KOK, "denetim", f), "utf8");
  const adlar = new Set();
  for (const m of metin.matchAll(/["']?\bad["']?\s*:\s*"([^"]+)"/g)) adlar.add(m[1]);
  bekleyenDosya[f] = [...adlar];
  for (const a of adlar) bekleyenAdlar.add(a);
}

const METROPOL = {
  "ingiltere":         { ad: "Britanya", la: [49.8, 61.0], lo: [-11.0, 2.0] },
  "fransa-cumhuriyet": { ad: "Fransa",   la: [41.0, 51.5], lo: [-5.5, 9.6] },
  "ispanya":           { ad: "İspanya",  la: [35.9, 43.9], lo: [-9.6, 3.4] },
  "portekiz":          { ad: "Portekiz", la: [36.8, 42.2], lo: [-9.6, -6.1] },
  "hollanda":          { ad: "Hollanda", la: [50.7, 53.6], lo: [3.3, 7.3] },
  "belcika":           { ad: "Belçika",  la: [49.4, 51.6], lo: [2.5, 6.5] },
  "italya":            { ad: "İtalya",   la: [36.6, 47.1], lo: [6.6, 18.6] },
  "almanya":           { ad: "Almanya",  la: [47.2, 55.1], lo: [5.8, 15.1] },
};

const G = "1923-10-28";
const aktifDonem = (dz) => (dz || []).find(p => p.f <= G && G < p.t);

const kayit = [];
for (const y of Y) {
  for (const sp of (y.s || [])) {
    if (!(sp.f <= G && G < sp.t)) continue;
    const m = METROPOL[sp.d];
    if (!m) continue;
    const icinde = y.lat >= m.la[0] && y.lat <= m.la[1] &&
                   y.lon >= m.lo[0] && y.lon <= m.lo[1];
    if (icinde) continue;
    const isg = aktifDonem(y.isg);
    const v   = aktifDonem(y.v);
    kayit.push({
      ad: y.ad, lat: +y.lat.toFixed(3), lon: +y.lon.toFixed(3),
      kimlik: sp.d, metropol: m.ad,
      f: sp.f, t: sp.t,
      kaynak: sp.kaynak || y.kaynak || null,
      isg: isg ? (isg.d || true) : null,
      v: v ? (v.k || true) : null,
      s_zincir: (y.s || []).length,
      bekleyen_yamada: bekleyenAdlar.has(y.ad),
    });
  }
}

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === "--json") {
    console.log(JSON.stringify(kayit, null, 1));
  } else if (arg === "--yamalar") {
    for (const [f, a] of Object.entries(bekleyenDosya))
      console.log(String(a.length).padStart(4) + "  " + f);
    console.log("---\nbenzersiz ad: " + bekleyenAdlar.size);
  } else {
    console.log("girdi: " + okunan + " dosya · " + Y.length + " nokta");
    console.log("anakara DIŞI metropol kaydı: " + kayit.length);
    const kaps = kayit.filter(k => k.bekleyen_yamada).length;
    console.log("  bekleyen yamada ADI GEÇEN : " + kaps);
    console.log("  geçmeyen                  : " + (kayit.length - kaps));
    const say = {};
    for (const k of kayit) say[k.metropol] = (say[k.metropol] || 0) + 1;
    for (const [a, n] of Object.entries(say).sort((x, y) => y[1] - x[1]))
      console.log("   " + a.padEnd(10) + String(n).padStart(4));
  }
}
module.exports = { kayit, bekleyenAdlar };

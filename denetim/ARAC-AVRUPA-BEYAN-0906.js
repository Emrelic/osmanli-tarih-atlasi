// KAYNAK BEYANI — AVRUPA kovasının 457 noktası, DOSYA KIRILIMIYLA.
//
// 🔴 NİÇİN ÖNCE DOSYA: AMERİKA 7 Eylül'de 822 nokta ölçtü ve beyansızlığın
//    COĞRAFÎ değil PARTİ etkisi olduğunu buldu (tek dosyada 133/133 beyansız).
//    ⇒ Çare nokta nokta aramak değil, o PARTİYİ hedeflemek olabilir.
//
// 🔴 VE İKİ SEVİYE AYRI SAYILIR (§11, `urabi-pasa` vakası):
//    KAYIT seviyesindeki `kaynak:` bütün dönemlere MİRAS kalır — ama bir
//    dönemin kendi beyanı DEĞİLDİR. Ona karşı ölçmek, o dönemin hiç yapmadığı
//    bir kaynak iddiasını sınamaktır. Evrenin %77'si böyle çıkmıştı.
//
// 🔴 VE SAYIM BİRİMİ: aynı `kaynak:` çok noktaya toplu atanmış olabilir
//    (`urabi-pasa` 110 uç → 2 benzersiz iddia, 55× şişme). Bu yüzden
//    BENZERSİZ (slug · gün · kimlik) demeti de sayılır.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = "1923-10-28";
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);
const BASKASININ = new Set(["OSMANLI-tabi", "avusturya", "fas"]);

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push({ y, f });
  }
}
const akt = (a) => (a || []).find(p => p.f <= G && G < p.t);
const yasiyor = (y) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G);

const dosyaSay = {}, kimlikSay = {};
let kayitVar = 0, kayitYok = 0;
let donemVar = 0, donemMiras = 0, donemYok = 0;
const benzersiz = new Set(), noktaBeyansiz = [];

for (const { y, f } of N) {
  if (!yasiyor(y) || !BENIM.has(bolge(y))) continue;
  const i = akt(y.isg);
  const kimlik = i ? (i.d || i.k) : (akt(y.d) ? "OSMANLI" :
    (akt(y.v) ? "OSMANLI-tabi" : (akt(y.s) || {}).d));
  if (!kimlik || BASKASININ.has(kimlik)) continue;

  const kayitKaynak = !!y.kaynak;
  kayitKaynak ? kayitVar++ : kayitYok++;
  const D = (dosyaSay[f] = dosyaSay[f] || { n: 0, beyanli: 0 });
  D.n++; if (kayitKaynak) D.beyanli++;
  const K = (kimlikSay[kimlik] = kimlikSay[kimlik] || { n: 0, beyanli: 0 });
  K.n++; if (kayitKaynak) K.beyanli++;
  if (!kayitKaynak) noktaBeyansiz.push({ ad: y.ad, f, kimlik });

  for (const alan of ["s", "d", "v", "isg"])
    for (const p of (y[alan] || [])) {
      if (p.kaynak) { donemVar++; benzersiz.add(p.kaynak + "|" + p.f + "|" + (p.d || "")); }
      else if (kayitKaynak) donemMiras++;
      else donemYok++;
    }
}

console.log("=== AVRUPA · KAYNAK BEYANI · " + G + " ===");
console.log("(başkasının kalemi HARİÇ: OSMANLI-tabi · avusturya · fas)");
console.log("");
console.log("KAYIT seviyesi:");
console.log("   🟢 `kaynak:` VAR   : " + kayitVar);
console.log("   🔴 YOK             : " + kayitYok +
  "   (%" + (100 * kayitYok / (kayitVar + kayitYok)).toFixed(1) + ")");
console.log("");
console.log("DÖNEM seviyesi (§11: miras ≠ beyan):");
console.log("   🟢 dönemin KENDİ `kaynak:`ı : " + donemVar);
console.log("   🟡 kayıttan MİRAS           : " + donemMiras + "  (dönem beyanı DEĞİL)");
console.log("   🔴 hiçbiri                  : " + donemYok);
console.log("   ⇒ BENZERSİZ iddia (slug·gün·kimlik): " + benzersiz.size +
  (donemVar ? "   şişme " + (donemVar / benzersiz.size).toFixed(1) + "×" : ""));

console.log("");
console.log("=== DOSYA KIRILIMI — AMERİKA'nın 'parti etkisi' sınavı ===");
const dl = Object.entries(dosyaSay).sort((a, b) => b[1].n - a[1].n);
for (const [f, d] of dl) {
  const oran = 100 * d.beyanli / d.n;
  const im = oran === 0 ? "🔴 TAMAMEN BEYANSIZ" : (oran === 100 ? "🟢 TAM" : "");
  console.log("   " + String(d.n).padStart(4) + " nokta · beyanlı " +
    String(d.beyanli).padStart(4) + " (%" + oran.toFixed(0).padStart(3) + ")  " +
    f.padEnd(34) + im);
}

console.log("");
console.log("=== KİMLİK KIRILIMI (beyanlı oranı düşükten yükseğe) ===");
for (const [k, d] of Object.entries(kimlikSay).sort((a, b) =>
  (a[1].beyanli / a[1].n) - (b[1].beyanli / b[1].n)).slice(0, 14))
  console.log("   " + k.padEnd(24) + String(d.n).padStart(4) + " nokta · beyanlı " +
    String(d.beyanli).padStart(3) + " (%" + (100 * d.beyanli / d.n).toFixed(0) + ")");

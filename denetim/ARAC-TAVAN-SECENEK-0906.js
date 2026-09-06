// TAVAN SEÇENEKLERİ — KAZANÇ ve BEDEL birlikte
//
// 🔴 NİÇİN: `OLCUM-TAVAN-KAPLAMA-0906.md`de Ⓒ seçeneğini (yalnız k1/k2
//    yükselt) ÖNERDİM ama "hiç ölçülmedi" diye yazdım. Öneriyi ölçmeden
//    bırakmak, `§11`in *"ölçmediğini ölçmedim diye yaz"* kuralını
//    sağlar ama kararı ilerletmez. Bu alet onu ölçer.
//
// 🔴 VE ASIL EKSİĞİ KAPATIR: önceki ölçüm yalnız KAZANCI (Çağatay
//    kaplaması) verdi, BEDELİ vermedi. 2 Eylül kaydı *"tavan indirimi
//    ek kazanç getirmiyordu, AĞIR BEDEL bindiriyordu"* diyor — ters
//    yönün bedeli ÇÖL EMİLMESİDİR.
//    ⇒ Çöl bölgeleri de ızgaraya kondu: kaplamanın orada ARTMASI
//      kazanç değil BEDELdir.
//
// ⚙️ TASARIM: her hücre için kademe kademe EN YAKIN mesafe bir kez
//    hesaplanır (`enYakin[k]`), sonra her şema yalnız bir KARŞILAŞTIRMA
//    olur. Böylece beş şema tek taramada ölçülür.
//
// ⚠️ SINIRLARI (önceki ölçümden devralınıyor, tekrar yazılıyor):
//    · HÜCRE sayar, km² değil · kara/deniz ayrımı YOK
//    · sayılar MUTLAK değil KIYAS için — bütün şemalar AYNI ızgarada
//
// KULLANIM:  node denetim/ARAC-TAVAN-SECENEK-0906.js

const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");

const SEMA = [
  ["Ⓐ bugün — hepsi 200",        { 1: 200, 2: 200, 3: 200, 4: 200, 0: 200 }],
  ["Ⓒ1 k1=400 k2=300",           { 1: 400, 2: 300, 3: 200, 4: 200, 0: 200 }],
  ["Ⓒ2 k1=700 k2=420 (eski üst)", { 1: 700, 2: 420, 3: 200, 4: 200, 0: 200 }],
  ["Ⓓ hepsi 300",                { 1: 300, 2: 300, 3: 300, 4: 300, 0: 300 }],
  ["Ⓑ eski kademeli",            { 1: 700, 2: 420, 3: 280, 4: 140, 0: 280 }],
];

const BOLGE = [
  ["🟢 KAZANÇ · Çağatay",        35, 48, 55, 90],
  ["🟢 KAZANÇ · Altın Orda",     44, 58, 30, 62],
  ["⚪ KONTROL · Anadolu",       36, 42, 26, 45],
  ["🔴 BEDEL · Sahra",           18, 30, -8, 28],
  ["🔴 BEDEL · Rub'ul Hâlî",     17, 23, 45, 56],
];

let DOSYA;
try {
  DOSYA = JSON.parse(execSync(
    'py -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;' +
    'print(json.dumps(girdi.GIRDI_DOSYALARI))"',
    { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
} catch (e) {
  DOSYA = fs.readdirSync("data").filter((f) => /^yerlesim.*\.js$/.test(f));
}

const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  const d = { window: {} };
  vm.createContext(d);
  try { vm.runInContext(fs.readFileSync(yol, "utf8"), d); } catch (e) { continue; }
  for (const k of Object.keys(d.window)) {
    const A = d.window[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) {
      if (!y || y.lat === undefined || y.lon === undefined) continue;
      N.push({ lat: y.lat, lon: y.lon, k: (y.k || 0) });
    }
  }
}
console.log("nokta: " + N.length + "   sema: " + SEMA.length);

const R = 6371, rad = (x) => x * Math.PI / 180;
const ADIM = 0.25;

const sonuc = {};   // bolge -> [kapali sayisi, sema basina]
for (const [bad, la0, la1, lo0, lo1] of BOLGE) {
  let hucre = 0;
  const say = SEMA.map(() => 0);
  for (let la = la0; la <= la1; la += ADIM) {
    const cosLa = Math.cos(rad(la));
    for (let lo = lo0; lo <= lo1; lo += ADIM) {
      hucre++;
      // kademe kademe EN YAKIN mesafe — bir kez
      const enYakin = [Infinity, Infinity, Infinity, Infinity, Infinity];
      for (const n of N) {
        const dLat = rad(n.lat - la), dLon = rad(n.lon - lo);
        const s = Math.sin(dLat / 2) ** 2 +
          cosLa * Math.cos(rad(n.lat)) * Math.sin(dLon / 2) ** 2;
        const d = 2 * R * Math.asin(Math.min(1, Math.sqrt(s)));
        if (d < enYakin[n.k]) enYakin[n.k] = d;
      }
      for (let s = 0; s < SEMA.length; s++) {
        const t = SEMA[s][1];
        for (let k = 0; k <= 4; k++) {
          if (enYakin[k] <= (t[k] !== undefined ? t[k] : t[0])) { say[s]++; break; }
        }
      }
    }
  }
  sonuc[bad] = { hucre, say };
}

console.log("");
const bas = "bölge".padEnd(26);
console.log(bas + SEMA.map(([a]) => a.slice(0, 13).padStart(14)).join(""));
console.log("-".repeat(26 + 14 * SEMA.length));
for (const [bad] of BOLGE) {
  const { hucre, say } = sonuc[bad];
  console.log(bad.padEnd(26) +
    say.map((v) => ("%" + (100 * v / hucre).toFixed(1)).padStart(14)).join(""));
}
console.log("");
console.log("FARK (Ⓐ'ya göre puan):");
console.log(bas + SEMA.map(([a]) => a.slice(0, 13).padStart(14)).join(""));
console.log("-".repeat(26 + 14 * SEMA.length));
for (const [bad] of BOLGE) {
  const { hucre, say } = sonuc[bad];
  console.log(bad.padEnd(26) +
    say.map((v) => {
      const f = 100 * (v - say[0]) / hucre;
      return ((f > 0 ? "+" : "") + f.toFixed(1)).padStart(14);
    }).join(""));
}
console.log("");
console.log("⚠️ HUCRE sayar, km² DEGIL · kara/deniz ayrimi YOK ·");
console.log("   sayilar MUTLAK degil KIYAS icin (butun semalar AYNI izgarada).");
console.log("📌 Col satirlarinda ARTIS = BEDEL, azalis diye okunmaz.");

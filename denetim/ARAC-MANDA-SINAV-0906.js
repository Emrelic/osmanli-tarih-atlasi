// SINAV — yer_yama_manda_0906.js
//
// 🔴 ILK SURUMUN KUSURU (6 Eylul 2026, ayni turda yakalandi ve KAYDEDILDI):
//    yalnizca `s:` zincirinin surekli olmasini aradi ve 78 SAHTE hata bastı.
//    `s:` TEK BASINA SUREKLI DEGILDIR — araligi `d:` (Osmanli) doldurur.
//    `Degismez 1`i taklit eden bir olcum, onun KOVA YAPISINI da tasimalidir
//    (CLAUDE.md §11). Bu surum d: + v: + s: + isg: BIRLIKTE olcer.
//
// C13: (1) GECME temiz yamada sessiz  (2) ATESLEME bozuk kopyada otuyor
//      (3) GIRDI hem yama hem CANLI veri dosyadan okunur
//      (4) CIKTI bilerek bozulan uc ayri dal ayri ayri bildiriliyor
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const SON = "1923-10-29", G = "1923-10-28";
const YAMA = "denetim/yer_yama_manda_0906.js";
const BEKLENEN = { "suriye-lubnan-mandasi": 17, "filistin-mandasi": 6, "irak-kralligi": 35 };

function baglam(yol) {
  const d = { window: {} };
  vm.createContext(d);
  vm.runInContext(fs.readFileSync(yol, "utf8"), d);
  return d.window;
}
// kunye dizini
const K = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) K[k.id] = k;

// canli yerlesim dizini
const DOSYA = JSON.parse(execSync(
  "py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const CANLI = {};
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w;
  try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k];
    if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && !CANLI[y.ad]) CANLI[y.ad] = y;
  }
}
const yamaDizi = (() => { const w = baglam(YAMA); for (const k of Object.keys(w)) if (Array.isArray(w[k])) return w[k]; return []; })();

function sina(kayitlar, etiket) {
  const hata = [], say = {};
  for (const p of kayitlar) {
    const c = CANLI[p.ad];
    if (!c) { hata.push(p.ad + ": CANLI KAYIT YOK"); continue; }
    // yama `s:`i degistirir; oteki kategoriler canlidan gelir
    const par = []
      .concat((c.d || []).map((x) => ({ f: x.f, t: x.t, kim: "OSMANLI" })))
      .concat((c.v || []).map((x) => ({ f: x.f, t: x.t, kim: "tabi" })))
      .concat((p.s || []).map((x) => ({ f: x.f, t: x.t, kim: x.d })))
      .sort((a, b) => (a.f < b.f ? -1 : a.f > b.f ? 1 : 0));
    const bas = c.kur || par[0].f;
    let uc = bas;
    for (const x of par) {
      if (x.f > uc) hata.push(p.ad + ": SAHIPSIZ PENCERE " + uc + " -> " + x.f);
      if (x.t > uc) uc = x.t;
    }
    if (uc < SON) hata.push(p.ad + ": zincir " + SON + "'a ULASMIYOR (son " + uc + ")");
    // yamanin KENDI donemleri: ters/sifir + kunye penceresi
    for (const x of (p.s || [])) {
      if (x.f >= x.t) hata.push(p.ad + ": ters/sifir donem " + x.f + "->" + x.t);
      const k = K[x.d];
      if (!k) { hata.push(p.ad + ": KUNYE YOK " + x.d); continue; }
      if (!BEKLENEN[x.d]) continue;           // yalniz YENI kimlikler sinanir
      if (k.f && x.f < k.f) hata.push(p.ad + ": " + x.d + " donem basi kunyeden ONCE (" + x.f + " < " + k.f + ")");
      if (k.t && x.t > k.t) hata.push(p.ad + ": " + x.d + " donem sonu kunyeden SONRA (" + x.t + " > " + k.t + ")");
    }
    const akt = (p.s || []).find((x) => x.f <= G && G < x.t);
    if (!akt) hata.push(p.ad + ": 1923-10-28'de s: DONEMI YOK");
    else say[akt.d] = (say[akt.d] || 0) + 1;
  }
  console.log("--- " + etiket + " ---  kayit " + kayitlar.length);
  for (const id of Object.keys(say).sort()) {
    const b = BEKLENEN[id];
    console.log("   " + id.padEnd(24) + String(say[id]).padStart(3) +
      (b === undefined ? "  🔴 BEKLENMEYEN KIMLIK" : (b === say[id] ? "  ✓ beklenen " + b : "  🔴 BEKLENEN " + b)));
    if (b === undefined) hata.push("BEKLENMEYEN KIMLIK: " + id);
    else if (b !== say[id]) hata.push("SAYI TUTMADI " + id + ": " + say[id] + " != " + b);
  }
  for (const id of Object.keys(BEKLENEN)) if (!say[id]) hata.push("KUME HIC YOK: " + id);
  if (hata.length) { console.log("   🔴 HATA " + hata.length); for (const h of hata.slice(0, 20)) console.log("      " + h); }
  else console.log("   🟢 TEMIZ");
  return hata.length;
}

const n1 = sina(yamaDizi, "1 GECME — uretilen yama, canli d:/v: ile birlikte");

const B = JSON.parse(JSON.stringify(yamaDizi));
B[0].s[B[0].s.length - 1].f = "1919-01-01";           // kunye penceresinden ONCE
B[1].s[B[1].s.length - 1].d = "yok-boyle-bir-kunye";   // kunye YOK
B[2].s[B[2].s.length - 1].t = "1930-01-01";            // kunye penceresini ASIYOR
B[3].s.splice(B[3].s.length - 2, 1);                   // DELIK ac
console.log("");
const n2 = sina(B, "2 ATESLEME — dort dal bilerek bozuldu");

console.log("");
if (n1 === 0 && n2 >= 4) { console.log("🟢 SINAV GECTI — temiz sessiz, bozuk otuyor."); process.exit(0); }
console.log("🔴 SINAV KALDI — temiz " + n1 + " · atesleme " + n2 + " (>=4 bekleniyordu)");
process.exit(1);

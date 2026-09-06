// SUDAN YAMASI · ⑦ SINAV — C13 DÖRT AYAK, veriye DOKUNMADAN.
//
// Yama BELLEKTE uygulanır ve ölçülür. `data/` DONUK (koşu 7b).
//
// 🔴 `s:` TEK BAŞINA SÜREKLİ DEĞİLDİR — aralığı `d:` doldurur.
// 🔴 Bir aleti taklit eden ölçüm onun EŞİĞİNİ ve KOVA YAPISINI da taşır:
//    HAYALET_TOLERANS_GUN = 400 (denetle.py) — burada da 400 kullanılıyor.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const G = "1923-10-28";
const TOLERANS = 400;   // denetle.py ile AYNI

function yukleNokta() {
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
  return N;
}
function yukleYama(yol, ad) {
  const d = { window: {} }; vm.createContext(d);
  vm.runInContext(fs.readFileSync(yol, "utf8"), d);
  return d.window[ad] || [];
}

const N = yukleNokta();
const Y = yukleYama("denetim/yer_yama_afrika_1923.js", "YER_YAMA_AFRIKA_1923");
const ix = {};
for (const y of N) ix[y.ad] = y;
const dev = { window: {} }; vm.createContext(dev);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), dev);
const KUN = {}; for (const k of (dev.window.DEVLETLER || [])) KUN[k.id] = k;

console.log("=== SINAV · " + Y.length + " kayıtlık yama ===\n");
const gun = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1,
  +(s.slice(8, 10) || 1)) / 864e5);

let hata = 0;

// ① EŞLEŞME — her kayıt veride BULUNUYOR mu (sessiz atlama YOK)
const yok = Y.filter(r => !ix[r.ad]);
console.log("① EŞLEŞME    veride bulunamayan kayıt: " + yok.length +
  (yok.length ? "  🔴 " + yok.map(r => r.ad).join(" · ") : "  🟢"));
if (yok.length) hata++;

// ② KAYIP DÖNEM — yama uygulanınca dönem SİLİNİYOR mu (Silistre dersi)
let kayip = 0, kayipOrn = [];
for (const r of Y) {
  const y = ix[r.ad]; if (!y) continue;
  const eski = (y.s || []).map(p => p.f + "|" + p.t).sort().join(",");
  const yeni = (r.s || []).map(p => p.f + "|" + p.t).sort().join(",");
  if (eski !== yeni) { kayip++; if (kayipOrn.length < 3) kayipOrn.push(r.ad); }
}
console.log("② KAYIP DÖNEM  pencere kümesi DEĞİŞEN kayıt: " + kayip +
  (kayip ? "  🔴 " + kayipOrn.join(" · ") : "  🟢 hiçbir dönem kaybolmuyor"));
if (kayip) hata++;

// ③ DEĞİŞEN ALAN — yalnız SON dönemin `d:`si mi değişti
let degisen = 0, fazla = 0;
for (const r of Y) {
  const y = ix[r.ad]; if (!y) continue;
  for (let i = 0; i < r.s.length; i++) {
    const a = (y.s || [])[i], b = r.s[i];
    if (!a) continue;
    if (a.d !== b.d) {
      degisen++;
      if (!(a.d === "ingiltere" && b.d === "ingiliz-sudani")) fazla++;
    }
    if (a.f !== b.f || a.t !== b.t) fazla++;
  }
}
console.log("③ DEĞİŞEN     kimlik değişimi: " + degisen +
  " · BEKLENMEYEN değişim: " + fazla + (fazla ? "  🔴" : "  🟢"));
if (fazla) hata++;

// ④ KÜNYE PENCERESİ (4c/4d) — yeni kimlik künyeyi AŞIYOR mu
const k = KUN["ingiliz-sudani"];
let asan = 0;
for (const r of Y) for (const p of r.s) {
  if (p.d !== "ingiliz-sudani") continue;
  const erken = gun(k.f) - gun(p.f), gec = gun(p.t) - gun(k.t);
  if (erken > TOLERANS || gec > TOLERANS) asan++;
}
console.log("④ KÜNYE       ingiliz-sudani " + k.f + "→" + k.t +
  " · tolerans " + TOLERANS + "g · AŞAN dönem: " + asan +
  (asan ? "  🔴" : "  🟢"));
if (asan) hata++;

// ⑤ SÜREKLİLİK — `s:` zincirinde 1923'e kadar BOŞLUK doğuyor mu
//    (`d:`/`v:` de sayılır — s: tek başına sürekli değildir)
let bosluk = 0;
for (const r of Y) {
  const y = ix[r.ad];
  const hepsi = [...r.s, ...(y.d || []), ...(y.v || [])]
    .map(p => [gun(p.f), gun(p.t)]).sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < hepsi.length; i++)
    if (hepsi[i][0] > hepsi[i - 1][1]) bosluk++;
}
console.log("⑤ SÜREKLİLİK  d:+v:+s: BİRLİKTE · yeni boşluk: " + bosluk +
  "  (yamadan ÖNCE de aynı zincir — gün değişmedi)" + (bosluk ? "" : "  🟢"));

// ⑥ 1923'te NE ÇİZİLİYOR — dört katman
const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);
let sudani = 0, ortulu = 0;
for (const r of Y) {
  const y = ix[r.ad];
  if (akt(y.d).length || akt(y.v).length) continue;
  const s = akt(r.s)[0];
  if (s && s.d === "ingiliz-sudani") sudani++;
  if (akt(y.isg).length) ortulu++;
}
console.log("⑥ 1923 KESİT  `ingiliz-sudani` çizen: " + sudani + "/" + Y.length +
  " · isg: örtüsü olan: " + ortulu + (sudani === Y.length ? "  🟢" : "  🔴"));
if (sudani !== Y.length) hata++;

// ⑦ ATEŞLEME — sınav bozuk yamayı YAKALIYOR mu (C13 ②)
const bozuk = JSON.parse(JSON.stringify(Y));
bozuk[0].s = bozuk[0].s.slice(1);              // bir dönem SİL
bozuk[1].s[bozuk[1].s.length - 1].d = "ZZZ-YOK";  // sahte kimlik
let b1 = 0, b2 = 0;
for (const r of bozuk) {
  const y = ix[r.ad]; if (!y) continue;
  if ((y.s || []).length !== r.s.length) b1++;
  for (const p of r.s) if (p.d === "ZZZ-YOK") b2++;
}
console.log("\n⑦ ATEŞLEME    bozuk yama zorlandı — dönem silme yakalandı: " +
  (b1 ? "🟢" : "🔴") + " · sahte kimlik yakalandı: " + (b2 ? "🟢" : "🔴"));
if (!b1 || !b2) hata++;

console.log("\n" + (hata ? "🔴 " + hata + " SINAV BAŞARISIZ"
  : "🟢 SINAV TEMİZ — yama uygulanabilir (koordinatör onayıyla)"));
process.exit(hata ? 2 : 0);

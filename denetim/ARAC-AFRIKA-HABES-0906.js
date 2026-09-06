// HABEŞİSTAN KALEMİ · ① KESİT — 64 nokta, DÖRT KATMAN.
//
// 🔴 KATMAN SAYISI ÖNCE YAZILIYOR (bugün iki kez tek katmana bakıp
//    hüküm çıkardım): d: → v: → s: → isg: DÖRDÜ BİRDEN okunur, ve
//    `s:` boşluğu görülünce `d:`/`v:` doldurmuyor mu diye SORULUR.
//
// KAPSAM: `habesistan` kimliğinin BÜTÜN noktaları — cascade 12'sini
// ORTADOGU-IRAN kutusuna atsa da. Koordinatör hükmü: kimlik kalemleri
// cascade'e göre bölünmez, ilk ölçen oturumda kalır (§7).
//
// AYNI ÖLÇÜMDE `adal` HAYALETİ: şartname §5① *"1 nokta · künye
// t:1887-01-06 · 36,8 yıl FAZLA"* — doğrulanacak.
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const G = "1923-10-28";
const TOLERANS = 400;   // denetle.py HAYALET_TOLERANS_GUN ile AYNI

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
      if (y && y.ad && y.lat !== undefined) N.push({ y, dosya: f });
  }
}
const dev = { window: {} }; vm.createContext(dev);
vm.runInContext(fs.readFileSync("data/devletler.js", "utf8"), dev);
const KUN = {}; for (const k of (dev.window.DEVLETLER || [])) KUN[k.id] = k;
const gun = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1,
  +(s.slice(8, 10) || 1)) / 864e5);
const akt = (z) => (z || []).filter(p => p.f <= G && G < p.t);

// DÖRT KATMAN — hangisi çiziyor
function katman(y) {
  if (akt(y.d).length) return { k: "OSMANLI", kat: "d" };
  const v = akt(y.v)[0]; if (v) return { k: "OSMANLI-tabi", kat: "v" };
  const s = akt(y.s)[0]; if (s) return { k: s.d, kat: "s" };
  return null;
}
const canli = N.filter(({ y }) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G));

const hab = canli.filter(({ y }) => (katman(y) || {}).k === "habesistan");
console.log("=== HABEŞİSTAN · " + G + " ===");
console.log("nokta: " + hab.length + "   (koordinatör hükmü: 64'ü de bende)");
const bd = {};
for (const { y } of hab) bd[bolge(y)] = (bd[bolge(y)] || 0) + 1;
for (const [b, n] of Object.entries(bd)) console.log("   " + b + " " + n);

// ÖRTÜLÜ KAYIT — isg: dördüncü katman
const ort = hab.filter(({ y }) => akt(y.isg).length);
console.log("\n🔴 ÖRTÜLÜ (isg: aktif): " + ort.length);
for (const { y } of ort) console.log("   " + y.ad + " ⟵ " +
  (akt(y.isg)[0].d || "(kimliksiz)"));

// KÜNYE PENCERESİ — hayalet var mı
const k = KUN["habesistan"];
console.log("\n=== ④ KÜNYE ===");
console.log("habesistan " + k.f + " → " + k.t + "  harita:" +
  (k.harita || "(yok)"));
let asan = 0;
for (const { y } of hab) for (const p of (y.s || [])) {
  if (p.d !== "habesistan") continue;
  if (gun(k.f) - gun(p.f) > TOLERANS || gun(p.t) - gun(k.t) > TOLERANS) asan++;
}
console.log("künyeyi AŞAN dönem (tolerans " + TOLERANS + "g): " + asan +
  (asan ? "  🔴" : "  🟢"));

// `s:` BOŞLUĞU — ve d:/v: dolduruyor mu (bugünkü dersim)
let bos = 0, bosDolu = 0;
for (const { y } of hab) {
  const s = (y.s || []).slice().sort((a, b) => a.f < b.f ? -1 : 1);
  for (let i = 1; i < s.length; i++) {
    if (s[i].f <= s[i - 1].t) continue;
    bos++;
    const dolu = [...(y.d || []), ...(y.v || [])]
      .some(p => p.f < s[i].f && p.t > s[i - 1].t);
    if (dolu) bosDolu++;
  }
}
console.log("\n=== `s:` BOŞLUĞU — ve DÖRT KATMAN sorusu ===");
console.log("boşluk: " + bos + " · bunlardan `d:`/`v:` DOLDURAN: " + bosDolu +
  " · GERÇEK açık: " + (bos - bosDolu) +
  ((bos - bosDolu) ? "  🔴" : "  🟢"));

// SINIR ÇİFTLERİ — habesistan'a en yakın FARKLI kimlik (§3.5.1 iki uç)
function km(a, b) {
  const R = Math.PI / 180, la1 = a.lat * R, la2 = b.lat * R;
  const h = Math.sin((la2 - la1) / 2) ** 2 + Math.cos(la1) * Math.cos(la2) *
    Math.sin((b.lon - a.lon) * R / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.min(1, Math.sqrt(h)));
}
const komsu = {};
for (const { y } of hab) for (const { y: z } of canli) {
  const kz = katman(z); if (!kz || kz.k === "habesistan") continue;
  const d = km(y, z);
  if (!komsu[kz.k] || d < komsu[kz.k][0]) komsu[kz.k] = [d, y.ad, z.ad];
}
console.log("\n=== SINIR ÇİFTLERİ (en yakın nokta) ===");
for (const [kid, [d, a, b]] of Object.entries(komsu).sort((x, y2) => x[1][0] - y2[1][0]))
  console.log("  " + kid.padEnd(22) + d.toFixed(0).padStart(5) + " km   " +
    a + " ↔ " + b);

// `adal` HAYALETİ — şartname §5①
console.log("\n\n=== `adal` HAYALETİ — şartname §5① doğrulaması ===");
const ka = KUN["adal"];
console.log("künye: " + ka.f + " → " + ka.t);
const adal = canli.filter(({ y }) => (katman(y) || {}).k === "adal");
console.log("1923'te `adal` çizen nokta: " + adal.length);
for (const { y, dosya } of adal) {
  const p = akt(y.s)[0];
  const fazla = (gun(p.t) - gun(ka.t)) / 365.25;
  console.log("  " + y.ad + "  [" + dosya + "]  bölge: " + bolge(y));
  console.log("     s: " + p.f + " → " + p.t + "   künye t: " + ka.t);
  console.log("     FAZLA: " + fazla.toFixed(1) + " yıl" +
    (gun(p.t) - gun(ka.t) > TOLERANS ? "   🔴 HAYALET (tolerans aşıldı)"
      : "   🟢 tolerans içinde"));
  console.log("     kaynak: " + (y.kaynak || "(yok)"));
  console.log("     TAM ZİNCİR:");
  for (const q of (y.s || []))
    console.log("        " + q.f + " → " + q.t + "  " + q.d);
}

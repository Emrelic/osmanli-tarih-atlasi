// ORTAK GÜN DAYANAK DEFTERİ — üretici
//
// NİÇİN VAR: AVRUPA ölçtü ve tek cümlede söyledi —
//   "borcun birimi NOKTA değil GÜN."
// 315 dayanaksız nokta = 162 benzersiz gün; ilk 12 gün borcun en büyük
// payını kapsıyor (1917-03-15 · 1792-09-22 · 1830-07-05 · 1547-01-16 …).
// Ve o günlerin çoğu OTURUMLAR ARASI ORTAK: 1917 Rus günleri hem AVRUPA'da
// hem BALKAN'da, 1830 Cezayir AVRUPA'nın kutusunda görünüyor ama ORTADOĞU'nun
// kalemi. ⇒ Altı oturum ayrı ayrı ararsa AYNI İŞ ALTI KEZ yapılır, ve daha
// kötüsü AYNI GÜN İÇİN ALTI FARKLI DAYANAK doğar.
//
// 🔴 BU BETİK DAYANAK YAZMAZ — yalnız BORCU GÜN BAZINDA SAYAR ve her günü
//    TEK BİR SAHİBE bağlar. Dayanağı oturumlar yazar, defterin kendisi
//    yalnız "bu gün kimde" sorusunu cevaplar.
//
// ⚠️ SAYIM BİRİMİ: bir gün hem `f` hem `t` olarak geçebilir ve aynı nokta
//    iki kez düşer (AVRUPA bunu kendi ölçümünde yakaladı). Burada nokta
//    adları bir Set'te tutuluyor — birim UÇ değil NOKTA.

const fs = require("fs");
const path = require("path");
const cp = require("child_process");
const KOK = path.join(__dirname, "..");

global.window = {};
const gi = cp.execSync(
  "py -X utf8 -c \"import sys;sys.path.insert(0,'arac');import girdi;print(chr(10).join(girdi.GIRDI_DOSYALARI))\"",
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
if (Y.length < 3000) throw new Error("SESSİZ SIFIR: " + Y.length + " nokta");

const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

// Pencere uçları bir ÖLÇÜM DEĞERİ değil SINIR İŞARETİDİR (§11) — elenir.
const UC = new Set(["1281-01-01", "1923-10-29", "1923-10-28"]);
const gunHassas = g => /^\d{4}-\d{2}-\d{2}$/.test(g) && !g.endsWith("-01-01") && !UC.has(g);

const defter = {};   // gun -> { nokta:Set, bolge:{}, kimlik:Set }

for (const y of Y) {
  const b = bolge(y);
  for (const alan of ["d", "v", "s", "isg"]) {
    for (const p of (y[alan] || [])) {
      // Dönemin KENDİ kaynağı varsa borç değil. Kayıttan MİRAS bir dönem
      // beyanı DEĞİLDİR (§11) — o yüzden y.kaynak'a BAKILMIYOR.
      if (p.kaynak) continue;
      for (const g of [p.f, p.t]) {
        if (!g || !gunHassas(g)) continue;
        const d = (defter[g] = defter[g] || { nokta: new Set(), bolge: {}, kimlik: new Set() });
        d.nokta.add(y.ad);
        d.bolge[b] = (d.bolge[b] || 0) + 1;
        if (p.d) d.kimlik.add(p.d);
      }
    }
  }
}

const satir = Object.entries(defter).map(([gun, d]) => {
  const sirali = Object.entries(d.bolge).sort((a, b) => b[1] - a[1]);
  return {
    gun,
    nokta: d.nokta.size,
    sahip: sirali[0][0],
    sahip_pay: sirali[0][1],
    bolgeler: Object.fromEntries(sirali),
    paylasilan: sirali.length > 1,
    kimlik: [...d.kimlik].slice(0, 6),
  };
}).sort((a, b) => b.nokta - a.nokta);

const toplamNokta = new Set();
for (const d of Object.values(defter)) for (const n of d.nokta) toplamNokta.add(n);

console.log("girdi: " + okunan + " dosya · " + Y.length + " nokta");
console.log("=".repeat(76));
console.log("DAYANAKSIZ GÜN DEFTERİ — dönemin KENDİ `kaynak:`ı olmayan, GÜN hassasiyetli uçlar");
console.log("=".repeat(76));
console.log("benzersiz GÜN   : " + satir.length);
console.log("etkilenen NOKTA : " + toplamNokta.size);
console.log("PAYLAŞILAN gün  : " + satir.filter(s => s.paylasilan).length +
            "  (birden çok bölgeye dokunuyor ⇒ mükerrer iş riski)");
console.log("-".repeat(76));
console.log("EN ÇOK NOKTA KAPSAYAN 20 GÜN — borcun ağırlığı burada");
console.log("-".repeat(76));
for (const s of satir.slice(0, 20)) {
  const bl = Object.entries(s.bolgeler).map(([k, v]) => k + ":" + v).join(" ");
  console.log(
    s.gun + "  " + String(s.nokta).padStart(4) + " nokta  →  " +
    s.sahip.padEnd(18) + (s.paylasilan ? "🔴 PAYLAŞILAN  " : "🟢 tek bölge   ") + bl
  );
}
const ilk20 = satir.slice(0, 20).reduce((a, s) => a + s.nokta, 0);
const hepsi = satir.reduce((a, s) => a + s.nokta, 0);
console.log("-".repeat(76));
console.log("ilk 20 günün payı: " + ilk20 + " / " + hepsi +
            " nokta-gün  (%" + (100 * ilk20 / hepsi).toFixed(1) + ")");

fs.writeFileSync(
  path.join(__dirname, "DAYANAK-GUNLER-0907.json"),
  JSON.stringify({
    _NOT: "Dayanaksız GÜN defteri. `sahip` = o günün noktalarının ÇOĞUNLUĞUNU " +
          "taşıyan bölge; dayanağı O oturum yazar, ötekiler ARAMAZ. `paylasilan` " +
          "true ise gün birden çok kovaya dokunuyor demektir ve mükerrer iş " +
          "riski oradadır. Bu defter dayanak YAZMAZ, yalnız SAHİPLİK kurar.",
    _URETIM: new Date().toISOString().slice(0, 10),
    _OLCUT: "dönemin KENDİ kaynak: alanı yok + gün hassasiyetli + pencere ucu değil",
    ozet: { gun: satir.length, nokta: toplamNokta.size,
            paylasilan: satir.filter(s => s.paylasilan).length },
    gunler: satir,
  }, null, 1)
);
console.log("\n→ denetim/DAYANAK-GUNLER-0907.json yazıldı");

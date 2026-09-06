// AVRUPA SİSTEMATİK TARAMASI — 457 noktanın 24 kimliği, kusur SINIFLARINA göre.
//
//   node denetim/ARAC-AVRUPA-TARAMA-0906.js
//
// SINIFLAR (§3.5 · §3.5.0):
//   A HAYALET     dönem künyenin `t:`sini TOLERANS'tan çok aşıyor
//   B ERKEN       dönem künyenin `f:`sinden TOLERANS'tan çok önce başlıyor
//   C KÜNYESİZ    kimliğin künyesi YOK
//   D RENKSİZ     künye var, BOYA yok (§8: boyanmaz = harita deliği)
//   E YALNIZ GÜN  kırılma gününü BAŞKA HİÇBİR kayıt kullanmıyor (§③ komşu kuralı)
//
// 🔴 `isg:` DÖRDÜNCÜ ALAN olarak okunur (şartname §⑥).
// 🔴 Tolerans denetle.py'nin KENDİ eşiği: HAYALET_TOLERANS_GUN = 400.
//    Bir aleti taklit eden ölçüm onun EŞİĞİNİ de taşır (§11).
const fs = require("fs"), vm = require("vm");
const { execSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");

const G = "1923-10-28", TOLERANS = 400;
const BENIM = new Set(["BATI-ORTA-AVRUPA", "KUZEY-AVRUPA", "IBERYA", "ITALYA"]);
// Şartname §④: cascade SURVEY'i yönetir, KİMLİK kalemlerini DEĞİL.
const BASKASININ = { "OSMANLI-tabi": "ORTADOĞU (Tunus)", "avusturya": "BALKAN (Viyana)" };

function baglam(y) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(y, "utf8"), c); return c.window;
}
const KUN = {};
for (const k of (baglam("data/devletler.js").DEVLETLER || [])) KUN[k.id] = k;
// 🔴 `_boyalar_dok.py` stdout'a JSON BASMAZ — bir DOSYAYA yazar (denetim/_boyalar.json).
//   İlk yazımda çıktısını parse etmeye çalıştım ve `renkler.py`nin import
//   satırları JSON'a karıştı. §11: aletin cevabını DOĞRU YERDEN oku.
execSync("py denetim/_boyalar_dok.py", { encoding: "utf-8", maxBuffer: 1 << 24 });
const BOYA = JSON.parse(fs.readFileSync("denetim/_boyalar.json", "utf8"));

const DOSYA = JSON.parse(execSync("py denetim/_girdi_listesi.py",
  { encoding: "utf-8", maxBuffer: 1 << 24 }).trim());
const N = [];
for (const f of DOSYA) {
  const yol = "data/" + f.replace(/^data[\\/]/, "");
  if (!fs.existsSync(yol)) continue;
  let w; try { w = baglam(yol); } catch (e) { continue; }
  for (const k of Object.keys(w)) {
    const A = w[k]; if (!Array.isArray(A)) continue;
    for (const y of A) if (y && y.ad && y.lat !== undefined) N.push(y);
  }
}
const gn = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5);

const GUN = {};
for (const y of N)
  for (const p of (y.s || []).concat(y.d || [], y.v || [], y.isg || []))
    for (const g of [p.f, p.t]) if (g) GUN[g] = (GUN[g] || 0) + 1;

const akt = (a) => (a || []).find(p => p.f <= G && G < p.t);
const yasiyor = (y) => !(y.bit && y.bit <= G) && !(y.kur && y.kur > G);

// 1923'te AVRUPA kovasındaki noktalar ve kimlikleri
const KIM = {};
for (const y of N) {
  if (!yasiyor(y) || !BENIM.has(bolge(y))) continue;
  const i = akt(y.isg);
  let id = null;
  if (i) id = i.d || i.k;
  else if (akt(y.d)) id = "OSMANLI";
  else if (akt(y.v)) id = "OSMANLI-tabi";
  else { const p = akt(y.s); id = p && p.d; }
  if (!id) continue;
  (KIM[id] = KIM[id] || []).push(y);
}

const A = [], B = [], C = [], D = [], E = [];
for (const [id, noktalar] of Object.entries(KIM)) {
  if (BASKASININ[id]) continue;
  const k = KUN[id];
  if (!k) { C.push([id, noktalar.length]); continue; }
  const anahtar = k.harita || id;                    // §11: renk `harita:`ya bakar
  if (!BOYA[anahtar]) D.push([id, noktalar.length, anahtar]);
  for (const y of noktalar)
    for (const alan of ["s", "d", "v", "isg"])
      for (const p of (y[alan] || [])) {
        if (p.d !== id) continue;
        if (k.t && gn(p.t) - gn(k.t) > TOLERANS)
          A.push([id, y.ad, p.f + ">" + p.t, gn(p.t) - gn(k.t), k.t]);
        if (k.f && gn(k.f) - gn(p.f) > TOLERANS)
          B.push([id, y.ad, p.f + ">" + p.t, gn(k.f) - gn(p.f), k.f]);
        for (const g of [p.f, p.t])
          if (g && GUN[g] === 1 && g !== "1923-10-29") E.push([id, y.ad, g]);
      }
}

console.log("=== AVRUPA TARAMASI · " + G + " ===");
console.log("kimlik: " + Object.keys(KIM).length +
  " (başkasının kalemi HARİÇ: " + Object.keys(BASKASININ).join(", ") + ")");
console.log("nokta : " + Object.values(KIM).reduce((a, b) => a + b.length, 0));

const bas = (ad, L, ic) => {
  console.log("");
  console.log("--- " + ad + ": " + L.length + " ---");
  for (const r of L.slice(0, 40)) console.log("    " + ic(r));
  if (L.length > 40) console.log("    ... +" + (L.length - 40));
};
A.sort((a, b) => b[3] - a[3]);
B.sort((a, b) => b[3] - a[3]);
bas("A · HAYALET (künye t:'sini > 400 gün aşıyor)", A,
  r => r[0].padEnd(24) + r[1].padEnd(18) + r[2].padEnd(26) +
    (r[3] / 365.25).toFixed(1) + " yıl   künye t:" + r[4]);
bas("B · ERKEN (künye f:'sinden > 400 gün önce)", B,
  r => r[0].padEnd(24) + r[1].padEnd(18) + r[2].padEnd(26) +
    (r[3] / 365.25).toFixed(1) + " yıl   künye f:" + r[4]);
bas("C · KÜNYESİZ", C, r => r[0].padEnd(30) + r[1] + " nokta");
bas("D · RENKSİZ (harita DELİĞİ, §8)", D,
  r => r[0].padEnd(24) + r[1] + " nokta   boya anahtarı: " + r[2]);
const eu = [...new Set(E.map(r => r.join("|")))].map(s => s.split("|"));
bas("E · YALNIZ BU KAYDIN KULLANDIĞI GÜN (komşu kuralı §③)", eu,
  r => r[0].padEnd(24) + r[1].padEnd(18) + r[2]);

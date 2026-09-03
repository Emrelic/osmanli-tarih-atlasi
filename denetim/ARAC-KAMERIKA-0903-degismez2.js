// DEĞİŞMEZ 2 ÖN ÖLÇÜMÜ — 377 zincirin kırılma günleri maddeli mi?
//
// `CLAUDE.md §3`: haritadaki her kırılmanın ±30 gün içinde bir kronoloji
// maddesi olmalı. Yoksa değişim, o güne rastgele denk gelen ALAKASIZ bir
// maddenin altında belirir — kullanıcının en çok şikâyet ettiği hata.
//
// 🔴 VE BU ARAÇ İKİ KOVAYI AYIRIR, çünkü ±30 sınavı GEÇMEK yetmiyor:
//   AÇIK      ±30 günde HİÇBİR madde yok            → sert ihlal
//   ALAKASIZ  madde var ama BAŞKA BİR KONUDA        → yumuşak ihlal
// İkincisi denetimi geçer ve kullanıcıyı yanıltır.
//
// kullanim:  node denetim/ARAC-KAMERIKA-0903-degismez2.js
const fs = require("fs");
global.window = {};
for (const f of fs.readdirSync("data").filter((x) => /^(olaylar|kronoloji).*\.js$/.test(x)))
  eval(fs.readFileSync("data/" + f, "utf8"));
const O = Object.keys(window)
  .filter((k) => Array.isArray(window[k]))
  .flatMap((k) => window[k])
  .filter((o) => o && o.t);

const tam = (s) => (s.length === 7 ? s + "-01" : s);
const g = (s) => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5);
const ol = O.map((o) => ({ g: g(tam(o.t)), b: o.b || "", t: o.t }));

const Z = JSON.parse(fs.readFileSync("denetim/ZINCIR-KAMERIKA-0903.json", "utf8"));
const kir = {};
for (const a of Z)
  for (const p of a.s)
    for (const d of [p.f, p.t]) {
      if (d <= "1281-01-01" || d >= "1923-10-29") continue;
      (kir[d] = kir[d] || new Set()).add(a.ad);
    }

const gun = Object.keys(kir).sort();
const acik = [], uzak = [];
for (const d of gun) {
  const gd = g(d);
  let en = null;
  for (const o of ol) if (!en || Math.abs(o.g - gd) < Math.abs(en.g - gd)) en = o;
  const fark = Math.abs(en.g - gd);
  if (fark > 30) acik.push([d, kir[d].size, fark, en.t, en.b.slice(0, 60)]);
  else if (fark > 0) uzak.push([d, kir[d].size, fark, en.t, en.b.slice(0, 60)]);
}
console.log("kronoloji maddesi     : " + ol.length);
console.log("zincirdeki kırılma günü: " + gun.length);
console.log("🔴 AÇIK (±30 günde madde YOK): " + acik.length);
for (const r of acik) console.log("   " + r[0] + "  " + String(r[1]).padStart(3) + " nokta  en yakın " + String(r[2]).padStart(5) + " gün  " + r[3] + " " + r[4]);
console.log("\n🟡 MADDE VAR ama AYNI GÜN DEĞİL (alakasız olabilir): " + uzak.length);
for (const r of uzak.slice(0, 25)) console.log("   " + r[0] + "  " + String(r[1]).padStart(3) + " nokta  " + String(r[2]).padStart(3) + " gün uzakta  " + r[3] + " " + r[4]);
const tam0 = gun.length - acik.length - uzak.length;
console.log("\n🟢 AYNI GÜN maddeli: " + tam0);

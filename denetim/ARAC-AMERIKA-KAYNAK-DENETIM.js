// KUTUMUN KAYNAK DENETİMİ — şartname ⑤: "geri kalan ~700 noktanın
// kaynak denetimi". 822 noktanın TAMAMI.
//
// 🔴 BİRİM TUZAĞI — sayım UYGULANMA SAYISINI ölçmesin:
//   `urabi-pasa` 110 uç taşıyordu ve o 110 uç **2 BENZERSİZ İDDİAYDI**
//   (tek işgal örtüsü, 55 yerleşime uygulanmış) — 55× şişme. Bir denetim
//   "kaç uç" diye sorarsa tek bir cümleyi 110 kusur gibi gösterir, ve
//   çareyi de 55 kat pahalı gösterir.
//   ⇒ Hem UÇ hem BENZERSİZ İDDİA sayılıyor, ikisi ayrı raporlanıyor.
//
// 🔴 MİRAS TUZAĞI: kayıt üstündeki `kaynak:` dönemin BEYANI DEĞİLDİR.
//   Bir dönem beyanını ölçerken "bu değeri bu kayıt mı BEYAN ETTİ,
//   yoksa devraldı mı" sorulur. Önceki bir ölçümde evrenin %77'si
//   miras çıkmış ve manşeti %53'ten %22'ye indirmişti.
//
// 🔴 DOSYA/PARTİ ETKİSİ: `kaynak:` yazma alışkanlığı PARTİYE göre
//   değişiyor (Guyana'da `yerlesimler_amerika.js`in 4 kaydında alan HİÇ
//   yoktu, `yerlesimler_gamerika.js`inkinde VARDI). Dosya kırılımı şart —
//   yoksa bir partinin borcu bütün kutuya yayılmış görünür.
//
// kullanım: node denetim/ARAC-AMERIKA-KAYNAK-DENETIM.js
const fs = require("fs"), path = require("path");
process.chdir(path.dirname(__dirname));
const { execFileSync } = require("child_process");
const { bolge } = require("./ARAC-BOLGE-KUTU-0906.js");
const BENIM = ["KUZEY-AMERIKA", "GUNEY-ORTA-AMERIKA", "OKYANUSYA"];

const dosyalar = JSON.parse(
  execFileSync("py", ["denetim/_girdi_listesi.py"], { encoding: "utf8" }));
const K = [];
for (const f of dosyalar) {
  global.window = {};
  eval(fs.readFileSync(path.join("data", path.basename(f)), "utf8"));
  for (const k of Object.keys(global.window)) if (Array.isArray(global.window[k]))
    for (const y of global.window[k]) if (typeof y.lat === "number") K.push([y, f]);
}
const benim = K.filter(([y]) => BENIM.includes(bolge(y)));
console.log("kutum: " + benim.length + " nokta\n");

// ---- ① KAYIT DÜZEYİ ----
const dolu = benim.filter(([y]) => y.kaynak);
const notlu = benim.filter(([y]) => !y.kaynak && y.not);
console.log("=== ① KAYIT DÜZEYİ ===");
console.log("  `kaynak:` alanı VAR  : " + dolu.length
  + "  (%" + Math.round(100 * dolu.length / benim.length) + ")");
console.log("  alan YOK ama `not:` VAR: " + notlu.length
  + "   ← dayanak metinde olabilir, ALANDA değil");
console.log("  ikisi de YOK          : "
  + benim.filter(([y]) => !y.kaynak && !y.not).length);

// ---- ② DOSYA KIRILIMI ----
console.log("\n=== ② DOSYA (PARTİ) KIRILIMI — alışkanlık partiye göre değişir ===");
const dos = {};
for (const [y, f] of benim) {
  dos[f] = dos[f] || { n: 0, k: 0 };
  dos[f].n++; if (y.kaynak) dos[f].k++;
}
for (const [f, v] of Object.entries(dos).sort((a, b) => b[1].n - a[1].n)) {
  const o = Math.round(100 * v.k / v.n);
  const im = o >= 90 ? "🟢" : o >= 40 ? "🟡" : "🔴";
  console.log("  " + im + " " + f.padEnd(30) + String(v.n).padStart(4) + " nokta · kaynaklı "
    + String(v.k).padStart(4) + "  (%" + o + ")");
}

// ---- ③ DÖNEM DÜZEYİ: kendi beyanı mı, MİRAS mı ----
console.log("\n=== ③ DÖNEM DÜZEYİ — kendi beyanı mı, MİRAS mı ===");
let uc = 0, kendi = 0, miras = 0, beyansiz = 0;
const iddia = new Set(), iddiaKendi = new Set();
for (const [y] of benim) for (const kat of ["d", "v", "s", "isg"]) {
  for (const p of (Array.isArray(y[kat]) ? y[kat] : [])) {
    for (const u of [["f", p.f], ["t", p.t]]) {
      uc++;
      const anahtar = u[0] + "|" + u[1] + "|" + (p.d || p.k || "") + "|" + kat;
      iddia.add(anahtar);
      if (p.kaynak) { kendi++; iddiaKendi.add(anahtar); }
      else if (y.kaynak) miras++;
      else beyansiz++;
    }
  }
}
console.log("  dönem ucu (UYGULANMA sayısı) : " + uc);
console.log("  BENZERSİZ İDDİA              : " + iddia.size
  + "   ← şişme " + (uc / iddia.size).toFixed(1) + "×");
console.log("     dönemin KENDİ `kaynak:`ı   : " + kendi);
console.log("     kayıttan MİRAS             : " + miras
  + "  (%" + Math.round(100 * miras / uc) + ") ← dönemin BEYANI DEĞİL");
console.log("     hiçbir beyan YOK           : " + beyansiz
  + "  (%" + Math.round(100 * beyansiz / uc) + ")");

// ---- ④ KULLANILAN SLUG/DAYANAK CİNSLERİ ----
console.log("\n=== ④ DAYANAK CİNSİ (kayıt düzeyi, " + dolu.length + " kayıt) ===");
const cins = { "TDV slug (tek kelime)": 0, "akademik künye (metin)": 0, "bulunamadı": 0, "diğer": 0 };
const ornek = {};
for (const [y] of dolu) {
  const s = String(y.kaynak).trim();
  let c;
  if (/^bulunamad/i.test(s)) c = "bulunamadı";
  else if (/^[a-z0-9-]{2,40}$/.test(s)) c = "TDV slug (tek kelime)";
  else if (s.length > 40) c = "akademik künye (metin)";
  else c = "diğer";
  cins[c]++;
  (ornek[c] = ornek[c] || []).push(s.slice(0, 78));
}
for (const [c, n] of Object.entries(cins)) {
  if (!n) continue;
  console.log("  " + String(n).padStart(4) + "  " + c);
  for (const o of (ornek[c] || []).slice(0, 2)) console.log("          " + o);
}

// ---- ⑤ EN AĞIR TEK KAYNAK — evrenin ne kadarını tutuyor ----
console.log("\n=== ⑤ EVRENİN EN BÜYÜK ÜYESİ — örneklem çarpıklığı sınavı ===");
const say = {};
for (const [y] of dolu) {
  const s = String(y.kaynak).slice(0, 60);
  say[s] = (say[s] || 0) + 1;
}
const sira = Object.entries(say).sort((a, b) => b[1] - a[1]);
const en = sira[0];
console.log("  benzersiz dayanak: " + sira.length);
if (en) console.log("  en büyük üye: " + en[1] + " kayıt (%"
  + Math.round(100 * en[1] / dolu.length) + ")  " + en[0]);
console.log("  ⇒ " + (en && en[1] / dolu.length > 0.5
  ? "🔴 YARIDAN BÜYÜK — rastgele örneklem EVRENİ değil BU ÜYEYİ ölçer; slug başına TAVAN şart"
  : "🟢 yarıdan küçük — rastgele örneklem meşru"));
for (const [s, n] of sira.slice(0, 5)) console.log("     " + String(n).padStart(4) + "  " + s);

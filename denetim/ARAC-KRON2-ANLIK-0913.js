// PAKET-KRON2 — kronoloji maddelerinin tam anlık görüntüsü + önce/sonra kıyası (yalnız OKUR).
//   node denetim/ARAC-KRON2-ANLIK-0913.js al CIKTI.json
//   node denetim/ARAC-KRON2-ANLIK-0913.js kiyas ONCE.json SONRA.json
// Evren: data/olaylar*.js + data/kronoloji*.js, her dosya ayrı `window` (§7 ad alanı).
// Kıyas: madde sayısı dosya başına eşit mi · değişen maddeler · okur alanından (d/gun/b)
// ÇIKAN her kelime yeni okur alanında YA DA ic_not_* alanlarında duruyor mu (sessiz silme sınavı).
const fs = require("fs"), path = require("path");
const DATA = path.join(__dirname, "..", "data");
const ALAN = ["t", "b", "d", "gun", "yer", "kaynak", "kisiler", "ic_not_d", "ic_not_gun", "ic_not_b"];
function al() {
  const out = [];
  for (const f of fs.readdirSync(DATA).sort()) {
    if (!/^(olaylar|kronoloji).*\.js$/.test(f)) continue;
    const w = {};
    new Function("window", fs.readFileSync(path.join(DATA, f), "utf8"))(w);
    let sira = 0;
    const gez = (x, derin) => {
      if (!x || derin > 5) return;
      if (Array.isArray(x)) { x.forEach((y) => gez(y, derin + 1)); return; }
      if (typeof x !== "object") return;
      if (typeof x.t === "string" && typeof x.b === "string") {
        const o = { dosya: f, sira: sira++ };
        for (const a of ALAN) if (x[a] !== undefined) o[a] = x[a];
        out.push(o); return;
      }
      for (const k of Object.keys(x)) gez(x[k], derin + 1);
    };
    for (const k of Object.keys(w)) gez(w[k], 0);
  }
  return out;
}
const kelime = (s) => (String(s || "").toLocaleLowerCase("tr").match(/[\p{L}\p{N}]+/gu) || []);
const mod = process.argv[2];
if (mod === "al") {
  const A = al();
  fs.writeFileSync(process.argv[3], JSON.stringify(A));
  console.log("madde", A.length);
} else if (mod === "kiyas") {
  const O = JSON.parse(fs.readFileSync(process.argv[3], "utf8"));
  const S = JSON.parse(fs.readFileSync(process.argv[4], "utf8"));
  const say = (L) => L.reduce((m, o) => ((m[o.dosya] = (m[o.dosya] || 0) + 1), m), {});
  const so = say(O), ss = say(S);
  let sayiFark = 0;
  for (const f of new Set([...Object.keys(so), ...Object.keys(ss)])) if (so[f] !== ss[f]) { sayiFark++; console.log("SAYI FARKI", f, so[f], "->", ss[f]); }
  const ix = new Map(S.map((o) => [o.dosya + "#" + o.sira, o]));
  let degisen = 0, kayip = 0, tDegisen = 0;
  const rapor = [];
  for (const o of O) {
    const s = ix.get(o.dosya + "#" + o.sira);
    if (!s) continue;
    const fark = ALAN.filter((a) => JSON.stringify(o[a]) !== JSON.stringify(s[a]));
    if (!fark.length) continue;
    degisen++;
    if (fark.includes("t")) tDegisen++;
    // okur alanlarından çıkan kelimeler nerede?
    const yeniHavuz = new Set(kelime([s.d, s.gun, s.b, s.ic_not_d, s.ic_not_gun, s.ic_not_b, s.kaynak, s.yer, s.kisiler].join(" ")));
    const cikan = [];
    for (const a of ["d", "gun", "b"]) {
      const eskiK = kelime(o[a]), yeniK = new Set(kelime(s[a]));
      for (const k of eskiK) if (!yeniK.has(k) && !yeniHavuz.has(k)) cikan.push(k);
    }
    if (cikan.length) kayip++;
    rapor.push({ dosya: o.dosya, t: o.t, b: o.b, alanlar: fark, havuzda_olmayan: [...new Set(cikan)] });
  }
  console.log("değişen madde", degisen, "· t değişen", tDegisen, "· dosya sayı farkı", sayiFark,
    "· kelimesi HİÇBİR alanda kalmayan madde", kayip);
  rapor.filter((r) => r.havuzda_olmayan.length).forEach((r) => console.log("  KAYIP?", r.dosya, r.t, r.b.slice(0, 60), r.havuzda_olmayan.join(",")));
  if (process.argv[5]) fs.writeFileSync(process.argv[5], JSON.stringify(rapor, null, 1));
}

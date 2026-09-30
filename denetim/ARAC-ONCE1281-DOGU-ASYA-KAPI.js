// ONCE1281-DOGU-ASYA — üç kapı (ORTAK §6): ② taraf kimliği · ③ küresel ad · + mükerrer/iskelet
//   node denetim/ARAC-ONCE1281-DOGU-ASYA-KAPI.js
const fs = require("fs"), path = require("path");
global.window = global;
const KOK = path.join(__dirname, "..");
require(path.join(KOK, "data", "devletler.js"));
require(path.join(KOK, "data", "kronoloji_cok_once1281_dogu_asya.js"));
const K = JSON.parse(fs.readFileSync(path.join(__dirname, "ONCE1281-DOGU-ASYA-KUNYE.json"), "utf8"));
const AD = "KRONOLOJI_COK_ONCE1281_DOGU_ASYA";
const M = window[AD];
const var_ = new Map(DEVLETLER.map(d => [d.id, d]));
const oneri = new Map(K.kayitlar.filter(k => k.islem === "yeni").map(k => [k.id, k]));
const yil = s => parseInt(s, 10);

console.log("evren: madde", M.length, "· devletler", DEVLETLER.length, "· yeni öneri", oneri.size);
// ② taraf kimliği
let es = 0, tarafSay = 0; const bag = {};
for (const m of M) for (const t of m.taraflar || []) {
  tarafSay++;
  if (!var_.has(t) && !oneri.has(t)) { es++; console.log("  EŞLENEMEYEN:", t, m.t, m.b.slice(0, 50)); }
  bag[t] = (bag[t] || 0) + 1;
}
console.log("② taraf kimliği: evren", tarafSay, "· eşlenemeyen", es);
console.log("   künye başına dosya maddesi:", Object.entries(bag).sort((a, b) => b[1] - a[1]).map(x => x.join(":")).join(" "));
// pencere: madde yılı künye ömrü dışında mı (yıl düzeyi)
for (const m of M) for (const t of m.taraflar || []) {
  const k = var_.get(t) || oneri.get(t); const f = K.kayitlar.find(x => x.id === t && x.islem === "genislet");
  const kf = yil((f && f.f) || k.f), kt = yil(k.t), y = yil(m.t);
  if (y < kf || y > kt) console.log("  PENCERE DIŞI:", t, kf + "-" + kt, "madde", m.t, m.b.slice(0, 50));
}
// alanlar
for (const m of M) { if (!/^\d{3,4}-\d\d-\d\d$/.test(m.t)) console.log("  t BİÇİM:", m.t);
  for (const a of ["b", "d", "kaynak", "gun", "taraflar", "tur"]) if (!m[a]) console.log("  EKSİK", a, m.t, m.b); }
// mükerrer: aynı t+b ve iskelet ile aynı (t, taraf)
const tb = new Set(); let muk = 0;
for (const m of M) { const k = m.t + "|" + m.b; if (tb.has(k)) { muk++; console.log("  MÜKERRER t+b", k); } tb.add(k); }
let isk = 0;
for (const m of M) for (const t of m.taraflar) {
  const k = var_.get(t) || oneri.get(t);
  for (const s of (k.kronoloji || [])) if (yil(s.t) === yil(m.t)) { isk++; console.log("  İSKELETLE AYNI YIL:", t, m.t, "|", m.b.slice(0, 45), "|| iskelet:", (s.b || "").slice(0, 45)); }
}
console.log("mükerrer t+b:", muk, "· iskeletle aynı yıl+taraf:", isk);
// ③ küresel ad
let ad = 0;
for (const f of fs.readdirSync(path.join(KOK, "data"))) {
  if (f === "kronoloji_cok_once1281_dogu_asya.js") continue;
  const s = fs.readFileSync(path.join(KOK, "data", f), "utf8");
  if (s.includes(AD)) { ad++; console.log("  AD BAŞKA DOSYADA:", f); }
}
console.log("③ küresel ad: data/ altında", fs.readdirSync(path.join(KOK, "data")).length, "dosya tarandı · başka dosyada", ad);

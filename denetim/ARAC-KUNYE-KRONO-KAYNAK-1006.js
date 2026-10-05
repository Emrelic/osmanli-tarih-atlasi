// ARAC-KUNYE-KRONO-KAYNAK-1006 — künye içi kronoloji × kronoloji_*.js KAYNAK kovaları
// Kullanım: node ARAC-KUNYE-KRONO-KAYNAK-1006.js <depo-kökü> <çıktı.tsv>
// Kova tanımı arac/durum_tablosu.py kisi_kova ile BİREBİR (fa1dd9af):
//   tdv: "TDV:" ile BAŞLAR · beyan: küçük harfle "bulunamadı" ile BAŞLAR ·
//   baska: dolu, ikisi değil · kaynaksiz: yok/boş.
// Veriye YAZMAZ. Dosyalar index.html'in yükleme sırasıyla TARAYICI GİBİ yüklenir.
const fs = require("fs"), path = require("path");
const kok = process.argv[2], tsv = process.argv[3];
const html = fs.readFileSync(path.join(kok, "index.html"), "utf8");
const W = {};
const yuklenen = [], hatali = [];
for (const m of html.matchAll(/src="(data\/[^"?]+\.js)/g)) {
  const f = m[1];
  try { new Function("window", fs.readFileSync(path.join(kok, f), "utf8"))(W); yuklenen.push(f); }
  catch (e) { hatali.push(f + ": " + e.message.slice(0, 80)); }
}
// index.html dışında kalan kronoloji_*.js var mı?
const diskteki = fs.readdirSync(path.join(kok, "data")).filter(f => /^kronoloji_.*\.js$/.test(f));
// paket_NN.js içindekiler index.html yorumunda adıyla yazılı (arac/paketle.py)
const yukluSet = new Set([...html.matchAll(/data\/([A-Za-z0-9_]+\.js)/g)].map(m => m[1]));
const yuklenmeyen = diskteki.filter(f => !yukluSet.has(f));

function kova(k) {
  const s = String((k && k.kaynak) || "").trim();
  if (!s) return "kaynaksiz";
  if (s.toLowerCase().startsWith("bulunamadı")) return "beyan";
  return s.startsWith("TDV:") ? "tdv" : "baska";
}
// ③ — kaynak DIŞINDAKİ alanlarda TDV/slug izi
const IZ = /TDV|islamansiklopedisi/i;
function gizliIz(k) {
  const alan = [];
  for (const [a, v] of Object.entries(k || {})) {
    if (a === "kaynak") continue;
    const s = typeof v === "string" ? v : JSON.stringify(v);
    if (s && IZ.test(s)) alan.push(a);
  }
  return alan;
}
const D = W.DEVLETLER || [];
const satirlar = [];
function bos() { return { tdv: 0, baska: 0, beyan: 0, kaynaksiz: 0, toplam: 0, ornek: { tdv: [], baska: [], beyan: [], kaynaksiz: [] }, gizli: 0, gizli_kaynaksiz: 0, gizli_ornek: [], gizli_alan: {}, alanlar: {} }; }
function say(r, katman, sahip, m, i) {
  const kv = kova(m);
  r[kv]++; r.toplam++;
  for (const a of Object.keys(m || {})) r.alanlar[a] = (r.alanlar[a] || 0) + 1;
  const etiket = sahip + "#" + i + " " + (m.t || "") + " " + String(m.b || "").slice(0, 60);
  if (r.ornek[kv].length < 3) r.ornek[kv].push(etiket + (m.kaynak ? " ⟨" + String(m.kaynak).slice(0, 70) + "⟩" : ""));
  const g = gizliIz(m);
  if (g.length) {
    r.gizli++; if (kv === "kaynaksiz" || kv === "beyan") r.gizli_kaynaksiz++;
    g.forEach(a => r.gizli_alan[a] = (r.gizli_alan[a] || 0) + 1);
    if (r.gizli_ornek.length < 3 && (kv === "kaynaksiz" || kv === "beyan")) r.gizli_ornek.push(etiket + " [" + g.join(",") + "]");
  }
  satirlar.push([katman, sahip, i, m.t || "", kv, g.join(","), String(m.b || "").replace(/\s+/g, " ").slice(0, 120), String(m.kaynak || "").replace(/\s+/g, " ").slice(0, 160)].join("\t"));
}
// ① künye içi (DİSKTEKİ hâli — app.js bindirmesinden ÖNCE)
const K = bos(); let kunyeVar = 0, kunyeSiz = 0;
const kunyeIdler = new Set(D.map(d => d.id));
const kunyeKronoUzunluk = {};
for (const d of D) {
  if (Array.isArray(d.kronoloji) && d.kronoloji.length) {
    kunyeVar++; kunyeKronoUzunluk[d.id] = d.kronoloji.length;
    d.kronoloji.forEach((m, i) => say(K, "kunye", d.id, m, i));
  } else kunyeSiz++;
}
// ④ ad eşlemeli kronoloji dosyaları — app.js derinKronolojiBindir mantığıyla
const F = bos(); const esli = [], eslenmeyen = [], ezilen = [];
const C = bos(); // SINIR/COK — karşılaştırma için ayrı
for (const an of Object.keys(W)) {
  if (!an.startsWith("KRONOLOJI_")) continue;
  const v = W[an]; if (!Array.isArray(v) || !v.length) continue;
  if (/^KRONOLOJI_(SINIR|COK)_/.test(an)) { v.forEach((m, i) => say(C, "sinir_cok", an, m, i)); continue; }
  const a0 = an.slice(10).toLowerCase(); const ad = [a0]; if (a0.includes("_")) ad.push(a0.replace(/_/g, "-"));
  const id = ad.find(x => kunyeIdler.has(x));
  if (!id) { eslenmeyen.push(an); continue; }
  esli.push(id + "(" + v.length + ")");
  if (kunyeKronoUzunluk[id]) ezilen.push(id + " künye " + kunyeKronoUzunluk[id] + " → dosya " + v.length);
  v.forEach((m, i) => say(F, "dosya", an, m, i));
}
fs.writeFileSync(tsv, "katman\tsahip\tsira\tt\tkova\tgizli_iz_alani\tb\tkaynak\n" + satirlar.join("\n") + "\n");
console.log(JSON.stringify({ yuklenen: yuklenen.length, hatali, diskteki: diskteki.length, yuklenmeyen,
  kunye_sayisi: D.length, kunyeVar, kunyeSiz, K, F, C, esli_sayi: esli.length, eslenmeyen, ezilen }, null, 1));

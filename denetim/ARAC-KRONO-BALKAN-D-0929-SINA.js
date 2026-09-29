// KRONO-BALKAN-D-0929 — iki dosyanın app.js çok künyeli ekleyicisiyle bağlanışını SINAR.
// Kullanım: node denetim/ARAC-KRONO-BALKAN-D-0929-SINA.js
// app.js:13572 cokTarafliKronolojiEkle mantığının birebir kopyası DEĞİL, aynı kuralların
// ölçümüdür: ① her taraf id'si künyede var mı ② aynı t+b künyede zaten var mı (ekleyici
// sessizce atar) ③ zorunlu on alan tam mı ④ t YYYY-AA-GG mi ⑤ tur canlı veride var mı.
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.join(__dirname, "..");
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const yukle = f => vm.runInContext(fs.readFileSync(path.join(KOK, "data", f), "utf8"), ctx, { filename: f });
yukle("devletler.js");
const ix = {}; ctx.DEVLETLER.forEach(d => { ix[d.id] = d; });
// canlı tur değerleri: bütün kronoloji/olay dosyalarından
const turlar = new Set();
for (const f of fs.readdirSync(path.join(KOK, "data")).filter(f => /^(kronoloji_|olaylar)/.test(f))) {
  const c = {}; c.window = c; vm.createContext(c);
  try { vm.runInContext(fs.readFileSync(path.join(KOK, "data", f), "utf8"), c); } catch (e) { continue; }
  for (const v of Object.values(c)) if (Array.isArray(v)) v.forEach(m => m && m.tur && turlar.add(m.tur));
}
const ZORUNLU = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak"];
let kusur = 0;
// denetim/KRONO-BALKAN-D-0929-KUNYE.md'de önerilen, henüz devletler.js'te olmayan id'ler
const ONERILEN = new Set(["vidin-carligi", "epir-despotlugu"]);
const onerilen = {};
for (const [f, g] of [["kronoloji_cok_yunanistan.js", "KRONOLOJI_COK_YUNANISTAN"], ["kronoloji_cok_bulgaristan.js", "KRONOLOJI_COK_BULGARISTAN"]]) {
  yukle(f);
  const K = ctx[g].slice();
  // Ters yön sınavı: SINA_TERS=1 ile bilinen kusurlu üç madde eklenir; sınav bunları YAKALAMALI.
  if (process.env.SINA_TERS) K.push(
    { t: "1900-1", b: "x", tur: "uydurma-tur", onem: 1, dunya: 1, kapsam: "ic", etiket: [], yer_id: "", d: "x", kaynak: "x", taraflar: ["yok-boyle-kunye"] },
    Object.assign({}, K[0], { d: undefined }));
  if (!/^KRONOLOJI_(SINIR|COK)_[A-Z0-9_]+$/.test(g)) { console.log("🔴 global adı ekleyicinin desenine uymuyor:", g); kusur++; }
  for (const m of K) {
    for (const a of ZORUNLU) if (m[a] === undefined) { console.log("🔴 eksik alan", a, m.t, m.b); kusur++; }
    if (!/^\d{4}-\d\d-\d\d$/.test(m.t)) { console.log("🔴 t biçimi", m.t); kusur++; }
    if (!turlar.has(m.tur)) { console.log("🔴 tur canlı veride yok:", m.tur, m.t); kusur++; }
    for (const id of (m.taraflar || m.devletler || [m.devlet])) {
      const d = ix[id];
      // M-5416 kuralı (3): künyesi olmayan polity önerilen id ile yazılır; ekleyici onu
      // sayıp konsola basar, künye açılınca kendiliğinden bağlanır. Yalnız BEYANLI olanlar geçer.
      if (!d && ONERILEN.has(id)) { onerilen[id] = (onerilen[id] || 0) + 1; continue; }
      if (!d) { console.log("🔴 künyesiz taraf (önerilmemiş)", id, m.t); kusur++; continue; }
      if ((d.kronoloji || []).some(o => o.t === m.t && o.b === m.b)) { console.log("⚠️ künyede birebir var (ekleyici atar)", id, m.t); kusur++; }
      // üç haneli yıl dizgi karşılaştırmasında pad() şart (CLAUDE.md §3.5): "330-05-11" > "1318-.." olur
      const pad = s => String(s).replace(/^(-?)(\d{1,3})-/, (_, e, y) => e + y.padStart(4, "0") + "-");
      if (pad(m.t) < pad(d.f) || pad(m.t) > pad(d.t)) console.log("ℹ️  künye ömrü dışında", id, `${d.f}..${d.t}`, m.t, m.b.slice(0, 50));
    }
  }
  console.log(`${f}: ${K.length} madde · ${g}`);
}
for (const id of Object.keys(onerilen)) {
  if (ix[id]) console.log(`ℹ️  ${id} künyesi artık VAR — ONERILEN listesinden çıkarılabilir`);
  else console.log(`🟡 önerilen künye (henüz yok, beklenen): ${id} · ${onerilen[id]} madde bağlanmayı bekliyor`);
}
console.log(kusur ? `SONUÇ: ${kusur} kusur` : "SONUÇ: temiz");
process.exit(kusur ? 1 : 0);

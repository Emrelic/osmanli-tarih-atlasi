// ONCE1281-ORTADOGU — parça birleştirici + üç kapı
//   node denetim/ARAC-ONCE1281-ORTADOGU-BIRLESTIR.js <scratch-dizini> [--yaz]
// Okur : <scratch>/parca-A.json · parca-B.json · parca-C.json · (varsa) ek-dokunmadim.json
// Yazar (--yaz): denetim/ONCE1281-ORTADOGU-KUNYE.json · data/kronoloji_cok_once1281_ortadogu.js
// Kapılar: ② taraf kimliği (devletler.js ∪ öneri) · ③ küresel ad data/ altında · tarih biçimi ·
//          künye başına 3-15 madde · künye-içi iskelet ile mükerrer (t+b) · kuşak penceresi
const fs = require("fs"), vm = require("vm"), path = require("path");
const KOK = path.resolve(__dirname, "..");
const SC = process.argv[2], YAZ = process.argv.includes("--yaz");
const AD = "KRONOLOJI_COK_ONCE1281_ORTADOGU";
const HEDEF_JS = path.join(KOK, "data", "kronoloji_cok_once1281_ortadogu.js");
const HEDEF_KUNYE = path.join(KOK, "denetim", "ONCE1281-ORTADOGU-KUNYE.json");

const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(KOK, "data", "devletler.js"), "utf8"), ctx);
const DEV = ctx.window.DEVLETLER; const VAR = new Map(DEV.map(d => [d.id, d]));
console.log("devletler.js künye evreni:", DEV.length);

let kunyeler = [], krono = [], bulunamadi = [], notlar = [];
for (const h of ["A", "B", "C"]) {
  const p = path.join(SC, `parca-${h}.json`);
  if (!fs.existsSync(p)) { console.log("YOK:", p); continue; }
  const j = JSON.parse(fs.readFileSync(p, "utf8"));
  (j.kunyeler || []).forEach(k => kunyeler.push({ ...k, _grup: h }));
  (j.kronoloji || []).forEach(m => krono.push({ ...m, _grup: h }));
  (j.bulunamadi || []).forEach(x => bulunamadi.push(`[${h}] ${x}`));
  (j.notlar || []).forEach(x => notlar.push(`[${h}] ${x}`));
  console.log(`parça ${h}: ${(j.kunyeler || []).length} künye · ${(j.kronoloji || []).length} madde`);
}
const ekp = path.join(SC, "ek-dokunmadim.json");
if (fs.existsSync(ekp)) JSON.parse(fs.readFileSync(ekp, "utf8")).forEach(k => kunyeler.push({ ...k, _grup: "O" }));

let hata = 0; const H = (...a) => { hata++; console.log("  ✗", ...a); };
const TARIH = /^\d{4}-\d{2}-\d{2}$/;

// --- künye denetimi
const ONERI = new Map();
for (const k of kunyeler) {
  if (!k.id) { H("id yok", JSON.stringify(k).slice(0, 80)); continue; }
  if (ONERI.has(k.id)) H("mükerrer öneri", k.id);
  ONERI.set(k.id, k);
  if (k.islem === "yeni") {
    if (VAR.has(k.id)) H("YENİ dendi ama devletler.js'te VAR:", k.id);
    for (const a of ["ad", "tur", "bolge", "f", "kaynak", "ic_not_f", "ozet"]) if (!k[a]) H(k.id, "alan eksik:", a);
    if (!k.t && k.t_durum) console.log("  ⚠ BEYANLI EKSİK t:", k.id, "—", k.t_durum.slice(0, 90));
    else {
      for (const a of ["t", "ic_not_t"]) if (!k[a]) H(k.id, "alan eksik:", a);
      if (!(k.f < "1281-01-01" && k.t > "1000-01-01")) H(k.id, "kuşak dışı", k.f, k.t);
      if (k.f >= k.t) H(k.id, "f >= t");
    }
    const adn = String(k.ad || "").toLocaleLowerCase("tr");
    DEV.forEach(d => { if (String(d.ad).toLocaleLowerCase("tr") === adn) H(k.id, "aynı AD devletler.js'te:", d.id); });
  } else if (k.islem === "genislet" || k.islem === "dokunmadim") {
    if (!VAR.has(k.id)) H(k.islem, "dendi ama devletler.js'te YOK:", k.id);
    if (k.islem === "genislet" && !(k.f < VAR.get(k.id)?.f)) H(k.id, "genişletme geriye çekmiyor", k.f, VAR.get(k.id)?.f);
  } else H(k.id, "islem geçersiz:", k.islem);
  if (k.islem !== "dokunmadim") for (const a of ["f", "t"]) if (k[a] && !TARIH.test(k[a])) H(k.id, a, "biçim", k[a]);
  (k.kronoloji || []).forEach(m => { if (!TARIH.test(m.t)) H(k.id, "iskelet t biçim", m.t); });
}

// --- madde denetimi
const iskelet = new Set();
kunyeler.forEach(k => (k.kronoloji || []).forEach(m => iskelet.add(m.t + "|" + m.b)));
const say = {}, eslenmeyen = {}, tb = new Set();
for (const m of krono) {
  if (!TARIH.test(m.t || "")) H("madde t biçim:", m.t, m.b);
  if (!(m.t >= "1000-01-01" && m.t <= "1281-01-01")) H("madde kuşak dışı:", m.t, m.b);
  for (const a of ["b", "d", "kaynak", "tur"]) if (!m[a]) H("madde alan eksik", a, m.t, m.b);
  if (!Array.isArray(m.taraflar) || !m.taraflar.length) H("taraflar yok:", m.t, m.b);
  if (iskelet.has(m.t + "|" + m.b)) H("iskeletle mükerrer:", m.t, m.b);
  if (tb.has(m.t + "|" + m.b)) H("dosya içi mükerrer:", m.t, m.b); tb.add(m.t + "|" + m.b);
  (m.taraflar || []).forEach(id => {
    if (!VAR.has(id) && !ONERI.has(id)) eslenmeyen[id] = (eslenmeyen[id] || 0) + 1;
    say[id] = (say[id] || 0) + 1;
  });
}
// --- künye penceresi: madde t'si taraf künyesinin [f, t] aralığında mı (yıl pad'lenir — CLAUDE.md §3.5)
const pad = s => { const m = String(s || "").match(/^(\d{1,4})-(\d{2})-(\d{2})$/); return m ? m[1].padStart(4, "0") + "-" + m[2] + "-" + m[3] : null; };
let pencereDisi = 0;
for (const m of krono) for (const id of m.taraflar || []) {
  const k = ONERI.get(id) && ONERI.get(id).islem === "yeni" ? ONERI.get(id) : VAR.get(id);
  if (!k) continue;
  const f = pad(ONERI.get(id)?.islem === "genislet" ? ONERI.get(id).f : k.f), t = pad(k.t) || "9999-12-31";
  if (!f) continue;
  if (m.t < f || m.t > t) { pencereDisi++; console.log(`  ⚠ pencere dışı: ${m.t} ${id} [${f} → ${t}] ${m.b}`); }
}
console.log("KAPI künye penceresi — pencere dışı taraf ataması:", pencereDisi);
if (pencereDisi) hata++;
console.log("\nmadde evreni:", krono.length, "· taraf ataması:", Object.values(say).reduce((a, b) => a + b, 0));
console.log("KAPI ② eşlenemeyen taraf kimliği:", Object.keys(eslenmeyen).length, JSON.stringify(eslenmeyen));
if (Object.keys(eslenmeyen).length) hata++;
console.log("\nkünye başına madde (öneri künyeleri, 3-15):");
for (const k of kunyeler) {
  if (k.islem === "dokunmadim") { console.log(`  ${k.id.padEnd(26)} ${say[k.id] || 0}  (dokunmadım)`); continue; }
  const n = say[k.id] || 0; const uyari = n < 3 ? " ⚠ <3" : n > 15 ? " ⚠ >15" : "";
  console.log(`  ${k.id.padEnd(26)} ${n}${uyari}`);
}
Object.keys(say).filter(id => !ONERI.has(id)).forEach(id => console.log(`  (var olan) ${id.padEnd(15)} ${say[id]}`));

// --- ③ küresel ad
let adSay = 0, evren = 0;
for (const f of fs.readdirSync(path.join(KOK, "data"))) {
  if (!f.endsWith(".js")) continue; evren++;
  if (path.join(KOK, "data", f) === HEDEF_JS) continue;
  if (fs.readFileSync(path.join(KOK, "data", f), "utf8").includes(AD)) { adSay++; console.log("  ad geçiyor:", f); }
}
console.log(`KAPI ③ küresel ad '${AD}' başka dosyada: ${adSay} (evren: data/*.js ${evren} dosya)`);
if (adSay) hata++;
console.log("\nbulunamadı:", bulunamadi.length); bulunamadi.forEach(x => console.log("  ", x));
console.log("notlar:", notlar.length);
console.log("\nHATA:", hata);

if (YAZ) {
  const temiz = kunyeler.map(({ _grup, ...k }) => k);
  const kunyeJson = { oturum: "ONCE1281-ORTADOGU", tarih: "2026-09-30", kusak: "1000-01-01 → 1281-01-01",
    bolge: "Irak · el-Cezîre · Suriye · Mısır · Arabistan · Yemen · Haçlı devletleri",
    sayim: { yeni: temiz.filter(k => k.islem === "yeni").length, genislet: temiz.filter(k => k.islem === "genislet").length,
             dokunmadim: temiz.filter(k => k.islem === "dokunmadim").length },
    kunyeler: temiz, bulunamadi, notlar };
  fs.writeFileSync(HEDEF_KUNYE, JSON.stringify(kunyeJson, null, 1) + "\n", "utf8");
  const sirali = krono.map(({ _grup, ...m }) => m).sort((a, b) => a.t < b.t ? -1 : a.t > b.t ? 1 : 0);
  const bas = `// -*- coding: utf-8 -*-
// =====================================================================
// 1281 ÖNCESİ — ORTADOĞU çok künyeli kronoloji (ONCE1281-ORTADOGU, 30 Eylül 2026)
// =====================================================================
// window.${AD} — şartname oturumlar/ONCE1281-KAMPANYA-ORTAK.md
// Kuşak 1000-01-01 → 1281-01-01 · Irak · el-Cezîre · Suriye · Mısır · Arabistan · Yemen · Haçlı devletleri
// Bağlayıcı: js/app.js cokTarafliKronolojiEkle — her maddenin taraflar[] listesindeki HER künyeye EKLER.
// Künye önerisi: denetim/ONCE1281-ORTADOGU-KUNYE.json (yeni künyeler devletler.js'e inince bağlanır).
// Kaynak: TDV İslâm Ansiklopedisi birincil; alıntılar önbellekteki gövdeden kelimesi kelimesine
// (denetim/ONCE1281-ORTADOGU-tdv-onbellek/). ic_not_* alanları editör notudur, gösterilmez.
// Madde sayısı: ${sirali.length}
// =====================================================================
window.${AD} = [
`;
  const govde = sirali.map(m => JSON.stringify(m)).join(",\n");
  fs.writeFileSync(HEDEF_JS, bas + govde + "\n];\n", "utf8");
  console.log("\nYAZILDI:", HEDEF_KUNYE, "·", HEDEF_JS);
}

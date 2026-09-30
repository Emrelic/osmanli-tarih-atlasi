// KRONO-ATLANTIK-A-0929 — taslak maddeleri (JSON) doğrular ve data/kronoloji_cok_{fransa,ispanya,portekiz}.js yazar
// Koşu: node denetim/ARAC-KRONO-ATLANTIK-A-0929-DERLE.js [--yaz] <taslak.json> [<taslak.json> ...]
//   --yaz yoksa KURU KOŞU: yalnız denetim çıktısı.
// Denetimler: zorunlu 10 alan · t biçimi · tur sözlüğü (veride var olan) · künye var mı · olay günü künye
// penceresinde mi (pad'li, [f,t)) · aynı gün ±3 içinde benzer başlık (veride + taslaklar arası) · yer_id çözülüyor mu
const fs = require("fs"), vm = require("vm");
const YAZ = process.argv.includes("--yaz");
const girdiler = process.argv.slice(2).filter(a => a !== "--yaz");
const ctx = { window: {} }; vm.createContext(ctx);
const kaynak = {};
for (const f of fs.readdirSync("data").filter(f => /^(olaylar|kronoloji|savaslar|devletler\.js|sehirler|yerlesimler)/.test(f) && f.endsWith(".js"))) {
  if (/^kronoloji_cok_(fransa|ispanya|portekiz)\.js$/.test(f)) continue;       // kendi çıktımızla kıyaslama yok
  const onc = new Set(Object.keys(ctx.window));
  try { vm.runInContext(fs.readFileSync("data/" + f, "utf8"), ctx); } catch (e) { continue; }
  for (const k of Object.keys(ctx.window)) if (!onc.has(k)) kaynak[k] = f;
}
const D = {}; (ctx.window.DEVLETLER || []).forEach(d => D[d.id] = d);
const pad = x => (x || "").replace(/^(\d{3})-/, "0$1-");
const gunS = s => { const m = /^(-?\d+)-(\d\d)-(\d\d)$/.exec(s || ""); return m ? Date.UTC(+m[1], +m[2] - 1, +m[3]) / 864e5 : NaN; };
// var olan maddeler + tur sözlüğü + yer adları
const VAR = [], TUR = new Set(), YER = new Set();
for (const [k, v] of Object.entries(ctx.window)) {
  if (k === "DEVLETLER") { v.forEach(d => (d.kronoloji || []).forEach(m => VAR.push({ ...m, _k: "künye:" + d.id }))); continue; }
  if (!Array.isArray(v)) continue;
  if (/^YERLESIM|^SEHIR/.test(k)) { v.forEach(y => y && y.ad && YER.add(y.ad)); continue; }
  v.forEach(m => { if (m && m.t && m.b) { VAR.push({ ...m, _k: kaynak[k] }); if (m.tur) TUR.add(m.tur); } });
}
const ZOR = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak"];
const HEDEF = { fransa: "fransa", "fransa-cumhuriyet": "fransa", burgonya: "fransa", ispanya: "ispanya", kastilya: "ispanya",
                aragon: "ispanya", navarra: "ispanya", granada: "ispanya", portekiz: "portekiz" };
const kelime = s => new Set((s || "").toLowerCase().replace(/[^\p{L}\p{N} ]/gu, " ").split(/\s+/).filter(w => w.length > 3));
const benzer = (a, b) => { const A = kelime(a), B = kelime(b); let n = 0; A.forEach(w => B.has(w) && n++); return n / Math.max(1, Math.min(A.size, B.size)); };

const cikti = { fransa: [], ispanya: [], portekiz: [] }, sorun = [], kunyeYok = {};
const TUM = [];
for (const g of girdiler) {
  const J = JSON.parse(fs.readFileSync(g, "utf8"));
  (J.maddeler || []).forEach(m => TUM.push({ ...m, _girdi: g.split(/[\\/]/).pop() }));
}
TUM.sort((a, b) => pad(a.t) < pad(b.t) ? -1 : 1);
// ODAK DOLGUSU — yer_id boşsa: başlıkta (yoksa d'de) geçen, atlasta VAR OLAN yerleşim adı (ilk eşleşen);
// o da yoksa odak_kimlik = maddenin künyeleri (app.js maddeOdakKutusu: o gün o künyenin yerleşimlerinin kutusu).
// Başlık önce: d'de anılan komşu yer yanlış odak verir. Uydurma yer adı YAZILMAZ (ORTAK §2).
const YER_ANAHTAR = [
  [/Gırnata|Granada/i, "Granada"], [/Cebelit[âa]r[ıi]k|Gibraltar/i, "Cebelitarık (Gibraltar)"], [/Sebte|Ceuta/i, "Sebte (Ceuta)"],
  [/M[âa]leka|Málaga/i, "Málaga"], [/Meriye|Almer[íi]a/i, "Almería"], [/Levşe|Loja/i, "Loja"], [/Ronda/i, "Ronda"],
  [/Sevilla|İşbiliye/i, "Sevilla"], [/Toledo/i, "Toledo"], [/Burgos/i, "Burgos"], [/Pamplona/i, "Pamplona"],
  [/Zaragoza|Saragosa/i, "Zaragoza"], [/Barselona|Barcelona/i, "Barselona"], [/Valensiya|Valencia/i, "Valensiya"],
  [/Mayorka|Mallorca/i, "Mayorka (Palma)"], [/Cagliari|Kalyari/i, "Kalyari (Cagliari)"], [/Sassari/i, "Sasari (Sassari)"],
  [/Napoli/i, "Napoli"], [/Lizbon|Lisboa/i, "Lizbon"], [/Coimbra/i, "Coimbra"], [/Porto\b/i, "Porto"],
  [/Dijon/i, "Dijon"], [/Gent|Ghent/i, "Gent"], [/Brüksel/i, "Brüksel"], [/Nancy/i, "Nancy"], [/Lüksemburg/i, "Lüksemburg"],
  [/Mostaganem|Mustagānim|Müstegânim/i, "Mustagānim"], [/Cicel|Jijel|Djidjelli/i, "Cicel"], [/Biskra/i, "Biskra"],
  [/Laghouat|Ağvât/i, "Ağvât"], [/Preveze/i, "Preveze"], [/Butrint/i, "Butrint (Butrinto)"], [/Schönbrunn|İlirya/i, "Karlovac"],
  [/Beyrut/i, "Beyrut"], [/Savoie|Savoya|Savoy/i, "Chambéry"],
  [/Bordo|Bordeaux/i, "Bordo"], [/Paris/i, "Paris"], [/Tunus/i, "Tunus"], [/İstanbul/i, "İstanbul"],
];
TUM.forEach(m => {
  if (m.yer_id || m.odak_kimlik || m.odak_yer) return;
  // YALNIZ BAŞLIK: d'den eşlemek ölçüldü ve yanlış odak verdi (1474 İsviçre savaşı → Chambéry,
  // 1312 Jaén'de ölüm → Granada, 1403 Clavijo → İstanbul). Başlıkta yer yoksa künye kutusu.
  const h = YER_ANAHTAR.find(([rx, ad]) => rx.test(m.b || "") && YER.has(ad));
  if (h) { m.yer_id = h[1]; return; }
  const ids = (m.taraflar || m.devletler || (m.devlet ? [m.devlet] : [])).filter(k => D[k]);
  // Gırnata emirliği tek şehir devletidir: künye kutusu = Granada çevresi; yer_id daha net
  if (ids[0] === "granada" && YER.has("Granada")) { m.yer_id = "Granada"; return; }
  // Navarra'nın haritada o günlerde tek yerleşimi var → odak_kimlik kutusu kurulamaz (odak_olc ölçtü:
  // "o gün yalnız 1 yerleşim"); başkent Pamplona noktası kullanılır.
  if (ids[0] === "navarra" && YER.has("Pamplona")) { m.yer_id = "Pamplona"; return; }
  if (ids.length) m.odak_kimlik = ids;
});
TUM.forEach((m, n) => {
  const s = [], id = `${m.t} ${m.b}`;
  ZOR.forEach(a => m[a] === undefined && s.push("eksik:" + a));
  if (!/^\d{3,4}-\d\d-\d\d$/.test(m.t)) s.push("t biçimi");
  if (!TUR.has(m.tur)) s.push("tur sözlükte yok: " + m.tur);
  const ids = m.taraflar || m.devletler || (m.devlet ? [m.devlet] : []);
  if (!ids.length) s.push("devlet yok");
  ids.forEach(k => {
    const K = D[k];
    if (!K) { (kunyeYok[k] = kunyeYok[k] || []).push(id); return; }
    if (pad(m.t) < pad(K.f) || pad(m.t) >= pad(K.t)) s.push(`künye penceresi dışı: ${k} ${K.f}→${K.t}`);
  });
  if (m.yer_id && !YER.has(m.yer_id)) s.push("yer_id çözülmüyor: " + m.yer_id);
  if (m.kapsam_genis && !m.yer_id) s.push("kapsam_genis + odak yok");
  const g0 = gunS(m.t);
  // `ikiz_cekirdek`: aynı olayın ÇEKİRDEKTE (olaylar*.js) Osmanlı gözüyle yazılmış karşılığı — bu madde o
  // devletin KARTINA karşı taraf gözüyle yazılır (ORTAK §5.2, kapsam:"dis"); yalnız adıyla beyan edilen dosya muaf.
  VAR.forEach(v => { if (Math.abs(gunS(v.t) - g0) <= 3 && benzer(v.b, m.b) >= 0.5 && v._k !== m.ikiz_cekirdek) s.push(`MÜKERRER? ${v._k}: ${v.t} ${v.b}`); });
  TUM.forEach((o, k) => { if (k < n && Math.abs(gunS(o.t) - g0) <= 3 && benzer(o.b, m.b) >= 0.5) s.push(`taslak içi MÜKERRER? ${o._girdi}: ${o.t} ${o.b}`); });
  const hedef = HEDEF[ids.find(k => HEDEF[k])];
  if (!hedef) s.push("hedef dosya yok (devlet: " + ids.join(",") + ")");
  if (s.length) sorun.push({ id, girdi: m._girdi, s });
  else cikti[hedef].push(m);
});
console.log("taslak", TUM.length, "· temiz", Object.values(cikti).reduce((a, v) => a + v.length, 0), "· sorunlu", sorun.length);
sorun.forEach(x => console.log(" ⚠️", x.girdi, "|", x.id.slice(0, 80), "\n     ", x.s.join("\n      ")));
if (Object.keys(kunyeYok).length) console.log("künyesi OLMAYAN id:", JSON.stringify(kunyeYok, null, 1));

const ALAN = ["t", "gun", "b", "tur", "onem", "dunya", "kapsam", "kapsam_genis", "etiket", "yer_id", "odak_kimlik", "devlet", "ikiz_cekirdek", "devletler", "taraflar", "d", "ic_not_d", "kaynak"];
const js = v => JSON.stringify(v);
const BASLIK = {
  fransa: ["FRANSA", "fransa 987→1792-09-22 · fransa-cumhuriyet 1792-09-22→ · burgonya 1032→1482-03-27"],
  ispanya: ["ISPANYA", "kastilya 1230-09-23→1479-01-20 · aragon 1164→1479-01-20 · navarra 824→1620-10-19 · granada 1238-05-12→1492-01-02 · ispanya 1479-01-20→"],
  portekiz: ["PORTEKIZ", "portekiz 1139-07-25→"],
};
if (YAZ) for (const [k, L] of Object.entries(cikti)) {
  if (!L.length) continue;
  const [G, K] = BASLIK[k];
  const satir = L.map(m => "{ " + ALAN.filter(a => m[a] !== undefined).map(a => `${a}:${js(m[a])}`).join(", ") + " }");
  const metin =
`// =====================================================================
// ${G} — ÇOK KÜNYELİ KRONOLOJİ EKİ (KRONO-ATLANTIK-A-0929, 29 Eylül 2026)
// =====================================================================
// Yol: window.KRONOLOJI_COK_${G} → app.js cokTarafliKronolojiEkle her maddeyi
// devlet:/devletler: künyesine EKLER (ezmez; t+b mükerrerini atar). ORTAK §4.1.
// KAPSAM: data/kronoloji_${k}.js'in ve künye kronolojilerinin YAZMADIĞI olaylar;
// her madde olay günü VAR OLAN yapının künyesinde (M-5416).
// KÜNYELER (devletler.js'ten okundu): ${K}
// KAYNAK: TDV birincil (İslâm dünyası/Osmanlı teması); ötesinde adıyla akademik/kurumsal
// kaynak. Her maddenin kaynak: alanı açık. Üretici: denetim/ARAC-KRONO-ATLANTIK-A-0929-DERLE.js
// (taslaklar denetim/KRONO-ATLANTIK-A-0929-taslak/ altında, doğrulama notlarıyla).
// ⚠️ index.html'e bağlanmayı bekliyor (koordinatör).
window.KRONOLOJI_COK_${G} = [
${satir.join(",\n")}
];
`;
  fs.writeFileSync(`data/kronoloji_cok_${k}.js`, metin);
  console.log("✅ yazıldı", `data/kronoloji_cok_${k}.js`, L.length, "madde");
}

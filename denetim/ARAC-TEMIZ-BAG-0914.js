// PAKET-TEMIZ — başlık (b) değişikliklerinin KOPARDIĞI bağları arar (yalnız OKUR).
//   node denetim/ARAC-TEMIZ-BAG-0914.js [--sonra]
// Girdi: denetim/TEMIZ-DUZENLE-0914.json içindeki yol:"b" kayıtları (eski b = kayit.b / not "eski b:", yeni b = deger).
// Bağ biçimleri (grep ile ölçüldü):
//   ① "t|parça"  ekokuma*/merak*/gorsel_madde olay:[] · baglanti:[]  → app.js _ekBagEslesir: _ekNorm(b) İÇERİR parça
//   ② {dosya,t,b} BİREBİR   yer_yama*.js (arac/yama_uygula.js [dosya,t,b]) · etiket_yama · yama_kronoloji_eslesme
//   ③ isyan_tarama maddeler[]  o.b.indexOf(m.b)===0 (ÖNEK)
//   ④ ESKİ b dizgesinin kendisi başka herhangi bir data/ dosyasında geçiyor mu (kaba tarama, kaynak dosya hariç)
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, ".."), DATA = path.join(KOK, "data");
const J = JSON.parse(fs.readFileSync(path.join(KOK, "denetim", "TEMIZ-DUZENLE-0914.json"), "utf8"));
const nrm = (s) => String(s).replace(/[’‘ʼ`´]/g, "'").replace(/[“”„]/g, '"');
function ekNorm(s) {
  s = String(s == null ? "" : s).replace(/[İIı]/g, "i").replace(/[Şş]/g, "s").replace(/[Ğğ]/g, "g")
    .replace(/[Üü]/g, "u").replace(/[Öö]/g, "o").replace(/[Çç]/g, "c").replace(/[Ââ]/g, "a").replace(/[Îî]/g, "i").replace(/[Ûû]/g, "u");
  if (s.normalize) s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return s.toLowerCase().replace(/['‘’`ʼ]/g, "").replace(/\s+/g, " ").trim();
}
const degisen = J.kayitlar.filter((r) => r.yol === "b" && r.sinif !== "bag").map((r) => ({
  dosya: r.dosya, t: r.kayit.t, eski: r.kayit.b || (r.not || "").replace(/^eski b: /, ""),
  yeni: r.deger !== undefined ? r.deger : null, r,
}));
// yeni b'si açık yazılmamış (eski/yeni alt dizge) kayıtlar için yeniyi hesapla
for (const d of degisen) {
  if (d.yeni === null) {
    if (d.r.eski !== undefined) d.yeni = nrm(d.eski).replace(nrm(d.r.eski), d.r.yeni);
  }
  if (!d.r.kayit.b) {  // b^ önekli seçici — tam eski b'yi dosyadan bul
    const w = {}; new Function("window", fs.readFileSync(path.join(DATA, d.dosya), "utf8"))(w);
    for (const k of Object.keys(w)) for (const o of (Array.isArray(w[k]) ? w[k] : []))
      if (o && o.t === d.t && typeof o.b === "string" && nrm(o.b).startsWith(nrm(d.r.kayit["b^"]))) d.eski = o.b;
    if (d.r.eski !== undefined) d.yeni = nrm(d.eski).replace(nrm(d.r.eski), d.r.yeni);
    if (d.r.deger !== undefined) d.yeni = d.r.deger;
  }
}
const sorun = [], bilgi = [];
const dosyalar = fs.readdirSync(DATA).filter((f) => f.endsWith(".js"));
const ham = {};
for (const f of dosyalar) ham[f] = nrm(fs.readFileSync(path.join(DATA, f), "utf8"));
// 🔴 ilk sürüm yalnız data/ tarıyordu ve arac/denetle.py BILINEN_AYRI'daki BİREBİR başlık anahtarını KAÇIRDI
// (denetle "mükerrer madde 1" ile yakaladı). ⇒ canlı aletler de taranır: arac/*.py · arac/*.js
const ARAC = path.join(KOK, "arac");
for (const f of fs.readdirSync(ARAC).filter((f) => /\.(py|js)$/.test(f))) {
  const ad = "../arac/" + f;
  dosyalar.push(ad);
  ham[ad] = nrm(fs.readFileSync(path.join(ARAC, f), "utf8"));
}
for (const d of degisen) {
  const eN = ekNorm(d.eski), yN = ekNorm(d.yeni);
  // ① t|parça
  const re = new RegExp('"' + d.t + "\\|([^\"]*)\"", "g");
  for (const f of dosyalar) {
    let m; re.lastIndex = 0;
    while ((m = re.exec(ham[f]))) {
      const p = ekNorm(m[1]);
      if (!p) continue;
      if (eN.includes(p) && !yN.includes(p)) sorun.push(["① t|parça KOPAR", f, d.t + "|" + m[1], d.dosya, d.eski]);
      else if (eN.includes(p)) bilgi.push(["① tutuyor", f, d.t + "|" + m[1], d.dosya]);
    }
  }
  // ②④ eski b dizgesi başka dosyada
  const eskiHam = nrm(d.eski);
  for (const f of dosyalar) {
    if (f === d.dosya) continue;
    if (ham[f].includes(eskiHam)) sorun.push(["②④ eski b başka dosyada BİREBİR geçiyor", f, "", d.dosya, d.eski]);
  }
}
// ③ isyan_tarama önek
try {
  const w = {}; new Function("window", fs.readFileSync(path.join(DATA, "isyan_tarama.js"), "utf8"))(w);
  for (const m of ((w.ISYAN_TARAMA || {}).maddeler || []))
    for (const d of degisen) if (m.t === d.t && nrm(d.eski).indexOf(nrm(m.b)) === 0 && nrm(d.yeni).indexOf(nrm(m.b)) !== 0)
      sorun.push(["③ isyan_tarama önek KOPAR", "isyan_tarama.js", m.b, d.dosya, d.eski]);
} catch (e) { sorun.push(["③ isyan_tarama okunamadı", e.message]); }
console.log("başlığı değişen kayıt:", degisen.length);
console.log("tutan t|parça bağı:", bilgi.length);
for (const b of bilgi) console.log("  ✓ " + b.join(" | "));
console.log("SORUN:", sorun.length);
for (const s of sorun) console.log("  ✗ " + s.join(" | "));
process.exit(sorun.length ? 1 : 0);

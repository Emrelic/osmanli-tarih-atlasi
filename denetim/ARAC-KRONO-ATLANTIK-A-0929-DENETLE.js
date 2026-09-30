// KRONO-ATLANTIK-A-0929 — mevcut Fransa/İspanya/Portekiz kronolojilerinin denetimi
// Koşu: node denetim/ARAC-KRONO-ATLANTIK-A-0929-DENETLE.js  → denetim/KRONO-ATLANTIK-A-0929-denetim.json
const fs = require("fs"), vm = require("vm");
const ctx = { window: {} }; vm.createContext(ctx);
const yukle = f => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
yukle("data/devletler.js");
const D = {}; ctx.window.DEVLETLER.forEach(d => D[d.id] = d);
const DOS = { fransa: "KRONOLOJI_FRANSA", ispanya: "KRONOLOJI_ISPANYA", portekiz: "KRONOLOJI_PORTEKIZ" };
for (const k in DOS) yukle(`data/kronoloji_${k}.js`);
const ZOR = ["t", "b", "tur", "onem", "dunya", "kapsam", "etiket", "yer_id", "d", "kaynak"];
const KIRMIZI = /vikipedi|wikipedia|blog|forum|britannica\.com\/story|history\.com|quora|reddit/i;
const cikti = {};
for (const [dosya, glob] of Object.entries(DOS)) {
  const L = ctx.window[glob], K = D[dosya];
  const r = { madde: L.length, kunye: dosya, kunye_f: K && K.f, kunye_t: K && K.t,
              kunye_kendi_kronoloji: K && K.kronoloji ? K.kronoloji.length : 0,
              alanlar: {}, eksik_alan: [], tarih_bicim: [], pencere_disi: [], kaynak_zayif: [],
              kaynaksiz: [], yuzyil: {}, gun_01_01: 0, tur: {}, anahtarlar: {} };
  L.forEach((m, i) => {
    Object.keys(m).forEach(a => r.anahtarlar[a] = (r.anahtarlar[a] || 0) + 1);
    const eks = ZOR.filter(a => m[a] === undefined);
    if (eks.length) r.eksik_alan.push({ i, t: m.t, b: m.b, eksik: eks });
    if (!/^-?\d{3,4}-\d{2}-\d{2}$/.test(m.t || "")) r.tarih_bicim.push({ i, t: m.t, b: m.b });
    if (/-01-01$/.test(m.t || "")) r.gun_01_01++;
    const yy = Math.floor(parseInt(m.t) / 100) + 1; r.yuzyil[yy] = (r.yuzyil[yy] || 0) + 1;
    r.tur[m.tur] = (r.tur[m.tur] || 0) + 1;
    const kid = m.devlet || dosya, KK = D[kid];
    const pad = x => x && x.replace(/^(\d{3})-/, "0$1-");   // §3.5: üç haneli yıl
    if (KK && m.t && (pad(m.t) < pad(KK.f) || pad(m.t) >= pad(KK.t)))
      r.pencere_disi.push({ i, t: m.t, b: m.b, kunye: kid, f: KK.f, tt: KK.t });
    const ky = m.kaynak == null ? "" : JSON.stringify(m.kaynak);
    if (!ky || ky === '""' || /bulunamad/i.test(ky)) r.kaynaksiz.push({ i, t: m.t, b: m.b, kaynak: m.kaynak });
    else if (KIRMIZI.test(ky)) r.kaynak_zayif.push({ i, t: m.t, b: m.b, kaynak: m.kaynak });
  });
  cikti[dosya] = r;
}
fs.writeFileSync("denetim/KRONO-ATLANTIK-A-0929-denetim.json", JSON.stringify(cikti, null, 1));
for (const [k, r] of Object.entries(cikti)) {
  console.log(`\n== ${k}: ${r.madde} madde · künye ${r.kunye_f}→${r.kunye_t} · künyenin kendi kronolojisi ${r.kunye_kendi_kronoloji}`);
  console.log(" anahtarlar", JSON.stringify(r.anahtarlar));
  console.log(" yüzyıl", JSON.stringify(r.yuzyil), "· 01-01", r.gun_01_01);
  console.log(" eksik alan", r.eksik_alan.length, "· tarih biçim", r.tarih_bicim.length,
              "· pencere dışı", r.pencere_disi.length, "· kaynaksız", r.kaynaksiz.length, "· zayıf kaynak", r.kaynak_zayif.length);
}

// ARAC-EKOKUMA-DAGITIM-0913-aday.js — eksik bağ ADAYI üretir (hüküm vermez; gözle okunur)
// Aday = çekirdek madde, yılı kart metninde GEÇİYOR ve başlığı kartla ≥1 anlamlı kelime paylaşıyor
// (Türkçe normalleştirici: İ/ı/ş/ğ/ü/ö/ç/â/î/û lower()'dan ÖNCE eşlenir — CLAUDE.md §4).
// Kullanım: node denetim/ARAC-EKOKUMA-DAGITIM-0913-aday.js [kart-id-süzgeci]
const fs = require("fs"), path = require("path");
const KOK = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
const olayDos = [...html.matchAll(/<script src="data\/(olaylar[^"?]*)\.js/g)].map(m => m[1]);
global.window = {};
for (const f of olayDos) eval(fs.readFileSync(path.join(KOK, "data", f + ".js"), "utf8"));
const OLAY = Object.keys(window).filter(k => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(k)).flatMap(k => window[k]);
const KART_DOS = ["ekokuma", "merak", "ekokuma_antlasma2", "ekokuma_magazin", "ekokuma_mimari",
  "ekokuma_edebiyat", "ekokuma_savas", "ekokuma_sh104", "ekokuma_tartisma", "ekokuma_kadin", "ekokuma_ekonomi"];
global.window = {};
for (const f of KART_DOS) eval(fs.readFileSync(path.join(KOK, "data", f + ".js"), "utf8"));
const KART = Object.keys(window).filter(k => /^EKOKUMA(_[A-Z0-9]+)?$/.test(k) || k === "MERAK").flatMap(k => window[k].map(c => Object.assign({ _var: k }, c)));
const TR = { "İ": "i", "I": "i", "ı": "i", "Ş": "s", "ş": "s", "Ğ": "g", "ğ": "g", "Ü": "u", "ü": "u", "Ö": "o", "ö": "o", "Ç": "c", "ç": "c", "Â": "a", "â": "a", "Î": "i", "î": "i", "Û": "u", "û": "u", "’": "'" };
const norm = s => String(s).replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû’]/g, ch => TR[ch]).normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase();
const DUR = new Set("osmanli sultan sultani pasa pasanin savasi savas antlasmasi antlasma fethi fethedildi kalesi seferi sehzade tahta cikti vefati olumu donemi sonra baslamasi kaldirildi ilk kurulusu hanligi devleti imparatorlugu istanbul".split(" "));
const kelime = s => new Set(norm(s).split(/[^a-z0-9]+/).filter(w => w.length >= 5 && !DUR.has(w)).map(w => w.slice(0, 6)));
function metin(o, skip) { let out = []; (function r(x, k) { if (skip.includes(k)) return; if (typeof x === "string") out.push(x); else if (Array.isArray(x)) x.forEach(y => r(y)); else if (x && typeof x === "object") for (const kk in x) r(x[kk], kk); })(o); return out.join(" \n "); }
const suz = process.argv[2];
for (const c of KART) {
  if (suz && !String(c.id).includes(suz)) continue;
  const bagli = new Set(c.tur === "magazin" || !c.tur ? [c.t] : (c.olay || c.baglanti || []));
  const txt = metin(c, ["kaynak", "gorsel", "gorsel_kaynak", "olay", "baglanti", "t", "id", "tur", "kesinlik"]);
  const yillar = new Set((txt.match(/\b1[2-9]\d\d\b/g) || []));
  const kw = kelime(txt);
  const ad = [];
  for (const o of OLAY) {
    if (bagli.has(o.t)) continue;
    if (!yillar.has(o.t.slice(0, 4))) continue;
    const ort = [...kelime(o.b)].filter(w => kw.has(w));
    if (ort.length) ad.push(`   ${o.t}  ${o.b}   [${ort.join(",")}]`);
  }
  if (ad.length) { console.log(`\n[${c._var}] ${c.id} · ${c.tur}`); console.log(ad.join("\n")); }
}

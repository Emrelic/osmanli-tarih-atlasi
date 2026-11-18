#!/usr/bin/env node
// STATİK SAYFALAR (SEO) — Emre, 17 Kasım 2026: "statik madde sayfalarını da yapalım".
//
// NEDEN: site haritayı JS ile çizer; arama motoru "Waterloo", "Kanuni" gibi kelimeleri sayfada
// METİN olarak görmez. Bu betik kronoloji verisinden her madde / devlet / kişi / şehir için düz
// HTML sayfa, yüzyıl dizinleri ve sitemap.xml üretir. Her sayfada "Haritada aç" düğmesi atlasın
// o gününe/maddesine derin bağlantı verir (`?madde=<DIZI:t:n>&gun=<t>`, js/app.js DERIN-BAGLANTI).
//
// KURALLAR (sitenin kendi kurallarıyla birebir):
//   · Veri, index.html'in <script src> sırasıyla vm'de yüklenir — sitede ne varsa o.
//   · Güvensiz kaynaklı madde (js/kaynak_damga.js `gizli`) sayfaya GİRMEZ (KAYNAK-ARAYUZ-1014).
//   · Kaynakça bağlantıları KaynakDamga.damgala'nın verdiği URL'lerdir.
//   · Madde kimliği js/ceviri.js ile aynı: <dizi adı>:<t>:<aynı dizide aynı t'nin sırası>.
//   · İngilizce sayfa yalnız b ve d çevirisi özet (FNV-1a) tutarsa üretilir — kayan kimlik yanlış
//     çeviri basmasın.
//   · Açıklaması kısa (d < 150 karakter) madde ince sayfa olur → kendi sayfası yok, dizinde düz metin.
//
// ÇIKTI (ÜRETİLMİŞ — elle düzenleme; veri değişince yeniden koştur):
//   m/<slug>.html · en/m/<slug>.html · devlet/<id>.html · kisi/<id>.html · sehir/<slug>.html
//   tarih/index.html · tarih/<yy>.html · en/history/index.html · en/history/<yy>.html
//   css/statik.css · sitemap.xml
//
// Kullanım:  node arac/statik_sayfa.js [--kok .] [--temel https://kronoatlas.com/] [--kuru]
"use strict";
const fs = require("fs"), vm = require("vm"), path = require("path");

const arg = (ad, vars) => { const i = process.argv.indexOf(ad); return i > 0 ? process.argv[i + 1] : vars; };
const KOK = path.resolve(arg("--kok", "."));
const TEMEL = arg("--temel", "https://kronoatlas.com/");
const KURU = process.argv.includes("--kuru");
const CIKTI = path.resolve(arg("--cikti", KOK));
const BUGUN = new Date().toISOString().slice(0, 10);
const MIN_D = 150;

// ---------------------------------------------------------------- veri yükle
function yukle() {
  const html = fs.readFileSync(path.join(KOK, "index.html"), "utf8");
  const srcs = [...html.matchAll(/<script src="((?:data|js)\/[^"?]+)/g)].map(m => m[1])
    .filter(s => s.startsWith("data/") || /\/kaynak_damga\.js$/.test(s));
  const CEV = {};
  const sessiz = { log() {}, error() {}, warn() {}, info() {} };
  const ctx = {
    console: sessiz,
    Ceviri: { ekle(dil, tur, o) { const d = CEV[dil] = CEV[dil] || {}; d[tur] = Object.assign(d[tur] || {}, o); } },
  };
  ctx.window = ctx; vm.createContext(ctx);
  const hata = [];
  for (const s of srcs) {
    if (/^data\/(ceviri_|acilis_siluet)/.test(s)) continue;     // çeviriyi aşağıda dil dil yükleriz; siluet DOM ister
    try { vm.runInContext(fs.readFileSync(path.join(KOK, s), "utf8"), ctx, { filename: s }); }
    catch (e) { hata.push(s + ": " + String(e).slice(0, 160)); }
  }
  for (const f of fs.readdirSync(path.join(KOK, "data")).filter(f => /^ceviri_en_(olay|devlet)/.test(f)).sort()) {
    try { vm.runInContext(fs.readFileSync(path.join(KOK, "data", f), "utf8"), ctx, { filename: f }); }
    catch (e) { hata.push(f + ": " + String(e).slice(0, 160)); }
  }
  if (!ctx.KaynakDamga) hata.push("KaynakDamga YÜKLENMEDİ — güvensiz madde süzülemez");
  return { w: ctx, CEV, hata };
}

// js/ceviri.js `ozet` ile birebir (FNV-1a, UTF-8 baytları üstünde)
function ozet(s) {
  let h = 0x811c9dc5;
  for (const b of Buffer.from(String(s == null ? "" : s), "utf8")) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, "0");
}

// ---------------------------------------------------------------- yardımcılar
const esc = s => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const TR_HARF = { "ç": "c", "ğ": "g", "ı": "i", "İ": "i", "ö": "o", "ş": "s", "ü": "u", "Ç": "c", "Ğ": "g", "Ö": "o", "Ş": "s", "Ü": "u", "æ": "ae", "ß": "ss", "ø": "o", "đ": "d", "ł": "l", "œ": "oe" };
function slugla(s, uzun = 72) {
  let x = String(s).replace(/[çğıİöşüÇĞÖŞÜæßøđłœ]/g, c => TR_HARF[c]).normalize("NFKD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/['’ʿʾ`]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  if (x.length > uzun) { x = x.slice(0, uzun); const k = x.lastIndexOf("-"); if (k > 30) x = x.slice(0, k); }
  return x || "madde";
}
const AY_TR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
const AY_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function parcala(t) {
  const m = /^([+-]?)(\d+)(?:-(\d{2}))?(?:-(\d{2}))?$/.exec(String(t || ""));
  if (!m) return null;
  const yil = (m[1] === "-" ? -1 : 1) * parseInt(m[2], 10);
  return { yil, ay: m[3] ? +m[3] : null, gun: m[4] ? +m[4] : null };
}
function yilYazi(yil, dil) { return yil <= 0 ? (dil === "en" ? `${-yil} BC` : `MÖ ${-yil}`) : String(yil); }
// "-01-01" sitede hassasiyet bilinmeyen yılın yazımıdır (CLAUDE.md "Tarih uydurma") → yalnız yıl.
function tarihYazi(t, dil) {
  const p = parcala(t); if (!p) return String(t || "");
  // "YYYY-01" de (padişah from/to) çoğunlukla yalnız yıldır → "Ocak 1299" sahte hassasiyet olurdu
  if (!p.ay || (p.ay === 1 && (p.gun === 1 || p.gun == null))) return yilYazi(p.yil, dil);
  const AY = dil === "en" ? AY_EN : AY_TR;
  return (p.gun ? p.gun + " " : "") + AY[p.ay - 1] + " " + yilYazi(p.yil, dil);
}
// MÖ 3000 öncesi tek kova (-31): binlerce yıla yayılan tek maddelik "MÖ 223. yüzyıl" satırları dizini boğuyordu.
const TARIH_ONCESI = -31;
function yuzyil(yil) {
  if (yil > 0) return Math.floor((yil - 1) / 100) + 1;
  if (yil < -3000) return TARIH_ONCESI;
  return -(Math.floor((Math.max(-yil, 1) - 1) / 100) + 1);     // MÖ 500 → MÖ 5. yy, MÖ 501 → MÖ 6. yy
}
function yyAnahtar(y) { return y > 0 ? String(y).padStart(2, "0") : "mo-" + String(-y).padStart(2, "0"); }
function yyAd(y, dil) {
  if (y === TARIH_ONCESI) return dil === "en" ? "Before 3000 BC" : "MÖ 3000 öncesi";
  if (dil === "en") {
    const n = Math.abs(y), s = (n % 100 >= 11 && n % 100 <= 13) ? "th" : ({ 1: "st", 2: "nd", 3: "rd" }[n % 10] || "th");
    return `${n}${s} century${y < 0 ? " BC" : ""}`;
  }
  return y > 0 ? `${y}. yüzyıl` : `MÖ ${-y}. yüzyıl`;
}
function kisalt(s, n) { s = String(s || "").replace(/\s+/g, " ").trim(); if (s.length <= n) return s; const k = s.lastIndexOf(" ", n - 1); return s.slice(0, k > n * 0.6 ? k : n - 1) + "…"; }

// ---------------------------------------------------------------- sayfa iskeleti
const METIN = {
  tr: { ana: "Ana sayfa", dizin: "Tarih dizini", ac: "🗺 Haritada aç", kaynak: "Kaynakça", yer: "Yer", kisi: "Kişiler",
        once: "← Önceki", sonra: "Sonraki →", alt: "KRONOATLAS — etkileşimli tarih atlası. Metinler kaynaklıdır; harita, kronoloji ile birbirini doğrular.",
        madde: "madde", yy: "Yüzyıllar", donem: "Dönem", tur: "Tür", bolge: "Bölge", kron: "Kronoloji", ilgili: "İlgili maddeler",
        ozet: "Özet", baskent: "Başkent", diger: "Bu sayfanın İngilizcesi", sehirler: "Şehirler", devletler: "Devletler", kisiler: "Kişiler",
        bulunamadi: "Kaynak arandı, bulunamadı." },
  en: { ana: "Home", dizin: "History index", ac: "🗺 Open on the map", kaynak: "Sources", yer: "Place", kisi: "People",
        once: "← Previous", sonra: "Next →", alt: "KRONOATLAS — interactive history atlas. Texts are sourced; the map and the chronology verify each other.",
        madde: "entries", yy: "Centuries", diger: "Bu sayfanın Türkçesi", bulunamadi: "Source searched, not found." },
};
function sayfa({ dil, yol, baslik, aciklama, govde, alternatif, jsonld, kirinti }) {
  const derin = yol.split("/").length - 1, kok = "../".repeat(derin) || "./";
  const url = TEMEL + yol;
  const alt = alternatif ? Object.entries(alternatif).map(([d, y]) => `<link rel="alternate" hreflang="${d}" href="${TEMEL + y}">`).join("\n") : "";
  const xdef = alternatif && alternatif.tr ? `\n<link rel="alternate" hreflang="x-default" href="${TEMEL + alternatif.tr}">` : "";
  const ld = [];
  if (kirinti) ld.push({ "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: kirinti.map((k, i) => ({ "@type": "ListItem", position: i + 1, name: k[0], item: TEMEL + k[1] })) });
  if (jsonld) ld.push(jsonld);
  const kirintiHtml = kirinti ? `<nav class="kirinti">${kirinti.map((k, i) => i === kirinti.length - 1 ? `<span>${esc(k[0])}</span>` : `<a href="${kok}${k[1]}">${esc(k[0])}</a>`).join(" › ")}</nav>` : "";
  return `<!DOCTYPE html>
<html lang="${dil}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(baslik)} — KRONOATLAS</title>
<meta name="description" content="${esc(kisalt(aciklama, 158))}">
<link rel="canonical" href="${url}">
${alt}${xdef}
<meta property="og:type" content="article">
<meta property="og:site_name" content="KRONOATLAS">
<meta property="og:title" content="${esc(baslik)}">
<meta property="og:description" content="${esc(kisalt(aciklama, 200))}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${dil === "en" ? "en_US" : "tr_TR"}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#5c1020">
<link rel="icon" type="image/svg+xml" href="${kok}assets/ikon.svg">
<link rel="stylesheet" href="${kok}css/statik.css">
${ld.map(o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, "\\u003c")}</script>`).join("\n")}
</head>
<body>
<header><a class="marka" href="${kok}${dil === "en" ? "?dil=en" : ""}">KRONOATLAS</a><a class="dizin" href="${kok}${dil === "en" ? "en/history/" : "tarih/"}">${METIN[dil].dizin}</a></header>
<main>
${kirintiHtml}
${govde}
</main>
<footer>${esc(METIN[dil].alt)}</footer>
</body>
</html>
`;
}

function kaynakcaHtml(KD, kaynak, t, dil) {
  const k = kaynak == null ? "" : String(kaynak).trim();
  if (!k) return "";
  let li;
  if (/^bulunamad/i.test(k)) li = [`<li>${esc(/^bulunamad[ıi]\.?$/i.test(k) ? METIN[dil].bulunamadi : k)}</li>`];
  else {
    const dm = KD ? KD.damgala(k, t) : { parcalar: k.split(/\s+[·+]\s+|\s*;\s+/).map(p => ({ p })) };
    // http(s) adresleri bağ olur, gerisi kaçışlı düz metin (app.js _kcMetinEkle eşi)
    const bagla = s => { let out = "", son = 0, m; const re = /https?:\/\/[^\s)'"»]+/g;
      while ((m = re.exec(s))) { out += esc(s.slice(son, m.index)) + `<a href="${esc(m[0])}" rel="noopener nofollow">${esc(m[0])}</a>`; son = m.index + m[0].length; }
      return out + esc(s.slice(son)); };
    li = dm.parcalar.map(p => {
      const s = String(p.p);
      if (p.url && !/https?:\/\//.test(s)) {
        const ad = p.kodlar && p.kodlar.includes("TDV") ? `TDV İslâm Ansiklopedisi, «${esc(s)}»` : esc(s);
        return `<li><a href="${esc(p.url)}" rel="noopener">${ad}</a></li>`;
      }
      return `<li>${bagla(s)}</li>`;
    });
  }
  return `<section class="kaynakca"><h2>${METIN[dil].kaynak}</h2><ul>${li.join("")}</ul></section>`;
}

// ---------------------------------------------------------------- ana akış
function main() {
  const { w, CEV, hata } = yukle();
  if (hata.length) console.error("YÜKLEME UYARISI:\n  " + hata.join("\n  "));
  const KD = w.KaynakDamga || null;
  const en = (CEV.en && CEV.en.olay) || {}, enDevlet = (CEV.en && CEV.en.devlet) || {};
  const cikti = new Map();                       // yol → içerik
  const yaz = (yol, icerik) => cikti.set(yol, icerik);
  const say = { madde: 0, sayfa_tr: 0, sayfa_en: 0, guvensiz: 0, kisa: 0, mukerrer: 0, devlet: 0, kisi: 0, sehir: 0 };

  // ---- maddeler
  const diziler = Object.keys(w).filter(k => /^(OLAYLAR(_[A-Za-z0-9_]+)?|KRONOLOJI_[A-Za-z0-9_]+)$/.test(k) && Array.isArray(w[k])).sort();
  const maddeler = [], gorulen = new Set();
  for (const ad of diziler) {
    const sira = {};
    for (const o of w[ad]) {
      if (!o || typeof o !== "object" || !o.t) continue;
      const n = sira[o.t] = (sira[o.t] || 0) + 1;
      const id = `${ad}:${o.t}:${n - 1}`;
      if (typeof o.b !== "string" || !o.b.trim()) continue;
      const p = parcala(o.t); if (!p) continue;
      say.madde++;
      if (KD && KD.gizli(o)) { say.guvensiz++; continue; }
      const anahtar = o.t + "|" + slugla(o.b, 200);
      if (gorulen.has(anahtar)) { say.mukerrer++; continue; }
      gorulen.add(anahtar);
      const r = en[id] || {};
      const enb = r.b && r.b[1] === ozet(o.b) ? r.b[0] : null;
      const end = r.d && o.d && r.d[1] === ozet(o.d) ? r.d[0] : null;
      maddeler.push({ o, id, p, yy: yuzyil(p.yil), sayfa: typeof o.d === "string" && o.d.length >= MIN_D, enb, end });
    }
  }
  maddeler.sort((a, b) => (a.p.yil - b.p.yil) || ((a.p.ay || 0) - (b.p.ay || 0)) || ((a.p.gun || 0) - (b.p.gun || 0)) || (a.id < b.id ? -1 : 1));
  // slug: tarih + başlık; çakışmada -2, -3 (sıra deterministik)
  const slugVar = new Set();
  for (const m of maddeler) {
    if (!m.sayfa) { say.kisa++; continue; }
    const on = (m.p.yil <= 0 ? "mo-" + (-m.p.yil) : String(m.p.yil)) + (m.p.ay && !(m.p.ay === 1 && m.p.gun === 1) ? "-" + String(m.p.ay).padStart(2, "0") + (m.p.gun ? "-" + String(m.p.gun).padStart(2, "0") : "") : "");
    let s = on + "-" + slugla(m.o.b), k = 2;
    while (slugVar.has(s)) s = on + "-" + slugla(m.o.b) + "-" + k++;
    slugVar.add(s); m.slug = s;
    if (m.enb && m.end) m.enSlug = on + "-" + slugla(m.enb) + (k > 2 ? "-" + (k - 1) : "");
  }
  const enSlugVar = new Set();
  for (const m of maddeler) if (m.enSlug) { let s = m.enSlug, k = 2; while (enSlugVar.has(s)) s = m.enSlug + "-" + k++; enSlugVar.add(s); m.enSlug = s; }

  const yyGrup = new Map();
  for (const m of maddeler) { if (!yyGrup.has(m.yy)) yyGrup.set(m.yy, []); yyGrup.get(m.yy).push(m); }

  const haritaBag = (m, dil) => `../?madde=${encodeURIComponent(m.id)}&gun=${encodeURIComponent(m.o.t)}${dil === "en" ? "&dil=en" : ""}`;
  for (const [yy, liste] of yyGrup) {
    const sayfali = liste.filter(m => m.slug);
    sayfali.forEach((m, i) => {
      const o = m.o, onc = sayfali[i - 1], snr = sayfali[i + 1];
      for (const dil of m.enSlug ? ["tr", "en"] : ["tr"]) {
        const yol = dil === "en" ? `en/m/${m.enSlug}.html` : `m/${m.slug}.html`;
        const b = dil === "en" ? m.enb : o.b, d = dil === "en" ? m.end : o.d;
        const tarih = dil === "tr" && o.gun ? o.gun : tarihYazi(o.t, dil);
        const bagla = x => x && (dil === "en" ? (x.enSlug ? `${x.enSlug}.html` : null) : `${x.slug}.html`);
        const nav = [onc && bagla(onc) ? `<a href="${bagla(onc)}">${METIN[dil].once}</a>` : "<span></span>",
                     snr && bagla(snr) ? `<a href="${bagla(snr)}">${METIN[dil].sonra}</a>` : "<span></span>"].join("");
        const meta = [`<span class="tarih">${esc(tarih)}</span>`];
        if (dil === "tr" && o.yer) meta.push(`<span>📍 ${esc(o.yer)}</span>`);
        if (dil === "tr" && o.kisiler) meta.push(`<span>👤 ${esc(o.kisiler)}</span>`);
        const yyY = dil === "en" ? `en/history/${yyAnahtar(yy)}.html` : `tarih/${yyAnahtar(yy)}.html`;
        const govde = `<article>
<h1>${esc(b)}</h1>
<p class="meta">${meta.join(" ")}</p>
<p class="metin">${esc(d)}</p>
<p><a class="ac" href="../${dil === "en" ? "../" : ""}${haritaBag(m, dil).slice(3)}">${METIN[dil].ac}</a></p>
${dil === "tr" ? kaynakcaHtml(KD, o.kaynak, o.t, "tr") : (o.kaynak ? kaynakcaHtml(KD, o.kaynak, o.t, "en") : "")}
${m.enSlug ? `<p class="dil"><a href="${dil === "en" ? `../../m/${m.slug}.html` : `../en/m/${m.enSlug}.html`}" hreflang="${dil === "en" ? "tr" : "en"}">${dil === "en" ? "Türkçe" : "English"}</a></p>` : ""}
<nav class="gez">${nav}</nav>
</article>`;
        const p = m.p, tam = p.yil > 0 && p.ay && p.gun && !(p.ay === 1 && p.gun === 1);
        const ld = { "@context": "https://schema.org", "@type": "Article", headline: kisalt(b, 110), inLanguage: dil,
          description: kisalt(d, 300), isPartOf: { "@type": "WebSite", name: "KRONOATLAS", url: TEMEL },
          about: Object.assign({ "@type": "Event", name: kisalt(b, 110) },
            tam ? { startDate: o.t } : {}, o.yer && dil === "tr" ? { location: { "@type": "Place", name: o.yer } } : {}) };
        yaz(yol, sayfa({ dil, yol, baslik: kisalt(b, 90), aciklama: `${tarihYazi(o.t, dil)} — ${d}`, govde, jsonld: ld,
          alternatif: m.enSlug ? { tr: `m/${m.slug}.html`, en: `en/m/${m.enSlug}.html` } : null,
          kirinti: [[METIN[dil].ana, dil === "en" ? "?dil=en" : ""], [METIN[dil].dizin, dil === "en" ? "en/history/" : "tarih/"], [yyAd(yy, dil), yyY], [kisalt(b, 60), yol]] }));
        say[dil === "en" ? "sayfa_en" : "sayfa_tr"]++;
      }
    });
  }

  // ---- yüzyıl dizinleri
  const yyler = [...yyGrup.keys()].sort((a, b) => a - b);
  for (const dil of ["tr", "en"]) {
    const kokYol = dil === "en" ? "en/history/" : "tarih/";
    const satirlar = [];
    for (const yy of yyler) {
      const liste = yyGrup.get(yy).filter(m => dil === "tr" || m.enSlug);
      if (!liste.length) continue;
      const yol = `${kokYol}${yyAnahtar(yy)}.html`;
      satirlar.push(`<li><a href="${yyAnahtar(yy)}.html">${esc(yyAd(yy, dil))}</a> <small>(${liste.length} ${METIN[dil].madde})</small></li>`);
      const li = liste.map(m => {
        const b = dil === "en" ? m.enb : m.o.b, tarih = tarihYazi(m.o.t, dil);
        const hedef = dil === "en" ? `../m/${m.enSlug}.html` : (m.slug ? `../m/${m.slug}.html` : null);
        return `<li><span class="tarih">${esc(tarih)}</span> ${hedef ? `<a href="${hedef}">${esc(b)}</a>` : esc(b)}</li>`;
      });
      const enVar = yyGrup.get(yy).some(m => m.enSlug);
      yaz(yol, sayfa({ dil, yol, baslik: dil === "en" ? `${yyAd(yy, dil)} — history chronology` : `${yyAd(yy, dil)} — tarih kronolojisi`,
        aciklama: dil === "en" ? `Chronology of the ${yyAd(yy, dil)}: ${liste.length} dated entries with sources, each linked to the interactive history map.`
                               : `${yyAd(yy, dil)} kronolojisi: ${liste.length} tarihli, kaynaklı madde; her madde etkileşimli tarih haritasında açılır.`,
        govde: `<h1>${esc(yyAd(yy, dil))}</h1><ul class="liste">${li.join("\n")}</ul>`,
        alternatif: enVar ? { tr: `tarih/${yyAnahtar(yy)}.html`, en: `en/history/${yyAnahtar(yy)}.html` } : null,
        kirinti: [[METIN[dil].ana, dil === "en" ? "?dil=en" : ""], [METIN[dil].dizin, kokYol], [yyAd(yy, dil), yol]] }));
    }
    const ekler = dil === "tr" ? `<h2>${METIN.tr.devletler}</h2><p><a href="../devlet/">Devletler dizini</a> · <a href="../kisi/">Kişiler dizini</a> · <a href="../sehir/">Şehirler dizini</a></p>` : "";
    yaz(kokYol + "index.html", sayfa({ dil, yol: kokYol + "index.html",
      baslik: dil === "en" ? "History index — chronology by century" : "Tarih dizini — yüzyıllara göre kronoloji",
      aciklama: dil === "en" ? "Interactive history atlas chronology by century: Ottoman, Byzantine, Roman, European and world history, every entry sourced and shown on the map."
                             : "Yüzyıllara göre tarih kronolojisi: Osmanlı, Bizans, Roma, Avrupa ve dünya tarihi; her madde kaynaklı ve haritada gösterilir.",
      govde: `<h1>${METIN[dil].dizin}</h1><h2>${METIN[dil].yy}</h2><ul class="liste">${satirlar.join("\n")}</ul>${ekler}`,
      alternatif: { tr: "tarih/index.html", en: "en/history/index.html" },
      kirinti: [[METIN[dil].ana, dil === "en" ? "?dil=en" : ""], [METIN[dil].dizin, kokYol]] }));
  }

  // ---- devletler
  const devletler = (w.DEVLETLER || []).filter(d => d && d.id && d.ad);
  const maddeSayfali = maddeler.filter(m => m.slug);
  const devletSatir = [];
  for (const d of devletler) {
    const kron = (Array.isArray(d.kronoloji) ? d.kronoloji : []).filter(k => k && k.b && !(KD && KD.gizli(k)));
    const kisaAd = String(d.ad).replace(/\s*\(.*$/, "").trim();
    let ilgili = [];
    if (kisaAd.length >= 5) {
      const re = new RegExp("(^|[^\\p{L}])" + kisaAd.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![\\p{L}])", "u");
      ilgili = maddeSayfali.filter(m => re.test(m.o.b)).slice(0, 300);
    }
    if (!d.ozet && !kron.length && !ilgili.length) continue;
    const yol = `devlet/${slugla(d.id, 90)}.html`;
    const tf = [d.f && tarihYazi(d.f, "tr"), d.t && tarihYazi(d.t, "tr")].filter(Boolean).join(" – ");
    const govde = `<article>
<h1>${esc(d.ad)}</h1>
<p class="meta">${tf ? `<span class="tarih">${esc(tf)}</span>` : ""}${d.tur ? ` <span>${esc(d.tur)}</span>` : ""}${d.bolge ? ` <span>${esc(d.bolge)}</span>` : ""}${d.baskent ? ` <span>${METIN.tr.baskent}: ${esc(d.baskent)}</span>` : ""}</p>
${d.ozet ? `<p class="metin">${esc(d.ozet)}</p>` : ""}
<p><a class="ac" href="../?gun=${encodeURIComponent(d.f || "")}">${METIN.tr.ac}</a></p>
${kron.length ? `<h2>${METIN.tr.kron}</h2><ul class="liste">${kron.map(k => `<li><span class="tarih">${esc(tarihYazi(k.t, "tr"))}</span> ${esc(k.b)}</li>`).join("\n")}</ul>` : ""}
${ilgili.length ? `<h2>${METIN.tr.ilgili}</h2><ul class="liste">${ilgili.map(m => `<li><span class="tarih">${esc(tarihYazi(m.o.t, "tr"))}</span> <a href="../m/${m.slug}.html">${esc(m.o.b)}</a></li>`).join("\n")}</ul>` : ""}
${kaynakcaHtml(KD, d.kaynak, d.f, "tr")}
</article>`;
    const enAd = enDevlet[d.id] && enDevlet[d.id][1] === ozet(d.ad) ? enDevlet[d.id][0] : null;
    yaz(yol, sayfa({ dil: "tr", yol, baslik: d.ad + (tf ? ` (${tf})` : ""), aciklama: `${d.ad}${tf ? ` (${tf})` : ""}${enAd ? ` — ${enAd}` : ""}. ${d.ozet || `${kron.length + ilgili.length} kronoloji maddesi, haritada.`}`,
      govde, jsonld: { "@context": "https://schema.org", "@type": "Article", headline: kisalt(d.ad, 110), inLanguage: "tr",
        about: Object.assign({ "@type": "Country", name: d.ad }, enAd ? { alternateName: enAd } : {}) },
      kirinti: [[METIN.tr.ana, ""], [METIN.tr.devletler, "devlet/"], [kisalt(d.ad, 60), yol]] }));
    devletSatir.push(`<li><a href="${slugla(d.id, 90)}.html">${esc(d.ad)}</a>${tf ? ` <small>${esc(tf)}</small>` : ""}</li>`);
    say.devlet++;
  }
  // Osmanlı çekirdeği DEVLETLER'de yok (app.js `d.id === "osmanli"` ayrı yol) → kendi sayfası:
  // padişahlar (PADISAHLAR) + Osmanlı listesindeki (OLAYLAR*) sayfalı maddeler, yüzyıl yüzyıl.
  {
    const pad = (w.PADISAHLAR || []).filter(k => k && k.id && k.ad);
    const osm = maddeSayfali.filter(m => /^OLAYLAR(_|:)/.test(m.id));
    const yyOsm = new Map(); for (const m of osm) { if (!yyOsm.has(m.yy)) yyOsm.set(m.yy, []); yyOsm.get(m.yy).push(m); }
    const asil = pad.filter(k => !k.ozel);        // `ozel` = "Saltanat kaldırıldı — Halife" satırı, padişah değil
    const tf = [asil[0] && asil[0].from, asil.length && asil[asil.length - 1].to].filter(Boolean).map(x => tarihYazi(x, "tr")).join(" – ");
    const govde = `<article>
<h1>Osmanlı İmparatorluğu (Osmanlı Devleti)</h1>
<p class="meta">${tf ? `<span class="tarih">${esc(tf)}</span> ` : ""}<span>Padişahlar ve gün gün kronoloji</span></p>
<p><a class="ac" href="../">${METIN.tr.ac}</a></p>
<h2>Padişahlar</h2><ol class="liste">${pad.map(k => `<li><a href="../kisi/${slugla(k.id, 90)}.html">${esc(k.ad)}</a> <small>${esc([k.from, k.to].filter(Boolean).map(x => tarihYazi(x, "tr")).join(" – "))}</small></li>`).join("\n")}</ol>
${[...yyOsm.keys()].sort((a, b) => a - b).map(yy => `<h2>${esc(yyAd(yy, "tr"))}</h2><ul class="liste">${yyOsm.get(yy).map(m => `<li><span class="tarih">${esc(tarihYazi(m.o.t, "tr"))}</span> <a href="../m/${m.slug}.html">${esc(m.o.b)}</a></li>`).join("\n")}</ul>`).join("\n")}
</article>`;
    const yol = "devlet/osmanli.html";
    yaz(yol, sayfa({ dil: "tr", yol, baslik: `Osmanlı İmparatorluğu${tf ? ` (${tf})` : ""} — padişahlar ve kronoloji`,
      aciklama: `Osmanlı İmparatorluğu kronolojisi: ${pad.length} padişah ve ${osm.length} tarihli, kaynaklı madde; fetihler, savaşlar, antlaşmalar haritada gün gün.`,
      govde, jsonld: { "@context": "https://schema.org", "@type": "Article", headline: "Osmanlı İmparatorluğu — padişahlar ve kronoloji", inLanguage: "tr",
        about: { "@type": "Country", name: "Osmanlı İmparatorluğu", alternateName: "Ottoman Empire" } },
      kirinti: [[METIN.tr.ana, ""], [METIN.tr.devletler, "devlet/"], ["Osmanlı İmparatorluğu", yol]] }));
    devletSatir.unshift(`<li><a href="osmanli.html"><strong>Osmanlı İmparatorluğu</strong></a>${tf ? ` <small>${esc(tf)}</small>` : ""}</li>`);
    say.devlet++;
  }
  yaz("devlet/index.html", sayfa({ dil: "tr", yol: "devlet/index.html", baslik: "Devletler dizini — tarihteki devletler",
    aciklama: `Atlasın kapsadığı ${say.devlet} devlet: Osmanlı, Bizans, Roma, Pers, Selçuklu, Habsburg, Rus, İngiliz ve daha fazlası; kuruluş-yıkılış tarihleri ve kronolojileriyle.`,
    govde: `<h1>${METIN.tr.devletler}</h1><ul class="liste">${devletSatir.join("\n")}</ul>`,
    kirinti: [[METIN.tr.ana, ""], [METIN.tr.devletler, "devlet/"]] }));

  // ---- kişiler (KISILER + PADISAHLAR)
  const kisiSatir = [];
  const kisiler = [...(w.PADISAHLAR || []).map(k => ({ ...k, _pad: true })), ...(w.KISILER || [])].filter(k => k && k.id && k.ad);
  for (const k of kisiler) {
    const yol = `kisi/${slugla(k.id, 90)}.html`;
    const donem = k._pad ? [k.from, k.to].filter(Boolean).map(x => tarihYazi(x, "tr")).join(" – ") : (k.donem || "");
    const alanlar = k._pad ? [["Doğum", k.dogum], ["Ölüm", k.olum], ["Ölüm yeri", k.olum_yer], ["Ölüm sebebi", k.olum_sebep], ["Baba", k.baba], ["Anne", k.anne]]
                           : [["Görev", k.tur]];
    const metin = k.not || k.ozet || k.d || "";
    const govde = `<article>
<h1>${esc(k.ad)}</h1>
<p class="meta">${donem ? `<span class="tarih">${esc(donem)}</span>` : ""}${k._pad ? " <span>Osmanlı padişahı</span>" : ""}</p>
${metin ? `<p class="metin">${esc(metin)}</p>` : ""}
<dl>${alanlar.filter(a => a[1]).map(a => `<dt>${esc(a[0])}</dt><dd>${esc(a[1])}</dd>`).join("")}</dl>
${k._pad && k.from ? `<p><a class="ac" href="../?gun=${encodeURIComponent(k.from)}">${METIN.tr.ac}</a></p>` : (/^\d{3,4}$/.test(String(k.t || "")) ? `<p><a class="ac" href="../?gun=${k.t}-01-01">${METIN.tr.ac}</a></p>` : "")}
${kaynakcaHtml(KD, k.kaynak, k.from || k.t, "tr")}
</article>`;
    yaz(yol, sayfa({ dil: "tr", yol, baslik: k.ad + (donem ? ` (${donem})` : ""), aciklama: `${k.ad}${donem ? ` (${donem})` : ""}. ${metin}`,
      govde, jsonld: { "@context": "https://schema.org", "@type": "Article", headline: kisalt(k.ad, 110), inLanguage: "tr", about: { "@type": "Person", name: k.ad } },
      kirinti: [[METIN.tr.ana, ""], [METIN.tr.kisiler, "kisi/"], [kisalt(k.ad, 60), yol]] }));
    kisiSatir.push(`<li><a href="${slugla(k.id, 90)}.html">${esc(k.ad)}</a>${donem ? ` <small>${esc(donem)}</small>` : ""}</li>`);
    say.kisi++;
  }
  yaz("kisi/index.html", sayfa({ dil: "tr", yol: "kisi/index.html", baslik: "Kişiler dizini — padişahlar, sadrazamlar, devlet adamları",
    aciklama: `Osmanlı padişahları, sadrazamlar ve tarihî şahsiyetler: ${say.kisi} kişi, dönemleri ve kaynaklarıyla.`,
    govde: `<h1>${METIN.tr.kisiler}</h1><ul class="liste">${kisiSatir.join("\n")}</ul>`,
    kirinti: [[METIN.tr.ana, ""], [METIN.tr.kisiler, "kisi/"]] }));

  // ---- şehirler
  const sehirSatir = [];
  for (const s of (w.SEHIRLER || []).filter(s => s && s.ad)) {
    const slug = slugla(s.ad), yol = `sehir/${slug}.html`;
    const bol = [["Adın kökeni", s.koken], ["Önemi", s.onem], ["Tarihçe", s.tarihce], ["Yapılar", s.yapilar]].filter(a => a[1]);
    if (!bol.length) continue;
    const govde = `<article><h1>${esc(s.ad)}</h1>${bol.map(a => `<h2>${esc(a[0])}</h2><p class="metin">${esc(a[1])}</p>`).join("\n")}
${kaynakcaHtml(KD, s.kaynak, null, "tr")}</article>`;
    yaz(yol, sayfa({ dil: "tr", yol, baslik: `${s.ad} tarihi`, aciklama: `${s.ad}: ${s.onem || s.tarihce || ""}`, govde,
      jsonld: { "@context": "https://schema.org", "@type": "Article", headline: `${s.ad} tarihi`, inLanguage: "tr",
        about: Object.assign({ "@type": "City", name: s.ad }, s.lat != null ? { geo: { "@type": "GeoCoordinates", latitude: s.lat, longitude: s.lon } } : {}) },
      kirinti: [[METIN.tr.ana, ""], [METIN.tr.sehirler, "sehir/"], [s.ad, yol]] }));
    sehirSatir.push(`<li><a href="${slug}.html">${esc(s.ad)}</a></li>`);
    say.sehir++;
  }
  yaz("sehir/index.html", sayfa({ dil: "tr", yol: "sehir/index.html", baslik: "Şehirler dizini — şehir tarihçeleri",
    aciklama: `${say.sehir} şehrin adının kökeni, önemi, tarihçesi ve yapıları.`,
    govde: `<h1>${METIN.tr.sehirler}</h1><ul class="liste">${sehirSatir.join("\n")}</ul>`,
    kirinti: [[METIN.tr.ana, ""], [METIN.tr.sehirler, "sehir/"]] }));

  // ---- css
  yaz("css/statik.css", `/* ÜRETİLMİŞ — arac/statik_sayfa.js */
:root { --zemin: #faf5ea; --metin: #2a0a10; --vurgu: #5c1020; --ince: #7a6a5a; --cizgi: #e3d6bd; --bag: #8a1c30; }
@media (prefers-color-scheme: dark) { :root { --zemin: #1c0b0f; --metin: #f3e6c8; --vurgu: #f3e6c8; --ince: #bba98f; --cizgi: #4a2a30; --bag: #ffd98a; } }
* { box-sizing: border-box; }
body { margin: 0; background: var(--zemin); color: var(--metin); font: 17px/1.6 Georgia, "Times New Roman", serif; }
header { display: flex; justify-content: space-between; align-items: center; padding: 10px 16px; background: #5c1020; }
header a { color: #f3e6c8; text-decoration: none; font: 600 15px "Segoe UI", system-ui, sans-serif; }
header .marka { letter-spacing: .12em; font-weight: 800; }
main { max-width: 760px; margin: 0 auto; padding: 16px; }
h1 { font-size: 1.7em; line-height: 1.25; margin: .4em 0; color: var(--vurgu); }
h2 { font-size: 1.15em; margin-top: 1.6em; border-bottom: 1px solid var(--cizgi); padding-bottom: 4px; }
a { color: var(--bag); }
.kirinti { font: 13px "Segoe UI", system-ui, sans-serif; color: var(--ince); }
.kirinti a { color: var(--ince); }
.meta { font: 14px "Segoe UI", system-ui, sans-serif; color: var(--ince); display: flex; flex-wrap: wrap; gap: 6px 14px; }
.tarih { font-weight: 600; color: var(--vurgu); white-space: nowrap; }
.ac { display: inline-block; margin: 8px 0; padding: 8px 16px; border-radius: 6px; background: #5c1020; color: #f3e6c8; text-decoration: none; font: 600 15px "Segoe UI", system-ui, sans-serif; }
.liste { padding-left: 1.1em; } .liste li { margin: 4px 0; } .liste small { color: var(--ince); }
.kaynakca ul { font-size: 14px; word-break: break-word; }
.gez { display: flex; justify-content: space-between; margin-top: 24px; font: 14px "Segoe UI", system-ui, sans-serif; }
dl { display: grid; grid-template-columns: max-content 1fr; gap: 4px 14px; font-size: 15px; } dt { color: var(--ince); }
footer { max-width: 760px; margin: 32px auto; padding: 16px; font: 13px "Segoe UI", system-ui, sans-serif; color: var(--ince); border-top: 1px solid var(--cizgi); }
`);

  // ---- sitemap (50.000 URL sınırı; aşarsa dizinli sitemap gerekir)
  const urller = ["", ...[...cikti.keys()].filter(y => y.endsWith(".html")).map(y => y.replace(/index\.html$/, ""))];
  if (urller.length > 50000) throw new Error(`sitemap ${urller.length} URL — 50.000 sınırı aşıldı, sitemap dizini gerekir`);
  yaz("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urller.map(u => `  <url><loc>${esc(TEMEL + u)}</loc><lastmod>${BUGUN}</lastmod>${u === "" ? "<priority>1.0</priority>" : ""}</url>`).join("\n")}
</urlset>
`);

  // ---- yaz: üretilmiş dizinleri temizle, yeniden yaz
  let bayt = 0; for (const v of cikti.values()) bayt += Buffer.byteLength(v);
  console.log(JSON.stringify(say), `dosya ${cikti.size}`, `toplam ${(bayt / 1048576).toFixed(1)} MiB`, `sitemap ${urller.length} URL`);
  if (KURU) return;
  for (const d of ["m", "en/m", "en/history", "tarih", "devlet", "kisi", "sehir"]) fs.rmSync(path.join(CIKTI, d), { recursive: true, force: true });
  for (const [yol, icerik] of cikti) { const t = path.join(CIKTI, yol); fs.mkdirSync(path.dirname(t), { recursive: true }); fs.writeFileSync(t, icerik); }
}
main();

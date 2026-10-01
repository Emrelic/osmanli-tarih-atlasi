// node evren.js  -> evren.json (tüm kronoloji_cok_* maddeleri + modern site / alıntı sınıflaması)
const fs = require('fs'), path = require('path');
const DIR = 'C:/atlas/data';
const files = fs.readdirSync(DIR).filter(f => /^kronoloji_cok_.*\.js$/.test(f)).sort();
const SITE = /britannica|encyclopedia\.com|wiki|\.edu\b|oxfordre|oxford research|jstor|metmuseum|british ?museum|smithsonian|worldhistory\.org|ancient\.eu|newworldencyclopedia|history\.com|nationalgeographic|unesco|archive\.org|google|\.gov\b|museum|müze|arşiv|archives|encyclopaedia iranica|iranicaonline|brill|cambridge\.org|academia\.edu|researchgate|sahistory|blackpast|biography\.com|thoughtco|khan ?academy|study\.com|https?:\/\//i;
const QUOTE = /«[^»]{15,}»|“[^”]{15,}”|'[^']{25,}'|"[^"]{25,}"|‘[^’]{25,}’/;
const out = { dosyalar: [], maddeler: [] };
for (const f of files) {
  global.window = {};
  try { delete require.cache[require.resolve(path.join(DIR, f))]; require(path.join(DIR, f)); }
  catch (e) { out.dosyalar.push({ f, hata: String(e).slice(0, 200) }); continue; }
  const vars = Object.keys(window);
  let n = 0;
  for (const v of vars) {
    const a = window[v]; if (!Array.isArray(a)) continue;
    a.forEach((m, i) => {
      n++;
      const k = String(m.kaynak || ''), ik = String(m.ic_not_kaynak || '');
      const site = SITE.test(k), alinti = QUOTE.test(k);
      const tdv = /TDV/.test(k);
      out.maddeler.push({ f, v, i, t: m.t, b: String(m.b || '').slice(0, 90), kaynak: k, ic_not_kaynak: ik.slice(0, 300), site, alinti, tdv,
        siteler: (k.match(SITE) || []).map(x => x.toLowerCase()) });
    });
  }
  out.dosyalar.push({ f, vars, n });
}
fs.writeFileSync('./evren.json', JSON.stringify(out, null, 1));
const M = out.maddeler;
console.log('dosya', files.length, 'madde', M.length);
for (const d of out.dosyalar) console.log(' ', d.f, d.n ?? d.hata);
const c = (p) => M.filter(p).length;
console.log('kaynak boş', c(m => !m.kaynak.trim()), '| modern site', c(m => m.site), '| alıntı', c(m => m.alinti), '| site+alıntı', c(m => m.site && m.alinti), '| TDV', c(m => m.tdv));
const bySite = {}; for (const m of M) if (m.site) { const k = (m.kaynak.match(/britannica|encyclopedia\.com|wiki\w*|oxfordre|oxford research|worldhistory\.org|metmuseum|iranica|https?:\/\/[^\s/)]+|\.edu|museum|müze/gi) || ['diğer']).map(x=>x.toLowerCase()); for (const s of new Set(k)) bySite[s] = (bySite[s] || 0) + 1; }
console.log(bySite);

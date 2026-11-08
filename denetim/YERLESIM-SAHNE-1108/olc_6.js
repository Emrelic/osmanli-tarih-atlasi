// ÖLÇÜM 6 — ad bağımsızlığı. Kullanım: node olc_6.js <veri.json> <cikti-dizini>
const fs = require('fs'), path = require('path');
const o = require('./ortak.js');
const { Y, M } = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const CIK = process.argv[3] || '.'; fs.mkdirSync(CIK, { recursive: true });

// --- ≤1 km farklı adlı çiftler ---
const hucre = new Map();
const key = (la, lo) => Math.floor(la / 0.02) + ',' + Math.floor(lo / 0.02);
Y.forEach((y, i) => { const k = key(y.lat, y.lon); if (!hucre.has(k)) hucre.set(k, []); hucre.get(k).push(i); });
const cift1 = [], cift3 = new Set();
for (let i = 0; i < Y.length; i++) {
  const a = Y[i], ci = Math.floor(a.lat / 0.02), cj = Math.floor(a.lon / 0.02);
  for (let di = -3; di <= 3; di++) for (let dj = -3; dj <= 3; dj++) {
    const l = hucre.get((ci + di) + ',' + (cj + dj)); if (!l) continue;
    for (const j of l) {
      if (j <= i) continue;
      const b = Y[j], km = o.haversine(a.lat, a.lon, b.lat, b.lon);
      if (km <= 3) cift3.add(i + '-' + j);
      if (km <= 1) cift1.push([a, b, km]);
    }
  }
}
function sinif(a, b) {
  const na = o.norm(a.ad.split(' (')[0]), nb = o.norm(b.ad.split(' (')[0]);
  const ia = (/\(([^)]+)\)/.exec(a.ad) || [])[1], ib = (/\(([^)]+)\)/.exec(b.ad) || [])[1];
  if (a.ad === b.ad) return 'AYNI_AD';
  if (na === nb) return 'norm_esit';
  if (ia && o.norm(ia.split(/[\/,]/)[0]) === nb) return 'paren_ic=diger';
  if (ib && o.norm(ib.split(/[\/,]/)[0]) === na) return 'paren_ic=diger';
  return 'farkli_ad';
}
const donemKumesi = (y) => [].concat(y.s || [], y.d || [], y.v || []);
function cakisma(a, b) {            // iki kaydın dönemleri örtüşüyor mu (ikisi de sahipli)?
  const A = donemKumesi(a), B = donemKumesi(b);
  for (const r of A) for (const q of B) {
    const f1 = o.gk(r.f), t1 = r.t ? o.gk(r.t) : o.SON, f2 = o.gk(q.f), t2 = q.t ? o.gk(q.t) : o.SON;
    if (Math.max(f1, f2) < Math.min(t1, t2)) return true;
  }
  return false;
}
const sd = {}, ornek = {};
const sat = [];
for (const [a, b, km] of cift1) {
  const s = sinif(a, b), cak = cakisma(a, b);
  const ks = s + (cak ? '+DONEM_CAKISIR' : '');
  sd[ks] = (sd[ks] || 0) + 1; (ornek[ks] = ornek[ks] || []).length < 6 && ornek[ks].push(`${a.ad} ⇄ ${b.ad} (${km.toFixed(2)} km)`);
  sat.push([a.ad, b.ad, km.toFixed(2), s, cak, a._dosya, b._dosya, a.tur, b.tur].join('\t'));
}
fs.writeFileSync(path.join(CIK, 'm6_1km_ciftler.tsv'), 'ad_a\tad_b\tkm\tsinif\tdonem_cakisir\tdosya_a\tdosya_b\ttur_a\ttur_b\n' + sat.join('\n'));

// --- ad kullanım ---
const tam = new Map(), onP = new Map();
for (const y of Y) { (tam.get(y.ad) || tam.set(y.ad, []).get(y.ad)).push(y); const p = y.ad.split(' (')[0]; if (p !== y.ad) (onP.get(p) || onP.set(p, []).get(p)).push(y); }
const parenli = Y.filter(y => y.ad.includes(' ('));
const tekrarAd = [...tam.entries()].filter(([, v]) => v.length > 1);
const cakisanPre = [...onP.entries()].filter(([p, v]) => tam.has(p) || v.length > 1);   // pre-paren başka kaydın birebir adı / çoklu
const ref = new Map();               // yerleşim adı -> {yer_id, odak, m}
const yerIdPre = { tamEsles: 0, preParenEsles: 0 };
function sayRef(ad, tur) {
  if (!ad) return;
  let h = tam.get(ad), mod = 'tam';
  if (!h) { h = onP.get(ad); mod = 'pre'; }
  if (!h) return;
  const k = h[0].ad; const e = ref.get(k) || { yer_id: 0, odak: 0, m: 0, pre: 0 };
  e[tur]++; if (mod === 'pre') e.pre++; ref.set(k, e);
  if (tur === 'yer_id') yerIdPre[mod === 'tam' ? 'tamEsles' : 'preParenEsles']++;
}
for (const m of M) { sayRef(m.yer_id, 'yer_id'); const oy = m.odak_yer; if (oy) for (const a of (Array.isArray(oy) ? oy : [oy])) sayRef(a, 'odak'); }
for (const y of Y) if (y.m) sayRef(y.m, 'm');
const toplamRef = [...ref.entries()].map(([k, e]) => [k, e.yer_id + e.odak + e.m, e]).sort((a, b) => b[1] - a[1]);
const ref10 = toplamRef.filter(x => x[1] >= 10).length;
// paren adlı yerleşimlere yapılan referansların kaçı kısa (pre) adla — ad uzatılırsa/kısaltılırsa kopar
const parenRef = toplamRef.filter(([k]) => k.includes(' ('));
const preAdlaBagliMadde = parenRef.reduce((a, [, , e]) => a + e.pre, 0);
const tamAdlaBagliParen = parenRef.reduce((a, [, n, e]) => a + (n - e.pre), 0);
// birden çok dilli/alternatif ad taşıyan: paren içinde / veya , var
const cokluAd = Y.filter(y => /\([^)]*[\/,][^)]*\)/.test(y.ad));
// alias alanı var mı?
const alanlar = {}; for (const y of Y) for (const k of Object.keys(y)) alanlar[k] = (alanlar[k] || 0) + 1;
const aliasAlan = Object.keys(alanlar).filter(k => /alias|diger_ad|eski_ad|ad_|adlar|isim|kimlik|id$/i.test(k));
// ad (yerleşim) benzersiz mi — aynı normalleşmiş ad iki farklı uzak yerde?
const nk = new Map(); for (const y of Y) { const k = o.norm(y.ad.split(' (')[0]); (nk.get(k) || nk.set(k, []).get(k)).push(y); }
let ayniNormUzak = 0; const ayniNormOrn = [];
for (const [k, v] of nk) { if (v.length < 2) continue; let uz = false; for (let i = 0; i < v.length; i++) for (let j = i + 1; j < v.length; j++) if (o.haversine(v[i].lat, v[i].lon, v[j].lat, v[j].lon) > 50) uz = true; if (uz) { ayniNormUzak++; if (ayniNormOrn.length < 8) ayniNormOrn.push(v.map(y => y.ad + '@' + y.lat.toFixed(1) + ',' + y.lon.toFixed(1)).join(' | ')); } }
// kron olay yer_kon'lu ve yer_id'li: ikisi tutarlı mı (yer_id çözülen yerleşim yer_kon'dan ≤50 km mi)
let ikisiVar = 0, uyumlu = 0, uyumsuz = [];
for (const m of M) if (m.yer_id && m.yer_kon && m.yer_kon.length === 2) {
  const h = tam.get(m.yer_id) || onP.get(m.yer_id); if (!h) continue; ikisiVar++;
  const km = o.haversine(h[0].lat, h[0].lon, m.yer_kon[0], m.yer_kon[1]);
  if (km <= 50) uyumlu++; else if (uyumsuz.length < 10) uyumsuz.push(`${m.t} ${m.yer_id} ↔ yer_kon ${km.toFixed(0)} km`);
}
const ozet = {
  yerlesim: Y.length,
  km1_cift: cift1.length, km3_cift: cift3.size, km1_sinif: sd, km1_ornek: ornek,
  parenliAd: parenli.length, cokluAdliParen: cokluAd.length, cokluAdOrnek: cokluAd.slice(0, 8).map(y => y.ad),
  ayniAdTekrar: tekrarAd.length, ayniAdTekrarOrnek: tekrarAd.slice(0, 8).map(([a, v]) => a + ' ×' + v.length),
  preParenBaskaKayitlaCakisan: cakisanPre.length, preParenCakisanOrnek: cakisanPre.slice(0, 8).map(([a, v]) => a + ' → ' + v.map(y => y.ad).join(' | ')),
  ayniNormaAdFarkliUzakYer: ayniNormUzak, ayniNormOrnek: ayniNormOrn,
  aliasAlani: aliasAlan, alanDoluluk: Object.fromEntries(Object.entries(alanlar).sort((a, b) => b[1] - a[1]).slice(0, 25)),
  yerIdBaglanma: yerIdPre, referansiOlanYerlesim: ref.size, ref10plus: ref10,
  parenliYerlesimeReferans: { yerlesim: parenRef.length, kisaAdlaBagliBaglanti: preAdlaBagliMadde, tamAdlaBagliBaglanti: tamAdlaBagliParen },
  enCokReferansAlan20: toplamRef.slice(0, 20).map(([k, n, e]) => `${k}: ${n} (yer_id ${e.yer_id}, odak ${e.odak}, m ${e.m})`),
  yerIdYerKon: { ikisiDe: ikisiVar, uyumlu50km: uyumlu, uyumsuzOrnek: uyumsuz },
};
fs.writeFileSync(path.join(CIK, 'm6_ozet.json'), JSON.stringify(ozet, null, 1));
console.log(JSON.stringify(ozet, null, 1));

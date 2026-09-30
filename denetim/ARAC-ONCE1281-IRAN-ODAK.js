// ONCE1281-IRAN — maddelerin `yer` alanını `sehirler` havuzuna eşleyip odak önerisi çıkarır.
//   node denetim/ARAC-ONCE1281-IRAN-ODAK.js            → tablo (eşlenen / eşlenmeyen)
//   node denetim/ARAC-ONCE1281-IRAN-ODAK.js --json     → denetim/ONCE1281-IRAN-ODAK-OTO.json
// Kural (M-5662 + odak_olc.py): yer_id = "olay BURADA oldu" · odak_yer = "kamera buraya bakar".
// Uydurma ad YOK: yalnız havuzda birebir (ya da " (" öncesi kısa adı) bulunan ad yazılır.
const fs = require('fs'), path = require('path');
const H = JSON.parse(fs.readFileSync(path.join(__dirname, 'ONCE1281-IRAN-HAVUZ.json'), 'utf8'));
const KOK = path.join(__dirname, '..');
const TR = { 'İ': 'i', 'I': 'i', 'ı': 'i', 'Ş': 's', 'ş': 's', 'Ğ': 'g', 'ğ': 'g', 'Ü': 'u', 'ü': 'u', 'Ö': 'o', 'ö': 'o', 'Ç': 'c', 'ç': 'c', 'Â': 'a', 'â': 'a', 'Î': 'i', 'î': 'i', 'Û': 'u', 'û': 'u', '’': "'", '‘': "'" };
const norm = s => String(s || '').replace(/[İIıŞşĞğÜüÖöÇçÂâÎîÛû’‘]/g, c => TR[c]).normalize('NFKD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
const byN = new Map();
for (const h of H) { if (!byN.has(h.n)) byN.set(h.n, []); byN.get(h.n).push(h); }
const tam = new Set(H.map(h => h.ad).concat(H.map(h => h.kisa)));
const esle = parca => {
  const p = parca.replace(/\(.*?\)/g, '').replace(/\b(yakını|yakınları|önü|önleri|kalesi|ovası|yöresi|çevresi|havalisi)\b/gi, '').trim();
  if (!p) return null;
  if (tam.has(p)) return { ad: p, yol: 'birebir' };
  const c = byN.get(norm(p));
  if (c && c.length) return { ad: c[0].kisa, yol: 'norm', aday: c.map(x => x.ad) };
  return null;
};
// `yer` alanının İLK parçası havuzda birebir/norm eşleşiyorsa → yer_id (olay orada); yalnız sonrakiler → odak_yer.
const parcala = yer => String(yer || '').split(/\s*[,;·/]\s*|\s+ve\s+|\s*–\s*|\s+-\s+/).filter(Boolean);
const oto = m => {
  const p = parcala(m.yer), ilk = p.length ? esle(p[0]) : null;
  const hepsi = [...new Set(p.map(esle).filter(Boolean).map(x => x.ad))];
  if (!hepsi.length) return null;
  const r = {};
  // ODAK-KAPAT tuzağı ③ (M-5671): antlaşma/tanıma maddesinin yeri imza yeri değil konu yeridir;
  // "X'e yürüdü / gönderildi / döndü / seferi / çağırdı" X'i olay yeri yapmaz ⇒ yer_id DEĞİL odak_yer.
  const yonelme = m.k === 'antlasma' || /yürüdü|gönderildi|döndü|seferi|çağır/i.test(m.b);
  if (ilk && !yonelme) r.yer_id = ilk.ad;
  if (ilk && yonelme) { r.odak_yer = hepsi; return r; }
  const kalan = hepsi.filter(a => a !== r.yer_id);
  if (kalan.length || !ilk) r.odak_yer = ilk ? [ilk.ad, ...kalan] : hepsi;
  return r;
};
module.exports = { oto, tam, byN };
if (require.main !== module) return;
global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data/kronoloji_cok_once1281_iran.js'), 'utf8'));
const M = window.KRONOLOJI_COK_ONCE1281_IRAN;
const sonuc = M.map((m, i) => {
  const bul = parcala(m.yer).map(esle).filter(Boolean);
  return { i, t: m.t, b: m.b, yer: m.yer || '', taraflar: m.taraflar, esles: bul, oto: oto(m) };
});
if (process.argv.includes('--json')) {
  fs.writeFileSync(path.join(__dirname, 'ONCE1281-IRAN-ODAK-OTO.json'), JSON.stringify(sonuc, null, 1), 'utf8');
}
const e = sonuc.filter(s => s.esles.length), y = sonuc.filter(s => !s.esles.length);
console.log(`madde ${M.length} · yer alanı dolu ${sonuc.filter(s => s.yer).length} · havuza eşlenen ${e.length} · eşlenmeyen ${y.length}`);
if (process.argv.includes('--esles')) e.forEach(s => console.log(`  ✓ ${s.i} ${s.t} [${s.yer}] → ${s.esles.map(x => x.ad + (x.yol === 'norm' ? '~' : '')).join(' | ')}`));
if (process.argv.includes('--yok')) y.forEach(s => console.log(`  ✗ ${s.i} ${s.t} ${s.b.slice(0, 70)} [yer: ${s.yer}] {${s.taraflar.join(',')}}`));

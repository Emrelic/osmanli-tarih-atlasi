// PAKET-A6B — salt okuma: 1769-1774 Rus işgali penceresinde Boğdan (Moldova) ve Dinyester-Tuna kaleleri
// Soru: Hotin'in çevresi o pencerede nasıl boyanıyor; `isg:` var mı; Hotin tek başına mı Rus.
const fs = require('fs'), path = require('path'), cp = require('child_process');
const KOK = path.resolve(__dirname, '..');
const liste = JSON.parse(cp.execSync('py "' + path.join(__dirname, 'ARAC-A6B-GIRDI-0913.py') + '"').toString());
const Y = [];
for (const f of liste) {
  global.window = {};
  try { eval(fs.readFileSync(path.join(KOK, 'data', f), 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(window)) { const a = window[k]; if (Array.isArray(a)) for (const r of a) if (r && r.ad && typeof r.lat === 'number') { r._dosya = f; Y.push(r); } }
}
const iR = (arr, g) => (arr || []).find(p => p.f <= g && g < p.t);
function sahip(y, g) {
  if (y.kur && y.kur > g) return '(kurulmamis)';
  const o = [];
  const d = iR(y.d, g); if (d) o.push('OSMANLI');
  const v = iR(y.v, g); if (v) o.push('tabi:' + (v.kid || v.k));
  const s = iR(y.s, g); if (s) o.push(s.d);
  const i = iR(y.isg, g); if (i) o.push('isg:' + i.d);
  return o.length ? o.join('+') : 'SAHIPSIZ';
}
const G = ['1769-10-01', '1769-10-10', '1771-06-01', '1774-07-01', '1774-08-01'];
// Boğdan tâbiliği taşıyan her nokta + Dinyester/Tuna ağzı kaleleri
const KALE = /^(Hotin|Bender|Akkirman|İsmail|Kili|İbrail|Kalas|Reni|Tomarova|Bükreş|Yaş)/;
const secim = Y.filter(y => KALE.test(y.ad) || (y.v || []).some(p => p.kid === 'bogdan' && p.f <= '1769-10-01' && '1774-07-21' <= p.t));
console.log('nokta ' + secim.length);
console.log('ad'.padEnd(30) + 'lat,lon'.padEnd(16) + G.map(g => g.padEnd(22)).join('') + 'isg');
for (const y of secim.sort((a, b) => b.lat - a.lat))
  console.log(y.ad.slice(0, 29).padEnd(30) + (y.lat.toFixed(2) + ',' + y.lon.toFixed(2)).padEnd(16) + G.map(g => sahip(y, g).slice(0, 21).padEnd(22)).join('') + JSON.stringify(y.isg || []) + ' [' + y._dosya + ']');
// ve bu kimliklerin dönem biçimi — Hotin 1806-1812 emsali
const h = Y.find(y => y.ad === 'Hotin');
console.log('\nHotin emsal isg: ' + JSON.stringify(h.isg) + ' · d: ' + JSON.stringify(h.d));

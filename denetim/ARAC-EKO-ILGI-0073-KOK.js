// Kok sebep olcumu: "YYYY-01-01" (gun bilinmiyor damgasi) bagi kac maddeye dusuyor?
const d = require('./EKO-ILGI-0073-HAM.json');
const s = d.satirlar;
const kabaBag = x => /^\d{4}-01-01$/.test(x.bag);
const ayirtli = x => x.bag.indexOf('|') >= 0;
const kabaAy = x => /^\d{4}-\d{2}$/.test(x.bag);

function say(ad, f) {
  const alt = s.filter(f);
  const A = alt.filter(x => x.kova === 'A').length;
  const B = alt.filter(x => x.kova === 'B').length;
  const C = alt.filter(x => x.kova === 'C').length;
  console.log(ad.padEnd(46) + ' cift=' + String(alt.length).padStart(5) +
    '  A=' + String(A).padStart(4) + '  B=' + String(B).padStart(4) + '  C=' + String(C).padStart(4) +
    '  B+C%=' + (100 * (B + C) / (alt.length || 1)).toFixed(1));
}
console.log('TOPLAM cift: ' + s.length + '\n');
say('bag = YYYY-01-01 (ayirt edici YOK)', x => kabaBag(x) && !ayirtli(x));
say('bag = YYYY-AA   (ay hassasiyeti, ayirt YOK)', x => kabaAy(x) && !ayirtli(x));
say('bag = tam gun (YYYY-AA-GG, 01-01 degil)', x => !kabaBag(x) && !kabaAy(x) && !ayirtli(x));
say('bag AYIRT EDICILI (…|anahtar)', x => ayirtli(x));
console.log('');
say('madde OLAYLAR (cekirdek)', x => x.madde_kova === 'OLAYLAR');
say('madde KRONOLOJI (kuyruk)', x => x.madde_kova === 'KRONOLOJI');

// bir bag degeri kac maddeye dusuyor?
const bagKac = {};
s.forEach(x => { const k = x.kart + '||' + x.bag; bagKac[k] = (bagKac[k] || 0) + 1; });
const dagitim = {};
Object.values(bagKac).forEach(n => { const kova = n === 1 ? '1' : n <= 3 ? '2-3' : n <= 9 ? '4-9' : n <= 19 ? '10-19' : '20+'; dagitim[kova] = (dagitim[kova] || 0) + 1; });
console.log('\nBir bag degeri kac MADDEYE dusuyor (kart x bag = ' + Object.keys(bagKac).length + '):');
Object.entries(dagitim).sort().forEach(([k, v]) => console.log('  ' + k.padEnd(6) + ' madde  ->  ' + v + ' bag'));
const enKotu = Object.entries(bagKac).sort((a, b) => b[1] - a[1]).slice(0, 12);
console.log('\nEn genis dusen 12 bag:');
enKotu.forEach(([k, v]) => console.log('  ' + v + ' madde  <-  ' + k));

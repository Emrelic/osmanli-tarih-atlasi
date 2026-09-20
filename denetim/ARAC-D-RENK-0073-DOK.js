// d_sinirlar*.js dosyalarini yukleyip JSON'a doker (olcum icin)
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const DIR = process.argv[2];
const OUT = process.argv[3];
const dosyalar = fs.readdirSync(path.join(DIR, 'data'))
  .filter(f => /^d_sinirlar.*\.js$/.test(f));

const sandbox = { window: {}, console };
vm.createContext(sandbox);
for (const f of dosyalar) {
  const src = fs.readFileSync(path.join(DIR, 'data', f), 'utf8');
  try { vm.runInContext(src, sandbox); }
  catch (e) { console.error('HATA ' + f + ': ' + e.message); }
}

const cikti = { dosyalar: dosyalar, kovalar: {}, kayitlar: [] };
for (const [ad, val] of Object.entries(sandbox.window)) {
  if (!Array.isArray(val)) continue;
  cikti.kovalar[ad] = val.length;
  for (const k of val) {
    cikti.kayitlar.push({
      kova: ad, id: k.id, taraflar: k.taraflar, f: k.f, t: k.t,
      kategori: k.kategori, sinif: k.sinif, sol_taraf: k.sol_taraf,
      nokta: Array.isArray(k.hat) ? k.hat.length : 0,
      hat: k.hat || null
    });
  }
}
fs.writeFileSync(OUT, JSON.stringify(cikti));
console.log('kova: ' + Object.keys(cikti.kovalar).length + ' · kayit: ' + cikti.kayitlar.length);
for (const [a, n] of Object.entries(cikti.kovalar)) console.log('  ' + a + ' ' + n);

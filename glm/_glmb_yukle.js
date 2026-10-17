// GLM-B yardımcı yükleyici — data/*ekokuma*.js dosyalarını vm bağlamında koşturup
// tanımladıkları window.EKOKUMA* dizilerini glm/_glmb_kartlar.json'a döker.
// Betiğin ana girdisi glm/glmb_ekokuma.py (bu dosyayı çağırır).
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const KOK = path.resolve(__dirname, '..');
const cikti = { dosyalar: [], sorunlar: [] };

const dosyalar = fs.readdirSync(path.join(KOK, 'data'))
  .filter(f => /ekokuma/i.test(f) && f.endsWith('.js'))
  .sort();

for (const f of dosyalar) {
  const icerik = fs.readFileSync(path.join(KOK, 'data', f), 'utf8');
  const kumeler = {};
  const sandbox = { window: kumeler, console: { log(){}, warn(){}, error(){} } };
  sandbox.globalThis = kumeler;
  sandbox.self = kumeler;
  try {
    vm.createContext(sandbox);
    vm.runInContext(icerik, sandbox, { filename: f });
  } catch (e) {
    cikti.sorunlar.push({ dosya: f, hata: String(e) });
  }
  const globaller = Object.keys(kumeler).filter(k => /EKOKUMA/i.test(k));
  const kayit = { dosya: 'data/' + f, globaller: [] };
  for (const g of globaller) {
    const d = kumeler[g];
    kayit.globaller.push({
      ad: g,
      tip: Array.isArray(d) ? 'dizi' : typeof d,
      kart_sayisi: Array.isArray(d) ? d.length : null,
      kartlar: Array.isArray(d) ? d : [d],
    });
  }
  cikti.dosyalar.push(kayit);
}

fs.writeFileSync(path.join(__dirname, '_glmb_kartlar.json'),
                 JSON.stringify(cikti), 'utf8');
console.log(JSON.stringify({
  dosya: cikti.dosyalar.length,
  sorun: cikti.sorunlar.length,
  global: cikti.dosyalar.reduce((t, d) => t + d.globaller.length, 0),
  kart: cikti.dosyalar.reduce((t, d) => t + d.globaller.reduce((s, g) => s + (g.kart_sayisi || 0), 0), 0),
}));

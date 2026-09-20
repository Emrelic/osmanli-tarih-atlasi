// MALIYET: hat verisi devreye girerse KAC govde kesiti yeniden hesaplanir?
const fs = require('fs'), vm = require('vm');
const SP = process.argv[2];
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync('data/devletler.js', 'utf8'), sandbox);
const D = sandbox.window.DEVLETLER || [];
const idHarita = {};
for (const d of D) if (d && d.id) idHarita[d.id] = d.harita || d.id;

const H = JSON.parse(fs.readFileSync(SP + '/hatlar.json', 'utf8')).kayitlar;
// devlet(harita anahtari) -> [ [f,t], ... ]
const pencere = {};
let hatliKayit = 0;
for (const k of H) {
  if (!k.nokta) continue;
  hatliKayit++;
  for (const t of (k.taraflar || [])) {
    const a = idHarita[t] || t;
    (pencere[a] = pencere[a] || []).push([k.f || '0000-01-01', k.t || '9999-12-31']);
  }
}
vm.runInContext(fs.readFileSync('data/devletler_harita.js', 'utf8'), sandbox);
const DH = sandbox.window.DEVLET_HARITA;
let kesitToplam = 0, kesitEtkilenen = 0, devletEtkilenen = new Set();
for (const d of DH) {
  const p = pencere[d.id];
  for (const dn of (d.dnm || [])) {
    kesitToplam++;
    if (!p) continue;
    const f = dn.f || '0000-01-01', t = dn.t || '9999-12-31';
    if (p.some(([hf, ht]) => hf <= t && ht >= f)) { kesitEtkilenen++; devletEtkilenen.add(d.id); }
  }
}
console.log('devletler_harita.js · govde kesiti toplam: ' + kesitToplam);
console.log('  hat penceresiyle CAKISAN kesit: ' + kesitEtkilenen +
            ' (%' + (100 * kesitEtkilenen / kesitToplam).toFixed(1) + ')');
console.log('  etkilenen devlet: ' + devletEtkilenen.size + ' / ' + DH.length);
const osm = H.filter(k => (k.taraflar || []).includes('osmanli') && k.nokta);
console.log('osmanli tarafi olan hat kaydi: ' + osm.length +
            (osm.length ? ' · ilk/son: ' + osm[0].f + ' .. ' + osm[osm.length - 1].t : ''));

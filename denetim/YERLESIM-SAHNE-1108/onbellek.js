// Yükleyip tek JSON'a döker (öteki betikler hızlı okusun). Kullanım: node onbellek.js <cikti.json>
const o = require('./ortak.js'), fs = require('fs');
const Y = o.yerlesimler(), M = o.maddeler();
fs.writeFileSync(process.argv[2], JSON.stringify({ Y, M }));
console.log('yerlesim', Y.length, 'madde', M.length, 'dosya', o.girdiListesi().length);

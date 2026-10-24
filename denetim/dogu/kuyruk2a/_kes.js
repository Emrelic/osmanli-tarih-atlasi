// node _kes.js <slug> <baslangic-metin> [uzunluk] [onceki]  -> onbellekteki maddeden bir parca
const fs = require('fs');
const [, , slug, bas, n, once] = process.argv;
const t = fs.readFileSync(__dirname + '/_c/' + slug + '.txt', 'utf8');
const i = bas ? t.indexOf(bas) : 0;
if (i < 0) { console.log('bulunamadi:', bas); process.exit(1); }
console.log(t.slice(Math.max(0, i - (+once || 0)), i + (+n || 3000)));

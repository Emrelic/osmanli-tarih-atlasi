// node _ara.js <kelime>  -> TDV arama sonucu slug listesi
const cp = require('child_process');
const q = process.argv[2];
const r = cp.spawnSync('curl', ['-sL', '-A', 'Mozilla/5.0', '--max-time', '60', 'https://islamansiklopedisi.org.tr/arama/?q=' + encodeURIComponent(q)], { encoding: 'utf8', maxBuffer: 50e6 });
const h = r.stdout || '';
const set = new Set(); let m; const rx = /href="(?:https:\/\/islamansiklopedisi\.org\.tr)?\/([a-z0-9\-]+)"[^>]*>([^<]{0,120})</gi;
while ((m = rx.exec(h))) { if (!/^(arama|ana-sayfa|hakkimizda|iletisim|harf|)$/.test(m[1])) set.add(m[1] + '  ' + m[2].trim()); }
console.log([...set].slice(0, 40).join('\n'));

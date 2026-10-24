// node _tdv.js <slug> [regex] [ctx]  -> TDV maddesini onbellege (denetim/dogu/kuyruk2a/_c/) ceker; regex varsa eslesen cumleleri basar
const fs = require('fs'), cp = require('child_process');
const [, , slug, re, ctx] = process.argv;
const D = __dirname + '/_c/'; fs.mkdirSync(D, { recursive: true });
const fp = D + slug.replace(/[^a-z0-9-]/gi, '_') + '.txt';
if (!fs.existsSync(fp) || fs.statSync(fp).size < 2000) {
  const r = cp.spawnSync('curl', ['-sL', '-A', 'Mozilla/5.0', '--max-time', '60', 'https://islamansiklopedisi.org.tr/' + slug], { encoding: 'utf8', maxBuffer: 50e6 });
  let h = r.stdout || '';
  h = h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&#8217;|&rsquo;/g, '’').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(\d+);/g, (m, n) => String.fromCharCode(+n)).replace(/\s+/g, ' ');
  fs.writeFileSync(fp, h);
}
const t = fs.readFileSync(fp, 'utf8');
console.log('uzunluk', t.length);
if (re) {
  const rx = new RegExp(re, 'gi'); let m, n = 0; const c = +ctx || 250;
  while ((m = rx.exec(t)) && n < 12) { console.log('>>', t.slice(Math.max(0, m.index - c), m.index + c + m[0].length)); console.log(); n++; }
}

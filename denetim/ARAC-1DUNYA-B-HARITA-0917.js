// 1DUNYA-B · harita senkron bakışı (17 Eylül 2026)
// Kullanım: node denetim/ARAC-1DUNYA-B-HARITA-0917.js <ad1> <ad2> ...
// Evren: arac/girdi.py GIRDI_DOSYALARI (motorun okuduğu dosyalar) — liste
// py'den alınır, burada elle yazılmaz (CLAUDE.md §5).
// Her yerleşimin 1912-1925 arasına değen d:/v:/s:/isg: dönemlerini basar.
const fs = require('fs'), vm = require('vm'), cp = require('child_process');
const liste = cp.execSync('py -c "import sys;sys.path.insert(0,\'arac\');import girdi;print(\'\\n\'.join(girdi.GIRDI_DOSYALARI))"',
  { encoding: 'utf8' }).trim().split(/\r?\n/);
const ctx = {}; ctx.window = ctx; vm.createContext(ctx);
const Y = [];
for (const f0 of liste) {
  const f = f0.replace(/\\/g, '/');
  const yol = fs.existsSync(f) ? f : 'data/' + f.split('/').pop();
  const once = new Set(Object.keys(ctx));
  vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { filename: yol });
  for (const k of Object.keys(ctx)) if (!once.has(k) && Array.isArray(ctx[k]))
    for (const y of ctx[k]) if (y && y.ad) Y.push([yol.split('/').pop(), y]);
}
const norm = s => String(s).replace(/[İIı]/g, 'i').replace(/Ş/g, 's').replace(/Ğ/g, 'g').replace(/Ü/g, 'u')
  .replace(/Ö/g, 'o').replace(/Ç/g, 'c').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const aranan = process.argv.slice(2).map(norm);
const deger = p => p.t >= '1912-01-01' && p.f <= '1925-12-31';
for (const [dosya, y] of Y) {
  const ad = norm(y.ad);
  if (!aranan.some(a => ad === a || ad.startsWith(a + ' ') || ad.startsWith(a + ' ('))) continue;
  const parca = [];
  for (const alan of ['d', 'v', 's', 'isg']) for (const p of (y[alan] || [])) if (deger(p))
    parca.push(alan + ':' + (p.d || p.s || '') + ' ' + p.f + '→' + p.t);
  console.log(y.ad.padEnd(22), dosya.padEnd(26), parca.join(' | ') || '(1912-1925 arası dönem yok)');
}

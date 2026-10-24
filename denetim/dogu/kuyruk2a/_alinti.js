// node _alinti.js -> _uret.js'teki T()/W() alintilarini onbellekteki metinlerde BIREBIR arar
const fs = require('fs'), path = require('path'), cp = require('child_process');
const { QUOTES } = require('./_uret.js');
require('./_kunye.js');
const WSCACHE = 'C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/ws';
const norm = (s) => s.replace(/\{\{YL\|([^}]*)\}\}/g, '$1').replace(/\[\[[^\]|]*\|([^\]]*)\]\]/g, '$1').replace(/\[\[([^\]]*)\]\]/g, '$1').replace(/\s+/g, ' ');
function tdv(slug) {
  const f = path.join(__dirname, '_c', slug.replace(/[^a-z0-9-]/gi, '_') + '.txt');
  if (!fs.existsSync(f)) { cp.spawnSync('node', [path.join(__dirname, '_tdv.js'), slug]); }
  return norm(fs.readFileSync(f, 'utf8'));
}
function ws(page) {
  const f = path.join(WSCACHE, Buffer.from(page).toString('hex') + '.txt');
  if (!fs.existsSync(f)) cp.spawnSync('node', [path.join(__dirname, '..', 'kuyrukcin', '_ws.js'), page]);
  return norm(fs.readFileSync(f, 'utf8'));
}
const cache = {};
let ok = 0, bad = [];
const seen = new Set();
for (const { slug, ws: page, q } of QUOTES) {
  const key = (slug || page) + '|' + q; if (seen.has(key)) continue; seen.add(key);
  const k = slug ? 'T' + slug : 'W' + page;
  if (!cache[k]) cache[k] = slug ? tdv(slug) : ws(page);
  const parts = q.split(' … ').map(x => norm(x).trim()).filter(Boolean);
  const hit = parts.every(p => cache[k].includes(p));
  if (hit) ok++; else bad.push({ k, q: q.slice(0, 160) });
}
console.log('alinti bulundu', ok, 'bulunamadi', bad.length);
for (const b of bad) console.log('YOK', b.k, '|', b.q);
process.exit(bad.length ? 1 : 0);

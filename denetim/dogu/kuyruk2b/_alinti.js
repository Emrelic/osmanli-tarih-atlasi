// _alinti.js — «…» içindeki her alıntıyı önbellekteki tam metinlerde (normalize) arar.
const fs = require('fs'), path = require('path'), vm = require('vm');
const H = path.join(__dirname, '_ham');
function norm(s) { return s.toLowerCase().replace(/&[a-z#0-9]+;/g, ' ').replace(/[^\p{L}\p{N}]+/gu, ''); }
const corpus = {};
for (const f of fs.readdirSync(H)) {
  let t = fs.readFileSync(path.join(H, f), 'utf8');
  if (f.endsWith('.html')) t = t.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  if (f.endsWith('.json')) { try { t = JSON.parse(t).parse.text.replace(/<[^>]+>/g, ' '); } catch (e) {} }
  corpus[f] = norm(t.replace(/-\r?\n(?=[a-z])/g, '').replace(/¬\s*/g, ''));
}
function yukle(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const dosyalar = ['yama_kuyruk2b.js', 'kronoloji_sinir_dogu_kuyruk2b.js', 'kunye_yeni.js', 'yerlesimler_dogu_kuyruk2b.js'];
const metinler = [];
for (const d of dosyalar) {
  const w = yukle(path.join(__dirname, d));
  const walk = (o, yol) => { if (typeof o === 'string') { if (/kaynak|ic_not|d$/.test(yol)) metinler.push([d + ':' + yol, o]); } else if (Array.isArray(o)) o.forEach((x, i) => walk(x, yol)); else if (o && typeof o === 'object') for (const k of Object.keys(o)) walk(o[k], yol + '.' + k); };
  walk(w, '');
}
let say = 0, bul = 0; const yok = [];
const seen = new Set();
for (const [yer, m] of metinler) {
  const re = /«([^»]{12,})»/g; let x;
  while ((x = re.exec(m))) {
    const q = x[1];
    // «… … …» ile ayrılmış parçalar ayrı sınanır
    for (const parca of q.split(/…|\.\.\./)) {
      const n = norm(parca.replace(/^[\s,.;:·()]+|[\s,.;:·()]+$/g, ''));
      if (n.length < 10) continue;
      const key = n; if (seen.has(key)) continue; seen.add(key);
      say++;
      const f = Object.keys(corpus).find(k => corpus[k].includes(n));
      if (f) bul++; else yok.push(yer + ' :: ' + parca.slice(0, 140));
    }
  }
}
console.log('alıntı parçası', say, 'bulundu', bul, 'bulunamadı', yok.length);
for (const y of yok) console.log('YOK', y);

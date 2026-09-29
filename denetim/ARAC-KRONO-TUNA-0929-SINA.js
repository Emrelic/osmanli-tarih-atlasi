// KRONO-TUNA-0929 — kendi iki dosyasının şema sınavı (İKİ YÖNDE sınanır: --bozuk
// kasıtlı bozuk bir kopya üretip sınavın onu yakaladığını gösterir).
// Kullanım: node denetim/ARAC-KRONO-TUNA-0929-SINA.js [--bozuk]
// Sorular: ① zorunlu 10 alan ② `tur` veride var olan 54 değerden biri mi ③ onem/dunya
// 1-5 ④ `t` YYYY-MM-DD ⑤ devlet/devletler künyesi devletler.js'te var mı (yoksa
// ÖNERİLEN künye listesinde mi) ⑥ `yer_id` boş ya da GIRDI yerleşim adlarından biri
// ⑦ aynı dosyada aynı t+b iki kez ⑧ künyenin kendi maddesiyle aynı t+b.
const fs = require('fs'), vm = require('vm'), path = require('path');
const KOK = path.join(__dirname, '..');
const ONERILEN = new Set(['ukrayna-halk-cumhuriyeti', 'ukrayna-devleti-1918']);
function yukle(dosya) {
  const ctx = { window: {} }; vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(KOK, 'data', dosya), 'utf8'), ctx);
  return ctx.window;
}
const D = yukle('devletler.js').DEVLETLER;
const kunye = new Map(D.map(d => [d.id, d]));
// canlı veride kullanılan tur değerleri
const turlar = new Set();
for (const f of fs.readdirSync(path.join(KOK, 'data')).filter(f => /^kronoloji_.*\.js$/.test(f))) {
  if (/kronoloji_cok_(romanya|ukrayna)\.js/.test(f)) continue;
  try { for (const v of Object.values(yukle(f))) if (Array.isArray(v)) v.forEach(m => m && m.tur && turlar.add(m.tur)); } catch (e) {}
}
// yerleşim adları: arac/girdi.py'nin listesiyle aynı dosyalar — python'dan alınır
const adlar = new Set(JSON.parse(require('child_process').execSync(
  'py -X utf8 -c "import sys,json;sys.path.insert(0,\'arac\');import girdi;print(json.dumps([y[\'ad\'] for y in girdi.yukle(sessiz=True)]))"',
  { cwd: KOK, encoding: 'utf8' }).trim().split('\n').pop()));
const ZORUNLU = ['t', 'b', 'tur', 'onem', 'dunya', 'kapsam', 'etiket', 'yer_id', 'd', 'kaynak'];
let hata = 0;
function sina(ad, liste) {
  const gorulen = new Set();
  liste.forEach((m, i) => {
    const e = [];
    for (const z of ZORUNLU) if (!(z in m)) e.push('eksik:' + z);
    if (!turlar.has(m.tur)) e.push('tur-yok:' + m.tur);
    for (const z of ['onem', 'dunya']) if (!(m[z] >= 1 && m[z] <= 5)) e.push(z + '=' + m[z]);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(m.t)) e.push('t-bicim:' + m.t);
    const ids = m.devletler || (m.devlet ? [m.devlet] : []);
    if (!ids.length) e.push('devlet-yok');
    for (const id of ids) if (!kunye.has(id) && !ONERILEN.has(id)) e.push('kunye-yok:' + id);
    if (m.yer_id && !adlar.has(m.yer_id)) e.push('yer_id-cozulmuyor:' + m.yer_id);
    const k = m.t + '|' + m.b;
    if (gorulen.has(k)) e.push('mukerrer-dosya-ici'); gorulen.add(k);
    for (const id of ids) { const d = kunye.get(id); if (d && (d.kronoloji || []).some(o => o.t === m.t && o.b === m.b)) e.push('kunye-maddesiyle-ayni:' + id); }
    if (e.length) { hata += e.length; console.log(`  ✗ ${ad}[${i}] ${m.t} ${String(m.b).slice(0, 50)} → ${e.join(' · ')}`); }
  });
  const say = {}; liste.forEach(m => (m.devletler || [m.devlet]).forEach(id => say[id] = (say[id] || 0) + 1));
  console.log(`${ad}: ${liste.length} madde · künye başına ${JSON.stringify(say)}`);
}
const W = Object.assign({}, yukle('kronoloji_cok_romanya.js'),
  fs.existsSync(path.join(KOK, 'data', 'kronoloji_cok_ukrayna.js')) ? yukle('kronoloji_cok_ukrayna.js') : {});
for (const [ad, liste] of Object.entries(W)) {
  let l = liste;
  if (process.argv.includes('--bozuk')) {   // ters yön: sınav kusuru yakalıyor mu?
    l = JSON.parse(JSON.stringify(liste));
    delete l[0].kaynak; l[1].tur = 'uydurma-tur'; l[2].yer_id = 'Olmayan Kasaba'; l[3].devlet = 'olmayan-kunye'; l[3].devletler = undefined; l.push(l[4]);
  }
  sina(ad, l);
}
console.log(hata ? `SONUÇ: ${hata} kusur` : 'SONUÇ: temiz');
process.exit(hata ? 1 : 0);

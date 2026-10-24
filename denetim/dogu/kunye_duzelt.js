// node denetim/dogu/kunye_duzelt.js [--yaz]
// kunye_olc.js çıktısındaki (denetim/dogu/_log/kunye_asim.json) künye aşımlarını, KAYNAKLI dilim tarihlerine genişleterek giderir:
// künye f/t -> dilimlerin en erken f / en geç t (aynı polity sürüyor: künye GENİŞLETİLİR; CLAUDE.md "künye aşımında önce sınıflandır").
// ATLANAN (elle karar): AT_LA listesi. Künyede `ic_not`a eski değer + gerekçe eklenir. Tekrar koşturulabilir (aşım kalmayınca iş yok).
const fs = require('fs'), path = require('path');
const KOK = path.resolve(__dirname, '..', '..');
const YAZ = process.argv.includes('--yaz');
const ATLA = new Set(['mogol-imparatorlugu', 'memuni-harezm']);   // elle: Dali Yuan bölünmesi / Memuni f günü
const asim = JSON.parse(fs.readFileSync(path.join(__dirname, '_log', 'kunye_asim.json'), 'utf8'));
const dp = path.join(KOK, 'data/devletler.js');
let t = fs.readFileSync(dp, 'utf8');

function* tara(s, bas) {
  let i = bas;
  while (i < s.length) {
    const c = s[i];
    if (c === '"' || c === "'" || c === '`') { let j = i + 1; while (j < s.length && s[j] !== c) j += s[j] === '\\' ? 2 : 1; yield [i, c, j]; i = j + 1; continue; }
    if (c === '/' && s[i + 1] === '/') { const j = s.indexOf('\n', i); i = j < 0 ? s.length : j; continue; }
    if (c === '/' && s[i + 1] === '*') { const j = s.indexOf('*/', i); i = j < 0 ? s.length : j + 2; continue; }
    yield [i, c, i]; i++;
  }
}
function nesne(id) {
  const re = new RegExp('"?\\bid"?\\s*:\\s*"' + id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"', 'g');
  const m = re.exec(t); if (!m) return null;
  const bas = t.lastIndexOf('{', m.index);
  let d = 0, son = -1;
  for (const [i, c] of tara(t, bas)) { if (c === '{' || c === '[') d++; else if (c === '}' || c === ']') { d--; if (d === 0) { son = i; break; } } }
  return { bas, son };
}
// nesne içi derinlik-1 anahtarın DEĞER aralığı (dizgi) — {vb, vs} (vb: açılış tırnağı, vs: kapanış tırnağı)
function deger(o, anahtar) {
  let d = 0;
  const gor = [];
  for (const [i, c, j] of tara(t, o.bas)) {
    if (i > o.son) break;
    if (c === '{' || c === '[') d++; else if (c === '}' || c === ']') d--;
    else if (d === 1 && (c === '"' || c === "'") && t.slice(i + 1, j) === anahtar) {
      const m = /^["']?\s*:\s*(["'])([^"']*)\1/.exec(t.slice(j, j + 80));
      if (m) { const vb = j + (m[0].length - m[2].length - 2); return { vb, vs: vb + 1 + m[2].length, eski: m[2] }; }
    } else if (d === 1 && /[A-Za-z_]/.test(c) && t.slice(i, i + anahtar.length) === anahtar && !/[A-Za-z0-9_]/.test(t[i - 1] || '') ) {
      const m = /^\s*:\s*(["'])([^"']*)\1/.exec(t.slice(i + anahtar.length, i + anahtar.length + 80));
      if (m) { const vb = i + anahtar.length + (m[0].length - m[2].length - 2); return { vb, vs: vb + 1 + m[2].length, eski: m[2] }; }
    }
  }
  return null;
}
const islemler = [];
const bulunamayan = [], atlanan = [];
for (const a of asim) {
  if (ATLA.has(a.id)) { atlanan.push(a.id); continue; }
  if (!(a.yeni_f || a.yeni_t)) continue;
  const o = nesne(a.id);
  if (!o) { bulunamayan.push(a.id); continue; }
  const yeni = {};
  if (a.yeni_f) yeni.f = a.yeni_f;
  if (a.yeni_t) yeni.t = a.yeni_t;
  islemler.push({ id: a.id, yeni, ornek: a.ornek });
}
console.log(JSON.stringify({ yaz: YAZ, islem: islemler.length, atlanan, bulunamayan_devletler_js_te_yok: bulunamayan }, null, 1));
if (!YAZ) process.exit(0);
let yapilan = 0;
for (const is of islemler) {
  let o = nesne(is.id);
  const notlar = [];
  for (const alan of ['t', 'f']) {          // sondan başa: önce t (daha sonda) — konumlar kaymasın
    if (!is.yeni[alan]) continue;
    o = nesne(is.id);
    const v = deger(o, alan);
    if (!v) { console.error('değer yok', is.id, alan); continue; }
    notlar.push(alan + ': ' + v.eski + ' → ' + is.yeni[alan]);
    t = t.slice(0, v.vb + 1) + is.yeni[alan] + t.slice(v.vs);
    yapilan++;
  }
  // ic_not'a ekle (varsa sonuna; yoksa kapanıştan önce)
  o = nesne(is.id);
  const ek = ' · DOGU-500-1281 künye genişletme (kaynaklı dilimlere uyum; ' + notlar.join(', ') + '; örnek: ' + (is.ornek[0] || '').replace(/["\\\r\n]/g, ' ') + ')';
  const v = deger(o, 'ic_not');
  if (v) t = t.slice(0, v.vs) + ek.replace(/"/g, "'") + t.slice(v.vs);
  else {
    const nl = t.includes('\r\n') ? '\r\n' : '\n';
    t = t.slice(0, o.son) + (/,\s*$/.test(t.slice(o.bas, o.son)) ? '' : ',') + nl + '  ic_not:' + JSON.stringify(ek.slice(3)) + nl + t.slice(o.son);
  }
}
fs.writeFileSync(dp, t);
console.log('YAZILDI', yapilan, 'alan');

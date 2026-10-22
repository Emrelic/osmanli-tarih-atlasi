// node denetim/dogu/mukerrer_olc.js [--liste]
// denetle.py mukerrer_maddeler() ölçütünün (başlık J>=0.34 ±400 gün · aynı gün kişi! kademesi) Node portu.
// Evren: data/olaylar*.js (OLAYLAR*) + data/kronoloji_sinir*.js (KRONOLOJI_SINIR*) — denetle.olaylari_yukle ile aynı.
// Yalnız DOĞU dosyasındaki (kronoloji_sinir_dogu_500_1281.js) maddeleri içeren çiftleri sayar; toplam çifti de basar.
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..', '..');
const GUN = require(path.join(KOK, 'js/gun.js'));
const DATA = path.join(KOK, 'data');
const KATLA = { 'ı': 'i', 'İ': 'i', 'ç': 'c', 'ğ': 'g', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u', 'Â': 'a', 'Î': 'i', 'Û': 'u' };
const kat = (s) => Array.from(s).map(c => KATLA[c] || c).join('');
const DURAK = new Set(['osmanl', 'sultan', 'kalesi', 'pasan', 'seferi']);
function kelimeler(b) {
  let t = kat(String(b).toLowerCase());
  t = Array.from(t).map(c => (/\p{L}/u.test(c) || c === ' ') ? c : ' ').join('');
  const k = new Set(t.split(/\s+/).filter(w => w.length > 3).map(w => w.slice(0, 6)));
  for (const d of DURAK) k.delete(d);
  return k;
}
const GENEL = new Set(['sultan', 'pasa', 'pasanin', 'bey', 'han', 'hanin', 'efendi', 'gazi', 'sah', 'kral']);
function kisiler(o) {
  const k = new Set();
  for (const [ham, yalnizOzel] of [[o.kisiler || '', false], [o.b || '', true]]) {
    for (const p of String(ham).split(/[,;()]/)) for (let w of p.split(/\s+/).filter(Boolean)) {
      w = w.replace(/^['’."]+|['’."]+$/g, '');
      if (yalnizOzel && !/^\p{Lu}/u.test(w)) continue;
      w = kat(w).toLowerCase();
      if (w.length < 4 || GENEL.has(w)) continue;
      if (/^[ivxlcdm]+$/.test(w)) continue;
      k.add(w.slice(0, 6));
    }
  }
  return k;
}
function pad(s) { if (!s || s[0] === '-') return s; const m = /^(\d+)(-.*)?$/.exec(s); return m && m[1].length < 4 ? m[1].padStart(4, '0') + (m[2] || '') : s; }
function tam(s) { return s.length === 7 ? s + '-01' : s; }
function gun(s) { return GUN.gun(tam(pad(String(s).slice(0, s[0] === '-' ? 11 : 10)))); }
function yukle(f) { const sb = { window: {} }; vm.createContext(sb); try { vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); } catch (e) { return {}; } return sb.window; }
const O = [];
const files = fs.readdirSync(DATA).filter(f => /^olaylar.*\.js$/.test(f) || /^kronoloji_sinir.*\.js$/.test(f)).sort();
for (const f of files) {
  const w = yukle(path.join(DATA, f));
  for (const k of Object.keys(w)) if (/^(OLAYLAR\w*|KRONOLOJI_SINIR\w*)$/.test(k) && Array.isArray(w[k])) {
    for (const m of w[k]) { try { O.push({ t: m.t, b: m.b || '', kisiler: m.kisiler, kaynak: m.kaynak, g: gun(m.t), dogu: f === 'kronoloji_sinir_dogu_500_1281.js' }); } catch (e) { /* bozuk tarih */ } }
  }
}
{ const w = yukle(path.join(__dirname, 'kronoloji_sinir_dogu_kuyruk2a.js')); for (const m of w.KRONOLOJI_SINIR_DOGU_KUYRUK2A) O.push({ t: m.t, b: m.b || '', kisiler: m.kisiler, kaynak: m.kaynak, g: gun(m.t), dogu: true, mine: !m.kopya_kume }); }
O.sort((a, b) => a.g - b.g);
const ESIK = 0.34, GUNP = 400, KISI_GUN = 3, KESIN_J = 0.10, KESIN_K = 3;
let toplam = 0, dogu = 0, baslik = 0, kisi = 0; const liste = [];
const kel = O.map(o => kelimeler(o.b)), kis = O.map(o => kisiler(o));
for (let i = 0; i < O.length; i++) for (let j = i + 1; j < O.length; j++) {
  const fark = O[j].g - O[i].g; if (fark > GUNP) break;
  const a = kel[i], b = kel[j]; let oran = 0;
  if (a.size && b.size) { let ortak = 0; for (const x of a) if (b.has(x)) ortak++; oran = ortak / (a.size + b.size - ortak); }
  let olcut = null;
  if (oran >= ESIK) olcut = 'başlık';
  else if (fark <= KISI_GUN) {
    const ortak = [...kis[i]].filter(x => kis[j].has(x));
    if (ortak.length) { const ayni = (O[i].kaynak || '\0') === (O[j].kaynak || '\1'); const kesin = fark === 0 && (ayni || oran >= KESIN_J || ortak.length >= KESIN_K); if (kesin) olcut = 'kişi!'; }
  }
  if (!olcut) continue;
  toplam++;
  if (O[i].mine || O[j].mine) { dogu++; if (olcut === 'başlık') baslik++; else kisi++; if (liste.length < 400) liste.push(olcut + ' ' + O[i].t + ' | ' + O[i].b.slice(0, 70) + ' || ' + O[j].t + ' | ' + O[j].b.slice(0, 70)); }
}
console.log(JSON.stringify({ evren: O.length, toplam_cift: toplam, dogu_iceren: dogu, baslik, kisi }));
if (process.argv.includes('--liste')) for (const x of liste) console.log(x);

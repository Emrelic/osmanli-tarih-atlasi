// ENKLAV x KAYNAKSIZLIK — teyit sirasini SINYALE gore kurar.
//
// NICIN BU SINYAL: 6 Eylul'de uc anakronizm dogrulandi (Khami 1683 ·
// Danangombe 1834 · Blantyre 1876, ucu de ic Zimbabve) ve UCU DE
// `kaynak:"bulunamadi"` diyordu. Onlari bulunabilir kilan sey COGRAFYA
// degil, KAYDIN KENDI BEYANIYDI.
//
// 🔴 VE BIR GENELLEME ZATEN CURUDU: "somurge kimligi 1880 oncesi" suzgeci
// (enlem -35..+15) 152 bulgu verdi ve COGU TARIHEN DOGRU cikti (Madras
// 1639 · Cape Town 1795 · Sydney 1788). Suzgec "erken somurge"yi olcuyordu,
// "ANAKRONIK somurge"yi degil. ⇒ Bu alet COGRAFYAYA DEGIL BEYANA bakiyor.
//
// ⚠️ VE `kaynak:"bulunamadi"` "YANLIS" DEMEK DEGIL — "dayanagi yazili
// degil" demek. Bu bir SIRALAMA olcutu, bir HUKUM degil.
//
// GIRDI : `denetle.py --ayrinti` ciktisi (ada: satirlari)
// CIKTI : enklav kayitlarinin kaynak durumu + oncelikli liste
const fs = require('fs'), vm = require('vm'), path = require('path');
const KAYNAK = process.argv[2];
const KOK = process.cwd();
const tr = s => String(s)
  .replace(/İ/g,'I').replace(/ı/g,'i').replace(/ş/g,'s').replace(/Ş/g,'S')
  .replace(/ü/g,'u').replace(/Ü/g,'U').replace(/ö/g,'o').replace(/Ö/g,'O')
  .replace(/ç/g,'c').replace(/Ç/g,'C').replace(/ğ/g,'g').replace(/Ğ/g,'G')
  .replace(/â/g,'a').replace(/î/g,'i').replace(/û/g,'u').replace(/’/g,"'");

// ── enklav kayitlari ───────────────────────────────────────────────────
const RX = /(\d{4}-\d{2}-\d{2})\s+(.+?)\s+→\s+(\S+)\s+([\d.,]+)\s*km\s+ada:\s*(.*)$/;
const enklav = [];
for (const satir of fs.readFileSync(KAYNAK, 'utf8').split(/\r?\n/)) {
  const m = RX.exec(satir);
  if (!m) continue;
  const km = parseFloat(m[4].replace(/\./g, '').replace(',', '.'));
  enklav.push({ gun: m[1], yer: m[2].trim(), kimlik: m[3], km: isNaN(km) ? -1 : km });
}

// ── canli veri: her yerlesimin `kaynak` alani ──────────────────────────
function yuk(f) {
  const c = { window: {} }; vm.createContext(c);
  vm.runInContext(fs.readFileSync(path.join(KOK, 'data', f), 'utf8'), c);
  let o = [];
  for (const k of Object.keys(c.window)) if (Array.isArray(c.window[k])) o = o.concat(c.window[k]);
  return o;
}
const KAY = {};
for (const f of fs.readdirSync(path.join(KOK, 'data')).filter(x => /^yerlesimler.*\.js$/.test(x)))
  for (const r of yuk(f)) if (r.ad && KAY[r.ad] === undefined) KAY[r.ad] = String(r.kaynak || '');

// ── tasnif ─────────────────────────────────────────────────────────────
const kaynaksiz = [], kaynakli = [], bilinmeyen = [];
for (const e of enklav) {
  const k = KAY[e.yer];
  if (k === undefined) bilinmeyen.push(e);
  else if (/bulunamad/i.test(k)) kaynaksiz.push(e);
  else if (k.trim() === '') kaynaksiz.push(e);
  else kaynakli.push(e);
}
console.log('=== ENKLAV x KAYNAK DURUMU ===');
console.log('  enklav kaydi        : ' + enklav.length);
console.log('  🔴 KAYNAKSIZ        : ' + kaynaksiz.length + '   <- teyit sirasinin BASI');
console.log('  🟢 kaynakli         : ' + kaynakli.length);
console.log('  ⚪ kayit bulunamadi : ' + bilinmeyen.length);
console.log('');

// benzersiz (yer,kimlik) — ayni vaka tekrar sayilmasin
const tekil = new Map();
for (const e of kaynaksiz) {
  const a = e.yer + ' | ' + e.kimlik;
  if (!tekil.has(a) || tekil.get(a).km < e.km) tekil.set(a, e);
}
const liste = [...tekil.values()].sort((x, y) => y.km - x.km);
console.log('KAYNAKSIZ ENKLAV — benzersiz (yer,kimlik): ' + liste.length);
console.log('');
console.log('  en uzak 25:');
for (const e of liste.slice(0, 25))
  console.log('   ' + e.gun + '  ' + tr(e.yer).padEnd(28) + tr(e.kimlik).padEnd(22) +
              String(Math.round(e.km)).padStart(5) + ' km');
console.log('');
// kimlik dagilimi
const say = {};
for (const e of liste) say[e.kimlik] = (say[e.kimlik] || 0) + 1;
console.log('  kaynaksiz enklavda EN COK gecen kimlik:');
Object.entries(say).sort((a,b)=>b[1]-a[1]).slice(0,10)
  .forEach(([k,n]) => console.log('   ' + String(n).padStart(4) + '  ' + tr(k)));

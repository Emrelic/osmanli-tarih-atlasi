// D4-ORTADOGU · DALGA-0060 (0060/1 · 0061/1) — 1720-1737 İran seferi + Rus ilerleyişi maddelerini SAYAR.
// Salt okuma. Evren: data/ altındaki bütün olaylar*.js (ÇEKİRDEK) ve kronoloji*.js (KUYRUK) — iki kova ayrı sayılır.
// Kullanım: node denetim/ARAC-D4-IRAN1722-SAYIM-0917.js
const fs = require('fs'), path = require('path');
const kok = path.join(__dirname, '..', 'data');
global.window = {};
const dosyaOf = {};
for (const f of fs.readdirSync(kok).filter(f => /^(olaylar|kronoloji).*\.js$/.test(f))) {
  const once = new Set(Object.keys(window));
  try { eval(fs.readFileSync(path.join(kok, f), 'utf8')); } catch (e) { console.error('HATA', f, e.message); }
  for (const k of Object.keys(window)) if (!once.has(k)) dosyaOf[k] = f;
}
const OSM = /İran|Safev|Tebriz|Revan|Erivan|Gence|Tiflis|Kartli|Şemahı|Şirvan|Hemedan|Kirmanşah|Erdebil|Kazvin|Nahcıvan|Nahçıvan|Urmiye|Merâga|Meraga|Lûristan|Luristan|Eşref|Mahmud Han|Tahmasb|Tahmasp|Nâdir|Nadir|Afgan|Kandahar|Kandehar|İsfahan|Mukāseme|Mukâseme|Hemedan|Ahmed Paşa|Köprülüzâde Abdullah|Bağdat|Kerkük|Musul|Dağıstan|Lezgi|Davud Han|Surhay/;
const RUS = /Rus|Derbend|Bakü|Gîlân|Gilan|Reşt|Rast|Hazar|Petro|Agrahan|Tarku|Şemhal|Şamhal|Mâzenderân|Mazenderan|Esterâbâd|Esterabad|Sulak|Kızlar/;
const rows = [];
for (const k of Object.keys(window)) {
  if (!Array.isArray(window[k])) continue;
  for (const o of window[k]) {
    if (!o || !o.t || !o.b || o.t < '1720-01-01' || o.t > '1737-12-31') continue;
    const metin = o.b + ' ' + (o.yer || '') + ' ' + (o.d || '');
    const r = RUS.test(o.b + ' ' + (o.yer || '')), s = OSM.test(metin);
    if (!r && !s) continue;
    rows.push({ t: o.t, kova: /^olaylar/.test(dosyaOf[k] || '') ? 'ÇEKİRDEK' : 'kuyruk', dosya: dosyaOf[k], b: o.b, gun: o.gun || '', kaynak: String(o.kaynak || '').slice(0, 60), eksen: r ? 'RUS' : 'OSM' });
  }
}
rows.sort((a, b) => a.t.localeCompare(b.t));
const say = {};
for (const r of rows) { const k = r.eksen + '/' + r.kova; say[k] = (say[k] || 0) + 1; }
console.log('toplam', rows.length, JSON.stringify(say));
for (const r of rows) console.log(`${r.t} ${r.eksen} ${r.kova.padEnd(8)} ${r.dosya.padEnd(26)} ${r.b.slice(0, 95)} | gun:${r.gun} | ${r.kaynak}`);

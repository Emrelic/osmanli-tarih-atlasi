// 🔴 DEGISMEZ 2 RISKI — `v:` donemi EKLEMEK yeni KIRILMA GUNU dogurur.
//
// CLAUDE.md Degismez 2: her `d:` ya da `v:` doneminin BASI ve SONU bir
// kirilmadir ve ±30 gun icinde bir kronoloji maddesi ISTER. Tavan 0.
// `_sahiplik_uygula.py`nin ④ suzgeci ise YALNIZ `d:` gunlerine uygulaniyor
// (kendi belgesi soyluyor) ⇒ bir `v:` yamasi o kapidan GECER ve
// denetle.py'de patlar.
//
// Bu betik: verilen gunlerin ±30 gun icinde kronoloji maddesi VAR MI?
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];
const GUNLER = process.argv.slice(3);

global.window = {};
const K = path.join(KOK, 'data');
for (const f of fs.readdirSync(K))
  if (/^(olaylar|kronoloji).*\.js$/.test(f)) {
    try { eval(fs.readFileSync(path.join(K, f), 'utf8')); } catch (e) {}
  }
const O = [];
for (const k of Object.keys(global.window))
  if (Array.isArray(global.window[k])) for (const o of global.window[k])
    if (o && o.t) O.push(o);
console.log('kronoloji maddesi (olaylar* + kronoloji*): ' + O.length);

const tam = s => (s.length === 7 ? s + '-01' : s);
const gun = s => Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1,
                                     +(s.slice(8, 10) || 1)) / 864e5);
for (const g of GUNLER) {
  const gd = gun(tam(g));
  const yakin = O.map(o => ({ f: Math.abs(gun(tam(o.t)) - gd), o }))
                 .sort((a, b) => a.f - b.f).slice(0, 3);
  const en = yakin[0];
  const durum = en.f <= 30 ? '🟢 MADDE VAR' : '🔴 MADDESIZ — Degismez 2 OTER';
  console.log('');
  console.log(g + '   ' + durum + '   (en yakin ' + en.f + ' gun)');
  for (const y of yakin)
    console.log('     ' + String(y.f).padStart(5) + ' gun  ' + y.o.t + '  '
                + String(y.o.b || '').slice(0, 78));
}

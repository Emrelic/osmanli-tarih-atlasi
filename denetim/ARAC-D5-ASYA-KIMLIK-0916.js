// D5-ASYA — 1923'te atlasın Asya yerleşimlerine hangi künye id'sini yazdığını ölçer.
// AMAÇ: D kaydının `taraflar` alanına atlasın KULLANDIĞI id'yi koymak (render eşleşmesi).
// Bu bir DAYANAK değildir (CLAUDE.md §4 — atlas referans değil); yalnız ad eşleştirmesidir.
// Girdi listesi argv[2]'deki dosyadan okunur (arac/girdi.py GIRDI_DOSYALARI).
const fs = require('fs');
const liste = fs.readFileSync(process.argv[2], 'utf8').trim().split(/\r?\n/).map(s => s.trim()).filter(Boolean);
global.window = {};
let hata = 0;
for (const f0 of liste) { const f = fs.existsSync(f0) ? f0 : 'data/' + f0; try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { hata++; console.log('OKUNAMADI', f, e.message); } }
const Y = [];
for (const v of Object.values(window)) if (Array.isArray(v)) for (const y of v) if (y && y.ad && (y.d || y.s || y.v)) Y.push(y);
console.log('dosya', liste.length, 'okunamayan', hata, 'yerlesim', Y.length);
const g = '1923-06-15';
const sahip = y => {
  for (const k of ['d', 'v', 's']) for (const p of (y[k] || [])) if (p.f <= g && g < p.t) return k === 'd' ? 'OSMANLI' : (k === 'v' ? 'tabi' : p.d);
  return '—';
};
const aranan = process.argv[3] ? new RegExp(process.argv[3], 'i') : /phnom|pnom|battambang|siem|termi|kerki|kelif|kuşka|kushka|kabil|kabul|dili|kupang|namhkam|bhamo|thimphu|punakha|gangtok|darjeeling|lhasa|kiahta|kyakhta|urga|ulan|kızıl|kyzyl|hong|makao|port arthur|dalyan|dalian|leh$|gilgit|çitral|chitral|sahalin|aleksandrovsk|toyohara|kuching|sandakan|tawau|kengtung|mae sai/i;
for (const y of Y) if (aranan.test(y.ad)) console.log(String(y.ad).padEnd(24), sahip(y));

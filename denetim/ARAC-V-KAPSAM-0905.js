// `v:` ALANININ KAPSAMI — Emre'nin karari icin sayilar.
// Soru: "tabi" jenerik kimligi KAC NOKTAYI ve KAC YILI kapsiyor?
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

let donem = 0, nokta = 0, yilTop = 0;
const yillik = new Map();           // yuzyil -> donem sayisi
const uzun = [];
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) continue;
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) {
      if (!y || !Array.isArray(y.v) || !y.v.length) continue;
      nokta++;
      for (const per of y.v) {
        donem++;
        const f = +(per.f || '0').slice(0, 4), t = +(per.t || '0').slice(0, 4);
        const s = Math.max(0, t - f);
        yilTop += s;
        const yy = Math.floor(f / 100) + 1;
        yillik.set(yy, (yillik.get(yy) || 0) + 1);
        if (s >= 100) uzun.push([s, y.ad, per.f, per.t]);
      }
    }
  }
}
console.log('`v:` TASIYAN NOKTA : ' + nokta);
console.log('`v:` DONEM         : ' + donem);
console.log('toplam nokta-yil   : ' + yilTop);
console.log('ortalama donem     : ' + (yilTop / donem).toFixed(1) + ' yil');
console.log('');
console.log('yuzyila gore donem:');
for (const [yy, n] of [...yillik].sort((a, b) => a[0] - b[0]))
  console.log('  ' + yy + '. yy  ' + n);
console.log('');
console.log('--- 100 YILDAN UZUN `v:` donemleri (kimliksiz cizilenler) ---');
uzun.sort((a, b) => b[0] - a[0]);
console.log('  toplam ' + uzun.length + ' donem');
for (const [s, ad, f, t] of uzun.slice(0, 20))
  console.log('  ' + String(s).padStart(4) + ' yil  ' + ad.padEnd(26) + f + ' → ' + t);

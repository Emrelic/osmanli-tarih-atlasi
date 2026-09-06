// RENK KAPISI (⑫) — bekleyen yamaların kullandığı kimlikleri çıkar.
//
// 🔴 Her dosya AYRI vm bağlamında yüklenir. Tek bağlamda eval, aynı
//    `window.X` adını kullanan iki dosyada SESSİZ EZME üretir — 0905'te
//    beş kademe dosyası 537 kaydı 137'ye düşürmüştü (§7).
// 🔴 Regex kullanılmıyor: veri JS, okuyucusu da JS olmalı.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

function dosyaKimlikleri(yol) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  try {
    vm.runInContext(fs.readFileSync(yol, 'utf8'), ctx, { timeout: 20000 });
  } catch (e) {
    return { hata: e.message.slice(0, 90), kimlik: new Set(), kayit: 0 };
  }
  const kimlik = new Set();
  let kayit = 0;
  const gez = (v) => {
    if (!v) return;
    if (Array.isArray(v)) { v.forEach(gez); return; }
    if (typeof v !== 'object') return;
    // yerleşim kaydı mı?
    if (v.ad !== undefined && (v.s || v.d || v.v || v.isg)) kayit++;
    for (const alan of ['s', 'd', 'v', 'isg']) {
      for (const p of (v[alan] || [])) {
        if (p && p.d) kimlik.add(p.d);
        else if (alan === 'd' && p) kimlik.add('OSMANLI');
      }
    }
    for (const k of Object.keys(v)) {
      if (['s', 'd', 'v', 'isg'].includes(k)) continue;
      gez(v[k]);
    }
  };
  for (const k of Object.keys(ctx.window)) gez(ctx.window[k]);
  return { hata: null, kimlik, kayit };
}

const dosyalar = fs.readdirSync('data')
  .filter(x => /^yer_yama.*\.js$/.test(x)).sort();

const hepsi = new Map();          // kimlik -> [dosya...]
let toplamKayit = 0;
const hatali = [];
for (const f of dosyalar) {
  const r = dosyaKimlikleri(path.join('data', f));
  if (r.hata) { hatali.push([f, r.hata]); continue; }
  toplamKayit += r.kayit;
  for (const k of r.kimlik) {
    if (!hepsi.has(k)) hepsi.set(k, []);
    hepsi.get(k).push(f);
  }
}

console.log('yama dosyasi        :', dosyalar.length);
console.log('okunamayan          :', hatali.length);
hatali.forEach(([f, e]) => console.log('   🔴', f, '·', e));
console.log('yerlesim kaydi      :', toplamKayit);
console.log('BENZERSIZ KIMLIK    :', hepsi.size);
console.log('');
console.log('=== KIMLIK LISTESI (dosya sayisiyla) ===');
[...hepsi.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
  .forEach(([k, fs_]) => console.log('  ' + k.padEnd(34) + fs_.length + '  ' + fs_.slice(0, 2).join(' ')));

fs.writeFileSync('denetim/_renk_kapisi_kimlikler.json',
  JSON.stringify({ kimlikler: [...hepsi.keys()].sort(), dosya: dosyalar.length,
                   kayit: toplamKayit }, null, 1), 'utf8');
console.log('');
console.log('-> denetim/_renk_kapisi_kimlikler.json yazildi');

// KOSU13-YAMA — HEAD ile çalışma kopyası arasında KAYIT/ALAN düzeyinde fark (salt okuma).
// Satır diff'i yanıltır (çok satırlı dizi tek satıra yazılınca 161 satır "silinmiş" görünür);
// bu alet dosyayı JS olarak değerlendirir ve JS'in GERÇEKTEN okuduğu değeri karşılaştırır
// (mükerrer anahtarda SONUNCUSU — JS kuralı).
//    node denetim/ARAC-KOSU13-FARK-0917.js <data/dosya.js>...
const fs = require('fs');
const { execSync } = require('child_process');
function oku(metin) {
  global.window = {};
  eval(metin);
  const o = {};
  for (const k in window) {
    const v = window[k];
    if (!Array.isArray(v)) continue;
    v.forEach((r, i) => {
      const anahtar = r && r.ad ? k + '|' + r.ad : k + '|#' + i + '|' + (r && r.t) + '|' + (r && r.b);
      o[anahtar] = r;
    });
  }
  return o;
}
for (const f of process.argv.slice(2)) {
  const bas = oku(execSync('git show HEAD:' + f, { encoding: 'utf8', maxBuffer: 1 << 28 }));
  const son = oku(fs.readFileSync(f, 'utf8'));
  const tum = new Set([...Object.keys(bas), ...Object.keys(son)]);
  let n = 0;
  for (const k of tum) {
    const a = bas[k], b = son[k];
    if (!a || !b) { console.log(f, k, !a ? 'YENİ KAYIT' : 'SİLİNEN KAYIT'); n++; continue; }
    const alan = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const x of alan) {
      if (JSON.stringify(a[x]) !== JSON.stringify(b[x])) { console.log(f, k.split('|')[1], x); n++; }
    }
  }
  console.log('==', f, 'kayıt', Object.keys(son).length, 'fark', n);
}

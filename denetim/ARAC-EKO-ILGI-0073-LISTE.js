// Supheli kovalarini okunur listeye cevirir.  node ... LISTE.js C|B|A [adet] [atla]
const d = require('./EKO-ILGI-0073-HAM.json');
const kova = process.argv[2] || 'C';
const adet = parseInt(process.argv[3] || '9999', 10);
const atla = parseInt(process.argv[4] || '0', 10);
const s = d.satirlar.filter(x => x.kova === kova);

// kart basina kac bag var, kaci supheli — bagi kaldirmak karti SAHIPSIZ birakir mi?
const kartBag = {};
d.satirlar.forEach(x => {
  kartBag[x.kart] = kartBag[x.kart] || { hepsi: 0, A: 0 };
  kartBag[x.kart].hepsi++;
  if (x.kova === 'A') kartBag[x.kart].A++;
});
console.log('# kova ' + kova + ' — ' + s.length + ' bag-madde cifti, ' +
  new Set(s.map(x => x.kart)).size + ' ayri kart');
s.slice(atla, atla + adet).forEach((x, i) => {
  const kb = kartBag[x.kart];
  console.log('\n[' + (atla + i + 1) + '] ' + x.kart + '   (' + x.tur + ', ' + x.kaynak + ')' +
    '  bag=' + x.bag + '  · kartin A-bagi: ' + kb.A + '/' + kb.hepsi +
    (kb.A === 0 ? '  🔴 BASKA SAGLAM BAGI YOK' : ''));
  console.log('    MADDE : ' + x.madde_t + '  ' + x.madde_b + '   [' + x.madde_kova + ']');
  console.log('    KART  : ' + (x.kart_baslik || '(baslik yok)'));
  console.log('    kisa  : ' + (x.kart_kisa || '').slice(0, 170));
  console.log('    eksen : ' + JSON.stringify(x.eksen));
});

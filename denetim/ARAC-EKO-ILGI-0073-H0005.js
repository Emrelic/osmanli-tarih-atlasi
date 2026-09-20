// H-0005 — "onem sirasi / baslangic ayari" BUGUN VAR MI? Olcum.
const Y = require('./ARAC-EKO-ILGI-0073-YUKLE.js');
const R = Y.yukle('.');
const w = R.win;
const olay = Object.keys(w).filter(a => /^OLAYLAR(_[A-Za-z0-9]+)?$/.test(a) && Array.isArray(w[a]))
  .reduce((a, k) => a.concat(w[k]), []);
const puan = m => (m.dunya != null ? m.dunya : (m.onem != null ? m.onem : null));
const dis = olay.filter(m => m.kapsam === 'dis');
const ic = olay.filter(m => m.kapsam !== 'dis');
const dag = {};
dis.forEach(m => { const p = puan(m); const k = p == null ? 'PUANSIZ' : String(p); dag[k] = (dag[k] || 0) + 1; });
console.log('OLAYLAR (Osmanli zaman cizgisi evreni): ' + olay.length + ' madde');
console.log('  kapsam="dis" : ' + dis.length + '   oteki (ic/yok): ' + ic.length);
console.log('  dis maddelerin puan dagilimi (dunya ?? onem):');
Object.keys(dag).sort().forEach(k => console.log('    ' + k.padStart(8) + ' -> ' + dag[k]));
const esikler = ['0', '5', '4', 'hepsi'];
console.log('\n  ⚙ Ayarlar "Dis olaylar" esigi (varsayilan "4") ile GORUNEN dis madde:');
esikler.forEach(e => {
  let gor;
  if (e === 'hepsi') gor = dis.length;
  else if (e === '0') gor = 0;
  else gor = dis.filter(m => { const p = puan(m); return p != null && p >= +e; }).length;
  console.log('    esik ' + String(e).padStart(5) + ' -> ' + String(gor).padStart(4) + ' dis madde gorunur' + (e === '4' ? '   << BUGUNKU VARSAYILAN' : ''));
});
const oa = olay.find(m => /Orta Amerika Bağımsızlık/.test(m.b || ''));
console.log('\n  H-0005 maddesi: ' + (oa ? JSON.stringify({ t: oa.t, kapsam: oa.kapsam, onem: oa.onem, dunya: oa.dunya, b: oa.b }) : 'BULUNAMADI'));
// Ayni ailedeki oteki "Amerika kitasi" maddeleri
const amerika = olay.filter(m => /Amerika|Guatemala|Meksika|Brezilya|Peru|Kolombiya|Şili|Arjantin/.test((m.b || '') + (m.yer || '')));
console.log('  Amerika kitasi gecen madde: ' + amerika.length +
  ' · bunlardan kapsam="dis": ' + amerika.filter(m => m.kapsam === 'dis').length +
  ' · puan>=4: ' + amerika.filter(m => { const p = puan(m); return p != null && p >= 4; }).length +
  ' · puansiz: ' + amerika.filter(m => puan(m) == null).length);
console.log('\n  Amerika kitasindan puan>=4 olan dis maddeler (varsayilan esikte GORUNENLER):');
amerika.filter(m => m.kapsam === 'dis' && puan(m) >= 4).forEach(m => console.log('    ' + m.t + '  p=' + puan(m) + '  ' + m.b));

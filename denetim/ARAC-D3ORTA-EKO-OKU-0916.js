// D3-AVRUPA-ORTA — belirli ek okuma kayıtlarının kisa + metin başını basar
// Kullanım: node denetim/ARAC-D3ORTA-EKO-OKU-0916.js <id> [<id> ...]
const fs = require('fs');
global.window = {};
for (const f of fs.readdirSync('data').filter(f => /^ekokuma_.*\.js$/.test(f))) {
  try { eval(fs.readFileSync('data/' + f, 'utf8')); } catch (e) { /* tarama yukarıda */ }
}
// --bag <DEGISKEN>: o dosyadaki her kaydın baslik'ını ve olay bağlarının kronolojide bulunup bulunmadığını sınar
if (process.argv[2] === '--bag') {
  const kron = fs.readdirSync('data').filter(f => /^(olaylar|kronoloji).*\.js$/.test(f))
    .map(f => fs.readFileSync('data/' + f, 'utf8')).join('\n').split('\n');
  const kac = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let hata = 0;
  for (const r of window[process.argv[3]] || []) {
    console.log(r.id, '| baslik:', r.baslik ? 'VAR' : 'YOK', '| metin', (r.metin || '').length);
    if (!r.baslik) hata++;
    for (const o of r.olay || []) {
      const [t, k] = o.split('|');
      const re = new RegExp('t:\\s*"' + kac(t) + '".*' + kac(k || ''));
      const n = kron.filter(l => re.test(l)).length;
      console.log('   ', o, n ? `✓ ${n} madde` : '✗ BULUNAMADI');
      if (!n) hata++;
    }
  }
  console.log(hata ? `🔴 ${hata} sorun` : '✓ temiz');
  process.exit(hata ? 1 : 0);
}
const idler = new Set(process.argv.slice(2));
for (const k of Object.keys(window)) if (/^EKOKUMA/.test(k)) for (const r of window[k]) {
  if (!idler.has(r.id)) continue;
  console.log('=====', k, r.id, '|', r.baslik || '—');
  console.log('KISA:', r.kisa);
  console.log('METİN:', (r.metin || '').slice(0, 900));
  console.log('KAYNAK:', JSON.stringify(r.kaynak).slice(0, 300));
}

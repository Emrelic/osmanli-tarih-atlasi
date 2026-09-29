// IRAN-KAFKAS-0082 — bir GÜN ve kutuda geçerli sınır ÇİZGİLERİNİ (d_sinirlar*.js + hukuki_sinirlar.js) listeler.
// Kullanım: node denetim/ARAC-IRAN-KAFKAS-0082-SINIR.js <gun> [lo0,lo1,la0,la1]
const fs = require('fs'), vm = require('vm');
const gun = process.argv[2];
const [lo0, lo1, la0, la1] = (process.argv[3] || '40,47,37,43').split(',').map(Number);
const files = fs.readdirSync('data').filter(f => /^(d_sinirlar.*|hukuki_sinirlar)\.js$/.test(f));
for (const f of files) {
  const w = {};
  vm.runInNewContext(fs.readFileSync('data/' + f, 'utf8'), { window: w });
  for (const k in w) {
    const arr = w[k];
    if (!Array.isArray(arr)) continue;
    for (const r of arr) {
      if (!r || typeof r !== 'object') continue;
      if (!((r.f || '') <= gun && gun < (r.t || '9999'))) continue;
      const pts = [];
      const walk = a => { if (Array.isArray(a) && typeof a[0] === 'number') pts.push(a); else if (Array.isArray(a)) a.forEach(walk); };
      walk(r.hat || r.geometri || r.coords);
      if (!pts.length) continue;
      const lons = pts.map(p => p[0]), lats = pts.map(p => p[1]);
      if (Math.max(...lons) > lo0 && Math.min(...lons) < lo1 && Math.max(...lats) > la0 && Math.min(...lats) < la1)
        console.log([f, k, r.id, JSON.stringify(r.taraflar), r.f, r.t, r.sinif || r.kategori,
          'lon ' + Math.min(...lons).toFixed(2) + '-' + Math.max(...lons).toFixed(2) + ' lat ' + Math.min(...lats).toFixed(2) + '-' + Math.max(...lats).toFixed(2),
          String(r.kaynak || r.geometri_kaynagi || '').slice(0, 260)].join(' | '));
    }
  }
}

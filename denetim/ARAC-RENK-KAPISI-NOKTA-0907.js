// avusturya-cumhuriyet'in noktalarini bekleyen yamalardan cikar.
// Kimlik VERIDE yok (0 donem) — yalniz yamalarda. Mesafe olcumu icin sart.
//
// 🔴 v1 COKTU: `v[a]` her kayitta DIZI degil (bazi kayitlarda `d` skaler).
//    Cokmesi DOGRU davranisti — sessizce bos donseydi "nokta yok" diye
//    raporlardim (§11: "bir aracin cokmesi, yanlis cevap vermesinden IYIDIR").
const fs = require('fs'); const vm = require('vm'); const path = require('path');
const HEDEF = process.argv[2] || 'avusturya-cumhuriyet';
const bulunan = [];
const diziAl = (x) => Array.isArray(x) ? x : [];
for (const f of fs.readdirSync('data').filter(x => /^yer_yama.*\.js$/.test(x))) {
  const ctx = { window: {} }; vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(path.join('data', f), 'utf8'), ctx, { timeout: 20000 }); }
  catch (e) { continue; }
  const gez = (v) => {
    if (!v) return;
    if (Array.isArray(v)) { v.forEach(gez); return; }
    if (typeof v !== 'object') return;
    const kullanir = ['s', 'd', 'v', 'isg'].some(a =>
      diziAl(v[a]).some(p => p && p.d === HEDEF));
    if (kullanir && typeof v.lat === 'number' && typeof v.lon === 'number') {
      bulunan.push({ ad: v.ad, lat: v.lat, lon: v.lon, dosya: f });
    }
    for (const k of Object.keys(v)) { if (!['s','d','v','isg'].includes(k)) gez(v[k]); }
  };
  for (const k of Object.keys(ctx.window)) gez(ctx.window[k]);
}
console.log('nokta:', bulunan.length);
bulunan.slice(0, 20).forEach(b =>
  console.log('  ' + String(b.ad).padEnd(28) + b.lat.toFixed(3) + ', ' +
              b.lon.toFixed(3) + '   ' + b.dosya));
fs.writeFileSync('denetim/_renk_kapisi_nokta.json', JSON.stringify(bulunan), 'utf8');

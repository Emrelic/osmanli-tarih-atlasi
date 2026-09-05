// denetim/ altindaki yer_yama_*.js dosyalarini `_sahiplik_uygula.py`nin
// GOZUYLE sina — o dosyalar `data/`ye tasinmadan ONCE.
//
// Uygulayicinin sartlari (kaynagindan okundu):
//   ① window.YER_YAMA_<AD> = [ ... ]        dizi olmali
//   ② her kayitta `ad:` bulunmali
//   ③ alanlar: d · s · v · isg (dizi) · m · kaynak · bos · neden · not (skaler)
//   ④ `ad:` ATLASTA BIREBIR var olmali (belirsizse UYGULANMAZ)
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

// atlastaki adlar — girdi listesinden
global.window = {};
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const adSay = new Map();
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) continue;
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); } catch (e) { continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) if (y && y.ad) adSay.set(y.ad, (adSay.get(y.ad) || 0) + 1);
  }
}
console.log('atlasta benzersiz ad: ' + adSay.size);

const DIZI = ['d', 's', 'v', 'isg'];
const SKALER = ['m', 'kaynak', 'bos', 'neden', 'not'];
const BOS_SOZLUK = new Set(['devletsiz', 'veri-yok', 'kabile', 'insansiz', 'hata']);

const hedefler = fs.readdirSync(path.join(KOK, 'denetim'))
  .filter(f => /^yer_yama.*\.js$/.test(f));
if (!hedefler.length) { console.log('🔴 denetim/ altinda yer_yama*.js YOK'); process.exit(0); }

for (const f of hedefler) {
  console.log('');
  console.log('=== ' + f);
  global.window = {};
  try { eval(fs.readFileSync(path.join(KOK, 'denetim', f), 'utf8')); }
  catch (e) { console.log('  🔴 AYRISTIRILAMADI: ' + e.message); continue; }
  const adlar = Object.keys(global.window);
  const beklenen = 'YER_YAMA_' + f.replace(/^yer_yama_?/, '').replace(/\.js$/, '')
                                   .toUpperCase().replace(/[^A-Z0-9]/g, '_');
  console.log('  ad alani: ' + adlar.join(', ') + '   (beklenen benzeri: ' + beklenen + ')');
  for (const k of adlar) {
    const a = global.window[k];
    if (!Array.isArray(a)) { console.log('  🔴 ' + k + ' DIZI DEGIL'); continue; }
    console.log('  ' + k + ': ' + a.length + ' kayit');
    for (const y of a) {
      const sorun = [];
      if (!y.ad) sorun.push('`ad:` YOK');
      else if (!adSay.has(y.ad)) sorun.push('🔴 ATLASTA YOK: "' + y.ad + '" (YENI nokta mi?)');
      else if (adSay.get(y.ad) > 1) sorun.push('🟡 AD BELIRSIZ (' + adSay.get(y.ad) + ' kayitta) — uygulayici ATLAR');
      for (const alan of DIZI) if (y[alan] !== undefined && !Array.isArray(y[alan]))
        sorun.push(alan + ' DIZI DEGIL');
      for (const alan of SKALER) if (y[alan] !== undefined && typeof y[alan] !== 'string')
        sorun.push(alan + ' DIZGI DEGIL');
      if (y.bos !== undefined && !BOS_SOZLUK.has(y.bos))
        sorun.push('🔴 bos SOZLUK DISI: "' + y.bos + '"');
      const bilinmeyen = Object.keys(y).filter(
        x => x !== 'ad' && !DIZI.includes(x) && !SKALER.includes(x));
      if (bilinmeyen.length) sorun.push('⚠️ uygulayicinin TASIMADIGI alan: ' + bilinmeyen.join(','));
      if (sorun.length) console.log('     ' + (y.ad || '?') + ' — ' + sorun.join(' · '));
    }
  }
}

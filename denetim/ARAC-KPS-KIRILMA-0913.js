// denetim/ARAC-KPS-KIRILMA-0913.js — PAKET-KAPSAM · "TEK KAPATAN" ölçümü (YALNIZ OKUR)
// Soru: işaretlenen 87 madde, bir harita kırılmasını (±30 gün) kapatan TEK
// çekirdek madde mi? Öyleyse, ileride Osmanlı zaman çizgisine `dis` süzgeci
// uygulanırsa o kırılma SESSİZLEŞİR (Değişmez 2 / 2s kovası, kullanıcı gözü).
// Kırılma evreni: girdi.py izin listesindeki yerleşimlerin d: (Osmanlı) · v:
// (tâbi) · s: (yabancı) · isg: dönem uçları, 1281-01-01 < g < 1923-10-29.
// ⚠️ Bu denetle.py'nin kovalarını (KAPSAM DIŞI, beyanlar, tavanlar) TAKLİT
// ETMEZ — kaba bir alt küme sorusudur; sayı "denetle ile aynı" diye OKUNMAZ.
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.join(__dirname, '..'), DATA = path.join(KOK, 'data');
const LISTE = require('./ARAC-KPS-LISTE-0913.js');
const isaret = new Set(LISTE.map(x => x[0]));

const tam = s => (s.length === 4 ? s + '-01-01' : s.length === 7 ? s + '-01' : s);
const gun = s => { s = tam(String(s)); return Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5); };

const cekirdek = [];
for (const f of fs.readdirSync(DATA).filter(f => /^olaylar.*\.js$/.test(f)).sort()) {
  const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx);
  Object.keys(ctx.window).filter(k => k.startsWith('OLAYLAR')).flatMap(k => ctx.window[k])
    .forEach((m, i) => { if (m && m.t) cekirdek.push({ anahtar: f + '#' + i, g: gun(m.t), b: m.b, isaretli: isaret.has(f + '#' + i) }); });
}
const g = fs.readFileSync(path.join(KOK, 'arac', 'girdi.py'), 'utf8');
const blok = g.slice(g.indexOf('GIRDI_DOSYALARI = ['));
const liste = [...blok.slice(0, blok.indexOf('\n]')).matchAll(/^\s*"([^"]+\.js)"/gm)].map(x => x[1]);
const kir = {};
const G0 = gun('1281-01-01'), G1 = gun('1923-10-29');
for (const f of liste) {
  const yol = path.join(DATA, f); if (!fs.existsSync(yol)) continue;
  const ctx = { window: {} }; try { vm.runInNewContext(fs.readFileSync(yol, 'utf8'), ctx); } catch (e) { continue; }
  for (const v of Object.values(ctx.window)) if (Array.isArray(v)) for (const y of v) {
    if (!y || !y.ad) continue;
    for (const [alan, tur] of [['d', 'osm'], ['v', 'osm'], ['s', 'yab'], ['isg', 'isg']])
      for (const p of (y[alan] || [])) for (const u of [p.f, p.t]) {
        if (!u) continue; const gg = gun(u); if (gg <= G0 || gg >= G1) continue;
        const k = u + '|' + tur; (kir[k] = kir[k] || { g: gg, tur, ad: new Set() }).ad.add(y.ad);
      }
  }
}
const sonuc = [];
for (const [k, x] of Object.entries(kir)) {
  const yakin = cekirdek.filter(m => Math.abs(m.g - x.g) <= 30);
  if (!yakin.length || yakin.some(m => !m.isaretli)) continue;
  sonuc.push({ kirilma: k, ad: [...x.ad].slice(0, 5).join(', '), kapatan: yakin.map(m => m.anahtar + ' ' + m.b).join(' || ') });
}
const say = sonuc.reduce((a, s) => { const t = s.kirilma.split('|')[1]; a[t] = (a[t] || 0) + 1; return a; }, {});
console.log('işaretli madde ' + isaret.size + ' · kırılma anahtarı ' + Object.keys(kir).length + ' · YALNIZ işaretli maddelerle kapanan: ' + sonuc.length + ' ' + JSON.stringify(say));
for (const s of sonuc.sort((a, b) => a.kirilma < b.kirilma ? -1 : 1)) console.log('  ' + s.kirilma + ' | ' + s.ad + ' | ' + s.kapatan);

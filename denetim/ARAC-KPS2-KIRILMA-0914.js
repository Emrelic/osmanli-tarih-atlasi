// denetim/ARAC-KPS2-KIRILMA-0914.js — PAKET-KAPSAM2 · "GİZLENİNCE MADDESİZ KALAN KIRILMA" (YALNIZ OKUR)
// ---------------------------------------------------------------------------
// ARAC-KPS-KIRILMA-0913.js'in genelleştirilmişi: işaret kümesi sabit liste değil, bir KURAL.
//   GİZLİ(m) = m.kapsam === "dis" && ( onem sayı ve onem < ESIK  ||  onem yok ve --puansiz-gizli )
// Soru: ±30 gün içinde YALNIZ gizli maddelerin durduğu kırılma kaç? (süzgeç Osmanlı listesine
// bağlanırsa sessizleşecek kırılmalar)
// Kırılma evreni ARAC-KPS-KIRILMA-0913 ile AYNI: girdi.py izin listesindeki yerleşimlerin
// d:/v: (osm) · s: (yab) · isg: dönem uçları, 1281-01-01 < g < 1923-10-29.
// Ek kova: kırılmadaki yerleşimlerden biri atlasta HİÇ d:/v: taşımışsa "osmanli-hic"
// (PAKET-KRON3 §1.1'in "Osmanlı-hiç yerleşim içeren" ölçüsü).
// ⚠️ denetle.py'nin KAPSAM DIŞI kovasını / beyanlarını / tavanlarını TAKLİT ETMEZ.
//
// KULLANIM
//   node denetim/ARAC-KPS2-KIRILMA-0914.js --esik 4                  mevcut veri
//   node denetim/ARAC-KPS2-KIRILMA-0914.js --esik 4 --liste          KPS2 listesi SANAL uygulanmış
//   node denetim/ARAC-KPS2-KIRILMA-0914.js --esik 99 --puansiz-gizli  "bütün dis gizli" (KRON3 denkliği)
//   --ayrinti   osmanli-hic kırılmaları tek tek bas
// ---------------------------------------------------------------------------
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.join(__dirname, '..'), DATA = path.join(KOK, 'data');
const arg = process.argv;
const ESIK = arg.includes('--esik') ? +arg[arg.indexOf('--esik') + 1] : 4;
const PUANSIZ_GIZLI = arg.includes('--puansiz-gizli');
const AYRINTI = arg.includes('--ayrinti');
const OVERLAY = {};
if (arg.includes('--liste')) for (const [k, t, bBas, onem] of require('./ARAC-KPS2-LISTE-0914.js')) OVERLAY[k] = { t, bBas, onem };

const tam = s => (s.length === 4 ? s + '-01-01' : s.length === 7 ? s + '-01' : s);
const gun = s => { s = tam(String(s)); return Math.round(Date.UTC(+s.slice(0, 4), +s.slice(5, 7) - 1, +(s.slice(8, 10) || 1)) / 864e5); };

const cekirdek = []; let ovUygulanan = 0;
for (const f of fs.readdirSync(DATA).filter(f => /^olaylar.*\.js$/.test(f)).sort()) {
  const ctx = { window: {} }; vm.runInNewContext(fs.readFileSync(path.join(DATA, f), 'utf8'), ctx);
  Object.keys(ctx.window).filter(k => k.startsWith('OLAYLAR')).flatMap(k => ctx.window[k]).forEach((m, i) => {
    if (!m || !m.t) return;
    const key = f + '#' + i; let kapsam = m.kapsam, onem = m.onem;
    const ov = OVERLAY[key];
    if (ov) {
      if (m.t !== ov.t || !String(m.b).startsWith(ov.bBas)) throw new Error(key + ': listedeki t/b TUTMUYOR');
      kapsam = 'dis'; if (typeof onem !== 'number') onem = ov.onem; ovUygulanan++;
    }
    const gizli = kapsam === 'dis' && (typeof onem === 'number' ? onem < ESIK : PUANSIZ_GIZLI);
    cekirdek.push({ key, g: gun(m.t), b: m.b, gizli });
  });
}
if (arg.includes('--liste') && ovUygulanan !== Object.keys(OVERLAY).length) throw new Error('liste ' + Object.keys(OVERLAY).length + ' · eşleşen ' + ovUygulanan);

const g = fs.readFileSync(path.join(KOK, 'arac', 'girdi.py'), 'utf8');
const blok = g.slice(g.indexOf('GIRDI_DOSYALARI = ['));
const liste = [...blok.slice(0, blok.indexOf('\n]')).matchAll(/^\s*"([^"]+\.js)"/gm)].map(x => x[1]);
const kir = {}, osmHic = new Set();
const G0 = gun('1281-01-01'), G1 = gun('1923-10-29');
for (const f of liste) {
  const yol = path.join(DATA, f); if (!fs.existsSync(yol)) continue;
  const ctx = { window: {} }; try { vm.runInNewContext(fs.readFileSync(yol, 'utf8'), ctx); } catch (e) { continue; }
  for (const v of Object.values(ctx.window)) if (Array.isArray(v)) for (const y of v) {
    if (!y || !y.ad) continue;
    if ((y.d || []).length || (y.v || []).length) osmHic.add(y.ad);
    for (const [alan, tur] of [['d', 'osm'], ['v', 'osm'], ['s', 'yab'], ['isg', 'isg']])
      for (const p of (y[alan] || [])) for (const u of [p.f, p.t]) {
        if (!u) continue; const gg = gun(u); if (gg <= G0 || gg >= G1) continue;
        const k = u + '|' + tur; (kir[k] = kir[k] || { g: gg, tur, ad: new Set() }).ad.add(y.ad);
      }
  }
}
cekirdek.sort((a, b) => a.g - b.g);
const sonuc = [];
for (const [k, x] of Object.entries(kir)) {
  const yakin = cekirdek.filter(m => Math.abs(m.g - x.g) <= 30);
  if (!yakin.length || yakin.some(m => !m.gizli)) continue;
  const hic = [...x.ad].filter(a => osmHic.has(a));
  sonuc.push({ kirilma: k, tur: x.tur, hic, ad: [...x.ad].slice(0, 5).join(', '), kapatan: yakin.map(m => m.key + ' ' + String(m.b).slice(0, 50)).join(' || ') });
}
const say = sonuc.reduce((a, s) => { a[s.tur] = (a[s.tur] || 0) + 1; return a; }, {});
const hicler = sonuc.filter(s => s.hic.length);
console.log('ESIK ' + ESIK + (PUANSIZ_GIZLI ? ' · puansız dis GİZLİ' : ' · puansız dis GÖRÜNÜR') + (arg.includes('--liste') ? ' · KPS2 listesi SANAL (' + ovUygulanan + ')' : ' · mevcut veri'));
console.log('gizli madde ' + cekirdek.filter(m => m.gizli).length + ' · kırılma anahtarı ' + Object.keys(kir).length +
  ' · YALNIZ gizlilerle kapanan ' + sonuc.length + ' ' + JSON.stringify(say) + ' · Osmanlı-hiç yerleşim içeren ' + hicler.length +
  ' · d:/v: (osm) kırılması ' + (say.osm || 0));
for (const s of (AYRINTI ? hicler : []).sort((a, b) => a.kirilma < b.kirilma ? -1 : 1))
  console.log('  ' + s.kirilma + ' | osm-hic: ' + s.hic.slice(0, 5).join(', ') + ' | ' + s.kapatan);

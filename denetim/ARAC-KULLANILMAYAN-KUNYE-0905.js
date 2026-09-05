// ÖLÇÜM — "KÜNYE VAR, VERİ KULLANMIYOR" kovası. Bu soru hiç sorulmamıştı.
//
// 🔴 DOĞUŞU (5 Eylül 2026): `NEHİR SÜRTÜNME`, Les (Alessio) hayaletini
// çözerken `zeta` künyesinin (Zeta Prensliği · Balšić / Crnojević ·
// 1356→1514) TDV'nin anlattığı dönemi **birebir** karşıladığını buldu —
// ve `zeta`nın veride **sıfır kez** kullanıldığını. Veri onun yerine
// `arnavutluk` boyuyor, ve o künye 1443'te başlıyor.
// ⇒ Doğru künye DURUYOR, doğru pencereyi taşıyor, adında Balšić yazıyor —
//   ve kimse kullanmıyor. Sorduğu soru: **başka kaç künye böyle?**
//
// ⚠️ VE BU "KUSUR" DEĞİL: bir künye ileride kullanılmak üzere yazılmış
// olabilir (dizin katmanı `CLAUDE.md §6`ya göre haritadan ÖNCE gelir).
// Ama SAYISI bilinmeden hangi boşluğun kasıtlı olduğu da bilinmiyor.
//
// KULLANIM:  py denetim/ARAC-KULLANILMAYAN-KUNYE-0905-kos.py
const fs = require('fs');
const path = require('path');
const KOK = process.argv[2];

global.window = {};
eval(fs.readFileSync(path.join(KOK, 'data', 'devletler.js'), 'utf8'));
const D = window.DEVLETLER || [];
const kunye = new Map();                    // id -> künye
const haritaSahibi = new Map();             // harita anahtarı -> [id...]
for (const d of D) {
  kunye.set(d.id, d);
  if (d.harita) {
    if (!haritaSahibi.has(d.harita)) haritaSahibi.set(d.harita, []);
    haritaSahibi.get(d.harita).push(d.id);
  }
}

// veride HANGİ kimlikler kullanılıyor — `d:` alanı ham dizgi olarak
const kullanilan = new Map();               // ham değer -> kaç dönem
const dosyalar = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
let okunamayan = 0;
for (const rel of dosyalar) {
  const p = path.join(KOK, rel);
  if (!fs.existsSync(p)) { console.log('🔴 DOSYA YOK: ' + rel); okunamayan++; continue; }
  global.window = {};
  try { eval(fs.readFileSync(p, 'utf8')); }
  catch (e) { console.log('🔴 OKUNAMADI: ' + rel); okunamayan++; continue; }
  for (const k of Object.keys(global.window)) {
    const a = global.window[k];
    if (!Array.isArray(a)) continue;
    for (const y of a) {
      if (!y || typeof y !== 'object') continue;
      for (const alan of ['s', 'v', 'isg']) for (const per of (y[alan] || []))
        if (per && per.d) kullanilan.set(per.d, (kullanilan.get(per.d) || 0) + 1);
    }
  }
}

// bir künye "kullanılıyor" sayılır: id'siyle YA DA harita anahtarıyla
const dogrudan = new Set([...kullanilan.keys()].filter(x => kunye.has(x)));
const anahtarla = new Set();
for (const [ham] of kullanilan) for (const id of (haritaSahibi.get(ham) || []))
  anahtarla.add(id);

const hic = D.filter(d => !dogrudan.has(d.id) && !anahtarla.has(d.id));
console.log('künye ' + D.length + ' · okunamayan dosya ' + okunamayan);
console.log('  id ile kullanılan            : ' + dogrudan.size);
console.log('  YALNIZ harita anahtarıyla    : ' + [...anahtarla].filter(x => !dogrudan.has(x)).length);
console.log('  🔴 HİÇ KULLANILMAYAN          : ' + hic.length);
console.log('');
// bölgeye göre — nerede yoğunlaştığı, hangi coğrafyanın dizini haritadan ÖNDE
const bol = {};
for (const d of hic) bol[d.bolge || '-'] = (bol[d.bolge || '-'] || 0) + 1;
console.log(Object.entries(bol).sort((a, b) => b[1] - a[1])
  .map(([b, n]) => b + ':' + n).join(' · '));
console.log('');
console.log('--- 1923-10-29 GÜNÜNDE CANLI olup HİÇ kullanılmayanlar (en görünür kova) ---');
const G = '1923-10-29';
const canliHic = hic.filter(d => (d.f || '9999') <= G && (d.t || '0000') >= G);
console.log('  ' + canliHic.length + ' künye');
for (const d of canliHic.slice(0, 40))
  console.log('    ' + (d.id || '?').padEnd(30) + (d.f || '?') + ' → ' + (d.t || '?')
              + '  [' + (d.bolge || '-') + ']');
console.log('');
console.log('--- ÖRNEK: hiç kullanılmayanların ilk 30\'u (bütün pencereler) ---');
for (const d of hic.slice(0, 30))
  console.log('    ' + (d.id || '?').padEnd(30) + (d.f || '?') + ' → ' + (d.t || '?')
              + '  [' + (d.bolge || '-') + ']  ' + (d.ad || ''));

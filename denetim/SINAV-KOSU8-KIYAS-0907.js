/* ══════════════════════════════════════════════════════════════════════════
 * SINAV — KOŞU 8 ↔ KOŞU 7B KIYASI   ·  SINAV-KOSU8-0907  ·  7 Eylül 2026
 * ══════════════════════════════════════════════════════════════════════════
 *
 * 🟢🟢 NİÇİN BU SINAV BU PROJEDE NADİR: KONTROL GRUBU VAR.
 *   `CLAUDE.md §11`: *"bir ölçümü doğrulayan şey ikinci bir ölçüm değil,
 *   ölçümün YOKLUĞUNDA ne olduğunu gösteren bir KONTROL'dür."* Bu projede
 *   kontrol grubu genellikle YOKTU — puanlama kapısı öngörüsünün dört
 *   kalemi tam bu yüzden "ölçülemedi" damgasıyla kapandı (varsayılan deney
 *   kapısız→kapılı hiç yapılmamıştı).
 *   Burada var ve BEDAVA: koşu 7B'nin TAM çıktısı `567895f` commit'inde
 *   duruyor ve koşu 8 üstüne yazsa bile kaybolmuyor.
 *
 * ① NE ÖLÇÜYOR
 *   Koşu 8'in çıktısı, koşu 7B'ninkinden NE KADAR ve NEREDE ayrılıyor —
 *   ve bu ayrılık İKİ BİLİNEN SEBEPLE açıklanabiliyor mu:
 *       (a) `vl` çapası   — motor değişikliği `2127303`
 *       (b) `data/` yamaları — 7B'den sonra inen sahiplik/künye yamaları
 *   🔴 Üçüncü bir sebep çıkarsa AÇIKLANAMAYAN bir kayma var demektir.
 *
 *   NE ÖLÇMÜYOR: geometrinin DOĞRULUĞUNU. Yalnız FARKI ölçüyor. İki koşu
 *   da aynı yanlışı yapıyorsa bu sınav sessiz kalır — ve kalmalıdır,
 *   çünkü sorduğu soru o değil.
 *
 * ② HANGİ ÇIKTIDAN, HANGİ BİRİMDE
 *   data/donemler.js  ← `window.DONEMLER` (DÖNEM adet) · `PETEKLER` (adet)
 *                       alan adları (KÜME) · `ao`/`av` (km²)
 *   kontrol: `git show 567895f:data/donemler.js`
 *
 * ③ 🔴 KOŞU 8 NEYİ DEĞİŞTİRİYOR — ÖLÇÜLDÜ, TAHMİN DEĞİL
 *   `git log --since '7B başlangıcı' --until '8 başlangıcı' -- arac/uret_petek.py
 *    arac/renkler.py arac/girdi.py`  →  TEK COMMIT: 2127303 (`vl` çapası)
 *   ⇒ Motor tarafında başka hiçbir değişken yok. Kıyasın gücü buradan geliyor.
 *
 * ④ EŞİKLER — hepsi İLİŞKİ, hiçbiri sabit sayı
 *   E1  alan adı kümesi:  KOŞU8 ⊇ 7B          (alan KAYBOLMAZ)
 *   E2  yeni alan kümesi: tam olarak {vl}      (sürpriz alan yok)
 *   E3  PETEKLER:         KOŞU8 ≥ 7B          (petek KAYBOLMAZ)
 *   E4  `vl`:             7B == 0  ve  KOŞU8 > 0
 *   E5  DÖNEM sayısı farkı: 🟡 GÖZLEM — veri yamaları kırılma günü
 *       ekleyip çıkarabilir, yani fark BEKLENİR. İHLAL DEĞİL, YAZILIR.
 *
 * KOŞULUŞ
 *   node denetim/SINAV-KOSU8-KIYAS-0907.js
 *   node denetim/SINAV-KOSU8-KIYAS-0907.js --atesle
 *   node denetim/SINAV-KOSU8-KIYAS-0907.js --taban <commit>   (öntanım 567895f)
 * çıkış: 0 GEÇTİ · 1 İHLAL · 2 ÖLÇÜLEMEDİ
 * ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const cp = require('child_process');

const KOK = path.dirname(__dirname);
const ARG = process.argv.slice(2);
const iT = ARG.indexOf('--taban');
const TABAN = iT >= 0 ? ARG[iT + 1] : '567895f';   // KOŞU 7B'nin çıktısı

// ── karşılaştırma çekirdeği: iki DONEMLER kümesinden özet çıkarır ────────
function ozet(W) {
  const D = W.DONEMLER || [];
  const alan = new Set();
  let vl = 0, v = 0, capa = 0, ao = 0, av = 0;
  for (const d of D) {
    for (const k of Object.keys(d)) alan.add(k);
    if (d.v !== undefined) v++;
    if (d.vl !== undefined) { vl++; capa += (d.vl || []).length; }
    if (typeof d.ao === 'number') ao += d.ao;
    if (typeof d.av === 'number') av += d.av;
  }
  return {
    donem: D.length, alan, vl, v, capa,
    ao: Math.round(ao), av: Math.round(av),
    petek: (W.PETEKLER || []).length,
    petekAd: new Set((W.PETEKLER || []).map(p => p && p.a).filter(Boolean))
  };
}

// ── hüküm: iki özetten satır listesi + çıkış kodu ────────────────────────
function hukum(y, e) {                             // y = yeni(8), e = eski(7B)
  const satir = [];
  let kod = 0;
  const bas = (i, s) => satir.push([i, s]);

  const kayip = [...e.alan].filter(a => !y.alan.has(a));
  const yeni = [...y.alan].filter(a => !e.alan.has(a));
  if (!kayip.length) bas('🟢', 'E1 · alan adı KAYBOLMAMIŞ (' + e.alan.size + ' alanın hepsi duruyor)');
  else { bas('🔴', 'E1 · KAYBOLAN alan: ' + kayip.join(', ')); kod = 1; }

  const yeniS = yeni.slice().sort().join(',');
  if (yeniS === 'vl') bas('🟢', 'E2 · yeni alan tam olarak {vl} — beklenen tek motor değişikliği');
  else if (!yeni.length) { bas('🔴', 'E2 · YENİ ALAN YOK — `vl` üretilmemiş (motor 2127303 inmişti)'); kod = 1; }
  else { bas('🔴', 'E2 · beklenmeyen yeni alan: {' + yeniS + '} — {vl} bekleniyordu'); kod = 1; }

  if (y.petek >= e.petek) bas('🟢', 'E3 · PETEKLER ' + e.petek + ' → ' + y.petek + ' (kayıp yok)');
  else {
    const dus = [...e.petekAd].filter(a => !y.petekAd.has(a));
    bas('🔴', 'E3 · PETEK KAYBI ' + e.petek + ' → ' + y.petek +
              ' · düşen ad örneği: ' + dus.slice(0, 8).join(' | '));
    kod = 1;
  }

  if (e.vl === 0 && y.vl > 0) {
    bas('🟢', 'E4 · `vl` 0 → ' + y.vl + ' dönem (' + y.capa + ' çapa) — motor çalışmış');
  } else if (e.vl !== 0) {
    bas('⚫', 'E4 · TABAN BEKLENEN GİBİ DEĞİL: 7B\'de `vl` ' + e.vl +
              ' (0 olmalıydı) — yanlış commit kıyaslanıyor olabilir');
    kod = Math.max(kod, 2);
  } else {
    bas('🔴', 'E4 · `vl` HÂLÂ 0 — koşu 8 çapa yazmamış'); kod = 1;
  }

  bas('🟡', 'E5 · DÖNEM ' + e.donem + ' → ' + y.donem +
            '  (fark ' + (y.donem - e.donem) + ') — GÖZLEM: veri yamaları ' +
            'kırılma günü ekler/çıkarır, fark BEKLENİR');
  bas('🟡', 'E5 · `v` taşıyan dönem ' + e.v + ' → ' + y.v +
            ' · doğrudan alan ' + e.ao + ' → ' + y.ao + ' km²' +
            ' · tâbi alan ' + e.av + ' → ' + y.av + ' km²  (GÖZLEM)');
  return { kod, satir };
}

// ── C13② ATEŞLEME ────────────────────────────────────────────────────────
if (ARG.includes('--atesle')) {
  const A = new Set(['f', 't', 'ad', 'o', 'v', 'ao', 'av']);
  const temel = { donem: 500, alan: A, vl: 0, v: 400, capa: 0, ao: 1, av: 1,
                  petek: 3805, petekAd: new Set(['x', 'y']) };
  const kopya = (o, y) => Object.assign({}, o, y || {});
  const t = [];
  const de = (ad, bekle, olc) => t.push([ad, bekle, olc, bekle === olc]);

  const iyi = kopya(temel, { alan: new Set([...A, 'vl']), vl: 300, capa: 700, donem: 524 });
  de('GEÇME · beklenen tek fark {vl} → sessiz', 0, hukum(iyi, temel).kod);
  de('E1 · alan KAYBOLURSA öter', 1,
     hukum(kopya(temel, { alan: new Set(['f', 't', 'ad', 'o', 'vl']), vl: 3 }), temel).kod);
  de('E2 · `vl` HİÇ doğmazsa öter', 1, hukum(kopya(temel), temel).kod);
  de('E2 · SÜRPRİZ alan doğarsa öter', 1,
     hukum(kopya(temel, { alan: new Set([...A, 'vl', 'zz']), vl: 3 }), temel).kod);
  de('E3 · PETEK kaybı öter', 1,
     hukum(kopya(temel, { alan: new Set([...A, 'vl']), vl: 3, petek: 3000 }), temel).kod);
  de('E4 · taban `vl` 0 DEĞİLSE ÖLÇÜLEMEDİ (1 değil)', 2,
     hukum(kopya(temel, { alan: new Set([...A, 'vl']), vl: 3 }),
           kopya(temel, { vl: 9 })).kod);
  de('E5 · DÖNEM farkı TEK BAŞINA ihlal DEĞİL', 0,
     hukum(kopya(iyi, { donem: 900 }), temel).kod);

  console.log('C13 ② ATEŞLEME — sahte özetlerle zorlanan dallar\n');
  let kotu = 0;
  for (const [ad, b, o, ok] of t) {
    console.log((ok ? '  🟢 ' : '  🔴 ') + ad.padEnd(50) + 'beklenen ' + b + ' · ölçülen ' + o);
    if (!ok) kotu++;
  }
  console.log('\n' + (t.length - kotu) + '/' + t.length + ' dal ateşledi');
  process.exit(kotu ? 1 : 0);
}

// ── GERÇEK ÖLÇÜM ─────────────────────────────────────────────────────────
function yukle(yol) {
  const g = {};
  const eskiW = global.window;
  global.window = g;
  try { eval(fs.readFileSync(yol, 'utf8')); } finally { global.window = eskiW; }
  return g;
}

console.log('═'.repeat(74));
console.log('SINAV-KOSU8 · KOŞU 8 ↔ KOŞU 7B KIYASI');
console.log('═'.repeat(74));

let tabanYol;
try {
  const ham = cp.execFileSync('git', ['show', TABAN + ':data/donemler.js'],
    { cwd: KOK, maxBuffer: 512 << 20 });
  tabanYol = path.join(os.tmpdir(), 'sinav-kosu8-taban-' + process.pid + '.js');
  fs.writeFileSync(tabanYol, ham);
} catch (e) {
  console.error('⚫ ÖLÇÜLEMEDİ — taban çekilemedi (' + TABAN + '): ' + e.message);
  process.exit(2);
}

let yeni, eski;
try {
  yeni = ozet(yukle(path.join(KOK, 'data', 'donemler.js')));
  eski = ozet(yukle(tabanYol));
} catch (e) {
  console.error('⚫ ÖLÇÜLEMEDİ — okuma hatası: ' + e.message);
  process.exit(2);
} finally {
  try { fs.unlinkSync(tabanYol); } catch (e) { /* geçici dosya */ }
}

console.log('taban (kontrol) : ' + TABAN + ':data/donemler.js   — KOŞU 7B');
console.log('yeni            : data/donemler.js                — KOŞU 8');
console.log('');
if (yeni.donem === eski.donem && yeni.petek === eski.petek &&
    yeni.vl === eski.vl && yeni.ao === eski.ao) {
  console.log('⚠️ İKİ TARAF DA AYNI GÖRÜNÜYOR — koşu 8 henüz `donemler.js`i');
  console.log('   YAZMAMIŞ olabilir. Motor onu koşunun SONUNDA yazar.');
  console.log('   ⇒ Bu bir sonuç değil; koşu bitmeden bu sınav ÖLÇÜLEMEZ.');
}
const { kod, satir } = hukum(yeni, eski);
for (const [i, s] of satir) console.log('  ' + i + ' ' + s);
console.log('');
if (kod === 0) console.log('🟢 GEÇTİ — bütün fark açıklanabiliyor');
else if (kod === 1) console.log('🔴 KABUL EDİLMEZ — AÇIKLANAMAYAN kayma');
else console.log('⚫ EKSİK ÖLÇÜM — «temiz» DEĞİL');
process.exit(kod);

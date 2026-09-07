/* ══════════════════════════════════════════════════════════════════════════
 * SINAV — KOŞU 8'İN `vl` ÇIKTISI   ·  SINAV-KOSU8-0907  ·  7 Eylül 2026
 * ══════════════════════════════════════════════════════════════════════════
 *
 * ① NE ÖLÇÜYOR
 *     Koşu 8'in ÜRETTİĞİ `data/donemler.js` içindeki `vl` (tâbi etiket
 *     çapası) verisinin VARLIĞINI, ŞEMASINI, ADLARININ VERİYE DAYANIP
 *     DAYANMADIĞINI, ve ÇAPANIN TÂBİ GÖVDENİN İÇİNDE olup olmadığını.
 *
 *   NE ÖLÇMÜYOR — ve bu satır kasten uzun (`§11`: bir sınavın en değerli
 *   satırı ne ölçmediğidir):
 *     · Etiketin EKRANDA nasıl göründüğünü — o `SINAV-VASSAL-GORUNUM-0907.js`
 *       (VASSAL-GORUNUM-0907 oturumu, `js/app.js` tarafı, fikstürle).
 *     · Çapanın "en iyi" yerde olup olmadığını. Yalnız **içeride mi** diye
 *       soruyor; estetik bir hüküm vermiyor.
 *     · Etiket METNİNİN iyi bir etiket olup olmadığını (bazıları bir cümle
 *       uzunluğunda — GÖZLEM olarak basılıyor, İHLAL olarak değil).
 *     · `k`/`kid`/`statu` alanlarının TARİHSEL doğruluğunu (o `§4`ün işi).
 *
 * ② NİÇİN VAR — İKİ ALET BU BOŞLUĞU ADIYLA BEYAN ETTİ VE DOLDURMADI
 *     `denetim/ARAC-VL-SINAV-0907.py`   → "SINAMAZ çapanın KONUMU …
 *        ⇒ konum için damga: ÖLÇÜLEMEDİ (koşu bitince donemler.js'ten)"
 *     `denetim/SINAV-VASSAL-GORUNUM-0907.js` → "SORMAZ … gerçek `vl`
 *        verisinin İÇERİĞİ (koşu 8 bitmeden yok)"
 *     Bu dosya tam o iki cümlenin işaret ettiği yeri doldurur. Mükerrer
 *     değil: birincisi `girdi`den SİMÜLE ediyor, ikincisi FİKSTÜR koyuyor,
 *     bu ise KOŞUNUN GERÇEKTEN YAZDIĞINI okuyor. `CLAUDE.md C13③`:
 *     *"girdiyi GERÇEK kaynağından okuma yolu da sınanır."*
 *
 * ③ HANGİ ÇIKTIDAN, HANGİ BİRİMDE
 *     data/donemler.js → `window.DONEMLER[i].vl`      birim: DÖNEM ve ÇAPA (adet)
 *     data/donemler.js → `window.DONEMLER[i].v`       birim: derece (lon/lat)
 *     arac/girdi.py    → `v:` dönemlerinin (k|kid, statu) kümesi   birim: çift
 *
 * ④ HANGİ KOŞUDA, NEYE KARŞI
 *     KOŞU 8'in çıktısına karşı. KONTROL GRUBU: koşu 7B'nin çıktısı
 *     (`git show 567895f:data/donemler.js`) — ölçüldü, `vl` taşıyan dönem 0.
 *     Yani bu sınav bugün ZATEN ateşliyor ve ateşlemesi DOĞRU.
 *
 * 🔴 EŞİK VE TABANI — ve niçin SABİT SAYI YAZMIYORUM
 *     `CLAUDE.md §11`: *"bir eşik, ölçüldüğü tabanla birlikte taşınır"* — ve
 *     bu proje bugün üç bayat eşik ödedi (Ö9 · R1'in 96/640'ı ·
 *     `kosu8.log`un 16s09dk'sı). O yüzden buradaki eşiklerin HİÇBİRİ mutlak
 *     bir sayı değil, bir İLİŞKİDİR: ilişki taban taşımaz, veri büyüyünce
 *     bayatlamaz.
 *         K1  vl taşıyan dönem  > 0                  (sessiz sıfır kapanı)
 *         K8  BEKLENEN vl kümesi ⊆ GERÇEKLEŞEN       (kapsama, sayı değil)
 *
 * KOŞULUŞ
 *     node denetim/SINAV-KOSU8-VL-0907.js              → koşu 8 çıktısına
 *     node denetim/SINAV-KOSU8-VL-0907.js --atesle     → C13② fikstür dalları
 *     node denetim/SINAV-KOSU8-VL-0907.js --dosya <yol>  (kontrol grubu için)
 *   çıkış: 0 GEÇTİ · 1 İHLAL · 2 ÖLÇÜLEMEDİ
 *   🔴 2 ile 1 KARIŞTIRILMAZ: "ölçülemedi" asla "temiz" diye raporlanmaz,
 *      ve asla "çürüdü" diye de raporlanmaz (`CLAUDE.md`, üçüncü damga).
 * ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const KOK = path.dirname(__dirname);
const ARG = process.argv.slice(2);
const ATESLE = ARG.includes('--atesle');
const iDosya = ARG.indexOf('--dosya');
const DONEMLER_YOLU = iDosya >= 0 ? ARG[iDosya + 1]
                                  : path.join(KOK, 'data', 'donemler.js');

// yuvarlama payı: `mp_koord` halka köşelerini 3 ondalığa (~111 m) yuvarlar,
// çapa ise 4 ondalığa (~11 m). Yani sınırın üstündeki bir çapa yuvarlama
// yüzünden dışarı düşebilir. Pay = yuvarlama ızgarasının iki katı.
const PAY_DERECE = 0.002;

const R = { gecen: 0, ihlal: 0, olculemedi: 0, satir: [], gozlem: [] };
function hkm(ad, ok, detay) {
  if (ok === null) { R.olculemedi++; R.satir.push(['⚫ ÖLÇÜLEMEDİ', ad, detay]); return; }
  if (ok) { R.gecen++; R.satir.push(['🟢 GEÇTİ', ad, detay]); }
  else { R.ihlal++; R.satir.push(['🔴 İHLAL', ad, detay]); }
}

// ── GEOMETRİ İLKELLERİ ───────────────────────────────────────────────────
// 🔴 Bunlar PROJE MANTIĞI DEĞİL, genel geometri. Projenin kendi çözücüsü
//   (`parcaCoz`) app.js'ten METİN OLARAK alınıyor — kopyalanmıyor
//   (`ARAC-DIKIS-0904-govde.js`in emsali; `§11`: iki tanım bir gün ayrışır).
function halkadaMi(pt, halka) {                     // ray casting
  let ic = false;
  for (let i = 0, j = halka.length - 1; i < halka.length; j = i++) {
    const xi = halka[i][0], yi = halka[i][1];
    const xj = halka[j][0], yj = halka[j][1];
    if ((yi > pt[1]) !== (yj > pt[1]) &&
        pt[0] < ((xj - xi) * (pt[1] - yi)) / ((yj - yi) || 1e-15) + xi) ic = !ic;
  }
  return ic;
}
function parcadaMi(pt, parca) {                     // parça = [dış, delik…]
  if (!parca || !parca.length || !halkadaMi(pt, parca[0])) return false;
  for (let i = 1; i < parca.length; i++) if (halkadaMi(pt, parca[i])) return false;
  return true;
}
function nokKenar(pt, a, b) {                       // nokta–doğru parçası, derece
  const vx = b[0] - a[0], vy = b[1] - a[1];
  const uzun = vx * vx + vy * vy;
  let t = uzun ? ((pt[0] - a[0]) * vx + (pt[1] - a[1]) * vy) / uzun : 0;
  t = Math.max(0, Math.min(1, t));
  const dx = pt[0] - (a[0] + t * vx), dy = pt[1] - (a[1] + t * vy);
  return Math.sqrt(dx * dx + dy * dy);
}
function enYakinKenar(pt, parcalar) {
  let en = Infinity;
  for (const parca of parcalar) for (const halka of parca)
    for (let i = 1; i < halka.length; i++) {
      const d = nokKenar(pt, halka[i - 1], halka[i]);
      if (d < en) en = d;
    }
  return en;
}

// ── C13② ATEŞLEME — fikstürle, her dal AYRI AYRI ─────────────────────────
// 🔴 Gerçek veride bu kusurlar YOK; zorlanmayan dal denetimsiz daldır.
function ateslemeDallari() {
  const kare = [[[[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]]]];   // 1 parça
  const delikli = [[[[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]],
                    [[4, 4], [6, 4], [6, 6], [4, 6], [4, 4]]]];
  const t = [];
  const de = (ad, bekle, olc) => t.push([ad, bekle, olc, JSON.stringify(bekle) === JSON.stringify(olc)]);

  de('PIP · içerideki nokta', true, parcadaMi([5, 1], kare));
  de('PIP · dışarıdaki nokta', false, parcadaMi([15, 5], kare));
  de('PIP · DELİĞİN içi DIŞARIDIR', false, parcadaMi([5, 5], delikli));
  de('PIP · deliğin dışı ama parçanın içi', true, parcadaMi([1, 1], delikli));
  de('mesafe · 2 derece dışarıda', '2.0000', enYakinKenar([12, 5], kare).toFixed(4));
  de('mesafe · sınırın üstünde', '0.0000', enYakinKenar([10, 5], kare).toFixed(4));

  // şema dalları
  const S = (vl) => semaDenetle([{ f: '1500-01-01', t: '1501-01-01', ad: 'F', v: 1, vl }]);
  de('şema · sağlam kayıt sessiz', 0, S([{ k: 'A', s: 'vassal', p: [1, 1] }]).length);
  de('şema · `k` BOŞ yakalanır', 1, S([{ k: '', s: 'vassal', p: [1, 1] }]).length);
  de('şema · `s` YOK yakalanır', 1, S([{ k: 'A', p: [1, 1] }]).length);
  de('şema · `p` iki sayı DEĞİL', 1, S([{ k: 'A', s: 'vassal', p: [1] }]).length);
  de('şema · `p` menzil DIŞI (lon 999)', 1, S([{ k: 'A', s: 'vassal', p: [999, 1] }]).length);
  de('şema · MÜKERRER (k,s) çifti', 1, S([{ k: 'A', s: 'vassal', p: [1, 1] },
                                          { k: 'A', s: 'vassal', p: [2, 2] }]).length);
  de('şema · BOŞ vl dizisi yakalanır', 1, S([]).length);
  de('şema · `v` YOKKEN `vl` VAR',
     1, semaDenetle([{ f: '1500-01-01', t: '1501-01-01', ad: 'F',
                       vl: [{ k: 'A', s: 'vassal', p: [1, 1] }] }]).length);
  return t;
}

// ── ŞEMA DENETİMİ — tek kayıt kümesi alır, kusur listesi döner ────────────
function semaDenetle(donemler) {
  const kusur = [];
  donemler.forEach((d, i) => {
    if (d.vl === undefined) return;
    const yer = (d.ad || '') + ' [' + (d.f || '?') + ']';
    if (!Array.isArray(d.vl)) { kusur.push([yer, '`vl` DİZİ DEĞİL']); return; }
    if (!d.vl.length) { kusur.push([yer, 'BOŞ `vl` dizisi — motor boşsa hiç yazmamalı']); return; }
    if (d.v === undefined) kusur.push([yer, '`vl` VAR ama `v` YOK — çapa hangi gövdeye ait?']);
    const gorulen = new Set();
    d.vl.forEach((e, j) => {
      const nerede = yer + ' vl[' + j + ']';
      if (!e || typeof e !== 'object') { kusur.push([nerede, 'öğe nesne değil']); return; }
      if (typeof e.k !== 'string' || !e.k.trim()) kusur.push([nerede, '`k` boş ya da dizgi değil']);
      if (typeof e.s !== 'string' || !e.s.trim()) kusur.push([nerede, '`s` (statü) boş ya da dizgi değil']);
      if (!Array.isArray(e.p) || e.p.length !== 2 ||
          typeof e.p[0] !== 'number' || typeof e.p[1] !== 'number') {
        kusur.push([nerede, '`p` iki sayılık dizi değil']);
      } else if (e.p[0] < -180 || e.p[0] > 180 || e.p[1] < -90 || e.p[1] > 90) {
        kusur.push([nerede, '`p` menzil dışı: ' + JSON.stringify(e.p) +
                            ' (lon/lat sırası ters olabilir)']);
      }
      const anh = e.k + '\u0000' + e.s;
      if (gorulen.has(anh)) kusur.push([nerede, 'MÜKERRER (k,s) çifti: ' + e.k + ' / ' + e.s]);
      gorulen.add(anh);
    });
  });
  return kusur;
}

// ══ ATEŞLEME MODU ═════════════════════════════════════════════════════════
if (ATESLE) {
  console.log('C13 ② ATEŞLEME — fikstürle zorlanan dallar\n');
  const t = ateslemeDallari();
  let kotu = 0;
  for (const [ad, bekle, olc, ok] of t) {
    console.log((ok ? '  🟢 ' : '  🔴 ') + ad.padEnd(46) +
                'beklenen ' + JSON.stringify(bekle) + ' · ölçülen ' + JSON.stringify(olc));
    if (!ok) kotu++;
  }
  console.log('\n' + (t.length - kotu) + '/' + t.length + ' dal ateşledi');
  process.exit(kotu ? 1 : 0);
}

// ══ GERÇEK ÖLÇÜM ══════════════════════════════════════════════════════════
if (!fs.existsSync(DONEMLER_YOLU)) {
  console.error('⚫ ÖLÇÜLEMEDİ — dosya yok: ' + DONEMLER_YOLU);
  process.exit(2);
}
global.window = {};
try {
  eval(fs.readFileSync(DONEMLER_YOLU, 'utf8'));
  eval(fs.readFileSync(path.join(KOK, 'data', 'devletler_harita.js'), 'utf8'));
} catch (e) {
  console.error('⚫ ÖLÇÜLEMEDİ — donemler.js okunamadı: ' + e.message);
  process.exit(2);
}
const D = global.window.DONEMLER || [];
const PARCALAR = global.window.PARCALAR || [];
const PARCA_HALKA = global.window.PARCA_HALKA || [];
if (D.length < 100) {                       // sessiz sıfır kapanı
  console.error('⚫ ÖLÇÜLEMEDİ — DONEMLER şüpheli kısa (' + D.length + ')');
  process.exit(2);
}

console.log('═'.repeat(74));
console.log('SINAV-KOSU8 · `vl` ÇIKTI SINAVI');
console.log('═'.repeat(74));
console.log('okunan   : ' + path.relative(KOK, DONEMLER_YOLU));
console.log('DÖNEMLER : ' + D.length);

const vlDonem = D.filter(d => d.vl !== undefined);
const vDonem = D.filter(d => d.v !== undefined);
const capaSay = vlDonem.reduce((n, d) => n + (Array.isArray(d.vl) ? d.vl.length : 0), 0);
console.log('`v`  taşıyan dönem : ' + vDonem.length);
console.log('`vl` taşıyan dönem : ' + vlDonem.length + '  ·  toplam çapa ' + capaSay);
console.log('');

// ── K1 · VARLIK — sessiz sıfır kapanı ────────────────────────────────────
hkm('K1 · `vl` ÜRETİLMİŞ (adet > 0)', vlDonem.length > 0,
    vlDonem.length + ' dönem — 0 ise koşu `vl` yazmamış demektir; ' +
    'bu "temiz" DEĞİL, motor commit\'i 2127303 inmişken çıktı onu taşımıyor');
if (!vlDonem.length) {
  console.log('\n⚠️ `vl` HİÇ YOK — kalan kalemler ÖLÇÜLEMEZ, atlanıyor.');
  console.log('   (Kontrol grubunda — koşu 7B çıktısında — BEKLENEN sonuç budur.)');
}

// ── K2-K7 · ŞEMA ─────────────────────────────────────────────────────────
const semaKusur = semaDenetle(D);
hkm('K2 · şema (k · s · p · mükerrer · boş dizi · v eşliği)', semaKusur.length === 0,
    semaKusur.length + ' kusur');
for (const [yer, ne] of semaKusur.slice(0, 20)) console.log('        · ' + yer + ' → ' + ne);
if (semaKusur.length > 20) console.log('        … ' + (semaKusur.length - 20) + ' kusur daha');

// ── K5/K8 · ADLAR VERİYE DAYANIYOR MU ────────────────────────────────────
// 🔴 Beklenen kümeyi `girdi.py`ye SORUYORUZ, elle listelemiyoruz.
let bekAd = null;
try {
  const cikti = cp.execFileSync('py', ['-c',
    'import sys,io,json;sys.path.insert(0,"arac");import girdi\n' +
    'Y=girdi.yukle(sessiz=True)\n' +
    'S=set()\n' +
    'for y in Y:\n' +
    '  for p in (y.get("v") or []):\n' +
    '    a=p.get("k") or p.get("kid")\n' +
    '    if a: S.add(a+"\\u0000"+(p.get("statu") or "vassal"))\n' +
    'sys.stdout.write(json.dumps(sorted(S)))'],
    { cwd: KOK, encoding: 'utf8', maxBuffer: 8 << 20 });
  bekAd = new Set(JSON.parse(cikti.slice(cikti.indexOf('['))));
} catch (e) {
  bekAd = null;
}
if (bekAd === null || bekAd.size < 5) {
  hkm('K5 · her `vl` adı veride VAR', null,
      'girdi.py okunamadı ya da küme şüpheli kısa — ölçülemedi, TEMİZ DEĞİL');
} else {
  const yabanci = [];
  for (const d of vlDonem) for (const e of (d.vl || [])) {
    if (!e || typeof e.k !== 'string') continue;
    const anh = e.k + '\u0000' + (e.s || '');
    if (!bekAd.has(anh)) yabanci.push((d.ad || '?') + ' [' + d.f + '] → ' + e.k + ' / ' + e.s);
  }
  hkm('K5 · her `vl` (k,s) çifti veride VAR', yabanci.length === 0,
      'veride karşılığı olmayan çapa: ' + yabanci.length + ' / ' + capaSay +
      ' (veri kümesi ' + bekAd.size + ' çift)');
  for (const s of yabanci.slice(0, 12)) console.log('        · ' + s);

  const gorulen = new Set();
  for (const d of vlDonem) for (const e of (d.vl || [])) {
    if (e && typeof e.k === 'string') gorulen.add(e.k + '\u0000' + (e.s || ''));
  }
  const hicCikmayan = [...bekAd].filter(a => !gorulen.has(a));
  // 🟡 İHLAL DEĞİL, GÖZLEM: bir tâbi kayıt hiç çapa üretmeyebilir — peteği
  //   `mp_koord`un ~2 km² eşiğinin altında kalmışsa `v` gövdesine hiç
  //   girmez. O yüzden bu kalem SAYILMIYOR, YAZILIYOR.
  R.gozlem.push('veride VAR ama hiç çapa ÜRETMEYEN (k,s) çifti: ' +
                hicCikmayan.length + ' / ' + bekAd.size);
  for (const a of hicCikmayan.slice(0, 15)) R.gozlem.push('    · ' + a.replace('\u0000', ' / '));
}

// ── K6 · ÇAPA TÂBİ GÖVDENİN İÇİNDE Mİ ────────────────────────────────────
let parcaCoz = null;
try {
  const appjs = fs.readFileSync(path.join(KOK, 'js', 'app.js'), 'utf8');
  const m = appjs.match(/function parcaCoz\([\s\S]*?\n\}/);
  if (m) parcaCoz = eval('(' + m[0] + ')');
} catch (e) { parcaCoz = null; }

if (typeof parcaCoz !== 'function') {
  hkm('K6 · çapa tâbi gövdenin İÇİNDE', null,
      'parcaCoz app.js\'ten alınamadı — konum ÖLÇÜLEMEDİ (app.js değişmiş olabilir)');
} else if (!vlDonem.length) {
  hkm('K6 · çapa tâbi gövdenin İÇİNDE', null, '`vl` yok — ölçülecek çapa yok');
} else {
  let ic = 0, payda = 0, disari = 0;
  const uzak = [];
  for (const d of vlDonem) {
    let geo;
    try { geo = parcaCoz(d.v, PARCALAR, PARCA_HALKA); } catch (e) { geo = null; }
    if (!geo || !geo.coordinates || !geo.coordinates.length) continue;
    const parcalar = geo.type === 'Polygon' ? [geo.coordinates] : geo.coordinates;
    for (const e of (d.vl || [])) {
      if (!e || !Array.isArray(e.p) || e.p.length !== 2) continue;
      if (parcalar.some(pc => parcadaMi(e.p, pc))) { ic++; continue; }
      const uz = enYakinKenar(e.p, parcalar);
      if (uz <= PAY_DERECE) payda++;
      else { disari++; uzak.push([(d.ad || '?') + ' [' + d.f + ']', e.k, uz.toFixed(4)]); }
    }
  }
  hkm('K6 · çapa tâbi gövdenin İÇİNDE', disari === 0,
      'içeride ' + ic + ' · yuvarlama payında (≤' + PAY_DERECE + '°) ' + payda +
      ' · DIŞARIDA ' + disari);
  uzak.sort((a, b) => b[2] - a[2]);
  for (const [nerede, ad, uz] of uzak.slice(0, 12)) {
    console.log('        · ' + nerede + ' → ' + ad + '  ' + uz + '° dışarıda');
  }
}

// ── K8 · KAPSAMA: `v` VARSA ve o gün ADLI tâbi VARSA `vl` de OLMALI ──────
// Motor kodu (`uret_petek.py:4803+`) `vl`yi `kayit["v"]`in İÇİNDE yazıyor;
// yani `v` olan her dönemde ADLI bir tâbi dönem varsa çapa da olmalı.
// 🔴 Bu, kısmî yazımı yakalar: `vl` VAR ama yalnız birkaç dönemde.
const vAmaVlYok = vDonem.filter(d => d.vl === undefined).length;
R.gozlem.push('`v` taşıyıp `vl` taşımayan dönem: ' + vAmaVlYok + ' / ' + vDonem.length +
              '  (adsız `v:` dönemleri çapa üretmez — 56 kayıt adsız, yani ' +
              'sıfırdan büyük olması BEKLENİR; sıçraması bir işarettir)');

// ── RAPOR ────────────────────────────────────────────────────────────────
console.log('\n' + '─'.repeat(74));
for (const [d, ad, det] of R.satir) console.log(d.padEnd(14) + ad.padEnd(42) + det);
if (R.gozlem.length) {
  console.log('\n🟡 GÖZLEM (ihlal DEĞİL — sayılmıyor, yazılıyor):');
  for (const g of R.gozlem) console.log('   ' + g);
}
console.log('\nGEÇTİ ' + R.gecen + ' · İHLAL ' + R.ihlal + ' · ÖLÇÜLEMEDİ ' + R.olculemedi);
if (R.ihlal) { console.log('🔴 KABUL EDİLMEZ'); process.exit(1); }
if (R.olculemedi) { console.log('⚫ EKSİK ÖLÇÜM — "temiz" DEĞİL'); process.exit(2); }
console.log('🟢 GEÇTİ');

// node denetim/dogu/kunye_olc.js > kunye_asim.json
// DOĞU dilimlerinin (kaynak: ' · DOGU-500-1281' damgalı yama dilimleri + data/yerlesimler_dogu_500_1281.js) devlet künyesi
// f/t aralığını AŞIP aşmadığını ölçer. Künye: data/devletler.js ∪ denetim/_gecici_devletler_ms1.js (ms1 dalı, main'e inene kadar).
const fs = require('fs'), path = require('path'), vm = require('vm');
const KOK = path.resolve(__dirname, '..', '..');
const GUN = require(path.join(KOK, 'js/gun.js'));
function yukle(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb, { filename: f }); return sb.window; }
const kunye = {};
for (const f of ['denetim/_gecici_devletler_ms1.js', 'data/devletler.js']) {
  const p = path.join(KOK, f); if (!fs.existsSync(p)) continue;
  for (const d of yukle(p).DEVLETLER || []) kunye[d.id] = d;
}
const g = (s) => GUN.gun(s);
const asim = {};   // id -> {onceki:[...], sonra:[...]}
function dilim(ad, p) {
  const k = kunye[p.d];
  if (!k || p.d === '__BOSLUK__') return;
  const a = (asim[p.d] = asim[p.d] || { f: k.f, t: k.t, erken: 0, gec: 0, ornek: [] });
  let kf, kt;
  try { kf = g(k.f); kt = k.t ? g(k.t) : Infinity; } catch (e) { return; }
  const pf = g(p.f), pt = g(p.t);
  let not = null;
  if (pf < kf) { a.erken = Math.max(a.erken, kf - pf); not = 'erken ' + (kf - pf) + ' gün'; if (a.yeni_f === undefined || pf < g(a.yeni_f)) a.yeni_f = p.f; }
  if (pt > kt) { a.gec = Math.max(a.gec, pt - kt); not = (not ? not + ', ' : '') + 'geç ' + (pt - kt) + ' gün'; if (a.yeni_t === undefined || pt > g(a.yeni_t)) a.yeni_t = p.t; }
  if (not && a.ornek.length < 3) a.ornek.push(ad + ' ' + p.f + '→' + p.t + ' (' + not + ')');
}
const dogu = yukle(path.join(KOK, 'data/yerlesimler_dogu_500_1281.js')).YERLESIMLER_DOGU_500_1281 || [];
for (const y of dogu) for (const p of y.s || []) dilim(y.ad, p);
// yama dilimleri: yamalı mevcut dosyalar (kaynak damgası)
const girdi = fs.readFileSync(path.join(KOK, 'denetim/_gecici_girdi.txt'), 'utf8').split('\n').map(s => s.trim()).filter(Boolean);
for (const f of girdi) {
  const p = path.join(KOK, 'data', f); if (!fs.existsSync(p)) continue;
  const w = yukle(p);
  for (const k of Object.keys(w)) if (/^YERLESIMLER/.test(k) && Array.isArray(w[k])) for (const y of w[k]) for (const p2 of y.s || []) if (/DOGU-500-1281/.test(p2.kaynak || '')) dilim(y.ad, p2);
}
const cikti = Object.entries(asim).filter(([, a]) => a.erken || a.gec).map(([id, a]) => ({ id, kunye_f: a.f, kunye_t: a.t, erken_gun: a.erken, gec_gun: a.gec, yeni_f: a.yeni_f, yeni_t: a.yeni_t, ornek: a.ornek }));
console.log(JSON.stringify(cikti, null, 1));
console.error('künye aşımı olan kimlik: ' + cikti.length);

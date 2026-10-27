const fs = require('fs'), vm = require('vm'), path = require('path');
const KOK = path.resolve(__dirname, '..', '..', '..');
const GUN = require(path.join(KOK, 'js/gun.js'));
function yuk(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const kim = new Set();
for (const d of yuk(path.join(KOK, 'data/devletler.js')).DEVLETLER) kim.add(d.id);
for (const d of yuk(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || []) kim.add(d.id);
for (const k of fs.readdirSync(path.join(KOK, 'denetim/dogu'))) {
  const f = path.join(KOK, 'denetim/dogu', k, 'kunye_yeni.js');
  if (fs.existsSync(f)) { const w = yuk(f); for (const g of Object.keys(w)) for (const d of w[g]) kim.add(d.id); }
}
const Z = yuk(path.join(__dirname, 'zincir_kuyruk.js')).ZINCIR_DOGU_KUYRUKYENI2;
const S = yuk(path.join(__dirname, 'kronoloji_sinir_dogu_kuyrukyeni2.js')).KRONOLOJI_SINIR_DOGU_KUYRUKYENI2;
const mevcut = {};
for (const k of ['hint2','hint3','gdasya2','gdasya3','bozkir1']) {
  const w = yuk(path.join(KOK, 'denetim/dogu', k, 'yerlesimler_dogu_' + k + '.js'));
  for (const y of w['YERLESIMLER_DOGU_' + k.toUpperCase()]) mevcut[k + '|' + y.ad] = y;
}
const ih = [];
let tam = 0, bit = 0, kuy = 0, sil = 0, dilim = 0;
const kullanilan = new Set();
for (const z of Z) {
  const m = mevcut[z.kume + '|' + z.ad];
  if (!m) { ih.push('kayit yok ' + z.kume + ' ' + z.ad); continue; }
  if (z.sil) { sil++; continue; }
  const ek = z.s_ek;
  let son = m.s[m.s.length - 1];
  let t = son.t;
  if (ek.length) {
    if (ek[0].f !== t) ih.push(z.ad + ' ilk f ' + ek[0].f + ' != ' + t);
    if (ek[0].d === son.d && !ek[0].devam) ih.push(z.ad + ' ilk dilim ayni sahip, devam isaretsiz');
    for (const s of ek) {
      dilim++;
      kullanilan.add(s.d);
      if (s.d !== '__BOSLUK__' && !kim.has(s.d)) ih.push(z.ad + ' kimlik yok ' + s.d);
      if (GUN.gun(s.f) >= GUN.gun(s.t)) ih.push(z.ad + ' f>=t ' + s.f);
      if (s.f !== t) ih.push(z.ad + ' kopuk ' + t + ' ' + s.f);
      t = s.t;
      if (!s.kaynak) ih.push(z.ad + ' kaynak yok');
    }
    for (let i = 1; i < ek.length; i++) {
      if (ek[i].d === ek[i - 1].d) ih.push(z.ad + ' ardisik ayni sahip ' + ek[i].f);
      if (ek[i].devam) continue;
      const g = GUN.gun(ek[i].f);
      if (!S.some(x => x.yer_id === z.ad && ['toprak-kazanc', 'toprak-kayip'].includes(x.tur) && Math.abs(GUN.gun(x.t) - g) <= 30)) ih.push(z.ad + ' devir madde yok ' + ek[i].f);
    }
    // ilk dilim (mevcut son sahipten farkli ise) de madde ister
    if (ek[0].d !== son.d) {
      const g = GUN.gun(ek[0].f);
      if (!S.some(x => x.yer_id === z.ad && Math.abs(GUN.gun(x.t) - g) <= 30)) ih.push(z.ad + ' ilk devir madde yok ' + ek[0].f);
    }
  }
  const eristi = GUN.gun(t) >= GUN.gun('2000-12-31');
  if (z.bit) { bit++; if (GUN.gun(z.bit) !== GUN.gun(t)) ih.push(z.ad + ' bit != son t'); }
  else if (eristi) { tam++; if (z.kuyruk_gerekli) ih.push(z.ad + ' tam ama kuyruk_gerekli var'); }
  else if (z.kuyruk_gerekli) { kuy++; const bas = z.kuyruk_gerekli.split(' ')[0]; if (bas !== t) ih.push(z.ad + ' kuyruk bas ' + bas + ' != ' + t); }
  else ih.push(z.ad + ' zincir ' + t + ' bitiyor, aciklama yok');
}
for (const x of S) {
  for (const id of x.taraflar) if (!kim.has(id)) ih.push('madde taraf yok ' + id);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(x.t)) ih.push('madde tarih ' + x.t);
}
console.log({ kayit: Z.length, tam, bit, kuyruk: kuy, sil, dilim, madde: S.length });
console.log('kullanilan kimlikler:', [...kullanilan].sort().join(' '));
console.log(ih.length ? ih.join('\n') : 'IHLAL YOK');

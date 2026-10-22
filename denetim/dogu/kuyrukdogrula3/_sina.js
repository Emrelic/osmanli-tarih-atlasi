// kuyrukdogrula3 kendi sınavı: süreklilik, kimlik, ±30 gün, tarih biçimi, ham ile karşılaştırma
const vm = require('vm'), fs = require('fs'), path = require('path');
const KOK = path.resolve(__dirname, '..', '..', '..'), D = path.join(KOK, 'denetim/dogu/');
function y(f) { const sb = { window: {} }; vm.createContext(sb); vm.runInContext(fs.readFileSync(f, 'utf8'), sb); return sb.window; }
const GUN = require(path.join(KOK, 'js/gun.js'));
const g = (s) => GUN.gun(s);
const z = y(D + 'kuyrukdogrula3/zincir_kuyruk.js').ZINCIR_DOGU_KUYRUKDOGRULA3;
const m = y(D + 'kuyrukdogrula3/kronoloji_sinir_dogu_kuyrukdogrula3.js').KRONOLOJI_SINIR_DOGU_KUYRUKDOGRULA3;
const ham = y(D + 'kuyrukyeni3/zincir_kuyruk_ham.js').ZINCIR_DOGU_KUYRUKYENI3;
const ids = new Set();
for (const d of y(path.join(KOK, 'data/devletler.js')).DEVLETLER || []) ids.add(d.id);
for (const d of y(path.join(KOK, 'denetim/_gecici_devletler_ms1.js')).DEVLETLER || []) ids.add(d.id);
for (const k of ['afrika1', 'amerika1', 'amerika2', 'amerika3']) { const w = y(D + k + '/kunye_yeni.js'); for (const d of w['DOGU_KUNYE_' + k.toUpperCase()] || []) ids.add(d.id); }
const src = {};
for (const [f, gl] of [['afrika1', 'AFRIKA1'], ['amerika2', 'AMERIKA2'], ['amerika1', 'AMERIKA1'], ['amerika3', 'AMERIKA3']]) for (const r of y(D + f + '/yerlesimler_dogu_' + f + '.js')['YERLESIMLER_DOGU_' + gl]) src[r.ad] = r;
const ihlal = [];
const re = /^\d{4}-\d{2}-\d{2}$/;
let slice = 0, bos = 0, sil = 0, dil = 0;
for (const e of z) {
  const r = src[e.ad]; if (!r) { ihlal.push('kaynak kayit yok ' + e.ad); continue; }
  const son = r.s[r.s.length - 1].t;
  const hamE = ham.find(h => h.ad === e.ad);
  if (e.s_ek.length) {
    if (e.s_ek[0].f !== son) ihlal.push(`${e.ad}: s_ek[0].f ${e.s_ek[0].f} != mevcut son ${son}`);
    let prev = null;
    for (const s of e.s_ek) {
      slice++; if (s.d === '__BOSLUK__') bos++;
      if (!re.test(s.f) || !re.test(s.t)) ihlal.push(`${e.ad}: tarih bicimi ${s.f} ${s.t}`);
      if (s.d !== '__BOSLUK__' && !ids.has(s.d)) ihlal.push(`${e.ad}: kimlik yok ${s.d}`);
      if (g(s.f) >= g(s.t)) ihlal.push(`${e.ad}: f>=t ${s.f} ${s.t}`);
      if (prev && prev !== s.f) ihlal.push(`${e.ad}: kopukluk ${prev} -> ${s.f}`);
      prev = s.t;
      if (!s.kaynak || /atıf; açılmadı|atıf, bu oturumda açılmadı/.test(s.kaynak)) ihlal.push(`${e.ad}: kaynak eksik/acilmamis ${s.f}`);
    }
    const last = e.s_ek[e.s_ek.length - 1];
    if (e.bit) { if (last.t !== e.bit) ihlal.push(`${e.ad}: son dilim t ${last.t} != bit ${e.bit}`); }
    else if (e.kuyruk_gerekli) { if (e.kuyruk_gerekli.split(' ')[0] !== last.t) ihlal.push(`${e.ad}: kuyruk basi ${e.kuyruk_gerekli} != son dilim t ${last.t}`); }
    else if (last.t !== '2000-12-31') ihlal.push(`${e.ad}: zincir 2000-12-31'e ulasmiyor`);
  } else {
    if (e.bit) { if (e.bit !== son && !e.kisalt_gerekli) ihlal.push(`${e.ad}: bit ${e.bit} != mevcut son ${son} (kisalt_gerekli yok)`); }
    else if (e.kuyruk_gerekli) { if (e.kuyruk_gerekli.split(' ')[0] !== son) ihlal.push(`${e.ad}: kuyruk basi != mevcut son ${son}`); }
    else ihlal.push(`${e.ad}: bos kayit`);
  }
  if (e.bit && !re.test(e.bit)) ihlal.push(`${e.ad}: bit biciminde`);
  if (e.bit && (!e.bit_kaynak || /atıf[;,] (bu oturumda )?açılmadı/.test(e.bit_kaynak))) ihlal.push(`${e.ad}: bit_kaynak eksik`);
  if (e.kuyruk_gerekli && !e.kuyruk_neden) ihlal.push(`${e.ad}: kuyruk_neden yok`);
  // ham ile sayım
  if (hamE) { dil += hamE.s_ek.length; }
}
// ±30 gün: her sahip degisimi
const gunl = {};
for (const x of m) { if (!re.test(x.t)) ihlal.push('madde tarih ' + x.t); (gunl[x.yer_id] = gunl[x.yer_id] || []).push(g(x.t)); for (const id of x.taraflar) if (!ids.has(id)) ihlal.push('madde taraf kimlik yok ' + id); if (!x.kaynak || /atıf[;,] (bu oturumda )?açılmadı/.test(x.kaynak)) ihlal.push('madde kaynak ' + x.t + ' ' + x.yer_id); }
for (const e of z) {
  const r = src[e.ad]; let onc = r.s[r.s.length - 1].d;
  for (const s of e.s_ek) {
    if (s.d !== onc) { const l = gunl[e.ad] || []; if (!l.some(v => Math.abs(v - g(s.f)) <= 30)) ihlal.push(`${e.ad}: devir ${s.f} (${onc}->${s.d}) icin ±30 gun madde yok`); }
    onc = s.d;
  }
}
console.log(JSON.stringify({ kayit: z.length, madde: m.length, dilim: slice, bosluk: bos, ham_dilim: dil, bit: z.filter(e => e.bit).length, kuyruk: z.filter(e => e.kuyruk_gerekli).length, tam: z.filter(e => e.s_ek.length && !e.bit && !e.kuyruk_gerekli).length, ihlal: ihlal.length }));
for (const x of ihlal) console.log('IHLAL', x);
process.exit(ihlal.length ? 1 : 0);

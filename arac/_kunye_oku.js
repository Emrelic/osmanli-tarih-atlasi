
global.window = {};
eval(require('fs').readFileSync(process.argv[2], 'utf8'));
const Y = window.KUNYE_YAMA || [];
global.window = {};
eval(require('fs').readFileSync(process.argv[3], 'utf8'));
const D = window.DEVLETLER || [];
const varOlan = new Set(D.map(d => d.id));
const cikti = Y.map(y => ({
  id: y.id, ad: y.ad, f: y.f, t: y.t, bolge: y.bolge || '',
  kaynak: y.kaynak || '', zaten: varOlan.has(y.id)
}));
console.log(JSON.stringify({
  yama: Y.length, devlet: D.length, kayit: cikti
}));

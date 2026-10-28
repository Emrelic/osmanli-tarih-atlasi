global.window=global; const fs=require('fs');
eval(fs.readFileSync('data/devletler.js','utf8'));
const o={};
for(const d of window.DEVLETLER){ o[d.id]={ad:d.ad,f:d.f,t:d.t,baskent:d.baskent,tur:d.tur,kaynak:typeof d.kaynak==='string'?d.kaynak:JSON.stringify(d.kaynak)}; }
fs.writeFileSync('denetim/once1281/amerika/kunyeler.json',JSON.stringify(o));
console.log(Object.keys(o).length);

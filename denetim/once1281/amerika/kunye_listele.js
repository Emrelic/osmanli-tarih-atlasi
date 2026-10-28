global.window=global; const fs=require('fs');
eval(fs.readFileSync('data/devletler.js','utf8'));
const D=window.DEVLETLER;
const am=['kuzey-amerika','orta-amerika','guney-amerika'];
const rows=D.filter(d=>am.includes(d.bolge)&&String(d.f)<'1281-01-01'&&!(String(d.f).startsWith('-')?false:false));
// negatif yil: sayisal
const num=s=>{const m=/^(-?)(\d+)/.exec(String(s));return m?(m[1]?-1:1)*+m[2]:null};
const r2=D.filter(d=>am.includes(d.bolge)&&num(d.f)!==null&&num(d.f)<1281);
console.log(D.length,r2.length);
for(const d of r2) console.log([d.id,d.ad,d.tur,d.f,d.t,d.harita||'',d.boya_gerekli?'BG':'',typeof d.kaynak==='string'?d.kaynak.slice(0,40):JSON.stringify(d.kaynak||'').slice(0,40)].join(' | '));

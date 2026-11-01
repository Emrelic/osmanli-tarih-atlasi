global.window=global; const fs=require('fs');
const files=['kronoloji_cok_once1281_amerika2.js','kronoloji_sinir_amerika_afrika3_1024.js','olaylar_arkeoloji_amerika.js','olaylar_arkeoloji_d2-afrika-amerika.js','olaylar_arkeoloji_d3-amerika-pasifik.js','kronoloji_cok_once1281_hint_amerika.js'];
const num=s=>{const m=/^(-?)(\d+)/.exec(String(s));return m?(m[1]?-1:1)*+m[2]:null};
const out=[];
for(const f of files){ const b=new Set(Object.keys(window)); eval(fs.readFileSync('data/'+f,'utf8'));
  for(const k of Object.keys(window)){ if(b.has(k)||!Array.isArray(window[k])) continue; for(const e of window[k]){ if(e&&e.t&&num(e.t)<1281&&num(e.t)>-13000) out.push([num(e.t),f.slice(0,18),(e.yer_id||'')+'',(e.b||'').slice(0,75)]);}}}
out.sort((a,b)=>a[0]-b[0]); for(const r of out) console.log(r.join(' | '));

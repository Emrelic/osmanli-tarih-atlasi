global.window=global; const fs=require('fs'); const path=require('path');
const files=fs.readdirSync('data').filter(f=>/^(kronoloji|olaylar)/.test(f)&&f.endsWith('.js')&&/amerika|arkeoloji|once1281|mo_|geriye/.test(f));
const num=s=>{const m=/^(-?)(\d+)/.exec(String(s));return m?(m[1]?-1:1)*+m[2]:null};
const AMADLAR=JSON.parse(fs.readFileSync('denetim/once1281/amerika/yerlesim_am.json','utf8')).map(x=>x.ad);
const AM=new Set(AMADLAR);
let top=0,rows=[];
for(const f of files){
  const before=new Set(Object.keys(window));
  try{ eval(fs.readFileSync('data/'+f,'utf8')); }catch(e){ console.log('HATA',f,e.message); continue; }
  for(const k of Object.keys(window)){ if(before.has(k)) continue; const v=window[k]; if(!Array.isArray(v)) continue;
    for(const e of v){ if(!e||typeof e!=='object'||!e.t) continue; rows.push({f,k,e}); } }
}
const am=rows.filter(r=>{const e=r.e; const y=e.yer_id; const n=num(e.t); if(n===null||n>=1281) return false;
  return (y&&AM.has(Array.isArray(y)?y[0]:y)) || /amerika/.test(r.f); });
console.log('dosya',files.length,'satir',rows.length,'ön1281 Amerika-aday',am.length);
const byfile={}; am.forEach(r=>byfile[r.f]=(byfile[r.f]||0)+1); console.log(byfile);
let sorun={tarihdesen:0,kaynaksiz:0,yeridyok:0,gunyok:0};
const ornek={tarihdesen:[],kaynaksiz:[],yeridyok:[]};
for(const r of am){const e=r.e;
  if(!/^-?\d{4}-\d{2}-\d{2}$/.test(String(e.t))){sorun.tarihdesen++;ornek.tarihdesen.push(r.f+' '+e.t);}
  if(!e.kaynak&&!e.src&&!e.kaynak_not){sorun.kaynaksiz++;ornek.kaynaksiz.push(r.f+' '+e.t+' '+(e.b||'').slice(0,50));}
  if(!e.yer_id&&!e.odak_yer&&!e.odak_kimlik){sorun.yeridyok++;ornek.yeridyok.push(r.f+' '+e.t+' '+(e.b||'').slice(0,60));}
}
console.log(sorun); for(const k in ornek) console.log(k,ornek[k].slice(0,12));
// yer_id'si nokta olmayan
const yok={}; for(const r of am){const y=r.e.yer_id; if(y&&!AM.has(Array.isArray(y)?y[0]:y)) yok[y]=(yok[y]||0)+1;}
console.log('yer_id Amerika-noktası değil (global liste dışı olabilir):',Object.keys(yok).length, JSON.stringify(yok).slice(0,900));
// ay/gün hassasiyeti: t ayın/günün 01-01 dışında ve gun alanı yıl/yaklaşık diyorsa
let ay=0; for(const r of am){const e=r.e; if(!/-01-01$/.test(String(e.t))&&/(yaklaş|civar|~|c\.|yıl|yil|ALT SINIR|orta nokta)/i.test(e.gun||'')) {ay++; if(ay<8) console.log('AYGÜN?',r.f,e.t,e.gun);} } console.log('ay-gün şüphe',ay);

const fs=require('fs');const S=process.argv[2];
const W=JSON.parse(fs.readFileSync(S+'/veri.json','utf8')).win;const Y=JSON.parse(fs.readFileSync(S+'/yer.json','utf8'));
const B=new Set(JSON.parse(fs.readFileSync(S+'/boyalar.json','utf8')));
const yr=s=>{const m=typeof s==='string'&&s.match(/^(-?\d{4})-(\d\d)-(\d\d)/);return m?+m[1]:null};
const D=W.DEVLETLER;const byId=Object.fromEntries(D.map(d=>[d.id,d]));
const items=[];
for(const [k,v] of Object.entries(W)){ if(!Array.isArray(v)||k==='DEVLETLER')continue;
 for(const o of v) if(o&&typeof o.t==='string'&&typeof o.b==='string'&&yr(o.t)!==null&&yr(o.t)<1) items.push(Object.assign({_f:k},o)); }
for(const d of D) for(const o of (d.kronoloji||[])) if(yr(o.t)<1) items.push(Object.assign({_f:'DEVLET:'+d.id,_d:d.id},o));
const link=o=>{const s=new Set();if(o._d)s.add(o._d);if(o.devlet)(Array.isArray(o.devlet)?o.devlet:[o.devlet]).forEach(x=>s.add(x));
 const m=(o.ic_not_d||'').matchAll(/\[devlet:\s*([^\]]+)\]/g);for(const x of m)x[1].split(/[,\s]+/).filter(Boolean).forEach(i=>s.add(i));return s};
const per={};for(const o of items)for(const id of link(o)){(per[id]=per[id]||[]).push(o)}
const bc=D.filter(d=>yr(d.f)!==null&&yr(d.f)<1);
const R={n:bc.length,tipler:{}};
const rows=[];
const ysp={};for(const p of Y)for(const s of p.s){if(yr(s.f)!==null&&yr(s.f)<1||(s.d&&byId[s.d]&&yr(byId[s.d].f)<1)){(ysp[s.d]=ysp[s.d]||[]).push({ad:p.ad,f:s.f,t:s.t,tag:s.kaynak?1:0})}}
let c={nokron:0,nokunyeKaynak:0,noboya:0,noyer:0,nostart:0,noend:0,out:0,yerOut:0,yilOnly:0,tbosf:0,ters:0};
for(const d of bc){
 const f=yr(d.f),t=d.t?yr(d.t):null;const it=per[d.id]||[];const ys=it.map(o=>yr(o.t));
 const prob=[];
 if(!it.length){prob.push('KRONOLOJI-YOK');c.nokron++}
 else{
  if(!ys.some(y=>Math.abs(y-f)<=1)){prob.push('KURULUS-MADDESI-YOK');c.nostart++}
  if(t!==null&&!ys.some(y=>Math.abs(y-t)<=1)){prob.push('SON-MADDESI-YOK');c.noend++}
  const out=it.filter(o=>{const y=yr(o.t);return y<f-1||(t!==null&&y>t+1)});
  if(out.length){prob.push('KUNYE-DISI-MADDE:'+out.length);c.out++}
 }
 if(!d.kaynak||d.kaynak===d.id){c.nokunyeKaynak++}
 if(!B.has(d.harita||d.id)&&!B.has(d.id)){prob.push('BOYA-YOK');c.noboya++}
 const ye=ysp[d.id]||[];
 if(!ye.length){prob.push('YERLESIM-YOK');c.noyer++}
 else{const o=ye.filter(s=>yr(s.f)<f-1||(t!==null&&s.t&&yr(s.t)>t+1));if(o.length){prob.push('YERLESIM-DONEMI-KUNYE-DISI:'+o.length);c.yerOut++}}
 if(t!==null&&t<=f){prob.push('KUNYE-TERS/SIFIR');c.ters++}
 if(!d.t){prob.push('T-YOK');c.tbosf++}
 rows.push({id:d.id,ad:d.ad,bolge:d.bolge,f:d.f,t:d.t||null,nKron:it.length,nYer:new Set(ye.map(s=>s.ad)).size,kaynak:!!d.kaynak,prob});
}
console.log(JSON.stringify(c));
fs.writeFileSync(S+'/mo_rows.json',JSON.stringify(rows,null,1));
// madde kalitesi
const q={n:items.length,gunsuz_yil:0,kaynaksiz:0,ayrikBir:0,devletsiz:0,kesinlikYok:0};
for(const o of items){ if(!o.kaynak||String(o.kaynak).length<8)q.kaynaksiz++; if(!/^-?\d{4}-(?!01-01)/.test(o.t))q.ayrikBir++; if(link(o).size===0)q.devletsiz++; if(!o.kesinlik)q.kesinlikYok++;}
console.log(JSON.stringify(q));
const unk=new Set();items.forEach(o=>link(o).forEach(i=>{if(!byId[i])unk.add(i)}));console.log('bilinmeyen devlet etiketi',[...unk].slice(0,30),unk.size);
const byb={};rows.forEach(r=>{byb[r.bolge]=(byb[r.bolge]||0)+1});console.log(byb);
const pc={};rows.forEach(r=>r.prob.forEach(p=>{const k=p.split(':')[0];pc[k]=(pc[k]||0)+1}));console.log(pc);
const ok=rows.filter(r=>!r.prob.length).length;console.log('sorunsuz',ok);

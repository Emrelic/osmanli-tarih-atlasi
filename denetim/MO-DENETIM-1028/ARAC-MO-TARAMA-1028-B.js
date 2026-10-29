const fs=require('fs');const S=process.argv[2];
const W=JSON.parse(fs.readFileSync(S+'/veri.json','utf8')).win;const Y=JSON.parse(fs.readFileSync(S+'/yer.json','utf8'));
const yr=s=>{const m=typeof s==='string'&&s.match(/^(-?\d{4})-(\d\d)-(\d\d)/);return m?+m[1]:null};
const D=W.DEVLETLER;const byId=Object.fromEntries(D.map(d=>[d.id,d]));
const items=[];
for(const [k,v] of Object.entries(W)){ if(!Array.isArray(v)||k==='DEVLETLER')continue;
 for(const o of v) if(o&&typeof o.t==='string'&&typeof o.b==='string'&&yr(o.t)!==null&&yr(o.t)<1) items.push(Object.assign({_f:k},o)); }
for(const d of D) for(const o of (d.kronoloji||[])) if(yr(o.t)<1) items.push(Object.assign({_f:'DEVLET:'+d.id,_d:d.id},o));
const link=o=>{const s=new Set();if(o._d)s.add(o._d);if(o.devlet)(Array.isArray(o.devlet)?o.devlet:[o.devlet]).forEach(x=>s.add(x));
 for(const x of (o.ic_not_d||'').matchAll(/\[devlet:\s*([^\]]+)\]/g))x[1].split(/[,\s]+/).filter(Boolean).forEach(i=>s.add(i));return s};
const per={};for(const o of items)for(const id of link(o)){(per[id]=per[id]||[]).push(yr(o.t))}
const tol=k=>({yil:1,onyil:5,yuzyil:50,gun:1,ay:1}[k]||1);
let n=0,ok=0,no=[];const pairs=new Set();
for(const p of Y){const s=(p.s||[]).slice().sort((a,b)=>a.f<b.f?-1:1);
 for(let i=0;i<s.length;i++){const a=s[i],pv=s[i-1];
  const y=yr(a.f);if(y===null||y>=1)continue;
  if(a.d==='__BOSLUK__')continue;
  if(pv&&pv.d===a.d)continue;
  const ids=[a.d];if(pv&&pv.d!=='__BOSLUK__')ids.push(pv.d);
  const key=a.d+'|'+a.f+'|'+(pv?pv.d:'-');if(pairs.has(key))continue;pairs.add(key);
  const kf=a.kesinlik&&(a.kesinlik.f||a.kesinlik);const T=tol(typeof kf==='string'?kf:'yil');
  n++;const hit=ids.some(id=>(per[id]||[]).some(z=>Math.abs(z-y)<=Math.max(T,1)));
  if(hit)ok++;else no.push({yer:p.ad,d:a.d,from:pv?pv.d:null,f:a.f,kes:kf||null});}}
console.log('BC gecisleri (tekil)',n,'kronolojide karsiligi olan',ok,'olmayan',no.length);
const bydev={};no.forEach(x=>{bydev[x.d]=(bydev[x.d]||0)+1});
console.log(Object.entries(bydev).sort((a,b)=>b[1]-a[1]).slice(0,40).map(e=>e.join(':')).join('  '));
fs.writeFileSync(S+'/mo_gecis_eksik.json',JSON.stringify(no,null,1));
// yerlesimi olup donemi tek bir devlete bagli olmayan; hayalet: s: d kunye disi
let hay=0;const hl=[];
for(const p of Y)for(const a of p.s||[]){const d=byId[a.d];if(!d||a.d==='__BOSLUK__')continue;const y=yr(a.f);if(y===null||y>=1)continue;
 const df=yr(d.f),dt=d.t?yr(d.t):null;if(y<df-1||(a.t&&dt!==null&&yr(a.t)>dt+1)){hay++;hl.push(p.ad+' '+a.d+' '+a.f+'..'+a.t+' kunye '+d.f+'..'+d.t)}}
console.log('yerlesim donemi kunye disi (BC)',hay,hl.slice(0,15));
// BC yerlesim sayisi
let bcy=0;const bcn=new Set();for(const p of Y)for(const a of p.s||[]){const y=yr(a.f);if(y!==null&&y<1){bcn.add(p.ad)}}
console.log('BC doneme sahip yerlesim',bcn.size);

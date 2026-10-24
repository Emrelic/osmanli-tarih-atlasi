const fs=require('fs'),vm=require('vm');
const K='C:/atlas/.claude/worktrees/dogu';
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync(K+'/data')){ if(/^(yerlesimler|devletler)/.test(f)&&f.endsWith('.js')&&!/harita/.test(f)){try{vm.runInContext(fs.readFileSync(K+'/data/'+f,'utf8'),sb)}catch(e){}}}
const out=[];
for(const k of Object.keys(sb.window)){ if(/^YERLES/i.test(k)&&Array.isArray(sb.window[k])) for(const y of sb.window[k]){ if(y.lat>=30&&y.lat<=46&&y.lon>=124&&y.lon<=146.5) out.push(y);} }
out.sort((a,b)=>a.lon-b.lon);
for(const y of out){console.log(y.ad,y.lat,y.lon,'k'+y.k,'kur='+y.kur,'|',(y.s||[]).slice(0,3).map(p=>p.d+' '+p.f).join(' ; '))}
console.log(Object.keys(sb.window).join(','));

const fs=require('fs'),vm=require('vm');
const K='C:/atlas/.claude/worktrees/dogu';
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync(K+'/data')){ if(/^(kronoloji|olaylar|devletler)/.test(f)&&f.endsWith('.js')&&!/harita/.test(f)){try{vm.runInContext(fs.readFileSync(K+'/data/'+f,'utf8'),sb)}catch(e){}}}
const ids=new Set(process.argv.slice(2));
const seen=new Set();
function pr(m,src){const key=m.t+m.b; if(seen.has(key))return;seen.add(key);console.log(m.t,'|',m.b,'|',m.tur,'|',(m.taraflar||[]).join(','),'|',m.yer||'','|',src)}
for(const k of Object.keys(sb.window)){const v=sb.window[k]; if(!Array.isArray(v))continue;
 if(k==='DEVLETLER'){for(const d of v){ if(ids.has(d.id)){console.log('## DEVLET',d.id,d.f,d.t,d.baskent,'|',(d.ic_not||'').slice(0,150)); for(const m of d.kronoloji||[])pr(m,'devletler:'+d.id)}} continue}
 for(const m of v){ if(m&&m.t&&m.b&&((m.taraflar||[]).some(x=>ids.has(x))||ids.has(m.devlet))) pr(m,k)}
}

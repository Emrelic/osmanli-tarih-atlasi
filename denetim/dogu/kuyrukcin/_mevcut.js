const vm=require('vm'),fs=require('fs');
const KOK='C:/atlas/.claude/worktrees/dogu';
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync(KOK+'/data')){ if(/^yerlesimler.*\.js$/.test(f)){ try{vm.runInContext(fs.readFileSync(KOK+'/data/'+f,'utf8'),sb);}catch(e){} } }
const names=process.argv.slice(2);
for(const k of Object.keys(sb.window)) for(const y of (sb.window[k]||[])) if(y&&names.includes(y.ad)){
 console.log('==',y.ad,k,'kur',y.kur,'k',y.k);
 for(const p of (y.s||[]).slice(0,8)) console.log('  s',p.f,p.t,p.d,(p.kaynak||'').slice(0,60));
 console.log('  d',JSON.stringify((y.d||[]).slice(0,8)).slice(0,500));
 console.log('  v',JSON.stringify((y.v||[]).slice(0,4)).slice(0,300));
}

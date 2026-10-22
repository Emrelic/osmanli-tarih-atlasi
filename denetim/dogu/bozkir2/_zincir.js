const fs=require('fs'),vm=require('vm'),path=require('path');
const dir='data';const sb={window:{}};vm.createContext(sb);
const names=process.argv.slice(2);
for(const f of fs.readdirSync(dir)){ if(!/^yerlesimler.*\.js$/.test(f))continue;
 try{vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),sb);}catch(e){}
}
for(const k of Object.keys(sb.window)){ if(!/^YERLESIMLER/.test(k)||!Array.isArray(sb.window[k]))continue;
 for(const y of sb.window[k]){ if(names.some(n=>y.ad&&y.ad.indexOf(n)>=0)){ console.log(k,y.ad,y.lat,y.lon,'k='+y.k,'kur='+y.kur);
   for(const p of (y.s||[]).slice(0,5)) console.log('   ',p.f,p.t,p.d,p.kesinlik||''); } } }

const vm=require('vm'),fs=require('fs');const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync('data').filter(f=>/^yerlesimler.*\.js$/.test(f))){try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),sb)}catch(e){}}
const names=process.argv.slice(2);
for(const k of Object.keys(sb.window)){const a=sb.window[k];if(!Array.isArray(a))continue;for(const y of a){if(y&&names.includes(y.ad)){console.log(k,y.ad,y.lat,y.lon,'kur',y.kur,'k',y.k);for(const p of (y.s||[]).slice(0,6))console.log('   ',p.f,p.t,p.d,(p.kaynak||'').slice(0,60));}}}

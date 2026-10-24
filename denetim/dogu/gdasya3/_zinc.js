const vm=require('vm'),fs=require('fs');
const names=process.argv.slice(2);
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync('data').filter(f=>/^yerlesimler.*\.js$/.test(f))){try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),sb)}catch(e){}}
for(const k of Object.keys(sb.window)){const v=sb.window[k];if(!Array.isArray(v))continue;for(const y of v){if(y&&names.includes(y.ad)){console.log(k,y.ad,y.lat,y.lon,'kur',y.kur,'k',y.k,JSON.stringify((y.s||[]).slice(0,3).map(s=>[s.f,s.t,s.d])),Object.keys(y).join(','))}}}

const vm=require('vm'),fs=require('fs');
const sb={window:{}};vm.createContext(sb);
vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),sb);
const ids=process.argv.slice(2);
for(const d of sb.window.DEVLETLER){ if(ids.includes(d.id)){ console.log('##',d.id,d.f,d.t,d.baskent,JSON.stringify(d.kesinlik||''),d.bolge,d.tur); for(const k of (d.kronoloji||[])) console.log('   ',k.t,k.tur,k.b); } }

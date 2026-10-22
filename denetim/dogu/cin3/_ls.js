const vm=require('vm'),fs=require('fs');
const sb={window:{}};vm.createContext(sb);
vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),sb);
const ids=process.argv.slice(2);
const D=sb.window.DEVLETLER||sb.DEVLETLER;
for(const d of D){ if(ids.includes(d.id)){ const c=d.kronoloji||[]; console.log(d.id,d.f,d.t,d.baskent,d.kesinlik?JSON.stringify(d.kesinlik):''); for(const k of c) console.log('   ',k.t,k.tur,k.b); } }

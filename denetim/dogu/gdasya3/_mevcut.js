const vm=require('vm'),fs=require('fs');
const ids=process.argv.slice(2);
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync('data').filter(f=>/^(kronoloji|olaylar).*\.js$/.test(f))){try{vm.runInContext(fs.readFileSync('data/'+f,'utf8'),sb)}catch(e){console.error('ERR',f)}}
const D=[];try{vm.runInContext(fs.readFileSync('data/devletler.js','utf8'),sb)}catch(e){}
const seen=new Set();
for(const k of Object.keys(sb.window)){const v=sb.window[k];if(!Array.isArray(v))continue;for(const m of v){if(!m||!m.t)continue;const hit=ids.filter(i=>(m.taraflar||[]).includes(i)||m.devlet===i);const key=m.t+m.b;if(hit.length&&!seen.has(key)){seen.add(key);console.log(hit.join(','),m.t,m.tur,m.yer||'',m.b)}}}
for(const d of sb.window.DEVLETLER||[]){if(ids.includes(d.id))console.log('DEVLET',d.id,d.f,d.t,d.baskent,(d.kronoloji||[]).map(x=>x.t+' '+x.b).join(' || '))}

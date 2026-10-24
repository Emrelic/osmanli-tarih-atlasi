const fs=require('fs'),vm=require('vm'),path=require('path');
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync('data')){ if(!/^(kronoloji|olaylar).*\.js$/.test(f))continue;
 try{vm.runInContext(fs.readFileSync(path.join('data',f),'utf8'),sb);}catch(e){}
}
const ids=process.argv.slice(2);
const seen=new Set();
for(const k of Object.keys(sb.window)){ const a=sb.window[k]; if(!Array.isArray(a))continue;
 for(const m of a){ if(!m||!m.t)continue; const tf=(m.taraflar||[]).concat(m.devlet?[m.devlet]:[]);
  if(tf.some(x=>ids.includes(x))||ids.includes(m.devlet)){ const key=m.t+m.b; if(seen.has(key))continue; seen.add(key); console.log(m.t,'|',(m.b||'').slice(0,90),'|',(m.taraflar||[]).join(','),'|',k.slice(0,26)); } } }

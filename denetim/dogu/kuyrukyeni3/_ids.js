const vm=require('vm'),fs=require('fs');
const K='C:/atlas/.claude/worktrees/dogu/';
const re=new RegExp(process.argv[2]||'.','i');
const seen=new Set();
for(const f of ['data/devletler.js','denetim/_gecici_devletler_ms1.js']){
 const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(K+f,'utf8'),sb);
 for(const d of sb.window.DEVLETLER||[]){ if(seen.has(d.id))continue;seen.add(d.id);
  if(re.test(d.id+' '+d.ad+' '+d.bolge)) console.log(d.id,'|',d.ad,'|',d.bolge,'|',d.f,d.t,'|',d.baskent);}}

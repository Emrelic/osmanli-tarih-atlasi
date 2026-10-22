const vm=require('vm'),fs=require('fs');
function yuk(f){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(f,'utf8'),sb);return sb.window;}
const K='C:/atlas/.claude/worktrees/dogu/';
const m={};
for(const d of yuk(K+'data/devletler.js').DEVLETLER)m[d.id]=d;
for(const d of yuk(K+'denetim/_gecici_devletler_ms1.js').DEVLETLER||[])m[d.id]=m[d.id]||d;
for(const k of fs.readdirSync(K+'denetim/dogu')){const f=K+'denetim/dogu/'+k+'/kunye_yeni.js';if(fs.existsSync(f)){const w=yuk(f);for(const g of Object.keys(w))for(const d of w[g])m[d.id]=m[d.id]||d;}}
for(const id of process.argv.slice(2))console.log(id,m[id]?m[id].f+' → '+m[id].t+' '+m[id].ad:'YOK');
if(process.argv.length<3){for(const id of Object.keys(m))console.log(id,m[id].f,m[id].t);}

const vm=require('vm'),fs=require('fs'),path=require('path');
const KOK='C:/atlas/.claude/worktrees/dogu/';
function yuk(f){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(f,'utf8'),sb);return sb.window}
const m={};
for(const d of yuk(KOK+'data/devletler.js').DEVLETLER)m[d.id]=d;
for(const k of fs.readdirSync(KOK+'denetim/dogu')){const f=KOK+'denetim/dogu/'+k+'/kunye_yeni.js';if(fs.existsSync(f)){const w=yuk(f);for(const g of Object.keys(w))for(const d of w[g])m[d.id]=m[d.id]||d}}
for(const id of process.argv.slice(2)){const d=m[id];console.log(id,d?[d.ad,d.f,d.t,d.baskent].join(' | '):'YOK')}

const fs=require('fs'),vm=require('vm'),path=require('path');
const KOK='C:/atlas/.claude/worktrees/dogu';
function yukle(f){const sb={window:{}};vm.createContext(sb);try{vm.runInContext(fs.readFileSync(f,'utf8'),sb)}catch(e){}return sb.window}
const all={};
function ekle(arr,kay){for(const d of arr||[]) if(d&&d.id&&!all[d.id]) all[d.id]={id:d.id,ad:d.ad,f:d.f,t:d.t,baskent:d.baskent,kay};}
ekle(yukle(KOK+'/data/devletler.js').DEVLETLER,'main');
ekle(yukle(KOK+'/denetim/_gecici_devletler_ms1.js').DEVLETLER,'ms1');
const base=KOK+'/denetim/dogu';
for(const k of fs.readdirSync(base)){const f=base+'/'+k+'/kunye_yeni.js';if(!fs.existsSync(f))continue;const w=yukle(f);for(const g in w) ekle(w[g],k);}
fs.writeFileSync(__dirname+'/_idler.json',JSON.stringify(all));
const re=new RegExp(process.argv[2]||'.','i');
for(const id in all){const d=all[id];if(re.test(id+' '+d.ad))console.log(id,'|',d.ad,'|',d.f,d.t,'|',d.baskent||'','|',d.kay)}

const vm=require('vm'),fs=require('fs');
const KOK='C:/atlas/.claude/worktrees/dogu';
const sb={window:{}};vm.createContext(sb);
for(const f of fs.readdirSync(KOK+'/data')){ if(/^yerlesimler.*\.js$/.test(f)){ try{vm.runInContext(fs.readFileSync(KOK+'/data/'+f,'utf8'),sb);}catch(e){} } }
const gap=JSON.parse(fs.readFileSync(KOK+'/denetim/dogu/kuyruk_cin_bosluk.json','utf8'));
const out={};
for(const g of gap){
  const hit=[];
  for(const k of Object.keys(sb.window)) for(const y of (sb.window[k]||[])) if(y&&y.ad===g.ad) hit.push(y);
  out[g.ad]={bulunan:hit.length, ilk:hit[0]&&hit[0].s&&hit[0].s[0]?{f:hit[0].s[0].f,t:hit[0].s[0].t,d:hit[0].s[0].d}:null, mevcut_ilk_f:g.mevcut_ilk_f};
}
fs.writeFileSync(KOK+'/denetim/dogu/kuyrukcin/_mevcut_ilk.json',JSON.stringify(out,null,1));
for(const a of Object.keys(out)) console.log(a,JSON.stringify(out[a]));

const vm=require('vm'),fs=require('fs');
const D='C:/atlas/.claude/worktrees/dogu/denetim/dogu/';
const out=[];
for(const [f,g] of [['afrika1/yerlesimler_dogu_afrika1.js','YERLESIMLER_DOGU_AFRIKA1'],['amerika2/yerlesimler_dogu_amerika2.js','YERLESIMLER_DOGU_AMERIKA2'],['amerika1/yerlesimler_dogu_amerika1.js','YERLESIMLER_DOGU_AMERIKA1'],['amerika3/yerlesimler_dogu_amerika3.js','YERLESIMLER_DOGU_AMERIKA3']]){
 if(!fs.existsSync(D+f))continue;
 const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(D+f,'utf8'),sb);
 for(const y of sb.window[g]){ if(!y.kuyruk_gerekli)continue;
  console.log('==',y.ad,y.lat,y.lon,'kur',y.kur,'bit',y.bit,'KG',y.kuyruk_gerekli);
  for(const s of y.s)console.log('  ',s.f,s.t,s.d,s.kesinlik);
  console.log('  not:',(y.not||'').slice(0,400));}}

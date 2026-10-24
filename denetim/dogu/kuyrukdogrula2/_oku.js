const vm=require('vm'),fs=require('fs');
const D='C:/atlas/.claude/worktrees/dogu/denetim/dogu/';
const Z=(()=>{const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(D+'kuyrukyeni2/zincir_kuyruk_ham.js','utf8'),sb);return sb.window.ZINCIR_DOGU_KUYRUKYENI2})();
const need={};Z.forEach(z=>need[z.kume+'|'+z.ad]=1);
for(const k of ['hint2','hint3','gdasya2','gdasya3','bozkir1']){
 const sb={window:{}};vm.createContext(sb);
 vm.runInContext(fs.readFileSync(D+k+'/yerlesimler_dogu_'+k+'.js','utf8'),sb);
 for(const v of Object.values(sb.window)) for(const y of v){ if(!need[k+'|'+y.ad])continue;
  console.log('##',k,y.ad,y.lat,y.lon,'kur',y.kur,'bit',y.bit,'KG',y.kuyruk_gerekli);
  y.s.forEach(s=>console.log('   ',s.f,s.t,s.d,s.kesinlik));}
}

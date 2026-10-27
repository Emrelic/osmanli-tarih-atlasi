const vm=require('vm'),fs=require('fs');
const D='C:/atlas/.claude/worktrees/dogu/denetim/dogu/';
for(const k of ['hint2','hint3','gdasya2','gdasya3','bozkir1']){
 const sb={window:{}};vm.createContext(sb);
 vm.runInContext(fs.readFileSync(D+k+'/yerlesimler_dogu_'+k+'.js','utf8'),sb);
 for(const v of Object.values(sb.window)) for(const y of v){ if(!y.kuyruk_gerekli) continue;
  console.log('##',k,y.ad,y.lat,y.lon,'kur',y.kur,'KG',y.kuyruk_gerekli,'bit',y.bit);
  y.s.forEach(s=>console.log('   ',s.f,s.t,s.d));
  console.log('   not:',(y.not||'').slice(0,160));}
}
const sb={window:{}};vm.createContext(sb);
vm.runInContext(fs.readFileSync(D+'kuyrukyeni1/zincir_kuyruk.js','utf8'),sb);
console.log('K1 ad:',sb.window.ZINCIR_DOGU_KUYRUKYENI1.map(x=>x.ad).join(' | '));

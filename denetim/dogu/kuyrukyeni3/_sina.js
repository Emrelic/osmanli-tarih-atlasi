const vm=require('vm'),fs=require('fs');const D='C:/atlas/.claude/worktrees/dogu/denetim/dogu/';
function y(f){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(D+f,'utf8'),sb);return sb.window;}
const z=y('kuyrukyeni3/zincir_kuyruk.js').ZINCIR_DOGU_KUYRUKYENI3;
const src={};for(const [f,g] of [['afrika1/yerlesimler_dogu_afrika1.js','YERLESIMLER_DOGU_AFRIKA1'],['amerika2/yerlesimler_dogu_amerika2.js','YERLESIMLER_DOGU_AMERIKA2'],['amerika1/yerlesimler_dogu_amerika1.js','YERLESIMLER_DOGU_AMERIKA1'],['amerika3/yerlesimler_dogu_amerika3.js','YERLESIMLER_DOGU_AMERIKA3']])for(const r of y(f)[g])src[r.ad]=r;
let bad=0;for(const e of z){const r=src[e.ad];const son=r.s[r.s.length-1].t;const bas=e.s_ek.length?e.s_ek[0].f:(e.bit||e.kuyruk_gerekli.split(' ')[0]);
 if(bas!==son){bad++;console.log('UYUMSUZ',e.ad,son,bas);}}
console.log('kayit',z.length,'uyumsuz',bad,'bit',z.filter(e=>e.bit).length,'kuyruk',z.filter(e=>e.kuyruk_gerekli).length,'tam',z.filter(e=>e.s_ek.length&&!e.bit&&!e.kuyruk_gerekli).length);

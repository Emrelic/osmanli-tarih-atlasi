// onceki cin1/2/3 yama parcalarini yukler -> {sehir: [ {f,t,d,kesinlik,kaynak,_dosya} ]} (siralanmis)
const fs=require('fs'),vm=require('vm');
const KOK='C:/atlas/.claude/worktrees/dogu/denetim/dogu/';
function yukleJs(f){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(f,'utf8'),sb);return sb.window;}
const out={};
function ekle(ad,s,dosya){ (out[ad]=out[ad]||[]); for(const p of s) out[ad].push(Object.assign({},p,{_dosya:dosya})); }
let w=yukleJs(KOK+'cin1/yama_cin1.js'); for(const k of Object.keys(w)) for(const y of w[k]) ekle(y.ad,y.s_onek,'cin1');
for(const y of JSON.parse(fs.readFileSync(KOK+'cin2/yama_cin2.json','utf8'))) ekle(y.ad,y.s_onek||y.s,'cin2');
w=yukleJs(KOK+'cin3/yama_dogu_cin3.js'); for(const k of Object.keys(w)) for(const y of w[k]) ekle(y.ad,y.s_onek||y.s,'cin3');
for(const a of Object.keys(out)) out[a].sort((x,y)=>x.f<y.f?-1:x.f>y.f?1:(x.t<y.t?-1:1));
module.exports=out;
if(require.main===module){
  const isim=process.argv.slice(2);
  for(const a of Object.keys(out)){ if(isim.length&&!isim.includes(a)) continue; console.log('==',a); for(const p of out[a]) console.log('  ',p.f,p.t,p.d,p._dosya,'kayn',(p.kaynak||'').length);}
}

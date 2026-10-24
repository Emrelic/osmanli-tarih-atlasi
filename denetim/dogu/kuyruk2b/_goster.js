const fs=require('fs'),vm=require('vm');
const KOK='C:/atlas/.claude/worktrees/dogu';
const adlar=process.argv.slice(2);
function yukle(f){const sb={window:{}};vm.createContext(sb);try{vm.runInContext(fs.readFileSync(f,'utf8'),sb)}catch(e){console.error('hata',f,e.message)}return sb.window}
for(const f of fs.readdirSync(KOK+'/data').filter(x=>/^yerlesimler.*\.js$/.test(x))){
  const w=yukle(KOK+'/data/'+f);
  for(const k of Object.keys(w)){ if(!Array.isArray(w[k]))continue;
   for(const y of w[k]) if(y&&adlar.includes(y.ad)){console.log('MEVCUT',f,y.ad,y.lat,y.lon,'kur',y.kur);for(const p of y.s||[]) console.log('  ',p.f,p.t,p.d,p.kesinlik||'', (p.kaynak||'').slice(0,60));}}
}
const parcalar=['hint1/yama_hint1.js','hint2/yama_hint2.js','hint3/yama_hint3.js','gdasya1/yama_gdasya1.js','gdasya2/yama_gdasya2.js','koja1/yama_koja1.js','koja2/yama_koja2.js','hint1/yerlesimler_dogu_hint1.js'];
for(const p of parcalar){ const w=yukle(KOK+'/denetim/dogu/'+p); for(const k of Object.keys(w)) for(const y of w[k]) if(adlar.includes(y.ad)){console.log('YAMA',p,y.ad,y.mevcut_zincir_basi||'',y.devam_gerekli||'',y.lat||'',y.lon||'');for(const d of (y.s_onek||y.s)) console.log('  ',d.f,d.t,d.d,d.kesinlik||'');}}

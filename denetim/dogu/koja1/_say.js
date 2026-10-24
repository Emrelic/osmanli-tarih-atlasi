const fs=require('fs'),vm=require('vm');
const dir='C:/atlas/.claude/worktrees/dogu/denetim/dogu/koja1/';
const sb={window:{}};vm.createContext(sb);
for(const f of ['kunye_yeni.js','kronoloji_cok_dogu_koja1.js','kronoloji_sinir_dogu_koja1.js','yerlesimler_dogu_koja1.js','yama_koja1.js'])vm.runInContext(fs.readFileSync(dir+f,'utf8'),sb);
const W=sb.window;
const girdi=JSON.parse(fs.readFileSync('C:/atlas/.claude/worktrees/dogu/denetim/dogu/girdi_koja1.json','utf8'));
const cok=W.KRONOLOJI_COK_DOGU_KOJA1, sin=W.KRONOLOJI_SINIR_DOGU_KOJA1;
const rows=[];
for(const g of girdi){
  const c=cok.filter(m=>(m.taraflar||[]).includes(g.id)).length;
  const s=sin.filter(m=>(m.taraflar||[]).includes(g.id)||m.devlet===g.id).length;
  const k=(W.DOGU_KUNYE_KOJA1.find(d=>d.id===g.id)||{kronoloji:[]}).kronoloji.length;
  rows.push(g.id+': cok '+c+' + sinir '+s+(k?' + kunye-kron '+k:'')+' (girdide mevcut '+g.kronoloji_500_1281+')');
}
console.log(rows.join('\n'));
const gun=cok.filter(m=>m.kesinlik==='gun').length, ay=cok.filter(m=>m.kesinlik==='ay').length, yil=cok.filter(m=>m.kesinlik==='yil').length;
console.log('cok toplam',cok.length,'gun',gun,'ay',ay,'yil',yil);
const sg=sin.filter(m=>m.kesinlik==='gun').length;
console.log('sinir toplam',sin.length,'gun',sg,'ay',sin.filter(m=>m.kesinlik==='ay').length,'yil',sin.filter(m=>m.kesinlik==='yil').length);
let dil=0,bos=0;for(const y of W.YAMA_DOGU_KOJA1){dil+=y.s_onek.length;bos+=y.s_onek.filter(s=>s.d==='__BOSLUK__').length}
let dil2=0;for(const y of W.YERLESIMLER_DOGU_KOJA1)dil2+=y.s.length;
console.log('yama',W.YAMA_DOGU_KOJA1.length,'dilim',dil,'bosluk',bos,'| yeni yer',W.YERLESIMLER_DOGU_KOJA1.length,'dilim',dil2);

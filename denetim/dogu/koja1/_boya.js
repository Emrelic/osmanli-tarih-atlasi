const fs=require('fs'),vm=require('vm');
const KOK='C:/atlas/.claude/worktrees/dogu';
const dir=KOK+'/denetim/dogu/koja1/';
const sb={window:{}};vm.createContext(sb);
for(const f of ['kunye_yeni.js','yerlesimler_dogu_koja1.js','yama_koja1.js'])vm.runInContext(fs.readFileSync(dir+f,'utf8'),sb);
const kullan={};
const W=sb.window;
for(const y of W.YAMA_DOGU_KOJA1)for(const s of y.s_onek)kullan[s.d]=(kullan[s.d]||0)+1;
for(const y of W.YERLESIMLER_DOGU_KOJA1)for(const s of y.s)kullan[s.d]=(kullan[s.d]||0)+1;
const ren=fs.readFileSync(KOK+'/arac/renkler.py','utf8');
const yok=[];
for(const id of Object.keys(kullan)){ if(id==='__BOSLUK__')continue; if(!ren.includes('"'+id+'"')&&!ren.includes("'"+id+"'"))yok.push(id+' ('+kullan[id]+' dilim)'); }
console.log('kullanilan devlet kimligi:',Object.keys(kullan).length);
console.log('BOYALAR yok:',yok.join(' ; '));

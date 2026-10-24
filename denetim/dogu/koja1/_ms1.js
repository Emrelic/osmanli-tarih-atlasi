const fs=require('fs'),vm=require('vm');
const sb={window:{}};vm.createContext(sb);
vm.runInContext(fs.readFileSync('C:/atlas/.claude/worktrees/dogu/denetim/_gecici_devletler_ms1.js','utf8'),sb);
const ids=process.argv.slice(2);
for(const d of sb.window.DEVLETLER){ if(ids.includes(d.id)){ console.log('##',d.id,d.f,d.t,d.baskent,d.tur,d.bolge); for(const m of d.kronoloji||[]) console.log('  ',m.t,m.b,'|',(m.kaynak||'').slice(0,120)); } }

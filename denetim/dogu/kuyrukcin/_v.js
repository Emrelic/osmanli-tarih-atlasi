// node _v.js <sayfa> <baslangic-metni> [uzunluk] -> sayfada baslangic metninden itibaren temizlenmis metin
const fs=require('fs'),path=require('path'),cp=require('child_process');
const CACHE='C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/ws';
const [,,page,anchor,len]=process.argv;
const f=path.join(CACHE,Buffer.from(page).toString('hex')+'.txt');
if(!fs.existsSync(f)) cp.spawnSync('node',[__dirname+'/_ws.js',page]);
let t=fs.readFileSync(f,'utf8');
t=t.replace(/\[\[[^|\]]*\|([^\]]*)\]\]/g,'$1').replace(/\[\[([^\]]*)\]\]/g,'$1').replace(/\{\{[^}]*\}\}/g,'').replace(/<ref>[\s\S]*?<\/ref>/g,'').replace(/'''/g,'');
const i=t.indexOf(anchor);
if(i<0){console.log('ANCHOR YOK');process.exit(1);}
console.log(t.slice(i,i+(+len||1500)));

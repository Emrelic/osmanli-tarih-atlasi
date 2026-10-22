// node _g.js <eser> <a> <b> <pad:0|1> <anahtar...> -> onbellekteki sayfalarda anahtar gecen CUMLELER (juan: ay-basligi | cumle)
const fs=require('fs'),path=require('path'),cp=require('child_process');
const CACHE='C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/ws';
const [,,eser,a,b,pad,...keys]=process.argv;
let n_out=0;
for(let i=+a;i<=+b;i++){
  const n=pad==='1'?String(i).padStart(3,'0'):String(i);
  const p=eser+'/卷'+n;
  const f=path.join(CACHE,Buffer.from(p).toString('hex')+'.txt');
  if(!fs.existsSync(f)){ cp.spawnSync('node',[__dirname+'/_ws.js',p]); }
  if(!fs.existsSync(f)) {console.log(p,'YOK');continue;}
  const t=fs.readFileSync(f,'utf8');
  const lines=t.split('\n');
  let yilbas='';
  for(const l of lines){
    const m=l.match(/^[　\s]*([^，。]{0,12}年[^，。]{0,10}|[^，。]{1,6}月)/);
    if(/^[　\s]*[^，。月]{0,8}年/.test(l)) yilbas=l.trim().slice(0,9);
    if(!keys.some(k=>l.includes(k))) continue;
    const head=l.trim().slice(0,10);
    for(const s of l.split('。')) if(keys.some(k=>s.includes(k))){ console.log(n+' ['+yilbas+'|'+head+'] '+s.trim().slice(0,170)); n_out++; }
  }
}

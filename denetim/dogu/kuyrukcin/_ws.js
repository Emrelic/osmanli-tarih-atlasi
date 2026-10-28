// node _ws.js <sayfa-adi> [anahtar ...]  -> zh.wikisource ham metin (onbellekli), anahtar gecen satirlari basar
const fs=require('fs'),path=require('path'),cp=require('child_process');
const CACHE='C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/ws';
const page=process.argv[2]; const keys=process.argv.slice(3);
const f=path.join(CACHE,Buffer.from(page).toString('hex')+'.txt');
let txt;
if(fs.existsSync(f)) txt=fs.readFileSync(f,'utf8');
else{
  const url='https://zh.wikisource.org/w/index.php?action=raw&title='+encodeURIComponent(page);
  const b=cp.execFileSync('curl.exe',['-sL','-A','AtlasResearch/1.0 (educational atlas project)',url],{maxBuffer:64*1024*1024});
  txt=b.toString('utf8');
  if(/^<!DOCTYPE/.test(txt)||txt.length<200){console.error('HATA/bos',txt.slice(0,100));process.exit(2);}
  fs.writeFileSync(f,txt);
}
if(!keys.length){console.log('uzunluk',txt.length);process.exit(0);}
for(const l of txt.split('\n')) if(keys.some(k=>l.includes(k))) console.log(l.trim().slice(0,500));

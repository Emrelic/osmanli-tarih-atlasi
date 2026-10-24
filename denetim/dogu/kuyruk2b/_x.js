const fs=require('fs');
const [f,pat,n,w,flag]=process.argv.slice(2);
const t=fs.readFileSync(f,'utf8').replace(/-\n(?=[a-z])/g,'').replace(/\s+/g,' ');
const re=new RegExp(pat,flag||'g');let m,c=0,last=-1e9;
while((m=re.exec(t))&&c<+n){ if(m.index-last<+w){continue} last=m.index; console.log('@'+m.index+': '+t.slice(Math.max(0,m.index-(+w)/3),m.index+(+w)));console.log('');c++}

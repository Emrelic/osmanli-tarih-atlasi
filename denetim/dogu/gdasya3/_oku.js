// node _oku.js <kaynak:coedes|hall|taylor|suv> a-b [c-d ...]   | node _oku.js <kaynak> ara <regex> [n]
const fs=require('fs');
const D='C:/Users/user/AppData/Local/Temp/claude/C--atlas--claude-worktrees-loving-brattain-e1cca0/6caf8387-0483-4635-b50e-aaab3d8a58c2/scratchpad/';
const L=fs.readFileSync(D+process.argv[2]+'.txt','utf8').split('\n');
if(process.argv[3]==='ara'){const re=new RegExp(process.argv[4],'i');let n=+process.argv[5]||30;for(let i=0;i<L.length&&n>0;i++)if(re.test(L[i])){console.log(i+1+': '+L[i].slice(0,200));n--}}
else for(const r of process.argv.slice(3)){const[a,b]=r.split('-').map(Number);console.log('----- '+r);for(let i=a-1;i<b;i++)console.log(L[i])}

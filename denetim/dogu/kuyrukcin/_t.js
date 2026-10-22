// node _t.js "1275 2 庚午" "1275 4 丁未 leap" ...  -> Julyen gun (cin2/_cal.py, +-1 gun)
const cp=require('child_process');
for(const a of process.argv.slice(2)){
  const p=a.trim().split(/\s+/);
  const r=cp.spawnSync('py',['-I',__dirname+'/../cin2/_cal.py',...p],{encoding:'utf8'});
  console.log(a,'=>',(r.stdout||r.stderr||'').trim().split('\n')[0]);
}

// node _cek.js 宋史 1 47 [pad]  -> sayfalari onbellege ceker; yalniz ozet basar
const cp=require('child_process');
const [,,eser,a,b,pad]=process.argv;
let ok=0,hata=[];
for(let i=+a;i<=+b;i++){
  const n=pad?String(i).padStart(3,'0'):String(i);
  const p=eser+'/卷'+n;
  const r=cp.spawnSync('node',[__dirname+'/_ws.js',p],{encoding:'utf8'});
  if(/uzunluk/.test(r.stdout||'')) ok++; else hata.push(n);
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,300);
}
console.log(eser,'ok',ok,'hata',hata.join(','));

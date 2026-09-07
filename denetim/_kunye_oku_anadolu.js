
const fs=require('fs');global.window={};
eval(fs.readFileSync(process.argv[2],'utf8'));
const D=window.DEVLETLER||[];
console.log(JSON.stringify(D.map(d=>({id:d.id,ad:d.ad,f:d.f,t:d.t,harita:d.harita,bolge:d.bolge}))));

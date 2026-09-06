
const fs=require("fs"),path=require("path");process.chdir("C:\\Users\\emrem\\OneDrive\\Desktop\\TAR\u0130H CO\u011eRAFYA S\u0130TES\u0130");
const {execFileSync}=require("child_process");
const dosyalar=JSON.parse(execFileSync("py",["denetim/_girdi_listesi.py"],{encoding:"utf8"}));
const out=[];
for(const f of dosyalar){global.window={};
  eval(fs.readFileSync(path.join("data",path.basename(f)),"utf8"));
  for(const k of Object.keys(global.window)) if(Array.isArray(global.window[k]))
    for(const y of global.window[k]){
      if(!Array.isArray(y.s))continue;
      const p=y.s.find(q=>q.f==="1783-09-03"&&q.d==="abd");
      if(!p)continue;
      const onceki=y.s.filter(q=>q.t==="1783-09-03").map(q=>q.d+" "+q.f).join(" · ");
      out.push({ad:y.ad,lat:y.lat,lon:y.lon,dosya:f,onceki:onceki,
                son:y.s[y.s.length-1].t});
    }}
console.log(JSON.stringify(out));

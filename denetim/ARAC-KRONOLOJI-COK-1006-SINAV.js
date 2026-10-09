// KRONOLOJI-COK-1006 sentetik sınav — app.js GERÇEK kesiti, yapay künye/dosya ile
const fs=require("fs"),vm=require("vm");const app=fs.readFileSync(process.argv[2],"utf8").split("\n");
const bas=app.findIndex(l=>l.startsWith("var KRONOLOJI_ID_OZEL")),son=app.findIndex(l=>l.startsWith("(function odakKur"));
const log=[];const ctx={console:{log:(...a)=>log.push(a.join(" ")),warn:(...a)=>log.push(a.join(" "))}};ctx.window=ctx;vm.createContext(ctx);
ctx.DEVLETLER=[{id:"aa",f:"1500-03-10",t:"1600-06-20"},{id:"bb",f:"0697-01-01",t:"0800-01-01"},{id:"tek",f:"1000-01-01",t:"1900-01-01",kronoloji:[{t:"1550-01-01",b:"ikiz"}]}];
const M={
 s1:{t:"1500-03-10",b:"f günü",taraflar:["aa"]},          // sınırda: İNER
 s2:{t:"1600-06-20",b:"t günü",taraflar:["aa"]},          // sınırda: İNER
 s3:{t:"1500-03-09",b:"f'den bir gün önce",taraflar:["aa"]}, // İNMEZ, sayılır
 s4:{t:"1600-06-21",b:"t'den bir gün sonra",taraflar:["aa"]},// İNMEZ, sayılır
 s5:{t:"1550",b:"kısmî gün",taraflar:["aa"]},             // İNER, ölçülemedi sayılır
 s6:{t:"1550-01-01",b:"tarafsız"},                        // İNMEZ, tarafsız sayılır
 s7:{t:"0750-05-05",b:"üç haneli yıl",taraflar:["bb","aa"]},// bb'ye İNER, aa'ya İNMEZ (D205)
 s8:{t:"1550-01-01",b:"ikiz",taraflar:["tek"]},            // t+b ikiz: eklenmez
 s9:{t:"1550-02-02",b:"yok künye",taraflar:["zz"]},        // künyesiz taraf sayılır
};
ctx.KRONOLOJI_YAPAY_BOLGE=Object.values(M);           // künyeye eşlenmeyen ad → yönlenir
ctx.KRONOLOJI_COK_YAPAY=[{t:"1500-01-01",b:"COK pencere dışı",taraflar:["aa"]}]; // mevcut COK yolu da sınanır
ctx.KRONOLOJI_TEK=[{t:"1551-01-01",b:"tek künye dosyası"}];  // künyeye eşlenen: ÇOK yoluna GİTMEZ
vm.runInContext(app.slice(bas,son).join("\n"),ctx);
const D={};ctx.DEVLETLER.forEach(d=>D[d.id]=d);const has=(id,m)=>(D[id].kronoloji||[]).includes(m);
const S=[
 ["S1 f günü iner",has("aa",M.s1)],["S2 t günü iner",has("aa",M.s2)],
 ["S3 f-1 inmez",!has("aa",M.s3)],["S4 t+1 inmez",!has("aa",M.s4)],
 ["S5 kısmî gün iner",has("aa",M.s5)],["S6 tarafsız inmez",!Object.values(D).some(d=>(d.kronoloji||[]).includes(M.s6))],
 ["S7a 750 bb'ye iner",has("bb",M.s7)],["S7b 750 aa'ya inmez",!has("aa",M.s7)],
 ["S8 ikiz eklenmez",D.tek.kronoloji.filter(o=>o.b==="ikiz").length===1],
 ["S9 mevcut COK pencere dışı inmez",!(D.aa.kronoloji||[]).some(o=>o.b==="COK pencere dışı")],
 ["S10 tek künye dosyası ÇOK'a gitmez (yalnız bindirilir)",D.tek.kronoloji.includes(ctx.KRONOLOJI_TEK[0])&&!(ctx.KRONOLOJI_COK_YOLU||[]).includes("KRONOLOJI_TEK")],
 ["S11 pencere dışı 4 çift basıldı",log.some(l=>/PENCERESİ DIŞINDA kalan 4 /.test(l))],
 ["S12 ölçülemedi 1 basıldı",log.some(l=>/ 1 madde × künye çiftinin penceresi ÖLÇÜLEMEDİ/.test(l))],
 ["S13 tarafsız 1 basıldı",log.some(l=>/KRONOLOJI_YAPAY_BOLGE \(1\)/.test(l))],
 ["S14 künyesiz taraf basıldı",log.some(l=>/zz \(1\)/.test(l))],
];
let ok=0;S.forEach(([a,v])=>{console.log((v?"✓":"✗")+" "+a);if(v)ok++;});console.log(ok+"/"+S.length);
if(process.argv[3]==="-v")log.forEach(l=>console.log("   "+l));process.exit(ok===S.length?0:1);

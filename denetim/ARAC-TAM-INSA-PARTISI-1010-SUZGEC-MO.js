// MÖ gün ile suzgec.js'in uc islevi — DUZELTME DEGIL, olcum. Kaynak: <agac>/js/suzgec.js (odak_cozum.js gibi global eval).
const fs=require("fs"),path=require("path");const K=process.argv[2];
global.window=global; global.document=undefined;
(0,eval)(fs.readFileSync(path.join(K,"js/suzgec.js"),"utf8"));
const S=global.SUZGEC||global.Suzgec||global.suzgec;
if(!S){console.log("export bulunamadi",Object.keys(global).filter(k=>/uzgec/i.test(k)));process.exit(2);}
const P=[{d:"ahameni",f:"-0538-01-01",t:"-0330-10-22",kid:"ahameni",k:"Ahameni"},{d:"selefki",f:"-0311-01-01",t:"-0140-07-03",kid:"selefki",k:"Selefki"}];
const y={ad:"Sippar (SENTETIK)",s:P,v:P,isg:P};
const g=[["-0400-06-15","ahameni (tek taraf degil: f,t,gs ucu negatif)"],["-0200-01-01","selefki"],["-0320-01-01","'' (bosluk)"],["-0538-01-01","ahameni (sinir gunu)"],["-0600-01-01","'' (oncesi)"],["1500-01-01","''"]];
console.log("gun".padEnd(13),"beklenen".padEnd(44),"sahipAnahtari".padEnd(16),"isgalAnahtari".padEnd(14),"aktifVAdi");
for(const [gs,b] of g) console.log(gs.padEnd(13),b.padEnd(44),JSON.stringify(S.sahipAnahtari({s:P},gs)).padEnd(16),JSON.stringify(S.isgalAnahtari({isg:P},gs)).padEnd(14),JSON.stringify(S.aktifVAdi({v:P},gs)));
for(const [a,f] of [["-0330-10-18",-1],["-0330-10-18",1],["0000-01-01",-1],["-0001-12-31",1],["1500-03-01",-1]]) console.log("gunKaydir",a,f,"→",JSON.stringify(S.gunKaydir(a,f)));

const fs=require('fs'),vm=require('vm');
function y(f){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync(f,'utf8'),sb);return sb.window;}
const a=y('data/devletler.js').DEVLETLER.concat((y('denetim/_gecici_devletler_ms1.js').DEVLETLER)||[]);
const re=new RegExp(process.argv[2],'i');
for(const d of a){if(re.test(d.id+' '+d.ad))console.log(d.id,'|',d.ad,d.f,d.t,d.bolge)}

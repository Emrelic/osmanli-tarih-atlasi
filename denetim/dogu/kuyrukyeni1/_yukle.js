const fs=require('fs'),vm=require('vm');
const hedef={cin1:['Ye','Yarlung','Leshou'],cin2:['Sanggyeong','Xiazhou'],koja1:['Gimhae','Goryeong','Sabi','Sanggyeong'],koja2:['Jindo'],gdasya1:['Nakhon Pathom','Halin','Muara Kaman'],hint1:['Valabhi','Banavasi','Anuradhapura','Aror','Chamba','Kalinganagara','Denduluru','Karnasuvarna','Kaveripattinam']};
const kisa=process.argv[2]!=='tam';
for(const k in hedef){const sb={window:{}};vm.createContext(sb);vm.runInContext(fs.readFileSync('denetim/dogu/'+k+'/yerlesimler_dogu_'+k+'.js','utf8'),sb);
const arr=sb.window['YERLESIMLER_DOGU_'+k.toUpperCase()];
for(const y of arr){if(hedef[k].some(h=>y.ad.startsWith(h))){console.log('###',k,y.ad,y.lat,y.lon,'kur',y.kur,'bit',y.bit,'kg',y.kuyruk_gerekli);
for(const s of y.s)console.log('  ',s.f,s.t,s.d,s.kesinlik,'|',(s.kaynak||'').slice(0,kisa?110:600));console.log('  not:',(y.not||'').slice(0,200));}}}

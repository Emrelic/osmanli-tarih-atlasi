global.window=global; const fs=require('fs');
const files=fs.readdirSync('data').filter(f=>/^(kronoloji|olaylar)/.test(f)&&f.endsWith('.js'));
const num=s=>{const m=/^(-?)(\d+)/.exec(String(s));return m?(m[1]?-1:1)*+m[2]:null};
const KEYS=['Tiwanaku','Wari','Huari','Moche','Nazca','Teotihuac','Tikal','Copán','Copan','Palenque','Calakmul','Kaan','Tula','Tolt','Toltek','Cahokia','Chaco','Anasazi','Pueblo','Hohokam','Olmek','Olmec','Zapotek','Monte Alb','Mixtek','Chavín','Chavin','Chimú','Chimu','Sicán','Sican','Muisca','Tairona','Taíno','Taino','İnka','Inka','Cuzco','Cusco','Cusco','Maya','Mississippi','Thule','İnuit','Inuit','Dorset','Norse','Grönland','L\'Anse','Newfoundland','Caral','Poverty Point','Hopewell','Adena','Chincha','Aztek','Mexica','Chichén','Chichen','Uxmal','Xochicalco','Cholula','El Tajín','Mapuche'];
const sayac={}; const ornek={};
for(const f of files){ const b=new Set(Object.keys(window)); try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){continue;}
  for(const k of Object.keys(window)){ if(b.has(k)||!Array.isArray(window[k])) continue;
    for(const e of window[k]){ if(!e||!e.t||num(e.t)===null||num(e.t)>=1281) continue; const m=((e.b||'')+' '+(e.yer_id||'')+' '+(e.d||'')).toString();
      for(const key of KEYS){ if(m.includes(key)){ sayac[key]=(sayac[key]||0)+1; if(!ornek[key]) ornek[key]=[]; if(ornek[key].length<2) ornek[key].push(e.t+' '+(e.b||'').slice(0,50)); } } } } }
console.log(JSON.stringify(sayac));

// yama + yeni yerlesim s: kirilmalari <-> sinir maddesi (+-30 gun), kimlik, siralama, tarih bicimi
const fs=require('fs'),vm=require('vm'),path=require('path');
const KOK='C:/atlas/.claude/worktrees/dogu';
const GUN=require(KOK+'/js/gun.js');
const dir=KOK+'/denetim/dogu/koja1/';
const sb={window:{}};vm.createContext(sb);
for(const f of ['kunye_yeni.js','kronoloji_cok_dogu_koja1.js','kronoloji_sinir_dogu_koja1.js','yerlesimler_dogu_koja1.js','yama_koja1.js'])
  vm.runInContext(fs.readFileSync(dir+f,'utf8'),sb,{filename:f});
const W=sb.window;
const ids=new Set();
const s0={window:{}};vm.createContext(s0);
vm.runInContext(fs.readFileSync(KOK+'/data/devletler.js','utf8'),s0);for(const d of s0.window.DEVLETLER)ids.add(d.id);
const s1={window:{}};vm.createContext(s1);
vm.runInContext(fs.readFileSync(KOK+'/denetim/_gecici_devletler_ms1.js','utf8'),s1);for(const d of s1.window.DEVLETLER)ids.add(d.id);
for(const d of W.DOGU_KUNYE_KOJA1)ids.add(d.id);
const hata=[];let nS=0,nKir=0;
const sin=W.KRONOLOJI_SINIR_DOGU_KOJA1;
const fmt=/^\d{4}-\d{2}-\d{2}$/;
function kontrol(ad,sl,ufukOk){
  let onceki=null;
  sl.forEach((p,i)=>{
    nS++;
    if(!fmt.test(p.f)||!fmt.test(p.t))hata.push(ad+': tarih bicimi '+p.f+' '+p.t);
    if(p.d!=='__BOSLUK__'&&!ids.has(p.d))hata.push(ad+': kimlik yok '+p.d);
    if(GUN.gun(p.f)>=GUN.gun(p.t))hata.push(ad+': f>=t '+p.f+' '+p.t);
    if(onceki!==null&&GUN.gun(p.f)<onceki)hata.push(ad+': cakisma '+p.f);
    onceki=GUN.gun(p.t);
    if(!p.kaynak)hata.push(ad+': kaynak yok '+p.f);
    // baslangic kirilmasi
    if(!(i===0&&p.f==='0500-01-01')){
      nKir++;
      const m=sin.find(x=>x.yer_id===ad&&Math.abs(GUN.gun(x.t)-GUN.gun(p.f))<=30);
      if(!m)hata.push(ad+': baslangic icin sinir maddesi yok '+p.f+' '+p.d);
    }
    // ara kirilma (t) : bir sonraki dilim bitisik degilse (kirpma) sinir maddesi gerek
    if(i<sl.length-1&&sl[i+1].f!==p.t){
      nKir++;
      const m=sin.find(x=>x.yer_id===ad&&Math.abs(GUN.gun(x.t)-GUN.gun(p.t))<=30);
      if(!m)hata.push(ad+': bitis icin sinir maddesi yok '+p.t);
    }
  });
}
for(const y of W.YAMA_DOGU_KOJA1)kontrol(y.ad,y.s_onek);
for(const y of W.YERLESIMLER_DOGU_KOJA1)kontrol(y.ad,y.s);
// sinir maddeleri: yer'in yama/yer kaydi var mi
const adlar=new Set([...W.YAMA_DOGU_KOJA1.map(y=>y.ad),...W.YERLESIMLER_DOGU_KOJA1.map(y=>y.ad)]);
for(const x of sin){ if(!adlar.has(x.yer_id))hata.push('sinir maddesi yer yok: '+x.yer_id+' '+x.t); if(/^-?\d{4}-\d{2}$/.test(x.t))hata.push('YYYY-MM '+x.t); }
for(const m of W.KRONOLOJI_COK_DOGU_KOJA1){ if(!fmt.test(m.t))hata.push('cok tarih '+m.t+' '+m.b); }
console.log(JSON.stringify({dilim:nS,kirilma:nKir,sinir:sin.length,hata:hata.length}));
hata.slice(0,60).forEach(h=>console.log('HATA',h));
process.exit(hata.length?1:0);

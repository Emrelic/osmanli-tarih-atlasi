# HALKA-ADAY · 13 Eylül 2026 · SALT OKUR
# 9 kalemin (a) halka kaydını, (b) atlas yerleşim dönemlerini, (c) aynı yer adını anan
# kronoloji maddelerini basar. Atlas dönemi yalnız "neyin düzeltileceğini" göstermek için
# okunur, DAYANAK DEĞİLDİR (CLAUDE.md §4).
import subprocess, sys, json, os
sys.stdout.reconfigure(encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi

YERLER = ["Trablus", "Derne", "Bingazi", "Kayseri", "Erzincan", "Maraş", "Batum",
          "Tilimsan", "Kandehar", "Kandiye", "Derbend"]
ANAHTAR = sys.argv[1:] or YERLER

JS = r"""
const fs=require('fs'),path=require('path');
const KOK=process.argv[1], dosyalar=JSON.parse(process.argv[2]), yerler=JSON.parse(process.argv[3]);
const Y=[];
for(const f of dosyalar){global.window={};try{eval(fs.readFileSync(path.join(KOK,'data',f),'utf8'));}catch(e){console.log('HATA',f,e.message);continue;}
  for(const k of Object.keys(window)){const v=window[k];if(Array.isArray(v))for(const r of v)if(r&&r.ad)Y.push([f,r]);}}
console.log('=== YERLESIM (atlas, dayanak DEGIL) ===');
for(const [f,r] of Y){const ana=r.ad.split(' (')[0];
  if(yerler.some(y=>ana===y||r.ad.startsWith(y+' ')))console.log(f,JSON.stringify({ad:r.ad,lat:r.lat,lon:r.lon,s:r.s,d:r.d,v:r.v,isg:r.isg,kur:r.kur}));}
// kronoloji
const html=fs.readFileSync(path.join(KOK,'index.html'),'utf8');
const kf=[...html.matchAll(/src="(data\/(?:olaylar|kronoloji)[^"?]*\.js)/g)].map(m=>m[1]);
console.log('=== KRONOLOJI ===');
for(const f of kf){global.window={};try{eval(fs.readFileSync(path.join(KOK,f),'utf8'));}catch(e){continue;}
  for(const k of Object.keys(window)){const v=window[k];if(!Array.isArray(v))continue;
    for(const o of v){if(!o||typeof o!=='object')continue;const s=JSON.stringify(o);
      if(yerler.some(y=>(o.yer_id||'').startsWith(y)||(o.b||'').includes(y)))console.log(f,s.slice(0,1400));}}}
"""
out = subprocess.run(["node", "-e", JS, KOK, json.dumps(list(girdi.GIRDI_DOSYALARI)),
                      json.dumps(ANAHTAR)], capture_output=True, text=True, encoding="utf-8")
print(out.stdout); print(out.stderr[-2000:])

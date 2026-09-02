# -*- coding: utf-8 -*-
"""BAGLAMA ON SINAVI — bir yerlesim dosyasi girdi.py'ye BAGLANMADAN once.

NICIN VAR — 2 Eylul 2026'da olculdu:
Kuyrukta bekleyen sekiz dosya tek tek sinanmisti ve HEPSI temiz gorunuyordu.
Sekizi BIRBIRIYLE karsilastirilinca `el-Ula` (ok102) ile `Ula (el-Ula)`
(ok107) arasinda **100 METRE** cikti — ayni yerlesim, iki dosyada.

Iki denetim de kacirmisti, sebepleri AYRI:
   AD CAKISMASI   "el-Ula" ile "Ula (el-Ula)" FARKLI dizgiler   -> goremedi
   TEK TEK SINAV  her dosya yalniz BAGLI evrenle karsilastirildi;
                  ikisi de bagli DEGILDI, hic karsilasmadilar   -> goremedi
=> Yakalayan tek sey MESAFE oldu, ve ancak KUYRUGUN TAMAMI ustunde.
📌 Bir mukerrer avi, kuyrugun tamami uzerinde yapilmazsa yarim kalir.

Ve bu, `el-Ula`nin AYNI GECE IKINCI kesfiydi: ok101-ok102 arasinda zaten
cozulmustu, ama karsilastirma IKI DOSYA arasinda yapilmisti.

KULLANIM
   py arac/_baglama_onsinav.py <dosya.js> [<dosya.js> ...]
   (dosya adlari data/ altindan, yalniz ad — yol degil)

SINAVLAR
   ① AD ALANI      dosya adindaki ayirt edici parca degisken adinda mi (CLAUDE.md 7)
   ② EVAL          dosya calisiyor mu, kac kayit
   ③ AD CAKISMASI  bagli evrende VE kuyrukta ayni ad var mi
   ④ MESAFE        3 km alti cift — hem bagli evrene hem KUYRUGA karsi
   ⑤ ALAN          girdi.BILINEN_ALANLAR disinda alan kullaniliyor mu

MOTORA DOKUNMAZ. girdi.py'yi yalniz OKUR — kosu sirasinda guvenle kosar
(motor_izi yalniz uret_petek.py · renkler.py · girdi.py hashler).
"""
import os, sys, json, subprocess

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(KOK)
sys.path.insert(0, "arac")
import girdi

ADAY = sys.argv[1:]
if not ADAY:
    print(__doc__)
    sys.exit(2)
yok = [f for f in ADAY if not os.path.exists(os.path.join("data", f))]
if yok:
    print("🔴 data/ altinda BULUNAMADI:", ", ".join(yok))
    sys.exit(2)

bilinen = sorted(set(getattr(girdi, "BILINEN_ALANLAR", []) or []))
bagli = [f for f in girdi.GIRDI_DOSYALARI if f not in ADAY]
print("bagli dosya: %d   sinanan: %d" % (len(bagli), len(ADAY)))
print("BILINEN_ALANLAR:", " ".join(bilinen), "\n")

JS = r"""
const fs=require('fs');
const bagli=JSON.parse(process.argv[1]), aday=JSON.parse(process.argv[2]);
const bilinen=new Set(JSON.parse(process.argv[3]));
function oku(f){global.window={};let kayit=[],adlar=[];
  try{eval(fs.readFileSync('data/'+f,'utf8'));}catch(e){return {hata:String(e).slice(0,110)};}
  for(const k of Object.keys(global.window)){const v=global.window[k];
    if(Array.isArray(v)){adlar.push(k);kayit=kayit.concat(v.map(r=>({...r,_d:f})));}}
  return {adlar:adlar,kayit:kayit};}

let B=[];for(const f of bagli){const r=oku(f);if(r.kayit)B=B.concat(r.kayit);}
const bagliAd=new Set(B.map(r=>r.ad));
const Bk=B.filter(r=>typeof r.lat==='number'&&typeof r.lon==='number');
console.log('BAGLI EVREN: '+B.length+' nokta\n');

const R=6371,t=Math.PI/180;
const km=(a,b)=>{const dl=(b.lon-a.lon)*t*Math.cos((a.lat+b.lat)/2*t),
                       dp=(b.lat-a.lat)*t; return R*Math.hypot(dl,dp);};

let H=[],kirmizi=0;
for(const f of aday){
  const r=oku(f);
  console.log('=== '+f);
  if(r.hata){console.log('   🔴 EVAL: '+r.hata);kirmizi++;continue;}
  const onek=f.replace(/^[a-z_]*?_/,'').replace('.js','').toUpperCase();
  const adOK=r.adlar.length&&r.adlar.every(a=>a.toUpperCase().includes(onek));
  if(!adOK)kirmizi++;
  console.log('   ad alani : '+r.adlar.join(',')+'   '+(adOK?'✓':'🔴 dosya adiyla ORTUSMUYOR (CLAUDE.md 7)'));
  console.log('   kayit    : '+r.kayit.length);
  const cak=r.kayit.filter(x=>bagliAd.has(x.ad)).map(x=>x.ad);
  if(cak.length)kirmizi++;
  console.log('   ad cakis : '+(cak.length?'🔴 BAGLI EVRENDE VAR: '+cak.join(', '):'✓ yok'));
  let en=1e9,kim='',benim='';
  for(const x of r.kayit){ if(typeof x.lat!=='number')continue;
    for(const b of Bk){const d=km(x,b);if(d<en){en=d;kim=b.ad;benim=x.ad;}}}
  if(en<3)kirmizi++;
  console.log('   3km(bagli): '+(en<3?'🔴':'✓')+' '+benim+' -> '+kim+'  '+en.toFixed(2)+' km');
  const bilinmeyen=new Set();
  for(const x of r.kayit)for(const k of Object.keys(x))
    if(k!=='_d'&&!bilinen.has(k))bilinmeyen.add(k);
  console.log('   alan     : '+(bilinmeyen.size?'🟡 BILINEN_ALANLAR disi: '+[...bilinmeyen].join(' '):'✓ hepsi bilinen'));
  H=H.concat(r.kayit);
}

console.log('\n────── KUYRUK ICI SINAV (adaylarin BIRBIRIYLE) ──────');
const ad={};for(const r of H)(ad[r.ad]=ad[r.ad]||[]).push(r._d);
const ic=Object.entries(ad).filter(([a,d])=>d.length>1);
if(ic.length){kirmizi++;for(const [a,d] of ic)console.log('  🔴 AD: '+a+'  '+d.join(' + '));}
else console.log('  ✓ ad cakismasi yok');
let cift=[];
for(let i=0;i<H.length;i++)for(let j=i+1;j<H.length;j++){
  if(H[i]._d===H[j]._d)continue;
  if(typeof H[i].lat!=='number'||typeof H[j].lat!=='number')continue;
  const d=km(H[i],H[j]); if(d<25)cift.push([d,H[i],H[j]]);}
cift.sort((a,b)=>a[0]-b[0]);
if(!cift.length)console.log('  ✓ 25 km icinde cift yok');
for(const [d,a,b] of cift.slice(0,10)){
  if(d<3)kirmizi++;
  console.log('  '+(d<3?'🔴':'✓')+' '+d.toFixed(2)+' km  '+a.ad+' ('+a._d+')  <->  '+b.ad+' ('+b._d+')');}

console.log('\nKIRMIZI: '+kirmizi);
process.exit(kirmizi?1:0);
"""

r = subprocess.run(["node", "-e", JS, json.dumps(bagli), json.dumps(ADAY),
                    json.dumps(bilinen)],
                   capture_output=True, text=True, encoding="utf-8")
print(r.stdout)
if r.stderr.strip():
    print("STDERR:", r.stderr[:600])
sys.exit(r.returncode)

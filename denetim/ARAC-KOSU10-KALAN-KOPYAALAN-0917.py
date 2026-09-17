"""KOSU10-KALAN — bir kopya dosyası, kaydın HANGİ dönem alanlarını yeniden yazıyor?

Kullanım: py denetim/ARAC-KOSU10-KALAN-KOPYAALAN-0917.py <dosya.js> <ad> [<ad> ...]
Dosyayı node ile değerlendirir, window.* altındaki (dizi ya da nesne içi) kayıtlarda
ad eşleşenleri bulur ve taşıdığı d/s/v/isg/kur alanlarını değerleriyle basar.
Amaç: SINA --kopya uyarısının gürültü mü (k/m, geometri, yalnız v:) yoksa gerçek
geri alma riski mi olduğunu ayırmak. Veriye YAZMAZ.
"""
import io, json, subprocess, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOD = r"""
const fs=require('fs');global.window={};
try{eval(fs.readFileSync(process.argv[1],'utf8'))}catch(e){console.log(JSON.stringify({hata:String(e)}));process.exit(0)}
const adlar=new Set(JSON.parse(process.argv[2]));const out=[];const gez=(v,yol,d)=>{if(!v||typeof v!=='object'||d>6)return;
 if(!Array.isArray(v)&&adlar.has(v.ad||v.yerlesim)){const r={yol,ad:v.ad||v.yerlesim};for(const k of ['d','s','v','isg','kur','kd','eski','yeni'])if(k in v)r[k]=v[k];out.push(r);return;}
 for(const k of Object.keys(v))gez(v[k],yol+'.'+k,d+1);};
for(const k of Object.keys(window))gez(window[k],k,0);
console.log(JSON.stringify(out));"""
r = subprocess.run(["node", "-e", KOD, sys.argv[1], json.dumps(sys.argv[2:])], capture_output=True, timeout=120)
for x in json.loads(r.stdout.decode("utf-8") or "[]") if r.stdout.strip().startswith(b"[") else [r.stdout.decode()]:
    if isinstance(x, str):
        print(x); continue
    alan = [k for k in ("d", "s", "v", "isg", "kur", "kd", "eski", "yeni") if k in x]
    print("── %s  %s  alanlar: %s" % (x["ad"], x["yol"][:40], ",".join(alan) or "(dönem alanı YOK)"))
    for k in alan:
        print("     %s: %s" % (k, json.dumps(x[k], ensure_ascii=False)[:260]))

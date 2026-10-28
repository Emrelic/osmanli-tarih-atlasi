# -*- coding: utf-8 -*-
"""ARAC-P84-ODAK-TIMUR-1006 — SALT OKUR. H-0007 ölçümü.

Bir gün + kimlik listesi için app.js `maddeOdakKutusu` ⑤ dalının (odak_kimlik)
GERÇEK `SUZGEC` işlevleriyle kuracağı kutuyu ve yerleşimleri basar; aynı gün
için `donemler[di].b` (kapsam_genis dalının Osmanlı kutusu) da basılır.
Kullanım: py denetim/ARAC-P84-ODAK-TIMUR-1006.py 1387-11-01 timurlu [id ...]
"""
import io, json, os, subprocess, sys, tempfile

KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
import girdi  # noqa: E402

gun, ids = sys.argv[1], sys.argv[2:]
havuz = girdi.yukle(sessiz=True)
ince = [{"ad": y.get("ad"), "lat": y.get("lat"), "lon": y.get("lon"),
         "d": y.get("d") or [], "v": y.get("v") or [], "s": y.get("s") or []}
        for y in havuz]
JS = r"""
const fs=require('fs'),path=require('path');
const G=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));const K=G.kok;
global.window={};const W=window;W.YERLESIMLER=G.y;
eval(fs.readFileSync(path.join(K,'data','devletler.js'),'utf8'));
eval(fs.readFileSync(path.join(K,'js','suzgec.js'),'utf8'));
const kix={};(W.DEVLETLER||[]).forEach(d=>{if(d&&d.id)kix[d.id]=d;});
const SG=W.SUZGEC;let n=0,x0=180,y0=90,x1=-180,y1=-90;const ad=[];
W.YERLESIMLER.forEach(y=>{if(typeof y.lat!=='number'||typeof y.lon!=='number')return;
 if(!SG.sahipKimlikte(SG.sahipAnahtari(y,G.gun),SG.aktifVAdi(y,G.gun),G.ids,kix))return;
 n++;ad.push(y.ad);x0=Math.min(x0,y.lon);x1=Math.max(x1,y.lon);y0=Math.min(y0,y.lat);y1=Math.max(y1,y.lat);});
let ob=null;const dy=path.join(K,'data','donemler.js');
if(fs.existsSync(dy)){eval(fs.readFileSync(dy,'utf8'));const D=W.DONEMLER||W.donemler||[];
 D.forEach(p=>{const f=p.f||p.from,t=p.t||p.to;if(f<=G.gun&&G.gun<t)ob=p.b||null;});}
process.stdout.write(JSON.stringify({n,kutu:[x0-0.35,y0-0.35,x1+0.35,y1+0.35],ad,osmanli_kutusu:ob,kunye:G.ids.map(i=>kix[i]?[i,kix[i].ad,kix[i].f,kix[i].t]:[i,'YOK'])}));
"""
fd, yol = tempfile.mkstemp(suffix=".json"); os.close(fd)
fd2, js = tempfile.mkstemp(suffix=".js"); os.close(fd2)
try:
    io.open(yol, "w", encoding="utf-8").write(json.dumps(
        {"kok": KOK.replace("\\", "/"), "y": ince, "gun": gun, "ids": ids}, ensure_ascii=False))
    io.open(js, "w", encoding="utf-8").write(JS)
    r = subprocess.run(["node", js, yol], capture_output=True, text=True, encoding="utf-8")
finally:
    os.remove(yol); os.remove(js)
if r.returncode:
    print("ÖLÇÜLEMEDİ:", r.stderr[-400:]); sys.exit(2)
print(json.dumps(json.loads(r.stdout), ensure_ascii=False, indent=1))

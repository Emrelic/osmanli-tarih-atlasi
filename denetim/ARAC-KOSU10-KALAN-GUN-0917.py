"""KOSU10-KALAN — bir GÜNDE kırılan yerleşimler ve o günün ±30 gün çekirdek maddeleri.

Kullanım: py denetim/ARAC-KOSU10-KALAN-GUN-0917.py 1395-01-01 [1395-06-03 ...]
Her gün için: o günde başlayan/biten d/v/s/isg dönemleri (girdi.yukle, kaynak dosyası)
ve data/olaylar*.js (Değişmez 2 evreni) içinde ±30 gündeki maddeler.
Amaç: bir madde ya da dönem günü taşınırsa hangi kırılmanın maddesiz kalacağını
ÖNCEDEN görmek (D147 — sayaç kapanışı ilgi demek değildir; madde başlığı basılır).
"""
import sys, io, glob, json, subprocess, datetime
sys.path.insert(0, "arac")
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
import girdi

KOD = r"""const fs=require('fs');global.window={};const out=[];
for(const f of JSON.parse(process.argv[1])){const once=new Set(Object.keys(window));
 try{eval(fs.readFileSync(f,'utf8'))}catch(e){continue}
 for(const k of Object.keys(window)){if(once.has(k))continue;const v=window[k];if(!Array.isArray(v))continue;
  for(const o of v)if(o&&o.t)out.push({f,t:String(o.t),b:String(o.b||'')});}}
process.stdout.write(JSON.stringify(out));"""


def gun(s):
    s = s if len(s) >= 10 else (s + "-01-01")[:10]
    return datetime.date(int(s[:4]), int(s[5:7]), int(s[8:10]))


def main():
    Y = girdi.yukle(sessiz=True)
    dos = sorted(glob.glob("data/olaylar*.js"))
    r = subprocess.run(["node", "-e", KOD, json.dumps(dos)], capture_output=True, timeout=300)
    O = json.loads(r.stdout.decode("utf-8"))
    for g in sys.argv[1:]:
        G = gun(g)
        print("══ %s" % g)
        for y in Y:
            for k in ("d", "v", "s", "isg"):
                for p in y.get(k) or []:
                    for uc in ("f", "t"):
                        if p.get(uc) == g:
                            print("   kırılma  %-22s %-3s %s-ucu %s  [%s]" % (y["ad"], k, uc, p.get("d", ""), y.get("_kaynak")))
        for o in O:
            try:
                fark = (gun(o["t"]) - G).days
            except Exception:
                continue
            if abs(fark) <= 30:
                print("   madde    %+4d gün  %s  %s  (%s)" % (fark, o["t"], o["b"][:90], o["f"]))


main()

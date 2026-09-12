# -*- coding: utf-8 -*-
"""KITA 13 — `SEFERLER` KUMESI OLCUMU (SALT OKUR).

Paket 0043'un UC maddesi (H-0001 · H-0011 ikinci yarisi · H-0016 ① ve ③)
ayni seyi istiyor: SEFER GUZERGAHI kesikli cizgi + ok ile cizilsin.

`CLAUDE.md §5` diyor ki `data/savaslar.js` icinde `SEFERLER` kumesi ZATEN
VAR. `D045`: istenen seyin altyapisi zaten olabilir — SIFIRDAN TASARLAMA,
ONCE OLC.

🔴 VE KENDI ONCEKI OLCUMUME GUVENMIYORUM: 10 Eylul'de basit bir
   `\{[^{}]*\}` dilimleyicisiyle "SEFERLER 61 kayit · lat 0" olcmustum.
   O kalip IC ICE suslu parantez tasiyan kaydi KACIRIR — ve bir guzergah
   kaydi tam olarak oyle gorunur (`gecis:[{...},{...}]`). Bu yuzden
   dosya NODE ile, kendi dilinde okunuyor (D023).
"""
import json, os, subprocess, sys, io, tempfile

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

BETIK = """
const fs=require('fs');
global.window={};
eval(fs.readFileSync(process.argv[2],'utf8'));
const cik={};
for(const k of Object.keys(global.window)){
  const v=global.window[k];
  if(!Array.isArray(v)) { cik[k]={tip:typeof v, n:null}; continue; }
  const alanlar={};
  for(const r of v){ if(r&&typeof r==='object') for(const a of Object.keys(r)) alanlar[a]=(alanlar[a]||0)+1; }
  cik[k]={tip:'dizi', n:v.length, alanlar:alanlar, ornek:v.slice(0,2)};
}
console.log(JSON.stringify(cik));
"""

yol = os.path.join(tempfile.gettempdir(), "_kita13_sefer.js")
io.open(yol, "w", encoding="utf-8").write(BETIK)
r = subprocess.run(["node", yol, os.path.join(KOK, "data", "savaslar.js")],
                   capture_output=True, text=True, encoding="utf-8",
                   errors="replace")
if r.returncode != 0:
    print("NODE HATASI:", r.stderr[:400])
    sys.exit(1)

d = json.loads(r.stdout)
print("# data/savaslar.js — window degiskenleri")
for k, v in d.items():
    print("=" * 72)
    print("%s  tip=%s  n=%s" % (k, v.get("tip"), v.get("n")))
    al = v.get("alanlar") or {}
    if al:
        print("  ALANLAR (kac kayitta):")
        for a, n in sorted(al.items(), key=lambda x: -x[1]):
            print("     %-16s %4d / %s" % (a, n, v.get("n")))
    orn = v.get("ornek") or []
    for o in orn[:2]:
        print("  ORNEK:", json.dumps(o, ensure_ascii=False)[:300])

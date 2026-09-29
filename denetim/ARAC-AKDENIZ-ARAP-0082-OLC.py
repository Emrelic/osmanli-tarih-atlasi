# -*- coding: utf-8 -*-
"""AKDENIZ-ARAP-0082 olcum aleti — bir gunde bir kutudaki (ya da adlari verilen)
yerlesimlerin TAM durumunu basar: taban sahibi (d:/v:/s:) + o gun etkin isg: + kaynak.

  py denetim/ARAC-AKDENIZ-ARAP-0082-OLC.py --gun 1799-05-20 --kutu 29 29 32 34
  py denetim/ARAC-AKDENIZ-ARAP-0082-OLC.py --gun 1818-09-09 --ad Hail Deriyye
  py denetim/ARAC-AKDENIZ-ARAP-0082-OLC.py --tam --ad Asyut      # butun donemler

Evren: girdi.GIRDI_DOSYALARI (tek otorite, CLAUDE.md §5). Yalniz OKUR.
"""
import sys, os, io, contextlib, argparse
sys.path.insert(0, os.path.join(os.getcwd(), "arac"))
sys.stdout.reconfigure(encoding="utf-8")
with contextlib.redirect_stdout(io.StringIO()):
    import girdi
    Y = girdi.yukle()
if isinstance(Y, tuple):
    Y = Y[0]

ap = argparse.ArgumentParser()
ap.add_argument("--gun")
ap.add_argument("--kutu", nargs=4, type=float)
ap.add_argument("--ad", nargs="*")
ap.add_argument("--tam", action="store_true")
a = ap.parse_args()

def ic(p, g):
    return p.get("f", "0000") <= g < p.get("t", "9999")

def taban(y, g):
    for p in y.get("d") or []:
        if ic(p, g):
            return "OSMANLI"
    for p in y.get("v") or []:
        if ic(p, g):
            return "tabi:" + str(p.get("kid") or p.get("d") or "?")
    for p in y.get("s") or []:
        if ic(p, g):
            return p.get("d", "?")
    return "-"

def sec(y):
    if a.ad:
        n = y["ad"].casefold()
        return any(x.casefold() in n for x in a.ad)
    if a.kutu:
        la1, lo1, la2, lo2 = a.kutu
        return la1 <= y["lat"] <= la2 and lo1 <= y["lon"] <= lo2
    return False

S = sorted([y for y in Y if sec(y)], key=lambda y: (-y["lat"], y["lon"]))
print(f"EVREN {len(Y)} nokta · secilen {len(S)}")
for y in S:
    if a.tam:
        print(f"\n## {y['ad']}  {y['lat']:.3f} {y['lon']:.3f}  k{y.get('k')}  m:{y.get('m','')}")
        for kat in ("d", "v", "s", "isg"):
            for p in y.get(kat) or []:
                kay = str(p.get("kaynak", ""))[:160]
                ek = p.get("kid") or ""
                print(f"   {kat:3} {p.get('f','')} → {p.get('t','')}  {p.get('d','')} {ek}  {('· '+kay) if kay else ''}")
        if y.get("kaynak"):
            print("   kayit-kaynak:", str(y["kaynak"])[:200])
    else:
        g = a.gun
        isg = [p for p in (y.get("isg") or []) if ic(p, g)]
        iz = ",".join(f"{p.get('d')}({p.get('f')}→{p.get('t')})" for p in isg)
        print(f"  {y['ad'][:30]:30} {y['lat']:7.3f} {y['lon']:7.3f} k{y.get('k')} {taban(y,g):28} {('ISG '+iz) if iz else ''}")

"""ASYA-0079 — secilen noktalarin butun s:/v: pencereleri (kuru)."""
import sys
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, "arac")
import girdi

Y = girdi.yukle(sessiz=True)
mod = sys.argv[1]
if mod == "ad":
    hedef = [y for y in Y if any(a.lower() in y["ad"].lower() for a in sys.argv[2:])]
elif mod == "kimlik":
    hedef = [y for y in Y if any(p.get("d") in sys.argv[2:] for p in (y.get("s") or []) + (y.get("v") or []))]
else:
    la0, la1, lo0, lo1 = map(float, sys.argv[2:6])
    hedef = [y for y in Y if la0 <= y["lat"] <= la1 and lo0 <= y["lon"] <= lo1]
for y in hedef:
    print(f"\n# {y['ad']} ({y['lat']:.2f},{y['lon']:.2f}) {y['_kaynak']} f={y.get('f')} t={y.get('t')} tur={y.get('tur','')}")
    for kat in ("s", "v", "isg"):
        for p in y.get(kat) or []:
            ek = {k: v for k, v in p.items() if k not in ("f", "t", "d")}
            print(f"   {kat}: {p.get('f')} .. {p.get('t')}  {p.get('d')}  {str(ek)[:160] if ek else ''}")

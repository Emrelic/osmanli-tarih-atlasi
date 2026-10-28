# P84-BRASSO-TEMESVAR-1006 — SALT OKUR: hedef yerleşimlerin ve 60 km komşularının
# s:/isg:/v:/d: zincirlerini motorun kendi yükleyicisiyle (girdi.yukle) döker.
import io, os, sys
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
os.chdir(KOK)
import girdi
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
Y = girdi.yukle(sessiz=True)
HEDEF = sys.argv[1:] or ["Brassó", "Temeşvar", "Lendava", "Murska Sobota"]
ad = {y["ad"]: y for y in Y}
def bas(y, girinti=""):
    print(f"{girinti}{y['ad']}  [{y['_kaynak']}]  lat={y.get('lat')} lon={y.get('lon')}  f={y.get('f','')} t={y.get('t','')}")
    for kat in ("s", "isg", "v", "d"):
        for p in y.get(kat) or []:
            ek = {k: v for k, v in p.items() if k not in ("f", "t", "d")}
            print(f"{girinti}   {kat}: {p.get('f')} → {p.get('t')}  d={p.get('d')}  {ek if ek else ''}")
for h in HEDEF:
    eş = [y for y in Y if h.lower() in y["ad"].lower()]
    if not eş:
        print(f"BULUNAMADI: {h}"); continue
    for y in eş:
        print("=" * 100); bas(y)
        kom = sorted(((girdi.km(y["lat"], y["lon"], z["lat"], z["lon"]), z) for z in Y if z is not y),
                     key=lambda t: t[0])
        print(f"  -- 60 km içindeki komşular:")
        for k, z in kom:
            if k > 60: break
            print(f"  ({k:.0f} km)", end=""); bas(z, "  ")

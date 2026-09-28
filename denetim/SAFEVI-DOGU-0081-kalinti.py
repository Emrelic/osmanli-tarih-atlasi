"""SAFEVI-DOGU-0081 — verilen gün X devletinde olan noktalar, X döneminin bitişi ve ardılı.
Kullanım: py denetim/SAFEVI-DOGU-0081-kalinti.py <devlet> <gün> [kutu la1,la2,lo1,lo2]
D207: atlas dökümü, delil değil.
"""
import importlib.util
import sys

sys.path.insert(0, "arac")
sys.stdout.reconfigure(encoding="utf-8")
sp = importlib.util.spec_from_file_location("d", "denetim/SAFEVI-DOGU-0081-dok.py")
d = importlib.util.module_from_spec(sp)
sp.loader.exec_module(d)
import girdi  # noqa: E402

dev, gun = sys.argv[1], sys.argv[2]
k = d.kutu(sys.argv[3] if len(sys.argv) > 3 else None)
Y = girdi.yukle(sessiz=True)
n = 0
for y in sorted(Y, key=lambda y: y.get("lon") or 0):
    if not d.icinde(y, k) or d.sahip(y, gun) != dev:
        continue
    per = [p for p in (y.get("s") or []) if p.get("d") == dev and d.ic(p, gun)]
    if not per:
        continue
    per = per[0]
    t = per.get("t")
    nxt = [p.get("d") for p in (y.get("s") or []) if p.get("f") == t]
    if any(p.get("f") == t for p in (y.get("d") or [])):
        nxt.append("OSMANLI")
    n += 1
    print(f"{y['lat']:6.2f} {y['lon']:6.2f} {y['ad'][:30]:30s} {per.get('f')}→{t} → "
          f"{','.join(nxt) or '?'}  kaynak={'VAR' if per.get('kaynak') else '-'}  [{y['_kaynak']}]")
print("toplam", n)

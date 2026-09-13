# -*- coding: utf-8 -*-
"""PAKET-A6A — bir koordinata en yakın N nokta ve o gündeki sahipleri. SALT OKUR.
py denetim/ARAC-A6A-YAKIN-0913.py GUN LAT LON [N]
"""
import io, os, sys
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
sys.path.insert(0, os.path.join(KOK, "denetim"))
import girdi  # noqa
import importlib.util
sp = importlib.util.spec_from_file_location("olc", os.path.join(KOK, "denetim", "ARAC-A6A-OLC-0913.py"))

g, lat, lon = sys.argv[1], float(sys.argv[2]), float(sys.argv[3])
N = int(sys.argv[4]) if len(sys.argv) > 4 else 8
Y = girdi.yukle(sessiz=True)


def ic(p, gg):
    return p.get("f", "") <= gg < p.get("t", "9999")


def sahip(y, gg):
    if y.get("kur") and y["kur"] > gg:
        return "(kurulmamis)"
    for p in y.get("v") or []:
        if ic(p, gg):
            return "TABI"
    for p in y.get("d") or []:
        if ic(p, gg):
            return "OSMANLI"
    for p in y.get("s") or []:
        if ic(p, gg):
            return p.get("d")
    return "— SAHIPSIZ"


r = sorted(Y, key=lambda y: girdi.km(lat, lon, y["lat"], y["lon"]))[:N]
print(f"{g} · {lat},{lon}")
for y in r:
    print(f"  {girdi.km(lat, lon, y['lat'], y['lon']):6.1f} km  {y['ad'][:28]:28} {sahip(y, g)}")

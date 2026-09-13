# -*- coding: utf-8 -*-
"""PAKET-ARAS0048 — test noktalarının hangi TABAN petekte (petek_govde.js, ZAMANSIZ)
durduğunu ve o yerleşimin GUN'deki sahibini basar. SALT OKUR.
py denetim/ARAC-0048-PETEK-0913.py GUN "lat,lon" ["lat,lon" ...]
⚠️ petek_govde.js kur:/bit: devirlerini TAŞIMAZ (dosyanın kendi uyarısı) —
yani 'taban hücre'dir; o günkü devir/paylaştırma ayrıca düşünülmelidir.
"""
import io, os, re, sys, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
from shapely.geometry import Polygon, Point
from shapely.validation import make_valid
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi  # noqa


def oku(yol, adlar):
    s = open(os.path.join(KOK, yol), encoding="utf-8").read()
    out = {}
    for ad in adlar:
        m = re.search(r"window\." + ad + r"\s*=\s*", s)
        out[ad] = json.JSONDecoder().raw_decode(s, m.end())[0] if m else None
    return out


g = sys.argv[1]
pts = [tuple(map(float, a.split(","))) for a in sys.argv[2:]]
G = oku("data/petek_govde.js", ["PETEK_GOVDE_PARCA", "PETEK_GOVDE"])
PE = oku("data/donemler.js", ["PETEKLER"])["PETEKLER"]
Y = {y["ad"]: y for y in girdi.yukle(sessiz=True)}


def ic(p):
    return p.get("f", "") <= g < p.get("t", "9999")


def sahip(y):
    if not y:
        return "?"
    if (y.get("kur") and y["kur"] > g) or (y.get("bit") and y["bit"] <= g):
        return "(sahnede-degil" + (" · kasitli_bosluk" if y.get("kasitli_bosluk") else "") + ")"
    for k, et in (("v", "TABI"), ("d", "OSMANLI")):
        for p in y.get(k) or []:
            if ic(p):
                return et
    for p in y.get("s") or []:
        if ic(p):
            return p.get("d")
    return "(sahipsiz" + (" · kasitli_bosluk" if y.get("kasitli_bosluk") else "") + ")"


print("petek sayısı", len(G["PETEK_GOVDE"]), "· PETEKLER", len(PE))
for lat, lon in pts:
    P = Point(lon, lat)
    bul = []
    for i, parcalar in enumerate(G["PETEK_GOVDE"]):
        for pi in parcalar or []:
            h = G["PETEK_GOVDE_PARCA"][pi]
            try:
                pg = Polygon(h[0], h[1:]) if isinstance(h[0][0], list) else Polygon(h)
                if not pg.is_valid:
                    pg = make_valid(pg)
                if pg.contains(P):
                    bul.append(i)
                    break
            except Exception:
                pass
    for i in bul:
        ad = PE[i]["a"]
        y = Y.get(ad)
        print(f"({lat},{lon}) → petek {i} «{ad}» · {g} sahibi: {sahip(y)}")
    if not bul:
        print(f"({lat},{lon}) → HİÇBİR taban petekte değil (kara maskesi/tavan dışı)")

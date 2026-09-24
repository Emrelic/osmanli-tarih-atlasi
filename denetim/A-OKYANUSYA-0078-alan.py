# A-OKYANUSYA-0078 — 1923-09-01 ALAN VEKİLİ: kara ızgarasında en yakın noktanın sahibi.
# 🔴 Bu PETEK DEĞİLDİR: motorun ağırlıkları, yaslama, nehir/sırt, çöl tavanı,
# maske kesimi yok — yalnız düz Voronoi. Motor koşusu olmadan ÖNCE→SONRA'nın
# YÖNÜNÜ ve kabaca BÜYÜKLÜĞÜNÜ gösterir; kesin alan koşudan sonra ölçülür.
# Kullanım: py denetim/A-OKYANUSYA-0078-alan.py [--sina]
import sys, os, io, json, math, collections
sys.stdout.reconfigure(encoding="utf-8", errors="replace")
KOK = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(KOK, "arac"))
import girdi
from shapely.geometry import shape, Point, box
from shapely.ops import unary_union
from shapely.prepared import prep

GUN = "1923-09-01"
ADIM = 0.25
BOLGE = [  # (ad, lon0, lon1, lat0, lat1)
    ("Yeni Gine anakarası", 130.5, 150.9, -10.8, -0.3),
    ("Bismarck + Bougainville", 146.5, 156.0, -7.0, -1.5),
    ("Avustralya anakarası", 112.5, 153.8, -39.2, -10.5),
    ("Tazmanya", 144.5, 148.5, -43.7, -40.6),
    ("Yeni Zelanda", 166.0, 178.8, -47.4, -34.3),
    ("Hawaii", -160.5, -154.7, 18.8, 22.3),
]

def sahip(y):
    if y.get("kur") and y["kur"] > GUN: return None, False
    if y.get("bit") and y["bit"] <= GUN: return None, False
    for kat in ("d", "v", "s"):
        for p in y.get(kat) or []:
            if p.get("f", "0000") <= GUN < p.get("t", "9999"):
                return p.get("d"), True
    return "SAHİPSİZ", True

def noktalar(ekle):
    girdi.GIRDI_DOSYALARI[:] = [f for f in girdi.GIRDI_DOSYALARI if f != "yerlesimler_a78_okyanusya.js"]
    if ekle: girdi.GIRDI_DOSYALARI.append("yerlesimler_a78_okyanusya.js")
    P = []
    for y in girdi.yukle(sessiz=True):
        s, var = sahip(y)
        if var: P.append((y["lat"], y["lon"], s))
    return P

def en_yakin(lat, lon, P):
    c = math.cos(math.radians(lat)); best = None
    for a, b, s in P:
        dl = (b - lon + 540) % 360 - 180
        d = (a - lat) ** 2 + (dl * c) ** 2
        if best is None or d < best[0]: best = (d, s)
    return best[1]

def kara():
    d = json.load(io.open(os.path.join(KOK, "veri-kaynak", "ne_10m_land.geojson"), encoding="utf-8"))
    return unary_union([shape(f["geometry"]) for f in d["features"]])

def olc(K, P, ad, x0, x1, y0, y1):
    kutu = prep(K.intersection(box(x0, y0, x1, y1)))
    alt = [p for p in P if y0 - 12 <= p[0] <= y1 + 12 and ((x0 - 15 <= p[1] <= x1 + 15) or x0 < -150)]
    say = collections.Counter(); n = 0
    lat = y0 + ADIM / 2
    while lat < y1:
        lon = x0 + ADIM / 2
        while lon < x1:
            if kutu.contains(Point(lon, lat)):
                say[en_yakin(lat, lon, alt)] += 1; n += 1
            lon += ADIM
        lat += ADIM
    return n, say

if __name__ == "__main__":
    K = kara()
    if "--sina" in sys.argv:
        # B9: sahte nokta Yeni Gine ortasına 'sina-devleti' — ızgara onu görmeli
        P = noktalar(False) + [(-5.5, 143.0, "SINA")]
        n, s = olc(K, P, *BOLGE[0])
        print(f"SINA: {s['SINA']} / {n} hücre SINA'ya düştü →", "ATEŞLEDİ" if s["SINA"] > 0 else "ATEŞLEMEDİ")
        sys.exit()
    ONCE, SONRA = noktalar(False), noktalar(True)
    print(f"gün {GUN} · ızgara {ADIM}° · nokta ÖNCE {len(ONCE)} → SONRA {len(SONRA)}")
    for b in BOLGE:
        n, a = olc(K, ONCE, *b); _, z = olc(K, SONRA, *b)
        print(f"\n== {b[0]} — {n} kara hücresi")
        for k in sorted(set(a) | set(z), key=lambda k: -z.get(k, 0)):
            print(f"   {k:<22} ÖNCE {a.get(k,0):5d} ({100*a.get(k,0)/n:5.1f}%) → SONRA {z.get(k,0):5d} ({100*z.get(k,0)/n:5.1f}%)")

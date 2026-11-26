"""py petek.py ad1 ad2 ... -> PETEK_GOVDE (taban, zamansız) alanı km² ve sınır kutusu"""
import json, sys, math, mmap
sys.stdout.reconfigure(encoding='utf-8', errors='replace')
from shapely.geometry import Polygon
from shapely.ops import unary_union
from shapely import make_valid
S = 'C:/Users/emrem/AppData/Local/Temp/claude/C--atlas/44714e9d-a694-4c62-bbc0-2660851ade3d/scratchpad/'

def dizi(yol, deg):
    f = open(yol, 'rb'); m = mmap.mmap(f.fileno(), 0, access=mmap.ACCESS_READ)
    k = m.find(('window.%s = ' % deg).encode()); e = m.find(b';\n', k)
    return json.loads(m[k + len('window.%s = ' % deg):e])

PET = dizi(S + 'donemler.js', 'PETEKLER')
PG = dizi(S + 'petek_govde.js', 'PETEK_GOVDE')
PP = dizi(S + 'petek_govde.js', 'PETEK_GOVDE_PARCA')
print('EVREN: PETEKLER %d · PETEK_GOVDE %d · PARCA %d' % (len(PET), len(PG), len(PP)))

def km2(g):
    lat = g.centroid.y
    return g.area * 111.32 * 110.57 * math.cos(math.radians(lat))

for ad in sys.argv[1:]:
    for i, p in enumerate(PET):
        if ad in p.get('a', ''):
            gs = []
            for pi in PG[i]:
                poly = PP[pi]
                gs.append(make_valid(Polygon(poly[0], [h for h in poly[1:] if len(h) >= 4])))
            u = unary_union(gs)
            print('%s [%d] %.0f km² · kutu %s · parça %d' % (p['a'], i, km2(u), [round(x, 2) for x in u.bounds], len(gs)))
